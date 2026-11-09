import{j as i}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import w,{css as F,createGlobalStyle as wl,keyframes as Po}from"./ext-styled-components-DAuodqsN.js";import{r as p,R as pn}from"./ext-react-C0MU9AHG.js";import{h as Ks,l as kl}from"./logger-2_QM1wvD.js";import{cg as ut,aK as mn,ck as Zs,b5 as Pr,cE as Vt,cJ as An,aW as We,b0 as Qs,l as $l}from"./view-clock-formula-BmO3Plgn.js";import{aV as _l}from"./ksp-enum-names-LbKrcBIN.js";import{c as Sn,t as Sl,d as Js,M as Ml,G as jl}from"./screen-aFy0L2zh.js";import{a1 as El,a2 as Al,U as Me,i as $o,h as ea,g as xe,j as Oe,r as Ct,a3 as Oo,N as Rn,a4 as Rl,k as Tl,K as No,a5 as Fo,a6 as Cl,a7 as Il,a8 as Ll,a9 as ta,aa as Pl,x as Or,ab as Ol,ac as Nl,ad as Fl,ae as Dl,af as zl,Z as Mt,B as Hl,e as na,_ as Bl,T as en,H as oa,ag as Wl,S as ra,ah as sa,O as Nr,A as gn,f as Fr,ai as Dr,s as ao,aj as Ul,ak as Xl,u as Gl}from"./contributionsRead-Do9zMd4m.js";import{gridToPixels as Yl}from"./ext-ui-kit-grid-CYQFMmYG.js";import{r as ql}from"./ext-react-dom-DCF8ZnaJ.js";import{bh as Vl}from"./lagrange-D4-GytmD.js";import{R as Kl}from"./use-transmissions-CeXEzzZf.js";const yv={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function wv({children:e,layout:t="inline",...n}){return i.jsx(Ql,{$layout:t,...n,children:e})}const Zl={inline:F``,fill:F`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},Ql=w.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>Zl[e]}
`;function Jl(){const e=Al();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const Hn=El(Jl),kv=Hn.Context;function $v({children:e}){return i.jsx(Hn.Provider,{children:i.jsx(ec,{children:e})})}function ec({children:e}){const t=Hn.useStore();return i.jsx(Kl.Provider,{value:t,children:e})}const Do=Hn.useStore,tc=()=>()=>{},nc=[],zr=()=>nc;function oc(){const e=Do();return p.useSyncExternalStore(e?e.subscribe:tc,e?e.getActiveHandles:zr,e?e.getActiveHandles:zr)}const Gt=new WeakMap,_o=new WeakMap;function Hr(e){for(const t of _o.get(e)??[])t()}function rc(e){return Gt.set(e,(Gt.get(e)??0)+1),Hr(e),()=>{Gt.set(e,(Gt.get(e)??1)-1),Hr(e)}}function aa(){const e=Do();return p.useSyncExternalStore(t=>{if(!e)return()=>{};const n=_o.get(e)??new Set;return _o.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(Gt.get(e)??0)>0,()=>!1)}const io=e=>Me(e),Ke={contact:{"in-contact":()=>"In contact","loss-in":e=>`LOS in ${io(e)}`,"back-in":e=>`No contact, back in ${io(e)}`,none:e=>e==="unpowered"?"No contact, no electric charge aboard":"No contact"},delay:{held:e=>`${io(e)} signal delay`,absent:()=>"no signal path"},arrival:{expected:"Expected to arrive","likely-lost":"Likely lost"},sends:{now:()=>"Sends now",held:(e,t)=>t===void 0?`Held until ${Me(e)}`:`Held until ${Me(e)}, arrives ${Me(t)}`}};function ia(e){const{contact:t}=e,n=t.kind==="loss-in"||t.kind==="back-in"?Ke.contact[t.kind](t.seconds):t.kind==="none"?Ke.contact.none(t.reason):Ke.contact[t.kind](),o=e.signalDelay===void 0?Ke.delay.absent():Ke.delay.held(e.signalDelay),r=e.sends==="now"&&e.arrival==="expected"?Ke.sends.now():e.sends==="held"&&e.heldUntilUt!==void 0?Ke.sends.held(e.heldUntilUt,e.arrivesUt):Ke.arrival[e.arrival];return`${n} · ${o}
${r}`}function la(e){if(e!==void 0)return e.arrival==="likely-lost"?"at-risk":e.sends==="held"?"held":void 0}function Ze(e,t){return Me({magnitude:e,unit:t})}function sc(e,t){const{limit:n,actual:o,unit:r}=t;if(n==null||o==null)return null;switch(e){case mn.LimitReached:{const s=ac(t.quantity),a=`${Ze(o,r)} of ${Ze(n,r)}`;return t.facilityName?`the ${t.facilityName} holds ${a} ${s}`:`it holds ${a} ${s}`}case mn.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${Ze(o,r)} of ${Ze(n,r)}`;case mn.InsufficientFunds:return`it costs ${Ze(Math.trunc(o),r)} and funds are ${Ze(Math.trunc(n),r)}`;case mn.InsufficientScience:return`it costs ${Ze(o,r)} and science is ${Ze(n,r)}`;default:return null}}function ac(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function Br(e){return e&&Zs(e)?.sentence||null}function ic(e){const t=e?.trim().replace(/\.$/,"");return t||null}function jt(e){return ca(e,"refused")}function lc(e){return ca(e,"unavailable")}function ca(e,t){const n=ut(e),o=(e.breach?sc(e.errorCode,e.breach):null)??ic(e.detail)??Br(e.reason)??Br(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function zo(e){const n=ut(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":cc(jt({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function cc(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function Ho(e){return`${ut(e)||e.command||"The command"}: no reply. May have run.`}function dc(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}function uc(e,t){const n=e===void 0||e.phase==="in-flight"||e.phase==="idle"?null:e.requestId,o=r=>(r.dispatchedAt??0)+(r.oneWaySeconds??0);return t.filter(r=>r.id!==n&&(r.predictedPhase==="awaiting-reply"||r.predictedPhase==="due")).sort((r,s)=>o(r)-o(s))}function da(e,t,n,o){let r=e,s=!1;for(const a of uc(t,n)){if(a.args===void 0){if(typeof a.commandedValue=="number"){r=a.commandedValue!==0,s=!0;continue}typeof r=="boolean"&&(r=!r,s=!0);continue}const l=So(a.args),c=l!==void 0?l:o?.(r,a.args);c!==void 0&&(s=!0,r=c)}return s?r:void 0}function hc(e,t,n,o=void 0,r){return e?"sent":n.some(s=>s.held===!0)?"held":da(o,t,n,r)===void 0?null:"modelled"}function fc(e,t,n,o=[],r){return t!=="modelled"?e:da(e,n,o,r)??e}function pc(e,t){return e===void 0||e.phase==="idle"?!1:e.phase==="in-flight"?!0:e.phase!=="confirmed"&&e.phase!=="found"?!1:t.some(n=>n.id===e.requestId)}function So(e){if(e===null||typeof e!="object")return;const t="state"in e?e.state:"enabled"in e?e.enabled:void 0;return typeof t=="boolean"?t:void 0}function ua(e,t){switch(t){case"held":return`${e} held until contact returns`;case"sent":return`${e} sent, not yet received`;case"modelled":return`${e} shown as predicted: the command should have reached the craft, and its reply is on its way back`;default:return null}}function mc(e,t,n){if(t!=="held"&&t!=="modelled")return n;const o=ua(e,t)??"";return{kind:t,caption:n===null?o:`${n.caption}. ${o}`}}function Wr(e){try{return JSON.stringify(e)??""}catch{return null}}const Bo="Not connected to the mod. Nothing can be sent",gc=4e3,xc=8e3,vc=500,Et="SENT",ha="Refused",fa="No reply",pa="Found";function ma(e,t){return e.gateFor?e.gateFor(t):e.gate}function Bn({command:e,toggle:t,unavailable:n}){const o=e.handle,r=e.members?void 0:Sn(e),s=e.options.label,[a,l]=p.useState("idle"),[c,d]=p.useState(null),[u,f]=p.useState(null),[x,m]=p.useState(!1),[g,v]=p.useState(0),[y,E]=p.useState(!1),S=p.useRef(null),R=o.streamDown===!0,j=ma(o,r),A=t?.unavailable??n??null,_=j?.blocked===!0||A!==null,C=p.useRef(!0),$=p.useRef(0);p.useEffect(()=>(C.current=!0,()=>{C.current=!1}),[]);const I=o.founds,D=p.useRef(null),G=p.useRef(I?.length??0);p.useEffect(()=>{const V=I?.length??0,ae=V>G.current;G.current=V;const W=I?.[V-1],Q=D.current;if(!ae||!W||Q===null)return;const be=W.label!==void 0&&W.label!==""&&Q.label!==void 0&&W.label!==Q.label,je=W.args!==void 0&&Q.args!==void 0&&JSON.stringify(W.args)!==JSON.stringify(Q.args);be||je||(D.current=null,f(W),d(null),l("found"))},[I]),p.useEffect(()=>{if(a!=="armed")return;const V=setTimeout(()=>l("idle"),gc);return()=>clearTimeout(V)},[a]),p.useEffect(()=>{if(a!=="refused"&&a!=="lost"&&a!=="found")return;const V=setTimeout(()=>{l("idle"),d(null),D.current=null,f(null)},xc);return()=>clearTimeout(V)},[a]),p.useEffect(()=>{if(g===0)return;const V=setTimeout(()=>m(!1),vc);return()=>clearTimeout(V)},[g]);const N=p.useCallback((V=e)=>{const ae=V.members?void 0:Sn(V),W=V.options.label,Q=$.current+1;$.current=Q,D.current=null,S.current=null,l("idle"),d(null),m(!0),v(le=>le+1),E(!0);const be=(le,ce)=>{!C.current||$.current!==Q||(d(ce),l(le),E(!1),le!=="idle"&&m(!1))},je=le=>({errorCode:le.errorCode,reason:le.reason,command:le.command,args:le.args,label:le.label??W,breach:le.breach,detail:le.detail}),we=V.options;let rt;if(V.members){const le=V.members.map(ce=>({...ce,options:{...ce.options,onRejected:st=>{ce.options.onRejected?.(st);const Fe=Pr(st);Fe.kind==="refused"&&ce.options.onRefused?.(jt({...je(Fe),label:Fe.label??ce.options.label}))}}}));rt=Sl(le,V.set??{}).then(ce=>ce.failed>0?Promise.reject(ce.firstError):void 0)}else we.before?.(ae),rt=V.handle.dangerouslySendWithoutInput(ae,W?{label:W}:void 0);rt.then(le=>{be("idle",null),we.onConfirmed?.(le)},le=>{const ce=Pr(le);if(V.members||(we.onRejected?.(le),ce.kind==="refused"&&we.onRefused?.(jt(je(ce)))),ce.kind==="lost"){D.current={args:ae,label:W},be("lost",null);return}if(ce.kind!=="refused"){be("idle",null);return}be("refused",je(ce))})},[e]),{hasUnconfirmed:P,hasFailure:q}=dc(o),Y=o.status,ne=y&&Y?.phase==="in-flight"&&Y.accepted!==!0&&(S.current===null||S.current===Y.requestId),se=x||ne;p.useEffect(()=>{y&&S.current===null&&Y?.phase==="in-flight"&&(S.current=Y.requestId)},[y,Y]);const M=t?o.inFlight.filter(t.rows??(()=>!0)):[],U=t?hc(se,Y,M,t.state,t.modelled):null,ee=t?fc(t.state,U,Y,M,t.modelled):void 0,fe=Vl(),_e=p.useRef(void 0),pe=p.useRef(void 0),Z=(pc(Y,o.inFlight)||Y?.phase==="confirmed"&&_e.current!==void 0&&t?.state===pe.current)&&_e.current!==void 0?_e.current:ee,ve=p.useRef(Z);ve.current=Z;const ke=p.useCallback(V=>{if(!R&&!_){if(t){const ae=t.args(ve.current);if(ae===void 0)return;_e.current=So(ae),pe.current=t.state,_e.current!==void 0&&(ve.current=_e.current),N({...e,args:ae});return}if(a==="refused"||a==="lost"||a==="found"){d(null),f(null),D.current=null,l("idle");return}if(V){if(se)return;if(a!=="armed"){ye.current=Wr(r),Le.current=fe,l("armed");return}}N()}},[a,se,R,_,N,r,t,e,fe]),ye=p.useRef(null),Le=p.useRef(fe);p.useEffect(()=>{a==="armed"&&(Wr(r)!==ye.current||fe!==Le.current)&&l("idle")},[a,r,fe]);const ge=a==="refused"||a==="lost"||a==="found"?a:se?"sent":_?"blocked":a;return{phase:ge,isSent:ge==="sent",isArmed:ge==="armed",isRefused:ge==="refused",isLost:ge==="lost",isFound:ge==="found",isBlocked:ge==="blocked",isOffline:R&&ge!=="sent",isUnavailable:A!==null,command:e,refusalText:c?jt(c):A!==null?A:ge==="blocked"&&j?lc({...j,label:j.label??s,args:j.args??r}):null,foundText:u?zo(u):null,lossText:ge==="lost"?Ho({args:r,label:s}):null,pressWith:V=>{R||(_e.current=So(Sn(V)),N(V))},toggleView:t?{shown:ee,on:typeof ee=="number"?ee>0:ee===!0,word:U==="sent"?t.sentWord??Et:t.word(ee),reserve:[...t.words,t.sentWord??Et],confirmation:U,unavailable:A,marking:mc(t.name,U,t.marking??null),sentence:ua(t.name,U)}:null,hasUnconfirmed:P,hasFailure:q,press:ke}}function bc({command:e,unavailable:t}){const n=Bn({command:{kind:"bound",handle:e.handle,args:void 0,options:e.options},unavailable:t}),o=xa(n),r=n.isBlocked||n.isUnavailable||n.isOffline||t!=null;return ga(n,r,o,s=>{if(r)return;const a=e.toArgs(s);a!==void 0&&n.pressWith(Js(e.handle,a,e.options))},t??null)}function _v({command:e,unavailable:t}){const n=Bn({command:e,unavailable:t}),o=xa(n),r=n.isBlocked||n.isUnavailable||n.isOffline||t!=null;return ga(n,r,o,()=>{r||n.press(!1)},t??null)}function ga(e,t,n,o,r){const s=e.command.handle,a=e.isBlocked&&!e.isUnavailable,l=e.isSent?Et:e.isRefused?ha:e.isLost?fa:e.isFound?pa:null,c=s.sendStatus,d=c===void 0?void 0:ia(c),u=e.foundText??e.refusalText??(e.isLost?e.lossText:null),f=u??(e.isSent?"Sent, not yet received":e.isOffline?Bo:r??d);return{control:e,send:o,word:l,tip:f??void 0,inert:t,edge:{"data-command-edge":a?"blocked":e.isLost||e.isRefused||e.hasUnconfirmed||e.hasFailure?"warn":void 0,"data-command-phase":e.phase,"data-stream":e.isOffline?"down":void 0,"data-predicted":a?void 0:la(c),"aria-disabled":t?!0:void 0},announce:n?null:u??(e.isSent?"Sent, not yet received":null)}}function xa(e){return aa()&&e.command.handle.railed===!0}const Sv="10ch",va=F`
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
`,Mv=F`
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
`,ht=F`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,sn=F`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,nt=w.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function ft({children:e,"aria-label":t,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:r=!1,as:s="span",className:a}){const c={role:n?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":t,className:a,"data-live-region":""};return n?i.jsx(nt,{as:s,...c,children:e}):p.createElement(s,c,e)}const yc="data-restoring-focus",wc=120,kc=48,$c=120,Ur=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function an(e){return ba(e,"below")}function ba(e,t){const[n,o]=p.useState(null),[r,s]=p.useState(!1),[a,l]=p.useState(!1),[c,d]=p.useState(!1),[u,f]=p.useState(!1),[x,m]=p.useState(!1),g=p.useRef(null),v=p.useRef(null),y=p.useRef(!1),E=p.useRef(!1),S=p.useRef(null),R=e!=null&&e!==""?e:null,j=n!==null&&(r||a||c||u||x),A=p.useCallback(()=>{S.current!==null&&clearTimeout(S.current),S.current=null},[]),_=p.useCallback(()=>{A(),o(null),s(!1),l(!1),d(!1),f(!1),m(!1),y.current=!1},[A]);p.useEffect(()=>{if(!u)return;const I=()=>{const G=document.getSelection(),N=G!==null&&!G.isCollapsed&&v.current?.contains(G.anchorNode)===!0;!y.current&&!N&&f(!1)},D=()=>{y.current=!1,I()};return document.addEventListener("pointerup",D),document.addEventListener("selectionchange",I),()=>{document.removeEventListener("pointerup",D),document.removeEventListener("selectionchange",I)}},[u]),p.useEffect(()=>{if(!x)return;const I=D=>{const G=D.target;G instanceof Node&&(g.current?.contains(G)||v.current?.contains(G)||_())};return document.addEventListener("pointerdown",I,!0),()=>document.removeEventListener("pointerdown",I,!0)},[x,_]);const C=p.useCallback(()=>{A(),S.current=setTimeout(()=>{S.current=null,s(!1),d(!1)},$c)},[A]);if(p.useEffect(()=>A,[A]),p.useEffect(()=>{if(n!==null)return window.addEventListener("scroll",_,!0),window.addEventListener("resize",_),()=>{window.removeEventListener("scroll",_,!0),window.removeEventListener("resize",_)}},[n,_]),p.useEffect(()=>{if(!j||R===null)return;const I=D=>{D.key==="Escape"&&(D.stopPropagation(),_())};return document.addEventListener("keydown",I,!0),()=>document.removeEventListener("keydown",I,!0)},[j,R,_]),R===null)return{anchor:{},tip:null};const $=I=>{const D=I.getBoundingClientRect();o({top:D.bottom,left:D.left,above:t==="above"?D.top>=kc:window.innerHeight-D.bottom<wc,anchorTop:D.top})};return{anchor:{"data-tooltip":R,onPointerEnter:I=>{I.pointerType!=="touch"&&(A(),$(I.currentTarget),s(!0))},onPointerLeave:C,onPointerDown:I=>{E.current=!0,I.pointerType!=="touch"&&_()},onPointerUp:I=>{if(E.current=!1,I.pointerType==="touch"){if(x){_();return}g.current=I.currentTarget,$(I.currentTarget),m(!0)}},onFocus:I=>{E.current||document.documentElement.hasAttribute(yc)||($(I.currentTarget),l(!0))},onBlur:()=>{l(!1),!r&&!c&&!x&&o(null)}},tip:j?ql.createPortal(i.jsx(_c,{ref:v,at:n,text:R,onPress:()=>{y.current=!0,f(!0)},onPointerEnter:()=>{A(),d(!0)},onPointerLeave:C}),document.body):null}}const _c=p.forwardRef(function({at:t,text:n,onPress:o,onPointerEnter:r,onPointerLeave:s},a){const l=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return i.jsx(Mc,{ref:a,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),o()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...l,left:t.left,"--tip-left":`${t.left}px`},children:n})});function yt(e,t){return(...n)=>{typeof e=="function"&&e(...n),t?.(...n)}}function Ce({text:e,children:t,focusable:n=!1,announce:o=!0,placement:r="below"}){const{anchor:s,tip:a}=ba(e,r);if(e==null||e==="")return i.jsx(i.Fragment,{children:t});const l=t.props,c=l["aria-label"],d=!o||typeof c=="string"&&Ur(c).includes(Ur(e));return i.jsxs(i.Fragment,{children:[p.cloneElement(t,{"data-tooltip":e,onPointerEnter:yt(l.onPointerEnter,s.onPointerEnter),onPointerLeave:yt(l.onPointerLeave,s.onPointerLeave),onPointerDown:yt(l.onPointerDown,s.onPointerDown),onPointerUp:yt(l.onPointerUp,s.onPointerUp),onFocus:yt(l.onFocus,s.onFocus),onBlur:yt(l.onBlur,s.onBlur),"aria-description":d?l["aria-description"]:e,tabIndex:n?l.tabIndex??0:l.tabIndex}),a,n&&i.jsx(Sc,{})]})}const Sc=wl`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Mc=w.div`
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
`;function jc(e){return e==="neutral"?"go":e}const Wo=e=>F`
  background: ${$o[e]};
  border-color: ${$o[e]};
  color: ${ea[e]};
`,Ec=e=>F`
  border-color: ${xe[e]};
  color: ${Oe[e]};
`,Xr={default:F`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:F`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},Ac=F`
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
`,Rc=F`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function Tc(e,t){return e==="text"?Ac:e==="primary"?Wo(t):t==="neutral"?Xr[e]:F`
    ${Xr[e]}
    ${Ec(t)}
  `}const Cc=F`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,Ic={sm:F`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:F`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},ya=w.button`
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

  ${({$size:e})=>Ic[e]}
  ${({$variant:e,$tone:t})=>Tc(e,t)}
  ${({$pressed:e,$tone:t})=>e?Wo(jc(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":Cc}
  ${ht}
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

  ${({$variant:e})=>e==="text"?Rc:""}
`,Uo=w.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-faint);
  font-size: var(--font-size-base);
  line-height: var(--line-height-flush);
  padding: var(--inset-glyph-button);
  transition: color var(--duration-fast);

  /* A target of at least 24 by 24 on a fine pointer, whatever size the caller draws the glyph at; a coarse pointer already gets the touch target. */
  @media (pointer: fine) {
    min-width: 24px;
    min-height: 24px;
  }

  @media (hover: hover) {
    &:hover:not([aria-disabled="true"]) {
      color: var(--color-text-primary);
    }
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
    border-radius: var(--radius-regular);
    ${Wo("go")}
  }
  ${ht}
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
`;function wa(e){let t="";return p.Children.forEach(e,n=>{if(typeof n=="string"||typeof n=="number"){t+=String(n);return}p.isValidElement(n)&&(t+=wa(n.props.children))}),t.replace(/\s+/g," ").trim()}function ka({label:e,children:t,disabledReason:n}){return Lc({label:e,children:t,disabledReason:n})}function Lc({label:e,children:t,disabledReason:n}){const o=e!==void 0&&e!==""&&e!==wa(t)?e:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function $a(e,t){return e===!0&&t!==void 0&&t!==""}function _a(e){e.preventDefault(),e.stopPropagation()}function Sa(e,t,n){return t===null||e.props["data-tooltip"]!==void 0?e:i.jsx(Ce,{text:t,announce:n,children:e})}const jv=p.forwardRef(function({label:t,icon:n,type:o,...r},s){return i.jsx("button",{ref:s,type:o??"button","aria-label":t,...r,children:i.jsx(Ma,{label:t,icon:n})})});function Ma({label:e,icon:t}){const n=p.useRef(null),o=p.useRef(null),[r,s]=p.useState(!0);return p.useLayoutEffect(()=>{const a=n.current,l=o.current;if(!a||!l)return;const c=()=>{s(l.scrollWidth<=a.clientWidth)};if(c(),typeof ResizeObserver>"u")return;const d=new ResizeObserver(c);return d.observe(a),d.observe(l),()=>d.disconnect()},[]),i.jsxs(Pc,{ref:n,children:[i.jsx(Oc,{ref:o,"aria-hidden":"true",children:e}),r?i.jsx(Nc,{"aria-hidden":"true",children:e}):i.jsx(Fc,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const Pc=w.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,Oc=w.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,Nc=w.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,Fc=w.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=e=>{const t=zc(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Bc=p.createContext({}),Wc=()=>p.useContext(Bc),Uc=p.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:o,className:r="",children:s,iconNode:a,...l},c)=>{const{size:d=24,strokeWidth:u=2,absoluteStrokeWidth:f=!1,color:x="currentColor",className:m=""}=Wc()??{},g=o??f?Number(n??u)*24/Number(t??d):n??u;return p.createElement("svg",{ref:c,...lo,width:t??d??lo.width,height:t??d??lo.height,stroke:e??x,strokeWidth:g,className:ja("lucide",m,r),...!s&&!Hc(l)&&{"aria-hidden":"true"},...l},[...a.map(([v,y])=>p.createElement(v,y)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=(e,t)=>{const n=p.forwardRef(({className:o,...r},s)=>p.createElement(Uc,{ref:s,iconNode:t,className:ja(`lucide-${Dc(Gr(e))}`,`lucide-${e}`,o),...r}));return n.displayName=Gr(e),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Gc=H("arrow-down",Xc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],qc=H("arrow-left",Yc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Kc=H("arrow-right",Vc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Qc=H("arrow-up-to-line",Zc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],ed=H("arrow-up",Jc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],nd=H("bell",td);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],rd=H("check",od);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ad=H("chevron-down",sd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ld=H("chevron-left",id);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],dd=H("chevron-right",cd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],hd=H("chevron-up",ud);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],pd=H("columns-2",fd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],gd=H("computer",md);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],vd=H("corner-down-left",xd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],yd=H("database",bd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],kd=H("file-text",wd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],_d=H("grip",$d);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Md=H("heart",Sd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Ed=H("history",jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Rd=H("house",Ad);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Cd=H("info",Td);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],Ld=H("joystick",Id);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Od=H("layers",Pd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Fd=H("lightbulb-off",Nd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],zd=H("lightbulb",Dd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Bd=H("lock",Hd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Ud=H("maximize",Wd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Gd=H("menu",Xd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],qd=H("microscope",Yd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],Kd=H("minimize",Vd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Qd=H("pause",Zd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],eu=H("pencil",Jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],nu=H("play",tu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ru=H("plus",ou);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],au=H("radio",su);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],lu=H("rectangle-horizontal",iu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],du=H("rectangle-vertical",cu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],hu=H("rotate-ccw",uu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],pu=H("rotate-cw",fu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],gu=H("rows-2",mu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]],vu=H("satellite-dish",xu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],yu=H("satellite",bu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ku=H("settings",wu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],_u=H("square",$u);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Mu=H("star",Su);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Eu=H("undo-2",ju);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Ru=H("volume-2",Au);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Cu=H("volume-x",Tu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Lu=H("wrench",Iu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ou=H("x",Pu),Nu="var(--icon-size-control)",Fu={strokeWidth:1.8,"aria-hidden":!0};function B(e,t){const n=p.forwardRef(({label:o,size:r=Nu,style:s,...a},l)=>{const c=typeof r=="number"?{size:r,style:s}:{style:{width:r,height:r,...s}},d=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return i.jsx(e,{...Fu,...t,...d,...a,...c,ref:l})});return n.displayName=e.displayName??e.name,n}const Ev=B(_d),Av=B(Ld),Rv=B(Ed),Tv=B(Rd),Cv=B(Cd),Iv=B(Bd),Lv=B(au),Pv=B(Ru),Ov=B(Cu),Nv=B(nd),Fv=B(Od),Dv=B(ku),zv=B(yu),Hv=B(vu),Bv=B(Ud),Wv=B(Kd),Uv=B(yd),Xv=B(gd),Gv=B(kd),Yv=B(ru,{strokeWidth:2.4}),Du=B(Ou),qv=B(eu),Vv=B(rd),zu=B(Mu),Kv=B(Md),Zv=B(Gd),Hu=B(qd),Qv=B(nu),Jv=B(Qd),e1=B(_u),t1=B(hd),n1=B(ad),o1=B(ld),r1=B(dd),s1=B(qc),a1=B(ed),i1=B(Kc),l1=B(Gc),c1=B(Qc),d1=B(Eu),u1=B(pu),h1=B(hu),f1=B(pd),p1=B(lu),m1=B(gu),g1=B(du),Ea=B(vd),Bu=H("space-helmet",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M10.5 8h3a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 1 0-7z",key:"visor"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),Wu=H("space-helmet-visor-up",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M8 7.5C9.5 5 14.5 5 16 7.5",key:"visor"}],["circle",{cx:"12",cy:"12.5",r:"2",fill:"currentColor",key:"face"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),x1=B(Bu),v1=B(Wu),b1=B(Lu),y1=B(zd),w1=B(Fd),Xo="max(0.075em, 1.25px)",ue={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},Mo=ue.held.domSize,jo=ue.modelled.domSize,Uu=F`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Mo} + 0.14em);
  }
`,Xu=F`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${jo} + 0.14em);
  }
