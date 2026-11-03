import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-C0MU9AHG.js";import d,{css as Z,keyframes as en}from"./ext-styled-components-DAuodqsN.js";import{p as tn,e as nn,c as rn,u as on,I as Ye}from"./widgetSize-DEUsVSBW.js";import{E as Tt,bH as be,n as an,F as It,m as He,y as At,aT as sn,bE as Ve,bI as ln,$ as Ke,ab as ne,bJ as cn,ad as Ue,a7 as un,b0 as dn,a_ as fn,b1 as pn,a$ as hn,bK as mn,bL as gn,bp as vn,bM as Nt,g as bn,af as ce,e as Le,Z as xn,aG as wn,al as qe,bm as De,bx as yn,bw as $n,ae as Ge,bN as _n,b8 as jn,V as Mn,l as kn,b7 as En,ac as Ct,bu as Rn,bf as Sn,bC as Je,aC as Tn,bO as In,bD as Ze,bl as Qe,ag as An}from"./ModalSaveBar-CbvPyTza.js";import{aJ as Te,b6 as et,bh as Nn,aY as Ee,aj as Cn,c7 as Pn,cI as Fn,b4 as Xe,l as Ln,cn as pe,c6 as Pt}from"./view-clock-formula-CE9EFuZC.js";import"./ksp-enum-names-BhWgn1Kx.js";import"./logger-2_QM1wvD.js";import"./screen-B7KA3l9h.js";import{Z as xe,N as ve,_ as Ft,$ as Dn,H as tt,w as he,J as On,a0 as zn,j as Me,n as Oe,T as Bn,Y as Lt,d as Hn,c as Un,h as Gn,z as nt,G as rt}from"./contributionsRead-CM5BemGo.js";import{a as Xn,r as Wn,b as Yn}from"./Notice-CZ1dA_fj.js";import{r as Vn}from"./ext-react-dom-DCF8ZnaJ.js";import{l as Kn}from"./capability-lock-D_oBbbQI.js";import"./lagrange-ChplOwnt.js";import"./use-transmissions-CxsrRjOy.js";import{r as qn}from"./control-frame-to-read-frame-CGk4ldY2.js";function xs({items:e,onSelect:t,onDismiss:n,"aria-label":a,style:o,header:s,footer:u,emptyLabel:l="No actions",otherLabel:f="Other"}){const p=c.useRef(null),m=c.useId(),[w,_]=c.useState(0),v=tn(e,f),i=v.flatMap(([,g])=>g),y=i.length;c.useEffect(()=>{const g=p.current;if(!g)return;if(y===0){g.focus();return}g.querySelectorAll('[role="menuitem"]')[w]?.focus()},[w,y]),c.useEffect(()=>{const g=b=>{const M=p.current;M&&b.target instanceof Node&&!M.contains(b.target)&&n()};return document.addEventListener("pointerdown",g),()=>document.removeEventListener("pointerdown",g)},[n]);const A=c.useCallback(g=>{if(g.key==="Escape"){g.stopPropagation(),n();return}if(g.key==="Tab"){n();return}if(i.length!==0)switch(g.key){case"ArrowDown":g.preventDefault(),_(b=>Math.min(b+1,i.length-1));break;case"ArrowUp":g.preventDefault(),_(b=>Math.max(b-1,0));break;case"Home":g.preventDefault(),_(0);break;case"End":g.preventDefault(),_(i.length-1);break}},[i.length,n]);return r.jsxs(Jn,{ref:p,role:y>0?"menu":void 0,"aria-label":a,onKeyDown:A,tabIndex:-1,style:o,children:[s,i.length===0?r.jsx(Tt,{layout:"fill",children:l}):v.map(([g,b],M)=>r.jsxs("div",{...v.length>1?{role:"group","aria-labelledby":`${m}-group-${M}`}:{role:"none"},children:[v.length>1?r.jsx(Zn,{id:`${m}-group-${M}`,"aria-hidden":"true",children:g}):null,b.map(E=>{const $=i.indexOf(E);return r.jsx(Qn,{type:"button",role:"menuitem","aria-label":E["aria-label"],"aria-disabled":E.disabled,$disabled:E.disabled,tabIndex:$===w?0:-1,onFocus:()=>_($),onClick:()=>{E.disabled||t(E.key)},children:E.label},E.key)})]},g)),u]})}const Jn=d.div`
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
`,Zn=d.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,Qn=d.button`
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

  ${be}
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
`;function ws({settings:e,values:t,onChange:n}){return e.length===0?null:r.jsx(r.Fragment,{children:e.flatMap(a=>a.fields.map(o=>{const u=t?.[a.namespace]?.[o.key]??o.default,l=o.label??o.key,f=`augment-setting-${a.namespace}-${o.key}`;return o.type===Te.Bool?r.jsx(an,{children:r.jsx(nn,{checked:!!u,onChange:p=>n(a.namespace,o.key,p),label:l})},`${a.namespace}.${o.key}`):r.jsxs(It,{children:[r.jsx(He,{htmlFor:f,children:l}),r.jsx(At,{id:f,type:o.type===Te.Number?"number":"text",value:u===void 0?"":String(u),onChange:p=>{const m=p.target.value;if(o.type!==Te.Number){n(a.namespace,o.key,m);return}if(m===""){n(a.namespace,o.key,void 0);return}const w=Number(m);Number.isFinite(w)&&n(a.namespace,o.key,w)}})]},`${a.namespace}.${o.key}`)}))})}function ys({fallback:e,gap:t="related-dense",children:n,...a}){return r.jsxs(r.Fragment,{children:[r.jsx(Dt,{$gap:t,...a,children:n}),r.jsx(er,{children:e})]})}const Dt=d.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>xe[e]};
`,er=d.div`
  ${Dt}:not(:empty) + & {
    display: none;
  }
`,ot=12,$e=8;function tr(e,t,n){return{left:at(e.x,t.w,n.w),top:at(e.y,t.h,n.h)}}function at(e,t,n){const a=e+ot;if(a+t<=n-$e)return a;const o=e-ot-t;return o>=$e?o:Math.max($e,n-$e-t)}const nr="–";function $s({min:e,max:t,wrapsAt:n,className:a,...o}){const s=et(e),u=et(t);return e==null||t==null||s===null||u===null?r.jsx(ke,{className:a,children:ve}):n!==void 0&&Math.abs(u-s)>=n/2?r.jsx(ke,{className:a,children:"(precesses)"}):r.jsx(sn,{of:e.unit,separate:!0,...o,children:r.jsx(rr,{min:e,max:t,className:a})})}function rr({min:e,max:t,className:n}){return Ve(e),Ve(t),ln(e)?r.jsx(ke,{className:n,children:r.jsxs(ar,{children:[r.jsx("span",{"aria-hidden":"true",children:"~"}),r.jsx(Ke,{children:"approximately "}),r.jsx(ne,{value:e})]})}):r.jsxs(ke,{className:n,children:[r.jsx(ne,{value:e}),r.jsx(or,{"aria-hidden":"true",children:nr}),r.jsx(Ke,{children:" to "}),r.jsx(ne,{value:t})]})}const ke=d.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,or=d.span`
  color: var(--color-text-faint);
`,ar=d.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`,sr={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function _s({surface:e,pad:t,bordered:n=!1,radius:a,children:o,...s}){return r.jsx(ir,{$surface:e,$pad:t,$bordered:n,$radius:a,...s,children:o})}const ir=d.div`
  ${({$surface:e})=>e&&`background: ${sr[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${Ft[e]};`}
  ${({$pad:e})=>e&&`padding: var(${Dn[e]});`}
