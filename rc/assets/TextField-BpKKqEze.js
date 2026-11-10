import{j as o}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./ext-react-C0MU9AHG.js";import f,{ThemeProvider as K,css as S}from"./ext-styled-components-DAuodqsN.js";import{F as I,m as A,V as G,l as z,e as R,ag as E,aj as H,b0 as $,I as q,$ as Y,bS as Q,aH as W,ac as X,af as Z,y as B,a7 as J}from"./ModalSaveBar-CP3fcnhB.js";import{e as ee,g as te,j as ne,c as oe,G as re,t as se,q as ae,V as ie,k as M}from"./contributionsRead-DsV6K_C2.js";import{d as le}from"./TinyEssentials-siyGaSZD.js";import{Z as ce}from"./wrappedMap-CxCORn5s.js";import"./screen-C--ukhnW.js";import{aj as ue,Q as de}from"./view-clock-formula-nrcILacK.js";import"./lagrange-Cs2miMYP.js";import"./logger-2_QM1wvD.js";import"./use-transmissions-C6oNEXS8.js";const N=[["--color-text-primary",e=>e.colors.text.primary],["--color-text-muted",e=>e.colors.text.muted],["--color-text-dim",e=>e.colors.text.dim],["--color-text-faint",e=>e.colors.text.faint],["--color-text-inverse",e=>e.colors.text.inverse],["--color-surface-app",e=>e.colors.surface.app],["--color-surface-panel",e=>e.colors.surface.panel],["--color-surface-raised",e=>e.colors.surface.raised],["--color-surface-sunken",e=>e.colors.surface.sunken],["--color-border-subtle",e=>e.colors.border.subtle],["--color-border-strong",e=>e.colors.border.strong],["--color-accent-fg",e=>e.colors.accent.fg],["--color-accent-bg",e=>e.colors.accent.bg],["--color-focus",e=>e.colors.focus],["--font-family-mono",e=>e.typography.family.mono],["--font-size-xs",e=>e.typography.size.xs],["--font-size-sm",e=>e.typography.size.sm],["--font-size-base",e=>e.typography.size.base],["--font-size-lg",e=>e.typography.size.lg]];function fe(e){const t={};for(const[n,r]of N){const a=r(e);a!==`var(${n})`&&(t[n]=a)}return t}const pe=N.map(([e])=>e);function pt({theme:e,children:t}){return u.useLayoutEffect(()=>{const n=document.documentElement;for(const[r,a]of Object.entries(fe(e)))n.style.setProperty(r,a);return()=>{for(const r of pe)n.style.removeProperty(r)}},[e]),o.jsx(K,{theme:e,children:t})}function he(){if(!("isSecureContext"in globalThis)||globalThis.isSecureContext!==!0)return{supported:!1,reason:"insecure-origin"};const e=typeof navigator>"u"?void 0:navigator.mediaDevices;return!e||typeof e.getUserMedia!="function"?{supported:!1,reason:"no-media-devices"}:{supported:!0}}function L(e,t){return e.label!==""?e.label:`Input ${t+1}, name withheld`}const ve=new Set(["NotAllowedError","PermissionDeniedError","SecurityError"]),ge=new Set(["NotFoundError","DevicesNotFoundError","OverconstrainedError","ConstraintNotSatisfiedError"]);function me(e){if(e instanceof Error&&e.name!=="")return e.name;if(typeof e=="object"&&e!==null&&"name"in e){const t=e.name;if(typeof t=="string"&&t!=="")return t}return"UnknownError"}function xe(e){return ve.has(e)?"refused":ge.has(e)?"no-device":"failed"}function _(e){for(const t of e.getTracks())t.stop()}function be(e){return e.getAudioTracks()[0]?.getSettings?.()?.deviceId??null}async function O(){const e=navigator.mediaDevices;if(!e||typeof e.enumerateDevices!="function")return[];try{return(await e.enumerateDevices()).filter(n=>n.kind==="audioinput"&&n.deviceId!=="").map(n=>({deviceId:n.deviceId,label:n.label}))}catch{return[]}}function ye(){const e=he();return{status:e.supported?"unasked":e.reason,devices:[],deviceId:null,stream:null,failure:null}}function we(e={}){const[t,n]=u.useState(ye),r=u.useRef(null),a=u.useRef(null),l=u.useRef(!0),i=u.useRef(e);u.useEffect(()=>{i.current=e});const s=u.useCallback(()=>{const c=r.current;c&&(r.current=null,a.current=null,_(c),i.current.onStream?.(null))},[]),p=u.useCallback(c=>{const x=a.current,v=r.current!==null&&(x===null?c.length===0:!c.some(g=>g.deviceId===x));n(g=>g.status==="no-device"&&c.length>0?{...g,status:"unasked",devices:c}:g.status!=="ready"||!v?{...g,devices:c}:{...g,status:c.length===0?"no-device":"unasked",devices:c,deviceId:null,stream:null}),v&&s()},[s]);u.useEffect(()=>{const c=navigator.mediaDevices;if(!c)return;let x=!1;const v=()=>{O().then(g=>{x||p(g)})};return v(),c.addEventListener?.("devicechange",v),()=>{x=!0,c.removeEventListener?.("devicechange",v)}},[p]),u.useEffect(()=>(l.current=!0,()=>{l.current=!1,s()}),[s]);const h=u.useRef(0),d=u.useCallback(async c=>{const x=navigator.mediaDevices;if(!x||typeof x.getUserMedia!="function")return;const v=++h.current,g=()=>h.current!==v;n(m=>({...m,status:m.stream?m.status:"requesting",failure:null}));const U={...i.current.constraints,...c===null?{}:{deviceId:{exact:c}}};try{const m=await x.getUserMedia({audio:U});if(!l.current||g()){_(m);return}const w=r.current;r.current=m,w&&w!==m&&_(w);const j=await O();if(g())return;const C=be(m)??c??j[0]?.deviceId,V=j.length>0?j:je(m,C);a.current=C??null,n({status:"ready",devices:V,deviceId:C??null,stream:m,failure:null}),i.current.onStream?.(m)}catch(m){if(!l.current||g())return;const w={name:me(m),deviceId:c};n(j=>j.stream?{...j,failure:w}:{status:xe(w.name),devices:j.devices,deviceId:null,stream:null,failure:w})}},[]),b=u.useCallback(()=>d(null),[d]),y=u.useCallback(c=>d(c),[d]),k=u.useCallback(()=>{h.current++,s(),n(c=>({...c,status:c.status==="ready"||c.status==="requesting"?"unasked":c.status,deviceId:null,stream:null}))},[s]);return{...t,request:b,select:y,release:k}}function je(e,t){return t?[{deviceId:t,label:e.getAudioTracks()[0]?.label??""}]:[]}function ht({label:e="Audio input",...t}){const n=we(t),r=u.useId(),a=_e(n);return o.jsxs(ee,{gap:"related-dense",children:[o.jsx(le,{tone:ze(n.status),live:!0,children:Ee(n)}),n.status==="ready"&&n.devices.length>0?o.jsxs(I,{children:[o.jsx(A,{htmlFor:r,children:e}),o.jsx(G,{id:r,value:n.deviceId??"",onChange:l=>{n.select(l.target.value)},children:n.devices.map((l,i)=>o.jsx("option",{value:l.deviceId,children:L(l,i)},l.deviceId))}),n.failure?o.jsx(z,{children:`The requested input did not open. The browser reported ${n.failure.name}, and the previous input is still running.`}):null]}):null,Se(n.status)?o.jsx(R,{type:"button",onClick:()=>{n.request()},disabled:n.status==="requesting","aria-busy":n.status==="requesting",children:"Request microphone access"}):null,a?o.jsx(z,{children:a}):null]})}function Se(e){return e==="unasked"||e==="requesting"||e==="failed"}const ke={"insecure-origin":"warn","no-media-devices":"nogo",unasked:"neutral",requesting:"info",refused:"nogo","no-device":"warn",failed:"nogo",ready:"go"};function ze(e){return ke[e]}function Ee(e){switch(e.status){case"insecure-origin":return"This page is not a secure origin. Microphone capture is available on https pages and on localhost.";case"no-media-devices":return"This browser exposes no media device interface, so no input can be opened here.";case"unasked":return P(e)?"Microphone access is granted for this origin. No input is open.":"Microphone access has not been requested for this origin.";case"requesting":return"A capture request is with the browser, which may be prompting for access.";case"refused":return"Microphone access was refused for this origin. The browser holds that answer in its site settings and returns it to any further request without prompting.";case"no-device":return"No audio input device is present.";case"failed":return`The input did not open. The browser reported ${e.failure?.name??"an unnamed error"}.`;case"ready":return`Capturing from ${Ce(e)}.`}}function P(e){return e.devices.some(t=>t.label!=="")}function Ce(e){const t=e.devices.findIndex(r=>r.deviceId===e.deviceId),n=t===-1?void 0:e.devices[t];return n?L(n,t):"an unnamed input"}function _e(e){if(e.status!=="unasked"||P(e))return null;const t=e.devices.length;return t===0?null:t===1?"One audio input is visible. Its name is withheld by the browser until access is granted.":`${t} audio inputs are visible. Their names are withheld by the browser until access is granted.`}const T=u.createContext(null);function vt({settings:e,setAugmentSetting:t,children:n}){const r=u.useMemo(()=>({settings:e,setAugmentSetting:t}),[e,t]);return o.jsx(T.Provider,{value:r,children:n})}function gt(e){const t=u.useContext(T),n=t?.settings,r=t?.setAugmentSetting;return u.useMemo(()=>({values:n?.[e]??Fe,set:(a,l)=>r?.(e,a,l)}),[n,r,e])}function mt(){return u.useContext(T)?.settings}const Fe=Object.freeze({});function D(e){const t=e.trim().split(/\s+/).filter(Boolean);return t.length===0?"?":(t.length===1?Array.from(t[0]??"").slice(0,2):t.slice(0,2).map(r=>Array.from(r)[0]??"")).join("").toUpperCase()}const Ie=3;function xt({items:e,max:t=Ie,label:n}){const r=Math.max(1,Math.floor(t)),a=e.length>r,l=a?e.slice(0,r-1):e,i=a?e.slice(r-1):[];return o.jsxs(Ae,{$places:r,role:"group",...n===void 0?{}:{"aria-label":n},children:[l.map(s=>o.jsx(E,{text:s.name,announce:!1,focusable:s.onSelect===void 0,children:s.onSelect===void 0?o.jsx(F,{$tone:s.tone,role:"img","aria-label":s.name,children:D(s.name)}):o.jsx(F,{as:"button",type:"button",$tone:s.tone,"aria-label":s.name,onClick:s.onSelect,children:D(s.name)})},s.id)),i.length>0&&o.jsx(E,{text:i.map(s=>s.name).join(", "),announce:!1,focusable:!0,children:o.jsxs(F,{$tone:void 0,role:"img","aria-label":`${i.length} more: ${i.map(s=>s.name).join(", ")}`,children:["+",i.length]})})]})}const Ae=f.div`
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
`,F=f.span`
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: var(--avatar-size);
  block-size: var(--avatar-size);
  margin: 0;
  padding: 0;
  border: 1px solid ${({$tone:e})=>te[e??"neutral"]};
  border-radius: var(--radius-circle);
  background: var(--color-surface-raised);
  color: ${({$tone:e})=>ne[e??"neutral"]};
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
  ${H}
  &:focus-visible {
    position: relative;
  }
