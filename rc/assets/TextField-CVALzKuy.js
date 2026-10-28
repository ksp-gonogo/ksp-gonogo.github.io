import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./ext-react-C0MU9AHG.js";import d,{ThemeProvider as L,css as x}from"./ext-styled-components-DAuodqsN.js";import{F as $,m as F,V as U,l as _,e as I,ad as C,af as P,aQ as V,$ as K,by as G,az as H,ab as Y,y as Q}from"./ModalSaveBar-J-Vh5Zgp.js";import{j as X,T as W,d as Z,h as J,b as ee,y as te,v as ne,a as oe,n as re}from"./contributionsRead-CAFhy6N7.js";import{d as se}from"./widgetSize-1uk0hw6X.js";import{Z as ae}from"./wrappedMap-DQJZm0Zt.js";import"./screen-zcBf4jWo.js";import{ai as ie,W as le}from"./view-clock-formula-u0Q0n9Ur.js";import"./lagrange-CZrjGnTW.js";import"./use-transmissions-Dg5gErMO.js";const O=[["--color-text-primary",e=>e.colors.text.primary],["--color-text-muted",e=>e.colors.text.muted],["--color-text-dim",e=>e.colors.text.dim],["--color-text-faint",e=>e.colors.text.faint],["--color-text-inverse",e=>e.colors.text.inverse],["--color-surface-app",e=>e.colors.surface.app],["--color-surface-panel",e=>e.colors.surface.panel],["--color-surface-raised",e=>e.colors.surface.raised],["--color-surface-sunken",e=>e.colors.surface.sunken],["--color-border-subtle",e=>e.colors.border.subtle],["--color-border-strong",e=>e.colors.border.strong],["--color-accent-fg",e=>e.colors.accent.fg],["--color-accent-bg",e=>e.colors.accent.bg],["--color-focus",e=>e.colors.focus],["--font-family-mono",e=>e.typography.family.mono],["--font-size-xs",e=>e.typography.size.xs],["--font-size-sm",e=>e.typography.size.sm],["--font-size-base",e=>e.typography.size.base],["--font-size-lg",e=>e.typography.size.lg]];function ce(e){const n={};for(const[t,o]of O){const i=o(e);i!==`var(${t})`&&(n[t]=i)}return n}const ue=O.map(([e])=>e);function ot({theme:e,children:n}){return l.useLayoutEffect(()=>{const t=document.documentElement;for(const[o,i]of Object.entries(ce(e)))t.style.setProperty(o,i);return()=>{for(const o of ue)t.style.removeProperty(o)}},[e]),r.jsx(L,{theme:e,children:n})}function de(){if(!("isSecureContext"in globalThis)||globalThis.isSecureContext!==!0)return{supported:!1,reason:"insecure-origin"};const e=typeof navigator>"u"?void 0:navigator.mediaDevices;return!e||typeof e.getUserMedia!="function"?{supported:!1,reason:"no-media-devices"}:{supported:!0}}function q(e,n){return e.label!==""?e.label:`Input ${n+1}, name withheld`}const fe=new Set(["NotAllowedError","PermissionDeniedError","SecurityError"]),pe=new Set(["NotFoundError","DevicesNotFoundError","OverconstrainedError","ConstraintNotSatisfiedError"]);function he(e){if(e instanceof Error&&e.name!=="")return e.name;if(typeof e=="object"&&e!==null&&"name"in e){const n=e.name;if(typeof n=="string"&&n!=="")return n}return"UnknownError"}function ge(e){return fe.has(e)?"refused":pe.has(e)?"no-device":"failed"}function z(e){for(const n of e.getTracks())n.stop()}function ve(e){return e.getAudioTracks()[0]?.getSettings?.()?.deviceId??null}async function T(){const e=navigator.mediaDevices;if(!e||typeof e.enumerateDevices!="function")return[];try{return(await e.enumerateDevices()).filter(t=>t.kind==="audioinput"&&t.deviceId!=="").map(t=>({deviceId:t.deviceId,label:t.label}))}catch{return[]}}function me(){const e=de();return{status:e.supported?"unasked":e.reason,devices:[],deviceId:null,stream:null,failure:null}}function be(e={}){const[n,t]=l.useState(me),o=l.useRef(null),i=l.useRef(null),c=l.useRef(!0),a=l.useRef(e);l.useEffect(()=>{a.current=e});const s=l.useCallback(()=>{const u=o.current;u&&(o.current=null,i.current=null,z(u),a.current.onStream?.(null))},[]),g=l.useCallback(u=>{const m=i.current,b=o.current!==null&&(m===null?u.length===0:!u.some(p=>p.deviceId===m));t(p=>p.status==="no-device"&&u.length>0?{...p,status:"unasked",devices:u}:p.status!=="ready"||!b?{...p,devices:u}:{...p,status:u.length===0?"no-device":"unasked",devices:u,deviceId:null,stream:null}),b&&s()},[s]);l.useEffect(()=>{const u=navigator.mediaDevices;if(!u)return;let m=!1;const b=()=>{T().then(p=>{m||g(p)})};return b(),u.addEventListener?.("devicechange",b),()=>{m=!0,u.removeEventListener?.("devicechange",b)}},[g]),l.useEffect(()=>(c.current=!0,()=>{c.current=!1,s()}),[s]);const v=l.useRef(0),f=l.useCallback(async u=>{const m=navigator.mediaDevices;if(!m||typeof m.getUserMedia!="function")return;const b=++v.current,p=()=>v.current!==b;t(h=>({...h,status:h.stream?h.status:"requesting",failure:null}));const N={...a.current.constraints,...u===null?{}:{deviceId:{exact:u}}};try{const h=await m.getUserMedia({audio:N});if(!c.current||p()){z(h);return}const y=o.current;o.current=h,y&&y!==h&&z(y);const w=await T();if(p())return;const k=ve(h)??u??w[0]?.deviceId,B=w.length>0?w:xe(h,k);i.current=k??null,t({status:"ready",devices:B,deviceId:k??null,stream:h,failure:null}),a.current.onStream?.(h)}catch(h){if(!c.current||p())return;const y={name:he(h),deviceId:u};t(w=>w.stream?{...w,failure:y}:{status:ge(y.name),devices:w.devices,deviceId:null,stream:null,failure:y})}},[]),S=l.useCallback(()=>f(null),[f]),j=l.useCallback(u=>f(u),[f]),M=l.useCallback(()=>{v.current++,s(),t(u=>({...u,status:u.status==="ready"||u.status==="requesting"?"unasked":u.status,deviceId:null,stream:null}))},[s]);return{...n,request:S,select:j,release:M}}function xe(e,n){return n?[{deviceId:n,label:e.getAudioTracks()[0]?.label??""}]:[]}function rt({label:e="Audio input",...n}){const t=be(n),o=l.useId(),i=ze(t);return r.jsxs(X,{gap:"related-dense",children:[r.jsx(se,{tone:Se(t.status),live:!0,children:je(t)}),t.status==="ready"&&t.devices.length>0?r.jsxs($,{children:[r.jsx(F,{htmlFor:o,children:e}),r.jsx(U,{id:o,value:t.deviceId??"",onChange:c=>{t.select(c.target.value)},children:t.devices.map((c,a)=>r.jsx("option",{value:c.deviceId,children:q(c,a)},c.deviceId))}),t.failure?r.jsx(_,{children:`The requested input did not open. The browser reported ${t.failure.name}, and the previous input is still running.`}):null]}):null,ye(t.status)?r.jsx(I,{type:"button",onClick:()=>{t.request()},disabled:t.status==="requesting","aria-busy":t.status==="requesting",children:"Request microphone access"}):null,i?r.jsx(_,{children:i}):null]})}function ye(e){return e==="unasked"||e==="requesting"||e==="failed"}const we={"insecure-origin":"warn","no-media-devices":"nogo",unasked:"neutral",requesting:"info",refused:"nogo","no-device":"warn",failed:"nogo",ready:"go"};function Se(e){return we[e]}function je(e){switch(e.status){case"insecure-origin":return"This page is not a secure origin. Microphone capture is available on https pages and on localhost.";case"no-media-devices":return"This browser exposes no media device interface, so no input can be opened here.";case"unasked":return D(e)?"Microphone access is granted for this origin. No input is open.":"Microphone access has not been requested for this origin.";case"requesting":return"A capture request is with the browser, which may be prompting for access.";case"refused":return"Microphone access was refused for this origin. The browser holds that answer in its site settings and returns it to any further request without prompting.";case"no-device":return"No audio input device is present.";case"failed":return`The input did not open. The browser reported ${e.failure?.name??"an unnamed error"}.`;case"ready":return`Capturing from ${ke(e)}.`}}function D(e){return e.devices.some(n=>n.label!=="")}function ke(e){const n=e.devices.findIndex(o=>o.deviceId===e.deviceId),t=n===-1?void 0:e.devices[n];return t?q(t,n):"an unnamed input"}function ze(e){if(e.status!=="unasked"||D(e))return null;const n=e.devices.length;return n===0?null:n===1?"One audio input is visible. Its name is withheld by the browser until access is granted.":`${n} audio inputs are visible. Their names are withheld by the browser until access is granted.`}const A=l.createContext(null);function st({settings:e,setAugmentSetting:n,children:t}){const o=l.useMemo(()=>({settings:e,setAugmentSetting:n}),[e,n]);return r.jsx(A.Provider,{value:o,children:t})}function at(e){const n=l.useContext(A),t=n?.settings,o=n?.setAugmentSetting;return l.useMemo(()=>({values:t?.[e]??Ee,set:(i,c)=>o?.(e,i,c)}),[t,o,e])}function it(){return l.useContext(A)?.settings}const Ee=Object.freeze({});function R(e){const n=e.trim().split(/\s+/).filter(Boolean);return n.length===0?"?":(n.length===1?Array.from(n[0]??"").slice(0,2):n.slice(0,2).map(o=>Array.from(o)[0]??"")).join("").toUpperCase()}const _e=3;function lt({items:e,max:n=_e,label:t}){const o=Math.max(1,Math.floor(n)),i=e.length>o,c=i?e.slice(0,o-1):e,a=i?e.slice(o-1):[];return r.jsxs(Ce,{$places:o,role:"group",...t===void 0?{}:{"aria-label":t},children:[c.map(s=>r.jsx(C,{text:s.name,announce:!1,focusable:s.onSelect===void 0,children:s.onSelect===void 0?r.jsx(E,{$tone:s.tone,role:"img","aria-label":s.name,children:R(s.name)}):r.jsx(E,{as:"button",type:"button",$tone:s.tone,"aria-label":s.name,onClick:s.onSelect,children:R(s.name)})},s.id)),a.length>0&&r.jsx(C,{text:a.map(s=>s.name).join(", "),announce:!1,focusable:!0,children:r.jsxs(E,{$tone:void 0,role:"img","aria-label":`${a.length} more: ${a.map(s=>s.name).join(", ")}`,children:["+",a.length]})})]})}const Ce=d.div`
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
`,E=d.span`
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: var(--avatar-size);
  block-size: var(--avatar-size);
  margin: 0;
  padding: 0;
  border: 1px solid ${({$tone:e})=>W[e??"neutral"]};
  border-radius: var(--radius-circle);
  background: var(--color-surface-raised);
  color: ${({$tone:e})=>Z[e??"neutral"]};
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
  ${P}
  &:focus-visible {
    position: relative;
  }
