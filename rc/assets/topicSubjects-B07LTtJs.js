import{j as s}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{bd as he,b3 as xe,cz as W,R as ot,cj as st,cv as at,cE as it,cD as lt,dj as ct,cr as dt,dp as ut,ah as pt,bc as K,bj as ht,a_ as J,a$ as ft,ba as se,ds as gt}from"./view-clock-formula-DVPsyl3O.js";import{r as p}from"./ext-react-C0MU9AHG.js";import{o as Ve,D as Q,s as mt,L as vt}from"./ksp-enum-names--qouUfWh.js";import{A as bt}from"./screen-B9otUi5A.js";import{bb as xt,bd as yt,aX as St,i as wt,aI as kt,b8 as fe,bh as jt}from"./lagrange-BR544sNK.js";import{x as ge}from"./use-transmissions-BWg3YY9q.js";import{g as Ge}from"./replay-session-controller-C33Cgt78.js";import"./websocket-transport-CjvPRgz5.js";import{y as _,av as Ct,E as Ft,w as ye,ak as Mt}from"./ModalSaveBar-BFzzaxS3.js";import{G as zt,N as Tt}from"./Notice-CoUHFhUd.js";import{N as Et,w as de}from"./contributionsRead-CeBanPYg.js";import"./processorPerfBudget-Pj4n3rCL.js";import{l as Se}from"./index-DqUIH49W.js";import{h as At,D as Nt}from"./VersionMismatchBanner-ByJHYrBX.js";import d from"./ext-styled-components-DAuodqsN.js";import{b as Rt}from"./full-history-replay-BSYUm1ke.js";import{e as Lt,s as $t}from"./topic-fields-D5UF3yC6.js";import{k as we}from"./orbital-u6vzE66p.js";const qe={recording:!1,vesselName:null,frameCount:0,saveFailure:null};let H=qe;const X=new Set;function ke(){return H}function no(e){H={...e,saveFailure:H.saveFailure};for(const t of X)t()}function oo(e){if(H.saveFailure!==e){H={...H,saveFailure:e};for(const t of X)t()}}function Dt(e){return X.add(e),()=>{X.delete(e)}}function so(){H=qe,X.clear()}function ae(){return he("missionHistory")}function V(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),r=Math.floor(t/3600),n=Math.floor(t%3600/60),o=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`}function ee(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const i=Number(t);return Number.isFinite(i)&&i>=0?i*1e3:null}const r=t.split(":").map(i=>i.trim());if(r.some(i=>i===""||!/^\d+(\.\d+)?$/.test(i)))return null;const n=r.map(Number),a=n.length===2?n[0]*60+n[1]:n.length===3?n[0]*3600+n[1]*60+n[2]:null;return a===null?null:a*1e3}function Ot({flight:e,onChange:t}){const r=e.chapters??[],n=Math.max(0,e.lastSampleAt-e.launchedAt),[o,a]=p.useState(""),[i,c]=p.useState(""),[f,h]=p.useState(""),[v,x]=p.useState(null),[M,N]=p.useState(null),[y,z]=p.useState(""),[A,D]=p.useState(""),[T,E]=p.useState(""),[w,S]=p.useState(null);function B(m){N(m.id),z(m.label),D(V(m.startMs)),E(V(m.endMs)),S(null)}function g(){N(null),S(null)}async function j(){const m=ae();if(!m)return;const C=ee(i),k=ee(f);if(o.trim()===""){x("Label required");return}if(C===null||k===null){x("Start and end must be mm:ss");return}if(k<=C){x("End must be after start");return}x(null),await m.addChapter(e.id,{label:o.trim(),startMs:C,endMs:k}),a(""),c(""),h(""),t()}async function I(m){const C=ae();if(!C)return;const k=ee(A),L=ee(T);if(y.trim()===""){S("Label required");return}if(k===null||L===null){S("Start and end must be mm:ss");return}if(L<=k){S("End must be after start");return}S(null),await C.updateChapter(e.id,m,{label:y.trim(),startMs:k,endMs:L}),N(null),t()}async function R(m){const C=ae();C&&(await C.removeChapter(e.id,m),M===m&&g(),t())}return s.jsxs(Ut,{children:[s.jsx(Bt,{children:"Chapters"}),r.length===0?s.jsx(It,{children:"No chapters yet. Add markers to slice the flight."}):s.jsx(Pt,{children:r.slice().sort((m,C)=>m.startMs-C.startMs).map(m=>{const C=M===m.id;return s.jsx(Kt,{children:C?s.jsxs(s.Fragment,{children:[s.jsx(_,{type:"text",value:y,onChange:k=>z(k.target.value),"aria-label":"Chapter label"}),s.jsx(_,{type:"text",value:A,onChange:k=>D(k.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),s.jsx(_,{type:"text",value:T,onChange:k=>E(k.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),s.jsxs(je,{children:[s.jsx(qt,{type:"button",onClick:()=>void I(m.id),children:"Save"}),s.jsx(Wt,{type:"button",onClick:g,children:"Cancel"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Ht,{title:m.label,children:m.label}),s.jsxs(_t,{children:[V(m.startMs)," – ",V(m.endMs)]}),s.jsxs(Vt,{children:["(",V(m.endMs-m.startMs),")"]}),s.jsxs(je,{children:[s.jsx(Gt,{type:"button",onClick:()=>B(m),children:"edit"}),s.jsx(Yt,{type:"button",onClick:()=>void R(m.id),"aria-label":`Remove chapter ${m.label}`,children:"×"})]})]})},m.id)})}),w&&s.jsx(Ce,{children:w}),s.jsxs(Jt,{children:[s.jsx(_,{type:"text",placeholder:"Chapter name",value:o,onChange:m=>a(m.target.value),"aria-label":"New chapter label"}),s.jsx(_,{type:"text",placeholder:"0:00",value:i,onChange:m=>c(m.target.value),"aria-label":"New chapter start (mm:ss)"}),s.jsx(_,{type:"text",placeholder:V(n),value:f,onChange:m=>h(m.target.value),"aria-label":"New chapter end (mm:ss)"}),s.jsx(Xt,{type:"button",onClick:()=>void j(),children:"+ add"})]}),v&&s.jsx(Ce,{children:v})]})}const Ut=d.div`
  padding: var(--inset-chapters-band);
  background: var(--color-surface-app);
  border-bottom: 1px solid var(--color-border-subtle);
