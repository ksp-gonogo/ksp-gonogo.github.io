import{j as i}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import k,{css as H,createGlobalStyle as pi}from"./ext-styled-components-DAuodqsN.js";import{r as p,R as qt}from"./ext-react-C0MU9AHG.js";import{h as ms,l as gi}from"./logger-2_QM1wvD.js";import{cF as It,cK as ln,aY as Be,b6 as xs,l as mi,ch as mt,aM as Vt,cl as vs}from"./view-clock-formula-CE9EFuZC.js";import"./ksp-enum-names-BhWgn1Kx.js";import{G as po,z as xi}from"./screen-B7KA3l9h.js";import{m as to,l as ys,T as se,d as ye,x as xt,a1 as go,N as cn,w as Te,a2 as vi,n as yi,Q as mo,a3 as xo,a4 as bi,a5 as wi,a6 as ki,a7 as bs,a8 as $i,G as cr,a9 as _i,aa as Mi,ab as Si,ac as ji,ad as Ei,Z as ht,ae as Ai,af as Ci,J as Ri,j as ws,_ as Pi,k as Nt,K as ks,ag as Ii,S as $s,ah as _s,U as dr,A as Kt,f as ur,ai as hr,s as Dn,aj as Li,ak as Ti}from"./contributionsRead-CM5BemGo.js";import{I as Oi}from"./index-CPl7pTck.js";import"./lagrange-ChplOwnt.js";import{R as Ni}from"./use-transmissions-CxsrRjOy.js";import{gridToPixels as Fi}from"./ext-ui-kit-grid-CYQFMmYG.js";import{r as Di}from"./ext-react-dom-DCF8ZnaJ.js";const vm={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function ym({children:e,layout:t="inline",...n}){return i.jsx(Hi,{$layout:t,...n,children:e})}const zi={inline:H``,fill:H`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},Hi=k.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>zi[e]}
`,Je=H`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,yn=H`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,Bi="data-restoring-focus",Wi=120,Xi=48,Ui=120,fr=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function zt(e){return Ms(e,"below")}function Ms(e,t){const[n,o]=p.useState(null),[r,s]=p.useState(!1),[a,l]=p.useState(!1),[c,d]=p.useState(!1),[h,f]=p.useState(!1),x=p.useRef(null),m=p.useRef(!1),g=p.useRef(!1),v=p.useRef(null),$=e!=null&&e!==""?e:null,j=n!==null&&(r||a||c||h),S=p.useCallback(()=>{v.current!==null&&clearTimeout(v.current),v.current=null},[]),L=p.useCallback(()=>{S(),o(null),s(!1),l(!1),d(!1),f(!1),m.current=!1},[S]);p.useEffect(()=>{if(!h)return;const M=()=>{const _=document.getSelection(),B=_!==null&&!_.isCollapsed&&x.current?.contains(_.anchorNode)===!0;!m.current&&!B&&f(!1)},P=()=>{m.current=!1,M()};return document.addEventListener("pointerup",P),document.addEventListener("selectionchange",M),()=>{document.removeEventListener("pointerup",P),document.removeEventListener("selectionchange",M)}},[h]);const E=p.useCallback(()=>{S(),v.current=setTimeout(()=>{v.current=null,s(!1),d(!1)},Ui)},[S]);if(p.useEffect(()=>S,[S]),p.useEffect(()=>{if(n!==null)return window.addEventListener("scroll",L,!0),window.addEventListener("resize",L),()=>{window.removeEventListener("scroll",L,!0),window.removeEventListener("resize",L)}},[n,L]),p.useEffect(()=>{if(!j)return;const M=P=>{P.key==="Escape"&&(P.stopPropagation(),L())};return document.addEventListener("keydown",M,!0),()=>document.removeEventListener("keydown",M,!0)},[j,L]),$===null)return{anchor:{},tip:null};const C=M=>{const P=M.getBoundingClientRect();o({top:P.bottom,left:P.left,above:t==="above"?P.top>=Xi:window.innerHeight-P.bottom<Wi,anchorTop:P.top})};return{anchor:{"data-tooltip":$,onPointerEnter:M=>{S(),C(M.currentTarget),s(!0)},onPointerLeave:E,onPointerDown:()=>{g.current=!0,L()},onPointerUp:()=>{g.current=!1},onFocus:M=>{g.current||document.documentElement.hasAttribute(Bi)||(C(M.currentTarget),l(!0))},onBlur:()=>{l(!1),!r&&!c&&o(null)}},tip:j?Di.createPortal(i.jsx(Gi,{ref:x,at:n,text:$,onPress:()=>{m.current=!0,f(!0)},onPointerEnter:()=>{S(),d(!0)},onPointerLeave:E}),document.body):null}}const Gi=p.forwardRef(function({at:t,text:n,onPress:o,onPointerEnter:r,onPointerLeave:s},a){const l=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return i.jsx(qi,{ref:a,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),o()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...l,left:t.left,"--tip-left":`${t.left}px`},children:n})});function at(e,t){return(...n)=>{typeof e=="function"&&e(...n),t?.(...n)}}function Pe({text:e,children:t,focusable:n=!1,announce:o=!0,placement:r="below"}){const{anchor:s,tip:a}=Ms(e,r);if(e==null||e==="")return t;const l=t.props,c=l["aria-label"],d=!o||typeof c=="string"&&fr(c).includes(fr(e));return i.jsxs(i.Fragment,{children:[p.cloneElement(t,{"data-tooltip":e,onPointerEnter:at(l.onPointerEnter,s.onPointerEnter),onPointerLeave:at(l.onPointerLeave,s.onPointerLeave),onPointerDown:at(l.onPointerDown,s.onPointerDown),onPointerUp:at(l.onPointerUp,s.onPointerUp),onFocus:at(l.onFocus,s.onFocus),onBlur:at(l.onBlur,s.onBlur),"aria-description":d?l["aria-description"]:e,tabIndex:n?l.tabIndex??0:l.tabIndex}),a,n&&i.jsx(Yi,{})]})}const Yi=pi`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,qi=k.div`
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
`;function Ss(e){let t="";return p.Children.forEach(e,n=>{if(typeof n=="string"||typeof n=="number"){t+=String(n);return}p.isValidElement(n)&&(t+=Ss(n.props.children))}),t.replace(/\s+/g," ").trim()}function js({label:e,children:t,disabledReason:n}){return Vi({label:e,children:t,disabledReason:n})}function Vi({label:e,children:t,disabledReason:n}){const o=e!==void 0&&e!==""&&e!==Ss(t)?e:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function Es(e,t){return e===!0&&t!==void 0&&t!==""}function As(e){e.preventDefault(),e.stopPropagation()}function Cs(e,t,n){return t===null||e.props["data-tooltip"]!==void 0?e:i.jsx(Pe,{text:t,announce:n,children:e})}const vo="max(0.075em, 1.25px)",oe={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},We=k.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,no=oe.held.domSize,oo=oe.modelled.domSize,Ki=H`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${no} + 0.14em);
  }
`,Zi=H`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${oo} + 0.14em);
  }
`;function Qi(e){return H`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${oe[e].hollowDomSize} + 0.14em);
    }
  `}function Rs(e,t=!1){return t?Qi(e):e==="current"?null:e==="modelled"?Zi:Ki}const Ji=k.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${no};
  height: ${no};
  background: ${oe.held.color};
`,el=k.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${oo};
  height: ${oo};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${oe.modelled.color};
`,yo=e=>H`
  position: absolute;
  right: 0;
  top: 0;
  width: ${oe[e].hollowDomSize};
  height: ${oe[e].hollowDomSize};
`,tl=k.span`
  ${yo("current")}
  border: ${vo} solid ${oe.current.color};
  border-radius: var(--radius-circle);
`,nl=k.span`
  ${yo("held")}
  border: ${vo} solid ${oe.held.color};
