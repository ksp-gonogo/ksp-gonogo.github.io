import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./ext-react-RRA14VTW.js";import f,{css as re,keyframes as un}from"./ext-styled-components-Br73TgY3.js";import{a3 as fn,g as hn,K as pn,al as tt,am as mn,U as pe,e as gn,Y as xn,V as vn,Z as bn,X as yn,an as wn,ac as $n,ao as jn,ap as nt,a9 as Et,a6 as Rt,B as _n,H as Ze,c as kn,M as Mn}from"./ToggleButton-BSvCe2ch.js";import{E as Sn,a1 as Ae,m as Tn,F as It,l as qe,v as At,V as He,a9 as We,a2 as $e,Z as Ft,aB as En,_ as Nt,a4 as Fe,aA as Lt,aC as Ue,ae as Ct,aD as Te,az as Ee,a5 as Je,f as Rn,a3 as me,d as Ge,T as In,af as An,G as Fn,k as Nn,ar as Ln,aE as Cn}from"./vesselMark-B52yudi1.js";import{aG as Le,b4 as rt,c2 as Dn,aO as oe,l as Dt,ai as Pn,b_ as On,ct as Bn,b9 as Qe,T as zn,bZ as Pt}from"./view-clock-formula-ZKacKPC2.js";import"./ksp-enum-names-CpMVNMAI.js";import"./screen-mp_f6rUi.js";import{G as je,N as de,R as Ot,I as Hn,t as Ve,w as Bt,j as Ke,i as Wn,k as Un,a as ye,l as zt,T as Gn,b as Vn,q as at}from"./streamStatusWord-CYmxuWLC.js";import{s as Kn,x as Xn,f as we,c as Yn,m as Zn}from"./contributionsRead-BarpOIK1.js";import{r as qn}from"./ext-react-dom-CZVBhjGL.js";import{l as Jn}from"./capability-lock-B0Z38rG0.js";import"./lagrange-B8ztZ552.js";import"./use-transmissions-BA6nr-oi.js";import{r as Qn}from"./control-frame-to-read-frame-CdJAdLH_.js";function fs({items:e,onSelect:t,onDismiss:n,"aria-label":o,style:a,header:s,footer:i,emptyLabel:l="No actions",otherLabel:c="Other"}){const d=h.useRef(null),p=h.useId(),[v,b]=h.useState(0),x=fn(e,c),u=x.flatMap(([,m])=>m),M=u.length;h.useEffect(()=>{const m=d.current;if(!m)return;if(M===0){m.focus();return}m.querySelectorAll('[role="menuitem"]')[v]?.focus()},[v,M]),h.useEffect(()=>{const m=_=>{const y=d.current;y&&_.target instanceof Node&&!y.contains(_.target)&&n()};return document.addEventListener("pointerdown",m),()=>document.removeEventListener("pointerdown",m)},[n]);const I=h.useCallback(m=>{if(m.key==="Escape"){m.stopPropagation(),n();return}if(m.key==="Tab"){n();return}if(u.length!==0)switch(m.key){case"ArrowDown":m.preventDefault(),b(_=>Math.min(_+1,u.length-1));break;case"ArrowUp":m.preventDefault(),b(_=>Math.max(_-1,0));break;case"Home":m.preventDefault(),b(0);break;case"End":m.preventDefault(),b(u.length-1);break}},[u.length,n]);return r.jsxs(er,{ref:d,role:M>0?"menu":void 0,"aria-label":o,onKeyDown:I,tabIndex:-1,style:a,children:[s,u.length===0?r.jsx(Sn,{layout:"fill",children:l}):x.map(([m,_],y)=>r.jsxs("div",{...x.length>1?{role:"group","aria-labelledby":`${p}-group-${y}`}:{role:"none"},children:[x.length>1?r.jsx(tr,{id:`${p}-group-${y}`,"aria-hidden":"true",children:m}):null,_.map(E=>{const $=u.indexOf(E);return r.jsx(nr,{type:"button",role:"menuitem","aria-label":E["aria-label"],"aria-disabled":E.disabled,$disabled:E.disabled,tabIndex:$===v?0:-1,onFocus:()=>b($),onClick:()=>{E.disabled||t(E.key)},children:E.label},E.key)})]},m)),i]})}const er=f.div`
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
`,tr=f.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,nr=f.button`
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
`;function hs({settings:e,values:t,onChange:n}){return e.length===0?null:r.jsx(r.Fragment,{children:e.flatMap(o=>o.fields.map(a=>{const i=t?.[o.namespace]?.[a.key]??a.default,l=a.label??a.key,c=`augment-setting-${o.namespace}-${a.key}`;return a.type===Le.Bool?r.jsx(Tn,{children:r.jsx(hn,{checked:!!i,onChange:d=>n(o.namespace,a.key,d),label:l})},`${o.namespace}.${a.key}`):r.jsxs(It,{children:[r.jsx(qe,{htmlFor:c,children:l}),r.jsx(At,{id:c,type:a.type===Le.Number?"number":"text",value:i===void 0?"":String(i),onChange:d=>{const p=d.target.value;if(a.type!==Le.Number){n(o.namespace,a.key,p);return}if(p===""){n(o.namespace,a.key,void 0);return}const v=Number(p);Number.isFinite(v)&&n(o.namespace,a.key,v)}})]},`${o.namespace}.${a.key}`)}))})}function ps({fallback:e,gap:t="related-dense",children:n,...o}){return r.jsxs(r.Fragment,{children:[r.jsx(Ht,{$gap:t,...o,children:n}),r.jsx(rr,{children:e})]})}const Ht=f.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>je[e]};
`,rr=f.div`
  ${Ht}:not(:empty) + & {
    display: none;
  }
`,ot=12,ke=8;function ar(e,t,n){return{left:st(e.x,t.w,n.w),top:st(e.y,t.h,n.h)}}function st(e,t,n){const o=e+ot;if(o+t<=n-ke)return o;const a=e-ot-t;return a>=ke?a:Math.max(ke,n-ke-t)}const or="–";function ms({min:e,max:t,wrapsAt:n,className:o,...a}){const s=rt(e),i=rt(t);return e==null||t==null||s===null||i===null?r.jsx(Re,{className:o,children:de}):n!==void 0&&Math.abs(i-s)>=n/2?r.jsx(Re,{className:o,children:"(precesses)"}):r.jsx(pn,{of:e.unit,separate:!0,...a,children:r.jsx(sr,{min:e,max:t,className:o})})}function sr({min:e,max:t,className:n}){return tt(e),tt(t),mn(e)?r.jsx(Re,{className:n,children:r.jsxs(lr,{children:[r.jsx("span",{"aria-hidden":"true",children:"~"}),r.jsx(He,{children:"approximately "}),r.jsx(pe,{value:e})]})}):r.jsxs(Re,{className:n,children:[r.jsx(pe,{value:e}),r.jsx(ir,{"aria-hidden":"true",children:or}),r.jsx(He,{children:" to "}),r.jsx(pe,{value:t})]})}const Re=f.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,ir=f.span`
  color: var(--color-text-faint);
`,lr=f.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`;function cr({children:e,status:t,gap:n="related-packed",align:o="center"}){return r.jsxs(We,{align:o,gap:n,justify:"between",wrap:!0,children:[e,t]})}const Wt=f.div`
  color: var(--color-text-primary);
  font-weight: 600;
  /* One rung above the body the arrangement sets; both halves are declared here, so a site cannot break the step. */
  font-size: var(--font-size-value);
  line-height: var(--line-height-tight);
  /* A content-sized basis, so a long title wraps instead of running into the badge beside it. */
  flex: 1 1 auto;
  min-width: 0;
`,dr=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-record-lead);
  flex: 1 1 auto;
  min-width: 0;
`;function Ut({left:e,right:t,children:n}){return r.jsx(cr,{align:"baseline",status:t,children:e==null?n:r.jsxs(dr,{children:[e,n]})})}const ur=f.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--gap-related);
`,Gt=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  flex: 1 1 var(--block-body-floor, 9rem);
  min-width: 0;
`,xe=f.div`
  min-width: 0;
  ${({$side:e})=>e?`flex: 0 0 auto;
    --radius-display-frame: var(--radius-display-frame-aside);`:""}
`,Vt=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-related);
  flex-wrap: wrap;
