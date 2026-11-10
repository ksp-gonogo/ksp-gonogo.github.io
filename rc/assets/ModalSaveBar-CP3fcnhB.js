import{j as a}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import y,{css as F,createGlobalStyle as Sl,keyframes as Bo}from"./ext-styled-components-DAuodqsN.js";import{r as p,R as wn}from"./ext-react-C0MU9AHG.js";import{h as ea,l as Ml}from"./logger-2_QM1wvD.js";import{cl as xt,aP as Rt,cp as ta,b9 as Nr,cI as on,cN as Pn,aK as Ye,b4 as na,m as jl}from"./view-clock-formula-nrcILacK.js";import{aW as El}from"./ksp-enum-names-DnDvHV3m.js";import{c as Tn,t as Al,d as oa,M as Rl,G as Tl}from"./screen-C--ukhnW.js";import{a1 as Cl,a2 as Il,U as je,i as Ro,h as ra,g as xe,j as De,r as Ft,a3 as Wo,N as On,a4 as Ll,k as Pl,K as Uo,a5 as Xo,a6 as Ol,a7 as Nl,a8 as Fl,a9 as sa,aa as Dl,x as Fr,ab as zl,ac as Hl,ad as Bl,ae as Wl,af as Ul,Z as Ct,B as Xl,e as aa,_ as Gl,T as cn,H as ia,ag as Yl,S as la,ah as ca,O as Dr,A as kn,f as zr,ai as Hr,s as fo,aj as ql,ak as Vl,u as Kl}from"./contributionsRead-DsV6K_C2.js";import{gridToPixels as Zl}from"./ext-ui-kit-grid-CYQFMmYG.js";import{r as Ql}from"./ext-react-dom-DCF8ZnaJ.js";import{bl as Jl}from"./lagrange-Cs2miMYP.js";import{R as ec}from"./use-transmissions-C6oNEXS8.js";const Sx={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function Mx({children:e,layout:t="inline",...n}){return a.jsx(nc,{$layout:t,...n,children:e})}const tc={inline:F``,fill:F`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},nc=y.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>tc[e]}
`;function oc(){const e=Il();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const qn=Cl(oc),jx=qn.Context;function Ex({children:e}){return a.jsx(qn.Provider,{children:a.jsx(rc,{children:e})})}function rc({children:e}){const t=qn.useStore();return a.jsx(ec.Provider,{value:t,children:e})}const Go=qn.useStore,sc=()=>()=>{},ac=[],Br=()=>ac;function ic(){const e=Go();return p.useSyncExternalStore(e?e.subscribe:sc,e?e.getActiveHandles:Br,e?e.getActiveHandles:Br)}const en=new WeakMap,To=new WeakMap;function Wr(e){for(const t of To.get(e)??[])t()}function lc(e){return en.set(e,(en.get(e)??0)+1),Wr(e),()=>{en.set(e,(en.get(e)??1)-1),Wr(e)}}function da(){const e=Go();return p.useSyncExternalStore(t=>{if(!e)return()=>{};const n=To.get(e)??new Set;return To.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(en.get(e)??0)>0,()=>!1)}const po=e=>je(e),rt={contact:{"in-contact":()=>"In contact","loss-in":e=>`LOS in ${po(e)}`,"back-in":e=>`No contact, back in ${po(e)}`,none:e=>e==="unpowered"?"No contact, no electric charge aboard":"No contact"},delay:{held:e=>`${po(e)} signal delay`,absent:()=>"no signal path"},arrival:{expected:"Expected to arrive","likely-lost":"Likely lost"},sends:{now:()=>"Sends now",held:(e,t)=>t===void 0?`Held until ${je(e)}`:`Held until ${je(e)}, arrives ${je(t)}`}};function ua(e){const{contact:t}=e,n=t.kind==="loss-in"||t.kind==="back-in"?rt.contact[t.kind](t.seconds):t.kind==="none"?rt.contact.none(t.reason):rt.contact[t.kind](),o=e.signalDelay===void 0?rt.delay.absent():rt.delay.held(e.signalDelay),r=e.sends==="now"&&e.arrival==="expected"?rt.sends.now():e.sends==="held"&&e.heldUntilUt!==void 0?rt.sends.held(e.heldUntilUt,e.arrivesUt):rt.arrival[e.arrival];return`${n} · ${o}
${r}`}function ha(e){if(e!==void 0)return e.arrival==="likely-lost"?"at-risk":e.sends==="held"?"held":void 0}function st(e,t){return je({magnitude:e,unit:t})}function cc(e,t){const{limit:n,actual:o,unit:r}=t;if(n==null||o==null)return null;switch(e){case Rt.LimitReached:{const s=dc(t.quantity),l=`${st(o,r)} of ${st(n,r)}`;return t.facilityName?`the ${t.facilityName} holds ${l} ${s}`:`it holds ${l} ${s}`}case Rt.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${st(o,r)} of ${st(n,r)}`;case Rt.InsufficientFunds:return`it costs ${st(Math.trunc(o),r)} and funds are ${st(Math.trunc(n),r)}`;case Rt.InsufficientScience:return`it costs ${st(o,r)} and science is ${st(n,r)}`;default:return null}}function dc(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function Ur(e){return e&&ta(e)?.sentence||null}function uc(e){const t=e?.trim().replace(/\.$/,"");return t||null}function It(e){return Yo(e,"refused")}function Xr(e){return Yo(e,"unavailable")}function Gr(e){return Yo(e,"likely to be refused")}function Yo(e,t){const n=xt(e),o=(e.breach?cc(e.errorCode,e.breach):null)??uc(e.detail)??Ur(e.reason)??Ur(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function qo(e){const n=xt(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":hc(It({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function hc(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function Vo(e){return`${xt(e)||e.command||"The command"}: no reply. May have run.`}function fc(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}function pc(e,t){const n=e===void 0||e.phase==="in-flight"||e.phase==="idle"?null:e.requestId,o=r=>(r.dispatchedAt??0)+(r.oneWaySeconds??0);return t.filter(r=>r.id!==n&&(r.predictedPhase==="awaiting-reply"||r.predictedPhase==="due")).sort((r,s)=>o(r)-o(s))}function fa(e,t,n,o){let r=e,s=!1;for(const l of pc(t,n)){if(l.args===void 0){if(typeof l.commandedValue=="number"){r=l.commandedValue!==0,s=!0;continue}typeof r=="boolean"&&(r=!r,s=!0);continue}const i=Co(l.args),c=i!==void 0?i:o?.(r,l.args);c!==void 0&&(s=!0,r=c)}return s?r:void 0}function mc(e,t,n,o=void 0,r){return e?"sent":n.some(s=>s.held===!0)?"held":fa(o,t,n,r)===void 0?null:"modelled"}function gc(e,t,n,o=[],r){return t!=="modelled"?e:fa(e,n,o,r)??e}function vc(e,t){return e===void 0||e.phase==="idle"?!1:e.phase==="in-flight"?!0:e.phase!=="confirmed"&&e.phase!=="found"?!1:t.some(n=>n.id===e.requestId)}function Co(e){if(e===null||typeof e!="object")return;const t="state"in e?e.state:"enabled"in e?e.enabled:void 0;return typeof t=="boolean"?t:void 0}function pa(e,t){switch(t){case"held":return`${e} held until contact returns`;case"sent":return`${e} sent, not yet received`;case"modelled":return`${e} shown as predicted: the command should have reached the craft, and its reply is on its way back`;default:return null}}function xc(e,t,n){if(t!=="held"&&t!=="modelled")return n;const o=pa(e,t)??"";return{kind:t,caption:n===null?o:`${n.caption}. ${o}`}}const bc=5e3;function Yr(e){try{return JSON.stringify(e)??""}catch{return null}}const Ko="Not connected to the mod. Nothing can be sent",yc=4e3,wc=8e3,kc=500,Lt="SENT",ma="Refused",ga="No reply",va="Found";function xa(e,t){return e.gateFor?e.gateFor(t):e.gate}function Vn({command:e,toggle:t,unavailable:n,advise:o}){const r=e.handle,s=e.members?void 0:Tn(e),l=e.options.label,[i,c]=p.useState("idle"),[d,u]=p.useState(null),[f,g]=p.useState(null),[v,m]=p.useState(!1),[x,S]=p.useState(0),[E,$]=p.useState(!1),T=p.useRef(null),j=r.streamDown===!0,A=xa(r,s),M=r.gateStopsPress===!0,R=t?.unavailable??n??(M&&o?Xr({errorCode:Rt.ModeUnavailable,detail:o,label:l,args:s}):null)??null,_=A?.blocked===!0&&M||R!==null,U=A?.blocked===!0&&!M&&R===null,P=p.useRef(!0),B=p.useRef(0);p.useEffect(()=>(P.current=!0,()=>{P.current=!1}),[]);const I=r.founds,L=p.useRef(null),Y=p.useRef(I?.length??0);p.useEffect(()=>{const te=I?.length??0,ke=te>Y.current;Y.current=te;const ie=I?.[te-1],Oe=L.current;if(!ke||!ie||Oe===null)return;const He=ie.label!==void 0&&ie.label!==""&&Oe.label!==void 0&&ie.label!==Oe.label,Se=ie.args!==void 0&&Oe.args!==void 0&&JSON.stringify(ie.args)!==JSON.stringify(Oe.args);He||Se||(L.current=null,g(ie),u(null),c("found"))},[I]),p.useEffect(()=>{if(i!=="armed")return;const te=setTimeout(()=>c("idle"),yc);return()=>clearTimeout(te)},[i]),p.useEffect(()=>{if(i!=="refused"&&i!=="lost"&&i!=="found")return;const te=setTimeout(()=>{c("idle"),u(null),L.current=null,g(null)},wc);return()=>clearTimeout(te)},[i]),p.useEffect(()=>{if(x===0)return;const te=setTimeout(()=>m(!1),kc);return()=>clearTimeout(te)},[x]);const K=p.useCallback((te=e)=>{const ke=te.members?void 0:Tn(te),ie=te.options.label,Oe=B.current+1;B.current=Oe,L.current=null,T.current=null,c("idle"),u(null),m(!0),S(me=>me+1),$(!0);const He=(me,ve)=>{!P.current||B.current!==Oe||(u(ve),c(me),$(!1),me!=="idle"&&m(!1))},Se=me=>({errorCode:me.errorCode,reason:me.reason,command:me.command,args:me.args,label:me.label??ie,breach:me.breach,detail:me.detail}),Be=te.options;let yt;if(te.members){const me=te.members.map(ve=>({...ve,options:{...ve.options,onRejected:zt=>{ve.options.onRejected?.(zt);const Ke=Nr(zt);Ke.kind==="refused"&&ve.options.onRefused?.(It({...Se(Ke),label:Ke.label??ve.options.label}))}}}));yt=Al(me,te.set??{}).then(ve=>ve.failed>0?Promise.reject(ve.firstError):void 0)}else Be.before?.(ke),yt=te.handle.dangerouslySendWithoutInput(ke,ie||Be.topic?{label:ie,topic:Be.topic}:void 0);yt.then(me=>{He("idle",null),Be.onConfirmed?.(me)},me=>{const ve=Nr(me);if(te.members||(Be.onRejected?.(me),ve.kind==="refused"&&Be.onRefused?.(It(Se(ve)))),ve.kind==="lost"){L.current={args:ke,label:ie},He("lost",null);return}if(ve.kind!=="refused"){He("idle",null);return}He("refused",Se(ve))})},[e]),{hasUnconfirmed:J,hasFailure:se}=fc(r),w=r.status,G=E&&w?.phase==="in-flight"&&w.accepted!==!0&&(T.current===null||T.current===w.requestId),re=v||G;p.useEffect(()=>{E&&T.current===null&&w?.phase==="in-flight"&&(T.current=w.requestId)},[E,w]);const ye=t?r.inFlight.filter(t.rows??(()=>!0)):[],be=t?mc(re,w,ye,t.state,t.modelled):null,pe=t?gc(t.state,be,w,ye,t.modelled):void 0,ce=Jl(),X=p.useRef(void 0),de=p.useRef(void 0),[we,Ee]=p.useState(null),ue=w?.phase==="confirmed"?w.requestId:null;p.useEffect(()=>{if(ue===null)return;const te=setTimeout(()=>Ee(ue),bc);return()=>clearTimeout(te)},[ue]);const Ae=p.useRef(null);t!==void 0&&be==="modelled"&&w!==void 0&&w.phase!=="idle"&&X.current!==void 0&&pe===X.current&&(Ae.current=w.requestId);const ae=t!==void 0&&ue!==null&&Ae.current===ue&&be!=="modelled"&&ue!==null&&ue!==we&&X.current!==void 0&&t.state===de.current?X.current:pe,ee=(vc(w,r.inFlight)||w?.phase==="confirmed"&&X.current!==void 0&&t?.state===de.current)&&X.current!==void 0?X.current:ae,$e=p.useRef(ee);$e.current=ee;const qe=p.useCallback(te=>{if(!j&&!_){if(t){const ke=t.args($e.current);if(ke===void 0)return;X.current=Co(ke),de.current=t.state,X.current!==void 0&&($e.current=X.current),K({...e,args:ke});return}if(i==="refused"||i==="lost"||i==="found"){u(null),g(null),L.current=null,c("idle");return}if(te){if(re)return;if(i!=="armed"){Pe.current=Yr(s),ht.current=ce,c("armed");return}}K()}},[i,re,j,_,K,s,t,e,ce]),Pe=p.useRef(null),ht=p.useRef(ce);p.useEffect(()=>{i==="armed"&&(Yr(s)!==Pe.current||ce!==ht.current)&&c("idle")},[i,s,ce]);const _e=i==="refused"||i==="lost"||i==="found"?i:re?"sent":_?"blocked":i,Ve=_e==="blocked"||R!==null?null:U&&A?Gr({...A,label:A.label??l,args:A.args??s}):o?Gr({errorCode:Rt.ModeUnavailable,detail:o,label:l,args:s}):null;return{phase:_e,isSent:_e==="sent",isArmed:_e==="armed",isRefused:_e==="refused",isLost:_e==="lost",isFound:_e==="found",isBlocked:_e==="blocked",isOffline:j&&_e!=="sent",isUnavailable:R!==null,isAdvised:Ve!==null,adviceText:Ve,command:e,refusalText:d?It(d):R!==null?R:_e==="blocked"&&A?Xr({...A,label:A.label??l,args:A.args??s}):null,foundText:f?qo(f):null,lossText:_e==="lost"?Vo({args:s,label:l}):null,pressWith:te=>{j||(X.current=Co(Tn(te)),de.current=t?.state,K(te))},toggleView:t?{shown:ae,on:typeof ae=="number"?ae>0:ae===!0,word:be==="sent"?t.sentWord??Lt:t.word(ae),reserve:[...t.words,t.sentWord??Lt],confirmation:be,unavailable:R,marking:xc(t.name,be,t.marking??null),sentence:pa(t.name,be)}:null,hasUnconfirmed:J,hasFailure:se,press:qe}}function $c({command:e,unavailable:t,advise:n}){const o=Vn({command:{kind:"bound",handle:e.handle,args:void 0,options:e.options},unavailable:t,advise:n}),r=ya(o),s=o.isBlocked||o.isUnavailable||o.isOffline||t!=null;return ba(o,s,r,l=>{if(s)return;const i=e.toArgs(l);i!==void 0&&o.pressWith(oa(e.handle,i,e.options))},t??null)}function Ax({command:e,unavailable:t,advise:n}){const o=Vn({command:e,unavailable:t,advise:n}),r=ya(o),s=o.isBlocked||o.isUnavailable||o.isOffline||t!=null;return ba(o,s,r,()=>{s||o.press(!1)},t??null)}function ba(e,t,n,o,r){const s=e.command.handle,l=e.isBlocked&&!e.isUnavailable,i=e.isSent?Lt:e.isRefused?ma:e.isLost?ga:e.isFound?va:null,c=s.sendStatus,d=c===void 0?void 0:ua(c),u=e.foundText??e.refusalText??(e.isLost?e.lossText:null),f=u??(e.isSent?"Sent, not yet received":e.isOffline?Ko:r??([e.adviceText,d].filter(Boolean).join(`
`)||void 0));return{control:e,send:o,word:i,tip:f??void 0,inert:t,edge:{"data-command-edge":l?"blocked":e.isLost||e.isRefused||e.hasUnconfirmed||e.hasFailure?"warn":void 0,"data-command-phase":e.phase,"data-stream":e.isOffline?"down":void 0,"data-predicted":l?void 0:ha(c)??(e.isAdvised?"at-risk":void 0),"aria-disabled":t?!0:void 0},announce:n?null:u??(e.isSent?"Sent, not yet received":null)}}function ya(e){return da()&&e.command.handle.railed===!0}const wa=F`
  &[data-command-edge="warn"] {
    border-color: var(--color-warn-mark);
  }
  &[data-command-edge="blocked"] {
    border-style: dashed;
    border-color: var(--color-warn-mark);
    opacity: 0.5;
  }
  &[data-stream="down"] {
    opacity: 0.5;
    border-style: dotted;
  }
  &[data-predicted="held"] {
    border-style: dashed;
    border-color: var(--color-go-mark);
  }
  &[data-predicted="at-risk"] {
    border-style: dashed;
    border-color: color-mix(
      in srgb,
      var(--color-warn-mark) 65%,
      var(--color-surface-raised)
    );
  }
  &[aria-disabled="true"] {
    cursor: not-allowed;
  }
`,Rx=F`
  &[data-command-edge="warn"] {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--color-warn-mark);
    outline-offset: -1px;
  }
  &[data-command-edge="blocked"] {
    outline-width: 1px;
    outline-style: dashed;
    outline-color: var(--color-warn-mark);
    outline-offset: -1px;
    opacity: 0.5;
  }
  &[data-stream="down"] {
    opacity: 0.5;
    outline-width: 1px;
    outline-style: dotted;
    outline-color: currentColor;
    outline-offset: -1px;
  }
  &[data-predicted="held"] {
    outline-width: 1px;
    outline-style: dashed;
    outline-color: var(--color-go-mark);
    outline-offset: -1px;
  }
  &[data-predicted="at-risk"] {
    outline-width: 1px;
    outline-style: dashed;
    outline-color: color-mix(
      in srgb,
      var(--color-warn-mark) 65%,
      var(--color-surface-raised)
    );
    outline-offset: -1px;
  }
  &[aria-disabled="true"] {
    cursor: not-allowed;
  }
`,Dt=F`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,pn=F`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,dt=y.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function bt({children:e,"aria-label":t,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:r=!1,as:s="span",className:l}){const c={role:n?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":t,className:l,"data-live-region":""};return n?a.jsx(dt,{as:s,...c,children:e}):p.createElement(s,c,e)}const _c="data-restoring-focus",Sc=120,Mc=48,jc=120,mo=new Set,qr=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function mn(e){return ka(e,"below")}function ka(e,t){const[n,o]=p.useState(null),[r,s]=p.useState(!1),[l,i]=p.useState(!1),[c,d]=p.useState(!1),[u,f]=p.useState(!1),[g,v]=p.useState(!1),m=p.useRef(null),x=p.useRef(null),S=p.useRef(null),E=p.useRef(!1),$=p.useRef(!1),T=p.useRef(null),j=e!=null&&e!==""?e:null,A=n!==null&&(r||l||c||u||g),M=p.useCallback(()=>{T.current!==null&&clearTimeout(T.current),T.current=null},[]),R=p.useCallback(()=>{M(),o(null),s(!1),i(!1),d(!1),f(!1),v(!1),E.current=!1},[M]);p.useEffect(()=>{const P=x.current;if(!A||P===null)return;const B={anchor:P,close:R};for(const I of mo)if(I.anchor!==P&&(I.anchor.contains(P)&&I.close(),P.contains(I.anchor))){R();return}return mo.add(B),()=>{mo.delete(B)}},[A,R]),p.useEffect(()=>{if(!u)return;const P=()=>{const I=document.getSelection(),L=I!==null&&!I.isCollapsed&&S.current?.contains(I.anchorNode)===!0;!E.current&&!L&&f(!1)},B=()=>{E.current=!1,P()};return document.addEventListener("pointerup",B),document.addEventListener("selectionchange",P),()=>{document.removeEventListener("pointerup",B),document.removeEventListener("selectionchange",P)}},[u]),p.useEffect(()=>{if(!g)return;const P=B=>{const I=B.target;I instanceof Node&&(m.current?.contains(I)||S.current?.contains(I)||R())};return document.addEventListener("pointerdown",P,!0),()=>document.removeEventListener("pointerdown",P,!0)},[g,R]);const _=p.useCallback(()=>{M(),T.current=setTimeout(()=>{T.current=null,s(!1),d(!1)},jc)},[M]);if(p.useEffect(()=>M,[M]),p.useEffect(()=>{if(n!==null)return window.addEventListener("scroll",R,!0),window.addEventListener("resize",R),()=>{window.removeEventListener("scroll",R,!0),window.removeEventListener("resize",R)}},[n,R]),p.useEffect(()=>{if(!A||j===null)return;const P=B=>{B.key==="Escape"&&(B.stopPropagation(),R())};return document.addEventListener("keydown",P,!0),()=>document.removeEventListener("keydown",P,!0)},[A,j,R]),j===null)return{anchor:{},tip:null};const U=P=>{x.current=P;const B=P.getBoundingClientRect();o({top:B.bottom,left:B.left,above:t==="above"?B.top>=Mc:window.innerHeight-B.bottom<Sc,anchorTop:B.top})};return{anchor:{"data-tooltip":j,onPointerEnter:P=>{P.pointerType!=="touch"&&(M(),U(P.currentTarget),s(!0))},onPointerLeave:_,onPointerDown:P=>{$.current=!0,P.pointerType!=="touch"&&R()},onPointerUp:P=>{if($.current=!1,P.pointerType==="touch"){if(g){R();return}m.current=P.currentTarget,U(P.currentTarget),v(!0)}},onFocus:P=>{$.current||document.documentElement.hasAttribute(_c)||(U(P.currentTarget),i(!0))},onBlur:()=>{i(!1),!r&&!c&&!g&&o(null)}},tip:A?Ql.createPortal(a.jsx(Ec,{ref:S,at:n,text:j,onPress:()=>{E.current=!0,f(!0)},onPointerEnter:()=>{M(),d(!0)},onPointerLeave:_}),document.body):null}}const Ec=p.forwardRef(function({at:t,text:n,onPress:o,onPointerEnter:r,onPointerLeave:s},l){const i=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return a.jsx(Rc,{ref:l,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),o()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...i,left:t.left,"--tip-left":`${t.left}px`},children:n})});function St(e,t){return(...n)=>{typeof e=="function"&&e(...n),t?.(...n)}}function Le({text:e,children:t,focusable:n=!1,announce:o=!0,placement:r="below"}){const{anchor:s,tip:l}=ka(e,r);if(e==null||e==="")return a.jsx(a.Fragment,{children:t});const i=t.props,c=i["aria-label"],d=!o||typeof c=="string"&&qr(c).includes(qr(e));return a.jsxs(a.Fragment,{children:[p.cloneElement(t,{"data-tooltip":e,onPointerEnter:St(i.onPointerEnter,s.onPointerEnter),onPointerLeave:St(i.onPointerLeave,s.onPointerLeave),onPointerDown:St(i.onPointerDown,s.onPointerDown),onPointerUp:St(i.onPointerUp,s.onPointerUp),onFocus:St(i.onFocus,s.onFocus),onBlur:St(i.onBlur,s.onBlur),"aria-description":d?i["aria-description"]:e,tabIndex:n?i.tabIndex??0:i.tabIndex}),l,n&&a.jsx(Ac,{})]})}const Ac=Sl`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Rc=y.div`
  position: fixed;
  z-index: var(--z-toast);
  margin-top: var(--offset-popover);
  max-width: min(18rem, calc(100vw - 2 * var(--offset-popover)));
  /* Pulled back inside the viewport when the anchor sits near its right edge. */
  translate: min(0px, calc(100vw - 100% - var(--offset-popover) - var(--tip-left, 0px)));
  padding: var(--inset-tooltip);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-floating);
  box-shadow: var(--shadow-popover-drop) rgba(0, 0, 0, 0.35);
  color: var(--color-text-primary);
  font-size: var(--font-size-caption);
  line-height: var(--line-height-body);
  letter-spacing: 0.02em;
  white-space: pre-line;
  user-select: text;
  cursor: text;

  &[data-above] {
    margin-top: 0;
    margin-bottom: var(--offset-popover);
  }
`;function Tc(e){return e==="neutral"?"go":e}const Nn=e=>F`
  background: ${Ro[e]};
  border-color: ${Ro[e]};
  color: ${ra[e]};
`,Cc=e=>F`
  border-color: ${xe[e]};
  color: ${De[e]};
`,Vr={default:F`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:F`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},Ic=F`
  background: none;
  border: none;
  padding: 0;
  min-height: 0;
  font: inherit;
  color: inherit;
  text-align: inherit;
  justify-content: flex-start;

  /* No box to brighten, so the words underline under the pointer. */
  @media (hover: hover) {
    &:hover:not(:disabled) {
      text-decoration: underline;
    }
  }
`,Lc=F`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function Pc(e,t){return e==="text"?Ic:e==="primary"?Nn(t):t==="neutral"?Vr[e]:F`
    ${Vr[e]}
    ${Cc(t)}
  `}const Oc=F`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,Nc={sm:F`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:F`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},$a=y.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph-control);
  border: 1px solid;
  border-radius: var(--radius-regular);
  font-family: inherit;
  font-weight: 600;
  /* The kit's one control height, with a flush line height so type size cannot change the box height. */
  min-height: var(--control-height);
  line-height: var(--line-height-flush);
  cursor: pointer;
  transition: background var(--duration-fast), border-color var(--duration-fast), color var(--duration-fast);

  ${({$size:e})=>Nc[e]}
  ${({$variant:e,$tone:t})=>Pc(e,t)}
  ${({$pressed:e,$tone:t})=>e?Nn(Tc(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":Oc}
  ${Dt}
  &[data-held-button] {
    position: relative;
  }

  /* A command that was refused, got no reply or never left edges in the warning colour and leaves the state's own fill alone. */
  &[data-command-edge="warn"] {
    border-color: var(--color-warn-mark);
  }
  /* The game said it will refuse the press: dimmed, with a dashed warning edge. */
  &[data-command-edge="blocked"] {
    border-style: dashed;
    border-color: var(--color-warn-mark);
    opacity: 0.5;
  }
  /* The stream to the mod is down: nothing can be sent. Dimmed, with a dotted edge. */
  &[data-stream="down"] {
    opacity: 0.5;
    border-style: dotted;
  }
  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* A predicted result changes the edge's line style and colour only, never its width, so the box stays the same size; both dashed because they are predictions, apart by colour and the tooltip. */
  &[data-predicted="held"]:not(:disabled) {
    border-style: dashed;
    border-color: var(--color-go-mark);
  }
  &[data-predicted="at-risk"]:not(:disabled) {
    border-style: dashed;
    /* Eased toward the ground so the amber is no louder than the go green beside it. */
    border-color: color-mix(
      in srgb,
      var(--color-warn-mark) 65%,
      var(--color-surface-raised)
    );
  }

  /* An unconfirmed command may still run and a failed one never left; both read in the warning tone. */
  &[data-unconfirmed="true"],
  &[data-failed="true"] {
    border-color: var(--color-warn-mark);
    color: var(--color-warn-text);
    background: color-mix(
      in srgb,
      var(--color-warn-mark) 18%,
      var(--color-surface-raised)
    );
  }

  @media (pointer: coarse) {
    min-height: var(--touch-target);
    /* Wider on both axes: min-height only covers the vertical target. */
    padding: ${({$size:e})=>e==="sm"?"var(--inset-control-small-touch)":"var(--inset-control-touch)"};
  }

  ${({$variant:e})=>e==="text"?Lc:""}
`,Zo=y.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-faint);
  font-size: var(--font-size-base);
  line-height: var(--line-height-flush);
  padding: var(--inset-glyph-button);
  border-radius: var(--radius-regular);
  transition: background var(--duration-fast), box-shadow var(--duration-fast), color var(--duration-fast);

  /* A target of at least 24 by 24 on a fine pointer, whatever size the caller draws the glyph at; a coarse pointer already gets the touch target. */
  @media (pointer: fine) {
    min-width: 24px;
    min-height: 24px;
  }

  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]):not([aria-pressed="true"]) {
      background: var(--color-surface-raised);
      box-shadow: inset 0 0 0 1px var(--color-border-strong);
      color: var(--color-text-primary);
    }
  }
  &:active:not(:disabled):not([aria-disabled="true"]) {
    ${Nn("go")}
  }
  /* A command that was refused, got no reply or never left tints the glyph in the warning colour. */
  &[data-command-edge="warn"] {
    color: var(--color-warn-text);
  }
  /* A pressed glyph has its fill, so the warning is an edge on the box, as on a box toggle. */
  &[aria-pressed="true"][data-command-edge="warn"] {
    outline-width: 2px;
    outline-style: solid;
    outline-color: var(--color-warn-mark);
    outline-offset: -2px;
  }
  /* The game said it will refuse the press: the glyph is dimmed in the warning colour, with a dashed outline. */
  &[data-command-edge="blocked"] {
    color: var(--color-warn-mark);
    opacity: 0.5;
    outline-width: 1px;
    outline-style: dashed;
    outline-color: var(--color-warn-mark);
  }
  /* The stream to the mod is down: dimmed, with a dotted outline. */
  &[data-stream="down"] {
    opacity: 0.5;
    outline-width: 1px;
    outline-style: dotted;
    outline-color: currentColor;
  }
  &[aria-pressed="true"] {
    ${Nn("go")}
  }
  ${Dt}
  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.4;
    cursor: not-allowed;
  }
  @media (pointer: coarse) {
    min-width: var(--touch-target);
    min-height: var(--touch-target);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;function _a(e){let t="";return p.Children.forEach(e,n=>{if(typeof n=="string"||typeof n=="number"){t+=String(n);return}p.isValidElement(n)&&(t+=_a(n.props.children))}),t.replace(/\s+/g," ").trim()}function Sa({label:e,children:t,disabledReason:n}){return Fc({label:e,children:t,disabledReason:n})}function Fc({label:e,children:t,disabledReason:n}){const o=e!==void 0&&e!==""&&e!==_a(t)?e:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function Ma(e,t){return e===!0&&t!==void 0&&t!==""}function ja(e){e.preventDefault(),e.stopPropagation()}function Ea(e,t,n){return t===null||e.props["data-tooltip"]!==void 0?e:a.jsx(Le,{text:t,announce:n,children:e})}const Tx=p.forwardRef(function({label:t,icon:n,type:o,...r},s){return a.jsx("button",{ref:s,type:o??"button","aria-label":t,...r,children:a.jsx(Aa,{label:t,icon:n})})});function Aa({label:e,icon:t}){const n=p.useRef(null),o=p.useRef(null),[r,s]=p.useState(!0);return p.useLayoutEffect(()=>{const l=n.current,i=o.current;if(!l||!i)return;const c=()=>{s(i.scrollWidth<=l.clientWidth)};if(c(),typeof ResizeObserver>"u")return;const d=new ResizeObserver(c);return d.observe(l),d.observe(i),()=>d.disconnect()},[]),a.jsxs(Dc,{ref:n,children:[a.jsx(zc,{ref:o,"aria-hidden":"true",children:e}),r?a.jsx(Hc,{"aria-hidden":"true",children:e}):a.jsx(Bc,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const Dc=y.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,zc=y.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,Hc=y.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,Bc=y.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=e=>{const t=Uc(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var go={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Gc=p.createContext({}),Yc=()=>p.useContext(Gc),qc=p.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:o,className:r="",children:s,iconNode:l,...i},c)=>{const{size:d=24,strokeWidth:u=2,absoluteStrokeWidth:f=!1,color:g="currentColor",className:v=""}=Yc()??{},m=o??f?Number(n??u)*24/Number(t??d):n??u;return p.createElement("svg",{ref:c,...go,width:t??d??go.width,height:t??d??go.height,stroke:e??g,strokeWidth:m,className:Ra("lucide",v,r),...!s&&!Xc(i)&&{"aria-hidden":"true"},...i},[...l.map(([x,S])=>p.createElement(x,S)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=(e,t)=>{const n=p.forwardRef(({className:o,...r},s)=>p.createElement(qc,{ref:s,iconNode:t,className:Ra(`lucide-${Wc(Kr(e))}`,`lucide-${e}`,o),...r}));return n.displayName=Kr(e),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Kc=D("arrow-down",Vc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]],Qc=D("arrow-left-right",Zc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ed=D("arrow-left",Jc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],nd=D("arrow-right",td);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],rd=D("arrow-up-to-line",od);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],ad=D("arrow-up",sd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],ld=D("bell",id);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],dd=D("check",cd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],hd=D("chevron-down",ud);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],pd=D("chevron-left",fd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],gd=D("chevron-right",md);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],xd=D("chevron-up",vd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],yd=D("columns-2",bd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],kd=D("computer",wd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],_d=D("corner-down-left",$d);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Md=D("database",Sd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ed=D("file-text",jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],Rd=D("grip",Ad);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Cd=D("heart",Td);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Ld=D("history",Id);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Od=D("house",Pd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Fd=D("info",Nd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],zd=D("joystick",Dd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Bd=D("layers",Hd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Ud=D("lightbulb-off",Wd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Gd=D("lightbulb",Xd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],qd=D("lock",Yd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Kd=D("maximize",Vd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Qd=D("menu",Zd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],eu=D("microscope",Jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],nu=D("minimize",tu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],ru=D("pause",ou);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],au=D("pencil",su);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],lu=D("play",iu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],du=D("plus",cu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],hu=D("radio",uu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],pu=D("rectangle-horizontal",fu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],gu=D("rectangle-vertical",mu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],xu=D("rotate-ccw",vu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],yu=D("rotate-cw",bu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],ku=D("rows-2",wu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]],_u=D("satellite-dish",$u);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],Mu=D("satellite",Su);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Eu=D("settings",ju);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Ru=D("square",Au);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Cu=D("star",Tu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Lu=D("undo-2",Iu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Ou=D("volume-2",Pu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Fu=D("volume-x",Nu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],zu=D("wrench",Du);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Bu=D("x",Hu),Wu="var(--icon-size-control)",Uu={strokeWidth:1.8,"aria-hidden":!0};function z(e,t){const n=p.forwardRef(({label:o,size:r=Wu,style:s,...l},i)=>{const c=typeof r=="number"?{size:r,style:s}:{style:{width:r,height:r,...s}},d=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return a.jsx(e,{...Uu,...t,...d,...l,...c,ref:i})});return n.displayName=e.displayName??e.name,n}const Cx=z(Rd),Ix=z(zd),Lx=z(Ld),Px=z(Od),Ox=z(Fd),Nx=z(qd),Fx=z(hu),Dx=z(Ou),zx=z(Fu),Hx=z(ld),Bx=z(Bd),Wx=z(Eu),Ux=z(Mu),Xx=z(_u),Gx=z(Kd),Yx=z(nu),qx=z(Md),Vx=z(kd),Kx=z(Ed),Zx=z(du,{strokeWidth:2.4}),Xu=z(Bu),Qx=z(au),Jx=z(dd),Gu=z(Cu),e1=z(Cd),t1=z(Qd),Yu=z(eu),n1=z(lu),o1=z(ru),r1=z(Ru),s1=z(xd),a1=z(hd),i1=z(pd),l1=z(gd),c1=z(ed),d1=z(Qc),u1=z(ad),h1=z(nd),f1=z(Kc),p1=z(rd),m1=z(Lu),g1=z(yu),v1=z(xu),x1=z(yd),b1=z(pu),y1=z(ku),w1=z(gu),Ta=z(_d),qu=D("space-helmet",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M10.5 8h3a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 1 0-7z",key:"visor"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),Vu=D("space-helmet-visor-up",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M8 7.5C9.5 5 14.5 5 16 7.5",key:"visor"}],["circle",{cx:"12",cy:"12.5",r:"2",fill:"currentColor",key:"face"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),k1=z(qu),$1=z(Vu),_1=z(zu),S1=z(Gd),M1=z(Ud),Qo="max(0.075em, 1.25px)",fe={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},Io=fe.held.domSize,Lo=fe.modelled.domSize,Ku=F`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Io} + 0.14em);
  }
`,Zu=F`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Lo} + 0.14em);
  }
`;function Qu(e){return F`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${fe[e].hollowDomSize} + 0.14em);
    }
  `}function Ca(e,t=!1){return t?Qu(e):e==="current"?null:e==="modelled"?Zu:Ku}const Ju=y.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Io};
  height: ${Io};
  background: ${fe.held.color};
`,eh=y.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Lo};
  height: ${Lo};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${fe.modelled.color};
