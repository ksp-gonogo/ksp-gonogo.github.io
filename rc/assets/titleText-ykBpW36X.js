import{j as u}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import U,{css as Z,createGlobalStyle as Xo}from"./ext-styled-components-Br73TgY3.js";import{r as b,R as Le}from"./ext-react-RRA14VTW.js";import{g as gn,e as Yo,d as Un,T as Kn,i as Ge,o as Wo,N as Fe,G as pe}from"./streamStatusWord-tv2-QViF.js";import{cr as Qt,cw as me}from"./view-clock-formula-DivmsORm.js";import"./ksp-enum-names-BUxIZR14.js";import"./screen-BrSuIKG_.js";import{r as Bo}from"./ext-react-dom-CZVBhjGL.js";const Qc={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function tl({children:t,layout:e="inline",...n}){return u.jsx(Vo,{$layout:e,...n,children:t})}const Go={inline:Z``,fill:Z`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},Vo=U.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:t})=>Go[t]}
`,ke=Z`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,el=Z`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,Uo=120,Ko=120,mn=t=>t.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function qn(t){const[e,n]=b.useState(null),[o,a]=b.useState(!1),[r,s]=b.useState(!1),[i,l]=b.useState(!1),[d,h]=b.useState(!1),p=b.useRef(null),g=b.useRef(!1),m=b.useRef(!1),k=b.useRef(null),M=t!=null&&t!==""?t:null,_=e!==null&&(o||r||i||d),j=b.useCallback(()=>{k.current!==null&&clearTimeout(k.current),k.current=null},[]),y=b.useCallback(()=>{j(),n(null),a(!1),s(!1),l(!1),h(!1),g.current=!1},[j]);b.useEffect(()=>{if(!d)return;const T=()=>{const E=document.getSelection(),Q=E!==null&&!E.isCollapsed&&p.current?.contains(E.anchorNode)===!0;!g.current&&!Q&&h(!1)},v=()=>{g.current=!1,T()};return document.addEventListener("pointerup",v),document.addEventListener("selectionchange",T),()=>{document.removeEventListener("pointerup",v),document.removeEventListener("selectionchange",T)}},[d]);const R=b.useCallback(()=>{j(),k.current=setTimeout(()=>{k.current=null,a(!1),l(!1)},Ko)},[j]);if(b.useEffect(()=>j,[j]),b.useEffect(()=>{if(e!==null)return window.addEventListener("scroll",y,!0),window.addEventListener("resize",y),()=>{window.removeEventListener("scroll",y,!0),window.removeEventListener("resize",y)}},[e,y]),b.useEffect(()=>{if(!_)return;const T=v=>{v.key==="Escape"&&(v.stopPropagation(),y())};return document.addEventListener("keydown",T,!0),()=>document.removeEventListener("keydown",T,!0)},[_,y]),M===null)return{anchor:{},tip:null};const O=T=>{const v=T.getBoundingClientRect();n({top:v.bottom,left:v.left,above:window.innerHeight-v.bottom<Uo,anchorTop:v.top})};return{anchor:{"data-tooltip":M,onPointerEnter:T=>{j(),O(T.currentTarget),a(!0)},onPointerLeave:R,onPointerDown:()=>{m.current=!0,y()},onPointerUp:()=>{m.current=!1},onFocus:T=>{m.current||(O(T.currentTarget),s(!0))},onBlur:()=>{s(!1),!o&&!i&&n(null)}},tip:_?Bo.createPortal(u.jsx(qo,{ref:p,at:e,text:M,onPress:()=>{g.current=!0,h(!0)},onPointerEnter:()=>{j(),l(!0)},onPointerLeave:R}),document.body):null}}const qo=b.forwardRef(function({at:e,text:n,onPress:o,onPointerEnter:a,onPointerLeave:r},s){const i=e.above?{bottom:window.innerHeight-e.anchorTop}:{top:e.top};return u.jsx(Jo,{ref:s,"aria-hidden":"true","data-tooltip-tip":"","data-above":e.above?"":void 0,onPointerEnter:a,onPointerLeave:r,onPointerDown:l=>{l.stopPropagation(),o()},onPointerUp:l=>l.stopPropagation(),onClick:l=>l.stopPropagation(),style:{...i,left:e.left,"--tip-left":`${e.left}px`},children:n})});function Pt(t,e){return(...n)=>{typeof t=="function"&&t(...n),e?.(...n)}}function Zn({text:t,children:e,focusable:n=!1,announce:o=!0}){const{anchor:a,tip:r}=qn(t);if(t==null||t==="")return e;const s=e.props,i=s["aria-label"],l=!o||typeof i=="string"&&mn(i).includes(mn(t));return u.jsxs(u.Fragment,{children:[b.cloneElement(e,{"data-tooltip":t,onPointerEnter:Pt(s.onPointerEnter,a.onPointerEnter),onPointerLeave:Pt(s.onPointerLeave,a.onPointerLeave),onPointerDown:Pt(s.onPointerDown,a.onPointerDown),onPointerUp:Pt(s.onPointerUp,a.onPointerUp),onFocus:Pt(s.onFocus,a.onFocus),onBlur:Pt(s.onBlur,a.onBlur),"aria-description":l?s["aria-description"]:t,tabIndex:n?s.tabIndex??0:s.tabIndex}),r,n&&u.jsx(Zo,{})]})}const Zo=Xo`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Jo=U.div`
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
`;function Jn(t){let e="";return b.Children.forEach(t,n=>{if(typeof n=="string"||typeof n=="number"){e+=String(n);return}b.isValidElement(n)&&(e+=Jn(n.props.children))}),e.replace(/\s+/g," ").trim()}function Qn({label:t,children:e,disabledReason:n}){return Qo({label:t,children:e,disabledReason:n})}function Qo({label:t,children:e,disabledReason:n}){const o=t!==void 0&&t!==""&&t!==Jn(e)?t:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function to(t,e){return t===!0&&e!==void 0&&e!==""}function eo(t){t.preventDefault(),t.stopPropagation()}function no(t,e,n){return e===null||t.props["data-tooltip"]!==void 0?t:u.jsx(Zn,{text:e,announce:n,children:t})}const Ve="max(0.075em, 1.25px)",J={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},ye=U.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,ze=J.held.domSize,De=J.modelled.domSize,tr=Z`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${ze} + 0.14em);
  }
`,er=Z`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${De} + 0.14em);
  }
`;function nr(t){return Z`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${J[t].hollowDomSize} + 0.14em);
    }
  `}function or(t,e=!1){return e?nr(t):t==="current"?null:t==="modelled"?er:tr}const rr=U.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${ze};
  height: ${ze};
  background: ${J.held.color};
`,ar=U.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${De};
  height: ${De};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${J.modelled.color};
`,Ue=t=>Z`
  position: absolute;
  right: 0;
  top: 0;
  width: ${J[t].hollowDomSize};
  height: ${J[t].hollowDomSize};
`,sr=U.span`
  ${Ue("current")}
  border: ${Ve} solid ${J.current.color};
  border-radius: var(--radius-circle);
`,ir=U.span`
  ${Ue("held")}
  border: ${Ve} solid ${J.held.color};
`,cr=U.span`
  ${Ue("modelled")}
  --stroke: ${Ve};
  background: ${J.modelled.color};
  clip-path: polygon(
    50% 0,
    100% 100%,
    0 100%,
    50% 0,
    50% calc(var(--stroke) * 2.4),
    calc(var(--stroke) * 1.9) calc(100% - var(--stroke)),
    calc(100% - var(--stroke) * 1.9) calc(100% - var(--stroke)),
    50% calc(var(--stroke) * 2.4)
  );
