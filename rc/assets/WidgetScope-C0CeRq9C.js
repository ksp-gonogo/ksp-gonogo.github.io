import{j as n}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./ext-react-RRA14VTW.js";import l,{css as ne,keyframes as tn}from"./ext-styled-components-Br73TgY3.js";import{a3 as nn,g as rn,K as on,al as qe,am as an,U as fe,e as sn,Y as ln,V as cn,Z as dn,X as un,an as fn,ac as pn,ao as hn,ap as Ze,a9 as bt,a6 as yt,B as mn,H as wt,c as gn,M as xn}from"./ToggleButton-DFeWMsD8.js";import{E as vn,a1 as Re,m as bn,F as $t,l as Ve,v as jt,V as De,aa as Pe,a2 as Me,Z as _t,as as yn,_ as kt,a4 as Ee,ar as St,at as Be,af as Tt,au as je,aq as _e,a5 as Ke,f as wn,a3 as pe,d as Oe,T as $n,ag as jn,G as _n,k as kn,av as Sn}from"./reckoningMarkDraw-DsBgzLbp.js";import{G as ve,N as ce,R as Rt,I as Tn,t as ze,w as Mt,j as He,i as Rn,k as Mn,a as We,l as Et,T as En,b as In,q as Fn}from"./streamStatusWord-BOspJ1jn.js";import{aZ as Je,b5 as An,v as ie,E as It,bT as Nn,ba as Xe,bo as Ft}from"./view-clock-formula-RKc_nzy1.js";import"./ksp-enum-names-Kp4GB3ve.js";import"./kepler-DtDJUp9i.js";import{s as Ln,x as Cn,f as ke,c as Dn,m as Pn}from"./contributionsRead-CQcbGXAd.js";import{r as Bn}from"./ext-react-dom-CZVBhjGL.js";import{l as On}from"./capability-lock-DaslJEXA.js";import"./reference-frame-C3IY91zk.js";import"./use-transmissions-XjaogJek.js";import{r as zn}from"./control-frame-to-read-frame-DsRA9oRj.js";function Ga({items:e,onSelect:t,onDismiss:r,ariaLabel:a,style:o,header:s,footer:i,emptyLabel:c="No actions",otherLabel:u="Other"}){const p=f.useRef(null),h=f.useId(),[v,w]=f.useState(0),x=nn(e,u),d=x.flatMap(([,m])=>m),R=d.length;f.useEffect(()=>{const m=p.current;if(!m)return;if(R===0){m.focus();return}m.querySelectorAll('[role="menuitem"]')[v]?.focus()},[v,R]),f.useEffect(()=>{const m=_=>{const b=p.current;b&&_.target instanceof Node&&!b.contains(_.target)&&r()};return document.addEventListener("pointerdown",m),()=>document.removeEventListener("pointerdown",m)},[r]);const C=f.useCallback(m=>{if(m.key==="Escape"){m.stopPropagation(),r();return}if(m.key==="Tab"){r();return}if(d.length!==0)switch(m.key){case"ArrowDown":m.preventDefault(),w(_=>Math.min(_+1,d.length-1));break;case"ArrowUp":m.preventDefault(),w(_=>Math.max(_-1,0));break;case"Home":m.preventDefault(),w(0);break;case"End":m.preventDefault(),w(d.length-1);break}},[d.length,r]);return n.jsxs(Hn,{ref:p,role:R>0?"menu":void 0,"aria-label":a,onKeyDown:C,tabIndex:-1,style:o,children:[s,d.length===0?n.jsx(vn,{layout:"fill",children:c}):x.map(([m,_],b)=>n.jsxs("div",{...x.length>1?{role:"group","aria-labelledby":`${h}-group-${b}`}:{role:"none"},children:[x.length>1?n.jsx(Wn,{id:`${h}-group-${b}`,"aria-hidden":"true",children:m}):null,_.map(M=>{const $=d.indexOf(M);return n.jsx(Gn,{type:"button",role:"menuitem","aria-label":M.ariaLabel,"aria-disabled":M.disabled,$disabled:M.disabled,tabIndex:$===v?0:-1,onFocus:()=>w($),onClick:()=>{M.disabled||t(M.key)},children:M.label},M.key)})]},m)),i]})}const Hn=l.div`
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
`,Wn=l.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,Gn=l.button`
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

  ${Re}
  /* The background marks the focused row where the ring meets the menu border. */
  &:focus-visible {
    background: var(--color-border-subtle);
  }

  &[aria-disabled="true"] {
    color: var(--color-text-faint);
    cursor: default;
  }
`;function Ua({settings:e,values:t,onChange:r}){return e.length===0?null:n.jsx(n.Fragment,{children:e.flatMap(a=>a.fields.map(o=>{const i=t?.[a.namespace]?.[o.key]??o.default,c=o.label??o.key,u=`augment-setting-${a.namespace}-${o.key}`;return o.type==="boolean"?n.jsx(bn,{children:n.jsx(rn,{checked:!!i,onChange:p=>r(a.namespace,o.key,p),label:c})},`${a.namespace}.${o.key}`):n.jsxs($t,{children:[n.jsx(Ve,{htmlFor:u,children:c}),n.jsx(jt,{id:u,type:o.type==="number"?"number":"text",value:i===void 0?"":String(i),onChange:p=>{const h=p.target.value;if(o.type!=="number"){r(a.namespace,o.key,h);return}if(h===""){r(a.namespace,o.key,void 0);return}const v=Number(h);Number.isFinite(v)&&r(a.namespace,o.key,v)}})]},`${a.namespace}.${o.key}`)}))})}function Va({fallback:e,gap:t="related-dense",children:r,...a}){return n.jsxs(n.Fragment,{children:[n.jsx(At,{$gap:t,...a,children:r}),n.jsx(Un,{children:e})]})}const At=l.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>ve[e]};
`,Un=l.div`
  ${At}:not(:empty) + & {
    display: none;
  }
`,Qe=12,ye=8;function Vn(e,t,r){return{left:et(e.x,t.w,r.w),top:et(e.y,t.h,r.h)}}function et(e,t,r){const a=e+Qe;if(a+t<=r-ye)return a;const o=e-Qe-t;return o>=ye?o:Math.max(ye,r-ye-t)}const Kn="–";function Ka({min:e,max:t,wrapsAt:r,className:a,...o}){const s=Je(e),i=Je(t);return e==null||t==null||s===null||i===null?n.jsx(Se,{className:a,children:ce}):r!==void 0&&Math.abs(i-s)>=r/2?n.jsx(Se,{className:a,children:"(precesses)"}):n.jsx(on,{of:e.unit,separate:!0,...o,children:n.jsx(Xn,{min:e,max:t,className:a})})}function Xn({min:e,max:t,className:r}){return qe(e),qe(t),an(e)?n.jsx(Se,{className:r,children:n.jsxs(qn,{children:[n.jsx("span",{"aria-hidden":"true",children:"~"}),n.jsx(De,{children:"approximately "}),n.jsx(fe,{value:e})]})}):n.jsxs(Se,{className:r,children:[n.jsx(fe,{value:e}),n.jsx(Yn,{"aria-hidden":"true",children:Kn}),n.jsx(De,{children:" to "}),n.jsx(fe,{value:t})]})}const Se=l.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,Yn=l.span`
  color: var(--color-text-faint);
`,qn=l.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`;function Zn({children:e,status:t,gap:r="related-packed",align:a="center"}){return n.jsxs(Pe,{align:a,gap:r,justify:"between",wrap:!0,children:[e,t]})}const Nt=l.div`
  color: var(--color-text-primary);
  font-weight: 600;
  /* One rung above the body the arrangement sets; both halves are declared here, so a site cannot break the step. */
  font-size: var(--font-size-value);
  line-height: var(--line-height-tight);
  /* A content-sized basis, so a long title wraps instead of running into the badge beside it. */
  flex: 1 1 auto;
  min-width: 0;
