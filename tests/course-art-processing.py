"""Optional source-processing regression: python3 tests/course-art-processing.py.

Requires Pillow, like prepare-course-art.py; npm test tests the shipped WebPs
and runtime without requiring image-authoring dependencies.
"""
import json
import runpy
import tempfile
import unittest
from pathlib import Path
from PIL import Image

prepare = runpy.run_path(str(Path(__file__).resolve().parents[1] / 'prepare-course-art.py'))['prepare']


class Processing(unittest.TestCase):
  def setUp(self):
    self.temp = tempfile.TemporaryDirectory()
    self.root = Path(self.temp.name)
    self.manifest({'coast-reborn': {'file': 'coast-v1.webp'}})

  def tearDown(self):
    self.temp.cleanup()

  def manifest(self, value):
    (self.root / 'manifest.json').write_text(json.dumps(value))

  def test_resize_encode_preserves_source_and_does_not_upscale(self):
    source = self.root / 'coast-v1.png'
    for size in [(1024, 512), (256, 128)]:
      Image.new('RGB', size, '#123456').save(source)
      original = source.read_bytes()
      prepare(self.root)
      self.assertEqual(original, source.read_bytes())
      with Image.open(self.root / 'coast-v1.webp') as result:
        self.assertEqual(result.format, 'WEBP')
        self.assertEqual(result.size, (min(size[0], 512), min(size[1], 256)))

  def test_missing_source_fails(self):
    with self.assertRaises(FileNotFoundError):
      prepare(self.root)

  def test_wrong_aspect_fails_without_output(self):
    Image.new('RGB', (100, 100)).save(self.root / 'coast-v1.png')
    with self.assertRaisesRegex(ValueError, '2:1'):
      prepare(self.root)
    self.assertFalse((self.root / 'coast-v1.webp').exists())

  def test_invalid_manifest_or_path_fails(self):
    for value in [[], {'other': {'file': 'coast-v1.webp'}}, {'coast-reborn': {'file': '../coast-v1.webp'}}, {'coast-reborn': 123}]:
      with self.subTest(value=value):
        self.manifest(value)
        with self.assertRaises(ValueError):
          prepare(self.root)


if __name__ == '__main__':
  unittest.main()
