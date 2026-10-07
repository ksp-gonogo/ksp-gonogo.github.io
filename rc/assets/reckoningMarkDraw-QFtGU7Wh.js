import{j as h}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import v,{css as m,createGlobalStyle as K}from"./ext-styled-components-Br73TgY3.js";import{r as l}from"./ext-react-RRA14VTW.js";import{r as X}from"./ext-react-dom-CZVBhjGL.js";import{cf as z,ck as L}from"./view-clock-formula-BksUbc3q.js";import"./ksp-enum-names-C4QdGrdI.js";import"./screen-D0fTqX3p.js";import{g as j,e as Y,d as Z,T as J,i as V,v as Q,N as ee,G as A}from"./streamStatusWord-DwJ39JP_.js";const $o={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"},weight:{regular:400,bold:700},letterSpacing:{tight:"0.05em",label:"0.1em",wide:"0.15em",body:"0"}},borders:{subtle:"1px solid var(--color-border-subtle)",strong:"1px solid var(--color-border-strong)"}};function Mo({children:e,layout:t="inline",...o}){return h.jsx(oe,{$layout:t,...o,children:e})}const te={inline:m``,fill:m`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},oe=v.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>te[e]}
`,N=m`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,zo=m`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,re=l.forwardRef(function({variant:t="default",tone:o,size:r="md",pressed:n,...a},c){return h.jsx(ue,{ref:c,$variant:t,$tone:o??(t==="primary"?"go":"neutral"),$size:r,$pressed:n===!0,"aria-pressed":n,...a})});function ne(e){return e==="neutral"?"go":e}const T=e=>m`
  background: ${j[e]};
  border-color: ${j[e]};
  color: ${Y[e]};
`,ae=e=>m`
  border-color: ${Z[e]};
  color: ${J[e]};
`,H={default:m`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:m`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},se=m`
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
`,ie=m`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function ce(e,t){return e==="text"?se:e==="primary"?T(t):t==="neutral"?H[e]:m`
    ${H[e]}
    ${ae(t)}
  `}const le=m`
  @media (hover: hover) {
    &:hover:not(:disabled) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,de={sm:m`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:m`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},ue=v.button`
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

  ${({$size:e})=>de[e]}
  ${({$variant:e,$tone:t})=>ce(e,t)}
  ${({$pressed:e,$tone:t})=>e?T(ne(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":le}
  ${N}
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

  ${({$variant:e})=>e==="text"?ie:""}
`,So=v.button`
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
  ${N}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Io=v.button`
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
  ${N}
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
`,Ao=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,Lo=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,No=v.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,Co=v.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,To=v.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Eo=v.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,E=m`
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

  ${N}

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
`,Ro=v.input`
  ${E}
  width: 100%;
`,jo=v.select`
  ${E}
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
`,Ho=v.textarea`
  ${E}
  width: 100%;
  resize: vertical;
`;function Po(e,t){return t}const Do="max(0.075em, 1.25px)",M={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},fe=120,he=120,P=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function pe(e){const[t,o]=l.useState(null),[r,n]=l.useState(!1),[a,c]=l.useState(!1),[d,u]=l.useState(!1),f=l.useRef(!1),y=l.useRef(null),g=e!=null&&e!==""?e:null,b=t!==null&&(r||a||d),p=l.useCallback(()=>{y.current!==null&&clearTimeout(y.current),y.current=null},[]),k=l.useCallback(()=>{p(),o(null),n(!1),c(!1),u(!1)},[p]),S=l.useCallback(()=>{p(),y.current=setTimeout(()=>{y.current=null,n(!1),u(!1)},he)},[p]);if(l.useEffect(()=>p,[p]),l.useEffect(()=>{if(t!==null)return window.addEventListener("scroll",k,!0),window.addEventListener("resize",k),()=>{window.removeEventListener("scroll",k,!0),window.removeEventListener("resize",k)}},[t,k]),l.useEffect(()=>{if(!b)return;const w=x=>{x.key==="Escape"&&k()};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[b,k]),g===null)return{anchor:{},tip:null};const I=w=>{const x=w.getBoundingClientRect();o({top:x.bottom,left:x.left,above:window.innerHeight-x.bottom<fe,anchorTop:x.top})};return{anchor:{"data-tooltip":g,onPointerEnter:w=>{p(),I(w.currentTarget),n(!0)},onPointerLeave:S,onPointerDown:()=>{f.current=!0,k()},onPointerUp:()=>{f.current=!1},onFocus:w=>{f.current||(I(w.currentTarget),c(!0))},onBlur:()=>{c(!1),!r&&!d&&o(null)}},tip:b?X.createPortal(h.jsx(ve,{at:t,text:g,onPointerEnter:()=>{p(),u(!0)},onPointerLeave:S}),document.body):null}}function ve({at:e,text:t,onPointerEnter:o,onPointerLeave:r}){const n=e.above?{bottom:window.innerHeight-e.anchorTop}:{top:e.top};return h.jsx(ye,{"aria-hidden":"true","data-tooltip-tip":"","data-above":e.above?"":void 0,onPointerEnter:o,onPointerLeave:r,style:{...n,left:e.left,"--tip-left":`${e.left}px`},children:t})}function _(e,t){return(...o)=>{typeof e=="function"&&e(...o),t?.(...o)}}function Oo({text:e,children:t,focusable:o=!1,announce:r=!0}){const{anchor:n,tip:a}=pe(e);if(e==null||e==="")return t;const c=t.props,d=c["aria-label"],u=!r||typeof d=="string"&&P(d).includes(P(e));return h.jsxs(h.Fragment,{children:[l.cloneElement(t,{"data-tooltip":e,onPointerEnter:_(c.onPointerEnter,n.onPointerEnter),onPointerLeave:_(c.onPointerLeave,n.onPointerLeave),onPointerDown:_(c.onPointerDown,n.onPointerDown),onPointerUp:_(c.onPointerUp,n.onPointerUp),onFocus:_(c.onFocus,n.onFocus),onBlur:_(c.onBlur,n.onBlur),"aria-description":u?c["aria-description"]:e,tabIndex:o?c.tabIndex??0:c.tabIndex}),a,o&&h.jsx(me,{})]})}const me=K`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,ye=v.div`
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
`,ge=v.span`
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
 */const ke=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,r)=>r?r.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=e=>{const t=be(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},xe=l.createContext({}),_e=()=>l.useContext(xe),$e=l.forwardRef(({color:e,size:t,strokeWidth:o,absoluteStrokeWidth:r,className:n="",children:a,iconNode:c,...d},u)=>{const{size:f=24,strokeWidth:y=2,absoluteStrokeWidth:g=!1,color:b="currentColor",className:p=""}=_e()??{},k=r??g?Number(o??y)*24/Number(t??f):o??y;return l.createElement("svg",{ref:u,...C,width:t??f??C.width,height:t??f??C.height,stroke:e??b,strokeWidth:k,className:F("lucide",p,n),...!a&&!we(d)&&{"aria-hidden":"true"},...d},[...c.map(([S,I])=>l.createElement(S,I)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=(e,t)=>{const o=l.forwardRef(({className:r,...n},a)=>l.createElement($e,{ref:a,iconNode:t,className:F(`lucide-${ke(D(e))}`,`lucide-${e}`,r),...n}));return o.displayName=D(e),o};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],ze=s("arrow-down",Me);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ie=s("arrow-left",Se);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Le=s("arrow-right",Ae);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Ce=s("arrow-up-to-line",Ne);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Ee=s("arrow-up",Te);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],je=s("bell",Re);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Pe=s("check",He);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Oe=s("chevron-down",De);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ve=s("chevron-left",Be);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qe=s("chevron-right",Fe);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],We=s("chevron-up",Ue);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],Ke=s("columns-2",Ge);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],Ye=s("computer",Xe);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],Je=s("corner-down-left",Ze);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],et=s("database",Qe);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ot=s("file-text",tt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],nt=s("heart",rt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],st=s("history",at);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],ct=s("house",it);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],dt=s("info",lt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],ft=s("joystick",ut);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],pt=s("layers",ht);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],mt=s("lock",vt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],gt=s("maximize",yt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],bt=s("microscope",kt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],xt=s("minimize",wt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],$t=s("pause",_t);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],zt=s("pencil",Mt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],It=s("play",St);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Lt=s("plus",At);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Ct=s("radio",Nt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Et=s("rectangle-horizontal",Tt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],jt=s("rectangle-vertical",Rt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],Pt=s("rows-2",Ht);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],Ot=s("satellite",Dt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Vt=s("settings",Bt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],qt=s("square",Ft);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Wt=s("star",Ut);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Kt=s("undo-2",Gt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Yt=s("volume-2",Xt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Jt=s("volume-x",Zt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],eo=s("x",Qt),to={size:"var(--icon-size-control)",strokeWidth:1.8,"aria-hidden":!0};function i(e,t){const o=l.forwardRef(({label:r,...n},a)=>{const c=r?{role:"img","aria-label":r,"aria-hidden":!1}:{};return h.jsx(e,{...to,...t,...c,...n,ref:a})});return o.displayName=e.displayName??e.name,o}const Bo=i(ft),Vo=i(st),Fo=i(ct),qo=i(dt),Uo=i(mt),Wo=i(Ct),Go=i(Yt),Ko=i(Jt),Xo=i(je),Yo=i(pt),Zo=i(Vt),Jo=i(Ot),Qo=i(gt),er=i(xt),tr=i(et),or=i(Ye),rr=i(ot),nr=i(Lt,{strokeWidth:2.4}),ar=i(eo),sr=i(zt),ir=i(Pe),cr=i(Wt),lr=i(nt),dr=i(bt),ur=i(It),fr=i($t),hr=i(qt),pr=i(We),vr=i(Oe),mr=i(Ve),yr=i(qe),gr=i(Ie),kr=i(Ee),br=i(Le),wr=i(ze),xr=i(Ce),_r=i(Kt),$r=i(Ke),Mr=i(Et),zr=i(Pt),Sr=i(jt),Ir=i(Je);function oo(e){if(e===void 0)return null;const{value:t}=Q(e.magnitude,e.unit);return t===ee?null:t}function q(e,t){const o=oo(t);return o===null?e:`${e}, as of ${o}`}const U="modelled to SCET";function Ar(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function O(e){return L(e.value)||z(e.value)?{shown:e.value,held:!1,mark:null,isStatic:L(e.value),isDeterministic:z(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:q(V(e.grade),e.asOfUt)}}function Lr(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:L(e),isDeterministic:z(e),caption:null,band:null};const o=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!z(e.value)){const r=e.reckoning.modelled;if(e.state==="held"){const a=O(e);return{...a,shown:r,mark:a.held?"modelled":null,caption:a.caption===null?null:`${a.caption}, modelled`,band:o}}const n=e.reckoning.beyondReceived;return{shown:r,held:n,mark:n?"modelled":null,isStatic:!1,isDeterministic:!1,caption:n?U:null,band:o}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:L(e.value),isDeterministic:z(e.value),caption:null,band:o}:e.state==="held"?{...O(e),band:o}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Nr(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function Cr(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:U}:null;if(e.state==="held"){const o=q(V(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${o}, modelled`}:{kind:"held",caption:o}}return null}const ro={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},no={center:"center",start:"flex-start",baseline:"baseline"},Tr=l.forwardRef(function({justify:t="between",align:o="center",gap:r,wrap:n=!1,children:a,...c},d){return h.jsx(ao,{ref:d,$justify:t,$align:o,$gap:r,$wrap:n,...c,children:a})}),ao=v.div`
  display: flex;
  align-items: ${({$align:e})=>no[e]};
  justify-content: ${({$justify:e})=>ro[e]};
  gap: ${({$gap:e})=>e?A[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function Er({children:e,"aria-label":t,visuallyHidden:o=!1,additionsOnly:r=!1,assertive:n=!1,as:a="span",className:c}){const u={role:o?void 0:n?"alert":"status","aria-live":n?"assertive":"polite","aria-atomic":r?"false":"true","aria-label":t,className:c,"data-live-region":""};return o?h.jsx(ge,{as:a,...u,children:e}):l.createElement(a,u,e)}const so=.72,io=.76;function Rr({size:e,kind:t="held",figureSize:o}){return h.jsx("tspan",{dy:o===void 0?-e*.55:-(o*so-e*io),fontSize:e,fill:M[t].color,"data-held-mark":"","data-reckoning-mark":t,children:M[t].glyph})}function jr({end:e,x1:t,y1:o,x2:r,y2:n}){return h.jsx("line",{"data-bound":e,x1:t,y1:o,x2:r,y2:n,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function Hr(e,t){return t===null?e:`${e}, ${t}`}function Pr(e){return e===null?{}:{"data-currency-in-name":""}}function Dr({x:e,y:t,size:o,children:r}){return h.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:o,fill:"var(--color-text-muted)",children:r})}function $(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((o,r)=>$(o,t[r]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const o=[...t];return[...e].every(r=>{const n=o.findIndex(a=>$(r,a));return n===-1?!1:(o.splice(n,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[o,r]of e)if(!t.has(o)||!$(r,t.get(o)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const o=e,r=t,n=new Set;for(const a of Object.keys(o))o[a]!==void 0&&n.add(a);for(const a of Object.keys(r))r[a]!==void 0&&n.add(a);for(const a of n)if(!$(o[a],r[a]))return!1;return!0}return!1}function co(e,t,o,r){const[n,a]=l.useState(r),c=l.useRef(t);c.current=t;const d=l.useRef(o);d.current=o;const u=l.useRef(n);return u.current=n,l.useEffect(()=>{if(!e)return;let f=u.current;const y=()=>{const p=c.current(e);d.current(f,p)||(f=p,a(p))};y(),e.addEventListener("scroll",y,{passive:!0});const g=new ResizeObserver(y);g.observe(e);for(const p of Array.from(e.children))g.observe(p);const b=new MutationObserver(()=>{for(const p of Array.from(e.children))g.observe(p);y()});return b.observe(e,{childList:!0,subtree:!0}),()=>{e.removeEventListener("scroll",y),g.disconnect(),b.disconnect()}},[e]),n}function lo(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function Or(e){return co(e,lo,Object.is,!1)?0:void 0}const uo={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function Br({cols:e,minColWidth:t,fit:o=!1,gap:r="related-dense",rowGap:n,align:a="center",children:c,...d}){return h.jsx(fo,{$cols:e,$minColWidth:t,$fit:o,$gap:r,$rowGap:n,$align:a,...d,children:c})}const fo=v.div`
  display: grid;
  align-items: ${({$align:e})=>uo[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${A[t]} ${A[e]}`:A[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:o})=>e||(t?`repeat(${o?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,ho={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function Vr(e){return ho[e]}const po=l.createContext(null);function vo(e,t){const o=l.useContext(po),r=o?.setFooter,n=o?.setDirty;l.useEffect(()=>(r?.(e),()=>r?.(null)),[r,e]),l.useEffect(()=>(n?.(t),()=>n?.(!1)),[n,t])}function Fr(e){const{onSave:t,value:o,saved:r,saveLabel:n="Save",extra:a,disabled:c}=e,d=l.useRef(null);d.current===null&&(d.current={v:o});const u=!$(o,d.current.v)&&!$(o,r),f=l.useMemo(()=>h.jsxs(h.Fragment,{children:[a,h.jsx(re,{variant:"primary",type:"button",onClick:t,disabled:c,children:n})]}),[a,t,c,n]);vo(f,u)}const qr=m`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,W=.89,R=.45;function Ur({kind:e,x:t,y:o,scale:r=1,ghost:n=!1}){const a=M[e],c=a.canvasRadius*r,d={fill:a.color,opacity:n?R:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const f=c*W;return h.jsx("rect",{x:t-f,y:o-f,width:2*f,height:2*f,...d})}const u=`${t},${o-c} ${t+c},${o+c*.8} ${t-c},${o+c*.8}`;return h.jsx("polygon",{points:u,...d})}function G(e,t,o){return getComputedStyle(e).getPropertyValue(t).trim()||o}function B(e,t,o,r,n,{ghost:a=!1,scale:c=1}={}){const d=M[o],u=d.canvasRadius*c;if(t.save(),t.globalAlpha=a?R:1,t.fillStyle=G(e,d.cssVar,d.fallback),t.beginPath(),o==="held"){const f=u*W;t.rect(r-f,n-f,2*f,2*f)}else t.moveTo(r,n-u),t.lineTo(r+u,n+u*.8),t.lineTo(r-u,n+u*.8),t.closePath();t.fill(),t.restore()}function Wr(e,t,{held:o,modelled:r},n={}){o!==void 0&&r!==void 0&&(t.save(),t.globalAlpha=R,t.strokeStyle=G(e,M.modelled.cssVar,M.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(r.x,r.y),t.stroke(),t.restore()),o!==void 0&&B(e,t,"held",o.x,o.y,{...n,ghost:r!==void 0}),r!==void 0&&B(e,t,"modelled",r.x,r.y,n)}export{po as $,gr as A,Xo as B,ir as C,tr as D,Mo as E,Lo as F,jo as G,zr as H,Io as I,Bo as J,Zo as K,Yo as L,dr as M,cr as N,hr as O,fr as P,Ho as Q,_r as R,Jo as S,So as T,$ as U,ge as V,$o as W,vo as X,Fr as Y,Er as Z,Or as _,br as a,qr as a0,zo as a1,Oo as a2,N as a3,Lr as a4,Nr as a5,Vr as a6,Po as a7,wr as a8,mr as a9,Tr as aa,or as ab,Br as ac,Fo as ad,qo as ae,Rr as af,Uo as ag,Ko as ah,M as ai,Ur as aj,Ir as ak,Go as al,Cr as am,Ar as an,Wr as ao,B as ap,Hr as aq,pe as ar,ue as as,jr as at,Pr as au,Dr as av,Do as aw,U as ax,co as ay,kr as b,Wo as c,re as d,vr as e,yr as f,pr as g,ar as h,Ao as i,rr as j,To as k,Co as l,No as m,Eo as n,Sr as o,Mr as p,Qo as q,er as r,$r as s,lr as t,Vo as u,Ro as v,sr as w,ur as x,nr as y,xr as z};
