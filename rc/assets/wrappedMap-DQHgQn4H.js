import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./ext-react-RRA14VTW.js";import h,{css as oe,keyframes as cn}from"./ext-styled-components-Br73TgY3.js";import{k as un,e as dn,c as fn,u as pn,I as et}from"./ToggleButton-B4EvMzKI.js";import{E as Nt,aa as $e,n as hn,F as Ct,m as qe,y as Ft,aO as mn,bs as tt,bw as gn,_ as Ue,ab as ge,bx as vn,ah as _e,a6 as xn,aX as bn,aV as yn,aY as wn,aW as $n,by as _n,bz as jn,bj as kn,a7 as Pt,af as Ne,bo as Lt,bg as Dt,b9 as Ot,bA as We,aA as zt,bB as Re,bf as Te,aj as Ze,g as Mn,ai as xe,e as Ge,Y as Sn,B as En,aB as Rn,aw as Je,ac as nt,U as Tn,l as In,b2 as An,bC as Nn}from"./ModalSaveBar-D4LobfAw.js";import{aH as Fe,b0 as rt,c4 as Cn,aO as ie,l as Bt,ai as Fn,b$ as Pn,cv as Ln,b7 as Qe,b_ as Ht}from"./view-clock-formula-BxHT4C0f.js";import"./ksp-enum-names-Ct5ias81.js";import"./screen-BXZWTbYS.js";import{Y as je,N as pe,Z as Ut,_ as Dn,t as ot,w as ve,J as On,d as Xe,s as zn,z as Bn,$ as Hn,a0 as Un,k as Ie,e as Ye,X as Wt,T as Wn,c as Gn,i as Xn,E as at}from"./contributionsRead-rHOkhv7C.js";import{a as Yn,r as Vn,b as Kn}from"./Notice-CrLo7d0W.js";import{r as qn}from"./ext-react-dom-CZVBhjGL.js";import{l as Zn}from"./capability-lock-wJsTiP4B.js";import"./lagrange-Bbg-NuQH.js";import"./use-transmissions-DB_m3j_g.js";import{r as Jn}from"./control-frame-to-read-frame-C3gqhF8O.js";function ys({items:e,onSelect:t,onDismiss:n,"aria-label":a,style:o,header:s,footer:l,emptyLabel:i="No actions",otherLabel:d="Other"}){const f=u.useRef(null),m=u.useId(),[x,_]=u.useState(0),v=un(e,d),c=v.flatMap(([,g])=>g),y=c.length;u.useEffect(()=>{const g=f.current;if(!g)return;if(y===0){g.focus();return}g.querySelectorAll('[role="menuitem"]')[x]?.focus()},[x,y]),u.useEffect(()=>{const g=w=>{const j=f.current;j&&w.target instanceof Node&&!j.contains(w.target)&&n()};return document.addEventListener("pointerdown",g),()=>document.removeEventListener("pointerdown",g)},[n]);const L=u.useCallback(g=>{if(g.key==="Escape"){g.stopPropagation(),n();return}if(g.key==="Tab"){n();return}if(c.length!==0)switch(g.key){case"ArrowDown":g.preventDefault(),_(w=>Math.min(w+1,c.length-1));break;case"ArrowUp":g.preventDefault(),_(w=>Math.max(w-1,0));break;case"Home":g.preventDefault(),_(0);break;case"End":g.preventDefault(),_(c.length-1);break}},[c.length,n]);return r.jsxs(Qn,{ref:f,role:y>0?"menu":void 0,"aria-label":a,onKeyDown:L,tabIndex:-1,style:o,children:[s,c.length===0?r.jsx(Nt,{layout:"fill",children:i}):v.map(([g,w],j)=>r.jsxs("div",{...v.length>1?{role:"group","aria-labelledby":`${m}-group-${j}`}:{role:"none"},children:[v.length>1?r.jsx(er,{id:`${m}-group-${j}`,"aria-hidden":"true",children:g}):null,w.map(R=>{const $=c.indexOf(R);return r.jsx(tr,{type:"button",role:"menuitem","aria-label":R["aria-label"],"aria-disabled":R.disabled,$disabled:R.disabled,tabIndex:$===x?0:-1,onFocus:()=>_($),onClick:()=>{R.disabled||t(R.key)},children:R.label},R.key)})]},g)),l]})}const Qn=h.div`
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
`,er=h.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,tr=h.button`
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
`;function ws({settings:e,values:t,onChange:n}){return e.length===0?null:r.jsx(r.Fragment,{children:e.flatMap(a=>a.fields.map(o=>{const l=t?.[a.namespace]?.[o.key]??o.default,i=o.label??o.key,d=`augment-setting-${a.namespace}-${o.key}`;return o.type===Fe.Bool?r.jsx(hn,{children:r.jsx(dn,{checked:!!l,onChange:f=>n(a.namespace,o.key,f),label:i})},`${a.namespace}.${o.key}`):r.jsxs(Ct,{children:[r.jsx(qe,{htmlFor:d,children:i}),r.jsx(Ft,{id:d,type:o.type===Fe.Number?"number":"text",value:l===void 0?"":String(l),onChange:f=>{const m=f.target.value;if(o.type!==Fe.Number){n(a.namespace,o.key,m);return}if(m===""){n(a.namespace,o.key,void 0);return}const x=Number(m);Number.isFinite(x)&&n(a.namespace,o.key,x)}})]},`${a.namespace}.${o.key}`)}))})}function $s({fallback:e,gap:t="related-dense",children:n,...a}){return r.jsxs(r.Fragment,{children:[r.jsx(Gt,{$gap:t,...a,children:n}),r.jsx(nr,{children:e})]})}const Gt=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>je[e]};
`,nr=h.div`
  ${Gt}:not(:empty) + & {
    display: none;
  }
`,st=12,Me=8;function rr(e,t,n){return{left:it(e.x,t.w,n.w),top:it(e.y,t.h,n.h)}}function it(e,t,n){const a=e+st;if(a+t<=n-Me)return a;const o=e-st-t;return o>=Me?o:Math.max(Me,n-Me-t)}const or="–";function _s({min:e,max:t,wrapsAt:n,className:a,...o}){const s=rt(e),l=rt(t);return e==null||t==null||s===null||l===null?r.jsx(Ae,{className:a,children:pe}):n!==void 0&&Math.abs(l-s)>=n/2?r.jsx(Ae,{className:a,children:"(precesses)"}):r.jsx(mn,{of:e.unit,separate:!0,...o,children:r.jsx(ar,{min:e,max:t,className:a})})}function ar({min:e,max:t,className:n}){return tt(e),tt(t),gn(e)?r.jsx(Ae,{className:n,children:r.jsxs(ir,{children:[r.jsx("span",{"aria-hidden":"true",children:"~"}),r.jsx(Ue,{children:"approximately "}),r.jsx(ge,{value:e})]})}):r.jsxs(Ae,{className:n,children:[r.jsx(ge,{value:e}),r.jsx(sr,{"aria-hidden":"true",children:or}),r.jsx(Ue,{children:" to "}),r.jsx(ge,{value:t})]})}const Ae=h.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,sr=h.span`
  color: var(--color-text-faint);
`,ir=h.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`,lr={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function js({surface:e,pad:t,bordered:n=!1,radius:a,children:o,...s}){return r.jsx(cr,{$surface:e,$pad:t,$bordered:n,$radius:a,...s,children:o})}const cr=h.div`
  ${({$surface:e})=>e&&`background: ${lr[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${Ut[e]};`}
  ${({$pad:e})=>e&&`padding: var(${Dn[e]});`}
