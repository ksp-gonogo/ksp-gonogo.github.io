import{j as s}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{b8 as fe,bY as ve,cv as Z,R as tt,cr as rt,cz as ot,cy as nt,dc as st,dh as at,ag as it,bw as Y,bg as lt,aZ as Q,a_ as ct,b5 as ie}from"./view-clock-formula-CMi2uYN-.js";import{r as f}from"./ext-react-C0MU9AHG.js";import{o as Ke,D as re,s as dt,L as ut}from"./ksp-enum-names-D0Qmqigb.js";import{A as pt}from"./screen-B1crio3D.js";import{ba as ht,bc as ft,aW as gt,i as mt,aH as vt,b7 as He,bg as bt}from"./lagrange-VERh5BAe.js";import{w as ge}from"./use-transmissions-D8P32z8j.js";import{g as _e}from"./replay-session-controller-J2STL2Bn.js";import"./websocket-transport-BwjKe0SK.js";import{y as G,av as xt,E as yt,w as be,ad as St}from"./ModalSaveBar-DLI7mfmD.js";import{G as wt,N as kt}from"./Notice-IfhuxpF2.js";import{N as jt,w as he}from"./contributionsRead-DXmW8T6H.js";import"./processorPerfBudget-Db2v-rP6.js";import{l as xe}from"./index-DqUIH49W.js";import{h as Ct,D as Mt}from"./VersionMismatchBanner-Dba5lYdV.js";import l from"./ext-styled-components-DAuodqsN.js";import{b as Ft}from"./full-history-replay-VjtxOcQ2.js";import{e as zt,s as Tt}from"./topic-fields-KjMSQZvL.js";import{k as ye}from"./orbital-BRQR4sA8.js";const Ve={recording:!1,vesselName:null,frameCount:0,saveFailure:null};let _=Ve;const X=new Set;function Se(){return _}function Io(e){_={...e,saveFailure:_.saveFailure};for(const t of X)t()}function Po(e){if(_.saveFailure!==e){_={..._,saveFailure:e};for(const t of X)t()}}function Et(e){return X.add(e),()=>{X.delete(e)}}function Ko(){_=Ve,X.clear()}function le(){return fe("missionHistory")}function q(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),r=Math.floor(t/3600),o=Math.floor(t%3600/60),n=t%60;return r>0?`${r}:${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function oe(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const c=Number(t);return Number.isFinite(c)&&c>=0?c*1e3:null}const r=t.split(":").map(c=>c.trim());if(r.some(c=>c===""||!/^\d+(\.\d+)?$/.test(c)))return null;const o=r.map(Number),a=o.length===2?o[0]*60+o[1]:o.length===3?o[0]*3600+o[1]*60+o[2]:null;return a===null?null:a*1e3}function At({flight:e,onChange:t}){const r=e.chapters??[],o=Math.max(0,e.lastSampleAt-e.launchedAt),[n,a]=f.useState(""),[c,p]=f.useState(""),[h,m]=f.useState(""),[y,w]=f.useState(null),[z,E]=f.useState(null),[b,F]=f.useState(""),[T,R]=f.useState(""),[L,$]=f.useState(""),[S,x]=f.useState(null);function A(d){E(d.id),F(d.label),R(q(d.startMs)),$(q(d.endMs)),x(null)}function k(){E(null),x(null)}async function K(){const d=le();if(!d)return;const j=oe(c),C=oe(h);if(n.trim()===""){w("Label required");return}if(j===null||C===null){w("Start and end must be mm:ss");return}if(C<=j){w("End must be after start");return}w(null),await d.addChapter(e.id,{label:n.trim(),startMs:j,endMs:C}),a(""),p(""),m(""),t()}async function V(d){const j=le();if(!j)return;const C=oe(T),D=oe(L);if(b.trim()===""){x("Label required");return}if(C===null||D===null){x("Start and end must be mm:ss");return}if(D<=C){x("End must be after start");return}x(null),await j.updateChapter(e.id,d,{label:b.trim(),startMs:C,endMs:D}),E(null),t()}async function g(d){const j=le();j&&(await j.removeChapter(e.id,d),z===d&&k(),t())}return s.jsxs(Nt,{children:[s.jsx(Rt,{children:"Chapters"}),r.length===0?s.jsx(Lt,{children:"No chapters yet. Add markers to slice the flight."}):s.jsx($t,{children:r.slice().sort((d,j)=>d.startMs-j.startMs).map(d=>{const j=z===d.id;return s.jsx(Ut,{children:j?s.jsxs(s.Fragment,{children:[s.jsx(G,{type:"text",value:b,onChange:C=>F(C.target.value),"aria-label":"Chapter label"}),s.jsx(G,{type:"text",value:T,onChange:C=>R(C.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),s.jsx(G,{type:"text",value:L,onChange:C=>$(C.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),s.jsxs(we,{children:[s.jsx(Pt,{type:"button",onClick:()=>void V(d.id),children:"Save"}),s.jsx(Kt,{type:"button",onClick:k,children:"Cancel"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Dt,{title:d.label,children:d.label}),s.jsxs(Bt,{children:[q(d.startMs)," – ",q(d.endMs)]}),s.jsxs(Ot,{children:["(",q(d.endMs-d.startMs),")"]}),s.jsxs(we,{children:[s.jsx(It,{type:"button",onClick:()=>A(d),children:"edit"}),s.jsx(Ht,{type:"button",onClick:()=>void g(d.id),"aria-label":`Remove chapter ${d.label}`,children:"×"})]})]})},d.id)})}),S&&s.jsx(ke,{children:S}),s.jsxs(_t,{children:[s.jsx(G,{type:"text",placeholder:"Chapter name",value:n,onChange:d=>a(d.target.value),"aria-label":"New chapter label"}),s.jsx(G,{type:"text",placeholder:"0:00",value:c,onChange:d=>p(d.target.value),"aria-label":"New chapter start (mm:ss)"}),s.jsx(G,{type:"text",placeholder:q(o),value:h,onChange:d=>m(d.target.value),"aria-label":"New chapter end (mm:ss)"}),s.jsx(Vt,{type:"button",onClick:()=>void K(),children:"+ add"})]}),y&&s.jsx(ke,{children:y})]})}const Nt=l.div`
  padding: var(--inset-chapters-band);
  background: var(--color-surface-app);
  border-bottom: 1px solid var(--color-border-subtle);
