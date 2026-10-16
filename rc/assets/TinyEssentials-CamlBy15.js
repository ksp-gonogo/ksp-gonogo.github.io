import{j as o}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-RRA14VTW.js";import f,{ThemeProvider as Y,css as m}from"./ext-styled-components-Br73TgY3.js";import{F as K,m as Z,U as X,l as A,e as D,ah as k,ai as J,aM as Q,_ as R,bv as ee,ay as te,ab as L,P as ne,a6 as I,af as M,aw as re}from"./ModalSaveBar-D4LobfAw.js";import{k as oe,m as _,T as C,i as se,b as ie,B as ae,y as le,a as ce,S as ue}from"./contributionsRead-rHOkhv7C.js";import{d as de,S as fe,g as he}from"./ToggleButton-B4EvMzKI.js";import{Z as pe,a1 as ge}from"./wrappedMap-DQHgQn4H.js";import"./screen-BXZWTbYS.js";import{ah as ve,W as me}from"./view-clock-formula-BxHT4C0f.js";import"./lagrange-Bbg-NuQH.js";import"./use-transmissions-DB_m3j_g.js";import{T as be}from"./tiny-size-BXC1Scz3.js";import"./ksp-enum-names-Ct5ias81.js";const N=[["--color-text-primary",e=>e.colors.text.primary],["--color-text-muted",e=>e.colors.text.muted],["--color-text-dim",e=>e.colors.text.dim],["--color-text-faint",e=>e.colors.text.faint],["--color-text-inverse",e=>e.colors.text.inverse],["--color-surface-app",e=>e.colors.surface.app],["--color-surface-panel",e=>e.colors.surface.panel],["--color-surface-raised",e=>e.colors.surface.raised],["--color-surface-sunken",e=>e.colors.surface.sunken],["--color-border-subtle",e=>e.colors.border.subtle],["--color-border-strong",e=>e.colors.border.strong],["--color-accent-fg",e=>e.colors.accent.fg],["--color-accent-bg",e=>e.colors.accent.bg],["--color-focus",e=>e.colors.focus],["--font-family-mono",e=>e.typography.family.mono],["--font-size-xs",e=>e.typography.size.xs],["--font-size-sm",e=>e.typography.size.sm],["--font-size-base",e=>e.typography.size.base],["--font-size-lg",e=>e.typography.size.lg]];function xe(e){const t={};for(const[n,r]of N){const i=r(e);i!==`var(${n})`&&(t[n]=i)}return t}const ye=N.map(([e])=>e);function Bt({theme:e,children:t}){return c.useLayoutEffect(()=>{const n=document.documentElement;for(const[r,i]of Object.entries(xe(e)))n.style.setProperty(r,i);return()=>{for(const r of ye)n.style.removeProperty(r)}},[e]),o.jsx(Y,{theme:e,children:t})}function we(){if(!("isSecureContext"in globalThis)||globalThis.isSecureContext!==!0)return{supported:!1,reason:"insecure-origin"};const e=typeof navigator>"u"?void 0:navigator.mediaDevices;return!e||typeof e.getUserMedia!="function"?{supported:!1,reason:"no-media-devices"}:{supported:!0}}function P(e,t){return e.label!==""?e.label:`Input ${t+1}, name withheld`}const je=new Set(["NotAllowedError","PermissionDeniedError","SecurityError"]),Se=new Set(["NotFoundError","DevicesNotFoundError","OverconstrainedError","ConstraintNotSatisfiedError"]);function ke(e){if(e instanceof Error&&e.name!=="")return e.name;if(typeof e=="object"&&e!==null&&"name"in e){const t=e.name;if(typeof t=="string"&&t!=="")return t}return"UnknownError"}function _e(e){return je.has(e)?"refused":Se.has(e)?"no-device":"failed"}function $(e){for(const t of e.getTracks())t.stop()}function Ee(e){return e.getAudioTracks()[0]?.getSettings?.()?.deviceId??null}async function O(){const e=navigator.mediaDevices;if(!e||typeof e.enumerateDevices!="function")return[];try{return(await e.enumerateDevices()).filter(n=>n.kind==="audioinput"&&n.deviceId!=="").map(n=>({deviceId:n.deviceId,label:n.label}))}catch{return[]}}function ze(){const e=we();return{status:e.supported?"unasked":e.reason,devices:[],deviceId:null,stream:null,failure:null}}function $e(e={}){const[t,n]=c.useState(ze),r=c.useRef(null),i=c.useRef(null),l=c.useRef(!0),a=c.useRef(e);c.useEffect(()=>{a.current=e});const s=c.useCallback(()=>{const d=r.current;d&&(r.current=null,i.current=null,$(d),a.current.onStream?.(null))},[]),p=c.useCallback(d=>{const b=i.current,x=r.current!==null&&(b===null?d.length===0:!d.some(g=>g.deviceId===b));n(g=>g.status==="no-device"&&d.length>0?{...g,status:"unasked",devices:d}:g.status!=="ready"||!x?{...g,devices:d}:{...g,status:d.length===0?"no-device":"unasked",devices:d,deviceId:null,stream:null}),x&&s()},[s]);c.useEffect(()=>{const d=navigator.mediaDevices;if(!d)return;let b=!1;const x=()=>{O().then(g=>{b||p(g)})};return x(),d.addEventListener?.("devicechange",x),()=>{b=!0,d.removeEventListener?.("devicechange",x)}},[p]),c.useEffect(()=>(l.current=!0,()=>{l.current=!1,s()}),[s]);const u=c.useRef(0),h=c.useCallback(async d=>{const b=navigator.mediaDevices;if(!b||typeof b.getUserMedia!="function")return;const x=++u.current,g=()=>u.current!==x;n(v=>({...v,status:v.stream?v.status:"requesting",failure:null}));const G={...a.current.constraints,...d===null?{}:{deviceId:{exact:d}}};try{const v=await b.getUserMedia({audio:G});if(!l.current||g()){$(v);return}const y=r.current;r.current=v,y&&y!==v&&$(y);const w=await O();if(g())return;const z=Ee(v)??d??w[0]?.deviceId,V=w.length>0?w:Te(v,z);i.current=z??null,n({status:"ready",devices:V,deviceId:z??null,stream:v,failure:null}),a.current.onStream?.(v)}catch(v){if(!l.current||g())return;const y={name:ke(v),deviceId:d};n(w=>w.stream?{...w,failure:y}:{status:_e(y.name),devices:w.devices,deviceId:null,stream:null,failure:y})}},[]),j=c.useCallback(()=>h(null),[h]),E=c.useCallback(d=>h(d),[h]),W=c.useCallback(()=>{u.current++,s(),n(d=>({...d,status:d.status==="ready"||d.status==="requesting"?"unasked":d.status,deviceId:null,stream:null}))},[s]);return{...t,request:j,select:E,release:W}}function Te(e,t){return t?[{deviceId:t,label:e.getAudioTracks()[0]?.label??""}]:[]}function Dt({label:e="Audio input",...t}){const n=$e(t),r=c.useId(),i=Oe(n);return o.jsxs(oe,{gap:"related-dense",children:[o.jsx(de,{tone:Fe(n.status),live:!0,children:Ae(n)}),n.status==="ready"&&n.devices.length>0?o.jsxs(K,{children:[o.jsx(Z,{htmlFor:r,children:e}),o.jsx(X,{id:r,value:n.deviceId??"",onChange:l=>{n.select(l.target.value)},children:n.devices.map((l,a)=>o.jsx("option",{value:l.deviceId,children:P(l,a)},l.deviceId))}),n.failure?o.jsx(A,{children:`The requested input did not open. The browser reported ${n.failure.name}, and the previous input is still running.`}):null]}):null,Re(n.status)?o.jsx(D,{type:"button",onClick:()=>{n.request()},disabled:n.status==="requesting","aria-busy":n.status==="requesting",children:"Request microphone access"}):null,i?o.jsx(A,{children:i}):null]})}function Re(e){return e==="unasked"||e==="requesting"||e==="failed"}const Ce={"insecure-origin":"warn","no-media-devices":"nogo",unasked:"neutral",requesting:"info",refused:"nogo","no-device":"warn",failed:"nogo",ready:"go"};function Fe(e){return Ce[e]}function Ae(e){switch(e.status){case"insecure-origin":return"This page is not a secure origin. Microphone capture is available on https pages and on localhost.";case"no-media-devices":return"This browser exposes no media device interface, so no input can be opened here.";case"unasked":return U(e)?"Microphone access is granted for this origin. No input is open.":"Microphone access has not been requested for this origin.";case"requesting":return"A capture request is with the browser, which may be prompting for access.";case"refused":return"Microphone access was refused for this origin. The browser holds that answer in its site settings and returns it to any further request without prompting.";case"no-device":return"No audio input device is present.";case"failed":return`The input did not open. The browser reported ${e.failure?.name??"an unnamed error"}.`;case"ready":return`Capturing from ${Ie(e)}.`}}function U(e){return e.devices.some(t=>t.label!=="")}function Ie(e){const t=e.devices.findIndex(r=>r.deviceId===e.deviceId),n=t===-1?void 0:e.devices[t];return n?P(n,t):"an unnamed input"}function Oe(e){if(e.status!=="unasked"||U(e))return null;const t=e.devices.length;return t===0?null:t===1?"One audio input is visible. Its name is withheld by the browser until access is granted.":`${t} audio inputs are visible. Their names are withheld by the browser until access is granted.`}const F=c.createContext(null);function Lt({settings:e,setAugmentSetting:t,children:n}){const r=c.useMemo(()=>({settings:e,setAugmentSetting:t}),[e,t]);return o.jsx(F.Provider,{value:r,children:n})}function Mt(e){const t=c.useContext(F),n=t?.settings,r=t?.setAugmentSetting;return c.useMemo(()=>({values:n?.[e]??qe,set:(i,l)=>r?.(e,i,l)}),[n,r,e])}function Nt(){return c.useContext(F)?.settings}const qe=Object.freeze({});function q(e){const t=e.trim().split(/\s+/).filter(Boolean);return t.length===0?"?":(t.length===1?Array.from(t[0]??"").slice(0,2):t.slice(0,2).map(r=>Array.from(r)[0]??"")).join("").toUpperCase()}const Be=3;function Pt({items:e,max:t=Be,label:n}){const r=Math.max(1,Math.floor(t)),i=e.length>r,l=i?e.slice(0,r-1):e,a=i?e.slice(r-1):[];return o.jsxs(De,{$places:r,role:"group",...n===void 0?{}:{"aria-label":n},children:[l.map(s=>o.jsx(k,{text:s.name,announce:!1,focusable:s.onSelect===void 0,children:s.onSelect===void 0?o.jsx(T,{$tone:s.tone,role:"img","aria-label":s.name,children:q(s.name)}):o.jsx(T,{as:"button",type:"button",$tone:s.tone,"aria-label":s.name,onClick:s.onSelect,children:q(s.name)})},s.id)),a.length>0&&o.jsx(k,{text:a.map(s=>s.name).join(", "),announce:!1,focusable:!0,children:o.jsxs(T,{$tone:void 0,role:"img","aria-label":`${a.length} more: ${a.map(s=>s.name).join(", ")}`,children:["+",a.length]})})]})}const De=f.div`
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
`,T=f.span`
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: var(--avatar-size);
  block-size: var(--avatar-size);
  margin: 0;
  padding: 0;
  border: 1px solid ${({$tone:e})=>_[e??"neutral"]};
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
`;function Ut({blocked:e=!1,flag:t,prompt:n,onSend:r,sendDisabled:i=!1,sendLabel:l="Send",sendVariant:a="icon",sendTooltip:s,children:p,...u}){const h=c.useId();return o.jsxs(Le,{$blocked:e,...u,children:[n!==void 0&&o.jsx(Me,{"aria-hidden":"true",children:n}),p,r!==void 0&&o.jsxs(o.Fragment,{children:[o.jsx(k,{text:s,announce:!1,children:o.jsx(Ne,{type:"button","aria-disabled":i||void 0,onClick:i?void 0:r,$icon:a==="icon",...s?{"aria-describedby":h}:{},...a==="icon"?{"aria-label":l}:{},children:a==="icon"?o.jsx(Q,{size:16}):l})}),s&&o.jsx(R,{id:h,children:s.replaceAll(`
`,". ")})]}),t!==void 0&&o.jsx(Pe,{$blocked:e,role:"status",children:t})]})}const Le=f.div`
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
`,Me=f.span`
  flex: 0 0 auto;
  color: var(--console-tone-fg, var(--color-accent-fg));
  font-weight: bold;
  margin-right: var(--gap-prompt-glyph);
