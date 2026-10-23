import{j as n}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{b8 as ue,bY as he,cv as Y,R as Qe,cr as Xe,cz as et,cy as tt,dc as rt,dh as ot,ag as nt,bw as q,aZ as J,a_ as at,b5 as ne}from"./view-clock-formula-DM41SMnh.js";import{r as u}from"./ext-react-C0MU9AHG.js";import{o as Be,D as X,s as st,L as it}from"./ksp-enum-names-zlyYD5pS.js";import{A as lt}from"./screen-x1CIY_Zy.js";import{ba as ct,bc as dt,aW as ut,i as pt,aH as ht,b7 as Oe,bg as gt}from"./lagrange-C1eWKwW0.js";import{w as Ie}from"./use-transmissions-ClOl1EQX.js";import{g as Pe}from"./replay-session-controller-j1byQMmj.js";import"./websocket-transport-CRpBTZ15.js";import{y as _,ax as ft,E as mt,w as ge,af as vt}from"./ModalSaveBar-CSziMN4S.js";import{G as bt,N as xt}from"./Notice-BATWHLYF.js";import{N as yt,w as de}from"./contributionsRead-BSK93eEz.js";import"./processorPerfBudget-CniBg1Hi.js";import{l as fe}from"./index-BrbVhvxX.js";import{h as St,D as wt}from"./VersionMismatchBanner-B4BauudA.js";import l from"./ext-styled-components-DAuodqsN.js";import{b as kt}from"./full-history-replay-BYO_20if.js";import{e as jt,s as Ct}from"./topic-fields-cIbbPOk3.js";import{k as me}from"./orbital-DNjfcAyR.js";const Ke={recording:!1,vesselName:null,frameCount:0,saveFailure:null};let K=Ke;const Z=new Set;function ve(){return K}function $o(e){K={...e,saveFailure:K.saveFailure};for(const t of Z)t()}function Uo(e){if(K.saveFailure!==e){K={...K,saveFailure:e};for(const t of Z)t()}}function Ft(e){return Z.add(e),()=>{Z.delete(e)}}function Do(){K=Ke,Z.clear()}function ae(){return ue("missionHistory")}function V(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),r=Math.floor(t/3600),o=Math.floor(t%3600/60),a=t%60;return r>0?`${r}:${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function ee(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const c=Number(t);return Number.isFinite(c)&&c>=0?c*1e3:null}const r=t.split(":").map(c=>c.trim());if(r.some(c=>c===""||!/^\d+(\.\d+)?$/.test(c)))return null;const o=r.map(Number),i=o.length===2?o[0]*60+o[1]:o.length===3?o[0]*3600+o[1]*60+o[2]:null;return i===null?null:i*1e3}function Mt({flight:e,onChange:t}){const r=e.chapters??[],o=Math.max(0,e.lastSampleAt-e.launchedAt),[a,i]=u.useState(""),[c,f]=u.useState(""),[p,m]=u.useState(""),[x,S]=u.useState(null),[z,A]=u.useState(null),[v,F]=u.useState(""),[T,R]=u.useState(""),[M,L]=u.useState(""),[y,C]=u.useState(null);function N(d){A(d.id),F(d.label),R(V(d.startMs)),L(V(d.endMs)),C(null)}function w(){A(null),C(null)}async function O(){const d=ae();if(!d)return;const j=ee(c),k=ee(p);if(a.trim()===""){S("Label required");return}if(j===null||k===null){S("Start and end must be mm:ss");return}if(k<=j){S("End must be after start");return}S(null),await d.addChapter(e.id,{label:a.trim(),startMs:j,endMs:k}),i(""),f(""),m(""),t()}async function H(d){const j=ae();if(!j)return;const k=ee(T),U=ee(M);if(v.trim()===""){C("Label required");return}if(k===null||U===null){C("Start and end must be mm:ss");return}if(U<=k){C("End must be after start");return}C(null),await j.updateChapter(e.id,d,{label:v.trim(),startMs:k,endMs:U}),A(null),t()}async function g(d){const j=ae();j&&(await j.removeChapter(e.id,d),z===d&&w(),t())}return n.jsxs(zt,{children:[n.jsx(Tt,{children:"Chapters"}),r.length===0?n.jsx(Et,{children:"No chapters yet. Add markers to slice the flight."}):n.jsx(At,{children:r.slice().sort((d,j)=>d.startMs-j.startMs).map(d=>{const j=z===d.id;return n.jsx(Nt,{children:j?n.jsxs(n.Fragment,{children:[n.jsx(_,{type:"text",value:v,onChange:k=>F(k.target.value),"aria-label":"Chapter label"}),n.jsx(_,{type:"text",value:T,onChange:k=>R(k.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),n.jsx(_,{type:"text",value:M,onChange:k=>L(k.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),n.jsxs(be,{children:[n.jsx(Dt,{type:"button",onClick:()=>void H(d.id),children:"Save"}),n.jsx(Bt,{type:"button",onClick:w,children:"Cancel"})]})]}):n.jsxs(n.Fragment,{children:[n.jsx(Rt,{title:d.label,children:d.label}),n.jsxs(Lt,{children:[V(d.startMs)," – ",V(d.endMs)]}),n.jsxs($t,{children:["(",V(d.endMs-d.startMs),")"]}),n.jsxs(be,{children:[n.jsx(Ut,{type:"button",onClick:()=>N(d),children:"edit"}),n.jsx(Ot,{type:"button",onClick:()=>void g(d.id),"aria-label":`Remove chapter ${d.label}`,children:"×"})]})]})},d.id)})}),y&&n.jsx(xe,{children:y}),n.jsxs(It,{children:[n.jsx(_,{type:"text",placeholder:"Chapter name",value:a,onChange:d=>i(d.target.value),"aria-label":"New chapter label"}),n.jsx(_,{type:"text",placeholder:"0:00",value:c,onChange:d=>f(d.target.value),"aria-label":"New chapter start (mm:ss)"}),n.jsx(_,{type:"text",placeholder:V(o),value:p,onChange:d=>m(d.target.value),"aria-label":"New chapter end (mm:ss)"}),n.jsx(Pt,{type:"button",onClick:()=>void O(),children:"+ add"})]}),x&&n.jsx(xe,{children:x})]})}const zt=l.div`
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
`,It=l.div`
  display: grid;
  grid-template-columns: minmax(120px, 1fr) 80px 80px auto;
  gap: var(--gap-related);
  align-items: center;
  margin-top: var(--gap-actions);
