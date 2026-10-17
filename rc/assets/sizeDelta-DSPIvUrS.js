import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./ext-react-RRA14VTW.js";import d,{ThemeProvider as N,css as m}from"./ext-styled-components-Br73TgY3.js";import{F as B,m as U,U as L,l as A,e as $,ad as _,aj as P,aM as V,_ as Y,bs as G,ay as H,ab as K}from"./ModalSaveBar-CzHUjX7j.js";import{l as X,T as Q,d as W,j as J,b as Z,B as ee,y as te,a as ne}from"./contributionsRead-CxcG1bnT.js";import{d as oe}from"./widgetSize-D5fJH9wY.js";import{Y as re}from"./wrappedMap-B8_dgzAv.js";import"./screen-Bix7t2XI.js";import{ah as se,W as ae}from"./view-clock-formula-DsCXgpUC.js";import"./lagrange-BgYhKf0B.js";import"./use-transmissions-CLvuYNs1.js";const F=[["--color-text-primary",e=>e.colors.text.primary],["--color-text-muted",e=>e.colors.text.muted],["--color-text-dim",e=>e.colors.text.dim],["--color-text-faint",e=>e.colors.text.faint],["--color-text-inverse",e=>e.colors.text.inverse],["--color-surface-app",e=>e.colors.surface.app],["--color-surface-panel",e=>e.colors.surface.panel],["--color-surface-raised",e=>e.colors.surface.raised],["--color-surface-sunken",e=>e.colors.surface.sunken],["--color-border-subtle",e=>e.colors.border.subtle],["--color-border-strong",e=>e.colors.border.strong],["--color-accent-fg",e=>e.colors.accent.fg],["--color-accent-bg",e=>e.colors.accent.bg],["--color-focus",e=>e.colors.focus],["--font-family-mono",e=>e.typography.family.mono],["--font-size-xs",e=>e.typography.size.xs],["--font-size-sm",e=>e.typography.size.sm],["--font-size-base",e=>e.typography.size.base],["--font-size-lg",e=>e.typography.size.lg]];function ie(e){const n={};for(const[t,o]of F){const i=o(e);i!==`var(${t})`&&(n[t]=i)}return n}const ce=F.map(([e])=>e);function tt({theme:e,children:n}){return l.useLayoutEffect(()=>{const t=document.documentElement;for(const[o,i]of Object.entries(ie(e)))t.style.setProperty(o,i);return()=>{for(const o of ce)t.style.removeProperty(o)}},[e]),r.jsx(N,{theme:e,children:n})}function le(){if(!("isSecureContext"in globalThis)||globalThis.isSecureContext!==!0)return{supported:!1,reason:"insecure-origin"};const e=typeof navigator>"u"?void 0:navigator.mediaDevices;return!e||typeof e.getUserMedia!="function"?{supported:!1,reason:"no-media-devices"}:{supported:!0}}function I(e,n){return e.label!==""?e.label:`Input ${n+1}, name withheld`}const ue=new Set(["NotAllowedError","PermissionDeniedError","SecurityError"]),de=new Set(["NotFoundError","DevicesNotFoundError","OverconstrainedError","ConstraintNotSatisfiedError"]);function fe(e){if(e instanceof Error&&e.name!=="")return e.name;if(typeof e=="object"&&e!==null&&"name"in e){const n=e.name;if(typeof n=="string"&&n!=="")return n}return"UnknownError"}function pe(e){return ue.has(e)?"refused":de.has(e)?"no-device":"failed"}function z(e){for(const n of e.getTracks())n.stop()}function he(e){return e.getAudioTracks()[0]?.getSettings?.()?.deviceId??null}async function R(){const e=navigator.mediaDevices;if(!e||typeof e.enumerateDevices!="function")return[];try{return(await e.enumerateDevices()).filter(t=>t.kind==="audioinput"&&t.deviceId!=="").map(t=>({deviceId:t.deviceId,label:t.label}))}catch{return[]}}function ge(){const e=le();return{status:e.supported?"unasked":e.reason,devices:[],deviceId:null,stream:null,failure:null}}function ve(e={}){const[n,t]=l.useState(ge),o=l.useRef(null),i=l.useRef(null),u=l.useRef(!0),a=l.useRef(e);l.useEffect(()=>{a.current=e});const s=l.useCallback(()=>{const c=o.current;c&&(o.current=null,i.current=null,z(c),a.current.onStream?.(null))},[]),w=l.useCallback(c=>{const g=i.current,v=o.current!==null&&(g===null?c.length===0:!c.some(f=>f.deviceId===g));t(f=>f.status==="no-device"&&c.length>0?{...f,status:"unasked",devices:c}:f.status!=="ready"||!v?{...f,devices:c}:{...f,status:c.length===0?"no-device":"unasked",devices:c,deviceId:null,stream:null}),v&&s()},[s]);l.useEffect(()=>{const c=navigator.mediaDevices;if(!c)return;let g=!1;const v=()=>{R().then(f=>{g||w(f)})};return v(),c.addEventListener?.("devicechange",v),()=>{g=!0,c.removeEventListener?.("devicechange",v)}},[w]),l.useEffect(()=>(u.current=!0,()=>{u.current=!1,s()}),[s]);const b=l.useRef(0),h=l.useCallback(async c=>{const g=navigator.mediaDevices;if(!g||typeof g.getUserMedia!="function")return;const v=++b.current,f=()=>b.current!==v;t(p=>({...p,status:p.stream?p.status:"requesting",failure:null}));const D={...a.current.constraints,...c===null?{}:{deviceId:{exact:c}}};try{const p=await g.getUserMedia({audio:D});if(!u.current||f()){z(p);return}const x=o.current;o.current=p,x&&x!==p&&z(x);const y=await R();if(f())return;const k=he(p)??c??y[0]?.deviceId,M=y.length>0?y:me(p,k);i.current=k??null,t({status:"ready",devices:M,deviceId:k??null,stream:p,failure:null}),a.current.onStream?.(p)}catch(p){if(!u.current||f())return;const x={name:fe(p),deviceId:c};t(y=>y.stream?{...y,failure:x}:{status:pe(x.name),devices:y.devices,deviceId:null,stream:null,failure:x})}},[]),S=l.useCallback(()=>h(null),[h]),j=l.useCallback(c=>h(c),[h]),q=l.useCallback(()=>{b.current++,s(),t(c=>({...c,status:c.status==="ready"||c.status==="requesting"?"unasked":c.status,deviceId:null,stream:null}))},[s]);return{...n,request:S,select:j,release:q}}function me(e,n){return n?[{deviceId:n,label:e.getAudioTracks()[0]?.label??""}]:[]}function nt({label:e="Audio input",...n}){const t=ve(n),o=l.useId(),i=je(t);return r.jsxs(X,{gap:"related-dense",children:[r.jsx(oe,{tone:ye(t.status),live:!0,children:we(t)}),t.status==="ready"&&t.devices.length>0?r.jsxs(B,{children:[r.jsx(U,{htmlFor:o,children:e}),r.jsx(L,{id:o,value:t.deviceId??"",onChange:u=>{t.select(u.target.value)},children:t.devices.map((u,a)=>r.jsx("option",{value:u.deviceId,children:I(u,a)},u.deviceId))}),t.failure?r.jsx(A,{children:`The requested input did not open. The browser reported ${t.failure.name}, and the previous input is still running.`}):null]}):null,be(t.status)?r.jsx($,{type:"button",onClick:()=>{t.request()},disabled:t.status==="requesting","aria-busy":t.status==="requesting",children:"Request microphone access"}):null,i?r.jsx(A,{children:i}):null]})}function be(e){return e==="unasked"||e==="requesting"||e==="failed"}const xe={"insecure-origin":"warn","no-media-devices":"nogo",unasked:"neutral",requesting:"info",refused:"nogo","no-device":"warn",failed:"nogo",ready:"go"};function ye(e){return xe[e]}function we(e){switch(e.status){case"insecure-origin":return"This page is not a secure origin. Microphone capture is available on https pages and on localhost.";case"no-media-devices":return"This browser exposes no media device interface, so no input can be opened here.";case"unasked":return O(e)?"Microphone access is granted for this origin. No input is open.":"Microphone access has not been requested for this origin.";case"requesting":return"A capture request is with the browser, which may be prompting for access.";case"refused":return"Microphone access was refused for this origin. The browser holds that answer in its site settings and returns it to any further request without prompting.";case"no-device":return"No audio input device is present.";case"failed":return`The input did not open. The browser reported ${e.failure?.name??"an unnamed error"}.`;case"ready":return`Capturing from ${Se(e)}.`}}function O(e){return e.devices.some(n=>n.label!=="")}function Se(e){const n=e.devices.findIndex(o=>o.deviceId===e.deviceId),t=n===-1?void 0:e.devices[n];return t?I(t,n):"an unnamed input"}function je(e){if(e.status!=="unasked"||O(e))return null;const n=e.devices.length;return n===0?null:n===1?"One audio input is visible. Its name is withheld by the browser until access is granted.":`${n} audio inputs are visible. Their names are withheld by the browser until access is granted.`}const C=l.createContext(null);function ot({settings:e,setAugmentSetting:n,children:t}){const o=l.useMemo(()=>({settings:e,setAugmentSetting:n}),[e,n]);return r.jsx(C.Provider,{value:o,children:t})}function rt(e){const n=l.useContext(C),t=n?.settings,o=n?.setAugmentSetting;return l.useMemo(()=>({values:t?.[e]??ke,set:(i,u)=>o?.(e,i,u)}),[t,o,e])}function st(){return l.useContext(C)?.settings}const ke=Object.freeze({});function T(e){const n=e.trim().split(/\s+/).filter(Boolean);return n.length===0?"?":(n.length===1?Array.from(n[0]??"").slice(0,2):n.slice(0,2).map(o=>Array.from(o)[0]??"")).join("").toUpperCase()}const ze=3;function at({items:e,max:n=ze,label:t}){const o=Math.max(1,Math.floor(n)),i=e.length>o,u=i?e.slice(0,o-1):e,a=i?e.slice(o-1):[];return r.jsxs(Ee,{$places:o,role:"group",...t===void 0?{}:{"aria-label":t},children:[u.map(s=>r.jsx(_,{text:s.name,announce:!1,focusable:s.onSelect===void 0,children:s.onSelect===void 0?r.jsx(E,{$tone:s.tone,role:"img","aria-label":s.name,children:T(s.name)}):r.jsx(E,{as:"button",type:"button",$tone:s.tone,"aria-label":s.name,onClick:s.onSelect,children:T(s.name)})},s.id)),a.length>0&&r.jsx(_,{text:a.map(s=>s.name).join(", "),announce:!1,focusable:!0,children:r.jsxs(E,{$tone:void 0,role:"img","aria-label":`${a.length} more: ${a.map(s=>s.name).join(", ")}`,children:["+",a.length]})})]})}const Ee=d.div`
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
  border: 1px solid ${({$tone:e})=>Q[e??"neutral"]};
  border-radius: var(--radius-circle);
  background: var(--color-surface-raised);
  color: ${({$tone:e})=>W[e??"neutral"]};
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
`;function it({blocked:e=!1,flag:n,prompt:t,onSend:o,sendDisabled:i=!1,sendLabel:u="Send",sendVariant:a="icon",sendTooltip:s,children:w,...b}){const h=l.useId();return r.jsxs(_e,{$blocked:e,...b,children:[t!==void 0&&r.jsx(Ce,{"aria-hidden":"true",children:t}),w,o!==void 0&&r.jsxs(r.Fragment,{children:[r.jsx(_,{text:s,announce:!1,children:r.jsx(Ae,{type:"button","aria-disabled":i||void 0,onClick:i?void 0:o,$icon:a==="icon",...s?{"aria-describedby":h}:{},...a==="icon"?{"aria-label":u}:{},children:a==="icon"?r.jsx(V,{size:16}):u})}),s&&r.jsx(Y,{id:h,children:s.replaceAll(`
`,". ")})]}),n!==void 0&&r.jsx(Re,{$blocked:e,role:"status",children:n})]})}const _e=d.div`
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
`,Ce=d.span`
  flex: 0 0 auto;
  color: var(--console-tone-fg, var(--color-accent-fg));
  font-weight: bold;
  margin-right: var(--gap-prompt-glyph);