`;function ct({blocked:e=!1,flag:n,prompt:t,onSend:o,sendDisabled:i=!1,sendLabel:c="Send",sendVariant:a="icon",sendTooltip:s,children:g,...v}){const f=l.useId();return r.jsxs(Ae,{$blocked:e,...v,children:[t!==void 0&&r.jsx(Te,{"aria-hidden":"true",children:t}),g,o!==void 0&&r.jsxs(r.Fragment,{children:[r.jsx(C,{text:s,announce:!1,children:r.jsx(Re,{type:"button","aria-disabled":i||void 0,onClick:i?void 0:o,$icon:a==="icon",...s?{"aria-describedby":f}:{},...a==="icon"?{"aria-label":c}:{},children:a==="icon"?r.jsx(V,{size:16}):c})}),s&&r.jsx(K,{id:f,children:s.replaceAll(`
`,". ")})]}),n!==void 0&&r.jsx($e,{$blocked:e,role:"status",children:n})]})}const Ae=d.div`
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
`,Te=d.span`
  flex: 0 0 auto;
  color: var(--console-tone-fg, var(--color-accent-fg));
  font-weight: bold;
  margin-right: var(--gap-prompt-glyph);
`,Re=d(I)`
  flex: 0 0 auto;
  margin-left: auto;
  font-size: var(--font-size-compact);

  &[aria-disabled="true"] {
    opacity: 0.4;
    cursor: not-allowed;
  }

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
`,$e=d.div`
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
`;function Fe({tone:e="accent",queue:n,composer:t,standing:o,children:i,...c}){const a=n!==void 0||t!==void 0||o!==void 0,s=o!==void 0&&!!t;return r.jsxs(Ie,{"data-console-frame":"",$tone:e,...c,children:[r.jsx(Oe,{children:i}),a&&r.jsxs(De,{$straddled:s,children:[n,o!==void 0&&r.jsx(qe,{"data-console-standing":"",$straddle:s,children:o}),t]})]})}const Ie=d.div`
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
`,Oe=d.div`
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  display: flex;
`,qe=d.div`
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
`,De=d.div`
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
`,Me="Uplink queue";function ut({tone:e,oneWaySeconds:n=null,delayReading:t,canQueue:o=!0,alwaysBadge:i=!1,inFlight:c,inFlightFrozenAtDispatch:a=!1,composer:s,children:g,...v}){const f=G({oneWaySeconds:n,canQueue:o,alwaysBadge:i}),S=f==="badge"?n:null,j=c!==void 0&&(f==="strip"||a&&f!=="badge");return r.jsx(Fe,{...e!==void 0?{tone:e}:{},...S!==null?{standing:r.jsx(ae,{oneWaySeconds:S,delayReading:t})}:{},...j?{queue:r.jsx(H,{items:c,"aria-label":Me})}:{},...s!==void 0?{composer:s}:{},...v,children:g})}const dt=d.kbd`
  display: inline-block;
  padding: var(--inset-chip);
  border-radius: var(--radius-regular);
  border: 1px solid var(--color-border-subtle);
  background: var(--color-surface-panel);
  color: var(--color-text-primary);
  font-family: inherit;
  font-size: var(--font-size-caption);
  font-weight: 600;
  line-height: var(--line-height-body);
  white-space: nowrap;
