import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./ext-react-C0MU9AHG.js";import d,{ThemeProvider as U,css as S}from"./ext-styled-components-DAuodqsN.js";import{F as L,m as P,X as V,l as R,e as C,af as E,ai as G,b1 as F,I as T,a1 as K,bT as H,aH as X,ab as Y}from"./Modal-DH2ZJ8Vf.js";import{e as Q,g as W,j as Z,c as J,G as ee,t as te,q as ne,V as oe}from"./contributionsRead-Cdcp0syN.js";import{d as re}from"./TinyEssentials-CTKx5QLr.js";import{Z as se}from"./wrappedMap-8qVYX5i7.js";import"./use-command-DyBcYpuK.js";import{bk as ae,az as ie}from"./context-C6-ms_G4.js";import"./logger-2_QM1wvD.js";import"./use-transmissions-hs_ToGK2.js";import"./lagrange-Dy9NtQNG.js";const O=[["--color-text-primary",e=>e.colors.text.primary],["--color-text-muted",e=>e.colors.text.muted],["--color-text-dim",e=>e.colors.text.dim],["--color-text-faint",e=>e.colors.text.faint],["--color-text-inverse",e=>e.colors.text.inverse],["--color-surface-app",e=>e.colors.surface.app],["--color-surface-panel",e=>e.colors.surface.panel],["--color-surface-raised",e=>e.colors.surface.raised],["--color-surface-sunken",e=>e.colors.surface.sunken],["--color-border-subtle",e=>e.colors.border.subtle],["--color-border-strong",e=>e.colors.border.strong],["--color-accent-fg",e=>e.colors.accent.fg],["--color-accent-bg",e=>e.colors.accent.bg],["--color-focus",e=>e.colors.focus],["--font-family-mono",e=>e.typography.family.mono],["--font-size-xs",e=>e.typography.size.xs],["--font-size-sm",e=>e.typography.size.sm],["--font-size-base",e=>e.typography.size.base],["--font-size-lg",e=>e.typography.size.lg]];function le(e){const n={};for(const[t,o]of O){const a=o(e);a!==`var(${t})`&&(n[t]=a)}return n}const ce=O.map(([e])=>e);function st({theme:e,children:n}){return u.useLayoutEffect(()=>{const t=document.documentElement;for(const[o,a]of Object.entries(le(e)))t.style.setProperty(o,a);return()=>{for(const o of ce)t.style.removeProperty(o)}},[e]),r.jsx(U,{theme:e,children:n})}function ue(){if(!("isSecureContext"in globalThis)||globalThis.isSecureContext!==!0)return{supported:!1,reason:"insecure-origin"};const e=typeof navigator>"u"?void 0:navigator.mediaDevices;return!e||typeof e.getUserMedia!="function"?{supported:!1,reason:"no-media-devices"}:{supported:!0}}function q(e,n){return e.label!==""?e.label:`Input ${n+1}, name withheld`}const de=new Set(["NotAllowedError","PermissionDeniedError","SecurityError"]),fe=new Set(["NotFoundError","DevicesNotFoundError","OverconstrainedError","ConstraintNotSatisfiedError"]);function pe(e){if(e instanceof Error&&e.name!=="")return e.name;if(typeof e=="object"&&e!==null&&"name"in e){const n=e.name;if(typeof n=="string"&&n!=="")return n}return"UnknownError"}function he(e){return de.has(e)?"refused":fe.has(e)?"no-device":"failed"}function z(e){for(const n of e.getTracks())n.stop()}function ve(e){return e.getAudioTracks()[0]?.getSettings?.()?.deviceId??null}async function I(){const e=navigator.mediaDevices;if(!e||typeof e.enumerateDevices!="function")return[];try{return(await e.enumerateDevices()).filter(t=>t.kind==="audioinput"&&t.deviceId!=="").map(t=>({deviceId:t.deviceId,label:t.label}))}catch{return[]}}function ge(){const e=ue();return{status:e.supported?"unasked":e.reason,devices:[],deviceId:null,stream:null,failure:null}}function me(e={}){const[n,t]=u.useState(ge),o=u.useRef(null),a=u.useRef(null),l=u.useRef(!0),i=u.useRef(e);u.useEffect(()=>{i.current=e});const s=u.useCallback(()=>{const c=o.current;c&&(o.current=null,a.current=null,z(c),i.current.onStream?.(null))},[]),v=u.useCallback(c=>{const m=a.current,b=o.current!==null&&(m===null?c.length===0:!c.some(f=>f.deviceId===m));t(f=>f.status==="no-device"&&c.length>0?{...f,status:"unasked",devices:c}:f.status!=="ready"||!b?{...f,devices:c}:{...f,status:c.length===0?"no-device":"unasked",devices:c,deviceId:null,stream:null}),b&&s()},[s]);u.useEffect(()=>{const c=navigator.mediaDevices;if(!c)return;let m=!1;const b=()=>{I().then(f=>{m||v(f)})};return b(),c.addEventListener?.("devicechange",b),()=>{m=!0,c.removeEventListener?.("devicechange",b)}},[v]),u.useEffect(()=>(l.current=!0,()=>{l.current=!1,s()}),[s]);const g=u.useRef(0),h=u.useCallback(async c=>{const m=navigator.mediaDevices;if(!m||typeof m.getUserMedia!="function")return;const b=++g.current,f=()=>g.current!==b;t(p=>({...p,status:p.stream?p.status:"requesting",failure:null}));const N={...i.current.constraints,...c===null?{}:{deviceId:{exact:c}}};try{const p=await m.getUserMedia({audio:N});if(!l.current||f()){z(p);return}const y=o.current;o.current=p,y&&y!==p&&z(y);const w=await I();if(f())return;const j=ve(p)??c??w[0]?.deviceId,B=w.length>0?w:be(p,j);a.current=j??null,t({status:"ready",devices:B,deviceId:j??null,stream:p,failure:null}),i.current.onStream?.(p)}catch(p){if(!l.current||f())return;const y={name:pe(p),deviceId:c};t(w=>w.stream?{...w,failure:y}:{status:he(y.name),devices:w.devices,deviceId:null,stream:null,failure:y})}},[]),k=u.useCallback(()=>h(null),[h]),x=u.useCallback(c=>h(c),[h]),M=u.useCallback(()=>{g.current++,s(),t(c=>({...c,status:c.status==="ready"||c.status==="requesting"?"unasked":c.status,deviceId:null,stream:null}))},[s]);return{...n,request:k,select:x,release:M}}function be(e,n){return n?[{deviceId:n,label:e.getAudioTracks()[0]?.label??""}]:[]}function at({label:e="Audio input",...n}){const t=me(n),o=u.useId(),a=je(t);return r.jsxs(Q,{gap:"related-dense",children:[r.jsx(re,{tone:we(t.status),live:!0,children:Se(t)}),t.status==="ready"&&t.devices.length>0?r.jsxs(L,{children:[r.jsx(P,{htmlFor:o,children:e}),r.jsx(V,{id:o,value:t.deviceId??"",onChange:l=>{t.select(l.target.value)},children:t.devices.map((l,i)=>r.jsx("option",{value:l.deviceId,children:q(l,i)},l.deviceId))}),t.failure?r.jsx(R,{children:`The requested input did not open. The browser reported ${t.failure.name}, and the previous input is still running.`}):null]}):null,xe(t.status)?r.jsx(C,{type:"button",onClick:()=>{t.request()},disabled:t.status==="requesting","aria-busy":t.status==="requesting",children:"Request microphone access"}):null,a?r.jsx(R,{children:a}):null]})}function xe(e){return e==="unasked"||e==="requesting"||e==="failed"}const ye={"insecure-origin":"warn","no-media-devices":"nogo",unasked:"neutral",requesting:"info",refused:"nogo","no-device":"warn",failed:"nogo",ready:"go"};function we(e){return ye[e]}function Se(e){switch(e.status){case"insecure-origin":return"This page is not a secure origin. Microphone capture is available on https pages and on localhost.";case"no-media-devices":return"This browser exposes no media device interface, so no input can be opened here.";case"unasked":return D(e)?"Microphone access is granted for this origin. No input is open.":"Microphone access has not been requested for this origin.";case"requesting":return"A capture request is with the browser, which may be prompting for access.";case"refused":return"Microphone access was refused for this origin. The browser holds that answer in its site settings and returns it to any further request without prompting.";case"no-device":return"No audio input device is present.";case"failed":return`The input did not open. The browser reported ${e.failure?.name??"an unnamed error"}.`;case"ready":return`Capturing from ${ke(e)}.`}}function D(e){return e.devices.some(n=>n.label!=="")}function ke(e){const n=e.devices.findIndex(o=>o.deviceId===e.deviceId),t=n===-1?void 0:e.devices[n];return t?q(t,n):"an unnamed input"}function je(e){if(e.status!=="unasked"||D(e))return null;const n=e.devices.length;return n===0?null:n===1?"One audio input is visible. Its name is withheld by the browser until access is granted.":`${n} audio inputs are visible. Their names are withheld by the browser until access is granted.`}const A=u.createContext(null);function it({settings:e,setAugmentSetting:n,children:t}){const o=u.useMemo(()=>({settings:e,setAugmentSetting:n}),[e,n]);return r.jsx(A.Provider,{value:o,children:t})}function lt(e){const n=u.useContext(A),t=n?.settings,o=n?.setAugmentSetting;return u.useMemo(()=>({values:t?.[e]??ze,set:(a,l)=>o?.(e,a,l)}),[t,o,e])}function ct(){return u.useContext(A)?.settings}const ze=Object.freeze({});function $(e){const n=e.trim().split(/\s+/).filter(Boolean);return n.length===0?"?":(n.length===1?Array.from(n[0]??"").slice(0,2):n.slice(0,2).map(o=>Array.from(o)[0]??"")).join("").toUpperCase()}const _e=3;function ut({items:e,max:n=_e,label:t}){const o=Math.max(1,Math.floor(n)),a=e.length>o,l=a?e.slice(0,o-1):e,i=a?e.slice(o-1):[];return r.jsxs(Ee,{$places:o,role:"group",...t===void 0?{}:{"aria-label":t},children:[l.map(s=>r.jsx(E,{text:s.name,announce:!1,focusable:s.onSelect===void 0,children:s.onSelect===void 0?r.jsx(_,{$tone:s.tone,role:"img","aria-label":s.name,children:$(s.name)}):r.jsx(_,{as:"button",type:"button",$tone:s.tone,"aria-label":s.name,onClick:s.onSelect,children:$(s.name)})},s.id)),i.length>0&&r.jsx(E,{text:i.map(s=>s.name).join(", "),announce:!1,focusable:!0,children:r.jsxs(_,{$tone:void 0,role:"img","aria-label":`${i.length} more: ${i.map(s=>s.name).join(", ")}`,children:["+",i.length]})})]})}const Ee=d.div`
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
`,_=d.span`
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
  ${G}
  &:focus-visible {
    position: relative;
  }
