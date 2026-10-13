import{j as o}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-RRA14VTW.js";import d,{ThemeProvider as Y,css as b}from"./ext-styled-components-Br73TgY3.js";import{F as K,l as X,G as Z,k as F,d as D,a3 as $,a4 as J,aA as Q,ak as ee,V as R,Z as I,a5 as L}from"./vesselMark-B2BB4fDy.js";import{f as te,b as ne,o as oe,k as re,a as se,S as ie}from"./contributionsRead-W_6kokPF.js";import{f as ae,ak as le,I as ce,U as M,P as ue,i as de,H as fe}from"./ToggleButton-CuJwtqOc.js";import{d as k,T as C,b as he}from"./streamStatusWord-BoFViXZM.js";import{Y as pe,a0 as ge}from"./wrappedMap-8T8PJqol.js";import"./screen-B5Z_APSM.js";import{ah as ve,W as me}from"./view-clock-formula-DRrEkS6Q.js";import"./lagrange-DVtSWGiO.js";import"./use-transmissions-dCTZymMM.js";import{T as xe}from"./tiny-size-BXC1Scz3.js";import"./ksp-enum-names-BjZ3fgw3.js";const N=[["--color-text-primary",e=>e.colors.text.primary],["--color-text-muted",e=>e.colors.text.muted],["--color-text-dim",e=>e.colors.text.dim],["--color-text-faint",e=>e.colors.text.faint],["--color-text-inverse",e=>e.colors.text.inverse],["--color-surface-app",e=>e.colors.surface.app],["--color-surface-panel",e=>e.colors.surface.panel],["--color-surface-raised",e=>e.colors.surface.raised],["--color-surface-sunken",e=>e.colors.surface.sunken],["--color-border-subtle",e=>e.colors.border.subtle],["--color-border-strong",e=>e.colors.border.strong],["--color-accent-fg",e=>e.colors.accent.fg],["--color-accent-bg",e=>e.colors.accent.bg],["--color-focus",e=>e.colors.focus],["--font-family-mono",e=>e.typography.family.mono],["--font-size-xs",e=>e.typography.size.xs],["--font-size-sm",e=>e.typography.size.sm],["--font-size-base",e=>e.typography.size.base],["--font-size-lg",e=>e.typography.size.lg]];function be(e){const t={};for(const[n,r]of N){const i=r(e);i!==`var(${n})`&&(t[n]=i)}return t}const ye=N.map(([e])=>e);function Dt({theme:e,children:t}){return c.useLayoutEffect(()=>{const n=document.documentElement;for(const[r,i]of Object.entries(be(e)))n.style.setProperty(r,i);return()=>{for(const r of ye)n.style.removeProperty(r)}},[e]),o.jsx(Y,{theme:e,children:t})}function we(){if(!("isSecureContext"in globalThis)||globalThis.isSecureContext!==!0)return{supported:!1,reason:"insecure-origin"};const e=typeof navigator>"u"?void 0:navigator.mediaDevices;return!e||typeof e.getUserMedia!="function"?{supported:!1,reason:"no-media-devices"}:{supported:!0}}function P(e,t){return e.label!==""?e.label:`Input ${t+1}, name withheld`}const je=new Set(["NotAllowedError","PermissionDeniedError","SecurityError"]),Se=new Set(["NotFoundError","DevicesNotFoundError","OverconstrainedError","ConstraintNotSatisfiedError"]);function _e(e){if(e instanceof Error&&e.name!=="")return e.name;if(typeof e=="object"&&e!==null&&"name"in e){const t=e.name;if(typeof t=="string"&&t!=="")return t}return"UnknownError"}function ke(e){return je.has(e)?"refused":Se.has(e)?"no-device":"failed"}function z(e){for(const t of e.getTracks())t.stop()}function Ee(e){return e.getAudioTracks()[0]?.getSettings?.()?.deviceId??null}async function O(){const e=navigator.mediaDevices;if(!e||typeof e.enumerateDevices!="function")return[];try{return(await e.enumerateDevices()).filter(n=>n.kind==="audioinput"&&n.deviceId!=="").map(n=>({deviceId:n.deviceId,label:n.label}))}catch{return[]}}function ze(){const e=we();return{status:e.supported?"unasked":e.reason,devices:[],deviceId:null,stream:null,failure:null}}function Te(e={}){const[t,n]=c.useState(ze),r=c.useRef(null),i=c.useRef(null),l=c.useRef(!0),a=c.useRef(e);c.useEffect(()=>{a.current=e});const s=c.useCallback(()=>{const f=r.current;f&&(r.current=null,i.current=null,z(f),a.current.onStream?.(null))},[]),u=c.useCallback(f=>{const m=i.current,x=r.current!==null&&(m===null?f.length===0:!f.some(h=>h.deviceId===m));n(h=>h.status==="no-device"&&f.length>0?{...h,status:"unasked",devices:f}:h.status!=="ready"||!x?{...h,devices:f}:{...h,status:f.length===0?"no-device":"unasked",devices:f,deviceId:null,stream:null}),x&&s()},[s]);c.useEffect(()=>{const f=navigator.mediaDevices;if(!f)return;let m=!1;const x=()=>{O().then(h=>{m||u(h)})};return x(),f.addEventListener?.("devicechange",x),()=>{m=!0,f.removeEventListener?.("devicechange",x)}},[u]),c.useEffect(()=>(l.current=!0,()=>{l.current=!1,s()}),[s]);const v=c.useRef(0),g=c.useCallback(async f=>{const m=navigator.mediaDevices;if(!m||typeof m.getUserMedia!="function")return;const x=++v.current,h=()=>v.current!==x;n(p=>({...p,status:p.stream?p.status:"requesting",failure:null}));const W={...a.current.constraints,...f===null?{}:{deviceId:{exact:f}}};try{const p=await m.getUserMedia({audio:W});if(!l.current||h()){z(p);return}const y=r.current;r.current=p,y&&y!==p&&z(y);const w=await O();if(h())return;const E=Ee(p)??f??w[0]?.deviceId,V=w.length>0?w:$e(p,E);i.current=E??null,n({status:"ready",devices:V,deviceId:E??null,stream:p,failure:null}),a.current.onStream?.(p)}catch(p){if(!l.current||h())return;const y={name:_e(p),deviceId:f};n(w=>w.stream?{...w,failure:y}:{status:ke(y.name),devices:w.devices,deviceId:null,stream:null,failure:y})}},[]),j=c.useCallback(()=>g(null),[g]),S=c.useCallback(f=>g(f),[g]),G=c.useCallback(()=>{v.current++,s(),n(f=>({...f,status:f.status==="ready"||f.status==="requesting"?"unasked":f.status,deviceId:null,stream:null}))},[s]);return{...t,request:j,select:S,release:G}}function $e(e,t){return t?[{deviceId:t,label:e.getAudioTracks()[0]?.label??""}]:[]}function Lt({label:e="Audio input",...t}){const n=Te(t),r=c.useId(),i=Oe(n);return o.jsxs(te,{gap:"related-dense",children:[o.jsx(ae,{tone:Ae(n.status),live:!0,children:Fe(n)}),n.status==="ready"&&n.devices.length>0?o.jsxs(K,{children:[o.jsx(X,{htmlFor:r,children:e}),o.jsx(Z,{id:r,value:n.deviceId??"",onChange:l=>{n.select(l.target.value)},children:n.devices.map((l,a)=>o.jsx("option",{value:l.deviceId,children:P(l,a)},l.deviceId))}),n.failure?o.jsx(F,{children:`The requested input did not open. The browser reported ${n.failure.name}, and the previous input is still running.`}):null]}):null,Re(n.status)?o.jsx(D,{type:"button",onClick:()=>{n.request()},disabled:n.status==="requesting","aria-busy":n.status==="requesting",children:"Request microphone access"}):null,i?o.jsx(F,{children:i}):null]})}function Re(e){return e==="unasked"||e==="requesting"||e==="failed"}const Ce={"insecure-origin":"warn","no-media-devices":"nogo",unasked:"neutral",requesting:"info",refused:"nogo","no-device":"warn",failed:"nogo",ready:"go"};function Ae(e){return Ce[e]}function Fe(e){switch(e.status){case"insecure-origin":return"This page is not a secure origin. Microphone capture is available on https pages and on localhost.";case"no-media-devices":return"This browser exposes no media device interface, so no input can be opened here.";case"unasked":return U(e)?"Microphone access is granted for this origin. No input is open.":"Microphone access has not been requested for this origin.";case"requesting":return"A capture request is with the browser, which may be prompting for access.";case"refused":return"Microphone access was refused for this origin. The browser holds that answer in its site settings and returns it to any further request without prompting.";case"no-device":return"No audio input device is present.";case"failed":return`The input did not open. The browser reported ${e.failure?.name??"an unnamed error"}.`;case"ready":return`Capturing from ${Ie(e)}.`}}function U(e){return e.devices.some(t=>t.label!=="")}function Ie(e){const t=e.devices.findIndex(r=>r.deviceId===e.deviceId),n=t===-1?void 0:e.devices[t];return n?P(n,t):"an unnamed input"}function Oe(e){if(e.status!=="unasked"||U(e))return null;const t=e.devices.length;return t===0?null:t===1?"One audio input is visible. Its name is withheld by the browser until access is granted.":`${t} audio inputs are visible. Their names are withheld by the browser until access is granted.`}const A=c.createContext(null);function Mt({settings:e,setAugmentSetting:t,children:n}){const r=c.useMemo(()=>({settings:e,setAugmentSetting:t}),[e,t]);return o.jsx(A.Provider,{value:r,children:n})}function Nt(e){const t=c.useContext(A),n=t?.settings,r=t?.setAugmentSetting;return c.useMemo(()=>({values:n?.[e]??qe,set:(i,l)=>r?.(e,i,l)}),[n,r,e])}function Pt(){return c.useContext(A)?.settings}const qe=Object.freeze({});function q(e){const t=e.trim().split(/\s+/).filter(Boolean);return t.length===0?"?":(t.length===1?Array.from(t[0]??"").slice(0,2):t.slice(0,2).map(r=>Array.from(r)[0]??"")).join("").toUpperCase()}const Be=3;function Ut({items:e,max:t=Be,label:n}){const r=Math.max(1,Math.floor(t)),i=e.length>r,l=i?e.slice(0,r-1):e,a=i?e.slice(r-1):[];return o.jsxs(De,{$places:r,role:"group",...n===void 0?{}:{"aria-label":n},children:[l.map(s=>o.jsx($,{text:s.name,announce:!1,focusable:s.onSelect===void 0,children:s.onSelect===void 0?o.jsx(T,{$tone:s.tone,role:"img","aria-label":s.name,children:q(s.name)}):o.jsx(T,{as:"button",type:"button",$tone:s.tone,"aria-label":s.name,onClick:s.onSelect,children:q(s.name)})},s.id)),a.length>0&&o.jsx($,{text:a.map(s=>s.name).join(", "),announce:!1,focusable:!0,children:o.jsxs(T,{$tone:void 0,role:"img","aria-label":`${a.length} more: ${a.map(s=>s.name).join(", ")}`,children:["+",a.length]})})]})}const De=d.div`
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
`,T=d.span`
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: var(--avatar-size);
  block-size: var(--avatar-size);
  margin: 0;
  padding: 0;
  border: 1px solid ${({$tone:e})=>k[e??"neutral"]};
  border-radius: var(--radius-circle);
  background: var(--color-surface-raised);
  color: ${({$tone:e})=>C[e??"neutral"]};
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
  ${J}
  &:focus-visible {
    position: relative;
  }
