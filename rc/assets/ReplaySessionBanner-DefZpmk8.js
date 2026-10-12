import{j as o}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./ext-react-RRA14VTW.js";import{ck as G,R as Ke,ch as _e,co as qe,cn as Ge,cZ as Ve,d2 as We,ag as Ye,aO as V,aZ as Je,bQ as ue,b1 as te}from"./view-clock-formula-ZKacKPC2.js";import{o as Ze,D as W,s as Qe,L as Xe}from"./ksp-enum-names-CpMVNMAI.js";import{a as le}from"./registry-CsaCyQ2s.js";import"./screen-mp_f6rUi.js";import{i as et,aH as tt,ba as rt,bc as ot,aW as nt,b7 as at,bg as st}from"./lagrange-B8ztZ552.js";import{p as Ne}from"./use-transmissions-BA6nr-oi.js";import{g as $e}from"./replay-session-controller-BEZc4TDi.js";import"./websocket-transport-Bi_vSYVe.js";import{v as H,ab as it,E as lt,t as pe,a9 as ct}from"./vesselMark-B52yudi1.js";import{N as dt,w as ie}from"./streamStatusWord-CYmxuWLC.js";import"./processorPerfBudget-CXTh85cn.js";import"./index-CnzDwjkh.js";import{D as ut,L as pt}from"./VersionMismatchBanner-DA0tFUiT.js";import i from"./ext-styled-components-Br73TgY3.js";import{b as ht}from"./full-history-replay-C-9LYaoU.js";import{e as gt,s as ft}from"./topic-fields-kGG5Rd1Z.js";import{k as he}from"./orbital-ex7VvHeC.js";const De={recording:!1,vesselName:null,frameCount:0};let ce=De;const Q=new Set;function ge(){return ce}function So(e){ce=e;for(const t of Q)t()}function mt(e){return Q.add(e),()=>{Q.delete(e)}}function wo(){ce=De,Q.clear()}function re(){return le("missionHistory")}function K(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),r=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function Y(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const d=Number(t);return Number.isFinite(d)&&d>=0?d*1e3:null}const r=t.split(":").map(d=>d.trim());if(r.some(d=>d===""||!/^\d+(\.\d+)?$/.test(d)))return null;const n=r.map(Number),l=n.length===2?n[0]*60+n[1]:n.length===3?n[0]*3600+n[1]*60+n[2]:null;return l===null?null:l*1e3}function vt({flight:e,onChange:t}){const r=e.chapters??[],n=Math.max(0,e.lastSampleAt-e.launchedAt),[s,l]=p.useState(""),[d,u]=p.useState(""),[h,m]=p.useState(""),[x,y]=p.useState(null),[F,R]=p.useState(null),[v,z]=p.useState(""),[T,D]=p.useState(""),[M,S]=p.useState(""),[A,L]=p.useState(null);function k(c){R(c.id),z(c.label),D(K(c.startMs)),S(K(c.endMs)),L(null)}function C(){R(null),L(null)}async function O(){const c=re();if(!c)return;const j=Y(d),w=Y(h);if(s.trim()===""){y("Label required");return}if(j===null||w===null){y("Start and end must be mm:ss");return}if(w<=j){y("End must be after start");return}y(null),await c.addChapter(e.id,{label:s.trim(),startMs:j,endMs:w}),l(""),u(""),m(""),t()}async function U(c){const j=re();if(!j)return;const w=Y(T),N=Y(M);if(v.trim()===""){L("Label required");return}if(w===null||N===null){L("Start and end must be mm:ss");return}if(N<=w){L("End must be after start");return}L(null),await j.updateChapter(e.id,c,{label:v.trim(),startMs:w,endMs:N}),R(null),t()}async function f(c){const j=re();j&&(await j.removeChapter(e.id,c),F===c&&C(),t())}return o.jsxs(bt,{children:[o.jsx(xt,{children:"Chapters"}),r.length===0?o.jsx(yt,{children:"No chapters yet. Add markers to slice the flight."}):o.jsx(St,{children:r.slice().sort((c,j)=>c.startMs-j.startMs).map(c=>{const j=F===c.id;return o.jsx(wt,{children:j?o.jsxs(o.Fragment,{children:[o.jsx(H,{type:"text",value:v,onChange:w=>z(w.target.value),"aria-label":"Chapter label"}),o.jsx(H,{type:"text",value:T,onChange:w=>D(w.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),o.jsx(H,{type:"text",value:M,onChange:w=>S(w.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),o.jsxs(fe,{children:[o.jsx(Mt,{type:"button",onClick:()=>void U(c.id),children:"Save"}),o.jsx(Ft,{type:"button",onClick:C,children:"Cancel"})]})]}):o.jsxs(o.Fragment,{children:[o.jsx(kt,{title:c.label,children:c.label}),o.jsxs(jt,{children:[K(c.startMs)," – ",K(c.endMs)]}),o.jsxs(Ct,{children:["(",K(c.endMs-c.startMs),")"]}),o.jsxs(fe,{children:[o.jsx(zt,{type:"button",onClick:()=>k(c),children:"edit"}),o.jsx(Tt,{type:"button",onClick:()=>void f(c.id),"aria-label":`Remove chapter ${c.label}`,children:"×"})]})]})},c.id)})}),A&&o.jsx(me,{children:A}),o.jsxs(Et,{children:[o.jsx(H,{type:"text",placeholder:"Chapter name",value:s,onChange:c=>l(c.target.value),"aria-label":"New chapter label"}),o.jsx(H,{type:"text",placeholder:"0:00",value:d,onChange:c=>u(c.target.value),"aria-label":"New chapter start (mm:ss)"}),o.jsx(H,{type:"text",placeholder:K(n),value:h,onChange:c=>m(c.target.value),"aria-label":"New chapter end (mm:ss)"}),o.jsx(At,{type:"button",onClick:()=>void O(),children:"+ add"})]}),x&&o.jsx(me,{children:x})]})}const bt=i.div`
  padding: var(--inset-chapters-band);
  background: var(--color-surface-app);
  border-bottom: 1px solid var(--color-border-subtle);