`,ol=k.span`
  ${yo("modelled")}
  --stroke: ${vo};
  background: ${oe.modelled.color};
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
`,rl={current:tl,held:nl,modelled:ol};function Ps({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?rl[e]:e==="modelled"?el:Ji;return i.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const sl=k.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>Rs(e??"held",t)}
`;function ro({caption:e,kind:t="held",elsewhere:n=!1,children:o,...r}){const{anchor:s,tip:a}=zt(e);return i.jsxs(sl,{$kind:t,$elsewhere:n,...r,...s,children:[o,i.jsx(Ps,{kind:t,elsewhere:n}),e!==null&&i.jsxs(We,{"data-unit-currency":"",children:[", ",e]}),a]})}const al=p.forwardRef(function({variant:t="default",tone:n,size:o="md",pressed:r,predictedOutcome:s,disabledReason:a,marked:l,type:c="button",...d},h){const f=Es(d.disabled,a),x=js({label:d["aria-label"],children:d.children,disabledReason:f?a:void 0}),{disabled:m,onClick:g,children:v,...$}=d;return Cs(i.jsx(gl,{ref:h,$variant:t,$tone:n??(t==="primary"?"go":"neutral"),$size:o,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,"data-held-button":l?"":void 0,...$,disabled:f?void 0:m,...f?{"aria-disabled":!0}:{},onClick:f?As:g,type:c,children:l?i.jsx(il,{kind:l.kind,caption:l.caption,children:v}):v}),x,f)}),il=k(ro)`
  position: static;

  &::after {
    content: none;
  }

  & > [data-held-mark] {
    top: 3px;
    right: 3px;
  }
`;function ll(e){return e==="neutral"?"go":e}const bo=e=>H`
  background: ${to[e]};
  border-color: ${to[e]};
  color: ${ys[e]};
`,cl=e=>H`
  border-color: ${se[e]};
  color: ${ye[e]};
`,pr={default:H`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:H`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},dl=H`
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
`,ul=H`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function hl(e,t){return e==="text"?dl:e==="primary"?bo(t):t==="neutral"?pr[e]:H`
    ${pr[e]}
    ${cl(t)}
  `}const fl=H`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,pl={sm:H`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:H`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},gl=k.button`
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

  ${({$size:e})=>pl[e]}
  ${({$variant:e,$tone:t})=>hl(e,t)}
  ${({$pressed:e,$tone:t})=>e?bo(ll(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":fl}
  ${Je}
  &[data-held-button] {
    position: relative;
  }
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
    min-height: var(--touch-target);
    /* Wider on both axes: min-height only covers the vertical target. */
    padding: ${({$size:e})=>e==="sm"?"var(--inset-control-small-touch)":"var(--inset-control-touch)"};
  }

  ${({$variant:e})=>e==="text"?ul:""}
`,bm=k.button`
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
  ${Je}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,ml=k.button`
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
    ${bo("go")}
  }
  ${Je}
  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.4;
    cursor: not-allowed;
  }
  @media (pointer: coarse) {
    min-width: var(--touch-target);
    min-height: var(--touch-target);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`,xl=p.forwardRef(function({pressed:t,disabledReason:n,...o},r){const s=Es(o.disabled,n),a=js({label:o["aria-label"],children:o.children,disabledReason:s?n:void 0}),{disabled:l,onClick:c,...d}=o;return Cs(i.jsx(ml,{ref:r,"aria-pressed":t,...d,disabled:s?void 0:l,...s?{"aria-disabled":!0}:{},onClick:s?As:c}),a,s)}),wm=k.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,vl=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,km=k.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,yl=k.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,$m=k.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,_m=k.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,wo=H`
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

  ${Je}

  /* The browser's own clear control ignores the theme; SearchBox draws the kit's. */
  &::-webkit-search-cancel-button {
    appearance: none;
  }

  @media (pointer: coarse) {
    min-height: var(--touch-target);
    padding: var(--inset-field-touch);
    /* 16px stops iOS Safari zooming on focus; a literal, because the threshold is absolute. */
    font-size: 16px;
  }
`,bl=k.input`
  ${wo}
  width: 100%;
`,Mm=k.select`
  ${wo}
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
`,Sm=k.textarea`
  ${wo}
  width: 100%;
  resize: vertical;
`;function wl(e){if(e===void 0)return null;const{value:t}=go(e.magnitude,e.unit);return t===cn?null:t}function Is(e,t){const n=wl(t);return n===null?e:`${e}, as of ${n}`}const ko="modelled to SCET";function kl(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function gr(e){return ln(e.value)||It(e.value)?{shown:e.value,held:!1,mark:null,isStatic:ln(e.value),isDeterministic:It(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:Is(xt(e.grade),e.asOfUt)}}function bn(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:ln(e),isDeterministic:It(e),caption:null,band:null};const n=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!It(e.value)){const o=e.reckoning.modelled;if(e.state==="held"){const s=gr(e),a=e.value===void 0,l=s.held||a,c=s.caption??(a?"":null);return{...s,shown:o,held:l,mark:l?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:n}}const r=e.reckoning.beyondReceived;return{shown:o,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?ko:null,band:n}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:ln(e.value),isDeterministic:It(e.value),caption:null,band:n}:e.state==="held"?{...gr(e),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Ls(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function $l(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:ko}:null;if(e.state==="held"){const n=Is(xt(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function jm(e){return e===void 0?null:typeof e!="string"?$l(e):{kind:"held",caption:xt(e)}}function $o(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function Em(e,t){const n=$o(t);return n===void 0?e:{state:"held",value:e,grade:n,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}function _o(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function Am(e={}){return _o(t=>Te(t,e))}const _l=.01;function Cm({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const r=Math.abs(t(n)-t(o));return(e?Math.min(r,1-r):r)<=_l}}}function Ts(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(r=>!n.readsAsOne(e,r))}function Mo({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,r=v=>vi(typeof v=="number"?v:v.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,a=kl(s);if(s?.value!==void 0&&a!==void 0)return Ts(s.value,a,_o(r))?i.jsx(ro,{"data-held":"",kind:"modelled",caption:`${ko}, last received ${r(s.value)}`,children:r(a)}):i.jsx(i.Fragment,{children:r(s.value)});const l=bn(o,{drawsReckoning:!0}),{shown:c,held:d,mark:h,caption:f}=l,x=typeof e=="number"?e:c;if(x==null)return cn;const m=r(x),g=Ls({...l,shown:x});return d?i.jsx(ro,{...g,kind:h??"held",caption:f,children:m}):i.jsx("span",{"data-figure":g["data-figure"],children:m})}function Ht(e){const t=p.useRef(null),[n,o]=p.useState(e),[r,s]=p.useState(null);return p.useEffect(()=>{t.current!==r&&s(t.current)}),p.useEffect(()=>{if(!r||typeof ResizeObserver>"u")return;const a=new ResizeObserver(l=>{for(const c of l)c.contentRect.width>0&&c.contentRect.height>0&&o({w:Math.floor(c.contentRect.width),h:Math.floor(c.contentRect.height)})});return a.observe(r),()=>a.disconnect()},[r]),{ref:t,size:n}}const Ml='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Os(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),r=n[o+1]??n[o-1];if(r&&r!==e){r.focus();return}const s=t.closest("[data-panel-rail-frame]"),a=s?s.parentElement?.querySelector("[data-panel-body]"):t.closest("[data-panel-body]");if(!a)return;const l=[...a.querySelectorAll(Ml)].find(c=>c!==e);if(l){l.focus();return}a.hasAttribute("tabindex")||a.setAttribute("tabindex","-1"),a.focus()}function So(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const jo={"in-transit":.18,"awaiting-reply":.5,due:.62,overdue:.82,lost:.95};function Sl(e){const t=e.reachEtaSeconds,n=jl(e);if(t===null||n===null)return jo[e.predictedPhase];const o=n-t;return Math.max(0,Math.min(1,o/(3*n)))}function jl(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function El(e){return e.map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:Sl(t),glyph:t.glyph??So(t.label||t.command),...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function Rm({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||po(e)!=="shown"?"none":n||xi({oneWaySeconds:Be("s",e)})==="live"?"badge":t?"strip":"none"}const Al={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},so={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Cl(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Al[e.phase]}const wn=new Set(["overdue","lost"]),Rl=180,Pl=96;function Ns(e){return Te(Be("s",Math.max(0,e)))}function Il(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const Ll=1;function Eo(e){const t=Oi(),n=p.useRef(t);n.current=t;const[o,r]=p.useState(e),s=p.useRef({eta:e,ut:zn(t)});return p.useEffect(()=>{const a=s.current.eta;(a===null!=(e===null)||a!==null&&e!==null&&Math.abs(e-a)>=Ll)&&(s.current={eta:e,ut:zn(n.current)},r(e))},[e]),p.useEffect(()=>{const a=setInterval(()=>{const{eta:l,ut:c}=s.current;if(l===null)return;const d=zn(n.current);if(d!==void 0){if(c===void 0){s.current={eta:l,ut:d};return}r(Math.max(0,l-(d-c)))}},1e3);return()=>clearInterval(a)},[]),o}function zn(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function Tl({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":r="In-flight commands",variant:s="inline",onDismiss:a}){const{ref:l,size:c}=Ht({w:320,h:0});if(s==="rail")return e.length===0?null:i.jsx(Dl,{items:e,"aria-label":r});if(s==="expanded")return e.length===0?null:i.jsx(Xl,{items:e,"aria-label":r,onDismiss:a});const d=n!=="auto"?n:c.w>=Rl?"full":c.w>=Pl?"compact":"badge";return e.length===0?null:d==="badge"?i.jsx(zl,{ref:l,items:e,mode:t,"aria-label":r}):i.jsx(Ds,{ref:l,role:"list","aria-label":r,"data-mode":t,"data-density":d,$row:o==="row",children:e.map(h=>i.jsx(Hl,{item:h,$compact:d==="compact"},h.id))})}const Hn=100,mr=16,Ol=-4,Nl=9,Fl=.22;function Dl({items:e,"aria-label":t}){const n=p.useId(),o=`${e.length} in flight`;return i.jsxs(Bl,{role:"img","aria-label":`${t}: ${o}`,viewBox:`0 0 ${Hn} ${mr}`,preserveAspectRatio:"none",children:[i.jsx("defs",{children:e.map((r,s)=>{const a=wn.has(r.phase)?se.warn:"var(--color-accent-fg)",c=Math.max(0,Math.min(1,r.progress??jo[r.phase]))*Hn;return i.jsxs("radialGradient",{id:`${n}-${s}`,gradientUnits:"userSpaceOnUse",cx:c,cy:Ol,r:Nl,children:[i.jsx("stop",{offset:"0",stopColor:a,stopOpacity:Fl}),i.jsx("stop",{offset:"1",stopColor:a,stopOpacity:"0"})]},r.id)})}),e.map((r,s)=>i.jsx("rect",{"data-role":"glow","data-phase":r.phase,x:"0",y:"0",width:Hn,height:mr,fill:`url(#${n}-${s})`},r.id))]})}const zl=function({ref:t,items:n,mode:o,"aria-label":r}){const s=Eo(Il(n)),a=n.some(c=>wn.has(c.phase)),l=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${Ns(s)}`;return i.jsx(Pe,{text:n.map(c=>c.label).join(`
`),focusable:!0,children:i.jsx(Ds,{ref:t,role:"group","aria-label":`${r}: ${l}`,"data-mode":o,"data-density":"badge",$row:!1,children:i.jsxs(zs,{$phase:a?"overdue":"in-transit",children:[i.jsx(Hs,{"aria-hidden":"true",$pulse:!a,children:"↑"}),i.jsxs(Bs,{children:[n.length,s!==null&&i.jsxs(i.Fragment,{children:[" · ",i.jsx(Mo,{value:Math.max(0,s)})]})]})]})})})};function Hl({item:e,$compact:t}){const n=Eo(e.etaSeconds),o=wn.has(e.phase),r=n===null?`${e.label}, ${so[e.phase]}`:`${e.label}, ${Ns(n)}`;return i.jsxs(zs,{$phase:e.phase,role:"listitem",...t?{"aria-label":r,title:r}:{},children:[i.jsx(Hs,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Cl(e)}),!t&&i.jsx(Jl,{children:e.label}),i.jsx(Bs,{children:n===null?so[e.phase]:i.jsx(Mo,{value:Math.max(0,n)})})]})}const Bl=k.svg`
  display: block;
  width: 100%;
  height: 16px;
`,Fs=54,Lt=5,Ao=3,kn=Fs-8-Lt,ft=60,Wl={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:se.warn,lost:se.warn};function Xl({items:e,"aria-label":t,onDismiss:n}){const{ref:o,size:r}=Ht({w:320,h:Fs}),a=r.w>=ft?r.w:r.h,l=Math.max(1,Math.floor((a-6)/(kn+Ao))),d=e.length>l?e.slice(0,l-1):e,h=e.length-d.length;return i.jsx(Gl,{ref:o,"data-command-list":"",children:i.jsxs(Yl,{role:"list","aria-label":t,children:[d.map(f=>i.jsx(Ul,{item:f,onDismiss:n},f.id)),h>0&&i.jsxs(Zl,{role:"listitem","aria-label":`${h} more in flight`,children:["+",h]})]})})}function Ul({item:e,onDismiss:t}){const n=e.glyph??So(e.label),o=Wl[e.phase],r=Math.max(0,Math.min(1,e.progress??jo[e.phase])),s=wn.has(e.phase)&&!!t,a=`${e.label}, ${so[e.phase]}`;return i.jsxs(ql,{role:"listitem","aria-label":a,"data-phase":e.phase,style:{color:o},children:[i.jsx(Pe,{text:s?`Dismiss ${e.label}`:a,announce:!1,children:i.jsxs(Vl,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:l=>{Os(l.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[i.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&i.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),i.jsx(Kl,{children:i.jsx("span",{className:"fill",style:{"--fill-ratio":r}})})]})}const Gl=k.div.attrs({role:"group"})`
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
    ${kn}px + ${Lt}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
`,Yl=k.div`
  display: flex;
  flex-direction: column;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${Ao}px;
  width: 100%;
  height: 100%;

  @container (min-width: ${ft}px) {
    flex-direction: row;
  }
`,ql=k.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @container (min-width: ${ft}px) {
    flex-direction: column;
  }
`,Vl=k.div`
  --s: ${kn}px;
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

  @container (min-width: ${ft}px) {
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
`,Kl=k.div`
  --s: ${kn}px;
  position: relative;
  flex: 0 0 ${Lt}px;
  width: ${Lt}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${ft}px) {
    width: var(--s);
    height: ${Lt}px;
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
  @container (min-width: ${ft}px) {
    .fill {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: calc(var(--fill-ratio, 0) * 100%);
      height: auto;
    }
  }
`,Zl=k.span`
  align-self: center;
  flex: 0 0 auto;
  padding: 0 ${Ao}px;
  font-size: var(--font-size-compact);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-muted);
`,Ds=k.div`
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
`,Ql={"in-transit":H`
    color: var(--color-text-primary);
  `,"awaiting-reply":H`
    color: var(--color-text-muted);
  `,due:H`
    color: var(--color-text-muted);
  `,overdue:H`
    color: ${ye.warn};
  `,lost:H`
    color: ${ye.warn};
  `},zs=k.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>Ql[e]}
`,Hs=k.span`
  flex: 0 0 auto;
  color: ${({$inherit:e})=>e?"inherit":"var(--color-accent-fg)"};

  ${({$pulse:e})=>e&&H`
      @media (prefers-reduced-motion: no-preference) {
        animation: in-flight-list-pulse 1.6s var(--ease-emphasis) infinite;
      }
    `}

  @keyframes in-flight-list-pulse {
    50% {
      opacity: 0.35;
    }
  }
`,Jl=k.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Bs=k.span`
  flex: 0 0 auto;
`,ec="Awaiting first signal";function Pm({expectedIn:e}){const t=e??0,n=Number.isFinite(t)&&t>0;return i.jsxs(i.Fragment,{children:[ec,n&&ms()&&i.jsx(tc,{total:t})]})}function tc({total:e}){return i.jsx(nc,{seconds:Eo(e)??0})}function nc({seconds:e}){return e>0?i.jsxs(i.Fragment,{children:[" ",i.jsx(yi,{level:"muted",children:i.jsx(Mo,{value:Math.ceil(e)})})]}):null}const Co=e=>H`
  --fit-box: ${e};
`,oc=e=>H`
  --fit-mask: ${e};
`;function Ws(e){return e==="go"||e==="info"?"caution":e}function dn({tone:e,size:t="md",live:n=!1,report:o,held:r,children:s,...a}){const l=$o(r),c=l===void 0?e:Ws(e),d=c===void 0||c==="neutral"?void 0:c,h=o?.label??(typeof s=="string"?s:"");mo(o?{id:o.id,severity:d??"go",label:h}:null);const f=n?{role:"status","aria-live":"polite"}:{},x=l===void 0?null:xt(l),m=Reflect.get(a,"data-tooltip")!==void 0,{anchor:g,tip:v}=zt(m?null:x);return i.jsxs(i.Fragment,{children:[i.jsxs(ic,{$severity:d,$size:t,...f,...g,...a,children:[s,x!==null&&i.jsxs(i.Fragment,{children:[i.jsx(lc,{"aria-hidden":"true","data-held-mark":""}),i.jsxs(We,{"data-unit-currency":"",children:[", ",x]})]})]}),v]})}const rc=H`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,sc={go:H`
    background: transparent;
    border-color: ${se.go};
    color: ${ye.go};
  `,info:H`
    background: transparent;
    border-color: ${se.info};
    color: ${ye.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${se.info} 40%, transparent);
  `,caution:H`
    background: transparent;
    border-color: ${se.caution};
    color: ${ye.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${se.caution} 45%, transparent);
  `,warn:H`
    background: transparent;
    border-color: ${se.warn};
    color: ${ye.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${se.warn} 55%, transparent);
  `,nogo:H`
    background: transparent;
    border-color: ${se.nogo};
    color: ${ye.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${se.nogo} 65%, transparent);
  `,offline:H`
    background: transparent;
    border-color: ${se.offline};
    color: ${ye.offline};
  `},ac={sm:H`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:H`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},ic=k.span`
  display: inline-block;
  position: relative;
  /* Sized by its own text, never stretched to a taller flex sibling. */
  align-self: center;
  ${Co("badge")}
  border: 1px solid;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;

  border-radius: var(--radius-pill);

  ${({$size:e})=>ac[e]}
  ${({$severity:e})=>e===void 0?rc:sc[e]}
`,lc=k.span`
  position: absolute;
  top: 0;
  right: 0;
  width: ${oe.held.domSize};
  height: ${oe.held.domSize};
  transform: translate(45%, -45%);
  background: ${oe.held.color};
  box-shadow: 0 0 0 1px var(--color-surface-panel);
  pointer-events: none;
`;/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=e=>{const t=dc(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},hc=p.createContext({}),fc=()=>p.useContext(hc),pc=p.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:o,className:r="",children:s,iconNode:a,...l},c)=>{const{size:d=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:x="currentColor",className:m=""}=fc()??{},g=o??f?Number(n??h)*24/Number(t??d):n??h;return p.createElement("svg",{ref:c,...Bn,width:t??d??Bn.width,height:t??d??Bn.height,stroke:e??x,strokeWidth:g,className:Xs("lucide",m,r),...!s&&!uc(l)&&{"aria-hidden":"true"},...l},[...a.map(([v,$])=>p.createElement(v,$)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=(e,t)=>{const n=p.forwardRef(({className:o,...r},s)=>p.createElement(pc,{ref:s,iconNode:t,className:Xs(`lucide-${cc(xr(e))}`,`lucide-${e}`,o),...r}));return n.displayName=xr(e),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],mc=N("arrow-down",gc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],vc=N("arrow-left",xc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],bc=N("arrow-right",yc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],kc=N("arrow-up-to-line",wc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],_c=N("arrow-up",$c);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Sc=N("bell",Mc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ec=N("check",jc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Cc=N("chevron-down",Ac);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Pc=N("chevron-left",Rc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Lc=N("chevron-right",Ic);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Oc=N("chevron-up",Tc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],Fc=N("columns-2",Nc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],zc=N("computer",Dc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],Bc=N("corner-down-left",Hc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Xc=N("database",Wc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Gc=N("file-text",Uc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],qc=N("grip",Yc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Kc=N("heart",Vc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Qc=N("history",Zc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],ed=N("house",Jc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],nd=N("info",td);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],rd=N("joystick",od);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ad=N("layers",sd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],ld=N("lightbulb-off",id);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],dd=N("lightbulb",cd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],hd=N("lock",ud);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],pd=N("maximize",fd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],md=N("menu",gd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],vd=N("microscope",xd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],bd=N("minimize",yd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],kd=N("pause",wd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],_d=N("pencil",$d);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Sd=N("play",Md);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ed=N("plus",jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Cd=N("radio",Ad);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Pd=N("rectangle-horizontal",Rd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],Ld=N("rectangle-vertical",Id);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Od=N("rotate-ccw",Td);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],Fd=N("rotate-cw",Nd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],zd=N("rows-2",Dd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],Bd=N("satellite",Hd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Xd=N("settings",Wd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Gd=N("square",Ud);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],qd=N("star",Yd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Kd=N("undo-2",Vd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Qd=N("volume-2",Zd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],eu=N("volume-x",Jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],nu=N("wrench",tu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ru=N("x",ou),su="var(--icon-size-control)",au={strokeWidth:1.8,"aria-hidden":!0};function F(e,t){const n=p.forwardRef(({label:o,size:r=su,style:s,...a},l)=>{const c=typeof r=="number"?{size:r,style:s}:{style:{width:r,height:r,...s}},d=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return i.jsx(e,{...au,...t,...d,...a,...c,ref:l})});return n.displayName=e.displayName??e.name,n}const Im=F(qc),Lm=F(rd),Tm=F(Qc),Om=F(ed),Nm=F(nd),Fm=F(hd),Dm=F(Cd),zm=F(Qd),Hm=F(eu),Bm=F(Sc),Wm=F(ad),Xm=F(Xd),Um=F(Bd),Gm=F(pd),Ym=F(bd),qm=F(Xc),Vm=F(zc),Km=F(Gc),Zm=F(Ed,{strokeWidth:2.4}),iu=F(ru),Qm=F(_d),Jm=F(Ec),lu=F(qd),ex=F(Kc),tx=F(md),cu=F(vd),nx=F(Sd),ox=F(kd),rx=F(Gd),sx=F(Oc),ax=F(Cc),ix=F(Pc),lx=F(Lc),cx=F(vc),dx=F(_c),ux=F(bc),hx=F(mc),fx=F(kc),px=F(Kd),gx=F(Fd),mx=F(Od),xx=F(Fc),vx=F(Pd),yx=F(zd),bx=F(Ld),wx=F(Bc),du=N("space-helmet",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M10.5 8h3a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 1 0-7z",key:"visor"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),uu=N("space-helmet-visor-up",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M8 7.5C9.5 5 14.5 5 16 7.5",key:"visor"}],["circle",{cx:"12",cy:"12.5",r:"2",fill:"currentColor",key:"face"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),kx=F(du),$x=F(uu),_x=F(nu),Mx=F(dd),Sx=F(ld),hu={},fu={byKey:new Map,unaddressed:void 0,separate:!1};function vr(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function pu(e,t){if(e.separate!==t.separate||!vr(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!vr(o,t.byKey.get(n)))return!1;return!0}function gu(e,t,n,o){const r=new Map;e!==void 0&&r.set(xo(e),n);for(const[s,a]of Object.entries(t??{}))a!==void 0&&r.set(ki(s),a);return{byKey:r,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function mu(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function xu(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function vu(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,a)=>s.depth-a.depth);let r=!1;for(const s of o)s.resettle(n)&&(r=!0);if(r)for(const s of t)s()}}}function yu(e){const t=new Map,n=new Map,o=new Set,r=e?.root??vu();let s=fu;const a=c=>{let d;for(const h of c){const f=h.position;f!==void 0&&(d===void 0||f.base>d.base)&&(d=f)}return d?.rung},l={root:r,depth:e===void 0?0:e.depth+1,hold(c,d,h){const f=t.get(c);if(h===void 0)f!==void 0&&(f.delete(d),f.size===0&&t.delete(c));else{if(xu(f?.get(d),h))return;f===void 0?t.set(c,new Map([[d,h]])):f.set(d,h)}e===void 0?r.sweep(c):e.hold(c,d,h)},settled:c=>n.get(c),readsAsOneFigure:c=>o.has(c),setPolicy(c){if(!pu(s,c)){s=c;for(const d of t.keys())r.sweep(d)}},resettle(c){const d=[...t.get(c)?.values()??[]],h=e?.settled(c),f=s.byKey.get(c)??s.unaddressed??hu,x=f.format??h?.format??a(d),m=f.as??h?.as,g=f.decimals??(s.separate?$i(d,{format:x,as:m}):h?.decimals),v=x===void 0&&m===void 0&&g===void 0?void 0:{...x!==void 0&&{format:x},...m!==void 0&&{as:m},...g!==void 0&&{decimals:g}},$=s.separate&&bs(d,{format:x,as:m,decimals:g}),j=$!==o.has(c);return $?o.add(c):o.delete(c),mu(n.get(c),v)?j:(v===void 0?n.delete(c):n.set(c,v),!0)},attach(){r.family.add(l);for(const c of t.keys())r.sweep(c)},detach(){r.family.delete(l)}};return r.family.add(l),l}const Ro={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},Ft=p.createContext(Ro);function bu(){return p.useContext(Ft)!==Ro}function jx({children:e,of:t,pins:n,format:o,as:r,decimals:s,separate:a=!1}){const l=p.useContext(Ft),[c]=p.useState(()=>yu(l===Ro?void 0:l));return p.useLayoutEffect(()=>(c.attach(),()=>c.detach()),[c]),p.useLayoutEffect(()=>{c.setPolicy(gu(t,n,{format:o,as:r,decimals:s},a))},[c,t,n,o,r,s,a]),i.jsx(Ft.Provider,{value:c,children:e})}function wu(e,t={}){const n=p.useContext(Ft),o=p.useId(),r=xs(e),s=e?.unit,l=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||r===null?void 0:xo(s),c=l===void 0||r===null||s===void 0||bi(s)===void 0?void 0:wi(r,s),d=c?.base,h=c?.rung;return p.useLayoutEffect(()=>{if(!(l===void 0||r===null||s===void 0))return n.hold(l,o,{reading:r,unit:s,...d!==void 0&&h!==void 0&&{position:{base:d,rung:h}}}),()=>n.hold(l,o,void 0)},[n,o,l,r,s,d,h]),p.useSyncExternalStore(n.root.subscribe,()=>l===void 0?void 0:n.settled(l),()=>{})}function Ex(e,t={}){const n=p.useContext(Ft),r=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||xs(e)===null||e===null||e===void 0?void 0:xo(e.unit);return p.useSyncExternalStore(n.root.subscribe,()=>r===void 0?!1:n.readsAsOneFigure(r),()=>!1)}const ku=Ei,$u={sci:cu,rep:lu},Us=k.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,_u=k.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?H`
          position: relative;
          ${Rs(e,t)}
        `:""}
`,Mu=k.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,Su=k(We)`
  user-select: none;
`,Gs=k(We)`
  user-select: none;
`,ju=" ";function Eu(e,t,n,o){if(t===void 0)return null;const r=x=>go(x.magnitude,x.unit,{...n,format:o}).value,s=(x,m)=>r(m.minus(x)),a=bs([t.lo,t.hi],{...n,format:o});if(!Ts(e,[t.lo,t.hi],_o(r)))return null;const l=s(t.lo,t.value),c=s(t.value,t.hi),d=x=>/^[-+\u2212]?[0.,\s]*$/.test(x);if(!a&&d(l)&&d(c))return null;const h=r(t.value)===r(e),f={...n,format:o};return{oneFigure:a,plusMinus:!a&&h&&l===c?c:null,lo:r(t.lo),hi:r(t.hi),loSaid:cr(t.lo,f),hiSaid:cr(t.hi,f),kind:t.kind}}function Au(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function Wn({token:e,className:t,spaced:n}){const o=_i(e,Mi(e));if(o==="")return null;const r=Si(o),s=ji(o),a=$u[s?.head??o],l=ku.has(o),c=r!==void 0;return i.jsxs(i.Fragment,{children:[n&&!l?ju:null,i.jsx(Pe,{text:r,announce:!1,children:i.jsxs(Us,{$attached:l,$icon:a!==void 0,className:t,"data-unit":e,children:[a?i.jsxs(i.Fragment,{children:[i.jsx(a,{size:"1em"}),s&&i.jsxs("span",{"aria-hidden":"true",children:["/",s.rest]})]}):c?i.jsx("span",{"aria-hidden":"true",children:o}):o,c&&i.jsxs(Gs,{"data-unit-word":"",children:[" ",r]})]})})]})}function yr({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:r,marked:s,elsewhere:a,...l}){const c=bn(e,{drawsReckoning:r}),d=s!=null&&!c.held&&c.shown!=null?{...c,held:!0,mark:s.kind,caption:s.caption}:c,{shown:h,held:f,mark:x,band:m}=d,g=a!=null&&a!==""&&h!=null,v=x??(g?"current":null),$=g?[d.caption,a].filter(Boolean).join("; "):d.caption,j=wu(h,l),S=bu(),L=o===!0&&S,E=j===void 0?l:{...j,...l},C=go(h?.magnitude,h?.unit,E),M=h==null||m===null||!f?null:Eu(h,mi(m,h.unit),E,C.rung),{anchor:P,tip:_}=zt(Au($,M));return e!==void 0||t===void 0?i.jsxs(_u,{className:n,$mark:v,$elsewhere:g,...Ls(d),...P,children:[C.value,!L&&i.jsx(Wn,{token:C.symbol,spaced:!0}),M!==null&&i.jsxs(Mu,{"data-unit-band":"",children:[M.oneFigure?i.jsxs(i.Fragment,{children:[" (",i.jsx("span",{"aria-hidden":"true",children:"~"}),i.jsx(Gs,{"data-unit-word":"",children:"approximately "}),M.lo]}):M.plusMinus===null?` (${M.lo} to ${M.hi}`:` ± ${M.plusMinus}`,!L&&i.jsx(Wn,{token:C.symbol,spaced:!0}),M.plusMinus===null?")":null]}),v!==null&&i.jsx(Ps,{kind:v,elsewhere:g}),$!==null&&i.jsxs(Su,{"data-unit-currency":"",children:[", ",$]}),_]}):typeof t!="string"?i.jsx(Us,{$attached:!1,$icon:!1,className:n,children:t}):i.jsx(Wn,{token:t,className:n,spaced:!1})}const Cu={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},Ru={center:"center",start:"flex-start",baseline:"baseline"},Pu=p.forwardRef(function({justify:t="between",align:n="center",gap:o,wrap:r=!1,children:s,...a},l){return i.jsx(Iu,{ref:l,$justify:t,$align:n,$gap:o,$wrap:r,...a,children:s})}),Iu=k.div`
  display: flex;
  align-items: ${({$align:e})=>Ru[e]};
  justify-content: ${({$justify:e})=>Cu[e]};
  gap: ${({$gap:e})=>e?ht[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function Po(e){const t=$o(e.held);return t===void 0?{label:e.label,tone:e.tone,title:e.title}:{label:e.label,tone:Ws(e.tone),title:e.title??`${e.label}: ${xt(t)}`,held:t}}function De(e,t){return Te({magnitude:e,unit:t})}function Lu(e,t){const{limit:n,actual:o,unit:r}=t;if(n==null||o==null)return null;switch(e){case Vt.LimitReached:{const s=Tu(t.quantity),a=`${De(o,r)} of ${De(n,r)}`;return t.facilityName?`the ${t.facilityName} holds ${a} ${s}`:`it holds ${a} ${s}`}case Vt.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${De(o,r)} of ${De(n,r)}`;case Vt.InsufficientFunds:return`it costs ${De(Math.trunc(o),r)} and funds are ${De(Math.trunc(n),r)}`;case Vt.InsufficientScience:return`it costs ${De(o,r)} and science is ${De(n,r)}`;default:return null}}function Tu(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function br(e){return e&&vs(e)?.sentence||null}function Ou(e){const t=e?.trim().replace(/\.$/,"");return t||null}function Io(e){return Ys(e,"refused")}function Ax(e){return Ys(e,"unavailable")}function Ys(e,t){const n=mt(e),o=(e.breach?Lu(e.errorCode,e.breach):null)??Ou(e.detail)??br(e.reason)??br(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function qs(e){const n=mt(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":Nu(Io({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function Nu(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function Vs(e){return`${mt(e)||e.command||"The command"}: no reply. May have run.`}function Fu(){const e=Ci();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const $n=Ai(Fu),Cx=$n.Context;function Rx({children:e}){return i.jsx($n.Provider,{children:i.jsx(Du,{children:e})})}function Du({children:e}){const t=$n.useStore();return i.jsx(Ni.Provider,{value:t,children:e})}const Lo=$n.useStore,zu=()=>()=>{},Hu=[],wr=()=>Hu;function Bu(){const e=Lo();return p.useSyncExternalStore(e?e.subscribe:zu,e?e.getActiveHandles:wr,e?e.getActiveHandles:wr)}const Ct=new WeakMap,ao=new WeakMap;function kr(e){for(const t of ao.get(e)??[])t()}function Wu(e){return Ct.set(e,(Ct.get(e)??0)+1),kr(e),()=>{Ct.set(e,(Ct.get(e)??1)-1),kr(e)}}function Px(){const e=Lo();return p.useSyncExternalStore(t=>{if(!e)return()=>{};const n=ao.get(e)??new Set;return ao.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(Ct.get(e)??0)>0,()=>!1)}function _n({children:e,"aria-label":t,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:r=!1,as:s="span",className:a}){const c={role:n?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":t,className:a,"data-live-region":""};return n?i.jsx(We,{as:s,...c,children:e}):p.createElement(s,c,e)}const Xu=.72,Uu=.76;function io({size:e,kind:t="held",figureSize:n}){return i.jsx("tspan",{dy:n===void 0?-e*.55:-(n*Xu-e*Uu),fontSize:e,fill:oe[t].color,"data-held-mark":"","data-reckoning-mark":t,children:oe[t].glyph})}function Ix({end:e,x1:t,y1:n,x2:o,y2:r}){return i.jsx("line",{"data-bound":e,x1:t,y1:n,x2:o,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function Ks(e,t){return t===null?e:`${e}, ${t}`}function Gu(e){return e===null?{}:{"data-currency-in-name":""}}function Lx({x:e,y:t,size:n,children:o}){return i.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function $r(e,t){return t?.state!=="held"?e:{...t,value:e}}function un(e){return e.kind==="continuous"?"ribbon":"dot"}function Yu(e){return e.delivery==="acked"}function qu(e){return e.direction==="command"?"outbound":"inbound"}function Zs(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function Mn(e){return`${e.direction}/${e.kind}/${e.delivery}`}const Vu={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function To(e){return Vu[Mn(e)]??null}const _r=new Set;function Qs(e,t){const n=Mn(e);if(_r.has(n))return;_r.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;ms()?gi.error(o):console.error(o)}const Js=16,Mr=Js/2,Ku=5.5,Zu=2,Qu=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function ea(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function Ju(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/Zu)),Math.max(2,Math.round(o)))}function eh(e,t,n){if(e.length===0)return"";const o=ea(e,t,n);if(!(o>0))return`M0.00,${Mr.toFixed(2)}`;const r=Ju(e,t,o),s=[];for(let a=0;a<=r;a++){const l=Math.min(a/r*o,o),c=Math.min(Math.round(l/n*t),e.length-1),d=Qu(e[e.length-1-c]),h=(a%2===0?-1:1)*d*Ku;s.push(`${l.toFixed(2)},${(Mr+h).toFixed(2)}`)}return`M${s.join(" L")}`}const ta=.05,th=.02,hn=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],Sn=100,Rt=30,nh=1.5,ve=2,oh=4,Qe=Rt-ve-oh,Le=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(Sn-n*2),Zt=e=>ve+(1-Math.max(0,Math.min(1,e)))*Qe,na=e=>e==="inline"?nh:0;function Tx(e="inline"){const t=na(e);return(Sn-t*2)/3}function oa({tags:e,who:t}){return Qs(e,t),i.jsx("g",{"data-rail-unrepresented":Mn(e),"data-rail-entry":t})}function it(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function Sr(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(c=>c.age>=t);if(n===-1)return[];const o=e[n-1],r=e[n],s=r.age-o.age||1,a=(t-o.age)/s,l=o.value+a*(r.value-o.value);return[{age:t,value:l},...e.slice(n)]}function jr(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(d=>d.age>t),r=e.slice(0,o),s=e[o],a=r[r.length-1];if(!a)return[{age:t,value:s.value}];const l=s.age-a.age||1,c=(t-a.age)/l;return[...r,{age:t,value:a.value+c*(s.value-a.value)}]}const rh=.25;function Er(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>o.age)return null;if(t===o.age)return o.value;for(let r=1;r<e.length;r++){const s=e[r];if(t<=s.age){const a=e[r-1],l=(t-a.age)/(s.age-a.age||1);return a.value+l*(s.value-a.value)}}return o.value}function sh({stream:e,span:t,index:n,padX:o,oneT:r,twoT:s}){const l=`var(${hn[n%hn.length]})`,c=p.useId(),d=`cds-ramp-${c}-${n}`,h=`cds-fill-${c}-${n}`,f=`cds-tail-${c}-${n}`,x=To(e.tags);if(x!=="continuous-strip")return x===null?i.jsx(oa,{tags:e.tags,who:e.id}):null;const m=Yu(e.tags),v=(m?e.inTransit:jr(e.inTransit,r)).map(W=>({x:Le(W.age,t,o),y:Zt(W.value)}));if(v.length===0)return null;const j=(m?[]:jr(Sr(e.inTransit,r),r*(1+rh))).map(W=>({x:Le(W.age,t,o),y:Zt(W.value)})),S=j.length>1&&j[j.length-1].x>j[0].x,L=`${it(v)} L${v[v.length-1].x.toFixed(2)},${(ve+Qe).toFixed(2)} L${v[0].x.toFixed(2)},${(ve+Qe).toFixed(2)} Z`,E=m?Sr(e.echo,s):[],C=E.map(W=>({x:Le(W.age,t,o),y:Zt(W.value)})),M=E.map(W=>({x:Le(W.age,t,o),y:Zt(Er(e.inTransit,W.age)??W.value)})),P=E.findIndex(W=>{const w=Er(e.inTransit,W.age);return w!==null&&Math.abs(W.value-w)>th}),_=P!==-1,B=_?C.slice(0,P+1):C,K=_?C.slice(P):[],Q=_?M.slice(P):[],T=!_||P>0;return i.jsxs("g",{"data-stream-group":e.id,"data-return-leg":m,children:[i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"1",y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.10"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0.40"})]}),i.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.22"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]}),S&&i.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:j[0].x,y1:"0",x2:j[j.length-1].x,y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.40"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]})]}),i.jsx("path",{"data-role":"area",d:L,fill:`url(#${h})`,stroke:"none"}),i.jsx("path",{"data-role":"commanded","data-stream":e.id,d:it(v),fill:"none",stroke:`url(#${d})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),S&&i.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:it(j),fill:"none",stroke:`url(#${f})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),B.length>0&&T&&i.jsx("path",{"data-role":"echo","data-stream":e.id,d:it(B),fill:"none",stroke:l,strokeWidth:"0.8",strokeLinecap:"round"}),_&&i.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:it(K),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),_&&i.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:it(Q),fill:"none",stroke:l,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]})}function ah({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${p.useId()}`,o=e.tags,r=To(o);if(r!=="continuous-strip")return r===null?i.jsx(oa,{tags:o,who:e.id}):null;const s=(Sn-t*2)/3,a=e.amplitudes,l=e.spanSamples??a.length,c=eh(a,l,s);if(c==="")return null;const d=Math.max(ea(a,l,s),1),h=`var(${Zs(o)})`,f=qu(o)==="outbound";return i.jsxs("g",{"data-ribbon-group":e.id,transform:`translate(${t} ${ve}) scale(1 ${Qe/Js})`,children:[i.jsx("defs",{children:i.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:f?0:d,y1:"0",x2:f?d:0,y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:h,stopOpacity:"0.9"}),i.jsx("stop",{offset:"1",stopColor:h,stopOpacity:"0.1"})]})}),i.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:c,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function ih({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:r}){const s=`cds-divfade-${p.useId()}`,a=r?.state==="held",l=a?bn(r??null).caption:null,{anchor:c,tip:d}=zt(l),h=[...e,...t].find(E=>E.oneWaySeconds!==null),f=h?.oneWaySeconds??null;if(!h||f===null||po(f)!=="shown")return null;const x=f>=ta;if(!x&&t.length===0)return null;const m=3*f,g=f,v=2*f,$=na(o),j=Le(g,m,$),S=Le(v,m,$),L=e.every(E=>E.inTransit.length===0&&E.echo.length===0)&&t.every(E=>E.amplitudes.length===0);return i.jsxs(lh,{"data-oneway":f,"data-variant":o,$variant:o,...c,children:[i.jsxs(ch,{$variant:o,$quiet:L,role:"img","aria-label":Ks(n,l),...Gu(l),viewBox:`0 0 ${Sn} ${Rt}`,preserveAspectRatio:"none",children:[i.jsx("defs",{children:i.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:ve,x2:"0",y2:ve+Qe,children:[i.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),i.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(x?e:[]).map((E,C)=>i.jsx(sh,{stream:E,span:m,index:C,padX:$,oneT:g,twoT:v},E.id)),t.map(E=>i.jsx(ah,{ribbon:E,padX:$},E.id)),i.jsx("line",{"data-divider":"t",x1:j,x2:j,y1:ve,y2:ve+Qe,stroke:`url(#${s})`,strokeWidth:"0.4"}),i.jsx("line",{"data-divider":"2t",x1:S,x2:S,y1:ve,y2:ve+Qe,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&i.jsxs("g",{"data-role":"hover-labels",children:[i.jsxs("text",{x:j,y:ve-.4,textAnchor:"middle",fontSize:"2",children:[Te(Be("s",f),{decimals:1}),a&&i.jsx(io,{size:1.2})]}),i.jsxs("text",{x:S,y:ve-.4,textAnchor:"middle",fontSize:"2",children:[Te(Be("s",2*f),{decimals:1}),a&&i.jsx(io,{size:1.2})]}),i.jsx("text",{x:Le(f/2,m,$),y:Rt-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),i.jsx("text",{x:Le(1.5*f,m,$),y:Rt-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),i.jsx("text",{x:Le(2.5*f,m,$),y:Rt-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&i.jsxs(i.Fragment,{children:[i.jsxs(dh,{"aria-hidden":"true",children:[i.jsxs("span",{children:["outgoing ",i.jsx("b",{children:"0"})]}),i.jsxs("span",{children:["echo"," ",i.jsx("b",{children:i.jsx(yr,{value:$r(Be("s",f),r),decimals:1})})]}),i.jsxs("span",{children:["confirmed"," ",i.jsx("b",{children:i.jsx(yr,{value:$r(Be("s",2*f),r),decimals:1})})]})]}),i.jsxs(uh,{"aria-hidden":"true",children:[(x?e:[]).map((E,C)=>i.jsxs("span",{children:[i.jsx("i",{style:{background:`var(${hn[C%hn.length]})`}}),E.label]},E.id)),t.map(E=>i.jsxs("span",{"data-role":"legend-ribbon",children:[i.jsx("i",{style:{background:`var(${Zs(E.tags)})`}}),E.label]},E.id)),x&&e.length>0&&i.jsxs("span",{"data-role":"legend-deviation",children:[i.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),d]})}const lh=k.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,ch=k.svg`
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
`,dh=k.div`
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
`,uh=k.div`
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
`;function hh({handle:e,handles:t,"aria-label":n,mode:o,density:r,orientation:s,variant:a="inline"}){const l=t??(e?[e]:[]),c=l.length===1?l[0]:null,d=c?To(c.tags):null;if(c&&d===null)return i.jsx(fh,{tags:c.tags,who:c["aria-label"]});if(c&&d!=="in-flight-row"){const m=c,g=m.effectiveDelaySeconds;return po(g)!=="shown"?null:i.jsx(ih,{streams:m.streams??[],ribbons:m.ribbons??[],delayReading:m.delayReading,"aria-label":n??m["aria-label"],variant:a})}const h=El(l.flatMap(m=>m.inFlight)),x=l.some(m=>m.dismiss)?m=>l.find(g=>g.inFlight.some(v=>v.id===m))?.dismiss?.(m):void 0;return i.jsx(Tl,{items:h,"aria-label":n,mode:o,density:r,orientation:s,variant:a,onDismiss:x})}function fh({tags:e,who:t}){return Qs(e,t??"unnamed handle"),i.jsx("span",{hidden:!0,"data-rail-unrepresented":Mn(e)})}function ra(e){const n=mt(e)||e.command||"The command",o=e.code===void 0?void 0:vs(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function sa(e){return`${mt(e)||e.command||"The command"}: never sent. Safe to re-send.`}const ph={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed"},gh={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command"};function mh(e,t){return e.kind==="refused"?Io(e.entries[t]):e.kind==="found"?qs(e.entries[t]):e.kind==="failed"?ra(e.entries[t]):e.kind==="undelivered"?sa(e.entries[t]):Vs(e.entries[t])}function xh(e){return e.entries.map((t,n)=>{const o=mt(t);return{id:t.id,subject:o||t.command||"",sentence:mh(e,n),dismissLabel:`Dismiss ${o||gh[e.kind]}`,tags:t.tags}})}function Mt(e){const{kind:t,onDismiss:n,live:o=!0}=e,r=e["aria-label"]??ph[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const a=xh(e).map(l=>i.jsxs(bh,{role:o?void 0:"listitem",$tone:s,children:[un(l.tags)==="ribbon"?i.jsx(kh,{$tone:s,children:l.subject}):i.jsx(wh,{"aria-hidden":"true",$tone:s,children:So(l.subject)}),i.jsx($h,{children:l.sentence}),n&&i.jsx(_h,{type:"button","data-dismiss":"",onClick:c=>{Os(c.currentTarget),n(l.id)},"aria-label":l.dismissLabel,children:"✕"})]},l.id));return o?i.jsx(yh,{forwardedAs:"div","aria-label":r,"data-command-list":"",additionsOnly:!0,children:a}):i.jsx(vh,{role:"list","aria-label":r,"data-command-list":"",children:a})}const aa=H`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,vh=k.div`
  ${aa}
`,yh=k(_n)`
  ${aa}
  &:empty {
    margin: 0;
  }
`,bh=k.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>se[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${se[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,wh=k.span`
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  min-width: 34px;
  padding: var(--inset-glyph);
  align-self: stretch;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: ${({$tone:e})=>ye[e]};
  border: 1px solid ${({$tone:e})=>se[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${se[e]} 14%, var(--color-surface-raised))`};
`,kh=k.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>ye[e]};
`,$h=k.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,_h=k.button`
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
  ${Je}
`;function ut(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,o)=>ut(n,t[o]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const n=[...t];return[...e].every(o=>{const r=n.findIndex(s=>ut(o,s));return r===-1?!1:(n.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[n,o]of e)if(!t.has(n)||!ut(o,t.get(n)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const n=e,o=t,r=new Set;for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of r)if(!ut(n[s],o[s]))return!1;return!0}return!1}function jn(e,t,n,o){const[r,s]=p.useState(o),a=p.useRef(t);a.current=t;const l=p.useRef(n);l.current=n;const c=p.useRef(r);return c.current=r,p.useEffect(()=>{if(!e)return;let d=c.current;const h=()=>{const g=a.current(e);l.current(d,g)||(d=g,s(g))};h(),e.addEventListener("scroll",h,{passive:!0});const f=new ResizeObserver(h);f.observe(e);for(const g of Array.from(e.children))f.observe(g);let x;const m=new MutationObserver(g=>{if(g.some(v=>v.type==="childList")){for(const v of Array.from(e.children))f.observe(v);h();return}x===void 0&&(x=requestAnimationFrame(()=>{x=void 0,h()}))});return m.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style"]}),()=>{e.removeEventListener("scroll",h),f.disconnect(),m.disconnect(),x!==void 0&&cancelAnimationFrame(x)}},[e]),r}function Mh(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function ia(e){return jn(e,Mh,Object.is,!1)?0:void 0}function Sh({label:e,selected:t,count:n,onToggle:o}){return i.jsxs(jh,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[i.jsx("span",{children:e}),n!==void 0&&i.jsx(Eh,{children:n})]})}const jh=k.button`
  ${Co("chip")}
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

  ${Je}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`,Eh=k.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function Ah({value:e,onChange:t,clearLabel:n="Clear search",className:o,...r}){const s=p.useRef(null);return i.jsxs(Ch,{className:o,children:[i.jsx(Rh,{...r,ref:s,type:"search",value:e,onChange:a=>t(a.target.value)}),e!==""&&i.jsx(Ph,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:i.jsx(iu,{size:"var(--icon-size-control)"})})]})}const Ch=k.div`
  position: relative;
  display: flex;
  align-items: center;
`,Rh=k(bl)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,Ph=k(xl)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function Ox({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=Ri(e),r=[...new Set(o)],[s,a]=p.useState(()=>new Set),[l,c]=p.useState(""),d=p.useId(),h=g=>{a(v=>{const $=new Set(v);return $.has(g)?$.delete(g):$.add(g),$})},f=[...s,l].filter(g=>g.length>0).map(g=>g.toLowerCase()),x=i.jsxs(ws,{gap:"related-packed",children:[i.jsxs(vl,{children:[i.jsx(yl,{htmlFor:d,children:t}),i.jsx(Ah,{id:d,value:l,placeholder:n,onChange:c})]}),r.length>0&&i.jsx(Pu,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:r.map(g=>i.jsx(Sh,{label:g,selected:s.has(g),onToggle:()=>h(g)},g))})]}),m={matches:g=>{const v=g.toLowerCase();return f.every($=>v.includes($))},active:f.length>0};return la.set(m,x),m}const la=new WeakMap;function ca(e){return la.get(e)??null}function Nx({filter:e,children:t,fill:n=!1}){return i.jsxs(ws,{gap:"related-dense",fill:n,children:[ca(e),t]})}const Ih={accent:"var(--color-accent-fg)",warn:"var(--color-warn-mark)"},Lh=24,Th=96;function Oh({children:e,padded:t,caption:n,footer:o,strip:r,shape:s="rounded",edgeCue:a,...l}){const c=s==="circle",d=!c||a===void 0?[]:[a].flat(),h=!c&&r!==void 0&&r!==null&&r!==!1;return i.jsxs(Nh,{$padded:t&&!h,$stacked:h,$circle:c,$cued:d.length>0,"data-shape":c?"circle":void 0,...l,children:[h?i.jsxs(i.Fragment,{children:[i.jsx(Wh,{$padded:t,children:e}),i.jsx(Xh,{"data-framed-display-strip":"",children:r})]}):c&&a!==void 0?i.jsx(Fh,{children:e}):e,d.length>0&&i.jsx(Bh,{cues:d}),n!=null&&i.jsx(ua,{children:n}),o!=null&&i.jsx(Uh,{children:o})]})}const Nh=k.div`
  position: relative;
  display: flex;
  flex-direction: ${({$stacked:e})=>e?"column":"row"};
  min-height: 0;
  min-width: 0;
  /* Sunken: the visual sits inside the panel surface rather than floating on it. */
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  /* The container answers with a corner proportioned to the box, so a frame never needs to know its own size. */
  border-radius: ${({$circle:e})=>e?"50%":"var(--radius-display-frame)"};
  /* A cued circle clips its contents in a layer of its own, so the cue can grow outward past the border. */
  overflow: ${({$cued:e})=>e?"visible":"hidden"};
  padding: ${({$padded:e})=>e?"var(--inset-framed-display)":"0"};
  ${({$circle:e})=>e?"aspect-ratio: 1 / 1; flex: none; align-self: center;":""}

  /* A child SVG or canvas fills the frame instead of its intrinsic 300x150. */
  & > svg,
  & > canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`,Fh=k.div`
  position: relative;
  flex: 1;
  display: flex;
  min-height: 0;
  min-width: 0;
  border-radius: var(--radius-circle);
  overflow: hidden;

  & > svg,
  & > canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`,Se=12,Ar=1,Dh=3,da=1,zh=100*da/200,Cr=e=>e*Math.PI/180;function Hh(e,t=zh){const n=Math.min(Math.max(e.span??90,1),359),o=Math.min(Math.max(Number.isFinite(e.grow)?e.grow:0,0),1),r=50,a=50+(Ar+(Dh-Ar)*o)*t,l=Cr(e.angle-n/2),c=Cr(e.angle+n/2),d=(f,x)=>`${(50+f*Math.cos(x)).toFixed(3)} ${(50-f*Math.sin(x)).toFixed(3)}`,h=n>180?1:0;return`M${d(r,l)}A${r} ${r} 0 ${h} 0 ${d(r,c)}L${d(a,c)}A${a} ${a} 0 ${h} 1 ${d(a,l)}Z`}function Bh({cues:e}){const{ref:t,size:n}=Ht({w:100+2*Se,h:100+2*Se}),o=(100+2*Se)/Math.max(n.w,1),r=da*o;return i.jsx("div",{ref:t,"aria-hidden":"true",style:{position:"absolute",left:`${-Se}%`,top:`${-Se}%`,width:`${100+2*Se}%`,height:`${100+2*Se}%`,pointerEvents:"none"},children:i.jsx("svg",{"aria-hidden":"true","data-edge-cues":"",viewBox:`${-Se} ${-Se} ${100+2*Se} ${100+2*Se}`,style:{display:"block",width:"100%",height:"100%",overflow:"visible"},children:e.map(s=>i.jsx("path",{"data-edge-cue":"",d:Hh(s,r),fill:Ih[s.tone]},`${s.angle}-${s.tone}`))})})}const Wh=k.div`
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
`,Xh=k.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${Lh}px;
  max-height: ${Th}px;
  min-width: 0;
  overflow: hidden;
`,ua=k.div`
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

  /* A circle cuts the corners away, so its labels sit on the vertical axis. */
  [data-shape="circle"] > & {
    left: 50%;
    transform: translateX(-50%);
  }
`,Uh=k(ua)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,Rr={width:160,height:72},Gh=2.5,Yh=420;function Fx({width:e,height:t,plotHasData:n}){return!n&&e>=Rr.width&&t>=Rr.height?"center":e>=Yh&&e>=t*Gh?"beside":"inline"}const qh={overlay:H`
    position: absolute;
    bottom: var(--offset-graph-notice-bottom);
    left: var(--offset-graph-notice-left);
  `,center:H`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    text-align: center;
  `,inline:H`
    flex: 0 0 auto;
    align-self: flex-start;
    max-width: 100%;
    margin-top: var(--gap-sub-readout);
  `,beside:H`
    flex: 0 1 30%;
    align-self: flex-start;
    max-width: 40%;
  `};function Vh({placement:e,role:t="status",children:n,...o}){return i.jsx(Kh,{$placement:e,role:t,...o,children:n})}const Kh=k.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${Pi.regular};
  pointer-events: none;

  ${({$placement:e})=>qh[e]}
`,fn=8;function ha(e){const t=[{cols:1,rows:e}];for(let n=2;n<=e;n++){const o=Math.ceil(e/n);o<(t.at(-1)?.rows??e)&&t.push({cols:n,rows:o})}return t}function fa(e){return e===0?"0px":`(${e}px + var(--gap-related))`}const pa=(e,t)=>`calc(${e} * ${t} + ${(e-1)*fn}px)`,Zh=(e,t,n)=>`calc(${e} * (${t} + ${n+fn}px) + ${(e-1)*fn}px)`;function Qh(e,t,n,o,r){const s=fa(n),a=ha(e).slice(1).map(({cols:c,rows:d})=>`
  @container grid-squares-width (width >= ${pa(c,t)}) {
    --cell: calc((100cqw - ${c-1} * ${o}) / ${c});
    --rows: ${d};
  }`).join(""),l=c=>`calc(var(--rows) * (${c} + ${s}) + (var(--rows) - 1) * ${o})`;return r!==void 0?`
  --cell: 100cqw;
  --rows: ${e};
  ${a}
  min-height: var(--grid-squares-height, ${l(r)});
`:`
  --cell: 100cqw;
  --rows: ${e};
  ${a}
  min-height: var(--grid-squares-height, clamp(${l(`min(var(--cell), ${t}, 100cqh - ${s})`)}, 100cqh, ${l("var(--cell)")}));
`}function Jh(e,t,n,o){const r=ha(e),s=o!==void 0;return r.slice(1).map(({cols:a,rows:l},c)=>`
  @container grid-squares (aspect-ratio >= ${(.88*a/r[c].rows).toFixed(2)}) and ((width >= ${pa(a,t)}) or (height < ${Zh(s?l:r[c].rows,o??t,n)})) {
    --cols: ${a};
    --rows: ${l};
  }`).join("")}function ef(e,t){const n=`
  & > * > * {
    --grid-square-heading: ${e===0?"0px":`calc${fa(e)}`};
  }`;return e===0||t===void 0?n:`${n}
  @container (width < ${t}px) or (height < ${t+e+fn}px) {
    & > * > * {
      --grid-square-heading: 0px;
    }
    & > * [data-grid-square-heading] {
      display: none;
    }
  }`}function tf(e){if(un(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return t===null||t<=0?!1:n>0||t>=ta&&o>0}return e.inFlight.length>0}function ga({tiny:e}={}){const t=Bu(),n=Lo();p.useEffect(()=>n?Wu(n):void 0,[n]);const o=t.filter(tf),r=t.flatMap(w=>(w.refusals??[]).map(z=>({...z,tags:w.tags}))),s=t.flatMap(w=>(w.losses??[]).map(z=>({...z,tags:w.tags}))),a=t.flatMap(w=>(w.founds??[]).map(z=>({...z,tags:w.tags}))),l=t.flatMap(w=>(w.undelivered??[]).map(z=>({...z,tags:w.tags}))),c=t.flatMap(w=>(w.failures??[]).map(z=>({...z,tags:w.tags}))),d=r.length+l.length+c.length,h=o.length>0||d>0||s.length>0||a.length>0,[f,x]=p.useState(!1),[m,g]=p.useState(!1),[v,$]=p.useState(!1),j=f||m&&!v;p.useEffect(()=>{h||(x(!1),g(!1),$(!1))},[h]);const S=p.useId(),L=[...o.filter(w=>un(w.tags)==="ribbon"),...o.filter(w=>un(w.tags)!=="ribbon")],C=t.some(w=>w.dismiss&&(w.refusals?.length??0)>0)?w=>t.find(z=>z.refusals?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,P=t.some(w=>w.dismiss&&(w.losses?.length??0)>0)?w=>t.find(z=>z.losses?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,B=t.some(w=>w.dismiss&&(w.undelivered?.length??0)>0)?w=>t.find(z=>z.undelivered?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,Q=t.some(w=>w.dismiss&&(w.failures?.length??0)>0)?w=>t.find(z=>z.failures?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,W=t.some(w=>w.dismiss&&(w.founds?.length??0)>0)?w=>t.find(z=>z.founds?.some(Z=>Z.id===w))?.dismiss?.(w):void 0;return i.jsxs(nf,{"data-panel-rail-frame":"",$tiny:e,$hasContent:h,onMouseEnter:()=>{$(!1),g(!0)},onMouseLeave:()=>g(!1),children:[t.length>0&&i.jsxs(_n,{visuallyHidden:!0,additionsOnly:!0,children:[r.map(w=>i.jsx("span",{children:Io(w)},`refusal:${w.id}`)),s.map(w=>i.jsx("span",{children:Vs(w)},`loss:${w.id}`)),l.map(w=>i.jsx("span",{children:sa(w)},`undelivered:${w.id}`)),c.map(w=>i.jsx("span",{children:ra(w)},`failure:${w.id}`)),a.map(w=>i.jsx("span",{children:qs(w)},`found:${w.id}`))]}),h?i.jsxs(rf,{"data-panel-rail":"","data-grown":j,"data-pinned":f,"data-suppress-hover":v,onKeyDown:w=>{w.key==="Escape"&&f&&(w.stopPropagation(),x(!1),$(!0))},children:[i.jsx(sf,{type:"button","aria-expanded":f,"aria-controls":S,"aria-label":"Signal-delay detail",onClick:()=>{x(w=>{const z=!w;return z||$(!0),z})},children:i.jsx(df,{"aria-hidden":"true",hidden:!j,children:"▲"})}),i.jsxs(af,{id:S,"data-panel-rail-detail":"",children:[L.map(w=>i.jsx(hh,{handle:w,variant:j?"expanded":"rail","aria-label":w["aria-label"]??(j?"Delay detail":void 0)},w.id)),!j&&(d>0||s.length>0||a.length>0)&&i.jsxs(lf,{children:[d>0&&i.jsx(Pr,{children:d===1?"1 command failed":`${d} commands failed`}),s.length>0&&i.jsx(Pr,{children:s.length===1?"1 command unconfirmed":`${s.length} commands unconfirmed`}),a.length>0&&i.jsx(cf,{children:a.length===1?"1 unconfirmed command answered":`${a.length} unconfirmed commands answered`})]})]})]}):null,j&&r.length>0&&i.jsx(Mt,{kind:"refused",entries:r,onDismiss:C,live:!1}),j&&s.length>0&&i.jsx(Mt,{kind:"lost",entries:s,onDismiss:P,live:!1}),j&&l.length>0&&i.jsx(Mt,{kind:"undelivered",entries:l,onDismiss:B,live:!1}),j&&c.length>0&&i.jsx(Mt,{kind:"failed",entries:c,onDismiss:Q,live:!1}),j&&a.length>0&&i.jsx(Mt,{kind:"found",entries:a,onDismiss:W,live:!1})]})}const nf=k.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,of=H`
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
`,rf=k.div`
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
    ${of}
  }
`,sf=k.button`
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

  ${yn}

  &[aria-expanded="true"] {
    pointer-events: none;
  }

`,af=k.div`
  display: contents;
`,Pr=k.span`
  color: ${ye.warn};
`,lf=k.span`
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
`,cf=k.span`
  color: var(--color-info-text);
`,df=k.span`
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
`,ma=p.createContext(null);function Dx({badges:e,children:t}){return i.jsx(ma.Provider,{value:e,children:t})}function uf(){return p.useContext(ma)}function xa({severity:e,count:t=1}){const n=t>1;return i.jsx(hf,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${Nt[e]}`:Nt[e],$mark:se[e],$digits:n?String(t).length:1,children:n&&i.jsx(ff,{$fill:to[e],$ink:ys[e],children:i.jsx(pf,{"aria-hidden":"true",children:i.jsx("text",{x:"50%",y:"50%",dy:"0.365em",textAnchor:"middle",children:t})})})})}const Ir="8px",hf=k.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${Ir};
  /* The count's own size, so the width below can be counted in its digits. Digits this size are six pixels tall, which centre in the eight-pixel dot on whole pixels; at seven they are five, and one engine places the baseline half a pixel above or below the middle. */
  font-size: 8px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:Ir};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,ff=k.span`
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
`,pf=k.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: currentColor;
`,gf=()=>()=>{},Lr=()=>Ii;function va(){const e=ks();return p.useSyncExternalStore(e?e.subscribe:gf,e?e.getBreakdown:Lr,e?e.getBreakdown:Lr)}const mf=()=>()=>{},Tr=()=>null;function xf(){const e=ks();return p.useSyncExternalStore(e?e.subscribe:mf,e?e.getSummary:Tr,e?e.getSummary:Tr)}const ya=H`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,vf=12;function yf(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function bf(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const r=o<e?t-vf:t;if(n[o]<=r)return o}return n.length-1}function wf(e,t,n){const[o,r]=p.useState(0),s=p.useRef(o);s.current=o;const a=[t,...n].join(`
`),l=p.useCallback(()=>{const c=e.current,d=a.split(`
`);if(!c||d.length<2){s.current!==0&&(s.current=0,r(0));return}const h=d.map(x=>yf(c,x)),f=bf(s.current,c.clientWidth,h);f!==s.current&&(s.current=f,r(f))},[e,a]);return p.useLayoutEffect(()=>{l()},[l]),p.useEffect(()=>{const c=e.current;if(!c||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>l());return d.observe(c),()=>d.disconnect()},[e,l]),{index:o,compacted:o>0}}const kf=24;function $f(e,t,n,o,r=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&r?!(t>n+kf):n>t}function Or(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const r=e.cloneNode(!0);n!==void 0&&(r.textContent=n),Object.assign(r.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),r.setAttribute("aria-hidden","true"),o.insertBefore(r,e.nextSibling);const s=r.getBoundingClientRect().width;return o.removeChild(r),s}const _f={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function St(e){return Number.parseFloat(e)||0}function Mf(e,t,n,o){const[r,s]=p.useState(!1),a=p.useRef(r);a.current=r;const l=p.useRef(void 0),c=p.useRef(void 0),d=p.useRef(!1),h=p.useRef(o);h.current=o;const f=p.useCallback(()=>{const m=e.current;if(!m)return;const g=getComputedStyle(m),v=m.getBoundingClientRect().width-St(g.paddingLeft)-St(g.paddingRight),$=Or(t.current,{},h.current),j=Or(n.current,_f),S=n.current?.closest("[data-panel-aside-expand]")?.parentElement,L=S?getComputedStyle(S):null,E=$===0||j===0?$+j:$+St(g.columnGap)+St(L?.paddingLeft??"")+St(L?.paddingRight??"")+j,C=a.current,M=v>0&&c.current!==void 0&&v<c.current;C&&M&&(d.current=!0);const P=$f(C,v,E,l.current,d.current);P!==C&&(d.current=P&&M),v>0&&(c.current=v),E>0&&(l.current=E),P!==a.current&&(a.current=P,s(P))},[e,t,n]),x=p.useRef({title:null,aside:null,observer:null});return p.useLayoutEffect(()=>{const m=t.current,g=n.current,v=x.current;if(v.observer===null||v.title!==m||v.aside!==g){v.observer?.disconnect(),v.title=m,v.aside=g,v.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>f());for(const $ of[m,g])$&&v.observer?.observe($,{subtree:!0,childList:!0,characterData:!0,attributes:!0});f();return}v.observer.takeRecords().length>0&&f()}),p.useEffect(()=>{const m=x.current;return()=>{m.observer?.disconnect(),m.observer=null}},[]),p.useEffect(()=>{const m=e.current;if(!m||typeof ResizeObserver>"u")return;const g=new ResizeObserver(()=>f());return g.observe(m),n.current&&g.observe(n.current),()=>g.disconnect()},[e,n,f]),r}const ba=p.createContext("full"),Sf=ba.Provider;function zx(){return p.useContext(ba)}const En=p.createContext(null);function wa({children:e}){const[t,n]=p.useState(null),o=p.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return i.jsx(En.Provider,{value:o,children:e})}function jf({children:e}){return i.jsx(wa,{children:e})}const ka=`
  & > [${_s}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,pn=k.div`
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
  ${({$hoverTitle:e})=>e?yn:""}
  /* A hand-composed panel can put sections straight in here, so this box owns the leftover height. */
  ${ka}
`,Ef=k.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${ya}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$a=p.forwardRef(function({compact:t,children:n,...o},r){const s=p.useRef(null),a=typeof n=="string"?n:"",l=t===void 0||a===""?Af:typeof t=="string"?[t]:t,{index:c,compacted:d}=wf(s,a,l);return i.jsx(Pe,{text:d?a:void 0,children:i.jsx(Ef,{...o,ref:h=>{if(s.current=h,typeof r=="function"){r(h);return}r&&(r.current=h)},"aria-label":d?a:void 0,children:c===0?n:l[c-1]})})}),Af=[],Cf=k.div`
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
`,Rf=k.div`
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
`,Pf=k.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,If=k.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,Lf=k.details`
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
    ${Je}
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

  ${({$collapsed:e})=>e&&H`
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
`,Tf=120;function _a(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${Nt[n.severity]}`:`${Nt[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function Ma({title:e,compactTitle:t,aside:n,toolbar:o,...r}){const s=va(),a=p.useRef(null),l=p.useRef(null),c=p.useRef(null),d=Mf(a,l,c,typeof e=="string"?e:void 0),[h,f]=p.useState(!1),[x,m]=p.useState(!1),g=p.useRef(null),v=p.useRef(null),$=p.useRef(null),j=p.useCallback(()=>{g.current!==null&&clearTimeout(g.current),g.current=null},[]);p.useEffect(()=>{d||(f(!1),m(!1))},[d]),p.useEffect(()=>j,[j]);const S=d&&(h||x);p.useEffect(()=>{if(!S)return;const M=_=>{_.key==="Escape"&&v.current?.contains(document.activeElement)&&(_.stopPropagation(),j(),m(!1),f(!1),$.current?.focus())},P=_=>{v.current?.contains(_.target)||(j(),m(!1),f(!1))};return document.addEventListener("keydown",M,!0),document.addEventListener("pointerdown",P,!0),()=>{document.removeEventListener("keydown",M,!0),document.removeEventListener("pointerdown",P,!0)}},[S,j]);const L=d?_a(s):null,{anchor:E,tip:C}=zt(S?null:L);return i.jsxs(Cf,{ref:a,"data-panel-header":"",...r,children:[i.jsxs(Rf,{children:[e!==void 0&&i.jsx($a,{ref:l,compact:t,children:e}),i.jsx(Pf,{"aria-hidden":"true",children:i.jsx(dn,{children:null})})]}),n!==void 0&&i.jsx(If,{children:i.jsxs(Lf,{ref:v,"data-panel-aside-expand":"","data-hovering":d&&x?"":void 0,$collapsed:d,open:d?h:!0,onToggle:M=>{d&&(f(M.currentTarget.open),M.currentTarget.open||m(!1))},onPointerEnter:M=>{!d||M.pointerType==="touch"||(j(),m(!0))},onPointerLeave:M=>{M.pointerType!=="touch"&&(j(),g.current=setTimeout(()=>{g.current=null,m(!1)},Tf))},children:[i.jsxs("summary",{ref:$,"data-tooltip":E["data-tooltip"],onPointerDown:E.onPointerDown,onPointerUp:E.onPointerUp,onFocus:E.onFocus,onBlur:E.onBlur,"aria-description":L??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(M=>`${M.count} ${Nt[M.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(M=>i.jsx(xa,{severity:M.severity,count:M.count},M.severity)),i.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),C,i.jsx(Sf,{value:d?"collapsed":"full",children:i.jsx("div",{"data-panel-aside-full":"",ref:c,children:n})})]})}),o!==void 0&&i.jsx(Sa,{children:o})]})}const Sa=k.div`
  ${Co("panel-toolbar")}
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
`,Of=k.div`
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
  ${yn}
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
  ${({$loneFrame:e})=>e?`@container (width < ${Nf}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${ka}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${_s}] {
           min-height: 0;
         }`:""}
`,Nf="25rem";function ja({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...r}){const a=p.useContext(En)?.registerScroller,[l,c]=p.useState(null),d=p.useCallback(f=>{a?.(f),c(f)},[a]),h=ia(l);return i.jsx(Of,{ref:d,tabIndex:h,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...r,children:e})}const Ff="13rem",Df=k.div`
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
  & > [${Li}] {
    grid-column: 1 / -1;
  }
  /* A grid opened only to carry the augment slot, with nothing bound, takes no gap above it: a filling section reaches the body's bottom inset. */
  &:empty {
    display: none;
  }
`;function zf({children:e,hoverTitle:t}){const n=p.useRef(null),o=p.useRef(null),r=Wf(n,o);return i.jsx(Hf,{ref:n,$fits:r,"data-panel-fit-body":"",children:i.jsx(Bf,{ref:o,$fits:r,$hoverTitle:t,"data-panel-fit-shifted":r&&t?"":void 0,children:e})})}const Hf=k.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,Bf=k.div`
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
`;function Wf(e,t){const[n,o]=p.useState(!0);return p.useLayoutEffect(()=>{const r=e.current,s=t.current;if(!r||!s)return;const a=()=>{o(Uf(Xf(s),r.clientHeight))};if(a(),typeof ResizeObserver>"u")return;const l=new ResizeObserver(a),c=()=>{l.observe(r),l.observe(s);for(const h of Array.from(s.children))l.observe(h)};c();const d=new MutationObserver(()=>{c(),a()});return d.observe(s,{childList:!0}),()=>{l.disconnect(),d.disconnect()}},[e,t]),n}function Xf(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function Uf(e,t){return e<=t}const Gf=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,Yf=k.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${yn}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,gn=k.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e})=>e==="top"?"top: 0;":"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: 44px;
  /* The audit reads the mask depth from the gradient, so the literal height costs it nothing. */
  ${oc("panel-scroll-glow")}
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
`,Ea=p.forwardRef(function({children:t,...n},o){const r=p.useRef(null),[s,a]=p.useState(null),l=p.useCallback(h=>{r.current=h,a(h)},[]);p.useImperativeHandle(o,()=>r.current);const c=jn(s,No,Fo,Oo),d=ia(s);return i.jsxs(Gf,{...n,children:[i.jsx(Yf,{ref:l,tabIndex:d,"data-scroll-area-inner":"",children:t}),i.jsx(gn,{$position:"top",$visible:c.top}),i.jsx(gn,{$position:"bottom",$visible:c.bottom})]})});function qf(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const Nr="14rem",Vf=5,Kf="45%",Zf=`min(${Fi(1,Vf).pxH}px, ${Kf})`;function Fr(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const Qf=k.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${Fr(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${Fr(t,n)};`}

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
`;function Jf({side:e="end",size:t,railBand:n,children:o,...r}){const{ref:s,size:a}=Ht({w:1,h:1}),l=qf(t??Nr),c=a.w<=1||l===void 0||a.w>=l*2,d=a.w>=a.h&&c?"inline":"block",h=t??(d==="inline"?Nr:Zf);return i.jsx(Qf,{ref:s,"data-panel-split":d,$axis:d,$side:e,$size:h,$railBand:n,...r,children:o})}const ep=k(Ea)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,tp=k.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function Aa({children:e,...t}){return i.jsx(tp,{"data-panel-sidebar":"",...t,children:i.jsx(ep,{children:e})})}const Oo={top:!1,bottom:!1};function No(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function Fo(e,t){return e.top===t.top&&e.bottom===t.bottom}const np=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function Ca({children:e,railBandAbove:t,...n}){const o=p.useContext(En),r=o?.scroller??null;p.useEffect(()=>{},[o]);const s=jn(r,No,Fo,Oo);return i.jsxs(np,{...n,children:[e,i.jsx(gn,{$position:"top",$visible:s.top&&!t}),i.jsx(gn,{$position:"bottom",$visible:s.bottom})]})}function op(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const Hx=["sections","actions"],Qt=Object.freeze({});function rp({summary:e}){const t=p.useRef(e.severity),[n,o]=p.useState(0);p.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const r=_a(va());return i.jsx(sp,{$pulse:n,children:i.jsx(Pe,{text:r,focusable:!0,children:i.jsx(dn,{tone:e.severity,size:"sm",children:e.label})})})}const sp=k.span`
  display: inline-flex;
  ${({$pulse:e})=>e>0&&H`
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
`,Ra=k.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,ap=k.div`
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
  /* Opaque: the scroll glow only masks the first strip of the header, so rows scrolled under a taller title would show through. */
  background: var(--color-surface-panel);

  /* The band is this unit's own first row, so the rail frame does not pull up into container padding. */
  & > [data-panel-rail-frame] {
    margin-top: 0;
    /* The unit's backing is the opaque surface and the glow sits on it, so the band shows the glow with the rail drawn over it. */
    background: transparent;
  }

  /* A tiny tile's centred content is pulled up into the rail band's strip and cannot scroll under it, so an opaque backing would only clip the figure's top. */
  &:has(+ [data-panel-fit-body] [data-panel-fit-shifted]) {
    background: transparent;
  }

  /* The top glow is the first background layer while the body is scrolled, over the opaque surface and under the rail and header; capped at the unit's height so a short unit never masks rows below it. */
  &[data-panel-glow-top] {
    background:
      linear-gradient(
          to bottom,
          color-mix(
            in srgb,
            color-mix(in srgb, var(--color-surface-panel), white 20%) 55%,
            transparent
          ),
          transparent 40%
        )
        top / 100% min(44px, 100%) no-repeat,
      linear-gradient(
          to bottom,
          var(--color-surface-panel) 0%,
          var(--color-surface-panel) 27%,
          transparent 50%
        )
        top / 100% min(44px, 100%) no-repeat,
      var(--color-surface-panel);
  }

  /* Rows scrolling under the header fade out at its lower edge, where the eye meets them, instead of being cut off hard. */
  &[data-panel-glow-top]::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 20px;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      var(--color-surface-panel),
      transparent
    );
  }
`;function ip({children:e}){const t=p.useContext(En),n=jn(t?.scroller??null,No,Fo,Oo);return i.jsx(ap,{"data-panel-sticky-top":"","data-panel-glow-top":n.top?"":void 0,children:e})}function lp({render:e}){const{ref:t,size:n}=Ht({w:0,h:0});return i.jsx(cp,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const cp=k.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,dp=k.div`
  flex: 1 1 100%;
  min-width: 0;
`,up=k(Ma)`
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
`,hp=k.div`
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
`,fp=k(We)`
  margin: 0;
  ${ya}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${pn}:hover &,
  ${pn}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function Do(e){return e.held===void 0?e.label:`${e.label}: ${xt(e.held)}`}function pp(e){let t=null;for(const n of e){const o=Po(n),{tone:r}=o;r===void 0||r==="neutral"||(t===null||hr(r)>hr(t.severity))&&(t={severity:r,label:Do(o)})}return t}function Dr({badges:e}){return i.jsx(i.Fragment,{children:e.map(t=>i.jsx(gp,{entry:t},t.id))})}function gp({entry:e}){const t=Po(e),{tone:n}=t;return mo(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:Do(t)}),null}function mp({summary:e,announcement:t}){return i.jsxs(i.Fragment,{children:[i.jsx(Pe,{text:e.label,focusable:!0,children:i.jsx(xp,{children:i.jsx(xa,{severity:e.severity})})}),i.jsx(_n,{visuallyHidden:!0,assertive:!0,children:t})]})}const xp=k.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,vp=k.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function yp(e){return e.hoverTitle?i.jsx(bp,{...e}):i.jsx(Pa,{...e,hoverTitleId:void 0})}function bp(e){const t=p.useId();return i.jsx(Pa,{...e,hoverTitleId:t})}function Pa({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:r,panelToolbar:s,panelFilter:a,panelFooter:l,panelTrend:c,inactive:d,fitToSize:h,hoverTitle:f,hoverTitleId:x,panelSidebar:m,sidebarSide:g,sidebarSize:v,sections:$,sectionMinWidth:j=Ff,children:S,...L}){const E=uf(),C=dr("actions"),M=dr("sections"),P=op(o,E),_=P.length===0?null:P.map(Y=>{const ie=Po(Y),{label:_e,tone:Me,title:An}=ie;return i.jsx(Pe,{text:An,focusable:!0,children:i.jsx(dn,{tone:Me,held:ie.held,report:Me===void 0||Me==="neutral"?void 0:{id:Y.id,label:Do(ie)},children:_e})},Y.id)}),B=a===void 0?s:i.jsxs(i.Fragment,{children:[s,i.jsx(dp,{children:ca(a)})]}),K=r??null,Q=K!==null&&K!=="none"&&K!=="live"?K:null;mo(Q?{id:"stream",severity:Dn(Q),label:ur(Q)??""}:null);const T=xf(),W=T!==null&&P.some(Y=>Y.id===T.id),w=Q===null?null:ur(Q),z=W?null:T!==null?i.jsx(rp,{summary:T}):Q===null||w===null?null:i.jsx(Pe,{text:`Telemetry stream: ${w}`,focusable:!0,children:i.jsx(dn,{tone:Dn(Q),size:"sm",children:w})}),Z=T?.label??w,de=Z===null||Z===""?"":typeof e=="string"?`${e}: ${Z}`:`Status: ${Z}`,et=n===void 0&&z===null&&_===null&&!C?void 0:i.jsxs(i.Fragment,{children:[n,C&&i.jsx(Kt,{segment:"actions",props:Qt}),_,z]}),we=T??pp(P)??(Q===null||w===null?null:{severity:Dn(Q),label:w}),Ue=we?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${we.label}`:`Status: ${we.label}`,ke=n===void 0&&we===null&&!C?P.length===0?void 0:i.jsx(Dr,{badges:P}):i.jsxs(i.Fragment,{children:[n,C&&i.jsx(Kt,{segment:"actions",props:Qt}),i.jsx(Dr,{badges:P}),we!==null&&i.jsx(mp,{summary:we,announcement:Ue})]}),ue=d!==void 0,Ce=ue?[]:p.Children.toArray($),pe=Ce.length>0,J=S===void 0&&!M&&!h&&Ce.length===1&&wp(Ce[0]),te=[];for(const Y of Ce){const ie=!h&&p.isValidElement(Y)&&Y.props.fill===!0,_e=te.at(-1);!ie&&_e!==void 0&&!_e.fill?_e.nodes.push(Y):te.push({fill:ie,nodes:[Y]})}pe&&!te.some(Y=>!Y.fill)&&te.push({fill:!1,nodes:[]});const Ge=te.reduce((Y,ie,_e)=>ie.fill?Y:_e,-1),Ye=Y=>Math.max(1,Y.filter(ie=>!(p.isValidElement(ie)&&ie.props.full===!0)).length),$e=[];for(const Y of te){const ie=$e.length;if(Y.fill){$e.push(Y.nodes[0]);continue}$e.push(i.jsxs(Df,{$min:j,$columns:Ye(Y.nodes),children:[Y.nodes,ie===Ge&&i.jsx(Kt,{segment:"sections",props:Qt})]},`sections-${ie}`))}const ae=ue?i.jsx(Ti,{reason:d}):pe?i.jsxs(i.Fragment,{children:[S,$e]}):S,le=i.jsxs(ja,{fitToSize:h,loneFrame:J,hoverTitle:f,children:[i.jsxs(ip,{children:[i.jsx(ga,{tiny:f}),!f&&i.jsx(up,{title:e,compactTitle:t,aside:et,toolbar:B})]}),h?i.jsx(zf,{hoverTitle:f,children:ae}):ae,!pe&&!ue&&i.jsx(Kt,{segment:"sections",props:Qt})]});return i.jsx(jf,{children:i.jsxs(pn,{$railTravels:!0,$hoverTitle:f,...f?{tabIndex:0,role:"group","aria-labelledby":x,"data-tiny-panel":""}:{},...L,children:[i.jsx(Ca,{railBandAbove:!0,children:m===void 0||ue?le:i.jsxs(Jf,{side:g,size:v,railBand:!0,children:[le,i.jsx(Aa,{children:m})]})}),!ue&&c!==void 0&&i.jsx(lp,{render:c}),!ue&&l!==void 0&&i.jsx(Ra,{children:l}),f&&i.jsxs(hp,{"data-panel-hover-title":"",children:[i.jsx(fp,{as:"h3",id:x,children:e}),ke!==void 0&&i.jsx(vp,{children:ke})]}),i.jsx(_n,{visuallyHidden:!0,children:f&&Ue!==void 0?"":de})]})})}function wp(e){if(!p.isValidElement(e)||e.type!==$s||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=p.Children.toArray(t).filter(r=>!(p.isValidElement(r)&&r.type===Vh));if(n.length!==1)return!1;const[o]=n;if(!p.isValidElement(o))return!1;if(o.type===Oh)return!0;if(o.type!==p.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const Bx=Object.assign(yp,{Context:wa,Delay:ga,Container:pn,Header:Ma,Toolbar:Sa,Footer:Ra,Title:$a,Glow:Ca,Body:ja,Section:$s,Sidebar:Aa}),kp={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function Wx({cols:e,minColWidth:t,fit:n=!1,gap:o="related-dense",rowGap:r,align:s="center",squares:a=!1,squareHeadingPx:l=0,squareHeadingMinPx:c,minRowHeight:d,children:h,...f}){if(a){const x=p.Children.toArray(h).length,m=t??"120px",g=i.jsx(Sp,{$count:x,$min:m,$headingPx:l,$gap:ht[o],$rowMin:d,children:i.jsx(jp,{$count:x,$min:m,$headingPx:l,$gap:ht[o],$rowMin:d,$headingMin:c,"data-grid-squares":"",children:h})});return i.jsx(_p,{$rowMin:d,...f,children:d===void 0?g:i.jsx(Mp,{children:g})})}return i.jsx($p,{$cols:e,$minColWidth:t,$fit:n,$gap:o,$rowGap:r,$align:s,...f,children:h})}const $p=k.div`
  display: grid;
  align-items: ${({$align:e})=>kp[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${ht[t]} ${ht[e]}`:ht[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:n})=>e||(t?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,_p=k.div`
  container: grid-squares-width / inline-size;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  ${({$rowMin:e})=>e&&`
  flex-basis: 0;
  min-height: ${e};
`}
`,Mp=k(Ea)`
  & > [data-scroll-area-inner] {
    display: flex;
    flex-direction: column;
  }
`,Sp=k.div`
  container: grid-squares / size;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${({$count:e,$min:t,$headingPx:n,$gap:o,$rowMin:r})=>Qh(e,t,n,o,r)}
`,jp=k.div`
  --cols: 1;
  --rows: ${({$count:e})=>e};
  display: grid;
  flex: 1 1 0;
  min-height: 0;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
  gap: ${({$gap:e})=>e};
  ${({$count:e,$min:t,$headingPx:n,$rowMin:o})=>Jh(e,t,n,o)}
  & > * {
    container-type: size;
    min-width: 0;
    min-height: 0;
  }
  ${({$headingPx:e,$headingMin:t})=>ef(e,t)}
`,Ia=.89,zo=.45;function La({kind:e,x:t,y:n,scale:o=1,ghost:r=!1}){const s=oe[e],a=s.canvasRadius*o,l={fill:s.color,opacity:r?zo:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const d=a*Ia;return i.jsx("rect",{x:t-d,y:n-d,width:2*d,height:2*d,...l})}const c=`${t},${n-a} ${t+a},${n+a*.8} ${t-a},${n+a*.8}`;return i.jsx("polygon",{points:c,...l})}function Ta(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function zr(e,t,n,o,r,{ghost:s=!1,scale:a=1}={}){const l=oe[n],c=l.canvasRadius*a;if(t.save(),t.globalAlpha=s?zo:1,t.fillStyle=Ta(e,l.cssVar,l.fallback),t.beginPath(),n==="held"){const d=c*Ia;t.rect(o-d,r-d,2*d,2*d)}else t.moveTo(o,r-c),t.lineTo(o+c,r+c*.8),t.lineTo(o-c,r+c*.8),t.closePath();t.fill(),t.restore()}function Xx(e,t,{held:n,modelled:o},r={}){n!==void 0&&o!==void 0&&(t.save(),t.globalAlpha=zo,t.strokeStyle=Ta(e,oe.modelled.cssVar,oe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.stroke(),t.restore()),n!==void 0&&zr(e,t,"held",n.x,n.y,{...r,ghost:o!==void 0}),o!==void 0&&zr(e,t,"modelled",o.x,o.y,r)}const mn=14,Ae=4,Ee=6,Ep=6,Hr=12,ge=6,Tt=8,Jt=4.5,lo=4,Ap=12,Cp=190,Rp=80;function Pt(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function Pp(e,t,n,o){const r=o??e,s=r.x1-r.x0,a=e.y1-e.y0,l=s>=Cp&&a>=Rp,c=l||o!==void 0,d=l||o?n:n.filter(M=>!M.detail),h=s-ge*2-Ae*2-Tt-lo,f=o!==void 0,x=Math.floor(h/Ee),m=M=>Pt(M.value??cn,x-(M.currency?M.currency.length+2:0)),g=M=>{const P=M.value??cn;if(f)return Pt(M.label,x);if(l)return`${M.label} ${P}`;const _=Math.floor((h-P.length*Ee)/Ee)-1-(M.modelled?2:0),B=Pt(M.label,Math.min(_,Ap));if(B!=="")return`${B} ${P}`;const K=Math.floor(h/Ee)-(M.modelled?2:0);return Pt(P,K)},v=M=>(l||f)&&M.currency?M.currency:"",$=M=>v(M)?Ep+v(M).length*Ee+(M.modelled?Hr:0):M.modelled?Hr:0,j=l?0:Tt+lo,S=Math.floor((s-ge*2-Ae*2)/Ee),L=Math.max(...d.map(M=>f?j+Math.max(g(M).length*Ee,m(M).length*Ee+$(M)):j+g(M).length*Ee+$(M)),c?Math.min(t.length,S)*Ee:0),E=c?1:0,C=(d.length*(f?2:1)+E)*mn+Ae*2;return{full:l,named:c,headingChars:S,stacked:f,rows:d,text:g,valueText:m,currencyText:v,cardW:f?s:Math.min(L+Ae*2,s-ge*2),cardH:C,headRows:E,fits:C<=a-ge*2}}function Ip(e,t,n,o,r){const s=(a,l)=>a>=t&&a<=t+o&&l>=n&&l<=n+r;for(let a=1;a<e.cx.length;a++){const[l,c,d,h]=[e.cx[a-1],e.cy[a-1],e.cx[a],e.cy[a]];if(![l,c,d,h].every(Number.isFinite))continue;const f=Math.max(1,Math.ceil(Math.hypot(d-l,h-c)/mn));for(let x=0;x<=f;x++)if(s(l+(d-l)*x/f,c+(h-c)*x/f))return!0}return!1}function Ho({x:e,plot:t,heading:n,rows:o,column:r,avoid:s=[],traces:a=[]}){const l=Pp(t,n,o,r),{rows:c,cardW:d,cardH:h,fits:f}=l,x=t.y0+ge,m=c.flatMap(_=>_.y===void 0||_.y===null?[]:[_.y]),g=(_,B)=>m.every(K=>e+Jt<_||e-Jt>_+d||K+Jt<B||K-Jt>B+h),v=t.x1-e-ge,$=v>=d||v>=e-t.x0,j=_=>Math.max(t.x0+ge,Math.min(t.x1-ge-d,_)),S=$?[e+ge,e-ge-d]:[e-ge-d,e+ge],L=[x,t.y1-ge-h].flatMap(_=>S.map(B=>({cardX:j(B),cardY:_}))),E=(_,B)=>a.every(K=>!Ip(K,_,B,d,h)),C=(_,B)=>s.every(K=>_+d<K.x0||_>K.x1||B+h<K.y0||B>K.y1),M=L.find(_=>g(_.cardX,_.cardY)&&E(_.cardX,_.cardY)&&C(_.cardX,_.cardY))??L.find(_=>g(_.cardX,_.cardY)&&C(_.cardX,_.cardY))??L.find(_=>g(_.cardX,_.cardY)&&E(_.cardX,_.cardY))??L.find(_=>g(_.cardX,_.cardY)),P=f?r?{cardX:r.x0,cardY:r.y0+ge}:M:void 0;return{layout:l,place:P}}function Ux(e){return Ho(e).place!==void 0}function Lp(e){const{layout:t,place:n}=Ho(e);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+t.cardW,y1:n.cardY+t.cardH}}function Tp({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:a}){const{layout:l,place:c}=Ho({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:a}),{full:d,named:h,headingChars:f,stacked:x,rows:m,text:g,valueText:v,currencyText:$,cardW:j,cardH:S,headRows:L}=l,E=c!==void 0,C=c?.cardX??0,M=c?.cardY??0,P=_=>_+Ae+(d?0:Tt+lo);return i.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[i.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),m.map(_=>_.y===void 0||_.y===null?null:i.jsx("circle",{cx:e,cy:_.y,r:3.5,fill:_.color,stroke:"var(--color-text-primary)",strokeWidth:1},_.id)),E&&i.jsxs("g",{"data-plot-crosshair-card":"",children:[i.jsx("rect",{x:C,y:M,width:j,height:S,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),h&&i.jsx("text",{x:C+Ae,y:M+Ae+10,fill:"var(--color-text-muted)",fontSize:10,children:Pt(n,f)}),m.map((_,B)=>{const K=x?2:1,Q=M+Ae+(B*K+L)*mn+10,T=Q+(x?mn:0);return i.jsxs("g",{"data-plot-crosshair-row":_.id,children:[!d&&i.jsx("rect",{x:C+Ae,y:Q-8,width:Tt,height:Tt,fill:_.color,"data-plot-crosshair-swatch":""}),i.jsx("text",{x:P(C),y:Q,fill:_.value===null||x?"var(--color-text-faint)":_.color,fontSize:10,style:{whiteSpace:"pre"},children:g(_)}),x&&i.jsx("text",{x:P(C),y:T,fill:_.value===null?"var(--color-text-faint)":_.color,fontSize:10,style:{whiteSpace:"pre"},children:v(_)}),_.modelled&&i.jsx(La,{kind:"modelled",x:C+j-Ae-$(_).length*Ee-($(_)?8:4),y:T-3}),$(_)&&i.jsx("text",{x:C+j-Ae,y:T,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:$(_)})]},_.id)})]})]})}const Br=480,Op=110,Np=200,Wr=56,Fp=20,Dp=112,zp=260,Hp=.4,Bp=300;function Wp({width:e,height:t,contentWidth:n,legendHeight:o=0,cardHeight:r=0}){const s=Math.max(Dp,Math.ceil(n));if((t>e||e<Br)&&t>=Np)return{placement:"below"};if(e<Br||t<Op||s>Math.min(zp,e*Hp)||e-s<Bp)return{placement:"overlay"};const l=t>=Wr+o+r;return!l&&t<Wr+Fp+r?{placement:"overlay"}:{placement:"beside",columnWidth:s,legendBelow:!l}}const Xp={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function Up(e){return Xp[e]}const lt=4,en=3,co=6;function Gp(e,t){return e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0}function Yp(e,t){const n=(o,r)=>o>=t.x0&&o<=t.x1&&r>=t.y0&&r<=t.y1;if(e.cx.length===1)return Number.isFinite(e.cx[0])&&n(e.cx[0],e.cy[0]);for(let o=1;o<e.cx.length;o++){const[r,s,a,l]=[e.cx[o-1],e.cy[o-1],e.cx[o],e.cy[o]];if(![r,s,a,l].every(Number.isFinite))continue;const c=Math.max(1,Math.ceil(Math.hypot(a-r,l-s)/co));for(let d=0;d<=c;d++)if(n(r+(a-r)*d/c,s+(l-s)*d/c))return!0}return!1}function qp({plot:e,card:t,traces:n,obstacles:o}){if(t.width<=0||t.height<=0||t.width>e.x1-e.x0-lt*2||t.height>e.y1-e.y0-lt*2)return;const r=e.x0+lt,s=e.x1-lt-t.width,a=e.y0+lt,l=e.y1-lt-t.height;return[{x:s,y:a},{x:r,y:l},{x:s,y:l},{x:r,y:a}].find(d=>{const h={x0:d.x-en,y0:d.y-en,x1:d.x+t.width+en,y1:d.y+t.height+en};return!n.some(f=>Yp(f,h))&&!o.some(f=>Gp(h,f))})}function Vp(e){const t=[],n=[];let o=!0;for(let r=e.y0;r<=e.y1+co;r+=co){const s=Math.min(r,e.y1);t.push(o?e.x0:e.x1,o?e.x1:e.x0),n.push(s,s),o=!o}return{cx:t,cy:n}}function Kp(e,t){return e?.includes(t)??!1}function Xr(e,t){const{reckoned:n,spans:o}=e.data;return n?.some(r=>t>=r.from&&t<=r.to)?"modelled":o?.some(r=>t>=r.from&&t<=r.to&&r.status==="recorded")?"recorded":"measured"}function Zp(e){const{x:t,y:n,y2:o}=e.data;let r=!0;for(let a=0;a<t.length;a++)if(!Number.isFinite(t[a])||a>0&&t[a]<t[a-1]){r=!1;break}if(r)return e;const s=t.map((a,l)=>l).filter(a=>Number.isFinite(t[a])).sort((a,l)=>t[a]-t[l]||a-l);return{...e,data:{x:s.map(a=>t[a]),y:s.map(a=>n[a]),...o?{y2:s.map(a=>o[a])}:{}}}}function Qp(e,t,n){const o=e.data.x,r=e.data.y,s=Math.min(o.length,r.length);if(s===0||t<o[0]||t>o[s-1])return null;let a=0,l=s-1;for(;a<l;){const g=a+l>>1;o[g]<t?a=g+1:l=g}const c=a,d=Math.max(0,c-1);if(o[c]!==t&&c>0&&Kp(e.data.breaks,c))return null;const h=t-o[d]<=o[c]-t?d:c;if(n!==void 0&&Math.abs(o[h]-t)>n)return null;const f=o[c]-o[d];if(e.readBetween&&f>0&&o[c]!==t){const g=r[d]+(r[c]-r[d])*(t-o[d])/f;return Number.isFinite(g)?{index:h,x:t,y:g,currency:Xr(e,h)}:null}const x=r[h];if(!Number.isFinite(x))return null;const m=e.data.y2?.[h];return{index:h,x:o[h],y:x,...m!==void 0&&Number.isFinite(m)?{y2:m}:{},currency:Xr(e,h)}}function Jp(e){const t=new Set;for(const n of e)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&t.add(o);return[...t].sort((n,o)=>n-o)}function Ur(e,t,n){if(e.length===0)return null;if(t===null)return e[e.length-1];let o=0,r=e.length-1;for(;o<r;){const a=o+r>>1;e[a]<t?o=a+1:r=a}let s=o+n;return e[o]!==t&&n>0&&(s-=1),e[Math.max(0,Math.min(e.length-1,s))]}function e0({x:e,y:t,size:n,color:o,text:r}){const s=n/2,a=`M 0 ${-s} L ${s} ${s*.8} L ${-s} ${s*.8} Z`,l=`M -0.9 ${-s*.42} H 0.9 V ${s*.2} H -0.9 Z`,c=`M -0.9 ${s*.4} H 0.9 V ${s*.64} H -0.9 Z`;return i.jsx(Pe,{text:r,focusable:!0,children:i.jsxs("g",{role:"img","aria-label":r,"data-limit-crossing":"",transform:`translate(${e} ${t})`,children:[i.jsx("title",{}),i.jsx("circle",{r:12,fill:"transparent"}),i.jsx("path",{d:`${a} ${l} ${c}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),i.jsx("path",{d:a,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function Oa(e,t,n){return n==="above"?e>=t:e<=t}function t0({y:e,cx:t,cy:n,limit:o,limitY:r,bad:s,breaks:a=[],step:l=!1,minGapPx:c}){const d=($,j,S)=>{if(!j)return{index:$,x:t[$],y:n[$],entered:!1};if(S===null)return{index:$,x:t[$],y:r,entered:!0};const L=n[$]-n[S],E=L===0?1:(r-n[S])/L;return{index:$,x:t[S]+(t[$]-t[S])*E,y:r,entered:!0}},h=new Set(a),f=[];let x=null,m=!1,g=!1,v=Number.NEGATIVE_INFINITY;for(let $=0;$<e.length;$++){if(!Number.isFinite(e[$])){x=null;continue}const j=Oa(e[$],o,s);if(j&&!g){const S=d($,m,l||h.has($)?null:x),L=f[f.length-1];L!==void 0&&S.x-v<c?L.spells++:f.push({...S,spells:1}),v=S.x}g=j,m=!0,x=$}return f}const n0=1;function o0(e,t,n,o,r){const s=n.to;if(s<1||s>=e.length)return!1;const a=o(e[s-1]),l=o(e[s]),c=r(t[s-1]),d=r(t[s]);return l>a?n.t.some((h,f)=>{const x=o(h),m=c+(d-c)*(x-a)/(l-a);return Math.abs(r(n.v[f])-m)>n0}):!1}function Xn(e,t,n,o){const r=t-e;if(r===0){const s=(n+o)/2;return()=>s}return s=>n+(s-e)/r*(o-n)}function uo(e,t,n=5){if(e===t)return Array.from({length:n},()=>e);const r=(t-e)/(n-1),s=10**Math.floor(Math.log10(r)),l=([1,2,2.5,5,10].find(x=>x*s>=r)??10)*s,c=Math.ceil(e/l)*l,d=[];for(let x=0;d.length<n;x++){const m=c+x*l;if(m>t+l*.01)break;d.push(m)}if(d.length>=2)return d;const h=Math.floor(e/l)*l,f=Math.ceil(t/l)*l;return f>h?[h,f]:[h,h+l]}function Na(e,t){const n=Math.floor(e/1e3);if(t>=36e5){const s=Math.floor(n/3600),a=Math.floor(n%3600/60),l=n%60;return`${s}:${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")}`}const o=Math.floor(n/60),r=n%60;return`${o}:${String(r).padStart(2,"0")}`}function Gr(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];for(let a=0;a<e.length;a++){const l=n(e[a]).toFixed(2),c=o(t[a]).toFixed(2),d=a===0||r.includes(a);s.push(`${d?"M":"L"}${l},${c}`),d&&ho(a,e.length,r)&&s.push(`L${l},${c}`)}return s.join(" ")}function ho(e,t,n){return e+1>=t||n.includes(e+1)}function r0(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let a=o(t[0]).toFixed(2);const l=n(e[0]).toFixed(2);s.push(`M${l},${a}`),ho(0,e.length,r)&&s.push(`L${l},${a}`);for(let c=1;c<e.length;c++){const d=n(e[c]).toFixed(2),h=o(t[c]).toFixed(2);if(r.includes(c)){s.push(`M${d},${h}`),ho(c,e.length,r)&&s.push(`L${d},${h}`),a=h;continue}s.push(`H${d}`),h!==a&&s.push(`V${h}`),a=h}return s.join(" ")}function s0(e,t,n,o,r,s=[],a=[],l=[]){if(e.length===0)return[];if(a.length===0&&l.length===0)return[{d:r(e,t,n,o,s)}];function c(v,$){const j=new Array(e.length);for(const S of v){const L=Math.min(e.length-1,S.to);for(let E=Math.max(0,S.from);E<=L;E++)j[E]=$(S)}return j}const d=c(a,v=>v.status),h=c(l,v=>v.basis),f=new Set(s),x=[];let m=0;const g=(v,$)=>{const j=v>0&&!f.has(v)?v-1:v,S=C=>C.slice(j,$+1),L=[];for(const C of s)C>j&&C<=$&&L.push(C-j);const E=r(S(e),S(t),n,o,L);E!==""&&x.push({status:d[v],basis:h[v],d:E})};for(let v=1;v<=e.length;v++)(v===e.length||d[v]!==d[m]||h[v]!==h[m])&&(g(m,v-1),m=v);return x}function Fa(e,t,n,o,r){if(e.length===0)return"";const s=Math.min(e.length,t.length,n.length);if(s===0)return"";const a=[];for(let l=0;l<s;l++){const c=o(e[l]).toFixed(2),d=r(n[l]).toFixed(2);a.push(`${l===0?"M":"L"}${c},${d}`)}for(let l=s-1;l>=0;l--){const c=o(e[l]).toFixed(2),d=r(t[l]).toFixed(2);a.push(`L${c},${d}`)}return a.push("Z"),a.join(" ")}function a0(e,t,n,o){const r=[];for(const s of t){const{bandLo:a,bandHi:l,bandKind:c}=s;if(!a||!l||c===void 0)continue;const d=[];for(let f=s.from;f<=s.to&&f<e.length;f++)d.push(e[f]);const h=Fa(d,a,l,n,o);h!==""&&r.push({d:h,kind:c})}return r}function Yr(e,t,n,o){if(e===t){const d=(n+o)/2;return()=>d}const r=e>0?e:1e-9,s=t>r?t:r*10,a=Math.log10(r),c=Math.log10(s)-a;if(c===0){const d=(n+o)/2;return()=>d}return d=>{const h=d>0?d:r;return n+(Math.log10(h)-a)/c*(o-n)}}function i0(e,t,n=5){if(!(e>0)||!(t>0)||t<=e)return uo(e,t,n);const o=Math.log10(e),r=Math.log10(t);if(r-o<1)return uo(e,t,n);const a=Math.ceil(o),l=Math.floor(r),c=Math.max(1,Math.ceil((l-a+1)/n)),d=[];for(let h=a;h<=l;h+=c)d.push(10**h);return d.length>0?d:[e,t]}const Un=.86,qr=[[0,-1.15],[1.05,.8],[-1.05,.8]],Vr=.3,be={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:Un,triangle:qr,outlineWidth:Vr,keylineWidth:.2,reach:Math.max(Math.hypot(Un,Un),...qr.map(([e,t])=>Math.hypot(e,t)))+Vr/2},l0={"aria-hidden":!0};function Da(e,t,n,o){const r=be.squareHalf;return(e==="modelled"?be.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([a,l])=>[t+a*o,n+l*o])}const za=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function Ha(e,t,n){const o=e==="current"?0:be.outlineWidth;return t*(o+2*n*be.keylineWidth)}function c0({x:e,y:t,r:n,state:o="current",keyline:r=!1}){const s=o==="current"?"":Da(o,0,0,n).map(([a,l])=>`${a},${l}`).join(" ");return i.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...l0,children:[r&&za.map(({ring:a,color:l,widths:c})=>{const d={"data-vessel-keyline":a,fill:"none",stroke:l,strokeWidth:Ha(o,n,c),strokeLinejoin:"round"};return o==="current"?i.jsx("circle",{r:n,...d},a):i.jsx("polygon",{points:s,...d},a)}),o==="current"?i.jsx("circle",{r:n,fill:be.color}):i.jsx("polygon",{points:s,fill:o==="lost"?"none":oe[o].color,stroke:o==="lost"?be.lost.color:be.color,strokeWidth:n*be.outlineWidth,strokeLinejoin:"round"})]})}function sn(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function Ba(e,t,n,o,r){if(e.beginPath(),t==="current"){e.arc(n,o,r,0,Math.PI*2);return}Da(t,n,o,r).forEach(([s,a],l)=>{l===0?e.moveTo(s,a):e.lineTo(s,a)}),e.closePath()}function d0(e,t,n,o,r){e.save(),e.lineJoin="round";for(const{color:s,widths:a}of za)Ba(e,t,n,o,r),e.strokeStyle=s,e.lineWidth=Ha(t,r,a),e.stroke();e.restore()}function u0(e,t,n,o,r,s=4,{keyline:a=!1}={}){a&&d0(t,n,o,r,s);const l=sn(e,be.cssVar,be.fallback);if(t.save(),Ba(t,n,o,r,s),n==="current")t.fillStyle=l,t.fill();else{if(n!=="lost"){const c=oe[n];t.fillStyle=sn(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=n==="lost"?sn(e,be.lost.cssVar,be.lost.fallback):l,t.lineWidth=s*be.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function Gx(e,t,n,o=4,r={}){const{held:s,modelled:a}=n;s!==void 0&&a!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=sn(e,oe.modelled.cssVar,oe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(a.x,a.y),t.stroke(),t.restore());for(const l of["lost","held","current","modelled"]){const c=n[l];c!==void 0&&u0(e,t,l,c.x,c.y,o,r)}}const pt=56;function Wa(e,t,n,o){const r=Math.max(0,Math.min(t-1,Math.floor(n))),s=Math.max(0,Math.min(t-1,Math.floor(o))),a=Math.min(t-1,r+1),l=Math.min(t-1,s+1),c=Math.max(0,Math.min(1,n-r)),d=Math.max(0,Math.min(1,o-s)),h=e[s*t+r]+(e[s*t+a]-e[s*t+r])*c,f=e[l*t+r]+(e[l*t+a]-e[l*t+r])*c;return h+(f-h)*d}const Kr=400,h0=16,f0=8,Zr=.06,p0=3.3,g0=.6,m0=60,x0=40,Qr=[6,12],Jr=[48,96],tn=2;function Gn(e,t,n){const o=Math.max(0,Math.min(1,(n-e)/(t-e)));return o*o*(3-2*o)}function es(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function ts(e,t){const n=t/e,o=e<=t?.07:.09,r=p0**Math.exp(-((e-t)**2)/(2*o**2*t**2));return n**5*Math.exp(-1.25*n**4)*r}function Xa(e,t,n){if(!(e>0)||!(t>0)||!(n>0)||!Number.isFinite(e+t+n))return[];const o=Math.sqrt(n*2*Math.PI/Kr),r=ts(o,o),s=[];for(let a=-tn;a<=h0*tn;a++){const l=Kr/2**(a/tn),c=l/e,d=Gn(Qr[0],Qr[1],c)*(1-Gn(Jr[0],Jr[1],c))*(1-Gn(t,2*t,l));if(d<=.001)continue;const h=2*Math.PI/l,f=Math.sqrt(n*h),x=Math.sqrt(Math.min(1,ts(f,o)/r)),m=(f>=o?Zr:Zr*x)/Math.sqrt(tn),g=(m0+(es(a,1)-.5)*2*x0)*Math.PI/180;s.push({kx:h*Math.sin(g),ky:h*Math.cos(g),k:h,amplitude:m/h,omega:f,phase:es(a,2)*2*Math.PI,weight:d})}return s.slice(0,f0)}function v0(e,t,n,o){let r=0;for(const s of e)r+=s.weight*s.amplitude*Math.cos(s.kx*t+s.ky*n-s.omega*o+s.phase);return r}const an=Ua(-.25,.3,.92),y0=2.6,b0=Ua(an[0],an[1],an[2]+1),w0=.8,k0=3,$0=.95,_0=.35,M0=235,S0=.5,j0=.35;function Ua(e,t,n){const o=Math.hypot(e,t,n);return[e/o,t/o,n/o]}function E0(e,t,n,o){const{east0:r,north0:s,dx:a,dy:l,seconds:c,colour:d,waves:h,isSea:f}=o,[x,m,g]=an,[v,$,j]=b0,S=h.length,L=new Float64Array(S*t),E=new Float64Array(S*t),C=new Float64Array(S*n),M=new Float64Array(S*n);for(let T=0;T<S;T++){const W=h[T];for(let w=0;w<t;w++){const z=W.kx*(r+(w+.5)*a);L[T*t+w]=Math.cos(z),E[T*t+w]=Math.sin(z)}for(let w=0;w<n;w++){const z=W.ky*(s-(w+.5)*l)-W.omega*c+W.phase;C[T*n+w]=Math.cos(z),M[T*n+w]=Math.sin(z)}}const P=new Float64Array(S),_=new Float64Array(S),B=h.map(T=>T.kx*T.weight*T.amplitude),K=h.map(T=>T.ky*T.weight*T.amplitude),Q=h.map(T=>g0*T.k*T.weight*T.amplitude);for(let T=0;T<n;T++)for(let W=0;W<t;W++){const w=(T*t+W)*4;if(f&&!f(W,T)){e[w+3]=0;continue}let z=0,Z=0,de=1;for(let J=0;J<S;J++){const te=L[J*t+W],Ge=E[J*t+W],Ye=C[J*n+T],$e=M[J*n+T];P[J]=te*Ye-Ge*$e,_[J]=Ge*Ye+te*$e}for(let J=0;J<S;J++){const te=S>1?1+w0*P[(J+k0)%S]:1;z-=B[J]*P[J]*te,Z-=K[J]*P[J]*te,de-=Q[J]*_[J]*te}const et=1/Math.sqrt(z*z+Z*Z+de*de),we=(z*x+Z*m+de*g)*et-g,Ue=1+y0*we;let ke=0;const ue=(z*v+Z*$+de*j)*et;if(ue>$0){let J=ue;for(let te=0;te<7;te++)J*=J;ke=255*_0*J}const Ce=Math.max(0,Ue-1)*j0,pe=Math.min(1,Ue)*S0;e[w]=d.r*pe+(255-d.r*pe)*Ce+ke,e[w+1]=d.g*pe+(255-d.g*pe)*Ce+ke,e[w+2]=d.b*pe+(255-d.b*pe)*Ce+ke,e[w+3]=M0}}function ns(e){const t=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function A0(e,t){const n=ns(t),o=Math.max(e.r,e.g,e.b,1),r=c=>({r:Math.min(255,e.r*c),g:Math.min(255,e.g*c),b:Math.min(255,e.b*c)});let s=0,a=255/o;for(let c=0;c<32;c++){const d=(s+a)/2;ns(r(d))<n?s=d:a=d}const l=r((s+a)/2);return{r:Math.round(l.r),g:Math.round(l.g),b:Math.round(l.b)}}const C0=192,R0=30,P0="--color-info-mark",I0=.42;function L0(e,t){const n=e.view==="plan",o=t.scaleX,r=t.scaleYPrimary,s=1/(o(1)-o(0)),a=1/(r(1)-r(0)),l=j=>(j-o(0))*s,c=j=>(j-r(0))*a,d=Math.min(o(e.bounds.x0),o(e.bounds.x1)),h=Math.max(o(e.bounds.x0),o(e.bounds.x1)),f=Math.min(r(e.bounds.y0),r(e.bounds.y1)),x=Math.max(r(e.bounds.y0),r(e.bounds.y1)),m=n?d:Math.max(t.plotX0,d),g=n?h:Math.min(t.plotX1,h),v=n?f:Math.max(t.plotY0,f),$=n?x:Math.min(t.plotY1,x);return n&&(h<t.plotX0||d>t.plotX1||x<t.plotY0||f>t.plotY1)||!(g-m>=1&&$-v>=1)||!Number.isFinite(s+a)?null:{left:m,top:v,width:g-m,height:$-v,x0:l(m),x1:l(g),y0:c($),y1:c(v)}}function os(e,t){if(!t)return null;e.fillStyle=t;const n=/^#([0-9a-f]{6})$/i.exec(String(e.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function T0(e,t,n){const o=os(t,getComputedStyle(e).getPropertyValue(P0).trim());if(!o)return null;const r=n?os(t,n):null;return r?A0(r,o):o}function O0(e,t,n,o,r,s){const a=pt,l=(n.x1-n.x0)/a,c=(n.y1-n.y0)/a,d=t.sea,h=o.scaleYPrimary(t.bounds.y0)<o.scaleYPrimary(t.bounds.y1),f=d&&d.size>1&&d.heights.length>=d.size*d.size?(m,g)=>{const v=h?g:a-1-g;return Wa(d.heights,d.size,m/(a-1)*(d.size-1),v/(a-1)*(d.size-1))<0}:void 0,x=e.createImageData(a,a);E0(x.data,a,a,{east0:t.origin.east+n.x0,north0:t.origin.north+n.y1,dx:l,dy:c,seconds:r,colour:s,waves:Xa(Math.max(l,c),n.x1-n.x0,t.gravity),isSea:f}),e.putImageData(x,0,0)}function N0(e,t,n,o,r){const{width:s,height:a}=e.canvas,l=F0(t,n,s),c=l.length>1?(l[l.length-1]-l[0])/(l.length-1):n.x1-n.x0,d=Xa(c,n.x1-n.x0,t.gravity),h=(t.bearingDeg??90)*Math.PI/180,f=g=>(g-n.x0)/(n.x1-n.x0)*s,x=g=>(n.y1-g)/(n.y1-n.y0)*a;e.clearRect(0,0,s,a),e.beginPath(),l.forEach((g,v)=>{const $=v0(d,t.origin.east+g*Math.sin(h),t.origin.north+g*Math.cos(h),o);v===0?e.moveTo(f(g),x($)):e.lineTo(f(g),x($))});const m=`${r.r}, ${r.g}, ${r.b}`;e.strokeStyle=`rgba(${m}, 0.9)`,e.lineWidth=1,e.stroke(),e.lineTo(f(l[l.length-1]),a),e.lineTo(f(l[0]),a),e.closePath(),e.fillStyle=`rgba(${m}, ${I0})`,e.fill()}function F0(e,t,n){const o=(e.samples??[]).filter(r=>r>t.x0&&r<t.x1);return e.samples&&e.samples.length>1?[t.x0,...o,t.x1]:Array.from({length:n+1},(r,s)=>t.x0+s/n*(t.x1-t.x0))}function D0({layer:e,frame:t}){const n=L0(e,t),o=p.useRef(null),r=p.useRef(null);r.current=n?{layer:e,at:n,frame:t}:null;const s=n?e.view==="plan"?pt:Math.max(1,Math.min(C0,Math.round(n.width))):0,a=n?e.view==="plan"?pt:Math.max(1,Math.round(n.height*s/n.width)):0,l=e.tint;return p.useEffect(()=>{const c=o.current,d=c?.getContext("2d")??null;if(!c||!d||s===0||a===0)return;const h=T0(c,d,l);if(!h)return;const f=()=>{const S=r.current;if(!S)return;const L=Date.now()/1e3;S.layer.view==="plan"?O0(d,S.layer,S.at,S.frame,L,h):N0(d,S.layer,S.at,L,h)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let m=!0;const g=typeof IntersectionObserver=="function"?new IntersectionObserver(S=>{m=S.some(L=>L.isIntersecting)}):null;g?.observe(c);let v=Number.NEGATIVE_INFINITY,$=0;const j=S=>{$=requestAnimationFrame(j),!(!m||document.hidden||S-v<1e3/R0)&&(v=S,f())};return $=requestAnimationFrame(j),()=>{cancelAnimationFrame($),g?.disconnect()}},[s,a,l]),n?i.jsx("g",{"aria-hidden":"true","data-plot-layer":e.id,"data-plot-layer-kind":"water",children:i.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:i.jsx("canvas",{ref:o,width:s,height:a,style:{display:"block",width:"100%",height:"100%",imageRendering:e.view==="plan"?"pixelated":"auto"}})})}):null}const z0={faint:.45,normal:.85,bright:1},H0=1.5,B0=5,W0=.9,jt=7,Et=6,Yn=10,gt=9,ze=12,X0=6.2,qn=4,U0=9,G0=13,Y0=.1,Ot={paintOrder:"stroke",strokeWidth:3,strokeLinejoin:"round"},Vn=5,q0=.5,V0=.5;function Xe(e){return se[e.tone??"neutral"]}function Dt(e){return ye[e.tone??"neutral"]}function Ie(e){return z0[e.emphasis??"normal"]}function Oe(e,t){return t.axis==="secondary"?e.scaleYSecondary:e.scaleYPrimary}function K0(e){const t=e.axis==="secondary"?"secondary":"primary";switch(e.kind){case"series":return{xs:e.points.map(n=>n.x),ys:e.points.map(n=>n.y),axis:t};case"region":return{xs:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.x),ys:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.y),axis:t};case"rule":return e.along==="y"?{xs:[],ys:[e.value],axis:t}:{xs:[e.value],ys:[],axis:t};case"marker":case"annotation":return{xs:[e.at.x],ys:[e.at.y],axis:t};default:return{xs:[],ys:[],axis:t}}}const Bo=5.8,ct=11,rs=4;function Z0(e,t){const n=t.text.length*Bo,{frame:o}=t,r=t.anchorX+t.gap,s=r+n<=o.plotX1-4?"start":"end",a=s==="start"?r:t.anchorX-t.gap,l=s==="start"?a:a-n,c=l+n,d=f=>e.some(x=>l<x.x1&&c>x.x0&&f-ct<x.y1&&f+2>x.y0);let h=t.anchorY+3;for(let f=0;f<rs&&d(h);f++)h+=ct;if(d(h)){h=t.anchorY+3;for(let f=0;f<rs&&d(h);f++)h-=ct}return h=Math.min(Math.max(h,o.plotY0+ct),o.plotY1-ct),e.push({x0:l,x1:c,y0:h-ct,y1:h+2}),{x:a,y:h,anchor:s}}function Q0(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function J0(e){if(e.length===0)return"";const t=[`M${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`];for(let n=1;n<e.length;n++)t.push(`H${e[n].x.toFixed(2)}`,`V${e[n].y.toFixed(2)}`);return t.join(" ")}function Ga(e,t,n){if(e.length===0)return[];const o=e[0],r=e[e.length-1],s=[...e];if(t==="right"||t==="left"){const a=t==="right"?n.plotX1:n.plotX0;s.push({x:a,y:r.y},{x:a,y:o.y})}else{const a=t==="above"?n.plotY0:n.plotY1;s.push({x:r.x,y:a},{x:o.x,y:a})}return s}function eg(e,t){const n=[];for(const o of e){if(o.kind==="relief"||o.kind==="water"){const a=Oe(t,o),{x0:l,y0:c,x1:d,y1:h}=o.bounds;n.push([{x:t.scaleX(l),y:a(c)},{x:t.scaleX(d),y:a(c)},{x:t.scaleX(d),y:a(h)},{x:t.scaleX(l),y:a(h)}]);continue}if(o.kind!=="region"||o.hatched)continue;const r=Oe(t,o),s=o.boundary.map(a=>({x:t.scaleX(a.x),y:r(a.y)}));if(!(s.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...s,...o.boundaryHigh.map(a=>({x:t.scaleX(a.x),y:r(a.y)})).reverse()])}else n.push(Ga(s,o.side,t))}return(o,r)=>n.some(s=>{let a=!1;for(let l=0,c=s.length-1;l<s.length;c=l++){const d=s[l],h=s[c];d.y>r!=h.y>r&&o<(h.x-d.x)*(r-d.y)/(h.y-d.y)+d.x&&(a=!a)}return a})}function tg({layer:e,frame:t}){if(e.stops.length===0)return null;const n=Oe(t,e),o=e.along==="y"?t.plotY1-t.plotY0:t.plotX1-t.plotX0;if(o<=0)return null;const r=e.along==="y"?t.plotY0:t.plotX0,s=e.along==="y"?n:t.scaleX,a=e.maxOpacity??V0,l=e.tint??Xe(e),c=e.blur!==void 0?Math.ceil(e.blur*3):0,d=`plot-field-${e.id}-${t.uid}`,h=`plot-field-blur-${e.id}-${t.uid}`,f=e.along==="y"?t.plotY1:t.plotX1,x=e.stops.map(m=>({offset:(s(m.at)-r)/o*100,intensity:Math.max(0,Math.min(1,m.intensity))})).sort((m,g)=>m.offset-g.offset);return i.jsxs(i.Fragment,{children:[i.jsxs("defs",{children:[i.jsx("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:t.plotX0,y1:t.plotY0,x2:e.along==="x"?f:t.plotX0,y2:e.along==="y"?f:t.plotY0,children:x.map((m,g)=>i.jsx("stop",{offset:`${m.offset.toFixed(2)}%`,stopColor:l,stopOpacity:a*m.intensity},g))}),e.blur!==void 0&&i.jsx("filter",{id:h,children:i.jsx("feGaussianBlur",{stdDeviation:e.blur})})]}),i.jsx("rect",{"data-plot-layer":e.id,"data-plot-layer-kind":"field",x:t.plotX0-c,y:t.plotY0-c,width:t.plotX1-t.plotX0+2*c,height:t.plotY1-t.plotY0+2*c,fill:`url(#${d})`,filter:e.blur!==void 0?`url(#${h})`:void 0})]})}const ng=6,dt=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function og(e){const t=Math.max(0,Math.min(1,e));for(let n=1;n<dt.length;n++)if(t<=dt[n][0]){const[o,r]=dt[n-1],[s,a]=dt[n],l=s>o?(t-o)/(s-o):0;return[Math.round(r[0]+(a[0]-r[0])*l),Math.round(r[1]+(a[1]-r[1])*l),Math.round(r[2]+(a[2]-r[2])*l)]}return dt[dt.length-1][1]}const rg=[150,156,160],sg=[200,80,70];function ag(e,t){if(t===3)return rg;if(t!==1&&t!==2)return e;const n=.3*e[0]+.59*e[1]+.11*e[2],o=(s,a,l)=>s+(l-s)*a,r=e.map(s=>o(o(s,.5,n),.06,235));return t===1?r:r.map((s,a)=>o(s,.3,sg[a]))}function ig(e,t){const n=2*(t-1),o=(e%n+n)%n;return o<t?o:n-o}function lg(e,t,n,o,r,s,a){const l=e[s*n+a],c=r?ig(l,o):l,[d,h,f]=ag(og(c/(o-1)),t[s*n+a]),x=a>0?e[s*n+a-1]:l,m=s>0?e[(s-1)*n+a]:l,g=x!==l||m!==l?.5:1;return`rgb(${Math.round(d*g)}, ${Math.round(h*g)}, ${Math.round(f*g)})`}function cg(e,t){const{bounds:n}=e,o=Oe(t,e),r=t.scaleX(n.x0),s=t.scaleX(n.x1),a=o(n.y0),l=o(n.y1),c=Math.abs(s-r)/pt,d=Math.abs(l-a)/pt;return!(c>0)||!(d>0)?null:{left:Math.min(r,s),top:Math.min(a,l),cellW:c,cellH:d,flipRows:a<l}}function dg(e,t){const{size:n,values:o}=e;if(!t||n<2||o.length<n*n)return null;const{left:r,top:s,cellW:a,cellH:l,flipRows:c}=t;let d=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY;for(let E=0;E<n*n;E++){const C=o[E];if(!Number.isFinite(C))return null;C<d&&(d=C),C>h&&(h=C)}const f=h-d,x=e.bandMetres!=null&&e.bandMetres>0?e.bandMetres:null,m=e.veil,g=Math.max(2,e.bands??ng),v=pt,$=new Int16Array(v*v),j=new Uint8Array(v*v),S=m!=null&&m.length>=n*n;for(let E=0;E<v;E++)for(let C=0;C<v;C++){const M=C/(v-1)*(n-1),P=E/(v-1)*(n-1);S&&(j[E*v+C]=m[Math.round(P)*n+Math.round(M)]??0);const _=Wa(o,n,M,P);if(x!=null){$[E*v+C]=Math.floor(_/x);continue}const B=f>0?(_-d)/f:.5;$[E*v+C]=Math.max(0,Math.min(g-1,Math.floor(B*g)))}const L=[];for(let E=0;E<v;E++){const C=c?E:v-1-E;let M=0,P="";for(let _=0;_<=v;_++){const B=_<v?lg($,j,v,g,x!=null,E,_):"";if(_===0){P=B;continue}B===P&&_<v||(L.push(i.jsx("rect",{x:r+M*a,y:s+C*l,width:(_-M)*a+.5,height:l+.5,fill:P},`${E}-${M}`)),M=_,P=B)}}return L}function ug({layer:e,frame:t}){const n=cg(e,t),{values:o,size:r,veil:s,bandMetres:a,bands:l}=e,{left:c,top:d,cellW:h,cellH:f,flipRows:x}=n??{},m=p.useMemo(()=>dg(e,n),[o,r,s,a,l,c,d,h,f,x]);return m?i.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:Ie(e),"aria-hidden":"true",children:m}):null}function hg({layer:e,frame:t}){const n=p.useId(),o=Oe(t,e),r=d=>({x:t.scaleX(d.x),y:o(d.y)}),s=e.boundary.map(r);if(s.length<2)return null;const a=e.side==="between"?[...s,...(e.boundaryHigh??[]).map(r).reverse()]:Ga(s,e.side,t);if(e.side==="between"&&!e.boundaryHigh)return null;const l=e.side==="right"?t.plotX1-4:e.side==="left"?t.plotX0+11:s[s.length-1].x,c=(t.plotY0+t.plotY1)/2;return i.jsxs(i.Fragment,{children:[e.hatched&&i.jsx("defs",{children:i.jsx("pattern",{id:n,width:Vn,height:Vn,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:i.jsx("line",{x1:0,y1:0,x2:0,y2:Vn,stroke:Xe(e),strokeWidth:1,strokeOpacity:e.opacity??q0})})}),i.jsx("polygon",{"data-plot-layer":e.id,"data-plot-layer-kind":"region","data-hatched":e.hatched?"":void 0,points:a.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:e.hatched?`url(#${n})`:Xe(e),fillOpacity:e.hatched?void 0:e.opacity??Y0}),t.labels&&e.label&&i.jsx("text",{x:l,y:c,transform:`rotate(-90 ${l} ${c})`,textAnchor:"middle",fontSize:U0,letterSpacing:"0.14em",fill:"var(--color-text-muted)",stroke:"var(--color-surface-raised)",...Ot,children:e.label})]})}function fg({layer:e,frame:t}){const n=Oe(t,e),o=e.points.map(s=>({x:t.scaleX(s.x),y:n(s.y)}));if(o.length===0)return null;const r=H0*(e.weight??1);if(e.style==="scatter"){const s=e.radius===void 0?r:Math.abs(t.scaleX(e.radius)-t.scaleX(0));return i.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",fill:Xe(e),opacity:Ie(e),children:o.map((a,l)=>i.jsx("circle",{cx:a.x,cy:a.y,r:s},l))})}return i.jsx("path",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",d:e.style==="step"?J0(o):Q0(o),fill:"none",stroke:Xe(e),strokeOpacity:Ie(e),strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:e.dashed?"5 3.5":void 0})}function pg({layer:e,frame:t}){const n=Oe(t,e),o=e.dashed??!0,r=Xe(e),s=e.along==="y",a=s?n(e.value):t.scaleX(e.value);return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"rule",x1:s?t.plotX0:a,x2:s?t.plotX1:a,y1:s?a:t.plotY0,y2:s?a:t.plotY1,stroke:r,strokeOpacity:Ie(e),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),t.labels&&e.label&&i.jsx("text",{x:s?t.plotX1-4:a+3,y:s?a-3:t.plotY0+10,textAnchor:s?"end":"start",fill:Dt(e),fontSize:gt,children:e.label})]})}function gg({layer:e,frame:t,placed:n}){const o=Oe(t,e),r=t.scaleX(e.at.x),s=o(e.at.y),a=e.across??"x",l=Xe(e),c=t.labels&&e.label?Z0(n,{anchorX:r,anchorY:s,gap:jt+3,text:e.label,frame:t}):null;return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"annotation",x1:a==="x"?r-jt:r,x2:a==="x"?r+jt:r,y1:a==="x"?s:s-jt,y2:a==="x"?s:s+jt,stroke:l,strokeOpacity:Ie(e),strokeWidth:1.75,strokeLinecap:"round"}),c&&e.label&&i.jsx("text",{x:c.x,y:c.y,textAnchor:c.anchor,fontSize:gt,letterSpacing:"0.05em",fill:Dt(e),fillOpacity:Ie(e),children:e.label})]})}function mg({layer:e,frame:t}){const n=Oe(t,e),o=t.scaleX(e.at.x),r=n(e.at.y)+(e.offsetPx??0),s=B0*(e.scale??1),a=Xe(e),l=e.shape??"dot",c={"data-plot-layer":e.id,"data-plot-layer-kind":"marker",opacity:Ie(e)},d=l==="none"?null:l==="vessel"?i.jsx("g",{...c,children:i.jsx(c0,{state:e.markState??"current",x:o,y:r,r:s*W0,keyline:!0})}):l==="dot"?i.jsx("circle",{...c,cx:o,cy:r,r:s,fill:a,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):l==="ring"?i.jsx("circle",{...c,cx:o,cy:r,r:s,fill:"none",stroke:a,strokeWidth:1.5}):l==="cross"?i.jsx("path",{...c,d:`M${o-s},${r} L${o+s},${r} M${o},${r-s} L${o},${r+s}`,stroke:a,strokeWidth:1.5,strokeLinecap:"round"}):l==="chevron-up"||l==="chevron-down"?i.jsx("polyline",{...c,points:l==="chevron-up"?`${o-s},${r+s*.5} ${o},${r-s*.5} ${o+s},${r+s*.5}`:`${o-s},${r-s*.5} ${o},${r+s*.5} ${o+s},${r-s*.5}`,fill:"none",stroke:a,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null,h=(e.label?.length??0)*Bo/2+3,f=l==="none"?Math.min(Math.max(o,t.plotX0+h),t.plotX1-h):o+s+3,x=l==="none"?Math.min(Math.max(r+3,t.plotY0+gt+3),t.plotY1-4):r+3;return i.jsxs(i.Fragment,{children:[d,t.labels&&e.label&&i.jsx("text",{x:f,y:x,textAnchor:l==="none"?"middle":void 0,fontSize:gt,fill:Dt(e),fillOpacity:Ie(e),stroke:"var(--color-surface-raised)",...Ot,children:e.label})]})}function xg({layer:e,frame:t,row:n,edges:o}){const r=e.caption?2:1;if(e.anchor==="left-edge"||e.anchor==="right-edge"){const g=e.anchor==="left-edge"?t.plotX0+Et+n*ze:t.plotX1-Et-n*ze,v=t.plotY1-34;return i.jsx("text",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",x:g,y:v,transform:`rotate(-90 ${g} ${v})`,fontSize:gt,letterSpacing:"0.14em",fill:Dt(e),fillOpacity:Ie(e),stroke:"var(--color-surface-raised)",...Ot,children:e.text})}const s=e.anchor.startsWith("top"),a=e.anchor.endsWith("right"),l=g=>Et+(g?G0:0),c=a?t.plotX1-l(o.right):t.plotX0+l(o.left),d=n*(r*ze+2),h=s?t.plotY0+Et+Yn+d:t.plotY1-Et-d,f=h-ze,x=Math.max(e.text.length*X0,(e.caption?.length??0)*Bo)+2*qn,m=(s?h:h-(e.caption?ze:0))-Yn-1;return i.jsxs("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",textAnchor:a?"end":"start",children:[i.jsx("rect",{x:a?c-x+qn:c-qn,y:m,width:x,height:r*ze+1,rx:3,fill:"var(--color-surface-raised)",fillOpacity:.8}),e.caption&&i.jsx("text",{x:c,y:s?h:f,fontSize:gt,letterSpacing:"0.05em",fill:"var(--color-text-faint)",stroke:"var(--color-surface-raised)",...Ot,children:e.caption}),i.jsx("text",{x:c,y:e.caption&&s?h+ze:h,fontSize:Yn,fontWeight:700,fill:Dt(e),fillOpacity:Ie(e),stroke:"var(--color-surface-raised)",...Ot,children:e.text})]})}const ss={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},vg={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function Kn({layers:e,frame:t,pass:n}){const o=e.map((l,c)=>({layer:l,index:c})).filter(({layer:l})=>vg[l.kind]===n).sort((l,c)=>ss[l.layer.kind]-ss[c.layer.kind]||(l.layer.z??0)-(c.layer.z??0)||l.index-c.index),r=new Map,s=[],a={left:e.some(l=>l.kind==="caption"&&l.anchor==="left-edge"||l.kind==="region"&&l.side==="left"&&!!l.label),right:e.some(l=>l.kind==="caption"&&l.anchor==="right-edge"||l.kind==="region"&&l.side==="right"&&!!l.label)};return i.jsx(i.Fragment,{children:o.map(({layer:l,index:c})=>{const d=`${l.id}-${c}`;switch(l.kind){case"relief":return i.jsx(ug,{layer:l,frame:t},d);case"water":return i.jsx(D0,{layer:l,frame:t},d);case"field":return i.jsx(tg,{layer:l,frame:t},d);case"region":return i.jsx(hg,{layer:l,frame:t},d);case"series":return i.jsx(fg,{layer:l,frame:t},d);case"rule":return i.jsx(pg,{layer:l,frame:t},d);case"annotation":return i.jsx(gg,{layer:l,frame:t,placed:s},d);case"marker":return i.jsx(mg,{layer:l,frame:t},d);case"caption":{const h=r.get(l.anchor)??0;return r.set(l.anchor,h+1),i.jsx(xg,{layer:l,frame:t,row:h,edges:a},d)}default:return null}})})}function yg(e){return e.map(t=>t.description).filter(t=>typeof t=="string"&&t.length>0)}const as=11,nn=3,on=4,is=(e,t)=>e.x0<t.x1&&t.x0<e.x1&&e.y0<t.y1&&t.y0<e.y1;function bg(e,t,n,o,r){let s=0,a=1;const l=n-e,c=o-t,d=[[-l,e-r.x0],[l,r.x1-e],[-c,t-r.y0],[c,r.y1-t]];for(const[h,f]of d){if(h===0&&f<0)return!1;if(h!==0){const x=f/h;h<0?s=Math.max(s,x):a=Math.min(a,x)}}return s<=a}function wg(e,t){for(let n=1;n<e.cx.length;n++){const o=[e.cx[n-1],e.cy[n-1],e.cx[n],e.cy[n]];if(o.every(Number.isFinite)&&bg(o[0],o[1],o[2],o[3],t))return!0}return!1}function kg({labels:e,plot:t,obstacles:n,traces:o}){const r=[],s=new Map;for(const a of e){const l={y0:a.lineY-nn-as,y1:a.lineY-nn},c={y0:a.lineY+nn,y1:a.lineY+nn+as},d={x0:t.x1-on-a.width,x1:t.x1-on},h={x0:t.x0+on,x1:t.x0+on+a.width},f=[{...d,...l,anchor:"end"},{...d,...c,anchor:"end"},{...h,...l,anchor:"start"},{...h,...c,anchor:"start"}];let x=null;for(const m of f){if(!(m.x0>=t.x0&&m.x1<=t.x1&&m.y0>=t.y0&&m.y1<=t.y1)||r.some($=>is(m,$)))continue;const v=2*n.filter($=>is(m,$)).length+o.filter($=>wg($,m)).length;(x===null||v<x.cost)&&(x={spot:m,cost:v})}if(x===null){s.set(a.id,null);continue}r.push(x.spot),s.set(a.id,{x:x.spot.anchor==="end"?x.spot.x1:x.spot.x0,y:x.spot.y1-2,anchor:x.spot.anchor})}return s}function Yx(e,t,n,o="linear"){const r=n&&$g(t,n)?0:t,s=n?o==="log"?fo(e,r).decimals:_g(e,r,n):0;return Te(Be(e,r),{decimals:s})}function $g(e,t){const n=t.length>1?Math.abs(t[1]-t[0]):0;return n>0&&Math.abs(e)<n*1e-6}const Zn=3;function Ya(e){return{figure:Number.parseFloat(e.replace(/[^\d.-]/g,"")),unit:e.replace(/[\d.,\s-]/g,"")}}function fo(e,t){const n=r=>Ya(Te(Be(e,t),{decimals:r})),o=n(Zn);for(let r=0;r<Zn;r++)if(n(r).figure===o.figure)return{decimals:r,unit:o.unit};return{decimals:Zn,unit:o.unit}}function _g(e,t,n){const o=fo(e,t);let r=o.decimals;for(const s of n){const a=fo(e,s);a.unit===o.unit&&(r=Math.max(r,a.decimals))}return r}function qx(e){const t=Ya(Te(e,{decimals:3})),n=Math.abs(t.figure),o=Number.isFinite(n)&&n>0?Math.max(0,2-Math.floor(Math.log10(n))):0;return Te(e,{decimals:o})}function Qn(e,t,n){for(let o=n;o<6;o++){const r=e.map(s=>(s/t).toFixed(o));if(r.every((s,a)=>a===0||s!==r[a-1]))return o}return 6}const Mg=4,Sg=2.5;function jg(e,t){if(e.length===0)return!1;const n=e[e.length-1]-t;return n===0?!0:e.length===1?!1:Math.sign(e[0]-t)!==Math.sign(n)}function Eg(e,t){return e==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:t?e==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const Ag=(e,t)=>Na(e-t[0],t[1]-t[0]),Vx=(e,t)=>Na((e-t[0])*1e3,(t[1]-t[0])*1e3),Jn={top:10,bottom:28,left:50};function qa(e,t,n){const o=(s,a,l)=>Math.max(s,Math.min(l,a)),r=o(30,Math.round(e*.18),Jn.left);return{top:Jn.top,right:n?r:o(14,Math.round(e*.07),20),bottom:t<150?20:Jn.bottom,left:r}}const ls=e=>e.length*6.5+6,Cg=4,Rg=.4,Pg=26,Ze=14,Ig=160,je=16,rn=4,Lg=6,At=(e,t)=>Math.min(e.length*6+8,t);function Tg(e,t){const n=[];let o=0,r=0;for(const s of e)r>0&&r+s>t&&(o+=1,r=0),n.push({row:o,x:r}),r+=s+Lg;return{rows:e.length===0?0:o+1,positions:n}}const cs=4,Og=.03;function eo(e,t){const n=Math.max(0,Math.floor(t/6));if(e.length<=n)return e;const o=e.lastIndexOf(" (");if(o>0&&e.length-o+4<=n){const r=n-(e.length-o)-3;return`${e.slice(0,r)}...${e.slice(o)}`}return n<4?"":`${e.slice(0,n-3)}...`}function ds(e,t){const n=e.split(/(?=M)/).filter(r=>r.length>0),o=[];for(const r of n){const s=[...r.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)];if(s.length<2)continue;const a=s[0],l=s[s.length-1];o.push(`${r.trim()} L${l[1]},${t} L${a[1]},${t} Z`)}return o.length>0?o.join(" "):null}function Ng(e,t,n,o,r=1){const s=[],a=Pg*Math.max(.5,Math.min(2,r));for(let l=e+a/2;l<t;l+=a)for(let c=n+a/2;c<o;c+=a)s.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return s}const Fg=120,Dg=90,zg=70,Hg=35,Bg=2,Wg=12,us=8,Xg=2,He=14,xn=6,vn=12,Ug=16,Gg=12,Yg=200,hs=10,qg=.2,fs=.6,ps="5 3",Vg=.15,Kg=.45,Zg="the value is inside the shaded region";function Qg(e){return(e.type??"line")==="band"&&e.data.y2?[...e.data.y,...e.data.y2]:e.data.y}function Jg({series:e,thresholds:t,yTickFormat:n}){const o=s=>s*xn,r=[];for(const s of e)r.push(o(s.label.length)+8);for(const s of t){if(s.kind==="marker"&&!s.label)continue;const a=s.label??n(s.value);r.push(o(a.length)+vn+8)}return Math.max(0,...r)+Wg}function em({width:e,height:t,hasSecondary:n,series:o,thresholds:r}){const s=r.filter(h=>h.label);if(o.length===0||s.length===0)return!1;const a=Math.max(...o.map(h=>h.label.length*6+8)),l=Math.max(...s.map(h=>(h.label?.length??0)*xn+vn)),c=qa(e,t,n),d=e-c.left-c.right-Ze-Ug;return a+l+Gg>d}function Kx({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:r=Ag,yTickFormat:s=tm,yScalePrimary:a="linear",yScaleSecondary:l="linear",thresholds:c,legend:d="overlay",hideXAxis:h=!1,density:f="chart",spatial:x=!1,gridScale:m=1,layers:g,"aria-label":v,crosshair:$=!1,xKind:j="time",xReadFormat:S,xAxisLabel:L,yAxisLabel:E,ySecondaryAxisLabel:C,card:M,cardForms:P=1,width:_,height:B}){const K=p.useId(),Q=f==="compact",T=Q?"none":d,W=x,w=W||Q,z=$&&!w&&e.some(u=>u.data.x.length>0),[Z,de]=p.useState(null),[et,we]=p.useState(!1),[Ue,ke]=p.useState(""),[ue,Ce]=p.useState(null),[pe,J]=p.useState(null),te=pe?.w===_&&pe.h===B?pe.form:0,[Ge,Ye]=p.useState(null),$e=M!=null,ae=Ge?.form===te?Ge:null;p.useLayoutEffect(()=>{if(!ue){Ye(null);return}const u=()=>Ye(b=>{const R={w:ue.offsetWidth,h:ue.offsetHeight,form:te};return b?.w===R.w&&b?.h===R.h&&b?.form===R.form?b:R});u();const y=new ResizeObserver(u);return y.observe(ue),()=>y.disconnect()},[ue,te]);const le=_,Y=B,ie=e.filter(u=>u.axis==="primary"&&u.data.x.length>0),_e=e.filter(u=>u.axis==="secondary"&&u.data.x.length>0),Me=_e.length>0,An=T!=="none"&&e.length>0||(c??[]).some(u=>u.label),Wo=Jg({series:e,thresholds:c??[],yTickFormat:s}),Xo=$e&&ae!==null&&ae.w+us<=Math.max(112,Math.ceil(Wo)),Uo=w||!An?{placement:"overlay"}:Wp({width:le,height:Y,contentWidth:Wo,legendHeight:T==="none"?0:e.length*je+6,cardHeight:Xo&&ae!==null?ae.h:0}),vt=Uo.placement==="overlay"&&!w&&T!=="none"&&Y>=Yg&&em({width:le,height:Y,hasSecondary:Me,series:e,thresholds:c??[]})?{placement:"below"}:Uo,Re=T!=="none"&&(vt.placement==="below"||vt.placement==="beside"&&vt.legendBelow),Cn=Re?Tg(e.map(u=>At(u.label,le-2*rn)),le-2*rn):{rows:0,positions:[]},Rn=Cn.rows===0?0:Cn.rows*je+4,Go=le>=Ig,Yo=!w&&!h&&!!L,qo=!w&&Go&&!!E,Vo=!w&&Go&&Me&&!!C,Bt=W?0:1,Ko=w?{top:Bt,right:Bt,bottom:Bt,left:Bt}:qa(le,Y,Me),tt={...Ko,bottom:Ko.bottom+(Yo?Ze:0)+Rn},U=tt.top,q=Y-tt.bottom,Ne=q-U,Wt=p.useMemo(()=>{const u={primary:[],secondary:[]};for(const y of g??[]){const b=K0(y);u[b.axis].push(...b.ys)}return u},[g]),nt=p.useMemo(()=>gs(ie,n,a,Wt.primary),[ie,n,a,Wt]),ot=p.useMemo(()=>gs(_e,o,l,Wt.secondary),[_e,o,l,Wt]),he=a==="log"?Yr(nt[0],nt[1],q,U):Xn(nt[0],nt[1],q,U),fe=l==="log"?Yr(ot[0],ot[1],q,U):Xn(ot[0],ot[1],q,U),Zo=Math.max(2,Math.min(7,Math.round(Ne/Hg))),Pn=(u,y,b,R)=>{const I=Math.min(u,y),O=Math.max(u,y),A=(O-I)*1e-6||1e-6,D=V=>V>=I-A&&V<=O+A,G=V=>R==="log"?i0(I,O,V):uo(I,O,V);for(let V=b;V<=64;V*=2){const xe=G(V).filter(D);if(xe.length<2)continue;if(xe.length<=b)return xe;const _t=(xe.length-1)/(b-1),Yt=Array.from({length:b},(rm,fi)=>xe[Math.round(fi*_t)]);return Array.from(new Set(Yt))}return[I,O]},Xt=Pn(nt[0],nt[1],Zo,a==="log"?"log":"linear"),Ut=Me?Pn(ot[0],ot[1],Zo,l==="log"?"log":"linear"):[],Qo=(u,y)=>u.length===0?y:Math.max(y,Math.min(Math.round(le*Rg),Math.max(...u.map(b=>ls(s(b,u))))+Cg)),In=w?tt:{left:Qo(Xt,tt.left)+(qo?Ze:0),right:(Me?Qo(Ut,tt.right):tt.right)+(Vo?Ze:0)},X=In.left,Ln=vt.placement==="beside"?vt.columnWidth:0,re=le-In.right-Ln,me=re-X,Jo=le-Ln-Ze/2,qe=me>=Fg&&Ne>=Dg,ee=Ln>0?{x0:re+(Me?In.right:0)+us,y0:U,x1:le-Xg,y1:q}:void 0,er=T==="none"||ee||Re?[]:e.map((u,y)=>({x0:X+3,y0:U+6+y*je,x1:X+3+At(u.label,me-6),y1:U+6+y*je+13})),ne=Xn(t[0],t[1],X,re),Va=Math.max(2,Math.min(8,Math.round(me/zg))),yt=Pn(t[0],t[1],Va,"linear"),Ka=p.useMemo(()=>{const u=[],y=yt.length-1;if(y<0)return u;const b=ls,R=6,I=A=>{const D=yt[A],G=r(D,t,yt),V=ne(D),xe=b(G),_t=A===0?"start":A===y?"end":"middle",Yt=_t==="start"?V:_t==="end"?V-xe:V-xe/2;return{x:V,text:G,anchor:_t,leftEdge:Yt,rightEdge:Yt+xe}},O=I(0);if(u.push({x:O.x,text:O.text,anchor:O.anchor}),y>=1){const A=I(y);if(A.leftEdge>=O.rightEdge+R){let D=O.rightEdge;for(let G=1;G<y;G++){const V=I(G);V.leftEdge>=D+R&&V.rightEdge<=A.leftEdge-R&&(u.push({x:V.x,text:V.text,anchor:V.anchor}),D=V.rightEdge)}u.push({x:A.x,text:A.text,anchor:A.anchor})}}return u},[yt,t,ne,r]),tr=(u,y)=>{const b=new Set,R=u.length;if(R===0||(b.add(0),R===1))return b;const I=16,O=y(u[0]),A=y(u[R-1]);if(Math.abs(A-O)>=I){let D=O;for(let G=1;G<R-1;G++){const V=y(u[G]);Math.abs(V-D)>=I&&Math.abs(A-V)>=I&&(b.add(G),D=V)}b.add(R-1)}return b},Za=tr(Xt,he),Qa=tr(Ut,fe),Fe=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>{const y=u.axis==="primary"?he:fe,b=u.type??"line";if(b==="band")return u.data.y2?{id:u.id,kind:"band",color:u.color,opacity:u.fillOpacity??qg,d:Fa(u.data.x,u.data.y,u.data.y2,ne,y)}:{id:u.id,kind:"noop"};if(b==="scatter"){const A=u.data.x.map((D,G)=>({cx:ne(D),cy:y(u.data.y[G])}));return{id:u.id,kind:"scatter",color:u.color,points:A}}const R=b==="step"?r0:Gr,I=(u.data.bridges??[]).filter(A=>o0(u.data.x,u.data.y,A,ne,y)),O=[...new Set([...u.data.breaks??[],...I.map(A=>A.to)])].sort((A,D)=>A-D);return{id:u.id,kind:"stroked",color:u.color,dashed:u.dashed??!1,uncertainty:a0(u.data.x,u.data.reckoned??[],ne,y),segments:s0(u.data.x,u.data.y,ne,y,R,O,u.data.spans,u.data.reckoned),modelled:I.map(A=>({basis:A.basis,d:Gr([u.data.x[A.to-1],...A.t,u.data.x[A.to]],[u.data.y[A.to-1],...A.v,u.data.y[A.to]],ne,y)})),tail:u.data.x.length>0&&(u.data.reckoned??[]).some(A=>A.to>=u.data.x.length-1)?{cx:ne(u.data.x[u.data.x.length-1]),cy:y(u.data.y[u.data.y.length-1])}:null,observed:[...new Set(I.flatMap(A=>[A.to-1,A.to]))].map(A=>({cx:ne(u.data.x[A]),cy:y(u.data.y[A])}))}}),[e,ne,he,fe]),Ve=p.useMemo(()=>c?c.map(u=>{const y=u.axis??"primary",b=e.filter(I=>I.axis===y&&I.type!=="band"&&!I.dashed),R=u.kind==="limit"?b.some(I=>{const O=I.data.y.filter(A=>Number.isFinite(A));return O.length>0&&Oa(O[O.length-1],u.value,u.bad)}):u.kind==="target"&&b.some(I=>jg(I.data.y,u.value));return{id:u.id,label:u.label,spokenLabel:u.spokenLabel,value:u.value,kind:u.kind,passed:R,currency:bn(u.reading,{drawsReckoning:!0}),tone:Eg(u.kind,R),dashed:u.kind!=="marker",y:y==="primary"?he(u.value):fe(u.value)}}):[],[c,e,he,fe]),bt=p.useMemo(()=>{const u=(y,b,R)=>Math.max(y,Math.min(R,b));return(c??[]).flatMap(y=>{if(y.kind!=="limit"||!Number.isFinite(y.value))return[];const b=y.axis??"primary",R=b==="primary"?he:fe,I=R(y.value),O=y.bad==="above"?-1:1,A=y.label||`the limit at ${s(y.value)}`;return e.filter(D=>D.axis===b&&D.data.x.length>0&&(D.type??"line")!=="band"&&!D.dashed).flatMap(D=>t0({y:D.data.y,cx:D.data.x.map(ne),cy:D.data.y.map(R),limit:y.value,limitY:I,bad:y.bad,breaks:D.data.breaks,step:D.type==="step"||D.type==="scatter",minGapPx:He}).slice(qe?0:-1).map(G=>{const V=s(D.data.y[G.index]),xe=r(D.data.x[G.index],t);return{key:`${y.id}-${D.id}-${G.index}`,color:D.color,x:u(X+He/2+1,G.x-hs*(G.entered?1:-1),re-He/2-1),y:u(U+He/2+1,G.y+O*hs,q-He/2-1),text:G.entered?G.spells>1?`${D.label} went past ${A} ${G.spells} times from ${xe}, first reading ${V}`:`${D.label} went past ${A} at ${xe}, reading ${V}`:`${D.label} was already past ${A} when this window began at ${xe}, reading ${V}`}}))})},[c,e,ne,he,fe,r,s,t,X,re,U,q,qe]),ce=(()=>{if(!$e||ae===null||w)return;if(ee&&Xo){const I={x0:ee.x0,y0:q-ae.h,x1:ee.x0+ae.w,y1:q},O=U+(T==="none"||Re?0:e.length*je+6);return I.x1<=ee.x1&&I.y0>=O?I:void 0}const u=He/2,y=[...e.filter(I=>(I.type??"line")!=="band").flatMap(I=>{const O=I.axis==="primary"?he:fe,A=I.data.x.map(ne),D=I.data.y.map(O);return I.type==="scatter"?A.map((G,V)=>({cx:[G],cy:[D[V]]})):[{cx:A,cy:D}]}),...Ve.map(I=>({cx:[X,re],cy:[I.y,I.y]}))],b=[...bt.map(I=>({x0:I.x-u,y0:I.y-u,x1:I.x+u,y1:I.y+u})),...T==="none"||ee||Re?[]:e.map((I,O)=>({x0:X+3,y0:U+6+O*16,x1:X+3+Math.min(I.label.length*6+8,me-6),y1:U+6+O*16+13}))],R=qp({plot:{x0:X,y0:U,x1:re,y1:q},card:{width:ae.w,height:ae.h},traces:y,obstacles:b});return R?{x0:R.x,y0:R.y,x1:R.x+ae.w,y1:R.y+ae.h}:void 0})(),rt=p.useMemo(()=>{if(!qe)return new Map;const u=He/2;return kg({labels:Ve.filter(y=>y.label).map(y=>({id:y.id,width:(y.label?.length??0)*xn+(y.currency.held?vn:0),lineY:y.y})),plot:ee??{x0:X,y0:U,x1:re,y1:q},obstacles:[...ce?[ce]:[],...bt.map(y=>({x0:y.x-u,y0:y.y-u,x1:y.x+u,y1:y.y+u})),...T==="none"||Re?[]:e.map((y,b)=>({x0:ee?ee.x0:X+3,y0:U+6+b*je,x1:(ee?ee.x0:X+3)+At(y.label,ee?ee.x1-ee.x0:me-6),y1:U+6+b*je+13}))],traces:(ee?[]:e).filter(y=>(y.type??"line")!=="band").map(y=>({cx:y.data.x.map(ne),cy:y.data.y.map(y.axis==="primary"?he:fe)}))})},[qe,ce,ee,Ve,bt,T,Re,e,ne,he,fe,X,re,U,q,me]),Ja=(()=>{const u=U+6;if(T==="none"||Re||e.length===0)return u;const y=ee?ee.x0:X+3,b=y+Math.max(...e.map(O=>At(O.label,ee?ee.x1-ee.x0:me-6))),R=Ve.flatMap(O=>{const A=rt.get(O.id);if(!O.label||!A)return[];const D=O.label.length*xn+(O.currency.held?vn:0),G=A.anchor==="end"?A.x-D:A.x;return[{x0:G,y0:A.y-9,x1:G+D,y1:A.y+2}]});ce&&R.push(ce);const I=e.length*je-3;for(let O=u;O+I<=q;O+=je){const A={x0:y,y0:O,x1:b,y1:O+I};if(!R.some(D=>A.x0<D.x1&&D.x0<A.x1&&A.y0<D.y1&&D.y0<A.y1))return O}return u})(),ei=e.flatMap(u=>{const y=Fe.find(A=>A.id===u.id),b=y?.kind==="stroked"?y.modelled.map(A=>A.basis):[],R=u.data.reckoned??[];if(R.length===0&&b.length===0)return[];const O=[...new Set([...R.map(A=>A.basis),...b])].map(A=>`${u.label}: part of this trace is reckoned, ${Up(A)}, not measured`);return R.some(A=>A.bandLo&&A.bandHi)&&O.push(`${u.label}: ${Zg}`),O}),ti=Ve.flatMap(u=>{const y=u.spokenLabel??u.label??u.id,b=[];return u.passed&&u.kind==="limit"&&b.push(`${y}: limit passed`),u.passed&&u.kind==="target"&&b.push(`${y}: target reached`),u.currency.held&&b.push(Ks(y,u.currency.caption)),u.label&&!rt.get(u.id)&&b.length===0&&b.push(u.spokenLabel??u.label),b}),Tn=[...ei,...ti],ni=[v??"Telemetry line chart",...yg(g??[]),...Tn].join("; "),On=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>j==="value"?Zp(u):u),[e,j]),Nn=p.useMemo(()=>z?Jp(On):[],[z,On]),wt=Math.min(t[0],t[1]),kt=Math.max(t[0],t[1]),oi=j==="value"?(kt-wt)*Og:void 0;function nr(u){const y=On.map(b=>{const R=Qp(b,u,oi),I=b.format??s,O=b.axis==="primary"?he:fe,A=(b.type??"line")==="band";return R===null?{id:b.id,label:b.label,color:b.color,value:null}:{id:b.id,label:b.label,color:b.color,value:A&&R.y2!==void 0?`${I(R.y)} to ${I(R.y2)}`:I(R.y),currency:R.currency==="measured"?void 0:R.currency,modelled:R.currency==="modelled",y:A?void 0:O(R.y)}});if(qe)for(const b of Ve)b.kind!=="marker"&&y.push({id:`threshold-${b.id}`,label:b.kind,color:b.tone.label,value:b.label??s(b.value),detail:!0,currency:b.currency.held?b.currency.mark==="modelled"?"modelled":"held":void 0,modelled:b.currency.held&&b.currency.mark==="modelled"});return{heading:(S??r)(u,t),rows:y}}function or(u){const{heading:y,rows:b}=nr(u);return[y,...b.map(R=>`${R.label} ${R.value??"no sample"}${R.currency?`, ${R.currency}`:""}`)].join("; ")}const rr=e.filter(u=>(u.type??"line")!=="band").map(u=>({cx:u.data.x.map(ne),cy:u.data.y.map(u.axis==="primary"?he:fe)})),sr=ce?[...rr,Vp(ce)]:rr,ar=$e&&!w&&ae!==null&&ae.w>0&&ae.h>0&&!ce&&te<P-1;p.useLayoutEffect(()=>{ar&&J({w:_,h:B,form:te+1})},[ar,_,B,te]);const ri=u=>{let y=u,b=Number.POSITIVE_INFINITY;for(const R of Nn)R<wt||R>kt||Math.abs(R-u)<b&&(b=Math.abs(R-u),y=R);return y},Ke=z&&Z!==null&&Z.at>=wt&&Z.at<=kt?ri(Z.at):null,st=Ke===null?null:nr(Ke),$t=st!==null&&Ke!==null?Lp({x:ne(Ke),plot:{x0:X,y0:U,x1:re,y1:q},heading:st.heading,rows:st.rows,avoid:er,traces:sr}):void 0,si=ce!==void 0&&$t!==void 0&&$t.x0<ce.x1&&$t.x1>ce.x0&&$t.y0<ce.y1&&$t.y1>ce.y0;function ai(u){const y=u.currentTarget.getBoundingClientRect(),b=u.clientX-y.left;return b<X||b>re?null:t[0]+(b-X)/(re-X)*(t[1]-t[0])}function ii(u){const y=ai(u);if(y===null){de(b=>b?.source==="pointer"?null:b);return}de({at:y,source:"pointer"})}function li(u){const y=Nn.filter(O=>O>=wt&&O<=kt),b={ArrowLeft:u.shiftKey?-10:-1,ArrowRight:u.shiftKey?10:1,Home:-y.length,End:y.length};if(u.key==="Escape"){if(Z===null)return;u.preventDefault(),de(null),ke("");return}const R=b[u.key];if(R===void 0)return;u.preventDefault();const I=Ur(y,Ke,R);I!==null&&(de({at:I,source:"keys"}),ke(or(I)))}function ci(u){try{we(u.currentTarget.matches(":focus-visible"))}catch{we(!0)}if(Z!==null)return;const y=Ur(Nn.filter(b=>b>=wt&&b<=kt),null,0);y!==null&&(de({at:y,source:"keys"}),ke(or(y)))}function di(){we(!1),de(u=>u?.source==="keys"?null:u),ke("")}const ui=z?{tabIndex:0,onPointerMove:ii,onPointerLeave:()=>de(u=>u?.source==="pointer"?null:u),onKeyDown:li,onFocus:ci,onBlur:di}:{},Gt={scaleX:ne,scaleYPrimary:he,scaleYSecondary:fe,plotX0:X,plotX1:re,plotY0:U,plotY1:q,uid:K,labels:qe},hi=W&&g?eg(g,Gt):()=>!1,Fn=`plot-layer-clip-${K}`;if(me<=0||Ne<=0)return i.jsx("svg",{width:Math.max(0,le),height:Math.max(0,Y),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:i.jsx("title",{children:"Chart too small to render"})});const ir=i.jsxs("svg",{width:le,height:Y,role:bt.length>0||z?"group":"img","aria-label":ni,"aria-describedby":z?`${K}-crosshair-hint`:void 0,...ui,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...z?{touchAction:"pan-y",outline:et?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[g&&g.length>0&&i.jsx("defs",{children:i.jsx("clipPath",{id:Fn,children:i.jsx("rect",{x:X,y:U,width:me,height:Ne})})}),Tn.length>0&&i.jsx("title",{children:Tn.join("; ")}),i.jsx("rect",{x:X,y:U,width:me,height:Ne,fill:"var(--color-surface-panel)"}),g&&g.length>0&&i.jsx("g",{clipPath:`url(#${Fn})`,children:i.jsx(Kn,{layers:g,frame:Gt,pass:"background"})}),!w&&Xt.map((u,y)=>{const b=he(u);return i.jsxs(qt.Fragment,{children:[i.jsx("line",{x1:X,y1:b,x2:re,y2:b,stroke:"var(--color-border-subtle)",strokeWidth:1}),Za.has(y)&&i.jsx("text",{x:X-4,y:b,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,Xt)})]},`py-${y}`)}),!w&&Ut.map((u,y)=>Qa.has(y)?i.jsx("text",{x:re+4,y:fe(u),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,Ut)},`sy-${y}`):null),!h&&!w&&yt.map((u,y)=>i.jsx("line",{x1:ne(u),y1:U,x2:ne(u),y2:q,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${y}`)),!h&&!w&&Ka.map((u,y)=>i.jsx("text",{x:u.x,y:q+14,textAnchor:u.anchor,fill:"var(--color-text-faint)",fontSize:11,children:u.text},`xl-${y}`)),Yo&&i.jsx("text",{x:(X+re)/2,y:Y-Rn-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:eo(L,me)}),qo&&i.jsx("text",{x:Ze/2,y:(U+q)/2,transform:`rotate(-90 ${Ze/2} ${(U+q)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:eo(E,Ne)}),Vo&&i.jsx("text",{x:Jo,y:(U+q)/2,transform:`rotate(90 ${Jo} ${(U+q)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:eo(C,Ne)}),W&&Ng(X,re,U,q,m).filter(u=>!hi(u.x,u.y)).map(u=>i.jsx("circle",{cx:u.x,cy:u.y,r:1,fill:"var(--color-text-faint)",opacity:.35},u.key)),!w&&i.jsxs(i.Fragment,{children:[i.jsx("line",{x1:X,y1:U,x2:X,y2:q,stroke:"var(--color-border-strong)",strokeWidth:1}),i.jsx("line",{x1:X,y1:q,x2:re,y2:q,stroke:"var(--color-border-strong)",strokeWidth:1}),Me&&i.jsx("line",{x1:re,y1:U,x2:re,y2:q,stroke:"var(--color-border-strong)",strokeWidth:1})]}),Fe.filter(u=>u.kind==="band").map(u=>i.jsx("path",{d:u.d,fill:u.color,fillOpacity:u.opacity,stroke:"none"},u.id)),Fe.filter(u=>u.kind==="stroked").flatMap(u=>u.uncertainty.map((y,b)=>i.jsx("path",{d:y.d,"data-band-kind":y.kind,fill:u.color,fillOpacity:Vg,stroke:y.kind==="bound"?u.color:"none",strokeOpacity:y.kind==="bound"?Kg:void 0,strokeWidth:y.kind==="bound"?1:void 0},`${u.id}-band-${b}`))),Fe.filter(u=>u.kind==="stroked").flatMap(u=>u.segments.map((y,b)=>i.jsxs(qt.Fragment,{children:[Q&&y.basis===void 0&&ds(y.d,q)&&i.jsx("path",{d:ds(y.d,q)??void 0,fill:u.color,fillOpacity:.12,stroke:"none"}),i.jsx("path",{d:y.d,"data-stream-status":y.status,"data-reckoning-basis":y.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:y.basis!==void 0?fs:void 0,strokeDasharray:y.basis!==void 0?ps:u.dashed?"4 3":void 0})]},`${u.id}-${b}`))),Fe.filter(u=>u.kind==="stroked").flatMap(u=>u.modelled.map((y,b)=>i.jsx("path",{d:y.d,"data-reckoning-basis":y.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:fs,strokeDasharray:ps},`${u.id}-modelled-${b}`))),Fe.map(u=>u.kind==="stroked"&&u.tail!==null?i.jsx(La,{kind:"modelled",x:u.tail.cx,y:u.tail.cy},`${u.id}-tail`):null),Fe.filter(u=>u.kind==="stroked").flatMap(u=>u.observed.map((y,b)=>i.jsx("circle",{cx:y.cx,cy:y.cy,r:Sg,fill:u.color,"data-observed-sample":""},`${u.id}-observed-${b}`))),Fe.filter(u=>u.kind==="scatter").flatMap(u=>u.points.map((y,b)=>i.jsx("circle",{cx:y.cx,cy:y.cy,r:Bg,fill:u.color},`${u.id}-${b}`))),e.map(u=>{if(!u.headMark)return null;const y=u.axis==="primary"?he:fe;let b=u.data.x.length-1;for(;b>=0&&!(Number.isFinite(u.data.x[b])&&Number.isFinite(u.data.y[b]));)b-=1;return b<0?null:i.jsx("circle",{cx:ne(u.data.x[b]),cy:y(u.data.y[b]),r:Mg,fill:u.headMark==="dot"?u.color:"var(--color-surface-panel)",stroke:u.color,strokeWidth:u.headMark==="dot"?0:1.5,"data-head-mark":u.headMark},`${u.id}-head`)}),g&&g.length>0&&i.jsx("g",{clipPath:`url(#${Fn})`,children:i.jsx(Kn,{layers:g,frame:Gt,pass:"foreground"})}),Ve.map(u=>i.jsxs(qt.Fragment,{children:[i.jsx("line",{x1:X,y1:u.y,x2:Q&&u.kind==="marker"?X+24:re,y2:u.y,stroke:u.tone.line,strokeWidth:1,strokeDasharray:u.dashed?"4 3":void 0,"data-threshold-kind":u.kind,"data-threshold-passed":u.passed||void 0}),Q&&u.kind==="marker"&&u.label&&i.jsx("text",{x:X+28,y:u.y+3.5,fill:u.tone.label,fontSize:10,children:u.label}),!(Q&&u.kind==="marker")&&u.label&&rt.get(u.id)&&i.jsxs("text",{x:rt.get(u.id)?.x,y:rt.get(u.id)?.y,textAnchor:rt.get(u.id)?.anchor,fill:u.tone.label,fontSize:10,children:[u.label,u.currency.held&&i.jsx(io,{size:10,kind:u.currency.mark??"held"})]})]},u.id)),bt.map(u=>i.jsx(e0,{x:u.x,y:u.y,size:He,color:u.color,text:u.text},u.key)),T!=="none"&&e.map((u,y)=>{const b=Re?Cn.positions[y]:void 0,R=b?Y-Rn+2+b.row*je:Ja+y*je;if(!Re&&R+13>q)return null;const I=b?rn+b.x:ee?ee.x0:X+3,O=Re?le-2*rn:ee?ee.x1-ee.x0:me-6,A=At(u.label,O),D=Math.max(1,Math.floor((A-8)/6)),G=u.label.length>D?`${u.label.slice(0,Math.max(1,D-1))}...`:u.label;return i.jsxs(qt.Fragment,{children:[i.jsx("rect",{x:I,y:R,width:A,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),i.jsx("text",{x:I+3,y:R+10,fill:u.color,fontSize:10,children:G})]},u.id)}),g&&g.length>0&&qe&&i.jsx(Kn,{layers:g,frame:Gt,pass:"caption"}),st!==null&&Ke!==null&&i.jsx(Tp,{x:ne(Ke),plot:{x0:X,y0:U,x1:re,y1:q},heading:st.heading,rows:st.rows,avoid:er,traces:sr})]}),lr=$e?i.jsx("div",{ref:Ce,"data-plot-card":"",style:{position:"absolute",left:ce?.x0??0,top:ce?.y0??0,visibility:ce&&!si?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof M=="function"?M({width:me-cs*2,height:Ne-cs*2,form:te}):M}):null;return z?i.jsxs(i.Fragment,{children:[ir,lr,i.jsx(We,{id:`${K}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),i.jsx(We,{role:"status","aria-live":"polite",children:Ue})]}):i.jsxs(i.Fragment,{children:[ir,lr]})}function gs(e,t,n,o=[]){if(t)return t;if(e.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let r=[...e.flatMap(Qg),...o];return n==="log"&&(r=r.filter(s=>s>0)),r.length===0?n==="log"?[1,10]:[0,1]:[Math.min(...r),Math.max(...r)]}function tm(e,t){if(e===0)return"0";const n=Math.abs(e);if(n>=1e6){const o=t?Qn(t,1e6,1):1;return`${(e/1e6).toFixed(o)}M`}if(n>=1e3){const o=t?Qn(t,1e3,1):1;return`${(e/1e3).toFixed(o)}k`}if(Number.isInteger(e))return String(e);if(n<.01){const o=Math.floor(Math.log10(n)),r=e/10**o;return Math.abs(r-1)<1e-9?`1e${o}`:`${r.toFixed(1)}e${o}`}return e.toFixed(t?Qn(t,1,2):2)}const nm=p.createContext(null);function om(e,t){const n=p.useContext(nm),o=n?.setFooter,r=n?.setDirty;p.useEffect(()=>(o?.(e),()=>o?.(null)),[o,e]),p.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function Zx(e){const{onSave:t,value:n,saved:o,saveLabel:r="Save",extra:s,disabled:a}=e,l=p.useRef(null);l.current===null&&(l.current={v:n});const c=!ut(n,l.current.v)&&!ut(n,o),d=p.useRef(t);d.current=t;const h=p.useMemo(()=>i.jsxs(i.Fragment,{children:[s,i.jsx(al,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:a,children:r})]}),[s,a,r]);om(h,c)}export{We as $,cx as A,dn as B,Jm as C,qm as D,ym as E,vl as F,Im as G,yx as H,xl as I,Lm as J,ox as K,Wm as L,tx as M,Qm as N,nx as O,Bx as P,Zm as Q,fx as R,px as S,Um as T,Ea as U,Mm as V,Xm as W,lu as X,rx as Y,bm as Z,Sm as _,ux as a,Ax as a$,ut as a0,vm as a1,K0 as a2,Ht as a3,om as a4,Zx as a5,Vx as a6,_n as a7,Bi as a8,nm as a9,Tl as aA,Nm as aB,io as aC,_x as aD,Mx as aE,Sx as aF,Fm as aG,Hm as aH,Dx as aI,Tp as aJ,oe as aK,Ps as aL,La as aM,mx as aN,gx as aO,ta as aP,Ah as aQ,wx as aR,zm as aS,jx as aT,be as aU,c0 as aV,Ku as aW,Mr as aX,Po as aY,ra as aZ,qs as a_,ya as aa,yr as ab,bn as ac,Pe as ad,ro as ae,Je as af,Ls as ag,ec as ah,hx as ai,Pm as aj,ix as ak,Pu as al,hh as am,Mt as an,Vm as ao,ih as ap,Mo as aq,Cx as ar,Rx as as,Hx as at,Nx as au,Vh as av,Wx as aw,kx as ax,$x as ay,Om as az,dx as b,Vs as b0,Io as b1,sa as b2,Fu as b3,$l as b4,Em as b5,$o as b6,jm as b7,kl as b8,Xx as b9,Yx as bA,Rm as bB,Ix as bC,Gu as bD,wu as bE,Ji as bF,sl as bG,yn as bH,Ex as bI,Px as bJ,gl as bK,$r as bL,ia as bM,ko as bN,Lx as bO,zr as ba,u0 as bb,Gx as bc,Fx as bd,Wp as be,Cm as bf,Lp as bg,Ux as bh,Mn as bi,Up as bj,Tx as bk,Ks as bl,Ts as bm,El as bn,Bu as bo,Lo as bp,zx as bq,Ox as br,va as bs,xf as bt,zt as bu,eh as bv,_o as bw,Am as bx,Kx as by,qx as bz,Bm as c,Dm as d,al as e,ax as f,lx as g,sx as h,iu as i,wm as j,Km as k,$m as l,yl as m,km as n,Sh as o,_m as p,Oh as q,bx as r,vx as s,Gm as t,Ym as u,xx as v,ex as w,Tm as x,bl as y,cu as z};
