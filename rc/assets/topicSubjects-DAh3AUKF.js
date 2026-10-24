import{j as s}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{b8 as fe,bY as be,cv as J,R as rt,cr as nt,cz as ot,cy as st,dd as at,di as it,ag as lt,bv as Z,bg as ct,aZ as X,a_ as dt,b5 as le}from"./view-clock-formula-DAr7sU2b.js";import{r as h}from"./ext-react-C0MU9AHG.js";import{o as He,D as ne,s as ut,L as mt}from"./ksp-enum-names-BgJi5FW5.js";import{A as pt}from"./screen-BOwIPYm6.js";import{ba as ht,bc as ft,aW as gt,i as vt,aH as bt,b7 as Ge,bg as xt}from"./lagrange-CO7BolvF.js";import{w as ge}from"./use-transmissions-BLhvT-0G.js";import{g as _e}from"./replay-session-controller-C-pl3XN7.js";import"./websocket-transport-F-eLlynV.js";import{y as V,aw as yt,E as St,w as xe,ae as wt}from"./ModalSaveBar-Cj72lp_q.js";import{G as kt,N as Ct}from"./Notice-ChRZ45Sk.js";import{N as jt,w as he}from"./contributionsRead-Dbqo5wwZ.js";import"./processorPerfBudget-DJq44PTl.js";import{l as ye}from"./index-DqUIH49W.js";import{h as Ft,D as Mt}from"./VersionMismatchBanner-CRCjAfcd.js";import l from"./ext-styled-components-DAuodqsN.js";import{b as At}from"./full-history-replay-D9F9hoGB.js";import{e as zt,s as Tt}from"./topic-fields-Cx58zK1n.js";import{k as Se}from"./orbital-QLo7eXpv.js";const Ve={recording:!1,vesselName:null,frameCount:0,saveFailure:null};let G=Ve;const ee=new Set;function we(){return G}function Kn(e){G={...e,saveFailure:G.saveFailure};for(const t of ee)t()}function Hn(e){if(G.saveFailure!==e){G={...G,saveFailure:e};for(const t of ee)t()}}function Et(e){return ee.add(e),()=>{ee.delete(e)}}function Gn(){G=Ve,ee.clear()}function ce(){return fe("missionHistory")}function q(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e/1e3),r=Math.floor(t/3600),n=Math.floor(t%3600/60),o=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`}function oe(e){const t=e.trim();if(t==="")return null;if(!t.includes(":")){const c=Number(t);return Number.isFinite(c)&&c>=0?c*1e3:null}const r=t.split(":").map(c=>c.trim());if(r.some(c=>c===""||!/^\d+(\.\d+)?$/.test(c)))return null;const n=r.map(Number),a=n.length===2?n[0]*60+n[1]:n.length===3?n[0]*3600+n[1]*60+n[2]:null;return a===null?null:a*1e3}function Nt({flight:e,onChange:t}){const r=e.chapters??[],n=Math.max(0,e.lastSampleAt-e.launchedAt),[o,a]=h.useState(""),[c,m]=h.useState(""),[p,g]=h.useState(""),[y,w]=h.useState(null),[A,T]=h.useState(null),[b,M]=h.useState(""),[z,R]=h.useState(""),[L,$]=h.useState(""),[S,x]=h.useState(null);function E(d){T(d.id),M(d.label),R(q(d.startMs)),$(q(d.endMs)),x(null)}function k(){T(null),x(null)}async function K(){const d=ce();if(!d)return;const C=oe(c),j=oe(p);if(o.trim()===""){w("Label required");return}if(C===null||j===null){w("Start and end must be mm:ss");return}if(j<=C){w("End must be after start");return}w(null),await d.addChapter(e.id,{label:o.trim(),startMs:C,endMs:j}),a(""),m(""),g(""),t()}async function _(d){const C=ce();if(!C)return;const j=oe(z),U=oe(L);if(b.trim()===""){x("Label required");return}if(j===null||U===null){x("Start and end must be mm:ss");return}if(U<=j){x("End must be after start");return}x(null),await C.updateChapter(e.id,d,{label:b.trim(),startMs:j,endMs:U}),T(null),t()}async function f(d){const C=ce();C&&(await C.removeChapter(e.id,d),A===d&&k(),t())}return s.jsxs(Rt,{children:[s.jsx(Lt,{children:"Chapters"}),r.length===0?s.jsx($t,{children:"No chapters yet. Add markers to slice the flight."}):s.jsx(Dt,{children:r.slice().sort((d,C)=>d.startMs-C.startMs).map(d=>{const C=A===d.id;return s.jsx(Ut,{children:C?s.jsxs(s.Fragment,{children:[s.jsx(V,{type:"text",value:b,onChange:j=>M(j.target.value),"aria-label":"Chapter label"}),s.jsx(V,{type:"text",value:z,onChange:j=>R(j.target.value),"aria-label":"Chapter start (mm:ss)",placeholder:"mm:ss"}),s.jsx(V,{type:"text",value:L,onChange:j=>$(j.target.value),"aria-label":"Chapter end (mm:ss)",placeholder:"mm:ss"}),s.jsxs(ke,{children:[s.jsx(Kt,{type:"button",onClick:()=>void _(d.id),children:"Save"}),s.jsx(Ht,{type:"button",onClick:k,children:"Cancel"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Bt,{title:d.label,children:d.label}),s.jsxs(Ot,{children:[q(d.startMs)," – ",q(d.endMs)]}),s.jsxs(Pt,{children:["(",q(d.endMs-d.startMs),")"]}),s.jsxs(ke,{children:[s.jsx(It,{type:"button",onClick:()=>E(d),children:"edit"}),s.jsx(Gt,{type:"button",onClick:()=>void f(d.id),"aria-label":`Remove chapter ${d.label}`,children:"×"})]})]})},d.id)})}),S&&s.jsx(Ce,{children:S}),s.jsxs(_t,{children:[s.jsx(V,{type:"text",placeholder:"Chapter name",value:o,onChange:d=>a(d.target.value),"aria-label":"New chapter label"}),s.jsx(V,{type:"text",placeholder:"0:00",value:c,onChange:d=>m(d.target.value),"aria-label":"New chapter start (mm:ss)"}),s.jsx(V,{type:"text",placeholder:q(n),value:p,onChange:d=>g(d.target.value),"aria-label":"New chapter end (mm:ss)"}),s.jsx(Vt,{type:"button",onClick:()=>void K(),children:"+ add"})]}),y&&s.jsx(Ce,{children:y})]})}const Rt=l.div`
  padding: var(--inset-chapters-band);
  background: var(--color-surface-app);
  border-bottom: 1px solid var(--color-border-subtle);
