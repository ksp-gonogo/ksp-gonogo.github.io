import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-RRA14VTW.js";import{F as H,l as G,G as W,k as R,d as D,a2 as z,a3 as Y,aA as V,ak as X,V as B,Z as F,a4 as q}from"./vesselMark-NL1YiOJd.js";import{f as K,b as Z,o as J,k as Q,a as ee,S as te}from"./contributionsRead-Bwm1WoyH.js";import{f as ne,ak as re,I as oe,U as L,P as ie,i as se,H as ae}from"./ToggleButton-CLqNxvYn.js";import u,{css as x}from"./ext-styled-components-Br73TgY3.js";import{d as S,T,b as le}from"./streamStatusWord-Bv5F2eOK.js";import{X as ce,a0 as ue}from"./wrappedMap-B0VTo5oJ.js";import"./screen-Burh6l5F.js";import{ae as de,R as fe}from"./view-clock-formula-GxY15AX7.js";import"./lagrange-D4ULXZ2Z.js";import"./use-transmissions-bwdHl9u2.js";import{T as he}from"./tiny-size-BXC1Scz3.js";import"./ksp-enum-names-B5HO77Qr.js";function pe(){if(!("isSecureContext"in globalThis)||globalThis.isSecureContext!==!0)return{supported:!1,reason:"insecure-origin"};const e=typeof navigator>"u"?void 0:navigator.mediaDevices;return!e||typeof e.getUserMedia!="function"?{supported:!1,reason:"no-media-devices"}:{supported:!0}}function M(e,t){return e.label!==""?e.label:`Input ${t+1}, name withheld`}const ge=new Set(["NotAllowedError","PermissionDeniedError","SecurityError"]),ve=new Set(["NotFoundError","DevicesNotFoundError","OverconstrainedError","ConstraintNotSatisfiedError"]);function me(e){if(e instanceof Error&&e.name!=="")return e.name;if(typeof e=="object"&&e!==null&&"name"in e){const t=e.name;if(typeof t=="string"&&t!=="")return t}return"UnknownError"}function xe(e){return ge.has(e)?"refused":ve.has(e)?"no-device":"failed"}function k(e){for(const t of e.getTracks())t.stop()}function be(e){return e.getAudioTracks()[0]?.getSettings?.()?.deviceId??null}async function A(){const e=navigator.mediaDevices;if(!e||typeof e.enumerateDevices!="function")return[];try{return(await e.enumerateDevices()).filter(n=>n.kind==="audioinput"&&n.deviceId!=="").map(n=>({deviceId:n.deviceId,label:n.label}))}catch{return[]}}function ye(){const e=pe();return{status:e.supported?"unasked":e.reason,devices:[],deviceId:null,stream:null,failure:null}}function we(e={}){const[t,n]=c.useState(ye),o=c.useRef(null),a=c.useRef(null),l=c.useRef(!0),s=c.useRef(e);c.useEffect(()=>{s.current=e});const i=c.useCallback(()=>{const f=o.current;f&&(o.current=null,a.current=null,k(f),s.current.onStream?.(null))},[]),d=c.useCallback(f=>{const v=a.current,m=o.current!==null&&(v===null?f.length===0:!f.some(h=>h.deviceId===v));n(h=>h.status!=="ready"||!m?{...h,devices:f}:{...h,status:f.length===0?"no-device":"unasked",devices:f,deviceId:null,stream:null}),m&&i()},[i]);c.useEffect(()=>{const f=navigator.mediaDevices;if(!f)return;let v=!1;const m=()=>{A().then(h=>{v||d(h)})};return m(),f.addEventListener?.("devicechange",m),()=>{v=!0,f.removeEventListener?.("devicechange",m)}},[d]),c.useEffect(()=>(l.current=!0,()=>{l.current=!1,i()}),[i]);const p=c.useCallback(async f=>{const v=navigator.mediaDevices;if(!v||typeof v.getUserMedia!="function")return;n(h=>({...h,status:h.stream?h.status:"requesting",failure:null}));const m={...s.current.constraints,...f===null?{}:{deviceId:{exact:f}}};try{const h=await v.getUserMedia({audio:m});if(!l.current){k(h);return}const b=o.current;o.current=h,b&&b!==h&&k(b);const y=await A(),_=be(h)??f??y[0]?.deviceId,P=y.length>0?y:je(h,_);a.current=_??null,n({status:"ready",devices:P,deviceId:_??null,stream:h,failure:null}),s.current.onStream?.(h)}catch(h){if(!l.current)return;const b={name:me(h),deviceId:f};n(y=>y.stream?{...y,failure:b}:{status:xe(b.name),devices:y.devices,deviceId:null,stream:null,failure:b})}},[]),g=c.useCallback(()=>p(null),[p]),w=c.useCallback(f=>p(f),[p]),j=c.useCallback(()=>{i(),n(f=>({...f,status:f.status==="ready"?"unasked":f.status,deviceId:null,stream:null}))},[i]);return{...t,request:g,select:w,release:j}}function je(e,t){return t?[{deviceId:t,label:e.getAudioTracks()[0]?.label??""}]:[]}function Rt({label:e="Audio input",...t}){const n=we(t),o=c.useId(),a=ze(n);return r.jsxs(K,{gap:"related-dense",children:[r.jsx(ne,{tone:ke(n.status),live:!0,children:Ee(n)}),n.status==="ready"&&n.devices.length>0?r.jsxs(H,{children:[r.jsx(G,{htmlFor:o,children:e}),r.jsx(W,{id:o,value:n.deviceId??"",onChange:l=>{n.select(l.target.value)},children:n.devices.map((l,s)=>r.jsx("option",{value:l.deviceId,children:M(l,s)},l.deviceId))}),n.failure?r.jsx(R,{children:`The requested input did not open. The browser reported ${n.failure.name}, and the previous input is still running.`}):null]}):null,Se(n.status)?r.jsx(D,{type:"button",onClick:()=>{n.request()},disabled:n.status==="requesting","aria-busy":n.status==="requesting",children:"Request microphone access"}):null,a?r.jsx(R,{children:a}):null]})}function Se(e){return e==="unasked"||e==="requesting"||e==="failed"}const _e={"insecure-origin":"warn","no-media-devices":"nogo",unasked:"neutral",requesting:"info",refused:"nogo","no-device":"warn",failed:"nogo",ready:"go"};function ke(e){return _e[e]}function Ee(e){switch(e.status){case"insecure-origin":return"This page is not a secure origin. Microphone capture is available on https pages and on localhost.";case"no-media-devices":return"This browser exposes no media device interface, so no input can be opened here.";case"unasked":return N(e)?"Microphone access is granted for this origin. No input is open.":"Microphone access has not been requested for this origin.";case"requesting":return"A capture request is with the browser, which may be prompting for access.";case"refused":return"Microphone access was refused for this origin. The browser holds that answer in its site settings and returns it to any further request without prompting.";case"no-device":return"No audio input device is present.";case"failed":return`The input did not open. The browser reported ${e.failure?.name??"an unnamed error"}.`;case"ready":return`Capturing from ${$e(e)}.`}}function N(e){return e.devices.some(t=>t.label!=="")}function $e(e){const t=e.devices.findIndex(o=>o.deviceId===e.deviceId),n=t===-1?void 0:e.devices[t];return n?M(n,t):"an unnamed input"}function ze(e){if(e.status!=="unasked"||N(e))return null;const t=e.devices.length;return t===0?null:t===1?"One audio input is visible. Its name is withheld by the browser until access is granted.":`${t} audio inputs are visible. Their names are withheld by the browser until access is granted.`}const C=c.createContext(null);function Ft({settings:e,setAugmentSetting:t,children:n}){const o=c.useMemo(()=>({settings:e,setAugmentSetting:t}),[e,t]);return r.jsx(C.Provider,{value:o,children:n})}function At(e){const t=c.useContext(C),n=t?.settings,o=t?.setAugmentSetting;return c.useMemo(()=>({values:n?.[e]??Te,set:(a,l)=>o?.(e,a,l)}),[n,o,e])}function It(){return c.useContext(C)?.settings}const Te=Object.freeze({});function I(e){const t=e.trim().split(/\s+/).filter(Boolean);return t.length===0?"?":(t.length===1?Array.from(t[0]??"").slice(0,2):t.slice(0,2).map(o=>Array.from(o)[0]??"")).join("").toUpperCase()}const Ce=3;function Ot({items:e,max:t=Ce,label:n}){const o=Math.max(1,Math.floor(t)),a=e.length>o,l=a?e.slice(0,o-1):e,s=a?e.slice(o-1):[];return r.jsxs(Re,{$places:o,role:"group",...n===void 0?{}:{"aria-label":n},children:[l.map(i=>r.jsx(z,{text:i.name,announce:!1,focusable:i.onSelect===void 0,children:i.onSelect===void 0?r.jsx(E,{$tone:i.tone,role:"img","aria-label":i.name,children:I(i.name)}):r.jsx(E,{as:"button",type:"button",$tone:i.tone,"aria-label":i.name,onClick:i.onSelect,children:I(i.name)})},i.id)),s.length>0&&r.jsx(z,{text:s.map(i=>i.name).join(", "),announce:!1,focusable:!0,children:r.jsxs(E,{$tone:void 0,role:"img","aria-label":`${s.length} more: ${s.map(i=>i.name).join(", ")}`,children:["+",s.length]})})]})}const Re=u.div`
  /* Two insets short of a control, so a stack in a bordered control of that height always fits inside it. */
  --avatar-size: calc(var(--control-height) - 2 * var(--inset-avatar));
  /*
   * Initials are centred, so the later badge must leave the earlier one's
   * letters clear: the step is nearly the whole badge and only a sliver of
   * edge is covered.
   */
  --avatar-step: calc(var(--avatar-size) * 0.92);
  display: flex;
  align-items: center;
  flex: none;
  block-size: var(--avatar-size);
  /* One place is a whole avatar and every further one only its uncovered part. */
  inline-size: calc(
    var(--avatar-size) + (${({$places:e})=>e} - 1) * var(--avatar-step)
  );
