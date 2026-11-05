import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./ext-react-C0MU9AHG.js";import p,{css as oe,keyframes as an}from"./ext-styled-components-DAuodqsN.js";import{t as sn,e as ln,h as cn}from"./TinyEssentials-D8Aooexa.js";import{E as Ct,bK as $e,n as un,F as Pt,m as Ge,y as Ft,aT as dn,bF as Ve,bL as fn,$ as Ke,ab as le,bM as pn,ac as Se,a7 as qe,b0 as hn,a_ as mn,b1 as gn,a$ as vn,bN as bn,bO as xn,bq as wn,bI as yn,bP as Lt,bJ as Ze,g as $n,ad as he,e as Oe,Z as _n,aG as jn,ak as Je,bn as ze,by as kn,bx as Mn,aw as We,bQ as Rn,b9 as Sn,V as En,l as Tn,b8 as In,ae as Dt,bv as An,bg as Nn,bD as Qe,aC as Cn,bR as Pn,bE as et,bm as tt,af as Fn}from"./ModalSaveBar-DpfR7wY-.js";import{aJ as Ae,b6 as nt,bh as Ln,aY as Ie,aj as Dn,c7 as On,cI as zn,b4 as Xe,l as Bn,cn as ge,c6 as Ot}from"./view-clock-formula-4WTGODXm.js";import"./ksp-enum-names-nIH28rrj.js";import"./logger-2_QM1wvD.js";import"./screen-kDJ54wAz.js";import{Z as _e,N as ye,_ as zt,$ as Hn,G as rt,V as ve,I as Un,a0 as Gn,i as Ee,n as Be,k as Wn,Y as Bt,T as Xn,c as Yn,g as Vn,y as ot,E as at}from"./contributionsRead-BQvnqw2m.js";import{a as Kn,r as qn,b as Zn}from"./Notice-cttvPCSb.js";import{r as Jn}from"./ext-react-dom-DCF8ZnaJ.js";import{l as Qn}from"./capability-lock-BwaTPFrR.js";import"./lagrange-SHE7jYTQ.js";import"./use-transmissions-Bts4YJmJ.js";import{r as er}from"./control-frame-to-read-frame-BiHSSEjn.js";function _s({items:e,onSelect:t,onDismiss:n,"aria-label":a,style:o,header:s,footer:c,emptyLabel:u="No actions",otherLabel:d="Other"}){const f=l.useRef(null),m=l.useId(),[b,k]=l.useState(0),x=sn(e,d),i=x.flatMap(([,v])=>v),_=i.length;l.useEffect(()=>{const v=f.current;if(!v)return;if(_===0){v.focus();return}v.querySelectorAll('[role="menuitem"]')[b]?.focus()},[b,_]),l.useEffect(()=>{const v=w=>{const M=f.current;M&&w.target instanceof Node&&!M.contains(w.target)&&n()};return document.addEventListener("pointerdown",v),()=>document.removeEventListener("pointerdown",v)},[n]);const N=l.useCallback(v=>{if(v.key==="Escape"){v.stopPropagation(),n();return}if(v.key==="Tab"){n();return}if(i.length!==0)switch(v.key){case"ArrowDown":v.preventDefault(),k(w=>Math.min(w+1,i.length-1));break;case"ArrowUp":v.preventDefault(),k(w=>Math.max(w-1,0));break;case"Home":v.preventDefault(),k(0);break;case"End":v.preventDefault(),k(i.length-1);break}},[i.length,n]);return r.jsxs(tr,{ref:f,role:_>0?"menu":void 0,"aria-label":a,onKeyDown:N,tabIndex:-1,style:o,children:[s,i.length===0?r.jsx(Ct,{layout:"fill",children:u}):x.map(([v,w],M)=>r.jsxs("div",{...x.length>1?{role:"group","aria-labelledby":`${m}-group-${M}`}:{role:"none"},children:[x.length>1?r.jsx(nr,{id:`${m}-group-${M}`,"aria-hidden":"true",children:v}):null,w.map(R=>{const y=i.indexOf(R);return r.jsx(rr,{type:"button",role:"menuitem","aria-label":R["aria-label"],"aria-disabled":R.disabled,$disabled:R.disabled,tabIndex:y===b?0:-1,onFocus:()=>k(y),onClick:()=>{R.disabled||t(R.key)},children:R.label},R.key)})]},v)),c]})}const tr=p.div`
  position: absolute;
  min-width: 180px;
  max-width: 280px;
  max-height: 280px;
  overflow-y: auto;
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  padding: var(--inset-menu-list);
  z-index: var(--z-dropdown);
`,nr=p.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,rr=p.button`
  display: block;
  width: 100%;
  text-align: left;
  border: none;
  background: transparent;
  color: var(--color-text-primary);
  font: inherit;
  font-size: var(--font-size-compact);
  padding: var(--inset-menu-item);
  cursor: pointer;

  &:hover[aria-disabled="false"],
  &:hover:not([aria-disabled]) {
    background: var(--color-border-subtle);
  }

  ${$e}
  /* The background marks the focused row where the ring meets the menu border. */
  &:focus-visible {
    background: var(--color-border-subtle);
  }

  &[aria-disabled="true"] {
    color: var(--color-text-faint);
    cursor: default;
  }

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`;function js({settings:e,values:t,onChange:n}){return e.length===0?null:r.jsx(r.Fragment,{children:e.flatMap(a=>a.fields.map(o=>{const c=t?.[a.namespace]?.[o.key]??o.default,u=o.label??o.key,d=`augment-setting-${a.namespace}-${o.key}`;return o.type===Ae.Bool?r.jsx(un,{children:r.jsx(ln,{checked:!!c,onChange:f=>n(a.namespace,o.key,f),label:u})},`${a.namespace}.${o.key}`):r.jsxs(Pt,{children:[r.jsx(Ge,{htmlFor:d,children:u}),r.jsx(Ft,{id:d,type:o.type===Ae.Number?"number":"text",value:c===void 0?"":String(c),onChange:f=>{const m=f.target.value;if(o.type!==Ae.Number){n(a.namespace,o.key,m);return}if(m===""){n(a.namespace,o.key,void 0);return}const b=Number(m);Number.isFinite(b)&&n(a.namespace,o.key,b)}})]},`${a.namespace}.${o.key}`)}))})}function ks({fallback:e,gap:t="related-dense",children:n,...a}){return r.jsxs(r.Fragment,{children:[r.jsx(Ht,{$gap:t,...a,children:n}),r.jsx(or,{children:e})]})}const Ht=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>_e[e]};
`,or=p.div`
  ${Ht}:not(:empty) + & {
    display: none;
  }
`,st=12,ke=8;function ar(e,t,n){return{left:it(e.x,t.w,n.w),top:it(e.y,t.h,n.h)}}function it(e,t,n){const a=e+st;if(a+t<=n-ke)return a;const o=e-st-t;return o>=ke?o:Math.max(ke,n-ke-t)}const sr="–";function Ms({min:e,max:t,wrapsAt:n,className:a,...o}){const s=nt(e),c=nt(t);return e==null||t==null||s===null||c===null?r.jsx(Te,{className:a,children:ye}):n!==void 0&&Math.abs(c-s)>=n/2?r.jsx(Te,{className:a,children:"(precesses)"}):r.jsx(dn,{of:e.unit,separate:!0,...o,children:r.jsx(ir,{min:e,max:t,className:a})})}function ir({min:e,max:t,className:n}){return Ve(e),Ve(t),fn(e)?r.jsx(Te,{className:n,children:r.jsxs(cr,{children:[r.jsx("span",{"aria-hidden":"true",children:"~"}),r.jsx(Ke,{children:"approximately "}),r.jsx(le,{value:e})]})}):r.jsxs(Te,{className:n,children:[r.jsx(le,{value:e}),r.jsx(lr,{"aria-hidden":"true",children:sr}),r.jsx(Ke,{children:" to "}),r.jsx(le,{value:t})]})}const Te=p.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,lr=p.span`
  color: var(--color-text-faint);
`,cr=p.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`,ur={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function Rs({surface:e,pad:t,bordered:n=!1,radius:a,children:o,...s}){return r.jsx(dr,{$surface:e,$pad:t,$bordered:n,$radius:a,...s,children:o})}const dr=p.div`
  ${({$surface:e})=>e&&`background: ${ur[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${zt[e]};`}
  ${({$pad:e})=>e&&`padding: var(${Hn[e]});`}