`,Ae=d($)`
  flex: 0 0 auto;
  margin-left: auto;
  font-size: var(--font-size-compact);

  &[aria-disabled="true"] {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({$icon:e})=>e&&m`
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
`,Re=d.div`
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

  ${({$blocked:e})=>e?m`
          color: var(--color-nogo-on-status);
          background: var(--color-nogo-status);
          border: 1px solid var(--color-nogo-on-status);
        `:m`
          color: var(--color-text-muted);
          background: var(--color-surface-panel);
          border: 1px solid var(--color-border-subtle);
        `}
`;function Te({tone:e="accent",queue:n,composer:t,standing:o,children:i,...u}){const a=n!==void 0||t!==void 0||o!==void 0,s=o!==void 0&&!!t;return r.jsxs($e,{"data-console-frame":"",$tone:e,...u,children:[r.jsx(Fe,{children:i}),a&&r.jsxs(Oe,{$straddled:s,children:[n,o!==void 0&&r.jsx(Ie,{"data-console-standing":"",$straddle:s,children:o}),t]})]})}const $e=d.div`
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

  ${({$tone:e})=>e==="info"?m`
          --console-tone-fg: var(--color-info-text);
        `:m`
          --console-tone-fg: var(--color-accent-fg);
        `}
`,Fe=d.div`
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  display: flex;
`,Ie=d.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: var(--gap-console-readings);
  /* Overlaps the composer's corner with nothing to click, so it must not take a press. */
  pointer-events: none;

  ${({$straddle:e})=>e?m`
          position: absolute;
          right: var(--inset-console-foot);
          top: var(--inset-console-foot-straddled);
          transform: translateY(-50%);
          z-index: 1;
        `:m`
          align-self: flex-end;
        `}
`,Oe=d.div`
  position: relative;
  flex: 0 0 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-console-foot);
  padding: var(--inset-console-foot);

  ${({$straddled:e})=>e&&m`
      padding-top: var(--inset-console-foot-straddled);
    `}
