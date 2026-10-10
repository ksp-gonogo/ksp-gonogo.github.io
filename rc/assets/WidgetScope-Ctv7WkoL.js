import{j as n}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./ext-react-RRA14VTW.js";import c,{css as re,keyframes as an}from"./ext-styled-components-Br73TgY3.js";import{a3 as on,g as sn,K as ln,al as Qe,am as cn,U as pe,e as dn,Y as un,V as fn,Z as hn,X as pn,an as mn,ac as gn,ao as xn,ap as et,a9 as jt,a6 as _t,B as vn,H as Xe,c as bn,M as yn}from"./ToggleButton-BJbMtCi1.js";import{E as wn,a1 as Ie,m as $n,F as kt,l as Ye,v as St,V as Be,a9 as ze,a2 as we,Z as Tt,aB as jn,_ as Et,a4 as Ae,aA as Rt,aC as He,ae as Mt,aD as Te,az as Ee,a5 as Ze,f as _n,a3 as me,d as We,T as kn,af as Sn,G as Tn,k as En,ar as Rn,aE as Mn}from"./vesselMark-BNXCAyQe.js";import{G as $e,N as de,R as It,I as In,t as Ue,w as At,j as Ge,i as An,k as Fn,a as be,l as Ft,T as Nn,b as Ln,q as tt}from"./streamStatusWord-oQfueYZn.js";import{aU as nt,bU as Cn,aX as oe,k as Nt,bQ as Dn,ck as Pn,a$ as qe,T as On,bP as Lt}from"./view-clock-formula-V4D43Fqq.js";import"./ksp-enum-names-mMQ85-RD.js";import{p as Bn}from"./screen-UZmJz89R.js";import{s as zn,x as Hn,f as ye,c as Wn,m as Un}from"./contributionsRead-BiwtOfll.js";import{r as Gn}from"./ext-react-dom-CZVBhjGL.js";import{l as Vn}from"./capability-lock-B98Yxp7W.js";import"./lagrange-BKHNrtNu.js";import"./use-transmissions-BVXmpKl3.js";import{r as Kn}from"./control-frame-to-read-frame-BdkWKX2h.js";function Qo({items:e,onSelect:t,onDismiss:r,"aria-label":o,style:a,header:s,footer:i,emptyLabel:l="No actions",otherLabel:d="Other"}){const h=f.useRef(null),p=f.useId(),[v,w]=f.useState(0),g=on(e,d),u=g.flatMap(([,m])=>m),E=u.length;f.useEffect(()=>{const m=h.current;if(!m)return;if(E===0){m.focus();return}m.querySelectorAll('[role="menuitem"]')[v]?.focus()},[v,E]),f.useEffect(()=>{const m=_=>{const b=h.current;b&&_.target instanceof Node&&!b.contains(_.target)&&r()};return document.addEventListener("pointerdown",m),()=>document.removeEventListener("pointerdown",m)},[r]);const D=f.useCallback(m=>{if(m.key==="Escape"){m.stopPropagation(),r();return}if(m.key==="Tab"){r();return}if(u.length!==0)switch(m.key){case"ArrowDown":m.preventDefault(),w(_=>Math.min(_+1,u.length-1));break;case"ArrowUp":m.preventDefault(),w(_=>Math.max(_-1,0));break;case"Home":m.preventDefault(),w(0);break;case"End":m.preventDefault(),w(u.length-1);break}},[u.length,r]);return n.jsxs(Xn,{ref:h,role:E>0?"menu":void 0,"aria-label":o,onKeyDown:D,tabIndex:-1,style:a,children:[s,u.length===0?n.jsx(wn,{layout:"fill",children:l}):g.map(([m,_],b)=>n.jsxs("div",{...g.length>1?{role:"group","aria-labelledby":`${p}-group-${b}`}:{role:"none"},children:[g.length>1?n.jsx(Yn,{id:`${p}-group-${b}`,"aria-hidden":"true",children:m}):null,_.map(R=>{const $=u.indexOf(R);return n.jsx(Zn,{type:"button",role:"menuitem","aria-label":R["aria-label"],"aria-disabled":R.disabled,$disabled:R.disabled,tabIndex:$===v?0:-1,onFocus:()=>w($),onClick:()=>{R.disabled||t(R.key)},children:R.label},R.key)})]},m)),i]})}const Xn=c.div`
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
`,Yn=c.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,Zn=c.button`
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

  ${Ie}
  /* The background marks the focused row where the ring meets the menu border. */
  &:focus-visible {
    background: var(--color-border-subtle);
  }

  &[aria-disabled="true"] {
    color: var(--color-text-faint);
    cursor: default;
  }
`;function es({settings:e,values:t,onChange:r}){return e.length===0?null:n.jsx(n.Fragment,{children:e.flatMap(o=>o.fields.map(a=>{const i=t?.[o.namespace]?.[a.key]??a.default,l=a.label??a.key,d=`augment-setting-${o.namespace}-${a.key}`;return a.type==="boolean"?n.jsx($n,{children:n.jsx(sn,{checked:!!i,onChange:h=>r(o.namespace,a.key,h),label:l})},`${o.namespace}.${a.key}`):n.jsxs(kt,{children:[n.jsx(Ye,{htmlFor:d,children:l}),n.jsx(St,{id:d,type:a.type==="number"?"number":"text",value:i===void 0?"":String(i),onChange:h=>{const p=h.target.value;if(a.type!=="number"){r(o.namespace,a.key,p);return}if(p===""){r(o.namespace,a.key,void 0);return}const v=Number(p);Number.isFinite(v)&&r(o.namespace,a.key,v)}})]},`${o.namespace}.${a.key}`)}))})}function ts({fallback:e,gap:t="related-dense",children:r,...o}){return n.jsxs(n.Fragment,{children:[n.jsx(Ct,{$gap:t,...o,children:r}),n.jsx(qn,{children:e})]})}const Ct=c.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>$e[e]};
`,qn=c.div`
  ${Ct}:not(:empty) + & {
    display: none;
  }
`,rt=12,_e=8;function Jn(e,t,r){return{left:at(e.x,t.w,r.w),top:at(e.y,t.h,r.h)}}function at(e,t,r){const o=e+rt;if(o+t<=r-_e)return o;const a=e-rt-t;return a>=_e?a:Math.max(_e,r-_e-t)}const Qn="–";function ns({min:e,max:t,wrapsAt:r,className:o,...a}){const s=nt(e),i=nt(t);return e==null||t==null||s===null||i===null?n.jsx(Re,{className:o,children:de}):r!==void 0&&Math.abs(i-s)>=r/2?n.jsx(Re,{className:o,children:"(precesses)"}):n.jsx(ln,{of:e.unit,separate:!0,...a,children:n.jsx(er,{min:e,max:t,className:o})})}function er({min:e,max:t,className:r}){return Qe(e),Qe(t),cn(e)?n.jsx(Re,{className:r,children:n.jsxs(nr,{children:[n.jsx("span",{"aria-hidden":"true",children:"~"}),n.jsx(Be,{children:"approximately "}),n.jsx(pe,{value:e})]})}):n.jsxs(Re,{className:r,children:[n.jsx(pe,{value:e}),n.jsx(tr,{"aria-hidden":"true",children:Qn}),n.jsx(Be,{children:" to "}),n.jsx(pe,{value:t})]})}const Re=c.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,tr=c.span`
  color: var(--color-text-faint);
`,nr=c.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`;function rr({children:e,status:t,gap:r="related-packed",align:o="center"}){return n.jsxs(ze,{align:o,gap:r,justify:"between",wrap:!0,children:[e,t]})}const Dt=c.div`
  color: var(--color-text-primary);
  font-weight: 600;
  /* One rung above the body the arrangement sets; both halves are declared here, so a site cannot break the step. */
  font-size: var(--font-size-value);
  line-height: var(--line-height-tight);
  /* A content-sized basis, so a long title wraps instead of running into the badge beside it. */
  flex: 1 1 auto;
  min-width: 0;
