import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./ext-react-C0MU9AHG.js";import p,{css as J,keyframes as Jt}from"./ext-styled-components-DAuodqsN.js";import{o as Qt,e as en,c as tn,u as nn,I as Ye}from"./widgetSize-UUugKKOx.js";import{E as Rt,bE as ve,n as rn,F as St,m as He,y as Tt,aS as on,bB as Ve,bF as an,$ as Le,ab as ie,bG as sn,ad as Me,a7 as ln,a$ as cn,aZ as un,b0 as dn,a_ as fn,bH as pn,bI as hn,bo as mn,bJ as It,g as gn,af as le,e as De,Z as vn,aF as bn,ac as Ue,ag as At,ae as Ge,ak as Ke,V as xn,l as wn,b6 as yn,bt as $n,bl as _n,be as jn,bz as Ze,aB as kn,bK as Mn,bA as qe,bk as Je}from"./ModalSaveBar-D_QuktJU.js";import{aK as Te,b8 as Qe,cc as En,a_ as ee,aj as Rn,c7 as Sn,cH as Tn,b6 as Xe,l as In,c6 as Nt}from"./view-clock-formula-DWdx9uIK.js";import"./ksp-enum-names-BaUJpb7I.js";import"./screen-C-dJXqGO.js";import{Y as be,N as ge,Z as Ct,_ as An,H as et,w as pe,J as Nn,$ as Cn,a0 as Fn,j as je,n as Oe,T as Pn,X as Ft,d as Ln,c as Dn,h as On,z as tt,G as nt}from"./contributionsRead-ClHDEX59.js";import{a as zn,r as Bn,b as Hn}from"./Notice-BHJtYwzW.js";import{r as Un}from"./ext-react-dom-DCF8ZnaJ.js";import{l as Gn}from"./capability-lock-CWNk5I50.js";import"./lagrange-B04hUjNT.js";import"./use-transmissions-CKqZz1Fq.js";import{r as Xn}from"./control-frame-to-read-frame-C0oW5wrr.js";function fs({items:e,onSelect:t,onDismiss:n,"aria-label":a,style:o,header:s,footer:c,emptyLabel:i="No actions",otherLabel:f="Other"}){const d=u.useRef(null),m=u.useId(),[x,_]=u.useState(0),v=Qt(e,f),l=v.flatMap(([,g])=>g),y=l.length;u.useEffect(()=>{const g=d.current;if(!g)return;if(y===0){g.focus();return}g.querySelectorAll('[role="menuitem"]')[x]?.focus()},[x,y]),u.useEffect(()=>{const g=w=>{const j=d.current;j&&w.target instanceof Node&&!j.contains(w.target)&&n()};return document.addEventListener("pointerdown",g),()=>document.removeEventListener("pointerdown",g)},[n]);const C=u.useCallback(g=>{if(g.key==="Escape"){g.stopPropagation(),n();return}if(g.key==="Tab"){n();return}if(l.length!==0)switch(g.key){case"ArrowDown":g.preventDefault(),_(w=>Math.min(w+1,l.length-1));break;case"ArrowUp":g.preventDefault(),_(w=>Math.max(w-1,0));break;case"Home":g.preventDefault(),_(0);break;case"End":g.preventDefault(),_(l.length-1);break}},[l.length,n]);return r.jsxs(Wn,{ref:d,role:y>0?"menu":void 0,"aria-label":a,onKeyDown:C,tabIndex:-1,style:o,children:[s,l.length===0?r.jsx(Rt,{layout:"fill",children:i}):v.map(([g,w],j)=>r.jsxs("div",{...v.length>1?{role:"group","aria-labelledby":`${m}-group-${j}`}:{role:"none"},children:[v.length>1?r.jsx(Yn,{id:`${m}-group-${j}`,"aria-hidden":"true",children:g}):null,w.map(M=>{const $=l.indexOf(M);return r.jsx(Vn,{type:"button",role:"menuitem","aria-label":M["aria-label"],"aria-disabled":M.disabled,$disabled:M.disabled,tabIndex:$===x?0:-1,onFocus:()=>_($),onClick:()=>{M.disabled||t(M.key)},children:M.label},M.key)})]},g)),c]})}const Wn=p.div`
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
`,Yn=p.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,Vn=p.button`
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

  ${ve}
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
`;function ps({settings:e,values:t,onChange:n}){return e.length===0?null:r.jsx(r.Fragment,{children:e.flatMap(a=>a.fields.map(o=>{const c=t?.[a.namespace]?.[o.key]??o.default,i=o.label??o.key,f=`augment-setting-${a.namespace}-${o.key}`;return o.type===Te.Bool?r.jsx(rn,{children:r.jsx(en,{checked:!!c,onChange:d=>n(a.namespace,o.key,d),label:i})},`${a.namespace}.${o.key}`):r.jsxs(St,{children:[r.jsx(He,{htmlFor:f,children:i}),r.jsx(Tt,{id:f,type:o.type===Te.Number?"number":"text",value:c===void 0?"":String(c),onChange:d=>{const m=d.target.value;if(o.type!==Te.Number){n(a.namespace,o.key,m);return}if(m===""){n(a.namespace,o.key,void 0);return}const x=Number(m);Number.isFinite(x)&&n(a.namespace,o.key,x)}})]},`${a.namespace}.${o.key}`)}))})}function hs({fallback:e,gap:t="related-dense",children:n,...a}){return r.jsxs(r.Fragment,{children:[r.jsx(Pt,{$gap:t,...a,children:n}),r.jsx(Kn,{children:e})]})}const Pt=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>be[e]};
`,Kn=p.div`
  ${Pt}:not(:empty) + & {
    display: none;
  }
`,rt=12,ye=8;function Zn(e,t,n){return{left:ot(e.x,t.w,n.w),top:ot(e.y,t.h,n.h)}}function ot(e,t,n){const a=e+rt;if(a+t<=n-ye)return a;const o=e-rt-t;return o>=ye?o:Math.max(ye,n-ye-t)}const qn="–";function ms({min:e,max:t,wrapsAt:n,className:a,...o}){const s=Qe(e),c=Qe(t);return e==null||t==null||s===null||c===null?r.jsx(ke,{className:a,children:ge}):n!==void 0&&Math.abs(c-s)>=n/2?r.jsx(ke,{className:a,children:"(precesses)"}):r.jsx(on,{of:e.unit,separate:!0,...o,children:r.jsx(Jn,{min:e,max:t,className:a})})}function Jn({min:e,max:t,className:n}){return Ve(e),Ve(t),an(e)?r.jsx(ke,{className:n,children:r.jsxs(er,{children:[r.jsx("span",{"aria-hidden":"true",children:"~"}),r.jsx(Le,{children:"approximately "}),r.jsx(ie,{value:e})]})}):r.jsxs(ke,{className:n,children:[r.jsx(ie,{value:e}),r.jsx(Qn,{"aria-hidden":"true",children:qn}),r.jsx(Le,{children:" to "}),r.jsx(ie,{value:t})]})}const ke=p.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,Qn=p.span`
  color: var(--color-text-faint);
`,er=p.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`,tr={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function gs({surface:e,pad:t,bordered:n=!1,radius:a,children:o,...s}){return r.jsx(nr,{$surface:e,$pad:t,$bordered:n,$radius:a,...s,children:o})}const nr=p.div`
  ${({$surface:e})=>e&&`background: ${tr[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${Ct[e]};`}
  ${({$pad:e})=>e&&`padding: var(${An[e]});`}
