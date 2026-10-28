import{j as s}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{bd as pe,b3 as ve,cz as W,R as rt,cj as ot,cv as nt,cE as st,cD as at,dj as it,cr as lt,dp as ct,ah as dt,bc as K,bj as ut,a_ as J,a$ as pt,ba as se,ds as ht}from"./view-clock-formula-DQDiIv0b.js";import{r as p}from"./ext-react-C0MU9AHG.js";import{o as Ke,D as X,s as ft,L as gt}from"./ksp-enum-names-U5YZiXlo.js";import{A as mt}from"./screen-BsRnpjWn.js";import{ba as vt,bc as bt,aW as xt,i as yt,aH as St,b7 as He,bg as wt}from"./lagrange-BLgYr1A-.js";import{x as he}from"./use-transmissions-CxaZRQxv.js";import{g as _e}from"./replay-session-controller-98qPtMCz.js";import"./websocket-transport-BlnXwtwE.js";import{y as _,av as kt,E as jt,w as be,ak as Ct}from"./ModalSaveBar-DMulIalK.js";import{G as Ft,N as Mt}from"./Notice-BrJzMpTK.js";import{N as zt,w as de}from"./contributionsRead-BNtFQUx6.js";import"./processorPerfBudget-DZwKk_Kg.js";import{l as xe}from"./index-DqUIH49W.js";import{h as Tt,D as Et}from"./VersionMismatchBanner-KCmXuk94.js";import c from"./ext-styled-components-DAuodqsN.js";import{b as Nt}from"./full-history-replay-kXLxluV-.js";import{e as At,s as Rt}from"./topic-fields-CFEp1ULT.js";import{k as ye}from"./orbital-BjxeYJ8l.js";const Ve={recording:!1,vesselName:null,frameCount:0,saveFailure:null};let H=Ve;const Z=new Set;function Se(){return H}function Yo(e){H={...e,saveFailure:H.saveFailure};for(const t of Z)t()}function Jo(e){if(H.saveFailure!==e){H={...H,saveFailure:e};for(const t of Z)t()}}function Lt(e){return Z.add(e),()=>{Z.delete(e)}}function Zo(){H=Ve,Z.clear()}function ae(){return pe("missionHistory")}function V(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),r=Math.floor(t/3600),o=Math.floor(t%3600/60),n=t%60;return r>0?`${r}:${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function ee(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const i=Number(t);return Number.isFinite(i)&&i>=0?i*1e3:null}const r=t.split(":").map(i=>i.trim());if(r.some(i=>i===""||!/^\d+(\.\d+)?$/.test(i)))return null;const o=r.map(Number),a=o.length===2?o[0]*60+o[1]:o.length===3?o[0]*3600+o[1]*60+o[2]:null;return a===null?null:a*1e3}function $t({flight:e,onChange:t}){const r=e.chapters??[],o=Math.max(0,e.lastSampleAt-e.launchedAt),[n,a]=p.useState(""),[i,d]=p.useState(""),[f,m]=p.useState(""),[v,x]=p.useState(null),[M,A]=p.useState(null),[y,z]=p.useState(""),[N,D]=p.useState(""),[T,E]=p.useState(""),[w,S]=p.useState(null);function U(g){A(g.id),z(g.label),D(V(g.startMs)),E(V(g.endMs)),S(null)}function h(){A(null),S(null)}async function j(){const g=ae();if(!g)return;const C=ee(i),k=ee(f);if(n.trim()===""){x("Label required");return}if(C===null||k===null){x("Start and end must be mm:ss");return}if(k<=C){x("End must be after start");return}x(null),await g.addChapter(e.id,{label:n.trim(),startMs:C,endMs:k}),a(""),d(""),m(""),t()}async function I(g){const C=ae();if(!C)return;const k=ee(N),L=ee(T);if(y.trim()===""){S("Label required");return}if(k===null||L===null){S("Start and end must be mm:ss");return}if(L<=k){S("End must be after start");return}S(null),await C.updateChapter(e.id,g,{label:y.trim(),startMs:k,endMs:L}),A(null),t()}async function R(g){const C=ae();C&&(await C.removeChapter(e.id,g),M===g&&h(),t())}return s.jsxs(Dt,{children:[s.jsx(Ot,{children:"Chapters"}),r.length===0?s.jsx(Bt,{children:"No chapters yet. Add markers to slice the flight."}):s.jsx(Ut,{children:r.slice().sort((g,C)=>g.startMs-C.startMs).map(g=>{const C=M===g.id;return s.jsx(It,{children:C?s.jsxs(s.Fragment,{children:[s.jsx(_,{type:"text",value:y,onChange:k=>z(k.target.value),"aria-label":"Chapter label"}),s.jsx(_,{type:"text",value:N,onChange:k=>D(k.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),s.jsx(_,{type:"text",value:T,onChange:k=>E(k.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),s.jsxs(we,{children:[s.jsx(Vt,{type:"button",onClick:()=>void I(g.id),children:"Save"}),s.jsx(Gt,{type:"button",onClick:h,children:"Cancel"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Pt,{title:g.label,children:g.label}),s.jsxs(Kt,{children:[V(g.startMs)," – ",V(g.endMs)]}),s.jsxs(Ht,{children:["(",V(g.endMs-g.startMs),")"]}),s.jsxs(we,{children:[s.jsx(_t,{type:"button",onClick:()=>U(g),children:"edit"}),s.jsx(qt,{type:"button",onClick:()=>void R(g.id),"aria-label":`Remove chapter ${g.label}`,children:"×"})]})]})},g.id)})}),w&&s.jsx(ke,{children:w}),s.jsxs(Wt,{children:[s.jsx(_,{type:"text",placeholder:"Chapter name",value:n,onChange:g=>a(g.target.value),"aria-label":"New chapter label"}),s.jsx(_,{type:"text",placeholder:"0:00",value:i,onChange:g=>d(g.target.value),"aria-label":"New chapter start (mm:ss)"}),s.jsx(_,{type:"text",placeholder:V(o),value:f,onChange:g=>m(g.target.value),"aria-label":"New chapter end (mm:ss)"}),s.jsx(Yt,{type:"button",onClick:()=>void j(),children:"+ add"})]}),v&&s.jsx(ke,{children:v})]})}const Dt=c.div`
  padding: var(--inset-chapters-band);
  background: var(--color-surface-app);
  border-bottom: 1px solid var(--color-border-subtle);
