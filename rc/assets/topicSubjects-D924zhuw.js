import{j as s}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{d5 as ve,ck as ht,cm as Ze,c0 as ft,d0 as we,ev as X,c as gt,aD as mt,ed as vt,ep as bt,eA as xt,ez as yt,fh as St,el as wt,fm as kt,bm as jt,d4 as H,d3 as Ct,cy as ae,cX as Ft,bG as Mt,ch as be,cV as ce,ei as Tt,cq as zt,fp as At}from"./context-fkXU6psv.js";import{r as h}from"./ext-react-C0MU9AHG.js";import{p as Qe,D as re,t as Et,L as Nt}from"./ksp-enum-names-D10uD7DF.js";import"./logger-2_QM1wvD.js";import{ad as Rt}from"./use-command-CafFDBCH.js";import{b as xe}from"./use-transmissions-CJq7aJWM.js";import"./lagrange-C8jk8-H2.js";import{g as et}from"./replay-session-controller-zIwyBhxi.js";import"./websocket-transport-B8c8eBbi.js";import{y as q,I as ie,aB as Lt,E as $t,w as ke,B as Ut,ap as Ot}from"./Modal-nvZKnG3_.js";import{G as Pt,M as je,N as Dt}from"./Notice-Dp2sMUkd.js";import{N as Ce,U as fe}from"./contributionsRead-CFwQ5Hmf.js";import"./processorPerfBudget-Bqs2fYIQ.js";import{l as Fe}from"./index-DqUIH49W.js";import{i as Bt,D as It}from"./VersionMismatchBanner-BHLrxne_.js";import d from"./ext-styled-components-DAuodqsN.js";import{b as Kt}from"./full-history-replay-BJOAqYKJ.js";import{e as Vt,s as Ht}from"./topic-fields-C6q_KhjV.js";import{k as Me}from"./orbital-DrYy8Dcv.js";const tt={recording:!1,vesselName:null,frameCount:0,saveFailure:null};let _=tt;const Q=new Set;function Te(){return _}function ho(e){_={...e,saveFailure:_.saveFailure};for(const t of Q)t()}function fo(e){if(_.saveFailure!==e){_={..._,saveFailure:e};for(const t of Q)t()}}function _t(e){return Q.add(e),()=>{Q.delete(e)}}function go(){_=tt,Q.clear()}function de(){return ve("missionHistory")}function W(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),r=Math.floor(t/3600),n=Math.floor(t%3600/60),o=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`}function ne(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const i=Number(t);return Number.isFinite(i)&&i>=0?i*1e3:null}const r=t.split(":").map(i=>i.trim());if(r.some(i=>i===""||!/^\d+(\.\d+)?$/.test(i)))return null;const n=r.map(Number),a=n.length===2?n[0]*60+n[1]:n.length===3?n[0]*3600+n[1]*60+n[2]:null;return a===null?null:a*1e3}function Gt({flight:e,onChange:t}){const r=e.chapters??[],n=Math.max(0,e.lastSampleAt-e.launchedAt),[o,a]=h.useState(""),[i,c]=h.useState(""),[g,f]=h.useState(""),[m,x]=h.useState(null),[j,N]=h.useState(null),[z,R]=h.useState(""),[S,L]=h.useState(""),[E,B]=h.useState(""),[y,C]=h.useState(null);function A(p){N(p.id),R(p.label),L(W(p.startMs)),B(W(p.endMs)),C(null)}function w(){N(null),C(null)}async function G(){const p=de();if(!p)return;const F=ne(i),M=ne(g);if(o.trim()===""){x("Label required");return}if(F===null||M===null){x("Start and end must be mm:ss");return}if(M<=F){x("End must be after start");return}x(null),await p.addChapter(e.id,{label:o.trim(),startMs:F,endMs:M}),a(""),c(""),f(""),t()}async function I(p){const F=de();if(!F)return;const M=ne(S),U=ne(E);if(z.trim()===""){C("Label required");return}if(M===null||U===null){C("Start and end must be mm:ss");return}if(U<=M){C("End must be after start");return}C(null),await F.updateChapter(e.id,p,{label:z.trim(),startMs:M,endMs:U}),N(null),t()}async function v(p){const F=de();F&&(await F.removeChapter(e.id,p),j===p&&w(),t())}return s.jsxs(qt,{children:[s.jsx(Wt,{children:"Chapters"}),r.length===0?s.jsx(Yt,{children:"No chapters yet. Add markers to slice the flight."}):s.jsx(Jt,{children:r.slice().sort((p,F)=>p.startMs-F.startMs).map(p=>{const F=j===p.id;return s.jsx(Xt,{children:F?s.jsxs(s.Fragment,{children:[s.jsx(q,{type:"text",value:z,onChange:M=>R(M.target.value),"aria-label":"Chapter label"}),s.jsx(q,{type:"text",value:S,onChange:M=>L(M.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),s.jsx(q,{type:"text",value:E,onChange:M=>B(M.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),s.jsxs(ze,{children:[s.jsx(rr,{type:"button",onClick:()=>void I(p.id),children:"Save"}),s.jsx(nr,{type:"button",onClick:w,children:"Cancel"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Zt,{title:p.label,children:p.label}),s.jsxs(Qt,{children:[W(p.startMs)," – ",W(p.endMs)]}),s.jsxs(er,{children:["(",W(p.endMs-p.startMs),")"]}),s.jsxs(ze,{children:[s.jsx(tr,{type:"button",onClick:()=>A(p),children:"edit"}),s.jsx(ie,{type:"button",onClick:()=>void v(p.id),"aria-label":`Remove chapter ${p.label}`,children:"×"})]})]})},p.id)})}),y&&s.jsx(Ae,{children:y}),s.jsxs(or,{children:[s.jsx(q,{type:"text",placeholder:"Chapter name",value:o,onChange:p=>a(p.target.value),"aria-label":"New chapter label"}),s.jsx(q,{type:"text",placeholder:"0:00",value:i,onChange:p=>c(p.target.value),"aria-label":"New chapter start (mm:ss)"}),s.jsx(q,{type:"text",placeholder:W(n),value:g,onChange:p=>f(p.target.value),"aria-label":"New chapter end (mm:ss)"}),s.jsx(sr,{type:"button",onClick:()=>void G(),children:"+ add"})]}),m&&s.jsx(Ae,{children:m})]})}const qt=d.div`
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
`,Xt=d(Lt).attrs({cols:"minmax(120px, 1fr) auto auto auto",gap:"related-comfortable"})`
  font-size: var(--font-size-compact);
