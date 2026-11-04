import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-C0MU9AHG.js";import p,{css as oe,keyframes as an}from"./ext-styled-components-DAuodqsN.js";import{t as sn,e as ln,h as cn}from"./TinyEssentials-BvVTdiIg.js";import{E as Ct,bK as $e,n as un,F as Pt,m as Ge,y as Ft,aT as dn,bF as Ve,bL as fn,$ as Ke,ab as le,bM as pn,ac as Re,a7 as qe,b0 as hn,a_ as mn,b1 as gn,a$ as vn,bN as bn,bO as xn,bq as wn,bI as yn,bP as Lt,bJ as Ze,g as $n,ad as he,e as Oe,Z as _n,aG as jn,ak as Je,bn as ze,by as kn,bx as Mn,aw as We,bQ as Sn,b9 as Rn,V as En,l as Tn,b8 as In,ae as Dt,bv as An,bg as Nn,bD as Qe,aC as Cn,bR as Pn,bE as et,bm as tt,af as Fn}from"./ModalSaveBar-Kx_4RqML.js";import{aJ as Ae,b6 as nt,bh as Ln,aY as Ie,aj as Dn,c7 as On,cI as zn,b4 as Xe,l as Bn,cn as ge,c6 as Ot}from"./view-clock-formula-4WTGODXm.js";import"./ksp-enum-names-NS2-hNY8.js";import"./logger-2_QM1wvD.js";import"./screen-CM3czcv7.js";import{Z as _e,N as ye,_ as zt,$ as Hn,G as rt,V as ve,I as Un,a0 as Gn,i as Ee,n as Be,k as Wn,Y as Bt,T as Xn,c as Yn,g as Vn,y as ot,E as at}from"./contributionsRead-DbcTsNFL.js";import{a as Kn,r as qn,b as Zn}from"./Notice-BzsmmanV.js";import{r as Jn}from"./ext-react-dom-DCF8ZnaJ.js";import{l as Qn}from"./capability-lock-B-09uth8.js";import"./lagrange-GZi6nkCu.js";import"./use-transmissions-DpgjNq3R.js";import{r as er}from"./control-frame-to-read-frame-BiHSSEjn.js";function _s({items:e,onSelect:t,onDismiss:n,"aria-label":a,style:o,header:s,footer:l,emptyLabel:u="No actions",otherLabel:d="Other"}){const f=c.useRef(null),m=c.useId(),[v,_]=c.useState(0),x=sn(e,d),i=x.flatMap(([,b])=>b),$=i.length;c.useEffect(()=>{const b=f.current;if(!b)return;if($===0){b.focus();return}b.querySelectorAll('[role="menuitem"]')[v]?.focus()},[v,$]),c.useEffect(()=>{const b=w=>{const k=f.current;k&&w.target instanceof Node&&!k.contains(w.target)&&n()};return document.addEventListener("pointerdown",b),()=>document.removeEventListener("pointerdown",b)},[n]);const N=c.useCallback(b=>{if(b.key==="Escape"){b.stopPropagation(),n();return}if(b.key==="Tab"){n();return}if(i.length!==0)switch(b.key){case"ArrowDown":b.preventDefault(),_(w=>Math.min(w+1,i.length-1));break;case"ArrowUp":b.preventDefault(),_(w=>Math.max(w-1,0));break;case"Home":b.preventDefault(),_(0);break;case"End":b.preventDefault(),_(i.length-1);break}},[i.length,n]);return r.jsxs(tr,{ref:f,role:$>0?"menu":void 0,"aria-label":a,onKeyDown:N,tabIndex:-1,style:o,children:[s,i.length===0?r.jsx(Ct,{layout:"fill",children:u}):x.map(([b,w],k)=>r.jsxs("div",{...x.length>1?{role:"group","aria-labelledby":`${m}-group-${k}`}:{role:"none"},children:[x.length>1?r.jsx(nr,{id:`${m}-group-${k}`,"aria-hidden":"true",children:b}):null,w.map(M=>{const y=i.indexOf(M);return r.jsx(rr,{type:"button",role:"menuitem","aria-label":M["aria-label"],"aria-disabled":M.disabled,$disabled:M.disabled,tabIndex:y===v?0:-1,onFocus:()=>_(y),onClick:()=>{M.disabled||t(M.key)},children:M.label},M.key)})]},b)),l]})}const tr=p.div`
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
`;function js({settings:e,values:t,onChange:n}){return e.length===0?null:r.jsx(r.Fragment,{children:e.flatMap(a=>a.fields.map(o=>{const l=t?.[a.namespace]?.[o.key]??o.default,u=o.label??o.key,d=`augment-setting-${a.namespace}-${o.key}`;return o.type===Ae.Bool?r.jsx(un,{children:r.jsx(ln,{checked:!!l,onChange:f=>n(a.namespace,o.key,f),label:u})},`${a.namespace}.${o.key}`):r.jsxs(Pt,{children:[r.jsx(Ge,{htmlFor:d,children:u}),r.jsx(Ft,{id:d,type:o.type===Ae.Number?"number":"text",value:l===void 0?"":String(l),onChange:f=>{const m=f.target.value;if(o.type!==Ae.Number){n(a.namespace,o.key,m);return}if(m===""){n(a.namespace,o.key,void 0);return}const v=Number(m);Number.isFinite(v)&&n(a.namespace,o.key,v)}})]},`${a.namespace}.${o.key}`)}))})}function ks({fallback:e,gap:t="related-dense",children:n,...a}){return r.jsxs(r.Fragment,{children:[r.jsx(Ht,{$gap:t,...a,children:n}),r.jsx(or,{children:e})]})}const Ht=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>_e[e]};
`,or=p.div`
  ${Ht}:not(:empty) + & {
    display: none;
  }
`,st=12,ke=8;function ar(e,t,n){return{left:it(e.x,t.w,n.w),top:it(e.y,t.h,n.h)}}function it(e,t,n){const a=e+st;if(a+t<=n-ke)return a;const o=e-st-t;return o>=ke?o:Math.max(ke,n-ke-t)}const sr="–";function Ms({min:e,max:t,wrapsAt:n,className:a,...o}){const s=nt(e),l=nt(t);return e==null||t==null||s===null||l===null?r.jsx(Te,{className:a,children:ye}):n!==void 0&&Math.abs(l-s)>=n/2?r.jsx(Te,{className:a,children:"(precesses)"}):r.jsx(dn,{of:e.unit,separate:!0,...o,children:r.jsx(ir,{min:e,max:t,className:a})})}function ir({min:e,max:t,className:n}){return Ve(e),Ve(t),fn(e)?r.jsx(Te,{className:n,children:r.jsxs(cr,{children:[r.jsx("span",{"aria-hidden":"true",children:"~"}),r.jsx(Ke,{children:"approximately "}),r.jsx(le,{value:e})]})}):r.jsxs(Te,{className:n,children:[r.jsx(le,{value:e}),r.jsx(lr,{"aria-hidden":"true",children:sr}),r.jsx(Ke,{children:" to "}),r.jsx(le,{value:t})]})}const Te=p.span`
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
`,ur={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function Ss({surface:e,pad:t,bordered:n=!1,radius:a,children:o,...s}){return r.jsx(dr,{$surface:e,$pad:t,$bordered:n,$radius:a,...s,children:o})}const dr=p.div`
  ${({$surface:e})=>e&&`background: ${ur[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${zt[e]};`}
  ${({$pad:e})=>e&&`padding: var(${Hn[e]});`}
`,Rs=c.forwardRef(function({equalWidth:t=!0,gap:n,children:a,...o},s){return r.jsx(fr,{ref:s,$equalWidth:t,$gap:n,...o,children:a})}),fr=p.div`
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
`;function mr({tone:e,dimmed:t,identityColor:n,standalone:a,...o}){return qn(hr,{...o,$tone:e,$dimmed:t,$identityColor:n,$standalone:a})}const Es=Object.assign(mr,Kn);function gr(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const Ts=c.forwardRef(function({label:t,icon:n,type:a,...o},s){return r.jsx("button",{ref:s,type:a??"button","aria-label":t,...o,children:r.jsx(Ut,{label:t,icon:n})})});function Ut({label:e,icon:t}){const n=c.useRef(null),a=c.useRef(null),[o,s]=c.useState(!0);return c.useLayoutEffect(()=>{const l=n.current,u=a.current;if(!l||!u)return;const d=()=>{s(u.scrollWidth<=l.clientWidth)};if(d(),typeof ResizeObserver>"u")return;const f=new ResizeObserver(d);return f.observe(l),f.observe(u),()=>f.disconnect()},[]),r.jsxs(vr,{ref:n,children:[r.jsx(br,{ref:a,"aria-hidden":"true",children:e}),o?r.jsx(xr,{"aria-hidden":"true",children:e}):r.jsx(wr,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const vr=p.span`
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
${o}`}function Mr(e){if(e!==void 0)return e.arrival==="likely-lost"?"at-risk":e.sends==="held"?"held":void 0}function Sr(e,t,n){if(e)return"sent";if(n.some(s=>s.held===!0))return"held";const a=t===void 0||t.phase==="in-flight"||t.phase==="idle"?null:t.requestId;return n.filter(s=>s.id!==a&&(s.predictedPhase==="awaiting-reply"||s.predictedPhase==="due")).length%2===1?"modelled":null}function Rr(e,t){return t==="modelled"&&typeof e=="boolean"?!e:e}function Er(e,t){return e===void 0||e.phase==="idle"?!1:e.phase==="in-flight"?!0:t.some(n=>n.id===e.requestId)}function lt(e){if(e===null||typeof e!="object")return;const t="state"in e?e.state:"enabled"in e?e.enabled:void 0;return typeof t=="boolean"?t:void 0}function Gt(e,t){switch(t){case"held":return`${e} held until contact returns`;case"sent":return`${e} sent, not yet received`;case"modelled":return`${e} shown as predicted: the command should have reached the craft, and its reply is on its way back`;default:return null}}function Tr(e,t,n){if(t!=="held"&&t!=="modelled")return n;const a=Gt(e,t)??"";return{kind:t,caption:n===null?a:`${n.caption}. ${a}`}}function ct(e){try{return JSON.stringify(e)??""}catch{return null}}const ut="Not connected to the mod. Nothing can be sent",Ir=4e3,dt=8e3,Ar=500,be="SENT";function Wt(e,t){return e.gateFor?e.gateFor(t):e.gate}function Nr({handle:e,args:t,commandLabel:n,onConfirmed:a,toggle:o}){const[s,l]=c.useState("idle"),[u,d]=c.useState(null),[f,m]=c.useState(null),[v,_]=c.useState(!1),[x,i]=c.useState(!1),[$,N]=c.useState(0),[b,w]=c.useState(!1),k=e.streamDown===!0,M=Wt(e,t),y=o?.unavailable??null,I=M?.blocked===!0||y!==null,W=c.useRef(!0),F=c.useRef(0);c.useEffect(()=>(W.current=!0,()=>{W.current=!1}),[]);const B=e.founds,z=c.useRef(null),G=c.useRef(B?.length??0);c.useEffect(()=>{const C=B?.length??0,R=C>G.current;G.current=C;const J=B?.[C-1],Z=z.current;if(!R||!J||Z===null)return;const Q=J.label!==void 0&&J.label!==""&&Z.label!==void 0&&J.label!==Z.label,Y=J.args!==void 0&&Z.args!==void 0&&JSON.stringify(J.args)!==JSON.stringify(Z.args);Q||Y||(z.current=null,m(J),d(null),l("found"))},[B]),c.useEffect(()=>{if(s!=="armed")return;const C=setTimeout(()=>l("idle"),Ir);return()=>clearTimeout(C)},[s]),c.useEffect(()=>{if(s!=="refused"&&s!=="lost"&&s!=="found")return;const C=setTimeout(()=>{l("idle"),d(null),z.current=null,m(null)},dt);return()=>clearTimeout(C)},[s]),c.useEffect(()=>{if(!v)return;const C=setTimeout(()=>_(!1),dt);return()=>clearTimeout(C)},[v]),c.useEffect(()=>{!I&&v&&_(!1)},[I,v]),c.useEffect(()=>{if($===0)return;const C=setTimeout(()=>i(!1),Ar);return()=>clearTimeout(C)},[$]);const X=c.useCallback((C=t,R=n)=>{const J=F.current+1;F.current=J,z.current=null,l("idle"),d(null),i(!0),N(Q=>Q+1),w(!0);const Z=(Q,Y)=>{!W.current||F.current!==J||(d(Y),l(Q),w(!1),Q!=="idle"&&i(!1))};e.send(C,R?{label:R}:void 0).then(Q=>{Z("idle",null),a?.(Q)},Q=>{const Y=Ln(Q);if(Y.kind==="lost"){z.current={args:C,label:R},Z("lost",null);return}if(Y.kind!=="refused"){Z("idle",null);return}Z("refused",{errorCode:Y.errorCode,reason:Y.reason,command:Y.command,args:Y.args,label:Y.label??n,breach:Y.breach,detail:Y.detail})})},[e,t,n,a]),{hasUnconfirmed:H,hasFailure:h}=gr(e),E=e.status,A=b&&E?.phase==="in-flight"&&E.accepted!==!0,T=x||A,j=o?e.inFlight.filter(o.rows??(()=>!0)):[],S=o?Sr(T,E,j):null,O=o?Rr(o.state,S):void 0,D=c.useRef(void 0),U=Er(E,e.inFlight)&&D.current!==void 0?D.current:O,q=c.useCallback(C=>{if(!k){if(I){_(!0);return}if(o){const R=o.args(U);if(R===void 0)return;D.current=lt(R),X(R);return}if(s==="refused"||s==="lost"||s==="found"){d(null),m(null),z.current=null,l("idle");return}if(C&&s!=="armed"){ne.current=ct(t),l("armed");return}X()}},[s,k,I,X,t,o,U]),ne=c.useRef(null);c.useEffect(()=>{s==="armed"&&ct(t)!==ne.current&&l("idle")},[s,t]);const V=s==="refused"||s==="lost"||s==="found"?s:T?"sent":I?"blocked":s;return{phase:V,isSent:V==="sent",isArmed:V==="armed",isRefused:V==="refused",isLost:V==="lost",isFound:V==="found",isBlocked:V==="blocked",isOffline:k&&V!=="sent",isShowingReason:V==="blocked"&&v,refusalText:u?gn(u):y!==null?y:V==="blocked"&&M?vn({...M,label:M.label??n,args:M.args??t}):null,foundText:f?mn(f):null,lossText:V==="lost"?hn({args:t,label:n}):null,sendAs:(C,R)=>{k||(D.current=lt(C),X(C,R))},toggleView:o?{shown:O,on:typeof O=="number"?O>0:O===!0,word:S==="sent"?o.sentWord??be:o.word(O),reserve:[...o.words,o.sentWord??be],confirmation:S,unavailable:y,marking:Tr(o.name,S,o.marking??null),sentence:Gt(o.name,S)}:null,hasUnconfirmed:H,hasFailure:h,press:q}}function Is({handle:e,args:t,commandLabel:n,label:a,confirmLabel:o,refusedLabel:s="Refused",lostLabel:l="No reply",foundLabel:u="Found",confirmAriaLabel:d,sentAriaLabel:f,blockedAriaLabel:m,pressed:v,variant:_="ghost",tone:x="neutral",icon:i,confirmIcon:$,onPressReady:N,size:b="md",confirmTone:w="go",onConfirmed:k,toggle:M,controller:y,disabled:I,title:W,"aria-label":F,...B}){const z=Nr({handle:e,args:t,commandLabel:n,onConfirmed:k,toggle:M}),{phase:G,isSent:X,isArmed:H,isRefused:h,isLost:E,isFound:A,isBlocked:T,isOffline:j,isShowingReason:S,refusalText:O,foundText:D,lossText:K,toggleView:U,hasUnconfirmed:q,hasFailure:ne,press:V}=y??z,C=o!==void 0,R=n?`${n} sent, not yet received`:"Sent, not yet received";c.useEffect(()=>{if(!(!N||I))return N(()=>V(C)),()=>N(null)},[N,I,V,C]);const Z=X?be:h?s:E?l:A?u:S?O:H?o:a,Q=i!==void 0&&typeof Z=="string",Y=Q?r.jsx(Ut,{label:Z,icon:H?$??i:i}):Z,ae=i===void 0&&typeof a=="string"&&(o===void 0||typeof o=="string")&&!h&&!E&&!A&&!S,ce=pn()&&e.railed===!0?null:h?O:E?K:A?D:null,de=v===!0||H||h,je=Cr({restTone:_==="primary"?x:"neutral",filled:de,isRefused:h,isFound:A,isArmed:H,confirmTone:w,tone:x});if(U){const{marking:te,sentence:se}=U,ue=U.confirmation==="held"||U.confirmation==="modelled",me=j?ut:(ue?null:se)??W;return r.jsxs(r.Fragment,{children:[r.jsx(Re,{text:me,children:r.jsx(cn,{type:"button",size:b,pressed:U.on,disabled:I||U.unavailable!==null,disabledReason:U.unavailable??void 0,marked:te,"aria-label":F,"data-command-phase":G,"data-stream":j?"down":void 0,"data-unconfirmed":q?"true":void 0,"data-failed":ne?"true":void 0,onClick:()=>V(!1),...B,children:r.jsx(jr,{shown:U.word,reserve:U.reserve})})}),r.jsx(qe,{visuallyHidden:!0,children:ue?"":se??""})]})}const g=e.sendStatus,L=g===void 0?W:[W,kr(g)].filter(Boolean).join(`
`),P=j?[W,ut].filter(Boolean).join(`
`):L;return r.jsxs(r.Fragment,{children:[r.jsx(Re,{text:D??O??(X?R:P),children:r.jsx(Lr,{type:"button",$tone:je,$variant:_,$fit:Q,$size:b,$pressed:de,$armed:H,$blocked:T,"aria-pressed":v,"aria-disabled":T||j||void 0,disabled:I,"data-unconfirmed":q?"true":void 0,"data-failed":ne?"true":void 0,"data-command-phase":G,"data-stream":j?"down":void 0,"data-predicted":T?void 0:Mr(g),"data-gate":T?"blocked":Wt(e,t)?.undetermined?"undetermined":void 0,"aria-label":(h?O??void 0:E?K??void 0:A?D??F:T?m??O??F:X?f??R:H?d:F)??(Q?Z:void 0),onClick:()=>V(o!==void 0),"data-rest-label":ae?a:void 0,"data-armed-label":ae?typeof o=="string"&&o.length>be.length?o:be:void 0,...B,children:ae?r.jsx(Fr,{children:Y}):Y})}),r.jsx(qe,{visuallyHidden:!0,children:ce})]})}function Cr(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const Pr=an`
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
`;function Ns(e){const t=wn(),n=c.useId(),a=e!==null;c.useEffect(()=>{if(!(!t||!e))return t.register({id:n,...e})},[t,n,a]),c.useEffect(()=>{!t||!e||t.update(n,e)},[t,n,e])}function Cs({at:e,atAspect:t,narrow:n,wide:a,children:o,...s}){return r.jsx(zr,{$query:Or(e,t),$narrow:n,$wide:a,...s,children:o})}function Or(e,t){const n=[e===void 0?void 0:`(min-width: ${e}px)`,t===void 0?void 0:`(aspect-ratio >= ${t})`].filter(a=>a!==void 0);return n.length===0?void 0:n.join(" and ")}const zr=p.div`
  ${({$narrow:e})=>e}
  ${({$query:e,$wide:t})=>e===void 0?"":oe`
          @container ${e} {
            ${t}
          }
        `}
`;function Ps({slot:e,component:t,filter:n}){const a=Un(e),o=n?a.filter(n):a;return o.length===0?null:r.jsx(t,{entries:o})}function Br(e,t){return e.value!==void 0?r.jsx(le,{value:e.value(t)??null}):e.render(t)}function Fs({columns:e,rows:t,sections:n,rowKey:a,caption:o,empty:s,rowDetail:l,className:u}){const d=n??(t?[{id:"",title:null,rows:[...t]}]:[]),f=d.reduce((i,$)=>i+$.rows.length,0),[m,v]=c.useState(null),_=yn(m),x=Lt(m);return r.jsxs(Hr,{className:u,children:[r.jsx(Ur,{ref:v,tabIndex:x,children:r.jsxs(Gr,{children:[r.jsx(Wr,{children:o}),r.jsx("thead",{children:r.jsx("tr",{children:e.map(i=>r.jsx(Xr,{scope:"col",$align:i.align??"start",style:{width:i.width,minWidth:i.minWidth},children:i.header},i.key))})}),f===0&&s!==void 0&&r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx(Zr,{colSpan:e.length,children:s})})}),d.map(i=>r.jsxs("tbody",{children:[i.title!==null&&i.title!==void 0&&r.jsx("tr",{children:r.jsx(Yr,{scope:"rowgroup",colSpan:e.length,children:i.title})}),i.rows.map($=>{const N=a($),b=l?.($),w=b!=null&&b!==!1&&b!=="";return r.jsxs(c.Fragment,{children:[r.jsx(Vr,{$hasDetail:w,children:e.map(k=>r.jsx(Kr,{as:k.rowHeader?"th":void 0,scope:k.rowHeader?"row":void 0,$align:k.align??"start",children:Br(k,$)},k.key))}),w?r.jsx("tr",{children:r.jsx(qr,{colSpan:e.length,children:b})}):null]},N)})]},i.id))]})}),r.jsx(Ze,{$position:"left",$visible:_.left}),r.jsx(Ze,{$position:"right",$visible:_.right})]})}const Hr=p.div`
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
`;function Jr(e){const t=e.reason;switch(t){case"beyond-horizon":return e.resolvesByWaiting?"NOT YET COMPUTED":"CANNOT MODEL";case"under-physics":case"model-inapplicable":case"contested":case"insufficient-history":return"CANNOT MODEL";case"frame-unavailable":return"FRAME UNAVAILABLE";case"input-absent":return null;default:return t}}function Ls({declined:e,layout:t="inline"}){return r.jsx(Re,{text:e.note,focusable:!0,children:r.jsx(Ct,{role:"status",layout:t,children:Jr(e)??"NO DATA"})})}function Ds({label:e,children:t,"aria-label":n,className:a,variant:o="popover",panelHeight:s="cap",chevron:l=!0,asButton:u=!1,buttonSize:d="md",defaultOpen:f=!1}){const[m,v]=c.useState(f),_=c.useId(),x=c.useRef(null),[i,$]=c.useState(null),N=Lt(i),b=o==="inline"&&l,w=typeof e=="function"?e(m):e,k={ref:x,type:"button","aria-expanded":m,"aria-controls":_,"aria-label":n,onClick:()=>v(y=>!y)},M=r.jsxs(r.Fragment,{children:[w,b&&r.jsx(no,{$open:m,children:r.jsx($n,{size:"var(--icon-size-control)"})})]});return r.jsxs(Qr,{className:a,$variant:o,onKeyDown:y=>{y.key==="Escape"&&m&&(v(!1),x.current?.focus())},children:[u?r.jsx(to,{...k,variant:"ghost",size:d,$inline:o==="inline",children:M}):r.jsx(eo,{...k,$variant:o,$align:o==="inline"&&!l?"end":"between",children:M}),m&&r.jsx(ro,{ref:$,id:_,role:"group",tabIndex:N,$variant:o,$panelHeight:s,children:t})]})}const Qr=p.div`
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
`,ao=160,so=24,io="...";function zs({children:e,limit:t=ao,subject:n,className:a}){const[o,s]=c.useState(!1),l=c.useId(),u=lo(e,t);if(u===void 0)return r.jsx(r.Fragment,{children:e});const d=o?"Show less":"Show more";return r.jsxs(co,{className:a,children:[r.jsx("span",{id:l,children:o?e:`${u}${io}`})," ",r.jsx(uo,{type:"button","data-expandable-toggle":"","aria-controls":l,"aria-expanded":o,"aria-label":n===void 0?void 0:`${d} of ${n}`,onClick:()=>s(f=>!f),children:d})]})}function lo(e,t){if(e.length<=t+so)return;const n=e.lastIndexOf(" ",t);return n<=0?e.slice(0,t):e.slice(0,n)}const co=p.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,uo=p(_n)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function Bs(e,t){const n=t.map(s=>s==null?null:Dn(e,s.index)),a=n.length>0&&n.every(s=>s?.currency==="exact"),o=n.reduce((s,l)=>l?.currency!=="held"||l.asOfUt===null?s:s===null?l.asOfUt:Math.min(s,l.asOfUt),null);return s=>{const l=a?On(s):s;return o===null?l:{state:"held",value:l,asOfUt:Ie("ut",o),grade:"held",reckoning:{status:"none"}}}}function fo({anchor:e,style:t,children:n,...a}){const[o,s]=c.useState(null),[l,u]=c.useState(null),d=c.useRef(e);d.current=e;const f=c.useCallback(()=>{if(!o)return;const m=d.current,v=typeof m=="function"?m():m;if(!v)return;const _=o.getBoundingClientRect(),x=ar(v,{w:_.width,h:_.height},{w:window.innerWidth,h:window.innerHeight});u(i=>i&&i.left===x.left&&i.top===x.top?i:x)},[o]);return c.useLayoutEffect(()=>{f()}),c.useLayoutEffect(()=>{if(!o)return;const m=typeof ResizeObserver>"u"?null:new ResizeObserver(f);return m?.observe(o),window.addEventListener("resize",f),window.addEventListener("scroll",f,!0),()=>{m?.disconnect(),window.removeEventListener("resize",f),window.removeEventListener("scroll",f,!0)}},[o,f]),typeof document>"u"?null:Jn.createPortal(r.jsx(po,{ref:s,style:{...t,left:l?.left??0,top:l?.top??0,visibility:l===null?"hidden":t?.visibility},...a,children:n}),document.body)}const po=p.div`
  position: fixed;
  z-index: var(--z-dropdown);
`,ft=12,ho=8,mo=120;function Hs({trigger:e,"aria-label":t,children:n}){const[a,o]=c.useState(!1),s=c.useRef(null),l=c.useRef(null),u=c.useRef(null),d=c.useId(),f=c.useCallback(()=>{l.current!==null&&(clearTimeout(l.current),l.current=null)},[]),m=()=>{f(),o(!0)},v=()=>{f(),l.current=setTimeout(()=>o(!1),mo)},_=c.useCallback(()=>{f(),o(!1)},[f]);c.useEffect(()=>f,[f]),c.useEffect(()=>{if(!a)return;const i=$=>{$.key==="Escape"&&($.stopPropagation(),_())};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[a,_]);const x=()=>{const i=s.current?.getBoundingClientRect();if(!i)return null;const $=u.current?.offsetHeight??0,N=i.top-$-2*ft;return{x:i.left,y:N+ft>=ho?N:i.bottom}};return r.jsxs(r.Fragment,{children:[r.jsx(go,{ref:s,type:"button","aria-label":t,"aria-describedby":a?d:void 0,onPointerEnter:m,onPointerLeave:v,onFocus:m,onBlur:_,children:e}),a&&r.jsx(fo,{anchor:x,onPointerEnter:f,onPointerLeave:v,children:r.jsx(vo,{ref:u,id:d,role:"tooltip",children:n})})]})}const go=p.button`
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
`,xo=4,wo=80,pt=60,yo=30,He=24,$o=32,ht=56,mt=He;function Ce(e,t,n){const{min:a,max:o,step:s}=t,l=e+n*s,u=Math.min(o,Math.max(a,l));if(!Number.isFinite(a))return u;const d=a+Math.round((u-a)/s)*s;return Math.min(o,Math.max(a,d))}function _o(e){const{value:t,min:n,max:a,step:o,orientation:s="horizontal",onChange:l,format:u,"aria-label":d,label:f=d,disabled:m=!1,width:v,height:_}=e,x=s==="vertical",i=Math.max(He,v??(x?mt:ht)),$=Math.max(He,_??(x?ht:mt)),N=e.mode==="rate",b=n??Number.NEGATIVE_INFINITY,w=a??Number.POSITIVE_INFINITY,k={min:b,max:w,step:o},M=c.useRef(null),y=c.useRef(t);y.current=t;const I=c.useRef(l);I.current=l;const W=(e.mode==="rate"?e.stepsPerSecond:void 0)??yo,[F,B]=c.useState(0),z=u?u(t):String(Math.round(t)),G=w>b&&Number.isFinite(w-b)?(t-b)/(w-b):.5,X=j=>{m||j!==t&&l(j)};c.useEffect(()=>{if(!N||F===0||m)return;const j=setInterval(()=>{const S=Math.max(b,Math.min(w,y.current+F*W*o*(pt/1e3)));S!==y.current&&I.current(S)},pt);return()=>clearInterval(j)},[N,F,m,o,W,b,w]);const H=j=>{if(m)return;let S=null;switch(j.key){case"ArrowRight":case"ArrowUp":S=Ce(t,k,1);break;case"ArrowLeft":case"ArrowDown":S=Ce(t,k,-1);break;case"Home":if(!Number.isFinite(b))return;S=b;break;case"End":if(!Number.isFinite(w))return;S=w;break;default:return}j.preventDefault(),X(S)},h=j=>s==="vertical"?j.clientY:j.clientX,E=j=>{m||(M.current={start:h(j),startValue:t},j.currentTarget.setPointerCapture(j.pointerId))},A=j=>{if(m||!M.current)return;const S=s==="vertical"?M.current.start-h(j):h(j)-M.current.start;if(N){const D=S/wo;B(Math.max(-1,Math.min(1,D)));return}const O=S/xo;X(Ce(M.current.startValue,k,O))},T=j=>{M.current&&(M.current=null,B(0),j.currentTarget.hasPointerCapture(j.pointerId)&&j.currentTarget.releasePointerCapture(j.pointerId))};return r.jsxs(jo,{children:[f!==!1&&r.jsx(ko,{"aria-hidden":"true",children:f}),r.jsxs(Mo,{role:"slider","aria-label":d,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":n,"aria-valuemax":a,"aria-valuetext":z,"aria-disabled":m||void 0,tabIndex:m?-1:0,$orientation:s,$disabled:m,$width:i,$height:$,$compact:(x?i:$)<$o,onKeyDown:H,onPointerDown:E,onPointerMove:A,onPointerUp:T,onPointerCancel:T,children:[r.jsx(So,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-G)*100}%)`}:{transform:`translateX(${(.5-G)*100}%)`},"aria-hidden":"true"}),r.jsx(Ro,{$orientation:s,"aria-hidden":"true"}),r.jsx(Eo,{"aria-hidden":"true",children:z})]})]})}const jo=p.div`
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
`,So=p.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,Ro=p.div`
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
`;function Gs({lock:e}){const t=zn(e)?To(e):e,n=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return r.jsx(Re,{text:n,focusable:!0,children:r.jsxs(Ao,{role:"status","aria-label":n,children:[r.jsx(jn,{}),r.jsx(No,{children:Io(t)})]})})}function To(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...Qn(t,Gn),locks:t}}function Io(e){const t=[...new Set(e.locks.flatMap(n=>n.missing.map(a=>a.name)))];return t.length>0?t.join(", "):e.reason}const Ao=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-figure-parts);
  max-width: 100%;
  min-width: 0;
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,No=p.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,gt=1.4,vt=1.7,Co="var(--icon-size-standalone)",Po=1.8,Me="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",bt="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",xt="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",wt="M7 4.5V19.5M17 4.5V19.5",fe=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,Xt={prograde:{colour:"prograde",paths:[Me,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[Me,fe(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",fe(12,11)]},radialOut:{colour:"radial",paths:[bt,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[bt,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",fe(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",fe(12,12)]},relativePlus:{colour:"target",paths:[Me,xt],dot:[12,12]},relativeMinus:{colour:"target",paths:[Me,xt,fe(12,12)]},parallelPlus:{colour:"target",paths:[wt],dot:[12,12]},parallelMinus:{colour:"target",paths:[wt,fe(12,12)]}},Ws=Object.keys(Xt);function yt({shape:e,colour:t,strokeWidth:n,dotRadius:a}){return r.jsxs("g",{fill:"none",stroke:t,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(o=>r.jsx("path",{d:o},o)),e.dot&&r.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:a,fill:t,stroke:"none"})]})}function re(e,t){const n=Xt[e],a=`var(--color-marker-${n.colour})`,o=c.forwardRef(({size:s=Co,strokeWidth:l=Po,label:u,style:d,...f},m)=>{const v={ref:m,xmlns:"http://www.w3.org/2000/svg",...typeof s=="number"?{width:s,height:s,style:d}:{style:{width:s,height:s,...d}},viewBox:"0 0 24 24","data-marker":e},_=r.jsxs(r.Fragment,{children:[r.jsx(yt,{shape:n,colour:"currentColor",strokeWidth:l+gt,dotRadius:vt+gt/2}),r.jsx(yt,{shape:n,colour:a,strokeWidth:l,dotRadius:vt})]});return u?r.jsx("svg",{...v,role:"img","aria-label":u,...f,children:_}):r.jsx("svg",{...v,"aria-hidden":"true",...f,children:_})});return o.displayName=t,o}const Yt=re("prograde","ProgradeIcon"),Fo=re("retrograde","RetrogradeIcon"),Vt=re("normal","NormalIcon"),Lo=re("antiNormal","AntiNormalIcon"),Do=re("radialOut","RadialOutIcon"),Kt=re("radialIn","RadialInIcon"),Oo=re("maneuver","ManeuverIcon"),zo=re("target","TargetIcon"),Bo=re("antiTarget","AntiTargetIcon"),Ho=re("relativePlus","RelativePlusIcon"),Uo=re("relativeMinus","RelativeMinusIcon"),Go=re("parallelPlus","ParallelPlusIcon"),Wo=re("parallelMinus","ParallelMinusIcon"),Xs=Yt,Ys=Kt,Vs=Vt,Ks={prograde:Yt,retrograde:Fo,normal:Vt,antiNormal:Lo,radialOut:Do,radialIn:Kt,maneuver:Oo,target:zo,antiTarget:Bo,relativePlus:Ho,relativeMinus:Uo,parallelPlus:Go,parallelMinus:Wo};function qt(e){const{year:t,day:n,hour:a,minute:o}=Xe(),s=Number.isFinite(e)?Math.max(0,e):0,l=Math.floor(s/t)+1,u=s%t,d=Math.floor(u/n)+1,f=u%n;return{year:l,day:d,hour:Math.floor(f/a),minute:Math.floor(f%a/o),second:Math.floor(f%o)}}const Xo={year:1,day:1,hour:0,minute:0,second:0};function Yo(e){const{year:t,day:n,hour:a,minute:o}=Xe();return(e.year-1)*t+(e.day-1)*n+e.hour*a+e.minute*o+e.second}function Se(e){return ve(Ie("s",e))}function Vo({value:e,onChange:t,label:n,disabled:a,steps:o}){const s=c.useId(),l=`${s}-absent`,u=e!==null&&Number.isFinite(e)?e:null,d=u===null?null:qt(u),f=Xe(),m=o??[f.minute,10*f.minute,f.hour,f.day],[v,_]=c.useState(null),x=(i,$,N,b)=>r.jsxs(Ee,{gap:"caption",children:[r.jsx(Ge,{htmlFor:`${s}-${i}`,children:$}),r.jsx(Ft,{id:`${s}-${i}`,type:"number",inputMode:"numeric","aria-label":`${n} ${$}`,"aria-describedby":d===null?l:void 0,min:N,step:1,style:{width:b},disabled:a,placeholder:d===null?ye:void 0,value:v?.key===i?v.text:d===null?"":String(d[i]),onBlur:()=>_(null),onChange:w=>{const k=w.target.value;if(_({key:i,text:k}),k.trim()==="")return;const M=Number(k);if(!Number.isFinite(M))return;const y=Math.max(N,Math.round(M));t(Yo({...d??Xo,[i]:y}))}})]},i);return r.jsxs(Ee,{gap:"related-dense",role:"group","aria-label":n,children:[r.jsxs(Je,{gap:"related-dense",wrap:!0,justify:"start",children:[x("year","YEAR",1,"5rem"),x("day","DAY",1,"5rem"),x("hour","HR",0,"4rem"),x("minute","MIN",0,"4rem"),x("second","SEC",0,"4rem")]}),d===null&&r.jsx(Be,{id:l,level:"muted",size:"sm",children:`${ye} no ${n.toLowerCase()} to show. Type one to state it.`}),m.length===0?null:r.jsxs(Je,{gap:"related-packed",wrap:!0,justify:"start",children:[r.jsx(Be,{level:"faint",size:"sm",children:"NUDGE"}),m.map(i=>r.jsx(Oe,{variant:"ghost",size:"sm",disabled:a||u===null,"aria-label":`${n} earlier by ${Se(i)}`,onClick:()=>u!==null&&t(u-i),children:`-${Se(i)}`},`minus-${i}`)),m.map(i=>r.jsx(Oe,{variant:"ghost",size:"sm",disabled:a||u===null,"aria-label":`${n} later by ${Se(i)}`,onClick:()=>u!==null&&t(u+i),children:`+${Se(i)}`},`plus-${i}`))]})]})}const Ko=p.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function qo({observed:e,modelled:t,write:n}){if(t==null)return null;if(n===void 0){const a=t;return ze(e,a,kn())?r.jsx($t,{children:r.jsx(le,{value:a})}):null}return ze(e,t,Mn(n))?r.jsx($t,{children:n(t)}):null}function $t({children:e}){return r.jsx(Ko,{"data-modelled-alongside":"",children:r.jsx(We,{"data-held":"",kind:"modelled",caption:Sn,children:e})})}function qs({value:e}){return r.jsxs(r.Fragment,{children:[r.jsx(le,{value:e}),r.jsx(qo,{observed:e.value,modelled:Rn(e)})]})}function Zs({panZoom:e,label:t,style:n,onMouseMove:a,children:o}){const{style:s,ref:l,...u}=e.viewportProps;return r.jsxs(Zo,{...u,ref:l,onMouseMove:a,"aria-label":t,style:{...s,...n},children:[o,r.jsx(Jo,{role:"status",children:e.hint!==null&&r.jsx(Qo,{children:e.hint})})]})}const Zo=p.div`
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
`;function Js({filled:e,of:t,tone:n="info",label:a}){const o=`${e} of ${t}`;return r.jsx(ea,{role:"img","aria-label":a===void 0?o:`${a}: ${o}`,"data-pips":"",children:Array.from({length:t},(s,l)=>r.jsx(ta,{$colour:Wn[n],$filled:l<e},l))})}const ea=p.span`
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
`;function Qs({id:e,label:t,value:n,options:a,onChange:o,hint:s}){const l=a.findIndex(u=>er(u.choice,n));return r.jsxs(Pt,{children:[r.jsx(Ge,{htmlFor:e,children:t}),r.jsxs(En,{id:e,value:l===-1?"":String(l),onChange:u=>{const d=a[Number(u.target.value)];d!==void 0&&o(d.choice)},children:[l===-1&&r.jsx("option",{value:"",disabled:!0}),a.map((u,d)=>r.jsx("option",{value:d,children:u.label},`${u.choice.kind}-${u.choice.bodyIndex??"none"}`))]}),s!==void 0&&r.jsx(Tn,{children:s})]})}function na({as:e,interactive:t=!1,selected:n=!1,wrap:a=!1,nested:o=!1,type:s,children:l,...u}){return r.jsx(oa,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:n,$wrap:a,$nested:o,...u,children:l})}const Zt=p.span`
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
`,$a=c.forwardRef(function(t,n){return r.jsx(_a,{ref:n,type:"range",...t})}),_a=p.input`
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
`;function ja({label:e,children:t,detail:n,tone:a="neutral",...o}){return r.jsxs(ka,{...o,children:[r.jsx(Ma,{children:e}),r.jsx(Sa,{$tone:a,children:t}),n!=null&&r.jsx(Ra,{children:n})]})}const ka=p.dl`
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
`,Sa=p.dd`
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
`,Ra=p.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function ri({slot:e}){const t=Yn(e);return t.length===0?null:r.jsx(r.Fragment,{children:t.map(n=>r.jsx(ja,{label:n.label,detail:n.detail,tone:n.tone??"neutral",children:r.jsx(Ea,{entry:n})},n.id))})}function Ea({entry:e}){if(e.value!==void 0)return r.jsx(le,{value:e.value});if(e.text===void 0)return r.jsx(Vn,{});const t=In(e.held);return t===null?r.jsx(r.Fragment,{children:e.text}):r.jsx(We,{kind:t.kind,caption:t.caption,children:e.text})}const Ta=12,pe=12,Ia=12,jt=52,ee=10,Pe=4;function Aa(e,t,n){const a=l=>e.map(u=>Number.parseFloat(l.mark(u).replace(/[^\d.-]/g,""))),o=a(n(Pe)),s=l=>a(l).every((u,d)=>u===o[d]);if(s(t))return t;for(let l=0;l<Pe;l++){const u=n(l);if(s(u))return u}return n(Pe)}function oi({labelSide:e="left",value:t,min:n,max:a,width:o=92,height:s=220,fillHeight:l=!1,tickStep:u,zones:d,markers:f,groundLine:m,seaLevel:v,format:_,"aria-label":x}){const i=c.useRef(null),[$,N]=c.useState(s);c.useEffect(()=>{if(!l)return;const g=i.current;if(!g)return;const L=()=>{const te=g.clientHeight;te>0&&N(te)};L();const P=new ResizeObserver(L);return P.observe(g),()=>P.disconnect()},[l]);const b=l?$:s,w=Dt(t),{shown:k,held:M,caption:y,band:I}=w,{anchor:W,tip:F}=An(y),B=k?.magnitude??Number.NaN,z=Number.isFinite(B)?k:null,G=n.magnitude,X=a.magnitude,H=X-G,h=Number.isFinite(B)?B:G,E=H>0?Math.max(G,Math.min(X,h)):G,A=z!=null,T=ot(a,{format:_}),j=z==null?ye:at({magnitude:h,unit:z.unit},{format:T.rung}),S=g=>at(g),O=[...(f??[]).flatMap(g=>g.label===void 0?[]:[g.bounds===void 0?`${g.label} ${S(g.value)}`:`${g.label} ${S(g.value)}, between ${S(g.bounds.lo)} and ${S(g.bounds.hi)}`]),...(d??[]).flatMap(g=>g.label===void 0?[]:[`${g.label} zone ${S(g.from.min(g.to))} to ${S(g.from.max(g.to))}`]),...m===void 0?[]:[`ground ${S(m)}`],...v===void 0?[]:[`sea level ${S(v)}`]],D=z==null||I===null?null:Bn(I,z.unit)??null,K=Math.max(0,b-pe-Ia),U=g=>{if(!(H>0))return pe+K;const L=Math.max(0,Math.min(1,(g-G)/H));return pe+(1-L)*K},q=g=>U(g.magnitude),ne=pe,V=pe+K,C=e==="right",R=C?o-jt-ee:jt,J=C?R+ee+6:R-6,Z=C?"start":"end",Q=(g,L)=>{const P=q(g),te=g.greaterThan(a)?-1:g.lessThan(n)?1:0,se=R-4,ue=R+ee+4,me=R+ee/2;return r.jsxs("g",{"data-level":L?"sea":"ground",children:[r.jsx("line",{x1:se,y1:P,x2:ue,y2:P,stroke:L?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:L?1.5:2,strokeDasharray:L?"3 2":void 0}),te!==0&&r.jsx("polygon",{"data-off-scale":"true",points:`${me-4},${P-te*2} ${me+4},${P-te*2} ${me},${P+te*4}`,fill:L?"var(--color-info-mark)":"var(--color-text-primary)"})]})},Y=[],ae=u?.magnitude??0;if(ae>0&&H>0){const g=Math.ceil(G/ae),L=Math.floor(X/ae+1e-9);for(let P=g;P<=L;P++)Y.push(P===0?0:P*ae)}const Ye=Aa(Y,T,g=>ot(a,{format:_,decimals:g})),ce=U(E),de=g=>K>0?(pe+K-g)/K:0,je=D!==null&&ze(de(ce),[de(q(D.lo)),de(q(D.hi))],Nn())?D:null;return r.jsxs(Na,{ref:i,...Fn(w),...W,...A?{role:"meter","aria-label":tt(x,y),...et(y),"aria-valuenow":E,"aria-valuemin":G,"aria-valuemax":X,"aria-valuetext":O.length===0?j:`${j}; ${O.join("; ")}`}:{role:"img","aria-label":tt(`${x}: ${j}`,y),...et(y)},style:l?{height:"100%"}:void 0,children:[r.jsxs("svg",{width:o,height:b,viewBox:`0 0 ${o} ${b}`,"aria-hidden":"true",style:l?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[r.jsx("rect",{x:R,y:ne,width:ee,height:K,rx:2,fill:"var(--color-surface-raised)"}),d?.map(g=>{const L=q(g.from.max(g.to)),P=q(g.from.min(g.to)),te=Math.max(0,P-L);return r.jsx("g",{children:r.jsx("rect",{x:R,y:L,width:ee,height:te,fill:g.color??"var(--color-warn-mark)",opacity:.55})},`zone-${P}-${L}-${g.label??""}`)}),v!==void 0&&H>0&&Q(v,!0),m!==void 0&&H>0&&Q(m,!1),Y.map(g=>{const L=U(g),P=A&&Math.abs(L-Math.max(ne+4,Math.min(V-4,ce)))<Ta;return r.jsxs("g",{children:[r.jsx("line",{x1:C?R+ee+4:R-4,y1:L,x2:C?R+ee:R,y2:L,stroke:"var(--color-border-subtle)",strokeWidth:1}),!P&&r.jsx("text",{x:J,y:L,textAnchor:Z,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:Ye.mark(g)})]},`tick-${g}`)}),f?.map(g=>{const{bounds:L}=g,P=q(g.value),te=g.color??"var(--color-accent-fg)";return r.jsxs("g",{"data-marker":g.label,children:[r.jsx("line",{x1:R,y1:P,x2:R+ee,y2:P,stroke:te,strokeWidth:2,strokeDasharray:"2 2"}),r.jsx("polygon",{points:C?`${R},${P} ${R-5},${P-3} ${R-5},${P+3}`:`${R+ee},${P} ${R+ee+5},${P-3} ${R+ee+5},${P+3}`,fill:"none",stroke:te,strokeWidth:1.5}),L!==void 0&&["lo","hi"].map(se=>{const ue=q(L[se]);return r.jsx(Qe,{end:se,x1:R,y1:ue,x2:R+ee,y2:ue},se)})]},`marker-${P}-${g.label??""}`)}),je!==null&&["lo","hi"].map(g=>{const L=q(je[g]);return r.jsx(Qe,{end:g,x1:R,y1:L,x2:R+ee,y2:L},g)}),A&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:R-6,y1:ce,x2:R+ee+6,y2:ce,stroke:"var(--color-accent-fg)",strokeWidth:2}),r.jsxs("text",{x:C?J+2:J-2,y:Math.max(ne+4,Math.min(V-4,ce)),textAnchor:Z,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[T.mark(h),M&&r.jsx(Cn,{size:5})]})]}),!A&&r.jsx(Pn,{x:C?J+8:J-8,y:ne+K/2,size:11,children:ye}),T.symbol!==""&&r.jsx("text",{x:R+ee/2,y:ne-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:T.symbol})]}),F]})}const Na=p.div`
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
`,Ca=112;function Pa(e,t){try{return Ie(e,1).in(t).magnitude}catch{return Number.NaN}}function Fa(e,t){let n=e;return t.map((a,o)=>{if(!Number.isFinite(a)||a===0)return 0;const s=o===t.length-1?n/a:Math.trunc(n/a);return n-=s*a,s})}function si({value:e,unit:t,onChange:n,label:a,rungs:o,range:s,rate:l,disabled:u}){const d=c.useId(),{shown:f,held:m,caption:v}=Dt(e),_=m?r.jsx(We,{caption:v,children:a}):a,x=s,i=f?f.magnitude:Number.NaN,[$,N]=c.useState({}),b=y=>$[y]??null,w=(y,I)=>N(W=>({...W,[y]:I})),k=l?r.jsxs(Ee,{gap:"related-packed",children:[r.jsx(_o,{mode:"rate","aria-label":`${a} rate`,value:i,step:l.step,stepsPerSecond:l.stepsPerSecond,disabled:u||!Number.isFinite(i),format:Fe(t)?Da:void 0,width:Fe(t)?Ca:void 0,onChange:y=>n(ge(t,y))}),r.jsx(Be,{level:"faint",size:"sm",children:`${l.step} ${La(t)} / notch`})]}):null;if(Fe(t))return r.jsxs(De,{children:[r.jsx(Mt,{"aria-hidden":"true",children:_}),r.jsxs(Ee,{gap:"related-dense",children:[r.jsx(Vo,{label:m&&v!==null?`${a}, ${v}`:a,value:Number.isFinite(i)?i:null,disabled:u,steps:l?[]:void 0,onChange:y=>n(ge(t,y))}),k]})]});if(o&&o.length>0){const y=o.map(F=>Pa(String(F),t)),I=Fa(i,y),W=(F,B)=>{const z=Le(B);if(z===void 0){w(F,{text:B,against:I[F]});return}const G=I.map(H=>Number.isFinite(H)?H:0);G[F]=z;const X=G.reduce((H,h,E)=>Number.isFinite(y[E])?H+h*y[E]:H,0);w(F,{text:B,against:z}),n(ge(t,X))};return r.jsxs(De,{children:[r.jsx(Mt,{id:`${d}-label`,children:_}),r.jsx(Ha,{role:"group","aria-labelledby":`${d}-label`,children:o.map((F,B)=>r.jsxs(Ua,{children:[r.jsx(Ga,{type:"number",disabled:u,"aria-label":`${a} ${String(F)}`,value:kt(b(B),I[B]),onChange:z=>W(B,z.target.value)}),r.jsx(St,{"aria-hidden":"true",children:String(F)})]},String(F)))}),k]})}const M=y=>{const I=Le(y);w(0,{text:y,against:I??i}),I!==void 0&&n(ge(t,I))};return r.jsxs(De,{children:[r.jsx(za,{htmlFor:d,children:_}),r.jsxs(Ba,{children:[r.jsx(rn,{id:d,type:"number",disabled:u,min:x?.min,max:x?.max,step:x?.step,value:kt(b(0),i),onChange:y=>M(y.target.value)}),r.jsx(St,{"aria-hidden":"true",children:t})]}),x?r.jsx($a,{disabled:u,"aria-label":`${a} slider`,min:x.min,max:x.max,step:x.step??(x.max-x.min)/100,value:Number.isFinite(i)?i:x.min,onChange:y=>n(ge(t,Le(y.target.value)??x.min))}):null,k]})}function kt(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(Oa(t)):""}function La(e){return Ot(e)??e}function Fe(e){return Ot(e)==="s"}function Da(e){if(!Number.isFinite(e))return"";const{day:t,hour:n,minute:a,second:o}=qt(e),s=l=>String(l).padStart(2,"0");return`D${t} ${s(n)}:${s(a)}:${s(o)}`}function Le(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function Oa(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const De=p.div`
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
`,St=p.span`
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
`,Wa=200;function Rt(e={}){const t=e.quietMs??Wa;let n=null,a=Number.NEGATIVE_INFINITY,o=!0;return{wheel(s,l){return(n===null||s-a>t)&&(n=l&&o?"diagram":"page"),a=s,n},pageScrolled(){o=!1},pointerMovedInside(){o=!0},yieldToPage(){n="page"},get owner(){return n}}}const Xa=16,Ya=400,Et=120,Va=Math.log(1.15)/100,Ka=.01;function qa(e,t,n){const a=t===1?e*Xa:t===2?e*Ya:e,o=Math.max(-Et,Math.min(Et,a)),s=n&&Math.abs(a)<40?Ka:Va;return Math.exp(-o*s)}function Za(e,t,n={}){const{quietMs:a}=n,o=c.useRef(Rt({quietMs:a}));c.useEffect(()=>{o.current=Rt({quietMs:a})},[a]);const[s,l]=c.useState(null);c.useEffect(()=>{e.current!==s&&l(e.current)}),c.useEffect(()=>{if(!s||!t)return;const u=i=>i instanceof Node&&s.contains(i);let d=null;const f=(i,$)=>d!==null&&(Math.abs(i-d.x)>=1||Math.abs($-d.y)>=1),m=i=>{d={x:i.clientX,y:i.clientY},!(i.ctrlKey||i.metaKey)&&o.current.wheel(performance.now(),u(i.target))},v=i=>{const $=f(i.clientX,i.clientY);d={x:i.clientX,y:i.clientY},$&&u(i.target)&&o.current.pointerMovedInside()},_=i=>{const $=i.target;($===document||$ instanceof Node&&$.contains(s))&&o.current.pageScrolled()},x=i=>{const $=i.ctrlKey||i.metaKey;if(!$&&o.current.owner!=="diagram")return;const N=s.getBoundingClientRect(),b=qa(i.deltaY,i.deltaMode,$);if(t(b,i.clientX-N.left,i.clientY-N.top)===!1&&!$){o.current.yieldToPage();return}i.preventDefault()};return window.addEventListener("wheel",m,{capture:!0,passive:!0}),window.addEventListener("pointermove",v,{capture:!0,passive:!0}),window.addEventListener("scroll",_,{capture:!0,passive:!0}),s.addEventListener("wheel",x,{passive:!1}),()=>{window.removeEventListener("wheel",m,{capture:!0}),window.removeEventListener("pointermove",v,{capture:!0}),window.removeEventListener("scroll",_,{capture:!0}),s.removeEventListener("wheel",x)}},[s,t])}const Ja="Arrow keys pan, + and - zoom, 0 resets",Qa=.15,Tt=1.25,es={zoom:1,panX:0,panY:0};function ii(e={}){const{home:t=es,zoomAbout:n="pointer",panThreshold:a=3,enabled:o=!0}=e,[s,l]=c.useState(t),u=c.useRef({camera:s,options:e,home:t});u.current={camera:s,options:e,home:t};const d=c.useRef(null),f=e.elementRef??d,m=c.useCallback(()=>{const h=f.current?.getBoundingClientRect();return{w:h?.width??0,h:h?.height??0}},[]),v=c.useCallback(h=>{const{constrain:E}=u.current.options,A=m(),T=E&&A.w>0&&A.h>0?E(h,A):h;return u.current.camera=T,l(T),T},[m]),_=c.useCallback(h=>{v(typeof h=="function"?h(u.current.camera):h)},[v]),x=c.useCallback((h,E,A)=>{const T=u.current.camera,{minZoom:j=.1,maxZoom:S=50}=u.current.options,O=typeof j=="function"?j(T):j,D=Math.max(Math.min(O,T.zoom),Math.min(Math.max(S,T.zoom),T.zoom*h));if(D===T.zoom)return!1;const{w:K,h:U}=m();if(n==="centre")v({...T,zoom:D});else{const q=(E-K/2)/T.zoom+T.panX,ne=(A-U/2)/T.zoom+T.panY;v({zoom:D,panX:q-(E-K/2)/D,panY:ne-(A-U/2)/D})}return u.current.options.onManualMove?.("zoom"),!0},[v,m,n]);Za(f,c.useMemo(()=>o?x:null,[o,x]));const i=c.useCallback(()=>{u.current.options.onManualMove?.("reset"),v(u.current.home)},[v]),$=c.useCallback(h=>{const{w:E,h:A}=m();x(h,E/2,A/2)},[m,x]),[N,b]=c.useState(null),w=c.useRef(new Map),k=c.useRef(null),M=c.useRef(null),y=c.useRef(null),I=c.useRef(!1),[W,F]=c.useState(!1),B=c.useCallback(h=>{if(u.current.options.enabled!==!1&&!(h.pointerType==="mouse"&&h.button!==0)){if(w.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),w.current.size===2){const[E,A]=[...w.current.values()];k.current=null,M.current=Math.hypot(E.x-A.x,E.y-A.y);return}I.current=!1,y.current={x:h.clientX,y:h.clientY},k.current={x:h.clientX,y:h.clientY},M.current=null}},[]),z=c.useCallback(h=>{if(!w.current.has(h.pointerId))return;if(h.pointerType==="mouse"&&h.buttons===0){w.current.delete(h.pointerId),w.current.size===0&&(k.current=null,y.current=null,M.current=null,F(!1));return}if(w.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),w.current.size>=2){const[O,D]=[...w.current.values()],K=Math.hypot(O.x-D.x,O.y-D.y),U=M.current;if(M.current=K,U===null||U===0)return;const q=f.current?.getBoundingClientRect();I.current=!0,x(K/U,(O.x+D.x)/2-(q?.left??0),(O.y+D.y)/2-(q?.top??0));return}const E=y.current,A=k.current;if(!E||!A||!I.current&&Math.hypot(h.clientX-E.x,h.clientY-E.y)<a)return;I.current||(I.current=!0,F(!0),h.currentTarget.setPointerCapture?.(h.pointerId));const T=h.clientX-A.x,j=h.clientY-A.y;k.current={x:h.clientX,y:h.clientY};const S=u.current.camera;u.current.options.onManualMove?.("pan"),v({...S,panX:S.panX-T/S.zoom,panY:S.panY-j/S.zoom})},[v,a,x]),G=c.useCallback(h=>{if(w.current.delete(h.pointerId),h.currentTarget.releasePointerCapture?.(h.pointerId),w.current.size===1){const[E]=[...w.current.values()];k.current={...E},y.current={...E},M.current=null;return}w.current.size===0&&(k.current=null,y.current=null,M.current=null,F(!1))},[]),X=c.useCallback(h=>{if(u.current.options.enabled===!1||h.target!==h.currentTarget||h.ctrlKey||h.metaKey||h.altKey)return;const E=u.current.camera,{w:A,h:T}=m(),j=(S,O)=>{const D=(S==="panX"?A:T)/E.zoom;u.current.options.onManualMove?.("pan"),v({...E,[S]:E[S]+O*D*Qa})};switch(h.key){case"ArrowLeft":j("panX",-1);break;case"ArrowRight":j("panX",1);break;case"ArrowUp":j("panY",-1);break;case"ArrowDown":j("panY",1);break;case"+":case"=":$(Tt);break;case"-":case"_":$(1/Tt);break;case"0":i();break;default:return}h.preventDefault()},[v,i,m,$]);return{camera:s,setCamera:_,reset:i,zoomBy:$,viewportProps:{ref:f,tabIndex:0,role:"group",onPointerDown:B,onPointerMove:z,onPointerUp:G,onPointerCancel:G,onFocus:h=>{h.target===h.currentTarget&&h.currentTarget.matches(":focus-visible")&&b(Ja)},onBlur:()=>b(null),onKeyDown:X,style:{touchAction:"none",cursor:W?"grabbing":"grab"}},didPan:()=>I.current,isDragging:W,hint:N}}const It="(prefers-reduced-motion: reduce)";function li(){const[e,t]=c.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(It).matches);return c.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const n=window.matchMedia(It),a=()=>t(n.matches);return a(),n.addEventListener("change",a),()=>n.removeEventListener("change",a)},[]),e}const on=c.createContext(null);function ci({widget:e,scope:t,children:n}){const a=c.useMemo(()=>({widget:e,scope:t}),[e,t]);return r.jsx(on.Provider,{value:a,children:n})}function ui(e){const t=c.useContext(on);if(!(!t||t.widget!==e))return t.scope}function di(e){if(e.length===0)return[];const t=[[e[0]]];for(let n=1;n<e.length;n++)rs(e[n-1],e[n])?t.push([e[n]]):t[t.length-1].push(e[n]);return t}function fi(e,t,n,a){if(e.length===0||!(t>0))return[];const o=[e[0].x];let s=o[0],l=o[0];for(let u=1;u<e.length;u++){const d=o[u-1],f=d+ns(e[u].x-d,t);o.push(f),f<s&&(s=f),f>l&&(l=f)}return ts(s,l,n,a,t).map(u=>e.map((d,f)=>({...d,x:o[f]+u})))}function ts(e,t,n,a,o){if(!(o>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((n-t)/o),l=Math.floor((a-e)/o),u=[];for(let d=s;d<=l;d++)u.push(d*o+0);return u}function ns(e,t){const n=t/2;return((e+n)%t+t)%t-n}function rs(e,t){const n=At(e),a=At(t),o=as(n,a);if(o===0)return!1;const s=Nt(os(n,a));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=o)return!1;const u=[0,0,e.lat+t.lat>=0?1:-1],d=Nt(ss(u,s));if(d===null)return!1;const f=we(n,a);return we(n,d)>f&&we(a,d)>f}function At({lat:e,lon:t}){const n=e*Math.PI/180,a=t*Math.PI/180,o=Math.cos(n);return[o*Math.cos(a),o*Math.sin(a),Math.sin(n)]}function we(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function os(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function as(e,t){return Math.acos(Math.max(-1,Math.min(1,we(e,t))))}function ss(e,t){const n=we(e,t);return[e[0]-n*t[0],e[1]-n*t[1],e[2]-n*t[2]]}function Nt(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{$a as $,Ir as A,Ms as B,Es as C,Fs as D,zs as E,Ts as F,Do as G,Hs as H,sr as I,_o as J,Qs as K,Gs as L,Ks as M,Vt as N,qs as O,Zs as P,Uo as Q,dt as R,Ho as S,jr as T,Fo as U,ei as V,Zt as W,Ar as X,ut as Y,ni as Z,As as _,_s as a,ja as a0,ri as a1,Xs as a2,oi as a3,zo as a4,ai as a5,si as a6,ci as a7,ar as a8,gr as a9,Rt as aa,Jr as ab,kr as ac,Bs as ad,Mr as ae,ts as af,ti as ag,di as ah,Nr as ai,ii as aj,li as ak,Ns as al,Za as am,ui as an,Yo as ao,qa as ap,fi as aq,Lo as b,Bo as c,js as d,ks as e,Vs as f,Ss as g,Rs as h,Is as i,Cs as j,Ps as k,Ls as l,Ds as m,Os as n,fo as o,Ys as p,Us as q,Ws as r,Oo as s,Vo as t,qo as u,Wo as v,Go as w,Js as x,Yt as y,Kt as z};
