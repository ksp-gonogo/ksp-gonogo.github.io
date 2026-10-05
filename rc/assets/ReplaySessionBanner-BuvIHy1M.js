import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-RRA14VTW.js";import{bN as G,ab as Pe,bK as Ie,bS as Oe,bR as He,cr as Ke,cw as _e,az as qe,v as ae,b2 as X}from"./view-clock-formula-aC7mjXLK.js";import{o as Ge,D as V,s as Ve,L as We}from"./ksp-enum-names-VzzNPeFZ.js";import{a as le}from"./registry-BqwXCbXz.js";import{P as Ye,Z as ue}from"./kepler-DtDJUp9i.js";import{P as Ze,aF as Je,u as Qe,d as Xe,aU as et,b as tt,b7 as Re,bf as rt}from"./use-transmissions-CNXIlXpa.js";import"./reference-frame-C3IY91zk.js";import{g as Ne}from"./replay-session-controller-BEsEElTJ.js";import"./websocket-transport-DDS_WZAn.js";import{v as H,ac as ot,E as nt,t as pe,aa as at}from"./reckoningMarkDraw-wm1NEMVD.js";import{N as st,w as se}from"./streamStatusWord-DiCPl-PU.js";import"./registry-1t2HDf75.js";import"./index-CnzDwjkh.js";import{D as it,L as lt}from"./VersionMismatchBanner-Bwdram9a.js";import i from"./ext-styled-components-Br73TgY3.js";import{b as ct}from"./full-history-replay-RGAl4UKQ.js";import{e as dt}from"./topic-fields-CmQPMrVm.js";import{k as he}from"./orbital-Br86um6b.js";const $e={recording:!1,vesselName:null,frameCount:0};let ce=$e;const J=new Set;function ge(){return ce}function ro(e){ce=e;for(const t of J)t()}function ut(e){return J.add(e),()=>{J.delete(e)}}function oo(){ce=$e,J.clear()}function ee(){return le("missionHistory")}function K(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),o=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60;return o>0?`${o}:${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function W(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const p=Number(t);return Number.isFinite(p)&&p>=0?p*1e3:null}const o=t.split(":").map(p=>p.trim());if(o.some(p=>p===""||!/^\d+(\.\d+)?$/.test(p)))return null;const n=o.map(Number),l=n.length===2?n[0]*60+n[1]:n.length===3?n[0]*3600+n[1]*60+n[2]:null;return l===null?null:l*1e3}function pt({flight:e,onChange:t}){const o=e.chapters??[],n=Math.max(0,e.lastSampleAt-e.launchedAt),[s,l]=c.useState(""),[p,g]=c.useState(""),[f,S]=c.useState(""),[N,M]=c.useState(null),[C,E]=c.useState(null),[j,z]=c.useState(""),[L,D]=c.useState(""),[y,v]=c.useState(""),[F,T]=c.useState(null);function u(d){E(d.id),z(d.label),D(K(d.startMs)),v(K(d.endMs)),T(null)}function x(){E(null),T(null)}async function P(){const d=ee();if(!d)return;const w=W(p),b=W(f);if(s.trim()===""){M("Label required");return}if(w===null||b===null){M("Start and end must be mm:ss");return}if(b<=w){M("End must be after start");return}M(null),await d.addChapter(e.id,{label:s.trim(),startMs:w,endMs:b}),l(""),g(""),S(""),t()}async function A(d){const w=ee();if(!w)return;const b=W(L),U=W(y);if(j.trim()===""){T("Label required");return}if(b===null||U===null){T("Start and end must be mm:ss");return}if(U<=b){T("End must be after start");return}T(null),await w.updateChapter(e.id,d,{label:j.trim(),startMs:b,endMs:U}),E(null),t()}async function R(d){const w=ee();w&&(await w.removeChapter(e.id,d),C===d&&x(),t())}return r.jsxs(ht,{children:[r.jsx(gt,{children:"Chapters"}),o.length===0?r.jsx(mt,{children:"No chapters yet. Add markers to slice the flight."}):r.jsx(ft,{children:o.slice().sort((d,w)=>d.startMs-w.startMs).map(d=>{const w=C===d.id;return r.jsx(vt,{children:w?r.jsxs(r.Fragment,{children:[r.jsx(H,{type:"text",value:j,onChange:b=>z(b.target.value),"aria-label":"Chapter label"}),r.jsx(H,{type:"text",value:L,onChange:b=>D(b.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),r.jsx(H,{type:"text",value:y,onChange:b=>v(b.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),r.jsxs(me,{children:[r.jsx(wt,{type:"button",onClick:()=>void A(d.id),children:"Save"}),r.jsx(jt,{type:"button",onClick:x,children:"Cancel"})]})]}):r.jsxs(r.Fragment,{children:[r.jsx(bt,{title:d.label,children:d.label}),r.jsxs(xt,{children:[K(d.startMs)," – ",K(d.endMs)]}),r.jsxs(yt,{children:["(",K(d.endMs-d.startMs),")"]}),r.jsxs(me,{children:[r.jsx(St,{type:"button",onClick:()=>u(d),children:"edit"}),r.jsx(kt,{type:"button",onClick:()=>void R(d.id),"aria-label":`Remove chapter ${d.label}`,children:"×"})]})]})},d.id)})}),F&&r.jsx(fe,{children:F}),r.jsxs(Ct,{children:[r.jsx(H,{type:"text",placeholder:"Chapter name",value:s,onChange:d=>l(d.target.value),"aria-label":"New chapter label"}),r.jsx(H,{type:"text",placeholder:"0:00",value:p,onChange:d=>g(d.target.value),"aria-label":"New chapter start (mm:ss)"}),r.jsx(H,{type:"text",placeholder:K(n),value:f,onChange:d=>S(d.target.value),"aria-label":"New chapter end (mm:ss)"}),r.jsx(zt,{type:"button",onClick:()=>void P(),children:"+ add"})]}),N&&r.jsx(fe,{children:N})]})}const ht=i.div`
  padding: var(--inset-chapters-band);
  background: var(--color-surface-app);
  border-bottom: 1px solid var(--color-border-subtle);
