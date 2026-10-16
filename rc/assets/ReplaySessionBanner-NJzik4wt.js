import{j as n}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./ext-react-RRA14VTW.js";import{bR as ue,cm as q,R as Ve,cj as _e,cq as Ge,cp as qe,d0 as We,d5 as Ye,ag as Je,aO as W,aZ as Ze,b2 as re}from"./view-clock-formula-CVZBU1aa.js";import{o as Re,D as Z,s as Qe,L as Xe}from"./ksp-enum-names-C2UhZdgT.js";import{a as ce}from"./registry-C84C_ZoY.js";import"./screen-W8lTyEHK.js";import{ba as et,bc as tt,aW as rt,i as ot,aH as nt,b7 as at,bg as st}from"./lagrange-CVtFh6Er.js";import{w as $e}from"./use-transmissions-DJnVkH9l.js";import{g as Ue}from"./replay-session-controller-CpQat0Df.js";import"./websocket-transport-DXv0VSsS.js";import{y as H,av as it,E as lt,w as pe,ac as ct}from"./ModalSaveBar-BS1ba4Jh.js";import{G as dt,N as ut}from"./Notice-DSofLZI4.js";import{N as pt,w as le}from"./contributionsRead-DSQ8W60c.js";import"./processorPerfBudget-6oeQWceT.js";import{l as ht}from"./index-dq6XYUov.js";import{h as gt,D as ft}from"./VersionMismatchBanner-Big-vYtS.js";import l from"./ext-styled-components-Br73TgY3.js";import{b as mt}from"./full-history-replay-BT3JMKbx.js";import{e as vt,s as bt}from"./topic-fields-BarZDcV8.js";import{k as he}from"./orbital-PsDjfVjy.js";const De={recording:!1,vesselName:null,frameCount:0,saveFailure:null};let I=De;const Y=new Set;function ge(){return I}function Mo(e){I={...e,saveFailure:I.saveFailure};for(const t of Y)t()}function Fo(e){if(I.saveFailure!==e){I={...I,saveFailure:e};for(const t of Y)t()}}function xt(e){return Y.add(e),()=>{Y.delete(e)}}function zo(){I=De,Y.clear()}function oe(){return ce("missionHistory")}function V(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),r=Math.floor(t/3600),o=Math.floor(t%3600/60),a=t%60;return r>0?`${r}:${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function Q(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const c=Number(t);return Number.isFinite(c)&&c>=0?c*1e3:null}const r=t.split(":").map(c=>c.trim());if(r.some(c=>c===""||!/^\d+(\.\d+)?$/.test(c)))return null;const o=r.map(Number),i=o.length===2?o[0]*60+o[1]:o.length===3?o[0]*3600+o[1]*60+o[2]:null;return i===null?null:i*1e3}function yt({flight:e,onChange:t}){const r=e.chapters??[],o=Math.max(0,e.lastSampleAt-e.launchedAt),[a,i]=h.useState(""),[c,f]=h.useState(""),[u,m]=h.useState(""),[x,S]=h.useState(null),[z,A]=h.useState(null),[v,M]=h.useState(""),[T,L]=h.useState(""),[F,R]=h.useState(""),[y,C]=h.useState(null);function N(d){A(d.id),M(d.label),L(V(d.startMs)),R(V(d.endMs)),C(null)}function w(){A(null),C(null)}async function D(){const d=oe();if(!d)return;const j=Q(c),k=Q(u);if(a.trim()===""){S("Label required");return}if(j===null||k===null){S("Start and end must be mm:ss");return}if(k<=j){S("End must be after start");return}S(null),await d.addChapter(e.id,{label:a.trim(),startMs:j,endMs:k}),i(""),f(""),m(""),t()}async function K(d){const j=oe();if(!j)return;const k=Q(T),$=Q(F);if(v.trim()===""){C("Label required");return}if(k===null||$===null){C("Start and end must be mm:ss");return}if($<=k){C("End must be after start");return}C(null),await j.updateChapter(e.id,d,{label:v.trim(),startMs:k,endMs:$}),A(null),t()}async function g(d){const j=oe();j&&(await j.removeChapter(e.id,d),z===d&&w(),t())}return n.jsxs(St,{children:[n.jsx(wt,{children:"Chapters"}),r.length===0?n.jsx(kt,{children:"No chapters yet. Add markers to slice the flight."}):n.jsx(jt,{children:r.slice().sort((d,j)=>d.startMs-j.startMs).map(d=>{const j=z===d.id;return n.jsx(Ct,{children:j?n.jsxs(n.Fragment,{children:[n.jsx(H,{type:"text",value:v,onChange:k=>M(k.target.value),"aria-label":"Chapter label"}),n.jsx(H,{type:"text",value:T,onChange:k=>L(k.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),n.jsx(H,{type:"text",value:F,onChange:k=>R(k.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),n.jsxs(fe,{children:[n.jsx(Et,{type:"button",onClick:()=>void K(d.id),children:"Save"}),n.jsx(At,{type:"button",onClick:w,children:"Cancel"})]})]}):n.jsxs(n.Fragment,{children:[n.jsx(Mt,{title:d.label,children:d.label}),n.jsxs(Ft,{children:[V(d.startMs)," – ",V(d.endMs)]}),n.jsxs(zt,{children:["(",V(d.endMs-d.startMs),")"]}),n.jsxs(fe,{children:[n.jsx(Tt,{type:"button",onClick:()=>N(d),children:"edit"}),n.jsx(Nt,{type:"button",onClick:()=>void g(d.id),"aria-label":`Remove chapter ${d.label}`,children:"×"})]})]})},d.id)})}),y&&n.jsx(me,{children:y}),n.jsxs(Lt,{children:[n.jsx(H,{type:"text",placeholder:"Chapter name",value:a,onChange:d=>i(d.target.value),"aria-label":"New chapter label"}),n.jsx(H,{type:"text",placeholder:"0:00",value:c,onChange:d=>f(d.target.value),"aria-label":"New chapter start (mm:ss)"}),n.jsx(H,{type:"text",placeholder:V(o),value:u,onChange:d=>m(d.target.value),"aria-label":"New chapter end (mm:ss)"}),n.jsx(Rt,{type:"button",onClick:()=>void D(),children:"+ add"})]}),x&&n.jsx(me,{children:x})]})}const St=l.div`
  padding: var(--inset-chapters-band);
  background: var(--color-surface-app);
  border-bottom: 1px solid var(--color-border-subtle);