`,Ne=f(D)`
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
`,Pe=f.div`
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
`;function Ue({tone:e="accent",queue:t,composer:n,standing:r,children:i,...l}){const a=t!==void 0||n!==void 0||r!==void 0,s=r!==void 0&&!!n;return o.jsxs(He,{"data-console-frame":"",$tone:e,...l,children:[o.jsx(We,{children:i}),a&&o.jsxs(Ve,{$straddled:s,children:[t,r!==void 0&&o.jsx(Ge,{"data-console-standing":"",$straddle:s,children:r}),n]})]})}const He=f.div`
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
`,We=f.div`
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  display: flex;
`,Ge=f.div`
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
`,Ve=f.div`
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
`,Ye="Uplink queue";function Ht({tone:e,oneWaySeconds:t=null,delayReading:n,canQueue:r=!0,alwaysBadge:i=!1,inFlight:l,inFlightFrozenAtDispatch:a=!1,composer:s,children:p,...u}){const h=ee({oneWaySeconds:t,canQueue:r,alwaysBadge:i}),j=h==="badge"?t:null,E=l!==void 0&&(h==="strip"||a&&h!=="badge");return o.jsx(Ue,{...e!==void 0?{tone:e}:{},...j!==null?{standing:o.jsx(pe,{oneWaySeconds:j,delayReading:n})}:{},...E?{queue:o.jsx(te,{items:l,"aria-label":Ye})}:{},...s!==void 0?{composer:s}:{},...u,children:p})}function Ke({lit:e,of:t,tone:n="neutral",label:r}){const i=e===null?"unknown":`${e} of ${t}`;return o.jsx(Ze,{role:"img","aria-label":r===void 0?i:`${r} ${i}`,"data-level-bars":"",children:Array.from({length:t},(l,a)=>o.jsx(Xe,{$fill:e!==null&&a<e?_[n]:null,$height:(a+1)/t},a))})}const Ze=f.span`
  display: inline-flex;
  align-items: flex-end;
  gap: var(--gap-signal-bars);
  height: 0.8em;
  flex: none;
