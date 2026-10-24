#!/usr/bin/env python3
"""Deterministically synthesize the two rail impact WAV candidates.

This is an original, standard-library-only recipe: no downloaded samples, no
hosted audio generator and no random state outside the recorded seeds.  Run
from any directory with Python 3:

    python3 assets/rail-audio/generate.py
    python3 assets/rail-audio/generate.py --check

The generated WAVs are mono, 44.1 kHz, signed 16-bit PCM.  The JSON manifest
records every recipe parameter plus byte count, duration and SHA-256 so the
build and tests can reject silent drift or swapped files.
"""
from __future__ import annotations

import hashlib
import json
import math
import random
import struct
import sys
import wave
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SAMPLE_RATE = 44100
MANIFEST_VERSION = 1

# The parameters below are the editable source of the two candidates.  Noise
# is deterministic from the seed; frequencies, envelopes and modal decays are
# explicit so a later author can reshape the sound without guessing.
RECIPES = {
    "light-scrape": {
        "file": "rail-light-v1.wav",
        "seed": 23117,
        "durationSeconds": 0.24,
        "targetPeak": 0.78,
        "attackSeconds": 0.0018,
        "releaseSeconds": 0.028,
        "dcBlockHz": 32.0,
        "scrape": {
            "noiseGain": 0.58,
            "lowpassHz": 7600.0,
            "highpassHz": 620.0,
            "grainHz": 63.0,
            "grainPhase": 0.4,
            "grainPower": 2.0,
            "grainDepth": 0.72,
            "decaySeconds": 0.085,
        },
        "modes": [
            {"frequencyHz": 1640.0, "gain": 0.23, "decaySeconds": 0.070, "phase": 0.15},
            {"frequencyHz": 2470.0, "gain": 0.16, "decaySeconds": 0.058, "phase": 1.70},
            {"frequencyHz": 3890.0, "gain": 0.10, "decaySeconds": 0.045, "phase": 2.90},
        ],
        "onset": {"frequencyHz": 3180.0, "gain": 0.18, "decaySeconds": 0.005},
    },
    "medium-hit": {
        "file": "rail-hit-v1.wav",
        "seed": 81293,
        "durationSeconds": 0.38,
        "targetPeak": 0.86,
        "attackSeconds": 0.0012,
        "releaseSeconds": 0.040,
        "dcBlockHz": 28.0,
        "body": {
            "startHz": 118.0,
            "endHz": 62.0,
            "glideSeconds": 0.045,
            "gain": 0.68,
            "decaySeconds": 0.115,
        },
        "noise": {
            "gain": 0.54,
            "lowpassHz": 3100.0,
            "highpassHz": 180.0,
            "decaySeconds": 0.078,
        },
        "modes": [
            {"frequencyHz": 420.0, "gain": 0.34, "decaySeconds": 0.160, "phase": 0.60},
            {"frequencyHz": 930.0, "gain": 0.23, "decaySeconds": 0.120, "phase": 2.10},
            {"frequencyHz": 1710.0, "gain": 0.15, "decaySeconds": 0.090, "phase": 4.05},
            {"frequencyHz": 2570.0, "gain": 0.09, "decaySeconds": 0.060, "phase": 5.20},
        ],
        "onset": {"frequencyHz": 3540.0, "gain": 0.26, "decaySeconds": 0.006},
    },
}


def one_pole_lowpass(samples: list[float], cutoff_hz: float) -> list[float]:
    alpha = 1.0 - math.exp(-2.0 * math.pi * cutoff_hz / SAMPLE_RATE)
    out: list[float] = []
    state = 0.0
    for value in samples:
        state += alpha * (value - state)
        out.append(state)
    return out


def highpass(samples: list[float], cutoff_hz: float) -> list[float]:
    low = one_pole_lowpass(samples, cutoff_hz)
    return [value - low_value for value, low_value in zip(samples, low)]


