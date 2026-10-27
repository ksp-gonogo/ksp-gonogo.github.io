import{j as s}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{bc as ge,bZ as be,cy as Z,R as rt,cj as ot,cu as nt,cC as st,cB as at,dg as it,cr as lt,dl as ct,ah as dt,bb as _,bf as ut,a_ as X,a$ as pt,b9 as le,dm as ht}from"./view-clock-formula-DWdx9uIK.js";import{r as f}from"./ext-react-C0MU9AHG.js";import{o as He,D as oe,s as ft,L as gt}from"./ksp-enum-names-BaUJpb7I.js";import{A as mt}from"./screen-C-dJXqGO.js";import{ba as vt,bc as bt,aW as xt,i as yt,aH as St,b7 as _e,bg as wt}from"./lagrange-B04hUjNT.js";import{w as me}from"./use-transmissions-CKqZz1Fq.js";import{g as Ve}from"./replay-session-controller-B3l58CtX.js";import"./websocket-transport-BdZP1jnC.js";import{y as q,av as kt,E as jt,w as xe,ak as Ct}from"./ModalSaveBar-D_QuktJU.js";import{G as Mt,N as Ft}from"./Notice-BHJtYwzW.js";import{N as zt,w as fe}from"./contributionsRead-ClHDEX59.js";import"./processorPerfBudget-C2K5sHZn.js";import{l as ye}from"./index-DqUIH49W.js";import{h as Tt,D as Et}from"./VersionMismatchBanner-B3mwyWeZ.js";import c from"./ext-styled-components-DAuodqsN.js";import{b as Nt}from"./full-history-replay-CLvD7fXf.js";import{e as At,s as Rt}from"./topic-fields-B7y5_duX.js";import{k as Se}from"./orbital-C_Ji7oVD.js";const Ge={recording:!1,vesselName:null,frameCount:0,saveFailure:null};let V=Ge;const ee=new Set;function we(){return V}function Wo(e){V={...e,saveFailure:V.saveFailure};for(const t of ee)t()}function Yo(e){if(V.saveFailure!==e){V={...V,saveFailure:e};for(const t of ee)t()}}function Lt(e){return ee.add(e),()=>{ee.delete(e)}}function Jo(){V=Ge,ee.clear()}function ce(){return ge("missionHistory")}function W(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),r=Math.floor(t/3600),o=Math.floor(t%3600/60),n=t%60;return r>0?`${r}:${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function ne(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const l=Number(t);return Number.isFinite(l)&&l>=0?l*1e3:null}const r=t.split(":").map(l=>l.trim());if(r.some(l=>l===""||!/^\d+(\.\d+)?$/.test(l)))return null;const o=r.map(Number),a=o.length===2?o[0]*60+o[1]:o.length===3?o[0]*3600+o[1]*60+o[2]:null;return a===null?null:a*1e3}function $t({flight:e,onChange:t}){const r=e.chapters??[],o=Math.max(0,e.lastSampleAt-e.launchedAt),[n,a]=f.useState(""),[l,d]=f.useState(""),[h,m]=f.useState(""),[y,w]=f.useState(null),[z,E]=f.useState(null),[b,F]=f.useState(""),[T,R]=f.useState(""),[L,$]=f.useState(""),[S,x]=f.useState(null);function N(u){E(u.id),F(u.label),R(W(u.startMs)),$(W(u.endMs)),x(null)}function k(){E(null),x(null)}async function K(){const u=ce();if(!u)return;const j=ne(l),C=ne(h);if(n.trim()===""){w("Label required");return}if(j===null||C===null){w("Start and end must be mm:ss");return}if(C<=j){w("End must be after start");return}w(null),await u.addChapter(e.id,{label:n.trim(),startMs:j,endMs:C}),a(""),d(""),m(""),t()}async function G(u){const j=ce();if(!j)return;const C=ne(T),U=ne(L);if(b.trim()===""){x("Label required");return}if(C===null||U===null){x("Start and end must be mm:ss");return}if(U<=C){x("End must be after start");return}x(null),await j.updateChapter(e.id,u,{label:b.trim(),startMs:C,endMs:U}),E(null),t()}async function g(u){const j=ce();j&&(await j.removeChapter(e.id,u),z===u&&k(),t())}return s.jsxs(Dt,{children:[s.jsx(Ut,{children:"Chapters"}),r.length===0?s.jsx(Ot,{children:"No chapters yet. Add markers to slice the flight."}):s.jsx(Bt,{children:r.slice().sort((u,j)=>u.startMs-j.startMs).map(u=>{const j=z===u.id;return s.jsx(It,{children:j?s.jsxs(s.Fragment,{children:[s.jsx(q,{type:"text",value:b,onChange:C=>F(C.target.value),"aria-label":"Chapter label"}),s.jsx(q,{type:"text",value:T,onChange:C=>R(C.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),s.jsx(q,{type:"text",value:L,onChange:C=>$(C.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),s.jsxs(ke,{children:[s.jsx(Vt,{type:"button",onClick:()=>void G(u.id),children:"Save"}),s.jsx(Gt,{type:"button",onClick:k,children:"Cancel"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Pt,{title:u.label,children:u.label}),s.jsxs(Kt,{children:[W(u.startMs)," – ",W(u.endMs)]}),s.jsxs(Ht,{children:["(",W(u.endMs-u.startMs),")"]}),s.jsxs(ke,{children:[s.jsx(_t,{type:"button",onClick:()=>N(u),children:"edit"}),s.jsx(qt,{type:"button",onClick:()=>void g(u.id),"aria-label":`Remove chapter ${u.label}`,children:"×"})]})]})},u.id)})}),S&&s.jsx(je,{children:S}),s.jsxs(Wt,{children:[s.jsx(q,{type:"text",placeholder:"Chapter name",value:n,onChange:u=>a(u.target.value),"aria-label":"New chapter label"}),s.jsx(q,{type:"text",placeholder:"0:00",value:l,onChange:u=>d(u.target.value),"aria-label":"New chapter start (mm:ss)"}),s.jsx(q,{type:"text",placeholder:W(o),value:h,onChange:u=>m(u.target.value),"aria-label":"New chapter end (mm:ss)"}),s.jsx(Yt,{type:"button",onClick:()=>void K(),children:"+ add"})]}),y&&s.jsx(je,{children:y})]})}const Dt=c.div`
  padding: var(--inset-chapters-band);
  background: var(--color-surface-app);
  border-bottom: 1px solid var(--color-border-subtle);