`;function ft({label:e,description:n,value:t,className:o}){return r.jsxs(Be,{className:o,children:[r.jsxs(Le,{children:[r.jsx(Ue,{children:e}),n!=null&&r.jsx(Pe,{children:n})]}),r.jsx(Ve,{$prose:typeof t=="string",children:r.jsx(Ne,{value:t})})]})}function Ne({value:e}){return e==null?r.jsx(J,{}):typeof e=="object"?r.jsx(Y,{value:e}):typeof e=="boolean"?e?"On":"Off":e}const Be=d.dl`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--gap-field-term);
  margin: 0;
`,Le=d.dt`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  min-width: 0;
  /* Grows into the space a short value leaves and yields to a long one. */
  flex: 1 1 auto;
`,Ue=d.span`
  font-size: var(--font-size-value);
  color: var(--color-text-primary);
`,Pe=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-dim);
  max-width: 32em;
`,Ve=d.dd`
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
`;function Ke(e,n){const t={w:0,h:0},o=a=>{t.w+=a?.w??0,t.h+=a?.h??0},i=a=>a.requires===void 0||n(a.requires);for(const a of new Set(e.augmentSlots??[]))for(const s of ne(a))i(s)&&o(s.sizeDelta);const c=new Set([...e.contributionSlots??[],...oe.map(a=>`${e.id}.${a}`)]);for(const a of c)for(const s of le(a))i(s)&&o(s.sizeDelta);return t}function pt(e,n){if(n.w===0&&n.h===0)return e;const t=o=>({w:o.w+n.w,h:o.h+n.h});return{...e,minSize:t(e.minSize??{w:1,h:1}),defaultSize:t(e.defaultSize??{w:3,h:3}),...e.maxSize!==void 0?{maxSize:t(e.maxSize)}:{}}}function ht(){const e=ee(),[n,t]=l.useReducer(o=>o+1,0);return l.useEffect(()=>{const o=[te(t),ie(t),e?.subscribe(t)];return()=>{for(const i of o)i?.()}},[e]),l.useCallback(o=>Ke(o,i=>e?.isAvailable(i)??!1),[e,n])}function gt({label:e,value:n,onChange:t,invalid:o,placeholder:i,maxLength:c,disabled:a,"data-testid":s}){const g=l.useId(),v=`${g}-invalid`;return r.jsxs($,{children:[r.jsx(F,{htmlFor:g,children:e}),r.jsx(Q,{"aria-describedby":o==null?void 0:v,"aria-invalid":o==null?void 0:!0,"data-testid":s,disabled:a,id:g,maxLength:c,onChange:f=>t(f.target.value),placeholder:i,type:"text",value:n}),o!=null&&r.jsx(_,{id:v,children:r.jsx(re,{size:"xs",tone:"warn",children:o})})]})}export{rt as A,ct as C,dt as K,ft as R,gt as T,ot as U,st as a,lt as b,ut as c,de as d,q as e,be as f,at as g,ht as h,R as i,Ke as s,it as u,pt as w};