`;function bt({blocked:e=!1,flag:t,prompt:n,sendLabel:r="Send",sendVariant:a="icon",sendTooltip:l,children:i,onSend:s,sendDisabled:p=!1,command:h,sendUnavailable:d,...b}){const y=u.useId();return o.jsxs(Re,{$blocked:e,...b,children:[n!==void 0&&o.jsx(Te,{"aria-hidden":"true",children:n}),i,h!==void 0&&(a==="icon"?o.jsx(Oe,{command:h,unavailable:d,"aria-label":r,tip:l,children:o.jsx($,{size:16})}):o.jsx(De,{command:h,unavailable:d,size:"sm",tip:l,children:r})),s!==void 0&&o.jsxs(o.Fragment,{children:[o.jsx($e,{children:o.jsx(E,{text:l,announce:!1,children:a==="icon"?o.jsx(q,{type:"button","aria-disabled":p||void 0,onClick:p?void 0:s,"aria-label":r,...l?{"aria-describedby":y}:{},children:o.jsx($,{size:16})}):o.jsx(R,{type:"button","aria-disabled":p||void 0,onClick:p?void 0:s,...l?{"aria-describedby":y}:{},children:r})})}),l&&o.jsx(Y,{id:y,children:l.replaceAll(`
`,". ")})]}),t!==void 0&&o.jsx(qe,{$blocked:e,role:"status",children:t})]})}const Re=f.div`
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
`,Te=f.span`
  flex: 0 0 auto;
  color: var(--console-tone-fg, var(--color-accent-fg));
  font-weight: bold;
  margin-right: var(--gap-prompt-glyph);