`,ar=c.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-record-lead);
  flex: 1 1 auto;
  min-width: 0;
`;function Pt({left:e,right:t,children:r}){return n.jsx(rr,{align:"baseline",status:t,children:e==null?r:n.jsxs(ar,{children:[e,r]})})}const or=c.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--gap-related);
`,Ot=c.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  flex: 1 1 var(--block-body-floor, 9rem);
  min-width: 0;
`,xe=c.div`
  min-width: 0;
  ${({$side:e})=>e?`flex: 0 0 auto;
    --radius-display-frame: var(--radius-display-frame-aside);`:""}
`,Bt=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-related);
  flex-wrap: wrap;
`,Je=c.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  min-width: 0;
  /* The compact body size, declared here so the title stays one rung above it. */
  font-size: var(--font-size-compact);
`;function Me(e,{title:t,titleAs:r,titleLeft:o,titleRight:a,left:s,right:i,top:l,bottom:d,footer:h,children:p,...v}){const w=t!=null||o!=null||a!=null,g=s!=null||i!=null,u=w&&n.jsx(Pt,{left:o,right:a,children:t!=null&&n.jsx(Dt,{as:r,children:t})});return n.jsxs(e,{...v,children:[l!=null&&n.jsx(xe,{$side:!1,children:l}),g?n.jsxs(or,{children:[s!=null&&n.jsx(xe,{$side:!0,children:s}),n.jsxs(Ot,{children:[u,p]}),i!=null&&n.jsx(xe,{$side:!0,children:i})]}):n.jsxs(n.Fragment,{children:[u,p]}),h!=null&&n.jsx(Bt,{children:h}),d!=null&&n.jsx(xe,{$side:!1,children:d})]})}const zt={Title:Dt,TitleRow:Pt,Body:Ot,Aside:xe,Footer:Bt};function sr({...e}){return Me(Je,e)}const rs=Object.assign(sr,zt),ir={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function as({surface:e,pad:t,bordered:r=!1,radius:o,children:a,...s}){return n.jsx(lr,{$surface:e,$pad:t,$bordered:r,$radius:o,...s,children:a})}const lr=c.div`
  ${({$surface:e})=>e&&`background: ${ir[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${It[e]};`}
  ${({$pad:e})=>e&&`padding: var(${In[e]});`}
`,os=f.forwardRef(function({equalWidth:t=!0,gap:r,children:o,...a},s){return n.jsx(cr,{ref:s,$equalWidth:t,$gap:r,...a,children:o})}),cr=c.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?$e[e]:"var(--gap-related)"};
`,dr="3px",ur=c(Je)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${Ue(e)};`:""}
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
    ${t?`border-left-color: color-mix(in srgb, ${Ue(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function fr({tone:e,dimmed:t,identityColor:r,standalone:o,...a}){return Me(ur,{...a,$tone:e,$dimmed:t,$identityColor:r,$standalone:o})}const ss=Object.assign(fr,zt);function hr(e){const t=e.inFlight.filter(r=>r.predictedPhase==="overdue"||r.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const is=f.forwardRef(function({label:t,icon:r,type:o,...a},s){return n.jsx("button",{ref:s,type:o??"button","aria-label":t,...a,children:n.jsx(Ht,{label:t,icon:r})})});function Ht({label:e,icon:t}){const r=f.useRef(null),o=f.useRef(null),[a,s]=f.useState(!0);return f.useLayoutEffect(()=>{const i=r.current,l=o.current;if(!i||!l)return;const d=()=>{s(l.scrollWidth<=i.clientWidth)};if(d(),typeof ResizeObserver>"u")return;const h=new ResizeObserver(d);return h.observe(i),h.observe(l),()=>h.disconnect()},[]),n.jsxs(pr,{ref:r,children:[n.jsx(mr,{ref:o,"aria-hidden":"true",children:e}),a?n.jsx(gr,{"aria-hidden":"true",children:e}):n.jsx(xr,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const pr=c.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,mr=c.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,gr=c.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,xr=c.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function vr({holds:e,label:t,spinnerSize:r=12}){return n.jsxs(br,{children:[n.jsx(yr,{"aria-hidden":"true",children:e}),n.jsx(wr,{children:n.jsx(dn,{size:r,"aria-label":t})})]})}const br=c.span`
  display: inline-grid;
  & > * {
    grid-area: 1 / 1;
  }
`,yr=c.span`
  visibility: hidden;
`,wr=c.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,$r=4e3,ot=8e3,jr=3e4;function Wt(e,t){return e.gateFor?e.gateFor(t):e.gate}function _r({handle:e,args:t,commandLabel:r,onConfirmed:o}){const[a,s]=f.useState("idle"),[i,l]=f.useState(null),[d,h]=f.useState(null),[p,v]=f.useState(!1),w=Wt(e,t),g=w?.blocked===!0,u=f.useRef(!0),E=f.useRef(0);f.useEffect(()=>()=>{u.current=!1},[]);const D=e.founds,m=f.useRef(!1),_=f.useRef(D?.length??0);f.useEffect(()=>{const y=D?.length??0,C=y>_.current;_.current=y;const j=D?.[y-1];!C||!j||!m.current||(m.current=!1,h(j),l(null),s("found"))},[D]),f.useEffect(()=>{if(a!=="armed")return;const y=setTimeout(()=>s("idle"),$r);return()=>clearTimeout(y)},[a]),f.useEffect(()=>{if(a!=="refused"&&a!=="lost"&&a!=="found")return;const y=setTimeout(()=>{s("idle"),l(null),h(null)},ot);return()=>clearTimeout(y)},[a]),f.useEffect(()=>{if(!p)return;const y=setTimeout(()=>v(!1),ot);return()=>clearTimeout(y)},[p]),f.useEffect(()=>{g||v(!1)},[g]),f.useEffect(()=>{if(a!=="pending")return;const y=setTimeout(()=>s("idle"),jr);return()=>clearTimeout(y)},[a]);const b=f.useCallback(()=>{const y=E.current+1;E.current=y,s("pending"),l(null);const C=(j,M)=>{!u.current||E.current!==y||(l(M),s(j))};e.send(t,r?{label:r}:void 0).then(j=>{C("idle",null),o?.(j)},j=>{const M=Cn(j);if(M.kind==="lost"){m.current=!0,C("lost",null);return}if(M.kind!=="refused"){C("idle",null);return}C("refused",{errorCode:M.errorCode,reason:M.reason,command:M.command,args:M.args,label:M.label??r,breach:M.breach,detail:M.detail})})},[e,t,r,o]),{hasUnconfirmed:R,hasFailure:$}=hr(e),z=f.useCallback(y=>{if(a!=="pending"){if(g){v(!0);return}if(a==="refused"||a==="lost"||a==="found"){l(null),h(null),s("idle");return}if(y&&a!=="armed"){s("armed");return}b()}},[a,g,b]),L=a==="pending"||a==="refused"||a==="lost"||a==="found"?a:g?"blocked":a;return{phase:L,isPending:L==="pending",isArmed:L==="armed",isRefused:L==="refused",isLost:L==="lost",isFound:L==="found",isBlocked:L==="blocked",isShowingReason:L==="blocked"&&p,refusalText:i?hn(i):L==="blocked"&&w?pn({...w,label:w.label??r,args:w.args??t}):null,foundText:d?fn(d):null,lossText:L==="lost"?un({args:t,label:r}):null,hasUnconfirmed:R,hasFailure:$,press:z}}function ls({handle:e,args:t,commandLabel:r,label:o,confirmLabel:a,pendingLabel:s="Working...",refusedLabel:i="Refused",lostLabel:l="No reply",foundLabel:d="Found",confirmAriaLabel:h,pendingAriaLabel:p,blockedAriaLabel:v,active:w,variant:g="ghost",tone:u="neutral",icon:E,confirmIcon:D,onPressReady:m,size:_="md",confirmTone:b="go",onConfirmed:R,disabled:$,title:z,"aria-label":L,...y}){const{phase:C,isPending:j,isArmed:M,isRefused:B,isLost:Y,isFound:X,isBlocked:U,isShowingReason:T,refusalText:P,foundText:F,lossText:W,hasUnconfirmed:se,hasFailure:G,press:H}=_r({handle:e,args:t,commandLabel:r,onConfirmed:R});f.useEffect(()=>{if(!(!m||j))return m(H),()=>m(null)},[m,j,H]);const O=j?n.jsx(vr,{holds:o,label:s,spinnerSize:_==="sm"?10:12}):B?i:Y?l:X?d:T?P:M?a:o,te=E!==void 0&&typeof O=="string",V=te?n.jsx(Ht,{label:O,icon:M?D??E:E}):O,k=E===void 0&&typeof o=="string"&&typeof a=="string"&&!B&&!Y&&!X&&!T,ne=B?P:Y?W:X?F:null,ie=w===!0||M||B,ce=kr({restTone:g==="primary"?u:"neutral",filled:ie,isRefused:B,isFound:X,isArmed:M,confirmTone:b,tone:u});return n.jsxs(n.Fragment,{children:[n.jsx(we,{text:F??P??(j?s:z),children:n.jsx(Er,{type:"button",$tone:ce,$variant:g,$fit:te,$size:_,$pressed:ie,$armed:M,$blocked:U,"aria-pressed":w,"aria-busy":j||void 0,"aria-disabled":U||j||void 0,disabled:$,"data-unconfirmed":se?"true":void 0,"data-failed":G?"true":void 0,"data-command-phase":C,"data-gate":U?"blocked":Wt(e,t)?.undetermined?"undetermined":void 0,"aria-label":(B?P??void 0:Y?W??void 0:X?F??L:U?v??P??L:j?p??s:M?h:L)??(te?O:void 0),onClick:()=>H(a!==void 0),"data-rest-label":k?o:void 0,"data-armed-label":k?a:void 0,...y,children:k?n.jsx(Tr,{children:V}):V})}),n.jsx(Tt,{visuallyHidden:!0,children:ne})]})}function kr(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const Sr=an`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,Tr=c.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,Er=c(jn)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&re`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Sr} 1s var(--ease-emphasis) infinite;
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
`;function cs({oneWaySeconds:e,delayReading:t,className:r}){const o=oe("s",e);return n.jsxs(Rr,{className:r,role:"group","aria-label":"Signal delay",children:["one-way ~",n.jsx(pe,{value:mn(o,t),...o.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const Rr=c.div`
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
`;function ds(e){const t=gn(),r=f.useId(),o=e!==null;f.useEffect(()=>{if(!(!t||!e))return t.register({id:r,...e})},[t,r,o]),f.useEffect(()=>{!t||!e||t.update(r,e)},[t,r,e])}function us({at:e,narrow:t,wide:r,children:o,...a}){return n.jsx(Mr,{$at:e,$narrow:t,$wide:r,...a,children:o})}const Mr=c.div`
  ${({$narrow:e})=>e}
  @container (min-width: ${({$at:e})=>e}px) {
    ${({$wide:e})=>e}
  }
`;function Ir(e,t){return e.value!==void 0?n.jsx(pe,{value:e.value(t)??null}):e.render(t)}function fs({columns:e,rows:t,sections:r,rowKey:o,caption:a,empty:s,rowDetail:i,className:l}){const d=r??(t?[{id:"",title:null,rows:[...t]}]:[]),h=d.reduce((u,E)=>u+E.rows.length,0),[p,v]=f.useState(null),w=xn(p),g=Et(p);return n.jsxs(Ar,{className:l,children:[n.jsx(Fr,{ref:v,tabIndex:g,children:n.jsxs(Nr,{children:[n.jsx(Lr,{children:a}),n.jsx("thead",{children:n.jsx("tr",{children:e.map(u=>n.jsx(Cr,{scope:"col",$align:u.align??"start",style:{width:u.width,minWidth:u.minWidth},children:u.header},u.key))})}),h===0&&s!==void 0&&n.jsx("tbody",{children:n.jsx("tr",{children:n.jsx(zr,{colSpan:e.length,children:s})})}),d.map(u=>n.jsxs("tbody",{children:[u.title!==null&&u.title!==void 0&&n.jsx("tr",{children:n.jsx(Dr,{scope:"rowgroup",colSpan:e.length,children:u.title})}),u.rows.map(E=>{const D=o(E),m=i?.(E),_=m!=null&&m!==!1&&m!=="";return n.jsxs(f.Fragment,{children:[n.jsx(Pr,{$hasDetail:_,children:e.map(b=>n.jsx(Or,{as:b.rowHeader?"th":void 0,scope:b.rowHeader?"row":void 0,$align:b.align??"start",children:Ir(b,E)},b.key))}),_?n.jsx("tr",{children:n.jsx(Br,{colSpan:e.length,children:m})}):null]},D)})]},u.id))]})}),n.jsx(et,{$position:"left",$visible:w.left}),n.jsx(et,{$position:"right",$visible:w.right})]})}const Ar=c.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Fr=c.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${Ie}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Nr=c.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,Lr=c.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,Cr=c.th`
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
`,Dr=c.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,Pr=c.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,Or=c.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,Br=c.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,zr=c.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`,Hr=6,Wr=3,Ne={track:8,hub:4,needle:.92},Ur={regular:{size:16,drop:18},large:{size:24,drop:32}};function ae(e,t,r,o){const a=o*Math.PI/180;return{x:e+r*Math.sin(a),y:t-r*Math.cos(a)}}function st(e,t,r,o,a){const s=ae(e,t,r,o),i=ae(e,t,r,a),l=a-o,d=Math.abs(l)>180?1:0,h=l>=0?1:0;return`M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${d} ${h} ${i.x.toFixed(2)} ${i.y.toFixed(2)}`}function hs({value:e,min:t,max:r,width:o=120,height:a=120,startAngle:s=0,sweep:i=360,wrap:l=!1,zones:d,ticks:h,valueLabel:p,readout:v,format:w,needleColor:g="var(--color-text-primary)",trackColor:u="var(--color-border-subtle)","aria-label":E}){const D=Ae(e),{shown:m,held:_,caption:b,band:R}=D,{anchor:$,tip:z}=Rt(b),L=m?.magnitude??Number.NaN,y=t.magnitude,C=r.magnitude,j=C-y,M=Number.isFinite(L)?L:y,B=j>0?l?y+((M-y)%j+j)%j:Math.max(y,Math.min(C,M)):y,Y=m!=null,X=m==null?null:{magnitude:B,unit:m.unit},U=p??(X===null?null:At(X,{format:w})),T=X===null?de:Ge(X,{format:w}),P=m==null||R===null?null:Nt(R,m.unit)??null,F=v!==void 0&&i<=180,W=F?Ne.track:Hr,se=F?Ne.hub:Wr,G=v===void 0?null:Ur[v],H=o/2,I=F&&G!==null?Math.min((o-W)/2,a-W-G.drop):Math.min(o,a)/2-W-2,O=F?I+W/2:a/2,te=S=>{const Z=j>0?(S-y)/j:0;return s+Z*i},V=S=>S.max(t).min(r),k=S=>te(S.magnitude),ne=S=>i!==0?(S-s)/i:0,ie=P!==null&&jt(ne(te(B)),[ne(k(V(P.lo))),ne(k(V(P.hi)))],_t({wraps:l}))?P:null,ce=i>=360,ue=ae(H,O,I*(F?Ne.needle:.88),te(B));return n.jsxs(Gr,{...Ze(D),...$,...Y?{role:"meter","aria-label":Ee(E,b),...Te(b),"aria-valuenow":B,"aria-valuemin":y,"aria-valuemax":C,"aria-valuetext":T}:{role:"img","aria-label":Ee(`${E}: ${T}`,b),...Te(b)},children:[n.jsxs("svg",{width:o,height:a,viewBox:`0 0 ${o} ${a}`,"aria-hidden":"true",style:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[I>0&&(ce?n.jsx("circle",{cx:H,cy:O,r:I,fill:"none",stroke:u,strokeWidth:W}):n.jsx("path",{d:st(H,O,I,s,s+i),fill:"none",stroke:u,strokeWidth:W,strokeLinecap:"round"})),I>0&&!ce&&d?.flatMap(S=>{const Z=V(S.from.min(S.to)),K=V(S.from.max(S.to));return K.greaterThan(Z)?[Z.greaterThan(t)?null:s,r.greaterThan(K)?null:s+i].flatMap(J=>{if(J===null)return[];const le=ae(H,O,I,J);return[n.jsx("circle",{"data-dial-cap":"",cx:le.x,cy:le.y,r:W/2,fill:S.color},`cap-${S.color}-${J}`)]}):[]}),I>0&&d?.map(S=>{const Z=V(S.from.min(S.to)),K=V(S.from.max(S.to));return K.greaterThan(Z)?n.jsx("path",{d:st(H,O,I,k(Z),k(K)),fill:"none",stroke:S.color,strokeWidth:W,strokeLinecap:"butt"},`zone-${S.color}-${k(Z)}-${k(K)}`):null}),I>0&&h?.map(S=>{const Z=S.value.magnitude,K=te(Z),J=ae(H,O,I,K),le=ae(H,O,I-W,K),x=ae(H,O,I-W-8,K);return n.jsxs("g",{children:[n.jsx("line",{x1:le.x,y1:le.y,x2:J.x,y2:J.y,stroke:"var(--color-text-faint)",strokeWidth:1}),S.label&&n.jsx("text",{x:x.x,y:x.y,textAnchor:"middle",dominantBaseline:"middle",fontSize:9,fill:"var(--color-text-faint)",children:S.label})]},`tick-${Z}-${S.label??""}`)}),I>0&&ie!==null&&["lo","hi"].map(S=>{const Z=k(V(ie[S])),K=ae(H,O,I-W/2,Z),J=ae(H,O,I+W/2,Z);return n.jsx(He,{end:S,x1:K.x,y1:K.y,x2:J.x,y2:J.y},S)}),I>0&&Y&&n.jsxs(n.Fragment,{children:[n.jsx("line",{x1:H,y1:O,x2:ue.x,y2:ue.y,stroke:g,strokeWidth:2,strokeLinecap:"round"}),n.jsx("circle",{cx:H,cy:O,r:se,fill:g})]}),n.jsxs("text",{x:H,y:F&&G!==null?O+G.drop:O+I*.55,textAnchor:"middle",fontSize:F&&G!==null?G.size:13,fontWeight:F?void 0:"bold",fill:U===null?"var(--color-text-muted)":"var(--color-text-primary)",children:[U??de,_&&U!==null&&n.jsx(Mt,{size:F?7:6,figureSize:F&&G!==null?G.size:13})]})]}),z]})}const Gr=c.div`
  display: block;
  max-width: 100%;
`;function ps({label:e,children:t,"aria-label":r,className:o,variant:a="popover",panelHeight:s="cap",chevron:i=!0,asButton:l=!1,buttonSize:d="md",defaultOpen:h=!1}){const[p,v]=f.useState(h),w=f.useId(),g=f.useRef(null),[u,E]=f.useState(null),D=Et(u),m=a==="inline"&&i,_=typeof e=="function"?e(p):e,b={ref:g,type:"button","aria-expanded":p,"aria-controls":w,"aria-label":r,onClick:()=>v($=>!$)},R=n.jsxs(n.Fragment,{children:[_,m&&n.jsx(Yr,{$open:p,children:n.jsx(_n,{size:"var(--icon-size-control)"})})]});return n.jsxs(Vr,{className:o,$variant:a,onKeyDown:$=>{$.key==="Escape"&&p&&(v(!1),g.current?.focus())},children:[l?n.jsx(Xr,{...b,variant:"ghost",size:d,$inline:a==="inline",children:R}):n.jsx(Kr,{...b,$variant:a,$align:a==="inline"&&!i?"end":"between",children:R}),p&&n.jsx(Zr,{ref:E,id:w,role:"group",tabIndex:D,$variant:a,$panelHeight:s,children:t})]})}const Vr=c.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,Kr=c.button`
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
`,Xr=c(We)`
  ${({$inline:e})=>e&&re`
      align-self: flex-end;
    `}
`,Yr=c.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,Zr=c.div`
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
          ${Ie}
        `:""}
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function ms({space:e,...t}){return n.jsx(qr,{$space:e,...t})}const qr=c.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${$e[e]} 0`:"0"};
`,Jr=160,Qr=24,ea="...";function gs({children:e,limit:t=Jr,subject:r,className:o}){const[a,s]=f.useState(!1),i=f.useId(),l=ta(e,t);if(l===void 0)return n.jsx(n.Fragment,{children:e});const d=a?"Show less":"Show more";return n.jsxs(na,{className:o,children:[n.jsx("span",{id:i,children:a?e:`${l}${ea}`})," ",n.jsx(ra,{type:"button","data-expandable-toggle":"","aria-controls":i,"aria-expanded":a,"aria-label":r===void 0?void 0:`${d} of ${r}`,onClick:()=>s(h=>!h),children:d})]})}function ta(e,t){if(e.length<=t+Qr)return;const r=e.lastIndexOf(" ",t);return r<=0?e.slice(0,t):e.slice(0,r)}const na=c.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,ra=c(kn)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function xs(e,t){const r=t.map(s=>s==null?null:Bn(e,s.index)),o=r.length>0&&r.every(s=>s?.currency==="exact"),a=r.reduce((s,i)=>i?.currency!=="held"||i.asOfUt===null?s:s===null?i.asOfUt:Math.min(s,i.asOfUt),null);return s=>{const i=o?Dn(s):s;return a===null?i:{state:"held",value:i,asOfUt:oe("ut",a),grade:"held",reckoning:{status:"none"}}}}function vs({grow:e=!1,children:t,...r}){return n.jsx(aa,{$grow:e,...r,children:t})}const aa=c.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0;

  ${({$grow:e})=>e?"flex: 1 1 auto;":`
    height: 100%;
    width: 100%;
  `}
`;function oa({anchor:e,style:t,children:r,...o}){const[a,s]=f.useState(null),[i,l]=f.useState(null),d=f.useRef(e);d.current=e;const h=f.useCallback(()=>{if(!a)return;const p=d.current,v=typeof p=="function"?p():p;if(!v)return;const w=a.getBoundingClientRect(),g=Jn(v,{w:w.width,h:w.height},{w:window.innerWidth,h:window.innerHeight});l(u=>u&&u.left===g.left&&u.top===g.top?u:g)},[a]);return f.useLayoutEffect(()=>{h()}),f.useLayoutEffect(()=>{if(!a)return;const p=typeof ResizeObserver>"u"?null:new ResizeObserver(h);return p?.observe(a),window.addEventListener("resize",h),window.addEventListener("scroll",h,!0),()=>{p?.disconnect(),window.removeEventListener("resize",h),window.removeEventListener("scroll",h,!0)}},[a,h]),typeof document>"u"?null:Gn.createPortal(n.jsx(sa,{ref:s,style:{...t,left:i?.left??0,top:i?.top??0,visibility:i===null?"hidden":t?.visibility},...o,children:r}),document.body)}const sa=c.div`
  position: fixed;
  z-index: var(--z-dropdown);
`;function bs({grade:e,subject:t,size:r}){const o=An(e);return n.jsx(we,{text:t===void 0?void 0:`${t}: ${o}`,focusable:!0,children:n.jsx(vn,{tone:zn(e),size:r,children:o})})}const ia=120;function ys({trigger:e,"aria-label":t,children:r}){const[o,a]=f.useState(!1),s=f.useRef(null),i=f.useRef(null),l=f.useId(),d=f.useCallback(()=>{i.current!==null&&(clearTimeout(i.current),i.current=null)},[]),h=()=>{d(),a(!0)},p=()=>{d(),i.current=setTimeout(()=>a(!1),ia)},v=f.useCallback(()=>{d(),a(!1)},[d]);f.useEffect(()=>d,[d]),f.useEffect(()=>{if(!o)return;const g=u=>{u.key==="Escape"&&v()};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[o,v]);const w=()=>{const g=s.current?.getBoundingClientRect();return g?{x:g.left,y:g.bottom}:null};return n.jsxs(n.Fragment,{children:[n.jsx(la,{ref:s,type:"button","aria-label":t,"aria-describedby":o?l:void 0,onPointerEnter:h,onPointerLeave:p,onFocus:h,onBlur:v,children:e}),o&&n.jsx(oa,{anchor:w,onPointerEnter:d,onPointerLeave:p,children:n.jsx(ca,{id:l,role:"tooltip",children:r})})]})}const la=c.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${me}
`,ca=c.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function ws({gap:e,inset:t=!1,wrap:r=!1,children:o,...a}){return n.jsx(da,{$gap:e,$inset:t,$wrap:r,...a,children:o})}const da=c.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?$e[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,ua=4,fa=80,it=60,ha=30,Ve=24,pa=32,lt=56,ct=Ve;function Le(e,t,r){const{min:o,max:a,step:s}=t,i=e+r*s,l=Math.min(a,Math.max(o,i));if(!Number.isFinite(o))return l;const d=o+Math.round((l-o)/s)*s;return Math.min(a,Math.max(o,d))}function ma(e){const{value:t,min:r,max:o,step:a,orientation:s="horizontal",onChange:i,format:l,"aria-label":d,label:h=d,disabled:p=!1,width:v,height:w}=e,g=s==="vertical",u=Math.max(Ve,v??(g?ct:lt)),E=Math.max(Ve,w??(g?lt:ct)),D=e.mode==="rate",m=r??Number.NEGATIVE_INFINITY,_=o??Number.POSITIVE_INFINITY,b={min:m,max:_,step:a},R=f.useRef(null),$=f.useRef(t);$.current=t;const[z,L]=f.useState(0),y=l?l(t):String(Math.round(t)),C=_>m&&Number.isFinite(_-m)?(t-m)/(_-m):.5,j=T=>{p||T!==t&&i(T)};f.useEffect(()=>{if(!D||z===0||p)return;const T=(e.mode==="rate"?e.stepsPerSecond:void 0)??ha,P=setInterval(()=>{const F=$.current+z*T*a*(it/1e3);i(F)},it);return()=>clearInterval(P)},[D,z,p,a,i,e]);const M=T=>{if(p)return;let P=null;switch(T.key){case"ArrowRight":case"ArrowUp":P=Le(t,b,1);break;case"ArrowLeft":case"ArrowDown":P=Le(t,b,-1);break;case"Home":if(!Number.isFinite(m))return;P=m;break;case"End":if(!Number.isFinite(_))return;P=_;break;default:return}T.preventDefault(),j(P)},B=T=>s==="vertical"?T.clientY:T.clientX,Y=T=>{p||(R.current={start:B(T),startValue:t},T.currentTarget.setPointerCapture(T.pointerId))},X=T=>{if(p||!R.current)return;const P=s==="vertical"?R.current.start-B(T):B(T)-R.current.start;if(D){const W=P/fa;L(Math.max(-1,Math.min(1,W)));return}const F=P/ua;j(Le(R.current.startValue,b,F))},U=T=>{R.current&&(R.current=null,L(0),T.currentTarget.hasPointerCapture(T.pointerId)&&T.currentTarget.releasePointerCapture(T.pointerId))};return n.jsxs(ga,{children:[h!==!1&&n.jsx(xa,{"aria-hidden":"true",children:h}),n.jsxs(va,{role:"slider","aria-label":d,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":r,"aria-valuemax":o,"aria-valuetext":y,"aria-disabled":p||void 0,tabIndex:p?-1:0,$orientation:s,$disabled:p,$width:u,$height:E,$compact:(g?u:E)<pa,onKeyDown:M,onPointerDown:Y,onPointerMove:X,onPointerUp:U,onPointerCancel:U,children:[n.jsx(ba,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-C)*100}%)`}:{transform:`translateX(${(.5-C)*100}%)`},"aria-hidden":"true"}),n.jsx(ya,{$orientation:s,"aria-hidden":"true"}),n.jsx(wa,{"aria-hidden":"true",children:y})]})]})}const ga=c.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,xa=c.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,va=c.div`
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
`,ba=c.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,ya=c.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,wa=c.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function $s({lock:e}){const t=Pn(e)?$a(e):e,r=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return n.jsx(we,{text:r,focusable:!0,children:n.jsxs(_a,{role:"status","aria-label":r,children:[n.jsx(Sn,{}),n.jsx(ka,{children:ja(t)})]})})}function $a(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...Vn(t,Hn),locks:t}}function ja(e){const t=[...new Set(e.locks.flatMap(r=>r.missing.map(o=>o.name)))];return t.length>0?t.join(", "):e.reason}const _a=c.span`
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
`,ka=c.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,dt=1.4,ut=1.7,Sa="var(--icon-size-standalone)",Ta=1.8,ke="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",ft="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",ht="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",pt="M7 4.5V19.5M17 4.5V19.5",fe=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,Ut={prograde:{colour:"prograde",paths:[ke,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[ke,fe(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",fe(12,11)]},radialOut:{colour:"radial",paths:[ft,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[ft,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",fe(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",fe(12,12)]},relativePlus:{colour:"target",paths:[ke,ht],dot:[12,12]},relativeMinus:{colour:"target",paths:[ke,ht,fe(12,12)]},parallelPlus:{colour:"target",paths:[pt],dot:[12,12]},parallelMinus:{colour:"target",paths:[pt,fe(12,12)]}},js=Object.keys(Ut);function mt({shape:e,colour:t,strokeWidth:r,dotRadius:o}){return n.jsxs("g",{fill:"none",stroke:t,strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(a=>n.jsx("path",{d:a},a)),e.dot&&n.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:o,fill:t,stroke:"none"})]})}function Q(e,t){const r=Ut[e],o=`var(--color-marker-${r.colour})`,a=f.forwardRef(({size:s=Sa,strokeWidth:i=Ta,label:l,...d},h)=>{const p={ref:h,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24","data-marker":e},v=n.jsxs(n.Fragment,{children:[n.jsx(mt,{shape:r,colour:"currentColor",strokeWidth:i+dt,dotRadius:ut+dt/2}),n.jsx(mt,{shape:r,colour:o,strokeWidth:i,dotRadius:ut})]});return l?n.jsx("svg",{...p,role:"img","aria-label":l,...d,children:v}):n.jsx("svg",{...p,"aria-hidden":"true",...d,children:v})});return a.displayName=t,a}const Gt=Q("prograde","ProgradeIcon"),Ea=Q("retrograde","RetrogradeIcon"),Vt=Q("normal","NormalIcon"),Ra=Q("antiNormal","AntiNormalIcon"),Ma=Q("radialOut","RadialOutIcon"),Kt=Q("radialIn","RadialInIcon"),Ia=Q("maneuver","ManeuverIcon"),Aa=Q("target","TargetIcon"),Fa=Q("antiTarget","AntiTargetIcon"),Na=Q("relativePlus","RelativePlusIcon"),La=Q("relativeMinus","RelativeMinusIcon"),Ca=Q("parallelPlus","ParallelPlusIcon"),Da=Q("parallelMinus","ParallelMinusIcon"),_s=Gt,ks=Kt,Ss=Vt,Ts={prograde:Gt,retrograde:Ea,normal:Vt,antiNormal:Ra,radialOut:Ma,radialIn:Kt,maneuver:Ia,target:Aa,antiTarget:Fa,relativePlus:Na,relativeMinus:La,parallelPlus:Ca,parallelMinus:Da};function Pa(e){if(e.frame==="scet")return{token:"SCET",spoken:"spacecraft event time",title:"Spacecraft event time: when this happens at the craft"};const{vantage:t}=e;return t===void 0?{token:"RECEIVED",spoken:"received",title:"When the telemetry showing this arrives"}:{token:`AT ${t}`,spoken:`received at ${t}`,title:`When the telemetry showing this arrives at ${t}`}}const Oa=c.span`
  font-size: max(0.72em, 10px);
  opacity: 0.72;
  white-space: nowrap;
  text-transform: none;
`;function Es({value:e,context:t}){const o=Ae(typeof e=="number"?void 0:e),{shown:a,held:s,caption:i}=o,l=typeof e=="number"?e:a?.magnitude,d=Ze({...o,shown:l}),h=t&&Pa(t),p=Fn(l??Number.NaN);return n.jsxs(n.Fragment,{children:[s?n.jsx(Xe,{...d,caption:i,children:p}):n.jsx("span",{"data-figure":d["data-figure"],children:p}),h&&n.jsxs(n.Fragment,{children:[" ",n.jsx(we,{text:h.title,focusable:!0,children:n.jsxs(Oa,{children:[n.jsx("span",{"aria-hidden":"true",children:h.token}),n.jsx(Be,{children:h.spoken})]})})]})]})}function Xt(e){const{year:t,day:r,hour:o,minute:a}=qe(),s=Number.isFinite(e)?Math.max(0,e):0,i=Math.floor(s/t)+1,l=s%t,d=Math.floor(l/r)+1,h=l%r;return{year:i,day:d,hour:Math.floor(h/o),minute:Math.floor(h%o/a),second:Math.floor(h%a)}}const Ba={year:1,day:1,hour:0,minute:0,second:0};function za(e){const{year:t,day:r,hour:o,minute:a}=qe();return(e.year-1)*t+(e.day-1)*r+e.hour*o+e.minute*a+e.second}function Se(e){return At(oe("s",e))}function Ha({value:e,onChange:t,label:r,disabled:o,steps:a}){const s=f.useId(),i=`${s}-absent`,l=e!==null&&Number.isFinite(e)?e:null,d=l===null?null:Xt(l),h=qe(),p=a??[h.minute,10*h.minute,h.hour,h.day],[v,w]=f.useState(null),g=(u,E,D,m)=>n.jsxs(ye,{gap:"caption",children:[n.jsx(Ye,{htmlFor:`${s}-${u}`,children:E}),n.jsx(St,{id:`${s}-${u}`,type:"number",inputMode:"numeric","aria-label":`${r} ${E}`,"aria-describedby":d===null?i:void 0,min:D,step:1,style:{width:m},disabled:o,placeholder:d===null?de:void 0,value:v?.key===u?v.text:d===null?"":String(d[u]),onBlur:()=>w(null),onChange:_=>{const b=_.target.value;if(w({key:u,text:b}),b.trim()==="")return;const R=Number(b);Number.isFinite(R)&&t(za({...d??Ba,[u]:R}))}})]},u);return n.jsxs(ye,{gap:"related-dense",role:"group","aria-label":r,children:[n.jsxs(ze,{gap:"related-dense",wrap:!0,justify:"start",children:[g("year","YEAR",1,"5rem"),g("day","DAY",1,"5rem"),g("hour","HR",0,"4rem"),g("minute","MIN",0,"4rem"),g("second","SEC",0,"4rem")]}),d===null&&n.jsx(be,{id:i,level:"muted",size:"sm",children:`${de} no ${r.toLowerCase()} to show. Type one to state it.`}),p.length===0?null:n.jsxs(ze,{gap:"related-packed",wrap:!0,justify:"start",children:[n.jsx(be,{level:"faint",size:"sm",children:"NUDGE"}),p.map(u=>n.jsx(We,{variant:"ghost",size:"sm",disabled:o||l===null,"aria-label":`${r} earlier by ${Se(u)}`,onClick:()=>l!==null&&t(l-u),children:`-${Se(u)}`},`minus-${u}`)),p.map(u=>n.jsx(We,{variant:"ghost",size:"sm",disabled:o||l===null,"aria-label":`${r} later by ${Se(u)}`,onClick:()=>l!==null&&t(l+u),children:`+${Se(u)}`},`plus-${u}`))]})]})}const gt=c(Je)`
  --gap-related: var(--gap-related-comfortable);
  --bleed-inline: 0px;

  background: var(--color-surface-sunken);
  border: 1px solid ${({$tone:e})=>Ue(e)};
  border-radius: var(--radius-regular);
  /* A banner is its own strip of the screen, so it takes the roomier inset. */
  padding: var(--inset-surface-standalone);
`;function Rs({tone:e="warn",assertive:t=!1,role:r,children:o,...a}){const s=f.useRef(null),[i,l]=f.useState("");if(f.useEffect(()=>{const h=s.current;if(t||r!==void 0||h===null)return;const p=Wa(h);l(v=>v===p?v:p)}),t)return Me(gt,{...a,children:o,role:r??"alert","aria-live":r===void 0?"assertive":void 0,$tone:e});const d=Me(gt,{...a,children:o,ref:s,role:r??"note",$tone:e});return r!==void 0?d:n.jsxs(n.Fragment,{children:[d,n.jsx(Tt,{visuallyHidden:!0,children:i})]})}function Wa(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let o=r.nextNode();o!==null;o=r.nextNode())t.push(o.textContent??"");return t.join(" ").replace(/\s+/g," ").trim()}function Ms({id:e,label:t,value:r,options:o,onChange:a,hint:s}){const i=o.findIndex(l=>Kn(l.choice,r));return n.jsxs(kt,{children:[n.jsx(Ye,{htmlFor:e,children:t}),n.jsxs(Tn,{id:e,value:i===-1?"":String(i),onChange:l=>{const d=o[Number(l.target.value)];d!==void 0&&a(d.choice)},children:[i===-1&&n.jsx("option",{value:"",disabled:!0}),o.map((l,d)=>n.jsx("option",{value:d,children:l.label},`${l.choice.kind}-${l.choice.bodyIndex??"none"}`))]}),s!==void 0&&n.jsx(En,{children:s})]})}function Ua({as:e,interactive:t=!1,selected:r=!1,wrap:o=!1,nested:a=!1,type:s,children:i,...l}){return n.jsx(Va,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:r,$wrap:o,$nested:a,...l,children:i})}const Yt=c.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,Ga="min(12ch, 100%)",Va=c.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-row);
  font-size: var(--font-size-compact);
  padding: var(--inset-row);
  ${({$wrap:e})=>e?`
  flex-wrap: wrap;
  row-gap: var(--gap-row-wrap);

  & > ${Yt} {
    min-width: ${Ga};
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

  ${Ie}
`:""}
  ${({$interactive:e,$selected:t})=>e&&t?`
  ${Ft("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}
`,Is=Object.assign(Ua,{Name:Yt}),Ka=65,Zt=38,Xa=72,Ya=Xa-Zt,qt=55,Ke=137.508,Za=10,qa=1.5,Ja=64,Qa=60,eo=241,to=Ke-Math.floor(Ke),ve=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function Jt(e,t){const r=Math.abs(e-t)%360;return r>180?360-r:r}const no=ve.map((e,t)=>{let r=1/0;for(let a=0;a<ve.length;a++)a!==t&&(r=Math.min(r,Jt(e.hue,ve[a].hue)));const o=r/2;return Math.max(0,Math.min(Za,o-qa))}),ro=ve.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:no[t]}));function ao(e,t=ve){return t.find(r=>r.aliases.some(o=>e.includes(o)))}function Qt(e){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function xt(e,t){return(e%t+t)%t}function oo(e){const r=Qt(`light:${e}`)/4294967295;return Zt+r*Ya}function so(e){const t=ao(e);if(!t)return;const r=t.aliases.length===1?qt:oo(e);return{hue:t.hue,lightness:r}}function io(e){return ro.some(({centre:t,radius:r})=>Jt(e,t)<r)}function lo(e){const t=Qt(e);let r=xt(t*Ke,360);const o=Qa+(t>>>8)%eo+to;let a=0;for(;io(r)&&a<Ja;)r=xt(r+o,360),a++;return r}function As(e){const t=e.trim().toLowerCase(),r=so(t),o=r?.hue??lo(t),a=r?.lightness??qt;return`hsl(${Math.round(o)}deg ${Ka}% ${Math.round(a)}%)`}function Fs({selected:e,gap:t="caption",layout:r="stack",selectedLook:o="fill",children:a,...s}){return n.jsx(co,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:r,$look:o,...s,children:a})}const co=c.button`
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
  border-radius: ${It.regular};
  border: 1px solid
    ${({$selected:e,$look:t})=>e?t==="outline"?"var(--color-accent-fg)":"transparent":"var(--color-border-subtle)"};
  ${({$selected:e,$look:t})=>e?t==="outline"?"background: var(--color-surface-raised); color: inherit;":Ft("go"):"background: transparent; color: inherit;"}
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
`,uo=f.forwardRef(function(t,r){return n.jsx(fo,{ref:r,type:"range",...t})}),fo=c.input`
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
`;function ho({label:e,children:t,detail:r,tone:o="neutral",...a}){return n.jsxs(po,{...a,children:[n.jsx(mo,{children:e}),n.jsx(go,{$tone:o,children:t}),r!=null&&n.jsx(xo,{children:r})]})}const po=c.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,mo=c.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,go=c.dd`
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
  color: ${({$tone:e})=>Nn[e]};
`,xo=c.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function Ns({slot:e}){const t=Wn(e);return t.length===0?null:n.jsx(n.Fragment,{children:t.map(r=>n.jsx(ho,{label:r.label,detail:r.detail,tone:r.tone??"neutral",children:n.jsx(vo,{entry:r})},r.id))})}function vo({entry:e}){if(e.value!==void 0)return n.jsx(pe,{value:e.value});if(e.text===void 0)return n.jsx(Ln,{});const t=Rn(e.held);return t===null?n.jsx(n.Fragment,{children:e.text}):n.jsx(Xe,{kind:t.kind,caption:t.caption,children:e.text})}const bo=9,he=12,yo=12,vt=52,q=10,Ce=4;function wo(e,t,r){const o=i=>e.map(l=>Number.parseFloat(i.mark(l).replace(/[^\d.-]/g,""))),a=o(r(Ce)),s=i=>o(i).every((l,d)=>l===a[d]);if(s(t))return t;for(let i=0;i<Ce;i++){const l=r(i);if(s(l))return l}return r(Ce)}function Ls({labelSide:e="left",value:t,min:r,max:o,width:a=92,height:s=220,fillHeight:i=!1,tickStep:l,zones:d,markers:h,groundLine:p,seaLevel:v,format:w,"aria-label":g}){const u=f.useRef(null),[E,D]=f.useState(s);f.useEffect(()=>{if(!i)return;const x=u.current;if(!x)return;const N=()=>{const ee=x.clientHeight;ee>0&&D(ee)};N();const A=new ResizeObserver(N);return A.observe(x),()=>A.disconnect()},[i]);const m=i?E:s,_=Ae(t),{shown:b,held:R,caption:$,band:z}=_,{anchor:L,tip:y}=Rt($),C=b?.magnitude??Number.NaN,j=r.magnitude,M=o.magnitude,B=M-j,Y=Number.isFinite(C)?C:j,X=B>0?Math.max(j,Math.min(M,Y)):j,U=b!=null,T=tt(o,{format:w}),P=b==null?de:Ge({magnitude:Y,unit:b.unit},{format:T.rung}),F=x=>Ge(x),W=[...(h??[]).flatMap(x=>x.label===void 0?[]:[x.bounds===void 0?`${x.label} ${F(x.value)}`:`${x.label} ${F(x.value)}, between ${F(x.bounds.lo)} and ${F(x.bounds.hi)}`]),...(d??[]).flatMap(x=>x.label===void 0?[]:[`${x.label} zone ${F(x.from.min(x.to))} to ${F(x.from.max(x.to))}`]),...p===void 0?[]:[`ground ${F(p)}`],...v===void 0?[]:[`sea level ${F(v)}`]],se=b==null||z===null?null:Nt(z,b.unit)??null,G=Math.max(0,m-he-yo),H=x=>{if(!(B>0))return he+G;const N=Math.max(0,Math.min(1,(x-j)/B));return he+(1-N)*G},I=x=>H(x.magnitude),O=he,te=he+G,V=e==="right",k=V?a-vt-q:vt,ne=V?k+q+6:k-6,ie=V?"start":"end",ce=(x,N)=>{const A=I(x),ee=x.greaterThan(o)?-1:x.lessThan(r)?1:0,ge=k-4,je=k+q+4,Fe=k+q/2;return n.jsxs("g",{"data-level":N?"sea":"ground",children:[n.jsx("line",{x1:ge,y1:A,x2:je,y2:A,stroke:N?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:N?1.5:2,strokeDasharray:N?"3 2":void 0}),ee!==0&&n.jsx("polygon",{"data-off-scale":"true",points:`${Fe-4},${A-ee*2} ${Fe+4},${A-ee*2} ${Fe},${A+ee*4}`,fill:N?"var(--color-info-mark)":"var(--color-text-primary)"})]})},ue=[],S=l?.magnitude??0;if(S>0&&B>0){const x=Math.ceil(j/S),N=Math.floor(M/S+1e-9);for(let A=x;A<=N;A++)ue.push(A===0?0:A*S)}const Z=wo(ue,T,x=>tt(o,{format:w,decimals:x})),K=H(X),J=x=>G>0?(he+G-x)/G:0,le=se!==null&&jt(J(K),[J(I(se.lo)),J(I(se.hi))],_t())?se:null;return n.jsxs($o,{ref:u,...Ze(_),...L,...U?{role:"meter","aria-label":Ee(g,$),...Te($),"aria-valuenow":X,"aria-valuemin":j,"aria-valuemax":M,"aria-valuetext":W.length===0?P:`${P}; ${W.join("; ")}`}:{role:"img","aria-label":Ee(`${g}: ${P}`,$),...Te($)},style:i?{height:"100%"}:void 0,children:[n.jsxs("svg",{width:a,height:m,viewBox:`0 0 ${a} ${m}`,"aria-hidden":"true",style:i?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[n.jsx("rect",{x:k,y:O,width:q,height:G,rx:2,fill:"var(--color-surface-raised)"}),d?.map(x=>{const N=I(x.from.max(x.to)),A=I(x.from.min(x.to)),ee=Math.max(0,A-N);return n.jsx("g",{children:n.jsx("rect",{x:k,y:N,width:q,height:ee,fill:x.color??"var(--color-warn-mark)",opacity:.55})},`zone-${A}-${N}-${x.label??""}`)}),v!==void 0&&B>0&&ce(v,!0),p!==void 0&&B>0&&ce(p,!1),ue.map(x=>{const N=H(x),A=U&&Math.abs(N-Math.max(O+4,Math.min(te-4,K)))<bo;return n.jsxs("g",{children:[n.jsx("line",{x1:V?k+q+4:k-4,y1:N,x2:V?k+q:k,y2:N,stroke:"var(--color-border-subtle)",strokeWidth:1}),!A&&n.jsx("text",{x:ne,y:N,textAnchor:ie,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:Z.mark(x)})]},`tick-${x}`)}),h?.map(x=>{const{bounds:N}=x,A=I(x.value),ee=x.color??"var(--color-accent-fg)";return n.jsxs("g",{"data-marker":x.label,children:[n.jsx("line",{x1:k,y1:A,x2:k+q,y2:A,stroke:ee,strokeWidth:2,strokeDasharray:"2 2"}),n.jsx("polygon",{points:V?`${k},${A} ${k-5},${A-3} ${k-5},${A+3}`:`${k+q},${A} ${k+q+5},${A-3} ${k+q+5},${A+3}`,fill:"none",stroke:ee,strokeWidth:1.5}),N!==void 0&&["lo","hi"].map(ge=>{const je=I(N[ge]);return n.jsx(He,{end:ge,x1:k,y1:je,x2:k+q,y2:je},ge)})]},`marker-${A}-${x.label??""}`)}),le!==null&&["lo","hi"].map(x=>{const N=I(le[x]);return n.jsx(He,{end:x,x1:k,y1:N,x2:k+q,y2:N},x)}),U&&n.jsxs(n.Fragment,{children:[n.jsx("line",{x1:k-6,y1:K,x2:k+q+6,y2:K,stroke:"var(--color-accent-fg)",strokeWidth:2}),n.jsxs("text",{x:V?ne+2:ne-2,y:Math.max(O+4,Math.min(te-4,K)),textAnchor:ie,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[T.mark(Y),R&&n.jsx(Mt,{size:5})]})]}),!U&&n.jsx(Mn,{x:V?ne+8:ne-8,y:O+G/2,size:11,children:de}),T.symbol!==""&&n.jsx("text",{x:k+q/2,y:O-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:T.symbol})]}),y]})}const $o=c.div`
  display: block;
  max-width: 100%;
`,bt={w:5,h:4},jo=8,_o=7;function Cs(e,t){return e===void 0||t===void 0?"normal":e<bt.w||t<bt.h?"tiny":e<jo||t<_o?"small":"normal"}const en=1.6,ko=1/en;function Ds(e,t){if(e===void 0||t===void 0||t===0)return{shape:"square",aspect:1};const r=e/t;return r>=en?{shape:"landscape",aspect:r}:r<=ko?{shape:"portrait",aspect:r}:{shape:"square",aspect:r}}function So(e){switch(e.reason){case"no-horizon-stated":return{heading:"NO HORIZON STATED",detail:"Nothing says how far ahead these orbital elements can be trusted."};case"past-horizon":return e.trajectoryKind===On.Integrated?{heading:"BEYOND INTEGRATION",detail:"The trajectory is not computed this far ahead yet."}:{heading:"PAST HORIZON",detail:"These orbital elements cannot be trusted this far ahead."};case"shape-not-stated":return{heading:"SHAPE NOT STATED",detail:"Nothing has said whether this trajectory is a conic."};case"frame-unavailable":return{heading:"FRAME UNAVAILABLE",detail:"The trajectory is fine; the frame it was asked for cannot be built from the bodies known here. Pick another frame."};default:return{heading:"NO PATH AVAILABLE",detail:"The integrated trajectory could not be sampled."}}}function Ps({withheld:e,compact:t=!1}){const{heading:r,detail:o}=So(e);return n.jsx(we,{text:t?o:void 0,focusable:!0,children:n.jsxs(ye,{role:"status",children:[n.jsx(be,{size:"xs",children:r}),!t&&n.jsx(be,{level:"muted",size:"xs",children:o})]})})}const Os=c.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,To=112;function Eo(e,t){try{return oe(e,1).in(t).magnitude}catch{return Number.NaN}}function Ro(e,t){let r=e;return t.map((o,a)=>{if(!Number.isFinite(o)||o===0)return 0;const s=a===t.length-1?r/o:Math.trunc(r/o);return r-=s*o,s})}function Bs({value:e,unit:t,onChange:r,label:o,rungs:a,range:s,rate:i,disabled:l}){const d=f.useId(),{shown:h,held:p,caption:v}=Ae(e),w=p?n.jsx(Xe,{caption:v,children:o}):o,g=s,u=h?h.magnitude:Number.NaN,[E,D]=f.useState({}),m=$=>E[$]??null,_=($,z)=>D(L=>({...L,[$]:z})),b=i?n.jsxs(ye,{gap:"related-packed",children:[n.jsx(ma,{mode:"rate","aria-label":`${o} rate`,value:u,step:i.step,stepsPerSecond:i.stepsPerSecond,disabled:l||!Number.isFinite(u),format:De(t)?Io:void 0,width:De(t)?To:void 0,onChange:$=>r(oe(t,$))}),n.jsx(be,{level:"faint",size:"sm",children:`${i.step} ${Mo(t)} / notch`})]}):null;if(De(t))return n.jsxs(Oe,{children:[n.jsx(wt,{"aria-hidden":"true",children:w}),n.jsxs(ye,{gap:"related-dense",children:[n.jsx(Ha,{label:p&&v!==null?`${o}, ${v}`:o,value:Number.isFinite(u)?u:null,disabled:l,steps:i?[]:void 0,onChange:$=>r(oe(t,$))}),b]})]});if(a&&a.length>0){const $=a.map(y=>Eo(String(y),t)),z=Ro(u,$),L=(y,C)=>{const j=Pe(C);if(j===void 0){_(y,{text:C,against:z[y]});return}const M=z.slice();M[y]=j;const B=M.reduce((Y,X,U)=>Number.isFinite($[U])?Y+X*$[U]:Y,0);_(y,{text:C,against:j}),r(oe(t,B))};return n.jsxs(Oe,{children:[n.jsx(wt,{id:`${d}-label`,children:w}),n.jsx(Lo,{role:"group","aria-labelledby":`${d}-label`,children:a.map((y,C)=>n.jsxs(Co,{children:[n.jsx(Do,{type:"number",disabled:l,"aria-label":`${o} ${String(y)}`,value:yt(m(C),z[C]),onChange:j=>L(C,j.target.value)}),n.jsx($t,{"aria-hidden":"true",children:String(y)})]},String(y)))}),b]})}const R=$=>{const z=Pe($);_(0,{text:$,against:z??u}),z!==void 0&&r(oe(t,z))};return n.jsxs(Oe,{children:[n.jsx(Fo,{htmlFor:d,children:w}),n.jsxs(No,{children:[n.jsx(nn,{id:d,type:"number",disabled:l,min:g?.min,max:g?.max,step:g?.step,value:yt(m(0),u),onChange:$=>R($.target.value)}),n.jsx($t,{"aria-hidden":"true",children:t})]}),g?n.jsx(uo,{disabled:l,"aria-label":`${o} slider`,min:g.min,max:g.max,step:g.step??(g.max-g.min)/100,value:Number.isFinite(u)?u:g.min,onChange:$=>r(oe(t,Pe($.target.value)??g.min))}):null,b]})}function yt(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(Ao(t)):""}function Mo(e){return Lt(e)??e}function De(e){return Lt(e)==="s"}function Io(e){if(!Number.isFinite(e))return"";const{day:t,hour:r,minute:o,second:a}=Xt(e),s=i=>String(i).padStart(2,"0");return`D${t} ${s(r)}:${s(o)}:${s(a)}`}function Pe(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function Ao(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const Oe=c.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,tn=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Fo=c.label`
  ${tn}
`,wt=c.span`
  ${tn}
`,No=c.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,nn=c.input`
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
`,$t=c.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Lo=c.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,Co=c.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,Do=c(nn)`
  width: 4.5em;
`;function zs({row:e,style:t}){const o=Un("meters").filter(a=>a.row===e);return o.length===0?null:n.jsx(bn,{style:t,role:"group","aria-label":"meters",children:o.map(a=>n.jsx(yn,{label:a.label,value:a.value,tone:a.tone,valueLabel:a.valueLabel},a.id))})}const rn=f.createContext(null);function Hs({widget:e,scope:t,children:r}){const o=f.useMemo(()=>({widget:e,scope:t}),[e,t]);return n.jsx(rn.Provider,{value:o,children:r})}function Ws(e){const t=f.useContext(rn);if(!(!t||t.widget!==e))return t.scope}export{rr as $,$r as A,ns as B,ss as C,fs as D,gs as E,vs as F,Gt as G,bs as H,Qn as I,ma as J,Ma as K,$s as L,Ts as M,Vt as N,Ms as O,Da as P,La as Q,Kt as R,Na as S,Ea as T,Is as U,Yt as V,Fs as W,cs as X,uo as Y,ho as Z,Ns as _,Qo as a,bt as a0,_s as a1,Ls as a2,Aa as a3,Ps as a4,Os as a5,Bs as a6,zs as a7,Hs as a8,Jn as a9,hr as aa,xs as ab,Cs as ac,Ds as ad,As as ae,So as af,_r as ag,ds as ah,Ws as ai,za as aj,Ra as b,Fa as c,es as d,ts as e,Ss as f,rs as g,as as h,os as i,ls as j,us as k,hs as l,ps as m,ms as n,is as o,oa as p,ks as q,ys as r,vr as s,ws as t,js as u,Ia as v,Es as w,Ha as x,Rs as y,Ca as z};
