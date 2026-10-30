import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./ext-react-C0MU9AHG.js";import p,{css as J,keyframes as Jt}from"./ext-styled-components-DAuodqsN.js";import{p as Qt,e as en,c as tn,u as nn,I as Ye}from"./widgetSize-CvdvoFhH.js";import{E as Rt,bG as be,n as rn,F as St,m as He,y as Tt,aU as on,bD as Ve,bH as an,$ as De,ab as ce,bI as sn,ad as Ee,a7 as ln,b1 as cn,a$ as un,b2 as dn,b0 as fn,bJ as pn,bK as hn,bq as mn,bL as It,g as gn,af as ue,e as Le,Z as vn,aF as bn,ac as Ue,ag as Nt,ae as Ge,ak as Ke,V as xn,l as wn,b8 as yn,bv as $n,bn as _n,bg as jn,bB as qe,aB as kn,bM as Mn,bC as Ze,bm as Je}from"./ModalSaveBar-CefTnyG4.js";import{aK as Te,b9 as Qe,cd as En,a_ as ee,aj as Rn,c8 as Sn,cK as Tn,b7 as We,l as In,c7 as At}from"./view-clock-formula-BsZkGtdW.js";import"./ksp-enum-names-Bkm_lBTj.js";import"./screen-BjBOitw-.js";import{Y as xe,N as ve,Z as Ct,_ as Nn,H as et,w as he,J as An,$ as Cn,a0 as Pn,j as ke,n as Oe,T as Fn,X as Pt,d as Dn,c as Ln,h as On,z as tt,G as nt}from"./contributionsRead-ByK-2wfU.js";import{a as zn,r as Bn,b as Hn}from"./Notice-Bh94Aj-C.js";import{r as Un}from"./ext-react-dom-DCF8ZnaJ.js";import{l as Gn}from"./capability-lock-B5WSZBDZ.js";import"./lagrange-DBwlSE8s.js";import"./use-transmissions-B3gNYSSw.js";import{r as Wn}from"./control-frame-to-read-frame-CFQeFYM-.js";function ps({items:e,onSelect:t,onDismiss:n,"aria-label":a,style:o,header:s,footer:c,emptyLabel:i="No actions",otherLabel:f="Other"}){const d=u.useRef(null),m=u.useId(),[w,_]=u.useState(0),v=Qt(e,f),l=v.flatMap(([,g])=>g),y=l.length;u.useEffect(()=>{const g=d.current;if(!g)return;if(y===0){g.focus();return}g.querySelectorAll('[role="menuitem"]')[w]?.focus()},[w,y]),u.useEffect(()=>{const g=b=>{const k=d.current;k&&b.target instanceof Node&&!k.contains(b.target)&&n()};return document.addEventListener("pointerdown",g),()=>document.removeEventListener("pointerdown",g)},[n]);const N=u.useCallback(g=>{if(g.key==="Escape"){g.stopPropagation(),n();return}if(g.key==="Tab"){n();return}if(l.length!==0)switch(g.key){case"ArrowDown":g.preventDefault(),_(b=>Math.min(b+1,l.length-1));break;case"ArrowUp":g.preventDefault(),_(b=>Math.max(b-1,0));break;case"Home":g.preventDefault(),_(0);break;case"End":g.preventDefault(),_(l.length-1);break}},[l.length,n]);return r.jsxs(Xn,{ref:d,role:y>0?"menu":void 0,"aria-label":a,onKeyDown:N,tabIndex:-1,style:o,children:[s,l.length===0?r.jsx(Rt,{layout:"fill",children:i}):v.map(([g,b],k)=>r.jsxs("div",{...v.length>1?{role:"group","aria-labelledby":`${m}-group-${k}`}:{role:"none"},children:[v.length>1?r.jsx(Yn,{id:`${m}-group-${k}`,"aria-hidden":"true",children:g}):null,b.map(E=>{const $=l.indexOf(E);return r.jsx(Vn,{type:"button",role:"menuitem","aria-label":E["aria-label"],"aria-disabled":E.disabled,$disabled:E.disabled,tabIndex:$===w?0:-1,onFocus:()=>_($),onClick:()=>{E.disabled||t(E.key)},children:E.label},E.key)})]},g)),c]})}const Xn=p.div`
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
`;function hs({settings:e,values:t,onChange:n}){return e.length===0?null:r.jsx(r.Fragment,{children:e.flatMap(a=>a.fields.map(o=>{const c=t?.[a.namespace]?.[o.key]??o.default,i=o.label??o.key,f=`augment-setting-${a.namespace}-${o.key}`;return o.type===Te.Bool?r.jsx(rn,{children:r.jsx(en,{checked:!!c,onChange:d=>n(a.namespace,o.key,d),label:i})},`${a.namespace}.${o.key}`):r.jsxs(St,{children:[r.jsx(He,{htmlFor:f,children:i}),r.jsx(Tt,{id:f,type:o.type===Te.Number?"number":"text",value:c===void 0?"":String(c),onChange:d=>{const m=d.target.value;if(o.type!==Te.Number){n(a.namespace,o.key,m);return}if(m===""){n(a.namespace,o.key,void 0);return}const w=Number(m);Number.isFinite(w)&&n(a.namespace,o.key,w)}})]},`${a.namespace}.${o.key}`)}))})}function ms({fallback:e,gap:t="related-dense",children:n,...a}){return r.jsxs(r.Fragment,{children:[r.jsx(Ft,{$gap:t,...a,children:n}),r.jsx(Kn,{children:e})]})}const Ft=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>xe[e]};
`,Kn=p.div`
  ${Ft}:not(:empty) + & {
    display: none;
  }
`,rt=12,$e=8;function qn(e,t,n){return{left:ot(e.x,t.w,n.w),top:ot(e.y,t.h,n.h)}}function ot(e,t,n){const a=e+rt;if(a+t<=n-$e)return a;const o=e-rt-t;return o>=$e?o:Math.max($e,n-$e-t)}const Zn="–";function gs({min:e,max:t,wrapsAt:n,className:a,...o}){const s=Qe(e),c=Qe(t);return e==null||t==null||s===null||c===null?r.jsx(Me,{className:a,children:ve}):n!==void 0&&Math.abs(c-s)>=n/2?r.jsx(Me,{className:a,children:"(precesses)"}):r.jsx(on,{of:e.unit,separate:!0,...o,children:r.jsx(Jn,{min:e,max:t,className:a})})}function Jn({min:e,max:t,className:n}){return Ve(e),Ve(t),an(e)?r.jsx(Me,{className:n,children:r.jsxs(er,{children:[r.jsx("span",{"aria-hidden":"true",children:"~"}),r.jsx(De,{children:"approximately "}),r.jsx(ce,{value:e})]})}):r.jsxs(Me,{className:n,children:[r.jsx(ce,{value:e}),r.jsx(Qn,{"aria-hidden":"true",children:Zn}),r.jsx(De,{children:" to "}),r.jsx(ce,{value:t})]})}const Me=p.span`
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
`,tr={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function vs({surface:e,pad:t,bordered:n=!1,radius:a,children:o,...s}){return r.jsx(nr,{$surface:e,$pad:t,$bordered:n,$radius:a,...s,children:o})}const nr=p.div`
  ${({$surface:e})=>e&&`background: ${tr[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${Ct[e]};`}
  ${({$pad:e})=>e&&`padding: var(${Nn[e]});`}
`,bs=u.forwardRef(function({equalWidth:t=!0,gap:n,children:a,...o},s){return r.jsx(rr,{ref:s,$equalWidth:t,$gap:n,...o,children:a})}),rr=p.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?xe[e]:"var(--gap-related)"};
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
`;function sr({tone:e,dimmed:t,identityColor:n,standalone:a,...o}){return Bn(ar,{...o,$tone:e,$dimmed:t,$identityColor:n,$standalone:a})}const xs=Object.assign(sr,zn);function ir(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const ws=u.forwardRef(function({label:t,icon:n,type:a,...o},s){return r.jsx("button",{ref:s,type:a??"button","aria-label":t,...o,children:r.jsx(Dt,{label:t,icon:n})})});function Dt({label:e,icon:t}){const n=u.useRef(null),a=u.useRef(null),[o,s]=u.useState(!0);return u.useLayoutEffect(()=>{const c=n.current,i=a.current;if(!c||!i)return;const f=()=>{s(i.scrollWidth<=c.clientWidth)};if(f(),typeof ResizeObserver>"u")return;const d=new ResizeObserver(f);return d.observe(c),d.observe(i),()=>d.disconnect()},[]),r.jsxs(lr,{ref:n,children:[r.jsx(cr,{ref:a,"aria-hidden":"true",children:e}),o?r.jsx(ur,{"aria-hidden":"true",children:e}):r.jsx(dr,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const lr=p.span`
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
`,Ie=e=>he(e),ne={contact:{"in-contact":()=>"In contact","loss-in":e=>`LOS in ${Ie(e)}`,"back-in":e=>`No contact, back in ${Ie(e)}`,none:e=>e==="unpowered"?"No contact, no electric charge aboard":"No contact"},delay:{held:e=>`${Ie(e)} signal delay`,absent:()=>"no signal path"},arrival:{expected:"Expected to arrive","likely-lost":"Likely lost"},sends:{now:()=>"Sends now",held:(e,t)=>t===void 0?`Held until ${he(e)}`:`Held until ${he(e)}, arrives ${he(t)}`}};function fr(e){const{contact:t}=e,n=t.kind==="loss-in"||t.kind==="back-in"?ne.contact[t.kind](t.seconds):t.kind==="none"?ne.contact.none(t.reason):ne.contact[t.kind](),a=e.signalDelay===void 0?ne.delay.absent():ne.delay.held(e.signalDelay),o=e.sends==="now"&&e.arrival==="expected"?ne.sends.now():e.sends==="held"&&e.heldUntilUt!==void 0?ne.sends.held(e.heldUntilUt,e.arrivesUt):ne.arrival[e.arrival];return`${n} · ${a}
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
`;function at(e){try{return JSON.stringify(e)??""}catch{return null}}const br="Not connected to the mod. Nothing can be sent",xr=4e3,st=8e3,wr=3e4;function Lt(e,t){return e.gateFor?e.gateFor(t):e.gate}function yr({handle:e,args:t,commandLabel:n,onConfirmed:a}){const[o,s]=u.useState("idle"),[c,i]=u.useState(null),[f,d]=u.useState(null),[m,w]=u.useState(!1),_=e.streamDown===!0,v=Lt(e,t),l=v?.blocked===!0,y=u.useRef(!0),N=u.useRef(0);u.useEffect(()=>(y.current=!0,()=>{y.current=!1}),[]);const g=e.founds,b=u.useRef(null),k=u.useRef(g?.length??0);u.useEffect(()=>{const M=g?.length??0,C=M>k.current;k.current=M;const I=g?.[M-1],R=b.current;if(!C||!I||R===null)return;const h=I.label!==void 0&&I.label!==""&&R.label!==void 0&&I.label!==R.label,S=I.args!==void 0&&R.args!==void 0&&JSON.stringify(I.args)!==JSON.stringify(R.args);h||S||(b.current=null,d(I),i(null),s("found"))},[g]),u.useEffect(()=>{if(o!=="armed")return;const M=setTimeout(()=>s("idle"),xr);return()=>clearTimeout(M)},[o]),u.useEffect(()=>{if(o!=="refused"&&o!=="lost"&&o!=="found")return;const M=setTimeout(()=>{s("idle"),i(null),b.current=null,d(null)},st);return()=>clearTimeout(M)},[o]),u.useEffect(()=>{if(!m)return;const M=setTimeout(()=>w(!1),st);return()=>clearTimeout(M)},[m]),u.useEffect(()=>{l||w(!1)},[l]),u.useEffect(()=>{if(o!=="pending")return;const M=setTimeout(()=>s("idle"),wr);return()=>clearTimeout(M)},[o]);const E=u.useCallback(()=>{const M=N.current+1;N.current=M,b.current=null,s("pending"),i(null);const C=(I,R)=>{!y.current||N.current!==M||(i(R),s(I))};e.send(t,n?{label:n}:void 0).then(I=>{C("idle",null),a?.(I)},I=>{const R=En(I);if(R.kind==="lost"){b.current={args:t,label:n},C("lost",null);return}if(R.kind!=="refused"){C("idle",null);return}C("refused",{errorCode:R.errorCode,reason:R.reason,command:R.command,args:R.args,label:R.label??n,breach:R.breach,detail:R.detail})})},[e,t,n,a]),{hasUnconfirmed:$,hasFailure:D}=ir(e),U=u.useCallback(M=>{if(o!=="pending"&&!_){if(l){w(!0);return}if(o==="refused"||o==="lost"||o==="found"){i(null),d(null),b.current=null,s("idle");return}if(M&&o!=="armed"){B.current=at(t),s("armed");return}E()}},[o,_,l,E,t]),B=u.useRef(null);u.useEffect(()=>{o==="armed"&&at(t)!==B.current&&s("idle")},[o,t]);const A=o==="pending"||o==="refused"||o==="lost"||o==="found"?o:l?"blocked":o;return{phase:A,isPending:A==="pending",isArmed:A==="armed",isRefused:A==="refused",isLost:A==="lost",isFound:A==="found",isBlocked:A==="blocked",isOffline:_&&A!=="pending",isShowingReason:A==="blocked"&&m,refusalText:c?dn(c):A==="blocked"&&v?fn({...v,label:v.label??n,args:v.args??t}):null,foundText:f?un(f):null,lossText:A==="lost"?cn({args:t,label:n}):null,hasUnconfirmed:$,hasFailure:D,press:U}}function ys({handle:e,args:t,commandLabel:n,label:a,confirmLabel:o,pendingLabel:s="Working...",refusedLabel:c="Refused",lostLabel:i="No reply",foundLabel:f="Found",confirmAriaLabel:d,pendingAriaLabel:m,blockedAriaLabel:w,pressed:_,variant:v="ghost",tone:l="neutral",icon:y,confirmIcon:N,onPressReady:g,size:b="md",confirmTone:k="go",onConfirmed:E,disabled:$,title:D,"aria-label":U,...B}){const{phase:A,isPending:M,isArmed:C,isRefused:I,isLost:R,isFound:h,isBlocked:S,isOffline:L,isShowingReason:P,refusalText:j,foundText:T,lossText:G,hasUnconfirmed:H,hasFailure:W,press:V}=yr({handle:e,args:t,commandLabel:n,onConfirmed:E}),X=o!==void 0;u.useEffect(()=>{if(!(!g||M||$))return g(()=>V(X)),()=>g(null)},[g,M,$,V,X]);const re=M?r.jsx(hr,{holds:a,label:s,spinnerSize:b==="sm"?10:12}):I?c:R?i:h?f:P?j:C?o:a,q=y!==void 0&&typeof re=="string",F=q?r.jsx(Dt,{label:re,icon:C?N??y:y}):re,Q=y===void 0&&typeof a=="string"&&typeof o=="string"&&!I&&!R&&!h&&!P,we=sn()&&e.railed===!0?null:I?j:R?G:h?T:null,ae=_===!0||C||I,se=$r({restTone:v==="primary"?l:"neutral",filled:ae,isRefused:I,isFound:h,isArmed:C,confirmTone:k,tone:l}),de=e.sendStatus,oe=de===void 0?D:[D,fr(de)].filter(Boolean).join(`
`),fe=L?[D,br].filter(Boolean).join(`
`):oe;return r.jsxs(r.Fragment,{children:[r.jsx(Ee,{text:T??j??(M?s:fe),children:r.jsx(kr,{type:"button",$tone:se,$variant:v,$fit:q,$size:b,$pressed:ae,$armed:C,$blocked:S,"aria-pressed":_,"aria-busy":M||void 0,"aria-disabled":S||M||L||void 0,disabled:$,"data-unconfirmed":H?"true":void 0,"data-failed":W?"true":void 0,"data-command-phase":A,"data-stream":L?"down":void 0,"data-predicted":S?void 0:pr(de),"data-gate":S?"blocked":Lt(e,t)?.undetermined?"undetermined":void 0,"aria-label":(I?j??void 0:R?G??void 0:h?T??U:S?w??j??U:M?m??s:C?d:U)??(q?re:void 0),onClick:()=>V(o!==void 0),"data-rest-label":Q?a:void 0,"data-armed-label":Q?o:void 0,...B,children:Q?r.jsx(jr,{children:F}):F})}),r.jsx(ln,{visuallyHidden:!0,children:we})]})}function $r(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const _r=Jt`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,jr=p.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,kr=p(pn)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&J`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${_r} 1s var(--ease-emphasis) infinite;
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
`;function $s({oneWaySeconds:e,delayReading:t,className:n}){const a=ee("s",e);return r.jsxs(Mr,{className:n,role:"group","aria-label":"Signal delay",children:["one-way ~",r.jsx(ce,{value:hn(a,t),...a.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const Mr=p.div`
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
`;function _s(e){const t=mn(),n=u.useId(),a=e!==null;u.useEffect(()=>{if(!(!t||!e))return t.register({id:n,...e})},[t,n,a]),u.useEffect(()=>{!t||!e||t.update(n,e)},[t,n,e])}function js({at:e,atAspect:t,narrow:n,wide:a,children:o,...s}){return r.jsx(Rr,{$query:Er(e,t),$narrow:n,$wide:a,...s,children:o})}function Er(e,t){const n=[e===void 0?void 0:`(min-width: ${e}px)`,t===void 0?void 0:`(aspect-ratio >= ${t})`].filter(a=>a!==void 0);return n.length===0?void 0:n.join(" and ")}const Rr=p.div`
  ${({$narrow:e})=>e}
  ${({$query:e,$wide:t})=>e===void 0?"":J`
          @container ${e} {
            ${t}
          }
        `}
`;function ks({slot:e,component:t,filter:n}){const a=An(e),o=n?a.filter(n):a;return o.length===0?null:r.jsx(t,{entries:o})}function Sr(e,t){return e.value!==void 0?r.jsx(ce,{value:e.value(t)??null}):e.render(t)}function Ms({columns:e,rows:t,sections:n,rowKey:a,caption:o,empty:s,rowDetail:c,className:i}){const f=n??(t?[{id:"",title:null,rows:[...t]}]:[]),d=f.reduce((l,y)=>l+y.rows.length,0),[m,w]=u.useState(null),_=nn(m),v=It(m);return r.jsxs(Tr,{className:i,children:[r.jsx(Ir,{ref:w,tabIndex:v,children:r.jsxs(Nr,{children:[r.jsx(Ar,{children:o}),r.jsx("thead",{children:r.jsx("tr",{children:e.map(l=>r.jsx(Cr,{scope:"col",$align:l.align??"start",style:{width:l.width,minWidth:l.minWidth},children:l.header},l.key))})}),d===0&&s!==void 0&&r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx(Or,{colSpan:e.length,children:s})})}),f.map(l=>r.jsxs("tbody",{children:[l.title!==null&&l.title!==void 0&&r.jsx("tr",{children:r.jsx(Pr,{scope:"rowgroup",colSpan:e.length,children:l.title})}),l.rows.map(y=>{const N=a(y),g=c?.(y),b=g!=null&&g!==!1&&g!=="";return r.jsxs(u.Fragment,{children:[r.jsx(Fr,{$hasDetail:b,children:e.map(k=>r.jsx(Dr,{as:k.rowHeader?"th":void 0,scope:k.rowHeader?"row":void 0,$align:k.align??"start",children:Sr(k,y)},k.key))}),b?r.jsx("tr",{children:r.jsx(Lr,{colSpan:e.length,children:g})}):null]},N)})]},l.id))]})}),r.jsx(Ye,{$position:"left",$visible:_.left}),r.jsx(Ye,{$position:"right",$visible:_.right})]})}const Tr=p.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Ir=p.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${be}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Nr=p.table`
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
`,Cr=p.th`
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
`,Pr=p.th`
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
`,Dr=p.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,Lr=p.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,Or=p.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`;function zr(e){const t=e.reason;switch(t){case"beyond-horizon":return e.resolvesByWaiting?"NOT YET COMPUTED":"CANNOT MODEL";case"under-physics":case"model-inapplicable":case"contested":case"insufficient-history":return"CANNOT MODEL";case"frame-unavailable":return"FRAME UNAVAILABLE";case"input-absent":return null;default:return t}}function Es({declined:e,layout:t="inline"}){return r.jsx(Ee,{text:e.note,focusable:!0,children:r.jsx(Rt,{role:"status",layout:t,children:zr(e)??"NO DATA"})})}function Rs({label:e,children:t,"aria-label":n,className:a,variant:o="popover",panelHeight:s="cap",chevron:c=!0,asButton:i=!1,buttonSize:f="md",defaultOpen:d=!1}){const[m,w]=u.useState(d),_=u.useId(),v=u.useRef(null),[l,y]=u.useState(null),N=It(l),g=o==="inline"&&c,b=typeof e=="function"?e(m):e,k={ref:v,type:"button","aria-expanded":m,"aria-controls":_,"aria-label":n,onClick:()=>w($=>!$)},E=r.jsxs(r.Fragment,{children:[b,g&&r.jsx(Gr,{$open:m,children:r.jsx(gn,{size:"var(--icon-size-control)"})})]});return r.jsxs(Br,{className:a,$variant:o,onKeyDown:$=>{$.key==="Escape"&&m&&(w(!1),v.current?.focus())},children:[i?r.jsx(Ur,{...k,variant:"ghost",size:f,$inline:o==="inline",children:E}):r.jsx(Hr,{...k,$variant:o,$align:o==="inline"&&!c?"end":"between",children:E}),m&&r.jsx(Wr,{ref:y,id:_,role:"group",tabIndex:N,$variant:o,$panelHeight:s,children:t})]})}const Br=p.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,Hr=p.button`
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
  ${ue}
`,Ur=p(Le)`
  ${({$inline:e})=>e&&J`
      align-self: flex-end;
    `}
`,Gr=p.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,Wr=p.div`
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
          ${be}
        `:""}
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function Ss({space:e,...t}){return r.jsx(Xr,{$space:e,...t})}const Xr=p.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${xe[e]} 0`:"0"};
`,Yr=160,Vr=24,Kr="...";function Ts({children:e,limit:t=Yr,subject:n,className:a}){const[o,s]=u.useState(!1),c=u.useId(),i=qr(e,t);if(i===void 0)return r.jsx(r.Fragment,{children:e});const f=o?"Show less":"Show more";return r.jsxs(Zr,{className:a,children:[r.jsx("span",{id:c,children:o?e:`${i}${Kr}`})," ",r.jsx(Jr,{type:"button","data-expandable-toggle":"","aria-controls":c,"aria-expanded":o,"aria-label":n===void 0?void 0:`${f} of ${n}`,onClick:()=>s(d=>!d),children:f})]})}function qr(e,t){if(e.length<=t+Vr)return;const n=e.lastIndexOf(" ",t);return n<=0?e.slice(0,t):e.slice(0,n)}const Zr=p.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,Jr=p(vn)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function Is(e,t){const n=t.map(s=>s==null?null:Rn(e,s.index)),a=n.length>0&&n.every(s=>s?.currency==="exact"),o=n.reduce((s,c)=>c?.currency!=="held"||c.asOfUt===null?s:s===null?c.asOfUt:Math.min(s,c.asOfUt),null);return s=>{const c=a?Sn(s):s;return o===null?c:{state:"held",value:c,asOfUt:ee("ut",o),grade:"held",reckoning:{status:"none"}}}}function Qr({anchor:e,style:t,children:n,...a}){const[o,s]=u.useState(null),[c,i]=u.useState(null),f=u.useRef(e);f.current=e;const d=u.useCallback(()=>{if(!o)return;const m=f.current,w=typeof m=="function"?m():m;if(!w)return;const _=o.getBoundingClientRect(),v=qn(w,{w:_.width,h:_.height},{w:window.innerWidth,h:window.innerHeight});i(l=>l&&l.left===v.left&&l.top===v.top?l:v)},[o]);return u.useLayoutEffect(()=>{d()}),u.useLayoutEffect(()=>{if(!o)return;const m=typeof ResizeObserver>"u"?null:new ResizeObserver(d);return m?.observe(o),window.addEventListener("resize",d),window.addEventListener("scroll",d,!0),()=>{m?.disconnect(),window.removeEventListener("resize",d),window.removeEventListener("scroll",d,!0)}},[o,d]),typeof document>"u"?null:Un.createPortal(r.jsx(eo,{ref:s,style:{...t,left:c?.left??0,top:c?.top??0,visibility:c===null?"hidden":t?.visibility},...a,children:n}),document.body)}const eo=p.div`
  position: fixed;
  z-index: var(--z-dropdown);
`,it=12,to=8,no=120;function Ns({trigger:e,"aria-label":t,children:n}){const[a,o]=u.useState(!1),s=u.useRef(null),c=u.useRef(null),i=u.useRef(null),f=u.useId(),d=u.useCallback(()=>{c.current!==null&&(clearTimeout(c.current),c.current=null)},[]),m=()=>{d(),o(!0)},w=()=>{d(),c.current=setTimeout(()=>o(!1),no)},_=u.useCallback(()=>{d(),o(!1)},[d]);u.useEffect(()=>d,[d]),u.useEffect(()=>{if(!a)return;const l=y=>{y.key==="Escape"&&(y.stopPropagation(),_())};return document.addEventListener("keydown",l,!0),()=>document.removeEventListener("keydown",l,!0)},[a,_]);const v=()=>{const l=s.current?.getBoundingClientRect();if(!l)return null;const y=i.current?.offsetHeight??0,N=l.top-y-2*it;return{x:l.left,y:N+it>=to?N:l.bottom}};return r.jsxs(r.Fragment,{children:[r.jsx(ro,{ref:s,type:"button","aria-label":t,"aria-describedby":a?f:void 0,onPointerEnter:m,onPointerLeave:w,onFocus:m,onBlur:_,children:e}),a&&r.jsx(Qr,{anchor:v,onPointerEnter:d,onPointerLeave:w,children:r.jsx(oo,{ref:i,id:f,role:"tooltip",children:n})})]})}const ro=p.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${ue}
`,oo=p.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function As({gap:e,inset:t=!1,wrap:n=!1,children:a,...o}){return r.jsx(ao,{$gap:e,$inset:t,$wrap:n,...o,children:a})}const ao=p.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?xe[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,so=4,io=80,lt=60,lo=30,ze=24,co=32,ct=56,ut=ze;function Ne(e,t,n){const{min:a,max:o,step:s}=t,c=e+n*s,i=Math.min(o,Math.max(a,c));if(!Number.isFinite(a))return i;const f=a+Math.round((i-a)/s)*s;return Math.min(o,Math.max(a,f))}function uo(e){const{value:t,min:n,max:a,step:o,orientation:s="horizontal",onChange:c,format:i,"aria-label":f,label:d=f,disabled:m=!1,width:w,height:_}=e,v=s==="vertical",l=Math.max(ze,w??(v?ut:ct)),y=Math.max(ze,_??(v?ct:ut)),N=e.mode==="rate",g=n??Number.NEGATIVE_INFINITY,b=a??Number.POSITIVE_INFINITY,k={min:g,max:b,step:o},E=u.useRef(null),$=u.useRef(t);$.current=t;const D=u.useRef(c);D.current=c;const U=(e.mode==="rate"?e.stepsPerSecond:void 0)??lo,[B,A]=u.useState(0),M=i?i(t):String(Math.round(t)),C=b>g&&Number.isFinite(b-g)?(t-g)/(b-g):.5,I=j=>{m||j!==t&&c(j)};u.useEffect(()=>{if(!N||B===0||m)return;const j=setInterval(()=>{const T=Math.max(g,Math.min(b,$.current+B*U*o*(lt/1e3)));T!==$.current&&D.current(T)},lt);return()=>clearInterval(j)},[N,B,m,o,U,g,b]);const R=j=>{if(m)return;let T=null;switch(j.key){case"ArrowRight":case"ArrowUp":T=Ne(t,k,1);break;case"ArrowLeft":case"ArrowDown":T=Ne(t,k,-1);break;case"Home":if(!Number.isFinite(g))return;T=g;break;case"End":if(!Number.isFinite(b))return;T=b;break;default:return}j.preventDefault(),I(T)},h=j=>s==="vertical"?j.clientY:j.clientX,S=j=>{m||(E.current={start:h(j),startValue:t},j.currentTarget.setPointerCapture(j.pointerId))},L=j=>{if(m||!E.current)return;const T=s==="vertical"?E.current.start-h(j):h(j)-E.current.start;if(N){const H=T/io;A(Math.max(-1,Math.min(1,H)));return}const G=T/so;I(Ne(E.current.startValue,k,G))},P=j=>{E.current&&(E.current=null,A(0),j.currentTarget.hasPointerCapture(j.pointerId)&&j.currentTarget.releasePointerCapture(j.pointerId))};return r.jsxs(fo,{children:[d!==!1&&r.jsx(po,{"aria-hidden":"true",children:d}),r.jsxs(ho,{role:"slider","aria-label":f,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":n,"aria-valuemax":a,"aria-valuetext":M,"aria-disabled":m||void 0,tabIndex:m?-1:0,$orientation:s,$disabled:m,$width:l,$height:y,$compact:(v?l:y)<co,onKeyDown:R,onPointerDown:S,onPointerMove:L,onPointerUp:P,onPointerCancel:P,children:[r.jsx(mo,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-C)*100}%)`}:{transform:`translateX(${(.5-C)*100}%)`},"aria-hidden":"true"}),r.jsx(go,{$orientation:s,"aria-hidden":"true"}),r.jsx(vo,{"aria-hidden":"true",children:M})]})]})}const fo=p.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,po=p.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,ho=p.div`
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

  ${ue}
`,mo=p.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,go=p.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,vo=p.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function Cs({lock:e}){const t=Tn(e)?bo(e):e,n=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return r.jsx(Ee,{text:n,focusable:!0,children:r.jsxs(wo,{role:"status","aria-label":n,children:[r.jsx(bn,{}),r.jsx(yo,{children:xo(t)})]})})}function bo(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...Gn(t,Cn),locks:t}}function xo(e){const t=[...new Set(e.locks.flatMap(n=>n.missing.map(a=>a.name)))];return t.length>0?t.join(", "):e.reason}const wo=p.span`
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
`,yo=p.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,dt=1.4,ft=1.7,$o="var(--icon-size-standalone)",_o=1.8,_e="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",pt="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",ht="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",mt="M7 4.5V19.5M17 4.5V19.5",ie=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,Ot={prograde:{colour:"prograde",paths:[_e,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[_e,ie(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",ie(12,11)]},radialOut:{colour:"radial",paths:[pt,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[pt,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",ie(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",ie(12,12)]},relativePlus:{colour:"target",paths:[_e,ht],dot:[12,12]},relativeMinus:{colour:"target",paths:[_e,ht,ie(12,12)]},parallelPlus:{colour:"target",paths:[mt],dot:[12,12]},parallelMinus:{colour:"target",paths:[mt,ie(12,12)]}},Ps=Object.keys(Ot);function gt({shape:e,colour:t,strokeWidth:n,dotRadius:a}){return r.jsxs("g",{fill:"none",stroke:t,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(o=>r.jsx("path",{d:o},o)),e.dot&&r.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:a,fill:t,stroke:"none"})]})}function K(e,t){const n=Ot[e],a=`var(--color-marker-${n.colour})`,o=u.forwardRef(({size:s=$o,strokeWidth:c=_o,label:i,style:f,...d},m)=>{const w={ref:m,xmlns:"http://www.w3.org/2000/svg",...typeof s=="number"?{width:s,height:s,style:f}:{style:{width:s,height:s,...f}},viewBox:"0 0 24 24","data-marker":e},_=r.jsxs(r.Fragment,{children:[r.jsx(gt,{shape:n,colour:"currentColor",strokeWidth:c+dt,dotRadius:ft+dt/2}),r.jsx(gt,{shape:n,colour:a,strokeWidth:c,dotRadius:ft})]});return i?r.jsx("svg",{...w,role:"img","aria-label":i,...d,children:_}):r.jsx("svg",{...w,"aria-hidden":"true",...d,children:_})});return o.displayName=t,o}const zt=K("prograde","ProgradeIcon"),jo=K("retrograde","RetrogradeIcon"),Bt=K("normal","NormalIcon"),ko=K("antiNormal","AntiNormalIcon"),Mo=K("radialOut","RadialOutIcon"),Ht=K("radialIn","RadialInIcon"),Eo=K("maneuver","ManeuverIcon"),Ro=K("target","TargetIcon"),So=K("antiTarget","AntiTargetIcon"),To=K("relativePlus","RelativePlusIcon"),Io=K("relativeMinus","RelativeMinusIcon"),No=K("parallelPlus","ParallelPlusIcon"),Ao=K("parallelMinus","ParallelMinusIcon"),Fs=zt,Ds=Ht,Ls=Bt,Os={prograde:zt,retrograde:jo,normal:Bt,antiNormal:ko,radialOut:Mo,radialIn:Ht,maneuver:Eo,target:Ro,antiTarget:So,relativePlus:To,relativeMinus:Io,parallelPlus:No,parallelMinus:Ao};function Co(e){if(e.frame==="scet")return{token:"SCET",spoken:"spacecraft event time",title:"Spacecraft event time: when this happens at the craft"};const{vantage:t}=e;return t===void 0?{token:"RECEIVED",spoken:"received",title:"When the telemetry showing this arrives"}:{token:`AT ${t}`,spoken:`received at ${t}`,title:`When the telemetry showing this arrives at ${t}`}}const Po=p.span`
  font-size: max(0.72em, 10px);
  opacity: 0.72;
  white-space: nowrap;
  text-transform: none;
`;function zs({value:e,context:t}){const a=Ue(typeof e=="number"?void 0:e),{shown:o,held:s,caption:c}=a,i=typeof e=="number"?e:o?.magnitude,f=Nt({...a,shown:i}),d=t&&Co(t),m=Pn(i??Number.NaN);return r.jsxs(r.Fragment,{children:[s?r.jsx(Ge,{...f,caption:c,children:m}):r.jsx("span",{"data-figure":f["data-figure"],children:m}),d&&r.jsxs(r.Fragment,{children:[" ",r.jsx(Ee,{text:d.title,focusable:!0,children:r.jsxs(Po,{children:[r.jsx("span",{"aria-hidden":"true",children:d.token}),r.jsx(De,{children:d.spoken})]})})]})]})}function Ut(e){const{year:t,day:n,hour:a,minute:o}=We(),s=Number.isFinite(e)?Math.max(0,e):0,c=Math.floor(s/t)+1,i=s%t,f=Math.floor(i/n)+1,d=i%n;return{year:c,day:f,hour:Math.floor(d/a),minute:Math.floor(d%a/o),second:Math.floor(d%o)}}const Fo={year:1,day:1,hour:0,minute:0,second:0};function Do(e){const{year:t,day:n,hour:a,minute:o}=We();return(e.year-1)*t+(e.day-1)*n+e.hour*a+e.minute*o+e.second}function je(e){return he(ee("s",e))}function Lo({value:e,onChange:t,label:n,disabled:a,steps:o}){const s=u.useId(),c=`${s}-absent`,i=e!==null&&Number.isFinite(e)?e:null,f=i===null?null:Ut(i),d=We(),m=o??[d.minute,10*d.minute,d.hour,d.day],[w,_]=u.useState(null),v=(l,y,N,g)=>r.jsxs(ke,{gap:"caption",children:[r.jsx(He,{htmlFor:`${s}-${l}`,children:y}),r.jsx(Tt,{id:`${s}-${l}`,type:"number",inputMode:"numeric","aria-label":`${n} ${y}`,"aria-describedby":f===null?c:void 0,min:N,step:1,style:{width:g},disabled:a,placeholder:f===null?ve:void 0,value:w?.key===l?w.text:f===null?"":String(f[l]),onBlur:()=>_(null),onChange:b=>{const k=b.target.value;if(_({key:l,text:k}),k.trim()==="")return;const E=Number(k);if(!Number.isFinite(E))return;const $=Math.max(N,Math.round(E));t(Do({...f??Fo,[l]:$}))}})]},l);return r.jsxs(ke,{gap:"related-dense",role:"group","aria-label":n,children:[r.jsxs(Ke,{gap:"related-dense",wrap:!0,justify:"start",children:[v("year","YEAR",1,"5rem"),v("day","DAY",1,"5rem"),v("hour","HR",0,"4rem"),v("minute","MIN",0,"4rem"),v("second","SEC",0,"4rem")]}),f===null&&r.jsx(Oe,{id:c,level:"muted",size:"sm",children:`${ve} no ${n.toLowerCase()} to show. Type one to state it.`}),m.length===0?null:r.jsxs(Ke,{gap:"related-packed",wrap:!0,justify:"start",children:[r.jsx(Oe,{level:"faint",size:"sm",children:"NUDGE"}),m.map(l=>r.jsx(Le,{variant:"ghost",size:"sm",disabled:a||i===null,"aria-label":`${n} earlier by ${je(l)}`,onClick:()=>i!==null&&t(i-l),children:`-${je(l)}`},`minus-${l}`)),m.map(l=>r.jsx(Le,{variant:"ghost",size:"sm",disabled:a||i===null,"aria-label":`${n} later by ${je(l)}`,onClick:()=>i!==null&&t(i+l),children:`+${je(l)}`},`plus-${l}`))]})]})}function Bs({panZoom:e,label:t,style:n,onMouseMove:a,children:o}){const{style:s,ref:c,...i}=e.viewportProps;return r.jsxs(Oo,{...i,ref:c,onMouseMove:a,"aria-label":t,style:{...s,...n},children:[o,r.jsx(zo,{role:"status",children:e.hint!==null&&r.jsx(Bo,{children:e.hint})})]})}const Oo=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  ${be}
`,zo=p.div`
  position: absolute;
  bottom: var(--gap-related);
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-base);
  max-width: calc(100% - 16px);
  pointer-events: none;
`,Bo=p.div`
  padding: var(--inset-control);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function Hs({filled:e,of:t,tone:n="info",label:a}){const o=`${e} of ${t}`;return r.jsx(Ho,{role:"img","aria-label":a===void 0?o:`${a}: ${o}`,"data-pips":"",children:Array.from({length:t},(s,c)=>r.jsx(Uo,{$colour:Fn[n],$filled:c<e},c))})}const Ho=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  flex: none;
`,Uo=p.span`
  width: 1em;
  height: 1em;
  border-radius: var(--radius-circle);
  border: 2px solid ${({$colour:e})=>e};
  background: ${({$colour:e,$filled:t})=>t?e:"transparent"};
`;function Us({id:e,label:t,value:n,options:a,onChange:o,hint:s}){const c=a.findIndex(i=>Wn(i.choice,n));return r.jsxs(St,{children:[r.jsx(He,{htmlFor:e,children:t}),r.jsxs(xn,{id:e,value:c===-1?"":String(c),onChange:i=>{const f=a[Number(i.target.value)];f!==void 0&&o(f.choice)},children:[c===-1&&r.jsx("option",{value:"",disabled:!0}),a.map((i,f)=>r.jsx("option",{value:f,children:i.label},`${i.choice.kind}-${i.choice.bodyIndex??"none"}`))]}),s!==void 0&&r.jsx(wn,{children:s})]})}const Go=p.span`
  display: inline-grid;
  justify-items: center;
`,Wo=p.span`
  grid-area: 1 / 1;
`,Xo=p.span`
  grid-area: 1 / 1;
  visibility: hidden;

  &::before {
    content: attr(data-word);
  }
`;function Gs({shown:e,reserve:t}){return r.jsxs(Go,{children:[[...new Set(t)].map(n=>r.jsx(Xo,{"data-word":n,"aria-hidden":"true"},n)),r.jsx(Wo,{children:e})]})}function Yo({as:e,interactive:t=!1,selected:n=!1,wrap:a=!1,nested:o=!1,type:s,children:c,...i}){return r.jsx(Ko,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:n,$wrap:a,$nested:o,...i,children:c})}const Gt=p.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,Vo="min(12ch, 100%)",Ko=p.li`
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
    min-width: ${Vo};
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

  ${be}
`:""}
  ${({$interactive:e,$selected:t})=>e&&t?`
  ${Pt("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}
`,Ws=Object.assign(Yo,{Name:Gt}),qo=65,Wt=38,Zo=72,Jo=Zo-Wt,Xt=55,Be=137.508,Qo=10,ea=1.5,ta=64,na=60,ra=241,oa=Be-Math.floor(Be),me=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function Yt(e,t){const n=Math.abs(e-t)%360;return n>180?360-n:n}const aa=me.map((e,t)=>{let n=1/0;for(let o=0;o<me.length;o++)o!==t&&(n=Math.min(n,Yt(e.hue,me[o].hue)));const a=n/2;return Math.max(0,Math.min(Qo,a-ea))}),sa=me.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:aa[t]}));function ia(e,t=me){return t.find(n=>n.aliases.some(a=>e.includes(a)))}function Vt(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function vt(e,t){return(e%t+t)%t}function la(e){const n=Vt(`light:${e}`)/4294967295;return Wt+n*Jo}function ca(e){const t=ia(e);if(!t)return;const n=t.aliases.length===1?Xt:la(e);return{hue:t.hue,lightness:n}}function ua(e){return sa.some(({centre:t,radius:n})=>Yt(e,t)<n)}function da(e){const t=Vt(e);let n=vt(t*Be,360);const a=na+(t>>>8)%ra+oa;let o=0;for(;ua(n)&&o<ta;)n=vt(n+a,360),o++;return n}function Xs(e){const t=e.trim().toLowerCase(),n=ca(t),a=n?.hue??da(t),o=n?.lightness??Xt;return`hsl(${Math.round(a)}deg ${qo}% ${Math.round(o)}%)`}function Ys({selected:e,gap:t="caption",layout:n="stack",selectedLook:a="fill",children:o,...s}){return r.jsx(fa,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:n,$look:a,...s,children:o})}const fa=p.button`
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
  gap: ${({$gap:e})=>xe[e]};
  width: 100%;
  text-align: left;
  padding: var(--inset-selectable-row);
  border-radius: ${Ct.regular};
  border: 1px solid
    ${({$selected:e,$look:t})=>e?t==="outline"?"var(--color-accent-fg)":"transparent":"var(--color-border-subtle)"};
  ${({$selected:e,$look:t})=>e?t==="outline"?"background: var(--color-surface-raised); color: inherit;":Pt("go"):"background: transparent; color: inherit;"}
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

  ${ue}
`,pa=u.forwardRef(function(t,n){return r.jsx(ha,{ref:n,type:"range",...t})}),ha=p.input`
  width: 100%;
  min-width: 0;
  margin: 0;
  background: none;
  accent-color: var(--color-accent-fg);
  cursor: pointer;

  ${ue}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function ma({label:e,children:t,detail:n,tone:a="neutral",...o}){return r.jsxs(ga,{...o,children:[r.jsx(va,{children:e}),r.jsx(ba,{$tone:a,children:t}),n!=null&&r.jsx(xa,{children:n})]})}const ga=p.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,va=p.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,ba=p.dd`
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
  color: ${({$tone:e})=>Dn[e]};
`,xa=p.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function Vs({slot:e}){const t=Ln(e);return t.length===0?null:r.jsx(r.Fragment,{children:t.map(n=>r.jsx(ma,{label:n.label,detail:n.detail,tone:n.tone??"neutral",children:r.jsx(wa,{entry:n})},n.id))})}function wa({entry:e}){if(e.value!==void 0)return r.jsx(ce,{value:e.value});if(e.text===void 0)return r.jsx(On,{});const t=yn(e.held);return t===null?r.jsx(r.Fragment,{children:e.text}):r.jsx(Ge,{kind:t.kind,caption:t.caption,children:e.text})}const ya=12,le=12,$a=12,bt=52,Y=10,Ae=4;function _a(e,t,n){const a=c=>e.map(i=>Number.parseFloat(c.mark(i).replace(/[^\d.-]/g,""))),o=a(n(Ae)),s=c=>a(c).every((i,f)=>i===o[f]);if(s(t))return t;for(let c=0;c<Ae;c++){const i=n(c);if(s(i))return i}return n(Ae)}function Ks({labelSide:e="left",value:t,min:n,max:a,width:o=92,height:s=220,fillHeight:c=!1,tickStep:i,zones:f,markers:d,groundLine:m,seaLevel:w,format:_,"aria-label":v}){const l=u.useRef(null),[y,N]=u.useState(s);u.useEffect(()=>{if(!c)return;const x=l.current;if(!x)return;const z=()=>{const Z=x.clientHeight;Z>0&&N(Z)};z();const O=new ResizeObserver(z);return O.observe(x),()=>O.disconnect()},[c]);const g=c?y:s,b=Ue(t),{shown:k,held:E,caption:$,band:D}=b,{anchor:U,tip:B}=$n($),A=k?.magnitude??Number.NaN,M=Number.isFinite(A)?k:null,C=n.magnitude,I=a.magnitude,R=I-C,h=Number.isFinite(A)?A:C,S=R>0?Math.max(C,Math.min(I,h)):C,L=M!=null,P=tt(a,{format:_}),j=M==null?ve:nt({magnitude:h,unit:M.unit},{format:P.rung}),T=x=>nt(x),G=[...(d??[]).flatMap(x=>x.label===void 0?[]:[x.bounds===void 0?`${x.label} ${T(x.value)}`:`${x.label} ${T(x.value)}, between ${T(x.bounds.lo)} and ${T(x.bounds.hi)}`]),...(f??[]).flatMap(x=>x.label===void 0?[]:[`${x.label} zone ${T(x.from.min(x.to))} to ${T(x.from.max(x.to))}`]),...m===void 0?[]:[`ground ${T(m)}`],...w===void 0?[]:[`sea level ${T(w)}`]],H=M==null||D===null?null:In(D,M.unit)??null,W=Math.max(0,g-le-$a),V=x=>{if(!(R>0))return le+W;const z=Math.max(0,Math.min(1,(x-C)/R));return le+(1-z)*W},X=x=>V(x.magnitude),te=le,re=le+W,q=e==="right",F=q?o-bt-Y:bt,Q=q?F+Y+6:F-6,Re=q?"start":"end",we=(x,z)=>{const O=X(x),Z=x.greaterThan(a)?-1:x.lessThan(n)?1:0,pe=F-4,ye=F+Y+4,Se=F+Y/2;return r.jsxs("g",{"data-level":z?"sea":"ground",children:[r.jsx("line",{x1:pe,y1:O,x2:ye,y2:O,stroke:z?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:z?1.5:2,strokeDasharray:z?"3 2":void 0}),Z!==0&&r.jsx("polygon",{"data-off-scale":"true",points:`${Se-4},${O-Z*2} ${Se+4},${O-Z*2} ${Se},${O+Z*4}`,fill:z?"var(--color-info-mark)":"var(--color-text-primary)"})]})},ae=[],se=i?.magnitude??0;if(se>0&&R>0){const x=Math.ceil(C/se),z=Math.floor(I/se+1e-9);for(let O=x;O<=z;O++)ae.push(O===0?0:O*se)}const de=_a(ae,P,x=>tt(a,{format:_,decimals:x})),oe=V(S),fe=x=>W>0?(le+W-x)/W:0,Xe=H!==null&&_n(fe(oe),[fe(X(H.lo)),fe(X(H.hi))],jn())?H:null;return r.jsxs(ja,{ref:l,...Nt(b),...U,...L?{role:"meter","aria-label":Je(v,$),...Ze($),"aria-valuenow":S,"aria-valuemin":C,"aria-valuemax":I,"aria-valuetext":G.length===0?j:`${j}; ${G.join("; ")}`}:{role:"img","aria-label":Je(`${v}: ${j}`,$),...Ze($)},style:c?{height:"100%"}:void 0,children:[r.jsxs("svg",{width:o,height:g,viewBox:`0 0 ${o} ${g}`,"aria-hidden":"true",style:c?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[r.jsx("rect",{x:F,y:te,width:Y,height:W,rx:2,fill:"var(--color-surface-raised)"}),f?.map(x=>{const z=X(x.from.max(x.to)),O=X(x.from.min(x.to)),Z=Math.max(0,O-z);return r.jsx("g",{children:r.jsx("rect",{x:F,y:z,width:Y,height:Z,fill:x.color??"var(--color-warn-mark)",opacity:.55})},`zone-${O}-${z}-${x.label??""}`)}),w!==void 0&&R>0&&we(w,!0),m!==void 0&&R>0&&we(m,!1),ae.map(x=>{const z=V(x),O=L&&Math.abs(z-Math.max(te+4,Math.min(re-4,oe)))<ya;return r.jsxs("g",{children:[r.jsx("line",{x1:q?F+Y+4:F-4,y1:z,x2:q?F+Y:F,y2:z,stroke:"var(--color-border-subtle)",strokeWidth:1}),!O&&r.jsx("text",{x:Q,y:z,textAnchor:Re,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:de.mark(x)})]},`tick-${x}`)}),d?.map(x=>{const{bounds:z}=x,O=X(x.value),Z=x.color??"var(--color-accent-fg)";return r.jsxs("g",{"data-marker":x.label,children:[r.jsx("line",{x1:F,y1:O,x2:F+Y,y2:O,stroke:Z,strokeWidth:2,strokeDasharray:"2 2"}),r.jsx("polygon",{points:q?`${F},${O} ${F-5},${O-3} ${F-5},${O+3}`:`${F+Y},${O} ${F+Y+5},${O-3} ${F+Y+5},${O+3}`,fill:"none",stroke:Z,strokeWidth:1.5}),z!==void 0&&["lo","hi"].map(pe=>{const ye=X(z[pe]);return r.jsx(qe,{end:pe,x1:F,y1:ye,x2:F+Y,y2:ye},pe)})]},`marker-${O}-${x.label??""}`)}),Xe!==null&&["lo","hi"].map(x=>{const z=X(Xe[x]);return r.jsx(qe,{end:x,x1:F,y1:z,x2:F+Y,y2:z},x)}),L&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:F-6,y1:oe,x2:F+Y+6,y2:oe,stroke:"var(--color-accent-fg)",strokeWidth:2}),r.jsxs("text",{x:q?Q+2:Q-2,y:Math.max(te+4,Math.min(re-4,oe)),textAnchor:Re,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[P.mark(h),E&&r.jsx(kn,{size:5})]})]}),!L&&r.jsx(Mn,{x:q?Q+8:Q-8,y:te+W/2,size:11,children:ve}),P.symbol!==""&&r.jsx("text",{x:F+Y/2,y:te-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:P.symbol})]}),B]})}const ja=p.div`
  display: block;
  max-width: 100%;
`,qs=p.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,ka=112;function Ma(e,t){try{return ee(e,1).in(t).magnitude}catch{return Number.NaN}}function Ea(e,t){let n=e;return t.map((a,o)=>{if(!Number.isFinite(a)||a===0)return 0;const s=o===t.length-1?n/a:Math.trunc(n/a);return n-=s*a,s})}function Zs({value:e,unit:t,onChange:n,label:a,rungs:o,range:s,rate:c,disabled:i}){const f=u.useId(),{shown:d,held:m,caption:w}=Ue(e),_=m?r.jsx(Ge,{caption:w,children:a}):a,v=s,l=d?d.magnitude:Number.NaN,[y,N]=u.useState({}),g=$=>y[$]??null,b=($,D)=>N(U=>({...U,[$]:D})),k=c?r.jsxs(ke,{gap:"related-packed",children:[r.jsx(uo,{mode:"rate","aria-label":`${a} rate`,value:l,step:c.step,stepsPerSecond:c.stepsPerSecond,disabled:i||!Number.isFinite(l),format:Ce(t)?Sa:void 0,width:Ce(t)?ka:void 0,onChange:$=>n(ee(t,$))}),r.jsx(Oe,{level:"faint",size:"sm",children:`${c.step} ${Ra(t)} / notch`})]}):null;if(Ce(t))return r.jsxs(Fe,{children:[r.jsx(wt,{"aria-hidden":"true",children:_}),r.jsxs(ke,{gap:"related-dense",children:[r.jsx(Lo,{label:m&&w!==null?`${a}, ${w}`:a,value:Number.isFinite(l)?l:null,disabled:i,steps:c?[]:void 0,onChange:$=>n(ee(t,$))}),k]})]});if(o&&o.length>0){const $=o.map(B=>Ma(String(B),t)),D=Ea(l,$),U=(B,A)=>{const M=Pe(A);if(M===void 0){b(B,{text:A,against:D[B]});return}const C=D.map(R=>Number.isFinite(R)?R:0);C[B]=M;const I=C.reduce((R,h,S)=>Number.isFinite($[S])?R+h*$[S]:R,0);b(B,{text:A,against:M}),n(ee(t,I))};return r.jsxs(Fe,{children:[r.jsx(wt,{id:`${f}-label`,children:_}),r.jsx(Aa,{role:"group","aria-labelledby":`${f}-label`,children:o.map((B,A)=>r.jsxs(Ca,{children:[r.jsx(Pa,{type:"number",disabled:i,"aria-label":`${a} ${String(B)}`,value:xt(g(A),D[A]),onChange:M=>U(A,M.target.value)}),r.jsx(yt,{"aria-hidden":"true",children:String(B)})]},String(B)))}),k]})}const E=$=>{const D=Pe($);b(0,{text:$,against:D??l}),D!==void 0&&n(ee(t,D))};return r.jsxs(Fe,{children:[r.jsx(Ia,{htmlFor:f,children:_}),r.jsxs(Na,{children:[r.jsx(qt,{id:f,type:"number",disabled:i,min:v?.min,max:v?.max,step:v?.step,value:xt(g(0),l),onChange:$=>E($.target.value)}),r.jsx(yt,{"aria-hidden":"true",children:t})]}),v?r.jsx(pa,{disabled:i,"aria-label":`${a} slider`,min:v.min,max:v.max,step:v.step??(v.max-v.min)/100,value:Number.isFinite(l)?l:v.min,onChange:$=>n(ee(t,Pe($.target.value)??v.min))}):null,k]})}function xt(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(Ta(t)):""}function Ra(e){return At(e)??e}function Ce(e){return At(e)==="s"}function Sa(e){if(!Number.isFinite(e))return"";const{day:t,hour:n,minute:a,second:o}=Ut(e),s=c=>String(c).padStart(2,"0");return`D${t} ${s(n)}:${s(a)}:${s(o)}`}function Pe(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function Ta(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const Fe=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,Kt=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Ia=p.label`
  ${Kt}
`,wt=p.span`
  ${Kt}
`,Na=p.div`
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

  ${ue}
`,yt=p.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Aa=p.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,Ca=p.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,Pa=p(qt)`
  width: 4.5em;
`,Fa=200;function $t(e={}){const t=e.quietMs??Fa;let n=null,a=Number.NEGATIVE_INFINITY,o=!0;return{wheel(s,c){return(n===null||s-a>t)&&(n=c&&o?"diagram":"page"),a=s,n},pageScrolled(){o=!1},pointerMovedInside(){o=!0},yieldToPage(){n="page"},get owner(){return n}}}const Da=16,La=400,_t=120,Oa=Math.log(1.15)/100,za=.01;function Ba(e,t,n){const a=t===1?e*Da:t===2?e*La:e,o=Math.max(-_t,Math.min(_t,a)),s=n&&Math.abs(a)<40?za:Oa;return Math.exp(-o*s)}function Ha(e,t,n={}){const{quietMs:a}=n,o=u.useRef($t({quietMs:a}));u.useEffect(()=>{o.current=$t({quietMs:a})},[a]);const[s,c]=u.useState(null);u.useEffect(()=>{e.current!==s&&c(e.current)}),u.useEffect(()=>{if(!s||!t)return;const i=l=>l instanceof Node&&s.contains(l);let f=null;const d=(l,y)=>f!==null&&(Math.abs(l-f.x)>=1||Math.abs(y-f.y)>=1),m=l=>{f={x:l.clientX,y:l.clientY},!(l.ctrlKey||l.metaKey)&&o.current.wheel(performance.now(),i(l.target))},w=l=>{const y=d(l.clientX,l.clientY);f={x:l.clientX,y:l.clientY},y&&i(l.target)&&o.current.pointerMovedInside()},_=l=>{const y=l.target;(y===document||y instanceof Node&&y.contains(s))&&o.current.pageScrolled()},v=l=>{const y=l.ctrlKey||l.metaKey;if(!y&&o.current.owner!=="diagram")return;const N=s.getBoundingClientRect(),g=Ba(l.deltaY,l.deltaMode,y);if(t(g,l.clientX-N.left,l.clientY-N.top)===!1&&!y){o.current.yieldToPage();return}l.preventDefault()};return window.addEventListener("wheel",m,{capture:!0,passive:!0}),window.addEventListener("pointermove",w,{capture:!0,passive:!0}),window.addEventListener("scroll",_,{capture:!0,passive:!0}),s.addEventListener("wheel",v,{passive:!1}),()=>{window.removeEventListener("wheel",m,{capture:!0}),window.removeEventListener("pointermove",w,{capture:!0}),window.removeEventListener("scroll",_,{capture:!0}),s.removeEventListener("wheel",v)}},[s,t])}const Ua="Arrow keys pan, + and - zoom, 0 resets",Ga=.15,jt=1.25,Wa={zoom:1,panX:0,panY:0};function Js(e={}){const{home:t=Wa,zoomAbout:n="pointer",panThreshold:a=3,enabled:o=!0}=e,[s,c]=u.useState(t),i=u.useRef({camera:s,options:e,home:t});i.current={camera:s,options:e,home:t};const f=u.useRef(null),d=e.elementRef??f,m=u.useCallback(()=>{const h=d.current?.getBoundingClientRect();return{w:h?.width??0,h:h?.height??0}},[]),w=u.useCallback(h=>{const{constrain:S}=i.current.options,L=m(),P=S&&L.w>0&&L.h>0?S(h,L):h;return i.current.camera=P,c(P),P},[m]),_=u.useCallback(h=>{w(typeof h=="function"?h(i.current.camera):h)},[w]),v=u.useCallback((h,S,L)=>{const P=i.current.camera,{minZoom:j=.1,maxZoom:T=50}=i.current.options,G=typeof j=="function"?j(P):j,H=Math.max(Math.min(G,P.zoom),Math.min(Math.max(T,P.zoom),P.zoom*h));if(H===P.zoom)return!1;const{w:W,h:V}=m();if(n==="centre")w({...P,zoom:H});else{const X=(S-W/2)/P.zoom+P.panX,te=(L-V/2)/P.zoom+P.panY;w({zoom:H,panX:X-(S-W/2)/H,panY:te-(L-V/2)/H})}return i.current.options.onManualMove?.("zoom"),!0},[w,m,n]);Ha(d,u.useMemo(()=>o?v:null,[o,v]));const l=u.useCallback(()=>{i.current.options.onManualMove?.("reset"),w(i.current.home)},[w]),y=u.useCallback(h=>{const{w:S,h:L}=m();v(h,S/2,L/2)},[m,v]),[N,g]=u.useState(null),b=u.useRef(new Map),k=u.useRef(null),E=u.useRef(null),$=u.useRef(null),D=u.useRef(!1),[U,B]=u.useState(!1),A=u.useCallback(h=>{if(i.current.options.enabled!==!1&&!(h.pointerType==="mouse"&&h.button!==0)){if(b.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),b.current.size===2){const[S,L]=[...b.current.values()];k.current=null,E.current=Math.hypot(S.x-L.x,S.y-L.y);return}D.current=!1,$.current={x:h.clientX,y:h.clientY},k.current={x:h.clientX,y:h.clientY},E.current=null}},[]),M=u.useCallback(h=>{if(!b.current.has(h.pointerId))return;if(h.pointerType==="mouse"&&h.buttons===0){b.current.delete(h.pointerId),b.current.size===0&&(k.current=null,$.current=null,E.current=null,B(!1));return}if(b.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),b.current.size>=2){const[G,H]=[...b.current.values()],W=Math.hypot(G.x-H.x,G.y-H.y),V=E.current;if(E.current=W,V===null||V===0)return;const X=d.current?.getBoundingClientRect();D.current=!0,v(W/V,(G.x+H.x)/2-(X?.left??0),(G.y+H.y)/2-(X?.top??0));return}const S=$.current,L=k.current;if(!S||!L||!D.current&&Math.hypot(h.clientX-S.x,h.clientY-S.y)<a)return;D.current||(D.current=!0,B(!0),h.currentTarget.setPointerCapture?.(h.pointerId));const P=h.clientX-L.x,j=h.clientY-L.y;k.current={x:h.clientX,y:h.clientY};const T=i.current.camera;i.current.options.onManualMove?.("pan"),w({...T,panX:T.panX-P/T.zoom,panY:T.panY-j/T.zoom})},[w,a,v]),C=u.useCallback(h=>{if(b.current.delete(h.pointerId),h.currentTarget.releasePointerCapture?.(h.pointerId),b.current.size===1){const[S]=[...b.current.values()];k.current={...S},$.current={...S},E.current=null;return}b.current.size===0&&(k.current=null,$.current=null,E.current=null,B(!1))},[]),I=u.useCallback(h=>{if(i.current.options.enabled===!1||h.target!==h.currentTarget||h.ctrlKey||h.metaKey||h.altKey)return;const S=i.current.camera,{w:L,h:P}=m(),j=(T,G)=>{const H=(T==="panX"?L:P)/S.zoom;i.current.options.onManualMove?.("pan"),w({...S,[T]:S[T]+G*H*Ga})};switch(h.key){case"ArrowLeft":j("panX",-1);break;case"ArrowRight":j("panX",1);break;case"ArrowUp":j("panY",-1);break;case"ArrowDown":j("panY",1);break;case"+":case"=":y(jt);break;case"-":case"_":y(1/jt);break;case"0":l();break;default:return}h.preventDefault()},[w,l,m,y]);return{camera:s,setCamera:_,reset:l,zoomBy:y,viewportProps:{ref:d,tabIndex:0,role:"group",onPointerDown:A,onPointerMove:M,onPointerUp:C,onPointerCancel:C,onFocus:h=>{h.target===h.currentTarget&&h.currentTarget.matches(":focus-visible")&&g(Ua)},onBlur:()=>g(null),onKeyDown:I,style:{touchAction:"none",cursor:U?"grabbing":"grab"}},didPan:()=>D.current,isDragging:U,hint:N}}const kt="(prefers-reduced-motion: reduce)";function Qs(){const[e,t]=u.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(kt).matches);return u.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const n=window.matchMedia(kt),a=()=>t(n.matches);return a(),n.addEventListener("change",a),()=>n.removeEventListener("change",a)},[]),e}const Zt=u.createContext(null);function ei({widget:e,scope:t,children:n}){const a=u.useMemo(()=>({widget:e,scope:t}),[e,t]);return r.jsx(Zt.Provider,{value:a,children:n})}function ti(e){const t=u.useContext(Zt);if(!(!t||t.widget!==e))return t.scope}function ni(e){if(e.length===0)return[];const t=[[e[0]]];for(let n=1;n<e.length;n++)Va(e[n-1],e[n])?t.push([e[n]]):t[t.length-1].push(e[n]);return t}function ri(e,t,n,a){if(e.length===0||!(t>0))return[];const o=[e[0].x];let s=o[0],c=o[0];for(let i=1;i<e.length;i++){const f=o[i-1],d=f+Ya(e[i].x-f,t);o.push(d),d<s&&(s=d),d>c&&(c=d)}return Xa(s,c,n,a,t).map(i=>e.map((f,d)=>({...f,x:o[d]+i})))}function Xa(e,t,n,a,o){if(!(o>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((n-t)/o),c=Math.floor((a-e)/o),i=[];for(let f=s;f<=c;f++)i.push(f*o+0);return i}function Ya(e,t){const n=t/2;return((e+n)%t+t)%t-n}function Va(e,t){const n=Mt(e),a=Mt(t),o=qa(n,a);if(o===0)return!1;const s=Et(Ka(n,a));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=o)return!1;const i=[0,0,e.lat+t.lat>=0?1:-1],f=Et(Za(i,s));if(f===null)return!1;const d=ge(n,a);return ge(n,f)>d&&ge(a,f)>d}function Mt({lat:e,lon:t}){const n=e*Math.PI/180,a=t*Math.PI/180,o=Math.cos(n);return[o*Math.cos(a),o*Math.sin(a),Math.sin(n)]}function ge(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Ka(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function qa(e,t){return Math.acos(Math.max(-1,Math.min(1,ge(e,t))))}function Za(e,t){const n=ge(e,t);return[e[0]-n*t[0],e[1]-n*t[1],e[2]-n*t[2]]}function Et(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{pa as $,xr as A,gs as B,xs as C,Ms as D,Ts as E,ws as F,zt as G,Ns as H,Zn as I,uo as J,Ht as K,Cs as L,Os as M,Bt as N,Mo as O,wr as P,Us as Q,st as R,Io as S,To as T,Gs as U,jo as V,Ws as W,Gt as X,br as Y,Ys as Z,$s as _,ps as a,ma as a0,Vs as a1,Fs as a2,Ks as a3,Ro as a4,qs as a5,Zs as a6,ei as a7,qn as a8,ir as a9,$t as aa,zr as ab,fr as ac,Is as ad,pr as ae,Xa as af,Xs as ag,ni as ah,yr as ai,Js as aj,Qs as ak,_s as al,Ha as am,ti as an,Do as ao,Ba as ap,ri as aq,ko as b,So as c,hs as d,ms as e,Ls as f,vs as g,bs as h,ys as i,js as j,ks as k,Es as l,Rs as m,Ss as n,Qr as o,Ds as p,hr as q,As as r,Ps as s,Eo as t,zs as u,Lo as v,Bs as w,Ao as x,No as y,Hs as z};