`,Ot=c.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: var(--gap-heading-hint);
`,Bt=c.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  margin-bottom: var(--gap-related-comfortable);
`,Ut=c.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  margin-bottom: var(--gap-related-comfortable);
`,It=c(kt).attrs({cols:"minmax(120px, 1fr) auto auto auto",gap:"related-comfortable"})`
  font-size: var(--font-size-compact);
`,Pt=c.span`
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Kt=c.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Ht=c.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-faint);
  font-size: var(--font-size-compact);
  white-space: nowrap;
`,we=c.span`
  display: inline-flex;
  gap: var(--gap-related);
  align-items: center;
  justify-self: end;
`,_t=c.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,Vt=c.button`
  background: var(--color-go-status);
  border: 1px solid var(--color-go-status);
  color: var(--color-go-on-status);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,Gt=c.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,qt=c.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-base);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,Wt=c.div`
  display: grid;
  grid-template-columns: minmax(120px, 1fr) 80px 80px auto;
  gap: var(--gap-related);
  align-items: center;
  margin-top: var(--gap-actions);
`,Yt=c.button`
  background: none;
  border: 1px dashed var(--color-text-faint);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  white-space: nowrap;
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,ke=c.div`
  margin-top: var(--gap-sub-readout);
  font-size: var(--font-size-compact);
  color: var(--color-tag-red-fg);
`,Ge=new WeakMap;function Jt(e,t){Ge.set(e,t)}function Zt(e){return Ge.get(e)}const ue={t:[],v:[]};function Qt(e){switch(e){case ve.LastBeforeBlackout:return"last-before-blackout";case ve.Recorded:return"recorded";default:return null}}function Xt(e){const t=[];let r=null;for(let o=0;o<e.length;o++){const n=Qt(e[o].meta.staleness);if(n===null){r=null;continue}if(r!==null&&r.status===n){r.to=o;continue}r={from:o,to:o,status:n},t.push(r)}return t}const je=new WeakMap;function er(e){const t=je.get(e);if(t)return t;const r={t:e.t,v:e.v.map(o=>{const n=Q(o);return typeof n=="number"?n:Number.NaN}),basis:e.basis};return je.set(e,r),r}function tr(e,t){return e.length===t.length&&e.every((r,o)=>r.to===t[o].to&&r.v===t[o].v)}function rr(e,t){return e.length===t.length&&e.every((r,o)=>r.from===t[o].from&&r.to===t[o].to&&r.status===t[o].status)}function Ce(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((r,o)=>Object.is(r,t[o]))}function or(e,t){return e.length===t.length&&e.every((r,o)=>r.from===t[o].from&&r.to===t[o].to&&r.basis===t[o].basis&&r.bandKind===t[o].bandKind&&Ce(r.bandLo,t[o].bandLo)&&Ce(r.bandHi,t[o].bandHi))}function qe(e,t){return[e?.toWire(),t?.toWire()]}function nr(e,t,r,o,n){const a=new Map((t.sampleRange(r,o,n)??[]).map(f=>[f.validAt,JSON.stringify(f.payload)])),i=[];let d;for(const f of e){const m=a.get(f.validAt)??JSON.stringify(f.payload);m!==d&&(d=m,i.push(f))}return i}function Q(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function sr(e,t){const r=p.useRef(ue),o=p.useRef(void 0),n=vt(),a=bt(),i=e,d=p.useCallback(m=>{if(!n||!a)return()=>{};const v=xt(n,a,i),x=a.subscribeFrame(m);return()=>{x(),v()}},[n,a,i]),f=p.useCallback(()=>{if(!a)return ue;const m=a.currentFrame(),v=`${i}\0${t}\0${m.viewUt}\0${a.clock.getEpoch()}\0${a.sampleStatus(i,m)}\0${a.dataRevision()}`;if(o.current===v)return r.current;const x=ar(a,i,t,m.viewUt,r.current);return o.current=v,r.current=x,x},[a,i,t]);return p.useSyncExternalStore(d,f)}function ar(e,t,r,o,n){const a=o-r,i=e.isDerivedTopic(t)?e.sampleDerivedRange(t,a,o):e.sampleRange(t,a,o),d=e.sampleReckonedTail(t,a,o),f=e.tagsOf(t),m=f.kind==="event"?"none":f.kind==="discrete"?"step":"linear",v=f.kind==="event"?nr(i??[],e,f.topic,a,o):i??[];if(v.length===0&&d.length===0)return ue;const x=v.map(h=>h.validAt),M=v.map(h=>Q(h.payload)),A=v.map(h=>h.payload),y=new Map,z=[],N=[];for(let h=0;h<v.length;h++){if(h===0)continue;if(m==="none")break;if(v[h].meta.gapSinceUt!=null){z.push(h);continue}if(Object.is(M[h],M[h-1]))continue;const j=e.gapModel(t,v[h-1],v[h]);if(j?.carried===!1){z.push(h);continue}j?.carried&&N.push({to:h,...er(j)})}const D=Xt(v),T=[];for(const h of d){const j=x.length;x.push(h.atUt),M.push(Q(h.value)),A.push(h.value);const{bandLo:I,bandHi:R}=h,[g,C]=qe(I,R),k=g!==void 0&&C!==void 0?h.bandKind:void 0;y.set(j,{basis:h.basis,band:I!==void 0&&R!==void 0&&k!==void 0?{lo:I,hi:R,kind:k}:void 0});const L=T[T.length-1],ne=L!==void 0&&L.basis===h.basis&&L.to===j-1&&L.bandKind===k;if(L!==void 0&&ne){L.to=j,g!==void 0&&C!==void 0&&k!==void 0&&(L.bandLo?.push(g),L.bandHi?.push(C));continue}if(g!==void 0&&C!==void 0&&k!==void 0){T.push({from:j,to:j,basis:h.basis,bandLo:[g],bandHi:[C],bandKind:k});continue}T.push({from:j,to:j,basis:h.basis})}const E=n,w=E.breaks??[];if(E.t.length===x.length&&E.t.every((h,j)=>h===x[j])&&E.v.every((h,j)=>Object.is(h,M[j]))&&w.length===z.length&&w.every((h,j)=>h===z[j])&&tr(E.bridges??[],N)&&rr(E.spans??[],D)&&or(E.reckoned??[],T)&&E.windowEndAt===(T.length>0?o:void 0)&&(E.interpolation??"linear")===m)return E;const U={t:x,v:M,basis:"ut-seconds",breaks:z,bridges:N,spans:D,reckoned:T,interpolation:m,windowEndAt:T.length>0?o:void 0};return Jt(U,{payloads:A,modelled:y}),U}const ir=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function q(e){const t=e.split(".").flatMap(a=>a.split(/(?=[A-Z])/)).map(a=>a.toLowerCase()).filter(a=>a.length>0).map(a=>ir[a]??a);if(t.length===0)return e;const[r,...o]=t;return[r===r.toUpperCase()?r:r[0].toUpperCase()+r.slice(1),...o].join(" ")}function lr(e,t){const r=t.split("."),o=[];let n=[],a=!1;for(let i=0;i<r.length;i++){const d=lt(e,r.slice(0,i+1).join("."));if(d===void 0){n.push(r[i]);continue}n.length>0&&o.push(q(n.join("."))),n=[],o.push(d),a=!0}return a?(n.length>0&&o.push(q(n.join("."))),o.join(" › ")):q(t)}function cr(e,t,r){return r.has(e)?!0:it(`${e}.${t}`)?.rawTopic===e}const dr=Object.freeze({"vessel.target":"Target"});function ur(e,t){const r=lr(e,t),o=dr[e];if(o===void 0)return r;const n=r.split(" ")[0],a=n===n.toUpperCase()?r:r[0].toLowerCase()+r.slice(1);return`${o} ${a}`}function pr(e,t){return{key:`${e}.${t.path}`,label:ur(e,t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function hr(e,t){const r=new Set(t),o=[...new Set([...nt(),...e,...t])].filter(d=>!st(d)).sort(),n=[],a=[],i=[];for(const d of o){if(at(d)){i.push(d);continue}const f=At(d).filter(m=>cr(d,m.path,r));if(f.length===0){a.push(d);continue}for(const m of f)n.push(pr(d,m))}return{keys:n,undescribed:a,collections:i}}function oe(){return[...yt.map(e=>e.topic),...rt().map(e=>e.topic)]}let ie;function fe(e,t){const r=`${e.join(",")}|${t.join(",")}|${ot()}`;if(ie?.key===r)return ie.built;const o=hr(e,t);return ie={key:r,built:o},o}function We(e=W(),t=oe()){return fe(e,t).keys}function fr(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!gr.has(e.unit)}const gr=new Set(["bool","enum","flag","id","raw","text"]);function mr(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function Qo(e,t){const r=e?.enumEncoding;return r?.by!=="ordinal"||typeof t!="number"?t:r.names[t]??t}function Xo(e=W(),t=oe()){return fe(e,t).undescribed}function en(e=W(),t=oe()){return fe(e,t).collections}function Fe(){return oe().join(",")}function Ye(){const e=p.useSyncExternalStore(ct,W,W),t=p.useSyncExternalStore(dt,Fe,Fe);return p.useMemo(()=>We(e,t.split(",")),[e,t])}function vr(){const e=Ye();return p.useMemo(()=>e.filter(fr),[e])}function tn(){const e=Ye();return p.useMemo(()=>e.filter(mr),[e])}const Me=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function ze(){return pe("missionHistory")}function br({missionId:e,fromUt:t,toUt:r}){const o=vr(),[n,a]=p.useState(new Set),[i,d]=p.useState([]),[f,m]=p.useState(!1),[v,x]=p.useState(null);p.useEffect(()=>()=>{ze()?.evictFullHistoryStore(e)},[e]);const M=p.useMemo(()=>o.map(w=>({key:w.key,label:w.label??w.key,unit:w.unit,group:yr(w.key)})),[o]);p.useEffect(()=>{const w=ze();if(!w||n.size===0){d([]),x(null);return}let S=!1;m(!0),x(null);const U=[...n];return Promise.all(U.map(h=>w.queryRange(h,t,r,e))).then(h=>{if(S)return;const j=new Map(o.map(R=>[R.key,R])),I=U.map((R,g)=>{const C=xr(h[g],t),k=j.get(R);return{id:R,label:k?.label??R,axis:"primary",color:Me[g%Me.length],type:"line",data:C}});d(I)}).catch(h=>{S||x(h instanceof Error?h.message:String(h))}).finally(()=>{S||m(!1)}),()=>{S=!0}},[n,e,t,r,o]);const A=Math.max(0,(r-t)*1e3),y=A>0?[0,A]:[0,6e4],z=i.some(w=>w.data.x.length>0),N=[...n].map(w=>o.find(S=>S.key===w)),D=[...new Set(N.map((w,S)=>w?.label??[...n][S]))],T=[...new Set(N.map(w=>w?.unit))],E=Tt(D.length>0&&D.length<=2?D.join(" / "):void 0,T.length===1?T[0]:void 0);return s.jsxs(Sr,{children:[s.jsxs(wr,{children:[s.jsx(kr,{children:"Series"}),s.jsx(Et,{keys:M,value:n,onChange:a,placeholder:"Add a data key...",emptyHint:M.length===0?"No numeric keys in the current schema":"No matches"})]}),v&&s.jsxs(Fr,{role:"alert",children:["Failed to load samples: ",v]}),n.size===0?s.jsx(Te,{children:"Pick one or more numeric telemetry keys above to plot them."}):s.jsxs(jr,{children:[f&&s.jsx(Cr,{children:"Loading..."}),!f&&!z&&s.jsx(Te,{children:"No recorded samples for the selected keys."}),z&&s.jsx(Ft,{chrome:"bare",series:i,xDomain:y,xAxisLabel:"Mission time",yAxisLabel:E,height:260})]})]})}function xr(e,t){const r=[],o=[];for(let n=0;n<e.t.length;n++){const a=Q(e.v[n]);typeof a!="number"||!Number.isFinite(a)||(r.push((e.t[n]-t)*1e3),o.push(a))}return{x:r,y:o}}function yr(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const Sr=c.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border-top: 1px solid var(--color-surface-raised);
`,wr=c.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,kr=c.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,jr=c.div`
  position: relative;
  min-height: 260px;
`,Te=c.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  padding: var(--inset-chart-empty);
  text-align: center;
`,Cr=c.div`
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
`,Fr=c.div`
  font-size: var(--font-size-compact);
  color: var(--color-nogo-text);
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  padding: var(--inset-surface);
  border-radius: var(--radius-regular);
`;function Mr(e,t){const r=[],o=new Map;for(const n of e){const a=n.lastSampleAt-n.launchedAt,i=n.endReason===void 0&&n.outcome===void 0&&t.has(n.vesselName),d=i?o.get(n.vesselName):void 0;if(d){d.ids.push(n.id),d.launchedAt=Math.min(d.launchedAt,n.launchedAt),d.durationMs+=a,d.sampleCount+=n.sampleCount;continue}const f={flight:n,ids:[n.id],stillFlying:i,launchedAt:n.launchedAt,durationMs:a,sampleCount:n.sampleCount};r.push(f),i&&o.set(n.vesselName,f)}return r}function zr(e){return new Date(e).toLocaleString()}function Tr(e,t){return de(J("s",(t-e)/1e3))}const Er={[K.Recovered]:"Recovered",[K.Crashed]:"Crashed",[K.Reverted]:"Reverted",[K.Destroyed]:"Destroyed",[K.Terminated]:"Terminated",[K.Docked]:"Docked"};function Nr(e,t){if(e===void 0)return"Not known";const r=Er[e]??"Not known";return e===K.Docked&&t?`${r} with ${t}`:r}function Ar(e){const t=[e.fundsEarned===null?null:`+${de(J("funds",e.fundsEarned),{decimals:0})}`,e.scienceEarned===null?null:`+${de(J("science",e.scienceEarned),{decimals:1})}`].filter(r=>r!==null);return[`Recovered ${e.recoveryLocation}`,e.recoveryFactor,t.length>0?t.join(" · "):"no funds or science awarded"].filter(r=>r!=="").join(" · ")}function B(){return pe("missionHistory")}function Ee(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),r=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${r}.fixture.json`}function Ne(e,t){const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),o=URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(o)}function rn({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:r=!1}={}){const o=e==="main",[n,a]=p.useState([]),[i,d]=p.useState(null),[f,m]=p.useState(!1),[v,x]=p.useState(!1),[M,A]=p.useState(null),[y,z]=p.useState(()=>new Set),[N,D]=p.useState(()=>Ke()),T=he("trackingStation.catalog"),E=p.useMemo(()=>{const u=T.state==="observed"||T.state==="held"?T.value:void 0;return new Set((u?.entries??[]).filter(l=>l.contact!==ut.Gone).map(l=>l.name))},[T]),w=p.useMemo(()=>Mr(n,E),[n,E]),S=p.useCallback(async()=>{const u=B();if(!u)return;let l;try{l=await u.listFlights()}catch(b){console.warn("FlightsManager: failed to load flights",b);return}a(l.sort((b,F)=>F.launchedAt-b.launchedAt)),z(b=>{const F=new Set;for(const $ of l)b.has($.id)&&F.add($.id);return F.size===b.size?b:F})},[]);p.useEffect(()=>{S()},[S]),p.useEffect(()=>{const u=B();if(typeof u?.onFlightListChange=="function")return u.onFlightListChange(()=>{S()})},[S]);const U=async u=>{const l=B();if(l){for(const b of u)await l.deleteFlight(b);d(null),await S()}},h=async u=>{const l=B();if(!l)return;const b=await l.exportFlight(u.id);Ne(b,Ee(u))},j=async u=>{const l=B();if(!l)return;const b=await l.exportFlight(u.id),F={id:u.id,vesselName:u.vesselName,launchedAt:u.launchedAt,firstFrameUt:u.firstFrameUt??0,lastFrameUt:u.lastFrameUt??0,frameCount:u.sampleCount};_e().start(F,b)},I=async()=>{const u=B();u&&(await u.clearAllFlights(),m(!1),await S())},R=u=>{z(l=>{const b=new Set(l),F=u.every($=>b.has($));for(const $ of u)F?b.delete($):b.add($);return b})},g=()=>{z(u=>u.size===n.length?new Set:new Set(n.map(l=>l.id)))},C=async()=>{const u=B();if(!u)return;const l=Array.from(y);for(const b of l)await u.deleteFlight(b);x(!1),await S()},k=async u=>{const l=B();l&&(await l.setFlightStarred(u.id,!u.starred),await S())},L=async u=>{const l=B(),b=u?X:0;ft(b),D(b),u&&l&&(await l.pruneFlightsKeepLatest({keepCount:b}),await S())},ne=async()=>{const u=B();if(!u)return;const l=Array.from(y),b=new Map(n.map(F=>[F.id,F]));for(const F of l){const $=b.get(F);if(!$)continue;const tt=await u.exportFlight(F);Ne(tt,Ee($))}},ge=n.length>0&&y.size===n.length,et=y.size>0&&y.size<n.length,me=(()=>{const u=[...n].sort((F,$)=>$.launchedAt-F.launchedAt);let l=0,b=0;for(const F of u)F.starred||(l+=1,l>X&&(b+=1));return b})();return s.jsxs(Lr,{children:[o&&s.jsx(Rr,{missionHistoryEnabled:t,recordAllTopics:r}),n.length===0?s.jsx(jt,{children:"No flight history recorded yet"}):s.jsxs(s.Fragment,{children:[s.jsxs(Ir,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx(qr,{children:s.jsx(ce,{ref:u=>{u&&(u.indeterminate=et)},checked:ge,onChange:g,"aria-label":ge?"Clear selection":"Select all flights"})}),s.jsxs(Wr,{children:[s.jsx(be,{size:12,fill:"currentColor","aria-hidden":"true"}),s.jsx(Ae,{children:"Kept (exempt from auto-delete)"})]}),s.jsx(G,{children:"Vessel"}),s.jsx(G,{children:"Launched"}),s.jsx(G,{title:"Game time, not time at the desk",children:"Duration"}),s.jsx(G,{children:"Samples"}),s.jsx(G,{children:"Ended"}),s.jsx(G,{children:s.jsx(Ae,{children:"Actions"})})]})}),s.jsx("tbody",{children:w.map(u=>{const l=u.flight,b=M===l.id,F=u.ids.every($=>y.has($));return s.jsxs(p.Fragment,{children:[s.jsxs($e,{$current:!1,children:[s.jsx(P,{children:s.jsx(ce,{checked:F,onChange:()=>R(u.ids),"aria-label":`Select flight ${l.vesselName||l.id}`})}),s.jsx(P,{children:s.jsx(Yr,{type:"button",$on:!!l.starred,onClick:()=>void k(l),"aria-label":l.starred?`Unstar ${l.vesselName||"flight"}`:`Star ${l.vesselName||"flight"} (keep from auto-delete)`,"aria-pressed":!!l.starred,title:l.starred?"Kept from auto-delete":"Keep from auto-delete",children:s.jsx(be,{size:"var(--icon-size-control)",fill:l.starred?"currentColor":"none"})})}),s.jsxs(P,{children:[l.vesselName||zt,l.launchName&&s.jsxs(Kr,{children:["launched as ",l.launchName]}),l.evaKerbals&&l.evaKerbals.length>0&&s.jsxs(Pr,{children:["EVA: ",l.evaKerbals.join(", ")]}),l.outcome?.kind==="recovered"&&s.jsx(De,{$tone:"go",title:Ar(l.outcome),children:"recovered"}),l.outcome?.kind==="crashed"&&s.jsx(De,{$tone:"nogo",title:`Crashed at ${l.outcome.body} (${l.outcome.situation}) · ${l.outcome.partsLostCount} part(s) lost${l.outcome.kerbalsKilled.length>0?` · KIA: ${l.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),s.jsx(P,{children:zr(u.launchedAt)}),s.jsx(P,{children:Tr(0,u.durationMs)}),s.jsx(P,{children:u.sampleCount.toLocaleString()}),s.jsx(P,{children:u.stillFlying?"Still flying":Nr(l.endReason,l.joinedVesselName)}),s.jsx(P,{children:s.jsxs($r,{children:[s.jsx(Dr,{type:"button",$open:b,onClick:()=>A(b?null:l.id),"aria-label":b?"Close graph":"Graph this flight","aria-expanded":b,children:b?"− graph":"＋ graph"}),o&&s.jsx(Or,{type:"button",onClick:()=>void j(l),"aria-label":`Replay ${l.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),s.jsx(Re,{type:"button",onClick:()=>void h(l),"aria-label":`Download fixture for ${l.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),i===l.id?s.jsxs(le,{children:[s.jsx(te,{onClick:()=>void U(u.ids),children:"Delete"}),s.jsx(re,{onClick:()=>d(null),children:"Cancel"})]}):s.jsx(Hr,{onClick:()=>d(l.id),children:"×"})]})})]}),b&&s.jsx($e,{$current:!1,children:s.jsxs(P,{colSpan:8,style:{padding:0},children:[s.jsx($t,{flight:l,onChange:()=>void S()}),s.jsx(br,{missionId:l.id,fromUt:l.firstValidUt??l.firstFrameUt??0,toUt:l.lastValidUt??l.lastFrameUt??0})]})})]},l.id)})})]}),s.jsxs(_r,{children:[s.jsx(Vr,{children:y.size>0&&(v?s.jsxs(le,{children:[s.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",y.size," selected flight",y.size===1?"":"s","?"]}),s.jsx(te,{onClick:()=>void C(),children:"Delete"}),s.jsx(re,{onClick:()=>x(!1),children:"Cancel"})]}):s.jsxs(s.Fragment,{children:[s.jsxs(Gr,{children:[y.size," selected"]}),s.jsx(Re,{type:"button",onClick:()=>void ne(),title:"Download fixtures for the selected flights",children:"↓ download"}),s.jsx(te,{onClick:()=>x(!0),children:"Delete"}),s.jsx(re,{onClick:()=>z(new Set),children:"Clear"})]}))}),s.jsxs(Jr,{children:[s.jsxs(Zr,{title:`Keep the ${X} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[s.jsx(ce,{checked:N>0,onChange:u=>void L(u.target.checked)}),s.jsxs("span",{children:["Keep latest ",X,N===0&&me>0&&s.jsxs(Qr,{children:[" ","(",me," would be deleted)"]})]})]}),f?s.jsxs(le,{children:[s.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),s.jsx(te,{onClick:()=>void I(),children:"Clear all"}),s.jsx(re,{onClick:()=>m(!1),children:"Cancel"})]}):s.jsx(Xr,{onClick:()=>m(!0),children:"Clear all"})]})]})]})]})}function Rr({missionHistoryEnabled:e,recordAllTopics:t}){const r=p.useSyncExternalStore(Lt,Se,Se);return s.jsxs(Br,{children:[r.saveFailure&&s.jsxs(Mt,{tone:"nogo",title:"Flight not saved",children:[r.saveFailure.vesselName,": ",r.saveFailure.cause]}),e?r.recording?s.jsxs(Ur,{children:["● recording ",r.vesselName??"flight"," (",r.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):s.jsx(Le,{children:"Auto-record armed: capture starts the moment a flight begins."}):s.jsx(Le,{children:"Mission history is off, enable it in Settings to auto-record."})]})}const Ae=c.span`
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
`,Lr=c.div`
  display: flex;
  flex-direction: column;
  min-width: min(500px, 100%);
  /* Graph panels expand in-place, so let the whole thing scroll rather than
     clipping the chart. Horizontal scroll catches narrow viewports where the
     row-action button cluster won't fit even in the wide flight modal. */
  max-height: 80vh;
  max-height: 80dvh;
  overflow: auto;
`,$r=c.div`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
`,Dr=c.button`
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
`,Re=c.button`
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
`,Or=c.button`
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
`,Br=c.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-section);
  padding-bottom: var(--inset-toolbar-bottom);
  margin-bottom: var(--gap-toolbar);
  border-bottom: 1px solid var(--color-border-subtle);
`,Le=c.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Ur=c.span`
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
`,Ir=c.table`
  border-collapse: collapse;
  width: 100%;
  overflow-y: auto;
  font-size: var(--font-size-compact);
`,G=c.th`
  text-align: left;
  padding: var(--inset-surface);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
`,$e=c.tr`
  background: ${({$current:e})=>e?"var(--color-go-status)":"transparent"};
  &:hover { background: var(--color-surface-raised); }
`,P=c.td`
  /* 7px is computed, not chosen: it is the 6px vertical half of the surface
     inset Th carries, plus the 1px that makes a body row taller than the
     header row. It tracks Th, not the spacing grid. */
  padding: 7px var(--gutter-table-cell);
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-surface-raised);
  white-space: nowrap;
