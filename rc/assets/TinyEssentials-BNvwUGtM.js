import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-RRA14VTW.js";import f,{ThemeProvider as Y,css as v}from"./ext-styled-components-Br73TgY3.js";import{F as K,m as Z,U as X,l as A,e as D,ah as k,ai as J,aN as Q,_ as R,bv as ee,az as te,ab as L,P as ne,a6 as I,af as N,ax as oe}from"./ModalSaveBar-CZ4CBFYh.js";import{k as re,m as _,T as C,i as se,b as ie,B as ae,y as le,a as ce,S as ue}from"./contributionsRead-Qt5ZQ4qn.js";import{c as de,f as fe}from"./ToggleButton-ilD-_Arj.js";import{Z as he,a1 as pe}from"./wrappedMap-DKSd6bqO.js";import"./screen-DjT1Ov-x.js";import{ah as ge,W as me}from"./view-clock-formula-Cg-VOQfI.js";import"./lagrange-CrtOuz3v.js";import"./use-transmissions-CHAHWcDd.js";import{T as ve}from"./tiny-size-BXC1Scz3.js";import"./ksp-enum-names-BDCIW13p.js";const M=[["--color-text-primary",e=>e.colors.text.primary],["--color-text-muted",e=>e.colors.text.muted],["--color-text-dim",e=>e.colors.text.dim],["--color-text-faint",e=>e.colors.text.faint],["--color-text-inverse",e=>e.colors.text.inverse],["--color-surface-app",e=>e.colors.surface.app],["--color-surface-panel",e=>e.colors.surface.panel],["--color-surface-raised",e=>e.colors.surface.raised],["--color-surface-sunken",e=>e.colors.surface.sunken],["--color-border-subtle",e=>e.colors.border.subtle],["--color-border-strong",e=>e.colors.border.strong],["--color-accent-fg",e=>e.colors.accent.fg],["--color-accent-bg",e=>e.colors.accent.bg],["--color-focus",e=>e.colors.focus],["--font-family-mono",e=>e.typography.family.mono],["--font-size-xs",e=>e.typography.size.xs],["--font-size-sm",e=>e.typography.size.sm],["--font-size-base",e=>e.typography.size.base],["--font-size-lg",e=>e.typography.size.lg]];function be(e){const t={};for(const[n,o]of M){const i=o(e);i!==`var(${n})`&&(t[n]=i)}return t}const xe=M.map(([e])=>e);function qt({theme:e,children:t}){return c.useLayoutEffect(()=>{const n=document.documentElement;for(const[o,i]of Object.entries(be(e)))n.style.setProperty(o,i);return()=>{for(const o of xe)n.style.removeProperty(o)}},[e]),r.jsx(Y,{theme:e,children:t})}function ye(){if(!("isSecureContext"in globalThis)||globalThis.isSecureContext!==!0)return{supported:!1,reason:"insecure-origin"};const e=typeof navigator>"u"?void 0:navigator.mediaDevices;return!e||typeof e.getUserMedia!="function"?{supported:!1,reason:"no-media-devices"}:{supported:!0}}function P(e,t){return e.label!==""?e.label:`Input ${t+1}, name withheld`}const we=new Set(["NotAllowedError","PermissionDeniedError","SecurityError"]),je=new Set(["NotFoundError","DevicesNotFoundError","OverconstrainedError","ConstraintNotSatisfiedError"]);function Se(e){if(e instanceof Error&&e.name!=="")return e.name;if(typeof e=="object"&&e!==null&&"name"in e){const t=e.name;if(typeof t=="string"&&t!=="")return t}return"UnknownError"}function ke(e){return we.has(e)?"refused":je.has(e)?"no-device":"failed"}function $(e){for(const t of e.getTracks())t.stop()}function _e(e){return e.getAudioTracks()[0]?.getSettings?.()?.deviceId??null}async function O(){const e=navigator.mediaDevices;if(!e||typeof e.enumerateDevices!="function")return[];try{return(await e.enumerateDevices()).filter(n=>n.kind==="audioinput"&&n.deviceId!=="").map(n=>({deviceId:n.deviceId,label:n.label}))}catch{return[]}}function Ee(){const e=ye();return{status:e.supported?"unasked":e.reason,devices:[],deviceId:null,stream:null,failure:null}}function ze(e={}){const[t,n]=c.useState(Ee),o=c.useRef(null),i=c.useRef(null),l=c.useRef(!0),a=c.useRef(e);c.useEffect(()=>{a.current=e});const s=c.useCallback(()=>{const d=o.current;d&&(o.current=null,i.current=null,$(d),a.current.onStream?.(null))},[]),h=c.useCallback(d=>{const b=i.current,x=o.current!==null&&(b===null?d.length===0:!d.some(g=>g.deviceId===b));n(g=>g.status==="no-device"&&d.length>0?{...g,status:"unasked",devices:d}:g.status!=="ready"||!x?{...g,devices:d}:{...g,status:d.length===0?"no-device":"unasked",devices:d,deviceId:null,stream:null}),x&&s()},[s]);c.useEffect(()=>{const d=navigator.mediaDevices;if(!d)return;let b=!1;const x=()=>{O().then(g=>{b||h(g)})};return x(),d.addEventListener?.("devicechange",x),()=>{b=!0,d.removeEventListener?.("devicechange",x)}},[h]),c.useEffect(()=>(l.current=!0,()=>{l.current=!1,s()}),[s]);const u=c.useRef(0),p=c.useCallback(async d=>{const b=navigator.mediaDevices;if(!b||typeof b.getUserMedia!="function")return;const x=++u.current,g=()=>u.current!==x;n(m=>({...m,status:m.stream?m.status:"requesting",failure:null}));const G={...a.current.constraints,...d===null?{}:{deviceId:{exact:d}}};try{const m=await b.getUserMedia({audio:G});if(!l.current||g()){$(m);return}const y=o.current;o.current=m,y&&y!==m&&$(y);const w=await O();if(g())return;const z=_e(m)??d??w[0]?.deviceId,V=w.length>0?w:$e(m,z);i.current=z??null,n({status:"ready",devices:V,deviceId:z??null,stream:m,failure:null}),a.current.onStream?.(m)}catch(m){if(!l.current||g())return;const y={name:Se(m),deviceId:d};n(w=>w.stream?{...w,failure:y}:{status:ke(y.name),devices:w.devices,deviceId:null,stream:null,failure:y})}},[]),j=c.useCallback(()=>p(null),[p]),E=c.useCallback(d=>p(d),[p]),W=c.useCallback(()=>{u.current++,s(),n(d=>({...d,status:d.status==="ready"||d.status==="requesting"?"unasked":d.status,deviceId:null,stream:null}))},[s]);return{...t,request:j,select:E,release:W}}function $e(e,t){return t?[{deviceId:t,label:e.getAudioTracks()[0]?.label??""}]:[]}function Bt({label:e="Audio input",...t}){const n=ze(t),o=c.useId(),i=Ie(n);return r.jsxs(re,{gap:"related-dense",children:[r.jsx(de,{tone:Ce(n.status),live:!0,children:Fe(n)}),n.status==="ready"&&n.devices.length>0?r.jsxs(K,{children:[r.jsx(Z,{htmlFor:o,children:e}),r.jsx(X,{id:o,value:n.deviceId??"",onChange:l=>{n.select(l.target.value)},children:n.devices.map((l,a)=>r.jsx("option",{value:l.deviceId,children:P(l,a)},l.deviceId))}),n.failure?r.jsx(A,{children:`The requested input did not open. The browser reported ${n.failure.name}, and the previous input is still running.`}):null]}):null,Te(n.status)?r.jsx(D,{type:"button",onClick:()=>{n.request()},disabled:n.status==="requesting","aria-busy":n.status==="requesting",children:"Request microphone access"}):null,i?r.jsx(A,{children:i}):null]})}function Te(e){return e==="unasked"||e==="requesting"||e==="failed"}const Re={"insecure-origin":"warn","no-media-devices":"nogo",unasked:"neutral",requesting:"info",refused:"nogo","no-device":"warn",failed:"nogo",ready:"go"};function Ce(e){return Re[e]}function Fe(e){switch(e.status){case"insecure-origin":return"This page is not a secure origin. Microphone capture is available on https pages and on localhost.";case"no-media-devices":return"This browser exposes no media device interface, so no input can be opened here.";case"unasked":return U(e)?"Microphone access is granted for this origin. No input is open.":"Microphone access has not been requested for this origin.";case"requesting":return"A capture request is with the browser, which may be prompting for access.";case"refused":return"Microphone access was refused for this origin. The browser holds that answer in its site settings and returns it to any further request without prompting.";case"no-device":return"No audio input device is present.";case"failed":return`The input did not open. The browser reported ${e.failure?.name??"an unnamed error"}.`;case"ready":return`Capturing from ${Ae(e)}.`}}function U(e){return e.devices.some(t=>t.label!=="")}function Ae(e){const t=e.devices.findIndex(o=>o.deviceId===e.deviceId),n=t===-1?void 0:e.devices[t];return n?P(n,t):"an unnamed input"}function Ie(e){if(e.status!=="unasked"||U(e))return null;const t=e.devices.length;return t===0?null:t===1?"One audio input is visible. Its name is withheld by the browser until access is granted.":`${t} audio inputs are visible. Their names are withheld by the browser until access is granted.`}const F=c.createContext(null);function Dt({settings:e,setAugmentSetting:t,children:n}){const o=c.useMemo(()=>({settings:e,setAugmentSetting:t}),[e,t]);return r.jsx(F.Provider,{value:o,children:n})}function Lt(e){const t=c.useContext(F),n=t?.settings,o=t?.setAugmentSetting;return c.useMemo(()=>({values:n?.[e]??Oe,set:(i,l)=>o?.(e,i,l)}),[n,o,e])}function Nt(){return c.useContext(F)?.settings}const Oe=Object.freeze({});function q(e){const t=e.trim().split(/\s+/).filter(Boolean);return t.length===0?"?":(t.length===1?Array.from(t[0]??"").slice(0,2):t.slice(0,2).map(o=>Array.from(o)[0]??"")).join("").toUpperCase()}const qe=3;function Mt({items:e,max:t=qe,label:n}){const o=Math.max(1,Math.floor(t)),i=e.length>o,l=i?e.slice(0,o-1):e,a=i?e.slice(o-1):[];return r.jsxs(Be,{$places:o,role:"group",...n===void 0?{}:{"aria-label":n},children:[l.map(s=>r.jsx(k,{text:s.name,announce:!1,focusable:s.onSelect===void 0,children:s.onSelect===void 0?r.jsx(T,{$tone:s.tone,role:"img","aria-label":s.name,children:q(s.name)}):r.jsx(T,{as:"button",type:"button",$tone:s.tone,"aria-label":s.name,onClick:s.onSelect,children:q(s.name)})},s.id)),a.length>0&&r.jsx(k,{text:a.map(s=>s.name).join(", "),announce:!1,focusable:!0,children:r.jsxs(T,{$tone:void 0,role:"img","aria-label":`${a.length} more: ${a.map(s=>s.name).join(", ")}`,children:["+",a.length]})})]})}const Be=f.div`
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
`;function Pt({blocked:e=!1,flag:t,prompt:n,onSend:o,sendDisabled:i=!1,sendLabel:l="Send",sendVariant:a="icon",sendTooltip:s,children:h,...u}){const p=c.useId();return r.jsxs(De,{$blocked:e,...u,children:[n!==void 0&&r.jsx(Le,{"aria-hidden":"true",children:n}),h,o!==void 0&&r.jsxs(r.Fragment,{children:[r.jsx(k,{text:s,announce:!1,children:r.jsx(Ne,{type:"button","aria-disabled":i||void 0,onClick:i?void 0:o,$icon:a==="icon",...s?{"aria-describedby":p}:{},...a==="icon"?{"aria-label":l}:{},children:a==="icon"?r.jsx(Q,{size:16}):l})}),s&&r.jsx(R,{id:p,children:s.replaceAll(`
`,". ")})]}),t!==void 0&&r.jsx(Me,{$blocked:e,role:"status",children:t})]})}const De=f.div`
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
`;function Pe({tone:e="accent",queue:t,composer:n,standing:o,children:i,...l}){const a=t!==void 0||n!==void 0||o!==void 0,s=o!==void 0&&!!n;return r.jsxs(Ue,{"data-console-frame":"",$tone:e,...l,children:[r.jsx(He,{children:i}),a&&r.jsxs(Ge,{$straddled:s,children:[t,o!==void 0&&r.jsx(We,{"data-console-standing":"",$straddle:s,children:o}),n]})]})}const Ue=f.div`
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
`,Ve="Uplink queue";function Ut({tone:e,oneWaySeconds:t=null,delayReading:n,canQueue:o=!0,alwaysBadge:i=!1,inFlight:l,inFlightFrozenAtDispatch:a=!1,composer:s,children:h,...u}){const p=ee({oneWaySeconds:t,canQueue:o,alwaysBadge:i}),j=p==="badge"?t:null,E=l!==void 0&&(p==="strip"||a&&p!=="badge");return r.jsx(Pe,{...e!==void 0?{tone:e}:{},...j!==null?{standing:r.jsx(he,{oneWaySeconds:j,delayReading:n})}:{},...E?{queue:r.jsx(te,{items:l,"aria-label":Ve})}:{},...s!==void 0?{composer:s}:{},...u,children:h})}function Ye({lit:e,of:t,tone:n="neutral",label:o}){const i=e===null?"unknown":`${e} of ${t}`;return r.jsx(Ke,{role:"img","aria-label":o===void 0?i:`${o} ${i}`,"data-level-bars":"",children:Array.from({length:t},(l,a)=>r.jsx(Ze,{$fill:e!==null&&a<e?_[n]:null,$height:(a+1)/t},a))})}const Ke=f.span`
  display: inline-flex;
  align-items: flex-end;
  gap: var(--gap-signal-bars);
  height: 0.8em;
  flex: none;
