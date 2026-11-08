import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-C0MU9AHG.js";import f,{ThemeProvider as P,css as y}from"./ext-styled-components-DAuodqsN.js";import{F as T,m as A,V,l as z,e as O,ag as E,aj as K,b0 as H,$ as G,bS as W,aH as Y,ac as X,af as Q,y as D,a7 as J}from"./ModalSaveBar-DZOHmqkI.js";import{e as Z,g as ee,j as te,c as ne,G as oe,t as re,q as se,V as ae,k as q}from"./contributionsRead-CPPxpZgi.js";import{d as ie}from"./TinyEssentials-B5k0OANQ.js";import{W as le}from"./wrappedMap-BUblqIgo.js";import"./screen-CAKDCRrz.js";import{ai as ce,W as ue}from"./view-clock-formula-BskYJ4Bb.js";import"./lagrange-qsL-TsQ4.js";import"./logger-2_QM1wvD.js";import"./use-transmissions-Bp2aFRCJ.js";const M=[["--color-text-primary",e=>e.colors.text.primary],["--color-text-muted",e=>e.colors.text.muted],["--color-text-dim",e=>e.colors.text.dim],["--color-text-faint",e=>e.colors.text.faint],["--color-text-inverse",e=>e.colors.text.inverse],["--color-surface-app",e=>e.colors.surface.app],["--color-surface-panel",e=>e.colors.surface.panel],["--color-surface-raised",e=>e.colors.surface.raised],["--color-surface-sunken",e=>e.colors.surface.sunken],["--color-border-subtle",e=>e.colors.border.subtle],["--color-border-strong",e=>e.colors.border.strong],["--color-accent-fg",e=>e.colors.accent.fg],["--color-accent-bg",e=>e.colors.accent.bg],["--color-focus",e=>e.colors.focus],["--font-family-mono",e=>e.typography.family.mono],["--font-size-xs",e=>e.typography.size.xs],["--font-size-sm",e=>e.typography.size.sm],["--font-size-base",e=>e.typography.size.base],["--font-size-lg",e=>e.typography.size.lg]];function de(e){const t={};for(const[n,o]of M){const a=o(e);a!==`var(${n})`&&(t[n]=a)}return t}const fe=M.map(([e])=>e);function ut({theme:e,children:t}){return c.useLayoutEffect(()=>{const n=document.documentElement;for(const[o,a]of Object.entries(de(e)))n.style.setProperty(o,a);return()=>{for(const o of fe)n.style.removeProperty(o)}},[e]),r.jsx(P,{theme:e,children:t})}function he(){if(!("isSecureContext"in globalThis)||globalThis.isSecureContext!==!0)return{supported:!1,reason:"insecure-origin"};const e=typeof navigator>"u"?void 0:navigator.mediaDevices;return!e||typeof e.getUserMedia!="function"?{supported:!1,reason:"no-media-devices"}:{supported:!0}}function N(e,t){return e.label!==""?e.label:`Input ${t+1}, name withheld`}const pe=new Set(["NotAllowedError","PermissionDeniedError","SecurityError"]),ge=new Set(["NotFoundError","DevicesNotFoundError","OverconstrainedError","ConstraintNotSatisfiedError"]);function ve(e){if(e instanceof Error&&e.name!=="")return e.name;if(typeof e=="object"&&e!==null&&"name"in e){const t=e.name;if(typeof t=="string"&&t!=="")return t}return"UnknownError"}function me(e){return pe.has(e)?"refused":ge.has(e)?"no-device":"failed"}function _(e){for(const t of e.getTracks())t.stop()}function be(e){return e.getAudioTracks()[0]?.getSettings?.()?.deviceId??null}async function I(){const e=navigator.mediaDevices;if(!e||typeof e.enumerateDevices!="function")return[];try{return(await e.enumerateDevices()).filter(n=>n.kind==="audioinput"&&n.deviceId!=="").map(n=>({deviceId:n.deviceId,label:n.label}))}catch{return[]}}function xe(){const e=he();return{status:e.supported?"unasked":e.reason,devices:[],deviceId:null,stream:null,failure:null}}function ye(e={}){const[t,n]=c.useState(xe),o=c.useRef(null),a=c.useRef(null),u=c.useRef(!0),i=c.useRef(e);c.useEffect(()=>{i.current=e});const s=c.useCallback(()=>{const l=o.current;l&&(o.current=null,a.current=null,_(l),i.current.onStream?.(null))},[]),p=c.useCallback(l=>{const b=a.current,h=o.current!==null&&(b===null?l.length===0:!l.some(v=>v.deviceId===b));n(v=>v.status==="no-device"&&l.length>0?{...v,status:"unasked",devices:l}:v.status!=="ready"||!h?{...v,devices:l}:{...v,status:l.length===0?"no-device":"unasked",devices:l,deviceId:null,stream:null}),h&&s()},[s]);c.useEffect(()=>{const l=navigator.mediaDevices;if(!l)return;let b=!1;const h=()=>{I().then(v=>{b||p(v)})};return h(),l.addEventListener?.("devicechange",h),()=>{b=!0,l.removeEventListener?.("devicechange",h)}},[p]),c.useEffect(()=>(u.current=!0,()=>{u.current=!1,s()}),[s]);const g=c.useRef(0),d=c.useCallback(async l=>{const b=navigator.mediaDevices;if(!b||typeof b.getUserMedia!="function")return;const h=++g.current,v=()=>g.current!==h;n(m=>({...m,status:m.stream?m.status:"requesting",failure:null}));const L={...i.current.constraints,...l===null?{}:{deviceId:{exact:l}}};try{const m=await b.getUserMedia({audio:L});if(!u.current||v()){_(m);return}const S=o.current;o.current=m,S&&S!==m&&_(S);const j=await I();if(v())return;const C=be(m)??l??j[0]?.deviceId,U=j.length>0?j:we(m,C);a.current=C??null,n({status:"ready",devices:U,deviceId:C??null,stream:m,failure:null}),i.current.onStream?.(m)}catch(m){if(!u.current||v())return;const S={name:ve(m),deviceId:l};n(j=>j.stream?{...j,failure:S}:{status:me(S.name),devices:j.devices,deviceId:null,stream:null,failure:S})}},[]),x=c.useCallback(()=>d(null),[d]),w=c.useCallback(l=>d(l),[d]),k=c.useCallback(()=>{g.current++,s(),n(l=>({...l,status:l.status==="ready"||l.status==="requesting"?"unasked":l.status,deviceId:null,stream:null}))},[s]);return{...t,request:x,select:w,release:k}}function we(e,t){return t?[{deviceId:t,label:e.getAudioTracks()[0]?.label??""}]:[]}function dt({label:e="Audio input",...t}){const n=ye(t),o=c.useId(),a=Ce(n);return r.jsxs(Z,{gap:"related-dense",children:[r.jsx(ie,{tone:ke(n.status),live:!0,children:ze(n)}),n.status==="ready"&&n.devices.length>0?r.jsxs(T,{children:[r.jsx(A,{htmlFor:o,children:e}),r.jsx(V,{id:o,value:n.deviceId??"",onChange:u=>{n.select(u.target.value)},children:n.devices.map((u,i)=>r.jsx("option",{value:u.deviceId,children:N(u,i)},u.deviceId))}),n.failure?r.jsx(z,{children:`The requested input did not open. The browser reported ${n.failure.name}, and the previous input is still running.`}):null]}):null,Se(n.status)?r.jsx(O,{type:"button",onClick:()=>{n.request()},disabled:n.status==="requesting","aria-busy":n.status==="requesting",children:"Request microphone access"}):null,a?r.jsx(z,{children:a}):null]})}function Se(e){return e==="unasked"||e==="requesting"||e==="failed"}const je={"insecure-origin":"warn","no-media-devices":"nogo",unasked:"neutral",requesting:"info",refused:"nogo","no-device":"warn",failed:"nogo",ready:"go"};function ke(e){return je[e]}function ze(e){switch(e.status){case"insecure-origin":return"This page is not a secure origin. Microphone capture is available on https pages and on localhost.";case"no-media-devices":return"This browser exposes no media device interface, so no input can be opened here.";case"unasked":return B(e)?"Microphone access is granted for this origin. No input is open.":"Microphone access has not been requested for this origin.";case"requesting":return"A capture request is with the browser, which may be prompting for access.";case"refused":return"Microphone access was refused for this origin. The browser holds that answer in its site settings and returns it to any further request without prompting.";case"no-device":return"No audio input device is present.";case"failed":return`The input did not open. The browser reported ${e.failure?.name??"an unnamed error"}.`;case"ready":return`Capturing from ${Ee(e)}.`}}function B(e){return e.devices.some(t=>t.label!=="")}function Ee(e){const t=e.devices.findIndex(o=>o.deviceId===e.deviceId),n=t===-1?void 0:e.devices[t];return n?N(n,t):"an unnamed input"}function Ce(e){if(e.status!=="unasked"||B(e))return null;const t=e.devices.length;return t===0?null:t===1?"One audio input is visible. Its name is withheld by the browser until access is granted.":`${t} audio inputs are visible. Their names are withheld by the browser until access is granted.`}const R=c.createContext(null);function ft({settings:e,setAugmentSetting:t,children:n}){const o=c.useMemo(()=>({settings:e,setAugmentSetting:t}),[e,t]);return r.jsx(R.Provider,{value:o,children:n})}function ht(e){const t=c.useContext(R),n=t?.settings,o=t?.setAugmentSetting;return c.useMemo(()=>({values:n?.[e]??_e,set:(a,u)=>o?.(e,a,u)}),[n,o,e])}function pt(){return c.useContext(R)?.settings}const _e=Object.freeze({});function $(e){const t=e.trim().split(/\s+/).filter(Boolean);return t.length===0?"?":(t.length===1?Array.from(t[0]??"").slice(0,2):t.slice(0,2).map(o=>Array.from(o)[0]??"")).join("").toUpperCase()}const Fe=3;function gt({items:e,max:t=Fe,label:n}){const o=Math.max(1,Math.floor(t)),a=e.length>o,u=a?e.slice(0,o-1):e,i=a?e.slice(o-1):[];return r.jsxs(Te,{$places:o,role:"group",...n===void 0?{}:{"aria-label":n},children:[u.map(s=>r.jsx(E,{text:s.name,announce:!1,focusable:s.onSelect===void 0,children:s.onSelect===void 0?r.jsx(F,{$tone:s.tone,role:"img","aria-label":s.name,children:$(s.name)}):r.jsx(F,{as:"button",type:"button",$tone:s.tone,"aria-label":s.name,onClick:s.onSelect,children:$(s.name)})},s.id)),i.length>0&&r.jsx(E,{text:i.map(s=>s.name).join(", "),announce:!1,focusable:!0,children:r.jsxs(F,{$tone:void 0,role:"img","aria-label":`${i.length} more: ${i.map(s=>s.name).join(", ")}`,children:["+",i.length]})})]})}const Te=f.div`
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
  border: 1px solid ${({$tone:e})=>ee[e??"neutral"]};
  border-radius: var(--radius-circle);
  background: var(--color-surface-raised);
  color: ${({$tone:e})=>te[e??"neutral"]};
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
  ${K}
  &:focus-visible {
    position: relative;
  }