`,Ss=l.forwardRef(function({equalWidth:t=!0,gap:n,children:a,...o},s){return r.jsx(fr,{ref:s,$equalWidth:t,$gap:n,...o,children:a})}),fr=p.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?_e[e]:"var(--gap-related)"};
`,pr="3px",hr=p(Zn)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${rt(e)};`:""}
  ${({$identityColor:e})=>e?`
    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: var(--size-mark);
      height: ${pr};
      background: ${e};
      border-radius: var(--radius-regular) var(--radius-regular) 0 0;
    }
  `:""}
  ${({$dimmed:e,$tone:t})=>e?`
    --color-text-primary: var(--color-text-muted);
    color: var(--color-text-muted);
    ${t?`border-left-color: color-mix(in srgb, ${rt(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function mr({tone:e,dimmed:t,identityColor:n,standalone:a,...o}){return qn(hr,{...o,$tone:e,$dimmed:t,$identityColor:n,$standalone:a})}const Es=Object.assign(mr,Kn);function gr(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const Ts=l.forwardRef(function({label:t,icon:n,type:a,...o},s){return r.jsx("button",{ref:s,type:a??"button","aria-label":t,...o,children:r.jsx(Ut,{label:t,icon:n})})});function Ut({label:e,icon:t}){const n=l.useRef(null),a=l.useRef(null),[o,s]=l.useState(!0);return l.useLayoutEffect(()=>{const c=n.current,u=a.current;if(!c||!u)return;const d=()=>{s(u.scrollWidth<=c.clientWidth)};if(d(),typeof ResizeObserver>"u")return;const f=new ResizeObserver(d);return f.observe(c),f.observe(u),()=>f.disconnect()},[]),r.jsxs(vr,{ref:n,children:[r.jsx(br,{ref:a,"aria-hidden":"true",children:e}),o?r.jsx(xr,{"aria-hidden":"true",children:e}):r.jsx(wr,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const vr=p.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,br=p.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,xr=p.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,wr=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,yr=p.span`
  display: inline-grid;
  justify-items: center;
`,$r=p.span`
  grid-area: 1 / 1;
`,_r=p.span`
  grid-area: 1 / 1;
  visibility: hidden;

  &::before {
    content: attr(data-word);
  }
`;function jr({shown:e,reserve:t}){return r.jsxs(yr,{children:[[...new Set(t)].map(n=>r.jsx(_r,{"data-word":n,"aria-hidden":"true"},n)),r.jsx($r,{children:e})]})}const Ne=e=>ve(e),ie={contact:{"in-contact":()=>"In contact","loss-in":e=>`LOS in ${Ne(e)}`,"back-in":e=>`No contact, back in ${Ne(e)}`,none:e=>e==="unpowered"?"No contact, no electric charge aboard":"No contact"},delay:{held:e=>`${Ne(e)} signal delay`,absent:()=>"no signal path"},arrival:{expected:"Expected to arrive","likely-lost":"Likely lost"},sends:{now:()=>"Sends now",held:(e,t)=>t===void 0?`Held until ${ve(e)}`:`Held until ${ve(e)}, arrives ${ve(t)}`}};function kr(e){const{contact:t}=e,n=t.kind==="loss-in"||t.kind==="back-in"?ie.contact[t.kind](t.seconds):t.kind==="none"?ie.contact.none(t.reason):ie.contact[t.kind](),a=e.signalDelay===void 0?ie.delay.absent():ie.delay.held(e.signalDelay),o=e.sends==="now"&&e.arrival==="expected"?ie.sends.now():e.sends==="held"&&e.heldUntilUt!==void 0?ie.sends.held(e.heldUntilUt,e.arrivesUt):ie.arrival[e.arrival];return`${n} · ${a}
${o}`}function Mr(e){if(e!==void 0)return e.arrival==="likely-lost"?"at-risk":e.sends==="held"?"held":void 0}function Rr(e,t,n){if(e)return"sent";if(n.some(s=>s.held===!0))return"held";const a=t===void 0||t.phase==="in-flight"||t.phase==="idle"?null:t.requestId;return n.filter(s=>s.id!==a&&(s.predictedPhase==="awaiting-reply"||s.predictedPhase==="due")).length%2===1?"modelled":null}function Sr(e,t){return t==="modelled"&&typeof e=="boolean"?!e:e}function Er(e,t){return e===void 0||e.phase==="idle"?!1:e.phase==="in-flight"?!0:e.phase!=="confirmed"&&e.phase!=="found"?!1:t.some(n=>n.id===e.requestId)}function lt(e){if(e===null||typeof e!="object")return;const t="state"in e?e.state:"enabled"in e?e.enabled:void 0;return typeof t=="boolean"?t:void 0}function Gt(e,t){switch(t){case"held":return`${e} held until contact returns`;case"sent":return`${e} sent, not yet received`;case"modelled":return`${e} shown as predicted: the command should have reached the craft, and its reply is on its way back`;default:return null}}function Tr(e,t,n){if(t!=="held"&&t!=="modelled")return n;const a=Gt(e,t)??"";return{kind:t,caption:n===null?a:`${n.caption}. ${a}`}}function ct(e){try{return JSON.stringify(e)??""}catch{return null}}const ut="Not connected to the mod. Nothing can be sent",Ir=4e3,dt=8e3,Ar=500,be="SENT";function Wt(e,t){return e.gateFor?e.gateFor(t):e.gate}function Nr({handle:e,args:t,commandLabel:n,onConfirmed:a,toggle:o}){const[s,c]=l.useState("idle"),[u,d]=l.useState(null),[f,m]=l.useState(null),[b,k]=l.useState(!1),[x,i]=l.useState(!1),[_,N]=l.useState(0),[v,w]=l.useState(!1),M=l.useRef(null),R=e.streamDown===!0,y=Wt(e,t),A=o?.unavailable??null,G=y?.blocked===!0||A!==null,F=l.useRef(!0),B=l.useRef(0);l.useEffect(()=>(F.current=!0,()=>{F.current=!1}),[]);const H=e.founds,O=l.useRef(null),K=l.useRef(H?.length??0);l.useEffect(()=>{const $=H?.length??0,q=$>K.current;K.current=$;const Z=H?.[$-1],J=O.current;if(!q||!Z||J===null)return;const Q=Z.label!==void 0&&Z.label!==""&&J.label!==void 0&&Z.label!==J.label,X=Z.args!==void 0&&J.args!==void 0&&JSON.stringify(Z.args)!==JSON.stringify(J.args);Q||X||(O.current=null,m(Z),d(null),c("found"))},[H]),l.useEffect(()=>{if(s!=="armed")return;const $=setTimeout(()=>c("idle"),Ir);return()=>clearTimeout($)},[s]),l.useEffect(()=>{if(s!=="refused"&&s!=="lost"&&s!=="found")return;const $=setTimeout(()=>{c("idle"),d(null),O.current=null,m(null)},dt);return()=>clearTimeout($)},[s]),l.useEffect(()=>{if(!b)return;const $=setTimeout(()=>k(!1),dt);return()=>clearTimeout($)},[b]),l.useEffect(()=>{!G&&b&&k(!1)},[G,b]),l.useEffect(()=>{if(_===0)return;const $=setTimeout(()=>i(!1),Ar);return()=>clearTimeout($)},[_]);const D=l.useCallback(($=t,q=n)=>{const Z=B.current+1;B.current=Z,O.current=null,M.current=null,c("idle"),d(null),i(!0),N(Q=>Q+1),w(!0);const J=(Q,X)=>{!F.current||B.current!==Z||(d(X),c(Q),w(!1),Q!=="idle"&&i(!1))};e.send($,q?{label:q}:void 0).then(Q=>{J("idle",null),a?.(Q)},Q=>{const X=Ln(Q);if(X.kind==="lost"){O.current={args:$,label:q},J("lost",null);return}if(X.kind!=="refused"){J("idle",null);return}J("refused",{errorCode:X.errorCode,reason:X.reason,command:X.command,args:X.args,label:X.label??n,breach:X.breach,detail:X.detail})})},[e,t,n,a]),{hasUnconfirmed:h,hasFailure:T}=gr(e),S=e.status,I=v&&S?.phase==="in-flight"&&S.accepted!==!0&&(M.current===null||M.current===S.requestId),j=x||I;l.useEffect(()=>{v&&M.current===null&&S?.phase==="in-flight"&&(M.current=S.requestId)},[v,S]);const E=o?e.inFlight.filter(o.rows??(()=>!0)):[],z=o?Rr(j,S,E):null,C=o?Sr(o.state,z):void 0,W=l.useRef(void 0),V=Er(S,e.inFlight)&&W.current!==void 0?W.current:C,re=l.useCallback($=>{if(!R){if(G){k(!0);return}if(o){const q=o.args(V);if(q===void 0)return;W.current=lt(q),D(q);return}if(s==="refused"||s==="lost"||s==="found"){d(null),m(null),O.current=null,c("idle");return}if($){if(j)return;if(s!=="armed"){ae.current=ct(t),c("armed");return}}D()}},[s,j,R,G,D,t,o,V]),ae=l.useRef(null);l.useEffect(()=>{s==="armed"&&ct(t)!==ae.current&&c("idle")},[s,t]);const U=s==="refused"||s==="lost"||s==="found"?s:j?"sent":G?"blocked":s;return{phase:U,isSent:U==="sent",isArmed:U==="armed",isRefused:U==="refused",isLost:U==="lost",isFound:U==="found",isBlocked:U==="blocked",isOffline:R&&U!=="sent",isShowingReason:U==="blocked"&&b,refusalText:u?gn(u):A!==null?A:U==="blocked"&&y?vn({...y,label:y.label??n,args:y.args??t}):null,foundText:f?mn(f):null,lossText:U==="lost"?hn({args:t,label:n}):null,sendAs:($,q)=>{R||(W.current=lt($),D($,q))},toggleView:o?{shown:C,on:typeof C=="number"?C>0:C===!0,word:z==="sent"?o.sentWord??be:o.word(C),reserve:[...o.words,o.sentWord??be],confirmation:z,unavailable:A,marking:Tr(o.name,z,o.marking??null),sentence:Gt(o.name,z)}:null,hasUnconfirmed:h,hasFailure:T,press:re}}function Is({handle:e,args:t,commandLabel:n,label:a,confirmLabel:o,refusedLabel:s="Refused",lostLabel:c="No reply",foundLabel:u="Found",confirmAriaLabel:d,sentAriaLabel:f,blockedAriaLabel:m,pressed:b,variant:k="ghost",tone:x="neutral",icon:i,confirmIcon:_,onPressReady:N,size:v="md",confirmTone:w="go",onConfirmed:M,toggle:R,controller:y,disabled:A,title:G,"aria-label":F,...B}){const H=Nr({handle:e,args:t,commandLabel:n,onConfirmed:M,toggle:R}),{phase:O,isSent:K,isArmed:D,isRefused:h,isLost:T,isFound:S,isBlocked:I,isOffline:j,isShowingReason:E,refusalText:z,foundText:C,lossText:W,toggleView:Y,hasUnconfirmed:V,hasFailure:re,press:ae}=y??H,U=o!==void 0,$=n?`${n} sent, not yet received`:"Sent, not yet received";l.useEffect(()=>{if(!(!N||A))return N(()=>ae(U)),()=>N(null)},[N,A,ae,U]);const Z=K?be:h?s:T?c:S?u:E?z:D?o:a,J=i!==void 0&&typeof Z=="string",Q=J?r.jsx(Ut,{label:Z,icon:D?_??i:i}):Z,X=i===void 0&&typeof a=="string"&&(o===void 0||typeof o=="string")&&!h&&!T&&!S&&!E,ce=pn()&&e.railed===!0?null:h?z:T?W:S?C:null,de=b===!0||D||h,je=Cr({restTone:k==="primary"?x:"neutral",filled:de,isRefused:h,isFound:S,isArmed:D,confirmTone:w,tone:x});if(Y){const{marking:te,sentence:se}=Y,ue=Y.confirmation==="held"||Y.confirmation==="modelled",me=j?ut:(ue?null:se)??G;return r.jsxs(r.Fragment,{children:[r.jsx(Se,{text:me,children:r.jsx(cn,{type:"button",size:v,pressed:Y.on,disabled:A||Y.unavailable!==null,disabledReason:Y.unavailable??void 0,marked:te,"aria-label":F,"data-command-phase":O,"data-stream":j?"down":void 0,"data-unconfirmed":V?"true":void 0,"data-failed":re?"true":void 0,onClick:()=>ae(!1),...B,children:r.jsx(jr,{shown:Y.word,reserve:Y.reserve})})}),r.jsx(qe,{visuallyHidden:!0,children:ue?"":se??""})]})}const g=e.sendStatus,L=g===void 0?G:[G,kr(g)].filter(Boolean).join(`
`),P=j?[G,ut].filter(Boolean).join(`
`):L;return r.jsxs(r.Fragment,{children:[r.jsx(Se,{text:C??z??(K?$:P),children:r.jsx(Lr,{type:"button",$tone:je,$variant:k,$fit:J,$size:v,$pressed:de,$armed:D,$blocked:I,"aria-pressed":b,"aria-disabled":I||j||void 0,disabled:A,"data-unconfirmed":V?"true":void 0,"data-failed":re?"true":void 0,"data-command-phase":O,"data-stream":j?"down":void 0,"data-predicted":I?void 0:Mr(g),"data-gate":I?"blocked":Wt(e,t)?.undetermined?"undetermined":void 0,"aria-label":(h?z??void 0:T?W??void 0:S?C??F:I?m??z??F:K?f??$:D?d:F)??(J?Z:void 0),onClick:()=>ae(o!==void 0),"data-rest-label":X?a:void 0,"data-armed-label":X?typeof o=="string"&&o.length>be.length?o:be:void 0,...B,children:X?r.jsx(Fr,{children:Q}):Q})}),r.jsx(qe,{visuallyHidden:!0,children:ce})]})}function Cr(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const Pr=an`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,Fr=p.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,Lr=p(bn)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&oe`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Pr} 1s var(--ease-emphasis) infinite;
      }
    `}

  &:disabled {
    opacity: 0.5;
  }

  /* Dimmed toward the muted text token rather than faded, so the refusal reason stays readable; the warn border says the game refused. */
  ${({$blocked:e})=>e&&oe`
      background: transparent;
      border-style: dashed;
      border-color: var(--color-warn-mark);
      color: var(--color-text-muted);
      cursor: help;

      @media (hover: hover) {
        &:hover:not(:disabled) {
          border-color: var(--color-warn-mark);
          color: var(--color-warn-text);
        }
      }
    `}

  /* Both labels sit invisibly in the one grid cell with the face, so the box is as wide as the wider of them. */
  &[data-rest-label] {
    display: inline-grid;
    justify-items: center;
  }
  &[data-rest-label]::before,
  &[data-rest-label]::after {
    grid-area: 1 / 1;
    visibility: hidden;
    height: 0;
  }
  &[data-rest-label]::before {
    content: attr(data-rest-label);
  }
  &[data-rest-label]::after {
    content: attr(data-armed-label);
  }