`,Zt=d.span`
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Qt=d.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-muted);
  white-space: nowrap;
`,er=d.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-faint);
  font-size: var(--font-size-compact);
  white-space: nowrap;
`,ze=d.span`
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
`,Ae=d.div`
  margin-top: var(--gap-sub-readout);
  font-size: var(--font-size-compact);
  color: var(--color-tag-red-fg);
`,rt=new WeakMap;function ar(e,t){rt.set(e,t)}function ir(e){return rt.get(e)}const ge={t:[],v:[]};function lr(e){switch(e){case we.LastBeforeBlackout:return"last-before-blackout";case we.Recorded:return"recorded";default:return null}}function cr(e){const t=[];let r=null;for(let n=0;n<e.length;n++){const o=lr(e[n].meta.staleness);if(o===null){r=null;continue}if(r!==null&&r.status===o){r.to=n;continue}r={from:n,to:n,status:o},t.push(r)}return t}const Ee=new WeakMap;function dr(e){const t=Ee.get(e);if(t)return t;const r={t:e.t,v:e.v.map(n=>{const o=ee(n);return typeof o=="number"?o:Number.NaN}),basis:e.basis};return Ee.set(e,r),r}function ur(e,t){return e.length===t.length&&e.every((r,n)=>r.to===t[n].to&&r.v===t[n].v)}function pr(e,t){return e.length===t.length&&e.every((r,n)=>r.from===t[n].from&&r.to===t[n].to&&r.status===t[n].status)}function Ne(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((r,n)=>Object.is(r,t[n]))}function hr(e,t){return e.length===t.length&&e.every((r,n)=>r.from===t[n].from&&r.to===t[n].to&&r.basis===t[n].basis&&r.bandKind===t[n].bandKind&&Ne(r.bandLo,t[n].bandLo)&&Ne(r.bandHi,t[n].bandHi))}function nt(e,t){return[e?.toWire(),t?.toWire()]}function fr(e,t,r,n,o){const a=new Map((t.sampleRange(r,n,o)??[]).map(g=>[g.validAt,JSON.stringify(g.payload)])),i=[];let c;for(const g of e){const f=a.get(g.validAt)??JSON.stringify(g.payload);f!==c&&(c=f,i.push(g))}return i}function ee(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function gr(e,t){const r=h.useRef(ge),n=h.useRef(void 0),o=ht(),a=Ze(),i=e,c=h.useCallback(f=>{if(!o||!a)return()=>{};const m=ft(o,a,i),x=a.holdWindow(i,t),j=a.subscribeFrame(f);return()=>{j(),x(),m()}},[o,a,i,t]),g=h.useCallback(()=>{if(!a)return ge;const f=a.currentFrame(),m=`${i}\0${t}\0${f.viewUt}\0${a.clock.getEpoch()}\0${a.sampleStatus(i,f)}\0${a.dataRevision()}`;if(n.current===m)return r.current;const x=mr(a,i,t,f.viewUt,r.current);return n.current=m,r.current=x,x},[a,i,t]);return h.useSyncExternalStore(c,g)}function mr(e,t,r,n,o){const a=n-r,i=e.isProcessorTopic(t)?e.sampleProcessorRange(t,a,n):e.sampleRange(t,a,n),c=e.sampleReckonedTail(t,a,n),g=e.tagsOf(t),f=g.kind==="event"?"none":g.kind==="discrete"?"step":"linear",m=g.kind==="event"?fr(i??[],e,g.topic,a,n):i??[];if(m.length===0&&c.length===0)return ge;const x=m.map(v=>v.validAt),j=m.map(v=>ee(v.payload)),N=m.map(v=>v.payload),z=new Map,R=[],S=[];for(let v=0;v<m.length;v++){if(v===0)continue;if(f==="none")break;if(m[v].meta.gapSinceUt!=null){R.push(v);continue}if(Object.is(j[v],j[v-1]))continue;const p=e.gapModel(t,m[v-1],m[v]);if(p?.carried===!1){R.push(v);continue}p?.carried&&S.push({to:v,...dr(p)})}const L=cr(m),E=[];for(const v of c){const p=x.length;x.push(v.atUt),j.push(ee(v.value)),N.push(v.value);const{bandLo:F,bandHi:M}=v,[U,V]=nt(F,M),K=U!==void 0&&V!==void 0?v.bandKind:void 0;z.set(p,{basis:v.basis,band:F!==void 0&&M!==void 0&&K!==void 0?{lo:F,hi:M,kind:K}:void 0});const O=E[E.length-1],te=O!==void 0&&O.basis===v.basis&&O.to===p-1&&O.bandKind===K;if(O!==void 0&&te){O.to=p,U!==void 0&&V!==void 0&&K!==void 0&&(O.bandLo?.push(U),O.bandHi?.push(V));continue}if(U!==void 0&&V!==void 0&&K!==void 0){E.push({from:p,to:p,basis:v.basis,bandLo:[U],bandHi:[V],bandKind:K});continue}E.push({from:p,to:p,basis:v.basis})}const B=m.length>0?x[m.length-1]:-1,y=E.length===0&&m.length>0&&f!=="none"&&e.sampleStatus(t,e.currentFrame())==="live"&&Math.floor(n)>B,C=E.length>0?n:y?Math.floor(n):void 0,A=o,w=A.breaks??[];if(A.t.length===x.length&&A.t.every((v,p)=>v===x[p])&&A.v.every((v,p)=>Object.is(v,j[p]))&&w.length===R.length&&w.every((v,p)=>v===R[p])&&ur(A.bridges??[],S)&&pr(A.spans??[],L)&&hr(A.reckoned??[],E)&&A.windowEndAt===C&&(A.interpolation??"linear")===f)return A;const I={t:x,v:j,basis:"ut-seconds",breaks:R,bridges:S,spans:L,reckoned:E,interpolation:f,windowEndAt:C};return ar(I,{payloads:N,modelled:z}),I}const vr=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function J(e){const t=e.split(".").flatMap(a=>a.split(/(?=[A-Z])/)).map(a=>a.toLowerCase()).filter(a=>a.length>0).map(a=>vr[a]??a);if(t.length===0)return e;const[r,...n]=t;return[r===r.toUpperCase()?r:r[0].toUpperCase()+r.slice(1),...n].join(" ")}function br(e,t){const r=t.split("."),n=[];let o=[],a=!1;for(let i=0;i<r.length;i++){const c=wt(e,r.slice(0,i+1).join("."));if(c===void 0){o.push(r[i]);continue}o.length>0&&n.push(J(o.join("."))),o=[],n.push(c),a=!0}return a?(o.length>0&&n.push(J(o.join("."))),n.join(" › ")):J(t)}function xr(e,t,r){return r.has(e)?!0:St(`${e}.${t}`)?.rawTopic===e}const yr=Object.freeze({"vessel.target":"Target"});function Sr(e,t){const r=br(e,t),n=yr[e];if(n===void 0)return r;const o=r.split(" ")[0],a=o===o.toUpperCase()?r:r[0].toLowerCase()+r.slice(1);return`${n} ${a}`}function wr(e,t){return{key:`${e}.${t.path}`,label:Sr(e,t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function kr(e,t){const r=new Set(t),n=[...new Set([...bt(),...e,...t])].filter(c=>!xt(c)).sort(),o=[],a=[],i=[];for(const c of n){if(yt(c)){i.push(c);continue}const g=Vt(c).filter(f=>xr(c,f.path,r));if(g.length===0){a.push(c);continue}for(const f of g)o.push(wr(c,f))}return{keys:o,undescribed:a,collections:i}}function le(){return[...gt.map(e=>e.topic),...mt().map(e=>e.topic)]}let ue;function ye(e,t){const r=`${e.join(",")}|${t.join(",")}|${vt()}`;if(ue?.key===r)return ue.built;const n=kr(e,t);return ue={key:r,built:n},n}function ot(e=X(),t=le()){return ye(e,t).keys}function jr(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!Cr.has(e.unit)}const Cr=new Set(["bool","enum","flag","id","raw","text"]);function Fr(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function mo(e,t){const r=e?.enumEncoding;return r?.by!=="ordinal"||typeof t!="number"?t:r.names[t]??t}function vo(e=X(),t=le()){return ye(e,t).undescribed}function bo(e=X(),t=le()){return ye(e,t).collections}function Re(){return le().join(",")}function st(){const e=h.useSyncExternalStore(kt,X,X),t=h.useSyncExternalStore(jt,Re,Re);return h.useMemo(()=>ot(e,t.split(",")),[e,t])}function Mr(){const e=st();return h.useMemo(()=>e.filter(jr),[e])}function xo(){const e=st();return h.useMemo(()=>e.filter(Fr),[e])}const Le=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function $e(){return ve("missionHistory")}function Tr({missionId:e,fromUt:t,toUt:r}){const n=Mr(),[o,a]=h.useState(new Set),[i,c]=h.useState([]),[g,f]=h.useState(!1),[m,x]=h.useState(null);h.useEffect(()=>()=>{$e()?.evictFullHistoryStore(e)},[e]);const j=h.useMemo(()=>n.map(y=>({key:y.key,label:y.label??y.key,unit:y.unit,group:Ar(y.key)})),[n]);h.useEffect(()=>{const y=$e();if(!y||o.size===0){c([]),x(null);return}let C=!1;f(!0),x(null);const A=[...o];return Promise.all(A.map(w=>y.queryRange(w,t,r,e))).then(w=>{if(C)return;const G=new Map(n.map(v=>[v.key,v])),I=A.map((v,p)=>{const F=zr(w[p],t),M=G.get(v);return{id:v,label:M?.label??v,axis:"primary",color:Le[p%Le.length],type:"line",data:F}});c(I)}).catch(w=>{C||x(w instanceof Error?w.message:String(w))}).finally(()=>{C||f(!1)}),()=>{C=!0}},[o,e,t,r,n]);const N=Math.max(0,(r-t)*1e3),z=N>0?[0,N]:[0,6e4],R=i.some(y=>y.data.x.length>0),S=[...o].map(y=>n.find(C=>C.key===y)),L=[...new Set(S.map((y,C)=>y?.label??[...o][C]))],E=[...new Set(S.map(y=>y?.unit))],B=Bt(L.length>0&&L.length<=2?L.join(" / "):void 0,E.length===1?E[0]:void 0);return s.jsxs(Er,{children:[s.jsxs(Nr,{children:[s.jsx(Rr,{children:"Series"}),s.jsx(It,{keys:j,value:o,onChange:a,placeholder:"Add a data key...",emptyHint:j.length===0?"No numeric keys in the current schema":"No matches"})]}),m&&s.jsxs(Ur,{role:"alert",children:["Failed to load samples: ",m]}),o.size===0?s.jsx(Ue,{children:"Pick one or more numeric telemetry keys above to plot them."}):s.jsxs(Lr,{children:[g&&s.jsx($r,{children:"Loading..."}),!g&&!R&&s.jsx(Ue,{children:"No recorded samples for the selected keys."}),R&&s.jsx(Pt,{chrome:"bare",series:i,xDomain:z,xAxisLabel:"Mission time",yAxisLabel:B,height:260})]})]})}function zr(e,t){const r=[],n=[];for(let o=0;o<e.t.length;o++){const a=ee(e.v[o]);typeof a!="number"||!Number.isFinite(a)||(r.push((e.t[o]-t)*1e3),n.push(a))}return{x:r,y:n}}function Ar(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const Er=d.div`
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
`,Ue=d.div`
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
`;function Or(e,t,r=[]){return t.filter(n=>at(e,n.validAt)?n.recordedAt===void 0?!0:(Pr(r,n.validAt,n.recordedAt)??e)===e:!1)}function at(e,t){const{firstValidUt:r,lastValidUt:n}=e;return r===void 0||n===void 0?!1:t>=r&&t<=n}function Pr(e,t,r){let n;for(const o of e)!at(o,t)||o.launchedAt>r||(n===void 0||o.launchedAt>n.launchedAt)&&(n=o);return n}function Oe(e,t){t.firstValidUt!==void 0&&(e.firstValidUt=Math.min(e.firstValidUt??t.firstValidUt,t.firstValidUt)),t.lastValidUt!==void 0&&(e.lastValidUt=Math.max(e.lastValidUt??t.lastValidUt,t.lastValidUt))}function Dr(e,t){const r=[],n=new Map;for(const o of e){const a=o.lastSampleAt-o.launchedAt,i=o.endReason===void 0&&o.outcome===void 0&&t.has(o.vesselName),c=i?n.get(o.vesselName):void 0;if(c){c.ids.push(o.id),c.launchedAt=Math.min(c.launchedAt,o.launchedAt),c.durationMs+=a,c.sampleCount+=o.sampleCount,Oe(c,o);continue}const g={flight:o,ids:[o.id],stillFlying:i,launchedAt:o.launchedAt,durationMs:a,sampleCount:o.sampleCount};Oe(g,o),r.push(g),i&&n.set(o.vesselName,g)}return r}function Br(e){return new Date(e).toLocaleString()}function Ir(e,t){return fe(ae("s",(t-e)/1e3))}const Kr={[H.Recovered]:"Recovered",[H.Crashed]:"Crashed",[H.Reverted]:"Reverted",[H.Destroyed]:"Destroyed",[H.Terminated]:"Terminated",[H.Docked]:"Docked"};function Vr(e,t){if(e===void 0)return"Not known";const r=Kr[e]??"Not known";return e===H.Docked&&t?`${r} with ${t}`:r}function Hr(e){const t=[e.fundsEarned===null?null:`+${fe(ae("funds",e.fundsEarned),{decimals:0})}`,e.scienceEarned===null?null:`+${fe(ae("science",e.scienceEarned),{decimals:1})}`].filter(r=>r!==null);return[`Recovered ${e.recoveryLocation}`,e.recoveryFactor,t.length>0?t.join(" · "):"no funds or science awarded"].filter(r=>r!=="").join(" · ")}function P(){return ve("missionHistory")}function Pe(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),r=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${r}.fixture.json`}function De(e,t){const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(r),o=document.createElement("a");o.href=n,o.download=t,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(n)}function yo({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:r=!1}={}){const n=e==="main",[o,a]=h.useState([]),[i,c]=h.useState([]),[g,f]=h.useState(null),[m,x]=h.useState(!1),[j,N]=h.useState(!1),[z,R]=h.useState(null),[S,L]=h.useState(()=>new Set),[E,B]=h.useState(()=>Qe()),y=xe("trackingStation.catalog"),C=h.useMemo(()=>{const u=y.state==="observed"||y.state==="held"?y.value:void 0;return new Set((u?.entries??[]).filter(l=>l.contact!==Ct.Gone).map(l=>l.name))},[y]),A=h.useMemo(()=>Dr(o,C),[o,C]),w=h.useCallback(async()=>{const u=P();if(!u)return;let l;try{l=await u.listFlights()}catch(b){console.warn("FlightsManager: failed to load flights",b);return}if(a(l.sort((b,T)=>T.launchedAt-b.launchedAt)),typeof u.listContractFinishes=="function"){try{c(await u.listContractFinishes())}catch(b){console.warn("FlightsManager: failed to load contract finishes",b)}L(b=>{const T=new Set;for(const k of l)b.has(k.id)&&T.add(k.id);return T.size===b.size?b:T})}},[]);h.useEffect(()=>{w()},[w]),h.useEffect(()=>{const u=P();if(typeof u?.onFlightListChange=="function")return u.onFlightListChange(()=>{w()})},[w]);const G=async u=>{const l=P();if(l){for(const b of u)await l.deleteFlight(b);f(null),await w()}},I=async u=>{const l=P();if(!l)return;const b=await l.exportFlight(u.id);De(b,Pe(u))},v=async u=>{const l=P();if(!l)return;const b=await l.exportFlight(u.id),T={id:u.id,vesselName:u.vesselName,launchedAt:u.launchedAt,firstFrameUt:u.firstFrameUt??0,lastFrameUt:u.lastFrameUt??0,frameCount:u.sampleCount};et().start(T,b)},p=async()=>{const u=P();u&&(await u.clearAllFlights(),x(!1),await w())},F=u=>{L(l=>{const b=new Set(l),T=u.every(k=>b.has(k));for(const k of u)T?b.delete(k):b.add(k);return b})},M=()=>{L(u=>u.size===o.length?new Set:new Set(o.map(l=>l.id)))},U=async()=>{const u=P();if(!u)return;const l=Array.from(S);for(const b of l)await u.deleteFlight(b);N(!1),await w()},V=async u=>{const l=P();l&&(await l.setFlightStarred(u.id,!u.starred),await w())},K=async u=>{const l=P(),b=u?re:0;Et(b),B(b),u&&l&&(await l.pruneFlightsKeepLatest({keepCount:b}),await w())},O=async()=>{const u=P();if(!u)return;const l=Array.from(S),b=new Map(o.map(T=>[T.id,T]));for(const T of l){const k=b.get(T);if(!k)continue;const pt=await u.exportFlight(T);De(pt,Pe(k))}},te=o.length>0&&S.size===o.length,ut=S.size>0&&S.size<o.length,Se=(()=>{const u=[...o].sort((T,k)=>k.launchedAt-T.launchedAt);let l=0,b=0;for(const T of u)T.starred||(l+=1,l>re&&(b+=1));return b})();return s.jsxs(Gr,{children:[n&&s.jsx(_r,{missionHistoryEnabled:t,recordAllTopics:r}),o.length===0?s.jsx($t,{children:"No flight history recorded yet"}):s.jsxs(s.Fragment,{children:[s.jsxs(Zr,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx(sn,{children:s.jsx(he,{ref:u=>{u&&(u.indeterminate=ut)},checked:te,onChange:M,"aria-label":te?"Clear selection":"Select all flights"})}),s.jsxs(an,{children:[s.jsx(ke,{size:12,fill:"currentColor","aria-hidden":"true"}),s.jsx(Be,{children:"Kept (exempt from auto-delete)"})]}),s.jsx(Y,{children:"Vessel"}),s.jsx(Y,{children:"Launched"}),s.jsx(Y,{title:"Game time, not time at the desk",children:"Duration"}),s.jsx(Y,{children:"Samples"}),s.jsx(Y,{children:"Ended"}),s.jsx(Y,{children:s.jsx(Be,{children:"Actions"})})]})}),s.jsx("tbody",{children:A.map(u=>{const l=u.flight,b=z===l.id,T=u.ids.every(k=>S.has(k));return s.jsxs(h.Fragment,{children:[s.jsxs(Ve,{$current:!1,children:[s.jsx(D,{children:s.jsx(he,{checked:T,onChange:()=>F(u.ids),"aria-label":`Select flight ${l.vesselName||l.id}`})}),s.jsx(D,{children:s.jsx(ie,{type:"button",pressed:!!l.starred,onClick:()=>void V(l),"aria-label":l.starred?`Unstar ${l.vesselName||"flight"}`:`Star ${l.vesselName||"flight"} (keep from auto-delete)`,title:l.starred?"Kept from auto-delete":"Keep from auto-delete",children:s.jsx(ke,{size:"var(--icon-size-control)",fill:l.starred?"currentColor":"none"})})}),s.jsxs(D,{children:[l.vesselName||Ce,l.launchName&&s.jsxs(tn,{children:["launched as ",l.launchName]}),l.evaKerbals&&l.evaKerbals.length>0&&s.jsxs(Qr,{children:["EVA: ",l.evaKerbals.join(", ")]}),Or(u,i,A).map(k=>s.jsxs(en,{children:[s.jsx(Ut,{size:"sm",tone:k.outcome==="Completed"?"go":"nogo",children:k.outcome==="Completed"?"completed":"failed"}),s.jsx("span",{children:k.title??Ce}),s.jsx(He,{children:s.jsx(je,{value:k.validAt,context:{frame:"scet"}})}),s.jsx(He,{children:s.jsx(je,{value:k.deliveredAt,context:{frame:"received"}})})]},`${k.id}:${k.outcome}`)),l.outcome?.kind==="recovered"&&s.jsx(_e,{$tone:"go",title:Hr(l.outcome),children:"recovered"}),l.outcome?.kind==="crashed"&&s.jsx(_e,{$tone:"nogo",title:`Crashed at ${l.outcome.body} (${l.outcome.situation}) · ${l.outcome.partsLostCount} part(s) lost${l.outcome.kerbalsKilled.length>0?` · KIA: ${l.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),s.jsx(D,{children:Br(u.launchedAt)}),s.jsx(D,{children:Ir(0,u.durationMs)}),s.jsx(D,{children:u.sampleCount.toLocaleString()}),s.jsx(D,{children:u.stillFlying?"Still flying":Vr(l.endReason,l.joinedVesselName)}),s.jsx(D,{children:s.jsxs(qr,{children:[s.jsx(Wr,{type:"button",$open:b,onClick:()=>R(b?null:l.id),"aria-label":b?"Close graph":"Graph this flight","aria-expanded":b,children:b?"− graph":"＋ graph"}),n&&s.jsx(Yr,{type:"button",onClick:()=>void v(l),"aria-label":`Replay ${l.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),s.jsx(Ie,{type:"button",onClick:()=>void I(l),"aria-label":`Download fixture for ${l.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),g===l.id?s.jsxs(pe,{children:[s.jsx(oe,{onClick:()=>void G(u.ids),children:"Delete"}),s.jsx(se,{onClick:()=>f(null),children:"Cancel"})]}):s.jsx(ie,{onClick:()=>f(l.id),children:"×"})]})})]}),b&&s.jsx(Ve,{$current:!1,children:s.jsxs(D,{colSpan:8,style:{padding:0},children:[s.jsx(Gt,{flight:l,onChange:()=>void w()}),s.jsx(Tr,{missionId:l.id,fromUt:l.firstValidUt??l.firstFrameUt??0,toUt:l.lastValidUt??l.lastFrameUt??0})]})})]},l.id)})})]}),s.jsxs(rn,{children:[s.jsx(nn,{children:S.size>0&&(j?s.jsxs(pe,{children:[s.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",S.size," selected flight",S.size===1?"":"s","?"]}),s.jsx(oe,{onClick:()=>void U(),children:"Delete"}),s.jsx(se,{onClick:()=>N(!1),children:"Cancel"})]}):s.jsxs(s.Fragment,{children:[s.jsxs(on,{children:[S.size," selected"]}),s.jsx(Ie,{type:"button",onClick:()=>void O(),title:"Download fixtures for the selected flights",children:"↓ download"}),s.jsx(oe,{onClick:()=>N(!0),children:"Delete"}),s.jsx(se,{onClick:()=>L(new Set),children:"Clear"})]}))}),s.jsxs(ln,{children:[s.jsxs(cn,{title:`Keep the ${re} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[s.jsx(he,{checked:E>0,onChange:u=>void K(u.target.checked)}),s.jsxs("span",{children:["Keep latest ",re,E===0&&Se>0&&s.jsxs(dn,{children:[" ","(",Se," would be deleted)"]})]})]}),m?s.jsxs(pe,{children:[s.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),s.jsx(oe,{onClick:()=>void p(),children:"Clear all"}),s.jsx(se,{onClick:()=>x(!1),children:"Cancel"})]}):s.jsx(un,{onClick:()=>x(!0),children:"Clear all"})]})]})]})]})}function _r({missionHistoryEnabled:e,recordAllTopics:t}){const r=h.useSyncExternalStore(_t,Te,Te);return s.jsxs(Jr,{children:[r.saveFailure&&s.jsxs(Dt,{tone:"nogo",title:"Flight not saved",children:[r.saveFailure.vesselName,": ",r.saveFailure.cause]}),e?r.recording?s.jsxs(Xr,{children:["● recording ",r.vesselName??"flight"," (",r.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):s.jsx(Ke,{children:"Auto-record armed: capture starts the moment a flight begins."}):s.jsx(Ke,{children:"Mission history is off, enable it in Settings to auto-record."})]})}const Be=d.span`
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
`,Ie=d.button`
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
`,Ke=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Xr=d.span`
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
`,Zr=d.table`
  border-collapse: collapse;
  width: 100%;
  overflow-y: auto;
  font-size: var(--font-size-compact);
`,Y=d.th`
  text-align: left;
  padding: var(--inset-surface);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
`,Ve=d.tr`
  background: ${({$current:e})=>e?"var(--color-go-status)":"transparent"};
  &:hover { background: var(--color-surface-raised); }
`,D=d.td`
  /* 7px is computed, not chosen: it is the 6px vertical half of the surface
     inset Th carries, plus the 1px that makes a body row taller than the
     header row. It tracks Th, not the spacing grid. */
  padding: 7px var(--gutter-table-cell);
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-surface-raised);
  white-space: nowrap;
`,Qr=d.span`
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
`,He=d.span`
  white-space: nowrap;
`,tn=d.span`
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,_e=d.span`
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
`,pe=d.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
`,oe=d.button`
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  color: var(--color-tag-red-fg);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { background: var(--color-nogo-muted); }
`,se=d.button`
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
`,he=d.input.attrs({type:"checkbox"})`
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
`,pn=new Ft({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class So{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new Nt;historyCache=new Map;changesInOrder=new Map;async connect(){await this.pruneToKeepCount()}disconnect(){}schema(){return ot()}subscribe(t,r){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,r,n,o){if(!o)return{t:[],v:[]};const a=Mt(t);if(!a)return{t:[],v:[]};const i=await this.getFullHistoryStore(o);if(!i)return{t:[],v:[]};const c=i.isProcessorTopic(a)?i.sampleProcessorRange(a,r,n):i.sampleRange(a,r,n);return c?{t:c.map(g=>g.validAt),v:c.map(g=>g.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(Z)}async getFlight(t){const r=await this.missionStore.getMissionMeta(t);return r?Z(r):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.meta.id)}async saveContractFinish(t){await this.missionStore.saveContractFinish(t),this.flightListSubscribers.fire()}listContractFinishes(){return this.missionStore.listContractFinishes()}async saveMissionPart(t,r,n){await this.inOrder(t.id,()=>this.missionStore.saveMissionPart(t,r,n)),this.historyCache.delete(t.id),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.id)}async pruneToKeepCount(t){const r=Qe();if(!(r<=0))try{await this.pruneFlightsKeepLatest({keepCount:r,keepId:t})}catch(n){Fe.warn("[MissionHistorySource] keep latest could not prune",{err:String(n)})}}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,r){const n=await this.missionStore.getMissionMeta(t);!n||!!n.starred===r||(await this.missionStore.updateMissionMeta(t,{starred:r}),this.flightListSubscribers.fire())}async setFlightEndReason(t,r,n,o){await this.inOrder(t,async()=>{const a=await this.missionStore.getMissionMeta(t);if(!a){Fe.warn("[MissionHistorySource] end reason for a mission not stored",{id:t});return}a.endReason===void 0&&(await this.missionStore.updateMissionMeta(t,{endReason:r,...o===void 0?{}:{joinedVesselId:o},...n===void 0?{}:{joinedVesselName:n}}),this.flightListSubscribers.fire())})}inOrder(t,r){const n=this.changesInOrder.get(t),o=n?n.then(r,r):r(),a=o.catch(()=>{});return this.changesInOrder.set(t,a),a.then(()=>{this.changesInOrder.get(t)===a&&this.changesInOrder.delete(t)}),o}async reopenFlight(t){await this.missionStore.updateMissionMeta(t,{endReason:void 0,joinedVesselId:void 0,joinedVesselName:void 0}),this.flightListSubscribers.fire()}async addChapter(t,r){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const a={id:r.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:r.label,startMs:r.startMs,endMs:r.endMs},i=[...n.chapters??[],a];return await this.missionStore.updateMissionMeta(t,{chapters:i}),this.flightListSubscribers.fire(),Z({...n,chapters:i})}async updateChapter(t,r,n){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const a=(o.chapters??[]).map(i=>i.id===r?{...i,...n}:i);return await this.missionStore.updateMissionMeta(t,{chapters:a}),this.flightListSubscribers.fire(),Z({...o,chapters:a})}async removeChapter(t,r){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const o=(n.chapters??[]).filter(a=>a.id!==r);return await this.missionStore.updateMissionMeta(t,{chapters:o}),this.flightListSubscribers.fire(),Z({...n,chapters:o})}async pruneFlightsKeepLatest(t){const r=await this.missionStore.pruneMissionsKeepLatest(t);for(const n of r)this.historyCache.delete(n);return r.length>0&&this.flightListSubscribers.fire(),r}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const r=this.historyCache.get(t);if(r)return r;const n=(async()=>{const o=await this.missionStore.getMissionFixture(t);if(!o)throw new Error(`mission fixture not found: ${t}`);return pn.record(),Kt(o.fixture)})();this.historyCache.set(t,n);try{return await n}catch{this.historyCache.delete(t);return}}}function Z(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchName:e.launchName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,endReason:e.endReason,evaKerbals:e.evaKerbals,joinedVesselId:e.joinedVesselId,joinedVesselName:e.joinedVesselName,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt,firstValidUt:e.firstValidUt,lastValidUt:e.lastValidUt}}function it(e){const t=new Set(e.parts.map(o=>Number(o.id))),r=e.parts.map(hn),n=r.find(o=>o.parentFlightId==null)??r.find(o=>!t.has(o.parentFlightId));for(const o of r)o.parentFlightId!=null&&!t.has(o.parentFlightId)&&(o.parentFlightId=n&&n!==o?n.flightId:null);return{topologySeq:e.parts.length,rootFlightId:n?n.flightId:0,parts:r}}function me(e){return e?[e.x.magnitude,e.y.magnitude,e.z.magnitude]:void 0}function hn(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage??null,crewCapacity:0,maxTemp:e.maxTemp?.magnitude??null,crashTolerance:0,dryMass:e.dryMass?.magnitude??null,orgPos:[$(e.position.x),$(e.position.y),$(e.position.z)],up:me(e.up),forward:me(e.forward),bounds:{size:{x:$(e.bounds.size.x),y:$(e.bounds.size.y),z:$(e.bounds.size.z)},center:e.bounds.center?{x:$(e.bounds.center.x),y:$(e.bounds.center.y),z:$(e.bounds.center.z)}:void 0},shape:e.shape??void 0,shapePoses:fn(e.shapePoses),fairing:gn(e.fairing),modules:e.modules}}function fn(e){if(!(!e||e.length===0))return e.map(({mesh:t,shown:r,transform:n})=>n&&n.length===12?{mesh:t,shown:r,transform:n.map(o=>o.magnitude)}:{mesh:t,shown:r})}function gn(e){if(!e)return;const t=me(e.axis)??[0,0,0],r=e.rings.map($),n=[];for(let o=0;o+1<r.length;o+=2)n.push({h:r[o],r:r[o+1]});return{pivot:{x:$(e.pivot.x),y:$(e.pivot.y),z:$(e.pivot.z)},axis:{x:t[0],y:t[1],z:t[2]},rings:n}}function mn(e){return e.currentTemp==null?null:{temperature:Me(e.currentTemp.magnitude),maxTemperature:e.maxTemp==null?null:Me(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp?.magnitude??null}}function vn(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),mn(r));return t}function bn(e){const t={};for(const[r,n]of Object.entries(e.resources))t[r]={amount:n.amount?.magnitude??null,maxAmount:n.maxAmount?.magnitude??null,...n.flow!=null?{flow:n.flow.magnitude}:{},...n.nominalFlow!=null?{nominalFlow:n.nominalFlow.magnitude}:{},...n.unratedProcess===!0?{unratedProcess:!0}:{}};return t}function lt(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),bn(r));return t}function xn(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function yn(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map(xn)}}function Sn(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),yn(r));return t}function $(e){return e.magnitude}function ct(e){return Array.from(new TextEncoder().encode(e),t=>/[A-Za-z0-9_-]/.test(String.fromCharCode(t))?String.fromCharCode(t):`%${t.toString(16).toUpperCase().padStart(2,"0")}`).join("")}function wo(e,t){return`spaceCenter.craft.${e}.${ct(t)}.parts`}function ko(e,t){const r=ct(t),n=be(`spaceCenter.craft.${e}.${r}.parts`),o=n.state==="observed"||n.state==="held"?n.value:void 0;return h.useMemo(()=>{if(!o)return;const a=Rt("CraftFileParts",structuredClone(o));return{topology:it(a),resourcesByFlightId:lt(a)}},[o])}const wn=[];function kn(e){const t=[ce(e.dvRadial,0),ce(e.dvNormal,0),ce(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function jo(){const e=be("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return h.useMemo(()=>!Array.isArray(t)||t.length===0?wn:t.map(kn),[t])}const jn="parts.shape.";function Cn(e){return`${jn}${e}`}function Fn(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function Ge(e){const t=Fn(e),r=new DataView(t.buffer,t.byteOffset,t.byteLength),n=new Uint16Array(t.byteLength>>1);for(let o=0;o<n.length;o++)n[o]=r.getUint16(o*2,!0);return n}function Mn(e){const t=[];for(const r of e.meshes){const n=Ge(r.positions),o=Ge(r.indices),a=[r.min.x,r.min.y,r.min.z],i=[r.max.x,r.max.y,r.max.z],c=new Float32Array(n.length-n.length%3);for(let f=0;f<c.length;f++){const m=f%3;c[f]=a[m]+n[f]/65535*(i[m]-a[m])}const g=c.length/3;o.length%3!==0||o.some(f=>f>=g)||t.push({key:r.key,shown:r.shown,positions:c,indices:o,sourceTriangles:r.sourceTriangles})}return{name:e.name,variant:e.variant??null,meshes:t}}const qe=new Map;function Tn(e,t){const r=qe.get(e);if(r&&r.wire===t)return r.shape;const n=Mn(t);return qe.set(e,{wire:t,shape:n}),n}function Co(e){const t=be(Cn(e)),r=t.state==="observed"||t.state==="held"?t.value:void 0;return h.useMemo(()=>r?Tn(e,r):void 0,[e,r])}function Fo(e){const t=xe("vessel.parts"),r=t.state==="observed"||t.state==="held"?t.value:void 0,n=h.useMemo(()=>vn(r),[r]),o=h.useMemo(()=>lt(r),[r]),a=h.useMemo(()=>Sn(r),[r]),i=[...e].sort((c,g)=>c-g).join(",");return h.useMemo(()=>{const c=i.length===0?[]:i.split(",").map(Number),g=new Map;for(const f of c)g.set(f,{thermal:n.get(f)??null,resources:o.get(f)??{},partState:a.get(f)});return g},[i,n,o,a])}const We=Object.freeze({status:"none"}),zn={t:[],readings:[]};function dt(e){return e==="recorded"||e==="last-before-blackout"?e:void 0}function An(e){return e!==null&&typeof e=="object"&&"magnitude"in e}function En(e,t){if(An(e))return{value:e,...t};if(typeof e=="number")return{value:Tt(t.lo.unit,e),...t}}function Nn(e){const t=ir(e);if(t===void 0)return zn;const r=new Map;for(const a of e.spans??[]){const i=dt(a.status);if(i!==void 0)for(let c=a.from;c<=a.to;c++)r.set(c,i)}let n;const o=e.t.map((a,i)=>{const c=ae("ut",a),g=t.payloads[i],f=t.modelled.get(i);if(f!==void 0){const x={status:"available",modelled:g,atUt:c,beyondReceived:!0,basis:f.basis,band:f.band?En(g,f.band):void 0};return n===void 0?{state:"pending",reckoning:x}:{state:"held",value:n.payload,asOfUt:n.at,grade:"held",reckoning:x}}n={payload:g,at:c};const m=r.get(i);return m!==void 0?{state:"held",value:g,asOfUt:c,grade:m,reckoning:We}:{state:"observed",value:g,atUt:c,reckoning:We}});return{t:e.t,readings:o,basis:e.basis,breaks:e.breaks,bridges:e.bridges,windowEndAt:e.windowEndAt,interpolation:e.interpolation}}function Mo(e,t){const r=gr(Ht(e),t);return h.useMemo(()=>Nn(r),[r])}function Rn(e,t,r,n){if(n===void 0)return null;if(t!==null&&t.status===n)return t.to=r,t;const o={from:r,to:r,status:n};return e.push(o),o}function Ln(e,t,r,n,o){if(n===void 0)return null;if(t!==null&&t.basis===n&&t.bandKind===o?.kind)return t.to=r,o!==void 0&&(t.bandLo?.push(o.lo),t.bandHi?.push(o.hi)),t;const a=o!==void 0?{from:r,to:r,basis:n,bandLo:[o.lo],bandHi:[o.hi],bandKind:o.kind}:{from:r,to:r,basis:n};return e.push(a),a}function $n(e){const t=ee(e);return typeof t=="number"?t:Number.NaN}function Un(e){const[t,r]=nt(e?.lo,e?.hi);if(!(e===void 0||t===void 0||r===void 0))return{lo:t,hi:r,kind:e.kind}}function To(e){const t=[],r=[],n={t:[],v:[],basis:e.basis,breaks:[],spans:t,reckoned:r,bridges:[],windowEndAt:e.windowEndAt,interpolation:e.interpolation},o=new Set(e.breaks??[]),a=new Map((e.bridges??[]).map(m=>[m.to,m])),i=new Map;let c=null,g=null,f=!1;for(let m=0;m<e.t.length;m++){o.has(m)&&(f=!0);const x=e.readings[m],j=x.reckoning.status==="available"?x.reckoning:void 0,N=$n(j?j.modelled:x.value);if(Number.isNaN(N))continue;const z=n.t.length,R=f&&z>0;R&&n.breaks.push(z),f=!1,i.set(m,z);const S=a.get(m);S!==void 0&&!R&&i.get(m-1)===z-1&&S.v.every(Number.isFinite)&&n.bridges.push({...S,to:z}),n.t.push(e.t[m]),n.v.push(N);const L=j===void 0&&x.state==="held"?dt(x.grade):void 0;c=Rn(t,c,z,L),g=Ln(r,g,z,j?.basis,Un(j?.band))}return n}function zo(){const e=Ze(),t=h.useCallback(n=>e?e.subscribeFrame(n):()=>{},[e]),r=h.useCallback(()=>e?.clock.getEpoch(),[e]);return h.useSyncExternalStore(t,r,r)}function Ao(){const e=xe("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return h.useMemo(()=>t?it(t):void 0,[t])}function Eo(){const e=et(),t=h.useSyncExternalStore(i=>e.subscribe(i),()=>e.getSnapshot());if(zt(),!t.active||!t.meta)return null;const r=t.meta,n=e.cursorUt(),o=Math.max(0,r.lastFrameUt-r.firstFrameUt),a=Math.max(0,n-r.firstFrameUt);return s.jsxs(On,{role:"region","aria-label":"Replay controls",children:[s.jsxs(Je,{children:[s.jsx(ie,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),s.jsxs(Pn,{children:["REPLAY: ",s.jsx(Dn,{children:r.vesselName||"Unnamed vessel"})]})]}),s.jsxs(Bn,{children:[s.jsx(Xe,{children:Ye(a)}),s.jsx(In,{type:"range",min:r.firstFrameUt,max:r.lastFrameUt,step:.1,value:n,onChange:i=>e.seekTo(Number(i.target.value)),"aria-label":"Seek to position"}),s.jsx(Xe,{children:Ye(o)})]}),s.jsxs(Je,{children:[s.jsxs(Kn,{value:String(t.rate),onChange:i=>e.setRate(Number(i.target.value)),"aria-label":"Playback rate",children:[s.jsx("option",{value:"0.5",children:"0.5×"}),s.jsx("option",{value:"1",children:"1×"}),s.jsx("option",{value:"2",children:"2×"}),s.jsx("option",{value:"5",children:"5×"}),s.jsx("option",{value:"10",children:"10×"}),s.jsx("option",{value:"50",children:"50×"})]}),s.jsx(Vn,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function Ye(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),r=Math.floor(t/3600),n=Math.floor(t%3600/60),o=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`}const On=d.div`
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
`,Je=d(Ot).attrs({justify:"start"})`
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
`,Xe=d.span`
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
`,Hn=new Set(["vessel.flight","vessel.orbit","vessel.propulsion","vessel.resources"]);function _n(e){return J(e.split(".")[0])}function No(e,t=new Set(X())){const r=At(e.topic);if(t.has(e.topic)){const o=e.topic.split(".").slice(1).join("."),a=r??(o===""?void 0:J(o)),i=a===void 0?e.label:`${a} › ${e.label}`,c=_n(e.topic);return{group:c,label:i,summary:`${c} › ${i}`,common:!1}}const n=r??J(e.topic);return{group:n,label:e.label,summary:`${n} › ${e.label}`,common:Hn.has(e.topic)}}export{ko as A,gr as B,Mr as C,Co as D,Fo as E,yo as F,xo as G,Mo as H,zo as I,st as J,Ao as K,mo as L,So as M,jn as P,Eo as R,nt as a,lt as b,Sn as c,it as d,ct as e,wo as f,Mn as g,Tn as h,Te as i,bo as j,le as k,ot as l,vo as m,J as n,jr as o,Fr as p,Cn as q,To as r,ee as s,$n as t,jo as u,go as v,No as w,fo as x,ho as y,_t as z};