`,Pr=c.span`
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,Kr=c.span`
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,De=c.span`
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
`,Hr=c.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-lg);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,le=c.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
`,te=c.button`
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  color: var(--color-tag-red-fg);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { background: var(--color-nogo-muted); }
`,re=c.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,_r=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-section);
  padding: var(--inset-table-footer);
  border-top: 1px solid var(--color-border-subtle);
`,Vr=c.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-height: 24px;
`,Gr=c.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,qr=c.th`
  width: 28px;
  padding: var(--inset-surface);
  border-bottom: 1px solid var(--color-border-subtle);
`,ce=c.input.attrs({type:"checkbox"})`
  cursor: pointer;
  margin: 0;
`,Wr=c.th`
  width: 24px;
  /* The one cell that cannot take --inset-surface beside Th and ThCheckbox: a
     24px column carrying a star glyph needs more vertical than horizontal. At
     (6,8) the content box is 8px and the glyph clips. */
  padding: var(--inset-table-narrow-header);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
  text-align: center;
`,Yr=c.button`
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
`,Jr=c.div`
  display: flex;
  align-items: center;
  gap: var(--gap-section);
`,Zr=c.label`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  cursor: pointer;
  user-select: none;
`,Qr=c.span`
  color: var(--color-nogo-muted);
`,Xr=c.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-dim);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,eo=new pt({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class on{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new gt;historyCache=new Map;changesInOrder=new Map;async connect(){await this.pruneToKeepCount()}disconnect(){}schema(){return We()}subscribe(t,r){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,r,o,n){if(!n)return{t:[],v:[]};const a=St(t);if(!a)return{t:[],v:[]};const i=await this.getFullHistoryStore(n);if(!i)return{t:[],v:[]};const d=i.isDerivedTopic(a)?i.sampleDerivedRange(a,r,o):i.sampleRange(a,r,o);return d?{t:d.map(f=>f.validAt),v:d.map(f=>f.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(Y)}async getFlight(t){const r=await this.missionStore.getMissionMeta(t);return r?Y(r):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.meta.id)}async saveMissionPart(t,r,o){await this.inOrder(t.id,()=>this.missionStore.saveMissionPart(t,r,o)),this.historyCache.delete(t.id),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.id)}async pruneToKeepCount(t){const r=Ke();if(!(r<=0))try{await this.pruneFlightsKeepLatest({keepCount:r,keepId:t})}catch(o){xe.warn("[MissionHistorySource] keep latest could not prune",{err:String(o)})}}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,r){const o=await this.missionStore.getMissionMeta(t);!o||!!o.starred===r||(await this.missionStore.updateMissionMeta(t,{starred:r}),this.flightListSubscribers.fire())}async setFlightEndReason(t,r,o,n){await this.inOrder(t,async()=>{const a=await this.missionStore.getMissionMeta(t);if(!a){xe.warn("[MissionHistorySource] end reason for a mission not stored",{id:t});return}a.endReason===void 0&&(await this.missionStore.updateMissionMeta(t,{endReason:r,...n===void 0?{}:{joinedVesselId:n},...o===void 0?{}:{joinedVesselName:o}}),this.flightListSubscribers.fire())})}inOrder(t,r){const o=this.changesInOrder.get(t),n=o?o.then(r,r):r(),a=n.catch(()=>{});return this.changesInOrder.set(t,a),a.then(()=>{this.changesInOrder.get(t)===a&&this.changesInOrder.delete(t)}),n}async reopenFlight(t){await this.missionStore.updateMissionMeta(t,{endReason:void 0,joinedVesselId:void 0,joinedVesselName:void 0}),this.flightListSubscribers.fire()}async addChapter(t,r){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const a={id:r.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:r.label,startMs:r.startMs,endMs:r.endMs},i=[...o.chapters??[],a];return await this.missionStore.updateMissionMeta(t,{chapters:i}),this.flightListSubscribers.fire(),Y({...o,chapters:i})}async updateChapter(t,r,o){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const a=(n.chapters??[]).map(i=>i.id===r?{...i,...o}:i);return await this.missionStore.updateMissionMeta(t,{chapters:a}),this.flightListSubscribers.fire(),Y({...n,chapters:a})}async removeChapter(t,r){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const n=(o.chapters??[]).filter(a=>a.id!==r);return await this.missionStore.updateMissionMeta(t,{chapters:n}),this.flightListSubscribers.fire(),Y({...o,chapters:n})}async pruneFlightsKeepLatest(t){const r=await this.missionStore.pruneMissionsKeepLatest(t);for(const o of r)this.historyCache.delete(o);return r.length>0&&this.flightListSubscribers.fire(),r}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const r=this.historyCache.get(t);if(r)return r;const o=(async()=>{const n=await this.missionStore.getMissionFixture(t);if(!n)throw new Error(`mission fixture not found: ${t}`);return eo.record(),Nt(n.fixture)})();this.historyCache.set(t,o);try{return await o}catch{this.historyCache.delete(t);return}}}function Y(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchName:e.launchName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,endReason:e.endReason,evaKerbals:e.evaKerbals,joinedVesselId:e.joinedVesselId,joinedVesselName:e.joinedVesselName,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt,firstValidUt:e.firstValidUt,lastValidUt:e.lastValidUt}}function Je(e){const t=new Set(e.parts.map(n=>Number(n.id))),r=e.parts.map(to),o=r.find(n=>n.parentFlightId==null)??r.find(n=>!t.has(n.parentFlightId));for(const n of r)n.parentFlightId!=null&&!t.has(n.parentFlightId)&&(n.parentFlightId=o&&o!==n?o.flightId:null);return{topologySeq:e.parts.length,rootFlightId:o?o.flightId:0,parts:r}}function Oe(e){return e?[e.x.magnitude,e.y.magnitude,e.z.magnitude]:void 0}function to(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage??null,crewCapacity:0,maxTemp:e.maxTemp?.magnitude??null,crashTolerance:0,dryMass:e.dryMass?.magnitude??null,orgPos:[O(e.position.x),O(e.position.y),O(e.position.z)],up:Oe(e.up),forward:Oe(e.forward),bounds:{size:{x:O(e.bounds.size.x),y:O(e.bounds.size.y),z:O(e.bounds.size.z)},center:e.bounds.center?{x:O(e.bounds.center.x),y:O(e.bounds.center.y),z:O(e.bounds.center.z)}:void 0,hull:lo(e.bounds.hull)},modules:e.modules}}function ro(e){return e.currentTemp==null?null:{temperature:ye(e.currentTemp.magnitude),maxTemperature:e.maxTemp==null?null:ye(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp?.magnitude??null}}function oo(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),ro(r));return t}function no(e){const t={};for(const[r,o]of Object.entries(e.resources))t[r]={amount:o.amount?.magnitude??null,maxAmount:o.maxAmount?.magnitude??null,...o.flow!=null?{flow:o.flow.magnitude}:{},...o.nominalFlow!=null?{nominalFlow:o.nominalFlow.magnitude}:{},...o.unratedProcess===!0?{unratedProcess:!0}:{}};return t}function Ze(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),no(r));return t}function so(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function ao(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map(so)}}function io(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),ao(r));return t}function O(e){return e.magnitude}function lo(e){const t=[];for(const{points:r}of e??[]){if(r.length<9||r.length%3!==0)continue;const o=[];for(let n=0;n<r.length;n+=3)o.push({x:O(r[n]),y:O(r[n+1]),z:O(r[n+2])});t.push(o)}return t.length>0?t:void 0}function Qe(e){return Array.from(new TextEncoder().encode(e),t=>/[A-Za-z0-9_-]/.test(String.fromCharCode(t))?String.fromCharCode(t):`%${t.toString(16).toUpperCase().padStart(2,"0")}`).join("")}function nn(e,t){return`spaceCenter.craft.${e}.${Qe(t)}.parts`}function sn(e,t){const r=Qe(t),o=He(`spaceCenter.craft.${e}.${r}.parts`),n=o.state==="observed"||o.state==="held"?o.value:void 0;return p.useMemo(()=>{if(!n)return;const a=mt("CraftFileParts",structuredClone(n));return{topology:Je(a),resourcesByFlightId:Ze(a)}},[n])}const co=[];function uo(e){const t=[se(e.dvRadial,0),se(e.dvNormal,0),se(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function an(){const e=He("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return p.useMemo(()=>!Array.isArray(t)||t.length===0?co:t.map(uo),[t])}function ln(e){const t=he("vessel.parts"),r=t.state==="observed"||t.state==="held"?t.value:void 0,o=p.useMemo(()=>oo(r),[r]),n=p.useMemo(()=>Ze(r),[r]),a=p.useMemo(()=>io(r),[r]),i=[...e].sort((d,f)=>d-f).join(",");return p.useMemo(()=>{const d=i.length===0?[]:i.split(",").map(Number),f=new Map;for(const m of d)f.set(m,{thermal:o.get(m)??null,resources:n.get(m)??{},partState:a.get(m)});return f},[i,o,n,a])}const Be=Object.freeze({status:"none"}),po={t:[],readings:[]};function Xe(e){return e==="recorded"||e==="last-before-blackout"?e:void 0}function ho(e){return e!==null&&typeof e=="object"&&"magnitude"in e}function fo(e,t){if(ho(e))return{value:e,...t};if(typeof e=="number")return{value:J(t.lo.unit,e),...t}}function go(e){const t=Zt(e);if(t===void 0)return po;const r=new Map;for(const a of e.spans??[]){const i=Xe(a.status);if(i!==void 0)for(let d=a.from;d<=a.to;d++)r.set(d,i)}let o;const n=e.t.map((a,i)=>{const d=J("ut",a),f=t.payloads[i],m=t.modelled.get(i);if(m!==void 0){const x={status:"available",modelled:f,atUt:d,beyondReceived:!0,basis:m.basis,band:m.band?fo(f,m.band):void 0};return o===void 0?{state:"pending",reckoning:x}:{state:"held",value:o.payload,asOfUt:o.at,grade:"held",reckoning:x}}o={payload:f,at:d};const v=r.get(i);return v!==void 0?{state:"held",value:f,asOfUt:d,grade:v,reckoning:Be}:{state:"observed",value:f,atUt:d,reckoning:Be}});return{t:e.t,readings:n,basis:e.basis,breaks:e.breaks,bridges:e.bridges,windowEndAt:e.windowEndAt,interpolation:e.interpolation}}function cn(e,t){const r=sr(Rt(e),t);return p.useMemo(()=>go(r),[r])}function mo(e,t,r,o){if(o===void 0)return null;if(t!==null&&t.status===o)return t.to=r,t;const n={from:r,to:r,status:o};return e.push(n),n}function vo(e,t,r,o,n){if(o===void 0)return null;if(t!==null&&t.basis===o&&t.bandKind===n?.kind)return t.to=r,n!==void 0&&(t.bandLo?.push(n.lo),t.bandHi?.push(n.hi)),t;const a=n!==void 0?{from:r,to:r,basis:o,bandLo:[n.lo],bandHi:[n.hi],bandKind:n.kind}:{from:r,to:r,basis:o};return e.push(a),a}function bo(e){const t=Q(e);return typeof t=="number"?t:Number.NaN}function xo(e){const[t,r]=qe(e?.lo,e?.hi);if(!(e===void 0||t===void 0||r===void 0))return{lo:t,hi:r,kind:e.kind}}function dn(e){const t=[],r=[],o={t:[],v:[],basis:e.basis,breaks:[],spans:t,reckoned:r,bridges:[],windowEndAt:e.windowEndAt,interpolation:e.interpolation},n=new Set(e.breaks??[]),a=new Map((e.bridges??[]).map(v=>[v.to,v])),i=new Map;let d=null,f=null,m=!1;for(let v=0;v<e.t.length;v++){n.has(v)&&(m=!0);const x=e.readings[v],M=x.reckoning.status==="available"?x.reckoning:void 0,A=bo(M?M.modelled:x.value);if(Number.isNaN(A))continue;const y=o.t.length,z=m&&y>0;z&&o.breaks.push(y),m=!1,i.set(v,y);const N=a.get(v);N!==void 0&&!z&&i.get(v-1)===y-1&&N.v.every(Number.isFinite)&&o.bridges.push({...N,to:y}),o.t.push(e.t[v]),o.v.push(A);const D=M===void 0&&x.state==="held"?Xe(x.grade):void 0;d=mo(t,d,y,D),f=vo(r,f,y,M?.basis,xo(M?.band))}return o}function un(){const e=he("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return p.useMemo(()=>t?Je(t):void 0,[t])}function pn(){const e=_e(),t=p.useSyncExternalStore(i=>e.subscribe(i),()=>e.getSnapshot());if(wt(),!t.active||!t.meta)return null;const r=t.meta,o=e.cursorUt(),n=Math.max(0,r.lastFrameUt-r.firstFrameUt),a=Math.max(0,o-r.firstFrameUt);return s.jsxs(yo,{role:"region","aria-label":"Replay controls",children:[s.jsxs(Ie,{children:[s.jsx(ko,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),s.jsxs(So,{children:["REPLAY: ",s.jsx(wo,{children:r.vesselName||"Unnamed vessel"})]})]}),s.jsxs(jo,{children:[s.jsx(Pe,{children:Ue(a)}),s.jsx(Co,{type:"range",min:r.firstFrameUt,max:r.lastFrameUt,step:.1,value:o,onChange:i=>e.seekTo(Number(i.target.value)),"aria-label":"Seek to position"}),s.jsx(Pe,{children:Ue(n)})]}),s.jsxs(Ie,{children:[s.jsxs(Fo,{value:String(t.rate),onChange:i=>e.setRate(Number(i.target.value)),"aria-label":"Playback rate",children:[s.jsx("option",{value:"0.5",children:"0.5×"}),s.jsx("option",{value:"1",children:"1×"}),s.jsx("option",{value:"2",children:"2×"}),s.jsx("option",{value:"5",children:"5×"}),s.jsx("option",{value:"10",children:"10×"}),s.jsx("option",{value:"50",children:"50×"})]}),s.jsx(Mo,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function Ue(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),r=Math.floor(t/3600),o=Math.floor(t%3600/60),n=t%60;return r>0?`${r}:${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`}const yo=c.div`
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
`,Ie=c(Ct).attrs({justify:"start"})`
  flex-shrink: 0;
`,So=c.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
`,wo=c.span`
  color: var(--color-tag-purple-fg);
  font-weight: 700;
  margin-left: var(--gap-trailing-figure);
`,ko=c.button`
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
`,jo=c.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,Co=c.input`
  flex: 1;
  min-width: 0;
  accent-color: var(--color-tag-purple-fg);
`,Pe=c.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Fo=c.select`
  background: var(--color-surface-app);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,Mo=c.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,zo=new Set(["vessel.flight","vessel.orbit","vessel.propulsion","vessel.resources"]);function To(e){return q(e.split(".")[0])}function hn(e,t=new Set(W())){const r=ht(e.topic);if(t.has(e.topic)){const n=e.topic.split(".").slice(1).join("."),a=r??(n===""?void 0:q(n)),i=a===void 0?e.label:`${a} › ${e.label}`,d=To(e.topic);return{group:d,label:i,summary:`${d} › ${i}`,common:!1}}const o=r??q(e.topic);return{group:o,label:e.label,summary:`${o} › ${e.label}`,common:zo.has(e.topic)}}export{ln as A,tn as B,cn as C,Ye as D,un as E,rn as F,Qo as G,on as M,pn as R,qe as a,Ze as b,io as c,Je as d,Qe as e,nn as f,Se as g,en as h,oe as i,We as j,Xo as k,q as l,fr as m,mr as n,Q as o,dn as p,bo as q,Zo as r,hn as s,Jo as t,an as u,Yo as v,Lt as w,sn as x,sr as y,vr as z};
