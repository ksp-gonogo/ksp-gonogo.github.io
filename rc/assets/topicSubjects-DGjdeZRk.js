import{j as s}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{bg as fe,bc as ye,cC as W,U as ht,cm as ft,cy as gt,cH as mt,cG as vt,dl as bt,cu as xt,dr as yt,ak as St,bf as K,be as wt,aK as re,b7 as kt,b5 as ae,cr as jt,du as Ct}from"./view-clock-formula-nrcILacK.js";import{r as h}from"./ext-react-C0MU9AHG.js";import{p as Je,D as Q,t as Ft,L as Mt}from"./ksp-enum-names-DnDvHV3m.js";import"./logger-2_QM1wvD.js";import{H as Tt}from"./screen-C--ukhnW.js";import{be as zt,bg as Ze,a$ as Et,b as At,aM as Nt,bb as ge,bk as Rt}from"./lagrange-Cs2miMYP.js";import{y as me}from"./use-transmissions-C6oNEXS8.js";import{g as Qe}from"./replay-session-controller-Ca1T1C8-.js";import"./websocket-transport-ksYRixKG.js";import{y as H,I as ne,aB as Lt,E as $t,w as Se,B as Ut,aq as Ot}from"./ModalSaveBar-CP3fcnhB.js";import{G as Pt,M as we,N as Dt}from"./Notice-Z08baFQt.js";import{N as ke,U as ue}from"./contributionsRead-DsV6K_C2.js";import"./processorPerfBudget-B4_uKuOF.js";import{l as je}from"./index-DqUIH49W.js";import{i as Bt,D as It}from"./VersionMismatchBanner-BKLiB-I0.js";import d from"./ext-styled-components-DAuodqsN.js";import{b as Kt}from"./full-history-replay-B9g-kO2P.js";import{e as Vt,s as Ht}from"./topic-fields-Lzs2FFUe.js";import{k as Ce}from"./orbital-DYtaG7mx.js";const Xe={recording:!1,vesselName:null,frameCount:0,saveFailure:null};let V=Xe;const J=new Set;function Fe(){return V}function ho(e){V={...e,saveFailure:V.saveFailure};for(const t of J)t()}function fo(e){if(V.saveFailure!==e){V={...V,saveFailure:e};for(const t of J)t()}}function _t(e){return J.add(e),()=>{J.delete(e)}}function go(){V=Xe,J.clear()}function ie(){return fe("missionHistory")}function _(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),r=Math.floor(t/3600),n=Math.floor(t%3600/60),o=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`}function X(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const i=Number(t);return Number.isFinite(i)&&i>=0?i*1e3:null}const r=t.split(":").map(i=>i.trim());if(r.some(i=>i===""||!/^\d+(\.\d+)?$/.test(i)))return null;const n=r.map(Number),a=n.length===2?n[0]*60+n[1]:n.length===3?n[0]*3600+n[1]*60+n[2]:null;return a===null?null:a*1e3}function Gt({flight:e,onChange:t}){const r=e.chapters??[],n=Math.max(0,e.lastSampleAt-e.launchedAt),[o,a]=h.useState(""),[i,c]=h.useState(""),[f,g]=h.useState(""),[v,x]=h.useState(null),[F,N]=h.useState(null),[z,R]=h.useState(""),[S,L]=h.useState(""),[E,A]=h.useState(""),[y,T]=h.useState(null);function P(m){N(m.id),R(m.label),L(_(m.startMs)),A(_(m.endMs)),T(null)}function p(){N(null),T(null)}async function k(){const m=ie();if(!m)return;const j=X(i),w=X(f);if(o.trim()===""){x("Label required");return}if(j===null||w===null){x("Start and end must be mm:ss");return}if(w<=j){x("End must be after start");return}x(null),await m.addChapter(e.id,{label:o.trim(),startMs:j,endMs:w}),a(""),c(""),g(""),t()}async function B(m){const j=ie();if(!j)return;const w=X(S),U=X(E);if(z.trim()===""){T("Label required");return}if(w===null||U===null){T("Start and end must be mm:ss");return}if(U<=w){T("End must be after start");return}T(null),await j.updateChapter(e.id,m,{label:z.trim(),startMs:w,endMs:U}),N(null),t()}async function $(m){const j=ie();j&&(await j.removeChapter(e.id,m),F===m&&p(),t())}return s.jsxs(qt,{children:[s.jsx(Wt,{children:"Chapters"}),r.length===0?s.jsx(Yt,{children:"No chapters yet. Add markers to slice the flight."}):s.jsx(Jt,{children:r.slice().sort((m,j)=>m.startMs-j.startMs).map(m=>{const j=F===m.id;return s.jsx(Zt,{children:j?s.jsxs(s.Fragment,{children:[s.jsx(H,{type:"text",value:z,onChange:w=>R(w.target.value),"aria-label":"Chapter label"}),s.jsx(H,{type:"text",value:S,onChange:w=>L(w.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),s.jsx(H,{type:"text",value:E,onChange:w=>A(w.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),s.jsxs(Me,{children:[s.jsx(rr,{type:"button",onClick:()=>void B(m.id),children:"Save"}),s.jsx(nr,{type:"button",onClick:p,children:"Cancel"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Qt,{title:m.label,children:m.label}),s.jsxs(Xt,{children:[_(m.startMs)," – ",_(m.endMs)]}),s.jsxs(er,{children:["(",_(m.endMs-m.startMs),")"]}),s.jsxs(Me,{children:[s.jsx(tr,{type:"button",onClick:()=>P(m),children:"edit"}),s.jsx(ne,{type:"button",onClick:()=>void $(m.id),"aria-label":`Remove chapter ${m.label}`,children:"×"})]})]})},m.id)})}),y&&s.jsx(Te,{children:y}),s.jsxs(or,{children:[s.jsx(H,{type:"text",placeholder:"Chapter name",value:o,onChange:m=>a(m.target.value),"aria-label":"New chapter label"}),s.jsx(H,{type:"text",placeholder:"0:00",value:i,onChange:m=>c(m.target.value),"aria-label":"New chapter start (mm:ss)"}),s.jsx(H,{type:"text",placeholder:_(n),value:f,onChange:m=>g(m.target.value),"aria-label":"New chapter end (mm:ss)"}),s.jsx(sr,{type:"button",onClick:()=>void k(),children:"+ add"})]}),v&&s.jsx(Te,{children:v})]})}const qt=d.div`
  padding: var(--inset-chapters-band);
  background: var(--color-surface-app);
  border-bottom: 1px solid var(--color-border-subtle);