`,vs=u.forwardRef(function({equalWidth:t=!0,gap:n,children:a,...o},s){return r.jsx(rr,{ref:s,$equalWidth:t,$gap:n,...o,children:a})}),rr=p.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?be[e]:"var(--gap-related)"};
`,or="3px",ar=p(Hn)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${et(e)};`:""}
  ${({$identityColor:e})=>e?`
    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: var(--size-mark);
      height: ${or};
      background: ${e};
      border-radius: var(--radius-regular) var(--radius-regular) 0 0;
    }
  `:""}
  ${({$dimmed:e,$tone:t})=>e?`
    --color-text-primary: var(--color-text-muted);
    color: var(--color-text-muted);
    ${t?`border-left-color: color-mix(in srgb, ${et(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function sr({tone:e,dimmed:t,identityColor:n,standalone:a,...o}){return Bn(ar,{...o,$tone:e,$dimmed:t,$identityColor:n,$standalone:a})}const bs=Object.assign(sr,zn);function ir(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const xs=u.forwardRef(function({label:t,icon:n,type:a,...o},s){return r.jsx("button",{ref:s,type:a??"button","aria-label":t,...o,children:r.jsx(Lt,{label:t,icon:n})})});function Lt({label:e,icon:t}){const n=u.useRef(null),a=u.useRef(null),[o,s]=u.useState(!0);return u.useLayoutEffect(()=>{const c=n.current,i=a.current;if(!c||!i)return;const f=()=>{s(i.scrollWidth<=c.clientWidth)};if(f(),typeof ResizeObserver>"u")return;const d=new ResizeObserver(f);return d.observe(c),d.observe(i),()=>d.disconnect()},[]),r.jsxs(lr,{ref:n,children:[r.jsx(cr,{ref:a,"aria-hidden":"true",children:e}),o?r.jsx(ur,{"aria-hidden":"true",children:e}):r.jsx(dr,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const lr=p.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,cr=p.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,ur=p.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,dr=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Ie=e=>pe(e),ne={contact:{"in-contact":()=>"In contact","loss-in":e=>`LOS in ${Ie(e)}`,"back-in":e=>`No contact, back in ${Ie(e)}`,none:e=>e==="unpowered"?"No contact, no electric charge aboard":"No contact"},delay:{held:e=>`${Ie(e)} signal delay`,absent:()=>"no signal path"},arrival:{expected:"Expected to arrive","likely-lost":"Likely lost"},sends:{now:()=>"Sends now",held:(e,t)=>t===void 0?`Held until ${pe(e)}`:`Held until ${pe(e)}, arrives ${pe(t)}`}};function fr(e){const{contact:t}=e,n=t.kind==="loss-in"||t.kind==="back-in"?ne.contact[t.kind](t.seconds):t.kind==="none"?ne.contact.none(t.reason):ne.contact[t.kind](),a=e.signalDelay===void 0?ne.delay.absent():ne.delay.held(e.signalDelay),o=e.sends==="now"&&e.arrival==="expected"?ne.sends.now():e.sends==="held"&&e.heldUntilUt!==void 0?ne.sends.held(e.heldUntilUt,e.arrivesUt):ne.arrival[e.arrival];return`${n} · ${a}
${o}`}function pr(e){if(e!==void 0)return e.arrival==="likely-lost"?"at-risk":e.sends==="held"?"held":void 0}function hr({holds:e,label:t,spinnerSize:n=12}){return r.jsxs(mr,{children:[r.jsx(gr,{"aria-hidden":"true",children:e}),r.jsx(vr,{children:r.jsx(tn,{size:n,"aria-label":t})})]})}const mr=p.span`
  display: inline-grid;
  & > * {
    grid-area: 1 / 1;
  }
`,gr=p.span`
  visibility: hidden;
`,vr=p.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;function at(e){try{return JSON.stringify(e)??""}catch{return null}}const br=4e3,st=8e3,xr=3e4;function Dt(e,t){return e.gateFor?e.gateFor(t):e.gate}function wr({handle:e,args:t,commandLabel:n,onConfirmed:a}){const[o,s]=u.useState("idle"),[c,i]=u.useState(null),[f,d]=u.useState(null),[m,x]=u.useState(!1),_=Dt(e,t),v=_?.blocked===!0,l=u.useRef(!0),y=u.useRef(0);u.useEffect(()=>(l.current=!0,()=>{l.current=!1}),[]);const C=e.founds,g=u.useRef(null),w=u.useRef(C?.length??0);u.useEffect(()=>{const S=C?.length??0,F=S>w.current;w.current=S;const E=C?.[S-1],R=g.current;if(!F||!E||R===null)return;const B=E.label!==void 0&&E.label!==""&&R.label!==void 0&&E.label!==R.label,h=E.args!==void 0&&R.args!==void 0&&JSON.stringify(E.args)!==JSON.stringify(R.args);B||h||(g.current=null,d(E),i(null),s("found"))},[C]),u.useEffect(()=>{if(o!=="armed")return;const S=setTimeout(()=>s("idle"),br);return()=>clearTimeout(S)},[o]),u.useEffect(()=>{if(o!=="refused"&&o!=="lost"&&o!=="found")return;const S=setTimeout(()=>{s("idle"),i(null),g.current=null,d(null)},st);return()=>clearTimeout(S)},[o]),u.useEffect(()=>{if(!m)return;const S=setTimeout(()=>x(!1),st);return()=>clearTimeout(S)},[m]),u.useEffect(()=>{v||x(!1)},[v]),u.useEffect(()=>{if(o!=="pending")return;const S=setTimeout(()=>s("idle"),xr);return()=>clearTimeout(S)},[o]);const j=u.useCallback(()=>{const S=y.current+1;y.current=S,g.current=null,s("pending"),i(null);const F=(E,R)=>{!l.current||y.current!==S||(i(R),s(E))};e.send(t,n?{label:n}:void 0).then(E=>{F("idle",null),a?.(E)},E=>{const R=En(E);if(R.kind==="lost"){g.current={args:t,label:n},F("lost",null);return}if(R.kind!=="refused"){F("idle",null);return}F("refused",{errorCode:R.errorCode,reason:R.reason,command:R.command,args:R.args,label:R.label??n,breach:R.breach,detail:R.detail})})},[e,t,n,a]),{hasUnconfirmed:M,hasFailure:$}=ir(e),D=u.useCallback(S=>{if(o!=="pending"){if(v){x(!0);return}if(o==="refused"||o==="lost"||o==="found"){i(null),d(null),g.current=null,s("idle");return}if(S&&o!=="armed"){U.current=at(t),s("armed");return}j()}},[o,v,j,t]),U=u.useRef(null);u.useEffect(()=>{o==="armed"&&at(t)!==U.current&&s("idle")},[o,t]);const A=o==="pending"||o==="refused"||o==="lost"||o==="found"?o:v?"blocked":o;return{phase:A,isPending:A==="pending",isArmed:A==="armed",isRefused:A==="refused",isLost:A==="lost",isFound:A==="found",isBlocked:A==="blocked",isShowingReason:A==="blocked"&&m,refusalText:c?dn(c):A==="blocked"&&_?fn({..._,label:_.label??n,args:_.args??t}):null,foundText:f?un(f):null,lossText:A==="lost"?cn({args:t,label:n}):null,hasUnconfirmed:M,hasFailure:$,press:D}}function ws({handle:e,args:t,commandLabel:n,label:a,confirmLabel:o,pendingLabel:s="Working...",refusedLabel:c="Refused",lostLabel:i="No reply",foundLabel:f="Found",confirmAriaLabel:d,pendingAriaLabel:m,blockedAriaLabel:x,pressed:_,variant:v="ghost",tone:l="neutral",icon:y,confirmIcon:C,onPressReady:g,size:w="md",confirmTone:j="go",onConfirmed:M,disabled:$,title:D,"aria-label":U,...A}){const{phase:S,isPending:F,isArmed:E,isRefused:R,isLost:B,isFound:h,isBlocked:T,isShowingReason:O,refusalText:N,foundText:k,lossText:I,hasUnconfirmed:W,hasFailure:H,press:G}=wr({handle:e,args:t,commandLabel:n,onConfirmed:M}),V=o!==void 0;u.useEffect(()=>{if(!(!g||F||$))return g(()=>G(V)),()=>g(null)},[g,F,$,G,V]);const Z=F?r.jsx(hr,{holds:a,label:s,spinnerSize:w==="sm"?10:12}):R?c:B?i:h?f:O?N:E?o:a,re=y!==void 0&&typeof Z=="string",Q=re?r.jsx(Lt,{label:Z,icon:E?C??y:y}):Z,P=y===void 0&&typeof a=="string"&&typeof o=="string"&&!R&&!B&&!h&&!O,xe=sn()&&e.railed===!0?null:R?N:B?I:h?k:null,ce=_===!0||E||R,ue=yr({restTone:v==="primary"?l:"neutral",filled:ce,isRefused:R,isFound:h,isArmed:E,confirmTone:j,tone:l}),te=e.sendStatus,Ee=te===void 0?D:[D,fr(te)].filter(Boolean).join(`
`);return r.jsxs(r.Fragment,{children:[r.jsx(Me,{text:k??N??(F?s:Ee),children:r.jsx(jr,{type:"button",$tone:ue,$variant:v,$fit:re,$size:w,$pressed:ce,$armed:E,$blocked:T,"aria-pressed":_,"aria-busy":F||void 0,"aria-disabled":T||F||void 0,disabled:$,"data-unconfirmed":W?"true":void 0,"data-failed":H?"true":void 0,"data-command-phase":S,"data-predicted":T?void 0:pr(te),"data-gate":T?"blocked":Dt(e,t)?.undetermined?"undetermined":void 0,"aria-label":(R?N??void 0:B?I??void 0:h?k??U:T?x??N??U:F?m??s:E?d:U)??(re?Z:void 0),onClick:()=>G(o!==void 0),"data-rest-label":P?a:void 0,"data-armed-label":P?o:void 0,...A,children:P?r.jsx(_r,{children:Q}):Q})}),r.jsx(ln,{visuallyHidden:!0,children:xe})]})}function yr(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const $r=Jt`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,_r=p.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,jr=p(pn)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&J`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${$r} 1s var(--ease-emphasis) infinite;
      }
    `}

  &:disabled {
    opacity: 0.5;
  }

  /* Dimmed toward the muted text token rather than faded, so the refusal reason stays readable; the warn border says the game refused. */
  ${({$blocked:e})=>e&&J`
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

  /* In flight, not unavailable: full strength with a spinner. */
  &[aria-busy="true"] {
    opacity: 1;
    cursor: progress;
  }
`;function ys({oneWaySeconds:e,delayReading:t,className:n}){const a=ee("s",e);return r.jsxs(kr,{className:n,role:"group","aria-label":"Signal delay",children:["one-way ~",r.jsx(ie,{value:hn(a,t),...a.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const kr=p.div`
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
`;function $s(e){const t=mn(),n=u.useId(),a=e!==null;u.useEffect(()=>{if(!(!t||!e))return t.register({id:n,...e})},[t,n,a]),u.useEffect(()=>{!t||!e||t.update(n,e)},[t,n,e])}function _s({at:e,atAspect:t,narrow:n,wide:a,children:o,...s}){return r.jsx(Er,{$query:Mr(e,t),$narrow:n,$wide:a,...s,children:o})}function Mr(e,t){const n=[e===void 0?void 0:`(min-width: ${e}px)`,t===void 0?void 0:`(aspect-ratio >= ${t})`].filter(a=>a!==void 0);return n.length===0?void 0:n.join(" and ")}const Er=p.div`
  ${({$narrow:e})=>e}
  ${({$query:e,$wide:t})=>e===void 0?"":J`
          @container ${e} {
            ${t}
          }
        `}
`;function js({slot:e,component:t,filter:n}){const a=Nn(e),o=n?a.filter(n):a;return o.length===0?null:r.jsx(t,{entries:o})}function Rr(e,t){return e.value!==void 0?r.jsx(ie,{value:e.value(t)??null}):e.render(t)}function ks({columns:e,rows:t,sections:n,rowKey:a,caption:o,empty:s,rowDetail:c,className:i}){const f=n??(t?[{id:"",title:null,rows:[...t]}]:[]),d=f.reduce((l,y)=>l+y.rows.length,0),[m,x]=u.useState(null),_=nn(m),v=It(m);return r.jsxs(Sr,{className:i,children:[r.jsx(Tr,{ref:x,tabIndex:v,children:r.jsxs(Ir,{children:[r.jsx(Ar,{children:o}),r.jsx("thead",{children:r.jsx("tr",{children:e.map(l=>r.jsx(Nr,{scope:"col",$align:l.align??"start",style:{width:l.width,minWidth:l.minWidth},children:l.header},l.key))})}),d===0&&s!==void 0&&r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx(Dr,{colSpan:e.length,children:s})})}),f.map(l=>r.jsxs("tbody",{children:[l.title!==null&&l.title!==void 0&&r.jsx("tr",{children:r.jsx(Cr,{scope:"rowgroup",colSpan:e.length,children:l.title})}),l.rows.map(y=>{const C=a(y),g=c?.(y),w=g!=null&&g!==!1&&g!=="";return r.jsxs(u.Fragment,{children:[r.jsx(Fr,{$hasDetail:w,children:e.map(j=>r.jsx(Pr,{as:j.rowHeader?"th":void 0,scope:j.rowHeader?"row":void 0,$align:j.align??"start",children:Rr(j,y)},j.key))}),w?r.jsx("tr",{children:r.jsx(Lr,{colSpan:e.length,children:g})}):null]},C)})]},l.id))]})}),r.jsx(Ye,{$position:"left",$visible:_.left}),r.jsx(Ye,{$position:"right",$visible:_.right})]})}const Sr=p.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Tr=p.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${ve}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Ir=p.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,Ar=p.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,Nr=p.th`
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
`,Cr=p.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,Fr=p.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,Pr=p.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,Lr=p.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,Dr=p.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`;function Or(e){const t=e.reason;switch(t){case"beyond-horizon":return e.resolvesByWaiting?"NOT YET COMPUTED":"CANNOT MODEL";case"under-physics":case"model-inapplicable":case"contested":case"insufficient-history":return"CANNOT MODEL";case"frame-unavailable":return"FRAME UNAVAILABLE";case"input-absent":return null;default:return t}}function Ms({declined:e,layout:t="inline"}){return r.jsx(Me,{text:e.note,focusable:!0,children:r.jsx(Rt,{role:"status",layout:t,children:Or(e)??"NO DATA"})})}function Es({label:e,children:t,"aria-label":n,className:a,variant:o="popover",panelHeight:s="cap",chevron:c=!0,asButton:i=!1,buttonSize:f="md",defaultOpen:d=!1}){const[m,x]=u.useState(d),_=u.useId(),v=u.useRef(null),[l,y]=u.useState(null),C=It(l),g=o==="inline"&&c,w=typeof e=="function"?e(m):e,j={ref:v,type:"button","aria-expanded":m,"aria-controls":_,"aria-label":n,onClick:()=>x($=>!$)},M=r.jsxs(r.Fragment,{children:[w,g&&r.jsx(Ur,{$open:m,children:r.jsx(gn,{size:"var(--icon-size-control)"})})]});return r.jsxs(zr,{className:a,$variant:o,onKeyDown:$=>{$.key==="Escape"&&m&&(x(!1),v.current?.focus())},children:[i?r.jsx(Hr,{...j,variant:"ghost",size:f,$inline:o==="inline",children:M}):r.jsx(Br,{...j,$variant:o,$align:o==="inline"&&!c?"end":"between",children:M}),m&&r.jsx(Gr,{ref:y,id:_,role:"group",tabIndex:C,$variant:o,$panelHeight:s,children:t})]})}const zr=p.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,Br=p.button`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-glyph);
  padding: var(--inset-glyph-button);
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  ${({$variant:e,$align:t})=>e==="inline"&&J`
      justify-content: ${t==="end"?"flex-end":"space-between"};
      width: 100%;
      text-align: start;
      border-radius: var(--radius-regular);
      &:hover {
        background: var(--color-surface-sunken);
      }
    `}
  ${le}
`,Hr=p(De)`
  ${({$inline:e})=>e&&J`
      align-self: flex-end;
    `}
`,Ur=p.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,Gr=p.div`
  ${({$variant:e})=>e==="popover"?J`
          position: absolute;
          top: 100%;
          right: 0;
          /* Local sibling ordering: lifts the popped panel above following rows, off the app z ladder. */
          z-index: 1;
          margin-top: var(--gap-disclosure);
        `:J`
          position: static;
          width: 100%;
          margin-top: var(--gap-disclosure);
        `}
  /* An accordion body grows in flow up to a cap, then scrolls, never spilling past the row below. */
  ${({$variant:e,$panelHeight:t})=>e==="inline"&&t==="cap"?J`
          max-height: 16rem;
          overflow-y: auto;
          ${ve}
        `:""}
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function Rs({space:e,...t}){return r.jsx(Xr,{$space:e,...t})}const Xr=p.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${be[e]} 0`:"0"};
`,Wr=160,Yr=24,Vr="...";function Ss({children:e,limit:t=Wr,subject:n,className:a}){const[o,s]=u.useState(!1),c=u.useId(),i=Kr(e,t);if(i===void 0)return r.jsx(r.Fragment,{children:e});const f=o?"Show less":"Show more";return r.jsxs(Zr,{className:a,children:[r.jsx("span",{id:c,children:o?e:`${i}${Vr}`})," ",r.jsx(qr,{type:"button","data-expandable-toggle":"","aria-controls":c,"aria-expanded":o,"aria-label":n===void 0?void 0:`${f} of ${n}`,onClick:()=>s(d=>!d),children:f})]})}function Kr(e,t){if(e.length<=t+Yr)return;const n=e.lastIndexOf(" ",t);return n<=0?e.slice(0,t):e.slice(0,n)}const Zr=p.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,qr=p(vn)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function Ts(e,t){const n=t.map(s=>s==null?null:Rn(e,s.index)),a=n.length>0&&n.every(s=>s?.currency==="exact"),o=n.reduce((s,c)=>c?.currency!=="held"||c.asOfUt===null?s:s===null?c.asOfUt:Math.min(s,c.asOfUt),null);return s=>{const c=a?Sn(s):s;return o===null?c:{state:"held",value:c,asOfUt:ee("ut",o),grade:"held",reckoning:{status:"none"}}}}function Jr({anchor:e,style:t,children:n,...a}){const[o,s]=u.useState(null),[c,i]=u.useState(null),f=u.useRef(e);f.current=e;const d=u.useCallback(()=>{if(!o)return;const m=f.current,x=typeof m=="function"?m():m;if(!x)return;const _=o.getBoundingClientRect(),v=Zn(x,{w:_.width,h:_.height},{w:window.innerWidth,h:window.innerHeight});i(l=>l&&l.left===v.left&&l.top===v.top?l:v)},[o]);return u.useLayoutEffect(()=>{d()}),u.useLayoutEffect(()=>{if(!o)return;const m=typeof ResizeObserver>"u"?null:new ResizeObserver(d);return m?.observe(o),window.addEventListener("resize",d),window.addEventListener("scroll",d,!0),()=>{m?.disconnect(),window.removeEventListener("resize",d),window.removeEventListener("scroll",d,!0)}},[o,d]),typeof document>"u"?null:Un.createPortal(r.jsx(Qr,{ref:s,style:{...t,left:c?.left??0,top:c?.top??0,visibility:c===null?"hidden":t?.visibility},...a,children:n}),document.body)}const Qr=p.div`
  position: fixed;
  z-index: var(--z-dropdown);
`,it=12,eo=8,to=120;function Is({trigger:e,"aria-label":t,children:n}){const[a,o]=u.useState(!1),s=u.useRef(null),c=u.useRef(null),i=u.useRef(null),f=u.useId(),d=u.useCallback(()=>{c.current!==null&&(clearTimeout(c.current),c.current=null)},[]),m=()=>{d(),o(!0)},x=()=>{d(),c.current=setTimeout(()=>o(!1),to)},_=u.useCallback(()=>{d(),o(!1)},[d]);u.useEffect(()=>d,[d]),u.useEffect(()=>{if(!a)return;const l=y=>{y.key==="Escape"&&(y.stopPropagation(),_())};return document.addEventListener("keydown",l,!0),()=>document.removeEventListener("keydown",l,!0)},[a,_]);const v=()=>{const l=s.current?.getBoundingClientRect();if(!l)return null;const y=i.current?.offsetHeight??0,C=l.top-y-2*it;return{x:l.left,y:C+it>=eo?C:l.bottom}};return r.jsxs(r.Fragment,{children:[r.jsx(no,{ref:s,type:"button","aria-label":t,"aria-describedby":a?f:void 0,onPointerEnter:m,onPointerLeave:x,onFocus:m,onBlur:_,children:e}),a&&r.jsx(Jr,{anchor:v,onPointerEnter:d,onPointerLeave:x,children:r.jsx(ro,{ref:i,id:f,role:"tooltip",children:n})})]})}const no=p.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${le}
`,ro=p.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function As({gap:e,inset:t=!1,wrap:n=!1,children:a,...o}){return r.jsx(oo,{$gap:e,$inset:t,$wrap:n,...o,children:a})}const oo=p.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?be[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,ao=4,so=80,lt=60,io=30,ze=24,lo=32,ct=56,ut=ze;function Ae(e,t,n){const{min:a,max:o,step:s}=t,c=e+n*s,i=Math.min(o,Math.max(a,c));if(!Number.isFinite(a))return i;const f=a+Math.round((i-a)/s)*s;return Math.min(o,Math.max(a,f))}function co(e){const{value:t,min:n,max:a,step:o,orientation:s="horizontal",onChange:c,format:i,"aria-label":f,label:d=f,disabled:m=!1,width:x,height:_}=e,v=s==="vertical",l=Math.max(ze,x??(v?ut:ct)),y=Math.max(ze,_??(v?ct:ut)),C=e.mode==="rate",g=n??Number.NEGATIVE_INFINITY,w=a??Number.POSITIVE_INFINITY,j={min:g,max:w,step:o},M=u.useRef(null),$=u.useRef(t);$.current=t;const D=u.useRef(c);D.current=c;const U=(e.mode==="rate"?e.stepsPerSecond:void 0)??io,[A,S]=u.useState(0),F=i?i(t):String(Math.round(t)),E=w>g&&Number.isFinite(w-g)?(t-g)/(w-g):.5,R=k=>{m||k!==t&&c(k)};u.useEffect(()=>{if(!C||A===0||m)return;const k=setInterval(()=>{const I=Math.max(g,Math.min(w,$.current+A*U*o*(lt/1e3)));I!==$.current&&D.current(I)},lt);return()=>clearInterval(k)},[C,A,m,o,U,g,w]);const B=k=>{if(m)return;let I=null;switch(k.key){case"ArrowRight":case"ArrowUp":I=Ae(t,j,1);break;case"ArrowLeft":case"ArrowDown":I=Ae(t,j,-1);break;case"Home":if(!Number.isFinite(g))return;I=g;break;case"End":if(!Number.isFinite(w))return;I=w;break;default:return}k.preventDefault(),R(I)},h=k=>s==="vertical"?k.clientY:k.clientX,T=k=>{m||(M.current={start:h(k),startValue:t},k.currentTarget.setPointerCapture(k.pointerId))},O=k=>{if(m||!M.current)return;const I=s==="vertical"?M.current.start-h(k):h(k)-M.current.start;if(C){const H=I/so;S(Math.max(-1,Math.min(1,H)));return}const W=I/ao;R(Ae(M.current.startValue,j,W))},N=k=>{M.current&&(M.current=null,S(0),k.currentTarget.hasPointerCapture(k.pointerId)&&k.currentTarget.releasePointerCapture(k.pointerId))};return r.jsxs(uo,{children:[d!==!1&&r.jsx(fo,{"aria-hidden":"true",children:d}),r.jsxs(po,{role:"slider","aria-label":f,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":n,"aria-valuemax":a,"aria-valuetext":F,"aria-disabled":m||void 0,tabIndex:m?-1:0,$orientation:s,$disabled:m,$width:l,$height:y,$compact:(v?l:y)<lo,onKeyDown:B,onPointerDown:T,onPointerMove:O,onPointerUp:N,onPointerCancel:N,children:[r.jsx(ho,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-E)*100}%)`}:{transform:`translateX(${(.5-E)*100}%)`},"aria-hidden":"true"}),r.jsx(mo,{$orientation:s,"aria-hidden":"true"}),r.jsx(go,{"aria-hidden":"true",children:F})]})]})}const uo=p.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,fo=p.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,po=p.div`
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

  ${le}
`,ho=p.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,mo=p.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,go=p.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function Ns({lock:e}){const t=Tn(e)?vo(e):e,n=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return r.jsx(Me,{text:n,focusable:!0,children:r.jsxs(xo,{role:"status","aria-label":n,children:[r.jsx(bn,{}),r.jsx(wo,{children:bo(t)})]})})}function vo(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...Gn(t,Cn),locks:t}}function bo(e){const t=[...new Set(e.locks.flatMap(n=>n.missing.map(a=>a.name)))];return t.length>0?t.join(", "):e.reason}const xo=p.span`
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
`,wo=p.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,dt=1.4,ft=1.7,yo="var(--icon-size-standalone)",$o=1.8,$e="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",pt="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",ht="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",mt="M7 4.5V19.5M17 4.5V19.5",ae=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,Ot={prograde:{colour:"prograde",paths:[$e,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[$e,ae(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",ae(12,11)]},radialOut:{colour:"radial",paths:[pt,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[pt,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",ae(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",ae(12,12)]},relativePlus:{colour:"target",paths:[$e,ht],dot:[12,12]},relativeMinus:{colour:"target",paths:[$e,ht,ae(12,12)]},parallelPlus:{colour:"target",paths:[mt],dot:[12,12]},parallelMinus:{colour:"target",paths:[mt,ae(12,12)]}},Cs=Object.keys(Ot);function gt({shape:e,colour:t,strokeWidth:n,dotRadius:a}){return r.jsxs("g",{fill:"none",stroke:t,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(o=>r.jsx("path",{d:o},o)),e.dot&&r.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:a,fill:t,stroke:"none"})]})}function K(e,t){const n=Ot[e],a=`var(--color-marker-${n.colour})`,o=u.forwardRef(({size:s=yo,strokeWidth:c=$o,label:i,style:f,...d},m)=>{const x={ref:m,xmlns:"http://www.w3.org/2000/svg",...typeof s=="number"?{width:s,height:s,style:f}:{style:{width:s,height:s,...f}},viewBox:"0 0 24 24","data-marker":e},_=r.jsxs(r.Fragment,{children:[r.jsx(gt,{shape:n,colour:"currentColor",strokeWidth:c+dt,dotRadius:ft+dt/2}),r.jsx(gt,{shape:n,colour:a,strokeWidth:c,dotRadius:ft})]});return i?r.jsx("svg",{...x,role:"img","aria-label":i,...d,children:_}):r.jsx("svg",{...x,"aria-hidden":"true",...d,children:_})});return o.displayName=t,o}const zt=K("prograde","ProgradeIcon"),_o=K("retrograde","RetrogradeIcon"),Bt=K("normal","NormalIcon"),jo=K("antiNormal","AntiNormalIcon"),ko=K("radialOut","RadialOutIcon"),Ht=K("radialIn","RadialInIcon"),Mo=K("maneuver","ManeuverIcon"),Eo=K("target","TargetIcon"),Ro=K("antiTarget","AntiTargetIcon"),So=K("relativePlus","RelativePlusIcon"),To=K("relativeMinus","RelativeMinusIcon"),Io=K("parallelPlus","ParallelPlusIcon"),Ao=K("parallelMinus","ParallelMinusIcon"),Fs=zt,Ps=Ht,Ls=Bt,Ds={prograde:zt,retrograde:_o,normal:Bt,antiNormal:jo,radialOut:ko,radialIn:Ht,maneuver:Mo,target:Eo,antiTarget:Ro,relativePlus:So,relativeMinus:To,parallelPlus:Io,parallelMinus:Ao};function No(e){if(e.frame==="scet")return{token:"SCET",spoken:"spacecraft event time",title:"Spacecraft event time: when this happens at the craft"};const{vantage:t}=e;return t===void 0?{token:"RECEIVED",spoken:"received",title:"When the telemetry showing this arrives"}:{token:`AT ${t}`,spoken:`received at ${t}`,title:`When the telemetry showing this arrives at ${t}`}}const Co=p.span`
  font-size: max(0.72em, 10px);
  opacity: 0.72;
  white-space: nowrap;
  text-transform: none;
`;function Os({value:e,context:t}){const a=Ue(typeof e=="number"?void 0:e),{shown:o,held:s,caption:c}=a,i=typeof e=="number"?e:o?.magnitude,f=At({...a,shown:i}),d=t&&No(t),m=Fn(i??Number.NaN);return r.jsxs(r.Fragment,{children:[s?r.jsx(Ge,{...f,caption:c,children:m}):r.jsx("span",{"data-figure":f["data-figure"],children:m}),d&&r.jsxs(r.Fragment,{children:[" ",r.jsx(Me,{text:d.title,focusable:!0,children:r.jsxs(Co,{children:[r.jsx("span",{"aria-hidden":"true",children:d.token}),r.jsx(Le,{children:d.spoken})]})})]})]})}function Ut(e){const{year:t,day:n,hour:a,minute:o}=Xe(),s=Number.isFinite(e)?Math.max(0,e):0,c=Math.floor(s/t)+1,i=s%t,f=Math.floor(i/n)+1,d=i%n;return{year:c,day:f,hour:Math.floor(d/a),minute:Math.floor(d%a/o),second:Math.floor(d%o)}}const Fo={year:1,day:1,hour:0,minute:0,second:0};function Po(e){const{year:t,day:n,hour:a,minute:o}=Xe();return(e.year-1)*t+(e.day-1)*n+e.hour*a+e.minute*o+e.second}function _e(e){return pe(ee("s",e))}function Lo({value:e,onChange:t,label:n,disabled:a,steps:o}){const s=u.useId(),c=`${s}-absent`,i=e!==null&&Number.isFinite(e)?e:null,f=i===null?null:Ut(i),d=Xe(),m=o??[d.minute,10*d.minute,d.hour,d.day],[x,_]=u.useState(null),v=(l,y,C,g)=>r.jsxs(je,{gap:"caption",children:[r.jsx(He,{htmlFor:`${s}-${l}`,children:y}),r.jsx(Tt,{id:`${s}-${l}`,type:"number",inputMode:"numeric","aria-label":`${n} ${y}`,"aria-describedby":f===null?c:void 0,min:C,step:1,style:{width:g},disabled:a,placeholder:f===null?ge:void 0,value:x?.key===l?x.text:f===null?"":String(f[l]),onBlur:()=>_(null),onChange:w=>{const j=w.target.value;if(_({key:l,text:j}),j.trim()==="")return;const M=Number(j);if(!Number.isFinite(M))return;const $=Math.max(C,Math.round(M));t(Po({...f??Fo,[l]:$}))}})]},l);return r.jsxs(je,{gap:"related-dense",role:"group","aria-label":n,children:[r.jsxs(Ke,{gap:"related-dense",wrap:!0,justify:"start",children:[v("year","YEAR",1,"5rem"),v("day","DAY",1,"5rem"),v("hour","HR",0,"4rem"),v("minute","MIN",0,"4rem"),v("second","SEC",0,"4rem")]}),f===null&&r.jsx(Oe,{id:c,level:"muted",size:"sm",children:`${ge} no ${n.toLowerCase()} to show. Type one to state it.`}),m.length===0?null:r.jsxs(Ke,{gap:"related-packed",wrap:!0,justify:"start",children:[r.jsx(Oe,{level:"faint",size:"sm",children:"NUDGE"}),m.map(l=>r.jsx(De,{variant:"ghost",size:"sm",disabled:a||i===null,"aria-label":`${n} earlier by ${_e(l)}`,onClick:()=>i!==null&&t(i-l),children:`-${_e(l)}`},`minus-${l}`)),m.map(l=>r.jsx(De,{variant:"ghost",size:"sm",disabled:a||i===null,"aria-label":`${n} later by ${_e(l)}`,onClick:()=>i!==null&&t(i+l),children:`+${_e(l)}`},`plus-${l}`))]})]})}function zs({panZoom:e,label:t,style:n,onMouseMove:a,children:o}){const{style:s,ref:c,...i}=e.viewportProps;return r.jsxs(Do,{...i,ref:c,onMouseMove:a,"aria-label":t,style:{...s,...n},children:[o,r.jsx(Oo,{role:"status",children:e.hint!==null&&r.jsx(zo,{children:e.hint})})]})}const Do=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  ${ve}
`,Oo=p.div`
  position: absolute;
  bottom: var(--gap-related);
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-base);
  max-width: calc(100% - 16px);
  pointer-events: none;
`,zo=p.div`
  padding: var(--inset-control);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function Bs({filled:e,of:t,tone:n="info",label:a}){const o=`${e} of ${t}`;return r.jsx(Bo,{role:"img","aria-label":a===void 0?o:`${a}: ${o}`,"data-pips":"",children:Array.from({length:t},(s,c)=>r.jsx(Ho,{$colour:Pn[n],$filled:c<e},c))})}const Bo=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  flex: none;
`,Ho=p.span`
  width: 1em;
  height: 1em;
  border-radius: var(--radius-circle);
  border: 2px solid ${({$colour:e})=>e};
  background: ${({$colour:e,$filled:t})=>t?e:"transparent"};
`;function Hs({id:e,label:t,value:n,options:a,onChange:o,hint:s}){const c=a.findIndex(i=>Xn(i.choice,n));return r.jsxs(St,{children:[r.jsx(He,{htmlFor:e,children:t}),r.jsxs(xn,{id:e,value:c===-1?"":String(c),onChange:i=>{const f=a[Number(i.target.value)];f!==void 0&&o(f.choice)},children:[c===-1&&r.jsx("option",{value:"",disabled:!0}),a.map((i,f)=>r.jsx("option",{value:f,children:i.label},`${i.choice.kind}-${i.choice.bodyIndex??"none"}`))]}),s!==void 0&&r.jsx(wn,{children:s})]})}const Uo=p.span`
  display: inline-grid;
  justify-items: center;
`,Go=p.span`
  grid-area: 1 / 1;
`,Xo=p.span`
  grid-area: 1 / 1;
  visibility: hidden;

  &::before {
    content: attr(data-word);
  }
`;function Us({shown:e,reserve:t}){return r.jsxs(Uo,{children:[[...new Set(t)].map(n=>r.jsx(Xo,{"data-word":n,"aria-hidden":"true"},n)),r.jsx(Go,{children:e})]})}function Wo({as:e,interactive:t=!1,selected:n=!1,wrap:a=!1,nested:o=!1,type:s,children:c,...i}){return r.jsx(Vo,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:n,$wrap:a,$nested:o,...i,children:c})}const Gt=p.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,Yo="min(12ch, 100%)",Vo=p.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-row);
  font-size: var(--font-size-compact);
  padding: var(--inset-row);
  ${({$wrap:e})=>e?`
  flex-wrap: wrap;
  row-gap: var(--gap-row-wrap);

  & > ${Gt} {
    min-width: ${Yo};
  }
`:""}
  ${({$interactive:e})=>e?J`
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

  ${ve}
`:""}
  ${({$interactive:e,$selected:t})=>e&&t?`
  ${Ft("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}
`,Gs=Object.assign(Wo,{Name:Gt}),Ko=65,Xt=38,Zo=72,qo=Zo-Xt,Wt=55,Be=137.508,Jo=10,Qo=1.5,ea=64,ta=60,na=241,ra=Be-Math.floor(Be),he=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function Yt(e,t){const n=Math.abs(e-t)%360;return n>180?360-n:n}const oa=he.map((e,t)=>{let n=1/0;for(let o=0;o<he.length;o++)o!==t&&(n=Math.min(n,Yt(e.hue,he[o].hue)));const a=n/2;return Math.max(0,Math.min(Jo,a-Qo))}),aa=he.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:oa[t]}));function sa(e,t=he){return t.find(n=>n.aliases.some(a=>e.includes(a)))}function Vt(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function vt(e,t){return(e%t+t)%t}function ia(e){const n=Vt(`light:${e}`)/4294967295;return Xt+n*qo}function la(e){const t=sa(e);if(!t)return;const n=t.aliases.length===1?Wt:ia(e);return{hue:t.hue,lightness:n}}function ca(e){return aa.some(({centre:t,radius:n})=>Yt(e,t)<n)}function ua(e){const t=Vt(e);let n=vt(t*Be,360);const a=ta+(t>>>8)%na+ra;let o=0;for(;ca(n)&&o<ea;)n=vt(n+a,360),o++;return n}function Xs(e){const t=e.trim().toLowerCase(),n=la(t),a=n?.hue??ua(t),o=n?.lightness??Wt;return`hsl(${Math.round(a)}deg ${Ko}% ${Math.round(o)}%)`}function Ws({selected:e,gap:t="caption",layout:n="stack",selectedLook:a="fill",children:o,...s}){return r.jsx(da,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:n,$look:a,...s,children:o})}const da=p.button`
  display: flex;
  ${({$layout:e})=>e==="split"?J`
          justify-content: space-between;
          align-items: baseline;
          > :first-child {
            flex: 1;
            min-width: 0;
          }
        `:J`
          flex-direction: column;
        `}
  gap: ${({$gap:e})=>be[e]};
  width: 100%;
  text-align: left;
  padding: var(--inset-selectable-row);
  border-radius: ${Ct.regular};
  border: 1px solid
    ${({$selected:e,$look:t})=>e?t==="outline"?"var(--color-accent-fg)":"transparent":"var(--color-border-subtle)"};
  ${({$selected:e,$look:t})=>e?t==="outline"?"background: var(--color-surface-raised); color: inherit;":Ft("go"):"background: transparent; color: inherit;"}
  cursor: pointer;
  font-family: inherit;

  ${({$selected:e})=>e?"":J`
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

  ${le}
`,fa=u.forwardRef(function(t,n){return r.jsx(pa,{ref:n,type:"range",...t})}),pa=p.input`
  width: 100%;
  min-width: 0;
  margin: 0;
  background: none;
  accent-color: var(--color-accent-fg);
  cursor: pointer;

  ${le}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function ha({label:e,children:t,detail:n,tone:a="neutral",...o}){return r.jsxs(ma,{...o,children:[r.jsx(ga,{children:e}),r.jsx(va,{$tone:a,children:t}),n!=null&&r.jsx(ba,{children:n})]})}const ma=p.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,ga=p.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,va=p.dd`
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
  color: ${({$tone:e})=>Ln[e]};
`,ba=p.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function Ys({slot:e}){const t=Dn(e);return t.length===0?null:r.jsx(r.Fragment,{children:t.map(n=>r.jsx(ha,{label:n.label,detail:n.detail,tone:n.tone??"neutral",children:r.jsx(xa,{entry:n})},n.id))})}function xa({entry:e}){if(e.value!==void 0)return r.jsx(ie,{value:e.value});if(e.text===void 0)return r.jsx(On,{});const t=yn(e.held);return t===null?r.jsx(r.Fragment,{children:e.text}):r.jsx(Ge,{kind:t.kind,caption:t.caption,children:e.text})}const wa=12,se=12,ya=12,bt=52,X=10,Ne=4;function $a(e,t,n){const a=c=>e.map(i=>Number.parseFloat(c.mark(i).replace(/[^\d.-]/g,""))),o=a(n(Ne)),s=c=>a(c).every((i,f)=>i===o[f]);if(s(t))return t;for(let c=0;c<Ne;c++){const i=n(c);if(s(i))return i}return n(Ne)}function Vs({labelSide:e="left",value:t,min:n,max:a,width:o=92,height:s=220,fillHeight:c=!1,tickStep:i,zones:f,markers:d,groundLine:m,seaLevel:x,format:_,"aria-label":v}){const l=u.useRef(null),[y,C]=u.useState(s);u.useEffect(()=>{if(!c)return;const b=l.current;if(!b)return;const z=()=>{const q=b.clientHeight;q>0&&C(q)};z();const L=new ResizeObserver(z);return L.observe(b),()=>L.disconnect()},[c]);const g=c?y:s,w=Ue(t),{shown:j,held:M,caption:$,band:D}=w,{anchor:U,tip:A}=$n($),S=j?.magnitude??Number.NaN,F=Number.isFinite(S)?j:null,E=n.magnitude,R=a.magnitude,B=R-E,h=Number.isFinite(S)?S:E,T=B>0?Math.max(E,Math.min(R,h)):E,O=F!=null,N=tt(a,{format:_}),k=F==null?ge:nt({magnitude:h,unit:F.unit},{format:N.rung}),I=b=>nt(b),W=[...(d??[]).flatMap(b=>b.label===void 0?[]:[b.bounds===void 0?`${b.label} ${I(b.value)}`:`${b.label} ${I(b.value)}, between ${I(b.bounds.lo)} and ${I(b.bounds.hi)}`]),...(f??[]).flatMap(b=>b.label===void 0?[]:[`${b.label} zone ${I(b.from.min(b.to))} to ${I(b.from.max(b.to))}`]),...m===void 0?[]:[`ground ${I(m)}`],...x===void 0?[]:[`sea level ${I(x)}`]],H=F==null||D===null?null:In(D,F.unit)??null,G=Math.max(0,g-se-ya),V=b=>{if(!(B>0))return se+G;const z=Math.max(0,Math.min(1,(b-E)/B));return se+(1-z)*G},Y=b=>V(b.magnitude),Z=se,re=se+G,Q=e==="right",P=Q?o-bt-X:bt,oe=Q?P+X+6:P-6,xe=Q?"start":"end",ce=(b,z)=>{const L=Y(b),q=b.greaterThan(a)?-1:b.lessThan(n)?1:0,fe=P-4,we=P+X+4,Se=P+X/2;return r.jsxs("g",{"data-level":z?"sea":"ground",children:[r.jsx("line",{x1:fe,y1:L,x2:we,y2:L,stroke:z?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:z?1.5:2,strokeDasharray:z?"3 2":void 0}),q!==0&&r.jsx("polygon",{"data-off-scale":"true",points:`${Se-4},${L-q*2} ${Se+4},${L-q*2} ${Se},${L+q*4}`,fill:z?"var(--color-info-mark)":"var(--color-text-primary)"})]})},ue=[],te=i?.magnitude??0;if(te>0&&B>0){const b=Math.ceil(E/te),z=Math.floor(R/te+1e-9);for(let L=b;L<=z;L++)ue.push(L===0?0:L*te)}const Ee=$a(ue,N,b=>tt(a,{format:_,decimals:b})),de=V(T),Re=b=>G>0?(se+G-b)/G:0,We=H!==null&&_n(Re(de),[Re(Y(H.lo)),Re(Y(H.hi))],jn())?H:null;return r.jsxs(_a,{ref:l,...At(w),...U,...O?{role:"meter","aria-label":Je(v,$),...qe($),"aria-valuenow":T,"aria-valuemin":E,"aria-valuemax":R,"aria-valuetext":W.length===0?k:`${k}; ${W.join("; ")}`}:{role:"img","aria-label":Je(`${v}: ${k}`,$),...qe($)},style:c?{height:"100%"}:void 0,children:[r.jsxs("svg",{width:o,height:g,viewBox:`0 0 ${o} ${g}`,"aria-hidden":"true",style:c?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[r.jsx("rect",{x:P,y:Z,width:X,height:G,rx:2,fill:"var(--color-surface-raised)"}),f?.map(b=>{const z=Y(b.from.max(b.to)),L=Y(b.from.min(b.to)),q=Math.max(0,L-z);return r.jsx("g",{children:r.jsx("rect",{x:P,y:z,width:X,height:q,fill:b.color??"var(--color-warn-mark)",opacity:.55})},`zone-${L}-${z}-${b.label??""}`)}),x!==void 0&&B>0&&ce(x,!0),m!==void 0&&B>0&&ce(m,!1),ue.map(b=>{const z=V(b),L=O&&Math.abs(z-Math.max(Z+4,Math.min(re-4,de)))<wa;return r.jsxs("g",{children:[r.jsx("line",{x1:Q?P+X+4:P-4,y1:z,x2:Q?P+X:P,y2:z,stroke:"var(--color-border-subtle)",strokeWidth:1}),!L&&r.jsx("text",{x:oe,y:z,textAnchor:xe,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:Ee.mark(b)})]},`tick-${b}`)}),d?.map(b=>{const{bounds:z}=b,L=Y(b.value),q=b.color??"var(--color-accent-fg)";return r.jsxs("g",{"data-marker":b.label,children:[r.jsx("line",{x1:P,y1:L,x2:P+X,y2:L,stroke:q,strokeWidth:2,strokeDasharray:"2 2"}),r.jsx("polygon",{points:Q?`${P},${L} ${P-5},${L-3} ${P-5},${L+3}`:`${P+X},${L} ${P+X+5},${L-3} ${P+X+5},${L+3}`,fill:"none",stroke:q,strokeWidth:1.5}),z!==void 0&&["lo","hi"].map(fe=>{const we=Y(z[fe]);return r.jsx(Ze,{end:fe,x1:P,y1:we,x2:P+X,y2:we},fe)})]},`marker-${L}-${b.label??""}`)}),We!==null&&["lo","hi"].map(b=>{const z=Y(We[b]);return r.jsx(Ze,{end:b,x1:P,y1:z,x2:P+X,y2:z},b)}),O&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:P-6,y1:de,x2:P+X+6,y2:de,stroke:"var(--color-accent-fg)",strokeWidth:2}),r.jsxs("text",{x:Q?oe+2:oe-2,y:Math.max(Z+4,Math.min(re-4,de)),textAnchor:xe,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[N.mark(h),M&&r.jsx(kn,{size:5})]})]}),!O&&r.jsx(Mn,{x:Q?oe+8:oe-8,y:Z+G/2,size:11,children:ge}),N.symbol!==""&&r.jsx("text",{x:P+X/2,y:Z-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:N.symbol})]}),A]})}const _a=p.div`
  display: block;
  max-width: 100%;
`,Ks=p.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,ja=112;function ka(e,t){try{return ee(e,1).in(t).magnitude}catch{return Number.NaN}}function Ma(e,t){let n=e;return t.map((a,o)=>{if(!Number.isFinite(a)||a===0)return 0;const s=o===t.length-1?n/a:Math.trunc(n/a);return n-=s*a,s})}function Zs({value:e,unit:t,onChange:n,label:a,rungs:o,range:s,rate:c,disabled:i}){const f=u.useId(),{shown:d,held:m,caption:x}=Ue(e),_=m?r.jsx(Ge,{caption:x,children:a}):a,v=s,l=d?d.magnitude:Number.NaN,[y,C]=u.useState({}),g=$=>y[$]??null,w=($,D)=>C(U=>({...U,[$]:D})),j=c?r.jsxs(je,{gap:"related-packed",children:[r.jsx(co,{mode:"rate","aria-label":`${a} rate`,value:l,step:c.step,stepsPerSecond:c.stepsPerSecond,disabled:i||!Number.isFinite(l),format:Ce(t)?Ra:void 0,width:Ce(t)?ja:void 0,onChange:$=>n(ee(t,$))}),r.jsx(Oe,{level:"faint",size:"sm",children:`${c.step} ${Ea(t)} / notch`})]}):null;if(Ce(t))return r.jsxs(Pe,{children:[r.jsx(wt,{"aria-hidden":"true",children:_}),r.jsxs(je,{gap:"related-dense",children:[r.jsx(Lo,{label:m&&x!==null?`${a}, ${x}`:a,value:Number.isFinite(l)?l:null,disabled:i,steps:c?[]:void 0,onChange:$=>n(ee(t,$))}),j]})]});if(o&&o.length>0){const $=o.map(A=>ka(String(A),t)),D=Ma(l,$),U=(A,S)=>{const F=Fe(S);if(F===void 0){w(A,{text:S,against:D[A]});return}const E=D.map(B=>Number.isFinite(B)?B:0);E[A]=F;const R=E.reduce((B,h,T)=>Number.isFinite($[T])?B+h*$[T]:B,0);w(A,{text:S,against:F}),n(ee(t,R))};return r.jsxs(Pe,{children:[r.jsx(wt,{id:`${f}-label`,children:_}),r.jsx(Aa,{role:"group","aria-labelledby":`${f}-label`,children:o.map((A,S)=>r.jsxs(Na,{children:[r.jsx(Ca,{type:"number",disabled:i,"aria-label":`${a} ${String(A)}`,value:xt(g(S),D[S]),onChange:F=>U(S,F.target.value)}),r.jsx(yt,{"aria-hidden":"true",children:String(A)})]},String(A)))}),j]})}const M=$=>{const D=Fe($);w(0,{text:$,against:D??l}),D!==void 0&&n(ee(t,D))};return r.jsxs(Pe,{children:[r.jsx(Ta,{htmlFor:f,children:_}),r.jsxs(Ia,{children:[r.jsx(Zt,{id:f,type:"number",disabled:i,min:v?.min,max:v?.max,step:v?.step,value:xt(g(0),l),onChange:$=>M($.target.value)}),r.jsx(yt,{"aria-hidden":"true",children:t})]}),v?r.jsx(fa,{disabled:i,"aria-label":`${a} slider`,min:v.min,max:v.max,step:v.step??(v.max-v.min)/100,value:Number.isFinite(l)?l:v.min,onChange:$=>n(ee(t,Fe($.target.value)??v.min))}):null,j]})}function xt(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(Sa(t)):""}function Ea(e){return Nt(e)??e}function Ce(e){return Nt(e)==="s"}function Ra(e){if(!Number.isFinite(e))return"";const{day:t,hour:n,minute:a,second:o}=Ut(e),s=c=>String(c).padStart(2,"0");return`D${t} ${s(n)}:${s(a)}:${s(o)}`}function Fe(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function Sa(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const Pe=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,Kt=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Ta=p.label`
  ${Kt}
`,wt=p.span`
  ${Kt}
`,Ia=p.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,Zt=p.input`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-field-compact);
  border-radius: var(--radius-regular);
  text-align: right;
  font-variant-numeric: tabular-nums;
  min-width: 0;

  ${le}
`,yt=p.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Aa=p.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,Na=p.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,Ca=p(Zt)`
  width: 4.5em;
`,Fa=200;function $t(e={}){const t=e.quietMs??Fa;let n=null,a=Number.NEGATIVE_INFINITY,o=!0;return{wheel(s,c){return(n===null||s-a>t)&&(n=c&&o?"diagram":"page"),a=s,n},pageScrolled(){o=!1},pointerMovedInside(){o=!0},yieldToPage(){n="page"},get owner(){return n}}}const Pa=16,La=400,_t=120,Da=Math.log(1.15)/100,Oa=.01;function za(e,t,n){const a=t===1?e*Pa:t===2?e*La:e,o=Math.max(-_t,Math.min(_t,a)),s=n&&Math.abs(a)<40?Oa:Da;return Math.exp(-o*s)}function Ba(e,t,n={}){const{quietMs:a}=n,o=u.useRef($t({quietMs:a}));u.useEffect(()=>{o.current=$t({quietMs:a})},[a]);const[s,c]=u.useState(null);u.useEffect(()=>{e.current!==s&&c(e.current)}),u.useEffect(()=>{if(!s||!t)return;const i=l=>l instanceof Node&&s.contains(l);let f=null;const d=(l,y)=>f!==null&&(Math.abs(l-f.x)>=1||Math.abs(y-f.y)>=1),m=l=>{f={x:l.clientX,y:l.clientY},!(l.ctrlKey||l.metaKey)&&o.current.wheel(performance.now(),i(l.target))},x=l=>{const y=d(l.clientX,l.clientY);f={x:l.clientX,y:l.clientY},y&&i(l.target)&&o.current.pointerMovedInside()},_=l=>{const y=l.target;(y===document||y instanceof Node&&y.contains(s))&&o.current.pageScrolled()},v=l=>{const y=l.ctrlKey||l.metaKey;if(!y&&o.current.owner!=="diagram")return;const C=s.getBoundingClientRect(),g=za(l.deltaY,l.deltaMode,y);if(t(g,l.clientX-C.left,l.clientY-C.top)===!1&&!y){o.current.yieldToPage();return}l.preventDefault()};return window.addEventListener("wheel",m,{capture:!0,passive:!0}),window.addEventListener("pointermove",x,{capture:!0,passive:!0}),window.addEventListener("scroll",_,{capture:!0,passive:!0}),s.addEventListener("wheel",v,{passive:!1}),()=>{window.removeEventListener("wheel",m,{capture:!0}),window.removeEventListener("pointermove",x,{capture:!0}),window.removeEventListener("scroll",_,{capture:!0}),s.removeEventListener("wheel",v)}},[s,t])}const Ha="Arrow keys pan, + and - zoom, 0 resets",Ua=.15,jt=1.25,Ga={zoom:1,panX:0,panY:0};function qs(e={}){const{home:t=Ga,zoomAbout:n="pointer",panThreshold:a=3,enabled:o=!0}=e,[s,c]=u.useState(t),i=u.useRef({camera:s,options:e,home:t});i.current={camera:s,options:e,home:t};const f=u.useRef(null),d=e.elementRef??f,m=u.useCallback(()=>{const h=d.current?.getBoundingClientRect();return{w:h?.width??0,h:h?.height??0}},[]),x=u.useCallback(h=>{const{constrain:T}=i.current.options,O=m(),N=T&&O.w>0&&O.h>0?T(h,O):h;return i.current.camera=N,c(N),N},[m]),_=u.useCallback(h=>{x(typeof h=="function"?h(i.current.camera):h)},[x]),v=u.useCallback((h,T,O)=>{const N=i.current.camera,{minZoom:k=.1,maxZoom:I=50}=i.current.options,W=typeof k=="function"?k(N):k,H=Math.max(Math.min(W,N.zoom),Math.min(Math.max(I,N.zoom),N.zoom*h));if(H===N.zoom)return!1;const{w:G,h:V}=m();if(n==="centre")x({...N,zoom:H});else{const Y=(T-G/2)/N.zoom+N.panX,Z=(O-V/2)/N.zoom+N.panY;x({zoom:H,panX:Y-(T-G/2)/H,panY:Z-(O-V/2)/H})}return i.current.options.onManualMove?.("zoom"),!0},[x,m,n]);Ba(d,u.useMemo(()=>o?v:null,[o,v]));const l=u.useCallback(()=>{i.current.options.onManualMove?.("reset"),x(i.current.home)},[x]),y=u.useCallback(h=>{const{w:T,h:O}=m();v(h,T/2,O/2)},[m,v]),[C,g]=u.useState(null),w=u.useRef(new Map),j=u.useRef(null),M=u.useRef(null),$=u.useRef(null),D=u.useRef(!1),[U,A]=u.useState(!1),S=u.useCallback(h=>{if(i.current.options.enabled!==!1&&!(h.pointerType==="mouse"&&h.button!==0)){if(w.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),w.current.size===2){const[T,O]=[...w.current.values()];j.current=null,M.current=Math.hypot(T.x-O.x,T.y-O.y);return}D.current=!1,$.current={x:h.clientX,y:h.clientY},j.current={x:h.clientX,y:h.clientY},M.current=null}},[]),F=u.useCallback(h=>{if(!w.current.has(h.pointerId))return;if(h.pointerType==="mouse"&&h.buttons===0){w.current.delete(h.pointerId),w.current.size===0&&(j.current=null,$.current=null,M.current=null,A(!1));return}if(w.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),w.current.size>=2){const[W,H]=[...w.current.values()],G=Math.hypot(W.x-H.x,W.y-H.y),V=M.current;if(M.current=G,V===null||V===0)return;const Y=d.current?.getBoundingClientRect();D.current=!0,v(G/V,(W.x+H.x)/2-(Y?.left??0),(W.y+H.y)/2-(Y?.top??0));return}const T=$.current,O=j.current;if(!T||!O||!D.current&&Math.hypot(h.clientX-T.x,h.clientY-T.y)<a)return;D.current||(D.current=!0,A(!0),h.currentTarget.setPointerCapture?.(h.pointerId));const N=h.clientX-O.x,k=h.clientY-O.y;j.current={x:h.clientX,y:h.clientY};const I=i.current.camera;i.current.options.onManualMove?.("pan"),x({...I,panX:I.panX-N/I.zoom,panY:I.panY-k/I.zoom})},[x,a,v]),E=u.useCallback(h=>{if(w.current.delete(h.pointerId),h.currentTarget.releasePointerCapture?.(h.pointerId),w.current.size===1){const[T]=[...w.current.values()];j.current={...T},$.current={...T},M.current=null;return}w.current.size===0&&(j.current=null,$.current=null,M.current=null,A(!1))},[]),R=u.useCallback(h=>{if(i.current.options.enabled===!1||h.target!==h.currentTarget||h.ctrlKey||h.metaKey||h.altKey)return;const T=i.current.camera,{w:O,h:N}=m(),k=(I,W)=>{const H=(I==="panX"?O:N)/T.zoom;i.current.options.onManualMove?.("pan"),x({...T,[I]:T[I]+W*H*Ua})};switch(h.key){case"ArrowLeft":k("panX",-1);break;case"ArrowRight":k("panX",1);break;case"ArrowUp":k("panY",-1);break;case"ArrowDown":k("panY",1);break;case"+":case"=":y(jt);break;case"-":case"_":y(1/jt);break;case"0":l();break;default:return}h.preventDefault()},[x,l,m,y]);return{camera:s,setCamera:_,reset:l,zoomBy:y,viewportProps:{ref:d,tabIndex:0,role:"group",onPointerDown:S,onPointerMove:F,onPointerUp:E,onPointerCancel:E,onFocus:h=>{h.target===h.currentTarget&&h.currentTarget.matches(":focus-visible")&&g(Ha)},onBlur:()=>g(null),onKeyDown:R,style:{touchAction:"none",cursor:U?"grabbing":"grab"}},didPan:()=>D.current,isDragging:U,hint:C}}const kt="(prefers-reduced-motion: reduce)";function Js(){const[e,t]=u.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(kt).matches);return u.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const n=window.matchMedia(kt),a=()=>t(n.matches);return a(),n.addEventListener("change",a),()=>n.removeEventListener("change",a)},[]),e}const qt=u.createContext(null);function Qs({widget:e,scope:t,children:n}){const a=u.useMemo(()=>({widget:e,scope:t}),[e,t]);return r.jsx(qt.Provider,{value:a,children:n})}function ei(e){const t=u.useContext(qt);if(!(!t||t.widget!==e))return t.scope}function ti(e){if(e.length===0)return[];const t=[[e[0]]];for(let n=1;n<e.length;n++)Ya(e[n-1],e[n])?t.push([e[n]]):t[t.length-1].push(e[n]);return t}function ni(e,t,n,a){if(e.length===0||!(t>0))return[];const o=[e[0].x];let s=o[0],c=o[0];for(let i=1;i<e.length;i++){const f=o[i-1],d=f+Wa(e[i].x-f,t);o.push(d),d<s&&(s=d),d>c&&(c=d)}return Xa(s,c,n,a,t).map(i=>e.map((f,d)=>({...f,x:o[d]+i})))}function Xa(e,t,n,a,o){if(!(o>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((n-t)/o),c=Math.floor((a-e)/o),i=[];for(let f=s;f<=c;f++)i.push(f*o+0);return i}function Wa(e,t){const n=t/2;return((e+n)%t+t)%t-n}function Ya(e,t){const n=Mt(e),a=Mt(t),o=Ka(n,a);if(o===0)return!1;const s=Et(Va(n,a));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=o)return!1;const i=[0,0,e.lat+t.lat>=0?1:-1],f=Et(Za(i,s));if(f===null)return!1;const d=me(n,a);return me(n,f)>d&&me(a,f)>d}function Mt({lat:e,lon:t}){const n=e*Math.PI/180,a=t*Math.PI/180,o=Math.cos(n);return[o*Math.cos(a),o*Math.sin(a),Math.sin(n)]}function me(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Va(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Ka(e,t){return Math.acos(Math.max(-1,Math.min(1,me(e,t))))}function Za(e,t){const n=me(e,t);return[e[0]-n*t[0],e[1]-n*t[1],e[2]-n*t[2]]}function Et(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{ha as $,br as A,ms as B,bs as C,ks as D,Ss as E,xs as F,zt as G,Is as H,qn as I,co as J,Ht as K,Ns as L,Ds as M,Bt as N,ko as O,xr as P,Hs as Q,st as R,To as S,So as T,Us as U,_o as V,Gs as W,Gt as X,Ws as Y,ys as Z,fa as _,fs as a,Ys as a0,Fs as a1,Vs as a2,Eo as a3,Ks as a4,Zs as a5,Qs as a6,Zn as a7,ir as a8,$t as a9,Or as aa,fr as ab,Ts as ac,pr as ad,Xa as ae,Xs as af,ti as ag,wr as ah,qs as ai,Js as aj,$s as ak,Ba as al,ei as am,Po as an,za as ao,ni as ap,jo as b,Ro as c,ps as d,hs as e,Ls as f,gs as g,vs as h,ws as i,_s as j,js as k,Ms as l,Es as m,Rs as n,Jr as o,Ps as p,hr as q,As as r,Cs as s,Mo as t,Os as u,Lo as v,zs as w,Ao as x,Io as y,Bs as z};
