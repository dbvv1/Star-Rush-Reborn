// Candidate selection/failure reporting only; never mutates a live simulation.
export function createSideCandidates(host,road,model){
 const p=new URLSearchParams(host.location.search),one=(key,value)=>road&&p.getAll(key).length===1&&p.get(key)===value;
 const state={space:road&&(p.getAll('environment').length===0||one('environment','coast-space-v1')),power:one('handling','power-tires-v1'),ticks:0,backend:'initializing',warnings:[]};
 const panel=host.document.createElement('details');panel.id='side-diagnostics';panel.style.cssText='position:fixed;right:8px;bottom:8px;z-index:500;background:#172333;color:#fff;font:12px monospace;max-width:330px;padding:4px';
 const title=host.document.createElement('summary');title.textContent='运行状态';const diagnostic=host.document.createElement('pre');diagnostic.id='side-diagnostics-state';diagnostic.style.cssText='white-space:pre-wrap;margin:4px';panel.append(title,diagnostic);panel.hidden=p.get('diagnostics')!=='1';host.document.body.append(panel);
 function publish(){diagnostic.textContent=JSON.stringify(state,null,2);}
 publish();

 function warn(message){state.warnings.push(message);const doc=host.document;let el=doc.getElementById('candidate-notice');if(!el){el=doc.createElement('div');el.id='candidate-notice';el.setAttribute('role','status');el.style.cssText='position:fixed;bottom:12px;left:12px;right:12px;z-index:1000;background:#182632;color:white;padding:10px;pointer-events:none';doc.body.append(el)}el.textContent=state.warnings.join(' ');publish();}
 function disable(key){state[key]=false;warn('旁置候选初始化失败，已回退默认'+(key==='space'?'场景渲染。':'驾驶与渲染。'));}
 if(state.power)try{const body={vS:0,vL:0,speed:0,yaw:0,spin:0,roadSteer:0,velocityYaw:0};model.step(body,{},1/120,{powerTires:true});if(!Number.isFinite(body.speed))throw Error('Invalid model');}catch{disable('power');}
 Object.defineProperty(host,'starSideStatus',{configurable:true,get:()=>Object.freeze({...state,warnings:[...state.warnings]})});
 return {get space(){return state.space},get power(){return state.power},disable,tick(){state.ticks++;publish()},renderer(name){state.backend=name;publish();if(name==='canvas2d'&&(state.space||state.power))warn('WebGL2 不可用，已使用 Canvas2D 兼容渲染（地形、光照与车辆简化）；旁置驾驶仍可试玩。');}};
}