`,lr={current:sr,held:ir,modelled:cr};function dr({kind:t,elsewhere:e=!1}){if(t==="current"&&!e)return null;const n=e?lr[t]:t==="modelled"?ar:rr;return u.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":t,"data-elsewhere":e?"":void 0})}const ur=U.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:t,$elsewhere:e})=>or(t??"held",e)}
`;function hr({caption:t,kind:e="held",elsewhere:n=!1,children:o,...a}){const{anchor:r,tip:s}=qn(t);return u.jsxs(ur,{$kind:e,$elsewhere:n,...a,...r,children:[o,u.jsx(dr,{kind:e,elsewhere:n}),t!==null&&u.jsxs(ye,{"data-unit-currency":"",children:[", ",t]}),s]})}const fr=b.forwardRef(function({variant:e="default",tone:n,size:o="md",pressed:a,predictedOutcome:r,disabledReason:s,marked:i,type:l="button",...d},h){const p=to(d.disabled,s),g=Qn({label:d["aria-label"],children:d.children,disabledReason:p?s:void 0}),{disabled:m,onClick:k,children:M,..._}=d;return no(u.jsx(kr,{ref:h,$variant:e,$tone:n??(e==="primary"?"go":"neutral"),$size:o,$pressed:a===!0,"aria-pressed":a,"data-predicted":r,..._,disabled:p?void 0:m,...p?{"aria-disabled":!0}:{},onClick:p?eo:k,type:l,children:i?u.jsx(hr,{kind:i.kind,caption:i.caption,children:M}):M}),g,p)});function pr(t){return t==="neutral"?"go":t}const Ke=t=>Z`
  background: ${gn[t]};
  border-color: ${gn[t]};
  color: ${Yo[t]};
`,xr=t=>Z`
  border-color: ${Un[t]};
  color: ${Kn[t]};
`,yn={default:Z`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:Z`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},gr=Z`
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
`,mr=Z`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function yr(t,e){return t==="text"?gr:t==="primary"?Ke(e):e==="neutral"?yn[t]:Z`
    ${yn[t]}
    ${xr(e)}
  `}const vr=Z`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,br={sm:Z`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:Z`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},kr=U.button`
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

  ${({$size:t})=>br[t]}
  ${({$variant:t,$tone:e})=>yr(t,e)}
  ${({$pressed:t,$tone:e})=>t?Ke(pr(e)):""}

  ${({$variant:t,$pressed:e})=>t==="primary"||t==="text"||e?"":vr}
  ${ke}
  &:disabled,
  &[aria-disabled="true"] {
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
    padding: ${({$size:t})=>t==="sm"?"var(--inset-control-small-touch)":"var(--inset-control-touch)"};
  }

  ${({$variant:t})=>t==="text"?mr:""}
`,nl=U.button`
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
  ${ke}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Mr=U.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-faint);
  font-size: var(--font-size-base);
  line-height: var(--line-height-flush);
  padding: var(--inset-glyph-button);
  transition: color var(--duration-fast);

  @media (hover: hover) {
    &:hover:not([aria-disabled="true"]) {
      color: var(--color-text-primary);
    }
  }
  &[aria-pressed="true"] {
    border-radius: var(--radius-regular);
    ${Ke("go")}
  }
  ${ke}
  &:disabled,
  &[aria-disabled="true"] {
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
`,ol=b.forwardRef(function({pressed:e,disabledReason:n,...o},a){const r=to(o.disabled,n),s=Qn({label:o["aria-label"],children:o.children,disabledReason:r?n:void 0}),{disabled:i,onClick:l,...d}=o;return no(u.jsx(Mr,{ref:a,"aria-pressed":e,...d,disabled:r?void 0:i,...r?{"aria-disabled":!0}:{},onClick:r?eo:l}),s,r)}),rl=U.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:t})=>t?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:t})=>t?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,al=U.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,sl=U.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,il=U.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,cl=U.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,ll=U.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,qe=Z`
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

  ${ke}

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
`,dl=U.input`
  ${qe}
  width: 100%;
`,ul=U.select`
  ${qe}
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
`,hl=U.textarea`
  ${qe}
  width: 100%;
  resize: vertical;
`;/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=(...t)=>t.filter((e,n,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=t=>{const e=_r(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ie={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Ar=b.createContext({}),Er=()=>b.useContext(Ar),Sr=b.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:o,className:a="",children:r,iconNode:s,...i},l)=>{const{size:d=24,strokeWidth:h=2,absoluteStrokeWidth:p=!1,color:g="currentColor",className:m=""}=Er()??{},k=o??p?Number(n??h)*24/Number(e??d):n??h;return b.createElement("svg",{ref:l,...Ie,width:e??d??Ie.width,height:e??d??Ie.height,stroke:t??g,strokeWidth:k,className:oo("lucide",m,a),...!r&&!$r(i)&&{"aria-hidden":"true"},...i},[...s.map(([M,_])=>b.createElement(M,_)),...Array.isArray(r)?r:[r]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(t,e)=>{const n=b.forwardRef(({className:o,...a},r)=>b.createElement(Sr,{ref:r,iconNode:e,className:oo(`lucide-${wr(vn(t))}`,`lucide-${t}`,o),...a}));return n.displayName=vn(t),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Ir=L("arrow-down",Lr);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Tr=L("arrow-left",jr);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Pr=L("arrow-right",Nr);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Rr=L("arrow-up-to-line",Cr);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Hr=L("arrow-up",Or);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],zr=L("bell",Fr);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Xr=L("check",Dr);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Wr=L("chevron-down",Yr);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Gr=L("chevron-left",Br);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ur=L("chevron-right",Vr);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],qr=L("chevron-up",Kr);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],Jr=L("columns-2",Zr);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],ta=L("computer",Qr);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],na=L("corner-down-left",ea);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ra=L("database",oa);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],sa=L("file-text",aa);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],ca=L("heart",ia);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],da=L("history",la);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],ha=L("house",ua);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],pa=L("info",fa);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],ga=L("joystick",xa);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ya=L("layers",ma);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ba=L("lock",va);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Ma=L("maximize",ka);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],_a=L("microscope",wa);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],Aa=L("minimize",$a);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Sa=L("pause",Ea);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Ia=L("pencil",La);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ta=L("play",ja);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Pa=L("plus",Na);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Ra=L("radio",Ca);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Ha=L("rectangle-horizontal",Oa);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],za=L("rectangle-vertical",Fa);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],Xa=L("rows-2",Da);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],Wa=L("satellite",Ya);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ga=L("settings",Ba);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Ua=L("square",Va);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],qa=L("star",Ka);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Ja=L("undo-2",Za);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],ts=L("volume-2",Qa);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],ns=L("volume-x",es);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],rs=L("x",os),as={size:"var(--icon-size-control)",strokeWidth:1.8,"aria-hidden":!0};function I(t,e){const n=b.forwardRef(({label:o,...a},r)=>{const s=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return u.jsx(t,{...as,...e,...s,...a,ref:r})});return n.displayName=t.displayName??t.name,n}const fl=I(ga),pl=I(da),xl=I(ha),gl=I(pa),ml=I(ba),yl=I(Ra),vl=I(ts),bl=I(ns),kl=I(zr),Ml=I(ya),wl=I(Ga),_l=I(Wa),$l=I(Ma),Al=I(Aa),El=I(ra),Sl=I(ta),Ll=I(sa),Il=I(Pa,{strokeWidth:2.4}),jl=I(rs),Tl=I(Ia),Nl=I(Xr),Pl=I(qa),Cl=I(ca),Rl=I(_a),Ol=I(Ta),Hl=I(Sa),Fl=I(Ua),zl=I(qr),Dl=I(Wr),Xl=I(Gr),Yl=I(Ur),Wl=I(Tr),Bl=I(Hr),Gl=I(Pr),Vl=I(Ir),Ul=I(Rr),Kl=I(Ja),ql=I(Jr),Zl=I(Ha),Jl=I(Xa),Ql=I(za),td=I(na);function ss(t){if(t===void 0)return null;const{value:e}=Wo(t.magnitude,t.unit);return e===Fe?null:e}function ro(t,e){const n=ss(e);return n===null?t:`${t}, as of ${n}`}const ao="modelled to SCET";function ed(t){if(!(t==null||t.state!=="observed")&&t.value!==void 0&&t.reckoning.status==="available"&&t.reckoning.beyondReceived)return t.reckoning.modelled}function bn(t){return me(t.value)||Qt(t.value)?{shown:t.value,held:!1,mark:null,isStatic:me(t.value),isDeterministic:Qt(t.value),caption:null}:{shown:t.value,held:t.value!==void 0,mark:t.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:t.value===void 0?null:ro(Ge(t.grade),t.asOfUt)}}function is(t,e={}){if(typeof t!="object"||t===null||!("state"in t))return{shown:t,held:!1,mark:null,isStatic:me(t),isDeterministic:Qt(t),caption:null,band:null};const n=t.reckoning.status==="available"?t.reckoning.band??null:null;if(e.drawsReckoning&&t.reckoning.status==="available"&&(t.state==="observed"||t.state==="held")&&!Qt(t.value)){const o=t.reckoning.modelled;if(t.state==="held"){const r=bn(t),s=t.value===void 0,i=r.held||s,l=r.caption??(s?"":null);return{...r,shown:o,held:i,mark:i?"modelled":null,caption:l===null?null:l===""?"modelled":`${l}, modelled`,band:n}}const a=t.reckoning.beyondReceived;return{shown:o,held:a,mark:a?"modelled":null,isStatic:!1,isDeterministic:!1,caption:a?ao:null,band:n}}return t.state==="observed"?{shown:t.value,held:!1,mark:null,isStatic:me(t.value),isDeterministic:Qt(t.value),caption:null,band:n}:t.state==="held"?{...bn(t),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function nd(t){return{"data-figure":t.shown==null?void 0:t.isStatic?"static":t.isDeterministic?"deterministic":"","data-held":t.held?"":void 0,"data-reckoned":t.held?t.mark??"held":void 0}}function cs(t,e=!1){if(t==null)return null;if(t.state==="observed")return e||t.reckoning.status==="available"&&t.reckoning.beyondReceived?{kind:"modelled",caption:ao}:null;if(t.state==="held"){const n=ro(Ge(t.grade),t.asOfUt);return e||t.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function od(t){return t===void 0?null:typeof t!="string"?cs(t):{kind:"held",caption:Ge(t)}}function ls(t){if(t!==void 0)return typeof t=="string"?t:t.state==="held"?t.grade??"held":void 0}function rd(t,e){const n=ls(e);return n===void 0?t:{state:"held",value:t,grade:n,asOfUt:typeof e=="object"?e.asOfUt:void 0,reckoning:{status:"none"}}}const ds={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},us={center:"center",start:"flex-start",baseline:"baseline"},ad=b.forwardRef(function({justify:e="between",align:n="center",gap:o,wrap:a=!1,children:r,...s},i){return u.jsx(hs,{ref:i,$justify:e,$align:n,$gap:o,$wrap:a,...s,children:r})}),hs=U.div`
  display: flex;
  align-items: ${({$align:t})=>us[t]};
  justify-content: ${({$justify:t})=>ds[t]};
  gap: ${({$gap:t})=>t?pe[t]:"var(--gap-related)"};
  ${({$wrap:t})=>t?"flex-wrap: wrap;":""}
  min-width: 0;
`;function sd({children:t,"aria-label":e,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:a=!1,as:r="span",className:s}){const l={role:n?void 0:a?"alert":"status","aria-live":a?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":e,className:s,"data-live-region":""};return n?u.jsx(ye,{as:r,...l,children:t}):b.createElement(r,l,t)}const fs=.72,ps=.76;function xs({size:t,kind:e="held",figureSize:n}){return u.jsx("tspan",{dy:n===void 0?-t*.55:-(n*fs-t*ps),fontSize:t,fill:J[e].color,"data-held-mark":"","data-reckoning-mark":e,children:J[e].glyph})}function id({end:t,x1:e,y1:n,x2:o,y2:a}){return u.jsx("line",{"data-bound":t,x1:e,y1:n,x2:o,y2:a,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function gs(t,e){return e===null?t:`${t}, ${e}`}function cd(t){return t===null?{}:{"data-currency-in-name":""}}function ld({x:t,y:e,size:n,children:o}){return u.jsx("text",{x:t,y:e,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function Ft(t,e){if(t===e)return!0;if(t===null||e===null)return t===e;if(Array.isArray(t)||Array.isArray(e))return!Array.isArray(t)||!Array.isArray(e)||t.length!==e.length?!1:t.every((n,o)=>Ft(n,e[o]));if(t instanceof Date||e instanceof Date)return t instanceof Date&&e instanceof Date&&Object.is(t.getTime(),e.getTime());if(t instanceof Set||e instanceof Set){if(!(t instanceof Set)||!(e instanceof Set)||t.size!==e.size)return!1;const n=[...e];return[...t].every(o=>{const a=n.findIndex(r=>Ft(o,r));return a===-1?!1:(n.splice(a,1),!0)})}if(t instanceof Map||e instanceof Map){if(!(t instanceof Map)||!(e instanceof Map)||t.size!==e.size)return!1;for(const[n,o]of t)if(!e.has(n)||!Ft(o,e.get(n)))return!1;return!0}if(typeof t=="object"&&typeof e=="object"){const n=t,o=e,a=new Set;for(const r of Object.keys(n))n[r]!==void 0&&a.add(r);for(const r of Object.keys(o))o[r]!==void 0&&a.add(r);for(const r of a)if(!Ft(n[r],o[r]))return!1;return!0}return!1}function ms(t,e,n,o){const[a,r]=b.useState(o),s=b.useRef(e);s.current=e;const i=b.useRef(n);i.current=n;const l=b.useRef(a);return l.current=a,b.useEffect(()=>{if(!t)return;let d=l.current;const h=()=>{const m=s.current(t);i.current(d,m)||(d=m,r(m))};h(),t.addEventListener("scroll",h,{passive:!0});const p=new ResizeObserver(h);p.observe(t);for(const m of Array.from(t.children))p.observe(m);const g=new MutationObserver(()=>{for(const m of Array.from(t.children))p.observe(m);h()});return g.observe(t,{childList:!0,subtree:!0}),()=>{t.removeEventListener("scroll",h),p.disconnect(),g.disconnect()}},[t]),a}function ys(t){return t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth}function dd(t){return ms(t,ys,Object.is,!1)?0:void 0}const vs={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function ud({cols:t,minColWidth:e,fit:n=!1,gap:o="related-dense",rowGap:a,align:r="center",children:s,...i}){return u.jsx(bs,{$cols:t,$minColWidth:e,$fit:n,$gap:o,$rowGap:a,$align:r,...i,children:s})}const bs=U.div`
  display: grid;
  align-items: ${({$align:t})=>vs[t]};
  gap: ${({$gap:t,$rowGap:e})=>e?`${pe[e]} ${pe[t]}`:pe[t]};
  grid-template-columns: ${({$cols:t,$minColWidth:e,$fit:n})=>t||(e?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${e}, 100%), 1fr))`:"1fr")};
`,so=.89,Ze=.45;function io({kind:t,x:e,y:n,scale:o=1,ghost:a=!1}){const r=J[t],s=r.canvasRadius*o,i={fill:r.color,opacity:a?Ze:void 0,"data-reckoning-mark":t,"aria-hidden":!0};if(t==="held"){const d=s*so;return u.jsx("rect",{x:e-d,y:n-d,width:2*d,height:2*d,...i})}const l=`${e},${n-s} ${e+s},${n+s*.8} ${e-s},${n+s*.8}`;return u.jsx("polygon",{points:l,...i})}function co(t,e,n){return getComputedStyle(t).getPropertyValue(e).trim()||n}function kn(t,e,n,o,a,{ghost:r=!1,scale:s=1}={}){const i=J[n],l=i.canvasRadius*s;if(e.save(),e.globalAlpha=r?Ze:1,e.fillStyle=co(t,i.cssVar,i.fallback),e.beginPath(),n==="held"){const d=l*so;e.rect(o-d,a-d,2*d,2*d)}else e.moveTo(o,a-l),e.lineTo(o+l,a+l*.8),e.lineTo(o-l,a+l*.8),e.closePath();e.fill(),e.restore()}function hd(t,e,{held:n,modelled:o},a={}){n!==void 0&&o!==void 0&&(e.save(),e.globalAlpha=Ze,e.strokeStyle=co(t,J.modelled.cssVar,J.modelled.fallback),e.lineWidth=1,e.setLineDash([2,3]),e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(o.x,o.y),e.stroke(),e.restore()),n!==void 0&&kn(t,e,"held",n.x,n.y,{...a,ghost:o!==void 0}),o!==void 0&&kn(t,e,"modelled",o.x,o.y,a)}const ve=14,ft=5,ht=6.2,ks=10,Mn=12,it=6,te=8,le=4.5,Xe=4,Ms=12,ws=190,_s=80;function Jt(t,e){return e<1?"":t.length<=e?t:`${t.slice(0,Math.max(1,e-1))}…`}function $s(t,e,n,o){const a=o??t,r=a.x1-a.x0,s=t.y1-t.y0,i=r>=ws&&s>=_s,l=i||o!==void 0,d=i||o?n:n.filter(v=>!v.detail),h=r-it*2-ft*2-te-Xe,p=o!==void 0,g=Math.floor(h/ht),m=v=>Jt(v.value??Fe,g-(v.currency?v.currency.length+2:0)),k=v=>{const E=v.value??Fe;if(p)return Jt(v.label,g);if(i)return`${v.label}  ${E}`;const Q=Math.floor((h-E.length*ht)/ht)-1-(v.modelled?2:0),at=Jt(v.label,Math.min(Q,Ms));if(at!=="")return`${at} ${E}`;const C=Math.floor(h/ht)-(v.modelled?2:0);return Jt(E,C)},M=v=>(i||p)&&v.currency?v.currency:"",_=v=>M(v)?ks+M(v).length*ht+(v.modelled?Mn:0):v.modelled?Mn:0,j=i?0:te+Xe,y=Math.floor((r-it*2-ft*2)/ht),R=Math.max(...d.map(v=>p?j+Math.max(k(v).length*ht,m(v).length*ht+_(v)):j+k(v).length*ht+_(v)),l?Math.min(e.length,y)*ht:0),O=l?1:0,T=(d.length*(p?2:1)+O)*ve+ft*2;return{full:i,named:l,headingChars:y,stacked:p,rows:d,text:k,valueText:m,currencyText:M,cardW:p?r:Math.min(R+ft*2,r-it*2),cardH:T,headRows:O,fits:T<=s-it*2}}function As(t,e,n,o,a){const r=(s,i)=>s>=e&&s<=e+o&&i>=n&&i<=n+a;for(let s=1;s<t.cx.length;s++){const[i,l,d,h]=[t.cx[s-1],t.cy[s-1],t.cx[s],t.cy[s]];if(![i,l,d,h].every(Number.isFinite))continue;const p=Math.max(1,Math.ceil(Math.hypot(d-i,h-l)/ve));for(let g=0;g<=p;g++)if(r(i+(d-i)*g/p,l+(h-l)*g/p))return!0}return!1}function Je({x:t,plot:e,heading:n,rows:o,column:a,traces:r=[]}){const s=$s(e,n,o,a),{rows:i,cardW:l,cardH:d,fits:h}=s,p=e.y0+it,g=i.flatMap(v=>v.y===void 0||v.y===null?[]:[v.y]),m=(v,E)=>g.every(Q=>t+le<v||t-le>v+l||Q+le<E||Q-le>E+d),k=e.x1-t-it,M=k>=l||k>=t-e.x0,_=v=>Math.max(e.x0+it,Math.min(e.x1-it-l,v)),j=M?[t+it,t-it-l]:[t-it-l,t+it],y=[p,e.y1-it-d].flatMap(v=>j.map(E=>({cardX:_(E),cardY:v}))),R=(v,E)=>r.every(Q=>!As(Q,v,E,l,d)),O=y.find(v=>m(v.cardX,v.cardY)&&R(v.cardX,v.cardY))??y.find(v=>m(v.cardX,v.cardY)),T=h?a?{cardX:a.x0,cardY:a.y0+it}:O:void 0;return{layout:s,place:T}}function Es(t){return Je(t).place!==void 0}function Ss(t){const{layout:e,place:n}=Je(t);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+e.cardW,y1:n.cardY+e.cardH}}function Ls({x:t,plot:e,heading:n,rows:o,column:a,traces:r}){const{layout:s,place:i}=Je({x:t,plot:e,heading:n,rows:o,column:a,traces:r}),{full:l,named:d,headingChars:h,stacked:p,rows:g,text:m,valueText:k,currencyText:M,cardW:_,cardH:j,headRows:y}=s,R=i!==void 0,O=i?.cardX??0,T=i?.cardY??0,v=E=>E+ft+(l?0:te+Xe);return u.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[u.jsx("line",{x1:t,y1:e.y0,x2:t,y2:e.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),g.map(E=>E.y===void 0||E.y===null?null:u.jsx("circle",{cx:t,cy:E.y,r:3.5,fill:E.color,stroke:"var(--color-text-primary)",strokeWidth:1},E.id)),R&&u.jsxs("g",{"data-plot-crosshair-card":"",children:[u.jsx("rect",{x:O,y:T,width:_,height:j,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),d&&u.jsx("text",{x:O+ft,y:T+ft+10,fill:"var(--color-text-muted)",fontSize:10,children:Jt(n,h)}),g.map((E,Q)=>{const at=p?2:1,C=T+ft+(Q*at+y)*ve+10,Y=C+(p?ve:0);return u.jsxs("g",{"data-plot-crosshair-row":E.id,children:[!l&&u.jsx("rect",{x:O+ft,y:C-8,width:te,height:te,fill:E.color,"data-plot-crosshair-swatch":""}),u.jsx("text",{x:v(O),y:C,fill:E.value===null||p?"var(--color-text-faint)":E.color,fontSize:10,style:{whiteSpace:"pre"},children:m(E)}),p&&u.jsx("text",{x:v(O),y:Y,fill:E.value===null?"var(--color-text-faint)":E.color,fontSize:10,style:{whiteSpace:"pre"},children:k(E)}),E.modelled&&u.jsx(io,{kind:"modelled",x:O+_-ft-M(E).length*ht-(M(E)?8:4),y:Y-3}),M(E)&&u.jsx("text",{x:O+_-ft,y:Y,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:M(E)})]},E.id)})]})]})}const Is=480,js=110,Ts=112,Ns=260,Ps=.4,Cs=300;function Rs({width:t,height:e,contentWidth:n}){const o=Math.max(Ts,Math.ceil(n));return t<Is||e<js||o>Math.min(Ns,t*Ps)||t-o<Cs?{placement:"overlay"}:{placement:"beside",columnWidth:o}}const Os={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function Hs(t){return Os[t]}const Ct=4,de=3,Ye=6;function Fs(t,e){return t.x0<e.x1&&t.x1>e.x0&&t.y0<e.y1&&t.y1>e.y0}function zs(t,e){const n=(o,a)=>o>=e.x0&&o<=e.x1&&a>=e.y0&&a<=e.y1;if(t.cx.length===1)return Number.isFinite(t.cx[0])&&n(t.cx[0],t.cy[0]);for(let o=1;o<t.cx.length;o++){const[a,r,s,i]=[t.cx[o-1],t.cy[o-1],t.cx[o],t.cy[o]];if(![a,r,s,i].every(Number.isFinite))continue;const l=Math.max(1,Math.ceil(Math.hypot(s-a,i-r)/Ye));for(let d=0;d<=l;d++)if(n(a+(s-a)*d/l,r+(i-r)*d/l))return!0}return!1}function Ds({plot:t,card:e,traces:n,obstacles:o}){if(e.width<=0||e.height<=0||e.width>t.x1-t.x0-Ct*2||e.height>t.y1-t.y0-Ct*2)return;const a=t.x0+Ct,r=t.x1-Ct-e.width,s=t.y0+Ct,i=t.y1-Ct-e.height;return[{x:r,y:s},{x:a,y:i},{x:r,y:i},{x:a,y:s}].find(d=>{const h={x0:d.x-de,y0:d.y-de,x1:d.x+e.width+de,y1:d.y+e.height+de};return!n.some(p=>zs(p,h))&&!o.some(p=>Fs(h,p))})}function Xs(t){const e=[],n=[];let o=!0;for(let a=t.y0;a<=t.y1+Ye;a+=Ye){const r=Math.min(a,t.y1);e.push(o?t.x0:t.x1,o?t.x1:t.x0),n.push(r,r),o=!o}return{cx:e,cy:n}}function Ys(t,e){return t?.includes(e)??!1}function wn(t,e){const{reckoned:n,spans:o}=t.data;return n?.some(a=>e>=a.from&&e<=a.to)?"modelled":o?.some(a=>e>=a.from&&e<=a.to&&a.status==="recorded")?"recorded":"measured"}function Ws(t){const{x:e,y:n,y2:o}=t.data;let a=!0;for(let s=0;s<e.length;s++)if(!Number.isFinite(e[s])||s>0&&e[s]<e[s-1]){a=!1;break}if(a)return t;const r=e.map((s,i)=>i).filter(s=>Number.isFinite(e[s])).sort((s,i)=>e[s]-e[i]||s-i);return{...t,data:{x:r.map(s=>e[s]),y:r.map(s=>n[s]),...o?{y2:r.map(s=>o[s])}:{}}}}function Bs(t,e,n){const o=t.data.x,a=t.data.y,r=Math.min(o.length,a.length);if(r===0||e<o[0]||e>o[r-1])return null;let s=0,i=r-1;for(;s<i;){const k=s+i>>1;o[k]<e?s=k+1:i=k}const l=s,d=Math.max(0,l-1);if(o[l]!==e&&l>0&&Ys(t.data.breaks,l))return null;const h=e-o[d]<=o[l]-e?d:l;if(n!==void 0&&Math.abs(o[h]-e)>n)return null;const p=o[l]-o[d];if(t.readBetween&&p>0&&o[l]!==e){const k=a[d]+(a[l]-a[d])*(e-o[d])/p;return Number.isFinite(k)?{index:h,x:e,y:k,currency:wn(t,h)}:null}const g=a[h];if(!Number.isFinite(g))return null;const m=t.data.y2?.[h];return{index:h,x:o[h],y:g,...m!==void 0&&Number.isFinite(m)?{y2:m}:{},currency:wn(t,h)}}function Gs(t){const e=new Set;for(const n of t)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&e.add(o);return[...e].sort((n,o)=>n-o)}function _n(t,e,n){if(t.length===0)return null;if(e===null)return t[t.length-1];let o=0,a=t.length-1;for(;o<a;){const s=o+a>>1;t[s]<e?o=s+1:a=s}let r=o+n;return t[o]!==e&&n>0&&(r-=1),t[Math.max(0,Math.min(t.length-1,r))]}function Vs({x:t,y:e,size:n,color:o,text:a}){const r=n/2,s=`M 0 ${-r} L ${r} ${r*.8} L ${-r} ${r*.8} Z`,i=`M -0.9 ${-r*.42} H 0.9 V ${r*.2} H -0.9 Z`,l=`M -0.9 ${r*.4} H 0.9 V ${r*.64} H -0.9 Z`;return u.jsx(Zn,{text:a,focusable:!0,children:u.jsxs("g",{role:"img","aria-label":a,"data-limit-crossing":"",transform:`translate(${t} ${e})`,children:[u.jsx("title",{}),u.jsx("circle",{r:12,fill:"transparent"}),u.jsx("path",{d:`${s} ${i} ${l}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),u.jsx("path",{d:s,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function lo(t,e,n){return n==="above"?t>=e:t<=e}function Us({y:t,cx:e,cy:n,limit:o,limitY:a,bad:r,breaks:s=[],step:i=!1,minGapPx:l}){const d=(_,j,y)=>{if(!j)return{index:_,x:e[_],y:n[_],entered:!1};if(y===null)return{index:_,x:e[_],y:a,entered:!0};const R=n[_]-n[y],O=R===0?1:(a-n[y])/R;return{index:_,x:e[y]+(e[_]-e[y])*O,y:a,entered:!0}},h=new Set(s),p=[];let g=null,m=!1,k=!1,M=Number.NEGATIVE_INFINITY;for(let _=0;_<t.length;_++){if(!Number.isFinite(t[_])){g=null;continue}const j=lo(t[_],o,r);if(j&&!k){const y=d(_,m,i||h.has(_)?null:g),R=p[p.length-1];R!==void 0&&y.x-M<l?R.spells++:p.push({...y,spells:1}),M=y.x}k=j,m=!0,g=_}return p}const Ks=1;function qs(t,e,n,o,a){const r=n.to;if(r<1||r>=t.length)return!1;const s=o(t[r-1]),i=o(t[r]),l=a(e[r-1]),d=a(e[r]);return i>s?n.t.some((h,p)=>{const g=o(h),m=l+(d-l)*(g-s)/(i-s);return Math.abs(a(n.v[p])-m)>Ks}):!1}function je(t,e,n,o){const a=e-t;if(a===0){const r=(n+o)/2;return()=>r}return r=>n+(r-t)/a*(o-n)}function We(t,e,n=5){if(t===e)return Array.from({length:n},()=>t);const a=(e-t)/(n-1),r=10**Math.floor(Math.log10(a)),i=([1,2,2.5,5,10].find(g=>g*r>=a)??10)*r,l=Math.ceil(t/i)*i,d=[];for(let g=0;d.length<n;g++){const m=l+g*i;if(m>e+i*.01)break;d.push(m)}if(d.length>=2)return d;const h=Math.floor(t/i)*i,p=Math.ceil(e/i)*i;return p>h?[h,p]:[h,h+i]}function uo(t,e){const n=Math.floor(t/1e3);if(e>=36e5){const r=Math.floor(n/3600),s=Math.floor(n%3600/60),i=n%60;return`${r}:${String(s).padStart(2,"0")}:${String(i).padStart(2,"0")}`}const o=Math.floor(n/60),a=n%60;return`${o}:${String(a).padStart(2,"0")}`}function $n(t,e,n,o,a=[]){if(t.length===0)return"";const r=[];for(let s=0;s<t.length;s++){const i=n(t[s]).toFixed(2),l=o(e[s]).toFixed(2),d=s===0||a.includes(s);r.push(`${d?"M":"L"}${i},${l}`),d&&Be(s,t.length,a)&&r.push(`L${i},${l}`)}return r.join(" ")}function Be(t,e,n){return t+1>=e||n.includes(t+1)}function Zs(t,e,n,o,a=[]){if(t.length===0)return"";const r=[];let s=o(e[0]).toFixed(2);const i=n(t[0]).toFixed(2);r.push(`M${i},${s}`),Be(0,t.length,a)&&r.push(`L${i},${s}`);for(let l=1;l<t.length;l++){const d=n(t[l]).toFixed(2),h=o(e[l]).toFixed(2);if(a.includes(l)){r.push(`M${d},${h}`),Be(l,t.length,a)&&r.push(`L${d},${h}`),s=h;continue}r.push(`H${d}`),h!==s&&r.push(`V${h}`),s=h}return r.join(" ")}function Js(t,e,n,o,a,r=[],s=[],i=[]){if(t.length===0)return[];if(s.length===0&&i.length===0)return[{d:a(t,e,n,o,r)}];function l(M,_){const j=new Array(t.length);for(const y of M){const R=Math.min(t.length-1,y.to);for(let O=Math.max(0,y.from);O<=R;O++)j[O]=_(y)}return j}const d=l(s,M=>M.status),h=l(i,M=>M.basis),p=new Set(r),g=[];let m=0;const k=(M,_)=>{const j=M>0&&!p.has(M)?M-1:M,y=T=>T.slice(j,_+1),R=[];for(const T of r)T>j&&T<=_&&R.push(T-j);const O=a(y(t),y(e),n,o,R);O!==""&&g.push({status:d[M],basis:h[M],d:O})};for(let M=1;M<=t.length;M++)(M===t.length||d[M]!==d[m]||h[M]!==h[m])&&(k(m,M-1),m=M);return g}function ho(t,e,n,o,a){if(t.length===0)return"";const r=Math.min(t.length,e.length,n.length);if(r===0)return"";const s=[];for(let i=0;i<r;i++){const l=o(t[i]).toFixed(2),d=a(n[i]).toFixed(2);s.push(`${i===0?"M":"L"}${l},${d}`)}for(let i=r-1;i>=0;i--){const l=o(t[i]).toFixed(2),d=a(e[i]).toFixed(2);s.push(`L${l},${d}`)}return s.push("Z"),s.join(" ")}function Qs(t,e,n,o){const a=[];for(const r of e){const{bandLo:s,bandHi:i,bandKind:l}=r;if(!s||!i||l===void 0)continue;const d=[];for(let p=r.from;p<=r.to&&p<t.length;p++)d.push(t[p]);const h=ho(d,s,i,n,o);h!==""&&a.push({d:h,kind:l})}return a}function An(t,e,n,o){if(t===e){const d=(n+o)/2;return()=>d}const a=t>0?t:1e-9,r=e>a?e:a*10,s=Math.log10(a),l=Math.log10(r)-s;if(l===0){const d=(n+o)/2;return()=>d}return d=>{const h=d>0?d:a;return n+(Math.log10(h)-s)/l*(o-n)}}function ti(t,e,n=5){if(!(t>0)||!(e>0)||e<=t)return We(t,e,n);const o=Math.log10(t),a=Math.log10(e);if(a-o<1)return We(t,e,n);const s=Math.ceil(o),i=Math.floor(a),l=Math.max(1,Math.ceil((i-s+1)/n)),d=[];for(let h=s;h<=i;h+=l)d.push(10**h);return d.length>0?d:[t,e]}const Te=.86,En=[[0,-1.15],[1.05,.8],[-1.05,.8]],Sn=.3,lt={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:Te,triangle:En,outlineWidth:Sn,keylineWidth:.2,reach:Math.max(Math.hypot(Te,Te),...En.map(([t,e])=>Math.hypot(t,e)))+Sn/2},ei={"aria-hidden":!0};function fo(t,e,n,o){const a=lt.squareHalf;return(t==="modelled"?lt.triangle:[[-a,-a],[a,-a],[a,a],[-a,a]]).map(([s,i])=>[e+s*o,n+i*o])}const po=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function xo(t,e,n){const o=t==="current"?0:lt.outlineWidth;return e*(o+2*n*lt.keylineWidth)}function ni({x:t,y:e,r:n,state:o="current",keyline:a=!1}){const r=o==="current"?"":fo(o,0,0,n).map(([s,i])=>`${s},${i}`).join(" ");return u.jsxs("g",{"data-vessel-mark":o,transform:`translate(${t} ${e})`,...ei,children:[a&&po.map(({ring:s,color:i,widths:l})=>{const d={"data-vessel-keyline":s,fill:"none",stroke:i,strokeWidth:xo(o,n,l),strokeLinejoin:"round"};return o==="current"?u.jsx("circle",{r:n,...d},s):u.jsx("polygon",{points:r,...d},s)}),o==="current"?u.jsx("circle",{r:n,fill:lt.color}):u.jsx("polygon",{points:r,fill:o==="lost"?"none":J[o].color,stroke:o==="lost"?lt.lost.color:lt.color,strokeWidth:n*lt.outlineWidth,strokeLinejoin:"round"})]})}function xe(t,e,n){return getComputedStyle(t).getPropertyValue(e).trim()||n}function go(t,e,n,o,a){if(t.beginPath(),e==="current"){t.arc(n,o,a,0,Math.PI*2);return}fo(e,n,o,a).forEach(([r,s],i)=>{i===0?t.moveTo(r,s):t.lineTo(r,s)}),t.closePath()}function oi(t,e,n,o,a){t.save(),t.lineJoin="round";for(const{color:r,widths:s}of po)go(t,e,n,o,a),t.strokeStyle=r,t.lineWidth=xo(e,a,s),t.stroke();t.restore()}function ri(t,e,n,o,a,r=4,{keyline:s=!1}={}){s&&oi(e,n,o,a,r);const i=xe(t,lt.cssVar,lt.fallback);if(e.save(),go(e,n,o,a,r),n==="current")e.fillStyle=i,e.fill();else{if(n!=="lost"){const l=J[n];e.fillStyle=xe(t,l.cssVar,l.fallback),e.fill()}e.strokeStyle=n==="lost"?xe(t,lt.lost.cssVar,lt.lost.fallback):i,e.lineWidth=r*lt.outlineWidth,e.lineJoin="round",e.stroke()}e.restore()}function fd(t,e,n,o=4,a={}){const{held:r,modelled:s}=n;r!==void 0&&s!==void 0&&(e.save(),e.globalAlpha=.45,e.strokeStyle=xe(t,J.modelled.cssVar,J.modelled.fallback),e.lineWidth=1,e.setLineDash([2,3]),e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(s.x,s.y),e.stroke(),e.restore());for(const i of["lost","held","current","modelled"]){const l=n[i];l!==void 0&&ri(t,e,i,l.x,l.y,o,a)}}const be=56;function mo(t,e,n,o){const a=Math.max(0,Math.min(e-1,Math.floor(n))),r=Math.max(0,Math.min(e-1,Math.floor(o))),s=Math.min(e-1,a+1),i=Math.min(e-1,r+1),l=Math.max(0,Math.min(1,n-a)),d=Math.max(0,Math.min(1,o-r)),h=t[r*e+a]+(t[r*e+s]-t[r*e+a])*l,p=t[i*e+a]+(t[i*e+s]-t[i*e+a])*l;return h+(p-h)*d}const Ln=400,ai=16,si=8,In=.06,ii=3.3,ci=.6,li=60,di=40,jn=[6,12],Tn=[48,96],ue=2;function Ne(t,e,n){const o=Math.max(0,Math.min(1,(n-t)/(e-t)));return o*o*(3-2*o)}function Nn(t,e){const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)}function Pn(t,e){const n=e/t,o=t<=e?.07:.09,a=ii**Math.exp(-((t-e)**2)/(2*o**2*e**2));return n**5*Math.exp(-1.25*n**4)*a}function yo(t,e,n){if(!(t>0)||!(e>0)||!(n>0)||!Number.isFinite(t+e+n))return[];const o=Math.sqrt(n*2*Math.PI/Ln),a=Pn(o,o),r=[];for(let s=-ue;s<=ai*ue;s++){const i=Ln/2**(s/ue),l=i/t,d=Ne(jn[0],jn[1],l)*(1-Ne(Tn[0],Tn[1],l))*(1-Ne(e,2*e,i));if(d<=.001)continue;const h=2*Math.PI/i,p=Math.sqrt(n*h),g=Math.sqrt(Math.min(1,Pn(p,o)/a)),m=(p>=o?In:In*g)/Math.sqrt(ue),k=(li+(Nn(s,1)-.5)*2*di)*Math.PI/180;r.push({kx:h*Math.sin(k),ky:h*Math.cos(k),k:h,amplitude:m/h,omega:p,phase:Nn(s,2)*2*Math.PI,weight:d})}return r.slice(0,si)}function ui(t,e,n,o){let a=0;for(const r of t)a+=r.weight*r.amplitude*Math.cos(r.kx*e+r.ky*n-r.omega*o+r.phase);return a}const ge=vo(-.25,.3,.92),hi=2.6,fi=vo(ge[0],ge[1],ge[2]+1),pi=.8,xi=3,gi=.95,mi=.35,yi=235,vi=.5,bi=.35;function vo(t,e,n){const o=Math.hypot(t,e,n);return[t/o,e/o,n/o]}function ki(t,e,n,o){const{east0:a,north0:r,dx:s,dy:i,seconds:l,colour:d,waves:h,isSea:p}=o,[g,m,k]=ge,[M,_,j]=fi,y=h.length,R=new Float64Array(y*e),O=new Float64Array(y*e),T=new Float64Array(y*n),v=new Float64Array(y*n);for(let S=0;S<y;S++){const K=h[S];for(let H=0;H<e;H++){const tt=K.kx*(a+(H+.5)*s);R[S*e+H]=Math.cos(tt),O[S*e+H]=Math.sin(tt)}for(let H=0;H<n;H++){const tt=K.ky*(r-(H+.5)*i)-K.omega*l+K.phase;T[S*n+H]=Math.cos(tt),v[S*n+H]=Math.sin(tt)}}const E=new Float64Array(y),Q=new Float64Array(y),at=h.map(S=>S.kx*S.weight*S.amplitude),C=h.map(S=>S.ky*S.weight*S.amplitude),Y=h.map(S=>ci*S.k*S.weight*S.amplitude);for(let S=0;S<n;S++)for(let K=0;K<e;K++){const H=(S*e+K)*4;if(p&&!p(K,S)){t[H+3]=0;continue}let tt=0,pt=0,dt=1;for(let F=0;F<y;F++){const et=R[F*e+K],Xt=O[F*e+K],Lt=T[F*n+S],gt=v[F*n+S];E[F]=et*Lt-Xt*gt,Q[F]=Xt*Lt+et*gt}for(let F=0;F<y;F++){const et=y>1?1+pi*E[(F+xi)%y]:1;tt-=at[F]*E[F]*et,pt-=C[F]*E[F]*et,dt-=Y[F]*Q[F]*et}const oe=1/Math.sqrt(tt*tt+pt*pt+dt*dt),_t=(tt*g+pt*m+dt*k)*oe-k,zt=1+hi*_t;let $t=0;const Dt=(tt*M+pt*_+dt*j)*oe;if(Dt>gi){let F=Dt;for(let et=0;et<7;et++)F*=F;$t=255*mi*F}const At=Math.max(0,zt-1)*bi,nt=Math.min(1,zt)*vi;t[H]=d.r*nt+(255-d.r*nt)*At+$t,t[H+1]=d.g*nt+(255-d.g*nt)*At+$t,t[H+2]=d.b*nt+(255-d.b*nt)*At+$t,t[H+3]=yi}}function Cn(t){const e=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*e(t.r)+.7152*e(t.g)+.0722*e(t.b)}function Mi(t,e){const n=Cn(e),o=Math.max(t.r,t.g,t.b,1),a=l=>({r:Math.min(255,t.r*l),g:Math.min(255,t.g*l),b:Math.min(255,t.b*l)});let r=0,s=255/o;for(let l=0;l<32;l++){const d=(r+s)/2;Cn(a(d))<n?r=d:s=d}const i=a((r+s)/2);return{r:Math.round(i.r),g:Math.round(i.g),b:Math.round(i.b)}}const wi=192,_i=30,$i="--color-info-mark",Ai=.42;function Ei(t,e){const n=t.view==="plan",o=e.scaleX,a=e.scaleYPrimary,r=1/(o(1)-o(0)),s=1/(a(1)-a(0)),i=j=>(j-o(0))*r,l=j=>(j-a(0))*s,d=Math.min(o(t.bounds.x0),o(t.bounds.x1)),h=Math.max(o(t.bounds.x0),o(t.bounds.x1)),p=Math.min(a(t.bounds.y0),a(t.bounds.y1)),g=Math.max(a(t.bounds.y0),a(t.bounds.y1)),m=n?d:Math.max(e.plotX0,d),k=n?h:Math.min(e.plotX1,h),M=n?p:Math.max(e.plotY0,p),_=n?g:Math.min(e.plotY1,g);return n&&(h<e.plotX0||d>e.plotX1||g<e.plotY0||p>e.plotY1)||!(k-m>=1&&_-M>=1)||!Number.isFinite(r+s)?null:{left:m,top:M,width:k-m,height:_-M,x0:i(m),x1:i(k),y0:l(_),y1:l(M)}}function Rn(t,e){if(!e)return null;t.fillStyle=e;const n=/^#([0-9a-f]{6})$/i.exec(String(t.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function Si(t,e,n){const o=Rn(e,getComputedStyle(t).getPropertyValue($i).trim());if(!o)return null;const a=n?Rn(e,n):null;return a?Mi(a,o):o}function Li(t,e,n,o,a,r){const s=be,i=(n.x1-n.x0)/s,l=(n.y1-n.y0)/s,d=e.sea,h=o.scaleYPrimary(e.bounds.y0)<o.scaleYPrimary(e.bounds.y1),p=d&&d.size>1&&d.heights.length>=d.size*d.size?(m,k)=>{const M=h?k:s-1-k;return mo(d.heights,d.size,m/(s-1)*(d.size-1),M/(s-1)*(d.size-1))<0}:void 0,g=t.createImageData(s,s);ki(g.data,s,s,{east0:e.origin.east+n.x0,north0:e.origin.north+n.y1,dx:i,dy:l,seconds:a,colour:r,waves:yo(Math.max(i,l),n.x1-n.x0,e.gravity),isSea:p}),t.putImageData(g,0,0)}function Ii(t,e,n,o,a){const{width:r,height:s}=t.canvas,i=ji(e,n,r),l=i.length>1?(i[i.length-1]-i[0])/(i.length-1):n.x1-n.x0,d=yo(l,n.x1-n.x0,e.gravity),h=(e.bearingDeg??90)*Math.PI/180,p=k=>(k-n.x0)/(n.x1-n.x0)*r,g=k=>(n.y1-k)/(n.y1-n.y0)*s;t.clearRect(0,0,r,s),t.beginPath(),i.forEach((k,M)=>{const _=ui(d,e.origin.east+k*Math.sin(h),e.origin.north+k*Math.cos(h),o);M===0?t.moveTo(p(k),g(_)):t.lineTo(p(k),g(_))});const m=`${a.r}, ${a.g}, ${a.b}`;t.strokeStyle=`rgba(${m}, 0.9)`,t.lineWidth=1,t.stroke(),t.lineTo(p(i[i.length-1]),s),t.lineTo(p(i[0]),s),t.closePath(),t.fillStyle=`rgba(${m}, ${Ai})`,t.fill()}function ji(t,e,n){const o=(t.samples??[]).filter(a=>a>e.x0&&a<e.x1);return t.samples&&t.samples.length>1?[e.x0,...o,e.x1]:Array.from({length:n+1},(a,r)=>e.x0+r/n*(e.x1-e.x0))}function Ti({layer:t,frame:e}){const n=Ei(t,e),o=b.useRef(null),a=b.useRef(null);a.current=n?{layer:t,at:n,frame:e}:null;const r=n?t.view==="plan"?be:Math.max(1,Math.min(wi,Math.round(n.width))):0,s=n?t.view==="plan"?be:Math.max(1,Math.round(n.height*r/n.width)):0,i=t.tint;return b.useEffect(()=>{const l=o.current,d=l?.getContext("2d")??null;if(!l||!d||r===0||s===0)return;const h=Si(l,d,i);if(!h)return;const p=()=>{const y=a.current;if(!y)return;const R=Date.now()/1e3;y.layer.view==="plan"?Li(d,y.layer,y.at,y.frame,R,h):Ii(d,y.layer,y.at,R,h)};if(p(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let m=!0;const k=typeof IntersectionObserver=="function"?new IntersectionObserver(y=>{m=y.some(R=>R.isIntersecting)}):null;k?.observe(l);let M=Number.NEGATIVE_INFINITY,_=0;const j=y=>{_=requestAnimationFrame(j),!(!m||document.hidden||y-M<1e3/_i)&&(M=y,p())};return _=requestAnimationFrame(j),()=>{cancelAnimationFrame(_),k?.disconnect()}},[r,s,i]),n?u.jsx("g",{"aria-hidden":"true","data-plot-layer":t.id,"data-plot-layer-kind":"water",children:u.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:u.jsx("canvas",{ref:o,width:r,height:s,style:{display:"block",width:"100%",height:"100%",imageRendering:t.view==="plan"?"pixelated":"auto"}})})}):null}const Ni={faint:.45,normal:.85,bright:1},Pi=1.5,Ci=5,Ri=.9,qt=7,Zt=6,On=10,ee=9,Rt=12,Oi=9,Hi=13,Fi=.1,Pe=5,zi=.5,Di=.5;function wt(t){return Un[t.tone??"neutral"]}function ne(t){return Kn[t.tone??"neutral"]}function xt(t){return Ni[t.emphasis??"normal"]}function vt(t,e){return e.axis==="secondary"?t.scaleYSecondary:t.scaleYPrimary}function Xi(t){const e=t.axis==="secondary"?"secondary":"primary";switch(t.kind){case"series":return{xs:t.points.map(n=>n.x),ys:t.points.map(n=>n.y),axis:e};case"region":return{xs:[...t.boundary,...t.boundaryHigh??[]].map(n=>n.x),ys:[...t.boundary,...t.boundaryHigh??[]].map(n=>n.y),axis:e};case"rule":return t.along==="y"?{xs:[],ys:[t.value],axis:e}:{xs:[t.value],ys:[],axis:e};case"marker":case"annotation":return{xs:[t.at.x],ys:[t.at.y],axis:e};default:return{xs:[],ys:[],axis:e}}}const Yi=5.8,Ot=11,Hn=4;function Wi(t,e){const n=e.text.length*Yi,{frame:o}=e,a=e.anchorX+e.gap,r=a+n<=o.plotX1-4?"start":"end",s=r==="start"?a:e.anchorX-e.gap,i=r==="start"?s:s-n,l=i+n,d=p=>t.some(g=>i<g.x1&&l>g.x0&&p-Ot<g.y1&&p+2>g.y0);let h=e.anchorY+3;for(let p=0;p<Hn&&d(h);p++)h+=Ot;if(d(h)){h=e.anchorY+3;for(let p=0;p<Hn&&d(h);p++)h-=Ot}return h=Math.min(Math.max(h,o.plotY0+Ot),o.plotY1-Ot),t.push({x0:i,x1:l,y0:h-Ot,y1:h+2}),{x:s,y:h,anchor:r}}function Bi(t){return t.map((e,n)=>`${n===0?"M":"L"}${e.x.toFixed(2)},${e.y.toFixed(2)}`).join(" ")}function Gi(t){if(t.length===0)return"";const e=[`M${t[0].x.toFixed(2)},${t[0].y.toFixed(2)}`];for(let n=1;n<t.length;n++)e.push(`H${t[n].x.toFixed(2)}`,`V${t[n].y.toFixed(2)}`);return e.join(" ")}function bo(t,e,n){if(t.length===0)return[];const o=t[0],a=t[t.length-1],r=[...t];if(e==="right"||e==="left"){const s=e==="right"?n.plotX1:n.plotX0;r.push({x:s,y:a.y},{x:s,y:o.y})}else{const s=e==="above"?n.plotY0:n.plotY1;r.push({x:a.x,y:s},{x:o.x,y:s})}return r}function Vi(t,e){const n=[];for(const o of t){if(o.kind==="relief"||o.kind==="water"){const s=vt(e,o),{x0:i,y0:l,x1:d,y1:h}=o.bounds;n.push([{x:e.scaleX(i),y:s(l)},{x:e.scaleX(d),y:s(l)},{x:e.scaleX(d),y:s(h)},{x:e.scaleX(i),y:s(h)}]);continue}if(o.kind!=="region"||o.hatched)continue;const a=vt(e,o),r=o.boundary.map(s=>({x:e.scaleX(s.x),y:a(s.y)}));if(!(r.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...r,...o.boundaryHigh.map(s=>({x:e.scaleX(s.x),y:a(s.y)})).reverse()])}else n.push(bo(r,o.side,e))}return(o,a)=>n.some(r=>{let s=!1;for(let i=0,l=r.length-1;i<r.length;l=i++){const d=r[i],h=r[l];d.y>a!=h.y>a&&o<(h.x-d.x)*(a-d.y)/(h.y-d.y)+d.x&&(s=!s)}return s})}function Ui({layer:t,frame:e}){if(t.stops.length===0)return null;const n=vt(e,t),o=t.along==="y"?e.plotY1-e.plotY0:e.plotX1-e.plotX0;if(o<=0)return null;const a=t.along==="y"?e.plotY0:e.plotX0,r=t.along==="y"?n:e.scaleX,s=t.maxOpacity??Di,i=t.tint??wt(t),l=`plot-field-${t.id}-${e.uid}`,d=`plot-field-blur-${t.id}-${e.uid}`,h=t.stops.map(p=>({offset:(r(p.at)-a)/o*100,intensity:Math.max(0,Math.min(1,p.intensity))})).sort((p,g)=>p.offset-g.offset);return u.jsxs(u.Fragment,{children:[u.jsxs("defs",{children:[u.jsx("linearGradient",{id:l,x1:"0%",y1:"0%",x2:t.along==="x"?"100%":"0%",y2:t.along==="y"?"100%":"0%",children:h.map((p,g)=>u.jsx("stop",{offset:`${p.offset.toFixed(2)}%`,stopColor:i,stopOpacity:s*p.intensity},g))}),t.blur!==void 0&&u.jsx("filter",{id:d,children:u.jsx("feGaussianBlur",{stdDeviation:t.blur})})]}),u.jsx("rect",{"data-plot-layer":t.id,"data-plot-layer-kind":"field",x:e.plotX0,y:e.plotY0,width:e.plotX1-e.plotX0,height:e.plotY1-e.plotY0,fill:`url(#${l})`,filter:t.blur!==void 0?`url(#${d})`:void 0})]})}const Ki=6,Ht=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function qi(t){const e=Math.max(0,Math.min(1,t));for(let n=1;n<Ht.length;n++)if(e<=Ht[n][0]){const[o,a]=Ht[n-1],[r,s]=Ht[n],i=r>o?(e-o)/(r-o):0;return[Math.round(a[0]+(s[0]-a[0])*i),Math.round(a[1]+(s[1]-a[1])*i),Math.round(a[2]+(s[2]-a[2])*i)]}return Ht[Ht.length-1][1]}const Zi=[150,156,160],Ji=[200,80,70];function Qi(t,e){if(e===3)return Zi;if(e!==1&&e!==2)return t;const n=.3*t[0]+.59*t[1]+.11*t[2],o=(r,s,i)=>r+(i-r)*s,a=t.map(r=>o(o(r,.5,n),.06,235));return e===1?a:a.map((r,s)=>o(r,.3,Ji[s]))}function tc(t,e){const n=2*(e-1),o=(t%n+n)%n;return o<e?o:n-o}function ec(t,e,n,o,a,r,s){const i=t[r*n+s],l=a?tc(i,o):i,[d,h,p]=Qi(qi(l/(o-1)),e[r*n+s]),g=s>0?t[r*n+s-1]:i,m=r>0?t[(r-1)*n+s]:i,k=g!==i||m!==i?.5:1;return`rgb(${Math.round(d*k)}, ${Math.round(h*k)}, ${Math.round(p*k)})`}function nc({layer:t,frame:e}){const{size:n,values:o,bounds:a}=t;if(n<2||o.length<n*n)return null;let r=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;for(let C=0;C<n*n;C++){const Y=o[C];if(!Number.isFinite(Y))return null;Y<r&&(r=Y),Y>s&&(s=Y)}const i=s-r,l=t.bandMetres!=null&&t.bandMetres>0?t.bandMetres:null,d=t.veil,h=Math.max(2,t.bands??Ki),p=vt(e,t),g=e.scaleX(a.x0),m=e.scaleX(a.x1),k=p(a.y0),M=p(a.y1),_=Math.min(g,m),j=Math.min(k,M),y=be,R=Math.abs(m-g)/y,O=Math.abs(M-k)/y;if(!(R>0)||!(O>0))return null;const T=k<M,v=new Int16Array(y*y),E=new Uint8Array(y*y),Q=d!=null&&d.length>=n*n;for(let C=0;C<y;C++)for(let Y=0;Y<y;Y++){const S=Y/(y-1)*(n-1),K=C/(y-1)*(n-1);Q&&(E[C*y+Y]=d[Math.round(K)*n+Math.round(S)]??0);const H=mo(o,n,S,K);if(l!=null){v[C*y+Y]=Math.floor(H/l);continue}const tt=i>0?(H-r)/i:.5;v[C*y+Y]=Math.max(0,Math.min(h-1,Math.floor(tt*h)))}const at=[];for(let C=0;C<y;C++){const Y=T?C:y-1-C;let S=0,K="";for(let H=0;H<=y;H++){const tt=H<y?ec(v,E,y,h,l!=null,C,H):"";if(H===0){K=tt;continue}tt===K&&H<y||(at.push(u.jsx("rect",{x:_+S*R,y:j+Y*O,width:(H-S)*R+.5,height:O+.5,fill:K},`${C}-${S}`)),S=H,K=tt)}}return u.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:xt(t),"aria-hidden":"true",children:at})}function oc({layer:t,frame:e}){const n=b.useId(),o=vt(e,t),a=d=>({x:e.scaleX(d.x),y:o(d.y)}),r=t.boundary.map(a);if(r.length<2)return null;const s=t.side==="between"?[...r,...(t.boundaryHigh??[]).map(a).reverse()]:bo(r,t.side,e);if(t.side==="between"&&!t.boundaryHigh)return null;const i=t.side==="right"?e.plotX1-4:t.side==="left"?e.plotX0+11:r[r.length-1].x,l=e.plotY1-34;return u.jsxs(u.Fragment,{children:[t.hatched&&u.jsx("defs",{children:u.jsx("pattern",{id:n,width:Pe,height:Pe,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:u.jsx("line",{x1:0,y1:0,x2:0,y2:Pe,stroke:wt(t),strokeWidth:1,strokeOpacity:t.opacity??zi})})}),u.jsx("polygon",{"data-plot-layer":t.id,"data-plot-layer-kind":"region","data-hatched":t.hatched?"":void 0,points:s.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:t.hatched?`url(#${n})`:wt(t),fillOpacity:t.hatched?void 0:t.opacity??Fi}),e.labels&&t.label&&u.jsx("text",{x:i,y:l,transform:`rotate(-90 ${i} ${l})`,fontSize:Oi,letterSpacing:"0.14em",fill:"var(--color-text-muted)",children:t.label})]})}function rc({layer:t,frame:e}){const n=vt(e,t),o=t.points.map(r=>({x:e.scaleX(r.x),y:n(r.y)}));if(o.length===0)return null;const a=Pi*(t.weight??1);return t.style==="scatter"?u.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",fill:wt(t),opacity:xt(t),children:o.map((r,s)=>u.jsx("circle",{cx:r.x,cy:r.y,r:a},s))}):u.jsx("path",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",d:t.style==="step"?Gi(o):Bi(o),fill:"none",stroke:wt(t),strokeOpacity:xt(t),strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:t.dashed?"5 3.5":void 0})}function ac({layer:t,frame:e}){const n=vt(e,t),o=t.dashed??!0,a=wt(t),r=t.along==="y",s=r?n(t.value):e.scaleX(t.value);return u.jsxs(u.Fragment,{children:[u.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"rule",x1:r?e.plotX0:s,x2:r?e.plotX1:s,y1:r?s:e.plotY0,y2:r?s:e.plotY1,stroke:a,strokeOpacity:xt(t),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),e.labels&&t.label&&u.jsx("text",{x:r?e.plotX1-4:s+3,y:r?s-3:e.plotY0+10,textAnchor:r?"end":"start",fill:ne(t),fontSize:ee,children:t.label})]})}function sc({layer:t,frame:e,placed:n}){const o=vt(e,t),a=e.scaleX(t.at.x),r=o(t.at.y),s=t.across??"x",i=wt(t),l=e.labels&&t.label?Wi(n,{anchorX:a,anchorY:r,gap:qt+3,text:t.label,frame:e}):null;return u.jsxs(u.Fragment,{children:[u.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"annotation",x1:s==="x"?a-qt:a,x2:s==="x"?a+qt:a,y1:s==="x"?r:r-qt,y2:s==="x"?r:r+qt,stroke:i,strokeOpacity:xt(t),strokeWidth:1.75,strokeLinecap:"round"}),l&&t.label&&u.jsx("text",{x:l.x,y:l.y,textAnchor:l.anchor,fontSize:ee,letterSpacing:"0.05em",fill:ne(t),fillOpacity:xt(t),children:t.label})]})}function ic({layer:t,frame:e}){const n=vt(e,t),o=e.scaleX(t.at.x),a=n(t.at.y)+(t.offsetPx??0),r=Ci*(t.scale??1),s=wt(t),i=t.shape??"dot",l={"data-plot-layer":t.id,"data-plot-layer-kind":"marker",opacity:xt(t)},d=i==="none"?null:i==="vessel"?u.jsx("g",{...l,children:u.jsx(ni,{state:t.markState??"current",x:o,y:a,r:r*Ri,keyline:!0})}):i==="dot"?u.jsx("circle",{...l,cx:o,cy:a,r,fill:s,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):i==="ring"?u.jsx("circle",{...l,cx:o,cy:a,r,fill:"none",stroke:s,strokeWidth:1.5}):i==="cross"?u.jsx("path",{...l,d:`M${o-r},${a} L${o+r},${a} M${o},${a-r} L${o},${a+r}`,stroke:s,strokeWidth:1.5,strokeLinecap:"round"}):i==="chevron-up"||i==="chevron-down"?u.jsx("polyline",{...l,points:i==="chevron-up"?`${o-r},${a+r*.5} ${o},${a-r*.5} ${o+r},${a+r*.5}`:`${o-r},${a-r*.5} ${o},${a+r*.5} ${o+r},${a-r*.5}`,fill:"none",stroke:s,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null;return u.jsxs(u.Fragment,{children:[d,e.labels&&t.label&&u.jsx("text",{x:i==="none"?o:o+r+3,y:a+3,textAnchor:i==="none"?"middle":void 0,fontSize:ee,fill:ne(t),fillOpacity:xt(t),children:t.label})]})}function cc({layer:t,frame:e,row:n,edges:o}){const a=t.caption?2:1;if(t.anchor==="left-edge"||t.anchor==="right-edge"){const g=t.anchor==="left-edge"?e.plotX0+Zt+n*Rt:e.plotX1-Zt-n*Rt,m=e.plotY1-34;return u.jsx("text",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",x:g,y:m,transform:`rotate(-90 ${g} ${m})`,fontSize:ee,letterSpacing:"0.14em",fill:ne(t),fillOpacity:xt(t),children:t.text})}const r=t.anchor.startsWith("top"),s=t.anchor.endsWith("right"),i=g=>Zt+(g?Hi:0),l=s?e.plotX1-i(o.right):e.plotX0+i(o.left),d=n*(a*Rt+2),h=r?e.plotY0+Zt+On+d:e.plotY1-Zt-d,p=h-Rt;return u.jsxs("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",textAnchor:s?"end":"start",children:[t.caption&&u.jsx("text",{x:l,y:r?h:p,fontSize:ee,letterSpacing:"0.05em",fill:"var(--color-text-faint)",children:t.caption}),u.jsx("text",{x:l,y:t.caption&&r?h+Rt:h,fontSize:On,fontWeight:700,fill:ne(t),fillOpacity:xt(t),children:t.text})]})}const Fn={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},lc={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function Ce({layers:t,frame:e,pass:n}){const o=t.map((i,l)=>({layer:i,index:l})).filter(({layer:i})=>lc[i.kind]===n).sort((i,l)=>Fn[i.layer.kind]-Fn[l.layer.kind]||(i.layer.z??0)-(l.layer.z??0)||i.index-l.index),a=new Map,r=[],s={left:t.some(i=>i.kind==="caption"&&i.anchor==="left-edge"||i.kind==="region"&&i.side==="left"&&!!i.label),right:t.some(i=>i.kind==="caption"&&i.anchor==="right-edge"||i.kind==="region"&&i.side==="right"&&!!i.label)};return u.jsx(u.Fragment,{children:o.map(({layer:i,index:l})=>{const d=`${i.id}-${l}`;switch(i.kind){case"relief":return u.jsx(nc,{layer:i,frame:e},d);case"water":return u.jsx(Ti,{layer:i,frame:e},d);case"field":return u.jsx(Ui,{layer:i,frame:e},d);case"region":return u.jsx(oc,{layer:i,frame:e},d);case"series":return u.jsx(rc,{layer:i,frame:e},d);case"rule":return u.jsx(ac,{layer:i,frame:e},d);case"annotation":return u.jsx(sc,{layer:i,frame:e,placed:r},d);case"marker":return u.jsx(ic,{layer:i,frame:e},d);case"caption":{const h=a.get(i.anchor)??0;return a.set(i.anchor,h+1),u.jsx(cc,{layer:i,frame:e,row:h,edges:s},d)}default:return null}})})}function dc(t){return t.map(e=>e.description).filter(e=>typeof e=="string"&&e.length>0)}const zn=11,he=3,fe=4,Dn=(t,e)=>t.x0<e.x1&&e.x0<t.x1&&t.y0<e.y1&&e.y0<t.y1;function uc(t,e,n,o,a){let r=0,s=1;const i=n-t,l=o-e,d=[[-i,t-a.x0],[i,a.x1-t],[-l,e-a.y0],[l,a.y1-e]];for(const[h,p]of d){if(h===0&&p<0)return!1;if(h!==0){const g=p/h;h<0?r=Math.max(r,g):s=Math.min(s,g)}}return r<=s}function hc(t,e){for(let n=1;n<t.cx.length;n++){const o=[t.cx[n-1],t.cy[n-1],t.cx[n],t.cy[n]];if(o.every(Number.isFinite)&&uc(o[0],o[1],o[2],o[3],e))return!0}return!1}function fc({labels:t,plot:e,obstacles:n,traces:o}){const a=[],r=new Map;for(const s of t){const i={y0:s.lineY-he-zn,y1:s.lineY-he},l={y0:s.lineY+he,y1:s.lineY+he+zn},d={x0:e.x1-fe-s.width,x1:e.x1-fe},h={x0:e.x0+fe,x1:e.x0+fe+s.width},p=[{...d,...i,anchor:"end"},{...d,...l,anchor:"end"},{...h,...i,anchor:"start"},{...h,...l,anchor:"start"}];let g=null;for(const m of p){if(!(m.x0>=e.x0&&m.x1<=e.x1&&m.y0>=e.y0&&m.y1<=e.y1)||a.some(_=>Dn(m,_)))continue;const M=2*n.filter(_=>Dn(m,_)).length+o.filter(_=>hc(_,m)).length;(g===null||M<g.cost)&&(g={spot:m,cost:M})}if(g===null){r.set(s.id,null);continue}a.push(g.spot),r.set(s.id,{x:g.spot.anchor==="end"?g.spot.x1:g.spot.x0,y:g.spot.y1-2,anchor:g.spot.anchor})}return r}const pc=4,xc=2.5;function gc(t,e){if(t.length===0)return!1;const n=t[t.length-1]-e;return n===0?!0:t.length===1?!1:Math.sign(t[0]-e)!==Math.sign(n)}function mc(t,e){return t==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:e?t==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const yc=(t,e)=>uo(t-e[0],e[1]-e[0]),pd=(t,e)=>uo((t-e[0])*1e3,(e[1]-e[0])*1e3),Re={top:10,bottom:28,left:50};function vc(t,e,n){const o=(r,s,i)=>Math.max(r,Math.min(i,s)),a=o(30,Math.round(t*.18),Re.left);return{top:Re.top,right:n?a:o(14,Math.round(t*.07),20),bottom:e<150?20:Re.bottom,left:a}}const Xn=t=>t.length*6.5+6,bc=4,kc=.4,Mc=26,St=14,Yn=4,wc=.03;function Oe(t,e){const n=Math.max(0,Math.floor(e/6));if(t.length<=n)return t;const o=t.lastIndexOf(" (");if(o>0&&t.length-o+4<=n){const a=n-(t.length-o)-3;return`${t.slice(0,a)}...${t.slice(o)}`}return n<4?"":`${t.slice(0,n-3)}...`}function _c(t,e,n,o,a=1){const r=[],s=Mc*Math.max(.5,Math.min(2,a));for(let i=t+s/2;i<e;i+=s)for(let l=n+s/2;l<o;l+=s)r.push({key:`sg-${Math.round(i)}-${Math.round(l)}`,x:i,y:l});return r}const $c=120,Ac=90,Ec=70,Sc=35,Lc=2,Ic=14,jc=10,He=36,Tc=12,Nc=8,Pc=2,Mt=14,ko=6,Mo=12,Wn=10,Cc=.2,Bn=.6,Gn="5 3",Rc=.15,Oc=.45,Hc="the value is inside the shaded region";function Fc(t){return(t.type??"line")==="band"&&t.data.y2?[...t.data.y,...t.data.y2]:t.data.y}function zc({series:t,thresholds:e,heading:n,crosshairOn:o,yTickFormat:a}){const r=i=>i*ko,s=[];for(const i of t)s.push(r(i.label.length)+8),o&&s.push(Math.max(r(i.label.length),r(Ic+jc))+He);for(const i of e){if(i.kind==="marker")continue;const l=i.label??a(i.value);s.push(r(l.length)+Mo+8),o&&s.push(Math.max(r(i.kind.length),r(l.length))+He)}return o&&s.push(Math.max(...n.map(i=>r(i.length)))+He),Math.max(0,...s)+Tc}function xd({series:t,xDomain:e,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:a=yc,yTickFormat:r=Dc,yScalePrimary:s="linear",yScaleSecondary:i="linear",thresholds:l,legend:d="overlay",hideXAxis:h=!1,spatial:p=!1,gridScale:g=1,layers:m,"aria-label":k,crosshair:M=!1,xKind:_="time",xReadFormat:j,xAxisLabel:y,yAxisLabel:R,ySecondaryAxisLabel:O,card:T,cardForms:v=1,width:E,height:Q}){const at=b.useId(),C=M&&!p&&t.some(c=>c.data.x.length>0),[Y,S]=b.useState(null),[K,H]=b.useState(!1),[tt,pt]=b.useState(""),[dt,oe]=b.useState(null),[_t,zt]=b.useState(0),[$t,Dt]=b.useState(null),At=T!=null,nt=$t?.form===_t?$t:null;b.useLayoutEffect(()=>{if(!dt){Dt(null);return}const c=()=>Dt(x=>{const $={w:dt.offsetWidth,h:dt.offsetHeight,form:_t};return x?.w===$.w&&x?.h===$.h&&x?.form===$.form?x:$});c();const f=new ResizeObserver(c);return f.observe(dt),()=>f.disconnect()},[dt,_t]),b.useLayoutEffect(()=>{E>=0&&Q>=0&&zt(0)},[E,Q]);const F=E,et=Q,Xt=t.filter(c=>c.axis==="primary"&&c.data.x.length>0),Lt=t.filter(c=>c.axis==="secondary"&&c.data.x.length>0),gt=Lt.length>0,Qe=!p&&!h&&!!y,tn=!p&&!!R,en=!p&&gt&&!!O,nn=p?{top:1,right:1,bottom:1,left:1}:vc(F,et,gt),It={...nn,bottom:nn.bottom+(Qe?St:0)},D=It.top,W=et-It.bottom,bt=W-D,re=b.useMemo(()=>{const c={primary:[],secondary:[]};for(const f of m??[]){const x=Xi(f);c[x.axis].push(...x.ys)}return c},[m]),jt=b.useMemo(()=>Vn(Xt,n,s,re.primary),[Xt,n,s,re]),Tt=b.useMemo(()=>Vn(Lt,o,i,re.secondary),[Lt,o,i,re]),ot=s==="log"?An(jt[0],jt[1],W,D):je(jt[0],jt[1],W,D),rt=i==="log"?An(Tt[0],Tt[1],W,D):je(Tt[0],Tt[1],W,D),on=Math.max(2,Math.min(7,Math.round(bt/Sc))),Me=(c,f,x,$)=>{const A=Math.min(c,f),N=Math.max(c,f),w=(N-A)*1e-6||1e-6,P=z=>z>=A-w&&z<=N+w,B=z=>$==="log"?ti(A,N,z):We(A,N,z);for(let z=x;z<=64;z*=2){const ct=B(z).filter(P);if(ct.length<2)continue;if(ct.length<=x)return ct;const Kt=(ct.length-1)/(x-1),ce=Array.from({length:x},(Wc,Do)=>ct[Math.round(Do*Kt)]);return Array.from(new Set(ce))}return[A,N]},ae=Me(jt[0],jt[1],on,s==="log"?"log":"linear"),se=gt?Me(Tt[0],Tt[1],on,i==="log"?"log":"linear"):[],rn=(c,f)=>c.length===0?f:Math.max(f,Math.min(Math.round(F*kc),Math.max(...c.map(x=>Xn(r(x,c))))+bc)),we=p?It:{left:rn(ae,It.left)+(tn?St:0),right:(gt?rn(se,It.right):It.right)+(en?St:0)},X=we.left,wo=C||d!=="none"&&t.length>0||(l??[]).some(c=>c.label),an=p||!wo?{placement:"overlay"}:Rs({width:F,height:et,contentWidth:zc({series:t,thresholds:l??[],heading:[e[0],e[1]].map(c=>a(c,e)),crosshairOn:C,yTickFormat:r})}),sn=an.placement==="beside"?an.columnWidth:0,V=F-we.right-sn,ut=V-X,Et=ut>=$c&&bt>=Ac,q=sn>0?{x0:V+(gt?we.right:0)+Nc,y0:D,x1:F-Pc,y1:W}:void 0,G=je(e[0],e[1],X,V),_o=Math.max(2,Math.min(8,Math.round(ut/Ec))),Yt=Me(e[0],e[1],_o,"linear"),$o=b.useMemo(()=>{const c=[],f=Yt.length-1;if(f<0)return c;const x=Xn,$=6,A=w=>{const P=Yt[w],B=a(P,e,Yt),z=G(P),ct=x(B),Kt=w===0?"start":w===f?"end":"middle",ce=Kt==="start"?z:Kt==="end"?z-ct:z-ct/2;return{x:z,text:B,anchor:Kt,leftEdge:ce,rightEdge:ce+ct}},N=A(0);if(c.push({x:N.x,text:N.text,anchor:N.anchor}),f>=1){const w=A(f);if(w.leftEdge>=N.rightEdge+$){let P=N.rightEdge;for(let B=1;B<f;B++){const z=A(B);z.leftEdge>=P+$&&z.rightEdge<=w.leftEdge-$&&(c.push({x:z.x,text:z.text,anchor:z.anchor}),P=z.rightEdge)}c.push({x:w.x,text:w.text,anchor:w.anchor})}}return c},[Yt,e,G,a]),cn=(c,f)=>{const x=new Set,$=c.length;if($===0||(x.add(0),$===1))return x;const A=16,N=f(c[0]),w=f(c[$-1]);if(Math.abs(w-N)>=A){let P=N;for(let B=1;B<$-1;B++){const z=f(c[B]);Math.abs(z-P)>=A&&Math.abs(w-z)>=A&&(x.add(B),P=z)}x.add($-1)}return x},Ao=cn(ae,ot),Eo=cn(se,rt),kt=b.useMemo(()=>t.filter(c=>c.data.x.length>0).map(c=>{const f=c.axis==="primary"?ot:rt,x=c.type??"line";if(x==="band")return c.data.y2?{id:c.id,kind:"band",color:c.color,opacity:c.fillOpacity??Cc,d:ho(c.data.x,c.data.y,c.data.y2,G,f)}:{id:c.id,kind:"noop"};if(x==="scatter"){const w=c.data.x.map((P,B)=>({cx:G(P),cy:f(c.data.y[B])}));return{id:c.id,kind:"scatter",color:c.color,points:w}}const $=x==="step"?Zs:$n,A=(c.data.bridges??[]).filter(w=>qs(c.data.x,c.data.y,w,G,f)),N=[...new Set([...c.data.breaks??[],...A.map(w=>w.to)])].sort((w,P)=>w-P);return{id:c.id,kind:"stroked",color:c.color,dashed:c.dashed??!1,uncertainty:Qs(c.data.x,c.data.reckoned??[],G,f),segments:Js(c.data.x,c.data.y,G,f,$,N,c.data.spans,c.data.reckoned),modelled:A.map(w=>({basis:w.basis,d:$n([c.data.x[w.to-1],...w.t,c.data.x[w.to]],[c.data.y[w.to-1],...w.v,c.data.y[w.to]],G,f)})),tail:c.data.x.length>0&&(c.data.reckoned??[]).some(w=>w.to>=c.data.x.length-1)?{cx:G(c.data.x[c.data.x.length-1]),cy:f(c.data.y[c.data.y.length-1])}:null,observed:[...new Set(A.flatMap(w=>[w.to-1,w.to]))].map(w=>({cx:G(c.data.x[w]),cy:f(c.data.y[w])}))}}),[t,G,ot,rt]),Nt=b.useMemo(()=>l?l.map(c=>{const f=c.axis??"primary",x=t.filter(A=>A.axis===f&&A.type!=="band"&&!A.dashed),$=c.kind==="limit"?x.some(A=>{const N=A.data.y.filter(w=>Number.isFinite(w));return N.length>0&&lo(N[N.length-1],c.value,c.bad)}):c.kind==="target"&&x.some(A=>gc(A.data.y,c.value));return{id:c.id,label:c.label,spokenLabel:c.spokenLabel,value:c.value,kind:c.kind,passed:$,currency:is(c.reading,{drawsReckoning:!0}),tone:mc(c.kind,$),dashed:c.kind!=="marker",y:f==="primary"?ot(c.value):rt(c.value)}}):[],[l,t,ot,rt]),Wt=b.useMemo(()=>{const c=(f,x,$)=>Math.max(f,Math.min($,x));return(l??[]).flatMap(f=>{if(f.kind!=="limit"||!Number.isFinite(f.value))return[];const x=f.axis??"primary",$=x==="primary"?ot:rt,A=$(f.value),N=f.bad==="above"?-1:1,w=f.label||`the limit at ${r(f.value)}`;return t.filter(P=>P.axis===x&&P.data.x.length>0&&(P.type??"line")!=="band"&&!P.dashed).flatMap(P=>Us({y:P.data.y,cx:P.data.x.map(G),cy:P.data.y.map($),limit:f.value,limitY:A,bad:f.bad,breaks:P.data.breaks,step:P.type==="step"||P.type==="scatter",minGapPx:Mt}).slice(Et?0:-1).map(B=>{const z=r(P.data.y[B.index]),ct=a(P.data.x[B.index],e);return{key:`${f.id}-${P.id}-${B.index}`,color:P.color,x:c(X+Mt/2+1,B.x-Wn*(B.entered?1:-1),V-Mt/2-1),y:c(D+Mt/2+1,B.y+N*Wn,W-Mt/2-1),text:B.entered?B.spells>1?`${P.label} went past ${w} ${B.spells} times from ${ct}, first reading ${z}`:`${P.label} went past ${w} at ${ct}, reading ${z}`:`${P.label} was already past ${w} when this window began at ${ct}, reading ${z}`}}))})},[l,t,G,ot,rt,a,r,e,X,V,D,W,Et]),st=(()=>{if(!At||nt===null||p)return;const c=Mt/2,f=[...t.filter(A=>(A.type??"line")!=="band").flatMap(A=>{const N=A.axis==="primary"?ot:rt,w=A.data.x.map(G),P=A.data.y.map(N);return A.type==="scatter"?w.map((B,z)=>({cx:[B],cy:[P[z]]})):[{cx:w,cy:P}]}),...Nt.map(A=>({cx:[X,V],cy:[A.y,A.y]}))],x=[...Wt.map(A=>({x0:A.x-c,y0:A.y-c,x1:A.x+c,y1:A.y+c})),...d==="none"||q?[]:t.map((A,N)=>({x0:X+3,y0:D+6+N*16,x1:X+3+Math.min(A.label.length*6+8,ut-6),y1:D+6+N*16+13}))],$=Ds({plot:{x0:X,y0:D,x1:V,y1:W},card:{width:nt.w,height:nt.h},traces:f,obstacles:x});return $?{x0:$.x,y0:$.y,x1:$.x+nt.w,y1:$.y+nt.h}:void 0})(),Bt=b.useMemo(()=>{if(!Et)return new Map;const c=Mt/2;return fc({labels:Nt.filter(f=>f.label).map(f=>({id:f.id,width:(f.label?.length??0)*ko+(f.currency.held?Mo:0),lineY:f.y})),plot:q??{x0:X,y0:D,x1:V,y1:W},obstacles:[...st?[st]:[],...Wt.map(f=>({x0:f.x-c,y0:f.y-c,x1:f.x+c,y1:f.y+c})),...d==="none"?[]:t.map((f,x)=>({x0:q?q.x0:X+3,y0:D+6+x*16,x1:(q?q.x0:X+3)+Math.min(f.label.length*6+8,q?q.x1-q.x0:ut-6),y1:D+6+x*16+13}))],traces:(q?[]:t).filter(f=>(f.type??"line")!=="band").map(f=>({cx:f.data.x.map(G),cy:f.data.y.map(f.axis==="primary"?ot:rt)}))})},[Et,st,q,Nt,Wt,d,t,G,ot,rt,X,V,D,W,ut]),So=t.flatMap(c=>{const f=kt.find(w=>w.id===c.id),x=f?.kind==="stroked"?f.modelled.map(w=>w.basis):[],$=c.data.reckoned??[];if($.length===0&&x.length===0)return[];const N=[...new Set([...$.map(w=>w.basis),...x])].map(w=>`${c.label}: part of this trace is reckoned, ${Hs(w)}, not measured`);return $.some(w=>w.bandLo&&w.bandHi)&&N.push(`${c.label}: ${Hc}`),N}),Lo=Nt.flatMap(c=>{const f=c.spokenLabel??c.label??c.id,x=[];return c.passed&&c.kind==="limit"&&x.push(`${f}: limit passed`),c.passed&&c.kind==="target"&&x.push(`${f}: target reached`),c.currency.held&&x.push(gs(f,c.currency.caption)),c.label&&!Bt.get(c.id)&&x.length===0&&x.push(c.spokenLabel??c.label),x}),_e=[...So,...Lo],Io=[k??"Telemetry line chart",...dc(m??[]),..._e].join("; "),$e=b.useMemo(()=>t.filter(c=>c.data.x.length>0).map(c=>_==="value"?Ws(c):c),[t,_]),Ae=b.useMemo(()=>C?Gs($e):[],[C,$e]),Gt=Math.min(e[0],e[1]),Vt=Math.max(e[0],e[1]),jo=_==="value"?(Vt-Gt)*wc:void 0;function ln(c){const f=$e.map(x=>{const $=Bs(x,c,jo),A=x.format??r,N=x.axis==="primary"?ot:rt,w=(x.type??"line")==="band";return $===null?{id:x.id,label:x.label,color:x.color,value:null}:{id:x.id,label:x.label,color:x.color,value:w&&$.y2!==void 0?`${A($.y)} to ${A($.y2)}`:A($.y),currency:$.currency==="measured"?void 0:$.currency,modelled:$.currency==="modelled",y:w?void 0:N($.y)}});if(Et)for(const x of Nt)x.kind!=="marker"&&f.push({id:`threshold-${x.id}`,label:x.kind,color:x.tone.label,value:x.label??r(x.value),detail:!0,currency:x.currency.held?x.currency.mark==="modelled"?"modelled":"held":void 0,modelled:x.currency.held&&x.currency.mark==="modelled"});return{heading:(j??a)(c,e),rows:f}}function dn(c){const{heading:f,rows:x}=ln(c);return[f,...x.map($=>`${$.label} ${$.value??"no sample"}${$.currency?`, ${$.currency}`:""}`)].join("; ")}const un=t.filter(c=>(c.type??"line")!=="band").map(c=>({cx:c.data.x.map(G),cy:c.data.y.map(c.axis==="primary"?ot:rt)})),Ee=st?[...un,Xs(st)]:un,hn=At&&!p&&nt!==null&&nt.w>0&&nt.h>0&&!st&&_t<v-1;b.useLayoutEffect(()=>{hn&&zt(c=>c+1)},[hn]);const To=c=>{let f=c,x=Number.POSITIVE_INFINITY;for(const $ of Ae)$<Gt||$>Vt||Math.abs($-c)<x&&(x=Math.abs($-c),f=$);return f},mt=C&&Y!==null&&Y.at>=Gt&&Y.at<=Vt?To(Y.at):null,yt=mt===null?null:ln(mt),fn=yt!==null&&Es({x:mt===null?0:G(mt),plot:{x0:X,y0:D,x1:V,y1:W},heading:yt.heading,rows:yt.rows,column:q,traces:Ee}),Ut=yt!==null&&mt!==null?Ss({x:G(mt),plot:{x0:X,y0:D,x1:V,y1:W},heading:yt.heading,rows:yt.rows,column:q,traces:Ee}):void 0,No=st!==void 0&&Ut!==void 0&&Ut.x0<st.x1&&Ut.x1>st.x0&&Ut.y0<st.y1&&Ut.y1>st.y0;function Po(c){const f=c.currentTarget.getBoundingClientRect(),x=c.clientX-f.left;return x<X||x>V?null:e[0]+(x-X)/(V-X)*(e[1]-e[0])}function Co(c){const f=Po(c);if(f===null){S(x=>x?.source==="pointer"?null:x);return}S({at:f,source:"pointer"})}function Ro(c){const f=Ae.filter(N=>N>=Gt&&N<=Vt),x={ArrowLeft:c.shiftKey?-10:-1,ArrowRight:c.shiftKey?10:1,Home:-f.length,End:f.length};if(c.key==="Escape"){if(Y===null)return;c.preventDefault(),S(null),pt("");return}const $=x[c.key];if($===void 0)return;c.preventDefault();const A=_n(f,mt,$);A!==null&&(S({at:A,source:"keys"}),pt(dn(A)))}function Oo(c){try{H(c.currentTarget.matches(":focus-visible"))}catch{H(!0)}if(Y!==null)return;const f=_n(Ae.filter(x=>x>=Gt&&x<=Vt),null,0);f!==null&&(S({at:f,source:"keys"}),pt(dn(f)))}function Ho(){H(!1),S(c=>c?.source==="keys"?null:c),pt("")}const Fo=C?{tabIndex:0,onPointerMove:Co,onPointerLeave:()=>S(c=>c?.source==="pointer"?null:c),onKeyDown:Ro,onFocus:Oo,onBlur:Ho}:{},ie={scaleX:G,scaleYPrimary:ot,scaleYSecondary:rt,plotX0:X,plotX1:V,plotY0:D,plotY1:W,uid:at,labels:Et},zo=p&&m?Vi(m,ie):()=>!1,Se=`plot-layer-clip-${at}`;if(ut<=0||bt<=0)return u.jsx("svg",{width:Math.max(0,F),height:Math.max(0,et),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:u.jsx("title",{children:"Chart too small to render"})});const pn=u.jsxs("svg",{width:F,height:et,role:Wt.length>0||C?"group":"img","aria-label":Io,"aria-describedby":C?`${at}-crosshair-hint`:void 0,...Fo,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...C?{touchAction:"pan-y",outline:K?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[m&&m.length>0&&u.jsx("defs",{children:u.jsx("clipPath",{id:Se,children:u.jsx("rect",{x:X,y:D,width:ut,height:bt})})}),_e.length>0&&u.jsx("title",{children:_e.join("; ")}),u.jsx("rect",{x:X,y:D,width:ut,height:bt,fill:"var(--color-surface-panel)"}),m&&m.length>0&&u.jsx("g",{clipPath:`url(#${Se})`,children:u.jsx(Ce,{layers:m,frame:ie,pass:"background"})}),!p&&ae.map((c,f)=>{const x=ot(c);return u.jsxs(Le.Fragment,{children:[u.jsx("line",{x1:X,y1:x,x2:V,y2:x,stroke:"var(--color-border-subtle)",strokeWidth:1}),Ao.has(f)&&u.jsx("text",{x:X-4,y:x,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:r(c,ae)})]},`py-${f}`)}),!p&&se.map((c,f)=>Eo.has(f)?u.jsx("text",{x:V+4,y:rt(c),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:r(c,se)},`sy-${f}`):null),!h&&!p&&Yt.map((c,f)=>u.jsx("line",{x1:G(c),y1:D,x2:G(c),y2:W,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${f}`)),!h&&!p&&$o.map((c,f)=>u.jsx("text",{x:c.x,y:W+14,textAnchor:c.anchor,fill:"var(--color-text-faint)",fontSize:11,children:c.text},`xl-${f}`)),Qe&&u.jsx("text",{x:(X+V)/2,y:et-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:Oe(y,ut)}),tn&&u.jsx("text",{x:St/2,y:(D+W)/2,transform:`rotate(-90 ${St/2} ${(D+W)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:Oe(R,bt)}),en&&u.jsx("text",{x:F-St/2,y:(D+W)/2,transform:`rotate(90 ${F-St/2} ${(D+W)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:Oe(O,bt)}),p&&_c(X,V,D,W,g).filter(c=>!zo(c.x,c.y)).map(c=>u.jsx("circle",{cx:c.x,cy:c.y,r:1,fill:"var(--color-text-faint)",opacity:.35},c.key)),!p&&u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:X,y1:D,x2:X,y2:W,stroke:"var(--color-border-strong)",strokeWidth:1}),u.jsx("line",{x1:X,y1:W,x2:V,y2:W,stroke:"var(--color-border-strong)",strokeWidth:1}),gt&&u.jsx("line",{x1:V,y1:D,x2:V,y2:W,stroke:"var(--color-border-strong)",strokeWidth:1})]}),kt.filter(c=>c.kind==="band").map(c=>u.jsx("path",{d:c.d,fill:c.color,fillOpacity:c.opacity,stroke:"none"},c.id)),kt.filter(c=>c.kind==="stroked").flatMap(c=>c.uncertainty.map((f,x)=>u.jsx("path",{d:f.d,"data-band-kind":f.kind,fill:c.color,fillOpacity:Rc,stroke:f.kind==="bound"?c.color:"none",strokeOpacity:f.kind==="bound"?Oc:void 0,strokeWidth:f.kind==="bound"?1:void 0},`${c.id}-band-${x}`))),kt.filter(c=>c.kind==="stroked").flatMap(c=>c.segments.map((f,x)=>u.jsx("path",{d:f.d,"data-stream-status":f.status,"data-reckoning-basis":f.basis,stroke:c.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:f.basis!==void 0?Bn:void 0,strokeDasharray:f.basis!==void 0?Gn:c.dashed?"4 3":void 0},`${c.id}-${x}`))),kt.filter(c=>c.kind==="stroked").flatMap(c=>c.modelled.map((f,x)=>u.jsx("path",{d:f.d,"data-reckoning-basis":f.basis,stroke:c.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:Bn,strokeDasharray:Gn},`${c.id}-modelled-${x}`))),kt.map(c=>c.kind==="stroked"&&c.tail!==null?u.jsx(io,{kind:"modelled",x:c.tail.cx,y:c.tail.cy},`${c.id}-tail`):null),kt.filter(c=>c.kind==="stroked").flatMap(c=>c.observed.map((f,x)=>u.jsx("circle",{cx:f.cx,cy:f.cy,r:xc,fill:c.color,"data-observed-sample":""},`${c.id}-observed-${x}`))),kt.filter(c=>c.kind==="scatter").flatMap(c=>c.points.map((f,x)=>u.jsx("circle",{cx:f.cx,cy:f.cy,r:Lc,fill:c.color},`${c.id}-${x}`))),t.map(c=>{if(!c.headMark)return null;const f=c.axis==="primary"?ot:rt;let x=c.data.x.length-1;for(;x>=0&&!(Number.isFinite(c.data.x[x])&&Number.isFinite(c.data.y[x]));)x-=1;return x<0?null:u.jsx("circle",{cx:G(c.data.x[x]),cy:f(c.data.y[x]),r:pc,fill:c.headMark==="dot"?c.color:"var(--color-surface-panel)",stroke:c.color,strokeWidth:c.headMark==="dot"?0:1.5,"data-head-mark":c.headMark},`${c.id}-head`)}),m&&m.length>0&&u.jsx("g",{clipPath:`url(#${Se})`,children:u.jsx(Ce,{layers:m,frame:ie,pass:"foreground"})}),Nt.map(c=>u.jsxs(Le.Fragment,{children:[u.jsx("line",{x1:X,y1:c.y,x2:V,y2:c.y,stroke:c.tone.line,strokeWidth:1,strokeDasharray:c.dashed?"4 3":void 0,"data-threshold-kind":c.kind,"data-threshold-passed":c.passed||void 0}),c.label&&Bt.get(c.id)&&!(q!==void 0&&fn&&c.kind!=="marker")&&u.jsxs("text",{x:Bt.get(c.id)?.x,y:Bt.get(c.id)?.y,textAnchor:Bt.get(c.id)?.anchor,fill:c.tone.label,fontSize:10,children:[c.label,c.currency.held&&u.jsx(xs,{size:10,kind:c.currency.mark??"held"})]})]},c.id)),Wt.map(c=>u.jsx(Vs,{x:c.x,y:c.y,size:Mt,color:c.color,text:c.text},c.key)),d!=="none"&&!fn&&t.map((c,f)=>{const x=D+6+f*16;if(x+13>W)return null;const $=q?q.x0:X+3,A=q?q.x1-q.x0:ut-6,N=Math.min(c.label.length*6+8,A),w=Math.max(1,Math.floor((N-8)/6)),P=c.label.length>w?`${c.label.slice(0,Math.max(1,w-1))}...`:c.label;return u.jsxs(Le.Fragment,{children:[u.jsx("rect",{x:$,y:x,width:N,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),u.jsx("text",{x:$+3,y:x+10,fill:c.color,fontSize:10,children:P})]},c.id)}),m&&m.length>0&&Et&&u.jsx(Ce,{layers:m,frame:ie,pass:"caption"}),yt!==null&&mt!==null&&u.jsx(Ls,{x:G(mt),plot:{x0:X,y0:D,x1:V,y1:W},heading:yt.heading,rows:yt.rows,column:q,traces:Ee})]}),xn=At?u.jsx("div",{ref:oe,"data-plot-card":"",style:{position:"absolute",left:st?.x0??0,top:st?.y0??0,visibility:st&&!No?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof T=="function"?T({width:ut-Yn*2,height:bt-Yn*2,form:_t}):T}):null;return C?u.jsxs(u.Fragment,{children:[pn,xn,u.jsx(ye,{id:`${at}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),u.jsx(ye,{role:"status","aria-live":"polite",children:tt})]}):u.jsxs(u.Fragment,{children:[pn,xn]})}function Vn(t,e,n,o=[]){if(e)return e;if(t.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let a=[...t.flatMap(Fc),...o];return n==="log"&&(a=a.filter(r=>r>0)),a.length===0?n==="log"?[1,10]:[0,1]:[Math.min(...a),Math.max(...a)]}function Dc(t){if(t===0)return"0";if(Math.abs(t)>=1e6)return`${(t/1e6).toFixed(1)}M`;if(Math.abs(t)>=1e3)return`${(t/1e3).toFixed(1)}k`;if(Number.isInteger(t))return String(t);if(Math.abs(t)<.01){const e=Math.floor(Math.log10(Math.abs(t))),n=t/10**e;return Math.abs(n-1)<1e-9?`1e${e}`:`${n.toFixed(1)}e${e}`}return t.toFixed(2)}const Xc=b.createContext(null);function Yc(t,e){const n=b.useContext(Xc),o=n?.setFooter,a=n?.setDirty;b.useEffect(()=>(o?.(t),()=>o?.(null)),[o,t]),b.useEffect(()=>(a?.(e),()=>a?.(!1)),[a,e])}function gd(t){const{onSave:e,value:n,saved:o,saveLabel:a="Save",extra:r,disabled:s}=t,i=b.useRef(null);i.current===null&&(i.current={v:n});const l=!Ft(n,i.current.v)&&!Ft(n,o),d=b.useRef(e);d.current=e;const h=b.useMemo(()=>u.jsxs(u.Fragment,{children:[r,u.jsx(fr,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:s,children:a})]}),[r,s,a]);Yc(h,l)}const md=Z`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`;export{pd as $,Wl as A,kl as B,Nl as C,El as D,tl as E,al as F,Ul as G,Jl as H,ol as I,fl as J,ul as K,Ml as L,Rl as M,wl as N,Pl as O,Hl as P,Fl as Q,Kl as R,_l as S,nl as T,hl as U,ye as V,Ft as W,Qc as X,Xi as Y,Yc as Z,gd as _,Gl as a,sd as a0,dd as a1,Xc as a2,md as a3,el as a4,ad as a5,Zn as a6,ke as a7,is as a8,nd as a9,ri as aA,fd as aB,Rs as aC,Ss as aD,Es as aE,gs as aF,qn as aG,or as aH,cd as aI,ao as aJ,rr as aK,ur as aL,ms as aM,kr as aN,id as aO,ld as aP,Hs as aa,Vl as ab,Xl as ac,Sl as ad,ud as ae,hr as af,xl as ag,gl as ah,xs as ai,ml as aj,bl as ak,Ls as al,J as am,dr as an,io as ao,td as ap,vl as aq,lt as ar,ni as as,cs as at,rd as au,ls as av,od as aw,ed as ax,hd as ay,kn as az,Bl as b,yl as c,fr as d,Dl as e,Yl as f,zl as g,jl as h,rl as i,Ll as j,cl as k,il as l,sl as m,ll as n,Ql as o,Zl as p,$l as q,Al as r,ql as s,Cl as t,pl as u,dl as v,xd as w,Tl as x,Ol as y,Il as z};