`,wt=l.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: var(--gap-heading-hint);
`,kt=l.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  margin-bottom: var(--gap-related-comfortable);
`,jt=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  margin-bottom: var(--gap-related-comfortable);
`,Ct=l(it).attrs({cols:"minmax(120px, 1fr) auto auto auto",gap:"related-comfortable"})`
  font-size: var(--font-size-compact);
`,Mt=l.span`
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ft=l.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-muted);
  white-space: nowrap;
`,zt=l.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-faint);
  font-size: var(--font-size-compact);
  white-space: nowrap;
`,fe=l.span`
  display: inline-flex;
  gap: var(--gap-related);
  align-items: center;
  justify-self: end;
`,Tt=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,Et=l.button`
  background: var(--color-go-status);
  border: 1px solid var(--color-go-status);
  color: var(--color-go-on-status);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,At=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,Nt=l.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-base);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,Lt=l.div`
  display: grid;
  grid-template-columns: minmax(120px, 1fr) 80px 80px auto;
  gap: var(--gap-related);
  align-items: center;
  margin-top: var(--gap-actions);
`,Rt=l.button`
  background: none;
  border: 1px dashed var(--color-text-faint);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  white-space: nowrap;
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,me=l.div`
  margin-top: var(--gap-sub-readout);
  font-size: var(--font-size-compact);
  color: var(--color-tag-red-fg);
