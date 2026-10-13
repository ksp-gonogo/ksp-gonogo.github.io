import{j as n}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./ext-react-RRA14VTW.js";import{bQ as ue,ck as G,R as Ve,ch as _e,co as qe,cn as Ge,cZ as We,d2 as Ye,ag as Je,aO as W,aZ as Ze,b1 as re}from"./view-clock-formula-DRrEkS6Q.js";import{o as Re,D as Z,s as Qe,L as Xe}from"./ksp-enum-names-BjZ3fgw3.js";import{a as ce}from"./registry-CXCaYwY4.js";import"./screen-B5Z_APSM.js";import{ba as et,bc as tt,aW as rt,i as ot,aH as nt,b7 as at,bg as st}from"./lagrange-DVtSWGiO.js";import{v as $e}from"./use-transmissions-dCTZymMM.js";import{g as Ue}from"./replay-session-controller-Bsx-oKC-.js";import"./websocket-transport-CjdKMFT2.js";import{v as H,ab as it,E as lt,t as pe,a2 as ct}from"./vesselMark-B2BB4fDy.js";import{N as dt}from"./Notice-BW7YGR4f.js";import{N as ut,w as le}from"./streamStatusWord-BoFViXZM.js";import"./processorPerfBudget-C__x6FVx.js";import"./index-dq6XYUov.js";import{i as pt,D as ht,L as gt}from"./VersionMismatchBanner-CBChcjym.js";import l from"./ext-styled-components-Br73TgY3.js";import{b as ft}from"./full-history-replay-DpeksX9Z.js";import{e as mt,s as vt}from"./topic-fields-VdLDbH4Z.js";import{k as he}from"./orbital-8oRHbDnT.js";const De={recording:!1,vesselName:null,frameCount:0,saveFailure:null};let K=De;const Y=new Set;function ge(){return K}function Co(e){K={...e,saveFailure:K.saveFailure};for(const t of Y)t()}function Mo(e){if(K.saveFailure!==e){K={...K,saveFailure:e};for(const t of Y)t()}}function bt(e){return Y.add(e),()=>{Y.delete(e)}}function zo(){K=De,Y.clear()}function oe(){return ce("missionHistory")}function V(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),r=Math.floor(t/3600),o=Math.floor(t%3600/60),a=t%60;return r>0?`${r}:${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function Q(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const d=Number(t);return Number.isFinite(d)&&d>=0?d*1e3:null}const r=t.split(":").map(d=>d.trim());if(r.some(d=>d===""||!/^\d+(\.\d+)?$/.test(d)))return null;const o=r.map(Number),i=o.length===2?o[0]*60+o[1]:o.length===3?o[0]*3600+o[1]*60+o[2]:null;return i===null?null:i*1e3}function xt({flight:e,onChange:t}){const r=e.chapters??[],o=Math.max(0,e.lastSampleAt-e.launchedAt),[a,i]=u.useState(""),[d,f]=u.useState(""),[h,m]=u.useState(""),[y,w]=u.useState(null),[M,E]=u.useState(null),[b,j]=u.useState(""),[z,U]=u.useState(""),[C,R]=u.useState(""),[$,A]=u.useState(null);function L(c){E(c.id),j(c.label),U(V(c.startMs)),R(V(c.endMs)),A(null)}function v(){E(null),A(null)}async function F(){const c=oe();if(!c)return;const k=Q(d),S=Q(h);if(a.trim()===""){w("Label required");return}if(k===null||S===null){w("Start and end must be mm:ss");return}if(S<=k){w("End must be after start");return}w(null),await c.addChapter(e.id,{label:a.trim(),startMs:k,endMs:S}),i(""),f(""),m(""),t()}async function O(c){const k=oe();if(!k)return;const S=Q(z),N=Q(C);if(b.trim()===""){A("Label required");return}if(S===null||N===null){A("Start and end must be mm:ss");return}if(N<=S){A("End must be after start");return}A(null),await k.updateChapter(e.id,c,{label:b.trim(),startMs:S,endMs:N}),E(null),t()}async function p(c){const k=oe();k&&(await k.removeChapter(e.id,c),M===c&&v(),t())}return n.jsxs(yt,{children:[n.jsx(St,{children:"Chapters"}),r.length===0?n.jsx(wt,{children:"No chapters yet. Add markers to slice the flight."}):n.jsx(kt,{children:r.slice().sort((c,k)=>c.startMs-k.startMs).map(c=>{const k=M===c.id;return n.jsx(jt,{children:k?n.jsxs(n.Fragment,{children:[n.jsx(H,{type:"text",value:b,onChange:S=>j(S.target.value),"aria-label":"Chapter label"}),n.jsx(H,{type:"text",value:z,onChange:S=>U(S.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),n.jsx(H,{type:"text",value:C,onChange:S=>R(S.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),n.jsxs(fe,{children:[n.jsx(Tt,{type:"button",onClick:()=>void O(c.id),children:"Save"}),n.jsx(Et,{type:"button",onClick:v,children:"Cancel"})]})]}):n.jsxs(n.Fragment,{children:[n.jsx(Ct,{title:c.label,children:c.label}),n.jsxs(Mt,{children:[V(c.startMs)," – ",V(c.endMs)]}),n.jsxs(zt,{children:["(",V(c.endMs-c.startMs),")"]}),n.jsxs(fe,{children:[n.jsx(Ft,{type:"button",onClick:()=>L(c),children:"edit"}),n.jsx(At,{type:"button",onClick:()=>void p(c.id),"aria-label":`Remove chapter ${c.label}`,children:"×"})]})]})},c.id)})}),$&&n.jsx(me,{children:$}),n.jsxs(Lt,{children:[n.jsx(H,{type:"text",placeholder:"Chapter name",value:a,onChange:c=>i(c.target.value),"aria-label":"New chapter label"}),n.jsx(H,{type:"text",placeholder:"0:00",value:d,onChange:c=>f(c.target.value),"aria-label":"New chapter start (mm:ss)"}),n.jsx(H,{type:"text",placeholder:V(o),value:h,onChange:c=>m(c.target.value),"aria-label":"New chapter end (mm:ss)"}),n.jsx(Nt,{type:"button",onClick:()=>void F(),children:"+ add"})]}),y&&n.jsx(me,{children:y})]})}const yt=l.div`
  padding: var(--inset-chapters-band);
  background: var(--color-surface-app);
  border-bottom: 1px solid var(--color-border-subtle);