`,xt=i.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: var(--gap-heading-hint);
`,yt=i.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  margin-bottom: var(--gap-related-comfortable);
`,St=i.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  margin-bottom: var(--gap-related-comfortable);
`,wt=i(it).attrs({cols:"minmax(120px, 1fr) auto auto auto",gap:"related-comfortable"})`
  font-size: var(--font-size-compact);
`,kt=i.span`
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,jt=i.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Ct=i.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-faint);
  font-size: var(--font-size-compact);
  white-space: nowrap;
`,fe=i.span`
  display: inline-flex;
  gap: var(--gap-related);
  align-items: center;
  justify-self: end;
`,zt=i.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,Mt=i.button`
  background: var(--color-go-status);
  border: 1px solid var(--color-go-status);
  color: var(--color-go-on-status);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,Ft=i.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,Tt=i.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-base);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,Et=i.div`
  display: grid;
  grid-template-columns: minmax(120px, 1fr) 80px 80px auto;
  gap: var(--gap-related);
  align-items: center;
  margin-top: var(--gap-actions);
`,At=i.button`
  background: none;
  border: 1px dashed var(--color-text-faint);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  white-space: nowrap;
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,me=i.div`
  margin-top: var(--gap-sub-readout);
  font-size: var(--font-size-compact);
  color: var(--color-tag-red-fg);
`,Lt=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function Rt(e){const t=e.split(".").flatMap(l=>l.split(/(?=[A-Z])/)).map(l=>l.toLowerCase()).filter(l=>l.length>0).map(l=>Lt[l]??l);if(t.length===0)return e;const[r,...n]=t;return[r===r.toUpperCase()?r:r[0].toUpperCase()+r.slice(1),...n].join(" ")}function Nt(e,t,r){return r.has(e)?!0:Ve(`${e}.${t}`)?.rawTopic===e}function $t(e,t){return{key:`${e}.${t.path}`,label:Rt(t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function Dt(e,t){const r=new Set(t),n=[...new Set([..._e(),...e,...t])].filter(u=>!qe(u)).sort(),s=[],l=[],d=[];for(const u of n){if(Ge(u)){d.push(u);continue}const h=gt(u).filter(m=>Nt(u,m.path,r));if(h.length===0){l.push(u);continue}for(const m of h)s.push($t(u,m))}return{keys:s,undescribed:l,collections:d}}function ee(){return[...et.map(e=>e.topic),...Ke().map(e=>e.topic)]}let oe;function de(e,t){const r=`${e.join(",")}|${t.join(",")}`;if(oe?.key===r)return oe.built;const n=Dt(e,t);return oe={key:r,built:n},n}function Ue(e=G(),t=ee()){return de(e,t).keys}function Ut(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!Bt.has(e.unit)}const Bt=new Set(["bool","enum","flag","id","raw","text"]);function Ot(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function ko(e,t){const r=e?.enumEncoding;return r?.by!=="ordinal"||typeof t!="number"?t:r.names[t]??t}function jo(e=G(),t=ee()){return de(e,t).undescribed}function Co(e=G(),t=ee()){return de(e,t).collections}function ve(){return ee().join(",")}function Be(){const e=p.useSyncExternalStore(We,G,G),t=p.useSyncExternalStore(Ye,ve,ve);return p.useMemo(()=>Ue(e,t.split(",")),[e,t])}function It(){const e=Be();return p.useMemo(()=>e.filter(Ut),[e])}function zo(){const e=Be();return p.useMemo(()=>e.filter(Ot),[e])}const be=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function xe(){return le("missionHistory")}function Pt({missionId:e,firstFrameUt:t,lastFrameUt:r}){const n=It(),[s,l]=p.useState(new Set),[d,u]=p.useState([]),[h,m]=p.useState(!1),[x,y]=p.useState(null);p.useEffect(()=>()=>{xe()?.evictFullHistoryStore(e)},[e]);const F=p.useRef(null),[R,v]=p.useState(600);p.useEffect(()=>{const S=F.current;if(!S||typeof ResizeObserver>"u")return;const A=new ResizeObserver(L=>{for(const k of L){const C=k.contentRect.width;C>0&&v(Math.floor(C))}});return A.observe(S),()=>A.disconnect()},[]);const z=p.useMemo(()=>n.map(S=>({key:S.key,label:S.label??S.key,unit:S.unit,group:Ht(S.key)})),[n]);p.useEffect(()=>{const S=xe();if(!S||s.size===0){u([]),y(null);return}let A=!1;m(!0),y(null);const L=[...s];return Promise.all(L.map(k=>S.queryRange(k,t,r,e))).then(k=>{if(A)return;const C=new Map(n.map(U=>[U.key,U])),O=L.map((U,f)=>{const c=k[f],j=[],w=[];for(let $=0;$<c.t.length;$++){const a=c.v[$];typeof a=="number"&&Number.isFinite(a)&&(j.push((c.t[$]-t)*1e3),w.push(a))}const N=C.get(U);return{id:U,label:N?.label??U,axis:"primary",color:be[f%be.length],type:"line",data:{x:j,y:w}}});u(O)}).catch(k=>{A||y(k instanceof Error?k.message:String(k))}).finally(()=>{A||m(!1)}),()=>{A=!0}},[s,e,t,r,n]);const T=Math.max(0,(r-t)*1e3),D=T>0?[0,T]:[0,6e4],M=d.some(S=>S.data.x.length>0);return o.jsxs(Kt,{children:[o.jsxs(_t,{children:[o.jsx(qt,{children:"Series"}),o.jsx(ut,{keys:z,value:s,onChange:l,placeholder:"Add a data key...",emptyHint:z.length===0?"No numeric keys in the current schema":"No matches"})]}),x&&o.jsxs(Wt,{role:"alert",children:["Failed to load samples: ",x]}),s.size===0?o.jsx(ye,{children:"Pick one or more numeric telemetry keys above to plot them."}):o.jsxs(Gt,{ref:F,children:[h&&o.jsx(Vt,{children:"Loading..."}),!h&&!M&&o.jsx(ye,{children:"No recorded samples for the selected keys."}),M&&o.jsx(pt,{series:d,xDomain:D,width:R,height:260})]})]})}function Ht(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const Kt=i.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border-top: 1px solid var(--color-surface-raised);
`,_t=i.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,qt=i.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Gt=i.div`
  position: relative;
  min-height: 260px;
`,ye=i.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  padding: var(--inset-chart-empty);
  text-align: center;
`,Vt=i.div`
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
`,Wt=i.div`
  font-size: var(--font-size-compact);
  color: var(--color-nogo-text);
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  padding: var(--inset-surface);
  border-radius: var(--radius-regular);
`;function Yt(e){return new Date(e).toLocaleString()}function Jt(e,t){return ie(V("irl:s",(t-e)/1e3))}function Zt(e){const t=[e.fundsEarned===null?null:`+${ie(V("funds",e.fundsEarned),{decimals:0})}`,e.scienceEarned===null?null:`+${ie(V("science",e.scienceEarned),{decimals:1})}`].filter(r=>r!==null);return[`Recovered ${e.recoveryLocation}`,e.recoveryFactor,t.length>0?t.join(" · "):"no funds or science awarded"].filter(r=>r!=="").join(" · ")}function B(){return le("missionHistory")}function Se(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),r=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${r}.fixture.json`}function we(e,t){const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(r),s=document.createElement("a");s.href=n,s.download=t,document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(n)}function Mo({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:r=!1}={}){const n=e==="main",[s,l]=p.useState([]),[d,u]=p.useState(null),[h,m]=p.useState(!1),[x,y]=p.useState(!1),[F,R]=p.useState(null),[v,z]=p.useState(()=>new Set),[T,D]=p.useState(()=>Ze()),M=p.useCallback(async()=>{const a=B();if(!a)return;let g;try{g=await a.listFlights()}catch(b){console.warn("FlightsManager: failed to load flights",b);return}l(g.sort((b,E)=>E.launchedAt-b.launchedAt)),z(b=>{const E=new Set;for(const P of g)b.has(P.id)&&E.add(P.id);return E.size===b.size?b:E})},[]);p.useEffect(()=>{M()},[M]),p.useEffect(()=>{const a=B();if(typeof a?.onFlightListChange=="function")return a.onFlightListChange(()=>{M()})},[M]);const S=async a=>{const g=B();g&&(await g.deleteFlight(a),u(null),await M())},A=async a=>{const g=B();if(!g)return;const b=await g.exportFlight(a.id);we(b,Se(a))},L=async a=>{const g=B();if(!g)return;const b=await g.exportFlight(a.id),E={id:a.id,vesselName:a.vesselName,launchedAt:a.launchedAt,firstFrameUt:a.firstFrameUt??0,lastFrameUt:a.lastFrameUt??0,frameCount:a.sampleCount};$e().start(E,b)},k=async()=>{const a=B();a&&(await a.clearAllFlights(),m(!1),await M())},C=a=>{z(g=>{const b=new Set(g);return b.has(a)?b.delete(a):b.add(a),b})},O=()=>{z(a=>a.size===s.length?new Set:new Set(s.map(g=>g.id)))},U=async()=>{const a=B();if(!a)return;const g=Array.from(v);for(const b of g)await a.deleteFlight(b);y(!1),await M()},f=async a=>{const g=B();g&&(await g.setFlightStarred(a.id,!a.starred),await M())},c=async a=>{const g=B(),b=a?W:0;Qe(b),D(b),a&&g&&(await g.pruneFlightsKeepLatest({keepCount:b}),await M())},j=async()=>{const a=B();if(!a)return;const g=Array.from(v),b=new Map(s.map(E=>[E.id,E]));for(const E of g){const P=b.get(E);if(!P)continue;const He=await a.exportFlight(E);we(He,Se(P))}},w=s.length>0&&v.size===s.length,N=v.size>0&&v.size<s.length,$=(()=>{const a=[...s].sort((E,P)=>P.launchedAt-E.launchedAt);let g=0,b=0;for(const E of a)E.starred||(g+=1,g>W&&(b+=1));return b})();return o.jsxs(Xt,{children:[n&&o.jsx(Qt,{missionHistoryEnabled:t,recordAllTopics:r}),s.length===0?o.jsx(lt,{children:"No flight history recorded yet"}):o.jsxs(o.Fragment,{children:[o.jsxs(ar,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(dr,{children:o.jsx(ae,{ref:a=>{a&&(a.indeterminate=N)},checked:w,onChange:O,"aria-label":w?"Clear selection":"Select all flights"})}),o.jsxs(ur,{children:[o.jsx(pe,{size:12,fill:"currentColor","aria-hidden":"true"}),o.jsx(ke,{children:"Kept (exempt from auto-delete)"})]}),o.jsx(_,{children:"Vessel"}),o.jsx(_,{children:"Launched"}),o.jsx(_,{children:"Duration"}),o.jsx(_,{children:"Samples"}),o.jsx(_,{children:o.jsx(ke,{children:"Actions"})})]})}),o.jsx("tbody",{children:s.map(a=>{const g=F===a.id,b=v.has(a.id);return o.jsxs(p.Fragment,{children:[o.jsxs(ze,{$current:!1,children:[o.jsx(I,{children:o.jsx(ae,{checked:b,onChange:()=>C(a.id),"aria-label":`Select flight ${a.vesselName||a.id}`})}),o.jsx(I,{children:o.jsx(pr,{type:"button",$on:!!a.starred,onClick:()=>void f(a),"aria-label":a.starred?`Unstar ${a.vesselName||"flight"}`:`Star ${a.vesselName||"flight"} (keep from auto-delete)`,"aria-pressed":!!a.starred,title:a.starred?"Kept from auto-delete":"Keep from auto-delete",children:o.jsx(pe,{size:"var(--icon-size-control)",fill:a.starred?"currentColor":"none"})})}),o.jsxs(I,{children:[a.vesselName||dt,a.outcome?.kind==="recovered"&&o.jsx(Me,{$tone:"go",title:Zt(a.outcome),children:"recovered"}),a.outcome?.kind==="crashed"&&o.jsx(Me,{$tone:"nogo",title:`Crashed at ${a.outcome.body} (${a.outcome.situation}) · ${a.outcome.partsLostCount} part(s) lost${a.outcome.kerbalsKilled.length>0?` · KIA: ${a.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),o.jsx(I,{children:Yt(a.launchedAt)}),o.jsx(I,{children:Jt(a.launchedAt,a.lastSampleAt)}),o.jsx(I,{children:a.sampleCount.toLocaleString()}),o.jsx(I,{children:o.jsxs(er,{children:[o.jsx(tr,{type:"button",$open:g,onClick:()=>R(g?null:a.id),"aria-label":g?"Close graph":"Graph this flight","aria-expanded":g,children:g?"− graph":"＋ graph"}),n&&o.jsx(rr,{type:"button",onClick:()=>void L(a),"aria-label":`Replay ${a.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),o.jsx(je,{type:"button",onClick:()=>void A(a),"aria-label":`Download fixture for ${a.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),d===a.id?o.jsxs(ne,{children:[o.jsx(J,{onClick:()=>void S(a.id),children:"Delete"}),o.jsx(Z,{onClick:()=>u(null),children:"Cancel"})]}):o.jsx(sr,{onClick:()=>u(a.id),children:"×"})]})})]}),g&&o.jsx(ze,{$current:!1,children:o.jsxs(I,{colSpan:7,style:{padding:0},children:[o.jsx(vt,{flight:a,onChange:()=>void M()}),o.jsx(Pt,{missionId:a.id,firstFrameUt:a.firstFrameUt??0,lastFrameUt:a.lastFrameUt??0})]})})]},a.id)})})]}),o.jsxs(ir,{children:[o.jsx(lr,{children:v.size>0&&(x?o.jsxs(ne,{children:[o.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",v.size," selected flight",v.size===1?"":"s","?"]}),o.jsx(J,{onClick:()=>void U(),children:"Delete"}),o.jsx(Z,{onClick:()=>y(!1),children:"Cancel"})]}):o.jsxs(o.Fragment,{children:[o.jsxs(cr,{children:[v.size," selected"]}),o.jsx(je,{type:"button",onClick:()=>void j(),title:"Download fixtures for the selected flights",children:"↓ download"}),o.jsx(J,{onClick:()=>y(!0),children:"Delete"}),o.jsx(Z,{onClick:()=>z(new Set),children:"Clear"})]}))}),o.jsxs(hr,{children:[o.jsxs(gr,{title:`Keep the ${W} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[o.jsx(ae,{checked:T>0,onChange:a=>void c(a.target.checked)}),o.jsxs("span",{children:["Keep latest ",W,T===0&&$>0&&o.jsxs(fr,{children:[" ","(",$," would be deleted)"]})]})]}),h?o.jsxs(ne,{children:[o.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),o.jsx(J,{onClick:()=>void k(),children:"Clear all"}),o.jsx(Z,{onClick:()=>m(!1),children:"Cancel"})]}):o.jsx(mr,{onClick:()=>m(!0),children:"Clear all"})]})]})]})]})}function Qt({missionHistoryEnabled:e,recordAllTopics:t}){const r=p.useSyncExternalStore(mt,ge,ge);return o.jsx(or,{children:e?r.recording?o.jsxs(nr,{children:["● recording ",r.vesselName??"flight"," (",r.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):o.jsx(Ce,{children:"Auto-record armed: capture starts the moment a flight begins."}):o.jsx(Ce,{children:"Mission history is off, enable it in Settings to auto-record."})})}const ke=i.span`
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
`,Xt=i.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  /* Graph panels expand in-place, so let the whole thing scroll rather than
     clipping the chart. Horizontal scroll catches narrow viewports where the
     row-action button cluster won't fit even in the wide flight modal. */
  max-height: 80vh;
  overflow: auto;
`,er=i.div`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
`,tr=i.button`
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
`,je=i.button`
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
`,rr=i.button`
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
`,or=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-section);
  padding-bottom: var(--inset-toolbar-bottom);
  margin-bottom: var(--gap-toolbar);
  border-bottom: 1px solid var(--color-border-subtle);
`,Ce=i.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,nr=i.span`
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
`,ar=i.table`
  border-collapse: collapse;
  width: 100%;
  overflow-y: auto;
  font-size: var(--font-size-compact);
`,_=i.th`
  text-align: left;
  padding: var(--inset-surface);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
`,ze=i.tr`
  background: ${({$current:e})=>e?"var(--color-go-status)":"transparent"};
  &:hover { background: var(--color-surface-raised); }
`,I=i.td`
  /* 7px is computed, not chosen: it is the 6px vertical half of the surface
     inset Th carries, plus the 1px that makes a body row taller than the
     header row. It tracks Th, not the spacing grid. */
  padding: 7px var(--gutter-table-cell);
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-surface-raised);
  white-space: nowrap;
`,Me=i.span`
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
`,sr=i.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-lg);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,ne=i.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
`,J=i.button`
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  color: var(--color-tag-red-fg);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { background: var(--color-nogo-muted); }
`,Z=i.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,ir=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-section);
  padding: var(--inset-table-footer);
  border-top: 1px solid var(--color-border-subtle);
`,lr=i.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-height: 24px;
`,cr=i.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,dr=i.th`
  width: 28px;
  padding: var(--inset-surface);
  border-bottom: 1px solid var(--color-border-subtle);
`,ae=i.input.attrs({type:"checkbox"})`
  cursor: pointer;
  margin: 0;
`,ur=i.th`
  width: 24px;
  /* The one cell that cannot take --inset-surface beside Th and ThCheckbox: a
     24px column carrying a star glyph needs more vertical than horizontal. At
     (6,8) the content box is 8px and the glyph clips. */
  padding: var(--inset-table-narrow-header);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
  text-align: center;
`,pr=i.button`
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
`,hr=i.div`
  display: flex;
  align-items: center;
  gap: var(--gap-section);
`,gr=i.label`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  cursor: pointer;
  user-select: none;
`,fr=i.span`
  color: var(--color-nogo-muted);
`,mr=i.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-dim);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,vr=new Je({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class Fo{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new Xe;historyCache=new Map;async connect(){}disconnect(){}schema(){return Ue()}subscribe(t,r){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,r,n,s){if(!s)return{t:[],v:[]};const l=tt(t);if(!l)return{t:[],v:[]};const d=await this.getFullHistoryStore(s);if(!d)return{t:[],v:[]};const u=d.isDerivedTopic(l)?d.sampleDerivedRange(l,r,n):d.sampleRange(l,r,n);return u?{t:u.map(h=>h.validAt),v:u.map(h=>h.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(q)}async getFlight(t){const r=await this.missionStore.getMissionMeta(t);return r?q(r):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire()}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,r){const n=await this.missionStore.getMissionMeta(t);!n||!!n.starred===r||(await this.missionStore.updateMissionMeta(t,{starred:r}),this.flightListSubscribers.fire())}async addChapter(t,r){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const l={id:r.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:r.label,startMs:r.startMs,endMs:r.endMs},d=[...n.chapters??[],l];return await this.missionStore.updateMissionMeta(t,{chapters:d}),this.flightListSubscribers.fire(),q({...n,chapters:d})}async updateChapter(t,r,n){const s=await this.missionStore.getMissionMeta(t);if(!s)return null;const l=(s.chapters??[]).map(d=>d.id===r?{...d,...n}:d);return await this.missionStore.updateMissionMeta(t,{chapters:l}),this.flightListSubscribers.fire(),q({...s,chapters:l})}async removeChapter(t,r){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const s=(n.chapters??[]).filter(l=>l.id!==r);return await this.missionStore.updateMissionMeta(t,{chapters:s}),this.flightListSubscribers.fire(),q({...n,chapters:s})}async pruneFlightsKeepLatest(t){const r=await this.missionStore.pruneMissionsKeepLatest(t);for(const n of r)this.historyCache.delete(n);return r.length>0&&this.flightListSubscribers.fire(),r}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const r=this.historyCache.get(t);if(r)return r;const n=(async()=>{const s=await this.missionStore.getMissionFixture(t);if(!s)throw new Error(`mission fixture not found: ${t}`);return vr.record(),ht(s.fixture)})();this.historyCache.set(t,n);try{return await n}catch{this.historyCache.delete(t);return}}}function q(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt}}const Oe=new WeakMap;function br(e,t){Oe.set(e,t)}function xr(e){return Oe.get(e)}const se={t:[],v:[]};function yr(e){switch(e){case ue.LastBeforeBlackout:return"last-before-blackout";case ue.Recorded:return"recorded";default:return null}}function Sr(e){const t=[];let r=null;for(let n=0;n<e.length;n++){const s=yr(e[n].meta.staleness);if(s===null){r=null;continue}if(r!==null&&r.status===s){r.to=n;continue}r={from:n,to:n,status:s},t.push(r)}return t}const Fe=new WeakMap;function wr(e){const t=Fe.get(e);if(t)return t;const r={t:e.t,v:e.v.map(n=>{const s=X(n);return typeof s=="number"?s:Number.NaN}),basis:e.basis};return Fe.set(e,r),r}function kr(e,t){return e.length===t.length&&e.every((r,n)=>r.to===t[n].to&&r.v===t[n].v)}function jr(e,t){return e.length===t.length&&e.every((r,n)=>r.from===t[n].from&&r.to===t[n].to&&r.status===t[n].status)}function Te(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((r,n)=>Object.is(r,t[n]))}function Cr(e,t){return e.length===t.length&&e.every((r,n)=>r.from===t[n].from&&r.to===t[n].to&&r.basis===t[n].basis&&r.bandKind===t[n].bandKind&&Te(r.bandLo,t[n].bandLo)&&Te(r.bandHi,t[n].bandHi))}function Ie(e,t){return[e?.toWire(),t?.toWire()]}function zr(e,t,r,n,s){const l=new Map((t.sampleRange(r,n,s)??[]).map(h=>[h.validAt,JSON.stringify(h.payload)])),d=[];let u;for(const h of e){const m=l.get(h.validAt)??JSON.stringify(h.payload);m!==u&&(u=m,d.push(h))}return d}function X(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function Mr(e,t){const r=p.useRef(se),n=rt(),s=ot(),l=e,d=p.useCallback(h=>{if(!n||!s)return()=>{};const m=nt(n,s,l),x=s.subscribeFrame(h);return()=>{x(),m()}},[n,s,l]),u=p.useCallback(()=>{if(!s)return se;const h=s.currentFrame().viewUt,m=h-t,x=s.isDerivedTopic(l)?s.sampleDerivedRange(l,m,h):s.sampleRange(l,m,h),y=s.sampleReckonedTail(l,m,h),F=s.tagsOf(l),R=F.kind==="event"?"none":F.kind==="discrete"?"step":"linear",v=F.kind==="event"?zr(x??[],s,F.topic,m,h):x??[];if(v.length===0&&y.length===0)return se;const z=v.map(f=>f.validAt),T=v.map(f=>X(f.payload)),D=v.map(f=>f.payload),M=new Map,S=[],A=[];for(let f=0;f<v.length;f++){if(f===0)continue;if(R==="none")break;if(v[f].meta.gapSinceUt!=null){S.push(f);continue}if(Object.is(T[f],T[f-1]))continue;const c=s.gapModel(l,v[f-1],v[f]);if(c?.carried===!1){S.push(f);continue}c?.carried&&A.push({to:f,...wr(c)})}const L=Sr(v),k=[];for(const f of y){const c=z.length;z.push(f.atUt),T.push(X(f.value)),D.push(f.value);const{bandLo:j,bandHi:w}=f,[N,$]=Ie(j,w),a=N!==void 0&&$!==void 0?f.bandKind:void 0;M.set(c,{basis:f.basis,band:j!==void 0&&w!==void 0&&a!==void 0?{lo:j,hi:w,kind:a}:void 0});const g=k[k.length-1],b=g!==void 0&&g.basis===f.basis&&g.to===c-1&&g.bandKind===a;if(g!==void 0&&b){g.to=c,N!==void 0&&$!==void 0&&a!==void 0&&(g.bandLo?.push(N),g.bandHi?.push($));continue}if(N!==void 0&&$!==void 0&&a!==void 0){k.push({from:c,to:c,basis:f.basis,bandLo:[N],bandHi:[$],bandKind:a});continue}k.push({from:c,to:c,basis:f.basis})}const C=r.current,O=C.breaks??[];return C.t.length===z.length&&C.t.every((f,c)=>f===z[c])&&C.v.every((f,c)=>Object.is(f,T[c]))&&O.length===S.length&&O.every((f,c)=>f===S[c])&&kr(C.bridges??[],A)&&jr(C.spans??[],L)&&Cr(C.reckoned??[],k)&&C.windowEndAt===(k.length>0?h:void 0)&&(C.interpolation??"linear")===R?C:(r.current={t:z,v:T,basis:"ut-seconds",breaks:S,bridges:A,spans:L,reckoned:k,interpolation:R,windowEndAt:k.length>0?h:void 0},br(r.current,{payloads:D,modelled:M}),r.current)},[s,l,t]);return p.useSyncExternalStore(d,u)}const Fr=[];function Tr(e){const t=[te(e.dvRadial,0),te(e.dvNormal,0),te(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function To(){const e=at("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return p.useMemo(()=>!Array.isArray(t)||t.length===0?Fr:t.map(Tr),[t])}function Er(e){const t=e.parts.map(Ar),r=e.parts.find(n=>n.parentId==null);return{topologySeq:e.parts.length,rootFlightId:r?Number(r.id):0,parts:t}}function Ar(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage,crewCapacity:0,maxTemp:e.maxTemp.magnitude,crashTolerance:0,dryMass:e.dryMass.magnitude,orgPos:[e.position.x.magnitude,e.position.y.magnitude,e.position.z.magnitude],up:e.up?[e.up.x.magnitude,e.up.y.magnitude,e.up.z.magnitude]:void 0,bounds:{size:{x:e.bounds.size.x.magnitude,y:e.bounds.size.y.magnitude,z:e.bounds.size.z.magnitude},center:e.bounds.center?{x:e.bounds.center.x.magnitude,y:e.bounds.center.y.magnitude,z:e.bounds.center.z.magnitude}:void 0},modules:e.modules}}function Lr(e){return e.currentTemp==null?null:{temperature:he(e.currentTemp.magnitude),maxTemperature:he(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp.magnitude}}function Rr(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Lr(r));return t}function Nr(e){const t={};for(const[r,n]of Object.entries(e.resources))t[r]={amount:n.amount.magnitude,maxAmount:n.maxAmount.magnitude,...n.flow!=null?{flow:n.flow.magnitude}:{},...n.nominalFlow!=null?{nominalFlow:n.nominalFlow.magnitude}:{}};return t}function $r(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Nr(r));return t}function Dr(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function Ur(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map(Dr)}}function Br(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Ur(r));return t}function Eo(e){const t=Ne("vessel.parts"),r=t.state==="observed"||t.state==="held"?t.value:void 0,n=p.useMemo(()=>Rr(r),[r]),s=p.useMemo(()=>$r(r),[r]),l=p.useMemo(()=>Br(r),[r]),d=[...e].sort((u,h)=>u-h).join(",");return p.useMemo(()=>{const u=d.length===0?[]:d.split(",").map(Number),h=new Map;for(const m of u)h.set(m,{thermal:n.get(m)??null,resources:s.get(m)??{},partState:l.get(m)});return h},[d,n,s,l])}const Ee=Object.freeze({status:"none"}),Or={t:[],readings:[]};function Pe(e){return e==="recorded"||e==="last-before-blackout"?e:void 0}function Ir(e){return e!==null&&typeof e=="object"&&"magnitude"in e}function Pr(e,t){if(Ir(e))return{value:e,...t};if(typeof e=="number")return{value:V(t.lo.unit,e),...t}}function Hr(e){const t=xr(e);if(t===void 0)return Or;const r=new Map;for(const l of e.spans??[]){const d=Pe(l.status);if(d!==void 0)for(let u=l.from;u<=l.to;u++)r.set(u,d)}let n;const s=e.t.map((l,d)=>{const u=V("ut",l),h=t.payloads[d],m=t.modelled.get(d);if(m!==void 0){const y={status:"available",modelled:h,atUt:u,beyondReceived:!0,basis:m.basis,band:m.band?Pr(h,m.band):void 0};return n===void 0?{state:"pending",reckoning:y}:{state:"held",value:n.payload,asOfUt:n.at,grade:"held",reckoning:y}}n={payload:h,at:u};const x=r.get(d);return x!==void 0?{state:"held",value:h,asOfUt:u,grade:x,reckoning:Ee}:{state:"observed",value:h,atUt:u,reckoning:Ee}});return{t:e.t,readings:s,basis:e.basis,breaks:e.breaks,bridges:e.bridges,windowEndAt:e.windowEndAt}}function Ao(e,t){const r=Mr(ft(e),t);return p.useMemo(()=>Hr(r),[r])}function Kr(e,t,r,n){if(n===void 0)return null;if(t!==null&&t.status===n)return t.to=r,t;const s={from:r,to:r,status:n};return e.push(s),s}function _r(e,t,r,n,s){if(n===void 0)return null;if(t!==null&&t.basis===n&&t.bandKind===s?.kind)return t.to=r,s!==void 0&&(t.bandLo?.push(s.lo),t.bandHi?.push(s.hi)),t;const l=s!==void 0?{from:r,to:r,basis:n,bandLo:[s.lo],bandHi:[s.hi],bandKind:s.kind}:{from:r,to:r,basis:n};return e.push(l),l}function qr(e){return Number(X(e))}function Gr(e){const[t,r]=Ie(e?.lo,e?.hi);if(!(e===void 0||t===void 0||r===void 0))return{lo:t,hi:r,kind:e.kind}}function Lo(e){const t=[],r=[],n={t:[],v:[],basis:e.basis,breaks:[],spans:t,reckoned:r,bridges:[],windowEndAt:e.windowEndAt},s=new Set(e.breaks??[]),l=new Map((e.bridges??[]).map(x=>[x.to,x])),d=new Map;let u=null,h=null,m=!1;for(let x=0;x<e.t.length;x++){s.has(x)&&(m=!0);const y=e.readings[x],F=y.reckoning.status==="available"?y.reckoning:void 0,R=qr(F?F.modelled:y.value);if(Number.isNaN(R))continue;const v=n.t.length,z=m&&v>0;z&&n.breaks.push(v),m=!1,d.set(x,v);const T=l.get(x);T!==void 0&&!z&&d.get(x-1)===v-1&&T.v.every(Number.isFinite)&&n.bridges.push({...T,to:v}),n.t.push(e.t[x]),n.v.push(R);const D=F===void 0&&y.state==="held"?Pe(y.grade):void 0;u=Kr(t,u,v,D),h=_r(r,h,v,F?.basis,Gr(F?.band))}return n}function Ro(){const e=Ne("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return p.useMemo(()=>t?Er(t):void 0,[t])}function No(){const e=$e(),t=p.useSyncExternalStore(u=>e.subscribe(u),()=>e.getSnapshot()),r=st();if(!t.active||!t.meta)return null;const n=t.meta,s=r?.magnitude??n.firstFrameUt,l=Math.max(0,n.lastFrameUt-n.firstFrameUt),d=Math.max(0,s-n.firstFrameUt);return o.jsxs(Vr,{role:"region","aria-label":"Replay controls",children:[o.jsxs(Le,{children:[o.jsx(Jr,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),o.jsxs(Wr,{children:["REPLAY: ",o.jsx(Yr,{children:n.vesselName||"Unnamed vessel"})]})]}),o.jsxs(Zr,{children:[o.jsx(Re,{children:Ae(d)}),o.jsx(Qr,{type:"range",min:n.firstFrameUt,max:n.lastFrameUt,step:.1,value:s,onChange:u=>e.seekTo(Number(u.target.value)),"aria-label":"Seek to position"}),o.jsx(Re,{children:Ae(l)})]}),o.jsxs(Le,{children:[o.jsxs(Xr,{value:String(t.rate),onChange:u=>e.setRate(Number(u.target.value)),"aria-label":"Playback rate",children:[o.jsx("option",{value:"0.5",children:"0.5×"}),o.jsx("option",{value:"1",children:"1×"}),o.jsx("option",{value:"2",children:"2×"}),o.jsx("option",{value:"5",children:"5×"}),o.jsx("option",{value:"10",children:"10×"}),o.jsx("option",{value:"50",children:"50×"})]}),o.jsx(eo,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function Ae(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),r=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")}`}const Vr=i.div`
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
`,Le=i(ct).attrs({justify:"start"})`
  flex-shrink: 0;
`,Wr=i.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
`,Yr=i.span`
  color: var(--color-tag-purple-fg);
  font-weight: 700;
  margin-left: var(--gap-trailing-figure);
`,Jr=i.button`
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
`,Zr=i.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,Qr=i.input`
  flex: 1;
  min-width: 0;
  accent-color: var(--color-tag-purple-fg);
`,Re=i.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Xr=i.select`
  background: var(--color-surface-app);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,eo=i.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`;export{Mo as F,Fo as M,No as R,$r as a,Ie as b,Co as c,ee as d,Ue as e,jo as f,ge as g,Rt as h,Ut as i,Ot as j,X as k,qr as l,mt as m,Mr as n,It as o,Lo as p,Eo as q,wo as r,So as s,zo as t,To as u,Ao as v,Be as w,Ro as x,ko as y};