`,gt=i.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: var(--gap-heading-hint);
`,mt=i.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  margin-bottom: var(--gap-related-comfortable);
`,ft=i.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  margin-bottom: var(--gap-related-comfortable);
`,vt=i(ot).attrs({cols:"minmax(120px, 1fr) auto auto auto",gap:"related-comfortable"})`
  font-size: var(--font-size-compact);
`,bt=i.span`
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,xt=i.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-muted);
  white-space: nowrap;
`,yt=i.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-faint);
  font-size: var(--font-size-compact);
  white-space: nowrap;
`,me=i.span`
  display: inline-flex;
  gap: var(--gap-related);
  align-items: center;
  justify-self: end;
`,St=i.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,wt=i.button`
  background: var(--color-go-status);
  border: 1px solid var(--color-go-status);
  color: var(--color-go-on-status);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,jt=i.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,kt=i.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-base);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,Ct=i.div`
  display: grid;
  grid-template-columns: minmax(120px, 1fr) 80px 80px auto;
  gap: var(--gap-related);
  align-items: center;
  margin-top: var(--gap-actions);
`,zt=i.button`
  background: none;
  border: 1px dashed var(--color-text-faint);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  white-space: nowrap;
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,fe=i.div`
  margin-top: var(--gap-sub-readout);
  font-size: var(--font-size-compact);
  color: var(--color-tag-red-fg);