`,Pt=l.button`
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
`,He=new WeakMap;function Kt(e,t){He.set(e,t)}function Ht(e){return He.get(e)}const se={t:[],v:[]};function _t(e){switch(e){case he.LastBeforeBlackout:return"last-before-blackout";case he.Recorded:return"recorded";default:return null}}function Vt(e){const t=[];let r=null;for(let o=0;o<e.length;o++){const a=_t(e[o].meta.staleness);if(a===null){r=null;continue}if(r!==null&&r.status===a){r.to=o;continue}r={from:o,to:o,status:a},t.push(r)}return t}const ye=new WeakMap;function Gt(e){const t=ye.get(e);if(t)return t;const r={t:e.t,v:e.v.map(o=>{const a=Q(o);return typeof a=="number"?a:Number.NaN}),basis:e.basis};return ye.set(e,r),r}function qt(e,t){return e.length===t.length&&e.every((r,o)=>r.to===t[o].to&&r.v===t[o].v)}function Wt(e,t){return e.length===t.length&&e.every((r,o)=>r.from===t[o].from&&r.to===t[o].to&&r.status===t[o].status)}function Se(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((r,o)=>Object.is(r,t[o]))}function Yt(e,t){return e.length===t.length&&e.every((r,o)=>r.from===t[o].from&&r.to===t[o].to&&r.basis===t[o].basis&&r.bandKind===t[o].bandKind&&Se(r.bandLo,t[o].bandLo)&&Se(r.bandHi,t[o].bandHi))}function _e(e,t){return[e?.toWire(),t?.toWire()]}function Jt(e,t,r,o,a){const i=new Map((t.sampleRange(r,o,a)??[]).map(p=>[p.validAt,JSON.stringify(p.payload)])),c=[];let f;for(const p of e){const m=i.get(p.validAt)??JSON.stringify(p.payload);m!==f&&(f=m,c.push(p))}return c}function Q(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function Zt(e,t){const r=u.useRef(se),o=ct(),a=dt(),i=e,c=u.useCallback(p=>{if(!o||!a)return()=>{};const m=ut(o,a,i),x=a.subscribeFrame(p);return()=>{x(),m()}},[o,a,i]),f=u.useCallback(()=>{if(!a)return se;const p=a.currentFrame().viewUt,m=p-t,x=a.isDerivedTopic(i)?a.sampleDerivedRange(i,m,p):a.sampleRange(i,m,p),S=a.sampleReckonedTail(i,m,p),z=a.tagsOf(i),A=z.kind==="event"?"none":z.kind==="discrete"?"step":"linear",v=z.kind==="event"?Jt(x??[],a,z.topic,m,p):x??[];if(v.length===0&&S.length===0)return se;const F=v.map(g=>g.validAt),T=v.map(g=>Q(g.payload)),R=v.map(g=>g.payload),M=new Map,L=[],y=[];for(let g=0;g<v.length;g++){if(g===0)continue;if(A==="none")break;if(v[g].meta.gapSinceUt!=null){L.push(g);continue}if(Object.is(T[g],T[g-1]))continue;const d=a.gapModel(i,v[g-1],v[g]);if(d?.carried===!1){L.push(g);continue}d?.carried&&y.push({to:g,...Gt(d)})}const C=Vt(v),N=[];for(const g of S){const d=F.length;F.push(g.atUt),T.push(Q(g.value)),R.push(g.value);const{bandLo:j,bandHi:k}=g,[U,I]=_e(j,k),s=U!==void 0&&I!==void 0?g.bandKind:void 0;M.set(d,{basis:g.basis,band:j!==void 0&&k!==void 0&&s!==void 0?{lo:j,hi:k,kind:s}:void 0});const h=N[N.length-1],b=h!==void 0&&h.basis===g.basis&&h.to===d-1&&h.bandKind===s;if(h!==void 0&&b){h.to=d,U!==void 0&&I!==void 0&&s!==void 0&&(h.bandLo?.push(U),h.bandHi?.push(I));continue}if(U!==void 0&&I!==void 0&&s!==void 0){N.push({from:d,to:d,basis:g.basis,bandLo:[U],bandHi:[I],bandKind:s});continue}N.push({from:d,to:d,basis:g.basis})}const w=r.current,O=w.breaks??[];return w.t.length===F.length&&w.t.every((g,d)=>g===F[d])&&w.v.every((g,d)=>Object.is(g,T[d]))&&O.length===L.length&&O.every((g,d)=>g===L[d])&&qt(w.bridges??[],y)&&Wt(w.spans??[],C)&&Yt(w.reckoned??[],N)&&w.windowEndAt===(N.length>0?p:void 0)&&(w.interpolation??"linear")===A?w:(r.current={t:F,v:T,basis:"ut-seconds",breaks:L,bridges:y,spans:C,reckoned:N,interpolation:A,windowEndAt:N.length>0?p:void 0},Kt(r.current,{payloads:R,modelled:M}),r.current)},[a,i,t]);return u.useSyncExternalStore(c,f)}const Qt=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function Xt(e){const t=e.split(".").flatMap(i=>i.split(/(?=[A-Z])/)).map(i=>i.toLowerCase()).filter(i=>i.length>0).map(i=>Qt[i]??i);if(t.length===0)return e;const[r,...o]=t;return[r===r.toUpperCase()?r:r[0].toUpperCase()+r.slice(1),...o].join(" ")}function er(e,t,r){return r.has(e)?!0:rt(`${e}.${t}`)?.rawTopic===e}function tr(e,t){return{key:`${e}.${t.path}`,label:Xt(t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function rr(e,t){const r=new Set(t),o=[...new Set([...Xe(),...e,...t])].filter(f=>!et(f)).sort(),a=[],i=[],c=[];for(const f of o){if(tt(f)){c.push(f);continue}const p=jt(f).filter(m=>er(f,m.path,r));if(p.length===0){i.push(f);continue}for(const m of p)a.push(tr(f,m))}return{keys:a,undescribed:i,collections:c}}function oe(){return[...pt.map(e=>e.topic),...Qe().map(e=>e.topic)]}let ie;function pe(e,t){const r=`${e.join(",")}|${t.join(",")}`;if(ie?.key===r)return ie.built;const o=rr(e,t);return ie={key:r,built:o},o}function Ve(e=Y(),t=oe()){return pe(e,t).keys}function or(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!nr.has(e.unit)}const nr=new Set(["bool","enum","flag","id","raw","text"]);function ar(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function Bo(e,t){const r=e?.enumEncoding;return r?.by!=="ordinal"||typeof t!="number"?t:r.names[t]??t}function Oo(e=Y(),t=oe()){return pe(e,t).undescribed}function Io(e=Y(),t=oe()){return pe(e,t).collections}function we(){return oe().join(",")}function Ge(){const e=u.useSyncExternalStore(ot,Y,Y),t=u.useSyncExternalStore(nt,we,we);return u.useMemo(()=>Ve(e,t.split(",")),[e,t])}function sr(){const e=Ge();return u.useMemo(()=>e.filter(or),[e])}function Po(){const e=Ge();return u.useMemo(()=>e.filter(ar),[e])}const ke=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function je(){return ue("missionHistory")}function ir({missionId:e,fromUt:t,toUt:r}){const o=sr(),[a,i]=u.useState(new Set),[c,f]=u.useState([]),[p,m]=u.useState(!1),[x,S]=u.useState(null);u.useEffect(()=>()=>{je()?.evictFullHistoryStore(e)},[e]);const z=u.useMemo(()=>o.map(y=>({key:y.key,label:y.label??y.key,unit:y.unit,group:cr(y.key)})),[o]);u.useEffect(()=>{const y=je();if(!y||a.size===0){f([]),S(null);return}let C=!1;m(!0),S(null);const N=[...a];return Promise.all(N.map(w=>y.queryRange(w,t,r,e))).then(w=>{if(C)return;const O=new Map(o.map(g=>[g.key,g])),H=N.map((g,d)=>{const j=lr(w[d],t),k=O.get(g);return{id:g,label:k?.label??g,axis:"primary",color:ke[d%ke.length],type:"line",data:j}});f(H)}).catch(w=>{C||S(w instanceof Error?w.message:String(w))}).finally(()=>{C||m(!1)}),()=>{C=!0}},[a,e,t,r,o]);const A=Math.max(0,(r-t)*1e3),v=A>0?[0,A]:[0,6e4],F=c.some(y=>y.data.x.length>0),T=[...a].map(y=>o.find(C=>C.key===y)),R=[...new Set(T.map((y,C)=>y?.label??[...a][C]))],M=[...new Set(T.map(y=>y?.unit))],L=St(R.length>0&&R.length<=2?R.join(" / "):void 0,M.length===1?M[0]:void 0);return n.jsxs(dr,{children:[n.jsxs(ur,{children:[n.jsx(pr,{children:"Series"}),n.jsx(wt,{keys:z,value:a,onChange:i,placeholder:"Add a data key...",emptyHint:z.length===0?"No numeric keys in the current schema":"No matches"})]}),x&&n.jsxs(fr,{role:"alert",children:["Failed to load samples: ",x]}),a.size===0?n.jsx(Ce,{children:"Pick one or more numeric telemetry keys above to plot them."}):n.jsxs(hr,{children:[p&&n.jsx(gr,{children:"Loading..."}),!p&&!F&&n.jsx(Ce,{children:"No recorded samples for the selected keys."}),F&&n.jsx(bt,{chrome:"bare",series:c,xDomain:v,xAxisLabel:"Mission time",yAxisLabel:L,height:260})]})]})}function lr(e,t){const r=[],o=[];for(let a=0;a<e.t.length;a++){const i=Q(e.v[a]);typeof i!="number"||!Number.isFinite(i)||(r.push((e.t[a]-t)*1e3),o.push(i))}return{x:r,y:o}}function cr(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const dr=l.div`
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
`;function mr(e){return new Date(e).toLocaleString()}function vr(e,t){return de(J("s",(t-e)/1e3))}const br={[q.Recovered]:"Recovered",[q.Crashed]:"Crashed",[q.Reverted]:"Reverted",[q.Destroyed]:"Destroyed",[q.Terminated]:"Terminated"};function xr(e){return e===void 0?"Not known":br[e]??"Not known"}function yr(e){const t=[e.fundsEarned===null?null:`+${de(J("funds",e.fundsEarned),{decimals:0})}`,e.scienceEarned===null?null:`+${de(J("science",e.scienceEarned),{decimals:1})}`].filter(r=>r!==null);return[`Recovered ${e.recoveryLocation}`,e.recoveryFactor,t.length>0?t.join(" · "):"no funds or science awarded"].filter(r=>r!=="").join(" · ")}function D(){return ue("missionHistory")}function Fe(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),r=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${r}.fixture.json`}function Me(e,t){const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),o=URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.download=t,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(o)}function Ko({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:r=!1}={}){const o=e==="main",[a,i]=u.useState([]),[c,f]=u.useState(null),[p,m]=u.useState(!1),[x,S]=u.useState(!1),[z,A]=u.useState(null),[v,F]=u.useState(()=>new Set),[T,R]=u.useState(()=>Be()),M=u.useCallback(async()=>{const s=D();if(!s)return;let h;try{h=await s.listFlights()}catch(b){console.warn("FlightsManager: failed to load flights",b);return}i(h.sort((b,E)=>E.launchedAt-b.launchedAt)),F(b=>{const E=new Set;for(const P of h)b.has(P.id)&&E.add(P.id);return E.size===b.size?b:E})},[]);u.useEffect(()=>{M()},[M]),u.useEffect(()=>{const s=D();if(typeof s?.onFlightListChange=="function")return s.onFlightListChange(()=>{M()})},[M]);const L=async s=>{const h=D();h&&(await h.deleteFlight(s),f(null),await M())},y=async s=>{const h=D();if(!h)return;const b=await h.exportFlight(s.id);Me(b,Fe(s))},C=async s=>{const h=D();if(!h)return;const b=await h.exportFlight(s.id),E={id:s.id,vesselName:s.vesselName,launchedAt:s.launchedAt,firstFrameUt:s.firstFrameUt??0,lastFrameUt:s.lastFrameUt??0,frameCount:s.sampleCount};Pe().start(E,b)},N=async()=>{const s=D();s&&(await s.clearAllFlights(),m(!1),await M())},w=s=>{F(h=>{const b=new Set(h);return b.has(s)?b.delete(s):b.add(s),b})},O=()=>{F(s=>s.size===a.length?new Set:new Set(a.map(h=>h.id)))},H=async()=>{const s=D();if(!s)return;const h=Array.from(v);for(const b of h)await s.deleteFlight(b);S(!1),await M()},g=async s=>{const h=D();h&&(await h.setFlightStarred(s.id,!s.starred),await M())},d=async s=>{const h=D(),b=s?X:0;st(b),R(b),s&&h&&(await h.pruneFlightsKeepLatest({keepCount:b}),await M())},j=async()=>{const s=D();if(!s)return;const h=Array.from(v),b=new Map(a.map(E=>[E.id,E]));for(const E of h){const P=b.get(E);if(!P)continue;const Ze=await s.exportFlight(E);Me(Ze,Fe(P))}},k=a.length>0&&v.size===a.length,U=v.size>0&&v.size<a.length,I=(()=>{const s=[...a].sort((E,P)=>P.launchedAt-E.launchedAt);let h=0,b=0;for(const E of s)E.starred||(h+=1,h>X&&(b+=1));return b})();return n.jsxs(wr,{children:[o&&n.jsx(Sr,{missionHistoryEnabled:t,recordAllTopics:r}),a.length===0?n.jsx(mt,{children:"No flight history recorded yet"}):n.jsxs(n.Fragment,{children:[n.jsxs(zr,{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx($r,{children:n.jsx(ce,{ref:s=>{s&&(s.indeterminate=U)},checked:k,onChange:O,"aria-label":k?"Clear selection":"Select all flights"})}),n.jsxs(Ur,{children:[n.jsx(ge,{size:12,fill:"currentColor","aria-hidden":"true"}),n.jsx(ze,{children:"Kept (exempt from auto-delete)"})]}),n.jsx(G,{children:"Vessel"}),n.jsx(G,{children:"Launched"}),n.jsx(G,{title:"Game time, not time at the desk",children:"Duration"}),n.jsx(G,{children:"Samples"}),n.jsx(G,{children:"Ended"}),n.jsx(G,{children:n.jsx(ze,{children:"Actions"})})]})}),n.jsx("tbody",{children:a.map(s=>{const h=z===s.id,b=v.has(s.id);return n.jsxs(u.Fragment,{children:[n.jsxs(Ae,{$current:!1,children:[n.jsx(B,{children:n.jsx(ce,{checked:b,onChange:()=>w(s.id),"aria-label":`Select flight ${s.vesselName||s.id}`})}),n.jsx(B,{children:n.jsx(Dr,{type:"button",$on:!!s.starred,onClick:()=>void g(s),"aria-label":s.starred?`Unstar ${s.vesselName||"flight"}`:`Star ${s.vesselName||"flight"} (keep from auto-delete)`,"aria-pressed":!!s.starred,title:s.starred?"Kept from auto-delete":"Keep from auto-delete",children:n.jsx(ge,{size:"var(--icon-size-control)",fill:s.starred?"currentColor":"none"})})}),n.jsxs(B,{children:[s.vesselName||yt,s.launchName&&n.jsxs(Er,{children:["launched as ",s.launchName]}),s.evaKerbals&&s.evaKerbals.length>0&&n.jsxs(Tr,{children:["EVA: ",s.evaKerbals.join(", ")]}),s.outcome?.kind==="recovered"&&n.jsx(Ne,{$tone:"go",title:yr(s.outcome),children:"recovered"}),s.outcome?.kind==="crashed"&&n.jsx(Ne,{$tone:"nogo",title:`Crashed at ${s.outcome.body} (${s.outcome.situation}) · ${s.outcome.partsLostCount} part(s) lost${s.outcome.kerbalsKilled.length>0?` · KIA: ${s.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),n.jsx(B,{children:mr(s.launchedAt)}),n.jsx(B,{children:vr(s.launchedAt,s.lastSampleAt)}),n.jsx(B,{children:s.sampleCount.toLocaleString()}),n.jsx(B,{children:xr(s.endReason)}),n.jsx(B,{children:n.jsxs(kr,{children:[n.jsx(jr,{type:"button",$open:h,onClick:()=>A(h?null:s.id),"aria-label":h?"Close graph":"Graph this flight","aria-expanded":h,children:h?"− graph":"＋ graph"}),o&&n.jsx(Cr,{type:"button",onClick:()=>void C(s),"aria-label":`Replay ${s.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),n.jsx(Te,{type:"button",onClick:()=>void y(s),"aria-label":`Download fixture for ${s.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),c===s.id?n.jsxs(le,{children:[n.jsx(te,{onClick:()=>void L(s.id),children:"Delete"}),n.jsx(re,{onClick:()=>f(null),children:"Cancel"})]}):n.jsx(Ar,{onClick:()=>f(s.id),children:"×"})]})})]}),h&&n.jsx(Ae,{$current:!1,children:n.jsxs(B,{colSpan:8,style:{padding:0},children:[n.jsx(Mt,{flight:s,onChange:()=>void M()}),n.jsx(ir,{missionId:s.id,fromUt:s.firstValidUt??s.firstFrameUt??0,toUt:s.lastValidUt??s.lastFrameUt??0})]})})]},s.id)})})]}),n.jsxs(Nr,{children:[n.jsx(Rr,{children:v.size>0&&(x?n.jsxs(le,{children:[n.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",v.size," selected flight",v.size===1?"":"s","?"]}),n.jsx(te,{onClick:()=>void H(),children:"Delete"}),n.jsx(re,{onClick:()=>S(!1),children:"Cancel"})]}):n.jsxs(n.Fragment,{children:[n.jsxs(Lr,{children:[v.size," selected"]}),n.jsx(Te,{type:"button",onClick:()=>void j(),title:"Download fixtures for the selected flights",children:"↓ download"}),n.jsx(te,{onClick:()=>S(!0),children:"Delete"}),n.jsx(re,{onClick:()=>F(new Set),children:"Clear"})]}))}),n.jsxs(Br,{children:[n.jsxs(Or,{title:`Keep the ${X} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[n.jsx(ce,{checked:T>0,onChange:s=>void d(s.target.checked)}),n.jsxs("span",{children:["Keep latest ",X,T===0&&I>0&&n.jsxs(Ir,{children:[" ","(",I," would be deleted)"]})]})]}),p?n.jsxs(le,{children:[n.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),n.jsx(te,{onClick:()=>void N(),children:"Clear all"}),n.jsx(re,{onClick:()=>m(!1),children:"Cancel"})]}):n.jsx(Pr,{onClick:()=>m(!0),children:"Clear all"})]})]})]})]})}function Sr({missionHistoryEnabled:e,recordAllTopics:t}){const r=u.useSyncExternalStore(Ft,ve,ve);return n.jsxs(Fr,{children:[r.saveFailure&&n.jsxs(xt,{tone:"nogo",title:"Flight not saved",children:[r.saveFailure.vesselName,": ",r.saveFailure.cause]}),e?r.recording?n.jsxs(Mr,{children:["● recording ",r.vesselName??"flight"," (",r.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):n.jsx(Ee,{children:"Auto-record armed: capture starts the moment a flight begins."}):n.jsx(Ee,{children:"Mission history is off, enable it in Settings to auto-record."})]})}const ze=l.span`
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
`,Fr=l.div`
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
`,Mr=l.span`
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
`,Er=l.span`
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
`,Ar=l.button`
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
`,Nr=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-section);
  padding: var(--inset-table-footer);
  border-top: 1px solid var(--color-border-subtle);
`,Rr=l.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-height: 24px;
`,Lr=l.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,$r=l.th`
  width: 28px;
  padding: var(--inset-surface);
  border-bottom: 1px solid var(--color-border-subtle);
`,ce=l.input.attrs({type:"checkbox"})`
  cursor: pointer;
  margin: 0;
`,Ur=l.th`
  width: 24px;
  /* The one cell that cannot take --inset-surface beside Th and ThCheckbox: a
     24px column carrying a star glyph needs more vertical than horizontal. At
     (6,8) the content box is 8px and the glyph clips. */
  padding: var(--inset-table-narrow-header);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
  text-align: center;
`,Dr=l.button`
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
`,Br=l.div`
  display: flex;
  align-items: center;
  gap: var(--gap-section);
`,Or=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  cursor: pointer;
  user-select: none;
`,Ir=l.span`
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
`,Kr=new at({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class Ho{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new it;historyCache=new Map;changesInOrder=new Map;async connect(){await this.pruneToKeepCount()}disconnect(){}schema(){return Ve()}subscribe(t,r){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,r,o,a){if(!a)return{t:[],v:[]};const i=ht(t);if(!i)return{t:[],v:[]};const c=await this.getFullHistoryStore(a);if(!c)return{t:[],v:[]};const f=c.isDerivedTopic(i)?c.sampleDerivedRange(i,r,o):c.sampleRange(i,r,o);return f?{t:f.map(p=>p.validAt),v:f.map(p=>p.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(W)}async getFlight(t){const r=await this.missionStore.getMissionMeta(t);return r?W(r):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.meta.id)}async saveMissionPart(t,r,o){await this.inOrder(t.id,()=>this.missionStore.saveMissionPart(t,r,o)),this.historyCache.delete(t.id),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.id)}async pruneToKeepCount(t){const r=Be();if(!(r<=0))try{await this.pruneFlightsKeepLatest({keepCount:r,keepId:t})}catch(o){fe.warn("[MissionHistorySource] keep latest could not prune",{err:String(o)})}}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,r){const o=await this.missionStore.getMissionMeta(t);!o||!!o.starred===r||(await this.missionStore.updateMissionMeta(t,{starred:r}),this.flightListSubscribers.fire())}async setFlightEndReason(t,r){await this.inOrder(t,async()=>{const o=await this.missionStore.getMissionMeta(t);if(!o){fe.warn("[MissionHistorySource] end reason for a mission not stored",{id:t});return}o.endReason===void 0&&(await this.missionStore.updateMissionMeta(t,{endReason:r}),this.flightListSubscribers.fire())})}inOrder(t,r){const o=this.changesInOrder.get(t),a=o?o.then(r,r):r(),i=a.catch(()=>{});return this.changesInOrder.set(t,i),i.then(()=>{this.changesInOrder.get(t)===i&&this.changesInOrder.delete(t)}),a}async addChapter(t,r){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const i={id:r.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:r.label,startMs:r.startMs,endMs:r.endMs},c=[...o.chapters??[],i];return await this.missionStore.updateMissionMeta(t,{chapters:c}),this.flightListSubscribers.fire(),W({...o,chapters:c})}async updateChapter(t,r,o){const a=await this.missionStore.getMissionMeta(t);if(!a)return null;const i=(a.chapters??[]).map(c=>c.id===r?{...c,...o}:c);return await this.missionStore.updateMissionMeta(t,{chapters:i}),this.flightListSubscribers.fire(),W({...a,chapters:i})}async removeChapter(t,r){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const a=(o.chapters??[]).filter(i=>i.id!==r);return await this.missionStore.updateMissionMeta(t,{chapters:a}),this.flightListSubscribers.fire(),W({...o,chapters:a})}async pruneFlightsKeepLatest(t){const r=await this.missionStore.pruneMissionsKeepLatest(t);for(const o of r)this.historyCache.delete(o);return r.length>0&&this.flightListSubscribers.fire(),r}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const r=this.historyCache.get(t);if(r)return r;const o=(async()=>{const a=await this.missionStore.getMissionFixture(t);if(!a)throw new Error(`mission fixture not found: ${t}`);return Kr.record(),kt(a.fixture)})();this.historyCache.set(t,o);try{return await o}catch{this.historyCache.delete(t);return}}}function W(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchName:e.launchName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,endReason:e.endReason,evaKerbals:e.evaKerbals,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt,firstValidUt:e.firstValidUt,lastValidUt:e.lastValidUt}}function qe(e){const t=new Set(e.parts.map(a=>Number(a.id))),r=e.parts.map(Hr),o=r.find(a=>a.parentFlightId==null)??r.find(a=>!t.has(a.parentFlightId));for(const a of r)a.parentFlightId!=null&&!t.has(a.parentFlightId)&&(a.parentFlightId=o&&o!==a?o.flightId:null);return{topologySeq:e.parts.length,rootFlightId:o?o.flightId:0,parts:r}}function Re(e){return e?[e.x.magnitude,e.y.magnitude,e.z.magnitude]:void 0}function Hr(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage??null,crewCapacity:0,maxTemp:e.maxTemp?.magnitude??null,crashTolerance:0,dryMass:e.dryMass?.magnitude??null,orgPos:[$(e.position.x),$(e.position.y),$(e.position.z)],up:Re(e.up),forward:Re(e.forward),bounds:{size:{x:$(e.bounds.size.x),y:$(e.bounds.size.y),z:$(e.bounds.size.z)},center:e.bounds.center?{x:$(e.bounds.center.x),y:$(e.bounds.center.y),z:$(e.bounds.center.z)}:void 0,hull:Jr(e.bounds.hull)},modules:e.modules}}function _r(e){return e.currentTemp==null?null:{temperature:me(e.currentTemp.magnitude),maxTemperature:e.maxTemp==null?null:me(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp?.magnitude??null}}function Vr(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),_r(r));return t}function Gr(e){const t={};for(const[r,o]of Object.entries(e.resources))t[r]={amount:o.amount?.magnitude??null,maxAmount:o.maxAmount?.magnitude??null,...o.flow!=null?{flow:o.flow.magnitude}:{},...o.nominalFlow!=null?{nominalFlow:o.nominalFlow.magnitude}:{},...o.unratedProcess===!0?{unratedProcess:!0}:{}};return t}function We(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Gr(r));return t}function qr(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function Wr(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map(qr)}}function Yr(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Wr(r));return t}function $(e){return e.magnitude}function Jr(e){if(!e||e.length<9||e.length%3!==0)return;const t=[];for(let r=0;r<e.length;r+=3)t.push({x:$(e[r]),y:$(e[r+1]),z:$(e[r+2])});return t}function Ye(e){return Array.from(new TextEncoder().encode(e),t=>/[A-Za-z0-9_-]/.test(String.fromCharCode(t))?String.fromCharCode(t):`%${t.toString(16).toUpperCase().padStart(2,"0")}`).join("")}function _o(e,t){return`spaceCenter.craft.${e}.${Ye(t)}.parts`}function Vo(e,t){const r=Ye(t),o=Oe(`spaceCenter.craft.${e}.${r}.parts`),a=o.state==="observed"||o.state==="held"?o.value:void 0;return u.useMemo(()=>{if(!a)return;const i=lt("CraftFileParts",structuredClone(a));return{topology:qe(i),resourcesByFlightId:We(i)}},[a])}const Zr=[];function Qr(e){const t=[ne(e.dvRadial,0),ne(e.dvNormal,0),ne(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function Go(){const e=Oe("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return u.useMemo(()=>!Array.isArray(t)||t.length===0?Zr:t.map(Qr),[t])}function qo(e){const t=Ie("vessel.parts"),r=t.state==="observed"||t.state==="held"?t.value:void 0,o=u.useMemo(()=>Vr(r),[r]),a=u.useMemo(()=>We(r),[r]),i=u.useMemo(()=>Yr(r),[r]),c=[...e].sort((f,p)=>f-p).join(",");return u.useMemo(()=>{const f=c.length===0?[]:c.split(",").map(Number),p=new Map;for(const m of f)p.set(m,{thermal:o.get(m)??null,resources:a.get(m)??{},partState:i.get(m)});return p},[c,o,a,i])}const Le=Object.freeze({status:"none"}),Xr={t:[],readings:[]};function Je(e){return e==="recorded"||e==="last-before-blackout"?e:void 0}function eo(e){return e!==null&&typeof e=="object"&&"magnitude"in e}function to(e,t){if(eo(e))return{value:e,...t};if(typeof e=="number")return{value:J(t.lo.unit,e),...t}}function ro(e){const t=Ht(e);if(t===void 0)return Xr;const r=new Map;for(const i of e.spans??[]){const c=Je(i.status);if(c!==void 0)for(let f=i.from;f<=i.to;f++)r.set(f,c)}let o;const a=e.t.map((i,c)=>{const f=J("ut",i),p=t.payloads[c],m=t.modelled.get(c);if(m!==void 0){const S={status:"available",modelled:p,atUt:f,beyondReceived:!0,basis:m.basis,band:m.band?to(p,m.band):void 0};return o===void 0?{state:"pending",reckoning:S}:{state:"held",value:o.payload,asOfUt:o.at,grade:"held",reckoning:S}}o={payload:p,at:f};const x=r.get(c);return x!==void 0?{state:"held",value:p,asOfUt:f,grade:x,reckoning:Le}:{state:"observed",value:p,atUt:f,reckoning:Le}});return{t:e.t,readings:a,basis:e.basis,breaks:e.breaks,bridges:e.bridges,windowEndAt:e.windowEndAt,interpolation:e.interpolation}}function Wo(e,t){const r=Zt(Ct(e),t);return u.useMemo(()=>ro(r),[r])}function oo(e,t,r,o){if(o===void 0)return null;if(t!==null&&t.status===o)return t.to=r,t;const a={from:r,to:r,status:o};return e.push(a),a}function no(e,t,r,o,a){if(o===void 0)return null;if(t!==null&&t.basis===o&&t.bandKind===a?.kind)return t.to=r,a!==void 0&&(t.bandLo?.push(a.lo),t.bandHi?.push(a.hi)),t;const i=a!==void 0?{from:r,to:r,basis:o,bandLo:[a.lo],bandHi:[a.hi],bandKind:a.kind}:{from:r,to:r,basis:o};return e.push(i),i}function ao(e){const t=Q(e);return typeof t=="number"?t:Number.NaN}function so(e){const[t,r]=_e(e?.lo,e?.hi);if(!(e===void 0||t===void 0||r===void 0))return{lo:t,hi:r,kind:e.kind}}function Yo(e){const t=[],r=[],o={t:[],v:[],basis:e.basis,breaks:[],spans:t,reckoned:r,bridges:[],windowEndAt:e.windowEndAt,interpolation:e.interpolation},a=new Set(e.breaks??[]),i=new Map((e.bridges??[]).map(x=>[x.to,x])),c=new Map;let f=null,p=null,m=!1;for(let x=0;x<e.t.length;x++){a.has(x)&&(m=!0);const S=e.readings[x],z=S.reckoning.status==="available"?S.reckoning:void 0,A=ao(z?z.modelled:S.value);if(Number.isNaN(A))continue;const v=o.t.length,F=m&&v>0;F&&o.breaks.push(v),m=!1,c.set(x,v);const T=i.get(x);T!==void 0&&!F&&c.get(x-1)===v-1&&T.v.every(Number.isFinite)&&o.bridges.push({...T,to:v}),o.t.push(e.t[x]),o.v.push(A);const R=z===void 0&&S.state==="held"?Je(S.grade):void 0;f=oo(t,f,v,R),p=no(r,p,v,z?.basis,so(z?.band))}return o}function Jo(){const e=Ie("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return u.useMemo(()=>t?qe(t):void 0,[t])}function Zo(){const e=Pe(),t=u.useSyncExternalStore(c=>e.subscribe(c),()=>e.getSnapshot());if(gt(),!t.active||!t.meta)return null;const r=t.meta,o=e.cursorUt(),a=Math.max(0,r.lastFrameUt-r.firstFrameUt),i=Math.max(0,o-r.firstFrameUt);return n.jsxs(io,{role:"region","aria-label":"Replay controls",children:[n.jsxs(Ue,{children:[n.jsx(uo,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),n.jsxs(lo,{children:["REPLAY: ",n.jsx(co,{children:r.vesselName||"Unnamed vessel"})]})]}),n.jsxs(po,{children:[n.jsx(De,{children:$e(i)}),n.jsx(ho,{type:"range",min:r.firstFrameUt,max:r.lastFrameUt,step:.1,value:o,onChange:c=>e.seekTo(Number(c.target.value)),"aria-label":"Seek to position"}),n.jsx(De,{children:$e(a)})]}),n.jsxs(Ue,{children:[n.jsxs(go,{value:String(t.rate),onChange:c=>e.setRate(Number(c.target.value)),"aria-label":"Playback rate",children:[n.jsx("option",{value:"0.5",children:"0.5×"}),n.jsx("option",{value:"1",children:"1×"}),n.jsx("option",{value:"2",children:"2×"}),n.jsx("option",{value:"5",children:"5×"}),n.jsx("option",{value:"10",children:"10×"}),n.jsx("option",{value:"50",children:"50×"})]}),n.jsx(fo,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function $e(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),r=Math.floor(t/3600),o=Math.floor(t%3600/60),a=t%60;return r>0?`${r}:${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`}const io=l.div`
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
`,lo=l.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
`,co=l.span`
  color: var(--color-tag-purple-fg);
  font-weight: 700;
  margin-left: var(--gap-trailing-figure);
`,uo=l.button`
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
`,po=l.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,ho=l.input`
  flex: 1;
  min-width: 0;
  accent-color: var(--color-tag-purple-fg);
`,De=l.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  white-space: nowrap;
`,go=l.select`
  background: var(--color-surface-app);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,fo=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`;export{Po as A,Wo as B,Ge as C,Jo as D,Bo as E,Ko as F,Ho as M,Zo as R,_e as a,We as b,Yr as c,qe as d,Ye as e,_o as f,ve as g,Io as h,oe as i,Ve as j,Oo as k,Xt as l,or as m,ar as n,Q as o,Yo as p,ao as q,Do as r,Uo as s,$o as t,Go as u,Ft as v,Vo as w,Zt as x,sr as y,qo as z};
