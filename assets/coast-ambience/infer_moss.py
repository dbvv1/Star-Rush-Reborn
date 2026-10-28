"""Reproduce the coast ambience raw outputs with MOSS-SoundEffect v2.0.

This runs the pinned author inference source against locally downloaded
weights. It does not download or commit weights. Use it from a clean Python
3.12 environment with PyTorch 2.9.0+cu128 (the source's own pin) and the
runtime dependencies in the upstream pyproject (gradio is not needed).

Usage:
  python infer_moss.py --source-dir /path/to/MOSS-TTS \
      --model-dir /path/to/MOSS-SoundEffect-v2.0 --seeds 0,1 --out-dir raw

The two source-side adaptations below are required for the published
checkpoint and are documented in CREDITS.txt:
  * published vae_128d_48k.pth is a torch state_dict, while the pinned
    DAC.load() expects a numpy codec archive;
  * from_pretrained() moves models without casting them, so bfloat16 is
    applied to real weights only, leaving complex rotary buffers complex64.
"""
import argparse, hashlib, json, os, sys, time
from pathlib import Path

os.environ.setdefault("TORCHDYNAMO_DISABLE", "1")
os.environ.setdefault("HF_HUB_OFFLINE", "1")
os.environ.setdefault("TRANSFORMERS_OFFLINE", "1")

# Import the checkout before its modules are resolved; --source-dir is also
# parsed by argparse later, but module imports happen at file load time.
if "--source-dir" in sys.argv:
    _source = Path(sys.argv[sys.argv.index("--source-dir") + 1]).resolve()
    sys.path.insert(0, str(_source / "moss_soundeffect_v2"))
    sys.path.insert(0, str(_source))

import torch
from diffsynth.models.dac_vae import DAC

_orig_dac_load = DAC.load.__func__


@classmethod
def _dac_load(cls, path):
    obj = torch.load(path, map_location="cpu", weights_only=False)
    if isinstance(obj, dict) and "state_dict" in obj and "metadata" in obj:
        model = cls(**obj["metadata"].get("kwargs", {}))
        model.load_state_dict(obj["state_dict"])
        return model
    return _orig_dac_load(cls, path)


DAC.load = _dac_load

import soundfile as sf
from moss_soundeffect_v2 import MossSoundEffectPipeline


def sha256(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 22), b""):
            h.update(chunk)
    return h.hexdigest()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--source-dir", required=True)
    ap.add_argument("--model-dir", required=True)
    ap.add_argument("--out-dir", default="raw")
    ap.add_argument("--prompt", required=True)
    ap.add_argument("--seconds", type=float, default=10.0)
    ap.add_argument("--steps", type=int, default=100)
    ap.add_argument("--cfg-scale", type=float, default=4.0)
    ap.add_argument("--sigma-shift", type=float, default=5.0)
    ap.add_argument("--max-seconds", type=int, default=30)
    ap.add_argument("--seeds", default="0")
    args = ap.parse_args()

    sys.path.insert(0, str(Path(args.source_dir).resolve()))
    sys.path.insert(0, str(Path(args.source_dir).resolve() / "moss_soundeffect_v2"))
    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    t0 = time.perf_counter()
    pipe = MossSoundEffectPipeline.from_pretrained(args.model_dir, torch_dtype=torch.bfloat16, device="cuda")

    def cast_bf16(module):
        for p in module.parameters():
            p.data = p.data.to(torch.bfloat16)
        for b in module.buffers():
            if torch.is_floating_point(b):
                b.data = b.data.to(torch.bfloat16)

    for name in ("dit", "text_encoder", "vae"):
        cast_bf16(getattr(pipe.engine, name))
    torch.cuda.synchronize()
    common = {
        "prompt": args.prompt, "seconds": args.seconds, "num_inference_steps": args.steps,
        "cfg_scale": args.cfg_scale, "sigma_shift": args.sigma_shift,
        "max_inference_seconds": args.max_seconds, "torch_dtype": "bfloat16",
        "torch": torch.__version__, "cuda": torch.version.cuda, "gpu": torch.cuda.get_device_name(0),
        "torch_dynamo_disable": os.environ.get("TORCHDYNAMO_DISABLE"),
        "load_seconds": round(time.perf_counter() - t0, 2),
        "vram_unit": "GiB (bytes / 2**30)",
        "vram_after_load_allocated_gib": round(torch.cuda.memory_allocated() / 2**30, 3),
        "vram_after_load_reserved_gib": round(torch.cuda.memory_reserved() / 2**30, 3),
    }
    for seed in [int(s) for s in args.seeds.split(",")]:
        t1 = time.perf_counter()
        audio = pipe(prompt=args.prompt, seconds=args.seconds, num_inference_steps=args.steps,
                     cfg_scale=args.cfg_scale, sigma_shift=args.sigma_shift, seed=seed,
                     max_inference_seconds=args.max_seconds)
        torch.cuda.synchronize()
        path = out_dir / f"seed{seed}-{int(args.seconds)}s.wav"
        sf.write(path, audio[0].detach().cpu().float().numpy().T, pipe.sample_rate, subtype="FLOAT")
        meta = dict(common, seed=seed, generate_seconds=round(time.perf_counter() - t1, 2),
                    generate_seconds_includes="device-to-host copy and WAV write",
                    vram_peak_allocated_gib=round(torch.cuda.max_memory_allocated() / 2**30, 3),
                    vram_peak_reserved_gib=round(torch.cuda.max_memory_reserved() / 2**30, 3),
                    vram_peak_scope="process-cumulative; torch.cuda.max_memory_* was not reset "
                                    "between seeds, so this is not an independent per-seed peak",
                    sample_rate=pipe.sample_rate, channels=int(audio.shape[1]),
                    samples=int(audio.shape[2]), duration=round(audio.shape[2] / pipe.sample_rate, 4),
                    peak_abs=float(audio.abs().max()), rms=float(audio.pow(2).mean().sqrt()),
                    raw_file=path.name, raw_sha256=sha256(path), raw_bytes=path.stat().st_size)
        (out_dir / f"seed{seed}-{int(args.seconds)}s.json").write_text(
            json.dumps(meta, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        print(json.dumps(meta, ensure_ascii=False), flush=True)


if __name__ == "__main__":
    main()