`,Wt=d.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: var(--gap-heading-hint);
`,Yt=d.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  margin-bottom: var(--gap-related-comfortable);
`,Jt=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  margin-bottom: var(--gap-related-comfortable);
`,Zt=d(Lt).attrs({cols:"minmax(120px, 1fr) auto auto auto",gap:"related-comfortable"})`
  font-size: var(--font-size-compact);
`,Qt=d.span`
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Xt=d.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-muted);
  white-space: nowrap;
`,er=d.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-faint);
  font-size: var(--font-size-compact);
  white-space: nowrap;
`,Me=d.span`
  display: inline-flex;
  gap: var(--gap-related);
  align-items: center;
  justify-self: end;
`,tr=d.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,rr=d.button`
  background: var(--color-go-status);
  border: 1px solid var(--color-go-status);
  color: var(--color-go-on-status);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,nr=d.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,or=d.div`
  display: grid;
  grid-template-columns: minmax(120px, 1fr) 80px 80px auto;
  gap: var(--gap-related);
  align-items: center;
  margin-top: var(--gap-actions);
`,sr=d.button`
  background: none;
  border: 1px dashed var(--color-text-faint);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  white-space: nowrap;
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,Te=d.div`
  margin-top: var(--gap-sub-readout);
  font-size: var(--font-size-compact);
  color: var(--color-tag-red-fg);
