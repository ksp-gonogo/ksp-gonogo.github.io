import{j as i}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import k,{css as F,createGlobalStyle as Ua}from"./ext-styled-components-Br73TgY3.js";import{o as Bn,n as Vr,T as re,d as ye,Q as Jn,z as hn,a1 as eo,N as tn,w as At,a2 as to,a3 as Ya,a4 as Ga,a5 as Va,a6 as Kr,a7 as Ka,e as Bo,a8 as qa,a9 as Za,aa as Qa,ab as Ja,Y as Zt,s as Qt,ac as ei,ad as ti,ae as ni,J as oi,l as qr,Z as ri,m as Pt,K as Zr,af as si,S as Qr,ag as Jr,U as Wo,A as Dt,f as Xo,ah as ai,ai as ii,aj as Uo}from"./contributionsRead-CxcG1bnT.js";import{r as p,R as Ht}from"./ext-react-RRA14VTW.js";import{cz as jt,cE as nn,b3 as es,l as li,cf as dt,aM as Bt,cj as ts,a$ as ci,b0 as di,aZ as it}from"./view-clock-formula-DsCXgpUC.js";import"./ksp-enum-names-BT87oy6d.js";import{F as no,z as ui}from"./screen-Bix7t2XI.js";import{I as hi}from"./index-Cw046yXZ.js";import"./lagrange-BgYhKf0B.js";import{R as fi}from"./use-transmissions-CLvuYNs1.js";import{gridToPixels as pi}from"./ext-ui-kit-grid-CYQFMmYG.js";import{r as gi}from"./ext-react-dom-CZVBhjGL.js";const rg={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function sg({children:e,layout:t="inline",...n}){return i.jsx(xi,{$layout:t,...n,children:e})}const mi={inline:F``,fill:F`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},xi=k.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>mi[e]}
`,Ve=F`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,fn=F`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,vi=120,yi=120,Yo=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function Lt(e){const[t,n]=p.useState(null),[o,r]=p.useState(!1),[s,a]=p.useState(!1),[l,c]=p.useState(!1),[d,h]=p.useState(!1),f=p.useRef(null),x=p.useRef(!1),g=p.useRef(!1),m=p.useRef(null),b=e!=null&&e!==""?e:null,$=t!==null&&(o||s||l||d),M=p.useCallback(()=>{m.current!==null&&clearTimeout(m.current),m.current=null},[]),_=p.useCallback(()=>{M(),n(null),r(!1),a(!1),c(!1),h(!1),x.current=!1},[M]);p.useEffect(()=>{if(!d)return;const A=()=>{const O=document.getSelection(),j=O!==null&&!O.isCollapsed&&f.current?.contains(O.anchorNode)===!0;!x.current&&!j&&h(!1)},S=()=>{x.current=!1,A()};return document.addEventListener("pointerup",S),document.addEventListener("selectionchange",A),()=>{document.removeEventListener("pointerup",S),document.removeEventListener("selectionchange",A)}},[d]);const L=p.useCallback(()=>{M(),m.current=setTimeout(()=>{m.current=null,r(!1),c(!1)},yi)},[M]);if(p.useEffect(()=>M,[M]),p.useEffect(()=>{if(t!==null)return window.addEventListener("scroll",_,!0),window.addEventListener("resize",_),()=>{window.removeEventListener("scroll",_,!0),window.removeEventListener("resize",_)}},[t,_]),p.useEffect(()=>{if(!$)return;const A=S=>{S.key==="Escape"&&(S.stopPropagation(),_())};return document.addEventListener("keydown",A,!0),()=>document.removeEventListener("keydown",A,!0)},[$,_]),b===null)return{anchor:{},tip:null};const E=A=>{const S=A.getBoundingClientRect();n({top:S.bottom,left:S.left,above:window.innerHeight-S.bottom<vi,anchorTop:S.top})};return{anchor:{"data-tooltip":b,onPointerEnter:A=>{M(),E(A.currentTarget),r(!0)},onPointerLeave:L,onPointerDown:()=>{g.current=!0,_()},onPointerUp:()=>{g.current=!1},onFocus:A=>{g.current||(E(A.currentTarget),a(!0))},onBlur:()=>{a(!1),!o&&!l&&n(null)}},tip:$?gi.createPortal(i.jsx(bi,{ref:f,at:t,text:b,onPress:()=>{x.current=!0,h(!0)},onPointerEnter:()=>{M(),c(!0)},onPointerLeave:L}),document.body):null}}const bi=p.forwardRef(function({at:t,text:n,onPress:o,onPointerEnter:r,onPointerLeave:s},a){const l=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return i.jsx(ki,{ref:a,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),o()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...l,left:t.left,"--tip-left":`${t.left}px`},children:n})});function tt(e,t){return(...n)=>{typeof e=="function"&&e(...n),t?.(...n)}}function Ee({text:e,children:t,focusable:n=!1,announce:o=!0}){const{anchor:r,tip:s}=Lt(e);if(e==null||e==="")return t;const a=t.props,l=a["aria-label"],c=!o||typeof l=="string"&&Yo(l).includes(Yo(e));return i.jsxs(i.Fragment,{children:[p.cloneElement(t,{"data-tooltip":e,onPointerEnter:tt(a.onPointerEnter,r.onPointerEnter),onPointerLeave:tt(a.onPointerLeave,r.onPointerLeave),onPointerDown:tt(a.onPointerDown,r.onPointerDown),onPointerUp:tt(a.onPointerUp,r.onPointerUp),onFocus:tt(a.onFocus,r.onFocus),onBlur:tt(a.onBlur,r.onBlur),"aria-description":c?a["aria-description"]:e,tabIndex:n?a.tabIndex??0:a.tabIndex}),s,n&&i.jsx(wi,{})]})}const wi=Ua`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,ki=k.div`
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
`;function ns(e){let t="";return p.Children.forEach(e,n=>{if(typeof n=="string"||typeof n=="number"){t+=String(n);return}p.isValidElement(n)&&(t+=ns(n.props.children))}),t.replace(/\s+/g," ").trim()}function os({label:e,children:t,disabledReason:n}){return $i({label:e,children:t,disabledReason:n})}function $i({label:e,children:t,disabledReason:n}){const o=e!==void 0&&e!==""&&e!==ns(t)?e:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function rs(e,t){return e===!0&&t!==void 0&&t!==""}function ss(e){e.preventDefault(),e.stopPropagation()}function as(e,t,n){return t===null||e.props["data-tooltip"]!==void 0?e:i.jsx(Ee,{text:t,announce:n,children:e})}const oo="max(0.075em, 1.25px)",se={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},Ge=k.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Wn=se.held.domSize,Xn=se.modelled.domSize,_i=F`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Wn} + 0.14em);
  }
`,Si=F`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Xn} + 0.14em);
  }
`;function ji(e){return F`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${se[e].hollowDomSize} + 0.14em);
    }
  `}function is(e,t=!1){return t?ji(e):e==="current"?null:e==="modelled"?Si:_i}const Mi=k.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Wn};
  height: ${Wn};
  background: ${se.held.color};
`,Ei=k.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Xn};
  height: ${Xn};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${se.modelled.color};
`,ro=e=>F`
  position: absolute;
  right: 0;
  top: 0;
  width: ${se[e].hollowDomSize};
  height: ${se[e].hollowDomSize};
`,Ai=k.span`
  ${ro("current")}
  border: ${oo} solid ${se.current.color};
  border-radius: var(--radius-circle);
`,Pi=k.span`
  ${ro("held")}
  border: ${oo} solid ${se.held.color};
`,Ci=k.span`
  ${ro("modelled")}
  --stroke: ${oo};
  background: ${se.modelled.color};
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
`,Ri={current:Ai,held:Pi,modelled:Ci};function ls({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?Ri[e]:e==="modelled"?Ei:Mi;return i.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const Ii=k.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>is(e??"held",t)}
`;function so({caption:e,kind:t="held",elsewhere:n=!1,children:o,...r}){const{anchor:s,tip:a}=Lt(e);return i.jsxs(Ii,{$kind:t,$elsewhere:n,...r,...s,children:[o,i.jsx(ls,{kind:t,elsewhere:n}),e!==null&&i.jsxs(Ge,{"data-unit-currency":"",children:[", ",e]}),a]})}const Li=p.forwardRef(function({variant:t="default",tone:n,size:o="md",pressed:r,predictedOutcome:s,disabledReason:a,marked:l,type:c="button",...d},h){const f=rs(d.disabled,a),x=os({label:d["aria-label"],children:d.children,disabledReason:f?a:void 0}),{disabled:g,onClick:m,children:b,...$}=d;return as(i.jsx(Bi,{ref:h,$variant:t,$tone:n??(t==="primary"?"go":"neutral"),$size:o,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,...$,disabled:f?void 0:g,...f?{"aria-disabled":!0}:{},onClick:f?ss:m,type:c,children:l?i.jsx(so,{kind:l.kind,caption:l.caption,children:b}):b}),x,f)});function Ti(e){return e==="neutral"?"go":e}const ao=e=>F`
  background: ${Bn[e]};
  border-color: ${Bn[e]};
  color: ${Vr[e]};
`,Oi=e=>F`
  border-color: ${re[e]};
  color: ${ye[e]};
`,Go={default:F`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:F`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},Ni=F`
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
`,Fi=F`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function zi(e,t){return e==="text"?Ni:e==="primary"?ao(t):t==="neutral"?Go[e]:F`
    ${Go[e]}
    ${Oi(t)}
  `}const Di=F`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,Hi={sm:F`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:F`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},Bi=k.button`
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

  ${({$size:e})=>Hi[e]}
  ${({$variant:e,$tone:t})=>zi(e,t)}
  ${({$pressed:e,$tone:t})=>e?ao(Ti(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":Di}
  ${Ve}
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
    padding: ${({$size:e})=>e==="sm"?"var(--inset-control-small-touch)":"var(--inset-control-touch)"};
  }

  ${({$variant:e})=>e==="text"?Fi:""}
`,ag=k.button`
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
  ${Ve}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Wi=k.button`
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
    ${ao("go")}
  }
  ${Ve}
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
`,Xi=p.forwardRef(function({pressed:t,disabledReason:n,...o},r){const s=rs(o.disabled,n),a=os({label:o["aria-label"],children:o.children,disabledReason:s?n:void 0}),{disabled:l,onClick:c,...d}=o;return as(i.jsx(Wi,{ref:r,"aria-pressed":t,...d,disabled:s?void 0:l,...s?{"aria-disabled":!0}:{},onClick:s?ss:c}),a,s)}),ig=k.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,Ui=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,lg=k.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,Yi=k.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,cg=k.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,dg=k.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,io=F`
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

  ${Ve}

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
`,Gi=k.input`
  ${io}
  width: 100%;
`,ug=k.select`
  ${io}
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
`,hg=k.textarea`
  ${io}
  width: 100%;
  resize: vertical;
`,lo=e=>F`
  --fit-box: ${e};
`,Vi=e=>F`
  --fit-mask: ${e};
