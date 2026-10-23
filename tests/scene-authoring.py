"""Temporary scene authoring, one source revision and one vegetation candidate only."""
def create(output):
    import bpy,json,sys,os
    from mathutils import Matrix,Vector
    root=os.path.abspath(output)
    d=json.load(open(root+'/baseline.json'))
    assert d['report']['source']=='07e18395bff8a172f7d552ccae0f6cefe7458fce'
    assert len({o['id'] for o in d['objects']})==len(d['objects'])
    bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
    C=Matrix(((1,0,0,0),(0,0,-1,0),(0,1,0,0),(0,0,0,1)));Ci=C.inverted()
    mat=bpy.data.materials.new('Source vertex colors - author approximation NOT game toon');mat.use_nodes=True
    nodes=mat.node_tree.nodes;bsdf=nodes.get('Principled BSDF');bsdf.inputs['Roughness'].default_value=.85
    attr=nodes.new('ShaderNodeVertexColor');attr.layer_name='source_color';mat.node_tree.links.new(attr.outputs['Color'],bsdf.inputs['Base Color'])
    meshes=[]
    for i,src in enumerate(d['meshes']):
     v=src['data'];mesh=bpy.data.meshes.new('source_mesh_%d'%i)
     verts=[C.to_3x3()@Vector(v[j:j+3]) for j in range(0,len(v),10)];ind=src['indices'];faces=[ind[j:j+3] for j in range(0,len(ind),3)]
     mesh.from_pydata(verts,[],faces);mesh.update();colors=mesh.color_attributes.new(name='source_color',type='FLOAT_COLOR',domain='POINT')
     colors.data.foreach_set('color',[n for j in range(0,len(v),10) for n in (*v[j+6:j+9],1)])
     mesh.materials.append(mat);meshes.append(mesh)
    for o in d['objects']:
     obj=bpy.data.objects.new(o['id'],meshes[o['mesh']]);bpy.context.collection.objects.link(obj)
     M=Matrix([o['m'][i::4] for i in range(4)]);obj.matrix_world=C@M@Ci
     obj['source_id']=o['id'];obj['source_mesh']=o['mesh'];obj['source_placement']=json.dumps(o['author']);obj['source_commit']=d['report']['source']
    for i,c in enumerate(d['cameras']):
     cd=bpy.data.cameras.new('Author camera %d - NOT game screenshot'%i);obj=bpy.data.objects.new('author_camera_%d'%i,cd);bpy.context.collection.objects.link(obj)
     obj.location=C.to_3x3()@Vector(c['eye']);target=C.to_3x3()@Vector(c['target']);obj.rotation_euler=(target-obj.location).to_track_quat('-Z','Y').to_euler()
     # Three PerspectiveCamera FOV is vertical. Blender horizontal sensor at landscape aspect.
     import math
     cd.sensor_fit='HORIZONTAL';cd.sensor_width=36;cd.lens=36/(2*math.tan(math.radians(c['fov'])/2)*c['aspect']);cd.clip_start=.12;cd.clip_end=850
     obj['source_camera']=json.dumps(c)
    scene=bpy.context.scene;scene.camera=bpy.data.objects['author_camera_1'];scene.render.engine='CYCLES';scene.cycles.device='CPU';scene.cycles.samples=8;scene.cycles.use_denoising=False;scene.render.threads_mode='FIXED';scene.render.threads=2
    scene.render.resolution_x=640;scene.render.resolution_y=360;scene.render.resolution_percentage=100
    scene.world.color=(.35,.4,.5);scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs[0].default_value=(.65,.75,.85,1);scene.world.node_tree.nodes['Background'].inputs[1].default_value=.7
    sun=bpy.data.lights.new('Author light approximation','SUN');sun.energy=2;obj=bpy.data.objects.new('author_sun',sun);bpy.context.collection.objects.link(obj);obj.rotation_euler=(.5,-.4,-.6)
    scene.view_settings.view_transform='Standard';scene.render.image_settings.file_format='PNG'
    scene['disclaimer']='Offline CPU author reference, not game screenshot; no WebGL/toon/driving/performance acceptance.'
    bpy.ops.wm.save_as_mainfile(filepath=root+'/baseline.blend')
    print('AUTHOR_SCENE_SAVED')