`;function dt({blocked:e=!1,flag:n,prompt:t,sendLabel:o="Send",sendVariant:a="icon",sendTooltip:l,children:i,onSend:s,sendDisabled:v=!1,command:g,sendUnavailable:h,...k}){const x=u.useId();return r.jsxs(Ce,{$blocked:e,...k,children:[t!==void 0&&r.jsx(Ae,{"aria-hidden":"true",children:t}),i,g!==void 0&&(a==="icon"?r.jsx(Fe,{command:g,unavailable:h,"aria-label":o,tip:l,children:r.jsx(F,{size:16})}):r.jsx(Ie,{command:g,unavailable:h,size:"sm",tip:l,children:o})),s!==void 0&&r.jsxs(r.Fragment,{children:[r.jsx(Re,{children:r.jsx(E,{text:l,announce:!1,children:a==="icon"?r.jsx(T,{type:"button","aria-disabled":v||void 0,onClick:v?void 0:s,"aria-label":o,...l?{"aria-describedby":x}:{},children:r.jsx(F,{size:16})}):r.jsx(C,{type:"button","aria-disabled":v||void 0,onClick:v?void 0:s,...l?{"aria-describedby":x}:{},children:o})})}),l&&r.jsx(K,{id:x,children:l.replaceAll(`
`,". ")})]}),n!==void 0&&r.jsx($e,{$blocked:e,role:"status",children:n})]})}const Ce=d.div`
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

  /*
   * The row's border is the outline, so a field typed into inside it draws none
   * of its own, whatever the page's focus rule says. Focus is shown on the row
   * instead, by thickening that border, which keeps a visible focus cue
   * without a second box inside the first.
   */
  & input:focus-visible,
  & textarea:focus-visible {
    outline: none;
  }

  &:focus-within {
    box-shadow: inset 0 0 0 1px
      ${({$blocked:e})=>e?"var(--color-nogo-text)":"var(--console-tone-fg, var(--color-accent-fg))"};
  }
