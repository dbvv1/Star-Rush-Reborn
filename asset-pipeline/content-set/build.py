#!/usr/bin/env python3
"""Pinned Kenney sources -> four metre-scale GLBs for Star's vertex-color consumer.
No runtime, GPU, DCC, or network dependency. Source files are never overwritten.
"""
from pathlib import Path
import argparse, colorsys, hashlib, io, json, math, struct, time
from PIL import Image

ROOT = Path(__file__).resolve().parent
sha = lambda b: hashlib.sha256(b).hexdigest()
def read_json(p): return json.loads(Path(p).read_text())
def dump(p, data): Path(p).write_text(json.dumps(data, indent=2, ensure_ascii=False)+'\n')
def add(a,b): return [x+y for x,y in zip(a,b)]
def sub(a,b): return [x-y for x,y in zip(a,b)]
def mul(a,s): return [x*s for x in a]
def dot(a,b): return sum(x*y for x,y in zip(a,b))
def cross(a,b): return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]
def unit(a):
    l=math.sqrt(dot(a,a))
    if l<1e-15: raise ValueError('zero normal')
    return mul(a,1/l)
def bounds(points): return [[min(p[k] for p in points) for k in range(3)],[max(p[k] for p in points) for k in range(3)]]
def lin(v): return v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4
def srgb(v): return 12.92*v if v<=.0031308 else 1.055*v**(1/2.4)-.055
def rgb(h): return [int(h[i:i+2],16)/255 for i in (1,3,5)]
def f32(v): return struct.unpack('<f',struct.pack('<f',v))[0]

def mm(a,b): return [[sum(a[i][k]*b[k][j] for k in range(4)) for j in range(4)] for i in range(4)]
def point(m,v): return [sum(m[i][k]*v[k] for k in range(3))+m[i][3] for i in range(3)]
def normal(m,v):
    # Inverse transpose of upper 3x3, including nonuniform scale.
    a,b,c=[m[i][:3] for i in range(3)];co=[cross(b,c),cross(c,a),cross(a,b)];det=dot(a,co[0])
    if abs(det)<1e-12: raise ValueError('Singular source transform')
    return unit([dot(row,v)/det for row in co])
def trs(n):
    if 'matrix' in n: return [[n['matrix'][j*4+i] for j in range(4)] for i in range(4)]
    x,y,z,w=n.get('rotation',[0,0,0,1]);q=math.sqrt(x*x+y*y+z*z+w*w)
    if abs(q-1)>1e-5: raise ValueError('Invalid quaternion')
    x,y,z,w=[v/q for v in (x,y,z,w)];s=n.get('scale',[1,1,1]);t=n.get('translation',[0,0,0])
    r=[[1-2*(y*y+z*z),2*(x*y-z*w),2*(x*z+y*w)],[2*(x*y+z*w),1-2*(x*x+z*z),2*(y*z-x*w)],[2*(x*z-y*w),2*(y*z+x*w),1-2*(x*x+y*y)]]
    return [[r[i][j]*s[j] for j in range(3)]+[t[i]] for i in range(3)]+[[0,0,0,1]]