`,Bt=d.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: var(--gap-heading-hint);
`,It=d.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  margin-bottom: var(--gap-related-comfortable);
`,Pt=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  margin-bottom: var(--gap-related-comfortable);
`,Kt=d(Ct).attrs({cols:"minmax(120px, 1fr) auto auto auto",gap:"related-comfortable"})`
  font-size: var(--font-size-compact);
`,Ht=d.span`
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_t=d.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Vt=d.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-faint);
  font-size: var(--font-size-compact);
  white-space: nowrap;
`,je=d.span`
  display: inline-flex;
  gap: var(--gap-related);
  align-items: center;
  justify-self: end;
`,Gt=d.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,qt=d.button`
  background: var(--color-go-status);
  border: 1px solid var(--color-go-status);
  color: var(--color-go-on-status);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,Wt=d.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,Yt=d.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-base);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,Jt=d.div`
  display: grid;
  grid-template-columns: minmax(120px, 1fr) 80px 80px auto;
  gap: var(--gap-related);
  align-items: center;
  margin-top: var(--gap-actions);
`,Xt=d.button`
  background: none;
  border: 1px dashed var(--color-text-faint);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  white-space: nowrap;
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,Ce=d.div`
  margin-top: var(--gap-sub-readout);
  font-size: var(--font-size-compact);
  color: var(--color-tag-red-fg);
`,We=new WeakMap;function Zt(e,t){We.set(e,t)}function Qt(e){return We.get(e)}const ue={t:[],v:[]};function er(e){switch(e){case xe.LastBeforeBlackout:return"last-before-blackout";case xe.Recorded:return"recorded";default:return null}}function tr(e){const t=[];let r=null;for(let n=0;n<e.length;n++){const o=er(e[n].meta.staleness);if(o===null){r=null;continue}if(r!==null&&r.status===o){r.to=n;continue}r={from:n,to:n,status:o},t.push(r)}return t}const Fe=new WeakMap;function rr(e){const t=Fe.get(e);if(t)return t;const r={t:e.t,v:e.v.map(n=>{const o=Z(n);return typeof o=="number"?o:Number.NaN}),basis:e.basis};return Fe.set(e,r),r}function nr(e,t){return e.length===t.length&&e.every((r,n)=>r.to===t[n].to&&r.v===t[n].v)}function or(e,t){return e.length===t.length&&e.every((r,n)=>r.from===t[n].from&&r.to===t[n].to&&r.status===t[n].status)}function Me(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((r,n)=>Object.is(r,t[n]))}function sr(e,t){return e.length===t.length&&e.every((r,n)=>r.from===t[n].from&&r.to===t[n].to&&r.basis===t[n].basis&&r.bandKind===t[n].bandKind&&Me(r.bandLo,t[n].bandLo)&&Me(r.bandHi,t[n].bandHi))}function Ye(e,t){return[e?.toWire(),t?.toWire()]}function ar(e,t,r,n,o){const a=new Map((t.sampleRange(r,n,o)??[]).map(f=>[f.validAt,JSON.stringify(f.payload)])),i=[];let c;for(const f of e){const h=a.get(f.validAt)??JSON.stringify(f.payload);h!==c&&(c=h,i.push(f))}return i}function Z(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function ir(e,t){const r=p.useRef(ue),n=p.useRef(void 0),o=xt(),a=yt(),i=e,c=p.useCallback(h=>{if(!o||!a)return()=>{};const v=St(o,a,i),x=a.subscribeFrame(h);return()=>{x(),v()}},[o,a,i]),f=p.useCallback(()=>{if(!a)return ue;const h=a.currentFrame(),v=`${i}\0${t}\0${h.viewUt}\0${a.clock.getEpoch()}\0${a.sampleStatus(i,h)}\0${a.dataRevision()}`;if(n.current===v)return r.current;const x=lr(a,i,t,h.viewUt,r.current);return n.current=v,r.current=x,x},[a,i,t]);return p.useSyncExternalStore(c,f)}function lr(e,t,r,n,o){const a=n-r,i=e.isDerivedTopic(t)?e.sampleDerivedRange(t,a,n):e.sampleRange(t,a,n),c=e.sampleReckonedTail(t,a,n),f=e.tagsOf(t),h=f.kind==="event"?"none":f.kind==="discrete"?"step":"linear",v=f.kind==="event"?ar(i??[],e,f.topic,a,n):i??[];if(v.length===0&&c.length===0)return ue;const x=v.map(g=>g.validAt),M=v.map(g=>Z(g.payload)),N=v.map(g=>g.payload),y=new Map,z=[],A=[];for(let g=0;g<v.length;g++){if(g===0)continue;if(h==="none")break;if(v[g].meta.gapSinceUt!=null){z.push(g);continue}if(Object.is(M[g],M[g-1]))continue;const j=e.gapModel(t,v[g-1],v[g]);if(j?.carried===!1){z.push(g);continue}j?.carried&&A.push({to:g,...rr(j)})}const D=tr(v),T=[];for(const g of c){const j=x.length;x.push(g.atUt),M.push(Z(g.value)),N.push(g.value);const{bandLo:I,bandHi:R}=g,[m,C]=Ye(I,R),k=m!==void 0&&C!==void 0?g.bandKind:void 0;y.set(j,{basis:g.basis,band:I!==void 0&&R!==void 0&&k!==void 0?{lo:I,hi:R,kind:k}:void 0});const L=T[T.length-1],oe=L!==void 0&&L.basis===g.basis&&L.to===j-1&&L.bandKind===k;if(L!==void 0&&oe){L.to=j,m!==void 0&&C!==void 0&&k!==void 0&&(L.bandLo?.push(m),L.bandHi?.push(C));continue}if(m!==void 0&&C!==void 0&&k!==void 0){T.push({from:j,to:j,basis:g.basis,bandLo:[m],bandHi:[C],bandKind:k});continue}T.push({from:j,to:j,basis:g.basis})}const E=o,w=E.breaks??[];if(E.t.length===x.length&&E.t.every((g,j)=>g===x[j])&&E.v.every((g,j)=>Object.is(g,M[j]))&&w.length===z.length&&w.every((g,j)=>g===z[j])&&nr(E.bridges??[],A)&&or(E.spans??[],D)&&sr(E.reckoned??[],T)&&E.windowEndAt===(T.length>0?n:void 0)&&(E.interpolation??"linear")===h)return E;const B={t:x,v:M,basis:"ut-seconds",breaks:z,bridges:A,spans:D,reckoned:T,interpolation:h,windowEndAt:T.length>0?n:void 0};return Zt(B,{payloads:N,modelled:y}),B}const cr=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function q(e){const t=e.split(".").flatMap(a=>a.split(/(?=[A-Z])/)).map(a=>a.toLowerCase()).filter(a=>a.length>0).map(a=>cr[a]??a);if(t.length===0)return e;const[r,...n]=t;return[r===r.toUpperCase()?r:r[0].toUpperCase()+r.slice(1),...n].join(" ")}function dr(e,t){const r=t.split("."),n=[];let o=[],a=!1;for(let i=0;i<r.length;i++){const c=dt(e,r.slice(0,i+1).join("."));if(c===void 0){o.push(r[i]);continue}o.length>0&&n.push(q(o.join("."))),o=[],n.push(c),a=!0}return a?(o.length>0&&n.push(q(o.join("."))),n.join(" › ")):q(t)}function ur(e,t,r){return r.has(e)?!0:ct(`${e}.${t}`)?.rawTopic===e}const pr=Object.freeze({"vessel.target":"Target"});function hr(e,t){const r=dr(e,t),n=pr[e];if(n===void 0)return r;const o=r.split(" ")[0],a=o===o.toUpperCase()?r:r[0].toLowerCase()+r.slice(1);return`${n} ${a}`}function fr(e,t){return{key:`${e}.${t.path}`,label:hr(e,t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function gr(e,t){const r=new Set(t),n=[...new Set([...at(),...e,...t])].filter(c=>!it(c)).sort(),o=[],a=[],i=[];for(const c of n){if(lt(c)){i.push(c);continue}const f=Lt(c).filter(h=>ur(c,h.path,r));if(f.length===0){a.push(c);continue}for(const h of f)o.push(fr(c,h))}return{keys:o,undescribed:a,collections:i}}function ne(){return[...wt.map(e=>e.topic),...ot().map(e=>e.topic)]}let ie;function me(e,t){const r=`${e.join(",")}|${t.join(",")}|${st()}`;if(ie?.key===r)return ie.built;const n=gr(e,t);return ie={key:r,built:n},n}function Je(e=W(),t=ne()){return me(e,t).keys}function mr(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!vr.has(e.unit)}const vr=new Set(["bool","enum","flag","id","raw","text"]);function br(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function ao(e,t){const r=e?.enumEncoding;return r?.by!=="ordinal"||typeof t!="number"?t:r.names[t]??t}function io(e=W(),t=ne()){return me(e,t).undescribed}function lo(e=W(),t=ne()){return me(e,t).collections}function ze(){return ne().join(",")}function Xe(){const e=p.useSyncExternalStore(ut,W,W),t=p.useSyncExternalStore(pt,ze,ze);return p.useMemo(()=>Je(e,t.split(",")),[e,t])}function xr(){const e=Xe();return p.useMemo(()=>e.filter(mr),[e])}function co(){const e=Xe();return p.useMemo(()=>e.filter(br),[e])}const Te=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function Ee(){return he("missionHistory")}function yr({missionId:e,fromUt:t,toUt:r}){const n=xr(),[o,a]=p.useState(new Set),[i,c]=p.useState([]),[f,h]=p.useState(!1),[v,x]=p.useState(null);p.useEffect(()=>()=>{Ee()?.evictFullHistoryStore(e)},[e]);const M=p.useMemo(()=>n.map(w=>({key:w.key,label:w.label??w.key,unit:w.unit,group:wr(w.key)})),[n]);p.useEffect(()=>{const w=Ee();if(!w||o.size===0){c([]),x(null);return}let S=!1;h(!0),x(null);const B=[...o];return Promise.all(B.map(g=>w.queryRange(g,t,r,e))).then(g=>{if(S)return;const j=new Map(n.map(R=>[R.key,R])),I=B.map((R,m)=>{const C=Sr(g[m],t),k=j.get(R);return{id:R,label:k?.label??R,axis:"primary",color:Te[m%Te.length],type:"line",data:C}});c(I)}).catch(g=>{S||x(g instanceof Error?g.message:String(g))}).finally(()=>{S||h(!1)}),()=>{S=!0}},[o,e,t,r,n]);const N=Math.max(0,(r-t)*1e3),y=N>0?[0,N]:[0,6e4],z=i.some(w=>w.data.x.length>0),A=[...o].map(w=>n.find(S=>S.key===w)),D=[...new Set(A.map((w,S)=>w?.label??[...o][S]))],T=[...new Set(A.map(w=>w?.unit))],E=At(D.length>0&&D.length<=2?D.join(" / "):void 0,T.length===1?T[0]:void 0);return s.jsxs(kr,{children:[s.jsxs(jr,{children:[s.jsx(Cr,{children:"Series"}),s.jsx(Nt,{keys:M,value:o,onChange:a,placeholder:"Add a data key...",emptyHint:M.length===0?"No numeric keys in the current schema":"No matches"})]}),v&&s.jsxs(zr,{role:"alert",children:["Failed to load samples: ",v]}),o.size===0?s.jsx(Ae,{children:"Pick one or more numeric telemetry keys above to plot them."}):s.jsxs(Fr,{children:[f&&s.jsx(Mr,{children:"Loading..."}),!f&&!z&&s.jsx(Ae,{children:"No recorded samples for the selected keys."}),z&&s.jsx(zt,{chrome:"bare",series:i,xDomain:y,xAxisLabel:"Mission time",yAxisLabel:E,height:260})]})]})}function Sr(e,t){const r=[],n=[];for(let o=0;o<e.t.length;o++){const a=Z(e.v[o]);typeof a!="number"||!Number.isFinite(a)||(r.push((e.t[o]-t)*1e3),n.push(a))}return{x:r,y:n}}function wr(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const kr=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border-top: 1px solid var(--color-surface-raised);
`,jr=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,Cr=d.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Fr=d.div`
  position: relative;
  min-height: 260px;
`,Ae=d.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  padding: var(--inset-chart-empty);
  text-align: center;
`,Mr=d.div`
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
`,zr=d.div`
  font-size: var(--font-size-compact);
  color: var(--color-nogo-text);
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  padding: var(--inset-surface);
  border-radius: var(--radius-regular);
`;function Tr(e,t){const r=[],n=new Map;for(const o of e){const a=o.lastSampleAt-o.launchedAt,i=o.endReason===void 0&&o.outcome===void 0&&t.has(o.vesselName),c=i?n.get(o.vesselName):void 0;if(c){c.ids.push(o.id),c.launchedAt=Math.min(c.launchedAt,o.launchedAt),c.durationMs+=a,c.sampleCount+=o.sampleCount;continue}const f={flight:o,ids:[o.id],stillFlying:i,launchedAt:o.launchedAt,durationMs:a,sampleCount:o.sampleCount};r.push(f),i&&n.set(o.vesselName,f)}return r}function Er(e){return new Date(e).toLocaleString()}function Ar(e,t){return de(J("s",(t-e)/1e3))}const Nr={[K.Recovered]:"Recovered",[K.Crashed]:"Crashed",[K.Reverted]:"Reverted",[K.Destroyed]:"Destroyed",[K.Terminated]:"Terminated",[K.Docked]:"Docked"};function Rr(e,t){if(e===void 0)return"Not known";const r=Nr[e]??"Not known";return e===K.Docked&&t?`${r} with ${t}`:r}function Lr(e){const t=[e.fundsEarned===null?null:`+${de(J("funds",e.fundsEarned),{decimals:0})}`,e.scienceEarned===null?null:`+${de(J("science",e.scienceEarned),{decimals:1})}`].filter(r=>r!==null);return[`Recovered ${e.recoveryLocation}`,e.recoveryFactor,t.length>0?t.join(" · "):"no funds or science awarded"].filter(r=>r!=="").join(" · ")}function U(){return he("missionHistory")}function Ne(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),r=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${r}.fixture.json`}function Re(e,t){const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(r),o=document.createElement("a");o.href=n,o.download=t,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(n)}function uo({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:r=!1}={}){const n=e==="main",[o,a]=p.useState([]),[i,c]=p.useState(null),[f,h]=p.useState(!1),[v,x]=p.useState(!1),[M,N]=p.useState(null),[y,z]=p.useState(()=>new Set),[A,D]=p.useState(()=>Ve()),T=ge("trackingStation.catalog"),E=p.useMemo(()=>{const u=T.state==="observed"||T.state==="held"?T.value:void 0;return new Set((u?.entries??[]).filter(l=>l.contact!==ht.Gone).map(l=>l.name))},[T]),w=p.useMemo(()=>Tr(o,E),[o,E]),S=p.useCallback(async()=>{const u=U();if(!u)return;let l;try{l=await u.listFlights()}catch(b){console.warn("FlightsManager: failed to load flights",b);return}a(l.sort((b,F)=>F.launchedAt-b.launchedAt)),z(b=>{const F=new Set;for(const $ of l)b.has($.id)&&F.add($.id);return F.size===b.size?b:F})},[]);p.useEffect(()=>{S()},[S]),p.useEffect(()=>{const u=U();if(typeof u?.onFlightListChange=="function")return u.onFlightListChange(()=>{S()})},[S]);const B=async u=>{const l=U();if(l){for(const b of u)await l.deleteFlight(b);c(null),await S()}},g=async u=>{const l=U();if(!l)return;const b=await l.exportFlight(u.id);Re(b,Ne(u))},j=async u=>{const l=U();if(!l)return;const b=await l.exportFlight(u.id),F={id:u.id,vesselName:u.vesselName,launchedAt:u.launchedAt,firstFrameUt:u.firstFrameUt??0,lastFrameUt:u.lastFrameUt??0,frameCount:u.sampleCount};Ge().start(F,b)},I=async()=>{const u=U();u&&(await u.clearAllFlights(),h(!1),await S())},R=u=>{z(l=>{const b=new Set(l),F=u.every($=>b.has($));for(const $ of u)F?b.delete($):b.add($);return b})},m=()=>{z(u=>u.size===o.length?new Set:new Set(o.map(l=>l.id)))},C=async()=>{const u=U();if(!u)return;const l=Array.from(y);for(const b of l)await u.deleteFlight(b);x(!1),await S()},k=async u=>{const l=U();l&&(await l.setFlightStarred(u.id,!u.starred),await S())},L=async u=>{const l=U(),b=u?Q:0;mt(b),D(b),u&&l&&(await l.pruneFlightsKeepLatest({keepCount:b}),await S())},oe=async()=>{const u=U();if(!u)return;const l=Array.from(y),b=new Map(o.map(F=>[F.id,F]));for(const F of l){const $=b.get(F);if(!$)continue;const nt=await u.exportFlight(F);Re(nt,Ne($))}},ve=o.length>0&&y.size===o.length,rt=y.size>0&&y.size<o.length,be=(()=>{const u=[...o].sort((F,$)=>$.launchedAt-F.launchedAt);let l=0,b=0;for(const F of u)F.starred||(l+=1,l>Q&&(b+=1));return b})();return s.jsxs(Dr,{children:[n&&s.jsx($r,{missionHistoryEnabled:t,recordAllTopics:r}),o.length===0?s.jsx(Ft,{children:"No flight history recorded yet"}):s.jsxs(s.Fragment,{children:[s.jsxs(Kr,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx(Yr,{children:s.jsx(ce,{ref:u=>{u&&(u.indeterminate=rt)},checked:ve,onChange:m,"aria-label":ve?"Clear selection":"Select all flights"})}),s.jsxs(Jr,{children:[s.jsx(ye,{size:12,fill:"currentColor","aria-hidden":"true"}),s.jsx(Le,{children:"Kept (exempt from auto-delete)"})]}),s.jsx(G,{children:"Vessel"}),s.jsx(G,{children:"Launched"}),s.jsx(G,{title:"Game time, not time at the desk",children:"Duration"}),s.jsx(G,{children:"Samples"}),s.jsx(G,{children:"Ended"}),s.jsx(G,{children:s.jsx(Le,{children:"Actions"})})]})}),s.jsx("tbody",{children:w.map(u=>{const l=u.flight,b=M===l.id,F=u.ids.every($=>y.has($));return s.jsxs(p.Fragment,{children:[s.jsxs(Oe,{$current:!1,children:[s.jsx(P,{children:s.jsx(ce,{checked:F,onChange:()=>R(u.ids),"aria-label":`Select flight ${l.vesselName||l.id}`})}),s.jsx(P,{children:s.jsx(Xr,{type:"button",$on:!!l.starred,onClick:()=>void k(l),"aria-label":l.starred?`Unstar ${l.vesselName||"flight"}`:`Star ${l.vesselName||"flight"} (keep from auto-delete)`,"aria-pressed":!!l.starred,title:l.starred?"Kept from auto-delete":"Keep from auto-delete",children:s.jsx(ye,{size:"var(--icon-size-control)",fill:l.starred?"currentColor":"none"})})}),s.jsxs(P,{children:[l.vesselName||Et,l.launchName&&s.jsxs(_r,{children:["launched as ",l.launchName]}),l.evaKerbals&&l.evaKerbals.length>0&&s.jsxs(Hr,{children:["EVA: ",l.evaKerbals.join(", ")]}),l.outcome?.kind==="recovered"&&s.jsx(Ue,{$tone:"go",title:Lr(l.outcome),children:"recovered"}),l.outcome?.kind==="crashed"&&s.jsx(Ue,{$tone:"nogo",title:`Crashed at ${l.outcome.body} (${l.outcome.situation}) · ${l.outcome.partsLostCount} part(s) lost${l.outcome.kerbalsKilled.length>0?` · KIA: ${l.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),s.jsx(P,{children:Er(u.launchedAt)}),s.jsx(P,{children:Ar(0,u.durationMs)}),s.jsx(P,{children:u.sampleCount.toLocaleString()}),s.jsx(P,{children:u.stillFlying?"Still flying":Rr(l.endReason,l.joinedVesselName)}),s.jsx(P,{children:s.jsxs(Or,{children:[s.jsx(Ur,{type:"button",$open:b,onClick:()=>N(b?null:l.id),"aria-label":b?"Close graph":"Graph this flight","aria-expanded":b,children:b?"− graph":"＋ graph"}),n&&s.jsx(Br,{type:"button",onClick:()=>void j(l),"aria-label":`Replay ${l.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),s.jsx($e,{type:"button",onClick:()=>void g(l),"aria-label":`Download fixture for ${l.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),i===l.id?s.jsxs(le,{children:[s.jsx(te,{onClick:()=>void B(u.ids),children:"Delete"}),s.jsx(re,{onClick:()=>c(null),children:"Cancel"})]}):s.jsx(Vr,{onClick:()=>c(l.id),children:"×"})]})})]}),b&&s.jsx(Oe,{$current:!1,children:s.jsxs(P,{colSpan:8,style:{padding:0},children:[s.jsx(Ot,{flight:l,onChange:()=>void S()}),s.jsx(yr,{missionId:l.id,fromUt:l.firstValidUt??l.firstFrameUt??0,toUt:l.lastValidUt??l.lastFrameUt??0})]})})]},l.id)})})]}),s.jsxs(Gr,{children:[s.jsx(qr,{children:y.size>0&&(v?s.jsxs(le,{children:[s.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",y.size," selected flight",y.size===1?"":"s","?"]}),s.jsx(te,{onClick:()=>void C(),children:"Delete"}),s.jsx(re,{onClick:()=>x(!1),children:"Cancel"})]}):s.jsxs(s.Fragment,{children:[s.jsxs(Wr,{children:[y.size," selected"]}),s.jsx($e,{type:"button",onClick:()=>void oe(),title:"Download fixtures for the selected flights",children:"↓ download"}),s.jsx(te,{onClick:()=>x(!0),children:"Delete"}),s.jsx(re,{onClick:()=>z(new Set),children:"Clear"})]}))}),s.jsxs(Zr,{children:[s.jsxs(Qr,{title:`Keep the ${Q} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[s.jsx(ce,{checked:A>0,onChange:u=>void L(u.target.checked)}),s.jsxs("span",{children:["Keep latest ",Q,A===0&&be>0&&s.jsxs(en,{children:[" ","(",be," would be deleted)"]})]})]}),f?s.jsxs(le,{children:[s.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),s.jsx(te,{onClick:()=>void I(),children:"Clear all"}),s.jsx(re,{onClick:()=>h(!1),children:"Cancel"})]}):s.jsx(tn,{onClick:()=>h(!0),children:"Clear all"})]})]})]})]})}function $r({missionHistoryEnabled:e,recordAllTopics:t}){const r=p.useSyncExternalStore(Dt,ke,ke);return s.jsxs(Ir,{children:[r.saveFailure&&s.jsxs(Tt,{tone:"nogo",title:"Flight not saved",children:[r.saveFailure.vesselName,": ",r.saveFailure.cause]}),e?r.recording?s.jsxs(Pr,{children:["● recording ",r.vesselName??"flight"," (",r.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):s.jsx(De,{children:"Auto-record armed: capture starts the moment a flight begins."}):s.jsx(De,{children:"Mission history is off, enable it in Settings to auto-record."})]})}const Le=d.span`
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
`,Dr=d.div`
  display: flex;
  flex-direction: column;
  min-width: min(500px, 100%);
  /* Graph panels expand in-place, so let the whole thing scroll rather than
     clipping the chart. Horizontal scroll catches narrow viewports where the
     row-action button cluster won't fit even in the wide flight modal. */
  max-height: 80vh;
  max-height: 80dvh;
  overflow: auto;
`,Or=d.div`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
`,Ur=d.button`
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
`,$e=d.button`
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
`,Br=d.button`
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
`,Ir=d.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-section);
  padding-bottom: var(--inset-toolbar-bottom);
  margin-bottom: var(--gap-toolbar);
  border-bottom: 1px solid var(--color-border-subtle);
`,De=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Pr=d.span`
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
`,Kr=d.table`
  border-collapse: collapse;
  width: 100%;
  overflow-y: auto;
  font-size: var(--font-size-compact);
`,G=d.th`
  text-align: left;
  padding: var(--inset-surface);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
`,Oe=d.tr`
  background: ${({$current:e})=>e?"var(--color-go-status)":"transparent"};
  &:hover { background: var(--color-surface-raised); }
`,P=d.td`
  /* 7px is computed, not chosen: it is the 6px vertical half of the surface
     inset Th carries, plus the 1px that makes a body row taller than the
     header row. It tracks Th, not the spacing grid. */
  padding: 7px var(--gutter-table-cell);
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-surface-raised);
  white-space: nowrap;