`,Rt=l.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: var(--gap-heading-hint);
`,Lt=l.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  margin-bottom: var(--gap-related-comfortable);
`,$t=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  margin-bottom: var(--gap-related-comfortable);
`,Ut=l(xt).attrs({cols:"minmax(120px, 1fr) auto auto auto",gap:"related-comfortable"})`
  font-size: var(--font-size-compact);
`,Dt=l.span`
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Bt=l.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Ot=l.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-faint);
  font-size: var(--font-size-compact);
  white-space: nowrap;
`,we=l.span`
  display: inline-flex;
  gap: var(--gap-related);
  align-items: center;
  justify-self: end;
`,It=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,Pt=l.button`
  background: var(--color-go-status);
  border: 1px solid var(--color-go-status);
  color: var(--color-go-on-status);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,Kt=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,Ht=l.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-base);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,_t=l.div`
  display: grid;
  grid-template-columns: minmax(120px, 1fr) 80px 80px auto;
  gap: var(--gap-related);
  align-items: center;
  margin-top: var(--gap-actions);
`,Vt=l.button`
  background: none;
  border: 1px dashed var(--color-text-faint);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  white-space: nowrap;
  &:hover { color: var(--color-text-primary); border-color: var(--color-text-dim); }
`,ke=l.div`
  margin-top: var(--gap-sub-readout);
  font-size: var(--font-size-compact);
  color: var(--color-tag-red-fg);