`,Ae=d.span`
  flex: 0 0 auto;
  color: var(--console-tone-fg, var(--color-accent-fg));
  font-weight: bold;
  margin-right: var(--gap-prompt-glyph);
`,Re=d.span`
  flex: 0 0 auto;
  margin-left: auto;
  display: inline-flex;
`,Fe=d(T)`
  flex: 0 0 auto;
  margin-left: auto;
  color: var(--console-tone-fg, var(--color-accent-fg));
`,Ie=d(C)`
  flex: 0 0 auto;
  margin-left: auto;
  font-size: var(--font-size-compact);
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

  ${({$blocked:e})=>e?S`
          color: var(--color-nogo-on-status);
          background: var(--color-nogo-status);
          border: 1px solid var(--color-nogo-on-status);
        `:S`
          color: var(--color-text-muted);
          background: var(--color-surface-panel);
          border: 1px solid var(--color-border-subtle);
        `}
`;function Te({tone:e="accent",queue:n,composer:t,standing:o,children:a,...l}){const i=n!==void 0||t!==void 0||o!==void 0,s=o!==void 0&&!!t;return r.jsxs(Oe,{"data-console-frame":"",$tone:e,...l,children:[r.jsx(qe,{children:a}),i&&r.jsxs(Me,{$straddled:s,children:[n,o!==void 0&&r.jsx(De,{"data-console-standing":"",$straddle:s,children:o}),t]})]})}const Oe=d.div`
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

  ${({$tone:e})=>e==="info"?S`
          --console-tone-fg: var(--color-info-text);
        `:S`
          --console-tone-fg: var(--color-accent-fg);
        `}
