import{j as s}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{bd as he,b3 as xe,cA as W,R as dt,ck as ut,cw as pt,cF as ht,cE as ft,dk as gt,cs as mt,dq as vt,ah as bt,bc as K,bj as xt,a_ as J,a$ as yt,ba as se,dt as St}from"./view-clock-formula-C1-fzzb3.js";import{r as h}from"./ext-react-C0MU9AHG.js";import{o as Ye,D as Q,s as wt,L as kt}from"./ksp-enum-names-C21IqV_T.js";import{A as jt}from"./screen-DbS07m38.js";import{bb as Ct,bd as Ft,aX as Mt,i as zt,aI as Tt,b8 as fe,bh as Et}from"./lagrange-DxVX2BjH.js";import{x as ge}from"./use-transmissions-DvTUOiLH.js";import{g as Je}from"./replay-session-controller-UWKOCWHB.js";import"./websocket-transport-VROJIUJq.js";import{y as H,av as At,E as Nt,w as ye,B as Rt,ak as Lt}from"./ModalSaveBar-FrEUBEjm.js";import{G as $t,M as Se,N as Ut}from"./Notice-9fvFd2xC.js";import{N as we,w as de}from"./contributionsRead-BJXcYd-i.js";import"./processorPerfBudget-C30dkJJ2.js";import{l as ke}from"./index-DqUIH49W.js";import{h as Ot,D as Dt}from"./VersionMismatchBanner-D9D5xDyz.js";import c from"./ext-styled-components-DAuodqsN.js";import{b as Bt}from"./full-history-replay-Dv5KI4Ih.js";import{e as It,s as Pt}from"./topic-fields-D_rrjguA.js";import{k as je}from"./orbital-BlKfefwy.js";const Xe={recording:!1,vesselName:null,frameCount:0,saveFailure:null};let V=Xe;const X=new Set;function Ce(){return V}function po(e){V={...e,saveFailure:V.saveFailure};for(const t of X)t()}function ho(e){if(V.saveFailure!==e){V={...V,saveFailure:e};for(const t of X)t()}}function Kt(e){return X.add(e),()=>{X.delete(e)}}function fo(){V=Xe,X.clear()}function ae(){return he("missionHistory")}function _(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),r=Math.floor(t/3600),n=Math.floor(t%3600/60),o=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`}function ee(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const i=Number(t);return Number.isFinite(i)&&i>=0?i*1e3:null}const r=t.split(":").map(i=>i.trim());if(r.some(i=>i===""||!/^\d+(\.\d+)?$/.test(i)))return null;const n=r.map(Number),a=n.length===2?n[0]*60+n[1]:n.length===3?n[0]*3600+n[1]*60+n[2]:null;return a===null?null:a*1e3}function Vt({flight:e,onChange:t}){const r=e.chapters??[],n=Math.max(0,e.lastSampleAt-e.launchedAt),[o,a]=h.useState(""),[i,d]=h.useState(""),[f,g]=h.useState(""),[v,x]=h.useState(null),[M,N]=h.useState(null),[T,R]=h.useState(""),[S,L]=h.useState(""),[E,A]=h.useState(""),[y,z]=h.useState(null);function B(m){N(m.id),R(m.label),L(_(m.startMs)),A(_(m.endMs)),z(null)}function p(){N(null),z(null)}async function k(){const m=ae();if(!m)return;const j=ee(i),w=ee(f);if(o.trim()===""){x("Label required");return}if(j===null||w===null){x("Start and end must be mm:ss");return}if(w<=j){x("End must be after start");return}x(null),await m.addChapter(e.id,{label:o.trim(),startMs:j,endMs:w}),a(""),d(""),g(""),t()}async function I(m){const j=ae();if(!j)return;const w=ee(S),U=ee(E);if(T.trim()===""){z("Label required");return}if(w===null||U===null){z("Start and end must be mm:ss");return}if(U<=w){z("End must be after start");return}z(null),await j.updateChapter(e.id,m,{label:T.trim(),startMs:w,endMs:U}),N(null),t()}async function $(m){const j=ae();j&&(await j.removeChapter(e.id,m),M===m&&p(),t())}return s.jsxs(Ht,{children:[s.jsx(_t,{children:"Chapters"}),r.length===0?s.jsx(Gt,{children:"No chapters yet. Add markers to slice the flight."}):s.jsx(qt,{children:r.slice().sort((m,j)=>m.startMs-j.startMs).map(m=>{const j=M===m.id;return s.jsx(Wt,{children:j?s.jsxs(s.Fragment,{children:[s.jsx(H,{type:"text",value:T,onChange:w=>R(w.target.value),"aria-label":"Chapter label"}),s.jsx(H,{type:"text",value:S,onChange:w=>L(w.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),s.jsx(H,{type:"text",value:E,onChange:w=>A(w.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),s.jsxs(Fe,{children:[s.jsx(Qt,{type:"button",onClick:()=>void I(m.id),children:"Save"}),s.jsx(er,{type:"button",onClick:p,children:"Cancel"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Yt,{title:m.label,children:m.label}),s.jsxs(Jt,{children:[_(m.startMs)," – ",_(m.endMs)]}),s.jsxs(Xt,{children:["(",_(m.endMs-m.startMs),")"]}),s.jsxs(Fe,{children:[s.jsx(Zt,{type:"button",onClick:()=>B(m),children:"edit"}),s.jsx(tr,{type:"button",onClick:()=>void $(m.id),"aria-label":`Remove chapter ${m.label}`,children:"×"})]})]})},m.id)})}),y&&s.jsx(Me,{children:y}),s.jsxs(rr,{children:[s.jsx(H,{type:"text",placeholder:"Chapter name",value:o,onChange:m=>a(m.target.value),"aria-label":"New chapter label"}),s.jsx(H,{type:"text",placeholder:"0:00",value:i,onChange:m=>d(m.target.value),"aria-label":"New chapter start (mm:ss)"}),s.jsx(H,{type:"text",placeholder:_(n),value:f,onChange:m=>g(m.target.value),"aria-label":"New chapter end (mm:ss)"}),s.jsx(nr,{type:"button",onClick:()=>void k(),children:"+ add"})]}),v&&s.jsx(Me,{children:v})]})}const Ht=c.div`
  padding: var(--inset-chapters-band);
  background: var(--color-surface-app);
  border-bottom: 1px solid var(--color-border-subtle);