`,Lt=l.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: var(--gap-heading-hint);
`,$t=l.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  margin-bottom: var(--gap-related-comfortable);
`,Dt=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  margin-bottom: var(--gap-related-comfortable);
`,Ut=l(yt).attrs({cols:"minmax(120px, 1fr) auto auto auto",gap:"related-comfortable"})`
  font-size: var(--font-size-compact);
`,Bt=l.span`
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ot=l.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Pt=l.span`
  font-family: var(--font-family-mono);
  color: var(--color-text-faint);
  font-size: var(--font-size-compact);
  white-space: nowrap;
`,ke=l.span`
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
`,Kt=l.button`
  background: var(--color-go-status);
  border: 1px solid var(--color-go-status);
  color: var(--color-go-on-status);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,Ht=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,Gt=l.button`
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
`,Ce=l.div`
  margin-top: var(--gap-sub-readout);
  font-size: var(--font-size-compact);
  color: var(--color-tag-red-fg);
`,qe=new WeakMap;function qt(e,t){qe.set(e,t)}function Wt(e){return qe.get(e)}const de={t:[],v:[]};function Yt(e){switch(e){case be.LastBeforeBlackout:return"last-before-blackout";case be.Recorded:return"recorded";default:return null}}function Jt(e){const t=[];let r=null;for(let n=0;n<e.length;n++){const o=Yt(e[n].meta.staleness);if(o===null){r=null;continue}if(r!==null&&r.status===o){r.to=n;continue}r={from:n,to:n,status:o},t.push(r)}return t}const je=new WeakMap;function Zt(e){const t=je.get(e);if(t)return t;const r={t:e.t,v:e.v.map(n=>{const o=te(n);return typeof o=="number"?o:Number.NaN}),basis:e.basis};return je.set(e,r),r}function Qt(e,t){return e.length===t.length&&e.every((r,n)=>r.to===t[n].to&&r.v===t[n].v)}function Xt(e,t){return e.length===t.length&&e.every((r,n)=>r.from===t[n].from&&r.to===t[n].to&&r.status===t[n].status)}function Fe(e,t){return e===void 0||t===void 0?e===t:e.length===t.length&&e.every((r,n)=>Object.is(r,t[n]))}function er(e,t){return e.length===t.length&&e.every((r,n)=>r.from===t[n].from&&r.to===t[n].to&&r.basis===t[n].basis&&r.bandKind===t[n].bandKind&&Fe(r.bandLo,t[n].bandLo)&&Fe(r.bandHi,t[n].bandHi))}function We(e,t){return[e?.toWire(),t?.toWire()]}function tr(e,t,r,n,o){const a=new Map((t.sampleRange(r,n,o)??[]).map(p=>[p.validAt,JSON.stringify(p.payload)])),c=[];let m;for(const p of e){const g=a.get(p.validAt)??JSON.stringify(p.payload);g!==m&&(m=g,c.push(p))}return c}function te(e){return e!==null&&typeof e=="object"&&"magnitude"in e?e.magnitude:e}function rr(e,t){const r=h.useRef(de),n=ht(),o=ft(),a=e,c=h.useCallback(p=>{if(!n||!o)return()=>{};const g=gt(n,o,a),y=o.subscribeFrame(p);return()=>{y(),g()}},[n,o,a]),m=h.useCallback(()=>{if(!o)return de;const p=o.currentFrame().viewUt,g=p-t,y=o.isDerivedTopic(a)?o.sampleDerivedRange(a,g,p):o.sampleRange(a,g,p),w=o.sampleReckonedTail(a,g,p),A=o.tagsOf(a),T=A.kind==="event"?"none":A.kind==="discrete"?"step":"linear",b=A.kind==="event"?tr(y??[],o,A.topic,g,p):y??[];if(b.length===0&&w.length===0)return de;const M=b.map(f=>f.validAt),z=b.map(f=>te(f.payload)),R=b.map(f=>f.payload),L=new Map,$=[],S=[];for(let f=0;f<b.length;f++){if(f===0)continue;if(T==="none")break;if(b[f].meta.gapSinceUt!=null){$.push(f);continue}if(Object.is(z[f],z[f-1]))continue;const d=o.gapModel(a,b[f-1],b[f]);if(d?.carried===!1){$.push(f);continue}d?.carried&&S.push({to:f,...Zt(d)})}const x=Jt(b),E=[];for(const f of w){const d=M.length;M.push(f.atUt),z.push(te(f.value)),R.push(f.value);const{bandLo:C,bandHi:j}=f,[U,H]=We(C,j),P=U!==void 0&&H!==void 0?f.bandKind:void 0;L.set(d,{basis:f.basis,band:C!==void 0&&j!==void 0&&P!==void 0?{lo:C,hi:j,kind:P}:void 0});const B=E[E.length-1],re=B!==void 0&&B.basis===f.basis&&B.to===d-1&&B.bandKind===P;if(B!==void 0&&re){B.to=d,U!==void 0&&H!==void 0&&P!==void 0&&(B.bandLo?.push(U),B.bandHi?.push(H));continue}if(U!==void 0&&H!==void 0&&P!==void 0){E.push({from:d,to:d,basis:f.basis,bandLo:[U],bandHi:[H],bandKind:P});continue}E.push({from:d,to:d,basis:f.basis})}const k=r.current,K=k.breaks??[];return k.t.length===M.length&&k.t.every((f,d)=>f===M[d])&&k.v.every((f,d)=>Object.is(f,z[d]))&&K.length===$.length&&K.every((f,d)=>f===$[d])&&Qt(k.bridges??[],S)&&Xt(k.spans??[],x)&&er(k.reckoned??[],E)&&k.windowEndAt===(E.length>0?p:void 0)&&(k.interpolation??"linear")===T?k:(r.current={t:M,v:z,basis:"ut-seconds",breaks:$,bridges:S,spans:x,reckoned:E,interpolation:T,windowEndAt:E.length>0?p:void 0},qt(r.current,{payloads:R,modelled:L}),r.current)},[o,a,t]);return h.useSyncExternalStore(c,m)}const nr=Object.freeze({ag:"AG",asl:"ASL",eva:"EVA",lan:"LAN",lat:"latitude",lon:"longitude",met:"MET",sas:"SAS",soi:"SOI",twr:"TWR",ut:"UT"});function Y(e){const t=e.split(".").flatMap(a=>a.split(/(?=[A-Z])/)).map(a=>a.toLowerCase()).filter(a=>a.length>0).map(a=>nr[a]??a);if(t.length===0)return e;const[r,...n]=t;return[r===r.toUpperCase()?r:r[0].toUpperCase()+r.slice(1),...n].join(" ")}function or(e,t,r){return r.has(e)?!0:at(`${e}.${t}`)?.rawTopic===e}function sr(e,t){return{key:`${e}.${t.path}`,label:Y(t.path),group:e,unit:t.unit,kind:t.kind,topic:e,fieldPath:t.path,...t.enumEncoding===void 0?{}:{enumEncoding:t.enumEncoding}}}function ar(e,t){const r=new Set(t),n=[...new Set([...nt(),...e,...t])].filter(m=>!ot(m)).sort(),o=[],a=[],c=[];for(const m of n){if(st(m)){c.push(m);continue}const p=zt(m).filter(g=>or(m,g.path,r));if(p.length===0){a.push(m);continue}for(const g of p)o.push(sr(m,g))}return{keys:o,undescribed:a,collections:c}}function ie(){return[...vt.map(e=>e.topic),...rt().map(e=>e.topic)]}let ue;function ve(e,t){const r=`${e.join(",")}|${t.join(",")}`;if(ue?.key===r)return ue.built;const n=ar(e,t);return ue={key:r,built:n},n}function Ye(e=J(),t=ie()){return ve(e,t).keys}function ir(e){const t=e.kind;return t!==void 0?t==="quantity":e.unit!==void 0&&!lr.has(e.unit)}const lr=new Set(["bool","enum","flag","id","raw","text"]);function cr(e){return e.kind==="enum"?e.enumEncoding!==void 0:e.kind==="quantity"||e.kind==="text"||e.kind==="flag"}function _n(e,t){const r=e?.enumEncoding;return r?.by!=="ordinal"||typeof t!="number"?t:r.names[t]??t}function Vn(e=J(),t=ie()){return ve(e,t).undescribed}function qn(e=J(),t=ie()){return ve(e,t).collections}function Me(){return ie().join(",")}function Je(){const e=h.useSyncExternalStore(it,J,J),t=h.useSyncExternalStore(lt,Me,Me);return h.useMemo(()=>Ye(e,t.split(",")),[e,t])}function dr(){const e=Je();return h.useMemo(()=>e.filter(ir),[e])}function Wn(){const e=Je();return h.useMemo(()=>e.filter(cr),[e])}const Ae=["var(--color-accent-fg)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-tag-purple-fg)","var(--color-nogo-mark)","var(--color-info-mark)","var(--color-warn-mark)","var(--color-accent-fg)"];function ze(){return fe("missionHistory")}function ur({missionId:e,fromUt:t,toUt:r}){const n=dr(),[o,a]=h.useState(new Set),[c,m]=h.useState([]),[p,g]=h.useState(!1),[y,w]=h.useState(null);h.useEffect(()=>()=>{ze()?.evictFullHistoryStore(e)},[e]);const A=h.useMemo(()=>n.map(S=>({key:S.key,label:S.label??S.key,unit:S.unit,group:pr(S.key)})),[n]);h.useEffect(()=>{const S=ze();if(!S||o.size===0){m([]),w(null);return}let x=!1;g(!0),w(null);const E=[...o];return Promise.all(E.map(k=>S.queryRange(k,t,r,e))).then(k=>{if(x)return;const K=new Map(n.map(f=>[f.key,f])),_=E.map((f,d)=>{const C=mr(k[d],t),j=K.get(f);return{id:f,label:j?.label??f,axis:"primary",color:Ae[d%Ae.length],type:"line",data:C}});m(_)}).catch(k=>{x||w(k instanceof Error?k.message:String(k))}).finally(()=>{x||g(!1)}),()=>{x=!0}},[o,e,t,r,n]);const T=Math.max(0,(r-t)*1e3),b=T>0?[0,T]:[0,6e4],M=c.some(S=>S.data.x.length>0),z=[...o].map(S=>n.find(x=>x.key===S)),R=[...new Set(z.map((S,x)=>S?.label??[...o][x]))],L=[...new Set(z.map(S=>S?.unit))],$=Ft(R.length>0&&R.length<=2?R.join(" / "):void 0,L.length===1?L[0]:void 0);return s.jsxs(hr,{children:[s.jsxs(fr,{children:[s.jsx(gr,{children:"Series"}),s.jsx(Mt,{keys:A,value:o,onChange:a,placeholder:"Add a data key...",emptyHint:A.length===0?"No numeric keys in the current schema":"No matches"})]}),y&&s.jsxs(xr,{role:"alert",children:["Failed to load samples: ",y]}),o.size===0?s.jsx(Te,{children:"Pick one or more numeric telemetry keys above to plot them."}):s.jsxs(vr,{children:[p&&s.jsx(br,{children:"Loading..."}),!p&&!M&&s.jsx(Te,{children:"No recorded samples for the selected keys."}),M&&s.jsx(kt,{chrome:"bare",series:c,xDomain:b,xAxisLabel:"Mission time",yAxisLabel:$,height:260})]})]})}function mr(e,t){const r=[],n=[];for(let o=0;o<e.t.length;o++){const a=te(e.v[o]);typeof a!="number"||!Number.isFinite(a)||(r.push((e.t[o]-t)*1e3),n.push(a))}return{x:r,y:n}}function pr(e){switch(e.split(".")[0]){case"v":return"Vessel";case"o":return"Orbit";case"t":return"Time";case"r":return"Resources";case"dv":return"ΔV";case"n":return"Navigation";case"f":return"Flight controls";case"tar":return"Target";case"dock":return"Docking";case"comm":return"CommNet";case"therm":return"Thermal";case"land":return"Landing";case"b":return"Bodies";case"s":return"Sensors";case"a":return"API / meta";default:return"Other"}}const hr=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border-top: 1px solid var(--color-surface-raised);
`,fr=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,gr=l.span`
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
`;function yr(e,t){const r=[],n=new Map;for(const o of e){const a=o.lastSampleAt-o.launchedAt,c=o.endReason===void 0&&o.outcome===void 0&&t.has(o.vesselName),m=c?n.get(o.vesselName):void 0;if(m){m.ids.push(o.id),m.launchedAt=Math.min(m.launchedAt,o.launchedAt),m.durationMs+=a,m.sampleCount+=o.sampleCount;continue}const p={flight:o,ids:[o.id],stillFlying:c,launchedAt:o.launchedAt,durationMs:a,sampleCount:o.sampleCount};r.push(p),c&&n.set(o.vesselName,p)}return r}function Sr(e){return new Date(e).toLocaleString()}function wr(e,t){return he(X("s",(t-e)/1e3))}const kr={[Z.Recovered]:"Recovered",[Z.Crashed]:"Crashed",[Z.Reverted]:"Reverted",[Z.Destroyed]:"Destroyed",[Z.Terminated]:"Terminated"};function Cr(e){return e===void 0?"Not known":kr[e]??"Not known"}function jr(e){const t=[e.fundsEarned===null?null:`+${he(X("funds",e.fundsEarned),{decimals:0})}`,e.scienceEarned===null?null:`+${he(X("science",e.scienceEarned),{decimals:1})}`].filter(r=>r!==null);return[`Recovered ${e.recoveryLocation}`,e.recoveryFactor,t.length>0?t.join(" · "):"no funds or science awarded"].filter(r=>r!=="").join(" · ")}function O(){return fe("missionHistory")}function Ee(e){const t=(e.vesselName||"flight").replace(/[^a-z0-9._-]+/gi,"_").toLowerCase(),r=new Date(e.launchedAt).toISOString().replace(/[:.]/g,"-").replace(/Z$/,"");return`${t}-${r}.fixture.json`}function Ne(e,t){const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(r),o=document.createElement("a");o.href=n,o.download=t,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(n)}function Yn({screen:e="main",missionHistoryEnabled:t=!0,recordAllTopics:r=!1}={}){const n=e==="main",[o,a]=h.useState([]),[c,m]=h.useState(null),[p,g]=h.useState(!1),[y,w]=h.useState(!1),[A,T]=h.useState(null),[b,M]=h.useState(()=>new Set),[z,R]=h.useState(()=>He()),L=ge("trackingStation.catalog"),$=h.useMemo(()=>{const u=L.state==="observed"||L.state==="held"?L.value:void 0;return new Set((u?.entries??[]).filter(i=>i.contact!==ct.Gone).map(i=>i.name))},[L]),S=h.useMemo(()=>yr(o,$),[o,$]),x=h.useCallback(async()=>{const u=O();if(!u)return;let i;try{i=await u.listFlights()}catch(v){console.warn("FlightsManager: failed to load flights",v);return}a(i.sort((v,F)=>F.launchedAt-v.launchedAt)),M(v=>{const F=new Set;for(const N of i)v.has(N.id)&&F.add(N.id);return F.size===v.size?v:F})},[]);h.useEffect(()=>{x()},[x]),h.useEffect(()=>{const u=O();if(typeof u?.onFlightListChange=="function")return u.onFlightListChange(()=>{x()})},[x]);const E=async u=>{const i=O();if(i){for(const v of u)await i.deleteFlight(v);m(null),await x()}},k=async u=>{const i=O();if(!i)return;const v=await i.exportFlight(u.id);Ne(v,Ee(u))},K=async u=>{const i=O();if(!i)return;const v=await i.exportFlight(u.id),F={id:u.id,vesselName:u.vesselName,launchedAt:u.launchedAt,firstFrameUt:u.firstFrameUt??0,lastFrameUt:u.lastFrameUt??0,frameCount:u.sampleCount};_e().start(F,v)},_=async()=>{const u=O();u&&(await u.clearAllFlights(),g(!1),await x())},f=u=>{M(i=>{const v=new Set(i),F=u.every(N=>v.has(N));for(const N of u)F?v.delete(N):v.add(N);return v})},d=()=>{M(u=>u.size===o.length?new Set:new Set(o.map(i=>i.id)))},C=async()=>{const u=O();if(!u)return;const i=Array.from(b);for(const v of i)await u.deleteFlight(v);w(!1),await x()},j=async u=>{const i=O();i&&(await i.setFlightStarred(u.id,!u.starred),await x())},U=async u=>{const i=O(),v=u?ne:0;ut(v),R(v),u&&i&&(await i.pruneFlightsKeepLatest({keepCount:v}),await x())},H=async()=>{const u=O();if(!u)return;const i=Array.from(b),v=new Map(o.map(F=>[F.id,F]));for(const F of i){const N=v.get(F);if(!N)continue;const tt=await u.exportFlight(F);Ne(tt,Ee(N))}},P=o.length>0&&b.size===o.length,B=b.size>0&&b.size<o.length,re=(()=>{const u=[...o].sort((F,N)=>N.launchedAt-F.launchedAt);let i=0,v=0;for(const F of u)F.starred||(i+=1,i>ne&&(v+=1));return v})();return s.jsxs(Mr,{children:[n&&s.jsx(Fr,{missionHistoryEnabled:t,recordAllTopics:r}),o.length===0?s.jsx(St,{children:"No flight history recorded yet"}):s.jsxs(s.Fragment,{children:[s.jsxs(Rr,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx(Pr,{children:s.jsx(pe,{ref:u=>{u&&(u.indeterminate=B)},checked:P,onChange:d,"aria-label":P?"Clear selection":"Select all flights"})}),s.jsxs(Ir,{children:[s.jsx(xe,{size:12,fill:"currentColor","aria-hidden":"true"}),s.jsx(Re,{children:"Kept (exempt from auto-delete)"})]}),s.jsx(W,{children:"Vessel"}),s.jsx(W,{children:"Launched"}),s.jsx(W,{title:"Game time, not time at the desk",children:"Duration"}),s.jsx(W,{children:"Samples"}),s.jsx(W,{children:"Ended"}),s.jsx(W,{children:s.jsx(Re,{children:"Actions"})})]})}),s.jsx("tbody",{children:S.map(u=>{const i=u.flight,v=A===i.id,F=u.ids.every(N=>b.has(N));return s.jsxs(h.Fragment,{children:[s.jsxs(De,{$current:!1,children:[s.jsx(I,{children:s.jsx(pe,{checked:F,onChange:()=>f(u.ids),"aria-label":`Select flight ${i.vesselName||i.id}`})}),s.jsx(I,{children:s.jsx(Kr,{type:"button",$on:!!i.starred,onClick:()=>void j(i),"aria-label":i.starred?`Unstar ${i.vesselName||"flight"}`:`Star ${i.vesselName||"flight"} (keep from auto-delete)`,"aria-pressed":!!i.starred,title:i.starred?"Kept from auto-delete":"Keep from auto-delete",children:s.jsx(xe,{size:"var(--icon-size-control)",fill:i.starred?"currentColor":"none"})})}),s.jsxs(I,{children:[i.vesselName||jt,i.launchName&&s.jsxs($r,{children:["launched as ",i.launchName]}),i.evaKerbals&&i.evaKerbals.length>0&&s.jsxs(Lr,{children:["EVA: ",i.evaKerbals.join(", ")]}),i.outcome?.kind==="recovered"&&s.jsx(Ue,{$tone:"go",title:jr(i.outcome),children:"recovered"}),i.outcome?.kind==="crashed"&&s.jsx(Ue,{$tone:"nogo",title:`Crashed at ${i.outcome.body} (${i.outcome.situation}) · ${i.outcome.partsLostCount} part(s) lost${i.outcome.kerbalsKilled.length>0?` · KIA: ${i.outcome.kerbalsKilled.join(", ")}`:""}`,children:"crashed"})]}),s.jsx(I,{children:Sr(u.launchedAt)}),s.jsx(I,{children:wr(0,u.durationMs)}),s.jsx(I,{children:u.sampleCount.toLocaleString()}),s.jsx(I,{children:u.stillFlying?"Still flying":Cr(i.endReason)}),s.jsx(I,{children:s.jsxs(Ar,{children:[s.jsx(zr,{type:"button",$open:v,onClick:()=>T(v?null:i.id),"aria-label":v?"Close graph":"Graph this flight","aria-expanded":v,children:v?"− graph":"＋ graph"}),n&&s.jsx(Tr,{type:"button",onClick:()=>void K(i),"aria-label":`Replay ${i.vesselName||"flight"}`,title:"Replay this mission in the dashboard",children:"▶ replay"}),s.jsx(Le,{type:"button",onClick:()=>void k(i),"aria-label":`Download fixture for ${i.vesselName||"flight"}`,title:"Download as replay fixture (.json)",children:"↓ fixture"}),c===i.id?s.jsxs(me,{children:[s.jsx(se,{onClick:()=>void E(u.ids),children:"Delete"}),s.jsx(ae,{onClick:()=>m(null),children:"Cancel"})]}):s.jsx(Dr,{onClick:()=>m(i.id),children:"×"})]})})]}),v&&s.jsx(De,{$current:!1,children:s.jsxs(I,{colSpan:8,style:{padding:0},children:[s.jsx(Nt,{flight:i,onChange:()=>void x()}),s.jsx(ur,{missionId:i.id,fromUt:i.firstValidUt??i.firstFrameUt??0,toUt:i.lastValidUt??i.lastFrameUt??0})]})})]},i.id)})})]}),s.jsxs(Ur,{children:[s.jsx(Br,{children:b.size>0&&(y?s.jsxs(me,{children:[s.jsxs("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:["Delete ",b.size," selected flight",b.size===1?"":"s","?"]}),s.jsx(se,{onClick:()=>void C(),children:"Delete"}),s.jsx(ae,{onClick:()=>w(!1),children:"Cancel"})]}):s.jsxs(s.Fragment,{children:[s.jsxs(Or,{children:[b.size," selected"]}),s.jsx(Le,{type:"button",onClick:()=>void H(),title:"Download fixtures for the selected flights",children:"↓ download"}),s.jsx(se,{onClick:()=>w(!0),children:"Delete"}),s.jsx(ae,{onClick:()=>M(new Set),children:"Clear"})]}))}),s.jsxs(Hr,{children:[s.jsxs(Gr,{title:`Keep the ${ne} most recently launched flights and silently delete the rest. Starred flights are exempt and don't count toward the cap. Runs at app startup and immediately when toggled on.`,children:[s.jsx(pe,{checked:z>0,onChange:u=>void U(u.target.checked)}),s.jsxs("span",{children:["Keep latest ",ne,z===0&&re>0&&s.jsxs(_r,{children:[" ","(",re," would be deleted)"]})]})]}),p?s.jsxs(me,{children:[s.jsx("span",{style:{fontSize:"var(--font-size-compact)",color:"var(--color-text-muted)"},children:"Delete all flight history?"}),s.jsx(se,{onClick:()=>void _(),children:"Clear all"}),s.jsx(ae,{onClick:()=>g(!1),children:"Cancel"})]}):s.jsx(Vr,{onClick:()=>g(!0),children:"Clear all"})]})]})]})]})}function Fr({missionHistoryEnabled:e,recordAllTopics:t}){const r=h.useSyncExternalStore(Et,we,we);return s.jsxs(Er,{children:[r.saveFailure&&s.jsxs(Ct,{tone:"nogo",title:"Flight not saved",children:[r.saveFailure.vesselName,": ",r.saveFailure.cause]}),e?r.recording?s.jsxs(Nr,{children:["● recording ",r.vesselName??"flight"," (",r.frameCount.toLocaleString()," frames)",t?" · all topics":""]}):s.jsx($e,{children:"Auto-record armed: capture starts the moment a flight begins."}):s.jsx($e,{children:"Mission history is off, enable it in Settings to auto-record."})]})}const Re=l.span`
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
`,Mr=l.div`
  display: flex;
  flex-direction: column;
  min-width: min(500px, 100%);
  /* Graph panels expand in-place, so let the whole thing scroll rather than
     clipping the chart. Horizontal scroll catches narrow viewports where the
     row-action button cluster won't fit even in the wide flight modal. */
  max-height: 80vh;
  max-height: 80dvh;
  overflow: auto;