`,qe=d.div`
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  display: flex;
`,De=d.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: var(--gap-console-readings);
  /* Overlaps the composer's corner with nothing to click, so it must not take a press. */
  pointer-events: none;

  ${({$straddle:e})=>e?S`
          position: absolute;
          right: var(--inset-console-foot);
          top: var(--inset-console-foot-straddled);
          transform: translateY(-50%);
          z-index: 1;
        `:S`
          align-self: flex-end;
        `}
`,Me=d.div`
  position: relative;
  flex: 0 0 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-console-foot);
  padding: var(--inset-console-foot);

  ${({$straddled:e})=>e&&S`
      padding-top: var(--inset-console-foot-straddled);
    `}
`,Ne="Uplink queue";function ft({tone:e,oneWaySeconds:n=null,delayReading:t,canQueue:o=!0,alwaysBadge:a=!1,inFlight:l,inFlightFrozenAtDispatch:i=!1,composer:s,children:v,...g}){const h=H({oneWaySeconds:n,canQueue:o,alwaysBadge:a}),k=h==="badge"?n:null,x=l!==void 0&&(h==="strip"||i&&h!=="badge");return r.jsx(Te,{...e!==void 0?{tone:e}:{},...k!==null?{standing:r.jsx(se,{oneWaySeconds:k,delayReading:t})}:{},...x?{queue:r.jsx(X,{items:l,"aria-label":Ne})}:{},...s!==void 0?{composer:s}:{},...g,children:v})}const pt=d.kbd`
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
`;function ht({label:e,description:n,value:t,className:o}){return r.jsxs(Ue,{className:o,children:[r.jsxs(Le,{children:[r.jsx(Pe,{children:e}),n!=null&&r.jsx(Ve,{children:n})]}),r.jsx(Ge,{$prose:typeof t=="string",children:r.jsx(Be,{value:t})})]})}function Be({value:e}){return e==null?r.jsx(J,{}):typeof e=="object"?r.jsx(Y,{value:e}):typeof e=="boolean"?e?"On":"Off":e}const Ue=d.dl`
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
`,Pe=d.span`
  font-size: var(--font-size-value);
  color: var(--color-text-primary);
`,Ve=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-dim);
  max-width: 32em;
`,Ge=d.dd`
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
`;function Ke(e,n){const t={w:0,h:0},o=i=>{t.w+=i?.w??0,t.h+=i?.h??0},a=i=>i.requires===void 0||n(i.requires);for(const i of new Set(e.augmentSlots??[]))for(const s of ne(i))a(s)&&o(s.sizeDelta);const l=new Set([...e.contributionSlots??[],...oe.map(i=>`${e.id}.${i}`)]);for(const i of l)for(const s of ie(i))a(s)&&o(s.sizeDelta);return t}function vt(e,n){if(n.w===0&&n.h===0)return e;const t=o=>({w:o.w+n.w,h:o.h+n.h});return{...e,minSize:t(e.minSize??{w:1,h:1}),defaultSize:t(e.defaultSize??{w:3,h:3}),...e.maxSize!==void 0?{maxSize:t(e.maxSize)}:{}}}function gt(){const e=ee(),[n,t]=u.useReducer(o=>o+1,0);return u.useEffect(()=>{const o=[te(t),ae(t),e?.subscribe(t)];return()=>{for(const a of o)a?.()}},[e]),u.useCallback(o=>Ke(o,a=>e?.isAvailable(a)??!1),[e,n])}export{at as A,dt as C,pt as K,ht as R,st as U,it as a,ut as b,ft as c,ue as d,q as e,me as f,lt as g,gt as h,$ as i,Ke as s,ct as u,vt as w};
