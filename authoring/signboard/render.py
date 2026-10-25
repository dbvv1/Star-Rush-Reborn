"""Original geometry CPU author comparison, never a game screenshot."""
import bpy,json,math,os
from mathutils import Vector
root=os.path.abspath('outputs/signboard-author')
data=json.load(open(root+'/source.json'))
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
mat=bpy.data.materials.new('Original linear vertex colors');mat.use_nodes=True
bsdf=mat.node_tree.nodes.get('Principled BSDF');bsdf.inputs['Roughness'].default_value=.85
attr=mat.node_tree.nodes.new('ShaderNodeVertexColor');attr.layer_name='source_color';mat.node_tree.links.new(attr.outputs['Color'],bsdf.inputs['Base Color'])
for index,source in enumerate(data['meshes']):
    v=source['data'];ind=source['indices'];mesh=bpy.data.meshes.new(source['id'])
    mesh.from_pydata([(v[j],-v[j+2],v[j+1]) for j in range(0,len(v),10)],[],[ind[j:j+3] for j in range(0,len(ind),3)])
    mesh.update();colors=mesh.color_attributes.new(name='source_color',type='FLOAT_COLOR',domain='POINT')
    colors.data.foreach_set('color',[n for j in range(0,len(v),10) for n in (*v[j+6:j+9],1)])
    mesh.materials.append(mat);obj=bpy.data.objects.new(source['id'],mesh);bpy.context.collection.objects.link(obj)
    obj.location=(index%2*3.5-1.75,index//2*3.8,0)
    obj['source_id']=source['id'];obj['geometry_hash']=source['geometryHash']
    text=bpy.data.curves.new('label','FONT');text.body=source['id'];text.size=.22;text.align_x='CENTER'
    label=bpy.data.objects.new('label-'+source['id'],text);bpy.context.collection.objects.link(label);label.location=(obj.location.x,obj.location.y-.3,2.95);label.rotation_euler=(math.pi/2,0,0)
# Approximate neutral ground and lighting: deliberately not Three toon or game fog.
bpy.ops.mesh.primitive_plane_add(size=200);floor=bpy.context.object;floor.location.z=-.025
floor_mat=bpy.data.materials.new('neutral ground');floor_mat.diffuse_color=(.28,.34,.4,1);floor.data.materials.append(floor_mat)
light=bpy.data.lights.new('author softbox','AREA');light.energy=800;light.shape='DISK';light.size=8
obj=bpy.data.objects.new('author softbox',light);bpy.context.collection.objects.link(obj);obj.location=(-3,-5,9)
obj.rotation_euler=(Vector((0,1,1))-obj.location).to_track_quat('-Z','Y').to_euler()
cam=bpy.data.cameras.new('Author camera NOT gameplay');camera=bpy.data.objects.new('Author camera',cam);bpy.context.collection.objects.link(camera)
camera.location=(7,-16,15);camera.rotation_euler=(Vector((0,3.8,1.4))-camera.location).to_track_quat('-Z','Y').to_euler();cam.type='ORTHO';cam.ortho_scale=14
scene=bpy.context.scene;scene.camera=camera;scene.render.engine='CYCLES';scene.cycles.device='CPU';scene.cycles.samples=16;scene.cycles.seed=0;scene.cycles.use_denoising=False;scene.render.threads_mode='FIXED';scene.render.threads=2
scene.render.resolution_x=1280;scene.render.resolution_y=960;scene.render.resolution_percentage=100
scene.world.color=(.45,.45,.45);scene.view_settings.view_transform='Standard';scene.render.image_settings.file_format='PNG'
scene['scope']='OFFLINE AUTHOR COMPARISON: not gameplay, WebGL, performance or perceptual acceptance.'
bpy.ops.wm.save_as_mainfile(filepath=root+'/comparison.blend');scene.render.filepath=root+'/comparison.png';bpy.ops.render.render(write_still=True)
