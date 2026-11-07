import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./ext-react-C0MU9AHG.js";import p,{css as te,keyframes as bn}from"./ext-styled-components-DAuodqsN.js";import{t as wn,e as yn,h as $n}from"./TinyEssentials-BQDTa9wr.js";import{E as Bt,bM as _e,n as jn,F as Ht,m as Ke,y as Ut,aU as _n,bH as Qe,bN as kn,$ as Te,ac as ue,bO as Mn,ad as Ie,a7 as et,b1 as Rn,a$ as Sn,b2 as En,b0 as Tn,bP as In,bQ as Cn,br as An,ae as ge,bR as qe,aL as tt,e as je,bK as Nn,bS as Gt,bL as nt,g as Ln,Z as Pn,aH as Fn,al as rt,bo as Ue,bA as Dn,bz as On,ax as Ze,ba as zn,V as Bn,l as Hn,b9 as Un,af as Wt,bw as Gn,bh as Wn,bF as ot,aD as Xn,bT as Vn,bG as at,bn as st,ag as Yn}from"./ModalSaveBar-BVebycaK.js";import{aH as Le,b7 as it,aZ as Kn,aW as Ne,aj as qn,c6 as Zn,cH as Jn,b5 as Je,l as Qn,cm as xe,c5 as Xt}from"./view-clock-formula-B6QDXNgQ.js";import"./ksp-enum-names-CLIdEP3-.js";import"./logger-2_QM1wvD.js";import"./screen-DvTSSJy0.js";import{Z as ke,N as fe,_ as Vt,$ as er,G as lt,V as be,I as tr,m as Yt,a0 as nr,i as Ce,n as Ge,j as rr,Y as Kt,c as or,g as ar,y as ct,E as ut}from"./contributionsRead-CFmNsxj7.js";import{a as sr,r as ir,b as lr}from"./Notice-BEjBys8n.js";import{r as cr}from"./ext-react-dom-DCF8ZnaJ.js";import{l as ur}from"./capability-lock-BkFBiD5v.js";import"./lagrange-CXiIhW1V.js";import"./use-transmissions-BQhOjJ_B.js";import{r as dr}from"./control-frame-to-read-frame-B7ECSX-Y.js";function Vs({items:e,onSelect:t,onDismiss:n,"aria-label":a,style:o,header:s,footer:i,emptyLabel:c="No actions",otherLabel:d="Other"}){const f=u.useRef(null),m=u.useId(),[g,$]=u.useState(0),v=wn(e,d),l=v.flatMap(([,x])=>x),w=l.length;u.useEffect(()=>{const x=f.current;if(!x)return;if(w===0){x.focus();return}x.querySelectorAll('[role="menuitem"]')[g]?.focus()},[g,w]),u.useEffect(()=>{const x=y=>{const k=f.current;k&&y.target instanceof Node&&!k.contains(y.target)&&n()};return document.addEventListener("pointerdown",x),()=>document.removeEventListener("pointerdown",x)},[n]);const M=u.useCallback(x=>{if(x.key==="Escape"){x.stopPropagation(),n();return}if(x.key==="Tab"){n();return}if(l.length!==0)switch(x.key){case"ArrowDown":x.preventDefault(),$(y=>Math.min(y+1,l.length-1));break;case"ArrowUp":x.preventDefault(),$(y=>Math.max(y-1,0));break;case"Home":x.preventDefault(),$(0);break;case"End":x.preventDefault(),$(l.length-1);break}},[l.length,n]);return r.jsxs(fr,{ref:f,role:w>0?"menu":void 0,"aria-label":a,onKeyDown:M,tabIndex:-1,style:o,children:[s,l.length===0?r.jsx(Bt,{layout:"fill",children:c}):v.map(([x,y],k)=>r.jsxs("div",{...v.length>1?{role:"group","aria-labelledby":`${m}-group-${k}`}:{role:"none"},children:[v.length>1?r.jsx(pr,{id:`${m}-group-${k}`,"aria-hidden":"true",children:x}):null,y.map(R=>{const j=l.indexOf(R);return r.jsx(hr,{type:"button",role:"menuitem","aria-label":R["aria-label"],"aria-disabled":R.disabled,$disabled:R.disabled,tabIndex:j===g?0:-1,onFocus:()=>$(j),onClick:()=>{R.disabled||t(R.key)},children:R.label},R.key)})]},x)),i]})}const fr=p.div`
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
`,pr=p.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,hr=p.button`
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

  ${_e}
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
`;function Ys({settings:e,values:t,onChange:n}){return e.length===0?null:r.jsx(r.Fragment,{children:e.flatMap(a=>a.fields.map(o=>{const i=t?.[a.namespace]?.[o.key]??o.default,c=o.label??o.key,d=`augment-setting-${a.namespace}-${o.key}`;return o.type===Le.Bool?r.jsx(jn,{children:r.jsx(yn,{checked:!!i,onChange:f=>n(a.namespace,o.key,f),label:c})},`${a.namespace}.${o.key}`):r.jsxs(Ht,{children:[r.jsx(Ke,{htmlFor:d,children:c}),r.jsx(Ut,{id:d,type:o.type===Le.Number?"number":"text",value:i===void 0?"":String(i),onChange:f=>{const m=f.target.value;if(o.type!==Le.Number){n(a.namespace,o.key,m);return}if(m===""){n(a.namespace,o.key,void 0);return}const g=Number(m);Number.isFinite(g)&&n(a.namespace,o.key,g)}})]},`${a.namespace}.${o.key}`)}))})}function Ks({fallback:e,gap:t="related-dense",children:n,...a}){return r.jsxs(r.Fragment,{children:[r.jsx(qt,{$gap:t,...a,children:n}),r.jsx(mr,{children:e})]})}const qt=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>ke[e]};
`,mr=p.div`
  ${qt}:not(:empty) + & {
    display: none;
  }
`,dt=12,Re=8;function gr(e,t,n){return{left:ft(e.x,t.w,n.w),top:ft(e.y,t.h,n.h)}}function ft(e,t,n){const a=e+dt;if(a+t<=n-Re)return a;const o=e-dt-t;return o>=Re?o:Math.max(Re,n-Re-t)}const vr="–";function qs({min:e,max:t,wrapsAt:n,className:a,...o}){const s=it(e),i=it(t);return e==null||t==null||s===null||i===null?r.jsx(Ae,{className:a,children:fe}):n!==void 0&&Math.abs(i-s)>=n/2?r.jsx(Ae,{className:a,children:"(precesses)"}):r.jsx(_n,{of:e.unit,separate:!0,...o,children:r.jsx(xr,{min:e,max:t,className:a})})}function xr({min:e,max:t,className:n}){return Qe(e),Qe(t),kn(e)?r.jsx(Ae,{className:n,children:r.jsxs(wr,{children:[r.jsx("span",{"aria-hidden":"true",children:"~"}),r.jsx(Te,{children:"approximately "}),r.jsx(ue,{value:e})]})}):r.jsxs(Ae,{className:n,children:[r.jsx(ue,{value:e}),r.jsx(br,{"aria-hidden":"true",children:vr}),r.jsx(Te,{children:" to "}),r.jsx(ue,{value:t})]})}const Ae=p.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,br=p.span`
  color: var(--color-text-faint);
`,wr=p.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`,yr={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function Zs({surface:e,pad:t,bordered:n=!1,radius:a,children:o,...s}){return r.jsx($r,{$surface:e,$pad:t,$bordered:n,$radius:a,...s,children:o})}const $r=p.div`
  ${({$surface:e})=>e&&`background: ${yr[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${Vt[e]};`}
  ${({$pad:e})=>e&&`padding: var(${er[e]});`}