`,Jo=e=>F`
  position: absolute;
  right: 0;
  top: 0;
  width: ${fe[e].hollowDomSize};
  height: ${fe[e].hollowDomSize};
`,th=y.span`
  ${Jo("current")}
  border: ${Qo} solid ${fe.current.color};
  border-radius: var(--radius-circle);
`,nh=y.span`
  ${Jo("held")}
  border: ${Qo} solid ${fe.held.color};
`,oh=y.span`
  ${Jo("modelled")}
  --stroke: ${Qo};
  background: ${fe.modelled.color};
  clip-path: polygon(
    50% 0,
    100% 100%,
    0 100%,
    50% 0,
    50% calc(var(--stroke) * 2.4),
    calc(var(--stroke) * 1.9) calc(100% - var(--stroke)),
    calc(100% - var(--stroke) * 1.9) calc(100% - var(--stroke)),
    50% calc(var(--stroke) * 2.4)
  );
`,rh={current:th,held:nh,modelled:oh};function Ia({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?rh[e]:e==="modelled"?eh:Ju;return a.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const sh=y.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>Ca(e??"held",t)}
`;function Po({caption:e,kind:t="held",elsewhere:n=!1,children:o,...r}){const{anchor:s,tip:l}=mn(e);return a.jsxs(sh,{$kind:t,$elsewhere:n,...r,...s,children:[o,a.jsx(Ia,{kind:t,elsewhere:n}),e!==null&&a.jsxs(dt,{"data-unit-currency":"",children:[", ",e]}),l]})}const ah=y(Po)`
  position: static;

  &::after {
    content: none;
  }

  & > [data-held-mark] {
    top: 3px;
    right: 3px;
  }
`,La=p.forwardRef(function({variant:t="default",tone:n,size:o="md",pressed:r,predictedOutcome:s,disabledReason:l,marked:i,type:c="button",...d},u){const f=Ma(d.disabled,l),g=Sa({label:d["aria-label"],children:d.children,disabledReason:f?l:void 0}),{disabled:v,onClick:m,children:x,...S}=d;return Ea(a.jsx($a,{ref:u,$variant:t,$tone:n??(t==="primary"?"go":"neutral"),$size:o,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,"data-held-button":i?"":void 0,...S,disabled:f?void 0:v,...f?{"aria-disabled":!0}:{},onClick:f?ja:m,type:c,children:i?a.jsx(ah,{kind:i.kind,caption:i.caption,children:x}):x}),g,f)}),ih=y.span`
  display: inline-grid;
  justify-items: center;
`,lh=y.span`
  grid-area: 1 / 1;
`,ch=y.span`
  grid-area: 1 / 1;
  visibility: hidden;

  &::before {
    content: attr(data-word);
  }
`;function dh({shown:e,reserve:t}){return a.jsxs(ih,{children:[[...new Set(t)].map(n=>a.jsx(ch,{"data-word":n,"aria-hidden":"true"},n)),a.jsx(lh,{children:e})]})}function gn(e){return"press"in e&&typeof e.press=="function"}function uh(e){return"kind"in e?e:oa(e,void 0)}function hh(e){const{command:t,unavailable:n,advise:o,...r}=e;return gn(t)?a.jsx(er,{...r,control:t}):a.jsx(Pa,{...r,command:t,unavailable:n,advise:o})}function fh(e){const{command:t,unavailable:n,advise:o,...r}=e;return gn(t)?a.jsx(er,{...r,glyph:!0,control:t}):a.jsx(Pa,{...r,glyph:!0,command:t,unavailable:n,advise:o})}function Pa({command:e,unavailable:t,advise:n,...o}){const r=Vn({command:uh(e),unavailable:t,advise:n});return a.jsx(er,{...o,control:r})}function er({control:e,glyph:t=!1,children:n,confirmLabel:o,refusedLabel:r=ma,lostLabel:s=ga,foundLabel:l=va,confirmAriaLabel:i,sentAriaLabel:c,blockedAriaLabel:d,pressed:u,variant:f="default",tone:g="neutral",icon:v,confirmIcon:m,onPressReady:x,size:S="md",confirmTone:E="go",tip:$,"aria-label":T,...j}){const{phase:A,isSent:M,isArmed:R,isRefused:_,isLost:U,isFound:P,isBlocked:B,isUnavailable:I,isAdvised:L,adviceText:Y,isOffline:K,refusalText:J,foundText:se,lossText:w,hasUnconfirmed:G,hasFailure:re,press:ye,command:be}=e,pe=be.handle,ce=be.members?void 0:Tn(be),X=be.options.label,de=o!==void 0,we=X?`${X} sent, not yet received`:"Sent, not yet received";p.useEffect(()=>{if(x)return x(()=>ye(de)),()=>x(null)},[x,ye,de]);const ue=t?M?a.jsx(Ta,{"aria-hidden":"true"}):R?m??v??n:n:M?Lt:_?r:U?s:P?l:R?o:n,Ae=v!==void 0&&typeof ue=="string",ae=Ae?a.jsx(Aa,{label:ue,icon:R?m??v:v}):!t&&!Ae&&typeof ue=="string"&&ue!==n?a.jsx(gh,{children:ue}):ue,q=[o,Lt,r,s,l],ee=!t&&v===void 0&&typeof n=="string"&&q.every(Se=>Se===void 0||typeof Se=="string"),$e=q.filter(Se=>Se!==void 0).reduce((Se,Be)=>Be.length>Se.length?Be:Se,Lt),Pe=da()&&pe.railed===!0?null:_?J:U?w:P?se:M?we:null,ht=u===!0||R||_,_e=mh({restTone:f==="primary"?g:"neutral",filled:ht,isRefused:_,isFound:P,isArmed:R,confirmTone:E,tone:g}),Ve=B&&!I,te=Ve?t?"blocked":void 0:U||t&&(_||G||re)?"warn":void 0,ke=t?bh:xh,ie=pe.sendStatus,Oe=[$,Y,ie===void 0?null:ua(ie)].filter(Boolean).join(`
`),He=K?[$,Ko].filter(Boolean).join(`
`):Oe||void 0;return a.jsxs(a.Fragment,{children:[a.jsx(Le,{text:se??J??w??(M?we:He),children:a.jsx(ke,{type:"button","data-command-edge":te,$tone:_e,$variant:f,$fit:Ae,$size:S,$pressed:ht,$armed:R,$blocked:Ve,"aria-pressed":u,"aria-disabled":B||K||void 0,"data-unconfirmed":G?"true":void 0,"data-failed":re?"true":void 0,"data-command-phase":A,"data-stream":K?"down":void 0,"data-predicted":Ve?void 0:ha(ie)??(L?"at-risk":void 0),"data-gate":Ve?"blocked":L?"advised":xa(pe,ce)?.undetermined?"undetermined":void 0,"aria-label":(_?J??void 0:U?w??void 0:P?se??T:B?d??T:M?c??we:R?i:T)??(Ae?ue:void 0),onClick:()=>ye(o!==void 0),"data-rest-label":ee?n:void 0,"data-armed-label":ee?$e:void 0,...j,children:ee?a.jsx(vh,{children:ae}):ae})}),a.jsx(bt,{visuallyHidden:!0,children:Pe})]})}function j1(e){const{command:t,...n}=e;return gn(t)?a.jsx(tr,{...n,control:t}):a.jsx(Oa,{...n,command:t})}function ph(e){const{command:t,...n}=e;return gn(t)?a.jsx(tr,{...n,glyph:!0,control:t}):a.jsx(Oa,{...n,glyph:!0,command:t})}function Oa({command:e,state:t,name:n,unavailable:o,advise:r,children:s,sentWord:l,rows:i,modelled:c,marking:d,glyph:u,...f}){const g=m=>typeof s=="function"?s(m):typeof s=="string"?s:"",v=Vn({command:{kind:"bound",handle:e.handle,args:void 0,options:e.options},toggle:{state:t,name:n??"",word:g,words:[...new Set([g(!0),g(!1)])],sentWord:l,rows:i,modelled:c,marking:d,unavailable:o,args:m=>m==null?void 0:e.toArgs(!(typeof m=="number"?m>0:m))},advise:r});return a.jsx(tr,{...f,glyph:u,control:v})}function tr({control:e,glyph:t=!1,tone:n="go",size:o="md",icon:r,tip:s,"aria-label":l,...i}){const{phase:c,isOffline:d,isRefused:u,isLost:f,isBlocked:g,isUnavailable:v,isAdvised:m,adviceText:x,refusalText:S,lossText:E,toggleView:$,hasUnconfirmed:T,hasFailure:j,press:A}=e;if(!$)return null;const{marking:M,sentence:R}=$,_=$.confirmation==="held"||$.confirmation==="modelled",U=d?Ko:g&&!v||u?S:f?E:((_?null:R)??[s,x].filter(Boolean).join(`
`))||void 0,I=g&&!v?"blocked":u||f||T||j?"warn":void 0,L=$.unavailable!==null||g,Y=$.unavailable??(g?S:null);return a.jsxs(a.Fragment,{children:[a.jsx(Le,{text:U,children:t?a.jsx(Zo,{type:"button","aria-pressed":$.on,"aria-disabled":L||void 0,"aria-label":l,"data-command-phase":c,"data-stream":d?"down":void 0,"data-command-edge":I,"data-predicted":m?"at-risk":void 0,onClick:()=>A(!1),...i,children:$.confirmation==="sent"?a.jsx(Ta,{"aria-hidden":"true"}):r}):a.jsx(La,{type:"button",size:o,tone:$.on?n:void 0,pressed:$.on,"aria-pressed":$.on,disabled:L||void 0,disabledReason:Y??void 0,marked:M,"aria-label":l,"data-command-phase":c,"data-stream":d?"down":void 0,"data-command-edge":I,"data-predicted":m?"at-risk":void 0,onClick:()=>A(!1),...i,children:r!==void 0&&$.confirmation!=="sent"?r:a.jsx(dh,{shown:$.word,reserve:$.reserve})})}),a.jsx(bt,{visuallyHidden:!0,children:_?"":R??""})]})}function mh(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const Na=Bo`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,gh=y.span`
  display: block;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,vh=y.span`
  grid-area: 1 / 1;
  /* A face never grows past the button, so a word wider than the button is clipped inside it instead of spilling out. */
  min-width: 0;
  max-width: 100%;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,xh=y($a)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&F`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Na} 1s var(--ease-emphasis) infinite;
      }
    `}

  &:disabled {
    opacity: 0.5;
  }

  /* Dimmed toward the muted text token rather than faded, so the refusal reason stays readable; the warn border says the game refused. */
  ${({$blocked:e})=>e&&F`
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
`,bh=y(Zo)`
  ${({$armed:e})=>e&&F`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Na} 1s var(--ease-emphasis) infinite;
      }
    `}
  ${({$blocked:e})=>e&&F`
      opacity: 0.5;
      cursor: help;
    `}
