import{j as n}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./ext-react-RRA14VTW.js";import d,{css as re,keyframes as fn}from"./ext-styled-components-Br73TgY3.js";import{a3 as hn,g as pn,K as mn,al as et,am as gn,U as he,e as vn,Y as xn,V as bn,Z as yn,X as wn,an as $n,ac as jn,ao as kn,ap as tt,a9 as _t,a6 as St,B as _n,H as Tt,c as Sn,M as Tn}from"./ToggleButton-Bnb4Bl4b.js";import{E as En,a1 as Fe,m as Rn,F as Et,l as qe,v as Rt,V as We,a9 as He,a2 as we,Z as Mt,ar as Mn,_ as It,a4 as Ne,aq as At,as as Ue,ae as Ft,at as Ee,ap as Re,a5 as Ze,f as In,a3 as pe,d as Ge,T as An,af as Fn,G as Nn,k as Ln,au as Cn,ah as Me}from"./reckoningMarkDraw-CoCX0fe7.js";import{G as $e,N as de,R as Nt,I as Dn,t as Ve,w as Lt,j as Ke,i as Pn,k as On,a as be,l as Ct,T as Bn,b as zn,q as Wn}from"./streamStatusWord-C3H43Y2G.js";import{aU as nt,bU as Hn,aX as se,k as Dt,bQ as Un,ck as Gn,a$ as Je,T as Vn,bP as Pt}from"./view-clock-formula-DcLQJabS.js";import"./ksp-enum-names-BMz6X3__.js";import{p as Kn}from"./screen-DTFovtBn.js";import{s as Xn,x as Yn,f as ye,c as qn,m as Zn}from"./contributionsRead-BRJc0-Tx.js";import{r as Jn}from"./ext-react-dom-CZVBhjGL.js";import{l as Qn}from"./capability-lock-DpnX90O0.js";import"./lagrange-CsOvgNk7.js";import"./use-transmissions-DYay_Icj.js";import{r as er}from"./control-frame-to-read-frame-BSID8kbc.js";function is({items:e,onSelect:t,onDismiss:r,"aria-label":o,style:a,header:s,footer:i,emptyLabel:l="No actions",otherLabel:c="Other"}){const h=f.useRef(null),p=f.useId(),[x,w]=f.useState(0),v=hn(e,c),u=v.flatMap(([,m])=>m),E=u.length;f.useEffect(()=>{const m=h.current;if(!m)return;if(E===0){m.focus();return}m.querySelectorAll('[role="menuitem"]')[x]?.focus()},[x,E]),f.useEffect(()=>{const m=k=>{const b=h.current;b&&k.target instanceof Node&&!b.contains(k.target)&&r()};return document.addEventListener("pointerdown",m),()=>document.removeEventListener("pointerdown",m)},[r]);const C=f.useCallback(m=>{if(m.key==="Escape"){m.stopPropagation(),r();return}if(m.key==="Tab"){r();return}if(u.length!==0)switch(m.key){case"ArrowDown":m.preventDefault(),w(k=>Math.min(k+1,u.length-1));break;case"ArrowUp":m.preventDefault(),w(k=>Math.max(k-1,0));break;case"Home":m.preventDefault(),w(0);break;case"End":m.preventDefault(),w(u.length-1);break}},[u.length,r]);return n.jsxs(tr,{ref:h,role:E>0?"menu":void 0,"aria-label":o,onKeyDown:C,tabIndex:-1,style:a,children:[s,u.length===0?n.jsx(En,{layout:"fill",children:l}):v.map(([m,k],b)=>n.jsxs("div",{...v.length>1?{role:"group","aria-labelledby":`${p}-group-${b}`}:{role:"none"},children:[v.length>1?n.jsx(nr,{id:`${p}-group-${b}`,"aria-hidden":"true",children:m}):null,k.map(R=>{const $=u.indexOf(R);return n.jsx(rr,{type:"button",role:"menuitem","aria-label":R["aria-label"],"aria-disabled":R.disabled,$disabled:R.disabled,tabIndex:$===x?0:-1,onFocus:()=>w($),onClick:()=>{R.disabled||t(R.key)},children:R.label},R.key)})]},m)),i]})}const tr=d.div`
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
`,nr=d.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,rr=d.button`
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

  ${Fe}
  /* The background marks the focused row where the ring meets the menu border. */
  &:focus-visible {
    background: var(--color-border-subtle);
  }

  &[aria-disabled="true"] {
    color: var(--color-text-faint);
    cursor: default;
  }
`;function ls({settings:e,values:t,onChange:r}){return e.length===0?null:n.jsx(n.Fragment,{children:e.flatMap(o=>o.fields.map(a=>{const i=t?.[o.namespace]?.[a.key]??a.default,l=a.label??a.key,c=`augment-setting-${o.namespace}-${a.key}`;return a.type==="boolean"?n.jsx(Rn,{children:n.jsx(pn,{checked:!!i,onChange:h=>r(o.namespace,a.key,h),label:l})},`${o.namespace}.${a.key}`):n.jsxs(Et,{children:[n.jsx(qe,{htmlFor:c,children:l}),n.jsx(Rt,{id:c,type:a.type==="number"?"number":"text",value:i===void 0?"":String(i),onChange:h=>{const p=h.target.value;if(a.type!=="number"){r(o.namespace,a.key,p);return}if(p===""){r(o.namespace,a.key,void 0);return}const x=Number(p);Number.isFinite(x)&&r(o.namespace,a.key,x)}})]},`${o.namespace}.${a.key}`)}))})}function cs({fallback:e,gap:t="related-dense",children:r,...o}){return n.jsxs(n.Fragment,{children:[n.jsx(Ot,{$gap:t,...o,children:r}),n.jsx(or,{children:e})]})}const Ot=d.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>$e[e]};
`,or=d.div`
  ${Ot}:not(:empty) + & {
    display: none;
  }
`,rt=12,ke=8;function ar(e,t,r){return{left:ot(e.x,t.w,r.w),top:ot(e.y,t.h,r.h)}}function ot(e,t,r){const o=e+rt;if(o+t<=r-ke)return o;const a=e-rt-t;return a>=ke?a:Math.max(ke,r-ke-t)}const sr="–";function ds({min:e,max:t,wrapsAt:r,className:o,...a}){const s=nt(e),i=nt(t);return e==null||t==null||s===null||i===null?n.jsx(Ie,{className:o,children:de}):r!==void 0&&Math.abs(i-s)>=r/2?n.jsx(Ie,{className:o,children:"(precesses)"}):n.jsx(mn,{of:e.unit,separate:!0,...a,children:n.jsx(ir,{min:e,max:t,className:o})})}function ir({min:e,max:t,className:r}){return et(e),et(t),gn(e)?n.jsx(Ie,{className:r,children:n.jsxs(cr,{children:[n.jsx("span",{"aria-hidden":"true",children:"~"}),n.jsx(We,{children:"approximately "}),n.jsx(he,{value:e})]})}):n.jsxs(Ie,{className:r,children:[n.jsx(he,{value:e}),n.jsx(lr,{"aria-hidden":"true",children:sr}),n.jsx(We,{children:" to "}),n.jsx(he,{value:t})]})}const Ie=d.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,lr=d.span`
  color: var(--color-text-faint);
`,cr=d.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`;function dr({children:e,status:t,gap:r="related-packed",align:o="center"}){return n.jsxs(He,{align:o,gap:r,justify:"between",wrap:!0,children:[e,t]})}const Bt=d.div`
  color: var(--color-text-primary);
  font-weight: 600;
  /* One rung above the body the arrangement sets; both halves are declared here, so a site cannot break the step. */
  font-size: var(--font-size-value);
  line-height: var(--line-height-tight);
  /* A content-sized basis, so a long title wraps instead of running into the badge beside it. */
  flex: 1 1 auto;
  min-width: 0;
