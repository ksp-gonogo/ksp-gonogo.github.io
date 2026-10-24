import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-C0MU9AHG.js";import p,{css as J,keyframes as Jt}from"./ext-styled-components-DAuodqsN.js";import{o as Qt,e as en,c as tn,u as nn,I as Ye}from"./widgetSize-DnO_SxzX.js";import{E as Rt,bx as ve,n as rn,F as St,m as He,y as It,aN as on,bu as Ve,by as an,_ as Le,a9 as ie,bz as sn,ab as Me,a6 as ln,aW as cn,aU as un,aX as dn,aV as fn,bA as pn,bB as hn,bi as mn,bC as Tt,g as gn,ah as le,e as De,Y as vn,aA as bn,aa as Ue,ai as At,ac as Ge,ad as Ke,U as xn,l as wn,b1 as yn,bn as $n,bf as _n,b8 as jn,bs as qe,az as kn,bD as Mn,bt as Ze,be as Je}from"./ModalSaveBar-DLI7mfmD.js";import{aJ as Ie,b3 as Qe,cb as En,aZ as ee,ai as Rn,c6 as Sn,cE as In,bb as Xe,l as Tn,c5 as Ct}from"./view-clock-formula-CMi2uYN-.js";import"./ksp-enum-names-D0Qmqigb.js";import"./screen-B1crio3D.js";import{Y as be,N as ge,Z as Nt,_ as An,t as et,w as pe,J as Cn,$ as Nn,a0 as Fn,l as je,g as Oe,X as Ft,d as Pn,c as Ln,j as Dn,E as tt,e as nt}from"./contributionsRead-DXmW8T6H.js";import{a as On,r as zn,b as Bn}from"./Notice-IfhuxpF2.js";import{r as Hn}from"./ext-react-dom-DCF8ZnaJ.js";import{l as Un}from"./capability-lock-L3Su2PhD.js";import"./lagrange-VERh5BAe.js";import"./use-transmissions-D8P32z8j.js";import{r as Gn}from"./control-frame-to-read-frame-B0rIDhsy.js";function cs({items:e,onSelect:t,onDismiss:n,"aria-label":a,style:o,header:s,footer:u,emptyLabel:i="No actions",otherLabel:f="Other"}){const d=c.useRef(null),m=c.useId(),[x,_]=c.useState(0),v=Qt(e,f),l=v.flatMap(([,g])=>g),y=l.length;c.useEffect(()=>{const g=d.current;if(!g)return;if(y===0){g.focus();return}g.querySelectorAll('[role="menuitem"]')[x]?.focus()},[x,y]),c.useEffect(()=>{const g=w=>{const j=d.current;j&&w.target instanceof Node&&!j.contains(w.target)&&n()};return document.addEventListener("pointerdown",g),()=>document.removeEventListener("pointerdown",g)},[n]);const N=c.useCallback(g=>{if(g.key==="Escape"){g.stopPropagation(),n();return}if(g.key==="Tab"){n();return}if(l.length!==0)switch(g.key){case"ArrowDown":g.preventDefault(),_(w=>Math.min(w+1,l.length-1));break;case"ArrowUp":g.preventDefault(),_(w=>Math.max(w-1,0));break;case"Home":g.preventDefault(),_(0);break;case"End":g.preventDefault(),_(l.length-1);break}},[l.length,n]);return r.jsxs(Xn,{ref:d,role:y>0?"menu":void 0,"aria-label":a,onKeyDown:N,tabIndex:-1,style:o,children:[s,l.length===0?r.jsx(Rt,{layout:"fill",children:i}):v.map(([g,w],j)=>r.jsxs("div",{...v.length>1?{role:"group","aria-labelledby":`${m}-group-${j}`}:{role:"none"},children:[v.length>1?r.jsx(Wn,{id:`${m}-group-${j}`,"aria-hidden":"true",children:g}):null,w.map(M=>{const $=l.indexOf(M);return r.jsx(Yn,{type:"button",role:"menuitem","aria-label":M["aria-label"],"aria-disabled":M.disabled,$disabled:M.disabled,tabIndex:$===x?0:-1,onFocus:()=>_($),onClick:()=>{M.disabled||t(M.key)},children:M.label},M.key)})]},g)),u]})}const Xn=p.div`
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
`,Wn=p.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,Yn=p.button`
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
`;function us({settings:e,values:t,onChange:n}){return e.length===0?null:r.jsx(r.Fragment,{children:e.flatMap(a=>a.fields.map(o=>{const u=t?.[a.namespace]?.[o.key]??o.default,i=o.label??o.key,f=`augment-setting-${a.namespace}-${o.key}`;return o.type===Ie.Bool?r.jsx(rn,{children:r.jsx(en,{checked:!!u,onChange:d=>n(a.namespace,o.key,d),label:i})},`${a.namespace}.${o.key}`):r.jsxs(St,{children:[r.jsx(He,{htmlFor:f,children:i}),r.jsx(It,{id:f,type:o.type===Ie.Number?"number":"text",value:u===void 0?"":String(u),onChange:d=>{const m=d.target.value;if(o.type!==Ie.Number){n(a.namespace,o.key,m);return}if(m===""){n(a.namespace,o.key,void 0);return}const x=Number(m);Number.isFinite(x)&&n(a.namespace,o.key,x)}})]},`${a.namespace}.${o.key}`)}))})}function ds({fallback:e,gap:t="related-dense",children:n,...a}){return r.jsxs(r.Fragment,{children:[r.jsx(Pt,{$gap:t,...a,children:n}),r.jsx(Vn,{children:e})]})}const Pt=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>be[e]};
`,Vn=p.div`
  ${Pt}:not(:empty) + & {
    display: none;
  }
`,rt=12,ye=8;function Kn(e,t,n){return{left:ot(e.x,t.w,n.w),top:ot(e.y,t.h,n.h)}}function ot(e,t,n){const a=e+rt;if(a+t<=n-ye)return a;const o=e-rt-t;return o>=ye?o:Math.max(ye,n-ye-t)}const qn="–";function fs({min:e,max:t,wrapsAt:n,className:a,...o}){const s=Qe(e),u=Qe(t);return e==null||t==null||s===null||u===null?r.jsx(ke,{className:a,children:ge}):n!==void 0&&Math.abs(u-s)>=n/2?r.jsx(ke,{className:a,children:"(precesses)"}):r.jsx(on,{of:e.unit,separate:!0,...o,children:r.jsx(Zn,{min:e,max:t,className:a})})}function Zn({min:e,max:t,className:n}){return Ve(e),Ve(t),an(e)?r.jsx(ke,{className:n,children:r.jsxs(Qn,{children:[r.jsx("span",{"aria-hidden":"true",children:"~"}),r.jsx(Le,{children:"approximately "}),r.jsx(ie,{value:e})]})}):r.jsxs(ke,{className:n,children:[r.jsx(ie,{value:e}),r.jsx(Jn,{"aria-hidden":"true",children:qn}),r.jsx(Le,{children:" to "}),r.jsx(ie,{value:t})]})}const ke=p.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,Jn=p.span`
  color: var(--color-text-faint);
`,Qn=p.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`,er={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function ps({surface:e,pad:t,bordered:n=!1,radius:a,children:o,...s}){return r.jsx(tr,{$surface:e,$pad:t,$bordered:n,$radius:a,...s,children:o})}const tr=p.div`
  ${({$surface:e})=>e&&`background: ${er[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${Nt[e]};`}
  ${({$pad:e})=>e&&`padding: var(${An[e]});`}
