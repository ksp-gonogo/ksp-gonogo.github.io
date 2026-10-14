import{j as o}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-RRA14VTW.js";import f,{ThemeProvider as K,css as v}from"./ext-styled-components-Br73TgY3.js";import{F as Y,l as X,K as Z,k as A,d as D,a6 as k,a7 as J,ap as Q,V as R,a0 as I,a8 as L,af as ee}from"./titleText-ykBpW36X.js";import{f as te,b as ne,o as oe,k as re,a as se,S as ie}from"./contributionsRead-CJVQiuX3.js";import{f as ae,ah as le,I as ce,U as N,P as ue,i as de}from"./ToggleButton-RRwF4pYg.js";import{d as _,T as C,b as fe}from"./streamStatusWord-tv2-QViF.js";import{Z as he,a1 as pe}from"./wrappedMap-DWxu0FoA.js";import"./screen-BrSuIKG_.js";import{ah as ge,W as me}from"./view-clock-formula-DivmsORm.js";import"./lagrange-CqxkjZOD.js";import"./use-transmissions-aR9lgGMG.js";import{T as ve}from"./tiny-size-BXC1Scz3.js";import"./ksp-enum-names-BUxIZR14.js";const M=[["--color-text-primary",e=>e.colors.text.primary],["--color-text-muted",e=>e.colors.text.muted],["--color-text-dim",e=>e.colors.text.dim],["--color-text-faint",e=>e.colors.text.faint],["--color-text-inverse",e=>e.colors.text.inverse],["--color-surface-app",e=>e.colors.surface.app],["--color-surface-panel",e=>e.colors.surface.panel],["--color-surface-raised",e=>e.colors.surface.raised],["--color-surface-sunken",e=>e.colors.surface.sunken],["--color-border-subtle",e=>e.colors.border.subtle],["--color-border-strong",e=>e.colors.border.strong],["--color-accent-fg",e=>e.colors.accent.fg],["--color-accent-bg",e=>e.colors.accent.bg],["--color-focus",e=>e.colors.focus],["--font-family-mono",e=>e.typography.family.mono],["--font-size-xs",e=>e.typography.size.xs],["--font-size-sm",e=>e.typography.size.sm],["--font-size-base",e=>e.typography.size.base],["--font-size-lg",e=>e.typography.size.lg]];function xe(e){const t={};for(const[n,r]of M){const i=r(e);i!==`var(${n})`&&(t[n]=i)}return t}const be=M.map(([e])=>e);function qt({theme:e,children:t}){return c.useLayoutEffect(()=>{const n=document.documentElement;for(const[r,i]of Object.entries(xe(e)))n.style.setProperty(r,i);return()=>{for(const r of be)n.style.removeProperty(r)}},[e]),o.jsx(K,{theme:e,children:t})}function ye(){if(!("isSecureContext"in globalThis)||globalThis.isSecureContext!==!0)return{supported:!1,reason:"insecure-origin"};const e=typeof navigator>"u"?void 0:navigator.mediaDevices;return!e||typeof e.getUserMedia!="function"?{supported:!1,reason:"no-media-devices"}:{supported:!0}}function P(e,t){return e.label!==""?e.label:`Input ${t+1}, name withheld`}const we=new Set(["NotAllowedError","PermissionDeniedError","SecurityError"]),je=new Set(["NotFoundError","DevicesNotFoundError","OverconstrainedError","ConstraintNotSatisfiedError"]);function Se(e){if(e instanceof Error&&e.name!=="")return e.name;if(typeof e=="object"&&e!==null&&"name"in e){const t=e.name;if(typeof t=="string"&&t!=="")return t}return"UnknownError"}function ke(e){return we.has(e)?"refused":je.has(e)?"no-device":"failed"}function $(e){for(const t of e.getTracks())t.stop()}function _e(e){return e.getAudioTracks()[0]?.getSettings?.()?.deviceId??null}async function O(){const e=navigator.mediaDevices;if(!e||typeof e.enumerateDevices!="function")return[];try{return(await e.enumerateDevices()).filter(n=>n.kind==="audioinput"&&n.deviceId!=="").map(n=>({deviceId:n.deviceId,label:n.label}))}catch{return[]}}function Ee(){const e=ye();return{status:e.supported?"unasked":e.reason,devices:[],deviceId:null,stream:null,failure:null}}function ze(e={}){const[t,n]=c.useState(Ee),r=c.useRef(null),i=c.useRef(null),l=c.useRef(!0),a=c.useRef(e);c.useEffect(()=>{a.current=e});const s=c.useCallback(()=>{const d=r.current;d&&(r.current=null,i.current=null,$(d),a.current.onStream?.(null))},[]),h=c.useCallback(d=>{const x=i.current,b=r.current!==null&&(x===null?d.length===0:!d.some(g=>g.deviceId===x));n(g=>g.status==="no-device"&&d.length>0?{...g,status:"unasked",devices:d}:g.status!=="ready"||!b?{...g,devices:d}:{...g,status:d.length===0?"no-device":"unasked",devices:d,deviceId:null,stream:null}),b&&s()},[s]);c.useEffect(()=>{const d=navigator.mediaDevices;if(!d)return;let x=!1;const b=()=>{O().then(g=>{x||h(g)})};return b(),d.addEventListener?.("devicechange",b),()=>{x=!0,d.removeEventListener?.("devicechange",b)}},[h]),c.useEffect(()=>(l.current=!0,()=>{l.current=!1,s()}),[s]);const u=c.useRef(0),p=c.useCallback(async d=>{const x=navigator.mediaDevices;if(!x||typeof x.getUserMedia!="function")return;const b=++u.current,g=()=>u.current!==b;n(m=>({...m,status:m.stream?m.status:"requesting",failure:null}));const G={...a.current.constraints,...d===null?{}:{deviceId:{exact:d}}};try{const m=await x.getUserMedia({audio:G});if(!l.current||g()){$(m);return}const y=r.current;r.current=m,y&&y!==m&&$(y);const w=await O();if(g())return;const z=_e(m)??d??w[0]?.deviceId,V=w.length>0?w:$e(m,z);i.current=z??null,n({status:"ready",devices:V,deviceId:z??null,stream:m,failure:null}),a.current.onStream?.(m)}catch(m){if(!l.current||g())return;const y={name:Se(m),deviceId:d};n(w=>w.stream?{...w,failure:y}:{status:ke(y.name),devices:w.devices,deviceId:null,stream:null,failure:y})}},[]),j=c.useCallback(()=>p(null),[p]),E=c.useCallback(d=>p(d),[p]),W=c.useCallback(()=>{u.current++,s(),n(d=>({...d,status:d.status==="ready"||d.status==="requesting"?"unasked":d.status,deviceId:null,stream:null}))},[s]);return{...t,request:j,select:E,release:W}}function $e(e,t){return t?[{deviceId:t,label:e.getAudioTracks()[0]?.label??""}]:[]}function Bt({label:e="Audio input",...t}){const n=ze(t),r=c.useId(),i=Ie(n);return o.jsxs(te,{gap:"related-dense",children:[o.jsx(ae,{tone:Ce(n.status),live:!0,children:Fe(n)}),n.status==="ready"&&n.devices.length>0?o.jsxs(Y,{children:[o.jsx(X,{htmlFor:r,children:e}),o.jsx(Z,{id:r,value:n.deviceId??"",onChange:l=>{n.select(l.target.value)},children:n.devices.map((l,a)=>o.jsx("option",{value:l.deviceId,children:P(l,a)},l.deviceId))}),n.failure?o.jsx(A,{children:`The requested input did not open. The browser reported ${n.failure.name}, and the previous input is still running.`}):null]}):null,Te(n.status)?o.jsx(D,{type:"button",onClick:()=>{n.request()},disabled:n.status==="requesting","aria-busy":n.status==="requesting",children:"Request microphone access"}):null,i?o.jsx(A,{children:i}):null]})}function Te(e){return e==="unasked"||e==="requesting"||e==="failed"}const Re={"insecure-origin":"warn","no-media-devices":"nogo",unasked:"neutral",requesting:"info",refused:"nogo","no-device":"warn",failed:"nogo",ready:"go"};function Ce(e){return Re[e]}function Fe(e){switch(e.status){case"insecure-origin":return"This page is not a secure origin. Microphone capture is available on https pages and on localhost.";case"no-media-devices":return"This browser exposes no media device interface, so no input can be opened here.";case"unasked":return U(e)?"Microphone access is granted for this origin. No input is open.":"Microphone access has not been requested for this origin.";case"requesting":return"A capture request is with the browser, which may be prompting for access.";case"refused":return"Microphone access was refused for this origin. The browser holds that answer in its site settings and returns it to any further request without prompting.";case"no-device":return"No audio input device is present.";case"failed":return`The input did not open. The browser reported ${e.failure?.name??"an unnamed error"}.`;case"ready":return`Capturing from ${Ae(e)}.`}}function U(e){return e.devices.some(t=>t.label!=="")}function Ae(e){const t=e.devices.findIndex(r=>r.deviceId===e.deviceId),n=t===-1?void 0:e.devices[t];return n?P(n,t):"an unnamed input"}function Ie(e){if(e.status!=="unasked"||U(e))return null;const t=e.devices.length;return t===0?null:t===1?"One audio input is visible. Its name is withheld by the browser until access is granted.":`${t} audio inputs are visible. Their names are withheld by the browser until access is granted.`}const F=c.createContext(null);function Dt({settings:e,setAugmentSetting:t,children:n}){const r=c.useMemo(()=>({settings:e,setAugmentSetting:t}),[e,t]);return o.jsx(F.Provider,{value:r,children:n})}function Lt(e){const t=c.useContext(F),n=t?.settings,r=t?.setAugmentSetting;return c.useMemo(()=>({values:n?.[e]??Oe,set:(i,l)=>r?.(e,i,l)}),[n,r,e])}function Nt(){return c.useContext(F)?.settings}const Oe=Object.freeze({});function q(e){const t=e.trim().split(/\s+/).filter(Boolean);return t.length===0?"?":(t.length===1?Array.from(t[0]??"").slice(0,2):t.slice(0,2).map(r=>Array.from(r)[0]??"")).join("").toUpperCase()}const qe=3;function Mt({items:e,max:t=qe,label:n}){const r=Math.max(1,Math.floor(t)),i=e.length>r,l=i?e.slice(0,r-1):e,a=i?e.slice(r-1):[];return o.jsxs(Be,{$places:r,role:"group",...n===void 0?{}:{"aria-label":n},children:[l.map(s=>o.jsx(k,{text:s.name,announce:!1,focusable:s.onSelect===void 0,children:s.onSelect===void 0?o.jsx(T,{$tone:s.tone,role:"img","aria-label":s.name,children:q(s.name)}):o.jsx(T,{as:"button",type:"button",$tone:s.tone,"aria-label":s.name,onClick:s.onSelect,children:q(s.name)})},s.id)),a.length>0&&o.jsx(k,{text:a.map(s=>s.name).join(", "),announce:!1,focusable:!0,children:o.jsxs(T,{$tone:void 0,role:"img","aria-label":`${a.length} more: ${a.map(s=>s.name).join(", ")}`,children:["+",a.length]})})]})}const Be=f.div`
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
`;function Pt({blocked:e=!1,flag:t,prompt:n,onSend:r,sendDisabled:i=!1,sendLabel:l="Send",sendVariant:a="icon",sendTooltip:s,children:h,...u}){const p=c.useId();return o.jsxs(De,{$blocked:e,...u,children:[n!==void 0&&o.jsx(Le,{"aria-hidden":"true",children:n}),h,r!==void 0&&o.jsxs(o.Fragment,{children:[o.jsx(k,{text:s,announce:!1,children:o.jsx(Ne,{type:"button","aria-disabled":i||void 0,onClick:i?void 0:r,$icon:a==="icon",...s?{"aria-describedby":p}:{},...a==="icon"?{"aria-label":l}:{},children:a==="icon"?o.jsx(Q,{size:16}):l})}),s&&o.jsx(R,{id:p,children:s.replaceAll(`
`,". ")})]}),t!==void 0&&o.jsx(Me,{$blocked:e,role:"status",children:t})]})}const De=f.div`
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
`,Le=f.span`
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

  ${({$icon:e})=>e&&v`
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
`,Me=f.div`
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

  ${({$blocked:e})=>e?v`
          color: var(--color-nogo-on-status);
          background: var(--color-nogo-status);
          border: 1px solid var(--color-nogo-on-status);
        `:v`
          color: var(--color-text-muted);
          background: var(--color-surface-panel);
          border: 1px solid var(--color-border-subtle);
        `}
`;function Pe({tone:e="accent",queue:t,composer:n,standing:r,children:i,...l}){const a=t!==void 0||n!==void 0||r!==void 0,s=r!==void 0&&!!n;return o.jsxs(Ue,{"data-console-frame":"",$tone:e,...l,children:[o.jsx(He,{children:i}),a&&o.jsxs(Ge,{$straddled:s,children:[t,r!==void 0&&o.jsx(We,{"data-console-standing":"",$straddle:s,children:r}),n]})]})}const Ue=f.div`
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

  ${({$tone:e})=>e==="info"?v`
          --console-tone-fg: var(--color-info-text);
        `:v`
          --console-tone-fg: var(--color-accent-fg);
        `}
`,He=f.div`
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  display: flex;
`,We=f.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: var(--gap-console-readings);
  /* Overlaps the composer's corner with nothing to click, so it must not take a press. */
  pointer-events: none;

  ${({$straddle:e})=>e?v`
          position: absolute;
          right: var(--inset-console-foot);
          top: var(--inset-console-foot-straddled);
          transform: translateY(-50%);
          z-index: 1;
        `:v`
          align-self: flex-end;
        `}
`,Ge=f.div`
  position: relative;
  flex: 0 0 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-console-foot);
  padding: var(--inset-console-foot);

  ${({$straddled:e})=>e&&v`
      padding-top: var(--inset-console-foot-straddled);
    `}