`;function Ht({blocked:e=!1,flag:t,prompt:n,onSend:r,sendDisabled:i=!1,sendLabel:l="Send",sendVariant:a="icon",sendTooltip:s,children:u,...v}){const{anchor:g,tip:j}=Q(s),S=c.useId();return o.jsxs(Le,{$blocked:e,...v,children:[n!==void 0&&o.jsx(Me,{"aria-hidden":"true",children:n}),u,r!==void 0&&o.jsxs(Ne,{...g,children:[o.jsx(Pe,{type:"button","aria-disabled":i||void 0,onClick:i?void 0:r,$icon:a==="icon",...s?{"aria-describedby":S}:{},...a==="icon"?{"aria-label":l}:{},children:a==="icon"?o.jsx(ee,{size:16}):l}),s&&o.jsx(R,{id:S,children:s.replaceAll(`
`,". ")}),j]}),t!==void 0&&o.jsx(Ue,{$blocked:e,role:"status",children:t})]})}const Le=d.div`
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
`,Me=d.span`
  flex: 0 0 auto;
  color: var(--console-tone-fg, var(--color-accent-fg));
  font-weight: bold;
  margin-right: var(--gap-prompt-glyph);
`,Ne=d.span`
  display: inline-flex;

`,Pe=d(D)`
  flex: 0 0 auto;
  margin-left: auto;
  font-size: var(--font-size-compact);

  &[aria-disabled="true"] {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({$icon:e})=>e&&b`
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
`,Ue=d.div`
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

  ${({$blocked:e})=>e?b`
          color: var(--color-nogo-on-status);
          background: var(--color-nogo-status);
          border: 1px solid var(--color-nogo-on-status);
        `:b`
          color: var(--color-text-muted);
          background: var(--color-surface-panel);
          border: 1px solid var(--color-border-subtle);
        `}
`;function He({tone:e="accent",queue:t,composer:n,standing:r,children:i,...l}){const a=t!==void 0||n!==void 0||r!==void 0,s=r!==void 0&&!!n;return o.jsxs(Ge,{"data-console-frame":"",$tone:e,...l,children:[o.jsx(We,{children:i}),a&&o.jsxs(Ye,{$straddled:s,children:[t,r!==void 0&&o.jsx(Ve,{"data-console-standing":"",$straddle:s,children:r}),n]})]})}const Ge=d.div`
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

  ${({$tone:e})=>e==="info"?b`
          --console-tone-fg: var(--color-info-text);
        `:b`
          --console-tone-fg: var(--color-accent-fg);
        `}
`,We=d.div`
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  display: flex;
`,Ve=d.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: var(--gap-console-readings);
  /* Overlaps the composer's corner with nothing to click, so it must not take a press. */
  pointer-events: none;

  ${({$straddle:e})=>e?b`
          position: absolute;
          right: var(--inset-console-foot);
          top: var(--inset-console-foot-straddled);
          transform: translateY(-50%);
          z-index: 1;
        `:b`
          align-self: flex-end;
        `}
`,Ye=d.div`
  position: relative;
  flex: 0 0 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-console-foot);
  padding: var(--inset-console-foot);

  ${({$straddled:e})=>e&&b`
      padding-top: var(--inset-console-foot-straddled);
    `}