`,Ge=new WeakMap;function Gt(e,t){Ge.set(e,t)}function qt(e){return Ge.get(e)}const ce={t:[],v:[]};function Wt(e){switch(e){case ve.LastBeforeBlackout:return"last-before-blackout";case ve.Recorded:return"recorded";default:return null}}function Yt(e){const t=[];let r=null;for(let o=0;o<e.length;o++){const n=Wt(e[o].meta.staleness);if(n===null){r=null;continue}if(r!==null&&r.status===n){r.to=o;continue}r={from:o,to:o,status:n},t.push(r)}return t}const je=new WeakMap;function Jt(e){const t=je.get(e);if(t)return t;const r={t:e.t,v:e.v.map(o=>{const n=ee(o);return typeof n=="number"?n:Number.NaN}),basis:e.basis};return je.set(e,r),r}function Zt(e,t){return e.length===t.length&&e.every((r,o)=>r.to===t[o].to&&r.v===t[o].v)}function Qt(e,t){return e.length===t.length&&e.every((r,o)=>r.from===t[o].from&&r.to===t[o].to&&r.status===t[o].status)}function Ce(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((r,o)=>Object.is(r,t[o]))}function Xt(e,t){return e.length===t.length&&e.every((r,o)=>r.from===t[o].from&&r.to===t[o].to&&r.basis===t[o].basis&&r.bandKind===t[o].bandKind&&Ce(r.bandLo,t[o].bandLo)&&Ce(r.bandHi,t[o].bandHi))}function qe(e,t){return[e?.toWire(),t?.toWire()]}function er(e,t,r,o,n){const a=new Map((t.sampleRange(r,o,n)??[]).map(h=>[h.validAt,JSON.stringify(h.payload)])),c=[];let p;for(const h of e){const m=a.get(h.validAt)??JSON.stringify(h.payload);m!==p&&(p=m,c.push(h))}return c}function ee(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function tr(e,t){const r=f.useRef(ce),o=ht(),n=ft(),a=e,c=f.useCallback(h=>{if(!o||!n)return()=>{};const m=gt(o,n,a),y=n.subscribeFrame(h);return()=>{y(),m()}},[o,n,a]),p=f.useCallback(()=>{if(!n)return ce;const h=n.currentFrame().viewUt,m=h-t,y=n.isDerivedTopic(a)?n.sampleDerivedRange(a,m,h):n.sampleRange(a,m,h),w=n.sampleReckonedTail(a,m,h),z=n.tagsOf(a),E=z.kind==="event"?"none":z.kind==="discrete"?"step":"linear",b=z.kind==="event"?er(y??[],n,z.topic,m,h):y??[];if(b.length===0&&w.length===0)return ce;const F=b.map(g=>g.validAt),T=b.map(g=>ee(g.payload)),R=b.map(g=>g.payload),L=new Map,$=[],S=[];for(let g=0;g<b.length;g++){if(g===0)continue;if(E==="none")break;if(b[g].meta.gapSinceUt!=null){$.push(g);continue}if(Object.is(T[g],T[g-1]))continue;const d=n.gapModel(a,b[g-1],b[g]);if(d?.carried===!1){$.push(g);continue}d?.carried&&S.push({to:g,...Jt(d)})}const x=Yt(b),A=[];for(const g of w){const d=F.length;F.push(g.atUt),T.push(ee(g.value)),R.push(g.value);const{bandLo:j,bandHi:C}=g,[D,H]=qe(j,C),I=D!==void 0&&H!==void 0?g.bandKind:void 0;L.set(d,{basis:g.basis,band:j!==void 0&&C!==void 0&&I!==void 0?{lo:j,hi:C,kind:I}:void 0});const B=A[A.length-1],te=B!==void 0&&B.basis===g.basis&&B.to===d-1&&B.bandKind===I;if(B!==void 0&&te){B.to=d,D!==void 0&&H!==void 0&&I!==void 0&&(B.bandLo?.push(D),B.bandHi?.push(H));continue}if(D!==void 0&&H!==void 0&&I!==void 0){A.push({from:d,to:d,basis:g.basis,bandLo:[D],bandHi:[H],bandKind:I});continue}A.push({from:d,to:d,basis:g.basis})}const k=r.current,K=k.breaks??[];return k.t.length===F.length&&k.t.every((g,d)=>g===F[d])&&k.v.every((g,d)=>Object.is(g,T[d]))&&K.length===$.length&&K.every((g,d)=>g===$[d])&&Zt(k.bridges??[],S)&&Qt(k.spans??[],x)&&Xt(k.reckoned??[],A)&&k.windowEndAt===(A.length>0?h:void 0)&&(k.interpolation??"linear")===E?k:(r.current={t:F,v:T,basis:"ut-seconds",breaks:$,bridges:S,spans:x,reckoned:A,interpolation:E,windowEndAt:A.length>0?h:void 0},Gt(r.current,{payloads:R,modelled:L}),r.current)},[n,a,t]);return f.useSyncExternalStore(c,p)}const rr=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function or(e){const t=e.split(".").flatMap(a=>a.split(/(?=[A-Z])/)).map(a=>a.toLowerCase()).filter(a=>a.length>0).map(a=>rr[a]??a);if(t.length===0)return e;const[r,...o]=t;return[r===r.toUpperCase()?r:r[0].toUpperCase()+r.slice(1),...o].join(" ")}function nr(e,t,r){return r.has(e)?!0:st(`${e}.${t}`)?.rawTopic===e}function sr(e,t){return{key:`${e}.${t.path}`,label:or(t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function ar(e,t){const r=new Set(t),o=[...new Set([...rt(),...e,...t])].filter(p=>!ot(p)).sort(),n=[],a=[],c=[];for(const p of o){if(nt(p)){c.push(p);continue}const h=zt(p).filter(m=>nr(p,m.path,r));if(h.length===0){a.push(p);continue}for(const m of h)n.push(sr(p,m))}return{keys:n,undescribed:a,collections:c}}function ae(){return[...mt.map(e=>e.topic),...tt().map(e=>e.topic)]}let de;function me(e,t){const r=`${e.join(",")}|${t.join(",")}`;if(de?.key===r)return de.built;const o=ar(e,t);return de={key:r,built:o},o}function We(e=Z(),t=ae()){return me(e,t).keys}function ir(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!lr.has(e.unit)}const lr=new Set(["bool","enum","flag","id","raw","text"]);function cr(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function Ho(e,t){const r=e?.enumEncoding;return r?.by!=="ordinal"||typeof t!="number"?t:r.names[t]??t}function _o(e=Z(),t=ae()){return me(e,t).undescribed}function Vo(e=Z(),t=ae()){return me(e,t).collections}function Me(){return ae().join(",")}function Ye(){const e=f.useSyncExternalStore(at,Z,Z),t=f.useSyncExternalStore(it,Me,Me);return f.useMemo(()=>We(e,t.split(",")),[e,t])}function dr(){const e=Ye();return f.useMemo(()=>e.filter(ir),[e])}function Go(){const e=Ye();return f.useMemo(()=>e.filter(cr),[e])}const Fe=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function ze(){return fe("missionHistory")}function ur({missionId:e,fromUt:t,toUt:r}){const o=dr(),[n,a]=f.useState(new Set),[c,p]=f.useState([]),[h,m]=f.useState(!1),[y,w]=f.useState(null);f.useEffect(()=>()=>{ze()?.evictFullHistoryStore(e)},[e]);const z=f.useMemo(()=>o.map(S=>({key:S.key,label:S.label??S.key,unit:S.unit,group:hr(S.key)})),[o]);f.useEffect(()=>{const S=ze();if(!S||n.size===0){p([]),w(null);return}let x=!1;m(!0),w(null);const A=[...n];return Promise.all(A.map(k=>S.queryRange(k,t,r,e))).then(k=>{if(x)return;const K=new Map(o.map(g=>[g.key,g])),V=A.map((g,d)=>{const j=pr(k[d],t),C=K.get(g);return{id:g,label:C?.label??g,axis:"primary",color:Fe[d%Fe.length],type:"line",data:j}});p(V)}).catch(k=>{x||w(k instanceof Error?k.message:String(k))}).finally(()=>{x||m(!1)}),()=>{x=!0}},[n,e,t,r,o]);const E=Math.max(0,(r-t)*1e3),b=E>0?[0,E]:[0,6e4],F=c.some(S=>S.data.x.length>0),T=[...n].map(S=>o.find(x=>x.key===S)),R=[...new Set(T.map((S,x)=>S?.label??[...n][x]))],L=[...new Set(T.map(S=>S?.unit))],$=Ct(R.length>0&&R.length<=2?R.join(" / "):void 0,L.length===1?L[0]:void 0);return s.jsxs(fr,{children:[s.jsxs(gr,{children:[s.jsx(mr,{children:"Series"}),s.jsx(Mt,{keys:z,value:n,onChange:a,placeholder:"Add a data key...",emptyHint:z.length===0?"No numeric keys in the current schema":"No matches"})]}),y&&s.jsxs(xr,{role:"alert",children:["Failed to load samples: ",y]}),n.size===0?s.jsx(Te,{children:"Pick one or more numeric telemetry keys above to plot them."}):s.jsxs(vr,{children:[h&&s.jsx(br,{children:"Loading..."}),!h&&!F&&s.jsx(Te,{children:"No recorded samples for the selected keys."}),F&&s.jsx(wt,{chrome:"bare",series:c,xDomain:b,xAxisLabel:"Mission time",yAxisLabel:$,height:260})]})]})}function pr(e,t){const r=[],o=[];for(let n=0;n<e.t.length;n++){const a=ee(e.v[n]);typeof a!="number"||!Number.isFinite(a)||(r.push((e.t[n]-t)*1e3),o.push(a))}return{x:r,y:o}}function hr(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const fr=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border-top: 1px solid var(--color-surface-raised);
`,gr=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,mr=l.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,vr=l.div`
  position: relative;
  min-height: 260px;
`,Te=l.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  padding: var(--inset-chart-empty);
  text-align: center;