class Source:
    def __init__(self,path):
        self.path=Path(path);raw=self.path.read_bytes()
        if len(raw)<28 or struct.unpack_from('<III',raw)!=(0x46546c67,2,len(raw)): raise ValueError('Invalid GLB header')
        n,t=struct.unpack_from('<II',raw,12)
        if t!=0x4e4f534a: raise ValueError('Missing JSON chunk')
        self.g=json.loads(raw[20:20+n]);off=20+n;nb,t=struct.unpack_from('<II',raw,off)
        if t!=0x004e4942: raise ValueError('Missing binary chunk')
        self.binary=raw[off+8:off+8+nb];self.texture=None
        if self.g.get('images'):
            uri=self.g['images'][0]['uri']
            if Path(uri).is_absolute() or '..' in Path(uri).parts: raise ValueError('Unsafe source URI')
            self.texture=Image.open(self.path.parent/uri).convert('RGB')
    def accessor(self,i):
        a=self.g['accessors'][i];v=self.g['bufferViews'][a['bufferView']]
        if a.get('sparse') or a.get('normalized'): raise ValueError('Unsupported source accessor')
        fmt='<'+{5121:'B',5123:'H',5125:'I',5126:'f'}[a['componentType']]*{'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4}[a['type']]
        off=v.get('byteOffset',0)+a.get('byteOffset',0);stride=v.get('byteStride',struct.calcsize(fmt))
        return [list(struct.unpack_from(fmt,self.binary,off+j*stride)) for j in range(a['count'])]
    def nodes(self):
        def visit(i,parent):
            n=self.g['nodes'][i];m=mm(parent,trs(n))
            if 'mesh' in n: yield n,self.g['meshes'][n['mesh']],m
            for c in n.get('children',[]): yield from visit(c,m)
        for i in self.g['scenes'][self.g.get('scene',0)]['nodes']: yield from visit(i,trs({}))
    def sample(self,uv):
        # glTF image convention, bilinear sampling at base level. Mips are not reproduced.
        im=self.texture;x=uv[0]*im.width-.5;y=uv[1]*im.height-.5;ix=math.floor(x);iy=math.floor(y);tx=x-ix;ty=y-iy
        out=[0.,0.,0.]
        for dx,wx in ((0,1-tx),(1,tx)):
            for dy,wy in ((0,1-ty),(1,ty)):
                p=im.getpixel((max(0,min(im.width-1,ix+dx)),max(0,min(im.height-1,iy+dy))))
                for k in range(3): out[k]+=p[k]/255*wx*wy
        return out

class Producer:
    def __init__(self,recipe):
        self.r=recipe;self.palette={k:rgb(v) for k,v in recipe['palette'].items()};self.parts=[];self.audit=[]
    def target(self,c,family):
        # Preserve luminance detail; remap chroma by material family, not arbitrary mesh tint.
        v=max(c);base=self.palette[family];factor=.68+.44*v
        out=[max(0,min(1,x*factor*g)) for x,g in zip(base,self.r['color_gain'])]
        return [lin(v) for v in out]
    def classify(self,c,kind):
        h,s,v=colorsys.rgb_to_hsv(*c)
        if kind=='fence': return 'soil'
        if kind=='car':
            if v<.25: return 'rubber'
            if .45<h<.72 and v<.8: return 'glass'
            if s>.28: return 'paint'
            return 'metal' if v<.72 else 'marking'
        if v<.30: return 'glass'
        if .18<h<.47 and s>.18: return 'roof'
        if s>.22: return 'roof'
        return 'wall'
    def part(self,name,pivot=(0,0,0),action='static'):
        p=dict(name=name,pivot=list(pivot),action=action,groups={});self.parts.append(p);return p
    def triangle(self,part,vs,family):
        # vs entries are (position, normal, color). Exact degenerate faces do not reach export.
        part['groups'].setdefault(family,[]).extend(vs)
    def import_glb(self,relative,kind,transform,normal_transform,part_fn,material_map=None):
        src=Source(ROOT/relative);stats=dict(source=relative,source_sha256=sha(src.path.read_bytes()),input_triangles=0,removed_exact_degenerate=0,output_triangles=0,max_bake_srgb8_error=0,minimum_winding_normal_dot=1)
        maxerr=self.r['bake']['max_srgb8_error'];maxdepth=self.r['bake']['max_subdivision_depth']
        weights=[(a/4,b/4,1-(a+b)/4) for a in range(5) for b in range(5-a)]
        for node,mesh,translation in src.nodes():
            part=part_fn(node,point(translation,[0,0,0]))
            for prim in mesh['primitives']:
                if prim.get('mode',4)!=4: raise ValueError('Non-triangle source')
                positions=src.accessor(prim['attributes']['POSITION']);normals=src.accessor(prim['attributes']['NORMAL']);uvs=src.accessor(prim['attributes']['TEXCOORD_0']) if src.texture and 'TEXCOORD_0' in prim['attributes'] else None
                ids=[x[0] for x in src.accessor(prim['indices'])];mat=src.g['materials'][prim.get('material',0)]
                for j in range(0,len(ids),3):
                    stats['input_triangles']+=1;ii=ids[j:j+3];pp=[positions[i] for i in ii]
                    area=cross(sub(pp[1],pp[0]),sub(pp[2],pp[0]))
                    if area==[0.,0.,0.]: stats['removed_exact_degenerate']+=1;continue
                    if math.sqrt(dot(area,area))<1e-12: raise ValueError('Unexpected near-degenerate source')
                    if uvs:
                        centroid=[sum(uvs[i][k] for i in ii)/3 for k in (0,1)];family=self.classify(src.sample(centroid),kind)
                        # Car Kit's light-blue lower-left atlas cell is glazing, not white paint.
                        if kind=='car' and centroid[0]<.125 and centroid[1]>.75: family='glass'
                        color_at=lambda uv:self.target(src.sample(uv),family)
                    else:
                        family=material_map[mat['name']];color_at=lambda _:self.target([.72]*3,family)
                    corners=[]
                    for i in ii:
                        pos=sub(transform(point(translation,positions[i])),part['pivot']);nn=unit(normal_transform(normal(translation,normals[i])));uv=uvs[i] if uvs else [0,0]
                        corners.append((pos,nn,uv,color_at(uv)))
                    def emit(tri,depth):
                        # Longitudinal subdivisions let the same source road follow a spline,
                        # instead of bending one 24 m triangle and leaving a display plinth.
                        if relative.endswith('/roadStraight.glb') and max(v[0][0] for v in tri)-min(v[0][0] for v in tri)>2.001:
                            if depth>18: raise ValueError('Road segmentation exceeded safety bound')
                            edge=max(range(3),key=lambda k:abs(tri[k][0][0]-tri[(k+1)%3][0][0]))
                            a,b,c=tri[edge],tri[(edge+1)%3],tri[(edge+2)%3]
                            uv=mul(add(a[2],b[2]),.5);mid=(mul(add(a[0],b[0]),.5),unit(add(a[1],b[1])),uv,color_at(uv))
                            emit((a,mid,c),depth+1);emit((mid,b,c),depth+1);return
                        err=0.
                        if uvs:
                            for w in weights:
                                uv=[sum(v[2][k]*a for v,a in zip(tri,w)) for k in (0,1)];actual=color_at(uv);interp=[sum(v[3][k]*a for v,a in zip(tri,w)) for k in range(3)]
                                err=max(err,max(abs(srgb(actual[k])-srgb(interp[k]))*255 for k in range(3)))
                        if err>maxerr:
                            if depth>=maxdepth: raise ValueError(f'Bake error {err:.4f} exceeds {maxerr} for {relative}; do not raise gate')
                            def mid(a,b):
                                p=mul(add(a[0],b[0]),.5);n=unit(add(a[1],b[1]));uv=mul(add(a[2],b[2]),.5);return p,n,uv,color_at(uv)
                            a,b,c=tri;ab,bc,ca=mid(a,b),mid(b,c),mid(c,a)
                            for t in ((a,ab,ca),(ab,b,bc),(ca,bc,c),(ab,bc,ca)): emit(t,depth+1)
                            return
                        stats['max_bake_srgb8_error']=max(stats['max_bake_srgb8_error'],err)
                        area=unit(cross(sub(tri[1][0],tri[0][0]),sub(tri[2][0],tri[0][0])));avg=unit([sum(v[1][k] for v in tri) for k in range(3)]);wd=dot(area,avg)
                        stats['minimum_winding_normal_dot']=min(stats['minimum_winding_normal_dot'],wd)
                        if wd<=0: raise ValueError(f'Inward source normals: {relative}')
                        self.triangle(part,[(v[0],v[1],v[3]) for v in tri],family);stats['output_triangles']+=1
                    emit(corners,0)
        self.audit.append(stats)
    def quad(self,part,points,family,colors=None):
        n=unit(cross(sub(points[1],points[0]),sub(points[2],points[0])))
        for ids in ((0,1,2),(0,2,3)):
            self.triangle(part,[(points[i],n,colors[i] if colors else self.target([.72]*3,family)) for i in ids],family)
    def output(self,out,id_,budget):
        g={'asset':{'version':'2.0','generator':'Star content-set build.py','copyright':'Kenney CC0 sources; see sources.json'},'scene':0,'scenes':[{'nodes':[]}],'nodes':[],'meshes':[],'materials':[],'buffers':[],'bufferViews':[],'accessors':[]};binary=bytearray();materials={};total=0;points=[]
        rough={'paint':.3,'rubber':.96,'glass':.2,'metal':.45}
        def access(data,width,kind='float',position=False):
            while len(binary)%4: binary.append(0)
            offset=len(binary);fmt='f' if kind=='float' else 'I';flat=[v for row in data for v in row];raw=struct.pack('<'+fmt*len(flat),*flat);binary.extend(raw);view=len(g['bufferViews']);g['bufferViews'].append({'buffer':0,'byteOffset':offset,'byteLength':len(raw),'target':34962 if kind=='float' else 34963})
            a={'bufferView':view,'componentType':5126 if kind=='float' else 5125,'count':len(data),'type':{1:'SCALAR',3:'VEC3'}[width]}
            if position: a['min'],a['max']=bounds([[f32(v) for v in row] for row in data])
            i=len(g['accessors']);g['accessors'].append(a);return i
        part_rows=[]
        for part in self.parts:
            prims=[];part_tris=0
            for family,vs in sorted(part['groups'].items()):
                if not vs:continue
                if family not in materials:
                    materials[family]=len(materials);g['materials'].append({'name':family,'pbrMetallicRoughness':{'baseColorFactor':[1,1,1,1],'metallicFactor':0,'roughnessFactor':rough.get(family,.88)},'doubleSided':False})
                attrs={'POSITION':access([v[0] for v in vs],3,position=True),'NORMAL':access([v[1] for v in vs],3),'COLOR_0':access([v[2] for v in vs],3)}
                prims.append({'attributes':attrs,'indices':access([[i] for i in range(len(vs))],1,'uint'),'material':materials[family],'mode':4});part_tris+=len(vs)//3
                points.extend(add(v[0],part['pivot']) for v in vs)
            if not prims:raise ValueError('empty part')
            mesh=len(g['meshes']);g['meshes'].append({'name':part['name'],'primitives':prims});ni=len(g['nodes']);g['nodes'].append({'name':part['name'],'mesh':mesh,'translation':part['pivot'],'extras':{'contentSetPart':part['name'],'action':part['action']}});g['scenes'][0]['nodes'].append(ni)
            part_rows.append({'name':part['name'],'node':ni,'pivot_m':part['pivot'],'action':part['action'],'triangles':part_tris,'material_families':sorted(part['groups'])});total+=part_tris
        g['buffers']=[{'byteLength':len(binary)}];j=json.dumps(g,separators=(',',':')).encode();j+=b' '*((-len(j))%4);binary+=b'\0'*((-len(binary))%4);raw=struct.pack('<III',0x46546c67,2,28+len(j)+len(binary))+struct.pack('<II',len(j),0x4e4f534a)+j+struct.pack('<II',len(binary),0x004e4942)+binary
        if total>budget['max_triangles'] or len(raw)>budget['max_bytes']:raise ValueError(f'{id_} exceeds budget: {total} triangles, {len(raw)} bytes')
        path=out/(id_+'.glb');path.write_bytes(raw);lo,hi=bounds(points)
        return dict(id=id_,file=path.name,sha256=sha(raw),bytes=len(raw),triangles=total,bounds_m={'min':lo,'max':hi},dimensions_m=sub(hi,lo),parts=part_rows,sources=self.audit,budget=budget,vertex_encoding='Float32 POSITION/NORMAL/COLOR_0; Uint32 indices; 4-byte aligned',material_contract='linear-sRGB vertex colors; PBR roughness metadata not consumed by current Star Lambert/Toon')

def validate_sources():
    for pack in read_json(ROOT/'sources.json')['packs']:
        for f in pack['files']:
            p=ROOT/f['path']
            if not p.is_file():raise ValueError('Missing pinned source: '+f['path'])
            if sha(p.read_bytes())!=f['sha256']:raise ValueError('Pinned source hash drift: '+f['path'])

def make_car(r,out):
    p=Producer(r);scale=r['car']['uniform_scale'];rot=lambda v:[v[2]*scale,v[1]*scale,-v[0]*scale];normal=lambda n:[n[2],n[1],-n[0]];parts={};body=p.part('body',action='body-roll-x_bob-y')
    def part(node,t):
        name=node['name']
        if name in ('body','spoiler'):return body
        if not name.startswith('wheel-'):raise ValueError('Unknown vehicle part')
        if name not in parts:parts[name]=p.part(name,rot(t),'front-steer-y_then-roll-z' if 'front' in name else 'roll-z')
        return parts[name]
    p.import_glb('source/car/sedan-sports.glb','car',rot,normal,part)
    return p.output(out,'car',r['car'])

def make_road(r,out):
    p=Producer(r);part=p.part('road-and-graded-shoulder');length=r['road']['length'];scale=r['road']['asphalt_width']/(.8451351523399353-.15486490726470947)
    # Ignore no transform: source root translation is included then recentered explicitly.
    tf=lambda v:[(v[2]+1.15)*length,(v[1]) ,(v[0]-.15)*-scale]
    nt=lambda n:[n[2]/length,n[1],-n[0]/scale]
    p.import_glb('source/racing/roadStraight.glb','road',tf,nt,lambda n,t:part,{'grass':'foliage','grey':'gravel','road':'asphalt'})
    edge=scale/2;end=r['road']['bank_end_lateral']
    if end<=edge+3:raise ValueError('Bank must extend beyond source shoulder')
    levels=[(edge,-.01,'foliage'),(edge+1.4,-.16,'foliage'),(edge+3.8,-.70,'soil'),(end-2.2,-2.2,'soil'),(end,-2.9,'gravel')]
    for side in (-1,1):
        for i in range(12):
            x0=-length/2+i*length/12;x1=x0+length/12
            for j in range(len(levels)-1):
                a,ay,f=levels[j];b,by,_=levels[j+1]
                # At module ends perturbation vanishes: exact repeated seam profile.
                wav=lambda x,z:math.sin(math.pi*(x+length/2)/length)*math.sin(z*.63+x*.18)*.18*(z-edge)/(end-edge)
                points=[[x0,ay+wav(x0,a),side*a],[x1,ay+wav(x1,a),side*a],[x1,by+wav(x1,b),side*b],[x0,by+wav(x0,b),side*b]]
                if side==1:points.reverse()
                colors=[p.target([.60+.13*math.sin(x*.24+z*.31)]*3,f) for x,y,z in points];p.quad(part,points,f,colors)
    # Lane markings are geometry at +3 mm, separate from the source road surface at y=0.
    for x in (-9,-3,3,9):p.quad(part,[[x-1.5,.003,-.065],[x-1.5,.003,.065],[x+1.5,.003,.065],[x+1.5,.003,-.065]],'marking')
    # Rail: source mesh identity retained, normalized to a single 6 m module outside 8.045 m collision rail.
    rail=Source(ROOT/'source/racing/rail.glb');pts=[point(t,v) for n,m,t in rail.nodes() for pr in m['primitives'] for v in rail.accessor(pr['attributes']['POSITION'])];lo,hi=bounds(pts);dim=sub(hi,lo);center=mul(add(lo,hi),.5)
    # Source rail long axis determined explicitly, not guessed from file name.
    axis=max(range(3),key=lambda k:dim[k]);
    if axis!=0:raise ValueError('Pinned rail long axis changed')
    for side in (-1,1):
        for x in (-9,-3,3,9):
            obj=p.part(f'rail-{side}-{x}',[x,0,side*8.3]);tf=lambda v,x=x,side=side:[(v[0]-center[0])*6/dim[0]+x,(v[1]-lo[1])*.8/dim[1]+.05,(v[2]-center[2])*.13/dim[2]+side*8.3]
            nt=lambda n:[n[0]*dim[0]/6,n[1]*dim[1]/.8,n[2]*dim[2]/.13]
            mats={m['name']:'metal' for m in rail.g['materials']};p.import_glb('source/racing/rail.glb','road',tf,nt,lambda n,t,obj=obj:obj,mats)
    return p.output(out,'road',r['road'])

def make_street(r,out):
    p=Producer(r);s=r['street']['uniform_scale']
    for name,x,z in [('a',-10,0),('g',0,2),('m',10,0)]:
        obj=p.part('house-'+name,[x,0,z]);p.import_glb('source/suburban/building-type-'+name+'.glb','building',lambda v,x=x,z=z:[v[0]*s+x,v[1]*s,v[2]*s+z],lambda n:n,lambda n,t,obj=obj:obj)
    return p.output(out,'street',r['street'])

def make_verge(r,out):
    p=Producer(r)
    for x in (-4.8,4.8):
        obj=p.part('fence-'+str(x));p.import_glb('source/suburban/fence-2x3.glb','fence',lambda v,x=x:[v[0]*4+x,v[1]*4,v[2]*4],lambda n:n,lambda n,t,obj=obj:obj)
    path=ROOT/'source/nature/plant_bushDetailed.obj';verts=[];faces=[]
    for line in path.read_text().splitlines():
        if line.startswith('v '):verts.append(list(map(float,line.split()[1:4])))
        if line.startswith('f '):
            ids=[int(q.split('/')[0])-1 for q in line.split()[1:]]
            for j in range(1,len(ids)-1):faces.append([ids[0],ids[j],ids[j+1]])
    lo,hi=bounds(verts);d=sub(hi,lo);center=mul(add(lo,hi),.5)
    for i,(x,z,s) in enumerate([(-7,1.1,.9),(-5.8,1.6,.7),(-2,1.1,.8),(2,1.5,.85),(5.5,1.1,.7),(7,1.5,.9)]):
        obj=p.part('bush-'+str(i))
        for face in faces:
            pts=[[(verts[k][0]-center[0])*s/d[0]+x,(verts[k][1]-lo[1])*.7*s/d[1],(verts[k][2]-center[2])*s/d[2]+z] for k in face];n=unit(cross(sub(pts[1],pts[0]),sub(pts[2],pts[0])))
            p.triangle(obj,[(v,n,p.target([.65+.15*v[1]]*3,'foliage')) for v in pts],'foliage')
    p.audit.append({'source':'source/nature/plant_bushDetailed.obj','source_sha256':sha(path.read_bytes()),'input_triangles':len(faces),'output_triangles':len(faces)*6,'instances':6,'normal_policy':'per-face outward winding retained; no alpha cards'})
    return p.output(out,'verge',r['verge'])

def build(recipe,out):
    validate_sources();r=read_json(recipe)
    if r['schema']!=1 or len(r['color_gain'])!=3 or any(not math.isfinite(x) or x<=0 or x>2 for x in r['color_gain']):raise ValueError('Invalid recipe')
    out=Path(out);out.mkdir(parents=True,exist_ok=True);t=time.perf_counter();assets=[f(r,out) for f in (make_car,make_road,make_street,make_verge)]
    if sum(a['bytes'] for a in assets)>r['max_total_bytes']:raise ValueError('Batch download budget exceeded')
    manifest={'schema':1,'recipe':Path(recipe).name,'recipe_id':r['id'],'recipe_sha256':sha(Path(recipe).read_bytes()),'producer_sha256':sha(Path(__file__).read_bytes()),'sources_sha256':sha((ROOT/'sources.json').read_bytes()),'units':'metres','axes':r['axes'],'assets':assets,'validation_boundary':'CPU assets only; not integrated, not visually accepted, no driving/audio/GPU claim'}
    dump(out/'manifest.json',manifest);print(json.dumps({'recipe':r['id'],'assets':[(a['id'],a['triangles'],a['bytes']) for a in assets],'cpu_wall_seconds':round(time.perf_counter()-t,4)}));return manifest
if __name__=='__main__':
    ap=argparse.ArgumentParser();ap.add_argument('--recipe',type=Path,default=ROOT/'recipe.json');ap.add_argument('--out',type=Path,default=ROOT/'outputs/base');args=ap.parse_args();build(args.recipe,args.out)