`;function on({tone:e,size:t="md",live:n=!1,report:o,children:r,...s}){const a=e===void 0||e==="neutral"?void 0:e,l=o?.label??(typeof r=="string"?r:"");Jn(o?{id:o.id,severity:a??"go",label:l}:null);const c=n?{role:"status","aria-live":"polite"}:{};return i.jsx(Qi,{$severity:a,$size:t,...c,...s,children:r})}const Ki=F`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,qi={go:F`
    background: transparent;
    border-color: ${re.go};
    color: ${ye.go};
  `,info:F`
    background: transparent;
    border-color: ${re.info};
    color: ${ye.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${re.info} 40%, transparent);
  `,caution:F`
    background: transparent;
    border-color: ${re.caution};
    color: ${ye.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${re.caution} 45%, transparent);
  `,warn:F`
    background: transparent;
    border-color: ${re.warn};
    color: ${ye.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${re.warn} 55%, transparent);
  `,nogo:F`
    background: transparent;
    border-color: ${re.nogo};
    color: ${ye.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${re.nogo} 65%, transparent);
  `,offline:F`
    background: transparent;
    border-color: ${re.offline};
    color: ${ye.offline};
  `},Zi={sm:F`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:F`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},Qi=k.span`
  display: inline-block;
  /* Sized by its own text, never stretched to a taller flex sibling. */
  align-self: center;
  ${lo("badge")}
  border: 1px solid;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;

  /* Pill-shaped only for a real severity; a decorative kind chip keeps the rounded rect. */
  border-radius: ${({$severity:e})=>e===void 0?"var(--radius-regular)":"var(--radius-pill)"};

  ${({$size:e})=>Zi[e]}
  ${({$severity:e})=>e===void 0?Ki:qi[e]}
`;/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=e=>{const t=el(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},nl=p.createContext({}),ol=()=>p.useContext(nl),rl=p.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:o,className:r="",children:s,iconNode:a,...l},c)=>{const{size:d=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:x="currentColor",className:g=""}=ol()??{},m=o??f?Number(n??h)*24/Number(t??d):n??h;return p.createElement("svg",{ref:c,...Pn,width:t??d??Pn.width,height:t??d??Pn.height,stroke:e??x,strokeWidth:m,className:cs("lucide",g,r),...!s&&!tl(l)&&{"aria-hidden":"true"},...l},[...a.map(([b,$])=>p.createElement(b,$)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=(e,t)=>{const n=p.forwardRef(({className:o,...r},s)=>p.createElement(rl,{ref:s,iconNode:t,className:cs(`lucide-${Ji(Vo(e))}`,`lucide-${e}`,o),...r}));return n.displayName=Vo(e),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],al=D("arrow-down",sl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ll=D("arrow-left",il);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],dl=D("arrow-right",cl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],hl=D("arrow-up-to-line",ul);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],pl=D("arrow-up",fl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],ml=D("bell",gl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],vl=D("check",xl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],bl=D("chevron-down",yl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],kl=D("chevron-left",wl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],_l=D("chevron-right",$l);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],jl=D("chevron-up",Sl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],El=D("columns-2",Ml);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],Pl=D("computer",Al);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],Rl=D("corner-down-left",Cl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Ll=D("database",Il);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ol=D("file-text",Tl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],Fl=D("grip",Nl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Dl=D("heart",zl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Bl=D("history",Hl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Xl=D("house",Wl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Yl=D("info",Ul);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],Vl=D("joystick",Gl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ql=D("layers",Kl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ql=D("lock",Zl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],ec=D("maximize",Jl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],nc=D("microscope",tc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],rc=D("minimize",oc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],ac=D("pause",sc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],lc=D("pencil",ic);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],dc=D("play",cc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],hc=D("plus",uc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],pc=D("radio",fc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],mc=D("rectangle-horizontal",gc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],vc=D("rectangle-vertical",xc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],bc=D("rows-2",yc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],kc=D("satellite",wc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_c=D("settings",$c);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],jc=D("square",Sc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ec=D("star",Mc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Pc=D("undo-2",Ac);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Rc=D("volume-2",Cc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Lc=D("volume-x",Ic);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Oc=D("x",Tc),Nc="var(--icon-size-control)",Fc={strokeWidth:1.8,"aria-hidden":!0};function H(e,t){const n=p.forwardRef(({label:o,size:r=Nc,style:s,...a},l)=>{const c=typeof r=="number"?{size:r,style:s}:{style:{width:r,height:r,...s}},d=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return i.jsx(e,{...Fc,...t,...d,...a,...c,ref:l})});return n.displayName=e.displayName??e.name,n}const fg=H(Fl),pg=H(Vl),gg=H(Bl),mg=H(Xl),xg=H(Yl),vg=H(Ql),yg=H(pc),bg=H(Rc),wg=H(Lc),kg=H(ml),$g=H(ql),_g=H(_c),Sg=H(kc),jg=H(ec),Mg=H(rc),Eg=H(Ll),Ag=H(Pl),Pg=H(Ol),Cg=H(hc,{strokeWidth:2.4}),zc=H(Oc),Rg=H(lc),Ig=H(vl),Dc=H(Ec),Lg=H(Dl),Hc=H(nc),Tg=H(dc),Og=H(ac),Ng=H(jc),Fg=H(jl),zg=H(bl),Dg=H(kl),Hg=H(_l),Bg=H(ll),Wg=H(pl),Xg=H(dl),Ug=H(al),Yg=H(hl),Gg=H(Pc),Vg=H(El),Kg=H(mc),qg=H(bc),Zg=H(vc),Qg=H(Rl);function Bc(e){if(e===void 0)return null;const{value:t}=eo(e.magnitude,e.unit);return t===tn?null:t}function ds(e,t){const n=Bc(t);return n===null?e:`${e}, as of ${n}`}const co="modelled to SCET";function us(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function Ko(e){return nn(e.value)||jt(e.value)?{shown:e.value,held:!1,mark:null,isStatic:nn(e.value),isDeterministic:jt(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:ds(hn(e.grade),e.asOfUt)}}function pn(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:nn(e),isDeterministic:jt(e),caption:null,band:null};const n=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!jt(e.value)){const o=e.reckoning.modelled;if(e.state==="held"){const s=Ko(e),a=e.value===void 0,l=s.held||a,c=s.caption??(a?"":null);return{...s,shown:o,held:l,mark:l?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:n}}const r=e.reckoning.beyondReceived;return{shown:o,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?co:null,band:n}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:nn(e.value),isDeterministic:jt(e.value),caption:null,band:n}:e.state==="held"?{...Ko(e),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function hs(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function Wc(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:co}:null;if(e.state==="held"){const n=ds(hn(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function Jg(e){return e===void 0?null:typeof e!="string"?Wc(e):{kind:"held",caption:hn(e)}}function fs(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function em(e,t){const n=fs(t);return n===void 0?e:{state:"held",value:e,grade:n,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}function uo(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function Xc(e={}){return uo(t=>At(t,e))}const Uc=.01;function tm({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const r=Math.abs(t(n)-t(o));return(e?Math.min(r,1-r):r)<=Uc}}}function Un(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(r=>!n.readsAsOne(e,r))}const Yc={},Gc={byKey:new Map,unaddressed:void 0,separate:!1};function qo(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Vc(e,t){if(e.separate!==t.separate||!qo(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!qo(o,t.byKey.get(n)))return!1;return!0}function Kc(e,t,n,o){const r=new Map;e!==void 0&&r.set(to(e),n);for(const[s,a]of Object.entries(t??{}))a!==void 0&&r.set(Va(s),a);return{byKey:r,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function qc(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Zc(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function Qc(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,a)=>s.depth-a.depth);let r=!1;for(const s of o)s.resettle(n)&&(r=!0);if(r)for(const s of t)s()}}}function Jc(e){const t=new Map,n=new Map,o=new Set,r=e?.root??Qc();let s=Gc;const a=c=>{let d;for(const h of c){const f=h.position;f!==void 0&&(d===void 0||f.base>d.base)&&(d=f)}return d?.rung},l={root:r,depth:e===void 0?0:e.depth+1,hold(c,d,h){const f=t.get(c);if(h===void 0)f!==void 0&&(f.delete(d),f.size===0&&t.delete(c));else{if(Zc(f?.get(d),h))return;f===void 0?t.set(c,new Map([[d,h]])):f.set(d,h)}e===void 0?r.sweep(c):e.hold(c,d,h)},settled:c=>n.get(c),readsAsOneFigure:c=>o.has(c),setPolicy(c){if(!Vc(s,c)){s=c;for(const d of t.keys())r.sweep(d)}},resettle(c){const d=[...t.get(c)?.values()??[]],h=e?.settled(c),f=s.byKey.get(c)??s.unaddressed??Yc,x=f.format??h?.format??a(d),g=f.as??h?.as,m=f.decimals??(s.separate?Ka(d,{format:x,as:g}):h?.decimals),b=x===void 0&&g===void 0&&m===void 0?void 0:{...x!==void 0&&{format:x},...g!==void 0&&{as:g},...m!==void 0&&{decimals:m}},$=s.separate&&Kr(d,{format:x,as:g,decimals:m}),M=$!==o.has(c);return $?o.add(c):o.delete(c),qc(n.get(c),b)?M:(b===void 0?n.delete(c):n.set(c,b),!0)},attach(){r.family.add(l)},detach(){r.family.delete(l)}};return r.family.add(l),l}const ho={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},Ct=p.createContext(ho);function ed(){return p.useContext(Ct)!==ho}function nm({children:e,of:t,pins:n,format:o,as:r,decimals:s,separate:a=!1}){const l=p.useContext(Ct),[c]=p.useState(()=>Jc(l===ho?void 0:l));return p.useLayoutEffect(()=>(c.attach(),()=>c.detach()),[c]),p.useLayoutEffect(()=>{c.setPolicy(Kc(t,n,{format:o,as:r,decimals:s},a))},[c,t,n,o,r,s,a]),i.jsx(Ct.Provider,{value:c,children:e})}function td(e,t={}){const n=p.useContext(Ct),o=p.useId(),r=es(e),s=e?.unit,l=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||r===null?void 0:to(s),c=l===void 0||r===null||s===void 0||Ya(s)===void 0?void 0:Ga(r,s),d=c?.base,h=c?.rung;return p.useLayoutEffect(()=>{if(!(l===void 0||r===null||s===void 0))return n.hold(l,o,{reading:r,unit:s,...d!==void 0&&h!==void 0&&{position:{base:d,rung:h}}}),()=>n.hold(l,o,void 0)},[n,o,l,r,s,d,h]),p.useSyncExternalStore(n.root.subscribe,()=>l===void 0?void 0:n.settled(l),()=>{})}function om(e,t={}){const n=p.useContext(Ct),r=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||es(e)===null||e===null||e===void 0?void 0:to(e.unit);return p.useSyncExternalStore(n.root.subscribe,()=>r===void 0?!1:n.readsAsOneFigure(r),()=>!1)}const nd=Qa,od={sci:Hc,rep:Dc},ps=k.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,rd=k.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?F`
          position: relative;
          ${is(e,t)}
        `:""}
`,sd=k.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,ad=k(Ge)`
  user-select: none;
`,gs=k(Ge)`
  user-select: none;
`,id=" ";function ld(e,t,n,o){if(t===void 0)return null;const r=x=>eo(x.magnitude,x.unit,{...n,format:o}).value,s=(x,g)=>r(g.minus(x)),a=Kr([t.lo,t.hi],{...n,format:o});if(!Un(e,[t.lo,t.hi],uo(r)))return null;const l=s(t.lo,t.value),c=s(t.value,t.hi),d=x=>/^[-+\u2212]?[0.,\s]*$/.test(x);if(!a&&d(l)&&d(c))return null;const h=r(t.value)===r(e),f={...n,format:o};return{oneFigure:a,plusMinus:!a&&h&&l===c?c:null,lo:r(t.lo),hi:r(t.hi),loSaid:Bo(t.lo,f),hiSaid:Bo(t.hi,f),kind:t.kind}}function cd(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function Cn({token:e,className:t,spaced:n}){const o=qa(e,Za(e));if(o==="")return null;const r=Ja(o),s=od[o],a=nd.has(o),l=r!==void 0;return i.jsxs(i.Fragment,{children:[n&&!a?id:null,i.jsx(Ee,{text:r,announce:!1,children:i.jsxs(ps,{$attached:a,$icon:s!==void 0,className:t,"data-unit":e,children:[s?i.jsx(s,{size:"1em"}):l?i.jsx("span",{"aria-hidden":"true",children:o}):o,l&&i.jsxs(gs,{"data-unit-word":"",children:[" ",r]})]})})]})}function rn({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:r,marked:s,elsewhere:a,...l}){const c=pn(e,{drawsReckoning:r}),d=s!=null&&!c.held&&c.shown!=null?{...c,held:!0,mark:s.kind,caption:s.caption}:c,{shown:h,held:f,mark:x,band:g}=d,m=a!=null&&a!==""&&h!=null,b=x??(m?"current":null),$=m?[d.caption,a].filter(Boolean).join("; "):d.caption,M=td(h,l),_=ed(),L=o===!0&&_,E=M===void 0?l:{...M,...l},A=eo(h?.magnitude,h?.unit,E),S=h==null||g===null||!f?null:ld(h,li(g,h.unit),E,A.rung),{anchor:O,tip:j}=Lt(cd($,S));return e!==void 0||t===void 0?i.jsxs(rd,{className:n,$mark:b,$elsewhere:m,...hs(d),...O,children:[A.value,!L&&i.jsx(Cn,{token:A.symbol,spaced:!0}),S!==null&&i.jsxs(sd,{"data-unit-band":"",children:[S.oneFigure?i.jsxs(i.Fragment,{children:[" (",i.jsx("span",{"aria-hidden":"true",children:"~"}),i.jsx(gs,{"data-unit-word":"",children:"approximately "}),S.lo]}):S.plusMinus===null?` (${S.lo} to ${S.hi}`:` ± ${S.plusMinus}`,!L&&i.jsx(Cn,{token:A.symbol,spaced:!0}),S.plusMinus===null?")":null]}),b!==null&&i.jsx(ls,{kind:b,elsewhere:m}),$!==null&&i.jsxs(ad,{"data-unit-currency":"",children:[", ",$]}),j]}):typeof t!="string"?i.jsx(ps,{$attached:!1,$icon:!1,className:n,children:t}):i.jsx(Cn,{token:t,className:n,spaced:!1})}const dd={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},ud={center:"center",start:"flex-start",baseline:"baseline"},hd=p.forwardRef(function({justify:t="between",align:n="center",gap:o,wrap:r=!1,children:s,...a},l){return i.jsx(fd,{ref:l,$justify:t,$align:n,$gap:o,$wrap:r,...a,children:s})}),fd=k.div`
  display: flex;
  align-items: ${({$align:e})=>ud[e]};
  justify-content: ${({$justify:e})=>dd[e]};
  gap: ${({$gap:e})=>e?Zt[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function fo(e){const t=fs(e.held);if(t===void 0)return{label:e.label,tone:e.tone,title:e.title};const n=hn(t);return{label:n,tone:Qt(t),title:e.title??`${e.label}: ${n}`}}function Oe(e,t){return At({magnitude:e,unit:t})}function pd(e,t){const{limit:n,actual:o,unit:r}=t;if(n==null||o==null)return null;switch(e){case Bt.LimitReached:{const s=gd(t.quantity),a=`${Oe(o,r)} of ${Oe(n,r)}`;return t.facilityName?`the ${t.facilityName} holds ${a} ${s}`:`it holds ${a} ${s}`}case Bt.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${Oe(o,r)} of ${Oe(n,r)}`;case Bt.InsufficientFunds:return`it costs ${Oe(o,r)} and funds are ${Oe(n,r)}`;case Bt.InsufficientScience:return`it costs ${Oe(o,r)} and science is ${Oe(n,r)}`;default:return null}}function gd(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function Zo(e){return e&&ts(e)?.sentence||null}function md(e){const t=e?.trim().replace(/\.$/,"");return t||null}function po(e){return ms(e,"refused")}function rm(e){return ms(e,"unavailable")}function ms(e,t){const n=dt(e),o=(e.breach?pd(e.errorCode,e.breach):null)??md(e.detail)??Zo(e.reason)??Zo(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function xs(e){const n=dt(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":xd(po({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function xd(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function vs(e){return`${dt(e)||e.command||"The command"}: no reply. May have run.`}function vd(){const e=ti();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const gn=ei(vd),sm=gn.Context;function am({children:e}){return i.jsx(gn.Provider,{children:i.jsx(yd,{children:e})})}function yd({children:e}){const t=gn.useStore();return i.jsx(fi.Provider,{value:t,children:e})}const go=gn.useStore,bd=()=>()=>{},wd=[],Qo=()=>wd;function kd(){const e=go();return p.useSyncExternalStore(e?e.subscribe:bd,e?e.getActiveHandles:Qo,e?e.getActiveHandles:Qo)}const $t=new WeakMap,Yn=new WeakMap;function Jo(e){for(const t of Yn.get(e)??[])t()}function $d(e){return $t.set(e,($t.get(e)??0)+1),Jo(e),()=>{$t.set(e,($t.get(e)??1)-1),Jo(e)}}function im(){const e=go();return p.useSyncExternalStore(t=>{if(!e)return()=>{};const n=Yn.get(e)??new Set;return Yn.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&($t.get(e)??0)>0,()=>!1)}function mn({children:e,"aria-label":t,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:r=!1,as:s="span",className:a}){const c={role:n?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":t,className:a,"data-live-region":""};return n?i.jsx(Ge,{as:s,...c,children:e}):p.createElement(s,c,e)}const _d=.72,Sd=.76;function Gn({size:e,kind:t="held",figureSize:n}){return i.jsx("tspan",{dy:n===void 0?-e*.55:-(n*_d-e*Sd),fontSize:e,fill:se[t].color,"data-held-mark":"","data-reckoning-mark":t,children:se[t].glyph})}function lm({end:e,x1:t,y1:n,x2:o,y2:r}){return i.jsx("line",{"data-bound":e,x1:t,y1:n,x2:o,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function ys(e,t){return t===null?e:`${e}, ${t}`}function jd(e){return e===null?{}:{"data-currency-in-name":""}}function cm({x:e,y:t,size:n,children:o}){return i.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function er(e,t){return t?.state!=="held"?e:{...t,value:e}}function sn(e){return e.kind==="continuous"?"ribbon":"dot"}function Md(e){return e.delivery==="acked"}function Ed(e){return e.direction==="command"?"outbound":"inbound"}function bs(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function xn(e){return`${e.direction}/${e.kind}/${e.delivery}`}const Ad={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function mo(e){return Ad[xn(e)]??null}const tr=new Set;function ws(e,t){const n=xn(e);if(tr.has(n))return;tr.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;ci()?di.error(o):console.error(o)}const ks=16,nr=ks/2,Pd=5.5,Cd=2,Rd=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function $s(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function Id(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/Cd)),Math.max(2,Math.round(o)))}function Ld(e,t,n){if(e.length===0)return"";const o=$s(e,t,n);if(!(o>0))return`M0.00,${nr.toFixed(2)}`;const r=Id(e,t,o),s=[];for(let a=0;a<=r;a++){const l=Math.min(a/r*o,o),c=Math.min(Math.round(l/n*t),e.length-1),d=Rd(e[e.length-1-c]),h=(a%2===0?-1:1)*d*Pd;s.push(`${l.toFixed(2)},${(nr+h).toFixed(2)}`)}return`M${s.join(" L")}`}const _s=.05,Td=.02,an=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],vn=100,_t=30,Od=1.5,ve=2,Nd=4,Ye=_t-ve-Nd,Ce=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(vn-n*2),Wt=e=>ve+(1-Math.max(0,Math.min(1,e)))*Ye,Ss=e=>e==="inline"?Od:0;function dm(e="inline"){const t=Ss(e);return(vn-t*2)/3}function js({tags:e,who:t}){return ws(e,t),i.jsx("g",{"data-rail-unrepresented":xn(e),"data-rail-entry":t})}function nt(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function or(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(c=>c.age>=t);if(n===-1)return[];const o=e[n-1],r=e[n],s=r.age-o.age||1,a=(t-o.age)/s,l=o.value+a*(r.value-o.value);return[{age:t,value:l},...e.slice(n)]}function rr(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(d=>d.age>t),r=e.slice(0,o),s=e[o],a=r[r.length-1];if(!a)return[{age:t,value:s.value}];const l=s.age-a.age||1,c=(t-a.age)/l;return[...r,{age:t,value:a.value+c*(s.value-a.value)}]}const Fd=.25;function sr(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>=o.age)return o.value;for(let r=1;r<e.length;r++){const s=e[r];if(t<=s.age){const a=e[r-1],l=(t-a.age)/(s.age-a.age||1);return a.value+l*(s.value-a.value)}}return o.value}function zd({stream:e,span:t,index:n,padX:o,oneT:r,twoT:s}){const l=`var(${an[n%an.length]})`,c=p.useId(),d=`cds-ramp-${c}-${n}`,h=`cds-fill-${c}-${n}`,f=`cds-tail-${c}-${n}`,x=mo(e.tags);if(x!=="continuous-strip")return x===null?i.jsx(js,{tags:e.tags,who:e.id}):null;const g=Md(e.tags),b=(g?e.inTransit:rr(e.inTransit,r)).map(z=>({x:Ce(z.age,t,o),y:Wt(z.value)}));if(b.length===0)return null;const M=(g?[]:rr(or(e.inTransit,r),r*(1+Fd))).map(z=>({x:Ce(z.age,t,o),y:Wt(z.value)})),_=M.length>1&&M[M.length-1].x>M[0].x,L=`${nt(b)} L${b[b.length-1].x.toFixed(2)},${(ve+Ye).toFixed(2)} L${b[0].x.toFixed(2)},${(ve+Ye).toFixed(2)} Z`,E=g?or(e.echo,s):[],A=E.map(z=>({x:Ce(z.age,t,o),y:Wt(z.value)})),S=E.map(z=>({x:Ce(z.age,t,o),y:Wt(sr(e.inTransit,z.age)??z.value)})),O=E.findIndex(z=>{const y=sr(e.inTransit,z.age);return y!==null&&Math.abs(z.value-y)>Td}),j=O!==-1,G=j?A.slice(0,O+1):A,N=j?A.slice(O):[],B=j?S.slice(O):[],I=!j||O>0;return i.jsxs("g",{"data-stream-group":e.id,"data-return-leg":g,children:[i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"1",y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.10"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0.40"})]}),i.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.22"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]}),_&&i.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:M[0].x,y1:"0",x2:M[M.length-1].x,y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.40"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]})]}),i.jsx("path",{"data-role":"area",d:L,fill:`url(#${h})`,stroke:"none"}),i.jsx("path",{"data-role":"commanded","data-stream":e.id,d:nt(b),fill:"none",stroke:`url(#${d})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),_&&i.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:nt(M),fill:"none",stroke:`url(#${f})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),G.length>0&&I&&i.jsx("path",{"data-role":"echo","data-stream":e.id,d:nt(G),fill:"none",stroke:l,strokeWidth:"0.8",strokeLinecap:"round"}),j&&i.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:nt(N),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),j&&i.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:nt(B),fill:"none",stroke:l,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]})}function Dd({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${p.useId()}`,o=e.tags,r=mo(o);if(r!=="continuous-strip")return r===null?i.jsx(js,{tags:o,who:e.id}):null;const s=(vn-t*2)/3,a=e.amplitudes,l=e.spanSamples??a.length,c=Ld(a,l,s);if(c==="")return null;const d=Math.max($s(a,l,s),1),h=`var(${bs(o)})`,f=Ed(o)==="outbound";return i.jsxs("g",{"data-ribbon-group":e.id,transform:`translate(${t} ${ve}) scale(1 ${Ye/ks})`,children:[i.jsx("defs",{children:i.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:f?0:d,y1:"0",x2:f?d:0,y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:h,stopOpacity:"0.9"}),i.jsx("stop",{offset:"1",stopColor:h,stopOpacity:"0.1"})]})}),i.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:c,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function Hd({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:r}){const s=`cds-divfade-${p.useId()}`,a=r?.state==="held",l=a?pn(r??null).caption:null,{anchor:c,tip:d}=Lt(l),h=[...e,...t].find(E=>E.oneWaySeconds!==null),f=h?.oneWaySeconds??null;if(!h||f===null||no(f)!=="shown")return null;const x=f>=_s;if(!x&&t.length===0)return null;const g=3*f,m=f,b=2*f,$=Ss(o),M=Ce(m,g,$),_=Ce(b,g,$),L=e.every(E=>E.inTransit.length===0&&E.echo.length===0)&&t.every(E=>E.amplitudes.length===0);return i.jsxs(Bd,{"data-oneway":f,"data-variant":o,$variant:o,...c,children:[i.jsxs(Wd,{$variant:o,$quiet:L,role:"img","aria-label":ys(n,l),...jd(l),viewBox:`0 0 ${vn} ${_t}`,preserveAspectRatio:"none",children:[i.jsx("defs",{children:i.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:ve,x2:"0",y2:ve+Ye,children:[i.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),i.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(x?e:[]).map((E,A)=>i.jsx(zd,{stream:E,span:g,index:A,padX:$,oneT:m,twoT:b},E.id)),t.map(E=>i.jsx(Dd,{ribbon:E,padX:$},E.id)),i.jsx("line",{"data-divider":"t",x1:M,x2:M,y1:ve,y2:ve+Ye,stroke:`url(#${s})`,strokeWidth:"0.4"}),i.jsx("line",{"data-divider":"2t",x1:_,x2:_,y1:ve,y2:ve+Ye,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&i.jsxs("g",{"data-role":"hover-labels",children:[i.jsxs("text",{x:M,y:ve-.4,textAnchor:"middle",fontSize:"2",children:[At(it("s",f),{decimals:1}),a&&i.jsx(Gn,{size:1.2})]}),i.jsxs("text",{x:_,y:ve-.4,textAnchor:"middle",fontSize:"2",children:[At(it("s",2*f),{decimals:1}),a&&i.jsx(Gn,{size:1.2})]}),i.jsx("text",{x:Ce(f/2,g,$),y:_t-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),i.jsx("text",{x:Ce(1.5*f,g,$),y:_t-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),i.jsx("text",{x:Ce(2.5*f,g,$),y:_t-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&i.jsxs(i.Fragment,{children:[i.jsxs(Xd,{"aria-hidden":"true",children:[i.jsxs("span",{children:["outgoing ",i.jsx("b",{children:"0"})]}),i.jsxs("span",{children:["echo"," ",i.jsx("b",{children:i.jsx(rn,{value:er(it("s",f),r),decimals:1})})]}),i.jsxs("span",{children:["confirmed"," ",i.jsx("b",{children:i.jsx(rn,{value:er(it("s",2*f),r),decimals:1})})]})]}),i.jsxs(Ud,{"aria-hidden":"true",children:[(x?e:[]).map((E,A)=>i.jsxs("span",{children:[i.jsx("i",{style:{background:`var(${an[A%an.length]})`}}),E.label]},E.id)),t.map(E=>i.jsxs("span",{"data-role":"legend-ribbon",children:[i.jsx("i",{style:{background:`var(${bs(E.tags)})`}}),E.label]},E.id)),x&&e.length>0&&i.jsxs("span",{"data-role":"legend-deviation",children:[i.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),d]})}const Bd=k.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,Wd=k.svg`
  display: block;
  width: 100%;
  /* The rail height is the band the Panel reserves, not a size the graph chose. */
  height: ${({$variant:e})=>e==="rail"?"var(--panel-rail-band)":e==="expanded"?"86px":"40px"};

  /* Strokes are scaled by 30/16 against the stretched 30-unit viewBox, so the trace is a real pixel wide in the band. */
  ${({$variant:e})=>e==="rail"?`[data-role="commanded"],
         [data-role="echo"],
         [data-role="deviation-expected"] { stroke-width: 1.5; }
         [data-role="deviation-actual"] { stroke-width: 1.88; }`:""}


  [data-role="hover-labels"] {
    opacity: ${({$quiet:e})=>e?1:0};
    fill: var(--color-text-muted);
    font-family: var(--font-family-mono);
  }
  &:hover [data-role="hover-labels"] {
    opacity: 1;
  }
`,Xd=k.div`
  display: flex;
  justify-content: space-between;
  /* The graph stays full-bleed; the zone labels inset to the standard content margin. */
  margin: 0 var(--gutter-panel);
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;

  b {
    color: var(--color-text-dim);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
`,Ud=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-legend);
  /* The legend sits at the standard content margin, with bottom room since the pinned rail has no padding. */
  margin: var(--outset-delay-legend);
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;

  span {
    display: inline-flex;
    align-items: center;
    gap: var(--gap-glyph);
  }
  i {
    display: inline-block;
    width: 10px;
    height: 2px;
  }
`,Yd=k.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function Ms({observed:e,modelled:t,write:n}){if(t==null)return null;if(n===void 0){const o=t;return Un(e,o,Xc())?i.jsx(ar,{children:i.jsx(rn,{value:o})}):null}return Un(e,t,uo(n))?i.jsx(ar,{children:n(t)}):null}function ar({children:e}){return i.jsx(Yd,{"data-modelled-alongside":"",children:i.jsx(so,{"data-held":"",kind:"modelled",caption:co,children:e})})}function um({value:e}){return i.jsxs(i.Fragment,{children:[i.jsx(rn,{value:e}),i.jsx(Ms,{observed:e.value,modelled:us(e)})]})}function Es({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,r=b=>ni(typeof b=="number"?b:b.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,a=us(s);if(s?.value!==void 0&&a!==void 0)return i.jsxs(i.Fragment,{children:[r(s.value),i.jsx(Ms,{observed:s.value,modelled:a,write:r})]});const l=pn(o,{drawsReckoning:!0}),{shown:c,held:d,mark:h,caption:f}=l,x=typeof e=="number"?e:c;if(x==null)return tn;const g=r(x),m=hs({...l,shown:x});return d?i.jsx(so,{...m,kind:h??"held",caption:f,children:g}):i.jsx("span",{"data-figure":m["data-figure"],children:g})}function yn(e){const t=p.useRef(null),[n,o]=p.useState(e),[r,s]=p.useState(null);return p.useEffect(()=>{t.current!==r&&s(t.current)}),p.useEffect(()=>{if(!r||typeof ResizeObserver>"u")return;const a=new ResizeObserver(l=>{for(const c of l)c.contentRect.width>0&&c.contentRect.height>0&&o({w:Math.floor(c.contentRect.width),h:Math.floor(c.contentRect.height)})});return a.observe(r),()=>a.disconnect()},[r]),{ref:t,size:n}}const Gd='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function As(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),r=n[o+1]??n[o-1];if(r&&r!==e){r.focus();return}const s=t.closest("[data-panel-rail-frame]"),a=s?s.parentElement?.querySelector("[data-panel-body]"):t.closest("[data-panel-body]");if(!a)return;const l=[...a.querySelectorAll(Gd)].find(c=>c!==e);if(l){l.focus();return}a.hasAttribute("tabindex")||a.setAttribute("tabindex","-1"),a.focus()}function xo(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const vo={"in-transit":.18,"awaiting-reply":.5,due:.62,overdue:.82,lost:.95};function Vd(e){const t=e.reachEtaSeconds,n=Kd(e);if(t===null||n===null)return vo[e.predictedPhase];const o=n-t;return Math.max(0,Math.min(1,o/(3*n)))}function Kd(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function qd(e){return e.map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:Vd(t),glyph:t.glyph??xo(t.label||t.command),...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function hm({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||no(e)!=="shown"?"none":n||ui({oneWaySeconds:it("s",e)})==="live"?"badge":t?"strip":"none"}const Zd={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},Vn={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Qd(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Zd[e.phase]}const bn=new Set(["overdue","lost"]),Jd=180,eu=96;function Ps(e){return At(it("s",Math.max(0,e)))}function tu(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const nu=1;function Cs(e){const t=hi(),n=p.useRef(t);n.current=t;const[o,r]=p.useState(e),s=p.useRef({eta:e,ut:Rn(t)});return p.useEffect(()=>{const a=s.current.eta;(a===null!=(e===null)||a!==null&&e!==null&&Math.abs(e-a)>=nu)&&(s.current={eta:e,ut:Rn(n.current)},r(e))},[e]),p.useEffect(()=>{const a=setInterval(()=>{const{eta:l,ut:c}=s.current;if(l===null)return;const d=Rn(n.current);if(d!==void 0){if(c===void 0){s.current={eta:l,ut:d};return}r(Math.max(0,l-(d-c)))}},1e3);return()=>clearInterval(a)},[]),o}function Rn(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function ou({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":r="In-flight commands",variant:s="inline",onDismiss:a}){const{ref:l,size:c}=yn({w:320,h:0});if(s==="rail")return e.length===0?null:i.jsx(iu,{items:e,"aria-label":r});if(s==="expanded")return e.length===0?null:i.jsx(hu,{items:e,"aria-label":r,onDismiss:a});const d=n!=="auto"?n:c.w>=Jd?"full":c.w>=eu?"compact":"badge";return e.length===0?null:d==="badge"?i.jsx(lu,{ref:l,items:e,mode:t,"aria-label":r}):i.jsx(Is,{ref:l,role:"list","aria-label":r,"data-mode":t,"data-density":d,$row:o==="row",children:e.map(h=>i.jsx(cu,{item:h,$compact:d==="compact"},h.id))})}const In=100,ir=16,ru=-4,su=9,au=.22;function iu({items:e,"aria-label":t}){const n=p.useId(),o=`${e.length} in flight`;return i.jsxs(du,{role:"img","aria-label":`${t}: ${o}`,viewBox:`0 0 ${In} ${ir}`,preserveAspectRatio:"none",children:[i.jsx("defs",{children:e.map((r,s)=>{const a=bn.has(r.phase)?re.warn:"var(--color-accent-fg)",c=Math.max(0,Math.min(1,r.progress??vo[r.phase]))*In;return i.jsxs("radialGradient",{id:`${n}-${s}`,gradientUnits:"userSpaceOnUse",cx:c,cy:ru,r:su,children:[i.jsx("stop",{offset:"0",stopColor:a,stopOpacity:au}),i.jsx("stop",{offset:"1",stopColor:a,stopOpacity:"0"})]},r.id)})}),e.map((r,s)=>i.jsx("rect",{"data-role":"glow","data-phase":r.phase,x:"0",y:"0",width:In,height:ir,fill:`url(#${n}-${s})`},r.id))]})}const lu=function({ref:t,items:n,mode:o,"aria-label":r}){const s=Cs(tu(n)),a=n.some(c=>bn.has(c.phase)),l=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${Ps(s)}`;return i.jsx(Ee,{text:n.map(c=>c.label).join(`
`),focusable:!0,children:i.jsx(Is,{ref:t,role:"group","aria-label":`${r}: ${l}`,"data-mode":o,"data-density":"badge",$row:!1,children:i.jsxs(Ls,{$phase:a?"overdue":"in-transit",children:[i.jsx(Ts,{"aria-hidden":"true",$pulse:!a,children:"↑"}),i.jsxs(Os,{children:[n.length,s!==null&&i.jsxs(i.Fragment,{children:[" · ",i.jsx(Es,{value:Math.max(0,s)})]})]})]})})})};function cu({item:e,$compact:t}){const n=Cs(e.etaSeconds),o=bn.has(e.phase),r=n===null?`${e.label}, ${Vn[e.phase]}`:`${e.label}, ${Ps(n)}`;return i.jsxs(Ls,{$phase:e.phase,role:"listitem",...t?{"aria-label":r,title:r}:{},children:[i.jsx(Ts,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Qd(e)}),!t&&i.jsx(wu,{children:e.label}),i.jsx(Os,{children:n===null?Vn[e.phase]:i.jsx(Es,{value:Math.max(0,n)})})]})}const du=k.svg`
  display: block;
  width: 100%;
  height: 16px;
`,Rs=54,Mt=5,yo=3,wn=Rs-8-Mt,ct=60,uu={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:re.warn,lost:re.warn};function hu({items:e,"aria-label":t,onDismiss:n}){const{ref:o,size:r}=yn({w:320,h:Rs}),a=r.w>=ct?r.w:r.h,l=Math.max(1,Math.floor((a-6)/(wn+yo))),d=e.length>l?e.slice(0,l-1):e,h=e.length-d.length;return i.jsx(pu,{ref:o,"data-command-list":"",children:i.jsxs(gu,{role:"list","aria-label":t,children:[d.map(f=>i.jsx(fu,{item:f,onDismiss:n},f.id)),h>0&&i.jsxs(yu,{role:"listitem","aria-label":`${h} more in flight`,children:["+",h]})]})})}function fu({item:e,onDismiss:t}){const n=e.glyph??xo(e.label),o=uu[e.phase],r=Math.max(0,Math.min(1,e.progress??vo[e.phase])),s=bn.has(e.phase)&&!!t,a=`${e.label}, ${Vn[e.phase]}`;return i.jsxs(mu,{role:"listitem","aria-label":a,"data-phase":e.phase,style:{color:o},children:[i.jsx(Ee,{text:s?`Dismiss ${e.label}`:a,announce:!1,children:i.jsxs(xu,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:l=>{As(l.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[i.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&i.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),i.jsx(vu,{children:i.jsx("span",{className:"fill",style:{"--fill-ratio":r}})})]})}const pu=k.div.attrs({role:"group"})`
  container-type: inline-size;
  /* Never shrinks in the rail's flex column, so a combined pinned rail shows the whole tile row. */
  flex: 0 0 auto;
  /* The row container the tiles sit in; its horizontal inset matches the standard content margin. */
  margin: var(--outset-command-strip);
  /* The inset equals (panel radius - tile radius), so the first tile's corner nests concentrically in the panel's. */
  --queue-panel-radius: calc(var(--radius-floating) * 2);
  --queue-tile-inset: calc(var(--queue-panel-radius) - var(--radius-regular));
  padding: var(--queue-tile-inset);
  height: calc(
    ${wn}px + ${Mt}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
`,gu=k.div`
  display: flex;
  flex-direction: column;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${yo}px;
  width: 100%;
  height: 100%;

  @container (min-width: ${ct}px) {
    flex-direction: row;
  }
`,mu=k.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @container (min-width: ${ct}px) {
    flex-direction: column;
  }
`,xu=k.div`
  --s: ${wn}px;
  flex: 0 0 var(--s);
  width: var(--s);
  height: var(--s);
  align-self: center;
  position: relative;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  appearance: none;
  font: inherit;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: currentColor;
  background: color-mix(in srgb, currentColor 10%, var(--color-surface-raised));
  border: 1px solid currentColor;
  border-right: 0;
  border-radius: var(--radius-regular) 0 0 var(--radius-regular);
  overflow: hidden;

  @container (min-width: ${ct}px) {
    border-right: 1px solid currentColor;
    border-bottom: 0;
    border-radius: var(--radius-regular) var(--radius-regular) 0 0;
  }

  .glyph {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: var(--color-text-primary);
  }
  .dismiss {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    opacity: 0;
    background: color-mix(in srgb, currentColor 22%, var(--color-surface-sunken));
  }

  &:is(button) {
    cursor: pointer;
  }
  &:is(button):hover .dismiss,
  &:is(button):focus-visible .dismiss {
    opacity: 1;
  }
  &:is(button):hover .glyph,
  &:is(button):focus-visible .glyph {
    opacity: 0;
  }
  /* Not the kit's shared ring: every other part of the tile follows the phase colour through currentColor. */
  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 1px;
  }
`,vu=k.div`
  --s: ${wn}px;
  position: relative;
  flex: 0 0 ${Mt}px;
  width: ${Mt}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${ct}px) {
    width: var(--s);
    height: ${Mt}px;
    border-radius: 0 0 var(--radius-regular) var(--radius-regular);
  }

  .fill {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(var(--fill-ratio, 0) * 100%);
    background: currentColor;
  }
  @container (min-width: ${ct}px) {
    .fill {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: calc(var(--fill-ratio, 0) * 100%);
      height: auto;
    }
  }
`,yu=k.span`
  align-self: center;
  flex: 0 0 auto;
  padding: 0 ${yo}px;
  font-size: var(--font-size-compact);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-muted);
`,Is=k.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: ${({$row:e})=>e?"row":"column"};
  flex-wrap: ${({$row:e})=>e?"wrap":"nowrap"};
  column-gap: var(--gap-command-list-column);
  gap: var(--gap-command-list-row);
  padding: var(--inset-command-list);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,bu={"in-transit":F`
    color: var(--color-text-primary);
  `,"awaiting-reply":F`
    color: var(--color-text-muted);
  `,due:F`
    color: var(--color-text-muted);
  `,overdue:F`
    color: ${ye.warn};
  `,lost:F`
    color: ${ye.warn};
  `},Ls=k.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>bu[e]}
`,Ts=k.span`
  flex: 0 0 auto;
  color: ${({$inherit:e})=>e?"inherit":"var(--color-accent-fg)"};

  ${({$pulse:e})=>e&&F`
      @media (prefers-reduced-motion: no-preference) {
        animation: in-flight-list-pulse 1.6s var(--ease-emphasis) infinite;
      }
    `}

  @keyframes in-flight-list-pulse {
    50% {
      opacity: 0.35;
    }
  }
`,wu=k.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Os=k.span`
  flex: 0 0 auto;
`;function ku({handle:e,handles:t,"aria-label":n,mode:o,density:r,orientation:s,variant:a="inline"}){const l=t??(e?[e]:[]),c=l.length===1?l[0]:null,d=c?mo(c.tags):null;if(c&&d===null)return i.jsx($u,{tags:c.tags,who:c["aria-label"]});if(c&&d!=="in-flight-row"){const g=c,m=g.effectiveDelaySeconds;return no(m)!=="shown"?null:i.jsx(Hd,{streams:g.streams??[],ribbons:g.ribbons??[],delayReading:g.delayReading,"aria-label":n??g["aria-label"],variant:a})}const h=qd(l.flatMap(g=>g.inFlight)),x=l.some(g=>g.dismiss)?g=>l.find(m=>m.inFlight.some(b=>b.id===g))?.dismiss?.(g):void 0;return i.jsx(ou,{items:h,"aria-label":n,mode:o,density:r,orientation:s,variant:a,onDismiss:x})}function $u({tags:e,who:t}){return ws(e,t??"unnamed handle"),i.jsx("span",{hidden:!0,"data-rail-unrepresented":xn(e)})}function Ns(e){const n=dt(e)||e.command||"The command",o=e.code===void 0?void 0:ts(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function Fs(e){return`${dt(e)||e.command||"The command"}: never sent. Safe to re-send.`}const _u={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed"},Su={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command"};function ju(e,t){return e.kind==="refused"?po(e.entries[t]):e.kind==="found"?xs(e.entries[t]):e.kind==="failed"?Ns(e.entries[t]):e.kind==="undelivered"?Fs(e.entries[t]):vs(e.entries[t])}function Mu(e){return e.entries.map((t,n)=>{const o=dt(t);return{id:t.id,subject:o||t.command||"",sentence:ju(e,n),dismissLabel:`Dismiss ${o||Su[e.kind]}`,tags:t.tags}})}function yt(e){const{kind:t,onDismiss:n,live:o=!0}=e,r=e["aria-label"]??_u[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const a=Mu(e).map(l=>i.jsxs(Pu,{role:o?void 0:"listitem",$tone:s,children:[sn(l.tags)==="ribbon"?i.jsx(Ru,{$tone:s,children:l.subject}):i.jsx(Cu,{"aria-hidden":"true",$tone:s,children:xo(l.subject)}),i.jsx(Iu,{children:l.sentence}),n&&i.jsx(Lu,{type:"button","data-dismiss":"",onClick:c=>{As(c.currentTarget),n(l.id)},"aria-label":l.dismissLabel,children:"✕"})]},l.id));return o?i.jsx(Au,{forwardedAs:"div","aria-label":r,"data-command-list":"",additionsOnly:!0,children:a}):i.jsx(Eu,{role:"list","aria-label":r,"data-command-list":"",children:a})}const zs=F`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,Eu=k.div`
  ${zs}
`,Au=k(mn)`
  ${zs}
  &:empty {
    margin: 0;
  }
`,Pu=k.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>re[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${re[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,Cu=k.span`
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  min-width: 34px;
  padding: var(--inset-glyph);
  align-self: stretch;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: ${({$tone:e})=>ye[e]};
  border: 1px solid ${({$tone:e})=>re[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${re[e]} 14%, var(--color-surface-raised))`};
`,Ru=k.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>ye[e]};
`,Iu=k.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,Lu=k.button`
  flex: 0 0 auto;
  appearance: none;
  padding: var(--inset-glyph);
  border: 0;
  background: transparent;
  color: var(--color-text-muted);
  font: inherit;
  font-size: var(--font-size-xs);
  cursor: pointer;

  &:hover,
  &:focus-visible {
    color: var(--color-text-primary);
  }
  ${Ve}
`;function lt(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,o)=>lt(n,t[o]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const n=[...t];return[...e].every(o=>{const r=n.findIndex(s=>lt(o,s));return r===-1?!1:(n.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[n,o]of e)if(!t.has(n)||!lt(o,t.get(n)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const n=e,o=t,r=new Set;for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of r)if(!lt(n[s],o[s]))return!1;return!0}return!1}function bo(e,t,n,o){const[r,s]=p.useState(o),a=p.useRef(t);a.current=t;const l=p.useRef(n);l.current=n;const c=p.useRef(r);return c.current=r,p.useEffect(()=>{if(!e)return;let d=c.current;const h=()=>{const g=a.current(e);l.current(d,g)||(d=g,s(g))};h(),e.addEventListener("scroll",h,{passive:!0});const f=new ResizeObserver(h);f.observe(e);for(const g of Array.from(e.children))f.observe(g);const x=new MutationObserver(()=>{for(const g of Array.from(e.children))f.observe(g);h()});return x.observe(e,{childList:!0,subtree:!0}),()=>{e.removeEventListener("scroll",h),f.disconnect(),x.disconnect()}},[e]),r}function Tu(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function Ds(e){return bo(e,Tu,Object.is,!1)?0:void 0}function Ou({label:e,selected:t,count:n,onToggle:o}){return i.jsxs(Nu,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[i.jsx("span",{children:e}),n!==void 0&&i.jsx(Fu,{children:n})]})}const Nu=k.button`
  ${lo("chip")}
  display: inline-flex;
  align-items: center;
  gap: var(--gap-glyph-control);
  padding: var(--inset-control-small);
  /* --radius-pill keeps the stadium shape through a padding change. */
  border-radius: var(--radius-pill);
  font-size: var(--font-size-compact);
  font-weight: 600;
  /* Sentence case: a real toggle button rather than a Badge, and its label is not the kit's to shout. */
  cursor: pointer;
  transition:
    background var(--duration-fast),
    border-color var(--duration-fast),
    color var(--duration-fast);

  background: ${({$selected:e})=>e?"var(--color-accent-fg)":"transparent"};
  color: ${({$selected:e})=>e?"var(--color-text-inverse)":"var(--color-text-dim)"};
  border: 1px solid
    ${({$selected:e})=>e?"var(--color-accent-fg)":"var(--color-border-subtle)"};

  &:hover {
    border-color: var(--color-accent-fg);
    color: ${({$selected:e})=>e?"var(--color-text-inverse)":"var(--color-text-primary)"};
  }

  ${Ve}
`,Fu=k.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function zu({value:e,onChange:t,clearLabel:n="Clear search",className:o,...r}){const s=p.useRef(null);return i.jsxs(Du,{className:o,children:[i.jsx(Hu,{...r,ref:s,type:"search",value:e,onChange:a=>t(a.target.value)}),e!==""&&i.jsx(Bu,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:i.jsx(zc,{size:"var(--icon-size-control)"})})]})}const Du=k.div`
  position: relative;
  display: flex;
  align-items: center;
`,Hu=k(Gi)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,Bu=k(Xi)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function fm({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=oi(e),r=[...new Set(o)],[s,a]=p.useState(()=>new Set),[l,c]=p.useState(""),d=p.useId(),h=m=>{a(b=>{const $=new Set(b);return $.has(m)?$.delete(m):$.add(m),$})},f=[...s,l].filter(m=>m.length>0).map(m=>m.toLowerCase()),x=i.jsxs(qr,{gap:"related-packed",children:[i.jsxs(Ui,{children:[i.jsx(Yi,{htmlFor:d,children:t}),i.jsx(zu,{id:d,value:l,placeholder:n,onChange:c})]}),r.length>0&&i.jsx(hd,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:r.map(m=>i.jsx(Ou,{label:m,selected:s.has(m),onToggle:()=>h(m)},m))})]}),g={matches:m=>{const b=m.toLowerCase();return f.every($=>b.includes($))},active:f.length>0};return Hs.set(g,x),g}const Hs=new WeakMap;function Bs(e){return Hs.get(e)??null}function pm({filter:e,children:t,fill:n=!1}){return i.jsxs(qr,{gap:"related-dense",fill:n,children:[Bs(e),t]})}const Wu=24,Xu=96;function Uu({children:e,padded:t,caption:n,footer:o,strip:r,...s}){const a=r!=null&&r!==!1;return i.jsxs(Yu,{$padded:t&&!a,$stacked:a,...s,children:[a?i.jsxs(i.Fragment,{children:[i.jsx(Gu,{$padded:t,children:e}),i.jsx(Vu,{"data-framed-display-strip":"",children:r})]}):e,n!=null&&i.jsx(Ws,{children:n}),o!=null&&i.jsx(Ku,{children:o})]})}const Yu=k.div`
  position: relative;
  display: flex;
  flex-direction: ${({$stacked:e})=>e?"column":"row"};
  min-height: 0;
  min-width: 0;
  /* Sunken: the visual sits inside the panel surface rather than floating on it. */
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  /* The container answers with a corner proportioned to the box, so a frame never needs to know its own size. */
  border-radius: var(--radius-display-frame);
  overflow: hidden;
  padding: ${({$padded:e})=>e?"var(--inset-framed-display)":"0"};

  /* A child SVG or canvas fills the frame instead of its intrinsic 300x150. */
  & > svg,
  & > canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`,Gu=k.div`
  flex: 7 1 0;
  display: flex;
  min-height: 0;
  min-width: 0;
  padding: ${({$padded:e})=>e?"var(--inset-framed-display)":"0"};

  & > svg,
  & > canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`,Vu=k.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${Wu}px;
  max-height: ${Xu}px;
  min-width: 0;
  overflow: hidden;
`,Ws=k.div`
  position: absolute;
  top: var(--offset-frame-caption-top);
  left: var(--offset-frame-caption-left);
  z-index: 1;
  padding: var(--inset-notice-pill);
  border-radius: var(--radius-regular);
  /* The smallest rung, flush, so the label covers as little of the drawing as it can. */
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  color: var(--color-text-muted);
  background: var(--color-surface-sunken);
  pointer-events: none;
`,Ku=k(Ws)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,lr={width:160,height:72},qu=2.5,Zu=420;function gm({width:e,height:t,plotHasData:n}){return!n&&e>=lr.width&&t>=lr.height?"center":e>=Zu&&e>=t*qu?"beside":"inline"}const Qu={overlay:F`
    position: absolute;
    bottom: var(--offset-graph-notice-bottom);
    left: var(--offset-graph-notice-left);
  `,center:F`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    text-align: center;
  `,inline:F`
    flex: 0 0 auto;
    align-self: flex-start;
    max-width: 100%;
    margin-top: var(--gap-sub-readout);
  `,beside:F`
    flex: 0 1 30%;
    align-self: flex-start;
    max-width: 40%;
  `};function Ju({placement:e,role:t="status",children:n,...o}){return i.jsx(eh,{$placement:e,role:t,...o,children:n})}const eh=k.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${ri.regular};
  pointer-events: none;

  ${({$placement:e})=>Qu[e]}
`,th={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function mm({cols:e,minColWidth:t,fit:n=!1,gap:o="related-dense",rowGap:r,align:s="center",children:a,...l}){return i.jsx(nh,{$cols:e,$minColWidth:t,$fit:n,$gap:o,$rowGap:r,$align:s,...l,children:a})}const nh=k.div`
  display: grid;
  align-items: ${({$align:e})=>th[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${Zt[t]} ${Zt[e]}`:Zt[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:n})=>e||(t?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`;function oh(e){if(sn(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return t===null||t<=0?!1:n>0||t>=_s&&o>0}return e.inFlight.length>0}function Xs({tiny:e}={}){const t=kd(),n=go();p.useEffect(()=>n?$d(n):void 0,[n]);const o=t.filter(oh),r=t.flatMap(y=>(y.refusals??[]).map(T=>({...T,tags:y.tags}))),s=t.flatMap(y=>(y.losses??[]).map(T=>({...T,tags:y.tags}))),a=t.flatMap(y=>(y.founds??[]).map(T=>({...T,tags:y.tags}))),l=t.flatMap(y=>(y.undelivered??[]).map(T=>({...T,tags:y.tags}))),c=t.flatMap(y=>(y.failures??[]).map(T=>({...T,tags:y.tags}))),d=r.length+l.length+c.length,h=o.length>0||d>0||s.length>0||a.length>0,[f,x]=p.useState(!1),[g,m]=p.useState(!1),[b,$]=p.useState(!1),M=f||g&&!b;p.useEffect(()=>{h||(x(!1),m(!1),$(!1))},[h]);const _=p.useId(),L=[...o.filter(y=>sn(y.tags)==="ribbon"),...o.filter(y=>sn(y.tags)!=="ribbon")],A=t.some(y=>y.dismiss&&(y.refusals?.length??0)>0)?y=>t.find(T=>T.refusals?.some(Q=>Q.id===y))?.dismiss?.(y):void 0,O=t.some(y=>y.dismiss&&(y.losses?.length??0)>0)?y=>t.find(T=>T.losses?.some(Q=>Q.id===y))?.dismiss?.(y):void 0,G=t.some(y=>y.dismiss&&(y.undelivered?.length??0)>0)?y=>t.find(T=>T.undelivered?.some(Q=>Q.id===y))?.dismiss?.(y):void 0,B=t.some(y=>y.dismiss&&(y.failures?.length??0)>0)?y=>t.find(T=>T.failures?.some(Q=>Q.id===y))?.dismiss?.(y):void 0,z=t.some(y=>y.dismiss&&(y.founds?.length??0)>0)?y=>t.find(T=>T.founds?.some(Q=>Q.id===y))?.dismiss?.(y):void 0;return i.jsxs(rh,{"data-panel-rail-frame":"",$tiny:e,$hasContent:h,children:[t.length>0&&i.jsxs(mn,{visuallyHidden:!0,additionsOnly:!0,children:[r.map(y=>i.jsx("span",{children:po(y)},`refusal:${y.id}`)),s.map(y=>i.jsx("span",{children:vs(y)},`loss:${y.id}`)),l.map(y=>i.jsx("span",{children:Fs(y)},`undelivered:${y.id}`)),c.map(y=>i.jsx("span",{children:Ns(y)},`failure:${y.id}`)),a.map(y=>i.jsx("span",{children:xs(y)},`found:${y.id}`))]}),h?i.jsxs(ah,{"data-panel-rail":"","data-grown":M,"data-pinned":f,"data-suppress-hover":b,onMouseEnter:()=>{$(!1),m(!0)},onMouseLeave:()=>m(!1),onKeyDown:y=>{y.key==="Escape"&&f&&(y.stopPropagation(),x(!1),$(!0))},children:[i.jsx(ih,{type:"button","aria-expanded":f,"aria-controls":_,"aria-label":"Signal-delay detail",onClick:()=>{x(y=>{const T=!y;return T||$(!0),T})},children:i.jsx(uh,{"aria-hidden":"true",hidden:!M,children:"▲"})}),i.jsxs(lh,{id:_,"data-panel-rail-detail":"",children:[L.map(y=>i.jsx(ku,{handle:y,variant:M?"expanded":"rail","aria-label":y["aria-label"]??(M?"Delay detail":void 0)},y.id)),!M&&(d>0||s.length>0||a.length>0)&&i.jsxs(ch,{children:[d>0&&i.jsx(cr,{children:d===1?"1 command failed":`${d} commands failed`}),s.length>0&&i.jsx(cr,{children:s.length===1?"1 command unconfirmed":`${s.length} commands unconfirmed`}),a.length>0&&i.jsx(dh,{children:a.length===1?"1 unconfirmed command answered":`${a.length} unconfirmed commands answered`})]})]})]}):null,M&&r.length>0&&i.jsx(yt,{kind:"refused",entries:r,onDismiss:A,live:!1}),M&&s.length>0&&i.jsx(yt,{kind:"lost",entries:s,onDismiss:O,live:!1}),M&&l.length>0&&i.jsx(yt,{kind:"undelivered",entries:l,onDismiss:G,live:!1}),M&&c.length>0&&i.jsx(yt,{kind:"failed",entries:c,onDismiss:B,live:!1}),M&&a.length>0&&i.jsx(yt,{kind:"found",entries:a,onDismiss:z,live:!1})]})}const rh=k.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,sh=F`
  display: flex;
  flex-direction: column;
  gap: var(--gap-delay-rail);
  /* A generous cap the grown content fits inside; the visible height settles at the content height. */
  max-height: 800px;
  /* Full-bleed, so the stream graph spans the widget edge to edge; each child owns its own inset. */
  padding: 0;

  & > *,
  & > [data-panel-rail-detail] > * {
    grid-area: auto;
  }
`,ah=k.div`
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;

  /* Height follows min(content, max-height), so animating max-height opens and collapses the rail (auto is not animatable). */
  display: grid;
  height: auto;
  /* The band, and nothing over it: the strip a widget reserves is the strip the rail fills. */
  max-height: var(--panel-rail-band);
  overflow: hidden;
  transition: max-height var(--duration-slow) var(--ease-standard);

  & > *,
  & > [data-panel-rail-detail] > * {
    grid-area: 1 / 1;
  }

  &:not([data-pinned="true"]) > [data-panel-rail-detail] > * {
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  /* Open (pinned or hover preview) grows past the band, driven by React state because the published height must be the grown one only. */
  &[data-grown="true"] {
    ${sh}
  }
`,ih=k.button`
  appearance: none;
  position: absolute;
  inset: 0;
  border: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;

  ${fn}

  &[aria-expanded="true"] {
    pointer-events: none;
  }

`,lh=k.div`
  display: contents;
`,cr=k.span`
  color: ${ye.warn};
`,ch=k.span`
  align-self: center;
  justify-self: end;
  display: flex;
  gap: var(--gap-rail-summaries);
  padding: 0 var(--gutter-panel);
  font-size: var(--font-size-compact);
  /* Flush, so single-line chrome text fits the reserved band on a coarse pointer too. */
  line-height: var(--line-height-flush);
  font-weight: 700;
  letter-spacing: 0.04em;
  white-space: nowrap;
  pointer-events: none;
`,dh=k.span`
  color: var(--color-info-text);
`,uh=k.span`
  position: absolute;
  top: var(--offset-rail-hint);
  right: var(--gutter-panel);
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  pointer-events: auto;
  cursor: pointer;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: calc(-1 * var(--outset-rail-hint-target));
  }
`,Us=p.createContext(null);function xm({badges:e,children:t}){return i.jsx(Us.Provider,{value:e,children:t})}function hh(){return p.useContext(Us)}function Ys({severity:e,count:t=1}){const n=t>1;return i.jsx(fh,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${Pt[e]}`:Pt[e],$mark:re[e],$digits:n?String(t).length:1,children:n&&i.jsx(ph,{$fill:Bn[e],$ink:Vr[e],children:t})})}const dr="8px",fh=k.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${dr};
  /* The count's own size, so the width below can be counted in its digits. */
  font-size: 7px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:dr};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,ph=k.span`
  /* Out of flow, centred over the fixed parent box with no say over its size. */
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: ${({$fill:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${({$ink:e})=>e};
  /* Below the --font-size-2xs floor, which would not fit the 8px dot. */
  font-size: inherit;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  line-height: var(--line-height-flush);
`,gh=()=>()=>{},ur=()=>si;function Gs(){const e=Zr();return p.useSyncExternalStore(e?e.subscribe:gh,e?e.getBreakdown:ur,e?e.getBreakdown:ur)}const mh=()=>()=>{},hr=()=>null;function xh(){const e=Zr();return p.useSyncExternalStore(e?e.subscribe:mh,e?e.getSummary:hr,e?e.getSummary:hr)}const Vs=F`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,vh=12;function yh(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function bh(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const r=o<e?t-vh:t;if(n[o]<=r)return o}return n.length-1}function wh(e,t,n){const[o,r]=p.useState(0),s=p.useRef(o);s.current=o;const a=[t,...n].join(`
`),l=p.useCallback(()=>{const c=e.current,d=a.split(`
`);if(!c||d.length<2){s.current!==0&&(s.current=0,r(0));return}const h=d.map(x=>yh(c,x)),f=bh(s.current,c.clientWidth,h);f!==s.current&&(s.current=f,r(f))},[e,a]);return p.useLayoutEffect(()=>{l()},[l]),p.useEffect(()=>{const c=e.current;if(!c||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>l());return d.observe(c),()=>d.disconnect()},[e,l]),{index:o,compacted:o>0}}const kh=24;function $h(e,t,n,o,r=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&r?!(t>n+kh):n>t}function fr(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const r=e.cloneNode(!0);n!==void 0&&(r.textContent=n),Object.assign(r.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),r.setAttribute("aria-hidden","true"),o.insertBefore(r,e.nextSibling);const s=r.getBoundingClientRect().width;return o.removeChild(r),s}const _h={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function bt(e){return Number.parseFloat(e)||0}function Sh(e,t,n,o){const[r,s]=p.useState(!1),a=p.useRef(r);a.current=r;const l=p.useRef(void 0),c=p.useRef(void 0),d=p.useRef(!1),h=p.useRef(o);h.current=o;const f=p.useCallback(()=>{const g=e.current;if(!g)return;const m=getComputedStyle(g),b=g.getBoundingClientRect().width-bt(m.paddingLeft)-bt(m.paddingRight),$=fr(t.current,{},h.current),M=fr(n.current,_h),_=n.current?.closest("[data-panel-aside-expand]")?.parentElement,L=_?getComputedStyle(_):null,E=$===0||M===0?$+M:$+bt(m.columnGap)+bt(L?.paddingLeft??"")+bt(L?.paddingRight??"")+M,A=a.current,S=b>0&&c.current!==void 0&&b<c.current;A&&S&&(d.current=!0);const O=$h(A,b,E,l.current,d.current);O!==A&&(d.current=O&&S),b>0&&(c.current=b),E>0&&(l.current=E),O!==a.current&&(a.current=O,s(O))},[e,t,n]),x=p.useRef({title:null,aside:null,observer:null});return p.useLayoutEffect(()=>{const g=t.current,m=n.current,b=x.current;if(b.observer===null||b.title!==g||b.aside!==m){b.observer?.disconnect(),b.title=g,b.aside=m,b.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>f());for(const $ of[g,m])$&&b.observer?.observe($,{subtree:!0,childList:!0,characterData:!0,attributes:!0});f();return}b.observer.takeRecords().length>0&&f()}),p.useEffect(()=>{const g=x.current;return()=>{g.observer?.disconnect(),g.observer=null}},[]),p.useEffect(()=>{const g=e.current;if(!g||typeof ResizeObserver>"u")return;const m=new ResizeObserver(()=>f());return m.observe(g),n.current&&m.observe(n.current),()=>m.disconnect()},[e,n,f]),r}const Ks=p.createContext("full"),jh=Ks.Provider;function vm(){return p.useContext(Ks)}const wo=p.createContext(null);function qs({children:e}){const[t,n]=p.useState(null),o=p.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return i.jsx(wo.Provider,{value:o,children:e})}function Mh({children:e}){return i.jsx(qs,{children:e})}const Zs=`
  & > [${Jr}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,ln=k.div`
  /* Chrome only: border, surface and clip. The inset is Panel.Body's and the glow is Panel.Glow's. */
  background: var(--color-surface-panel);
  /* A size container, so the popped-open aside sizes itself in cqw against the panel's width. */
  container-type: inline-size;
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  /* Top only: the delay rail's band, reserved on every widget so a command in flight never pushes the title down. Sides and bottom stay zero so visual content can reach the chrome. */
  padding: var(--panel-rail-band) 0 0;
  /* When the rail travels with the header, the band is the sticky unit's first row instead. */
  ${({$railTravels:e})=>e?"padding-top: 0;":""}
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow: hidden;
  /* A hoverTitle panel is itself the tab stop, and the grid cell clips an outset ring, so the ring is drawn inside the edge. */
  ${({$hoverTitle:e})=>e?"position: relative;":""}
  ${({$hoverTitle:e})=>e?fn:""}
  /* A hand-composed panel can put sections straight in here, so this box owns the leftover height. */
  ${Zs}
`,Eh=k.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${Vs}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Qs=p.forwardRef(function({compact:t,children:n,...o},r){const s=p.useRef(null),a=typeof n=="string"?n:"",l=t===void 0||a===""?Ah:typeof t=="string"?[t]:t,{index:c,compacted:d}=wh(s,a,l);return i.jsx(Ee,{text:d?a:void 0,children:i.jsx(Eh,{...o,ref:h=>{if(s.current=h,typeof r=="function"){r(h);return}r&&(r.current=h)},"aria-label":d?a:void 0,children:c===0?n:l[c-1]})})}),Ah=[],Ph=k.div`
  padding-top: var(--inset-panel-header-top);
  display: flex;
  /* Centred, which levels the collapsed dots and chevron on the single-line title. */
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-panel-header);
  min-width: 0;
  /* Wraps so PanelToolbar's full basis starts its own line; the aside never wraps, because the title column absorbs the pressure first. */
  flex-wrap: wrap;
  /* Never shrink, or a short tile's body would overprint the title. */
  flex-shrink: 0;
`,Ch=k.div`
  min-width: 0;
  /* A zero basis, so a long title shrinks beside the aside instead of wrapping it onto a second line; useFittedTitle measures the room this leaves. */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  display: flex;
  align-items: center;
  & > h3 {
    flex: 1 1 auto;
    min-width: 0;
  }
`,Rh=k.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,Ih=k.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,Lh=k.details`
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
  /* Drops the ::details-content box, which otherwise breaks this element's shrink-to-fit sizing. */
  &::details-content {
    display: contents;
  }
  /* Exactly its content wide: the inline aside, or the dots summary once collapsed. */
  flex: 0 0 auto;

  & > summary {
    /* Wide default: no collapsed affordance, the aside just shows inline. */
    display: none;
    align-items: center;
    gap: var(--gap-panel-aside);
    list-style: none;
    cursor: pointer;
    /* Lands the dots on the title's cap band rather than its line box centre. */
    transform: translateY(-1px);
    /* Panel sets no foreground, so the currentColor chevron needs one. */
    color: var(--color-text-dim);
  }
  & > summary {
    ${Ve}
  }
  & > summary::-webkit-details-marker {
    display: none;
  }
  & > summary [data-panel-aside-chevron] {
    /* A CSS caret, not an icon, so the header stays out of every widget's SVG queries. Points down closed. */
    flex: 0 0 auto;
    width: 6px;
    height: 6px;
    /* Extra space before the chevron only: the rotated box's corner eats into the gap. */
    margin-left: var(--gap-panel-aside);
    border-right: 1.5px solid currentColor;
    border-bottom: 1.5px solid currentColor;
    /* The rotation leaves the ink centroid 1.4px low; the lift centres it on the dots. */
    transform: translateY(-1.4px) rotate(45deg);
    transition: transform var(--duration-base) var(--ease-standard);
  }
  &[open] > summary [data-panel-aside-chevron] {
    /* Points up when open; the centroid moves above centre, so the lift flips sign. */
    transform: translateY(1.4px) rotate(225deg);
  }

  & > [data-panel-aside-full] {
    /* Wide default: the full aside shows inline whatever the [open] state. */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--gap-panel-aside);
    flex-wrap: wrap;
    min-width: 0;
  }

  ${({$collapsed:e})=>e&&F`
      & > summary {
        display: inline-flex;
      }
      /* Hidden rather than display: none, so useHeaderAsideFit's clone measurement sees it as it sees the inline state. */
      &:not([open]):not([data-hovering]) > [data-panel-aside-full] {
        position: absolute;
        top: 0;
        right: 0;
        visibility: hidden;
        pointer-events: none;
      }
      /* Collapsed and open, or held open by the pointer: floats over the body so its controls do not reflow the panel. */
      &[open] > [data-panel-aside-full],
      &[data-hovering] > [data-panel-aside-full] {
        position: absolute;
        top: calc(100% + var(--offset-popover));
        right: 0;
        /* Widget-internal stacking above the header, off the app-global z ladder. */
        z-index: 3;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        flex-wrap: nowrap;
        /* A real floor so a control has room, capped at the panel width. */
        min-width: min(14rem, 90cqw);
        max-width: 90cqw;
        padding: var(--inset-popover);
        background: var(--color-surface-panel);
        border: 1px solid var(--color-border-subtle);
        border-radius: var(--radius-regular);
        box-shadow: var(--shadow-popover-drop)
          rgba(0, 0, 0, 0.35);
      }
    `}
`,Th=120;function Js(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${Pt[n.severity]}`:`${Pt[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function ea({title:e,compactTitle:t,aside:n,toolbar:o,...r}){const s=Gs(),a=p.useRef(null),l=p.useRef(null),c=p.useRef(null),d=Sh(a,l,c,typeof e=="string"?e:void 0),[h,f]=p.useState(!1),[x,g]=p.useState(!1),m=p.useRef(null),b=p.useRef(null),$=p.useRef(null),M=p.useCallback(()=>{m.current!==null&&clearTimeout(m.current),m.current=null},[]);p.useEffect(()=>{d||(f(!1),g(!1))},[d]),p.useEffect(()=>M,[M]);const _=d&&(h||x);p.useEffect(()=>{if(!_)return;const S=j=>{j.key==="Escape"&&b.current?.contains(document.activeElement)&&(j.stopPropagation(),M(),g(!1),f(!1),$.current?.focus())},O=j=>{b.current?.contains(j.target)||(M(),g(!1),f(!1))};return document.addEventListener("keydown",S,!0),document.addEventListener("pointerdown",O,!0),()=>{document.removeEventListener("keydown",S,!0),document.removeEventListener("pointerdown",O,!0)}},[_,M]);const L=d?Js(s):null,{anchor:E,tip:A}=Lt(_?null:L);return i.jsxs(Ph,{ref:a,"data-panel-header":"",...r,children:[i.jsxs(Ch,{children:[e!==void 0&&i.jsx(Qs,{ref:l,compact:t,children:e}),i.jsx(Rh,{"aria-hidden":"true",children:i.jsx(on,{children:null})})]}),n!==void 0&&i.jsx(Ih,{children:i.jsxs(Lh,{ref:b,"data-panel-aside-expand":"","data-hovering":d&&x?"":void 0,$collapsed:d,open:d?h:!0,onToggle:S=>{d&&(f(S.currentTarget.open),S.currentTarget.open||g(!1))},onPointerEnter:S=>{!d||S.pointerType==="touch"||(M(),g(!0))},onPointerLeave:S=>{S.pointerType!=="touch"&&(M(),m.current=setTimeout(()=>{m.current=null,g(!1)},Th))},children:[i.jsxs("summary",{ref:$,"data-tooltip":E["data-tooltip"],onPointerDown:E.onPointerDown,onPointerUp:E.onPointerUp,onFocus:E.onFocus,onBlur:E.onBlur,"aria-description":L??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(S=>`${S.count} ${Pt[S.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(S=>i.jsx(Ys,{severity:S.severity,count:S.count},S.severity)),i.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),A,i.jsx(jh,{value:d?"collapsed":"full",children:i.jsx("div",{"data-panel-aside-full":"",ref:c,children:n})})]})}),o!==void 0&&i.jsx(ta,{children:o})]})}const ta=k.div`
  ${lo("panel-toolbar")}
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--gap-control-row);
  padding: var(--inset-panel-toolbar);
  min-width: 0;
  /* Never shrink, or a short tile squeezes the controls away. */
  flex-shrink: 0;
  /* A full basis, so the toolbar always takes its own line in the wrapping header row. */
  flex-basis: 100%;
  width: 100%;
  /* Opaque: the sticky header's scroll glow only masks its top strip, so a tall toolbar would let scrolled rows draw through it. */
  background: var(--color-surface-panel);
`,Oh=k.div`
  --gap-related: var(--gap-related-comfortable);
  --gap-section: var(--gap-section-comfortable);
  --bleed-inline: var(--gutter-panel);
  /* The body's side and bottom inset; a lone framed drawing steps this down under a narrow container. */
  --panel-body-gutter: var(--gutter-panel);
  --panel-body-bottom: var(--inset-panel-bottom);

  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  padding-top: var(--inset-panel-top);
  padding-right: var(--panel-body-gutter);
  padding-bottom: var(--panel-body-bottom);
  padding-left: var(--panel-body-gutter);
  /* Body is the scroller, so the inset sits inside the scrolling box and never clips overflow. */
  overflow: auto;
  ${fn}
  /* The glow shows scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
  /* Fit-to-size never scrolls, and centres only once measurement says the content fits: Firefox clips safe center while reporting support for it. */
  ${({$fitToSize:e})=>e?"flex: 1; overflow: hidden;":""}
  ${({$loneFrame:e})=>e?`@container (width < ${Nh}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${Zs}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${Jr}] {
           min-height: 0;
         }`:""}
`,Nh="25rem";function na({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...r}){const a=p.useContext(wo)?.registerScroller,[l,c]=p.useState(null),d=p.useCallback(f=>{a?.(f),c(f)},[a]),h=Ds(l);return i.jsx(Oh,{ref:d,tabIndex:h,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...r,children:e})}const Fh="13rem",zh=k.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      max(
        min(${({$min:e})=>e}, 100%),
        ${({$columns:e})=>`calc((100% - ${e-1} * var(--gap-panel-columns)) / ${e})`}
      ),
      1fr
    )
  );
  /* Wider between columns than rows: a column gap has no section title doing the separating. */
  gap: var(--gap-panel-sections) var(--gap-panel-columns);
  /* Natural heights, so a short section beside a tall one does not read as an empty box. */
  align-items: start;
  & > [${ai}] {
    grid-column: 1 / -1;
  }
`;function Dh({children:e,hoverTitle:t}){const n=p.useRef(null),o=p.useRef(null),r=Wh(n,o);return i.jsx(Hh,{ref:n,$fits:r,"data-panel-fit-body":"",children:i.jsx(Bh,{ref:o,$fits:r,$hoverTitle:t,children:e})})}const Hh=k.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,Bh=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Aligned like its box: centring here would push overflowing content up under the header. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
  /* The delay rail band above still reserves its own strip on a hoverTitle
     panel (see PanelProps.hoverTitle), so the box this centres within is
     shorter at the top than the panel actually is, by the band's own height.
     Centred content would read as sitting low by half of it, the same way it
     would if the box below a real header were centred on the whole panel
     instead of the room under that header. The band has no visible header to
     read as the reason, so the shift here is what keeps the figure reading as
     centred on the panel while the box itself stays exactly what fitToSize's
     own docs promise: never clipped, and unaffected while the content does
     not fit.

     The flex centring above absorbs half of any margin change into its own
     free-space split (a flex item's centred position moves by m/2 for a
     margin-top of m, not m), so the full band's height is what actually
     buys the half-band visual shift this needs. */
  ${({$fits:e,$hoverTitle:t})=>e&&t?"margin-top: calc(-1 * var(--panel-rail-band));":""}
  gap: var(--gap-tiny-content);
  min-height: 0;
  /* A query container, so a tiny presentation sizes its headline in cqw against the tile rather than the viewport. */
  container-type: inline-size;
`;function Wh(e,t){const[n,o]=p.useState(!0);return p.useLayoutEffect(()=>{const r=e.current,s=t.current;if(!r||!s)return;const a=()=>{o(Uh(Xh(s),r.clientHeight))};if(a(),typeof ResizeObserver>"u")return;const l=new ResizeObserver(a),c=()=>{l.observe(r),l.observe(s);for(const h of Array.from(s.children))l.observe(h)};c();const d=new MutationObserver(()=>{c(),a()});return d.observe(s,{childList:!0}),()=>{l.disconnect(),d.disconnect()}},[e,t]),n}function Xh(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function Uh(e,t){return e<=t}const Yh=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,Gh=k.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${fn}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,cn=k.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e,$topOffset:t})=>e==="top"?`top: ${t??"0"};`:"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: 44px;
  /* The audit reads the mask depth from the gradient, so the literal height costs it nothing. */
  ${Vi("panel-scroll-glow")}
  pointer-events: none;
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity var(--duration-base) var(--ease-standard);
  /* A light affordance tint over a fully opaque panel-colour mask; only an opaque mask keeps scrolled content from ghosting through the sticky title. */
  background:
    linear-gradient(
      ${({$position:e})=>e==="top"?"to bottom":"to top"},
      color-mix(
        in srgb,
        color-mix(in srgb, var(--color-surface-panel), white 20%) 55%,
        transparent
      ),
      transparent 40%
    ),
    linear-gradient(
      ${({$position:e})=>e==="top"?"to bottom":"to top"},
      var(--color-surface-panel) 0%,
      var(--color-surface-panel) 27%,
      transparent 50%
    );
  /* Widget-internal stacking, off the app-global z ladder so it never lifts over dashboard chrome. */
  z-index: 1;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Vh=p.forwardRef(function({children:t,...n},o){const r=p.useRef(null),[s,a]=p.useState(null),l=p.useCallback(h=>{r.current=h,a(h)},[]);p.useImperativeHandle(o,()=>r.current);const c=bo(s,sa,aa,ra),d=Ds(s);return i.jsxs(Yh,{...n,children:[i.jsx(Gh,{ref:l,tabIndex:d,"data-scroll-area-inner":"",children:t}),i.jsx(cn,{$position:"top",$visible:c.top}),i.jsx(cn,{$position:"bottom",$visible:c.bottom})]})});function Kh(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const pr="14rem",qh=5,Zh="45%",Qh=`min(${pi(1,qh).pxH}px, ${Zh})`;function gr(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const Jh=k.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${gr(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${gr(t,n)};`}

  /* Visual placement only: the sidebar always follows the body in the DOM, so reading and tab order never depend on its side. */
  ${({$side:e})=>e==="start"?"& > [data-panel-sidebar] { order: -1; }":""}

  /* The sidebar gets the rail band when the rail travels with the header, since only the body's scroller holds it. Under the body it is nowhere near the header, so it takes none. */
  ${({$railBand:e,$axis:t,$side:n})=>e&&!(t==="block"&&n==="end")?`& > [data-panel-sidebar] {
           padding-block-start: var(--panel-rail-band);
         }`:""}

  /* Under the body the sidebar follows the body's own bottom inset, so it takes a small top inset rather than the panel's. */
  ${({$axis:e,$side:t})=>e==="block"&&t==="end"?`& > [data-panel-sidebar] > * > [data-scroll-area-inner] {
           padding-top: var(--inset-panel-sidebar-under);
         }`:""}

  /* On the inline axis the sidebar gives back its inset on the edge facing the body, which already pays one. */
  ${({$axis:e,$side:t})=>e==="inline"?`& > [data-panel-sidebar] > * > [data-scroll-area-inner] {
           padding-inline-${t==="start"?"end":"start"}: 0;
         }`:""}
`;function ef({side:e="end",size:t,railBand:n,children:o,...r}){const{ref:s,size:a}=yn({w:1,h:1}),l=Kh(t??pr),c=a.w<=1||l===void 0||a.w>=l*2,d=a.w>=a.h&&c?"inline":"block",h=t??(d==="inline"?pr:Qh);return i.jsx(Jh,{ref:s,"data-panel-split":d,$axis:d,$side:e,$size:h,$railBand:n,...r,children:o})}const tf=k(Vh)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,nf=k.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function oa({children:e,...t}){return i.jsx(nf,{"data-panel-sidebar":"",...t,children:i.jsx(tf,{children:e})})}const ra={top:!1,bottom:!1};function sa(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function aa(e,t){return e.top===t.top&&e.bottom===t.bottom}const of=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function ia({children:e,railBandAbove:t,...n}){const o=p.useContext(wo),r=o?.scroller??null;p.useEffect(()=>{},[o]);const s=bo(r,sa,aa,ra);return i.jsxs(of,{...n,children:[e,i.jsx(cn,{$position:"top",$visible:s.top,$topOffset:t?"var(--panel-rail-band)":void 0}),i.jsx(cn,{$position:"bottom",$visible:s.bottom})]})}function rf(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const ym=["sections","actions"],Xt=Object.freeze({});function sf({summary:e}){const t=p.useRef(e.severity),[n,o]=p.useState(0);p.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const r=Js(Gs());return i.jsx(af,{$pulse:n,children:i.jsx(Ee,{text:r,focusable:!0,children:i.jsx(on,{tone:e.severity,size:"sm",children:e.label})})})}const af=k.span`
  display: inline-flex;
  ${({$pulse:e})=>e>0&&F`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${e%2===0?"panel-status-pulse":"panel-status-pulse-b"}
          var(--duration-slow) var(--ease-emphasis);
      }
    `}
  @keyframes panel-status-pulse-b {
    0% {
      transform: scale(1);
    }
    35% {
      transform: scale(1.14);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes panel-status-pulse {
    0% {
      transform: scale(1);
    }
    35% {
      transform: scale(1.14);
    }
    100% {
      transform: scale(1);
    }
  }
`,la=k.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,lf=k.div`
  position: sticky;
  /* Reach the scroller's true top edge, cancelling the body's own top inset. */
  top: calc(-1 * var(--inset-panel-top));
  z-index: 2;
  /* Cancel the body's inset so the unit spans the full panel width. */
  margin: calc(-1 * var(--inset-panel-top)) calc(-1 * var(--panel-body-gutter))
    0;
  display: flex;
  flex-direction: column;
  /* Never shrink, or a short tile crushes the band and the title. */
  flex-shrink: 0;

  /* The band is this unit's own first row, so the rail frame does not pull up into container padding. */
  & > [data-panel-rail-frame] {
    margin-top: 0;
  }
`;function cf({render:e}){const{ref:t,size:n}=yn({w:0,h:0});return i.jsx(df,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const df=k.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,uf=k.div`
  flex: 1 1 100%;
  min-width: 0;
`,hf=k(ea)`
  /* Transparent: the panel glow under it is its backing. */
  /* The rail band above is this header's top inset. */
  padding-top: 0;
  /* The one header that reads over scrolled content gets a title a notch brighter than the dim chrome token. */
  & h3 {
    color: color-mix(
      in srgb,
      var(--color-text-dim),
      var(--color-text-primary) 45%
    );
  }
`,ff=k.div`
  position: absolute;
  top: var(--inset-tiny);
  left: var(--inset-tiny);
  right: var(--inset-tiny);
  /* Above the panel's own content (PanelGlow, trend, footer), local sibling ordering inside this panel's own stacking context. Not app-global chrome, so no named z rung. */
  z-index: 3;
  display: flex;
  align-items: flex-start;
  gap: var(--gap-panel-aside);
  pointer-events: none;
`,pf=k(Ge)`
  margin: 0;
  ${Vs}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${ln}:hover &,
  ${ln}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function gf(e){let t=null;for(const n of e){const{label:o,tone:r}=fo(n);r===void 0||r==="neutral"||(t===null||Uo(r)>Uo(t.severity))&&(t={severity:r,label:o})}return t}function mr({badges:e}){return i.jsx(i.Fragment,{children:e.map(t=>i.jsx(mf,{entry:t},t.id))})}function mf({entry:e}){const{label:t,tone:n}=fo(e);return Jn(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:t}),null}function xf({summary:e,announcement:t}){return i.jsxs(i.Fragment,{children:[i.jsx(Ee,{text:e.label,focusable:!0,children:i.jsx(vf,{children:i.jsx(Ys,{severity:e.severity})})}),i.jsx(mn,{visuallyHidden:!0,assertive:!0,children:t})]})}const vf=k.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,yf=k.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function bf(e){return e.hoverTitle?i.jsx(wf,{...e}):i.jsx(ca,{...e,hoverTitleId:void 0})}function wf(e){const t=p.useId();return i.jsx(ca,{...e,hoverTitleId:t})}function ca({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:r,panelToolbar:s,panelFilter:a,panelFooter:l,panelTrend:c,inactive:d,fitToSize:h,hoverTitle:f,hoverTitleId:x,panelSidebar:g,sidebarSide:m,sidebarSize:b,sections:$,sectionMinWidth:M=Fh,children:_,...L}){const E=hh(),A=Wo("actions"),S=Wo("sections"),O=rf(o,E),j=O.length===0?null:O.map(q=>{const{label:de,tone:me,title:Ie}=fo(q);return i.jsx(Ee,{text:Ie,focusable:!0,children:i.jsx(on,{tone:me,report:me===void 0||me==="neutral"?void 0:{id:q.id},children:de})},q.id)}),G=a===void 0?s:i.jsxs(i.Fragment,{children:[s,i.jsx(uf,{children:Bs(a)})]}),N=r??null,B=N!==null&&N!=="none"&&N!=="live"?N:null;Jn(B?{id:"stream",severity:Qt(B),label:Xo(B)??""}:null);const I=xh(),z=I!==null&&O.some(q=>q.id===I.id),y=B===null?null:Xo(B),T=z?null:I!==null?i.jsx(sf,{summary:I}):B===null||y===null?null:i.jsx(Ee,{text:`Telemetry stream: ${y}`,focusable:!0,children:i.jsx(on,{tone:Qt(B),size:"sm",children:y})}),Q=I?.label??y,ie=Q===null||Q===""?"":typeof e=="string"?`${e}: ${Q}`:`Status: ${Q}`,Ke=n===void 0&&T===null&&j===null&&!A?void 0:i.jsxs(i.Fragment,{children:[n,A&&i.jsx(Dt,{segment:"actions",props:Xt}),j,T]}),we=I??gf(O)??(B===null||y===null?null:{severity:Qt(B),label:y}),ze=we?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${we.label}`:`Status: ${we.label}`,ke=n===void 0&&we===null&&!A?O.length===0?void 0:i.jsx(mr,{badges:O}):i.jsxs(i.Fragment,{children:[n,A&&i.jsx(Dt,{segment:"actions",props:Xt}),i.jsx(mr,{badges:O}),we!==null&&i.jsx(xf,{summary:we,announcement:ze})]}),le=d!==void 0,Me=le?[]:p.Children.toArray($),fe=Me.length>0,J=_===void 0&&!S&&!h&&Me.length===1&&kf(Me[0]),ee=[];for(const q of Me){const de=!h&&p.isValidElement(q)&&q.props.fill===!0,me=ee.at(-1);!de&&me!==void 0&&!me.fill?me.nodes.push(q):ee.push({fill:de,nodes:[q]})}fe&&!ee.some(q=>!q.fill)&&ee.push({fill:!1,nodes:[]});const De=ee.reduce((q,de,me)=>de.fill?q:me,-1),He=q=>Math.max(1,q.filter(de=>!(p.isValidElement(de)&&de.props.full===!0)).length),$e=[];for(const q of ee){const de=$e.length;if(q.fill){$e.push(q.nodes[0]);continue}$e.push(i.jsxs(zh,{$min:M,$columns:He(q.nodes),children:[q.nodes,de===De&&i.jsx(Dt,{segment:"sections",props:Xt})]},`sections-${de}`))}const ae=le?i.jsx(ii,{reason:d}):fe?i.jsxs(i.Fragment,{children:[_,$e]}):_,ce=i.jsxs(na,{fitToSize:h,loneFrame:J,hoverTitle:f,children:[i.jsxs(lf,{"data-panel-sticky-top":"",children:[i.jsx(Xs,{tiny:f}),!f&&i.jsx(hf,{title:e,compactTitle:t,aside:Ke,toolbar:G})]}),h?i.jsx(Dh,{hoverTitle:f,children:ae}):ae,!fe&&!le&&i.jsx(Dt,{segment:"sections",props:Xt})]});return i.jsx(Mh,{children:i.jsxs(ln,{$railTravels:!0,$hoverTitle:f,...f?{tabIndex:0,role:"group","aria-labelledby":x,"data-tiny-panel":""}:{},...L,children:[i.jsx(ia,{railBandAbove:!0,children:g===void 0||le?ce:i.jsxs(ef,{side:m,size:b,railBand:!0,children:[ce,i.jsx(oa,{children:g})]})}),!le&&c!==void 0&&i.jsx(cf,{render:c}),!le&&l!==void 0&&i.jsx(la,{children:l}),f&&i.jsxs(ff,{"data-panel-hover-title":"",children:[i.jsx(pf,{as:"h3",id:x,children:e}),ke!==void 0&&i.jsx(yf,{children:ke})]}),i.jsx(mn,{visuallyHidden:!0,children:f&&ze!==void 0?"":ie})]})})}function kf(e){if(!p.isValidElement(e)||e.type!==Qr||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=p.Children.toArray(t).filter(r=>!(p.isValidElement(r)&&r.type===Ju));if(n.length!==1)return!1;const[o]=n;if(!p.isValidElement(o))return!1;if(o.type===Uu)return!0;if(o.type!==p.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const bm=Object.assign(bf,{Context:qs,Delay:Xs,Container:ln,Header:ea,Toolbar:ta,Footer:la,Title:Qs,Glow:ia,Body:na,Section:Qr,Sidebar:oa}),da=.89,ko=.45;function ua({kind:e,x:t,y:n,scale:o=1,ghost:r=!1}){const s=se[e],a=s.canvasRadius*o,l={fill:s.color,opacity:r?ko:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const d=a*da;return i.jsx("rect",{x:t-d,y:n-d,width:2*d,height:2*d,...l})}const c=`${t},${n-a} ${t+a},${n+a*.8} ${t-a},${n+a*.8}`;return i.jsx("polygon",{points:c,...l})}function ha(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function xr(e,t,n,o,r,{ghost:s=!1,scale:a=1}={}){const l=se[n],c=l.canvasRadius*a;if(t.save(),t.globalAlpha=s?ko:1,t.fillStyle=ha(e,l.cssVar,l.fallback),t.beginPath(),n==="held"){const d=c*da;t.rect(o-d,r-d,2*d,2*d)}else t.moveTo(o,r-c),t.lineTo(o+c,r+c*.8),t.lineTo(o-c,r+c*.8),t.closePath();t.fill(),t.restore()}function wm(e,t,{held:n,modelled:o},r={}){n!==void 0&&o!==void 0&&(t.save(),t.globalAlpha=ko,t.strokeStyle=ha(e,se.modelled.cssVar,se.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.stroke(),t.restore()),n!==void 0&&xr(e,t,"held",n.x,n.y,{...r,ghost:o!==void 0}),o!==void 0&&xr(e,t,"modelled",o.x,o.y,r)}const dn=14,je=4,Se=6,$f=6,vr=12,ge=6,Et=8,Ut=4.5,Kn=4,_f=12,Sf=190,jf=80;function St(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function Mf(e,t,n,o){const r=o??e,s=r.x1-r.x0,a=e.y1-e.y0,l=s>=Sf&&a>=jf,c=l||o!==void 0,d=l||o?n:n.filter(S=>!S.detail),h=s-ge*2-je*2-Et-Kn,f=o!==void 0,x=Math.floor(h/Se),g=S=>St(S.value??tn,x-(S.currency?S.currency.length+2:0)),m=S=>{const O=S.value??tn;if(f)return St(S.label,x);if(l)return`${S.label} ${O}`;const j=Math.floor((h-O.length*Se)/Se)-1-(S.modelled?2:0),G=St(S.label,Math.min(j,_f));if(G!=="")return`${G} ${O}`;const N=Math.floor(h/Se)-(S.modelled?2:0);return St(O,N)},b=S=>(l||f)&&S.currency?S.currency:"",$=S=>b(S)?$f+b(S).length*Se+(S.modelled?vr:0):S.modelled?vr:0,M=l?0:Et+Kn,_=Math.floor((s-ge*2-je*2)/Se),L=Math.max(...d.map(S=>f?M+Math.max(m(S).length*Se,g(S).length*Se+$(S)):M+m(S).length*Se+$(S)),c?Math.min(t.length,_)*Se:0),E=c?1:0,A=(d.length*(f?2:1)+E)*dn+je*2;return{full:l,named:c,headingChars:_,stacked:f,rows:d,text:m,valueText:g,currencyText:b,cardW:f?s:Math.min(L+je*2,s-ge*2),cardH:A,headRows:E,fits:A<=a-ge*2}}function Ef(e,t,n,o,r){const s=(a,l)=>a>=t&&a<=t+o&&l>=n&&l<=n+r;for(let a=1;a<e.cx.length;a++){const[l,c,d,h]=[e.cx[a-1],e.cy[a-1],e.cx[a],e.cy[a]];if(![l,c,d,h].every(Number.isFinite))continue;const f=Math.max(1,Math.ceil(Math.hypot(d-l,h-c)/dn));for(let x=0;x<=f;x++)if(s(l+(d-l)*x/f,c+(h-c)*x/f))return!0}return!1}function $o({x:e,plot:t,heading:n,rows:o,column:r,avoid:s=[],traces:a=[]}){const l=Mf(t,n,o,r),{rows:c,cardW:d,cardH:h,fits:f}=l,x=t.y0+ge,g=c.flatMap(j=>j.y===void 0||j.y===null?[]:[j.y]),m=(j,G)=>g.every(N=>e+Ut<j||e-Ut>j+d||N+Ut<G||N-Ut>G+h),b=t.x1-e-ge,$=b>=d||b>=e-t.x0,M=j=>Math.max(t.x0+ge,Math.min(t.x1-ge-d,j)),_=$?[e+ge,e-ge-d]:[e-ge-d,e+ge],L=[x,t.y1-ge-h].flatMap(j=>_.map(G=>({cardX:M(G),cardY:j}))),E=(j,G)=>a.every(N=>!Ef(N,j,G,d,h)),A=(j,G)=>s.every(N=>j+d<N.x0||j>N.x1||G+h<N.y0||G>N.y1),S=L.find(j=>m(j.cardX,j.cardY)&&E(j.cardX,j.cardY)&&A(j.cardX,j.cardY))??L.find(j=>m(j.cardX,j.cardY)&&A(j.cardX,j.cardY))??L.find(j=>m(j.cardX,j.cardY)&&E(j.cardX,j.cardY))??L.find(j=>m(j.cardX,j.cardY)),O=f?r?{cardX:r.x0,cardY:r.y0+ge}:S:void 0;return{layout:l,place:O}}function km(e){return $o(e).place!==void 0}function Af(e){const{layout:t,place:n}=$o(e);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+t.cardW,y1:n.cardY+t.cardH}}function Pf({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:a}){const{layout:l,place:c}=$o({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:a}),{full:d,named:h,headingChars:f,stacked:x,rows:g,text:m,valueText:b,currencyText:$,cardW:M,cardH:_,headRows:L}=l,E=c!==void 0,A=c?.cardX??0,S=c?.cardY??0,O=j=>j+je+(d?0:Et+Kn);return i.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[i.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),g.map(j=>j.y===void 0||j.y===null?null:i.jsx("circle",{cx:e,cy:j.y,r:3.5,fill:j.color,stroke:"var(--color-text-primary)",strokeWidth:1},j.id)),E&&i.jsxs("g",{"data-plot-crosshair-card":"",children:[i.jsx("rect",{x:A,y:S,width:M,height:_,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),h&&i.jsx("text",{x:A+je,y:S+je+10,fill:"var(--color-text-muted)",fontSize:10,children:St(n,f)}),g.map((j,G)=>{const N=x?2:1,B=S+je+(G*N+L)*dn+10,I=B+(x?dn:0);return i.jsxs("g",{"data-plot-crosshair-row":j.id,children:[!d&&i.jsx("rect",{x:A+je,y:B-8,width:Et,height:Et,fill:j.color,"data-plot-crosshair-swatch":""}),i.jsx("text",{x:O(A),y:B,fill:j.value===null||x?"var(--color-text-faint)":j.color,fontSize:10,style:{whiteSpace:"pre"},children:m(j)}),x&&i.jsx("text",{x:O(A),y:I,fill:j.value===null?"var(--color-text-faint)":j.color,fontSize:10,style:{whiteSpace:"pre"},children:b(j)}),j.modelled&&i.jsx(ua,{kind:"modelled",x:A+M-je-$(j).length*Se-($(j)?8:4),y:I-3}),$(j)&&i.jsx("text",{x:A+M-je,y:I,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:$(j)})]},j.id)})]})]})}const yr=480,Cf=110,Rf=200,br=56,If=20,Lf=112,Tf=260,Of=.4,Nf=300;function Ff({width:e,height:t,contentWidth:n,legendHeight:o=0,cardHeight:r=0}){const s=Math.max(Lf,Math.ceil(n));if((t>e||e<yr)&&t>=Rf)return{placement:"below"};if(e<yr||t<Cf||s>Math.min(Tf,e*Of)||e-s<Nf)return{placement:"overlay"};const l=t>=br+o+r;return!l&&t<br+If+r?{placement:"overlay"}:{placement:"beside",columnWidth:s,legendBelow:!l}}const zf={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function Df(e){return zf[e]}const ot=4,Yt=3,qn=6;function Hf(e,t){return e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0}function Bf(e,t){const n=(o,r)=>o>=t.x0&&o<=t.x1&&r>=t.y0&&r<=t.y1;if(e.cx.length===1)return Number.isFinite(e.cx[0])&&n(e.cx[0],e.cy[0]);for(let o=1;o<e.cx.length;o++){const[r,s,a,l]=[e.cx[o-1],e.cy[o-1],e.cx[o],e.cy[o]];if(![r,s,a,l].every(Number.isFinite))continue;const c=Math.max(1,Math.ceil(Math.hypot(a-r,l-s)/qn));for(let d=0;d<=c;d++)if(n(r+(a-r)*d/c,s+(l-s)*d/c))return!0}return!1}function Wf({plot:e,card:t,traces:n,obstacles:o}){if(t.width<=0||t.height<=0||t.width>e.x1-e.x0-ot*2||t.height>e.y1-e.y0-ot*2)return;const r=e.x0+ot,s=e.x1-ot-t.width,a=e.y0+ot,l=e.y1-ot-t.height;return[{x:s,y:a},{x:r,y:l},{x:s,y:l},{x:r,y:a}].find(d=>{const h={x0:d.x-Yt,y0:d.y-Yt,x1:d.x+t.width+Yt,y1:d.y+t.height+Yt};return!n.some(f=>Bf(f,h))&&!o.some(f=>Hf(h,f))})}function Xf(e){const t=[],n=[];let o=!0;for(let r=e.y0;r<=e.y1+qn;r+=qn){const s=Math.min(r,e.y1);t.push(o?e.x0:e.x1,o?e.x1:e.x0),n.push(s,s),o=!o}return{cx:t,cy:n}}function Uf(e,t){return e?.includes(t)??!1}function wr(e,t){const{reckoned:n,spans:o}=e.data;return n?.some(r=>t>=r.from&&t<=r.to)?"modelled":o?.some(r=>t>=r.from&&t<=r.to&&r.status==="recorded")?"recorded":"measured"}function Yf(e){const{x:t,y:n,y2:o}=e.data;let r=!0;for(let a=0;a<t.length;a++)if(!Number.isFinite(t[a])||a>0&&t[a]<t[a-1]){r=!1;break}if(r)return e;const s=t.map((a,l)=>l).filter(a=>Number.isFinite(t[a])).sort((a,l)=>t[a]-t[l]||a-l);return{...e,data:{x:s.map(a=>t[a]),y:s.map(a=>n[a]),...o?{y2:s.map(a=>o[a])}:{}}}}function Gf(e,t,n){const o=e.data.x,r=e.data.y,s=Math.min(o.length,r.length);if(s===0||t<o[0]||t>o[s-1])return null;let a=0,l=s-1;for(;a<l;){const m=a+l>>1;o[m]<t?a=m+1:l=m}const c=a,d=Math.max(0,c-1);if(o[c]!==t&&c>0&&Uf(e.data.breaks,c))return null;const h=t-o[d]<=o[c]-t?d:c;if(n!==void 0&&Math.abs(o[h]-t)>n)return null;const f=o[c]-o[d];if(e.readBetween&&f>0&&o[c]!==t){const m=r[d]+(r[c]-r[d])*(t-o[d])/f;return Number.isFinite(m)?{index:h,x:t,y:m,currency:wr(e,h)}:null}const x=r[h];if(!Number.isFinite(x))return null;const g=e.data.y2?.[h];return{index:h,x:o[h],y:x,...g!==void 0&&Number.isFinite(g)?{y2:g}:{},currency:wr(e,h)}}function Vf(e){const t=new Set;for(const n of e)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&t.add(o);return[...t].sort((n,o)=>n-o)}function kr(e,t,n){if(e.length===0)return null;if(t===null)return e[e.length-1];let o=0,r=e.length-1;for(;o<r;){const a=o+r>>1;e[a]<t?o=a+1:r=a}let s=o+n;return e[o]!==t&&n>0&&(s-=1),e[Math.max(0,Math.min(e.length-1,s))]}function Kf({x:e,y:t,size:n,color:o,text:r}){const s=n/2,a=`M 0 ${-s} L ${s} ${s*.8} L ${-s} ${s*.8} Z`,l=`M -0.9 ${-s*.42} H 0.9 V ${s*.2} H -0.9 Z`,c=`M -0.9 ${s*.4} H 0.9 V ${s*.64} H -0.9 Z`;return i.jsx(Ee,{text:r,focusable:!0,children:i.jsxs("g",{role:"img","aria-label":r,"data-limit-crossing":"",transform:`translate(${e} ${t})`,children:[i.jsx("title",{}),i.jsx("circle",{r:12,fill:"transparent"}),i.jsx("path",{d:`${a} ${l} ${c}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),i.jsx("path",{d:a,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function fa(e,t,n){return n==="above"?e>=t:e<=t}function qf({y:e,cx:t,cy:n,limit:o,limitY:r,bad:s,breaks:a=[],step:l=!1,minGapPx:c}){const d=($,M,_)=>{if(!M)return{index:$,x:t[$],y:n[$],entered:!1};if(_===null)return{index:$,x:t[$],y:r,entered:!0};const L=n[$]-n[_],E=L===0?1:(r-n[_])/L;return{index:$,x:t[_]+(t[$]-t[_])*E,y:r,entered:!0}},h=new Set(a),f=[];let x=null,g=!1,m=!1,b=Number.NEGATIVE_INFINITY;for(let $=0;$<e.length;$++){if(!Number.isFinite(e[$])){x=null;continue}const M=fa(e[$],o,s);if(M&&!m){const _=d($,g,l||h.has($)?null:x),L=f[f.length-1];L!==void 0&&_.x-b<c?L.spells++:f.push({..._,spells:1}),b=_.x}m=M,g=!0,x=$}return f}const Zf=1;function Qf(e,t,n,o,r){const s=n.to;if(s<1||s>=e.length)return!1;const a=o(e[s-1]),l=o(e[s]),c=r(t[s-1]),d=r(t[s]);return l>a?n.t.some((h,f)=>{const x=o(h),g=c+(d-c)*(x-a)/(l-a);return Math.abs(r(n.v[f])-g)>Zf}):!1}function Ln(e,t,n,o){const r=t-e;if(r===0){const s=(n+o)/2;return()=>s}return s=>n+(s-e)/r*(o-n)}function Zn(e,t,n=5){if(e===t)return Array.from({length:n},()=>e);const r=(t-e)/(n-1),s=10**Math.floor(Math.log10(r)),l=([1,2,2.5,5,10].find(x=>x*s>=r)??10)*s,c=Math.ceil(e/l)*l,d=[];for(let x=0;d.length<n;x++){const g=c+x*l;if(g>t+l*.01)break;d.push(g)}if(d.length>=2)return d;const h=Math.floor(e/l)*l,f=Math.ceil(t/l)*l;return f>h?[h,f]:[h,h+l]}function pa(e,t){const n=Math.floor(e/1e3);if(t>=36e5){const s=Math.floor(n/3600),a=Math.floor(n%3600/60),l=n%60;return`${s}:${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")}`}const o=Math.floor(n/60),r=n%60;return`${o}:${String(r).padStart(2,"0")}`}function $r(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];for(let a=0;a<e.length;a++){const l=n(e[a]).toFixed(2),c=o(t[a]).toFixed(2),d=a===0||r.includes(a);s.push(`${d?"M":"L"}${l},${c}`),d&&Qn(a,e.length,r)&&s.push(`L${l},${c}`)}return s.join(" ")}function Qn(e,t,n){return e+1>=t||n.includes(e+1)}function Jf(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let a=o(t[0]).toFixed(2);const l=n(e[0]).toFixed(2);s.push(`M${l},${a}`),Qn(0,e.length,r)&&s.push(`L${l},${a}`);for(let c=1;c<e.length;c++){const d=n(e[c]).toFixed(2),h=o(t[c]).toFixed(2);if(r.includes(c)){s.push(`M${d},${h}`),Qn(c,e.length,r)&&s.push(`L${d},${h}`),a=h;continue}s.push(`H${d}`),h!==a&&s.push(`V${h}`),a=h}return s.join(" ")}function ep(e,t,n,o,r,s=[],a=[],l=[]){if(e.length===0)return[];if(a.length===0&&l.length===0)return[{d:r(e,t,n,o,s)}];function c(b,$){const M=new Array(e.length);for(const _ of b){const L=Math.min(e.length-1,_.to);for(let E=Math.max(0,_.from);E<=L;E++)M[E]=$(_)}return M}const d=c(a,b=>b.status),h=c(l,b=>b.basis),f=new Set(s),x=[];let g=0;const m=(b,$)=>{const M=b>0&&!f.has(b)?b-1:b,_=A=>A.slice(M,$+1),L=[];for(const A of s)A>M&&A<=$&&L.push(A-M);const E=r(_(e),_(t),n,o,L);E!==""&&x.push({status:d[b],basis:h[b],d:E})};for(let b=1;b<=e.length;b++)(b===e.length||d[b]!==d[g]||h[b]!==h[g])&&(m(g,b-1),g=b);return x}function ga(e,t,n,o,r){if(e.length===0)return"";const s=Math.min(e.length,t.length,n.length);if(s===0)return"";const a=[];for(let l=0;l<s;l++){const c=o(e[l]).toFixed(2),d=r(n[l]).toFixed(2);a.push(`${l===0?"M":"L"}${c},${d}`)}for(let l=s-1;l>=0;l--){const c=o(e[l]).toFixed(2),d=r(t[l]).toFixed(2);a.push(`L${c},${d}`)}return a.push("Z"),a.join(" ")}function tp(e,t,n,o){const r=[];for(const s of t){const{bandLo:a,bandHi:l,bandKind:c}=s;if(!a||!l||c===void 0)continue;const d=[];for(let f=s.from;f<=s.to&&f<e.length;f++)d.push(e[f]);const h=ga(d,a,l,n,o);h!==""&&r.push({d:h,kind:c})}return r}function _r(e,t,n,o){if(e===t){const d=(n+o)/2;return()=>d}const r=e>0?e:1e-9,s=t>r?t:r*10,a=Math.log10(r),c=Math.log10(s)-a;if(c===0){const d=(n+o)/2;return()=>d}return d=>{const h=d>0?d:r;return n+(Math.log10(h)-a)/c*(o-n)}}function np(e,t,n=5){if(!(e>0)||!(t>0)||t<=e)return Zn(e,t,n);const o=Math.log10(e),r=Math.log10(t);if(r-o<1)return Zn(e,t,n);const a=Math.ceil(o),l=Math.floor(r),c=Math.max(1,Math.ceil((l-a+1)/n)),d=[];for(let h=a;h<=l;h+=c)d.push(10**h);return d.length>0?d:[e,t]}const Tn=.86,Sr=[[0,-1.15],[1.05,.8],[-1.05,.8]],jr=.3,be={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:Tn,triangle:Sr,outlineWidth:jr,keylineWidth:.2,reach:Math.max(Math.hypot(Tn,Tn),...Sr.map(([e,t])=>Math.hypot(e,t)))+jr/2},op={"aria-hidden":!0};function ma(e,t,n,o){const r=be.squareHalf;return(e==="modelled"?be.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([a,l])=>[t+a*o,n+l*o])}const xa=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function va(e,t,n){const o=e==="current"?0:be.outlineWidth;return t*(o+2*n*be.keylineWidth)}function rp({x:e,y:t,r:n,state:o="current",keyline:r=!1}){const s=o==="current"?"":ma(o,0,0,n).map(([a,l])=>`${a},${l}`).join(" ");return i.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...op,children:[r&&xa.map(({ring:a,color:l,widths:c})=>{const d={"data-vessel-keyline":a,fill:"none",stroke:l,strokeWidth:va(o,n,c),strokeLinejoin:"round"};return o==="current"?i.jsx("circle",{r:n,...d},a):i.jsx("polygon",{points:s,...d},a)}),o==="current"?i.jsx("circle",{r:n,fill:be.color}):i.jsx("polygon",{points:s,fill:o==="lost"?"none":se[o].color,stroke:o==="lost"?be.lost.color:be.color,strokeWidth:n*be.outlineWidth,strokeLinejoin:"round"})]})}function Jt(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function ya(e,t,n,o,r){if(e.beginPath(),t==="current"){e.arc(n,o,r,0,Math.PI*2);return}ma(t,n,o,r).forEach(([s,a],l)=>{l===0?e.moveTo(s,a):e.lineTo(s,a)}),e.closePath()}function sp(e,t,n,o,r){e.save(),e.lineJoin="round";for(const{color:s,widths:a}of xa)ya(e,t,n,o,r),e.strokeStyle=s,e.lineWidth=va(t,r,a),e.stroke();e.restore()}function ap(e,t,n,o,r,s=4,{keyline:a=!1}={}){a&&sp(t,n,o,r,s);const l=Jt(e,be.cssVar,be.fallback);if(t.save(),ya(t,n,o,r,s),n==="current")t.fillStyle=l,t.fill();else{if(n!=="lost"){const c=se[n];t.fillStyle=Jt(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=n==="lost"?Jt(e,be.lost.cssVar,be.lost.fallback):l,t.lineWidth=s*be.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function $m(e,t,n,o=4,r={}){const{held:s,modelled:a}=n;s!==void 0&&a!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=Jt(e,se.modelled.cssVar,se.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(a.x,a.y),t.stroke(),t.restore());for(const l of["lost","held","current","modelled"]){const c=n[l];c!==void 0&&ap(e,t,l,c.x,c.y,o,r)}}const un=56;function ba(e,t,n,o){const r=Math.max(0,Math.min(t-1,Math.floor(n))),s=Math.max(0,Math.min(t-1,Math.floor(o))),a=Math.min(t-1,r+1),l=Math.min(t-1,s+1),c=Math.max(0,Math.min(1,n-r)),d=Math.max(0,Math.min(1,o-s)),h=e[s*t+r]+(e[s*t+a]-e[s*t+r])*c,f=e[l*t+r]+(e[l*t+a]-e[l*t+r])*c;return h+(f-h)*d}const Mr=400,ip=16,lp=8,Er=.06,cp=3.3,dp=.6,up=60,hp=40,Ar=[6,12],Pr=[48,96],Gt=2;function On(e,t,n){const o=Math.max(0,Math.min(1,(n-e)/(t-e)));return o*o*(3-2*o)}function Cr(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Rr(e,t){const n=t/e,o=e<=t?.07:.09,r=cp**Math.exp(-((e-t)**2)/(2*o**2*t**2));return n**5*Math.exp(-1.25*n**4)*r}function wa(e,t,n){if(!(e>0)||!(t>0)||!(n>0)||!Number.isFinite(e+t+n))return[];const o=Math.sqrt(n*2*Math.PI/Mr),r=Rr(o,o),s=[];for(let a=-Gt;a<=ip*Gt;a++){const l=Mr/2**(a/Gt),c=l/e,d=On(Ar[0],Ar[1],c)*(1-On(Pr[0],Pr[1],c))*(1-On(t,2*t,l));if(d<=.001)continue;const h=2*Math.PI/l,f=Math.sqrt(n*h),x=Math.sqrt(Math.min(1,Rr(f,o)/r)),g=(f>=o?Er:Er*x)/Math.sqrt(Gt),m=(up+(Cr(a,1)-.5)*2*hp)*Math.PI/180;s.push({kx:h*Math.sin(m),ky:h*Math.cos(m),k:h,amplitude:g/h,omega:f,phase:Cr(a,2)*2*Math.PI,weight:d})}return s.slice(0,lp)}function fp(e,t,n,o){let r=0;for(const s of e)r+=s.weight*s.amplitude*Math.cos(s.kx*t+s.ky*n-s.omega*o+s.phase);return r}const en=ka(-.25,.3,.92),pp=2.6,gp=ka(en[0],en[1],en[2]+1),mp=.8,xp=3,vp=.95,yp=.35,bp=235,wp=.5,kp=.35;function ka(e,t,n){const o=Math.hypot(e,t,n);return[e/o,t/o,n/o]}function $p(e,t,n,o){const{east0:r,north0:s,dx:a,dy:l,seconds:c,colour:d,waves:h,isSea:f}=o,[x,g,m]=en,[b,$,M]=gp,_=h.length,L=new Float64Array(_*t),E=new Float64Array(_*t),A=new Float64Array(_*n),S=new Float64Array(_*n);for(let I=0;I<_;I++){const z=h[I];for(let y=0;y<t;y++){const T=z.kx*(r+(y+.5)*a);L[I*t+y]=Math.cos(T),E[I*t+y]=Math.sin(T)}for(let y=0;y<n;y++){const T=z.ky*(s-(y+.5)*l)-z.omega*c+z.phase;A[I*n+y]=Math.cos(T),S[I*n+y]=Math.sin(T)}}const O=new Float64Array(_),j=new Float64Array(_),G=h.map(I=>I.kx*I.weight*I.amplitude),N=h.map(I=>I.ky*I.weight*I.amplitude),B=h.map(I=>dp*I.k*I.weight*I.amplitude);for(let I=0;I<n;I++)for(let z=0;z<t;z++){const y=(I*t+z)*4;if(f&&!f(z,I)){e[y+3]=0;continue}let T=0,Q=0,ie=1;for(let J=0;J<_;J++){const ee=L[J*t+z],De=E[J*t+z],He=A[J*n+I],$e=S[J*n+I];O[J]=ee*He-De*$e,j[J]=De*He+ee*$e}for(let J=0;J<_;J++){const ee=_>1?1+mp*O[(J+xp)%_]:1;T-=G[J]*O[J]*ee,Q-=N[J]*O[J]*ee,ie-=B[J]*j[J]*ee}const Ke=1/Math.sqrt(T*T+Q*Q+ie*ie),we=(T*x+Q*g+ie*m)*Ke-m,ze=1+pp*we;let ke=0;const le=(T*b+Q*$+ie*M)*Ke;if(le>vp){let J=le;for(let ee=0;ee<7;ee++)J*=J;ke=255*yp*J}const Me=Math.max(0,ze-1)*kp,fe=Math.min(1,ze)*wp;e[y]=d.r*fe+(255-d.r*fe)*Me+ke,e[y+1]=d.g*fe+(255-d.g*fe)*Me+ke,e[y+2]=d.b*fe+(255-d.b*fe)*Me+ke,e[y+3]=bp}}function Ir(e){const t=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function _p(e,t){const n=Ir(t),o=Math.max(e.r,e.g,e.b,1),r=c=>({r:Math.min(255,e.r*c),g:Math.min(255,e.g*c),b:Math.min(255,e.b*c)});let s=0,a=255/o;for(let c=0;c<32;c++){const d=(s+a)/2;Ir(r(d))<n?s=d:a=d}const l=r((s+a)/2);return{r:Math.round(l.r),g:Math.round(l.g),b:Math.round(l.b)}}const Sp=192,jp=30,Mp="--color-info-mark",Ep=.42;function Ap(e,t){const n=e.view==="plan",o=t.scaleX,r=t.scaleYPrimary,s=1/(o(1)-o(0)),a=1/(r(1)-r(0)),l=M=>(M-o(0))*s,c=M=>(M-r(0))*a,d=Math.min(o(e.bounds.x0),o(e.bounds.x1)),h=Math.max(o(e.bounds.x0),o(e.bounds.x1)),f=Math.min(r(e.bounds.y0),r(e.bounds.y1)),x=Math.max(r(e.bounds.y0),r(e.bounds.y1)),g=n?d:Math.max(t.plotX0,d),m=n?h:Math.min(t.plotX1,h),b=n?f:Math.max(t.plotY0,f),$=n?x:Math.min(t.plotY1,x);return n&&(h<t.plotX0||d>t.plotX1||x<t.plotY0||f>t.plotY1)||!(m-g>=1&&$-b>=1)||!Number.isFinite(s+a)?null:{left:g,top:b,width:m-g,height:$-b,x0:l(g),x1:l(m),y0:c($),y1:c(b)}}function Lr(e,t){if(!t)return null;e.fillStyle=t;const n=/^#([0-9a-f]{6})$/i.exec(String(e.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function Pp(e,t,n){const o=Lr(t,getComputedStyle(e).getPropertyValue(Mp).trim());if(!o)return null;const r=n?Lr(t,n):null;return r?_p(r,o):o}function Cp(e,t,n,o,r,s){const a=un,l=(n.x1-n.x0)/a,c=(n.y1-n.y0)/a,d=t.sea,h=o.scaleYPrimary(t.bounds.y0)<o.scaleYPrimary(t.bounds.y1),f=d&&d.size>1&&d.heights.length>=d.size*d.size?(g,m)=>{const b=h?m:a-1-m;return ba(d.heights,d.size,g/(a-1)*(d.size-1),b/(a-1)*(d.size-1))<0}:void 0,x=e.createImageData(a,a);$p(x.data,a,a,{east0:t.origin.east+n.x0,north0:t.origin.north+n.y1,dx:l,dy:c,seconds:r,colour:s,waves:wa(Math.max(l,c),n.x1-n.x0,t.gravity),isSea:f}),e.putImageData(x,0,0)}function Rp(e,t,n,o,r){const{width:s,height:a}=e.canvas,l=Ip(t,n,s),c=l.length>1?(l[l.length-1]-l[0])/(l.length-1):n.x1-n.x0,d=wa(c,n.x1-n.x0,t.gravity),h=(t.bearingDeg??90)*Math.PI/180,f=m=>(m-n.x0)/(n.x1-n.x0)*s,x=m=>(n.y1-m)/(n.y1-n.y0)*a;e.clearRect(0,0,s,a),e.beginPath(),l.forEach((m,b)=>{const $=fp(d,t.origin.east+m*Math.sin(h),t.origin.north+m*Math.cos(h),o);b===0?e.moveTo(f(m),x($)):e.lineTo(f(m),x($))});const g=`${r.r}, ${r.g}, ${r.b}`;e.strokeStyle=`rgba(${g}, 0.9)`,e.lineWidth=1,e.stroke(),e.lineTo(f(l[l.length-1]),a),e.lineTo(f(l[0]),a),e.closePath(),e.fillStyle=`rgba(${g}, ${Ep})`,e.fill()}function Ip(e,t,n){const o=(e.samples??[]).filter(r=>r>t.x0&&r<t.x1);return e.samples&&e.samples.length>1?[t.x0,...o,t.x1]:Array.from({length:n+1},(r,s)=>t.x0+s/n*(t.x1-t.x0))}function Lp({layer:e,frame:t}){const n=Ap(e,t),o=p.useRef(null),r=p.useRef(null);r.current=n?{layer:e,at:n,frame:t}:null;const s=n?e.view==="plan"?un:Math.max(1,Math.min(Sp,Math.round(n.width))):0,a=n?e.view==="plan"?un:Math.max(1,Math.round(n.height*s/n.width)):0,l=e.tint;return p.useEffect(()=>{const c=o.current,d=c?.getContext("2d")??null;if(!c||!d||s===0||a===0)return;const h=Pp(c,d,l);if(!h)return;const f=()=>{const _=r.current;if(!_)return;const L=Date.now()/1e3;_.layer.view==="plan"?Cp(d,_.layer,_.at,_.frame,L,h):Rp(d,_.layer,_.at,L,h)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let g=!0;const m=typeof IntersectionObserver=="function"?new IntersectionObserver(_=>{g=_.some(L=>L.isIntersecting)}):null;m?.observe(c);let b=Number.NEGATIVE_INFINITY,$=0;const M=_=>{$=requestAnimationFrame(M),!(!g||document.hidden||_-b<1e3/jp)&&(b=_,f())};return $=requestAnimationFrame(M),()=>{cancelAnimationFrame($),m?.disconnect()}},[s,a,l]),n?i.jsx("g",{"aria-hidden":"true","data-plot-layer":e.id,"data-plot-layer-kind":"water",children:i.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:i.jsx("canvas",{ref:o,width:s,height:a,style:{display:"block",width:"100%",height:"100%",imageRendering:e.view==="plan"?"pixelated":"auto"}})})}):null}const Tp={faint:.45,normal:.85,bright:1},Op=1.5,Np=5,Fp=.9,wt=7,kt=6,Tr=10,Rt=9,rt=12,zp=9,Dp=13,Hp=.1,Nn=5,Bp=.5,Wp=.5;function Fe(e){return re[e.tone??"neutral"]}function It(e){return ye[e.tone??"neutral"]}function Ae(e){return Tp[e.emphasis??"normal"]}function Re(e,t){return t.axis==="secondary"?e.scaleYSecondary:e.scaleYPrimary}function Xp(e){const t=e.axis==="secondary"?"secondary":"primary";switch(e.kind){case"series":return{xs:e.points.map(n=>n.x),ys:e.points.map(n=>n.y),axis:t};case"region":return{xs:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.x),ys:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.y),axis:t};case"rule":return e.along==="y"?{xs:[],ys:[e.value],axis:t}:{xs:[e.value],ys:[],axis:t};case"marker":case"annotation":return{xs:[e.at.x],ys:[e.at.y],axis:t};default:return{xs:[],ys:[],axis:t}}}const Up=5.8,st=11,Or=4;function Yp(e,t){const n=t.text.length*Up,{frame:o}=t,r=t.anchorX+t.gap,s=r+n<=o.plotX1-4?"start":"end",a=s==="start"?r:t.anchorX-t.gap,l=s==="start"?a:a-n,c=l+n,d=f=>e.some(x=>l<x.x1&&c>x.x0&&f-st<x.y1&&f+2>x.y0);let h=t.anchorY+3;for(let f=0;f<Or&&d(h);f++)h+=st;if(d(h)){h=t.anchorY+3;for(let f=0;f<Or&&d(h);f++)h-=st}return h=Math.min(Math.max(h,o.plotY0+st),o.plotY1-st),e.push({x0:l,x1:c,y0:h-st,y1:h+2}),{x:a,y:h,anchor:s}}function Gp(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function Vp(e){if(e.length===0)return"";const t=[`M${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`];for(let n=1;n<e.length;n++)t.push(`H${e[n].x.toFixed(2)}`,`V${e[n].y.toFixed(2)}`);return t.join(" ")}function $a(e,t,n){if(e.length===0)return[];const o=e[0],r=e[e.length-1],s=[...e];if(t==="right"||t==="left"){const a=t==="right"?n.plotX1:n.plotX0;s.push({x:a,y:r.y},{x:a,y:o.y})}else{const a=t==="above"?n.plotY0:n.plotY1;s.push({x:r.x,y:a},{x:o.x,y:a})}return s}function Kp(e,t){const n=[];for(const o of e){if(o.kind==="relief"||o.kind==="water"){const a=Re(t,o),{x0:l,y0:c,x1:d,y1:h}=o.bounds;n.push([{x:t.scaleX(l),y:a(c)},{x:t.scaleX(d),y:a(c)},{x:t.scaleX(d),y:a(h)},{x:t.scaleX(l),y:a(h)}]);continue}if(o.kind!=="region"||o.hatched)continue;const r=Re(t,o),s=o.boundary.map(a=>({x:t.scaleX(a.x),y:r(a.y)}));if(!(s.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...s,...o.boundaryHigh.map(a=>({x:t.scaleX(a.x),y:r(a.y)})).reverse()])}else n.push($a(s,o.side,t))}return(o,r)=>n.some(s=>{let a=!1;for(let l=0,c=s.length-1;l<s.length;c=l++){const d=s[l],h=s[c];d.y>r!=h.y>r&&o<(h.x-d.x)*(r-d.y)/(h.y-d.y)+d.x&&(a=!a)}return a})}function qp({layer:e,frame:t}){if(e.stops.length===0)return null;const n=Re(t,e),o=e.along==="y"?t.plotY1-t.plotY0:t.plotX1-t.plotX0;if(o<=0)return null;const r=e.along==="y"?t.plotY0:t.plotX0,s=e.along==="y"?n:t.scaleX,a=e.maxOpacity??Wp,l=e.tint??Fe(e),c=e.blur!==void 0?Math.ceil(e.blur*3):0,d=`plot-field-${e.id}-${t.uid}`,h=`plot-field-blur-${e.id}-${t.uid}`,f=e.along==="y"?t.plotY1:t.plotX1,x=e.stops.map(g=>({offset:(s(g.at)-r)/o*100,intensity:Math.max(0,Math.min(1,g.intensity))})).sort((g,m)=>g.offset-m.offset);return i.jsxs(i.Fragment,{children:[i.jsxs("defs",{children:[i.jsx("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:t.plotX0,y1:t.plotY0,x2:e.along==="x"?f:t.plotX0,y2:e.along==="y"?f:t.plotY0,children:x.map((g,m)=>i.jsx("stop",{offset:`${g.offset.toFixed(2)}%`,stopColor:l,stopOpacity:a*g.intensity},m))}),e.blur!==void 0&&i.jsx("filter",{id:h,children:i.jsx("feGaussianBlur",{stdDeviation:e.blur})})]}),i.jsx("rect",{"data-plot-layer":e.id,"data-plot-layer-kind":"field",x:t.plotX0-c,y:t.plotY0-c,width:t.plotX1-t.plotX0+2*c,height:t.plotY1-t.plotY0+2*c,fill:`url(#${d})`,filter:e.blur!==void 0?`url(#${h})`:void 0})]})}const Zp=6,at=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function Qp(e){const t=Math.max(0,Math.min(1,e));for(let n=1;n<at.length;n++)if(t<=at[n][0]){const[o,r]=at[n-1],[s,a]=at[n],l=s>o?(t-o)/(s-o):0;return[Math.round(r[0]+(a[0]-r[0])*l),Math.round(r[1]+(a[1]-r[1])*l),Math.round(r[2]+(a[2]-r[2])*l)]}return at[at.length-1][1]}const Jp=[150,156,160],e0=[200,80,70];function t0(e,t){if(t===3)return Jp;if(t!==1&&t!==2)return e;const n=.3*e[0]+.59*e[1]+.11*e[2],o=(s,a,l)=>s+(l-s)*a,r=e.map(s=>o(o(s,.5,n),.06,235));return t===1?r:r.map((s,a)=>o(s,.3,e0[a]))}function n0(e,t){const n=2*(t-1),o=(e%n+n)%n;return o<t?o:n-o}function o0(e,t,n,o,r,s,a){const l=e[s*n+a],c=r?n0(l,o):l,[d,h,f]=t0(Qp(c/(o-1)),t[s*n+a]),x=a>0?e[s*n+a-1]:l,g=s>0?e[(s-1)*n+a]:l,m=x!==l||g!==l?.5:1;return`rgb(${Math.round(d*m)}, ${Math.round(h*m)}, ${Math.round(f*m)})`}function r0({layer:e,frame:t}){const{size:n,values:o,bounds:r}=e;if(n<2||o.length<n*n)return null;let s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;for(let N=0;N<n*n;N++){const B=o[N];if(!Number.isFinite(B))return null;B<s&&(s=B),B>a&&(a=B)}const l=a-s,c=e.bandMetres!=null&&e.bandMetres>0?e.bandMetres:null,d=e.veil,h=Math.max(2,e.bands??Zp),f=Re(t,e),x=t.scaleX(r.x0),g=t.scaleX(r.x1),m=f(r.y0),b=f(r.y1),$=Math.min(x,g),M=Math.min(m,b),_=un,L=Math.abs(g-x)/_,E=Math.abs(b-m)/_;if(!(L>0)||!(E>0))return null;const A=m<b,S=new Int16Array(_*_),O=new Uint8Array(_*_),j=d!=null&&d.length>=n*n;for(let N=0;N<_;N++)for(let B=0;B<_;B++){const I=B/(_-1)*(n-1),z=N/(_-1)*(n-1);j&&(O[N*_+B]=d[Math.round(z)*n+Math.round(I)]??0);const y=ba(o,n,I,z);if(c!=null){S[N*_+B]=Math.floor(y/c);continue}const T=l>0?(y-s)/l:.5;S[N*_+B]=Math.max(0,Math.min(h-1,Math.floor(T*h)))}const G=[];for(let N=0;N<_;N++){const B=A?N:_-1-N;let I=0,z="";for(let y=0;y<=_;y++){const T=y<_?o0(S,O,_,h,c!=null,N,y):"";if(y===0){z=T;continue}T===z&&y<_||(G.push(i.jsx("rect",{x:$+I*L,y:M+B*E,width:(y-I)*L+.5,height:E+.5,fill:z},`${N}-${I}`)),I=y,z=T)}}return i.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:Ae(e),"aria-hidden":"true",children:G})}function s0({layer:e,frame:t}){const n=p.useId(),o=Re(t,e),r=d=>({x:t.scaleX(d.x),y:o(d.y)}),s=e.boundary.map(r);if(s.length<2)return null;const a=e.side==="between"?[...s,...(e.boundaryHigh??[]).map(r).reverse()]:$a(s,e.side,t);if(e.side==="between"&&!e.boundaryHigh)return null;const l=e.side==="right"?t.plotX1-4:e.side==="left"?t.plotX0+11:s[s.length-1].x,c=t.plotY1-34;return i.jsxs(i.Fragment,{children:[e.hatched&&i.jsx("defs",{children:i.jsx("pattern",{id:n,width:Nn,height:Nn,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:i.jsx("line",{x1:0,y1:0,x2:0,y2:Nn,stroke:Fe(e),strokeWidth:1,strokeOpacity:e.opacity??Bp})})}),i.jsx("polygon",{"data-plot-layer":e.id,"data-plot-layer-kind":"region","data-hatched":e.hatched?"":void 0,points:a.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:e.hatched?`url(#${n})`:Fe(e),fillOpacity:e.hatched?void 0:e.opacity??Hp}),t.labels&&e.label&&i.jsx("text",{x:l,y:c,transform:`rotate(-90 ${l} ${c})`,fontSize:zp,letterSpacing:"0.14em",fill:"var(--color-text-muted)",children:e.label})]})}function a0({layer:e,frame:t}){const n=Re(t,e),o=e.points.map(s=>({x:t.scaleX(s.x),y:n(s.y)}));if(o.length===0)return null;const r=Op*(e.weight??1);return e.style==="scatter"?i.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",fill:Fe(e),opacity:Ae(e),children:o.map((s,a)=>i.jsx("circle",{cx:s.x,cy:s.y,r},a))}):i.jsx("path",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",d:e.style==="step"?Vp(o):Gp(o),fill:"none",stroke:Fe(e),strokeOpacity:Ae(e),strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:e.dashed?"5 3.5":void 0})}function i0({layer:e,frame:t}){const n=Re(t,e),o=e.dashed??!0,r=Fe(e),s=e.along==="y",a=s?n(e.value):t.scaleX(e.value);return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"rule",x1:s?t.plotX0:a,x2:s?t.plotX1:a,y1:s?a:t.plotY0,y2:s?a:t.plotY1,stroke:r,strokeOpacity:Ae(e),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),t.labels&&e.label&&i.jsx("text",{x:s?t.plotX1-4:a+3,y:s?a-3:t.plotY0+10,textAnchor:s?"end":"start",fill:It(e),fontSize:Rt,children:e.label})]})}function l0({layer:e,frame:t,placed:n}){const o=Re(t,e),r=t.scaleX(e.at.x),s=o(e.at.y),a=e.across??"x",l=Fe(e),c=t.labels&&e.label?Yp(n,{anchorX:r,anchorY:s,gap:wt+3,text:e.label,frame:t}):null;return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"annotation",x1:a==="x"?r-wt:r,x2:a==="x"?r+wt:r,y1:a==="x"?s:s-wt,y2:a==="x"?s:s+wt,stroke:l,strokeOpacity:Ae(e),strokeWidth:1.75,strokeLinecap:"round"}),c&&e.label&&i.jsx("text",{x:c.x,y:c.y,textAnchor:c.anchor,fontSize:Rt,letterSpacing:"0.05em",fill:It(e),fillOpacity:Ae(e),children:e.label})]})}function c0({layer:e,frame:t}){const n=Re(t,e),o=t.scaleX(e.at.x),r=n(e.at.y)+(e.offsetPx??0),s=Np*(e.scale??1),a=Fe(e),l=e.shape??"dot",c={"data-plot-layer":e.id,"data-plot-layer-kind":"marker",opacity:Ae(e)},d=l==="none"?null:l==="vessel"?i.jsx("g",{...c,children:i.jsx(rp,{state:e.markState??"current",x:o,y:r,r:s*Fp,keyline:!0})}):l==="dot"?i.jsx("circle",{...c,cx:o,cy:r,r:s,fill:a,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):l==="ring"?i.jsx("circle",{...c,cx:o,cy:r,r:s,fill:"none",stroke:a,strokeWidth:1.5}):l==="cross"?i.jsx("path",{...c,d:`M${o-s},${r} L${o+s},${r} M${o},${r-s} L${o},${r+s}`,stroke:a,strokeWidth:1.5,strokeLinecap:"round"}):l==="chevron-up"||l==="chevron-down"?i.jsx("polyline",{...c,points:l==="chevron-up"?`${o-s},${r+s*.5} ${o},${r-s*.5} ${o+s},${r+s*.5}`:`${o-s},${r-s*.5} ${o},${r+s*.5} ${o+s},${r-s*.5}`,fill:"none",stroke:a,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null;return i.jsxs(i.Fragment,{children:[d,t.labels&&e.label&&i.jsx("text",{x:l==="none"?o:o+s+3,y:r+3,textAnchor:l==="none"?"middle":void 0,fontSize:Rt,fill:It(e),fillOpacity:Ae(e),children:e.label})]})}function d0({layer:e,frame:t,row:n,edges:o}){const r=e.caption?2:1;if(e.anchor==="left-edge"||e.anchor==="right-edge"){const x=e.anchor==="left-edge"?t.plotX0+kt+n*rt:t.plotX1-kt-n*rt,g=t.plotY1-34;return i.jsx("text",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",x,y:g,transform:`rotate(-90 ${x} ${g})`,fontSize:Rt,letterSpacing:"0.14em",fill:It(e),fillOpacity:Ae(e),children:e.text})}const s=e.anchor.startsWith("top"),a=e.anchor.endsWith("right"),l=x=>kt+(x?Dp:0),c=a?t.plotX1-l(o.right):t.plotX0+l(o.left),d=n*(r*rt+2),h=s?t.plotY0+kt+Tr+d:t.plotY1-kt-d,f=h-rt;return i.jsxs("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",textAnchor:a?"end":"start",children:[e.caption&&i.jsx("text",{x:c,y:s?h:f,fontSize:Rt,letterSpacing:"0.05em",fill:"var(--color-text-faint)",children:e.caption}),i.jsx("text",{x:c,y:e.caption&&s?h+rt:h,fontSize:Tr,fontWeight:700,fill:It(e),fillOpacity:Ae(e),children:e.text})]})}const Nr={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},u0={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function Fn({layers:e,frame:t,pass:n}){const o=e.map((l,c)=>({layer:l,index:c})).filter(({layer:l})=>u0[l.kind]===n).sort((l,c)=>Nr[l.layer.kind]-Nr[c.layer.kind]||(l.layer.z??0)-(c.layer.z??0)||l.index-c.index),r=new Map,s=[],a={left:e.some(l=>l.kind==="caption"&&l.anchor==="left-edge"||l.kind==="region"&&l.side==="left"&&!!l.label),right:e.some(l=>l.kind==="caption"&&l.anchor==="right-edge"||l.kind==="region"&&l.side==="right"&&!!l.label)};return i.jsx(i.Fragment,{children:o.map(({layer:l,index:c})=>{const d=`${l.id}-${c}`;switch(l.kind){case"relief":return i.jsx(r0,{layer:l,frame:t},d);case"water":return i.jsx(Lp,{layer:l,frame:t},d);case"field":return i.jsx(qp,{layer:l,frame:t},d);case"region":return i.jsx(s0,{layer:l,frame:t},d);case"series":return i.jsx(a0,{layer:l,frame:t},d);case"rule":return i.jsx(i0,{layer:l,frame:t},d);case"annotation":return i.jsx(l0,{layer:l,frame:t,placed:s},d);case"marker":return i.jsx(c0,{layer:l,frame:t},d);case"caption":{const h=r.get(l.anchor)??0;return r.set(l.anchor,h+1),i.jsx(d0,{layer:l,frame:t,row:h,edges:a},d)}default:return null}})})}function h0(e){return e.map(t=>t.description).filter(t=>typeof t=="string"&&t.length>0)}const Fr=11,Vt=3,Kt=4,zr=(e,t)=>e.x0<t.x1&&t.x0<e.x1&&e.y0<t.y1&&t.y0<e.y1;function f0(e,t,n,o,r){let s=0,a=1;const l=n-e,c=o-t,d=[[-l,e-r.x0],[l,r.x1-e],[-c,t-r.y0],[c,r.y1-t]];for(const[h,f]of d){if(h===0&&f<0)return!1;if(h!==0){const x=f/h;h<0?s=Math.max(s,x):a=Math.min(a,x)}}return s<=a}function p0(e,t){for(let n=1;n<e.cx.length;n++){const o=[e.cx[n-1],e.cy[n-1],e.cx[n],e.cy[n]];if(o.every(Number.isFinite)&&f0(o[0],o[1],o[2],o[3],t))return!0}return!1}function g0({labels:e,plot:t,obstacles:n,traces:o}){const r=[],s=new Map;for(const a of e){const l={y0:a.lineY-Vt-Fr,y1:a.lineY-Vt},c={y0:a.lineY+Vt,y1:a.lineY+Vt+Fr},d={x0:t.x1-Kt-a.width,x1:t.x1-Kt},h={x0:t.x0+Kt,x1:t.x0+Kt+a.width},f=[{...d,...l,anchor:"end"},{...d,...c,anchor:"end"},{...h,...l,anchor:"start"},{...h,...c,anchor:"start"}];let x=null;for(const g of f){if(!(g.x0>=t.x0&&g.x1<=t.x1&&g.y0>=t.y0&&g.y1<=t.y1)||r.some($=>zr(g,$)))continue;const b=2*n.filter($=>zr(g,$)).length+o.filter($=>p0($,g)).length;(x===null||b<x.cost)&&(x={spot:g,cost:b})}if(x===null){s.set(a.id,null);continue}r.push(x.spot),s.set(a.id,{x:x.spot.anchor==="end"?x.spot.x1:x.spot.x0,y:x.spot.y1-2,anchor:x.spot.anchor})}return s}const m0=4,x0=2.5;function v0(e,t){if(e.length===0)return!1;const n=e[e.length-1]-t;return n===0?!0:e.length===1?!1:Math.sign(e[0]-t)!==Math.sign(n)}function y0(e,t){return e==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:t?e==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const b0=(e,t)=>pa(e-t[0],t[1]-t[0]),_m=(e,t)=>pa((e-t[0])*1e3,(t[1]-t[0])*1e3),zn={top:10,bottom:28,left:50};function w0(e,t,n){const o=(s,a,l)=>Math.max(s,Math.min(l,a)),r=o(30,Math.round(e*.18),zn.left);return{top:zn.top,right:n?r:o(14,Math.round(e*.07),20),bottom:t<150?20:zn.bottom,left:r}}const Dr=e=>e.length*6.5+6,k0=4,$0=.4,_0=26,Xe=14,Ue=16,qt=4,S0=6,Dn=(e,t)=>Math.min(e.length*6+8,t);function j0(e,t){const n=[];let o=0,r=0;for(const s of e)r>0&&r+s>t&&(o+=1,r=0),n.push({row:o,x:r}),r+=s+S0;return{rows:e.length===0?0:o+1,positions:n}}const Hr=4,M0=.03;function Hn(e,t){const n=Math.max(0,Math.floor(t/6));if(e.length<=n)return e;const o=e.lastIndexOf(" (");if(o>0&&e.length-o+4<=n){const r=n-(e.length-o)-3;return`${e.slice(0,r)}...${e.slice(o)}`}return n<4?"":`${e.slice(0,n-3)}...`}function Br(e,t){const n=e.split(/(?=M)/).filter(r=>r.length>0),o=[];for(const r of n){const s=[...r.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)];if(s.length<2)continue;const a=s[0],l=s[s.length-1];o.push(`${r.trim()} L${l[1]},${t} L${a[1]},${t} Z`)}return o.length>0?o.join(" "):null}function E0(e,t,n,o,r=1){const s=[],a=_0*Math.max(.5,Math.min(2,r));for(let l=e+a/2;l<t;l+=a)for(let c=n+a/2;c<o;c+=a)s.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return s}const A0=120,P0=90,C0=70,R0=35,I0=2,L0=12,Wr=8,T0=2,Ne=14,_a=6,Sa=12,Xr=10,O0=.2,Ur=.6,Yr="5 3",N0=.15,F0=.45,z0="the value is inside the shaded region";function D0(e){return(e.type??"line")==="band"&&e.data.y2?[...e.data.y,...e.data.y2]:e.data.y}function H0({series:e,thresholds:t,yTickFormat:n}){const o=s=>s*_a,r=[];for(const s of e)r.push(o(s.label.length)+8);for(const s of t){if(s.kind==="marker")continue;const a=s.label??n(s.value);r.push(o(a.length)+Sa+8)}return Math.max(0,...r)+L0}function Sm({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:r=b0,yTickFormat:s=B0,yScalePrimary:a="linear",yScaleSecondary:l="linear",thresholds:c,legend:d="overlay",hideXAxis:h=!1,density:f="chart",spatial:x=!1,gridScale:g=1,layers:m,"aria-label":b,crosshair:$=!1,xKind:M="time",xReadFormat:_,xAxisLabel:L,yAxisLabel:E,ySecondaryAxisLabel:A,card:S,cardForms:O=1,width:j,height:G}){const N=p.useId(),B=f==="compact",I=B?"none":d,z=x,y=z||B,T=$&&!y&&e.some(u=>u.data.x.length>0),[Q,ie]=p.useState(null),[Ke,we]=p.useState(!1),[ze,ke]=p.useState(""),[le,Me]=p.useState(null),[fe,J]=p.useState(null),ee=fe?.w===j&&fe.h===G?fe.form:0,[De,He]=p.useState(null),$e=S!=null,ae=De?.form===ee?De:null;p.useLayoutEffect(()=>{if(!le){He(null);return}const u=()=>He(w=>{const C={w:le.offsetWidth,h:le.offsetHeight,form:ee};return w?.w===C.w&&w?.h===C.h&&w?.form===C.form?w:C});u();const v=new ResizeObserver(u);return v.observe(le),()=>v.disconnect()},[le,ee]);const ce=j,q=G,de=e.filter(u=>u.axis==="primary"&&u.data.x.length>0),me=e.filter(u=>u.axis==="secondary"&&u.data.x.length>0),Ie=me.length>0,ja=I!=="none"&&e.length>0||(c??[]).some(u=>u.label),_o=H0({series:e,thresholds:c??[],yTickFormat:s}),So=$e&&ae!==null&&ae.w+Wr<=Math.max(112,Math.ceil(_o)),ut=y||!ja?{placement:"overlay"}:Ff({width:ce,height:q,contentWidth:_o,legendHeight:I==="none"?0:e.length*Ue+6,cardHeight:So&&ae!==null?ae.h:0}),Pe=I!=="none"&&(ut.placement==="below"||ut.placement==="beside"&&ut.legendBelow),kn=Pe?j0(e.map(u=>Dn(u.label,ce-2*qt)),ce-2*qt):{rows:0,positions:[]},$n=kn.rows===0?0:kn.rows*Ue+4,jo=!y&&!h&&!!L,Mo=!y&&!!E,Eo=!y&&Ie&&!!A,Ao=y?{top:1,right:1,bottom:1,left:1}:w0(ce,q,Ie),qe={...Ao,bottom:Ao.bottom+(jo?Xe:0)+$n},Y=qe.top,K=q-qe.bottom,Le=K-Y,Tt=p.useMemo(()=>{const u={primary:[],secondary:[]};for(const v of m??[]){const w=Xp(v);u[w.axis].push(...w.ys)}return u},[m]),Ze=p.useMemo(()=>Gr(de,n,a,Tt.primary),[de,n,a,Tt]),Qe=p.useMemo(()=>Gr(me,o,l,Tt.secondary),[me,o,l,Tt]),ue=a==="log"?_r(Ze[0],Ze[1],K,Y):Ln(Ze[0],Ze[1],K,Y),he=l==="log"?_r(Qe[0],Qe[1],K,Y):Ln(Qe[0],Qe[1],K,Y),Po=Math.max(2,Math.min(7,Math.round(Le/R0))),_n=(u,v,w,C)=>{const R=Math.min(u,v),W=Math.max(u,v),P=(W-R)*1e-6||1e-6,X=V=>V>=R-P&&V<=W+P,Z=V=>C==="log"?np(R,W,V):Zn(R,W,V);for(let V=w;V<=64;V*=2){const xe=Z(V).filter(X);if(xe.length<2)continue;if(xe.length<=w)return xe;const vt=(xe.length-1)/(w-1),zt=Array.from({length:w},(U0,Xa)=>xe[Math.round(Xa*vt)]);return Array.from(new Set(zt))}return[R,W]},Ot=_n(Ze[0],Ze[1],Po,a==="log"?"log":"linear"),Nt=Ie?_n(Qe[0],Qe[1],Po,l==="log"?"log":"linear"):[],Co=(u,v)=>u.length===0?v:Math.max(v,Math.min(Math.round(ce*$0),Math.max(...u.map(w=>Dr(s(w,u))))+k0)),Sn=y?qe:{left:Co(Ot,qe.left)+(Mo?Xe:0),right:(Ie?Co(Nt,qe.right):qe.right)+(Eo?Xe:0)},U=Sn.left,Ro=ut.placement==="beside"?ut.columnWidth:0,ne=ce-Sn.right-Ro,_e=ne-U,Be=_e>=A0&&Le>=P0,oe=Ro>0?{x0:ne+(Ie?Sn.right:0)+Wr,y0:Y,x1:ce-T0,y1:K}:void 0,Io=I==="none"||oe||Pe?[]:e.map((u,v)=>({x0:U+3,y0:Y+6+v*Ue,x1:U+3+Dn(u.label,_e-6),y1:Y+6+v*Ue+13})),te=Ln(t[0],t[1],U,ne),Ma=Math.max(2,Math.min(8,Math.round(_e/C0))),ht=_n(t[0],t[1],Ma,"linear"),Ea=p.useMemo(()=>{const u=[],v=ht.length-1;if(v<0)return u;const w=Dr,C=6,R=P=>{const X=ht[P],Z=r(X,t,ht),V=te(X),xe=w(Z),vt=P===0?"start":P===v?"end":"middle",zt=vt==="start"?V:vt==="end"?V-xe:V-xe/2;return{x:V,text:Z,anchor:vt,leftEdge:zt,rightEdge:zt+xe}},W=R(0);if(u.push({x:W.x,text:W.text,anchor:W.anchor}),v>=1){const P=R(v);if(P.leftEdge>=W.rightEdge+C){let X=W.rightEdge;for(let Z=1;Z<v;Z++){const V=R(Z);V.leftEdge>=X+C&&V.rightEdge<=P.leftEdge-C&&(u.push({x:V.x,text:V.text,anchor:V.anchor}),X=V.rightEdge)}u.push({x:P.x,text:P.text,anchor:P.anchor})}}return u},[ht,t,te,r]),Lo=(u,v)=>{const w=new Set,C=u.length;if(C===0||(w.add(0),C===1))return w;const R=16,W=v(u[0]),P=v(u[C-1]);if(Math.abs(P-W)>=R){let X=W;for(let Z=1;Z<C-1;Z++){const V=v(u[Z]);Math.abs(V-X)>=R&&Math.abs(P-V)>=R&&(w.add(Z),X=V)}w.add(C-1)}return w},Aa=Lo(Ot,ue),Pa=Lo(Nt,he),Te=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>{const v=u.axis==="primary"?ue:he,w=u.type??"line";if(w==="band")return u.data.y2?{id:u.id,kind:"band",color:u.color,opacity:u.fillOpacity??O0,d:ga(u.data.x,u.data.y,u.data.y2,te,v)}:{id:u.id,kind:"noop"};if(w==="scatter"){const P=u.data.x.map((X,Z)=>({cx:te(X),cy:v(u.data.y[Z])}));return{id:u.id,kind:"scatter",color:u.color,points:P}}const C=w==="step"?Jf:$r,R=(u.data.bridges??[]).filter(P=>Qf(u.data.x,u.data.y,P,te,v)),W=[...new Set([...u.data.breaks??[],...R.map(P=>P.to)])].sort((P,X)=>P-X);return{id:u.id,kind:"stroked",color:u.color,dashed:u.dashed??!1,uncertainty:tp(u.data.x,u.data.reckoned??[],te,v),segments:ep(u.data.x,u.data.y,te,v,C,W,u.data.spans,u.data.reckoned),modelled:R.map(P=>({basis:P.basis,d:$r([u.data.x[P.to-1],...P.t,u.data.x[P.to]],[u.data.y[P.to-1],...P.v,u.data.y[P.to]],te,v)})),tail:u.data.x.length>0&&(u.data.reckoned??[]).some(P=>P.to>=u.data.x.length-1)?{cx:te(u.data.x[u.data.x.length-1]),cy:v(u.data.y[u.data.y.length-1])}:null,observed:[...new Set(R.flatMap(P=>[P.to-1,P.to]))].map(P=>({cx:te(u.data.x[P]),cy:v(u.data.y[P])}))}}),[e,te,ue,he]),Je=p.useMemo(()=>c?c.map(u=>{const v=u.axis??"primary",w=e.filter(R=>R.axis===v&&R.type!=="band"&&!R.dashed),C=u.kind==="limit"?w.some(R=>{const W=R.data.y.filter(P=>Number.isFinite(P));return W.length>0&&fa(W[W.length-1],u.value,u.bad)}):u.kind==="target"&&w.some(R=>v0(R.data.y,u.value));return{id:u.id,label:u.label,spokenLabel:u.spokenLabel,value:u.value,kind:u.kind,passed:C,currency:pn(u.reading,{drawsReckoning:!0}),tone:y0(u.kind,C),dashed:u.kind!=="marker",y:v==="primary"?ue(u.value):he(u.value)}}):[],[c,e,ue,he]),ft=p.useMemo(()=>{const u=(v,w,C)=>Math.max(v,Math.min(C,w));return(c??[]).flatMap(v=>{if(v.kind!=="limit"||!Number.isFinite(v.value))return[];const w=v.axis??"primary",C=w==="primary"?ue:he,R=C(v.value),W=v.bad==="above"?-1:1,P=v.label||`the limit at ${s(v.value)}`;return e.filter(X=>X.axis===w&&X.data.x.length>0&&(X.type??"line")!=="band"&&!X.dashed).flatMap(X=>qf({y:X.data.y,cx:X.data.x.map(te),cy:X.data.y.map(C),limit:v.value,limitY:R,bad:v.bad,breaks:X.data.breaks,step:X.type==="step"||X.type==="scatter",minGapPx:Ne}).slice(Be?0:-1).map(Z=>{const V=s(X.data.y[Z.index]),xe=r(X.data.x[Z.index],t);return{key:`${v.id}-${X.id}-${Z.index}`,color:X.color,x:u(U+Ne/2+1,Z.x-Xr*(Z.entered?1:-1),ne-Ne/2-1),y:u(Y+Ne/2+1,Z.y+W*Xr,K-Ne/2-1),text:Z.entered?Z.spells>1?`${X.label} went past ${P} ${Z.spells} times from ${xe}, first reading ${V}`:`${X.label} went past ${P} at ${xe}, reading ${V}`:`${X.label} was already past ${P} when this window began at ${xe}, reading ${V}`}}))})},[c,e,te,ue,he,r,s,t,U,ne,Y,K,Be]),pe=(()=>{if(!$e||ae===null||y)return;if(oe&&So){const R={x0:oe.x0,y0:K-ae.h,x1:oe.x0+ae.w,y1:K},W=Y+(I==="none"||Pe?0:e.length*Ue+6);return R.x1<=oe.x1&&R.y0>=W?R:void 0}const u=Ne/2,v=[...e.filter(R=>(R.type??"line")!=="band").flatMap(R=>{const W=R.axis==="primary"?ue:he,P=R.data.x.map(te),X=R.data.y.map(W);return R.type==="scatter"?P.map((Z,V)=>({cx:[Z],cy:[X[V]]})):[{cx:P,cy:X}]}),...Je.map(R=>({cx:[U,ne],cy:[R.y,R.y]}))],w=[...ft.map(R=>({x0:R.x-u,y0:R.y-u,x1:R.x+u,y1:R.y+u})),...I==="none"||oe||Pe?[]:e.map((R,W)=>({x0:U+3,y0:Y+6+W*16,x1:U+3+Math.min(R.label.length*6+8,_e-6),y1:Y+6+W*16+13}))],C=Wf({plot:{x0:U,y0:Y,x1:ne,y1:K},card:{width:ae.w,height:ae.h},traces:v,obstacles:w});return C?{x0:C.x,y0:C.y,x1:C.x+ae.w,y1:C.y+ae.h}:void 0})(),pt=p.useMemo(()=>{if(!Be)return new Map;const u=Ne/2;return g0({labels:Je.filter(v=>v.label).map(v=>({id:v.id,width:(v.label?.length??0)*_a+(v.currency.held?Sa:0),lineY:v.y})),plot:oe??{x0:U,y0:Y,x1:ne,y1:K},obstacles:[...pe?[pe]:[],...ft.map(v=>({x0:v.x-u,y0:v.y-u,x1:v.x+u,y1:v.y+u})),...I==="none"||Pe?[]:e.map((v,w)=>({x0:oe?oe.x0:U+3,y0:Y+6+w*16,x1:(oe?oe.x0:U+3)+Math.min(v.label.length*6+8,oe?oe.x1-oe.x0:_e-6),y1:Y+6+w*16+13}))],traces:(oe?[]:e).filter(v=>(v.type??"line")!=="band").map(v=>({cx:v.data.x.map(te),cy:v.data.y.map(v.axis==="primary"?ue:he)}))})},[Be,pe,oe,Je,ft,I,Pe,e,te,ue,he,U,ne,Y,K,_e]),Ca=e.flatMap(u=>{const v=Te.find(P=>P.id===u.id),w=v?.kind==="stroked"?v.modelled.map(P=>P.basis):[],C=u.data.reckoned??[];if(C.length===0&&w.length===0)return[];const W=[...new Set([...C.map(P=>P.basis),...w])].map(P=>`${u.label}: part of this trace is reckoned, ${Df(P)}, not measured`);return C.some(P=>P.bandLo&&P.bandHi)&&W.push(`${u.label}: ${z0}`),W}),Ra=Je.flatMap(u=>{const v=u.spokenLabel??u.label??u.id,w=[];return u.passed&&u.kind==="limit"&&w.push(`${v}: limit passed`),u.passed&&u.kind==="target"&&w.push(`${v}: target reached`),u.currency.held&&w.push(ys(v,u.currency.caption)),u.label&&!pt.get(u.id)&&w.length===0&&w.push(u.spokenLabel??u.label),w}),jn=[...Ca,...Ra],Ia=[b??"Telemetry line chart",...h0(m??[]),...jn].join("; "),Mn=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>M==="value"?Yf(u):u),[e,M]),En=p.useMemo(()=>T?Vf(Mn):[],[T,Mn]),gt=Math.min(t[0],t[1]),mt=Math.max(t[0],t[1]),La=M==="value"?(mt-gt)*M0:void 0;function To(u){const v=Mn.map(w=>{const C=Gf(w,u,La),R=w.format??s,W=w.axis==="primary"?ue:he,P=(w.type??"line")==="band";return C===null?{id:w.id,label:w.label,color:w.color,value:null}:{id:w.id,label:w.label,color:w.color,value:P&&C.y2!==void 0?`${R(C.y)} to ${R(C.y2)}`:R(C.y),currency:C.currency==="measured"?void 0:C.currency,modelled:C.currency==="modelled",y:P?void 0:W(C.y)}});if(Be)for(const w of Je)w.kind!=="marker"&&v.push({id:`threshold-${w.id}`,label:w.kind,color:w.tone.label,value:w.label??s(w.value),detail:!0,currency:w.currency.held?w.currency.mark==="modelled"?"modelled":"held":void 0,modelled:w.currency.held&&w.currency.mark==="modelled"});return{heading:(_??r)(u,t),rows:v}}function Oo(u){const{heading:v,rows:w}=To(u);return[v,...w.map(C=>`${C.label} ${C.value??"no sample"}${C.currency?`, ${C.currency}`:""}`)].join("; ")}const No=e.filter(u=>(u.type??"line")!=="band").map(u=>({cx:u.data.x.map(te),cy:u.data.y.map(u.axis==="primary"?ue:he)})),Fo=pe?[...No,Xf(pe)]:No,zo=$e&&!y&&ae!==null&&ae.w>0&&ae.h>0&&!pe&&ee<O-1;p.useLayoutEffect(()=>{zo&&J({w:j,h:G,form:ee+1})},[zo,j,G,ee]);const Ta=u=>{let v=u,w=Number.POSITIVE_INFINITY;for(const C of En)C<gt||C>mt||Math.abs(C-u)<w&&(w=Math.abs(C-u),v=C);return v},We=T&&Q!==null&&Q.at>=gt&&Q.at<=mt?Ta(Q.at):null,et=We===null?null:To(We),xt=et!==null&&We!==null?Af({x:te(We),plot:{x0:U,y0:Y,x1:ne,y1:K},heading:et.heading,rows:et.rows,avoid:Io,traces:Fo}):void 0,Oa=pe!==void 0&&xt!==void 0&&xt.x0<pe.x1&&xt.x1>pe.x0&&xt.y0<pe.y1&&xt.y1>pe.y0;function Na(u){const v=u.currentTarget.getBoundingClientRect(),w=u.clientX-v.left;return w<U||w>ne?null:t[0]+(w-U)/(ne-U)*(t[1]-t[0])}function Fa(u){const v=Na(u);if(v===null){ie(w=>w?.source==="pointer"?null:w);return}ie({at:v,source:"pointer"})}function za(u){const v=En.filter(W=>W>=gt&&W<=mt),w={ArrowLeft:u.shiftKey?-10:-1,ArrowRight:u.shiftKey?10:1,Home:-v.length,End:v.length};if(u.key==="Escape"){if(Q===null)return;u.preventDefault(),ie(null),ke("");return}const C=w[u.key];if(C===void 0)return;u.preventDefault();const R=kr(v,We,C);R!==null&&(ie({at:R,source:"keys"}),ke(Oo(R)))}function Da(u){try{we(u.currentTarget.matches(":focus-visible"))}catch{we(!0)}if(Q!==null)return;const v=kr(En.filter(w=>w>=gt&&w<=mt),null,0);v!==null&&(ie({at:v,source:"keys"}),ke(Oo(v)))}function Ha(){we(!1),ie(u=>u?.source==="keys"?null:u),ke("")}const Ba=T?{tabIndex:0,onPointerMove:Fa,onPointerLeave:()=>ie(u=>u?.source==="pointer"?null:u),onKeyDown:za,onFocus:Da,onBlur:Ha}:{},Ft={scaleX:te,scaleYPrimary:ue,scaleYSecondary:he,plotX0:U,plotX1:ne,plotY0:Y,plotY1:K,uid:N,labels:Be},Wa=z&&m?Kp(m,Ft):()=>!1,An=`plot-layer-clip-${N}`;if(_e<=0||Le<=0)return i.jsx("svg",{width:Math.max(0,ce),height:Math.max(0,q),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:i.jsx("title",{children:"Chart too small to render"})});const Do=i.jsxs("svg",{width:ce,height:q,role:ft.length>0||T?"group":"img","aria-label":Ia,"aria-describedby":T?`${N}-crosshair-hint`:void 0,...Ba,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...T?{touchAction:"pan-y",outline:Ke?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[m&&m.length>0&&i.jsx("defs",{children:i.jsx("clipPath",{id:An,children:i.jsx("rect",{x:U,y:Y,width:_e,height:Le})})}),jn.length>0&&i.jsx("title",{children:jn.join("; ")}),i.jsx("rect",{x:U,y:Y,width:_e,height:Le,fill:"var(--color-surface-panel)"}),m&&m.length>0&&i.jsx("g",{clipPath:`url(#${An})`,children:i.jsx(Fn,{layers:m,frame:Ft,pass:"background"})}),!y&&Ot.map((u,v)=>{const w=ue(u);return i.jsxs(Ht.Fragment,{children:[i.jsx("line",{x1:U,y1:w,x2:ne,y2:w,stroke:"var(--color-border-subtle)",strokeWidth:1}),Aa.has(v)&&i.jsx("text",{x:U-4,y:w,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,Ot)})]},`py-${v}`)}),!y&&Nt.map((u,v)=>Pa.has(v)?i.jsx("text",{x:ne+4,y:he(u),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,Nt)},`sy-${v}`):null),!h&&!y&&ht.map((u,v)=>i.jsx("line",{x1:te(u),y1:Y,x2:te(u),y2:K,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${v}`)),!h&&!y&&Ea.map((u,v)=>i.jsx("text",{x:u.x,y:K+14,textAnchor:u.anchor,fill:"var(--color-text-faint)",fontSize:11,children:u.text},`xl-${v}`)),jo&&i.jsx("text",{x:(U+ne)/2,y:q-$n-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:Hn(L,_e)}),Mo&&i.jsx("text",{x:Xe/2,y:(Y+K)/2,transform:`rotate(-90 ${Xe/2} ${(Y+K)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:Hn(E,Le)}),Eo&&i.jsx("text",{x:ce-Xe/2,y:(Y+K)/2,transform:`rotate(90 ${ce-Xe/2} ${(Y+K)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:Hn(A,Le)}),z&&E0(U,ne,Y,K,g).filter(u=>!Wa(u.x,u.y)).map(u=>i.jsx("circle",{cx:u.x,cy:u.y,r:1,fill:"var(--color-text-faint)",opacity:.35},u.key)),!y&&i.jsxs(i.Fragment,{children:[i.jsx("line",{x1:U,y1:Y,x2:U,y2:K,stroke:"var(--color-border-strong)",strokeWidth:1}),i.jsx("line",{x1:U,y1:K,x2:ne,y2:K,stroke:"var(--color-border-strong)",strokeWidth:1}),Ie&&i.jsx("line",{x1:ne,y1:Y,x2:ne,y2:K,stroke:"var(--color-border-strong)",strokeWidth:1})]}),Te.filter(u=>u.kind==="band").map(u=>i.jsx("path",{d:u.d,fill:u.color,fillOpacity:u.opacity,stroke:"none"},u.id)),Te.filter(u=>u.kind==="stroked").flatMap(u=>u.uncertainty.map((v,w)=>i.jsx("path",{d:v.d,"data-band-kind":v.kind,fill:u.color,fillOpacity:N0,stroke:v.kind==="bound"?u.color:"none",strokeOpacity:v.kind==="bound"?F0:void 0,strokeWidth:v.kind==="bound"?1:void 0},`${u.id}-band-${w}`))),Te.filter(u=>u.kind==="stroked").flatMap(u=>u.segments.map((v,w)=>i.jsxs(Ht.Fragment,{children:[B&&v.basis===void 0&&Br(v.d,K)&&i.jsx("path",{d:Br(v.d,K)??void 0,fill:u.color,fillOpacity:.12,stroke:"none"}),i.jsx("path",{d:v.d,"data-stream-status":v.status,"data-reckoning-basis":v.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:v.basis!==void 0?Ur:void 0,strokeDasharray:v.basis!==void 0?Yr:u.dashed?"4 3":void 0})]},`${u.id}-${w}`))),Te.filter(u=>u.kind==="stroked").flatMap(u=>u.modelled.map((v,w)=>i.jsx("path",{d:v.d,"data-reckoning-basis":v.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:Ur,strokeDasharray:Yr},`${u.id}-modelled-${w}`))),Te.map(u=>u.kind==="stroked"&&u.tail!==null?i.jsx(ua,{kind:"modelled",x:u.tail.cx,y:u.tail.cy},`${u.id}-tail`):null),Te.filter(u=>u.kind==="stroked").flatMap(u=>u.observed.map((v,w)=>i.jsx("circle",{cx:v.cx,cy:v.cy,r:x0,fill:u.color,"data-observed-sample":""},`${u.id}-observed-${w}`))),Te.filter(u=>u.kind==="scatter").flatMap(u=>u.points.map((v,w)=>i.jsx("circle",{cx:v.cx,cy:v.cy,r:I0,fill:u.color},`${u.id}-${w}`))),e.map(u=>{if(!u.headMark)return null;const v=u.axis==="primary"?ue:he;let w=u.data.x.length-1;for(;w>=0&&!(Number.isFinite(u.data.x[w])&&Number.isFinite(u.data.y[w]));)w-=1;return w<0?null:i.jsx("circle",{cx:te(u.data.x[w]),cy:v(u.data.y[w]),r:m0,fill:u.headMark==="dot"?u.color:"var(--color-surface-panel)",stroke:u.color,strokeWidth:u.headMark==="dot"?0:1.5,"data-head-mark":u.headMark},`${u.id}-head`)}),m&&m.length>0&&i.jsx("g",{clipPath:`url(#${An})`,children:i.jsx(Fn,{layers:m,frame:Ft,pass:"foreground"})}),Je.map(u=>i.jsxs(Ht.Fragment,{children:[i.jsx("line",{x1:U,y1:u.y,x2:B&&u.kind==="marker"?U+24:ne,y2:u.y,stroke:u.tone.line,strokeWidth:1,strokeDasharray:u.dashed?"4 3":void 0,"data-threshold-kind":u.kind,"data-threshold-passed":u.passed||void 0}),B&&u.kind==="marker"&&u.label&&i.jsx("text",{x:U+28,y:u.y+3.5,fill:u.tone.label,fontSize:10,children:u.label}),!(B&&u.kind==="marker")&&u.label&&pt.get(u.id)&&i.jsxs("text",{x:pt.get(u.id)?.x,y:pt.get(u.id)?.y,textAnchor:pt.get(u.id)?.anchor,fill:u.tone.label,fontSize:10,children:[u.label,u.currency.held&&i.jsx(Gn,{size:10,kind:u.currency.mark??"held"})]})]},u.id)),ft.map(u=>i.jsx(Kf,{x:u.x,y:u.y,size:Ne,color:u.color,text:u.text},u.key)),I!=="none"&&e.map((u,v)=>{const w=Pe?kn.positions[v]:void 0,C=w?q-$n+2+w.row*Ue:Y+6+v*Ue;if(!Pe&&C+13>K)return null;const R=w?qt+w.x:oe?oe.x0:U+3,W=Pe?ce-2*qt:oe?oe.x1-oe.x0:_e-6,P=Dn(u.label,W),X=Math.max(1,Math.floor((P-8)/6)),Z=u.label.length>X?`${u.label.slice(0,Math.max(1,X-1))}...`:u.label;return i.jsxs(Ht.Fragment,{children:[i.jsx("rect",{x:R,y:C,width:P,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),i.jsx("text",{x:R+3,y:C+10,fill:u.color,fontSize:10,children:Z})]},u.id)}),m&&m.length>0&&Be&&i.jsx(Fn,{layers:m,frame:Ft,pass:"caption"}),et!==null&&We!==null&&i.jsx(Pf,{x:te(We),plot:{x0:U,y0:Y,x1:ne,y1:K},heading:et.heading,rows:et.rows,avoid:Io,traces:Fo})]}),Ho=$e?i.jsx("div",{ref:Me,"data-plot-card":"",style:{position:"absolute",left:pe?.x0??0,top:pe?.y0??0,visibility:pe&&!Oa?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof S=="function"?S({width:_e-Hr*2,height:Le-Hr*2,form:ee}):S}):null;return T?i.jsxs(i.Fragment,{children:[Do,Ho,i.jsx(Ge,{id:`${N}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),i.jsx(Ge,{role:"status","aria-live":"polite",children:ze})]}):i.jsxs(i.Fragment,{children:[Do,Ho]})}function Gr(e,t,n,o=[]){if(t)return t;if(e.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let r=[...e.flatMap(D0),...o];return n==="log"&&(r=r.filter(s=>s>0)),r.length===0?n==="log"?[1,10]:[0,1]:[Math.min(...r),Math.max(...r)]}function B0(e){if(e===0)return"0";if(Math.abs(e)>=1e6)return`${(e/1e6).toFixed(1)}M`;if(Math.abs(e)>=1e3)return`${(e/1e3).toFixed(1)}k`;if(Number.isInteger(e))return String(e);if(Math.abs(e)<.01){const t=Math.floor(Math.log10(Math.abs(e))),n=e/10**t;return Math.abs(n-1)<1e-9?`1e${t}`:`${n.toFixed(1)}e${t}`}return e.toFixed(2)}const W0=p.createContext(null);function X0(e,t){const n=p.useContext(W0),o=n?.setFooter,r=n?.setDirty;p.useEffect(()=>(o?.(e),()=>o?.(null)),[o,e]),p.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function jm(e){const{onSave:t,value:n,saved:o,saveLabel:r="Save",extra:s,disabled:a}=e,l=p.useRef(null);l.current===null&&(l.current={v:n});const c=!lt(n,l.current.v)&&!lt(n,o),d=p.useRef(t);d.current=t;const h=p.useMemo(()=>i.jsxs(i.Fragment,{children:[s,i.jsx(Li,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:a,children:r})]}),[s,a,r]);X0(h,c)}export{lt as $,Bg as A,on as B,Ig as C,Eg as D,sg as E,Ui as F,fg as G,qg as H,Xi as I,pg as J,Rg as K,$g as L,Hc as M,Tg as N,Cg as O,bm as P,Yg as Q,Gg as R,Sg as S,Vh as T,ug as U,_g as V,Dc as W,Ng as X,ag as Y,hg as Z,Ge as _,Xg as a,Wc as a$,rg as a0,Xp as a1,yn as a2,X0 as a3,jm as a4,_m as a5,mn as a6,Ds as a7,W0 as a8,Vs as a9,Gn as aA,vg as aB,Ms as aC,wg as aD,xm as aE,Pf as aF,se as aG,um as aH,ls as aI,ua as aJ,_s as aK,zu as aL,Qg as aM,bg as aN,nm as aO,be as aP,rp as aQ,Pd as aR,nr as aS,fo as aT,Ns as aU,xs as aV,rm as aW,vs as aX,po as aY,Fs as aZ,vd as a_,fn as aa,rn as ab,pn as ac,Ee as ad,so as ae,hd as af,gm as ag,Sm as ah,Ju as ai,Ve as aj,hs as ak,Ug as al,Dg as am,ku as an,yt as ao,Ag as ap,Hd as aq,Es as ar,sm as as,am as at,ym as au,pm as av,mm as aw,mg as ax,ou as ay,xg as az,Wg as b,em as b0,fs as b1,Jg as b2,us as b3,wm as b4,xr as b5,ap as b6,$m as b7,Ff as b8,tm as b9,Bi as bA,er as bB,cm as bC,Af as ba,km as bb,xn as bc,Df as bd,dm as be,ys as bf,Un as bg,qd as bh,kd as bi,go as bj,vm as bk,fm as bl,Gs as bm,xh as bn,Lt as bo,Ld as bp,uo as bq,Xc as br,hm as bs,lm as bt,jd as bu,td as bv,Mi as bw,Ii as bx,om as by,im as bz,kg as c,yg as d,Li as e,zg as f,Hg as g,Fg as h,zc as i,ig as j,Pg as k,cg as l,Yi as m,lg as n,Ou as o,dg as p,Uu as q,Zg as r,Kg as s,jg as t,Mg as u,Vg as v,Lg as w,gg as x,Gi as y,Og as z};
