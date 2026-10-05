import{j as f}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import p,{css as v,createGlobalStyle as G}from"./ext-styled-components-Br73TgY3.js";import{r as l}from"./ext-react-RRA14VTW.js";import{r as K}from"./ext-react-dom-CZVBhjGL.js";import{bU as z,bZ as N}from"./view-clock-formula-aC7mjXLK.js";import"./ksp-enum-names-VzzNPeFZ.js";import"./kepler-DtDJUp9i.js";import{g as j,e as X,d as Z,T as Y,i as V,v as J,N as Q,G as A}from"./streamStatusWord-DiCPl-PU.js";const wo={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"},weight:{regular:400,bold:700},letterSpacing:{tight:"0.05em",label:"0.1em",wide:"0.15em",body:"0"}},borders:{subtle:"1px solid var(--color-border-subtle)",strong:"1px solid var(--color-border-strong)"}};function xo({children:e,layout:t="inline",...o}){return f.jsx(te,{$layout:t,...o,children:e})}const ee={inline:v``,fill:v`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},te=p.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>ee[e]}
`,C=v`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,_o=v`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,oe=l.forwardRef(function({variant:t="default",tone:o,size:r="md",pressed:n,...a},c){return f.jsx(de,{ref:c,$variant:t,$tone:o??(t==="primary"?"go":"neutral"),$size:r,$pressed:n===!0,"aria-pressed":n,...a})});function re(e){return e==="neutral"?"go":e}const T=e=>v`
  background: ${j[e]};
  border-color: ${j[e]};
  color: ${X[e]};
`,ne=e=>v`
  border-color: ${Z[e]};
  color: ${Y[e]};
`,P={default:v`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:v`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},ae=v`
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
`,se=v`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function ie(e,t){return e==="text"?ae:e==="primary"?T(t):t==="neutral"?P[e]:v`
    ${P[e]}
    ${ne(t)}
  `}const ce=v`
  @media (hover: hover) {
    &:hover:not(:disabled) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,le={sm:v`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:v`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},de=p.button`
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

  ${({$size:e})=>le[e]}
  ${({$variant:e,$tone:t})=>ie(e,t)}
  ${({$pressed:e,$tone:t})=>e?T(re(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":ce}
  ${C}
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

  ${({$variant:e})=>e==="text"?se:""}
`,$o=p.button`
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
  ${C}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Mo=p.button`
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
    ${T("go")}
  }
  ${C}
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
`,zo=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,So=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,Io=p.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,Ao=p.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,No=p.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Co=p.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,R=v`
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

  ${C}

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
`,Lo=p.input`
  ${R}
  width: 100%;
`,To=p.select`
  ${R}
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
`,Ro=p.textarea`
  ${R}
  width: 100%;
  resize: vertical;
`;function Eo(e,t){return t}const M={held:{shape:"dot",glyph:"●",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",canvasRadius:5}},ue=120,fe=120,H=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function he(e){const[t,o]=l.useState(null),[r,n]=l.useState(!1),[a,c]=l.useState(!1),[d,u]=l.useState(!1),y=l.useRef(!1),m=l.useRef(null),g=e!=null&&e!==""?e:null,b=t!==null&&(r||a||d),h=l.useCallback(()=>{m.current!==null&&clearTimeout(m.current),m.current=null},[]),k=l.useCallback(()=>{h(),o(null),n(!1),c(!1),u(!1)},[h]),S=l.useCallback(()=>{h(),m.current=setTimeout(()=>{m.current=null,n(!1),u(!1)},fe)},[h]);if(l.useEffect(()=>h,[h]),l.useEffect(()=>{if(t!==null)return window.addEventListener("scroll",k,!0),window.addEventListener("resize",k),()=>{window.removeEventListener("scroll",k,!0),window.removeEventListener("resize",k)}},[t,k]),l.useEffect(()=>{if(!b)return;const w=x=>{x.key==="Escape"&&k()};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[b,k]),g===null)return{anchor:{},tip:null};const I=w=>{const x=w.getBoundingClientRect();o({top:x.bottom,left:x.left,above:window.innerHeight-x.bottom<ue,anchorTop:x.top})};return{anchor:{"data-tooltip":g,onPointerEnter:w=>{h(),I(w.currentTarget),n(!0)},onPointerLeave:S,onPointerDown:()=>{y.current=!0,k()},onPointerUp:()=>{y.current=!1},onFocus:w=>{y.current||(I(w.currentTarget),c(!0))},onBlur:()=>{c(!1),!r&&!d&&o(null)}},tip:b?K.createPortal(f.jsx(pe,{at:t,text:g,onPointerEnter:()=>{h(),u(!0)},onPointerLeave:S}),document.body):null}}function pe({at:e,text:t,onPointerEnter:o,onPointerLeave:r}){const n=e.above?{bottom:window.innerHeight-e.anchorTop}:{top:e.top};return f.jsx(me,{"aria-hidden":"true","data-tooltip-tip":"","data-above":e.above?"":void 0,onPointerEnter:o,onPointerLeave:r,style:{...n,left:e.left,"--tip-left":`${e.left}px`},children:t})}function _(e,t){return(...o)=>{typeof e=="function"&&e(...o),t?.(...o)}}function jo({text:e,children:t,focusable:o=!1,announce:r=!0}){const{anchor:n,tip:a}=he(e);if(e==null||e==="")return t;const c=t.props,d=c["aria-label"],u=!r||typeof d=="string"&&H(d).includes(H(e));return f.jsxs(f.Fragment,{children:[l.cloneElement(t,{"data-tooltip":e,onPointerEnter:_(c.onPointerEnter,n.onPointerEnter),onPointerLeave:_(c.onPointerLeave,n.onPointerLeave),onPointerDown:_(c.onPointerDown,n.onPointerDown),onPointerUp:_(c.onPointerUp,n.onPointerUp),onFocus:_(c.onFocus,n.onFocus),onBlur:_(c.onBlur,n.onBlur),"aria-description":u?c["aria-description"]:e,tabIndex:o?c.tabIndex??0:c.tabIndex}),a,o&&f.jsx(ve,{})]})}const ve=G`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,me=p.div`
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
`,ye=p.span`
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
 */const F=(...e)=>e.filter((t,o,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,r)=>r?r.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=e=>{const t=ke(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},we=l.createContext({}),xe=()=>l.useContext(we),_e=l.forwardRef(({color:e,size:t,strokeWidth:o,absoluteStrokeWidth:r,className:n="",children:a,iconNode:c,...d},u)=>{const{size:y=24,strokeWidth:m=2,absoluteStrokeWidth:g=!1,color:b="currentColor",className:h=""}=xe()??{},k=r??g?Number(o??m)*24/Number(t??y):o??m;return l.createElement("svg",{ref:u,...L,width:t??y??L.width,height:t??y??L.height,stroke:e??b,strokeWidth:k,className:F("lucide",h,n),...!a&&!be(d)&&{"aria-hidden":"true"},...d},[...c.map(([S,I])=>l.createElement(S,I)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=(e,t)=>{const o=l.forwardRef(({className:r,...n},a)=>l.createElement(_e,{ref:a,iconNode:t,className:F(`lucide-${ge(O(e))}`,`lucide-${e}`,r),...n}));return o.displayName=O(e),o};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Me=s("arrow-down",$e);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Se=s("arrow-left",ze);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ae=s("arrow-right",Ie);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Ce=s("arrow-up-to-line",Ne);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Te=s("arrow-up",Le);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Ee=s("bell",Re);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Pe=s("check",je);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Oe=s("chevron-down",He);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Be=s("chevron-left",De);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Fe=s("chevron-right",Ve);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ue=s("chevron-up",qe);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],Ge=s("columns-2",We);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],Xe=s("computer",Ke);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],Ye=s("corner-down-left",Ze);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Qe=s("database",Je);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],tt=s("file-text",et);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],rt=s("heart",ot);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],at=s("history",nt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],it=s("house",st);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],lt=s("info",ct);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],ut=s("joystick",dt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ht=s("layers",ft);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],vt=s("lock",pt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],yt=s("maximize",mt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],kt=s("microscope",gt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],wt=s("minimize",bt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],_t=s("pause",xt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Mt=s("pencil",$t);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],St=s("play",zt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],At=s("plus",It);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Ct=s("radio",Nt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Tt=s("rectangle-horizontal",Lt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],Et=s("rectangle-vertical",Rt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],Pt=s("rows-2",jt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],Ot=s("satellite",Ht);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Bt=s("settings",Dt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Ft=s("square",Vt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ut=s("star",qt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Gt=s("undo-2",Wt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Xt=s("volume-2",Kt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Yt=s("volume-x",Zt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Qt=s("x",Jt),eo={size:"var(--icon-size-control)",strokeWidth:1.8,"aria-hidden":!0};function i(e,t){const o=l.forwardRef(({label:r,...n},a)=>{const c=r?{role:"img","aria-label":r,"aria-hidden":!1}:{};return f.jsx(e,{...eo,...t,...c,...n,ref:a})});return o.displayName=e.displayName??e.name,o}const Po=i(ut),Ho=i(at),Oo=i(it),Do=i(lt),Bo=i(vt),Vo=i(Ct),Fo=i(Xt),qo=i(Yt),Uo=i(Ee),Wo=i(ht),Go=i(Bt),Ko=i(Ot),Xo=i(yt),Zo=i(wt),Yo=i(Qe),Jo=i(Xe),Qo=i(tt),er=i(At,{strokeWidth:2.4}),tr=i(Qt),or=i(Mt),rr=i(Pe),nr=i(Ut),ar=i(rt),sr=i(kt),ir=i(St),cr=i(_t),lr=i(Ft),dr=i(Ue),ur=i(Oe),fr=i(Be),hr=i(Fe),pr=i(Se),vr=i(Te),mr=i(Ae),yr=i(Me),gr=i(Ce),kr=i(Gt),br=i(Ge),wr=i(Tt),xr=i(Pt),_r=i(Et),$r=i(Ye);function to(e){if(e===void 0)return null;const{value:t}=J(e.magnitude,e.unit);return t===Q?null:t}function q(e,t){const o=to(t);return o===null?e:`${e}, as of ${o}`}const U="modelled to SCET";function Mr(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function D(e){return N(e.value)||z(e.value)?{shown:e.value,held:!1,mark:null,isStatic:N(e.value),isDeterministic:z(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:q(V(e.grade),e.asOfUt)}}function zr(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:N(e),isDeterministic:z(e),caption:null,band:null};const o=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!z(e.value)){const r=e.reckoning.modelled;if(e.state==="held"){const a=D(e);return{...a,shown:r,mark:a.held?"modelled":null,caption:a.caption===null?null:`${a.caption}, modelled`,band:o}}const n=e.reckoning.beyondReceived;return{shown:r,held:n,mark:n?"modelled":null,isStatic:!1,isDeterministic:!1,caption:n?U:null,band:o}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:N(e.value),isDeterministic:z(e.value),caption:null,band:o}:e.state==="held"?{...D(e),band:o}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Sr(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function Ir(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:U}:null;if(e.state==="held"){const o=q(V(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${o}, modelled`}:{kind:"held",caption:o}}return null}const oo={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},ro={center:"center",start:"flex-start",baseline:"baseline"},Ar=l.forwardRef(function({justify:t="between",align:o="center",gap:r,wrap:n=!1,children:a,...c},d){return f.jsx(no,{ref:d,$justify:t,$align:o,$gap:r,$wrap:n,...c,children:a})}),no=p.div`
  display: flex;
  align-items: ${({$align:e})=>ro[e]};
  justify-content: ${({$justify:e})=>oo[e]};
  gap: ${({$gap:e})=>e?A[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function Nr({children:e,"aria-label":t,visuallyHidden:o=!1,additionsOnly:r=!1,assertive:n=!1,as:a="span",className:c}){const u={role:o?void 0:n?"alert":"status","aria-live":n?"assertive":"polite","aria-atomic":r?"false":"true","aria-label":t,className:c,"data-live-region":""};return o?f.jsx(ye,{as:a,...u,children:e}):l.createElement(a,u,e)}function Cr({size:e,kind:t="held"}){return f.jsx("tspan",{dy:-e*.55,fontSize:e,fill:M[t].color,"data-held-mark":"","data-reckoning-mark":t,children:M[t].glyph})}function Lr({end:e,x1:t,y1:o,x2:r,y2:n}){return f.jsx("line",{"data-bound":e,x1:t,y1:o,x2:r,y2:n,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function Tr(e,t){return t===null?e:`${e}, ${t}`}function Rr(e){return e===null?{}:{"data-currency-in-name":""}}function Er({x:e,y:t,size:o,children:r}){return f.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:o,fill:"var(--color-text-muted)",children:r})}function $(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((o,r)=>$(o,t[r]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const o=[...t];return[...e].every(r=>{const n=o.findIndex(a=>$(r,a));return n===-1?!1:(o.splice(n,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[o,r]of e)if(!t.has(o)||!$(r,t.get(o)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const o=e,r=t,n=new Set;for(const a of Object.keys(o))o[a]!==void 0&&n.add(a);for(const a of Object.keys(r))r[a]!==void 0&&n.add(a);for(const a of n)if(!$(o[a],r[a]))return!1;return!0}return!1}function ao(e,t,o,r){const[n,a]=l.useState(r),c=l.useRef(t);c.current=t;const d=l.useRef(o);d.current=o;const u=l.useRef(n);return u.current=n,l.useEffect(()=>{if(!e)return;let y=u.current;const m=()=>{const h=c.current(e);d.current(y,h)||(y=h,a(h))};m(),e.addEventListener("scroll",m,{passive:!0});const g=new ResizeObserver(m);g.observe(e);for(const h of Array.from(e.children))g.observe(h);const b=new MutationObserver(()=>{for(const h of Array.from(e.children))g.observe(h);m()});return b.observe(e,{childList:!0,subtree:!0}),()=>{e.removeEventListener("scroll",m),g.disconnect(),b.disconnect()}},[e]),n}function so(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function jr(e){return ao(e,so,Object.is,!1)?0:void 0}const io={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function Pr({cols:e,minColWidth:t,fit:o=!1,gap:r="related-dense",rowGap:n,align:a="center",children:c,...d}){return f.jsx(co,{$cols:e,$minColWidth:t,$fit:o,$gap:r,$rowGap:n,$align:a,...d,children:c})}const co=p.div`
  display: grid;
  align-items: ${({$align:e})=>io[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${A[t]} ${A[e]}`:A[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:o})=>e||(t?`repeat(${o?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,lo={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function Hr(e){return lo[e]}const uo=l.createContext(null);function fo(e,t){const o=l.useContext(uo),r=o?.setFooter,n=o?.setDirty;l.useEffect(()=>(r?.(e),()=>r?.(null)),[r,e]),l.useEffect(()=>(n?.(t),()=>n?.(!1)),[n,t])}function Or(e){const{onSave:t,value:o,saved:r,saveLabel:n="Save",extra:a,disabled:c}=e,d=l.useRef(null);d.current===null&&(d.current={v:o});const u=!$(o,d.current.v)&&!$(o,r),y=l.useMemo(()=>f.jsxs(f.Fragment,{children:[a,f.jsx(oe,{variant:"primary",type:"button",onClick:t,disabled:c,children:n})]}),[a,t,c,n]);fo(y,u)}const Dr=v`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,E=.45;function Br({kind:e,x:t,y:o,scale:r=1,ghost:n=!1}){const a=M[e],c=a.canvasRadius*r,d={fill:a.color,opacity:n?E:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held")return f.jsx("circle",{cx:t,cy:o,r:c,...d});const u=`${t},${o-c} ${t+c},${o+c*.8} ${t-c},${o+c*.8}`;return f.jsx("polygon",{points:u,...d})}function W(e,t,o){return getComputedStyle(e).getPropertyValue(t).trim()||o}function B(e,t,o,r,n,{ghost:a=!1,scale:c=1}={}){const d=M[o],u=d.canvasRadius*c;t.save(),t.globalAlpha=a?E:1,t.fillStyle=W(e,d.cssVar,d.fallback),t.beginPath(),o==="held"?t.arc(r,n,u,0,Math.PI*2):(t.moveTo(r,n-u),t.lineTo(r+u,n+u*.8),t.lineTo(r-u,n+u*.8),t.closePath()),t.fill(),t.restore()}function Vr(e,t,{held:o,modelled:r},n={}){o!==void 0&&r!==void 0&&(t.save(),t.globalAlpha=E,t.strokeStyle=W(e,M.modelled.cssVar,M.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(r.x,r.y),t.stroke(),t.restore()),o!==void 0&&B(e,t,"held",o.x,o.y,{...n,ghost:r!==void 0}),r!==void 0&&B(e,t,"modelled",r.x,r.y,n)}export{uo as $,pr as A,Uo as B,rr as C,Yo as D,xo as E,So as F,To as G,xr as H,Mo as I,Po as J,Go as K,Wo as L,sr as M,nr as N,lr as O,cr as P,Ro as Q,kr as R,Ko as S,$o as T,$ as U,ye as V,wo as W,fo as X,Or as Y,Nr as Z,jr as _,mr as a,Dr as a0,_o as a1,jo as a2,C as a3,zr as a4,Sr as a5,Hr as a6,Eo as a7,yr as a8,fr as a9,Ar as aa,Jo as ab,Pr as ac,Oo as ad,Do as ae,Cr as af,Bo as ag,qo as ah,M as ai,Br as aj,$r as ak,Fo as al,Ir as am,Mr as an,Vr as ao,B as ap,Tr as aq,he as ar,de as as,Lr as at,Rr as au,Er as av,U as aw,ao as ax,vr as b,Vo as c,oe as d,ur as e,hr as f,dr as g,tr as h,zo as i,Qo as j,No as k,Ao as l,Io as m,Co as n,_r as o,wr as p,Xo as q,Zo as r,br as s,ar as t,Ho as u,Lo as v,or as w,ir as x,er as y,gr as z};