`,E=u.span`
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: var(--avatar-size);
  block-size: var(--avatar-size);
  margin: 0;
  padding: 0;
  border: 1px solid ${({$tone:e})=>S[e??"neutral"]};
  border-radius: var(--radius-circle);
  background: var(--color-surface-raised);
  color: ${({$tone:e})=>T[e??"neutral"]};
  font: inherit;
  font-size: var(--font-size-caption);
  font-weight: 600;
  line-height: var(--line-height-flush);
  white-space: nowrap;
  /* Each avatar overlaps the one before it, which stays on top. */
  &:not(:first-child) {
    margin-inline-start: calc(var(--avatar-step) - var(--avatar-size));
  }
  &:is(button) {
    cursor: pointer;
  }
  ${Y}
  &:focus-visible {
    position: relative;
  }
`;function Dt({blocked:e=!1,flag:t,prompt:n,onSend:o,sendDisabled:a=!1,sendLabel:l="Send",sendVariant:s="icon",sendTooltip:i,children:d,...p}){const{anchor:g,tip:w}=V(i),j=c.useId();return r.jsxs(Fe,{$blocked:e,...p,children:[n!==void 0&&r.jsx(Ae,{"aria-hidden":"true",children:n}),d,o!==void 0&&r.jsxs(Ie,{...g,children:[r.jsx(Oe,{type:"button",disabled:a,onClick:o,$icon:s==="icon",...i?{"aria-describedby":j}:{},...s==="icon"?{"aria-label":l}:{},children:s==="icon"?r.jsx(X,{size:16}):l}),i&&r.jsx(B,{id:j,children:i.replace(`
`,". ")}),w]}),t!==void 0&&r.jsx(De,{$blocked:e,role:"status",children:t})]})}const Fe=u.div`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: var(--gap-composer);
  padding: var(--inset-field);
  background: var(--color-surface-panel);
  border: 1px solid
    ${({$blocked:e})=>e?"var(--color-nogo-text)":"var(--console-tone-fg, var(--color-accent-fg))"};
  border-radius: var(--radius-regular);