`,Ar=l.div`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
`,zr=l.button`
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
`,Le=l.button`
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
`,Tr=l.button`
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
`,Er=l.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-section);
  padding-bottom: var(--inset-toolbar-bottom);
  margin-bottom: var(--gap-toolbar);
  border-bottom: 1px solid var(--color-border-subtle);
`,$e=l.span`
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
`,De=l.tr`
  background: ${({$current:e})=>e?"var(--color-go-status)":"transparent"};
  &:hover { background: var(--color-surface-raised); }
`,I=l.td`
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
`,Dr=l.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  font-size: var(--font-size-lg);
  padding: var(--inset-glyph);
  &:hover { color: var(--color-nogo-text); }
`,me=l.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
`,se=l.button`
  background: var(--color-tag-dark-brown-bg);
  border: 1px solid var(--color-nogo-muted);
  color: var(--color-tag-red-fg);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { background: var(--color-nogo-muted); }
`,ae=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-text-primary); }
`,Ur=l.div`
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
`,Pr=l.th`
  width: 28px;
  padding: var(--inset-surface);
  border-bottom: 1px solid var(--color-border-subtle);
`,pe=l.input.attrs({type:"checkbox"})`
  cursor: pointer;
  margin: 0;
`,Ir=l.th`
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
`,Gr=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  cursor: pointer;
  user-select: none;
`,_r=l.span`
  color: var(--color-nogo-muted);
`,Vr=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-dim);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,qr=new dt({name:"MissionHistorySource full-history rebuilds/min",threshold:20,windowMs:6e4,unit:"rebuilds"});class Jn{constructor(t){this.missionStore=t}id="missionHistory";name="Mission History";status="connected";flightListSubscribers=new mt;historyCache=new Map;changesInOrder=new Map;async connect(){await this.pruneToKeepCount()}disconnect(){}schema(){return Ye()}subscribe(t,r){return()=>{}}onStatusChange(t){return()=>{}}configSchema(){return[]}configure(t){}getConfig(){return{}}async queryRange(t,r,n,o){if(!o)return{t:[],v:[]};const a=bt(t);if(!a)return{t:[],v:[]};const c=await this.getFullHistoryStore(o);if(!c)return{t:[],v:[]};const m=c.isDerivedTopic(a)?c.sampleDerivedRange(a,r,n):c.sampleRange(a,r,n);return m?{t:m.map(p=>p.validAt),v:m.map(p=>p.payload)}:{t:[],v:[]}}async listFlights(){return(await this.missionStore.listMissions()).map(Q)}async getFlight(t){const r=await this.missionStore.getMissionMeta(t);return r?Q(r):null}async saveMission(t){await this.missionStore.saveMission(t),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.meta.id)}async saveMissionPart(t,r,n){await this.inOrder(t.id,()=>this.missionStore.saveMissionPart(t,r,n)),this.historyCache.delete(t.id),this.flightListSubscribers.fire(),await this.pruneToKeepCount(t.id)}async pruneToKeepCount(t){const r=He();if(!(r<=0))try{await this.pruneFlightsKeepLatest({keepCount:r,keepId:t})}catch(n){ye.warn("[MissionHistorySource] keep latest could not prune",{err:String(n)})}}async exportFlight(t){return(await this.missionStore.getMissionFixture(t))?.fixture??{frames:[]}}async deleteFlight(t){await this.missionStore.deleteMission(t),this.historyCache.delete(t),this.flightListSubscribers.fire()}async clearAllFlights(){await this.missionStore.clearAllMissions(),this.historyCache.clear(),this.flightListSubscribers.fire()}async setFlightStarred(t,r){const n=await this.missionStore.getMissionMeta(t);!n||!!n.starred===r||(await this.missionStore.updateMissionMeta(t,{starred:r}),this.flightListSubscribers.fire())}async setFlightEndReason(t,r){await this.inOrder(t,async()=>{const n=await this.missionStore.getMissionMeta(t);if(!n){ye.warn("[MissionHistorySource] end reason for a mission not stored",{id:t});return}n.endReason===void 0&&(await this.missionStore.updateMissionMeta(t,{endReason:r}),this.flightListSubscribers.fire())})}inOrder(t,r){const n=this.changesInOrder.get(t),o=n?n.then(r,r):r(),a=o.catch(()=>{});return this.changesInOrder.set(t,a),a.then(()=>{this.changesInOrder.get(t)===a&&this.changesInOrder.delete(t)}),o}async addChapter(t,r){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const a={id:r.id??(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`ch-${Date.now()}-${Math.random().toString(36).slice(2,8)}`),label:r.label,startMs:r.startMs,endMs:r.endMs},c=[...n.chapters??[],a];return await this.missionStore.updateMissionMeta(t,{chapters:c}),this.flightListSubscribers.fire(),Q({...n,chapters:c})}async updateChapter(t,r,n){const o=await this.missionStore.getMissionMeta(t);if(!o)return null;const a=(o.chapters??[]).map(c=>c.id===r?{...c,...n}:c);return await this.missionStore.updateMissionMeta(t,{chapters:a}),this.flightListSubscribers.fire(),Q({...o,chapters:a})}async removeChapter(t,r){const n=await this.missionStore.getMissionMeta(t);if(!n)return null;const o=(n.chapters??[]).filter(a=>a.id!==r);return await this.missionStore.updateMissionMeta(t,{chapters:o}),this.flightListSubscribers.fire(),Q({...n,chapters:o})}async pruneFlightsKeepLatest(t){const r=await this.missionStore.pruneMissionsKeepLatest(t);for(const n of r)this.historyCache.delete(n);return r.length>0&&this.flightListSubscribers.fire(),r}onFlightListChange(t){return this.flightListSubscribers.add(t)}evictFullHistoryStore(t){t?this.historyCache.delete(t):this.historyCache.clear()}async getFullHistoryStore(t){const r=this.historyCache.get(t);if(r)return r;const n=(async()=>{const o=await this.missionStore.getMissionFixture(t);if(!o)throw new Error(`mission fixture not found: ${t}`);return qr.record(),At(o.fixture)})();this.historyCache.set(t,n);try{return await n}catch{this.historyCache.delete(t);return}}}function Q(e){const t=Math.max(0,(e.lastFrameUt-e.firstFrameUt)*1e3);return{id:e.id,vesselName:e.vesselName,launchName:e.launchName,launchedAt:e.launchedAt,lastSampleAt:e.launchedAt+t,lastMissionTime:e.lastFrameUt-e.firstFrameUt,sampleCount:e.frameCount,starred:e.starred,chapters:e.chapters,outcome:void 0,endReason:e.endReason,evaKerbals:e.evaKerbals,firstFrameUt:e.firstFrameUt,lastFrameUt:e.lastFrameUt,firstValidUt:e.firstValidUt,lastValidUt:e.lastValidUt}}function Ze(e){const t=new Set(e.parts.map(o=>Number(o.id))),r=e.parts.map(Wr),n=r.find(o=>o.parentFlightId==null)??r.find(o=>!t.has(o.parentFlightId));for(const o of r)o.parentFlightId!=null&&!t.has(o.parentFlightId)&&(o.parentFlightId=n&&n!==o?n.flightId:null);return{topologySeq:e.parts.length,rootFlightId:n?n.flightId:0,parts:r}}function Be(e){return e?[e.x.magnitude,e.y.magnitude,e.z.magnitude]:void 0}function Wr(e){return{flightId:Number(e.id),persistentId:Number(e.id),parentFlightId:e.parentId!=null?Number(e.parentId):null,fuelLineTarget:e.fuelLineTargetId!=null?Number(e.fuelLineTargetId):null,name:e.name,title:e.title,manufacturer:"",category:e.category,categoryOrdinal:e.categoryOrdinal??null,inverseStage:e.inverseStage??null,crewCapacity:0,maxTemp:e.maxTemp?.magnitude??null,crashTolerance:0,dryMass:e.dryMass?.magnitude??null,orgPos:[D(e.position.x),D(e.position.y),D(e.position.z)],up:Be(e.up),forward:Be(e.forward),bounds:{size:{x:D(e.bounds.size.x),y:D(e.bounds.size.y),z:D(e.bounds.size.z)},center:e.bounds.center?{x:D(e.bounds.center.x),y:D(e.bounds.center.y),z:D(e.bounds.center.z)}:void 0,hull:tn(e.bounds.hull)},modules:e.modules}}function Yr(e){return e.currentTemp==null?null:{temperature:Se(e.currentTemp.magnitude),maxTemperature:e.maxTemp==null?null:Se(e.maxTemp.magnitude),temperatureK:e.currentTemp.magnitude,maxTemperatureK:e.maxTemp?.magnitude??null}}function Jr(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Yr(r));return t}function Zr(e){const t={};for(const[r,n]of Object.entries(e.resources))t[r]={amount:n.amount?.magnitude??null,maxAmount:n.maxAmount?.magnitude??null,...n.flow!=null?{flow:n.flow.magnitude}:{},...n.nominalFlow!=null?{nominalFlow:n.nominalFlow.magnitude}:{},...n.unratedProcess===!0?{unratedProcess:!0}:{}};return t}function Qe(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Zr(r));return t}function Qr(e){return{type:e.type,state:e.state,...e.tracking!=null?{tracking:e.tracking}:{},...e.flameout!=null?{flameout:e.flameout}:{}}}function Xr(e){return{seq:e.moduleStates.length,modules:e.moduleStates.map(Qr)}}function en(e){const t=new Map;if(!e)return t;for(const r of e.parts)t.set(Number(r.id),Xr(r));return t}function D(e){return e.magnitude}function tn(e){const t=[];for(const{points:r}of e??[]){if(r.length<9||r.length%3!==0)continue;const n=[];for(let o=0;o<r.length;o+=3)n.push({x:D(r[o]),y:D(r[o+1]),z:D(r[o+2])});t.push(n)}return t.length>0?t:void 0}function Xe(e){return Array.from(new TextEncoder().encode(e),t=>/[A-Za-z0-9_-]/.test(String.fromCharCode(t))?String.fromCharCode(t):`%${t.toString(16).toUpperCase().padStart(2,"0")}`).join("")}function Zn(e,t){return`spaceCenter.craft.${e}.${Xe(t)}.parts`}function Qn(e,t){const r=Xe(t),n=Ge(`spaceCenter.craft.${e}.${r}.parts`),o=n.state==="observed"||n.state==="held"?n.value:void 0;return h.useMemo(()=>{if(!o)return;const a=pt("CraftFileParts",structuredClone(o));return{topology:Ze(a),resourcesByFlightId:Qe(a)}},[o])}const rn=[];function nn(e){const t=[le(e.dvRadial,0),le(e.dvNormal,0),le(e.dvPrograde,0)];return{id:e.id,UT:e.ut.magnitude,deltaV:t,frame:e.frame??null,deltaVMagnitude:e.dvTotal?.magnitude??Math.hypot(t[0],t[1],t[2]),ignitionUt:e.ignitionUt?.magnitude??null,cutoffUt:e.cutoffUt?.magnitude??null,orbitPatches:e.patches??[]}}function Xn(){const e=Ge("vessel.maneuver"),t=e.state==="observed"||e.state==="held"?e.value.nodes:void 0;return h.useMemo(()=>!Array.isArray(t)||t.length===0?rn:t.map(nn),[t])}function eo(e){const t=ge("vessel.parts"),r=t.state==="observed"||t.state==="held"?t.value:void 0,n=h.useMemo(()=>Jr(r),[r]),o=h.useMemo(()=>Qe(r),[r]),a=h.useMemo(()=>en(r),[r]),c=[...e].sort((m,p)=>m-p).join(",");return h.useMemo(()=>{const m=c.length===0?[]:c.split(",").map(Number),p=new Map;for(const g of m)p.set(g,{thermal:n.get(g)??null,resources:o.get(g)??{},partState:a.get(g)});return p},[c,n,o,a])}const Oe=Object.freeze({status:"none"}),on={t:[],readings:[]};function et(e){return e==="recorded"||e==="last-before-blackout"?e:void 0}function sn(e){return e!==null&&typeof e=="object"&&"magnitude"in e}function an(e,t){if(sn(e))return{value:e,...t};if(typeof e=="number")return{value:X(t.lo.unit,e),...t}}function ln(e){const t=Wt(e);if(t===void 0)return on;const r=new Map;for(const a of e.spans??[]){const c=et(a.status);if(c!==void 0)for(let m=a.from;m<=a.to;m++)r.set(m,c)}let n;const o=e.t.map((a,c)=>{const m=X("ut",a),p=t.payloads[c],g=t.modelled.get(c);if(g!==void 0){const w={status:"available",modelled:p,atUt:m,beyondReceived:!0,basis:g.basis,band:g.band?an(p,g.band):void 0};return n===void 0?{state:"pending",reckoning:w}:{state:"held",value:n.payload,asOfUt:n.at,grade:"held",reckoning:w}}n={payload:p,at:m};const y=r.get(c);return y!==void 0?{state:"held",value:p,asOfUt:m,grade:y,reckoning:Oe}:{state:"observed",value:p,atUt:m,reckoning:Oe}});return{t:e.t,readings:o,basis:e.basis,breaks:e.breaks,bridges:e.bridges,windowEndAt:e.windowEndAt,interpolation:e.interpolation}}function to(e,t){const r=rr(Tt(e),t);return h.useMemo(()=>ln(r),[r])}function cn(e,t,r,n){if(n===void 0)return null;if(t!==null&&t.status===n)return t.to=r,t;const o={from:r,to:r,status:n};return e.push(o),o}function dn(e,t,r,n,o){if(n===void 0)return null;if(t!==null&&t.basis===n&&t.bandKind===o?.kind)return t.to=r,o!==void 0&&(t.bandLo?.push(o.lo),t.bandHi?.push(o.hi)),t;const a=o!==void 0?{from:r,to:r,basis:n,bandLo:[o.lo],bandHi:[o.hi],bandKind:o.kind}:{from:r,to:r,basis:n};return e.push(a),a}function un(e){const t=te(e);return typeof t=="number"?t:Number.NaN}function mn(e){const[t,r]=We(e?.lo,e?.hi);if(!(e===void 0||t===void 0||r===void 0))return{lo:t,hi:r,kind:e.kind}}function ro(e){const t=[],r=[],n={t:[],v:[],basis:e.basis,breaks:[],spans:t,reckoned:r,bridges:[],windowEndAt:e.windowEndAt,interpolation:e.interpolation},o=new Set(e.breaks??[]),a=new Map((e.bridges??[]).map(y=>[y.to,y])),c=new Map;let m=null,p=null,g=!1;for(let y=0;y<e.t.length;y++){o.has(y)&&(g=!0);const w=e.readings[y],A=w.reckoning.status==="available"?w.reckoning:void 0,T=un(A?A.modelled:w.value);if(Number.isNaN(T))continue;const b=n.t.length,M=g&&b>0;M&&n.breaks.push(b),g=!1,c.set(y,b);const z=a.get(y);z!==void 0&&!M&&c.get(y-1)===b-1&&z.v.every(Number.isFinite)&&n.bridges.push({...z,to:b}),n.t.push(e.t[y]),n.v.push(T);const R=A===void 0&&w.state==="held"?et(w.grade):void 0;m=cn(t,m,b,R),p=dn(r,p,b,A?.basis,mn(A?.band))}return n}function no(){const e=ge("vessel.parts"),t=e.state==="observed"||e.state==="held"?e.value:void 0;return h.useMemo(()=>t?Ze(t):void 0,[t])}function oo(){const e=_e(),t=h.useSyncExternalStore(c=>e.subscribe(c),()=>e.getSnapshot());if(xt(),!t.active||!t.meta)return null;const r=t.meta,n=e.cursorUt(),o=Math.max(0,r.lastFrameUt-r.firstFrameUt),a=Math.max(0,n-r.firstFrameUt);return s.jsxs(pn,{role:"region","aria-label":"Replay controls",children:[s.jsxs(Ie,{children:[s.jsx(gn,{type:"button",onClick:()=>t.playing?e.pause():e.play(),"aria-label":t.playing?"Pause replay":"Play replay",children:t.playing?"❚❚":"▶"}),s.jsxs(hn,{children:["REPLAY: ",s.jsx(fn,{children:r.vesselName||"Unnamed vessel"})]})]}),s.jsxs(vn,{children:[s.jsx(Ke,{children:Pe(a)}),s.jsx(bn,{type:"range",min:r.firstFrameUt,max:r.lastFrameUt,step:.1,value:n,onChange:c=>e.seekTo(Number(c.target.value)),"aria-label":"Seek to position"}),s.jsx(Ke,{children:Pe(o)})]}),s.jsxs(Ie,{children:[s.jsxs(xn,{value:String(t.rate),onChange:c=>e.setRate(Number(c.target.value)),"aria-label":"Playback rate",children:[s.jsx("option",{value:"0.5",children:"0.5×"}),s.jsx("option",{value:"1",children:"1×"}),s.jsx("option",{value:"2",children:"2×"}),s.jsx("option",{value:"5",children:"5×"}),s.jsx("option",{value:"10",children:"10×"}),s.jsx("option",{value:"50",children:"50×"})]}),s.jsx(yn,{type:"button",onClick:()=>e.stop(),"aria-label":"Exit replay and return to live data",children:"Exit replay"})]})]})}function Pe(e){if(!Number.isFinite(e)||e<0)return"00:00";const t=Math.floor(e),r=Math.floor(t/3600),n=Math.floor(t%3600/60),o=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`}const pn=l.div`
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
`,Ie=l(wt).attrs({justify:"start"})`
  flex-shrink: 0;
`,hn=l.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
`,fn=l.span`
  color: var(--color-tag-purple-fg);
  font-weight: 700;
  margin-left: var(--gap-trailing-figure);
`,gn=l.button`
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
`,vn=l.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,bn=l.input`
  flex: 1;
  min-width: 0;
  accent-color: var(--color-tag-purple-fg);
`,Ke=l.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  white-space: nowrap;
`,xn=l.select`
  background: var(--color-surface-app);
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
`,yn=l.button`
  background: none;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--font-size-compact);
  padding: var(--inset-control);
  border-radius: var(--radius-regular);
  &:hover { color: var(--color-tag-red-fg); border-color: var(--color-nogo-muted); }