`;function As({oneWaySeconds:e,delayReading:t,className:n}){const a=Ie("s",e);return r.jsxs(Dr,{className:n,role:"group","aria-label":"Signal delay",children:["one-way ~",r.jsx(le,{value:xn(a,t),...a.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const Dr=p.div`
  /* Non-growing: it shares the console's corner row, and its text is short by construction. */
  flex: 0 0 auto;
  padding: var(--inset-chip-readout);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  white-space: nowrap;
  color: var(--color-text-muted);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function Ns(e){const t=wn(),n=l.useId(),a=e!==null;l.useEffect(()=>{if(!(!t||!e))return t.register({id:n,...e})},[t,n,a]),l.useEffect(()=>{!t||!e||t.update(n,e)},[t,n,e])}function Cs({at:e,atAspect:t,narrow:n,wide:a,children:o,...s}){return r.jsx(zr,{$query:Or(e,t),$narrow:n,$wide:a,...s,children:o})}function Or(e,t){const n=[e===void 0?void 0:`(min-width: ${e}px)`,t===void 0?void 0:`(aspect-ratio >= ${t})`].filter(a=>a!==void 0);return n.length===0?void 0:n.join(" and ")}const zr=p.div`
  ${({$narrow:e})=>e}
  ${({$query:e,$wide:t})=>e===void 0?"":oe`
          @container ${e} {
            ${t}
          }
        `}
`;function Ps({slot:e,component:t,filter:n}){const a=Un(e),o=n?a.filter(n):a;return o.length===0?null:r.jsx(t,{entries:o})}function Br(e,t){return e.value!==void 0?r.jsx(le,{value:e.value(t)??null}):e.render(t)}function Fs({columns:e,rows:t,sections:n,rowKey:a,caption:o,empty:s,rowDetail:c,className:u}){const d=n??(t?[{id:"",title:null,rows:[...t]}]:[]),f=d.reduce((i,_)=>i+_.rows.length,0),[m,b]=l.useState(null),k=yn(m),x=Lt(m);return r.jsxs(Hr,{className:u,children:[r.jsx(Ur,{ref:b,tabIndex:x,children:r.jsxs(Gr,{children:[r.jsx(Wr,{children:o}),r.jsx("thead",{children:r.jsx("tr",{children:e.map(i=>r.jsx(Xr,{scope:"col",$align:i.align??"start",style:{width:i.width,minWidth:i.minWidth},children:i.header},i.key))})}),f===0&&s!==void 0&&r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx(Zr,{colSpan:e.length,children:s})})}),d.map(i=>r.jsxs("tbody",{children:[i.title!==null&&i.title!==void 0&&r.jsx("tr",{children:r.jsx(Yr,{scope:"rowgroup",colSpan:e.length,children:i.title})}),i.rows.map(_=>{const N=a(_),v=c?.(_),w=v!=null&&v!==!1&&v!=="";return r.jsxs(l.Fragment,{children:[r.jsx(Vr,{$hasDetail:w,children:e.map(M=>r.jsx(Kr,{as:M.rowHeader?"th":void 0,scope:M.rowHeader?"row":void 0,$align:M.align??"start",children:Br(M,_)},M.key))}),w?r.jsx("tr",{children:r.jsx(qr,{colSpan:e.length,children:v})}):null]},N)})]},i.id))]})}),r.jsx(Ze,{$position:"left",$visible:k.left}),r.jsx(Ze,{$position:"right",$visible:k.right})]})}const Hr=p.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Ur=p.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${$e}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Gr=p.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,Wr=p.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,Xr=p.th`
  text-align: ${({$align:e})=>e};
  position: sticky;
  top: 0;
  /* Local sibling ordering over its own rows, not a rung on the app ladder. */
  z-index: 1;
  background: var(--color-surface-panel);
  color: var(--color-text-faint);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
  padding: var(--inset-table-cell);
  border-bottom: 1px solid var(--color-border-subtle);
`,Yr=p.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,Vr=p.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,Kr=p.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,qr=p.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,Zr=p.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`;function Jr(e){const t=e.reason;switch(t){case"beyond-horizon":return e.resolvesByWaiting?"NOT YET COMPUTED":"CANNOT MODEL";case"under-physics":case"model-inapplicable":case"contested":case"insufficient-history":return"CANNOT MODEL";case"frame-unavailable":return"FRAME UNAVAILABLE";case"input-absent":return null;default:return t}}function Ls({declined:e,layout:t="inline"}){return r.jsx(Se,{text:e.note,focusable:!0,children:r.jsx(Ct,{role:"status",layout:t,children:Jr(e)??"NO DATA"})})}function Ds({label:e,children:t,"aria-label":n,className:a,variant:o="popover",panelHeight:s="cap",chevron:c=!0,asButton:u=!1,buttonSize:d="md",defaultOpen:f=!1}){const[m,b]=l.useState(f),k=l.useId(),x=l.useRef(null),[i,_]=l.useState(null),N=Lt(i),v=o==="inline"&&c,w=typeof e=="function"?e(m):e,M={ref:x,type:"button","aria-expanded":m,"aria-controls":k,"aria-label":n,onClick:()=>b(y=>!y)},R=r.jsxs(r.Fragment,{children:[w,v&&r.jsx(no,{$open:m,children:r.jsx($n,{size:"var(--icon-size-control)"})})]});return r.jsxs(Qr,{className:a,$variant:o,onKeyDown:y=>{y.key==="Escape"&&m&&(b(!1),x.current?.focus())},children:[u?r.jsx(to,{...M,variant:"ghost",size:d,$inline:o==="inline",children:R}):r.jsx(eo,{...M,$variant:o,$align:o==="inline"&&!c?"end":"between",children:R}),m&&r.jsx(ro,{ref:_,id:k,role:"group",tabIndex:N,$variant:o,$panelHeight:s,children:t})]})}const Qr=p.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,eo=p.button`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-glyph);
  padding: var(--inset-glyph-button);
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  ${({$variant:e,$align:t})=>e==="inline"&&oe`
      justify-content: ${t==="end"?"flex-end":"space-between"};
      width: 100%;
      text-align: start;
      border-radius: var(--radius-regular);
      &:hover {
        background: var(--color-surface-sunken);
      }
    `}
  ${he}