`,Ae=u.span`
  flex: 0 0 auto;
  color: var(--console-tone-fg, var(--color-accent-fg));
  font-weight: bold;
  margin-right: var(--gap-prompt-glyph);
`,Ie=u.span`
  display: inline-flex;

  /* A disabled button swallows pointer events, so they go to the anchor instead. */
  > button:disabled {
    pointer-events: none;
  }
`,Oe=u(D)`
  flex: 0 0 auto;
  margin-left: auto;
  font-size: var(--font-size-compact);

  ${({$icon:e})=>e&&x`
      /* The glyph centres in the box, and the inset is squared so the button is a square. */
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--inset-icon-button);
      /* The row's own outline tone, so the control reads as belonging to the row. */
      color: var(--console-tone-fg, var(--color-accent-fg));

      @media (pointer: coarse) {
        padding: var(--inset-icon-button-touch);
      }
    `}
`,De=u.div`
  position: absolute;
  /* Straddles the top border by half its own height, which tracks the font size. */
  top: 0;
  transform: translateY(-50%);
  /* The left end of the border: a console's delay reading takes the right end, and the two can show together. */
  left: var(--inset-console-foot);
  /* Local ordering against its row only, so not on the --z-* ladder. */
  z-index: 1;
  /* Overlaps the prompt glyph, so it must not eat a press aimed at the control under it. */
  pointer-events: none;
  padding: var(--inset-chip);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-caption);
  font-weight: bold;
  letter-spacing: 0.04em;
  border-radius: var(--radius-regular);

  ${({$blocked:e})=>e?x`
          color: var(--color-nogo-on-status);
          background: var(--color-nogo-status);
          border: 1px solid var(--color-nogo-on-status);
        `:x`
          color: var(--color-text-muted);
          background: var(--color-surface-panel);
          border: 1px solid var(--color-border-subtle);
        `}