`;function Gu(e){return F`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${ue[e].hollowDomSize} + 0.14em);
    }
  `}function Aa(e,t=!1){return t?Gu(e):e==="current"?null:e==="modelled"?Xu:Uu}const Yu=w.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Mo};
  height: ${Mo};
  background: ${ue.held.color};
`,qu=w.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${jo};
  height: ${jo};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${ue.modelled.color};
`,Go=e=>F`
  position: absolute;
  right: 0;
  top: 0;
  width: ${ue[e].hollowDomSize};
  height: ${ue[e].hollowDomSize};
`,Vu=w.span`
  ${Go("current")}
  border: ${Xo} solid ${ue.current.color};
  border-radius: var(--radius-circle);
`,Ku=w.span`
  ${Go("held")}
  border: ${Xo} solid ${ue.held.color};
`,Zu=w.span`
  ${Go("modelled")}
  --stroke: ${Xo};
  background: ${ue.modelled.color};
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
`,Qu={current:Vu,held:Ku,modelled:Zu};function Ra({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?Qu[e]:e==="modelled"?qu:Yu;return i.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const Ju=w.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>Aa(e??"held",t)}
`;function Eo({caption:e,kind:t="held",elsewhere:n=!1,children:o,...r}){const{anchor:s,tip:a}=an(e);return i.jsxs(Ju,{$kind:t,$elsewhere:n,...r,...s,children:[o,i.jsx(Ra,{kind:t,elsewhere:n}),e!==null&&i.jsxs(nt,{"data-unit-currency":"",children:[", ",e]}),a]})}const eh=w(Eo)`
  position: static;

  &::after {
    content: none;
  }

  & > [data-held-mark] {
    top: 3px;
    right: 3px;
  }
`,Ta=p.forwardRef(function({variant:t="default",tone:n,size:o="md",pressed:r,predictedOutcome:s,disabledReason:a,marked:l,type:c="button",...d},u){const f=$a(d.disabled,a),x=ka({label:d["aria-label"],children:d.children,disabledReason:f?a:void 0}),{disabled:m,onClick:g,children:v,...y}=d;return Sa(i.jsx(ya,{ref:u,$variant:t,$tone:n??(t==="primary"?"go":"neutral"),$size:o,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,"data-held-button":l?"":void 0,...y,disabled:f?void 0:m,...f?{"aria-disabled":!0}:{},onClick:f?_a:g,type:c,children:l?i.jsx(eh,{kind:l.kind,caption:l.caption,children:v}):v}),x,f)}),th=w.span`
  display: inline-grid;
  justify-items: center;
`,nh=w.span`
  grid-area: 1 / 1;
`,oh=w.span`
  grid-area: 1 / 1;
  visibility: hidden;

  &::before {
    content: attr(data-word);
  }
`;function rh({shown:e,reserve:t}){return i.jsxs(th,{children:[[...new Set(t)].map(n=>i.jsx(oh,{"data-word":n,"aria-hidden":"true"},n)),i.jsx(nh,{children:e})]})}function ln(e){return"press"in e&&typeof e.press=="function"}function sh(e){return"kind"in e?e:Js(e,void 0)}function ah(e){const{command:t,unavailable:n,...o}=e;return ln(t)?i.jsx(Yo,{...o,control:t}):i.jsx(Ca,{...o,command:t,unavailable:n})}function ih(e){const{command:t,unavailable:n,...o}=e;return ln(t)?i.jsx(Yo,{...o,glyph:!0,control:t}):i.jsx(Ca,{...o,glyph:!0,command:t,unavailable:n})}function Ca({command:e,unavailable:t,...n}){const o=Bn({command:sh(e),unavailable:t});return i.jsx(Yo,{...n,control:o})}function Yo({control:e,glyph:t=!1,children:n,confirmLabel:o,refusedLabel:r=ha,lostLabel:s=fa,foundLabel:a=pa,confirmAriaLabel:l,sentAriaLabel:c,blockedAriaLabel:d,pressed:u,variant:f="default",tone:x="neutral",icon:m,confirmIcon:g,onPressReady:v,size:y="md",confirmTone:E="go",tip:S,"aria-label":R,...j}){const{phase:A,isSent:_,isArmed:C,isRefused:$,isLost:I,isFound:D,isBlocked:G,isUnavailable:N,isOffline:P,refusalText:q,foundText:Y,lossText:ne,hasUnconfirmed:se,hasFailure:M,press:U,command:ee}=e,fe=ee.handle,_e=ee.members?void 0:Sn(ee),pe=ee.options.label,me=o!==void 0,Z=pe?`${pe} sent, not yet received`:"Sent, not yet received";p.useEffect(()=>{if(v)return v(()=>U(me)),()=>v(null)},[v,U,me]);const ke=t?_?i.jsx(Ea,{"aria-hidden":"true"}):C?g??m??n:n:_?Et:$?r:I?s:D?a:C?o:n,ye=m!==void 0&&typeof ke=="string",Le=ye?i.jsx(Ma,{label:ke,icon:C?g??m:m}):ke,ge=[o,Et,r,s,a],V=!t&&m===void 0&&typeof n=="string"&&ge.every($e=>$e===void 0||typeof $e=="string"),ae=ge.filter($e=>$e!==void 0).reduce(($e,pt)=>pt.length>$e.length?pt:$e,Et),Q=aa()&&fe.railed===!0?null:$?q:I?ne:D?Y:_?Z:null,be=u===!0||C||$,je=ch({restTone:f==="primary"?x:"neutral",filled:be,isRefused:$,isFound:D,isArmed:C,confirmTone:E,tone:x}),we=G&&!N,rt=we?t?"blocked":void 0:I||t&&($||se||M)?"warn":void 0,le=t?hh:uh,ce=fe.sendStatus,st=ce===void 0?S:[S,ia(ce)].filter(Boolean).join(`
`),Fe=P?[S,Bo].filter(Boolean).join(`
`):st;return i.jsxs(i.Fragment,{children:[i.jsx(Ce,{text:Y??q??ne??(_?Z:Fe),children:i.jsx(le,{type:"button","data-command-edge":rt,$tone:je,$variant:f,$fit:ye,$size:y,$pressed:be,$armed:C,$blocked:we,"aria-pressed":u,"aria-disabled":G||P||void 0,"data-unconfirmed":se?"true":void 0,"data-failed":M?"true":void 0,"data-command-phase":A,"data-stream":P?"down":void 0,"data-predicted":we?void 0:la(ce),"data-gate":we?"blocked":ma(fe,_e)?.undetermined?"undetermined":void 0,"aria-label":($?q??void 0:I?ne??void 0:D?Y??R:G?d??R:_?c??Z:C?l:R)??(ye?ke:void 0),onClick:()=>U(o!==void 0),"data-rest-label":V?n:void 0,"data-armed-label":V?ae:void 0,...j,children:V?i.jsx(dh,{children:Le}):Le})}),i.jsx(ft,{visuallyHidden:!0,children:Q})]})}function k1(e){const{command:t,...n}=e;return ln(t)?i.jsx(qo,{...n,control:t}):i.jsx(Ia,{...n,command:t})}function lh(e){const{command:t,...n}=e;return ln(t)?i.jsx(qo,{...n,glyph:!0,control:t}):i.jsx(Ia,{...n,glyph:!0,command:t})}function Ia({command:e,state:t,name:n,unavailable:o,children:r,sentWord:s,rows:a,modelled:l,marking:c,glyph:d,...u}){const f=m=>typeof r=="function"?r(m):typeof r=="string"?r:"",x=Bn({command:{kind:"bound",handle:e.handle,args:void 0,options:e.options},toggle:{state:t,name:n??"",word:f,words:[...new Set([f(!0),f(!1),f(null)])],sentWord:s,rows:a,modelled:l,marking:c,unavailable:o,args:m=>m==null?void 0:e.toArgs(!(typeof m=="number"?m>0:m))}});return i.jsx(qo,{...u,glyph:d,control:x})}function qo({control:e,glyph:t=!1,tone:n="go",size:o="md",icon:r,tip:s,"aria-label":a,...l}){const{phase:c,isOffline:d,isRefused:u,isLost:f,isBlocked:x,isUnavailable:m,refusalText:g,lossText:v,toggleView:y,hasUnconfirmed:E,hasFailure:S,press:R}=e;if(!y)return null;const{marking:j,sentence:A}=y,_=y.confirmation==="held"||y.confirmation==="modelled",C=d?Bo:x&&!m||u?g:f?v:(_?null:A)??s,D=x&&!m?"blocked":u||f||E||S?"warn":void 0,G=y.unavailable!==null||x,N=y.unavailable??(x?g:null);return i.jsxs(i.Fragment,{children:[i.jsx(Ce,{text:C,children:t?i.jsx(Uo,{type:"button","aria-pressed":y.on,"aria-disabled":G||void 0,"aria-label":a,"data-command-phase":c,"data-stream":d?"down":void 0,"data-command-edge":D,onClick:()=>R(!1),...l,children:y.confirmation==="sent"?i.jsx(Ea,{"aria-hidden":"true"}):r}):i.jsx(Ta,{type:"button",size:o,tone:y.on?n:void 0,pressed:y.on,"aria-pressed":y.on,disabled:G||void 0,disabledReason:N??void 0,marked:j,"aria-label":a,"data-command-phase":c,"data-stream":d?"down":void 0,"data-command-edge":D,onClick:()=>R(!1),...l,children:r!==void 0&&y.confirmation!=="sent"?r:i.jsx(rh,{shown:y.word,reserve:y.reserve})})}),i.jsx(ft,{visuallyHidden:!0,children:_?"":A??""})]})}function ch(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const La=Po`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,dh=w.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,uh=w(ya)`
  letter-spacing: 0.04em;

  /* Shrinks below its word so the word can be measured and give way to the icon. */
  ${({$fit:e})=>e?"min-width: 0;":""}

  ${({$armed:e})=>e&&F`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${La} 1s var(--ease-emphasis) infinite;
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
`,hh=w(Uo)`
  ${({$armed:e})=>e&&F`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${La} 1s var(--ease-emphasis) infinite;
      }
    `}
  ${({$blocked:e})=>e&&F`
      opacity: 0.5;
      cursor: help;
    `}
`,fh=p.forwardRef(function(t,n){return t.command!==void 0?i.jsx(ah,{...t}):i.jsx(Ta,{ref:n,...t})}),$1=w.button`
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
  ${ht}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,ph=p.forwardRef(function(t,n){if(t.command!==void 0){const{command:x}=t;if("kind"in x&&x.kind==="value"?!0:ln(x)&&x.toggleView!==null){const{children:g,...v}=t;return i.jsx(lh,{...v,icon:g})}return i.jsx(ih,{...t})}const{pressed:o,disabledReason:r,command:s,...a}=t,l=$a(a.disabled,r),c=ka({label:a["aria-label"],children:a.children,disabledReason:l?r:void 0}),{disabled:d,onClick:u,...f}=a;return Sa(i.jsx(Uo,{ref:n,"aria-pressed":o,...f,disabled:l?void 0:d,...l?{"aria-disabled":!0}:{},onClick:l?_a:u}),c,l)}),_1=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,mh=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,S1=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,gh=w.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,M1=w.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,j1=w.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,Vo=F`
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

  ${ht}

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
`,xh=w.input`
  ${Vo}
  width: 100%;
  ${va}
  &[data-command-phase] {
    /* Room for the word of a command inside the field, at its end. */
    padding-inline-end: 8ch;
  }
`,E1=p.forwardRef(function(t,n){return t.command?i.jsx(yh,{...t,command:t.command,forwardedRef:n}):i.jsx(Pa,{ref:n,...t})}),Pa=w.select`
  ${Vo}
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
  ${va}
  &[data-command-phase] {
    /* Room for the word inside the field, past the chevron. */
    padding-inline-end: calc(var(--inset-field-select-end) + 8ch);
  }

  @media (pointer: coarse) {
    padding-inline-end: var(--inset-field-select-end);
  }
`,vh=w.span`
  position: absolute;
  inset-block: 0;
  inset-inline-end: var(--inset-field-select-end);
  display: flex;
  align-items: center;
  pointer-events: none;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
`,bh=w.div`
  position: relative;
  width: 100%;
`;function yh({command:e,value:t,unavailable:n,forwardedRef:o,children:r,...s}){const a=bc({command:e,unavailable:n}),[l,c]=p.useState(null),d=a.control.isSent;return p.useEffect(()=>{d||c(null)},[d]),i.jsx(Ce,{text:a.tip,children:i.jsxs(bh,{children:[i.jsx(Pa,{...s,ref:o,value:l??t,...a.edge,onChange:u=>{a.inert||(c(u.target.value),a.send(u.target.value))},children:r}),i.jsx(vh,{"aria-hidden":"true",children:a.word}),i.jsx(ft,{visuallyHidden:!0,children:a.announce})]})})}const A1=w.textarea`
  ${Vo}
  width: 100%;
  resize: vertical;
`;function wh(e){if(e===void 0)return null;const{value:t}=Oo(e.magnitude,e.unit);return t===Rn?null:t}function Oa(e,t){const n=wh(t);return n===null?e:`${e}, as of ${n}`}const Ko="modelled to SCET";function kh(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function Yr(e){return An(e.value)||Vt(e.value)?{shown:e.value,held:!1,mark:null,isStatic:An(e.value),isDeterministic:Vt(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:Oa(Ct(e.grade),e.asOfUt)}}function Wn(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:An(e),isDeterministic:Vt(e),caption:null,band:null};const n=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!Vt(e.value)){const o=e.reckoning.modelled;if(e.state==="held"){const s=Yr(e),a=e.value===void 0,l=s.held||a,c=s.caption??(a?"":null);return{...s,shown:o,held:l,mark:l?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:n}}const r=e.reckoning.beyondReceived;return{shown:o,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?Ko:null,band:n}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:An(e.value),isDeterministic:Vt(e.value),caption:null,band:n}:e.state==="held"?{...Yr(e),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Na(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function $h(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:Ko}:null;if(e.state==="held"){const n=Oa(Ct(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function R1(e){return e===void 0?null:typeof e!="string"?$h(e):{kind:"held",caption:Ct(e)}}function Zo(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function T1(e,t){const n=Zo(t);return n===void 0?e:{state:"held",value:e,grade:n,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}function Qo(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function C1(e={}){return Qo(t=>Me(t,e))}const _h=.01;function I1({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const r=Math.abs(t(n)-t(o));return(e?Math.min(r,1-r):r)<=_h}}}function Fa(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(r=>!n.readsAsOne(e,r))}function Jo({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,r=v=>Rl(typeof v=="number"?v:v.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,a=kh(s);if(s?.value!==void 0&&a!==void 0)return Fa(s.value,a,Qo(r))?i.jsx(Eo,{"data-held":"",kind:"modelled",caption:`${Ko}, last received ${r(s.value)}`,children:r(a)}):i.jsx(i.Fragment,{children:r(s.value)});const l=Wn(o,{drawsReckoning:!0}),{shown:c,held:d,mark:u,caption:f}=l,x=typeof e=="number"?e:c;if(x==null)return Rn;const m=r(x),g=Na({...l,shown:x});return d?i.jsx(Eo,{...g,kind:u??"held",caption:f,children:m}):i.jsx("span",{"data-figure":g["data-figure"],children:m})}const qr={left:!1,right:!1};function Sh(e){const[t,n]=p.useState(qr),o=p.useRef(qr);return p.useEffect(()=>{if(!e)return;const r=()=>{const l=e.scrollLeft>1,c=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===l&&o.current.right===c||(o.current={left:l,right:c},n(o.current))};r(),e.addEventListener("scroll",r,{passive:!0});const s=typeof ResizeObserver>"u"?null:new ResizeObserver(r);s?.observe(e);for(const l of Array.from(e.children))s?.observe(l);const a=new MutationObserver(()=>{for(const l of Array.from(e.children))s?.observe(l);r()});return a.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",r),s?.disconnect(),a.disconnect()}},[e]),t}const Vr=w.div`
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
`;function Un(e){const t=p.useRef(null),[n,o]=p.useState(e),[r,s]=p.useState(null);return p.useEffect(()=>{t.current!==r&&s(t.current)}),p.useEffect(()=>{if(!r||typeof ResizeObserver>"u")return;const a=new ResizeObserver(l=>{for(const c of l)c.contentRect.width>0&&c.contentRect.height>0&&o({w:Math.floor(c.contentRect.width),h:Math.floor(c.contentRect.height)})});return a.observe(r),()=>a.disconnect()},[r]),{ref:t,size:n}}const Mh='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Da(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),r=n[o+1]??n[o-1];if(r&&r!==e){r.focus();return}const s=t.closest("[data-panel-rail-frame]"),a=s?s.parentElement?.querySelector("[data-panel-body]"):t.closest("[data-panel-body]");if(!a)return;const l=[...a.querySelectorAll(Mh)].find(c=>c!==e);if(l){l.focus();return}a.hasAttribute("tabindex")||a.setAttribute("tabindex","-1"),a.focus()}const tn=700;function er(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const Xn={"in-transit":1/6,"awaiting-reply":1/2,due:2/3,overdue:2/3,lost:2/3};function za(e){const t=e.reachEtaSeconds;if(e.hold&&t!==null&&t>0)return jh(e.hold);const n=Ha(e);if(t===null||n===null)return Xn[e.predictedPhase];const o=n-t,r=e.replyEtaSeconds===null?1/3:2/3;return Math.max(0,Math.min(r,o/(3*n)))}function Kr(e){const t=Ha(e);return t===null?0:Math.max(0,(1-za(e))*3*t)}function jh(e){return Math.max(0,Math.min(1,e.outbound))/3}function Ha(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function Ba(e){return Eh(e).map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:t.settling==="confirmed"?1:za(t),glyph:t.glyph??er(t.label||t.command),...t.held?{held:!0}:{},...t.settling?{settling:t.settling,settleSeconds:t.settleSeconds??0}:{},...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function Eh(e){return e.some(t=>t.dispatchedAt!==void 0)?e.map((t,n)=>({item:t,index:n})).sort((t,n)=>(t.item.dispatchedAt??Number.NEGATIVE_INFINITY)-(n.item.dispatchedAt??Number.NEGATIVE_INFINITY)||t.index-n.index).map(({item:t})=>t):e}function L1({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||Ml(e)!=="shown"?"none":n||jl({oneWaySeconds:We("s",e)})==="live"?"badge":t?"strip":"none"}const Ah={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},nn={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Rh(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Ah[e.phase]}const Gn=new Set(["overdue","lost"]),Th=180,Ch=96;function Wa(e){return Me(We("s",Math.max(0,e)))}function Ih(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const Lh=1;function tr(e){const t=_l(),n=p.useRef(t);n.current=t;const[o,r]=p.useState(e),s=p.useRef({eta:e,ut:co(t)});return p.useEffect(()=>{const a=s.current.eta;(a===null!=(e===null)||a!==null&&e!==null&&Math.abs(e-a)>=Lh)&&(s.current={eta:e,ut:co(n.current)},r(e))},[e]),p.useEffect(()=>{const a=setInterval(()=>{const{eta:l,ut:c}=s.current;if(l===null)return;const d=co(n.current);if(d!==void 0){if(c===void 0){s.current={eta:l,ut:d};return}r(Math.max(0,l-(d-c)))}},1e3);return()=>clearInterval(a)},[]),o}function co(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function Ph({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":r="In-flight commands",variant:s="inline",onDismiss:a}){const{ref:l,size:c}=Un({w:320,h:0}),d=s==="rail"||s==="expanded"?e:e.filter(f=>!f.settling);if(s==="rail")return d.length===0?null:i.jsx(Oh,{items:d,"aria-label":r});if(s==="expanded")return d.length===0?null:i.jsx(Yh,{items:d,"aria-label":r,onDismiss:a});const u=n!=="auto"?n:c.w>=Th?"full":c.w>=Ch?"compact":"badge";return d.length===0?null:u==="badge"?i.jsx(Nh,{ref:l,items:d,mode:t,"aria-label":r}):i.jsx(Ya,{ref:l,role:"list","aria-label":r,"data-mode":t,"data-density":u,$row:o==="row",children:d.map(f=>i.jsx(Fh,{item:f,$compact:u==="compact"},f.id))})}const tt=8,Ua=1/3;function Oh({items:e,"aria-label":t}){const n=e.filter(o=>!o.settling);return i.jsx(Dh,{role:"img","aria-label":`${t}: ${n.length} in flight`,children:e.map(o=>{const r=Math.max(0,Math.min(1,o.progress??Xn[o.phase]));return i.jsx(Ga,{...o.settling?{"data-role":"settling","data-settling":o.settling}:{"data-role":"glow","data-phase":o.phase,...o.held?{"data-held":""}:{}},$settling:o.settling,style:{"--dot-colour":Xa(o),"--dot-progress":r,"--settle-seconds":o.settleSeconds??0}},o.id)})})}const Nh=function({ref:t,items:n,mode:o,"aria-label":r}){const s=tr(Ih(n)),a=n.some(c=>Gn.has(c.phase)),l=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${Wa(s)}`;return i.jsx(Ce,{text:n.map(c=>c.label).join(`
`),focusable:!0,children:i.jsx(Ya,{ref:t,role:"group","aria-label":`${r}: ${l}`,"data-mode":o,"data-density":"badge",$row:!1,children:i.jsxs(qa,{$phase:a?"overdue":"in-transit",children:[i.jsx(Va,{"aria-hidden":"true",$pulse:!a,children:"↑"}),i.jsxs(Ka,{children:[n.length,s!==null&&i.jsxs(i.Fragment,{children:[" · ",i.jsx(Jo,{value:Math.max(0,s)})]})]})]})})})};function Fh({item:e,$compact:t}){const n=tr(e.etaSeconds),o=Gn.has(e.phase),r=n===null?`${e.label}, ${nn[e.phase]}`:`${e.label}, ${Wa(n)}`;return i.jsxs(qa,{$phase:e.phase,role:"listitem",...t?{"aria-label":r,title:r}:{},children:[i.jsx(Va,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Rh(e)}),!t&&i.jsx(tf,{children:e.label}),i.jsx(Ka,{children:n===null?nn[e.phase]:i.jsx(Jo,{value:Math.max(0,n)})})]})}const Tn=Po`
  from { opacity: 1; }
  to { opacity: 0; }
`,Dh=w.div`
  position: relative;
  display: block;
  width: 100%;
  height: 16px;
  /* Clips the part of each dot above the strip, whatever box holds it. */
  overflow: hidden;
`,zh=14;function Hh(e,t,n){const o=Math.min(zh,(n-tt)/Math.max(1,t)),r=Math.ceil(e/2)*(e%2===1?1:-1),s=n/2+r*o;return Math.max(0,Math.min(n-tt,s-tt/2))}function Zr({items:e,height:t}){return i.jsx(Uh,{role:"group","aria-label":"Commands on the rail",style:{height:t},children:e.map((n,o)=>{const r=Math.max(0,Math.min(1,n.progress??Xn[n.phase]));return i.jsx(Ce,{text:n.settling?null:`${n.label}, ${nn[n.phase]}`,announce:!1,focusable:!n.settling,children:i.jsx(Ga,{...n.settling?{"data-role":"settling","data-settling":n.settling,"aria-hidden":!0}:{role:"img","aria-label":`${n.label}, ${nn[n.phase]}`,"data-role":"glow","data-phase":n.phase,...n.held?{"data-held":""}:{}},"data-lane":o,$settling:n.settling,$lane:!0,style:{"--dot-colour":Xa(n),"--dot-progress":r,"--settle-seconds":n.settleSeconds??0,"--lane-top":`${Hh(o,e.length,t)}px`}})},n.id)})})}function Xa(e){return e.settling==="confirmed"?"var(--color-accent-fg)":e.held||e.settling==="failed"||Gn.has(e.phase)?xe.warn:"var(--color-accent-fg)"}const Bh=e=>e==="confirmed"?F`
        transition: left var(--settle-time) var(--ease-linear);
        animation: ${Tn} ${tn}ms var(--ease-standard) var(--settle-time) forwards;
      `:e==="failed"?F`
          animation: ${Tn} ${tn}ms var(--ease-standard) forwards;
        `:null,Wh=Po`
  from { top: ${-tt*(1-Ua)}px; }
  to { top: var(--lane-top); }
`,Uh=w.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,Ga=w.span`
  position: absolute;
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  top: ${-tt*(1-Ua)}px;
  /* The dot's own width is kept inside the strip, so it is whole at both ends. */
  left: calc((100% - ${tt}px) * var(--dot-progress));
  width: ${tt}px;
  height: ${tt}px;
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
    ${({$settling:e})=>Bh(e)}
    ${({$lane:e,$settling:t})=>e&&!t&&F`
        animation: ${Wh} var(--duration-base) var(--ease-entrance);
      `}
  }
`,Xh=54,Kt=5,Gh=3,nr=Xh-8-Kt,Cn=60,Qr={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:xe.warn,lost:xe.warn};function Yh({items:e,"aria-label":t,onDismiss:n}){const[o,r]=p.useState(null),s=Sh(o),a=s.left||s.right;return i.jsxs(Vh,{"data-command-list":"",children:[i.jsx(Kh,{ref:r,role:"list","aria-label":t,...a?{tabIndex:0,"data-scrolls":""}:{},children:e.map(l=>i.jsx(qh,{item:l,onDismiss:n},l.id))}),i.jsx(Vr,{$position:"left",$visible:s.left}),i.jsx(Vr,{$position:"right",$visible:s.right})]})}function qh({item:e,onDismiss:t}){const n=e.glyph??er(e.label),o=e.settling==="confirmed"?Qr["awaiting-reply"]:e.held||e.settling==="failed"?xe.warn:Qr[e.phase],r=Math.max(0,Math.min(1,(e.progress??Xn[e.phase])*1.5)),s=Gn.has(e.phase)&&!!t&&!e.settling,a=`${e.label}, ${nn[e.phase]}`;return i.jsxs(Zh,{role:"listitem","aria-label":a,...e.settling?{"data-settling":e.settling,"aria-hidden":!0}:{"data-phase":e.phase,...e.held?{"data-held":""}:{}},$settling:e.settling,style:{color:o,"--settle-seconds":e.settleSeconds??0},children:[i.jsx(Ce,{text:s?`Dismiss ${e.label}`:a,announce:!1,children:i.jsxs(Qh,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:l=>{Da(l.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[i.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&i.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),i.jsx(Jh,{children:i.jsx("span",{className:"fill",style:{"--fill-ratio":r}})})]})}const Vh=w.div.attrs({role:"group"})`
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
    ${nr}px + ${Kt}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
  /* Holds the overflow glows over the row's edges. */
  position: relative;
`,Kh=w.div`
  display: flex;
  flex-direction: row;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${Gh}px;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  /* Native scrollbar hidden: the edge glows show scroll state. */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${sn}
`,Zh=w.div`
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @media (prefers-reduced-motion: no-preference) {
    ${({$settling:e})=>e==="confirmed"?F`
            animation: ${Tn} ${tn}ms var(--ease-standard)
              var(--settle-time) forwards;
            .fill {
              transition:
                height var(--settle-time) var(--ease-linear),
                width var(--settle-time) var(--ease-linear);
            }
          `:e==="failed"?F`
              animation: ${Tn} ${tn}ms var(--ease-standard) forwards;
            `:null}
  }

  @container (min-width: ${Cn}px) {
    flex-direction: column;
  }
`,Qh=w.div`
  --s: ${nr}px;
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

  @container (min-width: ${Cn}px) {
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
`,Jh=w.div`
  --s: ${nr}px;
  position: relative;
  flex: 0 0 ${Kt}px;
  width: ${Kt}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${Cn}px) {
    width: var(--s);
    height: ${Kt}px;
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
  @container (min-width: ${Cn}px) {
    .fill {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: calc(var(--fill-ratio, 0) * 100%);
      height: auto;
    }
  }
`,Ya=w.div`
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
`,ef={"in-transit":F`
    color: var(--color-text-primary);
  `,"awaiting-reply":F`
    color: var(--color-text-muted);
  `,due:F`
    color: var(--color-text-muted);
  `,overdue:F`
    color: ${Oe.warn};
  `,lost:F`
    color: ${Oe.warn};
  `},qa=w.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>ef[e]}
`,Va=w.span`
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
`,tf=w.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ka=w.span`
  flex: 0 0 auto;
`,nf="Awaiting first signal";function P1({expectedIn:e}){const t=e??0,n=Number.isFinite(t)&&t>0;return i.jsxs(i.Fragment,{children:[nf,n&&Ks()&&i.jsx(of,{total:t})]})}function of({total:e}){return i.jsx(rf,{seconds:tr(e)??0})}function rf({seconds:e}){return e>0?i.jsxs(i.Fragment,{children:[" ",i.jsx(Tl,{level:"muted",children:i.jsx(Jo,{value:Math.ceil(e)})})]}):null}const or=e=>F`
  --fit-box: ${e};
`,sf=e=>F`
  --fit-mask: ${e};
`;function Za(e){return e==="go"||e==="info"?"caution":e}function In({tone:e,size:t="md",live:n=!1,report:o,held:r,children:s,...a}){const l=Zo(r),c=l===void 0?e:Za(e),d=c===void 0||c==="neutral"?void 0:c,u=o?.label??(typeof s=="string"?s:"");No(o?{id:o.id,severity:d??"go",label:u}:null);const f=n?{role:"status","aria-live":"polite"}:{},x=l===void 0?null:Ct(l),m=Reflect.get(a,"data-tooltip")!==void 0,{anchor:g,tip:v}=an(m?null:x);return i.jsxs(i.Fragment,{children:[i.jsxs(df,{$severity:d,$size:t,...f,...g,...a,children:[s,x!==null&&i.jsxs(i.Fragment,{children:[i.jsx(uf,{"aria-hidden":"true","data-held-mark":""}),i.jsxs(nt,{"data-unit-currency":"",children:[", ",x]})]})]}),v]})}const af=F`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,lf={go:F`
    background: transparent;
    border-color: ${xe.go};
    color: ${Oe.go};
  `,info:F`
    background: transparent;
    border-color: ${xe.info};
    color: ${Oe.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${xe.info} 40%, transparent);
  `,caution:F`
    background: transparent;
    border-color: ${xe.caution};
    color: ${Oe.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${xe.caution} 45%, transparent);
  `,warn:F`
    background: transparent;
    border-color: ${xe.warn};
    color: ${Oe.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${xe.warn} 55%, transparent);
  `,nogo:F`
    background: transparent;
    border-color: ${xe.nogo};
    color: ${Oe.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${xe.nogo} 65%, transparent);
  `,offline:F`
    background: transparent;
    border-color: ${xe.offline};
    color: ${Oe.offline};
  `},cf={sm:F`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:F`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},df=w.span`
  display: inline-block;
  position: relative;
  /* Sized by its own text, never stretched to a taller flex sibling. */
  align-self: center;
  ${or("badge")}
  border: 1px solid;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;

  border-radius: var(--radius-pill);

  ${({$size:e})=>cf[e]}
  ${({$severity:e})=>e===void 0?af:lf[e]}
`,uf=w.span`
  position: absolute;
  top: 0;
  right: 0;
  width: ${ue.held.domSize};
  height: ${ue.held.domSize};
  transform: translate(45%, -45%);
  background: ${ue.held.color};
  box-shadow: 0 0 0 1px var(--color-surface-panel);
  pointer-events: none;
`,hf={},ff={byKey:new Map,unaddressed:void 0,separate:!1};function Jr(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function pf(e,t){if(e.separate!==t.separate||!Jr(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!Jr(o,t.byKey.get(n)))return!1;return!0}function mf(e,t,n,o){const r=new Map;e!==void 0&&r.set(Fo(e),n);for(const[s,a]of Object.entries(t??{}))a!==void 0&&r.set(Ll(s),a);return{byKey:r,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function gf(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function xf(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function vf(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,a)=>s.depth-a.depth);let r=!1;for(const s of o)s.resettle(n)&&(r=!0);if(r)for(const s of t)s()}}}function bf(e){const t=new Map,n=new Map,o=new Set,r=e?.root??vf();let s=ff;const a=c=>{let d;for(const u of c){const f=u.position;f!==void 0&&(d===void 0||f.base>d.base)&&(d=f)}return d?.rung},l={root:r,depth:e===void 0?0:e.depth+1,hold(c,d,u){const f=t.get(c);if(u===void 0)f!==void 0&&(f.delete(d),f.size===0&&t.delete(c));else{if(xf(f?.get(d),u))return;f===void 0?t.set(c,new Map([[d,u]])):f.set(d,u)}e===void 0?r.sweep(c):e.hold(c,d,u)},settled:c=>n.get(c),readsAsOneFigure:c=>o.has(c),setPolicy(c){if(!pf(s,c)){s=c;for(const d of t.keys())r.sweep(d)}},resettle(c){const d=[...t.get(c)?.values()??[]],u=e?.settled(c),f=s.byKey.get(c)??s.unaddressed??hf,x=f.format??u?.format??a(d),m=f.as??u?.as,g=f.decimals??(s.separate?Pl(d,{format:x,as:m}):u?.decimals),v=x===void 0&&m===void 0&&g===void 0?void 0:{...x!==void 0&&{format:x},...m!==void 0&&{as:m},...g!==void 0&&{decimals:g}},y=s.separate&&ta(d,{format:x,as:m,decimals:g}),E=y!==o.has(c);return y?o.add(c):o.delete(c),gf(n.get(c),v)?E:(v===void 0?n.delete(c):n.set(c,v),!0)},attach(){r.family.add(l);for(const c of t.keys())r.sweep(c)},detach(){r.family.delete(l)}};return r.family.add(l),l}const rr={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},on=p.createContext(rr);function yf(){return p.useContext(on)!==rr}function O1({children:e,of:t,pins:n,format:o,as:r,decimals:s,separate:a=!1}){const l=p.useContext(on),[c]=p.useState(()=>bf(l===rr?void 0:l));return p.useLayoutEffect(()=>(c.attach(),()=>c.detach()),[c]),p.useLayoutEffect(()=>{c.setPolicy(mf(t,n,{format:o,as:r,decimals:s},a))},[c,t,n,o,r,s,a]),i.jsx(on.Provider,{value:c,children:e})}function wf(e,t={}){const n=p.useContext(on),o=p.useId(),r=Qs(e),s=e?.unit,l=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||r===null?void 0:Fo(s),c=l===void 0||r===null||s===void 0||Cl(s)===void 0?void 0:Il(r,s),d=c?.base,u=c?.rung;return p.useLayoutEffect(()=>{if(!(l===void 0||r===null||s===void 0))return n.hold(l,o,{reading:r,unit:s,...d!==void 0&&u!==void 0&&{position:{base:d,rung:u}}}),()=>n.hold(l,o,void 0)},[n,o,l,r,s,d,u]),p.useSyncExternalStore(n.root.subscribe,()=>l===void 0?void 0:n.settled(l),()=>{})}function N1(e,t={}){const n=p.useContext(on),r=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||Qs(e)===null||e===null||e===void 0?void 0:Fo(e.unit);return p.useSyncExternalStore(n.root.subscribe,()=>r===void 0?!1:n.readsAsOneFigure(r),()=>!1)}const kf=zl,$f={sci:Hu,rep:zu},Qa=w.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,_f=w.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?F`
          position: relative;
          ${Aa(e,t)}
        `:""}
`,Sf=w.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,Mf=w(nt)`
  user-select: none;
`,Ja=w(nt)`
  user-select: none;
`,jf=" ";function Ef(e,t,n,o){if(t===void 0)return null;const r=x=>Oo(x.magnitude,x.unit,{...n,format:o}).value,s=(x,m)=>r(m.minus(x)),a=ta([t.lo,t.hi],{...n,format:o});if(!Fa(e,[t.lo,t.hi],Qo(r)))return null;const l=s(t.lo,t.value),c=s(t.value,t.hi),d=x=>/^[-+\u2212]?[0.,\s]*$/.test(x);if(!a&&d(l)&&d(c))return null;const u=r(t.value)===r(e),f={...n,format:o};return{oneFigure:a,plusMinus:!a&&u&&l===c?c:null,lo:r(t.lo),hi:r(t.hi),loSaid:Or(t.lo,f),hiSaid:Or(t.hi,f),kind:t.kind}}function Af(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function uo({token:e,className:t,spaced:n}){const o=Ol(e,Nl(e));if(o==="")return null;const r=Fl(o),s=Dl(o),a=$f[s?.head??o],l=kf.has(o),c=r!==void 0;return i.jsxs(i.Fragment,{children:[n&&!l?jf:null,i.jsx(Ce,{text:r,announce:!1,children:i.jsxs(Qa,{$attached:l,$icon:a!==void 0,className:t,"data-unit":e,children:[a?i.jsxs(i.Fragment,{children:[i.jsx(a,{size:"1em"}),s&&i.jsxs("span",{"aria-hidden":"true",children:["/",s.rest]})]}):c?i.jsx("span",{"aria-hidden":"true",children:o}):o,c&&i.jsxs(Ja,{"data-unit-word":"",children:[" ",r]})]})})]})}function es({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:r,marked:s,elsewhere:a,...l}){const c=Wn(e,{drawsReckoning:r}),d=s!=null&&!c.held&&c.shown!=null?{...c,held:!0,mark:s.kind,caption:s.caption}:c,{shown:u,held:f,mark:x,band:m}=d,g=a!=null&&a!==""&&u!=null,v=x??(g?"current":null),y=g?[d.caption,a].filter(Boolean).join("; "):d.caption,E=wf(u,l),S=yf(),R=o===!0&&S,j=E===void 0?l:{...E,...l},A=Oo(u?.magnitude,u?.unit,j),_=u==null||m===null||!f?null:Ef(u,$l(m,u.unit),j,A.rung),{anchor:C,tip:$}=an(Af(y,_));return e!==void 0||t===void 0?i.jsxs(_f,{className:n,$mark:v,$elsewhere:g,...Na(d),...C,children:[A.value,!R&&i.jsx(uo,{token:A.symbol,spaced:!0}),_!==null&&i.jsxs(Sf,{"data-unit-band":"",children:[_.oneFigure?i.jsxs(i.Fragment,{children:[" (",i.jsx("span",{"aria-hidden":"true",children:"~"}),i.jsx(Ja,{"data-unit-word":"",children:"approximately "}),_.lo]}):_.plusMinus===null?` (${_.lo} to ${_.hi}`:` ± ${_.plusMinus}`,!R&&i.jsx(uo,{token:A.symbol,spaced:!0}),_.plusMinus===null?")":null]}),v!==null&&i.jsx(Ra,{kind:v,elsewhere:g}),y!==null&&i.jsxs(Mf,{"data-unit-currency":"",children:[", ",y]}),$]}):typeof t!="string"?i.jsx(Qa,{$attached:!1,$icon:!1,className:n,children:t}):i.jsx(uo,{token:t,className:n,spaced:!1})}const Rf={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},Tf={center:"center",start:"flex-start",baseline:"baseline"},Cf=p.forwardRef(function({justify:t="between",align:n="center",gap:o,wrap:r=!1,children:s,...a},l){return i.jsx(If,{ref:l,$justify:t,$align:n,$gap:o,$wrap:r,...a,children:s})}),If=w.div`
  display: flex;
  align-items: ${({$align:e})=>Tf[e]};
  justify-content: ${({$justify:e})=>Rf[e]};
  gap: ${({$gap:e})=>e?Mt[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function sr(e){const t=Zo(e.held);return t===void 0?{label:e.label,tone:e.tone,title:e.title}:{label:e.label,tone:Za(e.tone),title:e.title??`${e.label}: ${Ct(t)}`,held:t}}const Lf=.72,Pf=.76;function Ao({size:e,kind:t="held",figureSize:n}){return i.jsx("tspan",{dy:n===void 0?-e*.55:-(n*Lf-e*Pf),fontSize:e,fill:ue[t].color,"data-held-mark":"","data-reckoning-mark":t,children:ue[t].glyph})}function F1({end:e,x1:t,y1:n,x2:o,y2:r}){return i.jsx("line",{"data-bound":e,x1:t,y1:n,x2:o,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function ei(e,t){return t===null?e:`${e}, ${t}`}function Of(e){return e===null?{}:{"data-currency-in-name":""}}function D1({x:e,y:t,size:n,children:o}){return i.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function ts(e,t){return t?.state!=="held"?e:{...t,value:e}}function et(e){return e.kind==="continuous"?"ribbon":"dot"}function Nf(e){return e.delivery==="acked"}function Ff(e){return e.direction==="command"?"outbound":"inbound"}function ti(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function Yn(e){return`${e.direction}/${e.kind}/${e.delivery}`}const Df={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function ar(e){return Df[Yn(e)]??null}const ns=new Set;function ni(e,t){const n=Yn(e);if(ns.has(n))return;ns.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;Ks()?kl.error(o):console.error(o)}const oi=16,At=oi/2,Ro=5.5,zf=2,Hf=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function ir(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function Bf(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/zf)),Math.max(2,Math.round(o)))}function Wf(e,t,n){if(e.length===0)return"";const o=ir(e,t,n);if(!(o>0))return`M0.00,${At.toFixed(2)}`;const r=Bf(e,t,o),s=o/n*(t/r),a=e.length-1,l=[];for(let c=0;c<=r;c++){const d=Math.min(c/r*o,o),u=Math.max(0,Math.round((c-.5)*s)),f=Math.min(a,Math.round((c+.5)*s));let x=0;for(let g=u;g<=Math.max(u,f);g++)x=Math.max(x,Hf(e[a-Math.min(g,a)]));const m=(c%2===0?-1:1)*x*Ro;l.push(`${d.toFixed(2)},${(At+m).toFixed(2)}`)}return`M${l.join(" L")}`}const Uf=.25;function Xf(e,t,n){const o=ir(e,t,n);if(!(o>0))return"";const r=e.length-1,s=Math.max(1,Math.min(Math.round(Math.min(e.length,t)),Math.ceil(o/Uf))),a=o/n*(t/s),l=[],c=[];for(let d=0;d<s;d++){const u=Math.max(0,Math.round(d*a)),f=Math.min(r,Math.max(u,Math.round((d+1)*a)-1));let x=0,m=0;for(let S=u;S<=f;S++){const R=e[r-S];R&&(Number.isFinite(R.lo)&&(x=Math.min(x,Math.max(-1,R.lo))),Number.isFinite(R.hi)&&(m=Math.max(m,Math.min(1,R.hi))))}const g=d/s*o,v=(d+1)/s*o,y=(At-m*Ro).toFixed(2),E=(At-x*Ro).toFixed(2);l.push(`${g.toFixed(2)},${y}`,`${v.toFixed(2)},${y}`),c.unshift(`${v.toFixed(2)},${E}`,`${g.toFixed(2)},${E}`)}return`M${l.join(" L")} L${c.join(" L")} Z`}const ri=.05;function lr(e){return typeof e=="number"&&Number.isFinite(e)&&e>0}const os=.02,rs=1.5,Gf=.25,Ln=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],qn=100,Yt=30,Yf=1.5,Te=2,qf=4,Ye=Yt-Te-qf,Xe=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(qn-n*2),zt=e=>Te+(1-Math.max(0,Math.min(1,e)))*Ye,si=e=>e==="inline"?Yf:0;function z1(e="inline"){const t=si(e);return(qn-t*2)/3}function ai({tags:e,who:t}){return ni(e,t),i.jsx("g",{"data-rail-unrepresented":Yn(e),"data-rail-entry":t})}function ct(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function ss(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(c=>c.age>=t);if(n===-1)return[];const o=e[n-1],r=e[n],s=r.age-o.age||1,a=(t-o.age)/s,l=o.value+a*(r.value-o.value);return[{age:t,value:l},...e.slice(n)]}function as(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(d=>d.age>t),r=e.slice(0,o),s=e[o],a=r[r.length-1];if(!a)return[{age:t,value:s.value}];const l=s.age-a.age||1,c=(t-a.age)/l;return[...r,{age:t,value:a.value+c*(s.value-a.value)}]}const Vf=.25;function Zt(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>o.age)return null;if(t===o.age)return o.value;for(let r=1;r<e.length;r++){const s=e[r];if(t<=s.age){const a=e[r-1],l=(t-a.age)/(s.age-a.age||1);return a.value+l*(s.value-a.value)}}return o.value}function Kf(e,t,n){const o=t.length>0&&t[t.length-1].age>=n-Gf,r=e.map(l=>{if(Zt(t,l.age)===null)return!1;let c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;const u=g=>{g!==null&&(c=Math.min(c,g),d=Math.max(d,g))},f=l.age-rs,x=l.age+rs;let m=Zt(t,x);if(m===null){if(!o)return!1;m=t[t.length-1].value}u(Zt(t,f)),u(m);for(const g of t)g.age>f&&g.age<x&&u(g.value);return l.value<c-os||l.value>d+os}),s=[];let a=0;for(let l=1;l<=r.length;l++)l<r.length&&r[l]===r[a]||(s.push({from:a,to:Math.min(l,r.length-1),off:r[a]}),a=l);return s}function Zf({stream:e,span:t,index:n,padX:o,oneT:r,twoT:s}){const l=`var(${Ln[n%Ln.length]})`,c=p.useId(),d=`cds-ramp-${c}-${n}`,u=`cds-fill-${c}-${n}`,f=`cds-tail-${c}-${n}`,x=ar(e.tags);if(x!=="continuous-strip")return x===null?i.jsx(ai,{tags:e.tags,who:e.id}):null;const m=Nf(e.tags),g=m?e.inTransit:as(e.inTransit,r),v=g.map(P=>({x:Xe(P.age,t,o),y:zt(P.value)}));if(v.length===0)return null;const E=(m?[]:as(ss(e.inTransit,r),r*(1+Vf))).map(P=>({x:Xe(P.age,t,o),y:zt(P.value)})),S=E.length>1&&E[E.length-1].x>E[0].x,R=`${ct(v)} L${v[v.length-1].x.toFixed(2)},${(Te+Ye).toFixed(2)} L${v[0].x.toFixed(2)},${(Te+Ye).toFixed(2)} Z`,j=m?ss(e.echo,s):[],A=j.map(P=>({x:Xe(P.age,t,o),y:zt(P.value)})),_=j.map(P=>({x:Xe(P.age,t,o),y:zt(Zt(e.inTransit,P.age)??P.value)})),C=Kf(j,e.inTransit,t),$=g[g.length-1].age,I=Zt(j,$),D=j.filter(P=>P.age>$),G=(I===null||D.length===0?D:[{age:$,value:I},...D]).map(P=>({x:Xe(P.age,t,o),y:zt(P.value)})),N=G.length>1?`${ct(G)} L${G[G.length-1].x.toFixed(2)},${(Te+Ye).toFixed(2)} L${G[0].x.toFixed(2)},${(Te+Ye).toFixed(2)} Z`:null;return i.jsxs("g",{"data-stream-group":e.id,"data-return-leg":m,children:[i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:v[0].x,y1:"0",x2:Math.max(v[v.length-1].x,v[0].x+1),y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.10"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0.40"})]}),i.jsxs("linearGradient",{id:u,x1:"0",y1:"0",x2:"0",y2:"1",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.22"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]}),S&&i.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:E[0].x,y1:"0",x2:E[E.length-1].x,y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.40"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]})]}),i.jsx("path",{"data-role":"area",d:R,fill:`url(#${u})`,stroke:"none"}),N&&i.jsx("path",{"data-role":"echo-area",d:N,fill:`url(#${u})`,stroke:"none"}),i.jsx("path",{"data-role":"commanded","data-stream":e.id,d:ct(v),fill:"none",stroke:`url(#${d})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),S&&i.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:ct(E),fill:"none",stroke:`url(#${f})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),C.map(P=>P.off?i.jsxs(p.Fragment,{children:[i.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:ct(A.slice(P.from,P.to+1)),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),i.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:ct(_.slice(P.from,P.to+1)),fill:"none",stroke:l,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]},P.from):P.to>P.from&&i.jsx("path",{"data-role":"echo","data-stream":e.id,d:ct(A.slice(P.from,P.to+1)),fill:"none",stroke:l,strokeWidth:"0.8",strokeLinecap:"round"},P.from))]})}function Qf({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${p.useId()}`,o=e.tags,r=ar(o);if(r!=="continuous-strip")return r===null?i.jsx(ai,{tags:o,who:e.id}):null;const s=(qn-t*2)/3,a=e.wave,l=a??e.amplitudes,c=e.spanSamples??l.length,d=a!==void 0?Xf(a,c,s):"",u=a!==void 0?d:Wf(e.amplitudes,c,s);if(u===""&&!(a!==void 0&&a.length>0))return null;const f=Math.max(ir(a??e.amplitudes,c,s),1),x=`var(${ti(o)})`,m=Ff(o)==="outbound",g=m?0:2*s;return i.jsxs("g",{"data-ribbon-group":e.id,"data-ribbon-zone":g===0?"outgoing":"confirmed",transform:`translate(${t+g} ${Te}) scale(1 ${Ye/oi})`,children:[i.jsx("defs",{children:i.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:m?0:f,y1:"0",x2:m?f:0,y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:x,stopOpacity:"0.9"}),i.jsx("stop",{offset:"1",stopColor:x,stopOpacity:"0.1"})]})}),a!==void 0?i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-role":"ribbon-axis",x1:"0",x2:f,y1:At,y2:At,stroke:`url(#${n})`,strokeWidth:"1",vectorEffect:"non-scaling-stroke"}),d!==""&&i.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d,fill:`url(#${n})`,stroke:"none"})]}):i.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:u,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function Jf({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:r}){const s=`cds-divfade-${p.useId()}`,a=r?.state==="held",l=a?Wn(r??null).caption:null,{anchor:c,tip:d}=an(l),u=[...e,...t].find(j=>j.oneWaySeconds!==null),f=u?.oneWaySeconds??null;if(!u||!lr(f))return null;const x=f>=ri;if(!x&&t.length===0)return null;const m=3*f,g=f,v=2*f,y=si(o),E=Xe(g,m,y),S=Xe(v,m,y),R=e.every(j=>j.inTransit.length===0&&j.echo.length===0)&&t.every(j=>j.amplitudes.length===0);return i.jsxs(ep,{"data-oneway":f,"data-variant":o,$variant:o,...c,children:[i.jsxs(tp,{$variant:o,$quiet:R,role:"img","aria-label":ei(n,l),...Of(l),viewBox:`0 0 ${qn} ${Yt}`,preserveAspectRatio:"none",children:[i.jsx("defs",{children:i.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:Te,x2:"0",y2:Te+Ye,children:[i.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),i.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(x?e:[]).map((j,A)=>i.jsx(Zf,{stream:j,span:m,index:A,padX:y,oneT:g,twoT:v},j.id)),t.map(j=>i.jsx(Qf,{ribbon:j,padX:y},j.id)),i.jsx("line",{"data-divider":"t",x1:E,x2:E,y1:Te,y2:Te+Ye,stroke:`url(#${s})`,strokeWidth:"0.4"}),i.jsx("line",{"data-divider":"2t",x1:S,x2:S,y1:Te,y2:Te+Ye,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&i.jsxs("g",{"data-role":"hover-labels",children:[i.jsxs("text",{x:E,y:Te-.4,textAnchor:"middle",fontSize:"2",children:[Me(We("s",f),{decimals:1}),a&&i.jsx(Ao,{size:1.2})]}),i.jsxs("text",{x:S,y:Te-.4,textAnchor:"middle",fontSize:"2",children:[Me(We("s",2*f),{decimals:1}),a&&i.jsx(Ao,{size:1.2})]}),i.jsx("text",{x:Xe(f/2,m,y),y:Yt-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),i.jsx("text",{x:Xe(1.5*f,m,y),y:Yt-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),i.jsx("text",{x:Xe(2.5*f,m,y),y:Yt-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&i.jsxs(i.Fragment,{children:[i.jsxs(np,{"aria-hidden":"true",children:[i.jsxs("span",{children:["outgoing ",i.jsx("b",{children:"0"})]}),i.jsxs("span",{children:["echo"," ",i.jsx("b",{children:i.jsx(es,{value:ts(We("s",f),r),decimals:1})})]}),i.jsxs("span",{children:["confirmed"," ",i.jsx("b",{children:i.jsx(es,{value:ts(We("s",2*f),r),decimals:1})})]})]}),i.jsxs(op,{"aria-hidden":"true",children:[(x?e:[]).map((j,A)=>i.jsxs("span",{children:[i.jsx("i",{style:{background:`var(${Ln[A%Ln.length]})`}}),j.label]},j.id)),t.map(j=>i.jsxs("span",{"data-role":"legend-ribbon",children:[i.jsx("i",{style:{background:`var(${ti(j.tags)})`}}),j.label]},j.id)),x&&e.length>0&&i.jsxs("span",{"data-role":"legend-deviation",children:[i.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),d]})}const ep=w.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,tp=w.svg`
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
`,np=w.div`
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
`,op=w.div`
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
`;function is({handle:e,handles:t,"aria-label":n,mode:o,density:r,orientation:s,variant:a="inline"}){const l=t??(e?[e]:[]),c=l.length===1?l[0]:null,d=c?ar(c.tags):null;if(c&&d===null)return i.jsx(rp,{tags:c.tags,who:c["aria-label"]});if(c&&d!=="in-flight-row"){const m=c,g=m.effectiveDelaySeconds;return lr(g)?i.jsx(Jf,{streams:m.streams??[],ribbons:m.ribbons??[],delayReading:m.delayReading,"aria-label":n??m["aria-label"],variant:a}):null}const u=Ba(l.flatMap(m=>m.inFlight)),x=l.some(m=>m.dismiss)?m=>l.find(g=>g.inFlight.some(v=>v.id===m))?.dismiss?.(m):void 0;return i.jsx(Ph,{items:u,"aria-label":n,mode:o,density:r,orientation:s,variant:a,onDismiss:x})}function rp({tags:e,who:t}){return ni(e,t??"unnamed handle"),i.jsx("span",{hidden:!0,"data-rail-unrepresented":Yn(e)})}function ii(e){const n=ut(e)||e.command||"The command",o=e.code===void 0?void 0:Zs(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function li(e){return`${ut(e)||e.command||"The command"}: never sent. Safe to re-send.`}function ci(e){return`${ut(e)||e.command||"The command"}: ${e.warning}`}const sp={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed",warned:"Commands likely to be lost"},ap={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command",warned:"warned command"};function ip(e,t){return e.kind==="refused"?jt(e.entries[t]):e.kind==="found"?zo(e.entries[t]):e.kind==="failed"?ii(e.entries[t]):e.kind==="warned"?ci(e.entries[t]):e.kind==="undelivered"?li(e.entries[t]):Ho(e.entries[t])}function lp(e){return e.entries.map((t,n)=>{const o=ut(t);return{id:t.id,subject:o||t.command||"",sentence:ip(e,n),dismissLabel:`Dismiss ${o||ap[e.kind]}`,tags:t.tags}})}function wt(e){const{kind:t,onDismiss:n,live:o=!0}=e,r=e["aria-label"]??sp[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const a=lp(e).map(l=>i.jsxs(up,{role:o?void 0:"listitem",$tone:s,children:[et(l.tags)==="ribbon"?i.jsx(fp,{$tone:s,children:l.subject}):i.jsx(hp,{"aria-hidden":"true",$tone:s,children:er(l.subject)}),i.jsx(pp,{children:l.sentence}),n&&i.jsx(mp,{type:"button","data-dismiss":"",onClick:c=>{Da(c.currentTarget),n(l.id)},"aria-label":l.dismissLabel,children:"✕"})]},l.id));return o?i.jsx(dp,{forwardedAs:"div","aria-label":r,"data-command-list":"",additionsOnly:!0,children:a}):i.jsx(cp,{role:"list","aria-label":r,"data-command-list":"",children:a})}const di=F`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,cp=w.div`
  ${di}
`,dp=w(ft)`
  ${di}
  &:empty {
    margin: 0;
  }
`,up=w.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>xe[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${xe[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,hp=w.span`
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  min-width: 34px;
  padding: var(--inset-glyph);
  align-self: stretch;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: ${({$tone:e})=>Oe[e]};
  border: 1px solid ${({$tone:e})=>xe[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${xe[e]} 14%, var(--color-surface-raised))`};
`,fp=w.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>Oe[e]};
`,pp=w.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,mp=w.button`
  flex: 0 0 auto;
  appearance: none;
  padding: var(--inset-glyph);
  border: 0;
  background: transparent;
  color: var(--color-text-muted);
  font: inherit;
  font-size: var(--font-size-xs);
  cursor: pointer;

  &:hover,
  &:focus-visible {
    color: var(--color-text-primary);
  }
  ${ht}
`;function St(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,o)=>St(n,t[o]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const n=[...t];return[...e].every(o=>{const r=n.findIndex(s=>St(o,s));return r===-1?!1:(n.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[n,o]of e)if(!t.has(n)||!St(o,t.get(n)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const n=e,o=t,r=new Set;for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of r)if(!St(n[s],o[s]))return!1;return!0}return!1}function Vn(e,t,n,o){const[r,s]=p.useState(o),a=p.useRef(t);a.current=t;const l=p.useRef(n);l.current=n;const c=p.useRef(r);return c.current=r,p.useEffect(()=>{if(!e)return;let d=c.current;const u=()=>{const g=a.current(e);l.current(d,g)||(d=g,s(g))};u(),e.addEventListener("scroll",u,{passive:!0});const f=new ResizeObserver(u);f.observe(e);for(const g of Array.from(e.children))f.observe(g);let x;const m=new MutationObserver(g=>{if(g.some(v=>v.type==="childList")){for(const v of Array.from(e.children))f.observe(v);u();return}x===void 0&&(x=requestAnimationFrame(()=>{x=void 0,u()}))});return m.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style"]}),()=>{e.removeEventListener("scroll",u),f.disconnect(),m.disconnect(),x!==void 0&&cancelAnimationFrame(x)}},[e]),r}function gp(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function ui(e){return Vn(e,gp,Object.is,!1)?0:void 0}function xp({label:e,selected:t,count:n,onToggle:o}){return i.jsxs(vp,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[i.jsx("span",{children:e}),n!==void 0&&i.jsx(bp,{children:n})]})}const vp=w.button`
  ${or("chip")}
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

  ${ht}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`,bp=w.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function yp({value:e,onChange:t,clearLabel:n="Clear search",className:o,...r}){const s=p.useRef(null);return i.jsxs(wp,{className:o,children:[i.jsx(kp,{...r,ref:s,type:"search",value:e,onChange:a=>t(a.target.value)}),e!==""&&i.jsx($p,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:i.jsx(Du,{size:"var(--icon-size-control)"})})]})}const wp=w.div`
  position: relative;
  display: flex;
  align-items: center;
`,kp=w(xh)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,$p=w(ph)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function H1({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=Hl(e),r=[...new Set(o)],[s,a]=p.useState(()=>new Set),[l,c]=p.useState(""),d=p.useId(),u=g=>{a(v=>{const y=new Set(v);return y.has(g)?y.delete(g):y.add(g),y})},f=[...s,l].filter(g=>g.length>0).map(g=>g.toLowerCase()),x=i.jsxs(na,{gap:"related-packed",children:[i.jsxs(mh,{children:[i.jsx(gh,{htmlFor:d,children:t}),i.jsx(yp,{id:d,value:l,placeholder:n,onChange:c})]}),r.length>0&&i.jsx(Cf,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:r.map(g=>i.jsx(xp,{label:g,selected:s.has(g),onToggle:()=>u(g)},g))})]}),m={matches:g=>{const v=g.toLowerCase();return f.every(y=>v.includes(y))},active:f.length>0};return hi.set(m,x),m}const hi=new WeakMap;function fi(e){return hi.get(e)??null}function B1({filter:e,children:t,fill:n=!1}){return i.jsxs(na,{gap:"related-dense",fill:n,children:[fi(e),t]})}const _p={accent:"var(--color-accent-fg)",warn:"var(--color-warn-mark)"},Sp=24,Mp=96;function jp({children:e,padded:t,caption:n,footer:o,strip:r,shape:s="rounded",edgeCue:a,...l}){const c=s==="circle",d=!c||a===void 0?[]:[a].flat(),u=!c&&r!==void 0&&r!==null&&r!==!1;return i.jsxs(Ep,{$padded:t&&!u,$stacked:u,$circle:c,$cued:d.length>0,"data-shape":c?"circle":void 0,...l,children:[u?i.jsxs(i.Fragment,{children:[i.jsx(Lp,{$padded:t,children:e}),i.jsx(Pp,{"data-framed-display-strip":"",children:r})]}):c&&a!==void 0?i.jsx(Ap,{children:e}):e,d.length>0&&i.jsx(Ip,{cues:d}),n!=null&&i.jsx(mi,{children:n}),o!=null&&i.jsx(Op,{children:o})]})}const Ep=w.div`
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
`,Ap=w.div`
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
`,De=12,ls=1,Rp=3,pi=1,Tp=100*pi/200,cs=e=>e*Math.PI/180;function Cp(e,t=Tp){const n=Math.min(Math.max(e.span??90,1),359),o=Math.min(Math.max(Number.isFinite(e.grow)?e.grow:0,0),1),r=50,a=50+(ls+(Rp-ls)*o)*t,l=cs(e.angle-n/2),c=cs(e.angle+n/2),d=(f,x)=>`${(50+f*Math.cos(x)).toFixed(3)} ${(50-f*Math.sin(x)).toFixed(3)}`,u=n>180?1:0;return`M${d(r,l)}A${r} ${r} 0 ${u} 0 ${d(r,c)}L${d(a,c)}A${a} ${a} 0 ${u} 1 ${d(a,l)}Z`}function Ip({cues:e}){const{ref:t,size:n}=Un({w:100+2*De,h:100+2*De}),o=(100+2*De)/Math.max(n.w,1),r=pi*o;return i.jsx("div",{ref:t,"aria-hidden":"true",style:{position:"absolute",left:`${-De}%`,top:`${-De}%`,width:`${100+2*De}%`,height:`${100+2*De}%`,pointerEvents:"none"},children:i.jsx("svg",{"aria-hidden":"true","data-edge-cues":"",viewBox:`${-De} ${-De} ${100+2*De} ${100+2*De}`,style:{display:"block",width:"100%",height:"100%",overflow:"visible"},children:e.map(s=>i.jsx("path",{"data-edge-cue":"",d:Cp(s,r),fill:_p[s.tone]},`${s.angle}-${s.tone}`))})})}const Lp=w.div`
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
`,Pp=w.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${Sp}px;
  max-height: ${Mp}px;
  min-width: 0;
  overflow: hidden;
`,mi=w.div`
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
`,Op=w(mi)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,ds={width:160,height:72},Np=2.5,Fp=420;function W1({width:e,height:t,plotHasData:n}){return!n&&e>=ds.width&&t>=ds.height?"center":e>=Fp&&e>=t*Np?"beside":"inline"}const Dp={overlay:F`
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
  `};function zp({placement:e,role:t="status",children:n,...o}){return i.jsx(Hp,{$placement:e,role:t,...o,children:n})}const Hp=w.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${Bl.regular};
  pointer-events: none;

  ${({$placement:e})=>Dp[e]}
`,Pn=8;function gi(e){const t=[{cols:1,rows:e}];for(let n=2;n<=e;n++){const o=Math.ceil(e/n);o<(t.at(-1)?.rows??e)&&t.push({cols:n,rows:o})}return t}function xi(e){return e===0?"0px":`(${e}px + var(--gap-related))`}const vi=(e,t)=>`calc(${e} * ${t} + ${(e-1)*Pn}px)`,Bp=(e,t,n)=>`calc(${e} * (${t} + ${n+Pn}px) + ${(e-1)*Pn}px)`;function Wp(e,t,n,o,r){const s=xi(n),a=gi(e).slice(1).map(({cols:c,rows:d})=>`
  @container grid-squares-width (width >= ${vi(c,t)}) {
    --cell: calc((100cqw - ${c-1} * ${o}) / ${c});
    --rows: ${d};
  }`).join(""),l=c=>`calc(var(--rows) * (${c} + ${s}) + (var(--rows) - 1) * ${o})`;return r!==void 0?`
  --cell: 100cqw;
  --rows: ${e};
  ${a}
  min-height: var(--grid-squares-height, ${l(r)});
`:`
  --cell: 100cqw;
  --rows: ${e};
  ${a}
  min-height: var(--grid-squares-height, clamp(${l(`min(var(--cell), ${t}, 100cqh - ${s})`)}, 100cqh, ${l("var(--cell)")}));
`}function Up(e,t,n,o){const r=gi(e),s=o!==void 0;return r.slice(1).map(({cols:a,rows:l},c)=>`
  @container grid-squares (aspect-ratio >= ${(.88*a/r[c].rows).toFixed(2)}) and ((width >= ${vi(a,t)}) or (height < ${Bp(s?l:r[c].rows,o??t,n)})) {
    --cols: ${a};
    --rows: ${l};
  }`).join("")}function Xp(e,t){const n=`
  & > * > * {
    --grid-square-heading: ${e===0?"0px":`calc${xi(e)}`};
  }`;return e===0||t===void 0?n:`${n}
  @container (width < ${t}px) or (height < ${t+e+Pn}px) {
    & > * > * {
      --grid-square-heading: 0px;
    }
    & > * [data-grid-square-heading] {
      display: none;
    }
  }`}function Gp(e){const t=new Set;return e.map(n=>{const o=n.inFlight.filter(r=>t.has(r.id)?!1:(t.add(r.id),!0));return o.length===n.inFlight.length?n:{...n,inFlight:o}})}function Ht(e){const t=new Set;return e.filter(n=>t.has(n.id)?!1:(t.add(n.id),!0))}function Yp(e){const t=new Map;for(const n of e)for(const o of n.warnings??[]){const r=`${o.command}\0${o.label}\0${o.warning}`;t.has(r)||t.set(r,{...o,id:r,tags:n.tags})}return[...t.values()]}const us=new Map,qp=new Set(["overdue","lost"]);function Vp(e){const t=new Set,n=new Set;for(const o of e){for(const r of o.refusals??[])t.add(r.id);for(const r of o.failures??[])t.add(r.id);for(const r of o.undelivered??[])t.add(r.id);for(const r of o.founds??[])(r.outcome==="ran"?n:t).add(r.id)}return{failed:t,ran:n}}function Kp(e){const t=new Map;for(const d of e)for(const u of d.inFlight)u.settling||t.set(u.id,{handleId:d.id,row:u});const{failed:n,ran:o}=Vp(e),[r,s]=p.useState({last:us,settling:us}),a=[...r.last].filter(([d])=>!t.has(d));if(a.length>0||t.size!==r.last.size||[...t].some(([d,u])=>r.last.get(d)?.row!==u.row)){const d=a.map(([u,f])=>{const x=n.has(u)||qp.has(f.row.predictedPhase)&&!o.has(u)?"failed":"confirmed",m=x==="confirmed"?Kr(f.row):0;return[u,{...f,row:{...f.row,settling:x,settleSeconds:m}}]});s({last:t,settling:d.length===0?r.settling:new Map([...r.settling,...d])})}const c=p.useRef(new Map);return p.useEffect(()=>{const d=c.current;for(const[u,f]of r.settling){if(d.has(u))continue;const x=setTimeout(()=>{d.delete(u),s(m=>{const g=new Map(m.settling);return g.delete(u),{...m,settling:g}})},(f.row.settleSeconds??0)*1e3+tn);d.set(u,x)}},[r.settling]),p.useEffect(()=>{const d=c.current;return()=>{for(const u of d.values())clearTimeout(u)}},[]),r.settling.size===0?e:e.map(d=>{const u=[...r.settling.values()].filter(f=>f.handleId===d.id&&!t.has(f.row.id)).map(f=>f.row.settling==="confirmed"&&n.has(f.row.id)?{...f.row,settling:"failed",settleSeconds:0}:f.row.settling==="failed"&&o.has(f.row.id)?{...f.row,settling:"confirmed",settleSeconds:Kr(f.row)}:f.row);return u.length===0?d:{...d,inFlight:[...d.inFlight,...u]}})}function Zp(e){if(et(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return lr(t)?n>0||(t??0)>=ri&&o>0:!1}return e.inFlight.length>0}function bi({tiny:e}={}){const t=oc(),n=Do();p.useEffect(()=>n?rc(n):void 0,[n]);const o=Gp(Kp(t)).filter(Zp),r=Yp(t),s=Ht(t.flatMap(M=>(M.refusals??[]).map(U=>({...U,tags:M.tags})))),a=Ht(t.flatMap(M=>(M.losses??[]).map(U=>({...U,tags:M.tags})))),l=Ht(t.flatMap(M=>(M.founds??[]).map(U=>({...U,tags:M.tags})))),c=Ht(t.flatMap(M=>(M.undelivered??[]).map(U=>({...U,tags:M.tags})))),d=Ht(t.flatMap(M=>(M.failures??[]).map(U=>({...U,tags:M.tags})))),u=s.length+c.length+d.length,f=o.length>0||u>0||a.length>0||l.length>0||r.length>0,[x,m]=p.useState(!1),[g,v]=p.useState(!1),[y,E]=p.useState(!1),S=x||g&&!y;p.useEffect(()=>{f||(m(!1),v(!1),E(!1))},[f]);const R=p.useId(),j=[...o.filter(M=>et(M.tags)==="ribbon"),...o.filter(M=>et(M.tags)!=="ribbon")],A=o.some(M=>et(M.tags)==="ribbon"),_=j.filter(M=>et(M.tags)!=="ribbon"),C=Ba(o.filter(M=>et(M.tags)!=="ribbon").flatMap(M=>M.inFlight)),I=t.some(M=>M.dismiss&&(M.refusals?.length??0)>0)?M=>{for(const U of t)U.refusals?.some(ee=>ee.id===M)&&U.dismiss?.(M)}:void 0,G=t.some(M=>M.dismiss&&(M.losses?.length??0)>0)?M=>t.find(U=>U.losses?.some(ee=>ee.id===M))?.dismiss?.(M):void 0,P=t.some(M=>M.dismiss&&(M.undelivered?.length??0)>0)?M=>t.find(U=>U.undelivered?.some(ee=>ee.id===M))?.dismiss?.(M):void 0,Y=t.some(M=>M.dismiss&&(M.failures?.length??0)>0)?M=>{for(const U of t)U.failures?.some(ee=>ee.id===M)&&U.dismiss?.(M)}:void 0,se=t.some(M=>M.dismiss&&(M.founds?.length??0)>0)?M=>{for(const U of t)U.founds?.some(ee=>ee.id===M)&&U.dismiss?.(M)}:void 0;return i.jsxs(Qp,{"data-panel-rail-frame":"",$tiny:e,$hasContent:f,onMouseEnter:()=>{E(!1),v(!0)},onMouseLeave:()=>v(!1),children:[t.length>0&&i.jsxs(ft,{visuallyHidden:!0,additionsOnly:!0,children:[s.map(M=>i.jsxs("span",{children:[jt(M)," "]},`refusal:${M.id}`)),a.map(M=>i.jsxs("span",{children:[Ho(M)," "]},`loss:${M.id}`)),c.map(M=>i.jsxs("span",{children:[li(M)," "]},`undelivered:${M.id}`)),d.map(M=>i.jsxs("span",{children:[ii(M)," "]},`failure:${M.id}`)),l.map(M=>i.jsxs("span",{children:[zo(M)," "]},`found:${M.id}`)),r.map(M=>i.jsx("span",{children:ci(M)},`warning:${M.id}`))]}),f?i.jsxs(e0,{"data-panel-rail":"","data-grown":S,"data-pinned":x,"data-suppress-hover":y,onKeyDown:M=>{M.key==="Escape"&&x&&(M.stopPropagation(),m(!1),E(!0))},children:[S&&C.length>0&&!A&&i.jsx(hs,{children:i.jsx(Zr,{items:C,height:o0})}),i.jsx(Ce,{text:!S&&C.length>0?`In flight: ${C.filter(M=>!M.settling).map(M=>M.label).join(", ")}`:null,children:i.jsx(t0,{type:"button","aria-expanded":x,"aria-controls":R,"aria-label":"Signal-delay detail",onClick:()=>{m(M=>{const U=!M;return U||E(!0),U})},children:i.jsx(i0,{"aria-hidden":"true",hidden:!S,children:"▲"})})}),i.jsxs(r0,{id:R,"data-panel-rail-detail":"",children:[j.filter(M=>!S||et(M.tags)==="ribbon").map(M=>i.jsx(is,{handle:M,variant:S?"expanded":"rail","aria-label":M["aria-label"]??(S?"Delay detail":void 0)},M.id)),S&&_.length>0&&i.jsx(is,{handles:_,variant:"expanded","aria-label":"Commands in flight"},"queue"),!S&&(u>0||a.length>0||l.length>0||r.length>0)&&i.jsxs(s0,{children:[u>0&&i.jsx(ho,{children:u===1?"1 command failed":`${u} commands failed`}),a.length>0&&i.jsx(ho,{children:a.length===1?"1 command unconfirmed":`${a.length} commands unconfirmed`}),r.length>0&&i.jsx(ho,{children:r.length===1?"1 warning":`${r.length} warnings`}),l.length>0&&i.jsx(a0,{children:l.length===1?"1 unconfirmed command answered":`${l.length} unconfirmed commands answered`})]})]}),S&&C.length>0&&A&&i.jsx(hs,{"data-over-graph":"true",children:i.jsx(Zr,{items:C,height:n0})})]}):null,S&&r.length>0&&i.jsx(wt,{kind:"warned",entries:r,live:!1}),S&&s.length>0&&i.jsx(wt,{kind:"refused",entries:s,onDismiss:I,live:!1}),S&&a.length>0&&i.jsx(wt,{kind:"lost",entries:a,onDismiss:G,live:!1}),S&&c.length>0&&i.jsx(wt,{kind:"undelivered",entries:c,onDismiss:P,live:!1}),S&&d.length>0&&i.jsx(wt,{kind:"failed",entries:d,onDismiss:Y,live:!1}),S&&l.length>0&&i.jsx(wt,{kind:"found",entries:l,onDismiss:se,live:!1})]})}const Qp=w.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,Jp=F`
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
`,e0=w.div`
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
    ${Jp}
  }
`,t0=w.button`
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

  ${sn}

  &[aria-expanded="true"] {
    pointer-events: none;
  }

`,n0=86,o0=40,hs=w.div`
  pointer-events: none;

  &[data-over-graph="true"] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`,r0=w.div`
  display: contents;
`,ho=w.span`
  color: ${Oe.warn};
`,s0=w.span`
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
`,a0=w.span`
  color: var(--color-info-text);
`,i0=w.span`
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
`,yi=p.createContext(null);function U1({badges:e,children:t}){return i.jsx(yi.Provider,{value:e,children:t})}function l0(){return p.useContext(yi)}function wi({severity:e,count:t=1}){const n=t>1;return i.jsx(c0,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${en[e]}`:en[e],$mark:xe[e],$digits:n?String(t).length:1,children:n&&i.jsx(d0,{$fill:$o[e],$ink:ea[e],children:i.jsx(u0,{"aria-hidden":"true",children:i.jsx("text",{x:"50%",y:"50%",dy:"0.365em",textAnchor:"middle",children:t})})})})}const fs="8px",c0=w.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${fs};
  /* The count's own size, so the width below can be counted in its digits. Digits this size are six pixels tall, which centre in the eight-pixel dot on whole pixels; at seven they are five, and one engine places the baseline half a pixel above or below the middle. */
  font-size: 8px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:fs};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,d0=w.span`
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
`,u0=w.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: currentColor;
`,h0=()=>()=>{},ps=()=>Wl;function ki(){const e=oa();return p.useSyncExternalStore(e?e.subscribe:h0,e?e.getBreakdown:ps,e?e.getBreakdown:ps)}const f0=()=>()=>{},ms=()=>null;function p0(){const e=oa();return p.useSyncExternalStore(e?e.subscribe:f0,e?e.getSummary:ms,e?e.getSummary:ms)}const $i=F`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,m0=12;function g0(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function x0(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const r=o<e?t-m0:t;if(n[o]<=r)return o}return n.length-1}function v0(e,t,n){const[o,r]=p.useState(0),s=p.useRef(o);s.current=o;const a=[t,...n].join(`
`),l=p.useCallback(()=>{const c=e.current,d=a.split(`
`);if(!c||d.length<2){s.current!==0&&(s.current=0,r(0));return}const u=d.map(x=>g0(c,x)),f=x0(s.current,c.clientWidth,u);f!==s.current&&(s.current=f,r(f))},[e,a]);return p.useLayoutEffect(()=>{l()},[l]),p.useEffect(()=>{const c=e.current;if(!c||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>l());return d.observe(c),()=>d.disconnect()},[e,l]),{index:o,compacted:o>0}}const b0=24;function y0(e,t,n,o,r=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&r?!(t>n+b0):n>t}function gs(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const r=e.cloneNode(!0);n!==void 0&&(r.textContent=n),Object.assign(r.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),r.setAttribute("aria-hidden","true"),o.insertBefore(r,e.nextSibling);const s=r.getBoundingClientRect().width;return o.removeChild(r),s}const w0={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function Bt(e){return Number.parseFloat(e)||0}function k0(e,t,n,o){const[r,s]=p.useState(!1),a=p.useRef(r);a.current=r;const l=p.useRef(void 0),c=p.useRef(void 0),d=p.useRef(!1),u=p.useRef(o);u.current=o;const f=p.useCallback(()=>{const m=e.current;if(!m)return;const g=getComputedStyle(m),v=m.getBoundingClientRect().width-Bt(g.paddingLeft)-Bt(g.paddingRight),y=gs(t.current,{},u.current),E=gs(n.current,w0),S=n.current?.closest("[data-panel-aside-expand]")?.parentElement,R=S?getComputedStyle(S):null,j=y===0||E===0?y+E:y+Bt(g.columnGap)+Bt(R?.paddingLeft??"")+Bt(R?.paddingRight??"")+E,A=a.current,_=v>0&&c.current!==void 0&&v<c.current;A&&_&&(d.current=!0);const C=y0(A,v,j,l.current,d.current);C!==A&&(d.current=C&&_),v>0&&(c.current=v),j>0&&(l.current=j),C!==a.current&&(a.current=C,s(C))},[e,t,n]),x=p.useRef({title:null,aside:null,observer:null});return p.useLayoutEffect(()=>{const m=t.current,g=n.current,v=x.current;if(v.observer===null||v.title!==m||v.aside!==g){v.observer?.disconnect(),v.title=m,v.aside=g,v.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>f());for(const y of[m,g])y&&v.observer?.observe(y,{subtree:!0,childList:!0,characterData:!0,attributes:!0});f();return}v.observer.takeRecords().length>0&&f()}),p.useEffect(()=>{const m=x.current;return()=>{m.observer?.disconnect(),m.observer=null}},[]),p.useEffect(()=>{const m=e.current;if(!m||typeof ResizeObserver>"u")return;const g=new ResizeObserver(()=>f());return g.observe(m),n.current&&g.observe(n.current),()=>g.disconnect()},[e,n,f]),r}const _i=p.createContext("full"),$0=_i.Provider;function X1(){return p.useContext(_i)}const Kn=p.createContext(null);function Si({children:e}){const[t,n]=p.useState(null),o=p.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return i.jsx(Kn.Provider,{value:o,children:e})}function _0({children:e}){return i.jsx(Si,{children:e})}const Mi=`
  & > [${sa}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,On=w.div`
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
  ${({$hoverTitle:e})=>e?sn:""}
  /* A hand-composed panel can put sections straight in here, so this box owns the leftover height. */
  ${Mi}
`,S0=w.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${$i}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ji=p.forwardRef(function({compact:t,children:n,...o},r){const s=p.useRef(null),a=typeof n=="string"?n:"",l=t===void 0||a===""?M0:typeof t=="string"?[t]:t,{index:c,compacted:d}=v0(s,a,l);return i.jsx(Ce,{text:d?a:void 0,children:i.jsx(S0,{...o,ref:u=>{if(s.current=u,typeof r=="function"){r(u);return}r&&(r.current=u)},"aria-label":d?a:void 0,children:c===0?n:l[c-1]})})}),M0=[],j0=w.div`
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
`,E0=w.div`
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
`,A0=w.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,R0=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,T0=w.details`
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
    ${ht}
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
`,C0=120;function Ei(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${en[n.severity]}`:`${en[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function Ai({title:e,compactTitle:t,aside:n,toolbar:o,...r}){const s=ki(),a=p.useRef(null),l=p.useRef(null),c=p.useRef(null),d=k0(a,l,c,typeof e=="string"?e:void 0),[u,f]=p.useState(!1),[x,m]=p.useState(!1),g=p.useRef(null),v=p.useRef(null),y=p.useRef(null),E=p.useCallback(()=>{g.current!==null&&clearTimeout(g.current),g.current=null},[]);p.useEffect(()=>{d||(f(!1),m(!1))},[d]),p.useEffect(()=>E,[E]);const S=d&&(u||x);p.useEffect(()=>{if(!S)return;const _=$=>{$.key==="Escape"&&v.current?.contains(document.activeElement)&&($.stopPropagation(),E(),m(!1),f(!1),y.current?.focus())},C=$=>{v.current?.contains($.target)||(E(),m(!1),f(!1))};return document.addEventListener("keydown",_,!0),document.addEventListener("pointerdown",C,!0),()=>{document.removeEventListener("keydown",_,!0),document.removeEventListener("pointerdown",C,!0)}},[S,E]);const R=d?Ei(s):null,{anchor:j,tip:A}=an(S?null:R);return i.jsxs(j0,{ref:a,"data-panel-header":"",...r,children:[i.jsxs(E0,{children:[e!==void 0&&i.jsx(ji,{ref:l,compact:t,children:e}),i.jsx(A0,{"aria-hidden":"true",children:i.jsx(In,{children:null})})]}),n!==void 0&&i.jsx(R0,{children:i.jsxs(T0,{ref:v,"data-panel-aside-expand":"","data-hovering":d&&x?"":void 0,$collapsed:d,open:d?u:!0,onToggle:_=>{d&&(f(_.currentTarget.open),_.currentTarget.open||m(!1))},onPointerEnter:_=>{!d||_.pointerType==="touch"||(E(),m(!0))},onPointerLeave:_=>{_.pointerType!=="touch"&&(E(),g.current=setTimeout(()=>{g.current=null,m(!1)},C0))},children:[i.jsxs("summary",{ref:y,"data-tooltip":j["data-tooltip"],onPointerDown:j.onPointerDown,onPointerUp:j.onPointerUp,onFocus:j.onFocus,onBlur:j.onBlur,"aria-description":R??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(_=>`${_.count} ${en[_.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(_=>i.jsx(wi,{severity:_.severity,count:_.count},_.severity)),i.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),A,i.jsx($0,{value:d?"collapsed":"full",children:i.jsx("div",{"data-panel-aside-full":"",ref:c,children:n})})]})}),o!==void 0&&i.jsx(Ri,{children:o})]})}const Ri=w.div`
  ${or("panel-toolbar")}
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
`,Ti="44px",Ci=`scroll-padding-block: ${Ti};`,I0=w.div`
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
  ${Ci}
  ${sn}
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
  ${({$loneFrame:e})=>e?`@container (width < ${L0}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${Mi}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${sa}] {
           min-height: 0;
         }`:""}
`,L0="25rem";function Ii({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...r}){const a=p.useContext(Kn)?.registerScroller,[l,c]=p.useState(null),d=p.useCallback(f=>{a?.(f),c(f)},[a]),u=ui(l);return i.jsx(I0,{ref:d,tabIndex:u,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...r,children:e})}const P0="13rem",O0=w.div`
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
  & > [${Ul}] {
    grid-column: 1 / -1;
  }
  /* A grid opened only to carry the augment slot, with nothing bound, takes no gap above it: a filling section reaches the body's bottom inset. */
  &:empty {
    display: none;
  }
`;function N0({children:e,hoverTitle:t}){const n=p.useRef(null),o=p.useRef(null),r=z0(n,o);return i.jsx(F0,{ref:n,$fits:r,"data-panel-fit-body":"",children:i.jsx(D0,{ref:o,$fits:r,$hoverTitle:t,"data-panel-fit-shifted":r&&t?"":void 0,children:e})})}const F0=w.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,D0=w.div`
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
`;function z0(e,t){const[n,o]=p.useState(!0);return p.useLayoutEffect(()=>{const r=e.current,s=t.current;if(!r||!s)return;const a=()=>{o(B0(H0(s),r.clientHeight))};if(a(),typeof ResizeObserver>"u")return;const l=new ResizeObserver(a),c=()=>{l.observe(r),l.observe(s);for(const u of Array.from(s.children))l.observe(u)};c();const d=new MutationObserver(()=>{c(),a()});return d.observe(s,{childList:!0}),()=>{l.disconnect(),d.disconnect()}},[e,t]),n}function H0(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function B0(e,t){return e<=t}const W0=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,U0=w.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${Ci}
  ${sn}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,Nn=w.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e})=>e==="top"?"top: 0;":"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: ${Ti};
  /* The audit reads the mask depth from the gradient stops, not from this height. */
  ${sf("panel-scroll-glow")}
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
`,Li=p.forwardRef(function({children:t,...n},o){const r=p.useRef(null),[s,a]=p.useState(null),l=p.useCallback(u=>{r.current=u,a(u)},[]);p.useImperativeHandle(o,()=>r.current);const c=Vn(s,dr,ur,cr),d=ui(s);return i.jsxs(W0,{...n,children:[i.jsx(U0,{ref:l,tabIndex:d,"data-scroll-area-inner":"",children:t}),i.jsx(Nn,{$position:"top",$visible:c.top}),i.jsx(Nn,{$position:"bottom",$visible:c.bottom})]})});function X0(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const xs="14rem",G0=5,Y0="45%",q0=`min(${Yl(1,G0).pxH}px, ${Y0})`;function vs(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const V0=w.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${vs(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${vs(t,n)};`}

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
`;function K0({side:e="end",size:t,placement:n="auto",railBand:o,children:r,...s}){const{ref:a,size:l}=Un({w:1,h:1}),c=X0(t??xs),d=l.w<=1||c===void 0||l.w>=c*2,u=n==="below"?"block":(n==="beside"||l.w>=l.h)&&d?"inline":"block",f=t??(u==="inline"?xs:q0);return i.jsx(V0,{ref:a,"data-panel-split":u,$axis:u,$side:e,$size:f,$railBand:o,...s,children:r})}const Z0=w(Li)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,Q0=w.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function Pi({children:e,...t}){return i.jsx(Q0,{"data-panel-sidebar":"",...t,children:i.jsx(Z0,{children:e})})}const cr={top:!1,bottom:!1};function dr(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function ur(e,t){return e.top===t.top&&e.bottom===t.bottom}const J0=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function Oi({children:e,railBandAbove:t,...n}){const o=p.useContext(Kn),r=o?.scroller??null;p.useEffect(()=>{},[o]);const s=Vn(r,dr,ur,cr);return i.jsxs(J0,{...n,children:[e,i.jsx(Nn,{$position:"top",$visible:s.top&&!t}),i.jsx(Nn,{$position:"bottom",$visible:s.bottom})]})}function em(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const G1=["sections","actions"],xn=Object.freeze({});function tm({summary:e}){const t=p.useRef(e.severity),[n,o]=p.useState(0);p.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const r=Ei(ki());return i.jsx(nm,{$pulse:n,children:i.jsx(Ce,{text:r,focusable:!0,children:i.jsx(In,{tone:e.severity,size:"sm",children:e.label})})})}const nm=w.span`
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
`,Ni=w.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,om=w.div`
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
`;function rm({children:e}){const t=p.useContext(Kn),n=Vn(t?.scroller??null,dr,ur,cr);return i.jsx(om,{"data-panel-sticky-top":"","data-panel-glow-top":n.top?"":void 0,children:e})}function sm({render:e}){const{ref:t,size:n}=Un({w:0,h:0});return i.jsx(am,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const am=w.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,im=w.div`
  flex: 1 1 100%;
  min-width: 0;
`,lm=w(Ai)`
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
`,cm=w.div`
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
`,dm=w(nt)`
  margin: 0;
  ${$i}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${On}:hover &,
  ${On}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function hr(e){return e.held===void 0?e.label:`${e.label}: ${Ct(e.held)}`}function um(e){let t=null;for(const n of e){const o=sr(n),{tone:r}=o;r===void 0||r==="neutral"||(t===null||Dr(r)>Dr(t.severity))&&(t={severity:r,label:hr(o)})}return t}function bs({badges:e}){return i.jsx(i.Fragment,{children:e.map(t=>i.jsx(hm,{entry:t},t.id))})}function hm({entry:e}){const t=sr(e),{tone:n}=t;return No(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:hr(t)}),null}function fm({summary:e,announcement:t}){return i.jsxs(i.Fragment,{children:[i.jsx(Ce,{text:e.label,focusable:!0,children:i.jsx(pm,{children:i.jsx(wi,{severity:e.severity})})}),i.jsx(ft,{visuallyHidden:!0,assertive:!0,children:t})]})}const pm=w.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,mm=w.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function gm(e){return e.hoverTitle?i.jsx(xm,{...e}):i.jsx(Fi,{...e,hoverTitleId:void 0})}function xm(e){const t=p.useId();return i.jsx(Fi,{...e,hoverTitleId:t})}function Fi({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:r,panelToolbar:s,panelFilter:a,panelFooter:l,panelTrend:c,inactive:d,fitToSize:u,hoverTitle:f,hoverTitleId:x,panelSidebar:m,sidebarSide:g,sidebarSize:v,sidebarPlacement:y,sections:E,sectionMinWidth:S=P0,children:R,...j}){const A=l0(),_=Nr("actions"),C=Nr("sections"),$=em(o,A),I=$.length===0?null:$.map(W=>{const Q=sr(W),{label:be,tone:je,title:we}=Q;return i.jsx(Ce,{text:we,focusable:!0,children:i.jsx(In,{tone:je,held:Q.held,report:je===void 0||je==="neutral"?void 0:{id:W.id,label:hr(Q)},children:be})},W.id)}),D=a===void 0?s:i.jsxs(i.Fragment,{children:[s,i.jsx(im,{children:fi(a)})]}),G=r??null,N=G!==null&&G!=="none"&&G!=="live"?G:null;No(N?{id:"stream",severity:ao(N),label:Fr(N)??""}:null);const P=p0(),q=P!==null&&$.some(W=>W.id===P.id),Y=N===null?null:Fr(N),ne=q?null:P!==null?i.jsx(tm,{summary:P}):N===null||Y===null?null:i.jsx(Ce,{text:`Telemetry stream: ${Y}`,focusable:!0,children:i.jsx(In,{tone:ao(N),size:"sm",children:Y})}),se=P?.label??Y,M=se===null||se===""?"":typeof e=="string"?`${e}: ${se}`:`Status: ${se}`,U=n===void 0&&ne===null&&I===null&&!_?void 0:i.jsxs(i.Fragment,{children:[n,_&&i.jsx(gn,{segment:"actions",props:xn}),I,ne]}),ee=P??um($)??(N===null||Y===null?null:{severity:ao(N),label:Y}),fe=ee?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${ee.label}`:`Status: ${ee.label}`,_e=n===void 0&&ee===null&&!_?$.length===0?void 0:i.jsx(bs,{badges:$}):i.jsxs(i.Fragment,{children:[n,_&&i.jsx(gn,{segment:"actions",props:xn}),i.jsx(bs,{badges:$}),ee!==null&&i.jsx(fm,{summary:ee,announcement:fe})]}),pe=d!==void 0,me=pe?[]:p.Children.toArray(E),Z=me.length>0,ve=R===void 0&&!C&&!u&&me.length===1&&vm(me[0]),ke=[];for(const W of me){const Q=!u&&p.isValidElement(W)&&W.props.fill===!0,be=ke.at(-1);!Q&&be!==void 0&&!be.fill?be.nodes.push(W):ke.push({fill:Q,nodes:[W]})}Z&&!ke.some(W=>!W.fill)&&ke.push({fill:!1,nodes:[]});const ye=ke.reduce((W,Q,be)=>Q.fill?W:be,-1),Le=W=>Math.max(1,W.filter(Q=>!(p.isValidElement(Q)&&Q.props.full===!0)).length),ge=[];for(const W of ke){const Q=ge.length;if(W.fill){ge.push(W.nodes[0]);continue}ge.push(i.jsxs(O0,{$min:S,$columns:Le(W.nodes),children:[W.nodes,Q===ye&&i.jsx(gn,{segment:"sections",props:xn})]},`sections-${Q}`))}const V=pe?i.jsx(Xl,{reason:d}):Z?i.jsxs(i.Fragment,{children:[R,ge]}):R,ae=i.jsxs(Ii,{fitToSize:u,loneFrame:ve,hoverTitle:f,children:[i.jsxs(rm,{children:[i.jsx(bi,{tiny:f}),!f&&i.jsx(lm,{title:e,compactTitle:t,aside:U,toolbar:D})]}),u?i.jsx(N0,{hoverTitle:f,children:V}):V,!Z&&!pe&&i.jsx(gn,{segment:"sections",props:xn})]});return i.jsx(_0,{children:i.jsxs(On,{$railTravels:!0,$hoverTitle:f,...f?{tabIndex:0,role:"group","aria-labelledby":x,"data-tiny-panel":""}:{},...j,children:[i.jsx(Oi,{railBandAbove:!0,children:m===void 0||pe?ae:i.jsxs(K0,{side:g,size:v,placement:y,railBand:!0,children:[ae,i.jsx(Pi,{children:m})]})}),!pe&&c!==void 0&&i.jsx(sm,{render:c}),!pe&&l!==void 0&&i.jsx(Ni,{children:l}),f&&i.jsxs(cm,{"data-panel-hover-title":"",children:[i.jsx(dm,{as:"h3",id:x,children:e}),_e!==void 0&&i.jsx(mm,{children:_e})]}),i.jsx(ft,{visuallyHidden:!0,children:f&&fe!==void 0?"":M})]})})}function vm(e){if(!p.isValidElement(e)||e.type!==ra||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=p.Children.toArray(t).filter(r=>!(p.isValidElement(r)&&r.type===zp));if(n.length!==1)return!1;const[o]=n;if(!p.isValidElement(o))return!1;if(o.type===jp)return!0;if(o.type!==p.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const Y1=Object.assign(gm,{Context:Si,Delay:bi,Container:On,Header:Ai,Toolbar:Ri,Footer:Ni,Title:ji,Glow:Oi,Body:Ii,Section:ra,Sidebar:Pi}),bm={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function q1({cols:e,minColWidth:t,fit:n=!1,gap:o="related-dense",rowGap:r,align:s="center",squares:a=!1,squareHeadingPx:l=0,squareHeadingMinPx:c,minRowHeight:d,children:u,...f}){if(a){const x=p.Children.toArray(u).length,m=t??"120px",g=i.jsx($m,{$count:x,$min:m,$headingPx:l,$gap:Mt[o],$rowMin:d,children:i.jsx(_m,{$count:x,$min:m,$headingPx:l,$gap:Mt[o],$rowMin:d,$headingMin:c,"data-grid-squares":"",children:u})});return i.jsx(wm,{$rowMin:d,...f,children:d===void 0?g:i.jsx(km,{children:g})})}return i.jsx(ym,{$cols:e,$minColWidth:t,$fit:n,$gap:o,$rowGap:r,$align:s,...f,children:u})}const ym=w.div`
  display: grid;
  align-items: ${({$align:e})=>bm[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${Mt[t]} ${Mt[e]}`:Mt[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:n})=>e||(t?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,wm=w.div`
  container: grid-squares-width / inline-size;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  ${({$rowMin:e})=>e&&`
  flex-basis: 0;
  min-height: ${e};
`}
`,km=w(Li)`
  & > [data-scroll-area-inner] {
    display: flex;
    flex-direction: column;
  }
`,$m=w.div`
  container: grid-squares / size;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${({$count:e,$min:t,$headingPx:n,$gap:o,$rowMin:r})=>Wp(e,t,n,o,r)}
`,_m=w.div`
  --cols: 1;
  --rows: ${({$count:e})=>e};
  display: grid;
  flex: 1 1 0;
  min-height: 0;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
  gap: ${({$gap:e})=>e};
  ${({$count:e,$min:t,$headingPx:n,$rowMin:o})=>Up(e,t,n,o)}
  & > * {
    container-type: size;
    min-width: 0;
    min-height: 0;
  }
  ${({$headingPx:e,$headingMin:t})=>Xp(e,t)}
`,Di=.89,fr=.45;function zi({kind:e,x:t,y:n,scale:o=1,ghost:r=!1}){const s=ue[e],a=s.canvasRadius*o,l={fill:s.color,opacity:r?fr:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const d=a*Di;return i.jsx("rect",{x:t-d,y:n-d,width:2*d,height:2*d,...l})}const c=`${t},${n-a} ${t+a},${n+a*.8} ${t-a},${n+a*.8}`;return i.jsx("polygon",{points:c,...l})}function Hi(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function ys(e,t,n,o,r,{ghost:s=!1,scale:a=1}={}){const l=ue[n],c=l.canvasRadius*a;if(t.save(),t.globalAlpha=s?fr:1,t.fillStyle=Hi(e,l.cssVar,l.fallback),t.beginPath(),n==="held"){const d=c*Di;t.rect(o-d,r-d,2*d,2*d)}else t.moveTo(o,r-c),t.lineTo(o+c,r+c*.8),t.lineTo(o-c,r+c*.8),t.closePath();t.fill(),t.restore()}function V1(e,t,{held:n,modelled:o},r={}){n!==void 0&&o!==void 0&&(t.save(),t.globalAlpha=fr,t.strokeStyle=Hi(e,ue.modelled.cssVar,ue.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.stroke(),t.restore()),n!==void 0&&ys(e,t,"held",n.x,n.y,{...r,ghost:o!==void 0}),o!==void 0&&ys(e,t,"modelled",o.x,o.y,r)}const Fn=14,Be=4,He=6,Sm=6,ws=12,Ie=6,Qt=8,vn=4.5,To=4,Mm=12,jm=190,Em=80;function qt(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function Am(e,t,n,o){const r=o??e,s=r.x1-r.x0,a=e.y1-e.y0,l=s>=jm&&a>=Em,c=l||o!==void 0,d=l||o?n:n.filter(_=>!_.detail),u=s-Ie*2-Be*2-Qt-To,f=o!==void 0,x=Math.floor(u/He),m=_=>qt(_.value??Rn,x-(_.currency?_.currency.length+2:0)),g=_=>{const C=_.value??Rn;if(f)return qt(_.label,x);if(l)return`${_.label} ${C}`;const $=Math.floor((u-C.length*He)/He)-1-(_.modelled?2:0),I=qt(_.label,Math.min($,Mm));if(I!=="")return`${I} ${C}`;const D=Math.floor(u/He)-(_.modelled?2:0);return qt(C,D)},v=_=>(l||f)&&_.currency?_.currency:"",y=_=>v(_)?Sm+v(_).length*He+(_.modelled?ws:0):_.modelled?ws:0,E=l?0:Qt+To,S=Math.floor((s-Ie*2-Be*2)/He),R=Math.max(...d.map(_=>f?E+Math.max(g(_).length*He,m(_).length*He+y(_)):E+g(_).length*He+y(_)),c?Math.min(t.length,S)*He:0),j=c?1:0,A=(d.length*(f?2:1)+j)*Fn+Be*2;return{full:l,named:c,headingChars:S,stacked:f,rows:d,text:g,valueText:m,currencyText:v,cardW:f?s:Math.min(R+Be*2,s-Ie*2),cardH:A,headRows:j,fits:A<=a-Ie*2}}function Rm(e,t,n,o,r){const s=(a,l)=>a>=t&&a<=t+o&&l>=n&&l<=n+r;for(let a=1;a<e.cx.length;a++){const[l,c,d,u]=[e.cx[a-1],e.cy[a-1],e.cx[a],e.cy[a]];if(![l,c,d,u].every(Number.isFinite))continue;const f=Math.max(1,Math.ceil(Math.hypot(d-l,u-c)/Fn));for(let x=0;x<=f;x++)if(s(l+(d-l)*x/f,c+(u-c)*x/f))return!0}return!1}function pr({x:e,plot:t,heading:n,rows:o,column:r,avoid:s=[],traces:a=[]}){const l=Am(t,n,o,r),{rows:c,cardW:d,cardH:u,fits:f}=l,x=t.y0+Ie,m=c.flatMap($=>$.y===void 0||$.y===null?[]:[$.y]),g=($,I)=>m.every(D=>e+vn<$||e-vn>$+d||D+vn<I||D-vn>I+u),v=t.x1-e-Ie,y=v>=d||v>=e-t.x0,E=$=>Math.max(t.x0+Ie,Math.min(t.x1-Ie-d,$)),S=y?[e+Ie,e-Ie-d]:[e-Ie-d,e+Ie],R=[x,t.y1-Ie-u].flatMap($=>S.map(I=>({cardX:E(I),cardY:$}))),j=($,I)=>a.every(D=>!Rm(D,$,I,d,u)),A=($,I)=>s.every(D=>$+d<D.x0||$>D.x1||I+u<D.y0||I>D.y1),_=R.find($=>g($.cardX,$.cardY)&&j($.cardX,$.cardY)&&A($.cardX,$.cardY))??R.find($=>g($.cardX,$.cardY)&&A($.cardX,$.cardY))??R.find($=>g($.cardX,$.cardY)&&j($.cardX,$.cardY))??R.find($=>g($.cardX,$.cardY)),C=f?r?{cardX:r.x0,cardY:r.y0+Ie}:_:void 0;return{layout:l,place:C}}function K1(e){return pr(e).place!==void 0}function Tm(e){const{layout:t,place:n}=pr(e);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+t.cardW,y1:n.cardY+t.cardH}}function Cm({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:a}){const{layout:l,place:c}=pr({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:a}),{full:d,named:u,headingChars:f,stacked:x,rows:m,text:g,valueText:v,currencyText:y,cardW:E,cardH:S,headRows:R}=l,j=c!==void 0,A=c?.cardX??0,_=c?.cardY??0,C=$=>$+Be+(d?0:Qt+To);return i.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[i.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),m.map($=>$.y===void 0||$.y===null?null:i.jsx("circle",{cx:e,cy:$.y,r:3.5,fill:$.color,stroke:"var(--color-text-primary)",strokeWidth:1},$.id)),j&&i.jsxs("g",{"data-plot-crosshair-card":"",children:[i.jsx("rect",{x:A,y:_,width:E,height:S,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),u&&i.jsx("text",{x:A+Be,y:_+Be+10,fill:"var(--color-text-muted)",fontSize:10,children:qt(n,f)}),m.map(($,I)=>{const D=x?2:1,G=_+Be+(I*D+R)*Fn+10,N=G+(x?Fn:0);return i.jsxs("g",{"data-plot-crosshair-row":$.id,children:[!d&&i.jsx("rect",{x:A+Be,y:G-8,width:Qt,height:Qt,fill:$.color,"data-plot-crosshair-swatch":""}),i.jsx("text",{x:C(A),y:G,fill:$.value===null||x?"var(--color-text-faint)":$.color,fontSize:10,style:{whiteSpace:"pre"},children:g($)}),x&&i.jsx("text",{x:C(A),y:N,fill:$.value===null?"var(--color-text-faint)":$.color,fontSize:10,style:{whiteSpace:"pre"},children:v($)}),$.modelled&&i.jsx(zi,{kind:"modelled",x:A+E-Be-y($).length*He-(y($)?8:4),y:N-3}),y($)&&i.jsx("text",{x:A+E-Be,y:N,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:y($)})]},$.id)})]})]})}const ks=720,Im=110,Lm=200,$s=56,Pm=20,Om=112,Nm=260,Fm=.4,Dm=300;function zm({width:e,height:t,contentWidth:n,legendHeight:o=0,cardHeight:r=0}){const s=Math.max(Om,Math.ceil(n));if((t>e||e<ks)&&t>=Lm)return{placement:"below"};if(e<ks||t<Im||s>Math.min(Nm,e*Fm)||e-s<Dm)return{placement:"overlay"};const l=t>=$s+o+r;return!l&&t<$s+Pm+r?{placement:"overlay"}:{placement:"beside",columnWidth:s,legendBelow:!l}}const Hm={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function Bm(e){return Hm[e]}const kt=4,bn=3,Co=6;function Wm(e,t){return e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0}function Um(e,t){const n=(o,r)=>o>=t.x0&&o<=t.x1&&r>=t.y0&&r<=t.y1;if(e.cx.length===1)return Number.isFinite(e.cx[0])&&n(e.cx[0],e.cy[0]);for(let o=1;o<e.cx.length;o++){const[r,s,a,l]=[e.cx[o-1],e.cy[o-1],e.cx[o],e.cy[o]];if(![r,s,a,l].every(Number.isFinite))continue;const c=Math.max(1,Math.ceil(Math.hypot(a-r,l-s)/Co));for(let d=0;d<=c;d++)if(n(r+(a-r)*d/c,s+(l-s)*d/c))return!0}return!1}function Xm({plot:e,card:t,traces:n,obstacles:o}){if(t.width<=0||t.height<=0||t.width>e.x1-e.x0-kt*2||t.height>e.y1-e.y0-kt*2)return;const r=e.x0+kt,s=e.x1-kt-t.width,a=e.y0+kt,l=e.y1-kt-t.height;return[{x:s,y:a},{x:r,y:l},{x:s,y:l},{x:r,y:a}].find(d=>{const u={x0:d.x-bn,y0:d.y-bn,x1:d.x+t.width+bn,y1:d.y+t.height+bn};return!n.some(f=>Um(f,u))&&!o.some(f=>Wm(u,f))})}function Gm(e){const t=[],n=[];let o=!0;for(let r=e.y0;r<=e.y1+Co;r+=Co){const s=Math.min(r,e.y1);t.push(o?e.x0:e.x1,o?e.x1:e.x0),n.push(s,s),o=!o}return{cx:t,cy:n}}function Ym(e,t){return e?.includes(t)??!1}function _s(e,t){const{reckoned:n,spans:o}=e.data;return n?.some(r=>t>=r.from&&t<=r.to)?"modelled":o?.some(r=>t>=r.from&&t<=r.to&&r.status==="recorded")?"recorded":"measured"}function qm(e){const{x:t,y:n,y2:o}=e.data;let r=!0;for(let a=0;a<t.length;a++)if(!Number.isFinite(t[a])||a>0&&t[a]<t[a-1]){r=!1;break}if(r)return e;const s=t.map((a,l)=>l).filter(a=>Number.isFinite(t[a])).sort((a,l)=>t[a]-t[l]||a-l);return{...e,data:{x:s.map(a=>t[a]),y:s.map(a=>n[a]),...o?{y2:s.map(a=>o[a])}:{}}}}function Vm(e,t,n){const o=e.data.x,r=e.data.y,s=Math.min(o.length,r.length);if(s===0||t<o[0]||t>o[s-1])return null;let a=0,l=s-1;for(;a<l;){const g=a+l>>1;o[g]<t?a=g+1:l=g}const c=a,d=Math.max(0,c-1);if(o[c]!==t&&c>0&&Ym(e.data.breaks,c))return null;const u=t-o[d]<=o[c]-t?d:c;if(n!==void 0&&Math.abs(o[u]-t)>n)return null;const f=o[c]-o[d];if(e.readBetween&&f>0&&o[c]!==t){const g=r[d]+(r[c]-r[d])*(t-o[d])/f;return Number.isFinite(g)?{index:u,x:t,y:g,currency:_s(e,u)}:null}const x=r[u];if(!Number.isFinite(x))return null;const m=e.data.y2?.[u];return{index:u,x:o[u],y:x,...m!==void 0&&Number.isFinite(m)?{y2:m}:{},currency:_s(e,u)}}function Km(e){const t=new Set;for(const n of e)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&t.add(o);return[...t].sort((n,o)=>n-o)}function Ss(e,t,n){if(e.length===0)return null;if(t===null)return e[e.length-1];let o=0,r=e.length-1;for(;o<r;){const a=o+r>>1;e[a]<t?o=a+1:r=a}let s=o+n;return e[o]!==t&&n>0&&(s-=1),e[Math.max(0,Math.min(e.length-1,s))]}function Zm({x:e,y:t,size:n,color:o,text:r}){const s=n/2,a=`M 0 ${-s} L ${s} ${s*.8} L ${-s} ${s*.8} Z`,l=`M -0.9 ${-s*.42} H 0.9 V ${s*.2} H -0.9 Z`,c=`M -0.9 ${s*.4} H 0.9 V ${s*.64} H -0.9 Z`;return i.jsx(Ce,{text:r,focusable:!0,children:i.jsxs("g",{role:"img","aria-label":r,"data-limit-crossing":"",transform:`translate(${e} ${t})`,children:[i.jsx("title",{}),i.jsx("circle",{r:12,fill:"transparent"}),i.jsx("path",{d:`${a} ${l} ${c}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),i.jsx("path",{d:a,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function Bi(e,t,n){return n==="above"?e>=t:e<=t}function Qm({y:e,cx:t,cy:n,limit:o,limitY:r,bad:s,breaks:a=[],step:l=!1,minGapPx:c}){const d=(y,E,S)=>{if(!E)return{index:y,x:t[y],y:n[y],entered:!1};if(S===null)return{index:y,x:t[y],y:r,entered:!0};const R=n[y]-n[S],j=R===0?1:(r-n[S])/R;return{index:y,x:t[S]+(t[y]-t[S])*j,y:r,entered:!0}},u=new Set(a),f=[];let x=null,m=!1,g=!1,v=Number.NEGATIVE_INFINITY;for(let y=0;y<e.length;y++){if(!Number.isFinite(e[y])){x=null;continue}const E=Bi(e[y],o,s);if(E&&!g){const S=d(y,m,l||u.has(y)?null:x),R=f[f.length-1];R!==void 0&&S.x-v<c?R.spells++:f.push({...S,spells:1}),v=S.x}g=E,m=!0,x=y}return f}const Jm=1;function eg(e,t,n,o,r){const s=n.to;if(s<1||s>=e.length)return!1;const a=o(e[s-1]),l=o(e[s]),c=r(t[s-1]),d=r(t[s]);return l>a?n.t.some((u,f)=>{const x=o(u),m=c+(d-c)*(x-a)/(l-a);return Math.abs(r(n.v[f])-m)>Jm}):!1}function fo(e,t,n,o){const r=t-e;if(r===0){const s=(n+o)/2;return()=>s}return s=>n+(s-e)/r*(o-n)}function Io(e,t,n=5){if(e===t)return Array.from({length:n},()=>e);const r=(t-e)/(n-1),s=10**Math.floor(Math.log10(r)),l=([1,2,2.5,5,10].find(x=>x*s>=r)??10)*s,c=Math.ceil(e/l)*l,d=[];for(let x=0;d.length<n;x++){const m=c+x*l;if(m>t+l*.01)break;d.push(m)}if(d.length>=2)return d;const u=Math.floor(e/l)*l,f=Math.ceil(t/l)*l;return f>u?[u,f]:[u,u+l]}function Wi(e,t){const n=Math.floor(e/1e3);if(t>=36e5){const s=Math.floor(n/3600),a=Math.floor(n%3600/60),l=n%60;return`${s}:${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")}`}const o=Math.floor(n/60),r=n%60;return`${o}:${String(r).padStart(2,"0")}`}function Ms(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let a=!1;for(let l=0;l<e.length;l++){if(!Zn(e[l],t[l])){a=!1;continue}const c=n(e[l]).toFixed(2),d=o(t[l]).toFixed(2),u=!a||r.includes(l);s.push(`${u?"M":"L"}${c},${d}`),a=!0,u&&Ui(e,t,l,r)&&s.push(`L${c},${d}`)}return s.join(" ")}function Zn(e,t){return Number.isFinite(e)&&Number.isFinite(t)}function Ui(e,t,n,o){return n+1>=e.length||o.includes(n+1)||!Zn(e[n+1],t[n+1])}function tg(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let a=null;for(let l=0;l<e.length;l++){if(!Zn(e[l],t[l])){a=null;continue}const c=n(e[l]).toFixed(2),d=o(t[l]).toFixed(2);if(a===null||r.includes(l)){s.push(`M${c},${d}`),Ui(e,t,l,r)&&s.push(`L${c},${d}`),a=d;continue}s.push(`H${c}`),d!==a&&s.push(`V${d}`),a=d}return s.join(" ")}function ng(e,t,n,o,r,s=[],a=[],l=[]){if(e.length===0)return[];if(a.length===0&&l.length===0)return[{d:r(e,t,n,o,s)}];function c(v,y){const E=new Array(e.length);for(const S of v){const R=Math.min(e.length-1,S.to);for(let j=Math.max(0,S.from);j<=R;j++)E[j]=y(S)}return E}const d=c(a,v=>v.status),u=c(l,v=>v.basis),f=new Set(s),x=[];let m=0;const g=(v,y)=>{const E=v>0&&!f.has(v)?v-1:v,S=A=>A.slice(E,y+1),R=[];for(const A of s)A>E&&A<=y&&R.push(A-E);const j=r(S(e),S(t),n,o,R);j!==""&&x.push({status:d[v],basis:u[v],d:j})};for(let v=1;v<=e.length;v++)(v===e.length||d[v]!==d[m]||u[v]!==u[m])&&(g(m,v-1),m=v);return x}function Xi(e,t,n,o,r){if(e.length===0)return"";const s=Math.min(e.length,t.length,n.length),a=[];for(let c=0;c<s;c++)Zn(e[c],t[c])&&Number.isFinite(n[c])&&a.push(c);if(a.length===0)return"";const l=[];a.forEach((c,d)=>{const u=o(e[c]).toFixed(2),f=r(n[c]).toFixed(2);l.push(`${d===0?"M":"L"}${u},${f}`)});for(let c=a.length-1;c>=0;c--){const d=a[c],u=o(e[d]).toFixed(2),f=r(t[d]).toFixed(2);l.push(`L${u},${f}`)}return l.push("Z"),l.join(" ")}function og(e,t,n,o){const r=[];for(const s of t){const{bandLo:a,bandHi:l,bandKind:c}=s;if(!a||!l||c===void 0)continue;const d=[];for(let f=s.from;f<=s.to&&f<e.length;f++)d.push(e[f]);const u=Xi(d,a,l,n,o);u!==""&&r.push({d:u,kind:c})}return r}function js(e,t,n,o){if(e===t){const d=(n+o)/2;return()=>d}const r=e>0?e:1e-9,s=t>r?t:r*10,a=Math.log10(r),c=Math.log10(s)-a;if(c===0){const d=(n+o)/2;return()=>d}return d=>{const u=d>0?d:r;return n+(Math.log10(u)-a)/c*(o-n)}}function rg(e,t,n=5){if(!(e>0)||!(t>0)||t<=e)return Io(e,t,n);const o=Math.log10(e),r=Math.log10(t);if(r-o<1)return Io(e,t,n);const a=Math.ceil(o),l=Math.floor(r),c=Math.max(1,Math.ceil((l-a+1)/n)),d=[];for(let u=a;u<=l;u+=c)d.push(10**u);return d.length>0?d:[e,t]}const po=.86,Es=[[0,-1.15],[1.05,.8],[-1.05,.8]],As=.3,Ne={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:po,triangle:Es,outlineWidth:As,keylineWidth:.2,reach:Math.max(Math.hypot(po,po),...Es.map(([e,t])=>Math.hypot(e,t)))+As/2},sg={"aria-hidden":!0};function Gi(e,t,n,o){const r=Ne.squareHalf;return(e==="modelled"?Ne.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([a,l])=>[t+a*o,n+l*o])}const Yi=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function qi(e,t,n){const o=e==="current"?0:Ne.outlineWidth;return t*(o+2*n*Ne.keylineWidth)}function ag({x:e,y:t,r:n,state:o="current",keyline:r=!1}){const s=o==="current"?"":Gi(o,0,0,n).map(([a,l])=>`${a},${l}`).join(" ");return i.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...sg,children:[r&&Yi.map(({ring:a,color:l,widths:c})=>{const d={"data-vessel-keyline":a,fill:"none",stroke:l,strokeWidth:qi(o,n,c),strokeLinejoin:"round"};return o==="current"?i.jsx("circle",{r:n,...d},a):i.jsx("polygon",{points:s,...d},a)}),o==="current"?i.jsx("circle",{r:n,fill:Ne.color}):i.jsx("polygon",{points:s,fill:o==="lost"?"none":ue[o].color,stroke:o==="lost"?Ne.lost.color:Ne.color,strokeWidth:n*Ne.outlineWidth,strokeLinejoin:"round"})]})}function Mn(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function Vi(e,t,n,o,r){if(e.beginPath(),t==="current"){e.arc(n,o,r,0,Math.PI*2);return}Gi(t,n,o,r).forEach(([s,a],l)=>{l===0?e.moveTo(s,a):e.lineTo(s,a)}),e.closePath()}function ig(e,t,n,o,r){e.save(),e.lineJoin="round";for(const{color:s,widths:a}of Yi)Vi(e,t,n,o,r),e.strokeStyle=s,e.lineWidth=qi(t,r,a),e.stroke();e.restore()}function lg(e,t,n,o,r,s=4,{keyline:a=!1}={}){a&&ig(t,n,o,r,s);const l=Mn(e,Ne.cssVar,Ne.fallback);if(t.save(),Vi(t,n,o,r,s),n==="current")t.fillStyle=l,t.fill();else{if(n!=="lost"){const c=ue[n];t.fillStyle=Mn(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=n==="lost"?Mn(e,Ne.lost.cssVar,Ne.lost.fallback):l,t.lineWidth=s*Ne.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function Z1(e,t,n,o=4,r={}){const{held:s,modelled:a}=n;s!==void 0&&a!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=Mn(e,ue.modelled.cssVar,ue.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(a.x,a.y),t.stroke(),t.restore());for(const l of["lost","held","current","modelled"]){const c=n[l];c!==void 0&&lg(e,t,l,c.x,c.y,o,r)}}const Rt=56;function Ki(e,t,n,o){const r=Math.max(0,Math.min(t-1,Math.floor(n))),s=Math.max(0,Math.min(t-1,Math.floor(o))),a=Math.min(t-1,r+1),l=Math.min(t-1,s+1),c=Math.max(0,Math.min(1,n-r)),d=Math.max(0,Math.min(1,o-s)),u=e[s*t+r]+(e[s*t+a]-e[s*t+r])*c,f=e[l*t+r]+(e[l*t+a]-e[l*t+r])*c;return u+(f-u)*d}const Rs=400,cg=16,dg=8,Ts=.06,ug=3.3,hg=.6,fg=60,pg=40,Cs=[6,12],Is=[48,96],yn=2;function mo(e,t,n){const o=Math.max(0,Math.min(1,(n-e)/(t-e)));return o*o*(3-2*o)}function Ls(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Ps(e,t){const n=t/e,o=e<=t?.07:.09,r=ug**Math.exp(-((e-t)**2)/(2*o**2*t**2));return n**5*Math.exp(-1.25*n**4)*r}function Zi(e,t,n){if(!(e>0)||!(t>0)||!(n>0)||!Number.isFinite(e+t+n))return[];const o=Math.sqrt(n*2*Math.PI/Rs),r=Ps(o,o),s=[];for(let a=-yn;a<=cg*yn;a++){const l=Rs/2**(a/yn),c=l/e,d=mo(Cs[0],Cs[1],c)*(1-mo(Is[0],Is[1],c))*(1-mo(t,2*t,l));if(d<=.001)continue;const u=2*Math.PI/l,f=Math.sqrt(n*u),x=Math.sqrt(Math.min(1,Ps(f,o)/r)),m=(f>=o?Ts:Ts*x)/Math.sqrt(yn),g=(fg+(Ls(a,1)-.5)*2*pg)*Math.PI/180;s.push({kx:u*Math.sin(g),ky:u*Math.cos(g),k:u,amplitude:m/u,omega:f,phase:Ls(a,2)*2*Math.PI,weight:d})}return s.slice(0,dg)}function mg(e,t,n,o){let r=0;for(const s of e)r+=s.weight*s.amplitude*Math.cos(s.kx*t+s.ky*n-s.omega*o+s.phase);return r}const jn=Qi(-.25,.3,.92),gg=2.6,xg=Qi(jn[0],jn[1],jn[2]+1),vg=.8,bg=3,yg=.95,wg=.35,kg=235,$g=.5,_g=.35;function Qi(e,t,n){const o=Math.hypot(e,t,n);return[e/o,t/o,n/o]}function Sg(e,t,n,o){const{east0:r,north0:s,dx:a,dy:l,seconds:c,colour:d,waves:u,isSea:f}=o,[x,m,g]=jn,[v,y,E]=xg,S=u.length,R=new Float64Array(S*t),j=new Float64Array(S*t),A=new Float64Array(S*n),_=new Float64Array(S*n);for(let N=0;N<S;N++){const P=u[N];for(let q=0;q<t;q++){const Y=P.kx*(r+(q+.5)*a);R[N*t+q]=Math.cos(Y),j[N*t+q]=Math.sin(Y)}for(let q=0;q<n;q++){const Y=P.ky*(s-(q+.5)*l)-P.omega*c+P.phase;A[N*n+q]=Math.cos(Y),_[N*n+q]=Math.sin(Y)}}const C=new Float64Array(S),$=new Float64Array(S),I=u.map(N=>N.kx*N.weight*N.amplitude),D=u.map(N=>N.ky*N.weight*N.amplitude),G=u.map(N=>hg*N.k*N.weight*N.amplitude);for(let N=0;N<n;N++)for(let P=0;P<t;P++){const q=(N*t+P)*4;if(f&&!f(P,N)){e[q+3]=0;continue}let Y=0,ne=0,se=1;for(let Z=0;Z<S;Z++){const ve=R[Z*t+P],ke=j[Z*t+P],ye=A[Z*n+N],Le=_[Z*n+N];C[Z]=ve*ye-ke*Le,$[Z]=ke*ye+ve*Le}for(let Z=0;Z<S;Z++){const ve=S>1?1+vg*C[(Z+bg)%S]:1;Y-=I[Z]*C[Z]*ve,ne-=D[Z]*C[Z]*ve,se-=G[Z]*$[Z]*ve}const M=1/Math.sqrt(Y*Y+ne*ne+se*se),U=(Y*x+ne*m+se*g)*M-g,ee=1+gg*U;let fe=0;const _e=(Y*v+ne*y+se*E)*M;if(_e>yg){let Z=_e;for(let ve=0;ve<7;ve++)Z*=Z;fe=255*wg*Z}const pe=Math.max(0,ee-1)*_g,me=Math.min(1,ee)*$g;e[q]=d.r*me+(255-d.r*me)*pe+fe,e[q+1]=d.g*me+(255-d.g*me)*pe+fe,e[q+2]=d.b*me+(255-d.b*me)*pe+fe,e[q+3]=kg}}function Os(e){const t=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function Mg(e,t){const n=Os(t),o=Math.max(e.r,e.g,e.b,1),r=c=>({r:Math.min(255,e.r*c),g:Math.min(255,e.g*c),b:Math.min(255,e.b*c)});let s=0,a=255/o;for(let c=0;c<32;c++){const d=(s+a)/2;Os(r(d))<n?s=d:a=d}const l=r((s+a)/2);return{r:Math.round(l.r),g:Math.round(l.g),b:Math.round(l.b)}}const jg=192,Eg=30,Ag="--color-info-mark",Rg=.42;function Tg(e,t){const n=e.view==="plan",o=t.scaleX,r=t.scaleYPrimary,s=1/(o(1)-o(0)),a=1/(r(1)-r(0)),l=E=>(E-o(0))*s,c=E=>(E-r(0))*a,d=Math.min(o(e.bounds.x0),o(e.bounds.x1)),u=Math.max(o(e.bounds.x0),o(e.bounds.x1)),f=Math.min(r(e.bounds.y0),r(e.bounds.y1)),x=Math.max(r(e.bounds.y0),r(e.bounds.y1)),m=n?d:Math.max(t.plotX0,d),g=n?u:Math.min(t.plotX1,u),v=n?f:Math.max(t.plotY0,f),y=n?x:Math.min(t.plotY1,x);return n&&(u<t.plotX0||d>t.plotX1||x<t.plotY0||f>t.plotY1)||!(g-m>=1&&y-v>=1)||!Number.isFinite(s+a)?null:{left:m,top:v,width:g-m,height:y-v,x0:l(m),x1:l(g),y0:c(y),y1:c(v)}}function Ns(e,t){if(!t)return null;e.fillStyle=t;const n=/^#([0-9a-f]{6})$/i.exec(String(e.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function Cg(e,t,n){const o=Ns(t,getComputedStyle(e).getPropertyValue(Ag).trim());if(!o)return null;const r=n?Ns(t,n):null;return r?Mg(r,o):o}function Ig(e,t,n,o,r,s){const a=Rt,l=(n.x1-n.x0)/a,c=(n.y1-n.y0)/a,d=t.sea,u=o.scaleYPrimary(t.bounds.y0)<o.scaleYPrimary(t.bounds.y1),f=d&&d.size>1&&d.heights.length>=d.size*d.size?(m,g)=>{const v=u?g:a-1-g;return Ki(d.heights,d.size,m/(a-1)*(d.size-1),v/(a-1)*(d.size-1))<0}:void 0,x=e.createImageData(a,a);Sg(x.data,a,a,{east0:t.origin.east+n.x0,north0:t.origin.north+n.y1,dx:l,dy:c,seconds:r,colour:s,waves:Zi(Math.max(l,c),n.x1-n.x0,t.gravity),isSea:f}),e.putImageData(x,0,0)}function Lg(e,t,n,o,r){const{width:s,height:a}=e.canvas,l=Pg(t,n,s),c=l.length>1?(l[l.length-1]-l[0])/(l.length-1):n.x1-n.x0,d=Zi(c,n.x1-n.x0,t.gravity),u=(t.bearingDeg??90)*Math.PI/180,f=g=>(g-n.x0)/(n.x1-n.x0)*s,x=g=>(n.y1-g)/(n.y1-n.y0)*a;e.clearRect(0,0,s,a),e.beginPath(),l.forEach((g,v)=>{const y=mg(d,t.origin.east+g*Math.sin(u),t.origin.north+g*Math.cos(u),o);v===0?e.moveTo(f(g),x(y)):e.lineTo(f(g),x(y))});const m=`${r.r}, ${r.g}, ${r.b}`;e.strokeStyle=`rgba(${m}, 0.9)`,e.lineWidth=1,e.stroke(),e.lineTo(f(l[l.length-1]),a),e.lineTo(f(l[0]),a),e.closePath(),e.fillStyle=`rgba(${m}, ${Rg})`,e.fill()}function Pg(e,t,n){const o=(e.samples??[]).filter(r=>r>t.x0&&r<t.x1);return e.samples&&e.samples.length>1?[t.x0,...o,t.x1]:Array.from({length:n+1},(r,s)=>t.x0+s/n*(t.x1-t.x0))}function Og({layer:e,frame:t}){const n=Tg(e,t),o=p.useRef(null),r=p.useRef(null);r.current=n?{layer:e,at:n,frame:t}:null;const s=n?e.view==="plan"?Rt:Math.max(1,Math.min(jg,Math.round(n.width))):0,a=n?e.view==="plan"?Rt:Math.max(1,Math.round(n.height*s/n.width)):0,l=e.tint;return p.useEffect(()=>{const c=o.current,d=c?.getContext("2d")??null;if(!c||!d||s===0||a===0)return;const u=Cg(c,d,l);if(!u)return;const f=()=>{const S=r.current;if(!S)return;const R=Date.now()/1e3;S.layer.view==="plan"?Ig(d,S.layer,S.at,S.frame,R,u):Lg(d,S.layer,S.at,R,u)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let m=!0;const g=typeof IntersectionObserver=="function"?new IntersectionObserver(S=>{m=S.some(R=>R.isIntersecting)}):null;g?.observe(c);let v=Number.NEGATIVE_INFINITY,y=0;const E=S=>{y=requestAnimationFrame(E),!(!m||document.hidden||S-v<1e3/Eg)&&(v=S,f())};return y=requestAnimationFrame(E),()=>{cancelAnimationFrame(y),g?.disconnect()}},[s,a,l]),n?i.jsx("g",{"aria-hidden":"true","data-plot-layer":e.id,"data-plot-layer-kind":"water",children:i.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:i.jsx("canvas",{ref:o,width:s,height:a,style:{display:"block",width:"100%",height:"100%",imageRendering:e.view==="plan"?"pixelated":"auto"}})})}):null}const Ng={faint:.45,normal:.85,bright:1},Fg=1.5,Dg=5,zg=.9,Wt=7,Ut=6,go=10,Tt=9,Qe=12,Hg=6.2,xo=4,Bg=9,Wg=13,Ug=.1,Jt={paintOrder:"stroke",strokeWidth:3,strokeLinejoin:"round"},vo=5,Xg=.5,Gg=.5;function ot(e){return xe[e.tone??"neutral"]}function rn(e){return Oe[e.tone??"neutral"]}function Ge(e){return Ng[e.emphasis??"normal"]}function qe(e,t){return t.axis==="secondary"?e.scaleYSecondary:e.scaleYPrimary}function Yg(e){const t=e.axis==="secondary"?"secondary":"primary";switch(e.kind){case"series":return{xs:e.points.map(n=>n.x),ys:e.points.map(n=>n.y),axis:t};case"region":return{xs:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.x),ys:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.y),axis:t};case"rule":return e.along==="y"?{xs:[],ys:[e.value],axis:t}:{xs:[e.value],ys:[],axis:t};case"marker":case"annotation":return{xs:[e.at.x],ys:[e.at.y],axis:t};default:return{xs:[],ys:[],axis:t}}}const mr=5.8,$t=11,Fs=4;function qg(e,t){const n=t.text.length*mr,{frame:o}=t,r=t.anchorX+t.gap,s=r+n<=o.plotX1-4?"start":"end",a=s==="start"?r:t.anchorX-t.gap,l=s==="start"?a:a-n,c=l+n,d=f=>e.some(x=>l<x.x1&&c>x.x0&&f-$t<x.y1&&f+2>x.y0);let u=t.anchorY+3;for(let f=0;f<Fs&&d(u);f++)u+=$t;if(d(u)){u=t.anchorY+3;for(let f=0;f<Fs&&d(u);f++)u-=$t}return u=Math.min(Math.max(u,o.plotY0+$t),o.plotY1-$t),e.push({x0:l,x1:c,y0:u-$t,y1:u+2}),{x:a,y:u,anchor:s}}function Vg(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function Kg(e){if(e.length===0)return"";const t=[`M${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`];for(let n=1;n<e.length;n++)t.push(`H${e[n].x.toFixed(2)}`,`V${e[n].y.toFixed(2)}`);return t.join(" ")}function Ji(e,t,n){if(e.length===0)return[];const o=e[0],r=e[e.length-1],s=[...e];if(t==="right"||t==="left"){const a=t==="right"?n.plotX1:n.plotX0;s.push({x:a,y:r.y},{x:a,y:o.y})}else{const a=t==="above"?n.plotY0:n.plotY1;s.push({x:r.x,y:a},{x:o.x,y:a})}return s}function Zg(e,t){const n=[];for(const o of e){if(o.kind==="relief"||o.kind==="water"){const a=qe(t,o),{x0:l,y0:c,x1:d,y1:u}=o.bounds;n.push([{x:t.scaleX(l),y:a(c)},{x:t.scaleX(d),y:a(c)},{x:t.scaleX(d),y:a(u)},{x:t.scaleX(l),y:a(u)}]);continue}if(o.kind!=="region"||o.hatched)continue;const r=qe(t,o),s=o.boundary.map(a=>({x:t.scaleX(a.x),y:r(a.y)}));if(!(s.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...s,...o.boundaryHigh.map(a=>({x:t.scaleX(a.x),y:r(a.y)})).reverse()])}else n.push(Ji(s,o.side,t))}return(o,r)=>n.some(s=>{let a=!1;for(let l=0,c=s.length-1;l<s.length;c=l++){const d=s[l],u=s[c];d.y>r!=u.y>r&&o<(u.x-d.x)*(r-d.y)/(u.y-d.y)+d.x&&(a=!a)}return a})}function Qg({layer:e,frame:t}){if(e.stops.length===0)return null;const n=qe(t,e),o=e.along==="y"?t.plotY1-t.plotY0:t.plotX1-t.plotX0;if(o<=0)return null;const r=e.along==="y"?t.plotY0:t.plotX0,s=e.along==="y"?n:t.scaleX,a=e.maxOpacity??Gg,l=e.tint??ot(e),c=e.blur!==void 0?Math.ceil(e.blur*3):0,d=`plot-field-${e.id}-${t.uid}`,u=`plot-field-blur-${e.id}-${t.uid}`,f=e.along==="y"?t.plotY1:t.plotX1,x=e.stops.map(m=>({offset:(s(m.at)-r)/o*100,intensity:Math.max(0,Math.min(1,m.intensity))})).sort((m,g)=>m.offset-g.offset);return i.jsxs(i.Fragment,{children:[i.jsxs("defs",{children:[i.jsx("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:t.plotX0,y1:t.plotY0,x2:e.along==="x"?f:t.plotX0,y2:e.along==="y"?f:t.plotY0,children:x.map((m,g)=>i.jsx("stop",{offset:`${m.offset.toFixed(2)}%`,stopColor:l,stopOpacity:a*m.intensity},g))}),e.blur!==void 0&&i.jsx("filter",{id:u,children:i.jsx("feGaussianBlur",{stdDeviation:e.blur})})]}),i.jsx("rect",{"data-plot-layer":e.id,"data-plot-layer-kind":"field",x:t.plotX0-c,y:t.plotY0-c,width:t.plotX1-t.plotX0+2*c,height:t.plotY1-t.plotY0+2*c,fill:`url(#${d})`,filter:e.blur!==void 0?`url(#${u})`:void 0})]})}const Jg=6,_t=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function ex(e){const t=Math.max(0,Math.min(1,e));for(let n=1;n<_t.length;n++)if(t<=_t[n][0]){const[o,r]=_t[n-1],[s,a]=_t[n],l=s>o?(t-o)/(s-o):0;return[Math.round(r[0]+(a[0]-r[0])*l),Math.round(r[1]+(a[1]-r[1])*l),Math.round(r[2]+(a[2]-r[2])*l)]}return _t[_t.length-1][1]}const tx=[150,156,160],nx=[200,80,70];function ox(e,t){if(t===3)return tx;if(t!==1&&t!==2)return e;const n=.3*e[0]+.59*e[1]+.11*e[2],o=(s,a,l)=>s+(l-s)*a,r=e.map(s=>o(o(s,.5,n),.06,235));return t===1?r:r.map((s,a)=>o(s,.3,nx[a]))}function rx(e,t){const n=2*(t-1),o=(e%n+n)%n;return o<t?o:n-o}function sx(e,t,n,o,r,s,a){const l=e[s*n+a],c=r?rx(l,o):l,[d,u,f]=ox(ex(c/(o-1)),t[s*n+a]),x=a>0?e[s*n+a-1]:l,m=s>0?e[(s-1)*n+a]:l,g=x!==l||m!==l?.5:1;return`rgb(${Math.round(d*g)}, ${Math.round(u*g)}, ${Math.round(f*g)})`}function ax(e,t){const{bounds:n}=e,o=qe(t,e),r=t.scaleX(n.x0),s=t.scaleX(n.x1),a=o(n.y0),l=o(n.y1),c=Math.abs(s-r)/Rt,d=Math.abs(l-a)/Rt;return!(c>0)||!(d>0)?null:{left:Math.min(r,s),top:Math.min(a,l),cellW:c,cellH:d,flipRows:a<l}}function ix(e,t){const{size:n,values:o}=e;if(!t||n<2||o.length<n*n)return null;const{left:r,top:s,cellW:a,cellH:l,flipRows:c}=t;let d=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;for(let j=0;j<n*n;j++){const A=o[j];if(!Number.isFinite(A))return null;A<d&&(d=A),A>u&&(u=A)}const f=u-d,x=e.bandMetres!=null&&e.bandMetres>0?e.bandMetres:null,m=e.veil,g=Math.max(2,e.bands??Jg),v=Rt,y=new Int16Array(v*v),E=new Uint8Array(v*v),S=m!=null&&m.length>=n*n;for(let j=0;j<v;j++)for(let A=0;A<v;A++){const _=A/(v-1)*(n-1),C=j/(v-1)*(n-1);S&&(E[j*v+A]=m[Math.round(C)*n+Math.round(_)]??0);const $=Ki(o,n,_,C);if(x!=null){y[j*v+A]=Math.floor($/x);continue}const I=f>0?($-d)/f:.5;y[j*v+A]=Math.max(0,Math.min(g-1,Math.floor(I*g)))}const R=[];for(let j=0;j<v;j++){const A=c?j:v-1-j;let _=0,C="";for(let $=0;$<=v;$++){const I=$<v?sx(y,E,v,g,x!=null,j,$):"";if($===0){C=I;continue}I===C&&$<v||(R.push(i.jsx("rect",{x:r+_*a,y:s+A*l,width:($-_)*a+.5,height:l+.5,fill:C},`${j}-${_}`)),_=$,C=I)}}return R}function lx({layer:e,frame:t}){const n=ax(e,t),{values:o,size:r,veil:s,bandMetres:a,bands:l}=e,{left:c,top:d,cellW:u,cellH:f,flipRows:x}=n??{},m=p.useMemo(()=>ix(e,n),[o,r,s,a,l,c,d,u,f,x]);return m?i.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:Ge(e),"aria-hidden":"true",children:m}):null}function cx({layer:e,frame:t}){const n=p.useId(),o=qe(t,e),r=d=>({x:t.scaleX(d.x),y:o(d.y)}),s=e.boundary.map(r);if(s.length<2)return null;const a=e.side==="between"?[...s,...(e.boundaryHigh??[]).map(r).reverse()]:Ji(s,e.side,t);if(e.side==="between"&&!e.boundaryHigh)return null;const l=e.side==="right"?t.plotX1-4:e.side==="left"?t.plotX0+11:s[s.length-1].x,c=(t.plotY0+t.plotY1)/2;return i.jsxs(i.Fragment,{children:[e.hatched&&i.jsx("defs",{children:i.jsx("pattern",{id:n,width:vo,height:vo,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:i.jsx("line",{x1:0,y1:0,x2:0,y2:vo,stroke:ot(e),strokeWidth:1,strokeOpacity:e.opacity??Xg})})}),i.jsx("polygon",{"data-plot-layer":e.id,"data-plot-layer-kind":"region","data-hatched":e.hatched?"":void 0,points:a.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:e.hatched?`url(#${n})`:ot(e),fillOpacity:e.hatched?void 0:e.opacity??Ug}),t.labels&&e.label&&i.jsx("text",{x:l,y:c,transform:`rotate(-90 ${l} ${c})`,textAnchor:"middle",fontSize:Bg,letterSpacing:"0.14em",fill:"var(--color-text-muted)",stroke:"var(--color-surface-raised)",...Jt,children:e.label})]})}function dx({layer:e,frame:t}){const n=qe(t,e),o=e.points.map(s=>({x:t.scaleX(s.x),y:n(s.y)}));if(o.length===0)return null;const r=Fg*(e.weight??1);if(e.style==="scatter"){const s=e.radius===void 0?r:Math.abs(t.scaleX(e.radius)-t.scaleX(0));return i.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",fill:ot(e),opacity:Ge(e),children:o.map((a,l)=>i.jsx("circle",{cx:a.x,cy:a.y,r:s},l))})}return i.jsx("path",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",d:e.style==="step"?Kg(o):Vg(o),fill:"none",stroke:ot(e),strokeOpacity:Ge(e),strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:e.dashed?"5 3.5":void 0})}function ux({layer:e,frame:t}){const n=qe(t,e),o=e.dashed??!0,r=ot(e),s=e.along==="y",a=s?n(e.value):t.scaleX(e.value);return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"rule",x1:s?t.plotX0:a,x2:s?t.plotX1:a,y1:s?a:t.plotY0,y2:s?a:t.plotY1,stroke:r,strokeOpacity:Ge(e),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),t.labels&&e.label&&i.jsx("text",{x:s?t.plotX1-4:a+3,y:s?a-3:t.plotY0+10,textAnchor:s?"end":"start",fill:rn(e),fontSize:Tt,children:e.label})]})}function hx({layer:e,frame:t,placed:n}){const o=qe(t,e),r=t.scaleX(e.at.x),s=o(e.at.y),a=e.across??"x",l=ot(e),c=t.labels&&e.label?qg(n,{anchorX:r,anchorY:s,gap:Wt+3,text:e.label,frame:t}):null;return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"annotation",x1:a==="x"?r-Wt:r,x2:a==="x"?r+Wt:r,y1:a==="x"?s:s-Wt,y2:a==="x"?s:s+Wt,stroke:l,strokeOpacity:Ge(e),strokeWidth:1.75,strokeLinecap:"round"}),c&&e.label&&i.jsx("text",{x:c.x,y:c.y,textAnchor:c.anchor,fontSize:Tt,letterSpacing:"0.05em",fill:rn(e),fillOpacity:Ge(e),children:e.label})]})}function fx({layer:e,frame:t}){const n=qe(t,e),o=t.scaleX(e.at.x),r=n(e.at.y)+(e.offsetPx??0),s=Dg*(e.scale??1),a=ot(e),l=e.shape??"dot",c={"data-plot-layer":e.id,"data-plot-layer-kind":"marker",opacity:Ge(e)},d=l==="none"?null:l==="vessel"?i.jsx("g",{...c,children:i.jsx(ag,{state:e.markState??"current",x:o,y:r,r:s*zg,keyline:!0})}):l==="dot"?i.jsx("circle",{...c,cx:o,cy:r,r:s,fill:a,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):l==="ring"?i.jsx("circle",{...c,cx:o,cy:r,r:s,fill:"none",stroke:a,strokeWidth:1.5}):l==="cross"?i.jsx("path",{...c,d:`M${o-s},${r} L${o+s},${r} M${o},${r-s} L${o},${r+s}`,stroke:a,strokeWidth:1.5,strokeLinecap:"round"}):l==="chevron-up"||l==="chevron-down"?i.jsx("polyline",{...c,points:l==="chevron-up"?`${o-s},${r+s*.5} ${o},${r-s*.5} ${o+s},${r+s*.5}`:`${o-s},${r-s*.5} ${o},${r+s*.5} ${o+s},${r-s*.5}`,fill:"none",stroke:a,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null,u=(e.label?.length??0)*mr/2+3,f=l==="none"?Math.min(Math.max(o,t.plotX0+u),t.plotX1-u):o+s+3,x=l==="none"?Math.min(Math.max(r+3,t.plotY0+Tt+3),t.plotY1-4):r+3;return i.jsxs(i.Fragment,{children:[d,t.labels&&e.label&&i.jsx("text",{x:f,y:x,textAnchor:l==="none"?"middle":void 0,fontSize:Tt,fill:rn(e),fillOpacity:Ge(e),stroke:"var(--color-surface-raised)",...Jt,children:e.label})]})}function px({layer:e,frame:t,row:n,edges:o}){const r=e.caption?2:1;if(e.anchor==="left-edge"||e.anchor==="right-edge"){const g=e.anchor==="left-edge"?t.plotX0+Ut+n*Qe:t.plotX1-Ut-n*Qe,v=t.plotY1-34;return i.jsx("text",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",x:g,y:v,transform:`rotate(-90 ${g} ${v})`,fontSize:Tt,letterSpacing:"0.14em",fill:rn(e),fillOpacity:Ge(e),stroke:"var(--color-surface-raised)",...Jt,children:e.text})}const s=e.anchor.startsWith("top"),a=e.anchor.endsWith("right"),l=g=>Ut+(g?Wg:0),c=a?t.plotX1-l(o.right):t.plotX0+l(o.left),d=n*(r*Qe+2),u=s?t.plotY0+Ut+go+d:t.plotY1-Ut-d,f=u-Qe,x=Math.max(e.text.length*Hg,(e.caption?.length??0)*mr)+2*xo,m=(s?u:u-(e.caption?Qe:0))-go-1;return i.jsxs("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",textAnchor:a?"end":"start",children:[i.jsx("rect",{x:a?c-x+xo:c-xo,y:m,width:x,height:r*Qe+1,rx:3,fill:"var(--color-surface-raised)",fillOpacity:.8}),e.caption&&i.jsx("text",{x:c,y:s?u:f,fontSize:Tt,letterSpacing:"0.05em",fill:"var(--color-text-faint)",stroke:"var(--color-surface-raised)",...Jt,children:e.caption}),i.jsx("text",{x:c,y:e.caption&&s?u+Qe:u,fontSize:go,fontWeight:700,fill:rn(e),fillOpacity:Ge(e),stroke:"var(--color-surface-raised)",...Jt,children:e.text})]})}const Ds={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},mx={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function bo({layers:e,frame:t,pass:n}){const o=e.map((l,c)=>({layer:l,index:c})).filter(({layer:l})=>mx[l.kind]===n).sort((l,c)=>Ds[l.layer.kind]-Ds[c.layer.kind]||(l.layer.z??0)-(c.layer.z??0)||l.index-c.index),r=new Map,s=[],a={left:e.some(l=>l.kind==="caption"&&l.anchor==="left-edge"||l.kind==="region"&&l.side==="left"&&!!l.label),right:e.some(l=>l.kind==="caption"&&l.anchor==="right-edge"||l.kind==="region"&&l.side==="right"&&!!l.label)};return i.jsx(i.Fragment,{children:o.map(({layer:l,index:c})=>{const d=`${l.id}-${c}`;switch(l.kind){case"relief":return i.jsx(lx,{layer:l,frame:t},d);case"water":return i.jsx(Og,{layer:l,frame:t},d);case"field":return i.jsx(Qg,{layer:l,frame:t},d);case"region":return i.jsx(cx,{layer:l,frame:t},d);case"series":return i.jsx(dx,{layer:l,frame:t},d);case"rule":return i.jsx(ux,{layer:l,frame:t},d);case"annotation":return i.jsx(hx,{layer:l,frame:t,placed:s},d);case"marker":return i.jsx(fx,{layer:l,frame:t},d);case"caption":{const u=r.get(l.anchor)??0;return r.set(l.anchor,u+1),i.jsx(px,{layer:l,frame:t,row:u,edges:a},d)}default:return null}})})}function gx(e){return e.map(t=>t.description).filter(t=>typeof t=="string"&&t.length>0)}const zs=11,wn=3,kn=4,Hs=(e,t)=>e.x0<t.x1&&t.x0<e.x1&&e.y0<t.y1&&t.y0<e.y1;function xx(e,t,n,o,r){let s=0,a=1;const l=n-e,c=o-t,d=[[-l,e-r.x0],[l,r.x1-e],[-c,t-r.y0],[c,r.y1-t]];for(const[u,f]of d){if(u===0&&f<0)return!1;if(u!==0){const x=f/u;u<0?s=Math.max(s,x):a=Math.min(a,x)}}return s<=a}function vx(e,t){for(let n=1;n<e.cx.length;n++){const o=[e.cx[n-1],e.cy[n-1],e.cx[n],e.cy[n]];if(o.every(Number.isFinite)&&xx(o[0],o[1],o[2],o[3],t))return!0}return!1}function bx({labels:e,plot:t,obstacles:n,traces:o}){const r=[],s=new Map;for(const a of e){const l={y0:a.lineY-wn-zs,y1:a.lineY-wn},c={y0:a.lineY+wn,y1:a.lineY+wn+zs},d={x0:t.x1-kn-a.width,x1:t.x1-kn},u={x0:t.x0+kn,x1:t.x0+kn+a.width},f=[{...d,...l,anchor:"end"},{...d,...c,anchor:"end"},{...u,...l,anchor:"start"},{...u,...c,anchor:"start"}];let x=null;for(const m of f){if(!(m.x0>=t.x0&&m.x1<=t.x1&&m.y0>=t.y0&&m.y1<=t.y1)||r.some(y=>Hs(m,y)))continue;const v=2*n.filter(y=>Hs(m,y)).length+o.filter(y=>vx(y,m)).length;(x===null||v<x.cost)&&(x={spot:m,cost:v})}if(x===null){s.set(a.id,null);continue}r.push(x.spot),s.set(a.id,{x:x.spot.anchor==="end"?x.spot.x1:x.spot.x0,y:x.spot.y1-2,anchor:x.spot.anchor})}return s}function yx(e,t,n,o="linear"){const r=n&&_x(t,n)?0:t;if(n&&o==="log")return Me(We(e,r),{decimals:Lo(e,r).decimals});if(!n)return Me(We(e,r),{decimals:0});const s=wx(e,n)?e:void 0;return Me(We(e,r),{decimals:Sx(e,r,n,s),...s?{format:s}:{}})}function wx(e,t){const n=t.map(o=>Me(We(e,o),{decimals:En}));return n.some((o,r)=>r>0&&o===n[r-1])}function kx(e,t){const n=new Set(t.map(o=>yx(e,o,t).replace(/^[\d.,\s-]+/,"")));return n.size===1?[...n][0]:void 0}function $x(e,t,n){const o=kx(t,n);if(o===void 0)return e;const r=Gl({magnitude:0,unit:t},{format:t}).symbol,s=` (${r})`;return r!==""&&e.endsWith(s)?`${e.slice(0,-s.length)} (${o})`:e}function _x(e,t){const n=t.length>1?Math.abs(t[1]-t[0]):0;return n>0&&Math.abs(e)<n*1e-6}const En=3;function el(e){return{figure:Number.parseFloat(e.replace(/[^\d.-]/g,"")),unit:e.replace(/[\d.,\s-]/g,"")}}function Lo(e,t,n){const o=s=>el(Me(We(e,t),{decimals:s,...n?{format:n}:{}})),r=o(En);for(let s=0;s<En;s++)if(o(s).figure===r.figure)return{decimals:s,unit:r.unit};return{decimals:En,unit:r.unit}}function Sx(e,t,n,o){const r=Lo(e,t,o);let s=r.decimals;for(const a of n){const l=Lo(e,a,o);l.unit===r.unit&&(s=Math.max(s,l.decimals))}return s}function Q1(e){const t=el(Me(e,{decimals:3})),n=Math.abs(t.figure),o=Number.isFinite(n)&&n>0?Math.max(0,2-Math.floor(Math.log10(n))):0;return Me(e,{decimals:o})}function yo(e,t,n){for(let o=n;o<6;o++){const r=e.map(s=>(s/t).toFixed(o));if(r.every((s,a)=>a===0||s!==r[a-1]))return o}return 6}const Mx=4,$n=2,jx=2.5;function Ex(e,t){if(e.length===0)return!1;const n=e[e.length-1]-t;return n===0?!0:e.length===1?!1:Math.sign(e[0]-t)!==Math.sign(n)}function Ax(e,t){return e==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:t?e==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const Rx=(e,t)=>Wi(e-t[0],t[1]-t[0]),J1=(e,t)=>Wi((e-t[0])*1e3,(t[1]-t[0])*1e3),wo={top:10,bottom:28,left:50};function tl(e,t,n){const o=(s,a,l)=>Math.max(s,Math.min(l,a)),r=o(30,Math.round(e*.18),wo.left);return{top:wo.top,right:n?r:o(14,Math.round(e*.07),20),bottom:t<150?20:wo.bottom,left:r}}const Bs=e=>e.length*6.5+6,Tx=4,Cx=.4,Ix=26,dt=14,Lx=160,ze=16,_n=4,Px=6,Xt=(e,t)=>Math.min(e.length*6+8,t);function Ox(e,t){const n=[];let o=0,r=0;for(const s of e)r>0&&r+s>t&&(o+=1,r=0),n.push({row:o,x:r}),r+=s+Px;return{rows:e.length===0?0:o+1,positions:n}}const Ws=4,Nx=.03;function ko(e,t){const n=Math.max(0,Math.floor(t/6));if(e.length<=n)return e;const o=e.lastIndexOf(" (");if(o>0&&e.length-o+4<=n){const r=n-(e.length-o)-3;return`${e.slice(0,r)}...${e.slice(o)}`}return n<4?"":`${e.slice(0,n-3)}...`}function Us(e,t){const n=e.split(/(?=M)/).filter(r=>r.length>0),o=[];for(const r of n){const s=[...r.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)];if(s.length<2)continue;const a=s[0],l=s[s.length-1];o.push(`${r.trim()} L${l[1]},${t} L${a[1]},${t} Z`)}return o.length>0?o.join(" "):null}function Fx(e,t,n,o,r=1){const s=[],a=Ix*Math.max(.5,Math.min(2,r));for(let l=e+a/2;l<t;l+=a)for(let c=n+a/2;c<o;c+=a)s.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return s}const Dx=120,zx=90,Hx=70,Bx=35,Wx=2,Ux=12,Xs=8,Xx=2,Je=14,Dn=6,zn=12,Gx=16,Yx=12,qx=200,Gs=10,Vx=.2,Ys=.6,qs="5 3",Kx=.15,Zx=.45,Qx="the value is inside the shaded region";function Jx(e){const t=[...e.data.y];(e.type??"line")==="band"&&e.data.y2&&t.push(...e.data.y2);for(const n of e.data.reckoned??[])n.bandLo&&n.bandHi&&t.push(...n.bandLo,...n.bandHi);for(const n of e.data.bridges??[])t.push(...n.v);return t.filter(Number.isFinite)}const ev=1e-5,tv=1e-9;function nv({series:e,thresholds:t,yTickFormat:n}){const o=s=>s*Dn,r=[];for(const s of e)r.push(o(s.label.length)+8);for(const s of t){if(s.kind==="marker"&&!s.label)continue;const a=s.label??n(s.value);r.push(o(a.length)+zn+8)}return Math.max(0,...r)+Ux}function ov({width:e,height:t,hasSecondary:n,series:o,thresholds:r}){const s=r.filter(u=>u.label);if(o.length===0||s.length===0)return!1;const a=Math.max(...o.map(u=>u.label.length*6+8)),l=Math.max(...s.map(u=>(u.label?.length??0)*Dn+zn)),c=tl(e,t,n),d=e-c.left-c.right-dt-Gx;return a+l+Yx>d}function eb({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:r=Rx,yTickFormat:s=rv,yScalePrimary:a="linear",yScaleSecondary:l="linear",thresholds:c,legend:d="overlay",hideXAxis:u=!1,density:f="chart",spatial:x=!1,gridScale:m=1,layers:g,"aria-label":v,crosshair:y=!1,xKind:E="time",xReadFormat:S,xAxisLabel:R,yAxisLabel:j,ySecondaryAxisLabel:A,yTickUnit:_,card:C,cardForms:$=1,plotNotice:I,width:D,height:G}){const N=p.useId(),P=f==="compact",q=P?"none":d,Y=x,ne=Y||P,se=y&&!ne&&e.some(h=>h.data.x.length>0),[M,U]=p.useState(null),[ee,fe]=p.useState(!1),[_e,pe]=p.useState(""),[me,Z]=p.useState(null),[ve,ke]=p.useState(null),ye=ve?.w===D&&ve.h===G?ve.form:0,[Le,ge]=p.useState(null),V=C!=null,ae=Le?.form===ye?Le:null;p.useLayoutEffect(()=>{if(!me){ge(null);return}const h=()=>ge(k=>{const L={w:me.offsetWidth,h:me.offsetHeight,form:ye};return k?.w===L.w&&k?.h===L.h&&k?.form===L.form?k:L});h();const b=new ResizeObserver(h);return b.observe(me),()=>b.disconnect()},[me,ye]);const W=D,Q=G,be=e.filter(h=>h.axis==="primary"&&h.data.x.length>0),je=e.filter(h=>h.axis==="secondary"&&h.data.x.length>0),we=je.length>0,rt=q!=="none"&&e.length>0||(c??[]).some(h=>h.label),le=nv({series:e,thresholds:c??[],yTickFormat:s}),ce=V&&ae!==null&&ae.w+Xs<=Math.max(112,Math.ceil(le)),st=ne||!rt?{placement:"overlay"}:zm({width:W,height:Q,contentWidth:le,legendHeight:q==="none"?0:e.length*ze+6,cardHeight:ce&&ae!==null?ae.h:0}),Fe=st.placement==="overlay"&&!ne&&q!=="none"&&Q>=qx&&ov({width:W,height:Q,hasSecondary:we,series:e,thresholds:c??[]})?{placement:"below"}:st,$e=q!=="none"&&(Fe.placement==="below"||Fe.placement==="beside"&&Fe.legendBelow),pt=$e?Ox(e.map(h=>Xt(h.label,W-2*_n)),W-2*_n):{rows:0,positions:[]},Qn=pt.rows===0?0:pt.rows*ze+4,gr=W>=Lx,xr=!ne&&!u&&!!R,vr=!ne&&gr&&!!j,br=!ne&&gr&&we&&!!A,cn=Y?0:1,yr=ne?{top:cn,right:cn,bottom:cn,left:cn}:tl(W,Q,we),mt={...yr,bottom:yr.bottom+(xr?dt:0)+Qn},J=mt.top,oe=Q-mt.bottom,Ue=oe-J,dn=p.useMemo(()=>{const h={primary:[],secondary:[]};for(const b of g??[]){const k=Yg(b);h[k.axis].push(...k.ys)}return h},[g]),gt=p.useMemo(()=>Vs(be,n,a,dn.primary),[be,n,a,dn]),xt=p.useMemo(()=>Vs(je,o,l,dn.secondary),[je,o,l,dn]),Ee=a==="log"?js(gt[0],gt[1],oe,J):fo(gt[0],gt[1],oe,J),Ae=l==="log"?js(xt[0],xt[1],oe,J):fo(xt[0],xt[1],oe,J),wr=Math.max(2,Math.min(7,Math.round(Ue/Bx))),Jn=(h,b,k,L)=>{const O=Math.min(h,b),z=Math.max(h,b),T=(z-O)*1e-6||1e-6,X=re=>re>=O-T&&re<=z+T,te=re=>L==="log"?rg(O,z,re):Io(O,z,re);for(let re=k;re<=64;re*=2){const Pe=te(re).filter(X);if(Pe.length<2)continue;if(Pe.length<=k)return Pe;const Dt=(Pe.length-1)/(k-1),fn=Array.from({length:k},(iv,yl)=>Pe[Math.round(yl*Dt)]);return Array.from(new Set(fn))}return[O,z]},It=Jn(gt[0],gt[1],wr,a==="log"?"log":"linear"),un=we?Jn(xt[0],xt[1],wr,l==="log"?"log":"linear"):[],kr=(h,b)=>h.length===0?b:Math.max(b,Math.min(Math.round(W*Cx),Math.max(...h.map(k=>Bs(s(k,h))))+Tx)),eo=ne?mt:{left:kr(It,mt.left)+(vr?dt:0),right:(we?kr(un,mt.right):mt.right)+(br?dt:0)},K=eo.left,to=Fe.placement==="beside"?Fe.columnWidth:0,he=W-eo.right-to,Re=he-K,$r=W-to-dt/2,at=Re>=Dx&&Ue>=zx,ie=to>0?{x0:he+(we?eo.right:0)+Xs,y0:J,x1:W-Xx,y1:oe}:void 0,_r=q==="none"||ie||$e?[]:e.map((h,b)=>({x0:K+3,y0:J+6+b*ze,x1:K+3+Xt(h.label,Re-6),y1:J+6+b*ze+13})),de=fo(t[0],t[1],K,he),nl=Math.max(2,Math.min(8,Math.round(Re/Hx))),Lt=Jn(t[0],t[1],nl,"linear"),ol=p.useMemo(()=>{const h=[],b=Lt.length-1;if(b<0)return h;const k=Bs,L=6,O=T=>{const X=Lt[T],te=r(X,t,Lt),re=de(X),Pe=k(te),Dt=T===0?"start":T===b?"end":"middle",fn=Dt==="start"?re:Dt==="end"?re-Pe:re-Pe/2;return{x:re,text:te,anchor:Dt,leftEdge:fn,rightEdge:fn+Pe}},z=O(0);if(h.push({x:z.x,text:z.text,anchor:z.anchor}),b>=1){const T=O(b);if(T.leftEdge>=z.rightEdge+L){let X=z.rightEdge;for(let te=1;te<b;te++){const re=O(te);re.leftEdge>=X+L&&re.rightEdge<=T.leftEdge-L&&(h.push({x:re.x,text:re.text,anchor:re.anchor}),X=re.rightEdge)}h.push({x:T.x,text:T.text,anchor:T.anchor})}}return h},[Lt,t,de,r]),Sr=(h,b)=>{const k=new Set,L=h.length;if(L===0||(k.add(0),L===1))return k;const O=16,z=b(h[0]),T=b(h[L-1]);if(Math.abs(T-z)>=O){let X=z;for(let te=1;te<L-1;te++){const re=b(h[te]);Math.abs(re-X)>=O&&Math.abs(T-re)>=O&&(k.add(te),X=re)}k.add(L-1)}return k},rl=Sr(It,Ee),sl=Sr(un,Ae),Ve=p.useMemo(()=>e.filter(h=>h.data.x.length>0).map(h=>{const b=h.axis==="primary"?Ee:Ae,k=h.type??"line";if(k==="band")return h.data.y2?{id:h.id,kind:"band",color:h.color,opacity:h.fillOpacity??Vx,d:Xi(h.data.x,h.data.y,h.data.y2,de,b)}:{id:h.id,kind:"noop"};if(k==="scatter"){const T=h.data.x.map((X,te)=>({cx:de(X),cy:b(h.data.y[te])}));return{id:h.id,kind:"scatter",color:h.color,points:T}}const L=k==="step"?tg:Ms,O=(h.data.bridges??[]).filter(T=>eg(h.data.x,h.data.y,T,de,b)),z=[...new Set([...h.data.breaks??[],...O.map(T=>T.to)])].sort((T,X)=>T-X);return{id:h.id,kind:"stroked",color:h.color,dashed:h.dashed??!1,uncertainty:og(h.data.x,h.data.reckoned??[],de,b),segments:ng(h.data.x,h.data.y,de,b,L,z,h.data.spans,h.data.reckoned),modelled:O.map(T=>({basis:T.basis,d:Ms([h.data.x[T.to-1],...T.t,h.data.x[T.to]],[h.data.y[T.to-1],...T.v,h.data.y[T.to]],de,b)})),tail:h.data.x.length>0&&(h.data.reckoned??[]).some(T=>T.to>=h.data.x.length-1)?{cx:de(h.data.x[h.data.x.length-1]),cy:b(h.data.y[h.data.y.length-1])}:null,observed:[...new Set(O.flatMap(T=>[T.to-1,T.to]))].map(T=>({cx:de(h.data.x[T]),cy:b(h.data.y[T])}))}}),[e,de,Ee,Ae]),it=p.useMemo(()=>c?c.map(h=>{const b=h.axis??"primary",k=e.filter(O=>O.axis===b&&O.type!=="band"&&!O.dashed),L=h.kind==="limit"?k.some(O=>{const z=O.data.y.filter(T=>Number.isFinite(T));return z.length>0&&Bi(z[z.length-1],h.value,h.bad)}):h.kind==="target"&&k.some(O=>Ex(O.data.y,h.value));return{id:h.id,label:h.label,spokenLabel:h.spokenLabel,value:h.value,kind:h.kind,passed:L,currency:Wn(h.reading,{drawsReckoning:!0}),tone:Ax(h.kind,L),dashed:h.kind!=="marker",y:b==="primary"?Ee(h.value):Ae(h.value)}}):[],[c,e,Ee,Ae]),Pt=p.useMemo(()=>{const h=(b,k,L)=>Math.max(b,Math.min(L,k));return(c??[]).flatMap(b=>{if(b.kind!=="limit"||!Number.isFinite(b.value))return[];const k=b.axis??"primary",L=k==="primary"?Ee:Ae,O=L(b.value),z=b.bad==="above"?-1:1,T=b.label||`the limit at ${s(b.value)}`;return e.filter(X=>X.axis===k&&X.data.x.length>0&&(X.type??"line")!=="band"&&!X.dashed).flatMap(X=>Qm({y:X.data.y,cx:X.data.x.map(de),cy:X.data.y.map(L),limit:b.value,limitY:O,bad:b.bad,breaks:X.data.breaks,step:X.type==="step"||X.type==="scatter",minGapPx:Je}).slice(at?0:-1).map(te=>{const re=s(X.data.y[te.index]),Pe=r(X.data.x[te.index],t);return{key:`${b.id}-${X.id}-${te.index}`,color:X.color,x:h(K+Je/2+1,te.x-Gs*(te.entered?1:-1),he-Je/2-1),y:h(J+Je/2+1,te.y+z*Gs,oe-Je/2-1),text:te.entered?te.spells>1?`${X.label} went past ${T} ${te.spells} times from ${Pe}, first reading ${re}`:`${X.label} went past ${T} at ${Pe}, reading ${re}`:`${X.label} was already past ${T} when this window began at ${Pe}, reading ${re}`}}))})},[c,e,de,Ee,Ae,r,s,t,K,he,J,oe,at]),Se=(()=>{if(!V||ae===null||ne)return;if(ie&&ce){const O={x0:ie.x0,y0:oe-ae.h,x1:ie.x0+ae.w,y1:oe},z=J+(q==="none"||$e?0:e.length*ze+6);return O.x1<=ie.x1&&O.y0>=z?O:void 0}const h=Je/2,b=[...e.filter(O=>(O.type??"line")!=="band").flatMap(O=>{const z=O.axis==="primary"?Ee:Ae,T=O.data.x.map(de),X=O.data.y.map(z);return O.type==="scatter"?T.map((te,re)=>({cx:[te],cy:[X[re]]})):[{cx:T,cy:X}]}),...it.map(O=>({cx:[K,he],cy:[O.y,O.y]}))],k=[...Pt.map(O=>({x0:O.x-h,y0:O.y-h,x1:O.x+h,y1:O.y+h})),...q==="none"||ie||$e?[]:e.map((O,z)=>({x0:K+3,y0:J+6+z*16,x1:K+3+Math.min(O.label.length*6+8,Re-6),y1:J+6+z*16+13}))],L=Xm({plot:{x0:K,y0:J,x1:he,y1:oe},card:{width:ae.w,height:ae.h},traces:b,obstacles:k});return L?{x0:L.x,y0:L.y,x1:L.x+ae.w,y1:L.y+ae.h}:void 0})(),vt=p.useMemo(()=>{if(!at)return new Map;const h=Je/2;return bx({labels:it.filter(b=>b.label).map(b=>({id:b.id,width:(b.label?.length??0)*Dn+(b.currency.held?zn:0),lineY:b.y})),plot:ie??{x0:K,y0:J,x1:he,y1:oe},obstacles:[...Se?[Se]:[],...Pt.map(b=>({x0:b.x-h,y0:b.y-h,x1:b.x+h,y1:b.y+h})),...q==="none"||$e?[]:e.map((b,k)=>({x0:ie?ie.x0:K+3,y0:J+6+k*ze,x1:(ie?ie.x0:K+3)+Xt(b.label,ie?ie.x1-ie.x0:Re-6),y1:J+6+k*ze+13}))],traces:(ie?[]:e).filter(b=>(b.type??"line")!=="band").map(b=>({cx:b.data.x.map(de),cy:b.data.y.map(b.axis==="primary"?Ee:Ae)}))})},[at,Se,ie,it,Pt,q,$e,e,de,Ee,Ae,K,he,J,oe,Re]),al=(()=>{const h=J+6;if(q==="none"||$e||e.length===0)return h;const b=ie?ie.x0:K+3,k=b+Math.max(...e.map(z=>Xt(z.label,ie?ie.x1-ie.x0:Re-6))),L=it.flatMap(z=>{const T=vt.get(z.id);if(!z.label||!T)return[];const X=z.label.length*Dn+(z.currency.held?zn:0),te=T.anchor==="end"?T.x-X:T.x;return[{x0:te,y0:T.y-9,x1:te+X,y1:T.y+2}]});Se&&L.push(Se);const O=e.length*ze-3;for(let z=h;z+O<=oe;z+=ze){const T={x0:b,y0:z,x1:k,y1:z+O};if(!L.some(X=>T.x0<X.x1&&X.x0<T.x1&&T.y0<X.y1&&X.y0<T.y1))return z}return h})(),il=e.flatMap(h=>{const b=Ve.find(T=>T.id===h.id),k=b?.kind==="stroked"?b.modelled.map(T=>T.basis):[],L=h.data.reckoned??[];if(L.length===0&&k.length===0)return[];const z=[...new Set([...L.map(T=>T.basis),...k])].map(T=>`${h.label}: part of this trace is reckoned, ${Bm(T)}, not measured`);return L.some(T=>T.bandLo&&T.bandHi)&&z.push(`${h.label}: ${Qx}`),z}),ll=it.flatMap(h=>{const b=h.spokenLabel??h.label??h.id,k=[];return h.passed&&h.kind==="limit"&&k.push(`${b}: limit passed`),h.passed&&h.kind==="target"&&k.push(`${b}: target reached`),h.currency.held&&k.push(ei(b,h.currency.caption)),h.label&&!vt.get(h.id)&&k.length===0&&k.push(h.spokenLabel??h.label),k}),no=[...il,...ll],cl=[v??"Telemetry line chart",...gx(g??[]),...no].join("; "),oo=p.useMemo(()=>e.filter(h=>h.data.x.length>0).map(h=>E==="value"?qm(h):h),[e,E]),ro=p.useMemo(()=>se?Km(oo):[],[se,oo]),Ot=Math.min(t[0],t[1]),Nt=Math.max(t[0],t[1]),dl=E==="value"?(Nt-Ot)*Nx:void 0;function Mr(h){const b=oo.map(k=>{const L=Vm(k,h,dl),O=k.format??s,z=k.axis==="primary"?Ee:Ae,T=(k.type??"line")==="band";return L===null?{id:k.id,label:k.label,color:k.color,value:null}:{id:k.id,label:k.label,color:k.color,value:T&&L.y2!==void 0?`${O(L.y)} to ${O(L.y2)}`:O(L.y),currency:L.currency==="measured"?void 0:L.currency,modelled:L.currency==="modelled",y:T?void 0:z(L.y)}});if(at)for(const k of it)k.kind!=="marker"&&b.push({id:`threshold-${k.id}`,label:k.kind,color:k.tone.label,value:k.label??s(k.value),detail:!0,currency:k.currency.held?k.currency.mark==="modelled"?"modelled":"held":void 0,modelled:k.currency.held&&k.currency.mark==="modelled"});return{heading:(S??r)(h,t),rows:b}}function jr(h){const{heading:b,rows:k}=Mr(h);return[b,...k.map(L=>`${L.label} ${L.value??"no sample"}${L.currency?`, ${L.currency}`:""}`)].join("; ")}const Er=e.filter(h=>(h.type??"line")!=="band").map(h=>({cx:h.data.x.map(de),cy:h.data.y.map(h.axis==="primary"?Ee:Ae)})),Ar=Se?[...Er,Gm(Se)]:Er,Rr=V&&!ne&&ae!==null&&ae.w>0&&ae.h>0&&!Se&&ye<$-1;p.useLayoutEffect(()=>{Rr&&ke({w:D,h:G,form:ye+1})},[Rr,D,G,ye]);const ul=h=>{let b=h,k=Number.POSITIVE_INFINITY;for(const L of ro)L<Ot||L>Nt||Math.abs(L-h)<k&&(k=Math.abs(L-h),b=L);return b},lt=se&&M!==null&&M.at>=Ot&&M.at<=Nt?ul(M.at):null,bt=lt===null?null:Mr(lt),Ft=bt!==null&&lt!==null?Tm({x:de(lt),plot:{x0:K,y0:J,x1:he,y1:oe},heading:bt.heading,rows:bt.rows,avoid:_r,traces:Ar}):void 0,hl=Se!==void 0&&Ft!==void 0&&Ft.x0<Se.x1&&Ft.x1>Se.x0&&Ft.y0<Se.y1&&Ft.y1>Se.y0;function fl(h){const b=h.currentTarget.getBoundingClientRect(),k=h.clientX-b.left;return k<K||k>he?null:t[0]+(k-K)/(he-K)*(t[1]-t[0])}function pl(h){const b=fl(h);if(b===null){U(k=>k?.source==="pointer"?null:k);return}U({at:b,source:"pointer"})}function ml(h){const b=ro.filter(z=>z>=Ot&&z<=Nt),k={ArrowLeft:h.shiftKey?-10:-1,ArrowRight:h.shiftKey?10:1,Home:-b.length,End:b.length};if(h.key==="Escape"){if(M===null)return;h.preventDefault(),U(null),pe("");return}const L=k[h.key];if(L===void 0)return;h.preventDefault();const O=Ss(b,lt,L);O!==null&&(U({at:O,source:"keys"}),pe(jr(O)))}function gl(h){try{fe(h.currentTarget.matches(":focus-visible"))}catch{fe(!0)}if(M!==null)return;const b=Ss(ro.filter(k=>k>=Ot&&k<=Nt),null,0);b!==null&&(U({at:b,source:"keys"}),pe(jr(b)))}function xl(){fe(!1),U(h=>h?.source==="keys"?null:h),pe("")}const vl=se?{tabIndex:0,onPointerMove:pl,onPointerLeave:()=>U(h=>h?.source==="pointer"?null:h),onKeyDown:ml,onFocus:gl,onBlur:xl}:{},hn={scaleX:de,scaleYPrimary:Ee,scaleYSecondary:Ae,plotX0:K,plotX1:he,plotY0:J,plotY1:oe,uid:N,labels:at},bl=Y&&g?Zg(g,hn):()=>!1,so=`plot-layer-clip-${N}`,Tr=`plot-trace-clip-${N}`;if(Re<=0||Ue<=0)return i.jsx("svg",{width:Math.max(0,W),height:Math.max(0,Q),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:i.jsx("title",{children:"Chart too small to render"})});const Cr=i.jsxs("svg",{width:W,height:Q,role:Pt.length>0||se?"group":"img","aria-label":cl,"aria-describedby":se?`${N}-crosshair-hint`:void 0,...vl,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...se?{touchAction:"pan-y",outline:ee?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[i.jsxs("defs",{children:[i.jsx("clipPath",{id:so,children:i.jsx("rect",{x:K,y:J,width:Re,height:Ue})}),i.jsx("clipPath",{id:Tr,children:i.jsx("rect",{x:K-$n,y:J-$n,width:Re+2*$n,height:Ue+2*$n})})]}),no.length>0&&i.jsx("title",{children:no.join("; ")}),i.jsx("rect",{x:K,y:J,width:Re,height:Ue,fill:"var(--color-surface-panel)"}),g&&g.length>0&&i.jsx("g",{clipPath:`url(#${so})`,children:i.jsx(bo,{layers:g,frame:hn,pass:"background"})}),!ne&&It.map((h,b)=>{const k=Ee(h);return i.jsxs(pn.Fragment,{children:[i.jsx("line",{x1:K,y1:k,x2:he,y2:k,stroke:"var(--color-border-subtle)",strokeWidth:1}),rl.has(b)&&i.jsx("text",{x:K-4,y:k,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(h,It)})]},`py-${b}`)}),!ne&&un.map((h,b)=>sl.has(b)?i.jsx("text",{x:he+4,y:Ae(h),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(h,un)},`sy-${b}`):null),!u&&!ne&&Lt.map((h,b)=>i.jsx("line",{x1:de(h),y1:J,x2:de(h),y2:oe,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${b}`)),!u&&!ne&&ol.map((h,b)=>i.jsx("text",{x:h.x,y:oe+14,textAnchor:h.anchor,fill:"var(--color-text-faint)",fontSize:11,children:h.text},`xl-${b}`)),xr&&i.jsx("text",{x:(K+he)/2,y:Q-Qn-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:ko(R,Re)}),vr&&i.jsx("text",{x:dt/2,y:(J+oe)/2,transform:`rotate(-90 ${dt/2} ${(J+oe)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:ko(_&&a!=="log"?$x(j,_,It):j,Ue)}),br&&i.jsx("text",{x:$r,y:(J+oe)/2,transform:`rotate(90 ${$r} ${(J+oe)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:ko(A,Ue)}),Y&&Fx(K,he,J,oe,m).filter(h=>!bl(h.x,h.y)).map(h=>i.jsx("circle",{cx:h.x,cy:h.y,r:1,fill:"var(--color-text-faint)",opacity:.35},h.key)),!ne&&i.jsxs(i.Fragment,{children:[i.jsx("line",{x1:K,y1:J,x2:K,y2:oe,stroke:"var(--color-border-strong)",strokeWidth:1}),i.jsx("line",{x1:K,y1:oe,x2:he,y2:oe,stroke:"var(--color-border-strong)",strokeWidth:1}),we&&i.jsx("line",{x1:he,y1:J,x2:he,y2:oe,stroke:"var(--color-border-strong)",strokeWidth:1})]}),i.jsxs("g",{clipPath:`url(#${Tr})`,children:[Ve.filter(h=>h.kind==="band").map(h=>i.jsx("path",{d:h.d,fill:h.color,fillOpacity:h.opacity,stroke:"none"},h.id)),Ve.filter(h=>h.kind==="stroked").flatMap(h=>h.uncertainty.map((b,k)=>i.jsx("path",{d:b.d,"data-band-kind":b.kind,fill:h.color,fillOpacity:Kx,stroke:b.kind==="bound"?h.color:"none",strokeOpacity:b.kind==="bound"?Zx:void 0,strokeWidth:b.kind==="bound"?1:void 0},`${h.id}-band-${k}`))),Ve.filter(h=>h.kind==="stroked").flatMap(h=>h.segments.map((b,k)=>i.jsxs(pn.Fragment,{children:[P&&b.basis===void 0&&Us(b.d,oe)&&i.jsx("path",{d:Us(b.d,oe)??void 0,fill:h.color,fillOpacity:.12,stroke:"none"}),i.jsx("path",{d:b.d,"data-stream-status":b.status,"data-reckoning-basis":b.basis,stroke:h.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:b.basis!==void 0?Ys:void 0,strokeDasharray:b.basis!==void 0?qs:h.dashed?"4 3":void 0})]},`${h.id}-${k}`))),Ve.filter(h=>h.kind==="stroked").flatMap(h=>h.modelled.map((b,k)=>i.jsx("path",{d:b.d,"data-reckoning-basis":b.basis,stroke:h.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:Ys,strokeDasharray:qs},`${h.id}-modelled-${k}`))),Ve.map(h=>h.kind==="stroked"&&h.tail!==null?i.jsx(zi,{kind:"modelled",x:h.tail.cx,y:h.tail.cy},`${h.id}-tail`):null),Ve.filter(h=>h.kind==="stroked").flatMap(h=>h.observed.map((b,k)=>i.jsx("circle",{cx:b.cx,cy:b.cy,r:jx,fill:h.color,"data-observed-sample":""},`${h.id}-observed-${k}`))),Ve.filter(h=>h.kind==="scatter").flatMap(h=>h.points.map((b,k)=>i.jsx("circle",{cx:b.cx,cy:b.cy,r:Wx,fill:h.color},`${h.id}-${k}`)))]}),e.map(h=>{if(!h.headMark)return null;const b=h.axis==="primary"?Ee:Ae;let k=h.data.x.length-1;for(;k>=0&&!(Number.isFinite(h.data.x[k])&&Number.isFinite(h.data.y[k]));)k-=1;return k<0?null:i.jsx("circle",{cx:de(h.data.x[k]),cy:b(h.data.y[k]),r:Mx,fill:h.headMark==="dot"?h.color:"var(--color-surface-panel)",stroke:h.color,strokeWidth:h.headMark==="dot"?0:1.5,"data-head-mark":h.headMark},`${h.id}-head`)}),g&&g.length>0&&i.jsx("g",{clipPath:`url(#${so})`,children:i.jsx(bo,{layers:g,frame:hn,pass:"foreground"})}),it.map(h=>i.jsxs(pn.Fragment,{children:[i.jsx("line",{x1:K,y1:h.y,x2:P&&h.kind==="marker"?K+24:he,y2:h.y,stroke:h.tone.line,strokeWidth:1,strokeDasharray:h.dashed?"4 3":void 0,"data-threshold-kind":h.kind,"data-threshold-passed":h.passed||void 0}),P&&h.kind==="marker"&&h.label&&i.jsx("text",{x:K+28,y:h.y+3.5,fill:h.tone.label,fontSize:10,children:h.label}),!(P&&h.kind==="marker")&&h.label&&vt.get(h.id)&&i.jsxs("text",{x:vt.get(h.id)?.x,y:vt.get(h.id)?.y,textAnchor:vt.get(h.id)?.anchor,fill:h.tone.label,fontSize:10,children:[h.label,h.currency.held&&i.jsx(Ao,{size:10,kind:h.currency.mark??"held"})]})]},h.id)),Pt.map(h=>i.jsx(Zm,{x:h.x,y:h.y,size:Je,color:h.color,text:h.text},h.key)),q!=="none"&&e.map((h,b)=>{const k=$e?pt.positions[b]:void 0,L=k?Q-Qn+2+k.row*ze:al+b*ze;if(!$e&&L+13>oe)return null;const O=k?_n+k.x:ie?ie.x0:K+3,z=$e?W-2*_n:ie?ie.x1-ie.x0:Re-6,T=Xt(h.label,z),X=Math.max(1,Math.floor((T-8)/6)),te=h.label.length>X?`${h.label.slice(0,Math.max(1,X-1))}...`:h.label;return i.jsxs(pn.Fragment,{children:[i.jsx("rect",{x:O,y:L,width:T,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),i.jsx("text",{x:O+3,y:L+10,fill:h.color,fontSize:10,children:te})]},h.id)}),g&&g.length>0&&at&&i.jsx(bo,{layers:g,frame:hn,pass:"caption"}),bt!==null&&lt!==null&&i.jsx(Cm,{x:de(lt),plot:{x0:K,y0:J,x1:he,y1:oe},heading:bt.heading,rows:bt.rows,avoid:_r,traces:Ar})]}),Ir=V?i.jsx("div",{ref:Z,"data-plot-card":"",style:{position:"absolute",left:Se?.x0??0,top:Se?.y0??0,visibility:Se&&!hl?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof C=="function"?C({width:Re-Ws*2,height:Ue-Ws*2,form:ye}):C}):null,Lr=I?i.jsx("div",{"data-plot-notice":"",style:{position:"absolute",left:K,top:J,width:Re,height:Ue,pointerEvents:"none"},children:I}):null;return se?i.jsxs(i.Fragment,{children:[Cr,Ir,Lr,i.jsx(nt,{id:`${N}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),i.jsx(nt,{role:"status","aria-live":"polite",children:_e})]}):i.jsxs(i.Fragment,{children:[Cr,Ir,Lr]})}function Vs(e,t,n,o=[]){if(t)return t;if(e.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let r=[...e.flatMap(Jx),...o.filter(Number.isFinite)];if(n==="log"&&(r=r.filter(c=>c>0)),r.length===0)return n==="log"?[1,10]:[0,1];let s=r[0],a=r[0];for(const c of r)c<s&&(s=c),c>a&&(a=c);const l=Math.max(Math.max(Math.abs(s),Math.abs(a))*ev,tv);if((n==="linear"||n===void 0)&&a>s&&a-s<l){const c=(s+a)/2;return[c-l,c+l]}return[s,a]}function rv(e,t){if(e===0)return"0";const n=Math.abs(e);if(n>=1e6){const o=t?yo(t,1e6,1):1;return`${(e/1e6).toFixed(o)}M`}if(n>=1e3){const o=t?yo(t,1e3,1):1;return`${(e/1e3).toFixed(o)}k`}if(Number.isInteger(e))return String(e);if(n<.01){const o=Math.floor(Math.log10(n)),r=e/10**o;return Math.abs(r-1)<1e-9?`1e${o}`:`${r.toFixed(1)}e${o}`}return e.toFixed(t?yo(t,1,2):2)}const sv=p.createContext(null);function av(e,t){const n=p.useContext(sv),o=n?.setFooter,r=n?.setDirty;p.useEffect(()=>(o?.(e),()=>o?.(null)),[o,e]),p.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function tb(e){const{onSave:t,value:n,saved:o,saveLabel:r="Save",extra:s,disabled:a}=e,l=p.useRef(null);l.current===null&&(l.current={v:n});const c=!St(n,l.current.v)&&!St(n,o),d=p.useRef(t);d.current=t;const u=p.useMemo(()=>i.jsxs(i.Fragment,{children:[s,i.jsx(fh,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:a,children:r})]}),[s,a,r]);av(u,c)}export{nt as $,s1 as A,In as B,Vv as C,Uv as D,wv as E,mh as F,Ev as G,m1 as H,ph as I,Av as J,Jv as K,Fv as L,Zv as M,qv as N,Qv as O,Y1 as P,Yv as Q,c1 as R,d1 as S,zv as T,Li as U,E1 as V,Dv as W,zu as X,e1 as Y,$1 as Z,A1 as _,i1 as a,yp as a$,St as a0,yv as a1,Yg as a2,Un as a3,av as a4,tb as a5,J1 as a6,ft as a7,yc as a8,$v as a9,zp as aA,q1 as aB,Hv as aC,Eo as aD,x1 as aE,v1 as aF,Tv as aG,Ph as aH,Cv as aI,Ao as aJ,b1 as aK,y1 as aL,w1 as aM,Iv as aN,Ov as aO,U1 as aP,Cm as aQ,ue as aR,xc as aS,Ra as aT,zi as aU,rh as aV,h1 as aW,u1 as aX,vc as aY,Bo as aZ,ri as a_,sv as aa,$i as ab,es as ac,Wn as ad,Na as ae,bc as af,Ce as ag,Ko as ah,Sv as ai,ht as aj,va as ak,gc as al,nf as am,l1 as an,P1 as ao,o1 as ap,Cf as aq,is as ar,wt as as,Xv as at,Jf as au,Jo as av,kv as aw,G1 as ax,B1 as ay,jv as az,a1 as b,k1 as b$,Ea as b0,Pv as b1,O1 as b2,Ne as b3,ag as b4,Ro as b5,At as b6,sr as b7,ii as b8,zo as b9,ei as bA,Fa as bB,Ba as bC,oc as bD,Bn as bE,Do as bF,X1 as bG,H1 as bH,ki as bI,p0 as bJ,an as bK,Xf as bL,Wf as bM,Qo as bN,C1 as bO,eb as bP,Q1 as bQ,yx as bR,L1 as bS,F1 as bT,Of as bU,wf as bV,Yu as bW,Ju as bX,Sh as bY,Vr as bZ,sn as b_,lc as ba,Ho as bb,dc as bc,jt as bd,li as be,ci as bf,Jl as bg,$h as bh,ia as bi,T1 as bj,Zo as bk,R1 as bl,kh as bm,V1 as bn,ys as bo,lg as bp,Z1 as bq,W1 as br,zm as bs,I1 as bt,Tm as bu,K1 as bv,la as bw,Yn as bx,Bm as by,z1 as bz,Nv as c,_v as c0,N1 as c1,ts as c2,ui as c3,Mv as c4,D1 as c5,Lv as d,fh as e,n1 as f,r1 as g,t1 as h,Du as i,_1 as j,Gv as k,M1 as l,gh as m,S1 as n,xp as o,j1 as p,jp as q,g1 as r,p1 as s,Bv as t,Wv as u,f1 as v,Kv as w,Rv as x,xh as y,Hu as z};