`,Jn=l.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-record-lead);
  flex: 1 1 auto;
  min-width: 0;
`;function Lt({left:e,right:t,children:r}){return n.jsx(Zn,{align:"baseline",status:t,children:e==null?r:n.jsxs(Jn,{children:[e,r]})})}const Qn=l.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--gap-related);
`,Ct=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  flex: 1 1 var(--block-body-floor, 9rem);
  min-width: 0;
`,ge=l.div`
  min-width: 0;
  ${({$side:e})=>e?`flex: 0 0 auto;
    --radius-display-frame: var(--radius-display-frame-aside);`:""}
`,Dt=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-related);
  flex-wrap: wrap;
`,Ye=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  min-width: 0;
  /* The compact body size, declared here so the title stays one rung above it. */
  font-size: var(--font-size-compact);
`;function Te(e,{title:t,titleAs:r,titleLeft:a,titleRight:o,left:s,right:i,top:c,bottom:u,footer:p,children:h,...v}){const w=t!=null||a!=null||o!=null,x=s!=null||i!=null,d=w&&n.jsx(Lt,{left:a,right:o,children:t!=null&&n.jsx(Nt,{as:r,children:t})});return n.jsxs(e,{...v,children:[c!=null&&n.jsx(ge,{$side:!1,children:c}),x?n.jsxs(Qn,{children:[s!=null&&n.jsx(ge,{$side:!0,children:s}),n.jsxs(Ct,{children:[d,h]}),i!=null&&n.jsx(ge,{$side:!0,children:i})]}):n.jsxs(n.Fragment,{children:[d,h]}),p!=null&&n.jsx(Dt,{children:p}),u!=null&&n.jsx(ge,{$side:!1,children:u})]})}const Pt={Title:Nt,TitleRow:Lt,Body:Ct,Aside:ge,Footer:Dt};function er({...e}){return Te(Ye,e)}const Xa=Object.assign(er,Pt),tr={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function Ya({surface:e,pad:t,bordered:r=!1,radius:a,children:o,...s}){return n.jsx(nr,{$surface:e,$pad:t,$bordered:r,$radius:a,...s,children:o})}const nr=l.div`
  ${({$surface:e})=>e&&`background: ${tr[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${Rt[e]};`}
  ${({$pad:e})=>e&&`padding: var(${Tn[e]});`}
`,qa=f.forwardRef(function({equalWidth:t=!0,gap:r,children:a,...o},s){return n.jsx(rr,{ref:s,$equalWidth:t,$gap:r,...o,children:a})}),rr=l.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?ve[e]:"var(--gap-related)"};
`,or="3px",ar=l(Ye)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${ze(e)};`:""}
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
    ${t?`border-left-color: color-mix(in srgb, ${ze(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function sr({tone:e,dimmed:t,identityColor:r,standalone:a,...o}){return Te(ar,{...o,$tone:e,$dimmed:t,$identityColor:r,$standalone:a})}const Za=Object.assign(sr,Pt);function ir(e){const t=e.inFlight.filter(r=>r.predictedPhase==="overdue"||r.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const Ja=f.forwardRef(function({label:t,icon:r,type:a,...o},s){return n.jsx("button",{ref:s,type:a??"button","aria-label":t,...o,children:n.jsx(Bt,{label:t,icon:r})})});function Bt({label:e,icon:t}){const r=f.useRef(null),a=f.useRef(null),[o,s]=f.useState(!0);return f.useLayoutEffect(()=>{const i=r.current,c=a.current;if(!i||!c)return;const u=()=>{s(c.scrollWidth<=i.clientWidth)};if(u(),typeof ResizeObserver>"u")return;const p=new ResizeObserver(u);return p.observe(i),p.observe(c),()=>p.disconnect()},[]),n.jsxs(lr,{ref:r,children:[n.jsx(cr,{ref:a,"aria-hidden":"true",children:e}),o?n.jsx(dr,{"aria-hidden":"true",children:e}):n.jsx(ur,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const lr=l.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,cr=l.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,dr=l.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,ur=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function fr({holds:e,label:t,spinnerSize:r=12}){return n.jsxs(pr,{children:[n.jsx(hr,{"aria-hidden":"true",children:e}),n.jsx(mr,{children:n.jsx(sn,{size:r,ariaLabel:t})})]})}const pr=l.span`
  display: inline-grid;
  & > * {
    grid-area: 1 / 1;
  }
`,hr=l.span`
  visibility: hidden;
`,mr=l.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,gr=4e3,tt=8e3,xr=3e4;function Ot(e,t){return e.gateFor?e.gateFor(t):e.gate}function vr({handle:e,args:t,commandLabel:r,onConfirmed:a}){const[o,s]=f.useState("idle"),[i,c]=f.useState(null),[u,p]=f.useState(null),[h,v]=f.useState(!1),w=Ot(e,t),x=w?.blocked===!0,d=f.useRef(!0),R=f.useRef(0);f.useEffect(()=>()=>{d.current=!1},[]);const C=e.founds,m=f.useRef(!1),_=f.useRef(C?.length??0);f.useEffect(()=>{const y=C?.length??0,N=y>_.current;_.current=y;const j=C?.[y-1];!N||!j||!m.current||(m.current=!1,p(j),c(null),s("found"))},[C]),f.useEffect(()=>{if(o!=="armed")return;const y=setTimeout(()=>s("idle"),gr);return()=>clearTimeout(y)},[o]),f.useEffect(()=>{if(o!=="refused"&&o!=="lost"&&o!=="found")return;const y=setTimeout(()=>{s("idle"),c(null),p(null)},tt);return()=>clearTimeout(y)},[o]),f.useEffect(()=>{if(!h)return;const y=setTimeout(()=>v(!1),tt);return()=>clearTimeout(y)},[h]),f.useEffect(()=>{x||v(!1)},[x]),f.useEffect(()=>{if(o!=="pending")return;const y=setTimeout(()=>s("idle"),xr);return()=>clearTimeout(y)},[o]);const b=f.useCallback(()=>{const y=R.current+1;R.current=y,s("pending"),c(null);const N=(j,E)=>{!d.current||R.current!==y||(c(E),s(j))};e.send(t,r?{label:r}:void 0).then(j=>{N("idle",null),a?.(j)},j=>{const E=An(j);if(E.kind==="lost"){m.current=!0,N("lost",null);return}if(E.kind!=="refused"){N("idle",null);return}N("refused",{errorCode:E.errorCode,reason:E.reason,command:E.command,args:E.args,label:E.label??r,breach:E.breach,detail:E.detail})})},[e,t,r,a]),{hasUnconfirmed:M,hasFailure:$}=ir(e),O=f.useCallback(y=>{if(o!=="pending"){if(x){v(!0);return}if(o==="refused"||o==="lost"||o==="found"){c(null),p(null),s("idle");return}if(y&&o!=="armed"){s("armed");return}b()}},[o,x,b]),A=o==="pending"||o==="refused"||o==="lost"||o==="found"?o:x?"blocked":o;return{phase:A,isPending:A==="pending",isArmed:A==="armed",isRefused:A==="refused",isLost:A==="lost",isFound:A==="found",isBlocked:A==="blocked",isShowingReason:A==="blocked"&&h,refusalText:i?dn(i):A==="blocked"&&w?un({...w,label:w.label??r,args:w.args??t}):null,foundText:u?cn(u):null,lossText:A==="lost"?ln({args:t,label:r}):null,hasUnconfirmed:M,hasFailure:$,press:O}}function Qa({handle:e,args:t,commandLabel:r,label:a,confirmLabel:o,pendingLabel:s="Working...",refusedLabel:i="Refused",lostLabel:c="No reply",foundLabel:u="Found",confirmAriaLabel:p,pendingAriaLabel:h,blockedAriaLabel:v,active:w,variant:x="ghost",tone:d="neutral",icon:R,confirmIcon:C,onPressReady:m,size:_="md",confirmTone:b="go",onConfirmed:M,disabled:$,title:O,"aria-label":A,...y}){const{phase:N,isPending:j,isArmed:E,isRefused:P,isLost:q,isFound:K,isBlocked:V,isShowingReason:T,refusalText:D,foundText:L,lossText:W,hasUnconfirmed:ae,hasFailure:X,press:z}=vr({handle:e,args:t,commandLabel:r,onConfirmed:M});f.useEffect(()=>{if(!(!m||j))return m(z),()=>m(null)},[m,j,z]);const B=j?n.jsx(fr,{holds:a,label:s,spinnerSize:_==="sm"?10:12}):P?i:q?c:K?u:T?D:E?o:a,re=R!==void 0&&typeof B=="string",G=re?n.jsx(Bt,{label:B,icon:E?C??R:R}):B,k=R===void 0&&typeof a=="string"&&typeof o=="string"&&!P&&!q&&!K&&!T,te=P?D:q?W:K?L:null,se=w===!0||E||P,le=br({restTone:x==="primary"?d:"neutral",filled:se,isRefused:P,isFound:K,isArmed:E,confirmTone:b,tone:d});return n.jsxs(n.Fragment,{children:[n.jsx(Me,{text:L??D??(j?s:O),children:n.jsx($r,{type:"button",$tone:le,$variant:x,$fit:re,$size:_,$pressed:se,$armed:E,$blocked:V,"aria-pressed":w,"aria-busy":j||void 0,"aria-disabled":V||j||void 0,disabled:$,"data-unconfirmed":ae?"true":void 0,"data-failed":X?"true":void 0,"data-command-phase":N,"data-gate":V?"blocked":Ot(e,t)?.undetermined?"undetermined":void 0,"aria-label":(P?D??void 0:q?W??void 0:K?L??A:V?v??D??A:j?h??s:E?p:A)??(re?B:void 0),onClick:()=>z(o!==void 0),"data-rest-label":k?a:void 0,"data-armed-label":k?o:void 0,...y,children:k?n.jsx(wr,{children:G}):G})}),n.jsx(_t,{visuallyHidden:!0,children:te})]})}function br(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const yr=tn`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,wr=l.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,$r=l(yn)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&ne`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${yr} 1s var(--ease-emphasis) infinite;
      }
    `}

  &:disabled {
    opacity: 0.5;
  }

  /* Dimmed toward the muted text token rather than faded, so the refusal reason stays readable; the warn border says the game refused. */
  ${({$blocked:e})=>e&&ne`
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
`;function es({oneWaySeconds:e,delayReading:t,className:r}){const a=ie("s",e);return n.jsxs(jr,{className:r,role:"group","aria-label":"Signal delay",children:["one-way ~",n.jsx(fe,{value:fn(a,t),...a.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const jr=l.div`
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
`;function ts(e){const t=pn(),r=f.useId(),a=e!==null;f.useEffect(()=>{if(!(!t||!e))return t.register({id:r,...e})},[t,r,a]),f.useEffect(()=>{!t||!e||t.update(r,e)},[t,r,e])}function ns({at:e,narrow:t,wide:r,children:a,...o}){return n.jsx(_r,{$at:e,$narrow:t,$wide:r,...o,children:a})}const _r=l.div`
  ${({$narrow:e})=>e}
  @container (min-width: ${({$at:e})=>e}px) {
    ${({$wide:e})=>e}
  }
`;function kr(e,t){return e.value!==void 0?n.jsx(fe,{value:e.value(t)??null}):e.render(t)}function rs({columns:e,rows:t,sections:r,rowKey:a,caption:o,empty:s,rowDetail:i,className:c}){const u=r??(t?[{id:"",title:null,rows:[...t]}]:[]),p=u.reduce((d,R)=>d+R.rows.length,0),[h,v]=f.useState(null),w=hn(h),x=kt(h);return n.jsxs(Sr,{className:c,children:[n.jsx(Tr,{ref:v,tabIndex:x,children:n.jsxs(Rr,{children:[n.jsx(Mr,{children:o}),n.jsx("thead",{children:n.jsx("tr",{children:e.map(d=>n.jsx(Er,{scope:"col",$align:d.align??"start",style:{width:d.width,minWidth:d.minWidth},children:d.header},d.key))})}),p===0&&s!==void 0&&n.jsx("tbody",{children:n.jsx("tr",{children:n.jsx(Lr,{colSpan:e.length,children:s})})}),u.map(d=>n.jsxs("tbody",{children:[d.title!==null&&d.title!==void 0&&n.jsx("tr",{children:n.jsx(Ir,{scope:"rowgroup",colSpan:e.length,children:d.title})}),d.rows.map(R=>{const C=a(R),m=i?.(R),_=m!=null&&m!==!1&&m!=="";return n.jsxs(f.Fragment,{children:[n.jsx(Fr,{$hasDetail:_,children:e.map(b=>n.jsx(Ar,{as:b.rowHeader?"th":void 0,scope:b.rowHeader?"row":void 0,$align:b.align??"start",children:kr(b,R)},b.key))}),_?n.jsx("tr",{children:n.jsx(Nr,{colSpan:e.length,children:m})}):null]},C)})]},d.id))]})}),n.jsx(Ze,{$position:"left",$visible:w.left}),n.jsx(Ze,{$position:"right",$visible:w.right})]})}const Sr=l.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Tr=l.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${Re}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Rr=l.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,Mr=l.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,Er=l.th`
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
`,Ir=l.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,Fr=l.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,Ar=l.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,Nr=l.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,Lr=l.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`,Cr=6,Dr=3,Fe={track:8,hub:4,needle:.92},Pr={regular:{size:16,drop:18},large:{size:24,drop:32}};function oe(e,t,r,a){const o=a*Math.PI/180;return{x:e+r*Math.sin(o),y:t-r*Math.cos(o)}}function nt(e,t,r,a,o){const s=oe(e,t,r,a),i=oe(e,t,r,o),c=o-a,u=Math.abs(c)>180?1:0,p=c>=0?1:0;return`M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${u} ${p} ${i.x.toFixed(2)} ${i.y.toFixed(2)}`}function os({value:e,min:t,max:r,width:a=120,height:o=120,startAngle:s=0,sweep:i=360,wrap:c=!1,zones:u,ticks:p,valueLabel:h,readout:v,format:w,needleColor:x="var(--color-text-primary)",trackColor:d="var(--color-border-subtle)",ariaLabel:R}){const C=Ee(e),{shown:m,held:_,caption:b,band:M}=C,{anchor:$,tip:O}=St(b),A=m?.magnitude??Number.NaN,y=t.magnitude,N=r.magnitude,j=N-y,E=Number.isFinite(A)?A:y,P=j>0?c?y+((E-y)%j+j)%j:Math.max(y,Math.min(N,E)):y,q=m!=null,K=m==null?null:{magnitude:P,unit:m.unit},V=h??(K===null?null:Mt(K,{format:w})),T=K===null?ce:He(K,{format:w}),D=m==null||M===null?null:It(M,m.unit)??null,L=v!==void 0&&i<=180,W=L?Fe.track:Cr,ae=L?Fe.hub:Dr,X=v===void 0?null:Pr[v],z=a/2,F=L&&X!==null?Math.min((a-W)/2,o-W-X.drop):Math.min(a,o)/2-W-2,B=L?F+W/2:o/2,re=S=>{const U=j>0?(S-y)/j:0;return s+U*i},G=S=>S.max(t).min(r),k=S=>re(S.magnitude),te=S=>i!==0?(S-s)/i:0,se=D!==null&&bt(te(re(P)),[te(k(G(D.lo))),te(k(G(D.hi)))],yt({wraps:c}))?D:null,le=i>=360,he=oe(z,B,F*(L?Fe.needle:.88),re(P));return n.jsxs(Br,{...Ke(C),...$,...q?{role:"meter","aria-label":_e(R??"Dial",b),...je(b),"aria-valuenow":P,"aria-valuemin":y,"aria-valuemax":N,"aria-valuetext":T}:{role:"img","aria-label":_e(`${R??"Dial"}: ${T}`,b),...je(b)},children:[n.jsxs("svg",{width:a,height:o,viewBox:`0 0 ${a} ${o}`,"aria-hidden":"true",style:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[F>0&&(le?n.jsx("circle",{cx:z,cy:B,r:F,fill:"none",stroke:d,strokeWidth:W}):n.jsx("path",{d:nt(z,B,F,s,s+i),fill:"none",stroke:d,strokeWidth:W,strokeLinecap:"round"})),F>0&&!le&&u?.flatMap(S=>{const U=G(S.from.min(S.to)),Y=G(S.from.max(S.to));return Y.greaterThan(U)?[U.greaterThan(t)?null:s,r.greaterThan(Y)?null:s+i].flatMap(Q=>{if(Q===null)return[];const g=oe(z,B,F,Q);return[n.jsx("circle",{"data-dial-cap":"",cx:g.x,cy:g.y,r:W/2,fill:S.color},`cap-${S.color}-${Q}`)]}):[]}),F>0&&u?.map(S=>{const U=G(S.from.min(S.to)),Y=G(S.from.max(S.to));return Y.greaterThan(U)?n.jsx("path",{d:nt(z,B,F,k(U),k(Y)),fill:"none",stroke:S.color,strokeWidth:W,strokeLinecap:"butt"},`zone-${S.color}-${k(U)}-${k(Y)}`):null}),F>0&&p?.map(S=>{const U=S.value.magnitude,Y=re(U),Q=oe(z,B,F,Y),g=oe(z,B,F-W,Y),I=oe(z,B,F-W-8,Y);return n.jsxs("g",{children:[n.jsx("line",{x1:g.x,y1:g.y,x2:Q.x,y2:Q.y,stroke:"var(--color-text-faint)",strokeWidth:1}),S.label&&n.jsx("text",{x:I.x,y:I.y,textAnchor:"middle",dominantBaseline:"middle",fontSize:9,fill:"var(--color-text-faint)",children:S.label})]},`tick-${U}-${S.label??""}`)}),F>0&&se!==null&&["lo","hi"].map(S=>{const U=k(G(se[S])),Y=oe(z,B,F-W/2,U),Q=oe(z,B,F+W/2,U);return n.jsx(Be,{end:S,x1:Y.x,y1:Y.y,x2:Q.x,y2:Q.y},S)}),F>0&&q&&n.jsxs(n.Fragment,{children:[n.jsx("line",{x1:z,y1:B,x2:he.x,y2:he.y,stroke:x,strokeWidth:2,strokeLinecap:"round"}),n.jsx("circle",{cx:z,cy:B,r:ae,fill:x})]}),n.jsxs("text",{x:z,y:L&&X!==null?B+X.drop:B+F*.55,textAnchor:"middle",fontSize:L&&X!==null?X.size:13,fontWeight:L?void 0:"bold",fill:V===null?"var(--color-text-muted)":"var(--color-text-primary)",children:[V??ce,_&&V!==null&&n.jsx(Tt,{size:L?7:6})]})]}),O]})}const Br=l.div`
  display: block;
  max-width: 100%;
`;function as({label:e,children:t,ariaLabel:r,className:a,variant:o="popover",panelHeight:s="cap",chevron:i=!0,asButton:c=!1,buttonSize:u="md",defaultOpen:p=!1}){const[h,v]=f.useState(p),w=f.useId(),x=f.useRef(null),[d,R]=f.useState(null),C=kt(d),m=o==="inline"&&i,_=typeof e=="function"?e(h):e,b={ref:x,type:"button","aria-expanded":h,"aria-controls":w,"aria-label":r,onClick:()=>v($=>!$)},M=n.jsxs(n.Fragment,{children:[_,m&&n.jsx(Wr,{$open:h,children:n.jsx(wn,{size:"var(--icon-size-control)"})})]});return n.jsxs(Or,{className:a,$variant:o,onKeyDown:$=>{$.key==="Escape"&&h&&(v(!1),x.current?.focus())},children:[c?n.jsx(Hr,{...b,variant:"ghost",size:u,$inline:o==="inline",children:M}):n.jsx(zr,{...b,$variant:o,$align:o==="inline"&&!i?"end":"between",children:M}),h&&n.jsx(Gr,{ref:R,id:w,role:"group",tabIndex:C,$variant:o,$panelHeight:s,children:t})]})}const Or=l.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,zr=l.button`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-glyph);
  padding: var(--inset-glyph-button);
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  ${({$variant:e,$align:t})=>e==="inline"&&ne`
      justify-content: ${t==="end"?"flex-end":"space-between"};
      width: 100%;
      border-radius: var(--radius-regular);
      &:hover {
        background: var(--color-surface-sunken);
      }
    `}
  ${pe}
`,Hr=l(Oe)`
  ${({$inline:e})=>e&&ne`
      align-self: flex-end;
    `}
`,Wr=l.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,Gr=l.div`
  ${({$variant:e})=>e==="popover"?ne`
          position: absolute;
          top: 100%;
          right: 0;
          /* Local sibling ordering: lifts the popped panel above following rows, off the app z ladder. */
          z-index: 1;
          margin-top: var(--gap-disclosure);
        `:ne`
          position: static;
          width: 100%;
          margin-top: var(--gap-disclosure);
        `}
  /* An accordion body grows in flow up to a cap, then scrolls, never spilling past the row below. */
  ${({$variant:e,$panelHeight:t})=>e==="inline"&&t==="cap"?ne`
          max-height: 16rem;
          overflow-y: auto;
          ${Re}
        `:""}
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function ss({space:e,...t}){return n.jsx(Ur,{$space:e,...t})}const Ur=l.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${ve[e]} 0`:"0"};
`,Vr=160,Kr=24,Xr="...";function is({children:e,limit:t=Vr,subject:r,className:a}){const[o,s]=f.useState(!1),i=f.useId(),c=Yr(e,t);if(c===void 0)return n.jsx(n.Fragment,{children:e});const u=o?"Show less":"Show more";return n.jsxs(qr,{className:a,children:[n.jsx("span",{id:i,children:o?e:`${c}${Xr}`})," ",n.jsx(Zr,{type:"button","data-expandable-toggle":"","aria-controls":i,"aria-expanded":o,"aria-label":r===void 0?void 0:`${u} of ${r}`,onClick:()=>s(p=>!p),children:u})]})}function Yr(e,t){if(e.length<=t+Kr)return;const r=e.lastIndexOf(" ",t);return r<=0?e.slice(0,t):e.slice(0,r)}const qr=l.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,Zr=l($n)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function ls({grow:e=!1,children:t,...r}){return n.jsx(Jr,{$grow:e,...r,children:t})}const Jr=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0;

  ${({$grow:e})=>e?"flex: 1 1 auto;":`
    height: 100%;
    width: 100%;
  `}
`;function Qr({anchor:e,style:t,children:r,...a}){const[o,s]=f.useState(null),[i,c]=f.useState(null),u=f.useRef(e);u.current=e;const p=f.useCallback(()=>{if(!o)return;const h=u.current,v=typeof h=="function"?h():h;if(!v)return;const w=o.getBoundingClientRect(),x=Vn(v,{w:w.width,h:w.height},{w:window.innerWidth,h:window.innerHeight});c(d=>d&&d.left===x.left&&d.top===x.top?d:x)},[o]);return f.useLayoutEffect(()=>{p()}),f.useLayoutEffect(()=>{if(!o)return;const h=typeof ResizeObserver>"u"?null:new ResizeObserver(p);return h?.observe(o),window.addEventListener("resize",p),window.addEventListener("scroll",p,!0),()=>{h?.disconnect(),window.removeEventListener("resize",p),window.removeEventListener("scroll",p,!0)}},[o,p]),typeof document>"u"?null:Bn.createPortal(n.jsx(eo,{ref:s,style:{...t,left:i?.left??0,top:i?.top??0,visibility:i===null?"hidden":t?.visibility},...a,children:r}),document.body)}const eo=l.div`
  position: fixed;
  z-index: var(--z-dropdown);
`;function cs({grade:e,subject:t,size:r}){const a=Rn(e);return n.jsx(Me,{text:t===void 0?void 0:`${t}: ${a}`,focusable:!0,children:n.jsx(mn,{tone:Ln(e),size:r,children:a})})}const to=120;function ds({trigger:e,ariaLabel:t,children:r}){const[a,o]=f.useState(!1),s=f.useRef(null),i=f.useRef(null),c=f.useId(),u=f.useCallback(()=>{i.current!==null&&(clearTimeout(i.current),i.current=null)},[]),p=()=>{u(),o(!0)},h=()=>{u(),i.current=setTimeout(()=>o(!1),to)},v=f.useCallback(()=>{u(),o(!1)},[u]);f.useEffect(()=>u,[u]),f.useEffect(()=>{if(!a)return;const x=d=>{d.key==="Escape"&&v()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[a,v]);const w=()=>{const x=s.current?.getBoundingClientRect();return x?{x:x.left,y:x.bottom}:null};return n.jsxs(n.Fragment,{children:[n.jsx(no,{ref:s,type:"button","aria-label":t,"aria-describedby":a?c:void 0,onPointerEnter:p,onPointerLeave:h,onFocus:p,onBlur:v,children:e}),a&&n.jsx(Qr,{anchor:w,onPointerEnter:u,onPointerLeave:h,children:n.jsx(ro,{id:c,role:"tooltip",children:r})})]})}const no=l.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: help;

  ${pe}
`,ro=l.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function us({gap:e,inset:t=!1,wrap:r=!1,children:a,...o}){return n.jsx(oo,{$gap:e,$inset:t,$wrap:r,...o,children:a})}const oo=l.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?ve[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,ao=4,so=80,rt=60,io=30,Ge=24,lo=32,ot=56,at=Ge;function Ae(e,t,r){const{min:a,max:o,step:s}=t,i=e+r*s,c=Math.min(o,Math.max(a,i));if(!Number.isFinite(a))return c;const u=a+Math.round((c-a)/s)*s;return Math.min(o,Math.max(a,u))}function co(e){const{value:t,min:r,max:a,step:o,orientation:s="horizontal",onChange:i,format:c,ariaLabel:u,label:p=u,disabled:h=!1,width:v,height:w}=e,x=s==="vertical",d=Math.max(Ge,v??(x?at:ot)),R=Math.max(Ge,w??(x?ot:at)),C=e.mode==="rate",m=r??Number.NEGATIVE_INFINITY,_=a??Number.POSITIVE_INFINITY,b={min:m,max:_,step:o},M=f.useRef(null),$=f.useRef(t);$.current=t;const[O,A]=f.useState(0),y=c?c(t):String(Math.round(t)),N=_>m&&Number.isFinite(_-m)?(t-m)/(_-m):.5,j=T=>{h||T!==t&&i(T)};f.useEffect(()=>{if(!C||O===0||h)return;const T=(e.mode==="rate"?e.stepsPerSecond:void 0)??io,D=setInterval(()=>{const L=$.current+O*T*o*(rt/1e3);i(L)},rt);return()=>clearInterval(D)},[C,O,h,o,i,e]);const E=T=>{if(h)return;let D=null;switch(T.key){case"ArrowRight":case"ArrowUp":D=Ae(t,b,1);break;case"ArrowLeft":case"ArrowDown":D=Ae(t,b,-1);break;case"Home":if(!Number.isFinite(m))return;D=m;break;case"End":if(!Number.isFinite(_))return;D=_;break;default:return}T.preventDefault(),j(D)},P=T=>s==="vertical"?T.clientY:T.clientX,q=T=>{h||(M.current={start:P(T),startValue:t},T.currentTarget.setPointerCapture(T.pointerId))},K=T=>{if(h||!M.current)return;const D=s==="vertical"?M.current.start-P(T):P(T)-M.current.start;if(C){const W=D/so;A(Math.max(-1,Math.min(1,W)));return}const L=D/ao;j(Ae(M.current.startValue,b,L))},V=T=>{M.current&&(M.current=null,A(0),T.currentTarget.hasPointerCapture(T.pointerId)&&T.currentTarget.releasePointerCapture(T.pointerId))};return n.jsxs(uo,{children:[p!==!1&&n.jsx(fo,{"aria-hidden":"true",children:p}),n.jsxs(po,{role:"slider","aria-label":u,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":r,"aria-valuemax":a,"aria-valuetext":y,"aria-disabled":h||void 0,tabIndex:h?-1:0,$orientation:s,$disabled:h,$width:d,$height:R,$compact:(x?d:R)<lo,onKeyDown:E,onPointerDown:q,onPointerMove:K,onPointerUp:V,onPointerCancel:V,children:[n.jsx(ho,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-N)*100}%)`}:{transform:`translateX(${(.5-N)*100}%)`},"aria-hidden":"true"}),n.jsx(mo,{$orientation:s,"aria-hidden":"true"}),n.jsx(go,{"aria-hidden":"true",children:y})]})]})}const uo=l.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,fo=l.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,po=l.div`
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
`,ho=l.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,mo=l.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,go=l.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function fs({lock:e}){const t=Nn(e)?xo(e):e,r=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return n.jsx(Me,{text:r,focusable:!0,children:n.jsxs(bo,{role:"status","aria-label":r,children:[n.jsx(jn,{}),n.jsx(yo,{children:vo(t)})]})})}function xo(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...On(t,Cn),locks:t}}function vo(e){const t=[...new Set(e.locks.flatMap(r=>r.missing.map(a=>a.name)))];return t.length>0?t.join(", "):e.reason}const bo=l.span`
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
`,yo=l.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,st=1.4,it=1.7,wo="var(--icon-size-standalone)",$o=1.8,we="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",lt="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",ct="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",dt="M7 4.5V19.5M17 4.5V19.5",de=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,zt={prograde:{colour:"prograde",paths:[we,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[we,de(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",de(12,11)]},radialOut:{colour:"radial",paths:[lt,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[lt,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",de(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",de(12,12)]},relativePlus:{colour:"target",paths:[we,ct],dot:[12,12]},relativeMinus:{colour:"target",paths:[we,ct,de(12,12)]},parallelPlus:{colour:"target",paths:[dt],dot:[12,12]},parallelMinus:{colour:"target",paths:[dt,de(12,12)]}},ps=Object.keys(zt);function ut({shape:e,colour:t,strokeWidth:r,dotRadius:a}){return n.jsxs("g",{fill:"none",stroke:t,strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(o=>n.jsx("path",{d:o},o)),e.dot&&n.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:a,fill:t,stroke:"none"})]})}function J(e,t){const r=zt[e],a=`var(--color-marker-${r.colour})`,o=f.forwardRef(({size:s=wo,strokeWidth:i=$o,label:c,...u},p)=>{const h={ref:p,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24","data-marker":e},v=n.jsxs(n.Fragment,{children:[n.jsx(ut,{shape:r,colour:"currentColor",strokeWidth:i+st,dotRadius:it+st/2}),n.jsx(ut,{shape:r,colour:a,strokeWidth:i,dotRadius:it})]});return c?n.jsx("svg",{...h,role:"img","aria-label":c,...u,children:v}):n.jsx("svg",{...h,"aria-hidden":"true",...u,children:v})});return o.displayName=t,o}const Ht=J("prograde","ProgradeIcon"),jo=J("retrograde","RetrogradeIcon"),Wt=J("normal","NormalIcon"),_o=J("antiNormal","AntiNormalIcon"),ko=J("radialOut","RadialOutIcon"),Gt=J("radialIn","RadialInIcon"),So=J("maneuver","ManeuverIcon"),To=J("target","TargetIcon"),Ro=J("antiTarget","AntiTargetIcon"),Mo=J("relativePlus","RelativePlusIcon"),Eo=J("relativeMinus","RelativeMinusIcon"),Io=J("parallelPlus","ParallelPlusIcon"),Fo=J("parallelMinus","ParallelMinusIcon"),hs=Ht,ms=Gt,gs=Wt,xs={prograde:Ht,retrograde:jo,normal:Wt,antiNormal:_o,radialOut:ko,radialIn:Gt,maneuver:So,target:To,antiTarget:Ro,relativePlus:Mo,relativeMinus:Eo,parallelPlus:Io,parallelMinus:Fo};function Ao(e){if(e.frame==="scet")return{token:"SCET",spoken:"spacecraft event time",title:"Spacecraft event time: when this happens at the craft"};const{vantage:t}=e;return t===void 0?{token:"RECEIVED",spoken:"received",title:"When the telemetry showing this arrives"}:{token:`AT ${t}`,spoken:`received at ${t}`,title:`When the telemetry showing this arrives at ${t}`}}const No=l.span`
  font-size: max(0.72em, 10px);
  opacity: 0.72;
  white-space: nowrap;
  text-transform: none;
`;function vs({value:e,context:t}){const a=Ee(typeof e=="number"?void 0:e),{shown:o,held:s,caption:i}=a,c=typeof e=="number"?e:o?.magnitude,u=Ke({...a,shown:c}),p=t&&Ao(t),h=Mn(c??Number.NaN);return n.jsxs(n.Fragment,{children:[s?n.jsx(wt,{...u,caption:i,children:h}):n.jsx("span",{"data-figure":u["data-figure"],children:h}),p&&n.jsxs(n.Fragment,{children:[" ",n.jsx(Me,{text:p.title,focusable:!0,children:n.jsxs(No,{children:[n.jsx("span",{"aria-hidden":"true",children:p.token}),n.jsx(De,{children:p.spoken})]})})]})]})}function Ut(e){const{year:t,day:r,hour:a,minute:o}=Xe(),s=Number.isFinite(e)?Math.max(0,e):0,i=Math.floor(s/t)+1,c=s%t,u=Math.floor(c/r)+1,p=c%r;return{year:i,day:u,hour:Math.floor(p/a),minute:Math.floor(p%a/o),second:Math.floor(p%o)}}const Lo={year:1,day:1,hour:0,minute:0,second:0};function Co(e){const{year:t,day:r,hour:a,minute:o}=Xe();return(e.year-1)*t+(e.day-1)*r+e.hour*a+e.minute*o+e.second}function $e(e){return Mt(ie("s",e))}function Do({value:e,onChange:t,label:r,disabled:a,steps:o}){const s=f.useId(),i=`${s}-absent`,c=e!==null&&Number.isFinite(e)?e:null,u=c===null?null:Ut(c),p=Xe(),h=o??[p.minute,10*p.minute,p.hour,p.day],[v,w]=f.useState(null),x=(d,R,C,m)=>n.jsxs(ke,{gap:"caption",children:[n.jsx(Ve,{htmlFor:`${s}-${d}`,children:R}),n.jsx(jt,{id:`${s}-${d}`,type:"number",inputMode:"numeric","aria-label":`${r} ${R}`,"aria-describedby":u===null?i:void 0,min:C,step:1,style:{width:m},disabled:a,placeholder:u===null?ce:void 0,value:v?.key===d?v.text:u===null?"":String(u[d]),onBlur:()=>w(null),onChange:_=>{const b=_.target.value;if(w({key:d,text:b}),b.trim()==="")return;const M=Number(b);Number.isFinite(M)&&t(Co({...u??Lo,[d]:M}))}})]},d);return n.jsxs(ke,{gap:"related-dense",role:"group","aria-label":r,children:[n.jsxs(Pe,{gap:"related-dense",wrap:!0,justify:"start",children:[x("year","YEAR",1,"5rem"),x("day","DAY",1,"5rem"),x("hour","HR",0,"4rem"),x("minute","MIN",0,"4rem"),x("second","SEC",0,"4rem")]}),u===null&&n.jsx(We,{id:i,level:"muted",size:"sm",children:`${ce} no ${r.toLowerCase()} to show. Type one to state it.`}),h.length===0?null:n.jsxs(Pe,{gap:"related-packed",wrap:!0,justify:"start",children:[n.jsx(We,{level:"faint",size:"sm",children:"NUDGE"}),h.map(d=>n.jsx(Oe,{variant:"ghost",size:"sm",disabled:a||c===null,"aria-label":`${r} earlier by ${$e(d)}`,onClick:()=>c!==null&&t(c-d),children:`-${$e(d)}`},`minus-${d}`)),h.map(d=>n.jsx(Oe,{variant:"ghost",size:"sm",disabled:a||c===null,"aria-label":`${r} later by ${$e(d)}`,onClick:()=>c!==null&&t(c+d),children:`+${$e(d)}`},`plus-${d}`))]})]})}const ft=l(Ye)`
  --gap-related: var(--gap-related-comfortable);
  --bleed-inline: 0px;

  background: var(--color-surface-sunken);
  border: 1px solid ${({$tone:e})=>ze(e)};
  border-radius: var(--radius-regular);
  /* A banner is its own strip of the screen, so it takes the roomier inset. */
  padding: var(--inset-surface-standalone);
`;function bs({tone:e="warn",assertive:t=!1,role:r,children:a,...o}){const s=f.useRef(null),[i,c]=f.useState("");if(f.useEffect(()=>{const p=s.current;if(t||r!==void 0||p===null)return;const h=Po(p);c(v=>v===h?v:h)}),t)return Te(ft,{...o,children:a,role:r??"alert","aria-live":r===void 0?"assertive":void 0,$tone:e});const u=Te(ft,{...o,children:a,ref:s,role:r??"note",$tone:e});return r!==void 0?u:n.jsxs(n.Fragment,{children:[u,n.jsx(_t,{visuallyHidden:!0,children:i})]})}function Po(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let a=r.nextNode();a!==null;a=r.nextNode())t.push(a.textContent??"");return t.join(" ").replace(/\s+/g," ").trim()}function ys({id:e,label:t,value:r,options:a,onChange:o,hint:s}){const i=a.findIndex(c=>zn(c.choice,r));return n.jsxs($t,{children:[n.jsx(Ve,{htmlFor:e,children:t}),n.jsxs(_n,{id:e,value:i===-1?"":String(i),onChange:c=>{const u=a[Number(c.target.value)];u!==void 0&&o(u.choice)},children:[i===-1&&n.jsx("option",{value:"",disabled:!0}),a.map((c,u)=>n.jsx("option",{value:u,children:c.label},`${c.choice.kind}-${c.choice.bodyIndex??"none"}`))]}),s!==void 0&&n.jsx(kn,{children:s})]})}function Bo({as:e,interactive:t=!1,selected:r=!1,wrap:a=!1,nested:o=!1,type:s,children:i,...c}){return n.jsx(zo,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:r,$wrap:a,$nested:o,...c,children:i})}const Vt=l.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,Oo="min(12ch, 100%)",zo=l.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-row);
  font-size: var(--font-size-compact);
  padding: var(--inset-row);
  ${({$wrap:e})=>e?`
  flex-wrap: wrap;
  row-gap: var(--gap-row-wrap);

  & > ${Vt} {
    min-width: ${Oo};
  }
`:""}
  ${({$interactive:e})=>e?ne`
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

  ${Re}
`:""}
  ${({$interactive:e,$selected:t})=>e&&t?`
  ${Et("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}
`,ws=Object.assign(Bo,{Name:Vt}),Ho=65,Kt=38,Wo=72,Go=Wo-Kt,Xt=55,Ue=137.508,Uo=10,Vo=1.5,Ko=64,Xo=60,Yo=241,qo=Ue-Math.floor(Ue),xe=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function Yt(e,t){const r=Math.abs(e-t)%360;return r>180?360-r:r}const Zo=xe.map((e,t)=>{let r=1/0;for(let o=0;o<xe.length;o++)o!==t&&(r=Math.min(r,Yt(e.hue,xe[o].hue)));const a=r/2;return Math.max(0,Math.min(Uo,a-Vo))}),Jo=xe.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:Zo[t]}));function Qo(e,t=xe){return t.find(r=>r.aliases.some(a=>e.includes(a)))}function qt(e){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function pt(e,t){return(e%t+t)%t}function ea(e){const r=qt(`light:${e}`)/4294967295;return Kt+r*Go}function ta(e){const t=Qo(e);if(!t)return;const r=t.aliases.length===1?Xt:ea(e);return{hue:t.hue,lightness:r}}function na(e){return Jo.some(({centre:t,radius:r})=>Yt(e,t)<r)}function ra(e){const t=qt(e);let r=pt(t*Ue,360);const a=Xo+(t>>>8)%Yo+qo;let o=0;for(;na(r)&&o<Ko;)r=pt(r+a,360),o++;return r}function $s(e){const t=e.trim().toLowerCase(),r=ta(t),a=r?.hue??ra(t),o=r?.lightness??Xt;return`hsl(${Math.round(a)}deg ${Ho}% ${Math.round(o)}%)`}function js({selected:e,gap:t="caption",layout:r="stack",selectedLook:a="fill",children:o,...s}){return n.jsx(oa,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:r,$look:a,...s,children:o})}const oa=l.button`
  display: flex;
  ${({$layout:e})=>e==="split"?ne`
          justify-content: space-between;
          align-items: baseline;
          > :first-child {
            flex: 1;
            min-width: 0;
          }
        `:ne`
          flex-direction: column;
        `}
  gap: ${({$gap:e})=>ve[e]};
  width: 100%;
  text-align: left;
  padding: var(--inset-selectable-row);
  border-radius: ${Rt.regular};
  border: 1px solid
    ${({$selected:e,$look:t})=>e?t==="outline"?"var(--color-accent-fg)":"transparent":"var(--color-border-subtle)"};
  ${({$selected:e,$look:t})=>e?t==="outline"?"background: var(--color-surface-raised); color: inherit;":Et("go"):"background: transparent; color: inherit;"}
  cursor: pointer;
  font-family: inherit;

  ${({$selected:e})=>e?"":ne`
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
`,aa=f.forwardRef(function(t,r){return n.jsx(sa,{ref:r,type:"range",...t})}),sa=l.input`
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
`;function ia({label:e,children:t,detail:r,tone:a="neutral",...o}){return n.jsxs(la,{...o,children:[n.jsx(ca,{children:e}),n.jsx(da,{$tone:a,children:t}),r!=null&&n.jsx(ua,{children:r})]})}const la=l.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,ca=l.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,da=l.dd`
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
  color: ${({$tone:e})=>En[e]};
`,ua=l.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function _s({slot:e}){const t=Dn(e);return t.length===0?null:n.jsx(n.Fragment,{children:t.map(r=>n.jsx(ia,{label:r.label,detail:r.detail,tone:r.tone??"neutral",children:n.jsx(fa,{entry:r})},r.id))})}function fa({entry:e}){return e.value!==void 0?n.jsx(fe,{value:e.value}):e.text!==void 0?n.jsx(n.Fragment,{children:e.text}):n.jsx(In,{})}const ue=12,pa=12,ht=52,Z=10;function ks({labelSide:e="left",value:t,min:r,max:a,width:o=92,height:s=220,fillHeight:i=!1,tickStep:c,zones:u,markers:p,groundLine:h,seaLevel:v,format:w,ariaLabel:x}){const d=f.useRef(null),[R,C]=f.useState(s);f.useEffect(()=>{if(!i)return;const g=d.current;if(!g)return;const I=()=>{const ee=g.clientHeight;ee>0&&C(ee)};I();const H=new ResizeObserver(I);return H.observe(g),()=>H.disconnect()},[i]);const m=i?R:s,_=Ee(t),{shown:b,held:M,caption:$,band:O}=_,{anchor:A,tip:y}=St($),N=b?.magnitude??Number.NaN,j=r.magnitude,E=a.magnitude,P=E-j,q=Number.isFinite(N)?N:j,K=P>0?Math.max(j,Math.min(E,q)):j,V=b!=null,T=Fn(a,{format:w}),D=b==null?ce:He({magnitude:q,unit:b.unit},{format:T.rung}),L=g=>He(g),W=[...(p??[]).flatMap(g=>g.label===void 0?[]:[g.bounds===void 0?`${g.label} ${L(g.value)}`:`${g.label} ${L(g.value)}, between ${L(g.bounds.lo)} and ${L(g.bounds.hi)}`]),...(u??[]).flatMap(g=>g.label===void 0?[]:[`${g.label} zone ${L(g.from.min(g.to))} to ${L(g.from.max(g.to))}`]),...h===void 0?[]:[`ground ${L(h)}`],...v===void 0?[]:[`sea level ${L(v)}`]],ae=b==null||O===null?null:It(O,b.unit)??null,X=Math.max(0,m-ue-pa),z=g=>{if(!(P>0))return ue+X;const I=Math.max(0,Math.min(1,(g-j)/P));return ue+(1-I)*X},F=g=>z(g.magnitude),B=ue,re=ue+X,G=e==="right",k=G?o-ht-Z:ht,te=G?k+Z+6:k-6,se=G?"start":"end",le=(g,I)=>{const H=F(g),ee=g.greaterThan(a)?-1:g.lessThan(r)?1:0,me=k-4,be=k+Z+4,Ie=k+Z/2;return n.jsxs("g",{"data-level":I?"sea":"ground",children:[n.jsx("line",{x1:me,y1:H,x2:be,y2:H,stroke:I?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:I?1.5:2,strokeDasharray:I?"3 2":void 0}),ee!==0&&n.jsx("polygon",{"data-off-scale":"true",points:`${Ie-4},${H-ee*2} ${Ie+4},${H-ee*2} ${Ie},${H+ee*4}`,fill:I?"var(--color-info-mark)":"var(--color-text-primary)"})]})},he=[],S=c?.magnitude??0;if(S>0&&P>0){const g=Math.ceil(j/S)*S;for(let I=g;I<=E+1e-9;I+=S)he.push(I)}const U=z(K),Y=g=>X>0?(ue+X-g)/X:0,Q=ae!==null&&bt(Y(U),[Y(F(ae.lo)),Y(F(ae.hi))],yt())?ae:null;return n.jsxs(ha,{ref:d,...Ke(_),...A,...V?{role:"meter","aria-label":_e(x,$),...je($),"aria-valuenow":K,"aria-valuemin":j,"aria-valuemax":E,"aria-valuetext":W.length===0?D:`${D}; ${W.join("; ")}`}:{role:"img","aria-label":_e(`${x}: ${D}`,$),...je($)},style:i?{height:"100%"}:void 0,children:[n.jsxs("svg",{width:o,height:m,viewBox:`0 0 ${o} ${m}`,"aria-hidden":"true",style:i?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[n.jsx("rect",{x:k,y:B,width:Z,height:X,rx:2,fill:"var(--color-surface-raised)"}),u?.map(g=>{const I=F(g.from.max(g.to)),H=F(g.from.min(g.to)),ee=Math.max(0,H-I);return n.jsx("g",{children:n.jsx("rect",{x:k,y:I,width:Z,height:ee,fill:g.color??"var(--color-warn-mark)",opacity:.55})},`zone-${H}-${I}-${g.label??""}`)}),v!==void 0&&P>0&&le(v,!0),h!==void 0&&P>0&&le(h,!1),he.map(g=>{const I=z(g);return n.jsxs("g",{children:[n.jsx("line",{x1:G?k+Z+4:k-4,y1:I,x2:G?k+Z:k,y2:I,stroke:"var(--color-border-subtle)",strokeWidth:1}),n.jsx("text",{x:te,y:I,textAnchor:se,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:T.mark(g)})]},`tick-${g}`)}),p?.map(g=>{const{bounds:I}=g,H=F(g.value),ee=g.color??"var(--color-accent-fg)";return n.jsxs("g",{"data-marker":g.label,children:[n.jsx("line",{x1:k,y1:H,x2:k+Z,y2:H,stroke:ee,strokeWidth:2,strokeDasharray:"2 2"}),n.jsx("polygon",{points:G?`${k},${H} ${k-5},${H-3} ${k-5},${H+3}`:`${k+Z},${H} ${k+Z+5},${H-3} ${k+Z+5},${H+3}`,fill:"none",stroke:ee,strokeWidth:1.5}),I!==void 0&&["lo","hi"].map(me=>{const be=F(I[me]);return n.jsx(Be,{end:me,x1:k,y1:be,x2:k+Z,y2:be},me)})]},`marker-${H}-${g.label??""}`)}),Q!==null&&["lo","hi"].map(g=>{const I=F(Q[g]);return n.jsx(Be,{end:g,x1:k,y1:I,x2:k+Z,y2:I},g)}),V&&n.jsxs(n.Fragment,{children:[n.jsx("line",{x1:k-6,y1:U,x2:k+Z+6,y2:U,stroke:"var(--color-accent-fg)",strokeWidth:2}),n.jsxs("text",{x:G?te+2:te-2,y:Math.max(B+4,Math.min(re-4,U)),textAnchor:se,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[T.mark(q),M&&n.jsx(Tt,{size:5})]})]}),!V&&n.jsx(Sn,{x:G?te+8:te-8,y:B+X/2,size:11,children:ce}),T.symbol!==""&&n.jsx("text",{x:k+Z/2,y:B-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:T.symbol})]}),y]})}const ha=l.div`
  display: block;
  max-width: 100%;
`,mt={w:5,h:4},ma=8,ga=7;function Ss(e,t){return e===void 0||t===void 0?"normal":e<mt.w||t<mt.h?"tiny":e<ma||t<ga?"small":"normal"}const Zt=1.6,xa=1/Zt;function Ts(e,t){if(e===void 0||t===void 0||t===0)return{shape:"square",aspect:1};const r=e/t;return r>=Zt?{shape:"landscape",aspect:r}:r<=xa?{shape:"portrait",aspect:r}:{shape:"square",aspect:r}}const Rs=l.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,va=112;function ba(e,t){try{return ie(e,1).in(t).magnitude}catch{return Number.NaN}}function ya(e,t){let r=e;return t.map((a,o)=>{if(!Number.isFinite(a)||a===0)return 0;const s=o===t.length-1?r/a:Math.trunc(r/a);return r-=s*a,s})}function Ms({value:e,unit:t,onChange:r,label:a,rungs:o,range:s,rate:i,disabled:c}){const u=f.useId(),{shown:p,held:h,caption:v}=Ee(e),w=h?n.jsx(wt,{caption:v,children:a}):a,x=s,d=p?p.magnitude:Number.NaN,[R,C]=f.useState({}),m=$=>R[$]??null,_=($,O)=>C(A=>({...A,[$]:O})),b=i?n.jsxs(ke,{gap:"related-packed",children:[n.jsx(co,{mode:"rate",ariaLabel:`${a} rate`,value:d,step:i.step,stepsPerSecond:i.stepsPerSecond,disabled:c||!Number.isFinite(d),format:Ne(t)?$a:void 0,width:Ne(t)?va:void 0,onChange:$=>r(ie(t,$))}),n.jsx(We,{level:"faint",size:"sm",children:`${i.step} ${wa(t)} / notch`})]}):null;if(Ne(t))return n.jsxs(Ce,{children:[n.jsx(xt,{"aria-hidden":"true",children:w}),n.jsxs(ke,{gap:"related-dense",children:[n.jsx(Do,{label:h&&v!==null?`${a}, ${v}`:a,value:Number.isFinite(d)?d:null,disabled:c,steps:i?[]:void 0,onChange:$=>r(ie(t,$))}),b]})]});if(o&&o.length>0){const $=o.map(y=>ba(String(y),t)),O=ya(d,$),A=(y,N)=>{const j=Le(N);if(j===void 0){_(y,{text:N,against:O[y]});return}const E=O.slice();E[y]=j;const P=E.reduce((q,K,V)=>Number.isFinite($[V])?q+K*$[V]:q,0);_(y,{text:N,against:j}),r(ie(t,P))};return n.jsxs(Ce,{children:[n.jsx(xt,{id:`${u}-label`,children:w}),n.jsx(Sa,{role:"group","aria-labelledby":`${u}-label`,children:o.map((y,N)=>n.jsxs(Ta,{children:[n.jsx(Ra,{type:"number",disabled:c,"aria-label":`${a} ${String(y)}`,value:gt(m(N),O[N]),onChange:j=>A(N,j.target.value)}),n.jsx(vt,{"aria-hidden":"true",children:String(y)})]},String(y)))}),b]})}const M=$=>{const O=Le($);_(0,{text:$,against:O??d}),O!==void 0&&r(ie(t,O))};return n.jsxs(Ce,{children:[n.jsx(_a,{htmlFor:u,children:w}),n.jsxs(ka,{children:[n.jsx(Qt,{id:u,type:"number",disabled:c,min:x?.min,max:x?.max,step:x?.step,value:gt(m(0),d),onChange:$=>M($.target.value)}),n.jsx(vt,{"aria-hidden":"true",children:t})]}),x?n.jsx(aa,{disabled:c,"aria-label":`${a} slider`,min:x.min,max:x.max,step:x.step??(x.max-x.min)/100,value:Number.isFinite(d)?d:x.min,onChange:$=>r(ie(t,Le($.target.value)??x.min))}):null,b]})}function gt(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(ja(t)):""}function wa(e){return Ft(e)??e}function Ne(e){return Ft(e)==="s"}function $a(e){if(!Number.isFinite(e))return"";const{day:t,hour:r,minute:a,second:o}=Ut(e),s=i=>String(i).padStart(2,"0");return`D${t} ${s(r)}:${s(a)}:${s(o)}`}function Le(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function ja(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const Ce=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,Jt=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,_a=l.label`
  ${Jt}
`,xt=l.span`
  ${Jt}
`,ka=l.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,Qt=l.input`
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
`,vt=l.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Sa=l.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,Ta=l.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,Ra=l(Qt)`
  width: 4.5em;
`;function Es({row:e,style:t}){const a=Pn("meters").filter(o=>o.row===e);return a.length===0?null:n.jsx(gn,{style:t,role:"group","aria-label":"meters",children:a.map(o=>n.jsx(xn,{label:o.label,value:o.value,tone:o.tone,valueLabel:o.valueLabel},o.id))})}const en=f.createContext(null);function Is({widget:e,scope:t,children:r}){const a=f.useMemo(()=>({widget:e,scope:t}),[e,t]);return n.jsx(en.Provider,{value:a,children:r})}function Fs(e){const t=f.useContext(en);if(!(!t||t.widget!==e))return t.scope}export{Zn as $,gr as A,Ka as B,Za as C,rs as D,is as E,ls as F,Ht as G,cs as H,Kn as I,co as J,ko as K,fs as L,xs as M,Wt as N,ys as O,Fo as P,Eo as Q,Gt as R,Mo as S,jo as T,ws as U,Vt as V,js as W,es as X,aa as Y,ia as Z,_s as _,Ga as a,mt as a0,hs as a1,ks as a2,To as a3,Rs as a4,Ms as a5,Es as a6,Is as a7,Vn as a8,ir as a9,Ss as aa,Ts as ab,$s as ac,vr as ad,ts as ae,Fs as af,Co as ag,_o as b,Ro as c,Ua as d,Va as e,gs as f,Xa as g,Ya as h,qa as i,Qa as j,ns as k,os as l,as as m,ss as n,Ja as o,Qr as p,ms as q,ds as r,fr as s,us as t,ps as u,So as v,vs as w,Do as x,bs as y,Io as z};
