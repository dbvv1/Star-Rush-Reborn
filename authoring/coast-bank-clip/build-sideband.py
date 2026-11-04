#!/usr/bin/env python3
"""Rebuild and bind the 192 outer-bank triangles of the fixed coastal road.

The pinned content-set is extracted from the repository object store, the
original build.py is replayed unchanged, and the replay must reproduce
outputs/base/road.glb byte for byte.  Only then are the Producer.quad calls of
build.py::make_road's levels loop mapped, in the original Producer.output
sorted-family primitive order, to per-part adapter triangle indices.

The generator, recipe, adapter and source/output GLBs are never modified.
"""
from __future__ import annotations

import argparse
import hashlib
import importlib.util
import io
import json
import shutil
import struct
import subprocess
import sys
import tarfile
import tempfile
from pathlib import Path

COMMIT = 'ab2655930996b9d81f5fb35469669c72b7be28e1'
CONTENT_SET = 'asset-pipeline/content-set'
ROOT = Path(__file__).resolve().parents[2]
DEFAULT_OUT = Path(__file__).resolve().parent / 'bank-triangles.json'
SCHEMA = 'star-outer-bank-sideband@1'

PINNED = {
    'buildPy': {
        'path': f'{CONTENT_SET}/build.py',
        'sha256': '945c4ce2fa1958a6f1baed8bf88619834c388e3ed781a2daacb7164f4c3bb714',
    },
    'recipe': {
        'path': f'{CONTENT_SET}/recipe.json',
        'sha256': '16becba2cf71feb780927cf8d9f097785922e5b81226de8a7a3f7f8b7246280a',
    },
    'adapter': {
        'path': f'{CONTENT_SET}/adapter.mjs',
        'sha256': '31a9e59f476ba705382731b4d91a1d51bea252f00a05590b20ebd9c76b363299',
    },
    'roadSourceGlb': {
        'path': f'{CONTENT_SET}/source/racing/roadStraight.glb',
        'sha256': '6b1f92e5859d417951f259e52c9c9eadad5bfceb3b545e074049bbc17d02f00d',
    },
    'roadOutputGlb': {
        'path': f'{CONTENT_SET}/outputs/base/road.glb',
        'sha256': '9eb6a584f5dfc625680e7dadfaa7c8a66ff155f7c90c95a07de4f1b43feebd9a',
        'bytes': 276056,
        'triangles': 2202,
    },
}
PART = 'road-and-graded-shoulder'
EXPECTED_BANK_TRIANGLES = 192
EXPECTED_QUADS = 96
EXPECTED_FAMILIES = {'foliage': 96, 'soil': 96}
EXPECTED_SIGNATURE = 'e515e78503acaeb8950c85e724d722f1be4af0e988a06574c991510a0b0858cb'


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def extract_pinned(destination: Path) -> Path:
    try:
        archive = subprocess.run(
            ['git', 'archive', '--format=tar', COMMIT, CONTENT_SET],
            cwd=ROOT, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
        ).stdout
    except subprocess.CalledProcessError as error:
        detail = error.stderr.decode('utf-8', 'replace').strip()
        raise SystemExit(f'Fixed commit {COMMIT} is not available in this repository: {detail}')
    with tarfile.open(fileobj=io.BytesIO(archive), mode='r:') as bundle:
        members = [m for m in bundle.getmembers() if m.isfile() or m.isdir()]
        try:
            bundle.extractall(destination, members=members, filter='data')
        except TypeError:  # Python < 3.12 has no extraction filter.
            bundle.extractall(destination, members=members)
    return destination / CONTENT_SET


def assert_pinned(content_set: Path) -> dict:
    source = {}
    for key, pinned in PINNED.items():
        path = content_set / Path(pinned['path']).relative_to(CONTENT_SET)
        if not path.is_file():
            raise SystemExit(f'Pinned source file is missing: {pinned["path"]}')
        raw = path.read_bytes()
        actual = sha256(raw)
        if actual != pinned['sha256']:
            raise SystemExit(f'Pinned source hash drift: {pinned["path"]} expected {pinned["sha256"]} got {actual}')
        entry = {'path': pinned['path'], 'sha256': actual}
        if 'bytes' in pinned:
            entry['bytes'] = len(raw)
            if len(raw) != pinned['bytes']:
                raise SystemExit(f'Pinned output byte count drift: {pinned["path"]}')
        if key == 'roadOutputGlb':
            entry['triangles'] = pinned['triangles']
        source[key] = entry
    return source


