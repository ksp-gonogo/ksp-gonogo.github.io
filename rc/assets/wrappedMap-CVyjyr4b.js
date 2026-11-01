import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-C0MU9AHG.js";import f,{css as J,keyframes as Jt}from"./ext-styled-components-DAuodqsN.js";import{p as Qt,e as en,c as tn,u as nn,I as Xe}from"./widgetSize-D5ZQ5Yv6.js";import{E as Rt,bG as be,n as rn,F as Et,m as Be,y as St,aU as on,bD as We,bH as an,$ as Ye,ab as le,bI as sn,ad as He,a7 as ln,b1 as cn,a$ as un,b2 as dn,b0 as fn,bJ as pn,bK as hn,bq as mn,bL as Tt,g as gn,af as ce,e as Le,Z as vn,aF as bn,ak as Ve,V as xn,l as wn,b8 as yn,ae as It,ac as At,bv as $n,bn as _n,bg as jn,bB as Ke,aB as Mn,bM as kn,bC as Ze,bm as qe,ag as Rn}from"./ModalSaveBar-CAUSjOQ-.js";import{aJ as Te,b6 as Je,ca as En,aZ as Re,aj as Sn,c5 as Tn,cH as In,b4 as Ue,l as An,cm as pe,c4 as Nt}from"./view-clock-formula-CS7y2qqd.js";import"./ksp-enum-names-DruUSVel.js";import"./logger-2_QM1wvD.js";import"./screen-BPKfwmXg.js";import{Z as xe,N as ve,_ as Ct,$ as Nn,H as Qe,w as he,J as Cn,a0 as Pn,j as Me,n as De,T as Fn,Y as Pt,d as Ln,c as Dn,h as On,z as et,G as tt}from"./contributionsRead-B3c6Dn_9.js";import{a as zn,r as Bn,b as Hn}from"./Notice-klxLP_ho.js";import{r as Un}from"./ext-react-dom-DCF8ZnaJ.js";import{l as Gn}from"./capability-lock-DLQJXh4S.js";import"./lagrange-DIrkA7UI.js";import"./use-transmissions-C61Hk1bg.js";import{r as Xn}from"./control-frame-to-read-frame-Bnsbt86e.js";function fs({items:e,onSelect:t,onDismiss:n,"aria-label":a,style:o,header:s,footer:u,emptyLabel:l="No actions",otherLabel:d="Other"}){const p=c.useRef(null),m=c.useId(),[w,_]=c.useState(0),v=Qt(e,d),i=v.flatMap(([,g])=>g),y=i.length;c.useEffect(()=>{const g=p.current;if(!g)return;if(y===0){g.focus();return}g.querySelectorAll('[role="menuitem"]')[w]?.focus()},[w,y]),c.useEffect(()=>{const g=b=>{const M=p.current;M&&b.target instanceof Node&&!M.contains(b.target)&&n()};return document.addEventListener("pointerdown",g),()=>document.removeEventListener("pointerdown",g)},[n]);const A=c.useCallback(g=>{if(g.key==="Escape"){g.stopPropagation(),n();return}if(g.key==="Tab"){n();return}if(i.length!==0)switch(g.key){case"ArrowDown":g.preventDefault(),_(b=>Math.min(b+1,i.length-1));break;case"ArrowUp":g.preventDefault(),_(b=>Math.max(b-1,0));break;case"Home":g.preventDefault(),_(0);break;case"End":g.preventDefault(),_(i.length-1);break}},[i.length,n]);return r.jsxs(Wn,{ref:p,role:y>0?"menu":void 0,"aria-label":a,onKeyDown:A,tabIndex:-1,style:o,children:[s,i.length===0?r.jsx(Rt,{layout:"fill",children:l}):v.map(([g,b],M)=>r.jsxs("div",{...v.length>1?{role:"group","aria-labelledby":`${m}-group-${M}`}:{role:"none"},children:[v.length>1?r.jsx(Yn,{id:`${m}-group-${M}`,"aria-hidden":"true",children:g}):null,b.map(R=>{const $=i.indexOf(R);return r.jsx(Vn,{type:"button",role:"menuitem","aria-label":R["aria-label"],"aria-disabled":R.disabled,$disabled:R.disabled,tabIndex:$===w?0:-1,onFocus:()=>_($),onClick:()=>{R.disabled||t(R.key)},children:R.label},R.key)})]},g)),u]})}const Wn=f.div`
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
`,Yn=f.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,Vn=f.button`
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
`;function ps({settings:e,values:t,onChange:n}){return e.length===0?null:r.jsx(r.Fragment,{children:e.flatMap(a=>a.fields.map(o=>{const u=t?.[a.namespace]?.[o.key]??o.default,l=o.label??o.key,d=`augment-setting-${a.namespace}-${o.key}`;return o.type===Te.Bool?r.jsx(rn,{children:r.jsx(en,{checked:!!u,onChange:p=>n(a.namespace,o.key,p),label:l})},`${a.namespace}.${o.key}`):r.jsxs(Et,{children:[r.jsx(Be,{htmlFor:d,children:l}),r.jsx(St,{id:d,type:o.type===Te.Number?"number":"text",value:u===void 0?"":String(u),onChange:p=>{const m=p.target.value;if(o.type!==Te.Number){n(a.namespace,o.key,m);return}if(m===""){n(a.namespace,o.key,void 0);return}const w=Number(m);Number.isFinite(w)&&n(a.namespace,o.key,w)}})]},`${a.namespace}.${o.key}`)}))})}function hs({fallback:e,gap:t="related-dense",children:n,...a}){return r.jsxs(r.Fragment,{children:[r.jsx(Ft,{$gap:t,...a,children:n}),r.jsx(Kn,{children:e})]})}const Ft=f.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>xe[e]};
`,Kn=f.div`
  ${Ft}:not(:empty) + & {
    display: none;
  }
`,nt=12,$e=8;function Zn(e,t,n){return{left:rt(e.x,t.w,n.w),top:rt(e.y,t.h,n.h)}}function rt(e,t,n){const a=e+nt;if(a+t<=n-$e)return a;const o=e-nt-t;return o>=$e?o:Math.max($e,n-$e-t)}const qn="–";function ms({min:e,max:t,wrapsAt:n,className:a,...o}){const s=Je(e),u=Je(t);return e==null||t==null||s===null||u===null?r.jsx(ke,{className:a,children:ve}):n!==void 0&&Math.abs(u-s)>=n/2?r.jsx(ke,{className:a,children:"(precesses)"}):r.jsx(on,{of:e.unit,separate:!0,...o,children:r.jsx(Jn,{min:e,max:t,className:a})})}function Jn({min:e,max:t,className:n}){return We(e),We(t),an(e)?r.jsx(ke,{className:n,children:r.jsxs(er,{children:[r.jsx("span",{"aria-hidden":"true",children:"~"}),r.jsx(Ye,{children:"approximately "}),r.jsx(le,{value:e})]})}):r.jsxs(ke,{className:n,children:[r.jsx(le,{value:e}),r.jsx(Qn,{"aria-hidden":"true",children:qn}),r.jsx(Ye,{children:" to "}),r.jsx(le,{value:t})]})}const ke=f.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,Qn=f.span`
  color: var(--color-text-faint);
`,er=f.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`,tr={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function gs({surface:e,pad:t,bordered:n=!1,radius:a,children:o,...s}){return r.jsx(nr,{$surface:e,$pad:t,$bordered:n,$radius:a,...s,children:o})}const nr=f.div`
  ${({$surface:e})=>e&&`background: ${tr[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${Ct[e]};`}
  ${({$pad:e})=>e&&`padding: var(${Nn[e]});`}
