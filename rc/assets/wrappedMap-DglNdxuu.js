import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-C0MU9AHG.js";import p,{css as te,keyframes as xn}from"./ext-styled-components-DAuodqsN.js";import{t as bn,e as wn,h as yn}from"./TinyEssentials-BHI5gitS.js";import{E as Bt,bK as je,n as $n,F as Ht,m as Ve,y as Ut,aT as jn,bF as Je,bL as _n,$ as Ee,ac as le,bM as kn,ad as Te,a7 as Qe,b0 as Mn,a_ as Rn,b1 as Sn,a$ as En,bN as Tn,bO as In,bq as Cn,ae as me,bP as Ye,aK as et,e as $e,bI as An,bQ as Gt,bJ as tt,g as Nn,Z as Ln,aG as Pn,al as nt,bn as He,by as Fn,bx as Dn,aw as Ke,b9 as On,V as zn,l as Bn,b8 as Hn,af as Wt,bv as Un,bg as Gn,bD as rt,aC as Wn,bR as Xn,bE as at,bm as ot,ag as Vn}from"./ModalSaveBar-Dvpw_Ezv.js";import{aH as Ne,b7 as st,aZ as Yn,aW as Ae,aj as Kn,c6 as qn,cH as Zn,b5 as qe,l as Jn,cm as ve,c5 as Xt}from"./view-clock-formula-Bm6xOQIY.js";import"./ksp-enum-names-DtqyRCA5.js";import"./logger-2_QM1wvD.js";import"./screen-CDftIe5d.js";import{Z as _e,N as de,_ as Vt,$ as Qn,G as it,V as xe,I as er,m as Yt,a0 as tr,i as Ie,n as Ue,j as nr,Y as Kt,c as rr,g as ar,y as lt,E as ct}from"./contributionsRead-BVF33u6e.js";import{a as or,r as sr,b as ir}from"./Notice-yexahY_X.js";import{r as lr}from"./ext-react-dom-DCF8ZnaJ.js";import{l as cr}from"./capability-lock-BYrLXLgx.js";import"./lagrange-CDpvbe-i.js";import"./use-transmissions-D-55OCga.js";import{r as ur}from"./control-frame-to-read-frame-kpT0mARc.js";function Ws({items:e,onSelect:t,onDismiss:n,"aria-label":o,style:a,header:s,footer:l,emptyLabel:u="No actions",otherLabel:d="Other"}){const f=c.useRef(null),m=c.useId(),[g,$]=c.useState(0),v=bn(e,d),i=v.flatMap(([,x])=>x),w=i.length;c.useEffect(()=>{const x=f.current;if(!x)return;if(w===0){x.focus();return}x.querySelectorAll('[role="menuitem"]')[g]?.focus()},[g,w]),c.useEffect(()=>{const x=y=>{const M=f.current;M&&y.target instanceof Node&&!M.contains(y.target)&&n()};return document.addEventListener("pointerdown",x),()=>document.removeEventListener("pointerdown",x)},[n]);const R=c.useCallback(x=>{if(x.key==="Escape"){x.stopPropagation(),n();return}if(x.key==="Tab"){n();return}if(i.length!==0)switch(x.key){case"ArrowDown":x.preventDefault(),$(y=>Math.min(y+1,i.length-1));break;case"ArrowUp":x.preventDefault(),$(y=>Math.max(y-1,0));break;case"Home":x.preventDefault(),$(0);break;case"End":x.preventDefault(),$(i.length-1);break}},[i.length,n]);return r.jsxs(dr,{ref:f,role:w>0?"menu":void 0,"aria-label":o,onKeyDown:R,tabIndex:-1,style:a,children:[s,i.length===0?r.jsx(Bt,{layout:"fill",children:u}):v.map(([x,y],M)=>r.jsxs("div",{...v.length>1?{role:"group","aria-labelledby":`${m}-group-${M}`}:{role:"none"},children:[v.length>1?r.jsx(fr,{id:`${m}-group-${M}`,"aria-hidden":"true",children:x}):null,y.map(S=>{const j=i.indexOf(S);return r.jsx(pr,{type:"button",role:"menuitem","aria-label":S["aria-label"],"aria-disabled":S.disabled,$disabled:S.disabled,tabIndex:j===g?0:-1,onFocus:()=>$(j),onClick:()=>{S.disabled||t(S.key)},children:S.label},S.key)})]},x)),l]})}const dr=p.div`
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
`,fr=p.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,pr=p.button`
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

  ${je}
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
`;function Xs({settings:e,values:t,onChange:n}){return e.length===0?null:r.jsx(r.Fragment,{children:e.flatMap(o=>o.fields.map(a=>{const l=t?.[o.namespace]?.[a.key]??a.default,u=a.label??a.key,d=`augment-setting-${o.namespace}-${a.key}`;return a.type===Ne.Bool?r.jsx($n,{children:r.jsx(wn,{checked:!!l,onChange:f=>n(o.namespace,a.key,f),label:u})},`${o.namespace}.${a.key}`):r.jsxs(Ht,{children:[r.jsx(Ve,{htmlFor:d,children:u}),r.jsx(Ut,{id:d,type:a.type===Ne.Number?"number":"text",value:l===void 0?"":String(l),onChange:f=>{const m=f.target.value;if(a.type!==Ne.Number){n(o.namespace,a.key,m);return}if(m===""){n(o.namespace,a.key,void 0);return}const g=Number(m);Number.isFinite(g)&&n(o.namespace,a.key,g)}})]},`${o.namespace}.${a.key}`)}))})}function Vs({fallback:e,gap:t="related-dense",children:n,...o}){return r.jsxs(r.Fragment,{children:[r.jsx(qt,{$gap:t,...o,children:n}),r.jsx(hr,{children:e})]})}const qt=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>_e[e]};
`,hr=p.div`
  ${qt}:not(:empty) + & {
    display: none;
  }
`,ut=12,Me=8;function mr(e,t,n){return{left:dt(e.x,t.w,n.w),top:dt(e.y,t.h,n.h)}}function dt(e,t,n){const o=e+ut;if(o+t<=n-Me)return o;const a=e-ut-t;return a>=Me?a:Math.max(Me,n-Me-t)}const gr="–";function Ys({min:e,max:t,wrapsAt:n,className:o,...a}){const s=st(e),l=st(t);return e==null||t==null||s===null||l===null?r.jsx(Ce,{className:o,children:de}):n!==void 0&&Math.abs(l-s)>=n/2?r.jsx(Ce,{className:o,children:"(precesses)"}):r.jsx(jn,{of:e.unit,separate:!0,...a,children:r.jsx(vr,{min:e,max:t,className:o})})}function vr({min:e,max:t,className:n}){return Je(e),Je(t),_n(e)?r.jsx(Ce,{className:n,children:r.jsxs(br,{children:[r.jsx("span",{"aria-hidden":"true",children:"~"}),r.jsx(Ee,{children:"approximately "}),r.jsx(le,{value:e})]})}):r.jsxs(Ce,{className:n,children:[r.jsx(le,{value:e}),r.jsx(xr,{"aria-hidden":"true",children:gr}),r.jsx(Ee,{children:" to "}),r.jsx(le,{value:t})]})}const Ce=p.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,xr=p.span`
  color: var(--color-text-faint);
`,br=p.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`,wr={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function Ks({surface:e,pad:t,bordered:n=!1,radius:o,children:a,...s}){return r.jsx(yr,{$surface:e,$pad:t,$bordered:n,$radius:o,...s,children:a})}const yr=p.div`
  ${({$surface:e})=>e&&`background: ${wr[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${Vt[e]};`}
  ${({$pad:e})=>e&&`padding: var(${Qn[e]});`}
