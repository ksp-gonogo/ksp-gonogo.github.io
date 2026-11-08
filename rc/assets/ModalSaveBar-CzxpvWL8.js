import{j as i}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import w,{css as F,createGlobalStyle as wl,keyframes as Po}from"./ext-styled-components-DAuodqsN.js";import{r as p,R as fn}from"./ext-react-C0MU9AHG.js";import{h as Ks,l as kl}from"./logger-2_QM1wvD.js";import{cg as dt,aK as pn,ck as Zs,b5 as Pr,cE as Yt,cJ as En,aW as He,b0 as Qs,l as $l}from"./view-clock-formula-CTXEe_iu.js";import{aV as _l}from"./ksp-enum-names-C2emOl4S.js";import{c as _n,t as Sl,d as Js,M as Ml,G as jl}from"./screen-xSNIXJyh.js";import{a1 as El,a2 as Al,U as Se,i as $o,h as ea,g as me,j as Le,r as Tt,a3 as Oo,N as An,a4 as Rl,k as Tl,K as No,a5 as Fo,a6 as Cl,a7 as Il,a8 as Ll,a9 as ta,aa as Pl,x as Or,ab as Ol,ac as Nl,ad as Fl,ae as Dl,af as zl,Z as St,B as Hl,e as na,_ as Bl,T as Qt,H as oa,ag as Wl,S as ra,ah as sa,O as Nr,A as gn,f as Fr,ai as Dr,s as so,aj as Ul,ak as Xl,u as Gl}from"./contributionsRead-CM3j96VZ.js";import{gridToPixels as Yl}from"./ext-ui-kit-grid-CYQFMmYG.js";import{r as ql}from"./ext-react-dom-DCF8ZnaJ.js";import"./lagrange-ZMxIvHjf.js";import{R as Vl}from"./use-transmissions-CvR7tw53.js";const bv={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function yv({children:e,layout:t="inline",...n}){return i.jsx(Zl,{$layout:t,...n,children:e})}const Kl={inline:F``,fill:F`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},Zl=w.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>Kl[e]}
`;function Ql(){const e=Al();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const zn=El(Ql),wv=zn.Context;function kv({children:e}){return i.jsx(zn.Provider,{children:i.jsx(Jl,{children:e})})}function Jl({children:e}){const t=zn.useStore();return i.jsx(Vl.Provider,{value:t,children:e})}const Do=zn.useStore,ec=()=>()=>{},tc=[],zr=()=>tc;function nc(){const e=Do();return p.useSyncExternalStore(e?e.subscribe:ec,e?e.getActiveHandles:zr,e?e.getActiveHandles:zr)}const Ut=new WeakMap,_o=new WeakMap;function Hr(e){for(const t of _o.get(e)??[])t()}function oc(e){return Ut.set(e,(Ut.get(e)??0)+1),Hr(e),()=>{Ut.set(e,(Ut.get(e)??1)-1),Hr(e)}}function aa(){const e=Do();return p.useSyncExternalStore(t=>{if(!e)return()=>{};const n=_o.get(e)??new Set;return _o.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(Ut.get(e)??0)>0,()=>!1)}const ao=e=>Se(e),Ve={contact:{"in-contact":()=>"In contact","loss-in":e=>`LOS in ${ao(e)}`,"back-in":e=>`No contact, back in ${ao(e)}`,none:e=>e==="unpowered"?"No contact, no electric charge aboard":"No contact"},delay:{held:e=>`${ao(e)} signal delay`,absent:()=>"no signal path"},arrival:{expected:"Expected to arrive","likely-lost":"Likely lost"},sends:{now:()=>"Sends now",held:(e,t)=>t===void 0?`Held until ${Se(e)}`:`Held until ${Se(e)}, arrives ${Se(t)}`}};function ia(e){const{contact:t}=e,n=t.kind==="loss-in"||t.kind==="back-in"?Ve.contact[t.kind](t.seconds):t.kind==="none"?Ve.contact.none(t.reason):Ve.contact[t.kind](),o=e.signalDelay===void 0?Ve.delay.absent():Ve.delay.held(e.signalDelay),r=e.sends==="now"&&e.arrival==="expected"?Ve.sends.now():e.sends==="held"&&e.heldUntilUt!==void 0?Ve.sends.held(e.heldUntilUt,e.arrivesUt):Ve.arrival[e.arrival];return`${n} · ${o}
${r}`}function la(e){if(e!==void 0)return e.arrival==="likely-lost"?"at-risk":e.sends==="held"?"held":void 0}function Ke(e,t){return Se({magnitude:e,unit:t})}function rc(e,t){const{limit:n,actual:o,unit:r}=t;if(n==null||o==null)return null;switch(e){case pn.LimitReached:{const s=sc(t.quantity),a=`${Ke(o,r)} of ${Ke(n,r)}`;return t.facilityName?`the ${t.facilityName} holds ${a} ${s}`:`it holds ${a} ${s}`}case pn.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${Ke(o,r)} of ${Ke(n,r)}`;case pn.InsufficientFunds:return`it costs ${Ke(Math.trunc(o),r)} and funds are ${Ke(Math.trunc(n),r)}`;case pn.InsufficientScience:return`it costs ${Ke(o,r)} and science is ${Ke(n,r)}`;default:return null}}function sc(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function Br(e){return e&&Zs(e)?.sentence||null}function ac(e){const t=e?.trim().replace(/\.$/,"");return t||null}function Mt(e){return ca(e,"refused")}function ic(e){return ca(e,"unavailable")}function ca(e,t){const n=dt(e),o=(e.breach?rc(e.errorCode,e.breach):null)??ac(e.detail)??Br(e.reason)??Br(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function zo(e){const n=dt(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":lc(Mt({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function lc(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function Ho(e){return`${dt(e)||e.command||"The command"}: no reply. May have run.`}function cc(e){const t=e.inFlight.filter(n=>n.predictedPhase==="overdue"||n.predictedPhase==="lost");return{unconfirmed:t,hasUnconfirmed:t.length>0||(e.losses?.length??0)>0,hasFailure:(e.undelivered?.length??0)>0||(e.failures?.length??0)>0,dismiss:e.dismiss??(()=>{})}}function dc(e,t){const n=e===void 0||e.phase==="in-flight"||e.phase==="idle"?null:e.requestId,o=r=>(r.dispatchedAt??0)+(r.oneWaySeconds??0);return t.filter(r=>r.id!==n&&(r.predictedPhase==="awaiting-reply"||r.predictedPhase==="due")).sort((r,s)=>o(r)-o(s))}function da(e,t,n,o){let r=e,s=!1;for(const a of dc(t,n)){if(a.args===void 0){typeof r=="boolean"&&(r=!r,s=!0);continue}const l=So(a.args),c=l!==void 0?l:o?.(r,a.args);c!==void 0&&(s=!0,r=c)}return s?r:void 0}function uc(e,t,n,o=void 0,r){return e?"sent":n.some(s=>s.held===!0)?"held":da(o,t,n,r)===void 0?null:"modelled"}function hc(e,t,n,o=[],r){return t!=="modelled"?e:da(e,n,o,r)??e}function fc(e,t){return e===void 0||e.phase==="idle"?!1:e.phase==="in-flight"?!0:e.phase!=="confirmed"&&e.phase!=="found"?!1:t.some(n=>n.id===e.requestId)}function So(e){if(e===null||typeof e!="object")return;const t="state"in e?e.state:"enabled"in e?e.enabled:void 0;return typeof t=="boolean"?t:void 0}function ua(e,t){switch(t){case"held":return`${e} held until contact returns`;case"sent":return`${e} sent, not yet received`;case"modelled":return`${e} shown as predicted: the command should have reached the craft, and its reply is on its way back`;default:return null}}function pc(e,t,n){if(t!=="held"&&t!=="modelled")return n;const o=ua(e,t)??"";return{kind:t,caption:n===null?o:`${n.caption}. ${o}`}}function Wr(e){try{return JSON.stringify(e)??""}catch{return null}}const Bo="Not connected to the mod. Nothing can be sent",gc=4e3,mc=8e3,xc=500,jt="SENT",ha="Refused",fa="No reply",pa="Found";function ga(e,t){return e.gateFor?e.gateFor(t):e.gate}function Hn({command:e,toggle:t,unavailable:n}){const o=e.handle,r=e.members?void 0:_n(e),s=e.options.label,[a,l]=p.useState("idle"),[c,d]=p.useState(null),[u,f]=p.useState(null),[x,g]=p.useState(!1),[m,v]=p.useState(0),[y,E]=p.useState(!1),S=p.useRef(null),R=o.streamDown===!0,j=ga(o,r),A=t?.unavailable??n??null,_=j?.blocked===!0||A!==null,C=p.useRef(!0),$=p.useRef(0);p.useEffect(()=>(C.current=!0,()=>{C.current=!1}),[]);const I=o.founds,D=p.useRef(null),G=p.useRef(I?.length??0);p.useEffect(()=>{const Z=I?.length??0,xe=Z>G.current;G.current=Z;const de=I?.[Z-1],ie=D.current;if(!xe||!de||ie===null)return;const X=de.label!==void 0&&de.label!==""&&ie.label!==void 0&&de.label!==ie.label,te=de.args!==void 0&&ie.args!==void 0&&JSON.stringify(de.args)!==JSON.stringify(ie.args);X||te||(D.current=null,f(de),d(null),l("found"))},[I]),p.useEffect(()=>{if(a!=="armed")return;const Z=setTimeout(()=>l("idle"),gc);return()=>clearTimeout(Z)},[a]),p.useEffect(()=>{if(a!=="refused"&&a!=="lost"&&a!=="found")return;const Z=setTimeout(()=>{l("idle"),d(null),D.current=null,f(null)},mc);return()=>clearTimeout(Z)},[a]),p.useEffect(()=>{if(m===0)return;const Z=setTimeout(()=>g(!1),xc);return()=>clearTimeout(Z)},[m]);const N=p.useCallback((Z=e)=>{const xe=Z.members?void 0:_n(Z),de=Z.options.label,ie=$.current+1;$.current=ie,D.current=null,S.current=null,l("idle"),d(null),g(!0),v(Q=>Q+1),E(!0);const X=(Q,ve)=>{!C.current||$.current!==ie||(d(ve),l(Q),E(!1),Q!=="idle"&&g(!1))},te=Q=>({errorCode:Q.errorCode,reason:Q.reason,command:Q.command,args:Q.args,label:Q.label??de,breach:Q.breach,detail:Q.detail}),ke=Z.options;let Ce;if(Z.members){const Q=Z.members.map(ve=>({...ve,options:{...ve.options,onRejected:ot=>{ve.options.onRejected?.(ot);const Be=Pr(ot);Be.kind==="refused"&&ve.options.onRefused?.(Mt({...te(Be),label:Be.label??ve.options.label}))}}}));Ce=Sl(Q,Z.set??{}).then(ve=>ve.failed>0?Promise.reject(ve.firstError):void 0)}else ke.before?.(xe),Ce=Z.handle.dangerouslySendWithoutInput(xe,de?{label:de}:void 0);Ce.then(Q=>{X("idle",null),ke.onConfirmed?.(Q)},Q=>{const ve=Pr(Q);if(Z.members||(ke.onRejected?.(Q),ve.kind==="refused"&&ke.onRefused?.(Mt(te(ve)))),ve.kind==="lost"){D.current={args:xe,label:de},X("lost",null);return}if(ve.kind!=="refused"){X("idle",null);return}X("refused",te(ve))})},[e]),{hasUnconfirmed:P,hasFailure:q}=cc(o),Y=o.status,oe=y&&Y?.phase==="in-flight"&&Y.accepted!==!0&&(S.current===null||S.current===Y.requestId),ae=x||oe;p.useEffect(()=>{y&&S.current===null&&Y?.phase==="in-flight"&&(S.current=Y.requestId)},[y,Y]);const M=t?o.inFlight.filter(t.rows??(()=>!0)):[],W=t?uc(ae,Y,M,t.state,t.modelled):null,ee=t?hc(t.state,W,Y,M,t.modelled):void 0,ue=p.useRef(void 0),Oe=p.useRef(void 0),he=(fc(Y,o.inFlight)||Y?.phase==="confirmed"&&ue.current!==void 0&&t?.state===Oe.current)&&ue.current!==void 0?ue.current:ee,V=p.useRef(he);V.current=he;const we=p.useCallback(Z=>{if(!R&&!_){if(t){const xe=t.args(V.current);if(xe===void 0)return;ue.current=So(xe),Oe.current=t.state,ue.current!==void 0&&(V.current=ue.current),N({...e,args:xe});return}if(a==="refused"||a==="lost"||a==="found"){d(null),f(null),D.current=null,l("idle");return}if(Z){if(ae)return;if(a!=="armed"){ye.current=Wr(r),l("armed");return}}N()}},[a,ae,R,_,N,r,t,e]),ye=p.useRef(null);p.useEffect(()=>{a==="armed"&&Wr(r)!==ye.current&&l("idle")},[a,r]);const le=a==="refused"||a==="lost"||a==="found"?a:ae?"sent":_?"blocked":a;return{phase:le,isSent:le==="sent",isArmed:le==="armed",isRefused:le==="refused",isLost:le==="lost",isFound:le==="found",isBlocked:le==="blocked",isOffline:R&&le!=="sent",isUnavailable:A!==null,command:e,refusalText:c?Mt(c):A!==null?A:le==="blocked"&&j?ic({...j,label:j.label??s,args:j.args??r}):null,foundText:u?zo(u):null,lossText:le==="lost"?Ho({args:r,label:s}):null,pressWith:Z=>{R||(ue.current=So(_n(Z)),N(Z))},toggleView:t?{shown:ee,on:typeof ee=="number"?ee>0:ee===!0,word:W==="sent"?t.sentWord??jt:t.word(ee),reserve:[...t.words,t.sentWord??jt],confirmation:W,unavailable:A,marking:pc(t.name,W,t.marking??null),sentence:ua(t.name,W)}:null,hasUnconfirmed:P,hasFailure:q,press:we}}function vc({command:e,unavailable:t}){const n=Hn({command:{kind:"bound",handle:e.handle,args:void 0,options:e.options},unavailable:t}),o=xa(n),r=n.isBlocked||n.isUnavailable||n.isOffline||t!=null;return ma(n,r,o,s=>{if(r)return;const a=e.toArgs(s);a!==void 0&&n.pressWith(Js(e.handle,a,e.options))},t??null)}function $v({command:e,unavailable:t}){const n=Hn({command:e,unavailable:t}),o=xa(n),r=n.isBlocked||n.isUnavailable||n.isOffline||t!=null;return ma(n,r,o,()=>{r||n.press(!1)},t??null)}function ma(e,t,n,o,r){const s=e.command.handle,a=e.isBlocked&&!e.isUnavailable,l=e.isSent?jt:e.isRefused?ha:e.isLost?fa:e.isFound?pa:null,c=s.sendStatus,d=c===void 0?void 0:ia(c),u=e.foundText??e.refusalText??(e.isLost?e.lossText:null),f=u??(e.isSent?"Sent, not yet received":e.isOffline?Bo:r??d);return{control:e,send:o,word:l,tip:f??void 0,inert:t,edge:{"data-command-edge":a?"blocked":e.isLost||e.isRefused||e.hasUnconfirmed||e.hasFailure?"warn":void 0,"data-command-phase":e.phase,"data-stream":e.isOffline?"down":void 0,"data-predicted":a?void 0:la(c),"aria-disabled":t?!0:void 0},announce:n?null:u??(e.isSent?"Sent, not yet received":null)}}function xa(e){return aa()&&e.command.handle.railed===!0}const _v="10ch",va=F`
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
`,Sv=F`
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
`,ut=F`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,on=F`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,tt=w.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function ht({children:e,"aria-label":t,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:r=!1,as:s="span",className:a}){const c={role:n?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":t,className:a,"data-live-region":""};return n?i.jsx(tt,{as:s,...c,children:e}):p.createElement(s,c,e)}const bc="data-restoring-focus",yc=120,wc=48,kc=120,Ur=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function rn(e){return ba(e,"below")}function ba(e,t){const[n,o]=p.useState(null),[r,s]=p.useState(!1),[a,l]=p.useState(!1),[c,d]=p.useState(!1),[u,f]=p.useState(!1),[x,g]=p.useState(!1),m=p.useRef(null),v=p.useRef(null),y=p.useRef(!1),E=p.useRef(!1),S=p.useRef(null),R=e!=null&&e!==""?e:null,j=n!==null&&(r||a||c||u||x),A=p.useCallback(()=>{S.current!==null&&clearTimeout(S.current),S.current=null},[]),_=p.useCallback(()=>{A(),o(null),s(!1),l(!1),d(!1),f(!1),g(!1),y.current=!1},[A]);p.useEffect(()=>{if(!u)return;const I=()=>{const G=document.getSelection(),N=G!==null&&!G.isCollapsed&&v.current?.contains(G.anchorNode)===!0;!y.current&&!N&&f(!1)},D=()=>{y.current=!1,I()};return document.addEventListener("pointerup",D),document.addEventListener("selectionchange",I),()=>{document.removeEventListener("pointerup",D),document.removeEventListener("selectionchange",I)}},[u]),p.useEffect(()=>{if(!x)return;const I=D=>{const G=D.target;G instanceof Node&&(m.current?.contains(G)||v.current?.contains(G)||_())};return document.addEventListener("pointerdown",I,!0),()=>document.removeEventListener("pointerdown",I,!0)},[x,_]);const C=p.useCallback(()=>{A(),S.current=setTimeout(()=>{S.current=null,s(!1),d(!1)},kc)},[A]);if(p.useEffect(()=>A,[A]),p.useEffect(()=>{if(n!==null)return window.addEventListener("scroll",_,!0),window.addEventListener("resize",_),()=>{window.removeEventListener("scroll",_,!0),window.removeEventListener("resize",_)}},[n,_]),p.useEffect(()=>{if(!j||R===null)return;const I=D=>{D.key==="Escape"&&(D.stopPropagation(),_())};return document.addEventListener("keydown",I,!0),()=>document.removeEventListener("keydown",I,!0)},[j,R,_]),R===null)return{anchor:{},tip:null};const $=I=>{const D=I.getBoundingClientRect();o({top:D.bottom,left:D.left,above:t==="above"?D.top>=wc:window.innerHeight-D.bottom<yc,anchorTop:D.top})};return{anchor:{"data-tooltip":R,onPointerEnter:I=>{I.pointerType!=="touch"&&(A(),$(I.currentTarget),s(!0))},onPointerLeave:C,onPointerDown:I=>{E.current=!0,I.pointerType!=="touch"&&_()},onPointerUp:I=>{if(E.current=!1,I.pointerType==="touch"){if(x){_();return}m.current=I.currentTarget,$(I.currentTarget),g(!0)}},onFocus:I=>{E.current||document.documentElement.hasAttribute(bc)||($(I.currentTarget),l(!0))},onBlur:()=>{l(!1),!r&&!c&&!x&&o(null)}},tip:j?ql.createPortal(i.jsx($c,{ref:v,at:n,text:R,onPress:()=>{y.current=!0,f(!0)},onPointerEnter:()=>{A(),d(!0)},onPointerLeave:C}),document.body):null}}const $c=p.forwardRef(function({at:t,text:n,onPress:o,onPointerEnter:r,onPointerLeave:s},a){const l=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return i.jsx(Sc,{ref:a,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),o()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...l,left:t.left,"--tip-left":`${t.left}px`},children:n})});function bt(e,t){return(...n)=>{typeof e=="function"&&e(...n),t?.(...n)}}function Re({text:e,children:t,focusable:n=!1,announce:o=!0,placement:r="below"}){const{anchor:s,tip:a}=ba(e,r);if(e==null||e==="")return i.jsx(i.Fragment,{children:t});const l=t.props,c=l["aria-label"],d=!o||typeof c=="string"&&Ur(c).includes(Ur(e));return i.jsxs(i.Fragment,{children:[p.cloneElement(t,{"data-tooltip":e,onPointerEnter:bt(l.onPointerEnter,s.onPointerEnter),onPointerLeave:bt(l.onPointerLeave,s.onPointerLeave),onPointerDown:bt(l.onPointerDown,s.onPointerDown),onPointerUp:bt(l.onPointerUp,s.onPointerUp),onFocus:bt(l.onFocus,s.onFocus),onBlur:bt(l.onBlur,s.onBlur),"aria-description":d?l["aria-description"]:e,tabIndex:n?l.tabIndex??0:l.tabIndex}),a,n&&i.jsx(_c,{})]})}const _c=wl`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Sc=w.div`
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
`;function Mc(e){return e==="neutral"?"go":e}const Wo=e=>F`
  background: ${$o[e]};
  border-color: ${$o[e]};
  color: ${ea[e]};
`,jc=e=>F`
  border-color: ${me[e]};
  color: ${Le[e]};
`,Xr={default:F`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:F`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},Ec=F`
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
`,Ac=F`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function Rc(e,t){return e==="text"?Ec:e==="primary"?Wo(t):t==="neutral"?Xr[e]:F`
    ${Xr[e]}
    ${jc(t)}
  `}const Tc=F`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,Cc={sm:F`
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

  ${({$size:e})=>Cc[e]}
  ${({$variant:e,$tone:t})=>Rc(e,t)}
  ${({$pressed:e,$tone:t})=>e?Wo(Mc(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":Tc}
  ${ut}
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

  ${({$variant:e})=>e==="text"?Ac:""}
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
  ${ut}
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
`;function wa(e){let t="";return p.Children.forEach(e,n=>{if(typeof n=="string"||typeof n=="number"){t+=String(n);return}p.isValidElement(n)&&(t+=wa(n.props.children))}),t.replace(/\s+/g," ").trim()}function ka({label:e,children:t,disabledReason:n}){return Ic({label:e,children:t,disabledReason:n})}function Ic({label:e,children:t,disabledReason:n}){const o=e!==void 0&&e!==""&&e!==wa(t)?e:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function $a(e,t){return e===!0&&t!==void 0&&t!==""}function _a(e){e.preventDefault(),e.stopPropagation()}function Sa(e,t,n){return t===null||e.props["data-tooltip"]!==void 0?e:i.jsx(Re,{text:t,announce:n,children:e})}const Mv=p.forwardRef(function({label:t,icon:n,type:o,...r},s){return i.jsx("button",{ref:s,type:o??"button","aria-label":t,...r,children:i.jsx(Ma,{label:t,icon:n})})});function Ma({label:e,icon:t}){const n=p.useRef(null),o=p.useRef(null),[r,s]=p.useState(!0);return p.useLayoutEffect(()=>{const a=n.current,l=o.current;if(!a||!l)return;const c=()=>{s(l.scrollWidth<=a.clientWidth)};if(c(),typeof ResizeObserver>"u")return;const d=new ResizeObserver(c);return d.observe(a),d.observe(l),()=>d.disconnect()},[]),i.jsxs(Lc,{ref:n,children:[i.jsx(Pc,{ref:o,"aria-hidden":"true",children:e}),r?i.jsx(Oc,{"aria-hidden":"true",children:e}):i.jsx(Nc,{"aria-hidden":"true","data-fit-label-icon":"",children:t})]})}const Lc=w.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Shrinks to what the parent allows, so an overlong label is detected rather than overflowing its cell. */
  min-width: 0;
  width: 100%;
`,Pc=w.span`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  pointer-events: none;
  white-space: nowrap;
`,Oc=w.span`
  /* nowrap, so a label that does not fit overflows and the measurement stays honest. */
  white-space: nowrap;
`,Nc=w.span`
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
 */const Fc=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=e=>{const t=Dc(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var io={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Hc=p.createContext({}),Bc=()=>p.useContext(Hc),Wc=p.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:o,className:r="",children:s,iconNode:a,...l},c)=>{const{size:d=24,strokeWidth:u=2,absoluteStrokeWidth:f=!1,color:x="currentColor",className:g=""}=Bc()??{},m=o??f?Number(n??u)*24/Number(t??d):n??u;return p.createElement("svg",{ref:c,...io,width:t??d??io.width,height:t??d??io.height,stroke:e??x,strokeWidth:m,className:ja("lucide",g,r),...!s&&!zc(l)&&{"aria-hidden":"true"},...l},[...a.map(([v,y])=>p.createElement(v,y)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=(e,t)=>{const n=p.forwardRef(({className:o,...r},s)=>p.createElement(Wc,{ref:s,iconNode:t,className:ja(`lucide-${Fc(Gr(e))}`,`lucide-${e}`,o),...r}));return n.displayName=Gr(e),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Xc=H("arrow-down",Uc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Yc=H("arrow-left",Gc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Vc=H("arrow-right",qc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Zc=H("arrow-up-to-line",Kc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Jc=H("arrow-up",Qc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],td=H("bell",ed);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],od=H("check",nd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],sd=H("chevron-down",rd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],id=H("chevron-left",ad);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],cd=H("chevron-right",ld);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ud=H("chevron-up",dd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],fd=H("columns-2",hd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],gd=H("computer",pd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],xd=H("corner-down-left",md);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],bd=H("database",vd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],wd=H("file-text",yd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],$d=H("grip",kd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Sd=H("heart",_d);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],jd=H("history",Md);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Ad=H("house",Ed);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Td=H("info",Rd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],Id=H("joystick",Cd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Pd=H("layers",Ld);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Nd=H("lightbulb-off",Od);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Dd=H("lightbulb",Fd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Hd=H("lock",zd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Wd=H("maximize",Bd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Xd=H("menu",Ud);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],Yd=H("microscope",Gd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],Vd=H("minimize",qd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Zd=H("pause",Kd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Jd=H("pencil",Qd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],tu=H("play",eu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ou=H("plus",nu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],su=H("radio",ru);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],iu=H("rectangle-horizontal",au);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],cu=H("rectangle-vertical",lu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],uu=H("rotate-ccw",du);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],fu=H("rotate-cw",hu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],gu=H("rows-2",pu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]],xu=H("satellite-dish",mu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],bu=H("satellite",vu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],wu=H("settings",yu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],$u=H("square",ku);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Su=H("star",_u);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],ju=H("undo-2",Mu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Au=H("volume-2",Eu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Tu=H("volume-x",Ru);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Iu=H("wrench",Cu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Pu=H("x",Lu),Ou="var(--icon-size-control)",Nu={strokeWidth:1.8,"aria-hidden":!0};function B(e,t){const n=p.forwardRef(({label:o,size:r=Ou,style:s,...a},l)=>{const c=typeof r=="number"?{size:r,style:s}:{style:{width:r,height:r,...s}},d=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return i.jsx(e,{...Nu,...t,...d,...a,...c,ref:l})});return n.displayName=e.displayName??e.name,n}const jv=B($d),Ev=B(Id),Av=B(jd),Rv=B(Ad),Tv=B(Td),Cv=B(Hd),Iv=B(su),Lv=B(Au),Pv=B(Tu),Ov=B(td),Nv=B(Pd),Fv=B(wu),Dv=B(bu),zv=B(xu),Hv=B(Wd),Bv=B(Vd),Wv=B(bd),Uv=B(gd),Xv=B(wd),Gv=B(ou,{strokeWidth:2.4}),Fu=B(Pu),Yv=B(Jd),qv=B(od),Du=B(Su),Vv=B(Sd),Kv=B(Xd),zu=B(Yd),Zv=B(tu),Qv=B(Zd),Jv=B($u),e1=B(ud),t1=B(sd),n1=B(id),o1=B(cd),r1=B(Yc),s1=B(Jc),a1=B(Vc),i1=B(Xc),l1=B(Zc),c1=B(ju),d1=B(fu),u1=B(uu),h1=B(fd),f1=B(iu),p1=B(gu),g1=B(cu),Ea=B(xd),Hu=H("space-helmet",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M10.5 8h3a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 1 0-7z",key:"visor"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),Bu=H("space-helmet-visor-up",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M8 7.5C9.5 5 14.5 5 16 7.5",key:"visor"}],["circle",{cx:"12",cy:"12.5",r:"2",fill:"currentColor",key:"face"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),m1=B(Hu),x1=B(Bu),v1=B(Iu),b1=B(Dd),y1=B(Nd),Xo="max(0.075em, 1.25px)",pe={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},Mo=pe.held.domSize,jo=pe.modelled.domSize,Wu=F`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Mo} + 0.14em);
  }
`,Uu=F`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${jo} + 0.14em);
  }
`;function Xu(e){return F`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${pe[e].hollowDomSize} + 0.14em);
    }
  `}function Aa(e,t=!1){return t?Xu(e):e==="current"?null:e==="modelled"?Uu:Wu}const Gu=w.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Mo};
  height: ${Mo};
  background: ${pe.held.color};
`,Yu=w.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${jo};
  height: ${jo};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${pe.modelled.color};
`,Go=e=>F`
  position: absolute;
  right: 0;
  top: 0;
  width: ${pe[e].hollowDomSize};
  height: ${pe[e].hollowDomSize};
`,qu=w.span`
  ${Go("current")}
  border: ${Xo} solid ${pe.current.color};
  border-radius: var(--radius-circle);
`,Vu=w.span`
  ${Go("held")}
  border: ${Xo} solid ${pe.held.color};
`,Ku=w.span`
  ${Go("modelled")}
  --stroke: ${Xo};
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
`,Zu={current:qu,held:Vu,modelled:Ku};function Ra({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?Zu[e]:e==="modelled"?Yu:Gu;return i.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const Qu=w.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>Aa(e??"held",t)}
`;function Eo({caption:e,kind:t="held",elsewhere:n=!1,children:o,...r}){const{anchor:s,tip:a}=rn(e);return i.jsxs(Qu,{$kind:t,$elsewhere:n,...r,...s,children:[o,i.jsx(Ra,{kind:t,elsewhere:n}),e!==null&&i.jsxs(tt,{"data-unit-currency":"",children:[", ",e]}),a]})}const Ju=w(Eo)`
  position: static;

  &::after {
    content: none;
  }

  & > [data-held-mark] {
    top: 3px;
    right: 3px;
  }
`,Ta=p.forwardRef(function({variant:t="default",tone:n,size:o="md",pressed:r,predictedOutcome:s,disabledReason:a,marked:l,type:c="button",...d},u){const f=$a(d.disabled,a),x=ka({label:d["aria-label"],children:d.children,disabledReason:f?a:void 0}),{disabled:g,onClick:m,children:v,...y}=d;return Sa(i.jsx(ya,{ref:u,$variant:t,$tone:n??(t==="primary"?"go":"neutral"),$size:o,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,"data-held-button":l?"":void 0,...y,disabled:f?void 0:g,...f?{"aria-disabled":!0}:{},onClick:f?_a:m,type:c,children:l?i.jsx(Ju,{kind:l.kind,caption:l.caption,children:v}):v}),x,f)}),eh=w.span`
  display: inline-grid;
  justify-items: center;
`,th=w.span`
  grid-area: 1 / 1;
`,nh=w.span`
  grid-area: 1 / 1;
  visibility: hidden;

  &::before {
    content: attr(data-word);
  }
`;function oh({shown:e,reserve:t}){return i.jsxs(eh,{children:[[...new Set(t)].map(n=>i.jsx(nh,{"data-word":n,"aria-hidden":"true"},n)),i.jsx(th,{children:e})]})}function sn(e){return"press"in e&&typeof e.press=="function"}function rh(e){return"kind"in e?e:Js(e,void 0)}function sh(e){const{command:t,unavailable:n,...o}=e;return sn(t)?i.jsx(Yo,{...o,control:t}):i.jsx(Ca,{...o,command:t,unavailable:n})}function ah(e){const{command:t,unavailable:n,...o}=e;return sn(t)?i.jsx(Yo,{...o,glyph:!0,control:t}):i.jsx(Ca,{...o,glyph:!0,command:t,unavailable:n})}function Ca({command:e,unavailable:t,...n}){const o=Hn({command:rh(e),unavailable:t});return i.jsx(Yo,{...n,control:o})}function Yo({control:e,glyph:t=!1,children:n,confirmLabel:o,refusedLabel:r=ha,lostLabel:s=fa,foundLabel:a=pa,confirmAriaLabel:l,sentAriaLabel:c,blockedAriaLabel:d,pressed:u,variant:f="default",tone:x="neutral",icon:g,confirmIcon:m,onPressReady:v,size:y="md",confirmTone:E="go",tip:S,"aria-label":R,...j}){const{phase:A,isSent:_,isArmed:C,isRefused:$,isLost:I,isFound:D,isBlocked:G,isUnavailable:N,isOffline:P,refusalText:q,foundText:Y,lossText:oe,hasUnconfirmed:ae,hasFailure:M,press:W,command:ee}=e,ue=ee.handle,Oe=ee.members?void 0:_n(ee),be=ee.options.label,he=o!==void 0,V=be?`${be} sent, not yet received`:"Sent, not yet received";p.useEffect(()=>{if(v)return v(()=>W(he)),()=>v(null)},[v,W,he]);const ye=t?_?i.jsx(Ea,{"aria-hidden":"true"}):C?m??g??n:n:_?jt:$?r:I?s:D?a:C?o:n,le=g!==void 0&&typeof ye=="string",Z=le?i.jsx(Ma,{label:ye,icon:C?m??g:g}):ye,xe=[o,jt,r,s,a],de=!t&&g===void 0&&typeof n=="string"&&xe.every($e=>$e===void 0||typeof $e=="string"),ie=xe.filter($e=>$e!==void 0).reduce(($e,ft)=>ft.length>$e.length?ft:$e,jt),te=aa()&&ue.railed===!0?null:$?q:I?oe:D?Y:_?V:null,ke=u===!0||C||$,Ce=lh({restTone:f==="primary"?x:"neutral",filled:ke,isRefused:$,isFound:D,isArmed:C,confirmTone:E,tone:x}),Q=G&&!N,ve=Q?t?"blocked":void 0:I||t&&($||ae||M)?"warn":void 0,ot=t?uh:dh,Be=ue.sendStatus,an=Be===void 0?S:[S,ia(Be)].filter(Boolean).join(`
`),rt=P?[S,Bo].filter(Boolean).join(`
`):an;return i.jsxs(i.Fragment,{children:[i.jsx(Re,{text:Y??q??oe??(_?V:rt),children:i.jsx(ot,{type:"button","data-command-edge":ve,$tone:Ce,$variant:f,$fit:le,$size:y,$pressed:ke,$armed:C,$blocked:Q,"aria-pressed":u,"aria-disabled":G||P||void 0,"data-unconfirmed":ae?"true":void 0,"data-failed":M?"true":void 0,"data-command-phase":A,"data-stream":P?"down":void 0,"data-predicted":Q?void 0:la(Be),"data-gate":Q?"blocked":ga(ue,Oe)?.undetermined?"undetermined":void 0,"aria-label":($?q??void 0:I?oe??void 0:D?Y??R:G?d??R:_?c??V:C?l:R)??(le?ye:void 0),onClick:()=>W(o!==void 0),"data-rest-label":de?n:void 0,"data-armed-label":de?ie:void 0,...j,children:de?i.jsx(ch,{children:Z}):Z})}),i.jsx(ht,{visuallyHidden:!0,children:te})]})}function w1(e){const{command:t,...n}=e;return sn(t)?i.jsx(qo,{...n,control:t}):i.jsx(Ia,{...n,command:t})}function ih(e){const{command:t,...n}=e;return sn(t)?i.jsx(qo,{...n,glyph:!0,control:t}):i.jsx(Ia,{...n,glyph:!0,command:t})}function Ia({command:e,state:t,name:n,unavailable:o,children:r,sentWord:s,rows:a,modelled:l,marking:c,glyph:d,...u}){const f=g=>typeof r=="function"?r(g):typeof r=="string"?r:"",x=Hn({command:{kind:"bound",handle:e.handle,args:void 0,options:e.options},toggle:{state:t,name:n??"",word:f,words:[...new Set([f(!0),f(!1),f(null)])],sentWord:s,rows:a,modelled:l,marking:c,unavailable:o,args:g=>g==null?void 0:e.toArgs(!(typeof g=="number"?g>0:g))}});return i.jsx(qo,{...u,glyph:d,control:x})}function qo({control:e,glyph:t=!1,tone:n="go",size:o="md",icon:r,tip:s,"aria-label":a,...l}){const{phase:c,isOffline:d,isRefused:u,isLost:f,isBlocked:x,isUnavailable:g,refusalText:m,lossText:v,toggleView:y,hasUnconfirmed:E,hasFailure:S,press:R}=e;if(!y)return null;const{marking:j,sentence:A}=y,_=y.confirmation==="held"||y.confirmation==="modelled",C=d?Bo:x&&!g||u?m:f?v:(_?null:A)??s,D=x&&!g?"blocked":u||f||E||S?"warn":void 0,G=y.unavailable!==null||x,N=y.unavailable??(x?m:null);return i.jsxs(i.Fragment,{children:[i.jsx(Re,{text:C,children:t?i.jsx(Uo,{type:"button","aria-pressed":y.on,"aria-disabled":G||void 0,"aria-label":a,"data-command-phase":c,"data-stream":d?"down":void 0,"data-command-edge":D,onClick:()=>R(!1),...l,children:y.confirmation==="sent"?i.jsx(Ea,{"aria-hidden":"true"}):r}):i.jsx(Ta,{type:"button",size:o,tone:y.on?n:void 0,pressed:y.on,"aria-pressed":y.on,disabled:G||void 0,disabledReason:N??void 0,marked:j,"aria-label":a,"data-command-phase":c,"data-stream":d?"down":void 0,"data-command-edge":D,onClick:()=>R(!1),...l,children:r!==void 0&&y.confirmation!=="sent"?r:i.jsx(oh,{shown:y.word,reserve:y.reserve})})}),i.jsx(ht,{visuallyHidden:!0,children:_?"":A??""})]})}function lh(e){return e.filled?e.isRefused?"warn":e.isFound?"neutral":e.isArmed?e.confirmTone:e.tone:e.restTone}const La=Po`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
`,ch=w.span`
  grid-area: 1 / 1;
  /* First in the cell's order, so the button's baseline is the face's and not an invisible sizer's. */
  order: -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph);
`,dh=w(ya)`
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
`,uh=w(Uo)`
  ${({$armed:e})=>e&&F`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${La} 1s var(--ease-emphasis) infinite;
      }
    `}
  ${({$blocked:e})=>e&&F`
      opacity: 0.5;
      cursor: help;
    `}
`,hh=p.forwardRef(function(t,n){return t.command!==void 0?i.jsx(sh,{...t}):i.jsx(Ta,{ref:n,...t})}),k1=w.button`
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
  ${ut}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,fh=p.forwardRef(function(t,n){if(t.command!==void 0){const{command:x}=t;if("kind"in x&&x.kind==="value"?!0:sn(x)&&x.toggleView!==null){const{children:m,...v}=t;return i.jsx(ih,{...v,icon:m})}return i.jsx(ah,{...t})}const{pressed:o,disabledReason:r,command:s,...a}=t,l=$a(a.disabled,r),c=ka({label:a["aria-label"],children:a.children,disabledReason:l?r:void 0}),{disabled:d,onClick:u,...f}=a;return Sa(i.jsx(Uo,{ref:n,"aria-pressed":o,...f,disabled:l?void 0:d,...l?{"aria-disabled":!0}:{},onClick:l?_a:u}),c,l)}),$1=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,ph=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,_1=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,gh=w.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,S1=w.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,M1=w.div`
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

  ${ut}

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
`,mh=w.input`
  ${Vo}
  width: 100%;
  ${va}
  &[data-command-phase] {
    /* Room for the word of a command inside the field, at its end. */
    padding-inline-end: 8ch;
  }
`,j1=p.forwardRef(function(t,n){return t.command?i.jsx(bh,{...t,command:t.command,forwardedRef:n}):i.jsx(Pa,{ref:n,...t})}),Pa=w.select`
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
`,xh=w.span`
  position: absolute;
  inset-block: 0;
  inset-inline-end: var(--inset-field-select-end);
  display: flex;
  align-items: center;
  pointer-events: none;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
`,vh=w.div`
  position: relative;
  width: 100%;
`;function bh({command:e,value:t,unavailable:n,forwardedRef:o,children:r,...s}){const a=vc({command:e,unavailable:n}),[l,c]=p.useState(null),d=a.control.isSent;return p.useEffect(()=>{d||c(null)},[d]),i.jsx(Re,{text:a.tip,children:i.jsxs(vh,{children:[i.jsx(Pa,{...s,ref:o,value:l??t,...a.edge,onChange:u=>{a.inert||(c(u.target.value),a.send(u.target.value))},children:r}),i.jsx(xh,{"aria-hidden":"true",children:a.word}),i.jsx(ht,{visuallyHidden:!0,children:a.announce})]})})}const E1=w.textarea`
  ${Vo}
  width: 100%;
  resize: vertical;
`;function yh(e){if(e===void 0)return null;const{value:t}=Oo(e.magnitude,e.unit);return t===An?null:t}function Oa(e,t){const n=yh(t);return n===null?e:`${e}, as of ${n}`}const Ko="modelled to SCET";function wh(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function Yr(e){return En(e.value)||Yt(e.value)?{shown:e.value,held:!1,mark:null,isStatic:En(e.value),isDeterministic:Yt(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:Oa(Tt(e.grade),e.asOfUt)}}function Bn(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:En(e),isDeterministic:Yt(e),caption:null,band:null};const n=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!Yt(e.value)){const o=e.reckoning.modelled;if(e.state==="held"){const s=Yr(e),a=e.value===void 0,l=s.held||a,c=s.caption??(a?"":null);return{...s,shown:o,held:l,mark:l?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:n}}const r=e.reckoning.beyondReceived;return{shown:o,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?Ko:null,band:n}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:En(e.value),isDeterministic:Yt(e.value),caption:null,band:n}:e.state==="held"?{...Yr(e),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Na(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function kh(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:Ko}:null;if(e.state==="held"){const n=Oa(Tt(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function A1(e){return e===void 0?null:typeof e!="string"?kh(e):{kind:"held",caption:Tt(e)}}function Zo(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function R1(e,t){const n=Zo(t);return n===void 0?e:{state:"held",value:e,grade:n,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}function Qo(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function T1(e={}){return Qo(t=>Se(t,e))}const $h=.01;function C1({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const r=Math.abs(t(n)-t(o));return(e?Math.min(r,1-r):r)<=$h}}}function Fa(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(r=>!n.readsAsOne(e,r))}function Jo({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,r=v=>Rl(typeof v=="number"?v:v.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,a=wh(s);if(s?.value!==void 0&&a!==void 0)return Fa(s.value,a,Qo(r))?i.jsx(Eo,{"data-held":"",kind:"modelled",caption:`${Ko}, last received ${r(s.value)}`,children:r(a)}):i.jsx(i.Fragment,{children:r(s.value)});const l=Bn(o,{drawsReckoning:!0}),{shown:c,held:d,mark:u,caption:f}=l,x=typeof e=="number"?e:c;if(x==null)return An;const g=r(x),m=Na({...l,shown:x});return d?i.jsx(Eo,{...m,kind:u??"held",caption:f,children:g}):i.jsx("span",{"data-figure":m["data-figure"],children:g})}const qr={left:!1,right:!1};function _h(e){const[t,n]=p.useState(qr),o=p.useRef(qr);return p.useEffect(()=>{if(!e)return;const r=()=>{const l=e.scrollLeft>1,c=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===l&&o.current.right===c||(o.current={left:l,right:c},n(o.current))};r(),e.addEventListener("scroll",r,{passive:!0});const s=typeof ResizeObserver>"u"?null:new ResizeObserver(r);s?.observe(e);for(const l of Array.from(e.children))s?.observe(l);const a=new MutationObserver(()=>{for(const l of Array.from(e.children))s?.observe(l);r()});return a.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",r),s?.disconnect(),a.disconnect()}},[e]),t}const Vr=w.div`
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
`;function Wn(e){const t=p.useRef(null),[n,o]=p.useState(e),[r,s]=p.useState(null);return p.useEffect(()=>{t.current!==r&&s(t.current)}),p.useEffect(()=>{if(!r||typeof ResizeObserver>"u")return;const a=new ResizeObserver(l=>{for(const c of l)c.contentRect.width>0&&c.contentRect.height>0&&o({w:Math.floor(c.contentRect.width),h:Math.floor(c.contentRect.height)})});return a.observe(r),()=>a.disconnect()},[r]),{ref:t,size:n}}const Sh='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Da(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),r=n[o+1]??n[o-1];if(r&&r!==e){r.focus();return}const s=t.closest("[data-panel-rail-frame]"),a=s?s.parentElement?.querySelector("[data-panel-body]"):t.closest("[data-panel-body]");if(!a)return;const l=[...a.querySelectorAll(Sh)].find(c=>c!==e);if(l){l.focus();return}a.hasAttribute("tabindex")||a.setAttribute("tabindex","-1"),a.focus()}const Jt=700;function er(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const Un={"in-transit":1/6,"awaiting-reply":1/2,due:2/3,overdue:2/3,lost:2/3};function za(e){const t=e.reachEtaSeconds;if(e.hold&&t!==null&&t>0)return Mh(e.hold);const n=Ha(e);if(t===null||n===null)return Un[e.predictedPhase];const o=n-t,r=e.replyEtaSeconds===null?1/3:2/3;return Math.max(0,Math.min(r,o/(3*n)))}function Kr(e){const t=Ha(e);return t===null?0:Math.max(0,(1-za(e))*3*t)}function Mh(e){return Math.max(0,Math.min(1,e.outbound))/3}function Ha(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function Ba(e){return jh(e).map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:t.settling==="confirmed"?1:za(t),glyph:t.glyph??er(t.label||t.command),...t.held?{held:!0}:{},...t.settling?{settling:t.settling,settleSeconds:t.settleSeconds??0}:{},...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function jh(e){return e.some(t=>t.dispatchedAt!==void 0)?e.map((t,n)=>({item:t,index:n})).sort((t,n)=>(t.item.dispatchedAt??Number.NEGATIVE_INFINITY)-(n.item.dispatchedAt??Number.NEGATIVE_INFINITY)||t.index-n.index).map(({item:t})=>t):e}function I1({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||Ml(e)!=="shown"?"none":n||jl({oneWaySeconds:He("s",e)})==="live"?"badge":t?"strip":"none"}const Eh={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},en={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Ah(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Eh[e.phase]}const Xn=new Set(["overdue","lost"]),Rh=180,Th=96;function Wa(e){return Se(He("s",Math.max(0,e)))}function Ch(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const Ih=1;function tr(e){const t=_l(),n=p.useRef(t);n.current=t;const[o,r]=p.useState(e),s=p.useRef({eta:e,ut:lo(t)});return p.useEffect(()=>{const a=s.current.eta;(a===null!=(e===null)||a!==null&&e!==null&&Math.abs(e-a)>=Ih)&&(s.current={eta:e,ut:lo(n.current)},r(e))},[e]),p.useEffect(()=>{const a=setInterval(()=>{const{eta:l,ut:c}=s.current;if(l===null)return;const d=lo(n.current);if(d!==void 0){if(c===void 0){s.current={eta:l,ut:d};return}r(Math.max(0,l-(d-c)))}},1e3);return()=>clearInterval(a)},[]),o}function lo(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function Lh({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":r="In-flight commands",variant:s="inline",onDismiss:a}){const{ref:l,size:c}=Wn({w:320,h:0}),d=s==="rail"||s==="expanded"?e:e.filter(f=>!f.settling);if(s==="rail")return d.length===0?null:i.jsx(Ph,{items:d,"aria-label":r});if(s==="expanded")return d.length===0?null:i.jsx(Gh,{items:d,"aria-label":r,onDismiss:a});const u=n!=="auto"?n:c.w>=Rh?"full":c.w>=Th?"compact":"badge";return d.length===0?null:u==="badge"?i.jsx(Oh,{ref:l,items:d,mode:t,"aria-label":r}):i.jsx(Ya,{ref:l,role:"list","aria-label":r,"data-mode":t,"data-density":u,$row:o==="row",children:d.map(f=>i.jsx(Nh,{item:f,$compact:u==="compact"},f.id))})}const et=8,Ua=1/3;function Ph({items:e,"aria-label":t}){const n=e.filter(o=>!o.settling);return i.jsx(Fh,{role:"img","aria-label":`${t}: ${n.length} in flight`,children:e.map(o=>{const r=Math.max(0,Math.min(1,o.progress??Un[o.phase]));return i.jsx(Ga,{...o.settling?{"data-role":"settling","data-settling":o.settling}:{"data-role":"glow","data-phase":o.phase,...o.held?{"data-held":""}:{}},$settling:o.settling,style:{"--dot-colour":Xa(o),"--dot-progress":r,"--settle-seconds":o.settleSeconds??0}},o.id)})})}const Oh=function({ref:t,items:n,mode:o,"aria-label":r}){const s=tr(Ch(n)),a=n.some(c=>Xn.has(c.phase)),l=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${Wa(s)}`;return i.jsx(Re,{text:n.map(c=>c.label).join(`
`),focusable:!0,children:i.jsx(Ya,{ref:t,role:"group","aria-label":`${r}: ${l}`,"data-mode":o,"data-density":"badge",$row:!1,children:i.jsxs(qa,{$phase:a?"overdue":"in-transit",children:[i.jsx(Va,{"aria-hidden":"true",$pulse:!a,children:"↑"}),i.jsxs(Ka,{children:[n.length,s!==null&&i.jsxs(i.Fragment,{children:[" · ",i.jsx(Jo,{value:Math.max(0,s)})]})]})]})})})};function Nh({item:e,$compact:t}){const n=tr(e.etaSeconds),o=Xn.has(e.phase),r=n===null?`${e.label}, ${en[e.phase]}`:`${e.label}, ${Wa(n)}`;return i.jsxs(qa,{$phase:e.phase,role:"listitem",...t?{"aria-label":r,title:r}:{},children:[i.jsx(Va,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Ah(e)}),!t&&i.jsx(ef,{children:e.label}),i.jsx(Ka,{children:n===null?en[e.phase]:i.jsx(Jo,{value:Math.max(0,n)})})]})}const Rn=Po`
  from { opacity: 1; }
  to { opacity: 0; }
`,Fh=w.div`
  position: relative;
  display: block;
  width: 100%;
  height: 16px;
  /* Clips the part of each dot above the strip, whatever box holds it. */
  overflow: hidden;
`,Dh=14;function zh(e,t,n){const o=Math.min(Dh,(n-et)/Math.max(1,t)),r=Math.ceil(e/2)*(e%2===1?1:-1),s=n/2+r*o;return Math.max(0,Math.min(n-et,s-et/2))}function Zr({items:e,height:t}){return i.jsx(Wh,{role:"group","aria-label":"Commands on the rail",style:{height:t},children:e.map((n,o)=>{const r=Math.max(0,Math.min(1,n.progress??Un[n.phase]));return i.jsx(Re,{text:n.settling?null:`${n.label}, ${en[n.phase]}`,announce:!1,focusable:!n.settling,children:i.jsx(Ga,{...n.settling?{"data-role":"settling","data-settling":n.settling,"aria-hidden":!0}:{role:"img","aria-label":`${n.label}, ${en[n.phase]}`,"data-role":"glow","data-phase":n.phase,...n.held?{"data-held":""}:{}},"data-lane":o,$settling:n.settling,$lane:!0,style:{"--dot-colour":Xa(n),"--dot-progress":r,"--settle-seconds":n.settleSeconds??0,"--lane-top":`${zh(o,e.length,t)}px`}})},n.id)})})}function Xa(e){return e.settling==="confirmed"?"var(--color-accent-fg)":e.held||e.settling==="failed"||Xn.has(e.phase)?me.warn:"var(--color-accent-fg)"}const Hh=e=>e==="confirmed"?F`
        transition: left var(--settle-time) var(--ease-linear);
        animation: ${Rn} ${Jt}ms var(--ease-standard) var(--settle-time) forwards;
      `:e==="failed"?F`
          animation: ${Rn} ${Jt}ms var(--ease-standard) forwards;
        `:null,Bh=Po`
  from { top: ${-et*(1-Ua)}px; }
  to { top: var(--lane-top); }
`,Wh=w.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,Ga=w.span`
  position: absolute;
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  top: ${-et*(1-Ua)}px;
  /* The dot's own width is kept inside the strip, so it is whole at both ends. */
  left: calc((100% - ${et}px) * var(--dot-progress));
  width: ${et}px;
  height: ${et}px;
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
    ${({$settling:e})=>Hh(e)}
    ${({$lane:e,$settling:t})=>e&&!t&&F`
        animation: ${Bh} var(--duration-base) var(--ease-entrance);
      `}
  }
`,Uh=54,qt=5,Xh=3,nr=Uh-8-qt,Tn=60,Qr={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:me.warn,lost:me.warn};function Gh({items:e,"aria-label":t,onDismiss:n}){const[o,r]=p.useState(null),s=_h(o),a=s.left||s.right;return i.jsxs(qh,{"data-command-list":"",children:[i.jsx(Vh,{ref:r,role:"list","aria-label":t,...a?{tabIndex:0,"data-scrolls":""}:{},children:e.map(l=>i.jsx(Yh,{item:l,onDismiss:n},l.id))}),i.jsx(Vr,{$position:"left",$visible:s.left}),i.jsx(Vr,{$position:"right",$visible:s.right})]})}function Yh({item:e,onDismiss:t}){const n=e.glyph??er(e.label),o=e.settling==="confirmed"?Qr["awaiting-reply"]:e.held||e.settling==="failed"?me.warn:Qr[e.phase],r=Math.max(0,Math.min(1,(e.progress??Un[e.phase])*1.5)),s=Xn.has(e.phase)&&!!t&&!e.settling,a=`${e.label}, ${en[e.phase]}`;return i.jsxs(Kh,{role:"listitem","aria-label":a,...e.settling?{"data-settling":e.settling,"aria-hidden":!0}:{"data-phase":e.phase,...e.held?{"data-held":""}:{}},$settling:e.settling,style:{color:o,"--settle-seconds":e.settleSeconds??0},children:[i.jsx(Re,{text:s?`Dismiss ${e.label}`:a,announce:!1,children:i.jsxs(Zh,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:l=>{Da(l.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[i.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&i.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),i.jsx(Qh,{children:i.jsx("span",{className:"fill",style:{"--fill-ratio":r}})})]})}const qh=w.div.attrs({role:"group"})`
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
    ${nr}px + ${qt}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
  /* Holds the overflow glows over the row's edges. */
  position: relative;
`,Vh=w.div`
  display: flex;
  flex-direction: row;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${Xh}px;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  /* Native scrollbar hidden: the edge glows show scroll state. */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${on}
`,Kh=w.div`
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @media (prefers-reduced-motion: no-preference) {
    ${({$settling:e})=>e==="confirmed"?F`
            animation: ${Rn} ${Jt}ms var(--ease-standard)
              var(--settle-time) forwards;
            .fill {
              transition:
                height var(--settle-time) var(--ease-linear),
                width var(--settle-time) var(--ease-linear);
            }
          `:e==="failed"?F`
              animation: ${Rn} ${Jt}ms var(--ease-standard) forwards;
            `:null}
  }

  @container (min-width: ${Tn}px) {
    flex-direction: column;
  }
`,Zh=w.div`
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

  @container (min-width: ${Tn}px) {
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
`,Qh=w.div`
  --s: ${nr}px;
  position: relative;
  flex: 0 0 ${qt}px;
  width: ${qt}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${Tn}px) {
    width: var(--s);
    height: ${qt}px;
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
  @container (min-width: ${Tn}px) {
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
`,Jh={"in-transit":F`
    color: var(--color-text-primary);
  `,"awaiting-reply":F`
    color: var(--color-text-muted);
  `,due:F`
    color: var(--color-text-muted);
  `,overdue:F`
    color: ${Le.warn};
  `,lost:F`
    color: ${Le.warn};
  `},qa=w.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>Jh[e]}
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
`,ef=w.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ka=w.span`
  flex: 0 0 auto;
`,tf="Awaiting first signal";function L1({expectedIn:e}){const t=e??0,n=Number.isFinite(t)&&t>0;return i.jsxs(i.Fragment,{children:[tf,n&&Ks()&&i.jsx(nf,{total:t})]})}function nf({total:e}){return i.jsx(of,{seconds:tr(e)??0})}function of({seconds:e}){return e>0?i.jsxs(i.Fragment,{children:[" ",i.jsx(Tl,{level:"muted",children:i.jsx(Jo,{value:Math.ceil(e)})})]}):null}const or=e=>F`
  --fit-box: ${e};
`,rf=e=>F`
  --fit-mask: ${e};
`;function Za(e){return e==="go"||e==="info"?"caution":e}function Cn({tone:e,size:t="md",live:n=!1,report:o,held:r,children:s,...a}){const l=Zo(r),c=l===void 0?e:Za(e),d=c===void 0||c==="neutral"?void 0:c,u=o?.label??(typeof s=="string"?s:"");No(o?{id:o.id,severity:d??"go",label:u}:null);const f=n?{role:"status","aria-live":"polite"}:{},x=l===void 0?null:Tt(l),g=Reflect.get(a,"data-tooltip")!==void 0,{anchor:m,tip:v}=rn(g?null:x);return i.jsxs(i.Fragment,{children:[i.jsxs(cf,{$severity:d,$size:t,...f,...m,...a,children:[s,x!==null&&i.jsxs(i.Fragment,{children:[i.jsx(df,{"aria-hidden":"true","data-held-mark":""}),i.jsxs(tt,{"data-unit-currency":"",children:[", ",x]})]})]}),v]})}const sf=F`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,af={go:F`
    background: transparent;
    border-color: ${me.go};
    color: ${Le.go};
  `,info:F`
    background: transparent;
    border-color: ${me.info};
    color: ${Le.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${me.info} 40%, transparent);
  `,caution:F`
    background: transparent;
    border-color: ${me.caution};
    color: ${Le.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${me.caution} 45%, transparent);
  `,warn:F`
    background: transparent;
    border-color: ${me.warn};
    color: ${Le.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${me.warn} 55%, transparent);
  `,nogo:F`
    background: transparent;
    border-color: ${me.nogo};
    color: ${Le.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${me.nogo} 65%, transparent);
  `,offline:F`
    background: transparent;
    border-color: ${me.offline};
    color: ${Le.offline};
  `},lf={sm:F`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:F`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},cf=w.span`
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

  ${({$size:e})=>lf[e]}
  ${({$severity:e})=>e===void 0?sf:af[e]}
`,df=w.span`
  position: absolute;
  top: 0;
  right: 0;
  width: ${pe.held.domSize};
  height: ${pe.held.domSize};
  transform: translate(45%, -45%);
  background: ${pe.held.color};
  box-shadow: 0 0 0 1px var(--color-surface-panel);
  pointer-events: none;
`,uf={},hf={byKey:new Map,unaddressed:void 0,separate:!1};function Jr(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function ff(e,t){if(e.separate!==t.separate||!Jr(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!Jr(o,t.byKey.get(n)))return!1;return!0}function pf(e,t,n,o){const r=new Map;e!==void 0&&r.set(Fo(e),n);for(const[s,a]of Object.entries(t??{}))a!==void 0&&r.set(Ll(s),a);return{byKey:r,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function gf(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function mf(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function xf(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,a)=>s.depth-a.depth);let r=!1;for(const s of o)s.resettle(n)&&(r=!0);if(r)for(const s of t)s()}}}function vf(e){const t=new Map,n=new Map,o=new Set,r=e?.root??xf();let s=hf;const a=c=>{let d;for(const u of c){const f=u.position;f!==void 0&&(d===void 0||f.base>d.base)&&(d=f)}return d?.rung},l={root:r,depth:e===void 0?0:e.depth+1,hold(c,d,u){const f=t.get(c);if(u===void 0)f!==void 0&&(f.delete(d),f.size===0&&t.delete(c));else{if(mf(f?.get(d),u))return;f===void 0?t.set(c,new Map([[d,u]])):f.set(d,u)}e===void 0?r.sweep(c):e.hold(c,d,u)},settled:c=>n.get(c),readsAsOneFigure:c=>o.has(c),setPolicy(c){if(!ff(s,c)){s=c;for(const d of t.keys())r.sweep(d)}},resettle(c){const d=[...t.get(c)?.values()??[]],u=e?.settled(c),f=s.byKey.get(c)??s.unaddressed??uf,x=f.format??u?.format??a(d),g=f.as??u?.as,m=f.decimals??(s.separate?Pl(d,{format:x,as:g}):u?.decimals),v=x===void 0&&g===void 0&&m===void 0?void 0:{...x!==void 0&&{format:x},...g!==void 0&&{as:g},...m!==void 0&&{decimals:m}},y=s.separate&&ta(d,{format:x,as:g,decimals:m}),E=y!==o.has(c);return y?o.add(c):o.delete(c),gf(n.get(c),v)?E:(v===void 0?n.delete(c):n.set(c,v),!0)},attach(){r.family.add(l);for(const c of t.keys())r.sweep(c)},detach(){r.family.delete(l)}};return r.family.add(l),l}const rr={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},tn=p.createContext(rr);function bf(){return p.useContext(tn)!==rr}function P1({children:e,of:t,pins:n,format:o,as:r,decimals:s,separate:a=!1}){const l=p.useContext(tn),[c]=p.useState(()=>vf(l===rr?void 0:l));return p.useLayoutEffect(()=>(c.attach(),()=>c.detach()),[c]),p.useLayoutEffect(()=>{c.setPolicy(pf(t,n,{format:o,as:r,decimals:s},a))},[c,t,n,o,r,s,a]),i.jsx(tn.Provider,{value:c,children:e})}function yf(e,t={}){const n=p.useContext(tn),o=p.useId(),r=Qs(e),s=e?.unit,l=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||r===null?void 0:Fo(s),c=l===void 0||r===null||s===void 0||Cl(s)===void 0?void 0:Il(r,s),d=c?.base,u=c?.rung;return p.useLayoutEffect(()=>{if(!(l===void 0||r===null||s===void 0))return n.hold(l,o,{reading:r,unit:s,...d!==void 0&&u!==void 0&&{position:{base:d,rung:u}}}),()=>n.hold(l,o,void 0)},[n,o,l,r,s,d,u]),p.useSyncExternalStore(n.root.subscribe,()=>l===void 0?void 0:n.settled(l),()=>{})}function O1(e,t={}){const n=p.useContext(tn),r=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||Qs(e)===null||e===null||e===void 0?void 0:Fo(e.unit);return p.useSyncExternalStore(n.root.subscribe,()=>r===void 0?!1:n.readsAsOneFigure(r),()=>!1)}const wf=zl,kf={sci:zu,rep:Du},Qa=w.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,$f=w.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?F`
          position: relative;
          ${Aa(e,t)}
        `:""}
`,_f=w.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,Sf=w(tt)`
  user-select: none;
`,Ja=w(tt)`
  user-select: none;
`,Mf=" ";function jf(e,t,n,o){if(t===void 0)return null;const r=x=>Oo(x.magnitude,x.unit,{...n,format:o}).value,s=(x,g)=>r(g.minus(x)),a=ta([t.lo,t.hi],{...n,format:o});if(!Fa(e,[t.lo,t.hi],Qo(r)))return null;const l=s(t.lo,t.value),c=s(t.value,t.hi),d=x=>/^[-+\u2212]?[0.,\s]*$/.test(x);if(!a&&d(l)&&d(c))return null;const u=r(t.value)===r(e),f={...n,format:o};return{oneFigure:a,plusMinus:!a&&u&&l===c?c:null,lo:r(t.lo),hi:r(t.hi),loSaid:Or(t.lo,f),hiSaid:Or(t.hi,f),kind:t.kind}}function Ef(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function co({token:e,className:t,spaced:n}){const o=Ol(e,Nl(e));if(o==="")return null;const r=Fl(o),s=Dl(o),a=kf[s?.head??o],l=wf.has(o),c=r!==void 0;return i.jsxs(i.Fragment,{children:[n&&!l?Mf:null,i.jsx(Re,{text:r,announce:!1,children:i.jsxs(Qa,{$attached:l,$icon:a!==void 0,className:t,"data-unit":e,children:[a?i.jsxs(i.Fragment,{children:[i.jsx(a,{size:"1em"}),s&&i.jsxs("span",{"aria-hidden":"true",children:["/",s.rest]})]}):c?i.jsx("span",{"aria-hidden":"true",children:o}):o,c&&i.jsxs(Ja,{"data-unit-word":"",children:[" ",r]})]})})]})}function es({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:r,marked:s,elsewhere:a,...l}){const c=Bn(e,{drawsReckoning:r}),d=s!=null&&!c.held&&c.shown!=null?{...c,held:!0,mark:s.kind,caption:s.caption}:c,{shown:u,held:f,mark:x,band:g}=d,m=a!=null&&a!==""&&u!=null,v=x??(m?"current":null),y=m?[d.caption,a].filter(Boolean).join("; "):d.caption,E=yf(u,l),S=bf(),R=o===!0&&S,j=E===void 0?l:{...E,...l},A=Oo(u?.magnitude,u?.unit,j),_=u==null||g===null||!f?null:jf(u,$l(g,u.unit),j,A.rung),{anchor:C,tip:$}=rn(Ef(y,_));return e!==void 0||t===void 0?i.jsxs($f,{className:n,$mark:v,$elsewhere:m,...Na(d),...C,children:[A.value,!R&&i.jsx(co,{token:A.symbol,spaced:!0}),_!==null&&i.jsxs(_f,{"data-unit-band":"",children:[_.oneFigure?i.jsxs(i.Fragment,{children:[" (",i.jsx("span",{"aria-hidden":"true",children:"~"}),i.jsx(Ja,{"data-unit-word":"",children:"approximately "}),_.lo]}):_.plusMinus===null?` (${_.lo} to ${_.hi}`:` ± ${_.plusMinus}`,!R&&i.jsx(co,{token:A.symbol,spaced:!0}),_.plusMinus===null?")":null]}),v!==null&&i.jsx(Ra,{kind:v,elsewhere:m}),y!==null&&i.jsxs(Sf,{"data-unit-currency":"",children:[", ",y]}),$]}):typeof t!="string"?i.jsx(Qa,{$attached:!1,$icon:!1,className:n,children:t}):i.jsx(co,{token:t,className:n,spaced:!1})}const Af={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},Rf={center:"center",start:"flex-start",baseline:"baseline"},Tf=p.forwardRef(function({justify:t="between",align:n="center",gap:o,wrap:r=!1,children:s,...a},l){return i.jsx(Cf,{ref:l,$justify:t,$align:n,$gap:o,$wrap:r,...a,children:s})}),Cf=w.div`
  display: flex;
  align-items: ${({$align:e})=>Rf[e]};
  justify-content: ${({$justify:e})=>Af[e]};
  gap: ${({$gap:e})=>e?St[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function sr(e){const t=Zo(e.held);return t===void 0?{label:e.label,tone:e.tone,title:e.title}:{label:e.label,tone:Za(e.tone),title:e.title??`${e.label}: ${Tt(t)}`,held:t}}const If=.72,Lf=.76;function Ao({size:e,kind:t="held",figureSize:n}){return i.jsx("tspan",{dy:n===void 0?-e*.55:-(n*If-e*Lf),fontSize:e,fill:pe[t].color,"data-held-mark":"","data-reckoning-mark":t,children:pe[t].glyph})}function N1({end:e,x1:t,y1:n,x2:o,y2:r}){return i.jsx("line",{"data-bound":e,x1:t,y1:n,x2:o,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function ei(e,t){return t===null?e:`${e}, ${t}`}function Pf(e){return e===null?{}:{"data-currency-in-name":""}}function F1({x:e,y:t,size:n,children:o}){return i.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function ts(e,t){return t?.state!=="held"?e:{...t,value:e}}function Je(e){return e.kind==="continuous"?"ribbon":"dot"}function Of(e){return e.delivery==="acked"}function Nf(e){return e.direction==="command"?"outbound":"inbound"}function ti(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function Gn(e){return`${e.direction}/${e.kind}/${e.delivery}`}const Ff={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function ar(e){return Ff[Gn(e)]??null}const ns=new Set;function ni(e,t){const n=Gn(e);if(ns.has(n))return;ns.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;Ks()?kl.error(o):console.error(o)}const oi=16,Et=oi/2,Ro=5.5,Df=2,zf=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function ir(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function Hf(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/Df)),Math.max(2,Math.round(o)))}function Bf(e,t,n){if(e.length===0)return"";const o=ir(e,t,n);if(!(o>0))return`M0.00,${Et.toFixed(2)}`;const r=Hf(e,t,o),s=o/n*(t/r),a=e.length-1,l=[];for(let c=0;c<=r;c++){const d=Math.min(c/r*o,o),u=Math.max(0,Math.round((c-.5)*s)),f=Math.min(a,Math.round((c+.5)*s));let x=0;for(let m=u;m<=Math.max(u,f);m++)x=Math.max(x,zf(e[a-Math.min(m,a)]));const g=(c%2===0?-1:1)*x*Ro;l.push(`${d.toFixed(2)},${(Et+g).toFixed(2)}`)}return`M${l.join(" L")}`}const Wf=.25;function Uf(e,t,n){const o=ir(e,t,n);if(!(o>0))return"";const r=e.length-1,s=Math.max(1,Math.min(Math.round(Math.min(e.length,t)),Math.ceil(o/Wf))),a=o/n*(t/s),l=[],c=[];for(let d=0;d<s;d++){const u=Math.max(0,Math.round(d*a)),f=Math.min(r,Math.max(u,Math.round((d+1)*a)-1));let x=0,g=0;for(let S=u;S<=f;S++){const R=e[r-S];R&&(Number.isFinite(R.lo)&&(x=Math.min(x,Math.max(-1,R.lo))),Number.isFinite(R.hi)&&(g=Math.max(g,Math.min(1,R.hi))))}const m=d/s*o,v=(d+1)/s*o,y=(Et-g*Ro).toFixed(2),E=(Et-x*Ro).toFixed(2);l.push(`${m.toFixed(2)},${y}`,`${v.toFixed(2)},${y}`),c.unshift(`${v.toFixed(2)},${E}`,`${m.toFixed(2)},${E}`)}return`M${l.join(" L")} L${c.join(" L")} Z`}const ri=.05;function lr(e){return typeof e=="number"&&Number.isFinite(e)&&e>0}const os=.02,rs=1.5,Xf=.25,In=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],Yn=100,Xt=30,Gf=1.5,Ae=2,Yf=4,Ge=Xt-Ae-Yf,Ue=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(Yn-n*2),Dt=e=>Ae+(1-Math.max(0,Math.min(1,e)))*Ge,si=e=>e==="inline"?Gf:0;function D1(e="inline"){const t=si(e);return(Yn-t*2)/3}function ai({tags:e,who:t}){return ni(e,t),i.jsx("g",{"data-rail-unrepresented":Gn(e),"data-rail-entry":t})}function lt(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function ss(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(c=>c.age>=t);if(n===-1)return[];const o=e[n-1],r=e[n],s=r.age-o.age||1,a=(t-o.age)/s,l=o.value+a*(r.value-o.value);return[{age:t,value:l},...e.slice(n)]}function as(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(d=>d.age>t),r=e.slice(0,o),s=e[o],a=r[r.length-1];if(!a)return[{age:t,value:s.value}];const l=s.age-a.age||1,c=(t-a.age)/l;return[...r,{age:t,value:a.value+c*(s.value-a.value)}]}const qf=.25;function Vt(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>o.age)return null;if(t===o.age)return o.value;for(let r=1;r<e.length;r++){const s=e[r];if(t<=s.age){const a=e[r-1],l=(t-a.age)/(s.age-a.age||1);return a.value+l*(s.value-a.value)}}return o.value}function Vf(e,t,n){const o=t.length>0&&t[t.length-1].age>=n-Xf,r=e.map(l=>{if(Vt(t,l.age)===null)return!1;let c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;const u=m=>{m!==null&&(c=Math.min(c,m),d=Math.max(d,m))},f=l.age-rs,x=l.age+rs;let g=Vt(t,x);if(g===null){if(!o)return!1;g=t[t.length-1].value}u(Vt(t,f)),u(g);for(const m of t)m.age>f&&m.age<x&&u(m.value);return l.value<c-os||l.value>d+os}),s=[];let a=0;for(let l=1;l<=r.length;l++)l<r.length&&r[l]===r[a]||(s.push({from:a,to:Math.min(l,r.length-1),off:r[a]}),a=l);return s}function Kf({stream:e,span:t,index:n,padX:o,oneT:r,twoT:s}){const l=`var(${In[n%In.length]})`,c=p.useId(),d=`cds-ramp-${c}-${n}`,u=`cds-fill-${c}-${n}`,f=`cds-tail-${c}-${n}`,x=ar(e.tags);if(x!=="continuous-strip")return x===null?i.jsx(ai,{tags:e.tags,who:e.id}):null;const g=Of(e.tags),m=g?e.inTransit:as(e.inTransit,r),v=m.map(P=>({x:Ue(P.age,t,o),y:Dt(P.value)}));if(v.length===0)return null;const E=(g?[]:as(ss(e.inTransit,r),r*(1+qf))).map(P=>({x:Ue(P.age,t,o),y:Dt(P.value)})),S=E.length>1&&E[E.length-1].x>E[0].x,R=`${lt(v)} L${v[v.length-1].x.toFixed(2)},${(Ae+Ge).toFixed(2)} L${v[0].x.toFixed(2)},${(Ae+Ge).toFixed(2)} Z`,j=g?ss(e.echo,s):[],A=j.map(P=>({x:Ue(P.age,t,o),y:Dt(P.value)})),_=j.map(P=>({x:Ue(P.age,t,o),y:Dt(Vt(e.inTransit,P.age)??P.value)})),C=Vf(j,e.inTransit,t),$=m[m.length-1].age,I=Vt(j,$),D=j.filter(P=>P.age>$),G=(I===null||D.length===0?D:[{age:$,value:I},...D]).map(P=>({x:Ue(P.age,t,o),y:Dt(P.value)})),N=G.length>1?`${lt(G)} L${G[G.length-1].x.toFixed(2)},${(Ae+Ge).toFixed(2)} L${G[0].x.toFixed(2)},${(Ae+Ge).toFixed(2)} Z`:null;return i.jsxs("g",{"data-stream-group":e.id,"data-return-leg":g,children:[i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:v[0].x,y1:"0",x2:Math.max(v[v.length-1].x,v[0].x+1),y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.10"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0.40"})]}),i.jsxs("linearGradient",{id:u,x1:"0",y1:"0",x2:"0",y2:"1",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.22"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]}),S&&i.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:E[0].x,y1:"0",x2:E[E.length-1].x,y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.40"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]})]}),i.jsx("path",{"data-role":"area",d:R,fill:`url(#${u})`,stroke:"none"}),N&&i.jsx("path",{"data-role":"echo-area",d:N,fill:`url(#${u})`,stroke:"none"}),i.jsx("path",{"data-role":"commanded","data-stream":e.id,d:lt(v),fill:"none",stroke:`url(#${d})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),S&&i.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:lt(E),fill:"none",stroke:`url(#${f})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),C.map(P=>P.off?i.jsxs(p.Fragment,{children:[i.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:lt(A.slice(P.from,P.to+1)),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),i.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:lt(_.slice(P.from,P.to+1)),fill:"none",stroke:l,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]},P.from):P.to>P.from&&i.jsx("path",{"data-role":"echo","data-stream":e.id,d:lt(A.slice(P.from,P.to+1)),fill:"none",stroke:l,strokeWidth:"0.8",strokeLinecap:"round"},P.from))]})}function Zf({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${p.useId()}`,o=e.tags,r=ar(o);if(r!=="continuous-strip")return r===null?i.jsx(ai,{tags:o,who:e.id}):null;const s=(Yn-t*2)/3,a=e.wave,l=a??e.amplitudes,c=e.spanSamples??l.length,d=a!==void 0?Uf(a,c,s):"",u=a!==void 0?d:Bf(e.amplitudes,c,s);if(u===""&&!(a!==void 0&&a.length>0))return null;const f=Math.max(ir(a??e.amplitudes,c,s),1),x=`var(${ti(o)})`,g=Nf(o)==="outbound",m=g?0:2*s;return i.jsxs("g",{"data-ribbon-group":e.id,"data-ribbon-zone":m===0?"outgoing":"confirmed",transform:`translate(${t+m} ${Ae}) scale(1 ${Ge/oi})`,children:[i.jsx("defs",{children:i.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:g?0:f,y1:"0",x2:g?f:0,y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:x,stopOpacity:"0.9"}),i.jsx("stop",{offset:"1",stopColor:x,stopOpacity:"0.1"})]})}),a!==void 0?i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-role":"ribbon-axis",x1:"0",x2:f,y1:Et,y2:Et,stroke:`url(#${n})`,strokeWidth:"1",vectorEffect:"non-scaling-stroke"}),d!==""&&i.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d,fill:`url(#${n})`,stroke:"none"})]}):i.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:u,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function Qf({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:r}){const s=`cds-divfade-${p.useId()}`,a=r?.state==="held",l=a?Bn(r??null).caption:null,{anchor:c,tip:d}=rn(l),u=[...e,...t].find(j=>j.oneWaySeconds!==null),f=u?.oneWaySeconds??null;if(!u||!lr(f))return null;const x=f>=ri;if(!x&&t.length===0)return null;const g=3*f,m=f,v=2*f,y=si(o),E=Ue(m,g,y),S=Ue(v,g,y),R=e.every(j=>j.inTransit.length===0&&j.echo.length===0)&&t.every(j=>j.amplitudes.length===0);return i.jsxs(Jf,{"data-oneway":f,"data-variant":o,$variant:o,...c,children:[i.jsxs(ep,{$variant:o,$quiet:R,role:"img","aria-label":ei(n,l),...Pf(l),viewBox:`0 0 ${Yn} ${Xt}`,preserveAspectRatio:"none",children:[i.jsx("defs",{children:i.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:Ae,x2:"0",y2:Ae+Ge,children:[i.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),i.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(x?e:[]).map((j,A)=>i.jsx(Kf,{stream:j,span:g,index:A,padX:y,oneT:m,twoT:v},j.id)),t.map(j=>i.jsx(Zf,{ribbon:j,padX:y},j.id)),i.jsx("line",{"data-divider":"t",x1:E,x2:E,y1:Ae,y2:Ae+Ge,stroke:`url(#${s})`,strokeWidth:"0.4"}),i.jsx("line",{"data-divider":"2t",x1:S,x2:S,y1:Ae,y2:Ae+Ge,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&i.jsxs("g",{"data-role":"hover-labels",children:[i.jsxs("text",{x:E,y:Ae-.4,textAnchor:"middle",fontSize:"2",children:[Se(He("s",f),{decimals:1}),a&&i.jsx(Ao,{size:1.2})]}),i.jsxs("text",{x:S,y:Ae-.4,textAnchor:"middle",fontSize:"2",children:[Se(He("s",2*f),{decimals:1}),a&&i.jsx(Ao,{size:1.2})]}),i.jsx("text",{x:Ue(f/2,g,y),y:Xt-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),i.jsx("text",{x:Ue(1.5*f,g,y),y:Xt-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),i.jsx("text",{x:Ue(2.5*f,g,y),y:Xt-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&i.jsxs(i.Fragment,{children:[i.jsxs(tp,{"aria-hidden":"true",children:[i.jsxs("span",{children:["outgoing ",i.jsx("b",{children:"0"})]}),i.jsxs("span",{children:["echo"," ",i.jsx("b",{children:i.jsx(es,{value:ts(He("s",f),r),decimals:1})})]}),i.jsxs("span",{children:["confirmed"," ",i.jsx("b",{children:i.jsx(es,{value:ts(He("s",2*f),r),decimals:1})})]})]}),i.jsxs(np,{"aria-hidden":"true",children:[(x?e:[]).map((j,A)=>i.jsxs("span",{children:[i.jsx("i",{style:{background:`var(${In[A%In.length]})`}}),j.label]},j.id)),t.map(j=>i.jsxs("span",{"data-role":"legend-ribbon",children:[i.jsx("i",{style:{background:`var(${ti(j.tags)})`}}),j.label]},j.id)),x&&e.length>0&&i.jsxs("span",{"data-role":"legend-deviation",children:[i.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),d]})}const Jf=w.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,ep=w.svg`
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
`,tp=w.div`
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
`,np=w.div`
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
`;function is({handle:e,handles:t,"aria-label":n,mode:o,density:r,orientation:s,variant:a="inline"}){const l=t??(e?[e]:[]),c=l.length===1?l[0]:null,d=c?ar(c.tags):null;if(c&&d===null)return i.jsx(op,{tags:c.tags,who:c["aria-label"]});if(c&&d!=="in-flight-row"){const g=c,m=g.effectiveDelaySeconds;return lr(m)?i.jsx(Qf,{streams:g.streams??[],ribbons:g.ribbons??[],delayReading:g.delayReading,"aria-label":n??g["aria-label"],variant:a}):null}const u=Ba(l.flatMap(g=>g.inFlight)),x=l.some(g=>g.dismiss)?g=>l.find(m=>m.inFlight.some(v=>v.id===g))?.dismiss?.(g):void 0;return i.jsx(Lh,{items:u,"aria-label":n,mode:o,density:r,orientation:s,variant:a,onDismiss:x})}function op({tags:e,who:t}){return ni(e,t??"unnamed handle"),i.jsx("span",{hidden:!0,"data-rail-unrepresented":Gn(e)})}function ii(e){const n=dt(e)||e.command||"The command",o=e.code===void 0?void 0:Zs(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function li(e){return`${dt(e)||e.command||"The command"}: never sent. Safe to re-send.`}function ci(e){return`${dt(e)||e.command||"The command"}: ${e.warning}`}const rp={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed",warned:"Commands likely to be lost"},sp={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command",warned:"warned command"};function ap(e,t){return e.kind==="refused"?Mt(e.entries[t]):e.kind==="found"?zo(e.entries[t]):e.kind==="failed"?ii(e.entries[t]):e.kind==="warned"?ci(e.entries[t]):e.kind==="undelivered"?li(e.entries[t]):Ho(e.entries[t])}function ip(e){return e.entries.map((t,n)=>{const o=dt(t);return{id:t.id,subject:o||t.command||"",sentence:ap(e,n),dismissLabel:`Dismiss ${o||sp[e.kind]}`,tags:t.tags}})}function yt(e){const{kind:t,onDismiss:n,live:o=!0}=e,r=e["aria-label"]??rp[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const a=ip(e).map(l=>i.jsxs(dp,{role:o?void 0:"listitem",$tone:s,children:[Je(l.tags)==="ribbon"?i.jsx(hp,{$tone:s,children:l.subject}):i.jsx(up,{"aria-hidden":"true",$tone:s,children:er(l.subject)}),i.jsx(fp,{children:l.sentence}),n&&i.jsx(pp,{type:"button","data-dismiss":"",onClick:c=>{Da(c.currentTarget),n(l.id)},"aria-label":l.dismissLabel,children:"✕"})]},l.id));return o?i.jsx(cp,{forwardedAs:"div","aria-label":r,"data-command-list":"",additionsOnly:!0,children:a}):i.jsx(lp,{role:"list","aria-label":r,"data-command-list":"",children:a})}const di=F`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,lp=w.div`
  ${di}
`,cp=w(ht)`
  ${di}
  &:empty {
    margin: 0;
  }
`,dp=w.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>me[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${me[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,up=w.span`
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  min-width: 34px;
  padding: var(--inset-glyph);
  align-self: stretch;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: ${({$tone:e})=>Le[e]};
  border: 1px solid ${({$tone:e})=>me[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${me[e]} 14%, var(--color-surface-raised))`};
`,hp=w.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>Le[e]};
`,fp=w.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,pp=w.button`
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
  ${ut}
`;function _t(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,o)=>_t(n,t[o]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const n=[...t];return[...e].every(o=>{const r=n.findIndex(s=>_t(o,s));return r===-1?!1:(n.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[n,o]of e)if(!t.has(n)||!_t(o,t.get(n)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const n=e,o=t,r=new Set;for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of r)if(!_t(n[s],o[s]))return!1;return!0}return!1}function qn(e,t,n,o){const[r,s]=p.useState(o),a=p.useRef(t);a.current=t;const l=p.useRef(n);l.current=n;const c=p.useRef(r);return c.current=r,p.useEffect(()=>{if(!e)return;let d=c.current;const u=()=>{const m=a.current(e);l.current(d,m)||(d=m,s(m))};u(),e.addEventListener("scroll",u,{passive:!0});const f=new ResizeObserver(u);f.observe(e);for(const m of Array.from(e.children))f.observe(m);let x;const g=new MutationObserver(m=>{if(m.some(v=>v.type==="childList")){for(const v of Array.from(e.children))f.observe(v);u();return}x===void 0&&(x=requestAnimationFrame(()=>{x=void 0,u()}))});return g.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style"]}),()=>{e.removeEventListener("scroll",u),f.disconnect(),g.disconnect(),x!==void 0&&cancelAnimationFrame(x)}},[e]),r}function gp(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function ui(e){return qn(e,gp,Object.is,!1)?0:void 0}function mp({label:e,selected:t,count:n,onToggle:o}){return i.jsxs(xp,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[i.jsx("span",{children:e}),n!==void 0&&i.jsx(vp,{children:n})]})}const xp=w.button`
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

  ${ut}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`,vp=w.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function bp({value:e,onChange:t,clearLabel:n="Clear search",className:o,...r}){const s=p.useRef(null);return i.jsxs(yp,{className:o,children:[i.jsx(wp,{...r,ref:s,type:"search",value:e,onChange:a=>t(a.target.value)}),e!==""&&i.jsx(kp,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:i.jsx(Fu,{size:"var(--icon-size-control)"})})]})}const yp=w.div`
  position: relative;
  display: flex;
  align-items: center;
`,wp=w(mh)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,kp=w(fh)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function z1({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=Hl(e),r=[...new Set(o)],[s,a]=p.useState(()=>new Set),[l,c]=p.useState(""),d=p.useId(),u=m=>{a(v=>{const y=new Set(v);return y.has(m)?y.delete(m):y.add(m),y})},f=[...s,l].filter(m=>m.length>0).map(m=>m.toLowerCase()),x=i.jsxs(na,{gap:"related-packed",children:[i.jsxs(ph,{children:[i.jsx(gh,{htmlFor:d,children:t}),i.jsx(bp,{id:d,value:l,placeholder:n,onChange:c})]}),r.length>0&&i.jsx(Tf,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:r.map(m=>i.jsx(mp,{label:m,selected:s.has(m),onToggle:()=>u(m)},m))})]}),g={matches:m=>{const v=m.toLowerCase();return f.every(y=>v.includes(y))},active:f.length>0};return hi.set(g,x),g}const hi=new WeakMap;function fi(e){return hi.get(e)??null}function H1({filter:e,children:t,fill:n=!1}){return i.jsxs(na,{gap:"related-dense",fill:n,children:[fi(e),t]})}const $p={accent:"var(--color-accent-fg)",warn:"var(--color-warn-mark)"},_p=24,Sp=96;function Mp({children:e,padded:t,caption:n,footer:o,strip:r,shape:s="rounded",edgeCue:a,...l}){const c=s==="circle",d=!c||a===void 0?[]:[a].flat(),u=!c&&r!==void 0&&r!==null&&r!==!1;return i.jsxs(jp,{$padded:t&&!u,$stacked:u,$circle:c,$cued:d.length>0,"data-shape":c?"circle":void 0,...l,children:[u?i.jsxs(i.Fragment,{children:[i.jsx(Ip,{$padded:t,children:e}),i.jsx(Lp,{"data-framed-display-strip":"",children:r})]}):c&&a!==void 0?i.jsx(Ep,{children:e}):e,d.length>0&&i.jsx(Cp,{cues:d}),n!=null&&i.jsx(gi,{children:n}),o!=null&&i.jsx(Pp,{children:o})]})}const jp=w.div`
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
`,Ep=w.div`
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
`,Ne=12,ls=1,Ap=3,pi=1,Rp=100*pi/200,cs=e=>e*Math.PI/180;function Tp(e,t=Rp){const n=Math.min(Math.max(e.span??90,1),359),o=Math.min(Math.max(Number.isFinite(e.grow)?e.grow:0,0),1),r=50,a=50+(ls+(Ap-ls)*o)*t,l=cs(e.angle-n/2),c=cs(e.angle+n/2),d=(f,x)=>`${(50+f*Math.cos(x)).toFixed(3)} ${(50-f*Math.sin(x)).toFixed(3)}`,u=n>180?1:0;return`M${d(r,l)}A${r} ${r} 0 ${u} 0 ${d(r,c)}L${d(a,c)}A${a} ${a} 0 ${u} 1 ${d(a,l)}Z`}function Cp({cues:e}){const{ref:t,size:n}=Wn({w:100+2*Ne,h:100+2*Ne}),o=(100+2*Ne)/Math.max(n.w,1),r=pi*o;return i.jsx("div",{ref:t,"aria-hidden":"true",style:{position:"absolute",left:`${-Ne}%`,top:`${-Ne}%`,width:`${100+2*Ne}%`,height:`${100+2*Ne}%`,pointerEvents:"none"},children:i.jsx("svg",{"aria-hidden":"true","data-edge-cues":"",viewBox:`${-Ne} ${-Ne} ${100+2*Ne} ${100+2*Ne}`,style:{display:"block",width:"100%",height:"100%",overflow:"visible"},children:e.map(s=>i.jsx("path",{"data-edge-cue":"",d:Tp(s,r),fill:$p[s.tone]},`${s.angle}-${s.tone}`))})})}const Ip=w.div`
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
`,Lp=w.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${_p}px;
  max-height: ${Sp}px;
  min-width: 0;
  overflow: hidden;
`,gi=w.div`
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
`,Pp=w(gi)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,ds={width:160,height:72},Op=2.5,Np=420;function B1({width:e,height:t,plotHasData:n}){return!n&&e>=ds.width&&t>=ds.height?"center":e>=Np&&e>=t*Op?"beside":"inline"}const Fp={overlay:F`
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
  `};function Dp({placement:e,role:t="status",children:n,...o}){return i.jsx(zp,{$placement:e,role:t,...o,children:n})}const zp=w.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${Bl.regular};
  pointer-events: none;

  ${({$placement:e})=>Fp[e]}
`,Ln=8;function mi(e){const t=[{cols:1,rows:e}];for(let n=2;n<=e;n++){const o=Math.ceil(e/n);o<(t.at(-1)?.rows??e)&&t.push({cols:n,rows:o})}return t}function xi(e){return e===0?"0px":`(${e}px + var(--gap-related))`}const vi=(e,t)=>`calc(${e} * ${t} + ${(e-1)*Ln}px)`,Hp=(e,t,n)=>`calc(${e} * (${t} + ${n+Ln}px) + ${(e-1)*Ln}px)`;function Bp(e,t,n,o,r){const s=xi(n),a=mi(e).slice(1).map(({cols:c,rows:d})=>`
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
`}function Wp(e,t,n,o){const r=mi(e),s=o!==void 0;return r.slice(1).map(({cols:a,rows:l},c)=>`
  @container grid-squares (aspect-ratio >= ${(.88*a/r[c].rows).toFixed(2)}) and ((width >= ${vi(a,t)}) or (height < ${Hp(s?l:r[c].rows,o??t,n)})) {
    --cols: ${a};
    --rows: ${l};
  }`).join("")}function Up(e,t){const n=`
  & > * > * {
    --grid-square-heading: ${e===0?"0px":`calc${xi(e)}`};
  }`;return e===0||t===void 0?n:`${n}
  @container (width < ${t}px) or (height < ${t+e+Ln}px) {
    & > * > * {
      --grid-square-heading: 0px;
    }
    & > * [data-grid-square-heading] {
      display: none;
    }
  }`}function Xp(e){const t=new Set;return e.map(n=>{const o=n.inFlight.filter(r=>t.has(r.id)?!1:(t.add(r.id),!0));return o.length===n.inFlight.length?n:{...n,inFlight:o}})}function uo(e){const t=new Set;return e.filter(n=>t.has(n.id)?!1:(t.add(n.id),!0))}function Gp(e){const t=new Map;for(const n of e)for(const o of n.warnings??[]){const r=`${o.command}\0${o.label}\0${o.warning}`;t.has(r)||t.set(r,{...o,id:r,tags:n.tags})}return[...t.values()]}const us=new Map,Yp=new Set(["overdue","lost"]);function qp(e){const t=new Set,n=new Set;for(const o of e){for(const r of o.refusals??[])t.add(r.id);for(const r of o.failures??[])t.add(r.id);for(const r of o.undelivered??[])t.add(r.id);for(const r of o.founds??[])(r.outcome==="ran"?n:t).add(r.id)}return{failed:t,ran:n}}function Vp(e){const t=new Map;for(const d of e)for(const u of d.inFlight)u.settling||t.set(u.id,{handleId:d.id,row:u});const{failed:n,ran:o}=qp(e),[r,s]=p.useState({last:us,settling:us}),a=[...r.last].filter(([d])=>!t.has(d));if(a.length>0||t.size!==r.last.size||[...t].some(([d,u])=>r.last.get(d)?.row!==u.row)){const d=a.map(([u,f])=>{const x=n.has(u)||Yp.has(f.row.predictedPhase)&&!o.has(u)?"failed":"confirmed",g=x==="confirmed"?Kr(f.row):0;return[u,{...f,row:{...f.row,settling:x,settleSeconds:g}}]});s({last:t,settling:d.length===0?r.settling:new Map([...r.settling,...d])})}const c=p.useRef(new Map);return p.useEffect(()=>{const d=c.current;for(const[u,f]of r.settling){if(d.has(u))continue;const x=setTimeout(()=>{d.delete(u),s(g=>{const m=new Map(g.settling);return m.delete(u),{...g,settling:m}})},(f.row.settleSeconds??0)*1e3+Jt);d.set(u,x)}},[r.settling]),p.useEffect(()=>{const d=c.current;return()=>{for(const u of d.values())clearTimeout(u)}},[]),r.settling.size===0?e:e.map(d=>{const u=[...r.settling.values()].filter(f=>f.handleId===d.id&&!t.has(f.row.id)).map(f=>f.row.settling==="confirmed"&&n.has(f.row.id)?{...f.row,settling:"failed",settleSeconds:0}:f.row.settling==="failed"&&o.has(f.row.id)?{...f.row,settling:"confirmed",settleSeconds:Kr(f.row)}:f.row);return u.length===0?d:{...d,inFlight:[...d.inFlight,...u]}})}function Kp(e){if(Je(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return lr(t)?n>0||(t??0)>=ri&&o>0:!1}return e.inFlight.length>0}function bi({tiny:e}={}){const t=nc(),n=Do();p.useEffect(()=>n?oc(n):void 0,[n]);const o=Xp(Vp(t)).filter(Kp),r=Gp(t),s=uo(t.flatMap(M=>(M.refusals??[]).map(W=>({...W,tags:M.tags})))),a=t.flatMap(M=>(M.losses??[]).map(W=>({...W,tags:M.tags}))),l=uo(t.flatMap(M=>(M.founds??[]).map(W=>({...W,tags:M.tags})))),c=t.flatMap(M=>(M.undelivered??[]).map(W=>({...W,tags:M.tags}))),d=uo(t.flatMap(M=>(M.failures??[]).map(W=>({...W,tags:M.tags})))),u=s.length+c.length+d.length,f=o.length>0||u>0||a.length>0||l.length>0||r.length>0,[x,g]=p.useState(!1),[m,v]=p.useState(!1),[y,E]=p.useState(!1),S=x||m&&!y;p.useEffect(()=>{f||(g(!1),v(!1),E(!1))},[f]);const R=p.useId(),j=[...o.filter(M=>Je(M.tags)==="ribbon"),...o.filter(M=>Je(M.tags)!=="ribbon")],A=o.some(M=>Je(M.tags)==="ribbon"),_=j.filter(M=>Je(M.tags)!=="ribbon"),C=Ba(o.filter(M=>Je(M.tags)!=="ribbon").flatMap(M=>M.inFlight)),I=t.some(M=>M.dismiss&&(M.refusals?.length??0)>0)?M=>{for(const W of t)W.refusals?.some(ee=>ee.id===M)&&W.dismiss?.(M)}:void 0,G=t.some(M=>M.dismiss&&(M.losses?.length??0)>0)?M=>t.find(W=>W.losses?.some(ee=>ee.id===M))?.dismiss?.(M):void 0,P=t.some(M=>M.dismiss&&(M.undelivered?.length??0)>0)?M=>t.find(W=>W.undelivered?.some(ee=>ee.id===M))?.dismiss?.(M):void 0,Y=t.some(M=>M.dismiss&&(M.failures?.length??0)>0)?M=>{for(const W of t)W.failures?.some(ee=>ee.id===M)&&W.dismiss?.(M)}:void 0,ae=t.some(M=>M.dismiss&&(M.founds?.length??0)>0)?M=>{for(const W of t)W.founds?.some(ee=>ee.id===M)&&W.dismiss?.(M)}:void 0;return i.jsxs(Zp,{"data-panel-rail-frame":"",$tiny:e,$hasContent:f,onMouseEnter:()=>{E(!1),v(!0)},onMouseLeave:()=>v(!1),children:[t.length>0&&i.jsxs(ht,{visuallyHidden:!0,additionsOnly:!0,children:[s.map(M=>i.jsxs("span",{children:[Mt(M)," "]},`refusal:${M.id}`)),a.map(M=>i.jsxs("span",{children:[Ho(M)," "]},`loss:${M.id}`)),c.map(M=>i.jsxs("span",{children:[li(M)," "]},`undelivered:${M.id}`)),d.map(M=>i.jsxs("span",{children:[ii(M)," "]},`failure:${M.id}`)),l.map(M=>i.jsxs("span",{children:[zo(M)," "]},`found:${M.id}`)),r.map(M=>i.jsx("span",{children:ci(M)},`warning:${M.id}`))]}),f?i.jsxs(Jp,{"data-panel-rail":"","data-grown":S,"data-pinned":x,"data-suppress-hover":y,onKeyDown:M=>{M.key==="Escape"&&x&&(M.stopPropagation(),g(!1),E(!0))},children:[S&&C.length>0&&!A&&i.jsx(hs,{children:i.jsx(Zr,{items:C,height:n0})}),i.jsx(Re,{text:!S&&C.length>0?`In flight: ${C.filter(M=>!M.settling).map(M=>M.label).join(", ")}`:null,children:i.jsx(e0,{type:"button","aria-expanded":x,"aria-controls":R,"aria-label":"Signal-delay detail",onClick:()=>{g(M=>{const W=!M;return W||E(!0),W})},children:i.jsx(a0,{"aria-hidden":"true",hidden:!S,children:"▲"})})}),i.jsxs(o0,{id:R,"data-panel-rail-detail":"",children:[j.filter(M=>!S||Je(M.tags)==="ribbon").map(M=>i.jsx(is,{handle:M,variant:S?"expanded":"rail","aria-label":M["aria-label"]??(S?"Delay detail":void 0)},M.id)),S&&_.length>0&&i.jsx(is,{handles:_,variant:"expanded","aria-label":"Commands in flight"},"queue"),!S&&(u>0||a.length>0||l.length>0||r.length>0)&&i.jsxs(r0,{children:[u>0&&i.jsx(ho,{children:u===1?"1 command failed":`${u} commands failed`}),a.length>0&&i.jsx(ho,{children:a.length===1?"1 command unconfirmed":`${a.length} commands unconfirmed`}),r.length>0&&i.jsx(ho,{children:r.length===1?"1 warning":`${r.length} warnings`}),l.length>0&&i.jsx(s0,{children:l.length===1?"1 unconfirmed command answered":`${l.length} unconfirmed commands answered`})]})]}),S&&C.length>0&&A&&i.jsx(hs,{"data-over-graph":"true",children:i.jsx(Zr,{items:C,height:t0})})]}):null,S&&r.length>0&&i.jsx(yt,{kind:"warned",entries:r,live:!1}),S&&s.length>0&&i.jsx(yt,{kind:"refused",entries:s,onDismiss:I,live:!1}),S&&a.length>0&&i.jsx(yt,{kind:"lost",entries:a,onDismiss:G,live:!1}),S&&c.length>0&&i.jsx(yt,{kind:"undelivered",entries:c,onDismiss:P,live:!1}),S&&d.length>0&&i.jsx(yt,{kind:"failed",entries:d,onDismiss:Y,live:!1}),S&&l.length>0&&i.jsx(yt,{kind:"found",entries:l,onDismiss:ae,live:!1})]})}const Zp=w.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,Qp=F`
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
`,Jp=w.div`
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
    ${Qp}
  }
`,e0=w.button`
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

  ${on}

  &[aria-expanded="true"] {
    pointer-events: none;
  }

`,t0=86,n0=40,hs=w.div`
  pointer-events: none;

  &[data-over-graph="true"] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`,o0=w.div`
  display: contents;
`,ho=w.span`
  color: ${Le.warn};
`,r0=w.span`
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
`,s0=w.span`
  color: var(--color-info-text);
`,a0=w.span`
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
`,yi=p.createContext(null);function W1({badges:e,children:t}){return i.jsx(yi.Provider,{value:e,children:t})}function i0(){return p.useContext(yi)}function wi({severity:e,count:t=1}){const n=t>1;return i.jsx(l0,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${Qt[e]}`:Qt[e],$mark:me[e],$digits:n?String(t).length:1,children:n&&i.jsx(c0,{$fill:$o[e],$ink:ea[e],children:i.jsx(d0,{"aria-hidden":"true",children:i.jsx("text",{x:"50%",y:"50%",dy:"0.365em",textAnchor:"middle",children:t})})})})}const fs="8px",l0=w.span`
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
`,c0=w.span`
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
`,d0=w.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: currentColor;
`,u0=()=>()=>{},ps=()=>Wl;function ki(){const e=oa();return p.useSyncExternalStore(e?e.subscribe:u0,e?e.getBreakdown:ps,e?e.getBreakdown:ps)}const h0=()=>()=>{},gs=()=>null;function f0(){const e=oa();return p.useSyncExternalStore(e?e.subscribe:h0,e?e.getSummary:gs,e?e.getSummary:gs)}const $i=F`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,p0=12;function g0(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function m0(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const r=o<e?t-p0:t;if(n[o]<=r)return o}return n.length-1}function x0(e,t,n){const[o,r]=p.useState(0),s=p.useRef(o);s.current=o;const a=[t,...n].join(`
`),l=p.useCallback(()=>{const c=e.current,d=a.split(`
`);if(!c||d.length<2){s.current!==0&&(s.current=0,r(0));return}const u=d.map(x=>g0(c,x)),f=m0(s.current,c.clientWidth,u);f!==s.current&&(s.current=f,r(f))},[e,a]);return p.useLayoutEffect(()=>{l()},[l]),p.useEffect(()=>{const c=e.current;if(!c||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>l());return d.observe(c),()=>d.disconnect()},[e,l]),{index:o,compacted:o>0}}const v0=24;function b0(e,t,n,o,r=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&r?!(t>n+v0):n>t}function ms(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const r=e.cloneNode(!0);n!==void 0&&(r.textContent=n),Object.assign(r.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),r.setAttribute("aria-hidden","true"),o.insertBefore(r,e.nextSibling);const s=r.getBoundingClientRect().width;return o.removeChild(r),s}const y0={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function zt(e){return Number.parseFloat(e)||0}function w0(e,t,n,o){const[r,s]=p.useState(!1),a=p.useRef(r);a.current=r;const l=p.useRef(void 0),c=p.useRef(void 0),d=p.useRef(!1),u=p.useRef(o);u.current=o;const f=p.useCallback(()=>{const g=e.current;if(!g)return;const m=getComputedStyle(g),v=g.getBoundingClientRect().width-zt(m.paddingLeft)-zt(m.paddingRight),y=ms(t.current,{},u.current),E=ms(n.current,y0),S=n.current?.closest("[data-panel-aside-expand]")?.parentElement,R=S?getComputedStyle(S):null,j=y===0||E===0?y+E:y+zt(m.columnGap)+zt(R?.paddingLeft??"")+zt(R?.paddingRight??"")+E,A=a.current,_=v>0&&c.current!==void 0&&v<c.current;A&&_&&(d.current=!0);const C=b0(A,v,j,l.current,d.current);C!==A&&(d.current=C&&_),v>0&&(c.current=v),j>0&&(l.current=j),C!==a.current&&(a.current=C,s(C))},[e,t,n]),x=p.useRef({title:null,aside:null,observer:null});return p.useLayoutEffect(()=>{const g=t.current,m=n.current,v=x.current;if(v.observer===null||v.title!==g||v.aside!==m){v.observer?.disconnect(),v.title=g,v.aside=m,v.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>f());for(const y of[g,m])y&&v.observer?.observe(y,{subtree:!0,childList:!0,characterData:!0,attributes:!0});f();return}v.observer.takeRecords().length>0&&f()}),p.useEffect(()=>{const g=x.current;return()=>{g.observer?.disconnect(),g.observer=null}},[]),p.useEffect(()=>{const g=e.current;if(!g||typeof ResizeObserver>"u")return;const m=new ResizeObserver(()=>f());return m.observe(g),n.current&&m.observe(n.current),()=>m.disconnect()},[e,n,f]),r}const _i=p.createContext("full"),k0=_i.Provider;function U1(){return p.useContext(_i)}const Vn=p.createContext(null);function Si({children:e}){const[t,n]=p.useState(null),o=p.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return i.jsx(Vn.Provider,{value:o,children:e})}function $0({children:e}){return i.jsx(Si,{children:e})}const Mi=`
  & > [${sa}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,Pn=w.div`
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
  ${({$hoverTitle:e})=>e?on:""}
  /* A hand-composed panel can put sections straight in here, so this box owns the leftover height. */
  ${Mi}
`,_0=w.h3`
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
`,ji=p.forwardRef(function({compact:t,children:n,...o},r){const s=p.useRef(null),a=typeof n=="string"?n:"",l=t===void 0||a===""?S0:typeof t=="string"?[t]:t,{index:c,compacted:d}=x0(s,a,l);return i.jsx(Re,{text:d?a:void 0,children:i.jsx(_0,{...o,ref:u=>{if(s.current=u,typeof r=="function"){r(u);return}r&&(r.current=u)},"aria-label":d?a:void 0,children:c===0?n:l[c-1]})})}),S0=[],M0=w.div`
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
`,j0=w.div`
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
`,E0=w.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,A0=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,R0=w.details`
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
    ${ut}
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
`,T0=120;function Ei(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${Qt[n.severity]}`:`${Qt[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function Ai({title:e,compactTitle:t,aside:n,toolbar:o,...r}){const s=ki(),a=p.useRef(null),l=p.useRef(null),c=p.useRef(null),d=w0(a,l,c,typeof e=="string"?e:void 0),[u,f]=p.useState(!1),[x,g]=p.useState(!1),m=p.useRef(null),v=p.useRef(null),y=p.useRef(null),E=p.useCallback(()=>{m.current!==null&&clearTimeout(m.current),m.current=null},[]);p.useEffect(()=>{d||(f(!1),g(!1))},[d]),p.useEffect(()=>E,[E]);const S=d&&(u||x);p.useEffect(()=>{if(!S)return;const _=$=>{$.key==="Escape"&&v.current?.contains(document.activeElement)&&($.stopPropagation(),E(),g(!1),f(!1),y.current?.focus())},C=$=>{v.current?.contains($.target)||(E(),g(!1),f(!1))};return document.addEventListener("keydown",_,!0),document.addEventListener("pointerdown",C,!0),()=>{document.removeEventListener("keydown",_,!0),document.removeEventListener("pointerdown",C,!0)}},[S,E]);const R=d?Ei(s):null,{anchor:j,tip:A}=rn(S?null:R);return i.jsxs(M0,{ref:a,"data-panel-header":"",...r,children:[i.jsxs(j0,{children:[e!==void 0&&i.jsx(ji,{ref:l,compact:t,children:e}),i.jsx(E0,{"aria-hidden":"true",children:i.jsx(Cn,{children:null})})]}),n!==void 0&&i.jsx(A0,{children:i.jsxs(R0,{ref:v,"data-panel-aside-expand":"","data-hovering":d&&x?"":void 0,$collapsed:d,open:d?u:!0,onToggle:_=>{d&&(f(_.currentTarget.open),_.currentTarget.open||g(!1))},onPointerEnter:_=>{!d||_.pointerType==="touch"||(E(),g(!0))},onPointerLeave:_=>{_.pointerType!=="touch"&&(E(),m.current=setTimeout(()=>{m.current=null,g(!1)},T0))},children:[i.jsxs("summary",{ref:y,"data-tooltip":j["data-tooltip"],onPointerDown:j.onPointerDown,onPointerUp:j.onPointerUp,onFocus:j.onFocus,onBlur:j.onBlur,"aria-description":R??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(_=>`${_.count} ${Qt[_.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(_=>i.jsx(wi,{severity:_.severity,count:_.count},_.severity)),i.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),A,i.jsx(k0,{value:d?"collapsed":"full",children:i.jsx("div",{"data-panel-aside-full":"",ref:c,children:n})})]})}),o!==void 0&&i.jsx(Ri,{children:o})]})}const Ri=w.div`
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
`,Ti="44px",Ci=`scroll-padding-block: ${Ti};`,C0=w.div`
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
  ${on}
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
  ${({$loneFrame:e})=>e?`@container (width < ${I0}) {
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
`,I0="25rem";function Ii({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...r}){const a=p.useContext(Vn)?.registerScroller,[l,c]=p.useState(null),d=p.useCallback(f=>{a?.(f),c(f)},[a]),u=ui(l);return i.jsx(C0,{ref:d,tabIndex:u,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...r,children:e})}const L0="13rem",P0=w.div`
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
`;function O0({children:e,hoverTitle:t}){const n=p.useRef(null),o=p.useRef(null),r=D0(n,o);return i.jsx(N0,{ref:n,$fits:r,"data-panel-fit-body":"",children:i.jsx(F0,{ref:o,$fits:r,$hoverTitle:t,"data-panel-fit-shifted":r&&t?"":void 0,children:e})})}const N0=w.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,F0=w.div`
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
`;function D0(e,t){const[n,o]=p.useState(!0);return p.useLayoutEffect(()=>{const r=e.current,s=t.current;if(!r||!s)return;const a=()=>{o(H0(z0(s),r.clientHeight))};if(a(),typeof ResizeObserver>"u")return;const l=new ResizeObserver(a),c=()=>{l.observe(r),l.observe(s);for(const u of Array.from(s.children))l.observe(u)};c();const d=new MutationObserver(()=>{c(),a()});return d.observe(s,{childList:!0}),()=>{l.disconnect(),d.disconnect()}},[e,t]),n}function z0(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function H0(e,t){return e<=t}const B0=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,W0=w.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${Ci}
  ${on}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,On=w.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e})=>e==="top"?"top: 0;":"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: ${Ti};
  /* The audit reads the mask depth from the gradient stops, not from this height. */
  ${rf("panel-scroll-glow")}
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
`,Li=p.forwardRef(function({children:t,...n},o){const r=p.useRef(null),[s,a]=p.useState(null),l=p.useCallback(u=>{r.current=u,a(u)},[]);p.useImperativeHandle(o,()=>r.current);const c=qn(s,dr,ur,cr),d=ui(s);return i.jsxs(B0,{...n,children:[i.jsx(W0,{ref:l,tabIndex:d,"data-scroll-area-inner":"",children:t}),i.jsx(On,{$position:"top",$visible:c.top}),i.jsx(On,{$position:"bottom",$visible:c.bottom})]})});function U0(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const xs="14rem",X0=5,G0="45%",Y0=`min(${Yl(1,X0).pxH}px, ${G0})`;function vs(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const q0=w.div`
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
`;function V0({side:e="end",size:t,placement:n="auto",railBand:o,children:r,...s}){const{ref:a,size:l}=Wn({w:1,h:1}),c=U0(t??xs),d=l.w<=1||c===void 0||l.w>=c*2,u=n==="below"?"block":(n==="beside"||l.w>=l.h)&&d?"inline":"block",f=t??(u==="inline"?xs:Y0);return i.jsx(q0,{ref:a,"data-panel-split":u,$axis:u,$side:e,$size:f,$railBand:o,...s,children:r})}const K0=w(Li)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,Z0=w.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function Pi({children:e,...t}){return i.jsx(Z0,{"data-panel-sidebar":"",...t,children:i.jsx(K0,{children:e})})}const cr={top:!1,bottom:!1};function dr(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function ur(e,t){return e.top===t.top&&e.bottom===t.bottom}const Q0=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function Oi({children:e,railBandAbove:t,...n}){const o=p.useContext(Vn),r=o?.scroller??null;p.useEffect(()=>{},[o]);const s=qn(r,dr,ur,cr);return i.jsxs(Q0,{...n,children:[e,i.jsx(On,{$position:"top",$visible:s.top&&!t}),i.jsx(On,{$position:"bottom",$visible:s.bottom})]})}function J0(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const X1=["sections","actions"],mn=Object.freeze({});function eg({summary:e}){const t=p.useRef(e.severity),[n,o]=p.useState(0);p.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const r=Ei(ki());return i.jsx(tg,{$pulse:n,children:i.jsx(Re,{text:r,focusable:!0,children:i.jsx(Cn,{tone:e.severity,size:"sm",children:e.label})})})}const tg=w.span`
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
`,ng=w.div`
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
`;function og({children:e}){const t=p.useContext(Vn),n=qn(t?.scroller??null,dr,ur,cr);return i.jsx(ng,{"data-panel-sticky-top":"","data-panel-glow-top":n.top?"":void 0,children:e})}function rg({render:e}){const{ref:t,size:n}=Wn({w:0,h:0});return i.jsx(sg,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const sg=w.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,ag=w.div`
  flex: 1 1 100%;
  min-width: 0;
`,ig=w(Ai)`
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
`,lg=w.div`
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
`,cg=w(tt)`
  margin: 0;
  ${$i}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${Pn}:hover &,
  ${Pn}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function hr(e){return e.held===void 0?e.label:`${e.label}: ${Tt(e.held)}`}function dg(e){let t=null;for(const n of e){const o=sr(n),{tone:r}=o;r===void 0||r==="neutral"||(t===null||Dr(r)>Dr(t.severity))&&(t={severity:r,label:hr(o)})}return t}function bs({badges:e}){return i.jsx(i.Fragment,{children:e.map(t=>i.jsx(ug,{entry:t},t.id))})}function ug({entry:e}){const t=sr(e),{tone:n}=t;return No(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:hr(t)}),null}function hg({summary:e,announcement:t}){return i.jsxs(i.Fragment,{children:[i.jsx(Re,{text:e.label,focusable:!0,children:i.jsx(fg,{children:i.jsx(wi,{severity:e.severity})})}),i.jsx(ht,{visuallyHidden:!0,assertive:!0,children:t})]})}const fg=w.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,pg=w.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function gg(e){return e.hoverTitle?i.jsx(mg,{...e}):i.jsx(Fi,{...e,hoverTitleId:void 0})}function mg(e){const t=p.useId();return i.jsx(Fi,{...e,hoverTitleId:t})}function Fi({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:r,panelToolbar:s,panelFilter:a,panelFooter:l,panelTrend:c,inactive:d,fitToSize:u,hoverTitle:f,hoverTitleId:x,panelSidebar:g,sidebarSide:m,sidebarSize:v,sidebarPlacement:y,sections:E,sectionMinWidth:S=L0,children:R,...j}){const A=i0(),_=Nr("actions"),C=Nr("sections"),$=J0(o,A),I=$.length===0?null:$.map(X=>{const te=sr(X),{label:ke,tone:Ce,title:Q}=te;return i.jsx(Re,{text:Q,focusable:!0,children:i.jsx(Cn,{tone:Ce,held:te.held,report:Ce===void 0||Ce==="neutral"?void 0:{id:X.id,label:hr(te)},children:ke})},X.id)}),D=a===void 0?s:i.jsxs(i.Fragment,{children:[s,i.jsx(ag,{children:fi(a)})]}),G=r??null,N=G!==null&&G!=="none"&&G!=="live"?G:null;No(N?{id:"stream",severity:so(N),label:Fr(N)??""}:null);const P=f0(),q=P!==null&&$.some(X=>X.id===P.id),Y=N===null?null:Fr(N),oe=q?null:P!==null?i.jsx(eg,{summary:P}):N===null||Y===null?null:i.jsx(Re,{text:`Telemetry stream: ${Y}`,focusable:!0,children:i.jsx(Cn,{tone:so(N),size:"sm",children:Y})}),ae=P?.label??Y,M=ae===null||ae===""?"":typeof e=="string"?`${e}: ${ae}`:`Status: ${ae}`,W=n===void 0&&oe===null&&I===null&&!_?void 0:i.jsxs(i.Fragment,{children:[n,_&&i.jsx(gn,{segment:"actions",props:mn}),I,oe]}),ee=P??dg($)??(N===null||Y===null?null:{severity:so(N),label:Y}),ue=ee?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${ee.label}`:`Status: ${ee.label}`,Oe=n===void 0&&ee===null&&!_?$.length===0?void 0:i.jsx(bs,{badges:$}):i.jsxs(i.Fragment,{children:[n,_&&i.jsx(gn,{segment:"actions",props:mn}),i.jsx(bs,{badges:$}),ee!==null&&i.jsx(hg,{summary:ee,announcement:ue})]}),be=d!==void 0,he=be?[]:p.Children.toArray(E),V=he.length>0,we=R===void 0&&!C&&!u&&he.length===1&&xg(he[0]),ye=[];for(const X of he){const te=!u&&p.isValidElement(X)&&X.props.fill===!0,ke=ye.at(-1);!te&&ke!==void 0&&!ke.fill?ke.nodes.push(X):ye.push({fill:te,nodes:[X]})}V&&!ye.some(X=>!X.fill)&&ye.push({fill:!1,nodes:[]});const le=ye.reduce((X,te,ke)=>te.fill?X:ke,-1),Z=X=>Math.max(1,X.filter(te=>!(p.isValidElement(te)&&te.props.full===!0)).length),xe=[];for(const X of ye){const te=xe.length;if(X.fill){xe.push(X.nodes[0]);continue}xe.push(i.jsxs(P0,{$min:S,$columns:Z(X.nodes),children:[X.nodes,te===le&&i.jsx(gn,{segment:"sections",props:mn})]},`sections-${te}`))}const de=be?i.jsx(Xl,{reason:d}):V?i.jsxs(i.Fragment,{children:[R,xe]}):R,ie=i.jsxs(Ii,{fitToSize:u,loneFrame:we,hoverTitle:f,children:[i.jsxs(og,{children:[i.jsx(bi,{tiny:f}),!f&&i.jsx(ig,{title:e,compactTitle:t,aside:W,toolbar:D})]}),u?i.jsx(O0,{hoverTitle:f,children:de}):de,!V&&!be&&i.jsx(gn,{segment:"sections",props:mn})]});return i.jsx($0,{children:i.jsxs(Pn,{$railTravels:!0,$hoverTitle:f,...f?{tabIndex:0,role:"group","aria-labelledby":x,"data-tiny-panel":""}:{},...j,children:[i.jsx(Oi,{railBandAbove:!0,children:g===void 0||be?ie:i.jsxs(V0,{side:m,size:v,placement:y,railBand:!0,children:[ie,i.jsx(Pi,{children:g})]})}),!be&&c!==void 0&&i.jsx(rg,{render:c}),!be&&l!==void 0&&i.jsx(Ni,{children:l}),f&&i.jsxs(lg,{"data-panel-hover-title":"",children:[i.jsx(cg,{as:"h3",id:x,children:e}),Oe!==void 0&&i.jsx(pg,{children:Oe})]}),i.jsx(ht,{visuallyHidden:!0,children:f&&ue!==void 0?"":M})]})})}function xg(e){if(!p.isValidElement(e)||e.type!==ra||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=p.Children.toArray(t).filter(r=>!(p.isValidElement(r)&&r.type===Dp));if(n.length!==1)return!1;const[o]=n;if(!p.isValidElement(o))return!1;if(o.type===Mp)return!0;if(o.type!==p.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const G1=Object.assign(gg,{Context:Si,Delay:bi,Container:Pn,Header:Ai,Toolbar:Ri,Footer:Ni,Title:ji,Glow:Oi,Body:Ii,Section:ra,Sidebar:Pi}),vg={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function Y1({cols:e,minColWidth:t,fit:n=!1,gap:o="related-dense",rowGap:r,align:s="center",squares:a=!1,squareHeadingPx:l=0,squareHeadingMinPx:c,minRowHeight:d,children:u,...f}){if(a){const x=p.Children.toArray(u).length,g=t??"120px",m=i.jsx(kg,{$count:x,$min:g,$headingPx:l,$gap:St[o],$rowMin:d,children:i.jsx($g,{$count:x,$min:g,$headingPx:l,$gap:St[o],$rowMin:d,$headingMin:c,"data-grid-squares":"",children:u})});return i.jsx(yg,{$rowMin:d,...f,children:d===void 0?m:i.jsx(wg,{children:m})})}return i.jsx(bg,{$cols:e,$minColWidth:t,$fit:n,$gap:o,$rowGap:r,$align:s,...f,children:u})}const bg=w.div`
  display: grid;
  align-items: ${({$align:e})=>vg[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${St[t]} ${St[e]}`:St[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:n})=>e||(t?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,yg=w.div`
  container: grid-squares-width / inline-size;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  ${({$rowMin:e})=>e&&`
  flex-basis: 0;
  min-height: ${e};
`}
`,wg=w(Li)`
  & > [data-scroll-area-inner] {
    display: flex;
    flex-direction: column;
  }
`,kg=w.div`
  container: grid-squares / size;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${({$count:e,$min:t,$headingPx:n,$gap:o,$rowMin:r})=>Bp(e,t,n,o,r)}
`,$g=w.div`
  --cols: 1;
  --rows: ${({$count:e})=>e};
  display: grid;
  flex: 1 1 0;
  min-height: 0;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
  gap: ${({$gap:e})=>e};
  ${({$count:e,$min:t,$headingPx:n,$rowMin:o})=>Wp(e,t,n,o)}
  & > * {
    container-type: size;
    min-width: 0;
    min-height: 0;
  }
  ${({$headingPx:e,$headingMin:t})=>Up(e,t)}
`,Di=.89,fr=.45;function zi({kind:e,x:t,y:n,scale:o=1,ghost:r=!1}){const s=pe[e],a=s.canvasRadius*o,l={fill:s.color,opacity:r?fr:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const d=a*Di;return i.jsx("rect",{x:t-d,y:n-d,width:2*d,height:2*d,...l})}const c=`${t},${n-a} ${t+a},${n+a*.8} ${t-a},${n+a*.8}`;return i.jsx("polygon",{points:c,...l})}function Hi(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function ys(e,t,n,o,r,{ghost:s=!1,scale:a=1}={}){const l=pe[n],c=l.canvasRadius*a;if(t.save(),t.globalAlpha=s?fr:1,t.fillStyle=Hi(e,l.cssVar,l.fallback),t.beginPath(),n==="held"){const d=c*Di;t.rect(o-d,r-d,2*d,2*d)}else t.moveTo(o,r-c),t.lineTo(o+c,r+c*.8),t.lineTo(o-c,r+c*.8),t.closePath();t.fill(),t.restore()}function q1(e,t,{held:n,modelled:o},r={}){n!==void 0&&o!==void 0&&(t.save(),t.globalAlpha=fr,t.strokeStyle=Hi(e,pe.modelled.cssVar,pe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.stroke(),t.restore()),n!==void 0&&ys(e,t,"held",n.x,n.y,{...r,ghost:o!==void 0}),o!==void 0&&ys(e,t,"modelled",o.x,o.y,r)}const Nn=14,ze=4,De=6,_g=6,ws=12,Te=6,Kt=8,xn=4.5,To=4,Sg=12,Mg=190,jg=80;function Gt(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function Eg(e,t,n,o){const r=o??e,s=r.x1-r.x0,a=e.y1-e.y0,l=s>=Mg&&a>=jg,c=l||o!==void 0,d=l||o?n:n.filter(_=>!_.detail),u=s-Te*2-ze*2-Kt-To,f=o!==void 0,x=Math.floor(u/De),g=_=>Gt(_.value??An,x-(_.currency?_.currency.length+2:0)),m=_=>{const C=_.value??An;if(f)return Gt(_.label,x);if(l)return`${_.label} ${C}`;const $=Math.floor((u-C.length*De)/De)-1-(_.modelled?2:0),I=Gt(_.label,Math.min($,Sg));if(I!=="")return`${I} ${C}`;const D=Math.floor(u/De)-(_.modelled?2:0);return Gt(C,D)},v=_=>(l||f)&&_.currency?_.currency:"",y=_=>v(_)?_g+v(_).length*De+(_.modelled?ws:0):_.modelled?ws:0,E=l?0:Kt+To,S=Math.floor((s-Te*2-ze*2)/De),R=Math.max(...d.map(_=>f?E+Math.max(m(_).length*De,g(_).length*De+y(_)):E+m(_).length*De+y(_)),c?Math.min(t.length,S)*De:0),j=c?1:0,A=(d.length*(f?2:1)+j)*Nn+ze*2;return{full:l,named:c,headingChars:S,stacked:f,rows:d,text:m,valueText:g,currencyText:v,cardW:f?s:Math.min(R+ze*2,s-Te*2),cardH:A,headRows:j,fits:A<=a-Te*2}}function Ag(e,t,n,o,r){const s=(a,l)=>a>=t&&a<=t+o&&l>=n&&l<=n+r;for(let a=1;a<e.cx.length;a++){const[l,c,d,u]=[e.cx[a-1],e.cy[a-1],e.cx[a],e.cy[a]];if(![l,c,d,u].every(Number.isFinite))continue;const f=Math.max(1,Math.ceil(Math.hypot(d-l,u-c)/Nn));for(let x=0;x<=f;x++)if(s(l+(d-l)*x/f,c+(u-c)*x/f))return!0}return!1}function pr({x:e,plot:t,heading:n,rows:o,column:r,avoid:s=[],traces:a=[]}){const l=Eg(t,n,o,r),{rows:c,cardW:d,cardH:u,fits:f}=l,x=t.y0+Te,g=c.flatMap($=>$.y===void 0||$.y===null?[]:[$.y]),m=($,I)=>g.every(D=>e+xn<$||e-xn>$+d||D+xn<I||D-xn>I+u),v=t.x1-e-Te,y=v>=d||v>=e-t.x0,E=$=>Math.max(t.x0+Te,Math.min(t.x1-Te-d,$)),S=y?[e+Te,e-Te-d]:[e-Te-d,e+Te],R=[x,t.y1-Te-u].flatMap($=>S.map(I=>({cardX:E(I),cardY:$}))),j=($,I)=>a.every(D=>!Ag(D,$,I,d,u)),A=($,I)=>s.every(D=>$+d<D.x0||$>D.x1||I+u<D.y0||I>D.y1),_=R.find($=>m($.cardX,$.cardY)&&j($.cardX,$.cardY)&&A($.cardX,$.cardY))??R.find($=>m($.cardX,$.cardY)&&A($.cardX,$.cardY))??R.find($=>m($.cardX,$.cardY)&&j($.cardX,$.cardY))??R.find($=>m($.cardX,$.cardY)),C=f?r?{cardX:r.x0,cardY:r.y0+Te}:_:void 0;return{layout:l,place:C}}function V1(e){return pr(e).place!==void 0}function Rg(e){const{layout:t,place:n}=pr(e);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+t.cardW,y1:n.cardY+t.cardH}}function Tg({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:a}){const{layout:l,place:c}=pr({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:a}),{full:d,named:u,headingChars:f,stacked:x,rows:g,text:m,valueText:v,currencyText:y,cardW:E,cardH:S,headRows:R}=l,j=c!==void 0,A=c?.cardX??0,_=c?.cardY??0,C=$=>$+ze+(d?0:Kt+To);return i.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[i.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),g.map($=>$.y===void 0||$.y===null?null:i.jsx("circle",{cx:e,cy:$.y,r:3.5,fill:$.color,stroke:"var(--color-text-primary)",strokeWidth:1},$.id)),j&&i.jsxs("g",{"data-plot-crosshair-card":"",children:[i.jsx("rect",{x:A,y:_,width:E,height:S,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),u&&i.jsx("text",{x:A+ze,y:_+ze+10,fill:"var(--color-text-muted)",fontSize:10,children:Gt(n,f)}),g.map(($,I)=>{const D=x?2:1,G=_+ze+(I*D+R)*Nn+10,N=G+(x?Nn:0);return i.jsxs("g",{"data-plot-crosshair-row":$.id,children:[!d&&i.jsx("rect",{x:A+ze,y:G-8,width:Kt,height:Kt,fill:$.color,"data-plot-crosshair-swatch":""}),i.jsx("text",{x:C(A),y:G,fill:$.value===null||x?"var(--color-text-faint)":$.color,fontSize:10,style:{whiteSpace:"pre"},children:m($)}),x&&i.jsx("text",{x:C(A),y:N,fill:$.value===null?"var(--color-text-faint)":$.color,fontSize:10,style:{whiteSpace:"pre"},children:v($)}),$.modelled&&i.jsx(zi,{kind:"modelled",x:A+E-ze-y($).length*De-(y($)?8:4),y:N-3}),y($)&&i.jsx("text",{x:A+E-ze,y:N,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:y($)})]},$.id)})]})]})}const ks=720,Cg=110,Ig=200,$s=56,Lg=20,Pg=112,Og=260,Ng=.4,Fg=300;function Dg({width:e,height:t,contentWidth:n,legendHeight:o=0,cardHeight:r=0}){const s=Math.max(Pg,Math.ceil(n));if((t>e||e<ks)&&t>=Ig)return{placement:"below"};if(e<ks||t<Cg||s>Math.min(Og,e*Ng)||e-s<Fg)return{placement:"overlay"};const l=t>=$s+o+r;return!l&&t<$s+Lg+r?{placement:"overlay"}:{placement:"beside",columnWidth:s,legendBelow:!l}}const zg={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function Hg(e){return zg[e]}const wt=4,vn=3,Co=6;function Bg(e,t){return e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0}function Wg(e,t){const n=(o,r)=>o>=t.x0&&o<=t.x1&&r>=t.y0&&r<=t.y1;if(e.cx.length===1)return Number.isFinite(e.cx[0])&&n(e.cx[0],e.cy[0]);for(let o=1;o<e.cx.length;o++){const[r,s,a,l]=[e.cx[o-1],e.cy[o-1],e.cx[o],e.cy[o]];if(![r,s,a,l].every(Number.isFinite))continue;const c=Math.max(1,Math.ceil(Math.hypot(a-r,l-s)/Co));for(let d=0;d<=c;d++)if(n(r+(a-r)*d/c,s+(l-s)*d/c))return!0}return!1}function Ug({plot:e,card:t,traces:n,obstacles:o}){if(t.width<=0||t.height<=0||t.width>e.x1-e.x0-wt*2||t.height>e.y1-e.y0-wt*2)return;const r=e.x0+wt,s=e.x1-wt-t.width,a=e.y0+wt,l=e.y1-wt-t.height;return[{x:s,y:a},{x:r,y:l},{x:s,y:l},{x:r,y:a}].find(d=>{const u={x0:d.x-vn,y0:d.y-vn,x1:d.x+t.width+vn,y1:d.y+t.height+vn};return!n.some(f=>Wg(f,u))&&!o.some(f=>Bg(u,f))})}function Xg(e){const t=[],n=[];let o=!0;for(let r=e.y0;r<=e.y1+Co;r+=Co){const s=Math.min(r,e.y1);t.push(o?e.x0:e.x1,o?e.x1:e.x0),n.push(s,s),o=!o}return{cx:t,cy:n}}function Gg(e,t){return e?.includes(t)??!1}function _s(e,t){const{reckoned:n,spans:o}=e.data;return n?.some(r=>t>=r.from&&t<=r.to)?"modelled":o?.some(r=>t>=r.from&&t<=r.to&&r.status==="recorded")?"recorded":"measured"}function Yg(e){const{x:t,y:n,y2:o}=e.data;let r=!0;for(let a=0;a<t.length;a++)if(!Number.isFinite(t[a])||a>0&&t[a]<t[a-1]){r=!1;break}if(r)return e;const s=t.map((a,l)=>l).filter(a=>Number.isFinite(t[a])).sort((a,l)=>t[a]-t[l]||a-l);return{...e,data:{x:s.map(a=>t[a]),y:s.map(a=>n[a]),...o?{y2:s.map(a=>o[a])}:{}}}}function qg(e,t,n){const o=e.data.x,r=e.data.y,s=Math.min(o.length,r.length);if(s===0||t<o[0]||t>o[s-1])return null;let a=0,l=s-1;for(;a<l;){const m=a+l>>1;o[m]<t?a=m+1:l=m}const c=a,d=Math.max(0,c-1);if(o[c]!==t&&c>0&&Gg(e.data.breaks,c))return null;const u=t-o[d]<=o[c]-t?d:c;if(n!==void 0&&Math.abs(o[u]-t)>n)return null;const f=o[c]-o[d];if(e.readBetween&&f>0&&o[c]!==t){const m=r[d]+(r[c]-r[d])*(t-o[d])/f;return Number.isFinite(m)?{index:u,x:t,y:m,currency:_s(e,u)}:null}const x=r[u];if(!Number.isFinite(x))return null;const g=e.data.y2?.[u];return{index:u,x:o[u],y:x,...g!==void 0&&Number.isFinite(g)?{y2:g}:{},currency:_s(e,u)}}function Vg(e){const t=new Set;for(const n of e)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&t.add(o);return[...t].sort((n,o)=>n-o)}function Ss(e,t,n){if(e.length===0)return null;if(t===null)return e[e.length-1];let o=0,r=e.length-1;for(;o<r;){const a=o+r>>1;e[a]<t?o=a+1:r=a}let s=o+n;return e[o]!==t&&n>0&&(s-=1),e[Math.max(0,Math.min(e.length-1,s))]}function Kg({x:e,y:t,size:n,color:o,text:r}){const s=n/2,a=`M 0 ${-s} L ${s} ${s*.8} L ${-s} ${s*.8} Z`,l=`M -0.9 ${-s*.42} H 0.9 V ${s*.2} H -0.9 Z`,c=`M -0.9 ${s*.4} H 0.9 V ${s*.64} H -0.9 Z`;return i.jsx(Re,{text:r,focusable:!0,children:i.jsxs("g",{role:"img","aria-label":r,"data-limit-crossing":"",transform:`translate(${e} ${t})`,children:[i.jsx("title",{}),i.jsx("circle",{r:12,fill:"transparent"}),i.jsx("path",{d:`${a} ${l} ${c}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),i.jsx("path",{d:a,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function Bi(e,t,n){return n==="above"?e>=t:e<=t}function Zg({y:e,cx:t,cy:n,limit:o,limitY:r,bad:s,breaks:a=[],step:l=!1,minGapPx:c}){const d=(y,E,S)=>{if(!E)return{index:y,x:t[y],y:n[y],entered:!1};if(S===null)return{index:y,x:t[y],y:r,entered:!0};const R=n[y]-n[S],j=R===0?1:(r-n[S])/R;return{index:y,x:t[S]+(t[y]-t[S])*j,y:r,entered:!0}},u=new Set(a),f=[];let x=null,g=!1,m=!1,v=Number.NEGATIVE_INFINITY;for(let y=0;y<e.length;y++){if(!Number.isFinite(e[y])){x=null;continue}const E=Bi(e[y],o,s);if(E&&!m){const S=d(y,g,l||u.has(y)?null:x),R=f[f.length-1];R!==void 0&&S.x-v<c?R.spells++:f.push({...S,spells:1}),v=S.x}m=E,g=!0,x=y}return f}const Qg=1;function Jg(e,t,n,o,r){const s=n.to;if(s<1||s>=e.length)return!1;const a=o(e[s-1]),l=o(e[s]),c=r(t[s-1]),d=r(t[s]);return l>a?n.t.some((u,f)=>{const x=o(u),g=c+(d-c)*(x-a)/(l-a);return Math.abs(r(n.v[f])-g)>Qg}):!1}function fo(e,t,n,o){const r=t-e;if(r===0){const s=(n+o)/2;return()=>s}return s=>n+(s-e)/r*(o-n)}function Io(e,t,n=5){if(e===t)return Array.from({length:n},()=>e);const r=(t-e)/(n-1),s=10**Math.floor(Math.log10(r)),l=([1,2,2.5,5,10].find(x=>x*s>=r)??10)*s,c=Math.ceil(e/l)*l,d=[];for(let x=0;d.length<n;x++){const g=c+x*l;if(g>t+l*.01)break;d.push(g)}if(d.length>=2)return d;const u=Math.floor(e/l)*l,f=Math.ceil(t/l)*l;return f>u?[u,f]:[u,u+l]}function Wi(e,t){const n=Math.floor(e/1e3);if(t>=36e5){const s=Math.floor(n/3600),a=Math.floor(n%3600/60),l=n%60;return`${s}:${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")}`}const o=Math.floor(n/60),r=n%60;return`${o}:${String(r).padStart(2,"0")}`}function Ms(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let a=!1;for(let l=0;l<e.length;l++){if(!Kn(e[l],t[l])){a=!1;continue}const c=n(e[l]).toFixed(2),d=o(t[l]).toFixed(2),u=!a||r.includes(l);s.push(`${u?"M":"L"}${c},${d}`),a=!0,u&&Ui(e,t,l,r)&&s.push(`L${c},${d}`)}return s.join(" ")}function Kn(e,t){return Number.isFinite(e)&&Number.isFinite(t)}function Ui(e,t,n,o){return n+1>=e.length||o.includes(n+1)||!Kn(e[n+1],t[n+1])}function em(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let a=null;for(let l=0;l<e.length;l++){if(!Kn(e[l],t[l])){a=null;continue}const c=n(e[l]).toFixed(2),d=o(t[l]).toFixed(2);if(a===null||r.includes(l)){s.push(`M${c},${d}`),Ui(e,t,l,r)&&s.push(`L${c},${d}`),a=d;continue}s.push(`H${c}`),d!==a&&s.push(`V${d}`),a=d}return s.join(" ")}function tm(e,t,n,o,r,s=[],a=[],l=[]){if(e.length===0)return[];if(a.length===0&&l.length===0)return[{d:r(e,t,n,o,s)}];function c(v,y){const E=new Array(e.length);for(const S of v){const R=Math.min(e.length-1,S.to);for(let j=Math.max(0,S.from);j<=R;j++)E[j]=y(S)}return E}const d=c(a,v=>v.status),u=c(l,v=>v.basis),f=new Set(s),x=[];let g=0;const m=(v,y)=>{const E=v>0&&!f.has(v)?v-1:v,S=A=>A.slice(E,y+1),R=[];for(const A of s)A>E&&A<=y&&R.push(A-E);const j=r(S(e),S(t),n,o,R);j!==""&&x.push({status:d[v],basis:u[v],d:j})};for(let v=1;v<=e.length;v++)(v===e.length||d[v]!==d[g]||u[v]!==u[g])&&(m(g,v-1),g=v);return x}function Xi(e,t,n,o,r){if(e.length===0)return"";const s=Math.min(e.length,t.length,n.length),a=[];for(let c=0;c<s;c++)Kn(e[c],t[c])&&Number.isFinite(n[c])&&a.push(c);if(a.length===0)return"";const l=[];a.forEach((c,d)=>{const u=o(e[c]).toFixed(2),f=r(n[c]).toFixed(2);l.push(`${d===0?"M":"L"}${u},${f}`)});for(let c=a.length-1;c>=0;c--){const d=a[c],u=o(e[d]).toFixed(2),f=r(t[d]).toFixed(2);l.push(`L${u},${f}`)}return l.push("Z"),l.join(" ")}function nm(e,t,n,o){const r=[];for(const s of t){const{bandLo:a,bandHi:l,bandKind:c}=s;if(!a||!l||c===void 0)continue;const d=[];for(let f=s.from;f<=s.to&&f<e.length;f++)d.push(e[f]);const u=Xi(d,a,l,n,o);u!==""&&r.push({d:u,kind:c})}return r}function js(e,t,n,o){if(e===t){const d=(n+o)/2;return()=>d}const r=e>0?e:1e-9,s=t>r?t:r*10,a=Math.log10(r),c=Math.log10(s)-a;if(c===0){const d=(n+o)/2;return()=>d}return d=>{const u=d>0?d:r;return n+(Math.log10(u)-a)/c*(o-n)}}function om(e,t,n=5){if(!(e>0)||!(t>0)||t<=e)return Io(e,t,n);const o=Math.log10(e),r=Math.log10(t);if(r-o<1)return Io(e,t,n);const a=Math.ceil(o),l=Math.floor(r),c=Math.max(1,Math.ceil((l-a+1)/n)),d=[];for(let u=a;u<=l;u+=c)d.push(10**u);return d.length>0?d:[e,t]}const po=.86,Es=[[0,-1.15],[1.05,.8],[-1.05,.8]],As=.3,Pe={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:po,triangle:Es,outlineWidth:As,keylineWidth:.2,reach:Math.max(Math.hypot(po,po),...Es.map(([e,t])=>Math.hypot(e,t)))+As/2},rm={"aria-hidden":!0};function Gi(e,t,n,o){const r=Pe.squareHalf;return(e==="modelled"?Pe.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([a,l])=>[t+a*o,n+l*o])}const Yi=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function qi(e,t,n){const o=e==="current"?0:Pe.outlineWidth;return t*(o+2*n*Pe.keylineWidth)}function sm({x:e,y:t,r:n,state:o="current",keyline:r=!1}){const s=o==="current"?"":Gi(o,0,0,n).map(([a,l])=>`${a},${l}`).join(" ");return i.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...rm,children:[r&&Yi.map(({ring:a,color:l,widths:c})=>{const d={"data-vessel-keyline":a,fill:"none",stroke:l,strokeWidth:qi(o,n,c),strokeLinejoin:"round"};return o==="current"?i.jsx("circle",{r:n,...d},a):i.jsx("polygon",{points:s,...d},a)}),o==="current"?i.jsx("circle",{r:n,fill:Pe.color}):i.jsx("polygon",{points:s,fill:o==="lost"?"none":pe[o].color,stroke:o==="lost"?Pe.lost.color:Pe.color,strokeWidth:n*Pe.outlineWidth,strokeLinejoin:"round"})]})}function Sn(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function Vi(e,t,n,o,r){if(e.beginPath(),t==="current"){e.arc(n,o,r,0,Math.PI*2);return}Gi(t,n,o,r).forEach(([s,a],l)=>{l===0?e.moveTo(s,a):e.lineTo(s,a)}),e.closePath()}function am(e,t,n,o,r){e.save(),e.lineJoin="round";for(const{color:s,widths:a}of Yi)Vi(e,t,n,o,r),e.strokeStyle=s,e.lineWidth=qi(t,r,a),e.stroke();e.restore()}function im(e,t,n,o,r,s=4,{keyline:a=!1}={}){a&&am(t,n,o,r,s);const l=Sn(e,Pe.cssVar,Pe.fallback);if(t.save(),Vi(t,n,o,r,s),n==="current")t.fillStyle=l,t.fill();else{if(n!=="lost"){const c=pe[n];t.fillStyle=Sn(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=n==="lost"?Sn(e,Pe.lost.cssVar,Pe.lost.fallback):l,t.lineWidth=s*Pe.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function K1(e,t,n,o=4,r={}){const{held:s,modelled:a}=n;s!==void 0&&a!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=Sn(e,pe.modelled.cssVar,pe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(a.x,a.y),t.stroke(),t.restore());for(const l of["lost","held","current","modelled"]){const c=n[l];c!==void 0&&im(e,t,l,c.x,c.y,o,r)}}const At=56;function Ki(e,t,n,o){const r=Math.max(0,Math.min(t-1,Math.floor(n))),s=Math.max(0,Math.min(t-1,Math.floor(o))),a=Math.min(t-1,r+1),l=Math.min(t-1,s+1),c=Math.max(0,Math.min(1,n-r)),d=Math.max(0,Math.min(1,o-s)),u=e[s*t+r]+(e[s*t+a]-e[s*t+r])*c,f=e[l*t+r]+(e[l*t+a]-e[l*t+r])*c;return u+(f-u)*d}const Rs=400,lm=16,cm=8,Ts=.06,dm=3.3,um=.6,hm=60,fm=40,Cs=[6,12],Is=[48,96],bn=2;function go(e,t,n){const o=Math.max(0,Math.min(1,(n-e)/(t-e)));return o*o*(3-2*o)}function Ls(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Ps(e,t){const n=t/e,o=e<=t?.07:.09,r=dm**Math.exp(-((e-t)**2)/(2*o**2*t**2));return n**5*Math.exp(-1.25*n**4)*r}function Zi(e,t,n){if(!(e>0)||!(t>0)||!(n>0)||!Number.isFinite(e+t+n))return[];const o=Math.sqrt(n*2*Math.PI/Rs),r=Ps(o,o),s=[];for(let a=-bn;a<=lm*bn;a++){const l=Rs/2**(a/bn),c=l/e,d=go(Cs[0],Cs[1],c)*(1-go(Is[0],Is[1],c))*(1-go(t,2*t,l));if(d<=.001)continue;const u=2*Math.PI/l,f=Math.sqrt(n*u),x=Math.sqrt(Math.min(1,Ps(f,o)/r)),g=(f>=o?Ts:Ts*x)/Math.sqrt(bn),m=(hm+(Ls(a,1)-.5)*2*fm)*Math.PI/180;s.push({kx:u*Math.sin(m),ky:u*Math.cos(m),k:u,amplitude:g/u,omega:f,phase:Ls(a,2)*2*Math.PI,weight:d})}return s.slice(0,cm)}function pm(e,t,n,o){let r=0;for(const s of e)r+=s.weight*s.amplitude*Math.cos(s.kx*t+s.ky*n-s.omega*o+s.phase);return r}const Mn=Qi(-.25,.3,.92),gm=2.6,mm=Qi(Mn[0],Mn[1],Mn[2]+1),xm=.8,vm=3,bm=.95,ym=.35,wm=235,km=.5,$m=.35;function Qi(e,t,n){const o=Math.hypot(e,t,n);return[e/o,t/o,n/o]}function _m(e,t,n,o){const{east0:r,north0:s,dx:a,dy:l,seconds:c,colour:d,waves:u,isSea:f}=o,[x,g,m]=Mn,[v,y,E]=mm,S=u.length,R=new Float64Array(S*t),j=new Float64Array(S*t),A=new Float64Array(S*n),_=new Float64Array(S*n);for(let N=0;N<S;N++){const P=u[N];for(let q=0;q<t;q++){const Y=P.kx*(r+(q+.5)*a);R[N*t+q]=Math.cos(Y),j[N*t+q]=Math.sin(Y)}for(let q=0;q<n;q++){const Y=P.ky*(s-(q+.5)*l)-P.omega*c+P.phase;A[N*n+q]=Math.cos(Y),_[N*n+q]=Math.sin(Y)}}const C=new Float64Array(S),$=new Float64Array(S),I=u.map(N=>N.kx*N.weight*N.amplitude),D=u.map(N=>N.ky*N.weight*N.amplitude),G=u.map(N=>um*N.k*N.weight*N.amplitude);for(let N=0;N<n;N++)for(let P=0;P<t;P++){const q=(N*t+P)*4;if(f&&!f(P,N)){e[q+3]=0;continue}let Y=0,oe=0,ae=1;for(let V=0;V<S;V++){const we=R[V*t+P],ye=j[V*t+P],le=A[V*n+N],Z=_[V*n+N];C[V]=we*le-ye*Z,$[V]=ye*le+we*Z}for(let V=0;V<S;V++){const we=S>1?1+xm*C[(V+vm)%S]:1;Y-=I[V]*C[V]*we,oe-=D[V]*C[V]*we,ae-=G[V]*$[V]*we}const M=1/Math.sqrt(Y*Y+oe*oe+ae*ae),W=(Y*x+oe*g+ae*m)*M-m,ee=1+gm*W;let ue=0;const Oe=(Y*v+oe*y+ae*E)*M;if(Oe>bm){let V=Oe;for(let we=0;we<7;we++)V*=V;ue=255*ym*V}const be=Math.max(0,ee-1)*$m,he=Math.min(1,ee)*km;e[q]=d.r*he+(255-d.r*he)*be+ue,e[q+1]=d.g*he+(255-d.g*he)*be+ue,e[q+2]=d.b*he+(255-d.b*he)*be+ue,e[q+3]=wm}}function Os(e){const t=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function Sm(e,t){const n=Os(t),o=Math.max(e.r,e.g,e.b,1),r=c=>({r:Math.min(255,e.r*c),g:Math.min(255,e.g*c),b:Math.min(255,e.b*c)});let s=0,a=255/o;for(let c=0;c<32;c++){const d=(s+a)/2;Os(r(d))<n?s=d:a=d}const l=r((s+a)/2);return{r:Math.round(l.r),g:Math.round(l.g),b:Math.round(l.b)}}const Mm=192,jm=30,Em="--color-info-mark",Am=.42;function Rm(e,t){const n=e.view==="plan",o=t.scaleX,r=t.scaleYPrimary,s=1/(o(1)-o(0)),a=1/(r(1)-r(0)),l=E=>(E-o(0))*s,c=E=>(E-r(0))*a,d=Math.min(o(e.bounds.x0),o(e.bounds.x1)),u=Math.max(o(e.bounds.x0),o(e.bounds.x1)),f=Math.min(r(e.bounds.y0),r(e.bounds.y1)),x=Math.max(r(e.bounds.y0),r(e.bounds.y1)),g=n?d:Math.max(t.plotX0,d),m=n?u:Math.min(t.plotX1,u),v=n?f:Math.max(t.plotY0,f),y=n?x:Math.min(t.plotY1,x);return n&&(u<t.plotX0||d>t.plotX1||x<t.plotY0||f>t.plotY1)||!(m-g>=1&&y-v>=1)||!Number.isFinite(s+a)?null:{left:g,top:v,width:m-g,height:y-v,x0:l(g),x1:l(m),y0:c(y),y1:c(v)}}function Ns(e,t){if(!t)return null;e.fillStyle=t;const n=/^#([0-9a-f]{6})$/i.exec(String(e.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function Tm(e,t,n){const o=Ns(t,getComputedStyle(e).getPropertyValue(Em).trim());if(!o)return null;const r=n?Ns(t,n):null;return r?Sm(r,o):o}function Cm(e,t,n,o,r,s){const a=At,l=(n.x1-n.x0)/a,c=(n.y1-n.y0)/a,d=t.sea,u=o.scaleYPrimary(t.bounds.y0)<o.scaleYPrimary(t.bounds.y1),f=d&&d.size>1&&d.heights.length>=d.size*d.size?(g,m)=>{const v=u?m:a-1-m;return Ki(d.heights,d.size,g/(a-1)*(d.size-1),v/(a-1)*(d.size-1))<0}:void 0,x=e.createImageData(a,a);_m(x.data,a,a,{east0:t.origin.east+n.x0,north0:t.origin.north+n.y1,dx:l,dy:c,seconds:r,colour:s,waves:Zi(Math.max(l,c),n.x1-n.x0,t.gravity),isSea:f}),e.putImageData(x,0,0)}function Im(e,t,n,o,r){const{width:s,height:a}=e.canvas,l=Lm(t,n,s),c=l.length>1?(l[l.length-1]-l[0])/(l.length-1):n.x1-n.x0,d=Zi(c,n.x1-n.x0,t.gravity),u=(t.bearingDeg??90)*Math.PI/180,f=m=>(m-n.x0)/(n.x1-n.x0)*s,x=m=>(n.y1-m)/(n.y1-n.y0)*a;e.clearRect(0,0,s,a),e.beginPath(),l.forEach((m,v)=>{const y=pm(d,t.origin.east+m*Math.sin(u),t.origin.north+m*Math.cos(u),o);v===0?e.moveTo(f(m),x(y)):e.lineTo(f(m),x(y))});const g=`${r.r}, ${r.g}, ${r.b}`;e.strokeStyle=`rgba(${g}, 0.9)`,e.lineWidth=1,e.stroke(),e.lineTo(f(l[l.length-1]),a),e.lineTo(f(l[0]),a),e.closePath(),e.fillStyle=`rgba(${g}, ${Am})`,e.fill()}function Lm(e,t,n){const o=(e.samples??[]).filter(r=>r>t.x0&&r<t.x1);return e.samples&&e.samples.length>1?[t.x0,...o,t.x1]:Array.from({length:n+1},(r,s)=>t.x0+s/n*(t.x1-t.x0))}function Pm({layer:e,frame:t}){const n=Rm(e,t),o=p.useRef(null),r=p.useRef(null);r.current=n?{layer:e,at:n,frame:t}:null;const s=n?e.view==="plan"?At:Math.max(1,Math.min(Mm,Math.round(n.width))):0,a=n?e.view==="plan"?At:Math.max(1,Math.round(n.height*s/n.width)):0,l=e.tint;return p.useEffect(()=>{const c=o.current,d=c?.getContext("2d")??null;if(!c||!d||s===0||a===0)return;const u=Tm(c,d,l);if(!u)return;const f=()=>{const S=r.current;if(!S)return;const R=Date.now()/1e3;S.layer.view==="plan"?Cm(d,S.layer,S.at,S.frame,R,u):Im(d,S.layer,S.at,R,u)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let g=!0;const m=typeof IntersectionObserver=="function"?new IntersectionObserver(S=>{g=S.some(R=>R.isIntersecting)}):null;m?.observe(c);let v=Number.NEGATIVE_INFINITY,y=0;const E=S=>{y=requestAnimationFrame(E),!(!g||document.hidden||S-v<1e3/jm)&&(v=S,f())};return y=requestAnimationFrame(E),()=>{cancelAnimationFrame(y),m?.disconnect()}},[s,a,l]),n?i.jsx("g",{"aria-hidden":"true","data-plot-layer":e.id,"data-plot-layer-kind":"water",children:i.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:i.jsx("canvas",{ref:o,width:s,height:a,style:{display:"block",width:"100%",height:"100%",imageRendering:e.view==="plan"?"pixelated":"auto"}})})}):null}const Om={faint:.45,normal:.85,bright:1},Nm=1.5,Fm=5,Dm=.9,Ht=7,Bt=6,mo=10,Rt=9,Ze=12,zm=6.2,xo=4,Hm=9,Bm=13,Wm=.1,Zt={paintOrder:"stroke",strokeWidth:3,strokeLinejoin:"round"},vo=5,Um=.5,Xm=.5;function nt(e){return me[e.tone??"neutral"]}function nn(e){return Le[e.tone??"neutral"]}function Xe(e){return Om[e.emphasis??"normal"]}function Ye(e,t){return t.axis==="secondary"?e.scaleYSecondary:e.scaleYPrimary}function Gm(e){const t=e.axis==="secondary"?"secondary":"primary";switch(e.kind){case"series":return{xs:e.points.map(n=>n.x),ys:e.points.map(n=>n.y),axis:t};case"region":return{xs:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.x),ys:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.y),axis:t};case"rule":return e.along==="y"?{xs:[],ys:[e.value],axis:t}:{xs:[e.value],ys:[],axis:t};case"marker":case"annotation":return{xs:[e.at.x],ys:[e.at.y],axis:t};default:return{xs:[],ys:[],axis:t}}}const gr=5.8,kt=11,Fs=4;function Ym(e,t){const n=t.text.length*gr,{frame:o}=t,r=t.anchorX+t.gap,s=r+n<=o.plotX1-4?"start":"end",a=s==="start"?r:t.anchorX-t.gap,l=s==="start"?a:a-n,c=l+n,d=f=>e.some(x=>l<x.x1&&c>x.x0&&f-kt<x.y1&&f+2>x.y0);let u=t.anchorY+3;for(let f=0;f<Fs&&d(u);f++)u+=kt;if(d(u)){u=t.anchorY+3;for(let f=0;f<Fs&&d(u);f++)u-=kt}return u=Math.min(Math.max(u,o.plotY0+kt),o.plotY1-kt),e.push({x0:l,x1:c,y0:u-kt,y1:u+2}),{x:a,y:u,anchor:s}}function qm(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function Vm(e){if(e.length===0)return"";const t=[`M${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`];for(let n=1;n<e.length;n++)t.push(`H${e[n].x.toFixed(2)}`,`V${e[n].y.toFixed(2)}`);return t.join(" ")}function Ji(e,t,n){if(e.length===0)return[];const o=e[0],r=e[e.length-1],s=[...e];if(t==="right"||t==="left"){const a=t==="right"?n.plotX1:n.plotX0;s.push({x:a,y:r.y},{x:a,y:o.y})}else{const a=t==="above"?n.plotY0:n.plotY1;s.push({x:r.x,y:a},{x:o.x,y:a})}return s}function Km(e,t){const n=[];for(const o of e){if(o.kind==="relief"||o.kind==="water"){const a=Ye(t,o),{x0:l,y0:c,x1:d,y1:u}=o.bounds;n.push([{x:t.scaleX(l),y:a(c)},{x:t.scaleX(d),y:a(c)},{x:t.scaleX(d),y:a(u)},{x:t.scaleX(l),y:a(u)}]);continue}if(o.kind!=="region"||o.hatched)continue;const r=Ye(t,o),s=o.boundary.map(a=>({x:t.scaleX(a.x),y:r(a.y)}));if(!(s.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...s,...o.boundaryHigh.map(a=>({x:t.scaleX(a.x),y:r(a.y)})).reverse()])}else n.push(Ji(s,o.side,t))}return(o,r)=>n.some(s=>{let a=!1;for(let l=0,c=s.length-1;l<s.length;c=l++){const d=s[l],u=s[c];d.y>r!=u.y>r&&o<(u.x-d.x)*(r-d.y)/(u.y-d.y)+d.x&&(a=!a)}return a})}function Zm({layer:e,frame:t}){if(e.stops.length===0)return null;const n=Ye(t,e),o=e.along==="y"?t.plotY1-t.plotY0:t.plotX1-t.plotX0;if(o<=0)return null;const r=e.along==="y"?t.plotY0:t.plotX0,s=e.along==="y"?n:t.scaleX,a=e.maxOpacity??Xm,l=e.tint??nt(e),c=e.blur!==void 0?Math.ceil(e.blur*3):0,d=`plot-field-${e.id}-${t.uid}`,u=`plot-field-blur-${e.id}-${t.uid}`,f=e.along==="y"?t.plotY1:t.plotX1,x=e.stops.map(g=>({offset:(s(g.at)-r)/o*100,intensity:Math.max(0,Math.min(1,g.intensity))})).sort((g,m)=>g.offset-m.offset);return i.jsxs(i.Fragment,{children:[i.jsxs("defs",{children:[i.jsx("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:t.plotX0,y1:t.plotY0,x2:e.along==="x"?f:t.plotX0,y2:e.along==="y"?f:t.plotY0,children:x.map((g,m)=>i.jsx("stop",{offset:`${g.offset.toFixed(2)}%`,stopColor:l,stopOpacity:a*g.intensity},m))}),e.blur!==void 0&&i.jsx("filter",{id:u,children:i.jsx("feGaussianBlur",{stdDeviation:e.blur})})]}),i.jsx("rect",{"data-plot-layer":e.id,"data-plot-layer-kind":"field",x:t.plotX0-c,y:t.plotY0-c,width:t.plotX1-t.plotX0+2*c,height:t.plotY1-t.plotY0+2*c,fill:`url(#${d})`,filter:e.blur!==void 0?`url(#${u})`:void 0})]})}const Qm=6,$t=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function Jm(e){const t=Math.max(0,Math.min(1,e));for(let n=1;n<$t.length;n++)if(t<=$t[n][0]){const[o,r]=$t[n-1],[s,a]=$t[n],l=s>o?(t-o)/(s-o):0;return[Math.round(r[0]+(a[0]-r[0])*l),Math.round(r[1]+(a[1]-r[1])*l),Math.round(r[2]+(a[2]-r[2])*l)]}return $t[$t.length-1][1]}const ex=[150,156,160],tx=[200,80,70];function nx(e,t){if(t===3)return ex;if(t!==1&&t!==2)return e;const n=.3*e[0]+.59*e[1]+.11*e[2],o=(s,a,l)=>s+(l-s)*a,r=e.map(s=>o(o(s,.5,n),.06,235));return t===1?r:r.map((s,a)=>o(s,.3,tx[a]))}function ox(e,t){const n=2*(t-1),o=(e%n+n)%n;return o<t?o:n-o}function rx(e,t,n,o,r,s,a){const l=e[s*n+a],c=r?ox(l,o):l,[d,u,f]=nx(Jm(c/(o-1)),t[s*n+a]),x=a>0?e[s*n+a-1]:l,g=s>0?e[(s-1)*n+a]:l,m=x!==l||g!==l?.5:1;return`rgb(${Math.round(d*m)}, ${Math.round(u*m)}, ${Math.round(f*m)})`}function sx(e,t){const{bounds:n}=e,o=Ye(t,e),r=t.scaleX(n.x0),s=t.scaleX(n.x1),a=o(n.y0),l=o(n.y1),c=Math.abs(s-r)/At,d=Math.abs(l-a)/At;return!(c>0)||!(d>0)?null:{left:Math.min(r,s),top:Math.min(a,l),cellW:c,cellH:d,flipRows:a<l}}function ax(e,t){const{size:n,values:o}=e;if(!t||n<2||o.length<n*n)return null;const{left:r,top:s,cellW:a,cellH:l,flipRows:c}=t;let d=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;for(let j=0;j<n*n;j++){const A=o[j];if(!Number.isFinite(A))return null;A<d&&(d=A),A>u&&(u=A)}const f=u-d,x=e.bandMetres!=null&&e.bandMetres>0?e.bandMetres:null,g=e.veil,m=Math.max(2,e.bands??Qm),v=At,y=new Int16Array(v*v),E=new Uint8Array(v*v),S=g!=null&&g.length>=n*n;for(let j=0;j<v;j++)for(let A=0;A<v;A++){const _=A/(v-1)*(n-1),C=j/(v-1)*(n-1);S&&(E[j*v+A]=g[Math.round(C)*n+Math.round(_)]??0);const $=Ki(o,n,_,C);if(x!=null){y[j*v+A]=Math.floor($/x);continue}const I=f>0?($-d)/f:.5;y[j*v+A]=Math.max(0,Math.min(m-1,Math.floor(I*m)))}const R=[];for(let j=0;j<v;j++){const A=c?j:v-1-j;let _=0,C="";for(let $=0;$<=v;$++){const I=$<v?rx(y,E,v,m,x!=null,j,$):"";if($===0){C=I;continue}I===C&&$<v||(R.push(i.jsx("rect",{x:r+_*a,y:s+A*l,width:($-_)*a+.5,height:l+.5,fill:C},`${j}-${_}`)),_=$,C=I)}}return R}function ix({layer:e,frame:t}){const n=sx(e,t),{values:o,size:r,veil:s,bandMetres:a,bands:l}=e,{left:c,top:d,cellW:u,cellH:f,flipRows:x}=n??{},g=p.useMemo(()=>ax(e,n),[o,r,s,a,l,c,d,u,f,x]);return g?i.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:Xe(e),"aria-hidden":"true",children:g}):null}function lx({layer:e,frame:t}){const n=p.useId(),o=Ye(t,e),r=d=>({x:t.scaleX(d.x),y:o(d.y)}),s=e.boundary.map(r);if(s.length<2)return null;const a=e.side==="between"?[...s,...(e.boundaryHigh??[]).map(r).reverse()]:Ji(s,e.side,t);if(e.side==="between"&&!e.boundaryHigh)return null;const l=e.side==="right"?t.plotX1-4:e.side==="left"?t.plotX0+11:s[s.length-1].x,c=(t.plotY0+t.plotY1)/2;return i.jsxs(i.Fragment,{children:[e.hatched&&i.jsx("defs",{children:i.jsx("pattern",{id:n,width:vo,height:vo,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:i.jsx("line",{x1:0,y1:0,x2:0,y2:vo,stroke:nt(e),strokeWidth:1,strokeOpacity:e.opacity??Um})})}),i.jsx("polygon",{"data-plot-layer":e.id,"data-plot-layer-kind":"region","data-hatched":e.hatched?"":void 0,points:a.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:e.hatched?`url(#${n})`:nt(e),fillOpacity:e.hatched?void 0:e.opacity??Wm}),t.labels&&e.label&&i.jsx("text",{x:l,y:c,transform:`rotate(-90 ${l} ${c})`,textAnchor:"middle",fontSize:Hm,letterSpacing:"0.14em",fill:"var(--color-text-muted)",stroke:"var(--color-surface-raised)",...Zt,children:e.label})]})}function cx({layer:e,frame:t}){const n=Ye(t,e),o=e.points.map(s=>({x:t.scaleX(s.x),y:n(s.y)}));if(o.length===0)return null;const r=Nm*(e.weight??1);if(e.style==="scatter"){const s=e.radius===void 0?r:Math.abs(t.scaleX(e.radius)-t.scaleX(0));return i.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",fill:nt(e),opacity:Xe(e),children:o.map((a,l)=>i.jsx("circle",{cx:a.x,cy:a.y,r:s},l))})}return i.jsx("path",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",d:e.style==="step"?Vm(o):qm(o),fill:"none",stroke:nt(e),strokeOpacity:Xe(e),strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:e.dashed?"5 3.5":void 0})}function dx({layer:e,frame:t}){const n=Ye(t,e),o=e.dashed??!0,r=nt(e),s=e.along==="y",a=s?n(e.value):t.scaleX(e.value);return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"rule",x1:s?t.plotX0:a,x2:s?t.plotX1:a,y1:s?a:t.plotY0,y2:s?a:t.plotY1,stroke:r,strokeOpacity:Xe(e),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),t.labels&&e.label&&i.jsx("text",{x:s?t.plotX1-4:a+3,y:s?a-3:t.plotY0+10,textAnchor:s?"end":"start",fill:nn(e),fontSize:Rt,children:e.label})]})}function ux({layer:e,frame:t,placed:n}){const o=Ye(t,e),r=t.scaleX(e.at.x),s=o(e.at.y),a=e.across??"x",l=nt(e),c=t.labels&&e.label?Ym(n,{anchorX:r,anchorY:s,gap:Ht+3,text:e.label,frame:t}):null;return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"annotation",x1:a==="x"?r-Ht:r,x2:a==="x"?r+Ht:r,y1:a==="x"?s:s-Ht,y2:a==="x"?s:s+Ht,stroke:l,strokeOpacity:Xe(e),strokeWidth:1.75,strokeLinecap:"round"}),c&&e.label&&i.jsx("text",{x:c.x,y:c.y,textAnchor:c.anchor,fontSize:Rt,letterSpacing:"0.05em",fill:nn(e),fillOpacity:Xe(e),children:e.label})]})}function hx({layer:e,frame:t}){const n=Ye(t,e),o=t.scaleX(e.at.x),r=n(e.at.y)+(e.offsetPx??0),s=Fm*(e.scale??1),a=nt(e),l=e.shape??"dot",c={"data-plot-layer":e.id,"data-plot-layer-kind":"marker",opacity:Xe(e)},d=l==="none"?null:l==="vessel"?i.jsx("g",{...c,children:i.jsx(sm,{state:e.markState??"current",x:o,y:r,r:s*Dm,keyline:!0})}):l==="dot"?i.jsx("circle",{...c,cx:o,cy:r,r:s,fill:a,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):l==="ring"?i.jsx("circle",{...c,cx:o,cy:r,r:s,fill:"none",stroke:a,strokeWidth:1.5}):l==="cross"?i.jsx("path",{...c,d:`M${o-s},${r} L${o+s},${r} M${o},${r-s} L${o},${r+s}`,stroke:a,strokeWidth:1.5,strokeLinecap:"round"}):l==="chevron-up"||l==="chevron-down"?i.jsx("polyline",{...c,points:l==="chevron-up"?`${o-s},${r+s*.5} ${o},${r-s*.5} ${o+s},${r+s*.5}`:`${o-s},${r-s*.5} ${o},${r+s*.5} ${o+s},${r-s*.5}`,fill:"none",stroke:a,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null,u=(e.label?.length??0)*gr/2+3,f=l==="none"?Math.min(Math.max(o,t.plotX0+u),t.plotX1-u):o+s+3,x=l==="none"?Math.min(Math.max(r+3,t.plotY0+Rt+3),t.plotY1-4):r+3;return i.jsxs(i.Fragment,{children:[d,t.labels&&e.label&&i.jsx("text",{x:f,y:x,textAnchor:l==="none"?"middle":void 0,fontSize:Rt,fill:nn(e),fillOpacity:Xe(e),stroke:"var(--color-surface-raised)",...Zt,children:e.label})]})}function fx({layer:e,frame:t,row:n,edges:o}){const r=e.caption?2:1;if(e.anchor==="left-edge"||e.anchor==="right-edge"){const m=e.anchor==="left-edge"?t.plotX0+Bt+n*Ze:t.plotX1-Bt-n*Ze,v=t.plotY1-34;return i.jsx("text",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",x:m,y:v,transform:`rotate(-90 ${m} ${v})`,fontSize:Rt,letterSpacing:"0.14em",fill:nn(e),fillOpacity:Xe(e),stroke:"var(--color-surface-raised)",...Zt,children:e.text})}const s=e.anchor.startsWith("top"),a=e.anchor.endsWith("right"),l=m=>Bt+(m?Bm:0),c=a?t.plotX1-l(o.right):t.plotX0+l(o.left),d=n*(r*Ze+2),u=s?t.plotY0+Bt+mo+d:t.plotY1-Bt-d,f=u-Ze,x=Math.max(e.text.length*zm,(e.caption?.length??0)*gr)+2*xo,g=(s?u:u-(e.caption?Ze:0))-mo-1;return i.jsxs("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",textAnchor:a?"end":"start",children:[i.jsx("rect",{x:a?c-x+xo:c-xo,y:g,width:x,height:r*Ze+1,rx:3,fill:"var(--color-surface-raised)",fillOpacity:.8}),e.caption&&i.jsx("text",{x:c,y:s?u:f,fontSize:Rt,letterSpacing:"0.05em",fill:"var(--color-text-faint)",stroke:"var(--color-surface-raised)",...Zt,children:e.caption}),i.jsx("text",{x:c,y:e.caption&&s?u+Ze:u,fontSize:mo,fontWeight:700,fill:nn(e),fillOpacity:Xe(e),stroke:"var(--color-surface-raised)",...Zt,children:e.text})]})}const Ds={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},px={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function bo({layers:e,frame:t,pass:n}){const o=e.map((l,c)=>({layer:l,index:c})).filter(({layer:l})=>px[l.kind]===n).sort((l,c)=>Ds[l.layer.kind]-Ds[c.layer.kind]||(l.layer.z??0)-(c.layer.z??0)||l.index-c.index),r=new Map,s=[],a={left:e.some(l=>l.kind==="caption"&&l.anchor==="left-edge"||l.kind==="region"&&l.side==="left"&&!!l.label),right:e.some(l=>l.kind==="caption"&&l.anchor==="right-edge"||l.kind==="region"&&l.side==="right"&&!!l.label)};return i.jsx(i.Fragment,{children:o.map(({layer:l,index:c})=>{const d=`${l.id}-${c}`;switch(l.kind){case"relief":return i.jsx(ix,{layer:l,frame:t},d);case"water":return i.jsx(Pm,{layer:l,frame:t},d);case"field":return i.jsx(Zm,{layer:l,frame:t},d);case"region":return i.jsx(lx,{layer:l,frame:t},d);case"series":return i.jsx(cx,{layer:l,frame:t},d);case"rule":return i.jsx(dx,{layer:l,frame:t},d);case"annotation":return i.jsx(ux,{layer:l,frame:t,placed:s},d);case"marker":return i.jsx(hx,{layer:l,frame:t},d);case"caption":{const u=r.get(l.anchor)??0;return r.set(l.anchor,u+1),i.jsx(fx,{layer:l,frame:t,row:u,edges:a},d)}default:return null}})})}function gx(e){return e.map(t=>t.description).filter(t=>typeof t=="string"&&t.length>0)}const zs=11,yn=3,wn=4,Hs=(e,t)=>e.x0<t.x1&&t.x0<e.x1&&e.y0<t.y1&&t.y0<e.y1;function mx(e,t,n,o,r){let s=0,a=1;const l=n-e,c=o-t,d=[[-l,e-r.x0],[l,r.x1-e],[-c,t-r.y0],[c,r.y1-t]];for(const[u,f]of d){if(u===0&&f<0)return!1;if(u!==0){const x=f/u;u<0?s=Math.max(s,x):a=Math.min(a,x)}}return s<=a}function xx(e,t){for(let n=1;n<e.cx.length;n++){const o=[e.cx[n-1],e.cy[n-1],e.cx[n],e.cy[n]];if(o.every(Number.isFinite)&&mx(o[0],o[1],o[2],o[3],t))return!0}return!1}function vx({labels:e,plot:t,obstacles:n,traces:o}){const r=[],s=new Map;for(const a of e){const l={y0:a.lineY-yn-zs,y1:a.lineY-yn},c={y0:a.lineY+yn,y1:a.lineY+yn+zs},d={x0:t.x1-wn-a.width,x1:t.x1-wn},u={x0:t.x0+wn,x1:t.x0+wn+a.width},f=[{...d,...l,anchor:"end"},{...d,...c,anchor:"end"},{...u,...l,anchor:"start"},{...u,...c,anchor:"start"}];let x=null;for(const g of f){if(!(g.x0>=t.x0&&g.x1<=t.x1&&g.y0>=t.y0&&g.y1<=t.y1)||r.some(y=>Hs(g,y)))continue;const v=2*n.filter(y=>Hs(g,y)).length+o.filter(y=>xx(y,g)).length;(x===null||v<x.cost)&&(x={spot:g,cost:v})}if(x===null){s.set(a.id,null);continue}r.push(x.spot),s.set(a.id,{x:x.spot.anchor==="end"?x.spot.x1:x.spot.x0,y:x.spot.y1-2,anchor:x.spot.anchor})}return s}function bx(e,t,n,o="linear"){const r=n&&$x(t,n)?0:t;if(n&&o==="log")return Se(He(e,r),{decimals:Lo(e,r).decimals});if(!n)return Se(He(e,r),{decimals:0});const s=yx(e,n)?e:void 0;return Se(He(e,r),{decimals:_x(e,r,n,s),...s?{format:s}:{}})}function yx(e,t){const n=t.map(o=>Se(He(e,o),{decimals:jn}));return n.some((o,r)=>r>0&&o===n[r-1])}function wx(e,t){const n=new Set(t.map(o=>bx(e,o,t).replace(/^[\d.,\s-]+/,"")));return n.size===1?[...n][0]:void 0}function kx(e,t,n){const o=wx(t,n);if(o===void 0)return e;const r=Gl({magnitude:0,unit:t},{format:t}).symbol,s=` (${r})`;return r!==""&&e.endsWith(s)?`${e.slice(0,-s.length)} (${o})`:e}function $x(e,t){const n=t.length>1?Math.abs(t[1]-t[0]):0;return n>0&&Math.abs(e)<n*1e-6}const jn=3;function el(e){return{figure:Number.parseFloat(e.replace(/[^\d.-]/g,"")),unit:e.replace(/[\d.,\s-]/g,"")}}function Lo(e,t,n){const o=s=>el(Se(He(e,t),{decimals:s,...n?{format:n}:{}})),r=o(jn);for(let s=0;s<jn;s++)if(o(s).figure===r.figure)return{decimals:s,unit:r.unit};return{decimals:jn,unit:r.unit}}function _x(e,t,n,o){const r=Lo(e,t,o);let s=r.decimals;for(const a of n){const l=Lo(e,a,o);l.unit===r.unit&&(s=Math.max(s,l.decimals))}return s}function Z1(e){const t=el(Se(e,{decimals:3})),n=Math.abs(t.figure),o=Number.isFinite(n)&&n>0?Math.max(0,2-Math.floor(Math.log10(n))):0;return Se(e,{decimals:o})}function yo(e,t,n){for(let o=n;o<6;o++){const r=e.map(s=>(s/t).toFixed(o));if(r.every((s,a)=>a===0||s!==r[a-1]))return o}return 6}const Sx=4,kn=2,Mx=2.5;function jx(e,t){if(e.length===0)return!1;const n=e[e.length-1]-t;return n===0?!0:e.length===1?!1:Math.sign(e[0]-t)!==Math.sign(n)}function Ex(e,t){return e==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:t?e==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const Ax=(e,t)=>Wi(e-t[0],t[1]-t[0]),Q1=(e,t)=>Wi((e-t[0])*1e3,(t[1]-t[0])*1e3),wo={top:10,bottom:28,left:50};function tl(e,t,n){const o=(s,a,l)=>Math.max(s,Math.min(l,a)),r=o(30,Math.round(e*.18),wo.left);return{top:wo.top,right:n?r:o(14,Math.round(e*.07),20),bottom:t<150?20:wo.bottom,left:r}}const Bs=e=>e.length*6.5+6,Rx=4,Tx=.4,Cx=26,ct=14,Ix=160,Fe=16,$n=4,Lx=6,Wt=(e,t)=>Math.min(e.length*6+8,t);function Px(e,t){const n=[];let o=0,r=0;for(const s of e)r>0&&r+s>t&&(o+=1,r=0),n.push({row:o,x:r}),r+=s+Lx;return{rows:e.length===0?0:o+1,positions:n}}const Ws=4,Ox=.03;function ko(e,t){const n=Math.max(0,Math.floor(t/6));if(e.length<=n)return e;const o=e.lastIndexOf(" (");if(o>0&&e.length-o+4<=n){const r=n-(e.length-o)-3;return`${e.slice(0,r)}...${e.slice(o)}`}return n<4?"":`${e.slice(0,n-3)}...`}function Us(e,t){const n=e.split(/(?=M)/).filter(r=>r.length>0),o=[];for(const r of n){const s=[...r.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)];if(s.length<2)continue;const a=s[0],l=s[s.length-1];o.push(`${r.trim()} L${l[1]},${t} L${a[1]},${t} Z`)}return o.length>0?o.join(" "):null}function Nx(e,t,n,o,r=1){const s=[],a=Cx*Math.max(.5,Math.min(2,r));for(let l=e+a/2;l<t;l+=a)for(let c=n+a/2;c<o;c+=a)s.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return s}const Fx=120,Dx=90,zx=70,Hx=35,Bx=2,Wx=12,Xs=8,Ux=2,Qe=14,Fn=6,Dn=12,Xx=16,Gx=12,Yx=200,Gs=10,qx=.2,Ys=.6,qs="5 3",Vx=.15,Kx=.45,Zx="the value is inside the shaded region";function Qx(e){const t=[...e.data.y];(e.type??"line")==="band"&&e.data.y2&&t.push(...e.data.y2);for(const n of e.data.reckoned??[])n.bandLo&&n.bandHi&&t.push(...n.bandLo,...n.bandHi);for(const n of e.data.bridges??[])t.push(...n.v);return t.filter(Number.isFinite)}const Jx=1e-5,ev=1e-9;function tv({series:e,thresholds:t,yTickFormat:n}){const o=s=>s*Fn,r=[];for(const s of e)r.push(o(s.label.length)+8);for(const s of t){if(s.kind==="marker"&&!s.label)continue;const a=s.label??n(s.value);r.push(o(a.length)+Dn+8)}return Math.max(0,...r)+Wx}function nv({width:e,height:t,hasSecondary:n,series:o,thresholds:r}){const s=r.filter(u=>u.label);if(o.length===0||s.length===0)return!1;const a=Math.max(...o.map(u=>u.label.length*6+8)),l=Math.max(...s.map(u=>(u.label?.length??0)*Fn+Dn)),c=tl(e,t,n),d=e-c.left-c.right-ct-Xx;return a+l+Gx>d}function J1({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:r=Ax,yTickFormat:s=ov,yScalePrimary:a="linear",yScaleSecondary:l="linear",thresholds:c,legend:d="overlay",hideXAxis:u=!1,density:f="chart",spatial:x=!1,gridScale:g=1,layers:m,"aria-label":v,crosshair:y=!1,xKind:E="time",xReadFormat:S,xAxisLabel:R,yAxisLabel:j,ySecondaryAxisLabel:A,yTickUnit:_,card:C,cardForms:$=1,plotNotice:I,width:D,height:G}){const N=p.useId(),P=f==="compact",q=P?"none":d,Y=x,oe=Y||P,ae=y&&!oe&&e.some(h=>h.data.x.length>0),[M,W]=p.useState(null),[ee,ue]=p.useState(!1),[Oe,be]=p.useState(""),[he,V]=p.useState(null),[we,ye]=p.useState(null),le=we?.w===D&&we.h===G?we.form:0,[Z,xe]=p.useState(null),de=C!=null,ie=Z?.form===le?Z:null;p.useLayoutEffect(()=>{if(!he){xe(null);return}const h=()=>xe(k=>{const L={w:he.offsetWidth,h:he.offsetHeight,form:le};return k?.w===L.w&&k?.h===L.h&&k?.form===L.form?k:L});h();const b=new ResizeObserver(h);return b.observe(he),()=>b.disconnect()},[he,le]);const X=D,te=G,ke=e.filter(h=>h.axis==="primary"&&h.data.x.length>0),Ce=e.filter(h=>h.axis==="secondary"&&h.data.x.length>0),Q=Ce.length>0,ve=q!=="none"&&e.length>0||(c??[]).some(h=>h.label),ot=tv({series:e,thresholds:c??[],yTickFormat:s}),Be=de&&ie!==null&&ie.w+Xs<=Math.max(112,Math.ceil(ot)),an=oe||!ve?{placement:"overlay"}:Dg({width:X,height:te,contentWidth:ot,legendHeight:q==="none"?0:e.length*Fe+6,cardHeight:Be&&ie!==null?ie.h:0}),rt=an.placement==="overlay"&&!oe&&q!=="none"&&te>=Yx&&nv({width:X,height:te,hasSecondary:Q,series:e,thresholds:c??[]})?{placement:"below"}:an,$e=q!=="none"&&(rt.placement==="below"||rt.placement==="beside"&&rt.legendBelow),ft=$e?Px(e.map(h=>Wt(h.label,X-2*$n)),X-2*$n):{rows:0,positions:[]},Zn=ft.rows===0?0:ft.rows*Fe+4,mr=X>=Ix,xr=!oe&&!u&&!!R,vr=!oe&&mr&&!!j,br=!oe&&mr&&Q&&!!A,ln=Y?0:1,yr=oe?{top:ln,right:ln,bottom:ln,left:ln}:tl(X,te,Q),pt={...yr,bottom:yr.bottom+(xr?ct:0)+Zn},J=pt.top,re=te-pt.bottom,We=re-J,cn=p.useMemo(()=>{const h={primary:[],secondary:[]};for(const b of m??[]){const k=Gm(b);h[k.axis].push(...k.ys)}return h},[m]),gt=p.useMemo(()=>Vs(ke,n,a,cn.primary),[ke,n,a,cn]),mt=p.useMemo(()=>Vs(Ce,o,l,cn.secondary),[Ce,o,l,cn]),Me=a==="log"?js(gt[0],gt[1],re,J):fo(gt[0],gt[1],re,J),je=l==="log"?js(mt[0],mt[1],re,J):fo(mt[0],mt[1],re,J),wr=Math.max(2,Math.min(7,Math.round(We/Hx))),Qn=(h,b,k,L)=>{const O=Math.min(h,b),z=Math.max(h,b),T=(z-O)*1e-6||1e-6,U=se=>se>=O-T&&se<=z+T,ne=se=>L==="log"?om(O,z,se):Io(O,z,se);for(let se=k;se<=64;se*=2){const Ie=ne(se).filter(U);if(Ie.length<2)continue;if(Ie.length<=k)return Ie;const Ft=(Ie.length-1)/(k-1),hn=Array.from({length:k},(av,yl)=>Ie[Math.round(yl*Ft)]);return Array.from(new Set(hn))}return[O,z]},Ct=Qn(gt[0],gt[1],wr,a==="log"?"log":"linear"),dn=Q?Qn(mt[0],mt[1],wr,l==="log"?"log":"linear"):[],kr=(h,b)=>h.length===0?b:Math.max(b,Math.min(Math.round(X*Tx),Math.max(...h.map(k=>Bs(s(k,h))))+Rx)),Jn=oe?pt:{left:kr(Ct,pt.left)+(vr?ct:0),right:(Q?kr(dn,pt.right):pt.right)+(br?ct:0)},K=Jn.left,eo=rt.placement==="beside"?rt.columnWidth:0,ge=X-Jn.right-eo,Ee=ge-K,$r=X-eo-ct/2,st=Ee>=Fx&&We>=Dx,ce=eo>0?{x0:ge+(Q?Jn.right:0)+Xs,y0:J,x1:X-Ux,y1:re}:void 0,_r=q==="none"||ce||$e?[]:e.map((h,b)=>({x0:K+3,y0:J+6+b*Fe,x1:K+3+Wt(h.label,Ee-6),y1:J+6+b*Fe+13})),fe=fo(t[0],t[1],K,ge),nl=Math.max(2,Math.min(8,Math.round(Ee/zx))),It=Qn(t[0],t[1],nl,"linear"),ol=p.useMemo(()=>{const h=[],b=It.length-1;if(b<0)return h;const k=Bs,L=6,O=T=>{const U=It[T],ne=r(U,t,It),se=fe(U),Ie=k(ne),Ft=T===0?"start":T===b?"end":"middle",hn=Ft==="start"?se:Ft==="end"?se-Ie:se-Ie/2;return{x:se,text:ne,anchor:Ft,leftEdge:hn,rightEdge:hn+Ie}},z=O(0);if(h.push({x:z.x,text:z.text,anchor:z.anchor}),b>=1){const T=O(b);if(T.leftEdge>=z.rightEdge+L){let U=z.rightEdge;for(let ne=1;ne<b;ne++){const se=O(ne);se.leftEdge>=U+L&&se.rightEdge<=T.leftEdge-L&&(h.push({x:se.x,text:se.text,anchor:se.anchor}),U=se.rightEdge)}h.push({x:T.x,text:T.text,anchor:T.anchor})}}return h},[It,t,fe,r]),Sr=(h,b)=>{const k=new Set,L=h.length;if(L===0||(k.add(0),L===1))return k;const O=16,z=b(h[0]),T=b(h[L-1]);if(Math.abs(T-z)>=O){let U=z;for(let ne=1;ne<L-1;ne++){const se=b(h[ne]);Math.abs(se-U)>=O&&Math.abs(T-se)>=O&&(k.add(ne),U=se)}k.add(L-1)}return k},rl=Sr(Ct,Me),sl=Sr(dn,je),qe=p.useMemo(()=>e.filter(h=>h.data.x.length>0).map(h=>{const b=h.axis==="primary"?Me:je,k=h.type??"line";if(k==="band")return h.data.y2?{id:h.id,kind:"band",color:h.color,opacity:h.fillOpacity??qx,d:Xi(h.data.x,h.data.y,h.data.y2,fe,b)}:{id:h.id,kind:"noop"};if(k==="scatter"){const T=h.data.x.map((U,ne)=>({cx:fe(U),cy:b(h.data.y[ne])}));return{id:h.id,kind:"scatter",color:h.color,points:T}}const L=k==="step"?em:Ms,O=(h.data.bridges??[]).filter(T=>Jg(h.data.x,h.data.y,T,fe,b)),z=[...new Set([...h.data.breaks??[],...O.map(T=>T.to)])].sort((T,U)=>T-U);return{id:h.id,kind:"stroked",color:h.color,dashed:h.dashed??!1,uncertainty:nm(h.data.x,h.data.reckoned??[],fe,b),segments:tm(h.data.x,h.data.y,fe,b,L,z,h.data.spans,h.data.reckoned),modelled:O.map(T=>({basis:T.basis,d:Ms([h.data.x[T.to-1],...T.t,h.data.x[T.to]],[h.data.y[T.to-1],...T.v,h.data.y[T.to]],fe,b)})),tail:h.data.x.length>0&&(h.data.reckoned??[]).some(T=>T.to>=h.data.x.length-1)?{cx:fe(h.data.x[h.data.x.length-1]),cy:b(h.data.y[h.data.y.length-1])}:null,observed:[...new Set(O.flatMap(T=>[T.to-1,T.to]))].map(T=>({cx:fe(h.data.x[T]),cy:b(h.data.y[T])}))}}),[e,fe,Me,je]),at=p.useMemo(()=>c?c.map(h=>{const b=h.axis??"primary",k=e.filter(O=>O.axis===b&&O.type!=="band"&&!O.dashed),L=h.kind==="limit"?k.some(O=>{const z=O.data.y.filter(T=>Number.isFinite(T));return z.length>0&&Bi(z[z.length-1],h.value,h.bad)}):h.kind==="target"&&k.some(O=>jx(O.data.y,h.value));return{id:h.id,label:h.label,spokenLabel:h.spokenLabel,value:h.value,kind:h.kind,passed:L,currency:Bn(h.reading,{drawsReckoning:!0}),tone:Ex(h.kind,L),dashed:h.kind!=="marker",y:b==="primary"?Me(h.value):je(h.value)}}):[],[c,e,Me,je]),Lt=p.useMemo(()=>{const h=(b,k,L)=>Math.max(b,Math.min(L,k));return(c??[]).flatMap(b=>{if(b.kind!=="limit"||!Number.isFinite(b.value))return[];const k=b.axis??"primary",L=k==="primary"?Me:je,O=L(b.value),z=b.bad==="above"?-1:1,T=b.label||`the limit at ${s(b.value)}`;return e.filter(U=>U.axis===k&&U.data.x.length>0&&(U.type??"line")!=="band"&&!U.dashed).flatMap(U=>Zg({y:U.data.y,cx:U.data.x.map(fe),cy:U.data.y.map(L),limit:b.value,limitY:O,bad:b.bad,breaks:U.data.breaks,step:U.type==="step"||U.type==="scatter",minGapPx:Qe}).slice(st?0:-1).map(ne=>{const se=s(U.data.y[ne.index]),Ie=r(U.data.x[ne.index],t);return{key:`${b.id}-${U.id}-${ne.index}`,color:U.color,x:h(K+Qe/2+1,ne.x-Gs*(ne.entered?1:-1),ge-Qe/2-1),y:h(J+Qe/2+1,ne.y+z*Gs,re-Qe/2-1),text:ne.entered?ne.spells>1?`${U.label} went past ${T} ${ne.spells} times from ${Ie}, first reading ${se}`:`${U.label} went past ${T} at ${Ie}, reading ${se}`:`${U.label} was already past ${T} when this window began at ${Ie}, reading ${se}`}}))})},[c,e,fe,Me,je,r,s,t,K,ge,J,re,st]),_e=(()=>{if(!de||ie===null||oe)return;if(ce&&Be){const O={x0:ce.x0,y0:re-ie.h,x1:ce.x0+ie.w,y1:re},z=J+(q==="none"||$e?0:e.length*Fe+6);return O.x1<=ce.x1&&O.y0>=z?O:void 0}const h=Qe/2,b=[...e.filter(O=>(O.type??"line")!=="band").flatMap(O=>{const z=O.axis==="primary"?Me:je,T=O.data.x.map(fe),U=O.data.y.map(z);return O.type==="scatter"?T.map((ne,se)=>({cx:[ne],cy:[U[se]]})):[{cx:T,cy:U}]}),...at.map(O=>({cx:[K,ge],cy:[O.y,O.y]}))],k=[...Lt.map(O=>({x0:O.x-h,y0:O.y-h,x1:O.x+h,y1:O.y+h})),...q==="none"||ce||$e?[]:e.map((O,z)=>({x0:K+3,y0:J+6+z*16,x1:K+3+Math.min(O.label.length*6+8,Ee-6),y1:J+6+z*16+13}))],L=Ug({plot:{x0:K,y0:J,x1:ge,y1:re},card:{width:ie.w,height:ie.h},traces:b,obstacles:k});return L?{x0:L.x,y0:L.y,x1:L.x+ie.w,y1:L.y+ie.h}:void 0})(),xt=p.useMemo(()=>{if(!st)return new Map;const h=Qe/2;return vx({labels:at.filter(b=>b.label).map(b=>({id:b.id,width:(b.label?.length??0)*Fn+(b.currency.held?Dn:0),lineY:b.y})),plot:ce??{x0:K,y0:J,x1:ge,y1:re},obstacles:[..._e?[_e]:[],...Lt.map(b=>({x0:b.x-h,y0:b.y-h,x1:b.x+h,y1:b.y+h})),...q==="none"||$e?[]:e.map((b,k)=>({x0:ce?ce.x0:K+3,y0:J+6+k*Fe,x1:(ce?ce.x0:K+3)+Wt(b.label,ce?ce.x1-ce.x0:Ee-6),y1:J+6+k*Fe+13}))],traces:(ce?[]:e).filter(b=>(b.type??"line")!=="band").map(b=>({cx:b.data.x.map(fe),cy:b.data.y.map(b.axis==="primary"?Me:je)}))})},[st,_e,ce,at,Lt,q,$e,e,fe,Me,je,K,ge,J,re,Ee]),al=(()=>{const h=J+6;if(q==="none"||$e||e.length===0)return h;const b=ce?ce.x0:K+3,k=b+Math.max(...e.map(z=>Wt(z.label,ce?ce.x1-ce.x0:Ee-6))),L=at.flatMap(z=>{const T=xt.get(z.id);if(!z.label||!T)return[];const U=z.label.length*Fn+(z.currency.held?Dn:0),ne=T.anchor==="end"?T.x-U:T.x;return[{x0:ne,y0:T.y-9,x1:ne+U,y1:T.y+2}]});_e&&L.push(_e);const O=e.length*Fe-3;for(let z=h;z+O<=re;z+=Fe){const T={x0:b,y0:z,x1:k,y1:z+O};if(!L.some(U=>T.x0<U.x1&&U.x0<T.x1&&T.y0<U.y1&&U.y0<T.y1))return z}return h})(),il=e.flatMap(h=>{const b=qe.find(T=>T.id===h.id),k=b?.kind==="stroked"?b.modelled.map(T=>T.basis):[],L=h.data.reckoned??[];if(L.length===0&&k.length===0)return[];const z=[...new Set([...L.map(T=>T.basis),...k])].map(T=>`${h.label}: part of this trace is reckoned, ${Hg(T)}, not measured`);return L.some(T=>T.bandLo&&T.bandHi)&&z.push(`${h.label}: ${Zx}`),z}),ll=at.flatMap(h=>{const b=h.spokenLabel??h.label??h.id,k=[];return h.passed&&h.kind==="limit"&&k.push(`${b}: limit passed`),h.passed&&h.kind==="target"&&k.push(`${b}: target reached`),h.currency.held&&k.push(ei(b,h.currency.caption)),h.label&&!xt.get(h.id)&&k.length===0&&k.push(h.spokenLabel??h.label),k}),to=[...il,...ll],cl=[v??"Telemetry line chart",...gx(m??[]),...to].join("; "),no=p.useMemo(()=>e.filter(h=>h.data.x.length>0).map(h=>E==="value"?Yg(h):h),[e,E]),oo=p.useMemo(()=>ae?Vg(no):[],[ae,no]),Pt=Math.min(t[0],t[1]),Ot=Math.max(t[0],t[1]),dl=E==="value"?(Ot-Pt)*Ox:void 0;function Mr(h){const b=no.map(k=>{const L=qg(k,h,dl),O=k.format??s,z=k.axis==="primary"?Me:je,T=(k.type??"line")==="band";return L===null?{id:k.id,label:k.label,color:k.color,value:null}:{id:k.id,label:k.label,color:k.color,value:T&&L.y2!==void 0?`${O(L.y)} to ${O(L.y2)}`:O(L.y),currency:L.currency==="measured"?void 0:L.currency,modelled:L.currency==="modelled",y:T?void 0:z(L.y)}});if(st)for(const k of at)k.kind!=="marker"&&b.push({id:`threshold-${k.id}`,label:k.kind,color:k.tone.label,value:k.label??s(k.value),detail:!0,currency:k.currency.held?k.currency.mark==="modelled"?"modelled":"held":void 0,modelled:k.currency.held&&k.currency.mark==="modelled"});return{heading:(S??r)(h,t),rows:b}}function jr(h){const{heading:b,rows:k}=Mr(h);return[b,...k.map(L=>`${L.label} ${L.value??"no sample"}${L.currency?`, ${L.currency}`:""}`)].join("; ")}const Er=e.filter(h=>(h.type??"line")!=="band").map(h=>({cx:h.data.x.map(fe),cy:h.data.y.map(h.axis==="primary"?Me:je)})),Ar=_e?[...Er,Xg(_e)]:Er,Rr=de&&!oe&&ie!==null&&ie.w>0&&ie.h>0&&!_e&&le<$-1;p.useLayoutEffect(()=>{Rr&&ye({w:D,h:G,form:le+1})},[Rr,D,G,le]);const ul=h=>{let b=h,k=Number.POSITIVE_INFINITY;for(const L of oo)L<Pt||L>Ot||Math.abs(L-h)<k&&(k=Math.abs(L-h),b=L);return b},it=ae&&M!==null&&M.at>=Pt&&M.at<=Ot?ul(M.at):null,vt=it===null?null:Mr(it),Nt=vt!==null&&it!==null?Rg({x:fe(it),plot:{x0:K,y0:J,x1:ge,y1:re},heading:vt.heading,rows:vt.rows,avoid:_r,traces:Ar}):void 0,hl=_e!==void 0&&Nt!==void 0&&Nt.x0<_e.x1&&Nt.x1>_e.x0&&Nt.y0<_e.y1&&Nt.y1>_e.y0;function fl(h){const b=h.currentTarget.getBoundingClientRect(),k=h.clientX-b.left;return k<K||k>ge?null:t[0]+(k-K)/(ge-K)*(t[1]-t[0])}function pl(h){const b=fl(h);if(b===null){W(k=>k?.source==="pointer"?null:k);return}W({at:b,source:"pointer"})}function gl(h){const b=oo.filter(z=>z>=Pt&&z<=Ot),k={ArrowLeft:h.shiftKey?-10:-1,ArrowRight:h.shiftKey?10:1,Home:-b.length,End:b.length};if(h.key==="Escape"){if(M===null)return;h.preventDefault(),W(null),be("");return}const L=k[h.key];if(L===void 0)return;h.preventDefault();const O=Ss(b,it,L);O!==null&&(W({at:O,source:"keys"}),be(jr(O)))}function ml(h){try{ue(h.currentTarget.matches(":focus-visible"))}catch{ue(!0)}if(M!==null)return;const b=Ss(oo.filter(k=>k>=Pt&&k<=Ot),null,0);b!==null&&(W({at:b,source:"keys"}),be(jr(b)))}function xl(){ue(!1),W(h=>h?.source==="keys"?null:h),be("")}const vl=ae?{tabIndex:0,onPointerMove:pl,onPointerLeave:()=>W(h=>h?.source==="pointer"?null:h),onKeyDown:gl,onFocus:ml,onBlur:xl}:{},un={scaleX:fe,scaleYPrimary:Me,scaleYSecondary:je,plotX0:K,plotX1:ge,plotY0:J,plotY1:re,uid:N,labels:st},bl=Y&&m?Km(m,un):()=>!1,ro=`plot-layer-clip-${N}`,Tr=`plot-trace-clip-${N}`;if(Ee<=0||We<=0)return i.jsx("svg",{width:Math.max(0,X),height:Math.max(0,te),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:i.jsx("title",{children:"Chart too small to render"})});const Cr=i.jsxs("svg",{width:X,height:te,role:Lt.length>0||ae?"group":"img","aria-label":cl,"aria-describedby":ae?`${N}-crosshair-hint`:void 0,...vl,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...ae?{touchAction:"pan-y",outline:ee?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[i.jsxs("defs",{children:[i.jsx("clipPath",{id:ro,children:i.jsx("rect",{x:K,y:J,width:Ee,height:We})}),i.jsx("clipPath",{id:Tr,children:i.jsx("rect",{x:K-kn,y:J-kn,width:Ee+2*kn,height:We+2*kn})})]}),to.length>0&&i.jsx("title",{children:to.join("; ")}),i.jsx("rect",{x:K,y:J,width:Ee,height:We,fill:"var(--color-surface-panel)"}),m&&m.length>0&&i.jsx("g",{clipPath:`url(#${ro})`,children:i.jsx(bo,{layers:m,frame:un,pass:"background"})}),!oe&&Ct.map((h,b)=>{const k=Me(h);return i.jsxs(fn.Fragment,{children:[i.jsx("line",{x1:K,y1:k,x2:ge,y2:k,stroke:"var(--color-border-subtle)",strokeWidth:1}),rl.has(b)&&i.jsx("text",{x:K-4,y:k,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(h,Ct)})]},`py-${b}`)}),!oe&&dn.map((h,b)=>sl.has(b)?i.jsx("text",{x:ge+4,y:je(h),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(h,dn)},`sy-${b}`):null),!u&&!oe&&It.map((h,b)=>i.jsx("line",{x1:fe(h),y1:J,x2:fe(h),y2:re,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${b}`)),!u&&!oe&&ol.map((h,b)=>i.jsx("text",{x:h.x,y:re+14,textAnchor:h.anchor,fill:"var(--color-text-faint)",fontSize:11,children:h.text},`xl-${b}`)),xr&&i.jsx("text",{x:(K+ge)/2,y:te-Zn-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:ko(R,Ee)}),vr&&i.jsx("text",{x:ct/2,y:(J+re)/2,transform:`rotate(-90 ${ct/2} ${(J+re)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:ko(_&&a!=="log"?kx(j,_,Ct):j,We)}),br&&i.jsx("text",{x:$r,y:(J+re)/2,transform:`rotate(90 ${$r} ${(J+re)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:ko(A,We)}),Y&&Nx(K,ge,J,re,g).filter(h=>!bl(h.x,h.y)).map(h=>i.jsx("circle",{cx:h.x,cy:h.y,r:1,fill:"var(--color-text-faint)",opacity:.35},h.key)),!oe&&i.jsxs(i.Fragment,{children:[i.jsx("line",{x1:K,y1:J,x2:K,y2:re,stroke:"var(--color-border-strong)",strokeWidth:1}),i.jsx("line",{x1:K,y1:re,x2:ge,y2:re,stroke:"var(--color-border-strong)",strokeWidth:1}),Q&&i.jsx("line",{x1:ge,y1:J,x2:ge,y2:re,stroke:"var(--color-border-strong)",strokeWidth:1})]}),i.jsxs("g",{clipPath:`url(#${Tr})`,children:[qe.filter(h=>h.kind==="band").map(h=>i.jsx("path",{d:h.d,fill:h.color,fillOpacity:h.opacity,stroke:"none"},h.id)),qe.filter(h=>h.kind==="stroked").flatMap(h=>h.uncertainty.map((b,k)=>i.jsx("path",{d:b.d,"data-band-kind":b.kind,fill:h.color,fillOpacity:Vx,stroke:b.kind==="bound"?h.color:"none",strokeOpacity:b.kind==="bound"?Kx:void 0,strokeWidth:b.kind==="bound"?1:void 0},`${h.id}-band-${k}`))),qe.filter(h=>h.kind==="stroked").flatMap(h=>h.segments.map((b,k)=>i.jsxs(fn.Fragment,{children:[P&&b.basis===void 0&&Us(b.d,re)&&i.jsx("path",{d:Us(b.d,re)??void 0,fill:h.color,fillOpacity:.12,stroke:"none"}),i.jsx("path",{d:b.d,"data-stream-status":b.status,"data-reckoning-basis":b.basis,stroke:h.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:b.basis!==void 0?Ys:void 0,strokeDasharray:b.basis!==void 0?qs:h.dashed?"4 3":void 0})]},`${h.id}-${k}`))),qe.filter(h=>h.kind==="stroked").flatMap(h=>h.modelled.map((b,k)=>i.jsx("path",{d:b.d,"data-reckoning-basis":b.basis,stroke:h.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:Ys,strokeDasharray:qs},`${h.id}-modelled-${k}`))),qe.map(h=>h.kind==="stroked"&&h.tail!==null?i.jsx(zi,{kind:"modelled",x:h.tail.cx,y:h.tail.cy},`${h.id}-tail`):null),qe.filter(h=>h.kind==="stroked").flatMap(h=>h.observed.map((b,k)=>i.jsx("circle",{cx:b.cx,cy:b.cy,r:Mx,fill:h.color,"data-observed-sample":""},`${h.id}-observed-${k}`))),qe.filter(h=>h.kind==="scatter").flatMap(h=>h.points.map((b,k)=>i.jsx("circle",{cx:b.cx,cy:b.cy,r:Bx,fill:h.color},`${h.id}-${k}`)))]}),e.map(h=>{if(!h.headMark)return null;const b=h.axis==="primary"?Me:je;let k=h.data.x.length-1;for(;k>=0&&!(Number.isFinite(h.data.x[k])&&Number.isFinite(h.data.y[k]));)k-=1;return k<0?null:i.jsx("circle",{cx:fe(h.data.x[k]),cy:b(h.data.y[k]),r:Sx,fill:h.headMark==="dot"?h.color:"var(--color-surface-panel)",stroke:h.color,strokeWidth:h.headMark==="dot"?0:1.5,"data-head-mark":h.headMark},`${h.id}-head`)}),m&&m.length>0&&i.jsx("g",{clipPath:`url(#${ro})`,children:i.jsx(bo,{layers:m,frame:un,pass:"foreground"})}),at.map(h=>i.jsxs(fn.Fragment,{children:[i.jsx("line",{x1:K,y1:h.y,x2:P&&h.kind==="marker"?K+24:ge,y2:h.y,stroke:h.tone.line,strokeWidth:1,strokeDasharray:h.dashed?"4 3":void 0,"data-threshold-kind":h.kind,"data-threshold-passed":h.passed||void 0}),P&&h.kind==="marker"&&h.label&&i.jsx("text",{x:K+28,y:h.y+3.5,fill:h.tone.label,fontSize:10,children:h.label}),!(P&&h.kind==="marker")&&h.label&&xt.get(h.id)&&i.jsxs("text",{x:xt.get(h.id)?.x,y:xt.get(h.id)?.y,textAnchor:xt.get(h.id)?.anchor,fill:h.tone.label,fontSize:10,children:[h.label,h.currency.held&&i.jsx(Ao,{size:10,kind:h.currency.mark??"held"})]})]},h.id)),Lt.map(h=>i.jsx(Kg,{x:h.x,y:h.y,size:Qe,color:h.color,text:h.text},h.key)),q!=="none"&&e.map((h,b)=>{const k=$e?ft.positions[b]:void 0,L=k?te-Zn+2+k.row*Fe:al+b*Fe;if(!$e&&L+13>re)return null;const O=k?$n+k.x:ce?ce.x0:K+3,z=$e?X-2*$n:ce?ce.x1-ce.x0:Ee-6,T=Wt(h.label,z),U=Math.max(1,Math.floor((T-8)/6)),ne=h.label.length>U?`${h.label.slice(0,Math.max(1,U-1))}...`:h.label;return i.jsxs(fn.Fragment,{children:[i.jsx("rect",{x:O,y:L,width:T,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),i.jsx("text",{x:O+3,y:L+10,fill:h.color,fontSize:10,children:ne})]},h.id)}),m&&m.length>0&&st&&i.jsx(bo,{layers:m,frame:un,pass:"caption"}),vt!==null&&it!==null&&i.jsx(Tg,{x:fe(it),plot:{x0:K,y0:J,x1:ge,y1:re},heading:vt.heading,rows:vt.rows,avoid:_r,traces:Ar})]}),Ir=de?i.jsx("div",{ref:V,"data-plot-card":"",style:{position:"absolute",left:_e?.x0??0,top:_e?.y0??0,visibility:_e&&!hl?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof C=="function"?C({width:Ee-Ws*2,height:We-Ws*2,form:le}):C}):null,Lr=I?i.jsx("div",{"data-plot-notice":"",style:{position:"absolute",left:K,top:J,width:Ee,height:We,pointerEvents:"none"},children:I}):null;return ae?i.jsxs(i.Fragment,{children:[Cr,Ir,Lr,i.jsx(tt,{id:`${N}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),i.jsx(tt,{role:"status","aria-live":"polite",children:Oe})]}):i.jsxs(i.Fragment,{children:[Cr,Ir,Lr]})}function Vs(e,t,n,o=[]){if(t)return t;if(e.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let r=[...e.flatMap(Qx),...o.filter(Number.isFinite)];if(n==="log"&&(r=r.filter(c=>c>0)),r.length===0)return n==="log"?[1,10]:[0,1];let s=r[0],a=r[0];for(const c of r)c<s&&(s=c),c>a&&(a=c);const l=Math.max(Math.max(Math.abs(s),Math.abs(a))*Jx,ev);if((n==="linear"||n===void 0)&&a>s&&a-s<l){const c=(s+a)/2;return[c-l,c+l]}return[s,a]}function ov(e,t){if(e===0)return"0";const n=Math.abs(e);if(n>=1e6){const o=t?yo(t,1e6,1):1;return`${(e/1e6).toFixed(o)}M`}if(n>=1e3){const o=t?yo(t,1e3,1):1;return`${(e/1e3).toFixed(o)}k`}if(Number.isInteger(e))return String(e);if(n<.01){const o=Math.floor(Math.log10(n)),r=e/10**o;return Math.abs(r-1)<1e-9?`1e${o}`:`${r.toFixed(1)}e${o}`}return e.toFixed(t?yo(t,1,2):2)}const rv=p.createContext(null);function sv(e,t){const n=p.useContext(rv),o=n?.setFooter,r=n?.setDirty;p.useEffect(()=>(o?.(e),()=>o?.(null)),[o,e]),p.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function eb(e){const{onSave:t,value:n,saved:o,saveLabel:r="Save",extra:s,disabled:a}=e,l=p.useRef(null);l.current===null&&(l.current={v:n});const c=!_t(n,l.current.v)&&!_t(n,o),d=p.useRef(t);d.current=t;const u=p.useMemo(()=>i.jsxs(i.Fragment,{children:[s,i.jsx(hh,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:a,children:r})]}),[s,a,r]);sv(u,c)}export{tt as $,r1 as A,Cn as B,qv as C,Wv as D,yv as E,ph as F,jv as G,p1 as H,fh as I,Ev as J,Qv as K,Nv as L,Kv as M,Yv as N,Zv as O,G1 as P,Gv as Q,l1 as R,c1 as S,Dv as T,Li as U,j1 as V,Fv as W,Du as X,Jv as Y,k1 as Z,E1 as _,a1 as a,bp as a$,_t as a0,bv as a1,Gm as a2,Wn as a3,sv as a4,eb as a5,Q1 as a6,ht as a7,bc as a8,kv as a9,Dp as aA,Y1 as aB,zv as aC,Eo as aD,m1 as aE,x1 as aF,Rv as aG,Lh as aH,Tv as aI,Ao as aJ,v1 as aK,b1 as aL,y1 as aM,Cv as aN,Pv as aO,W1 as aP,Tg as aQ,pe as aR,mc as aS,Ra as aT,zi as aU,oh as aV,u1 as aW,d1 as aX,xc as aY,Bo as aZ,ri as a_,rv as aa,$i as ab,es as ac,Bn as ad,Na as ae,vc as af,Re as ag,Ko as ah,_v as ai,ut as aj,va as ak,gc as al,tf as am,i1 as an,L1 as ao,n1 as ap,Tf as aq,is as ar,yt as as,Uv as at,Qf as au,Jo as av,wv as aw,X1 as ax,H1 as ay,Mv as az,s1 as b,w1 as b$,Ea as b0,Lv as b1,P1 as b2,Pe as b3,sm as b4,Ro as b5,Et as b6,sr as b7,ii as b8,zo as b9,ei as bA,Fa as bB,Ba as bC,nc as bD,Hn as bE,Do as bF,U1 as bG,z1 as bH,ki as bI,f0 as bJ,rn as bK,Uf as bL,Bf as bM,Qo as bN,T1 as bO,J1 as bP,Z1 as bQ,bx as bR,I1 as bS,N1 as bT,Pf as bU,yf as bV,Gu as bW,Qu as bX,_h as bY,Vr as bZ,on as b_,ic as ba,Ho as bb,cc as bc,Mt as bd,li as be,ci as bf,Ql as bg,kh as bh,ia as bi,R1 as bj,Zo as bk,A1 as bl,wh as bm,q1 as bn,ys as bo,im as bp,K1 as bq,B1 as br,Dg as bs,C1 as bt,Rg as bu,V1 as bv,la as bw,Gn as bx,Hg as by,D1 as bz,Ov as c,$v as c0,O1 as c1,ts as c2,ui as c3,Sv as c4,F1 as c5,Iv as d,hh as e,t1 as f,o1 as g,e1 as h,Fu as i,$1 as j,Xv as k,S1 as l,gh as m,_1 as n,mp as o,M1 as p,Mp as q,g1 as r,f1 as s,Hv as t,Bv as u,h1 as v,Vv as w,Av as x,mh as y,zu as z};
