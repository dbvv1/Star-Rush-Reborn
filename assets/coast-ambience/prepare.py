"""Build the coast ambience runtime loop from the raw MOSS-SoundEffect output.

Requires Python 3, ffmpeg on PATH, and no third-party Python packages.
The raw model file stays untouched in source/; every change is deterministic
and recorded in manifest.json.
"""
from pathlib import Path
import array, hashlib, json, math, subprocess, wave

HERE = Path(__file__).parent
SOURCE = HERE / "source" / "seed0-10s.wav"
RUNTIME = HERE / "runtime" / "coast-breeze-v1.wav"
SAMPLE_RATE = 48000
LOOP_FADE = 0.75          # equal-power seam blend, seconds
TARGET_RMS = 0.08         # quiet bed, fixed before the game's 0.05 send
PEAK_CEILING = 0.90


def decode(path):
    raw = subprocess.check_output([
        "ffmpeg", "-v", "error", "-i", str(path),
        "-af", "highpass=f=25:poles=2", "-ac", "1", "-ar", str(SAMPLE_RATE),
        "-f", "f32le", "-",
    ])
    pcm = array.array("f")
    pcm.frombytes(raw)
    if len(pcm) < SAMPLE_RATE * 6:
        raise SystemExit("raw clip is shorter than 6 seconds")
    return pcm


def loop_seam(x, fade_samples):
    n = min(fade_samples, len(x) // 4)
    out = array.array("f", x[: len(x) - n])
    for i in range(n):
        a = i / n * math.pi / 2
        out[i] = x[i] * math.sin(a) + x[len(x) - n + i] * math.cos(a)
    return out


def stats(x):
    peak = max(abs(v) for v in x)
    rms = math.sqrt(sum(v * v for v in x) / len(x))
    return peak, rms


def write_stereo(path, x):
    path.parent.mkdir(parents=True, exist_ok=True)
    with wave.open(str(path), "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SAMPLE_RATE)
        frame = bytearray(4 * len(x))
        for i, v in enumerate(x):
            s = max(-32768, min(32767, int(round(v * 32767))))
            b = s.to_bytes(2, "little", signed=True)
            frame[4 * i:4 * i + 2] = b
            frame[4 * i + 2:4 * i + 4] = b
        w.writeframes(bytes(frame))


def sha256(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 22), b""):
            h.update(chunk)
    return h.hexdigest()


def main():
    x = decode(SOURCE)
    x = loop_seam(x, int(LOOP_FADE * SAMPLE_RATE))
    peak, rms = stats(x)
    scale = min(TARGET_RMS / max(rms, 1e-9), PEAK_CEILING / max(peak, 1e-9))
    x = array.array("f", (v * scale for v in x))
    write_stereo(RUNTIME, x)
    peak, rms = stats(x)

    manifest = json.loads((HERE / "manifest.json").read_text(encoding="utf-8"))
    manifest["clip"].update({
        "file": RUNTIME.name,
        "sourceFile": str(SOURCE.relative_to(HERE)).replace("\\", "/"),
        "sourceSha256": sha256(SOURCE),
        "sha256": sha256(RUNTIME),
        "bytes": RUNTIME.stat().st_size,
        "duration": round(len(x) / SAMPLE_RATE, 4),
        "sampleRate": SAMPLE_RATE,
        "channels": 2,
        "rms": round(rms, 6),
        "peak": round(peak, 6),
        "normalizationScale": round(scale, 8),
    })
    manifest["processing"] = {
        "recipe": "ffmpeg highpass 25 Hz / mono 48 kHz f32; equal-power last-first "
                  f"{LOOP_FADE}s loop seam; fixed RMS {TARGET_RMS} with {PEAK_CEILING} peak ceiling; "
                  "dual-mono PCM16 stereo",
        "loopFadeSeconds": LOOP_FADE,
        "targetRms": TARGET_RMS,
        "peakCeiling": PEAK_CEILING,
    }
    (HERE / "manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(json.dumps(manifest["clip"], ensure_ascii=False))


if __name__ == "__main__":
    main()