`,Sn={"vessel.flight":{name:"Active vessel",common:!0,fields:{altitudeAsl:"Altitude (sea level)",altitudeTerrain:"Altitude (above terrain)",dynamicPressureKPa:"Dynamic pressure",gForce:"G-force",mach:"Mach number"}},"vessel.orbit":{name:"Active vessel orbit",common:!0,fields:{sma:"Semi-major axis",ecc:"Eccentricity",inc:"Inclination",argPe:"Argument of periapsis",lan:"Longitude of ascending node"}},"vessel.propulsion":{name:"Active vessel propulsion",common:!0},"vessel.resources":{name:"Active vessel resources",common:!0},"vessel.orbit.truth":{name:"Active vessel orbit (true)"},"vessel.attitude":{name:"Active vessel attitude"},"vessel.surface":{name:"Active vessel surface"},"vessel.thermal":{name:"Active vessel heat"},"vessel.landing":{name:"Active vessel landing"},"vessel.maneuver":{name:"Active vessel maneuver"},"vessel.target":{name:"Active vessel target"},"vessel.dock":{name:"Active vessel docking"},"vessel.structure":{name:"Active vessel structure"},"vessel.comms":{name:"Active vessel antenna"},"vessel.control":{name:"Active vessel controls"},"vessel.light":{name:"Active vessel light"},"vessel.crew":{name:"Active vessel crew"},"vessel.identity":{name:"Active vessel identity"},"vessel.physics.mode":{name:"Active vessel physics"},"crash.lastCrash":{name:"Last crash",fields:{altitude:"Altitude at impact"}},"dv.summary":{name:"Delta-v"},"dv.stages":{name:"Delta-v by stage"},"parts.power":{name:"Electric power"},"time.warp":{name:"Time warp"},"time.calendar":{name:"Game clock"},"comms.signal":{name:"Signal"},"comms.delay":{name:"Signal delay"},"comms.link":{name:"Comms link"},"comms.connectivity":{name:"Comms connectivity"},"comms.nextLoss":{name:"Next signal loss"},"comms.occlusion":{name:"Signal occlusion"},"comms.journey":{name:"Comms journey"},"comms.control":{name:"Comms control"},"comms.contacts":{name:"Comms contacts"},"comms.degrade":{name:"Comms degradation"},"comms.commandCentre":{name:"Command centre comms"},"commandCentre.roster":{name:"Command centres"},"commandCentre.unreachable":{name:"Unreachable command centres"},"flight.current":{name:"Current flight"},"flight.ended":{name:"Ended flight"},"flight.started":{name:"Started flight"},"flight.vesselChanged":{name:"Vessel change"},"eva.crew":{name:"Crew on EVA"},"science.lab":{name:"Science lab"},"science.sensors":{name:"Science sensors"},"science.instruments":{name:"Science instruments"},"science.experiments":{name:"Science experiments"},"science.experimentBreakdown":{name:"Science experiment breakdown"},"science.transmissions":{name:"Science transmissions"},"science.archive":{name:"Science archive"},"isru.converters":{name:"Converters"},"isru.drills":{name:"Drills"},"robotics.servos":{name:"Servos"},"robotics.available":{name:"Robotics"},"recovery.lastSummary":{name:"Last recovery"},"recovery.hasRecent":{name:"Recent recovery"},"crash.hasRecent":{name:"Recent crash"},"career.mode":{name:"Career mode"},"missions.active":{name:"Active missions"},"surface.sites":{name:"Surface sites"},"spaceCenter.astronautComplex":{name:"Astronaut complex"},"spaceCenter.crewRoster":{name:"Crew roster"},"spaceCenter.launchSites":{name:"Launch sites"},"spaceCenter.partsAvailable":{name:"Parts available"},"spaceCenter.pois":{name:"Points of interest"},"spaceCenter.savedShips":{name:"Saved ships"},"spaceCenter.scene":{name:"Space centre scene"},"alarm.activeList":{name:"Alarms"},"alarm.game.list":{name:"Game alarms"},"alarm.scet.fired":{name:"Fired alarm"},"alarm.scet.topics":{name:"Alarm topics"},"game.dlc":{name:"Game DLC"},"ksp.revertAvailability":{name:"Revert"},"system.frame":{name:"System frame"}};function wn(e){return Y(e.split(".")[0])}function so(e,t=new Set(J())){const r=Sn[e.topic];if(r===void 0&&t.has(e.topic)){const a=e.topic.split(".").slice(1).join("."),c=Y(e.fieldPath),m=a===""?c:`${Y(a)} › ${c}`,p=wn(e.topic);return{group:p,label:m,summary:`${p} › ${m}`,common:!1}}const n=r?.name??Y(e.topic),o=r?.fields?.[e.fieldPath]??Y(e.fieldPath);return{group:n,label:o,summary:`${n} › ${o}`,common:r?.common===!0}}export{eo as A,Wn as B,to as C,Je as D,no as E,Yn as F,_n as G,Jn as M,oo as R,We as a,Qe as b,en as c,Ze as d,Xe as e,Zn as f,we as g,qn as h,ie as i,Ye as j,Vn as k,Y as l,ir as m,cr as n,te as o,ro as p,un as q,Gn as r,so as s,Hn as t,Xn as u,Kn as v,Et as w,Qn as x,rr as y,dr as z};