`,to=p(Oe)`
  ${({$inline:e})=>e&&oe`
      align-self: flex-end;
    `}
`,no=p.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,ro=p.div`
  ${({$variant:e})=>e==="popover"?oe`
          position: absolute;
          top: 100%;
          right: 0;
          /* Local sibling ordering: lifts the popped panel above following rows, off the app z ladder. */
          z-index: 1;
          margin-top: var(--gap-disclosure);
        `:oe`
          position: static;
          width: 100%;
          margin-top: var(--gap-disclosure);
        `}
  /* An accordion body grows in flow up to a cap, then scrolls, never spilling past the row below. */
  ${({$variant:e,$panelHeight:t})=>e==="inline"&&t==="cap"?oe`
          max-height: 16rem;
          overflow-y: auto;
          ${$e}
        `:""}
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function Os({space:e,...t}){return r.jsx(oo,{$space:e,...t})}const oo=p.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${_e[e]} 0`:"0"};
`,ao=160,so=24,io="...";function zs({children:e,limit:t=ao,subject:n,className:a}){const[o,s]=l.useState(!1),c=l.useId(),u=lo(e,t);if(u===void 0)return r.jsx(r.Fragment,{children:e});const d=o?"Show less":"Show more";return r.jsxs(co,{className:a,children:[r.jsx("span",{id:c,children:o?e:`${u}${io}`})," ",r.jsx(uo,{type:"button","data-expandable-toggle":"","aria-controls":c,"aria-expanded":o,"aria-label":n===void 0?void 0:`${d} of ${n}`,onClick:()=>s(f=>!f),children:d})]})}function lo(e,t){if(e.length<=t+so)return;const n=e.lastIndexOf(" ",t);return n<=0?e.slice(0,t):e.slice(0,n)}const co=p.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,uo=p(_n)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function Bs(e,t){const n=t.map(s=>s==null?null:Dn(e,s.index)),a=n.length>0&&n.every(s=>s?.currency==="exact"),o=n.reduce((s,c)=>c?.currency!=="held"||c.asOfUt===null?s:s===null?c.asOfUt:Math.min(s,c.asOfUt),null);return s=>{const c=a?On(s):s;return o===null?c:{state:"held",value:c,asOfUt:Ie("ut",o),grade:"held",reckoning:{status:"none"}}}}function fo({anchor:e,style:t,children:n,...a}){const[o,s]=l.useState(null),[c,u]=l.useState(null),d=l.useRef(e);d.current=e;const f=l.useCallback(()=>{if(!o)return;const m=d.current,b=typeof m=="function"?m():m;if(!b)return;const k=o.getBoundingClientRect(),x=ar(b,{w:k.width,h:k.height},{w:window.innerWidth,h:window.innerHeight});u(i=>i&&i.left===x.left&&i.top===x.top?i:x)},[o]);return l.useLayoutEffect(()=>{f()}),l.useLayoutEffect(()=>{if(!o)return;const m=typeof ResizeObserver>"u"?null:new ResizeObserver(f);return m?.observe(o),window.addEventListener("resize",f),window.addEventListener("scroll",f,!0),()=>{m?.disconnect(),window.removeEventListener("resize",f),window.removeEventListener("scroll",f,!0)}},[o,f]),typeof document>"u"?null:Jn.createPortal(r.jsx(po,{ref:s,style:{...t,left:c?.left??0,top:c?.top??0,visibility:c===null?"hidden":t?.visibility},...a,children:n}),document.body)}const po=p.div`
  position: fixed;
  z-index: var(--z-dropdown);
`,ft=12,ho=8,mo=120;function Hs({trigger:e,"aria-label":t,children:n}){const[a,o]=l.useState(!1),s=l.useRef(null),c=l.useRef(null),u=l.useRef(null),d=l.useId(),f=l.useCallback(()=>{c.current!==null&&(clearTimeout(c.current),c.current=null)},[]),m=()=>{f(),o(!0)},b=()=>{f(),c.current=setTimeout(()=>o(!1),mo)},k=l.useCallback(()=>{f(),o(!1)},[f]);l.useEffect(()=>f,[f]),l.useEffect(()=>{if(!a)return;const i=_=>{_.key==="Escape"&&(_.stopPropagation(),k())};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[a,k]);const x=()=>{const i=s.current?.getBoundingClientRect();if(!i)return null;const _=u.current?.offsetHeight??0,N=i.top-_-2*ft;return{x:i.left,y:N+ft>=ho?N:i.bottom}};return r.jsxs(r.Fragment,{children:[r.jsx(go,{ref:s,type:"button","aria-label":t,"aria-describedby":a?d:void 0,onPointerEnter:m,onPointerLeave:b,onFocus:m,onBlur:k,children:e}),a&&r.jsx(fo,{anchor:x,onPointerEnter:f,onPointerLeave:b,children:r.jsx(vo,{ref:u,id:d,role:"tooltip",children:n})})]})}const go=p.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${he}
`,vo=p.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function Us({gap:e,inset:t=!1,wrap:n=!1,children:a,...o}){return r.jsx(bo,{$gap:e,$inset:t,$wrap:n,...o,children:a})}const bo=p.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?_e[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,xo=4,wo=80,pt=60,yo=30,He=24,$o=32,ht=56,mt=He;function Ce(e,t,n){const{min:a,max:o,step:s}=t,c=e+n*s,u=Math.min(o,Math.max(a,c));if(!Number.isFinite(a))return u;const d=a+Math.round((u-a)/s)*s;return Math.min(o,Math.max(a,d))}function _o(e){const{value:t,min:n,max:a,step:o,orientation:s="horizontal",onChange:c,format:u,"aria-label":d,label:f=d,disabled:m=!1,width:b,height:k}=e,x=s==="vertical",i=Math.max(He,b??(x?mt:ht)),_=Math.max(He,k??(x?ht:mt)),N=e.mode==="rate",v=n??Number.NEGATIVE_INFINITY,w=a??Number.POSITIVE_INFINITY,M={min:v,max:w,step:o},R=l.useRef(null),y=l.useRef(t);y.current=t;const A=l.useRef(c);A.current=c;const G=(e.mode==="rate"?e.stepsPerSecond:void 0)??yo,[F,B]=l.useState(0),H=u?u(t):String(Math.round(t)),O=w>v&&Number.isFinite(w-v)?(t-v)/(w-v):.5,K=j=>{m||j!==t&&c(j)};l.useEffect(()=>{if(!N||F===0||m)return;const j=setInterval(()=>{const E=Math.max(v,Math.min(w,y.current+F*G*o*(pt/1e3)));E!==y.current&&A.current(E)},pt);return()=>clearInterval(j)},[N,F,m,o,G,v,w]);const D=j=>{if(m)return;let E=null;switch(j.key){case"ArrowRight":case"ArrowUp":E=Ce(t,M,1);break;case"ArrowLeft":case"ArrowDown":E=Ce(t,M,-1);break;case"Home":if(!Number.isFinite(v))return;E=v;break;case"End":if(!Number.isFinite(w))return;E=w;break;default:return}j.preventDefault(),K(E)},h=j=>s==="vertical"?j.clientY:j.clientX,T=j=>{m||(R.current={start:h(j),startValue:t},j.currentTarget.setPointerCapture(j.pointerId))},S=j=>{if(m||!R.current)return;const E=s==="vertical"?R.current.start-h(j):h(j)-R.current.start;if(N){const C=E/wo;B(Math.max(-1,Math.min(1,C)));return}const z=E/xo;K(Ce(R.current.startValue,M,z))},I=j=>{R.current&&(R.current=null,B(0),j.currentTarget.hasPointerCapture(j.pointerId)&&j.currentTarget.releasePointerCapture(j.pointerId))};return r.jsxs(jo,{children:[f!==!1&&r.jsx(ko,{"aria-hidden":"true",children:f}),r.jsxs(Mo,{role:"slider","aria-label":d,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":n,"aria-valuemax":a,"aria-valuetext":H,"aria-disabled":m||void 0,tabIndex:m?-1:0,$orientation:s,$disabled:m,$width:i,$height:_,$compact:(x?i:_)<$o,onKeyDown:D,onPointerDown:T,onPointerMove:S,onPointerUp:I,onPointerCancel:I,children:[r.jsx(Ro,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-O)*100}%)`}:{transform:`translateX(${(.5-O)*100}%)`},"aria-hidden":"true"}),r.jsx(So,{$orientation:s,"aria-hidden":"true"}),r.jsx(Eo,{"aria-hidden":"true",children:H})]})]})}const jo=p.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,ko=p.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Mo=p.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>e.$width}px;
  height: ${e=>e.$height}px;
  padding: ${e=>e.$compact?"var(--inset-jog-wheel-compact)":"var(--inset-jog-wheel)"};
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  cursor: ${e=>e.$disabled?"not-allowed":e.$orientation==="vertical"?"ns-resize":"ew-resize"};
  touch-action: none;
  user-select: none;
  opacity: ${e=>e.$disabled?.5:1};

  ${he}