def replay(content_set: Path, out: Path) -> bytes:
    args = [sys.executable, 'build.py', '--recipe', 'recipe.json', '--out', str(out)]
    subprocess.run(args, cwd=content_set, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    return (out / 'road.glb').read_bytes()


def instrumented_road(content_set: Path, out: Path):
    spec = importlib.util.spec_from_file_location('fixed_content_build', content_set / 'build.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    recipe = json.loads((content_set / 'recipe.json').read_text())
    quads = []
    original_quad = module.Producer.quad

    def recording_quad(self, part, points, family, colors=None):
        before = len(part['groups'].get(family, []))
        result = original_quad(self, part, points, family, colors)
        if part['name'] == PART and family != 'marking':
            quads.append({'family': family, 'before': before, 'points': [list(p) for p in points],
                          'colors': colors})
        return result

    module.Producer.quad = recording_quad
    out.mkdir(parents=True, exist_ok=True)
    module.make_road(recipe, out)
    return module, quads


def part_primitives(module, road_glb: Path):
    source = module.Source(road_glb)
    for node, mesh, _ in source.nodes():
        if node['name'] != PART:
            continue
        primitives, vertex_offset, triangle_offset = [], 0, 0
        for primitive in mesh['primitives']:
            material = source.g['materials'][primitive['material']]['name']
            vertex_count = source.g['accessors'][primitive['attributes']['POSITION']]['count']
            index_count = source.g['accessors'][primitive['indices']]['count']
            primitives.append({
                'family': material,
                'vertexOffset': vertex_offset,
                'triangleOffset': triangle_offset,
                'triangles': index_count // 3,
                'positions': source.accessor(primitive['attributes']['POSITION']),
                'indices': [row[0] for row in source.accessor(primitive['indices'])],
            })
            vertex_offset += vertex_count
            triangle_offset += index_count // 3
        return primitives
    raise SystemExit(f'Replay output has no part named {PART}')


def close(a, b) -> bool:
    return abs(a - b) <= 1e-5 * max(1.0, abs(a), abs(b))


def build_sideband(content_set: Path, work: Path) -> dict:
    source = assert_pinned(content_set)
    replay_dir = work / 'replay'
    instrumented_dir = work / 'instrumented'
    replay_bytes = replay(content_set, replay_dir)
    if replay_bytes != (content_set / Path(PINNED['roadOutputGlb']['path']).relative_to(CONTENT_SET)).read_bytes():
        raise SystemExit('Original generator replay is not byte-identical to outputs/base/road.glb')
    if sha256(replay_bytes) != PINNED['roadOutputGlb']['sha256']:
        raise SystemExit('Original generator replay hash drift')
    if len(replay_bytes) != PINNED['roadOutputGlb']['bytes']:
        raise SystemExit('Original generator replay byte count drift')

    module, quads = instrumented_road(content_set, instrumented_dir)
    instrumented_bytes = (instrumented_dir / 'road.glb').read_bytes()
    if instrumented_bytes != replay_bytes:
        raise SystemExit('Instrumented generator changed road.glb bytes')

    if len(quads) != EXPECTED_QUADS:
        raise SystemExit(f'Expected {EXPECTED_QUADS} levels-loop quads, got {len(quads)}')
    primitives = part_primitives(module, instrumented_dir / 'road.glb')
    families = [primitive['family'] for primitive in primitives]
    if families != sorted(families):
        raise SystemExit('Primitive order is not the original sorted family order')
    by_family = {primitive['family']: primitive for primitive in primitives}
    if not {'foliage', 'soil', 'marking', 'asphalt', 'gravel'} <= set(by_family):
        raise SystemExit('Replay part is missing expected material families')

    records, triangles = [], []
    family_counts = {}
    for order, quad in enumerate(quads):
        family = quad['family']
        if family not in ('foliage', 'soil'):
            raise SystemExit(f'Unexpected non-bank quad family {family}')
        side = -1 if order < EXPECTED_QUADS // 2 else 1
        within_side = order % (EXPECTED_QUADS // 2)
        segment = within_side // 4
        strip = within_side % 4
        if quad['colors'] is None or len(quad['points']) != 4 or len(quad['colors']) != 4:
            raise SystemExit('Outer-bank quad contract changed')
        lateral = [point[2] for point in quad['points']]
        if min(abs(z) for z in lateral) < 8:
            raise SystemExit('Recorded quad reaches the asphalt half-width')
        if (min(lateral) < 0) != (side < 0):
            raise SystemExit('Outer-bank side order changed')
        expected_family = 'foliage' if strip < 2 else 'soil'
        if family != expected_family:
            raise SystemExit('Outer-bank strip family order changed')
        primitive = by_family[family]
        local_start = quad['before'] // 3
        if quad['before'] % 3 or local_start + 2 > primitive['triangles']:
            raise SystemExit('Outer-bank quad does not fit its family primitive')
        for corner in (0, 1):
            local_triangle = local_start + corner
            triangle = primitive['triangleOffset'] + local_triangle
            ids = primitive['indices'][local_triangle * 3:local_triangle * 3 + 3]
            expected = [quad['points'][0], quad['points'][1], quad['points'][2]] if corner == 0 else \
                       [quad['points'][0], quad['points'][2], quad['points'][3]]
            for vertex, expected_point in zip(ids, expected):
                position = primitive['positions'][vertex]
                if not all(close(float(position[k]), float(expected_point[k])) for k in range(3)):
                    raise SystemExit(f'Triangle index mapping mismatch at {triangle}')
            records.append({
                'id': f'bank:{side}:{segment}:{strip}:{corner}',
                'triangle': triangle,
                'vertices': [primitive['vertexOffset'] + value for value in ids],
                'family': family,
                'familyTriangle': local_triangle,
                'side': side,
                'segment': segment,
                'strip': strip,
            })
            triangles.append(triangle)
            family_counts[family] = family_counts.get(family, 0) + 1

    if len(triangles) != EXPECTED_BANK_TRIANGLES or len(set(triangles)) != EXPECTED_BANK_TRIANGLES:
        raise SystemExit('Outer-bank triangle count or uniqueness changed')
    if family_counts != EXPECTED_FAMILIES:
        raise SystemExit(f'Outer-bank family counts changed: {family_counts}')
    if min(triangles) < by_family['asphalt']['triangles']:
        raise SystemExit('A bank triangle index points into asphalt')

    digest = hashlib.sha256()
    for record in records:
        primitive = by_family[record['family']]
        local = record['familyTriangle']
        vertex_offset = primitive['vertexOffset']
        ids = primitive['indices'][local * 3:local * 3 + 3]
        for value in ids:
            digest.update(struct.pack('<I', vertex_offset + value))
    signature = digest.hexdigest()
    if signature != EXPECTED_SIGNATURE:
        raise SystemExit(f'Outer-bank vertex-index signature drift: {signature}')

    part_triangles = sum(primitive['triangles'] for primitive in primitives)
    return {
        'schema': SCHEMA,
        'sourceCommit': COMMIT,
        'source': source,
        'replay': {
            'byteIdentical': True,
            'roadGlbSha256': sha256(replay_bytes),
            'bytes': len(replay_bytes),
        },
        'part': PART,
        'partTriangleCount': part_triangles,
        'triangleCount': len(triangles),
        'families': dict(sorted(family_counts.items())),
        'triangles': triangles,
        'records': records,
        'vertexIndexSignature': signature,
        'mapping': 'build.py::make_road levels-loop Producer.quad triangles, flattened in Producer.output sorted-family primitive order into per-part adapter triangle indices',
    }


def dump_sideband(sideband: dict) -> str:
    return json.dumps(sideband, indent=2, ensure_ascii=False) + '\n'


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--out', type=Path, default=DEFAULT_OUT)
    parser.add_argument('--check', action='store_true', help='compare with the committed sideband instead of writing')
    args = parser.parse_args()

    work = Path(tempfile.mkdtemp(prefix='star-bank-clip-'))
    try:
        content_set = extract_pinned(work / 'fixed')
        sideband = build_sideband(content_set, work / 'build')
        text = dump_sideband(sideband)
        if args.check:
            if not args.out.is_file():
                raise SystemExit(f'Committed sideband is missing: {args.out.name}')
            if args.out.read_text() != text:
                raise SystemExit(f'Committed sideband is stale: {args.out.name}')
            print(json.dumps({'ok': True, 'sideband': args.out.name, 'triangles': sideband['triangleCount'],
                              'roadGlbSha256': sideband['replay']['roadGlbSha256']}))
        else:
            args.out.parent.mkdir(parents=True, exist_ok=True)
            args.out.write_text(text)
            print(json.dumps({'ok': True, 'written': args.out.name, 'triangles': sideband['triangleCount'],
                              'roadGlbSha256': sideband['replay']['roadGlbSha256']}))
    finally:
        shutil.rmtree(work, ignore_errors=True)
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