`,_t=c.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: var(--gap-heading-hint);
`,Gt=c.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  margin-bottom: var(--gap-related-comfortable);
`,qt=c.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  margin-bottom: var(--gap-related-comfortable);
`,Wt=c(At).attrs({cols:"minmax(120px, 1fr) auto auto auto",gap:"related-comfortable"})`
  font-size: var(--font-size-compact);
`,Yt=c.span`
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Jt=c.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Xt=c.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-faint);
  font-size: var(--font-size-compact);
  white-space: nowrap;
`,Fe=c.span`
  display: inline-flex;
  gap: var(--gap-related);
  align-items: center;
  justify-self: end;
`,Zt=c.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,Qt=c.button`
  background: var(--color-go-status);
  border: 1px solid var(--color-go-status);
  color: var(--color-go-on-status);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,er=c.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,tr=c.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-base);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,rr=c.div`
  display: grid;
  grid-template-columns: minmax(120px, 1fr) 80px 80px auto;
  gap: var(--gap-related);
  align-items: center;
  margin-top: var(--gap-actions);
`,nr=c.button`
  background: none;
  border: 1px dashed var(--color-text-faint);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  white-space: nowrap;
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,Me=c.div`
  margin-top: var(--gap-sub-readout);
  font-size: var(--font-size-compact);
  color: var(--color-tag-red-fg);
`,Ze=new WeakMap;function or(e,t){Ze.set(e,t)}function sr(e){return Ze.get(e)}const ue={t:[],v:[]};function ar(e){switch(e){case xe.LastBeforeBlackout:return"last-before-blackout";case xe.Recorded:return"recorded";default:return null}}function ir(e){const t=[];let r=null;for(let n=0;n<e.length;n++){const o=ar(e[n].meta.staleness);if(o===null){r=null;continue}if(r!==null&&r.status===o){r.to=n;continue}r={from:n,to:n,status:o},t.push(r)}return t}const ze=new WeakMap;function lr(e){const t=ze.get(e);if(t)return t;const r={t:e.t,v:e.v.map(n=>{const o=Z(n);return typeof o=="number"?o:Number.NaN}),basis:e.basis};return ze.set(e,r),r}function cr(e,t){return e.length===t.length&&e.every((r,n)=>r.to===t[n].to&&r.v===t[n].v)}function dr(e,t){return e.length===t.length&&e.every((r,n)=>r.from===t[n].from&&r.to===t[n].to&&r.status===t[n].status)}function Te(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((r,n)=>Object.is(r,t[n]))}function ur(e,t){return e.length===t.length&&e.every((r,n)=>r.from===t[n].from&&r.to===t[n].to&&r.basis===t[n].basis&&r.bandKind===t[n].bandKind&&Te(r.bandLo,t[n].bandLo)&&Te(r.bandHi,t[n].bandHi))}function Qe(e,t){return[e?.toWire(),t?.toWire()]}function pr(e,t,r,n,o){const a=new Map((t.sampleRange(r,n,o)??[]).map(f=>[f.validAt,JSON.stringify(f.payload)])),i=[];let d;for(const f of e){const g=a.get(f.validAt)??JSON.stringify(f.payload);g!==d&&(d=g,i.push(f))}return i}function Z(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function hr(e,t){const r=h.useRef(ue),n=h.useRef(void 0),o=Ct(),a=Ft(),i=e,d=h.useCallback(g=>{if(!o||!a)return()=>{};const v=Mt(o,a,i),x=a.subscribeFrame(g);return()=>{x(),v()}},[o,a,i]),f=h.useCallback(()=>{if(!a)return ue;const g=a.currentFrame(),v=`${i}\0${t}\0${g.viewUt}\0${a.clock.getEpoch()}\0${a.sampleStatus(i,g)}\0${a.dataRevision()}`;if(n.current===v)return r.current;const x=fr(a,i,t,g.viewUt,r.current);return n.current=v,r.current=x,x},[a,i,t]);return h.useSyncExternalStore(d,f)}function fr(e,t,r,n,o){const a=n-r,i=e.isDerivedTopic(t)?e.sampleDerivedRange(t,a,n):e.sampleRange(t,a,n),d=e.sampleReckonedTail(t,a,n),f=e.tagsOf(t),g=f.kind==="event"?"none":f.kind==="discrete"?"step":"linear",v=f.kind==="event"?pr(i??[],e,f.topic,a,n):i??[];if(v.length===0&&d.length===0)return ue;const x=v.map(p=>p.validAt),M=v.map(p=>Z(p.payload)),N=v.map(p=>p.payload),T=new Map,R=[],S=[];for(let p=0;p<v.length;p++){if(p===0)continue;if(g==="none")break;if(v[p].meta.gapSinceUt!=null){R.push(p);continue}if(Object.is(M[p],M[p-1]))continue;const k=e.gapModel(t,v[p-1],v[p]);if(k?.carried===!1){R.push(p);continue}k?.carried&&S.push({to:p,...lr(k)})}const L=ir(v),E=[];for(const p of d){const k=x.length;x.push(p.atUt),M.push(Z(p.value)),N.push(p.value);const{bandLo:I,bandHi:$}=p,[m,j]=Qe(I,$),w=m!==void 0&&j!==void 0?p.bandKind:void 0;T.set(k,{basis:p.basis,band:I!==void 0&&$!==void 0&&w!==void 0?{lo:I,hi:$,kind:w}:void 0});const U=E[E.length-1],oe=U!==void 0&&U.basis===p.basis&&U.to===k-1&&U.bandKind===w;if(U!==void 0&&oe){U.to=k,m!==void 0&&j!==void 0&&w!==void 0&&(U.bandLo?.push(m),U.bandHi?.push(j));continue}if(m!==void 0&&j!==void 0&&w!==void 0){E.push({from:k,to:k,basis:p.basis,bandLo:[m],bandHi:[j],bandKind:w});continue}E.push({from:k,to:k,basis:p.basis})}const A=o,y=A.breaks??[];if(A.t.length===x.length&&A.t.every((p,k)=>p===x[k])&&A.v.every((p,k)=>Object.is(p,M[k]))&&y.length===R.length&&y.every((p,k)=>p===R[k])&&cr(A.bridges??[],S)&&dr(A.spans??[],L)&&ur(A.reckoned??[],E)&&A.windowEndAt===(E.length>0?n:void 0)&&(A.interpolation??"linear")===g)return A;const B={t:x,v:M,basis:"ut-seconds",breaks:R,bridges:S,spans:L,reckoned:E,interpolation:g,windowEndAt:E.length>0?n:void 0};return or(B,{payloads:N,modelled:T}),B}const gr=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function q(e){const t=e.split(".").flatMap(a=>a.split(/(?=[A-Z])/)).map(a=>a.toLowerCase()).filter(a=>a.length>0).map(a=>gr[a]??a);if(t.length===0)return e;const[r,...n]=t;return[r===r.toUpperCase()?r:r[0].toUpperCase()+r.slice(1),...n].join(" ")}function mr(e,t){const r=t.split("."),n=[];let o=[],a=!1;for(let i=0;i<r.length;i++){const d=mt(e,r.slice(0,i+1).join("."));if(d===void 0){o.push(r[i]);continue}o.length>0&&n.push(q(o.join("."))),o=[],n.push(d),a=!0}return a?(o.length>0&&n.push(q(o.join("."))),n.join(" › ")):q(t)}function vr(e,t,r){return r.has(e)?!0:gt(`${e}.${t}`)?.rawTopic===e}const br=Object.freeze({"vessel.target":"Target"});function xr(e,t){const r=mr(e,t),n=br[e];if(n===void 0)return r;const o=r.split(" ")[0],a=o===o.toUpperCase()?r:r[0].toLowerCase()+r.slice(1);return`${n} ${a}`}function yr(e,t){return{key:`${e}.${t.path}`,label:xr(e,t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function Sr(e,t){const r=new Set(t),n=[...new Set([...pt(),...e,...t])].filter(d=>!ht(d)).sort(),o=[],a=[],i=[];for(const d of n){if(ft(d)){i.push(d);continue}const f=It(d).filter(g=>vr(d,g.path,r));if(f.length===0){a.push(d);continue}for(const g of f)o.push(yr(d,g))}return{keys:o,undescribed:a,collections:i}}function ne(){return[...zt.map(e=>e.topic),...dt().map(e=>e.topic)]}let ie;function me(e,t){const r=`${e.join(",")}|${t.join(",")}|${ut()}`;if(ie?.key===r)return ie.built;const n=Sr(e,t);return ie={key:r,built:n},n}function et(e=W(),t=ne()){return me(e,t).keys}function wr(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!kr.has(e.unit)}const kr=new Set(["bool","enum","flag","id","raw","text"]);function jr(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function go(e,t){const r=e?.enumEncoding;return r?.by!=="ordinal"||typeof t!="number"?t:r.names[t]??t}function mo(e=W(),t=ne()){return me(e,t).undescribed}function vo(e=W(),t=ne()){return me(e,t).collections}function Ee(){return ne().join(",")}function tt(){const e=h.useSyncExternalStore(vt,W,W),t=h.useSyncExternalStore(bt,Ee,Ee);return h.useMemo(()=>et(e,t.split(",")),[e,t])}function Cr(){const e=tt();return h.useMemo(()=>e.filter(wr),[e])}function bo(){const e=tt();return h.useMemo(()=>e.filter(jr),[e])}const Ae=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function Ne(){return he("missionHistory")}function Fr({missionId:e,fromUt:t,toUt:r}){const n=Cr(),[o,a]=h.useState(new Set),[i,d]=h.useState([]),[f,g]=h.useState(!1),[v,x]=h.useState(null);h.useEffect(()=>()=>{Ne()?.evictFullHistoryStore(e)},[e]);const M=h.useMemo(()=>n.map(y=>({key:y.key,label:y.label??y.key,unit:y.unit,group:zr(y.key)})),[n]);h.useEffect(()=>{const y=Ne();if(!y||o.size===0){d([]),x(null);return}let z=!1;g(!0),x(null);const B=[...o];return Promise.all(B.map(p=>y.queryRange(p,t,r,e))).then(p=>{if(z)return;const k=new Map(n.map($=>[$.key,$])),I=B.map(($,m)=>{const j=Mr(p[m],t),w=k.get($);return{id:$,label:w?.label??$,axis:"primary",color:Ae[m%Ae.length],type:"line",data:j}});d(I)}).catch(p=>{z||x(p instanceof Error?p.message:String(p))}).finally(()=>{z||g(!1)}),()=>{z=!0}},[o,e,t,r,n]);const N=Math.max(0,(r-t)*1e3),T=N>0?[0,N]:[0,6e4],R=i.some(y=>y.data.x.length>0),S=[...o].map(y=>n.find(z=>z.key===y)),L=[...new Set(S.map((y,z)=>y?.label??[...o][z]))],E=[...new Set(S.map(y=>y?.unit))],A=Ot(L.length>0&&L.length<=2?L.join(" / "):void 0,E.length===1?E[0]:void 0);return s.jsxs(Tr,{children:[s.jsxs(Er,{children:[s.jsx(Ar,{children:"Series"}),s.jsx(Dt,{keys:M,value:o,onChange:a,placeholder:"Add a data key...",emptyHint:M.length===0?"No numeric keys in the current schema":"No matches"})]}),v&&s.jsxs(Lr,{role:"alert",children:["Failed to load samples: ",v]}),o.size===0?s.jsx(Re,{children:"Pick one or more numeric telemetry keys above to plot them."}):s.jsxs(Nr,{children:[f&&s.jsx(Rr,{children:"Loading..."}),!f&&!R&&s.jsx(Re,{children:"No recorded samples for the selected keys."}),R&&s.jsx($t,{chrome:"bare",series:i,xDomain:T,xAxisLabel:"Mission time",yAxisLabel:A,height:260})]})]})}function Mr(e,t){const r=[],n=[];for(let o=0;o<e.t.length;o++){const a=Z(e.v[o]);typeof a!="number"||!Number.isFinite(a)||(r.push((e.t[o]-t)*1e3),n.push(a))}return{x:r,y:n}}function zr(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const Tr=c.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border-top: 1px solid var(--color-surface-raised);
`,Er=c.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,Ar=c.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Nr=c.div`
  position: relative;
  min-height: 260px;
`,Re=c.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  padding: var(--inset-chart-empty);
  text-align: center;
`,Rr=c.div`
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
`,Lr=c.div`
  font-size: var(--font-size-compact);
  color: var(--color-nogo-text);
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  padding: var(--inset-surface);
  border-radius: var(--radius-regular);
`;function $r(e,t){const{firstValidUt:r,lastValidUt:n}=e;return r===void 0||n===void 0?[]:t.filter(o=>o.validAt>=r&&o.validAt<=n)}function Le(e,t){t.firstValidUt!==void 0&&(e.firstValidUt=Math.min(e.firstValidUt??t.firstValidUt,t.firstValidUt)),t.lastValidUt!==void 0&&(e.lastValidUt=Math.max(e.lastValidUt??t.lastValidUt,t.lastValidUt))}function Ur(e,t){const r=[],n=new Map;for(const o of e){const a=o.lastSampleAt-o.launchedAt,i=o.endReason===void 0&&o.outcome===void 0&&t.has(o.vesselName),d=i?n.get(o.vesselName):void 0;if(d){d.ids.push(o.id),d.launchedAt=Math.min(d.launchedAt,o.launchedAt),d.durationMs+=a,d.sampleCount+=o.sampleCount,Le(d,o);continue}const f={flight:o,ids:[o.id],stillFlying:i,launchedAt:o.launchedAt,durationMs:a,sampleCount:o.sampleCount};Le(f,o),r.push(f),i&&n.set(o.vesselName,f)}return r}function Or(e){return new Date(e).toLocaleString()}function Dr(e,t){return de(J("s",(t-e)/1e3))}const Br={[K.Recovered]:"Recovered",[K.Crashed]:"Crashed",[K.Reverted]:"Reverted",[K.Destroyed]:"Destroyed",[K.Terminated]:"Terminated",[K.Docked]:"Docked"};function Ir(e,t){if(e===void 0)return"Not known";const r=Br[e]??"Not known";return e===K.Docked&&t?`${r} with ${t}`:r}function Pr(e){const t=[e.fundsEarned===null?null:`+${de(J("funds",e.fundsEarned),{decimals:0})}`,e.scienceEarned===null?null:`+${de(J("science",e.scienceEarned),{decimals:1})}`].filter(r=>r!==null);return[`Recovered ${e.recoveryLocation}`,e.recoveryFactor,t.length>0?t.join(" · "):"no funds or science awarded"].filter(r=>r!=="").join(" · ")}function D(){return he("missionHistory")}function $e(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),r=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${r}.fixture.json`}function Ue(e,t){const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(r),o=document.createElement("a");o.href=n,o.download=t,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(n)}function xo({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:r=!1}={}){const n=e==="main",[o,a]=h.useState([]),[i,d]=h.useState([]),[f,g]=h.useState(null),[v,x]=h.useState(!1),[M,N]=h.useState(!1),[T,R]=h.useState(null),[S,L]=h.useState(()=>new Set),[E,A]=h.useState(()=>Ye()),y=ge("trackingStation.catalog"),z=h.useMemo(()=>{const u=y.state==="observed"||y.state==="held"?y.value:void 0;return new Set((u?.entries??[]).filter(l=>l.contact!==xt.Gone).map(l=>l.name))},[y]),B=h.useMemo(()=>Ur(o,z),[o,z]),p=h.useCallback(async()=>{const u=D();if(!u)return;let l;try{l=await u.listFlights()}catch(b){console.warn("FlightsManager: failed to load flights",b);return}if(a(l.sort((b,F)=>F.launchedAt-b.launchedAt)),typeof u.listContractFinishes=="function"){try{d(await u.listContractFinishes())}catch(b){console.warn("FlightsManager: failed to load contract finishes",b)}L(b=>{const F=new Set;for(const C of l)b.has(C.id)&&F.add(C.id);return F.size===b.size?b:F})}},[]);h.useEffect(()=>{p()},[p]),h.useEffect(()=>{const u=D();if(typeof u?.onFlightListChange=="function")return u.onFlightListChange(()=>{p()})},[p]);const k=async u=>{const l=D();if(l){for(const b of u)await l.deleteFlight(b);g(null),await p()}},I=async u=>{const l=D();if(!l)return;const b=await l.exportFlight(u.id);Ue(b,$e(u))},$=async u=>{const l=D();if(!l)return;const b=await l.exportFlight(u.id),F={id:u.id,vesselName:u.vesselName,launchedAt:u.launchedAt,firstFrameUt:u.firstFrameUt??0,lastFrameUt:u.lastFrameUt??0,frameCount:u.sampleCount};Je().start(F,b)},m=async()=>{const u=D();u&&(await u.clearAllFlights(),x(!1),await p())},j=u=>{L(l=>{const b=new Set(l),F=u.every(C=>b.has(C));for(const C of u)F?b.delete(C):b.add(C);return b})},w=()=>{L(u=>u.size===o.length?new Set:new Set(o.map(l=>l.id)))},U=async()=>{const u=D();if(!u)return;const l=Array.from(S);for(const b of l)await u.deleteFlight(b);N(!1),await p()},oe=async u=>{const l=D();l&&(await l.setFlightStarred(u.id,!u.starred),await p())},at=async u=>{const l=D(),b=u?Q:0;wt(b),A(b),u&&l&&(await l.pruneFlightsKeepLatest({keepCount:b}),await p())},it=async()=>{const u=D();if(!u)return;const l=Array.from(S),b=new Map(o.map(F=>[F.id,F]));for(const F of l){const C=b.get(F);if(!C)continue;const ct=await u.exportFlight(F);Ue(ct,$e(C))}},ve=o.length>0&&S.size===o.length,lt=S.size>0&&S.size<o.length,be=(()=>{const u=[...o].sort((F,C)=>C.launchedAt-F.launchedAt);let l=0,b=0;for(const F of u)F.starred||(l+=1,l>Q&&(b+=1));return b})();return s.jsxs(Vr,{children:[n&&s.jsx(Kr,{missionHistoryEnabled:t,recordAllTopics:r}),o.length===0?s.jsx(Nt,{children:"No flight history recorded yet"}):s.jsxs(s.Fragment,{children:[s.jsxs(Yr,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx(nn,{children:s.jsx(ce,{ref:u=>{u&&(u.indeterminate=lt)},checked:ve,onChange:w,"aria-label":ve?"Clear selection":"Select all flights"})}),s.jsxs(on,{children:[s.jsx(ye,{size:12,fill:"currentColor","aria-hidden":"true"}),s.jsx(Oe,{children:"Kept (exempt from auto-delete)"})]}),s.jsx(G,{children:"Vessel"}),s.jsx(G,{children:"Launched"}),s.jsx(G,{title:"Game time, not time at the desk",children:"Duration"}),s.jsx(G,{children:"Samples"}),s.jsx(G,{children:"Ended"}),s.jsx(G,{children:s.jsx(Oe,{children:"Actions"})})]})}),s.jsx("tbody",{children:B.map(u=>{const l=u.flight,b=T===l.id,F=u.ids.every(C=>S.has(C));return s.jsxs(h.Fragment,{children:[s.jsxs(Ie,{$current:!1,children:[s.jsx(P,{children:s.jsx(ce,{checked:F,onChange:()=>j(u.ids),"aria-label":`Select flight ${l.vesselName||l.id}`})}),s.jsx(P,{children:s.jsx(sn,{type:"button",$on:!!l.starred,onClick:()=>void oe(l),"aria-label":l.starred?`Unstar ${l.vesselName||"flight"}`:`Star ${l.vesselName||"flight"} (keep from auto-delete)`,"aria-pressed":!!l.starred,title:l.starred?"Kept from auto-delete":"Keep from auto-delete",children:s.jsx(ye,{size:"var(--icon-size-control)",fill:l.starred?"currentColor":"none"})})}),s.jsxs(P,{children:[l.vesselName||we,l.launchName&&s.jsxs(Zr,{children:["launched as ",l.launchName]}),l.evaKerbals&&l.evaKerbals.length>0&&s.jsxs(Jr,{children:["EVA: ",l.evaKerbals.join(", ")]}),$r(u,i).map(C=>s.jsxs(Xr,{children:[s.jsx(Rt,{size:"sm",tone:C.outcome==="Completed"?"go":"nogo",children:C.outcome==="Completed"?"completed":"failed"}),s.jsx("span",{children:C.title??we}),s.jsx(Pe,{children:s.jsx(Se,{value:C.validAt,context:{frame:"scet"}})}),s.jsx(Pe,{children:s.jsx(Se,{value:C.deliveredAt,context:{frame:"received"}})})]},`${C.id}:${C.outcome}`)),l.outcome?.kind==="recovered"&&s.jsx(Ke,{$tone:"go",title:Pr(l.outcome),children:"recovered"}),l.outcome?.kind==="crashed"&&s.jsx(Ke,{$tone:"nogo",title:`Crashed at ${l.outcome.body} (${l.outcome.situation}) · ${l.outcome.partsLostCount} part(s) lost${l.outcome.kerbalsKilled.length>0?` · KIA: ${l.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),s.jsx(P,{children:Or(u.launchedAt)}),s.jsx(P,{children:Dr(0,u.durationMs)}),s.jsx(P,{children:u.sampleCount.toLocaleString()}),s.jsx(P,{children:u.stillFlying?"Still flying":Ir(l.endReason,l.joinedVesselName)}),s.jsx(P,{children:s.jsxs(Hr,{children:[s.jsx(_r,{type:"button",$open:b,onClick:()=>R(b?null:l.id),"aria-label":b?"Close graph":"Graph this flight","aria-expanded":b,children:b?"− graph":"＋ graph"}),n&&s.jsx(Gr,{type:"button",onClick:()=>void $(l),"aria-label":`Replay ${l.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),s.jsx(De,{type:"button",onClick:()=>void I(l),"aria-label":`Download fixture for ${l.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),f===l.id?s.jsxs(le,{children:[s.jsx(te,{onClick:()=>void k(u.ids),children:"Delete"}),s.jsx(re,{onClick:()=>g(null),children:"Cancel"})]}):s.jsx(Qr,{onClick:()=>g(l.id),children:"×"})]})})]}),b&&s.jsx(Ie,{$current:!1,children:s.jsxs(P,{colSpan:8,style:{padding:0},children:[s.jsx(Vt,{flight:l,onChange:()=>void p()}),s.jsx(Fr,{missionId:l.id,fromUt:l.firstValidUt??l.firstFrameUt??0,toUt:l.lastValidUt??l.lastFrameUt??0})]})})]},l.id)})})]}),s.jsxs(en,{children:[s.jsx(tn,{children:S.size>0&&(M?s.jsxs(le,{children:[s.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",S.size," selected flight",S.size===1?"":"s","?"]}),s.jsx(te,{onClick:()=>void U(),children:"Delete"}),s.jsx(re,{onClick:()=>N(!1),children:"Cancel"})]}):s.jsxs(s.Fragment,{children:[s.jsxs(rn,{children:[S.size," selected"]}),s.jsx(De,{type:"button",onClick:()=>void it(),title:"Download fixtures for the selected flights",children:"↓ download"}),s.jsx(te,{onClick:()=>N(!0),children:"Delete"}),s.jsx(re,{onClick:()=>L(new Set),children:"Clear"})]}))}),s.jsxs(an,{children:[s.jsxs(ln,{title:`Keep the ${Q} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[s.jsx(ce,{checked:E>0,onChange:u=>void at(u.target.checked)}),s.jsxs("span",{children:["Keep latest ",Q,E===0&&be>0&&s.jsxs(cn,{children:[" ","(",be," would be deleted)"]})]})]}),v?s.jsxs(le,{children:[s.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),s.jsx(te,{onClick:()=>void m(),children:"Clear all"}),s.jsx(re,{onClick:()=>x(!1),children:"Cancel"})]}):s.jsx(dn,{onClick:()=>x(!0),children:"Clear all"})]})]})]})]})}function Kr({missionHistoryEnabled:e,recordAllTopics:t}){const r=h.useSyncExternalStore(Kt,Ce,Ce);return s.jsxs(qr,{children:[r.saveFailure&&s.jsxs(Ut,{tone:"nogo",title:"Flight not saved",children:[r.saveFailure.vesselName,": ",r.saveFailure.cause]}),e?r.recording?s.jsxs(Wr,{children:["● recording ",r.vesselName??"flight"," (",r.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):s.jsx(Be,{children:"Auto-record armed: capture starts the moment a flight begins."}):s.jsx(Be,{children:"Mission history is off, enable it in Settings to auto-record."})]})}const Oe=c.span`
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
`,Vr=c.div`
  display: flex;
  flex-direction: column;
  min-width: min(500px, 100%);
  /* Graph panels expand in-place, so let the whole thing scroll rather than
     clipping the chart. Horizontal scroll catches narrow viewports where the
     row-action button cluster won't fit even in the wide flight modal. */
  max-height: 80vh;
  max-height: 80dvh;
  overflow: auto;
`,Hr=c.div`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
`,_r=c.button`
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
`,De=c.button`
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
`,Gr=c.button`
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
`,qr=c.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-section);
  padding-bottom: var(--inset-toolbar-bottom);
  margin-bottom: var(--gap-toolbar);
  border-bottom: 1px solid var(--color-border-subtle);
`,Be=c.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Wr=c.span`
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
`,Yr=c.table`
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
`,Ie=c.tr`
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
`,Jr=c.span`
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,Xr=c.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0 var(--gap-trailing-mark);
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,Pe=c.span`
  white-space: nowrap;
`,Zr=c.span`
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,Ke=c.span`
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
`,Qr=c.button`
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
`,en=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-section);
  padding: var(--inset-table-footer);
  border-top: 1px solid var(--color-border-subtle);
`,tn=c.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-height: 24px;
`,rn=c.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,nn=c.th`
  width: 28px;
  padding: var(--inset-surface);
  border-bottom: 1px solid var(--color-border-subtle);
`,ce=c.input.attrs({type:"checkbox"})`
  cursor: pointer;
  margin: 0;
`,on=c.th`
  width: 24px;
  /* The one cell that cannot take --inset-surface beside Th and ThCheckbox: a
     24px column carrying a star glyph needs more vertical than horizontal. At
     (6,8) the content box is 8px and the glyph clips. */
  padding: var(--inset-table-narrow-header);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
  text-align: center;
`,sn=c.button`
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
`,an=c.div`
  display: flex;
  align-items: center;
  gap: var(--gap-section);
`,ln=c.label`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  cursor: pointer;
  user-select: none;
`,cn=c.span`
  color: var(--color-nogo-muted);
`,dn=c.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-dim);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,un=new yt({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class yo{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new kt;historyCache=new Map;changesInOrder=new Map;async connect(){await this.pruneToKeepCount()}disconnect(){}schema(){return et()}subscribe(t,r){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,r,n,o){if(!o)return{t:[],v:[]};const a=Tt(t);if(!a)return{t:[],v:[]};const i=await this.getFullHistoryStore(o);if(!i)return{t:[],v:[]};const d=i.isDerivedTopic(a)?i.sampleDerivedRange(a,r,n):i.sampleRange(a,r,n);return d?{t:d.map(f=>f.validAt),v:d.map(f=>f.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(Y)}async getFlight(t){const r=await this.missionStore.getMissionMeta(t);return r?Y(r):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.meta.id)}async saveContractFinish(t){await this.missionStore.saveContractFinish(t),this.flightListSubscribers.fire()}listContractFinishes(){return this.missionStore.listContractFinishes()}async saveMissionPart(t,r,n){await this.inOrder(t.id,()=>this.missionStore.saveMissionPart(t,r,n)),this.historyCache.delete(t.id),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.id)}async pruneToKeepCount(t){const r=Ye();if(!(r<=0))try{await this.pruneFlightsKeepLatest({keepCount:r,keepId:t})}catch(n){ke.warn("[MissionHistorySource] keep latest could not prune",{err:String(n)})}}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,r){const n=await this.missionStore.getMissionMeta(t);!n||!!n.starred===r||(await this.missionStore.updateMissionMeta(t,{starred:r}),this.flightListSubscribers.fire())}async setFlightEndReason(t,r,n,o){await this.inOrder(t,async()=>{const a=await this.missionStore.getMissionMeta(t);if(!a){ke.warn("[MissionHistorySource] end reason for a mission not stored",{id:t});return}a.endReason===void 0&&(await this.missionStore.updateMissionMeta(t,{endReason:r,...o===void 0?{}:{joinedVesselId:o},...n===void 0?{}:{joinedVesselName:n}}),this.flightListSubscribers.fire())})}inOrder(t,r){const n=this.changesInOrder.get(t),o=n?n.then(r,r):r(),a=o.catch(()=>{});return this.changesInOrder.set(t,a),a.then(()=>{this.changesInOrder.get(t)===a&&this.changesInOrder.delete(t)}),o}async reopenFlight(t){await this.missionStore.updateMissionMeta(t,{endReason:void 0,joinedVesselId:void 0,joinedVesselName:void 0}),this.flightListSubscribers.fire()}async addChapter(t,r){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const a={id:r.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:r.label,startMs:r.startMs,endMs:r.endMs},i=[...n.chapters??[],a];return await this.missionStore.updateMissionMeta(t,{chapters:i}),this.flightListSubscribers.fire(),Y({...n,chapters:i})}async updateChapter(t,r,n){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const a=(o.chapters??[]).map(i=>i.id===r?{...i,...n}:i);return await this.missionStore.updateMissionMeta(t,{chapters:a}),this.flightListSubscribers.fire(),Y({...o,chapters:a})}async removeChapter(t,r){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const o=(n.chapters??[]).filter(a=>a.id!==r);return await this.missionStore.updateMissionMeta(t,{chapters:o}),this.flightListSubscribers.fire(),Y({...n,chapters:o})}async pruneFlightsKeepLatest(t){const r=await this.missionStore.pruneMissionsKeepLatest(t);for(const n of r)this.historyCache.delete(n);return r.length>0&&this.flightListSubscribers.fire(),r}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const r=this.historyCache.get(t);if(r)return r;const n=(async()=>{const o=await this.missionStore.getMissionFixture(t);if(!o)throw new Error(`mission fixture not found: ${t}`);return un.record(),Bt(o.fixture)})();this.historyCache.set(t,n);try{return await n}catch{this.historyCache.delete(t);return}}}function Y(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchName:e.launchName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,endReason:e.endReason,evaKerbals:e.evaKerbals,joinedVesselId:e.joinedVesselId,joinedVesselName:e.joinedVesselName,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt,firstValidUt:e.firstValidUt,lastValidUt:e.lastValidUt}}function rt(e){const t=new Set(e.parts.map(o=>Number(o.id))),r=e.parts.map(pn),n=r.find(o=>o.parentFlightId==null)??r.find(o=>!t.has(o.parentFlightId));for(const o of r)o.parentFlightId!=null&&!t.has(o.parentFlightId)&&(o.parentFlightId=n&&n!==o?n.flightId:null);return{topologySeq:e.parts.length,rootFlightId:n?n.flightId:0,parts:r}}function pe(e){return e?[e.x.magnitude,e.y.magnitude,e.z.magnitude]:void 0}function pn(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage??null,crewCapacity:0,maxTemp:e.maxTemp?.magnitude??null,crashTolerance:0,dryMass:e.dryMass?.magnitude??null,orgPos:[O(e.position.x),O(e.position.y),O(e.position.z)],up:pe(e.up),forward:pe(e.forward),bounds:{size:{x:O(e.bounds.size.x),y:O(e.bounds.size.y),z:O(e.bounds.size.z)},center:e.bounds.center?{x:O(e.bounds.center.x),y:O(e.bounds.center.y),z:O(e.bounds.center.z)}:void 0},shape:e.shape??void 0,shapePoses:hn(e.shapePoses),fairing:fn(e.fairing),modules:e.modules}}function hn(e){if(!(!e||e.length===0))return e.map(({mesh:t,shown:r,transform:n})=>n&&n.length===12?{mesh:t,shown:r,transform:n.map(o=>o.magnitude)}:{mesh:t,shown:r})}function fn(e){if(!e)return;const t=pe(e.axis)??[0,0,0],r=e.rings.map(O),n=[];for(let o=0;o+1<r.length;o+=2)n.push({h:r[o],r:r[o+1]});return{pivot:{x:O(e.pivot.x),y:O(e.pivot.y),z:O(e.pivot.z)},axis:{x:t[0],y:t[1],z:t[2]},rings:n}}function gn(e){return e.currentTemp==null?null:{temperature:je(e.currentTemp.magnitude),maxTemperature:e.maxTemp==null?null:je(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp?.magnitude??null}}function mn(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),gn(r));return t}function vn(e){const t={};for(const[r,n]of Object.entries(e.resources))t[r]={amount:n.amount?.magnitude??null,maxAmount:n.maxAmount?.magnitude??null,...n.flow!=null?{flow:n.flow.magnitude}:{},...n.nominalFlow!=null?{nominalFlow:n.nominalFlow.magnitude}:{},...n.unratedProcess===!0?{unratedProcess:!0}:{}};return t}function nt(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),vn(r));return t}function bn(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function xn(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map(bn)}}function yn(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),xn(r));return t}function O(e){return e.magnitude}function ot(e){return Array.from(new TextEncoder().encode(e),t=>/[A-Za-z0-9_-]/.test(String.fromCharCode(t))?String.fromCharCode(t):`%${t.toString(16).toUpperCase().padStart(2,"0")}`).join("")}function So(e,t){return`spaceCenter.craft.${e}.${ot(t)}.parts`}function wo(e,t){const r=ot(t),n=fe(`spaceCenter.craft.${e}.${r}.parts`),o=n.state==="observed"||n.state==="held"?n.value:void 0;return h.useMemo(()=>{if(!o)return;const a=jt("CraftFileParts",structuredClone(o));return{topology:rt(a),resourcesByFlightId:nt(a)}},[o])}const Sn=[];function wn(e){const t=[se(e.dvRadial,0),se(e.dvNormal,0),se(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function ko(){const e=fe("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return h.useMemo(()=>!Array.isArray(t)||t.length===0?Sn:t.map(wn),[t])}const kn="parts.shape.";function jn(e){return`${kn}${e}`}function Cn(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function Ve(e){const t=Cn(e),r=new DataView(t.buffer,t.byteOffset,t.byteLength),n=new Uint16Array(t.byteLength>>1);for(let o=0;o<n.length;o++)n[o]=r.getUint16(o*2,!0);return n}function Fn(e){const t=[];for(const r of e.meshes){const n=Ve(r.positions),o=Ve(r.indices),a=[r.min.x,r.min.y,r.min.z],i=[r.max.x,r.max.y,r.max.z],d=new Float32Array(n.length-n.length%3);for(let g=0;g<d.length;g++){const v=g%3;d[g]=a[v]+n[g]/65535*(i[v]-a[v])}const f=d.length/3;o.length%3!==0||o.some(g=>g>=f)||t.push({key:r.key,shown:r.shown,positions:d,indices:o,sourceTriangles:r.sourceTriangles})}return{name:e.name,variant:e.variant??null,meshes:t}}const He=new Map;function Mn(e,t){const r=He.get(e);if(r&&r.wire===t)return r.shape;const n=Fn(t);return He.set(e,{wire:t,shape:n}),n}function jo(e){const t=fe(jn(e)),r=t.state==="observed"||t.state==="held"?t.value:void 0;return h.useMemo(()=>r?Mn(e,r):void 0,[e,r])}function Co(e){const t=ge("vessel.parts"),r=t.state==="observed"||t.state==="held"?t.value:void 0,n=h.useMemo(()=>mn(r),[r]),o=h.useMemo(()=>nt(r),[r]),a=h.useMemo(()=>yn(r),[r]),i=[...e].sort((d,f)=>d-f).join(",");return h.useMemo(()=>{const d=i.length===0?[]:i.split(",").map(Number),f=new Map;for(const g of d)f.set(g,{thermal:n.get(g)??null,resources:o.get(g)??{},partState:a.get(g)});return f},[i,n,o,a])}const _e=Object.freeze({status:"none"}),zn={t:[],readings:[]};function st(e){return e==="recorded"||e==="last-before-blackout"?e:void 0}function Tn(e){return e!==null&&typeof e=="object"&&"magnitude"in e}function En(e,t){if(Tn(e))return{value:e,...t};if(typeof e=="number")return{value:J(t.lo.unit,e),...t}}function An(e){const t=sr(e);if(t===void 0)return zn;const r=new Map;for(const a of e.spans??[]){const i=st(a.status);if(i!==void 0)for(let d=a.from;d<=a.to;d++)r.set(d,i)}let n;const o=e.t.map((a,i)=>{const d=J("ut",a),f=t.payloads[i],g=t.modelled.get(i);if(g!==void 0){const x={status:"available",modelled:f,atUt:d,beyondReceived:!0,basis:g.basis,band:g.band?En(f,g.band):void 0};return n===void 0?{state:"pending",reckoning:x}:{state:"held",value:n.payload,asOfUt:n.at,grade:"held",reckoning:x}}n={payload:f,at:d};const v=r.get(i);return v!==void 0?{state:"held",value:f,asOfUt:d,grade:v,reckoning:_e}:{state:"observed",value:f,atUt:d,reckoning:_e}});return{t:e.t,readings:o,basis:e.basis,breaks:e.breaks,bridges:e.bridges,windowEndAt:e.windowEndAt,interpolation:e.interpolation}}function Fo(e,t){const r=hr(Pt(e),t);return h.useMemo(()=>An(r),[r])}function Nn(e,t,r,n){if(n===void 0)return null;if(t!==null&&t.status===n)return t.to=r,t;const o={from:r,to:r,status:n};return e.push(o),o}function Rn(e,t,r,n,o){if(n===void 0)return null;if(t!==null&&t.basis===n&&t.bandKind===o?.kind)return t.to=r,o!==void 0&&(t.bandLo?.push(o.lo),t.bandHi?.push(o.hi)),t;const a=o!==void 0?{from:r,to:r,basis:n,bandLo:[o.lo],bandHi:[o.hi],bandKind:o.kind}:{from:r,to:r,basis:n};return e.push(a),a}function Ln(e){const t=Z(e);return typeof t=="number"?t:Number.NaN}function $n(e){const[t,r]=Qe(e?.lo,e?.hi);if(!(e===void 0||t===void 0||r===void 0))return{lo:t,hi:r,kind:e.kind}}function Mo(e){const t=[],r=[],n={t:[],v:[],basis:e.basis,breaks:[],spans:t,reckoned:r,bridges:[],windowEndAt:e.windowEndAt,interpolation:e.interpolation},o=new Set(e.breaks??[]),a=new Map((e.bridges??[]).map(v=>[v.to,v])),i=new Map;let d=null,f=null,g=!1;for(let v=0;v<e.t.length;v++){o.has(v)&&(g=!0);const x=e.readings[v],M=x.reckoning.status==="available"?x.reckoning:void 0,N=Ln(M?M.modelled:x.value);if(Number.isNaN(N))continue;const T=n.t.length,R=g&&T>0;R&&n.breaks.push(T),g=!1,i.set(v,T);const S=a.get(v);S!==void 0&&!R&&i.get(v-1)===T-1&&S.v.every(Number.isFinite)&&n.bridges.push({...S,to:T}),n.t.push(e.t[v]),n.v.push(N);const L=M===void 0&&x.state==="held"?st(x.grade):void 0;d=Nn(t,d,T,L),f=Rn(r,f,T,M?.basis,$n(M?.band))}return n}function zo(){const e=ge("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return h.useMemo(()=>t?rt(t):void 0,[t])}function To(){const e=Je(),t=h.useSyncExternalStore(i=>e.subscribe(i),()=>e.getSnapshot());if(Et(),!t.active||!t.meta)return null;const r=t.meta,n=e.cursorUt(),o=Math.max(0,r.lastFrameUt-r.firstFrameUt),a=Math.max(0,n-r.firstFrameUt);return s.jsxs(Un,{role:"region","aria-label":"Replay controls",children:[s.jsxs(qe,{children:[s.jsx(Bn,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),s.jsxs(On,{children:["REPLAY: ",s.jsx(Dn,{children:r.vesselName||"Unnamed vessel"})]})]}),s.jsxs(In,{children:[s.jsx(We,{children:Ge(a)}),s.jsx(Pn,{type:"range",min:r.firstFrameUt,max:r.lastFrameUt,step:.1,value:n,onChange:i=>e.seekTo(Number(i.target.value)),"aria-label":"Seek to position"}),s.jsx(We,{children:Ge(o)})]}),s.jsxs(qe,{children:[s.jsxs(Kn,{value:String(t.rate),onChange:i=>e.setRate(Number(i.target.value)),"aria-label":"Playback rate",children:[s.jsx("option",{value:"0.5",children:"0.5×"}),s.jsx("option",{value:"1",children:"1×"}),s.jsx("option",{value:"2",children:"2×"}),s.jsx("option",{value:"5",children:"5×"}),s.jsx("option",{value:"10",children:"10×"}),s.jsx("option",{value:"50",children:"50×"})]}),s.jsx(Vn,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function Ge(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),r=Math.floor(t/3600),n=Math.floor(t%3600/60),o=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`}const Un=c.div`
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
`,qe=c(Lt).attrs({justify:"start"})`
  flex-shrink: 0;
`,On=c.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
`,Dn=c.span`
  color: var(--color-tag-purple-fg);
  font-weight: 700;
  margin-left: var(--gap-trailing-figure);