`,qe="Uplink queue";function ct({tone:e,oneWaySeconds:n=null,delayReading:t,canQueue:o=!0,alwaysBadge:i=!1,inFlight:u,inFlightFrozenAtDispatch:a=!1,composer:s,children:w,...b}){const h=G({oneWaySeconds:n,canQueue:o,alwaysBadge:i}),S=h==="badge"?n:null,j=u!==void 0&&(h==="strip"||a&&h!=="badge");return r.jsx(Te,{...e!==void 0?{tone:e}:{},...S!==null?{standing:r.jsx(re,{oneWaySeconds:S,delayReading:t})}:{},...j?{queue:r.jsx(H,{items:u,"aria-label":qe})}:{},...s!==void 0?{composer:s}:{},...b,children:w})}function lt({label:e,description:n,value:t,className:o}){return r.jsxs(Me,{className:o,children:[r.jsxs(Ne,{children:[r.jsx(Be,{children:e}),n!=null&&r.jsx(Ue,{children:n})]}),r.jsx(Le,{$prose:typeof t=="string",children:r.jsx(De,{value:t})})]})}function De({value:e}){return e==null?r.jsx(J,{}):typeof e=="object"?r.jsx(K,{value:e}):typeof e=="boolean"?e?"On":"Off":e}const Me=d.dl`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--gap-field-term);
  margin: 0;
