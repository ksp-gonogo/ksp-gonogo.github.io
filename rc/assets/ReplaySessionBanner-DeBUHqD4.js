import{j as n}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{b8 as ue,bY as he,cv as Y,R as Qe,cr as Xe,cz as et,cy as tt,dc as rt,dh as ot,ag as nt,bw as q,aZ as J,a_ as st,b5 as ne}from"./view-clock-formula-CGkCzEOv.js";import{r as u}from"./ext-react-C0MU9AHG.js";import{o as Be,D as X,s as at,L as it}from"./ksp-enum-names-DhcvEpKL.js";import{A as lt}from"./screen-DfId7NXt.js";import{ba as ct,bc as dt,aW as ut,i as pt,aH as ht,b7 as Oe,bg as gt}from"./lagrange-ErO631rd.js";import{w as Pe}from"./use-transmissions-D2n-EjFE.js";import{g as Ie}from"./replay-session-controller-CXLQra9S.js";import"./websocket-transport-BJGmoURk.js";import{y as _,ax as ft,E as mt,w as ge,af as vt}from"./ModalSaveBar-Dx8t4t75.js";import{G as bt,N as xt}from"./Notice-CBnQQCCw.js";import{N as yt,w as de}from"./contributionsRead-Ce4ChGm6.js";import"./processorPerfBudget-CSZniFyA.js";import{l as fe}from"./index-BrbVhvxX.js";import{h as St,D as wt}from"./VersionMismatchBanner-a9cH14dU.js";import l from"./ext-styled-components-DAuodqsN.js";import{b as kt}from"./full-history-replay-CkpOnrVB.js";import{e as jt,s as Ct}from"./topic-fields-C6a2vjIE.js";import{k as me}from"./orbital-DtpZjZA4.js";const Ke={recording:!1,vesselName:null,frameCount:0,saveFailure:null};let K=Ke;const Z=new Set;function ve(){return K}function Lo(e){K={...e,saveFailure:K.saveFailure};for(const t of Z)t()}function $o(e){if(K.saveFailure!==e){K={...K,saveFailure:e};for(const t of Z)t()}}function Mt(e){return Z.add(e),()=>{Z.delete(e)}}function Uo(){K=Ke,Z.clear()}function se(){return ue("missionHistory")}function V(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),r=Math.floor(t/3600),o=Math.floor(t%3600/60),s=t%60;return r>0?`${r}:${String(o).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function ee(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const c=Number(t);return Number.isFinite(c)&&c>=0?c*1e3:null}const r=t.split(":").map(c=>c.trim());if(r.some(c=>c===""||!/^\d+(\.\d+)?$/.test(c)))return null;const o=r.map(Number),i=o.length===2?o[0]*60+o[1]:o.length===3?o[0]*3600+o[1]*60+o[2]:null;return i===null?null:i*1e3}function Ft({flight:e,onChange:t}){const r=e.chapters??[],o=Math.max(0,e.lastSampleAt-e.launchedAt),[s,i]=u.useState(""),[c,f]=u.useState(""),[p,m]=u.useState(""),[x,S]=u.useState(null),[z,A]=u.useState(null),[v,M]=u.useState(""),[T,R]=u.useState(""),[F,L]=u.useState(""),[y,C]=u.useState(null);function N(d){A(d.id),M(d.label),R(V(d.startMs)),L(V(d.endMs)),C(null)}function w(){A(null),C(null)}async function O(){const d=se();if(!d)return;const j=ee(c),k=ee(p);if(s.trim()===""){S("Label required");return}if(j===null||k===null){S("Start and end must be mm:ss");return}if(k<=j){S("End must be after start");return}S(null),await d.addChapter(e.id,{label:s.trim(),startMs:j,endMs:k}),i(""),f(""),m(""),t()}async function H(d){const j=se();if(!j)return;const k=ee(T),U=ee(F);if(v.trim()===""){C("Label required");return}if(k===null||U===null){C("Start and end must be mm:ss");return}if(U<=k){C("End must be after start");return}C(null),await j.updateChapter(e.id,d,{label:v.trim(),startMs:k,endMs:U}),A(null),t()}async function g(d){const j=se();j&&(await j.removeChapter(e.id,d),z===d&&w(),t())}return n.jsxs(zt,{children:[n.jsx(Tt,{children:"Chapters"}),r.length===0?n.jsx(Et,{children:"No chapters yet. Add markers to slice the flight."}):n.jsx(At,{children:r.slice().sort((d,j)=>d.startMs-j.startMs).map(d=>{const j=z===d.id;return n.jsx(Nt,{children:j?n.jsxs(n.Fragment,{children:[n.jsx(_,{type:"text",value:v,onChange:k=>M(k.target.value),"aria-label":"Chapter label"}),n.jsx(_,{type:"text",value:T,onChange:k=>R(k.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),n.jsx(_,{type:"text",value:F,onChange:k=>L(k.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),n.jsxs(be,{children:[n.jsx(Dt,{type:"button",onClick:()=>void H(d.id),children:"Save"}),n.jsx(Bt,{type:"button",onClick:w,children:"Cancel"})]})]}):n.jsxs(n.Fragment,{children:[n.jsx(Rt,{title:d.label,children:d.label}),n.jsxs(Lt,{children:[V(d.startMs)," – ",V(d.endMs)]}),n.jsxs($t,{children:["(",V(d.endMs-d.startMs),")"]}),n.jsxs(be,{children:[n.jsx(Ut,{type:"button",onClick:()=>N(d),children:"edit"}),n.jsx(Ot,{type:"button",onClick:()=>void g(d.id),"aria-label":`Remove chapter ${d.label}`,children:"×"})]})]})},d.id)})}),y&&n.jsx(xe,{children:y}),n.jsxs(Pt,{children:[n.jsx(_,{type:"text",placeholder:"Chapter name",value:s,onChange:d=>i(d.target.value),"aria-label":"New chapter label"}),n.jsx(_,{type:"text",placeholder:"0:00",value:c,onChange:d=>f(d.target.value),"aria-label":"New chapter start (mm:ss)"}),n.jsx(_,{type:"text",placeholder:V(o),value:p,onChange:d=>m(d.target.value),"aria-label":"New chapter end (mm:ss)"}),n.jsx(It,{type:"button",onClick:()=>void O(),children:"+ add"})]}),x&&n.jsx(xe,{children:x})]})}const zt=l.div`
  padding: var(--inset-chapters-band);
  background: var(--color-surface-app);
  border-bottom: 1px solid var(--color-border-subtle);