`;function vt({blocked:e=!1,flag:t,prompt:n,onSend:o,sendDisabled:a=!1,sendLabel:u="Send",sendVariant:i="icon",sendTooltip:s,children:p,...g}){const d=c.useId();return r.jsxs(Ae,{$blocked:e,...g,children:[n!==void 0&&r.jsx(Re,{"aria-hidden":"true",children:n}),p,o!==void 0&&r.jsxs(r.Fragment,{children:[r.jsx(E,{text:s,announce:!1,children:r.jsx(Ie,{type:"button","aria-disabled":a||void 0,onClick:a?void 0:o,$icon:i==="icon",...s?{"aria-describedby":d}:{},...i==="icon"?{"aria-label":u}:{},children:i==="icon"?r.jsx(H,{size:16}):u})}),s&&r.jsx(G,{id:d,children:s.replaceAll(`
`,". ")})]}),t!==void 0&&r.jsx($e,{$blocked:e,role:"status",children:t})]})}const Ae=f.div`
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
`,Re=f.span`
  flex: 0 0 auto;
  color: var(--console-tone-fg, var(--color-accent-fg));
  font-weight: bold;
  margin-right: var(--gap-prompt-glyph);
`,Ie=f(O)`
  flex: 0 0 auto;
  margin-left: auto;
  font-size: var(--font-size-compact);

  &[aria-disabled="true"] {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({$icon:e})=>e&&y`
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
`,$e=f.div`
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

  ${({$blocked:e})=>e?y`
          color: var(--color-nogo-on-status);
          background: var(--color-nogo-status);
          border: 1px solid var(--color-nogo-on-status);
        `:y`
          color: var(--color-text-muted);
          background: var(--color-surface-panel);
          border: 1px solid var(--color-border-subtle);
        `}
`;function Oe({tone:e="accent",queue:t,composer:n,standing:o,children:a,...u}){const i=t!==void 0||n!==void 0||o!==void 0,s=o!==void 0&&!!n;return r.jsxs(De,{"data-console-frame":"",$tone:e,...u,children:[r.jsx(qe,{children:a}),i&&r.jsxs(Ne,{$straddled:s,children:[t,o!==void 0&&r.jsx(Me,{"data-console-standing":"",$straddle:s,children:o}),n]})]})}const De=f.div`
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

  ${({$tone:e})=>e==="info"?y`
          --console-tone-fg: var(--color-info-text);
        `:y`
          --console-tone-fg: var(--color-accent-fg);
        `}
`,qe=f.div`
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  display: flex;
`,Me=f.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: var(--gap-console-readings);
  /* Overlaps the composer's corner with nothing to click, so it must not take a press. */
  pointer-events: none;

  ${({$straddle:e})=>e?y`
          position: absolute;
          right: var(--inset-console-foot);
          top: var(--inset-console-foot-straddled);
          transform: translateY(-50%);
          z-index: 1;
        `:y`
          align-self: flex-end;
        `}
`,Ne=f.div`
  position: relative;
  flex: 0 0 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-console-foot);
  padding: var(--inset-console-foot);

  ${({$straddled:e})=>e&&y`
      padding-top: var(--inset-console-foot-straddled);
    `}