`,br=l.div`
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
`,xr=l.div`
  font-size: var(--font-size-compact);
  color: var(--color-nogo-text);
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  padding: var(--inset-surface);
  border-radius: var(--radius-regular);
`;function yr(e,t){const r=[],o=new Map;for(const n of e){const a=n.lastSampleAt-n.launchedAt,c=n.endReason===void 0&&n.outcome===void 0&&t.has(n.vesselName),p=c?o.get(n.vesselName):void 0;if(p){p.ids.push(n.id),p.launchedAt=Math.min(p.launchedAt,n.launchedAt),p.durationMs+=a,p.sampleCount+=n.sampleCount;continue}const h={flight:n,ids:[n.id],stillFlying:c,launchedAt:n.launchedAt,durationMs:a,sampleCount:n.sampleCount};r.push(h),c&&o.set(n.vesselName,h)}return r}function Sr(e){return new Date(e).toLocaleString()}function wr(e,t){return he(Q("s",(t-e)/1e3))}const kr={[Y.Recovered]:"Recovered",[Y.Crashed]:"Crashed",[Y.Reverted]:"Reverted",[Y.Destroyed]:"Destroyed",[Y.Terminated]:"Terminated"};function jr(e){return e===void 0?"Not known":kr[e]??"Not known"}function Cr(e){const t=[e.fundsEarned===null?null:`+${he(Q("funds",e.fundsEarned),{decimals:0})}`,e.scienceEarned===null?null:`+${he(Q("science",e.scienceEarned),{decimals:1})}`].filter(r=>r!==null);return[`Recovered ${e.recoveryLocation}`,e.recoveryFactor,t.length>0?t.join(" · "):"no funds or science awarded"].filter(r=>r!=="").join(" · ")}function O(){return fe("missionHistory")}function Ee(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),r=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${r}.fixture.json`}function Ae(e,t){const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),o=URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(o)}function qo({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:r=!1}={}){const o=e==="main",[n,a]=f.useState([]),[c,p]=f.useState(null),[h,m]=f.useState(!1),[y,w]=f.useState(!1),[z,E]=f.useState(null),[b,F]=f.useState(()=>new Set),[T,R]=f.useState(()=>Ke()),L=ge("trackingStation.catalog"),$=f.useMemo(()=>{const u=L.state==="observed"||L.state==="held"?L.value:void 0;return new Set((u?.entries??[]).filter(i=>i.contact!==lt.Gone).map(i=>i.name))},[L]),S=f.useMemo(()=>yr(n,$),[n,$]),x=f.useCallback(async()=>{const u=O();if(!u)return;let i;try{i=await u.listFlights()}catch(v){console.warn("FlightsManager: failed to load flights",v);return}a(i.sort((v,M)=>M.launchedAt-v.launchedAt)),F(v=>{const M=new Set;for(const N of i)v.has(N.id)&&M.add(N.id);return M.size===v.size?v:M})},[]);f.useEffect(()=>{x()},[x]),f.useEffect(()=>{const u=O();if(typeof u?.onFlightListChange=="function")return u.onFlightListChange(()=>{x()})},[x]);const A=async u=>{const i=O();if(i){for(const v of u)await i.deleteFlight(v);p(null),await x()}},k=async u=>{const i=O();if(!i)return;const v=await i.exportFlight(u.id);Ae(v,Ee(u))},K=async u=>{const i=O();if(!i)return;const v=await i.exportFlight(u.id),M={id:u.id,vesselName:u.vesselName,launchedAt:u.launchedAt,firstFrameUt:u.firstFrameUt??0,lastFrameUt:u.lastFrameUt??0,frameCount:u.sampleCount};_e().start(M,v)},V=async()=>{const u=O();u&&(await u.clearAllFlights(),m(!1),await x())},g=u=>{F(i=>{const v=new Set(i),M=u.every(N=>v.has(N));for(const N of u)M?v.delete(N):v.add(N);return v})},d=()=>{F(u=>u.size===n.length?new Set:new Set(n.map(i=>i.id)))},j=async()=>{const u=O();if(!u)return;const i=Array.from(b);for(const v of i)await u.deleteFlight(v);w(!1),await x()},C=async u=>{const i=O();i&&(await i.setFlightStarred(u.id,!u.starred),await x())},D=async u=>{const i=O(),v=u?re:0;dt(v),R(v),u&&i&&(await i.pruneFlightsKeepLatest({keepCount:v}),await x())},H=async()=>{const u=O();if(!u)return;const i=Array.from(b),v=new Map(n.map(M=>[M.id,M]));for(const M of i){const N=v.get(M);if(!N)continue;const et=await u.exportFlight(M);Ae(et,Ee(N))}},I=n.length>0&&b.size===n.length,B=b.size>0&&b.size<n.length,te=(()=>{const u=[...n].sort((M,N)=>N.launchedAt-M.launchedAt);let i=0,v=0;for(const M of u)M.starred||(i+=1,i>re&&(v+=1));return v})();return s.jsxs(Fr,{children:[o&&s.jsx(Mr,{missionHistoryEnabled:t,recordAllTopics:r}),n.length===0?s.jsx(yt,{children:"No flight history recorded yet"}):s.jsxs(s.Fragment,{children:[s.jsxs(Rr,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx(Ir,{children:s.jsx(pe,{ref:u=>{u&&(u.indeterminate=B)},checked:I,onChange:d,"aria-label":I?"Clear selection":"Select all flights"})}),s.jsxs(Pr,{children:[s.jsx(be,{size:12,fill:"currentColor","aria-hidden":"true"}),s.jsx(Ne,{children:"Kept (exempt from auto-delete)"})]}),s.jsx(W,{children:"Vessel"}),s.jsx(W,{children:"Launched"}),s.jsx(W,{title:"Game time, not time at the desk",children:"Duration"}),s.jsx(W,{children:"Samples"}),s.jsx(W,{children:"Ended"}),s.jsx(W,{children:s.jsx(Ne,{children:"Actions"})})]})}),s.jsx("tbody",{children:S.map(u=>{const i=u.flight,v=z===i.id,M=u.ids.every(N=>b.has(N));return s.jsxs(f.Fragment,{children:[s.jsxs($e,{$current:!1,children:[s.jsx(P,{children:s.jsx(pe,{checked:M,onChange:()=>g(u.ids),"aria-label":`Select flight ${i.vesselName||i.id}`})}),s.jsx(P,{children:s.jsx(Kr,{type:"button",$on:!!i.starred,onClick:()=>void C(i),"aria-label":i.starred?`Unstar ${i.vesselName||"flight"}`:`Star ${i.vesselName||"flight"} (keep from auto-delete)`,"aria-pressed":!!i.starred,title:i.starred?"Kept from auto-delete":"Keep from auto-delete",children:s.jsx(be,{size:"var(--icon-size-control)",fill:i.starred?"currentColor":"none"})})}),s.jsxs(P,{children:[i.vesselName||jt,i.launchName&&s.jsxs($r,{children:["launched as ",i.launchName]}),i.evaKerbals&&i.evaKerbals.length>0&&s.jsxs(Lr,{children:["EVA: ",i.evaKerbals.join(", ")]}),i.outcome?.kind==="recovered"&&s.jsx(Ue,{$tone:"go",title:Cr(i.outcome),children:"recovered"}),i.outcome?.kind==="crashed"&&s.jsx(Ue,{$tone:"nogo",title:`Crashed at ${i.outcome.body} (${i.outcome.situation}) · ${i.outcome.partsLostCount} part(s) lost${i.outcome.kerbalsKilled.length>0?` · KIA: ${i.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),s.jsx(P,{children:Sr(u.launchedAt)}),s.jsx(P,{children:wr(0,u.durationMs)}),s.jsx(P,{children:u.sampleCount.toLocaleString()}),s.jsx(P,{children:u.stillFlying?"Still flying":jr(i.endReason)}),s.jsx(P,{children:s.jsxs(zr,{children:[s.jsx(Tr,{type:"button",$open:v,onClick:()=>E(v?null:i.id),"aria-label":v?"Close graph":"Graph this flight","aria-expanded":v,children:v?"− graph":"＋ graph"}),o&&s.jsx(Er,{type:"button",onClick:()=>void K(i),"aria-label":`Replay ${i.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),s.jsx(Re,{type:"button",onClick:()=>void k(i),"aria-label":`Download fixture for ${i.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),c===i.id?s.jsxs(ue,{children:[s.jsx(ne,{onClick:()=>void A(u.ids),children:"Delete"}),s.jsx(se,{onClick:()=>p(null),children:"Cancel"})]}):s.jsx(Ur,{onClick:()=>p(i.id),children:"×"})]})})]}),v&&s.jsx($e,{$current:!1,children:s.jsxs(P,{colSpan:8,style:{padding:0},children:[s.jsx(At,{flight:i,onChange:()=>void x()}),s.jsx(ur,{missionId:i.id,fromUt:i.firstValidUt??i.firstFrameUt??0,toUt:i.lastValidUt??i.lastFrameUt??0})]})})]},i.id)})})]}),s.jsxs(Dr,{children:[s.jsx(Br,{children:b.size>0&&(y?s.jsxs(ue,{children:[s.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",b.size," selected flight",b.size===1?"":"s","?"]}),s.jsx(ne,{onClick:()=>void j(),children:"Delete"}),s.jsx(se,{onClick:()=>w(!1),children:"Cancel"})]}):s.jsxs(s.Fragment,{children:[s.jsxs(Or,{children:[b.size," selected"]}),s.jsx(Re,{type:"button",onClick:()=>void H(),title:"Download fixtures for the selected flights",children:"↓ download"}),s.jsx(ne,{onClick:()=>w(!0),children:"Delete"}),s.jsx(se,{onClick:()=>F(new Set),children:"Clear"})]}))}),s.jsxs(Hr,{children:[s.jsxs(_r,{title:`Keep the ${re} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[s.jsx(pe,{checked:T>0,onChange:u=>void D(u.target.checked)}),s.jsxs("span",{children:["Keep latest ",re,T===0&&te>0&&s.jsxs(Vr,{children:[" ","(",te," would be deleted)"]})]})]}),h?s.jsxs(ue,{children:[s.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),s.jsx(ne,{onClick:()=>void V(),children:"Clear all"}),s.jsx(se,{onClick:()=>m(!1),children:"Cancel"})]}):s.jsx(Gr,{onClick:()=>m(!0),children:"Clear all"})]})]})]})]})}function Mr({missionHistoryEnabled:e,recordAllTopics:t}){const r=f.useSyncExternalStore(Et,Se,Se);return s.jsxs(Ar,{children:[r.saveFailure&&s.jsxs(kt,{tone:"nogo",title:"Flight not saved",children:[r.saveFailure.vesselName,": ",r.saveFailure.cause]}),e?r.recording?s.jsxs(Nr,{children:["● recording ",r.vesselName??"flight"," (",r.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):s.jsx(Le,{children:"Auto-record armed: capture starts the moment a flight begins."}):s.jsx(Le,{children:"Mission history is off, enable it in Settings to auto-record."})]})}const Ne=l.span`
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
`,Fr=l.div`
  display: flex;
  flex-direction: column;
  min-width: min(500px, 100%);
  /* Graph panels expand in-place, so let the whole thing scroll rather than
     clipping the chart. Horizontal scroll catches narrow viewports where the
     row-action button cluster won't fit even in the wide flight modal. */
  max-height: 80vh;
  max-height: 80dvh;
  overflow: auto;
`,zr=l.div`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
`,Tr=l.button`
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
`,Re=l.button`
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
`,Er=l.button`
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
`,Ar=l.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-section);
  padding-bottom: var(--inset-toolbar-bottom);
  margin-bottom: var(--gap-toolbar);
  border-bottom: 1px solid var(--color-border-subtle);
`,Le=l.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Nr=l.span`
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
`,Rr=l.table`
  border-collapse: collapse;
  width: 100%;
  overflow-y: auto;
  font-size: var(--font-size-compact);
`,W=l.th`
  text-align: left;
  padding: var(--inset-surface);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
`,$e=l.tr`
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
`,Lr=l.span`
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,$r=l.span`
  display: block;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
`,Ue=l.span`
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
`,Ur=l.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-lg);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,ue=l.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
`,ne=l.button`
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  color: var(--color-tag-red-fg);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { background: var(--color-nogo-muted); }
`,se=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,Dr=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-section);
  padding: var(--inset-table-footer);
  border-top: 1px solid var(--color-border-subtle);
`,Br=l.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-height: 24px;
`,Or=l.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Ir=l.th`
  width: 28px;
  padding: var(--inset-surface);
  border-bottom: 1px solid var(--color-border-subtle);
`,pe=l.input.attrs({type:"checkbox"})`
  cursor: pointer;
  margin: 0;
`,Pr=l.th`
  width: 24px;
  /* The one cell that cannot take --inset-surface beside Th and ThCheckbox: a
     24px column carrying a star glyph needs more vertical than horizontal. At
     (6,8) the content box is 8px and the glyph clips. */
  padding: var(--inset-table-narrow-header);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  border-bottom: 1px solid var(--color-border-subtle);
  text-align: center;
`,Kr=l.button`
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
`,Hr=l.div`
  display: flex;
  align-items: center;
  gap: var(--gap-section);
`,_r=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  cursor: pointer;
  user-select: none;
`,Vr=l.span`
  color: var(--color-nogo-muted);
`,Gr=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-dim);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,qr=new ct({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class Wo{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new ut;historyCache=new Map;changesInOrder=new Map;async connect(){await this.pruneToKeepCount()}disconnect(){}schema(){return We()}subscribe(t,r){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,r,o,n){if(!n)return{t:[],v:[]};const a=vt(t);if(!a)return{t:[],v:[]};const c=await this.getFullHistoryStore(n);if(!c)return{t:[],v:[]};const p=c.isDerivedTopic(a)?c.sampleDerivedRange(a,r,o):c.sampleRange(a,r,o);return p?{t:p.map(h=>h.validAt),v:p.map(h=>h.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(J)}async getFlight(t){const r=await this.missionStore.getMissionMeta(t);return r?J(r):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.meta.id)}async saveMissionPart(t,r,o){await this.inOrder(t.id,()=>this.missionStore.saveMissionPart(t,r,o)),this.historyCache.delete(t.id),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.id)}async pruneToKeepCount(t){const r=Ke();if(!(r<=0))try{await this.pruneFlightsKeepLatest({keepCount:r,keepId:t})}catch(o){xe.warn("[MissionHistorySource] keep latest could not prune",{err:String(o)})}}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,r){const o=await this.missionStore.getMissionMeta(t);!o||!!o.starred===r||(await this.missionStore.updateMissionMeta(t,{starred:r}),this.flightListSubscribers.fire())}async setFlightEndReason(t,r){await this.inOrder(t,async()=>{const o=await this.missionStore.getMissionMeta(t);if(!o){xe.warn("[MissionHistorySource] end reason for a mission not stored",{id:t});return}o.endReason===void 0&&(await this.missionStore.updateMissionMeta(t,{endReason:r}),this.flightListSubscribers.fire())})}inOrder(t,r){const o=this.changesInOrder.get(t),n=o?o.then(r,r):r(),a=n.catch(()=>{});return this.changesInOrder.set(t,a),a.then(()=>{this.changesInOrder.get(t)===a&&this.changesInOrder.delete(t)}),n}async addChapter(t,r){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const a={id:r.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:r.label,startMs:r.startMs,endMs:r.endMs},c=[...o.chapters??[],a];return await this.missionStore.updateMissionMeta(t,{chapters:c}),this.flightListSubscribers.fire(),J({...o,chapters:c})}async updateChapter(t,r,o){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const a=(n.chapters??[]).map(c=>c.id===r?{...c,...o}:c);return await this.missionStore.updateMissionMeta(t,{chapters:a}),this.flightListSubscribers.fire(),J({...n,chapters:a})}async removeChapter(t,r){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const n=(o.chapters??[]).filter(a=>a.id!==r);return await this.missionStore.updateMissionMeta(t,{chapters:n}),this.flightListSubscribers.fire(),J({...o,chapters:n})}async pruneFlightsKeepLatest(t){const r=await this.missionStore.pruneMissionsKeepLatest(t);for(const o of r)this.historyCache.delete(o);return r.length>0&&this.flightListSubscribers.fire(),r}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const r=this.historyCache.get(t);if(r)return r;const o=(async()=>{const n=await this.missionStore.getMissionFixture(t);if(!n)throw new Error(`mission fixture not found: ${t}`);return qr.record(),Ft(n.fixture)})();this.historyCache.set(t,o);try{return await o}catch{this.historyCache.delete(t);return}}}function J(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchName:e.launchName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,endReason:e.endReason,evaKerbals:e.evaKerbals,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt,firstValidUt:e.firstValidUt,lastValidUt:e.lastValidUt}}function Je(e){const t=new Set(e.parts.map(n=>Number(n.id))),r=e.parts.map(Wr),o=r.find(n=>n.parentFlightId==null)??r.find(n=>!t.has(n.parentFlightId));for(const n of r)n.parentFlightId!=null&&!t.has(n.parentFlightId)&&(n.parentFlightId=o&&o!==n?o.flightId:null);return{topologySeq:e.parts.length,rootFlightId:o?o.flightId:0,parts:r}}function De(e){return e?[e.x.magnitude,e.y.magnitude,e.z.magnitude]:void 0}function Wr(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage??null,crewCapacity:0,maxTemp:e.maxTemp?.magnitude??null,crashTolerance:0,dryMass:e.dryMass?.magnitude??null,orgPos:[U(e.position.x),U(e.position.y),U(e.position.z)],up:De(e.up),forward:De(e.forward),bounds:{size:{x:U(e.bounds.size.x),y:U(e.bounds.size.y),z:U(e.bounds.size.z)},center:e.bounds.center?{x:U(e.bounds.center.x),y:U(e.bounds.center.y),z:U(e.bounds.center.z)}:void 0,hull:to(e.bounds.hull)},modules:e.modules}}function Yr(e){return e.currentTemp==null?null:{temperature:ye(e.currentTemp.magnitude),maxTemperature:e.maxTemp==null?null:ye(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp?.magnitude??null}}function Jr(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Yr(r));return t}function Zr(e){const t={};for(const[r,o]of Object.entries(e.resources))t[r]={amount:o.amount?.magnitude??null,maxAmount:o.maxAmount?.magnitude??null,...o.flow!=null?{flow:o.flow.magnitude}:{},...o.nominalFlow!=null?{nominalFlow:o.nominalFlow.magnitude}:{},...o.unratedProcess===!0?{unratedProcess:!0}:{}};return t}function Ze(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Zr(r));return t}function Qr(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function Xr(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map(Qr)}}function eo(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Xr(r));return t}function U(e){return e.magnitude}function to(e){if(!e||e.length<9||e.length%3!==0)return;const t=[];for(let r=0;r<e.length;r+=3)t.push({x:U(e[r]),y:U(e[r+1]),z:U(e[r+2])});return t}function Qe(e){return Array.from(new TextEncoder().encode(e),t=>/[A-Za-z0-9_-]/.test(String.fromCharCode(t))?String.fromCharCode(t):`%${t.toString(16).toUpperCase().padStart(2,"0")}`).join("")}function Yo(e,t){return`spaceCenter.craft.${e}.${Qe(t)}.parts`}function Jo(e,t){const r=Qe(t),o=He(`spaceCenter.craft.${e}.${r}.parts`),n=o.state==="observed"||o.state==="held"?o.value:void 0;return f.useMemo(()=>{if(!n)return;const a=pt("CraftFileParts",structuredClone(n));return{topology:Je(a),resourcesByFlightId:Ze(a)}},[n])}const ro=[];function oo(e){const t=[ie(e.dvRadial,0),ie(e.dvNormal,0),ie(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function Zo(){const e=He("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return f.useMemo(()=>!Array.isArray(t)||t.length===0?ro:t.map(oo),[t])}function Qo(e){const t=ge("vessel.parts"),r=t.state==="observed"||t.state==="held"?t.value:void 0,o=f.useMemo(()=>Jr(r),[r]),n=f.useMemo(()=>Ze(r),[r]),a=f.useMemo(()=>eo(r),[r]),c=[...e].sort((p,h)=>p-h).join(",");return f.useMemo(()=>{const p=c.length===0?[]:c.split(",").map(Number),h=new Map;for(const m of p)h.set(m,{thermal:o.get(m)??null,resources:n.get(m)??{},partState:a.get(m)});return h},[c,o,n,a])}const Be=Object.freeze({status:"none"}),no={t:[],readings:[]};function Xe(e){return e==="recorded"||e==="last-before-blackout"?e:void 0}function so(e){return e!==null&&typeof e=="object"&&"magnitude"in e}function ao(e,t){if(so(e))return{value:e,...t};if(typeof e=="number")return{value:Q(t.lo.unit,e),...t}}function io(e){const t=qt(e);if(t===void 0)return no;const r=new Map;for(const a of e.spans??[]){const c=Xe(a.status);if(c!==void 0)for(let p=a.from;p<=a.to;p++)r.set(p,c)}let o;const n=e.t.map((a,c)=>{const p=Q("ut",a),h=t.payloads[c],m=t.modelled.get(c);if(m!==void 0){const w={status:"available",modelled:h,atUt:p,beyondReceived:!0,basis:m.basis,band:m.band?ao(h,m.band):void 0};return o===void 0?{state:"pending",reckoning:w}:{state:"held",value:o.payload,asOfUt:o.at,grade:"held",reckoning:w}}o={payload:h,at:p};const y=r.get(c);return y!==void 0?{state:"held",value:h,asOfUt:p,grade:y,reckoning:Be}:{state:"observed",value:h,atUt:p,reckoning:Be}});return{t:e.t,readings:n,basis:e.basis,breaks:e.breaks,bridges:e.bridges,windowEndAt:e.windowEndAt,interpolation:e.interpolation}}function Xo(e,t){const r=tr(Tt(e),t);return f.useMemo(()=>io(r),[r])}function lo(e,t,r,o){if(o===void 0)return null;if(t!==null&&t.status===o)return t.to=r,t;const n={from:r,to:r,status:o};return e.push(n),n}function co(e,t,r,o,n){if(o===void 0)return null;if(t!==null&&t.basis===o&&t.bandKind===n?.kind)return t.to=r,n!==void 0&&(t.bandLo?.push(n.lo),t.bandHi?.push(n.hi)),t;const a=n!==void 0?{from:r,to:r,basis:o,bandLo:[n.lo],bandHi:[n.hi],bandKind:n.kind}:{from:r,to:r,basis:o};return e.push(a),a}function uo(e){const t=ee(e);return typeof t=="number"?t:Number.NaN}function po(e){const[t,r]=qe(e?.lo,e?.hi);if(!(e===void 0||t===void 0||r===void 0))return{lo:t,hi:r,kind:e.kind}}function en(e){const t=[],r=[],o={t:[],v:[],basis:e.basis,breaks:[],spans:t,reckoned:r,bridges:[],windowEndAt:e.windowEndAt,interpolation:e.interpolation},n=new Set(e.breaks??[]),a=new Map((e.bridges??[]).map(y=>[y.to,y])),c=new Map;let p=null,h=null,m=!1;for(let y=0;y<e.t.length;y++){n.has(y)&&(m=!0);const w=e.readings[y],z=w.reckoning.status==="available"?w.reckoning:void 0,E=uo(z?z.modelled:w.value);if(Number.isNaN(E))continue;const b=o.t.length,F=m&&b>0;F&&o.breaks.push(b),m=!1,c.set(y,b);const T=a.get(y);T!==void 0&&!F&&c.get(y-1)===b-1&&T.v.every(Number.isFinite)&&o.bridges.push({...T,to:b}),o.t.push(e.t[y]),o.v.push(E);const R=z===void 0&&w.state==="held"?Xe(w.grade):void 0;p=lo(t,p,b,R),h=co(r,h,b,z?.basis,po(z?.band))}return o}function tn(){const e=ge("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return f.useMemo(()=>t?Je(t):void 0,[t])}function rn(){const e=_e(),t=f.useSyncExternalStore(c=>e.subscribe(c),()=>e.getSnapshot());if(bt(),!t.active||!t.meta)return null;const r=t.meta,o=e.cursorUt(),n=Math.max(0,r.lastFrameUt-r.firstFrameUt),a=Math.max(0,o-r.firstFrameUt);return s.jsxs(ho,{role:"region","aria-label":"Replay controls",children:[s.jsxs(Ie,{children:[s.jsx(mo,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),s.jsxs(fo,{children:["REPLAY: ",s.jsx(go,{children:r.vesselName||"Unnamed vessel"})]})]}),s.jsxs(vo,{children:[s.jsx(Pe,{children:Oe(a)}),s.jsx(bo,{type:"range",min:r.firstFrameUt,max:r.lastFrameUt,step:.1,value:o,onChange:c=>e.seekTo(Number(c.target.value)),"aria-label":"Seek to position"}),s.jsx(Pe,{children:Oe(n)})]}),s.jsxs(Ie,{children:[s.jsxs(xo,{value:String(t.rate),onChange:c=>e.setRate(Number(c.target.value)),"aria-label":"Playback rate",children:[s.jsx("option",{value:"0.5",children:"0.5×"}),s.jsx("option",{value:"1",children:"1×"}),s.jsx("option",{value:"2",children:"2×"}),s.jsx("option",{value:"5",children:"5×"}),s.jsx("option",{value:"10",children:"10×"}),s.jsx("option",{value:"50",children:"50×"})]}),s.jsx(yo,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function Oe(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),r=Math.floor(t/3600),o=Math.floor(t%3600/60),n=t%60;return r>0?`${r}:${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`}const ho=l.div`
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
`,Ie=l(St).attrs({justify:"start"})`
  flex-shrink: 0;
`,fo=l.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
`,go=l.span`
  color: var(--color-tag-purple-fg);
  font-weight: 700;
  margin-left: var(--gap-trailing-figure);
`,mo=l.button`
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
`,vo=l.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,bo=l.input`
  flex: 1;
  min-width: 0;
  accent-color: var(--color-tag-purple-fg);
`,Pe=l.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  white-space: nowrap;
`,xo=l.select`
  background: var(--color-surface-app);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,yo=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`;export{Go as A,Xo as B,Ye as C,tn as D,Ho as E,qo as F,Wo as M,rn as R,qe as a,Ze as b,eo as c,Je as d,Qe as e,Yo as f,Se as g,Vo as h,ae as i,We as j,_o as k,or as l,ir as m,cr as n,ee as o,en as p,uo as q,Ko as r,Po as s,Io as t,Zo as u,Et as v,Jo as w,tr as x,dr as y,Qo as z};
