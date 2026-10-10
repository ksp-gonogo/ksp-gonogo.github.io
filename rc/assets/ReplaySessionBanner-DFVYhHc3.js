import{j as o}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./ext-react-RRA14VTW.js";import{cb as q,N as Ke,c8 as _e,cf as Ge,ce as qe,cQ as Ve,cV as We,ad as Ye,aX as V,aQ as Qe,bG as ue,aT as te}from"./view-clock-formula-V4D43Fqq.js";import{o as Je,D as W,s as Ze,L as Xe}from"./ksp-enum-names-mMQ85-RD.js";import{a as le}from"./registry-B1QJ7G87.js";import"./screen-UZmJz89R.js";import{j as et,aC as tt,b6 as rt,b8 as ot,aR as nt,b3 as at,bc as st}from"./lagrange-BKHNrtNu.js";import{z as Ne}from"./use-transmissions-BVXmpKl3.js";import{g as $e}from"./replay-session-controller-DCghRaAh.js";import"./websocket-transport-D91LLsu1.js";import{v as H,ab as it,E as lt,t as pe,a9 as ct}from"./vesselMark-BNXCAyQe.js";import{N as dt,w as ie}from"./streamStatusWord-oQfueYZn.js";import"./registry-C5SOXRW5.js";import"./index-CnzDwjkh.js";import{D as ut,L as pt}from"./VersionMismatchBanner-Dg4msiTI.js";import i from"./ext-styled-components-Br73TgY3.js";import{b as ht}from"./full-history-replay-CXJpxUUE.js";import{e as gt,s as ft}from"./topic-fields-D61bpA45.js";import{k as he}from"./orbital-Bp_45BA-.js";const De={recording:!1,vesselName:null,frameCount:0};let ce=De;const Z=new Set;function ge(){return ce}function yo(e){ce=e;for(const t of Z)t()}function mt(e){return Z.add(e),()=>{Z.delete(e)}}function So(){ce=De,Z.clear()}function re(){return le("missionHistory")}function K(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),r=Math.floor(t/3600),n=Math.floor(t%3600/60),a=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function Y(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const c=Number(t);return Number.isFinite(c)&&c>=0?c*1e3:null}const r=t.split(":").map(c=>c.trim());if(r.some(c=>c===""||!/^\d+(\.\d+)?$/.test(c)))return null;const n=r.map(Number),l=n.length===2?n[0]*60+n[1]:n.length===3?n[0]*3600+n[1]*60+n[2]:null;return l===null?null:l*1e3}function vt({flight:e,onChange:t}){const r=e.chapters??[],n=Math.max(0,e.lastSampleAt-e.launchedAt),[a,l]=d.useState(""),[c,u]=d.useState(""),[g,m]=d.useState(""),[y,w]=d.useState(null),[j,E]=d.useState(null),[v,A]=d.useState(""),[N,$]=d.useState(""),[F,z]=d.useState(""),[M,C]=d.useState(null);function L(p){E(p.id),A(p.label),$(K(p.startMs)),z(K(p.endMs)),C(null)}function U(){E(null),C(null)}async function h(){const p=re();if(!p)return;const k=Y(c),S=Y(g);if(a.trim()===""){w("Label required");return}if(k===null||S===null){w("Start and end must be mm:ss");return}if(S<=k){w("End must be after start");return}w(null),await p.addChapter(e.id,{label:a.trim(),startMs:k,endMs:S}),l(""),u(""),m(""),t()}async function x(p){const k=re();if(!k)return;const S=Y(N),D=Y(F);if(v.trim()===""){C("Label required");return}if(S===null||D===null){C("Start and end must be mm:ss");return}if(D<=S){C("End must be after start");return}C(null),await k.updateChapter(e.id,p,{label:v.trim(),startMs:S,endMs:D}),E(null),t()}async function B(p){const k=re();k&&(await k.removeChapter(e.id,p),j===p&&U(),t())}return o.jsxs(bt,{children:[o.jsx(xt,{children:"Chapters"}),r.length===0?o.jsx(yt,{children:"No chapters yet. Add markers to slice the flight."}):o.jsx(St,{children:r.slice().sort((p,k)=>p.startMs-k.startMs).map(p=>{const k=j===p.id;return o.jsx(wt,{children:k?o.jsxs(o.Fragment,{children:[o.jsx(H,{type:"text",value:v,onChange:S=>A(S.target.value),"aria-label":"Chapter label"}),o.jsx(H,{type:"text",value:N,onChange:S=>$(S.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),o.jsx(H,{type:"text",value:F,onChange:S=>z(S.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),o.jsxs(fe,{children:[o.jsx(Mt,{type:"button",onClick:()=>void x(p.id),children:"Save"}),o.jsx(Ft,{type:"button",onClick:U,children:"Cancel"})]})]}):o.jsxs(o.Fragment,{children:[o.jsx(kt,{title:p.label,children:p.label}),o.jsxs(jt,{children:[K(p.startMs)," – ",K(p.endMs)]}),o.jsxs(Ct,{children:["(",K(p.endMs-p.startMs),")"]}),o.jsxs(fe,{children:[o.jsx(zt,{type:"button",onClick:()=>L(p),children:"edit"}),o.jsx(Tt,{type:"button",onClick:()=>void B(p.id),"aria-label":`Remove chapter ${p.label}`,children:"×"})]})]})},p.id)})}),M&&o.jsx(me,{children:M}),o.jsxs(Et,{children:[o.jsx(H,{type:"text",placeholder:"Chapter name",value:a,onChange:p=>l(p.target.value),"aria-label":"New chapter label"}),o.jsx(H,{type:"text",placeholder:"0:00",value:c,onChange:p=>u(p.target.value),"aria-label":"New chapter start (mm:ss)"}),o.jsx(H,{type:"text",placeholder:K(n),value:g,onChange:p=>m(p.target.value),"aria-label":"New chapter end (mm:ss)"}),o.jsx(At,{type:"button",onClick:()=>void h(),children:"+ add"})]}),y&&o.jsx(me,{children:y})]})}const bt=i.div`
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
`,Lt=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function Rt(e){const t=e.split(".").flatMap(l=>l.split(/(?=[A-Z])/)).map(l=>l.toLowerCase()).filter(l=>l.length>0).map(l=>Lt[l]??l);if(t.length===0)return e;const[r,...n]=t;return[r===r.toUpperCase()?r:r[0].toUpperCase()+r.slice(1),...n].join(" ")}function Nt(e,t,r){return r.has(e)?!0:Ve(`${e}.${t}`)?.rawTopic===e}function $t(e,t){return{key:`${e}.${t.path}`,label:Rt(t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function Dt(e,t){const r=new Set(t),n=[...new Set([..._e(),...e,...t])].filter(u=>!Ge(u)).sort(),a=[],l=[],c=[];for(const u of n){if(qe(u)){c.push(u);continue}const g=gt(u).filter(m=>Nt(u,m.path,r));if(g.length===0){l.push(u);continue}for(const m of g)a.push($t(u,m))}return{keys:a,undescribed:l,collections:c}}function ee(){return[...et.map(e=>e.topic),...Ke().map(e=>e.topic)]}let oe;function de(e,t){const r=`${e.join(",")}|${t.join(",")}`;if(oe?.key===r)return oe.built;const n=Dt(e,t);return oe={key:r,built:n},n}function Ue(e=q(),t=ee()){return de(e,t).keys}function Ut(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!Bt.has(e.unit)}const Bt=new Set(["bool","enum","flag","id","raw","text"]);function Ot(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function wo(e,t){const r=e?.enumEncoding;return r?.by!=="ordinal"||typeof t!="number"?t:r.names[t]??t}function ko(e=q(),t=ee()){return de(e,t).undescribed}function jo(e=q(),t=ee()){return de(e,t).collections}function ve(){return ee().join(",")}function Be(){const e=d.useSyncExternalStore(We,q,q),t=d.useSyncExternalStore(Ye,ve,ve);return d.useMemo(()=>Ue(e,t.split(",")),[e,t])}function It(){const e=Be();return d.useMemo(()=>e.filter(Ut),[e])}function Co(){const e=Be();return d.useMemo(()=>e.filter(Ot),[e])}const be=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function xe(){return le("missionHistory")}function Pt({missionId:e,firstFrameUt:t,lastFrameUt:r}){const n=It(),[a,l]=d.useState(new Set),[c,u]=d.useState([]),[g,m]=d.useState(!1),[y,w]=d.useState(null);d.useEffect(()=>()=>{xe()?.evictFullHistoryStore(e)},[e]);const j=d.useRef(null),[E,v]=d.useState(600);d.useEffect(()=>{const z=j.current;if(!z||typeof ResizeObserver>"u")return;const M=new ResizeObserver(C=>{for(const L of C){const U=L.contentRect.width;U>0&&v(Math.floor(U))}});return M.observe(z),()=>M.disconnect()},[]);const A=d.useMemo(()=>n.map(z=>({key:z.key,label:z.label??z.key,unit:z.unit,group:Ht(z.key)})),[n]);d.useEffect(()=>{const z=xe();if(!z||a.size===0){u([]),w(null);return}let M=!1;m(!0),w(null);const C=[...a];return Promise.all(C.map(L=>z.queryRange(L,t,r,e))).then(L=>{if(M)return;const U=new Map(n.map(x=>[x.key,x])),h=C.map((x,B)=>{const p=L[B],k=[],S=[];for(let R=0;R<p.t.length;R++){const s=p.v[R];typeof s=="number"&&Number.isFinite(s)&&(k.push((p.t[R]-t)*1e3),S.push(s))}const D=U.get(x);return{id:x,label:D?.label??x,axis:"primary",color:be[B%be.length],type:"line",data:{x:k,y:S}}});u(h)}).catch(L=>{M||w(L instanceof Error?L.message:String(L))}).finally(()=>{M||m(!1)}),()=>{M=!0}},[a,e,t,r,n]);const N=Math.max(0,(r-t)*1e3),$=N>0?[0,N]:[0,6e4],F=c.some(z=>z.data.x.length>0);return o.jsxs(Kt,{children:[o.jsxs(_t,{children:[o.jsx(Gt,{children:"Series"}),o.jsx(ut,{keys:A,value:a,onChange:l,placeholder:"Add a data key...",emptyHint:A.length===0?"No numeric keys in the current schema":"No matches"})]}),y&&o.jsxs(Wt,{role:"alert",children:["Failed to load samples: ",y]}),a.size===0?o.jsx(ye,{children:"Pick one or more numeric telemetry keys above to plot them."}):o.jsxs(qt,{ref:j,children:[g&&o.jsx(Vt,{children:"Loading..."}),!g&&!F&&o.jsx(ye,{children:"No recorded samples for the selected keys."}),F&&o.jsx(pt,{series:c,xDomain:$,width:E,height:260})]})]})}function Ht(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const Kt=i.div`
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
`,Gt=i.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,qt=i.div`
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
`;function Yt(e){return new Date(e).toLocaleString()}function Qt(e,t){return ie(V("irl:s",(t-e)/1e3))}function Jt(e){const t=[e.fundsEarned===null?null:`+${ie(V("funds",e.fundsEarned),{decimals:0})}`,e.scienceEarned===null?null:`+${ie(V("science",e.scienceEarned),{decimals:1})}`].filter(r=>r!==null);return[`Recovered ${e.recoveryLocation}`,e.recoveryFactor,t.length>0?t.join(" · "):"no funds or science awarded"].filter(r=>r!=="").join(" · ")}function O(){return le("missionHistory")}function Se(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),r=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${r}.fixture.json`}function we(e,t){const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(r),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(n)}function zo({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:r=!1}={}){const n=e==="main",[a,l]=d.useState([]),[c,u]=d.useState(null),[g,m]=d.useState(!1),[y,w]=d.useState(!1),[j,E]=d.useState(null),[v,A]=d.useState(()=>new Set),[N,$]=d.useState(()=>Je()),F=d.useCallback(async()=>{const s=O();if(!s)return;let f;try{f=await s.listFlights()}catch(b){console.warn("FlightsManager: failed to load flights",b);return}l(f.sort((b,T)=>T.launchedAt-b.launchedAt)),A(b=>{const T=new Set;for(const P of f)b.has(P.id)&&T.add(P.id);return T.size===b.size?b:T})},[]);d.useEffect(()=>{F()},[F]),d.useEffect(()=>{const s=O();if(typeof s?.onFlightListChange=="function")return s.onFlightListChange(()=>{F()})},[F]);const z=async s=>{const f=O();f&&(await f.deleteFlight(s),u(null),await F())},M=async s=>{const f=O();if(!f)return;const b=await f.exportFlight(s.id);we(b,Se(s))},C=async s=>{const f=O();if(!f)return;const b=await f.exportFlight(s.id),T={id:s.id,vesselName:s.vesselName,launchedAt:s.launchedAt,firstFrameUt:s.firstFrameUt??0,lastFrameUt:s.lastFrameUt??0,frameCount:s.sampleCount};$e().start(T,b)},L=async()=>{const s=O();s&&(await s.clearAllFlights(),m(!1),await F())},U=s=>{A(f=>{const b=new Set(f);return b.has(s)?b.delete(s):b.add(s),b})},h=()=>{A(s=>s.size===a.length?new Set:new Set(a.map(f=>f.id)))},x=async()=>{const s=O();if(!s)return;const f=Array.from(v);for(const b of f)await s.deleteFlight(b);w(!1),await F()},B=async s=>{const f=O();f&&(await f.setFlightStarred(s.id,!s.starred),await F())},p=async s=>{const f=O(),b=s?W:0;Ze(b),$(b),s&&f&&(await f.pruneFlightsKeepLatest({keepCount:b}),await F())},k=async()=>{const s=O();if(!s)return;const f=Array.from(v),b=new Map(a.map(T=>[T.id,T]));for(const T of f){const P=b.get(T);if(!P)continue;const He=await s.exportFlight(T);we(He,Se(P))}},S=a.length>0&&v.size===a.length,D=v.size>0&&v.size<a.length,R=(()=>{const s=[...a].sort((T,P)=>P.launchedAt-T.launchedAt);let f=0,b=0;for(const T of s)T.starred||(f+=1,f>W&&(b+=1));return b})();return o.jsxs(Xt,{children:[n&&o.jsx(Zt,{missionHistoryEnabled:t,recordAllTopics:r}),a.length===0?o.jsx(lt,{children:"No flight history recorded yet"}):o.jsxs(o.Fragment,{children:[o.jsxs(ar,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx(dr,{children:o.jsx(ae,{ref:s=>{s&&(s.indeterminate=D)},checked:S,onChange:h,"aria-label":S?"Clear selection":"Select all flights"})}),o.jsxs(ur,{children:[o.jsx(pe,{size:12,fill:"currentColor","aria-hidden":"true"}),o.jsx(ke,{children:"Kept (exempt from auto-delete)"})]}),o.jsx(_,{children:"Vessel"}),o.jsx(_,{children:"Launched"}),o.jsx(_,{children:"Duration"}),o.jsx(_,{children:"Samples"}),o.jsx(_,{children:o.jsx(ke,{children:"Actions"})})]})}),o.jsx("tbody",{children:a.map(s=>{const f=j===s.id,b=v.has(s.id);return o.jsxs(d.Fragment,{children:[o.jsxs(ze,{$current:!1,children:[o.jsx(I,{children:o.jsx(ae,{checked:b,onChange:()=>U(s.id),"aria-label":`Select flight ${s.vesselName||s.id}`})}),o.jsx(I,{children:o.jsx(pr,{type:"button",$on:!!s.starred,onClick:()=>void B(s),"aria-label":s.starred?`Unstar ${s.vesselName||"flight"}`:`Star ${s.vesselName||"flight"} (keep from auto-delete)`,"aria-pressed":!!s.starred,title:s.starred?"Kept from auto-delete":"Keep from auto-delete",children:o.jsx(pe,{size:"var(--icon-size-control)",fill:s.starred?"currentColor":"none"})})}),o.jsxs(I,{children:[s.vesselName||dt,s.outcome?.kind==="recovered"&&o.jsx(Me,{$tone:"go",title:Jt(s.outcome),children:"recovered"}),s.outcome?.kind==="crashed"&&o.jsx(Me,{$tone:"nogo",title:`Crashed at ${s.outcome.body} (${s.outcome.situation}) · ${s.outcome.partsLostCount} part(s) lost${s.outcome.kerbalsKilled.length>0?` · KIA: ${s.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),o.jsx(I,{children:Yt(s.launchedAt)}),o.jsx(I,{children:Qt(s.launchedAt,s.lastSampleAt)}),o.jsx(I,{children:s.sampleCount.toLocaleString()}),o.jsx(I,{children:o.jsxs(er,{children:[o.jsx(tr,{type:"button",$open:f,onClick:()=>E(f?null:s.id),"aria-label":f?"Close graph":"Graph this flight","aria-expanded":f,children:f?"− graph":"＋ graph"}),n&&o.jsx(rr,{type:"button",onClick:()=>void C(s),"aria-label":`Replay ${s.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),o.jsx(je,{type:"button",onClick:()=>void M(s),"aria-label":`Download fixture for ${s.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),c===s.id?o.jsxs(ne,{children:[o.jsx(Q,{onClick:()=>void z(s.id),children:"Delete"}),o.jsx(J,{onClick:()=>u(null),children:"Cancel"})]}):o.jsx(sr,{onClick:()=>u(s.id),children:"×"})]})})]}),f&&o.jsx(ze,{$current:!1,children:o.jsxs(I,{colSpan:7,style:{padding:0},children:[o.jsx(vt,{flight:s,onChange:()=>void F()}),o.jsx(Pt,{missionId:s.id,firstFrameUt:s.firstFrameUt??0,lastFrameUt:s.lastFrameUt??0})]})})]},s.id)})})]}),o.jsxs(ir,{children:[o.jsx(lr,{children:v.size>0&&(y?o.jsxs(ne,{children:[o.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",v.size," selected flight",v.size===1?"":"s","?"]}),o.jsx(Q,{onClick:()=>void x(),children:"Delete"}),o.jsx(J,{onClick:()=>w(!1),children:"Cancel"})]}):o.jsxs(o.Fragment,{children:[o.jsxs(cr,{children:[v.size," selected"]}),o.jsx(je,{type:"button",onClick:()=>void k(),title:"Download fixtures for the selected flights",children:"↓ download"}),o.jsx(Q,{onClick:()=>w(!0),children:"Delete"}),o.jsx(J,{onClick:()=>A(new Set),children:"Clear"})]}))}),o.jsxs(hr,{children:[o.jsxs(gr,{title:`Keep the ${W} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[o.jsx(ae,{checked:N>0,onChange:s=>void p(s.target.checked)}),o.jsxs("span",{children:["Keep latest ",W,N===0&&R>0&&o.jsxs(fr,{children:[" ","(",R," would be deleted)"]})]})]}),g?o.jsxs(ne,{children:[o.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),o.jsx(Q,{onClick:()=>void L(),children:"Clear all"}),o.jsx(J,{onClick:()=>m(!1),children:"Cancel"})]}):o.jsx(mr,{onClick:()=>m(!0),children:"Clear all"})]})]})]})]})}function Zt({missionHistoryEnabled:e,recordAllTopics:t}){const r=d.useSyncExternalStore(mt,ge,ge);return o.jsx(or,{children:e?r.recording?o.jsxs(nr,{children:["● recording ",r.vesselName??"flight"," (",r.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):o.jsx(Ce,{children:"Auto-record armed: capture starts the moment a flight begins."}):o.jsx(Ce,{children:"Mission history is off, enable it in Settings to auto-record."})})}const ke=i.span`
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
`,Q=i.button`
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  color: var(--color-tag-red-fg);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { background: var(--color-nogo-muted); }
`,J=i.button`
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
`,vr=new Qe({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class Mo{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new Xe;historyCache=new Map;async connect(){}disconnect(){}schema(){return Ue()}subscribe(t,r){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,r,n,a){if(!a)return{t:[],v:[]};const l=tt(t);if(!l)return{t:[],v:[]};const c=await this.getFullHistoryStore(a);if(!c)return{t:[],v:[]};const u=c.isDerivedTopic(l)?c.sampleDerivedRange(l,r,n):c.sampleRange(l,r,n);return u?{t:u.map(g=>g.validAt),v:u.map(g=>g.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(G)}async getFlight(t){const r=await this.missionStore.getMissionMeta(t);return r?G(r):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire()}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,r){const n=await this.missionStore.getMissionMeta(t);!n||!!n.starred===r||(await this.missionStore.updateMissionMeta(t,{starred:r}),this.flightListSubscribers.fire())}async addChapter(t,r){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const l={id:r.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:r.label,startMs:r.startMs,endMs:r.endMs},c=[...n.chapters??[],l];return await this.missionStore.updateMissionMeta(t,{chapters:c}),this.flightListSubscribers.fire(),G({...n,chapters:c})}async updateChapter(t,r,n){const a=await this.missionStore.getMissionMeta(t);if(!a)return null;const l=(a.chapters??[]).map(c=>c.id===r?{...c,...n}:c);return await this.missionStore.updateMissionMeta(t,{chapters:l}),this.flightListSubscribers.fire(),G({...a,chapters:l})}async removeChapter(t,r){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const a=(n.chapters??[]).filter(l=>l.id!==r);return await this.missionStore.updateMissionMeta(t,{chapters:a}),this.flightListSubscribers.fire(),G({...n,chapters:a})}async pruneFlightsKeepLatest(t){const r=await this.missionStore.pruneMissionsKeepLatest(t);for(const n of r)this.historyCache.delete(n);return r.length>0&&this.flightListSubscribers.fire(),r}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const r=this.historyCache.get(t);if(r)return r;const n=(async()=>{const a=await this.missionStore.getMissionFixture(t);if(!a)throw new Error(`mission fixture not found: ${t}`);return vr.record(),ht(a.fixture)})();this.historyCache.set(t,n);try{return await n}catch{this.historyCache.delete(t);return}}}function G(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt}}const Oe=new WeakMap;function br(e,t){Oe.set(e,t)}function xr(e){return Oe.get(e)}const se={t:[],v:[]};function yr(e){switch(e){case ue.LastBeforeBlackout:return"last-before-blackout";case ue.Recorded:return"recorded";default:return null}}function Sr(e){const t=[];let r=null;for(let n=0;n<e.length;n++){const a=yr(e[n].meta.staleness);if(a===null){r=null;continue}if(r!==null&&r.status===a){r.to=n;continue}r={from:n,to:n,status:a},t.push(r)}return t}const Fe=new WeakMap;function wr(e){const t=Fe.get(e);if(t)return t;const r={t:e.t,v:e.v.map(n=>{const a=X(n);return typeof a=="number"?a:Number.NaN}),basis:e.basis};return Fe.set(e,r),r}function kr(e,t){return e.length===t.length&&e.every((r,n)=>r.to===t[n].to&&r.v===t[n].v)}function jr(e,t){return e.length===t.length&&e.every((r,n)=>r.from===t[n].from&&r.to===t[n].to&&r.status===t[n].status)}function Te(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((r,n)=>Object.is(r,t[n]))}function Cr(e,t){return e.length===t.length&&e.every((r,n)=>r.from===t[n].from&&r.to===t[n].to&&r.basis===t[n].basis&&r.bandKind===t[n].bandKind&&Te(r.bandLo,t[n].bandLo)&&Te(r.bandHi,t[n].bandHi))}function Ie(e,t){return[e?.toWire(),t?.toWire()]}function X(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function zr(e,t){const r=d.useRef(se),n=rt(),a=ot(),l=e,c=d.useCallback(g=>{if(!n||!a)return()=>{};const m=nt(n,a,l),y=a.subscribeFrame(g);return()=>{y(),m()}},[n,a,l]),u=d.useCallback(()=>{if(!a)return se;const g=a.currentFrame().viewUt,m=g-t,y=a.isDerivedTopic(l)?a.sampleDerivedRange(l,m,g):a.sampleRange(l,m,g),w=a.sampleReckonedTail(l,m,g),j=y??[];if(j.length===0&&w.length===0)return se;const E=j.map(h=>h.validAt),v=j.map(h=>X(h.payload)),A=j.map(h=>h.payload),N=new Map,$=[],F=[];for(let h=0;h<j.length;h++){if(h===0)continue;if(j[h].meta.gapSinceUt!=null){$.push(h);continue}if(Object.is(v[h],v[h-1]))continue;const x=a.gapModel(l,j[h-1],j[h]);if(x?.carried===!1){$.push(h);continue}x?.carried&&F.push({to:h,...wr(x)})}const z=Sr(j),M=[];for(const h of w){const x=E.length;E.push(h.atUt),v.push(X(h.value)),A.push(h.value);const{bandLo:B,bandHi:p}=h,[k,S]=Ie(B,p),D=k!==void 0&&S!==void 0?h.bandKind:void 0;N.set(x,{basis:h.basis,band:B!==void 0&&p!==void 0&&D!==void 0?{lo:B,hi:p,kind:D}:void 0});const R=M[M.length-1],s=R!==void 0&&R.basis===h.basis&&R.to===x-1&&R.bandKind===D;if(R!==void 0&&s){R.to=x,k!==void 0&&S!==void 0&&D!==void 0&&(R.bandLo?.push(k),R.bandHi?.push(S));continue}if(k!==void 0&&S!==void 0&&D!==void 0){M.push({from:x,to:x,basis:h.basis,bandLo:[k],bandHi:[S],bandKind:D});continue}M.push({from:x,to:x,basis:h.basis})}const C=r.current,L=C.breaks??[];return C.t.length===E.length&&C.t.every((h,x)=>h===E[x])&&C.v.every((h,x)=>Object.is(h,v[x]))&&L.length===$.length&&L.every((h,x)=>h===$[x])&&kr(C.bridges??[],F)&&jr(C.spans??[],z)&&Cr(C.reckoned??[],M)&&C.windowEndAt===(M.length>0?g:void 0)?C:(r.current={t:E,v,basis:"ut-seconds",breaks:$,bridges:F,spans:z,reckoned:M,windowEndAt:M.length>0?g:void 0},br(r.current,{payloads:A,modelled:N}),r.current)},[a,l,t]);return d.useSyncExternalStore(c,u)}const Mr=[];function Fr(e){const t=[te(e.dvRadial,0),te(e.dvNormal,0),te(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function Fo(){const e=at("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return d.useMemo(()=>!Array.isArray(t)||t.length===0?Mr:t.map(Fr),[t])}function Tr(e){const t=e.parts.map(Er),r=e.parts.find(n=>n.parentId==null);return{topologySeq:e.parts.length,rootFlightId:r?Number(r.id):0,parts:t}}function Er(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage,crewCapacity:0,maxTemp:e.maxTemp.magnitude,crashTolerance:0,dryMass:e.dryMass.magnitude,orgPos:[e.position.x.magnitude,e.position.y.magnitude,e.position.z.magnitude],up:e.up?[e.up.x.magnitude,e.up.y.magnitude,e.up.z.magnitude]:void 0,bounds:{size:{x:e.bounds.size.x.magnitude,y:e.bounds.size.y.magnitude,z:e.bounds.size.z.magnitude},center:e.bounds.center?{x:e.bounds.center.x.magnitude,y:e.bounds.center.y.magnitude,z:e.bounds.center.z.magnitude}:void 0},modules:e.modules}}function Ar(e){return e.currentTemp==null?null:{temperature:he(e.currentTemp.magnitude),maxTemperature:he(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp.magnitude}}function Lr(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Ar(r));return t}function Rr(e){const t={};for(const[r,n]of Object.entries(e.resources))t[r]={amount:n.amount.magnitude,maxAmount:n.maxAmount.magnitude,...n.flow!=null?{flow:n.flow.magnitude}:{},...n.nominalFlow!=null?{nominalFlow:n.nominalFlow.magnitude}:{}};return t}function Nr(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Rr(r));return t}function $r(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function Dr(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map($r)}}function Ur(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Dr(r));return t}function To(e){const t=Ne("vessel.parts"),r=t.state==="observed"||t.state==="held"?t.value:void 0,n=d.useMemo(()=>Lr(r),[r]),a=d.useMemo(()=>Nr(r),[r]),l=d.useMemo(()=>Ur(r),[r]),c=[...e].sort((u,g)=>u-g).join(",");return d.useMemo(()=>{const u=c.length===0?[]:c.split(",").map(Number),g=new Map;for(const m of u)g.set(m,{thermal:n.get(m)??null,resources:a.get(m)??{},partState:l.get(m)});return g},[c,n,a,l])}const Ee=Object.freeze({status:"none"}),Br={t:[],readings:[]};function Pe(e){return e==="recorded"||e==="last-before-blackout"?e:void 0}function Or(e){return e!==null&&typeof e=="object"&&"magnitude"in e}function Ir(e,t){if(Or(e))return{value:e,...t};if(typeof e=="number")return{value:V(t.lo.unit,e),...t}}function Pr(e){const t=xr(e);if(t===void 0)return Br;const r=new Map;for(const l of e.spans??[]){const c=Pe(l.status);if(c!==void 0)for(let u=l.from;u<=l.to;u++)r.set(u,c)}let n;const a=e.t.map((l,c)=>{const u=V("ut",l),g=t.payloads[c],m=t.modelled.get(c);if(m!==void 0){const w={status:"available",modelled:g,atUt:u,beyondReceived:!0,basis:m.basis,band:m.band?Ir(g,m.band):void 0};return n===void 0?{state:"pending",reckoning:w}:{state:"held",value:n.payload,asOfUt:n.at,grade:"held",reckoning:w}}n={payload:g,at:u};const y=r.get(c);return y!==void 0?{state:"held",value:g,asOfUt:u,grade:y,reckoning:Ee}:{state:"observed",value:g,atUt:u,reckoning:Ee}});return{t:e.t,readings:a,basis:e.basis,breaks:e.breaks,bridges:e.bridges,windowEndAt:e.windowEndAt}}function Eo(e,t){const r=zr(ft(e),t);return d.useMemo(()=>Pr(r),[r])}function Hr(e,t,r,n){if(n===void 0)return null;if(t!==null&&t.status===n)return t.to=r,t;const a={from:r,to:r,status:n};return e.push(a),a}function Kr(e,t,r,n,a){if(n===void 0)return null;if(t!==null&&t.basis===n&&t.bandKind===a?.kind)return t.to=r,a!==void 0&&(t.bandLo?.push(a.lo),t.bandHi?.push(a.hi)),t;const l=a!==void 0?{from:r,to:r,basis:n,bandLo:[a.lo],bandHi:[a.hi],bandKind:a.kind}:{from:r,to:r,basis:n};return e.push(l),l}function _r(e){return Number(X(e))}function Gr(e){const[t,r]=Ie(e?.lo,e?.hi);if(!(e===void 0||t===void 0||r===void 0))return{lo:t,hi:r,kind:e.kind}}function Ao(e){const t=[],r=[],n={t:[],v:[],basis:e.basis,breaks:[],spans:t,reckoned:r,bridges:[],windowEndAt:e.windowEndAt},a=new Set(e.breaks??[]),l=new Map((e.bridges??[]).map(y=>[y.to,y])),c=new Map;let u=null,g=null,m=!1;for(let y=0;y<e.t.length;y++){a.has(y)&&(m=!0);const w=e.readings[y],j=w.reckoning.status==="available"?w.reckoning:void 0,E=_r(j?j.modelled:w.value);if(Number.isNaN(E))continue;const v=n.t.length,A=m&&v>0;A&&n.breaks.push(v),m=!1,c.set(y,v);const N=l.get(y);N!==void 0&&!A&&c.get(y-1)===v-1&&N.v.every(Number.isFinite)&&n.bridges.push({...N,to:v}),n.t.push(e.t[y]),n.v.push(E);const $=j===void 0&&w.state==="held"?Pe(w.grade):void 0;u=Hr(t,u,v,$),g=Kr(r,g,v,j?.basis,Gr(j?.band))}return n}function Lo(){const e=Ne("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return d.useMemo(()=>t?Tr(t):void 0,[t])}function Ro(){const e=$e(),t=d.useSyncExternalStore(u=>e.subscribe(u),()=>e.getSnapshot()),r=st();if(!t.active||!t.meta)return null;const n=t.meta,a=r?.magnitude??n.firstFrameUt,l=Math.max(0,n.lastFrameUt-n.firstFrameUt),c=Math.max(0,a-n.firstFrameUt);return o.jsxs(qr,{role:"region","aria-label":"Replay controls",children:[o.jsxs(Le,{children:[o.jsx(Yr,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),o.jsxs(Vr,{children:["REPLAY: ",o.jsx(Wr,{children:n.vesselName||"Unnamed vessel"})]})]}),o.jsxs(Qr,{children:[o.jsx(Re,{children:Ae(c)}),o.jsx(Jr,{type:"range",min:n.firstFrameUt,max:n.lastFrameUt,step:.1,value:a,onChange:u=>e.seekTo(Number(u.target.value)),"aria-label":"Seek to position"}),o.jsx(Re,{children:Ae(l)})]}),o.jsxs(Le,{children:[o.jsxs(Zr,{value:String(t.rate),onChange:u=>e.setRate(Number(u.target.value)),"aria-label":"Playback rate",children:[o.jsx("option",{value:"0.5",children:"0.5×"}),o.jsx("option",{value:"1",children:"1×"}),o.jsx("option",{value:"2",children:"2×"}),o.jsx("option",{value:"5",children:"5×"}),o.jsx("option",{value:"10",children:"10×"}),o.jsx("option",{value:"50",children:"50×"})]}),o.jsx(Xr,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function Ae(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),r=Math.floor(t/3600),n=Math.floor(t%3600/60),a=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`}const qr=i.div`
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
`,Vr=i.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
`,Wr=i.span`
  color: var(--color-tag-purple-fg);
  font-weight: 700;
  margin-left: var(--gap-trailing-figure);
`,Yr=i.button`
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
`,Qr=i.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,Jr=i.input`
  flex: 1;
  min-width: 0;
  accent-color: var(--color-tag-purple-fg);
`,Re=i.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Zr=i.select`
  background: var(--color-surface-app);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,Xr=i.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`;export{zo as F,Mo as M,Ro as R,Nr as a,Ie as b,jo as c,ee as d,Ue as e,ko as f,ge as g,Rt as h,Ut as i,Ot as j,X as k,_r as l,mt as m,zr as n,It as o,Ao as p,To as q,So as r,yo as s,Co as t,Fo as u,Eo as v,Be as w,Lo as x,wo as y};