`,qs=c.forwardRef(function({equalWidth:t=!0,gap:n,children:o,...a},s){return r.jsx($r,{ref:s,$equalWidth:t,$gap:n,...a,children:o})}),$r=p.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?_e[e]:"var(--gap-related)"};
`,jr="3px",_r=p(ir)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${it(e)};`:""}
  ${({$identityColor:e})=>e?`
    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: var(--size-mark);
      height: ${jr};
      background: ${e};
      border-radius: var(--radius-regular) var(--radius-regular) 0 0;
    }
  `:""}
  ${({$dimmed:e,$tone:t})=>e?`
    --color-text-primary: var(--color-text-muted);
    color: var(--color-text-muted);
    ${t?`border-left-color: color-mix(in srgb, ${it(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function kr({tone:e,dimmed:t,identityColor:n,standalone:o,...a}){return sr(_r,{...a,$tone:e,$dimmed:t,$identityColor:n,$standalone:o})}const Zs=Object.assign(kr,or);function Mr(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}const Js=c.forwardRef(function({label:t,icon:n,type:o,...a},s){return r.jsx("button",{ref:s,type:o??"button","aria-label":t,...a,children:r.jsx(Zt,{label:t,icon:n})})});function Zt({label:e,icon:t}){const n=c.useRef(null),o=c.useRef(null),[a,s]=c.useState(!0);return c.useLayoutEffect(()=>{const l=n.current,u=o.current;if(!l||!u)return;const d=()=>{s(u.scrollWidth<=l.clientWidth)};if(d(),typeof ResizeObserver>"u")return;const f=new ResizeObserver(d);return f.observe(l),f.observe(u),()=>f.disconnect()},[]),r.jsxs(Rr,{ref:n,children:[r.jsx(Sr,{ref:o,"aria-hidden":"true",children:e}),a?r.jsx(Er,{"aria-hidden":"true",children:e}):r.jsx(Tr,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const Rr=p.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,Sr=p.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,Er=p.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,Tr=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Ir=p.span`
  display: inline-grid;
  justify-items: center;
`,Cr=p.span`
  grid-area: 1 / 1;
`,Ar=p.span`
  grid-area: 1 / 1;
  visibility: hidden;

  &::before {
    content: attr(data-word);
  }
`;function Nr({shown:e,reserve:t}){return r.jsxs(Ir,{children:[[...new Set(t)].map(n=>r.jsx(Ar,{"data-word":n,"aria-hidden":"true"},n)),r.jsx(Cr,{children:e})]})}const Le=e=>xe(e),ie={contact:{"in-contact":()=>"In contact","loss-in":e=>`LOS in ${Le(e)}`,"back-in":e=>`No contact, back in ${Le(e)}`,none:e=>e==="unpowered"?"No contact, no electric charge aboard":"No contact"},delay:{held:e=>`${Le(e)} signal delay`,absent:()=>"no signal path"},arrival:{expected:"Expected to arrive","likely-lost":"Likely lost"},sends:{now:()=>"Sends now",held:(e,t)=>t===void 0?`Held until ${xe(e)}`:`Held until ${xe(e)}, arrives ${xe(t)}`}};function Lr(e){const{contact:t}=e,n=t.kind==="loss-in"||t.kind==="back-in"?ie.contact[t.kind](t.seconds):t.kind==="none"?ie.contact.none(t.reason):ie.contact[t.kind](),o=e.signalDelay===void 0?ie.delay.absent():ie.delay.held(e.signalDelay),a=e.sends==="now"&&e.arrival==="expected"?ie.sends.now():e.sends==="held"&&e.heldUntilUt!==void 0?ie.sends.held(e.heldUntilUt,e.arrivesUt):ie.arrival[e.arrival];return`${n} · ${o}
${a}`}function Pr(e){if(e!==void 0)return e.arrival==="likely-lost"?"at-risk":e.sends==="held"?"held":void 0}function Fr(e,t,n){if(e)return"sent";if(n.some(s=>s.held===!0))return"held";const o=t===void 0||t.phase==="in-flight"||t.phase==="idle"?null:t.requestId;return n.filter(s=>s.id!==o&&(s.predictedPhase==="awaiting-reply"||s.predictedPhase==="due")).length%2===1?"modelled":null}function Dr(e,t){return t==="modelled"&&typeof e=="boolean"?!e:e}function Or(e,t){return e===void 0||e.phase==="idle"?!1:e.phase==="in-flight"?!0:e.phase!=="confirmed"&&e.phase!=="found"?!1:t.some(n=>n.id===e.requestId)}function ft(e){if(e===null||typeof e!="object")return;const t="state"in e?e.state:"enabled"in e?e.enabled:void 0;return typeof t=="boolean"?t:void 0}function Jt(e,t){switch(t){case"held":return`${e} held until contact returns`;case"sent":return`${e} sent, not yet received`;case"modelled":return`${e} shown as predicted: the command should have reached the craft, and its reply is on its way back`;default:return null}}function zr(e,t,n){if(t!=="held"&&t!=="modelled")return n;const o=Jt(e,t)??"";return{kind:t,caption:n===null?o:`${n.caption}. ${o}`}}function pt(e){try{return JSON.stringify(e)??""}catch{return null}}const ht="Not connected to the mod. Nothing can be sent",Br=4e3,mt=8e3,Hr=500,be="SENT";function Qt(e,t){return e.gateFor?e.gateFor(t):e.gate}function Ur({handle:e,args:t,commandLabel:n,onConfirmed:o,toggle:a}){const[s,l]=c.useState("idle"),[u,d]=c.useState(null),[f,m]=c.useState(null),[g,$]=c.useState(!1),[v,i]=c.useState(!1),[w,R]=c.useState(0),[x,y]=c.useState(!1),M=c.useRef(null),S=e.streamDown===!0,j=Qt(e,t),A=a?.unavailable??null,G=j?.blocked===!0||A!==null,P=c.useRef(!0),B=c.useRef(0);c.useEffect(()=>(P.current=!0,()=>{P.current=!1}),[]);const H=e.founds,O=c.useRef(null),K=c.useRef(H?.length??0);c.useEffect(()=>{const _=H?.length??0,q=_>K.current;K.current=_;const Z=H?.[_-1],J=O.current;if(!q||!Z||J===null)return;const Q=Z.label!==void 0&&Z.label!==""&&J.label!==void 0&&Z.label!==J.label,X=Z.args!==void 0&&J.args!==void 0&&JSON.stringify(Z.args)!==JSON.stringify(J.args);Q||X||(O.current=null,m(Z),d(null),l("found"))},[H]),c.useEffect(()=>{if(s!=="armed")return;const _=setTimeout(()=>l("idle"),Br);return()=>clearTimeout(_)},[s]),c.useEffect(()=>{if(s!=="refused"&&s!=="lost"&&s!=="found")return;const _=setTimeout(()=>{l("idle"),d(null),O.current=null,m(null)},mt);return()=>clearTimeout(_)},[s]),c.useEffect(()=>{if(!g)return;const _=setTimeout(()=>$(!1),mt);return()=>clearTimeout(_)},[g]),c.useEffect(()=>{!G&&g&&$(!1)},[G,g]),c.useEffect(()=>{if(w===0)return;const _=setTimeout(()=>i(!1),Hr);return()=>clearTimeout(_)},[w]);const D=c.useCallback((_=t,q=n)=>{const Z=B.current+1;B.current=Z,O.current=null,M.current=null,l("idle"),d(null),i(!0),R(Q=>Q+1),y(!0);const J=(Q,X)=>{!P.current||B.current!==Z||(d(X),l(Q),y(!1),Q!=="idle"&&i(!1))};e.send(_,q?{label:q}:void 0).then(Q=>{J("idle",null),o?.(Q)},Q=>{const X=Yn(Q);if(X.kind==="lost"){O.current={args:_,label:q},J("lost",null);return}if(X.kind!=="refused"){J("idle",null);return}J("refused",{errorCode:X.errorCode,reason:X.reason,command:X.command,args:X.args,label:X.label??n,breach:X.breach,detail:X.detail})})},[e,t,n,o]),{hasUnconfirmed:h,hasFailure:I}=Mr(e),E=e.status,C=x&&E?.phase==="in-flight"&&E.accepted!==!0&&(M.current===null||M.current===E.requestId),k=v||C;c.useEffect(()=>{x&&M.current===null&&E?.phase==="in-flight"&&(M.current=E.requestId)},[x,E]);const T=a?e.inFlight.filter(a.rows??(()=>!0)):[],z=a?Fr(k,E,T):null,N=a?Dr(a.state,z):void 0,W=c.useRef(void 0),Y=Or(E,e.inFlight)&&W.current!==void 0?W.current:N,ae=c.useCallback(_=>{if(!S){if(G){$(!0);return}if(a){const q=a.args(Y);if(q===void 0)return;W.current=ft(q),D(q);return}if(s==="refused"||s==="lost"||s==="found"){d(null),m(null),O.current=null,l("idle");return}if(_){if(k)return;if(s!=="armed"){oe.current=pt(t),l("armed");return}}D()}},[s,k,S,G,D,t,a,Y]),oe=c.useRef(null);c.useEffect(()=>{s==="armed"&&pt(t)!==oe.current&&l("idle")},[s,t]);const U=s==="refused"||s==="lost"||s==="found"?s:k?"sent":G?"blocked":s;return{phase:U,isSent:U==="sent",isArmed:U==="armed",isRefused:U==="refused",isLost:U==="lost",isFound:U==="found",isBlocked:U==="blocked",isOffline:S&&U!=="sent",isShowingReason:U==="blocked"&&g,refusalText:u?Sn(u):A!==null?A:U==="blocked"&&j?En({...j,label:j.label??n,args:j.args??t}):null,foundText:f?Rn(f):null,lossText:U==="lost"?Mn({args:t,label:n}):null,sendAs:(_,q)=>{S||(W.current=ft(_),D(_,q))},toggleView:a?{shown:N,on:typeof N=="number"?N>0:N===!0,word:z==="sent"?a.sentWord??be:a.word(N),reserve:[...a.words,a.sentWord??be],confirmation:z,unavailable:A,marking:zr(a.name,z,a.marking??null),sentence:Jt(a.name,z)}:null,hasUnconfirmed:h,hasFailure:I,press:ae}}function Qs({handle:e,args:t,commandLabel:n,label:o,confirmLabel:a,refusedLabel:s="Refused",lostLabel:l="No reply",foundLabel:u="Found",confirmAriaLabel:d,sentAriaLabel:f,blockedAriaLabel:m,pressed:g,variant:$="ghost",tone:v="neutral",icon:i,confirmIcon:w,onPressReady:R,size:x="md",confirmTone:y="go",onConfirmed:M,toggle:S,controller:j,disabled:A,title:G,"aria-label":P,...B}){const H=Ur({handle:e,args:t,commandLabel:n,onConfirmed:M,toggle:S}),{phase:O,isSent:K,isArmed:D,isRefused:h,isLost:I,isFound:E,isBlocked:C,isOffline:k,isShowingReason:T,refusalText:z,foundText:N,lossText:W,toggleView:V,hasUnconfirmed:Y,hasFailure:ae,press:oe}=j??H,U=a!==void 0,_=n?`${n} sent, not yet received`:"Sent, not yet received";c.useEffect(()=>{if(!(!R||A))return R(()=>oe(U)),()=>R(null)},[R,A,oe,U]);const Z=K?be:h?s:I?l:E?u:T?z:D?a:o,J=i!==void 0&&typeof Z=="string",Q=J?r.jsx(Zt,{label:Z,icon:D?w??i:i}):Z,X=i===void 0&&typeof o=="string"&&(a===void 0||typeof a=="string")&&!h&&!I&&!E&&!T,ce=kn()&&e.railed===!0?null:h?z:I?W:E?N:null,fe=g===!0||D||h,ke=Gr({restTone:$==="primary"?v:"neutral",filled:fe,isRefused:h,isFound:E,isArmed:D,confirmTone:y,tone:v});if(V){const{marking:ne,sentence:se}=V,ue=V.confirmation==="held"||V.confirmation==="modelled",ge=k?ht:(ue?null:se)??G;return r.jsxs(r.Fragment,{children:[r.jsx(Te,{text:ge,children:r.jsx(yn,{type:"button",size:x,pressed:V.on,disabled:A||V.unavailable!==null,disabledReason:V.unavailable??void 0,marked:ne,"aria-label":P,"data-command-phase":O,"data-stream":k?"down":void 0,"data-unconfirmed":Y?"true":void 0,"data-failed":ae?"true":void 0,onClick:()=>oe(!1),...B,children:r.jsx(Nr,{shown:V.word,reserve:V.reserve})})}),r.jsx(Qe,{visuallyHidden:!0,children:ue?"":se??""})]})}const b=e.sendStatus,F=b===void 0?G:[G,Lr(b)].filter(Boolean).join(`
`),L=k?[G,ht].filter(Boolean).join(`
`):F;return r.jsxs(r.Fragment,{children:[r.jsx(Te,{text:N??z??(K?_:L),children:r.jsx(Vr,{type:"button",$tone:ke,$variant:$,$fit:J,$size:x,$pressed:fe,$armed:D,$blocked:C,"aria-pressed":g,"aria-disabled":C||k||void 0,disabled:A,"data-unconfirmed":Y?"true":void 0,"data-failed":ae?"true":void 0,"data-command-phase":O,"data-stream":k?"down":void 0,"data-predicted":C?void 0:Pr(b),"data-gate":C?"blocked":Qt(e,t)?.undetermined?"undetermined":void 0,"aria-label":(h?z??void 0:I?W??void 0:E?N??P:C?m??z??P:K?f??_:D?d:P)??(J?Z:void 0),onClick:()=>oe(a!==void 0),"data-rest-label":X?o:void 0,"data-armed-label":X?typeof a=="string"&&a.length>be.length?a:be:void 0,...B,children:X?r.jsx(Xr,{children:Q}):Q})}),r.jsx(Qe,{visuallyHidden:!0,children:ce})]})}function Gr(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const Wr=xn`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,Xr=p.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,Vr=p(Tn)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&te`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Wr} 1s var(--ease-emphasis) infinite;
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
`;function ei({oneWaySeconds:e,delayReading:t,className:n}){const o=Ae("s",e);return r.jsxs(Yr,{className:n,role:"group","aria-label":"Signal delay",children:["one-way ~",r.jsx(le,{value:In(o,t),...o.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const Yr=p.div`
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
`;function ti(e){const t=Cn(),n=c.useId(),o=e!==null;c.useEffect(()=>{if(!(!t||!e))return t.register({id:n,...e})},[t,n,o]),c.useEffect(()=>{!t||!e||t.update(n,e)},[t,n,e])}const en=c.forwardRef(function(t,n){return r.jsx(Kr,{ref:n,type:"range",...t})}),Kr=p.input`
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
`;function qr(e,t,n){return Math.abs(e-t)<n/10}function tn({commanded:e,expected:t,lastSeen:n,step:o}){const a=(u,d)=>u!=null&&d!=null&&qr(u,d,o),s=n??null;return{expected:t!=null&&!a(t,e)&&!a(t,s)?t:null,lastSeen:s,onCommanded:a(s,e)}}function ni({"aria-label":e,...t}){const{commanded:n,expectedCaption:o=Ye,lastSeenCaption:a="last reported",onChange:s,min:l,max:u,step:d,figure:f,disabled:m}=t,[g,$]=c.useState(null);c.useEffect(()=>{if(g===null)return;const R=()=>$(null);return window.addEventListener("pointerup",R),window.addEventListener("pointercancel",R),()=>{window.removeEventListener("pointerup",R),window.removeEventListener("pointercancel",R)}},[g]);const v=g??n,i=tn({...t,commanded:v}),w=R=>`calc(8px + ${(R-l)/(u-l||1)} * (100% - 16px))`;return r.jsxs("div",{style:Zr,children:[r.jsxs("div",{style:Jr,children:[r.jsx(en,{min:l,max:u,step:d,value:v??l,onPointerDown:()=>$(v??l),onChange:R=>{const x=Number(R.target.value);g!==null&&$(x),s(x)},disabled:m,"aria-label":e,style:Qr}),i.expected!==null&&r.jsx(gt,{kind:"modelled",caption:o,left:w(i.expected)}),i.lastSeen!==null&&r.jsx(gt,{kind:"held",caption:a,left:w(i.lastSeen)})]}),r.jsx("span",{style:ta,children:v===null?de:f(v)})]})}function nn({kind:e}){return r.jsx("svg",{"aria-hidden":"true",width:vt,height:vt,viewBox:"0 0 16 16",style:{display:"block",overflow:"visible"},children:e==="held"?r.jsx("rect",{x:"2",y:"2",width:"12",height:"12",style:xt.held}):r.jsx("polygon",{points:"8,1.5 14.8,14 1.2,14",style:xt.modelled})})}function gt({kind:e,caption:t,left:n}){return r.jsxs("span",{"data-role":e==="modelled"?"expected":"last-seen","data-reckoning-mark":e,style:{...ea,left:n},children:[r.jsx(nn,{kind:e}),r.jsx(Ee,{children:t})]})}function Pe({kind:e,caption:t,main:n=!1,children:o}){return r.jsxs("span",{"data-role":e==="modelled"?"expected":"last-seen","data-reckoning-mark":e,"data-held":e==="held"?"":void 0,style:n?ra:aa,children:[r.jsx(nn,{kind:e}),o,r.jsxs(Ee,{"data-unit-currency":"",children:[", ",t]})]})}function ri({lowerLabel:e,raiseLabel:t,unknown:n,...o}){const{commanded:a,expectedCaption:s=Ye,lastSeenCaption:l="last reported",onChange:u,min:d,max:f,step:m,figure:g,disabled:$,disabledReason:v}=o,i=tn(o),w=x=>{a!==null&&u(Math.min(f,Math.max(d,a+x*m)))},R=$||a===null;return r.jsxs(r.Fragment,{children:[r.jsx($e,{variant:"ghost",size:"sm",type:"button","aria-label":e,disabled:R,disabledReason:v,onClick:()=>w(-1),children:"−"}),r.jsxs("span",{style:na,children:[a===null?r.jsx("span",{children:n??de}):i.onCommanded?r.jsx(Pe,{kind:"held",caption:l,main:!0,children:g(a)}):r.jsx("span",{children:g(a)}),i.expected!==null&&r.jsx(Pe,{kind:"modelled",caption:s,children:g(i.expected)}),i.lastSeen!==null&&!i.onCommanded&&r.jsx(Pe,{kind:"held",caption:l,children:g(i.lastSeen)})]}),r.jsx($e,{variant:"ghost",size:"sm",type:"button","aria-label":t,disabled:R,disabledReason:v,onClick:()=>w(1),children:"+"})]})}const Zr={display:"flex",alignItems:"center",gap:"var(--gap-related)"},Jr={flex:1,position:"relative",display:"flex",alignItems:"center"},Qr={width:"100%"},ea={position:"absolute",top:"50%",transform:"translate(-50%, -50%)",display:"flex",pointerEvents:"none"},vt=16,xt={held:{fill:et.held.color,stroke:"var(--color-surface-app)",strokeWidth:3,paintOrder:"stroke"},modelled:{fill:et.modelled.color,stroke:"var(--color-surface-app)",strokeWidth:3,strokeLinejoin:"round",paintOrder:"stroke"}},ta={fontSize:"var(--font-size-compact)",color:"var(--color-text-primary)",fontVariantNumeric:"tabular-nums",minWidth:"36px",textAlign:"right"},na={display:"inline-flex",alignItems:"baseline",justifyContent:"center",gap:"var(--gap-related)",fontVariantNumeric:"tabular-nums"},ra={display:"inline-flex",alignItems:"center",gap:"var(--gap-figure-parts)"},aa={display:"inline-flex",alignItems:"center",gap:"var(--gap-figure-parts)",fontSize:"var(--font-size-caption)",color:"var(--color-text-faint)"};function ai({at:e,atAspect:t,narrow:n,wide:o,children:a,...s}){return r.jsx(sa,{$query:oa(e,t),$narrow:n,$wide:o,...s,children:a})}function oa(e,t){const n=[e===void 0?void 0:`(min-width: ${e}px)`,t===void 0?void 0:`(aspect-ratio >= ${t})`].filter(o=>o!==void 0);return n.length===0?void 0:n.join(" and ")}const sa=p.div`
  ${({$narrow:e})=>e}
  ${({$query:e,$wide:t})=>e===void 0?"":te`
          @container ${e} {
            ${t}
          }
        `}
`;function oi({slot:e,component:t,filter:n}){const o=er(e),a=n?o.filter(n):o;return a.length===0?null:r.jsx(t,{entries:a})}function si({label:e,lead:t,children:n,tone:o="neutral",aligned:a=!1,...s}){const l=c.useContext(rn);return r.jsxs(la,{$aligned:a,$grouped:a&&l,...s,children:[r.jsx(ca,{children:e}),r.jsxs(ua,{$tone:o,children:[t,n]})]})}const rn=c.createContext(!1);function ii({children:e,...t}){return r.jsx(ia,{...t,children:r.jsx(rn.Provider,{value:!0,children:e})})}const Ge="1.5ch",ia=p.div`
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  column-gap: ${Ge};
  container-type: inline-size;
  min-width: 0;

  @container (max-width: 15rem) {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 0.5em;
  }
`,la=p.div`
  align-items: baseline;
  gap: var(--gap-data-line);
  min-width: 0;
  ${({$aligned:e,$grouped:t})=>e?t?te`
        display: grid;
        column-gap: ${Ge};
        grid-column: 1 / -1;
        grid-template-columns: subgrid;
      `:te`
      display: flex;
      flex-wrap: wrap;
      column-gap: ${Ge};
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
`,ca=p.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,ua=p.span`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--gap-data-line);
  font-size: var(--font-size-value);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  color: ${({$tone:e})=>Yt[e]};
`;function da(e,t){return e.value!==void 0?r.jsx(le,{value:e.value(t)??null}):e.render(t)}function li({columns:e,rows:t,sections:n,rowKey:o,caption:a,empty:s,rowDetail:l,className:u}){const d=n??(t?[{id:"",title:null,rows:[...t]}]:[]),f=d.reduce((i,w)=>i+w.rows.length,0),[m,g]=c.useState(null),$=An(m),v=Gt(m);return r.jsxs(fa,{className:u,children:[r.jsx(pa,{ref:g,tabIndex:v,children:r.jsxs(ha,{children:[r.jsx(ma,{children:a}),r.jsx("thead",{children:r.jsx("tr",{children:e.map(i=>r.jsx(ga,{scope:"col",$align:i.align??"start",style:{width:i.width,minWidth:i.minWidth},children:i.header},i.key))})}),f===0&&s!==void 0&&r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx(ya,{colSpan:e.length,children:s})})}),d.map(i=>r.jsxs("tbody",{children:[i.title!==null&&i.title!==void 0&&r.jsx("tr",{children:r.jsx(va,{scope:"rowgroup",colSpan:e.length,children:i.title})}),i.rows.map(w=>{const R=o(w),x=l?.(w),y=x!=null&&x!==!1&&x!=="";return r.jsxs(c.Fragment,{children:[r.jsx(xa,{$hasDetail:y,children:e.map(M=>r.jsx(ba,{as:M.rowHeader?"th":void 0,scope:M.rowHeader?"row":void 0,$align:M.align??"start",children:da(M,w)},M.key))}),y?r.jsx("tr",{children:r.jsx(wa,{colSpan:e.length,children:x})}):null]},R)})]},i.id))]})}),r.jsx(tt,{$position:"left",$visible:$.left}),r.jsx(tt,{$position:"right",$visible:$.right})]})}const fa=p.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,pa=p.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${je}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,ha=p.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,ma=p.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,ga=p.th`
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
`,va=p.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,xa=p.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,ba=p.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,wa=p.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,ya=p.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`;function $a(e){const t=e.reason;switch(t){case"beyond-horizon":return e.resolvesByWaiting?"NOT YET COMPUTED":"CANNOT MODEL";case"under-physics":case"model-inapplicable":case"contested":case"insufficient-history":return"CANNOT MODEL";case"frame-unavailable":return"FRAME UNAVAILABLE";case"input-absent":return null;default:return t}}function ci({declined:e,layout:t="inline"}){return r.jsx(Te,{text:e.note,focusable:!0,children:r.jsx(Bt,{role:"status",layout:t,children:$a(e)??"NO DATA"})})}function ui({label:e,children:t,"aria-label":n,className:o,variant:a="popover",panelHeight:s="cap",chevron:l=!0,asButton:u=!1,buttonSize:d="md",defaultOpen:f=!1}){const[m,g]=c.useState(f),$=c.useId(),v=c.useRef(null),[i,w]=c.useState(null),R=Gt(i),x=a==="inline"&&l,y=typeof e=="function"?e(m):e,M={ref:v,type:"button","aria-expanded":m,"aria-controls":$,"aria-label":n,onClick:()=>g(j=>!j)},S=r.jsxs(r.Fragment,{children:[y,x&&r.jsx(Ma,{$open:m,children:r.jsx(Nn,{size:"var(--icon-size-control)"})})]});return r.jsxs(ja,{className:o,$variant:a,onKeyDown:j=>{j.key==="Escape"&&m&&(g(!1),v.current?.focus())},children:[u?r.jsx(ka,{...M,variant:"ghost",size:d,$inline:a==="inline",children:S}):r.jsx(_a,{...M,$variant:a,$align:a==="inline"&&!l?"end":"between",children:S}),m&&r.jsx(Ra,{ref:w,id:$,role:"group",tabIndex:R,$variant:a,$panelHeight:s,children:t})]})}const ja=p.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,_a=p.button`
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
  ${me}
`,ka=p($e)`
  ${({$inline:e})=>e&&te`
      align-self: flex-end;
    `}
`,Ma=p.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,Ra=p.div`
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
          ${je}
        `:""}
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function di({space:e,...t}){return r.jsx(Sa,{$space:e,...t})}const Sa=p.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${_e[e]} 0`:"0"};
`,Ea=160,Ta=24,Ia="...";function fi({children:e,limit:t=Ea,subject:n,className:o}){const[a,s]=c.useState(!1),l=c.useId(),u=Ca(e,t);if(u===void 0)return r.jsx(r.Fragment,{children:e});const d=a?"Show less":"Show more";return r.jsxs(Aa,{className:o,children:[r.jsx("span",{id:l,children:a?e:`${u}${Ia}`})," ",r.jsx(Na,{type:"button","data-expandable-toggle":"","aria-controls":l,"aria-expanded":a,"aria-label":n===void 0?void 0:`${d} of ${n}`,onClick:()=>s(f=>!f),children:d})]})}function Ca(e,t){if(e.length<=t+Ta)return;const n=e.lastIndexOf(" ",t);return n<=0?e.slice(0,t):e.slice(0,n)}const Aa=p.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,Na=p(Ln)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function pi(e,t){const n=t.map(s=>s==null?null:Kn(e,s.index)),o=n.length>0&&n.every(s=>s?.currency==="exact"),a=n.reduce((s,l)=>l?.currency!=="held"||l.asOfUt===null?s:s===null?l.asOfUt:Math.min(s,l.asOfUt),null);return s=>{const l=o?qn(s):s;return a===null?l:{state:"held",value:l,asOfUt:Ae("ut",a),grade:"held",reckoning:{status:"none"}}}}function La({anchor:e,style:t,children:n,...o}){const[a,s]=c.useState(null),[l,u]=c.useState(null),d=c.useRef(e);d.current=e;const f=c.useCallback(()=>{if(!a)return;const m=d.current,g=typeof m=="function"?m():m;if(!g)return;const $=a.getBoundingClientRect(),v=mr(g,{w:$.width,h:$.height},{w:window.innerWidth,h:window.innerHeight});u(i=>i&&i.left===v.left&&i.top===v.top?i:v)},[a]);return c.useLayoutEffect(()=>{f()}),c.useLayoutEffect(()=>{if(!a)return;const m=typeof ResizeObserver>"u"?null:new ResizeObserver(f);return m?.observe(a),window.addEventListener("resize",f),window.addEventListener("scroll",f,!0),()=>{m?.disconnect(),window.removeEventListener("resize",f),window.removeEventListener("scroll",f,!0)}},[a,f]),typeof document>"u"?null:lr.createPortal(r.jsx(Pa,{ref:s,style:{...t,left:l?.left??0,top:l?.top??0,visibility:l===null?"hidden":t?.visibility},...o,children:n}),document.body)}const Pa=p.div`
  position: fixed;
  z-index: var(--z-dropdown);
`,bt=12,Fa=8,Da=120;function hi({trigger:e,"aria-label":t,children:n}){const[o,a]=c.useState(!1),s=c.useRef(null),l=c.useRef(null),u=c.useRef(null),d=c.useId(),f=c.useCallback(()=>{l.current!==null&&(clearTimeout(l.current),l.current=null)},[]),m=()=>{f(),a(!0)},g=()=>{f(),l.current=setTimeout(()=>a(!1),Da)},$=c.useCallback(()=>{f(),a(!1)},[f]);c.useEffect(()=>f,[f]),c.useEffect(()=>{if(!o)return;const i=w=>{w.key==="Escape"&&(w.stopPropagation(),$())};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[o,$]);const v=()=>{const i=s.current?.getBoundingClientRect();if(!i)return null;const w=u.current?.offsetHeight??0,R=i.top-w-2*bt;return{x:i.left,y:R+bt>=Fa?R:i.bottom}};return r.jsxs(r.Fragment,{children:[r.jsx(Oa,{ref:s,type:"button","aria-label":t,"aria-describedby":o?d:void 0,onPointerEnter:m,onPointerLeave:g,onFocus:m,onBlur:$,children:e}),o&&r.jsx(La,{anchor:v,onPointerEnter:f,onPointerLeave:g,children:r.jsx(za,{ref:u,id:d,role:"tooltip",children:n})})]})}const Oa=p.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${me}
`,za=p.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function mi({gap:e,inset:t=!1,wrap:n=!1,children:o,...a}){return r.jsx(Ba,{$gap:e,$inset:t,$wrap:n,...a,children:o})}const Ba=p.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?_e[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,Ha=4,Ua=80,wt=60,Ga=30,We=24,Wa=32,yt=56,$t=We;function Fe(e,t,n){const{min:o,max:a,step:s}=t,l=e+n*s,u=Math.min(a,Math.max(o,l));if(!Number.isFinite(o))return u;const d=o+Math.round((u-o)/s)*s;return Math.min(a,Math.max(o,d))}function Xa(e){const{value:t,min:n,max:o,step:a,orientation:s="horizontal",onChange:l,format:u,"aria-label":d,label:f=d,disabled:m=!1,width:g,height:$}=e,v=s==="vertical",i=Math.max(We,g??(v?$t:yt)),w=Math.max(We,$??(v?yt:$t)),R=e.mode==="rate",x=n??Number.NEGATIVE_INFINITY,y=o??Number.POSITIVE_INFINITY,M={min:x,max:y,step:a},S=c.useRef(null),j=c.useRef(t);j.current=t;const A=c.useRef(l);A.current=l;const G=(e.mode==="rate"?e.stepsPerSecond:void 0)??Ga,[P,B]=c.useState(0),H=u?u(t):String(Math.round(t)),O=y>x&&Number.isFinite(y-x)?(t-x)/(y-x):.5,K=k=>{m||k!==t&&l(k)};c.useEffect(()=>{if(!R||P===0||m)return;const k=setInterval(()=>{const T=Math.max(x,Math.min(y,j.current+P*G*a*(wt/1e3)));T!==j.current&&A.current(T)},wt);return()=>clearInterval(k)},[R,P,m,a,G,x,y]);const D=k=>{if(m)return;let T=null;switch(k.key){case"ArrowRight":case"ArrowUp":T=Fe(t,M,1);break;case"ArrowLeft":case"ArrowDown":T=Fe(t,M,-1);break;case"Home":if(!Number.isFinite(x))return;T=x;break;case"End":if(!Number.isFinite(y))return;T=y;break;default:return}k.preventDefault(),K(T)},h=k=>s==="vertical"?k.clientY:k.clientX,I=k=>{m||(S.current={start:h(k),startValue:t},k.currentTarget.setPointerCapture(k.pointerId))},E=k=>{if(m||!S.current)return;const T=s==="vertical"?S.current.start-h(k):h(k)-S.current.start;if(R){const N=T/Ua;B(Math.max(-1,Math.min(1,N)));return}const z=T/Ha;K(Fe(S.current.startValue,M,z))},C=k=>{S.current&&(S.current=null,B(0),k.currentTarget.hasPointerCapture(k.pointerId)&&k.currentTarget.releasePointerCapture(k.pointerId))};return r.jsxs(Va,{children:[f!==!1&&r.jsx(Ya,{"aria-hidden":"true",children:f}),r.jsxs(Ka,{role:"slider","aria-label":d,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":n,"aria-valuemax":o,"aria-valuetext":H,"aria-disabled":m||void 0,tabIndex:m?-1:0,$orientation:s,$disabled:m,$width:i,$height:w,$compact:(v?i:w)<Wa,onKeyDown:D,onPointerDown:I,onPointerMove:E,onPointerUp:C,onPointerCancel:C,children:[r.jsx(qa,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-O)*100}%)`}:{transform:`translateX(${(.5-O)*100}%)`},"aria-hidden":"true"}),r.jsx(Za,{$orientation:s,"aria-hidden":"true"}),r.jsx(Ja,{"aria-hidden":"true",children:H})]})]})}const Va=p.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,Ya=p.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Ka=p.div`
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
`,qa=p.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,Za=p.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,Ja=p.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function gi({lock:e}){const t=Zn(e)?Qa(e):e,n=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return r.jsx(Te,{text:n,focusable:!0,children:r.jsxs(to,{role:"status","aria-label":n,children:[r.jsx(Pn,{size:"1.2em"}),r.jsx(no,{children:eo(t)})]})})}function Qa(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...cr(t,tr),locks:t}}function eo(e){const t=[...new Set(e.locks.flatMap(n=>n.missing.map(o=>o.name)))];return t.length>0?t.join(", "):e.reason}const to=p.span`
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
`,no=p.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,jt=1.4,_t=1.7,ro="var(--icon-size-standalone)",ao=1.8,Re="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",kt="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",Mt="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",Rt="M7 4.5V19.5M17 4.5V19.5",pe=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,an={prograde:{colour:"prograde",paths:[Re,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[Re,pe(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",pe(12,11)]},radialOut:{colour:"radial",paths:[kt,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[kt,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",pe(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",pe(12,12)]},relativePlus:{colour:"target",paths:[Re,Mt],dot:[12,12]},relativeMinus:{colour:"target",paths:[Re,Mt,pe(12,12)]},parallelPlus:{colour:"target",paths:[Rt],dot:[12,12]},parallelMinus:{colour:"target",paths:[Rt,pe(12,12)]}},vi=Object.keys(an);function St({shape:e,colour:t,strokeWidth:n,dotRadius:o}){return r.jsxs("g",{fill:"none",stroke:t,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(a=>r.jsx("path",{d:a},a)),e.dot&&r.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:o,fill:t,stroke:"none"})]})}function re(e,t){const n=an[e],o=`var(--color-marker-${n.colour})`,a=c.forwardRef(({size:s=ro,strokeWidth:l=ao,label:u,style:d,...f},m)=>{const g={ref:m,xmlns:"http://www.w3.org/2000/svg",...typeof s=="number"?{width:s,height:s,style:d}:{style:{width:s,height:s,...d}},viewBox:"0 0 24 24","data-marker":e},$=r.jsxs(r.Fragment,{children:[r.jsx(St,{shape:n,colour:"currentColor",strokeWidth:l+jt,dotRadius:_t+jt/2}),r.jsx(St,{shape:n,colour:o,strokeWidth:l,dotRadius:_t})]});return u?r.jsx("svg",{...g,role:"img","aria-label":u,...f,children:$}):r.jsx("svg",{...g,"aria-hidden":"true",...f,children:$})});return a.displayName=t,a}const on=re("prograde","ProgradeIcon"),oo=re("retrograde","RetrogradeIcon"),sn=re("normal","NormalIcon"),so=re("antiNormal","AntiNormalIcon"),io=re("radialOut","RadialOutIcon"),ln=re("radialIn","RadialInIcon"),lo=re("maneuver","ManeuverIcon"),co=re("target","TargetIcon"),uo=re("antiTarget","AntiTargetIcon"),fo=re("relativePlus","RelativePlusIcon"),po=re("relativeMinus","RelativeMinusIcon"),ho=re("parallelPlus","ParallelPlusIcon"),mo=re("parallelMinus","ParallelMinusIcon"),xi=on,bi=ln,wi=sn,yi={prograde:on,retrograde:oo,normal:sn,antiNormal:so,radialOut:io,radialIn:ln,maneuver:lo,target:co,antiTarget:uo,relativePlus:fo,relativeMinus:po,parallelPlus:ho,parallelMinus:mo};function cn(e){const{year:t,day:n,hour:o,minute:a}=qe(),s=Number.isFinite(e)?Math.max(0,e):0,l=Math.floor(s/t)+1,u=s%t,d=Math.floor(u/n)+1,f=u%n;return{year:l,day:d,hour:Math.floor(f/o),minute:Math.floor(f%o/a),second:Math.floor(f%a)}}const go={year:1,day:1,hour:0,minute:0,second:0};function vo(e){const{year:t,day:n,hour:o,minute:a}=qe();return(e.year-1)*t+(e.day-1)*n+e.hour*o+e.minute*a+e.second}function Se(e){return xe(Ae("s",e))}function xo({value:e,onChange:t,label:n,disabled:o,steps:a}){const s=c.useId(),l=`${s}-absent`,u=e!==null&&Number.isFinite(e)?e:null,d=u===null?null:cn(u),f=qe(),m=a??[f.minute,10*f.minute,f.hour,f.day],[g,$]=c.useState(null),v=(i,w,R,x)=>r.jsxs(Ie,{gap:"caption",children:[r.jsx(Ve,{htmlFor:`${s}-${i}`,children:w}),r.jsx(Ut,{id:`${s}-${i}`,type:"number",inputMode:"numeric","aria-label":`${n} ${w}`,"aria-describedby":d===null?l:void 0,min:R,step:1,style:{width:x},disabled:o,placeholder:d===null?de:void 0,value:g?.key===i?g.text:d===null?"":String(d[i]),onBlur:()=>$(null),onChange:y=>{const M=y.target.value;if($({key:i,text:M}),M.trim()==="")return;const S=Number(M);if(!Number.isFinite(S))return;const j=Math.max(R,Math.round(S));t(vo({...d??go,[i]:j}))}})]},i);return r.jsxs(Ie,{gap:"related-dense",role:"group","aria-label":n,children:[r.jsxs(nt,{gap:"related-dense",wrap:!0,justify:"start",children:[v("year","YEAR",1,"5rem"),v("day","DAY",1,"5rem"),v("hour","HR",0,"4rem"),v("minute","MIN",0,"4rem"),v("second","SEC",0,"4rem")]}),d===null&&r.jsx(Ue,{id:l,level:"muted",size:"sm",children:`${de} no ${n.toLowerCase()} to show. Type one to state it.`}),m.length===0?null:r.jsxs(nt,{gap:"related-packed",wrap:!0,justify:"start",children:[r.jsx(Ue,{level:"faint",size:"sm",children:"NUDGE"}),m.map(i=>r.jsx($e,{variant:"ghost",size:"sm",disabled:o||u===null,"aria-label":`${n} earlier by ${Se(i)}`,onClick:()=>u!==null&&t(u-i),children:`-${Se(i)}`},`minus-${i}`)),m.map(i=>r.jsx($e,{variant:"ghost",size:"sm",disabled:o||u===null,"aria-label":`${n} later by ${Se(i)}`,onClick:()=>u!==null&&t(u+i),children:`+${Se(i)}`},`plus-${i}`))]})]})}const bo=p.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function wo({observed:e,modelled:t,write:n}){if(t==null)return null;if(n===void 0){const o=t;return He(e,o,Fn())?r.jsx(Et,{children:r.jsx(le,{value:o})}):null}return He(e,t,Dn(n))?r.jsx(Et,{children:n(t)}):null}function Et({children:e}){return r.jsx(bo,{"data-modelled-alongside":"",children:r.jsx(Ke,{"data-held":"",kind:"modelled",caption:Ye,children:e})})}function $i({value:e}){return r.jsxs(r.Fragment,{children:[r.jsx(le,{value:e}),r.jsx(wo,{observed:e.value,modelled:On(e)})]})}function ji({panZoom:e,label:t,style:n,onMouseMove:o,children:a}){const{style:s,ref:l,...u}=e.viewportProps;return r.jsxs(yo,{...u,ref:l,onMouseMove:o,"aria-label":t,style:{...s,...n},children:[a,r.jsx($o,{role:"status",children:e.hint!==null&&r.jsx(jo,{children:e.hint})})]})}const yo=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  ${je}
`,$o=p.div`
  position: absolute;
  bottom: var(--gap-related);
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-base);
  max-width: calc(100% - 16px);
  pointer-events: none;
`,jo=p.div`
  padding: var(--inset-control);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function _i({filled:e,of:t,tone:n="info",label:o}){const a=`${e} of ${t}`;return r.jsx(_o,{role:"img","aria-label":o===void 0?a:`${o}: ${a}`,"data-pips":"",children:Array.from({length:t},(s,l)=>r.jsx(ko,{$colour:nr[n],$filled:l<e},l))})}const _o=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  flex: none;
`,ko=p.span`
  width: 1em;
  height: 1em;
  border-radius: var(--radius-circle);
  border: 2px solid ${({$colour:e})=>e};
  background: ${({$colour:e,$filled:t})=>t?e:"transparent"};
`;function ki({id:e,label:t,value:n,options:o,onChange:a,hint:s}){const l=o.findIndex(u=>ur(u.choice,n));return r.jsxs(Ht,{children:[r.jsx(Ve,{htmlFor:e,children:t}),r.jsxs(zn,{id:e,value:l===-1?"":String(l),onChange:u=>{const d=o[Number(u.target.value)];d!==void 0&&a(d.choice)},children:[l===-1&&r.jsx("option",{value:"",disabled:!0}),o.map((u,d)=>r.jsx("option",{value:d,children:u.label},`${u.choice.kind}-${u.choice.bodyIndex??"none"}`))]}),s!==void 0&&r.jsx(Bn,{children:s})]})}function Mo({as:e,interactive:t=!1,selected:n=!1,wrap:o=!1,nested:a=!1,type:s,children:l,...u}){return r.jsx(So,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:n,$wrap:o,$nested:a,...u,children:l})}const un=p.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,Ro="min(12ch, 100%)",So=p.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-row);
  font-size: var(--font-size-compact);
  padding: var(--inset-row);
  ${({$wrap:e})=>e?`
  flex-wrap: wrap;
  row-gap: var(--gap-row-wrap);

  & > ${un} {
    min-width: ${Ro};
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

  ${je}
`:""}
  ${({$interactive:e,$selected:t})=>e&&t?`
  ${Kt("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}
`,Mi=Object.assign(Mo,{Name:un}),Eo=65,dn=38,To=72,Io=To-dn,fn=55,Xe=137.508,Co=10,Ao=1.5,No=64,Lo=60,Po=241,Fo=Xe-Math.floor(Xe),we=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function pn(e,t){const n=Math.abs(e-t)%360;return n>180?360-n:n}const Do=we.map((e,t)=>{let n=1/0;for(let a=0;a<we.length;a++)a!==t&&(n=Math.min(n,pn(e.hue,we[a].hue)));const o=n/2;return Math.max(0,Math.min(Co,o-Ao))}),Oo=we.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:Do[t]}));function zo(e,t=we){return t.find(n=>n.aliases.some(o=>e.includes(o)))}function hn(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Tt(e,t){return(e%t+t)%t}function Bo(e){const n=hn(`light:${e}`)/4294967295;return dn+n*Io}function Ho(e){const t=zo(e);if(!t)return;const n=t.aliases.length===1?fn:Bo(e);return{hue:t.hue,lightness:n}}function Uo(e){return Oo.some(({centre:t,radius:n})=>pn(e,t)<n)}function Go(e){const t=hn(e);let n=Tt(t*Xe,360);const o=Lo+(t>>>8)%Po+Fo;let a=0;for(;Uo(n)&&a<No;)n=Tt(n+o,360),a++;return n}function Ri(e){const t=e.trim().toLowerCase(),n=Ho(t),o=n?.hue??Go(t),a=n?.lightness??fn;return`hsl(${Math.round(o)}deg ${Eo}% ${Math.round(a)}%)`}function Si({selected:e,gap:t="caption",layout:n="stack",selectedLook:o="fill",children:a,...s}){return r.jsx(Wo,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:n,$look:o,...s,children:a})}const Wo=p.button`
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
  gap: ${({$gap:e})=>_e[e]};
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

  ${me}
`;function Xo({label:e,children:t,detail:n,tone:o="neutral",...a}){return r.jsxs(Vo,{...a,children:[r.jsx(Yo,{children:e}),r.jsx(Ko,{$tone:o,children:t}),n!=null&&r.jsx(qo,{children:n})]})}const Vo=p.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,Yo=p.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,Ko=p.dd`
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
`,qo=p.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function Ei({slot:e}){const t=rr(e);return t.length===0?null:r.jsx(r.Fragment,{children:t.map(n=>r.jsx(Xo,{label:n.label,detail:n.detail,tone:n.tone??"neutral",children:r.jsx(Zo,{entry:n})},n.id))})}function Zo({entry:e}){if(e.value!==void 0)return r.jsx(le,{value:e.value});if(e.text===void 0)return r.jsx(ar,{});const t=Hn(e.held);return t===null?r.jsx(r.Fragment,{children:e.text}):r.jsx(Ke,{kind:t.kind,caption:t.caption,children:e.text})}const Jo=12,he=12,Qo=12,It=52,ee=10,De=4;function es(e,t,n){const o=l=>e.map(u=>Number.parseFloat(l.mark(u).replace(/[^\d.-]/g,""))),a=o(n(De)),s=l=>o(l).every((u,d)=>u===a[d]);if(s(t))return t;for(let l=0;l<De;l++){const u=n(l);if(s(u))return u}return n(De)}function Ti({labelSide:e="left",value:t,min:n,max:o,width:a=92,height:s=220,fillHeight:l=!1,tickStep:u,zones:d,markers:f,groundLine:m,seaLevel:g,format:$,"aria-label":v}){const i=c.useRef(null),[w,R]=c.useState(s);c.useEffect(()=>{if(!l)return;const b=i.current;if(!b)return;const F=()=>{const ne=b.clientHeight;ne>0&&R(ne)};F();const L=new ResizeObserver(F);return L.observe(b),()=>L.disconnect()},[l]);const x=l?w:s,y=Wt(t),{shown:M,held:S,caption:j,band:A}=y,{anchor:G,tip:P}=Un(j),B=M?.magnitude??Number.NaN,H=Number.isFinite(B)?M:null,O=n.magnitude,K=o.magnitude,D=K-O,h=Number.isFinite(B)?B:O,I=D>0?Math.max(O,Math.min(K,h)):O,E=H!=null,C=lt(o,{format:$}),k=H==null?de:ct({magnitude:h,unit:H.unit},{format:C.rung}),T=b=>ct(b),z=[...(f??[]).flatMap(b=>b.label===void 0?[]:[b.bounds===void 0?`${b.label} ${T(b.value)}`:`${b.label} ${T(b.value)}, between ${T(b.bounds.lo)} and ${T(b.bounds.hi)}`]),...(d??[]).flatMap(b=>b.label===void 0?[]:[`${b.label} zone ${T(b.from.min(b.to))} to ${T(b.from.max(b.to))}`]),...m===void 0?[]:[`ground ${T(m)}`],...g===void 0?[]:[`sea level ${T(g)}`]],N=H==null||A===null?null:Jn(A,H.unit)??null,W=Math.max(0,x-he-Qo),V=b=>{if(!(D>0))return he+W;const F=Math.max(0,Math.min(1,(b-O)/D));return he+(1-F)*W},Y=b=>V(b.magnitude),ae=he,oe=he+W,U=e==="right",_=U?a-It-ee:It,q=U?_+ee+6:_-6,Z=U?"start":"end",J=(b,F)=>{const L=Y(b),ne=b.greaterThan(o)?-1:b.lessThan(n)?1:0,se=_-4,ue=_+ee+4,ge=_+ee/2;return r.jsxs("g",{"data-level":F?"sea":"ground",children:[r.jsx("line",{x1:se,y1:L,x2:ue,y2:L,stroke:F?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:F?1.5:2,strokeDasharray:F?"3 2":void 0}),ne!==0&&r.jsx("polygon",{"data-off-scale":"true",points:`${ge-4},${L-ne*2} ${ge+4},${L-ne*2} ${ge},${L+ne*4}`,fill:F?"var(--color-info-mark)":"var(--color-text-primary)"})]})},Q=[],X=u?.magnitude??0;if(X>0&&D>0){const b=Math.ceil(O/X),F=Math.floor(K/X+1e-9);for(let L=b;L<=F;L++)Q.push(L===0?0:L*X)}const Ze=es(Q,C,b=>lt(o,{format:$,decimals:b})),ce=V(I),fe=b=>W>0?(he+W-b)/W:0,ke=N!==null&&He(fe(ce),[fe(Y(N.lo)),fe(Y(N.hi))],Gn())?N:null;return r.jsxs(ts,{ref:i,...Vn(y),...G,...E?{role:"meter","aria-label":ot(v,j),...at(j),"aria-valuenow":I,"aria-valuemin":O,"aria-valuemax":K,"aria-valuetext":z.length===0?k:`${k}; ${z.join("; ")}`}:{role:"img","aria-label":ot(`${v}: ${k}`,j),...at(j)},style:l?{height:"100%"}:void 0,children:[r.jsxs("svg",{width:a,height:x,viewBox:`0 0 ${a} ${x}`,"aria-hidden":"true",style:l?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[r.jsx("rect",{x:_,y:ae,width:ee,height:W,rx:2,fill:"var(--color-surface-raised)"}),d?.map(b=>{const F=Y(b.from.max(b.to)),L=Y(b.from.min(b.to)),ne=Math.max(0,L-F);return r.jsx("g",{children:r.jsx("rect",{x:_,y:F,width:ee,height:ne,fill:b.color??"var(--color-warn-mark)",opacity:.55})},`zone-${L}-${F}-${b.label??""}`)}),g!==void 0&&D>0&&J(g,!0),m!==void 0&&D>0&&J(m,!1),Q.map(b=>{const F=V(b),L=E&&Math.abs(F-Math.max(ae+4,Math.min(oe-4,ce)))<Jo;return r.jsxs("g",{children:[r.jsx("line",{x1:U?_+ee+4:_-4,y1:F,x2:U?_+ee:_,y2:F,stroke:"var(--color-border-subtle)",strokeWidth:1}),!L&&r.jsx("text",{x:q,y:F,textAnchor:Z,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:Ze.mark(b)})]},`tick-${b}`)}),f?.map(b=>{const{bounds:F}=b,L=Y(b.value),ne=b.color??"var(--color-accent-fg)";return r.jsxs("g",{"data-marker":b.label,children:[r.jsx("line",{x1:_,y1:L,x2:_+ee,y2:L,stroke:ne,strokeWidth:2,strokeDasharray:"2 2"}),r.jsx("polygon",{points:U?`${_},${L} ${_-5},${L-3} ${_-5},${L+3}`:`${_+ee},${L} ${_+ee+5},${L-3} ${_+ee+5},${L+3}`,fill:"none",stroke:ne,strokeWidth:1.5}),F!==void 0&&["lo","hi"].map(se=>{const ue=Y(F[se]);return r.jsx(rt,{end:se,x1:_,y1:ue,x2:_+ee,y2:ue},se)})]},`marker-${L}-${b.label??""}`)}),ke!==null&&["lo","hi"].map(b=>{const F=Y(ke[b]);return r.jsx(rt,{end:b,x1:_,y1:F,x2:_+ee,y2:F},b)}),E&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:_-6,y1:ce,x2:_+ee+6,y2:ce,stroke:"var(--color-accent-fg)",strokeWidth:2}),r.jsxs("text",{x:U?q+2:q-2,y:Math.max(ae+4,Math.min(oe-4,ce)),textAnchor:Z,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[C.mark(h),S&&r.jsx(Wn,{size:5})]})]}),!E&&r.jsx(Xn,{x:U?q+8:q-8,y:ae+W/2,size:11,children:de}),C.symbol!==""&&r.jsx("text",{x:_+ee/2,y:ae-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:C.symbol})]}),P]})}const ts=p.div`
  display: block;
  max-width: 100%;
`,Ii=p.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,ns=112;function rs(e,t){try{return Ae(e,1).in(t).magnitude}catch{return Number.NaN}}function as(e,t){let n=e;return t.map((o,a)=>{if(!Number.isFinite(o)||o===0)return 0;const s=a===t.length-1?n/o:Math.trunc(n/o);return n-=s*o,s})}function Ci({value:e,unit:t,onChange:n,label:o,rungs:a,range:s,rate:l,disabled:u}){const d=c.useId(),{shown:f,held:m,caption:g}=Wt(e),$=m?r.jsx(Ke,{caption:g,children:o}):o,v=s,i=f?f.magnitude:Number.NaN,[w,R]=c.useState({}),x=j=>w[j]??null,y=(j,A)=>R(G=>({...G,[j]:A})),M=l?r.jsxs(Ie,{gap:"related-packed",children:[r.jsx(Xa,{mode:"rate","aria-label":`${o} rate`,value:i,step:l.step,stepsPerSecond:l.stepsPerSecond,disabled:u||!Number.isFinite(i),format:Oe(t)?ss:void 0,width:Oe(t)?ns:void 0,onChange:j=>n(ve(t,j))}),r.jsx(Ue,{level:"faint",size:"sm",children:`${l.step} ${os(t)} / notch`})]}):null;if(Oe(t))return r.jsxs(Be,{children:[r.jsx(At,{"aria-hidden":"true",children:$}),r.jsxs(Ie,{gap:"related-dense",children:[r.jsx(xo,{label:m&&g!==null?`${o}, ${g}`:o,value:Number.isFinite(i)?i:null,disabled:u,steps:l?[]:void 0,onChange:j=>n(ve(t,j))}),M]})]});if(a&&a.length>0){const j=a.map(P=>rs(String(P),t)),A=as(i,j),G=(P,B)=>{const H=ze(B);if(H===void 0){y(P,{text:B,against:A[P]});return}const O=A.map(D=>Number.isFinite(D)?D:0);O[P]=H;const K=O.reduce((D,h,I)=>Number.isFinite(j[I])?D+h*j[I]:D,0);y(P,{text:B,against:H}),n(ve(t,K))};return r.jsxs(Be,{children:[r.jsx(At,{id:`${d}-label`,children:$}),r.jsx(us,{role:"group","aria-labelledby":`${d}-label`,children:a.map((P,B)=>r.jsxs(ds,{children:[r.jsx(fs,{type:"number",disabled:u,"aria-label":`${o} ${String(P)}`,value:Ct(x(B),A[B]),onChange:H=>G(B,H.target.value)}),r.jsx(Nt,{"aria-hidden":"true",children:String(P)})]},String(P)))}),M]})}const S=j=>{const A=ze(j);y(0,{text:j,against:A??i}),A!==void 0&&n(ve(t,A))};return r.jsxs(Be,{children:[r.jsx(ls,{htmlFor:d,children:$}),r.jsxs(cs,{children:[r.jsx(gn,{id:d,type:"number",disabled:u,min:v?.min,max:v?.max,step:v?.step,value:Ct(x(0),i),onChange:j=>S(j.target.value)}),r.jsx(Nt,{"aria-hidden":"true",children:t})]}),v?r.jsx(en,{disabled:u,"aria-label":`${o} slider`,min:v.min,max:v.max,step:v.step??(v.max-v.min)/100,value:Number.isFinite(i)?i:v.min,onChange:j=>n(ve(t,ze(j.target.value)??v.min))}):null,M]})}function Ct(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(is(t)):""}function os(e){return Xt(e)??e}function Oe(e){return Xt(e)==="s"}function ss(e){if(!Number.isFinite(e))return"";const{day:t,hour:n,minute:o,second:a}=cn(e),s=l=>String(l).padStart(2,"0");return`D${t} ${s(n)}:${s(o)}:${s(a)}`}function ze(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function is(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const Be=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,mn=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,ls=p.label`
  ${mn}
`,At=p.span`
  ${mn}
`,cs=p.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,gn=p.input`
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
`,Nt=p.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,us=p.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,ds=p.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,fs=p(gn)`
  width: 4.5em;
`,ps=200;function Lt(e={}){const t=e.quietMs??ps;let n=null,o=Number.NEGATIVE_INFINITY,a=!0;return{wheel(s,l){return(n===null||s-o>t)&&(n=l&&a?"diagram":"page"),o=s,n},pageScrolled(){a=!1},pointerMovedInside(){a=!0},yieldToPage(){n="page"},get owner(){return n}}}const hs=16,ms=400,Pt=120,gs=Math.log(1.15)/100,vs=.01;function xs(e,t,n){const o=t===1?e*hs:t===2?e*ms:e,a=Math.max(-Pt,Math.min(Pt,o)),s=n&&Math.abs(o)<40?vs:gs;return Math.exp(-a*s)}function bs(e,t,n={}){const{quietMs:o}=n,a=c.useRef(Lt({quietMs:o}));c.useEffect(()=>{a.current=Lt({quietMs:o})},[o]);const[s,l]=c.useState(null);c.useEffect(()=>{e.current!==s&&l(e.current)}),c.useEffect(()=>{if(!s||!t)return;const u=i=>i instanceof Node&&s.contains(i);let d=null;const f=(i,w)=>d!==null&&(Math.abs(i-d.x)>=1||Math.abs(w-d.y)>=1),m=i=>{d={x:i.clientX,y:i.clientY},!(i.ctrlKey||i.metaKey)&&a.current.wheel(performance.now(),u(i.target))},g=i=>{const w=f(i.clientX,i.clientY);d={x:i.clientX,y:i.clientY},w&&u(i.target)&&a.current.pointerMovedInside()},$=i=>{const w=i.target;(w===document||w instanceof Node&&w.contains(s))&&a.current.pageScrolled()},v=i=>{const w=i.ctrlKey||i.metaKey;if(!w&&a.current.owner!=="diagram")return;const R=s.getBoundingClientRect(),x=xs(i.deltaY,i.deltaMode,w);if(t(x,i.clientX-R.left,i.clientY-R.top)===!1&&!w){a.current.yieldToPage();return}i.preventDefault()};return window.addEventListener("wheel",m,{capture:!0,passive:!0}),window.addEventListener("pointermove",g,{capture:!0,passive:!0}),window.addEventListener("scroll",$,{capture:!0,passive:!0}),s.addEventListener("wheel",v,{passive:!1}),()=>{window.removeEventListener("wheel",m,{capture:!0}),window.removeEventListener("pointermove",g,{capture:!0}),window.removeEventListener("scroll",$,{capture:!0}),s.removeEventListener("wheel",v)}},[s,t])}const ws="Arrow keys pan, + and - zoom, 0 resets",ys=.15,Ft=1.25,$s={zoom:1,panX:0,panY:0};function Ai(e={}){const{home:t=$s,zoomAbout:n="pointer",panThreshold:o=3,enabled:a=!0}=e,[s,l]=c.useState(t),u=c.useRef({camera:s,options:e,home:t});u.current={camera:s,options:e,home:t};const d=c.useRef(null),f=e.elementRef??d,m=c.useCallback(()=>{const h=f.current?.getBoundingClientRect();return{w:h?.width??0,h:h?.height??0}},[]),g=c.useCallback(h=>{const{constrain:I}=u.current.options,E=m(),C=I&&E.w>0&&E.h>0?I(h,E):h;return u.current.camera=C,l(C),C},[m]),$=c.useCallback(h=>{g(typeof h=="function"?h(u.current.camera):h)},[g]),v=c.useCallback((h,I,E)=>{const C=u.current.camera,{minZoom:k=.1,maxZoom:T=50}=u.current.options,z=typeof k=="function"?k(C):k,N=Math.max(Math.min(z,C.zoom),Math.min(Math.max(T,C.zoom),C.zoom*h));if(N===C.zoom)return!1;const{w:W,h:V}=m();if(n==="centre")g({...C,zoom:N});else{const Y=(I-W/2)/C.zoom+C.panX,ae=(E-V/2)/C.zoom+C.panY;g({zoom:N,panX:Y-(I-W/2)/N,panY:ae-(E-V/2)/N})}return u.current.options.onManualMove?.("zoom"),!0},[g,m,n]);bs(f,c.useMemo(()=>a?v:null,[a,v]));const i=c.useCallback(()=>{u.current.options.onManualMove?.("reset"),g(u.current.home)},[g]),w=c.useCallback(h=>{const{w:I,h:E}=m();v(h,I/2,E/2)},[m,v]),[R,x]=c.useState(null),y=c.useRef(new Map),M=c.useRef(null),S=c.useRef(null),j=c.useRef(null),A=c.useRef(!1),[G,P]=c.useState(!1),B=c.useCallback(h=>{if(u.current.options.enabled!==!1&&!(h.pointerType==="mouse"&&h.button!==0)){if(y.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),y.current.size===2){const[I,E]=[...y.current.values()];M.current=null,S.current=Math.hypot(I.x-E.x,I.y-E.y);return}A.current=!1,j.current={x:h.clientX,y:h.clientY},M.current={x:h.clientX,y:h.clientY},S.current=null}},[]),H=c.useCallback(h=>{if(!y.current.has(h.pointerId))return;if(h.pointerType==="mouse"&&h.buttons===0){y.current.delete(h.pointerId),y.current.size===0&&(M.current=null,j.current=null,S.current=null,P(!1));return}if(y.current.set(h.pointerId,{x:h.clientX,y:h.clientY}),y.current.size>=2){const[z,N]=[...y.current.values()],W=Math.hypot(z.x-N.x,z.y-N.y),V=S.current;if(S.current=W,V===null||V===0)return;const Y=f.current?.getBoundingClientRect();A.current=!0,v(W/V,(z.x+N.x)/2-(Y?.left??0),(z.y+N.y)/2-(Y?.top??0));return}const I=j.current,E=M.current;if(!I||!E||!A.current&&Math.hypot(h.clientX-I.x,h.clientY-I.y)<o)return;A.current||(A.current=!0,P(!0),h.currentTarget.setPointerCapture?.(h.pointerId));const C=h.clientX-E.x,k=h.clientY-E.y;M.current={x:h.clientX,y:h.clientY};const T=u.current.camera;u.current.options.onManualMove?.("pan"),g({...T,panX:T.panX-C/T.zoom,panY:T.panY-k/T.zoom})},[g,o,v]),O=c.useCallback(h=>{if(y.current.delete(h.pointerId),h.currentTarget.releasePointerCapture?.(h.pointerId),y.current.size===1){const[I]=[...y.current.values()];M.current={...I},j.current={...I},S.current=null;return}y.current.size===0&&(M.current=null,j.current=null,S.current=null,P(!1))},[]),K=c.useCallback(h=>{if(u.current.options.enabled===!1||h.target!==h.currentTarget||h.ctrlKey||h.metaKey||h.altKey)return;const I=u.current.camera,{w:E,h:C}=m(),k=(T,z)=>{const N=(T==="panX"?E:C)/I.zoom;u.current.options.onManualMove?.("pan"),g({...I,[T]:I[T]+z*N*ys})};switch(h.key){case"ArrowLeft":k("panX",-1);break;case"ArrowRight":k("panX",1);break;case"ArrowUp":k("panY",-1);break;case"ArrowDown":k("panY",1);break;case"+":case"=":w(Ft);break;case"-":case"_":w(1/Ft);break;case"0":i();break;default:return}h.preventDefault()},[g,i,m,w]);return{camera:s,setCamera:$,reset:i,zoomBy:w,viewportProps:{ref:f,tabIndex:0,role:"group",onPointerDown:B,onPointerMove:H,onPointerUp:O,onPointerCancel:O,onFocus:h=>{h.target===h.currentTarget&&h.currentTarget.matches(":focus-visible")&&x(ws)},onBlur:()=>x(null),onKeyDown:K,style:{touchAction:"none",cursor:G?"grabbing":"grab"}},didPan:()=>A.current,isDragging:G,hint:R}}const Dt="(prefers-reduced-motion: reduce)";function Ni(){const[e,t]=c.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(Dt).matches);return c.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const n=window.matchMedia(Dt),o=()=>t(n.matches);return o(),n.addEventListener("change",o),()=>n.removeEventListener("change",o)},[]),e}const vn=c.createContext(null);function Li({widget:e,scope:t,children:n}){const o=c.useMemo(()=>({widget:e,scope:t}),[e,t]);return r.jsx(vn.Provider,{value:o,children:n})}function Pi(e){const t=c.useContext(vn);if(!(!t||t.widget!==e))return t.scope}function Fi(e){if(e.length===0)return[];const t=[[e[0]]];for(let n=1;n<e.length;n++)ks(e[n-1],e[n])?t.push([e[n]]):t[t.length-1].push(e[n]);return t}function Di(e,t,n,o){if(e.length===0||!(t>0))return[];const a=[e[0].x];let s=a[0],l=a[0];for(let u=1;u<e.length;u++){const d=a[u-1],f=d+_s(e[u].x-d,t);a.push(f),f<s&&(s=f),f>l&&(l=f)}return js(s,l,n,o,t).map(u=>e.map((d,f)=>({...d,x:a[f]+u})))}function js(e,t,n,o,a){if(!(a>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((n-t)/a),l=Math.floor((o-e)/a),u=[];for(let d=s;d<=l;d++)u.push(d*a+0);return u}function _s(e,t){const n=t/2;return((e+n)%t+t)%t-n}function ks(e,t){const n=Ot(e),o=Ot(t),a=Rs(n,o);if(a===0)return!1;const s=zt(Ms(n,o));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=a)return!1;const u=[0,0,e.lat+t.lat>=0?1:-1],d=zt(Ss(u,s));if(d===null)return!1;const f=ye(n,o);return ye(n,d)>f&&ye(o,d)>f}function Ot({lat:e,lon:t}){const n=e*Math.PI/180,o=t*Math.PI/180,a=Math.cos(n);return[a*Math.cos(o),a*Math.sin(o),Math.sin(n)]}function ye(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Ms(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Rs(e,t){return Math.acos(Math.max(-1,Math.min(1,ye(e,t))))}function Ss(e,t){const n=ye(e,t);return[e[0]-n*t[0],e[1]-n*t[1],e[2]-n*t[2]]}function zt(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{Hr as $,Br as A,Ys as B,Zs as C,si as D,fi as E,Js as F,ho as G,hi as H,gr as I,Xa as J,_i as K,gi as L,yi as M,sn as N,on as O,ji as P,ln as Q,mt as R,io as S,ki as T,$i as U,po as V,fo as W,Nr as X,oo as Y,Mi as Z,un as _,Ws as a,ht as a0,Si as a1,ei as a2,en as a3,Xo as a4,Ei as a5,xi as a6,Ti as a7,co as a8,Ii as a9,Ci as aa,Li as ab,mr as ac,Mr as ad,tn as ae,Lt as af,$a as ag,Lr as ah,pi as ai,Pr as aj,js as ak,Ri as al,Fi as am,Ur as an,Ai as ao,Ni as ap,ti as aq,bs as ar,Pi as as,vo as at,xs as au,Di as av,so as b,uo as c,Xs as d,Vs as e,wi as f,Ks as g,qs as h,Qs as i,ni as j,ri as k,ai as l,oi as m,ii as n,li as o,ci as p,ui as q,di as r,La as s,bi as t,mi as u,vi as v,lo as w,xo as x,wo as y,mo as z};
