"""Resize and encode the three selected card illustrations; never repaint them.

Requires Pillow. Run after adding a new PNG and changing manifest.json.
Source images and earlier revisions are retained, not overwritten.
"""
import json
from pathlib import Path

from PIL import Image

def prepare(root):
  manifest = json.loads((root / 'manifest.json').read_text())
  if not isinstance(manifest, dict):
    raise ValueError('Invalid course artwork manifest')
  for track, entry in manifest.items():
    filename = entry.get('file') if isinstance(entry, dict) else None
    if track not in ('coast-reborn', 'sakura-reborn', 'academy-reborn'):
      raise ValueError('Unknown course: ' + track)
    if not isinstance(filename, str) or Path(filename).name != filename or not filename.endswith('.webp'):
      raise ValueError('Invalid output filename')
    target = root / filename
    with Image.open(target.with_suffix('.png')) as source:
      if source.width != 2 * source.height:
        raise ValueError('Course artwork must be a 2:1 landscape image')
      image = source.convert('RGB')
      image.thumbnail((512, 256), Image.Resampling.LANCZOS)
      image.save(target, 'WEBP', quality=82, method=6)
    print(f'{track}: {target.name}, {target.stat().st_size} bytes')


if __name__ == '__main__':
  prepare(Path(__file__).resolve().parent / 'assets' / 'course-art')
