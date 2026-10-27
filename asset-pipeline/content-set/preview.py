#!/usr/bin/env python3
"""CPU-only orthographic inventory; deliberately not a game/lighting acceptance render."""
from pathlib import Path
import importlib.util,json,math
import numpy as np
from PIL import Image,ImageDraw
ROOT=Path(__file__).resolve().parent
sp=importlib.util.spec_from_file_location('content_build',ROOT/'build.py');b=importlib.util.module_from_spec(sp);sp.loader.exec_module(b)
W,H=480,330
def panel(id):
 src=b.Source(ROOT/'outputs/base'/f'{id}.glb');triangles=[]
 for node,mesh,m in src.nodes():
  for pr in mesh['primitives']:
   p=np.array([b.point(m,v) for v in src.accessor(pr['attributes']['POSITION'])]);n=np.array(src.accessor(pr['attributes']['NORMAL']));c=np.array(src.accessor(pr['attributes']['COLOR_0']));ix=np.array(src.accessor(pr['indices'])).flatten();triangles.extend((p[k],n[k],c[k]) for k in ix.reshape(-1,3))
 pts=np.concatenate([t[0] for t in triangles]);center=(pts.max(0)+pts.min(0))/2
 eye=np.array([-1.,.72,1.]);eye/=np.linalg.norm(eye);right=np.cross([0,1,0],eye);right/=np.linalg.norm(right);up=np.cross(eye,right);matrix=np.array([right,up,eye]);proj=(pts-center)@matrix.T;size=np.ptp(proj[:,:2],axis=0);scale=min((W-40)/size[0],(H-75)/size[1]);offset=(proj[:,:2].min(0)+proj[:,:2].max(0))/2
 im=np.full((H,W,3),[.075,.10,.13]);zbuf=np.full((H,W),-np.inf);light=np.array([-.4,.8,.5]);light/=np.linalg.norm(light)
 for points,normals,colors in triangles:
  v=(points-center)@matrix.T;xy=(v[:,:2]-offset)*scale+np.array([W/2,H/2-8]);xy[:,1]=H-xy[:,1]
  a,bb,c=xy;det=(bb[0]-a[0])*(c[1]-a[1])-(bb[1]-a[1])*(c[0]-a[0])
  if abs(det)<1e-7:continue
  lo=np.maximum(0,np.floor(xy.min(0)).astype(int));hi=np.minimum([W-1,H-1],np.ceil(xy.max(0)).astype(int))
  if np.any(lo>hi):continue
  xx,yy=np.meshgrid(np.arange(lo[0],hi[0]+1)+.5,np.arange(lo[1],hi[1]+1)+.5)
  wb=((xx-a[0])*(c[1]-a[1])-(yy-a[1])*(c[0]-a[0]))/det;wc=((bb[0]-a[0])*(yy-a[1])-(bb[1]-a[1])*(xx-a[0]))/det;wa=1-wb-wc;weights=np.stack([wa,wb,wc],axis=-1);depth=weights@v[:,2];mask=(weights.min(-1)>=-1e-5)&(depth>zbuf[lo[1]:hi[1]+1,lo[0]:hi[0]+1]);nn=weights@normals;nn/=np.maximum(1e-12,np.linalg.norm(nn,axis=-1,keepdims=True));rgb=weights@colors;rgb*= (.35+.65*np.maximum(0,nn@light))[...,None]
  region=im[lo[1]:hi[1]+1,lo[0]:hi[0]+1];region[mask]=rgb[mask];zbuf[lo[1]:hi[1]+1,lo[0]:hi[0]+1][mask]=depth[mask]
 im=np.where(im<=.0031308,im*12.92,1.055*im**(1/2.4)-.055);out=Image.fromarray(np.clip(im*255,0,255).astype('uint8'));draw=ImageDraw.Draw(out);draw.text((16,12),id.upper()+' / CPU orthographic',fill='white');draw.text((16,H-22),'NOT gameplay / NOT actual game lighting',fill='#d4bd82');return out
out=Image.new('RGB',(W*2,H*2+32),'#19222b');d=ImageDraw.Draw(out);d.text((16,10),'STAR CONTENT SET / geometric inventory only',fill='white')
for i,id in enumerate(['car','road','street','verge']):out.paste(panel(id),((i%2)*W,(i//2)*H+32))
out.save(ROOT/'outputs/cpu-inventory.png',optimize=True)