`,Hr=d.span`
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,_r=d.span`
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,Ue=d.span`
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
`,Vr=d.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-lg);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,le=d.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
`,te=d.button`
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  color: var(--color-tag-red-fg);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { background: var(--color-nogo-muted); }
`,re=d.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,Gr=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-section);
  padding: var(--inset-table-footer);
  border-top: 1px solid var(--color-border-subtle);
`,qr=d.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-height: 24px;
`,Wr=d.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Yr=d.th`
  width: 28px;
  padding: var(--inset-surface);
  border-bottom: 1px solid var(--color-border-subtle);
`,ce=d.input.attrs({type:"checkbox"})`
  cursor: pointer;
  margin: 0;
`,Jr=d.th`
  width: 24px;
  /* The one cell that cannot take --inset-surface beside Th and ThCheckbox: a
     24px column carrying a star glyph needs more vertical than horizontal. At
     (6,8) the content box is 8px and the glyph clips. */
  padding: var(--inset-table-narrow-header);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
  text-align: center;
`,Xr=d.button`
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
`,Zr=d.div`
  display: flex;
  align-items: center;
  gap: var(--gap-section);
`,Qr=d.label`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  cursor: pointer;
  user-select: none;
`,en=d.span`
  color: var(--color-nogo-muted);
`,tn=d.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-dim);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,rn=new ft({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class po{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new vt;historyCache=new Map;changesInOrder=new Map;async connect(){await this.pruneToKeepCount()}disconnect(){}schema(){return Je()}subscribe(t,r){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,r,n,o){if(!o)return{t:[],v:[]};const a=kt(t);if(!a)return{t:[],v:[]};const i=await this.getFullHistoryStore(o);if(!i)return{t:[],v:[]};const c=i.isDerivedTopic(a)?i.sampleDerivedRange(a,r,n):i.sampleRange(a,r,n);return c?{t:c.map(f=>f.validAt),v:c.map(f=>f.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(Y)}async getFlight(t){const r=await this.missionStore.getMissionMeta(t);return r?Y(r):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.meta.id)}async saveMissionPart(t,r,n){await this.inOrder(t.id,()=>this.missionStore.saveMissionPart(t,r,n)),this.historyCache.delete(t.id),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.id)}async pruneToKeepCount(t){const r=Ve();if(!(r<=0))try{await this.pruneFlightsKeepLatest({keepCount:r,keepId:t})}catch(n){Se.warn("[MissionHistorySource] keep latest could not prune",{err:String(n)})}}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,r){const n=await this.missionStore.getMissionMeta(t);!n||!!n.starred===r||(await this.missionStore.updateMissionMeta(t,{starred:r}),this.flightListSubscribers.fire())}async setFlightEndReason(t,r,n,o){await this.inOrder(t,async()=>{const a=await this.missionStore.getMissionMeta(t);if(!a){Se.warn("[MissionHistorySource] end reason for a mission not stored",{id:t});return}a.endReason===void 0&&(await this.missionStore.updateMissionMeta(t,{endReason:r,...o===void 0?{}:{joinedVesselId:o},...n===void 0?{}:{joinedVesselName:n}}),this.flightListSubscribers.fire())})}inOrder(t,r){const n=this.changesInOrder.get(t),o=n?n.then(r,r):r(),a=o.catch(()=>{});return this.changesInOrder.set(t,a),a.then(()=>{this.changesInOrder.get(t)===a&&this.changesInOrder.delete(t)}),o}async reopenFlight(t){await this.missionStore.updateMissionMeta(t,{endReason:void 0,joinedVesselId:void 0,joinedVesselName:void 0}),this.flightListSubscribers.fire()}async addChapter(t,r){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const a={id:r.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:r.label,startMs:r.startMs,endMs:r.endMs},i=[...n.chapters??[],a];return await this.missionStore.updateMissionMeta(t,{chapters:i}),this.flightListSubscribers.fire(),Y({...n,chapters:i})}async updateChapter(t,r,n){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const a=(o.chapters??[]).map(i=>i.id===r?{...i,...n}:i);return await this.missionStore.updateMissionMeta(t,{chapters:a}),this.flightListSubscribers.fire(),Y({...o,chapters:a})}async removeChapter(t,r){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const o=(n.chapters??[]).filter(a=>a.id!==r);return await this.missionStore.updateMissionMeta(t,{chapters:o}),this.flightListSubscribers.fire(),Y({...n,chapters:o})}async pruneFlightsKeepLatest(t){const r=await this.missionStore.pruneMissionsKeepLatest(t);for(const n of r)this.historyCache.delete(n);return r.length>0&&this.flightListSubscribers.fire(),r}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const r=this.historyCache.get(t);if(r)return r;const n=(async()=>{const o=await this.missionStore.getMissionFixture(t);if(!o)throw new Error(`mission fixture not found: ${t}`);return rn.record(),Rt(o.fixture)})();this.historyCache.set(t,n);try{return await n}catch{this.historyCache.delete(t);return}}}function Y(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchName:e.launchName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,endReason:e.endReason,evaKerbals:e.evaKerbals,joinedVesselId:e.joinedVesselId,joinedVesselName:e.joinedVesselName,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt,firstValidUt:e.firstValidUt,lastValidUt:e.lastValidUt}}function Ze(e){const t=new Set(e.parts.map(o=>Number(o.id))),r=e.parts.map(nn),n=r.find(o=>o.parentFlightId==null)??r.find(o=>!t.has(o.parentFlightId));for(const o of r)o.parentFlightId!=null&&!t.has(o.parentFlightId)&&(o.parentFlightId=n&&n!==o?n.flightId:null);return{topologySeq:e.parts.length,rootFlightId:n?n.flightId:0,parts:r}}function pe(e){return e?[e.x.magnitude,e.y.magnitude,e.z.magnitude]:void 0}function nn(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage??null,crewCapacity:0,maxTemp:e.maxTemp?.magnitude??null,crashTolerance:0,dryMass:e.dryMass?.magnitude??null,orgPos:[O(e.position.x),O(e.position.y),O(e.position.z)],up:pe(e.up),forward:pe(e.forward),bounds:{size:{x:O(e.bounds.size.x),y:O(e.bounds.size.y),z:O(e.bounds.size.z)},center:e.bounds.center?{x:O(e.bounds.center.x),y:O(e.bounds.center.y),z:O(e.bounds.center.z)}:void 0},shape:e.shape??void 0,shapePoses:on(e.shapePoses),fairing:sn(e.fairing),modules:e.modules}}function on(e){if(!(!e||e.length===0))return e.map(({mesh:t,shown:r,transform:n})=>n&&n.length===12?{mesh:t,shown:r,transform:n.map(o=>o.magnitude)}:{mesh:t,shown:r})}function sn(e){if(!e)return;const t=pe(e.axis)??[0,0,0],r=e.rings.map(O),n=[];for(let o=0;o+1<r.length;o+=2)n.push({h:r[o],r:r[o+1]});return{pivot:{x:O(e.pivot.x),y:O(e.pivot.y),z:O(e.pivot.z)},axis:{x:t[0],y:t[1],z:t[2]},rings:n}}function an(e){return e.currentTemp==null?null:{temperature:we(e.currentTemp.magnitude),maxTemperature:e.maxTemp==null?null:we(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp?.magnitude??null}}function ln(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),an(r));return t}function cn(e){const t={};for(const[r,n]of Object.entries(e.resources))t[r]={amount:n.amount?.magnitude??null,maxAmount:n.maxAmount?.magnitude??null,...n.flow!=null?{flow:n.flow.magnitude}:{},...n.nominalFlow!=null?{nominalFlow:n.nominalFlow.magnitude}:{},...n.unratedProcess===!0?{unratedProcess:!0}:{}};return t}function Qe(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),cn(r));return t}function dn(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function un(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map(dn)}}function pn(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),un(r));return t}function O(e){return e.magnitude}function et(e){return Array.from(new TextEncoder().encode(e),t=>/[A-Za-z0-9_-]/.test(String.fromCharCode(t))?String.fromCharCode(t):`%${t.toString(16).toUpperCase().padStart(2,"0")}`).join("")}function ho(e,t){return`spaceCenter.craft.${e}.${et(t)}.parts`}function fo(e,t){const r=et(t),n=fe(`spaceCenter.craft.${e}.${r}.parts`),o=n.state==="observed"||n.state==="held"?n.value:void 0;return p.useMemo(()=>{if(!o)return;const a=bt("CraftFileParts",structuredClone(o));return{topology:Ze(a),resourcesByFlightId:Qe(a)}},[o])}const hn=[];function fn(e){const t=[se(e.dvRadial,0),se(e.dvNormal,0),se(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function go(){const e=fe("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return p.useMemo(()=>!Array.isArray(t)||t.length===0?hn:t.map(fn),[t])}const gn="parts.shape.";function mn(e){return`${gn}${e}`}function vn(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function Be(e){const t=vn(e),r=new DataView(t.buffer,t.byteOffset,t.byteLength),n=new Uint16Array(t.byteLength>>1);for(let o=0;o<n.length;o++)n[o]=r.getUint16(o*2,!0);return n}function bn(e){const t=[];for(const r of e.meshes){const n=Be(r.positions),o=Be(r.indices),a=[r.min.x,r.min.y,r.min.z],i=[r.max.x,r.max.y,r.max.z],c=new Float32Array(n.length-n.length%3);for(let h=0;h<c.length;h++){const v=h%3;c[h]=a[v]+n[h]/65535*(i[v]-a[v])}const f=c.length/3;o.length%3!==0||o.some(h=>h>=f)||t.push({key:r.key,shown:r.shown,positions:c,indices:o,sourceTriangles:r.sourceTriangles})}return{name:e.name,variant:e.variant??null,meshes:t}}const Ie=new Map;function xn(e,t){const r=Ie.get(e);if(r&&r.wire===t)return r.shape;const n=bn(t);return Ie.set(e,{wire:t,shape:n}),n}function mo(e){const t=fe(mn(e)),r=t.state==="observed"||t.state==="held"?t.value:void 0;return p.useMemo(()=>r?xn(e,r):void 0,[e,r])}function vo(e){const t=ge("vessel.parts"),r=t.state==="observed"||t.state==="held"?t.value:void 0,n=p.useMemo(()=>ln(r),[r]),o=p.useMemo(()=>Qe(r),[r]),a=p.useMemo(()=>pn(r),[r]),i=[...e].sort((c,f)=>c-f).join(",");return p.useMemo(()=>{const c=i.length===0?[]:i.split(",").map(Number),f=new Map;for(const h of c)f.set(h,{thermal:n.get(h)??null,resources:o.get(h)??{},partState:a.get(h)});return f},[i,n,o,a])}const Pe=Object.freeze({status:"none"}),yn={t:[],readings:[]};function tt(e){return e==="recorded"||e==="last-before-blackout"?e:void 0}function Sn(e){return e!==null&&typeof e=="object"&&"magnitude"in e}function wn(e,t){if(Sn(e))return{value:e,...t};if(typeof e=="number")return{value:J(t.lo.unit,e),...t}}function kn(e){const t=Qt(e);if(t===void 0)return yn;const r=new Map;for(const a of e.spans??[]){const i=tt(a.status);if(i!==void 0)for(let c=a.from;c<=a.to;c++)r.set(c,i)}let n;const o=e.t.map((a,i)=>{const c=J("ut",a),f=t.payloads[i],h=t.modelled.get(i);if(h!==void 0){const x={status:"available",modelled:f,atUt:c,beyondReceived:!0,basis:h.basis,band:h.band?wn(f,h.band):void 0};return n===void 0?{state:"pending",reckoning:x}:{state:"held",value:n.payload,asOfUt:n.at,grade:"held",reckoning:x}}n={payload:f,at:c};const v=r.get(i);return v!==void 0?{state:"held",value:f,asOfUt:c,grade:v,reckoning:Pe}:{state:"observed",value:f,atUt:c,reckoning:Pe}});return{t:e.t,readings:o,basis:e.basis,breaks:e.breaks,bridges:e.bridges,windowEndAt:e.windowEndAt,interpolation:e.interpolation}}function bo(e,t){const r=ir($t(e),t);return p.useMemo(()=>kn(r),[r])}function jn(e,t,r,n){if(n===void 0)return null;if(t!==null&&t.status===n)return t.to=r,t;const o={from:r,to:r,status:n};return e.push(o),o}function Cn(e,t,r,n,o){if(n===void 0)return null;if(t!==null&&t.basis===n&&t.bandKind===o?.kind)return t.to=r,o!==void 0&&(t.bandLo?.push(o.lo),t.bandHi?.push(o.hi)),t;const a=o!==void 0?{from:r,to:r,basis:n,bandLo:[o.lo],bandHi:[o.hi],bandKind:o.kind}:{from:r,to:r,basis:n};return e.push(a),a}function Fn(e){const t=Z(e);return typeof t=="number"?t:Number.NaN}function Mn(e){const[t,r]=Ye(e?.lo,e?.hi);if(!(e===void 0||t===void 0||r===void 0))return{lo:t,hi:r,kind:e.kind}}function xo(e){const t=[],r=[],n={t:[],v:[],basis:e.basis,breaks:[],spans:t,reckoned:r,bridges:[],windowEndAt:e.windowEndAt,interpolation:e.interpolation},o=new Set(e.breaks??[]),a=new Map((e.bridges??[]).map(v=>[v.to,v])),i=new Map;let c=null,f=null,h=!1;for(let v=0;v<e.t.length;v++){o.has(v)&&(h=!0);const x=e.readings[v],M=x.reckoning.status==="available"?x.reckoning:void 0,N=Fn(M?M.modelled:x.value);if(Number.isNaN(N))continue;const y=n.t.length,z=h&&y>0;z&&n.breaks.push(y),h=!1,i.set(v,y);const A=a.get(v);A!==void 0&&!z&&i.get(v-1)===y-1&&A.v.every(Number.isFinite)&&n.bridges.push({...A,to:y}),n.t.push(e.t[v]),n.v.push(N);const D=M===void 0&&x.state==="held"?tt(x.grade):void 0;c=jn(t,c,y,D),f=Cn(r,f,y,M?.basis,Mn(M?.band))}return n}function yo(){const e=ge("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return p.useMemo(()=>t?Ze(t):void 0,[t])}function So(){const e=Ge(),t=p.useSyncExternalStore(i=>e.subscribe(i),()=>e.getSnapshot());if(jt(),!t.active||!t.meta)return null;const r=t.meta,n=e.cursorUt(),o=Math.max(0,r.lastFrameUt-r.firstFrameUt),a=Math.max(0,n-r.firstFrameUt);return s.jsxs(zn,{role:"region","aria-label":"Replay controls",children:[s.jsxs(He,{children:[s.jsx(An,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),s.jsxs(Tn,{children:["REPLAY: ",s.jsx(En,{children:r.vesselName||"Unnamed vessel"})]})]}),s.jsxs(Nn,{children:[s.jsx(_e,{children:Ke(a)}),s.jsx(Rn,{type:"range",min:r.firstFrameUt,max:r.lastFrameUt,step:.1,value:n,onChange:i=>e.seekTo(Number(i.target.value)),"aria-label":"Seek to position"}),s.jsx(_e,{children:Ke(o)})]}),s.jsxs(He,{children:[s.jsxs(Ln,{value:String(t.rate),onChange:i=>e.setRate(Number(i.target.value)),"aria-label":"Playback rate",children:[s.jsx("option",{value:"0.5",children:"0.5×"}),s.jsx("option",{value:"1",children:"1×"}),s.jsx("option",{value:"2",children:"2×"}),s.jsx("option",{value:"5",children:"5×"}),s.jsx("option",{value:"10",children:"10×"}),s.jsx("option",{value:"50",children:"50×"})]}),s.jsx($n,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function Ke(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),r=Math.floor(t/3600),n=Math.floor(t%3600/60),o=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`}const zn=d.div`
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
`,He=d(Mt).attrs({justify:"start"})`
  flex-shrink: 0;
`,Tn=d.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
`,En=d.span`
  color: var(--color-tag-purple-fg);
  font-weight: 700;
  margin-left: var(--gap-trailing-figure);
`,An=d.button`
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
`,Nn=d.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,Rn=d.input`
  flex: 1;
  min-width: 0;
  accent-color: var(--color-tag-purple-fg);
`,_e=d.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Ln=d.select`
  background: var(--color-surface-app);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,$n=d.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,Dn=new Set(["vessel.flight","vessel.orbit","vessel.propulsion","vessel.resources"]);function On(e){return q(e.split(".")[0])}function wo(e,t=new Set(W())){const r=gt(e.topic);if(t.has(e.topic)){const o=e.topic.split(".").slice(1).join("."),a=r??(o===""?void 0:q(o)),i=a===void 0?e.label:`${a} › ${e.label}`,c=On(e.topic);return{group:c,label:i,summary:`${c} › ${i}`,common:!1}}const n=r??q(e.topic);return{group:n,label:e.label,summary:`${n} › ${e.label}`,common:Dn.has(e.topic)}}export{fo as A,ir as B,xr as C,mo as D,vo as E,uo as F,co as G,bo as H,Xe as I,yo as J,ao as K,po as M,gn as P,So as R,Ye as a,Qe as b,pn as c,Ze as d,et as e,ho as f,bn as g,xn as h,ke as i,lo as j,ne as k,Je as l,io as m,q as n,mr as o,br as p,mn as q,xo as r,Z as s,Fn as t,go as u,so as v,wo as w,oo as x,no as y,Dt as z};