`,Mt=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function Ft(e){const t=e.split(".").flatMap(l=>l.split(/(?=[A-Z])/)).map(l=>l.toLowerCase()).filter(l=>l.length>0).map(l=>Mt[l]??l);if(t.length===0)return e;const[o,...n]=t;return[o===o.toUpperCase()?o:o[0].toUpperCase()+o.slice(1),...n].join(" ")}function Tt(e,t,o){return o.has(e)?!0:Ke(`${e}.${t}`)?.rawTopic===e}function Et(e,t){return{key:`${e}.${t.path}`,label:Ft(t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function Lt(e,t){const o=new Set(t),n=[...new Set([...Ie(),...e,...t])].filter(g=>!Oe(g)).sort(),s=[],l=[],p=[];for(const g of n){if(He(g)){p.push(g);continue}const f=dt(g).filter(S=>Tt(g,S.path,o));if(f.length===0){l.push(g);continue}for(const S of f)s.push(Et(g,S))}return{keys:s,undescribed:l,collections:p}}function Q(){return[...Ze.map(e=>e.topic),...Pe().map(e=>e.topic)]}let te;function de(e,t){const o=`${e.join(",")}|${t.join(",")}`;if(te?.key===o)return te.built;const n=Lt(e,t);return te={key:o,built:n},n}function De(e=G(),t=Q()){return de(e,t).keys}function At(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!Rt.has(e.unit)}const Rt=new Set(["bool","enum","flag","id","raw","text"]);function Nt(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function no(e,t){const o=e?.enumEncoding;return o?.by!=="ordinal"||typeof t!="number"?t:o.names[t]??t}function ao(e=G(),t=Q()){return de(e,t).undescribed}function so(e=G(),t=Q()){return de(e,t).collections}function ve(){return Q().join(",")}function Ue(){const e=c.useSyncExternalStore(_e,G,G),t=c.useSyncExternalStore(qe,ve,ve);return c.useMemo(()=>De(e,t.split(",")),[e,t])}function $t(){const e=Ue();return c.useMemo(()=>e.filter(At),[e])}function io(){const e=Ue();return c.useMemo(()=>e.filter(Nt),[e])}const be=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function xe(){return le("missionHistory")}function Dt({missionId:e,firstFrameUt:t,lastFrameUt:o}){const n=$t(),[s,l]=c.useState(new Set),[p,g]=c.useState([]),[f,S]=c.useState(!1),[N,M]=c.useState(null);c.useEffect(()=>()=>{xe()?.evictFullHistoryStore(e)},[e]);const C=c.useRef(null),[E,j]=c.useState(600);c.useEffect(()=>{const v=C.current;if(!v||typeof ResizeObserver>"u")return;const F=new ResizeObserver(T=>{for(const u of T){const x=u.contentRect.width;x>0&&j(Math.floor(x))}});return F.observe(v),()=>F.disconnect()},[]);const z=c.useMemo(()=>n.map(v=>({key:v.key,label:v.label??v.key,unit:v.unit,group:Ut(v.key)})),[n]);c.useEffect(()=>{const v=xe();if(!v||s.size===0){g([]),M(null);return}let F=!1;S(!0),M(null);const T=[...s];return Promise.all(T.map(u=>v.queryRange(u,t,o,e))).then(u=>{if(F)return;const x=new Map(n.map(A=>[A.key,A])),P=T.map((A,R)=>{const d=u[R],w=[],b=[];for(let I=0;I<d.t.length;I++){const a=d.v[I];typeof a=="number"&&Number.isFinite(a)&&(w.push((d.t[I]-t)*1e3),b.push(a))}const U=x.get(A);return{id:A,label:U?.label??A,axis:"primary",color:be[R%be.length],type:"line",data:{x:w,y:b}}});g(P)}).catch(u=>{F||M(u instanceof Error?u.message:String(u))}).finally(()=>{F||S(!1)}),()=>{F=!0}},[s,e,t,o,n]);const L=Math.max(0,(o-t)*1e3),D=L>0?[0,L]:[0,6e4],y=p.some(v=>v.data.x.length>0);return r.jsxs(Bt,{children:[r.jsxs(Pt,{children:[r.jsx(It,{children:"Series"}),r.jsx(it,{keys:z,value:s,onChange:l,placeholder:"Add a data key...",emptyHint:z.length===0?"No numeric keys in the current schema":"No matches"})]}),N&&r.jsxs(Kt,{role:"alert",children:["Failed to load samples: ",N]}),s.size===0?r.jsx(ye,{children:"Pick one or more numeric telemetry keys above to plot them."}):r.jsxs(Ot,{ref:C,children:[f&&r.jsx(Ht,{children:"Loading..."}),!f&&!y&&r.jsx(ye,{children:"No recorded samples for the selected keys."}),y&&r.jsx(lt,{series:p,xDomain:D,width:E,height:260})]})]})}function Ut(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const Bt=i.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border-top: 1px solid var(--color-surface-raised);
`,Pt=i.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,It=i.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Ot=i.div`
  position: relative;
  min-height: 260px;
`,ye=i.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  padding: var(--inset-chart-empty);
  text-align: center;
`,Ht=i.div`
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
`,Kt=i.div`
  font-size: var(--font-size-compact);
  color: var(--color-nogo-text);
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  padding: var(--inset-surface);
  border-radius: var(--radius-regular);
