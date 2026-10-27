"""Rebuild the display-only sky from the preserved CC0 source, not an HDR light."""
import hashlib
import json
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent
recipe = json.loads((ROOT / 'recipe.json').read_text())
source = ROOT / 'source/kenney-day.png'
digest = hashlib.sha256(source.read_bytes()).hexdigest()
if digest != recipe['sourceSha256']:
    raise ValueError('Sky source identity changed')
image = Image.open(source).convert('RGB')
if image.size != (4096, 2048):
    raise ValueError('Expected the original 2:1 panorama')
if recipe['size'] != [2048, 1024] or recipe['quality'] not in range(60, 96):
    raise ValueError('Invalid sky export size or quality')
image = image.resize(tuple(recipe['size']), Image.Resampling.LANCZOS)
target = ROOT / 'day.webp'
image.save(target, 'WEBP', quality=recipe['quality'], method=6)
payload = target.read_bytes()
(ROOT / 'manifest.json').write_text(json.dumps({
    'file': 'day.webp', 'source': 'source/kenney-day.png',
    'sourceSha256': digest, 'sha256': hashlib.sha256(payload).hexdigest(),
    'recipeSha256': hashlib.sha256((ROOT / 'recipe.json').read_bytes()).hexdigest(),
    'width': image.width, 'height': image.height, 'bytes': len(payload),
    'colorSpace': 'srgb', 'range': 'LDR', 'lighting': False,
    'yaw': recipe['yaw'],
}, indent=2) + '\n')
print(f'Sky exported: {len(payload)} bytes, {image.width}x{image.height}, sRGB LDR')
