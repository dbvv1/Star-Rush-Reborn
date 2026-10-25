"""Verify the saved/reopened author file against exported original-source data."""
import bpy,json,os
source=json.load(open('outputs/signboard-author/source.json'))
objects={obj['source_id']:obj for obj in bpy.data.objects if 'source_id' in obj}
assert set(objects)=={item['id'] for item in source['meshes']}
for item in source['meshes']:
    obj=objects[item['id']];mesh=obj.data;data=item['data']
    assert obj['geometry_hash']==item['geometryHash']
    assert len(mesh.vertices)==len(data)//10
    assert [i for p in mesh.polygons for i in p.vertices]==item['indices']
    for index,vertex in enumerate(mesh.vertices):
        x,y,z=data[index*10:index*10+3]
        assert max(abs(a-b) for a,b in zip(vertex.co,(x,-z,y)))<1e-6
        assert max(abs(a-b) for a,b in zip(mesh.color_attributes['source_color'].data[index].color,(*data[index*10+6:index*10+9],1)))<1e-6
assert bpy.context.scene.cycles.device=='CPU'
assert bpy.context.scene.render.threads==2
print('SAVED_AUTHOR_SOURCE_VERIFIED: six isolated candidate objects, topology/geometry/colors preserved; NOT gameplay acceptance')
