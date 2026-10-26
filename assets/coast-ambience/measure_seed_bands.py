"""Measure the 200-2000 Hz band share used to pick the archived seed.

Definition (reproducible with ffmpeg only):
  bandShare = 10^((bandRmsDb - fullRmsDb) / 10) * 100
where bandRmsDb is the overall RMS after the stated two-pole Butterworth
highpass/lowpass chain and fullRmsDb is the overall RMS of the untouched
file. RMS values come from ffmpeg's astats filter (dBFS). This is a numeric
comparison of the two archived seeds, not a listening judgement.

Run:
  python3 assets/coast-ambience/measure_seed_bands.py

Writes source/seed-band-analysis.json and prints a one-line summary per seed.
"""
from pathlib import Path
import hashlib
import json
import re
import subprocess

HERE = Path(__file__).parent
SEEDS = [0, 1]
LOW_HZ = 200
HIGH_HZ = 2000
FILTER = f"highpass=f={LOW_HZ}:poles=2,lowpass=f={HIGH_HZ}:poles=2"


def sha256(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 22), b""):
            h.update(chunk)
    return h.hexdigest()


def measure(path, chain):
    command = [
        "ffmpeg", "-hide_banner", "-nostats", "-i", str(path),
        "-af", chain + ",astats=metadata=1:reset=0", "-f", "null", "-",
    ]
    result = subprocess.run(command, capture_output=True, text=True)
    if result.returncode:
        raise SystemExit(f"ffmpeg failed for {path}:\n{result.stderr}")
    values = {}
    for key, label in [("rmsDb", "RMS level dB"), ("peakDb", "Peak level dB")]:
        match = re.search(label + r":\s*(-?[\d.]+)", result.stderr)
        if not match:
            raise SystemExit(f"missing {label} for {path}:\n{result.stderr}")
        values[key] = float(match.group(1))
    return values


def main():
    ffmpeg_version = subprocess.run(
        ["ffmpeg", "-version"], capture_output=True, text=True
    ).stdout.splitlines()[0]
    rows = []
    for seed in SEEDS:
        path = HERE / "source" / f"seed{seed}-10s.wav"
        full = measure(path, "anull")
        band = measure(path, FILTER)
        share = 10 ** ((band["rmsDb"] - full["rmsDb"]) / 10) * 100
        rows.append({
            "seed": seed,
            "file": str(path.relative_to(HERE)).replace("\\", "/"),
            "sha256": sha256(path),
            "fullRmsDb": round(full["rmsDb"], 6),
            "fullRmsLinear": round(10 ** (full["rmsDb"] / 20), 8),
            "fullPeakDb": round(full["peakDb"], 6),
            "bandRmsDb": round(band["rmsDb"], 6),
            "bandSharePercent": round(share, 4),
        })
        print(f"seed {seed}: full {full['rmsDb']:.3f} dB, band {band['rmsDb']:.3f} dB, "
              f"share {share:.2f}%")
    analysis = {
        "method": {
            "bandHz": [LOW_HZ, HIGH_HZ],
            "ffmpegFilter": FILTER,
            "rmsMeter": "ffmpeg astats, Overall RMS level dB",
            "bandShareFormula": "10 ** ((bandRmsDb - fullRmsDb) / 10) * 100",
            "note": "Filter-defined numeric band share; not perceptual loudness or listening approval.",
            "ffmpeg": ffmpeg_version,
        },
        "seeds": rows,
    }
    out = HERE / "source" / "seed-band-analysis.json"
    out.write_text(json.dumps(analysis, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"wrote {out.relative_to(HERE)}")


if __name__ == "__main__":
    main()