`,Ne=d.dt`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  min-width: 0;
  /* Grows into the space a short value leaves and yields to a long one. */
  flex: 1 1 auto;
`,Be=d.span`
  font-size: var(--font-size-value);
  color: var(--color-text-primary);
`,Ue=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-dim);
  max-width: 32em;
`,Le=d.dd`
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
`;function Pe(e,n){const t={w:0,h:0},o=a=>{t.w+=a?.w??0,t.h+=a?.h??0},i=a=>a.requires===void 0||n(a.requires);for(const a of new Set(e.augmentSlots??[]))for(const s of te(a))i(s)&&o(s.sizeDelta);const u=new Set([...e.contributionSlots??[],...ne.map(a=>`${e.id}.${a}`)]);for(const a of u)for(const s of ae(a))i(s)&&o(s.sizeDelta);return t}function ut(e,n){if(n.w===0&&n.h===0)return e;const t=o=>({w:o.w+n.w,h:o.h+n.h});return{...e,minSize:t(e.minSize??{w:1,h:1}),defaultSize:t(e.defaultSize??{w:3,h:3})}}function dt(){const e=Z(),[n,t]=l.useReducer(o=>o+1,0);return l.useEffect(()=>{const o=[ee(t),se(t),e?.subscribe(t)];return()=>{for(const i of o)i?.()}},[e]),l.useCallback(o=>Pe(o,i=>e?.isAvailable(i)??!1),[e,n])}export{nt as A,it as C,lt as R,tt as U,ot as a,at as b,ct as c,le as d,I as e,ve as f,rt as g,dt as h,T as i,Pe as s,st as u,ut as w};