`,Be="Uplink queue";function mt({tone:e,oneWaySeconds:t=null,delayReading:n,canQueue:o=!0,alwaysBadge:a=!1,inFlight:u,inFlightFrozenAtDispatch:i=!1,composer:s,children:p,...g}){const d=W({oneWaySeconds:t,canQueue:o,alwaysBadge:a}),x=d==="badge"?t:null,w=u!==void 0&&(d==="strip"||i&&d!=="badge");return r.jsx(Oe,{...e!==void 0?{tone:e}:{},...x!==null?{standing:r.jsx(le,{oneWaySeconds:x,delayReading:n})}:{},...w?{queue:r.jsx(Y,{items:u,"aria-label":Be})}:{},...s!==void 0?{composer:s}:{},...g,children:p})}const bt=f.kbd`
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
`;function xt({label:e,description:t,value:n,className:o}){return r.jsxs(Ue,{className:o,children:[r.jsxs(Pe,{children:[r.jsx(Ve,{children:e}),t!=null&&r.jsx(Ke,{children:t})]}),r.jsx(He,{$prose:typeof n=="string",children:r.jsx(Le,{value:n})})]})}function Le({value:e}){return e==null?r.jsx(ne,{}):typeof e=="object"?r.jsx(X,{value:e}):typeof e=="boolean"?e?"On":"Off":e}const Ue=f.dl`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--gap-field-term);
  margin: 0;