`,ur=d.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-record-lead);
  flex: 1 1 auto;
  min-width: 0;
`;function zt({left:e,right:t,children:r}){return n.jsx(dr,{align:"baseline",status:t,children:e==null?r:n.jsxs(ur,{children:[e,r]})})}const fr=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--gap-related);
`,Wt=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  flex: 1 1 var(--block-body-floor, 9rem);
  min-width: 0;
`,ve=d.div`
  min-width: 0;
  ${({$side:e})=>e?`flex: 0 0 auto;
    --radius-display-frame: var(--radius-display-frame-aside);`:""}
`,Ht=d.div`
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
`;function Ae(e,{title:t,titleAs:r,titleLeft:o,titleRight:a,left:s,right:i,top:l,bottom:c,footer:h,children:p,...x}){const w=t!=null||o!=null||a!=null,v=s!=null||i!=null,u=w&&n.jsx(zt,{left:o,right:a,children:t!=null&&n.jsx(Bt,{as:r,children:t})});return n.jsxs(e,{...x,children:[l!=null&&n.jsx(ve,{$side:!1,children:l}),v?n.jsxs(fr,{children:[s!=null&&n.jsx(ve,{$side:!0,children:s}),n.jsxs(Wt,{children:[u,p]}),i!=null&&n.jsx(ve,{$side:!0,children:i})]}):n.jsxs(n.Fragment,{children:[u,p]}),h!=null&&n.jsx(Ht,{children:h}),c!=null&&n.jsx(ve,{$side:!1,children:c})]})}const Ut={Title:Bt,TitleRow:zt,Body:Wt,Aside:ve,Footer:Ht};function hr({...e}){return Ae(Qe,e)}const us=Object.assign(hr,Ut),pr={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function fs({surface:e,pad:t,bordered:r=!1,radius:o,children:a,...s}){return n.jsx(mr,{$surface:e,$pad:t,$bordered:r,$radius:o,...s,children:a})}const mr=d.div`
  ${({$surface:e})=>e&&`background: ${pr[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${Nt[e]};`}
  ${({$pad:e})=>e&&`padding: var(${Dn[e]});`}
`,hs=f.forwardRef(function({equalWidth:t=!0,gap:r,children:o,...a},s){return n.jsx(gr,{ref:s,$equalWidth:t,$gap:r,...a,children:o})}),gr=d.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?$e[e]:"var(--gap-related)"};
`,vr="3px",xr=d(Qe)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${Ve(e)};`:""}
  ${({$identityColor:e})=>e?`
    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: var(--size-mark);
      height: ${vr};
      background: ${e};
      border-radius: var(--radius-regular) var(--radius-regular) 0 0;
    }
  `:""}
  ${({$dimmed:e,$tone:t})=>e?`
    --color-text-primary: var(--color-text-muted);
    color: var(--color-text-muted);
    ${t?`border-left-color: color-mix(in srgb, ${Ve(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function br({tone:e,dimmed:t,identityColor:r,standalone:o,...a}){return Ae(xr,{...a,$tone:e,$dimmed:t,$identityColor:r,$standalone:o})}const ps=Object.assign(br,Ut);function yr(e){const t=e.inFlight.filter(r=>r.predictedPhase==="overdue"||r.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const ms=f.forwardRef(function({label:t,icon:r,type:o,...a},s){return n.jsx("button",{ref:s,type:o??"button","aria-label":t,...a,children:n.jsx(Gt,{label:t,icon:r})})});function Gt({label:e,icon:t}){const r=f.useRef(null),o=f.useRef(null),[a,s]=f.useState(!0);return f.useLayoutEffect(()=>{const i=r.current,l=o.current;if(!i||!l)return;const c=()=>{s(l.scrollWidth<=i.clientWidth)};if(c(),typeof ResizeObserver>"u")return;const h=new ResizeObserver(c);return h.observe(i),h.observe(l),()=>h.disconnect()},[]),n.jsxs(wr,{ref:r,children:[n.jsx($r,{ref:o,"aria-hidden":"true",children:e}),a?n.jsx(jr,{"aria-hidden":"true",children:e}):n.jsx(kr,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const wr=d.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,$r=d.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,jr=d.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,kr=d.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function _r({holds:e,label:t,spinnerSize:r=12}){return n.jsxs(Sr,{children:[n.jsx(Tr,{"aria-hidden":"true",children:e}),n.jsx(Er,{children:n.jsx(vn,{size:r,"aria-label":t})})]})}const Sr=d.span`
  display: inline-grid;
  & > * {
    grid-area: 1 / 1;
  }
`,Tr=d.span`
  visibility: hidden;
`,Er=d.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,Rr=4e3,at=8e3,Mr=3e4;function Vt(e,t){return e.gateFor?e.gateFor(t):e.gate}function Ir({handle:e,args:t,commandLabel:r,onConfirmed:o}){const[a,s]=f.useState("idle"),[i,l]=f.useState(null),[c,h]=f.useState(null),[p,x]=f.useState(!1),w=Vt(e,t),v=w?.blocked===!0,u=f.useRef(!0),E=f.useRef(0);f.useEffect(()=>()=>{u.current=!1},[]);const C=e.founds,m=f.useRef(!1),k=f.useRef(C?.length??0);f.useEffect(()=>{const y=C?.length??0,L=y>k.current;k.current=y;const j=C?.[y-1];!L||!j||!m.current||(m.current=!1,h(j),l(null),s("found"))},[C]),f.useEffect(()=>{if(a!=="armed")return;const y=setTimeout(()=>s("idle"),Rr);return()=>clearTimeout(y)},[a]),f.useEffect(()=>{if(a!=="refused"&&a!=="lost"&&a!=="found")return;const y=setTimeout(()=>{s("idle"),l(null),h(null)},at);return()=>clearTimeout(y)},[a]),f.useEffect(()=>{if(!p)return;const y=setTimeout(()=>x(!1),at);return()=>clearTimeout(y)},[p]),f.useEffect(()=>{v||x(!1)},[v]),f.useEffect(()=>{if(a!=="pending")return;const y=setTimeout(()=>s("idle"),Mr);return()=>clearTimeout(y)},[a]);const b=f.useCallback(()=>{const y=E.current+1;E.current=y,s("pending"),l(null);const L=(j,M)=>{!u.current||E.current!==y||(l(M),s(j))};e.send(t,r?{label:r}:void 0).then(j=>{L("idle",null),o?.(j)},j=>{const M=Hn(j);if(M.kind==="lost"){m.current=!0,L("lost",null);return}if(M.kind!=="refused"){L("idle",null);return}L("refused",{errorCode:M.errorCode,reason:M.reason,command:M.command,args:M.args,label:M.label??r,breach:M.breach,detail:M.detail})})},[e,t,r,o]),{hasUnconfirmed:R,hasFailure:$}=yr(e),B=f.useCallback(y=>{if(a!=="pending"){if(v){x(!0);return}if(a==="refused"||a==="lost"||a==="found"){l(null),h(null),s("idle");return}if(y&&a!=="armed"){s("armed");return}b()}},[a,v,b]),N=a==="pending"||a==="refused"||a==="lost"||a==="found"?a:v?"blocked":a;return{phase:N,isPending:N==="pending",isArmed:N==="armed",isRefused:N==="refused",isLost:N==="lost",isFound:N==="found",isBlocked:N==="blocked",isShowingReason:N==="blocked"&&p,refusalText:i?yn(i):N==="blocked"&&w?wn({...w,label:w.label??r,args:w.args??t}):null,foundText:c?bn(c):null,lossText:N==="lost"?xn({args:t,label:r}):null,hasUnconfirmed:R,hasFailure:$,press:B}}function gs({handle:e,args:t,commandLabel:r,label:o,confirmLabel:a,pendingLabel:s="Working...",refusedLabel:i="Refused",lostLabel:l="No reply",foundLabel:c="Found",confirmAriaLabel:h,pendingAriaLabel:p,blockedAriaLabel:x,active:w,variant:v="ghost",tone:u="neutral",icon:E,confirmIcon:C,onPressReady:m,size:k="md",confirmTone:b="go",onConfirmed:R,disabled:$,title:B,"aria-label":N,...y}){const{phase:L,isPending:j,isArmed:M,isRefused:P,isLost:q,isFound:X,isBlocked:K,isShowingReason:T,refusalText:D,foundText:F,lossText:H,hasUnconfirmed:ie,hasFailure:U,press:z}=Ir({handle:e,args:t,commandLabel:r,onConfirmed:R});f.useEffect(()=>{if(!(!m||j))return m(z),()=>m(null)},[m,j,z]);const O=j?n.jsx(_r,{holds:o,label:s,spinnerSize:k==="sm"?10:12}):P?i:q?l:X?c:T?D:M?a:o,oe=E!==void 0&&typeof O=="string",G=oe?n.jsx(Gt,{label:O,icon:M?C??E:E}):O,_=E===void 0&&typeof o=="string"&&typeof a=="string"&&!P&&!q&&!X&&!T,ne=P?D:q?H:X?F:null,le=w===!0||M||P,ce=Ar({restTone:v==="primary"?u:"neutral",filled:le,isRefused:P,isFound:X,isArmed:M,confirmTone:b,tone:u});return n.jsxs(n.Fragment,{children:[n.jsx(we,{text:F??D??(j?s:B),children:n.jsx(Lr,{type:"button",$tone:ce,$variant:v,$fit:oe,$size:k,$pressed:le,$armed:M,$blocked:K,"aria-pressed":w,"aria-busy":j||void 0,"aria-disabled":K||j||void 0,disabled:$,"data-unconfirmed":ie?"true":void 0,"data-failed":U?"true":void 0,"data-command-phase":L,"data-gate":K?"blocked":Vt(e,t)?.undetermined?"undetermined":void 0,"aria-label":(P?D??void 0:q?H??void 0:X?F??N:K?x??D??N:j?p??s:M?h:N)??(oe?O:void 0),onClick:()=>z(a!==void 0),"data-rest-label":_?o:void 0,"data-armed-label":_?a:void 0,...y,children:_?n.jsx(Nr,{children:G}):G})}),n.jsx(Mt,{visuallyHidden:!0,children:ne})]})}function Ar(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const Fr=fn`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,Nr=d.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,Lr=d(Mn)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&re`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Fr} 1s var(--ease-emphasis) infinite;
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
`;function vs({oneWaySeconds:e,delayReading:t,className:r}){const o=se("s",e);return n.jsxs(Cr,{className:r,role:"group","aria-label":"Signal delay",children:["one-way ~",n.jsx(he,{value:$n(o,t),...o.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const Cr=d.div`
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
`;function xs(e){const t=jn(),r=f.useId(),o=e!==null;f.useEffect(()=>{if(!(!t||!e))return t.register({id:r,...e})},[t,r,o]),f.useEffect(()=>{!t||!e||t.update(r,e)},[t,r,e])}function bs({at:e,narrow:t,wide:r,children:o,...a}){return n.jsx(Dr,{$at:e,$narrow:t,$wide:r,...a,children:o})}const Dr=d.div`
  ${({$narrow:e})=>e}
  @container (min-width: ${({$at:e})=>e}px) {
    ${({$wide:e})=>e}
  }
`;function Pr(e,t){return e.value!==void 0?n.jsx(he,{value:e.value(t)??null}):e.render(t)}function ys({columns:e,rows:t,sections:r,rowKey:o,caption:a,empty:s,rowDetail:i,className:l}){const c=r??(t?[{id:"",title:null,rows:[...t]}]:[]),h=c.reduce((u,E)=>u+E.rows.length,0),[p,x]=f.useState(null),w=kn(p),v=It(p);return n.jsxs(Or,{className:l,children:[n.jsx(Br,{ref:x,tabIndex:v,children:n.jsxs(zr,{children:[n.jsx(Wr,{children:a}),n.jsx("thead",{children:n.jsx("tr",{children:e.map(u=>n.jsx(Hr,{scope:"col",$align:u.align??"start",style:{width:u.width,minWidth:u.minWidth},children:u.header},u.key))})}),h===0&&s!==void 0&&n.jsx("tbody",{children:n.jsx("tr",{children:n.jsx(Xr,{colSpan:e.length,children:s})})}),c.map(u=>n.jsxs("tbody",{children:[u.title!==null&&u.title!==void 0&&n.jsx("tr",{children:n.jsx(Ur,{scope:"rowgroup",colSpan:e.length,children:u.title})}),u.rows.map(E=>{const C=o(E),m=i?.(E),k=m!=null&&m!==!1&&m!=="";return n.jsxs(f.Fragment,{children:[n.jsx(Gr,{$hasDetail:k,children:e.map(b=>n.jsx(Vr,{as:b.rowHeader?"th":void 0,scope:b.rowHeader?"row":void 0,$align:b.align??"start",children:Pr(b,E)},b.key))}),k?n.jsx("tr",{children:n.jsx(Kr,{colSpan:e.length,children:m})}):null]},C)})]},u.id))]})}),n.jsx(tt,{$position:"left",$visible:w.left}),n.jsx(tt,{$position:"right",$visible:w.right})]})}const Or=d.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Br=d.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${Fe}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,zr=d.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,Wr=d.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,Hr=d.th`
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
`,Ur=d.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,Gr=d.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,Vr=d.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,Kr=d.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,Xr=d.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`,Yr=6,qr=3,Ce={track:8,hub:4,needle:.92},Zr={regular:{size:16,drop:18},large:{size:24,drop:32}};function ae(e,t,r,o){const a=o*Math.PI/180;return{x:e+r*Math.sin(a),y:t-r*Math.cos(a)}}function st(e,t,r,o,a){const s=ae(e,t,r,o),i=ae(e,t,r,a),l=a-o,c=Math.abs(l)>180?1:0,h=l>=0?1:0;return`M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${c} ${h} ${i.x.toFixed(2)} ${i.y.toFixed(2)}`}function ws({value:e,min:t,max:r,width:o=120,height:a=120,startAngle:s=0,sweep:i=360,wrap:l=!1,zones:c,ticks:h,valueLabel:p,readout:x,format:w,needleColor:v="var(--color-text-primary)",trackColor:u="var(--color-border-subtle)","aria-label":E}){const C=Ne(e),{shown:m,held:k,caption:b,band:R}=C,{anchor:$,tip:B}=At(b),N=m?.magnitude??Number.NaN,y=t.magnitude,L=r.magnitude,j=L-y,M=Number.isFinite(N)?N:y,P=j>0?l?y+((M-y)%j+j)%j:Math.max(y,Math.min(L,M)):y,q=m!=null,X=m==null?null:{magnitude:P,unit:m.unit},K=p??(X===null?null:Lt(X,{format:w})),T=X===null?de:Ke(X,{format:w}),D=m==null||R===null?null:Dt(R,m.unit)??null,F=x!==void 0&&i<=180,H=F?Ce.track:Yr,ie=F?Ce.hub:qr,U=x===void 0?null:Zr[x],z=o/2,A=F&&U!==null?Math.min((o-H)/2,a-H-U.drop):Math.min(o,a)/2-H-2,O=F?A+H/2:a/2,oe=S=>{const V=j>0?(S-y)/j:0;return s+V*i},G=S=>S.max(t).min(r),_=S=>oe(S.magnitude),ne=S=>i!==0?(S-s)/i:0,le=D!==null&&_t(ne(oe(P)),[ne(_(G(D.lo))),ne(_(G(D.hi)))],St({wraps:l}))?D:null,ce=i>=360,me=ae(z,O,A*(F?Ce.needle:.88),oe(P));return n.jsxs(Jr,{...Ze(C),...$,...q?{role:"meter","aria-label":Re(E,b),...Ee(b),"aria-valuenow":P,"aria-valuemin":y,"aria-valuemax":L,"aria-valuetext":T}:{role:"img","aria-label":Re(`${E}: ${T}`,b),...Ee(b)},children:[n.jsxs("svg",{width:o,height:a,viewBox:`0 0 ${o} ${a}`,"aria-hidden":"true",style:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[A>0&&(ce?n.jsx("circle",{cx:z,cy:O,r:A,fill:"none",stroke:u,strokeWidth:H}):n.jsx("path",{d:st(z,O,A,s,s+i),fill:"none",stroke:u,strokeWidth:H,strokeLinecap:"round"})),A>0&&!ce&&c?.flatMap(S=>{const V=G(S.from.min(S.to)),Y=G(S.from.max(S.to));return Y.greaterThan(V)?[V.greaterThan(t)?null:s,r.greaterThan(Y)?null:s+i].flatMap(ee=>{if(ee===null)return[];const g=ae(z,O,A,ee);return[n.jsx("circle",{"data-dial-cap":"",cx:g.x,cy:g.y,r:H/2,fill:S.color},`cap-${S.color}-${ee}`)]}):[]}),A>0&&c?.map(S=>{const V=G(S.from.min(S.to)),Y=G(S.from.max(S.to));return Y.greaterThan(V)?n.jsx("path",{d:st(z,O,A,_(V),_(Y)),fill:"none",stroke:S.color,strokeWidth:H,strokeLinecap:"butt"},`zone-${S.color}-${_(V)}-${_(Y)}`):null}),A>0&&h?.map(S=>{const V=S.value.magnitude,Y=oe(V),ee=ae(z,O,A,Y),g=ae(z,O,A-H,Y),I=ae(z,O,A-H-8,Y);return n.jsxs("g",{children:[n.jsx("line",{x1:g.x,y1:g.y,x2:ee.x,y2:ee.y,stroke:"var(--color-text-faint)",strokeWidth:1}),S.label&&n.jsx("text",{x:I.x,y:I.y,textAnchor:"middle",dominantBaseline:"middle",fontSize:9,fill:"var(--color-text-faint)",children:S.label})]},`tick-${V}-${S.label??""}`)}),A>0&&le!==null&&["lo","hi"].map(S=>{const V=_(G(le[S])),Y=ae(z,O,A-H/2,V),ee=ae(z,O,A+H/2,V);return n.jsx(Ue,{end:S,x1:Y.x,y1:Y.y,x2:ee.x,y2:ee.y},S)}),A>0&&q&&n.jsxs(n.Fragment,{children:[n.jsx("line",{x1:z,y1:O,x2:me.x,y2:me.y,stroke:v,strokeWidth:2,strokeLinecap:"round"}),n.jsx("circle",{cx:z,cy:O,r:ie,fill:v})]}),n.jsxs("text",{x:z,y:F&&U!==null?O+U.drop:O+A*.55,textAnchor:"middle",fontSize:F&&U!==null?U.size:13,fontWeight:F?void 0:"bold",fill:K===null?"var(--color-text-muted)":"var(--color-text-primary)",children:[K??de,k&&K!==null&&n.jsx(Ft,{size:F?7:6,figureSize:F&&U!==null?U.size:13})]})]}),B]})}const Jr=d.div`
  display: block;
  max-width: 100%;
`;function $s({label:e,children:t,"aria-label":r,className:o,variant:a="popover",panelHeight:s="cap",chevron:i=!0,asButton:l=!1,buttonSize:c="md",defaultOpen:h=!1}){const[p,x]=f.useState(h),w=f.useId(),v=f.useRef(null),[u,E]=f.useState(null),C=It(u),m=a==="inline"&&i,k=typeof e=="function"?e(p):e,b={ref:v,type:"button","aria-expanded":p,"aria-controls":w,"aria-label":r,onClick:()=>x($=>!$)},R=n.jsxs(n.Fragment,{children:[k,m&&n.jsx(no,{$open:p,children:n.jsx(In,{size:"var(--icon-size-control)"})})]});return n.jsxs(Qr,{className:o,$variant:a,onKeyDown:$=>{$.key==="Escape"&&p&&(x(!1),v.current?.focus())},children:[l?n.jsx(to,{...b,variant:"ghost",size:c,$inline:a==="inline",children:R}):n.jsx(eo,{...b,$variant:a,$align:a==="inline"&&!i?"end":"between",children:R}),p&&n.jsx(ro,{ref:E,id:w,role:"group",tabIndex:C,$variant:a,$panelHeight:s,children:t})]})}const Qr=d.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,eo=d.button`
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
  ${pe}
`,to=d(Ge)`
  ${({$inline:e})=>e&&re`
      align-self: flex-end;
    `}
`,no=d.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,ro=d.div`
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
          ${Fe}
        `:""}
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function js({space:e,...t}){return n.jsx(oo,{$space:e,...t})}const oo=d.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${$e[e]} 0`:"0"};
`,ao=160,so=24,io="...";function ks({children:e,limit:t=ao,subject:r,className:o}){const[a,s]=f.useState(!1),i=f.useId(),l=lo(e,t);if(l===void 0)return n.jsx(n.Fragment,{children:e});const c=a?"Show less":"Show more";return n.jsxs(co,{className:o,children:[n.jsx("span",{id:i,children:a?e:`${l}${io}`})," ",n.jsx(uo,{type:"button","data-expandable-toggle":"","aria-controls":i,"aria-expanded":a,"aria-label":r===void 0?void 0:`${c} of ${r}`,onClick:()=>s(h=>!h),children:c})]})}function lo(e,t){if(e.length<=t+so)return;const r=e.lastIndexOf(" ",t);return r<=0?e.slice(0,t):e.slice(0,r)}const co=d.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,uo=d(An)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function _s(e,t){const r=t.map(s=>s==null?null:Kn(e,s.index)),o=r.length>0&&r.every(s=>s?.currency==="exact"),a=r.reduce((s,i)=>i?.currency!=="held"||i.asOfUt===null?s:s===null?i.asOfUt:Math.min(s,i.asOfUt),null);return s=>{const i=o?Un(s):s;return a===null?i:{state:"held",value:i,asOfUt:se("ut",a),grade:"held",reckoning:{status:"none"}}}}function Ss({grow:e=!1,children:t,...r}){return n.jsx(fo,{$grow:e,...r,children:t})}const fo=d.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0;

  ${({$grow:e})=>e?"flex: 1 1 auto;":`
    height: 100%;
    width: 100%;
  `}
`;function ho({anchor:e,style:t,children:r,...o}){const[a,s]=f.useState(null),[i,l]=f.useState(null),c=f.useRef(e);c.current=e;const h=f.useCallback(()=>{if(!a)return;const p=c.current,x=typeof p=="function"?p():p;if(!x)return;const w=a.getBoundingClientRect(),v=ar(x,{w:w.width,h:w.height},{w:window.innerWidth,h:window.innerHeight});l(u=>u&&u.left===v.left&&u.top===v.top?u:v)},[a]);return f.useLayoutEffect(()=>{h()}),f.useLayoutEffect(()=>{if(!a)return;const p=typeof ResizeObserver>"u"?null:new ResizeObserver(h);return p?.observe(a),window.addEventListener("resize",h),window.addEventListener("scroll",h,!0),()=>{p?.disconnect(),window.removeEventListener("resize",h),window.removeEventListener("scroll",h,!0)}},[a,h]),typeof document>"u"?null:Jn.createPortal(n.jsx(po,{ref:s,style:{...t,left:i?.left??0,top:i?.top??0,visibility:i===null?"hidden":t?.visibility},...o,children:r}),document.body)}const po=d.div`
  position: fixed;
  z-index: var(--z-dropdown);
`;function Ts({grade:e,subject:t,size:r}){const o=Pn(e);return n.jsx(we,{text:t===void 0?void 0:`${t}: ${o}`,focusable:!0,children:n.jsx(_n,{tone:Xn(e),size:r,children:o})})}const mo=120;function Es({trigger:e,"aria-label":t,children:r}){const[o,a]=f.useState(!1),s=f.useRef(null),i=f.useRef(null),l=f.useId(),c=f.useCallback(()=>{i.current!==null&&(clearTimeout(i.current),i.current=null)},[]),h=()=>{c(),a(!0)},p=()=>{c(),i.current=setTimeout(()=>a(!1),mo)},x=f.useCallback(()=>{c(),a(!1)},[c]);f.useEffect(()=>c,[c]),f.useEffect(()=>{if(!o)return;const v=u=>{u.key==="Escape"&&x()};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[o,x]);const w=()=>{const v=s.current?.getBoundingClientRect();return v?{x:v.left,y:v.bottom}:null};return n.jsxs(n.Fragment,{children:[n.jsx(go,{ref:s,type:"button","aria-label":t,"aria-describedby":o?l:void 0,onPointerEnter:h,onPointerLeave:p,onFocus:h,onBlur:x,children:e}),o&&n.jsx(ho,{anchor:w,onPointerEnter:c,onPointerLeave:p,children:n.jsx(vo,{id:l,role:"tooltip",children:r})})]})}const go=d.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${pe}
`,vo=d.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function Rs({gap:e,inset:t=!1,wrap:r=!1,children:o,...a}){return n.jsx(xo,{$gap:e,$inset:t,$wrap:r,...a,children:o})}const xo=d.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?$e[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,bo=4,yo=80,it=60,wo=30,Xe=24,$o=32,lt=56,ct=Xe;function De(e,t,r){const{min:o,max:a,step:s}=t,i=e+r*s,l=Math.min(a,Math.max(o,i));if(!Number.isFinite(o))return l;const c=o+Math.round((l-o)/s)*s;return Math.min(a,Math.max(o,c))}function jo(e){const{value:t,min:r,max:o,step:a,orientation:s="horizontal",onChange:i,format:l,"aria-label":c,label:h=c,disabled:p=!1,width:x,height:w}=e,v=s==="vertical",u=Math.max(Xe,x??(v?ct:lt)),E=Math.max(Xe,w??(v?lt:ct)),C=e.mode==="rate",m=r??Number.NEGATIVE_INFINITY,k=o??Number.POSITIVE_INFINITY,b={min:m,max:k,step:a},R=f.useRef(null),$=f.useRef(t);$.current=t;const[B,N]=f.useState(0),y=l?l(t):String(Math.round(t)),L=k>m&&Number.isFinite(k-m)?(t-m)/(k-m):.5,j=T=>{p||T!==t&&i(T)};f.useEffect(()=>{if(!C||B===0||p)return;const T=(e.mode==="rate"?e.stepsPerSecond:void 0)??wo,D=setInterval(()=>{const F=$.current+B*T*a*(it/1e3);i(F)},it);return()=>clearInterval(D)},[C,B,p,a,i,e]);const M=T=>{if(p)return;let D=null;switch(T.key){case"ArrowRight":case"ArrowUp":D=De(t,b,1);break;case"ArrowLeft":case"ArrowDown":D=De(t,b,-1);break;case"Home":if(!Number.isFinite(m))return;D=m;break;case"End":if(!Number.isFinite(k))return;D=k;break;default:return}T.preventDefault(),j(D)},P=T=>s==="vertical"?T.clientY:T.clientX,q=T=>{p||(R.current={start:P(T),startValue:t},T.currentTarget.setPointerCapture(T.pointerId))},X=T=>{if(p||!R.current)return;const D=s==="vertical"?R.current.start-P(T):P(T)-R.current.start;if(C){const H=D/yo;N(Math.max(-1,Math.min(1,H)));return}const F=D/bo;j(De(R.current.startValue,b,F))},K=T=>{R.current&&(R.current=null,N(0),T.currentTarget.hasPointerCapture(T.pointerId)&&T.currentTarget.releasePointerCapture(T.pointerId))};return n.jsxs(ko,{children:[h!==!1&&n.jsx(_o,{"aria-hidden":"true",children:h}),n.jsxs(So,{role:"slider","aria-label":c,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":r,"aria-valuemax":o,"aria-valuetext":y,"aria-disabled":p||void 0,tabIndex:p?-1:0,$orientation:s,$disabled:p,$width:u,$height:E,$compact:(v?u:E)<$o,onKeyDown:M,onPointerDown:q,onPointerMove:X,onPointerUp:K,onPointerCancel:K,children:[n.jsx(To,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-L)*100}%)`}:{transform:`translateX(${(.5-L)*100}%)`},"aria-hidden":"true"}),n.jsx(Eo,{$orientation:s,"aria-hidden":"true"}),n.jsx(Ro,{"aria-hidden":"true",children:y})]})]})}const ko=d.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,_o=d.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,So=d.div`
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

  ${pe}
`,To=d.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,Eo=d.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,Ro=d.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function Ms({lock:e}){const t=Gn(e)?Mo(e):e,r=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return n.jsx(we,{text:r,focusable:!0,children:n.jsxs(Ao,{role:"status","aria-label":r,children:[n.jsx(Fn,{}),n.jsx(Fo,{children:Io(t)})]})})}function Mo(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...Qn(t,Yn),locks:t}}function Io(e){const t=[...new Set(e.locks.flatMap(r=>r.missing.map(o=>o.name)))];return t.length>0?t.join(", "):e.reason}const Ao=d.span`
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
`,Fo=d.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,dt=1.4,ut=1.7,No="var(--icon-size-standalone)",Lo=1.8,_e="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",ft="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",ht="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",pt="M7 4.5V19.5M17 4.5V19.5",ue=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,Kt={prograde:{colour:"prograde",paths:[_e,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[_e,ue(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",ue(12,11)]},radialOut:{colour:"radial",paths:[ft,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[ft,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",ue(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",ue(12,12)]},relativePlus:{colour:"target",paths:[_e,ht],dot:[12,12]},relativeMinus:{colour:"target",paths:[_e,ht,ue(12,12)]},parallelPlus:{colour:"target",paths:[pt],dot:[12,12]},parallelMinus:{colour:"target",paths:[pt,ue(12,12)]}},Is=Object.keys(Kt);function mt({shape:e,colour:t,strokeWidth:r,dotRadius:o}){return n.jsxs("g",{fill:"none",stroke:t,strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(a=>n.jsx("path",{d:a},a)),e.dot&&n.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:o,fill:t,stroke:"none"})]})}function Q(e,t){const r=Kt[e],o=`var(--color-marker-${r.colour})`,a=f.forwardRef(({size:s=No,strokeWidth:i=Lo,label:l,...c},h)=>{const p={ref:h,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24","data-marker":e},x=n.jsxs(n.Fragment,{children:[n.jsx(mt,{shape:r,colour:"currentColor",strokeWidth:i+dt,dotRadius:ut+dt/2}),n.jsx(mt,{shape:r,colour:o,strokeWidth:i,dotRadius:ut})]});return l?n.jsx("svg",{...p,role:"img","aria-label":l,...c,children:x}):n.jsx("svg",{...p,"aria-hidden":"true",...c,children:x})});return a.displayName=t,a}const Xt=Q("prograde","ProgradeIcon"),Co=Q("retrograde","RetrogradeIcon"),Yt=Q("normal","NormalIcon"),Do=Q("antiNormal","AntiNormalIcon"),Po=Q("radialOut","RadialOutIcon"),qt=Q("radialIn","RadialInIcon"),Oo=Q("maneuver","ManeuverIcon"),Bo=Q("target","TargetIcon"),zo=Q("antiTarget","AntiTargetIcon"),Wo=Q("relativePlus","RelativePlusIcon"),Ho=Q("relativeMinus","RelativeMinusIcon"),Uo=Q("parallelPlus","ParallelPlusIcon"),Go=Q("parallelMinus","ParallelMinusIcon"),As=Xt,Fs=qt,Ns=Yt,Ls={prograde:Xt,retrograde:Co,normal:Yt,antiNormal:Do,radialOut:Po,radialIn:qt,maneuver:Oo,target:Bo,antiTarget:zo,relativePlus:Wo,relativeMinus:Ho,parallelPlus:Uo,parallelMinus:Go};function Vo(e){if(e.frame==="scet")return{token:"SCET",spoken:"spacecraft event time",title:"Spacecraft event time: when this happens at the craft"};const{vantage:t}=e;return t===void 0?{token:"RECEIVED",spoken:"received",title:"When the telemetry showing this arrives"}:{token:`AT ${t}`,spoken:`received at ${t}`,title:`When the telemetry showing this arrives at ${t}`}}const Ko=d.span`
  font-size: max(0.72em, 10px);
  opacity: 0.72;
  white-space: nowrap;
  text-transform: none;
`;function Cs({value:e,context:t}){const o=Ne(typeof e=="number"?void 0:e),{shown:a,held:s,caption:i}=o,l=typeof e=="number"?e:a?.magnitude,c=Ze({...o,shown:l}),h=t&&Vo(t),p=On(l??Number.NaN);return n.jsxs(n.Fragment,{children:[s?n.jsx(Tt,{...c,caption:i,children:p}):n.jsx("span",{"data-figure":c["data-figure"],children:p}),h&&n.jsxs(n.Fragment,{children:[" ",n.jsx(we,{text:h.title,focusable:!0,children:n.jsxs(Ko,{children:[n.jsx("span",{"aria-hidden":"true",children:h.token}),n.jsx(We,{children:h.spoken})]})})]})]})}function Zt(e){const{year:t,day:r,hour:o,minute:a}=Je(),s=Number.isFinite(e)?Math.max(0,e):0,i=Math.floor(s/t)+1,l=s%t,c=Math.floor(l/r)+1,h=l%r;return{year:i,day:c,hour:Math.floor(h/o),minute:Math.floor(h%o/a),second:Math.floor(h%a)}}const Xo={year:1,day:1,hour:0,minute:0,second:0};function Yo(e){const{year:t,day:r,hour:o,minute:a}=Je();return(e.year-1)*t+(e.day-1)*r+e.hour*o+e.minute*a+e.second}function Se(e){return Lt(se("s",e))}function qo({value:e,onChange:t,label:r,disabled:o,steps:a}){const s=f.useId(),i=`${s}-absent`,l=e!==null&&Number.isFinite(e)?e:null,c=l===null?null:Zt(l),h=Je(),p=a??[h.minute,10*h.minute,h.hour,h.day],[x,w]=f.useState(null),v=(u,E,C,m)=>n.jsxs(ye,{gap:"caption",children:[n.jsx(qe,{htmlFor:`${s}-${u}`,children:E}),n.jsx(Rt,{id:`${s}-${u}`,type:"number",inputMode:"numeric","aria-label":`${r} ${E}`,"aria-describedby":c===null?i:void 0,min:C,step:1,style:{width:m},disabled:o,placeholder:c===null?de:void 0,value:x?.key===u?x.text:c===null?"":String(c[u]),onBlur:()=>w(null),onChange:k=>{const b=k.target.value;if(w({key:u,text:b}),b.trim()==="")return;const R=Number(b);Number.isFinite(R)&&t(Yo({...c??Xo,[u]:R}))}})]},u);return n.jsxs(ye,{gap:"related-dense",role:"group","aria-label":r,children:[n.jsxs(He,{gap:"related-dense",wrap:!0,justify:"start",children:[v("year","YEAR",1,"5rem"),v("day","DAY",1,"5rem"),v("hour","HR",0,"4rem"),v("minute","MIN",0,"4rem"),v("second","SEC",0,"4rem")]}),c===null&&n.jsx(be,{id:i,level:"muted",size:"sm",children:`${de} no ${r.toLowerCase()} to show. Type one to state it.`}),p.length===0?null:n.jsxs(He,{gap:"related-packed",wrap:!0,justify:"start",children:[n.jsx(be,{level:"faint",size:"sm",children:"NUDGE"}),p.map(u=>n.jsx(Ge,{variant:"ghost",size:"sm",disabled:o||l===null,"aria-label":`${r} earlier by ${Se(u)}`,onClick:()=>l!==null&&t(l-u),children:`-${Se(u)}`},`minus-${u}`)),p.map(u=>n.jsx(Ge,{variant:"ghost",size:"sm",disabled:o||l===null,"aria-label":`${r} later by ${Se(u)}`,onClick:()=>l!==null&&t(l+u),children:`+${Se(u)}`},`plus-${u}`))]})]})}const gt=d(Qe)`
  --gap-related: var(--gap-related-comfortable);
  --bleed-inline: 0px;

  background: var(--color-surface-sunken);
  border: 1px solid ${({$tone:e})=>Ve(e)};
  border-radius: var(--radius-regular);
  /* A banner is its own strip of the screen, so it takes the roomier inset. */
  padding: var(--inset-surface-standalone);
`;function Ds({tone:e="warn",assertive:t=!1,role:r,children:o,...a}){const s=f.useRef(null),[i,l]=f.useState("");if(f.useEffect(()=>{const h=s.current;if(t||r!==void 0||h===null)return;const p=Zo(h);l(x=>x===p?x:p)}),t)return Ae(gt,{...a,children:o,role:r??"alert","aria-live":r===void 0?"assertive":void 0,$tone:e});const c=Ae(gt,{...a,children:o,ref:s,role:r??"note",$tone:e});return r!==void 0?c:n.jsxs(n.Fragment,{children:[c,n.jsx(Mt,{visuallyHidden:!0,children:i})]})}function Zo(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let o=r.nextNode();o!==null;o=r.nextNode())t.push(o.textContent??"");return t.join(" ").replace(/\s+/g," ").trim()}function Ps({id:e,label:t,value:r,options:o,onChange:a,hint:s}){const i=o.findIndex(l=>er(l.choice,r));return n.jsxs(Et,{children:[n.jsx(qe,{htmlFor:e,children:t}),n.jsxs(Nn,{id:e,value:i===-1?"":String(i),onChange:l=>{const c=o[Number(l.target.value)];c!==void 0&&a(c.choice)},children:[i===-1&&n.jsx("option",{value:"",disabled:!0}),o.map((l,c)=>n.jsx("option",{value:c,children:l.label},`${l.choice.kind}-${l.choice.bodyIndex??"none"}`))]}),s!==void 0&&n.jsx(Ln,{children:s})]})}function Jo({as:e,interactive:t=!1,selected:r=!1,wrap:o=!1,nested:a=!1,type:s,children:i,...l}){return n.jsx(ea,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:r,$wrap:o,$nested:a,...l,children:i})}const Jt=d.span`
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

  & > ${Jt} {
    min-width: ${Qo};
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

  ${Fe}
`:""}
  ${({$interactive:e,$selected:t})=>e&&t?`
  ${Ct("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}
`,Os=Object.assign(Jo,{Name:Jt}),ta=65,Qt=38,na=72,ra=na-Qt,en=55,Ye=137.508,oa=10,aa=1.5,sa=64,ia=60,la=241,ca=Ye-Math.floor(Ye),xe=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function tn(e,t){const r=Math.abs(e-t)%360;return r>180?360-r:r}const da=xe.map((e,t)=>{let r=1/0;for(let a=0;a<xe.length;a++)a!==t&&(r=Math.min(r,tn(e.hue,xe[a].hue)));const o=r/2;return Math.max(0,Math.min(oa,o-aa))}),ua=xe.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:da[t]}));function fa(e,t=xe){return t.find(r=>r.aliases.some(o=>e.includes(o)))}function nn(e){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function vt(e,t){return(e%t+t)%t}function ha(e){const r=nn(`light:${e}`)/4294967295;return Qt+r*ra}function pa(e){const t=fa(e);if(!t)return;const r=t.aliases.length===1?en:ha(e);return{hue:t.hue,lightness:r}}function ma(e){return ua.some(({centre:t,radius:r})=>tn(e,t)<r)}function ga(e){const t=nn(e);let r=vt(t*Ye,360);const o=ia+(t>>>8)%la+ca;let a=0;for(;ma(r)&&a<sa;)r=vt(r+o,360),a++;return r}function Bs(e){const t=e.trim().toLowerCase(),r=pa(t),o=r?.hue??ga(t),a=r?.lightness??en;return`hsl(${Math.round(o)}deg ${ta}% ${Math.round(a)}%)`}function zs({selected:e,gap:t="caption",layout:r="stack",selectedLook:o="fill",children:a,...s}){return n.jsx(va,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:r,$look:o,...s,children:a})}const va=d.button`
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
  gap: ${({$gap:e})=>$e[e]};
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

  ${pe}
`,xa=f.forwardRef(function(t,r){return n.jsx(ba,{ref:r,type:"range",...t})}),ba=d.input`
  width: 100%;
  min-width: 0;
  margin: 0;
  background: none;
  accent-color: var(--color-accent-fg);
  cursor: pointer;

  ${pe}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function ya({label:e,children:t,detail:r,tone:o="neutral",...a}){return n.jsxs(wa,{...a,children:[n.jsx($a,{children:e}),n.jsx(ja,{$tone:o,children:t}),r!=null&&n.jsx(ka,{children:r})]})}const wa=d.dl`
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
`,ja=d.dd`
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
  color: ${({$tone:e})=>Bn[e]};
`,ka=d.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function Ws({slot:e}){const t=qn(e);return t.length===0?null:n.jsx(n.Fragment,{children:t.map(r=>n.jsx(ya,{label:r.label,detail:r.detail,tone:r.tone??"neutral",children:n.jsx(_a,{entry:r})},r.id))})}function _a({entry:e}){return e.value!==void 0?n.jsx(he,{value:e.value}):e.text!==void 0?n.jsx(n.Fragment,{children:e.text}):n.jsx(zn,{})}const fe=12,Sa=12,xt=52,Z=10;function Hs({labelSide:e="left",value:t,min:r,max:o,width:a=92,height:s=220,fillHeight:i=!1,tickStep:l,zones:c,markers:h,groundLine:p,seaLevel:x,format:w,"aria-label":v}){const u=f.useRef(null),[E,C]=f.useState(s);f.useEffect(()=>{if(!i)return;const g=u.current;if(!g)return;const I=()=>{const te=g.clientHeight;te>0&&C(te)};I();const W=new ResizeObserver(I);return W.observe(g),()=>W.disconnect()},[i]);const m=i?E:s,k=Ne(t),{shown:b,held:R,caption:$,band:B}=k,{anchor:N,tip:y}=At($),L=b?.magnitude??Number.NaN,j=r.magnitude,M=o.magnitude,P=M-j,q=Number.isFinite(L)?L:j,X=P>0?Math.max(j,Math.min(M,q)):j,K=b!=null,T=Wn(o,{format:w}),D=b==null?de:Ke({magnitude:q,unit:b.unit},{format:T.rung}),F=g=>Ke(g),H=[...(h??[]).flatMap(g=>g.label===void 0?[]:[g.bounds===void 0?`${g.label} ${F(g.value)}`:`${g.label} ${F(g.value)}, between ${F(g.bounds.lo)} and ${F(g.bounds.hi)}`]),...(c??[]).flatMap(g=>g.label===void 0?[]:[`${g.label} zone ${F(g.from.min(g.to))} to ${F(g.from.max(g.to))}`]),...p===void 0?[]:[`ground ${F(p)}`],...x===void 0?[]:[`sea level ${F(x)}`]],ie=b==null||B===null?null:Dt(B,b.unit)??null,U=Math.max(0,m-fe-Sa),z=g=>{if(!(P>0))return fe+U;const I=Math.max(0,Math.min(1,(g-j)/P));return fe+(1-I)*U},A=g=>z(g.magnitude),O=fe,oe=fe+U,G=e==="right",_=G?a-xt-Z:xt,ne=G?_+Z+6:_-6,le=G?"start":"end",ce=(g,I)=>{const W=A(g),te=g.greaterThan(o)?-1:g.lessThan(r)?1:0,ge=_-4,je=_+Z+4,Le=_+Z/2;return n.jsxs("g",{"data-level":I?"sea":"ground",children:[n.jsx("line",{x1:ge,y1:W,x2:je,y2:W,stroke:I?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:I?1.5:2,strokeDasharray:I?"3 2":void 0}),te!==0&&n.jsx("polygon",{"data-off-scale":"true",points:`${Le-4},${W-te*2} ${Le+4},${W-te*2} ${Le},${W+te*4}`,fill:I?"var(--color-info-mark)":"var(--color-text-primary)"})]})},me=[],S=l?.magnitude??0;if(S>0&&P>0){const g=Math.ceil(j/S)*S;for(let I=g;I<=M+1e-9;I+=S)me.push(I)}const V=z(X),Y=g=>U>0?(fe+U-g)/U:0,ee=ie!==null&&_t(Y(V),[Y(A(ie.lo)),Y(A(ie.hi))],St())?ie:null;return n.jsxs(Ta,{ref:u,...Ze(k),...N,...K?{role:"meter","aria-label":Re(v,$),...Ee($),"aria-valuenow":X,"aria-valuemin":j,"aria-valuemax":M,"aria-valuetext":H.length===0?D:`${D}; ${H.join("; ")}`}:{role:"img","aria-label":Re(`${v}: ${D}`,$),...Ee($)},style:i?{height:"100%"}:void 0,children:[n.jsxs("svg",{width:a,height:m,viewBox:`0 0 ${a} ${m}`,"aria-hidden":"true",style:i?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[n.jsx("rect",{x:_,y:O,width:Z,height:U,rx:2,fill:"var(--color-surface-raised)"}),c?.map(g=>{const I=A(g.from.max(g.to)),W=A(g.from.min(g.to)),te=Math.max(0,W-I);return n.jsx("g",{children:n.jsx("rect",{x:_,y:I,width:Z,height:te,fill:g.color??"var(--color-warn-mark)",opacity:.55})},`zone-${W}-${I}-${g.label??""}`)}),x!==void 0&&P>0&&ce(x,!0),p!==void 0&&P>0&&ce(p,!1),me.map(g=>{const I=z(g);return n.jsxs("g",{children:[n.jsx("line",{x1:G?_+Z+4:_-4,y1:I,x2:G?_+Z:_,y2:I,stroke:"var(--color-border-subtle)",strokeWidth:1}),n.jsx("text",{x:ne,y:I,textAnchor:le,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:T.mark(g)})]},`tick-${g}`)}),h?.map(g=>{const{bounds:I}=g,W=A(g.value),te=g.color??"var(--color-accent-fg)";return n.jsxs("g",{"data-marker":g.label,children:[n.jsx("line",{x1:_,y1:W,x2:_+Z,y2:W,stroke:te,strokeWidth:2,strokeDasharray:"2 2"}),n.jsx("polygon",{points:G?`${_},${W} ${_-5},${W-3} ${_-5},${W+3}`:`${_+Z},${W} ${_+Z+5},${W-3} ${_+Z+5},${W+3}`,fill:"none",stroke:te,strokeWidth:1.5}),I!==void 0&&["lo","hi"].map(ge=>{const je=A(I[ge]);return n.jsx(Ue,{end:ge,x1:_,y1:je,x2:_+Z,y2:je},ge)})]},`marker-${W}-${g.label??""}`)}),ee!==null&&["lo","hi"].map(g=>{const I=A(ee[g]);return n.jsx(Ue,{end:g,x1:_,y1:I,x2:_+Z,y2:I},g)}),K&&n.jsxs(n.Fragment,{children:[n.jsx("line",{x1:_-6,y1:V,x2:_+Z+6,y2:V,stroke:"var(--color-accent-fg)",strokeWidth:2}),n.jsxs("text",{x:G?ne+2:ne-2,y:Math.max(O+4,Math.min(oe-4,V)),textAnchor:le,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[T.mark(q),R&&n.jsx(Ft,{size:5})]})]}),!K&&n.jsx(Cn,{x:G?ne+8:ne-8,y:O+U/2,size:11,children:de}),T.symbol!==""&&n.jsx("text",{x:_+Z/2,y:O-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:T.symbol})]}),y]})}const Ta=d.div`
  display: block;
  max-width: 100%;
`,bt={w:5,h:4},Ea=8,Ra=7;function Us(e,t){return e===void 0||t===void 0?"normal":e<bt.w||t<bt.h?"tiny":e<Ea||t<Ra?"small":"normal"}const rn=1.6,Ma=1/rn;function Gs(e,t){if(e===void 0||t===void 0||t===0)return{shape:"square",aspect:1};const r=e/t;return r>=rn?{shape:"landscape",aspect:r}:r<=Ma?{shape:"portrait",aspect:r}:{shape:"square",aspect:r}}function Ia(e){switch(e.reason){case"no-horizon-stated":return{heading:"NO HORIZON STATED",detail:"Nothing says how far ahead these orbital elements can be trusted."};case"past-horizon":return e.trajectoryKind===Vn.Integrated?{heading:"BEYOND INTEGRATION",detail:"The trajectory is not computed this far ahead yet."}:{heading:"PAST HORIZON",detail:"These orbital elements cannot be trusted this far ahead."};case"shape-not-stated":return{heading:"SHAPE NOT STATED",detail:"Nothing has said whether this trajectory is a conic."};case"frame-unavailable":return{heading:"FRAME UNAVAILABLE",detail:"The trajectory is fine; the frame it was asked for cannot be built from the bodies known here. Pick another frame."};default:return{heading:"NO PATH AVAILABLE",detail:"The integrated trajectory could not be sampled."}}}function Vs({withheld:e,compact:t=!1}){const{heading:r,detail:o}=Ia(e);return n.jsx(we,{text:t?o:void 0,focusable:!0,children:n.jsxs(ye,{role:"status",children:[n.jsx(be,{size:"xs",children:r}),!t&&n.jsx(be,{level:"muted",size:"xs",children:o})]})})}const Ks=d.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,Aa=112;function Fa(e,t){try{return se(e,1).in(t).magnitude}catch{return Number.NaN}}function Na(e,t){let r=e;return t.map((o,a)=>{if(!Number.isFinite(o)||o===0)return 0;const s=a===t.length-1?r/o:Math.trunc(r/o);return r-=s*o,s})}function Xs({value:e,unit:t,onChange:r,label:o,rungs:a,range:s,rate:i,disabled:l}){const c=f.useId(),{shown:h,held:p,caption:x}=Ne(e),w=p?n.jsx(Tt,{caption:x,children:o}):o,v=s,u=h?h.magnitude:Number.NaN,[E,C]=f.useState({}),m=$=>E[$]??null,k=($,B)=>C(N=>({...N,[$]:B})),b=i?n.jsxs(ye,{gap:"related-packed",children:[n.jsx(jo,{mode:"rate","aria-label":`${o} rate`,value:u,step:i.step,stepsPerSecond:i.stepsPerSecond,disabled:l||!Number.isFinite(u),format:Pe(t)?Ca:void 0,width:Pe(t)?Aa:void 0,onChange:$=>r(se(t,$))}),n.jsx(be,{level:"faint",size:"sm",children:`${i.step} ${La(t)} / notch`})]}):null;if(Pe(t))return n.jsxs(Be,{children:[n.jsx(wt,{"aria-hidden":"true",children:w}),n.jsxs(ye,{gap:"related-dense",children:[n.jsx(qo,{label:p&&x!==null?`${o}, ${x}`:o,value:Number.isFinite(u)?u:null,disabled:l,steps:i?[]:void 0,onChange:$=>r(se(t,$))}),b]})]});if(a&&a.length>0){const $=a.map(y=>Fa(String(y),t)),B=Na(u,$),N=(y,L)=>{const j=Oe(L);if(j===void 0){k(y,{text:L,against:B[y]});return}const M=B.slice();M[y]=j;const P=M.reduce((q,X,K)=>Number.isFinite($[K])?q+X*$[K]:q,0);k(y,{text:L,against:j}),r(se(t,P))};return n.jsxs(Be,{children:[n.jsx(wt,{id:`${c}-label`,children:w}),n.jsx(Ba,{role:"group","aria-labelledby":`${c}-label`,children:a.map((y,L)=>n.jsxs(za,{children:[n.jsx(Wa,{type:"number",disabled:l,"aria-label":`${o} ${String(y)}`,value:yt(m(L),B[L]),onChange:j=>N(L,j.target.value)}),n.jsx($t,{"aria-hidden":"true",children:String(y)})]},String(y)))}),b]})}const R=$=>{const B=Oe($);k(0,{text:$,against:B??u}),B!==void 0&&r(se(t,B))};return n.jsxs(Be,{children:[n.jsx(Pa,{htmlFor:c,children:w}),n.jsxs(Oa,{children:[n.jsx(an,{id:c,type:"number",disabled:l,min:v?.min,max:v?.max,step:v?.step,value:yt(m(0),u),onChange:$=>R($.target.value)}),n.jsx($t,{"aria-hidden":"true",children:t})]}),v?n.jsx(xa,{disabled:l,"aria-label":`${o} slider`,min:v.min,max:v.max,step:v.step??(v.max-v.min)/100,value:Number.isFinite(u)?u:v.min,onChange:$=>r(se(t,Oe($.target.value)??v.min))}):null,b]})}function yt(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(Da(t)):""}function La(e){return Pt(e)??e}function Pe(e){return Pt(e)==="s"}function Ca(e){if(!Number.isFinite(e))return"";const{day:t,hour:r,minute:o,second:a}=Zt(e),s=i=>String(i).padStart(2,"0");return`D${t} ${s(r)}:${s(o)}:${s(a)}`}function Oe(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function Da(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const Be=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,on=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Pa=d.label`
  ${on}
`,wt=d.span`
  ${on}
`,Oa=d.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,an=d.input`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-field-compact);
  border-radius: var(--radius-regular);
  text-align: right;
  font-variant-numeric: tabular-nums;
  min-width: 0;

  ${pe}
`,$t=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Ba=d.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,za=d.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,Wa=d(an)`
  width: 4.5em;
`,ze=.86,jt=[[0,-1.15],[1.05,.8],[-1.05,.8]],kt=.3,J={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:ze,triangle:jt,outlineWidth:kt,keylineWidth:.2,reach:Math.max(Math.hypot(ze,ze),...jt.map(([e,t])=>Math.hypot(e,t)))+kt/2},Ha={"aria-hidden":!0};function sn(e,t,r,o){const a=J.squareHalf;return(e==="modelled"?J.triangle:[[-a,-a],[a,-a],[a,a],[-a,a]]).map(([i,l])=>[t+i*o,r+l*o])}const ln=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function cn(e,t,r){const o=e==="current"?0:J.outlineWidth;return t*(o+2*r*J.keylineWidth)}function Ys({x:e,y:t,r,state:o="current",keyline:a=!1}){const s=o==="current"?"":sn(o,0,0,r).map(([i,l])=>`${i},${l}`).join(" ");return n.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...Ha,children:[a&&ln.map(({ring:i,color:l,widths:c})=>{const h={"data-vessel-keyline":i,fill:"none",stroke:l,strokeWidth:cn(o,r,c),strokeLinejoin:"round"};return o==="current"?n.jsx("circle",{r,...h},i):n.jsx("polygon",{points:s,...h},i)}),o==="current"?n.jsx("circle",{r,fill:J.color}):n.jsx("polygon",{points:s,fill:o==="lost"?"none":Me[o].color,stroke:o==="lost"?J.lost.color:J.color,strokeWidth:r*J.outlineWidth,strokeLinejoin:"round"})]})}function Te(e,t,r){return getComputedStyle(e).getPropertyValue(t).trim()||r}function dn(e,t,r,o,a){if(e.beginPath(),t==="current"){e.arc(r,o,a,0,Math.PI*2);return}sn(t,r,o,a).forEach(([s,i],l)=>{l===0?e.moveTo(s,i):e.lineTo(s,i)}),e.closePath()}function Ua(e,t,r,o,a){e.save(),e.lineJoin="round";for(const{color:s,widths:i}of ln)dn(e,t,r,o,a),e.strokeStyle=s,e.lineWidth=cn(t,a,i),e.stroke();e.restore()}function Ga(e,t,r,o,a,s=4,{keyline:i=!1}={}){i&&Ua(t,r,o,a,s);const l=Te(e,J.cssVar,J.fallback);if(t.save(),dn(t,r,o,a,s),r==="current")t.fillStyle=l,t.fill();else{if(r!=="lost"){const c=Me[r];t.fillStyle=Te(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=r==="lost"?Te(e,J.lost.cssVar,J.lost.fallback):l,t.lineWidth=s*J.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function qs(e,t,r,o=4,a={}){const{held:s,modelled:i}=r;s!==void 0&&i!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=Te(e,Me.modelled.cssVar,Me.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(i.x,i.y),t.stroke(),t.restore());for(const l of["lost","held","current","modelled"]){const c=r[l];c!==void 0&&Ga(e,t,l,c.x,c.y,o,a)}}function Zs({row:e,style:t}){const o=Zn("meters").filter(a=>a.row===e);return o.length===0?null:n.jsx(Sn,{style:t,role:"group","aria-label":"meters",children:o.map(a=>n.jsx(Tn,{label:a.label,value:a.value,tone:a.tone,valueLabel:a.valueLabel},a.id))})}const un=f.createContext(null);function Js({widget:e,scope:t,children:r}){const o=f.useMemo(()=>({widget:e,scope:t}),[e,t]);return n.jsx(un.Provider,{value:o,children:r})}function Qs(e){const t=f.useContext(un);if(!(!t||t.widget!==e))return t.scope}export{dr as $,Rr as A,ds as B,ps as C,ys as D,ks as E,Ss as F,Xt as G,Ts as H,sr as I,jo as J,Po as K,Ms as L,Ls as M,Yt as N,Ps as O,Go as P,Ho as Q,qt as R,Wo as S,Co as T,Os as U,Jt as V,zs as W,vs as X,xa as Y,ya as Z,Ws as _,is as a,bt as a0,As as a1,Hs as a2,Bo as a3,Vs as a4,Ks as a5,Xs as a6,J as a7,Ys as a8,Zs as a9,Js as aa,ar as ab,yr as ac,_s as ad,Us as ae,Gs as af,Ga as ag,qs as ah,Bs as ai,Ia as aj,Ir as ak,xs as al,Qs as am,Yo as an,Do as b,zo as c,ls as d,cs as e,Ns as f,us as g,fs as h,hs as i,gs as j,bs as k,ws as l,$s as m,js as n,ms as o,ho as p,Fs as q,Es as r,_r as s,Rs as t,Is as u,Oo as v,Cs as w,qo as x,Ds as y,Uo as z};