def synthesize(recipe: dict[str, object]) -> list[float]:
    frames = round(float(recipe["durationSeconds"]) * SAMPLE_RATE)
    duration = frames / SAMPLE_RATE
    rng = random.Random(int(recipe["seed"]))
    noise = [rng.uniform(-1.0, 1.0) for _ in range(frames)]
    dc_hz = float(recipe["dcBlockHz"])
    attack = float(recipe["attackSeconds"])
    release = float(recipe["releaseSeconds"])
    output: list[float] = []

    if "scrape" in recipe:
        scrape = recipe["scrape"]
        assert isinstance(scrape, dict)
        shaped = highpass(noise, float(scrape["highpassHz"]))
        shaped = one_pole_lowpass(shaped, float(scrape["lowpassHz"]))
        for index in range(frames):
            t = index / SAMPLE_RATE
            grain = 0.5 + 0.5 * math.sin(
                2.0 * math.pi * float(scrape["grainHz"]) * t + float(scrape["grainPhase"])
            )
            grain = grain ** float(scrape["grainPower"])
            grain_mix = float(scrape["grainDepth"]) + (1.0 - float(scrape["grainDepth"])) * grain
            value = shaped[index] * float(scrape["noiseGain"]) * grain_mix * math.exp(
                -t / float(scrape["decaySeconds"])
            )
            for mode in recipe["modes"]:
                value += (
                    float(mode["gain"])
                    * math.sin(2.0 * math.pi * float(mode["frequencyHz"]) * t + float(mode["phase"]))
                    * math.exp(-t / float(mode["decaySeconds"]))
                )
            onset = recipe["onset"]
            value += (
                float(onset["gain"])
                * math.sin(2.0 * math.pi * float(onset["frequencyHz"]) * t)
                * math.exp(-t / float(onset["decaySeconds"]))
            )
            output.append(value)
    else:
        body = recipe["body"]
        noise_recipe = recipe["noise"]
        assert isinstance(body, dict) and isinstance(noise_recipe, dict)
        shaped = highpass(noise, float(noise_recipe["highpassHz"]))
        shaped = one_pole_lowpass(shaped, float(noise_recipe["lowpassHz"]))
        phase = 0.0
        for index in range(frames):
            t = index / SAMPLE_RATE
            frequency = float(body["endHz"]) + (
                float(body["startHz"]) - float(body["endHz"])
            ) * math.exp(-t / float(body["glideSeconds"]))
            phase += 2.0 * math.pi * frequency / SAMPLE_RATE
            value = (
                float(body["gain"])
                * math.sin(phase)
                * math.exp(-t / float(body["decaySeconds"]))
            )
            value += (
                shaped[index]
                * float(noise_recipe["gain"])
                * math.exp(-t / float(noise_recipe["decaySeconds"]))
            )
            for mode in recipe["modes"]:
                value += (
                    float(mode["gain"])
                    * math.sin(2.0 * math.pi * float(mode["frequencyHz"]) * t + float(mode["phase"]))
                    * math.exp(-t / float(mode["decaySeconds"]))
                )
            onset = recipe["onset"]
            value += (
                float(onset["gain"])
                * math.sin(2.0 * math.pi * float(onset["frequencyHz"]) * t)
                * math.exp(-t / float(onset["decaySeconds"]))
            )
            output.append(value)

    output = highpass(output, dc_hz)
    for index in range(frames):
        t = index / SAMPLE_RATE
        envelope = min(1.0, t / attack)
        if duration - t < release:
            envelope *= max(0.0, (duration - t) / release)
        output[index] *= envelope

    peak = max(abs(value) for value in output) or 1.0
    scale = float(recipe["targetPeak"]) / peak
    return [value * scale for value in output]


def encode_wav(samples: list[float]) -> bytes:
    import io

    raw = b"".join(struct.pack("<h", round(max(-1.0, min(1.0, value)) * 32767)) for value in samples)
    stream = io.BytesIO()
    with wave.open(stream, "wb") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(SAMPLE_RATE)
        wav.writeframes(raw)
    return stream.getvalue()


def build_outputs() -> tuple[dict[str, bytes], bytes]:
    files: dict[str, bytes] = {}
    candidates: dict[str, object] = {}
    for name, recipe in RECIPES.items():
        samples = synthesize(recipe)
        data = encode_wav(samples)
        filename = str(recipe["file"])
        files[filename] = data
        candidates[name] = {
            "file": filename,
            "sha256": hashlib.sha256(data).hexdigest(),
            "bytes": len(data),
            "frames": len(samples),
            "durationSeconds": round(len(samples) / SAMPLE_RATE, 6),
            "parameters": recipe,
        }
    manifest = {
        "version": MANIFEST_VERSION,
        "title": "Star Rush Reborn rail impact candidates",
        "generator": "assets/rail-audio/generate.py",
        "license": (
            "Original deterministic code synthesis for this repository; no third-party "
            "samples, recordings or hosted audio-generation service were used. Distributed "
            "with the project source under its existing terms; no separate CC0/public-domain "
            "dedication and no copyright-registration claim is made."
        ),
        "format": {
            "container": "RIFF/WAVE",
            "codec": "PCM",
            "channels": 1,
            "sampleRate": SAMPLE_RATE,
            "bitsPerSample": 16,
        },
        "candidates": candidates,
    }
    manifest_bytes = (json.dumps(manifest, ensure_ascii=False, indent=2) + "\n").encode("utf-8")
    return files, manifest_bytes


def main() -> int:
    files, manifest = build_outputs()
    current = {path.name: path.read_bytes() for path in ROOT.glob("*.wav")}
    current_manifest = (ROOT / "manifest.json").read_bytes() if (ROOT / "manifest.json").exists() else None
    if "--check" in sys.argv[1:]:
        mismatches = [
            name for name, data in files.items() if current.get(name) != data
        ]
        if current_manifest != manifest:
            mismatches.append("manifest.json")
        if mismatches:
            print("Rail audio is out of date: " + ", ".join(sorted(mismatches)))
            return 1
        print("Rail audio matches the deterministic recipes")
        return 0
    for name, data in files.items():
        (ROOT / name).write_bytes(data)
    (ROOT / "manifest.json").write_bytes(manifest)
    print(
        "Wrote "
        + ", ".join(f"{name} ({len(data)} bytes)" for name, data in files.items())
        + " and manifest.json"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