`,Ke="Uplink queue";function Gt({tone:e,oneWaySeconds:t=null,delayReading:n,canQueue:r=!0,alwaysBadge:i=!1,inFlight:l,inFlightFrozenAtDispatch:a=!1,composer:s,children:u,...v}){const g=le({oneWaySeconds:t,canQueue:r,alwaysBadge:i}),j=g==="badge"?t:null,S=l!==void 0&&(g==="strip"||a&&g!=="badge");return o.jsx(He,{...e!==void 0?{tone:e}:{},...j!==null?{standing:o.jsx(pe,{oneWaySeconds:j,delayReading:n})}:{},...S?{queue:o.jsx(ce,{items:l,"aria-label":Ke})}:{},...s!==void 0?{composer:s}:{},...v,children:u})}function Xe({lit:e,of:t,tone:n="neutral",label:r}){const i=e===null?"unknown":`${e} of ${t}`;return o.jsx(Ze,{role:"img","aria-label":r===void 0?i:`${r} ${i}`,"data-level-bars":"",children:Array.from({length:t},(l,a)=>o.jsx(Je,{$fill:e!==null&&a<e?k[n]:null,$height:(a+1)/t},a))})}const Ze=d.span`
  display: inline-flex;
  align-items: flex-end;
  gap: var(--gap-signal-bars);
  height: 0.8em;
  flex: none;