`;function Be({tone:e="accent",queue:t,composer:n,standing:o,children:a,...l}){const s=t!==void 0||n!==void 0||o!==void 0,i=o!==void 0&&!!n;return r.jsxs(qe,{"data-console-frame":"",$tone:e,...l,children:[r.jsx(Le,{children:a}),s&&r.jsxs(Ne,{$straddled:i,children:[t,o!==void 0&&r.jsx(Me,{"data-console-standing":"",$straddle:i,children:o}),n]})]})}const qe=u.div`
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: var(--color-surface-panel);
  /* Subtle, not the tone: the accent belongs to the input's own border. */
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  overflow: hidden;

  ${({$tone:e})=>e==="info"?x`
          --console-tone-fg: var(--color-info-text);
        `:x`
          --console-tone-fg: var(--color-accent-fg);
        `}
`,Le=u.div`
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  display: flex;
`,Me=u.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: var(--gap-console-readings);
  /* Overlaps the composer's corner with nothing to click, so it must not take a press. */
  pointer-events: none;

  ${({$straddle:e})=>e?x`
          position: absolute;
          right: var(--inset-console-foot);
          top: var(--inset-console-foot-straddled);
          transform: translateY(-50%);
          z-index: 1;
        `:x`
          align-self: flex-end;
        `}
`,Ne=u.div`
  position: relative;
  flex: 0 0 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-console-foot);
  padding: var(--inset-console-foot);

  ${({$straddled:e})=>e&&x`
      padding-top: var(--inset-console-foot-straddled);
    `}
`,Ue="Uplink queue";function Bt({tone:e,oneWaySeconds:t=null,delayReading:n,canQueue:o=!0,alwaysBadge:a=!1,inFlight:l,inFlightFrozenAtDispatch:s=!1,composer:i,children:d,...p}){const g=re({oneWaySeconds:t,canQueue:o,alwaysBadge:a}),w=g==="badge"?t:null,j=l!==void 0&&(g==="strip"||s&&g!=="badge");return r.jsx(Be,{...e!==void 0?{tone:e}:{},...w!==null?{standing:r.jsx(ce,{oneWaySeconds:w,delayReading:n})}:{},...j?{queue:r.jsx(oe,{items:l,"aria-label":Ue})}:{},...i!==void 0?{composer:i}:{},...p,children:d})}function Pe({lit:e,of:t,tone:n="neutral",label:o}){const a=e===null?"unknown":`${e} of ${t}`;return r.jsx(He,{role:"img","aria-label":o===void 0?a:`${o} ${a}`,"data-level-bars":"",children:Array.from({length:t},(l,s)=>r.jsx(Ge,{$fill:e!==null&&s<e?S[n]:null,$height:(s+1)/t},s))})}const He=u.span`
  display: inline-flex;
  align-items: flex-end;
  gap: var(--gap-signal-bars);
  height: 0.8em;
  flex: none;
`,Ge=u.span`
  width: 0.22em;
  height: ${({$height:e})=>`${Math.round(e*100)}%`};
  background: ${({$fill:e})=>e??"transparent"};
  border: 1px solid ${({$fill:e})=>e??"var(--color-border-subtle)"};
`;function qt({label:e,description:t,value:n,className:o}){return r.jsxs(Ye,{className:o,children:[r.jsxs(Ve,{children:[r.jsx(Xe,{children:e}),t!=null&&r.jsx(Ke,{children:t})]}),r.jsx(Ze,{$prose:typeof n=="string",children:r.jsx(We,{value:n})})]})}function We({value:e}){return e==null?r.jsx(le,{}):typeof e=="object"?r.jsx(L,{value:e}):typeof e=="boolean"?e?"On":"Off":e}const Ye=u.dl`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--gap-field-term);
  margin: 0;
`,Ve=u.dt`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  min-width: 0;
  /* Grows into the space a short value leaves and yields to a long one. */
  flex: 1 1 auto;
`,Xe=u.span`
  font-size: var(--font-size-value);
  color: var(--color-text-primary);
`,Ke=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-dim);
  max-width: 32em;