`,St=l.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: var(--gap-heading-hint);
`,wt=l.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  margin-bottom: var(--gap-related-comfortable);
`,kt=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  margin-bottom: var(--gap-related-comfortable);
`,jt=l(it).attrs({cols:"minmax(120px, 1fr) auto auto auto",gap:"related-comfortable"})`
  font-size: var(--font-size-compact);
`,Ct=l.span`
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Mt=l.span`
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
`,Ft=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,Tt=l.button`
  background: var(--color-go-status);
  border: 1px solid var(--color-go-status);
  color: var(--color-go-on-status);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,Et=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,At=l.button`
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
`,Nt=l.button`
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
`,Be=new WeakMap;function Rt(e,t){Be.set(e,t)}function $t(e){return Be.get(e)}const ne={t:[],v:[]};function Ut(e){switch(e){case ue.LastBeforeBlackout:return"last-before-blackout";case ue.Recorded:return"recorded";default:return null}}function Dt(e){const t=[];let r=null;for(let o=0;o<e.length;o++){const a=Ut(e[o].meta.staleness);if(a===null){r=null;continue}if(r!==null&&r.status===a){r.to=o;continue}r={from:o,to:o,status:a},t.push(r)}return t}const ve=new WeakMap;function Bt(e){const t=ve.get(e);if(t)return t;const r={t:e.t,v:e.v.map(o=>{const a=J(o);return typeof a=="number"?a:Number.NaN}),basis:e.basis};return ve.set(e,r),r}function Ot(e,t){return e.length===t.length&&e.every((r,o)=>r.to===t[o].to&&r.v===t[o].v)}function Pt(e,t){return e.length===t.length&&e.every((r,o)=>r.from===t[o].from&&r.to===t[o].to&&r.status===t[o].status)}function be(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((r,o)=>Object.is(r,t[o]))}function It(e,t){return e.length===t.length&&e.every((r,o)=>r.from===t[o].from&&r.to===t[o].to&&r.basis===t[o].basis&&r.bandKind===t[o].bandKind&&be(r.bandLo,t[o].bandLo)&&be(r.bandHi,t[o].bandHi))}function Oe(e,t){return[e?.toWire(),t?.toWire()]}function Kt(e,t,r,o,a){const i=new Map((t.sampleRange(r,o,a)??[]).map(h=>[h.validAt,JSON.stringify(h.payload)])),d=[];let f;for(const h of e){const m=i.get(h.validAt)??JSON.stringify(h.payload);m!==f&&(f=m,d.push(h))}return d}function J(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function Ht(e,t){const r=u.useRef(ne),o=et(),a=tt(),i=e,d=u.useCallback(h=>{if(!o||!a)return()=>{};const m=rt(o,a,i),y=a.subscribeFrame(h);return()=>{y(),m()}},[o,a,i]),f=u.useCallback(()=>{if(!a)return ne;const h=a.currentFrame().viewUt,m=h-t,y=a.isDerivedTopic(i)?a.sampleDerivedRange(i,m,h):a.sampleRange(i,m,h),w=a.sampleReckonedTail(i,m,h),M=a.tagsOf(i),E=M.kind==="event"?"none":M.kind==="discrete"?"step":"linear",b=M.kind==="event"?Kt(y??[],a,M.topic,m,h):y??[];if(b.length===0&&w.length===0)return ne;const j=b.map(p=>p.validAt),z=b.map(p=>J(p.payload)),U=b.map(p=>p.payload),C=new Map,R=[],$=[];for(let p=0;p<b.length;p++){if(p===0)continue;if(E==="none")break;if(b[p].meta.gapSinceUt!=null){R.push(p);continue}if(Object.is(z[p],z[p-1]))continue;const c=a.gapModel(i,b[p-1],b[p]);if(c?.carried===!1){R.push(p);continue}c?.carried&&$.push({to:p,...Bt(c)})}const A=Dt(b),L=[];for(const p of w){const c=j.length;j.push(p.atUt),z.push(J(p.value)),U.push(p.value);const{bandLo:k,bandHi:S}=p,[N,D]=Oe(k,S),s=N!==void 0&&D!==void 0?p.bandKind:void 0;C.set(c,{basis:p.basis,band:k!==void 0&&S!==void 0&&s!==void 0?{lo:k,hi:S,kind:s}:void 0});const g=L[L.length-1],x=g!==void 0&&g.basis===p.basis&&g.to===c-1&&g.bandKind===s;if(g!==void 0&&x){g.to=c,N!==void 0&&D!==void 0&&s!==void 0&&(g.bandLo?.push(N),g.bandHi?.push(D));continue}if(N!==void 0&&D!==void 0&&s!==void 0){L.push({from:c,to:c,basis:p.basis,bandLo:[N],bandHi:[D],bandKind:s});continue}L.push({from:c,to:c,basis:p.basis})}const v=r.current,F=v.breaks??[];return v.t.length===j.length&&v.t.every((p,c)=>p===j[c])&&v.v.every((p,c)=>Object.is(p,z[c]))&&F.length===R.length&&F.every((p,c)=>p===R[c])&&Ot(v.bridges??[],$)&&Pt(v.spans??[],A)&&It(v.reckoned??[],L)&&v.windowEndAt===(L.length>0?h:void 0)&&(v.interpolation??"linear")===E?v:(r.current={t:j,v:z,basis:"ut-seconds",breaks:R,bridges:$,spans:A,reckoned:L,interpolation:E,windowEndAt:L.length>0?h:void 0},Rt(r.current,{payloads:U,modelled:C}),r.current)},[a,i,t]);return u.useSyncExternalStore(d,f)}const Vt=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function _t(e){const t=e.split(".").flatMap(i=>i.split(/(?=[A-Z])/)).map(i=>i.toLowerCase()).filter(i=>i.length>0).map(i=>Vt[i]??i);if(t.length===0)return e;const[r,...o]=t;return[r===r.toUpperCase()?r:r[0].toUpperCase()+r.slice(1),...o].join(" ")}function qt(e,t,r){return r.has(e)?!0:We(`${e}.${t}`)?.rawTopic===e}function Gt(e,t){return{key:`${e}.${t.path}`,label:_t(t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function Wt(e,t){const r=new Set(t),o=[...new Set([..._e(),...e,...t])].filter(f=>!qe(f)).sort(),a=[],i=[],d=[];for(const f of o){if(Ge(f)){d.push(f);continue}const h=mt(f).filter(m=>qt(f,m.path,r));if(h.length===0){i.push(f);continue}for(const m of h)a.push(Gt(f,m))}return{keys:a,undescribed:i,collections:d}}function te(){return[...ot.map(e=>e.topic),...Ve().map(e=>e.topic)]}let ae;function de(e,t){const r=`${e.join(",")}|${t.join(",")}`;if(ae?.key===r)return ae.built;const o=Wt(e,t);return ae={key:r,built:o},o}function Pe(e=G(),t=te()){return de(e,t).keys}function Yt(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!Jt.has(e.unit)}const Jt=new Set(["bool","enum","flag","id","raw","text"]);function Zt(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function Fo(e,t){const r=e?.enumEncoding;return r?.by!=="ordinal"||typeof t!="number"?t:r.names[t]??t}function To(e=G(),t=te()){return de(e,t).undescribed}function Eo(e=G(),t=te()){return de(e,t).collections}function xe(){return te().join(",")}function Ie(){const e=u.useSyncExternalStore(Ye,G,G),t=u.useSyncExternalStore(Je,xe,xe);return u.useMemo(()=>Pe(e,t.split(",")),[e,t])}function Qt(){const e=Ie();return u.useMemo(()=>e.filter(Yt),[e])}function Ao(){const e=Ie();return u.useMemo(()=>e.filter(Zt),[e])}const ye=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function Se(){return ce("missionHistory")}function Xt({missionId:e,fromUt:t,toUt:r}){const o=Qt(),[a,i]=u.useState(new Set),[d,f]=u.useState([]),[h,m]=u.useState(!1),[y,w]=u.useState(null);u.useEffect(()=>()=>{Se()?.evictFullHistoryStore(e)},[e]);const M=u.useRef(null),[E,b]=u.useState(600);u.useEffect(()=>{const v=M.current;if(!v||typeof ResizeObserver>"u")return;const F=new ResizeObserver(O=>{for(const p of O){const c=p.contentRect.width;c>0&&b(Math.floor(c))}});return F.observe(v),()=>F.disconnect()},[]);const j=u.useMemo(()=>o.map(v=>({key:v.key,label:v.label??v.key,unit:v.unit,group:tr(v.key)})),[o]);u.useEffect(()=>{const v=Se();if(!v||a.size===0){f([]),w(null);return}let F=!1;m(!0),w(null);const O=[...a];return Promise.all(O.map(p=>v.queryRange(p,t,r,e))).then(p=>{if(F)return;const c=new Map(o.map(S=>[S.key,S])),k=O.map((S,N)=>{const D=er(p[N],t),s=c.get(S);return{id:S,label:s?.label??S,axis:"primary",color:ye[N%ye.length],type:"line",data:D}});f(k)}).catch(p=>{F||w(p instanceof Error?p.message:String(p))}).finally(()=>{F||m(!1)}),()=>{F=!0}},[a,e,t,r,o]);const z=Math.max(0,(r-t)*1e3),U=z>0?[0,z]:[0,6e4],C=d.some(v=>v.data.x.length>0),R=[...a].map(v=>o.find(F=>F.key===v)),$=[...new Set(R.map((v,F)=>v?.label??[...a][F]))],A=[...new Set(R.map(v=>v?.unit))],L=pt($.length>0&&$.length<=2?$.join(" / "):void 0,A.length===1?A[0]:void 0);return n.jsxs(rr,{children:[n.jsxs(or,{children:[n.jsx(nr,{children:"Series"}),n.jsx(ht,{keys:j,value:a,onChange:i,placeholder:"Add a data key...",emptyHint:j.length===0?"No numeric keys in the current schema":"No matches"})]}),y&&n.jsxs(ir,{role:"alert",children:["Failed to load samples: ",y]}),a.size===0?n.jsx(we,{children:"Pick one or more numeric telemetry keys above to plot them."}):n.jsxs(ar,{ref:M,children:[h&&n.jsx(sr,{children:"Loading..."}),!h&&!C&&n.jsx(we,{children:"No recorded samples for the selected keys."}),C&&n.jsx(gt,{series:d,xDomain:U,xAxisLabel:"Mission time",yAxisLabel:L,width:E,height:260})]})]})}function er(e,t){const r=[],o=[];for(let a=0;a<e.t.length;a++){const i=J(e.v[a]);typeof i!="number"||!Number.isFinite(i)||(r.push((e.t[a]-t)*1e3),o.push(i))}return{x:r,y:o}}function tr(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const rr=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border-top: 1px solid var(--color-surface-raised);
`,or=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,nr=l.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,ar=l.div`
  position: relative;
  min-height: 260px;
`,we=l.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  padding: var(--inset-chart-empty);
  text-align: center;
`,sr=l.div`
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
`,ir=l.div`
  font-size: var(--font-size-compact);
  color: var(--color-nogo-text);
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  padding: var(--inset-surface);
  border-radius: var(--radius-regular);
`;function lr(e){return new Date(e).toLocaleString()}function cr(e,t){return le(W("irl:s",(t-e)/1e3))}function dr(e){const t=[e.fundsEarned===null?null:`+${le(W("funds",e.fundsEarned),{decimals:0})}`,e.scienceEarned===null?null:`+${le(W("science",e.scienceEarned),{decimals:1})}`].filter(r=>r!==null);return[`Recovered ${e.recoveryLocation}`,e.recoveryFactor,t.length>0?t.join(" · "):"no funds or science awarded"].filter(r=>r!=="").join(" · ")}function B(){return ce("missionHistory")}function ke(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),r=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${r}.fixture.json`}function je(e,t){const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),o=URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.download=t,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(o)}function Lo({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:r=!1}={}){const o=e==="main",[a,i]=u.useState([]),[d,f]=u.useState(null),[h,m]=u.useState(!1),[y,w]=u.useState(!1),[M,E]=u.useState(null),[b,j]=u.useState(()=>new Set),[z,U]=u.useState(()=>Re()),C=u.useCallback(async()=>{const s=B();if(!s)return;let g;try{g=await s.listFlights()}catch(x){console.warn("FlightsManager: failed to load flights",x);return}i(g.sort((x,T)=>T.launchedAt-x.launchedAt)),j(x=>{const T=new Set;for(const I of g)x.has(I.id)&&T.add(I.id);return T.size===x.size?x:T})},[]);u.useEffect(()=>{C()},[C]),u.useEffect(()=>{const s=B();if(typeof s?.onFlightListChange=="function")return s.onFlightListChange(()=>{C()})},[C]);const R=async s=>{const g=B();g&&(await g.deleteFlight(s),f(null),await C())},$=async s=>{const g=B();if(!g)return;const x=await g.exportFlight(s.id);je(x,ke(s))},A=async s=>{const g=B();if(!g)return;const x=await g.exportFlight(s.id),T={id:s.id,vesselName:s.vesselName,launchedAt:s.launchedAt,firstFrameUt:s.firstFrameUt??0,lastFrameUt:s.lastFrameUt??0,frameCount:s.sampleCount};Ue().start(T,x)},L=async()=>{const s=B();s&&(await s.clearAllFlights(),m(!1),await C())},v=s=>{j(g=>{const x=new Set(g);return x.has(s)?x.delete(s):x.add(s),x})},F=()=>{j(s=>s.size===a.length?new Set:new Set(a.map(g=>g.id)))},O=async()=>{const s=B();if(!s)return;const g=Array.from(b);for(const x of g)await s.deleteFlight(x);w(!1),await C()},p=async s=>{const g=B();g&&(await g.setFlightStarred(s.id,!s.starred),await C())},c=async s=>{const g=B(),x=s?Z:0;Qe(x),U(x),s&&g&&(await g.pruneFlightsKeepLatest({keepCount:x}),await C())},k=async()=>{const s=B();if(!s)return;const g=Array.from(b),x=new Map(a.map(T=>[T.id,T]));for(const T of g){const I=x.get(T);if(!I)continue;const He=await s.exportFlight(T);je(He,ke(I))}},S=a.length>0&&b.size===a.length,N=b.size>0&&b.size<a.length,D=(()=>{const s=[...a].sort((T,I)=>I.launchedAt-T.launchedAt);let g=0,x=0;for(const T of s)T.starred||(g+=1,g>Z&&(x+=1));return x})();return n.jsxs(pr,{children:[o&&n.jsx(ur,{missionHistoryEnabled:t,recordAllTopics:r}),a.length===0?n.jsx(lt,{children:"No flight history recorded yet"}):n.jsxs(n.Fragment,{children:[n.jsxs(br,{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx(kr,{children:n.jsx(ie,{ref:s=>{s&&(s.indeterminate=N)},checked:S,onChange:F,"aria-label":S?"Clear selection":"Select all flights"})}),n.jsxs(jr,{children:[n.jsx(pe,{size:12,fill:"currentColor","aria-hidden":"true"}),n.jsx(Ce,{children:"Kept (exempt from auto-delete)"})]}),n.jsx(_,{children:"Vessel"}),n.jsx(_,{children:"Launched"}),n.jsx(_,{children:"Duration"}),n.jsx(_,{children:"Samples"}),n.jsx(_,{children:n.jsx(Ce,{children:"Actions"})})]})}),n.jsx("tbody",{children:a.map(s=>{const g=M===s.id,x=b.has(s.id);return n.jsxs(u.Fragment,{children:[n.jsxs(Fe,{$current:!1,children:[n.jsx(P,{children:n.jsx(ie,{checked:x,onChange:()=>v(s.id),"aria-label":`Select flight ${s.vesselName||s.id}`})}),n.jsx(P,{children:n.jsx(Cr,{type:"button",$on:!!s.starred,onClick:()=>void p(s),"aria-label":s.starred?`Unstar ${s.vesselName||"flight"}`:`Star ${s.vesselName||"flight"} (keep from auto-delete)`,"aria-pressed":!!s.starred,title:s.starred?"Kept from auto-delete":"Keep from auto-delete",children:n.jsx(pe,{size:"var(--icon-size-control)",fill:s.starred?"currentColor":"none"})})}),n.jsxs(P,{children:[s.vesselName||ut,s.outcome?.kind==="recovered"&&n.jsx(Te,{$tone:"go",title:dr(s.outcome),children:"recovered"}),s.outcome?.kind==="crashed"&&n.jsx(Te,{$tone:"nogo",title:`Crashed at ${s.outcome.body} (${s.outcome.situation}) · ${s.outcome.partsLostCount} part(s) lost${s.outcome.kerbalsKilled.length>0?` · KIA: ${s.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),n.jsx(P,{children:lr(s.launchedAt)}),n.jsx(P,{children:cr(s.launchedAt,s.lastSampleAt)}),n.jsx(P,{children:s.sampleCount.toLocaleString()}),n.jsx(P,{children:n.jsxs(hr,{children:[n.jsx(gr,{type:"button",$open:g,onClick:()=>E(g?null:s.id),"aria-label":g?"Close graph":"Graph this flight","aria-expanded":g,children:g?"− graph":"＋ graph"}),o&&n.jsx(fr,{type:"button",onClick:()=>void A(s),"aria-label":`Replay ${s.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),n.jsx(Me,{type:"button",onClick:()=>void $(s),"aria-label":`Download fixture for ${s.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),d===s.id?n.jsxs(se,{children:[n.jsx(X,{onClick:()=>void R(s.id),children:"Delete"}),n.jsx(ee,{onClick:()=>f(null),children:"Cancel"})]}):n.jsx(xr,{onClick:()=>f(s.id),children:"×"})]})})]}),g&&n.jsx(Fe,{$current:!1,children:n.jsxs(P,{colSpan:7,style:{padding:0},children:[n.jsx(xt,{flight:s,onChange:()=>void C()}),n.jsx(Xt,{missionId:s.id,fromUt:s.firstValidUt??s.firstFrameUt??0,toUt:s.lastValidUt??s.lastFrameUt??0})]})})]},s.id)})})]}),n.jsxs(yr,{children:[n.jsx(Sr,{children:b.size>0&&(y?n.jsxs(se,{children:[n.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",b.size," selected flight",b.size===1?"":"s","?"]}),n.jsx(X,{onClick:()=>void O(),children:"Delete"}),n.jsx(ee,{onClick:()=>w(!1),children:"Cancel"})]}):n.jsxs(n.Fragment,{children:[n.jsxs(wr,{children:[b.size," selected"]}),n.jsx(Me,{type:"button",onClick:()=>void k(),title:"Download fixtures for the selected flights",children:"↓ download"}),n.jsx(X,{onClick:()=>w(!0),children:"Delete"}),n.jsx(ee,{onClick:()=>j(new Set),children:"Clear"})]}))}),n.jsxs(Mr,{children:[n.jsxs(zr,{title:`Keep the ${Z} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[n.jsx(ie,{checked:z>0,onChange:s=>void c(s.target.checked)}),n.jsxs("span",{children:["Keep latest ",Z,z===0&&D>0&&n.jsxs(Fr,{children:[" ","(",D," would be deleted)"]})]})]}),h?n.jsxs(se,{children:[n.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),n.jsx(X,{onClick:()=>void L(),children:"Clear all"}),n.jsx(ee,{onClick:()=>m(!1),children:"Cancel"})]}):n.jsx(Tr,{onClick:()=>m(!0),children:"Clear all"})]})]})]})]})}function ur({missionHistoryEnabled:e,recordAllTopics:t}){const r=u.useSyncExternalStore(bt,ge,ge);return n.jsxs(mr,{children:[r.saveFailure&&n.jsxs(dt,{tone:"nogo",title:"Flight not saved",children:[r.saveFailure.vesselName,": ",r.saveFailure.cause]}),e?r.recording?n.jsxs(vr,{children:["● recording ",r.vesselName??"flight"," (",r.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):n.jsx(ze,{children:"Auto-record armed: capture starts the moment a flight begins."}):n.jsx(ze,{children:"Mission history is off, enable it in Settings to auto-record."})]})}const Ce=l.span`
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
`,pr=l.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  /* Graph panels expand in-place, so let the whole thing scroll rather than
     clipping the chart. Horizontal scroll catches narrow viewports where the
     row-action button cluster won't fit even in the wide flight modal. */
  max-height: 80vh;
  overflow: auto;
`,hr=l.div`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
`,gr=l.button`
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
`,fr=l.button`
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
`,mr=l.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-section);
  padding-bottom: var(--inset-toolbar-bottom);
  margin-bottom: var(--gap-toolbar);
  border-bottom: 1px solid var(--color-border-subtle);
`,ze=l.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,vr=l.span`
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
`,br=l.table`
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
`,Fe=l.tr`
  background: ${({$current:e})=>e?"var(--color-go-status)":"transparent"};
  &:hover { background: var(--color-surface-raised); }
`,P=l.td`
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
`,xr=l.button`
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
`,yr=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-section);
  padding: var(--inset-table-footer);
  border-top: 1px solid var(--color-border-subtle);
`,Sr=l.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-height: 24px;
`,wr=l.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,kr=l.th`
  width: 28px;
  padding: var(--inset-surface);
  border-bottom: 1px solid var(--color-border-subtle);
`,ie=l.input.attrs({type:"checkbox"})`
  cursor: pointer;
  margin: 0;
`,jr=l.th`
  width: 24px;
  /* The one cell that cannot take --inset-surface beside Th and ThCheckbox: a
     24px column carrying a star glyph needs more vertical than horizontal. At
     (6,8) the content box is 8px and the glyph clips. */
  padding: var(--inset-table-narrow-header);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
  text-align: center;
`,Cr=l.button`
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
`,Mr=l.div`
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
`,Fr=l.span`
  color: var(--color-nogo-muted);
`,Tr=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-dim);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,Er=new Ze({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class No{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new Xe;historyCache=new Map;async connect(){await this.pruneToKeepCount()}disconnect(){}schema(){return Pe()}subscribe(t,r){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,r,o,a){if(!a)return{t:[],v:[]};const i=nt(t);if(!i)return{t:[],v:[]};const d=await this.getFullHistoryStore(a);if(!d)return{t:[],v:[]};const f=d.isDerivedTopic(i)?d.sampleDerivedRange(i,r,o):d.sampleRange(i,r,o);return f?{t:f.map(h=>h.validAt),v:f.map(h=>h.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(q)}async getFlight(t){const r=await this.missionStore.getMissionMeta(t);return r?q(r):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire(),await this.pruneToKeepCount()}async saveMissionPart(t,r,o){await this.missionStore.saveMissionPart(t,r,o),this.historyCache.delete(t.id),this.flightListSubscribers.fire(),await this.pruneToKeepCount()}async pruneToKeepCount(){const t=Re();t<=0||await this.pruneFlightsKeepLatest({keepCount:t})}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,r){const o=await this.missionStore.getMissionMeta(t);!o||!!o.starred===r||(await this.missionStore.updateMissionMeta(t,{starred:r}),this.flightListSubscribers.fire())}async addChapter(t,r){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const i={id:r.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:r.label,startMs:r.startMs,endMs:r.endMs},d=[...o.chapters??[],i];return await this.missionStore.updateMissionMeta(t,{chapters:d}),this.flightListSubscribers.fire(),q({...o,chapters:d})}async updateChapter(t,r,o){const a=await this.missionStore.getMissionMeta(t);if(!a)return null;const i=(a.chapters??[]).map(d=>d.id===r?{...d,...o}:d);return await this.missionStore.updateMissionMeta(t,{chapters:i}),this.flightListSubscribers.fire(),q({...a,chapters:i})}async removeChapter(t,r){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const a=(o.chapters??[]).filter(i=>i.id!==r);return await this.missionStore.updateMissionMeta(t,{chapters:a}),this.flightListSubscribers.fire(),q({...o,chapters:a})}async pruneFlightsKeepLatest(t){const r=await this.missionStore.pruneMissionsKeepLatest(t);for(const o of r)this.historyCache.delete(o);return r.length>0&&this.flightListSubscribers.fire(),r}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const r=this.historyCache.get(t);if(r)return r;const o=(async()=>{const a=await this.missionStore.getMissionFixture(t);if(!a)throw new Error(`mission fixture not found: ${t}`);return Er.record(),ft(a.fixture)})();this.historyCache.set(t,o);try{return await o}catch{this.historyCache.delete(t);return}}}function q(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt,firstValidUt:e.firstValidUt,lastValidUt:e.lastValidUt}}const Ar=[];function Lr(e){const t=[re(e.dvRadial,0),re(e.dvNormal,0),re(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function Ro(){const e=at("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return u.useMemo(()=>!Array.isArray(t)||t.length===0?Ar:t.map(Lr),[t])}function Nr(e){const t=e.parts.map(Rr),r=e.parts.find(o=>o.parentId==null);return{topologySeq:e.parts.length,rootFlightId:r?Number(r.id):0,parts:t}}function Rr(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage??null,crewCapacity:0,maxTemp:e.maxTemp?.magnitude??null,crashTolerance:0,dryMass:e.dryMass?.magnitude??null,orgPos:[e.position.x.magnitude,e.position.y.magnitude,e.position.z.magnitude],up:e.up?[e.up.x.magnitude,e.up.y.magnitude,e.up.z.magnitude]:void 0,bounds:{size:{x:e.bounds.size.x.magnitude,y:e.bounds.size.y.magnitude,z:e.bounds.size.z.magnitude},center:e.bounds.center?{x:e.bounds.center.x.magnitude,y:e.bounds.center.y.magnitude,z:e.bounds.center.z.magnitude}:void 0},modules:e.modules}}function $r(e){return e.currentTemp==null?null:{temperature:he(e.currentTemp.magnitude),maxTemperature:e.maxTemp==null?null:he(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp?.magnitude??null}}function Ur(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),$r(r));return t}function Dr(e){const t={};for(const[r,o]of Object.entries(e.resources))t[r]={amount:o.amount?.magnitude??null,maxAmount:o.maxAmount?.magnitude??null,...o.flow!=null?{flow:o.flow.magnitude}:{},...o.nominalFlow!=null?{nominalFlow:o.nominalFlow.magnitude}:{},...o.unratedProcess===!0?{unratedProcess:!0}:{}};return t}function Br(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Dr(r));return t}function Or(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function Pr(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map(Or)}}function Ir(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Pr(r));return t}function $o(e){const t=$e("vessel.parts"),r=t.state==="observed"||t.state==="held"?t.value:void 0,o=u.useMemo(()=>Ur(r),[r]),a=u.useMemo(()=>Br(r),[r]),i=u.useMemo(()=>Ir(r),[r]),d=[...e].sort((f,h)=>f-h).join(",");return u.useMemo(()=>{const f=d.length===0?[]:d.split(",").map(Number),h=new Map;for(const m of f)h.set(m,{thermal:o.get(m)??null,resources:a.get(m)??{},partState:i.get(m)});return h},[d,o,a,i])}const Ee=Object.freeze({status:"none"}),Kr={t:[],readings:[]};function Ke(e){return e==="recorded"||e==="last-before-blackout"?e:void 0}function Hr(e){return e!==null&&typeof e=="object"&&"magnitude"in e}function Vr(e,t){if(Hr(e))return{value:e,...t};if(typeof e=="number")return{value:W(t.lo.unit,e),...t}}function _r(e){const t=$t(e);if(t===void 0)return Kr;const r=new Map;for(const i of e.spans??[]){const d=Ke(i.status);if(d!==void 0)for(let f=i.from;f<=i.to;f++)r.set(f,d)}let o;const a=e.t.map((i,d)=>{const f=W("ut",i),h=t.payloads[d],m=t.modelled.get(d);if(m!==void 0){const w={status:"available",modelled:h,atUt:f,beyondReceived:!0,basis:m.basis,band:m.band?Vr(h,m.band):void 0};return o===void 0?{state:"pending",reckoning:w}:{state:"held",value:o.payload,asOfUt:o.at,grade:"held",reckoning:w}}o={payload:h,at:f};const y=r.get(d);return y!==void 0?{state:"held",value:h,asOfUt:f,grade:y,reckoning:Ee}:{state:"observed",value:h,atUt:f,reckoning:Ee}});return{t:e.t,readings:a,basis:e.basis,breaks:e.breaks,bridges:e.bridges,windowEndAt:e.windowEndAt}}function Uo(e,t){const r=Ht(vt(e),t);return u.useMemo(()=>_r(r),[r])}function qr(e,t,r,o){if(o===void 0)return null;if(t!==null&&t.status===o)return t.to=r,t;const a={from:r,to:r,status:o};return e.push(a),a}function Gr(e,t,r,o,a){if(o===void 0)return null;if(t!==null&&t.basis===o&&t.bandKind===a?.kind)return t.to=r,a!==void 0&&(t.bandLo?.push(a.lo),t.bandHi?.push(a.hi)),t;const i=a!==void 0?{from:r,to:r,basis:o,bandLo:[a.lo],bandHi:[a.hi],bandKind:a.kind}:{from:r,to:r,basis:o};return e.push(i),i}function Wr(e){return Number(J(e))}function Yr(e){const[t,r]=Oe(e?.lo,e?.hi);if(!(e===void 0||t===void 0||r===void 0))return{lo:t,hi:r,kind:e.kind}}function Do(e){const t=[],r=[],o={t:[],v:[],basis:e.basis,breaks:[],spans:t,reckoned:r,bridges:[],windowEndAt:e.windowEndAt},a=new Set(e.breaks??[]),i=new Map((e.bridges??[]).map(y=>[y.to,y])),d=new Map;let f=null,h=null,m=!1;for(let y=0;y<e.t.length;y++){a.has(y)&&(m=!0);const w=e.readings[y],M=w.reckoning.status==="available"?w.reckoning:void 0,E=Wr(M?M.modelled:w.value);if(Number.isNaN(E))continue;const b=o.t.length,j=m&&b>0;j&&o.breaks.push(b),m=!1,d.set(y,b);const z=i.get(y);z!==void 0&&!j&&d.get(y-1)===b-1&&z.v.every(Number.isFinite)&&o.bridges.push({...z,to:b}),o.t.push(e.t[y]),o.v.push(E);const U=M===void 0&&w.state==="held"?Ke(w.grade):void 0;f=qr(t,f,b,U),h=Gr(r,h,b,M?.basis,Yr(M?.band))}return o}function Bo(){const e=$e("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return u.useMemo(()=>t?Nr(t):void 0,[t])}function Oo(){const e=Ue(),t=u.useSyncExternalStore(d=>e.subscribe(d),()=>e.getSnapshot());if(st(),!t.active||!t.meta)return null;const r=t.meta,o=e.cursorUt(),a=Math.max(0,r.lastFrameUt-r.firstFrameUt),i=Math.max(0,o-r.firstFrameUt);return n.jsxs(Jr,{role:"region","aria-label":"Replay controls",children:[n.jsxs(Le,{children:[n.jsx(Xr,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),n.jsxs(Zr,{children:["REPLAY: ",n.jsx(Qr,{children:r.vesselName||"Unnamed vessel"})]})]}),n.jsxs(eo,{children:[n.jsx(Ne,{children:Ae(i)}),n.jsx(to,{type:"range",min:r.firstFrameUt,max:r.lastFrameUt,step:.1,value:o,onChange:d=>e.seekTo(Number(d.target.value)),"aria-label":"Seek to position"}),n.jsx(Ne,{children:Ae(a)})]}),n.jsxs(Le,{children:[n.jsxs(ro,{value:String(t.rate),onChange:d=>e.setRate(Number(d.target.value)),"aria-label":"Playback rate",children:[n.jsx("option",{value:"0.5",children:"0.5×"}),n.jsx("option",{value:"1",children:"1×"}),n.jsx("option",{value:"2",children:"2×"}),n.jsx("option",{value:"5",children:"5×"}),n.jsx("option",{value:"10",children:"10×"}),n.jsx("option",{value:"50",children:"50×"})]}),n.jsx(oo,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function Ae(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),r=Math.floor(t/3600),o=Math.floor(t%3600/60),a=t%60;return r>0?`${r}:${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`}const Jr=l.div`
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
`,Le=l(ct).attrs({justify:"start"})`
  flex-shrink: 0;
`,Zr=l.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
`,Qr=l.span`
  color: var(--color-tag-purple-fg);
  font-weight: 700;
  margin-left: var(--gap-trailing-figure);
`,Xr=l.button`
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
`,eo=l.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,to=l.input`
  flex: 1;
  min-width: 0;
  accent-color: var(--color-tag-purple-fg);
`,Ne=l.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  white-space: nowrap;
`,ro=l.select`
  background: var(--color-surface-app);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,oo=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`;export{Lo as F,No as M,Oo as R,Br as a,Oe as b,Eo as c,te as d,Pe as e,To as f,ge as g,_t as h,Yt as i,Zt as j,J as k,Wr as l,Co as m,bt as n,Ht as o,Do as p,Qt as q,zo as r,Mo as s,$o as t,Ro as u,Ao as v,Uo as w,Ie as x,Bo as y,Fo as z};