`,Ve="Uplink queue";function Ut({tone:e,oneWaySeconds:t=null,delayReading:n,canQueue:r=!0,alwaysBadge:i=!1,inFlight:l,inFlightFrozenAtDispatch:a=!1,composer:s,children:h,...u}){const p=le({oneWaySeconds:t,canQueue:r,alwaysBadge:i}),j=p==="badge"?t:null,E=l!==void 0&&(p==="strip"||a&&p!=="badge");return o.jsx(Pe,{...e!==void 0?{tone:e}:{},...j!==null?{standing:o.jsx(he,{oneWaySeconds:j,delayReading:n})}:{},...E?{queue:o.jsx(ce,{items:l,"aria-label":Ve})}:{},...s!==void 0?{composer:s}:{},...u,children:h})}function Ke({lit:e,of:t,tone:n="neutral",label:r}){const i=e===null?"unknown":`${e} of ${t}`;return o.jsx(Ye,{role:"img","aria-label":r===void 0?i:`${r} ${i}`,"data-level-bars":"",children:Array.from({length:t},(l,a)=>o.jsx(Xe,{$fill:e!==null&&a<e?_[n]:null,$height:(a+1)/t},a))})}const Ye=f.span`
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
`;function Ht({label:e,description:t,value:n,className:r}){return o.jsxs(Je,{className:r,children:[o.jsxs(Qe,{children:[o.jsx(et,{children:e}),t!=null&&o.jsx(tt,{children:t})]}),o.jsx(nt,{$prose:typeof n=="string",children:o.jsx(Ze,{value:n})})]})}function Ze({value:e}){return e==null?o.jsx(fe,{}):typeof e=="object"?o.jsx(N,{value:e}):typeof e=="boolean"?e?"On":"Off":e}const Je=f.dl`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--gap-field-term);
  margin: 0;
