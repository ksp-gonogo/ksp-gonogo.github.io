import{j as n}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./ext-react-RRA14VTW.js";import d,{css as re,keyframes as ln}from"./ext-styled-components-Br73TgY3.js";import{a3 as cn,g as dn,K as un,al as et,am as fn,U as pe,e as hn,Y as pn,V as mn,Z as gn,X as xn,an as vn,ac as bn,ao as yn,ap as tt,a9 as St,a6 as Mt,B as wn,H as Ye,c as $n,M as jn}from"./ToggleButton-DPxa4AHl.js";import{E as _n,a1 as Ae,m as kn,F as Tt,l as Ze,v as Rt,V as ze,a9 as He,a2 as $e,Z as Et,aB as Sn,_ as It,a4 as Fe,aA as At,aC as We,ae as Ft,aD as Te,az as Re,a5 as qe,f as Mn,a3 as me,d as Ue,T as Tn,af as Rn,G as En,k as In,ar as An,aE as Fn}from"./vesselMark-6FxUCp_5.js";import{G as je,N as de,R as Nt,I as Nn,t as Ge,w as Lt,j as Ve,i as Ln,k as Cn,a as ye,l as Ct,T as Dn,b as Pn,q as nt}from"./streamStatusWord-D6oBKFub.js";import{aV as rt,bV as On,aG as oe,k as Dt,bR as Bn,cl as zn,a$ as Je,T as Hn,bQ as Pt}from"./view-clock-formula-CheuF2SZ.js";import"./ksp-enum-names-CzHQA9S-.js";import{p as Wn}from"./screen-CHQ5sz9h.js";import{s as Un,x as Gn,f as we,c as Vn,m as Kn}from"./contributionsRead-DjQGc_CL.js";import{r as Xn}from"./ext-react-dom-CZVBhjGL.js";import{l as Yn}from"./capability-lock-Ck1T2CAW.js";import"./lagrange-DIZ9rpEW.js";import"./use-transmissions-iv9iBIlm.js";import{r as Zn}from"./control-frame-to-read-frame-a1RSeyjW.js";function ls({items:e,onSelect:t,onDismiss:r,"aria-label":o,style:a,header:s,footer:i,emptyLabel:l="No actions",otherLabel:c="Other"}){const u=h.useRef(null),p=h.useId(),[v,w]=h.useState(0),g=cn(e,c),f=g.flatMap(([,m])=>m),T=f.length;h.useEffect(()=>{const m=u.current;if(!m)return;if(T===0){m.focus();return}m.querySelectorAll('[role="menuitem"]')[v]?.focus()},[v,T]),h.useEffect(()=>{const m=_=>{const b=u.current;b&&_.target instanceof Node&&!b.contains(_.target)&&r()};return document.addEventListener("pointerdown",m),()=>document.removeEventListener("pointerdown",m)},[r]);const D=h.useCallback(m=>{if(m.key==="Escape"){m.stopPropagation(),r();return}if(m.key==="Tab"){r();return}if(f.length!==0)switch(m.key){case"ArrowDown":m.preventDefault(),w(_=>Math.min(_+1,f.length-1));break;case"ArrowUp":m.preventDefault(),w(_=>Math.max(_-1,0));break;case"Home":m.preventDefault(),w(0);break;case"End":m.preventDefault(),w(f.length-1);break}},[f.length,r]);return n.jsxs(qn,{ref:u,role:T>0?"menu":void 0,"aria-label":o,onKeyDown:D,tabIndex:-1,style:a,children:[s,f.length===0?n.jsx(_n,{layout:"fill",children:l}):g.map(([m,_],b)=>n.jsxs("div",{...g.length>1?{role:"group","aria-labelledby":`${p}-group-${b}`}:{role:"none"},children:[g.length>1?n.jsx(Jn,{id:`${p}-group-${b}`,"aria-hidden":"true",children:m}):null,_.map(R=>{const $=f.indexOf(R);return n.jsx(Qn,{type:"button",role:"menuitem","aria-label":R["aria-label"],"aria-disabled":R.disabled,$disabled:R.disabled,tabIndex:$===v?0:-1,onFocus:()=>w($),onClick:()=>{R.disabled||t(R.key)},children:R.label},R.key)})]},m)),i]})}const qn=d.div`
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
`,Jn=d.div`
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

  ${Ae}
  /* The background marks the focused row where the ring meets the menu border. */
  &:focus-visible {
    background: var(--color-border-subtle);
  }

  &[aria-disabled="true"] {
    color: var(--color-text-faint);
    cursor: default;
  }
`;function cs({settings:e,values:t,onChange:r}){return e.length===0?null:n.jsx(n.Fragment,{children:e.flatMap(o=>o.fields.map(a=>{const i=t?.[o.namespace]?.[a.key]??a.default,l=a.label??a.key,c=`augment-setting-${o.namespace}-${a.key}`;return a.type==="boolean"?n.jsx(kn,{children:n.jsx(dn,{checked:!!i,onChange:u=>r(o.namespace,a.key,u),label:l})},`${o.namespace}.${a.key}`):n.jsxs(Tt,{children:[n.jsx(Ze,{htmlFor:c,children:l}),n.jsx(Rt,{id:c,type:a.type==="number"?"number":"text",value:i===void 0?"":String(i),onChange:u=>{const p=u.target.value;if(a.type!=="number"){r(o.namespace,a.key,p);return}if(p===""){r(o.namespace,a.key,void 0);return}const v=Number(p);Number.isFinite(v)&&r(o.namespace,a.key,v)}})]},`${o.namespace}.${a.key}`)}))})}function ds({fallback:e,gap:t="related-dense",children:r,...o}){return n.jsxs(n.Fragment,{children:[n.jsx(Ot,{$gap:t,...o,children:r}),n.jsx(er,{children:e})]})}const Ot=d.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>je[e]};
`,er=d.div`
  ${Ot}:not(:empty) + & {
    display: none;
  }
`,at=12,ke=8;function tr(e,t,r){return{left:ot(e.x,t.w,r.w),top:ot(e.y,t.h,r.h)}}function ot(e,t,r){const o=e+at;if(o+t<=r-ke)return o;const a=e-at-t;return a>=ke?a:Math.max(ke,r-ke-t)}const nr="–";function us({min:e,max:t,wrapsAt:r,className:o,...a}){const s=rt(e),i=rt(t);return e==null||t==null||s===null||i===null?n.jsx(Ee,{className:o,children:de}):r!==void 0&&Math.abs(i-s)>=r/2?n.jsx(Ee,{className:o,children:"(precesses)"}):n.jsx(un,{of:e.unit,separate:!0,...a,children:n.jsx(rr,{min:e,max:t,className:o})})}function rr({min:e,max:t,className:r}){return et(e),et(t),fn(e)?n.jsx(Ee,{className:r,children:n.jsxs(or,{children:[n.jsx("span",{"aria-hidden":"true",children:"~"}),n.jsx(ze,{children:"approximately "}),n.jsx(pe,{value:e})]})}):n.jsxs(Ee,{className:r,children:[n.jsx(pe,{value:e}),n.jsx(ar,{"aria-hidden":"true",children:nr}),n.jsx(ze,{children:" to "}),n.jsx(pe,{value:t})]})}const Ee=d.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,ar=d.span`
  color: var(--color-text-faint);
`,or=d.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`;function sr({children:e,status:t,gap:r="related-packed",align:o="center"}){return n.jsxs(He,{align:o,gap:r,justify:"between",wrap:!0,children:[e,t]})}const Bt=d.div`
  color: var(--color-text-primary);
  font-weight: 600;
  /* One rung above the body the arrangement sets; both halves are declared here, so a site cannot break the step. */
  font-size: var(--font-size-value);
  line-height: var(--line-height-tight);
  /* A content-sized basis, so a long title wraps instead of running into the badge beside it. */
  flex: 1 1 auto;
  min-width: 0;
`,ir=d.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-record-lead);
  flex: 1 1 auto;
  min-width: 0;
`;function zt({left:e,right:t,children:r}){return n.jsx(sr,{align:"baseline",status:t,children:e==null?r:n.jsxs(ir,{children:[e,r]})})}const lr=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--gap-related);
`,Ht=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  flex: 1 1 var(--block-body-floor, 9rem);
  min-width: 0;
`,xe=d.div`
  min-width: 0;
  ${({$side:e})=>e?`flex: 0 0 auto;
    --radius-display-frame: var(--radius-display-frame-aside);`:""}
`,Wt=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-related);
  flex-wrap: wrap;