`,Ut=c.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: var(--gap-heading-hint);
`,Ot=c.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  margin-bottom: var(--gap-related-comfortable);
`,Bt=c.div`
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
`,ke=c.span`
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
`,je=c.div`
  margin-top: var(--gap-sub-readout);
  font-size: var(--font-size-compact);
  color: var(--color-tag-red-fg);
`,qe=new WeakMap;function Jt(e,t){qe.set(e,t)}function Zt(e){return qe.get(e)}const de={t:[],v:[]};function Qt(e){switch(e){case be.LastBeforeBlackout:return"last-before-blackout";case be.Recorded:return"recorded";default:return null}}function Xt(e){const t=[];let r=null;for(let o=0;o<e.length;o++){const n=Qt(e[o].meta.staleness);if(n===null){r=null;continue}if(r!==null&&r.status===n){r.to=o;continue}r={from:o,to:o,status:n},t.push(r)}return t}const Ce=new WeakMap;function er(e){const t=Ce.get(e);if(t)return t;const r={t:e.t,v:e.v.map(o=>{const n=te(o);return typeof n=="number"?n:Number.NaN}),basis:e.basis};return Ce.set(e,r),r}function tr(e,t){return e.length===t.length&&e.every((r,o)=>r.to===t[o].to&&r.v===t[o].v)}function rr(e,t){return e.length===t.length&&e.every((r,o)=>r.from===t[o].from&&r.to===t[o].to&&r.status===t[o].status)}function Me(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((r,o)=>Object.is(r,t[o]))}function or(e,t){return e.length===t.length&&e.every((r,o)=>r.from===t[o].from&&r.to===t[o].to&&r.basis===t[o].basis&&r.bandKind===t[o].bandKind&&Me(r.bandLo,t[o].bandLo)&&Me(r.bandHi,t[o].bandHi))}function We(e,t){return[e?.toWire(),t?.toWire()]}function nr(e,t,r,o,n){const a=new Map((t.sampleRange(r,o,n)??[]).map(h=>[h.validAt,JSON.stringify(h.payload)])),l=[];let d;for(const h of e){const m=a.get(h.validAt)??JSON.stringify(h.payload);m!==d&&(d=m,l.push(h))}return l}function te(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function sr(e,t){const r=f.useRef(de),o=vt(),n=bt(),a=e,l=f.useCallback(h=>{if(!o||!n)return()=>{};const m=xt(o,n,a),y=n.subscribeFrame(h);return()=>{y(),m()}},[o,n,a]),d=f.useCallback(()=>{if(!n)return de;const h=n.currentFrame().viewUt,m=h-t,y=n.isDerivedTopic(a)?n.sampleDerivedRange(a,m,h):n.sampleRange(a,m,h),w=n.sampleReckonedTail(a,m,h),z=n.tagsOf(a),E=z.kind==="event"?"none":z.kind==="discrete"?"step":"linear",b=z.kind==="event"?nr(y??[],n,z.topic,m,h):y??[];if(b.length===0&&w.length===0)return de;const F=b.map(g=>g.validAt),T=b.map(g=>te(g.payload)),R=b.map(g=>g.payload),L=new Map,$=[],S=[];for(let g=0;g<b.length;g++){if(g===0)continue;if(E==="none")break;if(b[g].meta.gapSinceUt!=null){$.push(g);continue}if(Object.is(T[g],T[g-1]))continue;const u=n.gapModel(a,b[g-1],b[g]);if(u?.carried===!1){$.push(g);continue}u?.carried&&S.push({to:g,...er(u)})}const x=Xt(b),N=[];for(const g of w){const u=F.length;F.push(g.atUt),T.push(te(g.value)),R.push(g.value);const{bandLo:j,bandHi:C}=g,[U,H]=We(j,C),I=U!==void 0&&H!==void 0?g.bandKind:void 0;L.set(u,{basis:g.basis,band:j!==void 0&&C!==void 0&&I!==void 0?{lo:j,hi:C,kind:I}:void 0});const O=N[N.length-1],re=O!==void 0&&O.basis===g.basis&&O.to===u-1&&O.bandKind===I;if(O!==void 0&&re){O.to=u,U!==void 0&&H!==void 0&&I!==void 0&&(O.bandLo?.push(U),O.bandHi?.push(H));continue}if(U!==void 0&&H!==void 0&&I!==void 0){N.push({from:u,to:u,basis:g.basis,bandLo:[U],bandHi:[H],bandKind:I});continue}N.push({from:u,to:u,basis:g.basis})}const k=r.current,K=k.breaks??[];return k.t.length===F.length&&k.t.every((g,u)=>g===F[u])&&k.v.every((g,u)=>Object.is(g,T[u]))&&K.length===$.length&&K.every((g,u)=>g===$[u])&&tr(k.bridges??[],S)&&rr(k.spans??[],x)&&or(k.reckoned??[],N)&&k.windowEndAt===(N.length>0?h:void 0)&&(k.interpolation??"linear")===E?k:(r.current={t:F,v:T,basis:"ut-seconds",breaks:$,bridges:S,spans:x,reckoned:N,interpolation:E,windowEndAt:N.length>0?h:void 0},Jt(r.current,{payloads:R,modelled:L}),r.current)},[n,a,t]);return f.useSyncExternalStore(l,d)}const ar=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function J(e){const t=e.split(".").flatMap(a=>a.split(/(?=[A-Z])/)).map(a=>a.toLowerCase()).filter(a=>a.length>0).map(a=>ar[a]??a);if(t.length===0)return e;const[r,...o]=t;return[r===r.toUpperCase()?r:r[0].toUpperCase()+r.slice(1),...o].join(" ")}function ir(e,t){const r=t.split("."),o=[];let n=[],a=!1;for(let l=0;l<r.length;l++){const d=lt(e,r.slice(0,l+1).join("."));if(d===void 0){n.push(r[l]);continue}n.length>0&&o.push(J(n.join("."))),n=[],o.push(d),a=!0}return a?(n.length>0&&o.push(J(n.join("."))),o.join(" › ")):J(t)}function lr(e,t,r){return r.has(e)?!0:it(`${e}.${t}`)?.rawTopic===e}const cr=Object.freeze({"vessel.target":"Target"});function dr(e,t){const r=ir(e,t),o=cr[e];if(o===void 0)return r;const n=r.split(" ")[0],a=n===n.toUpperCase()?r:r[0].toLowerCase()+r.slice(1);return`${o} ${a}`}function ur(e,t){return{key:`${e}.${t.path}`,label:dr(e,t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function pr(e,t){const r=new Set(t),o=[...new Set([...nt(),...e,...t])].filter(d=>!st(d)).sort(),n=[],a=[],l=[];for(const d of o){if(at(d)){l.push(d);continue}const h=At(d).filter(m=>lr(d,m.path,r));if(h.length===0){a.push(d);continue}for(const m of h)n.push(ur(d,m))}return{keys:n,undescribed:a,collections:l}}function ie(){return[...yt.map(e=>e.topic),...rt().map(e=>e.topic)]}let ue;function ve(e,t){const r=`${e.join(",")}|${t.join(",")}|${ot()}`;if(ue?.key===r)return ue.built;const o=pr(e,t);return ue={key:r,built:o},o}function Ye(e=Z(),t=ie()){return ve(e,t).keys}function hr(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!fr.has(e.unit)}const fr=new Set(["bool","enum","flag","id","raw","text"]);function gr(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function Zo(e,t){const r=e?.enumEncoding;return r?.by!=="ordinal"||typeof t!="number"?t:r.names[t]??t}function Qo(e=Z(),t=ie()){return ve(e,t).undescribed}function Xo(e=Z(),t=ie()){return ve(e,t).collections}function Fe(){return ie().join(",")}function Je(){const e=f.useSyncExternalStore(ct,Z,Z),t=f.useSyncExternalStore(dt,Fe,Fe);return f.useMemo(()=>Ye(e,t.split(",")),[e,t])}function mr(){const e=Je();return f.useMemo(()=>e.filter(hr),[e])}function en(){const e=Je();return f.useMemo(()=>e.filter(gr),[e])}const ze=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function Te(){return ge("missionHistory")}function vr({missionId:e,fromUt:t,toUt:r}){const o=mr(),[n,a]=f.useState(new Set),[l,d]=f.useState([]),[h,m]=f.useState(!1),[y,w]=f.useState(null);f.useEffect(()=>()=>{Te()?.evictFullHistoryStore(e)},[e]);const z=f.useMemo(()=>o.map(S=>({key:S.key,label:S.label??S.key,unit:S.unit,group:xr(S.key)})),[o]);f.useEffect(()=>{const S=Te();if(!S||n.size===0){d([]),w(null);return}let x=!1;m(!0),w(null);const N=[...n];return Promise.all(N.map(k=>S.queryRange(k,t,r,e))).then(k=>{if(x)return;const K=new Map(o.map(g=>[g.key,g])),G=N.map((g,u)=>{const j=br(k[u],t),C=K.get(g);return{id:g,label:C?.label??g,axis:"primary",color:ze[u%ze.length],type:"line",data:j}});d(G)}).catch(k=>{x||w(k instanceof Error?k.message:String(k))}).finally(()=>{x||m(!1)}),()=>{x=!0}},[n,e,t,r,o]);const E=Math.max(0,(r-t)*1e3),b=E>0?[0,E]:[0,6e4],F=l.some(S=>S.data.x.length>0),T=[...n].map(S=>o.find(x=>x.key===S)),R=[...new Set(T.map((S,x)=>S?.label??[...n][x]))],L=[...new Set(T.map(S=>S?.unit))],$=Tt(R.length>0&&R.length<=2?R.join(" / "):void 0,L.length===1?L[0]:void 0);return s.jsxs(yr,{children:[s.jsxs(Sr,{children:[s.jsx(wr,{children:"Series"}),s.jsx(Et,{keys:z,value:n,onChange:a,placeholder:"Add a data key...",emptyHint:z.length===0?"No numeric keys in the current schema":"No matches"})]}),y&&s.jsxs(Cr,{role:"alert",children:["Failed to load samples: ",y]}),n.size===0?s.jsx(Ee,{children:"Pick one or more numeric telemetry keys above to plot them."}):s.jsxs(kr,{children:[h&&s.jsx(jr,{children:"Loading..."}),!h&&!F&&s.jsx(Ee,{children:"No recorded samples for the selected keys."}),F&&s.jsx(Mt,{chrome:"bare",series:l,xDomain:b,xAxisLabel:"Mission time",yAxisLabel:$,height:260})]})]})}function br(e,t){const r=[],o=[];for(let n=0;n<e.t.length;n++){const a=te(e.v[n]);typeof a!="number"||!Number.isFinite(a)||(r.push((e.t[n]-t)*1e3),o.push(a))}return{x:r,y:o}}function xr(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const yr=c.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border-top: 1px solid var(--color-surface-raised);
`,Sr=c.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,wr=c.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,kr=c.div`
  position: relative;
  min-height: 260px;
`,Ee=c.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  padding: var(--inset-chart-empty);
  text-align: center;
