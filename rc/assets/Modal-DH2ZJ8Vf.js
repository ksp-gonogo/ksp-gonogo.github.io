import{j as a}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import w,{css as N,createGlobalStyle as Il,keyframes as Uo}from"./ext-styled-components-DAuodqsN.js";import{r as p,R as wn}from"./ext-react-C0MU9AHG.js";import{h as ia,l as Ll}from"./logger-2_QM1wvD.js";import{eb as xt,cC as Rt,ef as la,cY as Br,cq as Pl,eA as on,eF as Pn,cx as Ye,cT as ca,N as Ol}from"./context-C6-ms_G4.js";import{aW as Fl}from"./ksp-enum-names-Bh2QnpCH.js";import{R as Nl,g as Tn,N as Dl,h as da,an as zl,ac as Hl}from"./use-command-DyBcYpuK.js";import{a1 as Bl,a2 as Wl,U as je,i as Ro,h as ua,g as xe,j as De,r as Nt,a3 as Xo,N as On,a4 as Ul,k as Xl,K as Go,a5 as Yo,a6 as Gl,a7 as Yl,a8 as ql,a9 as ha,aa as Vl,x as Wr,ab as Kl,ac as Zl,ad as Ql,ae as Jl,af as ec,Z as Ct,B as tc,e as fa,_ as nc,T as cn,H as pa,ag as oc,S as ma,ah as ga,O as Ur,f as Xr,s as fo,A as kn,ai as Gr,aj as rc,ak as sc,u as ac}from"./contributionsRead-Cdcp0syN.js";import{r as va}from"./ext-react-dom-DCF8ZnaJ.js";import"./use-transmissions-hs_ToGK2.js";import"./lagrange-Dy9NtQNG.js";import{gridToPixels as ic}from"./ext-ui-kit-grid-CYQFMmYG.js";const Hx={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function Bx({children:e,layout:t="inline",...n}){return a.jsx(cc,{$layout:t,...n,children:e})}const lc={inline:N``,fill:N`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},cc=w.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>lc[e]}
`;function dc(){const e=Wl();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const qn=Bl(dc),Wx=qn.Context;function uc({children:e}){return a.jsx(qn.Provider,{children:a.jsx(hc,{children:e})})}function hc({children:e}){const t=qn.useStore();return a.jsx(Nl.Provider,{value:t,children:e})}const qo=qn.useStore,fc=()=>()=>{},pc=[],Yr=()=>pc;function mc(){const e=qo();return p.useSyncExternalStore(e?e.subscribe:fc,e?e.getActiveHandles:Yr,e?e.getActiveHandles:Yr)}const en=new WeakMap,To=new WeakMap;function qr(e){for(const t of To.get(e)??[])t()}function gc(e){return en.set(e,(en.get(e)??0)+1),qr(e),()=>{en.set(e,(en.get(e)??1)-1),qr(e)}}function xa(){const e=qo();return p.useSyncExternalStore(t=>{if(!e)return()=>{};const n=To.get(e)??new Set;return To.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(en.get(e)??0)>0,()=>!1)}const po=e=>je(e),rt={contact:{"in-contact":()=>"In contact","loss-in":e=>`LOS in ${po(e)}`,"back-in":e=>`No contact, back in ${po(e)}`,none:e=>e==="unpowered"?"No contact, no electric charge aboard":"No contact"},delay:{held:e=>`${po(e)} signal delay`,absent:()=>"no signal path"},arrival:{expected:"Expected to arrive","likely-lost":"Likely lost"},sends:{now:()=>"Sends now",held:(e,t)=>t===void 0?`Held until ${je(e)}`:`Held until ${je(e)}, arrives ${je(t)}`}};function ba(e){const{contact:t}=e,n=t.kind==="loss-in"||t.kind==="back-in"?rt.contact[t.kind](t.seconds):t.kind==="none"?rt.contact.none(t.reason):rt.contact[t.kind](),o=e.signalDelay===void 0?rt.delay.absent():rt.delay.held(e.signalDelay),r=e.sends==="now"&&e.arrival==="expected"?rt.sends.now():e.sends==="held"&&e.heldUntilUt!==void 0?rt.sends.held(e.heldUntilUt,e.arrivesUt):rt.arrival[e.arrival];return`${n} · ${o}
${r}`}function ya(e){if(e!==void 0)return e.arrival==="likely-lost"?"at-risk":e.sends==="held"?"held":void 0}function st(e,t){return je({magnitude:e,unit:t})}function vc(e,t){const{limit:n,actual:o,unit:r}=t;if(n==null||o==null)return null;switch(e){case Rt.LimitReached:{const s=xc(t.quantity),l=`${st(o,r)} of ${st(n,r)}`;return t.facilityName?`the ${t.facilityName} holds ${l} ${s}`:`it holds ${l} ${s}`}case Rt.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${st(o,r)} of ${st(n,r)}`;case Rt.InsufficientFunds:return`it costs ${st(Math.trunc(o),r)} and funds are ${st(Math.trunc(n),r)}`;case Rt.InsufficientScience:return`it costs ${st(o,r)} and science is ${st(n,r)}`;default:return null}}function xc(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function Vr(e){return e&&la(e)?.sentence||null}function bc(e){const t=e?.trim().replace(/\.$/,"");return t||null}function It(e){return Vo(e,"refused")}function Kr(e){return Vo(e,"unavailable")}function Zr(e){return Vo(e,"likely to be refused")}function Vo(e,t){const n=xt(e),o=(e.breach?vc(e.errorCode,e.breach):null)??bc(e.detail)??Vr(e.reason)??Vr(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function Ko(e){const n=xt(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":yc(It({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function yc(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function Zo(e){return`${xt(e)||e.command||"The command"}: no reply. May have run.`}function wc(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}function kc(e,t){const n=e===void 0||e.phase==="in-flight"||e.phase==="idle"?null:e.requestId,o=r=>(r.dispatchedAt??0)+(r.oneWaySeconds??0);return t.filter(r=>r.id!==n&&(r.predictedPhase==="awaiting-reply"||r.predictedPhase==="due")).sort((r,s)=>o(r)-o(s))}function wa(e,t,n,o){let r=e,s=!1;for(const l of kc(t,n)){if(l.args===void 0){if(typeof l.commandedValue=="number"){r=l.commandedValue!==0,s=!0;continue}typeof r=="boolean"&&(r=!r,s=!0);continue}const i=Co(l.args),c=i!==void 0?i:o?.(r,l.args);c!==void 0&&(s=!0,r=c)}return s?r:void 0}function $c(e,t,n,o=void 0,r){return e?"sent":n.some(s=>s.held===!0)?"held":wa(o,t,n,r)===void 0?null:"modelled"}function _c(e,t,n,o=[],r){return t!=="modelled"?e:wa(e,n,o,r)??e}function Sc(e,t){return e===void 0||e.phase==="idle"?!1:e.phase==="in-flight"?!0:e.phase!=="confirmed"&&e.phase!=="found"?!1:t.some(n=>n.id===e.requestId)}function Co(e){if(e===null||typeof e!="object")return;const t="state"in e?e.state:"enabled"in e?e.enabled:void 0;return typeof t=="boolean"?t:void 0}function ka(e,t){switch(t){case"held":return`${e} held until contact returns`;case"sent":return`${e} sent, not yet received`;case"modelled":return`${e} shown as predicted: the command should have reached the craft, and its reply is on its way back`;default:return null}}function Mc(e,t,n){if(t!=="held"&&t!=="modelled")return n;const o=ka(e,t)??"";return{kind:t,caption:n===null?o:`${n.caption}. ${o}`}}const jc=5e3;function Qr(e){try{return JSON.stringify(e)??""}catch{return null}}const Qo="Not connected to the mod. Nothing can be sent",Ec=4e3,Ac=8e3,Rc=500,Lt="SENT",$a="Refused",_a="No reply",Sa="Found";function Ma(e,t){return e.gateFor?e.gateFor(t):e.gate}function Vn({command:e,toggle:t,unavailable:n,advise:o}){const r=e.handle,s=e.members?void 0:Tn(e),l=e.options.label,[i,c]=p.useState("idle"),[d,u]=p.useState(null),[f,g]=p.useState(null),[v,m]=p.useState(!1),[x,S]=p.useState(0),[E,y]=p.useState(!1),R=p.useRef(null),j=r.streamDown===!0,A=Ma(r,s),M=r.gateStopsPress===!0,C=t?.unavailable??n??(M&&o?Kr({errorCode:Rt.ModeUnavailable,detail:o,label:l,args:s}):null)??null,k=A?.blocked===!0&&M||C!==null,W=A?.blocked===!0&&!M&&C===null,G=p.useRef(!0),F=p.useRef(0);p.useEffect(()=>(G.current=!0,()=>{G.current=!1}),[]);const I=r.founds,T=p.useRef(null),Y=p.useRef(I?.length??0);p.useEffect(()=>{const te=I?.length??0,ke=te>Y.current;Y.current=te;const ie=I?.[te-1],Oe=T.current;if(!ke||!ie||Oe===null)return;const He=ie.label!==void 0&&ie.label!==""&&Oe.label!==void 0&&ie.label!==Oe.label,Se=ie.args!==void 0&&Oe.args!==void 0&&JSON.stringify(ie.args)!==JSON.stringify(Oe.args);He||Se||(T.current=null,g(ie),u(null),c("found"))},[I]),p.useEffect(()=>{if(i!=="armed")return;const te=setTimeout(()=>c("idle"),Ec);return()=>clearTimeout(te)},[i]),p.useEffect(()=>{if(i!=="refused"&&i!=="lost"&&i!=="found")return;const te=setTimeout(()=>{c("idle"),u(null),T.current=null,g(null)},Ac);return()=>clearTimeout(te)},[i]),p.useEffect(()=>{if(x===0)return;const te=setTimeout(()=>m(!1),Rc);return()=>clearTimeout(te)},[x]);const K=p.useCallback((te=e)=>{const ke=te.members?void 0:Tn(te),ie=te.options.label,Oe=F.current+1;F.current=Oe,T.current=null,R.current=null,c("idle"),u(null),m(!0),S(me=>me+1),y(!0);const He=(me,ve)=>{!G.current||F.current!==Oe||(u(ve),c(me),y(!1),me!=="idle"&&m(!1))},Se=me=>({errorCode:me.errorCode,reason:me.reason,command:me.command,args:me.args,label:me.label??ie,breach:me.breach,detail:me.detail}),Be=te.options;let yt;if(te.members){const me=te.members.map(ve=>({...ve,options:{...ve.options,onRejected:zt=>{ve.options.onRejected?.(zt);const Ke=Br(zt);Ke.kind==="refused"&&ve.options.onRefused?.(It({...Se(Ke),label:Ke.label??ve.options.label}))}}}));yt=Dl(me,te.set??{}).then(ve=>ve.failed>0?Promise.reject(ve.firstError):void 0)}else Be.before?.(ke),yt=te.handle.dangerouslySendWithoutInput(ke,ie||Be.topic?{label:ie,topic:Be.topic}:void 0);yt.then(me=>{He("idle",null),Be.onConfirmed?.(me)},me=>{const ve=Br(me);if(te.members||(Be.onRejected?.(me),ve.kind==="refused"&&Be.onRefused?.(It(Se(ve)))),ve.kind==="lost"){T.current={args:ke,label:ie},He("lost",null);return}if(ve.kind!=="refused"){He("idle",null);return}He("refused",Se(ve))})},[e]),{hasUnconfirmed:J,hasFailure:se}=wc(r),$=r.status,X=E&&$?.phase==="in-flight"&&$.accepted!==!0&&(R.current===null||R.current===$.requestId),re=v||X;p.useEffect(()=>{E&&R.current===null&&$?.phase==="in-flight"&&(R.current=$.requestId)},[E,$]);const ye=t?r.inFlight.filter(t.rows??(()=>!0)):[],be=t?$c(re,$,ye,t.state,t.modelled):null,pe=t?_c(t.state,be,$,ye,t.modelled):void 0,ce=Pl(),U=p.useRef(void 0),de=p.useRef(void 0),[we,Ee]=p.useState(null),ue=$?.phase==="confirmed"?$.requestId:null;p.useEffect(()=>{if(ue===null)return;const te=setTimeout(()=>Ee(ue),jc);return()=>clearTimeout(te)},[ue]);const Ae=p.useRef(null);t!==void 0&&be==="modelled"&&$!==void 0&&$.phase!=="idle"&&U.current!==void 0&&pe===U.current&&(Ae.current=$.requestId);const ae=t!==void 0&&ue!==null&&Ae.current===ue&&be!=="modelled"&&ue!==null&&ue!==we&&U.current!==void 0&&t.state===de.current?U.current:pe,ee=(Sc($,r.inFlight)||$?.phase==="confirmed"&&U.current!==void 0&&t?.state===de.current)&&U.current!==void 0?U.current:ae,$e=p.useRef(ee);$e.current=ee;const qe=p.useCallback(te=>{if(!j&&!k){if(t){const ke=t.args($e.current);if(ke===void 0)return;U.current=Co(ke),de.current=t.state,U.current!==void 0&&($e.current=U.current),K({...e,args:ke});return}if(i==="refused"||i==="lost"||i==="found"){u(null),g(null),T.current=null,c("idle");return}if(te){if(re)return;if(i!=="armed"){Pe.current=Qr(s),ht.current=ce,c("armed");return}}K()}},[i,re,j,k,K,s,t,e,ce]),Pe=p.useRef(null),ht=p.useRef(ce);p.useEffect(()=>{i==="armed"&&(Qr(s)!==Pe.current||ce!==ht.current)&&c("idle")},[i,s,ce]);const _e=i==="refused"||i==="lost"||i==="found"?i:re?"sent":k?"blocked":i,Ve=_e==="blocked"||C!==null?null:W&&A?Zr({...A,label:A.label??l,args:A.args??s}):o?Zr({errorCode:Rt.ModeUnavailable,detail:o,label:l,args:s}):null;return{phase:_e,isSent:_e==="sent",isArmed:_e==="armed",isRefused:_e==="refused",isLost:_e==="lost",isFound:_e==="found",isBlocked:_e==="blocked",isOffline:j&&_e!=="sent",isUnavailable:C!==null,isAdvised:Ve!==null,adviceText:Ve,command:e,refusalText:d?It(d):C!==null?C:_e==="blocked"&&A?Kr({...A,label:A.label??l,args:A.args??s}):null,foundText:f?Ko(f):null,lossText:_e==="lost"?Zo({args:s,label:l}):null,pressWith:te=>{j||(U.current=Co(Tn(te)),de.current=t?.state,K(te))},toggleView:t?{shown:ae,on:typeof ae=="number"?ae>0:ae===!0,word:be==="sent"?t.sentWord??Lt:t.word(ae),reserve:[...t.words,t.sentWord??Lt],confirmation:be,unavailable:C,marking:Mc(t.name,be,t.marking??null),sentence:ka(t.name,be)}:null,hasUnconfirmed:J,hasFailure:se,press:qe}}function Tc({command:e,unavailable:t,advise:n}){const o=Vn({command:{kind:"bound",handle:e.handle,args:void 0,options:e.options},unavailable:t,advise:n}),r=Ea(o),s=o.isBlocked||o.isUnavailable||o.isOffline||t!=null;return ja(o,s,r,l=>{if(s)return;const i=e.toArgs(l);i!==void 0&&o.pressWith(da(e.handle,i,e.options))},t??null)}function Ux({command:e,unavailable:t,advise:n}){const o=Vn({command:e,unavailable:t,advise:n}),r=Ea(o),s=o.isBlocked||o.isUnavailable||o.isOffline||t!=null;return ja(o,s,r,()=>{s||o.press(!1)},t??null)}function ja(e,t,n,o,r){const s=e.command.handle,l=e.isBlocked&&!e.isUnavailable,i=e.isSent?Lt:e.isRefused?$a:e.isLost?_a:e.isFound?Sa:null,c=s.sendStatus,d=c===void 0?void 0:ba(c),u=e.foundText??e.refusalText??(e.isLost?e.lossText:null),f=u??(e.isSent?"Sent, not yet received":e.isOffline?Qo:r??([e.adviceText,d].filter(Boolean).join(`
`)||void 0));return{control:e,send:o,word:i,tip:f??void 0,inert:t,edge:{"data-command-edge":l?"blocked":e.isLost||e.isRefused||e.hasUnconfirmed||e.hasFailure?"warn":void 0,"data-command-phase":e.phase,"data-stream":e.isOffline?"down":void 0,"data-predicted":l?void 0:ya(c)??(e.isAdvised?"at-risk":void 0),"aria-disabled":t?!0:void 0},announce:n?null:u??(e.isSent?"Sent, not yet received":null)}}function Ea(e){return xa()&&e.command.handle.railed===!0}const Aa=N`
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
`,Xx=N`
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
`,Dt=N`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,pn=N`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,dt=w.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function bt({children:e,"aria-label":t,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:r=!1,as:s="span",className:l}){const c={role:n?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":t,className:l,"data-live-region":""};return n?a.jsx(dt,{as:s,...c,children:e}):p.createElement(s,c,e)}const Io="data-restoring-focus",Cc=120,Ic=48,Lc=600,Pc=120,mo=new Set,Jr=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function mn(e){return Ra(e,"below")}function Ra(e,t){const[n,o]=p.useState(null),[r,s]=p.useState(!1),[l,i]=p.useState(!1),[c,d]=p.useState(!1),[u,f]=p.useState(!1),[g,v]=p.useState(!1),m=p.useRef(null),x=p.useRef(null),S=p.useRef(null),E=p.useRef(!1),y=p.useRef(!1),R=p.useRef(null),j=p.useRef(null),A=e!=null&&e!==""?e:null,M=n!==null&&(r||l||c||u||g),C=p.useCallback(()=>{R.current!==null&&clearTimeout(R.current),R.current=null,j.current!==null&&clearTimeout(j.current),j.current=null},[]),k=p.useCallback(()=>{C(),o(null),s(!1),i(!1),d(!1),f(!1),v(!1),E.current=!1},[C]);p.useEffect(()=>{const F=x.current;if(!M||F===null)return;const I={anchor:F,close:k};for(const T of mo)if(T.anchor!==F&&(T.anchor.contains(F)&&T.close(),F.contains(T.anchor))){k();return}return mo.add(I),()=>{mo.delete(I)}},[M,k]),p.useEffect(()=>{if(!u)return;const F=()=>{const T=document.getSelection(),Y=T!==null&&!T.isCollapsed&&S.current?.contains(T.anchorNode)===!0;!E.current&&!Y&&f(!1)},I=()=>{E.current=!1,F()};return document.addEventListener("pointerup",I),document.addEventListener("selectionchange",F),()=>{document.removeEventListener("pointerup",I),document.removeEventListener("selectionchange",F)}},[u]),p.useEffect(()=>{if(!g)return;const F=I=>{const T=I.target;T instanceof Node&&(m.current?.contains(T)||S.current?.contains(T)||k())};return document.addEventListener("pointerdown",F,!0),()=>document.removeEventListener("pointerdown",F,!0)},[g,k]);const W=p.useCallback(()=>{C(),R.current=setTimeout(()=>{R.current=null,s(!1),d(!1)},Pc)},[C]);if(p.useEffect(()=>C,[C]),p.useEffect(()=>{if(n!==null)return window.addEventListener("scroll",k,!0),window.addEventListener("resize",k),()=>{window.removeEventListener("scroll",k,!0),window.removeEventListener("resize",k)}},[n,k]),p.useEffect(()=>{if(!M||A===null)return;const F=I=>{I.key==="Escape"&&(I.stopPropagation(),k())};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[M,A,k]),A===null)return{anchor:{},tip:null};const G=F=>{x.current=F;const I=F.getBoundingClientRect();o({top:I.bottom,left:I.left,above:t==="above"?I.top>=Ic:window.innerHeight-I.bottom<Cc,anchorTop:I.top})};return{anchor:{"data-tooltip":A,onPointerEnter:F=>{if(F.pointerType==="touch")return;C();const I=F.currentTarget;j.current=setTimeout(()=>{j.current=null,G(I),s(!0)},Lc)},onPointerLeave:W,onPointerDown:F=>{y.current=!0,F.pointerType!=="touch"&&k()},onPointerUp:F=>{if(y.current=!1,F.pointerType==="touch"){if(g){k();return}m.current=F.currentTarget,G(F.currentTarget),v(!0)}},onFocus:F=>{y.current||document.documentElement.hasAttribute(Io)||(G(F.currentTarget),i(!0))},onBlur:()=>{i(!1),!r&&!c&&!g&&o(null)}},tip:M?va.createPortal(a.jsx(Oc,{ref:S,at:n,text:A,onPress:()=>{E.current=!0,f(!0)},onPointerEnter:()=>{C(),d(!0)},onPointerLeave:W}),document.body):null}}const Oc=p.forwardRef(function({at:t,text:n,onPress:o,onPointerEnter:r,onPointerLeave:s},l){const i=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return a.jsx(Nc,{ref:l,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),o()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...i,left:t.left,"--tip-left":`${t.left}px`},children:n})});function St(e,t){return(...n)=>{typeof e=="function"&&e(...n),t?.(...n)}}function Le({text:e,children:t,focusable:n=!1,announce:o=!0,placement:r="below"}){const{anchor:s,tip:l}=Ra(e,r);if(e==null||e==="")return a.jsx(a.Fragment,{children:t});const i=t.props,c=i["aria-label"],d=!o||typeof c=="string"&&Jr(c).includes(Jr(e));return a.jsxs(a.Fragment,{children:[p.cloneElement(t,{"data-tooltip":e,onPointerEnter:St(i.onPointerEnter,s.onPointerEnter),onPointerLeave:St(i.onPointerLeave,s.onPointerLeave),onPointerDown:St(i.onPointerDown,s.onPointerDown),onPointerUp:St(i.onPointerUp,s.onPointerUp),onFocus:St(i.onFocus,s.onFocus),onBlur:St(i.onBlur,s.onBlur),"aria-description":d?i["aria-description"]:e,tabIndex:n?i.tabIndex??0:i.tabIndex}),l,n&&a.jsx(Fc,{})]})}const Fc=Il`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Nc=w.div`
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
`;function Dc(e){return e==="neutral"?"go":e}const Fn=e=>N`
  background: ${Ro[e]};
  border-color: ${Ro[e]};
  color: ${ua[e]};
`,zc=e=>N`
  border-color: ${xe[e]};
  color: ${De[e]};
`,es={default:N`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:N`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},Hc=N`
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
`,Bc=N`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function Wc(e,t){return e==="text"?Hc:e==="primary"?Fn(t):t==="neutral"?es[e]:N`
    ${es[e]}
    ${zc(t)}
  `}const Uc=N`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,Xc={sm:N`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:N`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},Ta=w.button`
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

  ${({$size:e})=>Xc[e]}
  ${({$variant:e,$tone:t})=>Wc(e,t)}
  ${({$pressed:e,$tone:t})=>e?Fn(Dc(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":Uc}
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

  ${({$variant:e})=>e==="text"?Bc:""}
`,Jo=w.button`
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
    ${Fn("go")}
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
    ${Fn("go")}
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
`;function Ca(e){let t="";return p.Children.forEach(e,n=>{if(typeof n=="string"||typeof n=="number"){t+=String(n);return}p.isValidElement(n)&&(t+=Ca(n.props.children))}),t.replace(/\s+/g," ").trim()}function Ia({label:e,children:t,disabledReason:n}){return Gc({label:e,children:t,disabledReason:n})}function Gc({label:e,children:t,disabledReason:n}){const o=e!==void 0&&e!==""&&e!==Ca(t)?e:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function La(e,t){return e===!0&&t!==void 0&&t!==""}function Pa(e){e.preventDefault(),e.stopPropagation()}function Oa(e,t,n){return t===null||e.props["data-tooltip"]!==void 0?e:a.jsx(Le,{text:t,announce:n,children:e})}const Gx=p.forwardRef(function({label:t,icon:n,type:o,...r},s){return a.jsx("button",{ref:s,type:o??"button","aria-label":t,...r,children:a.jsx(Fa,{label:t,icon:n})})});function Fa({label:e,icon:t}){const n=p.useRef(null),o=p.useRef(null),[r,s]=p.useState(!0);return p.useLayoutEffect(()=>{const l=n.current,i=o.current;if(!l||!i)return;const c=()=>{s(i.scrollWidth<=l.clientWidth)};if(c(),typeof ResizeObserver>"u")return;const d=new ResizeObserver(c);return d.observe(l),d.observe(i),()=>d.disconnect()},[]),a.jsxs(Yc,{ref:n,children:[a.jsx(qc,{ref:o,"aria-hidden":"true",children:e}),r?a.jsx(Vc,{"aria-hidden":"true",children:e}):a.jsx(Kc,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const Yc=w.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,qc=w.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,Vc=w.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,Kc=w.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=e=>{const t=Qc(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var go={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},ed=p.createContext({}),td=()=>p.useContext(ed),nd=p.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:o,className:r="",children:s,iconNode:l,...i},c)=>{const{size:d=24,strokeWidth:u=2,absoluteStrokeWidth:f=!1,color:g="currentColor",className:v=""}=td()??{},m=o??f?Number(n??u)*24/Number(t??d):n??u;return p.createElement("svg",{ref:c,...go,width:t??d??go.width,height:t??d??go.height,stroke:e??g,strokeWidth:m,className:Na("lucide",v,r),...!s&&!Jc(i)&&{"aria-hidden":"true"},...i},[...l.map(([x,S])=>p.createElement(x,S)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=(e,t)=>{const n=p.forwardRef(({className:o,...r},s)=>p.createElement(nd,{ref:s,iconNode:t,className:Na(`lucide-${Zc(ts(e))}`,`lucide-${e}`,o),...r}));return n.displayName=ts(e),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],rd=D("arrow-down-to-line",od);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],ad=D("arrow-down",sd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]],ld=D("arrow-left-right",id);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],dd=D("arrow-left",cd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],hd=D("arrow-right",ud);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],pd=D("arrow-up-to-line",fd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],gd=D("arrow-up",md);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],xd=D("bell",vd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],yd=D("check",bd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],kd=D("chevron-down",wd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],_d=D("chevron-left",$d);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Md=D("chevron-right",Sd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ed=D("chevron-up",jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],Rd=D("columns-2",Ad);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],Cd=D("computer",Td);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],Ld=D("corner-down-left",Id);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Od=D("database",Pd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Nd=D("file-text",Fd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],zd=D("grip",Dd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Bd=D("heart",Hd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Ud=D("history",Wd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Gd=D("house",Xd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],qd=D("info",Yd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],Kd=D("joystick",Vd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Qd=D("layers",Zd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],eu=D("lightbulb-off",Jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],nu=D("lightbulb",tu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ru=D("lock",ou);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],au=D("maximize",su);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],lu=D("menu",iu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],du=D("microscope",cu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],hu=D("minimize",uu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],pu=D("pause",fu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],gu=D("pencil",mu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],xu=D("play",vu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],yu=D("plus",bu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],ku=D("radio",wu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],_u=D("rectangle-horizontal",$u);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],Mu=D("rectangle-vertical",Su);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Eu=D("rotate-ccw",ju);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],Ru=D("rotate-cw",Au);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],Cu=D("rows-2",Tu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]],Lu=D("satellite-dish",Iu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],Ou=D("satellite",Pu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Nu=D("settings",Fu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],zu=D("square",Du);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Bu=D("star",Hu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Uu=D("undo-2",Wu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Gu=D("volume-2",Xu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],qu=D("volume-x",Yu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Ku=D("wrench",Vu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Qu=D("x",Zu),Ju="var(--icon-size-control)",eh={strokeWidth:1.8,"aria-hidden":!0};function z(e,t){const n=p.forwardRef(({label:o,size:r=Ju,style:s,...l},i)=>{const c=typeof r=="number"?{size:r,style:s}:{style:{width:r,height:r,...s}},d=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return a.jsx(e,{...eh,...t,...d,...l,...c,ref:i})});return n.displayName=e.displayName??e.name,n}const Yx=z(zd),qx=z(Kd),Vx=z(Ud),Kx=z(Gd),Zx=z(qd),Qx=z(ru),Jx=z(ku),e1=z(Gu),t1=z(qu),n1=z(xd),o1=z(Qd),r1=z(Nu),s1=z(Ou),a1=z(Lu),i1=z(au),l1=z(hu),c1=z(Od),d1=z(Cd),u1=z(Nd),h1=z(yu,{strokeWidth:2.4}),Da=z(Qu),f1=z(gu),p1=z(yd),th=z(Bu),m1=z(Bd),g1=z(lu),nh=z(du),v1=z(xu),x1=z(pu),b1=z(zu),y1=z(Ed),w1=z(kd),k1=z(_d),$1=z(Md),_1=z(dd),S1=z(ld),M1=z(gd),j1=z(hd),E1=z(ad),A1=z(pd),R1=z(rd),T1=z(Uu),C1=z(Ru),I1=z(Eu),L1=z(Rd),P1=z(_u),O1=z(Cu),F1=z(Mu),za=z(Ld),oh=D("space-helmet",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M10.5 8h3a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 1 0-7z",key:"visor"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),rh=D("space-helmet-visor-up",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M8 7.5C9.5 5 14.5 5 16 7.5",key:"visor"}],["circle",{cx:"12",cy:"12.5",r:"2",fill:"currentColor",key:"face"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),N1=z(oh),D1=z(rh),z1=z(Ku),H1=z(nu),B1=z(eu),er="max(0.075em, 1.25px)",fe={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},Lo=fe.held.domSize,Po=fe.modelled.domSize,sh=N`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Lo} + 0.14em);
  }
`,ah=N`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Po} + 0.14em);
  }
`;function ih(e){return N`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${fe[e].hollowDomSize} + 0.14em);
    }
  `}function Ha(e,t=!1){return t?ih(e):e==="current"?null:e==="modelled"?ah:sh}const lh=w.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Lo};
  height: ${Lo};
  background: ${fe.held.color};
`,ch=w.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Po};
  height: ${Po};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${fe.modelled.color};
`,tr=e=>N`
  position: absolute;
  right: 0;
  top: 0;
  width: ${fe[e].hollowDomSize};
  height: ${fe[e].hollowDomSize};
`,dh=w.span`
  ${tr("current")}
  border: ${er} solid ${fe.current.color};
  border-radius: var(--radius-circle);
`,uh=w.span`
  ${tr("held")}
  border: ${er} solid ${fe.held.color};
`,hh=w.span`
  ${tr("modelled")}
  --stroke: ${er};
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
`,fh={current:dh,held:uh,modelled:hh};function Ba({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?fh[e]:e==="modelled"?ch:lh;return a.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const ph=w.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>Ha(e??"held",t)}
`;function Oo({caption:e,kind:t="held",elsewhere:n=!1,children:o,...r}){const{anchor:s,tip:l}=mn(e);return a.jsxs(ph,{$kind:t,$elsewhere:n,...r,...s,children:[o,a.jsx(Ba,{kind:t,elsewhere:n}),e!==null&&a.jsxs(dt,{"data-unit-currency":"",children:[", ",e]}),l]})}const mh=w(Oo)`
  position: static;

  &::after {
    content: none;
  }

  & > [data-held-mark] {
    top: 3px;
    right: 3px;
  }
`,Wa=p.forwardRef(function({variant:t="default",tone:n,size:o="md",pressed:r,predictedOutcome:s,disabledReason:l,marked:i,type:c="button",...d},u){const f=La(d.disabled,l),g=Ia({label:d["aria-label"],children:d.children,disabledReason:f?l:void 0}),{disabled:v,onClick:m,children:x,...S}=d;return Oa(a.jsx(Ta,{ref:u,$variant:t,$tone:n??(t==="primary"?"go":"neutral"),$size:o,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,"data-held-button":i?"":void 0,...S,disabled:f?void 0:v,...f?{"aria-disabled":!0}:{},onClick:f?Pa:m,type:c,children:i?a.jsx(mh,{kind:i.kind,caption:i.caption,children:x}):x}),g,f)}),gh=w.span`
  display: inline-grid;
  justify-items: center;
`,vh=w.span`
  grid-area: 1 / 1;
`,xh=w.span`
  grid-area: 1 / 1;
  visibility: hidden;

  &::before {
    content: attr(data-word);
  }
`;function bh({shown:e,reserve:t}){return a.jsxs(gh,{children:[[...new Set(t)].map(n=>a.jsx(xh,{"data-word":n,"aria-hidden":"true"},n)),a.jsx(vh,{children:e})]})}function gn(e){return"press"in e&&typeof e.press=="function"}function yh(e){return"kind"in e?e:da(e,void 0)}function wh(e){const{command:t,unavailable:n,advise:o,...r}=e;return gn(t)?a.jsx(nr,{...r,control:t}):a.jsx(Ua,{...r,command:t,unavailable:n,advise:o})}function kh(e){const{command:t,unavailable:n,advise:o,...r}=e;return gn(t)?a.jsx(nr,{...r,glyph:!0,control:t}):a.jsx(Ua,{...r,glyph:!0,command:t,unavailable:n,advise:o})}function Ua({command:e,unavailable:t,advise:n,...o}){const r=Vn({command:yh(e),unavailable:t,advise:n});return a.jsx(nr,{...o,control:r})}function nr({control:e,glyph:t=!1,children:n,confirmLabel:o,refusedLabel:r=$a,lostLabel:s=_a,foundLabel:l=Sa,confirmAriaLabel:i,sentAriaLabel:c,blockedAriaLabel:d,pressed:u,variant:f="default",tone:g="neutral",icon:v,confirmIcon:m,onPressReady:x,size:S="md",confirmTone:E="go",tip:y,"aria-label":R,...j}){const{phase:A,isSent:M,isArmed:C,isRefused:k,isLost:W,isFound:G,isBlocked:F,isUnavailable:I,isAdvised:T,adviceText:Y,isOffline:K,refusalText:J,foundText:se,lossText:$,hasUnconfirmed:X,hasFailure:re,press:ye,command:be}=e,pe=be.handle,ce=be.members?void 0:Tn(be),U=be.options.label,de=o!==void 0,we=U?`${U} sent, not yet received`:"Sent, not yet received";p.useEffect(()=>{if(x)return x(()=>ye(de)),()=>x(null)},[x,ye,de]);const ue=t?M?a.jsx(za,{"aria-hidden":"true"}):C?m??v??n:n:M?Lt:k?r:W?s:G?l:C?o:n,Ae=v!==void 0&&typeof ue=="string",ae=Ae?a.jsx(Fa,{label:ue,icon:C?m??v:v}):!t&&!Ae&&typeof ue=="string"&&ue!==n?a.jsx(Sh,{children:ue}):ue,q=[o,Lt,r,s,l],ee=!t&&v===void 0&&typeof n=="string"&&q.every(Se=>Se===void 0||typeof Se=="string"),$e=q.filter(Se=>Se!==void 0).reduce((Se,Be)=>Be.length>Se.length?Be:Se,Lt),Pe=xa()&&pe.railed===!0?null:k?J:W?$:G?se:M?we:null,ht=u===!0||C||k,_e=_h({restTone:f==="primary"?g:"neutral",filled:ht,isRefused:k,isFound:G,isArmed:C,confirmTone:E,tone:g}),Ve=F&&!I,te=Ve?t?"blocked":void 0:W||t&&(k||X||re)?"warn":void 0,ke=t?Eh:jh,ie=pe.sendStatus,Oe=[y,Y,ie===void 0?null:ba(ie)].filter(Boolean).join(`
`),He=K?[y,Qo].filter(Boolean).join(`
`):Oe||void 0;return a.jsxs(a.Fragment,{children:[a.jsx(Le,{text:se??J??$??(M?we:He),children:a.jsx(ke,{type:"button","data-command-edge":te,$tone:_e,$variant:f,$fit:Ae,$size:S,$pressed:ht,$armed:C,$blocked:Ve,"aria-pressed":u,"aria-disabled":F||K||void 0,"data-unconfirmed":X?"true":void 0,"data-failed":re?"true":void 0,"data-command-phase":A,"data-stream":K?"down":void 0,"data-predicted":Ve?void 0:ya(ie)??(T?"at-risk":void 0),"data-gate":Ve?"blocked":T?"advised":Ma(pe,ce)?.undetermined?"undetermined":void 0,"aria-label":(k?J??void 0:W?$??void 0:G?se??R:F?d??R:M?c??we:C?i:R)??(Ae?ue:void 0),onClick:()=>ye(o!==void 0),"data-rest-label":ee?n:void 0,"data-armed-label":ee?$e:void 0,...j,children:ee?a.jsx(Mh,{children:ae}):ae})}),a.jsx(bt,{visuallyHidden:!0,children:Pe})]})}function W1(e){const{command:t,...n}=e;return gn(t)?a.jsx(or,{...n,control:t}):a.jsx(Xa,{...n,command:t})}function $h(e){const{command:t,...n}=e;return gn(t)?a.jsx(or,{...n,glyph:!0,control:t}):a.jsx(Xa,{...n,glyph:!0,command:t})}function Xa({command:e,state:t,name:n,unavailable:o,advise:r,children:s,sentWord:l,rows:i,modelled:c,marking:d,glyph:u,...f}){const g=m=>typeof s=="function"?s(m):typeof s=="string"?s:"",v=Vn({command:{kind:"bound",handle:e.handle,args:void 0,options:e.options},toggle:{state:t,name:n??"",word:g,words:[...new Set([g(!0),g(!1)])],sentWord:l,rows:i,modelled:c,marking:d,unavailable:o,args:m=>m==null?void 0:e.toArgs(!(typeof m=="number"?m>0:m))},advise:r});return a.jsx(or,{...f,glyph:u,control:v})}function or({control:e,glyph:t=!1,tone:n="go",size:o="md",icon:r,tip:s,"aria-label":l,...i}){const{phase:c,isOffline:d,isRefused:u,isLost:f,isBlocked:g,isUnavailable:v,isAdvised:m,adviceText:x,refusalText:S,lossText:E,toggleView:y,hasUnconfirmed:R,hasFailure:j,press:A}=e;if(!y)return null;const{marking:M,sentence:C}=y,k=y.confirmation==="held"||y.confirmation==="modelled",W=d?Qo:g&&!v||u?S:f?E:((k?null:C)??[s,x].filter(Boolean).join(`
`))||void 0,I=g&&!v?"blocked":u||f||R||j?"warn":void 0,T=y.unavailable!==null||g,Y=y.unavailable??(g?S:null);return a.jsxs(a.Fragment,{children:[a.jsx(Le,{text:W,children:t?a.jsx(Jo,{type:"button","aria-pressed":y.on,"aria-disabled":T||void 0,"aria-label":l,"data-command-phase":c,"data-stream":d?"down":void 0,"data-command-edge":I,"data-predicted":m?"at-risk":void 0,onClick:()=>A(!1),...i,children:y.confirmation==="sent"?a.jsx(za,{"aria-hidden":"true"}):r}):a.jsx(Wa,{type:"button",size:o,tone:y.on?n:void 0,pressed:y.on,"aria-pressed":y.on,disabled:T||void 0,disabledReason:Y??void 0,marked:M,"aria-label":l,"data-command-phase":c,"data-stream":d?"down":void 0,"data-command-edge":I,"data-predicted":m?"at-risk":void 0,onClick:()=>A(!1),...i,children:r!==void 0&&y.confirmation!=="sent"?r:a.jsx(bh,{shown:y.word,reserve:y.reserve})})}),a.jsx(bt,{visuallyHidden:!0,children:k?"":C??""})]})}function _h(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const Ga=Uo`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,Sh=w.span`
  display: block;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Mh=w.span`
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
`,jh=w(Ta)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&N`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Ga} 1s var(--ease-emphasis) infinite;
      }
    `}

  &:disabled {
    opacity: 0.5;
  }

  /* Dimmed toward the muted text token rather than faded, so the refusal reason stays readable; the warn border says the game refused. */
  ${({$blocked:e})=>e&&N`
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
`,Eh=w(Jo)`
  ${({$armed:e})=>e&&N`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Ga} 1s var(--ease-emphasis) infinite;
      }
    `}
  ${({$blocked:e})=>e&&N`
      opacity: 0.5;
      cursor: help;
    `}
`,Fo=p.forwardRef(function(t,n){return t.command!==void 0?a.jsx(wh,{...t}):a.jsx(Wa,{ref:n,...t})}),U1=w.button`
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
`,rr=p.forwardRef(function(t,n){if(t.command!==void 0){const{command:g}=t;if("kind"in g&&g.kind==="value"?!0:gn(g)&&g.toggleView!==null){const{children:m,...x}=t;return a.jsx($h,{...x,icon:m})}return a.jsx(kh,{...t})}const{pressed:o,disabledReason:r,command:s,...l}=t,i=La(l.disabled,r),c=Ia({label:l["aria-label"],children:l.children,disabledReason:i?r:void 0}),{disabled:d,onClick:u,...f}=l;return Oa(a.jsx(Jo,{ref:n,"aria-pressed":o,...f,disabled:i?void 0:d,...i?{"aria-disabled":!0}:{},onClick:i?Pa:u}),c,i)}),X1=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,Ah=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,G1=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,Rh=w.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Y1=w.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,q1=w.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,sr=N`
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
`,Th=w.input`
  ${sr}
  width: 100%;
  ${Aa}
  &[data-command-phase] {
    /* Room for the word of a command inside the field, at its end. */
    padding-inline-end: 8ch;
  }
`,V1=p.forwardRef(function(t,n){return t.command?a.jsx(Lh,{...t,command:t.command,forwardedRef:n}):a.jsx(Ya,{ref:n,...t})}),Ya=w.select`
  ${sr}
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
  ${Aa}
  &[data-command-phase] {
    /* Room for the word inside the field, past the chevron. */
    padding-inline-end: calc(var(--inset-field-select-end) + 8ch);
  }

  @media (pointer: coarse) {
    padding-inline-end: var(--inset-field-select-end);
  }
`,Ch=w.span`
  position: absolute;
  inset-block: 0;
  inset-inline-end: var(--inset-field-select-end);
  display: flex;
  align-items: center;
  pointer-events: none;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
`,Ih=w.div`
  position: relative;
  width: 100%;
`;function Lh({command:e,value:t,unavailable:n,forwardedRef:o,children:r,...s}){const l=Tc({command:e,unavailable:n}),[i,c]=p.useState(null),d=l.control.isSent;return p.useEffect(()=>{d||c(null)},[d]),a.jsx(Le,{text:l.tip,children:a.jsxs(Ih,{children:[a.jsx(Ya,{...s,ref:o,value:i??t,...l.edge,onChange:u=>{l.inert||(c(u.target.value),l.send(u.target.value))},children:r}),a.jsx(Ch,{"aria-hidden":"true",children:l.word}),a.jsx(bt,{visuallyHidden:!0,children:l.announce})]})})}const K1=w.textarea`
  ${sr}
  width: 100%;
  resize: vertical;
`;function Ph(e){if(e===void 0)return null;const{value:t}=Xo(e.magnitude,e.unit);return t===On?null:t}function qa(e,t){const n=Ph(t);return n===null?e:`${e}, as of ${n}`}const ar="modelled to SCET";function Oh(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function ns(e){return Pn(e.value)||on(e.value)?{shown:e.value,held:!1,mark:null,isStatic:Pn(e.value),isDeterministic:on(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:qa(Nt(e.grade),e.asOfUt)}}function Kn(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:Pn(e),isDeterministic:on(e),caption:null,band:null};const n=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!on(e.value)){const o=e.reckoning.modelled;if(e.state==="held"){const s=ns(e),l=e.value===void 0,i=s.held||l,c=s.caption??(l?"":null);return{...s,shown:o,held:i,mark:i?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:n}}const r=e.reckoning.beyondReceived;return{shown:o,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?ar:null,band:n}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:Pn(e.value),isDeterministic:on(e.value),caption:null,band:n}:e.state==="held"?{...ns(e),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Va(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function Fh(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:ar}:null;if(e.state==="held"){const n=qa(Nt(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function Z1(e){return e===void 0?null:typeof e!="string"?Fh(e):{kind:"held",caption:Nt(e)}}function ir(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function Q1(e,t){const n=ir(t);return n===void 0?e:{state:"held",value:e,grade:n,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}function lr(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function J1(e={}){return lr(t=>je(t,e))}const Nh=.01;function eb({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const r=Math.abs(t(n)-t(o));return(e?Math.min(r,1-r):r)<=Nh}}}function Ka(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(r=>!n.readsAsOne(e,r))}function cr({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,r=x=>Ul(typeof x=="number"?x:x.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,l=Oh(s);if(s?.value!==void 0&&l!==void 0)return Ka(s.value,l,lr(r))?a.jsx(Oo,{"data-held":"",kind:"modelled",caption:`${ar}, last received ${r(s.value)}`,children:r(l)}):a.jsx(a.Fragment,{children:r(s.value)});const i=Kn(o,{drawsReckoning:!0}),{shown:c,held:d,mark:u,caption:f}=i,g=typeof e=="number"?e:c;if(g==null)return On;const v=r(g),m=Va({...i,shown:g});return d?a.jsx(Oo,{...m,kind:u??"held",caption:f,children:v}):a.jsx("span",{"data-figure":m["data-figure"],children:v})}const os={left:!1,right:!1};function Dh(e){const[t,n]=p.useState(os),o=p.useRef(os);return p.useEffect(()=>{if(!e)return;const r=()=>{const i=e.scrollLeft>1,c=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===i&&o.current.right===c||(o.current={left:i,right:c},n(o.current))};r(),e.addEventListener("scroll",r,{passive:!0});const s=typeof ResizeObserver>"u"?null:new ResizeObserver(r);s?.observe(e);for(const i of Array.from(e.children))s?.observe(i);const l=new MutationObserver(()=>{for(const i of Array.from(e.children))s?.observe(i);r()});return l.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",r),s?.disconnect(),l.disconnect()}},[e]),t}const rs=w.div`
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
`;function Zn(e){const t=p.useRef(null),[n,o]=p.useState(e),[r,s]=p.useState(null);return p.useEffect(()=>{t.current!==r&&s(t.current)}),p.useEffect(()=>{if(!r||typeof ResizeObserver>"u")return;const l=new ResizeObserver(i=>{for(const c of i)c.contentRect.width>0&&c.contentRect.height>0&&o({w:Math.floor(c.contentRect.width),h:Math.floor(c.contentRect.height)})});return l.observe(r),()=>l.disconnect()},[r]),{ref:t,size:n}}const zh='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Za(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),r=n[o+1]??n[o-1];if(r&&r!==e){r.focus();return}const s=t.closest("[data-panel-rail-frame]"),l=s?s.parentElement?.querySelector("[data-panel-body]"):t.closest("[data-panel-body]");if(!l)return;const i=[...l.querySelectorAll(zh)].find(c=>c!==e);if(i){i.focus();return}l.hasAttribute("tabindex")||l.setAttribute("tabindex","-1"),l.focus()}const dn=700;function dr(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const Qn={"in-transit":1/6,"awaiting-reply":1/2,due:2/3,overdue:2/3,lost:2/3};function Qa(e){const t=e.reachEtaSeconds;if(e.hold&&t!==null&&t>0)return Hh(e.hold);const n=Ja(e);if(t===null||n===null)return Qn[e.predictedPhase];const o=n-t,r=e.replyEtaSeconds===null?1/3:2/3;return Math.max(0,Math.min(r,o/(3*n)))}function ss(e){const t=Ja(e);return t===null?0:Math.max(0,(1-Qa(e))*3*t)}function Hh(e){return Math.max(0,Math.min(1,e.outbound))/3}function Ja(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function ei(e){return Bh(e).map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:t.settling==="confirmed"?1:Qa(t),glyph:t.glyph??dr(t.label||t.command),...t.held?{held:!0}:{},...t.settling?{settling:t.settling,settleSeconds:t.settleSeconds??0}:{},...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function Bh(e){return e.some(t=>t.dispatchedAt!==void 0)?e.map((t,n)=>({item:t,index:n})).sort((t,n)=>(t.item.dispatchedAt??Number.NEGATIVE_INFINITY)-(n.item.dispatchedAt??Number.NEGATIVE_INFINITY)||t.index-n.index).map(({item:t})=>t):e}function tb({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||zl(e)!=="shown"?"none":n||Hl({oneWaySeconds:Ye("s",e)})==="live"?"badge":t?"strip":"none"}const Wh={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},un={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Uh(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Wh[e.phase]}const Jn=new Set(["overdue","lost"]),Xh=180,Gh=96;function ti(e){return je(Ye("s",Math.max(0,e)))}function Yh(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const qh=1;function ur(e){const t=Fl(),n=p.useRef(t);n.current=t;const[o,r]=p.useState(e),s=p.useRef({eta:e,ut:vo(t)});return p.useEffect(()=>{const l=s.current.eta;(l===null!=(e===null)||l!==null&&e!==null&&Math.abs(e-l)>=qh)&&(s.current={eta:e,ut:vo(n.current)},r(e))},[e]),p.useEffect(()=>{const l=setInterval(()=>{const{eta:i,ut:c}=s.current;if(i===null)return;const d=vo(n.current);if(d!==void 0){if(c===void 0){s.current={eta:i,ut:d};return}r(Math.max(0,i-(d-c)))}},1e3);return()=>clearInterval(l)},[]),o}function vo(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function Vh({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":r="In-flight commands",variant:s="inline",onDismiss:l}){const{ref:i,size:c}=Zn({w:320,h:0}),d=s==="rail"||s==="expanded"?e:e.filter(f=>!f.settling);if(s==="rail")return d.length===0?null:a.jsx(Kh,{items:d,"aria-label":r});if(s==="expanded")return d.length===0?null:a.jsx(lf,{items:d,"aria-label":r,onDismiss:l});const u=n!=="auto"?n:c.w>=Xh?"full":c.w>=Gh?"compact":"badge";return d.length===0?null:u==="badge"?a.jsx(Zh,{ref:i,items:d,mode:t,"aria-label":r}):a.jsx(si,{ref:i,role:"list","aria-label":r,"data-mode":t,"data-density":u,$row:o==="row",children:d.map(f=>a.jsx(Qh,{item:f,$compact:u==="compact"},f.id))})}const ct=8,ni=1/3;function Kh({items:e,"aria-label":t}){const n=e.filter(o=>!o.settling);return a.jsx(Jh,{role:"img","aria-label":`${t}: ${n.length} in flight`,children:e.map(o=>{const r=Math.max(0,Math.min(1,o.progress??Qn[o.phase]));return a.jsx(ri,{...o.settling?{"data-role":"settling","data-settling":o.settling}:{"data-role":"glow","data-phase":o.phase,...o.held?{"data-held":""}:{}},$settling:o.settling,style:{"--dot-colour":oi(o),"--dot-progress":r,"--settle-seconds":o.settleSeconds??0}},o.id)})})}const Zh=function({ref:t,items:n,mode:o,"aria-label":r}){const s=ur(Yh(n)),l=n.some(c=>Jn.has(c.phase)),i=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${ti(s)}`;return a.jsx(Le,{text:n.map(c=>c.label).join(`
`),focusable:!0,children:a.jsx(si,{ref:t,role:"group","aria-label":`${r}: ${i}`,"data-mode":o,"data-density":"badge",$row:!1,children:a.jsxs(ai,{$phase:l?"overdue":"in-transit",children:[a.jsx(ii,{"aria-hidden":"true",$pulse:!l,children:"↑"}),a.jsxs(li,{children:[n.length,s!==null&&a.jsxs(a.Fragment,{children:[" · ",a.jsx(cr,{value:Math.max(0,s)})]})]})]})})})};function Qh({item:e,$compact:t}){const n=ur(e.etaSeconds),o=Jn.has(e.phase),r=n===null?`${e.label}, ${un[e.phase]}`:`${e.label}, ${ti(n)}`;return a.jsxs(ai,{$phase:e.phase,role:"listitem",...t?{"aria-label":r,title:r}:{},children:[a.jsx(ii,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Uh(e)}),!t&&a.jsx(gf,{children:e.label}),a.jsx(li,{children:n===null?un[e.phase]:a.jsx(cr,{value:Math.max(0,n)})})]})}const Nn=Uo`
  from { opacity: 1; }
  to { opacity: 0; }
`,Jh=w.div`
  position: relative;
  display: block;
  width: 100%;
  height: 16px;
  /* Clips the part of each dot above the strip, whatever box holds it. */
  overflow: hidden;
`,ef=14;function tf(e,t,n){const o=Math.min(ef,(n-ct)/Math.max(1,t)),r=Math.ceil(e/2)*(e%2===1?1:-1),s=n/2+r*o;return Math.max(0,Math.min(n-ct,s-ct/2))}function as({items:e,height:t}){return a.jsx(rf,{role:"group","aria-label":"Commands on the rail",style:{height:t},children:e.map((n,o)=>{const r=Math.max(0,Math.min(1,n.progress??Qn[n.phase]));return a.jsx(Le,{text:n.settling?null:`${n.label}, ${un[n.phase]}`,announce:!1,focusable:!n.settling,children:a.jsx(ri,{...n.settling?{"data-role":"settling","data-settling":n.settling,"aria-hidden":!0}:{role:"img","aria-label":`${n.label}, ${un[n.phase]}`,"data-role":"glow","data-phase":n.phase,...n.held?{"data-held":""}:{}},"data-lane":o,$settling:n.settling,$lane:!0,style:{"--dot-colour":oi(n),"--dot-progress":r,"--settle-seconds":n.settleSeconds??0,"--lane-top":`${tf(o,e.length,t)}px`}})},n.id)})})}function oi(e){return e.settling==="confirmed"?"var(--color-accent-fg)":e.held||e.settling==="failed"||Jn.has(e.phase)?xe.warn:"var(--color-accent-fg)"}const nf=e=>e==="confirmed"?N`
        transition: left var(--settle-time) var(--ease-linear);
        animation: ${Nn} ${dn}ms var(--ease-standard) var(--settle-time) forwards;
      `:e==="failed"?N`
          animation: ${Nn} ${dn}ms var(--ease-standard) forwards;
        `:null,of=Uo`
  from { top: ${-ct*(1-ni)}px; }
  to { top: var(--lane-top); }
`,rf=w.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,ri=w.span`
  position: absolute;
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  top: ${-ct*(1-ni)}px;
  /* The dot's own width is kept inside the strip, so it is whole at both ends. */
  left: calc((100% - ${ct}px) * var(--dot-progress));
  width: ${ct}px;
  height: ${ct}px;
  border-radius: var(--radius-circle);
  background: var(--dot-colour);
  box-shadow:
    0 0 6px 2px color-mix(in srgb, var(--dot-colour) 60%, transparent),
    0 0 14px 4px color-mix(in srgb, var(--dot-colour) 25%, transparent);

  ${({$lane:e,$settling:t})=>e&&N`
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
    ${({$settling:e})=>nf(e)}
    ${({$lane:e,$settling:t})=>e&&!t&&N`
        animation: ${of} var(--duration-base) var(--ease-entrance);
      `}
  }
`,sf=54,rn=5,af=3,hr=sf-8-rn,Dn=60,is={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:xe.warn,lost:xe.warn};function lf({items:e,"aria-label":t,onDismiss:n}){const[o,r]=p.useState(null),s=Dh(o),l=s.left||s.right;return a.jsxs(df,{"data-command-list":"",children:[a.jsx(uf,{ref:r,role:"list","aria-label":t,...l?{tabIndex:0,"data-scrolls":""}:{},children:e.map(i=>a.jsx(cf,{item:i,onDismiss:n},i.id))}),a.jsx(rs,{$position:"left",$visible:s.left}),a.jsx(rs,{$position:"right",$visible:s.right})]})}function cf({item:e,onDismiss:t}){const n=e.glyph??dr(e.label),o=e.settling==="confirmed"?is["awaiting-reply"]:e.held||e.settling==="failed"?xe.warn:is[e.phase],r=Math.max(0,Math.min(1,(e.progress??Qn[e.phase])*1.5)),s=Jn.has(e.phase)&&!!t&&!e.settling,l=`${e.label}, ${un[e.phase]}`;return a.jsxs(hf,{role:"listitem","aria-label":l,...e.settling?{"data-settling":e.settling,"aria-hidden":!0}:{"data-phase":e.phase,...e.held?{"data-held":""}:{}},$settling:e.settling,style:{color:o,"--settle-seconds":e.settleSeconds??0},children:[a.jsx(Le,{text:s?`Dismiss ${e.label}`:l,announce:!1,children:a.jsxs(ff,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:i=>{Za(i.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[a.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&a.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),a.jsx(pf,{children:a.jsx("span",{className:"fill",style:{"--fill-ratio":r}})})]})}const df=w.div.attrs({role:"group"})`
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
    ${hr}px + ${rn}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
  /* Holds the overflow glows over the row's edges. */
  position: relative;
`,uf=w.div`
  display: flex;
  flex-direction: row;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${af}px;
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
`,hf=w.div`
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @media (prefers-reduced-motion: no-preference) {
    ${({$settling:e})=>e==="confirmed"?N`
            animation: ${Nn} ${dn}ms var(--ease-standard)
              var(--settle-time) forwards;
            .fill {
              transition:
                height var(--settle-time) var(--ease-linear),
                width var(--settle-time) var(--ease-linear);
            }
          `:e==="failed"?N`
              animation: ${Nn} ${dn}ms var(--ease-standard) forwards;
            `:null}
  }

  @container (min-width: ${Dn}px) {
    flex-direction: column;
  }
`,ff=w.div`
  --s: ${hr}px;
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
`,pf=w.div`
  --s: ${hr}px;
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
`,si=w.div`
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
`,mf={"in-transit":N`
    color: var(--color-text-primary);
  `,"awaiting-reply":N`
    color: var(--color-text-muted);
  `,due:N`
    color: var(--color-text-muted);
  `,overdue:N`
    color: ${De.warn};
  `,lost:N`
    color: ${De.warn};
  `},ai=w.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>mf[e]}
`,ii=w.span`
  flex: 0 0 auto;
  color: ${({$inherit:e})=>e?"inherit":"var(--color-accent-fg)"};

  ${({$pulse:e})=>e&&N`
      @media (prefers-reduced-motion: no-preference) {
        animation: in-flight-list-pulse 1.6s var(--ease-emphasis) infinite;
      }
    `}

  @keyframes in-flight-list-pulse {
    50% {
      opacity: 0.35;
    }
  }
`,gf=w.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,li=w.span`
  flex: 0 0 auto;
`,vf="Awaiting first signal";function nb({expectedIn:e}){const t=e??0,n=Number.isFinite(t)&&t>0;return a.jsxs(a.Fragment,{children:[vf,n&&ia()&&a.jsx(xf,{total:t})]})}function xf({total:e}){return a.jsx(bf,{seconds:ur(e)??0})}function bf({seconds:e}){return e>0?a.jsxs(a.Fragment,{children:[" ",a.jsx(Xl,{level:"muted",children:a.jsx(cr,{value:Math.ceil(e)})})]}):null}const fr=e=>N`
  --fit-box: ${e};
`,yf=e=>N`
  --fit-mask: ${e};
`;function ci(e){return e==="go"||e==="info"?"caution":e}function zn({tone:e,size:t="md",live:n=!1,report:o,held:r,children:s,...l}){const i=ir(r),c=i===void 0?e:ci(e),d=c===void 0||c==="neutral"?void 0:c,u=o?.label??(typeof s=="string"?s:"");Go(o?{id:o.id,severity:d??"go",label:u}:null);const f=n?{role:"status","aria-live":"polite"}:{},g=i===void 0?null:Nt(i),v=Reflect.get(l,"data-tooltip")!==void 0,{anchor:m,tip:x}=mn(v?null:g);return a.jsxs(a.Fragment,{children:[a.jsxs(_f,{$severity:d,$size:t,...f,...m,...l,children:[s,g!==null&&a.jsxs(a.Fragment,{children:[a.jsx(Sf,{"aria-hidden":"true","data-held-mark":""}),a.jsxs(dt,{"data-unit-currency":"",children:[", ",g]})]})]}),x]})}const wf=N`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,kf={go:N`
    background: transparent;
    border-color: ${xe.go};
    color: ${De.go};
  `,info:N`
    background: transparent;
    border-color: ${xe.info};
    color: ${De.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${xe.info} 40%, transparent);
  `,caution:N`
    background: transparent;
    border-color: ${xe.caution};
    color: ${De.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${xe.caution} 45%, transparent);
  `,warn:N`
    background: transparent;
    border-color: ${xe.warn};
    color: ${De.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${xe.warn} 55%, transparent);
  `,nogo:N`
    background: transparent;
    border-color: ${xe.nogo};
    color: ${De.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${xe.nogo} 65%, transparent);
  `,offline:N`
    background: transparent;
    border-color: ${xe.offline};
    color: ${De.offline};
  `},$f={sm:N`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:N`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},_f=w.span`
  display: inline-block;
  position: relative;
  /* Sized by its own text, never stretched to a taller flex sibling. */
  align-self: center;
  ${fr("badge")}
  border: 1px solid;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;

  border-radius: var(--radius-pill);

  ${({$size:e})=>$f[e]}
  ${({$severity:e})=>e===void 0?wf:kf[e]}
`,Sf=w.span`
  position: absolute;
  top: 0;
  right: 0;
  width: ${fe.held.domSize};
  height: ${fe.held.domSize};
  transform: translate(45%, -45%);
  background: ${fe.held.color};
  box-shadow: 0 0 0 1px var(--color-surface-panel);
  pointer-events: none;
`,Mf={},jf={byKey:new Map,unaddressed:void 0,separate:!1};function ls(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Ef(e,t){if(e.separate!==t.separate||!ls(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!ls(o,t.byKey.get(n)))return!1;return!0}function Af(e,t,n,o){const r=new Map;e!==void 0&&r.set(Yo(e),n);for(const[s,l]of Object.entries(t??{}))l!==void 0&&r.set(ql(s),l);return{byKey:r,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function Rf(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Tf(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function Cf(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,l)=>s.depth-l.depth);let r=!1;for(const s of o)s.resettle(n)&&(r=!0);if(r)for(const s of t)s()}}}function If(e){const t=new Map,n=new Map,o=new Set,r=e?.root??Cf();let s=jf;const l=c=>{let d;for(const u of c){const f=u.position;f!==void 0&&(d===void 0||f.base>d.base)&&(d=f)}return d?.rung},i={root:r,depth:e===void 0?0:e.depth+1,hold(c,d,u){const f=t.get(c);if(u===void 0)f!==void 0&&(f.delete(d),f.size===0&&t.delete(c));else{if(Tf(f?.get(d),u))return;f===void 0?t.set(c,new Map([[d,u]])):f.set(d,u)}e===void 0?r.sweep(c):e.hold(c,d,u)},settled:c=>n.get(c),readsAsOneFigure:c=>o.has(c),setPolicy(c){if(!Ef(s,c)){s=c;for(const d of t.keys())r.sweep(d)}},resettle(c){const d=[...t.get(c)?.values()??[]],u=e?.settled(c),f=s.byKey.get(c)??s.unaddressed??Mf,g=f.format??u?.format??l(d),v=f.as??u?.as,m=f.decimals??(s.separate?Vl(d,{format:g,as:v}):u?.decimals),x=g===void 0&&v===void 0&&m===void 0?void 0:{...g!==void 0&&{format:g},...v!==void 0&&{as:v},...m!==void 0&&{decimals:m}},S=s.separate&&ha(d,{format:g,as:v,decimals:m}),E=S!==o.has(c);return S?o.add(c):o.delete(c),Rf(n.get(c),x)?E:(x===void 0?n.delete(c):n.set(c,x),!0)},attach(){r.family.add(i);for(const c of t.keys())r.sweep(c)},detach(){r.family.delete(i)}};return r.family.add(i),i}const pr={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},hn=p.createContext(pr);function Lf(){return p.useContext(hn)!==pr}function ob({children:e,of:t,pins:n,format:o,as:r,decimals:s,separate:l=!1}){const i=p.useContext(hn),[c]=p.useState(()=>If(i===pr?void 0:i));return p.useLayoutEffect(()=>(c.attach(),()=>c.detach()),[c]),p.useLayoutEffect(()=>{c.setPolicy(Af(t,n,{format:o,as:r,decimals:s},l))},[c,t,n,o,r,s,l]),a.jsx(hn.Provider,{value:c,children:e})}function Pf(e,t={}){const n=p.useContext(hn),o=p.useId(),r=ca(e),s=e?.unit,i=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||r===null?void 0:Yo(s),c=i===void 0||r===null||s===void 0||Gl(s)===void 0?void 0:Yl(r,s),d=c?.base,u=c?.rung;return p.useLayoutEffect(()=>{if(!(i===void 0||r===null||s===void 0))return n.hold(i,o,{reading:r,unit:s,...d!==void 0&&u!==void 0&&{position:{base:d,rung:u}}}),()=>n.hold(i,o,void 0)},[n,o,i,r,s,d,u]),p.useSyncExternalStore(n.root.subscribe,()=>i===void 0?void 0:n.settled(i),()=>{})}function rb(e,t={}){const n=p.useContext(hn),r=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||ca(e)===null||e===null||e===void 0?void 0:Yo(e.unit);return p.useSyncExternalStore(n.root.subscribe,()=>r===void 0?!1:n.readsAsOneFigure(r),()=>!1)}const Of=ec,Ff={sci:nh,rep:th},di=w.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,Nf=w.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?N`
          position: relative;
          ${Ha(e,t)}
        `:""}
`,Df=w.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,zf=w(dt)`
  user-select: none;
`,ui=w(dt)`
  user-select: none;
`,Hf=" ";function Bf(e,t,n,o){if(t===void 0)return null;const r=g=>Xo(g.magnitude,g.unit,{...n,format:o}).value,s=(g,v)=>r(v.minus(g)),l=ha([t.lo,t.hi],{...n,format:o});if(!Ka(e,[t.lo,t.hi],lr(r)))return null;const i=s(t.lo,t.value),c=s(t.value,t.hi),d=g=>/^[-+\u2212]?[0.,\s]*$/.test(g);if(!l&&d(i)&&d(c))return null;const u=r(t.value)===r(e),f={...n,format:o};return{oneFigure:l,plusMinus:!l&&u&&i===c?c:null,lo:r(t.lo),hi:r(t.hi),loSaid:Wr(t.lo,f),hiSaid:Wr(t.hi,f),kind:t.kind}}function Wf(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function xo({token:e,className:t,spaced:n}){const o=Kl(e,Zl(e));if(o==="")return null;const r=Ql(o),s=Jl(o),l=Ff[s?.head??o],i=Of.has(o),c=r!==void 0;return a.jsxs(a.Fragment,{children:[n&&!i?Hf:null,a.jsx(Le,{text:r,announce:!1,children:a.jsxs(di,{$attached:i,$icon:l!==void 0,className:t,"data-unit":e,children:[l?a.jsxs(a.Fragment,{children:[a.jsx(l,{size:"1em"}),s&&a.jsxs("span",{"aria-hidden":"true",children:["/",s.rest]})]}):c?a.jsx("span",{"aria-hidden":"true",children:o}):o,c&&a.jsxs(ui,{"data-unit-word":"",children:[" ",r]})]})})]})}function cs({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:r,marked:s,elsewhere:l,...i}){const c=Kn(e,{drawsReckoning:r}),d=s!=null&&!c.held&&c.shown!=null?{...c,held:!0,mark:s.kind,caption:s.caption}:c,{shown:u,held:f,mark:g,band:v}=d,m=l!=null&&l!==""&&u!=null,x=g??(m?"current":null),S=m?[d.caption,l].filter(Boolean).join("; "):d.caption,E=Pf(u,i),y=Lf(),R=o===!0&&y,j=E===void 0?i:{...E,...i},A=Xo(u?.magnitude,u?.unit,j),M=u==null||v===null||!f?null:Bf(u,Ol(v,u.unit),j,A.rung),{anchor:C,tip:k}=mn(Wf(S,M));return e!==void 0||t===void 0?a.jsxs(Nf,{className:n,$mark:x,$elsewhere:m,...Va(d),...C,children:[A.value,!R&&a.jsx(xo,{token:A.symbol,spaced:!0}),M!==null&&a.jsxs(Df,{"data-unit-band":"",children:[M.oneFigure?a.jsxs(a.Fragment,{children:[" (",a.jsx("span",{"aria-hidden":"true",children:"~"}),a.jsx(ui,{"data-unit-word":"",children:"approximately "}),M.lo]}):M.plusMinus===null?` (${M.lo} to ${M.hi}`:` ± ${M.plusMinus}`,!R&&a.jsx(xo,{token:A.symbol,spaced:!0}),M.plusMinus===null?")":null]}),x!==null&&a.jsx(Ba,{kind:x,elsewhere:m}),S!==null&&a.jsxs(zf,{"data-unit-currency":"",children:[", ",S]}),k]}):typeof t!="string"?a.jsx(di,{$attached:!1,$icon:!1,className:n,children:t}):a.jsx(xo,{token:t,className:n,spaced:!1})}const Uf={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},Xf={center:"center",start:"flex-start",baseline:"baseline"},Gf=p.forwardRef(function({justify:t="between",align:n="center",gap:o,wrap:r=!1,children:s,...l},i){return a.jsx(Yf,{ref:i,$justify:t,$align:n,$gap:o,$wrap:r,...l,children:s})}),Yf=w.div`
  display: flex;
  align-items: ${({$align:e})=>Xf[e]};
  justify-content: ${({$justify:e})=>Uf[e]};
  gap: ${({$gap:e})=>e?Ct[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function mr(e){const t=ir(e.held);return t===void 0?{label:e.label,tone:e.tone,title:e.title}:{label:e.label,tone:ci(e.tone),title:e.title??`${e.label}: ${Nt(t)}`,held:t}}const qf=.72,Vf=.76;function No({size:e,kind:t="held",figureSize:n}){return a.jsx("tspan",{dy:n===void 0?-e*.55:-(n*qf-e*Vf),fontSize:e,fill:fe[t].color,"data-held-mark":"","data-reckoning-mark":t,children:fe[t].glyph})}function sb({end:e,x1:t,y1:n,x2:o,y2:r}){return a.jsx("line",{"data-bound":e,x1:t,y1:n,x2:o,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function hi(e,t){return t===null?e:`${e}, ${t}`}function Kf(e){return e===null?{}:{"data-currency-in-name":""}}function ab({x:e,y:t,size:n,children:o}){return a.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function ds(e,t){return t?.state!=="held"?e:{...t,value:e}}function lt(e){return e.kind==="continuous"?"ribbon":"dot"}function Zf(e){return e.delivery==="acked"}function Qf(e){return e.direction==="command"?"outbound":"inbound"}function fi(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function eo(e){return`${e.direction}/${e.kind}/${e.delivery}`}const Jf={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function gr(e){return Jf[eo(e)]??null}const us=new Set;function pi(e,t){const n=eo(e);if(us.has(n))return;us.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;ia()?Ll.error(o):console.error(o)}const mi=16,Pt=mi/2,Do=5.5,ep=2,tp=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function vr(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function np(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/ep)),Math.max(2,Math.round(o)))}function op(e,t,n){if(e.length===0)return"";const o=vr(e,t,n);if(!(o>0))return`M0.00,${Pt.toFixed(2)}`;const r=np(e,t,o),s=o/n*(t/r),l=e.length-1,i=[];for(let c=0;c<=r;c++){const d=Math.min(c/r*o,o),u=Math.max(0,Math.round((c-.5)*s)),f=Math.min(l,Math.round((c+.5)*s));let g=0;for(let m=u;m<=Math.max(u,f);m++)g=Math.max(g,tp(e[l-Math.min(m,l)]));const v=(c%2===0?-1:1)*g*Do;i.push(`${d.toFixed(2)},${(Pt+v).toFixed(2)}`)}return`M${i.join(" L")}`}const rp=.25;function sp(e,t,n){const o=vr(e,t,n);if(!(o>0))return"";const r=e.length-1,s=Math.max(1,Math.min(Math.round(Math.min(e.length,t)),Math.ceil(o/rp))),l=o/n*(t/s),i=[],c=[];for(let d=0;d<s;d++){const u=Math.max(0,Math.round(d*l)),f=Math.min(r,Math.max(u,Math.round((d+1)*l)-1));let g=0,v=0;for(let y=u;y<=f;y++){const R=e[r-y];R&&(Number.isFinite(R.lo)&&(g=Math.min(g,Math.max(-1,R.lo))),Number.isFinite(R.hi)&&(v=Math.max(v,Math.min(1,R.hi))))}const m=d/s*o,x=(d+1)/s*o,S=(Pt-v*Do).toFixed(2),E=(Pt-g*Do).toFixed(2);i.push(`${m.toFixed(2)},${S}`,`${x.toFixed(2)},${S}`),c.unshift(`${x.toFixed(2)},${E}`,`${m.toFixed(2)},${E}`)}return`M${i.join(" L")} L${c.join(" L")} Z`}const gi=.05;function xr(e){return typeof e=="number"&&Number.isFinite(e)&&e>0}const hs=.02,fs=1.5,ap=.25,Hn=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],to=100,tn=30,ip=1.5,Ie=2,lp=4,tt=tn-Ie-lp,Qe=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(to-n*2),qt=e=>Ie+(1-Math.max(0,Math.min(1,e)))*tt,vi=e=>e==="inline"?ip:0;function ib(e="inline"){const t=vi(e);return(to-t*2)/3}function xi({tags:e,who:t}){return pi(e,t),a.jsx("g",{"data-rail-unrepresented":eo(e),"data-rail-entry":t})}function gt(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function ps(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(c=>c.age>=t);if(n===-1)return[];const o=e[n-1],r=e[n],s=r.age-o.age||1,l=(t-o.age)/s,i=o.value+l*(r.value-o.value);return[{age:t,value:i},...e.slice(n)]}function ms(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(d=>d.age>t),r=e.slice(0,o),s=e[o],l=r[r.length-1];if(!l)return[{age:t,value:s.value}];const i=s.age-l.age||1,c=(t-l.age)/i;return[...r,{age:t,value:l.value+c*(s.value-l.value)}]}const cp=.25;function sn(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>o.age)return null;if(t===o.age)return o.value;for(let r=1;r<e.length;r++){const s=e[r];if(t<=s.age){const l=e[r-1],i=(t-l.age)/(s.age-l.age||1);return l.value+i*(s.value-l.value)}}return o.value}function dp(e,t,n){const o=t.length>0&&t[t.length-1].age>=n-ap,r=e.map(i=>{if(sn(t,i.age)===null)return!1;let c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;const u=m=>{m!==null&&(c=Math.min(c,m),d=Math.max(d,m))},f=i.age-fs,g=i.age+fs;let v=sn(t,g);if(v===null){if(!o)return!1;v=t[t.length-1].value}u(sn(t,f)),u(v);for(const m of t)m.age>f&&m.age<g&&u(m.value);return i.value<c-hs||i.value>d+hs}),s=[];let l=0;for(let i=1;i<=r.length;i++)i<r.length&&r[i]===r[l]||(s.push({from:l,to:Math.min(i,r.length-1),off:r[l]}),l=i);return s}function up({stream:e,span:t,index:n,padX:o,oneT:r,twoT:s}){const i=`var(${Hn[n%Hn.length]})`,c=p.useId(),d=`cds-ramp-${c}-${n}`,u=`cds-fill-${c}-${n}`,f=`cds-tail-${c}-${n}`,g=gr(e.tags);if(g!=="continuous-strip")return g===null?a.jsx(xi,{tags:e.tags,who:e.id}):null;const v=Zf(e.tags),m=v?e.inTransit:ms(e.inTransit,r),x=m.map(T=>({x:Qe(T.age,t,o),y:qt(T.value)}));if(x.length===0)return null;const E=(v?[]:ms(ps(e.inTransit,r),r*(1+cp))).map(T=>({x:Qe(T.age,t,o),y:qt(T.value)})),y=E.length>1&&E[E.length-1].x>E[0].x,R=`${gt(x)} L${x[x.length-1].x.toFixed(2)},${(Ie+tt).toFixed(2)} L${x[0].x.toFixed(2)},${(Ie+tt).toFixed(2)} Z`,j=v?ps(e.echo,s):[],A=j.map(T=>({x:Qe(T.age,t,o),y:qt(T.value)})),M=j.map(T=>({x:Qe(T.age,t,o),y:qt(sn(e.inTransit,T.age)??T.value)})),C=dp(j,e.inTransit,t),k=m[m.length-1].age,W=sn(j,k),G=j.filter(T=>T.age>k),F=(W===null||G.length===0?G:[{age:k,value:W},...G]).map(T=>({x:Qe(T.age,t,o),y:qt(T.value)})),I=F.length>1?`${gt(F)} L${F[F.length-1].x.toFixed(2)},${(Ie+tt).toFixed(2)} L${F[0].x.toFixed(2)},${(Ie+tt).toFixed(2)} Z`:null;return a.jsxs("g",{"data-stream-group":e.id,"data-return-leg":v,children:[a.jsxs("defs",{children:[a.jsxs("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:x[0].x,y1:"0",x2:Math.max(x[x.length-1].x,x[0].x+1),y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:i,stopOpacity:"0.10"}),a.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0.40"})]}),a.jsxs("linearGradient",{id:u,x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0",stopColor:i,stopOpacity:"0.22"}),a.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0"})]}),y&&a.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:E[0].x,y1:"0",x2:E[E.length-1].x,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:i,stopOpacity:"0.40"}),a.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0"})]})]}),a.jsx("path",{"data-role":"area",d:R,fill:`url(#${u})`,stroke:"none"}),I&&a.jsx("path",{"data-role":"echo-area",d:I,fill:`url(#${u})`,stroke:"none"}),a.jsx("path",{"data-role":"commanded","data-stream":e.id,d:gt(x),fill:"none",stroke:`url(#${d})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),y&&a.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:gt(E),fill:"none",stroke:`url(#${f})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),C.map(T=>T.off?a.jsxs(p.Fragment,{children:[a.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:gt(A.slice(T.from,T.to+1)),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),a.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:gt(M.slice(T.from,T.to+1)),fill:"none",stroke:i,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]},T.from):T.to>T.from&&a.jsx("path",{"data-role":"echo","data-stream":e.id,d:gt(A.slice(T.from,T.to+1)),fill:"none",stroke:i,strokeWidth:"0.8",strokeLinecap:"round"},T.from))]})}function hp({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${p.useId()}`,o=e.tags,r=gr(o);if(r!=="continuous-strip")return r===null?a.jsx(xi,{tags:o,who:e.id}):null;const s=(to-t*2)/3,l=e.wave,i=l??e.amplitudes,c=e.spanSamples??i.length,d=l!==void 0?sp(l,c,s):"",u=l!==void 0?d:op(e.amplitudes,c,s);if(u===""&&!(l!==void 0&&l.length>0))return null;const f=Math.max(vr(l??e.amplitudes,c,s),1),g=`var(${fi(o)})`,v=Qf(o)==="outbound",m=v?0:2*s;return a.jsxs("g",{"data-ribbon-group":e.id,"data-ribbon-zone":m===0?"outgoing":"confirmed",transform:`translate(${t+m} ${Ie}) scale(1 ${tt/mi})`,children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:v?0:f,y1:"0",x2:v?f:0,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:g,stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:g,stopOpacity:"0.1"})]})}),l!==void 0?a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-role":"ribbon-axis",x1:"0",x2:f,y1:Pt,y2:Pt,stroke:`url(#${n})`,strokeWidth:"1",vectorEffect:"non-scaling-stroke"}),d!==""&&a.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d,fill:`url(#${n})`,stroke:"none"})]}):a.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:u,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function fp({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:r}){const s=`cds-divfade-${p.useId()}`,l=r?.state==="held",i=l?Kn(r??null).caption:null,{anchor:c,tip:d}=mn(i),u=[...e,...t].find(j=>j.oneWaySeconds!==null),f=u?.oneWaySeconds??null;if(!u||!xr(f))return null;const g=f>=gi;if(!g&&t.length===0)return null;const v=3*f,m=f,x=2*f,S=vi(o),E=Qe(m,v,S),y=Qe(x,v,S),R=e.every(j=>j.inTransit.length===0&&j.echo.length===0)&&t.every(j=>j.amplitudes.length===0);return a.jsxs(pp,{"data-oneway":f,"data-variant":o,$variant:o,...c,children:[a.jsxs(mp,{$variant:o,$quiet:R,role:"img","aria-label":hi(n,i),...Kf(i),viewBox:`0 0 ${to} ${tn}`,preserveAspectRatio:"none",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:Ie,x2:"0",y2:Ie+tt,children:[a.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(g?e:[]).map((j,A)=>a.jsx(up,{stream:j,span:v,index:A,padX:S,oneT:m,twoT:x},j.id)),t.map(j=>a.jsx(hp,{ribbon:j,padX:S},j.id)),a.jsx("line",{"data-divider":"t",x1:E,x2:E,y1:Ie,y2:Ie+tt,stroke:`url(#${s})`,strokeWidth:"0.4"}),a.jsx("line",{"data-divider":"2t",x1:y,x2:y,y1:Ie,y2:Ie+tt,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&a.jsxs("g",{"data-role":"hover-labels",children:[a.jsxs("text",{x:E,y:Ie-.4,textAnchor:"middle",fontSize:"2",children:[je(Ye("s",f),{decimals:1}),l&&a.jsx(No,{size:1.2})]}),a.jsxs("text",{x:y,y:Ie-.4,textAnchor:"middle",fontSize:"2",children:[je(Ye("s",2*f),{decimals:1}),l&&a.jsx(No,{size:1.2})]}),a.jsx("text",{x:Qe(f/2,v,S),y:tn-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),a.jsx("text",{x:Qe(1.5*f,v,S),y:tn-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),a.jsx("text",{x:Qe(2.5*f,v,S),y:tn-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&a.jsxs(a.Fragment,{children:[a.jsxs(gp,{"aria-hidden":"true",children:[a.jsxs("span",{children:["outgoing ",a.jsx("b",{children:"0"})]}),a.jsxs("span",{children:["echo"," ",a.jsx("b",{children:a.jsx(cs,{value:ds(Ye("s",f),r),decimals:1})})]}),a.jsxs("span",{children:["confirmed"," ",a.jsx("b",{children:a.jsx(cs,{value:ds(Ye("s",2*f),r),decimals:1})})]})]}),a.jsxs(vp,{"aria-hidden":"true",children:[(g?e:[]).map((j,A)=>a.jsxs("span",{children:[a.jsx("i",{style:{background:`var(${Hn[A%Hn.length]})`}}),j.label]},j.id)),t.map(j=>a.jsxs("span",{"data-role":"legend-ribbon",children:[a.jsx("i",{style:{background:`var(${fi(j.tags)})`}}),j.label]},j.id)),g&&e.length>0&&a.jsxs("span",{"data-role":"legend-deviation",children:[a.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),d]})}const pp=w.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,mp=w.svg`
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
`,gp=w.div`
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
`,vp=w.div`
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
`;function gs({handle:e,handles:t,"aria-label":n,mode:o,density:r,orientation:s,variant:l="inline"}){const i=t??(e?[e]:[]),c=i.length===1?i[0]:null,d=c?gr(c.tags):null;if(c&&d===null)return a.jsx(xp,{tags:c.tags,who:c["aria-label"]});if(c&&d!=="in-flight-row"){const v=c,m=v.effectiveDelaySeconds;return xr(m)?a.jsx(fp,{streams:v.streams??[],ribbons:v.ribbons??[],delayReading:v.delayReading,"aria-label":n??v["aria-label"],variant:l}):null}const u=ei(i.flatMap(v=>v.inFlight)),g=i.some(v=>v.dismiss)?v=>i.find(m=>m.inFlight.some(x=>x.id===v))?.dismiss?.(v):void 0;return a.jsx(Vh,{items:u,"aria-label":n,mode:o,density:r,orientation:s,variant:l,onDismiss:g})}function xp({tags:e,who:t}){return pi(e,t??"unnamed handle"),a.jsx("span",{hidden:!0,"data-rail-unrepresented":eo(e)})}function bi(e){const n=xt(e)||e.command||"The command",o=e.code===void 0?void 0:la(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function yi(e){return`${xt(e)||e.command||"The command"}: never sent. Safe to re-send.`}function wi(e){return`${xt(e)||e.command||"The command"}: ${e.warning}`}const bp={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed",warned:"Commands likely to be lost"},yp={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command",warned:"warned command"};function wp(e,t){return e.kind==="refused"?It(e.entries[t]):e.kind==="found"?Ko(e.entries[t]):e.kind==="failed"?bi(e.entries[t]):e.kind==="warned"?wi(e.entries[t]):e.kind==="undelivered"?yi(e.entries[t]):Zo(e.entries[t])}function kp(e){return e.entries.map((t,n)=>{const o=xt(t);return{id:t.id,subject:o||t.command||"",sentence:wp(e,n),dismissLabel:`Dismiss ${o||yp[e.kind]}`,tags:t.tags}})}function Mt(e){const{kind:t,onDismiss:n,live:o=!0}=e,r=e["aria-label"]??bp[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const l=kp(e).map(i=>a.jsxs(Sp,{role:o?void 0:"listitem",$tone:s,children:[lt(i.tags)==="ribbon"?a.jsx(jp,{$tone:s,children:i.subject}):a.jsx(Mp,{"aria-hidden":"true",$tone:s,children:dr(i.subject)}),a.jsx(Ep,{children:i.sentence}),n&&a.jsx(rr,{type:"button","data-dismiss":"",onClick:c=>{Za(c.currentTarget),n(i.id)},"aria-label":i.dismissLabel,children:"✕"})]},i.id));return o?a.jsx(_p,{forwardedAs:"div","aria-label":r,"data-command-list":"",additionsOnly:!0,children:l}):a.jsx($p,{role:"list","aria-label":r,"data-command-list":"",children:l})}const ki=N`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,$p=w.div`
  ${ki}
`,_p=w(bt)`
  ${ki}
  &:empty {
    margin: 0;
  }
`,Sp=w.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>xe[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${xe[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,Mp=w.span`
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
`,jp=w.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>De[e]};
`,Ep=w.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`;function Tt(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,o)=>Tt(n,t[o]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const n=[...t];return[...e].every(o=>{const r=n.findIndex(s=>Tt(o,s));return r===-1?!1:(n.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[n,o]of e)if(!t.has(n)||!Tt(o,t.get(n)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const n=e,o=t,r=new Set;for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of r)if(!Tt(n[s],o[s]))return!1;return!0}return!1}function no(e,t,n,o){const[r,s]=p.useState(o),l=p.useRef(t);l.current=t;const i=p.useRef(n);i.current=n;const c=p.useRef(r);return c.current=r,p.useEffect(()=>{if(!e)return;let d=c.current;const u=()=>{const m=l.current(e);i.current(d,m)||(d=m,s(m))};u(),e.addEventListener("scroll",u,{passive:!0});const f=new ResizeObserver(u);f.observe(e);for(const m of Array.from(e.children))f.observe(m);let g;const v=new MutationObserver(m=>{if(m.some(x=>x.type==="childList")){for(const x of Array.from(e.children))f.observe(x);u();return}g===void 0&&(g=requestAnimationFrame(()=>{g=void 0,u()}))});return v.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style"]}),()=>{e.removeEventListener("scroll",u),f.disconnect(),v.disconnect(),g!==void 0&&cancelAnimationFrame(g)}},[e]),r}function Ap(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function $i(e){return no(e,Ap,Object.is,!1)?0:void 0}function Rp({label:e,selected:t,count:n,onToggle:o}){return a.jsxs(Tp,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[a.jsx("span",{children:e}),n!==void 0&&a.jsx(Cp,{children:n})]})}const Tp=w.button`
  ${fr("chip")}
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
`,Cp=w.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function Ip({value:e,onChange:t,clearLabel:n="Clear search",className:o,...r}){const s=p.useRef(null);return a.jsxs(Lp,{className:o,children:[a.jsx(Pp,{...r,ref:s,type:"search",value:e,onChange:l=>t(l.target.value)}),e!==""&&a.jsx(Op,{children:a.jsx(rr,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:a.jsx(Da,{size:"var(--icon-size-control)"})})})]})}const Lp=w.div`
  position: relative;
  display: flex;
  align-items: center;
`,Pp=w(Th)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,Op=w.span`
  position: absolute;
  right: 0;
  display: inline-flex;
`;function lb({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=tc(e),r=[...new Set(o)],[s,l]=p.useState(()=>new Set),[i,c]=p.useState(""),d=p.useId(),u=m=>{l(x=>{const S=new Set(x);return S.has(m)?S.delete(m):S.add(m),S})},f=[...s,i].filter(m=>m.length>0).map(m=>m.toLowerCase()),g=a.jsxs(fa,{gap:"related-packed",children:[a.jsxs(Ah,{children:[a.jsx(Rh,{htmlFor:d,children:t}),a.jsx(Ip,{id:d,value:i,placeholder:n,onChange:c})]}),r.length>0&&a.jsx(Gf,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:r.map(m=>a.jsx(Rp,{label:m,selected:s.has(m),onToggle:()=>u(m)},m))})]}),v={matches:m=>{const x=m.toLowerCase();return f.every(S=>x.includes(S))},active:f.length>0};return _i.set(v,g),v}const _i=new WeakMap;function Si(e){return _i.get(e)??null}function cb({filter:e,children:t,fill:n=!1}){return a.jsxs(fa,{gap:"related-dense",fill:n,children:[Si(e),t]})}const Fp={accent:"var(--color-accent-fg)",warn:"var(--color-warn-mark)"},Np=24,Dp=96;function zp({children:e,padded:t,caption:n,footer:o,strip:r,shape:s="rounded",edgeCue:l,...i}){const c=s==="circle",d=!c||l===void 0?[]:[l].flat(),u=!c&&r!==void 0&&r!==null&&r!==!1;return a.jsxs(Hp,{$padded:t&&!u,$stacked:u,$circle:c,$cued:d.length>0,"data-shape":c?"circle":void 0,...i,children:[u?a.jsxs(a.Fragment,{children:[a.jsx(Yp,{$padded:t,children:e}),a.jsx(qp,{"data-framed-display-strip":"",children:r})]}):c&&l!==void 0?a.jsx(Bp,{children:e}):e,d.length>0&&a.jsx(Gp,{cues:d}),n!=null&&a.jsx(ji,{children:n}),o!=null&&a.jsx(Vp,{children:o})]})}const Hp=w.div`
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
`,Bp=w.div`
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
`,We=12,vs=1,Wp=3,Mi=1,Up=100*Mi/200,xs=e=>e*Math.PI/180;function Xp(e,t=Up){const n=Math.min(Math.max(e.span??90,1),359),o=Math.min(Math.max(Number.isFinite(e.grow)?e.grow:0,0),1),r=50,l=50+(vs+(Wp-vs)*o)*t,i=xs(e.angle-n/2),c=xs(e.angle+n/2),d=(f,g)=>`${(50+f*Math.cos(g)).toFixed(3)} ${(50-f*Math.sin(g)).toFixed(3)}`,u=n>180?1:0;return`M${d(r,i)}A${r} ${r} 0 ${u} 0 ${d(r,c)}L${d(l,c)}A${l} ${l} 0 ${u} 1 ${d(l,i)}Z`}function Gp({cues:e}){const{ref:t,size:n}=Zn({w:100+2*We,h:100+2*We}),o=(100+2*We)/Math.max(n.w,1),r=Mi*o;return a.jsx("div",{ref:t,"aria-hidden":"true",style:{position:"absolute",left:`${-We}%`,top:`${-We}%`,width:`${100+2*We}%`,height:`${100+2*We}%`,pointerEvents:"none"},children:a.jsx("svg",{"aria-hidden":"true","data-edge-cues":"",viewBox:`${-We} ${-We} ${100+2*We} ${100+2*We}`,style:{display:"block",width:"100%",height:"100%",overflow:"visible"},children:e.map(s=>a.jsx("path",{"data-edge-cue":"",d:Xp(s,r),fill:Fp[s.tone]},`${s.angle}-${s.tone}`))})})}const Yp=w.div`
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
`,qp=w.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${Np}px;
  max-height: ${Dp}px;
  min-width: 0;
  overflow: hidden;
`,ji=w.div`
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
`,Vp=w(ji)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,bs={width:160,height:72},Kp=2.5,Zp=420;function db({width:e,height:t,plotHasData:n}){return!n&&e>=bs.width&&t>=bs.height?"center":e>=Zp&&e>=t*Kp?"beside":"inline"}const Qp={overlay:N`
    position: absolute;
    bottom: var(--offset-graph-notice-bottom);
    left: var(--offset-graph-notice-left);
  `,center:N`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    text-align: center;
  `,inline:N`
    flex: 0 0 auto;
    align-self: flex-start;
    max-width: 100%;
    margin-top: var(--gap-sub-readout);
  `,beside:N`
    flex: 0 1 30%;
    align-self: flex-start;
    max-width: 40%;
  `};function Jp({placement:e,role:t="status",children:n,...o}){return a.jsx(e0,{$placement:e,role:t,...o,children:n})}const e0=w.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${nc.regular};
  pointer-events: none;

  ${({$placement:e})=>Qp[e]}
`,Bn=8;function Ei(e){const t=[{cols:1,rows:e}];for(let n=2;n<=e;n++){const o=Math.ceil(e/n);o<(t.at(-1)?.rows??e)&&t.push({cols:n,rows:o})}return t}function Ai(e){return e===0?"0px":`(${e}px + var(--gap-related))`}const Ri=(e,t)=>`calc(${e} * ${t} + ${(e-1)*Bn}px)`,t0=(e,t,n)=>`calc(${e} * (${t} + ${n+Bn}px) + ${(e-1)*Bn}px)`;function n0(e,t,n,o,r){const s=Ai(n),l=Ei(e).slice(1).map(({cols:c,rows:d})=>`
  @container grid-squares-width (width >= ${Ri(c,t)}) {
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
`}function o0(e,t,n,o){const r=Ei(e),s=o!==void 0;return r.slice(1).map(({cols:l,rows:i},c)=>`
  @container grid-squares (aspect-ratio >= ${(.88*l/r[c].rows).toFixed(2)}) and ((width >= ${Ri(l,t)}) or (height < ${t0(s?i:r[c].rows,o??t,n)})) {
    --cols: ${l};
    --rows: ${i};
  }`).join("")}function r0(e,t){const n=`
  & > * > * {
    --grid-square-heading: ${e===0?"0px":`calc${Ai(e)}`};
  }`;return e===0||t===void 0?n:`${n}
  @container (width < ${t}px) or (height < ${t+e+Bn}px) {
    & > * > * {
      --grid-square-heading: 0px;
    }
    & > * [data-grid-square-heading] {
      display: none;
    }
  }`}function s0(e){const t=new Set;return e.map(n=>{const o=n.inFlight.filter(r=>t.has(r.id)?!1:(t.add(r.id),!0));return o.length===n.inFlight.length?n:{...n,inFlight:o}})}function Vt(e){const t=new Set;return e.filter(n=>t.has(n.id)?!1:(t.add(n.id),!0))}function a0(e){const t=new Map;for(const n of e)for(const o of n.warnings??[]){const r=`${o.command}\0${o.label}\0${o.warning}`;t.has(r)||t.set(r,{...o,id:r,tags:n.tags})}return[...t.values()]}const ys=new Map,i0=new Set(["overdue","lost"]);function l0(e){const t=new Set,n=new Set;for(const o of e){for(const r of o.refusals??[])t.add(r.id);for(const r of o.failures??[])t.add(r.id);for(const r of o.undelivered??[])t.add(r.id);for(const r of o.founds??[])(r.outcome==="ran"?n:t).add(r.id)}return{failed:t,ran:n}}function c0(e){const t=new Map;for(const d of e)for(const u of d.inFlight)u.settling||t.set(u.id,{handleId:d.id,row:u});const{failed:n,ran:o}=l0(e),[r,s]=p.useState({last:ys,settling:ys}),l=[...r.last].filter(([d])=>!t.has(d));if(l.length>0||t.size!==r.last.size||[...t].some(([d,u])=>r.last.get(d)?.row!==u.row)){const d=l.map(([u,f])=>{const g=n.has(u)||i0.has(f.row.predictedPhase)&&!o.has(u)?"failed":"confirmed",v=g==="confirmed"?ss(f.row):0;return[u,{...f,row:{...f.row,settling:g,settleSeconds:v}}]});s({last:t,settling:d.length===0?r.settling:new Map([...r.settling,...d])})}const c=p.useRef(new Map);return p.useEffect(()=>{const d=c.current;for(const[u,f]of r.settling){if(d.has(u))continue;const g=setTimeout(()=>{d.delete(u),s(v=>{const m=new Map(v.settling);return m.delete(u),{...v,settling:m}})},(f.row.settleSeconds??0)*1e3+dn);d.set(u,g)}},[r.settling]),p.useEffect(()=>{const d=c.current;return()=>{for(const u of d.values())clearTimeout(u)}},[]),r.settling.size===0?e:e.map(d=>{const u=[...r.settling.values()].filter(f=>f.handleId===d.id&&!t.has(f.row.id)).map(f=>f.row.settling==="confirmed"&&n.has(f.row.id)?{...f.row,settling:"failed",settleSeconds:0}:f.row.settling==="failed"&&o.has(f.row.id)?{...f.row,settling:"confirmed",settleSeconds:ss(f.row)}:f.row);return u.length===0?d:{...d,inFlight:[...d.inFlight,...u]}})}function d0(e){if(lt(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return xr(t)?n>0||(t??0)>=gi&&o>0:!1}return e.inFlight.length>0}function Ti({tiny:e}={}){const t=mc(),n=qo();p.useEffect(()=>n?gc(n):void 0,[n]);const o=s0(c0(t)).filter(d0),r=a0(t),s=Vt(t.flatMap($=>($.refusals??[]).map(X=>({...X,tags:$.tags})))),l=Vt(t.flatMap($=>($.losses??[]).map(X=>({...X,tags:$.tags})))),i=Vt(t.flatMap($=>($.founds??[]).map(X=>({...X,tags:$.tags})))),c=Vt(t.flatMap($=>($.undelivered??[]).map(X=>({...X,tags:$.tags})))),d=Vt(t.flatMap($=>($.failures??[]).map(X=>({...X,tags:$.tags})))),u=s.length+c.length+d.length,f=o.length>0||u>0||l.length>0||i.length>0||r.length>0,[g,v]=p.useState(!1),[m,x]=p.useState(!1),[S,E]=p.useState(!1),y=g||m&&!S;p.useEffect(()=>{f||(v(!1),x(!1),E(!1))},[f]);const R=p.useId(),j=[...o.filter($=>lt($.tags)==="ribbon"),...o.filter($=>lt($.tags)!=="ribbon")],A=o.some($=>lt($.tags)==="ribbon"),M=j.filter($=>lt($.tags)!=="ribbon"),C=ei(o.filter($=>lt($.tags)!=="ribbon").flatMap($=>$.inFlight)),W=t.some($=>$.dismiss&&($.refusals?.length??0)>0)?$=>{for(const X of t)X.refusals?.some(re=>re.id===$)&&X.dismiss?.($)}:void 0,F=t.some($=>$.dismiss&&($.losses?.length??0)>0)?$=>t.find(X=>X.losses?.some(re=>re.id===$))?.dismiss?.($):void 0,T=t.some($=>$.dismiss&&($.undelivered?.length??0)>0)?$=>t.find(X=>X.undelivered?.some(re=>re.id===$))?.dismiss?.($):void 0,K=t.some($=>$.dismiss&&($.failures?.length??0)>0)?$=>{for(const X of t)X.failures?.some(re=>re.id===$)&&X.dismiss?.($)}:void 0,se=t.some($=>$.dismiss&&($.founds?.length??0)>0)?$=>{for(const X of t)X.founds?.some(re=>re.id===$)&&X.dismiss?.($)}:void 0;return a.jsxs(u0,{"data-panel-rail-frame":"",$tiny:e,$hasContent:f,onMouseEnter:()=>{E(!1),x(!0)},onMouseLeave:()=>x(!1),children:[t.length>0&&a.jsxs(bt,{visuallyHidden:!0,additionsOnly:!0,children:[s.map($=>a.jsxs("span",{children:[It($)," "]},`refusal:${$.id}`)),l.map($=>a.jsxs("span",{children:[Zo($)," "]},`loss:${$.id}`)),c.map($=>a.jsxs("span",{children:[yi($)," "]},`undelivered:${$.id}`)),d.map($=>a.jsxs("span",{children:[bi($)," "]},`failure:${$.id}`)),i.map($=>a.jsxs("span",{children:[Ko($)," "]},`found:${$.id}`)),r.map($=>a.jsx("span",{children:wi($)},`warning:${$.id}`))]}),f?a.jsxs(f0,{"data-panel-rail":"","data-grown":y,"data-pinned":g,"data-suppress-hover":S,onKeyDown:$=>{$.key==="Escape"&&g&&($.stopPropagation(),v(!1),E(!0))},children:[y&&C.length>0&&!A&&a.jsx(ws,{children:a.jsx(as,{items:C,height:g0})}),a.jsx(Le,{text:!y&&C.length>0?`In flight: ${C.filter($=>!$.settling).map($=>$.label).join(", ")}`:null,children:a.jsx(p0,{type:"button","aria-expanded":g,"aria-controls":R,"aria-label":"Signal-delay detail",onClick:()=>{v($=>{const X=!$;return X||E(!0),X})},children:a.jsx(y0,{"aria-hidden":"true",hidden:!y,children:"▲"})})}),a.jsxs(v0,{id:R,"data-panel-rail-detail":"",children:[j.filter($=>!y||lt($.tags)==="ribbon").map($=>a.jsx(gs,{handle:$,variant:y?"expanded":"rail","aria-label":$["aria-label"]??(y?"Delay detail":void 0)},$.id)),y&&M.length>0&&a.jsx(gs,{handles:M,variant:"expanded","aria-label":"Commands in flight"},"queue"),!y&&(u>0||l.length>0||i.length>0||r.length>0)&&a.jsxs(x0,{children:[u>0&&a.jsx(bo,{children:u===1?"1 command failed":`${u} commands failed`}),l.length>0&&a.jsx(bo,{children:l.length===1?"1 command unconfirmed":`${l.length} commands unconfirmed`}),r.length>0&&a.jsx(bo,{children:r.length===1?"1 warning":`${r.length} warnings`}),i.length>0&&a.jsx(b0,{children:i.length===1?"1 unconfirmed command answered":`${i.length} unconfirmed commands answered`})]})]}),y&&C.length>0&&A&&a.jsx(ws,{"data-over-graph":"true",children:a.jsx(as,{items:C,height:m0})})]}):null,y&&r.length>0&&a.jsx(Mt,{kind:"warned",entries:r,live:!1}),y&&s.length>0&&a.jsx(Mt,{kind:"refused",entries:s,onDismiss:W,live:!1}),y&&l.length>0&&a.jsx(Mt,{kind:"lost",entries:l,onDismiss:F,live:!1}),y&&c.length>0&&a.jsx(Mt,{kind:"undelivered",entries:c,onDismiss:T,live:!1}),y&&d.length>0&&a.jsx(Mt,{kind:"failed",entries:d,onDismiss:K,live:!1}),y&&i.length>0&&a.jsx(Mt,{kind:"found",entries:i,onDismiss:se,live:!1})]})}const u0=w.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,h0=N`
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
`,f0=w.div`
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
    ${h0}
  }
`,p0=w.button`
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

`,m0=86,g0=40,ws=w.div`
  pointer-events: none;

  &[data-over-graph="true"] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`,v0=w.div`
  display: contents;
`,bo=w.span`
  color: ${De.warn};
`,x0=w.span`
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
`,b0=w.span`
  color: var(--color-info-text);
`,y0=w.span`
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
`,Ci=p.createContext(null);function ub({badges:e,children:t}){return a.jsx(Ci.Provider,{value:e,children:t})}function w0(){return p.useContext(Ci)}function Ii({severity:e,count:t=1}){const n=t>1;return a.jsx(k0,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${cn[e]}`:cn[e],$mark:xe[e],$digits:n?String(t).length:1,children:n&&a.jsx($0,{$fill:Ro[e],$ink:ua[e],children:a.jsx(_0,{"aria-hidden":"true",children:a.jsx("text",{x:"50%",y:"50%",dy:"0.365em",textAnchor:"middle",children:t})})})})}const ks="8px",k0=w.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${ks};
  /* The count's own size, so the width below can be counted in its digits. Digits this size are six pixels tall, which centre in the eight-pixel dot on whole pixels; at seven they are five, and one engine places the baseline half a pixel above or below the middle. */
  font-size: 8px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:ks};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,$0=w.span`
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
`,_0=w.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: currentColor;
`,S0=()=>()=>{},$s=()=>oc;function Li(){const e=pa();return p.useSyncExternalStore(e?e.subscribe:S0,e?e.getBreakdown:$s,e?e.getBreakdown:$s)}const M0=()=>()=>{},_s=()=>null;function j0(){const e=pa();return p.useSyncExternalStore(e?e.subscribe:M0,e?e.getSummary:_s,e?e.getSummary:_s)}const br=N`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,E0=12;function A0(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function R0(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const r=o<e?t-E0:t;if(n[o]<=r)return o}return n.length-1}function T0(e,t,n){const[o,r]=p.useState(0),s=p.useRef(o);s.current=o;const l=[t,...n].join(`
`),i=p.useCallback(()=>{const c=e.current,d=l.split(`
`);if(!c||d.length<2){s.current!==0&&(s.current=0,r(0));return}const u=d.map(g=>A0(c,g)),f=R0(s.current,c.clientWidth,u);f!==s.current&&(s.current=f,r(f))},[e,l]);return p.useLayoutEffect(()=>{i()},[i]),p.useEffect(()=>{const c=e.current;if(!c||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>i());return d.observe(c),()=>d.disconnect()},[e,i]),{index:o,compacted:o>0}}const C0=24;function I0(e,t,n,o,r=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&r?!(t>n+C0):n>t}function Ss(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const r=e.cloneNode(!0);n!==void 0&&(r.textContent=n),Object.assign(r.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),r.setAttribute("aria-hidden","true"),o.insertBefore(r,e.nextSibling);const s=r.getBoundingClientRect().width;return o.removeChild(r),s}const L0={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function Kt(e){return Number.parseFloat(e)||0}function P0(e,t,n,o){const[r,s]=p.useState(!1),l=p.useRef(r);l.current=r;const i=p.useRef(void 0),c=p.useRef(void 0),d=p.useRef(!1),u=p.useRef(o);u.current=o;const f=p.useCallback(()=>{const v=e.current;if(!v)return;const m=getComputedStyle(v),x=v.getBoundingClientRect().width-Kt(m.paddingLeft)-Kt(m.paddingRight),S=Ss(t.current,{},u.current),E=Ss(n.current,L0),y=n.current?.closest("[data-panel-aside-expand]")?.parentElement,R=y?getComputedStyle(y):null,j=S===0||E===0?S+E:S+Kt(m.columnGap)+Kt(R?.paddingLeft??"")+Kt(R?.paddingRight??"")+E,A=l.current,M=x>0&&c.current!==void 0&&x<c.current;A&&M&&(d.current=!0);const C=I0(A,x,j,i.current,d.current);C!==A&&(d.current=C&&M),x>0&&(c.current=x),j>0&&(i.current=j),C!==l.current&&(l.current=C,s(C))},[e,t,n]),g=p.useRef({title:null,aside:null,observer:null});return p.useLayoutEffect(()=>{const v=t.current,m=n.current,x=g.current;if(x.observer===null||x.title!==v||x.aside!==m){x.observer?.disconnect(),x.title=v,x.aside=m,x.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>f());for(const S of[v,m])S&&x.observer?.observe(S,{subtree:!0,childList:!0,characterData:!0,attributes:!0});f();return}x.observer.takeRecords().length>0&&f()}),p.useEffect(()=>{const v=g.current;return()=>{v.observer?.disconnect(),v.observer=null}},[]),p.useEffect(()=>{const v=e.current;if(!v||typeof ResizeObserver>"u")return;const m=new ResizeObserver(()=>f());return m.observe(v),n.current&&m.observe(n.current),()=>m.disconnect()},[e,n,f]),r}const Pi=p.createContext("full"),O0=Pi.Provider;function hb(){return p.useContext(Pi)}const oo=p.createContext(null);function Oi({children:e}){const[t,n]=p.useState(null),o=p.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return a.jsx(oo.Provider,{value:o,children:e})}function F0({children:e}){return a.jsx(Oi,{children:e})}const Fi=`
  & > [${ga}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,Wn=w.div`
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
  ${Fi}
`,N0=w.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${br}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ni=p.forwardRef(function({compact:t,children:n,...o},r){const s=p.useRef(null),l=typeof n=="string"?n:"",i=t===void 0||l===""?D0:typeof t=="string"?[t]:t,{index:c,compacted:d}=T0(s,l,i);return a.jsx(Le,{text:d?l:void 0,children:a.jsx(N0,{...o,ref:u=>{if(s.current=u,typeof r=="function"){r(u);return}r&&(r.current=u)},"aria-label":d?l:void 0,children:c===0?n:i[c-1]})})}),D0=[],z0=w.div`
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
`,H0=w.div`
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
`,B0=w.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,W0=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,U0=w.details`
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

  ${({$collapsed:e})=>e&&N`
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
`,X0=120;function Di(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${cn[n.severity]}`:`${cn[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function zi({title:e,compactTitle:t,aside:n,toolbar:o,...r}){const s=Li(),l=p.useRef(null),i=p.useRef(null),c=p.useRef(null),d=P0(l,i,c,typeof e=="string"?e:void 0),[u,f]=p.useState(!1),[g,v]=p.useState(!1),m=p.useRef(null),x=p.useRef(null),S=p.useRef(null),E=p.useCallback(()=>{m.current!==null&&clearTimeout(m.current),m.current=null},[]);p.useEffect(()=>{d||(f(!1),v(!1))},[d]),p.useEffect(()=>E,[E]);const y=d&&(u||g);p.useEffect(()=>{if(!y)return;const M=k=>{k.key==="Escape"&&x.current?.contains(document.activeElement)&&(k.stopPropagation(),E(),v(!1),f(!1),S.current?.focus())},C=k=>{x.current?.contains(k.target)||(E(),v(!1),f(!1))};return document.addEventListener("keydown",M,!0),document.addEventListener("pointerdown",C,!0),()=>{document.removeEventListener("keydown",M,!0),document.removeEventListener("pointerdown",C,!0)}},[y,E]);const R=d?Di(s):null,{anchor:j,tip:A}=mn(y?null:R);return a.jsxs(z0,{ref:l,"data-panel-header":"",...r,children:[a.jsxs(H0,{children:[e!==void 0&&a.jsx(Ni,{ref:i,compact:t,children:e}),a.jsx(B0,{"aria-hidden":"true",children:a.jsx(zn,{children:null})})]}),n!==void 0&&a.jsx(W0,{children:a.jsxs(U0,{ref:x,"data-panel-aside-expand":"","data-hovering":d&&g?"":void 0,$collapsed:d,open:d?u:!0,onToggle:M=>{d&&(f(M.currentTarget.open),M.currentTarget.open||v(!1))},onPointerEnter:M=>{!d||M.pointerType==="touch"||(E(),v(!0))},onPointerLeave:M=>{M.pointerType!=="touch"&&(E(),m.current=setTimeout(()=>{m.current=null,v(!1)},X0))},children:[a.jsxs("summary",{ref:S,"data-tooltip":j["data-tooltip"],onPointerDown:j.onPointerDown,onPointerUp:j.onPointerUp,onFocus:j.onFocus,onBlur:j.onBlur,"aria-description":R??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(M=>`${M.count} ${cn[M.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(M=>a.jsx(Ii,{severity:M.severity,count:M.count},M.severity)),a.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),A,a.jsx(O0,{value:d?"collapsed":"full",children:a.jsx("div",{"data-panel-aside-full":"",ref:c,children:n})})]})}),o!==void 0&&a.jsx(Hi,{children:o})]})}const Hi=w.div`
  ${fr("panel-toolbar")}
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
`,Bi="44px",Wi=`scroll-padding-block: ${Bi};`,G0=w.div`
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
  ${Wi}
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
  ${({$loneFrame:e})=>e?`@container (width < ${Y0}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${Fi}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${ga}] {
           min-height: 0;
         }`:""}
`,Y0="25rem";function Ui({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...r}){const l=p.useContext(oo)?.registerScroller,[i,c]=p.useState(null),d=p.useCallback(f=>{l?.(f),c(f)},[l]),u=$i(i);return a.jsx(G0,{ref:d,tabIndex:u,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...r,children:e})}const q0="13rem",V0=w.div`
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
  & > [${rc}] {
    grid-column: 1 / -1;
  }
  /* A grid opened only to carry the augment slot, with nothing bound, takes no gap above it: a filling section reaches the body's bottom inset. */
  &:empty {
    display: none;
  }
`;function K0({children:e,hoverTitle:t}){const n=p.useRef(null),o=p.useRef(null),r=J0(n,o);return a.jsx(Z0,{ref:n,$fits:r,"data-panel-fit-body":"",children:a.jsx(Q0,{ref:o,$fits:r,$hoverTitle:t,"data-panel-fit-shifted":r&&t?"":void 0,children:e})})}const Z0=w.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,Q0=w.div`
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
`;function J0(e,t){const[n,o]=p.useState(!0);return p.useLayoutEffect(()=>{const r=e.current,s=t.current;if(!r||!s)return;const l=()=>{o(tm(em(s),r.clientHeight))};if(l(),typeof ResizeObserver>"u")return;const i=new ResizeObserver(l),c=()=>{i.observe(r),i.observe(s);for(const u of Array.from(s.children))i.observe(u)};c();const d=new MutationObserver(()=>{c(),l()});return d.observe(s,{childList:!0}),()=>{i.disconnect(),d.disconnect()}},[e,t]),n}function em(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function tm(e,t){return e<=t}const nm=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
  /* A frame owns its edge and its inset, so the glow meets the border and no caller padding can come between them. */
  ${({$framed:e,$maxHeight:t})=>e?`
    flex: 0 1 auto;
    margin-inline: 0;
    --bleed-inline: var(--gap-related);
    border: 1px solid var(--color-border-subtle);
    border-radius: var(--radius-regular);
    overflow: hidden;
    max-height: ${t??"16rem"};
  `:""}
`,om=w.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${Wi}
  ${pn}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,Un=w.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e})=>e==="top"?"top: 0;":"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: ${Bi};
  /* The audit reads the mask depth from the gradient stops, not from this height. */
  ${yf("panel-scroll-glow")}
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
`,yr=p.forwardRef(function({children:t,framed:n,maxHeight:o,...r},s){const l=p.useRef(null),[i,c]=p.useState(null),d=p.useCallback(g=>{l.current=g,c(g)},[]);p.useImperativeHandle(s,()=>l.current);const u=no(i,kr,$r,wr),f=$i(i);return a.jsxs(nm,{...r,$framed:n,$maxHeight:o,children:[a.jsx(om,{ref:d,tabIndex:f,"data-scroll-area-inner":"",children:t}),a.jsx(Un,{$position:"top",$visible:u.top}),a.jsx(Un,{$position:"bottom",$visible:u.bottom})]})});function rm(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const Ms="14rem",sm=5,am="45%",im=`min(${ic(1,sm).pxH}px, ${am})`;function js(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const lm=w.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${js(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${js(t,n)};`}

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
`;function cm({side:e="end",size:t,placement:n="auto",railBand:o,children:r,...s}){const{ref:l,size:i}=Zn({w:1,h:1}),c=rm(t??Ms),d=i.w<=1||c===void 0||i.w>=c*2,u=n==="below"?"block":(n==="beside"||i.w>=i.h)&&d?"inline":"block",f=t??(u==="inline"?Ms:im);return a.jsx(lm,{ref:l,"data-panel-split":u,$axis:u,$side:e,$size:f,$railBand:o,...s,children:r})}const dm=w(yr)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,um=w.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function Xi({children:e,...t}){return a.jsx(um,{"data-panel-sidebar":"",...t,children:a.jsx(dm,{children:e})})}const wr={top:!1,bottom:!1};function kr(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function $r(e,t){return e.top===t.top&&e.bottom===t.bottom}const hm=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function Gi({children:e,railBandAbove:t,...n}){const o=p.useContext(oo),r=o?.scroller??null;p.useEffect(()=>{},[o]);const s=no(r,kr,$r,wr);return a.jsxs(hm,{...n,children:[e,a.jsx(Un,{$position:"top",$visible:s.top&&!t}),a.jsx(Un,{$position:"bottom",$visible:s.bottom})]})}function fm(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const fb=["sections","actions"],$n=Object.freeze({});function pm({summary:e}){const t=p.useRef(e.severity),[n,o]=p.useState(0);p.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const r=Di(Li());return a.jsx(mm,{$pulse:n,children:a.jsx(Le,{text:r,focusable:!0,children:a.jsx(zn,{tone:e.severity,size:"sm",children:e.label})})})}const mm=w.span`
  display: inline-flex;
  ${({$pulse:e})=>e>0&&N`
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
`,Yi=w.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,gm=w.div`
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
`;function vm({children:e}){const t=p.useContext(oo),n=no(t?.scroller??null,kr,$r,wr);return a.jsx(gm,{"data-panel-sticky-top":"","data-panel-glow-top":n.top?"":void 0,children:e})}function xm({render:e}){const{ref:t,size:n}=Zn({w:0,h:0});return a.jsx(bm,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const bm=w.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,ym=w.div`
  flex: 1 1 100%;
  min-width: 0;
`,wm=w(zi)`
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
`,km=w.div`
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
`,$m=w(dt)`
  margin: 0;
  ${br}
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
`;function _r(e){return e.held===void 0?e.label:`${e.label}: ${Nt(e.held)}`}function _m(e){let t=null;for(const n of e){const o=mr(n),{tone:r}=o;r===void 0||r==="neutral"||(t===null||Gr(r)>Gr(t.severity))&&(t={severity:r,label:_r(o)})}return t}function Es({badges:e}){return a.jsx(a.Fragment,{children:e.map(t=>a.jsx(Sm,{entry:t},t.id))})}function Sm({entry:e}){const t=mr(e),{tone:n}=t;return Go(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:_r(t)}),null}function Mm({summary:e,announcement:t}){return a.jsxs(a.Fragment,{children:[a.jsx(Le,{text:e.label,focusable:!0,children:a.jsx(jm,{children:a.jsx(Ii,{severity:e.severity})})}),a.jsx(bt,{visuallyHidden:!0,assertive:!0,children:t})]})}const jm=w.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,Em=w.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function Am(e){return e.hoverTitle?a.jsx(Rm,{...e}):a.jsx(qi,{...e,hoverTitleId:void 0})}function Rm(e){const t=p.useId();return a.jsx(qi,{...e,hoverTitleId:t})}function qi({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:r,panelToolbar:s,panelFilter:l,panelFooter:i,panelTrend:c,inactive:d,fitToSize:u,hoverTitle:f,hoverTitleId:g,panelSidebar:v,sidebarSide:m,sidebarSize:x,sidebarPlacement:S,sections:E,sectionMinWidth:y=q0,children:R,...j}){const A=w0(),M=Ur("actions"),C=Ur("sections"),k=fm(o,A),W=k.length===0?null:k.map(q=>{const ee=mr(q),{label:$e,tone:qe,title:Pe}=ee;return a.jsx(Le,{text:Pe,focusable:!0,children:a.jsx(zn,{tone:qe,held:ee.held,report:qe===void 0||qe==="neutral"?void 0:{id:q.id,label:_r(ee)},children:$e})},q.id)}),G=l===void 0?s:a.jsxs(a.Fragment,{children:[s,a.jsx(ym,{children:Si(l)})]}),F=r??null,I=F!==null&&F!=="none"&&F!=="live"?F:null;Go(I?{id:"stream",severity:fo(I),label:Xr(I)??""}:null);const T=j0(),Y=T!==null&&k.some(q=>q.id===T.id),K=I===null?null:Xr(I),J=Y?null:T!==null?a.jsx(pm,{summary:T}):I===null||K===null?null:a.jsx(Le,{text:`Telemetry stream: ${K}`,focusable:!0,children:a.jsx(zn,{tone:fo(I),size:"sm",children:K})}),se=T?.label??K,$=se===null||se===""?"":typeof e=="string"?`${e}: ${se}`:`Status: ${se}`,X=n===void 0&&J===null&&W===null&&!M?void 0:a.jsxs(a.Fragment,{children:[n,M&&a.jsx(kn,{segment:"actions",props:$n}),W,J]}),re=T??_m(k)??(I===null||K===null?null:{severity:fo(I),label:K}),ye=re?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${re.label}`:`Status: ${re.label}`,be=n===void 0&&re===null&&!M?k.length===0?void 0:a.jsx(Es,{badges:k}):a.jsxs(a.Fragment,{children:[n,M&&a.jsx(kn,{segment:"actions",props:$n}),a.jsx(Es,{badges:k}),re!==null&&a.jsx(Mm,{summary:re,announcement:ye})]}),pe=d!==void 0,ce=pe?[]:p.Children.toArray(E),U=ce.length>0,de=R===void 0&&!C&&!u&&ce.length===1&&Tm(ce[0]),we=[];for(const q of ce){const ee=!u&&p.isValidElement(q)&&q.props.fill===!0,$e=we.at(-1);!ee&&$e!==void 0&&!$e.fill?$e.nodes.push(q):we.push({fill:ee,nodes:[q]})}U&&!we.some(q=>!q.fill)&&we.push({fill:!1,nodes:[]});const Ee=we.reduce((q,ee,$e)=>ee.fill?q:$e,-1),ue=q=>Math.max(1,q.filter(ee=>!(p.isValidElement(ee)&&ee.props.full===!0)).length),Ae=[];for(const q of we){const ee=Ae.length;if(q.fill){Ae.push(q.nodes[0]);continue}Ae.push(a.jsxs(V0,{$min:y,$columns:ue(q.nodes),children:[q.nodes,ee===Ee&&a.jsx(kn,{segment:"sections",props:$n})]},`sections-${ee}`))}const et=pe?a.jsx(sc,{reason:d}):U?a.jsxs(a.Fragment,{children:[R,Ae]}):R,ae=a.jsxs(Ui,{fitToSize:u,loneFrame:de,hoverTitle:f,children:[a.jsxs(vm,{children:[a.jsx(Ti,{tiny:f}),!f&&a.jsx(wm,{title:e,compactTitle:t,aside:X,toolbar:G})]}),u?a.jsx(K0,{hoverTitle:f,children:et}):et,!U&&!pe&&a.jsx(kn,{segment:"sections",props:$n})]});return a.jsx(F0,{children:a.jsxs(Wn,{$railTravels:!0,$hoverTitle:f,...f?{tabIndex:0,role:"group","aria-labelledby":g,"data-tiny-panel":""}:{},...j,children:[a.jsx(Gi,{railBandAbove:!0,children:v===void 0||pe?ae:a.jsxs(cm,{side:m,size:x,placement:S,railBand:!0,children:[ae,a.jsx(Xi,{children:v})]})}),!pe&&c!==void 0&&a.jsx(xm,{render:c}),!pe&&i!==void 0&&a.jsx(Yi,{children:i}),f&&a.jsxs(km,{"data-panel-hover-title":"",children:[a.jsx($m,{as:"h3",id:g,children:e}),be!==void 0&&a.jsx(Em,{children:be})]}),a.jsx(bt,{visuallyHidden:!0,children:f&&ye!==void 0?"":$})]})})}function Tm(e){if(!p.isValidElement(e)||e.type!==ma||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=p.Children.toArray(t).filter(r=>!(p.isValidElement(r)&&r.type===Jp));if(n.length!==1)return!1;const[o]=n;if(!p.isValidElement(o))return!1;if(o.type===zp)return!0;if(o.type!==p.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const pb=Object.assign(Am,{Context:Oi,Delay:Ti,Container:Wn,Header:zi,Toolbar:Hi,Footer:Yi,Title:Ni,Glow:Gi,Body:Ui,Section:ma,Sidebar:Xi}),Cm={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function mb({cols:e,minColWidth:t,fit:n=!1,gap:o="related-dense",rowGap:r,align:s="center",squares:l=!1,squareHeadingPx:i=0,squareHeadingMinPx:c,minRowHeight:d,children:u,...f}){if(l){const g=p.Children.toArray(u).length,v=t??"120px",m=a.jsx(Om,{$count:g,$min:v,$headingPx:i,$gap:Ct[o],$rowMin:d,children:a.jsx(Fm,{$count:g,$min:v,$headingPx:i,$gap:Ct[o],$rowMin:d,$headingMin:c,"data-grid-squares":"",children:u})});return a.jsx(Lm,{$rowMin:d,...f,children:d===void 0?m:a.jsx(Pm,{children:m})})}return a.jsx(Im,{$cols:e,$minColWidth:t,$fit:n,$gap:o,$rowGap:r,$align:s,...f,children:u})}const Im=w.div`
  display: grid;
  align-items: ${({$align:e})=>Cm[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${Ct[t]} ${Ct[e]}`:Ct[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:n})=>e||(t?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,Lm=w.div`
  container: grid-squares-width / inline-size;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  ${({$rowMin:e})=>e&&`
  flex-basis: 0;
  min-height: ${e};
`}
`,Pm=w(yr)`
  & > [data-scroll-area-inner] {
    display: flex;
    flex-direction: column;
  }
`,Om=w.div`
  container: grid-squares / size;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${({$count:e,$min:t,$headingPx:n,$gap:o,$rowMin:r})=>n0(e,t,n,o,r)}
`,Fm=w.div`
  --cols: 1;
  --rows: ${({$count:e})=>e};
  display: grid;
  flex: 1 1 0;
  min-height: 0;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
  gap: ${({$gap:e})=>e};
  ${({$count:e,$min:t,$headingPx:n,$rowMin:o})=>o0(e,t,n,o)}
  & > * {
    container-type: size;
    min-width: 0;
    min-height: 0;
  }
  ${({$headingPx:e,$headingMin:t})=>r0(e,t)}
`,Vi=.89,Sr=.45;function Ki({kind:e,x:t,y:n,scale:o=1,ghost:r=!1}){const s=fe[e],l=s.canvasRadius*o,i={fill:s.color,opacity:r?Sr:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const d=l*Vi;return a.jsx("rect",{x:t-d,y:n-d,width:2*d,height:2*d,...i})}const c=`${t},${n-l} ${t+l},${n+l*.8} ${t-l},${n+l*.8}`;return a.jsx("polygon",{points:c,...i})}function Zi(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function As(e,t,n,o,r,{ghost:s=!1,scale:l=1}={}){const i=fe[n],c=i.canvasRadius*l;if(t.save(),t.globalAlpha=s?Sr:1,t.fillStyle=Zi(e,i.cssVar,i.fallback),t.beginPath(),n==="held"){const d=c*Vi;t.rect(o-d,r-d,2*d,2*d)}else t.moveTo(o,r-c),t.lineTo(o+c,r+c*.8),t.lineTo(o-c,r+c*.8),t.closePath();t.fill(),t.restore()}function gb(e,t,{held:n,modelled:o},r={}){n!==void 0&&o!==void 0&&(t.save(),t.globalAlpha=Sr,t.strokeStyle=Zi(e,fe.modelled.cssVar,fe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.stroke(),t.restore()),n!==void 0&&As(e,t,"held",n.x,n.y,{...r,ghost:o!==void 0}),o!==void 0&&As(e,t,"modelled",o.x,o.y,r)}const Xn=14,Ge=4,Xe=6,Nm=6,Rs=12,Fe=6,an=8,_n=4.5,zo=4,Dm=12,zm=190,Hm=80;function nn(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function Bm(e,t,n,o){const r=o??e,s=r.x1-r.x0,l=e.y1-e.y0,i=s>=zm&&l>=Hm,c=i||o!==void 0,d=i||o?n:n.filter(M=>!M.detail),u=s-Fe*2-Ge*2-an-zo,f=o!==void 0,g=Math.floor(u/Xe),v=M=>nn(M.value??On,g-(M.currency?M.currency.length+2:0)),m=M=>{const C=M.value??On;if(f)return nn(M.label,g);if(i)return`${M.label} ${C}`;const k=Math.floor((u-C.length*Xe)/Xe)-1-(M.modelled?2:0),W=nn(M.label,Math.min(k,Dm));if(W!=="")return`${W} ${C}`;const G=Math.floor(u/Xe)-(M.modelled?2:0);return nn(C,G)},x=M=>(i||f)&&M.currency?M.currency:"",S=M=>x(M)?Nm+x(M).length*Xe+(M.modelled?Rs:0):M.modelled?Rs:0,E=i?0:an+zo,y=Math.floor((s-Fe*2-Ge*2)/Xe),R=Math.max(...d.map(M=>f?E+Math.max(m(M).length*Xe,v(M).length*Xe+S(M)):E+m(M).length*Xe+S(M)),c?Math.min(t.length,y)*Xe:0),j=c?1:0,A=(d.length*(f?2:1)+j)*Xn+Ge*2;return{full:i,named:c,headingChars:y,stacked:f,rows:d,text:m,valueText:v,currencyText:x,cardW:f?s:Math.min(R+Ge*2,s-Fe*2),cardH:A,headRows:j,fits:A<=l-Fe*2}}function Wm(e,t,n,o,r){const s=(l,i)=>l>=t&&l<=t+o&&i>=n&&i<=n+r;for(let l=1;l<e.cx.length;l++){const[i,c,d,u]=[e.cx[l-1],e.cy[l-1],e.cx[l],e.cy[l]];if(![i,c,d,u].every(Number.isFinite))continue;const f=Math.max(1,Math.ceil(Math.hypot(d-i,u-c)/Xn));for(let g=0;g<=f;g++)if(s(i+(d-i)*g/f,c+(u-c)*g/f))return!0}return!1}function Mr({x:e,plot:t,heading:n,rows:o,column:r,avoid:s=[],traces:l=[]}){const i=Bm(t,n,o,r),{rows:c,cardW:d,cardH:u,fits:f}=i,g=t.y0+Fe,v=c.flatMap(k=>k.y===void 0||k.y===null?[]:[k.y]),m=(k,W)=>v.every(G=>e+_n<k||e-_n>k+d||G+_n<W||G-_n>W+u),x=t.x1-e-Fe,S=x>=d||x>=e-t.x0,E=k=>Math.max(t.x0+Fe,Math.min(t.x1-Fe-d,k)),y=S?[e+Fe,e-Fe-d]:[e-Fe-d,e+Fe],R=[g,t.y1-Fe-u].flatMap(k=>y.map(W=>({cardX:E(W),cardY:k}))),j=(k,W)=>l.every(G=>!Wm(G,k,W,d,u)),A=(k,W)=>s.every(G=>k+d<G.x0||k>G.x1||W+u<G.y0||W>G.y1),M=R.find(k=>m(k.cardX,k.cardY)&&j(k.cardX,k.cardY)&&A(k.cardX,k.cardY))??R.find(k=>m(k.cardX,k.cardY)&&A(k.cardX,k.cardY))??R.find(k=>m(k.cardX,k.cardY)&&j(k.cardX,k.cardY))??R.find(k=>m(k.cardX,k.cardY)),C=f?r?{cardX:r.x0,cardY:r.y0+Fe}:M:void 0;return{layout:i,place:C}}function vb(e){return Mr(e).place!==void 0}function Um(e){const{layout:t,place:n}=Mr(e);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+t.cardW,y1:n.cardY+t.cardH}}function Xm({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:l}){const{layout:i,place:c}=Mr({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:l}),{full:d,named:u,headingChars:f,stacked:g,rows:v,text:m,valueText:x,currencyText:S,cardW:E,cardH:y,headRows:R}=i,j=c!==void 0,A=c?.cardX??0,M=c?.cardY??0,C=k=>k+Ge+(d?0:an+zo);return a.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[a.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),v.map(k=>k.y===void 0||k.y===null?null:a.jsx("circle",{cx:e,cy:k.y,r:3.5,fill:k.color,stroke:"var(--color-text-primary)",strokeWidth:1},k.id)),j&&a.jsxs("g",{"data-plot-crosshair-card":"",children:[a.jsx("rect",{x:A,y:M,width:E,height:y,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),u&&a.jsx("text",{x:A+Ge,y:M+Ge+10,fill:"var(--color-text-muted)",fontSize:10,children:nn(n,f)}),v.map((k,W)=>{const G=g?2:1,F=M+Ge+(W*G+R)*Xn+10,I=F+(g?Xn:0);return a.jsxs("g",{"data-plot-crosshair-row":k.id,children:[!d&&a.jsx("rect",{x:A+Ge,y:F-8,width:an,height:an,fill:k.color,"data-plot-crosshair-swatch":""}),a.jsx("text",{x:C(A),y:F,fill:k.value===null||g?"var(--color-text-faint)":k.color,fontSize:10,style:{whiteSpace:"pre"},children:m(k)}),g&&a.jsx("text",{x:C(A),y:I,fill:k.value===null?"var(--color-text-faint)":k.color,fontSize:10,style:{whiteSpace:"pre"},children:x(k)}),k.modelled&&a.jsx(Ki,{kind:"modelled",x:A+E-Ge-S(k).length*Xe-(S(k)?8:4),y:I-3}),S(k)&&a.jsx("text",{x:A+E-Ge,y:I,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:S(k)})]},k.id)})]})]})}const Ts=720,Gm=110,Ym=200,Cs=56,qm=20,Vm=112,Km=260,Zm=.4,Qm=300;function Jm({width:e,height:t,contentWidth:n,legendHeight:o=0,cardHeight:r=0}){const s=Math.max(Vm,Math.ceil(n));if((t>e||e<Ts)&&t>=Ym)return{placement:"below"};if(e<Ts||t<Gm||s>Math.min(Km,e*Zm)||e-s<Qm)return{placement:"overlay"};const i=t>=Cs+o+r;return!i&&t<Cs+qm+r?{placement:"overlay"}:{placement:"beside",columnWidth:s,legendBelow:!i}}const eg={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function tg(e){return eg[e]}const jt=4,Sn=3,Ho=6;function ng(e,t){return e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0}function og(e,t){const n=(o,r)=>o>=t.x0&&o<=t.x1&&r>=t.y0&&r<=t.y1;if(e.cx.length===1)return Number.isFinite(e.cx[0])&&n(e.cx[0],e.cy[0]);for(let o=1;o<e.cx.length;o++){const[r,s,l,i]=[e.cx[o-1],e.cy[o-1],e.cx[o],e.cy[o]];if(![r,s,l,i].every(Number.isFinite))continue;const c=Math.max(1,Math.ceil(Math.hypot(l-r,i-s)/Ho));for(let d=0;d<=c;d++)if(n(r+(l-r)*d/c,s+(i-s)*d/c))return!0}return!1}function rg({plot:e,card:t,traces:n,obstacles:o}){if(t.width<=0||t.height<=0||t.width>e.x1-e.x0-jt*2||t.height>e.y1-e.y0-jt*2)return;const r=e.x0+jt,s=e.x1-jt-t.width,l=e.y0+jt,i=e.y1-jt-t.height;return[{x:s,y:l},{x:r,y:i},{x:s,y:i},{x:r,y:l}].find(d=>{const u={x0:d.x-Sn,y0:d.y-Sn,x1:d.x+t.width+Sn,y1:d.y+t.height+Sn};return!n.some(f=>og(f,u))&&!o.some(f=>ng(u,f))})}function sg(e){const t=[],n=[];let o=!0;for(let r=e.y0;r<=e.y1+Ho;r+=Ho){const s=Math.min(r,e.y1);t.push(o?e.x0:e.x1,o?e.x1:e.x0),n.push(s,s),o=!o}return{cx:t,cy:n}}function ag(e,t){return e?.includes(t)??!1}function Is(e,t){const{reckoned:n,spans:o}=e.data;return n?.some(r=>t>=r.from&&t<=r.to)?"modelled":o?.some(r=>t>=r.from&&t<=r.to&&r.status==="recorded")?"recorded":"measured"}function ig(e){const{x:t,y:n,y2:o}=e.data;let r=!0;for(let l=0;l<t.length;l++)if(!Number.isFinite(t[l])||l>0&&t[l]<t[l-1]){r=!1;break}if(r)return e;const s=t.map((l,i)=>i).filter(l=>Number.isFinite(t[l])).sort((l,i)=>t[l]-t[i]||l-i);return{...e,data:{x:s.map(l=>t[l]),y:s.map(l=>n[l]),...o?{y2:s.map(l=>o[l])}:{}}}}function lg(e,t,n){const o=e.data.x,r=e.data.y,s=Math.min(o.length,r.length);if(s===0||t<o[0]||t>o[s-1])return null;let l=0,i=s-1;for(;l<i;){const m=l+i>>1;o[m]<t?l=m+1:i=m}const c=l,d=Math.max(0,c-1);if(o[c]!==t&&c>0&&ag(e.data.breaks,c))return null;const u=t-o[d]<=o[c]-t?d:c;if(n!==void 0&&Math.abs(o[u]-t)>n)return null;const f=o[c]-o[d];if(e.readBetween&&f>0&&o[c]!==t){const m=r[d]+(r[c]-r[d])*(t-o[d])/f;return Number.isFinite(m)?{index:u,x:t,y:m,currency:Is(e,u)}:null}const g=r[u];if(!Number.isFinite(g))return null;const v=e.data.y2?.[u];return{index:u,x:o[u],y:g,...v!==void 0&&Number.isFinite(v)?{y2:v}:{},currency:Is(e,u)}}function cg(e){const t=new Set;for(const n of e)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&t.add(o);return[...t].sort((n,o)=>n-o)}function Ls(e,t,n){if(e.length===0)return null;if(t===null)return e[e.length-1];let o=0,r=e.length-1;for(;o<r;){const l=o+r>>1;e[l]<t?o=l+1:r=l}let s=o+n;return e[o]!==t&&n>0&&(s-=1),e[Math.max(0,Math.min(e.length-1,s))]}function dg({x:e,y:t,size:n,color:o,text:r}){const s=n/2,l=`M 0 ${-s} L ${s} ${s*.8} L ${-s} ${s*.8} Z`,i=`M -0.9 ${-s*.42} H 0.9 V ${s*.2} H -0.9 Z`,c=`M -0.9 ${s*.4} H 0.9 V ${s*.64} H -0.9 Z`;return a.jsx(Le,{text:r,focusable:!0,children:a.jsxs("g",{role:"img","aria-label":r,"data-limit-crossing":"",transform:`translate(${e} ${t})`,children:[a.jsx("title",{}),a.jsx("circle",{r:12,fill:"transparent"}),a.jsx("path",{d:`${l} ${i} ${c}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),a.jsx("path",{d:l,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function Qi(e,t,n){return n==="above"?e>=t:e<=t}function ug({y:e,cx:t,cy:n,limit:o,limitY:r,bad:s,breaks:l=[],step:i=!1,minGapPx:c}){const d=(S,E,y)=>{if(!E)return{index:S,x:t[S],y:n[S],entered:!1};if(y===null)return{index:S,x:t[S],y:r,entered:!0};const R=n[S]-n[y],j=R===0?1:(r-n[y])/R;return{index:S,x:t[y]+(t[S]-t[y])*j,y:r,entered:!0}},u=new Set(l),f=[];let g=null,v=!1,m=!1,x=Number.NEGATIVE_INFINITY;for(let S=0;S<e.length;S++){if(!Number.isFinite(e[S])){g=null;continue}const E=Qi(e[S],o,s);if(E&&!m){const y=d(S,v,i||u.has(S)?null:g),R=f[f.length-1];R!==void 0&&y.x-x<c?R.spells++:f.push({...y,spells:1}),x=y.x}m=E,v=!0,g=S}return f}const hg=1;function fg(e,t,n,o,r){const s=n.to;if(s<1||s>=e.length)return!1;const l=o(e[s-1]),i=o(e[s]),c=r(t[s-1]),d=r(t[s]);return i>l?n.t.some((u,f)=>{const g=o(u),v=c+(d-c)*(g-l)/(i-l);return Math.abs(r(n.v[f])-v)>hg}):!1}function yo(e,t,n,o){const r=t-e;if(r===0){const s=(n+o)/2;return()=>s}return s=>n+(s-e)/r*(o-n)}function Bo(e,t,n=5){if(e===t)return Array.from({length:n},()=>e);const r=(t-e)/(n-1),s=10**Math.floor(Math.log10(r)),i=([1,2,2.5,5,10].find(g=>g*s>=r)??10)*s,c=Math.ceil(e/i)*i,d=[];for(let g=0;d.length<n;g++){const v=c+g*i;if(v>t+i*.01)break;d.push(v)}if(d.length>=2)return d;const u=Math.floor(e/i)*i,f=Math.ceil(t/i)*i;return f>u?[u,f]:[u,u+i]}function Ji(e,t){const n=Math.floor(e/1e3);if(t>=36e5){const s=Math.floor(n/3600),l=Math.floor(n%3600/60),i=n%60;return`${s}:${String(l).padStart(2,"0")}:${String(i).padStart(2,"0")}`}const o=Math.floor(n/60),r=n%60;return`${o}:${String(r).padStart(2,"0")}`}function Ps(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let l=!1;for(let i=0;i<e.length;i++){if(!ro(e[i],t[i])){l=!1;continue}const c=n(e[i]).toFixed(2),d=o(t[i]).toFixed(2),u=!l||r.includes(i);s.push(`${u?"M":"L"}${c},${d}`),l=!0,u&&el(e,t,i,r)&&s.push(`L${c},${d}`)}return s.join(" ")}function ro(e,t){return Number.isFinite(e)&&Number.isFinite(t)}function el(e,t,n,o){return n+1>=e.length||o.includes(n+1)||!ro(e[n+1],t[n+1])}function pg(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let l=null;for(let i=0;i<e.length;i++){if(!ro(e[i],t[i])){l=null;continue}const c=n(e[i]).toFixed(2),d=o(t[i]).toFixed(2);if(l===null||r.includes(i)){s.push(`M${c},${d}`),el(e,t,i,r)&&s.push(`L${c},${d}`),l=d;continue}s.push(`H${c}`),d!==l&&s.push(`V${d}`),l=d}return s.join(" ")}function mg(e,t,n,o,r,s=[],l=[],i=[]){if(e.length===0)return[];if(l.length===0&&i.length===0)return[{d:r(e,t,n,o,s)}];function c(x,S){const E=new Array(e.length);for(const y of x){const R=Math.min(e.length-1,y.to);for(let j=Math.max(0,y.from);j<=R;j++)E[j]=S(y)}return E}const d=c(l,x=>x.status),u=c(i,x=>x.basis),f=new Set(s),g=[];let v=0;const m=(x,S)=>{const E=x>0&&!f.has(x)?x-1:x,y=A=>A.slice(E,S+1),R=[];for(const A of s)A>E&&A<=S&&R.push(A-E);const j=r(y(e),y(t),n,o,R);j!==""&&g.push({status:d[x],basis:u[x],d:j})};for(let x=1;x<=e.length;x++)(x===e.length||d[x]!==d[v]||u[x]!==u[v])&&(m(v,x-1),v=x);return g}function tl(e,t,n,o,r){if(e.length===0)return"";const s=Math.min(e.length,t.length,n.length),l=[];for(let c=0;c<s;c++)ro(e[c],t[c])&&Number.isFinite(n[c])&&l.push(c);if(l.length===0)return"";const i=[];l.forEach((c,d)=>{const u=o(e[c]).toFixed(2),f=r(n[c]).toFixed(2);i.push(`${d===0?"M":"L"}${u},${f}`)});for(let c=l.length-1;c>=0;c--){const d=l[c],u=o(e[d]).toFixed(2),f=r(t[d]).toFixed(2);i.push(`L${u},${f}`)}return i.push("Z"),i.join(" ")}function gg(e,t,n,o){const r=[];for(const s of t){const{bandLo:l,bandHi:i,bandKind:c}=s;if(!l||!i||c===void 0)continue;const d=[];for(let f=s.from;f<=s.to&&f<e.length;f++)d.push(e[f]);const u=tl(d,l,i,n,o);u!==""&&r.push({d:u,kind:c})}return r}function Os(e,t,n,o){if(e===t){const d=(n+o)/2;return()=>d}const r=e>0?e:1e-9,s=t>r?t:r*10,l=Math.log10(r),c=Math.log10(s)-l;if(c===0){const d=(n+o)/2;return()=>d}return d=>{const u=d>0?d:r;return n+(Math.log10(u)-l)/c*(o-n)}}function vg(e,t,n=5){if(!(e>0)||!(t>0)||t<=e)return Bo(e,t,n);const o=Math.log10(e),r=Math.log10(t);if(r-o<1)return Bo(e,t,n);const l=Math.ceil(o),i=Math.floor(r),c=Math.max(1,Math.ceil((i-l+1)/n)),d=[];for(let u=l;u<=i;u+=c)d.push(10**u);return d.length>0?d:[e,t]}const wo=.86,Fs=[[0,-1.15],[1.05,.8],[-1.05,.8]],Ns=.3,ze={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:wo,triangle:Fs,outlineWidth:Ns,keylineWidth:.2,reach:Math.max(Math.hypot(wo,wo),...Fs.map(([e,t])=>Math.hypot(e,t)))+Ns/2},xg={"aria-hidden":!0};function nl(e,t,n,o){const r=ze.squareHalf;return(e==="modelled"?ze.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([l,i])=>[t+l*o,n+i*o])}const ol=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function rl(e,t,n){const o=e==="current"?0:ze.outlineWidth;return t*(o+2*n*ze.keylineWidth)}function bg({x:e,y:t,r:n,state:o="current",keyline:r=!1}){const s=o==="current"?"":nl(o,0,0,n).map(([l,i])=>`${l},${i}`).join(" ");return a.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...xg,children:[r&&ol.map(({ring:l,color:i,widths:c})=>{const d={"data-vessel-keyline":l,fill:"none",stroke:i,strokeWidth:rl(o,n,c),strokeLinejoin:"round"};return o==="current"?a.jsx("circle",{r:n,...d},l):a.jsx("polygon",{points:s,...d},l)}),o==="current"?a.jsx("circle",{r:n,fill:ze.color}):a.jsx("polygon",{points:s,fill:o==="lost"?"none":fe[o].color,stroke:o==="lost"?ze.lost.color:ze.color,strokeWidth:n*ze.outlineWidth,strokeLinejoin:"round"})]})}function Cn(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function sl(e,t,n,o,r){if(e.beginPath(),t==="current"){e.arc(n,o,r,0,Math.PI*2);return}nl(t,n,o,r).forEach(([s,l],i)=>{i===0?e.moveTo(s,l):e.lineTo(s,l)}),e.closePath()}function yg(e,t,n,o,r){e.save(),e.lineJoin="round";for(const{color:s,widths:l}of ol)sl(e,t,n,o,r),e.strokeStyle=s,e.lineWidth=rl(t,r,l),e.stroke();e.restore()}function wg(e,t,n,o,r,s=4,{keyline:l=!1}={}){l&&yg(t,n,o,r,s);const i=Cn(e,ze.cssVar,ze.fallback);if(t.save(),sl(t,n,o,r,s),n==="current")t.fillStyle=i,t.fill();else{if(n!=="lost"){const c=fe[n];t.fillStyle=Cn(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=n==="lost"?Cn(e,ze.lost.cssVar,ze.lost.fallback):i,t.lineWidth=s*ze.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function xb(e,t,n,o=4,r={}){const{held:s,modelled:l}=n;s!==void 0&&l!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=Cn(e,fe.modelled.cssVar,fe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(l.x,l.y),t.stroke(),t.restore());for(const i of["lost","held","current","modelled"]){const c=n[i];c!==void 0&&wg(e,t,i,c.x,c.y,o,r)}}const Ot=56;function al(e,t,n,o){const r=Math.max(0,Math.min(t-1,Math.floor(n))),s=Math.max(0,Math.min(t-1,Math.floor(o))),l=Math.min(t-1,r+1),i=Math.min(t-1,s+1),c=Math.max(0,Math.min(1,n-r)),d=Math.max(0,Math.min(1,o-s)),u=e[s*t+r]+(e[s*t+l]-e[s*t+r])*c,f=e[i*t+r]+(e[i*t+l]-e[i*t+r])*c;return u+(f-u)*d}const Ds=400,kg=16,$g=8,zs=.06,_g=3.3,Sg=.6,Mg=60,jg=40,Hs=[6,12],Bs=[48,96],Mn=2;function ko(e,t,n){const o=Math.max(0,Math.min(1,(n-e)/(t-e)));return o*o*(3-2*o)}function Ws(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Us(e,t){const n=t/e,o=e<=t?.07:.09,r=_g**Math.exp(-((e-t)**2)/(2*o**2*t**2));return n**5*Math.exp(-1.25*n**4)*r}function il(e,t,n){if(!(e>0)||!(t>0)||!(n>0)||!Number.isFinite(e+t+n))return[];const o=Math.sqrt(n*2*Math.PI/Ds),r=Us(o,o),s=[];for(let l=-Mn;l<=kg*Mn;l++){const i=Ds/2**(l/Mn),c=i/e,d=ko(Hs[0],Hs[1],c)*(1-ko(Bs[0],Bs[1],c))*(1-ko(t,2*t,i));if(d<=.001)continue;const u=2*Math.PI/i,f=Math.sqrt(n*u),g=Math.sqrt(Math.min(1,Us(f,o)/r)),v=(f>=o?zs:zs*g)/Math.sqrt(Mn),m=(Mg+(Ws(l,1)-.5)*2*jg)*Math.PI/180;s.push({kx:u*Math.sin(m),ky:u*Math.cos(m),k:u,amplitude:v/u,omega:f,phase:Ws(l,2)*2*Math.PI,weight:d})}return s.slice(0,$g)}function Eg(e,t,n,o){let r=0;for(const s of e)r+=s.weight*s.amplitude*Math.cos(s.kx*t+s.ky*n-s.omega*o+s.phase);return r}const In=ll(-.25,.3,.92),Ag=2.6,Rg=ll(In[0],In[1],In[2]+1),Tg=.8,Cg=3,Ig=.95,Lg=.35,Pg=235,Og=.5,Fg=.35;function ll(e,t,n){const o=Math.hypot(e,t,n);return[e/o,t/o,n/o]}function Ng(e,t,n,o){const{east0:r,north0:s,dx:l,dy:i,seconds:c,colour:d,waves:u,isSea:f}=o,[g,v,m]=In,[x,S,E]=Rg,y=u.length,R=new Float64Array(y*t),j=new Float64Array(y*t),A=new Float64Array(y*n),M=new Float64Array(y*n);for(let I=0;I<y;I++){const T=u[I];for(let Y=0;Y<t;Y++){const K=T.kx*(r+(Y+.5)*l);R[I*t+Y]=Math.cos(K),j[I*t+Y]=Math.sin(K)}for(let Y=0;Y<n;Y++){const K=T.ky*(s-(Y+.5)*i)-T.omega*c+T.phase;A[I*n+Y]=Math.cos(K),M[I*n+Y]=Math.sin(K)}}const C=new Float64Array(y),k=new Float64Array(y),W=u.map(I=>I.kx*I.weight*I.amplitude),G=u.map(I=>I.ky*I.weight*I.amplitude),F=u.map(I=>Sg*I.k*I.weight*I.amplitude);for(let I=0;I<n;I++)for(let T=0;T<t;T++){const Y=(I*t+T)*4;if(f&&!f(T,I)){e[Y+3]=0;continue}let K=0,J=0,se=1;for(let U=0;U<y;U++){const de=R[U*t+T],we=j[U*t+T],Ee=A[U*n+I],ue=M[U*n+I];C[U]=de*Ee-we*ue,k[U]=we*Ee+de*ue}for(let U=0;U<y;U++){const de=y>1?1+Tg*C[(U+Cg)%y]:1;K-=W[U]*C[U]*de,J-=G[U]*C[U]*de,se-=F[U]*k[U]*de}const $=1/Math.sqrt(K*K+J*J+se*se),X=(K*g+J*v+se*m)*$-m,re=1+Ag*X;let ye=0;const be=(K*x+J*S+se*E)*$;if(be>Ig){let U=be;for(let de=0;de<7;de++)U*=U;ye=255*Lg*U}const pe=Math.max(0,re-1)*Fg,ce=Math.min(1,re)*Og;e[Y]=d.r*ce+(255-d.r*ce)*pe+ye,e[Y+1]=d.g*ce+(255-d.g*ce)*pe+ye,e[Y+2]=d.b*ce+(255-d.b*ce)*pe+ye,e[Y+3]=Pg}}function Xs(e){const t=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function Dg(e,t){const n=Xs(t),o=Math.max(e.r,e.g,e.b,1),r=c=>({r:Math.min(255,e.r*c),g:Math.min(255,e.g*c),b:Math.min(255,e.b*c)});let s=0,l=255/o;for(let c=0;c<32;c++){const d=(s+l)/2;Xs(r(d))<n?s=d:l=d}const i=r((s+l)/2);return{r:Math.round(i.r),g:Math.round(i.g),b:Math.round(i.b)}}const zg=192,Hg=30,Bg="--color-info-mark",Wg=.42;function Ug(e,t){const n=e.view==="plan",o=t.scaleX,r=t.scaleYPrimary,s=1/(o(1)-o(0)),l=1/(r(1)-r(0)),i=E=>(E-o(0))*s,c=E=>(E-r(0))*l,d=Math.min(o(e.bounds.x0),o(e.bounds.x1)),u=Math.max(o(e.bounds.x0),o(e.bounds.x1)),f=Math.min(r(e.bounds.y0),r(e.bounds.y1)),g=Math.max(r(e.bounds.y0),r(e.bounds.y1)),v=n?d:Math.max(t.plotX0,d),m=n?u:Math.min(t.plotX1,u),x=n?f:Math.max(t.plotY0,f),S=n?g:Math.min(t.plotY1,g);return n&&(u<t.plotX0||d>t.plotX1||g<t.plotY0||f>t.plotY1)||!(m-v>=1&&S-x>=1)||!Number.isFinite(s+l)?null:{left:v,top:x,width:m-v,height:S-x,x0:i(v),x1:i(m),y0:c(S),y1:c(x)}}function Gs(e,t){if(!t)return null;e.fillStyle=t;const n=/^#([0-9a-f]{6})$/i.exec(String(e.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function Xg(e,t,n){const o=Gs(t,getComputedStyle(e).getPropertyValue(Bg).trim());if(!o)return null;const r=n?Gs(t,n):null;return r?Dg(r,o):o}function Gg(e,t,n,o,r,s){const l=Ot,i=(n.x1-n.x0)/l,c=(n.y1-n.y0)/l,d=t.sea,u=o.scaleYPrimary(t.bounds.y0)<o.scaleYPrimary(t.bounds.y1),f=d&&d.size>1&&d.heights.length>=d.size*d.size?(v,m)=>{const x=u?m:l-1-m;return al(d.heights,d.size,v/(l-1)*(d.size-1),x/(l-1)*(d.size-1))<0}:void 0,g=e.createImageData(l,l);Ng(g.data,l,l,{east0:t.origin.east+n.x0,north0:t.origin.north+n.y1,dx:i,dy:c,seconds:r,colour:s,waves:il(Math.max(i,c),n.x1-n.x0,t.gravity),isSea:f}),e.putImageData(g,0,0)}function Yg(e,t,n,o,r){const{width:s,height:l}=e.canvas,i=qg(t,n,s),c=i.length>1?(i[i.length-1]-i[0])/(i.length-1):n.x1-n.x0,d=il(c,n.x1-n.x0,t.gravity),u=(t.bearingDeg??90)*Math.PI/180,f=m=>(m-n.x0)/(n.x1-n.x0)*s,g=m=>(n.y1-m)/(n.y1-n.y0)*l;e.clearRect(0,0,s,l),e.beginPath(),i.forEach((m,x)=>{const S=Eg(d,t.origin.east+m*Math.sin(u),t.origin.north+m*Math.cos(u),o);x===0?e.moveTo(f(m),g(S)):e.lineTo(f(m),g(S))});const v=`${r.r}, ${r.g}, ${r.b}`;e.strokeStyle=`rgba(${v}, 0.9)`,e.lineWidth=1,e.stroke(),e.lineTo(f(i[i.length-1]),l),e.lineTo(f(i[0]),l),e.closePath(),e.fillStyle=`rgba(${v}, ${Wg})`,e.fill()}function qg(e,t,n){const o=(e.samples??[]).filter(r=>r>t.x0&&r<t.x1);return e.samples&&e.samples.length>1?[t.x0,...o,t.x1]:Array.from({length:n+1},(r,s)=>t.x0+s/n*(t.x1-t.x0))}function Vg({layer:e,frame:t}){const n=Ug(e,t),o=p.useRef(null),r=p.useRef(null);r.current=n?{layer:e,at:n,frame:t}:null;const s=n?e.view==="plan"?Ot:Math.max(1,Math.min(zg,Math.round(n.width))):0,l=n?e.view==="plan"?Ot:Math.max(1,Math.round(n.height*s/n.width)):0,i=e.tint;return p.useEffect(()=>{const c=o.current,d=c?.getContext("2d")??null;if(!c||!d||s===0||l===0)return;const u=Xg(c,d,i);if(!u)return;const f=()=>{const y=r.current;if(!y)return;const R=Date.now()/1e3;y.layer.view==="plan"?Gg(d,y.layer,y.at,y.frame,R,u):Yg(d,y.layer,y.at,R,u)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let v=!0;const m=typeof IntersectionObserver=="function"?new IntersectionObserver(y=>{v=y.some(R=>R.isIntersecting)}):null;m?.observe(c);let x=Number.NEGATIVE_INFINITY,S=0;const E=y=>{S=requestAnimationFrame(E),!(!v||document.hidden||y-x<1e3/Hg)&&(x=y,f())};return S=requestAnimationFrame(E),()=>{cancelAnimationFrame(S),m?.disconnect()}},[s,l,i]),n?a.jsx("g",{"aria-hidden":"true","data-plot-layer":e.id,"data-plot-layer-kind":"water",children:a.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:a.jsx("canvas",{ref:o,width:s,height:l,style:{display:"block",width:"100%",height:"100%",imageRendering:e.view==="plan"?"pixelated":"auto"}})})}):null}const Kg={faint:.45,normal:.85,bright:1},Zg=1.5,Qg=5,Jg=.9,Zt=7,Qt=6,$o=10,Ft=9,at=12,ev=6.2,_o=4,tv=9,nv=13,ov=.1,ln={paintOrder:"stroke",strokeWidth:3,strokeLinejoin:"round"},So=5,rv=.5,sv=.5;function ut(e){return xe[e.tone??"neutral"]}function fn(e){return De[e.tone??"neutral"]}function Je(e){return Kg[e.emphasis??"normal"]}function nt(e,t){return t.axis==="secondary"?e.scaleYSecondary:e.scaleYPrimary}function av(e){const t=e.axis==="secondary"?"secondary":"primary";switch(e.kind){case"series":return{xs:e.points.map(n=>n.x),ys:e.points.map(n=>n.y),axis:t};case"region":return{xs:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.x),ys:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.y),axis:t};case"rule":return e.along==="y"?{xs:[],ys:[e.value],axis:t}:{xs:[e.value],ys:[],axis:t};case"marker":case"annotation":return{xs:[e.at.x],ys:[e.at.y],axis:t};default:return{xs:[],ys:[],axis:t}}}const jr=5.8,Et=11,Ys=4;function iv(e,t){const n=t.text.length*jr,{frame:o}=t,r=t.anchorX+t.gap,s=r+n<=o.plotX1-4?"start":"end",l=s==="start"?r:t.anchorX-t.gap,i=s==="start"?l:l-n,c=i+n,d=f=>e.some(g=>i<g.x1&&c>g.x0&&f-Et<g.y1&&f+2>g.y0);let u=t.anchorY+3;for(let f=0;f<Ys&&d(u);f++)u+=Et;if(d(u)){u=t.anchorY+3;for(let f=0;f<Ys&&d(u);f++)u-=Et}return u=Math.min(Math.max(u,o.plotY0+Et),o.plotY1-Et),e.push({x0:i,x1:c,y0:u-Et,y1:u+2}),{x:l,y:u,anchor:s}}function lv(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function cv(e){if(e.length===0)return"";const t=[`M${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`];for(let n=1;n<e.length;n++)t.push(`H${e[n].x.toFixed(2)}`,`V${e[n].y.toFixed(2)}`);return t.join(" ")}function cl(e,t,n){if(e.length===0)return[];const o=e[0],r=e[e.length-1],s=[...e];if(t==="right"||t==="left"){const l=t==="right"?n.plotX1:n.plotX0;s.push({x:l,y:r.y},{x:l,y:o.y})}else{const l=t==="above"?n.plotY0:n.plotY1;s.push({x:r.x,y:l},{x:o.x,y:l})}return s}function dv(e,t){const n=[];for(const o of e){if(o.kind==="relief"||o.kind==="water"){const l=nt(t,o),{x0:i,y0:c,x1:d,y1:u}=o.bounds;n.push([{x:t.scaleX(i),y:l(c)},{x:t.scaleX(d),y:l(c)},{x:t.scaleX(d),y:l(u)},{x:t.scaleX(i),y:l(u)}]);continue}if(o.kind!=="region"||o.hatched)continue;const r=nt(t,o),s=o.boundary.map(l=>({x:t.scaleX(l.x),y:r(l.y)}));if(!(s.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...s,...o.boundaryHigh.map(l=>({x:t.scaleX(l.x),y:r(l.y)})).reverse()])}else n.push(cl(s,o.side,t))}return(o,r)=>n.some(s=>{let l=!1;for(let i=0,c=s.length-1;i<s.length;c=i++){const d=s[i],u=s[c];d.y>r!=u.y>r&&o<(u.x-d.x)*(r-d.y)/(u.y-d.y)+d.x&&(l=!l)}return l})}function uv({layer:e,frame:t}){if(e.stops.length===0)return null;const n=nt(t,e),o=e.along==="y"?t.plotY1-t.plotY0:t.plotX1-t.plotX0;if(o<=0)return null;const r=e.along==="y"?t.plotY0:t.plotX0,s=e.along==="y"?n:t.scaleX,l=e.maxOpacity??sv,i=e.tint??ut(e),c=e.blur!==void 0?Math.ceil(e.blur*3):0,d=`plot-field-${e.id}-${t.uid}`,u=`plot-field-blur-${e.id}-${t.uid}`,f=e.along==="y"?t.plotY1:t.plotX1,g=e.stops.map(v=>({offset:(s(v.at)-r)/o*100,intensity:Math.max(0,Math.min(1,v.intensity))})).sort((v,m)=>v.offset-m.offset);return a.jsxs(a.Fragment,{children:[a.jsxs("defs",{children:[a.jsx("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:t.plotX0,y1:t.plotY0,x2:e.along==="x"?f:t.plotX0,y2:e.along==="y"?f:t.plotY0,children:g.map((v,m)=>a.jsx("stop",{offset:`${v.offset.toFixed(2)}%`,stopColor:i,stopOpacity:l*v.intensity},m))}),e.blur!==void 0&&a.jsx("filter",{id:u,children:a.jsx("feGaussianBlur",{stdDeviation:e.blur})})]}),a.jsx("rect",{"data-plot-layer":e.id,"data-plot-layer-kind":"field",x:t.plotX0-c,y:t.plotY0-c,width:t.plotX1-t.plotX0+2*c,height:t.plotY1-t.plotY0+2*c,fill:`url(#${d})`,filter:e.blur!==void 0?`url(#${u})`:void 0})]})}const hv=6,At=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function fv(e){const t=Math.max(0,Math.min(1,e));for(let n=1;n<At.length;n++)if(t<=At[n][0]){const[o,r]=At[n-1],[s,l]=At[n],i=s>o?(t-o)/(s-o):0;return[Math.round(r[0]+(l[0]-r[0])*i),Math.round(r[1]+(l[1]-r[1])*i),Math.round(r[2]+(l[2]-r[2])*i)]}return At[At.length-1][1]}const pv=[150,156,160],mv=[200,80,70];function gv(e,t){if(t===3)return pv;if(t!==1&&t!==2)return e;const n=.3*e[0]+.59*e[1]+.11*e[2],o=(s,l,i)=>s+(i-s)*l,r=e.map(s=>o(o(s,.5,n),.06,235));return t===1?r:r.map((s,l)=>o(s,.3,mv[l]))}function vv(e,t){const n=2*(t-1),o=(e%n+n)%n;return o<t?o:n-o}function xv(e,t,n,o,r,s,l){const i=e[s*n+l],c=r?vv(i,o):i,[d,u,f]=gv(fv(c/(o-1)),t[s*n+l]),g=l>0?e[s*n+l-1]:i,v=s>0?e[(s-1)*n+l]:i,m=g!==i||v!==i?.5:1;return`rgb(${Math.round(d*m)}, ${Math.round(u*m)}, ${Math.round(f*m)})`}function bv(e,t){const{bounds:n}=e,o=nt(t,e),r=t.scaleX(n.x0),s=t.scaleX(n.x1),l=o(n.y0),i=o(n.y1),c=Math.abs(s-r)/Ot,d=Math.abs(i-l)/Ot;return!(c>0)||!(d>0)?null:{left:Math.min(r,s),top:Math.min(l,i),cellW:c,cellH:d,flipRows:l<i}}function yv(e,t){const{size:n,values:o}=e;if(!t||n<2||o.length<n*n)return null;const{left:r,top:s,cellW:l,cellH:i,flipRows:c}=t;let d=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;for(let j=0;j<n*n;j++){const A=o[j];if(!Number.isFinite(A))return null;A<d&&(d=A),A>u&&(u=A)}const f=u-d,g=e.bandMetres!=null&&e.bandMetres>0?e.bandMetres:null,v=e.veil,m=Math.max(2,e.bands??hv),x=Ot,S=new Int16Array(x*x),E=new Uint8Array(x*x),y=v!=null&&v.length>=n*n;for(let j=0;j<x;j++)for(let A=0;A<x;A++){const M=A/(x-1)*(n-1),C=j/(x-1)*(n-1);y&&(E[j*x+A]=v[Math.round(C)*n+Math.round(M)]??0);const k=al(o,n,M,C);if(g!=null){S[j*x+A]=Math.floor(k/g);continue}const W=f>0?(k-d)/f:.5;S[j*x+A]=Math.max(0,Math.min(m-1,Math.floor(W*m)))}const R=[];for(let j=0;j<x;j++){const A=c?j:x-1-j;let M=0,C="";for(let k=0;k<=x;k++){const W=k<x?xv(S,E,x,m,g!=null,j,k):"";if(k===0){C=W;continue}W===C&&k<x||(R.push(a.jsx("rect",{x:r+M*l,y:s+A*i,width:(k-M)*l+.5,height:i+.5,fill:C},`${j}-${M}`)),M=k,C=W)}}return R}function wv({layer:e,frame:t}){const n=bv(e,t),{values:o,size:r,veil:s,bandMetres:l,bands:i}=e,{left:c,top:d,cellW:u,cellH:f,flipRows:g}=n??{},v=p.useMemo(()=>yv(e,n),[o,r,s,l,i,c,d,u,f,g]);return v?a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:Je(e),"aria-hidden":"true",children:v}):null}function kv({layer:e,frame:t}){const n=p.useId(),o=nt(t,e),r=d=>({x:t.scaleX(d.x),y:o(d.y)}),s=e.boundary.map(r);if(s.length<2)return null;const l=e.side==="between"?[...s,...(e.boundaryHigh??[]).map(r).reverse()]:cl(s,e.side,t);if(e.side==="between"&&!e.boundaryHigh)return null;const i=e.side==="right"?t.plotX1-4:e.side==="left"?t.plotX0+11:s[s.length-1].x,c=(t.plotY0+t.plotY1)/2;return a.jsxs(a.Fragment,{children:[e.hatched&&a.jsx("defs",{children:a.jsx("pattern",{id:n,width:So,height:So,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:a.jsx("line",{x1:0,y1:0,x2:0,y2:So,stroke:ut(e),strokeWidth:1,strokeOpacity:e.opacity??rv})})}),a.jsx("polygon",{"data-plot-layer":e.id,"data-plot-layer-kind":"region","data-hatched":e.hatched?"":void 0,points:l.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:e.hatched?`url(#${n})`:ut(e),fillOpacity:e.hatched?void 0:e.opacity??ov}),t.labels&&e.label&&a.jsx("text",{x:i,y:c,transform:`rotate(-90 ${i} ${c})`,textAnchor:"middle",fontSize:tv,letterSpacing:"0.14em",fill:"var(--color-text-muted)",stroke:"var(--color-surface-raised)",...ln,children:e.label})]})}function $v({layer:e,frame:t}){const n=nt(t,e),o=e.points.map(s=>({x:t.scaleX(s.x),y:n(s.y)}));if(o.length===0)return null;const r=Zg*(e.weight??1);if(e.style==="scatter"){const s=e.radius===void 0?r:Math.abs(t.scaleX(e.radius)-t.scaleX(0));return a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",fill:ut(e),opacity:Je(e),children:o.map((l,i)=>a.jsx("circle",{cx:l.x,cy:l.y,r:s},i))})}return a.jsx("path",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",d:e.style==="step"?cv(o):lv(o),fill:"none",stroke:ut(e),strokeOpacity:Je(e),strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:e.dashed?"5 3.5":void 0})}function _v({layer:e,frame:t}){const n=nt(t,e),o=e.dashed??!0,r=ut(e),s=e.along==="y",l=s?n(e.value):t.scaleX(e.value);return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"rule",x1:s?t.plotX0:l,x2:s?t.plotX1:l,y1:s?l:t.plotY0,y2:s?l:t.plotY1,stroke:r,strokeOpacity:Je(e),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),t.labels&&e.label&&a.jsx("text",{x:s?t.plotX1-4:l+3,y:s?l-3:t.plotY0+10,textAnchor:s?"end":"start",fill:fn(e),fontSize:Ft,children:e.label})]})}function Sv({layer:e,frame:t,placed:n}){const o=nt(t,e),r=t.scaleX(e.at.x),s=o(e.at.y),l=e.across??"x",i=ut(e),c=t.labels&&e.label?iv(n,{anchorX:r,anchorY:s,gap:Zt+3,text:e.label,frame:t}):null;return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"annotation",x1:l==="x"?r-Zt:r,x2:l==="x"?r+Zt:r,y1:l==="x"?s:s-Zt,y2:l==="x"?s:s+Zt,stroke:i,strokeOpacity:Je(e),strokeWidth:1.75,strokeLinecap:"round"}),c&&e.label&&a.jsx("text",{x:c.x,y:c.y,textAnchor:c.anchor,fontSize:Ft,letterSpacing:"0.05em",fill:fn(e),fillOpacity:Je(e),children:e.label})]})}function Mv({layer:e,frame:t}){const n=nt(t,e),o=t.scaleX(e.at.x),r=n(e.at.y)+(e.offsetPx??0),s=Qg*(e.scale??1),l=ut(e),i=e.shape??"dot",c={"data-plot-layer":e.id,"data-plot-layer-kind":"marker",opacity:Je(e)},d=i==="none"?null:i==="vessel"?a.jsx("g",{...c,children:a.jsx(bg,{state:e.markState??"current",x:o,y:r,r:s*Jg,keyline:!0})}):i==="dot"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:l,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):i==="ring"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:"none",stroke:l,strokeWidth:1.5}):i==="cross"?a.jsx("path",{...c,d:`M${o-s},${r} L${o+s},${r} M${o},${r-s} L${o},${r+s}`,stroke:l,strokeWidth:1.5,strokeLinecap:"round"}):i==="chevron-up"||i==="chevron-down"?a.jsx("polyline",{...c,points:i==="chevron-up"?`${o-s},${r+s*.5} ${o},${r-s*.5} ${o+s},${r+s*.5}`:`${o-s},${r-s*.5} ${o},${r+s*.5} ${o+s},${r-s*.5}`,fill:"none",stroke:l,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null,u=(e.label?.length??0)*jr/2+3,f=i==="none"?Math.min(Math.max(o,t.plotX0+u),t.plotX1-u):o+s+3,g=i==="none"?Math.min(Math.max(r+3,t.plotY0+Ft+3),t.plotY1-4):r+3;return a.jsxs(a.Fragment,{children:[d,t.labels&&e.label&&a.jsx("text",{x:f,y:g,textAnchor:i==="none"?"middle":void 0,fontSize:Ft,fill:fn(e),fillOpacity:Je(e),stroke:"var(--color-surface-raised)",...ln,children:e.label})]})}function jv({layer:e,frame:t,row:n,edges:o}){const r=e.caption?2:1;if(e.anchor==="left-edge"||e.anchor==="right-edge"){const m=e.anchor==="left-edge"?t.plotX0+Qt+n*at:t.plotX1-Qt-n*at,x=t.plotY1-34;return a.jsx("text",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",x:m,y:x,transform:`rotate(-90 ${m} ${x})`,fontSize:Ft,letterSpacing:"0.14em",fill:fn(e),fillOpacity:Je(e),stroke:"var(--color-surface-raised)",...ln,children:e.text})}const s=e.anchor.startsWith("top"),l=e.anchor.endsWith("right"),i=m=>Qt+(m?nv:0),c=l?t.plotX1-i(o.right):t.plotX0+i(o.left),d=n*(r*at+2),u=s?t.plotY0+Qt+$o+d:t.plotY1-Qt-d,f=u-at,g=Math.max(e.text.length*ev,(e.caption?.length??0)*jr)+2*_o,v=(s?u:u-(e.caption?at:0))-$o-1;return a.jsxs("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",textAnchor:l?"end":"start",children:[a.jsx("rect",{x:l?c-g+_o:c-_o,y:v,width:g,height:r*at+1,rx:3,fill:"var(--color-surface-raised)",fillOpacity:.8}),e.caption&&a.jsx("text",{x:c,y:s?u:f,fontSize:Ft,letterSpacing:"0.05em",fill:"var(--color-text-faint)",stroke:"var(--color-surface-raised)",...ln,children:e.caption}),a.jsx("text",{x:c,y:e.caption&&s?u+at:u,fontSize:$o,fontWeight:700,fill:fn(e),fillOpacity:Je(e),stroke:"var(--color-surface-raised)",...ln,children:e.text})]})}const qs={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},Ev={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function Mo({layers:e,frame:t,pass:n}){const o=e.map((i,c)=>({layer:i,index:c})).filter(({layer:i})=>Ev[i.kind]===n).sort((i,c)=>qs[i.layer.kind]-qs[c.layer.kind]||(i.layer.z??0)-(c.layer.z??0)||i.index-c.index),r=new Map,s=[],l={left:e.some(i=>i.kind==="caption"&&i.anchor==="left-edge"||i.kind==="region"&&i.side==="left"&&!!i.label),right:e.some(i=>i.kind==="caption"&&i.anchor==="right-edge"||i.kind==="region"&&i.side==="right"&&!!i.label)};return a.jsx(a.Fragment,{children:o.map(({layer:i,index:c})=>{const d=`${i.id}-${c}`;switch(i.kind){case"relief":return a.jsx(wv,{layer:i,frame:t},d);case"water":return a.jsx(Vg,{layer:i,frame:t},d);case"field":return a.jsx(uv,{layer:i,frame:t},d);case"region":return a.jsx(kv,{layer:i,frame:t},d);case"series":return a.jsx($v,{layer:i,frame:t},d);case"rule":return a.jsx(_v,{layer:i,frame:t},d);case"annotation":return a.jsx(Sv,{layer:i,frame:t,placed:s},d);case"marker":return a.jsx(Mv,{layer:i,frame:t},d);case"caption":{const u=r.get(i.anchor)??0;return r.set(i.anchor,u+1),a.jsx(jv,{layer:i,frame:t,row:u,edges:l},d)}default:return null}})})}function Av(e){return e.map(t=>t.description).filter(t=>typeof t=="string"&&t.length>0)}const Vs=11,jn=3,En=4,Ks=(e,t)=>e.x0<t.x1&&t.x0<e.x1&&e.y0<t.y1&&t.y0<e.y1;function Rv(e,t,n,o,r){let s=0,l=1;const i=n-e,c=o-t,d=[[-i,e-r.x0],[i,r.x1-e],[-c,t-r.y0],[c,r.y1-t]];for(const[u,f]of d){if(u===0&&f<0)return!1;if(u!==0){const g=f/u;u<0?s=Math.max(s,g):l=Math.min(l,g)}}return s<=l}function Tv(e,t){for(let n=1;n<e.cx.length;n++){const o=[e.cx[n-1],e.cy[n-1],e.cx[n],e.cy[n]];if(o.every(Number.isFinite)&&Rv(o[0],o[1],o[2],o[3],t))return!0}return!1}function Cv({labels:e,plot:t,obstacles:n,traces:o}){const r=[],s=new Map;for(const l of e){const i={y0:l.lineY-jn-Vs,y1:l.lineY-jn},c={y0:l.lineY+jn,y1:l.lineY+jn+Vs},d={x0:t.x1-En-l.width,x1:t.x1-En},u={x0:t.x0+En,x1:t.x0+En+l.width},f=[{...d,...i,anchor:"end"},{...d,...c,anchor:"end"},{...u,...i,anchor:"start"},{...u,...c,anchor:"start"}];let g=null;for(const v of f){if(!(v.x0>=t.x0&&v.x1<=t.x1&&v.y0>=t.y0&&v.y1<=t.y1)||r.some(S=>Ks(v,S)))continue;const x=2*n.filter(S=>Ks(v,S)).length+o.filter(S=>Tv(S,v)).length;(g===null||x<g.cost)&&(g={spot:v,cost:x})}if(g===null){s.set(l.id,null);continue}r.push(g.spot),s.set(l.id,{x:g.spot.anchor==="end"?g.spot.x1:g.spot.x0,y:g.spot.y1-2,anchor:g.spot.anchor})}return s}function Iv(e,t,n,o="linear"){const r=n&&Fv(t,n)?0:t;if(n&&o==="log")return je(Ye(e,r),{decimals:Wo(e,r).decimals});if(!n)return je(Ye(e,r),{decimals:0});const s=Lv(e,n)?e:void 0;return je(Ye(e,r),{decimals:Nv(e,r,n,s),...s?{format:s}:{}})}function Lv(e,t){const n=t.map(o=>je(Ye(e,o),{decimals:Ln}));return n.some((o,r)=>r>0&&o===n[r-1])}function Pv(e,t){const n=new Set(t.map(o=>Iv(e,o,t).replace(/^[\d.,\s-]+/,"")));return n.size===1?[...n][0]:void 0}function Ov(e,t,n){const o=Pv(t,n);if(o===void 0)return e;const r=ac({magnitude:0,unit:t},{format:t}).symbol,s=` (${r})`;return r!==""&&e.endsWith(s)?`${e.slice(0,-s.length)} (${o})`:e}function Fv(e,t){const n=t.length>1?Math.abs(t[1]-t[0]):0;return n>0&&Math.abs(e)<n*1e-6}const Ln=3;function dl(e){return{figure:Number.parseFloat(e.replace(/[^\d.-]/g,"")),unit:e.replace(/[\d.,\s-]/g,"")}}function Wo(e,t,n){const o=s=>dl(je(Ye(e,t),{decimals:s,...n?{format:n}:{}})),r=o(Ln);for(let s=0;s<Ln;s++)if(o(s).figure===r.figure)return{decimals:s,unit:r.unit};return{decimals:Ln,unit:r.unit}}function Nv(e,t,n,o){const r=Wo(e,t,o);let s=r.decimals;for(const l of n){const i=Wo(e,l,o);i.unit===r.unit&&(s=Math.max(s,i.decimals))}return s}function bb(e){const t=dl(je(e,{decimals:3})),n=Math.abs(t.figure),o=Number.isFinite(n)&&n>0?Math.max(0,2-Math.floor(Math.log10(n))):0;return je(e,{decimals:o})}function jo(e,t,n){for(let o=n;o<6;o++){const r=e.map(s=>(s/t).toFixed(o));if(r.every((s,l)=>l===0||s!==r[l-1]))return o}return 6}const Dv=4,An=2,zv=2.5;function Hv(e,t){if(e.length===0)return!1;const n=e[e.length-1]-t;return n===0?!0:e.length===1?!1:Math.sign(e[0]-t)!==Math.sign(n)}function Bv(e,t){return e==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:t?e==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const Wv=(e,t)=>Ji(e-t[0],t[1]-t[0]),yb=(e,t)=>Ji((e-t[0])*1e3,(t[1]-t[0])*1e3),Eo={top:10,bottom:28,left:50};function ul(e,t,n){const o=(s,l,i)=>Math.max(s,Math.min(i,l)),r=o(30,Math.round(e*.18),Eo.left);return{top:Eo.top,right:n?r:o(14,Math.round(e*.07),20),bottom:t<150?20:Eo.bottom,left:r}}const Zs=e=>e.length*6.5+6,Uv=4,Xv=.4,Gv=26,vt=14,Yv=160,Ue=16,Rn=4,qv=6,Jt=(e,t)=>Math.min(e.length*6+8,t);function Vv(e,t){const n=[];let o=0,r=0;for(const s of e)r>0&&r+s>t&&(o+=1,r=0),n.push({row:o,x:r}),r+=s+qv;return{rows:e.length===0?0:o+1,positions:n}}const Qs=4,Kv=.03;function Ao(e,t){const n=Math.max(0,Math.floor(t/6));if(e.length<=n)return e;const o=e.lastIndexOf(" (");if(o>0&&e.length-o+4<=n){const r=n-(e.length-o)-3;return`${e.slice(0,r)}...${e.slice(o)}`}return n<4?"":`${e.slice(0,n-3)}...`}function Js(e,t){const n=e.split(/(?=M)/).filter(r=>r.length>0),o=[];for(const r of n){const s=[...r.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)];if(s.length<2)continue;const l=s[0],i=s[s.length-1];o.push(`${r.trim()} L${i[1]},${t} L${l[1]},${t} Z`)}return o.length>0?o.join(" "):null}function Zv(e,t,n,o,r=1){const s=[],l=Gv*Math.max(.5,Math.min(2,r));for(let i=e+l/2;i<t;i+=l)for(let c=n+l/2;c<o;c+=l)s.push({key:`sg-${Math.round(i)}-${Math.round(c)}`,x:i,y:c});return s}const Qv=120,Jv=90,ex=70,tx=35,nx=2,ox=12,ea=8,rx=2,it=14,Gn=6,Yn=12,sx=16,ax=12,ix=200,ta=10,lx=.2,na=.6,oa="5 3",cx=.15,dx=.45,ux="the value is inside the shaded region";function hx(e){const t=[...e.data.y];(e.type??"line")==="band"&&e.data.y2&&t.push(...e.data.y2);for(const n of e.data.reckoned??[])n.bandLo&&n.bandHi&&t.push(...n.bandLo,...n.bandHi);for(const n of e.data.bridges??[])t.push(...n.v);return t.filter(Number.isFinite)}const fx=1e-5,px=1e-9;function mx({series:e,thresholds:t,yTickFormat:n}){const o=s=>s*Gn,r=[];for(const s of e)r.push(o(s.label.length)+8);for(const s of t){if(s.kind==="marker"&&!s.label)continue;const l=s.label??n(s.value);r.push(o(l.length)+Yn+8)}return Math.max(0,...r)+ox}function gx({width:e,height:t,hasSecondary:n,series:o,thresholds:r}){const s=r.filter(u=>u.label);if(o.length===0||s.length===0)return!1;const l=Math.max(...o.map(u=>u.label.length*6+8)),i=Math.max(...s.map(u=>(u.label?.length??0)*Gn+Yn)),c=ul(e,t,n),d=e-c.left-c.right-vt-sx;return l+i+ax>d}function wb({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:r=Wv,yTickFormat:s=vx,yScalePrimary:l="linear",yScaleSecondary:i="linear",thresholds:c,legend:d="overlay",hideXAxis:u=!1,density:f="chart",spatial:g=!1,gridScale:v=1,layers:m,"aria-label":x,crosshair:S=!1,xKind:E="time",xReadFormat:y,xAxisLabel:R,yAxisLabel:j,ySecondaryAxisLabel:A,yTickUnit:M,card:C,cardForms:k=1,plotNotice:W,width:G,height:F}){const I=p.useId(),T=f==="compact",Y=T?"none":d,K=g,J=K||T,se=S&&!J&&e.some(h=>h.data.x.length>0),[$,X]=p.useState(null),[re,ye]=p.useState(!1),[be,pe]=p.useState(""),[ce,U]=p.useState(null),[de,we]=p.useState(null),Ee=de?.w===G&&de.h===F?de.form:0,[ue,Ae]=p.useState(null),et=C!=null,ae=ue?.form===Ee?ue:null;p.useLayoutEffect(()=>{if(!ce){Ae(null);return}const h=()=>Ae(_=>{const P={w:ce.offsetWidth,h:ce.offsetHeight,form:Ee};return _?.w===P.w&&_?.h===P.h&&_?.form===P.form?_:P});h();const b=new ResizeObserver(h);return b.observe(ce),()=>b.disconnect()},[ce,Ee]);const q=G,ee=F,$e=e.filter(h=>h.axis==="primary"&&h.data.x.length>0),qe=e.filter(h=>h.axis==="secondary"&&h.data.x.length>0),Pe=qe.length>0,ht=Y!=="none"&&e.length>0||(c??[]).some(h=>h.label),_e=mx({series:e,thresholds:c??[],yTickFormat:s}),Ve=et&&ae!==null&&ae.w+ea<=Math.max(112,Math.ceil(_e)),te=J||!ht?{placement:"overlay"}:Jm({width:q,height:ee,contentWidth:_e,legendHeight:Y==="none"?0:e.length*Ue+6,cardHeight:Ve&&ae!==null?ae.h:0}),ke=te.placement==="overlay"&&!J&&Y!=="none"&&ee>=ix&&gx({width:q,height:ee,hasSecondary:Pe,series:e,thresholds:c??[]})?{placement:"below"}:te,ie=Y!=="none"&&(ke.placement==="below"||ke.placement==="beside"&&ke.legendBelow),Oe=ie?Vv(e.map(h=>Jt(h.label,q-2*Rn)),q-2*Rn):{rows:0,positions:[]},He=Oe.rows===0?0:Oe.rows*Ue+4,Se=q>=Yv,Be=!J&&!u&&!!R,yt=!J&&Se&&!!j,me=!J&&Se&&Pe&&!!A,ve=K?0:1,zt=J?{top:ve,right:ve,bottom:ve,left:ve}:ul(q,ee,Pe),Ke={...zt,bottom:zt.bottom+(Be?vt:0)+He},Z=Ke.top,ne=ee-Ke.bottom,Ze=ne-Z,vn=p.useMemo(()=>{const h={primary:[],secondary:[]};for(const b of m??[]){const _=av(b);h[_.axis].push(..._.ys)}return h},[m]),wt=p.useMemo(()=>ra($e,n,l,vn.primary),[$e,n,l,vn]),kt=p.useMemo(()=>ra(qe,o,i,vn.secondary),[qe,o,i,vn]),Re=l==="log"?Os(wt[0],wt[1],ne,Z):yo(wt[0],wt[1],ne,Z),Te=i==="log"?Os(kt[0],kt[1],ne,Z):yo(kt[0],kt[1],ne,Z),Er=Math.max(2,Math.min(7,Math.round(Ze/tx))),so=(h,b,_,P)=>{const O=Math.min(h,b),H=Math.max(h,b),L=(H-O)*1e-6||1e-6,B=oe=>oe>=O-L&&oe<=H+L,Q=oe=>P==="log"?vg(O,H,oe):Bo(O,H,oe);for(let oe=_;oe<=64;oe*=2){const Ne=Q(oe).filter(B);if(Ne.length<2)continue;if(Ne.length<=_)return Ne;const Yt=(Ne.length-1)/(_-1),yn=Array.from({length:_},(Ex,Cl)=>Ne[Math.round(Cl*Yt)]);return Array.from(new Set(yn))}return[O,H]},Ht=so(wt[0],wt[1],Er,l==="log"?"log":"linear"),xn=Pe?so(kt[0],kt[1],Er,i==="log"?"log":"linear"):[],Ar=(h,b)=>h.length===0?b:Math.max(b,Math.min(Math.round(q*Xv),Math.max(...h.map(_=>Zs(s(_,h))))+Uv)),ao=J?Ke:{left:Ar(Ht,Ke.left)+(yt?vt:0),right:(Pe?Ar(xn,Ke.right):Ke.right)+(me?vt:0)},V=ao.left,io=ke.placement==="beside"?ke.columnWidth:0,ge=q-ao.right-io,Ce=ge-V,Rr=q-io-vt/2,ft=Ce>=Qv&&Ze>=Jv,le=io>0?{x0:ge+(Pe?ao.right:0)+ea,y0:Z,x1:q-rx,y1:ne}:void 0,Tr=Y==="none"||le||ie?[]:e.map((h,b)=>({x0:V+3,y0:Z+6+b*Ue,x1:V+3+Jt(h.label,Ce-6),y1:Z+6+b*Ue+13})),he=yo(t[0],t[1],V,ge),pl=Math.max(2,Math.min(8,Math.round(Ce/ex))),Bt=so(t[0],t[1],pl,"linear"),ml=p.useMemo(()=>{const h=[],b=Bt.length-1;if(b<0)return h;const _=Zs,P=6,O=L=>{const B=Bt[L],Q=r(B,t,Bt),oe=he(B),Ne=_(Q),Yt=L===0?"start":L===b?"end":"middle",yn=Yt==="start"?oe:Yt==="end"?oe-Ne:oe-Ne/2;return{x:oe,text:Q,anchor:Yt,leftEdge:yn,rightEdge:yn+Ne}},H=O(0);if(h.push({x:H.x,text:H.text,anchor:H.anchor}),b>=1){const L=O(b);if(L.leftEdge>=H.rightEdge+P){let B=H.rightEdge;for(let Q=1;Q<b;Q++){const oe=O(Q);oe.leftEdge>=B+P&&oe.rightEdge<=L.leftEdge-P&&(h.push({x:oe.x,text:oe.text,anchor:oe.anchor}),B=oe.rightEdge)}h.push({x:L.x,text:L.text,anchor:L.anchor})}}return h},[Bt,t,he,r]),Cr=(h,b)=>{const _=new Set,P=h.length;if(P===0||(_.add(0),P===1))return _;const O=16,H=b(h[0]),L=b(h[P-1]);if(Math.abs(L-H)>=O){let B=H;for(let Q=1;Q<P-1;Q++){const oe=b(h[Q]);Math.abs(oe-B)>=O&&Math.abs(L-oe)>=O&&(_.add(Q),B=oe)}_.add(P-1)}return _},gl=Cr(Ht,Re),vl=Cr(xn,Te),ot=p.useMemo(()=>e.filter(h=>h.data.x.length>0).map(h=>{const b=h.axis==="primary"?Re:Te,_=h.type??"line";if(_==="band")return h.data.y2?{id:h.id,kind:"band",color:h.color,opacity:h.fillOpacity??lx,d:tl(h.data.x,h.data.y,h.data.y2,he,b)}:{id:h.id,kind:"noop"};if(_==="scatter"){const L=h.data.x.map((B,Q)=>({cx:he(B),cy:b(h.data.y[Q])}));return{id:h.id,kind:"scatter",color:h.color,points:L}}const P=_==="step"?pg:Ps,O=(h.data.bridges??[]).filter(L=>fg(h.data.x,h.data.y,L,he,b)),H=[...new Set([...h.data.breaks??[],...O.map(L=>L.to)])].sort((L,B)=>L-B);return{id:h.id,kind:"stroked",color:h.color,dashed:h.dashed??!1,uncertainty:gg(h.data.x,h.data.reckoned??[],he,b),segments:mg(h.data.x,h.data.y,he,b,P,H,h.data.spans,h.data.reckoned),modelled:O.map(L=>({basis:L.basis,d:Ps([h.data.x[L.to-1],...L.t,h.data.x[L.to]],[h.data.y[L.to-1],...L.v,h.data.y[L.to]],he,b)})),tail:h.data.x.length>0&&(h.data.reckoned??[]).some(L=>L.to>=h.data.x.length-1)?{cx:he(h.data.x[h.data.x.length-1]),cy:b(h.data.y[h.data.y.length-1])}:null,observed:[...new Set(O.flatMap(L=>[L.to-1,L.to]))].map(L=>({cx:he(h.data.x[L]),cy:b(h.data.y[L])}))}}),[e,he,Re,Te]),pt=p.useMemo(()=>c?c.map(h=>{const b=h.axis??"primary",_=e.filter(O=>O.axis===b&&O.type!=="band"&&!O.dashed),P=h.kind==="limit"?_.some(O=>{const H=O.data.y.filter(L=>Number.isFinite(L));return H.length>0&&Qi(H[H.length-1],h.value,h.bad)}):h.kind==="target"&&_.some(O=>Hv(O.data.y,h.value));return{id:h.id,label:h.label,spokenLabel:h.spokenLabel,value:h.value,kind:h.kind,passed:P,currency:Kn(h.reading,{drawsReckoning:!0}),tone:Bv(h.kind,P),dashed:h.kind!=="marker",y:b==="primary"?Re(h.value):Te(h.value)}}):[],[c,e,Re,Te]),Wt=p.useMemo(()=>{const h=(b,_,P)=>Math.max(b,Math.min(P,_));return(c??[]).flatMap(b=>{if(b.kind!=="limit"||!Number.isFinite(b.value))return[];const _=b.axis??"primary",P=_==="primary"?Re:Te,O=P(b.value),H=b.bad==="above"?-1:1,L=b.label||`the limit at ${s(b.value)}`;return e.filter(B=>B.axis===_&&B.data.x.length>0&&(B.type??"line")!=="band"&&!B.dashed).flatMap(B=>ug({y:B.data.y,cx:B.data.x.map(he),cy:B.data.y.map(P),limit:b.value,limitY:O,bad:b.bad,breaks:B.data.breaks,step:B.type==="step"||B.type==="scatter",minGapPx:it}).slice(ft?0:-1).map(Q=>{const oe=s(B.data.y[Q.index]),Ne=r(B.data.x[Q.index],t);return{key:`${b.id}-${B.id}-${Q.index}`,color:B.color,x:h(V+it/2+1,Q.x-ta*(Q.entered?1:-1),ge-it/2-1),y:h(Z+it/2+1,Q.y+H*ta,ne-it/2-1),text:Q.entered?Q.spells>1?`${B.label} went past ${L} ${Q.spells} times from ${Ne}, first reading ${oe}`:`${B.label} went past ${L} at ${Ne}, reading ${oe}`:`${B.label} was already past ${L} when this window began at ${Ne}, reading ${oe}`}}))})},[c,e,he,Re,Te,r,s,t,V,ge,Z,ne,ft]),Me=(()=>{if(!et||ae===null||J)return;if(le&&Ve){const O={x0:le.x0,y0:ne-ae.h,x1:le.x0+ae.w,y1:ne},H=Z+(Y==="none"||ie?0:e.length*Ue+6);return O.x1<=le.x1&&O.y0>=H?O:void 0}const h=it/2,b=[...e.filter(O=>(O.type??"line")!=="band").flatMap(O=>{const H=O.axis==="primary"?Re:Te,L=O.data.x.map(he),B=O.data.y.map(H);return O.type==="scatter"?L.map((Q,oe)=>({cx:[Q],cy:[B[oe]]})):[{cx:L,cy:B}]}),...pt.map(O=>({cx:[V,ge],cy:[O.y,O.y]}))],_=[...Wt.map(O=>({x0:O.x-h,y0:O.y-h,x1:O.x+h,y1:O.y+h})),...Y==="none"||le||ie?[]:e.map((O,H)=>({x0:V+3,y0:Z+6+H*16,x1:V+3+Math.min(O.label.length*6+8,Ce-6),y1:Z+6+H*16+13}))],P=rg({plot:{x0:V,y0:Z,x1:ge,y1:ne},card:{width:ae.w,height:ae.h},traces:b,obstacles:_});return P?{x0:P.x,y0:P.y,x1:P.x+ae.w,y1:P.y+ae.h}:void 0})(),$t=p.useMemo(()=>{if(!ft)return new Map;const h=it/2;return Cv({labels:pt.filter(b=>b.label).map(b=>({id:b.id,width:(b.label?.length??0)*Gn+(b.currency.held?Yn:0),lineY:b.y})),plot:le??{x0:V,y0:Z,x1:ge,y1:ne},obstacles:[...Me?[Me]:[],...Wt.map(b=>({x0:b.x-h,y0:b.y-h,x1:b.x+h,y1:b.y+h})),...Y==="none"||ie?[]:e.map((b,_)=>({x0:le?le.x0:V+3,y0:Z+6+_*Ue,x1:(le?le.x0:V+3)+Jt(b.label,le?le.x1-le.x0:Ce-6),y1:Z+6+_*Ue+13}))],traces:(le?[]:e).filter(b=>(b.type??"line")!=="band").map(b=>({cx:b.data.x.map(he),cy:b.data.y.map(b.axis==="primary"?Re:Te)}))})},[ft,Me,le,pt,Wt,Y,ie,e,he,Re,Te,V,ge,Z,ne,Ce]),xl=(()=>{const h=Z+6;if(Y==="none"||ie||e.length===0)return h;const b=le?le.x0:V+3,_=b+Math.max(...e.map(H=>Jt(H.label,le?le.x1-le.x0:Ce-6))),P=pt.flatMap(H=>{const L=$t.get(H.id);if(!H.label||!L)return[];const B=H.label.length*Gn+(H.currency.held?Yn:0),Q=L.anchor==="end"?L.x-B:L.x;return[{x0:Q,y0:L.y-9,x1:Q+B,y1:L.y+2}]});Me&&P.push(Me);const O=e.length*Ue-3;for(let H=h;H+O<=ne;H+=Ue){const L={x0:b,y0:H,x1:_,y1:H+O};if(!P.some(B=>L.x0<B.x1&&B.x0<L.x1&&L.y0<B.y1&&B.y0<L.y1))return H}return h})(),bl=e.flatMap(h=>{const b=ot.find(L=>L.id===h.id),_=b?.kind==="stroked"?b.modelled.map(L=>L.basis):[],P=h.data.reckoned??[];if(P.length===0&&_.length===0)return[];const H=[...new Set([...P.map(L=>L.basis),..._])].map(L=>`${h.label}: part of this trace is reckoned, ${tg(L)}, not measured`);return P.some(L=>L.bandLo&&L.bandHi)&&H.push(`${h.label}: ${ux}`),H}),yl=pt.flatMap(h=>{const b=h.spokenLabel??h.label??h.id,_=[];return h.passed&&h.kind==="limit"&&_.push(`${b}: limit passed`),h.passed&&h.kind==="target"&&_.push(`${b}: target reached`),h.currency.held&&_.push(hi(b,h.currency.caption)),h.label&&!$t.get(h.id)&&_.length===0&&_.push(h.spokenLabel??h.label),_}),lo=[...bl,...yl],wl=[x??"Telemetry line chart",...Av(m??[]),...lo].join("; "),co=p.useMemo(()=>e.filter(h=>h.data.x.length>0).map(h=>E==="value"?ig(h):h),[e,E]),uo=p.useMemo(()=>se?cg(co):[],[se,co]),Ut=Math.min(t[0],t[1]),Xt=Math.max(t[0],t[1]),kl=E==="value"?(Xt-Ut)*Kv:void 0;function Ir(h){const b=co.map(_=>{const P=lg(_,h,kl),O=_.format??s,H=_.axis==="primary"?Re:Te,L=(_.type??"line")==="band";return P===null?{id:_.id,label:_.label,color:_.color,value:null}:{id:_.id,label:_.label,color:_.color,value:L&&P.y2!==void 0?`${O(P.y)} to ${O(P.y2)}`:O(P.y),currency:P.currency==="measured"?void 0:P.currency,modelled:P.currency==="modelled",y:L?void 0:H(P.y)}});if(ft)for(const _ of pt)_.kind!=="marker"&&b.push({id:`threshold-${_.id}`,label:_.kind,color:_.tone.label,value:_.label??s(_.value),detail:!0,currency:_.currency.held?_.currency.mark==="modelled"?"modelled":"held":void 0,modelled:_.currency.held&&_.currency.mark==="modelled"});return{heading:(y??r)(h,t),rows:b}}function Lr(h){const{heading:b,rows:_}=Ir(h);return[b,..._.map(P=>`${P.label} ${P.value??"no sample"}${P.currency?`, ${P.currency}`:""}`)].join("; ")}const Pr=e.filter(h=>(h.type??"line")!=="band").map(h=>({cx:h.data.x.map(he),cy:h.data.y.map(h.axis==="primary"?Re:Te)})),Or=Me?[...Pr,sg(Me)]:Pr,Fr=et&&!J&&ae!==null&&ae.w>0&&ae.h>0&&!Me&&Ee<k-1;p.useLayoutEffect(()=>{Fr&&we({w:G,h:F,form:Ee+1})},[Fr,G,F,Ee]);const $l=h=>{let b=h,_=Number.POSITIVE_INFINITY;for(const P of uo)P<Ut||P>Xt||Math.abs(P-h)<_&&(_=Math.abs(P-h),b=P);return b},mt=se&&$!==null&&$.at>=Ut&&$.at<=Xt?$l($.at):null,_t=mt===null?null:Ir(mt),Gt=_t!==null&&mt!==null?Um({x:he(mt),plot:{x0:V,y0:Z,x1:ge,y1:ne},heading:_t.heading,rows:_t.rows,avoid:Tr,traces:Or}):void 0,_l=Me!==void 0&&Gt!==void 0&&Gt.x0<Me.x1&&Gt.x1>Me.x0&&Gt.y0<Me.y1&&Gt.y1>Me.y0;function Sl(h){const b=h.currentTarget.getBoundingClientRect(),_=h.clientX-b.left;return _<V||_>ge?null:t[0]+(_-V)/(ge-V)*(t[1]-t[0])}function Ml(h){const b=Sl(h);if(b===null){X(_=>_?.source==="pointer"?null:_);return}X({at:b,source:"pointer"})}function jl(h){const b=uo.filter(H=>H>=Ut&&H<=Xt),_={ArrowLeft:h.shiftKey?-10:-1,ArrowRight:h.shiftKey?10:1,Home:-b.length,End:b.length};if(h.key==="Escape"){if($===null)return;h.preventDefault(),X(null),pe("");return}const P=_[h.key];if(P===void 0)return;h.preventDefault();const O=Ls(b,mt,P);O!==null&&(X({at:O,source:"keys"}),pe(Lr(O)))}function El(h){try{ye(h.currentTarget.matches(":focus-visible"))}catch{ye(!0)}if($!==null)return;const b=Ls(uo.filter(_=>_>=Ut&&_<=Xt),null,0);b!==null&&(X({at:b,source:"keys"}),pe(Lr(b)))}function Al(){ye(!1),X(h=>h?.source==="keys"?null:h),pe("")}const Rl=se?{tabIndex:0,onPointerMove:Ml,onPointerLeave:()=>X(h=>h?.source==="pointer"?null:h),onKeyDown:jl,onFocus:El,onBlur:Al}:{},bn={scaleX:he,scaleYPrimary:Re,scaleYSecondary:Te,plotX0:V,plotX1:ge,plotY0:Z,plotY1:ne,uid:I,labels:ft},Tl=K&&m?dv(m,bn):()=>!1,ho=`plot-layer-clip-${I}`,Nr=`plot-trace-clip-${I}`;if(Ce<=0||Ze<=0)return a.jsx("svg",{width:Math.max(0,q),height:Math.max(0,ee),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:a.jsx("title",{children:"Chart too small to render"})});const Dr=a.jsxs("svg",{width:q,height:ee,role:Wt.length>0||se?"group":"img","aria-label":wl,"aria-describedby":se?`${I}-crosshair-hint`:void 0,...Rl,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...se?{touchAction:"pan-y",outline:re?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[a.jsxs("defs",{children:[a.jsx("clipPath",{id:ho,children:a.jsx("rect",{x:V,y:Z,width:Ce,height:Ze})}),a.jsx("clipPath",{id:Nr,children:a.jsx("rect",{x:V-An,y:Z-An,width:Ce+2*An,height:Ze+2*An})})]}),lo.length>0&&a.jsx("title",{children:lo.join("; ")}),a.jsx("rect",{x:V,y:Z,width:Ce,height:Ze,fill:"var(--color-surface-panel)"}),m&&m.length>0&&a.jsx("g",{clipPath:`url(#${ho})`,children:a.jsx(Mo,{layers:m,frame:bn,pass:"background"})}),!J&&Ht.map((h,b)=>{const _=Re(h);return a.jsxs(wn.Fragment,{children:[a.jsx("line",{x1:V,y1:_,x2:ge,y2:_,stroke:"var(--color-border-subtle)",strokeWidth:1}),gl.has(b)&&a.jsx("text",{x:V-4,y:_,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(h,Ht)})]},`py-${b}`)}),!J&&xn.map((h,b)=>vl.has(b)?a.jsx("text",{x:ge+4,y:Te(h),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(h,xn)},`sy-${b}`):null),!u&&!J&&Bt.map((h,b)=>a.jsx("line",{x1:he(h),y1:Z,x2:he(h),y2:ne,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${b}`)),!u&&!J&&ml.map((h,b)=>a.jsx("text",{x:h.x,y:ne+14,textAnchor:h.anchor,fill:"var(--color-text-faint)",fontSize:11,children:h.text},`xl-${b}`)),Be&&a.jsx("text",{x:(V+ge)/2,y:ee-He-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:Ao(R,Ce)}),yt&&a.jsx("text",{x:vt/2,y:(Z+ne)/2,transform:`rotate(-90 ${vt/2} ${(Z+ne)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:Ao(M&&l!=="log"?Ov(j,M,Ht):j,Ze)}),me&&a.jsx("text",{x:Rr,y:(Z+ne)/2,transform:`rotate(90 ${Rr} ${(Z+ne)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:Ao(A,Ze)}),K&&Zv(V,ge,Z,ne,v).filter(h=>!Tl(h.x,h.y)).map(h=>a.jsx("circle",{cx:h.x,cy:h.y,r:1,fill:"var(--color-text-faint)",opacity:.35},h.key)),!J&&a.jsxs(a.Fragment,{children:[a.jsx("line",{x1:V,y1:Z,x2:V,y2:ne,stroke:"var(--color-border-strong)",strokeWidth:1}),a.jsx("line",{x1:V,y1:ne,x2:ge,y2:ne,stroke:"var(--color-border-strong)",strokeWidth:1}),Pe&&a.jsx("line",{x1:ge,y1:Z,x2:ge,y2:ne,stroke:"var(--color-border-strong)",strokeWidth:1})]}),a.jsxs("g",{clipPath:`url(#${Nr})`,children:[ot.filter(h=>h.kind==="band").map(h=>a.jsx("path",{d:h.d,fill:h.color,fillOpacity:h.opacity,stroke:"none"},h.id)),ot.filter(h=>h.kind==="stroked").flatMap(h=>h.uncertainty.map((b,_)=>a.jsx("path",{d:b.d,"data-band-kind":b.kind,fill:h.color,fillOpacity:cx,stroke:b.kind==="bound"?h.color:"none",strokeOpacity:b.kind==="bound"?dx:void 0,strokeWidth:b.kind==="bound"?1:void 0},`${h.id}-band-${_}`))),ot.filter(h=>h.kind==="stroked").flatMap(h=>h.segments.map((b,_)=>a.jsxs(wn.Fragment,{children:[T&&b.basis===void 0&&Js(b.d,ne)&&a.jsx("path",{d:Js(b.d,ne)??void 0,fill:h.color,fillOpacity:.12,stroke:"none"}),a.jsx("path",{d:b.d,"data-stream-status":b.status,"data-reckoning-basis":b.basis,stroke:h.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:b.basis!==void 0?na:void 0,strokeDasharray:b.basis!==void 0?oa:h.dashed?"4 3":void 0})]},`${h.id}-${_}`))),ot.filter(h=>h.kind==="stroked").flatMap(h=>h.modelled.map((b,_)=>a.jsx("path",{d:b.d,"data-reckoning-basis":b.basis,stroke:h.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:na,strokeDasharray:oa},`${h.id}-modelled-${_}`))),ot.map(h=>h.kind==="stroked"&&h.tail!==null?a.jsx(Ki,{kind:"modelled",x:h.tail.cx,y:h.tail.cy},`${h.id}-tail`):null),ot.filter(h=>h.kind==="stroked").flatMap(h=>h.observed.map((b,_)=>a.jsx("circle",{cx:b.cx,cy:b.cy,r:zv,fill:h.color,"data-observed-sample":""},`${h.id}-observed-${_}`))),ot.filter(h=>h.kind==="scatter").flatMap(h=>h.points.map((b,_)=>a.jsx("circle",{cx:b.cx,cy:b.cy,r:nx,fill:h.color},`${h.id}-${_}`)))]}),e.map(h=>{if(!h.headMark)return null;const b=h.axis==="primary"?Re:Te;let _=h.data.x.length-1;for(;_>=0&&!(Number.isFinite(h.data.x[_])&&Number.isFinite(h.data.y[_]));)_-=1;return _<0?null:a.jsx("circle",{cx:he(h.data.x[_]),cy:b(h.data.y[_]),r:Dv,fill:h.headMark==="dot"?h.color:"var(--color-surface-panel)",stroke:h.color,strokeWidth:h.headMark==="dot"?0:1.5,"data-head-mark":h.headMark},`${h.id}-head`)}),m&&m.length>0&&a.jsx("g",{clipPath:`url(#${ho})`,children:a.jsx(Mo,{layers:m,frame:bn,pass:"foreground"})}),pt.map(h=>a.jsxs(wn.Fragment,{children:[a.jsx("line",{x1:V,y1:h.y,x2:T&&h.kind==="marker"?V+24:ge,y2:h.y,stroke:h.tone.line,strokeWidth:1,strokeDasharray:h.dashed?"4 3":void 0,"data-threshold-kind":h.kind,"data-threshold-passed":h.passed||void 0}),T&&h.kind==="marker"&&h.label&&a.jsx("text",{x:V+28,y:h.y+3.5,fill:h.tone.label,fontSize:10,children:h.label}),!(T&&h.kind==="marker")&&h.label&&$t.get(h.id)&&a.jsxs("text",{x:$t.get(h.id)?.x,y:$t.get(h.id)?.y,textAnchor:$t.get(h.id)?.anchor,fill:h.tone.label,fontSize:10,children:[h.label,h.currency.held&&a.jsx(No,{size:10,kind:h.currency.mark??"held"})]})]},h.id)),Wt.map(h=>a.jsx(dg,{x:h.x,y:h.y,size:it,color:h.color,text:h.text},h.key)),Y!=="none"&&e.map((h,b)=>{const _=ie?Oe.positions[b]:void 0,P=_?ee-He+2+_.row*Ue:xl+b*Ue;if(!ie&&P+13>ne)return null;const O=_?Rn+_.x:le?le.x0:V+3,H=ie?q-2*Rn:le?le.x1-le.x0:Ce-6,L=Jt(h.label,H),B=Math.max(1,Math.floor((L-8)/6)),Q=h.label.length>B?`${h.label.slice(0,Math.max(1,B-1))}...`:h.label;return a.jsxs(wn.Fragment,{children:[a.jsx("rect",{x:O,y:P,width:L,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),a.jsx("text",{x:O+3,y:P+10,fill:h.color,fontSize:10,children:Q})]},h.id)}),m&&m.length>0&&ft&&a.jsx(Mo,{layers:m,frame:bn,pass:"caption"}),_t!==null&&mt!==null&&a.jsx(Xm,{x:he(mt),plot:{x0:V,y0:Z,x1:ge,y1:ne},heading:_t.heading,rows:_t.rows,avoid:Tr,traces:Or})]}),zr=et?a.jsx("div",{ref:U,"data-plot-card":"",style:{position:"absolute",left:Me?.x0??0,top:Me?.y0??0,visibility:Me&&!_l?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof C=="function"?C({width:Ce-Qs*2,height:Ze-Qs*2,form:Ee}):C}):null,Hr=W?a.jsx("div",{"data-plot-notice":"",style:{position:"absolute",left:V,top:Z,width:Ce,height:Ze,pointerEvents:"none"},children:W}):null;return se?a.jsxs(a.Fragment,{children:[Dr,zr,Hr,a.jsx(dt,{id:`${I}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),a.jsx(dt,{role:"status","aria-live":"polite",children:be})]}):a.jsxs(a.Fragment,{children:[Dr,zr,Hr]})}function ra(e,t,n,o=[]){if(t)return t;if(e.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let r=[...e.flatMap(hx),...o.filter(Number.isFinite)];if(n==="log"&&(r=r.filter(c=>c>0)),r.length===0)return n==="log"?[1,10]:[0,1];let s=r[0],l=r[0];for(const c of r)c<s&&(s=c),c>l&&(l=c);const i=Math.max(Math.max(Math.abs(s),Math.abs(l))*fx,px);if((n==="linear"||n===void 0)&&l>s&&l-s<i){const c=(s+l)/2;return[c-i,c+i]}return[s,l]}function vx(e,t){if(e===0)return"0";const n=Math.abs(e);if(n>=1e6){const o=t?jo(t,1e6,1):1;return`${(e/1e6).toFixed(o)}M`}if(n>=1e3){const o=t?jo(t,1e3,1):1;return`${(e/1e3).toFixed(o)}k`}if(Number.isInteger(e))return String(e);if(n<.01){const o=Math.floor(Math.log10(n)),r=e/10**o;return Math.abs(r-1)<1e-9?`1e${o}`:`${r.toFixed(1)}e${o}`}return e.toFixed(t?jo(t,1,2):2)}const hl=p.createContext(null);function xx(e,t){const n=p.useContext(hl),o=n?.setFooter,r=n?.setDirty;p.useEffect(()=>(o?.(e),()=>o?.(null)),[o,e]),p.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function kb(e){const{onSave:t,value:n,saved:o,saveLabel:r="Save",extra:s,disabled:l}=e,i=p.useRef(null);i.current===null&&(i.current={v:n});const c=!Tt(n,i.current.v)&&!Tt(n,o),d=p.useRef(t);d.current=t;const u=p.useMemo(()=>a.jsxs(a.Fragment,{children:[s,a.jsx(Fo,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:l,children:r})]}),[s,l,r]);xx(u,c)}const fl=p.createContext(null);let bx=0;function $b({children:e}){const[t,n]=p.useState([]),o=p.useCallback((l,i)=>{const c=`modal-${++bx}`;return n(d=>[...d,{id:c,title:i?.title,titleAdornment:i?.titleAdornment,"aria-label":i?.["aria-label"],width:i?.width,content:l}]),c},[]),r=p.useCallback(l=>{n(i=>i.filter(c=>c.id!==l))},[]),s=p.useMemo(()=>({open:o,close:r}),[o,r]);return a.jsxs(fl.Provider,{value:s,children:[e,t.map((l,i)=>a.jsx(yx,{entry:l,isTop:i===t.length-1,onClose:()=>r(l.id)},l.id))]})}function _b(){const e=p.useContext(fl);if(!e)throw new Error("useModal must be used inside <ModalProvider>");return e}const sa='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function yx({entry:e,isTop:t,onClose:n}){const o=p.useRef(null),r=p.useRef(t);r.current=t,p.useEffect(()=>{const y=document.activeElement instanceof HTMLElement?document.activeElement:null;return()=>{if(y?.isConnected){document.documentElement.setAttribute(Io,"");try{y.focus()}finally{document.documentElement.removeAttribute(Io)}}}},[]);const s=p.useId(),l=p.useRef(!1),[i,c]=p.useState(null),[d,u]=p.useState(!1),[f,g]=p.useState(!1),v=p.useRef(null),m=p.useRef(d);m.current=d;const x=p.useRef(f);x.current=f;const S=p.useMemo(()=>({setFooter:c,setDirty:u}),[]),E=p.useCallback(()=>{if(m.current){g(!0);return}n()},[n]);return p.useEffect(()=>{function y(R){if(!(R.key!=="Escape"||!r.current)){if(x.current){R.stopPropagation(),g(!1);return}E()}}return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[E]),p.useEffect(()=>{f&&v.current?.focus()},[f]),p.useEffect(()=>{function y(R){const j=o.current;if(R.key!=="Tab"||!r.current||!j)return;const A=j.querySelectorAll(sa),M=A[0],C=A[A.length-1];if(A.length===0){R.preventDefault();return}if(R.shiftKey){document.activeElement===M&&(R.preventDefault(),C?.focus());return}document.activeElement===C&&(R.preventDefault(),M?.focus())}return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[]),p.useEffect(()=>{f||Array.from(o.current?.querySelectorAll(sa)??[]).find(y=>!y.matches('[role="img"]'))?.focus()},[f]),a.jsx(a.Fragment,{children:va.createPortal(a.jsx(wx,{onMouseDown:y=>{l.current=y.target===y.currentTarget},onMouseUp:y=>{l.current&&y.target===y.currentTarget&&E(),l.current=!1},children:a.jsxs(kx,{ref:o,role:"dialog","aria-modal":"true","aria-labelledby":e.title?s:void 0,"aria-label":e.title?void 0:e["aria-label"],$width:e.width,children:[a.jsxs($x,{children:[e.title&&a.jsxs(_x,{children:[a.jsx(Sx,{id:s,children:e.title}),e.titleAdornment]}),a.jsx(rr,{onClick:E,"aria-label":"Close","data-tooltip":"",children:a.jsx(Da,{size:16})})]}),a.jsx(Mx,{children:a.jsx(uc,{children:a.jsx(hl.Provider,{value:S,children:e.content})})}),i&&!f&&a.jsx(aa,{children:i}),f&&a.jsxs(aa,{role:"alertdialog","aria-label":"Discard unsaved changes?",children:[a.jsx(jx,{children:"Discard unsaved changes?"}),a.jsx(Fo,{variant:"ghost",type:"button",onClick:()=>g(!1),children:"Keep editing"}),a.jsx(Fo,{variant:"primary",ref:v,type:"button",onClick:()=>{g(!1),n()},children:"Discard"})]})]})}),document.body)})}const wx=w.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
`,kx=w.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-floating);
  min-width: min(320px, 100vw - 16px);
  max-width: ${({$width:e})=>e??"560px"};
  width: 90vw;
  /* The dvh line is the visible viewport on a phone, where vh is the height with the browser bars away. */
  max-height: 80vh;
  max-height: 80dvh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
`,$x=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-modal-bar);
  border-bottom: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
`,_x=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,Sx=w.h2`
  margin: 0;
  ${br}
`,Mx=w(yr)`
  margin-inline: 0;

  [data-scroll-area-inner] {
    padding: var(--inset-modal-body);
    /* A tab strip or table inside reaches the dialog's edges, not just the body's content column. */
    --bleed-inline: var(--inset-modal-body);
    -webkit-overflow-scrolling: touch;
  }

  /* Content that asks for a minimum width (a form row, a table) must not push the body wider than a phone: it wraps or scrolls inside the dialog instead of scrolling the whole body sideways. */
  [data-scroll-area-inner] > * {
    min-width: 0;
  }
`,aa=w.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-control-row);
  padding: var(--inset-modal-bar);
  border-top: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
`,jx=w.span`
  margin-right: auto;
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
`;export{U1 as $,_1 as A,zn as B,p1 as C,c1 as D,Bx as E,Ah as F,Yx as G,O1 as H,rr as I,qx as J,$b as K,o1 as L,g1 as M,x1 as N,f1 as O,pb as P,v1 as Q,h1 as R,R1 as S,A1 as T,T1 as U,s1 as V,yr as W,V1 as X,r1 as Y,th as Z,b1 as _,j1 as a,gi as a$,K1 as a0,dt as a1,Tt as a2,Hx as a3,av as a4,Zn as a5,_b as a6,xx as a7,kb as a8,yb as a9,Jp as aA,mb as aB,a1 as aC,Oo as aD,N1 as aE,D1 as aF,Kx as aG,Vh as aH,Zx as aI,No as aJ,z1 as aK,H1 as aL,B1 as aM,Qx as aN,hl as aO,t1 as aP,ub as aQ,Xm as aR,fe as aS,Ac as aT,Ba as aU,Ki as aV,bh as aW,I1 as aX,C1 as aY,Rc as aZ,Qo as a_,bt as aa,cs as ab,Kn as ac,Va as ad,Tc as ae,Le as af,ar as ag,Aa as ah,Dt as ai,Ec as aj,vf as ak,E1 as al,S1 as am,nb as an,k1 as ao,Gf as ap,gs as aq,Mt as ar,d1 as as,fp as at,cr as au,Wx as av,uc as aw,fb as ax,cb as ay,Gx as az,M1 as b,rs as b$,Ip as b0,za as b1,e1 as b2,ob as b3,ze as b4,bg as b5,Do as b6,Pt as b7,mr as b8,bi as b9,ib as bA,hi as bB,Ka as bC,ei as bD,mc as bE,Vn as bF,qo as bG,hb as bH,lb as bI,Li as bJ,j0 as bK,mn as bL,sp as bM,op as bN,lr as bO,J1 as bP,wb as bQ,bb as bR,Iv as bS,tb as bT,sb as bU,Kf as bV,Pf as bW,lh as bX,ph as bY,W1 as bZ,Dh as b_,Ko as ba,Kr as bb,Zo as bc,wc as bd,It as be,yi as bf,wi as bg,dc as bh,Fh as bi,ba as bj,Q1 as bk,ir as bl,Z1 as bm,Oh as bn,gb as bo,As as bp,wg as bq,xb as br,db as bs,Jm as bt,eb as bu,Um as bv,vb as bw,ya as bx,eo as by,tg as bz,n1 as c,pn as c0,Ux as c1,rb as c2,ds as c3,$i as c4,Xx as c5,ab as c6,Jx as d,Fo as e,w1 as f,$1 as g,y1 as h,Da as i,X1 as j,u1 as k,Y1 as l,Rh as m,G1 as n,Rp as o,q1 as p,zp as q,F1 as r,P1 as s,i1 as t,l1 as u,L1 as v,m1 as w,Vx as x,Th as y,nh as z};
