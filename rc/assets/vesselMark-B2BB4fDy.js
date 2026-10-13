import{j as v}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import x,{css as $,createGlobalStyle as _e}from"./ext-styled-components-Br73TgY3.js";import{r as d}from"./ext-react-RRA14VTW.js";import{r as Me}from"./ext-react-dom-CZVBhjGL.js";import{cq as D,cv as X}from"./view-clock-formula-DRrEkS6Q.js";import"./ksp-enum-names-BjZ3fgw3.js";import"./screen-B5Z_APSM.js";import{g as re,e as $e,d as Se,T as Le,i as ee,o as Ae,N as Z,G as F}from"./streamStatusWord-BoFViXZM.js";const gn={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function kn({children:e,layout:t="inline",...o}){return v.jsx(Ee,{$layout:t,...o,children:e})}const Ie={inline:$``,fill:$`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},Ee=x.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>Ie[e]}
`,G=$`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,bn=$`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,ze=d.forwardRef(function({variant:t="default",tone:o,size:n="md",pressed:r,predictedOutcome:s,type:a="button",...i},c){return v.jsx(Oe,{ref:c,$variant:t,$tone:o??(t==="primary"?"go":"neutral"),$size:n,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,...i,type:a})});function Te(e){return e==="neutral"?"go":e}const te=e=>$`
  background: ${re[e]};
  border-color: ${re[e]};
  color: ${$e[e]};
`,Ce=e=>$`
  border-color: ${Se[e]};
  color: ${Le[e]};
`,ae={default:$`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:$`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},Ne=$`
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
`,Pe=$`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function Re(e,t){return e==="text"?Ne:e==="primary"?te(t):t==="neutral"?ae[e]:$`
    ${ae[e]}
    ${Ce(t)}
  `}const je=$`
  @media (hover: hover) {
    &:hover:not(:disabled) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,He={sm:$`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:$`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},Oe=x.button`
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

  ${({$size:e})=>He[e]}
  ${({$variant:e,$tone:t})=>Re(e,t)}
  ${({$pressed:e,$tone:t})=>e?te(Te(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":je}
  ${G}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* A predicted result changes the edge's line style and colour only, never its width, so the box stays the same size; both dashed because they are predictions, apart by colour and the tooltip. */
  &[data-predicted="held"]:not(:disabled) {
    border-style: dashed;
    border-color: var(--color-go-mark);
  }
  &[data-predicted="at-risk"]:not(:disabled) {
    border-style: dashed;
    /* Eased toward the ground so the amber is no louder than the go green beside it. */
    border-color: color-mix(
      in srgb,
      var(--color-warn-mark) 65%,
      var(--color-surface-raised)
    );
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

  ${({$variant:e})=>e==="text"?Pe:""}
`,xn=x.button`
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
`,De=x.button`
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
    ${te("go")}
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
`,wn=d.forwardRef(function({pressed:t,...o},n){return v.jsx(De,{ref:n,"aria-pressed":t,...o})}),_n=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,Mn=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,$n=x.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,Sn=x.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Ln=x.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,An=x.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,oe=$`
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
`,In=x.input`
  ${oe}
  width: 100%;
`,En=x.select`
  ${oe}
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
`,zn=x.textarea`
  ${oe}
  width: 100%;
  resize: vertical;
`,We=120,Be=120,se=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function Ve(e){const[t,o]=d.useState(null),[n,r]=d.useState(!1),[s,a]=d.useState(!1),[i,c]=d.useState(!1),[h,y]=d.useState(!1),m=d.useRef(null),g=d.useRef(!1),k=d.useRef(!1),w=d.useRef(null),_=e!=null&&e!==""?e:null,A=t!==null&&(n||s||i||h),S=d.useCallback(()=>{w.current!==null&&clearTimeout(w.current),w.current=null},[]),M=d.useCallback(()=>{S(),o(null),r(!1),a(!1),c(!1),y(!1),g.current=!1},[S]);d.useEffect(()=>{if(!h)return;const b=()=>{const p=document.getSelection(),C=p!==null&&!p.isCollapsed&&m.current?.contains(p.anchorNode)===!0;!g.current&&!C&&y(!1)},l=()=>{g.current=!1,b()};return document.addEventListener("pointerup",l),document.addEventListener("selectionchange",b),()=>{document.removeEventListener("pointerup",l),document.removeEventListener("selectionchange",b)}},[h]);const P=d.useCallback(()=>{S(),w.current=setTimeout(()=>{w.current=null,r(!1),c(!1)},Be)},[S]);if(d.useEffect(()=>S,[S]),d.useEffect(()=>{if(t!==null)return window.addEventListener("scroll",M,!0),window.addEventListener("resize",M),()=>{window.removeEventListener("scroll",M,!0),window.removeEventListener("resize",M)}},[t,M]),d.useEffect(()=>{if(!A)return;const b=l=>{l.key==="Escape"&&(l.stopPropagation(),M())};return document.addEventListener("keydown",b,!0),()=>document.removeEventListener("keydown",b,!0)},[A,M]),_===null)return{anchor:{},tip:null};const L=b=>{const l=b.getBoundingClientRect();o({top:l.bottom,left:l.left,above:window.innerHeight-l.bottom<We,anchorTop:l.top})};return{anchor:{"data-tooltip":_,onPointerEnter:b=>{S(),L(b.currentTarget),r(!0)},onPointerLeave:P,onPointerDown:()=>{k.current=!0,M()},onPointerUp:()=>{k.current=!1},onFocus:b=>{k.current||(L(b.currentTarget),a(!0))},onBlur:()=>{a(!1),!n&&!i&&o(null)}},tip:A?Me.createPortal(v.jsx(Fe,{ref:m,at:t,text:_,onPress:()=>{g.current=!0,y(!0)},onPointerEnter:()=>{S(),c(!0)},onPointerLeave:P}),document.body):null}}const Fe=d.forwardRef(function({at:t,text:o,onPress:n,onPointerEnter:r,onPointerLeave:s},a){const i=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return v.jsx(Xe,{ref:a,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),n()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...i,left:t.left,"--tip-left":`${t.left}px`},children:o})});function R(e,t){return(...o)=>{typeof e=="function"&&e(...o),t?.(...o)}}function Tn({text:e,children:t,focusable:o=!1,announce:n=!0}){const{anchor:r,tip:s}=Ve(e);if(e==null||e==="")return t;const a=t.props,i=a["aria-label"],c=!n||typeof i=="string"&&se(i).includes(se(e));return v.jsxs(v.Fragment,{children:[d.cloneElement(t,{"data-tooltip":e,onPointerEnter:R(a.onPointerEnter,r.onPointerEnter),onPointerLeave:R(a.onPointerLeave,r.onPointerLeave),onPointerDown:R(a.onPointerDown,r.onPointerDown),onPointerUp:R(a.onPointerUp,r.onPointerUp),onFocus:R(a.onFocus,r.onFocus),onBlur:R(a.onBlur,r.onBlur),"aria-description":c?a["aria-description"]:e,tabIndex:o?a.tabIndex??0:a.tabIndex}),s,o&&v.jsx(Ue,{})]})}const Ue=_e`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Xe=x.div`
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
  user-select: text;
  cursor: text;

  &[data-above] {
    margin-top: 0;
    margin-bottom: var(--offset-popover);
  }
`,Cn="max(0.075em, 1.25px)",N={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},qe=x.span`
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
 */const he=(...e)=>e.filter((t,o,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,n)=>n?n.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=e=>{const t=Ke(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Je=d.createContext({}),Ze=()=>d.useContext(Je),Qe=d.forwardRef(({color:e,size:t,strokeWidth:o,absoluteStrokeWidth:n,className:r="",children:s,iconNode:a,...i},c)=>{const{size:h=24,strokeWidth:y=2,absoluteStrokeWidth:m=!1,color:g="currentColor",className:k=""}=Ze()??{},w=n??m?Number(o??y)*24/Number(t??h):o??y;return d.createElement("svg",{ref:c,...Y,width:t??h??Y.width,height:t??h??Y.height,stroke:e??g,strokeWidth:w,className:he("lucide",k,r),...!s&&!Ye(i)&&{"aria-hidden":"true"},...i},[...a.map(([_,A])=>d.createElement(_,A)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(e,t)=>{const o=d.forwardRef(({className:n,...r},s)=>d.createElement(Qe,{ref:s,iconNode:t,className:he(`lucide-${Ge(ie(e))}`,`lucide-${e}`,n),...r}));return o.displayName=ie(e),o};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],tt=u("arrow-down",et);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],nt=u("arrow-left",ot);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],at=u("arrow-right",rt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],it=u("arrow-up-to-line",st);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],lt=u("arrow-up",ct);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],ut=u("bell",dt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ht=u("check",ft);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],vt=u("chevron-down",pt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],yt=u("chevron-left",mt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],kt=u("chevron-right",gt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],xt=u("chevron-up",bt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],_t=u("columns-2",wt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],$t=u("computer",Mt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],Lt=u("corner-down-left",St);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],It=u("database",At);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],zt=u("file-text",Et);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ct=u("heart",Tt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Pt=u("history",Nt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],jt=u("house",Rt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Ot=u("info",Ht);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],Wt=u("joystick",Dt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Vt=u("layers",Bt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ut=u("lock",Ft);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],qt=u("maximize",Xt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],Kt=u("microscope",Gt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],Jt=u("minimize",Yt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Qt=u("pause",Zt);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],to=u("pencil",eo);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],no=u("play",oo);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ao=u("plus",ro);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],io=u("radio",so);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],lo=u("rectangle-horizontal",co);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],fo=u("rectangle-vertical",uo);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],po=u("rows-2",ho);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],mo=u("satellite",vo);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],go=u("settings",yo);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],bo=u("square",ko);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],wo=u("star",xo);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Mo=u("undo-2",_o);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],So=u("volume-2",$o);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Ao=u("volume-x",Lo);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Eo=u("x",Io),zo={size:"var(--icon-size-control)",strokeWidth:1.8,"aria-hidden":!0};function f(e,t){const o=d.forwardRef(({label:n,...r},s)=>{const a=n?{role:"img","aria-label":n,"aria-hidden":!1}:{};return v.jsx(e,{...zo,...t,...a,...r,ref:s})});return o.displayName=e.displayName??e.name,o}const Nn=f(Wt),Pn=f(Pt),Rn=f(jt),jn=f(Ot),Hn=f(Ut),On=f(io),Dn=f(So),Wn=f(Ao),Bn=f(ut),Vn=f(Vt),Fn=f(go),Un=f(mo),Xn=f(qt),qn=f(Jt),Gn=f(It),Kn=f($t),Yn=f(zt),Jn=f(ao,{strokeWidth:2.4}),Zn=f(Eo),Qn=f(to),er=f(ht),tr=f(wo),or=f(Ct),nr=f(Kt),rr=f(no),ar=f(Qt),sr=f(bo),ir=f(xt),cr=f(vt),lr=f(yt),dr=f(kt),ur=f(nt),fr=f(lt),hr=f(at),pr=f(tt),vr=f(it),mr=f(Mo),yr=f(_t),gr=f(lo),kr=f(po),br=f(fo),xr=f(Lt);function To(e){if(e===void 0)return null;const{value:t}=Ae(e.magnitude,e.unit);return t===Z?null:t}function pe(e,t){const o=To(t);return o===null?e:`${e}, as of ${o}`}const ve="modelled to SCET";function wr(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function ce(e){return X(e.value)||D(e.value)?{shown:e.value,held:!1,mark:null,isStatic:X(e.value),isDeterministic:D(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:pe(ee(e.grade),e.asOfUt)}}function _r(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:X(e),isDeterministic:D(e),caption:null,band:null};const o=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!D(e.value)){const n=e.reckoning.modelled;if(e.state==="held"){const s=ce(e),a=e.value===void 0,i=s.held||a,c=s.caption??(a?"":null);return{...s,shown:n,held:i,mark:i?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:o}}const r=e.reckoning.beyondReceived;return{shown:n,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?ve:null,band:o}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:X(e.value),isDeterministic:D(e.value),caption:null,band:o}:e.state==="held"?{...ce(e),band:o}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Mr(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function Co(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:ve}:null;if(e.state==="held"){const o=pe(ee(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${o}, modelled`}:{kind:"held",caption:o}}return null}function $r(e){return e===void 0?null:typeof e!="string"?Co(e):{kind:"held",caption:ee(e)}}function No(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function Sr(e,t){const o=No(t);return o===void 0?e:{state:"held",value:e,grade:o,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}const Po={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},Ro={center:"center",start:"flex-start",baseline:"baseline"},Lr=d.forwardRef(function({justify:t="between",align:o="center",gap:n,wrap:r=!1,children:s,...a},i){return v.jsx(jo,{ref:i,$justify:t,$align:o,$gap:n,$wrap:r,...a,children:s})}),jo=x.div`
  display: flex;
  align-items: ${({$align:e})=>Ro[e]};
  justify-content: ${({$justify:e})=>Po[e]};
  gap: ${({$gap:e})=>e?F[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function Ar({children:e,"aria-label":t,visuallyHidden:o=!1,additionsOnly:n=!1,assertive:r=!1,as:s="span",className:a}){const c={role:o?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":n?"false":"true","aria-label":t,className:a,"data-live-region":""};return o?v.jsx(qe,{as:s,...c,children:e}):d.createElement(s,c,e)}const Ho=.72,Oo=.76;function Ir({size:e,kind:t="held",figureSize:o}){return v.jsx("tspan",{dy:o===void 0?-e*.55:-(o*Ho-e*Oo),fontSize:e,fill:N[t].color,"data-held-mark":"","data-reckoning-mark":t,children:N[t].glyph})}function Er({end:e,x1:t,y1:o,x2:n,y2:r}){return v.jsx("line",{"data-bound":e,x1:t,y1:o,x2:n,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function zr(e,t){return t===null?e:`${e}, ${t}`}function Tr(e){return e===null?{}:{"data-currency-in-name":""}}function Cr({x:e,y:t,size:o,children:n}){return v.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:o,fill:"var(--color-text-muted)",children:n})}function j(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((o,n)=>j(o,t[n]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const o=[...t];return[...e].every(n=>{const r=o.findIndex(s=>j(n,s));return r===-1?!1:(o.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[o,n]of e)if(!t.has(o)||!j(n,t.get(o)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const o=e,n=t,r=new Set;for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of r)if(!j(o[s],n[s]))return!1;return!0}return!1}function Do(e,t,o,n){const[r,s]=d.useState(n),a=d.useRef(t);a.current=t;const i=d.useRef(o);i.current=o;const c=d.useRef(r);return c.current=r,d.useEffect(()=>{if(!e)return;let h=c.current;const y=()=>{const k=a.current(e);i.current(h,k)||(h=k,s(k))};y(),e.addEventListener("scroll",y,{passive:!0});const m=new ResizeObserver(y);m.observe(e);for(const k of Array.from(e.children))m.observe(k);const g=new MutationObserver(()=>{for(const k of Array.from(e.children))m.observe(k);y()});return g.observe(e,{childList:!0,subtree:!0}),()=>{e.removeEventListener("scroll",y),m.disconnect(),g.disconnect()}},[e]),r}function Wo(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function Nr(e){return Do(e,Wo,Object.is,!1)?0:void 0}const Bo={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function Pr({cols:e,minColWidth:t,fit:o=!1,gap:n="related-dense",rowGap:r,align:s="center",children:a,...i}){return v.jsx(Vo,{$cols:e,$minColWidth:t,$fit:o,$gap:n,$rowGap:r,$align:s,...i,children:a})}const Vo=x.div`
  display: grid;
  align-items: ${({$align:e})=>Bo[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${F[t]} ${F[e]}`:F[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:o})=>e||(t?`repeat(${o?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,Fo={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function Rr(e){return Fo[e]}const Uo=d.createContext(null);function Xo(e,t){const o=d.useContext(Uo),n=o?.setFooter,r=o?.setDirty;d.useEffect(()=>(n?.(e),()=>n?.(null)),[n,e]),d.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function jr(e){const{onSave:t,value:o,saved:n,saveLabel:r="Save",extra:s,disabled:a}=e,i=d.useRef(null);i.current===null&&(i.current={v:o});const c=!j(o,i.current.v)&&!j(o,n),h=d.useRef(t);h.current=t;const y=d.useMemo(()=>v.jsxs(v.Fragment,{children:[s,v.jsx(ze,{variant:"primary",type:"button",onClick:()=>h.current(),disabled:a,children:r})]}),[s,a,r]);Xo(y,c)}const Hr=$`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,me=.89,ne=.45;function qo({kind:e,x:t,y:o,scale:n=1,ghost:r=!1}){const s=N[e],a=s.canvasRadius*n,i={fill:s.color,opacity:r?ne:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const h=a*me;return v.jsx("rect",{x:t-h,y:o-h,width:2*h,height:2*h,...i})}const c=`${t},${o-a} ${t+a},${o+a*.8} ${t-a},${o+a*.8}`;return v.jsx("polygon",{points:c,...i})}function ye(e,t,o){return getComputedStyle(e).getPropertyValue(t).trim()||o}function le(e,t,o,n,r,{ghost:s=!1,scale:a=1}={}){const i=N[o],c=i.canvasRadius*a;if(t.save(),t.globalAlpha=s?ne:1,t.fillStyle=ye(e,i.cssVar,i.fallback),t.beginPath(),o==="held"){const h=c*me;t.rect(n-h,r-h,2*h,2*h)}else t.moveTo(n,r-c),t.lineTo(n+c,r+c*.8),t.lineTo(n-c,r+c*.8),t.closePath();t.fill(),t.restore()}function Or(e,t,{held:o,modelled:n},r={}){o!==void 0&&n!==void 0&&(t.save(),t.globalAlpha=ne,t.strokeStyle=ye(e,N.modelled.cssVar,N.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(n.x,n.y),t.stroke(),t.restore()),o!==void 0&&le(e,t,"held",o.x,o.y,{...r,ghost:n!==void 0}),n!==void 0&&le(e,t,"modelled",n.x,n.y,r)}const q=14,T=5,z=6.2,Go=10,de=12,I=6,W=8,V=4.5,Q=4,Ko=12,Yo=190,Jo=80;function O(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function Zo(e,t,o,n){const r=n??e,s=r.x1-r.x0,a=e.y1-e.y0,i=s>=Yo&&a>=Jo,c=i||n!==void 0,h=i||n?o:o.filter(l=>!l.detail),y=s-I*2-T*2-W-Q,m=n!==void 0,g=Math.floor(y/z),k=l=>O(l.value??Z,g-(l.currency?l.currency.length+2:0)),w=l=>{const p=l.value??Z;if(m)return O(l.label,g);if(i)return`${l.label}  ${p}`;const C=Math.floor((y-p.length*z)/z)-1-(l.modelled?2:0),B=O(l.label,Math.min(C,Ko));if(B!=="")return`${B} ${p}`;const H=Math.floor(y/z)-(l.modelled?2:0);return O(p,H)},_=l=>(i||m)&&l.currency?l.currency:"",A=l=>_(l)?Go+_(l).length*z+(l.modelled?de:0):l.modelled?de:0,S=i?0:W+Q,M=Math.floor((s-I*2-T*2)/z),P=Math.max(...h.map(l=>m?S+Math.max(w(l).length*z,k(l).length*z+A(l)):S+w(l).length*z+A(l)),c?Math.min(t.length,M)*z:0),L=c?1:0,b=(h.length*(m?2:1)+L)*q+T*2;return{full:i,named:c,headingChars:M,stacked:m,rows:h,text:w,valueText:k,currencyText:_,cardW:m?s:Math.min(P+T*2,s-I*2),cardH:b,headRows:L,fits:b<=a-I*2}}function Qo(e,t,o,n,r){const s=(a,i)=>a>=t&&a<=t+n&&i>=o&&i<=o+r;for(let a=1;a<e.cx.length;a++){const[i,c,h,y]=[e.cx[a-1],e.cy[a-1],e.cx[a],e.cy[a]];if(![i,c,h,y].every(Number.isFinite))continue;const m=Math.max(1,Math.ceil(Math.hypot(h-i,y-c)/q));for(let g=0;g<=m;g++)if(s(i+(h-i)*g/m,c+(y-c)*g/m))return!0}return!1}function ge({x:e,plot:t,heading:o,rows:n,column:r,traces:s=[]}){const a=Zo(t,o,n,r),{rows:i,cardW:c,cardH:h,fits:y}=a,m=t.y0+I,g=i.flatMap(l=>l.y===void 0||l.y===null?[]:[l.y]),k=(l,p)=>g.every(C=>e+V<l||e-V>l+c||C+V<p||C-V>p+h),w=t.x1-e-I,_=w>=c||w>=e-t.x0,A=l=>Math.max(t.x0+I,Math.min(t.x1-I-c,l)),S=_?[e+I,e-I-c]:[e-I-c,e+I],M=[m,t.y1-I-h].flatMap(l=>S.map(p=>({cardX:A(p),cardY:l}))),P=(l,p)=>s.every(C=>!Qo(C,l,p,c,h)),L=M.find(l=>k(l.cardX,l.cardY)&&P(l.cardX,l.cardY))??M.find(l=>k(l.cardX,l.cardY)),b=y?r?{cardX:r.x0,cardY:r.y0+I}:L:void 0;return{layout:a,place:b}}function Dr(e){return ge(e).place!==void 0}function Wr({x:e,plot:t,heading:o,rows:n,column:r,traces:s}){const{layout:a,place:i}=ge({x:e,plot:t,heading:o,rows:n,column:r,traces:s}),{full:c,named:h,headingChars:y,stacked:m,rows:g,text:k,valueText:w,currencyText:_,cardW:A,cardH:S,headRows:M}=a,P=i!==void 0,L=i?.cardX??0,b=i?.cardY??0,l=p=>p+T+(c?0:W+Q);return v.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[v.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),g.map(p=>p.y===void 0||p.y===null?null:v.jsx("circle",{cx:e,cy:p.y,r:3.5,fill:p.color,stroke:"var(--color-text-primary)",strokeWidth:1},p.id)),P&&v.jsxs("g",{"data-plot-crosshair-card":"",children:[v.jsx("rect",{x:L,y:b,width:A,height:S,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),h&&v.jsx("text",{x:L+T,y:b+T+10,fill:"var(--color-text-muted)",fontSize:10,children:O(o,y)}),g.map((p,C)=>{const B=m?2:1,H=b+T+(C*B+M)*q+10,K=H+(m?q:0);return v.jsxs("g",{"data-plot-crosshair-row":p.id,children:[!c&&v.jsx("rect",{x:L+T,y:H-8,width:W,height:W,fill:p.color,"data-plot-crosshair-swatch":""}),v.jsx("text",{x:l(L),y:H,fill:p.value===null||m?"var(--color-text-faint)":p.color,fontSize:10,style:{whiteSpace:"pre"},children:k(p)}),m&&v.jsx("text",{x:l(L),y:K,fill:p.value===null?"var(--color-text-faint)":p.color,fontSize:10,style:{whiteSpace:"pre"},children:w(p)}),p.modelled&&v.jsx(qo,{kind:"modelled",x:L+A-T-_(p).length*z-(_(p)?8:4),y:K-3}),_(p)&&v.jsx("text",{x:L+A-T,y:K,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:_(p)})]},p.id)})]})]})}const en=480,tn=110,on=112,nn=260,rn=.4,an=300;function Br({width:e,height:t,contentWidth:o}){const n=Math.max(on,Math.ceil(o));return e<en||t<tn||n>Math.min(nn,e*rn)||e-n<an?{placement:"overlay"}:{placement:"beside",columnWidth:n}}const J=.86,ue=[[0,-1.15],[1.05,.8],[-1.05,.8]],fe=.3,E={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:J,triangle:ue,outlineWidth:fe,keylineWidth:.2,reach:Math.max(Math.hypot(J,J),...ue.map(([e,t])=>Math.hypot(e,t)))+fe/2},sn={"aria-hidden":!0};function ke(e,t,o,n){const r=E.squareHalf;return(e==="modelled"?E.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([a,i])=>[t+a*n,o+i*n])}const be=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function xe(e,t,o){const n=e==="current"?0:E.outlineWidth;return t*(n+2*o*E.keylineWidth)}function Vr({x:e,y:t,r:o,state:n="current",keyline:r=!1}){const s=n==="current"?"":ke(n,0,0,o).map(([a,i])=>`${a},${i}`).join(" ");return v.jsxs("g",{"data-vessel-mark":n,transform:`translate(${e} ${t})`,...sn,children:[r&&be.map(({ring:a,color:i,widths:c})=>{const h={"data-vessel-keyline":a,fill:"none",stroke:i,strokeWidth:xe(n,o,c),strokeLinejoin:"round"};return n==="current"?v.jsx("circle",{r:o,...h},a):v.jsx("polygon",{points:s,...h},a)}),n==="current"?v.jsx("circle",{r:o,fill:E.color}):v.jsx("polygon",{points:s,fill:n==="lost"?"none":N[n].color,stroke:n==="lost"?E.lost.color:E.color,strokeWidth:o*E.outlineWidth,strokeLinejoin:"round"})]})}function U(e,t,o){return getComputedStyle(e).getPropertyValue(t).trim()||o}function we(e,t,o,n,r){if(e.beginPath(),t==="current"){e.arc(o,n,r,0,Math.PI*2);return}ke(t,o,n,r).forEach(([s,a],i)=>{i===0?e.moveTo(s,a):e.lineTo(s,a)}),e.closePath()}function cn(e,t,o,n,r){e.save(),e.lineJoin="round";for(const{color:s,widths:a}of be)we(e,t,o,n,r),e.strokeStyle=s,e.lineWidth=xe(t,r,a),e.stroke();e.restore()}function ln(e,t,o,n,r,s=4,{keyline:a=!1}={}){a&&cn(t,o,n,r,s);const i=U(e,E.cssVar,E.fallback);if(t.save(),we(t,o,n,r,s),o==="current")t.fillStyle=i,t.fill();else{if(o!=="lost"){const c=N[o];t.fillStyle=U(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=o==="lost"?U(e,E.lost.cssVar,E.lost.fallback):i,t.lineWidth=s*E.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function Fr(e,t,o,n=4,r={}){const{held:s,modelled:a}=o;s!==void 0&&a!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=U(e,N.modelled.cssVar,N.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(a.x,a.y),t.stroke(),t.restore());for(const i of["lost","held","current","modelled"]){const c=o[i];c!==void 0&&ln(e,t,i,c.x,c.y,n,r)}}export{Uo as $,ur as A,Bn as B,er as C,Gn as D,kn as E,Mn as F,En as G,kr as H,wn as I,Nn as J,Fn as K,Vn as L,nr as M,tr as N,sr as O,ar as P,zn as Q,mr as R,Un as S,xn as T,j as U,qe as V,gn as W,Xo as X,jr as Y,Ar as Z,Nr as _,hr as a,Hr as a0,bn as a1,Lr as a2,Tn as a3,G as a4,_r as a5,Mr as a6,Rr as a7,pr as a8,lr as a9,Ve as aA,Cn as aB,Tr as aC,ve as aD,Do as aE,Oe as aF,Er as aG,Cr as aH,Kn as aa,Pr as ab,Rn as ac,jn as ad,Ir as ae,Hn as af,Wn as ag,Wr as ah,N as ai,qo as aj,xr as ak,Dn as al,E as am,Vr as an,Co as ao,Sr as ap,No as aq,$r as ar,wr as as,Or as at,le as au,ln as av,Fr as aw,Br as ax,Dr as ay,zr as az,fr as b,On as c,ze as d,cr as e,dr as f,ir as g,Zn as h,_n as i,Yn as j,Ln as k,Sn as l,$n as m,An as n,br as o,gr as p,Xn as q,qn as r,yr as s,or as t,Pn as u,In as v,Qn as w,rr as x,Jn as y,vr as z};