`,et=new WeakMap;function ar(e,t){et.set(e,t)}function ir(e){return et.get(e)}const pe={t:[],v:[]};function lr(e){switch(e){case ye.LastBeforeBlackout:return"last-before-blackout";case ye.Recorded:return"recorded";default:return null}}function cr(e){const t=[];let r=null;for(let n=0;n<e.length;n++){const o=lr(e[n].meta.staleness);if(o===null){r=null;continue}if(r!==null&&r.status===o){r.to=n;continue}r={from:n,to:n,status:o},t.push(r)}return t}const ze=new WeakMap;function dr(e){const t=ze.get(e);if(t)return t;const r={t:e.t,v:e.v.map(n=>{const o=Z(n);return typeof o=="number"?o:Number.NaN}),basis:e.basis};return ze.set(e,r),r}function ur(e,t){return e.length===t.length&&e.every((r,n)=>r.to===t[n].to&&r.v===t[n].v)}function pr(e,t){return e.length===t.length&&e.every((r,n)=>r.from===t[n].from&&r.to===t[n].to&&r.status===t[n].status)}function Ee(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((r,n)=>Object.is(r,t[n]))}function hr(e,t){return e.length===t.length&&e.every((r,n)=>r.from===t[n].from&&r.to===t[n].to&&r.basis===t[n].basis&&r.bandKind===t[n].bandKind&&Ee(r.bandLo,t[n].bandLo)&&Ee(r.bandHi,t[n].bandHi))}function tt(e,t){return[e?.toWire(),t?.toWire()]}function fr(e,t,r,n,o){const a=new Map((t.sampleRange(r,n,o)??[]).map(f=>[f.validAt,JSON.stringify(f.payload)])),i=[];let c;for(const f of e){const g=a.get(f.validAt)??JSON.stringify(f.payload);g!==c&&(c=g,i.push(f))}return i}function Z(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function gr(e,t){const r=h.useRef(pe),n=h.useRef(void 0),o=zt(),a=Ze(),i=e,c=h.useCallback(g=>{if(!o||!a)return()=>{};const v=Et(o,a,i),x=a.holdWindow(i,t),F=a.subscribeFrame(g);return()=>{F(),x(),v()}},[o,a,i,t]),f=h.useCallback(()=>{if(!a)return pe;const g=a.currentFrame(),v=`${i}\0${t}\0${g.viewUt}\0${a.clock.getEpoch()}\0${a.sampleStatus(i,g)}\0${a.dataRevision()}`;if(n.current===v)return r.current;const x=mr(a,i,t,g.viewUt,r.current);return n.current=v,r.current=x,x},[a,i,t]);return h.useSyncExternalStore(c,f)}function mr(e,t,r,n,o){const a=n-r,i=e.isProcessorTopic(t)?e.sampleProcessorRange(t,a,n):e.sampleRange(t,a,n),c=e.sampleReckonedTail(t,a,n),f=e.tagsOf(t),g=f.kind==="event"?"none":f.kind==="discrete"?"step":"linear",v=f.kind==="event"?fr(i??[],e,f.topic,a,n):i??[];if(v.length===0&&c.length===0)return pe;const x=v.map(p=>p.validAt),F=v.map(p=>Z(p.payload)),N=v.map(p=>p.payload),z=new Map,R=[],S=[];for(let p=0;p<v.length;p++){if(p===0)continue;if(g==="none")break;if(v[p].meta.gapSinceUt!=null){R.push(p);continue}if(Object.is(F[p],F[p-1]))continue;const k=e.gapModel(t,v[p-1],v[p]);if(k?.carried===!1){R.push(p);continue}k?.carried&&S.push({to:p,...dr(k)})}const L=cr(v),E=[];for(const p of c){const k=x.length;x.push(p.atUt),F.push(Z(p.value)),N.push(p.value);const{bandLo:B,bandHi:$}=p,[m,j]=tt(B,$),w=m!==void 0&&j!==void 0?p.bandKind:void 0;z.set(k,{basis:p.basis,band:B!==void 0&&$!==void 0&&w!==void 0?{lo:B,hi:$,kind:w}:void 0});const U=E[E.length-1],se=U!==void 0&&U.basis===p.basis&&U.to===k-1&&U.bandKind===w;if(U!==void 0&&se){U.to=k,m!==void 0&&j!==void 0&&w!==void 0&&(U.bandLo?.push(m),U.bandHi?.push(j));continue}if(m!==void 0&&j!==void 0&&w!==void 0){E.push({from:k,to:k,basis:p.basis,bandLo:[m],bandHi:[j],bandKind:w});continue}E.push({from:k,to:k,basis:p.basis})}const A=o,y=A.breaks??[];if(A.t.length===x.length&&A.t.every((p,k)=>p===x[k])&&A.v.every((p,k)=>Object.is(p,F[k]))&&y.length===R.length&&y.every((p,k)=>p===R[k])&&ur(A.bridges??[],S)&&pr(A.spans??[],L)&&hr(A.reckoned??[],E)&&A.windowEndAt===(E.length>0?n:void 0)&&(A.interpolation??"linear")===g)return A;const P={t:x,v:F,basis:"ut-seconds",breaks:R,bridges:S,spans:L,reckoned:E,interpolation:g,windowEndAt:E.length>0?n:void 0};return ar(P,{payloads:N,modelled:z}),P}const vr=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function q(e){const t=e.split(".").flatMap(a=>a.split(/(?=[A-Z])/)).map(a=>a.toLowerCase()).filter(a=>a.length>0).map(a=>vr[a]??a);if(t.length===0)return e;const[r,...n]=t;return[r===r.toUpperCase()?r:r[0].toUpperCase()+r.slice(1),...n].join(" ")}function br(e,t){const r=t.split("."),n=[];let o=[],a=!1;for(let i=0;i<r.length;i++){const c=xt(e,r.slice(0,i+1).join("."));if(c===void 0){o.push(r[i]);continue}o.length>0&&n.push(q(o.join("."))),o=[],n.push(c),a=!0}return a?(o.length>0&&n.push(q(o.join("."))),n.join(" › ")):q(t)}function xr(e,t,r){return r.has(e)?!0:bt(`${e}.${t}`)?.rawTopic===e}const yr=Object.freeze({"vessel.target":"Target"});function Sr(e,t){const r=br(e,t),n=yr[e];if(n===void 0)return r;const o=r.split(" ")[0],a=o===o.toUpperCase()?r:r[0].toLowerCase()+r.slice(1);return`${n} ${a}`}function wr(e,t){return{key:`${e}.${t.path}`,label:Sr(e,t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function kr(e,t){const r=new Set(t),n=[...new Set([...gt(),...e,...t])].filter(c=>!mt(c)).sort(),o=[],a=[],i=[];for(const c of n){if(vt(c)){i.push(c);continue}const f=Vt(c).filter(g=>xr(c,g.path,r));if(f.length===0){a.push(c);continue}for(const g of f)o.push(wr(c,g))}return{keys:o,undescribed:a,collections:i}}function oe(){return[...At.map(e=>e.topic),...ht().map(e=>e.topic)]}let le;function ve(e,t){const r=`${e.join(",")}|${t.join(",")}|${ft()}`;if(le?.key===r)return le.built;const n=kr(e,t);return le={key:r,built:n},n}function rt(e=W(),t=oe()){return ve(e,t).keys}function jr(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!Cr.has(e.unit)}const Cr=new Set(["bool","enum","flag","id","raw","text"]);function Fr(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function mo(e,t){const r=e?.enumEncoding;return r?.by!=="ordinal"||typeof t!="number"?t:r.names[t]??t}function vo(e=W(),t=oe()){return ve(e,t).undescribed}function bo(e=W(),t=oe()){return ve(e,t).collections}function Ae(){return oe().join(",")}function nt(){const e=h.useSyncExternalStore(yt,W,W),t=h.useSyncExternalStore(St,Ae,Ae);return h.useMemo(()=>rt(e,t.split(",")),[e,t])}function Mr(){const e=nt();return h.useMemo(()=>e.filter(jr),[e])}function xo(){const e=nt();return h.useMemo(()=>e.filter(Fr),[e])}const Ne=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function Re(){return fe("missionHistory")}function Tr({missionId:e,fromUt:t,toUt:r}){const n=Mr(),[o,a]=h.useState(new Set),[i,c]=h.useState([]),[f,g]=h.useState(!1),[v,x]=h.useState(null);h.useEffect(()=>()=>{Re()?.evictFullHistoryStore(e)},[e]);const F=h.useMemo(()=>n.map(y=>({key:y.key,label:y.label??y.key,unit:y.unit,group:Er(y.key)})),[n]);h.useEffect(()=>{const y=Re();if(!y||o.size===0){c([]),x(null);return}let T=!1;g(!0),x(null);const P=[...o];return Promise.all(P.map(p=>y.queryRange(p,t,r,e))).then(p=>{if(T)return;const k=new Map(n.map($=>[$.key,$])),B=P.map(($,m)=>{const j=zr(p[m],t),w=k.get($);return{id:$,label:w?.label??$,axis:"primary",color:Ne[m%Ne.length],type:"line",data:j}});c(B)}).catch(p=>{T||x(p instanceof Error?p.message:String(p))}).finally(()=>{T||g(!1)}),()=>{T=!0}},[o,e,t,r,n]);const N=Math.max(0,(r-t)*1e3),z=N>0?[0,N]:[0,6e4],R=i.some(y=>y.data.x.length>0),S=[...o].map(y=>n.find(T=>T.key===y)),L=[...new Set(S.map((y,T)=>y?.label??[...o][T]))],E=[...new Set(S.map(y=>y?.unit))],A=Bt(L.length>0&&L.length<=2?L.join(" / "):void 0,E.length===1?E[0]:void 0);return s.jsxs(Ar,{children:[s.jsxs(Nr,{children:[s.jsx(Rr,{children:"Series"}),s.jsx(It,{keys:F,value:o,onChange:a,placeholder:"Add a data key...",emptyHint:F.length===0?"No numeric keys in the current schema":"No matches"})]}),v&&s.jsxs(Ur,{role:"alert",children:["Failed to load samples: ",v]}),o.size===0?s.jsx(Le,{children:"Pick one or more numeric telemetry keys above to plot them."}):s.jsxs(Lr,{children:[f&&s.jsx($r,{children:"Loading..."}),!f&&!R&&s.jsx(Le,{children:"No recorded samples for the selected keys."}),R&&s.jsx(Pt,{chrome:"bare",series:i,xDomain:z,xAxisLabel:"Mission time",yAxisLabel:A,height:260})]})]})}function zr(e,t){const r=[],n=[];for(let o=0;o<e.t.length;o++){const a=Z(e.v[o]);typeof a!="number"||!Number.isFinite(a)||(r.push((e.t[o]-t)*1e3),n.push(a))}return{x:r,y:n}}function Er(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const Ar=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border-top: 1px solid var(--color-surface-raised);
`,Nr=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,Rr=d.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Lr=d.div`
  position: relative;
  min-height: 260px;
`,Le=d.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  padding: var(--inset-chart-empty);
  text-align: center;
`,$r=d.div`
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
`,Ur=d.div`
  font-size: var(--font-size-compact);
  color: var(--color-nogo-text);
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  padding: var(--inset-surface);
  border-radius: var(--radius-regular);