`,ks=u.forwardRef(function({equalWidth:t=!0,gap:n,children:a,...o},s){return r.jsx(ur,{ref:s,$equalWidth:t,$gap:n,...o,children:a})}),ur=h.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?je[e]:"var(--gap-related)"};
`,dr="3px",fr=h(Kn)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${ot(e)};`:""}
  ${({$identityColor:e})=>e?`
    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: var(--size-mark);
      height: ${dr};
      background: ${e};
      border-radius: var(--radius-regular) var(--radius-regular) 0 0;
    }
  `:""}
  ${({$dimmed:e,$tone:t})=>e?`
    --color-text-primary: var(--color-text-muted);
    color: var(--color-text-muted);
    ${t?`border-left-color: color-mix(in srgb, ${ot(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function pr({tone:e,dimmed:t,identityColor:n,standalone:a,...o}){return Vn(fr,{...o,$tone:e,$dimmed:t,$identityColor:n,$standalone:a})}const Ms=Object.assign(pr,Yn);function hr(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const Ss=u.forwardRef(function({label:t,icon:n,type:a,...o},s){return r.jsx("button",{ref:s,type:a??"button","aria-label":t,...o,children:r.jsx(Xt,{label:t,icon:n})})});function Xt({label:e,icon:t}){const n=u.useRef(null),a=u.useRef(null),[o,s]=u.useState(!0);return u.useLayoutEffect(()=>{const l=n.current,i=a.current;if(!l||!i)return;const d=()=>{s(i.scrollWidth<=l.clientWidth)};if(d(),typeof ResizeObserver>"u")return;const f=new ResizeObserver(d);return f.observe(l),f.observe(i),()=>f.disconnect()},[]),r.jsxs(mr,{ref:n,children:[r.jsx(gr,{ref:a,"aria-hidden":"true",children:e}),o?r.jsx(vr,{"aria-hidden":"true",children:e}):r.jsx(xr,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const mr=h.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,gr=h.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,vr=h.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,xr=h.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Pe=e=>ve(e),fe={contact:{"in-contact":()=>"In contact","loss-in":e=>`LOS in ${Pe(e)}`,"back-in":e=>`No contact, back in ${Pe(e)}`,none:()=>"No contact"},delay:{held:e=>`${Pe(e)} signal delay`,absent:()=>"no signal path"},arrival:{expected:"Expected to arrive","likely-lost":"Likely lost"},sends:{now:()=>"Sends now",held:(e,t)=>t===void 0?`Held until ${ve(e)}`:`Held until ${ve(e)}, arrives ${ve(t)}`}};function br(e){const{contact:t}=e,n=t.kind==="loss-in"||t.kind==="back-in"?fe.contact[t.kind](t.seconds):fe.contact[t.kind](),a=e.signalDelay===void 0?fe.delay.absent():fe.delay.held(e.signalDelay),o=e.sends==="now"&&e.arrival==="expected"?fe.sends.now():e.sends==="held"&&e.heldUntilUt!==void 0?fe.sends.held(e.heldUntilUt,e.arrivesUt):fe.arrival[e.arrival];return`${n} · ${a}
${o}`}function yr(e){if(e!==void 0)return e.arrival==="likely-lost"?"at-risk":e.sends==="held"?"held":void 0}function wr({holds:e,label:t,spinnerSize:n=12}){return r.jsxs($r,{children:[r.jsx(_r,{"aria-hidden":"true",children:e}),r.jsx(jr,{children:r.jsx(fn,{size:n,"aria-label":t})})]})}const $r=h.span`
  display: inline-grid;
  & > * {
    grid-area: 1 / 1;
  }
`,_r=h.span`
  visibility: hidden;
`,jr=h.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;function lt(e){try{return JSON.stringify(e)??""}catch{return null}}const kr=4e3,ct=8e3,Mr=3e4;function Yt(e,t){return e.gateFor?e.gateFor(t):e.gate}function Sr({handle:e,args:t,commandLabel:n,onConfirmed:a}){const[o,s]=u.useState("idle"),[l,i]=u.useState(null),[d,f]=u.useState(null),[m,x]=u.useState(!1),_=Yt(e,t),v=_?.blocked===!0,c=u.useRef(!0),y=u.useRef(0);u.useEffect(()=>(c.current=!0,()=>{c.current=!1}),[]);const L=e.founds,g=u.useRef(null),w=u.useRef(L?.length??0);u.useEffect(()=>{const S=L?.length??0,P=S>w.current;w.current=S;const E=L?.[S-1],A=g.current;if(!P||!E||A===null)return;const U=E.label!==void 0&&E.label!==""&&A.label!==void 0&&E.label!==A.label,p=E.args!==void 0&&A.args!==void 0&&JSON.stringify(E.args)!==JSON.stringify(A.args);U||p||(g.current=null,f(E),i(null),s("found"))},[L]),u.useEffect(()=>{if(o!=="armed")return;const S=setTimeout(()=>s("idle"),kr);return()=>clearTimeout(S)},[o]),u.useEffect(()=>{if(o!=="refused"&&o!=="lost"&&o!=="found")return;const S=setTimeout(()=>{s("idle"),i(null),g.current=null,f(null)},ct);return()=>clearTimeout(S)},[o]),u.useEffect(()=>{if(!m)return;const S=setTimeout(()=>x(!1),ct);return()=>clearTimeout(S)},[m]),u.useEffect(()=>{v||x(!1)},[v]),u.useEffect(()=>{if(o!=="pending")return;const S=setTimeout(()=>s("idle"),Mr);return()=>clearTimeout(S)},[o]);const j=u.useCallback(()=>{const S=y.current+1;y.current=S,g.current=null,s("pending"),i(null);const P=(E,A)=>{!c.current||y.current!==S||(i(A),s(E))};e.send(t,n?{label:n}:void 0).then(E=>{P("idle",null),a?.(E)},E=>{const A=Cn(E);if(A.kind==="lost"){g.current={args:t,label:n},P("lost",null);return}if(A.kind!=="refused"){P("idle",null);return}P("refused",{errorCode:A.errorCode,reason:A.reason,command:A.command,args:A.args,label:A.label??n,breach:A.breach,detail:A.detail})})},[e,t,n,a]),{hasUnconfirmed:R,hasFailure:$}=hr(e),z=u.useCallback(S=>{if(o!=="pending"){if(v){x(!0);return}if(o==="refused"||o==="lost"||o==="found"){i(null),f(null),g.current=null,s("idle");return}if(S&&o!=="armed"){V.current=lt(t),s("armed");return}j()}},[o,v,j,t]),V=u.useRef(null);u.useEffect(()=>{o==="armed"&&lt(t)!==V.current&&s("idle")},[o,t]);const I=o==="pending"||o==="refused"||o==="lost"||o==="found"?o:v?"blocked":o;return{phase:I,isPending:I==="pending",isArmed:I==="armed",isRefused:I==="refused",isLost:I==="lost",isFound:I==="found",isBlocked:I==="blocked",isShowingReason:I==="blocked"&&m,refusalText:l?wn(l):I==="blocked"&&_?$n({..._,label:_.label??n,args:_.args??t}):null,foundText:d?yn(d):null,lossText:I==="lost"?bn({args:t,label:n}):null,hasUnconfirmed:R,hasFailure:$,press:z}}function Es({handle:e,args:t,commandLabel:n,label:a,confirmLabel:o,pendingLabel:s="Working...",refusedLabel:l="Refused",lostLabel:i="No reply",foundLabel:d="Found",confirmAriaLabel:f,pendingAriaLabel:m,blockedAriaLabel:x,pressed:_,variant:v="ghost",tone:c="neutral",icon:y,confirmIcon:L,onPressReady:g,size:w="md",confirmTone:j="go",onConfirmed:R,disabled:$,title:z,"aria-label":V,...I}){const{phase:S,isPending:P,isArmed:E,isRefused:A,isLost:U,isFound:p,isBlocked:T,isShowingReason:O,refusalText:F,foundText:k,lossText:M,hasUnconfirmed:B,hasFailure:K,press:W}=Sr({handle:e,args:t,commandLabel:n,onConfirmed:R}),G=o!==void 0;u.useEffect(()=>{if(!(!g||P||$))return g(()=>W(G)),()=>g(null)},[g,P,$,W,G]);const X=P?r.jsx(wr,{holds:a,label:s,spinnerSize:w==="sm"?10:12}):A?l:U?i:p?d:O?F:E?o:a,re=y!==void 0&&typeof X=="string",q=re?r.jsx(Xt,{label:X,icon:E?L??y:y}):X,C=y===void 0&&typeof a=="string"&&typeof o=="string"&&!A&&!U&&!p&&!O,de=vn()&&e.railed===!0?null:A?F:U?M:p?k:null,le=_===!0||E||A,ce=Er({restTone:v==="primary"?c:"neutral",filled:le,isRefused:A,isFound:p,isArmed:E,confirmTone:j,tone:c}),N=e.sendStatus,J=N===void 0?z:[z,br(N)].filter(Boolean).join(`
`);return r.jsxs(r.Fragment,{children:[r.jsx(_e,{text:k??F??(P?s:J),children:r.jsx(Ir,{type:"button",$tone:ce,$variant:v,$fit:re,$size:w,$pressed:le,$armed:E,$blocked:T,"aria-pressed":_,"aria-busy":P||void 0,"aria-disabled":T||P||void 0,disabled:$,"data-unconfirmed":B?"true":void 0,"data-failed":K?"true":void 0,"data-command-phase":S,"data-predicted":T?void 0:yr(N),"data-gate":T?"blocked":Yt(e,t)?.undetermined?"undetermined":void 0,"aria-label":(A?F??void 0:U?M??void 0:p?k??V:T?x??F??V:P?m??s:E?f:V)??(re?X:void 0),onClick:()=>W(o!==void 0),"data-rest-label":C?a:void 0,"data-armed-label":C?o:void 0,...I,children:C?r.jsx(Tr,{children:q}):q})}),r.jsx(xn,{visuallyHidden:!0,children:de})]})}function Er(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const Rr=cn`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,Tr=h.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,Ir=h(_n)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&oe`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Rr} 1s var(--ease-emphasis) infinite;
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

  /* In flight, not unavailable: full strength with a spinner. */
  &[aria-busy="true"] {
    opacity: 1;
    cursor: progress;
  }
`;function Rs({oneWaySeconds:e,delayReading:t,className:n}){const a=ie("s",e);return r.jsxs(Ar,{className:n,role:"group","aria-label":"Signal delay",children:["one-way ~",r.jsx(ge,{value:jn(a,t),...a.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const Ar=h.div`
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
`;function Ts(e){const t=kn(),n=u.useId(),a=e!==null;u.useEffect(()=>{if(!(!t||!e))return t.register({id:n,...e})},[t,n,a]),u.useEffect(()=>{!t||!e||t.update(n,e)},[t,n,e])}function Is({at:e,narrow:t,wide:n,children:a,...o}){return r.jsx(Nr,{$at:e,$narrow:t,$wide:n,...o,children:a})}const Nr=h.div`
  ${({$narrow:e})=>e}
  @container (min-width: ${({$at:e})=>e}px) {
    ${({$wide:e})=>e}
  }
`;function As({slot:e,component:t,filter:n}){const a=On(e),o=n?a.filter(n):a;return o.length===0?null:r.jsx(t,{entries:o})}function Cr(e,t){return e.value!==void 0?r.jsx(ge,{value:e.value(t)??null}):e.render(t)}function Ns({columns:e,rows:t,sections:n,rowKey:a,caption:o,empty:s,rowDetail:l,className:i}){const d=n??(t?[{id:"",title:null,rows:[...t]}]:[]),f=d.reduce((c,y)=>c+y.rows.length,0),[m,x]=u.useState(null),_=pn(m),v=Pt(m);return r.jsxs(Fr,{className:i,children:[r.jsx(Pr,{ref:x,tabIndex:v,children:r.jsxs(Lr,{children:[r.jsx(Dr,{children:o}),r.jsx("thead",{children:r.jsx("tr",{children:e.map(c=>r.jsx(Or,{scope:"col",$align:c.align??"start",style:{width:c.width,minWidth:c.minWidth},children:c.header},c.key))})}),f===0&&s!==void 0&&r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx(Wr,{colSpan:e.length,children:s})})}),d.map(c=>r.jsxs("tbody",{children:[c.title!==null&&c.title!==void 0&&r.jsx("tr",{children:r.jsx(zr,{scope:"rowgroup",colSpan:e.length,children:c.title})}),c.rows.map(y=>{const L=a(y),g=l?.(y),w=g!=null&&g!==!1&&g!=="";return r.jsxs(u.Fragment,{children:[r.jsx(Br,{$hasDetail:w,children:e.map(j=>r.jsx(Hr,{as:j.rowHeader?"th":void 0,scope:j.rowHeader?"row":void 0,$align:j.align??"start",children:Cr(j,y)},j.key))}),w?r.jsx("tr",{children:r.jsx(Ur,{colSpan:e.length,children:g})}):null]},L)})]},c.id))]})}),r.jsx(et,{$position:"left",$visible:_.left}),r.jsx(et,{$position:"right",$visible:_.right})]})}const Fr=h.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Pr=h.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${$e}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Lr=h.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,Dr=h.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,Or=h.th`
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
`,zr=h.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,Br=h.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,Hr=h.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,Ur=h.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,Wr=h.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`;function Gr(e){const t=e.reason;switch(t){case"beyond-horizon":return e.resolvesByWaiting?"NOT YET COMPUTED":"CANNOT MODEL";case"under-physics":case"model-inapplicable":case"contested":case"insufficient-history":return"CANNOT MODEL";case"frame-unavailable":return"FRAME UNAVAILABLE";case"input-absent":return null;default:return t}}function Cs({declined:e,layout:t="inline"}){return r.jsx(_e,{text:e.note,focusable:!0,children:r.jsx(Nt,{role:"status",layout:t,children:Gr(e)??"NO DATA"})})}const Xr=6,Yr=3,Le={track:8,hub:4,needle:.92},Vr={regular:{size:16,drop:18},large:{size:24,drop:32}};function se(e,t,n,a){const o=a*Math.PI/180;return{x:e+n*Math.sin(o),y:t-n*Math.cos(o)}}function ut(e,t,n,a,o){const s=se(e,t,n,a),l=se(e,t,n,o),i=o-a,d=Math.abs(i)>180?1:0,f=i>=0?1:0;return`M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${n} ${n} 0 ${d} ${f} ${l.x.toFixed(2)} ${l.y.toFixed(2)}`}function Fs({value:e,min:t,max:n,width:a=120,height:o=120,startAngle:s=0,sweep:l=360,wrap:i=!1,zones:d,ticks:f,valueLabel:m,readout:x,format:_,needleColor:v="var(--color-text-primary)",trackColor:c="var(--color-border-subtle)","aria-label":y}){const L=Ne(e),{shown:g,held:w,caption:j,band:R}=L,{anchor:$,tip:z}=Lt(j),V=g?.magnitude??Number.NaN,I=Number.isFinite(V)?g:null,S=t.magnitude,P=n.magnitude,E=P-S,A=Number.isFinite(V)?V:S,U=E>0?i?S+((A-S)%E+E)%E:Math.max(S,Math.min(P,A)):S,p=I!=null,T=I==null?null:{magnitude:i?U:V,unit:I.unit},O=m??(T===null?null:ve(T,{format:_})),F=T===null?pe:Xe(T,{format:_}),k=I==null||R===null?null:Bt(R,I.unit)??null,M=x!==void 0&&l<=180,B=M?Le.track:Xr,K=M?Le.hub:Yr,W=x===void 0?null:Vr[x],G=a/2,D=M&&W!==null?Math.min((a-B)/2,o-B-W.drop):Math.min(a,o)/2-B-2,X=M?D+B/2:o/2,re=N=>{const J=E>0?(N-S)/E:0;return s+J*l},q=N=>N.max(t).min(n),C=N=>re(N.magnitude),ae=N=>l!==0?(N-s)/l:0,de=k!==null&&Dt(ae(re(U)),[ae(C(q(k.lo))),ae(C(q(k.hi)))],Ot({wraps:i}))?k:null,le=l>=360,ce=se(G,X,D*(M?Le.needle:.88),re(U));return r.jsxs(Kr,{...Ze(L),...$,...p?{role:"meter","aria-label":Te(y,j),...Re(j),"aria-valuenow":U,"aria-valuemin":S,"aria-valuemax":P,"aria-valuetext":F}:{role:"img","aria-label":Te(`${y}: ${F}`,j),...Re(j)},children:[r.jsxs("svg",{width:a,height:o,viewBox:`0 0 ${a} ${o}`,"aria-hidden":"true",style:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[D>0&&(le?r.jsx("circle",{cx:G,cy:X,r:D,fill:"none",stroke:c,strokeWidth:B}):r.jsx("path",{d:ut(G,X,D,s,s+l),fill:"none",stroke:c,strokeWidth:B,strokeLinecap:"round"})),D>0&&!le&&d?.flatMap(N=>{const J=q(N.from.min(N.to)),Z=q(N.from.max(N.to));return Z.greaterThan(J)?[J.greaterThan(t)?null:s,n.greaterThan(Z)?null:s+l].flatMap(ee=>{if(ee===null)return[];const ue=se(G,X,D,ee);return[r.jsx("circle",{"data-dial-cap":"",cx:ue.x,cy:ue.y,r:B/2,fill:N.color},`cap-${N.color}-${ee}`)]}):[]}),D>0&&d?.map(N=>{const J=q(N.from.min(N.to)),Z=q(N.from.max(N.to));return Z.greaterThan(J)?r.jsx("path",{d:ut(G,X,D,C(J),C(Z)),fill:"none",stroke:N.color,strokeWidth:B,strokeLinecap:"butt"},`zone-${N.color}-${C(J)}-${C(Z)}`):null}),D>0&&f?.map(N=>{const J=N.value.magnitude,Z=re(J),ee=se(G,X,D,Z),ue=se(G,X,D-B,Z),b=se(G,X,D-B-8,Z);return r.jsxs("g",{children:[r.jsx("line",{x1:ue.x,y1:ue.y,x2:ee.x,y2:ee.y,stroke:"var(--color-text-faint)",strokeWidth:1}),N.label&&r.jsx("text",{x:b.x,y:b.y,textAnchor:"middle",dominantBaseline:"middle",fontSize:9,fill:"var(--color-text-faint)",children:N.label})]},`tick-${J}-${N.label??""}`)}),D>0&&de!==null&&["lo","hi"].map(N=>{const J=C(q(de[N])),Z=se(G,X,D-B/2,J),ee=se(G,X,D+B/2,J);return r.jsx(We,{end:N,x1:Z.x,y1:Z.y,x2:ee.x,y2:ee.y},N)}),D>0&&p&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:G,y1:X,x2:ce.x,y2:ce.y,stroke:v,strokeWidth:2,strokeLinecap:"round"}),r.jsx("circle",{cx:G,cy:X,r:K,fill:v})]}),r.jsxs("text",{x:G,y:M&&W!==null?X+W.drop:X+D*.55,textAnchor:"middle",fontSize:M&&W!==null?W.size:13,fontWeight:M?void 0:"bold",fill:O===null?"var(--color-text-muted)":"var(--color-text-primary)",children:[O??pe,w&&O!==null&&r.jsx(zt,{size:M?7:6,figureSize:M&&W!==null?W.size:13})]})]}),z]})}const Kr=h.div`
  display: block;
  max-width: 100%;
`;function Ps({label:e,children:t,"aria-label":n,className:a,variant:o="popover",panelHeight:s="cap",chevron:l=!0,asButton:i=!1,buttonSize:d="md",defaultOpen:f=!1}){const[m,x]=u.useState(f),_=u.useId(),v=u.useRef(null),[c,y]=u.useState(null),L=Pt(c),g=o==="inline"&&l,w=typeof e=="function"?e(m):e,j={ref:v,type:"button","aria-expanded":m,"aria-controls":_,"aria-label":n,onClick:()=>x($=>!$)},R=r.jsxs(r.Fragment,{children:[w,g&&r.jsx(Qr,{$open:m,children:r.jsx(Mn,{size:"var(--icon-size-control)"})})]});return r.jsxs(qr,{className:a,$variant:o,onKeyDown:$=>{$.key==="Escape"&&m&&(x(!1),v.current?.focus())},children:[i?r.jsx(Jr,{...j,variant:"ghost",size:d,$inline:o==="inline",children:R}):r.jsx(Zr,{...j,$variant:o,$align:o==="inline"&&!l?"end":"between",children:R}),m&&r.jsx(eo,{ref:y,id:_,role:"group",tabIndex:L,$variant:o,$panelHeight:s,children:t})]})}const qr=h.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,Zr=h.button`
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
      border-radius: var(--radius-regular);
      &:hover {
        background: var(--color-surface-sunken);
      }
    `}
  ${xe}
`,Jr=h(Ge)`
  ${({$inline:e})=>e&&oe`
      align-self: flex-end;
    `}
`,Qr=h.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,eo=h.div`
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
`;function Ls({space:e,...t}){return r.jsx(to,{$space:e,...t})}const to=h.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${je[e]} 0`:"0"};
`,no=160,ro=24,oo="...";function Ds({children:e,limit:t=no,subject:n,className:a}){const[o,s]=u.useState(!1),l=u.useId(),i=ao(e,t);if(i===void 0)return r.jsx(r.Fragment,{children:e});const d=o?"Show less":"Show more";return r.jsxs(so,{className:a,children:[r.jsx("span",{id:l,children:o?e:`${i}${oo}`})," ",r.jsx(io,{type:"button","data-expandable-toggle":"","aria-controls":l,"aria-expanded":o,"aria-label":n===void 0?void 0:`${d} of ${n}`,onClick:()=>s(f=>!f),children:d})]})}function ao(e,t){if(e.length<=t+ro)return;const n=e.lastIndexOf(" ",t);return n<=0?e.slice(0,t):e.slice(0,n)}const so=h.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,io=h(Sn)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function Os(e,t){const n=t.map(s=>s==null?null:Fn(e,s.index)),a=n.length>0&&n.every(s=>s?.currency==="exact"),o=n.reduce((s,l)=>l?.currency!=="held"||l.asOfUt===null?s:s===null?l.asOfUt:Math.min(s,l.asOfUt),null);return s=>{const l=a?Pn(s):s;return o===null?l:{state:"held",value:l,asOfUt:ie("ut",o),grade:"held",reckoning:{status:"none"}}}}function lo({anchor:e,style:t,children:n,...a}){const[o,s]=u.useState(null),[l,i]=u.useState(null),d=u.useRef(e);d.current=e;const f=u.useCallback(()=>{if(!o)return;const m=d.current,x=typeof m=="function"?m():m;if(!x)return;const _=o.getBoundingClientRect(),v=rr(x,{w:_.width,h:_.height},{w:window.innerWidth,h:window.innerHeight});i(c=>c&&c.left===v.left&&c.top===v.top?c:v)},[o]);return u.useLayoutEffect(()=>{f()}),u.useLayoutEffect(()=>{if(!o)return;const m=typeof ResizeObserver>"u"?null:new ResizeObserver(f);return m?.observe(o),window.addEventListener("resize",f),window.addEventListener("scroll",f,!0),()=>{m?.disconnect(),window.removeEventListener("resize",f),window.removeEventListener("scroll",f,!0)}},[o,f]),typeof document>"u"?null:qn.createPortal(r.jsx(co,{ref:s,style:{...t,left:l?.left??0,top:l?.top??0,visibility:l===null?"hidden":t?.visibility},...a,children:n}),document.body)}const co=h.div`
  position: fixed;
  z-index: var(--z-dropdown);
`;function zs({grade:e,subject:t,size:n}){const a=Bn(e);return r.jsx(_e,{text:t===void 0?void 0:`${t}: ${a}`,focusable:!0,children:r.jsx(En,{tone:zn(e),size:n,children:a})})}const dt=12,uo=8,fo=120;function Bs({trigger:e,"aria-label":t,children:n}){const[a,o]=u.useState(!1),s=u.useRef(null),l=u.useRef(null),i=u.useRef(null),d=u.useId(),f=u.useCallback(()=>{l.current!==null&&(clearTimeout(l.current),l.current=null)},[]),m=()=>{f(),o(!0)},x=()=>{f(),l.current=setTimeout(()=>o(!1),fo)},_=u.useCallback(()=>{f(),o(!1)},[f]);u.useEffect(()=>f,[f]),u.useEffect(()=>{if(!a)return;const c=y=>{y.key==="Escape"&&(y.stopPropagation(),_())};return document.addEventListener("keydown",c,!0),()=>document.removeEventListener("keydown",c,!0)},[a,_]);const v=()=>{const c=s.current?.getBoundingClientRect();if(!c)return null;const y=i.current?.offsetHeight??0,L=c.top-y-2*dt;return{x:c.left,y:L+dt>=uo?L:c.bottom}};return r.jsxs(r.Fragment,{children:[r.jsx(po,{ref:s,type:"button","aria-label":t,"aria-describedby":a?d:void 0,onPointerEnter:m,onPointerLeave:x,onFocus:m,onBlur:_,children:e}),a&&r.jsx(lo,{anchor:v,onPointerEnter:f,onPointerLeave:x,children:r.jsx(ho,{ref:i,id:d,role:"tooltip",children:n})})]})}const po=h.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${xe}
`,ho=h.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function Hs({gap:e,inset:t=!1,wrap:n=!1,children:a,...o}){return r.jsx(mo,{$gap:e,$inset:t,$wrap:n,...o,children:a})}const mo=h.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?je[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,go=4,vo=80,ft=60,xo=30,Ve=24,bo=32,pt=56,ht=Ve;function De(e,t,n){const{min:a,max:o,step:s}=t,l=e+n*s,i=Math.min(o,Math.max(a,l));if(!Number.isFinite(a))return i;const d=a+Math.round((i-a)/s)*s;return Math.min(o,Math.max(a,d))}function yo(e){const{value:t,min:n,max:a,step:o,orientation:s="horizontal",onChange:l,format:i,"aria-label":d,label:f=d,disabled:m=!1,width:x,height:_}=e,v=s==="vertical",c=Math.max(Ve,x??(v?ht:pt)),y=Math.max(Ve,_??(v?pt:ht)),L=e.mode==="rate",g=n??Number.NEGATIVE_INFINITY,w=a??Number.POSITIVE_INFINITY,j={min:g,max:w,step:o},R=u.useRef(null),$=u.useRef(t);$.current=t;const z=u.useRef(l);z.current=l;const V=(e.mode==="rate"?e.stepsPerSecond:void 0)??xo,[I,S]=u.useState(0),P=i?i(t):String(Math.round(t)),E=w>g&&Number.isFinite(w-g)?(t-g)/(w-g):.5,A=k=>{m||k!==t&&l(k)};u.useEffect(()=>{if(!L||I===0||m)return;const k=setInterval(()=>{const M=Math.max(g,Math.min(w,$.current+I*V*o*(ft/1e3)));M!==$.current&&z.current(M)},ft);return()=>clearInterval(k)},[L,I,m,o,V,g,w]);const U=k=>{if(m)return;let M=null;switch(k.key){case"ArrowRight":case"ArrowUp":M=De(t,j,1);break;case"ArrowLeft":case"ArrowDown":M=De(t,j,-1);break;case"Home":if(!Number.isFinite(g))return;M=g;break;case"End":if(!Number.isFinite(w))return;M=w;break;default:return}k.preventDefault(),A(M)},p=k=>s==="vertical"?k.clientY:k.clientX,T=k=>{m||(R.current={start:p(k),startValue:t},k.currentTarget.setPointerCapture(k.pointerId))},O=k=>{if(m||!R.current)return;const M=s==="vertical"?R.current.start-p(k):p(k)-R.current.start;if(L){const K=M/vo;S(Math.max(-1,Math.min(1,K)));return}const B=M/go;A(De(R.current.startValue,j,B))},F=k=>{R.current&&(R.current=null,S(0),k.currentTarget.hasPointerCapture(k.pointerId)&&k.currentTarget.releasePointerCapture(k.pointerId))};return r.jsxs(wo,{children:[f!==!1&&r.jsx($o,{"aria-hidden":"true",children:f}),r.jsxs(_o,{role:"slider","aria-label":d,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":n,"aria-valuemax":a,"aria-valuetext":P,"aria-disabled":m||void 0,tabIndex:m?-1:0,$orientation:s,$disabled:m,$width:c,$height:y,$compact:(v?c:y)<bo,onKeyDown:U,onPointerDown:T,onPointerMove:O,onPointerUp:F,onPointerCancel:F,children:[r.jsx(jo,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-E)*100}%)`}:{transform:`translateX(${(.5-E)*100}%)`},"aria-hidden":"true"}),r.jsx(ko,{$orientation:s,"aria-hidden":"true"}),r.jsx(Mo,{"aria-hidden":"true",children:P})]})]})}const wo=h.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,$o=h.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,_o=h.div`
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

  ${xe}
`,jo=h.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,ko=h.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,Mo=h.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function Us({lock:e}){const t=Ln(e)?So(e):e,n=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return r.jsx(_e,{text:n,focusable:!0,children:r.jsxs(Ro,{role:"status","aria-label":n,children:[r.jsx(Rn,{}),r.jsx(To,{children:Eo(t)})]})})}function So(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...Zn(t,Hn),locks:t}}function Eo(e){const t=[...new Set(e.locks.flatMap(n=>n.missing.map(a=>a.name)))];return t.length>0?t.join(", "):e.reason}const Ro=h.span`
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
`,To=h.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,mt=1.4,gt=1.7,Io="var(--icon-size-standalone)",Ao=1.8,Se="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",vt="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",xt="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",bt="M7 4.5V19.5M17 4.5V19.5",he=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,Vt={prograde:{colour:"prograde",paths:[Se,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[Se,he(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",he(12,11)]},radialOut:{colour:"radial",paths:[vt,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[vt,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",he(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",he(12,12)]},relativePlus:{colour:"target",paths:[Se,xt],dot:[12,12]},relativeMinus:{colour:"target",paths:[Se,xt,he(12,12)]},parallelPlus:{colour:"target",paths:[bt],dot:[12,12]},parallelMinus:{colour:"target",paths:[bt,he(12,12)]}},Ws=Object.keys(Vt);function yt({shape:e,colour:t,strokeWidth:n,dotRadius:a}){return r.jsxs("g",{fill:"none",stroke:t,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(o=>r.jsx("path",{d:o},o)),e.dot&&r.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:a,fill:t,stroke:"none"})]})}function te(e,t){const n=Vt[e],a=`var(--color-marker-${n.colour})`,o=u.forwardRef(({size:s=Io,strokeWidth:l=Ao,label:i,style:d,...f},m)=>{const x={ref:m,xmlns:"http://www.w3.org/2000/svg",...typeof s=="number"?{width:s,height:s,style:d}:{style:{width:s,height:s,...d}},viewBox:"0 0 24 24","data-marker":e},_=r.jsxs(r.Fragment,{children:[r.jsx(yt,{shape:n,colour:"currentColor",strokeWidth:l+mt,dotRadius:gt+mt/2}),r.jsx(yt,{shape:n,colour:a,strokeWidth:l,dotRadius:gt})]});return i?r.jsx("svg",{...x,role:"img","aria-label":i,...f,children:_}):r.jsx("svg",{...x,"aria-hidden":"true",...f,children:_})});return o.displayName=t,o}const Kt=te("prograde","ProgradeIcon"),No=te("retrograde","RetrogradeIcon"),qt=te("normal","NormalIcon"),Co=te("antiNormal","AntiNormalIcon"),Fo=te("radialOut","RadialOutIcon"),Zt=te("radialIn","RadialInIcon"),Po=te("maneuver","ManeuverIcon"),Lo=te("target","TargetIcon"),Do=te("antiTarget","AntiTargetIcon"),Oo=te("relativePlus","RelativePlusIcon"),zo=te("relativeMinus","RelativeMinusIcon"),Bo=te("parallelPlus","ParallelPlusIcon"),Ho=te("parallelMinus","ParallelMinusIcon"),Gs=Kt,Xs=Zt,Ys=qt,Vs={prograde:Kt,retrograde:No,normal:qt,antiNormal:Co,radialOut:Fo,radialIn:Zt,maneuver:Po,target:Lo,antiTarget:Do,relativePlus:Oo,relativeMinus:zo,parallelPlus:Bo,parallelMinus:Ho};function Uo(e){if(e.frame==="scet")return{token:"SCET",spoken:"spacecraft event time",title:"Spacecraft event time: when this happens at the craft"};const{vantage:t}=e;return t===void 0?{token:"RECEIVED",spoken:"received",title:"When the telemetry showing this arrives"}:{token:`AT ${t}`,spoken:`received at ${t}`,title:`When the telemetry showing this arrives at ${t}`}}const Wo=h.span`
  font-size: max(0.72em, 10px);
  opacity: 0.72;
  white-space: nowrap;
  text-transform: none;
`;function Ks({value:e,context:t}){const a=Ne(typeof e=="number"?void 0:e),{shown:o,held:s,caption:l}=a,i=typeof e=="number"?e:o?.magnitude,d=Ze({...a,shown:i}),f=t&&Uo(t),m=Un(i??Number.NaN);return r.jsxs(r.Fragment,{children:[s?r.jsx(Je,{...d,caption:l,children:m}):r.jsx("span",{"data-figure":d["data-figure"],children:m}),f&&r.jsxs(r.Fragment,{children:[" ",r.jsx(_e,{text:f.title,focusable:!0,children:r.jsxs(Wo,{children:[r.jsx("span",{"aria-hidden":"true",children:f.token}),r.jsx(Ue,{children:f.spoken})]})})]})]})}function Jt(e){const{year:t,day:n,hour:a,minute:o}=Qe(),s=Number.isFinite(e)?Math.max(0,e):0,l=Math.floor(s/t)+1,i=s%t,d=Math.floor(i/n)+1,f=i%n;return{year:l,day:d,hour:Math.floor(f/a),minute:Math.floor(f%a/o),second:Math.floor(f%o)}}const Go={year:1,day:1,hour:0,minute:0,second:0};function Xo(e){const{year:t,day:n,hour:a,minute:o}=Qe();return(e.year-1)*t+(e.day-1)*n+e.hour*a+e.minute*o+e.second}function Ee(e){return ve(ie("s",e))}function Yo({value:e,onChange:t,label:n,disabled:a,steps:o}){const s=u.useId(),l=`${s}-absent`,i=e!==null&&Number.isFinite(e)?e:null,d=i===null?null:Jt(i),f=Qe(),m=o??[f.minute,10*f.minute,f.hour,f.day],[x,_]=u.useState(null),v=(c,y,L,g)=>r.jsxs(Ie,{gap:"caption",children:[r.jsx(qe,{htmlFor:`${s}-${c}`,children:y}),r.jsx(Ft,{id:`${s}-${c}`,type:"number",inputMode:"numeric","aria-label":`${n} ${y}`,"aria-describedby":d===null?l:void 0,min:L,step:1,style:{width:g},disabled:a,placeholder:d===null?pe:void 0,value:x?.key===c?x.text:d===null?"":String(d[c]),onBlur:()=>_(null),onChange:w=>{const j=w.target.value;if(_({key:c,text:j}),j.trim()==="")return;const R=Number(j);if(!Number.isFinite(R))return;const $=Math.max(L,Math.round(R));t(Xo({...d??Go,[c]:$}))}})]},c);return r.jsxs(Ie,{gap:"related-dense",role:"group","aria-label":n,children:[r.jsxs(nt,{gap:"related-dense",wrap:!0,justify:"start",children:[v("year","YEAR",1,"5rem"),v("day","DAY",1,"5rem"),v("hour","HR",0,"4rem"),v("minute","MIN",0,"4rem"),v("second","SEC",0,"4rem")]}),d===null&&r.jsx(Ye,{id:l,level:"muted",size:"sm",children:`${pe} no ${n.toLowerCase()} to show. Type one to state it.`}),m.length===0?null:r.jsxs(nt,{gap:"related-packed",wrap:!0,justify:"start",children:[r.jsx(Ye,{level:"faint",size:"sm",children:"NUDGE"}),m.map(c=>r.jsx(Ge,{variant:"ghost",size:"sm",disabled:a||i===null,"aria-label":`${n} earlier by ${Ee(c)}`,onClick:()=>i!==null&&t(i-c),children:`-${Ee(c)}`},`minus-${c}`)),m.map(c=>r.jsx(Ge,{variant:"ghost",size:"sm",disabled:a||i===null,"aria-label":`${n} later by ${Ee(c)}`,onClick:()=>i!==null&&t(i+c),children:`+${Ee(c)}`},`plus-${c}`))]})]})}function qs({panZoom:e,label:t,style:n,onMouseMove:a,children:o}){const{style:s,ref:l,...i}=e.viewportProps;return r.jsxs(Vo,{...i,ref:l,onMouseMove:a,"aria-label":t,style:{...s,...n},children:[o,r.jsx(Ko,{role:"status",children:e.hint!==null&&r.jsx(qo,{children:e.hint})})]})}const Vo=h.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  ${$e}
`,Ko=h.div`
  position: absolute;
  bottom: var(--gap-related);
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-base);
  max-width: calc(100% - 16px);
  pointer-events: none;
`,qo=h.div`
  padding: var(--inset-control);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function Zs({id:e,label:t,value:n,options:a,onChange:o,hint:s}){const l=a.findIndex(i=>Jn(i.choice,n));return r.jsxs(Ct,{children:[r.jsx(qe,{htmlFor:e,children:t}),r.jsxs(Tn,{id:e,value:l===-1?"":String(l),onChange:i=>{const d=a[Number(i.target.value)];d!==void 0&&o(d.choice)},children:[l===-1&&r.jsx("option",{value:"",disabled:!0}),a.map((i,d)=>r.jsx("option",{value:d,children:i.label},`${i.choice.kind}-${i.choice.bodyIndex??"none"}`))]}),s!==void 0&&r.jsx(In,{children:s})]})}function Zo({as:e,interactive:t=!1,selected:n=!1,wrap:a=!1,nested:o=!1,type:s,children:l,...i}){return r.jsx(Qo,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:n,$wrap:a,$nested:o,...i,children:l})}const Qt=h.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,Jo="min(12ch, 100%)",Qo=h.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-row);
  font-size: var(--font-size-compact);
  padding: var(--inset-row);
  ${({$wrap:e})=>e?`
  flex-wrap: wrap;
  row-gap: var(--gap-row-wrap);

  & > ${Qt} {
    min-width: ${Jo};
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
  ${Wt("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}
`,Js=Object.assign(Zo,{Name:Qt}),ea=65,en=38,ta=72,na=ta-en,tn=55,Ke=137.508,ra=10,oa=1.5,aa=64,sa=60,ia=241,la=Ke-Math.floor(Ke),ye=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function nn(e,t){const n=Math.abs(e-t)%360;return n>180?360-n:n}const ca=ye.map((e,t)=>{let n=1/0;for(let o=0;o<ye.length;o++)o!==t&&(n=Math.min(n,nn(e.hue,ye[o].hue)));const a=n/2;return Math.max(0,Math.min(ra,a-oa))}),ua=ye.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:ca[t]}));function da(e,t=ye){return t.find(n=>n.aliases.some(a=>e.includes(a)))}function rn(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function wt(e,t){return(e%t+t)%t}function fa(e){const n=rn(`light:${e}`)/4294967295;return en+n*na}function pa(e){const t=da(e);if(!t)return;const n=t.aliases.length===1?tn:fa(e);return{hue:t.hue,lightness:n}}function ha(e){return ua.some(({centre:t,radius:n})=>nn(e,t)<n)}function ma(e){const t=rn(e);let n=wt(t*Ke,360);const a=sa+(t>>>8)%ia+la;let o=0;for(;ha(n)&&o<aa;)n=wt(n+a,360),o++;return n}function Qs(e){const t=e.trim().toLowerCase(),n=pa(t),a=n?.hue??ma(t),o=n?.lightness??tn;return`hsl(${Math.round(a)}deg ${ea}% ${Math.round(o)}%)`}function ei({selected:e,gap:t="caption",layout:n="stack",selectedLook:a="fill",children:o,...s}){return r.jsx(ga,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:n,$look:a,...s,children:o})}const ga=h.button`
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
  gap: ${({$gap:e})=>je[e]};
  width: 100%;
  text-align: left;
  padding: var(--inset-selectable-row);
  border-radius: ${Ut.regular};
  border: 1px solid
    ${({$selected:e,$look:t})=>e?t==="outline"?"var(--color-accent-fg)":"transparent":"var(--color-border-subtle)"};
  ${({$selected:e,$look:t})=>e?t==="outline"?"background: var(--color-surface-raised); color: inherit;":Wt("go"):"background: transparent; color: inherit;"}
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

  ${xe}
`,va=u.forwardRef(function(t,n){return r.jsx(xa,{ref:n,type:"range",...t})}),xa=h.input`
  width: 100%;
  min-width: 0;
  margin: 0;
  background: none;
  accent-color: var(--color-accent-fg);
  cursor: pointer;

  ${xe}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function ba({label:e,children:t,detail:n,tone:a="neutral",...o}){return r.jsxs(ya,{...o,children:[r.jsx(wa,{children:e}),r.jsx($a,{$tone:a,children:t}),n!=null&&r.jsx(_a,{children:n})]})}const ya=h.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,wa=h.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,$a=h.dd`
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
  color: ${({$tone:e})=>Wn[e]};
`,_a=h.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function ti({slot:e}){const t=Gn(e);return t.length===0?null:r.jsx(r.Fragment,{children:t.map(n=>r.jsx(ba,{label:n.label,detail:n.detail,tone:n.tone??"neutral",children:r.jsx(ja,{entry:n})},n.id))})}function ja({entry:e}){if(e.value!==void 0)return r.jsx(ge,{value:e.value});if(e.text===void 0)return r.jsx(Xn,{});const t=An(e.held);return t===null?r.jsx(r.Fragment,{children:e.text}):r.jsx(Je,{kind:t.kind,caption:t.caption,children:e.text})}const ka=9,me=12,Ma=12,$t=52,Q=10,Oe=4;function Sa(e,t,n){const a=l=>e.map(i=>Number.parseFloat(l.mark(i).replace(/[^\d.-]/g,""))),o=a(n(Oe)),s=l=>a(l).every((i,d)=>i===o[d]);if(s(t))return t;for(let l=0;l<Oe;l++){const i=n(l);if(s(i))return i}return n(Oe)}function ni({labelSide:e="left",value:t,min:n,max:a,width:o=92,height:s=220,fillHeight:l=!1,tickStep:i,zones:d,markers:f,groundLine:m,seaLevel:x,format:_,"aria-label":v}){const c=u.useRef(null),[y,L]=u.useState(s);u.useEffect(()=>{if(!l)return;const b=c.current;if(!b)return;const Y=()=>{const ne=b.clientHeight;ne>0&&L(ne)};Y();const H=new ResizeObserver(Y);return H.observe(b),()=>H.disconnect()},[l]);const g=l?y:s,w=Ne(t),{shown:j,held:R,caption:$,band:z}=w,{anchor:V,tip:I}=Lt($),S=j?.magnitude??Number.NaN,P=Number.isFinite(S)?j:null,E=n.magnitude,A=a.magnitude,U=A-E,p=Number.isFinite(S)?S:E,T=U>0?Math.max(E,Math.min(A,p)):E,O=P!=null,F=at(a,{format:_}),k=P==null?pe:Xe({magnitude:p,unit:P.unit},{format:F.rung}),M=b=>Xe(b),B=[...(f??[]).flatMap(b=>b.label===void 0?[]:[b.bounds===void 0?`${b.label} ${M(b.value)}`:`${b.label} ${M(b.value)}, between ${M(b.bounds.lo)} and ${M(b.bounds.hi)}`]),...(d??[]).flatMap(b=>b.label===void 0?[]:[`${b.label} zone ${M(b.from.min(b.to))} to ${M(b.from.max(b.to))}`]),...m===void 0?[]:[`ground ${M(m)}`],...x===void 0?[]:[`sea level ${M(x)}`]],K=P==null||z===null?null:Bt(z,P.unit)??null,W=Math.max(0,g-me-Ma),G=b=>{if(!(U>0))return me+W;const Y=Math.max(0,Math.min(1,(b-E)/U));return me+(1-Y)*W},D=b=>G(b.magnitude),X=me,re=me+W,q=e==="right",C=q?o-$t-Q:$t,ae=q?C+Q+6:C-6,de=q?"start":"end",le=(b,Y)=>{const H=D(b),ne=b.greaterThan(a)?-1:b.lessThan(n)?1:0,be=C-4,ke=C+Q+4,Ce=C+Q/2;return r.jsxs("g",{"data-level":Y?"sea":"ground",children:[r.jsx("line",{x1:be,y1:H,x2:ke,y2:H,stroke:Y?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:Y?1.5:2,strokeDasharray:Y?"3 2":void 0}),ne!==0&&r.jsx("polygon",{"data-off-scale":"true",points:`${Ce-4},${H-ne*2} ${Ce+4},${H-ne*2} ${Ce},${H+ne*4}`,fill:Y?"var(--color-info-mark)":"var(--color-text-primary)"})]})},ce=[],N=i?.magnitude??0;if(N>0&&U>0){const b=Math.ceil(E/N),Y=Math.floor(A/N+1e-9);for(let H=b;H<=Y;H++)ce.push(H===0?0:H*N)}const J=Sa(ce,F,b=>at(a,{format:_,decimals:b})),Z=G(T),ee=b=>W>0?(me+W-b)/W:0,ue=K!==null&&Dt(ee(Z),[ee(D(K.lo)),ee(D(K.hi))],Ot())?K:null;return r.jsxs(Ea,{ref:c,...Ze(w),...V,...O?{role:"meter","aria-label":Te(v,$),...Re($),"aria-valuenow":T,"aria-valuemin":E,"aria-valuemax":A,"aria-valuetext":B.length===0?k:`${k}; ${B.join("; ")}`}:{role:"img","aria-label":Te(`${v}: ${k}`,$),...Re($)},style:l?{height:"100%"}:void 0,children:[r.jsxs("svg",{width:o,height:g,viewBox:`0 0 ${o} ${g}`,"aria-hidden":"true",style:l?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[r.jsx("rect",{x:C,y:X,width:Q,height:W,rx:2,fill:"var(--color-surface-raised)"}),d?.map(b=>{const Y=D(b.from.max(b.to)),H=D(b.from.min(b.to)),ne=Math.max(0,H-Y);return r.jsx("g",{children:r.jsx("rect",{x:C,y:Y,width:Q,height:ne,fill:b.color??"var(--color-warn-mark)",opacity:.55})},`zone-${H}-${Y}-${b.label??""}`)}),x!==void 0&&U>0&&le(x,!0),m!==void 0&&U>0&&le(m,!1),ce.map(b=>{const Y=G(b),H=O&&Math.abs(Y-Math.max(X+4,Math.min(re-4,Z)))<ka;return r.jsxs("g",{children:[r.jsx("line",{x1:q?C+Q+4:C-4,y1:Y,x2:q?C+Q:C,y2:Y,stroke:"var(--color-border-subtle)",strokeWidth:1}),!H&&r.jsx("text",{x:ae,y:Y,textAnchor:de,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:J.mark(b)})]},`tick-${b}`)}),f?.map(b=>{const{bounds:Y}=b,H=D(b.value),ne=b.color??"var(--color-accent-fg)";return r.jsxs("g",{"data-marker":b.label,children:[r.jsx("line",{x1:C,y1:H,x2:C+Q,y2:H,stroke:ne,strokeWidth:2,strokeDasharray:"2 2"}),r.jsx("polygon",{points:q?`${C},${H} ${C-5},${H-3} ${C-5},${H+3}`:`${C+Q},${H} ${C+Q+5},${H-3} ${C+Q+5},${H+3}`,fill:"none",stroke:ne,strokeWidth:1.5}),Y!==void 0&&["lo","hi"].map(be=>{const ke=D(Y[be]);return r.jsx(We,{end:be,x1:C,y1:ke,x2:C+Q,y2:ke},be)})]},`marker-${H}-${b.label??""}`)}),ue!==null&&["lo","hi"].map(b=>{const Y=D(ue[b]);return r.jsx(We,{end:b,x1:C,y1:Y,x2:C+Q,y2:Y},b)}),O&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:C-6,y1:Z,x2:C+Q+6,y2:Z,stroke:"var(--color-accent-fg)",strokeWidth:2}),r.jsxs("text",{x:q?ae+2:ae-2,y:Math.max(X+4,Math.min(re-4,Z)),textAnchor:de,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[F.mark(p),R&&r.jsx(zt,{size:5})]})]}),!O&&r.jsx(Nn,{x:q?ae+8:ae-8,y:X+W/2,size:11,children:pe}),F.symbol!==""&&r.jsx("text",{x:C+Q/2,y:X-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:F.symbol})]}),I]})}const Ea=h.div`
  display: block;
  max-width: 100%;
`,_t={w:5,h:4},Ra=8,Ta=7;function ri(e,t){return e===void 0||t===void 0?"normal":e<_t.w||t<_t.h?"tiny":e<Ra||t<Ta?"small":"normal"}const on=1.6,Ia=1/on;function oi(e,t){if(e===void 0||t===void 0||t===0)return{shape:"square",aspect:1};const n=e/t;return n>=on?{shape:"landscape",aspect:n}:n<=Ia?{shape:"portrait",aspect:n}:{shape:"square",aspect:n}}const ai=h.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,Aa=112;function Na(e,t){try{return ie(e,1).in(t).magnitude}catch{return Number.NaN}}function Ca(e,t){let n=e;return t.map((a,o)=>{if(!Number.isFinite(a)||a===0)return 0;const s=o===t.length-1?n/a:Math.trunc(n/a);return n-=s*a,s})}function si({value:e,unit:t,onChange:n,label:a,rungs:o,range:s,rate:l,disabled:i}){const d=u.useId(),{shown:f,held:m,caption:x}=Ne(e),_=m?r.jsx(Je,{caption:x,children:a}):a,v=s,c=f?f.magnitude:Number.NaN,[y,L]=u.useState({}),g=$=>y[$]??null,w=($,z)=>L(V=>({...V,[$]:z})),j=l?r.jsxs(Ie,{gap:"related-packed",children:[r.jsx(yo,{mode:"rate","aria-label":`${a} rate`,value:c,step:l.step,stepsPerSecond:l.stepsPerSecond,disabled:i||!Number.isFinite(c),format:ze(t)?Pa:void 0,width:ze(t)?Aa:void 0,onChange:$=>n(ie(t,$))}),r.jsx(Ye,{level:"faint",size:"sm",children:`${l.step} ${Fa(t)} / notch`})]}):null;if(ze(t))return r.jsxs(He,{children:[r.jsx(kt,{"aria-hidden":"true",children:_}),r.jsxs(Ie,{gap:"related-dense",children:[r.jsx(Yo,{label:m&&x!==null?`${a}, ${x}`:a,value:Number.isFinite(c)?c:null,disabled:i,steps:l?[]:void 0,onChange:$=>n(ie(t,$))}),j]})]});if(o&&o.length>0){const $=o.map(I=>Na(String(I),t)),z=Ca(c,$),V=(I,S)=>{const P=Be(S);if(P===void 0){w(I,{text:S,against:z[I]});return}const E=z.map(U=>Number.isFinite(U)?U:0);E[I]=P;const A=E.reduce((U,p,T)=>Number.isFinite($[T])?U+p*$[T]:U,0);w(I,{text:S,against:P}),n(ie(t,A))};return r.jsxs(He,{children:[r.jsx(kt,{id:`${d}-label`,children:_}),r.jsx(za,{role:"group","aria-labelledby":`${d}-label`,children:o.map((I,S)=>r.jsxs(Ba,{children:[r.jsx(Ha,{type:"number",disabled:i,"aria-label":`${a} ${String(I)}`,value:jt(g(S),z[S]),onChange:P=>V(S,P.target.value)}),r.jsx(Mt,{"aria-hidden":"true",children:String(I)})]},String(I)))}),j]})}const R=$=>{const z=Be($);w(0,{text:$,against:z??c}),z!==void 0&&n(ie(t,z))};return r.jsxs(He,{children:[r.jsx(Da,{htmlFor:d,children:_}),r.jsxs(Oa,{children:[r.jsx(sn,{id:d,type:"number",disabled:i,min:v?.min,max:v?.max,step:v?.step,value:jt(g(0),c),onChange:$=>R($.target.value)}),r.jsx(Mt,{"aria-hidden":"true",children:t})]}),v?r.jsx(va,{disabled:i,"aria-label":`${a} slider`,min:v.min,max:v.max,step:v.step??(v.max-v.min)/100,value:Number.isFinite(c)?c:v.min,onChange:$=>n(ie(t,Be($.target.value)??v.min))}):null,j]})}function jt(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(La(t)):""}function Fa(e){return Ht(e)??e}function ze(e){return Ht(e)==="s"}function Pa(e){if(!Number.isFinite(e))return"";const{day:t,hour:n,minute:a,second:o}=Jt(e),s=l=>String(l).padStart(2,"0");return`D${t} ${s(n)}:${s(a)}:${s(o)}`}function Be(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function La(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const He=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,an=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Da=h.label`
  ${an}
`,kt=h.span`
  ${an}
`,Oa=h.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,sn=h.input`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-field-compact);
  border-radius: var(--radius-regular);
  text-align: right;
  font-variant-numeric: tabular-nums;
  min-width: 0;

  ${xe}
`,Mt=h.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,za=h.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,Ba=h.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,Ha=h(sn)`
  width: 4.5em;
`,Ua=200;function St(e={}){const t=e.quietMs??Ua;let n=null,a=Number.NEGATIVE_INFINITY,o=!0;return{wheel(s,l){return(n===null||s-a>t)&&(n=l&&o?"diagram":"page"),a=s,n},pageScrolled(){o=!1},pointerMovedInside(){o=!0},yieldToPage(){n="page"},get owner(){return n}}}const Wa=16,Ga=400,Et=120,Xa=Math.log(1.15)/100,Ya=.01;function Va(e,t,n){const a=t===1?e*Wa:t===2?e*Ga:e,o=Math.max(-Et,Math.min(Et,a)),s=n&&Math.abs(a)<40?Ya:Xa;return Math.exp(-o*s)}function Ka(e,t,n={}){const{quietMs:a}=n,o=u.useRef(St({quietMs:a}));u.useEffect(()=>{o.current=St({quietMs:a})},[a]);const[s,l]=u.useState(null);u.useEffect(()=>{e.current!==s&&l(e.current)}),u.useEffect(()=>{if(!s||!t)return;const i=c=>c instanceof Node&&s.contains(c);let d=null;const f=(c,y)=>d!==null&&(Math.abs(c-d.x)>=1||Math.abs(y-d.y)>=1),m=c=>{d={x:c.clientX,y:c.clientY},!(c.ctrlKey||c.metaKey)&&o.current.wheel(performance.now(),i(c.target))},x=c=>{const y=f(c.clientX,c.clientY);d={x:c.clientX,y:c.clientY},y&&i(c.target)&&o.current.pointerMovedInside()},_=c=>{const y=c.target;(y===document||y instanceof Node&&y.contains(s))&&o.current.pageScrolled()},v=c=>{const y=c.ctrlKey||c.metaKey;if(!y&&o.current.owner!=="diagram")return;const L=s.getBoundingClientRect(),g=Va(c.deltaY,c.deltaMode,y);if(t(g,c.clientX-L.left,c.clientY-L.top)===!1&&!y){o.current.yieldToPage();return}c.preventDefault()};return window.addEventListener("wheel",m,{capture:!0,passive:!0}),window.addEventListener("pointermove",x,{capture:!0,passive:!0}),window.addEventListener("scroll",_,{capture:!0,passive:!0}),s.addEventListener("wheel",v,{passive:!1}),()=>{window.removeEventListener("wheel",m,{capture:!0}),window.removeEventListener("pointermove",x,{capture:!0}),window.removeEventListener("scroll",_,{capture:!0}),s.removeEventListener("wheel",v)}},[s,t])}const qa="Arrow keys pan, + and - zoom, 0 resets",Za=.15,Rt=1.25,Ja={zoom:1,panX:0,panY:0};function ii(e={}){const{home:t=Ja,zoomAbout:n="pointer",panThreshold:a=3,enabled:o=!0}=e,[s,l]=u.useState(t),i=u.useRef({camera:s,options:e,home:t});i.current={camera:s,options:e,home:t};const d=u.useRef(null),f=e.elementRef??d,m=u.useCallback(()=>{const p=f.current?.getBoundingClientRect();return{w:p?.width??0,h:p?.height??0}},[]),x=u.useCallback(p=>{const{constrain:T}=i.current.options,O=m(),F=T&&O.w>0&&O.h>0?T(p,O):p;return i.current.camera=F,l(F),F},[m]),_=u.useCallback(p=>{x(typeof p=="function"?p(i.current.camera):p)},[x]),v=u.useCallback((p,T,O)=>{const F=i.current.camera,{minZoom:k=.1,maxZoom:M=50}=i.current.options,B=typeof k=="function"?k(F):k,K=Math.max(Math.min(B,F.zoom),Math.min(Math.max(M,F.zoom),F.zoom*p));if(K===F.zoom)return!1;const{w:W,h:G}=m();if(n==="centre")x({...F,zoom:K});else{const D=(T-W/2)/F.zoom+F.panX,X=(O-G/2)/F.zoom+F.panY;x({zoom:K,panX:D-(T-W/2)/K,panY:X-(O-G/2)/K})}return i.current.options.onManualMove?.("zoom"),!0},[x,m,n]);Ka(f,u.useMemo(()=>o?v:null,[o,v]));const c=u.useCallback(()=>{i.current.options.onManualMove?.("reset"),x(i.current.home)},[x]),y=u.useCallback(p=>{const{w:T,h:O}=m();v(p,T/2,O/2)},[m,v]),[L,g]=u.useState(null),w=u.useRef(new Map),j=u.useRef(null),R=u.useRef(null),$=u.useRef(null),z=u.useRef(!1),[V,I]=u.useState(!1),S=u.useCallback(p=>{if(i.current.options.enabled!==!1&&!(p.pointerType==="mouse"&&p.button!==0)){if(w.current.set(p.pointerId,{x:p.clientX,y:p.clientY}),w.current.size===2){const[T,O]=[...w.current.values()];j.current=null,R.current=Math.hypot(T.x-O.x,T.y-O.y);return}z.current=!1,$.current={x:p.clientX,y:p.clientY},j.current={x:p.clientX,y:p.clientY},R.current=null}},[]),P=u.useCallback(p=>{if(!w.current.has(p.pointerId))return;if(p.pointerType==="mouse"&&p.buttons===0){w.current.delete(p.pointerId),w.current.size===0&&(j.current=null,$.current=null,R.current=null,I(!1));return}if(w.current.set(p.pointerId,{x:p.clientX,y:p.clientY}),w.current.size>=2){const[B,K]=[...w.current.values()],W=Math.hypot(B.x-K.x,B.y-K.y),G=R.current;if(R.current=W,G===null||G===0)return;const D=f.current?.getBoundingClientRect();z.current=!0,v(W/G,(B.x+K.x)/2-(D?.left??0),(B.y+K.y)/2-(D?.top??0));return}const T=$.current,O=j.current;if(!T||!O||!z.current&&Math.hypot(p.clientX-T.x,p.clientY-T.y)<a)return;z.current||(z.current=!0,I(!0),p.currentTarget.setPointerCapture?.(p.pointerId));const F=p.clientX-O.x,k=p.clientY-O.y;j.current={x:p.clientX,y:p.clientY};const M=i.current.camera;i.current.options.onManualMove?.("pan"),x({...M,panX:M.panX-F/M.zoom,panY:M.panY-k/M.zoom})},[x,a,v]),E=u.useCallback(p=>{if(w.current.delete(p.pointerId),p.currentTarget.releasePointerCapture?.(p.pointerId),w.current.size===1){const[T]=[...w.current.values()];j.current={...T},$.current={...T},R.current=null;return}w.current.size===0&&(j.current=null,$.current=null,R.current=null,I(!1))},[]),A=u.useCallback(p=>{if(i.current.options.enabled===!1||p.target!==p.currentTarget||p.ctrlKey||p.metaKey||p.altKey)return;const T=i.current.camera,{w:O,h:F}=m(),k=(M,B)=>{const K=(M==="panX"?O:F)/T.zoom;i.current.options.onManualMove?.("pan"),x({...T,[M]:T[M]+B*K*Za})};switch(p.key){case"ArrowLeft":k("panX",-1);break;case"ArrowRight":k("panX",1);break;case"ArrowUp":k("panY",-1);break;case"ArrowDown":k("panY",1);break;case"+":case"=":y(Rt);break;case"-":case"_":y(1/Rt);break;case"0":c();break;default:return}p.preventDefault()},[x,c,m,y]);return{camera:s,setCamera:_,reset:c,zoomBy:y,viewportProps:{ref:f,tabIndex:0,role:"group",onPointerDown:S,onPointerMove:P,onPointerUp:E,onPointerCancel:E,onFocus:p=>{p.target===p.currentTarget&&p.currentTarget.matches(":focus-visible")&&g(qa)},onBlur:()=>g(null),onKeyDown:A,style:{touchAction:"none",cursor:V?"grabbing":"grab"}},didPan:()=>z.current,isDragging:V,hint:L}}const Tt="(prefers-reduced-motion: reduce)";function li(){const[e,t]=u.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(Tt).matches);return u.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const n=window.matchMedia(Tt),a=()=>t(n.matches);return a(),n.addEventListener("change",a),()=>n.removeEventListener("change",a)},[]),e}const ln=u.createContext(null);function ci({widget:e,scope:t,children:n}){const a=u.useMemo(()=>({widget:e,scope:t}),[e,t]);return r.jsx(ln.Provider,{value:a,children:n})}function ui(e){const t=u.useContext(ln);if(!(!t||t.widget!==e))return t.scope}function di(e){if(e.length===0)return[];const t=[[e[0]]];for(let n=1;n<e.length;n++)ts(e[n-1],e[n])?t.push([e[n]]):t[t.length-1].push(e[n]);return t}function fi(e,t,n,a){if(e.length===0||!(t>0))return[];const o=[e[0].x];let s=o[0],l=o[0];for(let i=1;i<e.length;i++){const d=o[i-1],f=d+es(e[i].x-d,t);o.push(f),f<s&&(s=f),f>l&&(l=f)}return Qa(s,l,n,a,t).map(i=>e.map((d,f)=>({...d,x:o[f]+i})))}function Qa(e,t,n,a,o){if(!(o>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((n-t)/o),l=Math.floor((a-e)/o),i=[];for(let d=s;d<=l;d++)i.push(d*o+0);return i}function es(e,t){const n=t/2;return((e+n)%t+t)%t-n}function ts(e,t){const n=It(e),a=It(t),o=rs(n,a);if(o===0)return!1;const s=At(ns(n,a));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=o)return!1;const i=[0,0,e.lat+t.lat>=0?1:-1],d=At(os(i,s));if(d===null)return!1;const f=we(n,a);return we(n,d)>f&&we(a,d)>f}function It({lat:e,lon:t}){const n=e*Math.PI/180,a=t*Math.PI/180,o=Math.cos(n);return[o*Math.cos(a),o*Math.sin(a),Math.sin(n)]}function we(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function ns(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function rs(e,t){return Math.acos(Math.max(-1,Math.min(1,we(e,t))))}function os(e,t){const n=we(e,t);return[e[0]-n*t[0],e[1]-n*t[1],e[2]-n*t[2]]}function At(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{ba as $,kr as A,_s as B,Ms as C,Ns as D,Ds as E,Ss as F,Bo as G,zs as H,or as I,yo as J,Kt as K,Us as L,Vs as M,qt as N,Zt as O,Mr as P,Fo as Q,ct as R,Zs as S,zo as T,Oo as U,No as V,Js as W,Qt as X,ei as Y,Rs as Z,va as _,ys as a,ti as a0,_t as a1,Gs as a2,ni as a3,Lo as a4,ai as a5,si as a6,ci as a7,rr as a8,hr as a9,St as aa,Gr as ab,br as ac,Os as ad,ri as ae,oi as af,yr as ag,Qa as ah,Qs as ai,di as aj,Sr as ak,ii as al,li as am,Ts as an,Ka as ao,ui as ap,Xo as aq,Va as ar,fi as as,Co as b,Do as c,ws as d,$s as e,Ys as f,js as g,ks as h,Es as i,Is as j,As as k,Cs as l,Fs as m,Ps as n,Ls as o,lo as p,Xs as q,Bs as r,wr as s,Hs as t,Ws as u,Po as v,Ks as w,Yo as x,qs as y,Ho as z};