`,jr=c.div`
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
`,Cr=c.div`
  font-size: var(--font-size-compact);
  color: var(--color-nogo-text);
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  padding: var(--inset-surface);
  border-radius: var(--radius-regular);
`;function Mr(e,t){const r=[],o=new Map;for(const n of e){const a=n.lastSampleAt-n.launchedAt,l=n.endReason===void 0&&n.outcome===void 0&&t.has(n.vesselName),d=l?o.get(n.vesselName):void 0;if(d){d.ids.push(n.id),d.launchedAt=Math.min(d.launchedAt,n.launchedAt),d.durationMs+=a,d.sampleCount+=n.sampleCount;continue}const h={flight:n,ids:[n.id],stillFlying:l,launchedAt:n.launchedAt,durationMs:a,sampleCount:n.sampleCount};r.push(h),l&&o.set(n.vesselName,h)}return r}function Fr(e){return new Date(e).toLocaleString()}function zr(e,t){return fe(X("s",(t-e)/1e3))}const Tr={[_.Recovered]:"Recovered",[_.Crashed]:"Crashed",[_.Reverted]:"Reverted",[_.Destroyed]:"Destroyed",[_.Terminated]:"Terminated",[_.Docked]:"Docked"};function Er(e,t){if(e===void 0)return"Not known";const r=Tr[e]??"Not known";return e===_.Docked&&t?`${r} with ${t}`:r}function Nr(e){const t=[e.fundsEarned===null?null:`+${fe(X("funds",e.fundsEarned),{decimals:0})}`,e.scienceEarned===null?null:`+${fe(X("science",e.scienceEarned),{decimals:1})}`].filter(r=>r!==null);return[`Recovered ${e.recoveryLocation}`,e.recoveryFactor,t.length>0?t.join(" · "):"no funds or science awarded"].filter(r=>r!=="").join(" · ")}function B(){return ge("missionHistory")}function Ne(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),r=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${r}.fixture.json`}function Ae(e,t){const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),o=URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(o)}function tn({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:r=!1}={}){const o=e==="main",[n,a]=f.useState([]),[l,d]=f.useState(null),[h,m]=f.useState(!1),[y,w]=f.useState(!1),[z,E]=f.useState(null),[b,F]=f.useState(()=>new Set),[T,R]=f.useState(()=>He()),L=me("trackingStation.catalog"),$=f.useMemo(()=>{const p=L.state==="observed"||L.state==="held"?L.value:void 0;return new Set((p?.entries??[]).filter(i=>i.contact!==ut.Gone).map(i=>i.name))},[L]),S=f.useMemo(()=>Mr(n,$),[n,$]),x=f.useCallback(async()=>{const p=B();if(!p)return;let i;try{i=await p.listFlights()}catch(v){console.warn("FlightsManager: failed to load flights",v);return}a(i.sort((v,M)=>M.launchedAt-v.launchedAt)),F(v=>{const M=new Set;for(const A of i)v.has(A.id)&&M.add(A.id);return M.size===v.size?v:M})},[]);f.useEffect(()=>{x()},[x]),f.useEffect(()=>{const p=B();if(typeof p?.onFlightListChange=="function")return p.onFlightListChange(()=>{x()})},[x]);const N=async p=>{const i=B();if(i){for(const v of p)await i.deleteFlight(v);d(null),await x()}},k=async p=>{const i=B();if(!i)return;const v=await i.exportFlight(p.id);Ae(v,Ne(p))},K=async p=>{const i=B();if(!i)return;const v=await i.exportFlight(p.id),M={id:p.id,vesselName:p.vesselName,launchedAt:p.launchedAt,firstFrameUt:p.firstFrameUt??0,lastFrameUt:p.lastFrameUt??0,frameCount:p.sampleCount};Ve().start(M,v)},G=async()=>{const p=B();p&&(await p.clearAllFlights(),m(!1),await x())},g=p=>{F(i=>{const v=new Set(i),M=p.every(A=>v.has(A));for(const A of p)M?v.delete(A):v.add(A);return v})},u=()=>{F(p=>p.size===n.length?new Set:new Set(n.map(i=>i.id)))},j=async()=>{const p=B();if(!p)return;const i=Array.from(b);for(const v of i)await p.deleteFlight(v);w(!1),await x()},C=async p=>{const i=B();i&&(await i.setFlightStarred(p.id,!p.starred),await x())},U=async p=>{const i=B(),v=p?oe:0;ft(v),R(v),p&&i&&(await i.pruneFlightsKeepLatest({keepCount:v}),await x())},H=async()=>{const p=B();if(!p)return;const i=Array.from(b),v=new Map(n.map(M=>[M.id,M]));for(const M of i){const A=v.get(M);if(!A)continue;const tt=await p.exportFlight(M);Ae(tt,Ne(A))}},I=n.length>0&&b.size===n.length,O=b.size>0&&b.size<n.length,re=(()=>{const p=[...n].sort((M,A)=>A.launchedAt-M.launchedAt);let i=0,v=0;for(const M of p)M.starred||(i+=1,i>oe&&(v+=1));return v})();return s.jsxs(Rr,{children:[o&&s.jsx(Ar,{missionHistoryEnabled:t,recordAllTopics:r}),n.length===0?s.jsx(jt,{children:"No flight history recorded yet"}):s.jsxs(s.Fragment,{children:[s.jsxs(Br,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx(Gr,{children:s.jsx(he,{ref:p=>{p&&(p.indeterminate=O)},checked:I,onChange:u,"aria-label":I?"Clear selection":"Select all flights"})}),s.jsxs(qr,{children:[s.jsx(xe,{size:12,fill:"currentColor","aria-hidden":"true"}),s.jsx(Re,{children:"Kept (exempt from auto-delete)"})]}),s.jsx(Y,{children:"Vessel"}),s.jsx(Y,{children:"Launched"}),s.jsx(Y,{title:"Game time, not time at the desk",children:"Duration"}),s.jsx(Y,{children:"Samples"}),s.jsx(Y,{children:"Ended"}),s.jsx(Y,{children:s.jsx(Re,{children:"Actions"})})]})}),s.jsx("tbody",{children:S.map(p=>{const i=p.flight,v=z===i.id,M=p.ids.every(A=>b.has(A));return s.jsxs(f.Fragment,{children:[s.jsxs(De,{$current:!1,children:[s.jsx(P,{children:s.jsx(he,{checked:M,onChange:()=>g(p.ids),"aria-label":`Select flight ${i.vesselName||i.id}`})}),s.jsx(P,{children:s.jsx(Wr,{type:"button",$on:!!i.starred,onClick:()=>void C(i),"aria-label":i.starred?`Unstar ${i.vesselName||"flight"}`:`Star ${i.vesselName||"flight"} (keep from auto-delete)`,"aria-pressed":!!i.starred,title:i.starred?"Kept from auto-delete":"Keep from auto-delete",children:s.jsx(xe,{size:"var(--icon-size-control)",fill:i.starred?"currentColor":"none"})})}),s.jsxs(P,{children:[i.vesselName||zt,i.launchName&&s.jsxs(Pr,{children:["launched as ",i.launchName]}),i.evaKerbals&&i.evaKerbals.length>0&&s.jsxs(Ir,{children:["EVA: ",i.evaKerbals.join(", ")]}),i.outcome?.kind==="recovered"&&s.jsx(Ue,{$tone:"go",title:Nr(i.outcome),children:"recovered"}),i.outcome?.kind==="crashed"&&s.jsx(Ue,{$tone:"nogo",title:`Crashed at ${i.outcome.body} (${i.outcome.situation}) · ${i.outcome.partsLostCount} part(s) lost${i.outcome.kerbalsKilled.length>0?` · KIA: ${i.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),s.jsx(P,{children:Fr(p.launchedAt)}),s.jsx(P,{children:zr(0,p.durationMs)}),s.jsx(P,{children:p.sampleCount.toLocaleString()}),s.jsx(P,{children:p.stillFlying?"Still flying":Er(i.endReason,i.joinedVesselName)}),s.jsx(P,{children:s.jsxs(Lr,{children:[s.jsx($r,{type:"button",$open:v,onClick:()=>E(v?null:i.id),"aria-label":v?"Close graph":"Graph this flight","aria-expanded":v,children:v?"− graph":"＋ graph"}),o&&s.jsx(Dr,{type:"button",onClick:()=>void K(i),"aria-label":`Replay ${i.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),s.jsx(Le,{type:"button",onClick:()=>void k(i),"aria-label":`Download fixture for ${i.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),l===i.id?s.jsxs(pe,{children:[s.jsx(se,{onClick:()=>void N(p.ids),children:"Delete"}),s.jsx(ae,{onClick:()=>d(null),children:"Cancel"})]}):s.jsx(Kr,{onClick:()=>d(i.id),children:"×"})]})})]}),v&&s.jsx(De,{$current:!1,children:s.jsxs(P,{colSpan:8,style:{padding:0},children:[s.jsx($t,{flight:i,onChange:()=>void x()}),s.jsx(vr,{missionId:i.id,fromUt:i.firstValidUt??i.firstFrameUt??0,toUt:i.lastValidUt??i.lastFrameUt??0})]})})]},i.id)})})]}),s.jsxs(Hr,{children:[s.jsx(_r,{children:b.size>0&&(y?s.jsxs(pe,{children:[s.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",b.size," selected flight",b.size===1?"":"s","?"]}),s.jsx(se,{onClick:()=>void j(),children:"Delete"}),s.jsx(ae,{onClick:()=>w(!1),children:"Cancel"})]}):s.jsxs(s.Fragment,{children:[s.jsxs(Vr,{children:[b.size," selected"]}),s.jsx(Le,{type:"button",onClick:()=>void H(),title:"Download fixtures for the selected flights",children:"↓ download"}),s.jsx(se,{onClick:()=>w(!0),children:"Delete"}),s.jsx(ae,{onClick:()=>F(new Set),children:"Clear"})]}))}),s.jsxs(Yr,{children:[s.jsxs(Jr,{title:`Keep the ${oe} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[s.jsx(he,{checked:T>0,onChange:p=>void U(p.target.checked)}),s.jsxs("span",{children:["Keep latest ",oe,T===0&&re>0&&s.jsxs(Zr,{children:[" ","(",re," would be deleted)"]})]})]}),h?s.jsxs(pe,{children:[s.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),s.jsx(se,{onClick:()=>void G(),children:"Clear all"}),s.jsx(ae,{onClick:()=>m(!1),children:"Cancel"})]}):s.jsx(Qr,{onClick:()=>m(!0),children:"Clear all"})]})]})]})]})}function Ar({missionHistoryEnabled:e,recordAllTopics:t}){const r=f.useSyncExternalStore(Lt,we,we);return s.jsxs(Ur,{children:[r.saveFailure&&s.jsxs(Ft,{tone:"nogo",title:"Flight not saved",children:[r.saveFailure.vesselName,": ",r.saveFailure.cause]}),e?r.recording?s.jsxs(Or,{children:["● recording ",r.vesselName??"flight"," (",r.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):s.jsx($e,{children:"Auto-record armed: capture starts the moment a flight begins."}):s.jsx($e,{children:"Mission history is off, enable it in Settings to auto-record."})]})}const Re=c.span`
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
`,Rr=c.div`
  display: flex;
  flex-direction: column;
  min-width: min(500px, 100%);
  /* Graph panels expand in-place, so let the whole thing scroll rather than
     clipping the chart. Horizontal scroll catches narrow viewports where the
     row-action button cluster won't fit even in the wide flight modal. */
  max-height: 80vh;
  max-height: 80dvh;
  overflow: auto;
`,Lr=c.div`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
`,$r=c.button`
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
`,Le=c.button`
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
`,Dr=c.button`
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
`,Ur=c.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-section);
  padding-bottom: var(--inset-toolbar-bottom);
  margin-bottom: var(--gap-toolbar);
  border-bottom: 1px solid var(--color-border-subtle);
`,$e=c.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Or=c.span`
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
`,Br=c.table`
  border-collapse: collapse;
  width: 100%;
  overflow-y: auto;
  font-size: var(--font-size-compact);
`,Y=c.th`
  text-align: left;
  padding: var(--inset-surface);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
`,De=c.tr`
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
`,Ir=c.span`
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,Pr=c.span`
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,Ue=c.span`
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
`,Kr=c.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-lg);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,pe=c.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
`,se=c.button`
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  color: var(--color-tag-red-fg);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { background: var(--color-nogo-muted); }
`,ae=c.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,Hr=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-section);
  padding: var(--inset-table-footer);
  border-top: 1px solid var(--color-border-subtle);
`,_r=c.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-height: 24px;
`,Vr=c.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Gr=c.th`
  width: 28px;
  padding: var(--inset-surface);
  border-bottom: 1px solid var(--color-border-subtle);
`,he=c.input.attrs({type:"checkbox"})`
  cursor: pointer;
  margin: 0;
`,qr=c.th`
  width: 24px;
  /* The one cell that cannot take --inset-surface beside Th and ThCheckbox: a
     24px column carrying a star glyph needs more vertical than horizontal. At
     (6,8) the content box is 8px and the glyph clips. */
  padding: var(--inset-table-narrow-header);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
  text-align: center;
`,Wr=c.button`
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
`,Yr=c.div`
  display: flex;
  align-items: center;
  gap: var(--gap-section);
`,Jr=c.label`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  cursor: pointer;
  user-select: none;
`,Zr=c.span`
  color: var(--color-nogo-muted);
`,Qr=c.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-dim);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,Xr=new pt({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class rn{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new gt;historyCache=new Map;changesInOrder=new Map;async connect(){await this.pruneToKeepCount()}disconnect(){}schema(){return Ye()}subscribe(t,r){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,r,o,n){if(!n)return{t:[],v:[]};const a=St(t);if(!a)return{t:[],v:[]};const l=await this.getFullHistoryStore(n);if(!l)return{t:[],v:[]};const d=l.isDerivedTopic(a)?l.sampleDerivedRange(a,r,o):l.sampleRange(a,r,o);return d?{t:d.map(h=>h.validAt),v:d.map(h=>h.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(Q)}async getFlight(t){const r=await this.missionStore.getMissionMeta(t);return r?Q(r):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.meta.id)}async saveMissionPart(t,r,o){await this.inOrder(t.id,()=>this.missionStore.saveMissionPart(t,r,o)),this.historyCache.delete(t.id),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.id)}async pruneToKeepCount(t){const r=He();if(!(r<=0))try{await this.pruneFlightsKeepLatest({keepCount:r,keepId:t})}catch(o){ye.warn("[MissionHistorySource] keep latest could not prune",{err:String(o)})}}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,r){const o=await this.missionStore.getMissionMeta(t);!o||!!o.starred===r||(await this.missionStore.updateMissionMeta(t,{starred:r}),this.flightListSubscribers.fire())}async setFlightEndReason(t,r,o,n){await this.inOrder(t,async()=>{const a=await this.missionStore.getMissionMeta(t);if(!a){ye.warn("[MissionHistorySource] end reason for a mission not stored",{id:t});return}a.endReason===void 0&&(await this.missionStore.updateMissionMeta(t,{endReason:r,...n===void 0?{}:{joinedVesselId:n},...o===void 0?{}:{joinedVesselName:o}}),this.flightListSubscribers.fire())})}inOrder(t,r){const o=this.changesInOrder.get(t),n=o?o.then(r,r):r(),a=n.catch(()=>{});return this.changesInOrder.set(t,a),a.then(()=>{this.changesInOrder.get(t)===a&&this.changesInOrder.delete(t)}),n}async reopenFlight(t){await this.missionStore.updateMissionMeta(t,{endReason:void 0,joinedVesselId:void 0,joinedVesselName:void 0}),this.flightListSubscribers.fire()}async addChapter(t,r){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const a={id:r.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:r.label,startMs:r.startMs,endMs:r.endMs},l=[...o.chapters??[],a];return await this.missionStore.updateMissionMeta(t,{chapters:l}),this.flightListSubscribers.fire(),Q({...o,chapters:l})}async updateChapter(t,r,o){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const a=(n.chapters??[]).map(l=>l.id===r?{...l,...o}:l);return await this.missionStore.updateMissionMeta(t,{chapters:a}),this.flightListSubscribers.fire(),Q({...n,chapters:a})}async removeChapter(t,r){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const n=(o.chapters??[]).filter(a=>a.id!==r);return await this.missionStore.updateMissionMeta(t,{chapters:n}),this.flightListSubscribers.fire(),Q({...o,chapters:n})}async pruneFlightsKeepLatest(t){const r=await this.missionStore.pruneMissionsKeepLatest(t);for(const o of r)this.historyCache.delete(o);return r.length>0&&this.flightListSubscribers.fire(),r}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const r=this.historyCache.get(t);if(r)return r;const o=(async()=>{const n=await this.missionStore.getMissionFixture(t);if(!n)throw new Error(`mission fixture not found: ${t}`);return Xr.record(),Nt(n.fixture)})();this.historyCache.set(t,o);try{return await o}catch{this.historyCache.delete(t);return}}}function Q(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchName:e.launchName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,endReason:e.endReason,evaKerbals:e.evaKerbals,joinedVesselId:e.joinedVesselId,joinedVesselName:e.joinedVesselName,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt,firstValidUt:e.firstValidUt,lastValidUt:e.lastValidUt}}function Ze(e){const t=new Set(e.parts.map(n=>Number(n.id))),r=e.parts.map(eo),o=r.find(n=>n.parentFlightId==null)??r.find(n=>!t.has(n.parentFlightId));for(const n of r)n.parentFlightId!=null&&!t.has(n.parentFlightId)&&(n.parentFlightId=o&&o!==n?o.flightId:null);return{topologySeq:e.parts.length,rootFlightId:o?o.flightId:0,parts:r}}function Oe(e){return e?[e.x.magnitude,e.y.magnitude,e.z.magnitude]:void 0}function eo(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage??null,crewCapacity:0,maxTemp:e.maxTemp?.magnitude??null,crashTolerance:0,dryMass:e.dryMass?.magnitude??null,orgPos:[D(e.position.x),D(e.position.y),D(e.position.z)],up:Oe(e.up),forward:Oe(e.forward),bounds:{size:{x:D(e.bounds.size.x),y:D(e.bounds.size.y),z:D(e.bounds.size.z)},center:e.bounds.center?{x:D(e.bounds.center.x),y:D(e.bounds.center.y),z:D(e.bounds.center.z)}:void 0,hull:io(e.bounds.hull)},modules:e.modules}}function to(e){return e.currentTemp==null?null:{temperature:Se(e.currentTemp.magnitude),maxTemperature:e.maxTemp==null?null:Se(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp?.magnitude??null}}function ro(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),to(r));return t}function oo(e){const t={};for(const[r,o]of Object.entries(e.resources))t[r]={amount:o.amount?.magnitude??null,maxAmount:o.maxAmount?.magnitude??null,...o.flow!=null?{flow:o.flow.magnitude}:{},...o.nominalFlow!=null?{nominalFlow:o.nominalFlow.magnitude}:{},...o.unratedProcess===!0?{unratedProcess:!0}:{}};return t}function Qe(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),oo(r));return t}function no(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function so(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map(no)}}function ao(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),so(r));return t}function D(e){return e.magnitude}function io(e){const t=[];for(const{points:r}of e??[]){if(r.length<9||r.length%3!==0)continue;const o=[];for(let n=0;n<r.length;n+=3)o.push({x:D(r[n]),y:D(r[n+1]),z:D(r[n+2])});t.push(o)}return t.length>0?t:void 0}function Xe(e){return Array.from(new TextEncoder().encode(e),t=>/[A-Za-z0-9_-]/.test(String.fromCharCode(t))?String.fromCharCode(t):`%${t.toString(16).toUpperCase().padStart(2,"0")}`).join("")}function on(e,t){return`spaceCenter.craft.${e}.${Xe(t)}.parts`}function nn(e,t){const r=Xe(t),o=_e(`spaceCenter.craft.${e}.${r}.parts`),n=o.state==="observed"||o.state==="held"?o.value:void 0;return f.useMemo(()=>{if(!n)return;const a=mt("CraftFileParts",structuredClone(n));return{topology:Ze(a),resourcesByFlightId:Qe(a)}},[n])}const lo=[];function co(e){const t=[le(e.dvRadial,0),le(e.dvNormal,0),le(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function sn(){const e=_e("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return f.useMemo(()=>!Array.isArray(t)||t.length===0?lo:t.map(co),[t])}function an(e){const t=me("vessel.parts"),r=t.state==="observed"||t.state==="held"?t.value:void 0,o=f.useMemo(()=>ro(r),[r]),n=f.useMemo(()=>Qe(r),[r]),a=f.useMemo(()=>ao(r),[r]),l=[...e].sort((d,h)=>d-h).join(",");return f.useMemo(()=>{const d=l.length===0?[]:l.split(",").map(Number),h=new Map;for(const m of d)h.set(m,{thermal:o.get(m)??null,resources:n.get(m)??{},partState:a.get(m)});return h},[l,o,n,a])}const Be=Object.freeze({status:"none"}),uo={t:[],readings:[]};function et(e){return e==="recorded"||e==="last-before-blackout"?e:void 0}function po(e){return e!==null&&typeof e=="object"&&"magnitude"in e}function ho(e,t){if(po(e))return{value:e,...t};if(typeof e=="number")return{value:X(t.lo.unit,e),...t}}function fo(e){const t=Zt(e);if(t===void 0)return uo;const r=new Map;for(const a of e.spans??[]){const l=et(a.status);if(l!==void 0)for(let d=a.from;d<=a.to;d++)r.set(d,l)}let o;const n=e.t.map((a,l)=>{const d=X("ut",a),h=t.payloads[l],m=t.modelled.get(l);if(m!==void 0){const w={status:"available",modelled:h,atUt:d,beyondReceived:!0,basis:m.basis,band:m.band?ho(h,m.band):void 0};return o===void 0?{state:"pending",reckoning:w}:{state:"held",value:o.payload,asOfUt:o.at,grade:"held",reckoning:w}}o={payload:h,at:d};const y=r.get(l);return y!==void 0?{state:"held",value:h,asOfUt:d,grade:y,reckoning:Be}:{state:"observed",value:h,atUt:d,reckoning:Be}});return{t:e.t,readings:n,basis:e.basis,breaks:e.breaks,bridges:e.bridges,windowEndAt:e.windowEndAt,interpolation:e.interpolation}}function ln(e,t){const r=sr(Rt(e),t);return f.useMemo(()=>fo(r),[r])}function go(e,t,r,o){if(o===void 0)return null;if(t!==null&&t.status===o)return t.to=r,t;const n={from:r,to:r,status:o};return e.push(n),n}function mo(e,t,r,o,n){if(o===void 0)return null;if(t!==null&&t.basis===o&&t.bandKind===n?.kind)return t.to=r,n!==void 0&&(t.bandLo?.push(n.lo),t.bandHi?.push(n.hi)),t;const a=n!==void 0?{from:r,to:r,basis:o,bandLo:[n.lo],bandHi:[n.hi],bandKind:n.kind}:{from:r,to:r,basis:o};return e.push(a),a}function vo(e){const t=te(e);return typeof t=="number"?t:Number.NaN}function bo(e){const[t,r]=We(e?.lo,e?.hi);if(!(e===void 0||t===void 0||r===void 0))return{lo:t,hi:r,kind:e.kind}}function cn(e){const t=[],r=[],o={t:[],v:[],basis:e.basis,breaks:[],spans:t,reckoned:r,bridges:[],windowEndAt:e.windowEndAt,interpolation:e.interpolation},n=new Set(e.breaks??[]),a=new Map((e.bridges??[]).map(y=>[y.to,y])),l=new Map;let d=null,h=null,m=!1;for(let y=0;y<e.t.length;y++){n.has(y)&&(m=!0);const w=e.readings[y],z=w.reckoning.status==="available"?w.reckoning:void 0,E=vo(z?z.modelled:w.value);if(Number.isNaN(E))continue;const b=o.t.length,F=m&&b>0;F&&o.breaks.push(b),m=!1,l.set(y,b);const T=a.get(y);T!==void 0&&!F&&l.get(y-1)===b-1&&T.v.every(Number.isFinite)&&o.bridges.push({...T,to:b}),o.t.push(e.t[y]),o.v.push(E);const R=z===void 0&&w.state==="held"?et(w.grade):void 0;d=go(t,d,b,R),h=mo(r,h,b,z?.basis,bo(z?.band))}return o}function dn(){const e=me("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return f.useMemo(()=>t?Ze(t):void 0,[t])}function un(){const e=Ve(),t=f.useSyncExternalStore(l=>e.subscribe(l),()=>e.getSnapshot());if(wt(),!t.active||!t.meta)return null;const r=t.meta,o=e.cursorUt(),n=Math.max(0,r.lastFrameUt-r.firstFrameUt),a=Math.max(0,o-r.firstFrameUt);return s.jsxs(xo,{role:"region","aria-label":"Replay controls",children:[s.jsxs(Pe,{children:[s.jsx(wo,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),s.jsxs(yo,{children:["REPLAY: ",s.jsx(So,{children:r.vesselName||"Unnamed vessel"})]})]}),s.jsxs(ko,{children:[s.jsx(Ke,{children:Ie(a)}),s.jsx(jo,{type:"range",min:r.firstFrameUt,max:r.lastFrameUt,step:.1,value:o,onChange:l=>e.seekTo(Number(l.target.value)),"aria-label":"Seek to position"}),s.jsx(Ke,{children:Ie(n)})]}),s.jsxs(Pe,{children:[s.jsxs(Co,{value:String(t.rate),onChange:l=>e.setRate(Number(l.target.value)),"aria-label":"Playback rate",children:[s.jsx("option",{value:"0.5",children:"0.5×"}),s.jsx("option",{value:"1",children:"1×"}),s.jsx("option",{value:"2",children:"2×"}),s.jsx("option",{value:"5",children:"5×"}),s.jsx("option",{value:"10",children:"10×"}),s.jsx("option",{value:"50",children:"50×"})]}),s.jsx(Mo,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function Ie(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),r=Math.floor(t/3600),o=Math.floor(t%3600/60),n=t%60;return r>0?`${r}:${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`}const xo=c.div`
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
`,Pe=c(Ct).attrs({justify:"start"})`
  flex-shrink: 0;
`,yo=c.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
`,So=c.span`
  color: var(--color-tag-purple-fg);
  font-weight: 700;
  margin-left: var(--gap-trailing-figure);
`,wo=c.button`
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
`,ko=c.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,jo=c.input`
  flex: 1;
  min-width: 0;
  accent-color: var(--color-tag-purple-fg);
`,Ke=c.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Co=c.select`
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
`,Fo=new Set(["vessel.flight","vessel.orbit","vessel.propulsion","vessel.resources"]);function zo(e){return J(e.split(".")[0])}function pn(e,t=new Set(Z())){const r=ht(e.topic);if(t.has(e.topic)){const n=e.topic.split(".").slice(1).join("."),a=r??(n===""?void 0:J(n)),l=a===void 0?e.label:`${a} › ${e.label}`,d=zo(e.topic);return{group:d,label:l,summary:`${d} › ${l}`,common:!1}}const o=r??J(e.topic);return{group:o,label:e.label,summary:`${o} › ${e.label}`,common:Fo.has(e.topic)}}export{an as A,en as B,ln as C,Je as D,dn as E,tn as F,Zo as G,rn as M,un as R,We as a,Qe as b,ao as c,Ze as d,Xe as e,on as f,we as g,Xo as h,ie as i,Ye as j,Qo as k,J as l,hr as m,gr as n,te as o,cn as p,vo as q,Jo as r,pn as s,Yo as t,sn as u,Wo as v,Lt as w,nn as x,sr as y,mr as z};