`,Qe=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  min-width: 0;
  /* The compact body size, declared here so the title stays one rung above it. */
  font-size: var(--font-size-compact);
`;function Ie(e,{title:t,titleAs:r,titleLeft:o,titleRight:a,left:s,right:i,top:l,bottom:c,footer:u,children:p,...v}){const w=t!=null||o!=null||a!=null,g=s!=null||i!=null,f=w&&n.jsx(zt,{left:o,right:a,children:t!=null&&n.jsx(Bt,{as:r,children:t})});return n.jsxs(e,{...v,children:[l!=null&&n.jsx(xe,{$side:!1,children:l}),g?n.jsxs(lr,{children:[s!=null&&n.jsx(xe,{$side:!0,children:s}),n.jsxs(Ht,{children:[f,p]}),i!=null&&n.jsx(xe,{$side:!0,children:i})]}):n.jsxs(n.Fragment,{children:[f,p]}),u!=null&&n.jsx(Wt,{children:u}),c!=null&&n.jsx(xe,{$side:!1,children:c})]})}const Ut={Title:Bt,TitleRow:zt,Body:Ht,Aside:xe,Footer:Wt};function cr({...e}){return Ie(Qe,e)}const fs=Object.assign(cr,Ut),dr={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function hs({surface:e,pad:t,bordered:r=!1,radius:o,children:a,...s}){return n.jsx(ur,{$surface:e,$pad:t,$bordered:r,$radius:o,...s,children:a})}const ur=d.div`
  ${({$surface:e})=>e&&`background: ${dr[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${Nt[e]};`}
  ${({$pad:e})=>e&&`padding: var(${Nn[e]});`}
`,ps=h.forwardRef(function({equalWidth:t=!0,gap:r,children:o,...a},s){return n.jsx(fr,{ref:s,$equalWidth:t,$gap:r,...a,children:o})}),fr=d.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?je[e]:"var(--gap-related)"};
`,hr="3px",pr=d(Qe)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${Ge(e)};`:""}
  ${({$identityColor:e})=>e?`
    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: var(--size-mark);
      height: ${hr};
      background: ${e};
      border-radius: var(--radius-regular) var(--radius-regular) 0 0;
    }
  `:""}
  ${({$dimmed:e,$tone:t})=>e?`
    --color-text-primary: var(--color-text-muted);
    color: var(--color-text-muted);
    ${t?`border-left-color: color-mix(in srgb, ${Ge(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function mr({tone:e,dimmed:t,identityColor:r,standalone:o,...a}){return Ie(pr,{...a,$tone:e,$dimmed:t,$identityColor:r,$standalone:o})}const ms=Object.assign(mr,Ut);function gr(e){const t=e.inFlight.filter(r=>r.predictedPhase==="overdue"||r.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const gs=h.forwardRef(function({label:t,icon:r,type:o,...a},s){return n.jsx("button",{ref:s,type:o??"button","aria-label":t,...a,children:n.jsx(Gt,{label:t,icon:r})})});function Gt({label:e,icon:t}){const r=h.useRef(null),o=h.useRef(null),[a,s]=h.useState(!0);return h.useLayoutEffect(()=>{const i=r.current,l=o.current;if(!i||!l)return;const c=()=>{s(l.scrollWidth<=i.clientWidth)};if(c(),typeof ResizeObserver>"u")return;const u=new ResizeObserver(c);return u.observe(i),u.observe(l),()=>u.disconnect()},[]),n.jsxs(xr,{ref:r,children:[n.jsx(vr,{ref:o,"aria-hidden":"true",children:e}),a?n.jsx(br,{"aria-hidden":"true",children:e}):n.jsx(yr,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const xr=d.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,vr=d.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,br=d.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,yr=d.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function wr({holds:e,label:t,spinnerSize:r=12}){return n.jsxs($r,{children:[n.jsx(jr,{"aria-hidden":"true",children:e}),n.jsx(_r,{children:n.jsx(hn,{size:r,"aria-label":t})})]})}const $r=d.span`
  display: inline-grid;
  & > * {
    grid-area: 1 / 1;
  }
`,jr=d.span`
  visibility: hidden;
`,_r=d.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,kr=4e3,st=8e3,Sr=3e4;function Vt(e,t){return e.gateFor?e.gateFor(t):e.gate}function Mr({handle:e,args:t,commandLabel:r,onConfirmed:o}){const[a,s]=h.useState("idle"),[i,l]=h.useState(null),[c,u]=h.useState(null),[p,v]=h.useState(!1),w=Vt(e,t),g=w?.blocked===!0,f=h.useRef(!0),T=h.useRef(0);h.useEffect(()=>()=>{f.current=!1},[]);const D=e.founds,m=h.useRef(!1),_=h.useRef(D?.length??0);h.useEffect(()=>{const y=D?.length??0,C=y>_.current;_.current=y;const j=D?.[y-1];!C||!j||!m.current||(m.current=!1,u(j),l(null),s("found"))},[D]),h.useEffect(()=>{if(a!=="armed")return;const y=setTimeout(()=>s("idle"),kr);return()=>clearTimeout(y)},[a]),h.useEffect(()=>{if(a!=="refused"&&a!=="lost"&&a!=="found")return;const y=setTimeout(()=>{s("idle"),l(null),u(null)},st);return()=>clearTimeout(y)},[a]),h.useEffect(()=>{if(!p)return;const y=setTimeout(()=>v(!1),st);return()=>clearTimeout(y)},[p]),h.useEffect(()=>{g||v(!1)},[g]),h.useEffect(()=>{if(a!=="pending")return;const y=setTimeout(()=>s("idle"),Sr);return()=>clearTimeout(y)},[a]);const b=h.useCallback(()=>{const y=T.current+1;T.current=y,s("pending"),l(null);const C=(j,E)=>{!f.current||T.current!==y||(l(E),s(j))};e.send(t,r?{label:r}:void 0).then(j=>{C("idle",null),o?.(j)},j=>{const E=On(j);if(E.kind==="lost"){m.current=!0,C("lost",null);return}if(E.kind!=="refused"){C("idle",null);return}C("refused",{errorCode:E.errorCode,reason:E.reason,command:E.command,args:E.args,label:E.label??r,breach:E.breach,detail:E.detail})})},[e,t,r,o]),{hasUnconfirmed:R,hasFailure:$}=gr(e),z=h.useCallback(y=>{if(a!=="pending"){if(g){v(!0);return}if(a==="refused"||a==="lost"||a==="found"){l(null),u(null),s("idle");return}if(y&&a!=="armed"){s("armed");return}b()}},[a,g,b]),L=a==="pending"||a==="refused"||a==="lost"||a==="found"?a:g?"blocked":a;return{phase:L,isPending:L==="pending",isArmed:L==="armed",isRefused:L==="refused",isLost:L==="lost",isFound:L==="found",isBlocked:L==="blocked",isShowingReason:L==="blocked"&&p,refusalText:i?gn(i):L==="blocked"&&w?xn({...w,label:w.label??r,args:w.args??t}):null,foundText:c?mn(c):null,lossText:L==="lost"?pn({args:t,label:r}):null,hasUnconfirmed:R,hasFailure:$,press:z}}function xs({handle:e,args:t,commandLabel:r,label:o,confirmLabel:a,pendingLabel:s="Working...",refusedLabel:i="Refused",lostLabel:l="No reply",foundLabel:c="Found",confirmAriaLabel:u,pendingAriaLabel:p,blockedAriaLabel:v,active:w,variant:g="ghost",tone:f="neutral",icon:T,confirmIcon:D,onPressReady:m,size:_="md",confirmTone:b="go",onConfirmed:R,disabled:$,title:z,"aria-label":L,...y}){const{phase:C,isPending:j,isArmed:E,isRefused:B,isLost:Y,isFound:X,isBlocked:U,isShowingReason:M,refusalText:P,foundText:F,lossText:W,hasUnconfirmed:se,hasFailure:G,press:H}=Mr({handle:e,args:t,commandLabel:r,onConfirmed:R});h.useEffect(()=>{if(!(!m||j))return m(H),()=>m(null)},[m,j,H]);const O=j?n.jsx(wr,{holds:o,label:s,spinnerSize:_==="sm"?10:12}):B?i:Y?l:X?c:M?P:E?a:o,te=T!==void 0&&typeof O=="string",V=te?n.jsx(Gt,{label:O,icon:E?D??T:T}):O,k=T===void 0&&typeof o=="string"&&typeof a=="string"&&!B&&!Y&&!X&&!M,ne=B?P:Y?W:X?F:null,ie=w===!0||E||B,ce=Tr({restTone:g==="primary"?f:"neutral",filled:ie,isRefused:B,isFound:X,isArmed:E,confirmTone:b,tone:f});return n.jsxs(n.Fragment,{children:[n.jsx($e,{text:F??P??(j?s:z),children:n.jsx(Ir,{type:"button",$tone:ce,$variant:g,$fit:te,$size:_,$pressed:ie,$armed:E,$blocked:U,"aria-pressed":w,"aria-busy":j||void 0,"aria-disabled":U||j||void 0,disabled:$,"data-unconfirmed":se?"true":void 0,"data-failed":G?"true":void 0,"data-command-phase":C,"data-gate":U?"blocked":Vt(e,t)?.undetermined?"undetermined":void 0,"aria-label":(B?P??void 0:Y?W??void 0:X?F??L:U?v??P??L:j?p??s:E?u:L)??(te?O:void 0),onClick:()=>H(a!==void 0),"data-rest-label":k?o:void 0,"data-armed-label":k?a:void 0,...y,children:k?n.jsx(Er,{children:V}):V})}),n.jsx(Et,{visuallyHidden:!0,children:ne})]})}function Tr(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const Rr=ln`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,Er=d.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,Ir=d(Sn)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&re`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Rr} 1s var(--ease-emphasis) infinite;
      }
    `}

  &:disabled {
    opacity: 0.5;
  }

  /* Dimmed toward the muted text token rather than faded, so the refusal reason stays readable; the warn border says the game refused. */
  ${({$blocked:e})=>e&&re`
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
`;function vs({oneWaySeconds:e,delayReading:t,className:r}){const o=oe("s",e);return n.jsxs(Ar,{className:r,role:"group","aria-label":"Signal delay",children:["one-way ~",n.jsx(pe,{value:vn(o,t),...o.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const Ar=d.div`
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
`;function bs(e){const t=bn(),r=h.useId(),o=e!==null;h.useEffect(()=>{if(!(!t||!e))return t.register({id:r,...e})},[t,r,o]),h.useEffect(()=>{!t||!e||t.update(r,e)},[t,r,e])}function ys({at:e,narrow:t,wide:r,children:o,...a}){return n.jsx(Fr,{$at:e,$narrow:t,$wide:r,...a,children:o})}const Fr=d.div`
  ${({$narrow:e})=>e}
  @container (min-width: ${({$at:e})=>e}px) {
    ${({$wide:e})=>e}
  }
`;function Nr(e,t){return e.value!==void 0?n.jsx(pe,{value:e.value(t)??null}):e.render(t)}function ws({columns:e,rows:t,sections:r,rowKey:o,caption:a,empty:s,rowDetail:i,className:l}){const c=r??(t?[{id:"",title:null,rows:[...t]}]:[]),u=c.reduce((f,T)=>f+T.rows.length,0),[p,v]=h.useState(null),w=yn(p),g=It(p);return n.jsxs(Lr,{className:l,children:[n.jsx(Cr,{ref:v,tabIndex:g,children:n.jsxs(Dr,{children:[n.jsx(Pr,{children:a}),n.jsx("thead",{children:n.jsx("tr",{children:e.map(f=>n.jsx(Or,{scope:"col",$align:f.align??"start",style:{width:f.width,minWidth:f.minWidth},children:f.header},f.key))})}),u===0&&s!==void 0&&n.jsx("tbody",{children:n.jsx("tr",{children:n.jsx(Ur,{colSpan:e.length,children:s})})}),c.map(f=>n.jsxs("tbody",{children:[f.title!==null&&f.title!==void 0&&n.jsx("tr",{children:n.jsx(Br,{scope:"rowgroup",colSpan:e.length,children:f.title})}),f.rows.map(T=>{const D=o(T),m=i?.(T),_=m!=null&&m!==!1&&m!=="";return n.jsxs(h.Fragment,{children:[n.jsx(zr,{$hasDetail:_,children:e.map(b=>n.jsx(Hr,{as:b.rowHeader?"th":void 0,scope:b.rowHeader?"row":void 0,$align:b.align??"start",children:Nr(b,T)},b.key))}),_?n.jsx("tr",{children:n.jsx(Wr,{colSpan:e.length,children:m})}):null]},D)})]},f.id))]})}),n.jsx(tt,{$position:"left",$visible:w.left}),n.jsx(tt,{$position:"right",$visible:w.right})]})}const Lr=d.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Cr=d.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${Ae}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Dr=d.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,Pr=d.caption`
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
`,Br=d.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,zr=d.tr`
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
`,Wr=d.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,Ur=d.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`,Gr=6,Vr=3,Le={track:8,hub:4,needle:.92},Kr={regular:{size:16,drop:18},large:{size:24,drop:32}};function ae(e,t,r,o){const a=o*Math.PI/180;return{x:e+r*Math.sin(a),y:t-r*Math.cos(a)}}function it(e,t,r,o,a){const s=ae(e,t,r,o),i=ae(e,t,r,a),l=a-o,c=Math.abs(l)>180?1:0,u=l>=0?1:0;return`M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${c} ${u} ${i.x.toFixed(2)} ${i.y.toFixed(2)}`}function $s({value:e,min:t,max:r,width:o=120,height:a=120,startAngle:s=0,sweep:i=360,wrap:l=!1,zones:c,ticks:u,valueLabel:p,readout:v,format:w,needleColor:g="var(--color-text-primary)",trackColor:f="var(--color-border-subtle)","aria-label":T}){const D=Fe(e),{shown:m,held:_,caption:b,band:R}=D,{anchor:$,tip:z}=At(b),L=m?.magnitude??Number.NaN,y=t.magnitude,C=r.magnitude,j=C-y,E=Number.isFinite(L)?L:y,B=j>0?l?y+((E-y)%j+j)%j:Math.max(y,Math.min(C,E)):y,Y=m!=null,X=m==null?null:{magnitude:B,unit:m.unit},U=p??(X===null?null:Lt(X,{format:w})),M=X===null?de:Ve(X,{format:w}),P=m==null||R===null?null:Dt(R,m.unit)??null,F=v!==void 0&&i<=180,W=F?Le.track:Gr,se=F?Le.hub:Vr,G=v===void 0?null:Kr[v],H=o/2,I=F&&G!==null?Math.min((o-W)/2,a-W-G.drop):Math.min(o,a)/2-W-2,O=F?I+W/2:a/2,te=S=>{const Z=j>0?(S-y)/j:0;return s+Z*i},V=S=>S.max(t).min(r),k=S=>te(S.magnitude),ne=S=>i!==0?(S-s)/i:0,ie=P!==null&&St(ne(te(B)),[ne(k(V(P.lo))),ne(k(V(P.hi)))],Mt({wraps:l}))?P:null,ce=i>=360,ue=ae(H,O,I*(F?Le.needle:.88),te(B));return n.jsxs(Xr,{...qe(D),...$,...Y?{role:"meter","aria-label":Re(T,b),...Te(b),"aria-valuenow":B,"aria-valuemin":y,"aria-valuemax":C,"aria-valuetext":M}:{role:"img","aria-label":Re(`${T}: ${M}`,b),...Te(b)},children:[n.jsxs("svg",{width:o,height:a,viewBox:`0 0 ${o} ${a}`,"aria-hidden":"true",style:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[I>0&&(ce?n.jsx("circle",{cx:H,cy:O,r:I,fill:"none",stroke:f,strokeWidth:W}):n.jsx("path",{d:it(H,O,I,s,s+i),fill:"none",stroke:f,strokeWidth:W,strokeLinecap:"round"})),I>0&&!ce&&c?.flatMap(S=>{const Z=V(S.from.min(S.to)),K=V(S.from.max(S.to));return K.greaterThan(Z)?[Z.greaterThan(t)?null:s,r.greaterThan(K)?null:s+i].flatMap(J=>{if(J===null)return[];const le=ae(H,O,I,J);return[n.jsx("circle",{"data-dial-cap":"",cx:le.x,cy:le.y,r:W/2,fill:S.color},`cap-${S.color}-${J}`)]}):[]}),I>0&&c?.map(S=>{const Z=V(S.from.min(S.to)),K=V(S.from.max(S.to));return K.greaterThan(Z)?n.jsx("path",{d:it(H,O,I,k(Z),k(K)),fill:"none",stroke:S.color,strokeWidth:W,strokeLinecap:"butt"},`zone-${S.color}-${k(Z)}-${k(K)}`):null}),I>0&&u?.map(S=>{const Z=S.value.magnitude,K=te(Z),J=ae(H,O,I,K),le=ae(H,O,I-W,K),x=ae(H,O,I-W-8,K);return n.jsxs("g",{children:[n.jsx("line",{x1:le.x,y1:le.y,x2:J.x,y2:J.y,stroke:"var(--color-text-faint)",strokeWidth:1}),S.label&&n.jsx("text",{x:x.x,y:x.y,textAnchor:"middle",dominantBaseline:"middle",fontSize:9,fill:"var(--color-text-faint)",children:S.label})]},`tick-${Z}-${S.label??""}`)}),I>0&&ie!==null&&["lo","hi"].map(S=>{const Z=k(V(ie[S])),K=ae(H,O,I-W/2,Z),J=ae(H,O,I+W/2,Z);return n.jsx(We,{end:S,x1:K.x,y1:K.y,x2:J.x,y2:J.y},S)}),I>0&&Y&&n.jsxs(n.Fragment,{children:[n.jsx("line",{x1:H,y1:O,x2:ue.x,y2:ue.y,stroke:g,strokeWidth:2,strokeLinecap:"round"}),n.jsx("circle",{cx:H,cy:O,r:se,fill:g})]}),n.jsxs("text",{x:H,y:F&&G!==null?O+G.drop:O+I*.55,textAnchor:"middle",fontSize:F&&G!==null?G.size:13,fontWeight:F?void 0:"bold",fill:U===null?"var(--color-text-muted)":"var(--color-text-primary)",children:[U??de,_&&U!==null&&n.jsx(Ft,{size:F?7:6,figureSize:F&&G!==null?G.size:13})]})]}),z]})}const Xr=d.div`
  display: block;
  max-width: 100%;
`;function js({label:e,children:t,"aria-label":r,className:o,variant:a="popover",panelHeight:s="cap",chevron:i=!0,asButton:l=!1,buttonSize:c="md",defaultOpen:u=!1}){const[p,v]=h.useState(u),w=h.useId(),g=h.useRef(null),[f,T]=h.useState(null),D=It(f),m=a==="inline"&&i,_=typeof e=="function"?e(p):e,b={ref:g,type:"button","aria-expanded":p,"aria-controls":w,"aria-label":r,onClick:()=>v($=>!$)},R=n.jsxs(n.Fragment,{children:[_,m&&n.jsx(Jr,{$open:p,children:n.jsx(Mn,{size:"var(--icon-size-control)"})})]});return n.jsxs(Yr,{className:o,$variant:a,onKeyDown:$=>{$.key==="Escape"&&p&&(v(!1),g.current?.focus())},children:[l?n.jsx(qr,{...b,variant:"ghost",size:c,$inline:a==="inline",children:R}):n.jsx(Zr,{...b,$variant:a,$align:a==="inline"&&!i?"end":"between",children:R}),p&&n.jsx(Qr,{ref:T,id:w,role:"group",tabIndex:D,$variant:a,$panelHeight:s,children:t})]})}const Yr=d.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,Zr=d.button`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-glyph);
  padding: var(--inset-glyph-button);
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  ${({$variant:e,$align:t})=>e==="inline"&&re`
      justify-content: ${t==="end"?"flex-end":"space-between"};
      width: 100%;
      border-radius: var(--radius-regular);
      &:hover {
        background: var(--color-surface-sunken);
      }
    `}
  ${me}
`,qr=d(Ue)`
  ${({$inline:e})=>e&&re`
      align-self: flex-end;
    `}
`,Jr=d.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,Qr=d.div`
  ${({$variant:e})=>e==="popover"?re`
          position: absolute;
          top: 100%;
          right: 0;
          /* Local sibling ordering: lifts the popped panel above following rows, off the app z ladder. */
          z-index: 1;
          margin-top: var(--gap-disclosure);
        `:re`
          position: static;
          width: 100%;
          margin-top: var(--gap-disclosure);
        `}
  /* An accordion body grows in flow up to a cap, then scrolls, never spilling past the row below. */
  ${({$variant:e,$panelHeight:t})=>e==="inline"&&t==="cap"?re`
          max-height: 16rem;
          overflow-y: auto;
          ${Ae}
        `:""}
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function _s({space:e,...t}){return n.jsx(ea,{$space:e,...t})}const ea=d.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${je[e]} 0`:"0"};
`,ta=160,na=24,ra="...";function ks({children:e,limit:t=ta,subject:r,className:o}){const[a,s]=h.useState(!1),i=h.useId(),l=aa(e,t);if(l===void 0)return n.jsx(n.Fragment,{children:e});const c=a?"Show less":"Show more";return n.jsxs(oa,{className:o,children:[n.jsx("span",{id:i,children:a?e:`${l}${ra}`})," ",n.jsx(sa,{type:"button","data-expandable-toggle":"","aria-controls":i,"aria-expanded":a,"aria-label":r===void 0?void 0:`${c} of ${r}`,onClick:()=>s(u=>!u),children:c})]})}function aa(e,t){if(e.length<=t+na)return;const r=e.lastIndexOf(" ",t);return r<=0?e.slice(0,t):e.slice(0,r)}const oa=d.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,sa=d(Tn)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function Ss(e,t){const r=t.map(s=>s==null?null:Wn(e,s.index)),o=r.length>0&&r.every(s=>s?.currency==="exact"),a=r.reduce((s,i)=>i?.currency!=="held"||i.asOfUt===null?s:s===null?i.asOfUt:Math.min(s,i.asOfUt),null);return s=>{const i=o?Bn(s):s;return a===null?i:{state:"held",value:i,asOfUt:oe("ut",a),grade:"held",reckoning:{status:"none"}}}}function Ms({grow:e=!1,children:t,...r}){return n.jsx(ia,{$grow:e,...r,children:t})}const ia=d.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0;

  ${({$grow:e})=>e?"flex: 1 1 auto;":`
    height: 100%;
    width: 100%;
  `}
`;function la({anchor:e,style:t,children:r,...o}){const[a,s]=h.useState(null),[i,l]=h.useState(null),c=h.useRef(e);c.current=e;const u=h.useCallback(()=>{if(!a)return;const p=c.current,v=typeof p=="function"?p():p;if(!v)return;const w=a.getBoundingClientRect(),g=tr(v,{w:w.width,h:w.height},{w:window.innerWidth,h:window.innerHeight});l(f=>f&&f.left===g.left&&f.top===g.top?f:g)},[a]);return h.useLayoutEffect(()=>{u()}),h.useLayoutEffect(()=>{if(!a)return;const p=typeof ResizeObserver>"u"?null:new ResizeObserver(u);return p?.observe(a),window.addEventListener("resize",u),window.addEventListener("scroll",u,!0),()=>{p?.disconnect(),window.removeEventListener("resize",u),window.removeEventListener("scroll",u,!0)}},[a,u]),typeof document>"u"?null:Xn.createPortal(n.jsx(ca,{ref:s,style:{...t,left:i?.left??0,top:i?.top??0,visibility:i===null?"hidden":t?.visibility},...o,children:r}),document.body)}const ca=d.div`
  position: fixed;
  z-index: var(--z-dropdown);
`;function Ts({grade:e,subject:t,size:r}){const o=Ln(e);return n.jsx($e,{text:t===void 0?void 0:`${t}: ${o}`,focusable:!0,children:n.jsx(wn,{tone:Un(e),size:r,children:o})})}const da=120;function Rs({trigger:e,"aria-label":t,children:r}){const[o,a]=h.useState(!1),s=h.useRef(null),i=h.useRef(null),l=h.useId(),c=h.useCallback(()=>{i.current!==null&&(clearTimeout(i.current),i.current=null)},[]),u=()=>{c(),a(!0)},p=()=>{c(),i.current=setTimeout(()=>a(!1),da)},v=h.useCallback(()=>{c(),a(!1)},[c]);h.useEffect(()=>c,[c]),h.useEffect(()=>{if(!o)return;const g=f=>{f.key==="Escape"&&v()};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[o,v]);const w=()=>{const g=s.current?.getBoundingClientRect();return g?{x:g.left,y:g.bottom}:null};return n.jsxs(n.Fragment,{children:[n.jsx(ua,{ref:s,type:"button","aria-label":t,"aria-describedby":o?l:void 0,onPointerEnter:u,onPointerLeave:p,onFocus:u,onBlur:v,children:e}),o&&n.jsx(la,{anchor:w,onPointerEnter:c,onPointerLeave:p,children:n.jsx(fa,{id:l,role:"tooltip",children:r})})]})}const ua=d.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${me}
`,fa=d.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function Es({gap:e,inset:t=!1,wrap:r=!1,children:o,...a}){return n.jsx(ha,{$gap:e,$inset:t,$wrap:r,...a,children:o})}const ha=d.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?je[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,pa=4,ma=80,lt=60,ga=30,Ke=24,xa=32,ct=56,dt=Ke;function Ce(e,t,r){const{min:o,max:a,step:s}=t,i=e+r*s,l=Math.min(a,Math.max(o,i));if(!Number.isFinite(o))return l;const c=o+Math.round((l-o)/s)*s;return Math.min(a,Math.max(o,c))}function va(e){const{value:t,min:r,max:o,step:a,orientation:s="horizontal",onChange:i,format:l,"aria-label":c,label:u=c,disabled:p=!1,width:v,height:w}=e,g=s==="vertical",f=Math.max(Ke,v??(g?dt:ct)),T=Math.max(Ke,w??(g?ct:dt)),D=e.mode==="rate",m=r??Number.NEGATIVE_INFINITY,_=o??Number.POSITIVE_INFINITY,b={min:m,max:_,step:a},R=h.useRef(null),$=h.useRef(t);$.current=t;const[z,L]=h.useState(0),y=l?l(t):String(Math.round(t)),C=_>m&&Number.isFinite(_-m)?(t-m)/(_-m):.5,j=M=>{p||M!==t&&i(M)};h.useEffect(()=>{if(!D||z===0||p)return;const M=(e.mode==="rate"?e.stepsPerSecond:void 0)??ga,P=setInterval(()=>{const F=$.current+z*M*a*(lt/1e3);i(F)},lt);return()=>clearInterval(P)},[D,z,p,a,i,e]);const E=M=>{if(p)return;let P=null;switch(M.key){case"ArrowRight":case"ArrowUp":P=Ce(t,b,1);break;case"ArrowLeft":case"ArrowDown":P=Ce(t,b,-1);break;case"Home":if(!Number.isFinite(m))return;P=m;break;case"End":if(!Number.isFinite(_))return;P=_;break;default:return}M.preventDefault(),j(P)},B=M=>s==="vertical"?M.clientY:M.clientX,Y=M=>{p||(R.current={start:B(M),startValue:t},M.currentTarget.setPointerCapture(M.pointerId))},X=M=>{if(p||!R.current)return;const P=s==="vertical"?R.current.start-B(M):B(M)-R.current.start;if(D){const W=P/ma;L(Math.max(-1,Math.min(1,W)));return}const F=P/pa;j(Ce(R.current.startValue,b,F))},U=M=>{R.current&&(R.current=null,L(0),M.currentTarget.hasPointerCapture(M.pointerId)&&M.currentTarget.releasePointerCapture(M.pointerId))};return n.jsxs(ba,{children:[u!==!1&&n.jsx(ya,{"aria-hidden":"true",children:u}),n.jsxs(wa,{role:"slider","aria-label":c,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":r,"aria-valuemax":o,"aria-valuetext":y,"aria-disabled":p||void 0,tabIndex:p?-1:0,$orientation:s,$disabled:p,$width:f,$height:T,$compact:(g?f:T)<xa,onKeyDown:E,onPointerDown:Y,onPointerMove:X,onPointerUp:U,onPointerCancel:U,children:[n.jsx($a,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-C)*100}%)`}:{transform:`translateX(${(.5-C)*100}%)`},"aria-hidden":"true"}),n.jsx(ja,{$orientation:s,"aria-hidden":"true"}),n.jsx(_a,{"aria-hidden":"true",children:y})]})]})}const ba=d.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,ya=d.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,wa=d.div`
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

  ${me}
`,$a=d.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,ja=d.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,_a=d.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function Is({lock:e}){const t=zn(e)?ka(e):e,r=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return n.jsx($e,{text:r,focusable:!0,children:n.jsxs(Ma,{role:"status","aria-label":r,children:[n.jsx(Rn,{}),n.jsx(Ta,{children:Sa(t)})]})})}function ka(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...Yn(t,Gn),locks:t}}function Sa(e){const t=[...new Set(e.locks.flatMap(r=>r.missing.map(o=>o.name)))];return t.length>0?t.join(", "):e.reason}const Ma=d.span`
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
`,Ta=d.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ut=1.4,ft=1.7,Ra="var(--icon-size-standalone)",Ea=1.8,Se="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",ht="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",pt="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",mt="M7 4.5V19.5M17 4.5V19.5",fe=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,Kt={prograde:{colour:"prograde",paths:[Se,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[Se,fe(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",fe(12,11)]},radialOut:{colour:"radial",paths:[ht,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[ht,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",fe(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",fe(12,12)]},relativePlus:{colour:"target",paths:[Se,pt],dot:[12,12]},relativeMinus:{colour:"target",paths:[Se,pt,fe(12,12)]},parallelPlus:{colour:"target",paths:[mt],dot:[12,12]},parallelMinus:{colour:"target",paths:[mt,fe(12,12)]}},As=Object.keys(Kt);function gt({shape:e,colour:t,strokeWidth:r,dotRadius:o}){return n.jsxs("g",{fill:"none",stroke:t,strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(a=>n.jsx("path",{d:a},a)),e.dot&&n.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:o,fill:t,stroke:"none"})]})}function Q(e,t){const r=Kt[e],o=`var(--color-marker-${r.colour})`,a=h.forwardRef(({size:s=Ra,strokeWidth:i=Ea,label:l,...c},u)=>{const p={ref:u,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24","data-marker":e},v=n.jsxs(n.Fragment,{children:[n.jsx(gt,{shape:r,colour:"currentColor",strokeWidth:i+ut,dotRadius:ft+ut/2}),n.jsx(gt,{shape:r,colour:o,strokeWidth:i,dotRadius:ft})]});return l?n.jsx("svg",{...p,role:"img","aria-label":l,...c,children:v}):n.jsx("svg",{...p,"aria-hidden":"true",...c,children:v})});return a.displayName=t,a}const Xt=Q("prograde","ProgradeIcon"),Ia=Q("retrograde","RetrogradeIcon"),Yt=Q("normal","NormalIcon"),Aa=Q("antiNormal","AntiNormalIcon"),Fa=Q("radialOut","RadialOutIcon"),Zt=Q("radialIn","RadialInIcon"),Na=Q("maneuver","ManeuverIcon"),La=Q("target","TargetIcon"),Ca=Q("antiTarget","AntiTargetIcon"),Da=Q("relativePlus","RelativePlusIcon"),Pa=Q("relativeMinus","RelativeMinusIcon"),Oa=Q("parallelPlus","ParallelPlusIcon"),Ba=Q("parallelMinus","ParallelMinusIcon"),Fs=Xt,Ns=Zt,Ls=Yt,Cs={prograde:Xt,retrograde:Ia,normal:Yt,antiNormal:Aa,radialOut:Fa,radialIn:Zt,maneuver:Na,target:La,antiTarget:Ca,relativePlus:Da,relativeMinus:Pa,parallelPlus:Oa,parallelMinus:Ba};function za(e){if(e.frame==="scet")return{token:"SCET",spoken:"spacecraft event time",title:"Spacecraft event time: when this happens at the craft"};const{vantage:t}=e;return t===void 0?{token:"RECEIVED",spoken:"received",title:"When the telemetry showing this arrives"}:{token:`AT ${t}`,spoken:`received at ${t}`,title:`When the telemetry showing this arrives at ${t}`}}const Ha=d.span`
  font-size: max(0.72em, 10px);
  opacity: 0.72;
  white-space: nowrap;
  text-transform: none;
`;function Ds({value:e,context:t}){const o=Fe(typeof e=="number"?void 0:e),{shown:a,held:s,caption:i}=o,l=typeof e=="number"?e:a?.magnitude,c=qe({...o,shown:l}),u=t&&za(t),p=Cn(l??Number.NaN);return n.jsxs(n.Fragment,{children:[s?n.jsx(Ye,{...c,caption:i,children:p}):n.jsx("span",{"data-figure":c["data-figure"],children:p}),u&&n.jsxs(n.Fragment,{children:[" ",n.jsx($e,{text:u.title,focusable:!0,children:n.jsxs(Ha,{children:[n.jsx("span",{"aria-hidden":"true",children:u.token}),n.jsx(ze,{children:u.spoken})]})})]})]})}function qt(e){const{year:t,day:r,hour:o,minute:a}=Je(),s=Number.isFinite(e)?Math.max(0,e):0,i=Math.floor(s/t)+1,l=s%t,c=Math.floor(l/r)+1,u=l%r;return{year:i,day:c,hour:Math.floor(u/o),minute:Math.floor(u%o/a),second:Math.floor(u%a)}}const Wa={year:1,day:1,hour:0,minute:0,second:0};function Ua(e){const{year:t,day:r,hour:o,minute:a}=Je();return(e.year-1)*t+(e.day-1)*r+e.hour*o+e.minute*a+e.second}function Me(e){return Lt(oe("s",e))}function Ga({value:e,onChange:t,label:r,disabled:o,steps:a}){const s=h.useId(),i=`${s}-absent`,l=e!==null&&Number.isFinite(e)?e:null,c=l===null?null:qt(l),u=Je(),p=a??[u.minute,10*u.minute,u.hour,u.day],[v,w]=h.useState(null),g=(f,T,D,m)=>n.jsxs(we,{gap:"caption",children:[n.jsx(Ze,{htmlFor:`${s}-${f}`,children:T}),n.jsx(Rt,{id:`${s}-${f}`,type:"number",inputMode:"numeric","aria-label":`${r} ${T}`,"aria-describedby":c===null?i:void 0,min:D,step:1,style:{width:m},disabled:o,placeholder:c===null?de:void 0,value:v?.key===f?v.text:c===null?"":String(c[f]),onBlur:()=>w(null),onChange:_=>{const b=_.target.value;if(w({key:f,text:b}),b.trim()==="")return;const R=Number(b);Number.isFinite(R)&&t(Ua({...c??Wa,[f]:R}))}})]},f);return n.jsxs(we,{gap:"related-dense",role:"group","aria-label":r,children:[n.jsxs(He,{gap:"related-dense",wrap:!0,justify:"start",children:[g("year","YEAR",1,"5rem"),g("day","DAY",1,"5rem"),g("hour","HR",0,"4rem"),g("minute","MIN",0,"4rem"),g("second","SEC",0,"4rem")]}),c===null&&n.jsx(ye,{id:i,level:"muted",size:"sm",children:`${de} no ${r.toLowerCase()} to show. Type one to state it.`}),p.length===0?null:n.jsxs(He,{gap:"related-packed",wrap:!0,justify:"start",children:[n.jsx(ye,{level:"faint",size:"sm",children:"NUDGE"}),p.map(f=>n.jsx(Ue,{variant:"ghost",size:"sm",disabled:o||l===null,"aria-label":`${r} earlier by ${Me(f)}`,onClick:()=>l!==null&&t(l-f),children:`-${Me(f)}`},`minus-${f}`)),p.map(f=>n.jsx(Ue,{variant:"ghost",size:"sm",disabled:o||l===null,"aria-label":`${r} later by ${Me(f)}`,onClick:()=>l!==null&&t(l+f),children:`+${Me(f)}`},`plus-${f}`))]})]})}const xt=d(Qe)`
  --gap-related: var(--gap-related-comfortable);
  --bleed-inline: 0px;

  background: var(--color-surface-sunken);
  border: 1px solid ${({$tone:e})=>Ge(e)};
  border-radius: var(--radius-regular);
  /* A banner is its own strip of the screen, so it takes the roomier inset. */
  padding: var(--inset-surface-standalone);
`;function Ps({tone:e="warn",assertive:t=!1,role:r,children:o,...a}){const s=h.useRef(null),[i,l]=h.useState("");if(h.useEffect(()=>{const u=s.current;if(t||r!==void 0||u===null)return;const p=Va(u);l(v=>v===p?v:p)}),t)return Ie(xt,{...a,children:o,role:r??"alert","aria-live":r===void 0?"assertive":void 0,$tone:e});const c=Ie(xt,{...a,children:o,ref:s,role:r??"note",$tone:e});return r!==void 0?c:n.jsxs(n.Fragment,{children:[c,n.jsx(Et,{visuallyHidden:!0,children:i})]})}function Va(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let o=r.nextNode();o!==null;o=r.nextNode())t.push(o.textContent??"");return t.join(" ").replace(/\s+/g," ").trim()}function Os({id:e,label:t,value:r,options:o,onChange:a,hint:s}){const i=o.findIndex(l=>Zn(l.choice,r));return n.jsxs(Tt,{children:[n.jsx(Ze,{htmlFor:e,children:t}),n.jsxs(En,{id:e,value:i===-1?"":String(i),onChange:l=>{const c=o[Number(l.target.value)];c!==void 0&&a(c.choice)},children:[i===-1&&n.jsx("option",{value:"",disabled:!0}),o.map((l,c)=>n.jsx("option",{value:c,children:l.label},`${l.choice.kind}-${l.choice.bodyIndex??"none"}`))]}),s!==void 0&&n.jsx(In,{children:s})]})}function Ka({as:e,interactive:t=!1,selected:r=!1,wrap:o=!1,nested:a=!1,type:s,children:i,...l}){return n.jsx(Ya,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:r,$wrap:o,$nested:a,...l,children:i})}const Jt=d.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,Xa="min(12ch, 100%)",Ya=d.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-row);
  font-size: var(--font-size-compact);
  padding: var(--inset-row);
  ${({$wrap:e})=>e?`
  flex-wrap: wrap;
  row-gap: var(--gap-row-wrap);

  & > ${Jt} {
    min-width: ${Xa};
  }
`:""}
  ${({$interactive:e})=>e?re`
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

  ${Ae}
`:""}
  ${({$interactive:e,$selected:t})=>e&&t?`
  ${Ct("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}
`,Bs=Object.assign(Ka,{Name:Jt}),Za=65,Qt=38,qa=72,Ja=qa-Qt,en=55,Xe=137.508,Qa=10,eo=1.5,to=64,no=60,ro=241,ao=Xe-Math.floor(Xe),ve=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function tn(e,t){const r=Math.abs(e-t)%360;return r>180?360-r:r}const oo=ve.map((e,t)=>{let r=1/0;for(let a=0;a<ve.length;a++)a!==t&&(r=Math.min(r,tn(e.hue,ve[a].hue)));const o=r/2;return Math.max(0,Math.min(Qa,o-eo))}),so=ve.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:oo[t]}));function io(e,t=ve){return t.find(r=>r.aliases.some(o=>e.includes(o)))}function nn(e){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function vt(e,t){return(e%t+t)%t}function lo(e){const r=nn(`light:${e}`)/4294967295;return Qt+r*Ja}function co(e){const t=io(e);if(!t)return;const r=t.aliases.length===1?en:lo(e);return{hue:t.hue,lightness:r}}function uo(e){return so.some(({centre:t,radius:r})=>tn(e,t)<r)}function fo(e){const t=nn(e);let r=vt(t*Xe,360);const o=no+(t>>>8)%ro+ao;let a=0;for(;uo(r)&&a<to;)r=vt(r+o,360),a++;return r}function zs(e){const t=e.trim().toLowerCase(),r=co(t),o=r?.hue??fo(t),a=r?.lightness??en;return`hsl(${Math.round(o)}deg ${Za}% ${Math.round(a)}%)`}function Hs({selected:e,gap:t="caption",layout:r="stack",selectedLook:o="fill",children:a,...s}){return n.jsx(ho,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:r,$look:o,...s,children:a})}const ho=d.button`
  display: flex;
  ${({$layout:e})=>e==="split"?re`
          justify-content: space-between;
          align-items: baseline;
          > :first-child {
            flex: 1;
            min-width: 0;
          }
        `:re`
          flex-direction: column;
        `}
  gap: ${({$gap:e})=>je[e]};
  width: 100%;
  text-align: left;
  padding: var(--inset-selectable-row);
  border-radius: ${Nt.regular};
  border: 1px solid
    ${({$selected:e,$look:t})=>e?t==="outline"?"var(--color-accent-fg)":"transparent":"var(--color-border-subtle)"};
  ${({$selected:e,$look:t})=>e?t==="outline"?"background: var(--color-surface-raised); color: inherit;":Ct("go"):"background: transparent; color: inherit;"}
  cursor: pointer;
  font-family: inherit;

  ${({$selected:e})=>e?"":re`
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

  ${me}