`,Tt=l.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: var(--gap-heading-hint);
`,Et=l.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  margin-bottom: var(--gap-related-comfortable);
`,At=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  margin-bottom: var(--gap-related-comfortable);
`,Nt=l(ft).attrs({cols:"minmax(120px, 1fr) auto auto auto",gap:"related-comfortable"})`
  font-size: var(--font-size-compact);
`,Rt=l.span`
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Lt=l.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-muted);
  white-space: nowrap;
`,$t=l.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-faint);
  font-size: var(--font-size-compact);
  white-space: nowrap;
`,be=l.span`
  display: inline-flex;
  gap: var(--gap-related);
  align-items: center;
  justify-self: end;
`,Ut=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,Dt=l.button`
  background: var(--color-go-status);
  border: 1px solid var(--color-go-status);
  color: var(--color-go-on-status);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,Bt=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,Ot=l.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-base);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,Pt=l.div`
  display: grid;
  grid-template-columns: minmax(120px, 1fr) 80px 80px auto;
  gap: var(--gap-related);
  align-items: center;
  margin-top: var(--gap-actions);
`,It=l.button`
  background: none;
  border: 1px dashed var(--color-text-faint);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  white-space: nowrap;
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,xe=l.div`
  margin-top: var(--gap-sub-readout);
  font-size: var(--font-size-compact);
  color: var(--color-tag-red-fg);