`,Pe=f.dt`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  min-width: 0;
  /* Grows into the space a short value leaves and yields to a long one. */
  flex: 1 1 auto;
`,Ve=f.span`
  font-size: var(--font-size-value);
  color: var(--color-text-primary);
`,Ke=f.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-dim);
  max-width: 32em;
`,He=f.dd`
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
`;function Ge(e,t){const n={w:0,h:0},o=i=>{n.w+=i?.w??0,n.h+=i?.h??0},a=i=>i.requires===void 0||t(i.requires);for(const i of new Set(e.augmentSlots??[]))for(const s of se(i))a(s)&&o(s.sizeDelta);const u=new Set([...e.contributionSlots??[],...ae.map(i=>`${e.id}.${i}`)]);for(const i of u)for(const s of ue(i))a(s)&&o(s.sizeDelta);return n}function yt(e,t){if(t.w===0&&t.h===0)return e;const n=o=>({w:o.w+t.w,h:o.h+t.h});return{...e,minSize:n(e.minSize??{w:1,h:1}),defaultSize:n(e.defaultSize??{w:3,h:3}),...e.maxSize!==void 0?{maxSize:n(e.maxSize)}:{}}}function wt(){const e=oe(),[t,n]=c.useReducer(o=>o+1,0);return c.useEffect(()=>{const o=[re(n),ce(n),e?.subscribe(n)];return()=>{for(const a of o)a?.()}},[e]),c.useCallback(o=>Ge(o,a=>e?.isAvailable(a)??!1),[e,t])}function St(e){return e.command?r.jsx(Xe,{...e,command:e.command}):r.jsx(Qe,{...e})}const We=f.div`
  position: relative;
  width: 100%;

`,Ye=f.span`
  position: absolute;
  inset-block: 0;
  inset-inline-end: var(--gap-related);
  display: flex;
  align-items: center;
  pointer-events: none;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
`;function Xe({label:e,value:t,command:n,unavailable:o,invalid:a,placeholder:u,maxLength:i,"data-testid":s}){const p=c.useId(),g=`${p}-invalid`,d=Q({command:n,unavailable:o}),[x,w]=c.useState(null),k=!d.control.isSent,l=d.control.isRefused||d.control.isLost;c.useEffect(()=>{l&&w(null)},[l]),c.useEffect(()=>{k&&!l&&w(h=>h===t?null:h)},[k,l,t]);const b=()=>{x===null||x===t||d.inert||d.send(x)};return r.jsxs(T,{children:[r.jsx(A,{htmlFor:p,children:e}),r.jsx(E,{text:d.tip,children:r.jsxs(We,{children:[r.jsx(D,{...d.edge,"aria-describedby":a==null?void 0:g,"aria-invalid":a==null?void 0:!0,"data-testid":s,id:p,maxLength:i,onBlur:b,onChange:h=>w(h.target.value),onKeyDown:h=>{h.key==="Enter"&&b()},placeholder:u,type:"text",value:x??t}),r.jsx(Ye,{"aria-hidden":"true",children:d.word}),r.jsx(J,{visuallyHidden:!0,children:d.announce})]})}),a!=null&&r.jsx(z,{id:g,children:r.jsx(q,{size:"xs",tone:"warn",children:a})})]})}function Qe({label:e,value:t,onChange:n,invalid:o,placeholder:a,maxLength:u,disabled:i,"data-testid":s}){const p=c.useId(),g=`${p}-invalid`;return r.jsxs(T,{children:[r.jsx(A,{htmlFor:p,children:e}),r.jsx(D,{"aria-describedby":o==null?void 0:g,"aria-invalid":o==null?void 0:!0,"data-testid":s,disabled:i,id:p,maxLength:u,onChange:d=>n(d.target.value),placeholder:a,type:"text",value:t}),o!=null&&r.jsx(z,{id:g,children:r.jsx(q,{size:"xs",tone:"warn",children:o})})]})}export{dt as A,vt as C,bt as K,xt as R,St as T,ut as U,ft as a,gt as b,mt as c,he as d,N as e,ye as f,ht as g,wt as h,$ as i,Ge as s,pt as u,yt as w};