`,Ro=p.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,So=p.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,Eo=p.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function Gs({lock:e}){const t=zn(e)?To(e):e,n=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return r.jsx(Se,{text:n,focusable:!0,children:r.jsxs(Ao,{role:"status","aria-label":n,children:[r.jsx(jn,{size:"1.2em"}),r.jsx(No,{children:Io(t)})]})})}function To(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...Qn(t,Gn),locks:t}}function Io(e){const t=[...new Set(e.locks.flatMap(n=>n.missing.map(a=>a.name)))];return t.length>0?t.join(", "):e.reason}const Ao=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-figure-parts);
  max-width: 100%;
  min-width: 0;
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,No=p.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,gt=1.4,vt=1.7,Co="var(--icon-size-standalone)",Po=1.8,Me="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",bt="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",xt="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",wt="M7 4.5V19.5M17 4.5V19.5",fe=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,Xt={prograde:{colour:"prograde",paths:[Me,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[Me,fe(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",fe(12,11)]},radialOut:{colour:"radial",paths:[bt,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[bt,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",fe(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",fe(12,12)]},relativePlus:{colour:"target",paths:[Me,xt],dot:[12,12]},relativeMinus:{colour:"target",paths:[Me,xt,fe(12,12)]},parallelPlus:{colour:"target",paths:[wt],dot:[12,12]},parallelMinus:{colour:"target",paths:[wt,fe(12,12)]}},Ws=Object.keys(Xt);function yt({shape:e,colour:t,strokeWidth:n,dotRadius:a}){return r.jsxs("g",{fill:"none",stroke:t,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(o=>r.jsx("path",{d:o},o)),e.dot&&r.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:a,fill:t,stroke:"none"})]})}function ne(e,t){const n=Xt[e],a=`var(--color-marker-${n.colour})`,o=l.forwardRef(({size:s=Co,strokeWidth:c=Po,label:u,style:d,...f},m)=>{const b={ref:m,xmlns:"http://www.w3.org/2000/svg",...typeof s=="number"?{width:s,height:s,style:d}:{style:{width:s,height:s,...d}},viewBox:"0 0 24 24","data-marker":e},k=r.jsxs(r.Fragment,{children:[r.jsx(yt,{shape:n,colour:"currentColor",strokeWidth:c+gt,dotRadius:vt+gt/2}),r.jsx(yt,{shape:n,colour:a,strokeWidth:c,dotRadius:vt})]});return u?r.jsx("svg",{...b,role:"img","aria-label":u,...f,children:k}):r.jsx("svg",{...b,"aria-hidden":"true",...f,children:k})});return o.displayName=t,o}const Yt=ne("prograde","ProgradeIcon"),Fo=ne("retrograde","RetrogradeIcon"),Vt=ne("normal","NormalIcon"),Lo=ne("antiNormal","AntiNormalIcon"),Do=ne("radialOut","RadialOutIcon"),Kt=ne("radialIn","RadialInIcon"),Oo=ne("maneuver","ManeuverIcon"),zo=ne("target","TargetIcon"),Bo=ne("antiTarget","AntiTargetIcon"),Ho=ne("relativePlus","RelativePlusIcon"),Uo=ne("relativeMinus","RelativeMinusIcon"),Go=ne("parallelPlus","ParallelPlusIcon"),Wo=ne("parallelMinus","ParallelMinusIcon"),Xs=Yt,Ys=Kt,Vs=Vt,Ks={prograde:Yt,retrograde:Fo,normal:Vt,antiNormal:Lo,radialOut:Do,radialIn:Kt,maneuver:Oo,target:zo,antiTarget:Bo,relativePlus:Ho,relativeMinus:Uo,parallelPlus:Go,parallelMinus:Wo};function qt(e){const{year:t,day:n,hour:a,minute:o}=Xe(),s=Number.isFinite(e)?Math.max(0,e):0,c=Math.floor(s/t)+1,u=s%t,d=Math.floor(u/n)+1,f=u%n;return{year:c,day:d,hour:Math.floor(f/a),minute:Math.floor(f%a/o),second:Math.floor(f%o)}}const Xo={year:1,day:1,hour:0,minute:0,second:0};function Yo(e){const{year:t,day:n,hour:a,minute:o}=Xe();return(e.year-1)*t+(e.day-1)*n+e.hour*a+e.minute*o+e.second}function Re(e){return ve(Ie("s",e))}function Vo({value:e,onChange:t,label:n,disabled:a,steps:o}){const s=l.useId(),c=`${s}-absent`,u=e!==null&&Number.isFinite(e)?e:null,d=u===null?null:qt(u),f=Xe(),m=o??[f.minute,10*f.minute,f.hour,f.day],[b,k]=l.useState(null),x=(i,_,N,v)=>r.jsxs(Ee,{gap:"caption",children:[r.jsx(Ge,{htmlFor:`${s}-${i}`,children:_}),r.jsx(Ft,{id:`${s}-${i}`,type:"number",inputMode:"numeric","aria-label":`${n} ${_}`,"aria-describedby":d===null?c:void 0,min:N,step:1,style:{width:v},disabled:a,placeholder:d===null?ye:void 0,value:b?.key===i?b.text:d===null?"":String(d[i]),onBlur:()=>k(null),onChange:w=>{const M=w.target.value;if(k({key:i,text:M}),M.trim()==="")return;const R=Number(M);if(!Number.isFinite(R))return;const y=Math.max(N,Math.round(R));t(Yo({...d??Xo,[i]:y}))}})]},i);return r.jsxs(Ee,{gap:"related-dense",role:"group","aria-label":n,children:[r.jsxs(Je,{gap:"related-dense",wrap:!0,justify:"start",children:[x("year","YEAR",1,"5rem"),x("day","DAY",1,"5rem"),x("hour","HR",0,"4rem"),x("minute","MIN",0,"4rem"),x("second","SEC",0,"4rem")]}),d===null&&r.jsx(Be,{id:c,level:"muted",size:"sm",children:`${ye} no ${n.toLowerCase()} to show. Type one to state it.`}),m.length===0?null:r.jsxs(Je,{gap:"related-packed",wrap:!0,justify:"start",children:[r.jsx(Be,{level:"faint",size:"sm",children:"NUDGE"}),m.map(i=>r.jsx(Oe,{variant:"ghost",size:"sm",disabled:a||u===null,"aria-label":`${n} earlier by ${Re(i)}`,onClick:()=>u!==null&&t(u-i),children:`-${Re(i)}`},`minus-${i}`)),m.map(i=>r.jsx(Oe,{variant:"ghost",size:"sm",disabled:a||u===null,"aria-label":`${n} later by ${Re(i)}`,onClick:()=>u!==null&&t(u+i),children:`+${Re(i)}`},`plus-${i}`))]})]})}const Ko=p.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function qo({observed:e,modelled:t,write:n}){if(t==null)return null;if(n===void 0){const a=t;return ze(e,a,kn())?r.jsx($t,{children:r.jsx(le,{value:a})}):null}return ze(e,t,Mn(n))?r.jsx($t,{children:n(t)}):null}function $t({children:e}){return r.jsx(Ko,{"data-modelled-alongside":"",children:r.jsx(We,{"data-held":"",kind:"modelled",caption:Rn,children:e})})}function qs({value:e}){return r.jsxs(r.Fragment,{children:[r.jsx(le,{value:e}),r.jsx(qo,{observed:e.value,modelled:Sn(e)})]})}function Zs({panZoom:e,label:t,style:n,onMouseMove:a,children:o}){const{style:s,ref:c,...u}=e.viewportProps;return r.jsxs(Zo,{...u,ref:c,onMouseMove:a,"aria-label":t,style:{...s,...n},children:[o,r.jsx(Jo,{role:"status",children:e.hint!==null&&r.jsx(Qo,{children:e.hint})})]})}const Zo=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  ${$e}
`,Jo=p.div`
  position: absolute;
  bottom: var(--gap-related);
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-base);
  max-width: calc(100% - 16px);
  pointer-events: none;
`,Qo=p.div`
  padding: var(--inset-control);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function Js({filled:e,of:t,tone:n="info",label:a}){const o=`${e} of ${t}`;return r.jsx(ea,{role:"img","aria-label":a===void 0?o:`${a}: ${o}`,"data-pips":"",children:Array.from({length:t},(s,c)=>r.jsx(ta,{$colour:Wn[n],$filled:c<e},c))})}const ea=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  flex: none;
`,ta=p.span`
  width: 1em;
  height: 1em;
  border-radius: var(--radius-circle);
  border: 2px solid ${({$colour:e})=>e};
  background: ${({$colour:e,$filled:t})=>t?e:"transparent"};
`;function Qs({id:e,label:t,value:n,options:a,onChange:o,hint:s}){const c=a.findIndex(u=>er(u.choice,n));return r.jsxs(Pt,{children:[r.jsx(Ge,{htmlFor:e,children:t}),r.jsxs(En,{id:e,value:c===-1?"":String(c),onChange:u=>{const d=a[Number(u.target.value)];d!==void 0&&o(d.choice)},children:[c===-1&&r.jsx("option",{value:"",disabled:!0}),a.map((u,d)=>r.jsx("option",{value:d,children:u.label},`${u.choice.kind}-${u.choice.bodyIndex??"none"}`))]}),s!==void 0&&r.jsx(Tn,{children:s})]})}function na({as:e,interactive:t=!1,selected:n=!1,wrap:a=!1,nested:o=!1,type:s,children:c,...u}){return r.jsx(oa,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:n,$wrap:a,$nested:o,...u,children:c})}const Zt=p.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,ra="min(12ch, 100%)",oa=p.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-row);
  font-size: var(--font-size-compact);
  padding: var(--inset-row);
  ${({$wrap:e})=>e?`
  flex-wrap: wrap;
  row-gap: var(--gap-row-wrap);

  & > ${Zt} {
    min-width: ${ra};
  }
`:""}
  ${({$interactive:e})=>e?oe`
  width: 100%;
  border: none;
  background: transparent;
  color: var(--color-text-primary);
  padding: var(--inset-row-pressable);
  border-radius: var(--radius-regular);
  cursor: pointer;
  text-align: left;
  font-family: inherit;

  &:hover {
    background: var(--color-surface-panel);
  }

  ${$e}
`:""}
  ${({$interactive:e,$selected:t})=>e&&t?`
  ${Bt("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}
`,ei=Object.assign(na,{Name:Zt}),aa=65,Jt=38,sa=72,ia=sa-Jt,Qt=55,Ue=137.508,la=10,ca=1.5,ua=64,da=60,fa=241,pa=Ue-Math.floor(Ue),xe=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function en(e,t){const n=Math.abs(e-t)%360;return n>180?360-n:n}const ha=xe.map((e,t)=>{let n=1/0;for(let o=0;o<xe.length;o++)o!==t&&(n=Math.min(n,en(e.hue,xe[o].hue)));const a=n/2;return Math.max(0,Math.min(la,a-ca))}),ma=xe.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:ha[t]}));function ga(e,t=xe){return t.find(n=>n.aliases.some(a=>e.includes(a)))}function tn(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function _t(e,t){return(e%t+t)%t}function va(e){const n=tn(`light:${e}`)/4294967295;return Jt+n*ia}function ba(e){const t=ga(e);if(!t)return;const n=t.aliases.length===1?Qt:va(e);return{hue:t.hue,lightness:n}}function xa(e){return ma.some(({centre:t,radius:n})=>en(e,t)<n)}function wa(e){const t=tn(e);let n=_t(t*Ue,360);const a=da+(t>>>8)%fa+pa;let o=0;for(;xa(n)&&o<ua;)n=_t(n+a,360),o++;return n}function ti(e){const t=e.trim().toLowerCase(),n=ba(t),a=n?.hue??wa(t),o=n?.lightness??Qt;return`hsl(${Math.round(a)}deg ${aa}% ${Math.round(o)}%)`}function ni({selected:e,gap:t="caption",layout:n="stack",selectedLook:a="fill",children:o,...s}){return r.jsx(ya,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:n,$look:a,...s,children:o})}const ya=p.button`
  display: flex;
  ${({$layout:e})=>e==="split"?oe`
          justify-content: space-between;
          align-items: baseline;
          > :first-child {
            flex: 1;
            min-width: 0;
          }
        `:oe`
          flex-direction: column;
        `}
  gap: ${({$gap:e})=>_e[e]};
  width: 100%;
  text-align: left;
  padding: var(--inset-selectable-row);
  border-radius: ${zt.regular};
  border: 1px solid
    ${({$selected:e,$look:t})=>e?t==="outline"?"var(--color-accent-fg)":"transparent":"var(--color-border-subtle)"};
  ${({$selected:e,$look:t})=>e?t==="outline"?"background: var(--color-surface-raised); color: inherit;":Bt("go"):"background: transparent; color: inherit;"}
  cursor: pointer;
  font-family: inherit;

  ${({$selected:e})=>e?"":oe`
          @media (hover: hover) {
            &:hover:not(:disabled):not([aria-disabled="true"]) {
              border-color: var(--color-border-strong);
            }
          }
        `}

  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${he}
`,$a=l.forwardRef(function(t,n){return r.jsx(_a,{ref:n,type:"range",...t})}),_a=p.input`
  width: 100%;
  min-width: 0;
  margin: 0;
  background: none;
  accent-color: var(--color-accent-fg);
  cursor: pointer;

  ${he}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function ja({label:e,children:t,detail:n,tone:a="neutral",...o}){return r.jsxs(ka,{...o,children:[r.jsx(Ma,{children:e}),r.jsx(Ra,{$tone:a,children:t}),n!=null&&r.jsx(Sa,{children:n})]})}const ka=p.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,Ma=p.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,Ra=p.dd`
  margin: 0;
  min-width: 0;
  /* Bottom-aligned, so figures line up across the strip even where one label wraps. */
  margin-top: auto;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--gap-figure-parts);
  font-size: var(--font-size-figure);
  font-weight: 700;
  line-height: var(--line-height-tight);
  font-variant-numeric: tabular-nums;
  color: ${({$tone:e})=>Xn[e]};
