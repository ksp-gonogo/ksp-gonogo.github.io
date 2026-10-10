import{j as h}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import b,{css as x,createGlobalStyle as we}from"./ext-styled-components-Br73TgY3.js";import{r as p}from"./ext-react-RRA14VTW.js";import{r as _e}from"./ext-react-dom-CZVBhjGL.js";import{ch as W,cm as X}from"./view-clock-formula-V4D43Fqq.js";import"./ksp-enum-names-mMQ85-RD.js";import"./screen-UZmJz89R.js";import{g as ne,e as Me,d as $e,T as Se,i as Q,v as Ae,N as J,G as F}from"./streamStatusWord-oQfueYZn.js";const yn={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"},weight:{regular:400,bold:700},letterSpacing:{tight:"0.05em",label:"0.1em",wide:"0.15em",body:"0"}},borders:{subtle:"1px solid var(--color-border-subtle)",strong:"1px solid var(--color-border-strong)"}};function gn({children:e,layout:t="inline",...o}){return h.jsx(Le,{$layout:t,...o,children:e})}const Ie={inline:x``,fill:x`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},Le=b.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>Ie[e]}
`,G=x`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,kn=x`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,ze=p.forwardRef(function({variant:t="default",tone:o,size:n="md",pressed:r,...s},a){return h.jsx(He,{ref:a,$variant:t,$tone:o??(t==="primary"?"go":"neutral"),$size:n,$pressed:r===!0,"aria-pressed":r,...s})});function Te(e){return e==="neutral"?"go":e}const ee=e=>x`
  background: ${ne[e]};
  border-color: ${ne[e]};
  color: ${Me[e]};
`,Ce=e=>x`
  border-color: ${$e[e]};
  color: ${Se[e]};
`,re={default:x`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:x`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},Ee=x`
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
`,Ne=x`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function Re(e,t){return e==="text"?Ee:e==="primary"?ee(t):t==="neutral"?re[e]:x`
    ${re[e]}
    ${Ce(t)}
  `}const Pe=x`
  @media (hover: hover) {
    &:hover:not(:disabled) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,je={sm:x`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:x`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},He=b.button`
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

  ${({$size:e})=>je[e]}
  ${({$variant:e,$tone:t})=>Re(e,t)}
  ${({$pressed:e,$tone:t})=>e?ee(Te(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":Pe}
  ${G}
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

  ${({$variant:e})=>e==="text"?Ne:""}
`,bn=b.button`
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
  ${G}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Oe=b.button`
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
    ${ee("go")}
  }
  ${G}
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
`,xn=p.forwardRef(function({pressed:t,...o},n){return h.jsx(Oe,{ref:n,"aria-pressed":t,...o})}),wn=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,_n=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,Mn=b.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,$n=b.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Sn=b.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,An=b.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,te=x`
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

  ${G}

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
`,In=b.input`
  ${te}
  width: 100%;
`,Ln=b.select`
  ${te}
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
`,zn=b.textarea`
  ${te}
  width: 100%;
  resize: vertical;
`,Tn="max(0.075em, 1.25px)",C={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},De=120,We=120,ae=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function Ve(e){const[t,o]=p.useState(null),[n,r]=p.useState(!1),[s,a]=p.useState(!1),[c,l]=p.useState(!1),f=p.useRef(!1),v=p.useRef(null),m=e!=null&&e!==""?e:null,k=t!==null&&(n||s||c),y=p.useCallback(()=>{v.current!==null&&clearTimeout(v.current),v.current=null},[]),g=p.useCallback(()=>{y(),o(null),r(!1),a(!1),l(!1)},[y]),_=p.useCallback(()=>{y(),v.current=setTimeout(()=>{v.current=null,r(!1),l(!1)},We)},[y]);if(p.useEffect(()=>y,[y]),p.useEffect(()=>{if(t!==null)return window.addEventListener("scroll",g,!0),window.addEventListener("resize",g),()=>{window.removeEventListener("scroll",g,!0),window.removeEventListener("resize",g)}},[t,g]),p.useEffect(()=>{if(!k)return;const w=M=>{M.key==="Escape"&&g()};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[k,g]),m===null)return{anchor:{},tip:null};const I=w=>{const M=w.getBoundingClientRect();o({top:M.bottom,left:M.left,above:window.innerHeight-M.bottom<De,anchorTop:M.top})};return{anchor:{"data-tooltip":m,onPointerEnter:w=>{y(),I(w.currentTarget),r(!0)},onPointerLeave:_,onPointerDown:()=>{f.current=!0,g()},onPointerUp:()=>{f.current=!1},onFocus:w=>{f.current||(I(w.currentTarget),a(!0))},onBlur:()=>{a(!1),!n&&!c&&o(null)}},tip:k?_e.createPortal(h.jsx(Be,{at:t,text:m,onPointerEnter:()=>{y(),l(!0)},onPointerLeave:_}),document.body):null}}function Be({at:e,text:t,onPointerEnter:o,onPointerLeave:n}){const r=e.above?{bottom:window.innerHeight-e.anchorTop}:{top:e.top};return h.jsx(Ue,{"aria-hidden":"true","data-tooltip-tip":"","data-above":e.above?"":void 0,onPointerEnter:o,onPointerLeave:n,style:{...r,left:e.left,"--tip-left":`${e.left}px`},children:t})}function j(e,t){return(...o)=>{typeof e=="function"&&e(...o),t?.(...o)}}function Cn({text:e,children:t,focusable:o=!1,announce:n=!0}){const{anchor:r,tip:s}=Ve(e);if(e==null||e==="")return t;const a=t.props,c=a["aria-label"],l=!n||typeof c=="string"&&ae(c).includes(ae(e));return h.jsxs(h.Fragment,{children:[p.cloneElement(t,{"data-tooltip":e,onPointerEnter:j(a.onPointerEnter,r.onPointerEnter),onPointerLeave:j(a.onPointerLeave,r.onPointerLeave),onPointerDown:j(a.onPointerDown,r.onPointerDown),onPointerUp:j(a.onPointerUp,r.onPointerUp),onFocus:j(a.onFocus,r.onFocus),onBlur:j(a.onBlur,r.onBlur),"aria-description":l?a["aria-description"]:e,tabIndex:o?a.tabIndex??0:a.tabIndex}),s,o&&h.jsx(Fe,{})]})}const Fe=we`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Ue=b.div`
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
`,Xe=b.span`
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
 */const fe=(...e)=>e.filter((t,o,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,n)=>n?n.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=e=>{const t=Ge(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var K={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Ye=p.createContext({}),Je=()=>p.useContext(Ye),Ze=p.forwardRef(({color:e,size:t,strokeWidth:o,absoluteStrokeWidth:n,className:r="",children:s,iconNode:a,...c},l)=>{const{size:f=24,strokeWidth:v=2,absoluteStrokeWidth:m=!1,color:k="currentColor",className:y=""}=Je()??{},g=n??m?Number(o??v)*24/Number(t??f):o??v;return p.createElement("svg",{ref:l,...K,width:t??f??K.width,height:t??f??K.height,stroke:e??k,strokeWidth:g,className:fe("lucide",y,r),...!s&&!Ke(c)&&{"aria-hidden":"true"},...c},[...a.map(([_,I])=>p.createElement(_,I)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(e,t)=>{const o=p.forwardRef(({className:n,...r},s)=>p.createElement(Ze,{ref:s,iconNode:t,className:fe(`lucide-${qe(se(e))}`,`lucide-${e}`,n),...r}));return o.displayName=se(e),o};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],et=d("arrow-down",Qe);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ot=d("arrow-left",tt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],rt=d("arrow-right",nt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],st=d("arrow-up-to-line",at);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],ct=d("arrow-up",it);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],dt=d("bell",lt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ft=d("check",ut);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],pt=d("chevron-down",ht);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],mt=d("chevron-left",vt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],gt=d("chevron-right",yt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],bt=d("chevron-up",kt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],wt=d("columns-2",xt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],Mt=d("computer",_t);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],St=d("corner-down-left",$t);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],It=d("database",At);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],zt=d("file-text",Lt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ct=d("heart",Tt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Nt=d("history",Et);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Pt=d("house",Rt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Ht=d("info",jt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],Dt=d("joystick",Ot);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Vt=d("layers",Wt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ft=d("lock",Bt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Xt=d("maximize",Ut);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],Gt=d("microscope",qt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],Yt=d("minimize",Kt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Zt=d("pause",Jt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],eo=d("pencil",Qt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],oo=d("play",to);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ro=d("plus",no);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],so=d("radio",ao);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],co=d("rectangle-horizontal",io);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],uo=d("rectangle-vertical",lo);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],ho=d("rows-2",fo);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],vo=d("satellite",po);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],yo=d("settings",mo);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],ko=d("square",go);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],xo=d("star",bo);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],_o=d("undo-2",wo);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],$o=d("volume-2",Mo);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Ao=d("volume-x",So);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Lo=d("x",Io),zo={size:"var(--icon-size-control)",strokeWidth:1.8,"aria-hidden":!0};function u(e,t){const o=p.forwardRef(({label:n,...r},s)=>{const a=n?{role:"img","aria-label":n,"aria-hidden":!1}:{};return h.jsx(e,{...zo,...t,...a,...r,ref:s})});return o.displayName=e.displayName??e.name,o}const En=u(Dt),Nn=u(Nt),Rn=u(Pt),Pn=u(Ht),jn=u(Ft),Hn=u(so),On=u($o),Dn=u(Ao),Wn=u(dt),Vn=u(Vt),Bn=u(yo),Fn=u(vo),Un=u(Xt),Xn=u(Yt),qn=u(It),Gn=u(Mt),Kn=u(zt),Yn=u(ro,{strokeWidth:2.4}),Jn=u(Lo),Zn=u(eo),Qn=u(ft),er=u(xo),tr=u(Ct),or=u(Gt),nr=u(oo),rr=u(Zt),ar=u(ko),sr=u(bt),ir=u(pt),cr=u(mt),lr=u(gt),dr=u(ot),ur=u(ct),fr=u(rt),hr=u(et),pr=u(st),vr=u(_o),mr=u(wt),yr=u(co),gr=u(ho),kr=u(uo),br=u(St);function To(e){if(e===void 0)return null;const{value:t}=Ae(e.magnitude,e.unit);return t===J?null:t}function he(e,t){const o=To(t);return o===null?e:`${e}, as of ${o}`}const pe="modelled to SCET";function xr(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function ie(e){return X(e.value)||W(e.value)?{shown:e.value,held:!1,mark:null,isStatic:X(e.value),isDeterministic:W(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:he(Q(e.grade),e.asOfUt)}}function wr(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:X(e),isDeterministic:W(e),caption:null,band:null};const o=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!W(e.value)){const n=e.reckoning.modelled;if(e.state==="held"){const s=ie(e);return{...s,shown:n,mark:s.held?"modelled":null,caption:s.caption===null?null:`${s.caption}, modelled`,band:o}}const r=e.reckoning.beyondReceived;return{shown:n,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?pe:null,band:o}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:X(e.value),isDeterministic:W(e.value),caption:null,band:o}:e.state==="held"?{...ie(e),band:o}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function _r(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function Co(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:pe}:null;if(e.state==="held"){const o=he(Q(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${o}, modelled`}:{kind:"held",caption:o}}return null}function Mr(e){return e===void 0?null:typeof e!="string"?Co(e):{kind:"held",caption:Q(e)}}function Eo(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function $r(e,t){const o=Eo(t);return o===void 0?e:{state:"held",value:e,grade:o,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}const No={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},Ro={center:"center",start:"flex-start",baseline:"baseline"},Sr=p.forwardRef(function({justify:t="between",align:o="center",gap:n,wrap:r=!1,children:s,...a},c){return h.jsx(Po,{ref:c,$justify:t,$align:o,$gap:n,$wrap:r,...a,children:s})}),Po=b.div`
  display: flex;
  align-items: ${({$align:e})=>Ro[e]};
  justify-content: ${({$justify:e})=>No[e]};
  gap: ${({$gap:e})=>e?F[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function Ar({children:e,"aria-label":t,visuallyHidden:o=!1,additionsOnly:n=!1,assertive:r=!1,as:s="span",className:a}){const l={role:o?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":n?"false":"true","aria-label":t,className:a,"data-live-region":""};return o?h.jsx(Xe,{as:s,...l,children:e}):p.createElement(s,l,e)}const jo=.72,Ho=.76;function Ir({size:e,kind:t="held",figureSize:o}){return h.jsx("tspan",{dy:o===void 0?-e*.55:-(o*jo-e*Ho),fontSize:e,fill:C[t].color,"data-held-mark":"","data-reckoning-mark":t,children:C[t].glyph})}function Lr({end:e,x1:t,y1:o,x2:n,y2:r}){return h.jsx("line",{"data-bound":e,x1:t,y1:o,x2:n,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function zr(e,t){return t===null?e:`${e}, ${t}`}function Tr(e){return e===null?{}:{"data-currency-in-name":""}}function Cr({x:e,y:t,size:o,children:n}){return h.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:o,fill:"var(--color-text-muted)",children:n})}function H(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((o,n)=>H(o,t[n]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const o=[...t];return[...e].every(n=>{const r=o.findIndex(s=>H(n,s));return r===-1?!1:(o.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[o,n]of e)if(!t.has(o)||!H(n,t.get(o)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const o=e,n=t,r=new Set;for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of r)if(!H(o[s],n[s]))return!1;return!0}return!1}function Oo(e,t,o,n){const[r,s]=p.useState(n),a=p.useRef(t);a.current=t;const c=p.useRef(o);c.current=o;const l=p.useRef(r);return l.current=r,p.useEffect(()=>{if(!e)return;let f=l.current;const v=()=>{const y=a.current(e);c.current(f,y)||(f=y,s(y))};v(),e.addEventListener("scroll",v,{passive:!0});const m=new ResizeObserver(v);m.observe(e);for(const y of Array.from(e.children))m.observe(y);const k=new MutationObserver(()=>{for(const y of Array.from(e.children))m.observe(y);v()});return k.observe(e,{childList:!0,subtree:!0}),()=>{e.removeEventListener("scroll",v),m.disconnect(),k.disconnect()}},[e]),r}function Do(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function Er(e){return Oo(e,Do,Object.is,!1)?0:void 0}const Wo={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function Nr({cols:e,minColWidth:t,fit:o=!1,gap:n="related-dense",rowGap:r,align:s="center",children:a,...c}){return h.jsx(Vo,{$cols:e,$minColWidth:t,$fit:o,$gap:n,$rowGap:r,$align:s,...c,children:a})}const Vo=b.div`
  display: grid;
  align-items: ${({$align:e})=>Wo[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${F[t]} ${F[e]}`:F[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:o})=>e||(t?`repeat(${o?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,Bo={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function Rr(e){return Bo[e]}const Fo=p.createContext(null);function Uo(e,t){const o=p.useContext(Fo),n=o?.setFooter,r=o?.setDirty;p.useEffect(()=>(n?.(e),()=>n?.(null)),[n,e]),p.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function Pr(e){const{onSave:t,value:o,saved:n,saveLabel:r="Save",extra:s,disabled:a}=e,c=p.useRef(null);c.current===null&&(c.current={v:o});const l=!H(o,c.current.v)&&!H(o,n),f=p.useMemo(()=>h.jsxs(h.Fragment,{children:[s,h.jsx(ze,{variant:"primary",type:"button",onClick:t,disabled:a,children:r})]}),[s,t,a,r]);Uo(f,l)}const jr=x`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,ve=.89,oe=.45;function Xo({kind:e,x:t,y:o,scale:n=1,ghost:r=!1}){const s=C[e],a=s.canvasRadius*n,c={fill:s.color,opacity:r?oe:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const f=a*ve;return h.jsx("rect",{x:t-f,y:o-f,width:2*f,height:2*f,...c})}const l=`${t},${o-a} ${t+a},${o+a*.8} ${t-a},${o+a*.8}`;return h.jsx("polygon",{points:l,...c})}function me(e,t,o){return getComputedStyle(e).getPropertyValue(t).trim()||o}function ce(e,t,o,n,r,{ghost:s=!1,scale:a=1}={}){const c=C[o],l=c.canvasRadius*a;if(t.save(),t.globalAlpha=s?oe:1,t.fillStyle=me(e,c.cssVar,c.fallback),t.beginPath(),o==="held"){const f=l*ve;t.rect(n-f,r-f,2*f,2*f)}else t.moveTo(n,r-l),t.lineTo(n+l,r+l*.8),t.lineTo(n-l,r+l*.8),t.closePath();t.fill(),t.restore()}function Hr(e,t,{held:o,modelled:n},r={}){o!==void 0&&n!==void 0&&(t.save(),t.globalAlpha=oe,t.strokeStyle=me(e,C.modelled.cssVar,C.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(n.x,n.y),t.stroke(),t.restore()),o!==void 0&&ce(e,t,"held",o.x,o.y,{...r,ghost:n!==void 0}),n!==void 0&&ce(e,t,"modelled",n.x,n.y,r)}const q=14,T=5,z=6.2,qo=10,le=12,$=6,V=8,B=4.5,Z=4,Go=12,Ko=190,Yo=80;function D(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function Jo(e,t,o,n){const r=n??e,s=r.x1-r.x0,a=e.y1-e.y0,c=s>=Ko&&a>=Yo,l=c||n!==void 0,f=c||n?o:o.filter(i=>!i.detail),v=s-$*2-T*2-V-Z,m=n!==void 0,k=Math.floor(v/z),y=i=>D(i.value??J,k-(i.currency?i.currency.length+2:0)),g=i=>{const S=i.value??J;if(m)return D(i.label,k);if(c)return`${i.label}  ${S}`;const N=Math.floor((v-S.length*z)/z)-1-(i.modelled?2:0),P=D(i.label,Math.min(N,Go));if(P!=="")return`${P} ${S}`;const O=Math.floor(v/z)-(i.modelled?2:0);return D(S,O)},_=i=>(c||m)&&i.currency?i.currency:"",I=i=>_(i)?qo+_(i).length*z+(i.modelled?le:0):i.modelled?le:0,w=c?0:V+Z,M=Math.floor((s-$*2-T*2)/z),L=Math.max(...f.map(i=>m?w+Math.max(g(i).length*z,y(i).length*z+I(i)):w+g(i).length*z+I(i)),l?Math.min(t.length,M)*z:0),E=l?1:0,R=(f.length*(m?2:1)+E)*q+T*2;return{full:c,named:l,headingChars:M,stacked:m,rows:f,text:g,valueText:y,currencyText:_,cardW:m?s:Math.min(L+T*2,s-$*2),cardH:R,headRows:E,fits:R<=a-$*2}}function Zo(e,t,o,n,r){const s=(a,c)=>a>=t&&a<=t+n&&c>=o&&c<=o+r;for(let a=1;a<e.cx.length;a++){const[c,l,f,v]=[e.cx[a-1],e.cy[a-1],e.cx[a],e.cy[a]];if(![c,l,f,v].every(Number.isFinite))continue;const m=Math.max(1,Math.ceil(Math.hypot(f-c,v-l)/q));for(let k=0;k<=m;k++)if(s(c+(f-c)*k/m,l+(v-l)*k/m))return!0}return!1}function ye({x:e,plot:t,heading:o,rows:n,column:r,traces:s=[]}){const a=Jo(t,o,n,r),{rows:c,cardW:l,cardH:f,fits:v}=a,m=t.y0+$,k=c.flatMap(i=>i.y===void 0||i.y===null?[]:[i.y]),y=(i,S)=>k.every(N=>e+B<i||e-B>i+l||N+B<S||N-B>S+f),g=t.x1-e-$,_=g>=l||g>=e-t.x0,I=i=>Math.max(t.x0+$,Math.min(t.x1-$-l,i)),w=_?[e+$,e-$-l]:[e-$-l,e+$],M=[m,t.y1-$-f].flatMap(i=>w.map(S=>({cardX:I(S),cardY:i}))),L=(i,S)=>s.every(N=>!Zo(N,i,S,l,f)),E=M.find(i=>y(i.cardX,i.cardY)&&L(i.cardX,i.cardY))??M.find(i=>y(i.cardX,i.cardY)),R=v?r?{cardX:r.x0,cardY:r.y0+$}:E:void 0;return{layout:a,place:R}}function Or(e){return ye(e).place!==void 0}function Dr({x:e,plot:t,heading:o,rows:n,column:r}){const{layout:s,place:a}=ye({x:e,plot:t,heading:o,rows:n,column:r}),{full:c,named:l,headingChars:f,stacked:v,rows:m,text:k,valueText:y,currencyText:g,cardW:_,cardH:I,headRows:w}=s,M=a!==void 0,L=a?.cardX??0,E=a?.cardY??0,R=i=>i+T+(c?0:V+Z);return h.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[h.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),m.map(i=>i.y===void 0||i.y===null?null:h.jsx("circle",{cx:e,cy:i.y,r:3.5,fill:i.color,stroke:"var(--color-text-primary)",strokeWidth:1},i.id)),M&&h.jsxs("g",{"data-plot-crosshair-card":"",children:[h.jsx("rect",{x:L,y:E,width:_,height:I,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),l&&h.jsx("text",{x:L+T,y:E+T+10,fill:"var(--color-text-muted)",fontSize:10,children:D(o,f)}),m.map((i,S)=>{const N=v?2:1,P=E+T+(S*N+w)*q+10,O=P+(v?q:0);return h.jsxs("g",{"data-plot-crosshair-row":i.id,children:[!c&&h.jsx("rect",{x:L+T,y:P-8,width:V,height:V,fill:i.color,"data-plot-crosshair-swatch":""}),h.jsx("text",{x:R(L),y:P,fill:i.value===null||v?"var(--color-text-faint)":i.color,fontSize:10,style:{whiteSpace:"pre"},children:k(i)}),v&&h.jsx("text",{x:R(L),y:O,fill:i.value===null?"var(--color-text-faint)":i.color,fontSize:10,style:{whiteSpace:"pre"},children:y(i)}),i.modelled&&h.jsx(Xo,{kind:"modelled",x:L+_-T-g(i).length*z-(g(i)?8:4),y:O-3}),g(i)&&h.jsx("text",{x:L+_-T,y:O,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:g(i)})]},i.id)})]})]})}const Qo=480,en=110,tn=112,on=260,nn=.4,rn=300;function Wr({width:e,height:t,contentWidth:o}){const n=Math.max(tn,Math.ceil(o));return e<Qo||t<en||n>Math.min(on,e*nn)||e-n<rn?{placement:"overlay"}:{placement:"beside",columnWidth:n}}const Y=.86,de=[[0,-1.15],[1.05,.8],[-1.05,.8]],ue=.3,A={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:Y,triangle:de,outlineWidth:ue,keylineWidth:.2,reach:Math.max(Math.hypot(Y,Y),...de.map(([e,t])=>Math.hypot(e,t)))+ue/2},an={"aria-hidden":!0};function ge(e,t,o,n){const r=A.squareHalf;return(e==="modelled"?A.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([a,c])=>[t+a*n,o+c*n])}const ke=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function be(e,t,o){const n=e==="current"?0:A.outlineWidth;return t*(n+2*o*A.keylineWidth)}function Vr({x:e,y:t,r:o,state:n="current",keyline:r=!1}){const s=n==="current"?"":ge(n,0,0,o).map(([a,c])=>`${a},${c}`).join(" ");return h.jsxs("g",{"data-vessel-mark":n,transform:`translate(${e} ${t})`,...an,children:[r&&ke.map(({ring:a,color:c,widths:l})=>{const f={"data-vessel-keyline":a,fill:"none",stroke:c,strokeWidth:be(n,o,l),strokeLinejoin:"round"};return n==="current"?h.jsx("circle",{r:o,...f},a):h.jsx("polygon",{points:s,...f},a)}),n==="current"?h.jsx("circle",{r:o,fill:A.color}):h.jsx("polygon",{points:s,fill:n==="lost"?"none":C[n].color,stroke:n==="lost"?A.lost.color:A.color,strokeWidth:o*A.outlineWidth,strokeLinejoin:"round"})]})}function U(e,t,o){return getComputedStyle(e).getPropertyValue(t).trim()||o}function xe(e,t,o,n,r){if(e.beginPath(),t==="current"){e.arc(o,n,r,0,Math.PI*2);return}ge(t,o,n,r).forEach(([s,a],c)=>{c===0?e.moveTo(s,a):e.lineTo(s,a)}),e.closePath()}function sn(e,t,o,n,r){e.save(),e.lineJoin="round";for(const{color:s,widths:a}of ke)xe(e,t,o,n,r),e.strokeStyle=s,e.lineWidth=be(t,r,a),e.stroke();e.restore()}function cn(e,t,o,n,r,s=4,{keyline:a=!1}={}){a&&sn(t,o,n,r,s);const c=U(e,A.cssVar,A.fallback);if(t.save(),xe(t,o,n,r,s),o==="current")t.fillStyle=c,t.fill();else{if(o!=="lost"){const l=C[o];t.fillStyle=U(e,l.cssVar,l.fallback),t.fill()}t.strokeStyle=o==="lost"?U(e,A.lost.cssVar,A.lost.fallback):c,t.lineWidth=s*A.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function Br(e,t,o,n=4,r={}){const{held:s,modelled:a}=o;s!==void 0&&a!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=U(e,C.modelled.cssVar,C.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(a.x,a.y),t.stroke(),t.restore());for(const c of["lost","held","current","modelled"]){const l=o[c];l!==void 0&&cn(e,t,c,l.x,l.y,n,r)}}export{Fo as $,dr as A,Wn as B,Qn as C,qn as D,gn as E,_n as F,Ln as G,gr as H,xn as I,En as J,Bn as K,Vn as L,or as M,er as N,ar as O,rr as P,zn as Q,vr as R,Fn as S,bn as T,H as U,Xe as V,yn as W,Uo as X,Pr as Y,Ar as Z,Er as _,fr as a,jr as a0,kn as a1,Cn as a2,G as a3,wr as a4,_r as a5,Rr as a6,hr as a7,cr as a8,Sr as a9,Ve as aA,He as aB,Lr as aC,Tr as aD,Cr as aE,Tn as aF,pe as aG,Oo as aH,Gn as aa,Nr as ab,Rn as ac,Pn as ad,Ir as ae,jn as af,Dn as ag,Dr as ah,C as ai,Xo as aj,br as ak,On as al,A as am,Vr as an,Co as ao,$r as ap,Eo as aq,Mr as ar,xr as as,Hr as at,ce as au,cn as av,Br as aw,Wr as ax,Or as ay,zr as az,ur as b,Hn as c,ze as d,ir as e,lr as f,sr as g,Jn as h,wn as i,Kn as j,Sn as k,$n as l,Mn as m,An as n,kr as o,yr as p,Un as q,Xn as r,mr as s,tr as t,Nn as u,In as v,Zn as w,nr as x,Yn as y,pr as z};