`;function Or(e,t,r=[]){return t.filter(n=>ot(e,n.validAt)?n.recordedAt===void 0?!0:(Pr(r,n.validAt,n.recordedAt)??e)===e:!1)}function ot(e,t){const{firstValidUt:r,lastValidUt:n}=e;return r===void 0||n===void 0?!1:t>=r&&t<=n}function Pr(e,t,r){let n;for(const o of e)!ot(o,t)||o.launchedAt>r||(n===void 0||o.launchedAt>n.launchedAt)&&(n=o);return n}function $e(e,t){t.firstValidUt!==void 0&&(e.firstValidUt=Math.min(e.firstValidUt??t.firstValidUt,t.firstValidUt)),t.lastValidUt!==void 0&&(e.lastValidUt=Math.max(e.lastValidUt??t.lastValidUt,t.lastValidUt))}function Dr(e,t){const r=[],n=new Map;for(const o of e){const a=o.lastSampleAt-o.launchedAt,i=o.endReason===void 0&&o.outcome===void 0&&t.has(o.vesselName),c=i?n.get(o.vesselName):void 0;if(c){c.ids.push(o.id),c.launchedAt=Math.min(c.launchedAt,o.launchedAt),c.durationMs+=a,c.sampleCount+=o.sampleCount,$e(c,o);continue}const f={flight:o,ids:[o.id],stillFlying:i,launchedAt:o.launchedAt,durationMs:a,sampleCount:o.sampleCount};$e(f,o),r.push(f),i&&n.set(o.vesselName,f)}return r}function Br(e){return new Date(e).toLocaleString()}function Ir(e,t){return ue(re("s",(t-e)/1e3))}const Kr={[K.Recovered]:"Recovered",[K.Crashed]:"Crashed",[K.Reverted]:"Reverted",[K.Destroyed]:"Destroyed",[K.Terminated]:"Terminated",[K.Docked]:"Docked"};function Vr(e,t){if(e===void 0)return"Not known";const r=Kr[e]??"Not known";return e===K.Docked&&t?`${r} with ${t}`:r}function Hr(e){const t=[e.fundsEarned===null?null:`+${ue(re("funds",e.fundsEarned),{decimals:0})}`,e.scienceEarned===null?null:`+${ue(re("science",e.scienceEarned),{decimals:1})}`].filter(r=>r!==null);return[`Recovered ${e.recoveryLocation}`,e.recoveryFactor,t.length>0?t.join(" · "):"no funds or science awarded"].filter(r=>r!=="").join(" · ")}function D(){return fe("missionHistory")}function Ue(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),r=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${r}.fixture.json`}function Oe(e,t){const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(r),o=document.createElement("a");o.href=n,o.download=t,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(n)}function yo({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:r=!1}={}){const n=e==="main",[o,a]=h.useState([]),[i,c]=h.useState([]),[f,g]=h.useState(null),[v,x]=h.useState(!1),[F,N]=h.useState(!1),[z,R]=h.useState(null),[S,L]=h.useState(()=>new Set),[E,A]=h.useState(()=>Je()),y=me("trackingStation.catalog"),T=h.useMemo(()=>{const u=y.state==="observed"||y.state==="held"?y.value:void 0;return new Set((u?.entries??[]).filter(l=>l.contact!==wt.Gone).map(l=>l.name))},[y]),P=h.useMemo(()=>Dr(o,T),[o,T]),p=h.useCallback(async()=>{const u=D();if(!u)return;let l;try{l=await u.listFlights()}catch(b){console.warn("FlightsManager: failed to load flights",b);return}if(a(l.sort((b,M)=>M.launchedAt-b.launchedAt)),typeof u.listContractFinishes=="function"){try{c(await u.listContractFinishes())}catch(b){console.warn("FlightsManager: failed to load contract finishes",b)}L(b=>{const M=new Set;for(const C of l)b.has(C.id)&&M.add(C.id);return M.size===b.size?b:M})}},[]);h.useEffect(()=>{p()},[p]),h.useEffect(()=>{const u=D();if(typeof u?.onFlightListChange=="function")return u.onFlightListChange(()=>{p()})},[p]);const k=async u=>{const l=D();if(l){for(const b of u)await l.deleteFlight(b);g(null),await p()}},B=async u=>{const l=D();if(!l)return;const b=await l.exportFlight(u.id);Oe(b,Ue(u))},$=async u=>{const l=D();if(!l)return;const b=await l.exportFlight(u.id),M={id:u.id,vesselName:u.vesselName,launchedAt:u.launchedAt,firstFrameUt:u.firstFrameUt??0,lastFrameUt:u.lastFrameUt??0,frameCount:u.sampleCount};Qe().start(M,b)},m=async()=>{const u=D();u&&(await u.clearAllFlights(),x(!1),await p())},j=u=>{L(l=>{const b=new Set(l),M=u.every(C=>b.has(C));for(const C of u)M?b.delete(C):b.add(C);return b})},w=()=>{L(u=>u.size===o.length?new Set:new Set(o.map(l=>l.id)))},U=async()=>{const u=D();if(!u)return;const l=Array.from(S);for(const b of l)await u.deleteFlight(b);N(!1),await p()},se=async u=>{const l=D();l&&(await l.setFlightStarred(u.id,!u.starred),await p())},ct=async u=>{const l=D(),b=u?Q:0;Ft(b),A(b),u&&l&&(await l.pruneFlightsKeepLatest({keepCount:b}),await p())},dt=async()=>{const u=D();if(!u)return;const l=Array.from(S),b=new Map(o.map(M=>[M.id,M]));for(const M of l){const C=b.get(M);if(!C)continue;const pt=await u.exportFlight(M);Oe(pt,Ue(C))}},be=o.length>0&&S.size===o.length,ut=S.size>0&&S.size<o.length,xe=(()=>{const u=[...o].sort((M,C)=>C.launchedAt-M.launchedAt);let l=0,b=0;for(const M of u)M.starred||(l+=1,l>Q&&(b+=1));return b})();return s.jsxs(Gr,{children:[n&&s.jsx(_r,{missionHistoryEnabled:t,recordAllTopics:r}),o.length===0?s.jsx($t,{children:"No flight history recorded yet"}):s.jsxs(s.Fragment,{children:[s.jsxs(Qr,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx(sn,{children:s.jsx(de,{ref:u=>{u&&(u.indeterminate=ut)},checked:be,onChange:w,"aria-label":be?"Clear selection":"Select all flights"})}),s.jsxs(an,{children:[s.jsx(Se,{size:12,fill:"currentColor","aria-hidden":"true"}),s.jsx(Pe,{children:"Kept (exempt from auto-delete)"})]}),s.jsx(G,{children:"Vessel"}),s.jsx(G,{children:"Launched"}),s.jsx(G,{title:"Game time, not time at the desk",children:"Duration"}),s.jsx(G,{children:"Samples"}),s.jsx(G,{children:"Ended"}),s.jsx(G,{children:s.jsx(Pe,{children:"Actions"})})]})}),s.jsx("tbody",{children:P.map(u=>{const l=u.flight,b=z===l.id,M=u.ids.every(C=>S.has(C));return s.jsxs(h.Fragment,{children:[s.jsxs(Ie,{$current:!1,children:[s.jsx(I,{children:s.jsx(de,{checked:M,onChange:()=>j(u.ids),"aria-label":`Select flight ${l.vesselName||l.id}`})}),s.jsx(I,{children:s.jsx(ne,{type:"button",pressed:!!l.starred,onClick:()=>void se(l),"aria-label":l.starred?`Unstar ${l.vesselName||"flight"}`:`Star ${l.vesselName||"flight"} (keep from auto-delete)`,title:l.starred?"Kept from auto-delete":"Keep from auto-delete",children:s.jsx(Se,{size:"var(--icon-size-control)",fill:l.starred?"currentColor":"none"})})}),s.jsxs(I,{children:[l.vesselName||ke,l.launchName&&s.jsxs(tn,{children:["launched as ",l.launchName]}),l.evaKerbals&&l.evaKerbals.length>0&&s.jsxs(Xr,{children:["EVA: ",l.evaKerbals.join(", ")]}),Or(u,i,P).map(C=>s.jsxs(en,{children:[s.jsx(Ut,{size:"sm",tone:C.outcome==="Completed"?"go":"nogo",children:C.outcome==="Completed"?"completed":"failed"}),s.jsx("span",{children:C.title??ke}),s.jsx(Ke,{children:s.jsx(we,{value:C.validAt,context:{frame:"scet"}})}),s.jsx(Ke,{children:s.jsx(we,{value:C.deliveredAt,context:{frame:"received"}})})]},`${C.id}:${C.outcome}`)),l.outcome?.kind==="recovered"&&s.jsx(Ve,{$tone:"go",title:Hr(l.outcome),children:"recovered"}),l.outcome?.kind==="crashed"&&s.jsx(Ve,{$tone:"nogo",title:`Crashed at ${l.outcome.body} (${l.outcome.situation}) · ${l.outcome.partsLostCount} part(s) lost${l.outcome.kerbalsKilled.length>0?` · KIA: ${l.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),s.jsx(I,{children:Br(u.launchedAt)}),s.jsx(I,{children:Ir(0,u.durationMs)}),s.jsx(I,{children:u.sampleCount.toLocaleString()}),s.jsx(I,{children:u.stillFlying?"Still flying":Vr(l.endReason,l.joinedVesselName)}),s.jsx(I,{children:s.jsxs(qr,{children:[s.jsx(Wr,{type:"button",$open:b,onClick:()=>R(b?null:l.id),"aria-label":b?"Close graph":"Graph this flight","aria-expanded":b,children:b?"− graph":"＋ graph"}),n&&s.jsx(Yr,{type:"button",onClick:()=>void $(l),"aria-label":`Replay ${l.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),s.jsx(De,{type:"button",onClick:()=>void B(l),"aria-label":`Download fixture for ${l.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),f===l.id?s.jsxs(ce,{children:[s.jsx(ee,{onClick:()=>void k(u.ids),children:"Delete"}),s.jsx(te,{onClick:()=>g(null),children:"Cancel"})]}):s.jsx(ne,{onClick:()=>g(l.id),children:"×"})]})})]}),b&&s.jsx(Ie,{$current:!1,children:s.jsxs(I,{colSpan:8,style:{padding:0},children:[s.jsx(Gt,{flight:l,onChange:()=>void p()}),s.jsx(Tr,{missionId:l.id,fromUt:l.firstValidUt??l.firstFrameUt??0,toUt:l.lastValidUt??l.lastFrameUt??0})]})})]},l.id)})})]}),s.jsxs(rn,{children:[s.jsx(nn,{children:S.size>0&&(F?s.jsxs(ce,{children:[s.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",S.size," selected flight",S.size===1?"":"s","?"]}),s.jsx(ee,{onClick:()=>void U(),children:"Delete"}),s.jsx(te,{onClick:()=>N(!1),children:"Cancel"})]}):s.jsxs(s.Fragment,{children:[s.jsxs(on,{children:[S.size," selected"]}),s.jsx(De,{type:"button",onClick:()=>void dt(),title:"Download fixtures for the selected flights",children:"↓ download"}),s.jsx(ee,{onClick:()=>N(!0),children:"Delete"}),s.jsx(te,{onClick:()=>L(new Set),children:"Clear"})]}))}),s.jsxs(ln,{children:[s.jsxs(cn,{title:`Keep the ${Q} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[s.jsx(de,{checked:E>0,onChange:u=>void ct(u.target.checked)}),s.jsxs("span",{children:["Keep latest ",Q,E===0&&xe>0&&s.jsxs(dn,{children:[" ","(",xe," would be deleted)"]})]})]}),v?s.jsxs(ce,{children:[s.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),s.jsx(ee,{onClick:()=>void m(),children:"Clear all"}),s.jsx(te,{onClick:()=>x(!1),children:"Cancel"})]}):s.jsx(un,{onClick:()=>x(!0),children:"Clear all"})]})]})]})]})}function _r({missionHistoryEnabled:e,recordAllTopics:t}){const r=h.useSyncExternalStore(_t,Fe,Fe);return s.jsxs(Jr,{children:[r.saveFailure&&s.jsxs(Dt,{tone:"nogo",title:"Flight not saved",children:[r.saveFailure.vesselName,": ",r.saveFailure.cause]}),e?r.recording?s.jsxs(Zr,{children:["● recording ",r.vesselName??"flight"," (",r.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):s.jsx(Be,{children:"Auto-record armed: capture starts the moment a flight begins."}):s.jsx(Be,{children:"Mission history is off, enable it in Settings to auto-record."})]})}const Pe=d.span`
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
`,Gr=d.div`
  display: flex;
  flex-direction: column;
  min-width: min(500px, 100%);
  /* Graph panels expand in-place, so let the whole thing scroll rather than
     clipping the chart. Horizontal scroll catches narrow viewports where the
     row-action button cluster won't fit even in the wide flight modal. */
  max-height: 80vh;
  max-height: 80dvh;
  overflow: auto;
`,qr=d.div`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
`,Wr=d.button`
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
`,De=d.button`
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
`,Yr=d.button`
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
`,Jr=d.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-section);
  padding-bottom: var(--inset-toolbar-bottom);
  margin-bottom: var(--gap-toolbar);
  border-bottom: 1px solid var(--color-border-subtle);
`,Be=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Zr=d.span`
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
`,Qr=d.table`
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
`,Ie=d.tr`
  background: ${({$current:e})=>e?"var(--color-go-status)":"transparent"};
  &:hover { background: var(--color-surface-raised); }
`,I=d.td`
  /* 7px is computed, not chosen: it is the 6px vertical half of the surface
     inset Th carries, plus the 1px that makes a body row taller than the
     header row. It tracks Th, not the spacing grid. */
  padding: 7px var(--gutter-table-cell);
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-surface-raised);
  white-space: nowrap;
`,Xr=d.span`
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,en=d.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0 var(--gap-trailing-mark);
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,Ke=d.span`
  white-space: nowrap;
`,tn=d.span`
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,Ve=d.span`
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
`,ce=d.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
`,ee=d.button`
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  color: var(--color-tag-red-fg);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { background: var(--color-nogo-muted); }
`,te=d.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,rn=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-section);
  padding: var(--inset-table-footer);
  border-top: 1px solid var(--color-border-subtle);
`,nn=d.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-height: 24px;
`,on=d.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,sn=d.th`
  width: 28px;
  padding: var(--inset-surface);
  border-bottom: 1px solid var(--color-border-subtle);
`,de=d.input.attrs({type:"checkbox"})`
  cursor: pointer;
  margin: 0;
`,an=d.th`
  width: 24px;
  /* The one cell that cannot take --inset-surface beside Th and ThCheckbox: a
     24px column carrying a star glyph needs more vertical than horizontal. At
     (6,8) the content box is 8px and the glyph clips. */
  padding: var(--inset-table-narrow-header);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
  text-align: center;
`,ln=d.div`
  display: flex;
  align-items: center;
  gap: var(--gap-section);
`,cn=d.label`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  cursor: pointer;
  user-select: none;
`,dn=d.span`
  color: var(--color-nogo-muted);
`,un=d.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-dim);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,pn=new kt({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class So{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new Mt;historyCache=new Map;changesInOrder=new Map;async connect(){await this.pruneToKeepCount()}disconnect(){}schema(){return rt()}subscribe(t,r){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,r,n,o){if(!o)return{t:[],v:[]};const a=Nt(t);if(!a)return{t:[],v:[]};const i=await this.getFullHistoryStore(o);if(!i)return{t:[],v:[]};const c=i.isProcessorTopic(a)?i.sampleProcessorRange(a,r,n):i.sampleRange(a,r,n);return c?{t:c.map(f=>f.validAt),v:c.map(f=>f.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(Y)}async getFlight(t){const r=await this.missionStore.getMissionMeta(t);return r?Y(r):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.meta.id)}async saveContractFinish(t){await this.missionStore.saveContractFinish(t),this.flightListSubscribers.fire()}listContractFinishes(){return this.missionStore.listContractFinishes()}async saveMissionPart(t,r,n){await this.inOrder(t.id,()=>this.missionStore.saveMissionPart(t,r,n)),this.historyCache.delete(t.id),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.id)}async pruneToKeepCount(t){const r=Je();if(!(r<=0))try{await this.pruneFlightsKeepLatest({keepCount:r,keepId:t})}catch(n){je.warn("[MissionHistorySource] keep latest could not prune",{err:String(n)})}}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,r){const n=await this.missionStore.getMissionMeta(t);!n||!!n.starred===r||(await this.missionStore.updateMissionMeta(t,{starred:r}),this.flightListSubscribers.fire())}async setFlightEndReason(t,r,n,o){await this.inOrder(t,async()=>{const a=await this.missionStore.getMissionMeta(t);if(!a){je.warn("[MissionHistorySource] end reason for a mission not stored",{id:t});return}a.endReason===void 0&&(await this.missionStore.updateMissionMeta(t,{endReason:r,...o===void 0?{}:{joinedVesselId:o},...n===void 0?{}:{joinedVesselName:n}}),this.flightListSubscribers.fire())})}inOrder(t,r){const n=this.changesInOrder.get(t),o=n?n.then(r,r):r(),a=o.catch(()=>{});return this.changesInOrder.set(t,a),a.then(()=>{this.changesInOrder.get(t)===a&&this.changesInOrder.delete(t)}),o}async reopenFlight(t){await this.missionStore.updateMissionMeta(t,{endReason:void 0,joinedVesselId:void 0,joinedVesselName:void 0}),this.flightListSubscribers.fire()}async addChapter(t,r){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const a={id:r.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:r.label,startMs:r.startMs,endMs:r.endMs},i=[...n.chapters??[],a];return await this.missionStore.updateMissionMeta(t,{chapters:i}),this.flightListSubscribers.fire(),Y({...n,chapters:i})}async updateChapter(t,r,n){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const a=(o.chapters??[]).map(i=>i.id===r?{...i,...n}:i);return await this.missionStore.updateMissionMeta(t,{chapters:a}),this.flightListSubscribers.fire(),Y({...o,chapters:a})}async removeChapter(t,r){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const o=(n.chapters??[]).filter(a=>a.id!==r);return await this.missionStore.updateMissionMeta(t,{chapters:o}),this.flightListSubscribers.fire(),Y({...n,chapters:o})}async pruneFlightsKeepLatest(t){const r=await this.missionStore.pruneMissionsKeepLatest(t);for(const n of r)this.historyCache.delete(n);return r.length>0&&this.flightListSubscribers.fire(),r}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const r=this.historyCache.get(t);if(r)return r;const n=(async()=>{const o=await this.missionStore.getMissionFixture(t);if(!o)throw new Error(`mission fixture not found: ${t}`);return pn.record(),Kt(o.fixture)})();this.historyCache.set(t,n);try{return await n}catch{this.historyCache.delete(t);return}}}function Y(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchName:e.launchName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,endReason:e.endReason,evaKerbals:e.evaKerbals,joinedVesselId:e.joinedVesselId,joinedVesselName:e.joinedVesselName,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt,firstValidUt:e.firstValidUt,lastValidUt:e.lastValidUt}}function st(e){const t=new Set(e.parts.map(o=>Number(o.id))),r=e.parts.map(hn),n=r.find(o=>o.parentFlightId==null)??r.find(o=>!t.has(o.parentFlightId));for(const o of r)o.parentFlightId!=null&&!t.has(o.parentFlightId)&&(o.parentFlightId=n&&n!==o?n.flightId:null);return{topologySeq:e.parts.length,rootFlightId:n?n.flightId:0,parts:r}}function he(e){return e?[e.x.magnitude,e.y.magnitude,e.z.magnitude]:void 0}function hn(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage??null,crewCapacity:0,maxTemp:e.maxTemp?.magnitude??null,crashTolerance:0,dryMass:e.dryMass?.magnitude??null,orgPos:[O(e.position.x),O(e.position.y),O(e.position.z)],up:he(e.up),forward:he(e.forward),bounds:{size:{x:O(e.bounds.size.x),y:O(e.bounds.size.y),z:O(e.bounds.size.z)},center:e.bounds.center?{x:O(e.bounds.center.x),y:O(e.bounds.center.y),z:O(e.bounds.center.z)}:void 0},shape:e.shape??void 0,shapePoses:fn(e.shapePoses),fairing:gn(e.fairing),modules:e.modules}}function fn(e){if(!(!e||e.length===0))return e.map(({mesh:t,shown:r,transform:n})=>n&&n.length===12?{mesh:t,shown:r,transform:n.map(o=>o.magnitude)}:{mesh:t,shown:r})}function gn(e){if(!e)return;const t=he(e.axis)??[0,0,0],r=e.rings.map(O),n=[];for(let o=0;o+1<r.length;o+=2)n.push({h:r[o],r:r[o+1]});return{pivot:{x:O(e.pivot.x),y:O(e.pivot.y),z:O(e.pivot.z)},axis:{x:t[0],y:t[1],z:t[2]},rings:n}}function mn(e){return e.currentTemp==null?null:{temperature:Ce(e.currentTemp.magnitude),maxTemperature:e.maxTemp==null?null:Ce(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp?.magnitude??null}}function vn(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),mn(r));return t}function bn(e){const t={};for(const[r,n]of Object.entries(e.resources))t[r]={amount:n.amount?.magnitude??null,maxAmount:n.maxAmount?.magnitude??null,...n.flow!=null?{flow:n.flow.magnitude}:{},...n.nominalFlow!=null?{nominalFlow:n.nominalFlow.magnitude}:{},...n.unratedProcess===!0?{unratedProcess:!0}:{}};return t}function at(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),bn(r));return t}function xn(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function yn(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map(xn)}}function Sn(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),yn(r));return t}function O(e){return e.magnitude}function it(e){return Array.from(new TextEncoder().encode(e),t=>/[A-Za-z0-9_-]/.test(String.fromCharCode(t))?String.fromCharCode(t):`%${t.toString(16).toUpperCase().padStart(2,"0")}`).join("")}function wo(e,t){return`spaceCenter.craft.${e}.${it(t)}.parts`}function ko(e,t){const r=it(t),n=ge(`spaceCenter.craft.${e}.${r}.parts`),o=n.state==="observed"||n.state==="held"?n.value:void 0;return h.useMemo(()=>{if(!o)return;const a=Tt("CraftFileParts",structuredClone(o));return{topology:st(a),resourcesByFlightId:at(a)}},[o])}const wn=[];function kn(e){const t=[ae(e.dvRadial,0),ae(e.dvNormal,0),ae(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function jo(){const e=ge("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return h.useMemo(()=>!Array.isArray(t)||t.length===0?wn:t.map(kn),[t])}const jn="parts.shape.";function Cn(e){return`${jn}${e}`}function Fn(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function He(e){const t=Fn(e),r=new DataView(t.buffer,t.byteOffset,t.byteLength),n=new Uint16Array(t.byteLength>>1);for(let o=0;o<n.length;o++)n[o]=r.getUint16(o*2,!0);return n}function Mn(e){const t=[];for(const r of e.meshes){const n=He(r.positions),o=He(r.indices),a=[r.min.x,r.min.y,r.min.z],i=[r.max.x,r.max.y,r.max.z],c=new Float32Array(n.length-n.length%3);for(let g=0;g<c.length;g++){const v=g%3;c[g]=a[v]+n[g]/65535*(i[v]-a[v])}const f=c.length/3;o.length%3!==0||o.some(g=>g>=f)||t.push({key:r.key,shown:r.shown,positions:c,indices:o,sourceTriangles:r.sourceTriangles})}return{name:e.name,variant:e.variant??null,meshes:t}}const _e=new Map;function Tn(e,t){const r=_e.get(e);if(r&&r.wire===t)return r.shape;const n=Mn(t);return _e.set(e,{wire:t,shape:n}),n}function Co(e){const t=ge(Cn(e)),r=t.state==="observed"||t.state==="held"?t.value:void 0;return h.useMemo(()=>r?Tn(e,r):void 0,[e,r])}function Fo(e){const t=me("vessel.parts"),r=t.state==="observed"||t.state==="held"?t.value:void 0,n=h.useMemo(()=>vn(r),[r]),o=h.useMemo(()=>at(r),[r]),a=h.useMemo(()=>Sn(r),[r]),i=[...e].sort((c,f)=>c-f).join(",");return h.useMemo(()=>{const c=i.length===0?[]:i.split(",").map(Number),f=new Map;for(const g of c)f.set(g,{thermal:n.get(g)??null,resources:o.get(g)??{},partState:a.get(g)});return f},[i,n,o,a])}const Ge=Object.freeze({status:"none"}),zn={t:[],readings:[]};function lt(e){return e==="recorded"||e==="last-before-blackout"?e:void 0}function En(e){return e!==null&&typeof e=="object"&&"magnitude"in e}function An(e,t){if(En(e))return{value:e,...t};if(typeof e=="number")return{value:jt(t.lo.unit,e),...t}}function Nn(e){const t=ir(e);if(t===void 0)return zn;const r=new Map;for(const a of e.spans??[]){const i=lt(a.status);if(i!==void 0)for(let c=a.from;c<=a.to;c++)r.set(c,i)}let n;const o=e.t.map((a,i)=>{const c=re("ut",a),f=t.payloads[i],g=t.modelled.get(i);if(g!==void 0){const x={status:"available",modelled:f,atUt:c,beyondReceived:!0,basis:g.basis,band:g.band?An(f,g.band):void 0};return n===void 0?{state:"pending",reckoning:x}:{state:"held",value:n.payload,asOfUt:n.at,grade:"held",reckoning:x}}n={payload:f,at:c};const v=r.get(i);return v!==void 0?{state:"held",value:f,asOfUt:c,grade:v,reckoning:Ge}:{state:"observed",value:f,atUt:c,reckoning:Ge}});return{t:e.t,readings:o,basis:e.basis,breaks:e.breaks,bridges:e.bridges,windowEndAt:e.windowEndAt,interpolation:e.interpolation}}function Mo(e,t){const r=gr(Ht(e),t);return h.useMemo(()=>Nn(r),[r])}function Rn(e,t,r,n){if(n===void 0)return null;if(t!==null&&t.status===n)return t.to=r,t;const o={from:r,to:r,status:n};return e.push(o),o}function Ln(e,t,r,n,o){if(n===void 0)return null;if(t!==null&&t.basis===n&&t.bandKind===o?.kind)return t.to=r,o!==void 0&&(t.bandLo?.push(o.lo),t.bandHi?.push(o.hi)),t;const a=o!==void 0?{from:r,to:r,basis:n,bandLo:[o.lo],bandHi:[o.hi],bandKind:o.kind}:{from:r,to:r,basis:n};return e.push(a),a}function $n(e){const t=Z(e);return typeof t=="number"?t:Number.NaN}function Un(e){const[t,r]=tt(e?.lo,e?.hi);if(!(e===void 0||t===void 0||r===void 0))return{lo:t,hi:r,kind:e.kind}}function To(e){const t=[],r=[],n={t:[],v:[],basis:e.basis,breaks:[],spans:t,reckoned:r,bridges:[],windowEndAt:e.windowEndAt,interpolation:e.interpolation},o=new Set(e.breaks??[]),a=new Map((e.bridges??[]).map(v=>[v.to,v])),i=new Map;let c=null,f=null,g=!1;for(let v=0;v<e.t.length;v++){o.has(v)&&(g=!0);const x=e.readings[v],F=x.reckoning.status==="available"?x.reckoning:void 0,N=$n(F?F.modelled:x.value);if(Number.isNaN(N))continue;const z=n.t.length,R=g&&z>0;R&&n.breaks.push(z),g=!1,i.set(v,z);const S=a.get(v);S!==void 0&&!R&&i.get(v-1)===z-1&&S.v.every(Number.isFinite)&&n.bridges.push({...S,to:z}),n.t.push(e.t[v]),n.v.push(N);const L=F===void 0&&x.state==="held"?lt(x.grade):void 0;c=Rn(t,c,z,L),f=Ln(r,f,z,F?.basis,Un(F?.band))}return n}function zo(){const e=Ze(),t=h.useCallback(n=>e?e.subscribeFrame(n):()=>{},[e]),r=h.useCallback(()=>e?.clock.getEpoch(),[e]);return h.useSyncExternalStore(t,r,r)}function Eo(){const e=me("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return h.useMemo(()=>t?st(t):void 0,[t])}function Ao(){const e=Qe(),t=h.useSyncExternalStore(i=>e.subscribe(i),()=>e.getSnapshot());if(Rt(),!t.active||!t.meta)return null;const r=t.meta,n=e.cursorUt(),o=Math.max(0,r.lastFrameUt-r.firstFrameUt),a=Math.max(0,n-r.firstFrameUt);return s.jsxs(On,{role:"region","aria-label":"Replay controls",children:[s.jsxs(We,{children:[s.jsx(ne,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),s.jsxs(Pn,{children:["REPLAY: ",s.jsx(Dn,{children:r.vesselName||"Unnamed vessel"})]})]}),s.jsxs(Bn,{children:[s.jsx(Ye,{children:qe(a)}),s.jsx(In,{type:"range",min:r.firstFrameUt,max:r.lastFrameUt,step:.1,value:n,onChange:i=>e.seekTo(Number(i.target.value)),"aria-label":"Seek to position"}),s.jsx(Ye,{children:qe(o)})]}),s.jsxs(We,{children:[s.jsxs(Kn,{value:String(t.rate),onChange:i=>e.setRate(Number(i.target.value)),"aria-label":"Playback rate",children:[s.jsx("option",{value:"0.5",children:"0.5×"}),s.jsx("option",{value:"1",children:"1×"}),s.jsx("option",{value:"2",children:"2×"}),s.jsx("option",{value:"5",children:"5×"}),s.jsx("option",{value:"10",children:"10×"}),s.jsx("option",{value:"50",children:"50×"})]}),s.jsx(Vn,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function qe(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),r=Math.floor(t/3600),n=Math.floor(t%3600/60),o=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`}const On=d.div`
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
`,We=d(Ot).attrs({justify:"start"})`
  flex-shrink: 0;
`,Pn=d.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
`,Dn=d.span`
  color: var(--color-tag-purple-fg);
  font-weight: 700;
  margin-left: var(--gap-trailing-figure);
`,Bn=d.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,In=d.input`
  flex: 1;
  min-width: 0;
  accent-color: var(--color-tag-purple-fg);
`,Ye=d.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Kn=d.select`
  background: var(--color-surface-app);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,Vn=d.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,Hn=new Set(["vessel.flight","vessel.orbit","vessel.propulsion","vessel.resources"]);function _n(e){return q(e.split(".")[0])}function No(e,t=new Set(W())){const r=Ct(e.topic);if(t.has(e.topic)){const o=e.topic.split(".").slice(1).join("."),a=r??(o===""?void 0:q(o)),i=a===void 0?e.label:`${a} › ${e.label}`,c=_n(e.topic);return{group:c,label:i,summary:`${c} › ${i}`,common:!1}}const n=r??q(e.topic);return{group:n,label:e.label,summary:`${n} › ${e.label}`,common:Hn.has(e.topic)}}export{ko as A,gr as B,Mr as C,Co as D,Fo as E,yo as F,xo as G,Mo as H,zo as I,nt as J,Eo as K,mo as L,So as M,jn as P,Ao as R,tt as a,at as b,Sn as c,st as d,it as e,wo as f,Mn as g,Tn as h,Fe as i,bo as j,oe as k,rt as l,vo as m,q as n,jr as o,Fr as p,Cn as q,To as r,Z as s,$n as t,jo as u,go as v,No as w,fo as x,ho as y,_t as z};