`,Sa=p.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function ri({slot:e}){const t=Yn(e);return t.length===0?null:r.jsx(r.Fragment,{children:t.map(n=>r.jsx(ja,{label:n.label,detail:n.detail,tone:n.tone??"neutral",children:r.jsx(Ea,{entry:n})},n.id))})}function Ea({entry:e}){if(e.value!==void 0)return r.jsx(le,{value:e.value});if(e.text===void 0)return r.jsx(Vn,{});const t=In(e.held);return t===null?r.jsx(r.Fragment,{children:e.text}):r.jsx(We,{kind:t.kind,caption:t.caption,children:e.text})}const Ta=12,pe=12,Ia=12,jt=52,ee=10,Pe=4;function Aa(e,t,n){const a=c=>e.map(u=>Number.parseFloat(c.mark(u).replace(/[^\d.-]/g,""))),o=a(n(Pe)),s=c=>a(c).every((u,d)=>u===o[d]);if(s(t))return t;for(let c=0;c<Pe;c++){const u=n(c);if(s(u))return u}return n(Pe)}function oi({labelSide:e="left",value:t,min:n,max:a,width:o=92,height:s=220,fillHeight:c=!1,tickStep:u,zones:d,markers:f,groundLine:m,seaLevel:b,format:k,"aria-label":x}){const i=l.useRef(null),[_,N]=l.useState(s);l.useEffect(()=>{if(!c)return;const g=i.current;if(!g)return;const L=()=>{const te=g.clientHeight;te>0&&N(te)};L();const P=new ResizeObserver(L);return P.observe(g),()=>P.disconnect()},[c]);const v=c?_:s,w=Dt(t),{shown:M,held:R,caption:y,band:A}=w,{anchor:G,tip:F}=An(y),B=M?.magnitude??Number.NaN,H=Number.isFinite(B)?M:null,O=n.magnitude,K=a.magnitude,D=K-O,h=Number.isFinite(B)?B:O,T=D>0?Math.max(O,Math.min(K,h)):O,S=H!=null,I=ot(a,{format:k}),j=H==null?ye:at({magnitude:h,unit:H.unit},{format:I.rung}),E=g=>at(g),z=[...(f??[]).flatMap(g=>g.label===void 0?[]:[g.bounds===void 0?`${g.label} ${E(g.value)}`:`${g.label} ${E(g.value)}, between ${E(g.bounds.lo)} and ${E(g.bounds.hi)}`]),...(d??[]).flatMap(g=>g.label===void 0?[]:[`${g.label} zone ${E(g.from.min(g.to))} to ${E(g.from.max(g.to))}`]),...m===void 0?[]:[`ground ${E(m)}`],...b===void 0?[]:[`sea level ${E(b)}`]],C=H==null||A===null?null:Bn(A,H.unit)??null,W=Math.max(0,v-pe-Ia),Y=g=>{if(!(D>0))return pe+W;const L=Math.max(0,Math.min(1,(g-O)/D));return pe+(1-L)*W},V=g=>Y(g.magnitude),re=pe,ae=pe+W,U=e==="right",$=U?o-jt-ee:jt,q=U?$+ee+6:$-6,Z=U?"start":"end",J=(g,L)=>{const P=V(g),te=g.greaterThan(a)?-1:g.lessThan(n)?1:0,se=$-4,ue=$+ee+4,me=$+ee/2;return r.jsxs("g",{"data-level":L?"sea":"ground",children:[r.jsx("line",{x1:se,y1:P,x2:ue,y2:P,stroke:L?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:L?1.5:2,strokeDasharray:L?"3 2":void 0}),te!==0&&r.jsx("polygon",{"data-off-scale":"true",points:`${me-4},${P-te*2} ${me+4},${P-te*2} ${me},${P+te*4}`,fill:L?"var(--color-info-mark)":"var(--color-text-primary)"})]})},Q=[],X=u?.magnitude??0;if(X>0&&D>0){const g=Math.ceil(O/X),L=Math.floor(K/X+1e-9);for(let P=g;P<=L;P++)Q.push(P===0?0:P*X)}const Ye=Aa(Q,I,g=>ot(a,{format:k,decimals:g})),ce=Y(T),de=g=>W>0?(pe+W-g)/W:0,je=C!==null&&ze(de(ce),[de(V(C.lo)),de(V(C.hi))],Nn())?C:null;return r.jsxs(Na,{ref:i,...Fn(w),...G,...S?{role:"meter","aria-label":tt(x,y),...et(y),"aria-valuenow":T,"aria-valuemin":O,"aria-valuemax":K,"aria-valuetext":z.length===0?j:`${j}; ${z.join("; ")}`}:{role:"img","aria-label":tt(`${x}: ${j}`,y),...et(y)},style:c?{height:"100%"}:void 0,children:[r.jsxs("svg",{width:o,height:v,viewBox:`0 0 ${o} ${v}`,"aria-hidden":"true",style:c?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[r.jsx("rect",{x:$,y:re,width:ee,height:W,rx:2,fill:"var(--color-surface-raised)"}),d?.map(g=>{const L=V(g.from.max(g.to)),P=V(g.from.min(g.to)),te=Math.max(0,P-L);return r.jsx("g",{children:r.jsx("rect",{x:$,y:L,width:ee,height:te,fill:g.color??"var(--color-warn-mark)",opacity:.55})},`zone-${P}-${L}-${g.label??""}`)}),b!==void 0&&D>0&&J(b,!0),m!==void 0&&D>0&&J(m,!1),Q.map(g=>{const L=Y(g),P=S&&Math.abs(L-Math.max(re+4,Math.min(ae-4,ce)))<Ta;return r.jsxs("g",{children:[r.jsx("line",{x1:U?$+ee+4:$-4,y1:L,x2:U?$+ee:$,y2:L,stroke:"var(--color-border-subtle)",strokeWidth:1}),!P&&r.jsx("text",{x:q,y:L,textAnchor:Z,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:Ye.mark(g)})]},`tick-${g}`)}),f?.map(g=>{const{bounds:L}=g,P=V(g.value),te=g.color??"var(--color-accent-fg)";return r.jsxs("g",{"data-marker":g.label,children:[r.jsx("line",{x1:$,y1:P,x2:$+ee,y2:P,stroke:te,strokeWidth:2,strokeDasharray:"2 2"}),r.jsx("polygon",{points:U?`${$},${P} ${$-5},${P-3} ${$-5},${P+3}`:`${$+ee},${P} ${$+ee+5},${P-3} ${$+ee+5},${P+3}`,fill:"none",stroke:te,strokeWidth:1.5}),L!==void 0&&["lo","hi"].map(se=>{const ue=V(L[se]);return r.jsx(Qe,{end:se,x1:$,y1:ue,x2:$+ee,y2:ue},se)})]},`marker-${P}-${g.label??""}`)}),je!==null&&["lo","hi"].map(g=>{const L=V(je[g]);return r.jsx(Qe,{end:g,x1:$,y1:L,x2:$+ee,y2:L},g)}),S&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:$-6,y1:ce,x2:$+ee+6,y2:ce,stroke:"var(--color-accent-fg)",strokeWidth:2}),r.jsxs("text",{x:U?q+2:q-2,y:Math.max(re+4,Math.min(ae-4,ce)),textAnchor:Z,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[I.mark(h),R&&r.jsx(Cn,{size:5})]})]}),!S&&r.jsx(Pn,{x:U?q+8:q-8,y:re+W/2,size:11,children:ye}),I.symbol!==""&&r.jsx("text",{x:$+ee/2,y:re-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:I.symbol})]}),F]})}const Na=p.div`
  display: block;
  max-width: 100%;