`,Ze=u.dd`
  margin: 0;
  min-width: 0;
  text-align: right;
  font-size: var(--font-size-value);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-primary);

  /* A quantity never breaks from its symbol; a sentence wraps and takes at most half the row. */
  ${({$prose:e})=>e?`
          white-space: normal;
          max-width: 50%;
          text-align: left;
        `:"white-space: nowrap;"}
`;function Je(e,t){const n={w:0,h:0},o=s=>{n.w+=s?.w??0,n.h+=s?.h??0},a=s=>s.requires===void 0||t(s.requires);for(const s of new Set(e.augmentSlots??[]))for(const i of Q(s))a(i)&&o(i.sizeDelta);const l=new Set([...e.contributionSlots??[],...ee.map(s=>`${e.id}.${s}`)]);for(const s of l)for(const i of fe(s))a(i)&&o(i.sizeDelta);return n}function Lt(e,t){if(t.w===0&&t.h===0)return e;const n=o=>({w:o.w+t.w,h:o.h+t.h});return{...e,minSize:n(e.minSize??{w:1,h:1}),defaultSize:n(e.defaultSize??{w:3,h:3})}}function Mt(){const e=Z(),[t,n]=c.useReducer(o=>o+1,0);return c.useEffect(()=>{const o=[J(n),de(n),e?.subscribe(n)];return()=>{for(const a of o)a?.()}},[e]),c.useCallback(o=>Je(o,a=>e?.isAvailable(a)??!1),[e,t])}function Qe(e){return e===null||!e.capacity.isPositive()?null:e.amount.dividedBy(e.capacity).magnitude}function et({title:e,essentials:t}){const[n,...o]=t,{rowsRef:a,drawn:l}=tt(o),s=t.some(d=>d.urgent!==void 0),i=n!==void 0&&o.length===0&&n.label.toUpperCase()===e.toUpperCase();return r.jsx(ie,{panelTitle:e,fitToSize:!0,hoverTitle:!0,sections:r.jsxs(te,{full:!0,children:[r.jsx(F,{visuallyHidden:!0,children:st(t.filter(d=>d.urgent!==!0))}),s&&r.jsx(F,{visuallyHidden:!0,assertive:!0,additionsOnly:!0,children:at(t).map(d=>r.jsx(c.Fragment,{children:`${d}. `},d))}),n!==void 0&&r.jsxs(ut,{"data-tiny-essential":"",children:[i?r.jsx(B,{as:"dt",children:n.label}):r.jsx(O,{children:n.label}),n.gauge===void 0?r.jsx(U,{$tone:n.tone??"neutral",children:r.jsx($,{essential:n})}):r.jsxs(dt,{$tone:n.tone??"neutral",children:[r.jsx(ft,{children:r.jsx($,{essential:n})}),r.jsx(it,{essential:n,gauge:n.gauge})]})]}),o.length>0&&r.jsx(pt,{ref:a,children:o.slice(0,l).map(d=>r.jsxs(gt,{"data-tiny-essential":"",children:[r.jsx(O,{children:d.label}),r.jsx(vt,{$tone:d.tone??"neutral",children:r.jsx($,{essential:d})})]},d.label))})]})})}function tt(e){const t=c.useRef(null),[n,o]=c.useState(e.length),[a,l]=c.useState(0),s=e.map(i=>`${i.label}\0${i.word??nt(i.value)}`).join("");return c.useLayoutEffect(()=>{o(e.length)},[s,a,e.length]),c.useLayoutEffect(()=>{const i=t.current?.closest("[data-panel-fit-body]"),d=i?.firstElementChild;!i||!d||n===0||rt(d)>i.clientHeight&&o(n-1)}),c.useLayoutEffect(()=>{const i=t.current?.closest("[data-panel-fit-body]");if(!i||typeof ResizeObserver>"u")return;let d=i.clientHeight;const p=new ResizeObserver(()=>{i.clientHeight!==d&&(d=i.clientHeight,l(g=>g+1))});return p.observe(i),()=>p.disconnect()},[]),{rowsRef:t,drawn:n}}function nt(e){try{return JSON.stringify(e)??""}catch{return String(e)}}function rt(e){const t=[],n=[];for(const o of Array.from(e.querySelectorAll("[data-tiny-essential]"))){const a=o.getBoundingClientRect();t.push(a.top),n.push(a.bottom)}return t.length===0?0:Math.max(...n)-Math.min(...t)}function $({essential:e}){const{control:t}=e;return t!==void 0?r.jsx(z,{text:t.hint??t.title,children:r.jsx(se,{size:"sm",pressed:t.active,disabled:t.disabled,onClick:t.onPress,"aria-label":t.title,children:t.label})}):r.jsxs(r.Fragment,{children:[e.level!==void 0&&r.jsx(Pe,{lit:e.level.lit,of:e.level.of,tone:e.tone,label:e.label}),e.word!==void 0?e.word:r.jsx(ot,{essential:e})]})}function ot({essential:e}){const{mark:t,value:n,decimals:o}=e,{held:a}=q(n),l=r.jsx(L,{value:n,decimals:o,scale:"compact",elsewhere:t?.elsewhere===!0&&(a||t.kind===void 0)?t.caption:void 0});return t===void 0||a||t.kind===void 0?l:r.jsx(ae,{kind:t.kind,elsewhere:t.elsewhere,caption:t.caption,children:l})}function it({essential:e,gauge:t}){const{shown:n,held:o}=q(e.value),a=s=>Qe({amount:s.max(t.min).min(t.max).minus(t.min),capacity:t.max.minus(t.min)})??0,l=n==null?null:a(n);return r.jsxs(ht,{"aria-hidden":"true","data-tiny-gauge":"","data-held":o?"":void 0,viewBox:"0 0 100 1",preserveAspectRatio:"none",children:[(t.bands??[]).map(s=>r.jsx("rect",{x:a(s.from)*100,y:0,width:(a(s.to)-a(s.from))*100,height:1,fill:S[s.tone],opacity:.35},`${a(s.from)}-${a(s.to)}`)),l!==null&&r.jsx("rect",{"data-tiny-gauge-fill":"",x:0,y:0,width:l*100,height:1,fill:S[e.tone??"neutral"],opacity:o?.55:1})]})}function st(e){return e.filter(t=>t.word!==void 0).map(t=>`${t.label} ${t.word}`).join(", ")}function at(e){return e.filter(t=>t.urgent===!0&&t.word!==void 0).map(t=>`${t.label} ${t.word}`)}function Nt({def:e,...t}){if(e.tiny!==void 0&&lt(e,t.w,t.h))return r.jsx(ct,{tiny:e.tiny,props:t});const n=e.component;return r.jsx(n,{...t})}function lt(e,t,n){if(e.tiny===void 0||t===void 0||n===void 0)return!1;const o=e.minSize??ue;return t<o.w||n<o.h}function Ut(e){return e.tiny!==void 0?he:e.minSize}function ct({tiny:e,props:t}){const n=e.useEssentials(t);return r.jsx(et,{title:e.title,essentials:n})}const ut=u.dl`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: var(--gap-tiny-content);
  margin: 0;
  min-width: 0;
`,U=u.dd`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  margin: 0;
  /* Sized against the tile, which the fit body makes a query container. */
  font-size: clamp(
    var(--font-size-lg),
    20cqw,
    calc(var(--font-size-lg) * 2)
  );
  font-weight: 700;
  line-height: var(--line-height-tight);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({$tone:e})=>T[e]};
`,dt=u(U)`
  flex-direction: column;
  align-items: stretch;
  gap: var(--gap-caption);
  line-height: var(--line-height-flush);
`,ft=u.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--gap-figure-parts);
`,ht=u.svg`
  display: block;
  width: 100%;
  height: var(--size-tiny-gauge);
`,O=u.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
`,pt=u.dl`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-row-wrap);
  margin: 0;
  max-width: 100%;
`,gt=u.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  column-gap: var(--gap-label-value-tight);
  max-width: 100%;
`,vt=u.dd`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  margin: 0;
  font-size: var(--font-size-value);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({$tone:e})=>T[e]};
`;export{Rt as A,Dt as C,Pe as L,qt as R,et as T,Nt as W,Ft as a,Ot as b,Bt as c,pe as d,M as e,Je as f,Ut as g,we as h,I as i,At as j,Mt as k,lt as s,It as u,Lt as w};