`,js=c.forwardRef(function({equalWidth:t=!0,gap:n,children:a,...o},s){return r.jsx(lr,{ref:s,$equalWidth:t,$gap:n,...o,children:a})}),lr=d.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?xe[e]:"var(--gap-related)"};
`,cr="3px",ur=d(Yn)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${tt(e)};`:""}
  ${({$identityColor:e})=>e?`
    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: var(--size-mark);
      height: ${cr};
      background: ${e};
      border-radius: var(--radius-regular) var(--radius-regular) 0 0;
    }
  `:""}
  ${({$dimmed:e,$tone:t})=>e?`
    --color-text-primary: var(--color-text-muted);
    color: var(--color-text-muted);
    ${t?`border-left-color: color-mix(in srgb, ${tt(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function dr({tone:e,dimmed:t,identityColor:n,standalone:a,...o}){return Wn(ur,{...o,$tone:e,$dimmed:t,$identityColor:n,$standalone:a})}const Ms=Object.assign(dr,Xn);function fr(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const ks=c.forwardRef(function({label:t,icon:n,type:a,...o},s){return r.jsx("button",{ref:s,type:a??"button","aria-label":t,...o,children:r.jsx(Ot,{label:t,icon:n})})});function Ot({label:e,icon:t}){const n=c.useRef(null),a=c.useRef(null),[o,s]=c.useState(!0);return c.useLayoutEffect(()=>{const u=n.current,l=a.current;if(!u||!l)return;const f=()=>{s(l.scrollWidth<=u.clientWidth)};if(f(),typeof ResizeObserver>"u")return;const p=new ResizeObserver(f);return p.observe(u),p.observe(l),()=>p.disconnect()},[]),r.jsxs(pr,{ref:n,children:[r.jsx(hr,{ref:a,"aria-hidden":"true",children:e}),o?r.jsx(mr,{"aria-hidden":"true",children:e}):r.jsx(gr,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const pr=d.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,hr=d.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,mr=d.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,gr=d.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Ie=e=>he(e),te={contact:{"in-contact":()=>"In contact","loss-in":e=>`LOS in ${Ie(e)}`,"back-in":e=>`No contact, back in ${Ie(e)}`,none:e=>e==="unpowered"?"No contact, no electric charge aboard":"No contact"},delay:{held:e=>`${Ie(e)} signal delay`,absent:()=>"no signal path"},arrival:{expected:"Expected to arrive","likely-lost":"Likely lost"},sends:{now:()=>"Sends now",held:(e,t)=>t===void 0?`Held until ${he(e)}`:`Held until ${he(e)}, arrives ${he(t)}`}};function vr(e){const{contact:t}=e,n=t.kind==="loss-in"||t.kind==="back-in"?te.contact[t.kind](t.seconds):t.kind==="none"?te.contact.none(t.reason):te.contact[t.kind](),a=e.signalDelay===void 0?te.delay.absent():te.delay.held(e.signalDelay),o=e.sends==="now"&&e.arrival==="expected"?te.sends.now():e.sends==="held"&&e.heldUntilUt!==void 0?te.sends.held(e.heldUntilUt,e.arrivesUt):te.arrival[e.arrival];return`${n} · ${a}
${o}`}function br(e){if(e!==void 0)return e.arrival==="likely-lost"?"at-risk":e.sends==="held"?"held":void 0}function xr({holds:e,label:t,spinnerSize:n=12}){return r.jsxs(wr,{children:[r.jsx(yr,{"aria-hidden":"true",children:e}),r.jsx($r,{children:r.jsx(rn,{size:n,"aria-label":t})})]})}const wr=d.span`
  display: inline-grid;
  & > * {
    grid-area: 1 / 1;
  }
`,yr=d.span`
  visibility: hidden;
`,$r=d.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;function st(e){try{return JSON.stringify(e)??""}catch{return null}}const _r="Not connected to the mod. Nothing can be sent",jr=4e3,it=8e3,Mr=3e4;function zt(e,t){return e.gateFor?e.gateFor(t):e.gate}function kr({handle:e,args:t,commandLabel:n,onConfirmed:a}){const[o,s]=c.useState("idle"),[u,l]=c.useState(null),[f,p]=c.useState(null),[m,w]=c.useState(!1),_=e.streamDown===!0,v=zt(e,t),i=v?.blocked===!0,y=c.useRef(!0),A=c.useRef(0);c.useEffect(()=>(y.current=!0,()=>{y.current=!1}),[]);const g=e.founds,b=c.useRef(null),M=c.useRef(g?.length??0);c.useEffect(()=>{const k=g?.length??0,C=k>M.current;M.current=k;const I=g?.[k-1],R=b.current;if(!C||!I||R===null)return;const h=I.label!==void 0&&I.label!==""&&R.label!==void 0&&I.label!==R.label,S=I.args!==void 0&&R.args!==void 0&&JSON.stringify(I.args)!==JSON.stringify(R.args);h||S||(b.current=null,p(I),l(null),s("found"))},[g]),c.useEffect(()=>{if(o!=="armed")return;const k=setTimeout(()=>s("idle"),jr);return()=>clearTimeout(k)},[o]),c.useEffect(()=>{if(o!=="refused"&&o!=="lost"&&o!=="found")return;const k=setTimeout(()=>{s("idle"),l(null),b.current=null,p(null)},it);return()=>clearTimeout(k)},[o]),c.useEffect(()=>{if(!m)return;const k=setTimeout(()=>w(!1),it);return()=>clearTimeout(k)},[m]),c.useEffect(()=>{i||w(!1)},[i]),c.useEffect(()=>{if(o!=="pending")return;const k=setTimeout(()=>s("idle"),Mr);return()=>clearTimeout(k)},[o]);const E=c.useCallback(()=>{const k=A.current+1;A.current=k,b.current=null,s("pending"),l(null);const C=(I,R)=>{!y.current||A.current!==k||(l(R),s(I))};e.send(t,n?{label:n}:void 0).then(I=>{C("idle",null),a?.(I)},I=>{const R=Nn(I);if(R.kind==="lost"){b.current={args:t,label:n},C("lost",null);return}if(R.kind!=="refused"){C("idle",null);return}C("refused",{errorCode:R.errorCode,reason:R.reason,command:R.command,args:R.args,label:R.label??n,breach:R.breach,detail:R.detail})})},[e,t,n,a]),{hasUnconfirmed:$,hasFailure:L}=fr(e),U=c.useCallback(k=>{if(o!=="pending"&&!_){if(i){w(!0);return}if(o==="refused"||o==="lost"||o==="found"){l(null),p(null),b.current=null,s("idle");return}if(k&&o!=="armed"){B.current=st(t),s("armed");return}E()}},[o,_,i,E,t]),B=c.useRef(null);c.useEffect(()=>{o==="armed"&&st(t)!==B.current&&s("idle")},[o,t]);const N=o==="pending"||o==="refused"||o==="lost"||o==="found"?o:i?"blocked":o;return{phase:N,isPending:N==="pending",isArmed:N==="armed",isRefused:N==="refused",isLost:N==="lost",isFound:N==="found",isBlocked:N==="blocked",isOffline:_&&N!=="pending",isShowingReason:N==="blocked"&&m,refusalText:u?pn(u):N==="blocked"&&v?hn({...v,label:v.label??n,args:v.args??t}):null,foundText:f?fn(f):null,lossText:N==="lost"?dn({args:t,label:n}):null,hasUnconfirmed:$,hasFailure:L,press:U}}function Es({handle:e,args:t,commandLabel:n,label:a,confirmLabel:o,pendingLabel:s="Working...",refusedLabel:u="Refused",lostLabel:l="No reply",foundLabel:f="Found",confirmAriaLabel:p,pendingAriaLabel:m,blockedAriaLabel:w,pressed:_,variant:v="ghost",tone:i="neutral",icon:y,confirmIcon:A,onPressReady:g,size:b="md",confirmTone:M="go",onConfirmed:E,disabled:$,title:L,"aria-label":U,...B}){const{phase:N,isPending:k,isArmed:C,isRefused:I,isLost:R,isFound:h,isBlocked:S,isOffline:D,isShowingReason:P,refusalText:j,foundText:T,lossText:G,hasUnconfirmed:H,hasFailure:X,press:V}=kr({handle:e,args:t,commandLabel:n,onConfirmed:E}),W=o!==void 0;c.useEffect(()=>{if(!(!g||k||$))return g(()=>V(W)),()=>g(null)},[g,k,$,V,W]);const re=k?r.jsx(xr,{holds:a,label:s,spinnerSize:b==="sm"?10:12}):I?u:R?l:h?f:P?j:C?o:a,q=y!==void 0&&typeof re=="string",F=q?r.jsx(Ot,{label:re,icon:C?A??y:y}):re,Q=y===void 0&&typeof a=="string"&&typeof o=="string"&&!I&&!R&&!h&&!P,we=cn()&&e.railed===!0?null:I?j:R?G:h?T:null,ae=_===!0||C||I,se=Er({restTone:v==="primary"?i:"neutral",filled:ae,isRefused:I,isFound:h,isArmed:C,confirmTone:M,tone:i}),ue=e.sendStatus,oe=ue===void 0?L:[L,vr(ue)].filter(Boolean).join(`
`),de=D?[L,_r].filter(Boolean).join(`
`):oe;return r.jsxs(r.Fragment,{children:[r.jsx(Ue,{text:T??j??(k?s:de),children:r.jsx(Tr,{type:"button",$tone:se,$variant:v,$fit:q,$size:b,$pressed:ae,$armed:C,$blocked:S,"aria-pressed":_,"aria-busy":k||void 0,"aria-disabled":S||k||D||void 0,disabled:$,"data-unconfirmed":H?"true":void 0,"data-failed":X?"true":void 0,"data-command-phase":N,"data-stream":D?"down":void 0,"data-predicted":S?void 0:br(ue),"data-gate":S?"blocked":zt(e,t)?.undetermined?"undetermined":void 0,"aria-label":(I?j??void 0:R?G??void 0:h?T??U:S?w??j??U:k?m??s:C?p:U)??(q?re:void 0),onClick:()=>V(o!==void 0),"data-rest-label":Q?a:void 0,"data-armed-label":Q?o:void 0,...B,children:Q?r.jsx(Sr,{children:F}):F})}),r.jsx(un,{visuallyHidden:!0,children:we})]})}function Er(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const Rr=en`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,Sr=d.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,Tr=d(mn)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&Z`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Rr} 1s var(--ease-emphasis) infinite;
      }
    `}

  &:disabled {
    opacity: 0.5;
  }

  /* Dimmed toward the muted text token rather than faded, so the refusal reason stays readable; the warn border says the game refused. */
  ${({$blocked:e})=>e&&Z`
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
`;function Rs({oneWaySeconds:e,delayReading:t,className:n}){const a=Ee("s",e);return r.jsxs(Ir,{className:n,role:"group","aria-label":"Signal delay",children:["one-way ~",r.jsx(ne,{value:gn(a,t),...a.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const Ir=d.div`
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
`;function Ss(e){const t=vn(),n=c.useId(),a=e!==null;c.useEffect(()=>{if(!(!t||!e))return t.register({id:n,...e})},[t,n,a]),c.useEffect(()=>{!t||!e||t.update(n,e)},[t,n,e])}function Ts({at:e,atAspect:t,narrow:n,wide:a,children:o,...s}){return r.jsx(Nr,{$query:Ar(e,t),$narrow:n,$wide:a,...s,children:o})}function Ar(e,t){const n=[e===void 0?void 0:`(min-width: ${e}px)`,t===void 0?void 0:`(aspect-ratio >= ${t})`].filter(a=>a!==void 0);return n.length===0?void 0:n.join(" and ")}const Nr=d.div`
  ${({$narrow:e})=>e}
  ${({$query:e,$wide:t})=>e===void 0?"":Z`
          @container ${e} {
            ${t}
          }
        `}
`;function Is({slot:e,component:t,filter:n}){const a=On(e),o=n?a.filter(n):a;return o.length===0?null:r.jsx(t,{entries:o})}function Cr(e,t){return e.value!==void 0?r.jsx(ne,{value:e.value(t)??null}):e.render(t)}function As({columns:e,rows:t,sections:n,rowKey:a,caption:o,empty:s,rowDetail:u,className:l}){const f=n??(t?[{id:"",title:null,rows:[...t]}]:[]),p=f.reduce((i,y)=>i+y.rows.length,0),[m,w]=c.useState(null),_=on(m),v=Nt(m);return r.jsxs(Pr,{className:l,children:[r.jsx(Fr,{ref:w,tabIndex:v,children:r.jsxs(Lr,{children:[r.jsx(Dr,{children:o}),r.jsx("thead",{children:r.jsx("tr",{children:e.map(i=>r.jsx(Or,{scope:"col",$align:i.align??"start",style:{width:i.width,minWidth:i.minWidth},children:i.header},i.key))})}),p===0&&s!==void 0&&r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx(Gr,{colSpan:e.length,children:s})})}),f.map(i=>r.jsxs("tbody",{children:[i.title!==null&&i.title!==void 0&&r.jsx("tr",{children:r.jsx(zr,{scope:"rowgroup",colSpan:e.length,children:i.title})}),i.rows.map(y=>{const A=a(y),g=u?.(y),b=g!=null&&g!==!1&&g!=="";return r.jsxs(c.Fragment,{children:[r.jsx(Br,{$hasDetail:b,children:e.map(M=>r.jsx(Hr,{as:M.rowHeader?"th":void 0,scope:M.rowHeader?"row":void 0,$align:M.align??"start",children:Cr(M,y)},M.key))}),b?r.jsx("tr",{children:r.jsx(Ur,{colSpan:e.length,children:g})}):null]},A)})]},i.id))]})}),r.jsx(Ye,{$position:"left",$visible:_.left}),r.jsx(Ye,{$position:"right",$visible:_.right})]})}const Pr=d.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Fr=d.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${be}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Lr=d.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,Dr=d.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,Or=d.th`
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
`,zr=d.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,Br=d.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,Hr=d.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,Ur=d.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,Gr=d.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`;function Xr(e){const t=e.reason;switch(t){case"beyond-horizon":return e.resolvesByWaiting?"NOT YET COMPUTED":"CANNOT MODEL";case"under-physics":case"model-inapplicable":case"contested":case"insufficient-history":return"CANNOT MODEL";case"frame-unavailable":return"FRAME UNAVAILABLE";case"input-absent":return null;default:return t}}function Ns({declined:e,layout:t="inline"}){return r.jsx(Ue,{text:e.note,focusable:!0,children:r.jsx(Tt,{role:"status",layout:t,children:Xr(e)??"NO DATA"})})}function Cs({label:e,children:t,"aria-label":n,className:a,variant:o="popover",panelHeight:s="cap",chevron:u=!0,asButton:l=!1,buttonSize:f="md",defaultOpen:p=!1}){const[m,w]=c.useState(p),_=c.useId(),v=c.useRef(null),[i,y]=c.useState(null),A=Nt(i),g=o==="inline"&&u,b=typeof e=="function"?e(m):e,M={ref:v,type:"button","aria-expanded":m,"aria-controls":_,"aria-label":n,onClick:()=>w($=>!$)},E=r.jsxs(r.Fragment,{children:[b,g&&r.jsx(Kr,{$open:m,children:r.jsx(bn,{size:"var(--icon-size-control)"})})]});return r.jsxs(Wr,{className:a,$variant:o,onKeyDown:$=>{$.key==="Escape"&&m&&(w(!1),v.current?.focus())},children:[l?r.jsx(Vr,{...M,variant:"ghost",size:f,$inline:o==="inline",children:E}):r.jsx(Yr,{...M,$variant:o,$align:o==="inline"&&!u?"end":"between",children:E}),m&&r.jsx(qr,{ref:y,id:_,role:"group",tabIndex:A,$variant:o,$panelHeight:s,children:t})]})}const Wr=d.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,Yr=d.button`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-glyph);
  padding: var(--inset-glyph-button);
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  ${({$variant:e,$align:t})=>e==="inline"&&Z`
      justify-content: ${t==="end"?"flex-end":"space-between"};
      width: 100%;
      text-align: start;
      border-radius: var(--radius-regular);
      &:hover {
        background: var(--color-surface-sunken);
      }
    `}
  ${ce}
`,Vr=d(Le)`
  ${({$inline:e})=>e&&Z`
      align-self: flex-end;
    `}
`,Kr=d.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,qr=d.div`
  ${({$variant:e})=>e==="popover"?Z`
          position: absolute;
          top: 100%;
          right: 0;
          /* Local sibling ordering: lifts the popped panel above following rows, off the app z ladder. */
          z-index: 1;
          margin-top: var(--gap-disclosure);
        `:Z`
          position: static;
          width: 100%;
          margin-top: var(--gap-disclosure);
        `}
  /* An accordion body grows in flow up to a cap, then scrolls, never spilling past the row below. */
  ${({$variant:e,$panelHeight:t})=>e==="inline"&&t==="cap"?Z`
          max-height: 16rem;
          overflow-y: auto;
          ${be}
        `:""}
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function Ps({space:e,...t}){return r.jsx(Jr,{$space:e,...t})}const Jr=d.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${xe[e]} 0`:"0"};
`,Zr=160,Qr=24,eo="...";function Fs({children:e,limit:t=Zr,subject:n,className:a}){const[o,s]=c.useState(!1),u=c.useId(),l=to(e,t);if(l===void 0)return r.jsx(r.Fragment,{children:e});const f=o?"Show less":"Show more";return r.jsxs(no,{className:a,children:[r.jsx("span",{id:u,children:o?e:`${l}${eo}`})," ",r.jsx(ro,{type:"button","data-expandable-toggle":"","aria-controls":u,"aria-expanded":o,"aria-label":n===void 0?void 0:`${f} of ${n}`,onClick:()=>s(p=>!p),children:f})]})}function to(e,t){if(e.length<=t+Qr)return;const n=e.lastIndexOf(" ",t);return n<=0?e.slice(0,t):e.slice(0,n)}const no=d.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,ro=d(xn)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function Ls(e,t){const n=t.map(s=>s==null?null:Cn(e,s.index)),a=n.length>0&&n.every(s=>s?.currency==="exact"),o=n.reduce((s,u)=>u?.currency!=="held"||u.asOfUt===null?s:s===null?u.asOfUt:Math.min(s,u.asOfUt),null);return s=>{const u=a?Pn(s):s;return o===null?u:{state:"held",value:u,asOfUt:Ee("ut",o),grade:"held",reckoning:{status:"none"}}}}function oo({anchor:e,style:t,children:n,...a}){const[o,s]=c.useState(null),[u,l]=c.useState(null),f=c.useRef(e);f.current=e;const p=c.useCallback(()=>{if(!o)return;const m=f.current,w=typeof m=="function"?m():m;if(!w)return;const _=o.getBoundingClientRect(),v=tr(w,{w:_.width,h:_.height},{w:window.innerWidth,h:window.innerHeight});l(i=>i&&i.left===v.left&&i.top===v.top?i:v)},[o]);return c.useLayoutEffect(()=>{p()}),c.useLayoutEffect(()=>{if(!o)return;const m=typeof ResizeObserver>"u"?null:new ResizeObserver(p);return m?.observe(o),window.addEventListener("resize",p),window.addEventListener("scroll",p,!0),()=>{m?.disconnect(),window.removeEventListener("resize",p),window.removeEventListener("scroll",p,!0)}},[o,p]),typeof document>"u"?null:Vn.createPortal(r.jsx(ao,{ref:s,style:{...t,left:u?.left??0,top:u?.top??0,visibility:u===null?"hidden":t?.visibility},...a,children:n}),document.body)}const ao=d.div`
  position: fixed;
  z-index: var(--z-dropdown);
`,lt=12,so=8,io=120;function Ds({trigger:e,"aria-label":t,children:n}){const[a,o]=c.useState(!1),s=c.useRef(null),u=c.useRef(null),l=c.useRef(null),f=c.useId(),p=c.useCallback(()=>{u.current!==null&&(clearTimeout(u.current),u.current=null)},[]),m=()=>{p(),o(!0)},w=()=>{p(),u.current=setTimeout(()=>o(!1),io)},_=c.useCallback(()=>{p(),o(!1)},[p]);c.useEffect(()=>p,[p]),c.useEffect(()=>{if(!a)return;const i=y=>{y.key==="Escape"&&(y.stopPropagation(),_())};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[a,_]);const v=()=>{const i=s.current?.getBoundingClientRect();if(!i)return null;const y=l.current?.offsetHeight??0,A=i.top-y-2*lt;return{x:i.left,y:A+lt>=so?A:i.bottom}};return r.jsxs(r.Fragment,{children:[r.jsx(lo,{ref:s,type:"button","aria-label":t,"aria-describedby":a?f:void 0,onPointerEnter:m,onPointerLeave:w,onFocus:m,onBlur:_,children:e}),a&&r.jsx(oo,{anchor:v,onPointerEnter:p,onPointerLeave:w,children:r.jsx(co,{ref:l,id:f,role:"tooltip",children:n})})]})}const lo=d.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${ce}
`,co=d.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function Os({gap:e,inset:t=!1,wrap:n=!1,children:a,...o}){return r.jsx(uo,{$gap:e,$inset:t,$wrap:n,...o,children:a})}const uo=d.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?xe[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,fo=4,po=80,ct=60,ho=30,ze=24,mo=32,ut=56,dt=ze;function Ae(e,t,n){const{min:a,max:o,step:s}=t,u=e+n*s,l=Math.min(o,Math.max(a,u));if(!Number.isFinite(a))return l;const f=a+Math.round((l-a)/s)*s;return Math.min(o,Math.max(a,f))}function go(e){const{value:t,min:n,max:a,step:o,orientation:s="horizontal",onChange:u,format:l,"aria-label":f,label:p=f,disabled:m=!1,width:w,height:_}=e,v=s==="vertical",i=Math.max(ze,w??(v?dt:ut)),y=Math.max(ze,_??(v?ut:dt)),A=e.mode==="rate",g=n??Number.NEGATIVE_INFINITY,b=a??Number.POSITIVE_INFINITY,M={min:g,max:b,step:o},E=c.useRef(null),$=c.useRef(t);$.current=t;const L=c.useRef(u);L.current=u;const U=(e.mode==="rate"?e.stepsPerSecond:void 0)??ho,[B,N]=c.useState(0),k=l?l(t):String(Math.round(t)),C=b>g&&Number.isFinite(b-g)?(t-g)/(b-g):.5,I=j=>{m||j!==t&&u(j)};c.useEffect(()=>{if(!A||B===0||m)return;const j=setInterval(()=>{const T=Math.max(g,Math.min(b,$.current+B*U*o*(ct/1e3)));T!==$.current&&L.current(T)},ct);return()=>clearInterval(j)},[A,B,m,o,U,g,b]);const R=j=>{if(m)return;let T=null;switch(j.key){case"ArrowRight":case"ArrowUp":T=Ae(t,M,1);break;case"ArrowLeft":case"ArrowDown":T=Ae(t,M,-1);break;case"Home":if(!Number.isFinite(g))return;T=g;break;case"End":if(!Number.isFinite(b))return;T=b;break;default:return}j.preventDefault(),I(T)},h=j=>s==="vertical"?j.clientY:j.clientX,S=j=>{m||(E.current={start:h(j),startValue:t},j.currentTarget.setPointerCapture(j.pointerId))},D=j=>{if(m||!E.current)return;const T=s==="vertical"?E.current.start-h(j):h(j)-E.current.start;if(A){const H=T/po;N(Math.max(-1,Math.min(1,H)));return}const G=T/fo;I(Ae(E.current.startValue,M,G))},P=j=>{E.current&&(E.current=null,N(0),j.currentTarget.hasPointerCapture(j.pointerId)&&j.currentTarget.releasePointerCapture(j.pointerId))};return r.jsxs(vo,{children:[p!==!1&&r.jsx(bo,{"aria-hidden":"true",children:p}),r.jsxs(xo,{role:"slider","aria-label":f,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":n,"aria-valuemax":a,"aria-valuetext":k,"aria-disabled":m||void 0,tabIndex:m?-1:0,$orientation:s,$disabled:m,$width:i,$height:y,$compact:(v?i:y)<mo,onKeyDown:R,onPointerDown:S,onPointerMove:D,onPointerUp:P,onPointerCancel:P,children:[r.jsx(wo,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-C)*100}%)`}:{transform:`translateX(${(.5-C)*100}%)`},"aria-hidden":"true"}),r.jsx(yo,{$orientation:s,"aria-hidden":"true"}),r.jsx($o,{"aria-hidden":"true",children:k})]})]})}const vo=d.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,bo=d.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,xo=d.div`
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

  ${ce}
`,wo=d.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,yo=d.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,$o=d.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function zs({lock:e}){const t=Fn(e)?_o(e):e,n=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return r.jsx(Ue,{text:n,focusable:!0,children:r.jsxs(Mo,{role:"status","aria-label":n,children:[r.jsx(wn,{}),r.jsx(ko,{children:jo(t)})]})})}function _o(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...Kn(t,zn),locks:t}}function jo(e){const t=[...new Set(e.locks.flatMap(n=>n.missing.map(a=>a.name)))];return t.length>0?t.join(", "):e.reason}const Mo=d.span`
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
`,ko=d.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ft=1.4,pt=1.7,Eo="var(--icon-size-standalone)",Ro=1.8,_e="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",ht="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",mt="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",gt="M7 4.5V19.5M17 4.5V19.5",ie=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,Bt={prograde:{colour:"prograde",paths:[_e,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[_e,ie(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",ie(12,11)]},radialOut:{colour:"radial",paths:[ht,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[ht,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",ie(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",ie(12,12)]},relativePlus:{colour:"target",paths:[_e,mt],dot:[12,12]},relativeMinus:{colour:"target",paths:[_e,mt,ie(12,12)]},parallelPlus:{colour:"target",paths:[gt],dot:[12,12]},parallelMinus:{colour:"target",paths:[gt,ie(12,12)]}},Bs=Object.keys(Bt);function vt({shape:e,colour:t,strokeWidth:n,dotRadius:a}){return r.jsxs("g",{fill:"none",stroke:t,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(o=>r.jsx("path",{d:o},o)),e.dot&&r.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:a,fill:t,stroke:"none"})]})}function K(e,t){const n=Bt[e],a=`var(--color-marker-${n.colour})`,o=c.forwardRef(({size:s=Eo,strokeWidth:u=Ro,label:l,style:f,...p},m)=>{const w={ref:m,xmlns:"http://www.w3.org/2000/svg",...typeof s=="number"?{width:s,height:s,style:f}:{style:{width:s,height:s,...f}},viewBox:"0 0 24 24","data-marker":e},_=r.jsxs(r.Fragment,{children:[r.jsx(vt,{shape:n,colour:"currentColor",strokeWidth:u+ft,dotRadius:pt+ft/2}),r.jsx(vt,{shape:n,colour:a,strokeWidth:u,dotRadius:pt})]});return l?r.jsx("svg",{...w,role:"img","aria-label":l,...p,children:_}):r.jsx("svg",{...w,"aria-hidden":"true",...p,children:_})});return o.displayName=t,o}const Ht=K("prograde","ProgradeIcon"),So=K("retrograde","RetrogradeIcon"),Ut=K("normal","NormalIcon"),To=K("antiNormal","AntiNormalIcon"),Io=K("radialOut","RadialOutIcon"),Gt=K("radialIn","RadialInIcon"),Ao=K("maneuver","ManeuverIcon"),No=K("target","TargetIcon"),Co=K("antiTarget","AntiTargetIcon"),Po=K("relativePlus","RelativePlusIcon"),Fo=K("relativeMinus","RelativeMinusIcon"),Lo=K("parallelPlus","ParallelPlusIcon"),Do=K("parallelMinus","ParallelMinusIcon"),Hs=Ht,Us=Gt,Gs=Ut,Xs={prograde:Ht,retrograde:So,normal:Ut,antiNormal:To,radialOut:Io,radialIn:Gt,maneuver:Ao,target:No,antiTarget:Co,relativePlus:Po,relativeMinus:Fo,parallelPlus:Lo,parallelMinus:Do};function Xt(e){const{year:t,day:n,hour:a,minute:o}=Xe(),s=Number.isFinite(e)?Math.max(0,e):0,u=Math.floor(s/t)+1,l=s%t,f=Math.floor(l/n)+1,p=l%n;return{year:u,day:f,hour:Math.floor(p/a),minute:Math.floor(p%a/o),second:Math.floor(p%o)}}const Oo={year:1,day:1,hour:0,minute:0,second:0};function zo(e){const{year:t,day:n,hour:a,minute:o}=Xe();return(e.year-1)*t+(e.day-1)*n+e.hour*a+e.minute*o+e.second}function je(e){return he(Ee("s",e))}function Bo({value:e,onChange:t,label:n,disabled:a,steps:o}){const s=c.useId(),u=`${s}-absent`,l=e!==null&&Number.isFinite(e)?e:null,f=l===null?null:Xt(l),p=Xe(),m=o??[p.minute,10*p.minute,p.hour,p.day],[w,_]=c.useState(null),v=(i,y,A,g)=>r.jsxs(Me,{gap:"caption",children:[r.jsx(He,{htmlFor:`${s}-${i}`,children:y}),r.jsx(At,{id:`${s}-${i}`,type:"number",inputMode:"numeric","aria-label":`${n} ${y}`,"aria-describedby":f===null?u:void 0,min:A,step:1,style:{width:g},disabled:a,placeholder:f===null?ve:void 0,value:w?.key===i?w.text:f===null?"":String(f[i]),onBlur:()=>_(null),onChange:b=>{const M=b.target.value;if(_({key:i,text:M}),M.trim()==="")return;const E=Number(M);if(!Number.isFinite(E))return;const $=Math.max(A,Math.round(E));t(zo({...f??Oo,[i]:$}))}})]},i);return r.jsxs(Me,{gap:"related-dense",role:"group","aria-label":n,children:[r.jsxs(qe,{gap:"related-dense",wrap:!0,justify:"start",children:[v("year","YEAR",1,"5rem"),v("day","DAY",1,"5rem"),v("hour","HR",0,"4rem"),v("minute","MIN",0,"4rem"),v("second","SEC",0,"4rem")]}),f===null&&r.jsx(Oe,{id:u,level:"muted",size:"sm",children:`${ve} no ${n.toLowerCase()} to show. Type one to state it.`}),m.length===0?null:r.jsxs(qe,{gap:"related-packed",wrap:!0,justify:"start",children:[r.jsx(Oe,{level:"faint",size:"sm",children:"NUDGE"}),m.map(i=>r.jsx(Le,{variant:"ghost",size:"sm",disabled:a||l===null,"aria-label":`${n} earlier by ${je(i)}`,onClick:()=>l!==null&&t(l-i),children:`-${je(i)}`},`minus-${i}`)),m.map(i=>r.jsx(Le,{variant:"ghost",size:"sm",disabled:a||l===null,"aria-label":`${n} later by ${je(i)}`,onClick:()=>l!==null&&t(l+i),children:`+${je(i)}`},`plus-${i}`))]})]})}const Ho=d.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function Uo({observed:e,modelled:t,write:n}){if(t==null)return null;if(n===void 0){const a=t;return De(e,a,yn())?r.jsx(bt,{children:r.jsx(ne,{value:a})}):null}return De(e,t,$n(n))?r.jsx(bt,{children:n(t)}):null}function bt({children:e}){return r.jsx(Ho,{"data-modelled-alongside":"",children:r.jsx(Ge,{"data-held":"",kind:"modelled",caption:_n,children:e})})}function Ws({value:e}){return r.jsxs(r.Fragment,{children:[r.jsx(ne,{value:e}),r.jsx(Uo,{observed:e.value,modelled:jn(e)})]})}function Ys({panZoom:e,label:t,style:n,onMouseMove:a,children:o}){const{style:s,ref:u,...l}=e.viewportProps;return r.jsxs(Go,{...l,ref:u,onMouseMove:a,"aria-label":t,style:{...s,...n},children:[o,r.jsx(Xo,{role:"status",children:e.hint!==null&&r.jsx(Wo,{children:e.hint})})]})}const Go=d.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  ${be}
`,Xo=d.div`
  position: absolute;
  bottom: var(--gap-related);
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-base);
  max-width: calc(100% - 16px);
  pointer-events: none;
`,Wo=d.div`
  padding: var(--inset-control);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function Vs({filled:e,of:t,tone:n="info",label:a}){const o=`${e} of ${t}`;return r.jsx(Yo,{role:"img","aria-label":a===void 0?o:`${a}: ${o}`,"data-pips":"",children:Array.from({length:t},(s,u)=>r.jsx(Vo,{$colour:Bn[n],$filled:u<e},u))})}const Yo=d.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  flex: none;
`,Vo=d.span`
  width: 1em;
  height: 1em;
  border-radius: var(--radius-circle);
  border: 2px solid ${({$colour:e})=>e};
  background: ${({$colour:e,$filled:t})=>t?e:"transparent"};
`;function Ks({id:e,label:t,value:n,options:a,onChange:o,hint:s}){const u=a.findIndex(l=>qn(l.choice,n));return r.jsxs(It,{children:[r.jsx(He,{htmlFor:e,children:t}),r.jsxs(Mn,{id:e,value:u===-1?"":String(u),onChange:l=>{const f=a[Number(l.target.value)];f!==void 0&&o(f.choice)},children:[u===-1&&r.jsx("option",{value:"",disabled:!0}),a.map((l,f)=>r.jsx("option",{value:f,children:l.label},`${l.choice.kind}-${l.choice.bodyIndex??"none"}`))]}),s!==void 0&&r.jsx(kn,{children:s})]})}const Ko=d.span`
  display: inline-grid;
  justify-items: center;
`,qo=d.span`
  grid-area: 1 / 1;
`,Jo=d.span`
  grid-area: 1 / 1;
  visibility: hidden;

  &::before {
    content: attr(data-word);
  }
`;function qs({shown:e,reserve:t}){return r.jsxs(Ko,{children:[[...new Set(t)].map(n=>r.jsx(Jo,{"data-word":n,"aria-hidden":"true"},n)),r.jsx(qo,{children:e})]})}function Zo({as:e,interactive:t=!1,selected:n=!1,wrap:a=!1,nested:o=!1,type:s,children:u,...l}){return r.jsx(ea,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:n,$wrap:a,$nested:o,...l,children:u})}const Wt=d.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,Qo="min(12ch, 100%)",ea=d.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-row);
  font-size: var(--font-size-compact);
  padding: var(--inset-row);
  ${({$wrap:e})=>e?`
  flex-wrap: wrap;
  row-gap: var(--gap-row-wrap);

  & > ${Wt} {
    min-width: ${Qo};
  }
`:""}
  ${({$interactive:e})=>e?Z`
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

  ${be}
`:""}
  ${({$interactive:e,$selected:t})=>e&&t?`
  ${Lt("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}
`,Js=Object.assign(Zo,{Name:Wt}),ta=65,Yt=38,na=72,ra=na-Yt,Vt=55,Be=137.508,oa=10,aa=1.5,sa=64,ia=60,la=241,ca=Be-Math.floor(Be),me=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function Kt(e,t){const n=Math.abs(e-t)%360;return n>180?360-n:n}const ua=me.map((e,t)=>{let n=1/0;for(let o=0;o<me.length;o++)o!==t&&(n=Math.min(n,Kt(e.hue,me[o].hue)));const a=n/2;return Math.max(0,Math.min(oa,a-aa))}),da=me.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:ua[t]}));function fa(e,t=me){return t.find(n=>n.aliases.some(a=>e.includes(a)))}function qt(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function xt(e,t){return(e%t+t)%t}function pa(e){const n=qt(`light:${e}`)/4294967295;return Yt+n*ra}function ha(e){const t=fa(e);if(!t)return;const n=t.aliases.length===1?Vt:pa(e);return{hue:t.hue,lightness:n}}function ma(e){return da.some(({centre:t,radius:n})=>Kt(e,t)<n)}function ga(e){const t=qt(e);let n=xt(t*Be,360);const a=ia+(t>>>8)%la+ca;let o=0;for(;ma(n)&&o<sa;)n=xt(n+a,360),o++;return n}function Zs(e){const t=e.trim().toLowerCase(),n=ha(t),a=n?.hue??ga(t),o=n?.lightness??Vt;return`hsl(${Math.round(a)}deg ${ta}% ${Math.round(o)}%)`}function Qs({selected:e,gap:t="caption",layout:n="stack",selectedLook:a="fill",children:o,...s}){return r.jsx(va,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:n,$look:a,...s,children:o})}const va=d.button`
  display: flex;
  ${({$layout:e})=>e==="split"?Z`
          justify-content: space-between;
          align-items: baseline;
          > :first-child {
            flex: 1;
            min-width: 0;
          }
        `:Z`
          flex-direction: column;
        `}
  gap: ${({$gap:e})=>xe[e]};
  width: 100%;
  text-align: left;
  padding: var(--inset-selectable-row);
  border-radius: ${Ft.regular};
  border: 1px solid
    ${({$selected:e,$look:t})=>e?t==="outline"?"var(--color-accent-fg)":"transparent":"var(--color-border-subtle)"};
  ${({$selected:e,$look:t})=>e?t==="outline"?"background: var(--color-surface-raised); color: inherit;":Lt("go"):"background: transparent; color: inherit;"}
  cursor: pointer;
  font-family: inherit;

  ${({$selected:e})=>e?"":Z`
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

  ${ce}
`,ba=c.forwardRef(function(t,n){return r.jsx(xa,{ref:n,type:"range",...t})}),xa=d.input`
  width: 100%;
  min-width: 0;
  margin: 0;
  background: none;
  accent-color: var(--color-accent-fg);
  cursor: pointer;

  ${ce}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function wa({label:e,children:t,detail:n,tone:a="neutral",...o}){return r.jsxs(ya,{...o,children:[r.jsx($a,{children:e}),r.jsx(_a,{$tone:a,children:t}),n!=null&&r.jsx(ja,{children:n})]})}const ya=d.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,$a=d.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,_a=d.dd`
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
  color: ${({$tone:e})=>Hn[e]};
`,ja=d.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function ei({slot:e}){const t=Un(e);return t.length===0?null:r.jsx(r.Fragment,{children:t.map(n=>r.jsx(wa,{label:n.label,detail:n.detail,tone:n.tone??"neutral",children:r.jsx(Ma,{entry:n})},n.id))})}function Ma({entry:e}){if(e.value!==void 0)return r.jsx(ne,{value:e.value});if(e.text===void 0)return r.jsx(Gn,{});const t=En(e.held);return t===null?r.jsx(r.Fragment,{children:e.text}):r.jsx(Ge,{kind:t.kind,caption:t.caption,children:e.text})}const ka=12,le=12,Ea=12,wt=52,Y=10,Ne=4;function Ra(e,t,n){const a=u=>e.map(l=>Number.parseFloat(u.mark(l).replace(/[^\d.-]/g,""))),o=a(n(Ne)),s=u=>a(u).every((l,f)=>l===o[f]);if(s(t))return t;for(let u=0;u<Ne;u++){const l=n(u);if(s(l))return l}return n(Ne)}function ti({labelSide:e="left",value:t,min:n,max:a,width:o=92,height:s=220,fillHeight:u=!1,tickStep:l,zones:f,markers:p,groundLine:m,seaLevel:w,format:_,"aria-label":v}){const i=c.useRef(null),[y,A]=c.useState(s);c.useEffect(()=>{if(!u)return;const x=i.current;if(!x)return;const z=()=>{const J=x.clientHeight;J>0&&A(J)};z();const O=new ResizeObserver(z);return O.observe(x),()=>O.disconnect()},[u]);const g=u?y:s,b=Ct(t),{shown:M,held:E,caption:$,band:L}=b,{anchor:U,tip:B}=Rn($),N=M?.magnitude??Number.NaN,k=Number.isFinite(N)?M:null,C=n.magnitude,I=a.magnitude,R=I-C,h=Number.isFinite(N)?N:C,S=R>0?Math.max(C,Math.min(I,h)):C,D=k!=null,P=nt(a,{format:_}),j=k==null?ve:rt({magnitude:h,unit:k.unit},{format:P.rung}),T=x=>rt(x),G=[...(p??[]).flatMap(x=>x.label===void 0?[]:[x.bounds===void 0?`${x.label} ${T(x.value)}`:`${x.label} ${T(x.value)}, between ${T(x.bounds.lo)} and ${T(x.bounds.hi)}`]),...(f??[]).flatMap(x=>x.label===void 0?[]:[`${x.label} zone ${T(x.from.min(x.to))} to ${T(x.from.max(x.to))}`]),...m===void 0?[]:[`ground ${T(m)}`],...w===void 0?[]:[`sea level ${T(w)}`]],H=k==null||L===null?null:Ln(L,k.unit)??null,X=Math.max(0,g-le-Ea),V=x=>{if(!(R>0))return le+X;const z=Math.max(0,Math.min(1,(x-C)/R));return le+(1-z)*X},W=x=>V(x.magnitude),ee=le,re=le+X,q=e==="right",F=q?o-wt-Y:wt,Q=q?F+Y+6:F-6,Re=q?"start":"end",we=(x,z)=>{const O=W(x),J=x.greaterThan(a)?-1:x.lessThan(n)?1:0,fe=F-4,ye=F+Y+4,Se=F+Y/2;return r.jsxs("g",{"data-level":z?"sea":"ground",children:[r.jsx("line",{x1:fe,y1:O,x2:ye,y2:O,stroke:z?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:z?1.5:2,strokeDasharray:z?"3 2":void 0}),J!==0&&r.jsx("polygon",{"data-off-scale":"true",points:`${Se-4},${O-J*2} ${Se+4},${O-J*2} ${Se},${O+J*4}`,fill:z?"var(--color-info-mark)":"var(--color-text-primary)"})]})},ae=[],se=l?.magnitude??0;if(se>0&&R>0){const x=Math.ceil(C/se),z=Math.floor(I/se+1e-9);for(let O=x;O<=z;O++)ae.push(O===0?0:O*se)}const ue=Ra(ae,P,x=>nt(a,{format:_,decimals:x})),oe=V(S),de=x=>X>0?(le+X-x)/X:0,We=H!==null&&De(de(oe),[de(W(H.lo)),de(W(H.hi))],Sn())?H:null;return r.jsxs(Sa,{ref:i,...An(b),...U,...D?{role:"meter","aria-label":Qe(v,$),...Ze($),"aria-valuenow":S,"aria-valuemin":C,"aria-valuemax":I,"aria-valuetext":G.length===0?j:`${j}; ${G.join("; ")}`}:{role:"img","aria-label":Qe(`${v}: ${j}`,$),...Ze($)},style:u?{height:"100%"}:void 0,children:[r.jsxs("svg",{width:o,height:g,viewBox:`0 0 ${o} ${g}`,"aria-hidden":"true",style:u?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[r.jsx("rect",{x:F,y:ee,width:Y,height:X,rx:2,fill:"var(--color-surface-raised)"}),f?.map(x=>{const z=W(x.from.max(x.to)),O=W(x.from.min(x.to)),J=Math.max(0,O-z);return r.jsx("g",{children:r.jsx("rect",{x:F,y:z,width:Y,height:J,fill:x.color??"var(--color-warn-mark)",opacity:.55})},`zone-${O}-${z}-${x.label??""}`)}),w!==void 0&&R>0&&we(w,!0),m!==void 0&&R>0&&we(m,!1),ae.map(x=>{const z=V(x),O=D&&Math.abs(z-Math.max(ee+4,Math.min(re-4,oe)))<ka;return r.jsxs("g",{children:[r.jsx("line",{x1:q?F+Y+4:F-4,y1:z,x2:q?F+Y:F,y2:z,stroke:"var(--color-border-subtle)",strokeWidth:1}),!O&&r.jsx("text",{x:Q,y:z,textAnchor:Re,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:ue.mark(x)})]},`tick-${x}`)}),p?.map(x=>{const{bounds:z}=x,O=W(x.value),J=x.color??"var(--color-accent-fg)";return r.jsxs("g",{"data-marker":x.label,children:[r.jsx("line",{x1:F,y1:O,x2:F+Y,y2:O,stroke:J,strokeWidth:2,strokeDasharray:"2 2"}),r.jsx("polygon",{points:q?`${F},${O} ${F-5},${O-3} ${F-5},${O+3}`:`${F+Y},${O} ${F+Y+5},${O-3} ${F+Y+5},${O+3}`,fill:"none",stroke:J,strokeWidth:1.5}),z!==void 0&&["lo","hi"].map(fe=>{const ye=W(z[fe]);return r.jsx(Je,{end:fe,x1:F,y1:ye,x2:F+Y,y2:ye},fe)})]},`marker-${O}-${x.label??""}`)}),We!==null&&["lo","hi"].map(x=>{const z=W(We[x]);return r.jsx(Je,{end:x,x1:F,y1:z,x2:F+Y,y2:z},x)}),D&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:F-6,y1:oe,x2:F+Y+6,y2:oe,stroke:"var(--color-accent-fg)",strokeWidth:2}),r.jsxs("text",{x:q?Q+2:Q-2,y:Math.max(ee+4,Math.min(re-4,oe)),textAnchor:Re,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[P.mark(h),E&&r.jsx(Tn,{size:5})]})]}),!D&&r.jsx(In,{x:q?Q+8:Q-8,y:ee+X/2,size:11,children:ve}),P.symbol!==""&&r.jsx("text",{x:F+Y/2,y:ee-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:P.symbol})]}),B]})}const Sa=d.div`
  display: block;
  max-width: 100%;
`,ni=d.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,Ta=112;function Ia(e,t){try{return Ee(e,1).in(t).magnitude}catch{return Number.NaN}}function Aa(e,t){let n=e;return t.map((a,o)=>{if(!Number.isFinite(a)||a===0)return 0;const s=o===t.length-1?n/a:Math.trunc(n/a);return n-=s*a,s})}function ri({value:e,unit:t,onChange:n,label:a,rungs:o,range:s,rate:u,disabled:l}){const f=c.useId(),{shown:p,held:m,caption:w}=Ct(e),_=m?r.jsx(Ge,{caption:w,children:a}):a,v=s,i=p?p.magnitude:Number.NaN,[y,A]=c.useState({}),g=$=>y[$]??null,b=($,L)=>A(U=>({...U,[$]:L})),M=u?r.jsxs(Me,{gap:"related-packed",children:[r.jsx(go,{mode:"rate","aria-label":`${a} rate`,value:i,step:u.step,stepsPerSecond:u.stepsPerSecond,disabled:l||!Number.isFinite(i),format:Ce(t)?Ca:void 0,width:Ce(t)?Ta:void 0,onChange:$=>n(pe(t,$))}),r.jsx(Oe,{level:"faint",size:"sm",children:`${u.step} ${Na(t)} / notch`})]}):null;if(Ce(t))return r.jsxs(Fe,{children:[r.jsx($t,{"aria-hidden":"true",children:_}),r.jsxs(Me,{gap:"related-dense",children:[r.jsx(Bo,{label:m&&w!==null?`${a}, ${w}`:a,value:Number.isFinite(i)?i:null,disabled:l,steps:u?[]:void 0,onChange:$=>n(pe(t,$))}),M]})]});if(o&&o.length>0){const $=o.map(B=>Ia(String(B),t)),L=Aa(i,$),U=(B,N)=>{const k=Pe(N);if(k===void 0){b(B,{text:N,against:L[B]});return}const C=L.map(R=>Number.isFinite(R)?R:0);C[B]=k;const I=C.reduce((R,h,S)=>Number.isFinite($[S])?R+h*$[S]:R,0);b(B,{text:N,against:k}),n(pe(t,I))};return r.jsxs(Fe,{children:[r.jsx($t,{id:`${f}-label`,children:_}),r.jsx(Da,{role:"group","aria-labelledby":`${f}-label`,children:o.map((B,N)=>r.jsxs(Oa,{children:[r.jsx(za,{type:"number",disabled:l,"aria-label":`${a} ${String(B)}`,value:yt(g(N),L[N]),onChange:k=>U(N,k.target.value)}),r.jsx(_t,{"aria-hidden":"true",children:String(B)})]},String(B)))}),M]})}const E=$=>{const L=Pe($);b(0,{text:$,against:L??i}),L!==void 0&&n(pe(t,L))};return r.jsxs(Fe,{children:[r.jsx(Fa,{htmlFor:f,children:_}),r.jsxs(La,{children:[r.jsx(Zt,{id:f,type:"number",disabled:l,min:v?.min,max:v?.max,step:v?.step,value:yt(g(0),i),onChange:$=>E($.target.value)}),r.jsx(_t,{"aria-hidden":"true",children:t})]}),v?r.jsx(ba,{disabled:l,"aria-label":`${a} slider`,min:v.min,max:v.max,step:v.step??(v.max-v.min)/100,value:Number.isFinite(i)?i:v.min,onChange:$=>n(pe(t,Pe($.target.value)??v.min))}):null,M]})}function yt(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(Pa(t)):""}function Na(e){return Pt(e)??e}function Ce(e){return Pt(e)==="s"}function Ca(e){if(!Number.isFinite(e))return"";const{day:t,hour:n,minute:a,second:o}=Xt(e),s=u=>String(u).padStart(2,"0");return`D${t} ${s(n)}:${s(a)}:${s(o)}`}function Pe(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function Pa(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const Fe=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,Jt=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Fa=d.label`
  ${Jt}
`,$t=d.span`
  ${Jt}
`,La=d.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,Zt=d.input`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-field-compact);
  border-radius: var(--radius-regular);
  text-align: right;
  font-variant-numeric: tabular-nums;
  min-width: 0;

  ${ce}
`,_t=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Da=d.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,Oa=d.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,za=d(Zt)`
  width: 4.5em;
`,Ba=200;function jt(e={}){const t=e.quietMs??Ba;let n=null,a=Number.NEGATIVE_INFINITY,o=!0;return{wheel(s,u){return(n===null||s-a>t)&&(n=u&&o?"diagram":"page"),a=s,n},pageScrolled(){o=!1},pointerMovedInside(){o=!0},yieldToPage(){n="page"},get owner(){return n}}}const Ha=16,Ua=400,Mt=120,Ga=Math.log(1.15)/100,Xa=.01;function Wa(e,t,n){const a=t===1?e*Ha:t===2?e*Ua:e,o=Math.max(-Mt,Math.min(Mt,a)),s=n&&Math.abs(a)<40?Xa:Ga;return Math.exp(-o*s)}function Ya(e,t,n={}){const{quietMs:a}=n,o=c.useRef(jt({quietMs:a}));c.useEffect(()=>{o.current=jt({quietMs:a})},[a]);const[s,u]=c.useState(null);c.useEffect(()=>{e.current!==s&&u(e.current)}),c.useEffect(()=>{if(!s||!t)return;const l=i=>i instanceof Node&&s.contains(i);let f=null;const p=(i,y)=>f!==null&&(Math.abs(i-f.x)>=1||Math.abs(y-f.y)>=1),m=i=>{f={x:i.clientX,y:i.clientY},!(i.ctrlKey||i.metaKey)&&o.current.wheel(performance.now(),l(i.target))},w=i=>{const y=p(i.clientX,i.clientY);f={x:i.clientX,y:i.clientY},y&&l(i.target)&&o.current.pointerMovedInside()},_=i=>{const y=i.target;(y===document||y instanceof Node&&y.contains(s))&&o.current.pageScrolled()},v=i=>{const y=i.ctrlKey||i.metaKey;if(!y&&o.current.owner!=="diagram")return;const A=s.getBoundingClientRect(),g=Wa(i.deltaY,i.deltaMode,y);if(t(g,i.clientX-A.left,i.clientY-A.top)===!1&&!y){o.current.yieldToPage();return}i.preventDefault()};return window.addEventListener("wheel",m,{capture:!0,passive:!0}),window.addEventListener("pointermove",w,{capture:!0,passive:!0}),window.addEventListener("scroll",_,{capture:!0,passive:!0}),s.addEventListener("wheel",v,{passive:!1}),()=>{window.removeEventListener("wheel",m,{capture:!0}),window.removeEventListener("pointermove",w,{capture:!0}),window.removeEventListener("scroll",_,{capture:!0}),s.removeEventListener("wheel",v)}},[s,t])}const Va="Arrow keys pan, + and - zoom, 0 resets",Ka=.15,kt=1.25,qa={zoom:1,panX:0,panY:0};function oi(e={}){const{home:t=qa,zoomAbout:n="pointer",panThreshold:a=3,enabled:o=!0}=e,[s,u]=c.useState(t),l=c.useRef({camera:s,options:e,home:t});l.current={camera:s,options:e,home:t};const f=c.useRef(null),p=e.elementRef??f,m=c.useCallback(()=>{const h=p.current?.getBoundingClientRect();return{w:h?.width??0,h:h?.height??0}},[]),w=c.useCallback(h=>{const{constrain:S}=l.current.options,D=m(),P=S&&D.w>0&&D.h>0?S(h,D):h;return l.current.camera=P,u(P),P},[m]),_=c.useCallback(h=>{w(typeof h=="function"?h(l.current.camera):h)},[w]),v=c.useCallback((h,S,D)=>{const P=l.current.camera,{minZoom:j=.1,maxZoom:T=50}=l.current.options,G=typeof j=="function"?j(P):j,H=Math.max(Math.min(G,P.zoom),Math.min(Math.max(T,P.zoom),P.zoom*h));if(H===P.zoom)return!1;const{w:X,h:V}=m();if(n==="centre")w({...P,zoom:H});else{const W=(S-X/2)/P.zoom+P.panX,ee=(D-V/2)/P.zoom+P.panY;w({zoom:H,panX:W-(S-X/2)/H,panY:ee-(D-V/2)/H})}return l.current.options.onManualMove?.("zoom"),!0},[w,m,n]);Ya(p,c.useMemo(()=>o?v:null,[o,v]));const i=c.useCallback(()=>{l.current.options.onManualMove?.("reset"),w(l.current.home)},[w]),y=c.useCallback(h=>{const{w:S,h:D}=m();v(h,S/2,D/2)},[m,v]),[A,g]=c.useState(null),b=c.useRef(new Map),M=c.useRef(null),E=c.useRef(null),$=c.useRef(null),L=c.useRef(!1),[U,B]=c.useState(!1),N=c.useCallback(h=>{if(l.current.options.enabled!==!1&&!(h.pointerType==="mouse"&&h.button!==0)){if(b.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),b.current.size===2){const[S,D]=[...b.current.values()];M.current=null,E.current=Math.hypot(S.x-D.x,S.y-D.y);return}L.current=!1,$.current={x:h.clientX,y:h.clientY},M.current={x:h.clientX,y:h.clientY},E.current=null}},[]),k=c.useCallback(h=>{if(!b.current.has(h.pointerId))return;if(h.pointerType==="mouse"&&h.buttons===0){b.current.delete(h.pointerId),b.current.size===0&&(M.current=null,$.current=null,E.current=null,B(!1));return}if(b.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),b.current.size>=2){const[G,H]=[...b.current.values()],X=Math.hypot(G.x-H.x,G.y-H.y),V=E.current;if(E.current=X,V===null||V===0)return;const W=p.current?.getBoundingClientRect();L.current=!0,v(X/V,(G.x+H.x)/2-(W?.left??0),(G.y+H.y)/2-(W?.top??0));return}const S=$.current,D=M.current;if(!S||!D||!L.current&&Math.hypot(h.clientX-S.x,h.clientY-S.y)<a)return;L.current||(L.current=!0,B(!0),h.currentTarget.setPointerCapture?.(h.pointerId));const P=h.clientX-D.x,j=h.clientY-D.y;M.current={x:h.clientX,y:h.clientY};const T=l.current.camera;l.current.options.onManualMove?.("pan"),w({...T,panX:T.panX-P/T.zoom,panY:T.panY-j/T.zoom})},[w,a,v]),C=c.useCallback(h=>{if(b.current.delete(h.pointerId),h.currentTarget.releasePointerCapture?.(h.pointerId),b.current.size===1){const[S]=[...b.current.values()];M.current={...S},$.current={...S},E.current=null;return}b.current.size===0&&(M.current=null,$.current=null,E.current=null,B(!1))},[]),I=c.useCallback(h=>{if(l.current.options.enabled===!1||h.target!==h.currentTarget||h.ctrlKey||h.metaKey||h.altKey)return;const S=l.current.camera,{w:D,h:P}=m(),j=(T,G)=>{const H=(T==="panX"?D:P)/S.zoom;l.current.options.onManualMove?.("pan"),w({...S,[T]:S[T]+G*H*Ka})};switch(h.key){case"ArrowLeft":j("panX",-1);break;case"ArrowRight":j("panX",1);break;case"ArrowUp":j("panY",-1);break;case"ArrowDown":j("panY",1);break;case"+":case"=":y(kt);break;case"-":case"_":y(1/kt);break;case"0":i();break;default:return}h.preventDefault()},[w,i,m,y]);return{camera:s,setCamera:_,reset:i,zoomBy:y,viewportProps:{ref:p,tabIndex:0,role:"group",onPointerDown:N,onPointerMove:k,onPointerUp:C,onPointerCancel:C,onFocus:h=>{h.target===h.currentTarget&&h.currentTarget.matches(":focus-visible")&&g(Va)},onBlur:()=>g(null),onKeyDown:I,style:{touchAction:"none",cursor:U?"grabbing":"grab"}},didPan:()=>L.current,isDragging:U,hint:A}}const Et="(prefers-reduced-motion: reduce)";function ai(){const[e,t]=c.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(Et).matches);return c.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const n=window.matchMedia(Et),a=()=>t(n.matches);return a(),n.addEventListener("change",a),()=>n.removeEventListener("change",a)},[]),e}const Qt=c.createContext(null);function si({widget:e,scope:t,children:n}){const a=c.useMemo(()=>({widget:e,scope:t}),[e,t]);return r.jsx(Qt.Provider,{value:a,children:n})}function ii(e){const t=c.useContext(Qt);if(!(!t||t.widget!==e))return t.scope}function li(e){if(e.length===0)return[];const t=[[e[0]]];for(let n=1;n<e.length;n++)Qa(e[n-1],e[n])?t.push([e[n]]):t[t.length-1].push(e[n]);return t}function ci(e,t,n,a){if(e.length===0||!(t>0))return[];const o=[e[0].x];let s=o[0],u=o[0];for(let l=1;l<e.length;l++){const f=o[l-1],p=f+Za(e[l].x-f,t);o.push(p),p<s&&(s=p),p>u&&(u=p)}return Ja(s,u,n,a,t).map(l=>e.map((f,p)=>({...f,x:o[p]+l})))}function Ja(e,t,n,a,o){if(!(o>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((n-t)/o),u=Math.floor((a-e)/o),l=[];for(let f=s;f<=u;f++)l.push(f*o+0);return l}function Za(e,t){const n=t/2;return((e+n)%t+t)%t-n}function Qa(e,t){const n=Rt(e),a=Rt(t),o=ts(n,a);if(o===0)return!1;const s=St(es(n,a));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=o)return!1;const l=[0,0,e.lat+t.lat>=0?1:-1],f=St(ns(l,s));if(f===null)return!1;const p=ge(n,a);return ge(n,f)>p&&ge(a,f)>p}function Rt({lat:e,lon:t}){const n=e*Math.PI/180,a=t*Math.PI/180,o=Math.cos(n);return[o*Math.cos(a),o*Math.sin(a),Math.sin(n)]}function ge(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function es(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function ts(e,t){return Math.acos(Math.max(-1,Math.min(1,ge(e,t))))}function ns(e,t){const n=ge(e,t);return[e[0]-n*t[0],e[1]-n*t[1],e[2]-n*t[2]]}function St(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{Rs as $,jr as A,$s as B,Ms as C,As as D,Fs as E,ks as F,Ht as G,Ds as H,nr as I,go as J,Gt as K,zs as L,Xs as M,Ut as N,Io as O,Mr as P,Ks as Q,it as R,Ws as S,Fo as T,Po as U,qs as V,So as W,Js as X,Wt as Y,_r as Z,Qs as _,xs as a,ba as a0,wa as a1,ei as a2,Hs as a3,ti as a4,No as a5,ni as a6,ri as a7,si as a8,tr as a9,fr as aa,jt as ab,Xr as ac,vr as ad,Ls as ae,br as af,Ja as ag,Zs as ah,li as ai,kr as aj,oi as ak,ai as al,Ss as am,Ya as an,ii as ao,zo as ap,Wa as aq,ci as ar,To as b,Co as c,ws as d,ys as e,Gs as f,_s as g,js as h,Es as i,Ts as j,Is as k,Ns as l,Cs as m,Ps as n,oo as o,Us as p,xr as q,Os as r,Bs as s,Ao as t,Bo as u,Uo as v,Ys as w,Do as x,Lo as y,Vs as z};