`,ai=p.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,Ca=112;function Pa(e,t){try{return Ie(e,1).in(t).magnitude}catch{return Number.NaN}}function Fa(e,t){let n=e;return t.map((a,o)=>{if(!Number.isFinite(a)||a===0)return 0;const s=o===t.length-1?n/a:Math.trunc(n/a);return n-=s*a,s})}function si({value:e,unit:t,onChange:n,label:a,rungs:o,range:s,rate:c,disabled:u}){const d=l.useId(),{shown:f,held:m,caption:b}=Dt(e),k=m?r.jsx(We,{caption:b,children:a}):a,x=s,i=f?f.magnitude:Number.NaN,[_,N]=l.useState({}),v=y=>_[y]??null,w=(y,A)=>N(G=>({...G,[y]:A})),M=c?r.jsxs(Ee,{gap:"related-packed",children:[r.jsx(_o,{mode:"rate","aria-label":`${a} rate`,value:i,step:c.step,stepsPerSecond:c.stepsPerSecond,disabled:u||!Number.isFinite(i),format:Fe(t)?Da:void 0,width:Fe(t)?Ca:void 0,onChange:y=>n(ge(t,y))}),r.jsx(Be,{level:"faint",size:"sm",children:`${c.step} ${La(t)} / notch`})]}):null;if(Fe(t))return r.jsxs(De,{children:[r.jsx(Mt,{"aria-hidden":"true",children:k}),r.jsxs(Ee,{gap:"related-dense",children:[r.jsx(Vo,{label:m&&b!==null?`${a}, ${b}`:a,value:Number.isFinite(i)?i:null,disabled:u,steps:c?[]:void 0,onChange:y=>n(ge(t,y))}),M]})]});if(o&&o.length>0){const y=o.map(F=>Pa(String(F),t)),A=Fa(i,y),G=(F,B)=>{const H=Le(B);if(H===void 0){w(F,{text:B,against:A[F]});return}const O=A.map(D=>Number.isFinite(D)?D:0);O[F]=H;const K=O.reduce((D,h,T)=>Number.isFinite(y[T])?D+h*y[T]:D,0);w(F,{text:B,against:H}),n(ge(t,K))};return r.jsxs(De,{children:[r.jsx(Mt,{id:`${d}-label`,children:k}),r.jsx(Ha,{role:"group","aria-labelledby":`${d}-label`,children:o.map((F,B)=>r.jsxs(Ua,{children:[r.jsx(Ga,{type:"number",disabled:u,"aria-label":`${a} ${String(F)}`,value:kt(v(B),A[B]),onChange:H=>G(B,H.target.value)}),r.jsx(Rt,{"aria-hidden":"true",children:String(F)})]},String(F)))}),M]})}const R=y=>{const A=Le(y);w(0,{text:y,against:A??i}),A!==void 0&&n(ge(t,A))};return r.jsxs(De,{children:[r.jsx(za,{htmlFor:d,children:k}),r.jsxs(Ba,{children:[r.jsx(rn,{id:d,type:"number",disabled:u,min:x?.min,max:x?.max,step:x?.step,value:kt(v(0),i),onChange:y=>R(y.target.value)}),r.jsx(Rt,{"aria-hidden":"true",children:t})]}),x?r.jsx($a,{disabled:u,"aria-label":`${a} slider`,min:x.min,max:x.max,step:x.step??(x.max-x.min)/100,value:Number.isFinite(i)?i:x.min,onChange:y=>n(ge(t,Le(y.target.value)??x.min))}):null,M]})}function kt(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(Oa(t)):""}function La(e){return Ot(e)??e}function Fe(e){return Ot(e)==="s"}function Da(e){if(!Number.isFinite(e))return"";const{day:t,hour:n,minute:a,second:o}=qt(e),s=c=>String(c).padStart(2,"0");return`D${t} ${s(n)}:${s(a)}:${s(o)}`}function Le(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function Oa(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const De=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,nn=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,za=p.label`
  ${nn}
`,Mt=p.span`
  ${nn}
`,Ba=p.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,rn=p.input`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-field-compact);
  border-radius: var(--radius-regular);
  text-align: right;
  font-variant-numeric: tabular-nums;
  min-width: 0;

  ${he}
`,Rt=p.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Ha=p.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,Ua=p.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,Ga=p(rn)`
  width: 4.5em;