`,et=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  min-width: 0;
  /* The compact body size, declared here so the title stays one rung above it. */
  font-size: var(--font-size-compact);
`;function Ie(e,{title:t,titleAs:n,titleLeft:o,titleRight:a,left:s,right:i,top:l,bottom:c,footer:d,children:p,...v}){const b=t!=null||o!=null||a!=null,x=s!=null||i!=null,u=b&&r.jsx(Ut,{left:o,right:a,children:t!=null&&r.jsx(Wt,{as:n,children:t})});return r.jsxs(e,{...v,children:[l!=null&&r.jsx(xe,{$side:!1,children:l}),x?r.jsxs(ur,{children:[s!=null&&r.jsx(xe,{$side:!0,children:s}),r.jsxs(Gt,{children:[u,p]}),i!=null&&r.jsx(xe,{$side:!0,children:i})]}):r.jsxs(r.Fragment,{children:[u,p]}),d!=null&&r.jsx(Vt,{children:d}),c!=null&&r.jsx(xe,{$side:!1,children:c})]})}const Kt={Title:Wt,TitleRow:Ut,Body:Gt,Aside:xe,Footer:Vt};function fr({...e}){return Ie(et,e)}const gs=Object.assign(fr,Kt),hr={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function xs({surface:e,pad:t,bordered:n=!1,radius:o,children:a,...s}){return r.jsx(pr,{$surface:e,$pad:t,$bordered:n,$radius:o,...s,children:a})}const pr=f.div`
  ${({$surface:e})=>e&&`background: ${hr[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${Ot[e]};`}
  ${({$pad:e})=>e&&`padding: var(${Hn[e]});`}
`,vs=h.forwardRef(function({equalWidth:t=!0,gap:n,children:o,...a},s){return r.jsx(mr,{ref:s,$equalWidth:t,$gap:n,...a,children:o})}),mr=f.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?je[e]:"var(--gap-related)"};
`,gr="3px",xr=f(et)`
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
      height: ${gr};
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
`;function vr({tone:e,dimmed:t,identityColor:n,standalone:o,...a}){return Ie(xr,{...a,$tone:e,$dimmed:t,$identityColor:n,$standalone:o})}const bs=Object.assign(vr,Kt);function br(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const ys=h.forwardRef(function({label:t,icon:n,type:o,...a},s){return r.jsx("button",{ref:s,type:o??"button","aria-label":t,...a,children:r.jsx(Xt,{label:t,icon:n})})});function Xt({label:e,icon:t}){const n=h.useRef(null),o=h.useRef(null),[a,s]=h.useState(!0);return h.useLayoutEffect(()=>{const i=n.current,l=o.current;if(!i||!l)return;const c=()=>{s(l.scrollWidth<=i.clientWidth)};if(c(),typeof ResizeObserver>"u")return;const d=new ResizeObserver(c);return d.observe(i),d.observe(l),()=>d.disconnect()},[]),r.jsxs(yr,{ref:n,children:[r.jsx(wr,{ref:o,"aria-hidden":"true",children:e}),a?r.jsx($r,{"aria-hidden":"true",children:e}):r.jsx(jr,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const yr=f.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,wr=f.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,$r=f.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,jr=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function _r({holds:e,label:t,spinnerSize:n=12}){return r.jsxs(kr,{children:[r.jsx(Mr,{"aria-hidden":"true",children:e}),r.jsx(Sr,{children:r.jsx(gn,{size:n,"aria-label":t})})]})}const kr=f.span`
  display: inline-grid;
  & > * {
    grid-area: 1 / 1;
  }
`,Mr=f.span`
  visibility: hidden;
`,Sr=f.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,Tr=4e3,it=8e3,Er=3e4;function Yt(e,t){return e.gateFor?e.gateFor(t):e.gate}function Rr({handle:e,args:t,commandLabel:n,onConfirmed:o}){const[a,s]=h.useState("idle"),[i,l]=h.useState(null),[c,d]=h.useState(null),[p,v]=h.useState(!1),b=Yt(e,t),x=b?.blocked===!0,u=h.useRef(!0),M=h.useRef(0);h.useEffect(()=>()=>{u.current=!1},[]);const I=e.founds,m=h.useRef(!1),_=h.useRef(I?.length??0);h.useEffect(()=>{const w=I?.length??0,D=w>_.current;_.current=w;const j=I?.[w-1];!D||!j||!m.current||(m.current=!1,d(j),l(null),s("found"))},[I]),h.useEffect(()=>{if(a!=="armed")return;const w=setTimeout(()=>s("idle"),Tr);return()=>clearTimeout(w)},[a]),h.useEffect(()=>{if(a!=="refused"&&a!=="lost"&&a!=="found")return;const w=setTimeout(()=>{s("idle"),l(null),d(null)},it);return()=>clearTimeout(w)},[a]),h.useEffect(()=>{if(!p)return;const w=setTimeout(()=>v(!1),it);return()=>clearTimeout(w)},[p]),h.useEffect(()=>{x||v(!1)},[x]),h.useEffect(()=>{if(a!=="pending")return;const w=setTimeout(()=>s("idle"),Er);return()=>clearTimeout(w)},[a]);const y=h.useCallback(()=>{const w=M.current+1;M.current=w,s("pending"),l(null);const D=(j,R)=>{!u.current||M.current!==w||(l(R),s(j))};e.send(t,n?{label:n}:void 0).then(j=>{D("idle",null),o?.(j)},j=>{const R=Dn(j);if(R.kind==="lost"){m.current=!0,D("lost",null);return}if(R.kind!=="refused"){D("idle",null);return}D("refused",{errorCode:R.errorCode,reason:R.reason,command:R.command,args:R.args,label:R.label??n,breach:R.breach,detail:R.detail})})},[e,t,n,o]),{hasUnconfirmed:E,hasFailure:$}=br(e),z=h.useCallback(w=>{if(a!=="pending"){if(x){v(!0);return}if(a==="refused"||a==="lost"||a==="found"){l(null),d(null),s("idle");return}if(w&&a!=="armed"){s("armed");return}y()}},[a,x,y]),C=a==="pending"||a==="refused"||a==="lost"||a==="found"?a:x?"blocked":a;return{phase:C,isPending:C==="pending",isArmed:C==="armed",isRefused:C==="refused",isLost:C==="lost",isFound:C==="found",isBlocked:C==="blocked",isShowingReason:C==="blocked"&&p,refusalText:i?bn(i):C==="blocked"&&b?yn({...b,label:b.label??n,args:b.args??t}):null,foundText:c?vn(c):null,lossText:C==="lost"?xn({args:t,label:n}):null,hasUnconfirmed:E,hasFailure:$,press:z}}function ws({handle:e,args:t,commandLabel:n,label:o,confirmLabel:a,pendingLabel:s="Working...",refusedLabel:i="Refused",lostLabel:l="No reply",foundLabel:c="Found",confirmAriaLabel:d,pendingAriaLabel:p,blockedAriaLabel:v,pressed:b,variant:x="ghost",tone:u="neutral",icon:M,confirmIcon:I,onPressReady:m,size:_="md",confirmTone:y="go",onConfirmed:E,disabled:$,title:z,"aria-label":C,...w}){const{phase:D,isPending:j,isArmed:R,isRefused:B,isLost:Y,isFound:X,isBlocked:U,isShowingReason:T,refusalText:P,foundText:N,lossText:W,hasUnconfirmed:se,hasFailure:G,press:H}=Rr({handle:e,args:t,commandLabel:n,onConfirmed:E});h.useEffect(()=>{if(!(!m||j))return m(H),()=>m(null)},[m,j,H]);const O=j?r.jsx(_r,{holds:o,label:s,spinnerSize:_==="sm"?10:12}):B?i:Y?l:X?c:T?P:R?a:o,te=M!==void 0&&typeof O=="string",V=te?r.jsx(Xt,{label:O,icon:R?I??M:M}):O,k=M===void 0&&typeof o=="string"&&typeof a=="string"&&!B&&!Y&&!X&&!T,ne=B?P:Y?W:X?N:null,ie=b===!0||R||B,ce=Ir({restTone:x==="primary"?u:"neutral",filled:ie,isRefused:B,isFound:X,isArmed:R,confirmTone:y,tone:u});return r.jsxs(r.Fragment,{children:[r.jsx($e,{text:N??P??(j?s:z),children:r.jsx(Nr,{type:"button",$tone:ce,$variant:x,$fit:te,$size:_,$pressed:ie,$armed:R,$blocked:U,"aria-pressed":b,"aria-busy":j||void 0,"aria-disabled":U||j||void 0,disabled:$,"data-unconfirmed":se?"true":void 0,"data-failed":G?"true":void 0,"data-command-phase":D,"data-gate":U?"blocked":Yt(e,t)?.undetermined?"undetermined":void 0,"aria-label":(B?P??void 0:Y?W??void 0:X?N??C:U?v??P??C:j?p??s:R?d:C)??(te?O:void 0),onClick:()=>H(a!==void 0),"data-rest-label":k?o:void 0,"data-armed-label":k?a:void 0,...w,children:k?r.jsx(Fr,{children:V}):V})}),r.jsx(Ft,{visuallyHidden:!0,children:ne})]})}function Ir(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const Ar=un`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,Fr=f.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,Nr=f(En)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&re`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Ar} 1s var(--ease-emphasis) infinite;
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
`;function $s({oneWaySeconds:e,delayReading:t,className:n}){const o=oe("s",e);return r.jsxs(Lr,{className:n,role:"group","aria-label":"Signal delay",children:["one-way ~",r.jsx(pe,{value:wn(o,t),...o.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const Lr=f.div`
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
`;function js(e){const t=$n(),n=h.useId(),o=e!==null;h.useEffect(()=>{if(!(!t||!e))return t.register({id:n,...e})},[t,n,o]),h.useEffect(()=>{!t||!e||t.update(n,e)},[t,n,e])}function _s({at:e,narrow:t,wide:n,children:o,...a}){return r.jsx(Cr,{$at:e,$narrow:t,$wide:n,...a,children:o})}const Cr=f.div`
  ${({$narrow:e})=>e}
  @container (min-width: ${({$at:e})=>e}px) {
    ${({$wide:e})=>e}
  }
`;function Dr(e,t){return e.value!==void 0?r.jsx(pe,{value:e.value(t)??null}):e.render(t)}function ks({columns:e,rows:t,sections:n,rowKey:o,caption:a,empty:s,rowDetail:i,className:l}){const c=n??(t?[{id:"",title:null,rows:[...t]}]:[]),d=c.reduce((u,M)=>u+M.rows.length,0),[p,v]=h.useState(null),b=jn(p),x=Nt(p);return r.jsxs(Pr,{className:l,children:[r.jsx(Or,{ref:v,tabIndex:x,children:r.jsxs(Br,{children:[r.jsx(zr,{children:a}),r.jsx("thead",{children:r.jsx("tr",{children:e.map(u=>r.jsx(Hr,{scope:"col",$align:u.align??"start",style:{width:u.width,minWidth:u.minWidth},children:u.header},u.key))})}),d===0&&s!==void 0&&r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx(Kr,{colSpan:e.length,children:s})})}),c.map(u=>r.jsxs("tbody",{children:[u.title!==null&&u.title!==void 0&&r.jsx("tr",{children:r.jsx(Wr,{scope:"rowgroup",colSpan:e.length,children:u.title})}),u.rows.map(M=>{const I=o(M),m=i?.(M),_=m!=null&&m!==!1&&m!=="";return r.jsxs(h.Fragment,{children:[r.jsx(Ur,{$hasDetail:_,children:e.map(y=>r.jsx(Gr,{as:y.rowHeader?"th":void 0,scope:y.rowHeader?"row":void 0,$align:y.align??"start",children:Dr(y,M)},y.key))}),_?r.jsx("tr",{children:r.jsx(Vr,{colSpan:e.length,children:m})}):null]},I)})]},u.id))]})}),r.jsx(nt,{$position:"left",$visible:b.left}),r.jsx(nt,{$position:"right",$visible:b.right})]})}const Pr=f.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Or=f.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${Ae}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Br=f.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,zr=f.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,Hr=f.th`
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
`,Wr=f.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,Ur=f.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,Gr=f.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,Vr=f.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,Kr=f.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`,Xr=6,Yr=3,Ce={track:8,hub:4,needle:.92},Zr={regular:{size:16,drop:18},large:{size:24,drop:32}};function ae(e,t,n,o){const a=o*Math.PI/180;return{x:e+n*Math.sin(a),y:t-n*Math.cos(a)}}function lt(e,t,n,o,a){const s=ae(e,t,n,o),i=ae(e,t,n,a),l=a-o,c=Math.abs(l)>180?1:0,d=l>=0?1:0;return`M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${n} ${n} 0 ${c} ${d} ${i.x.toFixed(2)} ${i.y.toFixed(2)}`}function Ms({value:e,min:t,max:n,width:o=120,height:a=120,startAngle:s=0,sweep:i=360,wrap:l=!1,zones:c,ticks:d,valueLabel:p,readout:v,format:b,needleColor:x="var(--color-text-primary)",trackColor:u="var(--color-border-subtle)","aria-label":M}){const I=Fe(e),{shown:m,held:_,caption:y,band:E}=I,{anchor:$,tip:z}=Lt(y),C=m?.magnitude??Number.NaN,w=t.magnitude,D=n.magnitude,j=D-w,R=Number.isFinite(C)?C:w,B=j>0?l?w+((R-w)%j+j)%j:Math.max(w,Math.min(D,R)):w,Y=m!=null,X=m==null?null:{magnitude:B,unit:m.unit},U=p??(X===null?null:Bt(X,{format:b})),T=X===null?de:Ke(X,{format:b}),P=m==null||E===null?null:Dt(E,m.unit)??null,N=v!==void 0&&i<=180,W=N?Ce.track:Xr,se=N?Ce.hub:Yr,G=v===void 0?null:Zr[v],H=o/2,A=N&&G!==null?Math.min((o-W)/2,a-W-G.drop):Math.min(o,a)/2-W-2,O=N?A+W/2:a/2,te=S=>{const Z=j>0?(S-w)/j:0;return s+Z*i},V=S=>S.max(t).min(n),k=S=>te(S.magnitude),ne=S=>i!==0?(S-s)/i:0,ie=P!==null&&Et(ne(te(B)),[ne(k(V(P.lo))),ne(k(V(P.hi)))],Rt({wraps:l}))?P:null,ce=i>=360,ue=ae(H,O,A*(N?Ce.needle:.88),te(B));return r.jsxs(qr,{...Je(I),...$,...Y?{role:"meter","aria-label":Ee(M,y),...Te(y),"aria-valuenow":B,"aria-valuemin":w,"aria-valuemax":D,"aria-valuetext":T}:{role:"img","aria-label":Ee(`${M}: ${T}`,y),...Te(y)},children:[r.jsxs("svg",{width:o,height:a,viewBox:`0 0 ${o} ${a}`,"aria-hidden":"true",style:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[A>0&&(ce?r.jsx("circle",{cx:H,cy:O,r:A,fill:"none",stroke:u,strokeWidth:W}):r.jsx("path",{d:lt(H,O,A,s,s+i),fill:"none",stroke:u,strokeWidth:W,strokeLinecap:"round"})),A>0&&!ce&&c?.flatMap(S=>{const Z=V(S.from.min(S.to)),K=V(S.from.max(S.to));return K.greaterThan(Z)?[Z.greaterThan(t)?null:s,n.greaterThan(K)?null:s+i].flatMap(J=>{if(J===null)return[];const le=ae(H,O,A,J);return[r.jsx("circle",{"data-dial-cap":"",cx:le.x,cy:le.y,r:W/2,fill:S.color},`cap-${S.color}-${J}`)]}):[]}),A>0&&c?.map(S=>{const Z=V(S.from.min(S.to)),K=V(S.from.max(S.to));return K.greaterThan(Z)?r.jsx("path",{d:lt(H,O,A,k(Z),k(K)),fill:"none",stroke:S.color,strokeWidth:W,strokeLinecap:"butt"},`zone-${S.color}-${k(Z)}-${k(K)}`):null}),A>0&&d?.map(S=>{const Z=S.value.magnitude,K=te(Z),J=ae(H,O,A,K),le=ae(H,O,A-W,K),g=ae(H,O,A-W-8,K);return r.jsxs("g",{children:[r.jsx("line",{x1:le.x,y1:le.y,x2:J.x,y2:J.y,stroke:"var(--color-text-faint)",strokeWidth:1}),S.label&&r.jsx("text",{x:g.x,y:g.y,textAnchor:"middle",dominantBaseline:"middle",fontSize:9,fill:"var(--color-text-faint)",children:S.label})]},`tick-${Z}-${S.label??""}`)}),A>0&&ie!==null&&["lo","hi"].map(S=>{const Z=k(V(ie[S])),K=ae(H,O,A-W/2,Z),J=ae(H,O,A+W/2,Z);return r.jsx(Ue,{end:S,x1:K.x,y1:K.y,x2:J.x,y2:J.y},S)}),A>0&&Y&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:H,y1:O,x2:ue.x,y2:ue.y,stroke:x,strokeWidth:2,strokeLinecap:"round"}),r.jsx("circle",{cx:H,cy:O,r:se,fill:x})]}),r.jsxs("text",{x:H,y:N&&G!==null?O+G.drop:O+A*.55,textAnchor:"middle",fontSize:N&&G!==null?G.size:13,fontWeight:N?void 0:"bold",fill:U===null?"var(--color-text-muted)":"var(--color-text-primary)",children:[U??de,_&&U!==null&&r.jsx(Ct,{size:N?7:6,figureSize:N&&G!==null?G.size:13})]})]}),z]})}const qr=f.div`
  display: block;
  max-width: 100%;
`;function Ss({label:e,children:t,"aria-label":n,className:o,variant:a="popover",panelHeight:s="cap",chevron:i=!0,asButton:l=!1,buttonSize:c="md",defaultOpen:d=!1}){const[p,v]=h.useState(d),b=h.useId(),x=h.useRef(null),[u,M]=h.useState(null),I=Nt(u),m=a==="inline"&&i,_=typeof e=="function"?e(p):e,y={ref:x,type:"button","aria-expanded":p,"aria-controls":b,"aria-label":n,onClick:()=>v($=>!$)},E=r.jsxs(r.Fragment,{children:[_,m&&r.jsx(ta,{$open:p,children:r.jsx(Rn,{size:"var(--icon-size-control)"})})]});return r.jsxs(Jr,{className:o,$variant:a,onKeyDown:$=>{$.key==="Escape"&&p&&(v(!1),x.current?.focus())},children:[l?r.jsx(ea,{...y,variant:"ghost",size:c,$inline:a==="inline",children:E}):r.jsx(Qr,{...y,$variant:a,$align:a==="inline"&&!i?"end":"between",children:E}),p&&r.jsx(na,{ref:M,id:b,role:"group",tabIndex:I,$variant:a,$panelHeight:s,children:t})]})}const Jr=f.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,Qr=f.button`
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
`,ea=f(Ge)`
  ${({$inline:e})=>e&&re`
      align-self: flex-end;
    `}
`,ta=f.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,na=f.div`
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
`;function Ts({space:e,...t}){return r.jsx(ra,{$space:e,...t})}const ra=f.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${je[e]} 0`:"0"};
`,aa=160,oa=24,sa="...";function Es({children:e,limit:t=aa,subject:n,className:o}){const[a,s]=h.useState(!1),i=h.useId(),l=ia(e,t);if(l===void 0)return r.jsx(r.Fragment,{children:e});const c=a?"Show less":"Show more";return r.jsxs(la,{className:o,children:[r.jsx("span",{id:i,children:a?e:`${l}${sa}`})," ",r.jsx(ca,{type:"button","data-expandable-toggle":"","aria-controls":i,"aria-expanded":a,"aria-label":n===void 0?void 0:`${c} of ${n}`,onClick:()=>s(d=>!d),children:c})]})}function ia(e,t){if(e.length<=t+oa)return;const n=e.lastIndexOf(" ",t);return n<=0?e.slice(0,t):e.slice(0,n)}const la=f.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,ca=f(In)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function Rs(e,t){const n=t.map(s=>s==null?null:Pn(e,s.index)),o=n.length>0&&n.every(s=>s?.currency==="exact"),a=n.reduce((s,i)=>i?.currency!=="held"||i.asOfUt===null?s:s===null?i.asOfUt:Math.min(s,i.asOfUt),null);return s=>{const i=o?On(s):s;return a===null?i:{state:"held",value:i,asOfUt:oe("ut",a),grade:"held",reckoning:{status:"none"}}}}function Is({grow:e=!1,children:t,...n}){return r.jsx(da,{$grow:e,...n,children:t})}const da=f.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0;

  ${({$grow:e})=>e?"flex: 1 1 auto;":`
    height: 100%;
    width: 100%;
  `}
`;function ua({anchor:e,style:t,children:n,...o}){const[a,s]=h.useState(null),[i,l]=h.useState(null),c=h.useRef(e);c.current=e;const d=h.useCallback(()=>{if(!a)return;const p=c.current,v=typeof p=="function"?p():p;if(!v)return;const b=a.getBoundingClientRect(),x=ar(v,{w:b.width,h:b.height},{w:window.innerWidth,h:window.innerHeight});l(u=>u&&u.left===x.left&&u.top===x.top?u:x)},[a]);return h.useLayoutEffect(()=>{d()}),h.useLayoutEffect(()=>{if(!a)return;const p=typeof ResizeObserver>"u"?null:new ResizeObserver(d);return p?.observe(a),window.addEventListener("resize",d),window.addEventListener("scroll",d,!0),()=>{p?.disconnect(),window.removeEventListener("resize",d),window.removeEventListener("scroll",d,!0)}},[a,d]),typeof document>"u"?null:qn.createPortal(r.jsx(fa,{ref:s,style:{...t,left:i?.left??0,top:i?.top??0,visibility:i===null?"hidden":t?.visibility},...o,children:n}),document.body)}const fa=f.div`
  position: fixed;
  z-index: var(--z-dropdown);
`;function As({grade:e,subject:t,size:n}){const o=Wn(e);return r.jsx($e,{text:t===void 0?void 0:`${t}: ${o}`,focusable:!0,children:r.jsx(_n,{tone:Kn(e),size:n,children:o})})}const ct=12,ha=8,pa=120;function Fs({trigger:e,"aria-label":t,children:n}){const[o,a]=h.useState(!1),s=h.useRef(null),i=h.useRef(null),l=h.useRef(null),c=h.useId(),d=h.useCallback(()=>{i.current!==null&&(clearTimeout(i.current),i.current=null)},[]),p=()=>{d(),a(!0)},v=()=>{d(),i.current=setTimeout(()=>a(!1),pa)},b=h.useCallback(()=>{d(),a(!1)},[d]);h.useEffect(()=>d,[d]),h.useEffect(()=>{if(!o)return;const u=M=>{M.key==="Escape"&&b()};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[o,b]);const x=()=>{const u=s.current?.getBoundingClientRect();if(!u)return null;const M=l.current?.offsetHeight??0,I=u.top-M-2*ct;return{x:u.left,y:I+ct>=ha?I:u.bottom}};return r.jsxs(r.Fragment,{children:[r.jsx(ma,{ref:s,type:"button","aria-label":t,"aria-describedby":o?c:void 0,onPointerEnter:p,onPointerLeave:v,onFocus:p,onBlur:b,children:e}),o&&r.jsx(ua,{anchor:x,onPointerEnter:d,onPointerLeave:v,children:r.jsx(ga,{ref:l,id:c,role:"tooltip",children:n})})]})}const ma=f.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${me}
`,ga=f.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function Ns({gap:e,inset:t=!1,wrap:n=!1,children:o,...a}){return r.jsx(xa,{$gap:e,$inset:t,$wrap:n,...a,children:o})}const xa=f.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?je[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,va=4,ba=80,dt=60,ya=30,Xe=24,wa=32,ut=56,ft=Xe;function De(e,t,n){const{min:o,max:a,step:s}=t,i=e+n*s,l=Math.min(a,Math.max(o,i));if(!Number.isFinite(o))return l;const c=o+Math.round((l-o)/s)*s;return Math.min(a,Math.max(o,c))}function $a(e){const{value:t,min:n,max:o,step:a,orientation:s="horizontal",onChange:i,format:l,"aria-label":c,label:d=c,disabled:p=!1,width:v,height:b}=e,x=s==="vertical",u=Math.max(Xe,v??(x?ft:ut)),M=Math.max(Xe,b??(x?ut:ft)),I=e.mode==="rate",m=n??Number.NEGATIVE_INFINITY,_=o??Number.POSITIVE_INFINITY,y={min:m,max:_,step:a},E=h.useRef(null),$=h.useRef(t);$.current=t;const[z,C]=h.useState(0),w=l?l(t):String(Math.round(t)),D=_>m&&Number.isFinite(_-m)?(t-m)/(_-m):.5,j=T=>{p||T!==t&&i(T)};h.useEffect(()=>{if(!I||z===0||p)return;const T=(e.mode==="rate"?e.stepsPerSecond:void 0)??ya,P=setInterval(()=>{const N=$.current+z*T*a*(dt/1e3);i(N)},dt);return()=>clearInterval(P)},[I,z,p,a,i,e]);const R=T=>{if(p)return;let P=null;switch(T.key){case"ArrowRight":case"ArrowUp":P=De(t,y,1);break;case"ArrowLeft":case"ArrowDown":P=De(t,y,-1);break;case"Home":if(!Number.isFinite(m))return;P=m;break;case"End":if(!Number.isFinite(_))return;P=_;break;default:return}T.preventDefault(),j(P)},B=T=>s==="vertical"?T.clientY:T.clientX,Y=T=>{p||(E.current={start:B(T),startValue:t},T.currentTarget.setPointerCapture(T.pointerId))},X=T=>{if(p||!E.current)return;const P=s==="vertical"?E.current.start-B(T):B(T)-E.current.start;if(I){const W=P/ba;C(Math.max(-1,Math.min(1,W)));return}const N=P/va;j(De(E.current.startValue,y,N))},U=T=>{E.current&&(E.current=null,C(0),T.currentTarget.hasPointerCapture(T.pointerId)&&T.currentTarget.releasePointerCapture(T.pointerId))};return r.jsxs(ja,{children:[d!==!1&&r.jsx(_a,{"aria-hidden":"true",children:d}),r.jsxs(ka,{role:"slider","aria-label":c,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":n,"aria-valuemax":o,"aria-valuetext":w,"aria-disabled":p||void 0,tabIndex:p?-1:0,$orientation:s,$disabled:p,$width:u,$height:M,$compact:(x?u:M)<wa,onKeyDown:R,onPointerDown:Y,onPointerMove:X,onPointerUp:U,onPointerCancel:U,children:[r.jsx(Ma,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-D)*100}%)`}:{transform:`translateX(${(.5-D)*100}%)`},"aria-hidden":"true"}),r.jsx(Sa,{$orientation:s,"aria-hidden":"true"}),r.jsx(Ta,{"aria-hidden":"true",children:w})]})]})}const ja=f.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,_a=f.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,ka=f.div`
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
`,Ma=f.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,Sa=f.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,Ta=f.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function Ls({lock:e}){const t=Bn(e)?Ea(e):e,n=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return r.jsx($e,{text:n,focusable:!0,children:r.jsxs(Ia,{role:"status","aria-label":n,children:[r.jsx(An,{}),r.jsx(Aa,{children:Ra(t)})]})})}function Ea(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...Jn(t,Xn),locks:t}}function Ra(e){const t=[...new Set(e.locks.flatMap(n=>n.missing.map(o=>o.name)))];return t.length>0?t.join(", "):e.reason}const Ia=f.span`
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
`,Aa=f.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ht=1.4,pt=1.7,Fa="var(--icon-size-standalone)",Na=1.8,Me="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",mt="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",gt="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",xt="M7 4.5V19.5M17 4.5V19.5",fe=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,Zt={prograde:{colour:"prograde",paths:[Me,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[Me,fe(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",fe(12,11)]},radialOut:{colour:"radial",paths:[mt,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[mt,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",fe(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",fe(12,12)]},relativePlus:{colour:"target",paths:[Me,gt],dot:[12,12]},relativeMinus:{colour:"target",paths:[Me,gt,fe(12,12)]},parallelPlus:{colour:"target",paths:[xt],dot:[12,12]},parallelMinus:{colour:"target",paths:[xt,fe(12,12)]}},Cs=Object.keys(Zt);function vt({shape:e,colour:t,strokeWidth:n,dotRadius:o}){return r.jsxs("g",{fill:"none",stroke:t,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(a=>r.jsx("path",{d:a},a)),e.dot&&r.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:o,fill:t,stroke:"none"})]})}function Q(e,t){const n=Zt[e],o=`var(--color-marker-${n.colour})`,a=h.forwardRef(({size:s=Fa,strokeWidth:i=Na,label:l,...c},d)=>{const p={ref:d,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24","data-marker":e},v=r.jsxs(r.Fragment,{children:[r.jsx(vt,{shape:n,colour:"currentColor",strokeWidth:i+ht,dotRadius:pt+ht/2}),r.jsx(vt,{shape:n,colour:o,strokeWidth:i,dotRadius:pt})]});return l?r.jsx("svg",{...p,role:"img","aria-label":l,...c,children:v}):r.jsx("svg",{...p,"aria-hidden":"true",...c,children:v})});return a.displayName=t,a}const qt=Q("prograde","ProgradeIcon"),La=Q("retrograde","RetrogradeIcon"),Jt=Q("normal","NormalIcon"),Ca=Q("antiNormal","AntiNormalIcon"),Da=Q("radialOut","RadialOutIcon"),Qt=Q("radialIn","RadialInIcon"),Pa=Q("maneuver","ManeuverIcon"),Oa=Q("target","TargetIcon"),Ba=Q("antiTarget","AntiTargetIcon"),za=Q("relativePlus","RelativePlusIcon"),Ha=Q("relativeMinus","RelativeMinusIcon"),Wa=Q("parallelPlus","ParallelPlusIcon"),Ua=Q("parallelMinus","ParallelMinusIcon"),Ds=qt,Ps=Qt,Os=Jt,Bs={prograde:qt,retrograde:La,normal:Jt,antiNormal:Ca,radialOut:Da,radialIn:Qt,maneuver:Pa,target:Oa,antiTarget:Ba,relativePlus:za,relativeMinus:Ha,parallelPlus:Wa,parallelMinus:Ua};function Ga(e){if(e.frame==="scet")return{token:"SCET",spoken:"spacecraft event time",title:"Spacecraft event time: when this happens at the craft"};const{vantage:t}=e;return t===void 0?{token:"RECEIVED",spoken:"received",title:"When the telemetry showing this arrives"}:{token:`AT ${t}`,spoken:`received at ${t}`,title:`When the telemetry showing this arrives at ${t}`}}const Va=f.span`
  font-size: max(0.72em, 10px);
  opacity: 0.72;
  white-space: nowrap;
  text-transform: none;
`;function zs({value:e,context:t}){const o=Fe(typeof e=="number"?void 0:e),{shown:a,held:s,caption:i}=o,l=typeof e=="number"?e:a?.magnitude,c=Je({...o,shown:l}),d=t&&Ga(t),p=Un(l??Number.NaN);return r.jsxs(r.Fragment,{children:[s?r.jsx(Ze,{...c,caption:i,children:p}):r.jsx("span",{"data-figure":c["data-figure"],children:p}),d&&r.jsxs(r.Fragment,{children:[" ",r.jsx($e,{text:d.title,focusable:!0,children:r.jsxs(Va,{children:[r.jsx("span",{"aria-hidden":"true",children:d.token}),r.jsx(He,{children:d.spoken})]})})]})]})}function en(e){const{year:t,day:n,hour:o,minute:a}=Qe(),s=Number.isFinite(e)?Math.max(0,e):0,i=Math.floor(s/t)+1,l=s%t,c=Math.floor(l/n)+1,d=l%n;return{year:i,day:c,hour:Math.floor(d/o),minute:Math.floor(d%o/a),second:Math.floor(d%a)}}const Ka={year:1,day:1,hour:0,minute:0,second:0};function Xa(e){const{year:t,day:n,hour:o,minute:a}=Qe();return(e.year-1)*t+(e.day-1)*n+e.hour*o+e.minute*a+e.second}function Se(e){return Bt(oe("s",e))}function Ya({value:e,onChange:t,label:n,disabled:o,steps:a}){const s=h.useId(),i=`${s}-absent`,l=e!==null&&Number.isFinite(e)?e:null,c=l===null?null:en(l),d=Qe(),p=a??[d.minute,10*d.minute,d.hour,d.day],[v,b]=h.useState(null),x=(u,M,I,m)=>r.jsxs(we,{gap:"caption",children:[r.jsx(qe,{htmlFor:`${s}-${u}`,children:M}),r.jsx(At,{id:`${s}-${u}`,type:"number",inputMode:"numeric","aria-label":`${n} ${M}`,"aria-describedby":c===null?i:void 0,min:I,step:1,style:{width:m},disabled:o,placeholder:c===null?de:void 0,value:v?.key===u?v.text:c===null?"":String(c[u]),onBlur:()=>b(null),onChange:_=>{const y=_.target.value;if(b({key:u,text:y}),y.trim()==="")return;const E=Number(y);Number.isFinite(E)&&t(Xa({...c??Ka,[u]:E}))}})]},u);return r.jsxs(we,{gap:"related-dense",role:"group","aria-label":n,children:[r.jsxs(We,{gap:"related-dense",wrap:!0,justify:"start",children:[x("year","YEAR",1,"5rem"),x("day","DAY",1,"5rem"),x("hour","HR",0,"4rem"),x("minute","MIN",0,"4rem"),x("second","SEC",0,"4rem")]}),c===null&&r.jsx(ye,{id:i,level:"muted",size:"sm",children:`${de} no ${n.toLowerCase()} to show. Type one to state it.`}),p.length===0?null:r.jsxs(We,{gap:"related-packed",wrap:!0,justify:"start",children:[r.jsx(ye,{level:"faint",size:"sm",children:"NUDGE"}),p.map(u=>r.jsx(Ge,{variant:"ghost",size:"sm",disabled:o||l===null,"aria-label":`${n} earlier by ${Se(u)}`,onClick:()=>l!==null&&t(l-u),children:`-${Se(u)}`},`minus-${u}`)),p.map(u=>r.jsx(Ge,{variant:"ghost",size:"sm",disabled:o||l===null,"aria-label":`${n} later by ${Se(u)}`,onClick:()=>l!==null&&t(l+u),children:`+${Se(u)}`},`plus-${u}`))]})]})}const bt=f(et)`
  --gap-related: var(--gap-related-comfortable);
  --bleed-inline: 0px;

  background: var(--color-surface-sunken);
  border: 1px solid ${({$tone:e})=>Ve(e)};
  border-radius: var(--radius-regular);
  /* A banner is its own strip of the screen, so it takes the roomier inset. */
  padding: var(--inset-surface-standalone);
`;function Hs({tone:e="warn",assertive:t=!1,role:n,children:o,...a}){const s=h.useRef(null),[i,l]=h.useState("");if(h.useEffect(()=>{const d=s.current;if(t||n!==void 0||d===null)return;const p=Za(d);l(v=>v===p?v:p)}),t)return Ie(bt,{...a,children:o,role:n??"alert","aria-live":n===void 0?"assertive":void 0,$tone:e});const c=Ie(bt,{...a,children:o,ref:s,role:n??"note",$tone:e});return n!==void 0?c:r.jsxs(r.Fragment,{children:[c,r.jsx(Ft,{visuallyHidden:!0,children:i})]})}function Za(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let o=n.nextNode();o!==null;o=n.nextNode())t.push(o.textContent??"");return t.join(" ").replace(/\s+/g," ").trim()}function Ws({id:e,label:t,value:n,options:o,onChange:a,hint:s}){const i=o.findIndex(l=>Qn(l.choice,n));return r.jsxs(It,{children:[r.jsx(qe,{htmlFor:e,children:t}),r.jsxs(Fn,{id:e,value:i===-1?"":String(i),onChange:l=>{const c=o[Number(l.target.value)];c!==void 0&&a(c.choice)},children:[i===-1&&r.jsx("option",{value:"",disabled:!0}),o.map((l,c)=>r.jsx("option",{value:c,children:l.label},`${l.choice.kind}-${l.choice.bodyIndex??"none"}`))]}),s!==void 0&&r.jsx(Nn,{children:s})]})}function qa({as:e,interactive:t=!1,selected:n=!1,wrap:o=!1,nested:a=!1,type:s,children:i,...l}){return r.jsx(Qa,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:n,$wrap:o,$nested:a,...l,children:i})}const tn=f.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,Ja="min(12ch, 100%)",Qa=f.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-row);
  font-size: var(--font-size-compact);
  padding: var(--inset-row);
  ${({$wrap:e})=>e?`
  flex-wrap: wrap;
  row-gap: var(--gap-row-wrap);

  & > ${tn} {
    min-width: ${Ja};
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
  ${zt("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}
`,Us=Object.assign(qa,{Name:tn}),eo=65,nn=38,to=72,no=to-nn,rn=55,Ye=137.508,ro=10,ao=1.5,oo=64,so=60,io=241,lo=Ye-Math.floor(Ye),ve=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function an(e,t){const n=Math.abs(e-t)%360;return n>180?360-n:n}const co=ve.map((e,t)=>{let n=1/0;for(let a=0;a<ve.length;a++)a!==t&&(n=Math.min(n,an(e.hue,ve[a].hue)));const o=n/2;return Math.max(0,Math.min(ro,o-ao))}),uo=ve.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:co[t]}));function fo(e,t=ve){return t.find(n=>n.aliases.some(o=>e.includes(o)))}function on(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function yt(e,t){return(e%t+t)%t}function ho(e){const n=on(`light:${e}`)/4294967295;return nn+n*no}function po(e){const t=fo(e);if(!t)return;const n=t.aliases.length===1?rn:ho(e);return{hue:t.hue,lightness:n}}function mo(e){return uo.some(({centre:t,radius:n})=>an(e,t)<n)}function go(e){const t=on(e);let n=yt(t*Ye,360);const o=so+(t>>>8)%io+lo;let a=0;for(;mo(n)&&a<oo;)n=yt(n+o,360),a++;return n}function Gs(e){const t=e.trim().toLowerCase(),n=po(t),o=n?.hue??go(t),a=n?.lightness??rn;return`hsl(${Math.round(o)}deg ${eo}% ${Math.round(a)}%)`}function Vs({selected:e,gap:t="caption",layout:n="stack",selectedLook:o="fill",children:a,...s}){return r.jsx(xo,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:n,$look:o,...s,children:a})}const xo=f.button`
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
  border-radius: ${Ot.regular};
  border: 1px solid
    ${({$selected:e,$look:t})=>e?t==="outline"?"var(--color-accent-fg)":"transparent":"var(--color-border-subtle)"};
  ${({$selected:e,$look:t})=>e?t==="outline"?"background: var(--color-surface-raised); color: inherit;":zt("go"):"background: transparent; color: inherit;"}
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
`,vo=h.forwardRef(function(t,n){return r.jsx(bo,{ref:n,type:"range",...t})}),bo=f.input`
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
`;function yo({label:e,children:t,detail:n,tone:o="neutral",...a}){return r.jsxs(wo,{...a,children:[r.jsx($o,{children:e}),r.jsx(jo,{$tone:o,children:t}),n!=null&&r.jsx(_o,{children:n})]})}const wo=f.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,$o=f.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,jo=f.dd`
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
  color: ${({$tone:e})=>Gn[e]};
`,_o=f.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function Ks({slot:e}){const t=Yn(e);return t.length===0?null:r.jsx(r.Fragment,{children:t.map(n=>r.jsx(yo,{label:n.label,detail:n.detail,tone:n.tone??"neutral",children:r.jsx(ko,{entry:n})},n.id))})}function ko({entry:e}){if(e.value!==void 0)return r.jsx(pe,{value:e.value});if(e.text===void 0)return r.jsx(Vn,{});const t=Ln(e.held);return t===null?r.jsx(r.Fragment,{children:e.text}):r.jsx(Ze,{kind:t.kind,caption:t.caption,children:e.text})}const Mo=9,he=12,So=12,wt=52,q=10,Pe=4;function To(e,t,n){const o=i=>e.map(l=>Number.parseFloat(i.mark(l).replace(/[^\d.-]/g,""))),a=o(n(Pe)),s=i=>o(i).every((l,c)=>l===a[c]);if(s(t))return t;for(let i=0;i<Pe;i++){const l=n(i);if(s(l))return l}return n(Pe)}function Xs({labelSide:e="left",value:t,min:n,max:o,width:a=92,height:s=220,fillHeight:i=!1,tickStep:l,zones:c,markers:d,groundLine:p,seaLevel:v,format:b,"aria-label":x}){const u=h.useRef(null),[M,I]=h.useState(s);h.useEffect(()=>{if(!i)return;const g=u.current;if(!g)return;const L=()=>{const ee=g.clientHeight;ee>0&&I(ee)};L();const F=new ResizeObserver(L);return F.observe(g),()=>F.disconnect()},[i]);const m=i?M:s,_=Fe(t),{shown:y,held:E,caption:$,band:z}=_,{anchor:C,tip:w}=Lt($),D=y?.magnitude??Number.NaN,j=n.magnitude,R=o.magnitude,B=R-j,Y=Number.isFinite(D)?D:j,X=B>0?Math.max(j,Math.min(R,Y)):j,U=y!=null,T=at(o,{format:b}),P=y==null?de:Ke({magnitude:Y,unit:y.unit},{format:T.rung}),N=g=>Ke(g),W=[...(d??[]).flatMap(g=>g.label===void 0?[]:[g.bounds===void 0?`${g.label} ${N(g.value)}`:`${g.label} ${N(g.value)}, between ${N(g.bounds.lo)} and ${N(g.bounds.hi)}`]),...(c??[]).flatMap(g=>g.label===void 0?[]:[`${g.label} zone ${N(g.from.min(g.to))} to ${N(g.from.max(g.to))}`]),...p===void 0?[]:[`ground ${N(p)}`],...v===void 0?[]:[`sea level ${N(v)}`]],se=y==null||z===null?null:Dt(z,y.unit)??null,G=Math.max(0,m-he-So),H=g=>{if(!(B>0))return he+G;const L=Math.max(0,Math.min(1,(g-j)/B));return he+(1-L)*G},A=g=>H(g.magnitude),O=he,te=he+G,V=e==="right",k=V?a-wt-q:wt,ne=V?k+q+6:k-6,ie=V?"start":"end",ce=(g,L)=>{const F=A(g),ee=g.greaterThan(o)?-1:g.lessThan(n)?1:0,ge=k-4,_e=k+q+4,Ne=k+q/2;return r.jsxs("g",{"data-level":L?"sea":"ground",children:[r.jsx("line",{x1:ge,y1:F,x2:_e,y2:F,stroke:L?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:L?1.5:2,strokeDasharray:L?"3 2":void 0}),ee!==0&&r.jsx("polygon",{"data-off-scale":"true",points:`${Ne-4},${F-ee*2} ${Ne+4},${F-ee*2} ${Ne},${F+ee*4}`,fill:L?"var(--color-info-mark)":"var(--color-text-primary)"})]})},ue=[],S=l?.magnitude??0;if(S>0&&B>0){const g=Math.ceil(j/S),L=Math.floor(R/S+1e-9);for(let F=g;F<=L;F++)ue.push(F===0?0:F*S)}const Z=To(ue,T,g=>at(o,{format:b,decimals:g})),K=H(X),J=g=>G>0?(he+G-g)/G:0,le=se!==null&&Et(J(K),[J(A(se.lo)),J(A(se.hi))],Rt())?se:null;return r.jsxs(Eo,{ref:u,...Je(_),...C,...U?{role:"meter","aria-label":Ee(x,$),...Te($),"aria-valuenow":X,"aria-valuemin":j,"aria-valuemax":R,"aria-valuetext":W.length===0?P:`${P}; ${W.join("; ")}`}:{role:"img","aria-label":Ee(`${x}: ${P}`,$),...Te($)},style:i?{height:"100%"}:void 0,children:[r.jsxs("svg",{width:a,height:m,viewBox:`0 0 ${a} ${m}`,"aria-hidden":"true",style:i?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[r.jsx("rect",{x:k,y:O,width:q,height:G,rx:2,fill:"var(--color-surface-raised)"}),c?.map(g=>{const L=A(g.from.max(g.to)),F=A(g.from.min(g.to)),ee=Math.max(0,F-L);return r.jsx("g",{children:r.jsx("rect",{x:k,y:L,width:q,height:ee,fill:g.color??"var(--color-warn-mark)",opacity:.55})},`zone-${F}-${L}-${g.label??""}`)}),v!==void 0&&B>0&&ce(v,!0),p!==void 0&&B>0&&ce(p,!1),ue.map(g=>{const L=H(g),F=U&&Math.abs(L-Math.max(O+4,Math.min(te-4,K)))<Mo;return r.jsxs("g",{children:[r.jsx("line",{x1:V?k+q+4:k-4,y1:L,x2:V?k+q:k,y2:L,stroke:"var(--color-border-subtle)",strokeWidth:1}),!F&&r.jsx("text",{x:ne,y:L,textAnchor:ie,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:Z.mark(g)})]},`tick-${g}`)}),d?.map(g=>{const{bounds:L}=g,F=A(g.value),ee=g.color??"var(--color-accent-fg)";return r.jsxs("g",{"data-marker":g.label,children:[r.jsx("line",{x1:k,y1:F,x2:k+q,y2:F,stroke:ee,strokeWidth:2,strokeDasharray:"2 2"}),r.jsx("polygon",{points:V?`${k},${F} ${k-5},${F-3} ${k-5},${F+3}`:`${k+q},${F} ${k+q+5},${F-3} ${k+q+5},${F+3}`,fill:"none",stroke:ee,strokeWidth:1.5}),L!==void 0&&["lo","hi"].map(ge=>{const _e=A(L[ge]);return r.jsx(Ue,{end:ge,x1:k,y1:_e,x2:k+q,y2:_e},ge)})]},`marker-${F}-${g.label??""}`)}),le!==null&&["lo","hi"].map(g=>{const L=A(le[g]);return r.jsx(Ue,{end:g,x1:k,y1:L,x2:k+q,y2:L},g)}),U&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:k-6,y1:K,x2:k+q+6,y2:K,stroke:"var(--color-accent-fg)",strokeWidth:2}),r.jsxs("text",{x:V?ne+2:ne-2,y:Math.max(O+4,Math.min(te-4,K)),textAnchor:ie,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[T.mark(Y),E&&r.jsx(Ct,{size:5})]})]}),!U&&r.jsx(Cn,{x:V?ne+8:ne-8,y:O+G/2,size:11,children:de}),T.symbol!==""&&r.jsx("text",{x:k+q/2,y:O-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:T.symbol})]}),w]})}const Eo=f.div`
  display: block;
  max-width: 100%;
`,$t={w:5,h:4},Ro=8,Io=7;function Ys(e,t){return e===void 0||t===void 0?"normal":e<$t.w||t<$t.h?"tiny":e<Ro||t<Io?"small":"normal"}const sn=1.6,Ao=1/sn;function Zs(e,t){if(e===void 0||t===void 0||t===0)return{shape:"square",aspect:1};const n=e/t;return n>=sn?{shape:"landscape",aspect:n}:n<=Ao?{shape:"portrait",aspect:n}:{shape:"square",aspect:n}}function Fo(e){switch(e.reason){case"no-horizon-stated":return{heading:"NO HORIZON STATED",detail:"Nothing says how far ahead these orbital elements can be trusted."};case"past-horizon":return e.trajectoryKind===zn.Integrated?{heading:"BEYOND INTEGRATION",detail:"The trajectory is not computed this far ahead yet."}:{heading:"PAST HORIZON",detail:"These orbital elements cannot be trusted this far ahead."};case"shape-not-stated":return{heading:"SHAPE NOT STATED",detail:"Nothing has said whether this trajectory is a conic."};case"frame-unavailable":return{heading:"FRAME UNAVAILABLE",detail:"The trajectory is fine; the frame it was asked for cannot be built from the bodies known here. Pick another frame."};default:return{heading:"NO PATH AVAILABLE",detail:"The integrated trajectory could not be sampled."}}}function qs({withheld:e,compact:t=!1}){const{heading:n,detail:o}=Fo(e);return r.jsx($e,{text:t?o:void 0,focusable:!0,children:r.jsxs(we,{role:"status",children:[r.jsx(ye,{size:"xs",children:n}),!t&&r.jsx(ye,{level:"muted",size:"xs",children:o})]})})}const Js=f.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,No=112;function Lo(e,t){try{return oe(e,1).in(t).magnitude}catch{return Number.NaN}}function Co(e,t){let n=e;return t.map((o,a)=>{if(!Number.isFinite(o)||o===0)return 0;const s=a===t.length-1?n/o:Math.trunc(n/o);return n-=s*o,s})}function Qs({value:e,unit:t,onChange:n,label:o,rungs:a,range:s,rate:i,disabled:l}){const c=h.useId(),{shown:d,held:p,caption:v}=Fe(e),b=p?r.jsx(Ze,{caption:v,children:o}):o,x=s,u=d?d.magnitude:Number.NaN,[M,I]=h.useState({}),m=$=>M[$]??null,_=($,z)=>I(C=>({...C,[$]:z})),y=i?r.jsxs(we,{gap:"related-packed",children:[r.jsx($a,{mode:"rate","aria-label":`${o} rate`,value:u,step:i.step,stepsPerSecond:i.stepsPerSecond,disabled:l||!Number.isFinite(u),format:Oe(t)?Po:void 0,width:Oe(t)?No:void 0,onChange:$=>n(oe(t,$))}),r.jsx(ye,{level:"faint",size:"sm",children:`${i.step} ${Do(t)} / notch`})]}):null;if(Oe(t))return r.jsxs(ze,{children:[r.jsx(_t,{"aria-hidden":"true",children:b}),r.jsxs(we,{gap:"related-dense",children:[r.jsx(Ya,{label:p&&v!==null?`${o}, ${v}`:o,value:Number.isFinite(u)?u:null,disabled:l,steps:i?[]:void 0,onChange:$=>n(oe(t,$))}),y]})]});if(a&&a.length>0){const $=a.map(w=>Lo(String(w),t)),z=Co(u,$),C=(w,D)=>{const j=Be(D);if(j===void 0){_(w,{text:D,against:z[w]});return}const R=z.slice();R[w]=j;const B=R.reduce((Y,X,U)=>Number.isFinite($[U])?Y+X*$[U]:Y,0);_(w,{text:D,against:j}),n(oe(t,B))};return r.jsxs(ze,{children:[r.jsx(_t,{id:`${c}-label`,children:b}),r.jsx(Ho,{role:"group","aria-labelledby":`${c}-label`,children:a.map((w,D)=>r.jsxs(Wo,{children:[r.jsx(Uo,{type:"number",disabled:l,"aria-label":`${o} ${String(w)}`,value:jt(m(D),z[D]),onChange:j=>C(D,j.target.value)}),r.jsx(kt,{"aria-hidden":"true",children:String(w)})]},String(w)))}),y]})}const E=$=>{const z=Be($);_(0,{text:$,against:z??u}),z!==void 0&&n(oe(t,z))};return r.jsxs(ze,{children:[r.jsx(Bo,{htmlFor:c,children:b}),r.jsxs(zo,{children:[r.jsx(cn,{id:c,type:"number",disabled:l,min:x?.min,max:x?.max,step:x?.step,value:jt(m(0),u),onChange:$=>E($.target.value)}),r.jsx(kt,{"aria-hidden":"true",children:t})]}),x?r.jsx(vo,{disabled:l,"aria-label":`${o} slider`,min:x.min,max:x.max,step:x.step??(x.max-x.min)/100,value:Number.isFinite(u)?u:x.min,onChange:$=>n(oe(t,Be($.target.value)??x.min))}):null,y]})}function jt(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(Oo(t)):""}function Do(e){return Pt(e)??e}function Oe(e){return Pt(e)==="s"}function Po(e){if(!Number.isFinite(e))return"";const{day:t,hour:n,minute:o,second:a}=en(e),s=i=>String(i).padStart(2,"0");return`D${t} ${s(n)}:${s(o)}:${s(a)}`}function Be(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function Oo(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const ze=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,ln=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Bo=f.label`
  ${ln}
`,_t=f.span`
  ${ln}
`,zo=f.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,cn=f.input`
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
`,kt=f.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Ho=f.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,Wo=f.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,Uo=f(cn)`
  width: 4.5em;
`,Mt="(prefers-reduced-motion: reduce)";function ei(){const[e,t]=h.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(Mt).matches);return h.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const n=window.matchMedia(Mt),o=()=>t(n.matches);return o(),n.addEventListener("change",o),()=>n.removeEventListener("change",o)},[]),e}function ti({row:e,style:t}){const o=Zn("meters").filter(a=>a.row===e);return o.length===0?null:r.jsx(kn,{style:t,role:"group","aria-label":"meters",children:o.map(a=>r.jsx(Mn,{label:a.label,value:a.value,tone:a.tone,valueLabel:a.valueLabel},a.id))})}const dn=h.createContext(null);function ni({widget:e,scope:t,children:n}){const o=h.useMemo(()=>({widget:e,scope:t}),[e,t]);return r.jsx(dn.Provider,{value:o,children:n})}function ri(e){const t=h.useContext(dn);if(!(!t||t.widget!==e))return t.scope}function ai(e){if(e.length===0)return[];const t=[[e[0]]];for(let n=1;n<e.length;n++)Ko(e[n-1],e[n])?t.push([e[n]]):t[t.length-1].push(e[n]);return t}function oi(e,t,n,o){if(e.length===0||!(t>0))return[];const a=[e[0].x];let s=a[0],i=a[0];for(let l=1;l<e.length;l++){const c=a[l-1],d=c+Vo(e[l].x-c,t);a.push(d),d<s&&(s=d),d>i&&(i=d)}return Go(s,i,n,o,t).map(l=>e.map((c,d)=>({...c,x:a[d]+l})))}function Go(e,t,n,o,a){if(!(a>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((n-t)/a),i=Math.floor((o-e)/a),l=[];for(let c=s;c<=i;c++)l.push(c*a+0);return l}function Vo(e,t){const n=t/2;return((e+n)%t+t)%t-n}function Ko(e,t){const n=St(e),o=St(t),a=Yo(n,o);if(a===0)return!1;const s=Tt(Xo(n,o));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=a)return!1;const l=[0,0,e.lat+t.lat>=0?1:-1],c=Tt(Zo(l,s));if(c===null)return!1;const d=be(n,o);return be(n,c)>d&&be(o,c)>d}function St({lat:e,lon:t}){const n=e*Math.PI/180,o=t*Math.PI/180,a=Math.cos(n);return[a*Math.cos(o),a*Math.sin(o),Math.sin(n)]}function be(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Xo(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Yo(e,t){return Math.acos(Math.max(-1,Math.min(1,be(e,t))))}function Zo(e,t){const n=be(e,t);return[e[0]-n*t[0],e[1]-n*t[1],e[2]-n*t[2]]}function Tt(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{cr as $,Tr as A,ms as B,bs as C,ks as D,Es as E,Is as F,qt as G,As as H,or as I,$a as J,Da as K,Ls as L,Bs as M,Jt as N,Ws as O,Ua as P,Ha as Q,Qt as R,za as S,La as T,Us as U,tn as V,Vs as W,$s as X,vo as Y,yo as Z,Ks as _,fs as a,$t as a0,Ds as a1,Xs as a2,Oa as a3,qs as a4,Js as a5,Qs as a6,ti as a7,ni as a8,ar as a9,br as aa,Rs as ab,Ys as ac,Zs as ad,Go as ae,Gs as af,ai as ag,Fo as ah,Rr as ai,ei as aj,js as ak,ri as al,Xa as am,oi as an,Ca as b,Ba as c,hs as d,ps as e,Os as f,gs as g,xs as h,vs as i,ws as j,_s as k,Ms as l,Ss as m,Ts as n,ys as o,ua as p,Ps as q,Fs as r,_r as s,Ns as t,Cs as u,Pa as v,zs as w,Ya as x,Hs as y,Wa as z};
