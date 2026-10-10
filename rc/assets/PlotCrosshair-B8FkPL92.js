import{j as f}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import k,{css as x,createGlobalStyle as re}from"./ext-styled-components-Br73TgY3.js";import{r as l}from"./ext-react-RRA14VTW.js";import{r as ae}from"./ext-react-dom-CZVBhjGL.js";import{ch as C,cm as E}from"./view-clock-formula-DUo1RDOJ.js";import"./ksp-enum-names-CzwsFr5h.js";import"./screen-C58fnbVE.js";import{g as F,e as se,d as ie,T as ce,i as O,v as le,N as Y,G as N}from"./streamStatusWord-Dpl2hf1A.js";const Wo={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"},weight:{regular:400,bold:700},letterSpacing:{tight:"0.05em",label:"0.1em",wide:"0.15em",body:"0"}},borders:{subtle:"1px solid var(--color-border-subtle)",strong:"1px solid var(--color-border-strong)"}};function Fo({children:e,layout:t="inline",...o}){return f.jsx(ue,{$layout:t,...o,children:e})}const de={inline:x``,fill:x`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},ue=k.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>de[e]}
`,j=x`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Vo=x`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,fe=l.forwardRef(function({variant:t="default",tone:o,size:n="md",pressed:r,...a},s){return f.jsx(xe,{ref:s,$variant:t,$tone:o??(t==="primary"?"go":"neutral"),$size:n,$pressed:r===!0,"aria-pressed":r,...a})});function he(e){return e==="neutral"?"go":e}const D=e=>x`
  background: ${F[e]};
  border-color: ${F[e]};
  color: ${se[e]};
`,pe=e=>x`
  border-color: ${ie[e]};
  color: ${ce[e]};
`,V={default:x`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:x`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},ve=x`
  background: none;
  border: none;
  padding: 0;
  min-height: 0;
  font: inherit;
  color: inherit;
  text-align: inherit;
  justify-content: flex-start;

  /* No box to brighten, so the words underline under the pointer. */
  @media (hover: hover) {
    &:hover:not(:disabled) {
      text-decoration: underline;
    }
  }
`,me=x`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function ye(e,t){return e==="text"?ve:e==="primary"?D(t):t==="neutral"?V[e]:x`
    ${V[e]}
    ${pe(t)}
  `}const ge=x`
  @media (hover: hover) {
    &:hover:not(:disabled) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,ke={sm:x`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:x`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},xe=k.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-glyph-control);
  border: 1px solid;
  border-radius: var(--radius-regular);
  font-family: inherit;
  font-weight: 600;
  /* The kit's one control height, with a flush line height so type size cannot change the box height. */
  min-height: var(--control-height);
  line-height: var(--line-height-flush);
  cursor: pointer;
  transition: background var(--duration-fast), border-color var(--duration-fast), color var(--duration-fast);

  ${({$size:e})=>ke[e]}
  ${({$variant:e,$tone:t})=>ye(e,t)}
  ${({$pressed:e,$tone:t})=>e?D(he(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":ge}
  ${j}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* An unconfirmed command may still run and a failed one never left; both read in the warning tone. */
  &[data-unconfirmed="true"],
  &[data-failed="true"] {
    border-color: var(--color-warn-mark);
    color: var(--color-warn-text);
    background: color-mix(
      in srgb,
      var(--color-warn-mark) 18%,
      var(--color-surface-raised)
    );
  }

  @media (pointer: coarse) {
    min-height: 44px;
    /* Wider on both axes: min-height only covers the vertical target. */
    padding: ${({$size:e})=>e==="sm"?"var(--inset-control-small-touch)":"var(--inset-control-touch)"};
  }

  ${({$variant:e})=>e==="text"?me:""}
`,Uo=k.button`
  background: none;
  border: none;
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  font-family: inherit;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  transition: color var(--duration-fast);

  @media (hover: hover) {
    &:hover {
      color: var(--color-text-primary);
    }
  }
  ${j}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,be=k.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-faint);
  font-size: var(--font-size-base);
  line-height: var(--line-height-flush);
  padding: var(--inset-glyph-button);
  transition: color var(--duration-fast);

  @media (hover: hover) {
    &:hover {
      color: var(--color-text-primary);
    }
  }
  &[aria-pressed="true"] {
    border-radius: var(--radius-regular);
    ${D("go")}
  }
  ${j}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  @media (pointer: coarse) {
    min-width: 44px;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`,qo=l.forwardRef(function({pressed:t,...o},n){return f.jsx(be,{ref:n,"aria-pressed":t,...o})}),Go=k.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,Xo=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,Ko=k.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,Yo=k.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Zo=k.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Jo=k.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,B=x`
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  padding: var(--inset-field);

  &:focus {
    /* The accent border on the raised surface clears WCAG 1.4.11's 3:1. */
    border-color: var(--color-accent-fg);
    outline: none;
  }

  ${j}

  /* The browser's own clear control ignores the theme; SearchBox draws the kit's. */
  &::-webkit-search-cancel-button {
    appearance: none;
  }

  @media (pointer: coarse) {
    min-height: 44px;
    padding: var(--inset-field-touch);
    /* 16px stops iOS Safari zooming on focus; a literal, because the threshold is absolute. */
    font-size: 16px;
  }
`,Qo=k.input`
  ${B}
  width: 100%;
`,en=k.select`
  ${B}
  width: 100%;
  appearance: none;
  /* The native arrow hugs the field's edge and cannot be inset, so the chevron is two gradient strokes drawn clear of it. */
  background-image:
    linear-gradient(45deg, transparent 50%, var(--color-text-muted) 50%),
    linear-gradient(135deg, var(--color-text-muted) 50%, transparent 50%);
  background-position:
    calc(100% - var(--offset-select-arrow-far)) 50%,
    calc(100% - var(--offset-select-arrow-near)) 50%;
  background-size:
    var(--size-select-arrow) var(--size-select-arrow),
    var(--size-select-arrow) var(--size-select-arrow);
  background-repeat: no-repeat;
  padding-inline-end: var(--inset-field-select-end);

  @media (pointer: coarse) {
    padding-inline-end: var(--inset-field-select-end);
  }
`,tn=k.textarea`
  ${B}
  width: 100%;
  resize: vertical;
`,on="max(0.075em, 1.25px)",I={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},we=120,_e=120,U=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function Me(e){const[t,o]=l.useState(null),[n,r]=l.useState(!1),[a,s]=l.useState(!1),[d,u]=l.useState(!1),h=l.useRef(!1),g=l.useRef(null),b=e!=null&&e!==""?e:null,w=t!==null&&(n||a||d),m=l.useCallback(()=>{g.current!==null&&clearTimeout(g.current),g.current=null},[]),y=l.useCallback(()=>{m(),o(null),r(!1),s(!1),u(!1)},[m]),v=l.useCallback(()=>{m(),g.current=setTimeout(()=>{g.current=null,r(!1),u(!1)},_e)},[m]);if(l.useEffect(()=>m,[m]),l.useEffect(()=>{if(t!==null)return window.addEventListener("scroll",y,!0),window.addEventListener("resize",y),()=>{window.removeEventListener("scroll",y,!0),window.removeEventListener("resize",y)}},[t,y]),l.useEffect(()=>{if(!w)return;const p=M=>{M.key==="Escape"&&y()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[w,y]),b===null)return{anchor:{},tip:null};const _=p=>{const M=p.getBoundingClientRect();o({top:M.bottom,left:M.left,above:window.innerHeight-M.bottom<we,anchorTop:M.top})};return{anchor:{"data-tooltip":b,onPointerEnter:p=>{m(),_(p.currentTarget),r(!0)},onPointerLeave:v,onPointerDown:()=>{h.current=!0,y()},onPointerUp:()=>{h.current=!1},onFocus:p=>{h.current||(_(p.currentTarget),s(!0))},onBlur:()=>{s(!1),!n&&!d&&o(null)}},tip:w?ae.createPortal(f.jsx($e,{at:t,text:b,onPointerEnter:()=>{m(),u(!0)},onPointerLeave:v}),document.body):null}}function $e({at:e,text:t,onPointerEnter:o,onPointerLeave:n}){const r=e.above?{bottom:window.innerHeight-e.anchorTop}:{top:e.top};return f.jsx(Se,{"aria-hidden":"true","data-tooltip-tip":"","data-above":e.above?"":void 0,onPointerEnter:o,onPointerLeave:n,style:{...r,left:e.left,"--tip-left":`${e.left}px`},children:t})}function S(e,t){return(...o)=>{typeof e=="function"&&e(...o),t?.(...o)}}function nn({text:e,children:t,focusable:o=!1,announce:n=!0}){const{anchor:r,tip:a}=Me(e);if(e==null||e==="")return t;const s=t.props,d=s["aria-label"],u=!n||typeof d=="string"&&U(d).includes(U(e));return f.jsxs(f.Fragment,{children:[l.cloneElement(t,{"data-tooltip":e,onPointerEnter:S(s.onPointerEnter,r.onPointerEnter),onPointerLeave:S(s.onPointerLeave,r.onPointerLeave),onPointerDown:S(s.onPointerDown,r.onPointerDown),onPointerUp:S(s.onPointerUp,r.onPointerUp),onFocus:S(s.onFocus,r.onFocus),onBlur:S(s.onBlur,r.onBlur),"aria-description":u?s["aria-description"]:e,tabIndex:o?s.tabIndex??0:s.tabIndex}),a,o&&f.jsx(ze,{})]})}const ze=re`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Se=k.div`
  position: fixed;
  z-index: var(--z-toast);
  margin-top: var(--offset-popover);
  max-width: min(18rem, calc(100vw - 2 * var(--offset-popover)));
  /* Pulled back inside the viewport when the anchor sits near its right edge. */
  translate: min(0px, calc(100vw - 100% - var(--offset-popover) - var(--tip-left, 0px)));
  padding: var(--inset-tooltip);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-floating);
  box-shadow: var(--shadow-popover-drop) rgba(0, 0, 0, 0.35);
  color: var(--color-text-primary);
  font-size: var(--font-size-caption);
  line-height: var(--line-height-body);
  letter-spacing: 0.02em;
  white-space: pre-line;

  &[data-above] {
    margin-top: 0;
    margin-bottom: var(--offset-popover);
  }
`,Ae=k.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(...e)=>e.filter((t,o,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,n)=>n?n.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=e=>{const t=Ie(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Te=l.createContext({}),Re=()=>l.useContext(Te),Ne=l.forwardRef(({color:e,size:t,strokeWidth:o,absoluteStrokeWidth:n,className:r="",children:a,iconNode:s,...d},u)=>{const{size:h=24,strokeWidth:g=2,absoluteStrokeWidth:b=!1,color:w="currentColor",className:m=""}=Re()??{},y=n??b?Number(o??g)*24/Number(t??h):o??g;return l.createElement("svg",{ref:u,...P,width:t??h??P.width,height:t??h??P.height,stroke:e??w,strokeWidth:y,className:Z("lucide",m,r),...!a&&!Ce(d)&&{"aria-hidden":"true"},...d},[...s.map(([v,_])=>l.createElement(v,_)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=(e,t)=>{const o=l.forwardRef(({className:n,...r},a)=>l.createElement(Ne,{ref:a,iconNode:t,className:Z(`lucide-${Le(q(e))}`,`lucide-${e}`,n),...r}));return o.displayName=q(e),o};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],je=i("arrow-down",Ee);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],He=i("arrow-left",Pe);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],De=i("arrow-right",Oe);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],We=i("arrow-up-to-line",Be);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Ve=i("arrow-up",Fe);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],qe=i("bell",Ue);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Xe=i("check",Ge);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ye=i("chevron-down",Ke);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Je=i("chevron-left",Ze);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],et=i("chevron-right",Qe);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ot=i("chevron-up",tt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],rt=i("columns-2",nt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],st=i("computer",at);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],ct=i("corner-down-left",it);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],dt=i("database",lt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ft=i("file-text",ut);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],pt=i("heart",ht);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],mt=i("history",vt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],gt=i("house",yt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],xt=i("info",kt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],wt=i("joystick",bt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Mt=i("layers",_t);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],zt=i("lock",$t);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],At=i("maximize",St);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],It=i("microscope",Lt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],Tt=i("minimize",Ct);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Nt=i("pause",Rt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],jt=i("pencil",Et);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ht=i("play",Pt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Dt=i("plus",Ot);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Wt=i("radio",Bt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Vt=i("rectangle-horizontal",Ft);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],qt=i("rectangle-vertical",Ut);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],Xt=i("rows-2",Gt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],Yt=i("satellite",Kt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Jt=i("settings",Zt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],eo=i("square",Qt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],oo=i("star",to);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],ro=i("undo-2",no);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],so=i("volume-2",ao);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],co=i("volume-x",io);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],uo=i("x",lo),fo={size:"var(--icon-size-control)",strokeWidth:1.8,"aria-hidden":!0};function c(e,t){const o=l.forwardRef(({label:n,...r},a)=>{const s=n?{role:"img","aria-label":n,"aria-hidden":!1}:{};return f.jsx(e,{...fo,...t,...s,...r,ref:a})});return o.displayName=e.displayName??e.name,o}const rn=c(wt),an=c(mt),sn=c(gt),cn=c(xt),ln=c(zt),dn=c(Wt),un=c(so),fn=c(co),hn=c(qe),pn=c(Mt),vn=c(Jt),mn=c(Yt),yn=c(At),gn=c(Tt),kn=c(dt),xn=c(st),bn=c(ft),wn=c(Dt,{strokeWidth:2.4}),_n=c(uo),Mn=c(jt),$n=c(Xe),zn=c(oo),Sn=c(pt),An=c(It),Ln=c(Ht),In=c(Nt),Cn=c(eo),Tn=c(ot),Rn=c(Ye),Nn=c(Je),En=c(et),jn=c(He),Pn=c(Ve),Hn=c(De),On=c(je),Dn=c(We),Bn=c(ro),Wn=c(rt),Fn=c(Vt),Vn=c(Xt),Un=c(qt),qn=c(ct);function ho(e){if(e===void 0)return null;const{value:t}=le(e.magnitude,e.unit);return t===Y?null:t}function J(e,t){const o=ho(t);return o===null?e:`${e}, as of ${o}`}const Q="modelled to SCET";function Gn(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function G(e){return E(e.value)||C(e.value)?{shown:e.value,held:!1,mark:null,isStatic:E(e.value),isDeterministic:C(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:J(O(e.grade),e.asOfUt)}}function Xn(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:E(e),isDeterministic:C(e),caption:null,band:null};const o=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!C(e.value)){const n=e.reckoning.modelled;if(e.state==="held"){const a=G(e);return{...a,shown:n,mark:a.held?"modelled":null,caption:a.caption===null?null:`${a.caption}, modelled`,band:o}}const r=e.reckoning.beyondReceived;return{shown:n,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?Q:null,band:o}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:E(e.value),isDeterministic:C(e.value),caption:null,band:o}:e.state==="held"?{...G(e),band:o}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Kn(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function po(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:Q}:null;if(e.state==="held"){const o=J(O(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${o}, modelled`}:{kind:"held",caption:o}}return null}function Yn(e){return e===void 0?null:typeof e!="string"?po(e):{kind:"held",caption:O(e)}}function vo(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function Zn(e,t){const o=vo(t);return o===void 0?e:{state:"held",value:e,grade:o,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}const mo={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},yo={center:"center",start:"flex-start",baseline:"baseline"},Jn=l.forwardRef(function({justify:t="between",align:o="center",gap:n,wrap:r=!1,children:a,...s},d){return f.jsx(go,{ref:d,$justify:t,$align:o,$gap:n,$wrap:r,...s,children:a})}),go=k.div`
  display: flex;
  align-items: ${({$align:e})=>yo[e]};
  justify-content: ${({$justify:e})=>mo[e]};
  gap: ${({$gap:e})=>e?N[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function Qn({children:e,"aria-label":t,visuallyHidden:o=!1,additionsOnly:n=!1,assertive:r=!1,as:a="span",className:s}){const u={role:o?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":n?"false":"true","aria-label":t,className:s,"data-live-region":""};return o?f.jsx(Ae,{as:a,...u,children:e}):l.createElement(a,u,e)}const ko=.72,xo=.76;function er({size:e,kind:t="held",figureSize:o}){return f.jsx("tspan",{dy:o===void 0?-e*.55:-(o*ko-e*xo),fontSize:e,fill:I[t].color,"data-held-mark":"","data-reckoning-mark":t,children:I[t].glyph})}function tr({end:e,x1:t,y1:o,x2:n,y2:r}){return f.jsx("line",{"data-bound":e,x1:t,y1:o,x2:n,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function or(e,t){return t===null?e:`${e}, ${t}`}function nr(e){return e===null?{}:{"data-currency-in-name":""}}function rr({x:e,y:t,size:o,children:n}){return f.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:o,fill:"var(--color-text-muted)",children:n})}function L(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((o,n)=>L(o,t[n]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const o=[...t];return[...e].every(n=>{const r=o.findIndex(a=>L(n,a));return r===-1?!1:(o.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[o,n]of e)if(!t.has(o)||!L(n,t.get(o)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const o=e,n=t,r=new Set;for(const a of Object.keys(o))o[a]!==void 0&&r.add(a);for(const a of Object.keys(n))n[a]!==void 0&&r.add(a);for(const a of r)if(!L(o[a],n[a]))return!1;return!0}return!1}function bo(e,t,o,n){const[r,a]=l.useState(n),s=l.useRef(t);s.current=t;const d=l.useRef(o);d.current=o;const u=l.useRef(r);return u.current=r,l.useEffect(()=>{if(!e)return;let h=u.current;const g=()=>{const m=s.current(e);d.current(h,m)||(h=m,a(m))};g(),e.addEventListener("scroll",g,{passive:!0});const b=new ResizeObserver(g);b.observe(e);for(const m of Array.from(e.children))b.observe(m);const w=new MutationObserver(()=>{for(const m of Array.from(e.children))b.observe(m);g()});return w.observe(e,{childList:!0,subtree:!0}),()=>{e.removeEventListener("scroll",g),b.disconnect(),w.disconnect()}},[e]),r}function wo(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function ar(e){return bo(e,wo,Object.is,!1)?0:void 0}const _o={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function sr({cols:e,minColWidth:t,fit:o=!1,gap:n="related-dense",rowGap:r,align:a="center",children:s,...d}){return f.jsx(Mo,{$cols:e,$minColWidth:t,$fit:o,$gap:n,$rowGap:r,$align:a,...d,children:s})}const Mo=k.div`
  display: grid;
  align-items: ${({$align:e})=>_o[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${N[t]} ${N[e]}`:N[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:o})=>e||(t?`repeat(${o?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,$o={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function ir(e){return $o[e]}const zo=l.createContext(null);function So(e,t){const o=l.useContext(zo),n=o?.setFooter,r=o?.setDirty;l.useEffect(()=>(n?.(e),()=>n?.(null)),[n,e]),l.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function cr(e){const{onSave:t,value:o,saved:n,saveLabel:r="Save",extra:a,disabled:s}=e,d=l.useRef(null);d.current===null&&(d.current={v:o});const u=!L(o,d.current.v)&&!L(o,n),h=l.useMemo(()=>f.jsxs(f.Fragment,{children:[a,f.jsx(fe,{variant:"primary",type:"button",onClick:t,disabled:s,children:r})]}),[a,t,s,r]);So(h,u)}const lr=x`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,ee=.89,W=.45;function Ao({kind:e,x:t,y:o,scale:n=1,ghost:r=!1}){const a=I[e],s=a.canvasRadius*n,d={fill:a.color,opacity:r?W:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const h=s*ee;return f.jsx("rect",{x:t-h,y:o-h,width:2*h,height:2*h,...d})}const u=`${t},${o-s} ${t+s},${o+s*.8} ${t-s},${o+s*.8}`;return f.jsx("polygon",{points:u,...d})}function te(e,t,o){return getComputedStyle(e).getPropertyValue(t).trim()||o}function X(e,t,o,n,r,{ghost:a=!1,scale:s=1}={}){const d=I[o],u=d.canvasRadius*s;if(t.save(),t.globalAlpha=a?W:1,t.fillStyle=te(e,d.cssVar,d.fallback),t.beginPath(),o==="held"){const h=u*ee;t.rect(n-h,r-h,2*h,2*h)}else t.moveTo(n,r-u),t.lineTo(n+u,r+u*.8),t.lineTo(n-u,r+u*.8),t.closePath();t.fill(),t.restore()}function dr(e,t,{held:o,modelled:n},r={}){o!==void 0&&n!==void 0&&(t.save(),t.globalAlpha=W,t.strokeStyle=te(e,I.modelled.cssVar,I.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(n.x,n.y),t.stroke(),t.restore()),o!==void 0&&X(e,t,"held",o.x,o.y,{...r,ghost:n!==void 0}),n!==void 0&&X(e,t,"modelled",n.x,n.y,r)}const oe=14,$=5,A=6.2,Lo=10,K=12,z=6,T=8,H=4,Io=12,Co=190,To=80;function Ro(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function ne(e,t,o){const n=e.x1-e.x0,r=e.y1-e.y0,a=n>=Co&&r>=To,s=a?o:o.filter(v=>!v.detail),d=n-z*2-$*2-T-H,u=v=>{const _=v.value??Y;if(a)return`${v.label}  ${_}`;const p=Math.floor((d-_.length*A)/A)-1-(v.modelled?2:0),M=Ro(v.label,Math.min(p,Io));return M===""?_:`${M} ${_}`},h=v=>a&&v.currency?v.currency:"",g=v=>h(v)?Lo+h(v).length*A+(v.modelled?K:0):v.modelled?K:0,b=a?0:T+H,w=Math.max(...s.map(v=>b+u(v).length*A+g(v)),a?t.length*A:0),m=a?1:0,y=(s.length+m)*oe+$*2;return{full:a,rows:s,text:u,currencyText:h,cardW:Math.min(w+$*2,n-z*2),cardH:y,headRows:m,fits:y<=r-z*2}}function ur(e,t){return ne(e,"",t).fits}function fr({x:e,plot:t,heading:o,rows:n}){const{full:r,rows:a,text:s,currencyText:d,cardW:u,cardH:h,headRows:g,fits:b}=ne(t,o,n),w=t.x1-e-z,m=w>=u||w>=e-t.x0,y=Math.max(t.x0+z,Math.min(t.x1-z-u,m?e+z:e-z-u)),v=t.y0+z,_=y+$+(r?0:T+H);return f.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[f.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),a.map(p=>p.y===void 0||p.y===null?null:f.jsx("circle",{cx:e,cy:p.y,r:3.5,fill:p.color,stroke:"var(--color-text-primary)",strokeWidth:1},p.id)),b&&f.jsxs("g",{"data-plot-crosshair-card":"",children:[f.jsx("rect",{x:y,y:v,width:u,height:h,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),r&&f.jsx("text",{x:y+$,y:v+$+10,fill:"var(--color-text-muted)",fontSize:10,children:o}),a.map((p,M)=>{const R=v+$+(M+g)*oe+10;return f.jsxs("g",{"data-plot-crosshair-row":p.id,children:[!r&&f.jsx("rect",{x:y+$,y:R-8,width:T,height:T,fill:p.color,"data-plot-crosshair-swatch":""}),f.jsx("text",{x:_,y:R,fill:p.value===null?"var(--color-text-faint)":p.color,fontSize:10,style:{whiteSpace:"pre"},children:s(p)}),p.modelled&&f.jsx(Ao,{kind:"modelled",x:y+u-$-d(p).length*A-(d(p)?8:4),y:R-3}),d(p)&&f.jsx("text",{x:y+u-$,y:R,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:d(p)})]},p.id)})]})]})}export{zo as $,jn as A,hn as B,$n as C,kn as D,Fo as E,Xo as F,en as G,Vn as H,qo as I,rn as J,vn as K,pn as L,An as M,zn as N,Cn as O,In as P,tn as Q,Bn as R,mn as S,Uo as T,L as U,Ae as V,Wo as W,So as X,cr as Y,Qn as Z,ar as _,Hn as a,lr as a0,Vo as a1,nn as a2,j as a3,Xn as a4,Kn as a5,ir as a6,On as a7,Nn as a8,Jn as a9,on as aA,Q as aB,bo as aC,xn as aa,sr as ab,sn as ac,cn as ad,er as ae,ln as af,fn as ag,fr as ah,I as ai,Ao as aj,qn as ak,un as al,po as am,Zn as an,vo as ao,Yn as ap,Gn as aq,dr as ar,X as as,ur as at,or as au,Me as av,xe as aw,tr as ax,nr as ay,rr as az,Pn as b,dn as c,fe as d,Rn as e,En as f,Tn as g,_n as h,Go as i,bn as j,Zo as k,Yo as l,Ko as m,Jo as n,Un as o,Fn as p,yn as q,gn as r,Wn as s,Sn as t,an as u,Qo as v,Mn as w,Ln as x,wn as y,Dn as z};