`,Xe=f.span`
  width: 0.22em;
  height: ${({$height:e})=>`${Math.round(e*100)}%`};
  background: ${({$fill:e})=>e??"transparent"};
  border: 1px solid ${({$fill:e})=>e??"var(--color-border-subtle)"};
`;function Wt({label:e,description:t,value:n,className:r}){return o.jsxs(Qe,{className:r,children:[o.jsxs(et,{children:[o.jsx(tt,{children:e}),t!=null&&o.jsx(nt,{children:t})]}),o.jsx(rt,{$prose:typeof n=="string",children:o.jsx(Je,{value:n})})]})}function Je({value:e}){return e==null?o.jsx(se,{}):typeof e=="object"?o.jsx(L,{value:e}):typeof e=="boolean"?e?"On":"Off":e}const Qe=f.dl`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--gap-field-term);
  margin: 0;
`,et=f.dt`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  min-width: 0;
  /* Grows into the space a short value leaves and yields to a long one. */
  flex: 1 1 auto;
`,tt=f.span`
  font-size: var(--font-size-value);
  color: var(--color-text-primary);
`,nt=f.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-dim);
  max-width: 32em;
`,rt=f.dd`
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
`;function ot(e,t){const n={w:0,h:0},r=a=>{n.w+=a?.w??0,n.h+=a?.h??0},i=a=>a.requires===void 0||t(a.requires);for(const a of new Set(e.augmentSlots??[]))for(const s of le(a))i(s)&&r(s.sizeDelta);const l=new Set([...e.contributionSlots??[],...ce.map(a=>`${e.id}.${a}`)]);for(const a of l)for(const s of me(a))i(s)&&r(s.sizeDelta);return n}function Gt(e,t){if(t.w===0&&t.h===0)return e;const n=r=>({w:r.w+t.w,h:r.h+t.h});return{...e,minSize:n(e.minSize??{w:1,h:1}),defaultSize:n(e.defaultSize??{w:3,h:3})}}function Vt(){const e=ie(),[t,n]=c.useReducer(r=>r+1,0);return c.useEffect(()=>{const r=[ae(n),ve(n),e?.subscribe(n)];return()=>{for(const i of r)i?.()}},[e]),c.useCallback(r=>ot(r,i=>e?.isAvailable(i)??!1),[e,t])}function st(e){return e===null||!e.capacity.isPositive()?null:e.amount.dividedBy(e.capacity).magnitude}function it({title:e,essentials:t,equalRows:n=!1}){const r=n?void 0:t[0],i=n?t:t.slice(1),{rowsRef:l,drawn:a}=at(i),s=t.some(u=>u.urgent!==void 0),p=r!==void 0&&i.length===0&&r.label.toUpperCase()===e.toUpperCase();return o.jsx(ne,{panelTitle:e,fitToSize:!0,hoverTitle:!0,panelTrend:r?.trend===void 0?void 0:({w:u,h})=>o.jsx(fe,{values:r.trend??[],width:u,height:h,"aria-label":`${r.label} trend`}),sections:o.jsxs(ue,{full:!0,children:[o.jsx(I,{visuallyHidden:!0,children:ht(t.filter(u=>u.urgent!==!0))}),s&&o.jsx(I,{visuallyHidden:!0,assertive:!0,additionsOnly:!0,children:pt(t).map(u=>o.jsx(c.Fragment,{children:`${u}. `},u))}),r!==void 0&&o.jsxs(mt,{"data-tiny-essential":"",children:[p?o.jsx(R,{as:"dt",children:r.label}):o.jsx(B,{children:r.label}),r.gauge===void 0?o.jsx(H,{$tone:r.tone??"neutral",children:o.jsx(S,{essential:r})}):o.jsxs(bt,{$tone:r.tone??"neutral",children:[o.jsx(xt,{children:o.jsx(S,{essential:r})}),o.jsx(ft,{essential:r,gauge:r.gauge})]})]}),i.length>0&&o.jsxs(wt,{ref:l,$equal:n,children:[i.slice(0,a).map(u=>o.jsxs(jt,{"data-tiny-essential":"",$equal:n,children:[o.jsx(B,{children:u.label}),o.jsx(St,{$tone:u.tone??"neutral",children:o.jsx(S,{essential:u})})]},u.label)),i.slice(a).map(u=>o.jsxs(R,{as:"div",children:[o.jsx("dt",{children:u.label}),o.jsx("dd",{children:u.control===void 0?o.jsx(S,{essential:u}):u.control.label})]},u.label))]})]})})}function at(e){const t=c.useRef(null),[n,r]=c.useState(e.length),[i,l]=c.useState(0),a=e.map(s=>`${s.label}\0${s.word??lt(s.value)}`).join("");return c.useLayoutEffect(()=>{r(e.length)},[a,i,e.length]),c.useLayoutEffect(()=>{const s=t.current?.closest("[data-panel-fit-body]"),p=s?.firstElementChild;!s||!p||n===0||ct(p)>s.clientHeight&&r(n-1)}),c.useLayoutEffect(()=>{const s=t.current?.closest("[data-panel-fit-body]");if(!s||typeof ResizeObserver>"u")return;let p=s.clientHeight;const u=new ResizeObserver(()=>{s.clientHeight!==p&&(p=s.clientHeight,l(h=>h+1))});return u.observe(s),()=>u.disconnect()},[]),{rowsRef:t,drawn:n}}function lt(e){try{return JSON.stringify(e)??""}catch{return String(e)}}function ct(e){const t=[],n=[];for(const r of Array.from(e.querySelectorAll("[data-tiny-essential]"))){const i=r.getBoundingClientRect();t.push(i.top),n.push(i.bottom)}return t.length===0?0:Math.max(...n)-Math.min(...t)}function S({essential:e}){const{control:t}=e;return t!==void 0?o.jsx(k,{text:t.hint??t.title,children:o.jsx(he,{size:"sm",pressed:t.active,disabled:t.disabled,onClick:t.onPress,"aria-label":t.title,children:t.label})}):o.jsxs(o.Fragment,{children:[e.level!==void 0&&o.jsx(Ke,{lit:e.level.lit,of:e.level.of,tone:e.tone,label:e.label}),e.word!==void 0?e.word:o.jsx(dt,{essential:e})]})}function ut(e,t){return typeof e=="object"&&e!==null&&"state"in e?{...e,value:t.abs()}:t.abs()}function dt({essential:e}){const{mark:t,value:n,decimals:r}=e,{held:i,shown:l}=M(n),a=e.signed===!0&&l?.isFinite()===!0,s=a&&r!==void 0&&Math.abs(l.valueOf())<.5*10**-r,p=a&&(s||!l.isNegative())?"+":"",u=s?ut(n,l):n,h=o.jsxs(o.Fragment,{children:[p,o.jsx(L,{value:u,decimals:r,scale:"compact",elsewhere:t?.elsewhere===!0&&(i||t.kind===void 0)?t.caption:void 0})]});return t===void 0||i||t.kind===void 0?h:o.jsx(re,{kind:t.kind,elsewhere:t.elsewhere,caption:t.caption,children:h})}function ft({essential:e,gauge:t}){const{shown:n,held:r}=M(e.value),i=a=>st({amount:a.max(t.min).min(t.max).minus(t.min),capacity:t.max.minus(t.min)})??0,l=n==null?null:i(n);return o.jsxs(yt,{"aria-hidden":"true","data-tiny-gauge":"","data-held":r?"":void 0,viewBox:"0 0 100 1",preserveAspectRatio:"none",children:[(t.bands??[]).map(a=>o.jsx("rect",{x:i(a.from)*100,y:0,width:(i(a.to)-i(a.from))*100,height:1,fill:_[a.tone],opacity:.35},`${i(a.from)}-${i(a.to)}`)),l!==null&&o.jsx("rect",{"data-tiny-gauge-fill":"",x:0,y:0,width:l*100,height:1,fill:_[e.tone??"neutral"],opacity:r?.55:1})]})}function ht(e){return e.filter(t=>t.word!==void 0).map(t=>`${t.label} ${t.word}`).join(", ")}function pt(e){return e.filter(t=>t.urgent===!0&&t.word!==void 0).map(t=>`${t.label} ${t.word}`)}function Yt({def:e,...t}){if(e.tiny!==void 0&&gt(e,t.w,t.h))return o.jsx(vt,{tiny:e.tiny,props:t});const n=e.component;return o.jsx(n,{...t})}function gt(e,t,n){if(e.tiny===void 0||t===void 0||n===void 0)return!1;const r=e.minSize??ge;return t<r.w||n<r.h}function Kt(e){return e.tiny!==void 0?be:e.minSize}function vt({tiny:e,props:t}){const n=e.useEssentials(t);return o.jsx(it,{title:e.title,essentials:n,equalRows:e.equalRows})}const mt=f.dl`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: var(--gap-tiny-content);
  margin: 0;
  min-width: 0;
`,H=f.dd`
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
`,bt=f(H)`
  flex-direction: column;
  align-items: stretch;
  gap: var(--gap-caption);
  line-height: var(--line-height-flush);
`,xt=f.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--gap-figure-parts);
`,yt=f.svg`
  display: block;
  width: 100%;
  height: var(--size-tiny-gauge);