`,Wa=200;function St(e={}){const t=e.quietMs??Wa;let n=null,a=Number.NEGATIVE_INFINITY,o=!0;return{wheel(s,c){return(n===null||s-a>t)&&(n=c&&o?"diagram":"page"),a=s,n},pageScrolled(){o=!1},pointerMovedInside(){o=!0},yieldToPage(){n="page"},get owner(){return n}}}const Xa=16,Ya=400,Et=120,Va=Math.log(1.15)/100,Ka=.01;function qa(e,t,n){const a=t===1?e*Xa:t===2?e*Ya:e,o=Math.max(-Et,Math.min(Et,a)),s=n&&Math.abs(a)<40?Ka:Va;return Math.exp(-o*s)}function Za(e,t,n={}){const{quietMs:a}=n,o=l.useRef(St({quietMs:a}));l.useEffect(()=>{o.current=St({quietMs:a})},[a]);const[s,c]=l.useState(null);l.useEffect(()=>{e.current!==s&&c(e.current)}),l.useEffect(()=>{if(!s||!t)return;const u=i=>i instanceof Node&&s.contains(i);let d=null;const f=(i,_)=>d!==null&&(Math.abs(i-d.x)>=1||Math.abs(_-d.y)>=1),m=i=>{d={x:i.clientX,y:i.clientY},!(i.ctrlKey||i.metaKey)&&o.current.wheel(performance.now(),u(i.target))},b=i=>{const _=f(i.clientX,i.clientY);d={x:i.clientX,y:i.clientY},_&&u(i.target)&&o.current.pointerMovedInside()},k=i=>{const _=i.target;(_===document||_ instanceof Node&&_.contains(s))&&o.current.pageScrolled()},x=i=>{const _=i.ctrlKey||i.metaKey;if(!_&&o.current.owner!=="diagram")return;const N=s.getBoundingClientRect(),v=qa(i.deltaY,i.deltaMode,_);if(t(v,i.clientX-N.left,i.clientY-N.top)===!1&&!_){o.current.yieldToPage();return}i.preventDefault()};return window.addEventListener("wheel",m,{capture:!0,passive:!0}),window.addEventListener("pointermove",b,{capture:!0,passive:!0}),window.addEventListener("scroll",k,{capture:!0,passive:!0}),s.addEventListener("wheel",x,{passive:!1}),()=>{window.removeEventListener("wheel",m,{capture:!0}),window.removeEventListener("pointermove",b,{capture:!0}),window.removeEventListener("scroll",k,{capture:!0}),s.removeEventListener("wheel",x)}},[s,t])}const Ja="Arrow keys pan, + and - zoom, 0 resets",Qa=.15,Tt=1.25,es={zoom:1,panX:0,panY:0};function ii(e={}){const{home:t=es,zoomAbout:n="pointer",panThreshold:a=3,enabled:o=!0}=e,[s,c]=l.useState(t),u=l.useRef({camera:s,options:e,home:t});u.current={camera:s,options:e,home:t};const d=l.useRef(null),f=e.elementRef??d,m=l.useCallback(()=>{const h=f.current?.getBoundingClientRect();return{w:h?.width??0,h:h?.height??0}},[]),b=l.useCallback(h=>{const{constrain:T}=u.current.options,S=m(),I=T&&S.w>0&&S.h>0?T(h,S):h;return u.current.camera=I,c(I),I},[m]),k=l.useCallback(h=>{b(typeof h=="function"?h(u.current.camera):h)},[b]),x=l.useCallback((h,T,S)=>{const I=u.current.camera,{minZoom:j=.1,maxZoom:E=50}=u.current.options,z=typeof j=="function"?j(I):j,C=Math.max(Math.min(z,I.zoom),Math.min(Math.max(E,I.zoom),I.zoom*h));if(C===I.zoom)return!1;const{w:W,h:Y}=m();if(n==="centre")b({...I,zoom:C});else{const V=(T-W/2)/I.zoom+I.panX,re=(S-Y/2)/I.zoom+I.panY;b({zoom:C,panX:V-(T-W/2)/C,panY:re-(S-Y/2)/C})}return u.current.options.onManualMove?.("zoom"),!0},[b,m,n]);Za(f,l.useMemo(()=>o?x:null,[o,x]));const i=l.useCallback(()=>{u.current.options.onManualMove?.("reset"),b(u.current.home)},[b]),_=l.useCallback(h=>{const{w:T,h:S}=m();x(h,T/2,S/2)},[m,x]),[N,v]=l.useState(null),w=l.useRef(new Map),M=l.useRef(null),R=l.useRef(null),y=l.useRef(null),A=l.useRef(!1),[G,F]=l.useState(!1),B=l.useCallback(h=>{if(u.current.options.enabled!==!1&&!(h.pointerType==="mouse"&&h.button!==0)){if(w.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),w.current.size===2){const[T,S]=[...w.current.values()];M.current=null,R.current=Math.hypot(T.x-S.x,T.y-S.y);return}A.current=!1,y.current={x:h.clientX,y:h.clientY},M.current={x:h.clientX,y:h.clientY},R.current=null}},[]),H=l.useCallback(h=>{if(!w.current.has(h.pointerId))return;if(h.pointerType==="mouse"&&h.buttons===0){w.current.delete(h.pointerId),w.current.size===0&&(M.current=null,y.current=null,R.current=null,F(!1));return}if(w.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),w.current.size>=2){const[z,C]=[...w.current.values()],W=Math.hypot(z.x-C.x,z.y-C.y),Y=R.current;if(R.current=W,Y===null||Y===0)return;const V=f.current?.getBoundingClientRect();A.current=!0,x(W/Y,(z.x+C.x)/2-(V?.left??0),(z.y+C.y)/2-(V?.top??0));return}const T=y.current,S=M.current;if(!T||!S||!A.current&&Math.hypot(h.clientX-T.x,h.clientY-T.y)<a)return;A.current||(A.current=!0,F(!0),h.currentTarget.setPointerCapture?.(h.pointerId));const I=h.clientX-S.x,j=h.clientY-S.y;M.current={x:h.clientX,y:h.clientY};const E=u.current.camera;u.current.options.onManualMove?.("pan"),b({...E,panX:E.panX-I/E.zoom,panY:E.panY-j/E.zoom})},[b,a,x]),O=l.useCallback(h=>{if(w.current.delete(h.pointerId),h.currentTarget.releasePointerCapture?.(h.pointerId),w.current.size===1){const[T]=[...w.current.values()];M.current={...T},y.current={...T},R.current=null;return}w.current.size===0&&(M.current=null,y.current=null,R.current=null,F(!1))},[]),K=l.useCallback(h=>{if(u.current.options.enabled===!1||h.target!==h.currentTarget||h.ctrlKey||h.metaKey||h.altKey)return;const T=u.current.camera,{w:S,h:I}=m(),j=(E,z)=>{const C=(E==="panX"?S:I)/T.zoom;u.current.options.onManualMove?.("pan"),b({...T,[E]:T[E]+z*C*Qa})};switch(h.key){case"ArrowLeft":j("panX",-1);break;case"ArrowRight":j("panX",1);break;case"ArrowUp":j("panY",-1);break;case"ArrowDown":j("panY",1);break;case"+":case"=":_(Tt);break;case"-":case"_":_(1/Tt);break;case"0":i();break;default:return}h.preventDefault()},[b,i,m,_]);return{camera:s,setCamera:k,reset:i,zoomBy:_,viewportProps:{ref:f,tabIndex:0,role:"group",onPointerDown:B,onPointerMove:H,onPointerUp:O,onPointerCancel:O,onFocus:h=>{h.target===h.currentTarget&&h.currentTarget.matches(":focus-visible")&&v(Ja)},onBlur:()=>v(null),onKeyDown:K,style:{touchAction:"none",cursor:G?"grabbing":"grab"}},didPan:()=>A.current,isDragging:G,hint:N}}const It="(prefers-reduced-motion: reduce)";function li(){const[e,t]=l.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(It).matches);return l.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const n=window.matchMedia(It),a=()=>t(n.matches);return a(),n.addEventListener("change",a),()=>n.removeEventListener("change",a)},[]),e}const on=l.createContext(null);function ci({widget:e,scope:t,children:n}){const a=l.useMemo(()=>({widget:e,scope:t}),[e,t]);return r.jsx(on.Provider,{value:a,children:n})}function ui(e){const t=l.useContext(on);if(!(!t||t.widget!==e))return t.scope}function di(e){if(e.length===0)return[];const t=[[e[0]]];for(let n=1;n<e.length;n++)rs(e[n-1],e[n])?t.push([e[n]]):t[t.length-1].push(e[n]);return t}function fi(e,t,n,a){if(e.length===0||!(t>0))return[];const o=[e[0].x];let s=o[0],c=o[0];for(let u=1;u<e.length;u++){const d=o[u-1],f=d+ns(e[u].x-d,t);o.push(f),f<s&&(s=f),f>c&&(c=f)}return ts(s,c,n,a,t).map(u=>e.map((d,f)=>({...d,x:o[f]+u})))}function ts(e,t,n,a,o){if(!(o>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((n-t)/o),c=Math.floor((a-e)/o),u=[];for(let d=s;d<=c;d++)u.push(d*o+0);return u}function ns(e,t){const n=t/2;return((e+n)%t+t)%t-n}function rs(e,t){const n=At(e),a=At(t),o=as(n,a);if(o===0)return!1;const s=Nt(os(n,a));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=o)return!1;const u=[0,0,e.lat+t.lat>=0?1:-1],d=Nt(ss(u,s));if(d===null)return!1;const f=we(n,a);return we(n,d)>f&&we(a,d)>f}function At({lat:e,lon:t}){const n=e*Math.PI/180,a=t*Math.PI/180,o=Math.cos(n);return[o*Math.cos(a),o*Math.sin(a),Math.sin(n)]}function we(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function os(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function as(e,t){return Math.acos(Math.max(-1,Math.min(1,we(e,t))))}function ss(e,t){const n=we(e,t);return[e[0]-n*t[0],e[1]-n*t[1],e[2]-n*t[2]]}function Nt(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{$a as $,Ir as A,Ms as B,Es as C,Fs as D,zs as E,Ts as F,Do as G,Hs as H,sr as I,_o as J,Qs as K,Gs as L,Ks as M,Vt as N,qs as O,Zs as P,Uo as Q,dt as R,Ho as S,jr as T,Fo as U,ei as V,Zt as W,Ar as X,ut as Y,ni as Z,As as _,_s as a,ja as a0,ri as a1,Xs as a2,oi as a3,zo as a4,ai as a5,si as a6,ci as a7,ar as a8,gr as a9,St as aa,Jr as ab,kr as ac,Bs as ad,Mr as ae,ts as af,ti as ag,di as ah,Nr as ai,ii as aj,li as ak,Ns as al,Za as am,ui as an,Yo as ao,qa as ap,fi as aq,Lo as b,Bo as c,js as d,ks as e,Vs as f,Rs as g,Ss as h,Is as i,Cs as j,Ps as k,Ls as l,Ds as m,Os as n,fo as o,Ys as p,Us as q,Ws as r,Oo as s,Vo as t,qo as u,Wo as v,Go as w,Js as x,Yt as y,Kt as z};