`,Be=new WeakMap;function $t(e,t){Be.set(e,t)}function Ut(e){return Be.get(e)}const ne={t:[],v:[]};function Dt(e){switch(e){case ue.LastBeforeBlackout:return"last-before-blackout";case ue.Recorded:return"recorded";default:return null}}function Bt(e){const t=[];let r=null;for(let o=0;o<e.length;o++){const a=Dt(e[o].meta.staleness);if(a===null){r=null;continue}if(r!==null&&r.status===a){r.to=o;continue}r={from:o,to:o,status:a},t.push(r)}return t}const ve=new WeakMap;function Ot(e){const t=ve.get(e);if(t)return t;const r={t:e.t,v:e.v.map(o=>{const a=J(o);return typeof a=="number"?a:Number.NaN}),basis:e.basis};return ve.set(e,r),r}function Pt(e,t){return e.length===t.length&&e.every((r,o)=>r.to===t[o].to&&r.v===t[o].v)}function It(e,t){return e.length===t.length&&e.every((r,o)=>r.from===t[o].from&&r.to===t[o].to&&r.status===t[o].status)}function be(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((r,o)=>Object.is(r,t[o]))}function Kt(e,t){return e.length===t.length&&e.every((r,o)=>r.from===t[o].from&&r.to===t[o].to&&r.basis===t[o].basis&&r.bandKind===t[o].bandKind&&be(r.bandLo,t[o].bandLo)&&be(r.bandHi,t[o].bandHi))}function Oe(e,t){return[e?.toWire(),t?.toWire()]}function Ht(e,t,r,o,a){const i=new Map((t.sampleRange(r,o,a)??[]).map(u=>[u.validAt,JSON.stringify(u.payload)])),c=[];let f;for(const u of e){const m=i.get(u.validAt)??JSON.stringify(u.payload);m!==f&&(f=m,c.push(u))}return c}function J(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function Vt(e,t){const r=h.useRef(ne),o=et(),a=tt(),i=e,c=h.useCallback(u=>{if(!o||!a)return()=>{};const m=rt(o,a,i),x=a.subscribeFrame(u);return()=>{x(),m()}},[o,a,i]),f=h.useCallback(()=>{if(!a)return ne;const u=a.currentFrame().viewUt,m=u-t,x=a.isDerivedTopic(i)?a.sampleDerivedRange(i,m,u):a.sampleRange(i,m,u),S=a.sampleReckonedTail(i,m,u),z=a.tagsOf(i),A=z.kind==="event"?"none":z.kind==="discrete"?"step":"linear",v=z.kind==="event"?Ht(x??[],a,z.topic,m,u):x??[];if(v.length===0&&S.length===0)return ne;const M=v.map(g=>g.validAt),T=v.map(g=>J(g.payload)),L=v.map(g=>g.payload),F=new Map,R=[],y=[];for(let g=0;g<v.length;g++){if(g===0)continue;if(A==="none")break;if(v[g].meta.gapSinceUt!=null){R.push(g);continue}if(Object.is(T[g],T[g-1]))continue;const d=a.gapModel(i,v[g-1],v[g]);if(d?.carried===!1){R.push(g);continue}d?.carried&&y.push({to:g,...Ot(d)})}const C=Bt(v),N=[];for(const g of S){const d=M.length;M.push(g.atUt),T.push(J(g.value)),L.push(g.value);const{bandLo:j,bandHi:k}=g,[$,B]=Oe(j,k),s=$!==void 0&&B!==void 0?g.bandKind:void 0;F.set(d,{basis:g.basis,band:j!==void 0&&k!==void 0&&s!==void 0?{lo:j,hi:k,kind:s}:void 0});const p=N[N.length-1],b=p!==void 0&&p.basis===g.basis&&p.to===d-1&&p.bandKind===s;if(p!==void 0&&b){p.to=d,$!==void 0&&B!==void 0&&s!==void 0&&(p.bandLo?.push($),p.bandHi?.push(B));continue}if($!==void 0&&B!==void 0&&s!==void 0){N.push({from:d,to:d,basis:g.basis,bandLo:[$],bandHi:[B],bandKind:s});continue}N.push({from:d,to:d,basis:g.basis})}const w=r.current,D=w.breaks??[];return w.t.length===M.length&&w.t.every((g,d)=>g===M[d])&&w.v.every((g,d)=>Object.is(g,T[d]))&&D.length===R.length&&D.every((g,d)=>g===R[d])&&Pt(w.bridges??[],y)&&It(w.spans??[],C)&&Kt(w.reckoned??[],N)&&w.windowEndAt===(N.length>0?u:void 0)&&(w.interpolation??"linear")===A?w:(r.current={t:M,v:T,basis:"ut-seconds",breaks:R,bridges:y,spans:C,reckoned:N,interpolation:A,windowEndAt:N.length>0?u:void 0},$t(r.current,{payloads:L,modelled:F}),r.current)},[a,i,t]);return h.useSyncExternalStore(c,f)}const _t=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function Gt(e){const t=e.split(".").flatMap(i=>i.split(/(?=[A-Z])/)).map(i=>i.toLowerCase()).filter(i=>i.length>0).map(i=>_t[i]??i);if(t.length===0)return e;const[r,...o]=t;return[r===r.toUpperCase()?r:r[0].toUpperCase()+r.slice(1),...o].join(" ")}function qt(e,t,r){return r.has(e)?!0:We(`${e}.${t}`)?.rawTopic===e}function Wt(e,t){return{key:`${e}.${t.path}`,label:Gt(t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function Yt(e,t){const r=new Set(t),o=[...new Set([..._e(),...e,...t])].filter(f=>!Ge(f)).sort(),a=[],i=[],c=[];for(const f of o){if(qe(f)){c.push(f);continue}const u=vt(f).filter(m=>qt(f,m.path,r));if(u.length===0){i.push(f);continue}for(const m of u)a.push(Wt(f,m))}return{keys:a,undescribed:i,collections:c}}function te(){return[...ot.map(e=>e.topic),...Ve().map(e=>e.topic)]}let ae;function de(e,t){const r=`${e.join(",")}|${t.join(",")}`;if(ae?.key===r)return ae.built;const o=Yt(e,t);return ae={key:r,built:o},o}function Pe(e=q(),t=te()){return de(e,t).keys}function Jt(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!Zt.has(e.unit)}const Zt=new Set(["bool","enum","flag","id","raw","text"]);function Qt(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function To(e,t){const r=e?.enumEncoding;return r?.by!=="ordinal"||typeof t!="number"?t:r.names[t]??t}function Eo(e=q(),t=te()){return de(e,t).undescribed}function Ao(e=q(),t=te()){return de(e,t).collections}function xe(){return te().join(",")}function Ie(){const e=h.useSyncExternalStore(Ye,q,q),t=h.useSyncExternalStore(Je,xe,xe);return h.useMemo(()=>Pe(e,t.split(",")),[e,t])}function Xt(){const e=Ie();return h.useMemo(()=>e.filter(Jt),[e])}function No(){const e=Ie();return h.useMemo(()=>e.filter(Qt),[e])}const ye=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function Se(){return ce("missionHistory")}function er({missionId:e,fromUt:t,toUt:r}){const o=Xt(),[a,i]=h.useState(new Set),[c,f]=h.useState([]),[u,m]=h.useState(!1),[x,S]=h.useState(null);h.useEffect(()=>()=>{Se()?.evictFullHistoryStore(e)},[e]);const z=h.useMemo(()=>o.map(y=>({key:y.key,label:y.label??y.key,unit:y.unit,group:rr(y.key)})),[o]);h.useEffect(()=>{const y=Se();if(!y||a.size===0){f([]),S(null);return}let C=!1;m(!0),S(null);const N=[...a];return Promise.all(N.map(w=>y.queryRange(w,t,r,e))).then(w=>{if(C)return;const D=new Map(o.map(g=>[g.key,g])),K=N.map((g,d)=>{const j=tr(w[d],t),k=D.get(g);return{id:g,label:k?.label??g,axis:"primary",color:ye[d%ye.length],type:"line",data:j}});f(K)}).catch(w=>{C||S(w instanceof Error?w.message:String(w))}).finally(()=>{C||m(!1)}),()=>{C=!0}},[a,e,t,r,o]);const A=Math.max(0,(r-t)*1e3),v=A>0?[0,A]:[0,6e4],M=c.some(y=>y.data.x.length>0),T=[...a].map(y=>o.find(C=>C.key===y)),L=[...new Set(T.map((y,C)=>y?.label??[...a][C]))],F=[...new Set(T.map(y=>y?.unit))],R=gt(L.length>0&&L.length<=2?L.join(" / "):void 0,F.length===1?F[0]:void 0);return n.jsxs(or,{children:[n.jsxs(nr,{children:[n.jsx(ar,{children:"Series"}),n.jsx(ft,{keys:z,value:a,onChange:i,placeholder:"Add a data key...",emptyHint:z.length===0?"No numeric keys in the current schema":"No matches"})]}),x&&n.jsxs(lr,{role:"alert",children:["Failed to load samples: ",x]}),a.size===0?n.jsx(we,{children:"Pick one or more numeric telemetry keys above to plot them."}):n.jsxs(sr,{children:[u&&n.jsx(ir,{children:"Loading..."}),!u&&!M&&n.jsx(we,{children:"No recorded samples for the selected keys."}),M&&n.jsx(dt,{chrome:"bare",series:c,xDomain:v,xAxisLabel:"Mission time",yAxisLabel:R,height:260})]})]})}function tr(e,t){const r=[],o=[];for(let a=0;a<e.t.length;a++){const i=J(e.v[a]);typeof i!="number"||!Number.isFinite(i)||(r.push((e.t[a]-t)*1e3),o.push(i))}return{x:r,y:o}}function rr(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const or=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border-top: 1px solid var(--color-surface-raised);
`,nr=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,ar=l.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,sr=l.div`
  position: relative;
  min-height: 260px;
`,we=l.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  padding: var(--inset-chart-empty);
  text-align: center;