`;function _t(e){return new Date(e).toLocaleString()}function qt(e,t){return se(ae("irl:s",(t-e)/1e3))}function $(){return le("missionHistory")}function Se(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),o=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${o}.fixture.json`}function we(e,t){const o=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(o),s=document.createElement("a");s.href=n,s.download=t,document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(n)}function lo({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:o=!1}={}){const n=e==="main",[s,l]=c.useState([]),[p,g]=c.useState(null),[f,S]=c.useState(!1),[N,M]=c.useState(!1),[C,E]=c.useState(null),[j,z]=c.useState(()=>new Set),[L,D]=c.useState(()=>Ge()),y=c.useCallback(async()=>{const a=$();if(!a)return;let h;try{h=await a.listFlights()}catch(m){console.warn("FlightsManager: failed to load flights",m);return}l(h.sort((m,k)=>k.launchedAt-m.launchedAt)),z(m=>{const k=new Set;for(const O of h)m.has(O.id)&&k.add(O.id);return k.size===m.size?m:k})},[]);c.useEffect(()=>{y()},[y]),c.useEffect(()=>{const a=$();if(typeof a?.onFlightListChange=="function")return a.onFlightListChange(()=>{y()})},[y]);const v=async a=>{const h=$();h&&(await h.deleteFlight(a),g(null),await y())},F=async a=>{const h=$();if(!h)return;const m=await h.exportFlight(a.id);we(m,Se(a))},T=async a=>{const h=$();if(!h)return;const m=await h.exportFlight(a.id),k={id:a.id,vesselName:a.vesselName,launchedAt:a.launchedAt,firstFrameUt:a.firstFrameUt??0,lastFrameUt:a.lastFrameUt??0,frameCount:a.sampleCount};Ne().start(k,m)},u=async()=>{const a=$();a&&(await a.clearAllFlights(),S(!1),await y())},x=a=>{z(h=>{const m=new Set(h);return m.has(a)?m.delete(a):m.add(a),m})},P=()=>{z(a=>a.size===s.length?new Set:new Set(s.map(h=>h.id)))},A=async()=>{const a=$();if(!a)return;const h=Array.from(j);for(const m of h)await a.deleteFlight(m);M(!1),await y()},R=async a=>{const h=$();h&&(await h.setFlightStarred(a.id,!a.starred),await y())},d=async a=>{const h=$(),m=a?V:0;Ve(m),D(m),a&&h&&(await h.pruneFlightsKeepLatest({keepCount:m}),await y())},w=async()=>{const a=$();if(!a)return;const h=Array.from(j),m=new Map(s.map(k=>[k.id,k]));for(const k of h){const O=m.get(k);if(!O)continue;const Be=await a.exportFlight(k);we(Be,Se(O))}},b=s.length>0&&j.size===s.length,U=j.size>0&&j.size<s.length,I=(()=>{const a=[...s].sort((k,O)=>O.launchedAt-k.launchedAt);let h=0,m=0;for(const k of a)k.starred||(h+=1,h>V&&(m+=1));return m})();return r.jsxs(Vt,{children:[n&&r.jsx(Gt,{missionHistoryEnabled:t,recordAllTopics:o}),s.length===0?r.jsx(nt,{children:"No flight history recorded yet"}):r.jsxs(r.Fragment,{children:[r.jsxs(Xt,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(nr,{children:r.jsx(oe,{ref:a=>{a&&(a.indeterminate=U)},checked:b,onChange:P,"aria-label":b?"Clear selection":"Select all flights"})}),r.jsxs(ar,{children:[r.jsx(pe,{size:12,fill:"currentColor","aria-hidden":"true"}),r.jsx(je,{children:"Kept (exempt from auto-delete)"})]}),r.jsx(_,{children:"Vessel"}),r.jsx(_,{children:"Launched"}),r.jsx(_,{children:"Duration"}),r.jsx(_,{children:"Samples"}),r.jsx(_,{children:r.jsx(je,{children:"Actions"})})]})}),r.jsx("tbody",{children:s.map(a=>{const h=C===a.id,m=j.has(a.id);return r.jsxs(c.Fragment,{children:[r.jsxs(ze,{$current:!1,children:[r.jsx(B,{children:r.jsx(oe,{checked:m,onChange:()=>x(a.id),"aria-label":`Select flight ${a.vesselName||a.id}`})}),r.jsx(B,{children:r.jsx(sr,{type:"button",$on:!!a.starred,onClick:()=>void R(a),"aria-label":a.starred?`Unstar ${a.vesselName||"flight"}`:`Star ${a.vesselName||"flight"} (keep from auto-delete)`,"aria-pressed":!!a.starred,title:a.starred?"Kept from auto-delete":"Keep from auto-delete",children:r.jsx(pe,{size:"var(--icon-size-control)",fill:a.starred?"currentColor":"none"})})}),r.jsxs(B,{children:[a.vesselName||st,a.outcome?.kind==="recovered"&&r.jsx(Me,{$tone:"go",title:`Recovered ${a.outcome.recoveryLocation} · ${a.outcome.recoveryFactor} · +${se(ae("funds",a.outcome.fundsEarned),{decimals:0})} · +${se(ae("science",a.outcome.scienceEarned),{decimals:1})}`,children:"recovered"}),a.outcome?.kind==="crashed"&&r.jsx(Me,{$tone:"nogo",title:`Crashed at ${a.outcome.body} (${a.outcome.situation}) · ${a.outcome.partsLostCount} part(s) lost${a.outcome.kerbalsKilled.length>0?` · KIA: ${a.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),r.jsx(B,{children:_t(a.launchedAt)}),r.jsx(B,{children:qt(a.launchedAt,a.lastSampleAt)}),r.jsx(B,{children:a.sampleCount.toLocaleString()}),r.jsx(B,{children:r.jsxs(Wt,{children:[r.jsx(Yt,{type:"button",$open:h,onClick:()=>E(h?null:a.id),"aria-label":h?"Close graph":"Graph this flight","aria-expanded":h,children:h?"− graph":"＋ graph"}),n&&r.jsx(Zt,{type:"button",onClick:()=>void T(a),"aria-label":`Replay ${a.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),r.jsx(ke,{type:"button",onClick:()=>void F(a),"aria-label":`Download fixture for ${a.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),p===a.id?r.jsxs(re,{children:[r.jsx(Y,{onClick:()=>void v(a.id),children:"Delete"}),r.jsx(Z,{onClick:()=>g(null),children:"Cancel"})]}):r.jsx(er,{onClick:()=>g(a.id),children:"×"})]})})]}),h&&r.jsx(ze,{$current:!1,children:r.jsxs(B,{colSpan:7,style:{padding:0},children:[r.jsx(pt,{flight:a,onChange:()=>void y()}),r.jsx(Dt,{missionId:a.id,firstFrameUt:a.firstFrameUt??0,lastFrameUt:a.lastFrameUt??0})]})})]},a.id)})})]}),r.jsxs(tr,{children:[r.jsx(rr,{children:j.size>0&&(N?r.jsxs(re,{children:[r.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",j.size," selected flight",j.size===1?"":"s","?"]}),r.jsx(Y,{onClick:()=>void A(),children:"Delete"}),r.jsx(Z,{onClick:()=>M(!1),children:"Cancel"})]}):r.jsxs(r.Fragment,{children:[r.jsxs(or,{children:[j.size," selected"]}),r.jsx(ke,{type:"button",onClick:()=>void w(),title:"Download fixtures for the selected flights",children:"↓ download"}),r.jsx(Y,{onClick:()=>M(!0),children:"Delete"}),r.jsx(Z,{onClick:()=>z(new Set),children:"Clear"})]}))}),r.jsxs(ir,{children:[r.jsxs(lr,{title:`Keep the ${V} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[r.jsx(oe,{checked:L>0,onChange:a=>void d(a.target.checked)}),r.jsxs("span",{children:["Keep latest ",V,L===0&&I>0&&r.jsxs(cr,{children:[" ","(",I," would be deleted)"]})]})]}),f?r.jsxs(re,{children:[r.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),r.jsx(Y,{onClick:()=>void u(),children:"Clear all"}),r.jsx(Z,{onClick:()=>S(!1),children:"Cancel"})]}):r.jsx(dr,{onClick:()=>S(!0),children:"Clear all"})]})]})]})]})}function Gt({missionHistoryEnabled:e,recordAllTopics:t}){const o=c.useSyncExternalStore(ut,ge,ge);return r.jsx(Jt,{children:e?o.recording?r.jsxs(Qt,{children:["● recording ",o.vesselName??"flight"," (",o.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):r.jsx(Ce,{children:"Auto-record armed: capture starts the moment a flight begins."}):r.jsx(Ce,{children:"Mission history is off, enable it in Settings to auto-record."})})}const je=i.span`
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
`,Vt=i.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  /* Graph panels expand in-place, so let the whole thing scroll rather than
     clipping the chart. Horizontal scroll catches narrow viewports where the
     row-action button cluster won't fit even in the wide flight modal. */
  max-height: 80vh;
  overflow: auto;
`,Wt=i.div`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
`,Yt=i.button`
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
`,ke=i.button`
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
`,Zt=i.button`
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
`,Jt=i.div`
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
`,Qt=i.span`
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
`,Xt=i.table`
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
`,B=i.td`
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
`,er=i.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-lg);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,re=i.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
`,Y=i.button`
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
`,tr=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-section);
  padding: var(--inset-table-footer);
  border-top: 1px solid var(--color-border-subtle);
`,rr=i.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-height: 24px;
`,or=i.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,nr=i.th`
  width: 28px;
  padding: var(--inset-surface);
  border-bottom: 1px solid var(--color-border-subtle);
`,oe=i.input.attrs({type:"checkbox"})`
  cursor: pointer;
  margin: 0;
`,ar=i.th`
  width: 24px;
  /* The one cell that cannot take --inset-surface beside Th and ThCheckbox: a
     24px column carrying a star glyph needs more vertical than horizontal. At
     (6,8) the content box is 8px and the glyph clips. */
  padding: var(--inset-table-narrow-header);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
  text-align: center;
`,sr=i.button`
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
`,ir=i.div`
  display: flex;
  align-items: center;
  gap: var(--gap-section);
`,lr=i.label`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  cursor: pointer;
  user-select: none;
`,cr=i.span`
  color: var(--color-nogo-muted);
`,dr=i.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-dim);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,ur=new Ye({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class co{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new We;historyCache=new Map;async connect(){}disconnect(){}schema(){return De()}subscribe(t,o){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,o,n,s){if(!s)return{t:[],v:[]};const l=Je(t);if(!l)return{t:[],v:[]};const p=await this.getFullHistoryStore(s);if(!p)return{t:[],v:[]};const g=p.isDerivedTopic(l)?p.sampleDerivedRange(l,o,n):p.sampleRange(l,o,n);return g?{t:g.map(f=>f.validAt),v:g.map(f=>f.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(q)}async getFlight(t){const o=await this.missionStore.getMissionMeta(t);return o?q(o):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire()}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,o){const n=await this.missionStore.getMissionMeta(t);!n||!!n.starred===o||(await this.missionStore.updateMissionMeta(t,{starred:o}),this.flightListSubscribers.fire())}async addChapter(t,o){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const l={id:o.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:o.label,startMs:o.startMs,endMs:o.endMs},p=[...n.chapters??[],l];return await this.missionStore.updateMissionMeta(t,{chapters:p}),this.flightListSubscribers.fire(),q({...n,chapters:p})}async updateChapter(t,o,n){const s=await this.missionStore.getMissionMeta(t);if(!s)return null;const l=(s.chapters??[]).map(p=>p.id===o?{...p,...n}:p);return await this.missionStore.updateMissionMeta(t,{chapters:l}),this.flightListSubscribers.fire(),q({...s,chapters:l})}async removeChapter(t,o){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const s=(n.chapters??[]).filter(l=>l.id!==o);return await this.missionStore.updateMissionMeta(t,{chapters:s}),this.flightListSubscribers.fire(),q({...n,chapters:s})}async pruneFlightsKeepLatest(t){const o=await this.missionStore.pruneMissionsKeepLatest(t);for(const n of o)this.historyCache.delete(n);return o.length>0&&this.flightListSubscribers.fire(),o}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const o=this.historyCache.get(t);if(o)return o;const n=(async()=>{const s=await this.missionStore.getMissionFixture(t);if(!s)throw new Error(`mission fixture not found: ${t}`);return ur.record(),ct(s.fixture)})();this.historyCache.set(t,n);try{return await n}catch{this.historyCache.delete(t);return}}}function q(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt}}const ne={t:[],v:[]};function pr(e){switch(e){case ue.LastBeforeBlackout:return"last-before-blackout";case ue.Recorded:return"recorded";default:return null}}function hr(e){const t=[];let o=null;for(let n=0;n<e.length;n++){const s=pr(e[n].meta.staleness);if(s===null){o=null;continue}if(o!==null&&o.status===s){o.to=n;continue}o={from:n,to:n,status:s},t.push(o)}return t}const Fe=new WeakMap;function gr(e){const t=Fe.get(e);if(t)return t;const o={t:e.t,v:e.v.map(n=>{const s=ie(n);return typeof s=="number"?s:Number.NaN}),basis:e.basis};return Fe.set(e,o),o}function mr(e,t){return e.length===t.length&&e.every((o,n)=>o.to===t[n].to&&o.v===t[n].v)}function fr(e,t){return e.length===t.length&&e.every((o,n)=>o.from===t[n].from&&o.to===t[n].to&&o.status===t[n].status)}function Te(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((o,n)=>Object.is(o,t[n]))}function vr(e,t){return e.length===t.length&&e.every((o,n)=>o.from===t[n].from&&o.to===t[n].to&&o.basis===t[n].basis&&o.bandKind===t[n].bandKind&&Te(o.bandLo,t[n].bandLo)&&Te(o.bandHi,t[n].bandHi))}function ie(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function uo(e,t){const o=c.useRef(ne),n=Qe(),s=Xe(),l=e,p=c.useCallback(f=>{if(!n||!s)return()=>{};const S=et(n,s,l),N=s.subscribeFrame(f);return()=>{N(),S()}},[n,s,l]),g=c.useCallback(()=>{if(!s)return ne;const f=s.currentFrame().viewUt,S=f-t,N=s.isDerivedTopic(l)?s.sampleDerivedRange(l,S,f):s.sampleRange(l,S,f),M=s.sampleReckonedTail(l,S,f),C=N??[];if(C.length===0&&M.length===0)return ne;const E=C.map(u=>u.validAt),j=C.map(u=>ie(u.payload)),z=[],L=[];for(let u=0;u<C.length;u++){if(u===0)continue;if(C[u].meta.gapSinceUt!=null){z.push(u);continue}if(Object.is(j[u],j[u-1]))continue;const x=s.gapModel(l,C[u-1],C[u]);if(x?.carried===!1){z.push(u);continue}x?.carried&&L.push({to:u,...gr(x)})}const D=hr(C),y=[];for(const u of M){const x=E.length;E.push(u.atUt),j.push(ie(u.value));const{bandLo:P,bandHi:A}=u,R=P?.toWire(),d=A?.toWire(),w=R!==void 0&&d!==void 0?u.bandKind:void 0,b=y[y.length-1],U=b!==void 0&&b.basis===u.basis&&b.to===x-1&&b.bandKind===w;if(b!==void 0&&U){b.to=x,R!==void 0&&d!==void 0&&w!==void 0&&(b.bandLo?.push(R),b.bandHi?.push(d));continue}if(R!==void 0&&d!==void 0&&w!==void 0){y.push({from:x,to:x,basis:u.basis,bandLo:[R],bandHi:[d],bandKind:w});continue}y.push({from:x,to:x,basis:u.basis})}const v=o.current,F=v.breaks??[];return v.t.length===E.length&&v.t.every((u,x)=>u===E[x])&&v.v.every((u,x)=>Object.is(u,j[x]))&&F.length===z.length&&F.every((u,x)=>u===z[x])&&mr(v.bridges??[],L)&&fr(v.spans??[],D)&&vr(v.reckoned??[],y)&&v.windowEndAt===(y.length>0?f:void 0)?v:(o.current={t:E,v:j,basis:"ut-seconds",breaks:z,bridges:L,spans:D,reckoned:y,windowEndAt:y.length>0?f:void 0},o.current)},[s,l,t]);return c.useSyncExternalStore(p,g)}const br=[];function xr(e){const t=[X(e.dvRadial,0),X(e.dvNormal,0),X(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function po(){const e=tt("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return c.useMemo(()=>!Array.isArray(t)||t.length===0?br:t.map(xr),[t])}function yr(e){const t=e.parts.map(Sr),o=e.parts.find(n=>n.parentId==null);return{topologySeq:e.parts.length,rootFlightId:o?Number(o.id):0,parts:t}}function Sr(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage,crewCapacity:0,maxTemp:e.maxTemp.magnitude,crashTolerance:0,dryMass:e.dryMass.magnitude,orgPos:[e.position.x.magnitude,e.position.y.magnitude,e.position.z.magnitude],up:e.up?[e.up.x.magnitude,e.up.y.magnitude,e.up.z.magnitude]:void 0,bounds:{size:{x:e.bounds.size.x.magnitude,y:e.bounds.size.y.magnitude,z:e.bounds.size.z.magnitude},center:e.bounds.center?{x:e.bounds.center.x.magnitude,y:e.bounds.center.y.magnitude,z:e.bounds.center.z.magnitude}:void 0},modules:e.modules}}function wr(e){return e.currentTemp==null?null:{temperature:he(e.currentTemp.magnitude),maxTemperature:he(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp.magnitude}}function jr(e){const t=new Map;if(!e)return t;for(const o of e.parts)t.set(Number(o.id),wr(o));return t}function kr(e){const t={};for(const[o,n]of Object.entries(e.resources))t[o]={amount:n.amount.magnitude,maxAmount:n.maxAmount.magnitude,...n.flow!=null?{flow:n.flow.magnitude}:{},...n.nominalFlow!=null?{nominalFlow:n.nominalFlow.magnitude}:{}};return t}function Cr(e){const t=new Map;if(!e)return t;for(const o of e.parts)t.set(Number(o.id),kr(o));return t}function zr(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function Mr(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map(zr)}}function Fr(e){const t=new Map;if(!e)return t;for(const o of e.parts)t.set(Number(o.id),Mr(o));return t}function ho(e){const t=Re("vessel.parts"),o=t.state==="observed"||t.state==="held"?t.value:void 0,n=c.useMemo(()=>jr(o),[o]),s=c.useMemo(()=>Cr(o),[o]),l=c.useMemo(()=>Fr(o),[o]),p=[...e].sort((g,f)=>g-f).join(",");return c.useMemo(()=>{const g=p.length===0?[]:p.split(",").map(Number),f=new Map;for(const S of g)f.set(S,{thermal:n.get(S)??null,resources:s.get(S)??{},partState:l.get(S)});return f},[p,n,s,l])}function go(){const e=Re("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return c.useMemo(()=>t?yr(t):void 0,[t])}function mo(){const e=Ne(),t=c.useSyncExternalStore(g=>e.subscribe(g),()=>e.getSnapshot()),o=rt();if(!t.active||!t.meta)return null;const n=t.meta,s=o?.magnitude??n.firstFrameUt,l=Math.max(0,n.lastFrameUt-n.firstFrameUt),p=Math.max(0,s-n.firstFrameUt);return r.jsxs(Tr,{role:"region","aria-label":"Replay controls",children:[r.jsxs(Le,{children:[r.jsx(Ar,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),r.jsxs(Er,{children:["REPLAY: ",r.jsx(Lr,{children:n.vesselName||"Unnamed vessel"})]})]}),r.jsxs(Rr,{children:[r.jsx(Ae,{children:Ee(p)}),r.jsx(Nr,{type:"range",min:n.firstFrameUt,max:n.lastFrameUt,step:.1,value:s,onChange:g=>e.seekTo(Number(g.target.value)),"aria-label":"Seek to position"}),r.jsx(Ae,{children:Ee(l)})]}),r.jsxs(Le,{children:[r.jsxs($r,{value:String(t.rate),onChange:g=>e.setRate(Number(g.target.value)),"aria-label":"Playback rate",children:[r.jsx("option",{value:"0.5",children:"0.5×"}),r.jsx("option",{value:"1",children:"1×"}),r.jsx("option",{value:"2",children:"2×"}),r.jsx("option",{value:"5",children:"5×"}),r.jsx("option",{value:"10",children:"10×"}),r.jsx("option",{value:"50",children:"50×"})]}),r.jsx(Dr,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function Ee(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),o=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60;return o>0?`${o}:${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(s).padStart(2,"0")}`}const Tr=i.div`
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
`,Le=i(at).attrs({justify:"start"})`
  flex-shrink: 0;
`,Er=i.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
`,Lr=i.span`
  color: var(--color-tag-purple-fg);
  font-weight: 700;
  margin-left: var(--gap-trailing-figure);
`,Ar=i.button`
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
`,Rr=i.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,Nr=i.input`
  flex: 1;
  min-width: 0;
  accent-color: var(--color-tag-purple-fg);
`,Ae=i.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  white-space: nowrap;
`,$r=i.select`
  background: var(--color-surface-app);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,Dr=i.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`;export{lo as F,co as M,mo as R,so as a,Cr as b,Q as c,De as d,ao as e,Nt as f,ge as g,Ft as h,At as i,ut as j,uo as k,$t as l,ho as m,io as n,Ue as o,go as p,oo as r,ro as s,po as u,no as w};