def verify(output):
    import bpy,json,os,math
    from mathutils import Matrix,Vector
    root=os.path.abspath(output);d=json.load(open(os.environ.get('P128_VERIFY_INPUT',root+'/baseline.json')))
    C=Matrix(((1,0,0,0),(0,0,-1,0),(0,1,0,0),(0,0,0,1)));Ci=C.inverted()
    source_objects=[o for o in bpy.data.objects if 'source_id' in o]
    assert len(source_objects)==len(d['objects'])==len({o['source_id'] for o in source_objects})
    observed={o['source_id']:o for o in source_objects}
    assert len(observed)==len(d['objects'])
    assert len(set(o['id'] for o in d['objects']))==len(d['objects'])
    max_transform=0;max_vertex=0;max_color=0
    for o in d['objects']:
     obj=observed[o['id']];assert obj['source_mesh']==o['mesh'];assert obj.data is bpy.data.meshes['source_mesh_%d'%o['mesh']];assert json.loads(obj['source_placement'])==o['author']
     M=Ci@obj.matrix_world@C;actual=[M[i][j] for j in range(4) for i in range(4)];max_transform=max(max_transform,max(abs(a-b) for a,b in zip(actual,o['m'])))
    for i,src in enumerate(d['meshes']):
     mesh=bpy.data.meshes['source_mesh_%d'%i];v=src['data'];assert len(mesh.vertices)==len(v)//10;assert len(mesh.polygons)==len(src['indices'])//3
     for j,vert in enumerate(mesh.vertices):
      p=Ci.to_3x3()@vert.co;max_vertex=max(max_vertex,max(abs(p[k]-v[j*10+k]) for k in range(3)))
      color=mesh.color_attributes['source_color'].data[j].color;max_color=max(max_color,max(abs(color[k]-v[j*10+6+k]) for k in range(3)))
     assert [x for p in mesh.polygons for x in p.vertices]==src['indices']
    assert bpy.context.scene.render.resolution_x==640 and bpy.context.scene.render.resolution_y==360
    assert bpy.context.scene.render.resolution_percentage==100
    assert bpy.context.scene.render.pixel_aspect_x==bpy.context.scene.render.pixel_aspect_y
    max_cam=0
    for i,c in enumerate(d['cameras']):
     obj=bpy.data.objects['author_camera_%d'%i];assert obj.data.sensor_fit=='HORIZONTAL';eye=Ci.to_3x3()@obj.location;max_cam=max(max_cam,max(abs(eye[k]-c['eye'][k]) for k in range(3)))
     direction=Ci.to_3x3()@(obj.rotation_euler.to_matrix()@Vector((0,0,-1)));desired=(Vector(c['target'])-Vector(c['eye'])).normalized();assert (direction-desired).length<1e-5
     vfov=2*math.atan(obj.data.sensor_width/(2*obj.data.lens*c['aspect']));assert abs(vfov-math.radians(c['fov']))<1e-6
    assert max_transform<3e-5 and max_vertex<1e-5 and max_cam<3e-5 and max_color<1e-6
    report={'passed':True,'objects':len(observed),'meshes':len(d['meshes']),'maxTransformError':max_transform,'maxVertexError':max_vertex,'maxColorError':max_color,'maxCameraPositionError':max_cam,'indicesExact':True,'IDsExact':True,'sourcePlacementMetadataExact':True,'cameras':3,'claim':'Saved/reopened Blender source geometry and camera-block roundtrip; not full-client rendering or game acceptance.'}
    json.dump(report,open(root+'/roundtrip-report.json','w'),indent=2);print(report)