`,ir=l.div`
  position: absolute;
  top: var(--offset-corner);
  right: var(--offset-corner);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  background: rgba(0, 0, 0, 0.6);
  padding: var(--inset-chip);
  border-radius: var(--radius-regular);
  /* Local sibling ordering inside ChartWrap only: this badge just has to sit
     over the chart canvas beside it. The absolute number is meaningless
     outside that context, so it stays off the app-global z ladder. */
  z-index: 2;
`,lr=l.div`
  font-size: var(--font-size-compact);
  color: var(--color-nogo-text);
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  padding: var(--inset-surface);
  border-radius: var(--radius-regular);
`;function cr(e){return new Date(e).toLocaleString()}function dr(e,t){return le(W("irl:s",(t-e)/1e3))}function ur(e){const t=[e.fundsEarned===null?null:`+${le(W("funds",e.fundsEarned),{decimals:0})}`,e.scienceEarned===null?null:`+${le(W("science",e.scienceEarned),{decimals:1})}`].filter(r=>r!==null);return[`Recovered ${e.recoveryLocation}`,e.recoveryFactor,t.length>0?t.join(" · "):"no funds or science awarded"].filter(r=>r!=="").join(" · ")}function U(){return ce("missionHistory")}function ke(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),r=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${r}.fixture.json`}function je(e,t){const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),o=URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.download=t,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(o)}function Lo({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:r=!1}={}){const o=e==="main",[a,i]=h.useState([]),[c,f]=h.useState(null),[u,m]=h.useState(!1),[x,S]=h.useState(!1),[z,A]=h.useState(null),[v,M]=h.useState(()=>new Set),[T,L]=h.useState(()=>Re()),F=h.useCallback(async()=>{const s=U();if(!s)return;let p;try{p=await s.listFlights()}catch(b){console.warn("FlightsManager: failed to load flights",b);return}i(p.sort((b,E)=>E.launchedAt-b.launchedAt)),M(b=>{const E=new Set;for(const P of p)b.has(P.id)&&E.add(P.id);return E.size===b.size?b:E})},[]);h.useEffect(()=>{F()},[F]),h.useEffect(()=>{const s=U();if(typeof s?.onFlightListChange=="function")return s.onFlightListChange(()=>{F()})},[F]);const R=async s=>{const p=U();p&&(await p.deleteFlight(s),f(null),await F())},y=async s=>{const p=U();if(!p)return;const b=await p.exportFlight(s.id);je(b,ke(s))},C=async s=>{const p=U();if(!p)return;const b=await p.exportFlight(s.id),E={id:s.id,vesselName:s.vesselName,launchedAt:s.launchedAt,firstFrameUt:s.firstFrameUt??0,lastFrameUt:s.lastFrameUt??0,frameCount:s.sampleCount};Ue().start(E,b)},N=async()=>{const s=U();s&&(await s.clearAllFlights(),m(!1),await F())},w=s=>{M(p=>{const b=new Set(p);return b.has(s)?b.delete(s):b.add(s),b})},D=()=>{M(s=>s.size===a.length?new Set:new Set(a.map(p=>p.id)))},K=async()=>{const s=U();if(!s)return;const p=Array.from(v);for(const b of p)await s.deleteFlight(b);S(!1),await F()},g=async s=>{const p=U();p&&(await p.setFlightStarred(s.id,!s.starred),await F())},d=async s=>{const p=U(),b=s?Z:0;Qe(b),L(b),s&&p&&(await p.pruneFlightsKeepLatest({keepCount:b}),await F())},j=async()=>{const s=U();if(!s)return;const p=Array.from(v),b=new Map(a.map(E=>[E.id,E]));for(const E of p){const P=b.get(E);if(!P)continue;const He=await s.exportFlight(E);je(He,ke(P))}},k=a.length>0&&v.size===a.length,$=v.size>0&&v.size<a.length,B=(()=>{const s=[...a].sort((E,P)=>P.launchedAt-E.launchedAt);let p=0,b=0;for(const E of s)E.starred||(p+=1,p>Z&&(b+=1));return b})();return n.jsxs(hr,{children:[o&&n.jsx(pr,{missionHistoryEnabled:t,recordAllTopics:r}),a.length===0?n.jsx(lt,{children:"No flight history recorded yet"}):n.jsxs(n.Fragment,{children:[n.jsxs(xr,{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx(jr,{children:n.jsx(ie,{ref:s=>{s&&(s.indeterminate=$)},checked:k,onChange:D,"aria-label":k?"Clear selection":"Select all flights"})}),n.jsxs(Cr,{children:[n.jsx(pe,{size:12,fill:"currentColor","aria-hidden":"true"}),n.jsx(Ce,{children:"Kept (exempt from auto-delete)"})]}),n.jsx(_,{children:"Vessel"}),n.jsx(_,{children:"Launched"}),n.jsx(_,{children:"Duration"}),n.jsx(_,{children:"Samples"}),n.jsx(_,{children:n.jsx(Ce,{children:"Actions"})})]})}),n.jsx("tbody",{children:a.map(s=>{const p=z===s.id,b=v.has(s.id);return n.jsxs(h.Fragment,{children:[n.jsxs(ze,{$current:!1,children:[n.jsx(O,{children:n.jsx(ie,{checked:b,onChange:()=>w(s.id),"aria-label":`Select flight ${s.vesselName||s.id}`})}),n.jsx(O,{children:n.jsx(Mr,{type:"button",$on:!!s.starred,onClick:()=>void g(s),"aria-label":s.starred?`Unstar ${s.vesselName||"flight"}`:`Star ${s.vesselName||"flight"} (keep from auto-delete)`,"aria-pressed":!!s.starred,title:s.starred?"Kept from auto-delete":"Keep from auto-delete",children:n.jsx(pe,{size:"var(--icon-size-control)",fill:s.starred?"currentColor":"none"})})}),n.jsxs(O,{children:[s.vesselName||pt,s.outcome?.kind==="recovered"&&n.jsx(Te,{$tone:"go",title:ur(s.outcome),children:"recovered"}),s.outcome?.kind==="crashed"&&n.jsx(Te,{$tone:"nogo",title:`Crashed at ${s.outcome.body} (${s.outcome.situation}) · ${s.outcome.partsLostCount} part(s) lost${s.outcome.kerbalsKilled.length>0?` · KIA: ${s.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),n.jsx(O,{children:cr(s.launchedAt)}),n.jsx(O,{children:dr(s.launchedAt,s.lastSampleAt)}),n.jsx(O,{children:s.sampleCount.toLocaleString()}),n.jsx(O,{children:n.jsxs(gr,{children:[n.jsx(fr,{type:"button",$open:p,onClick:()=>A(p?null:s.id),"aria-label":p?"Close graph":"Graph this flight","aria-expanded":p,children:p?"− graph":"＋ graph"}),o&&n.jsx(mr,{type:"button",onClick:()=>void C(s),"aria-label":`Replay ${s.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),n.jsx(Me,{type:"button",onClick:()=>void y(s),"aria-label":`Download fixture for ${s.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),c===s.id?n.jsxs(se,{children:[n.jsx(X,{onClick:()=>void R(s.id),children:"Delete"}),n.jsx(ee,{onClick:()=>f(null),children:"Cancel"})]}):n.jsx(yr,{onClick:()=>f(s.id),children:"×"})]})})]}),p&&n.jsx(ze,{$current:!1,children:n.jsxs(O,{colSpan:7,style:{padding:0},children:[n.jsx(yt,{flight:s,onChange:()=>void F()}),n.jsx(er,{missionId:s.id,fromUt:s.firstValidUt??s.firstFrameUt??0,toUt:s.lastValidUt??s.lastFrameUt??0})]})})]},s.id)})})]}),n.jsxs(Sr,{children:[n.jsx(wr,{children:v.size>0&&(x?n.jsxs(se,{children:[n.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",v.size," selected flight",v.size===1?"":"s","?"]}),n.jsx(X,{onClick:()=>void K(),children:"Delete"}),n.jsx(ee,{onClick:()=>S(!1),children:"Cancel"})]}):n.jsxs(n.Fragment,{children:[n.jsxs(kr,{children:[v.size," selected"]}),n.jsx(Me,{type:"button",onClick:()=>void j(),title:"Download fixtures for the selected flights",children:"↓ download"}),n.jsx(X,{onClick:()=>S(!0),children:"Delete"}),n.jsx(ee,{onClick:()=>M(new Set),children:"Clear"})]}))}),n.jsxs(Fr,{children:[n.jsxs(zr,{title:`Keep the ${Z} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[n.jsx(ie,{checked:T>0,onChange:s=>void d(s.target.checked)}),n.jsxs("span",{children:["Keep latest ",Z,T===0&&B>0&&n.jsxs(Tr,{children:[" ","(",B," would be deleted)"]})]})]}),u?n.jsxs(se,{children:[n.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),n.jsx(X,{onClick:()=>void N(),children:"Clear all"}),n.jsx(ee,{onClick:()=>m(!1),children:"Cancel"})]}):n.jsx(Er,{onClick:()=>m(!0),children:"Clear all"})]})]})]})]})}function pr({missionHistoryEnabled:e,recordAllTopics:t}){const r=h.useSyncExternalStore(xt,ge,ge);return n.jsxs(vr,{children:[r.saveFailure&&n.jsxs(ut,{tone:"nogo",title:"Flight not saved",children:[r.saveFailure.vesselName,": ",r.saveFailure.cause]}),e?r.recording?n.jsxs(br,{children:["● recording ",r.vesselName??"flight"," (",r.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):n.jsx(Fe,{children:"Auto-record armed: capture starts the moment a flight begins."}):n.jsx(Fe,{children:"Mission history is off, enable it in Settings to auto-record."})]})}const Ce=l.span`
  position: absolute;
  /* The 1px box and its cancelling -1px margin are the visually-hidden
     clip-rect idiom, not spacing: the margin exists to pull the 1px box out
     of flow so the node cannot be scrolled to. They move together or not at
     all, so they stay off the spacing ladder. */
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,hr=l.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  /* Graph panels expand in-place, so let the whole thing scroll rather than
     clipping the chart. Horizontal scroll catches narrow viewports where the
     row-action button cluster won't fit even in the wide flight modal. */
  max-height: 80vh;
  overflow: auto;
`,gr=l.div`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
`,fr=l.button`
  background: ${({$open:e})=>e?"var(--color-go-status)":"none"};
  border: 1px solid ${({$open:e})=>e?"var(--color-go-status)":"var(--color-border-strong)"};
  color: ${({$open:e})=>e?"var(--color-go-text)":"var(--color-text-muted)"};
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  letter-spacing: 0.06em;

  @media (hover: hover) {
    &:hover {
      border-color: var(--color-go-status);
      color: var(--color-go-on-status);
    }
  }
`,Me=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  letter-spacing: 0.06em;

  @media (hover: hover) {
    &:hover {
      border-color: var(--color-tag-blue-fg);
      color: var(--color-tag-blue-fg);
    }
  }
`,mr=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  letter-spacing: 0.06em;

  @media (hover: hover) {
    &:hover {
      border-color: var(--color-tag-purple-fg);
      color: var(--color-tag-purple-fg);
    }
  }
`,vr=l.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-section);
  padding-bottom: var(--inset-toolbar-bottom);
  margin-bottom: var(--gap-toolbar);
  border-bottom: 1px solid var(--color-border-subtle);
`,Fe=l.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,br=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  background: var(--color-nogo-status);
  border: 1px solid var(--color-nogo-mark);
  color: var(--color-nogo-on-status);
  font-size: var(--font-size-compact);
  padding: var(--inset-chip);
  border-radius: var(--radius-regular);
  letter-spacing: 0.06em;
`,xr=l.table`
  border-collapse: collapse;
  width: 100%;
  overflow-y: auto;
  font-size: var(--font-size-compact);
`,_=l.th`
  text-align: left;
  padding: var(--inset-surface);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
`,ze=l.tr`
  background: ${({$current:e})=>e?"var(--color-go-status)":"transparent"};
  &:hover { background: var(--color-surface-raised); }
`,O=l.td`
  /* 7px is computed, not chosen: it is the 6px vertical half of the surface
     inset Th carries, plus the 1px that makes a body row taller than the
     header row. It tracks Th, not the spacing grid. */
  padding: 7px var(--gutter-table-cell);
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-surface-raised);
  white-space: nowrap;
`,Te=l.span`
  display: inline-block;
  margin-left: var(--gap-trailing-mark);
  font-size: var(--font-size-caption);
  padding: var(--inset-chip);
  /* A stadium, not a corner: the badge renders about 17px tall (11px x 1.2
     plus 1px padding and 1px border each side), so 8px was already at half
     the height. --radius-pill clamps to the same shape and keeps it there
     when the chip inset above widens the badge. The --radius-floating that 8px
     maps to by value would visibly square these GO/NO-GO pills. */
  border-radius: var(--radius-pill);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: help;
  background: ${e=>e.$tone==="go"?"var(--color-go-status)":"var(--color-nogo-mark)"};
  border: 1px solid
    ${e=>e.$tone==="go"?"var(--color-go-status)":"var(--color-nogo-mark)"};
  color: ${e=>e.$tone==="go"?"var(--color-go-text)":"var(--color-nogo-text)"};
`,yr=l.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-lg);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,se=l.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
`,X=l.button`
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  color: var(--color-tag-red-fg);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { background: var(--color-nogo-muted); }
`,ee=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,Sr=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-section);
  padding: var(--inset-table-footer);
  border-top: 1px solid var(--color-border-subtle);
`,wr=l.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-height: 24px;
`,kr=l.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,jr=l.th`
  width: 28px;
  padding: var(--inset-surface);
  border-bottom: 1px solid var(--color-border-subtle);
`,ie=l.input.attrs({type:"checkbox"})`
  cursor: pointer;
  margin: 0;
`,Cr=l.th`
  width: 24px;
  /* The one cell that cannot take --inset-surface beside Th and ThCheckbox: a
     24px column carrying a star glyph needs more vertical than horizontal. At
     (6,8) the content box is 8px and the glyph clips. */
  padding: var(--inset-table-narrow-header);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
  text-align: center;
`,Mr=l.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--inset-glyph-tight);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({$on:e})=>e?"var(--color-tag-yellow-fg)":"var(--color-text-faint)"};

  @media (hover: hover) {
    &:hover {
      color: var(--color-tag-yellow-fg);
    }
  }
`,Fr=l.div`
  display: flex;
  align-items: center;
  gap: var(--gap-section);
`,zr=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  cursor: pointer;
  user-select: none;
`,Tr=l.span`
  color: var(--color-nogo-muted);
`,Er=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-dim);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,Ar=new Ze({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class Ro{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new Xe;historyCache=new Map;async connect(){await this.pruneToKeepCount()}disconnect(){}schema(){return Pe()}subscribe(t,r){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,r,o,a){if(!a)return{t:[],v:[]};const i=nt(t);if(!i)return{t:[],v:[]};const c=await this.getFullHistoryStore(a);if(!c)return{t:[],v:[]};const f=c.isDerivedTopic(i)?c.sampleDerivedRange(i,r,o):c.sampleRange(i,r,o);return f?{t:f.map(u=>u.validAt),v:f.map(u=>u.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(G)}async getFlight(t){const r=await this.missionStore.getMissionMeta(t);return r?G(r):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.meta.id)}async saveMissionPart(t,r,o){await this.missionStore.saveMissionPart(t,r,o),this.historyCache.delete(t.id),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.id)}async pruneToKeepCount(t){const r=Re();if(!(r<=0))try{await this.pruneFlightsKeepLatest({keepCount:r,keepId:t})}catch(o){ht.warn("[MissionHistorySource] keep latest could not prune",{err:String(o)})}}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,r){const o=await this.missionStore.getMissionMeta(t);!o||!!o.starred===r||(await this.missionStore.updateMissionMeta(t,{starred:r}),this.flightListSubscribers.fire())}async addChapter(t,r){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const i={id:r.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:r.label,startMs:r.startMs,endMs:r.endMs},c=[...o.chapters??[],i];return await this.missionStore.updateMissionMeta(t,{chapters:c}),this.flightListSubscribers.fire(),G({...o,chapters:c})}async updateChapter(t,r,o){const a=await this.missionStore.getMissionMeta(t);if(!a)return null;const i=(a.chapters??[]).map(c=>c.id===r?{...c,...o}:c);return await this.missionStore.updateMissionMeta(t,{chapters:i}),this.flightListSubscribers.fire(),G({...a,chapters:i})}async removeChapter(t,r){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const a=(o.chapters??[]).filter(i=>i.id!==r);return await this.missionStore.updateMissionMeta(t,{chapters:a}),this.flightListSubscribers.fire(),G({...o,chapters:a})}async pruneFlightsKeepLatest(t){const r=await this.missionStore.pruneMissionsKeepLatest(t);for(const o of r)this.historyCache.delete(o);return r.length>0&&this.flightListSubscribers.fire(),r}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const r=this.historyCache.get(t);if(r)return r;const o=(async()=>{const a=await this.missionStore.getMissionFixture(t);if(!a)throw new Error(`mission fixture not found: ${t}`);return Ar.record(),mt(a.fixture)})();this.historyCache.set(t,o);try{return await o}catch{this.historyCache.delete(t);return}}}function G(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt,firstValidUt:e.firstValidUt,lastValidUt:e.lastValidUt}}const Nr=[];function Lr(e){const t=[re(e.dvRadial,0),re(e.dvNormal,0),re(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function $o(){const e=at("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return h.useMemo(()=>!Array.isArray(t)||t.length===0?Nr:t.map(Lr),[t])}function Rr(e){const t=e.parts.map($r),r=e.parts.find(o=>o.parentId==null);return{topologySeq:e.parts.length,rootFlightId:r?Number(r.id):0,parts:t}}function $r(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage??null,crewCapacity:0,maxTemp:e.maxTemp?.magnitude??null,crashTolerance:0,dryMass:e.dryMass?.magnitude??null,orgPos:[e.position.x.magnitude,e.position.y.magnitude,e.position.z.magnitude],up:e.up?[e.up.x.magnitude,e.up.y.magnitude,e.up.z.magnitude]:void 0,bounds:{size:{x:e.bounds.size.x.magnitude,y:e.bounds.size.y.magnitude,z:e.bounds.size.z.magnitude},center:e.bounds.center?{x:e.bounds.center.x.magnitude,y:e.bounds.center.y.magnitude,z:e.bounds.center.z.magnitude}:void 0},modules:e.modules}}function Ur(e){return e.currentTemp==null?null:{temperature:he(e.currentTemp.magnitude),maxTemperature:e.maxTemp==null?null:he(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp?.magnitude??null}}function Dr(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Ur(r));return t}function Br(e){const t={};for(const[r,o]of Object.entries(e.resources))t[r]={amount:o.amount?.magnitude??null,maxAmount:o.maxAmount?.magnitude??null,...o.flow!=null?{flow:o.flow.magnitude}:{},...o.nominalFlow!=null?{nominalFlow:o.nominalFlow.magnitude}:{},...o.unratedProcess===!0?{unratedProcess:!0}:{}};return t}function Or(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Br(r));return t}function Pr(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function Ir(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map(Pr)}}function Kr(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Ir(r));return t}function Uo(e){const t=$e("vessel.parts"),r=t.state==="observed"||t.state==="held"?t.value:void 0,o=h.useMemo(()=>Dr(r),[r]),a=h.useMemo(()=>Or(r),[r]),i=h.useMemo(()=>Kr(r),[r]),c=[...e].sort((f,u)=>f-u).join(",");return h.useMemo(()=>{const f=c.length===0?[]:c.split(",").map(Number),u=new Map;for(const m of f)u.set(m,{thermal:o.get(m)??null,resources:a.get(m)??{},partState:i.get(m)});return u},[c,o,a,i])}const Ee=Object.freeze({status:"none"}),Hr={t:[],readings:[]};function Ke(e){return e==="recorded"||e==="last-before-blackout"?e:void 0}function Vr(e){return e!==null&&typeof e=="object"&&"magnitude"in e}function _r(e,t){if(Vr(e))return{value:e,...t};if(typeof e=="number")return{value:W(t.lo.unit,e),...t}}function Gr(e){const t=Ut(e);if(t===void 0)return Hr;const r=new Map;for(const i of e.spans??[]){const c=Ke(i.status);if(c!==void 0)for(let f=i.from;f<=i.to;f++)r.set(f,c)}let o;const a=e.t.map((i,c)=>{const f=W("ut",i),u=t.payloads[c],m=t.modelled.get(c);if(m!==void 0){const S={status:"available",modelled:u,atUt:f,beyondReceived:!0,basis:m.basis,band:m.band?_r(u,m.band):void 0};return o===void 0?{state:"pending",reckoning:S}:{state:"held",value:o.payload,asOfUt:o.at,grade:"held",reckoning:S}}o={payload:u,at:f};const x=r.get(c);return x!==void 0?{state:"held",value:u,asOfUt:f,grade:x,reckoning:Ee}:{state:"observed",value:u,atUt:f,reckoning:Ee}});return{t:e.t,readings:a,basis:e.basis,breaks:e.breaks,bridges:e.bridges,windowEndAt:e.windowEndAt,interpolation:e.interpolation}}function Do(e,t){const r=Vt(bt(e),t);return h.useMemo(()=>Gr(r),[r])}function qr(e,t,r,o){if(o===void 0)return null;if(t!==null&&t.status===o)return t.to=r,t;const a={from:r,to:r,status:o};return e.push(a),a}function Wr(e,t,r,o,a){if(o===void 0)return null;if(t!==null&&t.basis===o&&t.bandKind===a?.kind)return t.to=r,a!==void 0&&(t.bandLo?.push(a.lo),t.bandHi?.push(a.hi)),t;const i=a!==void 0?{from:r,to:r,basis:o,bandLo:[a.lo],bandHi:[a.hi],bandKind:a.kind}:{from:r,to:r,basis:o};return e.push(i),i}function Yr(e){const t=J(e);return typeof t=="number"?t:Number.NaN}function Jr(e){const[t,r]=Oe(e?.lo,e?.hi);if(!(e===void 0||t===void 0||r===void 0))return{lo:t,hi:r,kind:e.kind}}function Bo(e){const t=[],r=[],o={t:[],v:[],basis:e.basis,breaks:[],spans:t,reckoned:r,bridges:[],windowEndAt:e.windowEndAt,interpolation:e.interpolation},a=new Set(e.breaks??[]),i=new Map((e.bridges??[]).map(x=>[x.to,x])),c=new Map;let f=null,u=null,m=!1;for(let x=0;x<e.t.length;x++){a.has(x)&&(m=!0);const S=e.readings[x],z=S.reckoning.status==="available"?S.reckoning:void 0,A=Yr(z?z.modelled:S.value);if(Number.isNaN(A))continue;const v=o.t.length,M=m&&v>0;M&&o.breaks.push(v),m=!1,c.set(x,v);const T=i.get(x);T!==void 0&&!M&&c.get(x-1)===v-1&&T.v.every(Number.isFinite)&&o.bridges.push({...T,to:v}),o.t.push(e.t[x]),o.v.push(A);const L=z===void 0&&S.state==="held"?Ke(S.grade):void 0;f=qr(t,f,v,L),u=Wr(r,u,v,z?.basis,Jr(z?.band))}return o}function Oo(){const e=$e("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return h.useMemo(()=>t?Rr(t):void 0,[t])}function Po(){const e=Ue(),t=h.useSyncExternalStore(c=>e.subscribe(c),()=>e.getSnapshot());if(st(),!t.active||!t.meta)return null;const r=t.meta,o=e.cursorUt(),a=Math.max(0,r.lastFrameUt-r.firstFrameUt),i=Math.max(0,o-r.firstFrameUt);return n.jsxs(Zr,{role:"region","aria-label":"Replay controls",children:[n.jsxs(Ne,{children:[n.jsx(eo,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),n.jsxs(Qr,{children:["REPLAY: ",n.jsx(Xr,{children:r.vesselName||"Unnamed vessel"})]})]}),n.jsxs(to,{children:[n.jsx(Le,{children:Ae(i)}),n.jsx(ro,{type:"range",min:r.firstFrameUt,max:r.lastFrameUt,step:.1,value:o,onChange:c=>e.seekTo(Number(c.target.value)),"aria-label":"Seek to position"}),n.jsx(Le,{children:Ae(a)})]}),n.jsxs(Ne,{children:[n.jsxs(oo,{value:String(t.rate),onChange:c=>e.setRate(Number(c.target.value)),"aria-label":"Playback rate",children:[n.jsx("option",{value:"0.5",children:"0.5×"}),n.jsx("option",{value:"1",children:"1×"}),n.jsx("option",{value:"2",children:"2×"}),n.jsx("option",{value:"5",children:"5×"}),n.jsx("option",{value:"10",children:"10×"}),n.jsx("option",{value:"50",children:"50×"})]}),n.jsx(no,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function Ae(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),r=Math.floor(t/3600),o=Math.floor(t%3600/60),a=t%60;return r>0?`${r}:${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`}const Zr=l.div`
  position: sticky;
  top: 0;
  /* The canonical --z-sticky site: in-flow chrome pinned while the dashboard
     scrolls under it. 50 becomes 100, which crosses ui's BannerStack at 90,
     but the two never occupy the same pixels (this is a full-width strip at
     top: 0, the stack is bottom-right), so the order between them is not a
     contract. */
  z-index: var(--z-sticky);
  display: flex;
  align-items: center;
  gap: var(--gap-section);
  padding: var(--inset-banner);
  background: var(--color-tag-purple-bg, var(--color-surface-raised));
  border-bottom: 2px solid var(--color-tag-purple-fg);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;
`,Ne=l(ct).attrs({justify:"start"})`
  flex-shrink: 0;
`,Qr=l.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
`,Xr=l.span`
  color: var(--color-tag-purple-fg);
  font-weight: 700;
  margin-left: var(--gap-trailing-figure);
`,eo=l.button`
  background: var(--color-tag-purple-fg);
  border: none;
  color: var(--color-surface-app);
  cursor: pointer;
  font-size: var(--font-size-base);
  width: 28px;
  height: 28px;
  border-radius: var(--radius-circle);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: 2px;
  }
`,to=l.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,ro=l.input`
  flex: 1;
  min-width: 0;
  accent-color: var(--color-tag-purple-fg);
`,Le=l.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  white-space: nowrap;
`,oo=l.select`
  background: var(--color-surface-app);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,no=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`;export{Lo as F,Ro as M,Po as R,Or as a,Oe as b,Ao as c,te as d,Pe as e,Eo as f,ge as g,Gt as h,Jt as i,Qt as j,J as k,Yr as l,Mo as m,xt as n,Vt as o,Bo as p,Xt as q,zo as r,Fo as s,Uo as t,$o as u,No as v,Do as w,Ie as x,Oo as y,To as z};