`,He=new WeakMap;function Kt(e,t){He.set(e,t)}function Ht(e){return He.get(e)}const ae={t:[],v:[]};function _t(e){switch(e){case he.LastBeforeBlackout:return"last-before-blackout";case he.Recorded:return"recorded";default:return null}}function Vt(e){const t=[];let r=null;for(let o=0;o<e.length;o++){const s=_t(e[o].meta.staleness);if(s===null){r=null;continue}if(r!==null&&r.status===s){r.to=o;continue}r={from:o,to:o,status:s},t.push(r)}return t}const ye=new WeakMap;function Gt(e){const t=ye.get(e);if(t)return t;const r={t:e.t,v:e.v.map(o=>{const s=Q(o);return typeof s=="number"?s:Number.NaN}),basis:e.basis};return ye.set(e,r),r}function qt(e,t){return e.length===t.length&&e.every((r,o)=>r.to===t[o].to&&r.v===t[o].v)}function Wt(e,t){return e.length===t.length&&e.every((r,o)=>r.from===t[o].from&&r.to===t[o].to&&r.status===t[o].status)}function Se(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((r,o)=>Object.is(r,t[o]))}function Yt(e,t){return e.length===t.length&&e.every((r,o)=>r.from===t[o].from&&r.to===t[o].to&&r.basis===t[o].basis&&r.bandKind===t[o].bandKind&&Se(r.bandLo,t[o].bandLo)&&Se(r.bandHi,t[o].bandHi))}function _e(e,t){return[e?.toWire(),t?.toWire()]}function Jt(e,t,r,o,s){const i=new Map((t.sampleRange(r,o,s)??[]).map(p=>[p.validAt,JSON.stringify(p.payload)])),c=[];let f;for(const p of e){const m=i.get(p.validAt)??JSON.stringify(p.payload);m!==f&&(f=m,c.push(p))}return c}function Q(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function Zt(e,t){const r=u.useRef(ae),o=ct(),s=dt(),i=e,c=u.useCallback(p=>{if(!o||!s)return()=>{};const m=ut(o,s,i),x=s.subscribeFrame(p);return()=>{x(),m()}},[o,s,i]),f=u.useCallback(()=>{if(!s)return ae;const p=s.currentFrame().viewUt,m=p-t,x=s.isDerivedTopic(i)?s.sampleDerivedRange(i,m,p):s.sampleRange(i,m,p),S=s.sampleReckonedTail(i,m,p),z=s.tagsOf(i),A=z.kind==="event"?"none":z.kind==="discrete"?"step":"linear",v=z.kind==="event"?Jt(x??[],s,z.topic,m,p):x??[];if(v.length===0&&S.length===0)return ae;const M=v.map(g=>g.validAt),T=v.map(g=>Q(g.payload)),R=v.map(g=>g.payload),F=new Map,L=[],y=[];for(let g=0;g<v.length;g++){if(g===0)continue;if(A==="none")break;if(v[g].meta.gapSinceUt!=null){L.push(g);continue}if(Object.is(T[g],T[g-1]))continue;const d=s.gapModel(i,v[g-1],v[g]);if(d?.carried===!1){L.push(g);continue}d?.carried&&y.push({to:g,...Gt(d)})}const C=Vt(v),N=[];for(const g of S){const d=M.length;M.push(g.atUt),T.push(Q(g.value)),R.push(g.value);const{bandLo:j,bandHi:k}=g,[U,P]=_e(j,k),a=U!==void 0&&P!==void 0?g.bandKind:void 0;F.set(d,{basis:g.basis,band:j!==void 0&&k!==void 0&&a!==void 0?{lo:j,hi:k,kind:a}:void 0});const h=N[N.length-1],b=h!==void 0&&h.basis===g.basis&&h.to===d-1&&h.bandKind===a;if(h!==void 0&&b){h.to=d,U!==void 0&&P!==void 0&&a!==void 0&&(h.bandLo?.push(U),h.bandHi?.push(P));continue}if(U!==void 0&&P!==void 0&&a!==void 0){N.push({from:d,to:d,basis:g.basis,bandLo:[U],bandHi:[P],bandKind:a});continue}N.push({from:d,to:d,basis:g.basis})}const w=r.current,O=w.breaks??[];return w.t.length===M.length&&w.t.every((g,d)=>g===M[d])&&w.v.every((g,d)=>Object.is(g,T[d]))&&O.length===L.length&&O.every((g,d)=>g===L[d])&&qt(w.bridges??[],y)&&Wt(w.spans??[],C)&&Yt(w.reckoned??[],N)&&w.windowEndAt===(N.length>0?p:void 0)&&(w.interpolation??"linear")===A?w:(r.current={t:M,v:T,basis:"ut-seconds",breaks:L,bridges:y,spans:C,reckoned:N,interpolation:A,windowEndAt:N.length>0?p:void 0},Kt(r.current,{payloads:R,modelled:F}),r.current)},[s,i,t]);return u.useSyncExternalStore(c,f)}const Qt=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function Xt(e){const t=e.split(".").flatMap(i=>i.split(/(?=[A-Z])/)).map(i=>i.toLowerCase()).filter(i=>i.length>0).map(i=>Qt[i]??i);if(t.length===0)return e;const[r,...o]=t;return[r===r.toUpperCase()?r:r[0].toUpperCase()+r.slice(1),...o].join(" ")}function er(e,t,r){return r.has(e)?!0:rt(`${e}.${t}`)?.rawTopic===e}function tr(e,t){return{key:`${e}.${t.path}`,label:Xt(t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function rr(e,t){const r=new Set(t),o=[...new Set([...Xe(),...e,...t])].filter(f=>!et(f)).sort(),s=[],i=[],c=[];for(const f of o){if(tt(f)){c.push(f);continue}const p=jt(f).filter(m=>er(f,m.path,r));if(p.length===0){i.push(f);continue}for(const m of p)s.push(tr(f,m))}return{keys:s,undescribed:i,collections:c}}function oe(){return[...pt.map(e=>e.topic),...Qe().map(e=>e.topic)]}let ie;function pe(e,t){const r=`${e.join(",")}|${t.join(",")}`;if(ie?.key===r)return ie.built;const o=rr(e,t);return ie={key:r,built:o},o}function Ve(e=Y(),t=oe()){return pe(e,t).keys}function or(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!nr.has(e.unit)}const nr=new Set(["bool","enum","flag","id","raw","text"]);function sr(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function Do(e,t){const r=e?.enumEncoding;return r?.by!=="ordinal"||typeof t!="number"?t:r.names[t]??t}function Bo(e=Y(),t=oe()){return pe(e,t).undescribed}function Oo(e=Y(),t=oe()){return pe(e,t).collections}function we(){return oe().join(",")}function Ge(){const e=u.useSyncExternalStore(ot,Y,Y),t=u.useSyncExternalStore(nt,we,we);return u.useMemo(()=>Ve(e,t.split(",")),[e,t])}function ar(){const e=Ge();return u.useMemo(()=>e.filter(or),[e])}function Po(){const e=Ge();return u.useMemo(()=>e.filter(sr),[e])}const ke=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function je(){return ue("missionHistory")}function ir({missionId:e,fromUt:t,toUt:r}){const o=ar(),[s,i]=u.useState(new Set),[c,f]=u.useState([]),[p,m]=u.useState(!1),[x,S]=u.useState(null);u.useEffect(()=>()=>{je()?.evictFullHistoryStore(e)},[e]);const z=u.useMemo(()=>o.map(y=>({key:y.key,label:y.label??y.key,unit:y.unit,group:cr(y.key)})),[o]);u.useEffect(()=>{const y=je();if(!y||s.size===0){f([]),S(null);return}let C=!1;m(!0),S(null);const N=[...s];return Promise.all(N.map(w=>y.queryRange(w,t,r,e))).then(w=>{if(C)return;const O=new Map(o.map(g=>[g.key,g])),H=N.map((g,d)=>{const j=lr(w[d],t),k=O.get(g);return{id:g,label:k?.label??g,axis:"primary",color:ke[d%ke.length],type:"line",data:j}});f(H)}).catch(w=>{C||S(w instanceof Error?w.message:String(w))}).finally(()=>{C||m(!1)}),()=>{C=!0}},[s,e,t,r,o]);const A=Math.max(0,(r-t)*1e3),v=A>0?[0,A]:[0,6e4],M=c.some(y=>y.data.x.length>0),T=[...s].map(y=>o.find(C=>C.key===y)),R=[...new Set(T.map((y,C)=>y?.label??[...s][C]))],F=[...new Set(T.map(y=>y?.unit))],L=St(R.length>0&&R.length<=2?R.join(" / "):void 0,F.length===1?F[0]:void 0);return n.jsxs(dr,{children:[n.jsxs(ur,{children:[n.jsx(pr,{children:"Series"}),n.jsx(wt,{keys:z,value:s,onChange:i,placeholder:"Add a data key...",emptyHint:z.length===0?"No numeric keys in the current schema":"No matches"})]}),x&&n.jsxs(fr,{role:"alert",children:["Failed to load samples: ",x]}),s.size===0?n.jsx(Ce,{children:"Pick one or more numeric telemetry keys above to plot them."}):n.jsxs(hr,{children:[p&&n.jsx(gr,{children:"Loading..."}),!p&&!M&&n.jsx(Ce,{children:"No recorded samples for the selected keys."}),M&&n.jsx(bt,{chrome:"bare",series:c,xDomain:v,xAxisLabel:"Mission time",yAxisLabel:L,height:260})]})]})}function lr(e,t){const r=[],o=[];for(let s=0;s<e.t.length;s++){const i=Q(e.v[s]);typeof i!="number"||!Number.isFinite(i)||(r.push((e.t[s]-t)*1e3),o.push(i))}return{x:r,y:o}}function cr(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const dr=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border-top: 1px solid var(--color-surface-raised);
`,ur=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,pr=l.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,hr=l.div`
  position: relative;
  min-height: 260px;
`,Ce=l.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  padding: var(--inset-chart-empty);
  text-align: center;