def render(output):
    import bpy,os,sys
    root=os.path.abspath(output);scene=bpy.context.scene
    scene.cycles.use_denoising=False
    for layer in scene.view_layers: layer.cycles.use_denoising=False
    for i in range(3):
     scene.camera=bpy.data.objects['author_camera_%d'%i];scene.render.filepath=root+'/baseline-view-%d.png'%i
     bpy.ops.render.render(write_still=True)

def revise(output):
    import bpy,json,os,hashlib,struct
    from mathutils import Matrix
    root=os.path.abspath(output);scene=bpy.context.scene
    ID='coast/chunk/2/cherry0/90/-12.5';obj=bpy.data.objects[ID];assert json.loads(obj['source_placement'])['scale']==.92
    C=Matrix(((1,0,0,0),(0,0,-1,0),(0,1,0,0),(0,0,0,1)));Ci=C.inverted()
    def matrix(o):
     m=Ci@o.matrix_world@C
     return [m[i][j] for j in range(4) for i in range(4)]
    def digest(x):return hashlib.sha256(json.dumps(x,sort_keys=True,separators=(',',':')).encode()).hexdigest()
    def objects():return {o['source_id']:{'matrix':matrix(o),'mesh':o['source_mesh'],'placement':o['source_placement']} for o in bpy.data.objects if 'source_id' in o}
    def mesh_hash():
     h=hashlib.sha256()
     for m in sorted((m for m in bpy.data.meshes if m.name.startswith('source_mesh_')),key=lambda m:m.name):
      for v in m.vertices:h.update(struct.pack('<3f',*v.co))
      for p in m.polygons:h.update(struct.pack('<3I',*p.vertices))
      for v in m.color_attributes['source_color'].data:h.update(struct.pack('<4f',*v.color))
     return h.hexdigest()
    before=objects();mh=mesh_hash();old=matrix(obj)
    obj.matrix_world=obj.matrix_world @ Matrix.Diagonal((.65/.92,.65/.92,.65/.92,1));bpy.context.view_layer.update()
    after=objects();changed=[k for k in before if before[k]!=after[k]];assert changed==[ID];assert mesh_hash()==mh
    assert before[ID]['matrix'][12:]==after[ID]['matrix'][12:]
    unchanged_before=digest({k:v for k,v in before.items() if k!=ID});unchanged_after=digest({k:v for k,v in after.items() if k!=ID});assert unchanged_before==unchanged_after
    obj['proposed_scale']=.65
    report={'baselineId':ID,'from':.92,'to':.65,'beforeMatrix':old,'afterMatrix':matrix(obj),'changedObjects':changed,'unchangedObjectCount':59,'unchangedObjectHashBefore':unchanged_before,'unchangedObjectHashAfter':unchanged_after,'allMeshHashBefore':mh,'allMeshHashAfter':mesh_hash(),'cyclesSeed':scene.cycles.seed,'samples':scene.cycles.samples,'resolution':[640,360],'threads':2,'reason':'Temporary author-view station silhouette comparison only. No production source changes.'}
    json.dump(report,open(root+'/revision-report.json','w'),indent=2)
    scene.cycles.use_denoising=False
    for layer in scene.view_layers:layer.cycles.use_denoising=False
    bpy.ops.wm.save_as_mainfile(filepath=root+'/revision.blend')
    for i in [0,1]:
     scene.camera=bpy.data.objects['author_camera_%d'%i];scene.render.filepath=root+'/revision-view-%d.png'%i;bpy.ops.render.render(write_still=True)
    print(report)

if __name__ == '__main__':
    import argparse,sys
    parser=argparse.ArgumentParser(description='Fixed-source Blender CPU author-reference probe; NOT game screenshots.')
    parser.add_argument('command',choices=['create','verify','render','revise'])
    parser.add_argument('--output',default='outputs/scene-authoring')
    args=parser.parse_args(sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else [])
    globals()[args.command](args.output)