`,Bn=c.button`
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
`,In=c.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,Pn=c.input`
  flex: 1;
  min-width: 0;
  accent-color: var(--color-tag-purple-fg);
`,We=c.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Kn=c.select`
  background: var(--color-surface-app);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,Vn=c.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,Hn=new Set(["vessel.flight","vessel.orbit","vessel.propulsion","vessel.resources"]);function _n(e){return q(e.split(".")[0])}function Eo(e,t=new Set(W())){const r=St(e.topic);if(t.has(e.topic)){const o=e.topic.split(".").slice(1).join("."),a=r??(o===""?void 0:q(o)),i=a===void 0?e.label:`${a} › ${e.label}`,d=_n(e.topic);return{group:d,label:i,summary:`${d} › ${i}`,common:!1}}const n=r??q(e.topic);return{group:n,label:e.label,summary:`${n} › ${e.label}`,common:Hn.has(e.topic)}}export{wo as A,hr as B,Cr as C,jo as D,Co as E,xo as F,bo as G,Fo as H,tt as I,zo as J,go as K,yo as M,kn as P,To as R,Qe as a,nt as b,yn as c,rt as d,ot as e,So as f,Fn as g,Mn as h,Ce as i,vo as j,ne as k,et as l,mo as m,q as n,wr as o,jr as p,jn as q,Mo as r,Z as s,Ln as t,ko as u,fo as v,Eo as w,ho as x,po as y,Kt as z};