`,gr=l.div`
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
`,fr=l.div`
  font-size: var(--font-size-compact);
  color: var(--color-nogo-text);
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  padding: var(--inset-surface);
  border-radius: var(--radius-regular);
`;function mr(e){return new Date(e).toLocaleString()}function vr(e,t){return de(J("s",(t-e)/1e3))}const br={[q.Recovered]:"Recovered",[q.Crashed]:"Crashed",[q.Reverted]:"Reverted",[q.Destroyed]:"Destroyed",[q.Terminated]:"Terminated"};function xr(e){return e===void 0?"Not known":br[e]??"Not known"}function yr(e){const t=[e.fundsEarned===null?null:`+${de(J("funds",e.fundsEarned),{decimals:0})}`,e.scienceEarned===null?null:`+${de(J("science",e.scienceEarned),{decimals:1})}`].filter(r=>r!==null);return[`Recovered ${e.recoveryLocation}`,e.recoveryFactor,t.length>0?t.join(" · "):"no funds or science awarded"].filter(r=>r!=="").join(" · ")}function D(){return ue("missionHistory")}function Me(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),r=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${r}.fixture.json`}function Fe(e,t){const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),o=URL.createObjectURL(r),s=document.createElement("a");s.href=o,s.download=t,document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(o)}function Io({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:r=!1}={}){const o=e==="main",[s,i]=u.useState([]),[c,f]=u.useState(null),[p,m]=u.useState(!1),[x,S]=u.useState(!1),[z,A]=u.useState(null),[v,M]=u.useState(()=>new Set),[T,R]=u.useState(()=>Be()),F=u.useCallback(async()=>{const a=D();if(!a)return;let h;try{h=await a.listFlights()}catch(b){console.warn("FlightsManager: failed to load flights",b);return}i(h.sort((b,E)=>E.launchedAt-b.launchedAt)),M(b=>{const E=new Set;for(const I of h)b.has(I.id)&&E.add(I.id);return E.size===b.size?b:E})},[]);u.useEffect(()=>{F()},[F]),u.useEffect(()=>{const a=D();if(typeof a?.onFlightListChange=="function")return a.onFlightListChange(()=>{F()})},[F]);const L=async a=>{const h=D();h&&(await h.deleteFlight(a),f(null),await F())},y=async a=>{const h=D();if(!h)return;const b=await h.exportFlight(a.id);Fe(b,Me(a))},C=async a=>{const h=D();if(!h)return;const b=await h.exportFlight(a.id),E={id:a.id,vesselName:a.vesselName,launchedAt:a.launchedAt,firstFrameUt:a.firstFrameUt??0,lastFrameUt:a.lastFrameUt??0,frameCount:a.sampleCount};Ie().start(E,b)},N=async()=>{const a=D();a&&(await a.clearAllFlights(),m(!1),await F())},w=a=>{M(h=>{const b=new Set(h);return b.has(a)?b.delete(a):b.add(a),b})},O=()=>{M(a=>a.size===s.length?new Set:new Set(s.map(h=>h.id)))},H=async()=>{const a=D();if(!a)return;const h=Array.from(v);for(const b of h)await a.deleteFlight(b);S(!1),await F()},g=async a=>{const h=D();h&&(await h.setFlightStarred(a.id,!a.starred),await F())},d=async a=>{const h=D(),b=a?X:0;at(b),R(b),a&&h&&(await h.pruneFlightsKeepLatest({keepCount:b}),await F())},j=async()=>{const a=D();if(!a)return;const h=Array.from(v),b=new Map(s.map(E=>[E.id,E]));for(const E of h){const I=b.get(E);if(!I)continue;const Ze=await a.exportFlight(E);Fe(Ze,Me(I))}},k=s.length>0&&v.size===s.length,U=v.size>0&&v.size<s.length,P=(()=>{const a=[...s].sort((E,I)=>I.launchedAt-E.launchedAt);let h=0,b=0;for(const E of a)E.starred||(h+=1,h>X&&(b+=1));return b})();return n.jsxs(wr,{children:[o&&n.jsx(Sr,{missionHistoryEnabled:t,recordAllTopics:r}),s.length===0?n.jsx(mt,{children:"No flight history recorded yet"}):n.jsxs(n.Fragment,{children:[n.jsxs(zr,{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx(Lr,{children:n.jsx(ce,{ref:a=>{a&&(a.indeterminate=U)},checked:k,onChange:O,"aria-label":k?"Clear selection":"Select all flights"})}),n.jsxs($r,{children:[n.jsx(ge,{size:12,fill:"currentColor","aria-hidden":"true"}),n.jsx(ze,{children:"Kept (exempt from auto-delete)"})]}),n.jsx(G,{children:"Vessel"}),n.jsx(G,{children:"Launched"}),n.jsx(G,{title:"Game time, not time at the desk",children:"Duration"}),n.jsx(G,{children:"Samples"}),n.jsx(G,{children:"Ended"}),n.jsx(G,{children:n.jsx(ze,{children:"Actions"})})]})}),n.jsx("tbody",{children:s.map(a=>{const h=z===a.id,b=v.has(a.id);return n.jsxs(u.Fragment,{children:[n.jsxs(Ae,{$current:!1,children:[n.jsx(B,{children:n.jsx(ce,{checked:b,onChange:()=>w(a.id),"aria-label":`Select flight ${a.vesselName||a.id}`})}),n.jsx(B,{children:n.jsx(Ur,{type:"button",$on:!!a.starred,onClick:()=>void g(a),"aria-label":a.starred?`Unstar ${a.vesselName||"flight"}`:`Star ${a.vesselName||"flight"} (keep from auto-delete)`,"aria-pressed":!!a.starred,title:a.starred?"Kept from auto-delete":"Keep from auto-delete",children:n.jsx(ge,{size:"var(--icon-size-control)",fill:a.starred?"currentColor":"none"})})}),n.jsxs(B,{children:[a.vesselName||yt,a.launchName&&n.jsxs(Tr,{children:["launched as ",a.launchName]}),a.outcome?.kind==="recovered"&&n.jsx(Ne,{$tone:"go",title:yr(a.outcome),children:"recovered"}),a.outcome?.kind==="crashed"&&n.jsx(Ne,{$tone:"nogo",title:`Crashed at ${a.outcome.body} (${a.outcome.situation}) · ${a.outcome.partsLostCount} part(s) lost${a.outcome.kerbalsKilled.length>0?` · KIA: ${a.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),n.jsx(B,{children:mr(a.launchedAt)}),n.jsx(B,{children:vr(a.launchedAt,a.lastSampleAt)}),n.jsx(B,{children:a.sampleCount.toLocaleString()}),n.jsx(B,{children:xr(a.endReason)}),n.jsx(B,{children:n.jsxs(kr,{children:[n.jsx(jr,{type:"button",$open:h,onClick:()=>A(h?null:a.id),"aria-label":h?"Close graph":"Graph this flight","aria-expanded":h,children:h?"− graph":"＋ graph"}),o&&n.jsx(Cr,{type:"button",onClick:()=>void C(a),"aria-label":`Replay ${a.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),n.jsx(Te,{type:"button",onClick:()=>void y(a),"aria-label":`Download fixture for ${a.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),c===a.id?n.jsxs(le,{children:[n.jsx(te,{onClick:()=>void L(a.id),children:"Delete"}),n.jsx(re,{onClick:()=>f(null),children:"Cancel"})]}):n.jsx(Er,{onClick:()=>f(a.id),children:"×"})]})})]}),h&&n.jsx(Ae,{$current:!1,children:n.jsxs(B,{colSpan:8,style:{padding:0},children:[n.jsx(Ft,{flight:a,onChange:()=>void F()}),n.jsx(ir,{missionId:a.id,fromUt:a.firstValidUt??a.firstFrameUt??0,toUt:a.lastValidUt??a.lastFrameUt??0})]})})]},a.id)})})]}),n.jsxs(Ar,{children:[n.jsx(Nr,{children:v.size>0&&(x?n.jsxs(le,{children:[n.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",v.size," selected flight",v.size===1?"":"s","?"]}),n.jsx(te,{onClick:()=>void H(),children:"Delete"}),n.jsx(re,{onClick:()=>S(!1),children:"Cancel"})]}):n.jsxs(n.Fragment,{children:[n.jsxs(Rr,{children:[v.size," selected"]}),n.jsx(Te,{type:"button",onClick:()=>void j(),title:"Download fixtures for the selected flights",children:"↓ download"}),n.jsx(te,{onClick:()=>S(!0),children:"Delete"}),n.jsx(re,{onClick:()=>M(new Set),children:"Clear"})]}))}),n.jsxs(Dr,{children:[n.jsxs(Br,{title:`Keep the ${X} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[n.jsx(ce,{checked:T>0,onChange:a=>void d(a.target.checked)}),n.jsxs("span",{children:["Keep latest ",X,T===0&&P>0&&n.jsxs(Or,{children:[" ","(",P," would be deleted)"]})]})]}),p?n.jsxs(le,{children:[n.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),n.jsx(te,{onClick:()=>void N(),children:"Clear all"}),n.jsx(re,{onClick:()=>m(!1),children:"Cancel"})]}):n.jsx(Pr,{onClick:()=>m(!0),children:"Clear all"})]})]})]})]})}function Sr({missionHistoryEnabled:e,recordAllTopics:t}){const r=u.useSyncExternalStore(Mt,ve,ve);return n.jsxs(Mr,{children:[r.saveFailure&&n.jsxs(xt,{tone:"nogo",title:"Flight not saved",children:[r.saveFailure.vesselName,": ",r.saveFailure.cause]}),e?r.recording?n.jsxs(Fr,{children:["● recording ",r.vesselName??"flight"," (",r.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):n.jsx(Ee,{children:"Auto-record armed: capture starts the moment a flight begins."}):n.jsx(Ee,{children:"Mission history is off, enable it in Settings to auto-record."})]})}const ze=l.span`
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
`,wr=l.div`
  display: flex;
  flex-direction: column;
  min-width: min(500px, 100%);
  /* Graph panels expand in-place, so let the whole thing scroll rather than
     clipping the chart. Horizontal scroll catches narrow viewports where the
     row-action button cluster won't fit even in the wide flight modal. */
  max-height: 80vh;
  max-height: 80dvh;
  overflow: auto;
`,kr=l.div`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
`,jr=l.button`
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
`,Te=l.button`
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
`,Cr=l.button`
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
`,Mr=l.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-section);
  padding-bottom: var(--inset-toolbar-bottom);
  margin-bottom: var(--gap-toolbar);
  border-bottom: 1px solid var(--color-border-subtle);
`,Ee=l.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Fr=l.span`
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
`,zr=l.table`
  border-collapse: collapse;
  width: 100%;
  overflow-y: auto;
  font-size: var(--font-size-compact);
`,G=l.th`
  text-align: left;
  padding: var(--inset-surface);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
`,Ae=l.tr`
  background: ${({$current:e})=>e?"var(--color-go-status)":"transparent"};
  &:hover { background: var(--color-surface-raised); }
`,B=l.td`
  /* 7px is computed, not chosen: it is the 6px vertical half of the surface
     inset Th carries, plus the 1px that makes a body row taller than the
     header row. It tracks Th, not the spacing grid. */
  padding: 7px var(--gutter-table-cell);
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-surface-raised);
  white-space: nowrap;
`,Tr=l.span`
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,Ne=l.span`
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
`,Er=l.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-lg);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,le=l.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
`,te=l.button`
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  color: var(--color-tag-red-fg);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { background: var(--color-nogo-muted); }
`,re=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,Ar=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-section);
  padding: var(--inset-table-footer);
  border-top: 1px solid var(--color-border-subtle);
`,Nr=l.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-height: 24px;
`,Rr=l.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Lr=l.th`
  width: 28px;
  padding: var(--inset-surface);
  border-bottom: 1px solid var(--color-border-subtle);
`,ce=l.input.attrs({type:"checkbox"})`
  cursor: pointer;
  margin: 0;
`,$r=l.th`
  width: 24px;
  /* The one cell that cannot take --inset-surface beside Th and ThCheckbox: a
     24px column carrying a star glyph needs more vertical than horizontal. At
     (6,8) the content box is 8px and the glyph clips. */
  padding: var(--inset-table-narrow-header);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
  text-align: center;
`,Ur=l.button`
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
`,Dr=l.div`
  display: flex;
  align-items: center;
  gap: var(--gap-section);
`,Br=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  cursor: pointer;
  user-select: none;
`,Or=l.span`
  color: var(--color-nogo-muted);
`,Pr=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-dim);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,Ir=new st({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class Ko{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new it;historyCache=new Map;changesInOrder=new Map;async connect(){await this.pruneToKeepCount()}disconnect(){}schema(){return Ve()}subscribe(t,r){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,r,o,s){if(!s)return{t:[],v:[]};const i=ht(t);if(!i)return{t:[],v:[]};const c=await this.getFullHistoryStore(s);if(!c)return{t:[],v:[]};const f=c.isDerivedTopic(i)?c.sampleDerivedRange(i,r,o):c.sampleRange(i,r,o);return f?{t:f.map(p=>p.validAt),v:f.map(p=>p.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(W)}async getFlight(t){const r=await this.missionStore.getMissionMeta(t);return r?W(r):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.meta.id)}async saveMissionPart(t,r,o){await this.inOrder(t.id,()=>this.missionStore.saveMissionPart(t,r,o)),this.historyCache.delete(t.id),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.id)}async pruneToKeepCount(t){const r=Be();if(!(r<=0))try{await this.pruneFlightsKeepLatest({keepCount:r,keepId:t})}catch(o){fe.warn("[MissionHistorySource] keep latest could not prune",{err:String(o)})}}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,r){const o=await this.missionStore.getMissionMeta(t);!o||!!o.starred===r||(await this.missionStore.updateMissionMeta(t,{starred:r}),this.flightListSubscribers.fire())}async setFlightEndReason(t,r){await this.inOrder(t,async()=>{const o=await this.missionStore.getMissionMeta(t);if(!o){fe.warn("[MissionHistorySource] end reason for a mission not stored",{id:t});return}o.endReason===void 0&&(await this.missionStore.updateMissionMeta(t,{endReason:r}),this.flightListSubscribers.fire())})}inOrder(t,r){const o=this.changesInOrder.get(t),s=o?o.then(r,r):r(),i=s.catch(()=>{});return this.changesInOrder.set(t,i),i.then(()=>{this.changesInOrder.get(t)===i&&this.changesInOrder.delete(t)}),s}async addChapter(t,r){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const i={id:r.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:r.label,startMs:r.startMs,endMs:r.endMs},c=[...o.chapters??[],i];return await this.missionStore.updateMissionMeta(t,{chapters:c}),this.flightListSubscribers.fire(),W({...o,chapters:c})}async updateChapter(t,r,o){const s=await this.missionStore.getMissionMeta(t);if(!s)return null;const i=(s.chapters??[]).map(c=>c.id===r?{...c,...o}:c);return await this.missionStore.updateMissionMeta(t,{chapters:i}),this.flightListSubscribers.fire(),W({...s,chapters:i})}async removeChapter(t,r){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const s=(o.chapters??[]).filter(i=>i.id!==r);return await this.missionStore.updateMissionMeta(t,{chapters:s}),this.flightListSubscribers.fire(),W({...o,chapters:s})}async pruneFlightsKeepLatest(t){const r=await this.missionStore.pruneMissionsKeepLatest(t);for(const o of r)this.historyCache.delete(o);return r.length>0&&this.flightListSubscribers.fire(),r}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const r=this.historyCache.get(t);if(r)return r;const o=(async()=>{const s=await this.missionStore.getMissionFixture(t);if(!s)throw new Error(`mission fixture not found: ${t}`);return Ir.record(),kt(s.fixture)})();this.historyCache.set(t,o);try{return await o}catch{this.historyCache.delete(t);return}}}function W(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchName:e.launchName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,endReason:e.endReason,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt,firstValidUt:e.firstValidUt,lastValidUt:e.lastValidUt}}function qe(e){const t=e.parts.map(Kr),r=e.parts.find(o=>o.parentId==null);return{topologySeq:e.parts.length,rootFlightId:r?Number(r.id):0,parts:t}}function Re(e){return e?[e.x.magnitude,e.y.magnitude,e.z.magnitude]:void 0}function Kr(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage??null,crewCapacity:0,maxTemp:e.maxTemp?.magnitude??null,crashTolerance:0,dryMass:e.dryMass?.magnitude??null,orgPos:[$(e.position.x),$(e.position.y),$(e.position.z)],up:Re(e.up),forward:Re(e.forward),bounds:{size:{x:$(e.bounds.size.x),y:$(e.bounds.size.y),z:$(e.bounds.size.z)},center:e.bounds.center?{x:$(e.bounds.center.x),y:$(e.bounds.center.y),z:$(e.bounds.center.z)}:void 0,hull:Yr(e.bounds.hull)},modules:e.modules}}function Hr(e){return e.currentTemp==null?null:{temperature:me(e.currentTemp.magnitude),maxTemperature:e.maxTemp==null?null:me(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp?.magnitude??null}}function _r(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Hr(r));return t}function Vr(e){const t={};for(const[r,o]of Object.entries(e.resources))t[r]={amount:o.amount?.magnitude??null,maxAmount:o.maxAmount?.magnitude??null,...o.flow!=null?{flow:o.flow.magnitude}:{},...o.nominalFlow!=null?{nominalFlow:o.nominalFlow.magnitude}:{},...o.unratedProcess===!0?{unratedProcess:!0}:{}};return t}function We(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Vr(r));return t}function Gr(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function qr(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map(Gr)}}function Wr(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),qr(r));return t}function $(e){return e.magnitude}function Yr(e){if(!e||e.length<9||e.length%3!==0)return;const t=[];for(let r=0;r<e.length;r+=3)t.push({x:$(e[r]),y:$(e[r+1]),z:$(e[r+2])});return t}function Ye(e){return Array.from(new TextEncoder().encode(e),t=>/[A-Za-z0-9_-]/.test(String.fromCharCode(t))?String.fromCharCode(t):`%${t.toString(16).toUpperCase().padStart(2,"0")}`).join("")}function Ho(e,t){return`spaceCenter.craft.${e}.${Ye(t)}.parts`}function _o(e,t){const r=Ye(t),o=Oe(`spaceCenter.craft.${e}.${r}.parts`),s=o.state==="observed"||o.state==="held"?o.value:void 0;return u.useMemo(()=>{if(!s)return;const i=lt("CraftFileParts",structuredClone(s));return{topology:qe(i),resourcesByFlightId:We(i)}},[s])}const Jr=[];function Zr(e){const t=[ne(e.dvRadial,0),ne(e.dvNormal,0),ne(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function Vo(){const e=Oe("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return u.useMemo(()=>!Array.isArray(t)||t.length===0?Jr:t.map(Zr),[t])}function Go(e){const t=Pe("vessel.parts"),r=t.state==="observed"||t.state==="held"?t.value:void 0,o=u.useMemo(()=>_r(r),[r]),s=u.useMemo(()=>We(r),[r]),i=u.useMemo(()=>Wr(r),[r]),c=[...e].sort((f,p)=>f-p).join(",");return u.useMemo(()=>{const f=c.length===0?[]:c.split(",").map(Number),p=new Map;for(const m of f)p.set(m,{thermal:o.get(m)??null,resources:s.get(m)??{},partState:i.get(m)});return p},[c,o,s,i])}const Le=Object.freeze({status:"none"}),Qr={t:[],readings:[]};function Je(e){return e==="recorded"||e==="last-before-blackout"?e:void 0}function Xr(e){return e!==null&&typeof e=="object"&&"magnitude"in e}function eo(e,t){if(Xr(e))return{value:e,...t};if(typeof e=="number")return{value:J(t.lo.unit,e),...t}}function to(e){const t=Ht(e);if(t===void 0)return Qr;const r=new Map;for(const i of e.spans??[]){const c=Je(i.status);if(c!==void 0)for(let f=i.from;f<=i.to;f++)r.set(f,c)}let o;const s=e.t.map((i,c)=>{const f=J("ut",i),p=t.payloads[c],m=t.modelled.get(c);if(m!==void 0){const S={status:"available",modelled:p,atUt:f,beyondReceived:!0,basis:m.basis,band:m.band?eo(p,m.band):void 0};return o===void 0?{state:"pending",reckoning:S}:{state:"held",value:o.payload,asOfUt:o.at,grade:"held",reckoning:S}}o={payload:p,at:f};const x=r.get(c);return x!==void 0?{state:"held",value:p,asOfUt:f,grade:x,reckoning:Le}:{state:"observed",value:p,atUt:f,reckoning:Le}});return{t:e.t,readings:s,basis:e.basis,breaks:e.breaks,bridges:e.bridges,windowEndAt:e.windowEndAt,interpolation:e.interpolation}}function qo(e,t){const r=Zt(Ct(e),t);return u.useMemo(()=>to(r),[r])}function ro(e,t,r,o){if(o===void 0)return null;if(t!==null&&t.status===o)return t.to=r,t;const s={from:r,to:r,status:o};return e.push(s),s}function oo(e,t,r,o,s){if(o===void 0)return null;if(t!==null&&t.basis===o&&t.bandKind===s?.kind)return t.to=r,s!==void 0&&(t.bandLo?.push(s.lo),t.bandHi?.push(s.hi)),t;const i=s!==void 0?{from:r,to:r,basis:o,bandLo:[s.lo],bandHi:[s.hi],bandKind:s.kind}:{from:r,to:r,basis:o};return e.push(i),i}function no(e){const t=Q(e);return typeof t=="number"?t:Number.NaN}function so(e){const[t,r]=_e(e?.lo,e?.hi);if(!(e===void 0||t===void 0||r===void 0))return{lo:t,hi:r,kind:e.kind}}function Wo(e){const t=[],r=[],o={t:[],v:[],basis:e.basis,breaks:[],spans:t,reckoned:r,bridges:[],windowEndAt:e.windowEndAt,interpolation:e.interpolation},s=new Set(e.breaks??[]),i=new Map((e.bridges??[]).map(x=>[x.to,x])),c=new Map;let f=null,p=null,m=!1;for(let x=0;x<e.t.length;x++){s.has(x)&&(m=!0);const S=e.readings[x],z=S.reckoning.status==="available"?S.reckoning:void 0,A=no(z?z.modelled:S.value);if(Number.isNaN(A))continue;const v=o.t.length,M=m&&v>0;M&&o.breaks.push(v),m=!1,c.set(x,v);const T=i.get(x);T!==void 0&&!M&&c.get(x-1)===v-1&&T.v.every(Number.isFinite)&&o.bridges.push({...T,to:v}),o.t.push(e.t[x]),o.v.push(A);const R=z===void 0&&S.state==="held"?Je(S.grade):void 0;f=ro(t,f,v,R),p=oo(r,p,v,z?.basis,so(z?.band))}return o}function Yo(){const e=Pe("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return u.useMemo(()=>t?qe(t):void 0,[t])}function Jo(){const e=Ie(),t=u.useSyncExternalStore(c=>e.subscribe(c),()=>e.getSnapshot());if(gt(),!t.active||!t.meta)return null;const r=t.meta,o=e.cursorUt(),s=Math.max(0,r.lastFrameUt-r.firstFrameUt),i=Math.max(0,o-r.firstFrameUt);return n.jsxs(ao,{role:"region","aria-label":"Replay controls",children:[n.jsxs(Ue,{children:[n.jsx(co,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),n.jsxs(io,{children:["REPLAY: ",n.jsx(lo,{children:r.vesselName||"Unnamed vessel"})]})]}),n.jsxs(uo,{children:[n.jsx(De,{children:$e(i)}),n.jsx(po,{type:"range",min:r.firstFrameUt,max:r.lastFrameUt,step:.1,value:o,onChange:c=>e.seekTo(Number(c.target.value)),"aria-label":"Seek to position"}),n.jsx(De,{children:$e(s)})]}),n.jsxs(Ue,{children:[n.jsxs(ho,{value:String(t.rate),onChange:c=>e.setRate(Number(c.target.value)),"aria-label":"Playback rate",children:[n.jsx("option",{value:"0.5",children:"0.5×"}),n.jsx("option",{value:"1",children:"1×"}),n.jsx("option",{value:"2",children:"2×"}),n.jsx("option",{value:"5",children:"5×"}),n.jsx("option",{value:"10",children:"10×"}),n.jsx("option",{value:"50",children:"50×"})]}),n.jsx(go,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function $e(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),r=Math.floor(t/3600),o=Math.floor(t%3600/60),s=t%60;return r>0?`${r}:${String(o).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(s).padStart(2,"0")}`}const ao=l.div`
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
`,Ue=l(vt).attrs({justify:"start"})`
  flex-shrink: 0;
`,io=l.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
`,lo=l.span`
  color: var(--color-tag-purple-fg);
  font-weight: 700;
  margin-left: var(--gap-trailing-figure);
`,co=l.button`
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
`,uo=l.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,po=l.input`
  flex: 1;
  min-width: 0;
  accent-color: var(--color-tag-purple-fg);
`,De=l.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  white-space: nowrap;
`,ho=l.select`
  background: var(--color-surface-app);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,go=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`;export{Po as A,qo as B,Ge as C,Yo as D,Do as E,Io as F,Ko as M,Jo as R,_e as a,We as b,Wr as c,qe as d,Ye as e,Ho as f,ve as g,Oo as h,oe as i,Ve as j,Bo as k,Xt as l,or as m,sr as n,Q as o,Wo as p,no as q,Uo as r,$o as s,Lo as t,Vo as u,Mt as v,_o as w,Zt as x,ar as y,Go as z};