`,$e=f.span`
  flex: 0 0 auto;
  margin-left: auto;
  display: inline-flex;
`,Oe=f(q)`
  flex: 0 0 auto;
  margin-left: auto;
  color: var(--console-tone-fg, var(--color-accent-fg));
`,De=f(R)`
  flex: 0 0 auto;
  margin-left: auto;
  font-size: var(--font-size-compact);
`,qe=f.div`
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
`;function Be({tone:e="accent",queue:t,composer:n,standing:r,children:a,...l}){const i=t!==void 0||n!==void 0||r!==void 0,s=r!==void 0&&!!n;return o.jsxs(Me,{"data-console-frame":"",$tone:e,...l,children:[o.jsx(Ne,{children:a}),i&&o.jsxs(Pe,{$straddled:s,children:[t,r!==void 0&&o.jsx(Le,{"data-console-standing":"",$straddle:s,children:r}),n]})]})}const Me=f.div`
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
`,Ne=f.div`
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  display: flex;
`,Le=f.div`
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
`,Pe=f.div`
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
`,Ue="Uplink queue";function yt({tone:e,oneWaySeconds:t=null,delayReading:n,canQueue:r=!0,alwaysBadge:a=!1,inFlight:l,inFlightFrozenAtDispatch:i=!1,composer:s,children:p,...h}){const d=Q({oneWaySeconds:t,canQueue:r,alwaysBadge:a}),b=d==="badge"?t:null,y=l!==void 0&&(d==="strip"||i&&d!=="badge");return o.jsx(Be,{...e!==void 0?{tone:e}:{},...b!==null?{standing:o.jsx(ce,{oneWaySeconds:b,delayReading:n})}:{},...y?{queue:o.jsx(W,{items:l,"aria-label":Ue})}:{},...s!==void 0?{composer:s}:{},...h,children:p})}const wt=f.kbd`
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
`;function jt({label:e,description:t,value:n,className:r}){return o.jsxs(Ke,{className:r,children:[o.jsxs(Ge,{children:[o.jsx(He,{children:e}),t!=null&&o.jsx(Ye,{children:t})]}),o.jsx(Qe,{$prose:typeof n=="string",children:o.jsx(Ve,{value:n})})]})}function Ve({value:e}){return e==null?o.jsx(oe,{}):typeof e=="object"?o.jsx(X,{value:e}):typeof e=="boolean"?e?"On":"Off":e}const Ke=f.dl`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--gap-field-term);
  margin: 0;