`,Js=u.forwardRef(function({equalWidth:t=!0,gap:n,children:a,...o},s){return r.jsx(jr,{ref:s,$equalWidth:t,$gap:n,...o,children:a})}),jr=p.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?ke[e]:"var(--gap-related)"};
`,_r="3px",kr=p(lr)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${lt(e)};`:""}
  ${({$identityColor:e})=>e?`
    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: var(--size-mark);
      height: ${_r};
      background: ${e};
      border-radius: var(--radius-regular) var(--radius-regular) 0 0;
    }
  `:""}
  ${({$dimmed:e,$tone:t})=>e?`
    --color-text-primary: var(--color-text-muted);
    color: var(--color-text-muted);
    ${t?`border-left-color: color-mix(in srgb, ${lt(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function Mr({tone:e,dimmed:t,identityColor:n,standalone:a,...o}){return ir(kr,{...o,$tone:e,$dimmed:t,$identityColor:n,$standalone:a})}const Qs=Object.assign(Mr,sr);function Rr(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const ei=u.forwardRef(function({label:t,icon:n,type:a,...o},s){return r.jsx("button",{ref:s,type:a??"button","aria-label":t,...o,children:r.jsx(Zt,{label:t,icon:n})})});function Zt({label:e,icon:t}){const n=u.useRef(null),a=u.useRef(null),[o,s]=u.useState(!0);return u.useLayoutEffect(()=>{const i=n.current,c=a.current;if(!i||!c)return;const d=()=>{s(c.scrollWidth<=i.clientWidth)};if(d(),typeof ResizeObserver>"u")return;const f=new ResizeObserver(d);return f.observe(i),f.observe(c),()=>f.disconnect()},[]),r.jsxs(Sr,{ref:n,children:[r.jsx(Er,{ref:a,"aria-hidden":"true",children:e}),o?r.jsx(Tr,{"aria-hidden":"true",children:e}):r.jsx(Ir,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const Sr=p.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,Er=p.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,Tr=p.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,Ir=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Cr=p.span`
  display: inline-grid;
  justify-items: center;
`,Ar=p.span`
  grid-area: 1 / 1;
`,Nr=p.span`
  grid-area: 1 / 1;
  visibility: hidden;

  &::before {
    content: attr(data-word);
  }
`;function Lr({shown:e,reserve:t}){return r.jsxs(Cr,{children:[[...new Set(t)].map(n=>r.jsx(Nr,{"data-word":n,"aria-hidden":"true"},n)),r.jsx(Ar,{children:e})]})}const Pe=e=>be(e),ce={contact:{"in-contact":()=>"In contact","loss-in":e=>`LOS in ${Pe(e)}`,"back-in":e=>`No contact, back in ${Pe(e)}`,none:e=>e==="unpowered"?"No contact, no electric charge aboard":"No contact"},delay:{held:e=>`${Pe(e)} signal delay`,absent:()=>"no signal path"},arrival:{expected:"Expected to arrive","likely-lost":"Likely lost"},sends:{now:()=>"Sends now",held:(e,t)=>t===void 0?`Held until ${be(e)}`:`Held until ${be(e)}, arrives ${be(t)}`}};function Pr(e){const{contact:t}=e,n=t.kind==="loss-in"||t.kind==="back-in"?ce.contact[t.kind](t.seconds):t.kind==="none"?ce.contact.none(t.reason):ce.contact[t.kind](),a=e.signalDelay===void 0?ce.delay.absent():ce.delay.held(e.signalDelay),o=e.sends==="now"&&e.arrival==="expected"?ce.sends.now():e.sends==="held"&&e.heldUntilUt!==void 0?ce.sends.held(e.heldUntilUt,e.arrivesUt):ce.arrival[e.arrival];return`${n} · ${a}
${o}`}function Fr(e){if(e!==void 0)return e.arrival==="likely-lost"?"at-risk":e.sends==="held"?"held":void 0}function Dr(e,t){const n=e===void 0||e.phase==="in-flight"||e.phase==="idle"?null:e.requestId,a=o=>(o.dispatchedAt??0)+(o.oneWaySeconds??0);return t.filter(o=>o.id!==n&&(o.predictedPhase==="awaiting-reply"||o.predictedPhase==="due")).sort((o,s)=>a(o)-a(s))}function Jt(e,t,n,a){let o=e,s=!1;for(const i of Dr(t,n)){if(i.args===void 0){typeof o=="boolean"&&(o=!o,s=!0);continue}const c=We(i.args),d=c!==void 0?c:a?.(o,i.args);d!==void 0&&(s=!0,o=d)}return s?o:void 0}function Or(e,t,n,a=void 0,o){return e?"sent":n.some(s=>s.held===!0)?"held":Jt(a,t,n,o)===void 0?null:"modelled"}function zr(e,t,n,a=[],o){return t!=="modelled"?e:Jt(e,n,a,o)??e}function Br(e,t){return e===void 0||e.phase==="idle"?!1:e.phase==="in-flight"?!0:e.phase!=="confirmed"&&e.phase!=="found"?!1:t.some(n=>n.id===e.requestId)}function We(e){if(e===null||typeof e!="object")return;const t="state"in e?e.state:"enabled"in e?e.enabled:void 0;return typeof t=="boolean"?t:void 0}function Qt(e,t){switch(t){case"held":return`${e} held until contact returns`;case"sent":return`${e} sent, not yet received`;case"modelled":return`${e} shown as predicted: the command should have reached the craft, and its reply is on its way back`;default:return null}}function Hr(e,t,n){if(t!=="held"&&t!=="modelled")return n;const a=Qt(e,t)??"";return{kind:t,caption:n===null?a:`${n.caption}. ${a}`}}function pt(e){try{return JSON.stringify(e)??""}catch{return null}}const ht="Not connected to the mod. Nothing can be sent",Ur=4e3,mt=8e3,Gr=500,we="SENT";function en(e,t){return e.gateFor?e.gateFor(t):e.gate}function Wr({handle:e,args:t,commandLabel:n,onConfirmed:a,toggle:o}){const[s,i]=u.useState("idle"),[c,d]=u.useState(null),[f,m]=u.useState(null),[g,$]=u.useState(!1),[v,l]=u.useState(!1),[w,M]=u.useState(0),[x,y]=u.useState(!1),k=u.useRef(null),R=e.streamDown===!0,j=en(e,t),C=o?.unavailable??null,X=j?.blocked===!0||C!==null,P=u.useRef(!0),G=u.useRef(0);u.useEffect(()=>(P.current=!0,()=>{P.current=!1}),[]);const W=e.founds,z=u.useRef(null),K=u.useRef(W?.length??0);u.useEffect(()=>{const O=W?.length??0,Z=O>K.current;K.current=O;const Q=W?.[O-1],Y=z.current;if(!Z||!Q||Y===null)return;const ae=Q.label!==void 0&&Q.label!==""&&Y.label!==void 0&&Q.label!==Y.label,V=Q.args!==void 0&&Y.args!==void 0&&JSON.stringify(Q.args)!==JSON.stringify(Y.args);ae||V||(z.current=null,m(Q),d(null),i("found"))},[W]),u.useEffect(()=>{if(s!=="armed")return;const O=setTimeout(()=>i("idle"),Ur);return()=>clearTimeout(O)},[s]),u.useEffect(()=>{if(s!=="refused"&&s!=="lost"&&s!=="found")return;const O=setTimeout(()=>{i("idle"),d(null),z.current=null,m(null)},mt);return()=>clearTimeout(O)},[s]),u.useEffect(()=>{if(!g)return;const O=setTimeout(()=>$(!1),mt);return()=>clearTimeout(O)},[g]),u.useEffect(()=>{!X&&g&&$(!1)},[X,g]),u.useEffect(()=>{if(w===0)return;const O=setTimeout(()=>l(!1),Gr);return()=>clearTimeout(O)},[w]);const D=u.useCallback((O=t,Z=n)=>{const Q=G.current+1;G.current=Q,z.current=null,k.current=null,i("idle"),d(null),l(!0),M(ae=>ae+1),y(!0);const Y=(ae,V)=>{!P.current||G.current!==Q||(d(V),i(ae),y(!1),ae!=="idle"&&l(!1))};e.send(O,Z?{label:Z}:void 0).then(ae=>{Y("idle",null),a?.(ae)},ae=>{const V=Kn(ae);if(V.kind==="lost"){z.current={args:O,label:Z},Y("lost",null);return}if(V.kind!=="refused"){Y("idle",null);return}Y("refused",{errorCode:V.errorCode,reason:V.reason,command:V.command,args:V.args,label:V.label??n,breach:V.breach,detail:V.detail})})},[e,t,n,a]),{hasUnconfirmed:h,hasFailure:T}=Rr(e),S=e.status,I=x&&S?.phase==="in-flight"&&S.accepted!==!0&&(k.current===null||k.current===S.requestId),_=v||I;u.useEffect(()=>{x&&k.current===null&&S?.phase==="in-flight"&&(k.current=S.requestId)},[x,S]);const E=o?e.inFlight.filter(o.rows??(()=>!0)):[],B=o?Or(_,S,E,o.state,o.modelled):null,N=o?zr(o.state,B,S,E,o.modelled):void 0,H=u.useRef(void 0),U=u.useRef(void 0),re=(Br(S,e.inFlight)||S?.phase==="confirmed"&&H.current!==void 0&&o?.state===U.current)&&H.current!==void 0?H.current:N,ie=u.useRef(re);ie.current=re;const oe=u.useCallback(O=>{if(!R){if(X){$(!0);return}if(o){const Z=o.args(ie.current);if(Z===void 0)return;H.current=We(Z),U.current=o.state,H.current!==void 0&&(ie.current=H.current),D(Z);return}if(s==="refused"||s==="lost"||s==="found"){d(null),m(null),z.current=null,i("idle");return}if(O){if(_)return;if(s!=="armed"){A.current=pt(t),i("armed");return}}D()}},[s,_,R,X,D,t,o]),A=u.useRef(null);u.useEffect(()=>{s==="armed"&&pt(t)!==A.current&&i("idle")},[s,t]);const q=s==="refused"||s==="lost"||s==="found"?s:_?"sent":X?"blocked":s;return{phase:q,isSent:q==="sent",isArmed:q==="armed",isRefused:q==="refused",isLost:q==="lost",isFound:q==="found",isBlocked:q==="blocked",isOffline:R&&q!=="sent",isShowingReason:q==="blocked"&&g,refusalText:c?En(c):C!==null?C:q==="blocked"&&j?Tn({...j,label:j.label??n,args:j.args??t}):null,foundText:f?Sn(f):null,lossText:q==="lost"?Rn({args:t,label:n}):null,sendAs:(O,Z)=>{R||(H.current=We(O),D(O,Z))},toggleView:o?{shown:N,on:typeof N=="number"?N>0:N===!0,word:B==="sent"?o.sentWord??we:o.word(N),reserve:[...o.words,o.sentWord??we],confirmation:B,unavailable:C,marking:Hr(o.name,B,o.marking??null),sentence:Qt(o.name,B)}:null,hasUnconfirmed:h,hasFailure:T,press:oe}}function ti({handle:e,args:t,commandLabel:n,label:a,confirmLabel:o,refusedLabel:s="Refused",lostLabel:i="No reply",foundLabel:c="Found",confirmAriaLabel:d,sentAriaLabel:f,blockedAriaLabel:m,pressed:g,variant:$="ghost",tone:v="neutral",icon:l,confirmIcon:w,onPressReady:M,size:x="md",confirmTone:y="go",onConfirmed:k,toggle:R,controller:j,disabled:C,title:X,"aria-label":P,...G}){const W=Wr({handle:e,args:t,commandLabel:n,onConfirmed:k,toggle:R}),{phase:z,isSent:K,isArmed:D,isRefused:h,isLost:T,isFound:S,isBlocked:I,isOffline:_,isShowingReason:E,refusalText:B,foundText:N,lossText:H,toggleView:U,hasUnconfirmed:J,hasFailure:re,press:ie}=j??W,oe=o!==void 0,A=n?`${n} sent, not yet received`:"Sent, not yet received";u.useEffect(()=>{if(!(!M||C))return M(()=>ie(oe)),()=>M(null)},[M,C,ie,oe]);const O=K?we:h?s:T?i:S?c:E?B:D?o:a,Z=l!==void 0&&typeof O=="string",Q=Z?r.jsx(Zt,{label:O,icon:D?w??l:l}):O,Y=l===void 0&&typeof a=="string"&&(o===void 0||typeof o=="string")&&!h&&!T&&!S&&!E,V=Mn()&&e.railed===!0?null:h?B:T?H:S?N:null,pe=g===!0||D||h,Me=Xr({restTone:$==="primary"?v:"neutral",filled:pe,isRefused:h,isFound:S,isArmed:D,confirmTone:y,tone:v});if(U){const{marking:ne,sentence:le}=U,de=U.confirmation==="held"||U.confirmation==="modelled",ve=_?ht:(de?null:le)??X;return r.jsxs(r.Fragment,{children:[r.jsx(Ie,{text:ve,children:r.jsx($n,{type:"button",size:x,pressed:U.on,disabled:C||U.unavailable!==null,disabledReason:U.unavailable??void 0,marked:ne,"aria-label":P,"data-command-phase":z,"data-stream":_?"down":void 0,"data-unconfirmed":J?"true":void 0,"data-failed":re?"true":void 0,onClick:()=>ie(!1),...G,children:l!==void 0&&U.confirmation!=="sent"?l:r.jsx(Lr,{shown:U.word,reserve:U.reserve})})}),r.jsx(et,{visuallyHidden:!0,children:de?"":le??""})]})}const b=e.sendStatus,F=b===void 0?X:[X,Pr(b)].filter(Boolean).join(`
`),L=_?[X,ht].filter(Boolean).join(`
`):F;return r.jsxs(r.Fragment,{children:[r.jsx(Ie,{text:N??B??(K?A:L),children:r.jsx(Kr,{type:"button",$tone:Me,$variant:$,$fit:Z,$size:x,$pressed:pe,$armed:D,$blocked:I,"aria-pressed":g,"aria-disabled":I||_||void 0,disabled:C,"data-unconfirmed":J?"true":void 0,"data-failed":re?"true":void 0,"data-command-phase":z,"data-stream":_?"down":void 0,"data-predicted":I?void 0:Fr(b),"data-gate":I?"blocked":en(e,t)?.undetermined?"undetermined":void 0,"aria-label":(h?B??void 0:T?H??void 0:S?N??P:I?m??B??P:K?f??A:D?d:P)??(Z?O:void 0),onClick:()=>ie(o!==void 0),"data-rest-label":Y?a:void 0,"data-armed-label":Y?typeof o=="string"&&o.length>we.length?o:we:void 0,...G,children:Y?r.jsx(Yr,{children:Q}):Q})}),r.jsx(et,{visuallyHidden:!0,children:V})]})}function Xr(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const Vr=bn`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,Yr=p.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,Kr=p(In)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&te`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Vr} 1s var(--ease-emphasis) infinite;
      }
    `}

  &:disabled {
    opacity: 0.5;
  }

  /* Dimmed toward the muted text token rather than faded, so the refusal reason stays readable; the warn border says the game refused. */
  ${({$blocked:e})=>e&&te`
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
`;function ni({oneWaySeconds:e,delayReading:t,className:n}){const a=Ne("s",e);return r.jsxs(qr,{className:n,role:"group","aria-label":"Signal delay",children:["one-way ~",r.jsx(ue,{value:Cn(a,t),...a.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const qr=p.div`
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
`;function ri(e){const t=An(),n=u.useId(),a=e!==null;u.useEffect(()=>{if(!(!t||!e))return t.register({id:n,...e})},[t,n,a]),u.useEffect(()=>{!t||!e||t.update(n,e)},[t,n,e])}const tn=u.forwardRef(function(t,n){return r.jsx(Zr,{ref:n,type:"range",...t})}),Zr=p.input`
  width: 100%;
  min-width: 0;
  margin: 0;
  background: none;
  accent-color: var(--color-accent-fg);
  cursor: pointer;

  ${ge}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function Jr(e,t,n){return Math.abs(e-t)<n/10}function nn({commanded:e,expected:t,lastSeen:n,step:a}){const o=(c,d)=>c!=null&&d!=null&&Jr(c,d,a),s=n??null;return{expected:t!=null&&!o(t,e)&&!o(t,s)?t:null,lastSeen:s,onCommanded:o(s,e)}}function oi({"aria-label":e,...t}){const{commanded:n,expectedCaption:a=qe,lastSeenCaption:o="last reported",onChange:s,min:i,max:c,step:d,figure:f,disabled:m}=t,[g,$]=u.useState(null);u.useEffect(()=>{if(g===null)return;const M=()=>$(null);return window.addEventListener("pointerup",M),window.addEventListener("pointercancel",M),()=>{window.removeEventListener("pointerup",M),window.removeEventListener("pointercancel",M)}},[g]);const v=g??n,l=nn({...t,commanded:v}),w=M=>`calc(8px + ${(M-i)/(c-i||1)} * (100% - 16px))`;return r.jsxs("div",{style:Qr,children:[r.jsxs("div",{style:eo,children:[r.jsx(tn,{min:i,max:c,step:d,value:v??i,onPointerDown:()=>$(v??i),onChange:M=>{const x=Number(M.target.value);g!==null&&$(x),s(x)},disabled:m,"aria-label":e,style:to}),l.expected!==null&&r.jsx(gt,{kind:"modelled",caption:a,left:w(l.expected)}),l.lastSeen!==null&&r.jsx(gt,{kind:"held",caption:o,left:w(l.lastSeen)})]}),r.jsx("span",{style:ro,children:v===null?fe:f(v)})]})}function rn({kind:e}){return r.jsx("svg",{"aria-hidden":"true",width:vt,height:vt,viewBox:"0 0 16 16",style:{display:"block",overflow:"visible"},children:e==="held"?r.jsx("rect",{x:"2",y:"2",width:"12",height:"12",style:xt.held}):r.jsx("polygon",{points:"8,1.5 14.8,14 1.2,14",style:xt.modelled})})}function gt({kind:e,caption:t,left:n}){return r.jsxs("span",{"data-role":e==="modelled"?"expected":"last-seen","data-reckoning-mark":e,style:{...no,left:n},children:[r.jsx(rn,{kind:e}),r.jsx(Te,{children:t})]})}function Fe({kind:e,caption:t,main:n=!1,children:a}){return r.jsxs("span",{"data-role":e==="modelled"?"expected":"last-seen","data-reckoning-mark":e,"data-held":e==="held"?"":void 0,style:n?ao:so,children:[r.jsx(rn,{kind:e}),a,r.jsxs(Te,{"data-unit-currency":"",children:[", ",t]})]})}function ai({lowerLabel:e,raiseLabel:t,unknown:n,...a}){const{commanded:o,expectedCaption:s=qe,lastSeenCaption:i="last reported",onChange:c,min:d,max:f,step:m,figure:g,disabled:$,disabledReason:v}=a,l=nn(a),w=x=>{o!==null&&c(Math.min(f,Math.max(d,o+x*m)))},M=$||o===null;return r.jsxs(r.Fragment,{children:[r.jsx(je,{variant:"ghost",size:"sm",type:"button","aria-label":e,disabled:M,disabledReason:v,onClick:()=>w(-1),children:"−"}),r.jsxs("span",{style:oo,children:[o===null?r.jsx("span",{children:n??fe}):l.onCommanded?r.jsx(Fe,{kind:"held",caption:i,main:!0,children:g(o)}):r.jsx("span",{children:g(o)}),l.expected!==null&&r.jsx(Fe,{kind:"modelled",caption:s,children:g(l.expected)}),l.lastSeen!==null&&!l.onCommanded&&r.jsx(Fe,{kind:"held",caption:i,children:g(l.lastSeen)})]}),r.jsx(je,{variant:"ghost",size:"sm",type:"button","aria-label":t,disabled:M,disabledReason:v,onClick:()=>w(1),children:"+"})]})}const Qr={display:"flex",alignItems:"center",gap:"var(--gap-related)"},eo={flex:1,position:"relative",display:"flex",alignItems:"center"},to={width:"100%"},no={position:"absolute",top:"50%",transform:"translate(-50%, -50%)",display:"flex",pointerEvents:"none"},vt=16,xt={held:{fill:tt.held.color,stroke:"var(--color-surface-app)",strokeWidth:3,paintOrder:"stroke"},modelled:{fill:tt.modelled.color,stroke:"var(--color-surface-app)",strokeWidth:3,strokeLinejoin:"round",paintOrder:"stroke"}},ro={fontSize:"var(--font-size-compact)",color:"var(--color-text-primary)",fontVariantNumeric:"tabular-nums",minWidth:"36px",textAlign:"right"},oo={display:"inline-flex",alignItems:"baseline",justifyContent:"center",gap:"var(--gap-related)",fontVariantNumeric:"tabular-nums"},ao={display:"inline-flex",alignItems:"center",gap:"var(--gap-figure-parts)"},so={display:"inline-flex",alignItems:"center",gap:"var(--gap-figure-parts)",fontSize:"var(--font-size-caption)",color:"var(--color-text-faint)"};function si({at:e,atAspect:t,narrow:n,wide:a,children:o,...s}){return r.jsx(lo,{$query:io(e,t),$narrow:n,$wide:a,...s,children:o})}function io(e,t){const n=[e===void 0?void 0:`(min-width: ${e}px)`,t===void 0?void 0:`(aspect-ratio >= ${t})`].filter(a=>a!==void 0);return n.length===0?void 0:n.join(" and ")}const lo=p.div`
  ${({$narrow:e})=>e}
  ${({$query:e,$wide:t})=>e===void 0?"":te`
          @container ${e} {
            ${t}
          }
        `}
`;function ii({slot:e,component:t,filter:n}){const a=tr(e),o=n?a.filter(n):a;return o.length===0?null:r.jsx(t,{entries:o})}function li({label:e,lead:t,children:n,tone:a="neutral",aligned:o=!1,...s}){const i=u.useContext(on);return r.jsxs(uo,{$aligned:o,$grouped:o&&i,...s,children:[r.jsx(fo,{children:e}),r.jsxs(po,{$tone:a,children:[t,n]})]})}const on=u.createContext(!1);function ci({children:e,...t}){return r.jsx(co,{...t,children:r.jsx(on.Provider,{value:!0,children:e})})}const Xe="1.5ch",co=p.div`
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  column-gap: ${Xe};
  container-type: inline-size;
  min-width: 0;

  @container (max-width: 15rem) {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 0.5em;
  }
`,uo=p.div`
  align-items: baseline;
  gap: var(--gap-data-line);
  min-width: 0;
  ${({$aligned:e,$grouped:t})=>e?t?te`
        display: grid;
        column-gap: ${Xe};
        grid-column: 1 / -1;
        grid-template-columns: subgrid;
      `:te`
      display: flex;
      flex-wrap: wrap;
      column-gap: ${Xe};
      & > :first-child {
        flex: 0 0 auto;
        min-width: 7ch;
      }
      & > :last-child {
        flex: 1 1 10ch;
      }
    `:te`
        display: flex;
        flex-wrap: wrap;
      `}
`,fo=p.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,po=p.span`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--gap-data-line);
  font-size: var(--font-size-value);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  color: ${({$tone:e})=>Yt[e]};
`;function ho(e,t){return e.value!==void 0?r.jsx(ue,{value:e.value(t)??null}):e.render(t)}function ui({columns:e,rows:t,sections:n,rowKey:a,caption:o,empty:s,rowDetail:i,className:c}){const d=n??(t?[{id:"",title:null,rows:[...t]}]:[]),f=d.reduce((l,w)=>l+w.rows.length,0),[m,g]=u.useState(null),$=Nn(m),v=Gt(m);return r.jsxs(mo,{className:c,children:[r.jsx(go,{ref:g,tabIndex:v,children:r.jsxs(vo,{children:[r.jsx(xo,{children:o}),r.jsx("thead",{children:r.jsx("tr",{children:e.map(l=>r.jsx(bo,{scope:"col",$align:l.align??"start",style:{width:l.width,minWidth:l.minWidth},children:l.header},l.key))})}),f===0&&s!==void 0&&r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx(_o,{colSpan:e.length,children:s})})}),d.map(l=>r.jsxs("tbody",{children:[l.title!==null&&l.title!==void 0&&r.jsx("tr",{children:r.jsx(wo,{scope:"rowgroup",colSpan:e.length,children:l.title})}),l.rows.map(w=>{const M=a(w),x=i?.(w),y=x!=null&&x!==!1&&x!=="";return r.jsxs(u.Fragment,{children:[r.jsx(yo,{$hasDetail:y,children:e.map(k=>r.jsx($o,{as:k.rowHeader?"th":void 0,scope:k.rowHeader?"row":void 0,$align:k.align??"start",children:ho(k,w)},k.key))}),y?r.jsx("tr",{children:r.jsx(jo,{colSpan:e.length,children:x})}):null]},M)})]},l.id))]})}),r.jsx(nt,{$position:"left",$visible:$.left}),r.jsx(nt,{$position:"right",$visible:$.right})]})}const mo=p.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,go=p.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${_e}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,vo=p.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,xo=p.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,bo=p.th`
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
`,wo=p.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,yo=p.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,$o=p.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,jo=p.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,_o=p.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`;function ko(e){const t=e.reason;switch(t){case"beyond-horizon":return e.resolvesByWaiting?"NOT YET COMPUTED":"CANNOT MODEL";case"under-physics":case"model-inapplicable":case"contested":case"insufficient-history":return"CANNOT MODEL";case"frame-unavailable":return"FRAME UNAVAILABLE";case"input-absent":return null;default:return t}}function di({declined:e,layout:t="inline"}){return r.jsx(Ie,{text:e.note,focusable:!0,children:r.jsx(Bt,{role:"status",layout:t,children:ko(e)??"NO DATA"})})}function fi({label:e,children:t,"aria-label":n,className:a,variant:o="popover",panelHeight:s="cap",chevron:i=!0,asButton:c=!1,buttonSize:d="md",defaultOpen:f=!1}){const[m,g]=u.useState(f),$=u.useId(),v=u.useRef(null),[l,w]=u.useState(null),M=Gt(l),x=o==="inline"&&i,y=typeof e=="function"?e(m):e,k={ref:v,type:"button","aria-expanded":m,"aria-controls":$,"aria-label":n,onClick:()=>g(j=>!j)},R=r.jsxs(r.Fragment,{children:[y,x&&r.jsx(Eo,{$open:m,children:r.jsx(Ln,{size:"var(--icon-size-control)"})})]});return r.jsxs(Mo,{className:a,$variant:o,onKeyDown:j=>{j.key==="Escape"&&m&&(g(!1),v.current?.focus())},children:[c?r.jsx(So,{...k,variant:"ghost",size:d,$inline:o==="inline",children:R}):r.jsx(Ro,{...k,$variant:o,$align:o==="inline"&&!i?"end":"between",children:R}),m&&r.jsx(To,{ref:w,id:$,role:"group",tabIndex:M,$variant:o,$panelHeight:s,children:t})]})}const Mo=p.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,Ro=p.button`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-glyph);
  padding: var(--inset-glyph-button);
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  ${({$variant:e,$align:t})=>e==="inline"&&te`
      justify-content: ${t==="end"?"flex-end":"space-between"};
      width: 100%;
      text-align: start;
      border-radius: var(--radius-regular);
      &:hover {
        background: var(--color-surface-sunken);
      }
    `}
  ${ge}
`,So=p(je)`
  ${({$inline:e})=>e&&te`
      align-self: flex-end;
    `}
`,Eo=p.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,To=p.div`
  ${({$variant:e})=>e==="popover"?te`
          position: absolute;
          top: 100%;
          right: 0;
          /* Local sibling ordering: lifts the popped panel above following rows, off the app z ladder. */
          z-index: 1;
          margin-top: var(--gap-disclosure);
        `:te`
          position: static;
          width: 100%;
          margin-top: var(--gap-disclosure);
        `}
  /* An accordion body grows in flow up to a cap, then scrolls, never spilling past the row below. */
  ${({$variant:e,$panelHeight:t})=>e==="inline"&&t==="cap"?te`
          max-height: 16rem;
          overflow-y: auto;
          ${_e}
        `:""}
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function pi({space:e,...t}){return r.jsx(Io,{$space:e,...t})}const Io=p.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${ke[e]} 0`:"0"};
`,Co=160,Ao=24,No="...";function hi({children:e,limit:t=Co,subject:n,className:a}){const[o,s]=u.useState(!1),i=u.useId(),c=Lo(e,t);if(c===void 0)return r.jsx(r.Fragment,{children:e});const d=o?"Show less":"Show more";return r.jsxs(Po,{className:a,children:[r.jsx("span",{id:i,children:o?e:`${c}${No}`})," ",r.jsx(Fo,{type:"button","data-expandable-toggle":"","aria-controls":i,"aria-expanded":o,"aria-label":n===void 0?void 0:`${d} of ${n}`,onClick:()=>s(f=>!f),children:d})]})}function Lo(e,t){if(e.length<=t+Ao)return;const n=e.lastIndexOf(" ",t);return n<=0?e.slice(0,t):e.slice(0,n)}const Po=p.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,Fo=p(Pn)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function mi(e,t){const n=t.map(s=>s==null?null:qn(e,s.index)),a=n.length>0&&n.every(s=>s?.currency==="exact"),o=n.reduce((s,i)=>i?.currency!=="held"||i.asOfUt===null?s:s===null?i.asOfUt:Math.min(s,i.asOfUt),null);return s=>{const i=a?Zn(s):s;return o===null?i:{state:"held",value:i,asOfUt:Ne("ut",o),grade:"held",reckoning:{status:"none"}}}}function Do({anchor:e,style:t,children:n,...a}){const[o,s]=u.useState(null),[i,c]=u.useState(null),d=u.useRef(e);d.current=e;const f=u.useCallback(()=>{if(!o)return;const m=d.current,g=typeof m=="function"?m():m;if(!g)return;const $=o.getBoundingClientRect(),v=gr(g,{w:$.width,h:$.height},{w:window.innerWidth,h:window.innerHeight});c(l=>l&&l.left===v.left&&l.top===v.top?l:v)},[o]);return u.useLayoutEffect(()=>{f()}),u.useLayoutEffect(()=>{if(!o)return;const m=typeof ResizeObserver>"u"?null:new ResizeObserver(f);return m?.observe(o),window.addEventListener("resize",f),window.addEventListener("scroll",f,!0),()=>{m?.disconnect(),window.removeEventListener("resize",f),window.removeEventListener("scroll",f,!0)}},[o,f]),typeof document>"u"?null:cr.createPortal(r.jsx(Oo,{ref:s,style:{...t,left:i?.left??0,top:i?.top??0,visibility:i===null?"hidden":t?.visibility},...a,children:n}),document.body)}const Oo=p.div`
  position: fixed;
  z-index: var(--z-dropdown);
`,bt=12,zo=8,Bo=120;function gi({trigger:e,"aria-label":t,children:n}){const[a,o]=u.useState(!1),s=u.useRef(null),i=u.useRef(null),c=u.useRef(null),d=u.useId(),f=u.useCallback(()=>{i.current!==null&&(clearTimeout(i.current),i.current=null)},[]),m=()=>{f(),o(!0)},g=()=>{f(),i.current=setTimeout(()=>o(!1),Bo)},$=u.useCallback(()=>{f(),o(!1)},[f]);u.useEffect(()=>f,[f]),u.useEffect(()=>{if(!a)return;const l=w=>{w.key==="Escape"&&(w.stopPropagation(),$())};return document.addEventListener("keydown",l,!0),()=>document.removeEventListener("keydown",l,!0)},[a,$]);const v=()=>{const l=s.current?.getBoundingClientRect();if(!l)return null;const w=c.current?.offsetHeight??0,M=l.top-w-2*bt;return{x:l.left,y:M+bt>=zo?M:l.bottom}};return r.jsxs(r.Fragment,{children:[r.jsx(Ho,{ref:s,type:"button","aria-label":t,"aria-describedby":a?d:void 0,onPointerEnter:m,onPointerLeave:g,onFocus:m,onBlur:$,children:e}),a&&r.jsx(Do,{anchor:v,onPointerEnter:f,onPointerLeave:g,children:r.jsx(Uo,{ref:c,id:d,role:"tooltip",children:n})})]})}const Ho=p.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${ge}
`,Uo=p.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function vi({gap:e,inset:t=!1,wrap:n=!1,children:a,...o}){return r.jsx(Go,{$gap:e,$inset:t,$wrap:n,...o,children:a})}const Go=p.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?ke[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,Wo=4,Xo=80,wt=60,Vo=30,Ve=24,Yo=32,yt=56,$t=Ve;function De(e,t,n){const{min:a,max:o,step:s}=t,i=e+n*s,c=Math.min(o,Math.max(a,i));if(!Number.isFinite(a))return c;const d=a+Math.round((c-a)/s)*s;return Math.min(o,Math.max(a,d))}function Ko(e){const{value:t,min:n,max:a,step:o,orientation:s="horizontal",onChange:i,format:c,"aria-label":d,label:f=d,disabled:m=!1,width:g,height:$}=e,v=s==="vertical",l=Math.max(Ve,g??(v?$t:yt)),w=Math.max(Ve,$??(v?yt:$t)),M=e.mode==="rate",x=n??Number.NEGATIVE_INFINITY,y=a??Number.POSITIVE_INFINITY,k={min:x,max:y,step:o},R=u.useRef(null),j=u.useRef(t);j.current=t;const C=u.useRef(i);C.current=i;const X=(e.mode==="rate"?e.stepsPerSecond:void 0)??Vo,[P,G]=u.useState(0),W=c?c(t):String(Math.round(t)),z=y>x&&Number.isFinite(y-x)?(t-x)/(y-x):.5,K=_=>{m||_!==t&&i(_)};u.useEffect(()=>{if(!M||P===0||m)return;const _=setInterval(()=>{const E=Math.max(x,Math.min(y,j.current+P*X*o*(wt/1e3)));E!==j.current&&C.current(E)},wt);return()=>clearInterval(_)},[M,P,m,o,X,x,y]);const D=_=>{if(m)return;let E=null;switch(_.key){case"ArrowRight":case"ArrowUp":E=De(t,k,1);break;case"ArrowLeft":case"ArrowDown":E=De(t,k,-1);break;case"Home":if(!Number.isFinite(x))return;E=x;break;case"End":if(!Number.isFinite(y))return;E=y;break;default:return}_.preventDefault(),K(E)},h=_=>s==="vertical"?_.clientY:_.clientX,T=_=>{m||(R.current={start:h(_),startValue:t},_.currentTarget.setPointerCapture(_.pointerId))},S=_=>{if(m||!R.current)return;const E=s==="vertical"?R.current.start-h(_):h(_)-R.current.start;if(M){const N=E/Xo;G(Math.max(-1,Math.min(1,N)));return}const B=E/Wo;K(De(R.current.startValue,k,B))},I=_=>{R.current&&(R.current=null,G(0),_.currentTarget.hasPointerCapture(_.pointerId)&&_.currentTarget.releasePointerCapture(_.pointerId))};return r.jsxs(qo,{children:[f!==!1&&r.jsx(Zo,{"aria-hidden":"true",children:f}),r.jsxs(Jo,{role:"slider","aria-label":d,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":n,"aria-valuemax":a,"aria-valuetext":W,"aria-disabled":m||void 0,tabIndex:m?-1:0,$orientation:s,$disabled:m,$width:l,$height:w,$compact:(v?l:w)<Yo,onKeyDown:D,onPointerDown:T,onPointerMove:S,onPointerUp:I,onPointerCancel:I,children:[r.jsx(Qo,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-z)*100}%)`}:{transform:`translateX(${(.5-z)*100}%)`},"aria-hidden":"true"}),r.jsx(ea,{$orientation:s,"aria-hidden":"true"}),r.jsx(ta,{"aria-hidden":"true",children:W})]})]})}const qo=p.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,Zo=p.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Jo=p.div`
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

  ${ge}
`,Qo=p.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,ea=p.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,ta=p.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function xi({lock:e}){const t=Jn(e)?na(e):e,n=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return r.jsx(Ie,{text:n,focusable:!0,children:r.jsxs(oa,{role:"status","aria-label":n,children:[r.jsx(Fn,{size:"1.2em"}),r.jsx(aa,{children:ra(t)})]})})}function na(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...ur(t,nr),locks:t}}function ra(e){const t=[...new Set(e.locks.flatMap(n=>n.missing.map(a=>a.name)))];return t.length>0?t.join(", "):e.reason}const oa=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-figure-parts);
  max-width: 100%;
  min-width: 0;
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,aa=p.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,jt=1.4,_t=1.7,sa="var(--icon-size-standalone)",ia=1.8,Se="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",kt="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",Mt="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",Rt="M7 4.5V19.5M17 4.5V19.5",he=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,an={prograde:{colour:"prograde",paths:[Se,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[Se,he(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",he(12,11)]},radialOut:{colour:"radial",paths:[kt,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[kt,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",he(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",he(12,12)]},relativePlus:{colour:"target",paths:[Se,Mt],dot:[12,12]},relativeMinus:{colour:"target",paths:[Se,Mt,he(12,12)]},parallelPlus:{colour:"target",paths:[Rt],dot:[12,12]},parallelMinus:{colour:"target",paths:[Rt,he(12,12)]}},bi=Object.keys(an);function St({shape:e,colour:t,strokeWidth:n,dotRadius:a}){return r.jsxs("g",{fill:"none",stroke:t,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(o=>r.jsx("path",{d:o},o)),e.dot&&r.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:a,fill:t,stroke:"none"})]})}function se(e,t){const n=an[e],a=`var(--color-marker-${n.colour})`,o=u.forwardRef(({size:s=sa,strokeWidth:i=ia,label:c,style:d,...f},m)=>{const g={ref:m,xmlns:"http://www.w3.org/2000/svg",...typeof s=="number"?{width:s,height:s,style:d}:{style:{width:s,height:s,...d}},viewBox:"0 0 24 24","data-marker":e},$=r.jsxs(r.Fragment,{children:[r.jsx(St,{shape:n,colour:"currentColor",strokeWidth:i+jt,dotRadius:_t+jt/2}),r.jsx(St,{shape:n,colour:a,strokeWidth:i,dotRadius:_t})]});return c?r.jsx("svg",{...g,role:"img","aria-label":c,...f,children:$}):r.jsx("svg",{...g,"aria-hidden":"true",...f,children:$})});return o.displayName=t,o}const sn=se("prograde","ProgradeIcon"),la=se("retrograde","RetrogradeIcon"),ln=se("normal","NormalIcon"),ca=se("antiNormal","AntiNormalIcon"),ua=se("radialOut","RadialOutIcon"),cn=se("radialIn","RadialInIcon"),da=se("maneuver","ManeuverIcon"),fa=se("target","TargetIcon"),pa=se("antiTarget","AntiTargetIcon"),ha=se("relativePlus","RelativePlusIcon"),ma=se("relativeMinus","RelativeMinusIcon"),ga=se("parallelPlus","ParallelPlusIcon"),va=se("parallelMinus","ParallelMinusIcon"),wi=sn,yi=cn,$i=ln,ji={prograde:sn,retrograde:la,normal:ln,antiNormal:ca,radialOut:ua,radialIn:cn,maneuver:da,target:fa,antiTarget:pa,relativePlus:ha,relativeMinus:ma,parallelPlus:ga,parallelMinus:va};function un(e){const{year:t,day:n,hour:a,minute:o}=Je(),s=Number.isFinite(e)?Math.max(0,e):0,i=Math.floor(s/t)+1,c=s%t,d=Math.floor(c/n)+1,f=c%n;return{year:i,day:d,hour:Math.floor(f/a),minute:Math.floor(f%a/o),second:Math.floor(f%o)}}const xa={year:1,day:1,hour:0,minute:0,second:0};function ba(e){const{year:t,day:n,hour:a,minute:o}=Je();return(e.year-1)*t+(e.day-1)*n+e.hour*a+e.minute*o+e.second}function Ee(e){return be(Ne("s",e))}function wa({value:e,onChange:t,label:n,disabled:a,steps:o}){const s=u.useId(),i=`${s}-absent`,c=e!==null&&Number.isFinite(e)?e:null,d=c===null?null:un(c),f=Je(),m=o??[f.minute,10*f.minute,f.hour,f.day],[g,$]=u.useState(null),v=(l,w,M,x)=>r.jsxs(Ce,{gap:"caption",children:[r.jsx(Ke,{htmlFor:`${s}-${l}`,children:w}),r.jsx(Ut,{id:`${s}-${l}`,type:"number",inputMode:"numeric","aria-label":`${n} ${w}`,"aria-describedby":d===null?i:void 0,min:M,step:1,style:{width:x},disabled:a,placeholder:d===null?fe:void 0,value:g?.key===l?g.text:d===null?"":String(d[l]),onBlur:()=>$(null),onChange:y=>{const k=y.target.value;if($({key:l,text:k}),k.trim()==="")return;const R=Number(k);if(!Number.isFinite(R))return;const j=Math.max(M,Math.round(R));t(ba({...d??xa,[l]:j}))}})]},l);return r.jsxs(Ce,{gap:"related-dense",role:"group","aria-label":n,children:[r.jsxs(rt,{gap:"related-dense",wrap:!0,justify:"start",children:[v("year","YEAR",1,"5rem"),v("day","DAY",1,"5rem"),v("hour","HR",0,"4rem"),v("minute","MIN",0,"4rem"),v("second","SEC",0,"4rem")]}),d===null&&r.jsx(Ge,{id:i,level:"muted",size:"sm",children:`${fe} no ${n.toLowerCase()} to show. Type one to state it.`}),m.length===0?null:r.jsxs(rt,{gap:"related-packed",wrap:!0,justify:"start",children:[r.jsx(Ge,{level:"faint",size:"sm",children:"NUDGE"}),m.map(l=>r.jsx(je,{variant:"ghost",size:"sm",disabled:a||c===null,"aria-label":`${n} earlier by ${Ee(l)}`,onClick:()=>c!==null&&t(c-l),children:`-${Ee(l)}`},`minus-${l}`)),m.map(l=>r.jsx(je,{variant:"ghost",size:"sm",disabled:a||c===null,"aria-label":`${n} later by ${Ee(l)}`,onClick:()=>c!==null&&t(c+l),children:`+${Ee(l)}`},`plus-${l}`))]})]})}const ya=p.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function $a({observed:e,modelled:t,write:n}){if(t==null)return null;if(n===void 0){const a=t;return Ue(e,a,Dn())?r.jsx(Et,{children:r.jsx(ue,{value:a})}):null}return Ue(e,t,On(n))?r.jsx(Et,{children:n(t)}):null}function Et({children:e}){return r.jsx(ya,{"data-modelled-alongside":"",children:r.jsx(Ze,{"data-held":"",kind:"modelled",caption:qe,children:e})})}function _i({value:e}){return r.jsxs(r.Fragment,{children:[r.jsx(ue,{value:e}),r.jsx($a,{observed:e.value,modelled:zn(e)})]})}function ki({panZoom:e,label:t,style:n,onMouseMove:a,children:o}){const{style:s,ref:i,...c}=e.viewportProps;return r.jsxs(ja,{...c,ref:i,onMouseMove:a,"aria-label":t,style:{...s,...n},children:[o,r.jsx(_a,{role:"status",children:e.hint!==null&&r.jsx(ka,{children:e.hint})})]})}const ja=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  ${_e}
`,_a=p.div`
  position: absolute;
  bottom: var(--gap-related);
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-base);
  max-width: calc(100% - 16px);
  pointer-events: none;
`,ka=p.div`
  padding: var(--inset-control);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function Mi({filled:e,of:t,tone:n="info",label:a}){const o=`${e} of ${t}`;return r.jsx(Ma,{role:"img","aria-label":a===void 0?o:`${a}: ${o}`,"data-pips":"",children:Array.from({length:t},(s,i)=>r.jsx(Ra,{$colour:rr[n],$filled:i<e},i))})}const Ma=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  flex: none;
`,Ra=p.span`
  width: 1em;
  height: 1em;
  border-radius: var(--radius-circle);
  border: 2px solid ${({$colour:e})=>e};
  background: ${({$colour:e,$filled:t})=>t?e:"transparent"};
`;function Ri({id:e,label:t,value:n,options:a,onChange:o,hint:s}){const i=a.findIndex(c=>dr(c.choice,n));return r.jsxs(Ht,{children:[r.jsx(Ke,{htmlFor:e,children:t}),r.jsxs(Bn,{id:e,value:i===-1?"":String(i),onChange:c=>{const d=a[Number(c.target.value)];d!==void 0&&o(d.choice)},children:[i===-1&&r.jsx("option",{value:"",disabled:!0}),a.map((c,d)=>r.jsx("option",{value:d,children:c.label},`${c.choice.kind}-${c.choice.bodyIndex??"none"}`))]}),s!==void 0&&r.jsx(Hn,{children:s})]})}function Sa({as:e,interactive:t=!1,selected:n=!1,wrap:a=!1,nested:o=!1,type:s,children:i,...c}){return r.jsx(Ta,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:n,$wrap:a,$nested:o,...c,children:i})}const dn=p.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,Ea="min(12ch, 100%)",Ta=p.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-row);
  font-size: var(--font-size-compact);
  padding: var(--inset-row);
  ${({$wrap:e})=>e?`
  flex-wrap: wrap;
  row-gap: var(--gap-row-wrap);

  & > ${dn} {
    min-width: ${Ea};
  }
`:""}
  ${({$interactive:e})=>e?te`
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

  ${_e}
`:""}
  ${({$interactive:e,$selected:t})=>e&&t?`
  ${Kt("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}
`,Si=Object.assign(Sa,{Name:dn}),Ia=65,fn=38,Ca=72,Aa=Ca-fn,pn=55,Ye=137.508,Na=10,La=1.5,Pa=64,Fa=60,Da=241,Oa=Ye-Math.floor(Ye),ye=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function hn(e,t){const n=Math.abs(e-t)%360;return n>180?360-n:n}const za=ye.map((e,t)=>{let n=1/0;for(let o=0;o<ye.length;o++)o!==t&&(n=Math.min(n,hn(e.hue,ye[o].hue)));const a=n/2;return Math.max(0,Math.min(Na,a-La))}),Ba=ye.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:za[t]}));function Ha(e,t=ye){return t.find(n=>n.aliases.some(a=>e.includes(a)))}function mn(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Tt(e,t){return(e%t+t)%t}function Ua(e){const n=mn(`light:${e}`)/4294967295;return fn+n*Aa}function Ga(e){const t=Ha(e);if(!t)return;const n=t.aliases.length===1?pn:Ua(e);return{hue:t.hue,lightness:n}}function Wa(e){return Ba.some(({centre:t,radius:n})=>hn(e,t)<n)}function Xa(e){const t=mn(e);let n=Tt(t*Ye,360);const a=Fa+(t>>>8)%Da+Oa;let o=0;for(;Wa(n)&&o<Pa;)n=Tt(n+a,360),o++;return n}function Ei(e){const t=e.trim().toLowerCase(),n=Ga(t),a=n?.hue??Xa(t),o=n?.lightness??pn;return`hsl(${Math.round(a)}deg ${Ia}% ${Math.round(o)}%)`}function Ti({selected:e,gap:t="caption",layout:n="stack",selectedLook:a="fill",children:o,...s}){return r.jsx(Va,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:n,$look:a,...s,children:o})}const Va=p.button`
  display: flex;
  ${({$layout:e})=>e==="split"?te`
          justify-content: space-between;
          align-items: baseline;
          > :first-child {
            flex: 1;
            min-width: 0;
          }
        `:te`
          flex-direction: column;
        `}
  gap: ${({$gap:e})=>ke[e]};
  width: 100%;
  text-align: left;
  padding: var(--inset-selectable-row);
  border-radius: ${Vt.regular};
  border: 1px solid
    ${({$selected:e,$look:t})=>e?t==="outline"?"var(--color-accent-fg)":"transparent":"var(--color-border-subtle)"};
  ${({$selected:e,$look:t})=>e?t==="outline"?"background: var(--color-surface-raised); color: inherit;":Kt("go"):"background: transparent; color: inherit;"}
  cursor: pointer;
  font-family: inherit;

  ${({$selected:e})=>e?"":te`
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

  ${ge}
`;function Ya({label:e,children:t,detail:n,tone:a="neutral",...o}){return r.jsxs(Ka,{...o,children:[r.jsx(qa,{children:e}),r.jsx(Za,{$tone:a,children:t}),n!=null&&r.jsx(Ja,{children:n})]})}const Ka=p.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,qa=p.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,Za=p.dd`
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
  color: ${({$tone:e})=>Yt[e]};
`,Ja=p.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function Ii({slot:e}){const t=or(e);return t.length===0?null:r.jsx(r.Fragment,{children:t.map(n=>r.jsx(Ya,{label:n.label,detail:n.detail,tone:n.tone??"neutral",children:r.jsx(Qa,{entry:n})},n.id))})}function Qa({entry:e}){if(e.value!==void 0)return r.jsx(ue,{value:e.value});if(e.text===void 0)return r.jsx(ar,{});const t=Un(e.held);return t===null?r.jsx(r.Fragment,{children:e.text}):r.jsx(Ze,{kind:t.kind,caption:t.caption,children:e.text})}const es=12,me=12,ts=12,It=52,ee=10,Oe=4;function ns(e,t,n){const a=i=>e.map(c=>Number.parseFloat(i.mark(c).replace(/[^\d.-]/g,""))),o=a(n(Oe)),s=i=>a(i).every((c,d)=>c===o[d]);if(s(t))return t;for(let i=0;i<Oe;i++){const c=n(i);if(s(c))return c}return n(Oe)}function Ci({labelSide:e="left",value:t,min:n,max:a,width:o=92,height:s=220,fillHeight:i=!1,tickStep:c,zones:d,markers:f,groundLine:m,seaLevel:g,format:$,"aria-label":v}){const l=u.useRef(null),[w,M]=u.useState(s);u.useEffect(()=>{if(!i)return;const b=l.current;if(!b)return;const F=()=>{const ne=b.clientHeight;ne>0&&M(ne)};F();const L=new ResizeObserver(F);return L.observe(b),()=>L.disconnect()},[i]);const x=i?w:s,y=Wt(t),{shown:k,held:R,caption:j,band:C}=y,{anchor:X,tip:P}=Gn(j),G=k?.magnitude??Number.NaN,W=Number.isFinite(G)?k:null,z=n.magnitude,K=a.magnitude,D=K-z,h=Number.isFinite(G)?G:z,T=D>0?Math.max(z,Math.min(K,h)):z,S=W!=null,I=ct(a,{format:$}),_=W==null?fe:ut({magnitude:h,unit:W.unit},{format:I.rung}),E=b=>ut(b),B=[...(f??[]).flatMap(b=>b.label===void 0?[]:[b.bounds===void 0?`${b.label} ${E(b.value)}`:`${b.label} ${E(b.value)}, between ${E(b.bounds.lo)} and ${E(b.bounds.hi)}`]),...(d??[]).flatMap(b=>b.label===void 0?[]:[`${b.label} zone ${E(b.from.min(b.to))} to ${E(b.from.max(b.to))}`]),...m===void 0?[]:[`ground ${E(m)}`],...g===void 0?[]:[`sea level ${E(g)}`]],N=W==null||C===null?null:Qn(C,W.unit)??null,H=Math.max(0,x-me-ts),U=b=>{if(!(D>0))return me+H;const F=Math.max(0,Math.min(1,(b-z)/D));return me+(1-F)*H},J=b=>U(b.magnitude),re=me,ie=me+H,oe=e==="right",A=oe?o-It-ee:It,q=oe?A+ee+6:A-6,O=oe?"start":"end",Z=(b,F)=>{const L=J(b),ne=b.greaterThan(a)?-1:b.lessThan(n)?1:0,le=A-4,de=A+ee+4,ve=A+ee/2;return r.jsxs("g",{"data-level":F?"sea":"ground",children:[r.jsx("line",{x1:le,y1:L,x2:de,y2:L,stroke:F?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:F?1.5:2,strokeDasharray:F?"3 2":void 0}),ne!==0&&r.jsx("polygon",{"data-off-scale":"true",points:`${ve-4},${L-ne*2} ${ve+4},${L-ne*2} ${ve},${L+ne*4}`,fill:F?"var(--color-info-mark)":"var(--color-text-primary)"})]})},Q=[],Y=c?.magnitude??0;if(Y>0&&D>0){const b=Math.ceil(z/Y),F=Math.floor(K/Y+1e-9);for(let L=b;L<=F;L++)Q.push(L===0?0:L*Y)}const ae=ns(Q,I,b=>ct(a,{format:$,decimals:b})),V=U(T),pe=b=>H>0?(me+H-b)/H:0,Me=N!==null&&Ue(pe(V),[pe(J(N.lo)),pe(J(N.hi))],Wn())?N:null;return r.jsxs(rs,{ref:l,...Yn(y),...X,...S?{role:"meter","aria-label":st(v,j),...at(j),"aria-valuenow":T,"aria-valuemin":z,"aria-valuemax":K,"aria-valuetext":B.length===0?_:`${_}; ${B.join("; ")}`}:{role:"img","aria-label":st(`${v}: ${_}`,j),...at(j)},style:i?{height:"100%"}:void 0,children:[r.jsxs("svg",{width:o,height:x,viewBox:`0 0 ${o} ${x}`,"aria-hidden":"true",style:i?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[r.jsx("rect",{x:A,y:re,width:ee,height:H,rx:2,fill:"var(--color-surface-raised)"}),d?.map(b=>{const F=J(b.from.max(b.to)),L=J(b.from.min(b.to)),ne=Math.max(0,L-F);return r.jsx("g",{children:r.jsx("rect",{x:A,y:F,width:ee,height:ne,fill:b.color??"var(--color-warn-mark)",opacity:.55})},`zone-${L}-${F}-${b.label??""}`)}),g!==void 0&&D>0&&Z(g,!0),m!==void 0&&D>0&&Z(m,!1),Q.map(b=>{const F=U(b),L=S&&Math.abs(F-Math.max(re+4,Math.min(ie-4,V)))<es;return r.jsxs("g",{children:[r.jsx("line",{x1:oe?A+ee+4:A-4,y1:F,x2:oe?A+ee:A,y2:F,stroke:"var(--color-border-subtle)",strokeWidth:1}),!L&&r.jsx("text",{x:q,y:F,textAnchor:O,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:ae.mark(b)})]},`tick-${b}`)}),f?.map(b=>{const{bounds:F}=b,L=J(b.value),ne=b.color??"var(--color-accent-fg)";return r.jsxs("g",{"data-marker":b.label,children:[r.jsx("line",{x1:A,y1:L,x2:A+ee,y2:L,stroke:ne,strokeWidth:2,strokeDasharray:"2 2"}),r.jsx("polygon",{points:oe?`${A},${L} ${A-5},${L-3} ${A-5},${L+3}`:`${A+ee},${L} ${A+ee+5},${L-3} ${A+ee+5},${L+3}`,fill:"none",stroke:ne,strokeWidth:1.5}),F!==void 0&&["lo","hi"].map(le=>{const de=J(F[le]);return r.jsx(ot,{end:le,x1:A,y1:de,x2:A+ee,y2:de},le)})]},`marker-${L}-${b.label??""}`)}),Me!==null&&["lo","hi"].map(b=>{const F=J(Me[b]);return r.jsx(ot,{end:b,x1:A,y1:F,x2:A+ee,y2:F},b)}),S&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:A-6,y1:V,x2:A+ee+6,y2:V,stroke:"var(--color-accent-fg)",strokeWidth:2}),r.jsxs("text",{x:oe?q+2:q-2,y:Math.max(re+4,Math.min(ie-4,V)),textAnchor:O,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[I.mark(h),R&&r.jsx(Xn,{size:5})]})]}),!S&&r.jsx(Vn,{x:oe?q+8:q-8,y:re+H/2,size:11,children:fe}),I.symbol!==""&&r.jsx("text",{x:A+ee/2,y:re-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:I.symbol})]}),P]})}const rs=p.div`
  display: block;
  max-width: 100%;
`,Ai=p.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,os=112;function as(e,t){try{return Ne(e,1).in(t).magnitude}catch{return Number.NaN}}function ss(e,t){let n=e;return t.map((a,o)=>{if(!Number.isFinite(a)||a===0)return 0;const s=o===t.length-1?n/a:Math.trunc(n/a);return n-=s*a,s})}function Ni({value:e,unit:t,onChange:n,label:a,rungs:o,range:s,rate:i,disabled:c}){const d=u.useId(),{shown:f,held:m,caption:g}=Wt(e),$=m?r.jsx(Ze,{caption:g,children:a}):a,v=s,l=f?f.magnitude:Number.NaN,[w,M]=u.useState({}),x=j=>w[j]??null,y=(j,C)=>M(X=>({...X,[j]:C})),k=i?r.jsxs(Ce,{gap:"related-packed",children:[r.jsx(Ko,{mode:"rate","aria-label":`${a} rate`,value:l,step:i.step,stepsPerSecond:i.stepsPerSecond,disabled:c||!Number.isFinite(l),format:ze(t)?ls:void 0,width:ze(t)?os:void 0,onChange:j=>n(xe(t,j))}),r.jsx(Ge,{level:"faint",size:"sm",children:`${i.step} ${is(t)} / notch`})]}):null;if(ze(t))return r.jsxs(He,{children:[r.jsx(At,{"aria-hidden":"true",children:$}),r.jsxs(Ce,{gap:"related-dense",children:[r.jsx(wa,{label:m&&g!==null?`${a}, ${g}`:a,value:Number.isFinite(l)?l:null,disabled:c,steps:i?[]:void 0,onChange:j=>n(xe(t,j))}),k]})]});if(o&&o.length>0){const j=o.map(P=>as(String(P),t)),C=ss(l,j),X=(P,G)=>{const W=Be(G);if(W===void 0){y(P,{text:G,against:C[P]});return}const z=C.map(D=>Number.isFinite(D)?D:0);z[P]=W;const K=z.reduce((D,h,T)=>Number.isFinite(j[T])?D+h*j[T]:D,0);y(P,{text:G,against:W}),n(xe(t,K))};return r.jsxs(He,{children:[r.jsx(At,{id:`${d}-label`,children:$}),r.jsx(fs,{role:"group","aria-labelledby":`${d}-label`,children:o.map((P,G)=>r.jsxs(ps,{children:[r.jsx(hs,{type:"number",disabled:c,"aria-label":`${a} ${String(P)}`,value:Ct(x(G),C[G]),onChange:W=>X(G,W.target.value)}),r.jsx(Nt,{"aria-hidden":"true",children:String(P)})]},String(P)))}),k]})}const R=j=>{const C=Be(j);y(0,{text:j,against:C??l}),C!==void 0&&n(xe(t,C))};return r.jsxs(He,{children:[r.jsx(us,{htmlFor:d,children:$}),r.jsxs(ds,{children:[r.jsx(vn,{id:d,type:"number",disabled:c,min:v?.min,max:v?.max,step:v?.step,value:Ct(x(0),l),onChange:j=>R(j.target.value)}),r.jsx(Nt,{"aria-hidden":"true",children:t})]}),v?r.jsx(tn,{disabled:c,"aria-label":`${a} slider`,min:v.min,max:v.max,step:v.step??(v.max-v.min)/100,value:Number.isFinite(l)?l:v.min,onChange:j=>n(xe(t,Be(j.target.value)??v.min))}):null,k]})}function Ct(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(cs(t)):""}function is(e){return Xt(e)??e}function ze(e){return Xt(e)==="s"}function ls(e){if(!Number.isFinite(e))return"";const{day:t,hour:n,minute:a,second:o}=un(e),s=i=>String(i).padStart(2,"0");return`D${t} ${s(n)}:${s(a)}:${s(o)}`}function Be(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function cs(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const He=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,gn=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,us=p.label`
  ${gn}
`,At=p.span`
  ${gn}
`,ds=p.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,vn=p.input`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-field-compact);
  border-radius: var(--radius-regular);
  text-align: right;
  font-variant-numeric: tabular-nums;
  min-width: 0;

  ${ge}
`,Nt=p.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,fs=p.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,ps=p.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,hs=p(vn)`
  width: 4.5em;
`,ms=200;function Lt(e={}){const t=e.quietMs??ms;let n=null,a=Number.NEGATIVE_INFINITY,o=!0;return{wheel(s,i){return(n===null||s-a>t)&&(n=i&&o?"diagram":"page"),a=s,n},pageScrolled(){o=!1},pointerMovedInside(){o=!0},yieldToPage(){n="page"},get owner(){return n}}}const gs=16,vs=400,Pt=120,xs=Math.log(1.15)/100,bs=.01;function ws(e,t,n){const a=t===1?e*gs:t===2?e*vs:e,o=Math.max(-Pt,Math.min(Pt,a)),s=n&&Math.abs(a)<40?bs:xs;return Math.exp(-o*s)}function ys(e,t,n={}){const{quietMs:a}=n,o=u.useRef(Lt({quietMs:a}));u.useEffect(()=>{o.current=Lt({quietMs:a})},[a]);const[s,i]=u.useState(null);u.useEffect(()=>{e.current!==s&&i(e.current)}),u.useEffect(()=>{if(!s||!t)return;const c=l=>l instanceof Node&&s.contains(l);let d=null;const f=(l,w)=>d!==null&&(Math.abs(l-d.x)>=1||Math.abs(w-d.y)>=1),m=l=>{d={x:l.clientX,y:l.clientY},!(l.ctrlKey||l.metaKey)&&o.current.wheel(performance.now(),c(l.target))},g=l=>{const w=f(l.clientX,l.clientY);d={x:l.clientX,y:l.clientY},w&&c(l.target)&&o.current.pointerMovedInside()},$=l=>{const w=l.target;(w===document||w instanceof Node&&w.contains(s))&&o.current.pageScrolled()},v=l=>{const w=l.ctrlKey||l.metaKey;if(!w&&o.current.owner!=="diagram")return;const M=s.getBoundingClientRect(),x=ws(l.deltaY,l.deltaMode,w);if(t(x,l.clientX-M.left,l.clientY-M.top)===!1&&!w){o.current.yieldToPage();return}l.preventDefault()};return window.addEventListener("wheel",m,{capture:!0,passive:!0}),window.addEventListener("pointermove",g,{capture:!0,passive:!0}),window.addEventListener("scroll",$,{capture:!0,passive:!0}),s.addEventListener("wheel",v,{passive:!1}),()=>{window.removeEventListener("wheel",m,{capture:!0}),window.removeEventListener("pointermove",g,{capture:!0}),window.removeEventListener("scroll",$,{capture:!0}),s.removeEventListener("wheel",v)}},[s,t])}const $s="Arrow keys pan, + and - zoom, 0 resets",js=.15,Ft=1.25,_s={zoom:1,panX:0,panY:0};function Li(e={}){const{home:t=_s,zoomAbout:n="pointer",panThreshold:a=3,enabled:o=!0}=e,[s,i]=u.useState(t),c=u.useRef({camera:s,options:e,home:t});c.current={camera:s,options:e,home:t};const d=u.useRef(null),f=e.elementRef??d,m=u.useCallback(()=>{const h=f.current?.getBoundingClientRect();return{w:h?.width??0,h:h?.height??0}},[]),g=u.useCallback(h=>{const{constrain:T}=c.current.options,S=m(),I=T&&S.w>0&&S.h>0?T(h,S):h;return c.current.camera=I,i(I),I},[m]),$=u.useCallback(h=>{g(typeof h=="function"?h(c.current.camera):h)},[g]),v=u.useCallback((h,T,S)=>{const I=c.current.camera,{minZoom:_=.1,maxZoom:E=50}=c.current.options,B=typeof _=="function"?_(I):_,N=Math.max(Math.min(B,I.zoom),Math.min(Math.max(E,I.zoom),I.zoom*h));if(N===I.zoom)return!1;const{w:H,h:U}=m();if(n==="centre")g({...I,zoom:N});else{const J=(T-H/2)/I.zoom+I.panX,re=(S-U/2)/I.zoom+I.panY;g({zoom:N,panX:J-(T-H/2)/N,panY:re-(S-U/2)/N})}return c.current.options.onManualMove?.("zoom"),!0},[g,m,n]);ys(f,u.useMemo(()=>o?v:null,[o,v]));const l=u.useCallback(()=>{c.current.options.onManualMove?.("reset"),g(c.current.home)},[g]),w=u.useCallback(h=>{const{w:T,h:S}=m();v(h,T/2,S/2)},[m,v]),[M,x]=u.useState(null),y=u.useRef(new Map),k=u.useRef(null),R=u.useRef(null),j=u.useRef(null),C=u.useRef(!1),[X,P]=u.useState(!1),G=u.useCallback(h=>{if(c.current.options.enabled!==!1&&!(h.pointerType==="mouse"&&h.button!==0)){if(y.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),y.current.size===2){const[T,S]=[...y.current.values()];k.current=null,R.current=Math.hypot(T.x-S.x,T.y-S.y);return}C.current=!1,j.current={x:h.clientX,y:h.clientY},k.current={x:h.clientX,y:h.clientY},R.current=null}},[]),W=u.useCallback(h=>{if(!y.current.has(h.pointerId))return;if(h.pointerType==="mouse"&&h.buttons===0){y.current.delete(h.pointerId),y.current.size===0&&(k.current=null,j.current=null,R.current=null,P(!1));return}if(y.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),y.current.size>=2){const[B,N]=[...y.current.values()],H=Math.hypot(B.x-N.x,B.y-N.y),U=R.current;if(R.current=H,U===null||U===0)return;const J=f.current?.getBoundingClientRect();C.current=!0,v(H/U,(B.x+N.x)/2-(J?.left??0),(B.y+N.y)/2-(J?.top??0));return}const T=j.current,S=k.current;if(!T||!S||!C.current&&Math.hypot(h.clientX-T.x,h.clientY-T.y)<a)return;C.current||(C.current=!0,P(!0),h.currentTarget.setPointerCapture?.(h.pointerId));const I=h.clientX-S.x,_=h.clientY-S.y;k.current={x:h.clientX,y:h.clientY};const E=c.current.camera;c.current.options.onManualMove?.("pan"),g({...E,panX:E.panX-I/E.zoom,panY:E.panY-_/E.zoom})},[g,a,v]),z=u.useCallback(h=>{if(y.current.delete(h.pointerId),h.currentTarget.releasePointerCapture?.(h.pointerId),y.current.size===1){const[T]=[...y.current.values()];k.current={...T},j.current={...T},R.current=null;return}y.current.size===0&&(k.current=null,j.current=null,R.current=null,P(!1))},[]),K=u.useCallback(h=>{if(c.current.options.enabled===!1||h.target!==h.currentTarget||h.ctrlKey||h.metaKey||h.altKey)return;const T=c.current.camera,{w:S,h:I}=m(),_=(E,B)=>{const N=(E==="panX"?S:I)/T.zoom;c.current.options.onManualMove?.("pan"),g({...T,[E]:T[E]+B*N*js})};switch(h.key){case"ArrowLeft":_("panX",-1);break;case"ArrowRight":_("panX",1);break;case"ArrowUp":_("panY",-1);break;case"ArrowDown":_("panY",1);break;case"+":case"=":w(Ft);break;case"-":case"_":w(1/Ft);break;case"0":l();break;default:return}h.preventDefault()},[g,l,m,w]);return{camera:s,setCamera:$,reset:l,zoomBy:w,viewportProps:{ref:f,tabIndex:0,role:"group",onPointerDown:G,onPointerMove:W,onPointerUp:z,onPointerCancel:z,onFocus:h=>{h.target===h.currentTarget&&h.currentTarget.matches(":focus-visible")&&x($s)},onBlur:()=>x(null),onKeyDown:K,style:{touchAction:"none",cursor:X?"grabbing":"grab"}},didPan:()=>C.current,isDragging:X,hint:M}}const Dt="(prefers-reduced-motion: reduce)";function Pi(){const[e,t]=u.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(Dt).matches);return u.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const n=window.matchMedia(Dt),a=()=>t(n.matches);return a(),n.addEventListener("change",a),()=>n.removeEventListener("change",a)},[]),e}const xn=u.createContext(null);function Fi({widget:e,scope:t,children:n}){const a=u.useMemo(()=>({widget:e,scope:t}),[e,t]);return r.jsx(xn.Provider,{value:a,children:n})}function Di(e){const t=u.useContext(xn);if(!(!t||t.widget!==e))return t.scope}function Oi(e){if(e.length===0)return[];const t=[[e[0]]];for(let n=1;n<e.length;n++)Rs(e[n-1],e[n])?t.push([e[n]]):t[t.length-1].push(e[n]);return t}function zi(e,t,n,a){if(e.length===0||!(t>0))return[];const o=[e[0].x];let s=o[0],i=o[0];for(let c=1;c<e.length;c++){const d=o[c-1],f=d+Ms(e[c].x-d,t);o.push(f),f<s&&(s=f),f>i&&(i=f)}return ks(s,i,n,a,t).map(c=>e.map((d,f)=>({...d,x:o[f]+c})))}function ks(e,t,n,a,o){if(!(o>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((n-t)/o),i=Math.floor((a-e)/o),c=[];for(let d=s;d<=i;d++)c.push(d*o+0);return c}function Ms(e,t){const n=t/2;return((e+n)%t+t)%t-n}function Rs(e,t){const n=Ot(e),a=Ot(t),o=Es(n,a);if(o===0)return!1;const s=zt(Ss(n,a));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=o)return!1;const c=[0,0,e.lat+t.lat>=0?1:-1],d=zt(Ts(c,s));if(d===null)return!1;const f=$e(n,a);return $e(n,d)>f&&$e(a,d)>f}function Ot({lat:e,lon:t}){const n=e*Math.PI/180,a=t*Math.PI/180,o=Math.cos(n);return[o*Math.cos(a),o*Math.sin(a),Math.sin(n)]}function $e(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Ss(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Es(e,t){return Math.acos(Math.max(-1,Math.min(1,$e(e,t))))}function Ts(e,t){const n=$e(e,t);return[e[0]-n*t[0],e[1]-n*t[1],e[2]-n*t[2]]}function zt(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{Gr as $,Ur as A,qs as B,Qs as C,li as D,hi as E,ei as F,ga as G,gi as H,vr as I,Ko as J,Mi as K,xi as L,ji as M,ln as N,sn as O,ki as P,cn as Q,mt as R,ua as S,Ri as T,_i as U,ma as V,ha as W,Lr as X,la as Y,Si as Z,dn as _,Vs as a,ht as a0,Ti as a1,ni as a2,tn as a3,Ya as a4,Ii as a5,wi as a6,Ci as a7,fa as a8,Ai as a9,Ni as aa,Fi as ab,gr as ac,Rr as ad,nn as ae,Lt as af,ko as ag,Pr as ah,mi as ai,Fr as aj,ks as ak,Ei as al,Oi as am,Wr as an,Li as ao,Pi as ap,ri as aq,ys as ar,Di as as,ba as at,ws as au,zi as av,ca as b,pa as c,Ys as d,Ks as e,$i as f,Zs as g,Js as h,ti as i,oi as j,ai as k,si as l,ii as m,ci as n,ui as o,di as p,fi as q,pi as r,Do as s,yi as t,vi as u,bi as v,da as w,wa as x,$a as y,va as z};