`,Je=d.span`
  width: 0.22em;
  height: ${({$height:e})=>`${Math.round(e*100)}%`};
  background: ${({$fill:e})=>e??"transparent"};
  border: 1px solid ${({$fill:e})=>e??"var(--color-border-subtle)"};
`;function Wt({label:e,description:t,value:n,className:r}){return o.jsxs(et,{className:r,children:[o.jsxs(tt,{children:[o.jsx(nt,{children:e}),t!=null&&o.jsx(ot,{children:t})]}),o.jsx(rt,{$prose:typeof n=="string",children:o.jsx(Qe,{value:n})})]})}function Qe({value:e}){return e==null?o.jsx(he,{}):typeof e=="object"?o.jsx(M,{value:e}):typeof e=="boolean"?e?"On":"Off":e}const et=d.dl`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--gap-field-term);
  margin: 0;
`,tt=d.dt`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  min-width: 0;
  /* Grows into the space a short value leaves and yields to a long one. */
  flex: 1 1 auto;
`,nt=d.span`
  font-size: var(--font-size-value);
  color: var(--color-text-primary);
`,ot=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-dim);
  max-width: 32em;
`,rt=d.dd`
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
`;function st(e,t){const n={w:0,h:0},r=a=>{n.w+=a?.w??0,n.h+=a?.h??0},i=a=>a.requires===void 0||t(a.requires);for(const a of new Set(e.augmentSlots??[]))for(const s of re(a))i(s)&&r(s.sizeDelta);const l=new Set([...e.contributionSlots??[],...se.map(a=>`${e.id}.${a}`)]);for(const a of l)for(const s of me(a))i(s)&&r(s.sizeDelta);return n}function Vt(e,t){if(t.w===0&&t.h===0)return e;const n=r=>({w:r.w+t.w,h:r.h+t.h});return{...e,minSize:n(e.minSize??{w:1,h:1}),defaultSize:n(e.defaultSize??{w:3,h:3})}}function Yt(){const e=ne(),[t,n]=c.useReducer(r=>r+1,0);return c.useEffect(()=>{const r=[oe(n),ve(n),e?.subscribe(n)];return()=>{for(const i of r)i?.()}},[e]),c.useCallback(r=>st(r,i=>e?.isAvailable(i)??!1),[e,t])}function it(e){return e===null||!e.capacity.isPositive()?null:e.amount.dividedBy(e.capacity).magnitude}function at({title:e,essentials:t}){const[n,...r]=t,{rowsRef:i,drawn:l}=lt(r),a=t.some(u=>u.urgent!==void 0),s=n!==void 0&&r.length===0&&n.label.toUpperCase()===e.toUpperCase();return o.jsx(ue,{panelTitle:e,fitToSize:!0,hoverTitle:!0,sections:o.jsxs(ie,{full:!0,children:[o.jsx(I,{visuallyHidden:!0,children:ht(t.filter(u=>u.urgent!==!0))}),a&&o.jsx(I,{visuallyHidden:!0,assertive:!0,additionsOnly:!0,children:pt(t).map(u=>o.jsx(c.Fragment,{children:`${u}. `},u))}),n!==void 0&&o.jsxs(mt,{"data-tiny-essential":"",children:[s?o.jsx(R,{as:"dt",children:n.label}):o.jsx(B,{children:n.label}),n.gauge===void 0?o.jsx(H,{$tone:n.tone??"neutral",children:o.jsx(_,{essential:n})}):o.jsxs(xt,{$tone:n.tone??"neutral",children:[o.jsx(bt,{children:o.jsx(_,{essential:n})}),o.jsx(ft,{essential:n,gauge:n.gauge})]})]}),r.length>0&&o.jsxs(wt,{ref:i,children:[r.slice(0,l).map(u=>o.jsxs(jt,{"data-tiny-essential":"",children:[o.jsx(B,{children:u.label}),o.jsx(St,{$tone:u.tone??"neutral",children:o.jsx(_,{essential:u})})]},u.label)),r.slice(l).map(u=>o.jsxs(R,{as:"div",children:[o.jsx("dt",{children:u.label}),o.jsx("dd",{children:u.control===void 0?o.jsx(_,{essential:u}):u.control.label})]},u.label))]})]})})}function lt(e){const t=c.useRef(null),[n,r]=c.useState(e.length),[i,l]=c.useState(0),a=e.map(s=>`${s.label}\0${s.word??ct(s.value)}`).join("");return c.useLayoutEffect(()=>{r(e.length)},[a,i,e.length]),c.useLayoutEffect(()=>{const s=t.current?.closest("[data-panel-fit-body]"),u=s?.firstElementChild;!s||!u||n===0||ut(u)>s.clientHeight&&r(n-1)}),c.useLayoutEffect(()=>{const s=t.current?.closest("[data-panel-fit-body]");if(!s||typeof ResizeObserver>"u")return;let u=s.clientHeight;const v=new ResizeObserver(()=>{s.clientHeight!==u&&(u=s.clientHeight,l(g=>g+1))});return v.observe(s),()=>v.disconnect()},[]),{rowsRef:t,drawn:n}}function ct(e){try{return JSON.stringify(e)??""}catch{return String(e)}}function ut(e){const t=[],n=[];for(const r of Array.from(e.querySelectorAll("[data-tiny-essential]"))){const i=r.getBoundingClientRect();t.push(i.top),n.push(i.bottom)}return t.length===0?0:Math.max(...n)-Math.min(...t)}function _({essential:e}){const{control:t}=e;return t!==void 0?o.jsx($,{text:t.hint??t.title,children:o.jsx(de,{size:"sm",pressed:t.active,disabled:t.disabled,onClick:t.onPress,"aria-label":t.title,children:t.label})}):o.jsxs(o.Fragment,{children:[e.level!==void 0&&o.jsx(Xe,{lit:e.level.lit,of:e.level.of,tone:e.tone,label:e.label}),e.word!==void 0?e.word:o.jsx(dt,{essential:e})]})}function dt({essential:e}){const{mark:t,value:n,decimals:r}=e,{held:i}=L(n),l=o.jsx(M,{value:n,decimals:r,scale:"compact",elsewhere:t?.elsewhere===!0&&(i||t.kind===void 0)?t.caption:void 0});return t===void 0||i||t.kind===void 0?l:o.jsx(fe,{kind:t.kind,elsewhere:t.elsewhere,caption:t.caption,children:l})}function ft({essential:e,gauge:t}){const{shown:n,held:r}=L(e.value),i=a=>it({amount:a.max(t.min).min(t.max).minus(t.min),capacity:t.max.minus(t.min)})??0,l=n==null?null:i(n);return o.jsxs(yt,{"aria-hidden":"true","data-tiny-gauge":"","data-held":r?"":void 0,viewBox:"0 0 100 1",preserveAspectRatio:"none",children:[(t.bands??[]).map(a=>o.jsx("rect",{x:i(a.from)*100,y:0,width:(i(a.to)-i(a.from))*100,height:1,fill:k[a.tone],opacity:.35},`${i(a.from)}-${i(a.to)}`)),l!==null&&o.jsx("rect",{"data-tiny-gauge-fill":"",x:0,y:0,width:l*100,height:1,fill:k[e.tone??"neutral"],opacity:r?.55:1})]})}function ht(e){return e.filter(t=>t.word!==void 0).map(t=>`${t.label} ${t.word}`).join(", ")}function pt(e){return e.filter(t=>t.urgent===!0&&t.word!==void 0).map(t=>`${t.label} ${t.word}`)}function Kt({def:e,...t}){if(e.tiny!==void 0&&gt(e,t.w,t.h))return o.jsx(vt,{tiny:e.tiny,props:t});const n=e.component;return o.jsx(n,{...t})}function gt(e,t,n){if(e.tiny===void 0||t===void 0||n===void 0)return!1;const r=e.minSize??ge;return t<r.w||n<r.h}function Xt(e){return e.tiny!==void 0?xe:e.minSize}function vt({tiny:e,props:t}){const n=e.useEssentials(t);return o.jsx(at,{title:e.title,essentials:n})}const mt=d.dl`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: var(--gap-tiny-content);
  margin: 0;
  min-width: 0;
`,H=d.dd`
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
  color: ${({$tone:e})=>C[e]};
`,xt=d(H)`
  flex-direction: column;
  align-items: stretch;
  gap: var(--gap-caption);
  line-height: var(--line-height-flush);
`,bt=d.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--gap-figure-parts);
`,yt=d.svg`
  display: block;
  width: 100%;
  height: var(--size-tiny-gauge);
`,B=d.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
`,wt=d.dl`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-row-wrap);
  margin: 0;
  max-width: 100%;
`,jt=d.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  column-gap: var(--gap-label-value-tight);
  max-width: 100%;
`,St=d.dd`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  margin: 0;
  font-size: var(--font-size-value);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({$tone:e})=>C[e]};
`;export{Lt as A,Ht as C,Xe as L,Wt as R,at as T,Dt as U,Kt as W,Mt as a,Ut as b,Gt as c,we as d,P as e,st as f,Xt as g,Te as h,q as i,Nt as j,Yt as k,gt as s,Pt as u,Vt as w};