`,po=h.forwardRef(function(t,r){return n.jsx(mo,{ref:r,type:"range",...t})}),mo=d.input`
  width: 100%;
  min-width: 0;
  margin: 0;
  background: none;
  accent-color: var(--color-accent-fg);
  cursor: pointer;

  ${me}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function go({label:e,children:t,detail:r,tone:o="neutral",...a}){return n.jsxs(xo,{...a,children:[n.jsx(vo,{children:e}),n.jsx(bo,{$tone:o,children:t}),r!=null&&n.jsx(yo,{children:r})]})}const xo=d.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,vo=d.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,bo=d.dd`
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
`,yo=d.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function Ws({slot:e}){const t=Vn(e);return t.length===0?null:n.jsx(n.Fragment,{children:t.map(r=>n.jsx(go,{label:r.label,detail:r.detail,tone:r.tone??"neutral",children:n.jsx(wo,{entry:r})},r.id))})}function wo({entry:e}){if(e.value!==void 0)return n.jsx(pe,{value:e.value});if(e.text===void 0)return n.jsx(Pn,{});const t=An(e.held);return t===null?n.jsx(n.Fragment,{children:e.text}):n.jsx(Ye,{kind:t.kind,caption:t.caption,children:e.text})}const $o=9,he=12,jo=12,bt=52,q=10,De=4;function _o(e,t,r){const o=i=>e.map(l=>Number.parseFloat(i.mark(l).replace(/[^\d.-]/g,""))),a=o(r(De)),s=i=>o(i).every((l,c)=>l===a[c]);if(s(t))return t;for(let i=0;i<De;i++){const l=r(i);if(s(l))return l}return r(De)}function Us({labelSide:e="left",value:t,min:r,max:o,width:a=92,height:s=220,fillHeight:i=!1,tickStep:l,zones:c,markers:u,groundLine:p,seaLevel:v,format:w,"aria-label":g}){const f=h.useRef(null),[T,D]=h.useState(s);h.useEffect(()=>{if(!i)return;const x=f.current;if(!x)return;const N=()=>{const ee=x.clientHeight;ee>0&&D(ee)};N();const A=new ResizeObserver(N);return A.observe(x),()=>A.disconnect()},[i]);const m=i?T:s,_=Fe(t),{shown:b,held:R,caption:$,band:z}=_,{anchor:L,tip:y}=At($),C=b?.magnitude??Number.NaN,j=r.magnitude,E=o.magnitude,B=E-j,Y=Number.isFinite(C)?C:j,X=B>0?Math.max(j,Math.min(E,Y)):j,U=b!=null,M=nt(o,{format:w}),P=b==null?de:Ve({magnitude:Y,unit:b.unit},{format:M.rung}),F=x=>Ve(x),W=[...(u??[]).flatMap(x=>x.label===void 0?[]:[x.bounds===void 0?`${x.label} ${F(x.value)}`:`${x.label} ${F(x.value)}, between ${F(x.bounds.lo)} and ${F(x.bounds.hi)}`]),...(c??[]).flatMap(x=>x.label===void 0?[]:[`${x.label} zone ${F(x.from.min(x.to))} to ${F(x.from.max(x.to))}`]),...p===void 0?[]:[`ground ${F(p)}`],...v===void 0?[]:[`sea level ${F(v)}`]],se=b==null||z===null?null:Dt(z,b.unit)??null,G=Math.max(0,m-he-jo),H=x=>{if(!(B>0))return he+G;const N=Math.max(0,Math.min(1,(x-j)/B));return he+(1-N)*G},I=x=>H(x.magnitude),O=he,te=he+G,V=e==="right",k=V?a-bt-q:bt,ne=V?k+q+6:k-6,ie=V?"start":"end",ce=(x,N)=>{const A=I(x),ee=x.greaterThan(o)?-1:x.lessThan(r)?1:0,ge=k-4,_e=k+q+4,Ne=k+q/2;return n.jsxs("g",{"data-level":N?"sea":"ground",children:[n.jsx("line",{x1:ge,y1:A,x2:_e,y2:A,stroke:N?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:N?1.5:2,strokeDasharray:N?"3 2":void 0}),ee!==0&&n.jsx("polygon",{"data-off-scale":"true",points:`${Ne-4},${A-ee*2} ${Ne+4},${A-ee*2} ${Ne},${A+ee*4}`,fill:N?"var(--color-info-mark)":"var(--color-text-primary)"})]})},ue=[],S=l?.magnitude??0;if(S>0&&B>0){const x=Math.ceil(j/S),N=Math.floor(E/S+1e-9);for(let A=x;A<=N;A++)ue.push(A===0?0:A*S)}const Z=_o(ue,M,x=>nt(o,{format:w,decimals:x})),K=H(X),J=x=>G>0?(he+G-x)/G:0,le=se!==null&&St(J(K),[J(I(se.lo)),J(I(se.hi))],Mt())?se:null;return n.jsxs(ko,{ref:f,...qe(_),...L,...U?{role:"meter","aria-label":Re(g,$),...Te($),"aria-valuenow":X,"aria-valuemin":j,"aria-valuemax":E,"aria-valuetext":W.length===0?P:`${P}; ${W.join("; ")}`}:{role:"img","aria-label":Re(`${g}: ${P}`,$),...Te($)},style:i?{height:"100%"}:void 0,children:[n.jsxs("svg",{width:a,height:m,viewBox:`0 0 ${a} ${m}`,"aria-hidden":"true",style:i?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[n.jsx("rect",{x:k,y:O,width:q,height:G,rx:2,fill:"var(--color-surface-raised)"}),c?.map(x=>{const N=I(x.from.max(x.to)),A=I(x.from.min(x.to)),ee=Math.max(0,A-N);return n.jsx("g",{children:n.jsx("rect",{x:k,y:N,width:q,height:ee,fill:x.color??"var(--color-warn-mark)",opacity:.55})},`zone-${A}-${N}-${x.label??""}`)}),v!==void 0&&B>0&&ce(v,!0),p!==void 0&&B>0&&ce(p,!1),ue.map(x=>{const N=H(x),A=U&&Math.abs(N-Math.max(O+4,Math.min(te-4,K)))<$o;return n.jsxs("g",{children:[n.jsx("line",{x1:V?k+q+4:k-4,y1:N,x2:V?k+q:k,y2:N,stroke:"var(--color-border-subtle)",strokeWidth:1}),!A&&n.jsx("text",{x:ne,y:N,textAnchor:ie,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:Z.mark(x)})]},`tick-${x}`)}),u?.map(x=>{const{bounds:N}=x,A=I(x.value),ee=x.color??"var(--color-accent-fg)";return n.jsxs("g",{"data-marker":x.label,children:[n.jsx("line",{x1:k,y1:A,x2:k+q,y2:A,stroke:ee,strokeWidth:2,strokeDasharray:"2 2"}),n.jsx("polygon",{points:V?`${k},${A} ${k-5},${A-3} ${k-5},${A+3}`:`${k+q},${A} ${k+q+5},${A-3} ${k+q+5},${A+3}`,fill:"none",stroke:ee,strokeWidth:1.5}),N!==void 0&&["lo","hi"].map(ge=>{const _e=I(N[ge]);return n.jsx(We,{end:ge,x1:k,y1:_e,x2:k+q,y2:_e},ge)})]},`marker-${A}-${x.label??""}`)}),le!==null&&["lo","hi"].map(x=>{const N=I(le[x]);return n.jsx(We,{end:x,x1:k,y1:N,x2:k+q,y2:N},x)}),U&&n.jsxs(n.Fragment,{children:[n.jsx("line",{x1:k-6,y1:K,x2:k+q+6,y2:K,stroke:"var(--color-accent-fg)",strokeWidth:2}),n.jsxs("text",{x:V?ne+2:ne-2,y:Math.max(O+4,Math.min(te-4,K)),textAnchor:ie,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[M.mark(Y),R&&n.jsx(Ft,{size:5})]})]}),!U&&n.jsx(Fn,{x:V?ne+8:ne-8,y:O+G/2,size:11,children:de}),M.symbol!==""&&n.jsx("text",{x:k+q/2,y:O-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:M.symbol})]}),y]})}const ko=d.div`
  display: block;
  max-width: 100%;
`,yt={w:5,h:4},So=8,Mo=7;function Gs(e,t){return e===void 0||t===void 0?"normal":e<yt.w||t<yt.h?"tiny":e<So||t<Mo?"small":"normal"}const rn=1.6,To=1/rn;function Vs(e,t){if(e===void 0||t===void 0||t===0)return{shape:"square",aspect:1};const r=e/t;return r>=rn?{shape:"landscape",aspect:r}:r<=To?{shape:"portrait",aspect:r}:{shape:"square",aspect:r}}function Ro(e){switch(e.reason){case"no-horizon-stated":return{heading:"NO HORIZON STATED",detail:"Nothing says how far ahead these orbital elements can be trusted."};case"past-horizon":return e.trajectoryKind===Hn.Integrated?{heading:"BEYOND INTEGRATION",detail:"The trajectory is not computed this far ahead yet."}:{heading:"PAST HORIZON",detail:"These orbital elements cannot be trusted this far ahead."};case"shape-not-stated":return{heading:"SHAPE NOT STATED",detail:"Nothing has said whether this trajectory is a conic."};case"frame-unavailable":return{heading:"FRAME UNAVAILABLE",detail:"The trajectory is fine; the frame it was asked for cannot be built from the bodies known here. Pick another frame."};default:return{heading:"NO PATH AVAILABLE",detail:"The integrated trajectory could not be sampled."}}}function Ks({withheld:e,compact:t=!1}){const{heading:r,detail:o}=Ro(e);return n.jsx($e,{text:t?o:void 0,focusable:!0,children:n.jsxs(we,{role:"status",children:[n.jsx(ye,{size:"xs",children:r}),!t&&n.jsx(ye,{level:"muted",size:"xs",children:o})]})})}const Xs=d.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,Eo=112;function Io(e,t){try{return oe(e,1).in(t).magnitude}catch{return Number.NaN}}function Ao(e,t){let r=e;return t.map((o,a)=>{if(!Number.isFinite(o)||o===0)return 0;const s=a===t.length-1?r/o:Math.trunc(r/o);return r-=s*o,s})}function Ys({value:e,unit:t,onChange:r,label:o,rungs:a,range:s,rate:i,disabled:l}){const c=h.useId(),{shown:u,held:p,caption:v}=Fe(e),w=p?n.jsx(Ye,{caption:v,children:o}):o,g=s,f=u?u.magnitude:Number.NaN,[T,D]=h.useState({}),m=$=>T[$]??null,_=($,z)=>D(L=>({...L,[$]:z})),b=i?n.jsxs(we,{gap:"related-packed",children:[n.jsx(va,{mode:"rate","aria-label":`${o} rate`,value:f,step:i.step,stepsPerSecond:i.stepsPerSecond,disabled:l||!Number.isFinite(f),format:Pe(t)?No:void 0,width:Pe(t)?Eo:void 0,onChange:$=>r(oe(t,$))}),n.jsx(ye,{level:"faint",size:"sm",children:`${i.step} ${Fo(t)} / notch`})]}):null;if(Pe(t))return n.jsxs(Be,{children:[n.jsx($t,{"aria-hidden":"true",children:w}),n.jsxs(we,{gap:"related-dense",children:[n.jsx(Ga,{label:p&&v!==null?`${o}, ${v}`:o,value:Number.isFinite(f)?f:null,disabled:l,steps:i?[]:void 0,onChange:$=>r(oe(t,$))}),b]})]});if(a&&a.length>0){const $=a.map(y=>Io(String(y),t)),z=Ao(f,$),L=(y,C)=>{const j=Oe(C);if(j===void 0){_(y,{text:C,against:z[y]});return}const E=z.slice();E[y]=j;const B=E.reduce((Y,X,U)=>Number.isFinite($[U])?Y+X*$[U]:Y,0);_(y,{text:C,against:j}),r(oe(t,B))};return n.jsxs(Be,{children:[n.jsx($t,{id:`${c}-label`,children:w}),n.jsx(Po,{role:"group","aria-labelledby":`${c}-label`,children:a.map((y,C)=>n.jsxs(Oo,{children:[n.jsx(Bo,{type:"number",disabled:l,"aria-label":`${o} ${String(y)}`,value:wt(m(C),z[C]),onChange:j=>L(C,j.target.value)}),n.jsx(jt,{"aria-hidden":"true",children:String(y)})]},String(y)))}),b]})}const R=$=>{const z=Oe($);_(0,{text:$,against:z??f}),z!==void 0&&r(oe(t,z))};return n.jsxs(Be,{children:[n.jsx(Co,{htmlFor:c,children:w}),n.jsxs(Do,{children:[n.jsx(on,{id:c,type:"number",disabled:l,min:g?.min,max:g?.max,step:g?.step,value:wt(m(0),f),onChange:$=>R($.target.value)}),n.jsx(jt,{"aria-hidden":"true",children:t})]}),g?n.jsx(po,{disabled:l,"aria-label":`${o} slider`,min:g.min,max:g.max,step:g.step??(g.max-g.min)/100,value:Number.isFinite(f)?f:g.min,onChange:$=>r(oe(t,Oe($.target.value)??g.min))}):null,b]})}function wt(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(Lo(t)):""}function Fo(e){return Pt(e)??e}function Pe(e){return Pt(e)==="s"}function No(e){if(!Number.isFinite(e))return"";const{day:t,hour:r,minute:o,second:a}=qt(e),s=i=>String(i).padStart(2,"0");return`D${t} ${s(r)}:${s(o)}:${s(a)}`}function Oe(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function Lo(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const Be=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,an=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Co=d.label`
  ${an}
`,$t=d.span`
  ${an}
`,Do=d.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,on=d.input`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-field-compact);
  border-radius: var(--radius-regular);
  text-align: right;
  font-variant-numeric: tabular-nums;
  min-width: 0;

  ${me}
`,jt=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Po=d.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,Oo=d.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,Bo=d(on)`
  width: 4.5em;
`;function Zs({row:e,style:t}){const o=Kn("meters").filter(a=>a.row===e);return o.length===0?null:n.jsx($n,{style:t,role:"group","aria-label":"meters",children:o.map(a=>n.jsx(jn,{label:a.label,value:a.value,tone:a.tone,valueLabel:a.valueLabel},a.id))})}const sn=h.createContext(null);function qs({widget:e,scope:t,children:r}){const o=h.useMemo(()=>({widget:e,scope:t}),[e,t]);return n.jsx(sn.Provider,{value:o,children:r})}function Js(e){const t=h.useContext(sn);if(!(!t||t.widget!==e))return t.scope}function Qs(e){if(e.length===0)return[];const t=[[e[0]]];for(let r=1;r<e.length;r++)Wo(e[r-1],e[r])?t.push([e[r]]):t[t.length-1].push(e[r]);return t}function ei(e,t,r,o){if(e.length===0||!(t>0))return[];const a=[e[0].x];let s=a[0],i=a[0];for(let l=1;l<e.length;l++){const c=a[l-1],u=c+Ho(e[l].x-c,t);a.push(u),u<s&&(s=u),u>i&&(i=u)}return zo(s,i,r,o,t).map(l=>e.map((c,u)=>({...c,x:a[u]+l})))}function zo(e,t,r,o,a){if(!(a>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((r-t)/a),i=Math.floor((o-e)/a),l=[];for(let c=s;c<=i;c++)l.push(c*a+0);return l}function Ho(e,t){const r=t/2;return((e+r)%t+t)%t-r}function Wo(e,t){const r=_t(e),o=_t(t),a=Go(r,o);if(a===0)return!1;const s=kt(Uo(r,o));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=a)return!1;const l=[0,0,e.lat+t.lat>=0?1:-1],c=kt(Vo(l,s));if(c===null)return!1;const u=be(r,o);return be(r,c)>u&&be(o,c)>u}function _t({lat:e,lon:t}){const r=e*Math.PI/180,o=t*Math.PI/180,a=Math.cos(r);return[a*Math.cos(o),a*Math.sin(o),Math.sin(r)]}function be(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Uo(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Go(e,t){return Math.acos(Math.max(-1,Math.min(1,be(e,t))))}function Vo(e,t){const r=be(e,t);return[e[0]-r*t[0],e[1]-r*t[1],e[2]-r*t[2]]}function kt(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{sr as $,kr as A,us as B,ms as C,ws as D,ks as E,Ms as F,Xt as G,Ts as H,nr as I,va as J,Fa as K,Is as L,Cs as M,Yt as N,Os as O,Ba as P,Pa as Q,Zt as R,Da as S,Ia as T,Bs as U,Jt as V,Hs as W,vs as X,po as Y,go as Z,Ws as _,ls as a,yt as a0,Fs as a1,Us as a2,La as a3,Ks as a4,Xs as a5,Ys as a6,Zs as a7,qs as a8,tr as a9,gr as aa,Ss as ab,Gs as ac,Vs as ad,zo as ae,zs as af,Qs as ag,Ro as ah,Mr as ai,bs as aj,Js as ak,Ua as al,ei as am,Aa as b,Ca as c,cs as d,ds as e,Ls as f,fs as g,hs as h,ps as i,xs as j,ys as k,$s as l,js as m,_s as n,gs as o,la as p,Ns as q,Rs as r,wr as s,Es as t,As as u,Na as v,Ds as w,Ga as x,Ps as y,Oa as z};