`,Ze=f.span`
  width: 0.22em;
  height: ${({$height:e})=>`${Math.round(e*100)}%`};
  background: ${({$fill:e})=>e??"transparent"};
  border: 1px solid ${({$fill:e})=>e??"var(--color-border-subtle)"};
`;function Ht({label:e,description:t,value:n,className:o}){return r.jsxs(Je,{className:o,children:[r.jsxs(Qe,{children:[r.jsx(et,{children:e}),t!=null&&r.jsx(tt,{children:t})]}),r.jsx(nt,{$prose:typeof n=="string",children:r.jsx(Xe,{value:n})})]})}function Xe({value:e}){return e==null?r.jsx(se,{}):typeof e=="object"?r.jsx(L,{value:e}):typeof e=="boolean"?e?"On":"Off":e}const Je=f.dl`
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
`;function ot(e,t){const n={w:0,h:0},o=a=>{n.w+=a?.w??0,n.h+=a?.h??0},i=a=>a.requires===void 0||t(a.requires);for(const a of new Set(e.augmentSlots??[]))for(const s of le(a))i(s)&&o(s.sizeDelta);const l=new Set([...e.contributionSlots??[],...ce.map(a=>`${e.id}.${a}`)]);for(const a of l)for(const s of me(a))i(s)&&o(s.sizeDelta);return n}function Wt(e,t){if(t.w===0&&t.h===0)return e;const n=o=>({w:o.w+t.w,h:o.h+t.h});return{...e,minSize:n(e.minSize??{w:1,h:1}),defaultSize:n(e.defaultSize??{w:3,h:3})}}function Gt(){const e=ie(),[t,n]=c.useReducer(o=>o+1,0);return c.useEffect(()=>{const o=[ae(n),ge(n),e?.subscribe(n)];return()=>{for(const i of o)i?.()}},[e]),c.useCallback(o=>ot(o,i=>e?.isAvailable(i)??!1),[e,t])}function rt(e){return e===null||!e.capacity.isPositive()?null:e.amount.dividedBy(e.capacity).magnitude}function st({title:e,essentials:t,equalRows:n=!1}){const o=n?void 0:t[0],i=n?t:t.slice(1),{rowsRef:l,drawn:a}=it(i),s=t.some(u=>u.urgent!==void 0),h=o!==void 0&&i.length===0&&o.label.toUpperCase()===e.toUpperCase();return r.jsx(ne,{panelTitle:e,fitToSize:!0,hoverTitle:!0,sections:r.jsxs(ue,{full:!0,children:[r.jsx(I,{visuallyHidden:!0,children:ft(t.filter(u=>u.urgent!==!0))}),s&&r.jsx(I,{visuallyHidden:!0,assertive:!0,additionsOnly:!0,children:ht(t).map(u=>r.jsx(c.Fragment,{children:`${u}. `},u))}),o!==void 0&&r.jsxs(mt,{"data-tiny-essential":"",children:[h?r.jsx(R,{as:"dt",children:o.label}):r.jsx(B,{children:o.label}),o.gauge===void 0?r.jsx(H,{$tone:o.tone??"neutral",children:r.jsx(S,{essential:o})}):r.jsxs(vt,{$tone:o.tone??"neutral",children:[r.jsx(bt,{children:r.jsx(S,{essential:o})}),r.jsx(dt,{essential:o,gauge:o.gauge})]})]}),i.length>0&&r.jsxs(yt,{ref:l,$equal:n,children:[i.slice(0,a).map(u=>r.jsxs(wt,{"data-tiny-essential":"",$equal:n,children:[r.jsx(B,{children:u.label}),r.jsx(jt,{$tone:u.tone??"neutral",children:r.jsx(S,{essential:u})})]},u.label)),i.slice(a).map(u=>r.jsxs(R,{as:"div",children:[r.jsx("dt",{children:u.label}),r.jsx("dd",{children:u.control===void 0?r.jsx(S,{essential:u}):u.control.label})]},u.label))]})]})})}function it(e){const t=c.useRef(null),[n,o]=c.useState(e.length),[i,l]=c.useState(0),a=e.map(s=>`${s.label}\0${s.word??at(s.value)}`).join("");return c.useLayoutEffect(()=>{o(e.length)},[a,i,e.length]),c.useLayoutEffect(()=>{const s=t.current?.closest("[data-panel-fit-body]"),h=s?.firstElementChild;!s||!h||n===0||lt(h)>s.clientHeight&&o(n-1)}),c.useLayoutEffect(()=>{const s=t.current?.closest("[data-panel-fit-body]");if(!s||typeof ResizeObserver>"u")return;let h=s.clientHeight;const u=new ResizeObserver(()=>{s.clientHeight!==h&&(h=s.clientHeight,l(p=>p+1))});return u.observe(s),()=>u.disconnect()},[]),{rowsRef:t,drawn:n}}function at(e){try{return JSON.stringify(e)??""}catch{return String(e)}}function lt(e){const t=[],n=[];for(const o of Array.from(e.querySelectorAll("[data-tiny-essential]"))){const i=o.getBoundingClientRect();t.push(i.top),n.push(i.bottom)}return t.length===0?0:Math.max(...n)-Math.min(...t)}function S({essential:e}){const{control:t}=e;return t!==void 0?r.jsx(k,{text:t.hint??t.title,children:r.jsx(fe,{size:"sm",pressed:t.active,disabled:t.disabled,onClick:t.onPress,"aria-label":t.title,children:t.label})}):r.jsxs(r.Fragment,{children:[e.level!==void 0&&r.jsx(Ye,{lit:e.level.lit,of:e.level.of,tone:e.tone,label:e.label}),e.word!==void 0?e.word:r.jsx(ut,{essential:e})]})}function ct(e,t){return typeof e=="object"&&e!==null&&"state"in e?{...e,value:t.abs()}:t.abs()}function ut({essential:e}){const{mark:t,value:n,decimals:o}=e,{held:i,shown:l}=N(n),a=e.signed===!0&&l?.isFinite()===!0,s=a&&o!==void 0&&Math.abs(l.valueOf())<.5*10**-o,h=a&&(s||!l.isNegative())?"+":"",u=s?ct(n,l):n,p=r.jsxs(r.Fragment,{children:[h,r.jsx(L,{value:u,decimals:o,scale:"compact",elsewhere:t?.elsewhere===!0&&(i||t.kind===void 0)?t.caption:void 0})]});return t===void 0||i||t.kind===void 0?p:r.jsx(oe,{kind:t.kind,elsewhere:t.elsewhere,caption:t.caption,children:p})}function dt({essential:e,gauge:t}){const{shown:n,held:o}=N(e.value),i=a=>rt({amount:a.max(t.min).min(t.max).minus(t.min),capacity:t.max.minus(t.min)})??0,l=n==null?null:i(n);return r.jsxs(xt,{"aria-hidden":"true","data-tiny-gauge":"","data-held":o?"":void 0,viewBox:"0 0 100 1",preserveAspectRatio:"none",children:[(t.bands??[]).map(a=>r.jsx("rect",{x:i(a.from)*100,y:0,width:(i(a.to)-i(a.from))*100,height:1,fill:_[a.tone],opacity:.35},`${i(a.from)}-${i(a.to)}`)),l!==null&&r.jsx("rect",{"data-tiny-gauge-fill":"",x:0,y:0,width:l*100,height:1,fill:_[e.tone??"neutral"],opacity:o?.55:1})]})}function ft(e){return e.filter(t=>t.word!==void 0).map(t=>`${t.label} ${t.word}`).join(", ")}function ht(e){return e.filter(t=>t.urgent===!0&&t.word!==void 0).map(t=>`${t.label} ${t.word}`)}function Vt({def:e,...t}){if(e.tiny!==void 0&&pt(e,t.w,t.h))return r.jsx(gt,{tiny:e.tiny,props:t});const n=e.component;return r.jsx(n,{...t})}function pt(e,t,n){if(e.tiny===void 0||t===void 0||n===void 0)return!1;const o=e.minSize??pe;return t<o.w||n<o.h}function Yt(e){return e.tiny!==void 0?ve:e.minSize}function gt({tiny:e,props:t}){const n=e.useEssentials(t);return r.jsx(st,{title:e.title,essentials:n,equalRows:e.equalRows})}const mt=f.dl`
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
`,vt=f(H)`
  flex-direction: column;
  align-items: stretch;
  gap: var(--gap-caption);
  line-height: var(--line-height-flush);
`,bt=f.span`
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
`,yt=f.dl`
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
`,wt=f.div`
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
`,jt=f.dd`
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
`;export{Bt as A,Pt as C,Ye as L,Ht as R,st as T,qt as U,Vt as W,Dt as a,Mt as b,Ut as c,ye as d,P as e,ot as f,Yt as g,ze as h,q as i,Lt as j,Gt as k,pt as s,Nt as u,Wt as w};