`,B=f.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
`,wt=f.dl`
  ${({$equal:e})=>e?m`
          display: grid;
          grid-template-columns: auto auto;
          justify-content: space-between;
          /* The section around the rows shrinks to its content, so the rows take the tile's width from the fit body, which is the query container. */
          min-width: 100cqw;
          align-items: baseline;
          column-gap: var(--gap-label-value-tight);
          row-gap: var(--gap-related-packed);
        `:m`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--gap-row-wrap);
        `}
  margin: 0;
  max-width: 100%;
`,jt=f.div`
  ${({$equal:e})=>e?m`
          display: grid;
          grid-template-columns: subgrid;
          grid-column: 1 / -1;
          align-items: baseline;
          white-space: nowrap;
        `:m`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: baseline;
          column-gap: var(--gap-label-value-tight);
        `}
  max-width: 100%;
`,St=f.dd`
  display: inline-flex;
  justify-content: flex-end;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  margin: 0;
  font-size: var(--font-size-value);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({$tone:e})=>C[e]};
`;export{Dt as A,Ut as C,Ke as L,Wt as R,it as T,Bt as U,Yt as W,Lt as a,Pt as b,Ht as c,we as d,P as e,ot as f,Kt as g,$e as h,q as i,Mt as j,Vt as k,gt as s,Nt as u,Gt as w};