`,Qe=f.dt`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  min-width: 0;
  /* Grows into the space a short value leaves and yields to a long one. */
  flex: 1 1 auto;
`,et=f.span`
  font-size: var(--font-size-value);
  color: var(--color-text-primary);
`,tt=f.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-dim);
  max-width: 32em;
`,nt=f.dd`
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
`;function ot(e,t){const n={w:0,h:0},r=a=>{n.w+=a?.w??0,n.h+=a?.h??0},i=a=>a.requires===void 0||t(a.requires);for(const a of new Set(e.augmentSlots??[]))for(const s of re(a))i(s)&&r(s.sizeDelta);const l=new Set([...e.contributionSlots??[],...se.map(a=>`${e.id}.${a}`)]);for(const a of l)for(const s of me(a))i(s)&&r(s.sizeDelta);return n}function Wt(e,t){if(t.w===0&&t.h===0)return e;const n=r=>({w:r.w+t.w,h:r.h+t.h});return{...e,minSize:n(e.minSize??{w:1,h:1}),defaultSize:n(e.defaultSize??{w:3,h:3})}}function Gt(){const e=ne(),[t,n]=c.useReducer(r=>r+1,0);return c.useEffect(()=>{const r=[oe(n),ge(n),e?.subscribe(n)];return()=>{for(const i of r)i?.()}},[e]),c.useCallback(r=>ot(r,i=>e?.isAvailable(i)??!1),[e,t])}function rt(e){return e===null||!e.capacity.isPositive()?null:e.amount.dividedBy(e.capacity).magnitude}function st({title:e,essentials:t,equalRows:n=!1}){const r=n?void 0:t[0],i=n?t:t.slice(1),{rowsRef:l,drawn:a}=it(i),s=t.some(u=>u.urgent!==void 0),h=r!==void 0&&i.length===0&&r.label.toUpperCase()===e.toUpperCase();return o.jsx(ue,{panelTitle:e,fitToSize:!0,hoverTitle:!0,sections:o.jsxs(ie,{full:!0,children:[o.jsx(I,{visuallyHidden:!0,children:dt(t.filter(u=>u.urgent!==!0))}),s&&o.jsx(I,{visuallyHidden:!0,assertive:!0,additionsOnly:!0,children:ft(t).map(u=>o.jsx(c.Fragment,{children:`${u}. `},u))}),r!==void 0&&o.jsxs(gt,{"data-tiny-essential":"",children:[h?o.jsx(R,{as:"dt",children:r.label}):o.jsx(B,{children:r.label}),r.gauge===void 0?o.jsx(H,{$tone:r.tone??"neutral",children:o.jsx(S,{essential:r})}):o.jsxs(mt,{$tone:r.tone??"neutral",children:[o.jsx(vt,{children:o.jsx(S,{essential:r})}),o.jsx(ut,{essential:r,gauge:r.gauge})]})]}),i.length>0&&o.jsxs(bt,{ref:l,$equal:n,children:[i.slice(0,a).map(u=>o.jsxs(yt,{"data-tiny-essential":"",$equal:n,children:[o.jsx(B,{children:u.label}),o.jsx(wt,{$tone:u.tone??"neutral",children:o.jsx(S,{essential:u})})]},u.label)),i.slice(a).map(u=>o.jsxs(R,{as:"div",children:[o.jsx("dt",{children:u.label}),o.jsx("dd",{children:u.control===void 0?o.jsx(S,{essential:u}):u.control.label})]},u.label))]})]})})}function it(e){const t=c.useRef(null),[n,r]=c.useState(e.length),[i,l]=c.useState(0),a=e.map(s=>`${s.label}\0${s.word??at(s.value)}`).join("");return c.useLayoutEffect(()=>{r(e.length)},[a,i,e.length]),c.useLayoutEffect(()=>{const s=t.current?.closest("[data-panel-fit-body]"),h=s?.firstElementChild;!s||!h||n===0||lt(h)>s.clientHeight&&r(n-1)}),c.useLayoutEffect(()=>{const s=t.current?.closest("[data-panel-fit-body]");if(!s||typeof ResizeObserver>"u")return;let h=s.clientHeight;const u=new ResizeObserver(()=>{s.clientHeight!==h&&(h=s.clientHeight,l(p=>p+1))});return u.observe(s),()=>u.disconnect()},[]),{rowsRef:t,drawn:n}}function at(e){try{return JSON.stringify(e)??""}catch{return String(e)}}function lt(e){const t=[],n=[];for(const r of Array.from(e.querySelectorAll("[data-tiny-essential]"))){const i=r.getBoundingClientRect();t.push(i.top),n.push(i.bottom)}return t.length===0?0:Math.max(...n)-Math.min(...t)}function S({essential:e}){const{control:t}=e;return t!==void 0?o.jsx(k,{text:t.hint??t.title,children:o.jsx(de,{size:"sm",pressed:t.active,disabled:t.disabled,onClick:t.onPress,"aria-label":t.title,children:t.label})}):o.jsxs(o.Fragment,{children:[e.level!==void 0&&o.jsx(Ke,{lit:e.level.lit,of:e.level.of,tone:e.tone,label:e.label}),e.word!==void 0?e.word:o.jsx(ct,{essential:e})]})}function ct({essential:e}){const{mark:t,value:n,decimals:r}=e,{held:i,shown:l}=L(n),a=e.signed===!0&&l!=null&&!l.isNegative()?"+":"",s=o.jsxs(o.Fragment,{children:[a,o.jsx(N,{value:n,decimals:r,scale:"compact",elsewhere:t?.elsewhere===!0&&(i||t.kind===void 0)?t.caption:void 0})]});return t===void 0||i||t.kind===void 0?s:o.jsx(ee,{kind:t.kind,elsewhere:t.elsewhere,caption:t.caption,children:s})}function ut({essential:e,gauge:t}){const{shown:n,held:r}=L(e.value),i=a=>rt({amount:a.max(t.min).min(t.max).minus(t.min),capacity:t.max.minus(t.min)})??0,l=n==null?null:i(n);return o.jsxs(xt,{"aria-hidden":"true","data-tiny-gauge":"","data-held":r?"":void 0,viewBox:"0 0 100 1",preserveAspectRatio:"none",children:[(t.bands??[]).map(a=>o.jsx("rect",{x:i(a.from)*100,y:0,width:(i(a.to)-i(a.from))*100,height:1,fill:_[a.tone],opacity:.35},`${i(a.from)}-${i(a.to)}`)),l!==null&&o.jsx("rect",{"data-tiny-gauge-fill":"",x:0,y:0,width:l*100,height:1,fill:_[e.tone??"neutral"],opacity:r?.55:1})]})}function dt(e){return e.filter(t=>t.word!==void 0).map(t=>`${t.label} ${t.word}`).join(", ")}function ft(e){return e.filter(t=>t.urgent===!0&&t.word!==void 0).map(t=>`${t.label} ${t.word}`)}function Vt({def:e,...t}){if(e.tiny!==void 0&&ht(e,t.w,t.h))return o.jsx(pt,{tiny:e.tiny,props:t});const n=e.component;return o.jsx(n,{...t})}function ht(e,t,n){if(e.tiny===void 0||t===void 0||n===void 0)return!1;const r=e.minSize??pe;return t<r.w||n<r.h}function Kt(e){return e.tiny!==void 0?ve:e.minSize}function pt({tiny:e,props:t}){const n=e.useEssentials(t);return o.jsx(st,{title:e.title,essentials:n,equalRows:e.equalRows})}const gt=f.dl`
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
`,mt=f(H)`
  flex-direction: column;
  align-items: stretch;
  gap: var(--gap-caption);
  line-height: var(--line-height-flush);
`,vt=f.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--gap-figure-parts);
`,xt=f.svg`
  display: block;
  width: 100%;
  height: var(--size-tiny-gauge);
`,B=f.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
`,bt=f.dl`
  ${({$equal:e})=>e?v`
          display: grid;
          grid-template-columns: auto auto;
          justify-content: space-between;
          /* The section around the rows shrinks to its content, so the rows take the tile's width from the fit body, which is the query container. */
          min-width: 100cqw;
          align-items: baseline;
          column-gap: var(--gap-label-value-tight);
          row-gap: var(--gap-related-packed);
        `:v`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--gap-row-wrap);
        `}
  margin: 0;
  max-width: 100%;
`,yt=f.div`
  ${({$equal:e})=>e?v`
          display: grid;
          grid-template-columns: subgrid;
          grid-column: 1 / -1;
          align-items: baseline;
          white-space: nowrap;
        `:v`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: baseline;
          column-gap: var(--gap-label-value-tight);
        `}
  max-width: 100%;
`,wt=f.dd`
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
`;export{Bt as A,Pt as C,Ke as L,Ht as R,st as T,qt as U,Vt as W,Dt as a,Mt as b,Ut as c,ye as d,P as e,ot as f,Kt as g,ze as h,q as i,Lt as j,Gt as k,ht as s,Nt as u,Wt as w};