`,hs=c.forwardRef(function({equalWidth:t=!0,gap:n,children:a,...o},s){return r.jsx(nr,{ref:s,$equalWidth:t,$gap:n,...o,children:a})}),nr=p.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?be[e]:"var(--gap-related)"};
`,rr="3px",or=p(Bn)`
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
      height: ${rr};
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
`;function ar({tone:e,dimmed:t,identityColor:n,standalone:a,...o}){return zn(or,{...o,$tone:e,$dimmed:t,$identityColor:n,$standalone:a})}const ms=Object.assign(ar,On);function sr(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const gs=c.forwardRef(function({label:t,icon:n,type:a,...o},s){return r.jsx("button",{ref:s,type:a??"button","aria-label":t,...o,children:r.jsx(Lt,{label:t,icon:n})})});function Lt({label:e,icon:t}){const n=c.useRef(null),a=c.useRef(null),[o,s]=c.useState(!0);return c.useLayoutEffect(()=>{const u=n.current,i=a.current;if(!u||!i)return;const f=()=>{s(i.scrollWidth<=u.clientWidth)};if(f(),typeof ResizeObserver>"u")return;const d=new ResizeObserver(f);return d.observe(u),d.observe(i),()=>d.disconnect()},[]),r.jsxs(ir,{ref:n,children:[r.jsx(lr,{ref:a,"aria-hidden":"true",children:e}),o?r.jsx(cr,{"aria-hidden":"true",children:e}):r.jsx(ur,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const ir=p.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,lr=p.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,cr=p.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,ur=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Te=e=>pe(e),ne={contact:{"in-contact":()=>"In contact","loss-in":e=>`LOS in ${Te(e)}`,"back-in":e=>`No contact, back in ${Te(e)}`,none:e=>e==="unpowered"?"No contact, no electric charge aboard":"No contact"},delay:{held:e=>`${Te(e)} signal delay`,absent:()=>"no signal path"},arrival:{expected:"Expected to arrive","likely-lost":"Likely lost"},sends:{now:()=>"Sends now",held:(e,t)=>t===void 0?`Held until ${pe(e)}`:`Held until ${pe(e)}, arrives ${pe(t)}`}};function dr(e){const{contact:t}=e,n=t.kind==="loss-in"||t.kind==="back-in"?ne.contact[t.kind](t.seconds):t.kind==="none"?ne.contact.none(t.reason):ne.contact[t.kind](),a=e.signalDelay===void 0?ne.delay.absent():ne.delay.held(e.signalDelay),o=e.sends==="now"&&e.arrival==="expected"?ne.sends.now():e.sends==="held"&&e.heldUntilUt!==void 0?ne.sends.held(e.heldUntilUt,e.arrivesUt):ne.arrival[e.arrival];return`${n} · ${a}
${o}`}function fr(e){if(e!==void 0)return e.arrival==="likely-lost"?"at-risk":e.sends==="held"?"held":void 0}function pr({holds:e,label:t,spinnerSize:n=12}){return r.jsxs(hr,{children:[r.jsx(mr,{"aria-hidden":"true",children:e}),r.jsx(gr,{children:r.jsx(tn,{size:n,"aria-label":t})})]})}const hr=p.span`
  display: inline-grid;
  & > * {
    grid-area: 1 / 1;
  }
`,mr=p.span`
  visibility: hidden;
`,gr=p.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;function at(e){try{return JSON.stringify(e)??""}catch{return null}}const vr=4e3,st=8e3,br=3e4;function Dt(e,t){return e.gateFor?e.gateFor(t):e.gate}function xr({handle:e,args:t,commandLabel:n,onConfirmed:a}){const[o,s]=c.useState("idle"),[u,i]=c.useState(null),[f,d]=c.useState(null),[m,x]=c.useState(!1),_=Dt(e,t),v=_?.blocked===!0,l=c.useRef(!0),y=c.useRef(0);c.useEffect(()=>(l.current=!0,()=>{l.current=!1}),[]);const N=e.founds,g=c.useRef(null),w=c.useRef(N?.length??0);c.useEffect(()=>{const S=N?.length??0,F=S>w.current;w.current=S;const E=N?.[S-1],R=g.current;if(!F||!E||R===null)return;const B=E.label!==void 0&&E.label!==""&&R.label!==void 0&&E.label!==R.label,h=E.args!==void 0&&R.args!==void 0&&JSON.stringify(E.args)!==JSON.stringify(R.args);B||h||(g.current=null,d(E),i(null),s("found"))},[N]),c.useEffect(()=>{if(o!=="armed")return;const S=setTimeout(()=>s("idle"),vr);return()=>clearTimeout(S)},[o]),c.useEffect(()=>{if(o!=="refused"&&o!=="lost"&&o!=="found")return;const S=setTimeout(()=>{s("idle"),i(null),g.current=null,d(null)},st);return()=>clearTimeout(S)},[o]),c.useEffect(()=>{if(!m)return;const S=setTimeout(()=>x(!1),st);return()=>clearTimeout(S)},[m]),c.useEffect(()=>{v||x(!1)},[v]),c.useEffect(()=>{if(o!=="pending")return;const S=setTimeout(()=>s("idle"),br);return()=>clearTimeout(S)},[o]);const j=c.useCallback(()=>{const S=y.current+1;y.current=S,g.current=null,s("pending"),i(null);const F=(E,R)=>{!l.current||y.current!==S||(i(R),s(E))};e.send(t,n?{label:n}:void 0).then(E=>{F("idle",null),a?.(E)},E=>{const R=En(E);if(R.kind==="lost"){g.current={args:t,label:n},F("lost",null);return}if(R.kind!=="refused"){F("idle",null);return}F("refused",{errorCode:R.errorCode,reason:R.reason,command:R.command,args:R.args,label:R.label??n,breach:R.breach,detail:R.detail})})},[e,t,n,a]),{hasUnconfirmed:M,hasFailure:$}=sr(e),D=c.useCallback(S=>{if(o!=="pending"){if(v){x(!0);return}if(o==="refused"||o==="lost"||o==="found"){i(null),d(null),g.current=null,s("idle");return}if(S&&o!=="armed"){U.current=at(t),s("armed");return}j()}},[o,v,j,t]),U=c.useRef(null);c.useEffect(()=>{o==="armed"&&at(t)!==U.current&&s("idle")},[o,t]);const A=o==="pending"||o==="refused"||o==="lost"||o==="found"?o:v?"blocked":o;return{phase:A,isPending:A==="pending",isArmed:A==="armed",isRefused:A==="refused",isLost:A==="lost",isFound:A==="found",isBlocked:A==="blocked",isShowingReason:A==="blocked"&&m,refusalText:u?dn(u):A==="blocked"&&_?fn({..._,label:_.label??n,args:_.args??t}):null,foundText:f?un(f):null,lossText:A==="lost"?cn({args:t,label:n}):null,hasUnconfirmed:M,hasFailure:$,press:D}}function vs({handle:e,args:t,commandLabel:n,label:a,confirmLabel:o,pendingLabel:s="Working...",refusedLabel:u="Refused",lostLabel:i="No reply",foundLabel:f="Found",confirmAriaLabel:d,pendingAriaLabel:m,blockedAriaLabel:x,pressed:_,variant:v="ghost",tone:l="neutral",icon:y,confirmIcon:N,onPressReady:g,size:w="md",confirmTone:j="go",onConfirmed:M,disabled:$,title:D,"aria-label":U,...A}){const{phase:S,isPending:F,isArmed:E,isRefused:R,isLost:B,isFound:h,isBlocked:I,isShowingReason:O,refusalText:C,foundText:k,lossText:T,hasUnconfirmed:W,hasFailure:H,press:G}=xr({handle:e,args:t,commandLabel:n,onConfirmed:M}),V=o!==void 0;c.useEffect(()=>{if(!(!g||F||$))return g(()=>G(V)),()=>g(null)},[g,F,$,G,V]);const q=F?r.jsx(pr,{holds:a,label:s,spinnerSize:w==="sm"?10:12}):R?u:B?i:h?f:O?C:E?o:a,re=y!==void 0&&typeof q=="string",Q=re?r.jsx(Lt,{label:q,icon:E?N??y:y}):q,P=y===void 0&&typeof a=="string"&&typeof o=="string"&&!R&&!B&&!h&&!O,xe=sn()&&e.railed===!0?null:R?C:B?T:h?k:null,ce=_===!0||E||R,ue=wr({restTone:v==="primary"?l:"neutral",filled:ce,isRefused:R,isFound:h,isArmed:E,confirmTone:j,tone:l}),te=e.sendStatus,Ee=te===void 0?D:[D,dr(te)].filter(Boolean).join(`
`);return r.jsxs(r.Fragment,{children:[r.jsx(Me,{text:k??C??(F?s:Ee),children:r.jsx(_r,{type:"button",$tone:ue,$variant:v,$fit:re,$size:w,$pressed:ce,$armed:E,$blocked:I,"aria-pressed":_,"aria-busy":F||void 0,"aria-disabled":I||F||void 0,disabled:$,"data-unconfirmed":W?"true":void 0,"data-failed":H?"true":void 0,"data-command-phase":S,"data-predicted":I?void 0:fr(te),"data-gate":I?"blocked":Dt(e,t)?.undetermined?"undetermined":void 0,"aria-label":(R?C??void 0:B?T??void 0:h?k??U:I?x??C??U:F?m??s:E?d:U)??(re?q:void 0),onClick:()=>G(o!==void 0),"data-rest-label":P?a:void 0,"data-armed-label":P?o:void 0,...A,children:P?r.jsx($r,{children:Q}):Q})}),r.jsx(ln,{visuallyHidden:!0,children:xe})]})}function wr(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const yr=Jt`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,$r=p.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,_r=p(pn)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&J`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${yr} 1s var(--ease-emphasis) infinite;
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
`;function bs({oneWaySeconds:e,delayReading:t,className:n}){const a=ee("s",e);return r.jsxs(jr,{className:n,role:"group","aria-label":"Signal delay",children:["one-way ~",r.jsx(ie,{value:hn(a,t),...a.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const jr=p.div`
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
`;function xs(e){const t=mn(),n=c.useId(),a=e!==null;c.useEffect(()=>{if(!(!t||!e))return t.register({id:n,...e})},[t,n,a]),c.useEffect(()=>{!t||!e||t.update(n,e)},[t,n,e])}function ws({at:e,atAspect:t,narrow:n,wide:a,children:o,...s}){return r.jsx(Mr,{$query:kr(e,t),$narrow:n,$wide:a,...s,children:o})}function kr(e,t){const n=[e===void 0?void 0:`(min-width: ${e}px)`,t===void 0?void 0:`(aspect-ratio >= ${t})`].filter(a=>a!==void 0);return n.length===0?void 0:n.join(" and ")}const Mr=p.div`
  ${({$narrow:e})=>e}
  ${({$query:e,$wide:t})=>e===void 0?"":J`
          @container ${e} {
            ${t}
          }
        `}
`;function ys({slot:e,component:t,filter:n}){const a=Cn(e),o=n?a.filter(n):a;return o.length===0?null:r.jsx(t,{entries:o})}function Er(e,t){return e.value!==void 0?r.jsx(ie,{value:e.value(t)??null}):e.render(t)}function $s({columns:e,rows:t,sections:n,rowKey:a,caption:o,empty:s,rowDetail:u,className:i}){const f=n??(t?[{id:"",title:null,rows:[...t]}]:[]),d=f.reduce((l,y)=>l+y.rows.length,0),[m,x]=c.useState(null),_=nn(m),v=Tt(m);return r.jsxs(Rr,{className:i,children:[r.jsx(Sr,{ref:x,tabIndex:v,children:r.jsxs(Ir,{children:[r.jsx(Tr,{children:o}),r.jsx("thead",{children:r.jsx("tr",{children:e.map(l=>r.jsx(Ar,{scope:"col",$align:l.align??"start",style:{width:l.width,minWidth:l.minWidth},children:l.header},l.key))})}),d===0&&s!==void 0&&r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx(Lr,{colSpan:e.length,children:s})})}),f.map(l=>r.jsxs("tbody",{children:[l.title!==null&&l.title!==void 0&&r.jsx("tr",{children:r.jsx(Cr,{scope:"rowgroup",colSpan:e.length,children:l.title})}),l.rows.map(y=>{const N=a(y),g=u?.(y),w=g!=null&&g!==!1&&g!=="";return r.jsxs(c.Fragment,{children:[r.jsx(Nr,{$hasDetail:w,children:e.map(j=>r.jsx(Fr,{as:j.rowHeader?"th":void 0,scope:j.rowHeader?"row":void 0,$align:j.align??"start",children:Er(j,y)},j.key))}),w?r.jsx("tr",{children:r.jsx(Pr,{colSpan:e.length,children:g})}):null]},N)})]},l.id))]})}),r.jsx(Ye,{$position:"left",$visible:_.left}),r.jsx(Ye,{$position:"right",$visible:_.right})]})}const Rr=p.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Sr=p.div`
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
`,Tr=p.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,Ar=p.th`
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
`,Nr=p.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,Fr=p.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,Pr=p.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,Lr=p.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`;function Dr(e){const t=e.reason;switch(t){case"beyond-horizon":return e.resolvesByWaiting?"NOT YET COMPUTED":"CANNOT MODEL";case"under-physics":case"model-inapplicable":case"contested":case"insufficient-history":return"CANNOT MODEL";case"frame-unavailable":return"FRAME UNAVAILABLE";case"input-absent":return null;default:return t}}function _s({declined:e,layout:t="inline"}){return r.jsx(Me,{text:e.note,focusable:!0,children:r.jsx(Rt,{role:"status",layout:t,children:Dr(e)??"NO DATA"})})}function js({label:e,children:t,"aria-label":n,className:a,variant:o="popover",panelHeight:s="cap",chevron:u=!0,asButton:i=!1,buttonSize:f="md",defaultOpen:d=!1}){const[m,x]=c.useState(d),_=c.useId(),v=c.useRef(null),[l,y]=c.useState(null),N=Tt(l),g=o==="inline"&&u,w=typeof e=="function"?e(m):e,j={ref:v,type:"button","aria-expanded":m,"aria-controls":_,"aria-label":n,onClick:()=>x($=>!$)},M=r.jsxs(r.Fragment,{children:[w,g&&r.jsx(Hr,{$open:m,children:r.jsx(gn,{size:"var(--icon-size-control)"})})]});return r.jsxs(Or,{className:a,$variant:o,onKeyDown:$=>{$.key==="Escape"&&m&&(x(!1),v.current?.focus())},children:[i?r.jsx(Br,{...j,variant:"ghost",size:f,$inline:o==="inline",children:M}):r.jsx(zr,{...j,$variant:o,$align:o==="inline"&&!u?"end":"between",children:M}),m&&r.jsx(Ur,{ref:y,id:_,role:"group",tabIndex:N,$variant:o,$panelHeight:s,children:t})]})}const Or=p.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,zr=p.button`
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
      border-radius: var(--radius-regular);
      &:hover {
        background: var(--color-surface-sunken);
      }
    `}
  ${le}
`,Br=p(De)`
  ${({$inline:e})=>e&&J`
      align-self: flex-end;
    `}
`,Hr=p.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,Ur=p.div`
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
`;function ks({space:e,...t}){return r.jsx(Gr,{$space:e,...t})}const Gr=p.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${be[e]} 0`:"0"};
`,Xr=160,Wr=24,Yr="...";function Ms({children:e,limit:t=Xr,subject:n,className:a}){const[o,s]=c.useState(!1),u=c.useId(),i=Vr(e,t);if(i===void 0)return r.jsx(r.Fragment,{children:e});const f=o?"Show less":"Show more";return r.jsxs(Kr,{className:a,children:[r.jsx("span",{id:u,children:o?e:`${i}${Yr}`})," ",r.jsx(qr,{type:"button","data-expandable-toggle":"","aria-controls":u,"aria-expanded":o,"aria-label":n===void 0?void 0:`${f} of ${n}`,onClick:()=>s(d=>!d),children:f})]})}function Vr(e,t){if(e.length<=t+Wr)return;const n=e.lastIndexOf(" ",t);return n<=0?e.slice(0,t):e.slice(0,n)}const Kr=p.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,qr=p(vn)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function Es(e,t){const n=t.map(s=>s==null?null:Rn(e,s.index)),a=n.length>0&&n.every(s=>s?.currency==="exact"),o=n.reduce((s,u)=>u?.currency!=="held"||u.asOfUt===null?s:s===null?u.asOfUt:Math.min(s,u.asOfUt),null);return s=>{const u=a?Sn(s):s;return o===null?u:{state:"held",value:u,asOfUt:ee("ut",o),grade:"held",reckoning:{status:"none"}}}}function Zr({anchor:e,style:t,children:n,...a}){const[o,s]=c.useState(null),[u,i]=c.useState(null),f=c.useRef(e);f.current=e;const d=c.useCallback(()=>{if(!o)return;const m=f.current,x=typeof m=="function"?m():m;if(!x)return;const _=o.getBoundingClientRect(),v=Kn(x,{w:_.width,h:_.height},{w:window.innerWidth,h:window.innerHeight});i(l=>l&&l.left===v.left&&l.top===v.top?l:v)},[o]);return c.useLayoutEffect(()=>{d()}),c.useLayoutEffect(()=>{if(!o)return;const m=typeof ResizeObserver>"u"?null:new ResizeObserver(d);return m?.observe(o),window.addEventListener("resize",d),window.addEventListener("scroll",d,!0),()=>{m?.disconnect(),window.removeEventListener("resize",d),window.removeEventListener("scroll",d,!0)}},[o,d]),typeof document>"u"?null:Hn.createPortal(r.jsx(Jr,{ref:s,style:{...t,left:u?.left??0,top:u?.top??0,visibility:u===null?"hidden":t?.visibility},...a,children:n}),document.body)}const Jr=p.div`
  position: fixed;
  z-index: var(--z-dropdown);
`,it=12,Qr=8,eo=120;function Rs({trigger:e,"aria-label":t,children:n}){const[a,o]=c.useState(!1),s=c.useRef(null),u=c.useRef(null),i=c.useRef(null),f=c.useId(),d=c.useCallback(()=>{u.current!==null&&(clearTimeout(u.current),u.current=null)},[]),m=()=>{d(),o(!0)},x=()=>{d(),u.current=setTimeout(()=>o(!1),eo)},_=c.useCallback(()=>{d(),o(!1)},[d]);c.useEffect(()=>d,[d]),c.useEffect(()=>{if(!a)return;const l=y=>{y.key==="Escape"&&(y.stopPropagation(),_())};return document.addEventListener("keydown",l,!0),()=>document.removeEventListener("keydown",l,!0)},[a,_]);const v=()=>{const l=s.current?.getBoundingClientRect();if(!l)return null;const y=i.current?.offsetHeight??0,N=l.top-y-2*it;return{x:l.left,y:N+it>=Qr?N:l.bottom}};return r.jsxs(r.Fragment,{children:[r.jsx(to,{ref:s,type:"button","aria-label":t,"aria-describedby":a?f:void 0,onPointerEnter:m,onPointerLeave:x,onFocus:m,onBlur:_,children:e}),a&&r.jsx(Zr,{anchor:v,onPointerEnter:d,onPointerLeave:x,children:r.jsx(no,{ref:i,id:f,role:"tooltip",children:n})})]})}const to=p.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${le}
`,no=p.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function Ss({gap:e,inset:t=!1,wrap:n=!1,children:a,...o}){return r.jsx(ro,{$gap:e,$inset:t,$wrap:n,...o,children:a})}const ro=p.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?be[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,oo=4,ao=80,lt=60,so=30,ze=24,io=32,ct=56,ut=ze;function Ae(e,t,n){const{min:a,max:o,step:s}=t,u=e+n*s,i=Math.min(o,Math.max(a,u));if(!Number.isFinite(a))return i;const f=a+Math.round((i-a)/s)*s;return Math.min(o,Math.max(a,f))}function lo(e){const{value:t,min:n,max:a,step:o,orientation:s="horizontal",onChange:u,format:i,"aria-label":f,label:d=f,disabled:m=!1,width:x,height:_}=e,v=s==="vertical",l=Math.max(ze,x??(v?ut:ct)),y=Math.max(ze,_??(v?ct:ut)),N=e.mode==="rate",g=n??Number.NEGATIVE_INFINITY,w=a??Number.POSITIVE_INFINITY,j={min:g,max:w,step:o},M=c.useRef(null),$=c.useRef(t);$.current=t;const D=c.useRef(u);D.current=u;const U=(e.mode==="rate"?e.stepsPerSecond:void 0)??so,[A,S]=c.useState(0),F=i?i(t):String(Math.round(t)),E=w>g&&Number.isFinite(w-g)?(t-g)/(w-g):.5,R=k=>{m||k!==t&&u(k)};c.useEffect(()=>{if(!N||A===0||m)return;const k=setInterval(()=>{const T=Math.max(g,Math.min(w,$.current+A*U*o*(lt/1e3)));T!==$.current&&D.current(T)},lt);return()=>clearInterval(k)},[N,A,m,o,U,g,w]);const B=k=>{if(m)return;let T=null;switch(k.key){case"ArrowRight":case"ArrowUp":T=Ae(t,j,1);break;case"ArrowLeft":case"ArrowDown":T=Ae(t,j,-1);break;case"Home":if(!Number.isFinite(g))return;T=g;break;case"End":if(!Number.isFinite(w))return;T=w;break;default:return}k.preventDefault(),R(T)},h=k=>s==="vertical"?k.clientY:k.clientX,I=k=>{m||(M.current={start:h(k),startValue:t},k.currentTarget.setPointerCapture(k.pointerId))},O=k=>{if(m||!M.current)return;const T=s==="vertical"?M.current.start-h(k):h(k)-M.current.start;if(N){const H=T/ao;S(Math.max(-1,Math.min(1,H)));return}const W=T/oo;R(Ae(M.current.startValue,j,W))},C=k=>{M.current&&(M.current=null,S(0),k.currentTarget.hasPointerCapture(k.pointerId)&&k.currentTarget.releasePointerCapture(k.pointerId))};return r.jsxs(co,{children:[d!==!1&&r.jsx(uo,{"aria-hidden":"true",children:d}),r.jsxs(fo,{role:"slider","aria-label":f,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":n,"aria-valuemax":a,"aria-valuetext":F,"aria-disabled":m||void 0,tabIndex:m?-1:0,$orientation:s,$disabled:m,$width:l,$height:y,$compact:(v?l:y)<io,onKeyDown:B,onPointerDown:I,onPointerMove:O,onPointerUp:C,onPointerCancel:C,children:[r.jsx(po,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-E)*100}%)`}:{transform:`translateX(${(.5-E)*100}%)`},"aria-hidden":"true"}),r.jsx(ho,{$orientation:s,"aria-hidden":"true"}),r.jsx(mo,{"aria-hidden":"true",children:F})]})]})}const co=p.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,uo=p.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,fo=p.div`
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
`,po=p.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,ho=p.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,mo=p.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function Is({lock:e}){const t=In(e)?go(e):e,n=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return r.jsx(Me,{text:n,focusable:!0,children:r.jsxs(bo,{role:"status","aria-label":n,children:[r.jsx(bn,{}),r.jsx(xo,{children:vo(t)})]})})}function go(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...Un(t,Nn),locks:t}}function vo(e){const t=[...new Set(e.locks.flatMap(n=>n.missing.map(a=>a.name)))];return t.length>0?t.join(", "):e.reason}const bo=p.span`
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
`,xo=p.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,dt=1.4,ft=1.7,wo="var(--icon-size-standalone)",yo=1.8,$e="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",pt="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",ht="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",mt="M7 4.5V19.5M17 4.5V19.5",ae=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,Ot={prograde:{colour:"prograde",paths:[$e,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[$e,ae(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",ae(12,11)]},radialOut:{colour:"radial",paths:[pt,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[pt,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",ae(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",ae(12,12)]},relativePlus:{colour:"target",paths:[$e,ht],dot:[12,12]},relativeMinus:{colour:"target",paths:[$e,ht,ae(12,12)]},parallelPlus:{colour:"target",paths:[mt],dot:[12,12]},parallelMinus:{colour:"target",paths:[mt,ae(12,12)]}},Ts=Object.keys(Ot);function gt({shape:e,colour:t,strokeWidth:n,dotRadius:a}){return r.jsxs("g",{fill:"none",stroke:t,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(o=>r.jsx("path",{d:o},o)),e.dot&&r.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:a,fill:t,stroke:"none"})]})}function K(e,t){const n=Ot[e],a=`var(--color-marker-${n.colour})`,o=c.forwardRef(({size:s=wo,strokeWidth:u=yo,label:i,style:f,...d},m)=>{const x={ref:m,xmlns:"http://www.w3.org/2000/svg",...typeof s=="number"?{width:s,height:s,style:f}:{style:{width:s,height:s,...f}},viewBox:"0 0 24 24","data-marker":e},_=r.jsxs(r.Fragment,{children:[r.jsx(gt,{shape:n,colour:"currentColor",strokeWidth:u+dt,dotRadius:ft+dt/2}),r.jsx(gt,{shape:n,colour:a,strokeWidth:u,dotRadius:ft})]});return i?r.jsx("svg",{...x,role:"img","aria-label":i,...d,children:_}):r.jsx("svg",{...x,"aria-hidden":"true",...d,children:_})});return o.displayName=t,o}const zt=K("prograde","ProgradeIcon"),$o=K("retrograde","RetrogradeIcon"),Bt=K("normal","NormalIcon"),_o=K("antiNormal","AntiNormalIcon"),jo=K("radialOut","RadialOutIcon"),Ht=K("radialIn","RadialInIcon"),ko=K("maneuver","ManeuverIcon"),Mo=K("target","TargetIcon"),Eo=K("antiTarget","AntiTargetIcon"),Ro=K("relativePlus","RelativePlusIcon"),So=K("relativeMinus","RelativeMinusIcon"),Io=K("parallelPlus","ParallelPlusIcon"),To=K("parallelMinus","ParallelMinusIcon"),As=zt,Cs=Ht,Ns=Bt,Fs={prograde:zt,retrograde:$o,normal:Bt,antiNormal:_o,radialOut:jo,radialIn:Ht,maneuver:ko,target:Mo,antiTarget:Eo,relativePlus:Ro,relativeMinus:So,parallelPlus:Io,parallelMinus:To};function Ao(e){if(e.frame==="scet")return{token:"SCET",spoken:"spacecraft event time",title:"Spacecraft event time: when this happens at the craft"};const{vantage:t}=e;return t===void 0?{token:"RECEIVED",spoken:"received",title:"When the telemetry showing this arrives"}:{token:`AT ${t}`,spoken:`received at ${t}`,title:`When the telemetry showing this arrives at ${t}`}}const Co=p.span`
  font-size: max(0.72em, 10px);
  opacity: 0.72;
  white-space: nowrap;
  text-transform: none;
`;function Ps({value:e,context:t}){const a=Ue(typeof e=="number"?void 0:e),{shown:o,held:s,caption:u}=a,i=typeof e=="number"?e:o?.magnitude,f=At({...a,shown:i}),d=t&&Ao(t),m=Fn(i??Number.NaN);return r.jsxs(r.Fragment,{children:[s?r.jsx(Ge,{...f,caption:u,children:m}):r.jsx("span",{"data-figure":f["data-figure"],children:m}),d&&r.jsxs(r.Fragment,{children:[" ",r.jsx(Me,{text:d.title,focusable:!0,children:r.jsxs(Co,{children:[r.jsx("span",{"aria-hidden":"true",children:d.token}),r.jsx(Le,{children:d.spoken})]})})]})]})}function Ut(e){const{year:t,day:n,hour:a,minute:o}=Xe(),s=Number.isFinite(e)?Math.max(0,e):0,u=Math.floor(s/t)+1,i=s%t,f=Math.floor(i/n)+1,d=i%n;return{year:u,day:f,hour:Math.floor(d/a),minute:Math.floor(d%a/o),second:Math.floor(d%o)}}const No={year:1,day:1,hour:0,minute:0,second:0};function Fo(e){const{year:t,day:n,hour:a,minute:o}=Xe();return(e.year-1)*t+(e.day-1)*n+e.hour*a+e.minute*o+e.second}function _e(e){return pe(ee("s",e))}function Po({value:e,onChange:t,label:n,disabled:a,steps:o}){const s=c.useId(),u=`${s}-absent`,i=e!==null&&Number.isFinite(e)?e:null,f=i===null?null:Ut(i),d=Xe(),m=o??[d.minute,10*d.minute,d.hour,d.day],[x,_]=c.useState(null),v=(l,y,N,g)=>r.jsxs(je,{gap:"caption",children:[r.jsx(He,{htmlFor:`${s}-${l}`,children:y}),r.jsx(It,{id:`${s}-${l}`,type:"number",inputMode:"numeric","aria-label":`${n} ${y}`,"aria-describedby":f===null?u:void 0,min:N,step:1,style:{width:g},disabled:a,placeholder:f===null?ge:void 0,value:x?.key===l?x.text:f===null?"":String(f[l]),onBlur:()=>_(null),onChange:w=>{const j=w.target.value;if(_({key:l,text:j}),j.trim()==="")return;const M=Number(j);if(!Number.isFinite(M))return;const $=Math.max(N,Math.round(M));t(Fo({...f??No,[l]:$}))}})]},l);return r.jsxs(je,{gap:"related-dense",role:"group","aria-label":n,children:[r.jsxs(Ke,{gap:"related-dense",wrap:!0,justify:"start",children:[v("year","YEAR",1,"5rem"),v("day","DAY",1,"5rem"),v("hour","HR",0,"4rem"),v("minute","MIN",0,"4rem"),v("second","SEC",0,"4rem")]}),f===null&&r.jsx(Oe,{id:u,level:"muted",size:"sm",children:`${ge} no ${n.toLowerCase()} to show. Type one to state it.`}),m.length===0?null:r.jsxs(Ke,{gap:"related-packed",wrap:!0,justify:"start",children:[r.jsx(Oe,{level:"faint",size:"sm",children:"NUDGE"}),m.map(l=>r.jsx(De,{variant:"ghost",size:"sm",disabled:a||i===null,"aria-label":`${n} earlier by ${_e(l)}`,onClick:()=>i!==null&&t(i-l),children:`-${_e(l)}`},`minus-${l}`)),m.map(l=>r.jsx(De,{variant:"ghost",size:"sm",disabled:a||i===null,"aria-label":`${n} later by ${_e(l)}`,onClick:()=>i!==null&&t(i+l),children:`+${_e(l)}`},`plus-${l}`))]})]})}function Ls({panZoom:e,label:t,style:n,onMouseMove:a,children:o}){const{style:s,ref:u,...i}=e.viewportProps;return r.jsxs(Lo,{...i,ref:u,onMouseMove:a,"aria-label":t,style:{...s,...n},children:[o,r.jsx(Do,{role:"status",children:e.hint!==null&&r.jsx(Oo,{children:e.hint})})]})}const Lo=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  ${ve}
`,Do=p.div`
  position: absolute;
  bottom: var(--gap-related);
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-base);
  max-width: calc(100% - 16px);
  pointer-events: none;
`,Oo=p.div`
  padding: var(--inset-control);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function Ds({id:e,label:t,value:n,options:a,onChange:o,hint:s}){const u=a.findIndex(i=>Gn(i.choice,n));return r.jsxs(St,{children:[r.jsx(He,{htmlFor:e,children:t}),r.jsxs(xn,{id:e,value:u===-1?"":String(u),onChange:i=>{const f=a[Number(i.target.value)];f!==void 0&&o(f.choice)},children:[u===-1&&r.jsx("option",{value:"",disabled:!0}),a.map((i,f)=>r.jsx("option",{value:f,children:i.label},`${i.choice.kind}-${i.choice.bodyIndex??"none"}`))]}),s!==void 0&&r.jsx(wn,{children:s})]})}const zo=p.span`
  display: inline-grid;
  justify-items: center;
`,Bo=p.span`
  grid-area: 1 / 1;
`,Ho=p.span`
  grid-area: 1 / 1;
  visibility: hidden;

  &::before {
    content: attr(data-word);
  }
`;function Os({shown:e,reserve:t}){return r.jsxs(zo,{children:[[...new Set(t)].map(n=>r.jsx(Ho,{"data-word":n,"aria-hidden":"true"},n)),r.jsx(Bo,{children:e})]})}function Uo({as:e,interactive:t=!1,selected:n=!1,wrap:a=!1,nested:o=!1,type:s,children:u,...i}){return r.jsx(Xo,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:n,$wrap:a,$nested:o,...i,children:u})}const Gt=p.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,Go="min(12ch, 100%)",Xo=p.li`
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
    min-width: ${Go};
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
`,zs=Object.assign(Uo,{Name:Gt}),Wo=65,Xt=38,Yo=72,Vo=Yo-Xt,Wt=55,Be=137.508,Ko=10,qo=1.5,Zo=64,Jo=60,Qo=241,ea=Be-Math.floor(Be),he=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function Yt(e,t){const n=Math.abs(e-t)%360;return n>180?360-n:n}const ta=he.map((e,t)=>{let n=1/0;for(let o=0;o<he.length;o++)o!==t&&(n=Math.min(n,Yt(e.hue,he[o].hue)));const a=n/2;return Math.max(0,Math.min(Ko,a-qo))}),na=he.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:ta[t]}));function ra(e,t=he){return t.find(n=>n.aliases.some(a=>e.includes(a)))}function Vt(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function vt(e,t){return(e%t+t)%t}function oa(e){const n=Vt(`light:${e}`)/4294967295;return Xt+n*Vo}function aa(e){const t=ra(e);if(!t)return;const n=t.aliases.length===1?Wt:oa(e);return{hue:t.hue,lightness:n}}function sa(e){return na.some(({centre:t,radius:n})=>Yt(e,t)<n)}function ia(e){const t=Vt(e);let n=vt(t*Be,360);const a=Jo+(t>>>8)%Qo+ea;let o=0;for(;sa(n)&&o<Zo;)n=vt(n+a,360),o++;return n}function Bs(e){const t=e.trim().toLowerCase(),n=aa(t),a=n?.hue??ia(t),o=n?.lightness??Wt;return`hsl(${Math.round(a)}deg ${Wo}% ${Math.round(o)}%)`}function Hs({selected:e,gap:t="caption",layout:n="stack",selectedLook:a="fill",children:o,...s}){return r.jsx(la,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:n,$look:a,...s,children:o})}const la=p.button`
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
  border-radius: ${Nt.regular};
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
`,ca=c.forwardRef(function(t,n){return r.jsx(ua,{ref:n,type:"range",...t})}),ua=p.input`
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
`;function da({label:e,children:t,detail:n,tone:a="neutral",...o}){return r.jsxs(fa,{...o,children:[r.jsx(pa,{children:e}),r.jsx(ha,{$tone:a,children:t}),n!=null&&r.jsx(ma,{children:n})]})}const fa=p.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,pa=p.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,ha=p.dd`
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
  color: ${({$tone:e})=>Pn[e]};
`,ma=p.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function Us({slot:e}){const t=Ln(e);return t.length===0?null:r.jsx(r.Fragment,{children:t.map(n=>r.jsx(da,{label:n.label,detail:n.detail,tone:n.tone??"neutral",children:r.jsx(ga,{entry:n})},n.id))})}function ga({entry:e}){if(e.value!==void 0)return r.jsx(ie,{value:e.value});if(e.text===void 0)return r.jsx(Dn,{});const t=yn(e.held);return t===null?r.jsx(r.Fragment,{children:e.text}):r.jsx(Ge,{kind:t.kind,caption:t.caption,children:e.text})}const va=12,se=12,ba=12,bt=52,X=10,Ce=4;function xa(e,t,n){const a=u=>e.map(i=>Number.parseFloat(u.mark(i).replace(/[^\d.-]/g,""))),o=a(n(Ce)),s=u=>a(u).every((i,f)=>i===o[f]);if(s(t))return t;for(let u=0;u<Ce;u++){const i=n(u);if(s(i))return i}return n(Ce)}function Gs({labelSide:e="left",value:t,min:n,max:a,width:o=92,height:s=220,fillHeight:u=!1,tickStep:i,zones:f,markers:d,groundLine:m,seaLevel:x,format:_,"aria-label":v}){const l=c.useRef(null),[y,N]=c.useState(s);c.useEffect(()=>{if(!u)return;const b=l.current;if(!b)return;const z=()=>{const Z=b.clientHeight;Z>0&&N(Z)};z();const L=new ResizeObserver(z);return L.observe(b),()=>L.disconnect()},[u]);const g=u?y:s,w=Ue(t),{shown:j,held:M,caption:$,band:D}=w,{anchor:U,tip:A}=$n($),S=j?.magnitude??Number.NaN,F=Number.isFinite(S)?j:null,E=n.magnitude,R=a.magnitude,B=R-E,h=Number.isFinite(S)?S:E,I=B>0?Math.max(E,Math.min(R,h)):E,O=F!=null,C=tt(a,{format:_}),k=F==null?ge:nt({magnitude:h,unit:F.unit},{format:C.rung}),T=b=>nt(b),W=[...(d??[]).flatMap(b=>b.label===void 0?[]:[b.bounds===void 0?`${b.label} ${T(b.value)}`:`${b.label} ${T(b.value)}, between ${T(b.bounds.lo)} and ${T(b.bounds.hi)}`]),...(f??[]).flatMap(b=>b.label===void 0?[]:[`${b.label} zone ${T(b.from.min(b.to))} to ${T(b.from.max(b.to))}`]),...m===void 0?[]:[`ground ${T(m)}`],...x===void 0?[]:[`sea level ${T(x)}`]],H=F==null||D===null?null:Tn(D,F.unit)??null,G=Math.max(0,g-se-ba),V=b=>{if(!(B>0))return se+G;const z=Math.max(0,Math.min(1,(b-E)/B));return se+(1-z)*G},Y=b=>V(b.magnitude),q=se,re=se+G,Q=e==="right",P=Q?o-bt-X:bt,oe=Q?P+X+6:P-6,xe=Q?"start":"end",ce=(b,z)=>{const L=Y(b),Z=b.greaterThan(a)?-1:b.lessThan(n)?1:0,fe=P-4,we=P+X+4,Se=P+X/2;return r.jsxs("g",{"data-level":z?"sea":"ground",children:[r.jsx("line",{x1:fe,y1:L,x2:we,y2:L,stroke:z?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:z?1.5:2,strokeDasharray:z?"3 2":void 0}),Z!==0&&r.jsx("polygon",{"data-off-scale":"true",points:`${Se-4},${L-Z*2} ${Se+4},${L-Z*2} ${Se},${L+Z*4}`,fill:z?"var(--color-info-mark)":"var(--color-text-primary)"})]})},ue=[],te=i?.magnitude??0;if(te>0&&B>0){const b=Math.ceil(E/te),z=Math.floor(R/te+1e-9);for(let L=b;L<=z;L++)ue.push(L===0?0:L*te)}const Ee=xa(ue,C,b=>tt(a,{format:_,decimals:b})),de=V(I),Re=b=>G>0?(se+G-b)/G:0,We=H!==null&&_n(Re(de),[Re(Y(H.lo)),Re(Y(H.hi))],jn())?H:null;return r.jsxs(wa,{ref:l,...At(w),...U,...O?{role:"meter","aria-label":Je(v,$),...Ze($),"aria-valuenow":I,"aria-valuemin":E,"aria-valuemax":R,"aria-valuetext":W.length===0?k:`${k}; ${W.join("; ")}`}:{role:"img","aria-label":Je(`${v}: ${k}`,$),...Ze($)},style:u?{height:"100%"}:void 0,children:[r.jsxs("svg",{width:o,height:g,viewBox:`0 0 ${o} ${g}`,"aria-hidden":"true",style:u?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[r.jsx("rect",{x:P,y:q,width:X,height:G,rx:2,fill:"var(--color-surface-raised)"}),f?.map(b=>{const z=Y(b.from.max(b.to)),L=Y(b.from.min(b.to)),Z=Math.max(0,L-z);return r.jsx("g",{children:r.jsx("rect",{x:P,y:z,width:X,height:Z,fill:b.color??"var(--color-warn-mark)",opacity:.55})},`zone-${L}-${z}-${b.label??""}`)}),x!==void 0&&B>0&&ce(x,!0),m!==void 0&&B>0&&ce(m,!1),ue.map(b=>{const z=V(b),L=O&&Math.abs(z-Math.max(q+4,Math.min(re-4,de)))<va;return r.jsxs("g",{children:[r.jsx("line",{x1:Q?P+X+4:P-4,y1:z,x2:Q?P+X:P,y2:z,stroke:"var(--color-border-subtle)",strokeWidth:1}),!L&&r.jsx("text",{x:oe,y:z,textAnchor:xe,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:Ee.mark(b)})]},`tick-${b}`)}),d?.map(b=>{const{bounds:z}=b,L=Y(b.value),Z=b.color??"var(--color-accent-fg)";return r.jsxs("g",{"data-marker":b.label,children:[r.jsx("line",{x1:P,y1:L,x2:P+X,y2:L,stroke:Z,strokeWidth:2,strokeDasharray:"2 2"}),r.jsx("polygon",{points:Q?`${P},${L} ${P-5},${L-3} ${P-5},${L+3}`:`${P+X},${L} ${P+X+5},${L-3} ${P+X+5},${L+3}`,fill:"none",stroke:Z,strokeWidth:1.5}),z!==void 0&&["lo","hi"].map(fe=>{const we=Y(z[fe]);return r.jsx(qe,{end:fe,x1:P,y1:we,x2:P+X,y2:we},fe)})]},`marker-${L}-${b.label??""}`)}),We!==null&&["lo","hi"].map(b=>{const z=Y(We[b]);return r.jsx(qe,{end:b,x1:P,y1:z,x2:P+X,y2:z},b)}),O&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:P-6,y1:de,x2:P+X+6,y2:de,stroke:"var(--color-accent-fg)",strokeWidth:2}),r.jsxs("text",{x:Q?oe+2:oe-2,y:Math.max(q+4,Math.min(re-4,de)),textAnchor:xe,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[C.mark(h),M&&r.jsx(kn,{size:5})]})]}),!O&&r.jsx(Mn,{x:Q?oe+8:oe-8,y:q+G/2,size:11,children:ge}),C.symbol!==""&&r.jsx("text",{x:P+X/2,y:q-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:C.symbol})]}),A]})}const wa=p.div`
  display: block;
  max-width: 100%;
`,Xs=p.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,ya=112;function $a(e,t){try{return ee(e,1).in(t).magnitude}catch{return Number.NaN}}function _a(e,t){let n=e;return t.map((a,o)=>{if(!Number.isFinite(a)||a===0)return 0;const s=o===t.length-1?n/a:Math.trunc(n/a);return n-=s*a,s})}function Ws({value:e,unit:t,onChange:n,label:a,rungs:o,range:s,rate:u,disabled:i}){const f=c.useId(),{shown:d,held:m,caption:x}=Ue(e),_=m?r.jsx(Ge,{caption:x,children:a}):a,v=s,l=d?d.magnitude:Number.NaN,[y,N]=c.useState({}),g=$=>y[$]??null,w=($,D)=>N(U=>({...U,[$]:D})),j=u?r.jsxs(je,{gap:"related-packed",children:[r.jsx(lo,{mode:"rate","aria-label":`${a} rate`,value:l,step:u.step,stepsPerSecond:u.stepsPerSecond,disabled:i||!Number.isFinite(l),format:Ne(t)?ka:void 0,width:Ne(t)?ya:void 0,onChange:$=>n(ee(t,$))}),r.jsx(Oe,{level:"faint",size:"sm",children:`${u.step} ${ja(t)} / notch`})]}):null;if(Ne(t))return r.jsxs(Pe,{children:[r.jsx(wt,{"aria-hidden":"true",children:_}),r.jsxs(je,{gap:"related-dense",children:[r.jsx(Po,{label:m&&x!==null?`${a}, ${x}`:a,value:Number.isFinite(l)?l:null,disabled:i,steps:u?[]:void 0,onChange:$=>n(ee(t,$))}),j]})]});if(o&&o.length>0){const $=o.map(A=>$a(String(A),t)),D=_a(l,$),U=(A,S)=>{const F=Fe(S);if(F===void 0){w(A,{text:S,against:D[A]});return}const E=D.map(B=>Number.isFinite(B)?B:0);E[A]=F;const R=E.reduce((B,h,I)=>Number.isFinite($[I])?B+h*$[I]:B,0);w(A,{text:S,against:F}),n(ee(t,R))};return r.jsxs(Pe,{children:[r.jsx(wt,{id:`${f}-label`,children:_}),r.jsx(Sa,{role:"group","aria-labelledby":`${f}-label`,children:o.map((A,S)=>r.jsxs(Ia,{children:[r.jsx(Ta,{type:"number",disabled:i,"aria-label":`${a} ${String(A)}`,value:xt(g(S),D[S]),onChange:F=>U(S,F.target.value)}),r.jsx(yt,{"aria-hidden":"true",children:String(A)})]},String(A)))}),j]})}const M=$=>{const D=Fe($);w(0,{text:$,against:D??l}),D!==void 0&&n(ee(t,D))};return r.jsxs(Pe,{children:[r.jsx(Ea,{htmlFor:f,children:_}),r.jsxs(Ra,{children:[r.jsx(qt,{id:f,type:"number",disabled:i,min:v?.min,max:v?.max,step:v?.step,value:xt(g(0),l),onChange:$=>M($.target.value)}),r.jsx(yt,{"aria-hidden":"true",children:t})]}),v?r.jsx(ca,{disabled:i,"aria-label":`${a} slider`,min:v.min,max:v.max,step:v.step??(v.max-v.min)/100,value:Number.isFinite(l)?l:v.min,onChange:$=>n(ee(t,Fe($.target.value)??v.min))}):null,j]})}function xt(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(Ma(t)):""}function ja(e){return Ct(e)??e}function Ne(e){return Ct(e)==="s"}function ka(e){if(!Number.isFinite(e))return"";const{day:t,hour:n,minute:a,second:o}=Ut(e),s=u=>String(u).padStart(2,"0");return`D${t} ${s(n)}:${s(a)}:${s(o)}`}function Fe(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function Ma(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const Pe=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,Kt=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Ea=p.label`
  ${Kt}
`,wt=p.span`
  ${Kt}
`,Ra=p.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,qt=p.input`
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
`,Sa=p.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,Ia=p.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,Ta=p(qt)`
  width: 4.5em;
`,Aa=200;function $t(e={}){const t=e.quietMs??Aa;let n=null,a=Number.NEGATIVE_INFINITY,o=!0;return{wheel(s,u){return(n===null||s-a>t)&&(n=u&&o?"diagram":"page"),a=s,n},pageScrolled(){o=!1},pointerMovedInside(){o=!0},yieldToPage(){n="page"},get owner(){return n}}}const Ca=16,Na=400,_t=120,Fa=Math.log(1.15)/100,Pa=.01;function La(e,t,n){const a=t===1?e*Ca:t===2?e*Na:e,o=Math.max(-_t,Math.min(_t,a)),s=n&&Math.abs(a)<40?Pa:Fa;return Math.exp(-o*s)}function Da(e,t,n={}){const{quietMs:a}=n,o=c.useRef($t({quietMs:a}));c.useEffect(()=>{o.current=$t({quietMs:a})},[a]);const[s,u]=c.useState(null);c.useEffect(()=>{e.current!==s&&u(e.current)}),c.useEffect(()=>{if(!s||!t)return;const i=l=>l instanceof Node&&s.contains(l);let f=null;const d=(l,y)=>f!==null&&(Math.abs(l-f.x)>=1||Math.abs(y-f.y)>=1),m=l=>{f={x:l.clientX,y:l.clientY},!(l.ctrlKey||l.metaKey)&&o.current.wheel(performance.now(),i(l.target))},x=l=>{const y=d(l.clientX,l.clientY);f={x:l.clientX,y:l.clientY},y&&i(l.target)&&o.current.pointerMovedInside()},_=l=>{const y=l.target;(y===document||y instanceof Node&&y.contains(s))&&o.current.pageScrolled()},v=l=>{const y=l.ctrlKey||l.metaKey;if(!y&&o.current.owner!=="diagram")return;const N=s.getBoundingClientRect(),g=La(l.deltaY,l.deltaMode,y);if(t(g,l.clientX-N.left,l.clientY-N.top)===!1&&!y){o.current.yieldToPage();return}l.preventDefault()};return window.addEventListener("wheel",m,{capture:!0,passive:!0}),window.addEventListener("pointermove",x,{capture:!0,passive:!0}),window.addEventListener("scroll",_,{capture:!0,passive:!0}),s.addEventListener("wheel",v,{passive:!1}),()=>{window.removeEventListener("wheel",m,{capture:!0}),window.removeEventListener("pointermove",x,{capture:!0}),window.removeEventListener("scroll",_,{capture:!0}),s.removeEventListener("wheel",v)}},[s,t])}const Oa="Arrow keys pan, + and - zoom, 0 resets",za=.15,jt=1.25,Ba={zoom:1,panX:0,panY:0};function Ys(e={}){const{home:t=Ba,zoomAbout:n="pointer",panThreshold:a=3,enabled:o=!0}=e,[s,u]=c.useState(t),i=c.useRef({camera:s,options:e,home:t});i.current={camera:s,options:e,home:t};const f=c.useRef(null),d=e.elementRef??f,m=c.useCallback(()=>{const h=d.current?.getBoundingClientRect();return{w:h?.width??0,h:h?.height??0}},[]),x=c.useCallback(h=>{const{constrain:I}=i.current.options,O=m(),C=I&&O.w>0&&O.h>0?I(h,O):h;return i.current.camera=C,u(C),C},[m]),_=c.useCallback(h=>{x(typeof h=="function"?h(i.current.camera):h)},[x]),v=c.useCallback((h,I,O)=>{const C=i.current.camera,{minZoom:k=.1,maxZoom:T=50}=i.current.options,W=typeof k=="function"?k(C):k,H=Math.max(Math.min(W,C.zoom),Math.min(Math.max(T,C.zoom),C.zoom*h));if(H===C.zoom)return!1;const{w:G,h:V}=m();if(n==="centre")x({...C,zoom:H});else{const Y=(I-G/2)/C.zoom+C.panX,q=(O-V/2)/C.zoom+C.panY;x({zoom:H,panX:Y-(I-G/2)/H,panY:q-(O-V/2)/H})}return i.current.options.onManualMove?.("zoom"),!0},[x,m,n]);Da(d,c.useMemo(()=>o?v:null,[o,v]));const l=c.useCallback(()=>{i.current.options.onManualMove?.("reset"),x(i.current.home)},[x]),y=c.useCallback(h=>{const{w:I,h:O}=m();v(h,I/2,O/2)},[m,v]),[N,g]=c.useState(null),w=c.useRef(new Map),j=c.useRef(null),M=c.useRef(null),$=c.useRef(null),D=c.useRef(!1),[U,A]=c.useState(!1),S=c.useCallback(h=>{if(i.current.options.enabled!==!1&&!(h.pointerType==="mouse"&&h.button!==0)){if(w.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),w.current.size===2){const[I,O]=[...w.current.values()];j.current=null,M.current=Math.hypot(I.x-O.x,I.y-O.y);return}D.current=!1,$.current={x:h.clientX,y:h.clientY},j.current={x:h.clientX,y:h.clientY},M.current=null}},[]),F=c.useCallback(h=>{if(!w.current.has(h.pointerId))return;if(h.pointerType==="mouse"&&h.buttons===0){w.current.delete(h.pointerId),w.current.size===0&&(j.current=null,$.current=null,M.current=null,A(!1));return}if(w.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),w.current.size>=2){const[W,H]=[...w.current.values()],G=Math.hypot(W.x-H.x,W.y-H.y),V=M.current;if(M.current=G,V===null||V===0)return;const Y=d.current?.getBoundingClientRect();D.current=!0,v(G/V,(W.x+H.x)/2-(Y?.left??0),(W.y+H.y)/2-(Y?.top??0));return}const I=$.current,O=j.current;if(!I||!O||!D.current&&Math.hypot(h.clientX-I.x,h.clientY-I.y)<a)return;D.current||(D.current=!0,A(!0),h.currentTarget.setPointerCapture?.(h.pointerId));const C=h.clientX-O.x,k=h.clientY-O.y;j.current={x:h.clientX,y:h.clientY};const T=i.current.camera;i.current.options.onManualMove?.("pan"),x({...T,panX:T.panX-C/T.zoom,panY:T.panY-k/T.zoom})},[x,a,v]),E=c.useCallback(h=>{if(w.current.delete(h.pointerId),h.currentTarget.releasePointerCapture?.(h.pointerId),w.current.size===1){const[I]=[...w.current.values()];j.current={...I},$.current={...I},M.current=null;return}w.current.size===0&&(j.current=null,$.current=null,M.current=null,A(!1))},[]),R=c.useCallback(h=>{if(i.current.options.enabled===!1||h.target!==h.currentTarget||h.ctrlKey||h.metaKey||h.altKey)return;const I=i.current.camera,{w:O,h:C}=m(),k=(T,W)=>{const H=(T==="panX"?O:C)/I.zoom;i.current.options.onManualMove?.("pan"),x({...I,[T]:I[T]+W*H*za})};switch(h.key){case"ArrowLeft":k("panX",-1);break;case"ArrowRight":k("panX",1);break;case"ArrowUp":k("panY",-1);break;case"ArrowDown":k("panY",1);break;case"+":case"=":y(jt);break;case"-":case"_":y(1/jt);break;case"0":l();break;default:return}h.preventDefault()},[x,l,m,y]);return{camera:s,setCamera:_,reset:l,zoomBy:y,viewportProps:{ref:d,tabIndex:0,role:"group",onPointerDown:S,onPointerMove:F,onPointerUp:E,onPointerCancel:E,onFocus:h=>{h.target===h.currentTarget&&h.currentTarget.matches(":focus-visible")&&g(Oa)},onBlur:()=>g(null),onKeyDown:R,style:{touchAction:"none",cursor:U?"grabbing":"grab"}},didPan:()=>D.current,isDragging:U,hint:N}}const kt="(prefers-reduced-motion: reduce)";function Vs(){const[e,t]=c.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(kt).matches);return c.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const n=window.matchMedia(kt),a=()=>t(n.matches);return a(),n.addEventListener("change",a),()=>n.removeEventListener("change",a)},[]),e}const Zt=c.createContext(null);function Ks({widget:e,scope:t,children:n}){const a=c.useMemo(()=>({widget:e,scope:t}),[e,t]);return r.jsx(Zt.Provider,{value:a,children:n})}function qs(e){const t=c.useContext(Zt);if(!(!t||t.widget!==e))return t.scope}function Zs(e){if(e.length===0)return[];const t=[[e[0]]];for(let n=1;n<e.length;n++)Ga(e[n-1],e[n])?t.push([e[n]]):t[t.length-1].push(e[n]);return t}function Js(e,t,n,a){if(e.length===0||!(t>0))return[];const o=[e[0].x];let s=o[0],u=o[0];for(let i=1;i<e.length;i++){const f=o[i-1],d=f+Ua(e[i].x-f,t);o.push(d),d<s&&(s=d),d>u&&(u=d)}return Ha(s,u,n,a,t).map(i=>e.map((f,d)=>({...f,x:o[d]+i})))}function Ha(e,t,n,a,o){if(!(o>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((n-t)/o),u=Math.floor((a-e)/o),i=[];for(let f=s;f<=u;f++)i.push(f*o+0);return i}function Ua(e,t){const n=t/2;return((e+n)%t+t)%t-n}function Ga(e,t){const n=Mt(e),a=Mt(t),o=Wa(n,a);if(o===0)return!1;const s=Et(Xa(n,a));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=o)return!1;const i=[0,0,e.lat+t.lat>=0?1:-1],f=Et(Ya(i,s));if(f===null)return!1;const d=me(n,a);return me(n,f)>d&&me(a,f)>d}function Mt({lat:e,lon:t}){const n=e*Math.PI/180,a=t*Math.PI/180,o=Math.cos(n);return[o*Math.cos(a),o*Math.sin(a),Math.sin(n)]}function me(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Xa(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Wa(e,t){return Math.acos(Math.max(-1,Math.min(1,me(e,t))))}function Ya(e,t){const n=me(e,t);return[e[0]-n*t[0],e[1]-n*t[1],e[2]-n*t[2]]}function Et(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{Us as $,vr as A,fs as B,ms as C,$s as D,Ms as E,gs as F,Ht as G,Rs as H,qn as I,lo as J,jo as K,Is as L,Fs as M,Bt as N,Ds as O,br as P,So as Q,st as R,Ro as S,Os as T,$o as U,zs as V,Gt as W,Hs as X,bs as Y,ca as Z,da as _,cs as a,As as a0,Gs as a1,Mo as a2,Xs as a3,Ws as a4,Ks as a5,Kn as a6,sr as a7,$t as a8,Dr as a9,dr as aa,Es as ab,fr as ac,Ha as ad,Bs as ae,Zs as af,xr as ag,Ys as ah,Vs as ai,xs as aj,Da as ak,qs as al,Fo as am,La as an,Js as ao,_o as b,Eo as c,us as d,ds as e,Ns as f,ps as g,hs as h,vs as i,ws as j,ys as k,_s as l,js as m,ks as n,Zr as o,Cs as p,pr as q,Ss as r,Ts as s,ko as t,Ps as u,Po as v,Ls as w,To as x,Io as y,zt as z};
