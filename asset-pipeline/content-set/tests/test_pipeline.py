import importlib.util,json,math,pathlib,tempfile,unittest
ROOT=pathlib.Path(__file__).resolve().parents[1]
s=importlib.util.spec_from_file_location('pipeline',ROOT/'build.py');p=importlib.util.module_from_spec(s);s.loader.exec_module(p)
class PipelineTests(unittest.TestCase):
 def test_pinned_sources(self):p.validate_sources()
 def test_missing_and_hash_drift_fail(self):
  old=p.ROOT
  try:
   with tempfile.TemporaryDirectory() as d:
    p.ROOT=pathlib.Path(d);(p.ROOT/'sources.json').write_text(json.dumps({'packs':[{'files':[{'path':'x','sha256':'00'}]}]}))
    with self.assertRaisesRegex(ValueError,'Missing'):p.validate_sources()
    (p.ROOT/'x').write_text('not the source')
    with self.assertRaisesRegex(ValueError,'hash drift'):p.validate_sources()
  finally:p.ROOT=old
 def test_regeneration_matches_every_byte(self):
  for r,v in [('recipe.json','base'),('recipe-warm.json','warm')]:
   with tempfile.TemporaryDirectory() as d:
    p.build(ROOT/r,d)
    for name in ['car.glb','road.glb','street.glb','verge.glb','manifest.json']:
     self.assertEqual((pathlib.Path(d)/name).read_bytes(),(ROOT/'outputs'/v/name).read_bytes())
 def test_invalid_recipe_and_budget_fail(self):
  r=json.loads((ROOT/'recipe.json').read_text())
  with tempfile.TemporaryDirectory() as d:
   q=pathlib.Path(d)/'bad.json';r['color_gain']=[math.nan,1,1];q.write_text(json.dumps(r))
   with self.assertRaisesRegex(ValueError,'Invalid recipe'):p.build(q,d)
   r['color_gain']=[1,1,1];r['car']['max_triangles']=1;q.write_text(json.dumps(r))
   with self.assertRaisesRegex(ValueError,'exceeds budget'):p.build(q,d)
 def test_normal_transform_nonuniform_and_rotation(self):
  m=p.trs({'scale':[2,1,3],'rotation':[0,math.sin(.35),0,math.cos(.35)]});t=p.sub(p.point(m,[1,0,0]),p.point(m,[0,0,0]));n=p.normal(m,[0,0,1]);self.assertAlmostEqual(p.dot(t,n),0,places=9)
 def test_source_reader_rejects_corrupt_glb(self):
  with tempfile.TemporaryDirectory() as d:
   q=pathlib.Path(d)/'bad.glb';q.write_bytes(b'no');
   with self.assertRaisesRegex(ValueError,'header'):p.Source(q)
if __name__=='__main__':unittest.main()