`,yh=p.forwardRef(function(t,n){return t.command!==void 0?a.jsx(hh,{...t}):a.jsx(La,{ref:n,...t})}),E1=y.button`
  background: none;
  border: none;
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  font-family: inherit;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  transition: color var(--duration-fast);

  @media (hover: hover) {
    &:hover {
      color: var(--color-text-primary);
    }
  }
  ${Dt}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Fa=p.forwardRef(function(t,n){if(t.command!==void 0){const{command:g}=t;if("kind"in g&&g.kind==="value"?!0:gn(g)&&g.toggleView!==null){const{children:m,...x}=t;return a.jsx(ph,{...x,icon:m})}return a.jsx(fh,{...t})}const{pressed:o,disabledReason:r,command:s,...l}=t,i=Ma(l.disabled,r),c=Sa({label:l["aria-label"],children:l.children,disabledReason:i?r:void 0}),{disabled:d,onClick:u,...f}=l;return Ea(a.jsx(Zo,{ref:n,"aria-pressed":o,...f,disabled:i?void 0:d,...i?{"aria-disabled":!0}:{},onClick:i?ja:u}),c,i)}),A1=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,wh=y.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,R1=y.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,kh=y.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,T1=y.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,C1=y.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,nr=F`
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  padding: var(--inset-field);

  &:focus {
    /* The accent border on the raised surface clears WCAG 1.4.11's 3:1. */
    border-color: var(--color-accent-fg);
    outline: none;
  }

  ${Dt}

  /* The browser's own clear control ignores the theme; SearchBox draws the kit's. */
  &::-webkit-search-cancel-button {
    appearance: none;
  }

  @media (pointer: coarse) {
    min-height: var(--touch-target);
    padding: var(--inset-field-touch);
    /* 16px stops iOS Safari zooming on focus; a literal, because the threshold is absolute. */
    font-size: 16px;
  }
`,$h=y.input`
  ${nr}
  width: 100%;
  ${wa}
  &[data-command-phase] {
    /* Room for the word of a command inside the field, at its end. */
    padding-inline-end: 8ch;
  }
`,I1=p.forwardRef(function(t,n){return t.command?a.jsx(Mh,{...t,command:t.command,forwardedRef:n}):a.jsx(Da,{ref:n,...t})}),Da=y.select`
  ${nr}
  width: 100%;
  appearance: none;
  /* The native arrow hugs the field's edge and cannot be inset, so the chevron is two gradient strokes drawn clear of it. */
  background-image:
    linear-gradient(45deg, transparent 50%, var(--color-text-muted) 50%),
    linear-gradient(135deg, var(--color-text-muted) 50%, transparent 50%);
  background-position:
    calc(100% - var(--offset-select-arrow-far)) 50%,
    calc(100% - var(--offset-select-arrow-near)) 50%;
  background-size:
    var(--size-select-arrow) var(--size-select-arrow),
    var(--size-select-arrow) var(--size-select-arrow);
  background-repeat: no-repeat;
  padding-inline-end: var(--inset-field-select-end);
  ${wa}
  &[data-command-phase] {
    /* Room for the word inside the field, past the chevron. */
    padding-inline-end: calc(var(--inset-field-select-end) + 8ch);
  }

  @media (pointer: coarse) {
    padding-inline-end: var(--inset-field-select-end);
  }
`,_h=y.span`
  position: absolute;
  inset-block: 0;
  inset-inline-end: var(--inset-field-select-end);
  display: flex;
  align-items: center;
  pointer-events: none;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
`,Sh=y.div`
  position: relative;
  width: 100%;
`;function Mh({command:e,value:t,unavailable:n,forwardedRef:o,children:r,...s}){const l=$c({command:e,unavailable:n}),[i,c]=p.useState(null),d=l.control.isSent;return p.useEffect(()=>{d||c(null)},[d]),a.jsx(Le,{text:l.tip,children:a.jsxs(Sh,{children:[a.jsx(Da,{...s,ref:o,value:i??t,...l.edge,onChange:u=>{l.inert||(c(u.target.value),l.send(u.target.value))},children:r}),a.jsx(_h,{"aria-hidden":"true",children:l.word}),a.jsx(bt,{visuallyHidden:!0,children:l.announce})]})})}const L1=y.textarea`
  ${nr}
  width: 100%;
  resize: vertical;
`;function jh(e){if(e===void 0)return null;const{value:t}=Wo(e.magnitude,e.unit);return t===On?null:t}function za(e,t){const n=jh(t);return n===null?e:`${e}, as of ${n}`}const or="modelled to SCET";function Eh(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function Zr(e){return Pn(e.value)||on(e.value)?{shown:e.value,held:!1,mark:null,isStatic:Pn(e.value),isDeterministic:on(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:za(Ft(e.grade),e.asOfUt)}}function Kn(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:Pn(e),isDeterministic:on(e),caption:null,band:null};const n=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!on(e.value)){const o=e.reckoning.modelled;if(e.state==="held"){const s=Zr(e),l=e.value===void 0,i=s.held||l,c=s.caption??(l?"":null);return{...s,shown:o,held:i,mark:i?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:n}}const r=e.reckoning.beyondReceived;return{shown:o,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?or:null,band:n}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:Pn(e.value),isDeterministic:on(e.value),caption:null,band:n}:e.state==="held"?{...Zr(e),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Ha(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function Ah(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:or}:null;if(e.state==="held"){const n=za(Ft(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function P1(e){return e===void 0?null:typeof e!="string"?Ah(e):{kind:"held",caption:Ft(e)}}function rr(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function O1(e,t){const n=rr(t);return n===void 0?e:{state:"held",value:e,grade:n,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}function sr(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function N1(e={}){return sr(t=>je(t,e))}const Rh=.01;function F1({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const r=Math.abs(t(n)-t(o));return(e?Math.min(r,1-r):r)<=Rh}}}function Ba(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(r=>!n.readsAsOne(e,r))}function ar({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,r=x=>Ll(typeof x=="number"?x:x.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,l=Eh(s);if(s?.value!==void 0&&l!==void 0)return Ba(s.value,l,sr(r))?a.jsx(Po,{"data-held":"",kind:"modelled",caption:`${or}, last received ${r(s.value)}`,children:r(l)}):a.jsx(a.Fragment,{children:r(s.value)});const i=Kn(o,{drawsReckoning:!0}),{shown:c,held:d,mark:u,caption:f}=i,g=typeof e=="number"?e:c;if(g==null)return On;const v=r(g),m=Ha({...i,shown:g});return d?a.jsx(Po,{...m,kind:u??"held",caption:f,children:v}):a.jsx("span",{"data-figure":m["data-figure"],children:v})}const Qr={left:!1,right:!1};function Th(e){const[t,n]=p.useState(Qr),o=p.useRef(Qr);return p.useEffect(()=>{if(!e)return;const r=()=>{const i=e.scrollLeft>1,c=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===i&&o.current.right===c||(o.current={left:i,right:c},n(o.current))};r(),e.addEventListener("scroll",r,{passive:!0});const s=typeof ResizeObserver>"u"?null:new ResizeObserver(r);s?.observe(e);for(const i of Array.from(e.children))s?.observe(i);const l=new MutationObserver(()=>{for(const i of Array.from(e.children))s?.observe(i);r()});return l.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",r),s?.disconnect(),l.disconnect()}},[e]),t}const Jr=y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  ${({$position:e})=>e==="left"?"left: 0;":"right: 0;"}
  width: max(28px, var(--bleed-inline));
  pointer-events: none;
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity var(--duration-base) var(--ease-standard);
  background: linear-gradient(
    to ${({$position:e})=>e==="left"?"right":"left"},
    rgba(255, 255, 255, 0.12),
    rgba(255, 255, 255, 0) 100%
  );

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function Zn(e){const t=p.useRef(null),[n,o]=p.useState(e),[r,s]=p.useState(null);return p.useEffect(()=>{t.current!==r&&s(t.current)}),p.useEffect(()=>{if(!r||typeof ResizeObserver>"u")return;const l=new ResizeObserver(i=>{for(const c of i)c.contentRect.width>0&&c.contentRect.height>0&&o({w:Math.floor(c.contentRect.width),h:Math.floor(c.contentRect.height)})});return l.observe(r),()=>l.disconnect()},[r]),{ref:t,size:n}}const Ch='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Wa(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),r=n[o+1]??n[o-1];if(r&&r!==e){r.focus();return}const s=t.closest("[data-panel-rail-frame]"),l=s?s.parentElement?.querySelector("[data-panel-body]"):t.closest("[data-panel-body]");if(!l)return;const i=[...l.querySelectorAll(Ch)].find(c=>c!==e);if(i){i.focus();return}l.hasAttribute("tabindex")||l.setAttribute("tabindex","-1"),l.focus()}const dn=700;function ir(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const Qn={"in-transit":1/6,"awaiting-reply":1/2,due:2/3,overdue:2/3,lost:2/3};function Ua(e){const t=e.reachEtaSeconds;if(e.hold&&t!==null&&t>0)return Ih(e.hold);const n=Xa(e);if(t===null||n===null)return Qn[e.predictedPhase];const o=n-t,r=e.replyEtaSeconds===null?1/3:2/3;return Math.max(0,Math.min(r,o/(3*n)))}function es(e){const t=Xa(e);return t===null?0:Math.max(0,(1-Ua(e))*3*t)}function Ih(e){return Math.max(0,Math.min(1,e.outbound))/3}function Xa(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function Ga(e){return Lh(e).map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:t.settling==="confirmed"?1:Ua(t),glyph:t.glyph??ir(t.label||t.command),...t.held?{held:!0}:{},...t.settling?{settling:t.settling,settleSeconds:t.settleSeconds??0}:{},...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function Lh(e){return e.some(t=>t.dispatchedAt!==void 0)?e.map((t,n)=>({item:t,index:n})).sort((t,n)=>(t.item.dispatchedAt??Number.NEGATIVE_INFINITY)-(n.item.dispatchedAt??Number.NEGATIVE_INFINITY)||t.index-n.index).map(({item:t})=>t):e}function D1({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||Rl(e)!=="shown"?"none":n||Tl({oneWaySeconds:Ye("s",e)})==="live"?"badge":t?"strip":"none"}const Ph={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},un={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Oh(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Ph[e.phase]}const Jn=new Set(["overdue","lost"]),Nh=180,Fh=96;function Ya(e){return je(Ye("s",Math.max(0,e)))}function Dh(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const zh=1;function lr(e){const t=El(),n=p.useRef(t);n.current=t;const[o,r]=p.useState(e),s=p.useRef({eta:e,ut:vo(t)});return p.useEffect(()=>{const l=s.current.eta;(l===null!=(e===null)||l!==null&&e!==null&&Math.abs(e-l)>=zh)&&(s.current={eta:e,ut:vo(n.current)},r(e))},[e]),p.useEffect(()=>{const l=setInterval(()=>{const{eta:i,ut:c}=s.current;if(i===null)return;const d=vo(n.current);if(d!==void 0){if(c===void 0){s.current={eta:i,ut:d};return}r(Math.max(0,i-(d-c)))}},1e3);return()=>clearInterval(l)},[]),o}function vo(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function Hh({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":r="In-flight commands",variant:s="inline",onDismiss:l}){const{ref:i,size:c}=Zn({w:320,h:0}),d=s==="rail"||s==="expanded"?e:e.filter(f=>!f.settling);if(s==="rail")return d.length===0?null:a.jsx(Bh,{items:d,"aria-label":r});if(s==="expanded")return d.length===0?null:a.jsx(Jh,{items:d,"aria-label":r,onDismiss:l});const u=n!=="auto"?n:c.w>=Nh?"full":c.w>=Fh?"compact":"badge";return d.length===0?null:u==="badge"?a.jsx(Wh,{ref:i,items:d,mode:t,"aria-label":r}):a.jsx(Za,{ref:i,role:"list","aria-label":r,"data-mode":t,"data-density":u,$row:o==="row",children:d.map(f=>a.jsx(Uh,{item:f,$compact:u==="compact"},f.id))})}const ct=8,qa=1/3;function Bh({items:e,"aria-label":t}){const n=e.filter(o=>!o.settling);return a.jsx(Xh,{role:"img","aria-label":`${t}: ${n.length} in flight`,children:e.map(o=>{const r=Math.max(0,Math.min(1,o.progress??Qn[o.phase]));return a.jsx(Ka,{...o.settling?{"data-role":"settling","data-settling":o.settling}:{"data-role":"glow","data-phase":o.phase,...o.held?{"data-held":""}:{}},$settling:o.settling,style:{"--dot-colour":Va(o),"--dot-progress":r,"--settle-seconds":o.settleSeconds??0}},o.id)})})}const Wh=function({ref:t,items:n,mode:o,"aria-label":r}){const s=lr(Dh(n)),l=n.some(c=>Jn.has(c.phase)),i=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${Ya(s)}`;return a.jsx(Le,{text:n.map(c=>c.label).join(`
`),focusable:!0,children:a.jsx(Za,{ref:t,role:"group","aria-label":`${r}: ${i}`,"data-mode":o,"data-density":"badge",$row:!1,children:a.jsxs(Qa,{$phase:l?"overdue":"in-transit",children:[a.jsx(Ja,{"aria-hidden":"true",$pulse:!l,children:"↑"}),a.jsxs(ei,{children:[n.length,s!==null&&a.jsxs(a.Fragment,{children:[" · ",a.jsx(ar,{value:Math.max(0,s)})]})]})]})})})};function Uh({item:e,$compact:t}){const n=lr(e.etaSeconds),o=Jn.has(e.phase),r=n===null?`${e.label}, ${un[e.phase]}`:`${e.label}, ${Ya(n)}`;return a.jsxs(Qa,{$phase:e.phase,role:"listitem",...t?{"aria-label":r,title:r}:{},children:[a.jsx(Ja,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Oh(e)}),!t&&a.jsx(lf,{children:e.label}),a.jsx(ei,{children:n===null?un[e.phase]:a.jsx(ar,{value:Math.max(0,n)})})]})}const Fn=Bo`
  from { opacity: 1; }
  to { opacity: 0; }
`,Xh=y.div`
  position: relative;
  display: block;
  width: 100%;
  height: 16px;
  /* Clips the part of each dot above the strip, whatever box holds it. */
  overflow: hidden;
`,Gh=14;function Yh(e,t,n){const o=Math.min(Gh,(n-ct)/Math.max(1,t)),r=Math.ceil(e/2)*(e%2===1?1:-1),s=n/2+r*o;return Math.max(0,Math.min(n-ct,s-ct/2))}function ts({items:e,height:t}){return a.jsx(Kh,{role:"group","aria-label":"Commands on the rail",style:{height:t},children:e.map((n,o)=>{const r=Math.max(0,Math.min(1,n.progress??Qn[n.phase]));return a.jsx(Le,{text:n.settling?null:`${n.label}, ${un[n.phase]}`,announce:!1,focusable:!n.settling,children:a.jsx(Ka,{...n.settling?{"data-role":"settling","data-settling":n.settling,"aria-hidden":!0}:{role:"img","aria-label":`${n.label}, ${un[n.phase]}`,"data-role":"glow","data-phase":n.phase,...n.held?{"data-held":""}:{}},"data-lane":o,$settling:n.settling,$lane:!0,style:{"--dot-colour":Va(n),"--dot-progress":r,"--settle-seconds":n.settleSeconds??0,"--lane-top":`${Yh(o,e.length,t)}px`}})},n.id)})})}function Va(e){return e.settling==="confirmed"?"var(--color-accent-fg)":e.held||e.settling==="failed"||Jn.has(e.phase)?xe.warn:"var(--color-accent-fg)"}const qh=e=>e==="confirmed"?F`
        transition: left var(--settle-time) var(--ease-linear);
        animation: ${Fn} ${dn}ms var(--ease-standard) var(--settle-time) forwards;
      `:e==="failed"?F`
          animation: ${Fn} ${dn}ms var(--ease-standard) forwards;
        `:null,Vh=Bo`
  from { top: ${-ct*(1-qa)}px; }
  to { top: var(--lane-top); }
`,Kh=y.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,Ka=y.span`
  position: absolute;
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  top: ${-ct*(1-qa)}px;
  /* The dot's own width is kept inside the strip, so it is whole at both ends. */
  left: calc((100% - ${ct}px) * var(--dot-progress));
  width: ${ct}px;
  height: ${ct}px;
  border-radius: var(--radius-circle);
  background: var(--dot-colour);
  box-shadow:
    0 0 6px 2px color-mix(in srgb, var(--dot-colour) 60%, transparent),
    0 0 14px 4px color-mix(in srgb, var(--dot-colour) 25%, transparent);

  ${({$lane:e,$settling:t})=>e&&F`
      top: var(--lane-top);
      /* A hover target a little larger than the dot, so its name is easy to find. */
      pointer-events: ${t?"none":"auto"};
      &::before {
        content: "";
        position: absolute;
        inset: -4px;
      }
    `}

  @media (prefers-reduced-motion: no-preference) {
    transition: left var(--duration-slow) var(--ease-linear);
    ${({$settling:e})=>qh(e)}
    ${({$lane:e,$settling:t})=>e&&!t&&F`
        animation: ${Vh} var(--duration-base) var(--ease-entrance);
      `}
  }
`,Zh=54,rn=5,Qh=3,cr=Zh-8-rn,Dn=60,ns={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:xe.warn,lost:xe.warn};function Jh({items:e,"aria-label":t,onDismiss:n}){const[o,r]=p.useState(null),s=Th(o),l=s.left||s.right;return a.jsxs(tf,{"data-command-list":"",children:[a.jsx(nf,{ref:r,role:"list","aria-label":t,...l?{tabIndex:0,"data-scrolls":""}:{},children:e.map(i=>a.jsx(ef,{item:i,onDismiss:n},i.id))}),a.jsx(Jr,{$position:"left",$visible:s.left}),a.jsx(Jr,{$position:"right",$visible:s.right})]})}function ef({item:e,onDismiss:t}){const n=e.glyph??ir(e.label),o=e.settling==="confirmed"?ns["awaiting-reply"]:e.held||e.settling==="failed"?xe.warn:ns[e.phase],r=Math.max(0,Math.min(1,(e.progress??Qn[e.phase])*1.5)),s=Jn.has(e.phase)&&!!t&&!e.settling,l=`${e.label}, ${un[e.phase]}`;return a.jsxs(of,{role:"listitem","aria-label":l,...e.settling?{"data-settling":e.settling,"aria-hidden":!0}:{"data-phase":e.phase,...e.held?{"data-held":""}:{}},$settling:e.settling,style:{color:o,"--settle-seconds":e.settleSeconds??0},children:[a.jsx(Le,{text:s?`Dismiss ${e.label}`:l,announce:!1,children:a.jsxs(rf,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:i=>{Wa(i.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[a.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&a.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),a.jsx(sf,{children:a.jsx("span",{className:"fill",style:{"--fill-ratio":r}})})]})}const tf=y.div.attrs({role:"group"})`
  container-type: inline-size;
  /* Never shrinks in the rail's flex column, so a combined pinned rail shows the whole tile row. */
  flex: 0 0 auto;
  /* The row container the tiles sit in; its horizontal inset matches the standard content margin. */
  margin: var(--outset-command-strip);
  /* The inset equals (panel radius - tile radius), so the first tile's corner nests concentrically in the panel's. */
  --queue-panel-radius: calc(var(--radius-floating) * 2);
  --queue-tile-inset: calc(var(--queue-panel-radius) - var(--radius-regular));
  padding: var(--queue-tile-inset);
  height: calc(
    ${cr}px + ${rn}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
  /* Holds the overflow glows over the row's edges. */
  position: relative;
`,nf=y.div`
  display: flex;
  flex-direction: row;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${Qh}px;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  /* Native scrollbar hidden: the edge glows show scroll state. */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${pn}
`,of=y.div`
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @media (prefers-reduced-motion: no-preference) {
    ${({$settling:e})=>e==="confirmed"?F`
            animation: ${Fn} ${dn}ms var(--ease-standard)
              var(--settle-time) forwards;
            .fill {
              transition:
                height var(--settle-time) var(--ease-linear),
                width var(--settle-time) var(--ease-linear);
            }
          `:e==="failed"?F`
              animation: ${Fn} ${dn}ms var(--ease-standard) forwards;
            `:null}
  }

  @container (min-width: ${Dn}px) {
    flex-direction: column;
  }
`,rf=y.div`
  --s: ${cr}px;
  flex: 0 0 var(--s);
  width: var(--s);
  height: var(--s);
  align-self: center;
  position: relative;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  appearance: none;
  font: inherit;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: currentColor;
  background: color-mix(in srgb, currentColor 10%, var(--color-surface-raised));
  border: 1px solid currentColor;
  border-right: 0;
  border-radius: var(--radius-regular) 0 0 var(--radius-regular);
  overflow: hidden;

  @container (min-width: ${Dn}px) {
    border-right: 1px solid currentColor;
    border-bottom: 0;
    border-radius: var(--radius-regular) var(--radius-regular) 0 0;
  }

  .glyph {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: var(--color-text-primary);
  }
  .dismiss {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    opacity: 0;
    background: color-mix(in srgb, currentColor 22%, var(--color-surface-sunken));
  }

  &:is(button) {
    cursor: pointer;
  }
  &:is(button):hover .dismiss,
  &:is(button):focus-visible .dismiss {
    opacity: 1;
  }
  &:is(button):hover .glyph,
  &:is(button):focus-visible .glyph {
    opacity: 0;
  }
  /* Not the kit's shared ring: every other part of the tile follows the phase colour through currentColor. */
  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 1px;
  }
`,sf=y.div`
  --s: ${cr}px;
  position: relative;
  flex: 0 0 ${rn}px;
  width: ${rn}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${Dn}px) {
    width: var(--s);
    height: ${rn}px;
    border-radius: 0 0 var(--radius-regular) var(--radius-regular);
  }

  .fill {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(var(--fill-ratio, 0) * 100%);
    background: currentColor;
  }
  @container (min-width: ${Dn}px) {
    .fill {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: calc(var(--fill-ratio, 0) * 100%);
      height: auto;
    }
  }
`,Za=y.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: ${({$row:e})=>e?"row":"column"};
  flex-wrap: ${({$row:e})=>e?"wrap":"nowrap"};
  column-gap: var(--gap-command-list-column);
  gap: var(--gap-command-list-row);
  padding: var(--inset-command-list);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,af={"in-transit":F`
    color: var(--color-text-primary);
  `,"awaiting-reply":F`
    color: var(--color-text-muted);
  `,due:F`
    color: var(--color-text-muted);
  `,overdue:F`
    color: ${De.warn};
  `,lost:F`
    color: ${De.warn};
  `},Qa=y.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>af[e]}
`,Ja=y.span`
  flex: 0 0 auto;
  color: ${({$inherit:e})=>e?"inherit":"var(--color-accent-fg)"};

  ${({$pulse:e})=>e&&F`
      @media (prefers-reduced-motion: no-preference) {
        animation: in-flight-list-pulse 1.6s var(--ease-emphasis) infinite;
      }
    `}

  @keyframes in-flight-list-pulse {
    50% {
      opacity: 0.35;
    }
  }
`,lf=y.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ei=y.span`
  flex: 0 0 auto;
`,cf="Awaiting first signal";function z1({expectedIn:e}){const t=e??0,n=Number.isFinite(t)&&t>0;return a.jsxs(a.Fragment,{children:[cf,n&&ea()&&a.jsx(df,{total:t})]})}function df({total:e}){return a.jsx(uf,{seconds:lr(e)??0})}function uf({seconds:e}){return e>0?a.jsxs(a.Fragment,{children:[" ",a.jsx(Pl,{level:"muted",children:a.jsx(ar,{value:Math.ceil(e)})})]}):null}const dr=e=>F`
  --fit-box: ${e};
`,hf=e=>F`
  --fit-mask: ${e};
`;function ti(e){return e==="go"||e==="info"?"caution":e}function zn({tone:e,size:t="md",live:n=!1,report:o,held:r,children:s,...l}){const i=rr(r),c=i===void 0?e:ti(e),d=c===void 0||c==="neutral"?void 0:c,u=o?.label??(typeof s=="string"?s:"");Uo(o?{id:o.id,severity:d??"go",label:u}:null);const f=n?{role:"status","aria-live":"polite"}:{},g=i===void 0?null:Ft(i),v=Reflect.get(l,"data-tooltip")!==void 0,{anchor:m,tip:x}=mn(v?null:g);return a.jsxs(a.Fragment,{children:[a.jsxs(gf,{$severity:d,$size:t,...f,...m,...l,children:[s,g!==null&&a.jsxs(a.Fragment,{children:[a.jsx(vf,{"aria-hidden":"true","data-held-mark":""}),a.jsxs(dt,{"data-unit-currency":"",children:[", ",g]})]})]}),x]})}const ff=F`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,pf={go:F`
    background: transparent;
    border-color: ${xe.go};
    color: ${De.go};
  `,info:F`
    background: transparent;
    border-color: ${xe.info};
    color: ${De.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${xe.info} 40%, transparent);
  `,caution:F`
    background: transparent;
    border-color: ${xe.caution};
    color: ${De.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${xe.caution} 45%, transparent);
  `,warn:F`
    background: transparent;
    border-color: ${xe.warn};
    color: ${De.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${xe.warn} 55%, transparent);
  `,nogo:F`
    background: transparent;
    border-color: ${xe.nogo};
    color: ${De.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${xe.nogo} 65%, transparent);
  `,offline:F`
    background: transparent;
    border-color: ${xe.offline};
    color: ${De.offline};
  `},mf={sm:F`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:F`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},gf=y.span`
  display: inline-block;
  position: relative;
  /* Sized by its own text, never stretched to a taller flex sibling. */
  align-self: center;
  ${dr("badge")}
  border: 1px solid;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;

  border-radius: var(--radius-pill);

  ${({$size:e})=>mf[e]}
  ${({$severity:e})=>e===void 0?ff:pf[e]}
`,vf=y.span`
  position: absolute;
  top: 0;
  right: 0;
  width: ${fe.held.domSize};
  height: ${fe.held.domSize};
  transform: translate(45%, -45%);
  background: ${fe.held.color};
  box-shadow: 0 0 0 1px var(--color-surface-panel);
  pointer-events: none;
`,xf={},bf={byKey:new Map,unaddressed:void 0,separate:!1};function os(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function yf(e,t){if(e.separate!==t.separate||!os(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!os(o,t.byKey.get(n)))return!1;return!0}function wf(e,t,n,o){const r=new Map;e!==void 0&&r.set(Xo(e),n);for(const[s,l]of Object.entries(t??{}))l!==void 0&&r.set(Fl(s),l);return{byKey:r,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function kf(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function $f(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function _f(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,l)=>s.depth-l.depth);let r=!1;for(const s of o)s.resettle(n)&&(r=!0);if(r)for(const s of t)s()}}}function Sf(e){const t=new Map,n=new Map,o=new Set,r=e?.root??_f();let s=bf;const l=c=>{let d;for(const u of c){const f=u.position;f!==void 0&&(d===void 0||f.base>d.base)&&(d=f)}return d?.rung},i={root:r,depth:e===void 0?0:e.depth+1,hold(c,d,u){const f=t.get(c);if(u===void 0)f!==void 0&&(f.delete(d),f.size===0&&t.delete(c));else{if($f(f?.get(d),u))return;f===void 0?t.set(c,new Map([[d,u]])):f.set(d,u)}e===void 0?r.sweep(c):e.hold(c,d,u)},settled:c=>n.get(c),readsAsOneFigure:c=>o.has(c),setPolicy(c){if(!yf(s,c)){s=c;for(const d of t.keys())r.sweep(d)}},resettle(c){const d=[...t.get(c)?.values()??[]],u=e?.settled(c),f=s.byKey.get(c)??s.unaddressed??xf,g=f.format??u?.format??l(d),v=f.as??u?.as,m=f.decimals??(s.separate?Dl(d,{format:g,as:v}):u?.decimals),x=g===void 0&&v===void 0&&m===void 0?void 0:{...g!==void 0&&{format:g},...v!==void 0&&{as:v},...m!==void 0&&{decimals:m}},S=s.separate&&sa(d,{format:g,as:v,decimals:m}),E=S!==o.has(c);return S?o.add(c):o.delete(c),kf(n.get(c),x)?E:(x===void 0?n.delete(c):n.set(c,x),!0)},attach(){r.family.add(i);for(const c of t.keys())r.sweep(c)},detach(){r.family.delete(i)}};return r.family.add(i),i}const ur={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},hn=p.createContext(ur);function Mf(){return p.useContext(hn)!==ur}function H1({children:e,of:t,pins:n,format:o,as:r,decimals:s,separate:l=!1}){const i=p.useContext(hn),[c]=p.useState(()=>Sf(i===ur?void 0:i));return p.useLayoutEffect(()=>(c.attach(),()=>c.detach()),[c]),p.useLayoutEffect(()=>{c.setPolicy(wf(t,n,{format:o,as:r,decimals:s},l))},[c,t,n,o,r,s,l]),a.jsx(hn.Provider,{value:c,children:e})}function jf(e,t={}){const n=p.useContext(hn),o=p.useId(),r=na(e),s=e?.unit,i=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||r===null?void 0:Xo(s),c=i===void 0||r===null||s===void 0||Ol(s)===void 0?void 0:Nl(r,s),d=c?.base,u=c?.rung;return p.useLayoutEffect(()=>{if(!(i===void 0||r===null||s===void 0))return n.hold(i,o,{reading:r,unit:s,...d!==void 0&&u!==void 0&&{position:{base:d,rung:u}}}),()=>n.hold(i,o,void 0)},[n,o,i,r,s,d,u]),p.useSyncExternalStore(n.root.subscribe,()=>i===void 0?void 0:n.settled(i),()=>{})}function B1(e,t={}){const n=p.useContext(hn),r=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||na(e)===null||e===null||e===void 0?void 0:Xo(e.unit);return p.useSyncExternalStore(n.root.subscribe,()=>r===void 0?!1:n.readsAsOneFigure(r),()=>!1)}const Ef=Ul,Af={sci:Yu,rep:Gu},ni=y.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,Rf=y.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?F`
          position: relative;
          ${Ca(e,t)}
        `:""}
`,Tf=y.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,Cf=y(dt)`
  user-select: none;
`,oi=y(dt)`
  user-select: none;
`,If=" ";function Lf(e,t,n,o){if(t===void 0)return null;const r=g=>Wo(g.magnitude,g.unit,{...n,format:o}).value,s=(g,v)=>r(v.minus(g)),l=sa([t.lo,t.hi],{...n,format:o});if(!Ba(e,[t.lo,t.hi],sr(r)))return null;const i=s(t.lo,t.value),c=s(t.value,t.hi),d=g=>/^[-+\u2212]?[0.,\s]*$/.test(g);if(!l&&d(i)&&d(c))return null;const u=r(t.value)===r(e),f={...n,format:o};return{oneFigure:l,plusMinus:!l&&u&&i===c?c:null,lo:r(t.lo),hi:r(t.hi),loSaid:Fr(t.lo,f),hiSaid:Fr(t.hi,f),kind:t.kind}}function Pf(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function xo({token:e,className:t,spaced:n}){const o=zl(e,Hl(e));if(o==="")return null;const r=Bl(o),s=Wl(o),l=Af[s?.head??o],i=Ef.has(o),c=r!==void 0;return a.jsxs(a.Fragment,{children:[n&&!i?If:null,a.jsx(Le,{text:r,announce:!1,children:a.jsxs(ni,{$attached:i,$icon:l!==void 0,className:t,"data-unit":e,children:[l?a.jsxs(a.Fragment,{children:[a.jsx(l,{size:"1em"}),s&&a.jsxs("span",{"aria-hidden":"true",children:["/",s.rest]})]}):c?a.jsx("span",{"aria-hidden":"true",children:o}):o,c&&a.jsxs(oi,{"data-unit-word":"",children:[" ",r]})]})})]})}function rs({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:r,marked:s,elsewhere:l,...i}){const c=Kn(e,{drawsReckoning:r}),d=s!=null&&!c.held&&c.shown!=null?{...c,held:!0,mark:s.kind,caption:s.caption}:c,{shown:u,held:f,mark:g,band:v}=d,m=l!=null&&l!==""&&u!=null,x=g??(m?"current":null),S=m?[d.caption,l].filter(Boolean).join("; "):d.caption,E=jf(u,i),$=Mf(),T=o===!0&&$,j=E===void 0?i:{...E,...i},A=Wo(u?.magnitude,u?.unit,j),M=u==null||v===null||!f?null:Lf(u,jl(v,u.unit),j,A.rung),{anchor:R,tip:_}=mn(Pf(S,M));return e!==void 0||t===void 0?a.jsxs(Rf,{className:n,$mark:x,$elsewhere:m,...Ha(d),...R,children:[A.value,!T&&a.jsx(xo,{token:A.symbol,spaced:!0}),M!==null&&a.jsxs(Tf,{"data-unit-band":"",children:[M.oneFigure?a.jsxs(a.Fragment,{children:[" (",a.jsx("span",{"aria-hidden":"true",children:"~"}),a.jsx(oi,{"data-unit-word":"",children:"approximately "}),M.lo]}):M.plusMinus===null?` (${M.lo} to ${M.hi}`:` ± ${M.plusMinus}`,!T&&a.jsx(xo,{token:A.symbol,spaced:!0}),M.plusMinus===null?")":null]}),x!==null&&a.jsx(Ia,{kind:x,elsewhere:m}),S!==null&&a.jsxs(Cf,{"data-unit-currency":"",children:[", ",S]}),_]}):typeof t!="string"?a.jsx(ni,{$attached:!1,$icon:!1,className:n,children:t}):a.jsx(xo,{token:t,className:n,spaced:!1})}const Of={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},Nf={center:"center",start:"flex-start",baseline:"baseline"},Ff=p.forwardRef(function({justify:t="between",align:n="center",gap:o,wrap:r=!1,children:s,...l},i){return a.jsx(Df,{ref:i,$justify:t,$align:n,$gap:o,$wrap:r,...l,children:s})}),Df=y.div`
  display: flex;
  align-items: ${({$align:e})=>Nf[e]};
  justify-content: ${({$justify:e})=>Of[e]};
  gap: ${({$gap:e})=>e?Ct[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function hr(e){const t=rr(e.held);return t===void 0?{label:e.label,tone:e.tone,title:e.title}:{label:e.label,tone:ti(e.tone),title:e.title??`${e.label}: ${Ft(t)}`,held:t}}const zf=.72,Hf=.76;function Oo({size:e,kind:t="held",figureSize:n}){return a.jsx("tspan",{dy:n===void 0?-e*.55:-(n*zf-e*Hf),fontSize:e,fill:fe[t].color,"data-held-mark":"","data-reckoning-mark":t,children:fe[t].glyph})}function W1({end:e,x1:t,y1:n,x2:o,y2:r}){return a.jsx("line",{"data-bound":e,x1:t,y1:n,x2:o,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function ri(e,t){return t===null?e:`${e}, ${t}`}function Bf(e){return e===null?{}:{"data-currency-in-name":""}}function U1({x:e,y:t,size:n,children:o}){return a.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function ss(e,t){return t?.state!=="held"?e:{...t,value:e}}function lt(e){return e.kind==="continuous"?"ribbon":"dot"}function Wf(e){return e.delivery==="acked"}function Uf(e){return e.direction==="command"?"outbound":"inbound"}function si(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function eo(e){return`${e.direction}/${e.kind}/${e.delivery}`}const Xf={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function fr(e){return Xf[eo(e)]??null}const as=new Set;function ai(e,t){const n=eo(e);if(as.has(n))return;as.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;ea()?Ml.error(o):console.error(o)}const ii=16,Pt=ii/2,No=5.5,Gf=2,Yf=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function pr(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function qf(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/Gf)),Math.max(2,Math.round(o)))}function Vf(e,t,n){if(e.length===0)return"";const o=pr(e,t,n);if(!(o>0))return`M0.00,${Pt.toFixed(2)}`;const r=qf(e,t,o),s=o/n*(t/r),l=e.length-1,i=[];for(let c=0;c<=r;c++){const d=Math.min(c/r*o,o),u=Math.max(0,Math.round((c-.5)*s)),f=Math.min(l,Math.round((c+.5)*s));let g=0;for(let m=u;m<=Math.max(u,f);m++)g=Math.max(g,Yf(e[l-Math.min(m,l)]));const v=(c%2===0?-1:1)*g*No;i.push(`${d.toFixed(2)},${(Pt+v).toFixed(2)}`)}return`M${i.join(" L")}`}const Kf=.25;function Zf(e,t,n){const o=pr(e,t,n);if(!(o>0))return"";const r=e.length-1,s=Math.max(1,Math.min(Math.round(Math.min(e.length,t)),Math.ceil(o/Kf))),l=o/n*(t/s),i=[],c=[];for(let d=0;d<s;d++){const u=Math.max(0,Math.round(d*l)),f=Math.min(r,Math.max(u,Math.round((d+1)*l)-1));let g=0,v=0;for(let $=u;$<=f;$++){const T=e[r-$];T&&(Number.isFinite(T.lo)&&(g=Math.min(g,Math.max(-1,T.lo))),Number.isFinite(T.hi)&&(v=Math.max(v,Math.min(1,T.hi))))}const m=d/s*o,x=(d+1)/s*o,S=(Pt-v*No).toFixed(2),E=(Pt-g*No).toFixed(2);i.push(`${m.toFixed(2)},${S}`,`${x.toFixed(2)},${S}`),c.unshift(`${x.toFixed(2)},${E}`,`${m.toFixed(2)},${E}`)}return`M${i.join(" L")} L${c.join(" L")} Z`}const li=.05;function mr(e){return typeof e=="number"&&Number.isFinite(e)&&e>0}const is=.02,ls=1.5,Qf=.25,Hn=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],to=100,tn=30,Jf=1.5,Ie=2,ep=4,tt=tn-Ie-ep,Qe=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(to-n*2),qt=e=>Ie+(1-Math.max(0,Math.min(1,e)))*tt,ci=e=>e==="inline"?Jf:0;function X1(e="inline"){const t=ci(e);return(to-t*2)/3}function di({tags:e,who:t}){return ai(e,t),a.jsx("g",{"data-rail-unrepresented":eo(e),"data-rail-entry":t})}function gt(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function cs(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(c=>c.age>=t);if(n===-1)return[];const o=e[n-1],r=e[n],s=r.age-o.age||1,l=(t-o.age)/s,i=o.value+l*(r.value-o.value);return[{age:t,value:i},...e.slice(n)]}function ds(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(d=>d.age>t),r=e.slice(0,o),s=e[o],l=r[r.length-1];if(!l)return[{age:t,value:s.value}];const i=s.age-l.age||1,c=(t-l.age)/i;return[...r,{age:t,value:l.value+c*(s.value-l.value)}]}const tp=.25;function sn(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>o.age)return null;if(t===o.age)return o.value;for(let r=1;r<e.length;r++){const s=e[r];if(t<=s.age){const l=e[r-1],i=(t-l.age)/(s.age-l.age||1);return l.value+i*(s.value-l.value)}}return o.value}function np(e,t,n){const o=t.length>0&&t[t.length-1].age>=n-Qf,r=e.map(i=>{if(sn(t,i.age)===null)return!1;let c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;const u=m=>{m!==null&&(c=Math.min(c,m),d=Math.max(d,m))},f=i.age-ls,g=i.age+ls;let v=sn(t,g);if(v===null){if(!o)return!1;v=t[t.length-1].value}u(sn(t,f)),u(v);for(const m of t)m.age>f&&m.age<g&&u(m.value);return i.value<c-is||i.value>d+is}),s=[];let l=0;for(let i=1;i<=r.length;i++)i<r.length&&r[i]===r[l]||(s.push({from:l,to:Math.min(i,r.length-1),off:r[l]}),l=i);return s}function op({stream:e,span:t,index:n,padX:o,oneT:r,twoT:s}){const i=`var(${Hn[n%Hn.length]})`,c=p.useId(),d=`cds-ramp-${c}-${n}`,u=`cds-fill-${c}-${n}`,f=`cds-tail-${c}-${n}`,g=fr(e.tags);if(g!=="continuous-strip")return g===null?a.jsx(di,{tags:e.tags,who:e.id}):null;const v=Wf(e.tags),m=v?e.inTransit:ds(e.inTransit,r),x=m.map(L=>({x:Qe(L.age,t,o),y:qt(L.value)}));if(x.length===0)return null;const E=(v?[]:ds(cs(e.inTransit,r),r*(1+tp))).map(L=>({x:Qe(L.age,t,o),y:qt(L.value)})),$=E.length>1&&E[E.length-1].x>E[0].x,T=`${gt(x)} L${x[x.length-1].x.toFixed(2)},${(Ie+tt).toFixed(2)} L${x[0].x.toFixed(2)},${(Ie+tt).toFixed(2)} Z`,j=v?cs(e.echo,s):[],A=j.map(L=>({x:Qe(L.age,t,o),y:qt(L.value)})),M=j.map(L=>({x:Qe(L.age,t,o),y:qt(sn(e.inTransit,L.age)??L.value)})),R=np(j,e.inTransit,t),_=m[m.length-1].age,U=sn(j,_),P=j.filter(L=>L.age>_),B=(U===null||P.length===0?P:[{age:_,value:U},...P]).map(L=>({x:Qe(L.age,t,o),y:qt(L.value)})),I=B.length>1?`${gt(B)} L${B[B.length-1].x.toFixed(2)},${(Ie+tt).toFixed(2)} L${B[0].x.toFixed(2)},${(Ie+tt).toFixed(2)} Z`:null;return a.jsxs("g",{"data-stream-group":e.id,"data-return-leg":v,children:[a.jsxs("defs",{children:[a.jsxs("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:x[0].x,y1:"0",x2:Math.max(x[x.length-1].x,x[0].x+1),y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:i,stopOpacity:"0.10"}),a.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0.40"})]}),a.jsxs("linearGradient",{id:u,x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0",stopColor:i,stopOpacity:"0.22"}),a.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0"})]}),$&&a.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:E[0].x,y1:"0",x2:E[E.length-1].x,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:i,stopOpacity:"0.40"}),a.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0"})]})]}),a.jsx("path",{"data-role":"area",d:T,fill:`url(#${u})`,stroke:"none"}),I&&a.jsx("path",{"data-role":"echo-area",d:I,fill:`url(#${u})`,stroke:"none"}),a.jsx("path",{"data-role":"commanded","data-stream":e.id,d:gt(x),fill:"none",stroke:`url(#${d})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),$&&a.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:gt(E),fill:"none",stroke:`url(#${f})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),R.map(L=>L.off?a.jsxs(p.Fragment,{children:[a.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:gt(A.slice(L.from,L.to+1)),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),a.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:gt(M.slice(L.from,L.to+1)),fill:"none",stroke:i,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]},L.from):L.to>L.from&&a.jsx("path",{"data-role":"echo","data-stream":e.id,d:gt(A.slice(L.from,L.to+1)),fill:"none",stroke:i,strokeWidth:"0.8",strokeLinecap:"round"},L.from))]})}function rp({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${p.useId()}`,o=e.tags,r=fr(o);if(r!=="continuous-strip")return r===null?a.jsx(di,{tags:o,who:e.id}):null;const s=(to-t*2)/3,l=e.wave,i=l??e.amplitudes,c=e.spanSamples??i.length,d=l!==void 0?Zf(l,c,s):"",u=l!==void 0?d:Vf(e.amplitudes,c,s);if(u===""&&!(l!==void 0&&l.length>0))return null;const f=Math.max(pr(l??e.amplitudes,c,s),1),g=`var(${si(o)})`,v=Uf(o)==="outbound",m=v?0:2*s;return a.jsxs("g",{"data-ribbon-group":e.id,"data-ribbon-zone":m===0?"outgoing":"confirmed",transform:`translate(${t+m} ${Ie}) scale(1 ${tt/ii})`,children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:v?0:f,y1:"0",x2:v?f:0,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:g,stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:g,stopOpacity:"0.1"})]})}),l!==void 0?a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-role":"ribbon-axis",x1:"0",x2:f,y1:Pt,y2:Pt,stroke:`url(#${n})`,strokeWidth:"1",vectorEffect:"non-scaling-stroke"}),d!==""&&a.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d,fill:`url(#${n})`,stroke:"none"})]}):a.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:u,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function sp({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:r}){const s=`cds-divfade-${p.useId()}`,l=r?.state==="held",i=l?Kn(r??null).caption:null,{anchor:c,tip:d}=mn(i),u=[...e,...t].find(j=>j.oneWaySeconds!==null),f=u?.oneWaySeconds??null;if(!u||!mr(f))return null;const g=f>=li;if(!g&&t.length===0)return null;const v=3*f,m=f,x=2*f,S=ci(o),E=Qe(m,v,S),$=Qe(x,v,S),T=e.every(j=>j.inTransit.length===0&&j.echo.length===0)&&t.every(j=>j.amplitudes.length===0);return a.jsxs(ap,{"data-oneway":f,"data-variant":o,$variant:o,...c,children:[a.jsxs(ip,{$variant:o,$quiet:T,role:"img","aria-label":ri(n,i),...Bf(i),viewBox:`0 0 ${to} ${tn}`,preserveAspectRatio:"none",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:Ie,x2:"0",y2:Ie+tt,children:[a.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(g?e:[]).map((j,A)=>a.jsx(op,{stream:j,span:v,index:A,padX:S,oneT:m,twoT:x},j.id)),t.map(j=>a.jsx(rp,{ribbon:j,padX:S},j.id)),a.jsx("line",{"data-divider":"t",x1:E,x2:E,y1:Ie,y2:Ie+tt,stroke:`url(#${s})`,strokeWidth:"0.4"}),a.jsx("line",{"data-divider":"2t",x1:$,x2:$,y1:Ie,y2:Ie+tt,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&a.jsxs("g",{"data-role":"hover-labels",children:[a.jsxs("text",{x:E,y:Ie-.4,textAnchor:"middle",fontSize:"2",children:[je(Ye("s",f),{decimals:1}),l&&a.jsx(Oo,{size:1.2})]}),a.jsxs("text",{x:$,y:Ie-.4,textAnchor:"middle",fontSize:"2",children:[je(Ye("s",2*f),{decimals:1}),l&&a.jsx(Oo,{size:1.2})]}),a.jsx("text",{x:Qe(f/2,v,S),y:tn-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),a.jsx("text",{x:Qe(1.5*f,v,S),y:tn-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),a.jsx("text",{x:Qe(2.5*f,v,S),y:tn-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&a.jsxs(a.Fragment,{children:[a.jsxs(lp,{"aria-hidden":"true",children:[a.jsxs("span",{children:["outgoing ",a.jsx("b",{children:"0"})]}),a.jsxs("span",{children:["echo"," ",a.jsx("b",{children:a.jsx(rs,{value:ss(Ye("s",f),r),decimals:1})})]}),a.jsxs("span",{children:["confirmed"," ",a.jsx("b",{children:a.jsx(rs,{value:ss(Ye("s",2*f),r),decimals:1})})]})]}),a.jsxs(cp,{"aria-hidden":"true",children:[(g?e:[]).map((j,A)=>a.jsxs("span",{children:[a.jsx("i",{style:{background:`var(${Hn[A%Hn.length]})`}}),j.label]},j.id)),t.map(j=>a.jsxs("span",{"data-role":"legend-ribbon",children:[a.jsx("i",{style:{background:`var(${si(j.tags)})`}}),j.label]},j.id)),g&&e.length>0&&a.jsxs("span",{"data-role":"legend-deviation",children:[a.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),d]})}const ap=y.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,ip=y.svg`
  display: block;
  width: 100%;
  /* The rail height is the band the Panel reserves, not a size the graph chose. */
  height: ${({$variant:e})=>e==="rail"?"var(--panel-rail-band)":e==="expanded"?"86px":"40px"};

  /* Strokes are scaled by 30/16 against the stretched 30-unit viewBox, so the trace is a real pixel wide in the band. */
  ${({$variant:e})=>e==="rail"?`[data-role="commanded"],
         [data-role="echo"],
         [data-role="deviation-expected"] { stroke-width: 1.5; }
         [data-role="deviation-actual"] { stroke-width: 1.88; }`:""}


  [data-role="hover-labels"] {
    opacity: ${({$quiet:e})=>e?1:0};
    fill: var(--color-text-muted);
    font-family: var(--font-family-mono);
  }
  &:hover [data-role="hover-labels"] {
    opacity: 1;
  }
`,lp=y.div`
  display: flex;
  justify-content: space-between;
  /* The graph stays full-bleed; the zone labels inset to the standard content margin. */
  margin: 0 var(--gutter-panel);
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;

  b {
    color: var(--color-text-dim);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
`,cp=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-legend);
  /* The legend sits at the standard content margin, with bottom room since the pinned rail has no padding. */
  margin: var(--outset-delay-legend);
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;

  span {
    display: inline-flex;
    align-items: center;
    gap: var(--gap-glyph);
  }
  i {
    display: inline-block;
    width: 10px;
    height: 2px;
  }
`;function us({handle:e,handles:t,"aria-label":n,mode:o,density:r,orientation:s,variant:l="inline"}){const i=t??(e?[e]:[]),c=i.length===1?i[0]:null,d=c?fr(c.tags):null;if(c&&d===null)return a.jsx(dp,{tags:c.tags,who:c["aria-label"]});if(c&&d!=="in-flight-row"){const v=c,m=v.effectiveDelaySeconds;return mr(m)?a.jsx(sp,{streams:v.streams??[],ribbons:v.ribbons??[],delayReading:v.delayReading,"aria-label":n??v["aria-label"],variant:l}):null}const u=Ga(i.flatMap(v=>v.inFlight)),g=i.some(v=>v.dismiss)?v=>i.find(m=>m.inFlight.some(x=>x.id===v))?.dismiss?.(v):void 0;return a.jsx(Hh,{items:u,"aria-label":n,mode:o,density:r,orientation:s,variant:l,onDismiss:g})}function dp({tags:e,who:t}){return ai(e,t??"unnamed handle"),a.jsx("span",{hidden:!0,"data-rail-unrepresented":eo(e)})}function ui(e){const n=xt(e)||e.command||"The command",o=e.code===void 0?void 0:ta(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function hi(e){return`${xt(e)||e.command||"The command"}: never sent. Safe to re-send.`}function fi(e){return`${xt(e)||e.command||"The command"}: ${e.warning}`}const up={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed",warned:"Commands likely to be lost"},hp={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command",warned:"warned command"};function fp(e,t){return e.kind==="refused"?It(e.entries[t]):e.kind==="found"?qo(e.entries[t]):e.kind==="failed"?ui(e.entries[t]):e.kind==="warned"?fi(e.entries[t]):e.kind==="undelivered"?hi(e.entries[t]):Vo(e.entries[t])}function pp(e){return e.entries.map((t,n)=>{const o=xt(t);return{id:t.id,subject:o||t.command||"",sentence:fp(e,n),dismissLabel:`Dismiss ${o||hp[e.kind]}`,tags:t.tags}})}function Mt(e){const{kind:t,onDismiss:n,live:o=!0}=e,r=e["aria-label"]??up[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const l=pp(e).map(i=>a.jsxs(vp,{role:o?void 0:"listitem",$tone:s,children:[lt(i.tags)==="ribbon"?a.jsx(bp,{$tone:s,children:i.subject}):a.jsx(xp,{"aria-hidden":"true",$tone:s,children:ir(i.subject)}),a.jsx(yp,{children:i.sentence}),n&&a.jsx(Fa,{type:"button","data-dismiss":"",onClick:c=>{Wa(c.currentTarget),n(i.id)},"aria-label":i.dismissLabel,children:"✕"})]},i.id));return o?a.jsx(gp,{forwardedAs:"div","aria-label":r,"data-command-list":"",additionsOnly:!0,children:l}):a.jsx(mp,{role:"list","aria-label":r,"data-command-list":"",children:l})}const pi=F`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,mp=y.div`
  ${pi}
`,gp=y(bt)`
  ${pi}
  &:empty {
    margin: 0;
  }
`,vp=y.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>xe[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${xe[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,xp=y.span`
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  min-width: 34px;
  padding: var(--inset-glyph);
  align-self: stretch;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: ${({$tone:e})=>De[e]};
  border: 1px solid ${({$tone:e})=>xe[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${xe[e]} 14%, var(--color-surface-raised))`};
`,bp=y.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>De[e]};
`,yp=y.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`;function Tt(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,o)=>Tt(n,t[o]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const n=[...t];return[...e].every(o=>{const r=n.findIndex(s=>Tt(o,s));return r===-1?!1:(n.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[n,o]of e)if(!t.has(n)||!Tt(o,t.get(n)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const n=e,o=t,r=new Set;for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of r)if(!Tt(n[s],o[s]))return!1;return!0}return!1}function no(e,t,n,o){const[r,s]=p.useState(o),l=p.useRef(t);l.current=t;const i=p.useRef(n);i.current=n;const c=p.useRef(r);return c.current=r,p.useEffect(()=>{if(!e)return;let d=c.current;const u=()=>{const m=l.current(e);i.current(d,m)||(d=m,s(m))};u(),e.addEventListener("scroll",u,{passive:!0});const f=new ResizeObserver(u);f.observe(e);for(const m of Array.from(e.children))f.observe(m);let g;const v=new MutationObserver(m=>{if(m.some(x=>x.type==="childList")){for(const x of Array.from(e.children))f.observe(x);u();return}g===void 0&&(g=requestAnimationFrame(()=>{g=void 0,u()}))});return v.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style"]}),()=>{e.removeEventListener("scroll",u),f.disconnect(),v.disconnect(),g!==void 0&&cancelAnimationFrame(g)}},[e]),r}function wp(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function mi(e){return no(e,wp,Object.is,!1)?0:void 0}function kp({label:e,selected:t,count:n,onToggle:o}){return a.jsxs($p,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[a.jsx("span",{children:e}),n!==void 0&&a.jsx(_p,{children:n})]})}const $p=y.button`
  ${dr("chip")}
  display: inline-flex;
  align-items: center;
  gap: var(--gap-glyph-control);
  padding: var(--inset-control-small);
  /* --radius-pill keeps the stadium shape through a padding change. */
  border-radius: var(--radius-pill);
  font-size: var(--font-size-compact);
  font-weight: 600;
  /* Sentence case: a real toggle button rather than a Badge, and its label is not the kit's to shout. */
  cursor: pointer;
  transition:
    background var(--duration-fast),
    border-color var(--duration-fast),
    color var(--duration-fast);

  background: ${({$selected:e})=>e?"var(--color-accent-fg)":"transparent"};
  color: ${({$selected:e})=>e?"var(--color-text-inverse)":"var(--color-text-dim)"};
  border: 1px solid
    ${({$selected:e})=>e?"var(--color-accent-fg)":"var(--color-border-subtle)"};

  &:hover {
    border-color: var(--color-accent-fg);
    color: ${({$selected:e})=>e?"var(--color-text-inverse)":"var(--color-text-primary)"};
  }

  ${Dt}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`,_p=y.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function Sp({value:e,onChange:t,clearLabel:n="Clear search",className:o,...r}){const s=p.useRef(null);return a.jsxs(Mp,{className:o,children:[a.jsx(jp,{...r,ref:s,type:"search",value:e,onChange:l=>t(l.target.value)}),e!==""&&a.jsx(Ep,{children:a.jsx(Fa,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:a.jsx(Xu,{size:"var(--icon-size-control)"})})})]})}const Mp=y.div`
  position: relative;
  display: flex;
  align-items: center;
`,jp=y($h)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,Ep=y.span`
  position: absolute;
  right: 0;
  display: inline-flex;
`;function G1({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=Xl(e),r=[...new Set(o)],[s,l]=p.useState(()=>new Set),[i,c]=p.useState(""),d=p.useId(),u=m=>{l(x=>{const S=new Set(x);return S.has(m)?S.delete(m):S.add(m),S})},f=[...s,i].filter(m=>m.length>0).map(m=>m.toLowerCase()),g=a.jsxs(aa,{gap:"related-packed",children:[a.jsxs(wh,{children:[a.jsx(kh,{htmlFor:d,children:t}),a.jsx(Sp,{id:d,value:i,placeholder:n,onChange:c})]}),r.length>0&&a.jsx(Ff,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:r.map(m=>a.jsx(kp,{label:m,selected:s.has(m),onToggle:()=>u(m)},m))})]}),v={matches:m=>{const x=m.toLowerCase();return f.every(S=>x.includes(S))},active:f.length>0};return gi.set(v,g),v}const gi=new WeakMap;function vi(e){return gi.get(e)??null}function Y1({filter:e,children:t,fill:n=!1}){return a.jsxs(aa,{gap:"related-dense",fill:n,children:[vi(e),t]})}const Ap={accent:"var(--color-accent-fg)",warn:"var(--color-warn-mark)"},Rp=24,Tp=96;function Cp({children:e,padded:t,caption:n,footer:o,strip:r,shape:s="rounded",edgeCue:l,...i}){const c=s==="circle",d=!c||l===void 0?[]:[l].flat(),u=!c&&r!==void 0&&r!==null&&r!==!1;return a.jsxs(Ip,{$padded:t&&!u,$stacked:u,$circle:c,$cued:d.length>0,"data-shape":c?"circle":void 0,...i,children:[u?a.jsxs(a.Fragment,{children:[a.jsx(Dp,{$padded:t,children:e}),a.jsx(zp,{"data-framed-display-strip":"",children:r})]}):c&&l!==void 0?a.jsx(Lp,{children:e}):e,d.length>0&&a.jsx(Fp,{cues:d}),n!=null&&a.jsx(bi,{children:n}),o!=null&&a.jsx(Hp,{children:o})]})}const Ip=y.div`
  position: relative;
  display: flex;
  flex-direction: ${({$stacked:e})=>e?"column":"row"};
  min-height: 0;
  min-width: 0;
  /* Sunken: the visual sits inside the panel surface rather than floating on it. */
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  /* The container answers with a corner proportioned to the box, so a frame never needs to know its own size. */
  border-radius: ${({$circle:e})=>e?"50%":"var(--radius-display-frame)"};
  /* A cued circle clips its contents in a layer of its own, so the cue can grow outward past the border. */
  overflow: ${({$cued:e})=>e?"visible":"hidden"};
  padding: ${({$padded:e})=>e?"var(--inset-framed-display)":"0"};
  ${({$circle:e})=>e?"aspect-ratio: 1 / 1; flex: none; align-self: center;":""}

  /* A child SVG or canvas fills the frame instead of its intrinsic 300x150. */
  & > svg,
  & > canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`,Lp=y.div`
  position: relative;
  flex: 1;
  display: flex;
  min-height: 0;
  min-width: 0;
  border-radius: var(--radius-circle);
  overflow: hidden;

  & > svg,
  & > canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`,We=12,hs=1,Pp=3,xi=1,Op=100*xi/200,fs=e=>e*Math.PI/180;function Np(e,t=Op){const n=Math.min(Math.max(e.span??90,1),359),o=Math.min(Math.max(Number.isFinite(e.grow)?e.grow:0,0),1),r=50,l=50+(hs+(Pp-hs)*o)*t,i=fs(e.angle-n/2),c=fs(e.angle+n/2),d=(f,g)=>`${(50+f*Math.cos(g)).toFixed(3)} ${(50-f*Math.sin(g)).toFixed(3)}`,u=n>180?1:0;return`M${d(r,i)}A${r} ${r} 0 ${u} 0 ${d(r,c)}L${d(l,c)}A${l} ${l} 0 ${u} 1 ${d(l,i)}Z`}function Fp({cues:e}){const{ref:t,size:n}=Zn({w:100+2*We,h:100+2*We}),o=(100+2*We)/Math.max(n.w,1),r=xi*o;return a.jsx("div",{ref:t,"aria-hidden":"true",style:{position:"absolute",left:`${-We}%`,top:`${-We}%`,width:`${100+2*We}%`,height:`${100+2*We}%`,pointerEvents:"none"},children:a.jsx("svg",{"aria-hidden":"true","data-edge-cues":"",viewBox:`${-We} ${-We} ${100+2*We} ${100+2*We}`,style:{display:"block",width:"100%",height:"100%",overflow:"visible"},children:e.map(s=>a.jsx("path",{"data-edge-cue":"",d:Np(s,r),fill:Ap[s.tone]},`${s.angle}-${s.tone}`))})})}const Dp=y.div`
  flex: 7 1 0;
  display: flex;
  min-height: 0;
  min-width: 0;
  padding: ${({$padded:e})=>e?"var(--inset-framed-display)":"0"};

  & > svg,
  & > canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`,zp=y.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${Rp}px;
  max-height: ${Tp}px;
  min-width: 0;
  overflow: hidden;
`,bi=y.div`
  position: absolute;
  top: var(--offset-frame-caption-top);
  left: var(--offset-frame-caption-left);
  z-index: 1;
  padding: var(--inset-notice-pill);
  border-radius: var(--radius-regular);
  /* The smallest rung, flush, so the label covers as little of the drawing as it can. */
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  color: var(--color-text-muted);
  background: var(--color-surface-sunken);
  pointer-events: none;

  /* A circle cuts the corners away, so its labels sit on the vertical axis. */
  [data-shape="circle"] > & {
    left: 50%;
    transform: translateX(-50%);
  }
`,Hp=y(bi)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,ps={width:160,height:72},Bp=2.5,Wp=420;function q1({width:e,height:t,plotHasData:n}){return!n&&e>=ps.width&&t>=ps.height?"center":e>=Wp&&e>=t*Bp?"beside":"inline"}const Up={overlay:F`
    position: absolute;
    bottom: var(--offset-graph-notice-bottom);
    left: var(--offset-graph-notice-left);
  `,center:F`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    text-align: center;
  `,inline:F`
    flex: 0 0 auto;
    align-self: flex-start;
    max-width: 100%;
    margin-top: var(--gap-sub-readout);
  `,beside:F`
    flex: 0 1 30%;
    align-self: flex-start;
    max-width: 40%;
  `};function Xp({placement:e,role:t="status",children:n,...o}){return a.jsx(Gp,{$placement:e,role:t,...o,children:n})}const Gp=y.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${Gl.regular};
  pointer-events: none;

  ${({$placement:e})=>Up[e]}
`,Bn=8;function yi(e){const t=[{cols:1,rows:e}];for(let n=2;n<=e;n++){const o=Math.ceil(e/n);o<(t.at(-1)?.rows??e)&&t.push({cols:n,rows:o})}return t}function wi(e){return e===0?"0px":`(${e}px + var(--gap-related))`}const ki=(e,t)=>`calc(${e} * ${t} + ${(e-1)*Bn}px)`,Yp=(e,t,n)=>`calc(${e} * (${t} + ${n+Bn}px) + ${(e-1)*Bn}px)`;function qp(e,t,n,o,r){const s=wi(n),l=yi(e).slice(1).map(({cols:c,rows:d})=>`
  @container grid-squares-width (width >= ${ki(c,t)}) {
    --cell: calc((100cqw - ${c-1} * ${o}) / ${c});
    --rows: ${d};
  }`).join(""),i=c=>`calc(var(--rows) * (${c} + ${s}) + (var(--rows) - 1) * ${o})`;return r!==void 0?`
  --cell: 100cqw;
  --rows: ${e};
  ${l}
  min-height: var(--grid-squares-height, ${i(r)});
`:`
  --cell: 100cqw;
  --rows: ${e};
  ${l}
  min-height: var(--grid-squares-height, clamp(${i(`min(var(--cell), ${t}, 100cqh - ${s})`)}, 100cqh, ${i("var(--cell)")}));
`}function Vp(e,t,n,o){const r=yi(e),s=o!==void 0;return r.slice(1).map(({cols:l,rows:i},c)=>`
  @container grid-squares (aspect-ratio >= ${(.88*l/r[c].rows).toFixed(2)}) and ((width >= ${ki(l,t)}) or (height < ${Yp(s?i:r[c].rows,o??t,n)})) {
    --cols: ${l};
    --rows: ${i};
  }`).join("")}function Kp(e,t){const n=`
  & > * > * {
    --grid-square-heading: ${e===0?"0px":`calc${wi(e)}`};
  }`;return e===0||t===void 0?n:`${n}
  @container (width < ${t}px) or (height < ${t+e+Bn}px) {
    & > * > * {
      --grid-square-heading: 0px;
    }
    & > * [data-grid-square-heading] {
      display: none;
    }
  }`}function Zp(e){const t=new Set;return e.map(n=>{const o=n.inFlight.filter(r=>t.has(r.id)?!1:(t.add(r.id),!0));return o.length===n.inFlight.length?n:{...n,inFlight:o}})}function Vt(e){const t=new Set;return e.filter(n=>t.has(n.id)?!1:(t.add(n.id),!0))}function Qp(e){const t=new Map;for(const n of e)for(const o of n.warnings??[]){const r=`${o.command}\0${o.label}\0${o.warning}`;t.has(r)||t.set(r,{...o,id:r,tags:n.tags})}return[...t.values()]}const ms=new Map,Jp=new Set(["overdue","lost"]);function e0(e){const t=new Set,n=new Set;for(const o of e){for(const r of o.refusals??[])t.add(r.id);for(const r of o.failures??[])t.add(r.id);for(const r of o.undelivered??[])t.add(r.id);for(const r of o.founds??[])(r.outcome==="ran"?n:t).add(r.id)}return{failed:t,ran:n}}function t0(e){const t=new Map;for(const d of e)for(const u of d.inFlight)u.settling||t.set(u.id,{handleId:d.id,row:u});const{failed:n,ran:o}=e0(e),[r,s]=p.useState({last:ms,settling:ms}),l=[...r.last].filter(([d])=>!t.has(d));if(l.length>0||t.size!==r.last.size||[...t].some(([d,u])=>r.last.get(d)?.row!==u.row)){const d=l.map(([u,f])=>{const g=n.has(u)||Jp.has(f.row.predictedPhase)&&!o.has(u)?"failed":"confirmed",v=g==="confirmed"?es(f.row):0;return[u,{...f,row:{...f.row,settling:g,settleSeconds:v}}]});s({last:t,settling:d.length===0?r.settling:new Map([...r.settling,...d])})}const c=p.useRef(new Map);return p.useEffect(()=>{const d=c.current;for(const[u,f]of r.settling){if(d.has(u))continue;const g=setTimeout(()=>{d.delete(u),s(v=>{const m=new Map(v.settling);return m.delete(u),{...v,settling:m}})},(f.row.settleSeconds??0)*1e3+dn);d.set(u,g)}},[r.settling]),p.useEffect(()=>{const d=c.current;return()=>{for(const u of d.values())clearTimeout(u)}},[]),r.settling.size===0?e:e.map(d=>{const u=[...r.settling.values()].filter(f=>f.handleId===d.id&&!t.has(f.row.id)).map(f=>f.row.settling==="confirmed"&&n.has(f.row.id)?{...f.row,settling:"failed",settleSeconds:0}:f.row.settling==="failed"&&o.has(f.row.id)?{...f.row,settling:"confirmed",settleSeconds:es(f.row)}:f.row);return u.length===0?d:{...d,inFlight:[...d.inFlight,...u]}})}function n0(e){if(lt(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return mr(t)?n>0||(t??0)>=li&&o>0:!1}return e.inFlight.length>0}function $i({tiny:e}={}){const t=ic(),n=Go();p.useEffect(()=>n?lc(n):void 0,[n]);const o=Zp(t0(t)).filter(n0),r=Qp(t),s=Vt(t.flatMap(w=>(w.refusals??[]).map(G=>({...G,tags:w.tags})))),l=Vt(t.flatMap(w=>(w.losses??[]).map(G=>({...G,tags:w.tags})))),i=Vt(t.flatMap(w=>(w.founds??[]).map(G=>({...G,tags:w.tags})))),c=Vt(t.flatMap(w=>(w.undelivered??[]).map(G=>({...G,tags:w.tags})))),d=Vt(t.flatMap(w=>(w.failures??[]).map(G=>({...G,tags:w.tags})))),u=s.length+c.length+d.length,f=o.length>0||u>0||l.length>0||i.length>0||r.length>0,[g,v]=p.useState(!1),[m,x]=p.useState(!1),[S,E]=p.useState(!1),$=g||m&&!S;p.useEffect(()=>{f||(v(!1),x(!1),E(!1))},[f]);const T=p.useId(),j=[...o.filter(w=>lt(w.tags)==="ribbon"),...o.filter(w=>lt(w.tags)!=="ribbon")],A=o.some(w=>lt(w.tags)==="ribbon"),M=j.filter(w=>lt(w.tags)!=="ribbon"),R=Ga(o.filter(w=>lt(w.tags)!=="ribbon").flatMap(w=>w.inFlight)),U=t.some(w=>w.dismiss&&(w.refusals?.length??0)>0)?w=>{for(const G of t)G.refusals?.some(re=>re.id===w)&&G.dismiss?.(w)}:void 0,B=t.some(w=>w.dismiss&&(w.losses?.length??0)>0)?w=>t.find(G=>G.losses?.some(re=>re.id===w))?.dismiss?.(w):void 0,L=t.some(w=>w.dismiss&&(w.undelivered?.length??0)>0)?w=>t.find(G=>G.undelivered?.some(re=>re.id===w))?.dismiss?.(w):void 0,K=t.some(w=>w.dismiss&&(w.failures?.length??0)>0)?w=>{for(const G of t)G.failures?.some(re=>re.id===w)&&G.dismiss?.(w)}:void 0,se=t.some(w=>w.dismiss&&(w.founds?.length??0)>0)?w=>{for(const G of t)G.founds?.some(re=>re.id===w)&&G.dismiss?.(w)}:void 0;return a.jsxs(o0,{"data-panel-rail-frame":"",$tiny:e,$hasContent:f,onMouseEnter:()=>{E(!1),x(!0)},onMouseLeave:()=>x(!1),children:[t.length>0&&a.jsxs(bt,{visuallyHidden:!0,additionsOnly:!0,children:[s.map(w=>a.jsxs("span",{children:[It(w)," "]},`refusal:${w.id}`)),l.map(w=>a.jsxs("span",{children:[Vo(w)," "]},`loss:${w.id}`)),c.map(w=>a.jsxs("span",{children:[hi(w)," "]},`undelivered:${w.id}`)),d.map(w=>a.jsxs("span",{children:[ui(w)," "]},`failure:${w.id}`)),i.map(w=>a.jsxs("span",{children:[qo(w)," "]},`found:${w.id}`)),r.map(w=>a.jsx("span",{children:fi(w)},`warning:${w.id}`))]}),f?a.jsxs(s0,{"data-panel-rail":"","data-grown":$,"data-pinned":g,"data-suppress-hover":S,onKeyDown:w=>{w.key==="Escape"&&g&&(w.stopPropagation(),v(!1),E(!0))},children:[$&&R.length>0&&!A&&a.jsx(gs,{children:a.jsx(ts,{items:R,height:l0})}),a.jsx(Le,{text:!$&&R.length>0?`In flight: ${R.filter(w=>!w.settling).map(w=>w.label).join(", ")}`:null,children:a.jsx(a0,{type:"button","aria-expanded":g,"aria-controls":T,"aria-label":"Signal-delay detail",onClick:()=>{v(w=>{const G=!w;return G||E(!0),G})},children:a.jsx(h0,{"aria-hidden":"true",hidden:!$,children:"▲"})})}),a.jsxs(c0,{id:T,"data-panel-rail-detail":"",children:[j.filter(w=>!$||lt(w.tags)==="ribbon").map(w=>a.jsx(us,{handle:w,variant:$?"expanded":"rail","aria-label":w["aria-label"]??($?"Delay detail":void 0)},w.id)),$&&M.length>0&&a.jsx(us,{handles:M,variant:"expanded","aria-label":"Commands in flight"},"queue"),!$&&(u>0||l.length>0||i.length>0||r.length>0)&&a.jsxs(d0,{children:[u>0&&a.jsx(bo,{children:u===1?"1 command failed":`${u} commands failed`}),l.length>0&&a.jsx(bo,{children:l.length===1?"1 command unconfirmed":`${l.length} commands unconfirmed`}),r.length>0&&a.jsx(bo,{children:r.length===1?"1 warning":`${r.length} warnings`}),i.length>0&&a.jsx(u0,{children:i.length===1?"1 unconfirmed command answered":`${i.length} unconfirmed commands answered`})]})]}),$&&R.length>0&&A&&a.jsx(gs,{"data-over-graph":"true",children:a.jsx(ts,{items:R,height:i0})})]}):null,$&&r.length>0&&a.jsx(Mt,{kind:"warned",entries:r,live:!1}),$&&s.length>0&&a.jsx(Mt,{kind:"refused",entries:s,onDismiss:U,live:!1}),$&&l.length>0&&a.jsx(Mt,{kind:"lost",entries:l,onDismiss:B,live:!1}),$&&c.length>0&&a.jsx(Mt,{kind:"undelivered",entries:c,onDismiss:L,live:!1}),$&&d.length>0&&a.jsx(Mt,{kind:"failed",entries:d,onDismiss:K,live:!1}),$&&i.length>0&&a.jsx(Mt,{kind:"found",entries:i,onDismiss:se,live:!1})]})}const o0=y.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,r0=F`
  display: flex;
  flex-direction: column;
  gap: var(--gap-delay-rail);
  /* A generous cap the grown content fits inside; the visible height settles at the content height. */
  max-height: 800px;
  /* Full-bleed, so the stream graph spans the widget edge to edge; each child owns its own inset. */
  padding: 0;

  & > *,
  & > [data-panel-rail-detail] > * {
    grid-area: auto;
  }
`,s0=y.div`
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;

  /* Height follows min(content, max-height), so animating max-height opens and collapses the rail (auto is not animatable). */
  display: grid;
  height: auto;
  /* The band, and nothing over it: the strip a widget reserves is the strip the rail fills. */
  max-height: var(--panel-rail-band);
  overflow: hidden;
  transition: max-height var(--duration-slow) var(--ease-standard);

  & > *,
  & > [data-panel-rail-detail] > * {
    grid-area: 1 / 1;
  }

  &:not([data-pinned="true"]) > [data-panel-rail-detail] > * {
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  /* Open (pinned or hover preview) grows past the band, driven by React state because the published height must be the grown one only. */
  &[data-grown="true"] {
    ${r0}
  }
`,a0=y.button`
  appearance: none;
  position: absolute;
  inset: 0;
  border: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;

  ${pn}

  &[aria-expanded="true"] {
    pointer-events: none;
  }

`,i0=86,l0=40,gs=y.div`
  pointer-events: none;

  &[data-over-graph="true"] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`,c0=y.div`
  display: contents;
`,bo=y.span`
  color: ${De.warn};
`,d0=y.span`
  align-self: center;
  justify-self: end;
  display: flex;
  gap: var(--gap-rail-summaries);
  padding: 0 var(--gutter-panel);
  font-size: var(--font-size-compact);
  /* Flush, so single-line chrome text fits the reserved band on a coarse pointer too. */
  line-height: var(--line-height-flush);
  font-weight: 700;
  letter-spacing: 0.04em;
  white-space: nowrap;
  pointer-events: none;
`,u0=y.span`
  color: var(--color-info-text);
`,h0=y.span`
  position: absolute;
  top: var(--offset-rail-hint);
  right: var(--gutter-panel);
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  pointer-events: auto;
  cursor: pointer;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: calc(-1 * var(--outset-rail-hint-target));
  }
`,_i=p.createContext(null);function V1({badges:e,children:t}){return a.jsx(_i.Provider,{value:e,children:t})}function f0(){return p.useContext(_i)}function Si({severity:e,count:t=1}){const n=t>1;return a.jsx(p0,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${cn[e]}`:cn[e],$mark:xe[e],$digits:n?String(t).length:1,children:n&&a.jsx(m0,{$fill:Ro[e],$ink:ra[e],children:a.jsx(g0,{"aria-hidden":"true",children:a.jsx("text",{x:"50%",y:"50%",dy:"0.365em",textAnchor:"middle",children:t})})})})}const vs="8px",p0=y.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${vs};
  /* The count's own size, so the width below can be counted in its digits. Digits this size are six pixels tall, which centre in the eight-pixel dot on whole pixels; at seven they are five, and one engine places the baseline half a pixel above or below the middle. */
  font-size: 8px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:vs};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,m0=y.span`
  /* Out of flow, centred over the fixed parent box with no say over its size. */
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: ${({$fill:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${({$ink:e})=>e};
  /* Below the --font-size-2xs floor, which would not fit the 8px dot. */
  font-size: inherit;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  line-height: var(--line-height-flush);
`,g0=y.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: currentColor;
`,v0=()=>()=>{},xs=()=>Yl;function Mi(){const e=ia();return p.useSyncExternalStore(e?e.subscribe:v0,e?e.getBreakdown:xs,e?e.getBreakdown:xs)}const x0=()=>()=>{},bs=()=>null;function b0(){const e=ia();return p.useSyncExternalStore(e?e.subscribe:x0,e?e.getSummary:bs,e?e.getSummary:bs)}const ji=F`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,y0=12;function w0(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function k0(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const r=o<e?t-y0:t;if(n[o]<=r)return o}return n.length-1}function $0(e,t,n){const[o,r]=p.useState(0),s=p.useRef(o);s.current=o;const l=[t,...n].join(`
`),i=p.useCallback(()=>{const c=e.current,d=l.split(`
`);if(!c||d.length<2){s.current!==0&&(s.current=0,r(0));return}const u=d.map(g=>w0(c,g)),f=k0(s.current,c.clientWidth,u);f!==s.current&&(s.current=f,r(f))},[e,l]);return p.useLayoutEffect(()=>{i()},[i]),p.useEffect(()=>{const c=e.current;if(!c||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>i());return d.observe(c),()=>d.disconnect()},[e,i]),{index:o,compacted:o>0}}const _0=24;function S0(e,t,n,o,r=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&r?!(t>n+_0):n>t}function ys(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const r=e.cloneNode(!0);n!==void 0&&(r.textContent=n),Object.assign(r.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),r.setAttribute("aria-hidden","true"),o.insertBefore(r,e.nextSibling);const s=r.getBoundingClientRect().width;return o.removeChild(r),s}const M0={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function Kt(e){return Number.parseFloat(e)||0}function j0(e,t,n,o){const[r,s]=p.useState(!1),l=p.useRef(r);l.current=r;const i=p.useRef(void 0),c=p.useRef(void 0),d=p.useRef(!1),u=p.useRef(o);u.current=o;const f=p.useCallback(()=>{const v=e.current;if(!v)return;const m=getComputedStyle(v),x=v.getBoundingClientRect().width-Kt(m.paddingLeft)-Kt(m.paddingRight),S=ys(t.current,{},u.current),E=ys(n.current,M0),$=n.current?.closest("[data-panel-aside-expand]")?.parentElement,T=$?getComputedStyle($):null,j=S===0||E===0?S+E:S+Kt(m.columnGap)+Kt(T?.paddingLeft??"")+Kt(T?.paddingRight??"")+E,A=l.current,M=x>0&&c.current!==void 0&&x<c.current;A&&M&&(d.current=!0);const R=S0(A,x,j,i.current,d.current);R!==A&&(d.current=R&&M),x>0&&(c.current=x),j>0&&(i.current=j),R!==l.current&&(l.current=R,s(R))},[e,t,n]),g=p.useRef({title:null,aside:null,observer:null});return p.useLayoutEffect(()=>{const v=t.current,m=n.current,x=g.current;if(x.observer===null||x.title!==v||x.aside!==m){x.observer?.disconnect(),x.title=v,x.aside=m,x.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>f());for(const S of[v,m])S&&x.observer?.observe(S,{subtree:!0,childList:!0,characterData:!0,attributes:!0});f();return}x.observer.takeRecords().length>0&&f()}),p.useEffect(()=>{const v=g.current;return()=>{v.observer?.disconnect(),v.observer=null}},[]),p.useEffect(()=>{const v=e.current;if(!v||typeof ResizeObserver>"u")return;const m=new ResizeObserver(()=>f());return m.observe(v),n.current&&m.observe(n.current),()=>m.disconnect()},[e,n,f]),r}const Ei=p.createContext("full"),E0=Ei.Provider;function K1(){return p.useContext(Ei)}const oo=p.createContext(null);function Ai({children:e}){const[t,n]=p.useState(null),o=p.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return a.jsx(oo.Provider,{value:o,children:e})}function A0({children:e}){return a.jsx(Ai,{children:e})}const Ri=`
  & > [${ca}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,Wn=y.div`
  /* Chrome only: border, surface and clip. The inset is Panel.Body's and the glow is Panel.Glow's. */
  background: var(--color-surface-panel);
  /* A size container, so the popped-open aside sizes itself in cqw against the panel's width. */
  container-type: inline-size;
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  /* Top only: the delay rail's band, reserved on every widget so a command in flight never pushes the title down. Sides and bottom stay zero so visual content can reach the chrome. */
  padding: var(--panel-rail-band) 0 0;
  /* When the rail travels with the header, the band is the sticky unit's first row instead. */
  ${({$railTravels:e})=>e?"padding-top: 0;":""}
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow: hidden;
  /* A hoverTitle panel is itself the tab stop, and the grid cell clips an outset ring, so the ring is drawn inside the edge. */
  ${({$hoverTitle:e})=>e?"position: relative;":""}
  ${({$hoverTitle:e})=>e?pn:""}
  /* A hand-composed panel can put sections straight in here, so this box owns the leftover height. */
  ${Ri}
`,R0=y.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${ji}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ti=p.forwardRef(function({compact:t,children:n,...o},r){const s=p.useRef(null),l=typeof n=="string"?n:"",i=t===void 0||l===""?T0:typeof t=="string"?[t]:t,{index:c,compacted:d}=$0(s,l,i);return a.jsx(Le,{text:d?l:void 0,children:a.jsx(R0,{...o,ref:u=>{if(s.current=u,typeof r=="function"){r(u);return}r&&(r.current=u)},"aria-label":d?l:void 0,children:c===0?n:i[c-1]})})}),T0=[],C0=y.div`
  padding-top: var(--inset-panel-header-top);
  display: flex;
  /* Centred, which levels the collapsed dots and chevron on the single-line title. */
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-panel-header);
  min-width: 0;
  /* Wraps so PanelToolbar's full basis starts its own line; the aside never wraps, because the title column absorbs the pressure first. */
  flex-wrap: wrap;
  /* Never shrink, or a short tile's body would overprint the title. */
  flex-shrink: 0;
`,I0=y.div`
  min-width: 0;
  /* A zero basis, so a long title shrinks beside the aside instead of wrapping it onto a second line; useFittedTitle measures the room this leaves. */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  display: flex;
  align-items: center;
  & > h3 {
    flex: 1 1 auto;
    min-width: 0;
  }
`,L0=y.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,P0=y.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,O0=y.details`
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
  /* Drops the ::details-content box, which otherwise breaks this element's shrink-to-fit sizing. */
  &::details-content {
    display: contents;
  }
  /* Exactly its content wide: the inline aside, or the dots summary once collapsed. */
  flex: 0 0 auto;

  & > summary {
    /* Wide default: no collapsed affordance, the aside just shows inline. */
    display: none;
    align-items: center;
    gap: var(--gap-panel-aside);
    list-style: none;
    cursor: pointer;
    /* Lands the dots on the title's cap band rather than its line box centre. */
    transform: translateY(-1px);
    /* Panel sets no foreground, so the currentColor chevron needs one. */
    color: var(--color-text-dim);
  }
  & > summary {
    ${Dt}
  }
  & > summary::-webkit-details-marker {
    display: none;
  }
  & > summary [data-panel-aside-chevron] {
    /* A CSS caret, not an icon, so the header stays out of every widget's SVG queries. Points down closed. */
    flex: 0 0 auto;
    width: 6px;
    height: 6px;
    /* Extra space before the chevron only: the rotated box's corner eats into the gap. */
    margin-left: var(--gap-panel-aside);
    border-right: 1.5px solid currentColor;
    border-bottom: 1.5px solid currentColor;
    /* The rotation leaves the ink centroid 1.4px low; the lift centres it on the dots. */
    transform: translateY(-1.4px) rotate(45deg);
    transition: transform var(--duration-base) var(--ease-standard);
  }
  &[open] > summary [data-panel-aside-chevron] {
    /* Points up when open; the centroid moves above centre, so the lift flips sign. */
    transform: translateY(1.4px) rotate(225deg);
  }

  & > [data-panel-aside-full] {
    /* Wide default: the full aside shows inline whatever the [open] state. */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--gap-panel-aside);
    flex-wrap: wrap;
    min-width: 0;
  }

  ${({$collapsed:e})=>e&&F`
      & > summary {
        display: inline-flex;
      }
      /* Hidden rather than display: none, so useHeaderAsideFit's clone measurement sees it as it sees the inline state. */
      &:not([open]):not([data-hovering]) > [data-panel-aside-full] {
        position: absolute;
        top: 0;
        right: 0;
        visibility: hidden;
        pointer-events: none;
      }
      /* Collapsed and open, or held open by the pointer: floats over the body so its controls do not reflow the panel. */
      &[open] > [data-panel-aside-full],
      &[data-hovering] > [data-panel-aside-full] {
        position: absolute;
        top: calc(100% + var(--offset-popover));
        right: 0;
        /* Widget-internal stacking above the header, off the app-global z ladder. */
        z-index: 3;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        flex-wrap: nowrap;
        /* A real floor so a control has room, capped at the panel width. */
        min-width: min(14rem, 90cqw);
        max-width: 90cqw;
        padding: var(--inset-popover);
        background: var(--color-surface-panel);
        border: 1px solid var(--color-border-subtle);
        border-radius: var(--radius-regular);
        box-shadow: var(--shadow-popover-drop)
          rgba(0, 0, 0, 0.35);
      }
    `}
`,N0=120;function Ci(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${cn[n.severity]}`:`${cn[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function Ii({title:e,compactTitle:t,aside:n,toolbar:o,...r}){const s=Mi(),l=p.useRef(null),i=p.useRef(null),c=p.useRef(null),d=j0(l,i,c,typeof e=="string"?e:void 0),[u,f]=p.useState(!1),[g,v]=p.useState(!1),m=p.useRef(null),x=p.useRef(null),S=p.useRef(null),E=p.useCallback(()=>{m.current!==null&&clearTimeout(m.current),m.current=null},[]);p.useEffect(()=>{d||(f(!1),v(!1))},[d]),p.useEffect(()=>E,[E]);const $=d&&(u||g);p.useEffect(()=>{if(!$)return;const M=_=>{_.key==="Escape"&&x.current?.contains(document.activeElement)&&(_.stopPropagation(),E(),v(!1),f(!1),S.current?.focus())},R=_=>{x.current?.contains(_.target)||(E(),v(!1),f(!1))};return document.addEventListener("keydown",M,!0),document.addEventListener("pointerdown",R,!0),()=>{document.removeEventListener("keydown",M,!0),document.removeEventListener("pointerdown",R,!0)}},[$,E]);const T=d?Ci(s):null,{anchor:j,tip:A}=mn($?null:T);return a.jsxs(C0,{ref:l,"data-panel-header":"",...r,children:[a.jsxs(I0,{children:[e!==void 0&&a.jsx(Ti,{ref:i,compact:t,children:e}),a.jsx(L0,{"aria-hidden":"true",children:a.jsx(zn,{children:null})})]}),n!==void 0&&a.jsx(P0,{children:a.jsxs(O0,{ref:x,"data-panel-aside-expand":"","data-hovering":d&&g?"":void 0,$collapsed:d,open:d?u:!0,onToggle:M=>{d&&(f(M.currentTarget.open),M.currentTarget.open||v(!1))},onPointerEnter:M=>{!d||M.pointerType==="touch"||(E(),v(!0))},onPointerLeave:M=>{M.pointerType!=="touch"&&(E(),m.current=setTimeout(()=>{m.current=null,v(!1)},N0))},children:[a.jsxs("summary",{ref:S,"data-tooltip":j["data-tooltip"],onPointerDown:j.onPointerDown,onPointerUp:j.onPointerUp,onFocus:j.onFocus,onBlur:j.onBlur,"aria-description":T??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(M=>`${M.count} ${cn[M.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(M=>a.jsx(Si,{severity:M.severity,count:M.count},M.severity)),a.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),A,a.jsx(E0,{value:d?"collapsed":"full",children:a.jsx("div",{"data-panel-aside-full":"",ref:c,children:n})})]})}),o!==void 0&&a.jsx(Li,{children:o})]})}const Li=y.div`
  ${dr("panel-toolbar")}
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--gap-control-row);
  padding: var(--inset-panel-toolbar);
  min-width: 0;
  /* Never shrink, or a short tile squeezes the controls away. */
  flex-shrink: 0;
  /* A full basis, so the toolbar always takes its own line in the wrapping header row. */
  flex-basis: 100%;
  width: 100%;
  /* Opaque: the sticky header's scroll glow only masks its top strip, so a tall toolbar would let scrolled rows draw through it. */
  background: var(--color-surface-panel);
`,Pi="44px",Oi=`scroll-padding-block: ${Pi};`,F0=y.div`
  --gap-related: var(--gap-related-comfortable);
  --gap-section: var(--gap-section-comfortable);
  --bleed-inline: var(--gutter-panel);
  /* The body's side and bottom inset; a lone framed drawing steps this down under a narrow container. */
  --panel-body-gutter: var(--gutter-panel);
  --panel-body-bottom: var(--inset-panel-bottom);

  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  padding-top: var(--inset-panel-top);
  padding-right: var(--panel-body-gutter);
  padding-bottom: var(--panel-body-bottom);
  padding-left: var(--panel-body-gutter);
  /* Body is the scroller, so the inset sits inside the scrolling box and never clips overflow. */
  overflow: auto;
  ${Oi}
  ${pn}
  /* The glow shows scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
  /* Fit-to-size never scrolls, and centres only once measurement says the content fits: Firefox clips safe center while reporting support for it. */
  ${({$fitToSize:e})=>e?"flex: 1; overflow: hidden;":""}
  ${({$loneFrame:e})=>e?`@container (width < ${D0}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${Ri}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${ca}] {
           min-height: 0;
         }`:""}
`,D0="25rem";function Ni({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...r}){const l=p.useContext(oo)?.registerScroller,[i,c]=p.useState(null),d=p.useCallback(f=>{l?.(f),c(f)},[l]),u=mi(i);return a.jsx(F0,{ref:d,tabIndex:u,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...r,children:e})}const z0="13rem",H0=y.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      max(
        min(${({$min:e})=>e}, 100%),
        ${({$columns:e})=>`calc((100% - ${e-1} * var(--gap-panel-columns)) / ${e})`}
      ),
      1fr
    )
  );
  /* Wider between columns than rows: a column gap has no section title doing the separating. */
  gap: var(--gap-panel-sections) var(--gap-panel-columns);
  /* Natural heights, so a short section beside a tall one does not read as an empty box. */
  align-items: start;
  & > [${ql}] {
    grid-column: 1 / -1;
  }
  /* A grid opened only to carry the augment slot, with nothing bound, takes no gap above it: a filling section reaches the body's bottom inset. */
  &:empty {
    display: none;
  }
`;function B0({children:e,hoverTitle:t}){const n=p.useRef(null),o=p.useRef(null),r=X0(n,o);return a.jsx(W0,{ref:n,$fits:r,"data-panel-fit-body":"",children:a.jsx(U0,{ref:o,$fits:r,$hoverTitle:t,"data-panel-fit-shifted":r&&t?"":void 0,children:e})})}const W0=y.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,U0=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Aligned like its box: centring here would push overflowing content up under the header. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
  /* The delay rail band above still reserves its own strip on a hoverTitle
     panel (see PanelProps.hoverTitle), so the box this centres within is
     shorter at the top than the panel actually is, by the band's own height.
     Centred content would read as sitting low by half of it, the same way it
     would if the box below a real header were centred on the whole panel
     instead of the room under that header. The band has no visible header to
     read as the reason, so the shift here is what keeps the figure reading as
     centred on the panel while the box itself stays exactly what fitToSize's
     own docs promise: never clipped, and unaffected while the content does
     not fit.

     The flex centring above absorbs half of any margin change into its own
     free-space split (a flex item's centred position moves by m/2 for a
     margin-top of m, not m), so the full band's height is what actually
     buys the half-band visual shift this needs. */
  ${({$fits:e,$hoverTitle:t})=>e&&t?"margin-top: calc(-1 * var(--panel-rail-band));":""}
  gap: var(--gap-tiny-content);
  min-height: 0;
  /* A query container, so a tiny presentation sizes its headline in cqw against the tile rather than the viewport. */
  container-type: inline-size;
`;function X0(e,t){const[n,o]=p.useState(!0);return p.useLayoutEffect(()=>{const r=e.current,s=t.current;if(!r||!s)return;const l=()=>{o(Y0(G0(s),r.clientHeight))};if(l(),typeof ResizeObserver>"u")return;const i=new ResizeObserver(l),c=()=>{i.observe(r),i.observe(s);for(const u of Array.from(s.children))i.observe(u)};c();const d=new MutationObserver(()=>{c(),l()});return d.observe(s,{childList:!0}),()=>{i.disconnect(),d.disconnect()}},[e,t]),n}function G0(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function Y0(e,t){return e<=t}const q0=y.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,V0=y.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${Oi}
  ${pn}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,Un=y.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e})=>e==="top"?"top: 0;":"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: ${Pi};
  /* The audit reads the mask depth from the gradient stops, not from this height. */
  ${hf("panel-scroll-glow")}
  pointer-events: none;
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity var(--duration-base) var(--ease-standard);
  /* A light affordance tint over a fully opaque panel-colour mask; only an opaque mask keeps scrolled content from ghosting through the sticky title. */
  background:
    linear-gradient(
      ${({$position:e})=>e==="top"?"to bottom":"to top"},
      color-mix(
        in srgb,
        color-mix(in srgb, var(--color-surface-panel), white 20%) 55%,
        transparent
      ),
      transparent 40%
    ),
    linear-gradient(
      ${({$position:e})=>e==="top"?"to bottom":"to top"},
      var(--color-surface-panel) 0%,
      var(--color-surface-panel) 27%,
      transparent 50%
    );
  /* Widget-internal stacking, off the app-global z ladder so it never lifts over dashboard chrome. */
  z-index: 1;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Fi=p.forwardRef(function({children:t,...n},o){const r=p.useRef(null),[s,l]=p.useState(null),i=p.useCallback(u=>{r.current=u,l(u)},[]);p.useImperativeHandle(o,()=>r.current);const c=no(s,vr,xr,gr),d=mi(s);return a.jsxs(q0,{...n,children:[a.jsx(V0,{ref:i,tabIndex:d,"data-scroll-area-inner":"",children:t}),a.jsx(Un,{$position:"top",$visible:c.top}),a.jsx(Un,{$position:"bottom",$visible:c.bottom})]})});function K0(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const ws="14rem",Z0=5,Q0="45%",J0=`min(${Zl(1,Z0).pxH}px, ${Q0})`;function ks(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const em=y.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${ks(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${ks(t,n)};`}

  /* Visual placement only: the sidebar always follows the body in the DOM, so reading and tab order never depend on its side. */
  ${({$side:e})=>e==="start"?"& > [data-panel-sidebar] { order: -1; }":""}

  /* The sidebar gets the rail band when the rail travels with the header, since only the body's scroller holds it. Under the body it is nowhere near the header, so it takes none. */
  ${({$railBand:e,$axis:t,$side:n})=>e&&!(t==="block"&&n==="end")?`& > [data-panel-sidebar] {
           padding-block-start: var(--panel-rail-band);
         }`:""}

  /* Under the body the sidebar follows the body's own bottom inset, so it takes a small top inset rather than the panel's. */
  ${({$axis:e,$side:t})=>e==="block"&&t==="end"?`& > [data-panel-sidebar] > * > [data-scroll-area-inner] {
           padding-top: var(--inset-panel-sidebar-under);
         }`:""}

  /* On the inline axis the sidebar gives back its inset on the edge facing the body, which already pays one. */
  ${({$axis:e,$side:t})=>e==="inline"?`& > [data-panel-sidebar] > * > [data-scroll-area-inner] {
           padding-inline-${t==="start"?"end":"start"}: 0;
         }`:""}
`;function tm({side:e="end",size:t,placement:n="auto",railBand:o,children:r,...s}){const{ref:l,size:i}=Zn({w:1,h:1}),c=K0(t??ws),d=i.w<=1||c===void 0||i.w>=c*2,u=n==="below"?"block":(n==="beside"||i.w>=i.h)&&d?"inline":"block",f=t??(u==="inline"?ws:J0);return a.jsx(em,{ref:l,"data-panel-split":u,$axis:u,$side:e,$size:f,$railBand:o,...s,children:r})}const nm=y(Fi)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,om=y.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function Di({children:e,...t}){return a.jsx(om,{"data-panel-sidebar":"",...t,children:a.jsx(nm,{children:e})})}const gr={top:!1,bottom:!1};function vr(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function xr(e,t){return e.top===t.top&&e.bottom===t.bottom}const rm=y.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function zi({children:e,railBandAbove:t,...n}){const o=p.useContext(oo),r=o?.scroller??null;p.useEffect(()=>{},[o]);const s=no(r,vr,xr,gr);return a.jsxs(rm,{...n,children:[e,a.jsx(Un,{$position:"top",$visible:s.top&&!t}),a.jsx(Un,{$position:"bottom",$visible:s.bottom})]})}function sm(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const Z1=["sections","actions"],$n=Object.freeze({});function am({summary:e}){const t=p.useRef(e.severity),[n,o]=p.useState(0);p.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const r=Ci(Mi());return a.jsx(im,{$pulse:n,children:a.jsx(Le,{text:r,focusable:!0,children:a.jsx(zn,{tone:e.severity,size:"sm",children:e.label})})})}const im=y.span`
  display: inline-flex;
  ${({$pulse:e})=>e>0&&F`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${e%2===0?"panel-status-pulse":"panel-status-pulse-b"}
          var(--duration-slow) var(--ease-emphasis);
      }
    `}
  @keyframes panel-status-pulse-b {
    0% {
      transform: scale(1);
    }
    35% {
      transform: scale(1.14);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes panel-status-pulse {
    0% {
      transform: scale(1);
    }
    35% {
      transform: scale(1.14);
    }
    100% {
      transform: scale(1);
    }
  }
`,Hi=y.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,lm=y.div`
  position: sticky;
  /* Reach the scroller's true top edge, cancelling the body's own top inset. */
  top: calc(-1 * var(--inset-panel-top));
  z-index: 2;
  /* Cancel the body's inset so the unit spans the full panel width. */
  margin: calc(-1 * var(--inset-panel-top)) calc(-1 * var(--panel-body-gutter))
    0;
  display: flex;
  flex-direction: column;
  /* Never shrink, or a short tile crushes the band and the title. */
  flex-shrink: 0;
  /* Opaque: the scroll glow only masks the first strip of the header, so rows scrolled under a taller title would show through. */
  background: var(--color-surface-panel);

  /* The band is this unit's own first row, so the rail frame does not pull up into container padding. */
  & > [data-panel-rail-frame] {
    margin-top: 0;
    /* The unit's backing is the opaque surface and the glow sits on it, so the band shows the glow with the rail drawn over it. */
    background: transparent;
  }

  /* A tiny tile's centred content is pulled up into the rail band's strip and cannot scroll under it, so an opaque backing would only clip the figure's top. */
  &:has(+ [data-panel-fit-body] [data-panel-fit-shifted]) {
    background: transparent;
  }

  /* The top glow is the first background layer while the body is scrolled, over the opaque surface and under the rail and header; capped at the unit's height so a short unit never masks rows below it. */
  &[data-panel-glow-top] {
    background:
      linear-gradient(
          to bottom,
          color-mix(
            in srgb,
            color-mix(in srgb, var(--color-surface-panel), white 20%) 55%,
            transparent
          ),
          transparent 40%
        )
        top / 100% min(44px, 100%) no-repeat,
      linear-gradient(
          to bottom,
          var(--color-surface-panel) 0%,
          var(--color-surface-panel) 27%,
          transparent 50%
        )
        top / 100% min(44px, 100%) no-repeat,
      var(--color-surface-panel);
  }

  /* Rows scrolling under the header fade out at its lower edge, where the eye meets them, instead of being cut off hard. */
  &[data-panel-glow-top]::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 20px;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      var(--color-surface-panel),
      transparent
    );
  }
`;function cm({children:e}){const t=p.useContext(oo),n=no(t?.scroller??null,vr,xr,gr);return a.jsx(lm,{"data-panel-sticky-top":"","data-panel-glow-top":n.top?"":void 0,children:e})}function dm({render:e}){const{ref:t,size:n}=Zn({w:0,h:0});return a.jsx(um,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const um=y.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,hm=y.div`
  flex: 1 1 100%;
  min-width: 0;
`,fm=y(Ii)`
  /* The rail band above is this header's top inset. */
  padding-top: 0;
  /* The one header that reads over scrolled content gets a title a notch brighter than the dim chrome token. */
  & h3 {
    color: color-mix(
      in srgb,
      var(--color-text-dim),
      var(--color-text-primary) 45%
    );
  }
`,pm=y.div`
  position: absolute;
  top: var(--inset-tiny);
  left: var(--inset-tiny);
  right: var(--inset-tiny);
  /* Above the panel's own content (PanelGlow, trend, footer), local sibling ordering inside this panel's own stacking context. Not app-global chrome, so no named z rung. */
  z-index: 3;
  display: flex;
  align-items: flex-start;
  gap: var(--gap-panel-aside);
  pointer-events: none;
`,mm=y(dt)`
  margin: 0;
  ${ji}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${Wn}:hover &,
  ${Wn}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function br(e){return e.held===void 0?e.label:`${e.label}: ${Ft(e.held)}`}function gm(e){let t=null;for(const n of e){const o=hr(n),{tone:r}=o;r===void 0||r==="neutral"||(t===null||Hr(r)>Hr(t.severity))&&(t={severity:r,label:br(o)})}return t}function $s({badges:e}){return a.jsx(a.Fragment,{children:e.map(t=>a.jsx(vm,{entry:t},t.id))})}function vm({entry:e}){const t=hr(e),{tone:n}=t;return Uo(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:br(t)}),null}function xm({summary:e,announcement:t}){return a.jsxs(a.Fragment,{children:[a.jsx(Le,{text:e.label,focusable:!0,children:a.jsx(bm,{children:a.jsx(Si,{severity:e.severity})})}),a.jsx(bt,{visuallyHidden:!0,assertive:!0,children:t})]})}const bm=y.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,ym=y.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function wm(e){return e.hoverTitle?a.jsx(km,{...e}):a.jsx(Bi,{...e,hoverTitleId:void 0})}function km(e){const t=p.useId();return a.jsx(Bi,{...e,hoverTitleId:t})}function Bi({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:r,panelToolbar:s,panelFilter:l,panelFooter:i,panelTrend:c,inactive:d,fitToSize:u,hoverTitle:f,hoverTitleId:g,panelSidebar:v,sidebarSide:m,sidebarSize:x,sidebarPlacement:S,sections:E,sectionMinWidth:$=z0,children:T,...j}){const A=f0(),M=Dr("actions"),R=Dr("sections"),_=sm(o,A),U=_.length===0?null:_.map(q=>{const ee=hr(q),{label:$e,tone:qe,title:Pe}=ee;return a.jsx(Le,{text:Pe,focusable:!0,children:a.jsx(zn,{tone:qe,held:ee.held,report:qe===void 0||qe==="neutral"?void 0:{id:q.id,label:br(ee)},children:$e})},q.id)}),P=l===void 0?s:a.jsxs(a.Fragment,{children:[s,a.jsx(hm,{children:vi(l)})]}),B=r??null,I=B!==null&&B!=="none"&&B!=="live"?B:null;Uo(I?{id:"stream",severity:fo(I),label:zr(I)??""}:null);const L=b0(),Y=L!==null&&_.some(q=>q.id===L.id),K=I===null?null:zr(I),J=Y?null:L!==null?a.jsx(am,{summary:L}):I===null||K===null?null:a.jsx(Le,{text:`Telemetry stream: ${K}`,focusable:!0,children:a.jsx(zn,{tone:fo(I),size:"sm",children:K})}),se=L?.label??K,w=se===null||se===""?"":typeof e=="string"?`${e}: ${se}`:`Status: ${se}`,G=n===void 0&&J===null&&U===null&&!M?void 0:a.jsxs(a.Fragment,{children:[n,M&&a.jsx(kn,{segment:"actions",props:$n}),U,J]}),re=L??gm(_)??(I===null||K===null?null:{severity:fo(I),label:K}),ye=re?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${re.label}`:`Status: ${re.label}`,be=n===void 0&&re===null&&!M?_.length===0?void 0:a.jsx($s,{badges:_}):a.jsxs(a.Fragment,{children:[n,M&&a.jsx(kn,{segment:"actions",props:$n}),a.jsx($s,{badges:_}),re!==null&&a.jsx(xm,{summary:re,announcement:ye})]}),pe=d!==void 0,ce=pe?[]:p.Children.toArray(E),X=ce.length>0,de=T===void 0&&!R&&!u&&ce.length===1&&$m(ce[0]),we=[];for(const q of ce){const ee=!u&&p.isValidElement(q)&&q.props.fill===!0,$e=we.at(-1);!ee&&$e!==void 0&&!$e.fill?$e.nodes.push(q):we.push({fill:ee,nodes:[q]})}X&&!we.some(q=>!q.fill)&&we.push({fill:!1,nodes:[]});const Ee=we.reduce((q,ee,$e)=>ee.fill?q:$e,-1),ue=q=>Math.max(1,q.filter(ee=>!(p.isValidElement(ee)&&ee.props.full===!0)).length),Ae=[];for(const q of we){const ee=Ae.length;if(q.fill){Ae.push(q.nodes[0]);continue}Ae.push(a.jsxs(H0,{$min:$,$columns:ue(q.nodes),children:[q.nodes,ee===Ee&&a.jsx(kn,{segment:"sections",props:$n})]},`sections-${ee}`))}const et=pe?a.jsx(Vl,{reason:d}):X?a.jsxs(a.Fragment,{children:[T,Ae]}):T,ae=a.jsxs(Ni,{fitToSize:u,loneFrame:de,hoverTitle:f,children:[a.jsxs(cm,{children:[a.jsx($i,{tiny:f}),!f&&a.jsx(fm,{title:e,compactTitle:t,aside:G,toolbar:P})]}),u?a.jsx(B0,{hoverTitle:f,children:et}):et,!X&&!pe&&a.jsx(kn,{segment:"sections",props:$n})]});return a.jsx(A0,{children:a.jsxs(Wn,{$railTravels:!0,$hoverTitle:f,...f?{tabIndex:0,role:"group","aria-labelledby":g,"data-tiny-panel":""}:{},...j,children:[a.jsx(zi,{railBandAbove:!0,children:v===void 0||pe?ae:a.jsxs(tm,{side:m,size:x,placement:S,railBand:!0,children:[ae,a.jsx(Di,{children:v})]})}),!pe&&c!==void 0&&a.jsx(dm,{render:c}),!pe&&i!==void 0&&a.jsx(Hi,{children:i}),f&&a.jsxs(pm,{"data-panel-hover-title":"",children:[a.jsx(mm,{as:"h3",id:g,children:e}),be!==void 0&&a.jsx(ym,{children:be})]}),a.jsx(bt,{visuallyHidden:!0,children:f&&ye!==void 0?"":w})]})})}function $m(e){if(!p.isValidElement(e)||e.type!==la||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=p.Children.toArray(t).filter(r=>!(p.isValidElement(r)&&r.type===Xp));if(n.length!==1)return!1;const[o]=n;if(!p.isValidElement(o))return!1;if(o.type===Cp)return!0;if(o.type!==p.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const Q1=Object.assign(wm,{Context:Ai,Delay:$i,Container:Wn,Header:Ii,Toolbar:Li,Footer:Hi,Title:Ti,Glow:zi,Body:Ni,Section:la,Sidebar:Di}),_m={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function J1({cols:e,minColWidth:t,fit:n=!1,gap:o="related-dense",rowGap:r,align:s="center",squares:l=!1,squareHeadingPx:i=0,squareHeadingMinPx:c,minRowHeight:d,children:u,...f}){if(l){const g=p.Children.toArray(u).length,v=t??"120px",m=a.jsx(Em,{$count:g,$min:v,$headingPx:i,$gap:Ct[o],$rowMin:d,children:a.jsx(Am,{$count:g,$min:v,$headingPx:i,$gap:Ct[o],$rowMin:d,$headingMin:c,"data-grid-squares":"",children:u})});return a.jsx(Mm,{$rowMin:d,...f,children:d===void 0?m:a.jsx(jm,{children:m})})}return a.jsx(Sm,{$cols:e,$minColWidth:t,$fit:n,$gap:o,$rowGap:r,$align:s,...f,children:u})}const Sm=y.div`
  display: grid;
  align-items: ${({$align:e})=>_m[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${Ct[t]} ${Ct[e]}`:Ct[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:n})=>e||(t?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,Mm=y.div`
  container: grid-squares-width / inline-size;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  ${({$rowMin:e})=>e&&`
  flex-basis: 0;
  min-height: ${e};
`}
`,jm=y(Fi)`
  & > [data-scroll-area-inner] {
    display: flex;
    flex-direction: column;
  }
`,Em=y.div`
  container: grid-squares / size;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${({$count:e,$min:t,$headingPx:n,$gap:o,$rowMin:r})=>qp(e,t,n,o,r)}
`,Am=y.div`
  --cols: 1;
  --rows: ${({$count:e})=>e};
  display: grid;
  flex: 1 1 0;
  min-height: 0;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
  gap: ${({$gap:e})=>e};
  ${({$count:e,$min:t,$headingPx:n,$rowMin:o})=>Vp(e,t,n,o)}
  & > * {
    container-type: size;
    min-width: 0;
    min-height: 0;
  }
  ${({$headingPx:e,$headingMin:t})=>Kp(e,t)}
`,Wi=.89,yr=.45;function Ui({kind:e,x:t,y:n,scale:o=1,ghost:r=!1}){const s=fe[e],l=s.canvasRadius*o,i={fill:s.color,opacity:r?yr:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const d=l*Wi;return a.jsx("rect",{x:t-d,y:n-d,width:2*d,height:2*d,...i})}const c=`${t},${n-l} ${t+l},${n+l*.8} ${t-l},${n+l*.8}`;return a.jsx("polygon",{points:c,...i})}function Xi(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function _s(e,t,n,o,r,{ghost:s=!1,scale:l=1}={}){const i=fe[n],c=i.canvasRadius*l;if(t.save(),t.globalAlpha=s?yr:1,t.fillStyle=Xi(e,i.cssVar,i.fallback),t.beginPath(),n==="held"){const d=c*Wi;t.rect(o-d,r-d,2*d,2*d)}else t.moveTo(o,r-c),t.lineTo(o+c,r+c*.8),t.lineTo(o-c,r+c*.8),t.closePath();t.fill(),t.restore()}function eb(e,t,{held:n,modelled:o},r={}){n!==void 0&&o!==void 0&&(t.save(),t.globalAlpha=yr,t.strokeStyle=Xi(e,fe.modelled.cssVar,fe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.stroke(),t.restore()),n!==void 0&&_s(e,t,"held",n.x,n.y,{...r,ghost:o!==void 0}),o!==void 0&&_s(e,t,"modelled",o.x,o.y,r)}const Xn=14,Ge=4,Xe=6,Rm=6,Ss=12,Ne=6,an=8,_n=4.5,Fo=4,Tm=12,Cm=190,Im=80;function nn(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function Lm(e,t,n,o){const r=o??e,s=r.x1-r.x0,l=e.y1-e.y0,i=s>=Cm&&l>=Im,c=i||o!==void 0,d=i||o?n:n.filter(M=>!M.detail),u=s-Ne*2-Ge*2-an-Fo,f=o!==void 0,g=Math.floor(u/Xe),v=M=>nn(M.value??On,g-(M.currency?M.currency.length+2:0)),m=M=>{const R=M.value??On;if(f)return nn(M.label,g);if(i)return`${M.label} ${R}`;const _=Math.floor((u-R.length*Xe)/Xe)-1-(M.modelled?2:0),U=nn(M.label,Math.min(_,Tm));if(U!=="")return`${U} ${R}`;const P=Math.floor(u/Xe)-(M.modelled?2:0);return nn(R,P)},x=M=>(i||f)&&M.currency?M.currency:"",S=M=>x(M)?Rm+x(M).length*Xe+(M.modelled?Ss:0):M.modelled?Ss:0,E=i?0:an+Fo,$=Math.floor((s-Ne*2-Ge*2)/Xe),T=Math.max(...d.map(M=>f?E+Math.max(m(M).length*Xe,v(M).length*Xe+S(M)):E+m(M).length*Xe+S(M)),c?Math.min(t.length,$)*Xe:0),j=c?1:0,A=(d.length*(f?2:1)+j)*Xn+Ge*2;return{full:i,named:c,headingChars:$,stacked:f,rows:d,text:m,valueText:v,currencyText:x,cardW:f?s:Math.min(T+Ge*2,s-Ne*2),cardH:A,headRows:j,fits:A<=l-Ne*2}}function Pm(e,t,n,o,r){const s=(l,i)=>l>=t&&l<=t+o&&i>=n&&i<=n+r;for(let l=1;l<e.cx.length;l++){const[i,c,d,u]=[e.cx[l-1],e.cy[l-1],e.cx[l],e.cy[l]];if(![i,c,d,u].every(Number.isFinite))continue;const f=Math.max(1,Math.ceil(Math.hypot(d-i,u-c)/Xn));for(let g=0;g<=f;g++)if(s(i+(d-i)*g/f,c+(u-c)*g/f))return!0}return!1}function wr({x:e,plot:t,heading:n,rows:o,column:r,avoid:s=[],traces:l=[]}){const i=Lm(t,n,o,r),{rows:c,cardW:d,cardH:u,fits:f}=i,g=t.y0+Ne,v=c.flatMap(_=>_.y===void 0||_.y===null?[]:[_.y]),m=(_,U)=>v.every(P=>e+_n<_||e-_n>_+d||P+_n<U||P-_n>U+u),x=t.x1-e-Ne,S=x>=d||x>=e-t.x0,E=_=>Math.max(t.x0+Ne,Math.min(t.x1-Ne-d,_)),$=S?[e+Ne,e-Ne-d]:[e-Ne-d,e+Ne],T=[g,t.y1-Ne-u].flatMap(_=>$.map(U=>({cardX:E(U),cardY:_}))),j=(_,U)=>l.every(P=>!Pm(P,_,U,d,u)),A=(_,U)=>s.every(P=>_+d<P.x0||_>P.x1||U+u<P.y0||U>P.y1),M=T.find(_=>m(_.cardX,_.cardY)&&j(_.cardX,_.cardY)&&A(_.cardX,_.cardY))??T.find(_=>m(_.cardX,_.cardY)&&A(_.cardX,_.cardY))??T.find(_=>m(_.cardX,_.cardY)&&j(_.cardX,_.cardY))??T.find(_=>m(_.cardX,_.cardY)),R=f?r?{cardX:r.x0,cardY:r.y0+Ne}:M:void 0;return{layout:i,place:R}}function tb(e){return wr(e).place!==void 0}function Om(e){const{layout:t,place:n}=wr(e);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+t.cardW,y1:n.cardY+t.cardH}}function Nm({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:l}){const{layout:i,place:c}=wr({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:l}),{full:d,named:u,headingChars:f,stacked:g,rows:v,text:m,valueText:x,currencyText:S,cardW:E,cardH:$,headRows:T}=i,j=c!==void 0,A=c?.cardX??0,M=c?.cardY??0,R=_=>_+Ge+(d?0:an+Fo);return a.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[a.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),v.map(_=>_.y===void 0||_.y===null?null:a.jsx("circle",{cx:e,cy:_.y,r:3.5,fill:_.color,stroke:"var(--color-text-primary)",strokeWidth:1},_.id)),j&&a.jsxs("g",{"data-plot-crosshair-card":"",children:[a.jsx("rect",{x:A,y:M,width:E,height:$,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),u&&a.jsx("text",{x:A+Ge,y:M+Ge+10,fill:"var(--color-text-muted)",fontSize:10,children:nn(n,f)}),v.map((_,U)=>{const P=g?2:1,B=M+Ge+(U*P+T)*Xn+10,I=B+(g?Xn:0);return a.jsxs("g",{"data-plot-crosshair-row":_.id,children:[!d&&a.jsx("rect",{x:A+Ge,y:B-8,width:an,height:an,fill:_.color,"data-plot-crosshair-swatch":""}),a.jsx("text",{x:R(A),y:B,fill:_.value===null||g?"var(--color-text-faint)":_.color,fontSize:10,style:{whiteSpace:"pre"},children:m(_)}),g&&a.jsx("text",{x:R(A),y:I,fill:_.value===null?"var(--color-text-faint)":_.color,fontSize:10,style:{whiteSpace:"pre"},children:x(_)}),_.modelled&&a.jsx(Ui,{kind:"modelled",x:A+E-Ge-S(_).length*Xe-(S(_)?8:4),y:I-3}),S(_)&&a.jsx("text",{x:A+E-Ge,y:I,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:S(_)})]},_.id)})]})]})}const Ms=720,Fm=110,Dm=200,js=56,zm=20,Hm=112,Bm=260,Wm=.4,Um=300;function Xm({width:e,height:t,contentWidth:n,legendHeight:o=0,cardHeight:r=0}){const s=Math.max(Hm,Math.ceil(n));if((t>e||e<Ms)&&t>=Dm)return{placement:"below"};if(e<Ms||t<Fm||s>Math.min(Bm,e*Wm)||e-s<Um)return{placement:"overlay"};const i=t>=js+o+r;return!i&&t<js+zm+r?{placement:"overlay"}:{placement:"beside",columnWidth:s,legendBelow:!i}}const Gm={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function Ym(e){return Gm[e]}const jt=4,Sn=3,Do=6;function qm(e,t){return e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0}function Vm(e,t){const n=(o,r)=>o>=t.x0&&o<=t.x1&&r>=t.y0&&r<=t.y1;if(e.cx.length===1)return Number.isFinite(e.cx[0])&&n(e.cx[0],e.cy[0]);for(let o=1;o<e.cx.length;o++){const[r,s,l,i]=[e.cx[o-1],e.cy[o-1],e.cx[o],e.cy[o]];if(![r,s,l,i].every(Number.isFinite))continue;const c=Math.max(1,Math.ceil(Math.hypot(l-r,i-s)/Do));for(let d=0;d<=c;d++)if(n(r+(l-r)*d/c,s+(i-s)*d/c))return!0}return!1}function Km({plot:e,card:t,traces:n,obstacles:o}){if(t.width<=0||t.height<=0||t.width>e.x1-e.x0-jt*2||t.height>e.y1-e.y0-jt*2)return;const r=e.x0+jt,s=e.x1-jt-t.width,l=e.y0+jt,i=e.y1-jt-t.height;return[{x:s,y:l},{x:r,y:i},{x:s,y:i},{x:r,y:l}].find(d=>{const u={x0:d.x-Sn,y0:d.y-Sn,x1:d.x+t.width+Sn,y1:d.y+t.height+Sn};return!n.some(f=>Vm(f,u))&&!o.some(f=>qm(u,f))})}function Zm(e){const t=[],n=[];let o=!0;for(let r=e.y0;r<=e.y1+Do;r+=Do){const s=Math.min(r,e.y1);t.push(o?e.x0:e.x1,o?e.x1:e.x0),n.push(s,s),o=!o}return{cx:t,cy:n}}function Qm(e,t){return e?.includes(t)??!1}function Es(e,t){const{reckoned:n,spans:o}=e.data;return n?.some(r=>t>=r.from&&t<=r.to)?"modelled":o?.some(r=>t>=r.from&&t<=r.to&&r.status==="recorded")?"recorded":"measured"}function Jm(e){const{x:t,y:n,y2:o}=e.data;let r=!0;for(let l=0;l<t.length;l++)if(!Number.isFinite(t[l])||l>0&&t[l]<t[l-1]){r=!1;break}if(r)return e;const s=t.map((l,i)=>i).filter(l=>Number.isFinite(t[l])).sort((l,i)=>t[l]-t[i]||l-i);return{...e,data:{x:s.map(l=>t[l]),y:s.map(l=>n[l]),...o?{y2:s.map(l=>o[l])}:{}}}}function eg(e,t,n){const o=e.data.x,r=e.data.y,s=Math.min(o.length,r.length);if(s===0||t<o[0]||t>o[s-1])return null;let l=0,i=s-1;for(;l<i;){const m=l+i>>1;o[m]<t?l=m+1:i=m}const c=l,d=Math.max(0,c-1);if(o[c]!==t&&c>0&&Qm(e.data.breaks,c))return null;const u=t-o[d]<=o[c]-t?d:c;if(n!==void 0&&Math.abs(o[u]-t)>n)return null;const f=o[c]-o[d];if(e.readBetween&&f>0&&o[c]!==t){const m=r[d]+(r[c]-r[d])*(t-o[d])/f;return Number.isFinite(m)?{index:u,x:t,y:m,currency:Es(e,u)}:null}const g=r[u];if(!Number.isFinite(g))return null;const v=e.data.y2?.[u];return{index:u,x:o[u],y:g,...v!==void 0&&Number.isFinite(v)?{y2:v}:{},currency:Es(e,u)}}function tg(e){const t=new Set;for(const n of e)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&t.add(o);return[...t].sort((n,o)=>n-o)}function As(e,t,n){if(e.length===0)return null;if(t===null)return e[e.length-1];let o=0,r=e.length-1;for(;o<r;){const l=o+r>>1;e[l]<t?o=l+1:r=l}let s=o+n;return e[o]!==t&&n>0&&(s-=1),e[Math.max(0,Math.min(e.length-1,s))]}function ng({x:e,y:t,size:n,color:o,text:r}){const s=n/2,l=`M 0 ${-s} L ${s} ${s*.8} L ${-s} ${s*.8} Z`,i=`M -0.9 ${-s*.42} H 0.9 V ${s*.2} H -0.9 Z`,c=`M -0.9 ${s*.4} H 0.9 V ${s*.64} H -0.9 Z`;return a.jsx(Le,{text:r,focusable:!0,children:a.jsxs("g",{role:"img","aria-label":r,"data-limit-crossing":"",transform:`translate(${e} ${t})`,children:[a.jsx("title",{}),a.jsx("circle",{r:12,fill:"transparent"}),a.jsx("path",{d:`${l} ${i} ${c}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),a.jsx("path",{d:l,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function Gi(e,t,n){return n==="above"?e>=t:e<=t}function og({y:e,cx:t,cy:n,limit:o,limitY:r,bad:s,breaks:l=[],step:i=!1,minGapPx:c}){const d=(S,E,$)=>{if(!E)return{index:S,x:t[S],y:n[S],entered:!1};if($===null)return{index:S,x:t[S],y:r,entered:!0};const T=n[S]-n[$],j=T===0?1:(r-n[$])/T;return{index:S,x:t[$]+(t[S]-t[$])*j,y:r,entered:!0}},u=new Set(l),f=[];let g=null,v=!1,m=!1,x=Number.NEGATIVE_INFINITY;for(let S=0;S<e.length;S++){if(!Number.isFinite(e[S])){g=null;continue}const E=Gi(e[S],o,s);if(E&&!m){const $=d(S,v,i||u.has(S)?null:g),T=f[f.length-1];T!==void 0&&$.x-x<c?T.spells++:f.push({...$,spells:1}),x=$.x}m=E,v=!0,g=S}return f}const rg=1;function sg(e,t,n,o,r){const s=n.to;if(s<1||s>=e.length)return!1;const l=o(e[s-1]),i=o(e[s]),c=r(t[s-1]),d=r(t[s]);return i>l?n.t.some((u,f)=>{const g=o(u),v=c+(d-c)*(g-l)/(i-l);return Math.abs(r(n.v[f])-v)>rg}):!1}function yo(e,t,n,o){const r=t-e;if(r===0){const s=(n+o)/2;return()=>s}return s=>n+(s-e)/r*(o-n)}function zo(e,t,n=5){if(e===t)return Array.from({length:n},()=>e);const r=(t-e)/(n-1),s=10**Math.floor(Math.log10(r)),i=([1,2,2.5,5,10].find(g=>g*s>=r)??10)*s,c=Math.ceil(e/i)*i,d=[];for(let g=0;d.length<n;g++){const v=c+g*i;if(v>t+i*.01)break;d.push(v)}if(d.length>=2)return d;const u=Math.floor(e/i)*i,f=Math.ceil(t/i)*i;return f>u?[u,f]:[u,u+i]}function Yi(e,t){const n=Math.floor(e/1e3);if(t>=36e5){const s=Math.floor(n/3600),l=Math.floor(n%3600/60),i=n%60;return`${s}:${String(l).padStart(2,"0")}:${String(i).padStart(2,"0")}`}const o=Math.floor(n/60),r=n%60;return`${o}:${String(r).padStart(2,"0")}`}function Rs(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let l=!1;for(let i=0;i<e.length;i++){if(!ro(e[i],t[i])){l=!1;continue}const c=n(e[i]).toFixed(2),d=o(t[i]).toFixed(2),u=!l||r.includes(i);s.push(`${u?"M":"L"}${c},${d}`),l=!0,u&&qi(e,t,i,r)&&s.push(`L${c},${d}`)}return s.join(" ")}function ro(e,t){return Number.isFinite(e)&&Number.isFinite(t)}function qi(e,t,n,o){return n+1>=e.length||o.includes(n+1)||!ro(e[n+1],t[n+1])}function ag(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let l=null;for(let i=0;i<e.length;i++){if(!ro(e[i],t[i])){l=null;continue}const c=n(e[i]).toFixed(2),d=o(t[i]).toFixed(2);if(l===null||r.includes(i)){s.push(`M${c},${d}`),qi(e,t,i,r)&&s.push(`L${c},${d}`),l=d;continue}s.push(`H${c}`),d!==l&&s.push(`V${d}`),l=d}return s.join(" ")}function ig(e,t,n,o,r,s=[],l=[],i=[]){if(e.length===0)return[];if(l.length===0&&i.length===0)return[{d:r(e,t,n,o,s)}];function c(x,S){const E=new Array(e.length);for(const $ of x){const T=Math.min(e.length-1,$.to);for(let j=Math.max(0,$.from);j<=T;j++)E[j]=S($)}return E}const d=c(l,x=>x.status),u=c(i,x=>x.basis),f=new Set(s),g=[];let v=0;const m=(x,S)=>{const E=x>0&&!f.has(x)?x-1:x,$=A=>A.slice(E,S+1),T=[];for(const A of s)A>E&&A<=S&&T.push(A-E);const j=r($(e),$(t),n,o,T);j!==""&&g.push({status:d[x],basis:u[x],d:j})};for(let x=1;x<=e.length;x++)(x===e.length||d[x]!==d[v]||u[x]!==u[v])&&(m(v,x-1),v=x);return g}function Vi(e,t,n,o,r){if(e.length===0)return"";const s=Math.min(e.length,t.length,n.length),l=[];for(let c=0;c<s;c++)ro(e[c],t[c])&&Number.isFinite(n[c])&&l.push(c);if(l.length===0)return"";const i=[];l.forEach((c,d)=>{const u=o(e[c]).toFixed(2),f=r(n[c]).toFixed(2);i.push(`${d===0?"M":"L"}${u},${f}`)});for(let c=l.length-1;c>=0;c--){const d=l[c],u=o(e[d]).toFixed(2),f=r(t[d]).toFixed(2);i.push(`L${u},${f}`)}return i.push("Z"),i.join(" ")}function lg(e,t,n,o){const r=[];for(const s of t){const{bandLo:l,bandHi:i,bandKind:c}=s;if(!l||!i||c===void 0)continue;const d=[];for(let f=s.from;f<=s.to&&f<e.length;f++)d.push(e[f]);const u=Vi(d,l,i,n,o);u!==""&&r.push({d:u,kind:c})}return r}function Ts(e,t,n,o){if(e===t){const d=(n+o)/2;return()=>d}const r=e>0?e:1e-9,s=t>r?t:r*10,l=Math.log10(r),c=Math.log10(s)-l;if(c===0){const d=(n+o)/2;return()=>d}return d=>{const u=d>0?d:r;return n+(Math.log10(u)-l)/c*(o-n)}}function cg(e,t,n=5){if(!(e>0)||!(t>0)||t<=e)return zo(e,t,n);const o=Math.log10(e),r=Math.log10(t);if(r-o<1)return zo(e,t,n);const l=Math.ceil(o),i=Math.floor(r),c=Math.max(1,Math.ceil((i-l+1)/n)),d=[];for(let u=l;u<=i;u+=c)d.push(10**u);return d.length>0?d:[e,t]}const wo=.86,Cs=[[0,-1.15],[1.05,.8],[-1.05,.8]],Is=.3,ze={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:wo,triangle:Cs,outlineWidth:Is,keylineWidth:.2,reach:Math.max(Math.hypot(wo,wo),...Cs.map(([e,t])=>Math.hypot(e,t)))+Is/2},dg={"aria-hidden":!0};function Ki(e,t,n,o){const r=ze.squareHalf;return(e==="modelled"?ze.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([l,i])=>[t+l*o,n+i*o])}const Zi=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function Qi(e,t,n){const o=e==="current"?0:ze.outlineWidth;return t*(o+2*n*ze.keylineWidth)}function ug({x:e,y:t,r:n,state:o="current",keyline:r=!1}){const s=o==="current"?"":Ki(o,0,0,n).map(([l,i])=>`${l},${i}`).join(" ");return a.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...dg,children:[r&&Zi.map(({ring:l,color:i,widths:c})=>{const d={"data-vessel-keyline":l,fill:"none",stroke:i,strokeWidth:Qi(o,n,c),strokeLinejoin:"round"};return o==="current"?a.jsx("circle",{r:n,...d},l):a.jsx("polygon",{points:s,...d},l)}),o==="current"?a.jsx("circle",{r:n,fill:ze.color}):a.jsx("polygon",{points:s,fill:o==="lost"?"none":fe[o].color,stroke:o==="lost"?ze.lost.color:ze.color,strokeWidth:n*ze.outlineWidth,strokeLinejoin:"round"})]})}function Cn(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function Ji(e,t,n,o,r){if(e.beginPath(),t==="current"){e.arc(n,o,r,0,Math.PI*2);return}Ki(t,n,o,r).forEach(([s,l],i)=>{i===0?e.moveTo(s,l):e.lineTo(s,l)}),e.closePath()}function hg(e,t,n,o,r){e.save(),e.lineJoin="round";for(const{color:s,widths:l}of Zi)Ji(e,t,n,o,r),e.strokeStyle=s,e.lineWidth=Qi(t,r,l),e.stroke();e.restore()}function fg(e,t,n,o,r,s=4,{keyline:l=!1}={}){l&&hg(t,n,o,r,s);const i=Cn(e,ze.cssVar,ze.fallback);if(t.save(),Ji(t,n,o,r,s),n==="current")t.fillStyle=i,t.fill();else{if(n!=="lost"){const c=fe[n];t.fillStyle=Cn(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=n==="lost"?Cn(e,ze.lost.cssVar,ze.lost.fallback):i,t.lineWidth=s*ze.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function nb(e,t,n,o=4,r={}){const{held:s,modelled:l}=n;s!==void 0&&l!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=Cn(e,fe.modelled.cssVar,fe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(l.x,l.y),t.stroke(),t.restore());for(const i of["lost","held","current","modelled"]){const c=n[i];c!==void 0&&fg(e,t,i,c.x,c.y,o,r)}}const Ot=56;function el(e,t,n,o){const r=Math.max(0,Math.min(t-1,Math.floor(n))),s=Math.max(0,Math.min(t-1,Math.floor(o))),l=Math.min(t-1,r+1),i=Math.min(t-1,s+1),c=Math.max(0,Math.min(1,n-r)),d=Math.max(0,Math.min(1,o-s)),u=e[s*t+r]+(e[s*t+l]-e[s*t+r])*c,f=e[i*t+r]+(e[i*t+l]-e[i*t+r])*c;return u+(f-u)*d}const Ls=400,pg=16,mg=8,Ps=.06,gg=3.3,vg=.6,xg=60,bg=40,Os=[6,12],Ns=[48,96],Mn=2;function ko(e,t,n){const o=Math.max(0,Math.min(1,(n-e)/(t-e)));return o*o*(3-2*o)}function Fs(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Ds(e,t){const n=t/e,o=e<=t?.07:.09,r=gg**Math.exp(-((e-t)**2)/(2*o**2*t**2));return n**5*Math.exp(-1.25*n**4)*r}function tl(e,t,n){if(!(e>0)||!(t>0)||!(n>0)||!Number.isFinite(e+t+n))return[];const o=Math.sqrt(n*2*Math.PI/Ls),r=Ds(o,o),s=[];for(let l=-Mn;l<=pg*Mn;l++){const i=Ls/2**(l/Mn),c=i/e,d=ko(Os[0],Os[1],c)*(1-ko(Ns[0],Ns[1],c))*(1-ko(t,2*t,i));if(d<=.001)continue;const u=2*Math.PI/i,f=Math.sqrt(n*u),g=Math.sqrt(Math.min(1,Ds(f,o)/r)),v=(f>=o?Ps:Ps*g)/Math.sqrt(Mn),m=(xg+(Fs(l,1)-.5)*2*bg)*Math.PI/180;s.push({kx:u*Math.sin(m),ky:u*Math.cos(m),k:u,amplitude:v/u,omega:f,phase:Fs(l,2)*2*Math.PI,weight:d})}return s.slice(0,mg)}function yg(e,t,n,o){let r=0;for(const s of e)r+=s.weight*s.amplitude*Math.cos(s.kx*t+s.ky*n-s.omega*o+s.phase);return r}const In=nl(-.25,.3,.92),wg=2.6,kg=nl(In[0],In[1],In[2]+1),$g=.8,_g=3,Sg=.95,Mg=.35,jg=235,Eg=.5,Ag=.35;function nl(e,t,n){const o=Math.hypot(e,t,n);return[e/o,t/o,n/o]}function Rg(e,t,n,o){const{east0:r,north0:s,dx:l,dy:i,seconds:c,colour:d,waves:u,isSea:f}=o,[g,v,m]=In,[x,S,E]=kg,$=u.length,T=new Float64Array($*t),j=new Float64Array($*t),A=new Float64Array($*n),M=new Float64Array($*n);for(let I=0;I<$;I++){const L=u[I];for(let Y=0;Y<t;Y++){const K=L.kx*(r+(Y+.5)*l);T[I*t+Y]=Math.cos(K),j[I*t+Y]=Math.sin(K)}for(let Y=0;Y<n;Y++){const K=L.ky*(s-(Y+.5)*i)-L.omega*c+L.phase;A[I*n+Y]=Math.cos(K),M[I*n+Y]=Math.sin(K)}}const R=new Float64Array($),_=new Float64Array($),U=u.map(I=>I.kx*I.weight*I.amplitude),P=u.map(I=>I.ky*I.weight*I.amplitude),B=u.map(I=>vg*I.k*I.weight*I.amplitude);for(let I=0;I<n;I++)for(let L=0;L<t;L++){const Y=(I*t+L)*4;if(f&&!f(L,I)){e[Y+3]=0;continue}let K=0,J=0,se=1;for(let X=0;X<$;X++){const de=T[X*t+L],we=j[X*t+L],Ee=A[X*n+I],ue=M[X*n+I];R[X]=de*Ee-we*ue,_[X]=we*Ee+de*ue}for(let X=0;X<$;X++){const de=$>1?1+$g*R[(X+_g)%$]:1;K-=U[X]*R[X]*de,J-=P[X]*R[X]*de,se-=B[X]*_[X]*de}const w=1/Math.sqrt(K*K+J*J+se*se),G=(K*g+J*v+se*m)*w-m,re=1+wg*G;let ye=0;const be=(K*x+J*S+se*E)*w;if(be>Sg){let X=be;for(let de=0;de<7;de++)X*=X;ye=255*Mg*X}const pe=Math.max(0,re-1)*Ag,ce=Math.min(1,re)*Eg;e[Y]=d.r*ce+(255-d.r*ce)*pe+ye,e[Y+1]=d.g*ce+(255-d.g*ce)*pe+ye,e[Y+2]=d.b*ce+(255-d.b*ce)*pe+ye,e[Y+3]=jg}}function zs(e){const t=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function Tg(e,t){const n=zs(t),o=Math.max(e.r,e.g,e.b,1),r=c=>({r:Math.min(255,e.r*c),g:Math.min(255,e.g*c),b:Math.min(255,e.b*c)});let s=0,l=255/o;for(let c=0;c<32;c++){const d=(s+l)/2;zs(r(d))<n?s=d:l=d}const i=r((s+l)/2);return{r:Math.round(i.r),g:Math.round(i.g),b:Math.round(i.b)}}const Cg=192,Ig=30,Lg="--color-info-mark",Pg=.42;function Og(e,t){const n=e.view==="plan",o=t.scaleX,r=t.scaleYPrimary,s=1/(o(1)-o(0)),l=1/(r(1)-r(0)),i=E=>(E-o(0))*s,c=E=>(E-r(0))*l,d=Math.min(o(e.bounds.x0),o(e.bounds.x1)),u=Math.max(o(e.bounds.x0),o(e.bounds.x1)),f=Math.min(r(e.bounds.y0),r(e.bounds.y1)),g=Math.max(r(e.bounds.y0),r(e.bounds.y1)),v=n?d:Math.max(t.plotX0,d),m=n?u:Math.min(t.plotX1,u),x=n?f:Math.max(t.plotY0,f),S=n?g:Math.min(t.plotY1,g);return n&&(u<t.plotX0||d>t.plotX1||g<t.plotY0||f>t.plotY1)||!(m-v>=1&&S-x>=1)||!Number.isFinite(s+l)?null:{left:v,top:x,width:m-v,height:S-x,x0:i(v),x1:i(m),y0:c(S),y1:c(x)}}function Hs(e,t){if(!t)return null;e.fillStyle=t;const n=/^#([0-9a-f]{6})$/i.exec(String(e.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function Ng(e,t,n){const o=Hs(t,getComputedStyle(e).getPropertyValue(Lg).trim());if(!o)return null;const r=n?Hs(t,n):null;return r?Tg(r,o):o}function Fg(e,t,n,o,r,s){const l=Ot,i=(n.x1-n.x0)/l,c=(n.y1-n.y0)/l,d=t.sea,u=o.scaleYPrimary(t.bounds.y0)<o.scaleYPrimary(t.bounds.y1),f=d&&d.size>1&&d.heights.length>=d.size*d.size?(v,m)=>{const x=u?m:l-1-m;return el(d.heights,d.size,v/(l-1)*(d.size-1),x/(l-1)*(d.size-1))<0}:void 0,g=e.createImageData(l,l);Rg(g.data,l,l,{east0:t.origin.east+n.x0,north0:t.origin.north+n.y1,dx:i,dy:c,seconds:r,colour:s,waves:tl(Math.max(i,c),n.x1-n.x0,t.gravity),isSea:f}),e.putImageData(g,0,0)}function Dg(e,t,n,o,r){const{width:s,height:l}=e.canvas,i=zg(t,n,s),c=i.length>1?(i[i.length-1]-i[0])/(i.length-1):n.x1-n.x0,d=tl(c,n.x1-n.x0,t.gravity),u=(t.bearingDeg??90)*Math.PI/180,f=m=>(m-n.x0)/(n.x1-n.x0)*s,g=m=>(n.y1-m)/(n.y1-n.y0)*l;e.clearRect(0,0,s,l),e.beginPath(),i.forEach((m,x)=>{const S=yg(d,t.origin.east+m*Math.sin(u),t.origin.north+m*Math.cos(u),o);x===0?e.moveTo(f(m),g(S)):e.lineTo(f(m),g(S))});const v=`${r.r}, ${r.g}, ${r.b}`;e.strokeStyle=`rgba(${v}, 0.9)`,e.lineWidth=1,e.stroke(),e.lineTo(f(i[i.length-1]),l),e.lineTo(f(i[0]),l),e.closePath(),e.fillStyle=`rgba(${v}, ${Pg})`,e.fill()}function zg(e,t,n){const o=(e.samples??[]).filter(r=>r>t.x0&&r<t.x1);return e.samples&&e.samples.length>1?[t.x0,...o,t.x1]:Array.from({length:n+1},(r,s)=>t.x0+s/n*(t.x1-t.x0))}function Hg({layer:e,frame:t}){const n=Og(e,t),o=p.useRef(null),r=p.useRef(null);r.current=n?{layer:e,at:n,frame:t}:null;const s=n?e.view==="plan"?Ot:Math.max(1,Math.min(Cg,Math.round(n.width))):0,l=n?e.view==="plan"?Ot:Math.max(1,Math.round(n.height*s/n.width)):0,i=e.tint;return p.useEffect(()=>{const c=o.current,d=c?.getContext("2d")??null;if(!c||!d||s===0||l===0)return;const u=Ng(c,d,i);if(!u)return;const f=()=>{const $=r.current;if(!$)return;const T=Date.now()/1e3;$.layer.view==="plan"?Fg(d,$.layer,$.at,$.frame,T,u):Dg(d,$.layer,$.at,T,u)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let v=!0;const m=typeof IntersectionObserver=="function"?new IntersectionObserver($=>{v=$.some(T=>T.isIntersecting)}):null;m?.observe(c);let x=Number.NEGATIVE_INFINITY,S=0;const E=$=>{S=requestAnimationFrame(E),!(!v||document.hidden||$-x<1e3/Ig)&&(x=$,f())};return S=requestAnimationFrame(E),()=>{cancelAnimationFrame(S),m?.disconnect()}},[s,l,i]),n?a.jsx("g",{"aria-hidden":"true","data-plot-layer":e.id,"data-plot-layer-kind":"water",children:a.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:a.jsx("canvas",{ref:o,width:s,height:l,style:{display:"block",width:"100%",height:"100%",imageRendering:e.view==="plan"?"pixelated":"auto"}})})}):null}const Bg={faint:.45,normal:.85,bright:1},Wg=1.5,Ug=5,Xg=.9,Zt=7,Qt=6,$o=10,Nt=9,at=12,Gg=6.2,_o=4,Yg=9,qg=13,Vg=.1,ln={paintOrder:"stroke",strokeWidth:3,strokeLinejoin:"round"},So=5,Kg=.5,Zg=.5;function ut(e){return xe[e.tone??"neutral"]}function fn(e){return De[e.tone??"neutral"]}function Je(e){return Bg[e.emphasis??"normal"]}function nt(e,t){return t.axis==="secondary"?e.scaleYSecondary:e.scaleYPrimary}function Qg(e){const t=e.axis==="secondary"?"secondary":"primary";switch(e.kind){case"series":return{xs:e.points.map(n=>n.x),ys:e.points.map(n=>n.y),axis:t};case"region":return{xs:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.x),ys:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.y),axis:t};case"rule":return e.along==="y"?{xs:[],ys:[e.value],axis:t}:{xs:[e.value],ys:[],axis:t};case"marker":case"annotation":return{xs:[e.at.x],ys:[e.at.y],axis:t};default:return{xs:[],ys:[],axis:t}}}const kr=5.8,Et=11,Bs=4;function Jg(e,t){const n=t.text.length*kr,{frame:o}=t,r=t.anchorX+t.gap,s=r+n<=o.plotX1-4?"start":"end",l=s==="start"?r:t.anchorX-t.gap,i=s==="start"?l:l-n,c=i+n,d=f=>e.some(g=>i<g.x1&&c>g.x0&&f-Et<g.y1&&f+2>g.y0);let u=t.anchorY+3;for(let f=0;f<Bs&&d(u);f++)u+=Et;if(d(u)){u=t.anchorY+3;for(let f=0;f<Bs&&d(u);f++)u-=Et}return u=Math.min(Math.max(u,o.plotY0+Et),o.plotY1-Et),e.push({x0:i,x1:c,y0:u-Et,y1:u+2}),{x:l,y:u,anchor:s}}function ev(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function tv(e){if(e.length===0)return"";const t=[`M${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`];for(let n=1;n<e.length;n++)t.push(`H${e[n].x.toFixed(2)}`,`V${e[n].y.toFixed(2)}`);return t.join(" ")}function ol(e,t,n){if(e.length===0)return[];const o=e[0],r=e[e.length-1],s=[...e];if(t==="right"||t==="left"){const l=t==="right"?n.plotX1:n.plotX0;s.push({x:l,y:r.y},{x:l,y:o.y})}else{const l=t==="above"?n.plotY0:n.plotY1;s.push({x:r.x,y:l},{x:o.x,y:l})}return s}function nv(e,t){const n=[];for(const o of e){if(o.kind==="relief"||o.kind==="water"){const l=nt(t,o),{x0:i,y0:c,x1:d,y1:u}=o.bounds;n.push([{x:t.scaleX(i),y:l(c)},{x:t.scaleX(d),y:l(c)},{x:t.scaleX(d),y:l(u)},{x:t.scaleX(i),y:l(u)}]);continue}if(o.kind!=="region"||o.hatched)continue;const r=nt(t,o),s=o.boundary.map(l=>({x:t.scaleX(l.x),y:r(l.y)}));if(!(s.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...s,...o.boundaryHigh.map(l=>({x:t.scaleX(l.x),y:r(l.y)})).reverse()])}else n.push(ol(s,o.side,t))}return(o,r)=>n.some(s=>{let l=!1;for(let i=0,c=s.length-1;i<s.length;c=i++){const d=s[i],u=s[c];d.y>r!=u.y>r&&o<(u.x-d.x)*(r-d.y)/(u.y-d.y)+d.x&&(l=!l)}return l})}function ov({layer:e,frame:t}){if(e.stops.length===0)return null;const n=nt(t,e),o=e.along==="y"?t.plotY1-t.plotY0:t.plotX1-t.plotX0;if(o<=0)return null;const r=e.along==="y"?t.plotY0:t.plotX0,s=e.along==="y"?n:t.scaleX,l=e.maxOpacity??Zg,i=e.tint??ut(e),c=e.blur!==void 0?Math.ceil(e.blur*3):0,d=`plot-field-${e.id}-${t.uid}`,u=`plot-field-blur-${e.id}-${t.uid}`,f=e.along==="y"?t.plotY1:t.plotX1,g=e.stops.map(v=>({offset:(s(v.at)-r)/o*100,intensity:Math.max(0,Math.min(1,v.intensity))})).sort((v,m)=>v.offset-m.offset);return a.jsxs(a.Fragment,{children:[a.jsxs("defs",{children:[a.jsx("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:t.plotX0,y1:t.plotY0,x2:e.along==="x"?f:t.plotX0,y2:e.along==="y"?f:t.plotY0,children:g.map((v,m)=>a.jsx("stop",{offset:`${v.offset.toFixed(2)}%`,stopColor:i,stopOpacity:l*v.intensity},m))}),e.blur!==void 0&&a.jsx("filter",{id:u,children:a.jsx("feGaussianBlur",{stdDeviation:e.blur})})]}),a.jsx("rect",{"data-plot-layer":e.id,"data-plot-layer-kind":"field",x:t.plotX0-c,y:t.plotY0-c,width:t.plotX1-t.plotX0+2*c,height:t.plotY1-t.plotY0+2*c,fill:`url(#${d})`,filter:e.blur!==void 0?`url(#${u})`:void 0})]})}const rv=6,At=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function sv(e){const t=Math.max(0,Math.min(1,e));for(let n=1;n<At.length;n++)if(t<=At[n][0]){const[o,r]=At[n-1],[s,l]=At[n],i=s>o?(t-o)/(s-o):0;return[Math.round(r[0]+(l[0]-r[0])*i),Math.round(r[1]+(l[1]-r[1])*i),Math.round(r[2]+(l[2]-r[2])*i)]}return At[At.length-1][1]}const av=[150,156,160],iv=[200,80,70];function lv(e,t){if(t===3)return av;if(t!==1&&t!==2)return e;const n=.3*e[0]+.59*e[1]+.11*e[2],o=(s,l,i)=>s+(i-s)*l,r=e.map(s=>o(o(s,.5,n),.06,235));return t===1?r:r.map((s,l)=>o(s,.3,iv[l]))}function cv(e,t){const n=2*(t-1),o=(e%n+n)%n;return o<t?o:n-o}function dv(e,t,n,o,r,s,l){const i=e[s*n+l],c=r?cv(i,o):i,[d,u,f]=lv(sv(c/(o-1)),t[s*n+l]),g=l>0?e[s*n+l-1]:i,v=s>0?e[(s-1)*n+l]:i,m=g!==i||v!==i?.5:1;return`rgb(${Math.round(d*m)}, ${Math.round(u*m)}, ${Math.round(f*m)})`}function uv(e,t){const{bounds:n}=e,o=nt(t,e),r=t.scaleX(n.x0),s=t.scaleX(n.x1),l=o(n.y0),i=o(n.y1),c=Math.abs(s-r)/Ot,d=Math.abs(i-l)/Ot;return!(c>0)||!(d>0)?null:{left:Math.min(r,s),top:Math.min(l,i),cellW:c,cellH:d,flipRows:l<i}}function hv(e,t){const{size:n,values:o}=e;if(!t||n<2||o.length<n*n)return null;const{left:r,top:s,cellW:l,cellH:i,flipRows:c}=t;let d=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;for(let j=0;j<n*n;j++){const A=o[j];if(!Number.isFinite(A))return null;A<d&&(d=A),A>u&&(u=A)}const f=u-d,g=e.bandMetres!=null&&e.bandMetres>0?e.bandMetres:null,v=e.veil,m=Math.max(2,e.bands??rv),x=Ot,S=new Int16Array(x*x),E=new Uint8Array(x*x),$=v!=null&&v.length>=n*n;for(let j=0;j<x;j++)for(let A=0;A<x;A++){const M=A/(x-1)*(n-1),R=j/(x-1)*(n-1);$&&(E[j*x+A]=v[Math.round(R)*n+Math.round(M)]??0);const _=el(o,n,M,R);if(g!=null){S[j*x+A]=Math.floor(_/g);continue}const U=f>0?(_-d)/f:.5;S[j*x+A]=Math.max(0,Math.min(m-1,Math.floor(U*m)))}const T=[];for(let j=0;j<x;j++){const A=c?j:x-1-j;let M=0,R="";for(let _=0;_<=x;_++){const U=_<x?dv(S,E,x,m,g!=null,j,_):"";if(_===0){R=U;continue}U===R&&_<x||(T.push(a.jsx("rect",{x:r+M*l,y:s+A*i,width:(_-M)*l+.5,height:i+.5,fill:R},`${j}-${M}`)),M=_,R=U)}}return T}function fv({layer:e,frame:t}){const n=uv(e,t),{values:o,size:r,veil:s,bandMetres:l,bands:i}=e,{left:c,top:d,cellW:u,cellH:f,flipRows:g}=n??{},v=p.useMemo(()=>hv(e,n),[o,r,s,l,i,c,d,u,f,g]);return v?a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:Je(e),"aria-hidden":"true",children:v}):null}function pv({layer:e,frame:t}){const n=p.useId(),o=nt(t,e),r=d=>({x:t.scaleX(d.x),y:o(d.y)}),s=e.boundary.map(r);if(s.length<2)return null;const l=e.side==="between"?[...s,...(e.boundaryHigh??[]).map(r).reverse()]:ol(s,e.side,t);if(e.side==="between"&&!e.boundaryHigh)return null;const i=e.side==="right"?t.plotX1-4:e.side==="left"?t.plotX0+11:s[s.length-1].x,c=(t.plotY0+t.plotY1)/2;return a.jsxs(a.Fragment,{children:[e.hatched&&a.jsx("defs",{children:a.jsx("pattern",{id:n,width:So,height:So,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:a.jsx("line",{x1:0,y1:0,x2:0,y2:So,stroke:ut(e),strokeWidth:1,strokeOpacity:e.opacity??Kg})})}),a.jsx("polygon",{"data-plot-layer":e.id,"data-plot-layer-kind":"region","data-hatched":e.hatched?"":void 0,points:l.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:e.hatched?`url(#${n})`:ut(e),fillOpacity:e.hatched?void 0:e.opacity??Vg}),t.labels&&e.label&&a.jsx("text",{x:i,y:c,transform:`rotate(-90 ${i} ${c})`,textAnchor:"middle",fontSize:Yg,letterSpacing:"0.14em",fill:"var(--color-text-muted)",stroke:"var(--color-surface-raised)",...ln,children:e.label})]})}function mv({layer:e,frame:t}){const n=nt(t,e),o=e.points.map(s=>({x:t.scaleX(s.x),y:n(s.y)}));if(o.length===0)return null;const r=Wg*(e.weight??1);if(e.style==="scatter"){const s=e.radius===void 0?r:Math.abs(t.scaleX(e.radius)-t.scaleX(0));return a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",fill:ut(e),opacity:Je(e),children:o.map((l,i)=>a.jsx("circle",{cx:l.x,cy:l.y,r:s},i))})}return a.jsx("path",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",d:e.style==="step"?tv(o):ev(o),fill:"none",stroke:ut(e),strokeOpacity:Je(e),strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:e.dashed?"5 3.5":void 0})}function gv({layer:e,frame:t}){const n=nt(t,e),o=e.dashed??!0,r=ut(e),s=e.along==="y",l=s?n(e.value):t.scaleX(e.value);return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"rule",x1:s?t.plotX0:l,x2:s?t.plotX1:l,y1:s?l:t.plotY0,y2:s?l:t.plotY1,stroke:r,strokeOpacity:Je(e),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),t.labels&&e.label&&a.jsx("text",{x:s?t.plotX1-4:l+3,y:s?l-3:t.plotY0+10,textAnchor:s?"end":"start",fill:fn(e),fontSize:Nt,children:e.label})]})}function vv({layer:e,frame:t,placed:n}){const o=nt(t,e),r=t.scaleX(e.at.x),s=o(e.at.y),l=e.across??"x",i=ut(e),c=t.labels&&e.label?Jg(n,{anchorX:r,anchorY:s,gap:Zt+3,text:e.label,frame:t}):null;return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"annotation",x1:l==="x"?r-Zt:r,x2:l==="x"?r+Zt:r,y1:l==="x"?s:s-Zt,y2:l==="x"?s:s+Zt,stroke:i,strokeOpacity:Je(e),strokeWidth:1.75,strokeLinecap:"round"}),c&&e.label&&a.jsx("text",{x:c.x,y:c.y,textAnchor:c.anchor,fontSize:Nt,letterSpacing:"0.05em",fill:fn(e),fillOpacity:Je(e),children:e.label})]})}function xv({layer:e,frame:t}){const n=nt(t,e),o=t.scaleX(e.at.x),r=n(e.at.y)+(e.offsetPx??0),s=Ug*(e.scale??1),l=ut(e),i=e.shape??"dot",c={"data-plot-layer":e.id,"data-plot-layer-kind":"marker",opacity:Je(e)},d=i==="none"?null:i==="vessel"?a.jsx("g",{...c,children:a.jsx(ug,{state:e.markState??"current",x:o,y:r,r:s*Xg,keyline:!0})}):i==="dot"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:l,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):i==="ring"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:"none",stroke:l,strokeWidth:1.5}):i==="cross"?a.jsx("path",{...c,d:`M${o-s},${r} L${o+s},${r} M${o},${r-s} L${o},${r+s}`,stroke:l,strokeWidth:1.5,strokeLinecap:"round"}):i==="chevron-up"||i==="chevron-down"?a.jsx("polyline",{...c,points:i==="chevron-up"?`${o-s},${r+s*.5} ${o},${r-s*.5} ${o+s},${r+s*.5}`:`${o-s},${r-s*.5} ${o},${r+s*.5} ${o+s},${r-s*.5}`,fill:"none",stroke:l,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null,u=(e.label?.length??0)*kr/2+3,f=i==="none"?Math.min(Math.max(o,t.plotX0+u),t.plotX1-u):o+s+3,g=i==="none"?Math.min(Math.max(r+3,t.plotY0+Nt+3),t.plotY1-4):r+3;return a.jsxs(a.Fragment,{children:[d,t.labels&&e.label&&a.jsx("text",{x:f,y:g,textAnchor:i==="none"?"middle":void 0,fontSize:Nt,fill:fn(e),fillOpacity:Je(e),stroke:"var(--color-surface-raised)",...ln,children:e.label})]})}function bv({layer:e,frame:t,row:n,edges:o}){const r=e.caption?2:1;if(e.anchor==="left-edge"||e.anchor==="right-edge"){const m=e.anchor==="left-edge"?t.plotX0+Qt+n*at:t.plotX1-Qt-n*at,x=t.plotY1-34;return a.jsx("text",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",x:m,y:x,transform:`rotate(-90 ${m} ${x})`,fontSize:Nt,letterSpacing:"0.14em",fill:fn(e),fillOpacity:Je(e),stroke:"var(--color-surface-raised)",...ln,children:e.text})}const s=e.anchor.startsWith("top"),l=e.anchor.endsWith("right"),i=m=>Qt+(m?qg:0),c=l?t.plotX1-i(o.right):t.plotX0+i(o.left),d=n*(r*at+2),u=s?t.plotY0+Qt+$o+d:t.plotY1-Qt-d,f=u-at,g=Math.max(e.text.length*Gg,(e.caption?.length??0)*kr)+2*_o,v=(s?u:u-(e.caption?at:0))-$o-1;return a.jsxs("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",textAnchor:l?"end":"start",children:[a.jsx("rect",{x:l?c-g+_o:c-_o,y:v,width:g,height:r*at+1,rx:3,fill:"var(--color-surface-raised)",fillOpacity:.8}),e.caption&&a.jsx("text",{x:c,y:s?u:f,fontSize:Nt,letterSpacing:"0.05em",fill:"var(--color-text-faint)",stroke:"var(--color-surface-raised)",...ln,children:e.caption}),a.jsx("text",{x:c,y:e.caption&&s?u+at:u,fontSize:$o,fontWeight:700,fill:fn(e),fillOpacity:Je(e),stroke:"var(--color-surface-raised)",...ln,children:e.text})]})}const Ws={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},yv={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function Mo({layers:e,frame:t,pass:n}){const o=e.map((i,c)=>({layer:i,index:c})).filter(({layer:i})=>yv[i.kind]===n).sort((i,c)=>Ws[i.layer.kind]-Ws[c.layer.kind]||(i.layer.z??0)-(c.layer.z??0)||i.index-c.index),r=new Map,s=[],l={left:e.some(i=>i.kind==="caption"&&i.anchor==="left-edge"||i.kind==="region"&&i.side==="left"&&!!i.label),right:e.some(i=>i.kind==="caption"&&i.anchor==="right-edge"||i.kind==="region"&&i.side==="right"&&!!i.label)};return a.jsx(a.Fragment,{children:o.map(({layer:i,index:c})=>{const d=`${i.id}-${c}`;switch(i.kind){case"relief":return a.jsx(fv,{layer:i,frame:t},d);case"water":return a.jsx(Hg,{layer:i,frame:t},d);case"field":return a.jsx(ov,{layer:i,frame:t},d);case"region":return a.jsx(pv,{layer:i,frame:t},d);case"series":return a.jsx(mv,{layer:i,frame:t},d);case"rule":return a.jsx(gv,{layer:i,frame:t},d);case"annotation":return a.jsx(vv,{layer:i,frame:t,placed:s},d);case"marker":return a.jsx(xv,{layer:i,frame:t},d);case"caption":{const u=r.get(i.anchor)??0;return r.set(i.anchor,u+1),a.jsx(bv,{layer:i,frame:t,row:u,edges:l},d)}default:return null}})})}function wv(e){return e.map(t=>t.description).filter(t=>typeof t=="string"&&t.length>0)}const Us=11,jn=3,En=4,Xs=(e,t)=>e.x0<t.x1&&t.x0<e.x1&&e.y0<t.y1&&t.y0<e.y1;function kv(e,t,n,o,r){let s=0,l=1;const i=n-e,c=o-t,d=[[-i,e-r.x0],[i,r.x1-e],[-c,t-r.y0],[c,r.y1-t]];for(const[u,f]of d){if(u===0&&f<0)return!1;if(u!==0){const g=f/u;u<0?s=Math.max(s,g):l=Math.min(l,g)}}return s<=l}function $v(e,t){for(let n=1;n<e.cx.length;n++){const o=[e.cx[n-1],e.cy[n-1],e.cx[n],e.cy[n]];if(o.every(Number.isFinite)&&kv(o[0],o[1],o[2],o[3],t))return!0}return!1}function _v({labels:e,plot:t,obstacles:n,traces:o}){const r=[],s=new Map;for(const l of e){const i={y0:l.lineY-jn-Us,y1:l.lineY-jn},c={y0:l.lineY+jn,y1:l.lineY+jn+Us},d={x0:t.x1-En-l.width,x1:t.x1-En},u={x0:t.x0+En,x1:t.x0+En+l.width},f=[{...d,...i,anchor:"end"},{...d,...c,anchor:"end"},{...u,...i,anchor:"start"},{...u,...c,anchor:"start"}];let g=null;for(const v of f){if(!(v.x0>=t.x0&&v.x1<=t.x1&&v.y0>=t.y0&&v.y1<=t.y1)||r.some(S=>Xs(v,S)))continue;const x=2*n.filter(S=>Xs(v,S)).length+o.filter(S=>$v(S,v)).length;(g===null||x<g.cost)&&(g={spot:v,cost:x})}if(g===null){s.set(l.id,null);continue}r.push(g.spot),s.set(l.id,{x:g.spot.anchor==="end"?g.spot.x1:g.spot.x0,y:g.spot.y1-2,anchor:g.spot.anchor})}return s}function Sv(e,t,n,o="linear"){const r=n&&Av(t,n)?0:t;if(n&&o==="log")return je(Ye(e,r),{decimals:Ho(e,r).decimals});if(!n)return je(Ye(e,r),{decimals:0});const s=Mv(e,n)?e:void 0;return je(Ye(e,r),{decimals:Rv(e,r,n,s),...s?{format:s}:{}})}function Mv(e,t){const n=t.map(o=>je(Ye(e,o),{decimals:Ln}));return n.some((o,r)=>r>0&&o===n[r-1])}function jv(e,t){const n=new Set(t.map(o=>Sv(e,o,t).replace(/^[\d.,\s-]+/,"")));return n.size===1?[...n][0]:void 0}function Ev(e,t,n){const o=jv(t,n);if(o===void 0)return e;const r=Kl({magnitude:0,unit:t},{format:t}).symbol,s=` (${r})`;return r!==""&&e.endsWith(s)?`${e.slice(0,-s.length)} (${o})`:e}function Av(e,t){const n=t.length>1?Math.abs(t[1]-t[0]):0;return n>0&&Math.abs(e)<n*1e-6}const Ln=3;function rl(e){return{figure:Number.parseFloat(e.replace(/[^\d.-]/g,"")),unit:e.replace(/[\d.,\s-]/g,"")}}function Ho(e,t,n){const o=s=>rl(je(Ye(e,t),{decimals:s,...n?{format:n}:{}})),r=o(Ln);for(let s=0;s<Ln;s++)if(o(s).figure===r.figure)return{decimals:s,unit:r.unit};return{decimals:Ln,unit:r.unit}}function Rv(e,t,n,o){const r=Ho(e,t,o);let s=r.decimals;for(const l of n){const i=Ho(e,l,o);i.unit===r.unit&&(s=Math.max(s,i.decimals))}return s}function ob(e){const t=rl(je(e,{decimals:3})),n=Math.abs(t.figure),o=Number.isFinite(n)&&n>0?Math.max(0,2-Math.floor(Math.log10(n))):0;return je(e,{decimals:o})}function jo(e,t,n){for(let o=n;o<6;o++){const r=e.map(s=>(s/t).toFixed(o));if(r.every((s,l)=>l===0||s!==r[l-1]))return o}return 6}const Tv=4,An=2,Cv=2.5;function Iv(e,t){if(e.length===0)return!1;const n=e[e.length-1]-t;return n===0?!0:e.length===1?!1:Math.sign(e[0]-t)!==Math.sign(n)}function Lv(e,t){return e==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:t?e==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const Pv=(e,t)=>Yi(e-t[0],t[1]-t[0]),rb=(e,t)=>Yi((e-t[0])*1e3,(t[1]-t[0])*1e3),Eo={top:10,bottom:28,left:50};function sl(e,t,n){const o=(s,l,i)=>Math.max(s,Math.min(i,l)),r=o(30,Math.round(e*.18),Eo.left);return{top:Eo.top,right:n?r:o(14,Math.round(e*.07),20),bottom:t<150?20:Eo.bottom,left:r}}const Gs=e=>e.length*6.5+6,Ov=4,Nv=.4,Fv=26,vt=14,Dv=160,Ue=16,Rn=4,zv=6,Jt=(e,t)=>Math.min(e.length*6+8,t);function Hv(e,t){const n=[];let o=0,r=0;for(const s of e)r>0&&r+s>t&&(o+=1,r=0),n.push({row:o,x:r}),r+=s+zv;return{rows:e.length===0?0:o+1,positions:n}}const Ys=4,Bv=.03;function Ao(e,t){const n=Math.max(0,Math.floor(t/6));if(e.length<=n)return e;const o=e.lastIndexOf(" (");if(o>0&&e.length-o+4<=n){const r=n-(e.length-o)-3;return`${e.slice(0,r)}...${e.slice(o)}`}return n<4?"":`${e.slice(0,n-3)}...`}function qs(e,t){const n=e.split(/(?=M)/).filter(r=>r.length>0),o=[];for(const r of n){const s=[...r.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)];if(s.length<2)continue;const l=s[0],i=s[s.length-1];o.push(`${r.trim()} L${i[1]},${t} L${l[1]},${t} Z`)}return o.length>0?o.join(" "):null}function Wv(e,t,n,o,r=1){const s=[],l=Fv*Math.max(.5,Math.min(2,r));for(let i=e+l/2;i<t;i+=l)for(let c=n+l/2;c<o;c+=l)s.push({key:`sg-${Math.round(i)}-${Math.round(c)}`,x:i,y:c});return s}const Uv=120,Xv=90,Gv=70,Yv=35,qv=2,Vv=12,Vs=8,Kv=2,it=14,Gn=6,Yn=12,Zv=16,Qv=12,Jv=200,Ks=10,ex=.2,Zs=.6,Qs="5 3",tx=.15,nx=.45,ox="the value is inside the shaded region";function rx(e){const t=[...e.data.y];(e.type??"line")==="band"&&e.data.y2&&t.push(...e.data.y2);for(const n of e.data.reckoned??[])n.bandLo&&n.bandHi&&t.push(...n.bandLo,...n.bandHi);for(const n of e.data.bridges??[])t.push(...n.v);return t.filter(Number.isFinite)}const sx=1e-5,ax=1e-9;function ix({series:e,thresholds:t,yTickFormat:n}){const o=s=>s*Gn,r=[];for(const s of e)r.push(o(s.label.length)+8);for(const s of t){if(s.kind==="marker"&&!s.label)continue;const l=s.label??n(s.value);r.push(o(l.length)+Yn+8)}return Math.max(0,...r)+Vv}function lx({width:e,height:t,hasSecondary:n,series:o,thresholds:r}){const s=r.filter(u=>u.label);if(o.length===0||s.length===0)return!1;const l=Math.max(...o.map(u=>u.label.length*6+8)),i=Math.max(...s.map(u=>(u.label?.length??0)*Gn+Yn)),c=sl(e,t,n),d=e-c.left-c.right-vt-Zv;return l+i+Qv>d}function sb({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:r=Pv,yTickFormat:s=cx,yScalePrimary:l="linear",yScaleSecondary:i="linear",thresholds:c,legend:d="overlay",hideXAxis:u=!1,density:f="chart",spatial:g=!1,gridScale:v=1,layers:m,"aria-label":x,crosshair:S=!1,xKind:E="time",xReadFormat:$,xAxisLabel:T,yAxisLabel:j,ySecondaryAxisLabel:A,yTickUnit:M,card:R,cardForms:_=1,plotNotice:U,width:P,height:B}){const I=p.useId(),L=f==="compact",Y=L?"none":d,K=g,J=K||L,se=S&&!J&&e.some(h=>h.data.x.length>0),[w,G]=p.useState(null),[re,ye]=p.useState(!1),[be,pe]=p.useState(""),[ce,X]=p.useState(null),[de,we]=p.useState(null),Ee=de?.w===P&&de.h===B?de.form:0,[ue,Ae]=p.useState(null),et=R!=null,ae=ue?.form===Ee?ue:null;p.useLayoutEffect(()=>{if(!ce){Ae(null);return}const h=()=>Ae(k=>{const O={w:ce.offsetWidth,h:ce.offsetHeight,form:Ee};return k?.w===O.w&&k?.h===O.h&&k?.form===O.form?k:O});h();const b=new ResizeObserver(h);return b.observe(ce),()=>b.disconnect()},[ce,Ee]);const q=P,ee=B,$e=e.filter(h=>h.axis==="primary"&&h.data.x.length>0),qe=e.filter(h=>h.axis==="secondary"&&h.data.x.length>0),Pe=qe.length>0,ht=Y!=="none"&&e.length>0||(c??[]).some(h=>h.label),_e=ix({series:e,thresholds:c??[],yTickFormat:s}),Ve=et&&ae!==null&&ae.w+Vs<=Math.max(112,Math.ceil(_e)),te=J||!ht?{placement:"overlay"}:Xm({width:q,height:ee,contentWidth:_e,legendHeight:Y==="none"?0:e.length*Ue+6,cardHeight:Ve&&ae!==null?ae.h:0}),ke=te.placement==="overlay"&&!J&&Y!=="none"&&ee>=Jv&&lx({width:q,height:ee,hasSecondary:Pe,series:e,thresholds:c??[]})?{placement:"below"}:te,ie=Y!=="none"&&(ke.placement==="below"||ke.placement==="beside"&&ke.legendBelow),Oe=ie?Hv(e.map(h=>Jt(h.label,q-2*Rn)),q-2*Rn):{rows:0,positions:[]},He=Oe.rows===0?0:Oe.rows*Ue+4,Se=q>=Dv,Be=!J&&!u&&!!T,yt=!J&&Se&&!!j,me=!J&&Se&&Pe&&!!A,ve=K?0:1,zt=J?{top:ve,right:ve,bottom:ve,left:ve}:sl(q,ee,Pe),Ke={...zt,bottom:zt.bottom+(Be?vt:0)+He},Z=Ke.top,ne=ee-Ke.bottom,Ze=ne-Z,vn=p.useMemo(()=>{const h={primary:[],secondary:[]};for(const b of m??[]){const k=Qg(b);h[k.axis].push(...k.ys)}return h},[m]),wt=p.useMemo(()=>Js($e,n,l,vn.primary),[$e,n,l,vn]),kt=p.useMemo(()=>Js(qe,o,i,vn.secondary),[qe,o,i,vn]),Re=l==="log"?Ts(wt[0],wt[1],ne,Z):yo(wt[0],wt[1],ne,Z),Te=i==="log"?Ts(kt[0],kt[1],ne,Z):yo(kt[0],kt[1],ne,Z),$r=Math.max(2,Math.min(7,Math.round(Ze/Yv))),so=(h,b,k,O)=>{const N=Math.min(h,b),H=Math.max(h,b),C=(H-N)*1e-6||1e-6,W=oe=>oe>=N-C&&oe<=H+C,Q=oe=>O==="log"?cg(N,H,oe):zo(N,H,oe);for(let oe=k;oe<=64;oe*=2){const Fe=Q(oe).filter(W);if(Fe.length<2)continue;if(Fe.length<=k)return Fe;const Yt=(Fe.length-1)/(k-1),yn=Array.from({length:k},(hx,_l)=>Fe[Math.round(_l*Yt)]);return Array.from(new Set(yn))}return[N,H]},Ht=so(wt[0],wt[1],$r,l==="log"?"log":"linear"),xn=Pe?so(kt[0],kt[1],$r,i==="log"?"log":"linear"):[],_r=(h,b)=>h.length===0?b:Math.max(b,Math.min(Math.round(q*Nv),Math.max(...h.map(k=>Gs(s(k,h))))+Ov)),ao=J?Ke:{left:_r(Ht,Ke.left)+(yt?vt:0),right:(Pe?_r(xn,Ke.right):Ke.right)+(me?vt:0)},V=ao.left,io=ke.placement==="beside"?ke.columnWidth:0,ge=q-ao.right-io,Ce=ge-V,Sr=q-io-vt/2,ft=Ce>=Uv&&Ze>=Xv,le=io>0?{x0:ge+(Pe?ao.right:0)+Vs,y0:Z,x1:q-Kv,y1:ne}:void 0,Mr=Y==="none"||le||ie?[]:e.map((h,b)=>({x0:V+3,y0:Z+6+b*Ue,x1:V+3+Jt(h.label,Ce-6),y1:Z+6+b*Ue+13})),he=yo(t[0],t[1],V,ge),al=Math.max(2,Math.min(8,Math.round(Ce/Gv))),Bt=so(t[0],t[1],al,"linear"),il=p.useMemo(()=>{const h=[],b=Bt.length-1;if(b<0)return h;const k=Gs,O=6,N=C=>{const W=Bt[C],Q=r(W,t,Bt),oe=he(W),Fe=k(Q),Yt=C===0?"start":C===b?"end":"middle",yn=Yt==="start"?oe:Yt==="end"?oe-Fe:oe-Fe/2;return{x:oe,text:Q,anchor:Yt,leftEdge:yn,rightEdge:yn+Fe}},H=N(0);if(h.push({x:H.x,text:H.text,anchor:H.anchor}),b>=1){const C=N(b);if(C.leftEdge>=H.rightEdge+O){let W=H.rightEdge;for(let Q=1;Q<b;Q++){const oe=N(Q);oe.leftEdge>=W+O&&oe.rightEdge<=C.leftEdge-O&&(h.push({x:oe.x,text:oe.text,anchor:oe.anchor}),W=oe.rightEdge)}h.push({x:C.x,text:C.text,anchor:C.anchor})}}return h},[Bt,t,he,r]),jr=(h,b)=>{const k=new Set,O=h.length;if(O===0||(k.add(0),O===1))return k;const N=16,H=b(h[0]),C=b(h[O-1]);if(Math.abs(C-H)>=N){let W=H;for(let Q=1;Q<O-1;Q++){const oe=b(h[Q]);Math.abs(oe-W)>=N&&Math.abs(C-oe)>=N&&(k.add(Q),W=oe)}k.add(O-1)}return k},ll=jr(Ht,Re),cl=jr(xn,Te),ot=p.useMemo(()=>e.filter(h=>h.data.x.length>0).map(h=>{const b=h.axis==="primary"?Re:Te,k=h.type??"line";if(k==="band")return h.data.y2?{id:h.id,kind:"band",color:h.color,opacity:h.fillOpacity??ex,d:Vi(h.data.x,h.data.y,h.data.y2,he,b)}:{id:h.id,kind:"noop"};if(k==="scatter"){const C=h.data.x.map((W,Q)=>({cx:he(W),cy:b(h.data.y[Q])}));return{id:h.id,kind:"scatter",color:h.color,points:C}}const O=k==="step"?ag:Rs,N=(h.data.bridges??[]).filter(C=>sg(h.data.x,h.data.y,C,he,b)),H=[...new Set([...h.data.breaks??[],...N.map(C=>C.to)])].sort((C,W)=>C-W);return{id:h.id,kind:"stroked",color:h.color,dashed:h.dashed??!1,uncertainty:lg(h.data.x,h.data.reckoned??[],he,b),segments:ig(h.data.x,h.data.y,he,b,O,H,h.data.spans,h.data.reckoned),modelled:N.map(C=>({basis:C.basis,d:Rs([h.data.x[C.to-1],...C.t,h.data.x[C.to]],[h.data.y[C.to-1],...C.v,h.data.y[C.to]],he,b)})),tail:h.data.x.length>0&&(h.data.reckoned??[]).some(C=>C.to>=h.data.x.length-1)?{cx:he(h.data.x[h.data.x.length-1]),cy:b(h.data.y[h.data.y.length-1])}:null,observed:[...new Set(N.flatMap(C=>[C.to-1,C.to]))].map(C=>({cx:he(h.data.x[C]),cy:b(h.data.y[C])}))}}),[e,he,Re,Te]),pt=p.useMemo(()=>c?c.map(h=>{const b=h.axis??"primary",k=e.filter(N=>N.axis===b&&N.type!=="band"&&!N.dashed),O=h.kind==="limit"?k.some(N=>{const H=N.data.y.filter(C=>Number.isFinite(C));return H.length>0&&Gi(H[H.length-1],h.value,h.bad)}):h.kind==="target"&&k.some(N=>Iv(N.data.y,h.value));return{id:h.id,label:h.label,spokenLabel:h.spokenLabel,value:h.value,kind:h.kind,passed:O,currency:Kn(h.reading,{drawsReckoning:!0}),tone:Lv(h.kind,O),dashed:h.kind!=="marker",y:b==="primary"?Re(h.value):Te(h.value)}}):[],[c,e,Re,Te]),Wt=p.useMemo(()=>{const h=(b,k,O)=>Math.max(b,Math.min(O,k));return(c??[]).flatMap(b=>{if(b.kind!=="limit"||!Number.isFinite(b.value))return[];const k=b.axis??"primary",O=k==="primary"?Re:Te,N=O(b.value),H=b.bad==="above"?-1:1,C=b.label||`the limit at ${s(b.value)}`;return e.filter(W=>W.axis===k&&W.data.x.length>0&&(W.type??"line")!=="band"&&!W.dashed).flatMap(W=>og({y:W.data.y,cx:W.data.x.map(he),cy:W.data.y.map(O),limit:b.value,limitY:N,bad:b.bad,breaks:W.data.breaks,step:W.type==="step"||W.type==="scatter",minGapPx:it}).slice(ft?0:-1).map(Q=>{const oe=s(W.data.y[Q.index]),Fe=r(W.data.x[Q.index],t);return{key:`${b.id}-${W.id}-${Q.index}`,color:W.color,x:h(V+it/2+1,Q.x-Ks*(Q.entered?1:-1),ge-it/2-1),y:h(Z+it/2+1,Q.y+H*Ks,ne-it/2-1),text:Q.entered?Q.spells>1?`${W.label} went past ${C} ${Q.spells} times from ${Fe}, first reading ${oe}`:`${W.label} went past ${C} at ${Fe}, reading ${oe}`:`${W.label} was already past ${C} when this window began at ${Fe}, reading ${oe}`}}))})},[c,e,he,Re,Te,r,s,t,V,ge,Z,ne,ft]),Me=(()=>{if(!et||ae===null||J)return;if(le&&Ve){const N={x0:le.x0,y0:ne-ae.h,x1:le.x0+ae.w,y1:ne},H=Z+(Y==="none"||ie?0:e.length*Ue+6);return N.x1<=le.x1&&N.y0>=H?N:void 0}const h=it/2,b=[...e.filter(N=>(N.type??"line")!=="band").flatMap(N=>{const H=N.axis==="primary"?Re:Te,C=N.data.x.map(he),W=N.data.y.map(H);return N.type==="scatter"?C.map((Q,oe)=>({cx:[Q],cy:[W[oe]]})):[{cx:C,cy:W}]}),...pt.map(N=>({cx:[V,ge],cy:[N.y,N.y]}))],k=[...Wt.map(N=>({x0:N.x-h,y0:N.y-h,x1:N.x+h,y1:N.y+h})),...Y==="none"||le||ie?[]:e.map((N,H)=>({x0:V+3,y0:Z+6+H*16,x1:V+3+Math.min(N.label.length*6+8,Ce-6),y1:Z+6+H*16+13}))],O=Km({plot:{x0:V,y0:Z,x1:ge,y1:ne},card:{width:ae.w,height:ae.h},traces:b,obstacles:k});return O?{x0:O.x,y0:O.y,x1:O.x+ae.w,y1:O.y+ae.h}:void 0})(),$t=p.useMemo(()=>{if(!ft)return new Map;const h=it/2;return _v({labels:pt.filter(b=>b.label).map(b=>({id:b.id,width:(b.label?.length??0)*Gn+(b.currency.held?Yn:0),lineY:b.y})),plot:le??{x0:V,y0:Z,x1:ge,y1:ne},obstacles:[...Me?[Me]:[],...Wt.map(b=>({x0:b.x-h,y0:b.y-h,x1:b.x+h,y1:b.y+h})),...Y==="none"||ie?[]:e.map((b,k)=>({x0:le?le.x0:V+3,y0:Z+6+k*Ue,x1:(le?le.x0:V+3)+Jt(b.label,le?le.x1-le.x0:Ce-6),y1:Z+6+k*Ue+13}))],traces:(le?[]:e).filter(b=>(b.type??"line")!=="band").map(b=>({cx:b.data.x.map(he),cy:b.data.y.map(b.axis==="primary"?Re:Te)}))})},[ft,Me,le,pt,Wt,Y,ie,e,he,Re,Te,V,ge,Z,ne,Ce]),dl=(()=>{const h=Z+6;if(Y==="none"||ie||e.length===0)return h;const b=le?le.x0:V+3,k=b+Math.max(...e.map(H=>Jt(H.label,le?le.x1-le.x0:Ce-6))),O=pt.flatMap(H=>{const C=$t.get(H.id);if(!H.label||!C)return[];const W=H.label.length*Gn+(H.currency.held?Yn:0),Q=C.anchor==="end"?C.x-W:C.x;return[{x0:Q,y0:C.y-9,x1:Q+W,y1:C.y+2}]});Me&&O.push(Me);const N=e.length*Ue-3;for(let H=h;H+N<=ne;H+=Ue){const C={x0:b,y0:H,x1:k,y1:H+N};if(!O.some(W=>C.x0<W.x1&&W.x0<C.x1&&C.y0<W.y1&&W.y0<C.y1))return H}return h})(),ul=e.flatMap(h=>{const b=ot.find(C=>C.id===h.id),k=b?.kind==="stroked"?b.modelled.map(C=>C.basis):[],O=h.data.reckoned??[];if(O.length===0&&k.length===0)return[];const H=[...new Set([...O.map(C=>C.basis),...k])].map(C=>`${h.label}: part of this trace is reckoned, ${Ym(C)}, not measured`);return O.some(C=>C.bandLo&&C.bandHi)&&H.push(`${h.label}: ${ox}`),H}),hl=pt.flatMap(h=>{const b=h.spokenLabel??h.label??h.id,k=[];return h.passed&&h.kind==="limit"&&k.push(`${b}: limit passed`),h.passed&&h.kind==="target"&&k.push(`${b}: target reached`),h.currency.held&&k.push(ri(b,h.currency.caption)),h.label&&!$t.get(h.id)&&k.length===0&&k.push(h.spokenLabel??h.label),k}),lo=[...ul,...hl],fl=[x??"Telemetry line chart",...wv(m??[]),...lo].join("; "),co=p.useMemo(()=>e.filter(h=>h.data.x.length>0).map(h=>E==="value"?Jm(h):h),[e,E]),uo=p.useMemo(()=>se?tg(co):[],[se,co]),Ut=Math.min(t[0],t[1]),Xt=Math.max(t[0],t[1]),pl=E==="value"?(Xt-Ut)*Bv:void 0;function Er(h){const b=co.map(k=>{const O=eg(k,h,pl),N=k.format??s,H=k.axis==="primary"?Re:Te,C=(k.type??"line")==="band";return O===null?{id:k.id,label:k.label,color:k.color,value:null}:{id:k.id,label:k.label,color:k.color,value:C&&O.y2!==void 0?`${N(O.y)} to ${N(O.y2)}`:N(O.y),currency:O.currency==="measured"?void 0:O.currency,modelled:O.currency==="modelled",y:C?void 0:H(O.y)}});if(ft)for(const k of pt)k.kind!=="marker"&&b.push({id:`threshold-${k.id}`,label:k.kind,color:k.tone.label,value:k.label??s(k.value),detail:!0,currency:k.currency.held?k.currency.mark==="modelled"?"modelled":"held":void 0,modelled:k.currency.held&&k.currency.mark==="modelled"});return{heading:($??r)(h,t),rows:b}}function Ar(h){const{heading:b,rows:k}=Er(h);return[b,...k.map(O=>`${O.label} ${O.value??"no sample"}${O.currency?`, ${O.currency}`:""}`)].join("; ")}const Rr=e.filter(h=>(h.type??"line")!=="band").map(h=>({cx:h.data.x.map(he),cy:h.data.y.map(h.axis==="primary"?Re:Te)})),Tr=Me?[...Rr,Zm(Me)]:Rr,Cr=et&&!J&&ae!==null&&ae.w>0&&ae.h>0&&!Me&&Ee<_-1;p.useLayoutEffect(()=>{Cr&&we({w:P,h:B,form:Ee+1})},[Cr,P,B,Ee]);const ml=h=>{let b=h,k=Number.POSITIVE_INFINITY;for(const O of uo)O<Ut||O>Xt||Math.abs(O-h)<k&&(k=Math.abs(O-h),b=O);return b},mt=se&&w!==null&&w.at>=Ut&&w.at<=Xt?ml(w.at):null,_t=mt===null?null:Er(mt),Gt=_t!==null&&mt!==null?Om({x:he(mt),plot:{x0:V,y0:Z,x1:ge,y1:ne},heading:_t.heading,rows:_t.rows,avoid:Mr,traces:Tr}):void 0,gl=Me!==void 0&&Gt!==void 0&&Gt.x0<Me.x1&&Gt.x1>Me.x0&&Gt.y0<Me.y1&&Gt.y1>Me.y0;function vl(h){const b=h.currentTarget.getBoundingClientRect(),k=h.clientX-b.left;return k<V||k>ge?null:t[0]+(k-V)/(ge-V)*(t[1]-t[0])}function xl(h){const b=vl(h);if(b===null){G(k=>k?.source==="pointer"?null:k);return}G({at:b,source:"pointer"})}function bl(h){const b=uo.filter(H=>H>=Ut&&H<=Xt),k={ArrowLeft:h.shiftKey?-10:-1,ArrowRight:h.shiftKey?10:1,Home:-b.length,End:b.length};if(h.key==="Escape"){if(w===null)return;h.preventDefault(),G(null),pe("");return}const O=k[h.key];if(O===void 0)return;h.preventDefault();const N=As(b,mt,O);N!==null&&(G({at:N,source:"keys"}),pe(Ar(N)))}function yl(h){try{ye(h.currentTarget.matches(":focus-visible"))}catch{ye(!0)}if(w!==null)return;const b=As(uo.filter(k=>k>=Ut&&k<=Xt),null,0);b!==null&&(G({at:b,source:"keys"}),pe(Ar(b)))}function wl(){ye(!1),G(h=>h?.source==="keys"?null:h),pe("")}const kl=se?{tabIndex:0,onPointerMove:xl,onPointerLeave:()=>G(h=>h?.source==="pointer"?null:h),onKeyDown:bl,onFocus:yl,onBlur:wl}:{},bn={scaleX:he,scaleYPrimary:Re,scaleYSecondary:Te,plotX0:V,plotX1:ge,plotY0:Z,plotY1:ne,uid:I,labels:ft},$l=K&&m?nv(m,bn):()=>!1,ho=`plot-layer-clip-${I}`,Ir=`plot-trace-clip-${I}`;if(Ce<=0||Ze<=0)return a.jsx("svg",{width:Math.max(0,q),height:Math.max(0,ee),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:a.jsx("title",{children:"Chart too small to render"})});const Lr=a.jsxs("svg",{width:q,height:ee,role:Wt.length>0||se?"group":"img","aria-label":fl,"aria-describedby":se?`${I}-crosshair-hint`:void 0,...kl,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...se?{touchAction:"pan-y",outline:re?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[a.jsxs("defs",{children:[a.jsx("clipPath",{id:ho,children:a.jsx("rect",{x:V,y:Z,width:Ce,height:Ze})}),a.jsx("clipPath",{id:Ir,children:a.jsx("rect",{x:V-An,y:Z-An,width:Ce+2*An,height:Ze+2*An})})]}),lo.length>0&&a.jsx("title",{children:lo.join("; ")}),a.jsx("rect",{x:V,y:Z,width:Ce,height:Ze,fill:"var(--color-surface-panel)"}),m&&m.length>0&&a.jsx("g",{clipPath:`url(#${ho})`,children:a.jsx(Mo,{layers:m,frame:bn,pass:"background"})}),!J&&Ht.map((h,b)=>{const k=Re(h);return a.jsxs(wn.Fragment,{children:[a.jsx("line",{x1:V,y1:k,x2:ge,y2:k,stroke:"var(--color-border-subtle)",strokeWidth:1}),ll.has(b)&&a.jsx("text",{x:V-4,y:k,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(h,Ht)})]},`py-${b}`)}),!J&&xn.map((h,b)=>cl.has(b)?a.jsx("text",{x:ge+4,y:Te(h),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(h,xn)},`sy-${b}`):null),!u&&!J&&Bt.map((h,b)=>a.jsx("line",{x1:he(h),y1:Z,x2:he(h),y2:ne,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${b}`)),!u&&!J&&il.map((h,b)=>a.jsx("text",{x:h.x,y:ne+14,textAnchor:h.anchor,fill:"var(--color-text-faint)",fontSize:11,children:h.text},`xl-${b}`)),Be&&a.jsx("text",{x:(V+ge)/2,y:ee-He-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:Ao(T,Ce)}),yt&&a.jsx("text",{x:vt/2,y:(Z+ne)/2,transform:`rotate(-90 ${vt/2} ${(Z+ne)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:Ao(M&&l!=="log"?Ev(j,M,Ht):j,Ze)}),me&&a.jsx("text",{x:Sr,y:(Z+ne)/2,transform:`rotate(90 ${Sr} ${(Z+ne)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:Ao(A,Ze)}),K&&Wv(V,ge,Z,ne,v).filter(h=>!$l(h.x,h.y)).map(h=>a.jsx("circle",{cx:h.x,cy:h.y,r:1,fill:"var(--color-text-faint)",opacity:.35},h.key)),!J&&a.jsxs(a.Fragment,{children:[a.jsx("line",{x1:V,y1:Z,x2:V,y2:ne,stroke:"var(--color-border-strong)",strokeWidth:1}),a.jsx("line",{x1:V,y1:ne,x2:ge,y2:ne,stroke:"var(--color-border-strong)",strokeWidth:1}),Pe&&a.jsx("line",{x1:ge,y1:Z,x2:ge,y2:ne,stroke:"var(--color-border-strong)",strokeWidth:1})]}),a.jsxs("g",{clipPath:`url(#${Ir})`,children:[ot.filter(h=>h.kind==="band").map(h=>a.jsx("path",{d:h.d,fill:h.color,fillOpacity:h.opacity,stroke:"none"},h.id)),ot.filter(h=>h.kind==="stroked").flatMap(h=>h.uncertainty.map((b,k)=>a.jsx("path",{d:b.d,"data-band-kind":b.kind,fill:h.color,fillOpacity:tx,stroke:b.kind==="bound"?h.color:"none",strokeOpacity:b.kind==="bound"?nx:void 0,strokeWidth:b.kind==="bound"?1:void 0},`${h.id}-band-${k}`))),ot.filter(h=>h.kind==="stroked").flatMap(h=>h.segments.map((b,k)=>a.jsxs(wn.Fragment,{children:[L&&b.basis===void 0&&qs(b.d,ne)&&a.jsx("path",{d:qs(b.d,ne)??void 0,fill:h.color,fillOpacity:.12,stroke:"none"}),a.jsx("path",{d:b.d,"data-stream-status":b.status,"data-reckoning-basis":b.basis,stroke:h.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:b.basis!==void 0?Zs:void 0,strokeDasharray:b.basis!==void 0?Qs:h.dashed?"4 3":void 0})]},`${h.id}-${k}`))),ot.filter(h=>h.kind==="stroked").flatMap(h=>h.modelled.map((b,k)=>a.jsx("path",{d:b.d,"data-reckoning-basis":b.basis,stroke:h.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:Zs,strokeDasharray:Qs},`${h.id}-modelled-${k}`))),ot.map(h=>h.kind==="stroked"&&h.tail!==null?a.jsx(Ui,{kind:"modelled",x:h.tail.cx,y:h.tail.cy},`${h.id}-tail`):null),ot.filter(h=>h.kind==="stroked").flatMap(h=>h.observed.map((b,k)=>a.jsx("circle",{cx:b.cx,cy:b.cy,r:Cv,fill:h.color,"data-observed-sample":""},`${h.id}-observed-${k}`))),ot.filter(h=>h.kind==="scatter").flatMap(h=>h.points.map((b,k)=>a.jsx("circle",{cx:b.cx,cy:b.cy,r:qv,fill:h.color},`${h.id}-${k}`)))]}),e.map(h=>{if(!h.headMark)return null;const b=h.axis==="primary"?Re:Te;let k=h.data.x.length-1;for(;k>=0&&!(Number.isFinite(h.data.x[k])&&Number.isFinite(h.data.y[k]));)k-=1;return k<0?null:a.jsx("circle",{cx:he(h.data.x[k]),cy:b(h.data.y[k]),r:Tv,fill:h.headMark==="dot"?h.color:"var(--color-surface-panel)",stroke:h.color,strokeWidth:h.headMark==="dot"?0:1.5,"data-head-mark":h.headMark},`${h.id}-head`)}),m&&m.length>0&&a.jsx("g",{clipPath:`url(#${ho})`,children:a.jsx(Mo,{layers:m,frame:bn,pass:"foreground"})}),pt.map(h=>a.jsxs(wn.Fragment,{children:[a.jsx("line",{x1:V,y1:h.y,x2:L&&h.kind==="marker"?V+24:ge,y2:h.y,stroke:h.tone.line,strokeWidth:1,strokeDasharray:h.dashed?"4 3":void 0,"data-threshold-kind":h.kind,"data-threshold-passed":h.passed||void 0}),L&&h.kind==="marker"&&h.label&&a.jsx("text",{x:V+28,y:h.y+3.5,fill:h.tone.label,fontSize:10,children:h.label}),!(L&&h.kind==="marker")&&h.label&&$t.get(h.id)&&a.jsxs("text",{x:$t.get(h.id)?.x,y:$t.get(h.id)?.y,textAnchor:$t.get(h.id)?.anchor,fill:h.tone.label,fontSize:10,children:[h.label,h.currency.held&&a.jsx(Oo,{size:10,kind:h.currency.mark??"held"})]})]},h.id)),Wt.map(h=>a.jsx(ng,{x:h.x,y:h.y,size:it,color:h.color,text:h.text},h.key)),Y!=="none"&&e.map((h,b)=>{const k=ie?Oe.positions[b]:void 0,O=k?ee-He+2+k.row*Ue:dl+b*Ue;if(!ie&&O+13>ne)return null;const N=k?Rn+k.x:le?le.x0:V+3,H=ie?q-2*Rn:le?le.x1-le.x0:Ce-6,C=Jt(h.label,H),W=Math.max(1,Math.floor((C-8)/6)),Q=h.label.length>W?`${h.label.slice(0,Math.max(1,W-1))}...`:h.label;return a.jsxs(wn.Fragment,{children:[a.jsx("rect",{x:N,y:O,width:C,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),a.jsx("text",{x:N+3,y:O+10,fill:h.color,fontSize:10,children:Q})]},h.id)}),m&&m.length>0&&ft&&a.jsx(Mo,{layers:m,frame:bn,pass:"caption"}),_t!==null&&mt!==null&&a.jsx(Nm,{x:he(mt),plot:{x0:V,y0:Z,x1:ge,y1:ne},heading:_t.heading,rows:_t.rows,avoid:Mr,traces:Tr})]}),Pr=et?a.jsx("div",{ref:X,"data-plot-card":"",style:{position:"absolute",left:Me?.x0??0,top:Me?.y0??0,visibility:Me&&!gl?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof R=="function"?R({width:Ce-Ys*2,height:Ze-Ys*2,form:Ee}):R}):null,Or=U?a.jsx("div",{"data-plot-notice":"",style:{position:"absolute",left:V,top:Z,width:Ce,height:Ze,pointerEvents:"none"},children:U}):null;return se?a.jsxs(a.Fragment,{children:[Lr,Pr,Or,a.jsx(dt,{id:`${I}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),a.jsx(dt,{role:"status","aria-live":"polite",children:be})]}):a.jsxs(a.Fragment,{children:[Lr,Pr,Or]})}function Js(e,t,n,o=[]){if(t)return t;if(e.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let r=[...e.flatMap(rx),...o.filter(Number.isFinite)];if(n==="log"&&(r=r.filter(c=>c>0)),r.length===0)return n==="log"?[1,10]:[0,1];let s=r[0],l=r[0];for(const c of r)c<s&&(s=c),c>l&&(l=c);const i=Math.max(Math.max(Math.abs(s),Math.abs(l))*sx,ax);if((n==="linear"||n===void 0)&&l>s&&l-s<i){const c=(s+l)/2;return[c-i,c+i]}return[s,l]}function cx(e,t){if(e===0)return"0";const n=Math.abs(e);if(n>=1e6){const o=t?jo(t,1e6,1):1;return`${(e/1e6).toFixed(o)}M`}if(n>=1e3){const o=t?jo(t,1e3,1):1;return`${(e/1e3).toFixed(o)}k`}if(Number.isInteger(e))return String(e);if(n<.01){const o=Math.floor(Math.log10(n)),r=e/10**o;return Math.abs(r-1)<1e-9?`1e${o}`:`${r.toFixed(1)}e${o}`}return e.toFixed(t?jo(t,1,2):2)}const dx=p.createContext(null);function ux(e,t){const n=p.useContext(dx),o=n?.setFooter,r=n?.setDirty;p.useEffect(()=>(o?.(e),()=>o?.(null)),[o,e]),p.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function ab(e){const{onSave:t,value:n,saved:o,saveLabel:r="Save",extra:s,disabled:l}=e,i=p.useRef(null);i.current===null&&(i.current={v:n});const c=!Tt(n,i.current.v)&&!Tt(n,o),d=p.useRef(t);d.current=t;const u=p.useMemo(()=>a.jsxs(a.Fragment,{children:[s,a.jsx(yh,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:l,children:r})]}),[s,l,r]);ux(u,c)}export{dt as $,c1 as A,zn as B,Jx as C,qx as D,Mx as E,wh as F,Cx as G,y1 as H,Fa as I,Ix as J,o1 as K,Bx as L,t1 as M,Qx as N,n1 as O,Q1 as P,Zx as Q,p1 as R,m1 as S,Ux as T,Fi as U,I1 as V,Wx as W,Gu as X,r1 as Y,E1 as Z,L1 as _,h1 as a,Sp as a$,Tt as a0,Sx as a1,Qg as a2,Zn as a3,ux as a4,ab as a5,rb as a6,bt as a7,_c as a8,Ex as a9,Xp as aA,J1 as aB,Xx as aC,Po as aD,k1 as aE,$1 as aF,Px as aG,Hh as aH,Ox as aI,Oo as aJ,_1 as aK,S1 as aL,M1 as aM,Nx as aN,zx as aO,V1 as aP,Nm as aQ,fe as aR,wc as aS,Ia as aT,Ui as aU,dh as aV,v1 as aW,g1 as aX,kc as aY,Ko as aZ,li as a_,dx as aa,ji as ab,rs as ac,Kn as ad,Ha as ae,$c as af,Le as ag,or as ah,wa as ai,Dt as aj,yc as ak,cf as al,f1 as am,d1 as an,z1 as ao,i1 as ap,Ff as aq,us as ar,Mt as as,Vx as at,sp as au,ar as av,jx as aw,Z1 as ax,Y1 as ay,Tx as az,u1 as b,pn as b$,Ta as b0,Dx as b1,H1 as b2,ze as b3,ug as b4,No as b5,Pt as b6,hr as b7,ui as b8,qo as b9,ri as bA,Ba as bB,Ga as bC,ic as bD,Vn as bE,Go as bF,K1 as bG,G1 as bH,Mi as bI,b0 as bJ,mn as bK,Zf as bL,Vf as bM,sr as bN,N1 as bO,sb as bP,ob as bQ,Sv as bR,D1 as bS,W1 as bT,Bf as bU,jf as bV,Ju as bW,sh as bX,j1 as bY,Th as bZ,Jr as b_,Xr as ba,Vo as bb,fc as bc,It as bd,hi as be,fi as bf,oc as bg,Ah as bh,ua as bi,O1 as bj,rr as bk,P1 as bl,Eh as bm,eb as bn,_s as bo,fg as bp,nb as bq,q1 as br,Xm as bs,F1 as bt,Om as bu,tb as bv,ha as bw,eo as bx,Ym as by,X1 as bz,Hx as c,Ax as c0,B1 as c1,ss as c2,mi as c3,Rx as c4,U1 as c5,Fx as d,yh as e,a1 as f,l1 as g,s1 as h,Xu as i,A1 as j,Kx as k,T1 as l,kh as m,R1 as n,kp as o,C1 as p,Cp as q,w1 as r,b1 as s,Gx as t,Yx as u,x1 as v,e1 as w,Lx as x,$h as y,Yu as z};
