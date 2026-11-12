import{j as a}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import y,{css as N,createGlobalStyle as Pl,keyframes as Xo}from"./ext-styled-components-DAuodqsN.js";import{r as f,R as kn}from"./ext-react-C0MU9AHG.js";import{h as la,l as Ol}from"./logger-2_QM1wvD.js";import{ec as bt,cD as Rt,eg as ca,cZ as Wr,cr as Fl,eB as on,eG as On,cy as Ye,cU as da,Q as Nl}from"./context-fkXU6psv.js";import{aW as Dl}from"./ksp-enum-names-D10uD7DF.js";import{R as zl,g as Cn,N as Bl,h as ua,an as Hl,ac as Wl}from"./use-command-CafFDBCH.js";import{a1 as Ul,a2 as Xl,U as Me,i as To,h as ha,g as be,j as De,r as Nt,a3 as Go,N as Fn,a4 as Gl,k as Yl,K as Yo,a5 as qo,a6 as ql,a7 as Vl,a8 as Kl,a9 as fa,aa as Zl,x as Ur,ab as Ql,ac as Jl,ad as ec,ae as tc,af as nc,Z as Ct,B as oc,e as pa,_ as rc,T as cn,H as ma,ag as sc,S as ga,ah as va,O as Xr,f as Gr,s as po,A as $n,ai as Yr,aj as ac,ak as ic,u as lc}from"./contributionsRead-CFwQ5Hmf.js";import{r as xa}from"./ext-react-dom-DCF8ZnaJ.js";import"./use-transmissions-CJq7aJWM.js";import"./lagrange-C8jk8-H2.js";import{gridToPixels as cc}from"./ext-ui-kit-grid-CYQFMmYG.js";const Vx={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function Kx({children:e,layout:t="inline",...n}){return a.jsx(uc,{$layout:t,...n,children:e})}const dc={inline:N``,fill:N`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},uc=y.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>dc[e]}
`;function hc(){const e=Xl();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const Vn=Ul(hc),Zx=Vn.Context;function fc({children:e}){return a.jsx(Vn.Provider,{children:a.jsx(pc,{children:e})})}function pc({children:e}){const t=Vn.useStore();return a.jsx(zl.Provider,{value:t,children:e})}const Vo=Vn.useStore,mc=()=>()=>{},gc=[],qr=()=>gc;function vc(){const e=Vo();return f.useSyncExternalStore(e?e.subscribe:mc,e?e.getActiveHandles:qr,e?e.getActiveHandles:qr)}const en=new WeakMap,Co=new WeakMap;function Vr(e){for(const t of Co.get(e)??[])t()}function xc(e){return en.set(e,(en.get(e)??0)+1),Vr(e),()=>{en.set(e,(en.get(e)??1)-1),Vr(e)}}function ba(){const e=Vo();return f.useSyncExternalStore(t=>{if(!e)return()=>{};const n=Co.get(e)??new Set;return Co.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(en.get(e)??0)>0,()=>!1)}const mo=e=>Me(e),rt={contact:{"in-contact":()=>"In contact","loss-in":e=>`LOS in ${mo(e)}`,"back-in":e=>`No contact, back in ${mo(e)}`,none:e=>e==="unpowered"?"No contact, no electric charge aboard":"No contact"},delay:{held:e=>`${mo(e)} signal delay`,absent:()=>"no signal path"},arrival:{expected:"Expected to arrive","likely-lost":"Likely lost"},sends:{now:()=>"Sends now",held:(e,t)=>t===void 0?`Held until ${Me(e)}`:`Held until ${Me(e)}, arrives ${Me(t)}`}};function ya(e){const{contact:t}=e,n=t.kind==="loss-in"||t.kind==="back-in"?rt.contact[t.kind](t.seconds):t.kind==="none"?rt.contact.none(t.reason):rt.contact[t.kind](),o=e.signalDelay===void 0?rt.delay.absent():rt.delay.held(e.signalDelay),r=e.sends==="now"&&e.arrival==="expected"?rt.sends.now():e.sends==="held"&&e.heldUntilUt!==void 0?rt.sends.held(e.heldUntilUt,e.arrivesUt):rt.arrival[e.arrival];return`${n} · ${o}
${r}`}function wa(e){if(e!==void 0)return e.arrival==="likely-lost"?"at-risk":e.sends==="held"?"held":void 0}function st(e,t){return Me({magnitude:e,unit:t})}function bc(e,t){const{limit:n,actual:o,unit:r}=t;if(n==null||o==null)return null;switch(e){case Rt.LimitReached:{const s=yc(t.quantity),i=`${st(o,r)} of ${st(n,r)}`;return t.facilityName?`the ${t.facilityName} holds ${i} ${s}`:`it holds ${i} ${s}`}case Rt.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${st(o,r)} of ${st(n,r)}`;case Rt.InsufficientFunds:return`it costs ${st(Math.trunc(o),r)} and funds are ${st(Math.trunc(n),r)}`;case Rt.InsufficientScience:return`it costs ${st(o,r)} and science is ${st(n,r)}`;default:return null}}function yc(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function Kr(e){return e&&ca(e)?.sentence||null}function wc(e){const t=e?.trim().replace(/\.$/,"");return t||null}function It(e){return Ko(e,"refused")}function Zr(e){return Ko(e,"unavailable")}function Qr(e){return Ko(e,"likely to be refused")}function Ko(e,t){const n=bt(e),o=(e.breach?bc(e.errorCode,e.breach):null)??wc(e.detail)??Kr(e.reason)??Kr(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function Zo(e){const n=bt(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":kc(It({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function kc(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function Qo(e){return`${bt(e)||e.command||"The command"}: no reply. May have run.`}function $c(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}function _c(e,t){const n=e===void 0||e.phase==="in-flight"||e.phase==="idle"?null:e.requestId,o=r=>(r.dispatchedAt??0)+(r.oneWaySeconds??0);return t.filter(r=>r.id!==n&&(r.predictedPhase==="awaiting-reply"||r.predictedPhase==="due")).sort((r,s)=>o(r)-o(s))}function ka(e,t,n,o){let r=e,s=!1;for(const i of _c(t,n)){if(i.args===void 0){if(typeof i.commandedValue=="number"){r=i.commandedValue!==0,s=!0;continue}typeof r=="boolean"&&(r=!r,s=!0);continue}const l=Io(i.args),c=l!==void 0?l:o?.(r,i.args);c!==void 0&&(s=!0,r=c)}return s?r:void 0}function Sc(e,t,n,o=void 0,r){return e?"sent":n.some(s=>s.held===!0)?"held":ka(o,t,n,r)===void 0?null:"modelled"}function jc(e,t,n,o=[],r){return t!=="modelled"?e:ka(e,n,o,r)??e}function Mc(e,t){return e===void 0||e.phase==="idle"?!1:e.phase==="in-flight"?!0:e.phase!=="confirmed"&&e.phase!=="found"?!1:t.some(n=>n.id===e.requestId)}function Io(e){if(e===null||typeof e!="object")return;const t="state"in e?e.state:"enabled"in e?e.enabled:void 0;return typeof t=="boolean"?t:void 0}function $a(e,t){switch(t){case"held":return`${e} held until contact returns`;case"sent":return`${e} sent, not yet received`;case"modelled":return`${e} shown as predicted: the command should have reached the craft, and its reply is on its way back`;default:return null}}function Ec(e,t,n){if(t!=="held"&&t!=="modelled")return n;const o=$a(e,t)??"";return{kind:t,caption:n===null?o:`${n.caption}. ${o}`}}const Ac=5e3;function Jr(e){try{return JSON.stringify(e)??""}catch{return null}}const Jo="Not connected to the mod. Nothing can be sent",Rc=4e3,Tc=8e3,Cc=500,Lt="SENT",_a="Refused",Sa="No reply",ja="Found";function Ma(e,t){return e.gateFor?e.gateFor(t):e.gate}function Kn({command:e,toggle:t,unavailable:n,advise:o}){const r=e.handle,s=e.members?void 0:Cn(e),i=e.options.label,[l,c]=f.useState("idle"),[d,u]=f.useState(null),[p,m]=f.useState(null),[v,g]=f.useState(!1),[x,S]=f.useState(0),[E,w]=f.useState(!1),M=f.useRef(null),A=r.streamDown===!0,R=Ma(r,s),j=r.gateStopsPress===!0,C=t?.unavailable??n??(j&&o?Zr({errorCode:Rt.ModeUnavailable,detail:o,label:i,args:s}):null)??null,k=R?.blocked===!0&&j||C!==null,H=R?.blocked===!0&&!j&&C===null,G=f.useRef(!0),F=f.useRef(0);f.useEffect(()=>(G.current=!0,()=>{G.current=!1}),[]);const I=r.founds,T=f.useRef(null),Y=f.useRef(I?.length??0);f.useEffect(()=>{const ne=I?.length??0,ke=ne>Y.current;Y.current=ne;const le=I?.[ne-1],Oe=T.current;if(!ke||!le||Oe===null)return;const Be=le.label!==void 0&&le.label!==""&&Oe.label!==void 0&&le.label!==Oe.label,Se=le.args!==void 0&&Oe.args!==void 0&&JSON.stringify(le.args)!==JSON.stringify(Oe.args);Be||Se||(T.current=null,m(le),u(null),c("found"))},[I]),f.useEffect(()=>{if(l!=="armed")return;const ne=setTimeout(()=>c("idle"),Rc);return()=>clearTimeout(ne)},[l]),f.useEffect(()=>{if(l!=="refused"&&l!=="lost"&&l!=="found")return;const ne=setTimeout(()=>{c("idle"),u(null),T.current=null,m(null)},Tc);return()=>clearTimeout(ne)},[l]),f.useEffect(()=>{if(x===0)return;const ne=setTimeout(()=>g(!1),Cc);return()=>clearTimeout(ne)},[x]);const K=f.useCallback((ne=e)=>{const ke=ne.members?void 0:Cn(ne),le=ne.options.label,Oe=F.current+1;F.current=Oe,T.current=null,M.current=null,c("idle"),u(null),g(!0),S(ge=>ge+1),w(!0);const Be=(ge,xe)=>{!G.current||F.current!==Oe||(u(xe),c(ge),w(!1),ge!=="idle"&&g(!1))},Se=ge=>({errorCode:ge.errorCode,reason:ge.reason,command:ge.command,args:ge.args,label:ge.label??le,breach:ge.breach,detail:ge.detail}),He=ne.options;let yt;if(ne.members){const ge=ne.members.map(xe=>({...xe,options:{...xe.options,onRejected:zt=>{xe.options.onRejected?.(zt);const Ke=Wr(zt);Ke.kind==="refused"&&xe.options.onRefused?.(It({...Se(Ke),label:Ke.label??xe.options.label}))}}}));yt=Bl(ge,ne.set??{}).then(xe=>xe.failed>0?Promise.reject(xe.firstError):void 0)}else He.before?.(ke),yt=ne.handle.dangerouslySendWithoutInput(ke,le||He.topic?{label:le,topic:He.topic}:void 0);yt.then(ge=>{Be("idle",null),He.onConfirmed?.(ge)},ge=>{const xe=Wr(ge);if(ne.members||(He.onRejected?.(ge),xe.kind==="refused"&&He.onRefused?.(It(Se(xe)))),xe.kind==="lost"){T.current={args:ke,label:le},Be("lost",null);return}if(xe.kind!=="refused"){Be("idle",null);return}Be("refused",Se(xe))})},[e]),{hasUnconfirmed:ee,hasFailure:ae}=$c(r),Q=r.status,ye=E&&Q?.phase==="in-flight"&&Q.accepted!==!0&&(M.current===null||M.current===Q.requestId),_=v||ye;f.useEffect(()=>{E&&M.current===null&&Q?.phase==="in-flight"&&(M.current=Q.requestId)},[E,Q]);const U=t?r.inFlight.filter(t.rows??(()=>!0)):[],se=t?Sc(_,Q,U,t.state,t.modelled):null,me=t?jc(t.state,se,Q,U,t.modelled):void 0,de=Fl(),X=f.useRef(void 0),ue=f.useRef(void 0),[we,Ae]=f.useState(null),he=Q?.phase==="confirmed"?Q.requestId:null;f.useEffect(()=>{if(he===null)return;const ne=setTimeout(()=>Ae(he),Ac);return()=>clearTimeout(ne)},[he]);const Re=f.useRef(null);t!==void 0&&se==="modelled"&&Q!==void 0&&Q.phase!=="idle"&&X.current!==void 0&&me===X.current&&(Re.current=Q.requestId);const ie=t!==void 0&&he!==null&&Re.current===he&&se!=="modelled"&&he!==null&&he!==we&&X.current!==void 0&&t.state===ue.current?X.current:me,te=(Mc(Q,r.inFlight)||Q?.phase==="confirmed"&&X.current!==void 0&&t?.state===ue.current)&&X.current!==void 0?X.current:ie,$e=f.useRef(te);$e.current=te;const qe=f.useCallback(ne=>{if(!A&&!k){if(t){const ke=t.args($e.current);if(ke===void 0)return;X.current=Io(ke),ue.current=t.state,X.current!==void 0&&($e.current=X.current),K({...e,args:ke});return}if(l==="refused"||l==="lost"||l==="found"){u(null),m(null),T.current=null,c("idle");return}if(ne){if(_)return;if(l!=="armed"){Pe.current=Jr(s),ft.current=de,c("armed");return}}K()}},[l,_,A,k,K,s,t,e,de]),Pe=f.useRef(null),ft=f.useRef(de);f.useEffect(()=>{l==="armed"&&(Jr(s)!==Pe.current||de!==ft.current)&&c("idle")},[l,s,de]);const _e=l==="refused"||l==="lost"||l==="found"?l:_?"sent":k?"blocked":l,Ve=_e==="blocked"||C!==null?null:H&&R?Qr({...R,label:R.label??i,args:R.args??s}):o?Qr({errorCode:Rt.ModeUnavailable,detail:o,label:i,args:s}):null;return{phase:_e,isSent:_e==="sent",isArmed:_e==="armed",isRefused:_e==="refused",isLost:_e==="lost",isFound:_e==="found",isBlocked:_e==="blocked",isOffline:A&&_e!=="sent",isUnavailable:C!==null,isAdvised:Ve!==null,adviceText:Ve,command:e,refusalText:d?It(d):C!==null?C:_e==="blocked"&&R?Zr({...R,label:R.label??i,args:R.args??s}):null,foundText:p?Zo(p):null,lossText:_e==="lost"?Qo({args:s,label:i}):null,pressWith:ne=>{A||(X.current=Io(Cn(ne)),ue.current=t?.state,K(ne))},toggleView:t?{shown:ie,on:typeof ie=="number"?ie>0:ie===!0,word:se==="sent"?t.sentWord??Lt:t.word(ie),reserve:[...t.words,t.sentWord??Lt],confirmation:se,unavailable:C,marking:Ec(t.name,se,t.marking??null),sentence:$a(t.name,se)}:null,hasUnconfirmed:ee,hasFailure:ae,press:qe}}function Ic({command:e,unavailable:t,advise:n}){const o=Kn({command:{kind:"bound",handle:e.handle,args:void 0,options:e.options},unavailable:t,advise:n}),r=Aa(o),s=o.isBlocked||o.isUnavailable||o.isOffline||t!=null;return Ea(o,s,r,i=>{if(s)return;const l=e.toArgs(i);l!==void 0&&o.pressWith(ua(e.handle,l,e.options))},t??null)}function Lc({command:e,unavailable:t,advise:n}){const o=Kn({command:e,unavailable:t,advise:n}),r=Aa(o),s=o.isBlocked||o.isUnavailable||o.isOffline||t!=null;return Ea(o,s,r,()=>{s||o.press(!1)},t??null)}function Ea(e,t,n,o,r){const s=e.command.handle,i=e.isBlocked&&!e.isUnavailable,l=e.isSent?Lt:e.isRefused?_a:e.isLost?Sa:e.isFound?ja:null,c=s.sendStatus,d=c===void 0?void 0:ya(c),u=e.foundText??e.refusalText??(e.isLost?e.lossText:null),p=u??(e.isSent?"Sent, not yet received":e.isOffline?Jo:r??([e.adviceText,d].filter(Boolean).join(`
`)||void 0));return{control:e,send:o,word:l,tip:p??void 0,inert:t,edge:{"data-command-edge":i?"blocked":e.isLost||e.isRefused||e.hasUnconfirmed||e.hasFailure?"warn":void 0,"data-command-phase":e.phase,"data-stream":e.isOffline?"down":void 0,"data-predicted":i?void 0:wa(c)??(e.isAdvised?"at-risk":void 0),"aria-disabled":t?!0:void 0},announce:n?null:u??(e.isSent?"Sent, not yet received":null)}}function Aa(e){return ba()&&e.command.handle.railed===!0}const Ra=N`
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
`,Pc=N`
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
`,mn=N`
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
`;function ht({children:e,"aria-label":t,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:r=!1,as:s="span",className:i}){const c={role:n?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":t,className:i,"data-live-region":""};return n?a.jsx(dt,{as:s,...c,children:e}):f.createElement(s,c,e)}const Lo="data-restoring-focus",Oc=120,Fc=48,Nc=600,Dc=120,go=new Set,es=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function gn(e){return Ta(e,"below")}function Ta(e,t){const[n,o]=f.useState(null),[r,s]=f.useState(!1),[i,l]=f.useState(!1),[c,d]=f.useState(!1),[u,p]=f.useState(!1),[m,v]=f.useState(!1),g=f.useRef(null),x=f.useRef(null),S=f.useRef(null),E=f.useRef(!1),w=f.useRef(!1),M=f.useRef(null),A=f.useRef(null),R=e!=null&&e!==""?e:null,j=n!==null&&(r||i||c||u||m),C=f.useCallback(()=>{M.current!==null&&clearTimeout(M.current),M.current=null,A.current!==null&&clearTimeout(A.current),A.current=null},[]),k=f.useCallback(()=>{C(),o(null),s(!1),l(!1),d(!1),p(!1),v(!1),E.current=!1},[C]);f.useEffect(()=>{const F=x.current;if(!j||F===null)return;const I={anchor:F,close:k};for(const T of go)if(T.anchor!==F&&(T.anchor.contains(F)&&T.close(),F.contains(T.anchor))){k();return}return go.add(I),()=>{go.delete(I)}},[j,k]),f.useEffect(()=>{if(!u)return;const F=()=>{const T=document.getSelection(),Y=T!==null&&!T.isCollapsed&&S.current?.contains(T.anchorNode)===!0;!E.current&&!Y&&p(!1)},I=()=>{E.current=!1,F()};return document.addEventListener("pointerup",I),document.addEventListener("selectionchange",F),()=>{document.removeEventListener("pointerup",I),document.removeEventListener("selectionchange",F)}},[u]),f.useEffect(()=>{if(!m)return;const F=I=>{const T=I.target;T instanceof Node&&(g.current?.contains(T)||S.current?.contains(T)||k())};return document.addEventListener("pointerdown",F,!0),()=>document.removeEventListener("pointerdown",F,!0)},[m,k]);const H=f.useCallback(()=>{C(),M.current=setTimeout(()=>{M.current=null,s(!1),d(!1)},Dc)},[C]);if(f.useEffect(()=>C,[C]),f.useEffect(()=>{if(n!==null)return window.addEventListener("scroll",k,!0),window.addEventListener("resize",k),()=>{window.removeEventListener("scroll",k,!0),window.removeEventListener("resize",k)}},[n,k]),f.useEffect(()=>{if(!j||R===null)return;const F=I=>{I.key==="Escape"&&(I.stopPropagation(),k())};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,R,k]),R===null)return{anchor:{},tip:null};const G=F=>{x.current=F;const I=F.getBoundingClientRect();o({top:I.bottom,left:I.left,above:t==="above"?I.top>=Fc:window.innerHeight-I.bottom<Oc,anchorTop:I.top})};return{anchor:{"data-tooltip":R,onPointerEnter:F=>{if(F.pointerType==="touch")return;C();const I=F.currentTarget;A.current=setTimeout(()=>{A.current=null,G(I),s(!0)},Nc)},onPointerLeave:H,onPointerDown:F=>{w.current=!0,F.pointerType!=="touch"&&k()},onPointerUp:F=>{if(w.current=!1,F.pointerType==="touch"){if(m){k();return}g.current=F.currentTarget,G(F.currentTarget),v(!0)}},onFocus:F=>{w.current||document.documentElement.hasAttribute(Lo)||(G(F.currentTarget),l(!0))},onBlur:()=>{l(!1),!r&&!c&&!m&&o(null)}},tip:j?xa.createPortal(a.jsx(zc,{ref:S,at:n,text:R,onPress:()=>{E.current=!0,p(!0)},onPointerEnter:()=>{C(),d(!0)},onPointerLeave:H}),document.body):null}}const zc=f.forwardRef(function({at:t,text:n,onPress:o,onPointerEnter:r,onPointerLeave:s},i){const l=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return a.jsx(Hc,{ref:i,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),o()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...l,left:t.left,"--tip-left":`${t.left}px`},children:n})});function St(e,t){return(...n)=>{typeof e=="function"&&e(...n),t?.(...n)}}function Ee({text:e,children:t,focusable:n=!1,announce:o=!0,placement:r="below"}){const{anchor:s,tip:i}=Ta(e,r);if(e==null||e==="")return a.jsx(a.Fragment,{children:t});const l=t.props,c=l["aria-label"],d=!o||typeof c=="string"&&es(c).includes(es(e));return a.jsxs(a.Fragment,{children:[f.cloneElement(t,{"data-tooltip":e,onPointerEnter:St(l.onPointerEnter,s.onPointerEnter),onPointerLeave:St(l.onPointerLeave,s.onPointerLeave),onPointerDown:St(l.onPointerDown,s.onPointerDown),onPointerUp:St(l.onPointerUp,s.onPointerUp),onFocus:St(l.onFocus,s.onFocus),onBlur:St(l.onBlur,s.onBlur),"aria-description":d?l["aria-description"]:e,tabIndex:n?l.tabIndex??0:l.tabIndex}),i,n&&a.jsx(Bc,{})]})}const Bc=Pl`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Hc=y.div`
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
`;function Wc(e){return e==="neutral"?"go":e}const Nn=e=>N`
  background: ${To[e]};
  border-color: ${To[e]};
  color: ${ha[e]};
`,Uc=e=>N`
  border-color: ${be[e]};
  color: ${De[e]};
`,ts={default:N`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:N`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},Xc=N`
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
`,Gc=N`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function Yc(e,t){return e==="text"?Xc:e==="primary"?Nn(t):t==="neutral"?ts[e]:N`
    ${ts[e]}
    ${Uc(t)}
  `}const qc=N`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,Vc={sm:N`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:N`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},Ca=y.button`
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

  ${({$size:e})=>Vc[e]}
  ${({$variant:e,$tone:t})=>Yc(e,t)}
  ${({$pressed:e,$tone:t})=>e?Nn(Wc(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":qc}
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

  ${({$variant:e})=>e==="text"?Gc:""}
`,er=y.button`
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
`;function Ia(e){let t="";return f.Children.forEach(e,n=>{if(typeof n=="string"||typeof n=="number"){t+=String(n);return}f.isValidElement(n)&&(t+=Ia(n.props.children))}),t.replace(/\s+/g," ").trim()}function La({label:e,children:t,disabledReason:n}){return Kc({label:e,children:t,disabledReason:n})}function Kc({label:e,children:t,disabledReason:n}){const o=e!==void 0&&e!==""&&e!==Ia(t)?e:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function Pa(e,t){return e===!0&&t!==void 0&&t!==""}function Oa(e){e.preventDefault(),e.stopPropagation()}function Fa(e,t,n){return t===null||e.props["data-tooltip"]!==void 0?e:a.jsx(Ee,{text:t,announce:n,children:e})}const Qx=f.forwardRef(function(t,n){if(t.command)return a.jsx(Zc,{...t,command:t.command,ref:n});const{command:o,unavailable:r,...s}=t;return a.jsx(Na,{...s,ref:n})}),Zc=f.forwardRef(function({command:t,unavailable:n,onClick:o,...r},s){const i=Lc({command:t,unavailable:n});return a.jsxs(a.Fragment,{children:[a.jsx(Ee,{text:i.tip,children:a.jsx(Na,{...r,...i.edge,ref:s,word:i.word,onClick:l=>{i.inert||(i.send(),o?.(l))}})}),a.jsx(ht,{visuallyHidden:!0,children:i.announce})]})}),Na=f.forwardRef(function({label:t,icon:n,type:o,word:r,...s},i){return a.jsx(Qc,{ref:i,type:o??"button","aria-label":t,...s,children:a.jsx(Da,{label:t,icon:n,word:r})})}),Qc=y.button`
  ${Pc}
`;function Da({label:e,icon:t,word:n}){const o=f.useRef(null),r=f.useRef(null),[s,i]=f.useState(!0);return f.useLayoutEffect(()=>{const l=o.current,c=r.current;if(!l||!c)return;const d=()=>{i(c.scrollWidth<=l.clientWidth)};if(d(),typeof ResizeObserver>"u")return;const u=new ResizeObserver(d);return u.observe(l),u.observe(c),()=>u.disconnect()},[]),a.jsxs(Jc,{ref:o,children:[a.jsx(ed,{ref:r,"aria-hidden":"true",children:e}),s?a.jsx(td,{"aria-hidden":"true",$hidden:!!n,children:e}):a.jsx(od,{"aria-hidden":"true","data-fit-label-icon":"",children:t}),s&&n?a.jsx(nd,{"aria-hidden":"true",children:n}):null]})}const Jc=y.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,ed=y.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,td=y.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
  ${({$hidden:e})=>e?"visibility: hidden;":""}
`,nd=y.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  pointer-events: none;
  font-size: var(--font-size-caption);
  letter-spacing: 0.08em;
`,od=y.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=e=>{const t=sd(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},id=f.createContext({}),ld=()=>f.useContext(id),cd=f.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:o,className:r="",children:s,iconNode:i,...l},c)=>{const{size:d=24,strokeWidth:u=2,absoluteStrokeWidth:p=!1,color:m="currentColor",className:v=""}=ld()??{},g=o??p?Number(n??u)*24/Number(t??d):n??u;return f.createElement("svg",{ref:c,...vo,width:t??d??vo.width,height:t??d??vo.height,stroke:e??m,strokeWidth:g,className:za("lucide",v,r),...!s&&!ad(l)&&{"aria-hidden":"true"},...l},[...i.map(([x,S])=>f.createElement(x,S)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=(e,t)=>{const n=f.forwardRef(({className:o,...r},s)=>f.createElement(cd,{ref:s,iconNode:t,className:za(`lucide-${rd(ns(e))}`,`lucide-${e}`,o),...r}));return n.displayName=ns(e),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],ud=D("arrow-down-to-line",dd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],fd=D("arrow-down",hd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]],md=D("arrow-left-right",pd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],vd=D("arrow-left",gd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],bd=D("arrow-right",xd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],wd=D("arrow-up-to-line",yd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],$d=D("arrow-up",kd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Sd=D("bell",_d);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Md=D("check",jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ad=D("chevron-down",Ed);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Td=D("chevron-left",Rd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Id=D("chevron-right",Cd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Pd=D("chevron-up",Ld);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],Fd=D("columns-2",Od);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],Dd=D("computer",Nd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],Bd=D("corner-down-left",zd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Wd=D("database",Hd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Xd=D("file-text",Ud);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],Yd=D("grip",Gd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Vd=D("heart",qd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Zd=D("history",Kd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Jd=D("house",Qd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],tu=D("info",eu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],ou=D("joystick",nu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],su=D("layers",ru);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],iu=D("lightbulb-off",au);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],cu=D("lightbulb",lu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],uu=D("lock",du);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],fu=D("maximize",hu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],mu=D("menu",pu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],vu=D("microscope",gu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],bu=D("minimize",xu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],wu=D("pause",yu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],$u=D("pencil",ku);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Su=D("play",_u);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Mu=D("plus",ju);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Au=D("radio",Eu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Tu=D("rectangle-horizontal",Ru);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],Iu=D("rectangle-vertical",Cu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Pu=D("rotate-ccw",Lu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],Fu=D("rotate-cw",Ou);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],Du=D("rows-2",Nu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]],Bu=D("satellite-dish",zu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],Wu=D("satellite",Hu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Xu=D("settings",Uu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Yu=D("square",Gu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Vu=D("star",qu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Zu=D("undo-2",Ku);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Ju=D("volume-2",Qu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],th=D("volume-x",eh);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],oh=D("wrench",nh);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],sh=D("x",rh),ah="var(--icon-size-control)",ih={strokeWidth:1.8,"aria-hidden":!0};function z(e,t){const n=f.forwardRef(({label:o,size:r=ah,style:s,...i},l)=>{const c=typeof r=="number"?{size:r,style:s}:{style:{width:r,height:r,...s}},d=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return a.jsx(e,{...ih,...t,...d,...i,...c,ref:l})});return n.displayName=e.displayName??e.name,n}const Jx=z(Yd),e1=z(ou),t1=z(Zd),n1=z(Jd),o1=z(tu),r1=z(uu),s1=z(Au),a1=z(Ju),i1=z(th),l1=z(Sd),c1=z(su),d1=z(Xu),u1=z(Wu),h1=z(Bu),f1=z(fu),p1=z(bu),m1=z(Wd),g1=z(Dd),v1=z(Xd),x1=z(Mu,{strokeWidth:2.4}),Ba=z(sh),b1=z($u),y1=z(Md),lh=z(Vu),w1=z(Vd),k1=z(mu),ch=z(vu),$1=z(Su),_1=z(wu),S1=z(Yu),j1=z(Pd),M1=z(Ad),E1=z(Td),A1=z(Id),R1=z(vd),T1=z(md),C1=z($d),I1=z(bd),L1=z(fd),P1=z(wd),O1=z(ud),F1=z(Zu),N1=z(Fu),D1=z(Pu),z1=z(Fd),B1=z(Tu),H1=z(Du),W1=z(Iu),Ha=z(Bd),dh=D("space-helmet",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M10.5 8h3a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 1 0-7z",key:"visor"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),uh=D("space-helmet-visor-up",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M8 7.5C9.5 5 14.5 5 16 7.5",key:"visor"}],["circle",{cx:"12",cy:"12.5",r:"2",fill:"currentColor",key:"face"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),U1=z(dh),X1=z(uh),G1=z(oh),Y1=z(cu),q1=z(iu),tr="max(0.075em, 1.25px)",pe={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},Po=pe.held.domSize,Oo=pe.modelled.domSize,hh=N`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Po} + 0.14em);
  }
`,fh=N`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Oo} + 0.14em);
  }
`;function ph(e){return N`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${pe[e].hollowDomSize} + 0.14em);
    }
  `}function Wa(e,t=!1){return t?ph(e):e==="current"?null:e==="modelled"?fh:hh}const mh=y.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Po};
  height: ${Po};
  background: ${pe.held.color};
`,gh=y.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Oo};
  height: ${Oo};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${pe.modelled.color};
`,nr=e=>N`
  position: absolute;
  right: 0;
  top: 0;
  width: ${pe[e].hollowDomSize};
  height: ${pe[e].hollowDomSize};
`,vh=y.span`
  ${nr("current")}
  border: ${tr} solid ${pe.current.color};
  border-radius: var(--radius-circle);
`,xh=y.span`
  ${nr("held")}
  border: ${tr} solid ${pe.held.color};
`,bh=y.span`
  ${nr("modelled")}
  --stroke: ${tr};
  background: ${pe.modelled.color};
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
`,yh={current:vh,held:xh,modelled:bh};function Ua({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?yh[e]:e==="modelled"?gh:mh;return a.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const wh=y.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>Wa(e??"held",t)}
`;function Fo({caption:e,kind:t="held",elsewhere:n=!1,children:o,...r}){const{anchor:s,tip:i}=gn(e);return a.jsxs(wh,{$kind:t,$elsewhere:n,...r,...s,children:[o,a.jsx(Ua,{kind:t,elsewhere:n}),e!==null&&a.jsxs(dt,{"data-unit-currency":"",children:[", ",e]}),i]})}const kh=y(Fo)`
  position: static;

  &::after {
    content: none;
  }

  & > [data-held-mark] {
    top: 3px;
    right: 3px;
  }
`,Xa=f.forwardRef(function({variant:t="default",tone:n,size:o="md",pressed:r,predictedOutcome:s,disabledReason:i,marked:l,type:c="button",...d},u){const p=Pa(d.disabled,i),m=La({label:d["aria-label"],children:d.children,disabledReason:p?i:void 0}),{disabled:v,onClick:g,children:x,...S}=d;return Fa(a.jsx(Ca,{ref:u,$variant:t,$tone:n??(t==="primary"?"go":"neutral"),$size:o,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,"data-held-button":l?"":void 0,...S,disabled:p?void 0:v,...p?{"aria-disabled":!0}:{},onClick:p?Oa:g,type:c,children:l?a.jsx(kh,{kind:l.kind,caption:l.caption,children:x}):x}),m,p)}),$h=y.span`
  display: inline-grid;
  justify-items: center;
`,_h=y.span`
  grid-area: 1 / 1;
`,Sh=y.span`
  grid-area: 1 / 1;
  visibility: hidden;

  &::before {
    content: attr(data-word);
  }
`;function jh({shown:e,reserve:t}){return a.jsxs($h,{children:[[...new Set(t)].map(n=>a.jsx(Sh,{"data-word":n,"aria-hidden":"true"},n)),a.jsx(_h,{children:e})]})}function vn(e){return"press"in e&&typeof e.press=="function"}function Mh(e){return"kind"in e?e:ua(e,void 0)}function Eh(e){const{command:t,unavailable:n,advise:o,...r}=e;return vn(t)?a.jsx(or,{...r,control:t}):a.jsx(Ga,{...r,command:t,unavailable:n,advise:o})}function Ah(e){const{command:t,unavailable:n,advise:o,...r}=e;return vn(t)?a.jsx(or,{...r,glyph:!0,control:t}):a.jsx(Ga,{...r,glyph:!0,command:t,unavailable:n,advise:o})}function Ga({command:e,unavailable:t,advise:n,...o}){const r=Kn({command:Mh(e),unavailable:t,advise:n});return a.jsx(or,{...o,control:r})}function or({control:e,glyph:t=!1,children:n,confirmLabel:o,refusedLabel:r=_a,lostLabel:s=Sa,foundLabel:i=ja,confirmAriaLabel:l,sentAriaLabel:c,blockedAriaLabel:d,pressed:u,variant:p="default",tone:m="neutral",icon:v,confirmIcon:g,onPressReady:x,size:S="md",confirmTone:E="go",tip:w,"aria-label":M,...A}){const{phase:R,isSent:j,isArmed:C,isRefused:k,isLost:H,isFound:G,isBlocked:F,isUnavailable:I,isAdvised:T,adviceText:Y,isOffline:K,refusalText:ee,foundText:ae,lossText:Q,hasUnconfirmed:ye,hasFailure:_,press:U,command:se}=e,me=se.handle,de=se.members?void 0:Cn(se),X=se.options.label,ue=o!==void 0,we=X?`${X} sent, not yet received`:"Sent, not yet received";f.useEffect(()=>{if(x)return x(()=>U(ue)),()=>x(null)},[x,U,ue]);const he=t?j?a.jsx(Ha,{"aria-hidden":"true"}):C?g??v??n:n:j?Lt:k?r:H?s:G?i:C?o:n,Re=v!==void 0&&typeof he=="string",ie=Re?a.jsx(Da,{label:he,icon:C?g??v:v}):!t&&!Re&&typeof he=="string"&&he!==n?a.jsx(Ch,{children:he}):he,q=[o,Lt,r,s,i],te=!t&&v===void 0&&typeof n=="string"&&q.every(Se=>Se===void 0||typeof Se=="string"),$e=q.filter(Se=>Se!==void 0).reduce((Se,He)=>He.length>Se.length?He:Se,Lt),Pe=ba()&&me.railed===!0?null:k?ee:H?Q:G?ae:j?we:null,ft=u===!0||C||k,_e=Th({restTone:p==="primary"?m:"neutral",filled:ft,isRefused:k,isFound:G,isArmed:C,confirmTone:E,tone:m}),Ve=F&&!I,ne=Ve?t?"blocked":void 0:H||t&&(k||ye||_)?"warn":void 0,ke=t?Ph:Lh,le=me.sendStatus,Oe=[w,Y,le===void 0?null:ya(le)].filter(Boolean).join(`
`),Be=K?[w,Jo].filter(Boolean).join(`
`):Oe||void 0;return a.jsxs(a.Fragment,{children:[a.jsx(Ee,{text:ae??ee??Q??(j?we:Be),children:a.jsx(ke,{type:"button","data-command-edge":ne,$tone:_e,$variant:p,$fit:Re,$size:S,$pressed:ft,$armed:C,$blocked:Ve,"aria-pressed":u,"aria-disabled":F||K||void 0,"data-unconfirmed":ye?"true":void 0,"data-failed":_?"true":void 0,"data-command-phase":R,"data-stream":K?"down":void 0,"data-predicted":Ve?void 0:wa(le)??(T?"at-risk":void 0),"data-gate":Ve?"blocked":T?"advised":Ma(me,de)?.undetermined?"undetermined":void 0,"aria-label":(k?ee??void 0:H?Q??void 0:G?ae??M:F?d??M:j?c??we:C?l:M)??(Re?he:void 0),onClick:()=>U(o!==void 0),"data-rest-label":te?n:void 0,"data-armed-label":te?$e:void 0,...A,children:te?a.jsx(Ih,{children:ie}):ie})}),a.jsx(ht,{visuallyHidden:!0,children:Pe})]})}function V1(e){const{command:t,...n}=e;return vn(t)?a.jsx(rr,{...n,control:t}):a.jsx(Ya,{...n,command:t})}function Rh(e){const{command:t,...n}=e;return vn(t)?a.jsx(rr,{...n,glyph:!0,control:t}):a.jsx(Ya,{...n,glyph:!0,command:t})}function Ya({command:e,state:t,name:n,unavailable:o,advise:r,children:s,sentWord:i,rows:l,modelled:c,marking:d,glyph:u,...p}){const m=g=>typeof s=="function"?s(g):typeof s=="string"?s:"",v=Kn({command:{kind:"bound",handle:e.handle,args:void 0,options:e.options},toggle:{state:t,name:n??"",word:m,words:[...new Set([m(!0),m(!1)])],sentWord:i,rows:l,modelled:c,marking:d,unavailable:o,args:g=>g==null?void 0:e.toArgs(!(typeof g=="number"?g>0:g))},advise:r});return a.jsx(rr,{...p,glyph:u,control:v})}function rr({control:e,glyph:t=!1,tone:n="go",size:o="md",icon:r,tip:s,"aria-label":i,...l}){const{phase:c,isOffline:d,isRefused:u,isLost:p,isBlocked:m,isUnavailable:v,isAdvised:g,adviceText:x,refusalText:S,lossText:E,toggleView:w,hasUnconfirmed:M,hasFailure:A,press:R}=e;if(!w)return null;const{marking:j,sentence:C}=w,k=w.confirmation==="held"||w.confirmation==="modelled",H=d?Jo:m&&!v||u?S:p?E:((k?null:C)??[s,x].filter(Boolean).join(`
`))||void 0,I=m&&!v?"blocked":u||p||M||A?"warn":void 0,T=w.unavailable!==null||m,Y=w.unavailable??(m?S:null);return a.jsxs(a.Fragment,{children:[a.jsx(Ee,{text:H,children:t?a.jsx(er,{type:"button","aria-pressed":w.on,"aria-disabled":T||void 0,"aria-label":i,"data-command-phase":c,"data-stream":d?"down":void 0,"data-command-edge":I,"data-predicted":g?"at-risk":void 0,onClick:()=>R(!1),...l,children:w.confirmation==="sent"?a.jsx(Ha,{"aria-hidden":"true"}):r}):a.jsx(Xa,{type:"button",size:o,tone:w.on?n:void 0,pressed:w.on,"aria-pressed":w.on,disabled:T||void 0,disabledReason:Y??void 0,marked:j,"aria-label":i,"data-command-phase":c,"data-stream":d?"down":void 0,"data-command-edge":I,"data-predicted":g?"at-risk":void 0,onClick:()=>R(!1),...l,children:r!==void 0&&w.confirmation!=="sent"?r:a.jsx(jh,{shown:w.word,reserve:w.reserve})})}),a.jsx(ht,{visuallyHidden:!0,children:k?"":C??""})]})}function Th(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const qa=Xo`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,Ch=y.span`
  display: block;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Ih=y.span`
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
`,Lh=y(Ca)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&N`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${qa} 1s var(--ease-emphasis) infinite;
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
`,Ph=y(er)`
  ${({$armed:e})=>e&&N`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${qa} 1s var(--ease-emphasis) infinite;
      }
    `}
  ${({$blocked:e})=>e&&N`
      opacity: 0.5;
      cursor: help;
    `}
`,No=f.forwardRef(function(t,n){return t.command!==void 0?a.jsx(Eh,{...t}):a.jsx(Xa,{ref:n,...t})}),K1=y.button`
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
`,sr=f.forwardRef(function(t,n){if(t.command!==void 0){const{command:m}=t;if("kind"in m&&m.kind==="value"?!0:vn(m)&&m.toggleView!==null){const{children:g,...x}=t;return a.jsx(Rh,{...x,icon:g})}return a.jsx(Ah,{...t})}const{pressed:o,disabledReason:r,command:s,...i}=t,l=Pa(i.disabled,r),c=La({label:i["aria-label"],children:i.children,disabledReason:l?r:void 0}),{disabled:d,onClick:u,...p}=i;return Fa(a.jsx(er,{ref:n,"aria-pressed":o,...p,disabled:l?void 0:d,...l?{"aria-disabled":!0}:{},onClick:l?Oa:u}),c,l)}),Z1=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,Oh=y.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,Q1=y.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,Fh=y.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,J1=y.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,eb=y.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,ar=N`
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
`,Nh=y.input`
  ${ar}
  width: 100%;
  ${Ra}
  &[data-command-phase] {
    /* Room for the word of a command inside the field, at its end. */
    padding-inline-end: 8ch;
  }
`,tb=f.forwardRef(function(t,n){return t.command?a.jsx(Bh,{...t,command:t.command,forwardedRef:n}):a.jsx(Va,{ref:n,...t})}),Va=y.select`
  ${ar}
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
  ${Ra}
  &[data-command-phase] {
    /* Room for the word inside the field, past the chevron. */
    padding-inline-end: calc(var(--inset-field-select-end) + 8ch);
  }

  @media (pointer: coarse) {
    padding-inline-end: var(--inset-field-select-end);
  }
`,Dh=y.span`
  position: absolute;
  inset-block: 0;
  inset-inline-end: var(--inset-field-select-end);
  display: flex;
  align-items: center;
  pointer-events: none;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
`,zh=y.div`
  position: relative;
  width: 100%;
`;function Bh({command:e,value:t,unavailable:n,forwardedRef:o,children:r,...s}){const i=Ic({command:e,unavailable:n}),[l,c]=f.useState(null),d=i.control.isSent;return f.useEffect(()=>{d||c(null)},[d]),a.jsx(Ee,{text:i.tip,children:a.jsxs(zh,{children:[a.jsx(Va,{...s,ref:o,value:l??t,...i.edge,onChange:u=>{i.inert||(c(u.target.value),i.send(u.target.value))},children:r}),a.jsx(Dh,{"aria-hidden":"true",children:i.word}),a.jsx(ht,{visuallyHidden:!0,children:i.announce})]})})}const nb=y.textarea`
  ${ar}
  width: 100%;
  resize: vertical;
`;function Hh(e){if(e===void 0)return null;const{value:t}=Go(e.magnitude,e.unit);return t===Fn?null:t}function Ka(e,t){const n=Hh(t);return n===null?e:`${e}, as of ${n}`}const ir="modelled to SCET";function Wh(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function os(e){return On(e.value)||on(e.value)?{shown:e.value,held:!1,mark:null,isStatic:On(e.value),isDeterministic:on(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:Ka(Nt(e.grade),e.asOfUt)}}function Zn(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:On(e),isDeterministic:on(e),caption:null,band:null};const n=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!on(e.value)){const o=e.reckoning.modelled;if(e.state==="held"){const s=os(e),i=e.value===void 0,l=s.held||i,c=s.caption??(i?"":null);return{...s,shown:o,held:l,mark:l?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:n}}const r=e.reckoning.beyondReceived;return{shown:o,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?ir:null,band:n}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:On(e.value),isDeterministic:on(e.value),caption:null,band:n}:e.state==="held"?{...os(e),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Za(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function Uh(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:ir}:null;if(e.state==="held"){const n=Ka(Nt(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function ob(e){return e===void 0?null:typeof e!="string"?Uh(e):{kind:"held",caption:Nt(e)}}function lr(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function rb(e,t){const n=lr(t);return n===void 0?e:{state:"held",value:e,grade:n,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}function cr(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function sb(e={}){return cr(t=>Me(t,e))}const Xh=.01;function ab({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const r=Math.abs(t(n)-t(o));return(e?Math.min(r,1-r):r)<=Xh}}}function Qa(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(r=>!n.readsAsOne(e,r))}function dr({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,r=x=>Gl(typeof x=="number"?x:x.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,i=Wh(s);if(s?.value!==void 0&&i!==void 0)return Qa(s.value,i,cr(r))?a.jsx(Fo,{"data-held":"",kind:"modelled",caption:`${ir}, last received ${r(s.value)}`,children:r(i)}):a.jsx(a.Fragment,{children:r(s.value)});const l=Zn(o,{drawsReckoning:!0}),{shown:c,held:d,mark:u,caption:p}=l,m=typeof e=="number"?e:c;if(m==null)return Fn;const v=r(m),g=Za({...l,shown:m});return d?a.jsx(Fo,{...g,kind:u??"held",caption:p,children:v}):a.jsx("span",{"data-figure":g["data-figure"],children:v})}const rs={left:!1,right:!1};function Gh(e){const[t,n]=f.useState(rs),o=f.useRef(rs);return f.useEffect(()=>{if(!e)return;const r=()=>{const l=e.scrollLeft>1,c=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===l&&o.current.right===c||(o.current={left:l,right:c},n(o.current))};r(),e.addEventListener("scroll",r,{passive:!0});const s=typeof ResizeObserver>"u"?null:new ResizeObserver(r);s?.observe(e);for(const l of Array.from(e.children))s?.observe(l);const i=new MutationObserver(()=>{for(const l of Array.from(e.children))s?.observe(l);r()});return i.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",r),s?.disconnect(),i.disconnect()}},[e]),t}const ss=y.div`
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
`;function Qn(e){const t=f.useRef(null),[n,o]=f.useState(e),[r,s]=f.useState(null);return f.useEffect(()=>{t.current!==r&&s(t.current)}),f.useEffect(()=>{if(!r||typeof ResizeObserver>"u")return;const i=new ResizeObserver(l=>{for(const c of l)c.contentRect.width>0&&c.contentRect.height>0&&o({w:Math.floor(c.contentRect.width),h:Math.floor(c.contentRect.height)})});return i.observe(r),()=>i.disconnect()},[r]),{ref:t,size:n}}const Yh='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Ja(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),r=n[o+1]??n[o-1];if(r&&r!==e){r.focus();return}const s=t.closest("[data-panel-rail-frame]"),i=s?s.parentElement?.querySelector("[data-panel-body]"):t.closest("[data-panel-body]");if(!i)return;const l=[...i.querySelectorAll(Yh)].find(c=>c!==e);if(l){l.focus();return}i.hasAttribute("tabindex")||i.setAttribute("tabindex","-1"),i.focus()}const dn=700;function ur(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const Jn={"in-transit":1/6,"awaiting-reply":1/2,due:2/3,overdue:2/3,lost:2/3};function ei(e){const t=e.reachEtaSeconds;if(e.hold&&t!==null&&t>0)return qh(e.hold);const n=ti(e);if(t===null||n===null)return Jn[e.predictedPhase];const o=n-t,r=e.replyEtaSeconds===null?1/3:2/3;return Math.max(0,Math.min(r,o/(3*n)))}function as(e){const t=ti(e);return t===null?0:Math.max(0,(1-ei(e))*3*t)}function qh(e){return Math.max(0,Math.min(1,e.outbound))/3}function ti(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function ni(e){return Vh(e).map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:t.settling==="confirmed"?1:ei(t),glyph:t.glyph??ur(t.label||t.command),...t.held?{held:!0}:{},...t.settling?{settling:t.settling,settleSeconds:t.settleSeconds??0}:{},...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function Vh(e){return e.some(t=>t.dispatchedAt!==void 0)?e.map((t,n)=>({item:t,index:n})).sort((t,n)=>(t.item.dispatchedAt??Number.NEGATIVE_INFINITY)-(n.item.dispatchedAt??Number.NEGATIVE_INFINITY)||t.index-n.index).map(({item:t})=>t):e}function ib({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||Hl(e)!=="shown"?"none":n||Wl({oneWaySeconds:Ye("s",e)})==="live"?"badge":t?"strip":"none"}const Kh={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},Zh={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function un(e){return e.waiting?"waiting for a path":Zh[e.phase]}function Qh(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Kh[e.phase]}const eo=new Set(["overdue","lost"]),Jh=180,ef=96;function oi(e){return Me(Ye("s",Math.max(0,e)))}function tf(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const nf=1;function hr(e){const t=Dl(),n=f.useRef(t);n.current=t;const[o,r]=f.useState(e),s=f.useRef({eta:e,ut:xo(t)});return f.useEffect(()=>{const i=s.current.eta;(i===null!=(e===null)||i!==null&&e!==null&&Math.abs(e-i)>=nf)&&(s.current={eta:e,ut:xo(n.current)},r(e))},[e]),f.useEffect(()=>{const i=setInterval(()=>{const{eta:l,ut:c}=s.current;if(l===null)return;const d=xo(n.current);if(d!==void 0){if(c===void 0){s.current={eta:l,ut:d};return}r(Math.max(0,l-(d-c)))}},1e3);return()=>clearInterval(i)},[]),o}function xo(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function of({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":r="In-flight commands",variant:s="inline",onDismiss:i}){const{ref:l,size:c}=Qn({w:320,h:0}),d=s==="rail"||s==="expanded"?e:e.filter(p=>!p.settling);if(s==="rail")return d.length===0?null:a.jsx(rf,{items:d,"aria-label":r});if(s==="expanded")return d.length===0?null:a.jsx(gf,{items:d,"aria-label":r,onDismiss:i});const u=n!=="auto"?n:c.w>=Jh?"full":c.w>=ef?"compact":"badge";return d.length===0?null:u==="badge"?a.jsx(sf,{ref:l,items:d,mode:t,"aria-label":r}):a.jsx(ii,{ref:l,role:"list","aria-label":r,"data-mode":t,"data-density":u,$row:o==="row",children:d.map(p=>a.jsx(af,{item:p,$compact:u==="compact"},p.id))})}const ct=8,ri=1/3;function rf({items:e,"aria-label":t}){const n=e.filter(o=>!o.settling);return a.jsx(lf,{role:"img","aria-label":`${t}: ${n.length} in flight`,children:e.map(o=>{const r=Math.max(0,Math.min(1,o.progress??Jn[o.phase]));return a.jsx(ai,{...o.settling?{"data-role":"settling","data-settling":o.settling}:{"data-role":"glow","data-phase":o.phase,...o.held?{"data-held":""}:{}},$settling:o.settling,style:{"--dot-colour":si(o),"--dot-progress":r,"--settle-seconds":o.settleSeconds??0}},o.id)})})}const sf=function({ref:t,items:n,mode:o,"aria-label":r}){const s=hr(tf(n)),i=n.some(c=>eo.has(c.phase)),l=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${oi(s)}`;return a.jsx(Ee,{text:n.map(c=>c.label).join(`
`),focusable:!0,children:a.jsx(ii,{ref:t,role:"group","aria-label":`${r}: ${l}`,"data-mode":o,"data-density":"badge",$row:!1,children:a.jsxs(li,{$phase:i?"overdue":"in-transit",children:[a.jsx(ci,{"aria-hidden":"true",$pulse:!i,children:"↑"}),a.jsxs(di,{children:[n.length,s!==null&&a.jsxs(a.Fragment,{children:[" · ",a.jsx(dr,{value:Math.max(0,s)})]})]})]})})})};function af({item:e,$compact:t}){const n=hr(e.etaSeconds),o=eo.has(e.phase),r=n===null?`${e.label}, ${un(e)}`:`${e.label}, ${oi(n)}`;return a.jsxs(li,{$phase:e.phase,role:"listitem",...t?{"aria-label":r,title:r}:{},children:[a.jsx(ci,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Qh(e)}),!t&&a.jsx(_f,{children:e.label}),a.jsx(di,{children:n===null?un(e):a.jsx(dr,{value:Math.max(0,n)})})]})}const Dn=Xo`
  from { opacity: 1; }
  to { opacity: 0; }
`,lf=y.div`
  position: relative;
  display: block;
  width: 100%;
  height: 16px;
  /* Clips the part of each dot above the strip, whatever box holds it. */
  overflow: hidden;
`,cf=14;function df(e,t,n){const o=Math.min(cf,(n-ct)/Math.max(1,t)),r=Math.ceil(e/2)*(e%2===1?1:-1),s=n/2+r*o;return Math.max(0,Math.min(n-ct,s-ct/2))}function is({items:e,height:t}){return a.jsx(ff,{role:"group","aria-label":"Commands on the rail",style:{height:t},children:e.map((n,o)=>{const r=Math.max(0,Math.min(1,n.progress??Jn[n.phase]));return a.jsx(Ee,{text:n.settling?null:`${n.label}, ${un(n)}`,announce:!1,focusable:!n.settling,children:a.jsx(ai,{...n.settling?{"data-role":"settling","data-settling":n.settling,"aria-hidden":!0}:{role:"img","aria-label":`${n.label}, ${un(n)}`,"data-role":"glow","data-phase":n.phase,...n.held?{"data-held":""}:{}},"data-lane":o,$settling:n.settling,$lane:!0,style:{"--dot-colour":si(n),"--dot-progress":r,"--settle-seconds":n.settleSeconds??0,"--lane-top":`${df(o,e.length,t)}px`}})},n.id)})})}function si(e){return e.settling==="confirmed"?"var(--color-accent-fg)":e.held||e.settling==="failed"||eo.has(e.phase)?be.warn:"var(--color-accent-fg)"}const uf=e=>e==="confirmed"?N`
        transition: left var(--settle-time) var(--ease-linear);
        animation: ${Dn} ${dn}ms var(--ease-standard) var(--settle-time) forwards;
      `:e==="failed"?N`
          animation: ${Dn} ${dn}ms var(--ease-standard) forwards;
        `:null,hf=Xo`
  from { top: ${-ct*(1-ri)}px; }
  to { top: var(--lane-top); }
`,ff=y.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,ai=y.span`
  position: absolute;
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  top: ${-ct*(1-ri)}px;
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
    ${({$settling:e})=>uf(e)}
    ${({$lane:e,$settling:t})=>e&&!t&&N`
        animation: ${hf} var(--duration-base) var(--ease-entrance);
      `}
  }
`,pf=54,rn=5,mf=3,fr=pf-8-rn,zn=60,ls={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:be.warn,lost:be.warn};function gf({items:e,"aria-label":t,onDismiss:n}){const[o,r]=f.useState(null),s=Gh(o),i=s.left||s.right;return a.jsxs(xf,{"data-command-list":"",children:[a.jsx(bf,{ref:r,role:"list","aria-label":t,...i?{tabIndex:0,"data-scrolls":""}:{},children:e.map(l=>a.jsx(vf,{item:l,onDismiss:n},l.id))}),a.jsx(ss,{$position:"left",$visible:s.left}),a.jsx(ss,{$position:"right",$visible:s.right})]})}function vf({item:e,onDismiss:t}){const n=e.glyph??ur(e.label),o=e.settling==="confirmed"?ls["awaiting-reply"]:e.held||e.settling==="failed"?be.warn:ls[e.phase],r=Math.max(0,Math.min(1,(e.progress??Jn[e.phase])*1.5)),s=eo.has(e.phase)&&!!t&&!e.settling,i=`${e.label}, ${un(e)}`;return a.jsxs(yf,{role:"listitem","aria-label":i,...e.settling?{"data-settling":e.settling,"aria-hidden":!0}:{"data-phase":e.phase,...e.held?{"data-held":""}:{}},$settling:e.settling,style:{color:o,"--settle-seconds":e.settleSeconds??0},children:[a.jsx(Ee,{text:s?`Dismiss ${e.label}`:i,announce:!1,children:a.jsxs(wf,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:l=>{Ja(l.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[a.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&a.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),a.jsx(kf,{children:a.jsx("span",{className:"fill",style:{"--fill-ratio":r}})})]})}const xf=y.div.attrs({role:"group"})`
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
    ${fr}px + ${rn}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
  /* Holds the overflow glows over the row's edges. */
  position: relative;
`,bf=y.div`
  display: flex;
  flex-direction: row;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${mf}px;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  /* Native scrollbar hidden: the edge glows show scroll state. */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${mn}
`,yf=y.div`
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @media (prefers-reduced-motion: no-preference) {
    ${({$settling:e})=>e==="confirmed"?N`
            animation: ${Dn} ${dn}ms var(--ease-standard)
              var(--settle-time) forwards;
            .fill {
              transition:
                height var(--settle-time) var(--ease-linear),
                width var(--settle-time) var(--ease-linear);
            }
          `:e==="failed"?N`
              animation: ${Dn} ${dn}ms var(--ease-standard) forwards;
            `:null}
  }

  @container (min-width: ${zn}px) {
    flex-direction: column;
  }
`,wf=y.div`
  --s: ${fr}px;
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

  @container (min-width: ${zn}px) {
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
`,kf=y.div`
  --s: ${fr}px;
  position: relative;
  flex: 0 0 ${rn}px;
  width: ${rn}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${zn}px) {
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
  @container (min-width: ${zn}px) {
    .fill {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: calc(var(--fill-ratio, 0) * 100%);
      height: auto;
    }
  }
`,ii=y.div`
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
`,$f={"in-transit":N`
    color: var(--color-text-primary);
  `,"awaiting-reply":N`
    color: var(--color-text-muted);
  `,due:N`
    color: var(--color-text-muted);
  `,overdue:N`
    color: ${De.warn};
  `,lost:N`
    color: ${De.warn};
  `},li=y.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>$f[e]}
`,ci=y.span`
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
`,_f=y.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,di=y.span`
  flex: 0 0 auto;
`,Sf="Awaiting first signal";function lb({expectedIn:e}){const t=e??0,n=Number.isFinite(t)&&t>0;return a.jsxs(a.Fragment,{children:[Sf,n&&la()&&a.jsx(jf,{total:t})]})}function jf({total:e}){return a.jsx(Mf,{seconds:hr(e)??0})}function Mf({seconds:e}){return e>0?a.jsxs(a.Fragment,{children:[" ",a.jsx(Yl,{level:"muted",children:a.jsx(dr,{value:Math.ceil(e)})})]}):null}const pr=e=>N`
  --fit-box: ${e};
`,Ef=e=>N`
  --fit-mask: ${e};
`;function ui(e){return e==="go"||e==="info"?"caution":e}function Bn({tone:e,size:t="md",live:n=!1,report:o,held:r,children:s,...i}){const l=lr(r),c=l===void 0?e:ui(e),d=c===void 0||c==="neutral"?void 0:c,u=o?.label??(typeof s=="string"?s:"");Yo(o?{id:o.id,severity:d??"go",label:u}:null);const p=n?{role:"status","aria-live":"polite"}:{},m=l===void 0?null:Nt(l),v=Reflect.get(i,"data-tooltip")!==void 0,{anchor:g,tip:x}=gn(v?null:m);return a.jsxs(a.Fragment,{children:[a.jsxs(Cf,{$severity:d,$size:t,...p,...g,...i,children:[s,m!==null&&a.jsxs(a.Fragment,{children:[a.jsx(If,{"aria-hidden":"true","data-held-mark":""}),a.jsxs(dt,{"data-unit-currency":"",children:[", ",m]})]})]}),x]})}const Af=N`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,Rf={go:N`
    background: transparent;
    border-color: ${be.go};
    color: ${De.go};
  `,info:N`
    background: transparent;
    border-color: ${be.info};
    color: ${De.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${be.info} 40%, transparent);
  `,caution:N`
    background: transparent;
    border-color: ${be.caution};
    color: ${De.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${be.caution} 45%, transparent);
  `,warn:N`
    background: transparent;
    border-color: ${be.warn};
    color: ${De.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${be.warn} 55%, transparent);
  `,nogo:N`
    background: transparent;
    border-color: ${be.nogo};
    color: ${De.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${be.nogo} 65%, transparent);
  `,offline:N`
    background: transparent;
    border-color: ${be.offline};
    color: ${De.offline};
  `},Tf={sm:N`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:N`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},Cf=y.span`
  display: inline-block;
  position: relative;
  /* Sized by its own text, never stretched to a taller flex sibling. */
  align-self: center;
  ${pr("badge")}
  border: 1px solid;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;

  border-radius: var(--radius-pill);

  ${({$size:e})=>Tf[e]}
  ${({$severity:e})=>e===void 0?Af:Rf[e]}
`,If=y.span`
  position: absolute;
  top: 0;
  right: 0;
  width: ${pe.held.domSize};
  height: ${pe.held.domSize};
  transform: translate(45%, -45%);
  background: ${pe.held.color};
  box-shadow: 0 0 0 1px var(--color-surface-panel);
  pointer-events: none;
`,Lf={},Pf={byKey:new Map,unaddressed:void 0,separate:!1};function cs(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Of(e,t){if(e.separate!==t.separate||!cs(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!cs(o,t.byKey.get(n)))return!1;return!0}function Ff(e,t,n,o){const r=new Map;e!==void 0&&r.set(qo(e),n);for(const[s,i]of Object.entries(t??{}))i!==void 0&&r.set(Kl(s),i);return{byKey:r,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function Nf(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Df(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function zf(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,i)=>s.depth-i.depth);let r=!1;for(const s of o)s.resettle(n)&&(r=!0);if(r)for(const s of t)s()}}}function Bf(e){const t=new Map,n=new Map,o=new Set,r=e?.root??zf();let s=Pf;const i=c=>{let d;for(const u of c){const p=u.position;p!==void 0&&(d===void 0||p.base>d.base)&&(d=p)}return d?.rung},l={root:r,depth:e===void 0?0:e.depth+1,hold(c,d,u){const p=t.get(c);if(u===void 0)p!==void 0&&(p.delete(d),p.size===0&&t.delete(c));else{if(Df(p?.get(d),u))return;p===void 0?t.set(c,new Map([[d,u]])):p.set(d,u)}e===void 0?r.sweep(c):e.hold(c,d,u)},settled:c=>n.get(c),readsAsOneFigure:c=>o.has(c),setPolicy(c){if(!Of(s,c)){s=c;for(const d of t.keys())r.sweep(d)}},resettle(c){const d=[...t.get(c)?.values()??[]],u=e?.settled(c),p=s.byKey.get(c)??s.unaddressed??Lf,m=p.format??u?.format??i(d),v=p.as??u?.as,g=p.decimals??(s.separate?Zl(d,{format:m,as:v}):u?.decimals),x=m===void 0&&v===void 0&&g===void 0?void 0:{...m!==void 0&&{format:m},...v!==void 0&&{as:v},...g!==void 0&&{decimals:g}},S=s.separate&&fa(d,{format:m,as:v,decimals:g}),E=S!==o.has(c);return S?o.add(c):o.delete(c),Nf(n.get(c),x)?E:(x===void 0?n.delete(c):n.set(c,x),!0)},attach(){r.family.add(l);for(const c of t.keys())r.sweep(c)},detach(){r.family.delete(l)}};return r.family.add(l),l}const mr={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},hn=f.createContext(mr);function Hf(){return f.useContext(hn)!==mr}function cb({children:e,of:t,pins:n,format:o,as:r,decimals:s,separate:i=!1}){const l=f.useContext(hn),[c]=f.useState(()=>Bf(l===mr?void 0:l));return f.useLayoutEffect(()=>(c.attach(),()=>c.detach()),[c]),f.useLayoutEffect(()=>{c.setPolicy(Ff(t,n,{format:o,as:r,decimals:s},i))},[c,t,n,o,r,s,i]),a.jsx(hn.Provider,{value:c,children:e})}function Wf(e,t={}){const n=f.useContext(hn),o=f.useId(),r=da(e),s=e?.unit,l=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||r===null?void 0:qo(s),c=l===void 0||r===null||s===void 0||ql(s)===void 0?void 0:Vl(r,s),d=c?.base,u=c?.rung;return f.useLayoutEffect(()=>{if(!(l===void 0||r===null||s===void 0))return n.hold(l,o,{reading:r,unit:s,...d!==void 0&&u!==void 0&&{position:{base:d,rung:u}}}),()=>n.hold(l,o,void 0)},[n,o,l,r,s,d,u]),f.useSyncExternalStore(n.root.subscribe,()=>l===void 0?void 0:n.settled(l),()=>{})}function db(e,t={}){const n=f.useContext(hn),r=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||da(e)===null||e===null||e===void 0?void 0:qo(e.unit);return f.useSyncExternalStore(n.root.subscribe,()=>r===void 0?!1:n.readsAsOneFigure(r),()=>!1)}const Uf=nc,Xf={sci:ch,rep:lh},hi=y.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,Gf=y.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?N`
          position: relative;
          ${Wa(e,t)}
        `:""}
`,Yf=y.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,qf=y(dt)`
  user-select: none;
`,fi=y(dt)`
  user-select: none;
`,Vf=" ";function Kf(e,t,n,o){if(t===void 0)return null;const r=m=>Go(m.magnitude,m.unit,{...n,format:o}).value,s=(m,v)=>r(v.minus(m)),i=fa([t.lo,t.hi],{...n,format:o});if(!Qa(e,[t.lo,t.hi],cr(r)))return null;const l=s(t.lo,t.value),c=s(t.value,t.hi),d=m=>/^[-+\u2212]?[0.,\s]*$/.test(m);if(!i&&d(l)&&d(c))return null;const u=r(t.value)===r(e),p={...n,format:o};return{oneFigure:i,plusMinus:!i&&u&&l===c?c:null,lo:r(t.lo),hi:r(t.hi),loSaid:Ur(t.lo,p),hiSaid:Ur(t.hi,p),kind:t.kind}}function Zf(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function bo({token:e,className:t,spaced:n}){const o=Ql(e,Jl(e));if(o==="")return null;const r=ec(o),s=tc(o),i=Xf[s?.head??o],l=Uf.has(o),c=r!==void 0;return a.jsxs(a.Fragment,{children:[n&&!l?Vf:null,a.jsx(Ee,{text:r,announce:!1,children:a.jsxs(hi,{$attached:l,$icon:i!==void 0,className:t,"data-unit":e,children:[i?a.jsxs(a.Fragment,{children:[a.jsx(i,{size:"1em"}),s&&a.jsxs("span",{"aria-hidden":"true",children:["/",s.rest]})]}):c?a.jsx("span",{"aria-hidden":"true",children:o}):o,c&&a.jsxs(fi,{"data-unit-word":"",children:[" ",r]})]})})]})}function ds({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:r,marked:s,elsewhere:i,...l}){const c=Zn(e,{drawsReckoning:r}),d=s!=null&&!c.held&&c.shown!=null?{...c,held:!0,mark:s.kind,caption:s.caption}:c,{shown:u,held:p,mark:m,band:v}=d,g=i!=null&&i!==""&&u!=null,x=m??(g?"current":null),S=g?[d.caption,i].filter(Boolean).join("; "):d.caption,E=Wf(u,l),w=Hf(),M=o===!0&&w,A=E===void 0?l:{...E,...l},R=Go(u?.magnitude,u?.unit,A),j=u==null||v===null||!p?null:Kf(u,Nl(v,u.unit),A,R.rung),{anchor:C,tip:k}=gn(Zf(S,j));return e!==void 0||t===void 0?a.jsxs(Gf,{className:n,$mark:x,$elsewhere:g,...Za(d),...C,children:[R.value,!M&&a.jsx(bo,{token:R.symbol,spaced:!0}),j!==null&&a.jsxs(Yf,{"data-unit-band":"",children:[j.oneFigure?a.jsxs(a.Fragment,{children:[" (",a.jsx("span",{"aria-hidden":"true",children:"~"}),a.jsx(fi,{"data-unit-word":"",children:"approximately "}),j.lo]}):j.plusMinus===null?` (${j.lo} to ${j.hi}`:` ± ${j.plusMinus}`,!M&&a.jsx(bo,{token:R.symbol,spaced:!0}),j.plusMinus===null?")":null]}),x!==null&&a.jsx(Ua,{kind:x,elsewhere:g}),S!==null&&a.jsxs(qf,{"data-unit-currency":"",children:[", ",S]}),k]}):typeof t!="string"?a.jsx(hi,{$attached:!1,$icon:!1,className:n,children:t}):a.jsx(bo,{token:t,className:n,spaced:!1})}const Qf={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},Jf={center:"center",start:"flex-start",baseline:"baseline"},ep=f.forwardRef(function({justify:t="between",align:n="center",gap:o,wrap:r=!1,children:s,...i},l){return a.jsx(tp,{ref:l,$justify:t,$align:n,$gap:o,$wrap:r,...i,children:s})}),tp=y.div`
  display: flex;
  align-items: ${({$align:e})=>Jf[e]};
  justify-content: ${({$justify:e})=>Qf[e]};
  gap: ${({$gap:e})=>e?Ct[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function gr(e){const t=lr(e.held);return t===void 0?{label:e.label,tone:e.tone,title:e.title}:{label:e.label,tone:ui(e.tone),title:e.title??`${e.label}: ${Nt(t)}`,held:t}}const np=.72,op=.76;function Do({size:e,kind:t="held",figureSize:n}){return a.jsx("tspan",{dy:n===void 0?-e*.55:-(n*np-e*op),fontSize:e,fill:pe[t].color,"data-held-mark":"","data-reckoning-mark":t,children:pe[t].glyph})}function ub({end:e,x1:t,y1:n,x2:o,y2:r}){return a.jsx("line",{"data-bound":e,x1:t,y1:n,x2:o,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function pi(e,t){return t===null?e:`${e}, ${t}`}function rp(e){return e===null?{}:{"data-currency-in-name":""}}function hb({x:e,y:t,size:n,children:o}){return a.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function us(e,t){return t?.state!=="held"?e:{...t,value:e}}function lt(e){return e.kind==="continuous"?"ribbon":"dot"}function sp(e){return e.delivery==="acked"}function ap(e){return e.direction==="command"?"outbound":"inbound"}function mi(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function to(e){return`${e.direction}/${e.kind}/${e.delivery}`}const ip={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function vr(e){return ip[to(e)]??null}const hs=new Set;function gi(e,t){const n=to(e);if(hs.has(n))return;hs.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;la()?Ol.error(o):console.error(o)}const vi=16,Pt=vi/2,zo=5.5,lp=2,cp=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function xr(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function dp(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/lp)),Math.max(2,Math.round(o)))}function up(e,t,n){if(e.length===0)return"";const o=xr(e,t,n);if(!(o>0))return`M0.00,${Pt.toFixed(2)}`;const r=dp(e,t,o),s=o/n*(t/r),i=e.length-1,l=[];for(let c=0;c<=r;c++){const d=Math.min(c/r*o,o),u=Math.max(0,Math.round((c-.5)*s)),p=Math.min(i,Math.round((c+.5)*s));let m=0;for(let g=u;g<=Math.max(u,p);g++)m=Math.max(m,cp(e[i-Math.min(g,i)]));const v=(c%2===0?-1:1)*m*zo;l.push(`${d.toFixed(2)},${(Pt+v).toFixed(2)}`)}return`M${l.join(" L")}`}const hp=.25;function fp(e,t,n){const o=xr(e,t,n);if(!(o>0))return"";const r=e.length-1,s=Math.max(1,Math.min(Math.round(Math.min(e.length,t)),Math.ceil(o/hp))),i=o/n*(t/s),l=[],c=[];for(let d=0;d<s;d++){const u=Math.max(0,Math.round(d*i)),p=Math.min(r,Math.max(u,Math.round((d+1)*i)-1));let m=0,v=0;for(let w=u;w<=p;w++){const M=e[r-w];M&&(Number.isFinite(M.lo)&&(m=Math.min(m,Math.max(-1,M.lo))),Number.isFinite(M.hi)&&(v=Math.max(v,Math.min(1,M.hi))))}const g=d/s*o,x=(d+1)/s*o,S=(Pt-v*zo).toFixed(2),E=(Pt-m*zo).toFixed(2);l.push(`${g.toFixed(2)},${S}`,`${x.toFixed(2)},${S}`),c.unshift(`${x.toFixed(2)},${E}`,`${g.toFixed(2)},${E}`)}return`M${l.join(" L")} L${c.join(" L")} Z`}const br=.05;function fn(e){return typeof e=="number"&&Number.isFinite(e)&&e>0}const fs=.02,ps=1.5,pp=.25,Hn=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],no=100,tn=30,mp=1.5,Le=2,gp=4,tt=tn-Le-gp,Qe=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(no-n*2),qt=e=>Le+(1-Math.max(0,Math.min(1,e)))*tt,xi=e=>e==="inline"?mp:0;function fb(e="inline"){const t=xi(e);return(no-t*2)/3}function bi({tags:e,who:t}){return gi(e,t),a.jsx("g",{"data-rail-unrepresented":to(e),"data-rail-entry":t})}function vt(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function ms(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(c=>c.age>=t);if(n===-1)return[];const o=e[n-1],r=e[n],s=r.age-o.age||1,i=(t-o.age)/s,l=o.value+i*(r.value-o.value);return[{age:t,value:l},...e.slice(n)]}function gs(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(d=>d.age>t),r=e.slice(0,o),s=e[o],i=r[r.length-1];if(!i)return[{age:t,value:s.value}];const l=s.age-i.age||1,c=(t-i.age)/l;return[...r,{age:t,value:i.value+c*(s.value-i.value)}]}const vp=.25;function sn(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>o.age)return null;if(t===o.age)return o.value;for(let r=1;r<e.length;r++){const s=e[r];if(t<=s.age){const i=e[r-1],l=(t-i.age)/(s.age-i.age||1);return i.value+l*(s.value-i.value)}}return o.value}function xp(e,t,n){const o=t.length>0&&t[t.length-1].age>=n-pp,r=e.map(l=>{if(sn(t,l.age)===null)return!1;let c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;const u=g=>{g!==null&&(c=Math.min(c,g),d=Math.max(d,g))},p=l.age-ps,m=l.age+ps;let v=sn(t,m);if(v===null){if(!o)return!1;v=t[t.length-1].value}u(sn(t,p)),u(v);for(const g of t)g.age>p&&g.age<m&&u(g.value);return l.value<c-fs||l.value>d+fs}),s=[];let i=0;for(let l=1;l<=r.length;l++)l<r.length&&r[l]===r[i]||(s.push({from:i,to:Math.min(l,r.length-1),off:r[i]}),i=l);return s}function bp({stream:e,span:t,index:n,padX:o,oneT:r,twoT:s}){const l=`var(${Hn[n%Hn.length]})`,c=f.useId(),d=`cds-ramp-${c}-${n}`,u=`cds-fill-${c}-${n}`,p=`cds-tail-${c}-${n}`,m=vr(e.tags);if(m!=="continuous-strip")return m===null?a.jsx(bi,{tags:e.tags,who:e.id}):null;const v=sp(e.tags),g=v?e.inTransit:gs(e.inTransit,r),x=g.map(T=>({x:Qe(T.age,t,o),y:qt(T.value)}));if(x.length===0)return null;const E=(v?[]:gs(ms(e.inTransit,r),r*(1+vp))).map(T=>({x:Qe(T.age,t,o),y:qt(T.value)})),w=E.length>1&&E[E.length-1].x>E[0].x,M=`${vt(x)} L${x[x.length-1].x.toFixed(2)},${(Le+tt).toFixed(2)} L${x[0].x.toFixed(2)},${(Le+tt).toFixed(2)} Z`,A=v?ms(e.echo,s):[],R=A.map(T=>({x:Qe(T.age,t,o),y:qt(T.value)})),j=A.map(T=>({x:Qe(T.age,t,o),y:qt(sn(e.inTransit,T.age)??T.value)})),C=xp(A,e.inTransit,t),k=g[g.length-1].age,H=sn(A,k),G=A.filter(T=>T.age>k),F=(H===null||G.length===0?G:[{age:k,value:H},...G]).map(T=>({x:Qe(T.age,t,o),y:qt(T.value)})),I=F.length>1?`${vt(F)} L${F[F.length-1].x.toFixed(2)},${(Le+tt).toFixed(2)} L${F[0].x.toFixed(2)},${(Le+tt).toFixed(2)} Z`:null;return a.jsxs("g",{"data-stream-group":e.id,"data-return-leg":v,children:[a.jsxs("defs",{children:[a.jsxs("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:x[0].x,y1:"0",x2:Math.max(x[x.length-1].x,x[0].x+1),y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.10"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0.40"})]}),a.jsxs("linearGradient",{id:u,x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.22"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]}),w&&a.jsxs("linearGradient",{id:p,gradientUnits:"userSpaceOnUse",x1:E[0].x,y1:"0",x2:E[E.length-1].x,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.40"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]})]}),a.jsx("path",{"data-role":"area",d:M,fill:`url(#${u})`,stroke:"none"}),I&&a.jsx("path",{"data-role":"echo-area",d:I,fill:`url(#${u})`,stroke:"none"}),a.jsx("path",{"data-role":"commanded","data-stream":e.id,d:vt(x),fill:"none",stroke:`url(#${d})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),w&&a.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:vt(E),fill:"none",stroke:`url(#${p})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),C.map(T=>T.off?a.jsxs(f.Fragment,{children:[a.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:vt(R.slice(T.from,T.to+1)),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),a.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:vt(j.slice(T.from,T.to+1)),fill:"none",stroke:l,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]},T.from):T.to>T.from&&a.jsx("path",{"data-role":"echo","data-stream":e.id,d:vt(R.slice(T.from,T.to+1)),fill:"none",stroke:l,strokeWidth:"0.8",strokeLinecap:"round"},T.from))]})}function yp({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${f.useId()}`,o=e.tags,r=vr(o);if(r!=="continuous-strip")return r===null?a.jsx(bi,{tags:o,who:e.id}):null;const s=(no-t*2)/3,i=e.wave,l=i??e.amplitudes,c=e.spanSamples??l.length,d=i!==void 0?fp(i,c,s):"",u=i!==void 0?d:up(e.amplitudes,c,s);if(u===""&&!(i!==void 0&&i.length>0))return null;const p=Math.max(xr(i??e.amplitudes,c,s),1),m=`var(${mi(o)})`,v=ap(o)==="outbound",g=v?0:2*s;return a.jsxs("g",{"data-ribbon-group":e.id,"data-ribbon-zone":g===0?"outgoing":"confirmed",transform:`translate(${t+g} ${Le}) scale(1 ${tt/vi})`,children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:v?0:p,y1:"0",x2:v?p:0,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:m,stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:m,stopOpacity:"0.1"})]})}),i!==void 0?a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-role":"ribbon-axis",x1:"0",x2:p,y1:Pt,y2:Pt,stroke:`url(#${n})`,strokeWidth:"1",vectorEffect:"non-scaling-stroke"}),d!==""&&a.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d,fill:`url(#${n})`,stroke:"none"})]}):a.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:u,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function wp({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:r}){const s=[...e,...t].find(l=>l.oneWaySeconds!==null),i=s?.oneWaySeconds??null;return!s||!fn(i)?null:a.jsx(yi,{oneWay:i,streams:e,ribbons:t,ariaLabel:n,variant:o,delayReading:r})}function yi({oneWay:e,streams:t=[],ribbons:n=[],ariaLabel:o="Controls in flight",variant:r,delayReading:s}){const i=`cds-divfade-${f.useId()}`,l=s?.state==="held",c=l?Zn(s??null).caption:null,{anchor:d,tip:u}=gn(c),p=e>=br;if(!p&&n.length===0)return null;const m=3*e,v=e,g=2*e,x=xi(r),S=Qe(v,m,x),E=Qe(g,m,x),w=t.every(M=>M.inTransit.length===0&&M.echo.length===0)&&n.every(M=>M.amplitudes.length===0);return a.jsxs(kp,{"data-oneway":e,"data-variant":r,$variant:r,...d,children:[a.jsxs($p,{$variant:r,$quiet:w,role:"img","aria-label":pi(o,c),...rp(c),viewBox:`0 0 ${no} ${tn}`,preserveAspectRatio:"none",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:i,gradientUnits:"userSpaceOnUse",x1:"0",y1:Le,x2:"0",y2:Le+tt,children:[a.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(p?t:[]).map((M,A)=>a.jsx(bp,{stream:M,span:m,index:A,padX:x,oneT:v,twoT:g},M.id)),n.map(M=>a.jsx(yp,{ribbon:M,padX:x},M.id)),a.jsx("line",{"data-divider":"t",x1:S,x2:S,y1:Le,y2:Le+tt,stroke:`url(#${i})`,strokeWidth:"0.4"}),a.jsx("line",{"data-divider":"2t",x1:E,x2:E,y1:Le,y2:Le+tt,stroke:`url(#${i})`,strokeWidth:"0.4"}),r==="inline"&&a.jsxs("g",{"data-role":"hover-labels",children:[a.jsxs("text",{x:S,y:Le-.4,textAnchor:"middle",fontSize:"2",children:[Me(Ye("s",e),{decimals:1}),l&&a.jsx(Do,{size:1.2})]}),a.jsxs("text",{x:E,y:Le-.4,textAnchor:"middle",fontSize:"2",children:[Me(Ye("s",2*e),{decimals:1}),l&&a.jsx(Do,{size:1.2})]}),a.jsx("text",{x:Qe(e/2,m,x),y:tn-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),a.jsx("text",{x:Qe(1.5*e,m,x),y:tn-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),a.jsx("text",{x:Qe(2.5*e,m,x),y:tn-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),r==="expanded"&&a.jsxs(a.Fragment,{children:[a.jsxs(_p,{"aria-hidden":"true",children:[a.jsxs("span",{children:["outgoing ",a.jsx("b",{children:"0"})]}),a.jsxs("span",{children:["echo"," ",a.jsx("b",{children:a.jsx(ds,{value:us(Ye("s",e),s),decimals:1})})]}),a.jsxs("span",{children:["confirmed"," ",a.jsx("b",{children:a.jsx(ds,{value:us(Ye("s",2*e),s),decimals:1})})]})]}),a.jsxs(Sp,{"aria-hidden":"true",children:[(p?t:[]).map((M,A)=>a.jsxs("span",{children:[a.jsx("i",{style:{background:`var(${Hn[A%Hn.length]})`}}),M.label]},M.id)),n.map(M=>a.jsxs("span",{"data-role":"legend-ribbon",children:[a.jsx("i",{style:{background:`var(${mi(M.tags)})`}}),M.label]},M.id)),p&&t.length>0&&a.jsxs("span",{"data-role":"legend-deviation",children:[a.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),u]})}const kp=y.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,$p=y.svg`
  display: block;
  width: 100%;
  /* The rail height is the band the Panel reserves, not a size the graph chose. */
  height: ${({$variant:e})=>e==="rail"?"var(--panel-rail-band)":e==="expanded"?"86px":"40px"};

  /* Strokes are scaled by 30/16 against the stretched 30-unit viewBox, so the trace is a real pixel wide in the band. */
  ${({$variant:e})=>e==="rail"?`[data-role="commanded"],
         [data-role="echo"],
         [data-role="deviation-expected"] { stroke-width: 1.5; }
         [data-role="deviation-actual"] { stroke-width: 1.88; }`:""}


  /* The closed strip is too thin to carry the marks; they stay in the drawing so the lines still change appearance at them. */
  ${({$variant:e})=>e==="rail"?"[data-divider] { display: none; }":""}

  [data-role="hover-labels"] {
    opacity: ${({$quiet:e})=>e?1:0};
    fill: var(--color-text-muted);
    font-family: var(--font-family-mono);
  }
  &:hover [data-role="hover-labels"] {
    opacity: 1;
  }
`,_p=y.div`
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
`,Sp=y.div`
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
`;function vs({handle:e,handles:t,"aria-label":n,mode:o,density:r,orientation:s,variant:i="inline"}){const l=t??(e?[e]:[]),c=l.length===1?l[0]:null,d=c?vr(c.tags):null;if(c&&d===null)return a.jsx(jp,{tags:c.tags,who:c["aria-label"]});if(c&&d!=="in-flight-row"){const v=c,g=v.effectiveDelaySeconds;return fn(g)?a.jsx(wp,{streams:v.streams??[],ribbons:v.ribbons??[],delayReading:v.delayReading,"aria-label":n??v["aria-label"],variant:i}):null}const u=ni(l.flatMap(v=>v.inFlight)),m=l.some(v=>v.dismiss)?v=>l.find(g=>g.inFlight.some(x=>x.id===v))?.dismiss?.(v):void 0;return a.jsx(of,{items:u,"aria-label":n,mode:o,density:r,orientation:s,variant:i,onDismiss:m})}function jp({tags:e,who:t}){return gi(e,t??"unnamed handle"),a.jsx("span",{hidden:!0,"data-rail-unrepresented":to(e)})}function wi(e){const n=bt(e)||e.command||"The command",o=e.code===void 0?void 0:ca(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function ki(e){return`${bt(e)||e.command||"The command"}: never sent. Safe to re-send.`}function $i(e){return`${bt(e)||e.command||"The command"}: ${e.warning}`}const Mp={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed",warned:"Commands likely to be lost"},Ep={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command",warned:"warned command"};function Ap(e,t){return e.kind==="refused"?It(e.entries[t]):e.kind==="found"?Zo(e.entries[t]):e.kind==="failed"?wi(e.entries[t]):e.kind==="warned"?$i(e.entries[t]):e.kind==="undelivered"?ki(e.entries[t]):Qo(e.entries[t])}function Rp(e){return e.entries.map((t,n)=>{const o=bt(t);return{id:t.id,subject:o||t.command||"",sentence:Ap(e,n),dismissLabel:`Dismiss ${o||Ep[e.kind]}`,tags:t.tags}})}function jt(e){const{kind:t,onDismiss:n,live:o=!0}=e,r=e["aria-label"]??Mp[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const i=Rp(e).map(l=>a.jsxs(Ip,{role:o?void 0:"listitem",$tone:s,children:[lt(l.tags)==="ribbon"?a.jsx(Pp,{$tone:s,children:l.subject}):a.jsx(Lp,{"aria-hidden":"true",$tone:s,children:ur(l.subject)}),a.jsx(Op,{children:l.sentence}),n&&a.jsx(sr,{type:"button","data-dismiss":"",onClick:c=>{Ja(c.currentTarget),n(l.id)},"aria-label":l.dismissLabel,children:"✕"})]},l.id));return o?a.jsx(Cp,{forwardedAs:"div","aria-label":r,"data-command-list":"",additionsOnly:!0,children:i}):a.jsx(Tp,{role:"list","aria-label":r,"data-command-list":"",children:i})}const _i=N`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,Tp=y.div`
  ${_i}
`,Cp=y(ht)`
  ${_i}
  &:empty {
    margin: 0;
  }
`,Ip=y.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>be[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${be[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,Lp=y.span`
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  min-width: 34px;
  padding: var(--inset-glyph);
  align-self: stretch;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: ${({$tone:e})=>De[e]};
  border: 1px solid ${({$tone:e})=>be[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${be[e]} 14%, var(--color-surface-raised))`};
`,Pp=y.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>De[e]};
`,Op=y.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`;function Tt(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,o)=>Tt(n,t[o]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const n=[...t];return[...e].every(o=>{const r=n.findIndex(s=>Tt(o,s));return r===-1?!1:(n.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[n,o]of e)if(!t.has(n)||!Tt(o,t.get(n)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const n=e,o=t,r=new Set;for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of r)if(!Tt(n[s],o[s]))return!1;return!0}return!1}function oo(e,t,n,o){const[r,s]=f.useState(o),i=f.useRef(t);i.current=t;const l=f.useRef(n);l.current=n;const c=f.useRef(r);return c.current=r,f.useEffect(()=>{if(!e)return;let d=c.current;const u=()=>{const g=i.current(e);l.current(d,g)||(d=g,s(g))};u(),e.addEventListener("scroll",u,{passive:!0});const p=new ResizeObserver(u);p.observe(e);for(const g of Array.from(e.children))p.observe(g);let m;const v=new MutationObserver(g=>{if(g.some(x=>x.type==="childList")){for(const x of Array.from(e.children))p.observe(x);u();return}m===void 0&&(m=requestAnimationFrame(()=>{m=void 0,u()}))});return v.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style"]}),()=>{e.removeEventListener("scroll",u),p.disconnect(),v.disconnect(),m!==void 0&&cancelAnimationFrame(m)}},[e]),r}function Fp(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function Si(e){return oo(e,Fp,Object.is,!1)?0:void 0}function Np({label:e,selected:t,count:n,onToggle:o}){return a.jsxs(Dp,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[a.jsx("span",{children:e}),n!==void 0&&a.jsx(zp,{children:n})]})}const Dp=y.button`
  ${pr("chip")}
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
`,zp=y.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function Bp({value:e,onChange:t,clearLabel:n="Clear search",className:o,...r}){const s=f.useRef(null);return a.jsxs(Hp,{className:o,children:[a.jsx(Wp,{...r,ref:s,type:"search",value:e,onChange:i=>t(i.target.value)}),e!==""&&a.jsx(Up,{children:a.jsx(sr,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:a.jsx(Ba,{size:"var(--icon-size-control)"})})})]})}const Hp=y.div`
  position: relative;
  display: flex;
  align-items: center;
`,Wp=y(Nh)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,Up=y.span`
  position: absolute;
  right: 0;
  display: inline-flex;
`;function pb({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=oc(e),r=[...new Set(o)],[s,i]=f.useState(()=>new Set),[l,c]=f.useState(""),d=f.useId(),u=g=>{i(x=>{const S=new Set(x);return S.has(g)?S.delete(g):S.add(g),S})},p=[...s,l].filter(g=>g.length>0).map(g=>g.toLowerCase()),m=a.jsxs(pa,{gap:"related-packed",children:[a.jsxs(Oh,{children:[a.jsx(Fh,{htmlFor:d,children:t}),a.jsx(Bp,{id:d,value:l,placeholder:n,onChange:c})]}),r.length>0&&a.jsx(ep,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:r.map(g=>a.jsx(Np,{label:g,selected:s.has(g),onToggle:()=>u(g)},g))})]}),v={matches:g=>{const x=g.toLowerCase();return p.every(S=>x.includes(S))},active:p.length>0};return ji.set(v,m),v}const ji=new WeakMap;function Mi(e){return ji.get(e)??null}function mb({filter:e,children:t,fill:n=!1}){return a.jsxs(pa,{gap:"related-dense",fill:n,children:[Mi(e),t]})}const Xp={accent:"var(--color-accent-fg)",warn:"var(--color-warn-mark)"},Gp=24,Yp=96;function qp({children:e,padded:t,caption:n,footer:o,strip:r,shape:s="rounded",edgeCue:i,...l}){const c=s==="circle",d=!c||i===void 0?[]:[i].flat(),u=!c&&r!==void 0&&r!==null&&r!==!1;return a.jsxs(Vp,{$padded:t&&!u,$stacked:u,$circle:c,$cued:d.length>0,"data-shape":c?"circle":void 0,...l,children:[u?a.jsxs(a.Fragment,{children:[a.jsx(t0,{$padded:t,children:e}),a.jsx(n0,{"data-framed-display-strip":"",children:r})]}):c&&i!==void 0?a.jsx(Kp,{children:e}):e,d.length>0&&a.jsx(e0,{cues:d}),n!=null&&a.jsx(Ai,{children:n}),o!=null&&a.jsx(o0,{children:o})]})}const Vp=y.div`
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
`,Kp=y.div`
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
`,We=12,xs=1,Zp=3,Ei=1,Qp=100*Ei/200,bs=e=>e*Math.PI/180;function Jp(e,t=Qp){const n=Math.min(Math.max(e.span??90,1),359),o=Math.min(Math.max(Number.isFinite(e.grow)?e.grow:0,0),1),r=50,i=50+(xs+(Zp-xs)*o)*t,l=bs(e.angle-n/2),c=bs(e.angle+n/2),d=(p,m)=>`${(50+p*Math.cos(m)).toFixed(3)} ${(50-p*Math.sin(m)).toFixed(3)}`,u=n>180?1:0;return`M${d(r,l)}A${r} ${r} 0 ${u} 0 ${d(r,c)}L${d(i,c)}A${i} ${i} 0 ${u} 1 ${d(i,l)}Z`}function e0({cues:e}){const{ref:t,size:n}=Qn({w:100+2*We,h:100+2*We}),o=(100+2*We)/Math.max(n.w,1),r=Ei*o;return a.jsx("div",{ref:t,"aria-hidden":"true",style:{position:"absolute",left:`${-We}%`,top:`${-We}%`,width:`${100+2*We}%`,height:`${100+2*We}%`,pointerEvents:"none"},children:a.jsx("svg",{"aria-hidden":"true","data-edge-cues":"",viewBox:`${-We} ${-We} ${100+2*We} ${100+2*We}`,style:{display:"block",width:"100%",height:"100%",overflow:"visible"},children:e.map(s=>a.jsx("path",{"data-edge-cue":"",d:Jp(s,r),fill:Xp[s.tone]},`${s.angle}-${s.tone}`))})})}const t0=y.div`
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
`,n0=y.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${Gp}px;
  max-height: ${Yp}px;
  min-width: 0;
  overflow: hidden;
`,Ai=y.div`
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
`,o0=y(Ai)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,ys={width:160,height:72},r0=2.5,s0=420;function gb({width:e,height:t,plotHasData:n}){return!n&&e>=ys.width&&t>=ys.height?"center":e>=s0&&e>=t*r0?"beside":"inline"}const a0={overlay:N`
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
  `};function i0({placement:e,role:t="status",children:n,...o}){return a.jsx(l0,{$placement:e,role:t,...o,children:n})}const l0=y.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${rc.regular};
  pointer-events: none;

  ${({$placement:e})=>a0[e]}
`,Wn=8;function Ri(e){const t=[{cols:1,rows:e}];for(let n=2;n<=e;n++){const o=Math.ceil(e/n);o<(t.at(-1)?.rows??e)&&t.push({cols:n,rows:o})}return t}function Ti(e){return e===0?"0px":`(${e}px + var(--gap-related))`}const Ci=(e,t)=>`calc(${e} * ${t} + ${(e-1)*Wn}px)`,c0=(e,t,n)=>`calc(${e} * (${t} + ${n+Wn}px) + ${(e-1)*Wn}px)`;function d0(e,t,n,o,r){const s=Ti(n),i=Ri(e).slice(1).map(({cols:c,rows:d})=>`
  @container grid-squares-width (width >= ${Ci(c,t)}) {
    --cell: calc((100cqw - ${c-1} * ${o}) / ${c});
    --rows: ${d};
  }`).join(""),l=c=>`calc(var(--rows) * (${c} + ${s}) + (var(--rows) - 1) * ${o})`;return r!==void 0?`
  --cell: 100cqw;
  --rows: ${e};
  ${i}
  min-height: var(--grid-squares-height, ${l(r)});
`:`
  --cell: 100cqw;
  --rows: ${e};
  ${i}
  min-height: var(--grid-squares-height, clamp(${l(`min(var(--cell), ${t}, 100cqh - ${s})`)}, 100cqh, ${l("var(--cell)")}));
`}function u0(e,t,n,o){const r=Ri(e),s=o!==void 0;return r.slice(1).map(({cols:i,rows:l},c)=>`
  @container grid-squares (aspect-ratio >= ${(.88*i/r[c].rows).toFixed(2)}) and ((width >= ${Ci(i,t)}) or (height < ${c0(s?l:r[c].rows,o??t,n)})) {
    --cols: ${i};
    --rows: ${l};
  }`).join("")}function h0(e,t){const n=`
  & > * > * {
    --grid-square-heading: ${e===0?"0px":`calc${Ti(e)}`};
  }`;return e===0||t===void 0?n:`${n}
  @container (width < ${t}px) or (height < ${t+e+Wn}px) {
    & > * > * {
      --grid-square-heading: 0px;
    }
    & > * [data-grid-square-heading] {
      display: none;
    }
  }`}function f0(e){const t=new Set;return e.map(n=>{const o=n.inFlight.filter(r=>t.has(r.id)?!1:(t.add(r.id),!0));return o.length===n.inFlight.length?n:{...n,inFlight:o}})}function Vt(e){const t=new Set;return e.filter(n=>t.has(n.id)?!1:(t.add(n.id),!0))}function p0(e){const t=new Map;for(const n of e)for(const o of n.warnings??[]){const r=`${o.command}\0${o.label}\0${o.warning}`;t.has(r)||t.set(r,{...o,id:r,tags:n.tags})}return[...t.values()]}const ws=new Map,m0=new Set(["overdue","lost"]);function g0(e){const t=new Set,n=new Set;for(const o of e){for(const r of o.refusals??[])t.add(r.id);for(const r of o.failures??[])t.add(r.id);for(const r of o.undelivered??[])t.add(r.id);for(const r of o.founds??[])(r.outcome==="ran"?n:t).add(r.id)}return{failed:t,ran:n}}function v0(e){const t=new Map;for(const d of e)for(const u of d.inFlight)u.settling||t.set(u.id,{handleId:d.id,row:u});const{failed:n,ran:o}=g0(e),[r,s]=f.useState({last:ws,settling:ws}),i=[...r.last].filter(([d])=>!t.has(d));if(i.length>0||t.size!==r.last.size||[...t].some(([d,u])=>r.last.get(d)?.row!==u.row)){const d=i.map(([u,p])=>{const m=n.has(u)||m0.has(p.row.predictedPhase)&&!o.has(u)?"failed":"confirmed",v=m==="confirmed"?as(p.row):0;return[u,{...p,row:{...p.row,settling:m,settleSeconds:v}}]});s({last:t,settling:d.length===0?r.settling:new Map([...r.settling,...d])})}const c=f.useRef(new Map);return f.useEffect(()=>{const d=c.current;for(const[u,p]of r.settling){if(d.has(u))continue;const m=setTimeout(()=>{d.delete(u),s(v=>{const g=new Map(v.settling);return g.delete(u),{...v,settling:g}})},(p.row.settleSeconds??0)*1e3+dn);d.set(u,m)}},[r.settling]),f.useEffect(()=>{const d=c.current;return()=>{for(const u of d.values())clearTimeout(u)}},[]),r.settling.size===0?e:e.map(d=>{const u=[...r.settling.values()].filter(p=>p.handleId===d.id&&!t.has(p.row.id)).map(p=>p.row.settling==="confirmed"&&n.has(p.row.id)?{...p.row,settling:"failed",settleSeconds:0}:p.row.settling==="failed"&&o.has(p.row.id)?{...p.row,settling:"confirmed",settleSeconds:as(p.row)}:p.row);return u.length===0?d:{...d,inFlight:[...d.inFlight,...u]}})}function x0(e){if(lt(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return fn(t)?n>0||(t??0)>=br&&o>0:!1}return e.inFlight.length>0}function Ii({tiny:e}={}){const t=vc(),n=Vo();f.useEffect(()=>n?xc(n):void 0,[n]);const o=f0(v0(t)).filter(x0),r=p0(t),s=Vt(t.flatMap(_=>(_.refusals??[]).map(U=>({...U,tags:_.tags})))),i=Vt(t.flatMap(_=>(_.losses??[]).map(U=>({...U,tags:_.tags})))),l=Vt(t.flatMap(_=>(_.founds??[]).map(U=>({...U,tags:_.tags})))),c=Vt(t.flatMap(_=>(_.undelivered??[]).map(U=>({...U,tags:_.tags})))),d=Vt(t.flatMap(_=>(_.failures??[]).map(U=>({...U,tags:_.tags})))),u=s.length+c.length+d.length,p=o.length>0||u>0||i.length>0||l.length>0||r.length>0,[m,v]=f.useState(!1),[g,x]=f.useState(!1),[S,E]=f.useState(!1),w=m||g&&!S;f.useEffect(()=>{p||(v(!1),x(!1),E(!1))},[p]);const M=f.useId(),A=[...o.filter(_=>lt(_.tags)==="ribbon"),...o.filter(_=>lt(_.tags)!=="ribbon")],R=o.some(_=>lt(_.tags)==="ribbon"),j=A.filter(_=>lt(_.tags)!=="ribbon"),C=o.find(_=>fn(_.effectiveDelaySeconds))?.effectiveDelaySeconds??null,k=w&&!R&&fn(C)&&C>=br,H=ni(o.filter(_=>lt(_.tags)!=="ribbon").flatMap(_=>_.inFlight)),F=t.some(_=>_.dismiss&&(_.refusals?.length??0)>0)?_=>{for(const U of t)U.refusals?.some(se=>se.id===_)&&U.dismiss?.(_)}:void 0,T=t.some(_=>_.dismiss&&(_.losses?.length??0)>0)?_=>t.find(U=>U.losses?.some(se=>se.id===_))?.dismiss?.(_):void 0,K=t.some(_=>_.dismiss&&(_.undelivered?.length??0)>0)?_=>t.find(U=>U.undelivered?.some(se=>se.id===_))?.dismiss?.(_):void 0,ae=t.some(_=>_.dismiss&&(_.failures?.length??0)>0)?_=>{for(const U of t)U.failures?.some(se=>se.id===_)&&U.dismiss?.(_)}:void 0,ye=t.some(_=>_.dismiss&&(_.founds?.length??0)>0)?_=>{for(const U of t)U.founds?.some(se=>se.id===_)&&U.dismiss?.(_)}:void 0;return a.jsxs(b0,{"data-panel-rail-frame":"",$tiny:e,$hasContent:p,onMouseEnter:()=>{E(!1),x(!0)},onMouseLeave:()=>x(!1),children:[t.length>0&&a.jsxs(ht,{visuallyHidden:!0,additionsOnly:!0,children:[s.map(_=>a.jsxs("span",{children:[It(_)," "]},`refusal:${_.id}`)),i.map(_=>a.jsxs("span",{children:[Qo(_)," "]},`loss:${_.id}`)),c.map(_=>a.jsxs("span",{children:[ki(_)," "]},`undelivered:${_.id}`)),d.map(_=>a.jsxs("span",{children:[wi(_)," "]},`failure:${_.id}`)),l.map(_=>a.jsxs("span",{children:[Zo(_)," "]},`found:${_.id}`)),r.map(_=>a.jsx("span",{children:$i(_)},`warning:${_.id}`))]}),p?a.jsxs(w0,{"data-panel-rail":"","data-grown":w,"data-pinned":m,"data-suppress-hover":S,onKeyDown:_=>{_.key==="Escape"&&m&&(_.stopPropagation(),v(!1),E(!0))},children:[w&&H.length>0&&!R&&!k&&a.jsx(ks,{children:a.jsx(is,{items:H,height:_0})}),a.jsx(Ee,{text:!w&&H.length>0?`In flight: ${H.filter(_=>!_.settling).map(_=>_.label).join(", ")}`:null,children:a.jsx(k0,{type:"button","aria-expanded":m,"aria-controls":M,"aria-label":"Signal-delay detail",onClick:()=>{v(_=>{const U=!_;return U||E(!0),U})},children:a.jsx(E0,{"aria-hidden":"true",hidden:!w,children:"▲"})})}),a.jsxs(S0,{id:M,"data-panel-rail-detail":"",children:[k&&C!==null&&a.jsx(yi,{oneWay:C,variant:"expanded",ariaLabel:"Delay detail"}),A.filter(_=>!w||lt(_.tags)==="ribbon").map(_=>a.jsx(vs,{handle:_,variant:w?"expanded":"rail","aria-label":_["aria-label"]??(w?"Delay detail":void 0)},_.id)),w&&j.length>0&&a.jsx(vs,{handles:j,variant:"expanded","aria-label":"Commands in flight"},"queue"),!w&&(u>0||i.length>0||l.length>0||r.length>0)&&a.jsxs(j0,{children:[u>0&&a.jsx(yo,{children:u===1?"1 command failed":`${u} commands failed`}),i.length>0&&a.jsx(yo,{children:i.length===1?"1 command unconfirmed":`${i.length} commands unconfirmed`}),r.length>0&&a.jsx(yo,{children:r.length===1?"1 warning":`${r.length} warnings`}),l.length>0&&a.jsx(M0,{children:l.length===1?"1 unconfirmed command answered":`${l.length} unconfirmed commands answered`})]})]}),w&&H.length>0&&(R||k)&&a.jsx(ks,{"data-over-graph":"true",children:a.jsx(is,{items:H,height:$0})})]}):null,w&&r.length>0&&a.jsx(jt,{kind:"warned",entries:r,live:!1}),w&&s.length>0&&a.jsx(jt,{kind:"refused",entries:s,onDismiss:F,live:!1}),w&&i.length>0&&a.jsx(jt,{kind:"lost",entries:i,onDismiss:T,live:!1}),w&&c.length>0&&a.jsx(jt,{kind:"undelivered",entries:c,onDismiss:K,live:!1}),w&&d.length>0&&a.jsx(jt,{kind:"failed",entries:d,onDismiss:ae,live:!1}),w&&l.length>0&&a.jsx(jt,{kind:"found",entries:l,onDismiss:ye,live:!1})]})}const b0=y.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,y0=N`
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
`,w0=y.div`
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
    ${y0}
  }
`,k0=y.button`
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

  ${mn}

  &[aria-expanded="true"] {
    pointer-events: none;
  }

`,$0=86,_0=40,ks=y.div`
  pointer-events: none;

  &[data-over-graph="true"] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`,S0=y.div`
  display: contents;
`,yo=y.span`
  color: ${De.warn};
`,j0=y.span`
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
`,M0=y.span`
  color: var(--color-info-text);
`,E0=y.span`
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
`,Li=f.createContext(null);function vb({badges:e,children:t}){return a.jsx(Li.Provider,{value:e,children:t})}function A0(){return f.useContext(Li)}function Pi({severity:e,count:t=1}){const n=t>1;return a.jsx(R0,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${cn[e]}`:cn[e],$mark:be[e],$digits:n?String(t).length:1,children:n&&a.jsx(T0,{$fill:To[e],$ink:ha[e],children:a.jsx(C0,{"aria-hidden":"true",children:a.jsx("text",{x:"50%",y:"50%",dy:"0.365em",textAnchor:"middle",children:t})})})})}const $s="8px",R0=y.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${$s};
  /* The count's own size, so the width below can be counted in its digits. Digits this size are six pixels tall, which centre in the eight-pixel dot on whole pixels; at seven they are five, and one engine places the baseline half a pixel above or below the middle. */
  font-size: 8px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:$s};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,T0=y.span`
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
`,C0=y.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: currentColor;
`,I0=()=>()=>{},_s=()=>sc;function Oi(){const e=ma();return f.useSyncExternalStore(e?e.subscribe:I0,e?e.getBreakdown:_s,e?e.getBreakdown:_s)}const L0=()=>()=>{},Ss=()=>null;function P0(){const e=ma();return f.useSyncExternalStore(e?e.subscribe:L0,e?e.getSummary:Ss,e?e.getSummary:Ss)}const yr=N`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,O0=12;function F0(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function N0(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const r=o<e?t-O0:t;if(n[o]<=r)return o}return n.length-1}function D0(e,t,n){const[o,r]=f.useState(0),s=f.useRef(o);s.current=o;const i=[t,...n].join(`
`),l=f.useCallback(()=>{const c=e.current,d=i.split(`
`);if(!c||d.length<2){s.current!==0&&(s.current=0,r(0));return}const u=d.map(m=>F0(c,m)),p=N0(s.current,c.clientWidth,u);p!==s.current&&(s.current=p,r(p))},[e,i]);return f.useLayoutEffect(()=>{l()},[l]),f.useEffect(()=>{const c=e.current;if(!c||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>l());return d.observe(c),()=>d.disconnect()},[e,l]),{index:o,compacted:o>0}}const z0=24;function B0(e,t,n,o,r=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&r?!(t>n+z0):n>t}function js(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const r=e.cloneNode(!0);n!==void 0&&(r.textContent=n),Object.assign(r.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),r.setAttribute("aria-hidden","true"),o.insertBefore(r,e.nextSibling);const s=r.getBoundingClientRect().width;return o.removeChild(r),s}const H0={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function Kt(e){return Number.parseFloat(e)||0}function W0(e,t,n,o){const[r,s]=f.useState(!1),i=f.useRef(r);i.current=r;const l=f.useRef(void 0),c=f.useRef(void 0),d=f.useRef(!1),u=f.useRef(o);u.current=o;const p=f.useCallback(()=>{const v=e.current;if(!v)return;const g=getComputedStyle(v),x=v.getBoundingClientRect().width-Kt(g.paddingLeft)-Kt(g.paddingRight),S=js(t.current,{},u.current),E=js(n.current,H0),w=n.current?.closest("[data-panel-aside-expand]")?.parentElement,M=w?getComputedStyle(w):null,A=S===0||E===0?S+E:S+Kt(g.columnGap)+Kt(M?.paddingLeft??"")+Kt(M?.paddingRight??"")+E,R=i.current,j=x>0&&c.current!==void 0&&x<c.current;R&&j&&(d.current=!0);const C=B0(R,x,A,l.current,d.current);C!==R&&(d.current=C&&j),x>0&&(c.current=x),A>0&&(l.current=A),C!==i.current&&(i.current=C,s(C))},[e,t,n]),m=f.useRef({title:null,aside:null,observer:null});return f.useLayoutEffect(()=>{const v=t.current,g=n.current,x=m.current;if(x.observer===null||x.title!==v||x.aside!==g){x.observer?.disconnect(),x.title=v,x.aside=g,x.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>p());for(const S of[v,g])S&&x.observer?.observe(S,{subtree:!0,childList:!0,characterData:!0,attributes:!0});p();return}x.observer.takeRecords().length>0&&p()}),f.useEffect(()=>{const v=m.current;return()=>{v.observer?.disconnect(),v.observer=null}},[]),f.useEffect(()=>{const v=e.current;if(!v||typeof ResizeObserver>"u")return;const g=new ResizeObserver(()=>p());return g.observe(v),n.current&&g.observe(n.current),()=>g.disconnect()},[e,n,p]),r}const Fi=f.createContext("full"),U0=Fi.Provider;function xb(){return f.useContext(Fi)}const ro=f.createContext(null);function Ni({children:e}){const[t,n]=f.useState(null),o=f.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return a.jsx(ro.Provider,{value:o,children:e})}function X0({children:e}){return a.jsx(Ni,{children:e})}const Di=`
  & > [${va}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,Un=y.div`
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
  ${({$hoverTitle:e})=>e?mn:""}
  /* A hand-composed panel can put sections straight in here, so this box owns the leftover height. */
  ${Di}
`,G0=y.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${yr}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,zi=f.forwardRef(function({compact:t,children:n,...o},r){const s=f.useRef(null),i=typeof n=="string"?n:"",l=t===void 0||i===""?Y0:typeof t=="string"?[t]:t,{index:c,compacted:d}=D0(s,i,l);return a.jsx(Ee,{text:d?i:void 0,children:a.jsx(G0,{...o,ref:u=>{if(s.current=u,typeof r=="function"){r(u);return}r&&(r.current=u)},"aria-label":d?i:void 0,children:c===0?n:l[c-1]})})}),Y0=[],q0=y.div`
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
`,V0=y.div`
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
`,K0=y.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,Z0=y.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,Q0=y.details`
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
`,J0=120;function Bi(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${cn[n.severity]}`:`${cn[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function Hi({title:e,compactTitle:t,aside:n,toolbar:o,...r}){const s=Oi(),i=f.useRef(null),l=f.useRef(null),c=f.useRef(null),d=W0(i,l,c,typeof e=="string"?e:void 0),[u,p]=f.useState(!1),[m,v]=f.useState(!1),g=f.useRef(null),x=f.useRef(null),S=f.useRef(null),E=f.useCallback(()=>{g.current!==null&&clearTimeout(g.current),g.current=null},[]);f.useEffect(()=>{d||(p(!1),v(!1))},[d]),f.useEffect(()=>E,[E]);const w=d&&(u||m);f.useEffect(()=>{if(!w)return;const j=k=>{k.key==="Escape"&&x.current?.contains(document.activeElement)&&(k.stopPropagation(),E(),v(!1),p(!1),S.current?.focus())},C=k=>{x.current?.contains(k.target)||(E(),v(!1),p(!1))};return document.addEventListener("keydown",j,!0),document.addEventListener("pointerdown",C,!0),()=>{document.removeEventListener("keydown",j,!0),document.removeEventListener("pointerdown",C,!0)}},[w,E]);const M=d?Bi(s):null,{anchor:A,tip:R}=gn(w?null:M);return a.jsxs(q0,{ref:i,"data-panel-header":"",...r,children:[a.jsxs(V0,{children:[e!==void 0&&a.jsx(zi,{ref:l,compact:t,children:e}),a.jsx(K0,{"aria-hidden":"true",children:a.jsx(Bn,{children:null})})]}),n!==void 0&&a.jsx(Z0,{children:a.jsxs(Q0,{ref:x,"data-panel-aside-expand":"","data-hovering":d&&m?"":void 0,$collapsed:d,open:d?u:!0,onToggle:j=>{d&&(p(j.currentTarget.open),j.currentTarget.open||v(!1))},onPointerEnter:j=>{!d||j.pointerType==="touch"||(E(),v(!0))},onPointerLeave:j=>{j.pointerType!=="touch"&&(E(),g.current=setTimeout(()=>{g.current=null,v(!1)},J0))},children:[a.jsxs("summary",{ref:S,"data-tooltip":A["data-tooltip"],onPointerDown:A.onPointerDown,onPointerUp:A.onPointerUp,onFocus:A.onFocus,onBlur:A.onBlur,"aria-description":M??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(j=>`${j.count} ${cn[j.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(j=>a.jsx(Pi,{severity:j.severity,count:j.count},j.severity)),a.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),R,a.jsx(U0,{value:d?"collapsed":"full",children:a.jsx("div",{"data-panel-aside-full":"",ref:c,children:n})})]})}),o!==void 0&&a.jsx(Wi,{children:o})]})}const Wi=y.div`
  ${pr("panel-toolbar")}
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
`,Ui="44px",Xi=`scroll-padding-block: ${Ui};`,em=y.div`
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
  ${Xi}
  ${mn}
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
  ${({$loneFrame:e})=>e?`@container (width < ${tm}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${Di}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${va}] {
           min-height: 0;
         }`:""}
`,tm="25rem";function Gi({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...r}){const i=f.useContext(ro)?.registerScroller,[l,c]=f.useState(null),d=f.useCallback(p=>{i?.(p),c(p)},[i]),u=Si(l);return a.jsx(em,{ref:d,tabIndex:u,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...r,children:e})}const nm="13rem",om=y.div`
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
  & > [${ac}] {
    grid-column: 1 / -1;
  }
  /* A grid opened only to carry the augment slot, with nothing bound, takes no gap above it: a filling section reaches the body's bottom inset. */
  &:empty {
    display: none;
  }
`;function rm({children:e,hoverTitle:t}){const n=f.useRef(null),o=f.useRef(null),r=im(n,o);return a.jsx(sm,{ref:n,$fits:r,"data-panel-fit-body":"",children:a.jsx(am,{ref:o,$fits:r,$hoverTitle:t,"data-panel-fit-shifted":r&&t?"":void 0,children:e})})}const sm=y.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,am=y.div`
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
`;function im(e,t){const[n,o]=f.useState(!0);return f.useLayoutEffect(()=>{const r=e.current,s=t.current;if(!r||!s)return;const i=()=>{o(cm(lm(s),r.clientHeight))};if(i(),typeof ResizeObserver>"u")return;const l=new ResizeObserver(i),c=()=>{l.observe(r),l.observe(s);for(const u of Array.from(s.children))l.observe(u)};c();const d=new MutationObserver(()=>{c(),i()});return d.observe(s,{childList:!0}),()=>{l.disconnect(),d.disconnect()}},[e,t]),n}function lm(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function cm(e,t){return e<=t}const dm=y.div`
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
`,um=y.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${Xi}
  ${mn}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,Xn=y.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e})=>e==="top"?"top: 0;":"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: ${Ui};
  /* The audit reads the mask depth from the gradient stops, not from this height. */
  ${Ef("panel-scroll-glow")}
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
`,wr=f.forwardRef(function({children:t,framed:n,maxHeight:o,...r},s){const i=f.useRef(null),[l,c]=f.useState(null),d=f.useCallback(m=>{i.current=m,c(m)},[]);f.useImperativeHandle(s,()=>i.current);const u=oo(l,$r,_r,kr),p=Si(l);return a.jsxs(dm,{...r,$framed:n,$maxHeight:o,children:[a.jsx(um,{ref:d,tabIndex:p,"data-scroll-area-inner":"",children:t}),a.jsx(Xn,{$position:"top",$visible:u.top}),a.jsx(Xn,{$position:"bottom",$visible:u.bottom})]})});function hm(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const Ms="14rem",fm=5,pm="45%",mm=`min(${cc(1,fm).pxH}px, ${pm})`;function Es(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const gm=y.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${Es(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${Es(t,n)};`}

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
`;function vm({side:e="end",size:t,placement:n="auto",railBand:o,children:r,...s}){const{ref:i,size:l}=Qn({w:1,h:1}),c=hm(t??Ms),d=l.w<=1||c===void 0||l.w>=c*2,u=n==="below"?"block":(n==="beside"||l.w>=l.h)&&d?"inline":"block",p=t??(u==="inline"?Ms:mm);return a.jsx(gm,{ref:i,"data-panel-split":u,$axis:u,$side:e,$size:p,$railBand:o,...s,children:r})}const xm=y(wr)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,bm=y.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function Yi({children:e,...t}){return a.jsx(bm,{"data-panel-sidebar":"",...t,children:a.jsx(xm,{children:e})})}const kr={top:!1,bottom:!1};function $r(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function _r(e,t){return e.top===t.top&&e.bottom===t.bottom}const ym=y.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function qi({children:e,railBandAbove:t,...n}){const o=f.useContext(ro),r=o?.scroller??null;f.useEffect(()=>{},[o]);const s=oo(r,$r,_r,kr);return a.jsxs(ym,{...n,children:[e,a.jsx(Xn,{$position:"top",$visible:s.top&&!t}),a.jsx(Xn,{$position:"bottom",$visible:s.bottom})]})}function wm(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const bb=["sections","actions"],_n=Object.freeze({});function km({summary:e}){const t=f.useRef(e.severity),[n,o]=f.useState(0);f.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const r=Bi(Oi());return a.jsx($m,{$pulse:n,children:a.jsx(Ee,{text:r,focusable:!0,children:a.jsx(Bn,{tone:e.severity,size:"sm",children:e.label})})})}const $m=y.span`
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
`,Vi=y.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,_m=y.div`
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
`;function Sm({children:e}){const t=f.useContext(ro),n=oo(t?.scroller??null,$r,_r,kr);return a.jsx(_m,{"data-panel-sticky-top":"","data-panel-glow-top":n.top?"":void 0,children:e})}function jm({render:e}){const{ref:t,size:n}=Qn({w:0,h:0});return a.jsx(Mm,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const Mm=y.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,Em=y.div`
  flex: 1 1 100%;
  min-width: 0;
`,Am=y(Hi)`
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
`,Rm=y.div`
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
`,Tm=y(dt)`
  margin: 0;
  ${yr}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${Un}:hover &,
  ${Un}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function Sr(e){return e.held===void 0?e.label:`${e.label}: ${Nt(e.held)}`}function Cm(e){let t=null;for(const n of e){const o=gr(n),{tone:r}=o;r===void 0||r==="neutral"||(t===null||Yr(r)>Yr(t.severity))&&(t={severity:r,label:Sr(o)})}return t}function As({badges:e}){return a.jsx(a.Fragment,{children:e.map(t=>a.jsx(Im,{entry:t},t.id))})}function Im({entry:e}){const t=gr(e),{tone:n}=t;return Yo(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:Sr(t)}),null}function Lm({summary:e,announcement:t}){return a.jsxs(a.Fragment,{children:[a.jsx(Ee,{text:e.label,focusable:!0,children:a.jsx(Pm,{children:a.jsx(Pi,{severity:e.severity})})}),a.jsx(ht,{visuallyHidden:!0,assertive:!0,children:t})]})}const Pm=y.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,Om=y.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function Fm(e){return e.hoverTitle?a.jsx(Nm,{...e}):a.jsx(Ki,{...e,hoverTitleId:void 0})}function Nm(e){const t=f.useId();return a.jsx(Ki,{...e,hoverTitleId:t})}function Ki({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:r,panelToolbar:s,panelFilter:i,panelFooter:l,panelTrend:c,inactive:d,fitToSize:u,hoverTitle:p,hoverTitleId:m,panelSidebar:v,sidebarSide:g,sidebarSize:x,sidebarPlacement:S,sections:E,sectionMinWidth:w=nm,children:M,...A}){const R=A0(),j=Xr("actions"),C=Xr("sections"),k=wm(o,R),H=k.length===0?null:k.map(q=>{const te=gr(q),{label:$e,tone:qe,title:Pe}=te;return a.jsx(Ee,{text:Pe,focusable:!0,children:a.jsx(Bn,{tone:qe,held:te.held,report:qe===void 0||qe==="neutral"?void 0:{id:q.id,label:Sr(te)},children:$e})},q.id)}),G=i===void 0?s:a.jsxs(a.Fragment,{children:[s,a.jsx(Em,{children:Mi(i)})]}),F=r??null,I=F!==null&&F!=="none"&&F!=="live"?F:null;Yo(I?{id:"stream",severity:po(I),label:Gr(I)??""}:null);const T=P0(),Y=T!==null&&k.some(q=>q.id===T.id),K=I===null?null:Gr(I),ee=Y?null:T!==null?a.jsx(km,{summary:T}):I===null||K===null?null:a.jsx(Ee,{text:`Telemetry stream: ${K}`,focusable:!0,children:a.jsx(Bn,{tone:po(I),size:"sm",children:K})}),ae=T?.label??K,Q=ae===null||ae===""?"":typeof e=="string"?`${e}: ${ae}`:`Status: ${ae}`,ye=n===void 0&&ee===null&&H===null&&!j?void 0:a.jsxs(a.Fragment,{children:[n,j&&a.jsx($n,{segment:"actions",props:_n}),H,ee]}),_=T??Cm(k)??(I===null||K===null?null:{severity:po(I),label:K}),U=_?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${_.label}`:`Status: ${_.label}`,se=n===void 0&&_===null&&!j?k.length===0?void 0:a.jsx(As,{badges:k}):a.jsxs(a.Fragment,{children:[n,j&&a.jsx($n,{segment:"actions",props:_n}),a.jsx(As,{badges:k}),_!==null&&a.jsx(Lm,{summary:_,announcement:U})]}),me=d!==void 0,de=me?[]:f.Children.toArray(E),X=de.length>0,ue=M===void 0&&!C&&!u&&de.length===1&&Dm(de[0]),we=[];for(const q of de){const te=!u&&f.isValidElement(q)&&q.props.fill===!0,$e=we.at(-1);!te&&$e!==void 0&&!$e.fill?$e.nodes.push(q):we.push({fill:te,nodes:[q]})}X&&!we.some(q=>!q.fill)&&we.push({fill:!1,nodes:[]});const Ae=we.reduce((q,te,$e)=>te.fill?q:$e,-1),he=q=>Math.max(1,q.filter(te=>!(f.isValidElement(te)&&te.props.full===!0)).length),Re=[];for(const q of we){const te=Re.length;if(q.fill){Re.push(q.nodes[0]);continue}Re.push(a.jsxs(om,{$min:w,$columns:he(q.nodes),children:[q.nodes,te===Ae&&a.jsx($n,{segment:"sections",props:_n})]},`sections-${te}`))}const et=me?a.jsx(ic,{reason:d}):X?a.jsxs(a.Fragment,{children:[M,Re]}):M,ie=a.jsxs(Gi,{fitToSize:u,loneFrame:ue,hoverTitle:p,children:[a.jsxs(Sm,{children:[a.jsx(Ii,{tiny:p}),!p&&a.jsx(Am,{title:e,compactTitle:t,aside:ye,toolbar:G})]}),u?a.jsx(rm,{hoverTitle:p,children:et}):et,!X&&!me&&a.jsx($n,{segment:"sections",props:_n})]});return a.jsx(X0,{children:a.jsxs(Un,{$railTravels:!0,$hoverTitle:p,...p?{tabIndex:0,role:"group","aria-labelledby":m,"data-tiny-panel":""}:{},...A,children:[a.jsx(qi,{railBandAbove:!0,children:v===void 0||me?ie:a.jsxs(vm,{side:g,size:x,placement:S,railBand:!0,children:[ie,a.jsx(Yi,{children:v})]})}),!me&&c!==void 0&&a.jsx(jm,{render:c}),!me&&l!==void 0&&a.jsx(Vi,{children:l}),p&&a.jsxs(Rm,{"data-panel-hover-title":"",children:[a.jsx(Tm,{as:"h3",id:m,children:e}),se!==void 0&&a.jsx(Om,{children:se})]}),a.jsx(ht,{visuallyHidden:!0,children:p&&U!==void 0?"":Q})]})})}function Dm(e){if(!f.isValidElement(e)||e.type!==ga||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=f.Children.toArray(t).filter(r=>!(f.isValidElement(r)&&r.type===i0));if(n.length!==1)return!1;const[o]=n;if(!f.isValidElement(o))return!1;if(o.type===qp)return!0;if(o.type!==f.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const yb=Object.assign(Fm,{Context:Ni,Delay:Ii,Container:Un,Header:Hi,Toolbar:Wi,Footer:Vi,Title:zi,Glow:qi,Body:Gi,Section:ga,Sidebar:Yi}),zm={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function wb({cols:e,minColWidth:t,fit:n=!1,gap:o="related-dense",rowGap:r,align:s="center",squares:i=!1,squareHeadingPx:l=0,squareHeadingMinPx:c,minRowHeight:d,children:u,...p}){if(i){const m=f.Children.toArray(u).length,v=t??"120px",g=a.jsx(Um,{$count:m,$min:v,$headingPx:l,$gap:Ct[o],$rowMin:d,children:a.jsx(Xm,{$count:m,$min:v,$headingPx:l,$gap:Ct[o],$rowMin:d,$headingMin:c,"data-grid-squares":"",children:u})});return a.jsx(Hm,{$rowMin:d,...p,children:d===void 0?g:a.jsx(Wm,{children:g})})}return a.jsx(Bm,{$cols:e,$minColWidth:t,$fit:n,$gap:o,$rowGap:r,$align:s,...p,children:u})}const Bm=y.div`
  display: grid;
  align-items: ${({$align:e})=>zm[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${Ct[t]} ${Ct[e]}`:Ct[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:n})=>e||(t?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,Hm=y.div`
  container: grid-squares-width / inline-size;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  ${({$rowMin:e})=>e&&`
  flex-basis: 0;
  min-height: ${e};
`}
`,Wm=y(wr)`
  & > [data-scroll-area-inner] {
    display: flex;
    flex-direction: column;
  }
`,Um=y.div`
  container: grid-squares / size;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${({$count:e,$min:t,$headingPx:n,$gap:o,$rowMin:r})=>d0(e,t,n,o,r)}
`,Xm=y.div`
  --cols: 1;
  --rows: ${({$count:e})=>e};
  display: grid;
  flex: 1 1 0;
  min-height: 0;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
  gap: ${({$gap:e})=>e};
  ${({$count:e,$min:t,$headingPx:n,$rowMin:o})=>u0(e,t,n,o)}
  & > * {
    container-type: size;
    min-width: 0;
    min-height: 0;
  }
  ${({$headingPx:e,$headingMin:t})=>h0(e,t)}
`,Zi=.89,jr=.45;function Qi({kind:e,x:t,y:n,scale:o=1,ghost:r=!1}){const s=pe[e],i=s.canvasRadius*o,l={fill:s.color,opacity:r?jr:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const d=i*Zi;return a.jsx("rect",{x:t-d,y:n-d,width:2*d,height:2*d,...l})}const c=`${t},${n-i} ${t+i},${n+i*.8} ${t-i},${n+i*.8}`;return a.jsx("polygon",{points:c,...l})}function Ji(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function Rs(e,t,n,o,r,{ghost:s=!1,scale:i=1}={}){const l=pe[n],c=l.canvasRadius*i;if(t.save(),t.globalAlpha=s?jr:1,t.fillStyle=Ji(e,l.cssVar,l.fallback),t.beginPath(),n==="held"){const d=c*Zi;t.rect(o-d,r-d,2*d,2*d)}else t.moveTo(o,r-c),t.lineTo(o+c,r+c*.8),t.lineTo(o-c,r+c*.8),t.closePath();t.fill(),t.restore()}function kb(e,t,{held:n,modelled:o},r={}){n!==void 0&&o!==void 0&&(t.save(),t.globalAlpha=jr,t.strokeStyle=Ji(e,pe.modelled.cssVar,pe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.stroke(),t.restore()),n!==void 0&&Rs(e,t,"held",n.x,n.y,{...r,ghost:o!==void 0}),o!==void 0&&Rs(e,t,"modelled",o.x,o.y,r)}const Gn=14,Ge=4,Xe=6,Gm=6,Ts=12,Fe=6,an=8,Sn=4.5,Bo=4,Ym=12,qm=190,Vm=80;function nn(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function Km(e,t,n,o){const r=o??e,s=r.x1-r.x0,i=e.y1-e.y0,l=s>=qm&&i>=Vm,c=l||o!==void 0,d=l||o?n:n.filter(j=>!j.detail),u=s-Fe*2-Ge*2-an-Bo,p=o!==void 0,m=Math.floor(u/Xe),v=j=>nn(j.value??Fn,m-(j.currency?j.currency.length+2:0)),g=j=>{const C=j.value??Fn;if(p)return nn(j.label,m);if(l)return`${j.label} ${C}`;const k=Math.floor((u-C.length*Xe)/Xe)-1-(j.modelled?2:0),H=nn(j.label,Math.min(k,Ym));if(H!=="")return`${H} ${C}`;const G=Math.floor(u/Xe)-(j.modelled?2:0);return nn(C,G)},x=j=>(l||p)&&j.currency?j.currency:"",S=j=>x(j)?Gm+x(j).length*Xe+(j.modelled?Ts:0):j.modelled?Ts:0,E=l?0:an+Bo,w=Math.floor((s-Fe*2-Ge*2)/Xe),M=Math.max(...d.map(j=>p?E+Math.max(g(j).length*Xe,v(j).length*Xe+S(j)):E+g(j).length*Xe+S(j)),c?Math.min(t.length,w)*Xe:0),A=c?1:0,R=(d.length*(p?2:1)+A)*Gn+Ge*2;return{full:l,named:c,headingChars:w,stacked:p,rows:d,text:g,valueText:v,currencyText:x,cardW:p?s:Math.min(M+Ge*2,s-Fe*2),cardH:R,headRows:A,fits:R<=i-Fe*2}}function Zm(e,t,n,o,r){const s=(i,l)=>i>=t&&i<=t+o&&l>=n&&l<=n+r;for(let i=1;i<e.cx.length;i++){const[l,c,d,u]=[e.cx[i-1],e.cy[i-1],e.cx[i],e.cy[i]];if(![l,c,d,u].every(Number.isFinite))continue;const p=Math.max(1,Math.ceil(Math.hypot(d-l,u-c)/Gn));for(let m=0;m<=p;m++)if(s(l+(d-l)*m/p,c+(u-c)*m/p))return!0}return!1}function Mr({x:e,plot:t,heading:n,rows:o,column:r,avoid:s=[],traces:i=[]}){const l=Km(t,n,o,r),{rows:c,cardW:d,cardH:u,fits:p}=l,m=t.y0+Fe,v=c.flatMap(k=>k.y===void 0||k.y===null?[]:[k.y]),g=(k,H)=>v.every(G=>e+Sn<k||e-Sn>k+d||G+Sn<H||G-Sn>H+u),x=t.x1-e-Fe,S=x>=d||x>=e-t.x0,E=k=>Math.max(t.x0+Fe,Math.min(t.x1-Fe-d,k)),w=S?[e+Fe,e-Fe-d]:[e-Fe-d,e+Fe],M=[m,t.y1-Fe-u].flatMap(k=>w.map(H=>({cardX:E(H),cardY:k}))),A=(k,H)=>i.every(G=>!Zm(G,k,H,d,u)),R=(k,H)=>s.every(G=>k+d<G.x0||k>G.x1||H+u<G.y0||H>G.y1),j=M.find(k=>g(k.cardX,k.cardY)&&A(k.cardX,k.cardY)&&R(k.cardX,k.cardY))??M.find(k=>g(k.cardX,k.cardY)&&R(k.cardX,k.cardY))??M.find(k=>g(k.cardX,k.cardY)&&A(k.cardX,k.cardY))??M.find(k=>g(k.cardX,k.cardY)),C=p?r?{cardX:r.x0,cardY:r.y0+Fe}:j:void 0;return{layout:l,place:C}}function $b(e){return Mr(e).place!==void 0}function Qm(e){const{layout:t,place:n}=Mr(e);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+t.cardW,y1:n.cardY+t.cardH}}function Jm({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:i}){const{layout:l,place:c}=Mr({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:i}),{full:d,named:u,headingChars:p,stacked:m,rows:v,text:g,valueText:x,currencyText:S,cardW:E,cardH:w,headRows:M}=l,A=c!==void 0,R=c?.cardX??0,j=c?.cardY??0,C=k=>k+Ge+(d?0:an+Bo);return a.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[a.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),v.map(k=>k.y===void 0||k.y===null?null:a.jsx("circle",{cx:e,cy:k.y,r:3.5,fill:k.color,stroke:"var(--color-text-primary)",strokeWidth:1},k.id)),A&&a.jsxs("g",{"data-plot-crosshair-card":"",children:[a.jsx("rect",{x:R,y:j,width:E,height:w,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),u&&a.jsx("text",{x:R+Ge,y:j+Ge+10,fill:"var(--color-text-muted)",fontSize:10,children:nn(n,p)}),v.map((k,H)=>{const G=m?2:1,F=j+Ge+(H*G+M)*Gn+10,I=F+(m?Gn:0);return a.jsxs("g",{"data-plot-crosshair-row":k.id,children:[!d&&a.jsx("rect",{x:R+Ge,y:F-8,width:an,height:an,fill:k.color,"data-plot-crosshair-swatch":""}),a.jsx("text",{x:C(R),y:F,fill:k.value===null||m?"var(--color-text-faint)":k.color,fontSize:10,style:{whiteSpace:"pre"},children:g(k)}),m&&a.jsx("text",{x:C(R),y:I,fill:k.value===null?"var(--color-text-faint)":k.color,fontSize:10,style:{whiteSpace:"pre"},children:x(k)}),k.modelled&&a.jsx(Qi,{kind:"modelled",x:R+E-Ge-S(k).length*Xe-(S(k)?8:4),y:I-3}),S(k)&&a.jsx("text",{x:R+E-Ge,y:I,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:S(k)})]},k.id)})]})]})}const Cs=720,eg=110,tg=200,Is=56,ng=20,og=112,rg=260,sg=.4,ag=300;function ig({width:e,height:t,contentWidth:n,legendHeight:o=0,cardHeight:r=0}){const s=Math.max(og,Math.ceil(n));if((t>e||e<Cs)&&t>=tg)return{placement:"below"};if(e<Cs||t<eg||s>Math.min(rg,e*sg)||e-s<ag)return{placement:"overlay"};const l=t>=Is+o+r;return!l&&t<Is+ng+r?{placement:"overlay"}:{placement:"beside",columnWidth:s,legendBelow:!l}}const lg={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function cg(e){return lg[e]}const Mt=4,jn=3,Ho=6;function dg(e,t){return e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0}function ug(e,t){const n=(o,r)=>o>=t.x0&&o<=t.x1&&r>=t.y0&&r<=t.y1;if(e.cx.length===1)return Number.isFinite(e.cx[0])&&n(e.cx[0],e.cy[0]);for(let o=1;o<e.cx.length;o++){const[r,s,i,l]=[e.cx[o-1],e.cy[o-1],e.cx[o],e.cy[o]];if(![r,s,i,l].every(Number.isFinite))continue;const c=Math.max(1,Math.ceil(Math.hypot(i-r,l-s)/Ho));for(let d=0;d<=c;d++)if(n(r+(i-r)*d/c,s+(l-s)*d/c))return!0}return!1}function hg({plot:e,card:t,traces:n,obstacles:o}){if(t.width<=0||t.height<=0||t.width>e.x1-e.x0-Mt*2||t.height>e.y1-e.y0-Mt*2)return;const r=e.x0+Mt,s=e.x1-Mt-t.width,i=e.y0+Mt,l=e.y1-Mt-t.height;return[{x:s,y:i},{x:r,y:l},{x:s,y:l},{x:r,y:i}].find(d=>{const u={x0:d.x-jn,y0:d.y-jn,x1:d.x+t.width+jn,y1:d.y+t.height+jn};return!n.some(p=>ug(p,u))&&!o.some(p=>dg(u,p))})}function fg(e){const t=[],n=[];let o=!0;for(let r=e.y0;r<=e.y1+Ho;r+=Ho){const s=Math.min(r,e.y1);t.push(o?e.x0:e.x1,o?e.x1:e.x0),n.push(s,s),o=!o}return{cx:t,cy:n}}function pg(e,t){return e?.includes(t)??!1}function Ls(e,t){const{reckoned:n,spans:o}=e.data;return n?.some(r=>t>=r.from&&t<=r.to)?"modelled":o?.some(r=>t>=r.from&&t<=r.to&&r.status==="recorded")?"recorded":"measured"}function mg(e){const{x:t,y:n,y2:o}=e.data;let r=!0;for(let i=0;i<t.length;i++)if(!Number.isFinite(t[i])||i>0&&t[i]<t[i-1]){r=!1;break}if(r)return e;const s=t.map((i,l)=>l).filter(i=>Number.isFinite(t[i])).sort((i,l)=>t[i]-t[l]||i-l);return{...e,data:{x:s.map(i=>t[i]),y:s.map(i=>n[i]),...o?{y2:s.map(i=>o[i])}:{}}}}function gg(e,t,n){const o=e.data.x,r=e.data.y,s=Math.min(o.length,r.length);if(s===0||t<o[0]||t>o[s-1])return null;let i=0,l=s-1;for(;i<l;){const g=i+l>>1;o[g]<t?i=g+1:l=g}const c=i,d=Math.max(0,c-1);if(o[c]!==t&&c>0&&pg(e.data.breaks,c))return null;const u=t-o[d]<=o[c]-t?d:c;if(n!==void 0&&Math.abs(o[u]-t)>n)return null;const p=o[c]-o[d];if(e.readBetween&&p>0&&o[c]!==t){const g=r[d]+(r[c]-r[d])*(t-o[d])/p;return Number.isFinite(g)?{index:u,x:t,y:g,currency:Ls(e,u)}:null}const m=r[u];if(!Number.isFinite(m))return null;const v=e.data.y2?.[u];return{index:u,x:o[u],y:m,...v!==void 0&&Number.isFinite(v)?{y2:v}:{},currency:Ls(e,u)}}function vg(e){const t=new Set;for(const n of e)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&t.add(o);return[...t].sort((n,o)=>n-o)}function Ps(e,t,n){if(e.length===0)return null;if(t===null)return e[e.length-1];let o=0,r=e.length-1;for(;o<r;){const i=o+r>>1;e[i]<t?o=i+1:r=i}let s=o+n;return e[o]!==t&&n>0&&(s-=1),e[Math.max(0,Math.min(e.length-1,s))]}function xg({x:e,y:t,size:n,color:o,text:r}){const s=n/2,i=`M 0 ${-s} L ${s} ${s*.8} L ${-s} ${s*.8} Z`,l=`M -0.9 ${-s*.42} H 0.9 V ${s*.2} H -0.9 Z`,c=`M -0.9 ${s*.4} H 0.9 V ${s*.64} H -0.9 Z`;return a.jsx(Ee,{text:r,focusable:!0,children:a.jsxs("g",{role:"img","aria-label":r,"data-limit-crossing":"",transform:`translate(${e} ${t})`,children:[a.jsx("title",{}),a.jsx("circle",{r:12,fill:"transparent"}),a.jsx("path",{d:`${i} ${l} ${c}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),a.jsx("path",{d:i,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function el(e,t,n){return n==="above"?e>=t:e<=t}function bg({y:e,cx:t,cy:n,limit:o,limitY:r,bad:s,breaks:i=[],step:l=!1,minGapPx:c}){const d=(S,E,w)=>{if(!E)return{index:S,x:t[S],y:n[S],entered:!1};if(w===null)return{index:S,x:t[S],y:r,entered:!0};const M=n[S]-n[w],A=M===0?1:(r-n[w])/M;return{index:S,x:t[w]+(t[S]-t[w])*A,y:r,entered:!0}},u=new Set(i),p=[];let m=null,v=!1,g=!1,x=Number.NEGATIVE_INFINITY;for(let S=0;S<e.length;S++){if(!Number.isFinite(e[S])){m=null;continue}const E=el(e[S],o,s);if(E&&!g){const w=d(S,v,l||u.has(S)?null:m),M=p[p.length-1];M!==void 0&&w.x-x<c?M.spells++:p.push({...w,spells:1}),x=w.x}g=E,v=!0,m=S}return p}const yg=1;function wg(e,t,n,o,r){const s=n.to;if(s<1||s>=e.length)return!1;const i=o(e[s-1]),l=o(e[s]),c=r(t[s-1]),d=r(t[s]);return l>i?n.t.some((u,p)=>{const m=o(u),v=c+(d-c)*(m-i)/(l-i);return Math.abs(r(n.v[p])-v)>yg}):!1}function wo(e,t,n,o){const r=t-e;if(r===0){const s=(n+o)/2;return()=>s}return s=>n+(s-e)/r*(o-n)}function Wo(e,t,n=5){if(e===t)return Array.from({length:n},()=>e);const r=(t-e)/(n-1),s=10**Math.floor(Math.log10(r)),l=([1,2,2.5,5,10].find(m=>m*s>=r)??10)*s,c=Math.ceil(e/l)*l,d=[];for(let m=0;d.length<n;m++){const v=c+m*l;if(v>t+l*.01)break;d.push(v)}if(d.length>=2)return d;const u=Math.floor(e/l)*l,p=Math.ceil(t/l)*l;return p>u?[u,p]:[u,u+l]}function tl(e,t){const n=Math.floor(e/1e3);if(t>=36e5){const s=Math.floor(n/3600),i=Math.floor(n%3600/60),l=n%60;return`${s}:${String(i).padStart(2,"0")}:${String(l).padStart(2,"0")}`}const o=Math.floor(n/60),r=n%60;return`${o}:${String(r).padStart(2,"0")}`}function Os(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let i=!1;for(let l=0;l<e.length;l++){if(!so(e[l],t[l])){i=!1;continue}const c=n(e[l]).toFixed(2),d=o(t[l]).toFixed(2),u=!i||r.includes(l);s.push(`${u?"M":"L"}${c},${d}`),i=!0,u&&nl(e,t,l,r)&&s.push(`L${c},${d}`)}return s.join(" ")}function so(e,t){return Number.isFinite(e)&&Number.isFinite(t)}function nl(e,t,n,o){return n+1>=e.length||o.includes(n+1)||!so(e[n+1],t[n+1])}function kg(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let i=null;for(let l=0;l<e.length;l++){if(!so(e[l],t[l])){i=null;continue}const c=n(e[l]).toFixed(2),d=o(t[l]).toFixed(2);if(i===null||r.includes(l)){s.push(`M${c},${d}`),nl(e,t,l,r)&&s.push(`L${c},${d}`),i=d;continue}s.push(`H${c}`),d!==i&&s.push(`V${d}`),i=d}return s.join(" ")}function $g(e,t,n,o,r,s=[],i=[],l=[]){if(e.length===0)return[];if(i.length===0&&l.length===0)return[{d:r(e,t,n,o,s)}];function c(x,S){const E=new Array(e.length);for(const w of x){const M=Math.min(e.length-1,w.to);for(let A=Math.max(0,w.from);A<=M;A++)E[A]=S(w)}return E}const d=c(i,x=>x.status),u=c(l,x=>x.basis),p=new Set(s),m=[];let v=0;const g=(x,S)=>{const E=x>0&&!p.has(x)?x-1:x,w=R=>R.slice(E,S+1),M=[];for(const R of s)R>E&&R<=S&&M.push(R-E);const A=r(w(e),w(t),n,o,M);A!==""&&m.push({status:d[x],basis:u[x],d:A})};for(let x=1;x<=e.length;x++)(x===e.length||d[x]!==d[v]||u[x]!==u[v])&&(g(v,x-1),v=x);return m}function ol(e,t,n,o,r){if(e.length===0)return"";const s=Math.min(e.length,t.length,n.length),i=[];for(let c=0;c<s;c++)so(e[c],t[c])&&Number.isFinite(n[c])&&i.push(c);if(i.length===0)return"";const l=[];i.forEach((c,d)=>{const u=o(e[c]).toFixed(2),p=r(n[c]).toFixed(2);l.push(`${d===0?"M":"L"}${u},${p}`)});for(let c=i.length-1;c>=0;c--){const d=i[c],u=o(e[d]).toFixed(2),p=r(t[d]).toFixed(2);l.push(`L${u},${p}`)}return l.push("Z"),l.join(" ")}function _g(e,t,n,o){const r=[];for(const s of t){const{bandLo:i,bandHi:l,bandKind:c}=s;if(!i||!l||c===void 0)continue;const d=[];for(let p=s.from;p<=s.to&&p<e.length;p++)d.push(e[p]);const u=ol(d,i,l,n,o);u!==""&&r.push({d:u,kind:c})}return r}function Fs(e,t,n,o){if(e===t){const d=(n+o)/2;return()=>d}const r=e>0?e:1e-9,s=t>r?t:r*10,i=Math.log10(r),c=Math.log10(s)-i;if(c===0){const d=(n+o)/2;return()=>d}return d=>{const u=d>0?d:r;return n+(Math.log10(u)-i)/c*(o-n)}}function Sg(e,t,n=5){if(!(e>0)||!(t>0)||t<=e)return Wo(e,t,n);const o=Math.log10(e),r=Math.log10(t);if(r-o<1)return Wo(e,t,n);const i=Math.ceil(o),l=Math.floor(r),c=Math.max(1,Math.ceil((l-i+1)/n)),d=[];for(let u=i;u<=l;u+=c)d.push(10**u);return d.length>0?d:[e,t]}const ko=.86,Ns=[[0,-1.15],[1.05,.8],[-1.05,.8]],Ds=.3,ze={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:ko,triangle:Ns,outlineWidth:Ds,keylineWidth:.2,reach:Math.max(Math.hypot(ko,ko),...Ns.map(([e,t])=>Math.hypot(e,t)))+Ds/2},jg={"aria-hidden":!0};function rl(e,t,n,o){const r=ze.squareHalf;return(e==="modelled"?ze.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([i,l])=>[t+i*o,n+l*o])}const sl=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function al(e,t,n){const o=e==="current"?0:ze.outlineWidth;return t*(o+2*n*ze.keylineWidth)}function Mg({x:e,y:t,r:n,state:o="current",keyline:r=!1}){const s=o==="current"?"":rl(o,0,0,n).map(([i,l])=>`${i},${l}`).join(" ");return a.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...jg,children:[r&&sl.map(({ring:i,color:l,widths:c})=>{const d={"data-vessel-keyline":i,fill:"none",stroke:l,strokeWidth:al(o,n,c),strokeLinejoin:"round"};return o==="current"?a.jsx("circle",{r:n,...d},i):a.jsx("polygon",{points:s,...d},i)}),o==="current"?a.jsx("circle",{r:n,fill:ze.color}):a.jsx("polygon",{points:s,fill:o==="lost"?"none":pe[o].color,stroke:o==="lost"?ze.lost.color:ze.color,strokeWidth:n*ze.outlineWidth,strokeLinejoin:"round"})]})}function In(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function il(e,t,n,o,r){if(e.beginPath(),t==="current"){e.arc(n,o,r,0,Math.PI*2);return}rl(t,n,o,r).forEach(([s,i],l)=>{l===0?e.moveTo(s,i):e.lineTo(s,i)}),e.closePath()}function Eg(e,t,n,o,r){e.save(),e.lineJoin="round";for(const{color:s,widths:i}of sl)il(e,t,n,o,r),e.strokeStyle=s,e.lineWidth=al(t,r,i),e.stroke();e.restore()}function Ag(e,t,n,o,r,s=4,{keyline:i=!1}={}){i&&Eg(t,n,o,r,s);const l=In(e,ze.cssVar,ze.fallback);if(t.save(),il(t,n,o,r,s),n==="current")t.fillStyle=l,t.fill();else{if(n!=="lost"){const c=pe[n];t.fillStyle=In(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=n==="lost"?In(e,ze.lost.cssVar,ze.lost.fallback):l,t.lineWidth=s*ze.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function _b(e,t,n,o=4,r={}){const{held:s,modelled:i}=n;s!==void 0&&i!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=In(e,pe.modelled.cssVar,pe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(i.x,i.y),t.stroke(),t.restore());for(const l of["lost","held","current","modelled"]){const c=n[l];c!==void 0&&Ag(e,t,l,c.x,c.y,o,r)}}const Ot=56;function ll(e,t,n,o){const r=Math.max(0,Math.min(t-1,Math.floor(n))),s=Math.max(0,Math.min(t-1,Math.floor(o))),i=Math.min(t-1,r+1),l=Math.min(t-1,s+1),c=Math.max(0,Math.min(1,n-r)),d=Math.max(0,Math.min(1,o-s)),u=e[s*t+r]+(e[s*t+i]-e[s*t+r])*c,p=e[l*t+r]+(e[l*t+i]-e[l*t+r])*c;return u+(p-u)*d}const zs=400,Rg=16,Tg=8,Bs=.06,Cg=3.3,Ig=.6,Lg=60,Pg=40,Hs=[6,12],Ws=[48,96],Mn=2;function $o(e,t,n){const o=Math.max(0,Math.min(1,(n-e)/(t-e)));return o*o*(3-2*o)}function Us(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Xs(e,t){const n=t/e,o=e<=t?.07:.09,r=Cg**Math.exp(-((e-t)**2)/(2*o**2*t**2));return n**5*Math.exp(-1.25*n**4)*r}function cl(e,t,n){if(!(e>0)||!(t>0)||!(n>0)||!Number.isFinite(e+t+n))return[];const o=Math.sqrt(n*2*Math.PI/zs),r=Xs(o,o),s=[];for(let i=-Mn;i<=Rg*Mn;i++){const l=zs/2**(i/Mn),c=l/e,d=$o(Hs[0],Hs[1],c)*(1-$o(Ws[0],Ws[1],c))*(1-$o(t,2*t,l));if(d<=.001)continue;const u=2*Math.PI/l,p=Math.sqrt(n*u),m=Math.sqrt(Math.min(1,Xs(p,o)/r)),v=(p>=o?Bs:Bs*m)/Math.sqrt(Mn),g=(Lg+(Us(i,1)-.5)*2*Pg)*Math.PI/180;s.push({kx:u*Math.sin(g),ky:u*Math.cos(g),k:u,amplitude:v/u,omega:p,phase:Us(i,2)*2*Math.PI,weight:d})}return s.slice(0,Tg)}function Og(e,t,n,o){let r=0;for(const s of e)r+=s.weight*s.amplitude*Math.cos(s.kx*t+s.ky*n-s.omega*o+s.phase);return r}const Ln=dl(-.25,.3,.92),Fg=2.6,Ng=dl(Ln[0],Ln[1],Ln[2]+1),Dg=.8,zg=3,Bg=.95,Hg=.35,Wg=235,Ug=.5,Xg=.35;function dl(e,t,n){const o=Math.hypot(e,t,n);return[e/o,t/o,n/o]}function Gg(e,t,n,o){const{east0:r,north0:s,dx:i,dy:l,seconds:c,colour:d,waves:u,isSea:p}=o,[m,v,g]=Ln,[x,S,E]=Ng,w=u.length,M=new Float64Array(w*t),A=new Float64Array(w*t),R=new Float64Array(w*n),j=new Float64Array(w*n);for(let I=0;I<w;I++){const T=u[I];for(let Y=0;Y<t;Y++){const K=T.kx*(r+(Y+.5)*i);M[I*t+Y]=Math.cos(K),A[I*t+Y]=Math.sin(K)}for(let Y=0;Y<n;Y++){const K=T.ky*(s-(Y+.5)*l)-T.omega*c+T.phase;R[I*n+Y]=Math.cos(K),j[I*n+Y]=Math.sin(K)}}const C=new Float64Array(w),k=new Float64Array(w),H=u.map(I=>I.kx*I.weight*I.amplitude),G=u.map(I=>I.ky*I.weight*I.amplitude),F=u.map(I=>Ig*I.k*I.weight*I.amplitude);for(let I=0;I<n;I++)for(let T=0;T<t;T++){const Y=(I*t+T)*4;if(p&&!p(T,I)){e[Y+3]=0;continue}let K=0,ee=0,ae=1;for(let X=0;X<w;X++){const ue=M[X*t+T],we=A[X*t+T],Ae=R[X*n+I],he=j[X*n+I];C[X]=ue*Ae-we*he,k[X]=we*Ae+ue*he}for(let X=0;X<w;X++){const ue=w>1?1+Dg*C[(X+zg)%w]:1;K-=H[X]*C[X]*ue,ee-=G[X]*C[X]*ue,ae-=F[X]*k[X]*ue}const Q=1/Math.sqrt(K*K+ee*ee+ae*ae),ye=(K*m+ee*v+ae*g)*Q-g,_=1+Fg*ye;let U=0;const se=(K*x+ee*S+ae*E)*Q;if(se>Bg){let X=se;for(let ue=0;ue<7;ue++)X*=X;U=255*Hg*X}const me=Math.max(0,_-1)*Xg,de=Math.min(1,_)*Ug;e[Y]=d.r*de+(255-d.r*de)*me+U,e[Y+1]=d.g*de+(255-d.g*de)*me+U,e[Y+2]=d.b*de+(255-d.b*de)*me+U,e[Y+3]=Wg}}function Gs(e){const t=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function Yg(e,t){const n=Gs(t),o=Math.max(e.r,e.g,e.b,1),r=c=>({r:Math.min(255,e.r*c),g:Math.min(255,e.g*c),b:Math.min(255,e.b*c)});let s=0,i=255/o;for(let c=0;c<32;c++){const d=(s+i)/2;Gs(r(d))<n?s=d:i=d}const l=r((s+i)/2);return{r:Math.round(l.r),g:Math.round(l.g),b:Math.round(l.b)}}const qg=192,Vg=30,Kg="--color-info-mark",Zg=.42;function Qg(e,t){const n=e.view==="plan",o=t.scaleX,r=t.scaleYPrimary,s=1/(o(1)-o(0)),i=1/(r(1)-r(0)),l=E=>(E-o(0))*s,c=E=>(E-r(0))*i,d=Math.min(o(e.bounds.x0),o(e.bounds.x1)),u=Math.max(o(e.bounds.x0),o(e.bounds.x1)),p=Math.min(r(e.bounds.y0),r(e.bounds.y1)),m=Math.max(r(e.bounds.y0),r(e.bounds.y1)),v=n?d:Math.max(t.plotX0,d),g=n?u:Math.min(t.plotX1,u),x=n?p:Math.max(t.plotY0,p),S=n?m:Math.min(t.plotY1,m);return n&&(u<t.plotX0||d>t.plotX1||m<t.plotY0||p>t.plotY1)||!(g-v>=1&&S-x>=1)||!Number.isFinite(s+i)?null:{left:v,top:x,width:g-v,height:S-x,x0:l(v),x1:l(g),y0:c(S),y1:c(x)}}function Ys(e,t){if(!t)return null;e.fillStyle=t;const n=/^#([0-9a-f]{6})$/i.exec(String(e.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function Jg(e,t,n){const o=Ys(t,getComputedStyle(e).getPropertyValue(Kg).trim());if(!o)return null;const r=n?Ys(t,n):null;return r?Yg(r,o):o}function ev(e,t,n,o,r,s){const i=Ot,l=(n.x1-n.x0)/i,c=(n.y1-n.y0)/i,d=t.sea,u=o.scaleYPrimary(t.bounds.y0)<o.scaleYPrimary(t.bounds.y1),p=d&&d.size>1&&d.heights.length>=d.size*d.size?(v,g)=>{const x=u?g:i-1-g;return ll(d.heights,d.size,v/(i-1)*(d.size-1),x/(i-1)*(d.size-1))<0}:void 0,m=e.createImageData(i,i);Gg(m.data,i,i,{east0:t.origin.east+n.x0,north0:t.origin.north+n.y1,dx:l,dy:c,seconds:r,colour:s,waves:cl(Math.max(l,c),n.x1-n.x0,t.gravity),isSea:p}),e.putImageData(m,0,0)}function tv(e,t,n,o,r){const{width:s,height:i}=e.canvas,l=nv(t,n,s),c=l.length>1?(l[l.length-1]-l[0])/(l.length-1):n.x1-n.x0,d=cl(c,n.x1-n.x0,t.gravity),u=(t.bearingDeg??90)*Math.PI/180,p=g=>(g-n.x0)/(n.x1-n.x0)*s,m=g=>(n.y1-g)/(n.y1-n.y0)*i;e.clearRect(0,0,s,i),e.beginPath(),l.forEach((g,x)=>{const S=Og(d,t.origin.east+g*Math.sin(u),t.origin.north+g*Math.cos(u),o);x===0?e.moveTo(p(g),m(S)):e.lineTo(p(g),m(S))});const v=`${r.r}, ${r.g}, ${r.b}`;e.strokeStyle=`rgba(${v}, 0.9)`,e.lineWidth=1,e.stroke(),e.lineTo(p(l[l.length-1]),i),e.lineTo(p(l[0]),i),e.closePath(),e.fillStyle=`rgba(${v}, ${Zg})`,e.fill()}function nv(e,t,n){const o=(e.samples??[]).filter(r=>r>t.x0&&r<t.x1);return e.samples&&e.samples.length>1?[t.x0,...o,t.x1]:Array.from({length:n+1},(r,s)=>t.x0+s/n*(t.x1-t.x0))}function ov({layer:e,frame:t}){const n=Qg(e,t),o=f.useRef(null),r=f.useRef(null);r.current=n?{layer:e,at:n,frame:t}:null;const s=n?e.view==="plan"?Ot:Math.max(1,Math.min(qg,Math.round(n.width))):0,i=n?e.view==="plan"?Ot:Math.max(1,Math.round(n.height*s/n.width)):0,l=e.tint;return f.useEffect(()=>{const c=o.current,d=c?.getContext("2d")??null;if(!c||!d||s===0||i===0)return;const u=Jg(c,d,l);if(!u)return;const p=()=>{const w=r.current;if(!w)return;const M=Date.now()/1e3;w.layer.view==="plan"?ev(d,w.layer,w.at,w.frame,M,u):tv(d,w.layer,w.at,M,u)};if(p(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let v=!0;const g=typeof IntersectionObserver=="function"?new IntersectionObserver(w=>{v=w.some(M=>M.isIntersecting)}):null;g?.observe(c);let x=Number.NEGATIVE_INFINITY,S=0;const E=w=>{S=requestAnimationFrame(E),!(!v||document.hidden||w-x<1e3/Vg)&&(x=w,p())};return S=requestAnimationFrame(E),()=>{cancelAnimationFrame(S),g?.disconnect()}},[s,i,l]),n?a.jsx("g",{"aria-hidden":"true","data-plot-layer":e.id,"data-plot-layer-kind":"water",children:a.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:a.jsx("canvas",{ref:o,width:s,height:i,style:{display:"block",width:"100%",height:"100%",imageRendering:e.view==="plan"?"pixelated":"auto"}})})}):null}const rv={faint:.45,normal:.85,bright:1},sv=1.5,av=5,iv=.9,Zt=7,Qt=6,_o=10,Ft=9,at=12,lv=6.2,So=4,cv=9,dv=13,uv=.1,ln={paintOrder:"stroke",strokeWidth:3,strokeLinejoin:"round"},jo=5,hv=.5,fv=.5;function ut(e){return be[e.tone??"neutral"]}function pn(e){return De[e.tone??"neutral"]}function Je(e){return rv[e.emphasis??"normal"]}function nt(e,t){return t.axis==="secondary"?e.scaleYSecondary:e.scaleYPrimary}function pv(e){const t=e.axis==="secondary"?"secondary":"primary";switch(e.kind){case"series":return{xs:e.points.map(n=>n.x),ys:e.points.map(n=>n.y),axis:t};case"region":return{xs:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.x),ys:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.y),axis:t};case"rule":return e.along==="y"?{xs:[],ys:[e.value],axis:t}:{xs:[e.value],ys:[],axis:t};case"marker":case"annotation":return{xs:[e.at.x],ys:[e.at.y],axis:t};default:return{xs:[],ys:[],axis:t}}}const Er=5.8,Et=11,qs=4;function mv(e,t){const n=t.text.length*Er,{frame:o}=t,r=t.anchorX+t.gap,s=r+n<=o.plotX1-4?"start":"end",i=s==="start"?r:t.anchorX-t.gap,l=s==="start"?i:i-n,c=l+n,d=p=>e.some(m=>l<m.x1&&c>m.x0&&p-Et<m.y1&&p+2>m.y0);let u=t.anchorY+3;for(let p=0;p<qs&&d(u);p++)u+=Et;if(d(u)){u=t.anchorY+3;for(let p=0;p<qs&&d(u);p++)u-=Et}return u=Math.min(Math.max(u,o.plotY0+Et),o.plotY1-Et),e.push({x0:l,x1:c,y0:u-Et,y1:u+2}),{x:i,y:u,anchor:s}}function gv(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function vv(e){if(e.length===0)return"";const t=[`M${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`];for(let n=1;n<e.length;n++)t.push(`H${e[n].x.toFixed(2)}`,`V${e[n].y.toFixed(2)}`);return t.join(" ")}function ul(e,t,n){if(e.length===0)return[];const o=e[0],r=e[e.length-1],s=[...e];if(t==="right"||t==="left"){const i=t==="right"?n.plotX1:n.plotX0;s.push({x:i,y:r.y},{x:i,y:o.y})}else{const i=t==="above"?n.plotY0:n.plotY1;s.push({x:r.x,y:i},{x:o.x,y:i})}return s}function xv(e,t){const n=[];for(const o of e){if(o.kind==="relief"||o.kind==="water"){const i=nt(t,o),{x0:l,y0:c,x1:d,y1:u}=o.bounds;n.push([{x:t.scaleX(l),y:i(c)},{x:t.scaleX(d),y:i(c)},{x:t.scaleX(d),y:i(u)},{x:t.scaleX(l),y:i(u)}]);continue}if(o.kind!=="region"||o.hatched)continue;const r=nt(t,o),s=o.boundary.map(i=>({x:t.scaleX(i.x),y:r(i.y)}));if(!(s.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...s,...o.boundaryHigh.map(i=>({x:t.scaleX(i.x),y:r(i.y)})).reverse()])}else n.push(ul(s,o.side,t))}return(o,r)=>n.some(s=>{let i=!1;for(let l=0,c=s.length-1;l<s.length;c=l++){const d=s[l],u=s[c];d.y>r!=u.y>r&&o<(u.x-d.x)*(r-d.y)/(u.y-d.y)+d.x&&(i=!i)}return i})}function bv({layer:e,frame:t}){if(e.stops.length===0)return null;const n=nt(t,e),o=e.along==="y"?t.plotY1-t.plotY0:t.plotX1-t.plotX0;if(o<=0)return null;const r=e.along==="y"?t.plotY0:t.plotX0,s=e.along==="y"?n:t.scaleX,i=e.maxOpacity??fv,l=e.tint??ut(e),c=e.blur!==void 0?Math.ceil(e.blur*3):0,d=`plot-field-${e.id}-${t.uid}`,u=`plot-field-blur-${e.id}-${t.uid}`,p=e.along==="y"?t.plotY1:t.plotX1,m=e.stops.map(v=>({offset:(s(v.at)-r)/o*100,intensity:Math.max(0,Math.min(1,v.intensity))})).sort((v,g)=>v.offset-g.offset);return a.jsxs(a.Fragment,{children:[a.jsxs("defs",{children:[a.jsx("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:t.plotX0,y1:t.plotY0,x2:e.along==="x"?p:t.plotX0,y2:e.along==="y"?p:t.plotY0,children:m.map((v,g)=>a.jsx("stop",{offset:`${v.offset.toFixed(2)}%`,stopColor:l,stopOpacity:i*v.intensity},g))}),e.blur!==void 0&&a.jsx("filter",{id:u,children:a.jsx("feGaussianBlur",{stdDeviation:e.blur})})]}),a.jsx("rect",{"data-plot-layer":e.id,"data-plot-layer-kind":"field",x:t.plotX0-c,y:t.plotY0-c,width:t.plotX1-t.plotX0+2*c,height:t.plotY1-t.plotY0+2*c,fill:`url(#${d})`,filter:e.blur!==void 0?`url(#${u})`:void 0})]})}const yv=6,At=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function wv(e){const t=Math.max(0,Math.min(1,e));for(let n=1;n<At.length;n++)if(t<=At[n][0]){const[o,r]=At[n-1],[s,i]=At[n],l=s>o?(t-o)/(s-o):0;return[Math.round(r[0]+(i[0]-r[0])*l),Math.round(r[1]+(i[1]-r[1])*l),Math.round(r[2]+(i[2]-r[2])*l)]}return At[At.length-1][1]}const kv=[150,156,160],$v=[200,80,70];function _v(e,t){if(t===3)return kv;if(t!==1&&t!==2)return e;const n=.3*e[0]+.59*e[1]+.11*e[2],o=(s,i,l)=>s+(l-s)*i,r=e.map(s=>o(o(s,.5,n),.06,235));return t===1?r:r.map((s,i)=>o(s,.3,$v[i]))}function Sv(e,t){const n=2*(t-1),o=(e%n+n)%n;return o<t?o:n-o}function jv(e,t,n,o,r,s,i){const l=e[s*n+i],c=r?Sv(l,o):l,[d,u,p]=_v(wv(c/(o-1)),t[s*n+i]),m=i>0?e[s*n+i-1]:l,v=s>0?e[(s-1)*n+i]:l,g=m!==l||v!==l?.5:1;return`rgb(${Math.round(d*g)}, ${Math.round(u*g)}, ${Math.round(p*g)})`}function Mv(e,t){const{bounds:n}=e,o=nt(t,e),r=t.scaleX(n.x0),s=t.scaleX(n.x1),i=o(n.y0),l=o(n.y1),c=Math.abs(s-r)/Ot,d=Math.abs(l-i)/Ot;return!(c>0)||!(d>0)?null:{left:Math.min(r,s),top:Math.min(i,l),cellW:c,cellH:d,flipRows:i<l}}function Ev(e,t){const{size:n,values:o}=e;if(!t||n<2||o.length<n*n)return null;const{left:r,top:s,cellW:i,cellH:l,flipRows:c}=t;let d=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;for(let A=0;A<n*n;A++){const R=o[A];if(!Number.isFinite(R))return null;R<d&&(d=R),R>u&&(u=R)}const p=u-d,m=e.bandMetres!=null&&e.bandMetres>0?e.bandMetres:null,v=e.veil,g=Math.max(2,e.bands??yv),x=Ot,S=new Int16Array(x*x),E=new Uint8Array(x*x),w=v!=null&&v.length>=n*n;for(let A=0;A<x;A++)for(let R=0;R<x;R++){const j=R/(x-1)*(n-1),C=A/(x-1)*(n-1);w&&(E[A*x+R]=v[Math.round(C)*n+Math.round(j)]??0);const k=ll(o,n,j,C);if(m!=null){S[A*x+R]=Math.floor(k/m);continue}const H=p>0?(k-d)/p:.5;S[A*x+R]=Math.max(0,Math.min(g-1,Math.floor(H*g)))}const M=[];for(let A=0;A<x;A++){const R=c?A:x-1-A;let j=0,C="";for(let k=0;k<=x;k++){const H=k<x?jv(S,E,x,g,m!=null,A,k):"";if(k===0){C=H;continue}H===C&&k<x||(M.push(a.jsx("rect",{x:r+j*i,y:s+R*l,width:(k-j)*i+.5,height:l+.5,fill:C},`${A}-${j}`)),j=k,C=H)}}return M}function Av({layer:e,frame:t}){const n=Mv(e,t),{values:o,size:r,veil:s,bandMetres:i,bands:l}=e,{left:c,top:d,cellW:u,cellH:p,flipRows:m}=n??{},v=f.useMemo(()=>Ev(e,n),[o,r,s,i,l,c,d,u,p,m]);return v?a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:Je(e),"aria-hidden":"true",children:v}):null}function Rv({layer:e,frame:t}){const n=f.useId(),o=nt(t,e),r=d=>({x:t.scaleX(d.x),y:o(d.y)}),s=e.boundary.map(r);if(s.length<2)return null;const i=e.side==="between"?[...s,...(e.boundaryHigh??[]).map(r).reverse()]:ul(s,e.side,t);if(e.side==="between"&&!e.boundaryHigh)return null;const l=e.side==="right"?t.plotX1-4:e.side==="left"?t.plotX0+11:s[s.length-1].x,c=(t.plotY0+t.plotY1)/2;return a.jsxs(a.Fragment,{children:[e.hatched&&a.jsx("defs",{children:a.jsx("pattern",{id:n,width:jo,height:jo,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:a.jsx("line",{x1:0,y1:0,x2:0,y2:jo,stroke:ut(e),strokeWidth:1,strokeOpacity:e.opacity??hv})})}),a.jsx("polygon",{"data-plot-layer":e.id,"data-plot-layer-kind":"region","data-hatched":e.hatched?"":void 0,points:i.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:e.hatched?`url(#${n})`:ut(e),fillOpacity:e.hatched?void 0:e.opacity??uv}),t.labels&&e.label&&a.jsx("text",{x:l,y:c,transform:`rotate(-90 ${l} ${c})`,textAnchor:"middle",fontSize:cv,letterSpacing:"0.14em",fill:"var(--color-text-muted)",stroke:"var(--color-surface-raised)",...ln,children:e.label})]})}function Tv({layer:e,frame:t}){const n=nt(t,e),o=e.points.map(s=>({x:t.scaleX(s.x),y:n(s.y)}));if(o.length===0)return null;const r=sv*(e.weight??1);if(e.style==="scatter"){const s=e.radius===void 0?r:Math.abs(t.scaleX(e.radius)-t.scaleX(0));return a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",fill:ut(e),opacity:Je(e),children:o.map((i,l)=>a.jsx("circle",{cx:i.x,cy:i.y,r:s},l))})}return a.jsx("path",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",d:e.style==="step"?vv(o):gv(o),fill:"none",stroke:ut(e),strokeOpacity:Je(e),strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:e.dashed?"5 3.5":void 0})}function Cv({layer:e,frame:t}){const n=nt(t,e),o=e.dashed??!0,r=ut(e),s=e.along==="y",i=s?n(e.value):t.scaleX(e.value);return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"rule",x1:s?t.plotX0:i,x2:s?t.plotX1:i,y1:s?i:t.plotY0,y2:s?i:t.plotY1,stroke:r,strokeOpacity:Je(e),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),t.labels&&e.label&&a.jsx("text",{x:s?t.plotX1-4:i+3,y:s?i-3:t.plotY0+10,textAnchor:s?"end":"start",fill:pn(e),fontSize:Ft,children:e.label})]})}function Iv({layer:e,frame:t,placed:n}){const o=nt(t,e),r=t.scaleX(e.at.x),s=o(e.at.y),i=e.across??"x",l=ut(e),c=t.labels&&e.label?mv(n,{anchorX:r,anchorY:s,gap:Zt+3,text:e.label,frame:t}):null;return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"annotation",x1:i==="x"?r-Zt:r,x2:i==="x"?r+Zt:r,y1:i==="x"?s:s-Zt,y2:i==="x"?s:s+Zt,stroke:l,strokeOpacity:Je(e),strokeWidth:1.75,strokeLinecap:"round"}),c&&e.label&&a.jsx("text",{x:c.x,y:c.y,textAnchor:c.anchor,fontSize:Ft,letterSpacing:"0.05em",fill:pn(e),fillOpacity:Je(e),children:e.label})]})}function Lv({layer:e,frame:t}){const n=nt(t,e),o=t.scaleX(e.at.x),r=n(e.at.y)+(e.offsetPx??0),s=av*(e.scale??1),i=ut(e),l=e.shape??"dot",c={"data-plot-layer":e.id,"data-plot-layer-kind":"marker",opacity:Je(e)},d=l==="none"?null:l==="vessel"?a.jsx("g",{...c,children:a.jsx(Mg,{state:e.markState??"current",x:o,y:r,r:s*iv,keyline:!0})}):l==="dot"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:i,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):l==="ring"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:"none",stroke:i,strokeWidth:1.5}):l==="cross"?a.jsx("path",{...c,d:`M${o-s},${r} L${o+s},${r} M${o},${r-s} L${o},${r+s}`,stroke:i,strokeWidth:1.5,strokeLinecap:"round"}):l==="chevron-up"||l==="chevron-down"?a.jsx("polyline",{...c,points:l==="chevron-up"?`${o-s},${r+s*.5} ${o},${r-s*.5} ${o+s},${r+s*.5}`:`${o-s},${r-s*.5} ${o},${r+s*.5} ${o+s},${r-s*.5}`,fill:"none",stroke:i,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null,u=(e.label?.length??0)*Er/2+3,p=l==="none"?Math.min(Math.max(o,t.plotX0+u),t.plotX1-u):o+s+3,m=l==="none"?Math.min(Math.max(r+3,t.plotY0+Ft+3),t.plotY1-4):r+3;return a.jsxs(a.Fragment,{children:[d,t.labels&&e.label&&a.jsx("text",{x:p,y:m,textAnchor:l==="none"?"middle":void 0,fontSize:Ft,fill:pn(e),fillOpacity:Je(e),stroke:"var(--color-surface-raised)",...ln,children:e.label})]})}function Pv({layer:e,frame:t,row:n,edges:o}){const r=e.caption?2:1;if(e.anchor==="left-edge"||e.anchor==="right-edge"){const g=e.anchor==="left-edge"?t.plotX0+Qt+n*at:t.plotX1-Qt-n*at,x=t.plotY1-34;return a.jsx("text",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",x:g,y:x,transform:`rotate(-90 ${g} ${x})`,fontSize:Ft,letterSpacing:"0.14em",fill:pn(e),fillOpacity:Je(e),stroke:"var(--color-surface-raised)",...ln,children:e.text})}const s=e.anchor.startsWith("top"),i=e.anchor.endsWith("right"),l=g=>Qt+(g?dv:0),c=i?t.plotX1-l(o.right):t.plotX0+l(o.left),d=n*(r*at+2),u=s?t.plotY0+Qt+_o+d:t.plotY1-Qt-d,p=u-at,m=Math.max(e.text.length*lv,(e.caption?.length??0)*Er)+2*So,v=(s?u:u-(e.caption?at:0))-_o-1;return a.jsxs("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",textAnchor:i?"end":"start",children:[a.jsx("rect",{x:i?c-m+So:c-So,y:v,width:m,height:r*at+1,rx:3,fill:"var(--color-surface-raised)",fillOpacity:.8}),e.caption&&a.jsx("text",{x:c,y:s?u:p,fontSize:Ft,letterSpacing:"0.05em",fill:"var(--color-text-faint)",stroke:"var(--color-surface-raised)",...ln,children:e.caption}),a.jsx("text",{x:c,y:e.caption&&s?u+at:u,fontSize:_o,fontWeight:700,fill:pn(e),fillOpacity:Je(e),stroke:"var(--color-surface-raised)",...ln,children:e.text})]})}const Vs={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},Ov={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function Mo({layers:e,frame:t,pass:n}){const o=e.map((l,c)=>({layer:l,index:c})).filter(({layer:l})=>Ov[l.kind]===n).sort((l,c)=>Vs[l.layer.kind]-Vs[c.layer.kind]||(l.layer.z??0)-(c.layer.z??0)||l.index-c.index),r=new Map,s=[],i={left:e.some(l=>l.kind==="caption"&&l.anchor==="left-edge"||l.kind==="region"&&l.side==="left"&&!!l.label),right:e.some(l=>l.kind==="caption"&&l.anchor==="right-edge"||l.kind==="region"&&l.side==="right"&&!!l.label)};return a.jsx(a.Fragment,{children:o.map(({layer:l,index:c})=>{const d=`${l.id}-${c}`;switch(l.kind){case"relief":return a.jsx(Av,{layer:l,frame:t},d);case"water":return a.jsx(ov,{layer:l,frame:t},d);case"field":return a.jsx(bv,{layer:l,frame:t},d);case"region":return a.jsx(Rv,{layer:l,frame:t},d);case"series":return a.jsx(Tv,{layer:l,frame:t},d);case"rule":return a.jsx(Cv,{layer:l,frame:t},d);case"annotation":return a.jsx(Iv,{layer:l,frame:t,placed:s},d);case"marker":return a.jsx(Lv,{layer:l,frame:t},d);case"caption":{const u=r.get(l.anchor)??0;return r.set(l.anchor,u+1),a.jsx(Pv,{layer:l,frame:t,row:u,edges:i},d)}default:return null}})})}function Fv(e){return e.map(t=>t.description).filter(t=>typeof t=="string"&&t.length>0)}const Ks=11,En=3,An=4,Zs=(e,t)=>e.x0<t.x1&&t.x0<e.x1&&e.y0<t.y1&&t.y0<e.y1;function Nv(e,t,n,o,r){let s=0,i=1;const l=n-e,c=o-t,d=[[-l,e-r.x0],[l,r.x1-e],[-c,t-r.y0],[c,r.y1-t]];for(const[u,p]of d){if(u===0&&p<0)return!1;if(u!==0){const m=p/u;u<0?s=Math.max(s,m):i=Math.min(i,m)}}return s<=i}function Dv(e,t){for(let n=1;n<e.cx.length;n++){const o=[e.cx[n-1],e.cy[n-1],e.cx[n],e.cy[n]];if(o.every(Number.isFinite)&&Nv(o[0],o[1],o[2],o[3],t))return!0}return!1}function zv({labels:e,plot:t,obstacles:n,traces:o}){const r=[],s=new Map;for(const i of e){const l={y0:i.lineY-En-Ks,y1:i.lineY-En},c={y0:i.lineY+En,y1:i.lineY+En+Ks},d={x0:t.x1-An-i.width,x1:t.x1-An},u={x0:t.x0+An,x1:t.x0+An+i.width},p=[{...d,...l,anchor:"end"},{...d,...c,anchor:"end"},{...u,...l,anchor:"start"},{...u,...c,anchor:"start"}];let m=null;for(const v of p){if(!(v.x0>=t.x0&&v.x1<=t.x1&&v.y0>=t.y0&&v.y1<=t.y1)||r.some(S=>Zs(v,S)))continue;const x=2*n.filter(S=>Zs(v,S)).length+o.filter(S=>Dv(S,v)).length;(m===null||x<m.cost)&&(m={spot:v,cost:x})}if(m===null){s.set(i.id,null);continue}r.push(m.spot),s.set(i.id,{x:m.spot.anchor==="end"?m.spot.x1:m.spot.x0,y:m.spot.y1-2,anchor:m.spot.anchor})}return s}function Bv(e,t,n,o="linear"){const r=n&&Xv(t,n)?0:t;if(n&&o==="log")return Me(Ye(e,r),{decimals:Uo(e,r).decimals});if(!n)return Me(Ye(e,r),{decimals:0});const s=Hv(e,n)?e:void 0;return Me(Ye(e,r),{decimals:Gv(e,r,n,s),...s?{format:s}:{}})}function Hv(e,t){const n=t.map(o=>Me(Ye(e,o),{decimals:Pn}));return n.some((o,r)=>r>0&&o===n[r-1])}function Wv(e,t){const n=new Set(t.map(o=>Bv(e,o,t).replace(/^[\d.,\s-]+/,"")));return n.size===1?[...n][0]:void 0}function Uv(e,t,n){const o=Wv(t,n);if(o===void 0)return e;const r=lc({magnitude:0,unit:t},{format:t}).symbol,s=` (${r})`;return r!==""&&e.endsWith(s)?`${e.slice(0,-s.length)} (${o})`:e}function Xv(e,t){const n=t.length>1?Math.abs(t[1]-t[0]):0;return n>0&&Math.abs(e)<n*1e-6}const Pn=3;function hl(e){return{figure:Number.parseFloat(e.replace(/[^\d.-]/g,"")),unit:e.replace(/[\d.,\s-]/g,"")}}function Uo(e,t,n){const o=s=>hl(Me(Ye(e,t),{decimals:s,...n?{format:n}:{}})),r=o(Pn);for(let s=0;s<Pn;s++)if(o(s).figure===r.figure)return{decimals:s,unit:r.unit};return{decimals:Pn,unit:r.unit}}function Gv(e,t,n,o){const r=Uo(e,t,o);let s=r.decimals;for(const i of n){const l=Uo(e,i,o);l.unit===r.unit&&(s=Math.max(s,l.decimals))}return s}function Sb(e){const t=hl(Me(e,{decimals:3})),n=Math.abs(t.figure),o=Number.isFinite(n)&&n>0?Math.max(0,2-Math.floor(Math.log10(n))):0;return Me(e,{decimals:o})}function Eo(e,t,n){for(let o=n;o<6;o++){const r=e.map(s=>(s/t).toFixed(o));if(r.every((s,i)=>i===0||s!==r[i-1]))return o}return 6}const Yv=4,Rn=2,qv=2.5;function Vv(e,t){if(e.length===0)return!1;const n=e[e.length-1]-t;return n===0?!0:e.length===1?!1:Math.sign(e[0]-t)!==Math.sign(n)}function Kv(e,t){return e==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:t?e==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const Zv=(e,t)=>tl(e-t[0],t[1]-t[0]),jb=(e,t)=>tl((e-t[0])*1e3,(t[1]-t[0])*1e3),Ao={top:10,bottom:28,left:50};function fl(e,t,n){const o=(s,i,l)=>Math.max(s,Math.min(l,i)),r=o(30,Math.round(e*.18),Ao.left);return{top:Ao.top,right:n?r:o(14,Math.round(e*.07),20),bottom:t<150?20:Ao.bottom,left:r}}const Qs=e=>e.length*6.5+6,Qv=4,Jv=.4,ex=26,xt=14,tx=160,Ue=16,Tn=4,nx=6,Jt=(e,t)=>Math.min(e.length*6+8,t);function ox(e,t){const n=[];let o=0,r=0;for(const s of e)r>0&&r+s>t&&(o+=1,r=0),n.push({row:o,x:r}),r+=s+nx;return{rows:e.length===0?0:o+1,positions:n}}const Js=4,rx=.03;function Ro(e,t){const n=Math.max(0,Math.floor(t/6));if(e.length<=n)return e;const o=e.lastIndexOf(" (");if(o>0&&e.length-o+4<=n){const r=n-(e.length-o)-3;return`${e.slice(0,r)}...${e.slice(o)}`}return n<4?"":`${e.slice(0,n-3)}...`}function ea(e,t){const n=e.split(/(?=M)/).filter(r=>r.length>0),o=[];for(const r of n){const s=[...r.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)];if(s.length<2)continue;const i=s[0],l=s[s.length-1];o.push(`${r.trim()} L${l[1]},${t} L${i[1]},${t} Z`)}return o.length>0?o.join(" "):null}function sx(e,t,n,o,r=1){const s=[],i=ex*Math.max(.5,Math.min(2,r));for(let l=e+i/2;l<t;l+=i)for(let c=n+i/2;c<o;c+=i)s.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return s}const ax=120,ix=90,lx=70,cx=35,dx=2,ux=12,ta=8,hx=2,it=14,Yn=6,qn=12,fx=16,px=12,mx=200,na=10,gx=.2,oa=.6,ra="5 3",vx=.15,xx=.45,bx="the value is inside the shaded region";function yx(e){const t=[...e.data.y];(e.type??"line")==="band"&&e.data.y2&&t.push(...e.data.y2);for(const n of e.data.reckoned??[])n.bandLo&&n.bandHi&&t.push(...n.bandLo,...n.bandHi);for(const n of e.data.bridges??[])t.push(...n.v);return t.filter(Number.isFinite)}const wx=1e-5,kx=1e-9;function $x({series:e,thresholds:t,yTickFormat:n}){const o=s=>s*Yn,r=[];for(const s of e)r.push(o(s.label.length)+8);for(const s of t){if(s.kind==="marker"&&!s.label)continue;const i=s.label??n(s.value);r.push(o(i.length)+qn+8)}return Math.max(0,...r)+ux}function _x({width:e,height:t,hasSecondary:n,series:o,thresholds:r}){const s=r.filter(u=>u.label);if(o.length===0||s.length===0)return!1;const i=Math.max(...o.map(u=>u.label.length*6+8)),l=Math.max(...s.map(u=>(u.label?.length??0)*Yn+qn)),c=fl(e,t,n),d=e-c.left-c.right-xt-fx;return i+l+px>d}function Mb({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:r=Zv,yTickFormat:s=Sx,yScalePrimary:i="linear",yScaleSecondary:l="linear",thresholds:c,legend:d="overlay",hideXAxis:u=!1,density:p="chart",spatial:m=!1,gridScale:v=1,layers:g,"aria-label":x,crosshair:S=!1,xKind:E="time",xReadFormat:w,xAxisLabel:M,yAxisLabel:A,ySecondaryAxisLabel:R,yTickUnit:j,card:C,cardForms:k=1,plotNotice:H,width:G,height:F}){const I=f.useId(),T=p==="compact",Y=T?"none":d,K=m,ee=K||T,ae=S&&!ee&&e.some(h=>h.data.x.length>0),[Q,ye]=f.useState(null),[_,U]=f.useState(!1),[se,me]=f.useState(""),[de,X]=f.useState(null),[ue,we]=f.useState(null),Ae=ue?.w===G&&ue.h===F?ue.form:0,[he,Re]=f.useState(null),et=C!=null,ie=he?.form===Ae?he:null;f.useLayoutEffect(()=>{if(!de){Re(null);return}const h=()=>Re($=>{const P={w:de.offsetWidth,h:de.offsetHeight,form:Ae};return $?.w===P.w&&$?.h===P.h&&$?.form===P.form?$:P});h();const b=new ResizeObserver(h);return b.observe(de),()=>b.disconnect()},[de,Ae]);const q=G,te=F,$e=e.filter(h=>h.axis==="primary"&&h.data.x.length>0),qe=e.filter(h=>h.axis==="secondary"&&h.data.x.length>0),Pe=qe.length>0,ft=Y!=="none"&&e.length>0||(c??[]).some(h=>h.label),_e=$x({series:e,thresholds:c??[],yTickFormat:s}),Ve=et&&ie!==null&&ie.w+ta<=Math.max(112,Math.ceil(_e)),ne=ee||!ft?{placement:"overlay"}:ig({width:q,height:te,contentWidth:_e,legendHeight:Y==="none"?0:e.length*Ue+6,cardHeight:Ve&&ie!==null?ie.h:0}),ke=ne.placement==="overlay"&&!ee&&Y!=="none"&&te>=mx&&_x({width:q,height:te,hasSecondary:Pe,series:e,thresholds:c??[]})?{placement:"below"}:ne,le=Y!=="none"&&(ke.placement==="below"||ke.placement==="beside"&&ke.legendBelow),Oe=le?ox(e.map(h=>Jt(h.label,q-2*Tn)),q-2*Tn):{rows:0,positions:[]},Be=Oe.rows===0?0:Oe.rows*Ue+4,Se=q>=tx,He=!ee&&!u&&!!M,yt=!ee&&Se&&!!A,ge=!ee&&Se&&Pe&&!!R,xe=K?0:1,zt=ee?{top:xe,right:xe,bottom:xe,left:xe}:fl(q,te,Pe),Ke={...zt,bottom:zt.bottom+(He?xt:0)+Be},Z=Ke.top,oe=te-Ke.bottom,Ze=oe-Z,xn=f.useMemo(()=>{const h={primary:[],secondary:[]};for(const b of g??[]){const $=pv(b);h[$.axis].push(...$.ys)}return h},[g]),wt=f.useMemo(()=>sa($e,n,i,xn.primary),[$e,n,i,xn]),kt=f.useMemo(()=>sa(qe,o,l,xn.secondary),[qe,o,l,xn]),Te=i==="log"?Fs(wt[0],wt[1],oe,Z):wo(wt[0],wt[1],oe,Z),Ce=l==="log"?Fs(kt[0],kt[1],oe,Z):wo(kt[0],kt[1],oe,Z),Ar=Math.max(2,Math.min(7,Math.round(Ze/cx))),ao=(h,b,$,P)=>{const O=Math.min(h,b),B=Math.max(h,b),L=(B-O)*1e-6||1e-6,W=re=>re>=O-L&&re<=B+L,J=re=>P==="log"?Sg(O,B,re):Wo(O,B,re);for(let re=$;re<=64;re*=2){const Ne=J(re).filter(W);if(Ne.length<2)continue;if(Ne.length<=$)return Ne;const Yt=(Ne.length-1)/($-1),wn=Array.from({length:$},(Ox,Ll)=>Ne[Math.round(Ll*Yt)]);return Array.from(new Set(wn))}return[O,B]},Bt=ao(wt[0],wt[1],Ar,i==="log"?"log":"linear"),bn=Pe?ao(kt[0],kt[1],Ar,l==="log"?"log":"linear"):[],Rr=(h,b)=>h.length===0?b:Math.max(b,Math.min(Math.round(q*Jv),Math.max(...h.map($=>Qs(s($,h))))+Qv)),io=ee?Ke:{left:Rr(Bt,Ke.left)+(yt?xt:0),right:(Pe?Rr(bn,Ke.right):Ke.right)+(ge?xt:0)},V=io.left,lo=ke.placement==="beside"?ke.columnWidth:0,ve=q-io.right-lo,Ie=ve-V,Tr=q-lo-xt/2,pt=Ie>=ax&&Ze>=ix,ce=lo>0?{x0:ve+(Pe?io.right:0)+ta,y0:Z,x1:q-hx,y1:oe}:void 0,Cr=Y==="none"||ce||le?[]:e.map((h,b)=>({x0:V+3,y0:Z+6+b*Ue,x1:V+3+Jt(h.label,Ie-6),y1:Z+6+b*Ue+13})),fe=wo(t[0],t[1],V,ve),gl=Math.max(2,Math.min(8,Math.round(Ie/lx))),Ht=ao(t[0],t[1],gl,"linear"),vl=f.useMemo(()=>{const h=[],b=Ht.length-1;if(b<0)return h;const $=Qs,P=6,O=L=>{const W=Ht[L],J=r(W,t,Ht),re=fe(W),Ne=$(J),Yt=L===0?"start":L===b?"end":"middle",wn=Yt==="start"?re:Yt==="end"?re-Ne:re-Ne/2;return{x:re,text:J,anchor:Yt,leftEdge:wn,rightEdge:wn+Ne}},B=O(0);if(h.push({x:B.x,text:B.text,anchor:B.anchor}),b>=1){const L=O(b);if(L.leftEdge>=B.rightEdge+P){let W=B.rightEdge;for(let J=1;J<b;J++){const re=O(J);re.leftEdge>=W+P&&re.rightEdge<=L.leftEdge-P&&(h.push({x:re.x,text:re.text,anchor:re.anchor}),W=re.rightEdge)}h.push({x:L.x,text:L.text,anchor:L.anchor})}}return h},[Ht,t,fe,r]),Ir=(h,b)=>{const $=new Set,P=h.length;if(P===0||($.add(0),P===1))return $;const O=16,B=b(h[0]),L=b(h[P-1]);if(Math.abs(L-B)>=O){let W=B;for(let J=1;J<P-1;J++){const re=b(h[J]);Math.abs(re-W)>=O&&Math.abs(L-re)>=O&&($.add(J),W=re)}$.add(P-1)}return $},xl=Ir(Bt,Te),bl=Ir(bn,Ce),ot=f.useMemo(()=>e.filter(h=>h.data.x.length>0).map(h=>{const b=h.axis==="primary"?Te:Ce,$=h.type??"line";if($==="band")return h.data.y2?{id:h.id,kind:"band",color:h.color,opacity:h.fillOpacity??gx,d:ol(h.data.x,h.data.y,h.data.y2,fe,b)}:{id:h.id,kind:"noop"};if($==="scatter"){const L=h.data.x.map((W,J)=>({cx:fe(W),cy:b(h.data.y[J])}));return{id:h.id,kind:"scatter",color:h.color,points:L}}const P=$==="step"?kg:Os,O=(h.data.bridges??[]).filter(L=>wg(h.data.x,h.data.y,L,fe,b)),B=[...new Set([...h.data.breaks??[],...O.map(L=>L.to)])].sort((L,W)=>L-W);return{id:h.id,kind:"stroked",color:h.color,dashed:h.dashed??!1,uncertainty:_g(h.data.x,h.data.reckoned??[],fe,b),segments:$g(h.data.x,h.data.y,fe,b,P,B,h.data.spans,h.data.reckoned),modelled:O.map(L=>({basis:L.basis,d:Os([h.data.x[L.to-1],...L.t,h.data.x[L.to]],[h.data.y[L.to-1],...L.v,h.data.y[L.to]],fe,b)})),tail:h.data.x.length>0&&(h.data.reckoned??[]).some(L=>L.to>=h.data.x.length-1)?{cx:fe(h.data.x[h.data.x.length-1]),cy:b(h.data.y[h.data.y.length-1])}:null,observed:[...new Set(O.flatMap(L=>[L.to-1,L.to]))].map(L=>({cx:fe(h.data.x[L]),cy:b(h.data.y[L])}))}}),[e,fe,Te,Ce]),mt=f.useMemo(()=>c?c.map(h=>{const b=h.axis??"primary",$=e.filter(O=>O.axis===b&&O.type!=="band"&&!O.dashed),P=h.kind==="limit"?$.some(O=>{const B=O.data.y.filter(L=>Number.isFinite(L));return B.length>0&&el(B[B.length-1],h.value,h.bad)}):h.kind==="target"&&$.some(O=>Vv(O.data.y,h.value));return{id:h.id,label:h.label,spokenLabel:h.spokenLabel,value:h.value,kind:h.kind,passed:P,currency:Zn(h.reading,{drawsReckoning:!0}),tone:Kv(h.kind,P),dashed:h.kind!=="marker",y:b==="primary"?Te(h.value):Ce(h.value)}}):[],[c,e,Te,Ce]),Wt=f.useMemo(()=>{const h=(b,$,P)=>Math.max(b,Math.min(P,$));return(c??[]).flatMap(b=>{if(b.kind!=="limit"||!Number.isFinite(b.value))return[];const $=b.axis??"primary",P=$==="primary"?Te:Ce,O=P(b.value),B=b.bad==="above"?-1:1,L=b.label||`the limit at ${s(b.value)}`;return e.filter(W=>W.axis===$&&W.data.x.length>0&&(W.type??"line")!=="band"&&!W.dashed).flatMap(W=>bg({y:W.data.y,cx:W.data.x.map(fe),cy:W.data.y.map(P),limit:b.value,limitY:O,bad:b.bad,breaks:W.data.breaks,step:W.type==="step"||W.type==="scatter",minGapPx:it}).slice(pt?0:-1).map(J=>{const re=s(W.data.y[J.index]),Ne=r(W.data.x[J.index],t);return{key:`${b.id}-${W.id}-${J.index}`,color:W.color,x:h(V+it/2+1,J.x-na*(J.entered?1:-1),ve-it/2-1),y:h(Z+it/2+1,J.y+B*na,oe-it/2-1),text:J.entered?J.spells>1?`${W.label} went past ${L} ${J.spells} times from ${Ne}, first reading ${re}`:`${W.label} went past ${L} at ${Ne}, reading ${re}`:`${W.label} was already past ${L} when this window began at ${Ne}, reading ${re}`}}))})},[c,e,fe,Te,Ce,r,s,t,V,ve,Z,oe,pt]),je=(()=>{if(!et||ie===null||ee)return;if(ce&&Ve){const O={x0:ce.x0,y0:oe-ie.h,x1:ce.x0+ie.w,y1:oe},B=Z+(Y==="none"||le?0:e.length*Ue+6);return O.x1<=ce.x1&&O.y0>=B?O:void 0}const h=it/2,b=[...e.filter(O=>(O.type??"line")!=="band").flatMap(O=>{const B=O.axis==="primary"?Te:Ce,L=O.data.x.map(fe),W=O.data.y.map(B);return O.type==="scatter"?L.map((J,re)=>({cx:[J],cy:[W[re]]})):[{cx:L,cy:W}]}),...mt.map(O=>({cx:[V,ve],cy:[O.y,O.y]}))],$=[...Wt.map(O=>({x0:O.x-h,y0:O.y-h,x1:O.x+h,y1:O.y+h})),...Y==="none"||ce||le?[]:e.map((O,B)=>({x0:V+3,y0:Z+6+B*16,x1:V+3+Math.min(O.label.length*6+8,Ie-6),y1:Z+6+B*16+13}))],P=hg({plot:{x0:V,y0:Z,x1:ve,y1:oe},card:{width:ie.w,height:ie.h},traces:b,obstacles:$});return P?{x0:P.x,y0:P.y,x1:P.x+ie.w,y1:P.y+ie.h}:void 0})(),$t=f.useMemo(()=>{if(!pt)return new Map;const h=it/2;return zv({labels:mt.filter(b=>b.label).map(b=>({id:b.id,width:(b.label?.length??0)*Yn+(b.currency.held?qn:0),lineY:b.y})),plot:ce??{x0:V,y0:Z,x1:ve,y1:oe},obstacles:[...je?[je]:[],...Wt.map(b=>({x0:b.x-h,y0:b.y-h,x1:b.x+h,y1:b.y+h})),...Y==="none"||le?[]:e.map((b,$)=>({x0:ce?ce.x0:V+3,y0:Z+6+$*Ue,x1:(ce?ce.x0:V+3)+Jt(b.label,ce?ce.x1-ce.x0:Ie-6),y1:Z+6+$*Ue+13}))],traces:(ce?[]:e).filter(b=>(b.type??"line")!=="band").map(b=>({cx:b.data.x.map(fe),cy:b.data.y.map(b.axis==="primary"?Te:Ce)}))})},[pt,je,ce,mt,Wt,Y,le,e,fe,Te,Ce,V,ve,Z,oe,Ie]),yl=(()=>{const h=Z+6;if(Y==="none"||le||e.length===0)return h;const b=ce?ce.x0:V+3,$=b+Math.max(...e.map(B=>Jt(B.label,ce?ce.x1-ce.x0:Ie-6))),P=mt.flatMap(B=>{const L=$t.get(B.id);if(!B.label||!L)return[];const W=B.label.length*Yn+(B.currency.held?qn:0),J=L.anchor==="end"?L.x-W:L.x;return[{x0:J,y0:L.y-9,x1:J+W,y1:L.y+2}]});je&&P.push(je);const O=e.length*Ue-3;for(let B=h;B+O<=oe;B+=Ue){const L={x0:b,y0:B,x1:$,y1:B+O};if(!P.some(W=>L.x0<W.x1&&W.x0<L.x1&&L.y0<W.y1&&W.y0<L.y1))return B}return h})(),wl=e.flatMap(h=>{const b=ot.find(L=>L.id===h.id),$=b?.kind==="stroked"?b.modelled.map(L=>L.basis):[],P=h.data.reckoned??[];if(P.length===0&&$.length===0)return[];const B=[...new Set([...P.map(L=>L.basis),...$])].map(L=>`${h.label}: part of this trace is reckoned, ${cg(L)}, not measured`);return P.some(L=>L.bandLo&&L.bandHi)&&B.push(`${h.label}: ${bx}`),B}),kl=mt.flatMap(h=>{const b=h.spokenLabel??h.label??h.id,$=[];return h.passed&&h.kind==="limit"&&$.push(`${b}: limit passed`),h.passed&&h.kind==="target"&&$.push(`${b}: target reached`),h.currency.held&&$.push(pi(b,h.currency.caption)),h.label&&!$t.get(h.id)&&$.length===0&&$.push(h.spokenLabel??h.label),$}),co=[...wl,...kl],$l=[x??"Telemetry line chart",...Fv(g??[]),...co].join("; "),uo=f.useMemo(()=>e.filter(h=>h.data.x.length>0).map(h=>E==="value"?mg(h):h),[e,E]),ho=f.useMemo(()=>ae?vg(uo):[],[ae,uo]),Ut=Math.min(t[0],t[1]),Xt=Math.max(t[0],t[1]),_l=E==="value"?(Xt-Ut)*rx:void 0;function Lr(h){const b=uo.map($=>{const P=gg($,h,_l),O=$.format??s,B=$.axis==="primary"?Te:Ce,L=($.type??"line")==="band";return P===null?{id:$.id,label:$.label,color:$.color,value:null}:{id:$.id,label:$.label,color:$.color,value:L&&P.y2!==void 0?`${O(P.y)} to ${O(P.y2)}`:O(P.y),currency:P.currency==="measured"?void 0:P.currency,modelled:P.currency==="modelled",y:L?void 0:B(P.y)}});if(pt)for(const $ of mt)$.kind!=="marker"&&b.push({id:`threshold-${$.id}`,label:$.kind,color:$.tone.label,value:$.label??s($.value),detail:!0,currency:$.currency.held?$.currency.mark==="modelled"?"modelled":"held":void 0,modelled:$.currency.held&&$.currency.mark==="modelled"});return{heading:(w??r)(h,t),rows:b}}function Pr(h){const{heading:b,rows:$}=Lr(h);return[b,...$.map(P=>`${P.label} ${P.value??"no sample"}${P.currency?`, ${P.currency}`:""}`)].join("; ")}const Or=e.filter(h=>(h.type??"line")!=="band").map(h=>({cx:h.data.x.map(fe),cy:h.data.y.map(h.axis==="primary"?Te:Ce)})),Fr=je?[...Or,fg(je)]:Or,Nr=et&&!ee&&ie!==null&&ie.w>0&&ie.h>0&&!je&&Ae<k-1;f.useLayoutEffect(()=>{Nr&&we({w:G,h:F,form:Ae+1})},[Nr,G,F,Ae]);const Sl=h=>{let b=h,$=Number.POSITIVE_INFINITY;for(const P of ho)P<Ut||P>Xt||Math.abs(P-h)<$&&($=Math.abs(P-h),b=P);return b},gt=ae&&Q!==null&&Q.at>=Ut&&Q.at<=Xt?Sl(Q.at):null,_t=gt===null?null:Lr(gt),Gt=_t!==null&&gt!==null?Qm({x:fe(gt),plot:{x0:V,y0:Z,x1:ve,y1:oe},heading:_t.heading,rows:_t.rows,avoid:Cr,traces:Fr}):void 0,jl=je!==void 0&&Gt!==void 0&&Gt.x0<je.x1&&Gt.x1>je.x0&&Gt.y0<je.y1&&Gt.y1>je.y0;function Ml(h){const b=h.currentTarget.getBoundingClientRect(),$=h.clientX-b.left;return $<V||$>ve?null:t[0]+($-V)/(ve-V)*(t[1]-t[0])}function El(h){const b=Ml(h);if(b===null){ye($=>$?.source==="pointer"?null:$);return}ye({at:b,source:"pointer"})}function Al(h){const b=ho.filter(B=>B>=Ut&&B<=Xt),$={ArrowLeft:h.shiftKey?-10:-1,ArrowRight:h.shiftKey?10:1,Home:-b.length,End:b.length};if(h.key==="Escape"){if(Q===null)return;h.preventDefault(),ye(null),me("");return}const P=$[h.key];if(P===void 0)return;h.preventDefault();const O=Ps(b,gt,P);O!==null&&(ye({at:O,source:"keys"}),me(Pr(O)))}function Rl(h){try{U(h.currentTarget.matches(":focus-visible"))}catch{U(!0)}if(Q!==null)return;const b=Ps(ho.filter($=>$>=Ut&&$<=Xt),null,0);b!==null&&(ye({at:b,source:"keys"}),me(Pr(b)))}function Tl(){U(!1),ye(h=>h?.source==="keys"?null:h),me("")}const Cl=ae?{tabIndex:0,onPointerMove:El,onPointerLeave:()=>ye(h=>h?.source==="pointer"?null:h),onKeyDown:Al,onFocus:Rl,onBlur:Tl}:{},yn={scaleX:fe,scaleYPrimary:Te,scaleYSecondary:Ce,plotX0:V,plotX1:ve,plotY0:Z,plotY1:oe,uid:I,labels:pt},Il=K&&g?xv(g,yn):()=>!1,fo=`plot-layer-clip-${I}`,Dr=`plot-trace-clip-${I}`;if(Ie<=0||Ze<=0)return a.jsx("svg",{width:Math.max(0,q),height:Math.max(0,te),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:a.jsx("title",{children:"Chart too small to render"})});const zr=a.jsxs("svg",{width:q,height:te,role:Wt.length>0||ae?"group":"img","aria-label":$l,"aria-describedby":ae?`${I}-crosshair-hint`:void 0,...Cl,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...ae?{touchAction:"pan-y",outline:_?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[a.jsxs("defs",{children:[a.jsx("clipPath",{id:fo,children:a.jsx("rect",{x:V,y:Z,width:Ie,height:Ze})}),a.jsx("clipPath",{id:Dr,children:a.jsx("rect",{x:V-Rn,y:Z-Rn,width:Ie+2*Rn,height:Ze+2*Rn})})]}),co.length>0&&a.jsx("title",{children:co.join("; ")}),a.jsx("rect",{x:V,y:Z,width:Ie,height:Ze,fill:"var(--color-surface-panel)"}),g&&g.length>0&&a.jsx("g",{clipPath:`url(#${fo})`,children:a.jsx(Mo,{layers:g,frame:yn,pass:"background"})}),!ee&&Bt.map((h,b)=>{const $=Te(h);return a.jsxs(kn.Fragment,{children:[a.jsx("line",{x1:V,y1:$,x2:ve,y2:$,stroke:"var(--color-border-subtle)",strokeWidth:1}),xl.has(b)&&a.jsx("text",{x:V-4,y:$,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(h,Bt)})]},`py-${b}`)}),!ee&&bn.map((h,b)=>bl.has(b)?a.jsx("text",{x:ve+4,y:Ce(h),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(h,bn)},`sy-${b}`):null),!u&&!ee&&Ht.map((h,b)=>a.jsx("line",{x1:fe(h),y1:Z,x2:fe(h),y2:oe,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${b}`)),!u&&!ee&&vl.map((h,b)=>a.jsx("text",{x:h.x,y:oe+14,textAnchor:h.anchor,fill:"var(--color-text-faint)",fontSize:11,children:h.text},`xl-${b}`)),He&&a.jsx("text",{x:(V+ve)/2,y:te-Be-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:Ro(M,Ie)}),yt&&a.jsx("text",{x:xt/2,y:(Z+oe)/2,transform:`rotate(-90 ${xt/2} ${(Z+oe)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:Ro(j&&i!=="log"?Uv(A,j,Bt):A,Ze)}),ge&&a.jsx("text",{x:Tr,y:(Z+oe)/2,transform:`rotate(90 ${Tr} ${(Z+oe)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:Ro(R,Ze)}),K&&sx(V,ve,Z,oe,v).filter(h=>!Il(h.x,h.y)).map(h=>a.jsx("circle",{cx:h.x,cy:h.y,r:1,fill:"var(--color-text-faint)",opacity:.35},h.key)),!ee&&a.jsxs(a.Fragment,{children:[a.jsx("line",{x1:V,y1:Z,x2:V,y2:oe,stroke:"var(--color-border-strong)",strokeWidth:1}),a.jsx("line",{x1:V,y1:oe,x2:ve,y2:oe,stroke:"var(--color-border-strong)",strokeWidth:1}),Pe&&a.jsx("line",{x1:ve,y1:Z,x2:ve,y2:oe,stroke:"var(--color-border-strong)",strokeWidth:1})]}),a.jsxs("g",{clipPath:`url(#${Dr})`,children:[ot.filter(h=>h.kind==="band").map(h=>a.jsx("path",{d:h.d,fill:h.color,fillOpacity:h.opacity,stroke:"none"},h.id)),ot.filter(h=>h.kind==="stroked").flatMap(h=>h.uncertainty.map((b,$)=>a.jsx("path",{d:b.d,"data-band-kind":b.kind,fill:h.color,fillOpacity:vx,stroke:b.kind==="bound"?h.color:"none",strokeOpacity:b.kind==="bound"?xx:void 0,strokeWidth:b.kind==="bound"?1:void 0},`${h.id}-band-${$}`))),ot.filter(h=>h.kind==="stroked").flatMap(h=>h.segments.map((b,$)=>a.jsxs(kn.Fragment,{children:[T&&b.basis===void 0&&ea(b.d,oe)&&a.jsx("path",{d:ea(b.d,oe)??void 0,fill:h.color,fillOpacity:.12,stroke:"none"}),a.jsx("path",{d:b.d,"data-stream-status":b.status,"data-reckoning-basis":b.basis,stroke:h.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:b.basis!==void 0?oa:void 0,strokeDasharray:b.basis!==void 0?ra:h.dashed?"4 3":void 0})]},`${h.id}-${$}`))),ot.filter(h=>h.kind==="stroked").flatMap(h=>h.modelled.map((b,$)=>a.jsx("path",{d:b.d,"data-reckoning-basis":b.basis,stroke:h.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:oa,strokeDasharray:ra},`${h.id}-modelled-${$}`))),ot.map(h=>h.kind==="stroked"&&h.tail!==null?a.jsx(Qi,{kind:"modelled",x:h.tail.cx,y:h.tail.cy},`${h.id}-tail`):null),ot.filter(h=>h.kind==="stroked").flatMap(h=>h.observed.map((b,$)=>a.jsx("circle",{cx:b.cx,cy:b.cy,r:qv,fill:h.color,"data-observed-sample":""},`${h.id}-observed-${$}`))),ot.filter(h=>h.kind==="scatter").flatMap(h=>h.points.map((b,$)=>a.jsx("circle",{cx:b.cx,cy:b.cy,r:dx,fill:h.color},`${h.id}-${$}`)))]}),e.map(h=>{if(!h.headMark)return null;const b=h.axis==="primary"?Te:Ce;let $=h.data.x.length-1;for(;$>=0&&!(Number.isFinite(h.data.x[$])&&Number.isFinite(h.data.y[$]));)$-=1;return $<0?null:a.jsx("circle",{cx:fe(h.data.x[$]),cy:b(h.data.y[$]),r:Yv,fill:h.headMark==="dot"?h.color:"var(--color-surface-panel)",stroke:h.color,strokeWidth:h.headMark==="dot"?0:1.5,"data-head-mark":h.headMark},`${h.id}-head`)}),g&&g.length>0&&a.jsx("g",{clipPath:`url(#${fo})`,children:a.jsx(Mo,{layers:g,frame:yn,pass:"foreground"})}),mt.map(h=>a.jsxs(kn.Fragment,{children:[a.jsx("line",{x1:V,y1:h.y,x2:T&&h.kind==="marker"?V+24:ve,y2:h.y,stroke:h.tone.line,strokeWidth:1,strokeDasharray:h.dashed?"4 3":void 0,"data-threshold-kind":h.kind,"data-threshold-passed":h.passed||void 0}),T&&h.kind==="marker"&&h.label&&a.jsx("text",{x:V+28,y:h.y+3.5,fill:h.tone.label,fontSize:10,children:h.label}),!(T&&h.kind==="marker")&&h.label&&$t.get(h.id)&&a.jsxs("text",{x:$t.get(h.id)?.x,y:$t.get(h.id)?.y,textAnchor:$t.get(h.id)?.anchor,fill:h.tone.label,fontSize:10,children:[h.label,h.currency.held&&a.jsx(Do,{size:10,kind:h.currency.mark??"held"})]})]},h.id)),Wt.map(h=>a.jsx(xg,{x:h.x,y:h.y,size:it,color:h.color,text:h.text},h.key)),Y!=="none"&&e.map((h,b)=>{const $=le?Oe.positions[b]:void 0,P=$?te-Be+2+$.row*Ue:yl+b*Ue;if(!le&&P+13>oe)return null;const O=$?Tn+$.x:ce?ce.x0:V+3,B=le?q-2*Tn:ce?ce.x1-ce.x0:Ie-6,L=Jt(h.label,B),W=Math.max(1,Math.floor((L-8)/6)),J=h.label.length>W?`${h.label.slice(0,Math.max(1,W-1))}...`:h.label;return a.jsxs(kn.Fragment,{children:[a.jsx("rect",{x:O,y:P,width:L,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),a.jsx("text",{x:O+3,y:P+10,fill:h.color,fontSize:10,children:J})]},h.id)}),g&&g.length>0&&pt&&a.jsx(Mo,{layers:g,frame:yn,pass:"caption"}),_t!==null&&gt!==null&&a.jsx(Jm,{x:fe(gt),plot:{x0:V,y0:Z,x1:ve,y1:oe},heading:_t.heading,rows:_t.rows,avoid:Cr,traces:Fr})]}),Br=et?a.jsx("div",{ref:X,"data-plot-card":"",style:{position:"absolute",left:je?.x0??0,top:je?.y0??0,visibility:je&&!jl?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof C=="function"?C({width:Ie-Js*2,height:Ze-Js*2,form:Ae}):C}):null,Hr=H?a.jsx("div",{"data-plot-notice":"",style:{position:"absolute",left:V,top:Z,width:Ie,height:Ze,pointerEvents:"none"},children:H}):null;return ae?a.jsxs(a.Fragment,{children:[zr,Br,Hr,a.jsx(dt,{id:`${I}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),a.jsx(dt,{role:"status","aria-live":"polite",children:se})]}):a.jsxs(a.Fragment,{children:[zr,Br,Hr]})}function sa(e,t,n,o=[]){if(t)return t;if(e.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let r=[...e.flatMap(yx),...o.filter(Number.isFinite)];if(n==="log"&&(r=r.filter(c=>c>0)),r.length===0)return n==="log"?[1,10]:[0,1];let s=r[0],i=r[0];for(const c of r)c<s&&(s=c),c>i&&(i=c);const l=Math.max(Math.max(Math.abs(s),Math.abs(i))*wx,kx);if(n==="linear"||n===void 0){if(i===s){const c=Math.abs(s)>0?Math.abs(s)*.1:1;return[s-c,i+c]}if(i>s&&i-s<l){const c=(s+i)/2;return[c-l,c+l]}}return[s,i]}function Sx(e,t){if(e===0)return"0";const n=Math.abs(e);if(n>=1e6){const o=t?Eo(t,1e6,1):1;return`${(e/1e6).toFixed(o)}M`}if(n>=1e3){const o=t?Eo(t,1e3,1):1;return`${(e/1e3).toFixed(o)}k`}if(Number.isInteger(e))return String(e);if(n<.01){const o=Math.floor(Math.log10(n)),r=e/10**o;return Math.abs(r-1)<1e-9?`1e${o}`:`${r.toFixed(1)}e${o}`}return e.toFixed(t?Eo(t,1,2):2)}const pl=f.createContext(null);function jx(e,t){const n=f.useContext(pl),o=n?.setFooter,r=n?.setDirty;f.useEffect(()=>(o?.(e),()=>o?.(null)),[o,e]),f.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function Eb(e){const{onSave:t,value:n,saved:o,saveLabel:r="Save",extra:s,disabled:i}=e,l=f.useRef(null);l.current===null&&(l.current={v:n});const c=!Tt(n,l.current.v)&&!Tt(n,o),d=f.useRef(t);d.current=t;const u=f.useMemo(()=>a.jsxs(a.Fragment,{children:[s,a.jsx(No,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:i,children:r})]}),[s,i,r]);jx(u,c)}const ml=f.createContext(null);let Mx=0;function Ab({children:e}){const[t,n]=f.useState([]),o=f.useCallback((i,l)=>{const c=`modal-${++Mx}`;return n(d=>[...d,{id:c,title:l?.title,titleAdornment:l?.titleAdornment,"aria-label":l?.["aria-label"],width:l?.width,content:i}]),c},[]),r=f.useCallback(i=>{n(l=>l.filter(c=>c.id!==i))},[]),s=f.useMemo(()=>({open:o,close:r}),[o,r]);return a.jsxs(ml.Provider,{value:s,children:[e,t.map((i,l)=>a.jsx(Ex,{entry:i,isTop:l===t.length-1,onClose:()=>r(i.id)},i.id))]})}function Rb(){const e=f.useContext(ml);if(!e)throw new Error("useModal must be used inside <ModalProvider>");return e}const aa='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Ex({entry:e,isTop:t,onClose:n}){const o=f.useRef(null),r=f.useRef(t);r.current=t,f.useEffect(()=>{const w=document.activeElement instanceof HTMLElement?document.activeElement:null;return()=>{if(w?.isConnected){document.documentElement.setAttribute(Lo,"");try{w.focus()}finally{document.documentElement.removeAttribute(Lo)}}}},[]);const s=f.useId(),i=f.useRef(!1),[l,c]=f.useState(null),[d,u]=f.useState(!1),[p,m]=f.useState(!1),v=f.useRef(null),g=f.useRef(d);g.current=d;const x=f.useRef(p);x.current=p;const S=f.useMemo(()=>({setFooter:c,setDirty:u}),[]),E=f.useCallback(()=>{if(g.current){m(!0);return}n()},[n]);return f.useEffect(()=>{function w(M){if(!(M.key!=="Escape"||!r.current)){if(x.current){M.stopPropagation(),m(!1);return}E()}}return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[E]),f.useEffect(()=>{p&&v.current?.focus()},[p]),f.useEffect(()=>{function w(M){const A=o.current;if(M.key!=="Tab"||!r.current||!A)return;const R=A.querySelectorAll(aa),j=R[0],C=R[R.length-1];if(R.length===0){M.preventDefault();return}if(M.shiftKey){document.activeElement===j&&(M.preventDefault(),C?.focus());return}document.activeElement===C&&(M.preventDefault(),j?.focus())}return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[]),f.useEffect(()=>{p||Array.from(o.current?.querySelectorAll(aa)??[]).find(w=>!w.matches('[role="img"]'))?.focus()},[p]),a.jsx(a.Fragment,{children:xa.createPortal(a.jsx(Ax,{onMouseDown:w=>{i.current=w.target===w.currentTarget},onMouseUp:w=>{i.current&&w.target===w.currentTarget&&E(),i.current=!1},children:a.jsxs(Rx,{ref:o,role:"dialog","aria-modal":"true","aria-labelledby":e.title?s:void 0,"aria-label":e.title?void 0:e["aria-label"],$width:e.width,children:[a.jsxs(Tx,{children:[e.title&&a.jsxs(Cx,{children:[a.jsx(Ix,{id:s,children:e.title}),e.titleAdornment]}),a.jsx(sr,{onClick:E,"aria-label":"Close","data-tooltip":"",children:a.jsx(Ba,{size:16})})]}),a.jsx(Lx,{children:a.jsx(fc,{children:a.jsx(pl.Provider,{value:S,children:e.content})})}),l&&!p&&a.jsx(ia,{children:l}),p&&a.jsxs(ia,{role:"alertdialog","aria-label":"Discard unsaved changes?",children:[a.jsx(Px,{children:"Discard unsaved changes?"}),a.jsx(No,{variant:"ghost",type:"button",onClick:()=>m(!1),children:"Keep editing"}),a.jsx(No,{variant:"primary",ref:v,type:"button",onClick:()=>{m(!1),n()},children:"Discard"})]})]})}),document.body)})}const Ax=y.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
`,Rx=y.div`
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
`,Tx=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-modal-bar);
  border-bottom: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
`,Cx=y.div`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,Ix=y.h2`
  margin: 0;
  ${yr}
`,Lx=y(wr)`
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
`,ia=y.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-control-row);
  padding: var(--inset-modal-bar);
  border-top: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
`,Px=y.span`
  margin-right: auto;
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
`;export{K1 as $,R1 as A,Bn as B,y1 as C,m1 as D,Kx as E,Oh as F,Jx as G,H1 as H,sr as I,e1 as J,Ab as K,c1 as L,k1 as M,_1 as N,b1 as O,yb as P,$1 as Q,x1 as R,O1 as S,P1 as T,F1 as U,u1 as V,wr as W,tb as X,d1 as Y,lh as Z,S1 as _,I1 as a,br as a$,nb as a0,dt as a1,Tt as a2,Vx as a3,pv as a4,Qn as a5,Rb as a6,jx as a7,Eb as a8,jb as a9,i0 as aA,wb as aB,h1 as aC,Fo as aD,U1 as aE,X1 as aF,n1 as aG,of as aH,o1 as aI,Do as aJ,G1 as aK,Y1 as aL,q1 as aM,r1 as aN,pl as aO,i1 as aP,vb as aQ,Jm as aR,pe as aS,Tc as aT,Ua as aU,Qi as aV,jh as aW,D1 as aX,N1 as aY,Cc as aZ,Jo as a_,ht as aa,ds as ab,Zn as ac,Za as ad,Ic as ae,Ee as af,ir as ag,Ra as ah,Dt as ai,Rc as aj,Sf as ak,L1 as al,T1 as am,lb as an,E1 as ao,ep as ap,vs as aq,jt as ar,g1 as as,wp as at,dr as au,Zx as av,fc as aw,bb as ax,mb as ay,Qx as az,C1 as b,ss as b$,Bp as b0,Ha as b1,a1 as b2,cb as b3,ze as b4,Mg as b5,zo as b6,Pt as b7,gr as b8,wi as b9,fb as bA,pi as bB,Qa as bC,ni as bD,vc as bE,Kn as bF,Vo as bG,xb as bH,pb as bI,Oi as bJ,P0 as bK,gn as bL,fp as bM,up as bN,cr as bO,sb as bP,Mb as bQ,Sb as bR,Bv as bS,ib as bT,ub as bU,rp as bV,Wf as bW,mh as bX,wh as bY,V1 as bZ,Gh as b_,Zo as ba,Zr as bb,Qo as bc,$c as bd,It as be,ki as bf,$i as bg,hc as bh,Uh as bi,ya as bj,rb as bk,lr as bl,ob as bm,Wh as bn,kb as bo,Rs as bp,Ag as bq,_b as br,gb as bs,ig as bt,ab as bu,Qm as bv,$b as bw,wa as bx,to as by,cg as bz,l1 as c,mn as c0,Lc as c1,db as c2,us as c3,Si as c4,Pc as c5,hb as c6,s1 as d,No as e,M1 as f,A1 as g,j1 as h,Ba as i,Z1 as j,v1 as k,J1 as l,Fh as m,Q1 as n,Np as o,eb as p,qp as q,W1 as r,B1 as s,f1 as t,p1 as u,z1 as v,w1 as w,t1 as x,Nh as y,ch as z};