`,Ge=f.dt`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  min-width: 0;
  /* Grows into the space a short value leaves and yields to a long one. */
  flex: 1 1 auto;
`,He=f.span`
  font-size: var(--font-size-value);
  color: var(--color-text-primary);
`,Ye=f.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-dim);
  max-width: 32em;
`,Qe=f.dd`
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
`;function We(e,t){const n={w:0,h:0},r=i=>{n.w+=i?.w??0,n.h+=i?.h??0},a=i=>i.requires===void 0||t(i.requires);for(const i of new Set(e.augmentSlots??[]))for(const s of ae(i))a(s)&&r(s.sizeDelta);const l=new Set([...e.contributionSlots??[],...ie.map(i=>`${e.id}.${i}`)]);for(const i of l)for(const s of de(i))a(s)&&r(s.sizeDelta);return n}function St(e,t){if(t.w===0&&t.h===0)return e;const n=r=>({w:r.w+t.w,h:r.h+t.h});return{...e,minSize:n(e.minSize??{w:1,h:1}),defaultSize:n(e.defaultSize??{w:3,h:3}),...e.maxSize!==void 0?{maxSize:n(e.maxSize)}:{}}}function kt(){const e=re(),[t,n]=u.useReducer(r=>r+1,0);return u.useEffect(()=>{const r=[se(n),ue(n),e?.subscribe(n)];return()=>{for(const a of r)a?.()}},[e]),u.useCallback(r=>We(r,a=>e?.isAvailable(a)??!1),[e,t])}function zt(e){return e.command?o.jsx(Je,{...e,command:e.command}):o.jsx(et,{...e})}const Xe=f.div`
  position: relative;
  width: 100%;

`,Ze=f.span`
  position: absolute;
  inset-block: 0;
  inset-inline-end: var(--gap-related);
  display: flex;
  align-items: center;
  pointer-events: none;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
`;function Je({label:e,value:t,command:n,unavailable:r,invalid:a,placeholder:l,maxLength:i,"data-testid":s}){const p=u.useId(),h=`${p}-invalid`,d=Z({command:n,unavailable:r}),[b,y]=u.useState(null),k=!d.control.isSent,c=d.control.isRefused||d.control.isLost;u.useEffect(()=>{c&&y(null)},[c]),u.useEffect(()=>{k&&!c&&y(v=>v===t?null:v)},[k,c,t]);const x=()=>{b===null||b===t||d.inert||d.send(b)};return o.jsxs(I,{children:[o.jsx(A,{htmlFor:p,children:e}),o.jsx(E,{text:d.tip,children:o.jsxs(Xe,{children:[o.jsx(B,{...d.edge,"aria-describedby":a==null?void 0:h,"aria-invalid":a==null?void 0:!0,"data-testid":s,id:p,maxLength:i,onBlur:x,onChange:v=>y(v.target.value),onKeyDown:v=>{v.key==="Enter"&&x()},placeholder:l,type:"text",value:b??t}),o.jsx(Ze,{"aria-hidden":"true",children:d.word}),o.jsx(J,{visuallyHidden:!0,children:d.announce})]})}),a!=null&&o.jsx(z,{id:h,children:o.jsx(M,{size:"xs",tone:"warn",children:a})})]})}function et({label:e,value:t,onChange:n,invalid:r,placeholder:a,maxLength:l,disabled:i,"data-testid":s}){const p=u.useId(),h=`${p}-invalid`;return o.jsxs(I,{children:[o.jsx(A,{htmlFor:p,children:e}),o.jsx(B,{"aria-describedby":r==null?void 0:h,"aria-invalid":r==null?void 0:!0,"data-testid":s,disabled:i,id:p,maxLength:l,onChange:d=>n(d.target.value),placeholder:a,type:"text",value:t}),r!=null&&o.jsx(z,{id:h,children:o.jsx(M,{size:"xs",tone:"warn",children:r})})]})}export{ht as A,bt as C,wt as K,jt as R,zt as T,pt as U,vt as a,xt as b,yt as c,he as d,L as e,we as f,gt as g,kt as h,D as i,We as s,mt as u,St as w};