`,vs=c.forwardRef(function({equalWidth:t=!0,gap:n,children:a,...o},s){return r.jsx(rr,{ref:s,$equalWidth:t,$gap:n,...o,children:a})}),rr=f.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?xe[e]:"var(--gap-related)"};
`,or="3px",ar=f(Hn)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${Qe(e)};`:""}
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
    ${t?`border-left-color: color-mix(in srgb, ${Qe(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function sr({tone:e,dimmed:t,identityColor:n,standalone:a,...o}){return Bn(ar,{...o,$tone:e,$dimmed:t,$identityColor:n,$standalone:a})}const bs=Object.assign(sr,zn);function ir(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const xs=c.forwardRef(function({label:t,icon:n,type:a,...o},s){return r.jsx("button",{ref:s,type:a??"button","aria-label":t,...o,children:r.jsx(Lt,{label:t,icon:n})})});function Lt({label:e,icon:t}){const n=c.useRef(null),a=c.useRef(null),[o,s]=c.useState(!0);return c.useLayoutEffect(()=>{const u=n.current,l=a.current;if(!u||!l)return;const d=()=>{s(l.scrollWidth<=u.clientWidth)};if(d(),typeof ResizeObserver>"u")return;const p=new ResizeObserver(d);return p.observe(u),p.observe(l),()=>p.disconnect()},[]),r.jsxs(lr,{ref:n,children:[r.jsx(cr,{ref:a,"aria-hidden":"true",children:e}),o?r.jsx(ur,{"aria-hidden":"true",children:e}):r.jsx(dr,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const lr=f.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,cr=f.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,ur=f.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,dr=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Ie=e=>he(e),te={contact:{"in-contact":()=>"In contact","loss-in":e=>`LOS in ${Ie(e)}`,"back-in":e=>`No contact, back in ${Ie(e)}`,none:e=>e==="unpowered"?"No contact, no electric charge aboard":"No contact"},delay:{held:e=>`${Ie(e)} signal delay`,absent:()=>"no signal path"},arrival:{expected:"Expected to arrive","likely-lost":"Likely lost"},sends:{now:()=>"Sends now",held:(e,t)=>t===void 0?`Held until ${he(e)}`:`Held until ${he(e)}, arrives ${he(t)}`}};function fr(e){const{contact:t}=e,n=t.kind==="loss-in"||t.kind==="back-in"?te.contact[t.kind](t.seconds):t.kind==="none"?te.contact.none(t.reason):te.contact[t.kind](),a=e.signalDelay===void 0?te.delay.absent():te.delay.held(e.signalDelay),o=e.sends==="now"&&e.arrival==="expected"?te.sends.now():e.sends==="held"&&e.heldUntilUt!==void 0?te.sends.held(e.heldUntilUt,e.arrivesUt):te.arrival[e.arrival];return`${n} · ${a}
${o}`}function pr(e){if(e!==void 0)return e.arrival==="likely-lost"?"at-risk":e.sends==="held"?"held":void 0}function hr({holds:e,label:t,spinnerSize:n=12}){return r.jsxs(mr,{children:[r.jsx(gr,{"aria-hidden":"true",children:e}),r.jsx(vr,{children:r.jsx(tn,{size:n,"aria-label":t})})]})}const mr=f.span`
  display: inline-grid;
  & > * {
    grid-area: 1 / 1;
  }
`,gr=f.span`
  visibility: hidden;
`,vr=f.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;function ot(e){try{return JSON.stringify(e)??""}catch{return null}}const br="Not connected to the mod. Nothing can be sent",xr=4e3,at=8e3,wr=3e4;function Dt(e,t){return e.gateFor?e.gateFor(t):e.gate}function yr({handle:e,args:t,commandLabel:n,onConfirmed:a}){const[o,s]=c.useState("idle"),[u,l]=c.useState(null),[d,p]=c.useState(null),[m,w]=c.useState(!1),_=e.streamDown===!0,v=Dt(e,t),i=v?.blocked===!0,y=c.useRef(!0),A=c.useRef(0);c.useEffect(()=>(y.current=!0,()=>{y.current=!1}),[]);const g=e.founds,b=c.useRef(null),M=c.useRef(g?.length??0);c.useEffect(()=>{const k=g?.length??0,C=k>M.current;M.current=k;const I=g?.[k-1],E=b.current;if(!C||!I||E===null)return;const h=I.label!==void 0&&I.label!==""&&E.label!==void 0&&I.label!==E.label,S=I.args!==void 0&&E.args!==void 0&&JSON.stringify(I.args)!==JSON.stringify(E.args);h||S||(b.current=null,p(I),l(null),s("found"))},[g]),c.useEffect(()=>{if(o!=="armed")return;const k=setTimeout(()=>s("idle"),xr);return()=>clearTimeout(k)},[o]),c.useEffect(()=>{if(o!=="refused"&&o!=="lost"&&o!=="found")return;const k=setTimeout(()=>{s("idle"),l(null),b.current=null,p(null)},at);return()=>clearTimeout(k)},[o]),c.useEffect(()=>{if(!m)return;const k=setTimeout(()=>w(!1),at);return()=>clearTimeout(k)},[m]),c.useEffect(()=>{i||w(!1)},[i]),c.useEffect(()=>{if(o!=="pending")return;const k=setTimeout(()=>s("idle"),wr);return()=>clearTimeout(k)},[o]);const R=c.useCallback(()=>{const k=A.current+1;A.current=k,b.current=null,s("pending"),l(null);const C=(I,E)=>{!y.current||A.current!==k||(l(E),s(I))};e.send(t,n?{label:n}:void 0).then(I=>{C("idle",null),a?.(I)},I=>{const E=En(I);if(E.kind==="lost"){b.current={args:t,label:n},C("lost",null);return}if(E.kind!=="refused"){C("idle",null);return}C("refused",{errorCode:E.errorCode,reason:E.reason,command:E.command,args:E.args,label:E.label??n,breach:E.breach,detail:E.detail})})},[e,t,n,a]),{hasUnconfirmed:$,hasFailure:L}=ir(e),U=c.useCallback(k=>{if(o!=="pending"&&!_){if(i){w(!0);return}if(o==="refused"||o==="lost"||o==="found"){l(null),p(null),b.current=null,s("idle");return}if(k&&o!=="armed"){B.current=ot(t),s("armed");return}R()}},[o,_,i,R,t]),B=c.useRef(null);c.useEffect(()=>{o==="armed"&&ot(t)!==B.current&&s("idle")},[o,t]);const N=o==="pending"||o==="refused"||o==="lost"||o==="found"?o:i?"blocked":o;return{phase:N,isPending:N==="pending",isArmed:N==="armed",isRefused:N==="refused",isLost:N==="lost",isFound:N==="found",isBlocked:N==="blocked",isOffline:_&&N!=="pending",isShowingReason:N==="blocked"&&m,refusalText:u?dn(u):N==="blocked"&&v?fn({...v,label:v.label??n,args:v.args??t}):null,foundText:d?un(d):null,lossText:N==="lost"?cn({args:t,label:n}):null,hasUnconfirmed:$,hasFailure:L,press:U}}function ws({handle:e,args:t,commandLabel:n,label:a,confirmLabel:o,pendingLabel:s="Working...",refusedLabel:u="Refused",lostLabel:l="No reply",foundLabel:d="Found",confirmAriaLabel:p,pendingAriaLabel:m,blockedAriaLabel:w,pressed:_,variant:v="ghost",tone:i="neutral",icon:y,confirmIcon:A,onPressReady:g,size:b="md",confirmTone:M="go",onConfirmed:R,disabled:$,title:L,"aria-label":U,...B}){const{phase:N,isPending:k,isArmed:C,isRefused:I,isLost:E,isFound:h,isBlocked:S,isOffline:D,isShowingReason:P,refusalText:j,foundText:T,lossText:G,hasUnconfirmed:H,hasFailure:X,press:V}=yr({handle:e,args:t,commandLabel:n,onConfirmed:R}),W=o!==void 0;c.useEffect(()=>{if(!(!g||k||$))return g(()=>V(W)),()=>g(null)},[g,k,$,V,W]);const ne=k?r.jsx(hr,{holds:a,label:s,spinnerSize:b==="sm"?10:12}):I?u:E?l:h?d:P?j:C?o:a,Z=y!==void 0&&typeof ne=="string",F=Z?r.jsx(Lt,{label:ne,icon:C?A??y:y}):ne,Q=y===void 0&&typeof a=="string"&&typeof o=="string"&&!I&&!E&&!h&&!P,we=sn()&&e.railed===!0?null:I?j:E?G:h?T:null,oe=_===!0||C||I,ae=$r({restTone:v==="primary"?i:"neutral",filled:oe,isRefused:I,isFound:h,isArmed:C,confirmTone:M,tone:i}),ue=e.sendStatus,re=ue===void 0?L:[L,fr(ue)].filter(Boolean).join(`
`),de=D?[L,br].filter(Boolean).join(`
`):re;return r.jsxs(r.Fragment,{children:[r.jsx(He,{text:T??j??(k?s:de),children:r.jsx(Mr,{type:"button",$tone:ae,$variant:v,$fit:Z,$size:b,$pressed:oe,$armed:C,$blocked:S,"aria-pressed":_,"aria-busy":k||void 0,"aria-disabled":S||k||D||void 0,disabled:$,"data-unconfirmed":H?"true":void 0,"data-failed":X?"true":void 0,"data-command-phase":N,"data-stream":D?"down":void 0,"data-predicted":S?void 0:pr(ue),"data-gate":S?"blocked":Dt(e,t)?.undetermined?"undetermined":void 0,"aria-label":(I?j??void 0:E?G??void 0:h?T??U:S?w??j??U:k?m??s:C?p:U)??(Z?ne:void 0),onClick:()=>V(o!==void 0),"data-rest-label":Q?a:void 0,"data-armed-label":Q?o:void 0,...B,children:Q?r.jsx(jr,{children:F}):F})}),r.jsx(ln,{visuallyHidden:!0,children:we})]})}function $r(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const _r=Jt`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,jr=f.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,Mr=f(pn)`
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
`;function ys({oneWaySeconds:e,delayReading:t,className:n}){const a=Re("s",e);return r.jsxs(kr,{className:n,role:"group","aria-label":"Signal delay",children:["one-way ~",r.jsx(le,{value:hn(a,t),...a.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const kr=f.div`
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
`;function $s(e){const t=mn(),n=c.useId(),a=e!==null;c.useEffect(()=>{if(!(!t||!e))return t.register({id:n,...e})},[t,n,a]),c.useEffect(()=>{!t||!e||t.update(n,e)},[t,n,e])}function _s({at:e,atAspect:t,narrow:n,wide:a,children:o,...s}){return r.jsx(Er,{$query:Rr(e,t),$narrow:n,$wide:a,...s,children:o})}function Rr(e,t){const n=[e===void 0?void 0:`(min-width: ${e}px)`,t===void 0?void 0:`(aspect-ratio >= ${t})`].filter(a=>a!==void 0);return n.length===0?void 0:n.join(" and ")}const Er=f.div`
  ${({$narrow:e})=>e}
  ${({$query:e,$wide:t})=>e===void 0?"":J`
          @container ${e} {
            ${t}
          }
        `}
`;function js({slot:e,component:t,filter:n}){const a=Cn(e),o=n?a.filter(n):a;return o.length===0?null:r.jsx(t,{entries:o})}function Sr(e,t){return e.value!==void 0?r.jsx(le,{value:e.value(t)??null}):e.render(t)}function Ms({columns:e,rows:t,sections:n,rowKey:a,caption:o,empty:s,rowDetail:u,className:l}){const d=n??(t?[{id:"",title:null,rows:[...t]}]:[]),p=d.reduce((i,y)=>i+y.rows.length,0),[m,w]=c.useState(null),_=nn(m),v=Tt(m);return r.jsxs(Tr,{className:l,children:[r.jsx(Ir,{ref:w,tabIndex:v,children:r.jsxs(Ar,{children:[r.jsx(Nr,{children:o}),r.jsx("thead",{children:r.jsx("tr",{children:e.map(i=>r.jsx(Cr,{scope:"col",$align:i.align??"start",style:{width:i.width,minWidth:i.minWidth},children:i.header},i.key))})}),p===0&&s!==void 0&&r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx(Or,{colSpan:e.length,children:s})})}),d.map(i=>r.jsxs("tbody",{children:[i.title!==null&&i.title!==void 0&&r.jsx("tr",{children:r.jsx(Pr,{scope:"rowgroup",colSpan:e.length,children:i.title})}),i.rows.map(y=>{const A=a(y),g=u?.(y),b=g!=null&&g!==!1&&g!=="";return r.jsxs(c.Fragment,{children:[r.jsx(Fr,{$hasDetail:b,children:e.map(M=>r.jsx(Lr,{as:M.rowHeader?"th":void 0,scope:M.rowHeader?"row":void 0,$align:M.align??"start",children:Sr(M,y)},M.key))}),b?r.jsx("tr",{children:r.jsx(Dr,{colSpan:e.length,children:g})}):null]},A)})]},i.id))]})}),r.jsx(Xe,{$position:"left",$visible:_.left}),r.jsx(Xe,{$position:"right",$visible:_.right})]})}const Tr=f.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Ir=f.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${be}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Ar=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,Nr=f.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,Cr=f.th`
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
`,Pr=f.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,Fr=f.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,Lr=f.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,Dr=f.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,Or=f.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`;function zr(e){const t=e.reason;switch(t){case"beyond-horizon":return e.resolvesByWaiting?"NOT YET COMPUTED":"CANNOT MODEL";case"under-physics":case"model-inapplicable":case"contested":case"insufficient-history":return"CANNOT MODEL";case"frame-unavailable":return"FRAME UNAVAILABLE";case"input-absent":return null;default:return t}}function ks({declined:e,layout:t="inline"}){return r.jsx(He,{text:e.note,focusable:!0,children:r.jsx(Rt,{role:"status",layout:t,children:zr(e)??"NO DATA"})})}function Rs({label:e,children:t,"aria-label":n,className:a,variant:o="popover",panelHeight:s="cap",chevron:u=!0,asButton:l=!1,buttonSize:d="md",defaultOpen:p=!1}){const[m,w]=c.useState(p),_=c.useId(),v=c.useRef(null),[i,y]=c.useState(null),A=Tt(i),g=o==="inline"&&u,b=typeof e=="function"?e(m):e,M={ref:v,type:"button","aria-expanded":m,"aria-controls":_,"aria-label":n,onClick:()=>w($=>!$)},R=r.jsxs(r.Fragment,{children:[b,g&&r.jsx(Gr,{$open:m,children:r.jsx(gn,{size:"var(--icon-size-control)"})})]});return r.jsxs(Br,{className:a,$variant:o,onKeyDown:$=>{$.key==="Escape"&&m&&(w(!1),v.current?.focus())},children:[l?r.jsx(Ur,{...M,variant:"ghost",size:d,$inline:o==="inline",children:R}):r.jsx(Hr,{...M,$variant:o,$align:o==="inline"&&!u?"end":"between",children:R}),m&&r.jsx(Xr,{ref:y,id:_,role:"group",tabIndex:A,$variant:o,$panelHeight:s,children:t})]})}const Br=f.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,Hr=f.button`
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
  ${ce}
`,Ur=f(Le)`
  ${({$inline:e})=>e&&J`
      align-self: flex-end;
    `}
`,Gr=f.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,Xr=f.div`
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
`;function Es({space:e,...t}){return r.jsx(Wr,{$space:e,...t})}const Wr=f.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${xe[e]} 0`:"0"};
`,Yr=160,Vr=24,Kr="...";function Ss({children:e,limit:t=Yr,subject:n,className:a}){const[o,s]=c.useState(!1),u=c.useId(),l=Zr(e,t);if(l===void 0)return r.jsx(r.Fragment,{children:e});const d=o?"Show less":"Show more";return r.jsxs(qr,{className:a,children:[r.jsx("span",{id:u,children:o?e:`${l}${Kr}`})," ",r.jsx(Jr,{type:"button","data-expandable-toggle":"","aria-controls":u,"aria-expanded":o,"aria-label":n===void 0?void 0:`${d} of ${n}`,onClick:()=>s(p=>!p),children:d})]})}function Zr(e,t){if(e.length<=t+Vr)return;const n=e.lastIndexOf(" ",t);return n<=0?e.slice(0,t):e.slice(0,n)}const qr=f.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,Jr=f(vn)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function Ts(e,t){const n=t.map(s=>s==null?null:Sn(e,s.index)),a=n.length>0&&n.every(s=>s?.currency==="exact"),o=n.reduce((s,u)=>u?.currency!=="held"||u.asOfUt===null?s:s===null?u.asOfUt:Math.min(s,u.asOfUt),null);return s=>{const u=a?Tn(s):s;return o===null?u:{state:"held",value:u,asOfUt:Re("ut",o),grade:"held",reckoning:{status:"none"}}}}function Qr({anchor:e,style:t,children:n,...a}){const[o,s]=c.useState(null),[u,l]=c.useState(null),d=c.useRef(e);d.current=e;const p=c.useCallback(()=>{if(!o)return;const m=d.current,w=typeof m=="function"?m():m;if(!w)return;const _=o.getBoundingClientRect(),v=Zn(w,{w:_.width,h:_.height},{w:window.innerWidth,h:window.innerHeight});l(i=>i&&i.left===v.left&&i.top===v.top?i:v)},[o]);return c.useLayoutEffect(()=>{p()}),c.useLayoutEffect(()=>{if(!o)return;const m=typeof ResizeObserver>"u"?null:new ResizeObserver(p);return m?.observe(o),window.addEventListener("resize",p),window.addEventListener("scroll",p,!0),()=>{m?.disconnect(),window.removeEventListener("resize",p),window.removeEventListener("scroll",p,!0)}},[o,p]),typeof document>"u"?null:Un.createPortal(r.jsx(eo,{ref:s,style:{...t,left:u?.left??0,top:u?.top??0,visibility:u===null?"hidden":t?.visibility},...a,children:n}),document.body)}const eo=f.div`
  position: fixed;
  z-index: var(--z-dropdown);
`,st=12,to=8,no=120;function Is({trigger:e,"aria-label":t,children:n}){const[a,o]=c.useState(!1),s=c.useRef(null),u=c.useRef(null),l=c.useRef(null),d=c.useId(),p=c.useCallback(()=>{u.current!==null&&(clearTimeout(u.current),u.current=null)},[]),m=()=>{p(),o(!0)},w=()=>{p(),u.current=setTimeout(()=>o(!1),no)},_=c.useCallback(()=>{p(),o(!1)},[p]);c.useEffect(()=>p,[p]),c.useEffect(()=>{if(!a)return;const i=y=>{y.key==="Escape"&&(y.stopPropagation(),_())};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[a,_]);const v=()=>{const i=s.current?.getBoundingClientRect();if(!i)return null;const y=l.current?.offsetHeight??0,A=i.top-y-2*st;return{x:i.left,y:A+st>=to?A:i.bottom}};return r.jsxs(r.Fragment,{children:[r.jsx(ro,{ref:s,type:"button","aria-label":t,"aria-describedby":a?d:void 0,onPointerEnter:m,onPointerLeave:w,onFocus:m,onBlur:_,children:e}),a&&r.jsx(Qr,{anchor:v,onPointerEnter:p,onPointerLeave:w,children:r.jsx(oo,{ref:l,id:d,role:"tooltip",children:n})})]})}const ro=f.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${ce}
`,oo=f.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function As({gap:e,inset:t=!1,wrap:n=!1,children:a,...o}){return r.jsx(ao,{$gap:e,$inset:t,$wrap:n,...o,children:a})}const ao=f.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?xe[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,so=4,io=80,it=60,lo=30,Oe=24,co=32,lt=56,ct=Oe;function Ae(e,t,n){const{min:a,max:o,step:s}=t,u=e+n*s,l=Math.min(o,Math.max(a,u));if(!Number.isFinite(a))return l;const d=a+Math.round((l-a)/s)*s;return Math.min(o,Math.max(a,d))}function uo(e){const{value:t,min:n,max:a,step:o,orientation:s="horizontal",onChange:u,format:l,"aria-label":d,label:p=d,disabled:m=!1,width:w,height:_}=e,v=s==="vertical",i=Math.max(Oe,w??(v?ct:lt)),y=Math.max(Oe,_??(v?lt:ct)),A=e.mode==="rate",g=n??Number.NEGATIVE_INFINITY,b=a??Number.POSITIVE_INFINITY,M={min:g,max:b,step:o},R=c.useRef(null),$=c.useRef(t);$.current=t;const L=c.useRef(u);L.current=u;const U=(e.mode==="rate"?e.stepsPerSecond:void 0)??lo,[B,N]=c.useState(0),k=l?l(t):String(Math.round(t)),C=b>g&&Number.isFinite(b-g)?(t-g)/(b-g):.5,I=j=>{m||j!==t&&u(j)};c.useEffect(()=>{if(!A||B===0||m)return;const j=setInterval(()=>{const T=Math.max(g,Math.min(b,$.current+B*U*o*(it/1e3)));T!==$.current&&L.current(T)},it);return()=>clearInterval(j)},[A,B,m,o,U,g,b]);const E=j=>{if(m)return;let T=null;switch(j.key){case"ArrowRight":case"ArrowUp":T=Ae(t,M,1);break;case"ArrowLeft":case"ArrowDown":T=Ae(t,M,-1);break;case"Home":if(!Number.isFinite(g))return;T=g;break;case"End":if(!Number.isFinite(b))return;T=b;break;default:return}j.preventDefault(),I(T)},h=j=>s==="vertical"?j.clientY:j.clientX,S=j=>{m||(R.current={start:h(j),startValue:t},j.currentTarget.setPointerCapture(j.pointerId))},D=j=>{if(m||!R.current)return;const T=s==="vertical"?R.current.start-h(j):h(j)-R.current.start;if(A){const H=T/io;N(Math.max(-1,Math.min(1,H)));return}const G=T/so;I(Ae(R.current.startValue,M,G))},P=j=>{R.current&&(R.current=null,N(0),j.currentTarget.hasPointerCapture(j.pointerId)&&j.currentTarget.releasePointerCapture(j.pointerId))};return r.jsxs(fo,{children:[p!==!1&&r.jsx(po,{"aria-hidden":"true",children:p}),r.jsxs(ho,{role:"slider","aria-label":d,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":n,"aria-valuemax":a,"aria-valuetext":k,"aria-disabled":m||void 0,tabIndex:m?-1:0,$orientation:s,$disabled:m,$width:i,$height:y,$compact:(v?i:y)<co,onKeyDown:E,onPointerDown:S,onPointerMove:D,onPointerUp:P,onPointerCancel:P,children:[r.jsx(mo,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-C)*100}%)`}:{transform:`translateX(${(.5-C)*100}%)`},"aria-hidden":"true"}),r.jsx(go,{$orientation:s,"aria-hidden":"true"}),r.jsx(vo,{"aria-hidden":"true",children:k})]})]})}const fo=f.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,po=f.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,ho=f.div`
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
`,mo=f.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,go=f.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,vo=f.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function Ns({lock:e}){const t=In(e)?bo(e):e,n=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return r.jsx(He,{text:n,focusable:!0,children:r.jsxs(wo,{role:"status","aria-label":n,children:[r.jsx(bn,{}),r.jsx(yo,{children:xo(t)})]})})}function bo(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...Gn(t,Pn),locks:t}}function xo(e){const t=[...new Set(e.locks.flatMap(n=>n.missing.map(a=>a.name)))];return t.length>0?t.join(", "):e.reason}const wo=f.span`
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
`,yo=f.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ut=1.4,dt=1.7,$o="var(--icon-size-standalone)",_o=1.8,_e="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",ft="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",pt="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",ht="M7 4.5V19.5M17 4.5V19.5",se=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,Ot={prograde:{colour:"prograde",paths:[_e,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[_e,se(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",se(12,11)]},radialOut:{colour:"radial",paths:[ft,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[ft,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",se(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",se(12,12)]},relativePlus:{colour:"target",paths:[_e,pt],dot:[12,12]},relativeMinus:{colour:"target",paths:[_e,pt,se(12,12)]},parallelPlus:{colour:"target",paths:[ht],dot:[12,12]},parallelMinus:{colour:"target",paths:[ht,se(12,12)]}},Cs=Object.keys(Ot);function mt({shape:e,colour:t,strokeWidth:n,dotRadius:a}){return r.jsxs("g",{fill:"none",stroke:t,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(o=>r.jsx("path",{d:o},o)),e.dot&&r.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:a,fill:t,stroke:"none"})]})}function K(e,t){const n=Ot[e],a=`var(--color-marker-${n.colour})`,o=c.forwardRef(({size:s=$o,strokeWidth:u=_o,label:l,style:d,...p},m)=>{const w={ref:m,xmlns:"http://www.w3.org/2000/svg",...typeof s=="number"?{width:s,height:s,style:d}:{style:{width:s,height:s,...d}},viewBox:"0 0 24 24","data-marker":e},_=r.jsxs(r.Fragment,{children:[r.jsx(mt,{shape:n,colour:"currentColor",strokeWidth:u+ut,dotRadius:dt+ut/2}),r.jsx(mt,{shape:n,colour:a,strokeWidth:u,dotRadius:dt})]});return l?r.jsx("svg",{...w,role:"img","aria-label":l,...p,children:_}):r.jsx("svg",{...w,"aria-hidden":"true",...p,children:_})});return o.displayName=t,o}const zt=K("prograde","ProgradeIcon"),jo=K("retrograde","RetrogradeIcon"),Bt=K("normal","NormalIcon"),Mo=K("antiNormal","AntiNormalIcon"),ko=K("radialOut","RadialOutIcon"),Ht=K("radialIn","RadialInIcon"),Ro=K("maneuver","ManeuverIcon"),Eo=K("target","TargetIcon"),So=K("antiTarget","AntiTargetIcon"),To=K("relativePlus","RelativePlusIcon"),Io=K("relativeMinus","RelativeMinusIcon"),Ao=K("parallelPlus","ParallelPlusIcon"),No=K("parallelMinus","ParallelMinusIcon"),Ps=zt,Fs=Ht,Ls=Bt,Ds={prograde:zt,retrograde:jo,normal:Bt,antiNormal:Mo,radialOut:ko,radialIn:Ht,maneuver:Ro,target:Eo,antiTarget:So,relativePlus:To,relativeMinus:Io,parallelPlus:Ao,parallelMinus:No};function Ut(e){const{year:t,day:n,hour:a,minute:o}=Ue(),s=Number.isFinite(e)?Math.max(0,e):0,u=Math.floor(s/t)+1,l=s%t,d=Math.floor(l/n)+1,p=l%n;return{year:u,day:d,hour:Math.floor(p/a),minute:Math.floor(p%a/o),second:Math.floor(p%o)}}const Co={year:1,day:1,hour:0,minute:0,second:0};function Po(e){const{year:t,day:n,hour:a,minute:o}=Ue();return(e.year-1)*t+(e.day-1)*n+e.hour*a+e.minute*o+e.second}function je(e){return he(Re("s",e))}function Fo({value:e,onChange:t,label:n,disabled:a,steps:o}){const s=c.useId(),u=`${s}-absent`,l=e!==null&&Number.isFinite(e)?e:null,d=l===null?null:Ut(l),p=Ue(),m=o??[p.minute,10*p.minute,p.hour,p.day],[w,_]=c.useState(null),v=(i,y,A,g)=>r.jsxs(Me,{gap:"caption",children:[r.jsx(Be,{htmlFor:`${s}-${i}`,children:y}),r.jsx(St,{id:`${s}-${i}`,type:"number",inputMode:"numeric","aria-label":`${n} ${y}`,"aria-describedby":d===null?u:void 0,min:A,step:1,style:{width:g},disabled:a,placeholder:d===null?ve:void 0,value:w?.key===i?w.text:d===null?"":String(d[i]),onBlur:()=>_(null),onChange:b=>{const M=b.target.value;if(_({key:i,text:M}),M.trim()==="")return;const R=Number(M);if(!Number.isFinite(R))return;const $=Math.max(A,Math.round(R));t(Po({...d??Co,[i]:$}))}})]},i);return r.jsxs(Me,{gap:"related-dense",role:"group","aria-label":n,children:[r.jsxs(Ve,{gap:"related-dense",wrap:!0,justify:"start",children:[v("year","YEAR",1,"5rem"),v("day","DAY",1,"5rem"),v("hour","HR",0,"4rem"),v("minute","MIN",0,"4rem"),v("second","SEC",0,"4rem")]}),d===null&&r.jsx(De,{id:u,level:"muted",size:"sm",children:`${ve} no ${n.toLowerCase()} to show. Type one to state it.`}),m.length===0?null:r.jsxs(Ve,{gap:"related-packed",wrap:!0,justify:"start",children:[r.jsx(De,{level:"faint",size:"sm",children:"NUDGE"}),m.map(i=>r.jsx(Le,{variant:"ghost",size:"sm",disabled:a||l===null,"aria-label":`${n} earlier by ${je(i)}`,onClick:()=>l!==null&&t(l-i),children:`-${je(i)}`},`minus-${i}`)),m.map(i=>r.jsx(Le,{variant:"ghost",size:"sm",disabled:a||l===null,"aria-label":`${n} later by ${je(i)}`,onClick:()=>l!==null&&t(l+i),children:`+${je(i)}`},`plus-${i}`))]})]})}function Os({panZoom:e,label:t,style:n,onMouseMove:a,children:o}){const{style:s,ref:u,...l}=e.viewportProps;return r.jsxs(Lo,{...l,ref:u,onMouseMove:a,"aria-label":t,style:{...s,...n},children:[o,r.jsx(Do,{role:"status",children:e.hint!==null&&r.jsx(Oo,{children:e.hint})})]})}const Lo=f.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  ${be}
`,Do=f.div`
  position: absolute;
  bottom: var(--gap-related);
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-base);
  max-width: calc(100% - 16px);
  pointer-events: none;
`,Oo=f.div`
  padding: var(--inset-control);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function zs({filled:e,of:t,tone:n="info",label:a}){const o=`${e} of ${t}`;return r.jsx(zo,{role:"img","aria-label":a===void 0?o:`${a}: ${o}`,"data-pips":"",children:Array.from({length:t},(s,u)=>r.jsx(Bo,{$colour:Fn[n],$filled:u<e},u))})}const zo=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  flex: none;
`,Bo=f.span`
  width: 1em;
  height: 1em;
  border-radius: var(--radius-circle);
  border: 2px solid ${({$colour:e})=>e};
  background: ${({$colour:e,$filled:t})=>t?e:"transparent"};
`;function Bs({id:e,label:t,value:n,options:a,onChange:o,hint:s}){const u=a.findIndex(l=>Xn(l.choice,n));return r.jsxs(Et,{children:[r.jsx(Be,{htmlFor:e,children:t}),r.jsxs(xn,{id:e,value:u===-1?"":String(u),onChange:l=>{const d=a[Number(l.target.value)];d!==void 0&&o(d.choice)},children:[u===-1&&r.jsx("option",{value:"",disabled:!0}),a.map((l,d)=>r.jsx("option",{value:d,children:l.label},`${l.choice.kind}-${l.choice.bodyIndex??"none"}`))]}),s!==void 0&&r.jsx(wn,{children:s})]})}const Ho=f.span`
  display: inline-grid;
  justify-items: center;
`,Uo=f.span`
  grid-area: 1 / 1;
`,Go=f.span`
  grid-area: 1 / 1;
  visibility: hidden;

  &::before {
    content: attr(data-word);
  }
`;function Hs({shown:e,reserve:t}){return r.jsxs(Ho,{children:[[...new Set(t)].map(n=>r.jsx(Go,{"data-word":n,"aria-hidden":"true"},n)),r.jsx(Uo,{children:e})]})}function Xo({as:e,interactive:t=!1,selected:n=!1,wrap:a=!1,nested:o=!1,type:s,children:u,...l}){return r.jsx(Yo,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:n,$wrap:a,$nested:o,...l,children:u})}const Gt=f.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,Wo="min(12ch, 100%)",Yo=f.li`
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
    min-width: ${Wo};
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
`,Us=Object.assign(Xo,{Name:Gt}),Vo=65,Xt=38,Ko=72,Zo=Ko-Xt,Wt=55,ze=137.508,qo=10,Jo=1.5,Qo=64,ea=60,ta=241,na=ze-Math.floor(ze),me=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function Yt(e,t){const n=Math.abs(e-t)%360;return n>180?360-n:n}const ra=me.map((e,t)=>{let n=1/0;for(let o=0;o<me.length;o++)o!==t&&(n=Math.min(n,Yt(e.hue,me[o].hue)));const a=n/2;return Math.max(0,Math.min(qo,a-Jo))}),oa=me.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:ra[t]}));function aa(e,t=me){return t.find(n=>n.aliases.some(a=>e.includes(a)))}function Vt(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function gt(e,t){return(e%t+t)%t}function sa(e){const n=Vt(`light:${e}`)/4294967295;return Xt+n*Zo}function ia(e){const t=aa(e);if(!t)return;const n=t.aliases.length===1?Wt:sa(e);return{hue:t.hue,lightness:n}}function la(e){return oa.some(({centre:t,radius:n})=>Yt(e,t)<n)}function ca(e){const t=Vt(e);let n=gt(t*ze,360);const a=ea+(t>>>8)%ta+na;let o=0;for(;la(n)&&o<Qo;)n=gt(n+a,360),o++;return n}function Gs(e){const t=e.trim().toLowerCase(),n=ia(t),a=n?.hue??ca(t),o=n?.lightness??Wt;return`hsl(${Math.round(a)}deg ${Vo}% ${Math.round(o)}%)`}function Xs({selected:e,gap:t="caption",layout:n="stack",selectedLook:a="fill",children:o,...s}){return r.jsx(ua,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:n,$look:a,...s,children:o})}const ua=f.button`
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

  ${ce}
`,da=c.forwardRef(function(t,n){return r.jsx(fa,{ref:n,type:"range",...t})}),fa=f.input`
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
`;function pa({label:e,children:t,detail:n,tone:a="neutral",...o}){return r.jsxs(ha,{...o,children:[r.jsx(ma,{children:e}),r.jsx(ga,{$tone:a,children:t}),n!=null&&r.jsx(va,{children:n})]})}const ha=f.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,ma=f.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,ga=f.dd`
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
`,va=f.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function Ws({slot:e}){const t=Dn(e);return t.length===0?null:r.jsx(r.Fragment,{children:t.map(n=>r.jsx(pa,{label:n.label,detail:n.detail,tone:n.tone??"neutral",children:r.jsx(ba,{entry:n})},n.id))})}function ba({entry:e}){if(e.value!==void 0)return r.jsx(le,{value:e.value});if(e.text===void 0)return r.jsx(On,{});const t=yn(e.held);return t===null?r.jsx(r.Fragment,{children:e.text}):r.jsx(It,{kind:t.kind,caption:t.caption,children:e.text})}const xa=12,ie=12,wa=12,vt=52,Y=10,Ne=4;function ya(e,t,n){const a=u=>e.map(l=>Number.parseFloat(u.mark(l).replace(/[^\d.-]/g,""))),o=a(n(Ne)),s=u=>a(u).every((l,d)=>l===o[d]);if(s(t))return t;for(let u=0;u<Ne;u++){const l=n(u);if(s(l))return l}return n(Ne)}function Ys({labelSide:e="left",value:t,min:n,max:a,width:o=92,height:s=220,fillHeight:u=!1,tickStep:l,zones:d,markers:p,groundLine:m,seaLevel:w,format:_,"aria-label":v}){const i=c.useRef(null),[y,A]=c.useState(s);c.useEffect(()=>{if(!u)return;const x=i.current;if(!x)return;const z=()=>{const q=x.clientHeight;q>0&&A(q)};z();const O=new ResizeObserver(z);return O.observe(x),()=>O.disconnect()},[u]);const g=u?y:s,b=At(t),{shown:M,held:R,caption:$,band:L}=b,{anchor:U,tip:B}=$n($),N=M?.magnitude??Number.NaN,k=Number.isFinite(N)?M:null,C=n.magnitude,I=a.magnitude,E=I-C,h=Number.isFinite(N)?N:C,S=E>0?Math.max(C,Math.min(I,h)):C,D=k!=null,P=et(a,{format:_}),j=k==null?ve:tt({magnitude:h,unit:k.unit},{format:P.rung}),T=x=>tt(x),G=[...(p??[]).flatMap(x=>x.label===void 0?[]:[x.bounds===void 0?`${x.label} ${T(x.value)}`:`${x.label} ${T(x.value)}, between ${T(x.bounds.lo)} and ${T(x.bounds.hi)}`]),...(d??[]).flatMap(x=>x.label===void 0?[]:[`${x.label} zone ${T(x.from.min(x.to))} to ${T(x.from.max(x.to))}`]),...m===void 0?[]:[`ground ${T(m)}`],...w===void 0?[]:[`sea level ${T(w)}`]],H=k==null||L===null?null:An(L,k.unit)??null,X=Math.max(0,g-ie-wa),V=x=>{if(!(E>0))return ie+X;const z=Math.max(0,Math.min(1,(x-C)/E));return ie+(1-z)*X},W=x=>V(x.magnitude),ee=ie,ne=ie+X,Z=e==="right",F=Z?o-vt-Y:vt,Q=Z?F+Y+6:F-6,Ee=Z?"start":"end",we=(x,z)=>{const O=W(x),q=x.greaterThan(a)?-1:x.lessThan(n)?1:0,fe=F-4,ye=F+Y+4,Se=F+Y/2;return r.jsxs("g",{"data-level":z?"sea":"ground",children:[r.jsx("line",{x1:fe,y1:O,x2:ye,y2:O,stroke:z?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:z?1.5:2,strokeDasharray:z?"3 2":void 0}),q!==0&&r.jsx("polygon",{"data-off-scale":"true",points:`${Se-4},${O-q*2} ${Se+4},${O-q*2} ${Se},${O+q*4}`,fill:z?"var(--color-info-mark)":"var(--color-text-primary)"})]})},oe=[],ae=l?.magnitude??0;if(ae>0&&E>0){const x=Math.ceil(C/ae),z=Math.floor(I/ae+1e-9);for(let O=x;O<=z;O++)oe.push(O===0?0:O*ae)}const ue=ya(oe,P,x=>et(a,{format:_,decimals:x})),re=V(S),de=x=>X>0?(ie+X-x)/X:0,Ge=H!==null&&_n(de(re),[de(W(H.lo)),de(W(H.hi))],jn())?H:null;return r.jsxs($a,{ref:i,...Rn(b),...U,...D?{role:"meter","aria-label":qe(v,$),...Ze($),"aria-valuenow":S,"aria-valuemin":C,"aria-valuemax":I,"aria-valuetext":G.length===0?j:`${j}; ${G.join("; ")}`}:{role:"img","aria-label":qe(`${v}: ${j}`,$),...Ze($)},style:u?{height:"100%"}:void 0,children:[r.jsxs("svg",{width:o,height:g,viewBox:`0 0 ${o} ${g}`,"aria-hidden":"true",style:u?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[r.jsx("rect",{x:F,y:ee,width:Y,height:X,rx:2,fill:"var(--color-surface-raised)"}),d?.map(x=>{const z=W(x.from.max(x.to)),O=W(x.from.min(x.to)),q=Math.max(0,O-z);return r.jsx("g",{children:r.jsx("rect",{x:F,y:z,width:Y,height:q,fill:x.color??"var(--color-warn-mark)",opacity:.55})},`zone-${O}-${z}-${x.label??""}`)}),w!==void 0&&E>0&&we(w,!0),m!==void 0&&E>0&&we(m,!1),oe.map(x=>{const z=V(x),O=D&&Math.abs(z-Math.max(ee+4,Math.min(ne-4,re)))<xa;return r.jsxs("g",{children:[r.jsx("line",{x1:Z?F+Y+4:F-4,y1:z,x2:Z?F+Y:F,y2:z,stroke:"var(--color-border-subtle)",strokeWidth:1}),!O&&r.jsx("text",{x:Q,y:z,textAnchor:Ee,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:ue.mark(x)})]},`tick-${x}`)}),p?.map(x=>{const{bounds:z}=x,O=W(x.value),q=x.color??"var(--color-accent-fg)";return r.jsxs("g",{"data-marker":x.label,children:[r.jsx("line",{x1:F,y1:O,x2:F+Y,y2:O,stroke:q,strokeWidth:2,strokeDasharray:"2 2"}),r.jsx("polygon",{points:Z?`${F},${O} ${F-5},${O-3} ${F-5},${O+3}`:`${F+Y},${O} ${F+Y+5},${O-3} ${F+Y+5},${O+3}`,fill:"none",stroke:q,strokeWidth:1.5}),z!==void 0&&["lo","hi"].map(fe=>{const ye=W(z[fe]);return r.jsx(Ke,{end:fe,x1:F,y1:ye,x2:F+Y,y2:ye},fe)})]},`marker-${O}-${x.label??""}`)}),Ge!==null&&["lo","hi"].map(x=>{const z=W(Ge[x]);return r.jsx(Ke,{end:x,x1:F,y1:z,x2:F+Y,y2:z},x)}),D&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:F-6,y1:re,x2:F+Y+6,y2:re,stroke:"var(--color-accent-fg)",strokeWidth:2}),r.jsxs("text",{x:Z?Q+2:Q-2,y:Math.max(ee+4,Math.min(ne-4,re)),textAnchor:Ee,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[P.mark(h),R&&r.jsx(Mn,{size:5})]})]}),!D&&r.jsx(kn,{x:Z?Q+8:Q-8,y:ee+X/2,size:11,children:ve}),P.symbol!==""&&r.jsx("text",{x:F+Y/2,y:ee-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:P.symbol})]}),B]})}const $a=f.div`
  display: block;
  max-width: 100%;
`,Vs=f.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,_a=112;function ja(e,t){try{return Re(e,1).in(t).magnitude}catch{return Number.NaN}}function Ma(e,t){let n=e;return t.map((a,o)=>{if(!Number.isFinite(a)||a===0)return 0;const s=o===t.length-1?n/a:Math.trunc(n/a);return n-=s*a,s})}function Ks({value:e,unit:t,onChange:n,label:a,rungs:o,range:s,rate:u,disabled:l}){const d=c.useId(),{shown:p,held:m,caption:w}=At(e),_=m?r.jsx(It,{caption:w,children:a}):a,v=s,i=p?p.magnitude:Number.NaN,[y,A]=c.useState({}),g=$=>y[$]??null,b=($,L)=>A(U=>({...U,[$]:L})),M=u?r.jsxs(Me,{gap:"related-packed",children:[r.jsx(uo,{mode:"rate","aria-label":`${a} rate`,value:i,step:u.step,stepsPerSecond:u.stepsPerSecond,disabled:l||!Number.isFinite(i),format:Ce(t)?Ra:void 0,width:Ce(t)?_a:void 0,onChange:$=>n(pe(t,$))}),r.jsx(De,{level:"faint",size:"sm",children:`${u.step} ${ka(t)} / notch`})]}):null;if(Ce(t))return r.jsxs(Fe,{children:[r.jsx(xt,{"aria-hidden":"true",children:_}),r.jsxs(Me,{gap:"related-dense",children:[r.jsx(Fo,{label:m&&w!==null?`${a}, ${w}`:a,value:Number.isFinite(i)?i:null,disabled:l,steps:u?[]:void 0,onChange:$=>n(pe(t,$))}),M]})]});if(o&&o.length>0){const $=o.map(B=>ja(String(B),t)),L=Ma(i,$),U=(B,N)=>{const k=Pe(N);if(k===void 0){b(B,{text:N,against:L[B]});return}const C=L.map(E=>Number.isFinite(E)?E:0);C[B]=k;const I=C.reduce((E,h,S)=>Number.isFinite($[S])?E+h*$[S]:E,0);b(B,{text:N,against:k}),n(pe(t,I))};return r.jsxs(Fe,{children:[r.jsx(xt,{id:`${d}-label`,children:_}),r.jsx(Ia,{role:"group","aria-labelledby":`${d}-label`,children:o.map((B,N)=>r.jsxs(Aa,{children:[r.jsx(Na,{type:"number",disabled:l,"aria-label":`${a} ${String(B)}`,value:bt(g(N),L[N]),onChange:k=>U(N,k.target.value)}),r.jsx(wt,{"aria-hidden":"true",children:String(B)})]},String(B)))}),M]})}const R=$=>{const L=Pe($);b(0,{text:$,against:L??i}),L!==void 0&&n(pe(t,L))};return r.jsxs(Fe,{children:[r.jsx(Sa,{htmlFor:d,children:_}),r.jsxs(Ta,{children:[r.jsx(Zt,{id:d,type:"number",disabled:l,min:v?.min,max:v?.max,step:v?.step,value:bt(g(0),i),onChange:$=>R($.target.value)}),r.jsx(wt,{"aria-hidden":"true",children:t})]}),v?r.jsx(da,{disabled:l,"aria-label":`${a} slider`,min:v.min,max:v.max,step:v.step??(v.max-v.min)/100,value:Number.isFinite(i)?i:v.min,onChange:$=>n(pe(t,Pe($.target.value)??v.min))}):null,M]})}function bt(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(Ea(t)):""}function ka(e){return Nt(e)??e}function Ce(e){return Nt(e)==="s"}function Ra(e){if(!Number.isFinite(e))return"";const{day:t,hour:n,minute:a,second:o}=Ut(e),s=u=>String(u).padStart(2,"0");return`D${t} ${s(n)}:${s(a)}:${s(o)}`}function Pe(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function Ea(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const Fe=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,Kt=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Sa=f.label`
  ${Kt}
`,xt=f.span`
  ${Kt}
`,Ta=f.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,Zt=f.input`
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
`,wt=f.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Ia=f.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,Aa=f.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,Na=f(Zt)`
  width: 4.5em;
`,Ca=200;function yt(e={}){const t=e.quietMs??Ca;let n=null,a=Number.NEGATIVE_INFINITY,o=!0;return{wheel(s,u){return(n===null||s-a>t)&&(n=u&&o?"diagram":"page"),a=s,n},pageScrolled(){o=!1},pointerMovedInside(){o=!0},yieldToPage(){n="page"},get owner(){return n}}}const Pa=16,Fa=400,$t=120,La=Math.log(1.15)/100,Da=.01;function Oa(e,t,n){const a=t===1?e*Pa:t===2?e*Fa:e,o=Math.max(-$t,Math.min($t,a)),s=n&&Math.abs(a)<40?Da:La;return Math.exp(-o*s)}function za(e,t,n={}){const{quietMs:a}=n,o=c.useRef(yt({quietMs:a}));c.useEffect(()=>{o.current=yt({quietMs:a})},[a]);const[s,u]=c.useState(null);c.useEffect(()=>{e.current!==s&&u(e.current)}),c.useEffect(()=>{if(!s||!t)return;const l=i=>i instanceof Node&&s.contains(i);let d=null;const p=(i,y)=>d!==null&&(Math.abs(i-d.x)>=1||Math.abs(y-d.y)>=1),m=i=>{d={x:i.clientX,y:i.clientY},!(i.ctrlKey||i.metaKey)&&o.current.wheel(performance.now(),l(i.target))},w=i=>{const y=p(i.clientX,i.clientY);d={x:i.clientX,y:i.clientY},y&&l(i.target)&&o.current.pointerMovedInside()},_=i=>{const y=i.target;(y===document||y instanceof Node&&y.contains(s))&&o.current.pageScrolled()},v=i=>{const y=i.ctrlKey||i.metaKey;if(!y&&o.current.owner!=="diagram")return;const A=s.getBoundingClientRect(),g=Oa(i.deltaY,i.deltaMode,y);if(t(g,i.clientX-A.left,i.clientY-A.top)===!1&&!y){o.current.yieldToPage();return}i.preventDefault()};return window.addEventListener("wheel",m,{capture:!0,passive:!0}),window.addEventListener("pointermove",w,{capture:!0,passive:!0}),window.addEventListener("scroll",_,{capture:!0,passive:!0}),s.addEventListener("wheel",v,{passive:!1}),()=>{window.removeEventListener("wheel",m,{capture:!0}),window.removeEventListener("pointermove",w,{capture:!0}),window.removeEventListener("scroll",_,{capture:!0}),s.removeEventListener("wheel",v)}},[s,t])}const Ba="Arrow keys pan, + and - zoom, 0 resets",Ha=.15,_t=1.25,Ua={zoom:1,panX:0,panY:0};function Zs(e={}){const{home:t=Ua,zoomAbout:n="pointer",panThreshold:a=3,enabled:o=!0}=e,[s,u]=c.useState(t),l=c.useRef({camera:s,options:e,home:t});l.current={camera:s,options:e,home:t};const d=c.useRef(null),p=e.elementRef??d,m=c.useCallback(()=>{const h=p.current?.getBoundingClientRect();return{w:h?.width??0,h:h?.height??0}},[]),w=c.useCallback(h=>{const{constrain:S}=l.current.options,D=m(),P=S&&D.w>0&&D.h>0?S(h,D):h;return l.current.camera=P,u(P),P},[m]),_=c.useCallback(h=>{w(typeof h=="function"?h(l.current.camera):h)},[w]),v=c.useCallback((h,S,D)=>{const P=l.current.camera,{minZoom:j=.1,maxZoom:T=50}=l.current.options,G=typeof j=="function"?j(P):j,H=Math.max(Math.min(G,P.zoom),Math.min(Math.max(T,P.zoom),P.zoom*h));if(H===P.zoom)return!1;const{w:X,h:V}=m();if(n==="centre")w({...P,zoom:H});else{const W=(S-X/2)/P.zoom+P.panX,ee=(D-V/2)/P.zoom+P.panY;w({zoom:H,panX:W-(S-X/2)/H,panY:ee-(D-V/2)/H})}return l.current.options.onManualMove?.("zoom"),!0},[w,m,n]);za(p,c.useMemo(()=>o?v:null,[o,v]));const i=c.useCallback(()=>{l.current.options.onManualMove?.("reset"),w(l.current.home)},[w]),y=c.useCallback(h=>{const{w:S,h:D}=m();v(h,S/2,D/2)},[m,v]),[A,g]=c.useState(null),b=c.useRef(new Map),M=c.useRef(null),R=c.useRef(null),$=c.useRef(null),L=c.useRef(!1),[U,B]=c.useState(!1),N=c.useCallback(h=>{if(l.current.options.enabled!==!1&&!(h.pointerType==="mouse"&&h.button!==0)){if(b.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),b.current.size===2){const[S,D]=[...b.current.values()];M.current=null,R.current=Math.hypot(S.x-D.x,S.y-D.y);return}L.current=!1,$.current={x:h.clientX,y:h.clientY},M.current={x:h.clientX,y:h.clientY},R.current=null}},[]),k=c.useCallback(h=>{if(!b.current.has(h.pointerId))return;if(h.pointerType==="mouse"&&h.buttons===0){b.current.delete(h.pointerId),b.current.size===0&&(M.current=null,$.current=null,R.current=null,B(!1));return}if(b.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),b.current.size>=2){const[G,H]=[...b.current.values()],X=Math.hypot(G.x-H.x,G.y-H.y),V=R.current;if(R.current=X,V===null||V===0)return;const W=p.current?.getBoundingClientRect();L.current=!0,v(X/V,(G.x+H.x)/2-(W?.left??0),(G.y+H.y)/2-(W?.top??0));return}const S=$.current,D=M.current;if(!S||!D||!L.current&&Math.hypot(h.clientX-S.x,h.clientY-S.y)<a)return;L.current||(L.current=!0,B(!0),h.currentTarget.setPointerCapture?.(h.pointerId));const P=h.clientX-D.x,j=h.clientY-D.y;M.current={x:h.clientX,y:h.clientY};const T=l.current.camera;l.current.options.onManualMove?.("pan"),w({...T,panX:T.panX-P/T.zoom,panY:T.panY-j/T.zoom})},[w,a,v]),C=c.useCallback(h=>{if(b.current.delete(h.pointerId),h.currentTarget.releasePointerCapture?.(h.pointerId),b.current.size===1){const[S]=[...b.current.values()];M.current={...S},$.current={...S},R.current=null;return}b.current.size===0&&(M.current=null,$.current=null,R.current=null,B(!1))},[]),I=c.useCallback(h=>{if(l.current.options.enabled===!1||h.target!==h.currentTarget||h.ctrlKey||h.metaKey||h.altKey)return;const S=l.current.camera,{w:D,h:P}=m(),j=(T,G)=>{const H=(T==="panX"?D:P)/S.zoom;l.current.options.onManualMove?.("pan"),w({...S,[T]:S[T]+G*H*Ha})};switch(h.key){case"ArrowLeft":j("panX",-1);break;case"ArrowRight":j("panX",1);break;case"ArrowUp":j("panY",-1);break;case"ArrowDown":j("panY",1);break;case"+":case"=":y(_t);break;case"-":case"_":y(1/_t);break;case"0":i();break;default:return}h.preventDefault()},[w,i,m,y]);return{camera:s,setCamera:_,reset:i,zoomBy:y,viewportProps:{ref:p,tabIndex:0,role:"group",onPointerDown:N,onPointerMove:k,onPointerUp:C,onPointerCancel:C,onFocus:h=>{h.target===h.currentTarget&&h.currentTarget.matches(":focus-visible")&&g(Ba)},onBlur:()=>g(null),onKeyDown:I,style:{touchAction:"none",cursor:U?"grabbing":"grab"}},didPan:()=>L.current,isDragging:U,hint:A}}const jt="(prefers-reduced-motion: reduce)";function qs(){const[e,t]=c.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(jt).matches);return c.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const n=window.matchMedia(jt),a=()=>t(n.matches);return a(),n.addEventListener("change",a),()=>n.removeEventListener("change",a)},[]),e}const qt=c.createContext(null);function Js({widget:e,scope:t,children:n}){const a=c.useMemo(()=>({widget:e,scope:t}),[e,t]);return r.jsx(qt.Provider,{value:a,children:n})}function Qs(e){const t=c.useContext(qt);if(!(!t||t.widget!==e))return t.scope}function ei(e){if(e.length===0)return[];const t=[[e[0]]];for(let n=1;n<e.length;n++)Wa(e[n-1],e[n])?t.push([e[n]]):t[t.length-1].push(e[n]);return t}function ti(e,t,n,a){if(e.length===0||!(t>0))return[];const o=[e[0].x];let s=o[0],u=o[0];for(let l=1;l<e.length;l++){const d=o[l-1],p=d+Xa(e[l].x-d,t);o.push(p),p<s&&(s=p),p>u&&(u=p)}return Ga(s,u,n,a,t).map(l=>e.map((d,p)=>({...d,x:o[p]+l})))}function Ga(e,t,n,a,o){if(!(o>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((n-t)/o),u=Math.floor((a-e)/o),l=[];for(let d=s;d<=u;d++)l.push(d*o+0);return l}function Xa(e,t){const n=t/2;return((e+n)%t+t)%t-n}function Wa(e,t){const n=Mt(e),a=Mt(t),o=Va(n,a);if(o===0)return!1;const s=kt(Ya(n,a));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=o)return!1;const l=[0,0,e.lat+t.lat>=0?1:-1],d=kt(Ka(l,s));if(d===null)return!1;const p=ge(n,a);return ge(n,d)>p&&ge(a,d)>p}function Mt({lat:e,lon:t}){const n=e*Math.PI/180,a=t*Math.PI/180,o=Math.cos(n);return[o*Math.cos(a),o*Math.sin(a),Math.sin(n)]}function ge(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Ya(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Va(e,t){return Math.acos(Math.max(-1,Math.min(1,ge(e,t))))}function Ka(e,t){const n=ge(e,t);return[e[0]-n*t[0],e[1]-n*t[1],e[2]-n*t[2]]}function kt(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{pa as $,xr as A,ms as B,bs as C,Ms as D,Ss as E,xs as F,Ht as G,Is as H,qn as I,uo as J,ko as K,Ns as L,Ds as M,Bt as N,Bs as O,wr as P,Io as Q,at as R,To as S,Hs as T,jo as U,Us as V,Gt as W,br as X,Xs as Y,ys as Z,da as _,fs as a,Ws as a0,Ps as a1,Ys as a2,Eo as a3,Vs as a4,Ks as a5,Js as a6,Zn as a7,ir as a8,yt as a9,zr as aa,fr as ab,Ts as ac,pr as ad,Ga as ae,Gs as af,ei as ag,yr as ah,Zs as ai,qs as aj,$s as ak,za as al,Qs as am,Po as an,Oa as ao,ti as ap,Mo as b,So as c,ps as d,hs as e,Ls as f,gs as g,vs as h,ws as i,_s as j,js as k,ks as l,Rs as m,Es as n,Qr as o,Fs as p,hr as q,As as r,Cs as s,Ro as t,Fo as u,Os as v,No as w,Ao as x,zs as y,zt as z};
