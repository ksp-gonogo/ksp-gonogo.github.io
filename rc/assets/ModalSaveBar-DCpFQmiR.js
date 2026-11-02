import{j as a}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import k,{css as H,createGlobalStyle as hi}from"./ext-styled-components-DAuodqsN.js";import{r as p,R as Gt}from"./ext-react-C0MU9AHG.js";import{h as ps,l as fi}from"./logger-2_QM1wvD.js";import{cF as Rt,cK as sn,b6 as gs,l as pi,aZ as He,ch as gt,aM as Yt,cl as ms}from"./view-clock-formula-Bqut2-Ss.js";import"./ksp-enum-names-2ULu9sLh.js";import{G as po,z as gi}from"./screen-DAA0NLD5.js";import{m as to,l as xs,T as se,d as ye,x as mt,a1 as go,N as an,w as Le,a2 as mo,a3 as mi,a4 as xi,a5 as vi,a6 as vs,a7 as yi,G as cr,a8 as bi,a9 as wi,aa as ki,ab as $i,ac as _i,ad as Mi,n as ji,Q as xo,Z as ut,ae as Si,af as Ei,J as Ai,j as ys,_ as Ci,k as Ot,K as bs,ag as Pi,S as ws,ah as ks,U as dr,A as qt,f as ur,ai as hr,s as zn,aj as Ri,ak as Ii}from"./contributionsRead-HAAyigVO.js";import{I as Li}from"./index-BfmuPVbS.js";import"./lagrange-CNmqHlRx.js";import{R as Ti}from"./use-transmissions-T7g05UTu.js";import{gridToPixels as Oi}from"./ext-ui-kit-grid-CYQFMmYG.js";import{r as Ni}from"./ext-react-dom-DCF8ZnaJ.js";const dm={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function um({children:e,layout:t="inline",...n}){return a.jsx(zi,{$layout:t,...n,children:e})}const Fi={inline:H``,fill:H`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},zi=k.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>Fi[e]}
`,Qe=H`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,vn=H`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,Di="data-restoring-focus",Hi=120,Bi=48,Wi=120,fr=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function zt(e){return $s(e,"below")}function $s(e,t){const[n,o]=p.useState(null),[r,s]=p.useState(!1),[i,l]=p.useState(!1),[c,d]=p.useState(!1),[h,f]=p.useState(!1),x=p.useRef(null),m=p.useRef(!1),g=p.useRef(!1),v=p.useRef(null),$=e!=null&&e!==""?e:null,S=n!==null&&(r||i||c||h),j=p.useCallback(()=>{v.current!==null&&clearTimeout(v.current),v.current=null},[]),L=p.useCallback(()=>{j(),o(null),s(!1),l(!1),d(!1),f(!1),m.current=!1},[j]);p.useEffect(()=>{if(!h)return;const M=()=>{const _=document.getSelection(),B=_!==null&&!_.isCollapsed&&x.current?.contains(_.anchorNode)===!0;!m.current&&!B&&f(!1)},R=()=>{m.current=!1,M()};return document.addEventListener("pointerup",R),document.addEventListener("selectionchange",M),()=>{document.removeEventListener("pointerup",R),document.removeEventListener("selectionchange",M)}},[h]);const E=p.useCallback(()=>{j(),v.current=setTimeout(()=>{v.current=null,s(!1),d(!1)},Wi)},[j]);if(p.useEffect(()=>j,[j]),p.useEffect(()=>{if(n!==null)return window.addEventListener("scroll",L,!0),window.addEventListener("resize",L),()=>{window.removeEventListener("scroll",L,!0),window.removeEventListener("resize",L)}},[n,L]),p.useEffect(()=>{if(!S)return;const M=R=>{R.key==="Escape"&&(R.stopPropagation(),L())};return document.addEventListener("keydown",M,!0),()=>document.removeEventListener("keydown",M,!0)},[S,L]),$===null)return{anchor:{},tip:null};const C=M=>{const R=M.getBoundingClientRect();o({top:R.bottom,left:R.left,above:t==="above"?R.top>=Bi:window.innerHeight-R.bottom<Hi,anchorTop:R.top})};return{anchor:{"data-tooltip":$,onPointerEnter:M=>{j(),C(M.currentTarget),s(!0)},onPointerLeave:E,onPointerDown:()=>{g.current=!0,L()},onPointerUp:()=>{g.current=!1},onFocus:M=>{g.current||document.documentElement.hasAttribute(Di)||(C(M.currentTarget),l(!0))},onBlur:()=>{l(!1),!r&&!c&&o(null)}},tip:S?Ni.createPortal(a.jsx(Xi,{ref:x,at:n,text:$,onPress:()=>{m.current=!0,f(!0)},onPointerEnter:()=>{j(),d(!0)},onPointerLeave:E}),document.body):null}}const Xi=p.forwardRef(function({at:t,text:n,onPress:o,onPointerEnter:r,onPointerLeave:s},i){const l=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return a.jsx(Gi,{ref:i,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),o()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...l,left:t.left,"--tip-left":`${t.left}px`},children:n})});function st(e,t){return(...n)=>{typeof e=="function"&&e(...n),t?.(...n)}}function Pe({text:e,children:t,focusable:n=!1,announce:o=!0,placement:r="below"}){const{anchor:s,tip:i}=$s(e,r);if(e==null||e==="")return t;const l=t.props,c=l["aria-label"],d=!o||typeof c=="string"&&fr(c).includes(fr(e));return a.jsxs(a.Fragment,{children:[p.cloneElement(t,{"data-tooltip":e,onPointerEnter:st(l.onPointerEnter,s.onPointerEnter),onPointerLeave:st(l.onPointerLeave,s.onPointerLeave),onPointerDown:st(l.onPointerDown,s.onPointerDown),onPointerUp:st(l.onPointerUp,s.onPointerUp),onFocus:st(l.onFocus,s.onFocus),onBlur:st(l.onBlur,s.onBlur),"aria-description":d?l["aria-description"]:e,tabIndex:n?l.tabIndex??0:l.tabIndex}),i,n&&a.jsx(Ui,{})]})}const Ui=hi`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Gi=k.div`
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
`;function _s(e){let t="";return p.Children.forEach(e,n=>{if(typeof n=="string"||typeof n=="number"){t+=String(n);return}p.isValidElement(n)&&(t+=_s(n.props.children))}),t.replace(/\s+/g," ").trim()}function Ms({label:e,children:t,disabledReason:n}){return Yi({label:e,children:t,disabledReason:n})}function Yi({label:e,children:t,disabledReason:n}){const o=e!==void 0&&e!==""&&e!==_s(t)?e:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function js(e,t){return e===!0&&t!==void 0&&t!==""}function Ss(e){e.preventDefault(),e.stopPropagation()}function Es(e,t,n){return t===null||e.props["data-tooltip"]!==void 0?e:a.jsx(Pe,{text:t,announce:n,children:e})}const vo="max(0.075em, 1.25px)",oe={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},Be=k.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,no=oe.held.domSize,oo=oe.modelled.domSize,qi=H`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${no} + 0.14em);
  }
`,Vi=H`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${oo} + 0.14em);
  }
`;function Ki(e){return H`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${oe[e].hollowDomSize} + 0.14em);
    }
  `}function As(e,t=!1){return t?Ki(e):e==="current"?null:e==="modelled"?Vi:qi}const Zi=k.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${no};
  height: ${no};
  background: ${oe.held.color};
`,Qi=k.span`
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
`,Ji=k.span`
  ${yo("current")}
  border: ${vo} solid ${oe.current.color};
  border-radius: var(--radius-circle);
`,el=k.span`
  ${yo("held")}
  border: ${vo} solid ${oe.held.color};
`,tl=k.span`
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
`,nl={current:Ji,held:el,modelled:tl};function Cs({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?nl[e]:e==="modelled"?Qi:Zi;return a.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const ol=k.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>As(e??"held",t)}
`;function bo({caption:e,kind:t="held",elsewhere:n=!1,children:o,...r}){const{anchor:s,tip:i}=zt(e);return a.jsxs(ol,{$kind:t,$elsewhere:n,...r,...s,children:[o,a.jsx(Cs,{kind:t,elsewhere:n}),e!==null&&a.jsxs(Be,{"data-unit-currency":"",children:[", ",e]}),i]})}const rl=p.forwardRef(function({variant:t="default",tone:n,size:o="md",pressed:r,predictedOutcome:s,disabledReason:i,marked:l,type:c="button",...d},h){const f=js(d.disabled,i),x=Ms({label:d["aria-label"],children:d.children,disabledReason:f?i:void 0}),{disabled:m,onClick:g,children:v,...$}=d;return Es(a.jsx(fl,{ref:h,$variant:t,$tone:n??(t==="primary"?"go":"neutral"),$size:o,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,"data-held-button":l?"":void 0,...$,disabled:f?void 0:m,...f?{"aria-disabled":!0}:{},onClick:f?Ss:g,type:c,children:l?a.jsx(sl,{kind:l.kind,caption:l.caption,children:v}):v}),x,f)}),sl=k(bo)`
  position: static;

  &::after {
    content: none;
  }

  & > [data-held-mark] {
    top: 3px;
    right: 3px;
  }
`;function al(e){return e==="neutral"?"go":e}const wo=e=>H`
  background: ${to[e]};
  border-color: ${to[e]};
  color: ${xs[e]};
`,il=e=>H`
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
  `},ll=H`
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
`,cl=H`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function dl(e,t){return e==="text"?ll:e==="primary"?wo(t):t==="neutral"?pr[e]:H`
    ${pr[e]}
    ${il(t)}
  `}const ul=H`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,hl={sm:H`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:H`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},fl=k.button`
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

  ${({$size:e})=>hl[e]}
  ${({$variant:e,$tone:t})=>dl(e,t)}
  ${({$pressed:e,$tone:t})=>e?wo(al(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":ul}
  ${Qe}
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

  ${({$variant:e})=>e==="text"?cl:""}
`,hm=k.button`
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
  ${Qe}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,pl=k.button`
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
    ${wo("go")}
  }
  ${Qe}
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
`,gl=p.forwardRef(function({pressed:t,disabledReason:n,...o},r){const s=js(o.disabled,n),i=Ms({label:o["aria-label"],children:o.children,disabledReason:s?n:void 0}),{disabled:l,onClick:c,...d}=o;return Es(a.jsx(pl,{ref:r,"aria-pressed":t,...d,disabled:s?void 0:l,...s?{"aria-disabled":!0}:{},onClick:s?Ss:c}),i,s)}),fm=k.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,ml=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,pm=k.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,xl=k.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,gm=k.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,mm=k.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,ko=H`
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

  ${Qe}

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
`,vl=k.input`
  ${ko}
  width: 100%;
`,xm=k.select`
  ${ko}
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
`,vm=k.textarea`
  ${ko}
  width: 100%;
  resize: vertical;
`;function yl(e){if(e===void 0)return null;const{value:t}=go(e.magnitude,e.unit);return t===an?null:t}function Ps(e,t){const n=yl(t);return n===null?e:`${e}, as of ${n}`}const $o="modelled to SCET";function Rs(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function gr(e){return sn(e.value)||Rt(e.value)?{shown:e.value,held:!1,mark:null,isStatic:sn(e.value),isDeterministic:Rt(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:Ps(mt(e.grade),e.asOfUt)}}function yn(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:sn(e),isDeterministic:Rt(e),caption:null,band:null};const n=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!Rt(e.value)){const o=e.reckoning.modelled;if(e.state==="held"){const s=gr(e),i=e.value===void 0,l=s.held||i,c=s.caption??(i?"":null);return{...s,shown:o,held:l,mark:l?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:n}}const r=e.reckoning.beyondReceived;return{shown:o,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?$o:null,band:n}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:sn(e.value),isDeterministic:Rt(e.value),caption:null,band:n}:e.state==="held"?{...gr(e),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Is(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function bl(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:$o}:null;if(e.state==="held"){const n=Ps(mt(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function ym(e){return e===void 0?null:typeof e!="string"?bl(e):{kind:"held",caption:mt(e)}}function _o(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function bm(e,t){const n=_o(t);return n===void 0?e:{state:"held",value:e,grade:n,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}function Mo(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function wl(e={}){return Mo(t=>Le(t,e))}const kl=.01;function wm({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const r=Math.abs(t(n)-t(o));return(e?Math.min(r,1-r):r)<=kl}}}function ro(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(r=>!n.readsAsOne(e,r))}/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=e=>{const t=_l(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},jl=p.createContext({}),Sl=()=>p.useContext(jl),El=p.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:o,className:r="",children:s,iconNode:i,...l},c)=>{const{size:d=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:x="currentColor",className:m=""}=Sl()??{},g=o??f?Number(n??h)*24/Number(t??d):n??h;return p.createElement("svg",{ref:c,...Dn,width:t??d??Dn.width,height:t??d??Dn.height,stroke:e??x,strokeWidth:g,className:Ls("lucide",m,r),...!s&&!Ml(l)&&{"aria-hidden":"true"},...l},[...i.map(([v,$])=>p.createElement(v,$)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=(e,t)=>{const n=p.forwardRef(({className:o,...r},s)=>p.createElement(El,{ref:s,iconNode:t,className:Ls(`lucide-${$l(mr(e))}`,`lucide-${e}`,o),...r}));return n.displayName=mr(e),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Cl=N("arrow-down",Al);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Rl=N("arrow-left",Pl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ll=N("arrow-right",Il);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Ol=N("arrow-up-to-line",Tl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Fl=N("arrow-up",Nl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Dl=N("bell",zl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Bl=N("check",Hl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Xl=N("chevron-down",Wl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Gl=N("chevron-left",Ul);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ql=N("chevron-right",Yl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Kl=N("chevron-up",Vl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],Ql=N("columns-2",Zl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],ec=N("computer",Jl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],nc=N("corner-down-left",tc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],rc=N("database",oc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ac=N("file-text",sc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],lc=N("grip",ic);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],dc=N("heart",cc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],hc=N("history",uc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],pc=N("house",fc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],mc=N("info",gc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],vc=N("joystick",xc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],bc=N("layers",yc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],kc=N("lightbulb-off",wc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],_c=N("lightbulb",$c);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],jc=N("lock",Mc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Ec=N("maximize",Sc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Cc=N("menu",Ac);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],Rc=N("microscope",Pc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],Lc=N("minimize",Ic);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Oc=N("pause",Tc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Fc=N("pencil",Nc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Dc=N("play",zc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Bc=N("plus",Hc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Xc=N("radio",Wc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Gc=N("rectangle-horizontal",Uc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],qc=N("rectangle-vertical",Yc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Kc=N("rotate-ccw",Vc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],Qc=N("rotate-cw",Zc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],ed=N("rows-2",Jc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],nd=N("satellite",td);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],rd=N("settings",od);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],ad=N("square",sd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ld=N("star",id);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],dd=N("undo-2",cd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],hd=N("volume-2",ud);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],pd=N("volume-x",fd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],md=N("wrench",gd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],vd=N("x",xd),yd="var(--icon-size-control)",bd={strokeWidth:1.8,"aria-hidden":!0};function F(e,t){const n=p.forwardRef(({label:o,size:r=yd,style:s,...i},l)=>{const c=typeof r=="number"?{size:r,style:s}:{style:{width:r,height:r,...s}},d=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return a.jsx(e,{...bd,...t,...d,...i,...c,ref:l})});return n.displayName=e.displayName??e.name,n}const km=F(lc),$m=F(vc),_m=F(hc),Mm=F(pc),jm=F(mc),Sm=F(jc),Em=F(Xc),Am=F(hd),Cm=F(pd),Pm=F(Dl),Rm=F(bc),Im=F(rd),Lm=F(nd),Tm=F(Ec),Om=F(Lc),Nm=F(rc),Fm=F(ec),zm=F(ac),Dm=F(Bc,{strokeWidth:2.4}),wd=F(vd),Hm=F(Fc),Bm=F(Bl),kd=F(ld),Wm=F(dc),Xm=F(Cc),$d=F(Rc),Um=F(Dc),Gm=F(Oc),Ym=F(ad),qm=F(Kl),Vm=F(Xl),Km=F(Gl),Zm=F(ql),Qm=F(Rl),Jm=F(Fl),ex=F(Ll),tx=F(Cl),nx=F(Ol),ox=F(dd),rx=F(Qc),sx=F(Kc),ax=F(Ql),ix=F(Gc),lx=F(ed),cx=F(qc),dx=F(nc),_d=N("space-helmet",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M10.5 8h3a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 1 0-7z",key:"visor"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),Md=N("space-helmet-visor-up",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M8 7.5C9.5 5 14.5 5 16 7.5",key:"visor"}],["circle",{cx:"12",cy:"12.5",r:"2",fill:"currentColor",key:"face"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),ux=F(_d),hx=F(Md),fx=F(md),px=F(_c),gx=F(kc),jd={},Sd={byKey:new Map,unaddressed:void 0,separate:!1};function xr(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Ed(e,t){if(e.separate!==t.separate||!xr(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!xr(o,t.byKey.get(n)))return!1;return!0}function Ad(e,t,n,o){const r=new Map;e!==void 0&&r.set(mo(e),n);for(const[s,i]of Object.entries(t??{}))i!==void 0&&r.set(vi(s),i);return{byKey:r,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function Cd(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Pd(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function Rd(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,i)=>s.depth-i.depth);let r=!1;for(const s of o)s.resettle(n)&&(r=!0);if(r)for(const s of t)s()}}}function Id(e){const t=new Map,n=new Map,o=new Set,r=e?.root??Rd();let s=Sd;const i=c=>{let d;for(const h of c){const f=h.position;f!==void 0&&(d===void 0||f.base>d.base)&&(d=f)}return d?.rung},l={root:r,depth:e===void 0?0:e.depth+1,hold(c,d,h){const f=t.get(c);if(h===void 0)f!==void 0&&(f.delete(d),f.size===0&&t.delete(c));else{if(Pd(f?.get(d),h))return;f===void 0?t.set(c,new Map([[d,h]])):f.set(d,h)}e===void 0?r.sweep(c):e.hold(c,d,h)},settled:c=>n.get(c),readsAsOneFigure:c=>o.has(c),setPolicy(c){if(!Ed(s,c)){s=c;for(const d of t.keys())r.sweep(d)}},resettle(c){const d=[...t.get(c)?.values()??[]],h=e?.settled(c),f=s.byKey.get(c)??s.unaddressed??jd,x=f.format??h?.format??i(d),m=f.as??h?.as,g=f.decimals??(s.separate?yi(d,{format:x,as:m}):h?.decimals),v=x===void 0&&m===void 0&&g===void 0?void 0:{...x!==void 0&&{format:x},...m!==void 0&&{as:m},...g!==void 0&&{decimals:g}},$=s.separate&&vs(d,{format:x,as:m,decimals:g}),S=$!==o.has(c);return $?o.add(c):o.delete(c),Cd(n.get(c),v)?S:(v===void 0?n.delete(c):n.set(c,v),!0)},attach(){r.family.add(l);for(const c of t.keys())r.sweep(c)},detach(){r.family.delete(l)}};return r.family.add(l),l}const jo={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},Nt=p.createContext(jo);function Ld(){return p.useContext(Nt)!==jo}function mx({children:e,of:t,pins:n,format:o,as:r,decimals:s,separate:i=!1}){const l=p.useContext(Nt),[c]=p.useState(()=>Id(l===jo?void 0:l));return p.useLayoutEffect(()=>(c.attach(),()=>c.detach()),[c]),p.useLayoutEffect(()=>{c.setPolicy(Ad(t,n,{format:o,as:r,decimals:s},i))},[c,t,n,o,r,s,i]),a.jsx(Nt.Provider,{value:c,children:e})}function Td(e,t={}){const n=p.useContext(Nt),o=p.useId(),r=gs(e),s=e?.unit,l=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||r===null?void 0:mo(s),c=l===void 0||r===null||s===void 0||mi(s)===void 0?void 0:xi(r,s),d=c?.base,h=c?.rung;return p.useLayoutEffect(()=>{if(!(l===void 0||r===null||s===void 0))return n.hold(l,o,{reading:r,unit:s,...d!==void 0&&h!==void 0&&{position:{base:d,rung:h}}}),()=>n.hold(l,o,void 0)},[n,o,l,r,s,d,h]),p.useSyncExternalStore(n.root.subscribe,()=>l===void 0?void 0:n.settled(l),()=>{})}function xx(e,t={}){const n=p.useContext(Nt),r=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||gs(e)===null||e===null||e===void 0?void 0:mo(e.unit);return p.useSyncExternalStore(n.root.subscribe,()=>r===void 0?!1:n.readsAsOneFigure(r),()=>!1)}const Od=_i,Nd={sci:$d,rep:kd},Ts=k.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,Fd=k.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?H`
          position: relative;
          ${As(e,t)}
        `:""}
`,zd=k.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,Dd=k(Be)`
  user-select: none;
`,Os=k(Be)`
  user-select: none;
`,Hd=" ";function Bd(e,t,n,o){if(t===void 0)return null;const r=x=>go(x.magnitude,x.unit,{...n,format:o}).value,s=(x,m)=>r(m.minus(x)),i=vs([t.lo,t.hi],{...n,format:o});if(!ro(e,[t.lo,t.hi],Mo(r)))return null;const l=s(t.lo,t.value),c=s(t.value,t.hi),d=x=>/^[-+\u2212]?[0.,\s]*$/.test(x);if(!i&&d(l)&&d(c))return null;const h=r(t.value)===r(e),f={...n,format:o};return{oneFigure:i,plusMinus:!i&&h&&l===c?c:null,lo:r(t.lo),hi:r(t.hi),loSaid:cr(t.lo,f),hiSaid:cr(t.hi,f),kind:t.kind}}function Wd(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function Hn({token:e,className:t,spaced:n}){const o=bi(e,wi(e));if(o==="")return null;const r=ki(o),s=$i(o),i=Nd[s?.head??o],l=Od.has(o),c=r!==void 0;return a.jsxs(a.Fragment,{children:[n&&!l?Hd:null,a.jsx(Pe,{text:r,announce:!1,children:a.jsxs(Ts,{$attached:l,$icon:i!==void 0,className:t,"data-unit":e,children:[i?a.jsxs(a.Fragment,{children:[a.jsx(i,{size:"1em"}),s&&a.jsxs("span",{"aria-hidden":"true",children:["/",s.rest]})]}):c?a.jsx("span",{"aria-hidden":"true",children:o}):o,c&&a.jsxs(Os,{"data-unit-word":"",children:[" ",r]})]})})]})}function ln({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:r,marked:s,elsewhere:i,...l}){const c=yn(e,{drawsReckoning:r}),d=s!=null&&!c.held&&c.shown!=null?{...c,held:!0,mark:s.kind,caption:s.caption}:c,{shown:h,held:f,mark:x,band:m}=d,g=i!=null&&i!==""&&h!=null,v=x??(g?"current":null),$=g?[d.caption,i].filter(Boolean).join("; "):d.caption,S=Td(h,l),j=Ld(),L=o===!0&&j,E=S===void 0?l:{...S,...l},C=go(h?.magnitude,h?.unit,E),M=h==null||m===null||!f?null:Bd(h,pi(m,h.unit),E,C.rung),{anchor:R,tip:_}=zt(Wd($,M));return e!==void 0||t===void 0?a.jsxs(Fd,{className:n,$mark:v,$elsewhere:g,...Is(d),...R,children:[C.value,!L&&a.jsx(Hn,{token:C.symbol,spaced:!0}),M!==null&&a.jsxs(zd,{"data-unit-band":"",children:[M.oneFigure?a.jsxs(a.Fragment,{children:[" (",a.jsx("span",{"aria-hidden":"true",children:"~"}),a.jsx(Os,{"data-unit-word":"",children:"approximately "}),M.lo]}):M.plusMinus===null?` (${M.lo} to ${M.hi}`:` ± ${M.plusMinus}`,!L&&a.jsx(Hn,{token:C.symbol,spaced:!0}),M.plusMinus===null?")":null]}),v!==null&&a.jsx(Cs,{kind:v,elsewhere:g}),$!==null&&a.jsxs(Dd,{"data-unit-currency":"",children:[", ",$]}),_]}):typeof t!="string"?a.jsx(Ts,{$attached:!1,$icon:!1,className:n,children:t}):a.jsx(Hn,{token:t,className:n,spaced:!1})}const Xd=k.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function Ns({observed:e,modelled:t,write:n}){if(t==null)return null;if(n===void 0){const o=t;return ro(e,o,wl())?a.jsx(vr,{children:a.jsx(ln,{value:o})}):null}return ro(e,t,Mo(n))?a.jsx(vr,{children:n(t)}):null}function vr({children:e}){return a.jsx(Xd,{"data-modelled-alongside":"",children:a.jsx(bo,{"data-held":"",kind:"modelled",caption:$o,children:e})})}function vx({value:e}){return a.jsxs(a.Fragment,{children:[a.jsx(ln,{value:e}),a.jsx(Ns,{observed:e.value,modelled:Rs(e)})]})}function So({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,r=v=>Mi(typeof v=="number"?v:v.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,i=Rs(s);if(s?.value!==void 0&&i!==void 0)return a.jsxs(a.Fragment,{children:[r(s.value),a.jsx(Ns,{observed:s.value,modelled:i,write:r})]});const l=yn(o,{drawsReckoning:!0}),{shown:c,held:d,mark:h,caption:f}=l,x=typeof e=="number"?e:c;if(x==null)return an;const m=r(x),g=Is({...l,shown:x});return d?a.jsx(bo,{...g,kind:h??"held",caption:f,children:m}):a.jsx("span",{"data-figure":g["data-figure"],children:m})}function bn(e){const t=p.useRef(null),[n,o]=p.useState(e),[r,s]=p.useState(null);return p.useEffect(()=>{t.current!==r&&s(t.current)}),p.useEffect(()=>{if(!r||typeof ResizeObserver>"u")return;const i=new ResizeObserver(l=>{for(const c of l)c.contentRect.width>0&&c.contentRect.height>0&&o({w:Math.floor(c.contentRect.width),h:Math.floor(c.contentRect.height)})});return i.observe(r),()=>i.disconnect()},[r]),{ref:t,size:n}}const Ud='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Fs(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),r=n[o+1]??n[o-1];if(r&&r!==e){r.focus();return}const s=t.closest("[data-panel-rail-frame]"),i=s?s.parentElement?.querySelector("[data-panel-body]"):t.closest("[data-panel-body]");if(!i)return;const l=[...i.querySelectorAll(Ud)].find(c=>c!==e);if(l){l.focus();return}i.hasAttribute("tabindex")||i.setAttribute("tabindex","-1"),i.focus()}function Eo(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const Ao={"in-transit":.18,"awaiting-reply":.5,due:.62,overdue:.82,lost:.95};function Gd(e){const t=e.reachEtaSeconds,n=Yd(e);if(t===null||n===null)return Ao[e.predictedPhase];const o=n-t;return Math.max(0,Math.min(1,o/(3*n)))}function Yd(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function qd(e){return e.map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:Gd(t),glyph:t.glyph??Eo(t.label||t.command),...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function yx({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||po(e)!=="shown"?"none":n||gi({oneWaySeconds:He("s",e)})==="live"?"badge":t?"strip":"none"}const Vd={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},so={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Kd(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Vd[e.phase]}const wn=new Set(["overdue","lost"]),Zd=180,Qd=96;function zs(e){return Le(He("s",Math.max(0,e)))}function Jd(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const eu=1;function Co(e){const t=Li(),n=p.useRef(t);n.current=t;const[o,r]=p.useState(e),s=p.useRef({eta:e,ut:Bn(t)});return p.useEffect(()=>{const i=s.current.eta;(i===null!=(e===null)||i!==null&&e!==null&&Math.abs(e-i)>=eu)&&(s.current={eta:e,ut:Bn(n.current)},r(e))},[e]),p.useEffect(()=>{const i=setInterval(()=>{const{eta:l,ut:c}=s.current;if(l===null)return;const d=Bn(n.current);if(d!==void 0){if(c===void 0){s.current={eta:l,ut:d};return}r(Math.max(0,l-(d-c)))}},1e3);return()=>clearInterval(i)},[]),o}function Bn(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function tu({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":r="In-flight commands",variant:s="inline",onDismiss:i}){const{ref:l,size:c}=bn({w:320,h:0});if(s==="rail")return e.length===0?null:a.jsx(su,{items:e,"aria-label":r});if(s==="expanded")return e.length===0?null:a.jsx(du,{items:e,"aria-label":r,onDismiss:i});const d=n!=="auto"?n:c.w>=Zd?"full":c.w>=Qd?"compact":"badge";return e.length===0?null:d==="badge"?a.jsx(au,{ref:l,items:e,mode:t,"aria-label":r}):a.jsx(Hs,{ref:l,role:"list","aria-label":r,"data-mode":t,"data-density":d,$row:o==="row",children:e.map(h=>a.jsx(iu,{item:h,$compact:d==="compact"},h.id))})}const Wn=100,yr=16,nu=-4,ou=9,ru=.22;function su({items:e,"aria-label":t}){const n=p.useId(),o=`${e.length} in flight`;return a.jsxs(lu,{role:"img","aria-label":`${t}: ${o}`,viewBox:`0 0 ${Wn} ${yr}`,preserveAspectRatio:"none",children:[a.jsx("defs",{children:e.map((r,s)=>{const i=wn.has(r.phase)?se.warn:"var(--color-accent-fg)",c=Math.max(0,Math.min(1,r.progress??Ao[r.phase]))*Wn;return a.jsxs("radialGradient",{id:`${n}-${s}`,gradientUnits:"userSpaceOnUse",cx:c,cy:nu,r:ou,children:[a.jsx("stop",{offset:"0",stopColor:i,stopOpacity:ru}),a.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0"})]},r.id)})}),e.map((r,s)=>a.jsx("rect",{"data-role":"glow","data-phase":r.phase,x:"0",y:"0",width:Wn,height:yr,fill:`url(#${n}-${s})`},r.id))]})}const au=function({ref:t,items:n,mode:o,"aria-label":r}){const s=Co(Jd(n)),i=n.some(c=>wn.has(c.phase)),l=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${zs(s)}`;return a.jsx(Pe,{text:n.map(c=>c.label).join(`
`),focusable:!0,children:a.jsx(Hs,{ref:t,role:"group","aria-label":`${r}: ${l}`,"data-mode":o,"data-density":"badge",$row:!1,children:a.jsxs(Bs,{$phase:i?"overdue":"in-transit",children:[a.jsx(Ws,{"aria-hidden":"true",$pulse:!i,children:"↑"}),a.jsxs(Xs,{children:[n.length,s!==null&&a.jsxs(a.Fragment,{children:[" · ",a.jsx(So,{value:Math.max(0,s)})]})]})]})})})};function iu({item:e,$compact:t}){const n=Co(e.etaSeconds),o=wn.has(e.phase),r=n===null?`${e.label}, ${so[e.phase]}`:`${e.label}, ${zs(n)}`;return a.jsxs(Bs,{$phase:e.phase,role:"listitem",...t?{"aria-label":r,title:r}:{},children:[a.jsx(Ws,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Kd(e)}),!t&&a.jsx(yu,{children:e.label}),a.jsx(Xs,{children:n===null?so[e.phase]:a.jsx(So,{value:Math.max(0,n)})})]})}const lu=k.svg`
  display: block;
  width: 100%;
  height: 16px;
`,Ds=54,It=5,Po=3,kn=Ds-8-It,ht=60,cu={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:se.warn,lost:se.warn};function du({items:e,"aria-label":t,onDismiss:n}){const{ref:o,size:r}=bn({w:320,h:Ds}),i=r.w>=ht?r.w:r.h,l=Math.max(1,Math.floor((i-6)/(kn+Po))),d=e.length>l?e.slice(0,l-1):e,h=e.length-d.length;return a.jsx(hu,{ref:o,"data-command-list":"",children:a.jsxs(fu,{role:"list","aria-label":t,children:[d.map(f=>a.jsx(uu,{item:f,onDismiss:n},f.id)),h>0&&a.jsxs(xu,{role:"listitem","aria-label":`${h} more in flight`,children:["+",h]})]})})}function uu({item:e,onDismiss:t}){const n=e.glyph??Eo(e.label),o=cu[e.phase],r=Math.max(0,Math.min(1,e.progress??Ao[e.phase])),s=wn.has(e.phase)&&!!t,i=`${e.label}, ${so[e.phase]}`;return a.jsxs(pu,{role:"listitem","aria-label":i,"data-phase":e.phase,style:{color:o},children:[a.jsx(Pe,{text:s?`Dismiss ${e.label}`:i,announce:!1,children:a.jsxs(gu,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:l=>{Fs(l.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[a.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&a.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),a.jsx(mu,{children:a.jsx("span",{className:"fill",style:{"--fill-ratio":r}})})]})}const hu=k.div.attrs({role:"group"})`
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
    ${kn}px + ${It}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
`,fu=k.div`
  display: flex;
  flex-direction: column;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${Po}px;
  width: 100%;
  height: 100%;

  @container (min-width: ${ht}px) {
    flex-direction: row;
  }
`,pu=k.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @container (min-width: ${ht}px) {
    flex-direction: column;
  }
`,gu=k.div`
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

  @container (min-width: ${ht}px) {
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
`,mu=k.div`
  --s: ${kn}px;
  position: relative;
  flex: 0 0 ${It}px;
  width: ${It}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${ht}px) {
    width: var(--s);
    height: ${It}px;
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
  @container (min-width: ${ht}px) {
    .fill {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: calc(var(--fill-ratio, 0) * 100%);
      height: auto;
    }
  }
`,xu=k.span`
  align-self: center;
  flex: 0 0 auto;
  padding: 0 ${Po}px;
  font-size: var(--font-size-compact);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-muted);
`,Hs=k.div`
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
`,vu={"in-transit":H`
    color: var(--color-text-primary);
  `,"awaiting-reply":H`
    color: var(--color-text-muted);
  `,due:H`
    color: var(--color-text-muted);
  `,overdue:H`
    color: ${ye.warn};
  `,lost:H`
    color: ${ye.warn};
  `},Bs=k.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>vu[e]}
`,Ws=k.span`
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
`,yu=k.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Xs=k.span`
  flex: 0 0 auto;
`,bu="Awaiting first signal";function bx({expectedIn:e}){const t=e??0,n=Number.isFinite(t)&&t>0;return a.jsxs(a.Fragment,{children:[bu,n&&ps()&&a.jsx(wu,{total:t})]})}function wu({total:e}){return a.jsx(ku,{seconds:Co(e)??0})}function ku({seconds:e}){return e>0?a.jsxs(a.Fragment,{children:[" ",a.jsx(ji,{level:"muted",children:a.jsx(So,{value:Math.ceil(e)})})]}):null}const Ro=e=>H`
  --fit-box: ${e};
`,$u=e=>H`
  --fit-mask: ${e};
`;function Us(e){return e==="go"||e==="info"?"caution":e}function cn({tone:e,size:t="md",live:n=!1,report:o,held:r,children:s,...i}){const l=_o(r),c=l===void 0?e:Us(e),d=c===void 0||c==="neutral"?void 0:c,h=o?.label??(typeof s=="string"?s:"");xo(o?{id:o.id,severity:d??"go",label:h}:null);const f=n?{role:"status","aria-live":"polite"}:{},x=l===void 0?null:mt(l),m=Reflect.get(i,"data-tooltip")!==void 0,{anchor:g,tip:v}=zt(m?null:x);return a.jsxs(a.Fragment,{children:[a.jsxs(Su,{$severity:d,$size:t,...f,...g,...i,children:[s,x!==null&&a.jsxs(a.Fragment,{children:[a.jsx(Eu,{"aria-hidden":"true","data-held-mark":""}),a.jsxs(Be,{"data-unit-currency":"",children:[", ",x]})]})]}),v]})}const _u=H`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,Mu={go:H`
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
  `},ju={sm:H`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:H`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},Su=k.span`
  display: inline-block;
  position: relative;
  /* Sized by its own text, never stretched to a taller flex sibling. */
  align-self: center;
  ${Ro("badge")}
  border: 1px solid;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;

  border-radius: var(--radius-pill);

  ${({$size:e})=>ju[e]}
  ${({$severity:e})=>e===void 0?_u:Mu[e]}
`,Eu=k.span`
  position: absolute;
  top: 0;
  right: 0;
  width: ${oe.held.domSize};
  height: ${oe.held.domSize};
  transform: translate(45%, -45%);
  background: ${oe.held.color};
  box-shadow: 0 0 0 1px var(--color-surface-panel);
  pointer-events: none;
`,Au={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},Cu={center:"center",start:"flex-start",baseline:"baseline"},Pu=p.forwardRef(function({justify:t="between",align:n="center",gap:o,wrap:r=!1,children:s,...i},l){return a.jsx(Ru,{ref:l,$justify:t,$align:n,$gap:o,$wrap:r,...i,children:s})}),Ru=k.div`
  display: flex;
  align-items: ${({$align:e})=>Cu[e]};
  justify-content: ${({$justify:e})=>Au[e]};
  gap: ${({$gap:e})=>e?ut[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function Io(e){const t=_o(e.held);return t===void 0?{label:e.label,tone:e.tone,title:e.title}:{label:e.label,tone:Us(e.tone),title:e.title??`${e.label}: ${mt(t)}`,held:t}}function Fe(e,t){return Le({magnitude:e,unit:t})}function Iu(e,t){const{limit:n,actual:o,unit:r}=t;if(n==null||o==null)return null;switch(e){case Yt.LimitReached:{const s=Lu(t.quantity),i=`${Fe(o,r)} of ${Fe(n,r)}`;return t.facilityName?`the ${t.facilityName} holds ${i} ${s}`:`it holds ${i} ${s}`}case Yt.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${Fe(o,r)} of ${Fe(n,r)}`;case Yt.InsufficientFunds:return`it costs ${Fe(Math.trunc(o),r)} and funds are ${Fe(Math.trunc(n),r)}`;case Yt.InsufficientScience:return`it costs ${Fe(o,r)} and science is ${Fe(n,r)}`;default:return null}}function Lu(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function br(e){return e&&ms(e)?.sentence||null}function Tu(e){const t=e?.trim().replace(/\.$/,"");return t||null}function Lo(e){return Gs(e,"refused")}function wx(e){return Gs(e,"unavailable")}function Gs(e,t){const n=gt(e),o=(e.breach?Iu(e.errorCode,e.breach):null)??Tu(e.detail)??br(e.reason)??br(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function Ys(e){const n=gt(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":Ou(Lo({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function Ou(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function qs(e){return`${gt(e)||e.command||"The command"}: no reply. May have run.`}function Nu(){const e=Ei();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const $n=Si(Nu),kx=$n.Context;function $x({children:e}){return a.jsx($n.Provider,{children:a.jsx(Fu,{children:e})})}function Fu({children:e}){const t=$n.useStore();return a.jsx(Ti.Provider,{value:t,children:e})}const To=$n.useStore,zu=()=>()=>{},Du=[],wr=()=>Du;function Hu(){const e=To();return p.useSyncExternalStore(e?e.subscribe:zu,e?e.getActiveHandles:wr,e?e.getActiveHandles:wr)}const At=new WeakMap,ao=new WeakMap;function kr(e){for(const t of ao.get(e)??[])t()}function Bu(e){return At.set(e,(At.get(e)??0)+1),kr(e),()=>{At.set(e,(At.get(e)??1)-1),kr(e)}}function _x(){const e=To();return p.useSyncExternalStore(t=>{if(!e)return()=>{};const n=ao.get(e)??new Set;return ao.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(At.get(e)??0)>0,()=>!1)}function _n({children:e,"aria-label":t,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:r=!1,as:s="span",className:i}){const c={role:n?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":t,className:i,"data-live-region":""};return n?a.jsx(Be,{as:s,...c,children:e}):p.createElement(s,c,e)}const Wu=.72,Xu=.76;function io({size:e,kind:t="held",figureSize:n}){return a.jsx("tspan",{dy:n===void 0?-e*.55:-(n*Wu-e*Xu),fontSize:e,fill:oe[t].color,"data-held-mark":"","data-reckoning-mark":t,children:oe[t].glyph})}function Mx({end:e,x1:t,y1:n,x2:o,y2:r}){return a.jsx("line",{"data-bound":e,x1:t,y1:n,x2:o,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function Vs(e,t){return t===null?e:`${e}, ${t}`}function Uu(e){return e===null?{}:{"data-currency-in-name":""}}function jx({x:e,y:t,size:n,children:o}){return a.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function $r(e,t){return t?.state!=="held"?e:{...t,value:e}}function dn(e){return e.kind==="continuous"?"ribbon":"dot"}function Gu(e){return e.delivery==="acked"}function Yu(e){return e.direction==="command"?"outbound":"inbound"}function Ks(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function Mn(e){return`${e.direction}/${e.kind}/${e.delivery}`}const qu={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function Oo(e){return qu[Mn(e)]??null}const _r=new Set;function Zs(e,t){const n=Mn(e);if(_r.has(n))return;_r.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;ps()?fi.error(o):console.error(o)}const Qs=16,Mr=Qs/2,Vu=5.5,Ku=2,Zu=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function Js(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function Qu(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/Ku)),Math.max(2,Math.round(o)))}function Ju(e,t,n){if(e.length===0)return"";const o=Js(e,t,n);if(!(o>0))return`M0.00,${Mr.toFixed(2)}`;const r=Qu(e,t,o),s=[];for(let i=0;i<=r;i++){const l=Math.min(i/r*o,o),c=Math.min(Math.round(l/n*t),e.length-1),d=Zu(e[e.length-1-c]),h=(i%2===0?-1:1)*d*Vu;s.push(`${l.toFixed(2)},${(Mr+h).toFixed(2)}`)}return`M${s.join(" L")}`}const ea=.05,eh=.02,un=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],jn=100,Ct=30,th=1.5,ve=2,nh=4,Ze=Ct-ve-nh,Ie=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(jn-n*2),Vt=e=>ve+(1-Math.max(0,Math.min(1,e)))*Ze,ta=e=>e==="inline"?th:0;function Sx(e="inline"){const t=ta(e);return(jn-t*2)/3}function na({tags:e,who:t}){return Zs(e,t),a.jsx("g",{"data-rail-unrepresented":Mn(e),"data-rail-entry":t})}function at(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function jr(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(c=>c.age>=t);if(n===-1)return[];const o=e[n-1],r=e[n],s=r.age-o.age||1,i=(t-o.age)/s,l=o.value+i*(r.value-o.value);return[{age:t,value:l},...e.slice(n)]}function Sr(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(d=>d.age>t),r=e.slice(0,o),s=e[o],i=r[r.length-1];if(!i)return[{age:t,value:s.value}];const l=s.age-i.age||1,c=(t-i.age)/l;return[...r,{age:t,value:i.value+c*(s.value-i.value)}]}const oh=.25;function Er(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>=o.age)return o.value;for(let r=1;r<e.length;r++){const s=e[r];if(t<=s.age){const i=e[r-1],l=(t-i.age)/(s.age-i.age||1);return i.value+l*(s.value-i.value)}}return o.value}function rh({stream:e,span:t,index:n,padX:o,oneT:r,twoT:s}){const l=`var(${un[n%un.length]})`,c=p.useId(),d=`cds-ramp-${c}-${n}`,h=`cds-fill-${c}-${n}`,f=`cds-tail-${c}-${n}`,x=Oo(e.tags);if(x!=="continuous-strip")return x===null?a.jsx(na,{tags:e.tags,who:e.id}):null;const m=Gu(e.tags),v=(m?e.inTransit:Sr(e.inTransit,r)).map(W=>({x:Ie(W.age,t,o),y:Vt(W.value)}));if(v.length===0)return null;const S=(m?[]:Sr(jr(e.inTransit,r),r*(1+oh))).map(W=>({x:Ie(W.age,t,o),y:Vt(W.value)})),j=S.length>1&&S[S.length-1].x>S[0].x,L=`${at(v)} L${v[v.length-1].x.toFixed(2)},${(ve+Ze).toFixed(2)} L${v[0].x.toFixed(2)},${(ve+Ze).toFixed(2)} Z`,E=m?jr(e.echo,s):[],C=E.map(W=>({x:Ie(W.age,t,o),y:Vt(W.value)})),M=E.map(W=>({x:Ie(W.age,t,o),y:Vt(Er(e.inTransit,W.age)??W.value)})),R=E.findIndex(W=>{const w=Er(e.inTransit,W.age);return w!==null&&Math.abs(W.value-w)>eh}),_=R!==-1,B=_?C.slice(0,R+1):C,K=_?C.slice(R):[],Q=_?M.slice(R):[],T=!_||R>0;return a.jsxs("g",{"data-stream-group":e.id,"data-return-leg":m,children:[a.jsxs("defs",{children:[a.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"1",y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.10"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0.40"})]}),a.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.22"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]}),j&&a.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:S[0].x,y1:"0",x2:S[S.length-1].x,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.40"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]})]}),a.jsx("path",{"data-role":"area",d:L,fill:`url(#${h})`,stroke:"none"}),a.jsx("path",{"data-role":"commanded","data-stream":e.id,d:at(v),fill:"none",stroke:`url(#${d})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),j&&a.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:at(S),fill:"none",stroke:`url(#${f})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),B.length>0&&T&&a.jsx("path",{"data-role":"echo","data-stream":e.id,d:at(B),fill:"none",stroke:l,strokeWidth:"0.8",strokeLinecap:"round"}),_&&a.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:at(K),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),_&&a.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:at(Q),fill:"none",stroke:l,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]})}function sh({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${p.useId()}`,o=e.tags,r=Oo(o);if(r!=="continuous-strip")return r===null?a.jsx(na,{tags:o,who:e.id}):null;const s=(jn-t*2)/3,i=e.amplitudes,l=e.spanSamples??i.length,c=Ju(i,l,s);if(c==="")return null;const d=Math.max(Js(i,l,s),1),h=`var(${Ks(o)})`,f=Yu(o)==="outbound";return a.jsxs("g",{"data-ribbon-group":e.id,transform:`translate(${t} ${ve}) scale(1 ${Ze/Qs})`,children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:f?0:d,y1:"0",x2:f?d:0,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:h,stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:h,stopOpacity:"0.1"})]})}),a.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:c,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function ah({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:r}){const s=`cds-divfade-${p.useId()}`,i=r?.state==="held",l=i?yn(r??null).caption:null,{anchor:c,tip:d}=zt(l),h=[...e,...t].find(E=>E.oneWaySeconds!==null),f=h?.oneWaySeconds??null;if(!h||f===null||po(f)!=="shown")return null;const x=f>=ea;if(!x&&t.length===0)return null;const m=3*f,g=f,v=2*f,$=ta(o),S=Ie(g,m,$),j=Ie(v,m,$),L=e.every(E=>E.inTransit.length===0&&E.echo.length===0)&&t.every(E=>E.amplitudes.length===0);return a.jsxs(ih,{"data-oneway":f,"data-variant":o,$variant:o,...c,children:[a.jsxs(lh,{$variant:o,$quiet:L,role:"img","aria-label":Vs(n,l),...Uu(l),viewBox:`0 0 ${jn} ${Ct}`,preserveAspectRatio:"none",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:ve,x2:"0",y2:ve+Ze,children:[a.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(x?e:[]).map((E,C)=>a.jsx(rh,{stream:E,span:m,index:C,padX:$,oneT:g,twoT:v},E.id)),t.map(E=>a.jsx(sh,{ribbon:E,padX:$},E.id)),a.jsx("line",{"data-divider":"t",x1:S,x2:S,y1:ve,y2:ve+Ze,stroke:`url(#${s})`,strokeWidth:"0.4"}),a.jsx("line",{"data-divider":"2t",x1:j,x2:j,y1:ve,y2:ve+Ze,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&a.jsxs("g",{"data-role":"hover-labels",children:[a.jsxs("text",{x:S,y:ve-.4,textAnchor:"middle",fontSize:"2",children:[Le(He("s",f),{decimals:1}),i&&a.jsx(io,{size:1.2})]}),a.jsxs("text",{x:j,y:ve-.4,textAnchor:"middle",fontSize:"2",children:[Le(He("s",2*f),{decimals:1}),i&&a.jsx(io,{size:1.2})]}),a.jsx("text",{x:Ie(f/2,m,$),y:Ct-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),a.jsx("text",{x:Ie(1.5*f,m,$),y:Ct-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),a.jsx("text",{x:Ie(2.5*f,m,$),y:Ct-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&a.jsxs(a.Fragment,{children:[a.jsxs(ch,{"aria-hidden":"true",children:[a.jsxs("span",{children:["outgoing ",a.jsx("b",{children:"0"})]}),a.jsxs("span",{children:["echo"," ",a.jsx("b",{children:a.jsx(ln,{value:$r(He("s",f),r),decimals:1})})]}),a.jsxs("span",{children:["confirmed"," ",a.jsx("b",{children:a.jsx(ln,{value:$r(He("s",2*f),r),decimals:1})})]})]}),a.jsxs(dh,{"aria-hidden":"true",children:[(x?e:[]).map((E,C)=>a.jsxs("span",{children:[a.jsx("i",{style:{background:`var(${un[C%un.length]})`}}),E.label]},E.id)),t.map(E=>a.jsxs("span",{"data-role":"legend-ribbon",children:[a.jsx("i",{style:{background:`var(${Ks(E.tags)})`}}),E.label]},E.id)),x&&e.length>0&&a.jsxs("span",{"data-role":"legend-deviation",children:[a.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),d]})}const ih=k.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,lh=k.svg`
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
`,ch=k.div`
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
`,dh=k.div`
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
`;function uh({handle:e,handles:t,"aria-label":n,mode:o,density:r,orientation:s,variant:i="inline"}){const l=t??(e?[e]:[]),c=l.length===1?l[0]:null,d=c?Oo(c.tags):null;if(c&&d===null)return a.jsx(hh,{tags:c.tags,who:c["aria-label"]});if(c&&d!=="in-flight-row"){const m=c,g=m.effectiveDelaySeconds;return po(g)!=="shown"?null:a.jsx(ah,{streams:m.streams??[],ribbons:m.ribbons??[],delayReading:m.delayReading,"aria-label":n??m["aria-label"],variant:i})}const h=qd(l.flatMap(m=>m.inFlight)),x=l.some(m=>m.dismiss)?m=>l.find(g=>g.inFlight.some(v=>v.id===m))?.dismiss?.(m):void 0;return a.jsx(tu,{items:h,"aria-label":n,mode:o,density:r,orientation:s,variant:i,onDismiss:x})}function hh({tags:e,who:t}){return Zs(e,t??"unnamed handle"),a.jsx("span",{hidden:!0,"data-rail-unrepresented":Mn(e)})}function oa(e){const n=gt(e)||e.command||"The command",o=e.code===void 0?void 0:ms(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function ra(e){return`${gt(e)||e.command||"The command"}: never sent. Safe to re-send.`}const fh={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed"},ph={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command"};function gh(e,t){return e.kind==="refused"?Lo(e.entries[t]):e.kind==="found"?Ys(e.entries[t]):e.kind==="failed"?oa(e.entries[t]):e.kind==="undelivered"?ra(e.entries[t]):qs(e.entries[t])}function mh(e){return e.entries.map((t,n)=>{const o=gt(t);return{id:t.id,subject:o||t.command||"",sentence:gh(e,n),dismissLabel:`Dismiss ${o||ph[e.kind]}`,tags:t.tags}})}function _t(e){const{kind:t,onDismiss:n,live:o=!0}=e,r=e["aria-label"]??fh[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const i=mh(e).map(l=>a.jsxs(yh,{role:o?void 0:"listitem",$tone:s,children:[dn(l.tags)==="ribbon"?a.jsx(wh,{$tone:s,children:l.subject}):a.jsx(bh,{"aria-hidden":"true",$tone:s,children:Eo(l.subject)}),a.jsx(kh,{children:l.sentence}),n&&a.jsx($h,{type:"button","data-dismiss":"",onClick:c=>{Fs(c.currentTarget),n(l.id)},"aria-label":l.dismissLabel,children:"✕"})]},l.id));return o?a.jsx(vh,{forwardedAs:"div","aria-label":r,"data-command-list":"",additionsOnly:!0,children:i}):a.jsx(xh,{role:"list","aria-label":r,"data-command-list":"",children:i})}const sa=H`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,xh=k.div`
  ${sa}
`,vh=k(_n)`
  ${sa}
  &:empty {
    margin: 0;
  }
`,yh=k.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>se[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${se[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,bh=k.span`
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
`,wh=k.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>ye[e]};
`,kh=k.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,$h=k.button`
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
  ${Qe}
`;function dt(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,o)=>dt(n,t[o]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const n=[...t];return[...e].every(o=>{const r=n.findIndex(s=>dt(o,s));return r===-1?!1:(n.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[n,o]of e)if(!t.has(n)||!dt(o,t.get(n)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const n=e,o=t,r=new Set;for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of r)if(!dt(n[s],o[s]))return!1;return!0}return!1}function Sn(e,t,n,o){const[r,s]=p.useState(o),i=p.useRef(t);i.current=t;const l=p.useRef(n);l.current=n;const c=p.useRef(r);return c.current=r,p.useEffect(()=>{if(!e)return;let d=c.current;const h=()=>{const g=i.current(e);l.current(d,g)||(d=g,s(g))};h(),e.addEventListener("scroll",h,{passive:!0});const f=new ResizeObserver(h);f.observe(e);for(const g of Array.from(e.children))f.observe(g);let x;const m=new MutationObserver(g=>{if(g.some(v=>v.type==="childList")){for(const v of Array.from(e.children))f.observe(v);h();return}x===void 0&&(x=requestAnimationFrame(()=>{x=void 0,h()}))});return m.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style"]}),()=>{e.removeEventListener("scroll",h),f.disconnect(),m.disconnect(),x!==void 0&&cancelAnimationFrame(x)}},[e]),r}function _h(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function aa(e){return Sn(e,_h,Object.is,!1)?0:void 0}function Mh({label:e,selected:t,count:n,onToggle:o}){return a.jsxs(jh,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[a.jsx("span",{children:e}),n!==void 0&&a.jsx(Sh,{children:n})]})}const jh=k.button`
  ${Ro("chip")}
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

  ${Qe}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`,Sh=k.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function Eh({value:e,onChange:t,clearLabel:n="Clear search",className:o,...r}){const s=p.useRef(null);return a.jsxs(Ah,{className:o,children:[a.jsx(Ch,{...r,ref:s,type:"search",value:e,onChange:i=>t(i.target.value)}),e!==""&&a.jsx(Ph,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:a.jsx(wd,{size:"var(--icon-size-control)"})})]})}const Ah=k.div`
  position: relative;
  display: flex;
  align-items: center;
`,Ch=k(vl)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,Ph=k(gl)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function Ex({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=Ai(e),r=[...new Set(o)],[s,i]=p.useState(()=>new Set),[l,c]=p.useState(""),d=p.useId(),h=g=>{i(v=>{const $=new Set(v);return $.has(g)?$.delete(g):$.add(g),$})},f=[...s,l].filter(g=>g.length>0).map(g=>g.toLowerCase()),x=a.jsxs(ys,{gap:"related-packed",children:[a.jsxs(ml,{children:[a.jsx(xl,{htmlFor:d,children:t}),a.jsx(Eh,{id:d,value:l,placeholder:n,onChange:c})]}),r.length>0&&a.jsx(Pu,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:r.map(g=>a.jsx(Mh,{label:g,selected:s.has(g),onToggle:()=>h(g)},g))})]}),m={matches:g=>{const v=g.toLowerCase();return f.every($=>v.includes($))},active:f.length>0};return ia.set(m,x),m}const ia=new WeakMap;function la(e){return ia.get(e)??null}function Ax({filter:e,children:t,fill:n=!1}){return a.jsxs(ys,{gap:"related-dense",fill:n,children:[la(e),t]})}const Rh=24,Ih=96;function Lh({children:e,padded:t,caption:n,footer:o,strip:r,...s}){const i=r!=null&&r!==!1;return a.jsxs(Th,{$padded:t&&!i,$stacked:i,...s,children:[i?a.jsxs(a.Fragment,{children:[a.jsx(Oh,{$padded:t,children:e}),a.jsx(Nh,{"data-framed-display-strip":"",children:r})]}):e,n!=null&&a.jsx(ca,{children:n}),o!=null&&a.jsx(Fh,{children:o})]})}const Th=k.div`
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
`,Oh=k.div`
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
`,Nh=k.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${Rh}px;
  max-height: ${Ih}px;
  min-width: 0;
  overflow: hidden;
`,ca=k.div`
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
`,Fh=k(ca)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,Ar={width:160,height:72},zh=2.5,Dh=420;function Cx({width:e,height:t,plotHasData:n}){return!n&&e>=Ar.width&&t>=Ar.height?"center":e>=Dh&&e>=t*zh?"beside":"inline"}const Hh={overlay:H`
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
  `};function Bh({placement:e,role:t="status",children:n,...o}){return a.jsx(Wh,{$placement:e,role:t,...o,children:n})}const Wh=k.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${Ci.regular};
  pointer-events: none;

  ${({$placement:e})=>Hh[e]}
`,hn=8;function da(e){const t=[{cols:1,rows:e}];for(let n=2;n<=e;n++){const o=Math.ceil(e/n);o<(t.at(-1)?.rows??e)&&t.push({cols:n,rows:o})}return t}function ua(e){return e===0?"0px":`(${e}px + var(--gap-related))`}const ha=(e,t)=>`calc(${e} * ${t} + ${(e-1)*hn}px)`,Xh=(e,t,n)=>`calc(${e} * (${t} + ${n+hn}px) + ${(e-1)*hn}px)`;function Uh(e,t,n,o,r){const s=ua(n),i=da(e).slice(1).map(({cols:c,rows:d})=>`
  @container grid-squares-width (width >= ${ha(c,t)}) {
    --cell: calc((100cqw - ${c-1} * ${o}) / ${c});
    --rows: ${d};
  }`).join(""),l=c=>`calc(var(--rows) * (${c} + ${s}) + (var(--rows) - 1) * ${o})`;return r!==void 0?`
  --cell: 100cqw;
  --rows: ${e};
  ${i}
  min-height: var(--grid-squares-height, ${l(r)});
`:`
  --cell: 100cqw;
  --rows: ${e};
  ${i}
  min-height: var(--grid-squares-height, clamp(${l(`min(var(--cell), ${t}, 100cqh - ${s})`)}, 100cqh, ${l("var(--cell)")}));
`}function Gh(e,t,n,o){const r=da(e),s=o!==void 0;return r.slice(1).map(({cols:i,rows:l},c)=>`
  @container grid-squares (aspect-ratio >= ${(.88*i/r[c].rows).toFixed(2)}) and ((width >= ${ha(i,t)}) or (height < ${Xh(s?l:r[c].rows,o??t,n)})) {
    --cols: ${i};
    --rows: ${l};
  }`).join("")}function Yh(e,t){const n=`
  & > * > * {
    --grid-square-heading: ${e===0?"0px":`calc${ua(e)}`};
  }`;return e===0||t===void 0?n:`${n}
  @container (width < ${t}px) or (height < ${t+e+hn}px) {
    & > * > * {
      --grid-square-heading: 0px;
    }
    & > * [data-grid-square-heading] {
      display: none;
    }
  }`}function qh(e){if(dn(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return t===null||t<=0?!1:n>0||t>=ea&&o>0}return e.inFlight.length>0}function fa({tiny:e}={}){const t=Hu(),n=To();p.useEffect(()=>n?Bu(n):void 0,[n]);const o=t.filter(qh),r=t.flatMap(w=>(w.refusals??[]).map(D=>({...D,tags:w.tags}))),s=t.flatMap(w=>(w.losses??[]).map(D=>({...D,tags:w.tags}))),i=t.flatMap(w=>(w.founds??[]).map(D=>({...D,tags:w.tags}))),l=t.flatMap(w=>(w.undelivered??[]).map(D=>({...D,tags:w.tags}))),c=t.flatMap(w=>(w.failures??[]).map(D=>({...D,tags:w.tags}))),d=r.length+l.length+c.length,h=o.length>0||d>0||s.length>0||i.length>0,[f,x]=p.useState(!1),[m,g]=p.useState(!1),[v,$]=p.useState(!1),S=f||m&&!v;p.useEffect(()=>{h||(x(!1),g(!1),$(!1))},[h]);const j=p.useId(),L=[...o.filter(w=>dn(w.tags)==="ribbon"),...o.filter(w=>dn(w.tags)!=="ribbon")],C=t.some(w=>w.dismiss&&(w.refusals?.length??0)>0)?w=>t.find(D=>D.refusals?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,R=t.some(w=>w.dismiss&&(w.losses?.length??0)>0)?w=>t.find(D=>D.losses?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,B=t.some(w=>w.dismiss&&(w.undelivered?.length??0)>0)?w=>t.find(D=>D.undelivered?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,Q=t.some(w=>w.dismiss&&(w.failures?.length??0)>0)?w=>t.find(D=>D.failures?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,W=t.some(w=>w.dismiss&&(w.founds?.length??0)>0)?w=>t.find(D=>D.founds?.some(Z=>Z.id===w))?.dismiss?.(w):void 0;return a.jsxs(Vh,{"data-panel-rail-frame":"",$tiny:e,$hasContent:h,onMouseEnter:()=>{$(!1),g(!0)},onMouseLeave:()=>g(!1),children:[t.length>0&&a.jsxs(_n,{visuallyHidden:!0,additionsOnly:!0,children:[r.map(w=>a.jsx("span",{children:Lo(w)},`refusal:${w.id}`)),s.map(w=>a.jsx("span",{children:qs(w)},`loss:${w.id}`)),l.map(w=>a.jsx("span",{children:ra(w)},`undelivered:${w.id}`)),c.map(w=>a.jsx("span",{children:oa(w)},`failure:${w.id}`)),i.map(w=>a.jsx("span",{children:Ys(w)},`found:${w.id}`))]}),h?a.jsxs(Zh,{"data-panel-rail":"","data-grown":S,"data-pinned":f,"data-suppress-hover":v,onKeyDown:w=>{w.key==="Escape"&&f&&(w.stopPropagation(),x(!1),$(!0))},children:[a.jsx(Qh,{type:"button","aria-expanded":f,"aria-controls":j,"aria-label":"Signal-delay detail",onClick:()=>{x(w=>{const D=!w;return D||$(!0),D})},children:a.jsx(nf,{"aria-hidden":"true",hidden:!S,children:"▲"})}),a.jsxs(Jh,{id:j,"data-panel-rail-detail":"",children:[L.map(w=>a.jsx(uh,{handle:w,variant:S?"expanded":"rail","aria-label":w["aria-label"]??(S?"Delay detail":void 0)},w.id)),!S&&(d>0||s.length>0||i.length>0)&&a.jsxs(ef,{children:[d>0&&a.jsx(Cr,{children:d===1?"1 command failed":`${d} commands failed`}),s.length>0&&a.jsx(Cr,{children:s.length===1?"1 command unconfirmed":`${s.length} commands unconfirmed`}),i.length>0&&a.jsx(tf,{children:i.length===1?"1 unconfirmed command answered":`${i.length} unconfirmed commands answered`})]})]})]}):null,S&&r.length>0&&a.jsx(_t,{kind:"refused",entries:r,onDismiss:C,live:!1}),S&&s.length>0&&a.jsx(_t,{kind:"lost",entries:s,onDismiss:R,live:!1}),S&&l.length>0&&a.jsx(_t,{kind:"undelivered",entries:l,onDismiss:B,live:!1}),S&&c.length>0&&a.jsx(_t,{kind:"failed",entries:c,onDismiss:Q,live:!1}),S&&i.length>0&&a.jsx(_t,{kind:"found",entries:i,onDismiss:W,live:!1})]})}const Vh=k.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,Kh=H`
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
`,Zh=k.div`
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
    ${Kh}
  }
`,Qh=k.button`
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

  ${vn}

  &[aria-expanded="true"] {
    pointer-events: none;
  }

`,Jh=k.div`
  display: contents;
`,Cr=k.span`
  color: ${ye.warn};
`,ef=k.span`
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
`,tf=k.span`
  color: var(--color-info-text);
`,nf=k.span`
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
`,pa=p.createContext(null);function Px({badges:e,children:t}){return a.jsx(pa.Provider,{value:e,children:t})}function of(){return p.useContext(pa)}function ga({severity:e,count:t=1}){const n=t>1;return a.jsx(rf,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${Ot[e]}`:Ot[e],$mark:se[e],$digits:n?String(t).length:1,children:n&&a.jsx(sf,{$fill:to[e],$ink:xs[e],children:a.jsx(af,{"aria-hidden":"true",children:a.jsx("text",{x:"50%",y:"50%",dy:"0.365em",textAnchor:"middle",children:t})})})})}const Pr="8px",rf=k.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${Pr};
  /* The count's own size, so the width below can be counted in its digits. Digits this size are six pixels tall, which centre in the eight-pixel dot on whole pixels; at seven they are five, and one engine places the baseline half a pixel above or below the middle. */
  font-size: 8px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:Pr};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,sf=k.span`
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
`,af=k.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: currentColor;
`,lf=()=>()=>{},Rr=()=>Pi;function ma(){const e=bs();return p.useSyncExternalStore(e?e.subscribe:lf,e?e.getBreakdown:Rr,e?e.getBreakdown:Rr)}const cf=()=>()=>{},Ir=()=>null;function df(){const e=bs();return p.useSyncExternalStore(e?e.subscribe:cf,e?e.getSummary:Ir,e?e.getSummary:Ir)}const xa=H`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,uf=12;function hf(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function ff(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const r=o<e?t-uf:t;if(n[o]<=r)return o}return n.length-1}function pf(e,t,n){const[o,r]=p.useState(0),s=p.useRef(o);s.current=o;const i=[t,...n].join(`
`),l=p.useCallback(()=>{const c=e.current,d=i.split(`
`);if(!c||d.length<2){s.current!==0&&(s.current=0,r(0));return}const h=d.map(x=>hf(c,x)),f=ff(s.current,c.clientWidth,h);f!==s.current&&(s.current=f,r(f))},[e,i]);return p.useLayoutEffect(()=>{l()},[l]),p.useEffect(()=>{const c=e.current;if(!c||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>l());return d.observe(c),()=>d.disconnect()},[e,l]),{index:o,compacted:o>0}}const gf=24;function mf(e,t,n,o,r=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&r?!(t>n+gf):n>t}function Lr(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const r=e.cloneNode(!0);n!==void 0&&(r.textContent=n),Object.assign(r.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),r.setAttribute("aria-hidden","true"),o.insertBefore(r,e.nextSibling);const s=r.getBoundingClientRect().width;return o.removeChild(r),s}const xf={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function Mt(e){return Number.parseFloat(e)||0}function vf(e,t,n,o){const[r,s]=p.useState(!1),i=p.useRef(r);i.current=r;const l=p.useRef(void 0),c=p.useRef(void 0),d=p.useRef(!1),h=p.useRef(o);h.current=o;const f=p.useCallback(()=>{const m=e.current;if(!m)return;const g=getComputedStyle(m),v=m.getBoundingClientRect().width-Mt(g.paddingLeft)-Mt(g.paddingRight),$=Lr(t.current,{},h.current),S=Lr(n.current,xf),j=n.current?.closest("[data-panel-aside-expand]")?.parentElement,L=j?getComputedStyle(j):null,E=$===0||S===0?$+S:$+Mt(g.columnGap)+Mt(L?.paddingLeft??"")+Mt(L?.paddingRight??"")+S,C=i.current,M=v>0&&c.current!==void 0&&v<c.current;C&&M&&(d.current=!0);const R=mf(C,v,E,l.current,d.current);R!==C&&(d.current=R&&M),v>0&&(c.current=v),E>0&&(l.current=E),R!==i.current&&(i.current=R,s(R))},[e,t,n]),x=p.useRef({title:null,aside:null,observer:null});return p.useLayoutEffect(()=>{const m=t.current,g=n.current,v=x.current;if(v.observer===null||v.title!==m||v.aside!==g){v.observer?.disconnect(),v.title=m,v.aside=g,v.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>f());for(const $ of[m,g])$&&v.observer?.observe($,{subtree:!0,childList:!0,characterData:!0,attributes:!0});f();return}v.observer.takeRecords().length>0&&f()}),p.useEffect(()=>{const m=x.current;return()=>{m.observer?.disconnect(),m.observer=null}},[]),p.useEffect(()=>{const m=e.current;if(!m||typeof ResizeObserver>"u")return;const g=new ResizeObserver(()=>f());return g.observe(m),n.current&&g.observe(n.current),()=>g.disconnect()},[e,n,f]),r}const va=p.createContext("full"),yf=va.Provider;function Rx(){return p.useContext(va)}const En=p.createContext(null);function ya({children:e}){const[t,n]=p.useState(null),o=p.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return a.jsx(En.Provider,{value:o,children:e})}function bf({children:e}){return a.jsx(ya,{children:e})}const ba=`
  & > [${ks}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,fn=k.div`
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
  ${({$hoverTitle:e})=>e?vn:""}
  /* A hand-composed panel can put sections straight in here, so this box owns the leftover height. */
  ${ba}
`,wf=k.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${xa}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,wa=p.forwardRef(function({compact:t,children:n,...o},r){const s=p.useRef(null),i=typeof n=="string"?n:"",l=t===void 0||i===""?kf:typeof t=="string"?[t]:t,{index:c,compacted:d}=pf(s,i,l);return a.jsx(Pe,{text:d?i:void 0,children:a.jsx(wf,{...o,ref:h=>{if(s.current=h,typeof r=="function"){r(h);return}r&&(r.current=h)},"aria-label":d?i:void 0,children:c===0?n:l[c-1]})})}),kf=[],$f=k.div`
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
`,_f=k.div`
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
`,Mf=k.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,jf=k.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,Sf=k.details`
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
    ${Qe}
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
`,Ef=120;function ka(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${Ot[n.severity]}`:`${Ot[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function $a({title:e,compactTitle:t,aside:n,toolbar:o,...r}){const s=ma(),i=p.useRef(null),l=p.useRef(null),c=p.useRef(null),d=vf(i,l,c,typeof e=="string"?e:void 0),[h,f]=p.useState(!1),[x,m]=p.useState(!1),g=p.useRef(null),v=p.useRef(null),$=p.useRef(null),S=p.useCallback(()=>{g.current!==null&&clearTimeout(g.current),g.current=null},[]);p.useEffect(()=>{d||(f(!1),m(!1))},[d]),p.useEffect(()=>S,[S]);const j=d&&(h||x);p.useEffect(()=>{if(!j)return;const M=_=>{_.key==="Escape"&&v.current?.contains(document.activeElement)&&(_.stopPropagation(),S(),m(!1),f(!1),$.current?.focus())},R=_=>{v.current?.contains(_.target)||(S(),m(!1),f(!1))};return document.addEventListener("keydown",M,!0),document.addEventListener("pointerdown",R,!0),()=>{document.removeEventListener("keydown",M,!0),document.removeEventListener("pointerdown",R,!0)}},[j,S]);const L=d?ka(s):null,{anchor:E,tip:C}=zt(j?null:L);return a.jsxs($f,{ref:i,"data-panel-header":"",...r,children:[a.jsxs(_f,{children:[e!==void 0&&a.jsx(wa,{ref:l,compact:t,children:e}),a.jsx(Mf,{"aria-hidden":"true",children:a.jsx(cn,{children:null})})]}),n!==void 0&&a.jsx(jf,{children:a.jsxs(Sf,{ref:v,"data-panel-aside-expand":"","data-hovering":d&&x?"":void 0,$collapsed:d,open:d?h:!0,onToggle:M=>{d&&(f(M.currentTarget.open),M.currentTarget.open||m(!1))},onPointerEnter:M=>{!d||M.pointerType==="touch"||(S(),m(!0))},onPointerLeave:M=>{M.pointerType!=="touch"&&(S(),g.current=setTimeout(()=>{g.current=null,m(!1)},Ef))},children:[a.jsxs("summary",{ref:$,"data-tooltip":E["data-tooltip"],onPointerDown:E.onPointerDown,onPointerUp:E.onPointerUp,onFocus:E.onFocus,onBlur:E.onBlur,"aria-description":L??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(M=>`${M.count} ${Ot[M.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(M=>a.jsx(ga,{severity:M.severity,count:M.count},M.severity)),a.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),C,a.jsx(yf,{value:d?"collapsed":"full",children:a.jsx("div",{"data-panel-aside-full":"",ref:c,children:n})})]})}),o!==void 0&&a.jsx(_a,{children:o})]})}const _a=k.div`
  ${Ro("panel-toolbar")}
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
`,Af=k.div`
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
  ${vn}
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
  ${({$loneFrame:e})=>e?`@container (width < ${Cf}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${ba}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${ks}] {
           min-height: 0;
         }`:""}
`,Cf="25rem";function Ma({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...r}){const i=p.useContext(En)?.registerScroller,[l,c]=p.useState(null),d=p.useCallback(f=>{i?.(f),c(f)},[i]),h=aa(l);return a.jsx(Af,{ref:d,tabIndex:h,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...r,children:e})}const Pf="13rem",Rf=k.div`
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
  & > [${Ri}] {
    grid-column: 1 / -1;
  }
  /* A grid opened only to carry the augment slot, with nothing bound, takes no gap above it: a filling section reaches the body's bottom inset. */
  &:empty {
    display: none;
  }
`;function If({children:e,hoverTitle:t}){const n=p.useRef(null),o=p.useRef(null),r=Of(n,o);return a.jsx(Lf,{ref:n,$fits:r,"data-panel-fit-body":"",children:a.jsx(Tf,{ref:o,$fits:r,$hoverTitle:t,"data-panel-fit-shifted":r&&t?"":void 0,children:e})})}const Lf=k.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,Tf=k.div`
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
`;function Of(e,t){const[n,o]=p.useState(!0);return p.useLayoutEffect(()=>{const r=e.current,s=t.current;if(!r||!s)return;const i=()=>{o(Ff(Nf(s),r.clientHeight))};if(i(),typeof ResizeObserver>"u")return;const l=new ResizeObserver(i),c=()=>{l.observe(r),l.observe(s);for(const h of Array.from(s.children))l.observe(h)};c();const d=new MutationObserver(()=>{c(),i()});return d.observe(s,{childList:!0}),()=>{l.disconnect(),d.disconnect()}},[e,t]),n}function Nf(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function Ff(e,t){return e<=t}const zf=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,Df=k.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${vn}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,pn=k.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e})=>e==="top"?"top: 0;":"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: 44px;
  /* The audit reads the mask depth from the gradient, so the literal height costs it nothing. */
  ${$u("panel-scroll-glow")}
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
`,ja=p.forwardRef(function({children:t,...n},o){const r=p.useRef(null),[s,i]=p.useState(null),l=p.useCallback(h=>{r.current=h,i(h)},[]);p.useImperativeHandle(o,()=>r.current);const c=Sn(s,Fo,zo,No),d=aa(s);return a.jsxs(zf,{...n,children:[a.jsx(Df,{ref:l,tabIndex:d,"data-scroll-area-inner":"",children:t}),a.jsx(pn,{$position:"top",$visible:c.top}),a.jsx(pn,{$position:"bottom",$visible:c.bottom})]})});function Hf(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const Tr="14rem",Bf=5,Wf="45%",Xf=`min(${Oi(1,Bf).pxH}px, ${Wf})`;function Or(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const Uf=k.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${Or(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${Or(t,n)};`}

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
`;function Gf({side:e="end",size:t,railBand:n,children:o,...r}){const{ref:s,size:i}=bn({w:1,h:1}),l=Hf(t??Tr),c=i.w<=1||l===void 0||i.w>=l*2,d=i.w>=i.h&&c?"inline":"block",h=t??(d==="inline"?Tr:Xf);return a.jsx(Uf,{ref:s,"data-panel-split":d,$axis:d,$side:e,$size:h,$railBand:n,...r,children:o})}const Yf=k(ja)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,qf=k.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function Sa({children:e,...t}){return a.jsx(qf,{"data-panel-sidebar":"",...t,children:a.jsx(Yf,{children:e})})}const No={top:!1,bottom:!1};function Fo(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function zo(e,t){return e.top===t.top&&e.bottom===t.bottom}const Vf=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function Ea({children:e,railBandAbove:t,...n}){const o=p.useContext(En),r=o?.scroller??null;p.useEffect(()=>{},[o]);const s=Sn(r,Fo,zo,No);return a.jsxs(Vf,{...n,children:[e,a.jsx(pn,{$position:"top",$visible:s.top&&!t}),a.jsx(pn,{$position:"bottom",$visible:s.bottom})]})}function Kf(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const Ix=["sections","actions"],Kt=Object.freeze({});function Zf({summary:e}){const t=p.useRef(e.severity),[n,o]=p.useState(0);p.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const r=ka(ma());return a.jsx(Qf,{$pulse:n,children:a.jsx(Pe,{text:r,focusable:!0,children:a.jsx(cn,{tone:e.severity,size:"sm",children:e.label})})})}const Qf=k.span`
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
`,Aa=k.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,Jf=k.div`
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
`;function ep({children:e}){const t=p.useContext(En),n=Sn(t?.scroller??null,Fo,zo,No);return a.jsx(Jf,{"data-panel-sticky-top":"","data-panel-glow-top":n.top?"":void 0,children:e})}function tp({render:e}){const{ref:t,size:n}=bn({w:0,h:0});return a.jsx(np,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const np=k.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,op=k.div`
  flex: 1 1 100%;
  min-width: 0;
`,rp=k($a)`
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
`,sp=k.div`
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
`,ap=k(Be)`
  margin: 0;
  ${xa}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${fn}:hover &,
  ${fn}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function Do(e){return e.held===void 0?e.label:`${e.label}: ${mt(e.held)}`}function ip(e){let t=null;for(const n of e){const o=Io(n),{tone:r}=o;r===void 0||r==="neutral"||(t===null||hr(r)>hr(t.severity))&&(t={severity:r,label:Do(o)})}return t}function Nr({badges:e}){return a.jsx(a.Fragment,{children:e.map(t=>a.jsx(lp,{entry:t},t.id))})}function lp({entry:e}){const t=Io(e),{tone:n}=t;return xo(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:Do(t)}),null}function cp({summary:e,announcement:t}){return a.jsxs(a.Fragment,{children:[a.jsx(Pe,{text:e.label,focusable:!0,children:a.jsx(dp,{children:a.jsx(ga,{severity:e.severity})})}),a.jsx(_n,{visuallyHidden:!0,assertive:!0,children:t})]})}const dp=k.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,up=k.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function hp(e){return e.hoverTitle?a.jsx(fp,{...e}):a.jsx(Ca,{...e,hoverTitleId:void 0})}function fp(e){const t=p.useId();return a.jsx(Ca,{...e,hoverTitleId:t})}function Ca({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:r,panelToolbar:s,panelFilter:i,panelFooter:l,panelTrend:c,inactive:d,fitToSize:h,hoverTitle:f,hoverTitleId:x,panelSidebar:m,sidebarSide:g,sidebarSize:v,sections:$,sectionMinWidth:S=Pf,children:j,...L}){const E=of(),C=dr("actions"),M=dr("sections"),R=Kf(o,E),_=R.length===0?null:R.map(Y=>{const ie=Io(Y),{label:_e,tone:Me,title:An}=ie;return a.jsx(Pe,{text:An,focusable:!0,children:a.jsx(cn,{tone:Me,held:ie.held,report:Me===void 0||Me==="neutral"?void 0:{id:Y.id,label:Do(ie)},children:_e})},Y.id)}),B=i===void 0?s:a.jsxs(a.Fragment,{children:[s,a.jsx(op,{children:la(i)})]}),K=r??null,Q=K!==null&&K!=="none"&&K!=="live"?K:null;xo(Q?{id:"stream",severity:zn(Q),label:ur(Q)??""}:null);const T=df(),W=T!==null&&R.some(Y=>Y.id===T.id),w=Q===null?null:ur(Q),D=W?null:T!==null?a.jsx(Zf,{summary:T}):Q===null||w===null?null:a.jsx(Pe,{text:`Telemetry stream: ${w}`,focusable:!0,children:a.jsx(cn,{tone:zn(Q),size:"sm",children:w})}),Z=T?.label??w,ce=Z===null||Z===""?"":typeof e=="string"?`${e}: ${Z}`:`Status: ${Z}`,Je=n===void 0&&D===null&&_===null&&!C?void 0:a.jsxs(a.Fragment,{children:[n,C&&a.jsx(qt,{segment:"actions",props:Kt}),_,D]}),we=T??ip(R)??(Q===null||w===null?null:{severity:zn(Q),label:w}),Xe=we?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${we.label}`:`Status: ${we.label}`,ke=n===void 0&&we===null&&!C?R.length===0?void 0:a.jsx(Nr,{badges:R}):a.jsxs(a.Fragment,{children:[n,C&&a.jsx(qt,{segment:"actions",props:Kt}),a.jsx(Nr,{badges:R}),we!==null&&a.jsx(cp,{summary:we,announcement:Xe})]}),de=d!==void 0,Ae=de?[]:p.Children.toArray($),pe=Ae.length>0,J=j===void 0&&!M&&!h&&Ae.length===1&&pp(Ae[0]),te=[];for(const Y of Ae){const ie=!h&&p.isValidElement(Y)&&Y.props.fill===!0,_e=te.at(-1);!ie&&_e!==void 0&&!_e.fill?_e.nodes.push(Y):te.push({fill:ie,nodes:[Y]})}pe&&!te.some(Y=>!Y.fill)&&te.push({fill:!1,nodes:[]});const Ue=te.reduce((Y,ie,_e)=>ie.fill?Y:_e,-1),Ge=Y=>Math.max(1,Y.filter(ie=>!(p.isValidElement(ie)&&ie.props.full===!0)).length),$e=[];for(const Y of te){const ie=$e.length;if(Y.fill){$e.push(Y.nodes[0]);continue}$e.push(a.jsxs(Rf,{$min:S,$columns:Ge(Y.nodes),children:[Y.nodes,ie===Ue&&a.jsx(qt,{segment:"sections",props:Kt})]},`sections-${ie}`))}const ae=de?a.jsx(Ii,{reason:d}):pe?a.jsxs(a.Fragment,{children:[j,$e]}):j,ue=a.jsxs(Ma,{fitToSize:h,loneFrame:J,hoverTitle:f,children:[a.jsxs(ep,{children:[a.jsx(fa,{tiny:f}),!f&&a.jsx(rp,{title:e,compactTitle:t,aside:Je,toolbar:B})]}),h?a.jsx(If,{hoverTitle:f,children:ae}):ae,!pe&&!de&&a.jsx(qt,{segment:"sections",props:Kt})]});return a.jsx(bf,{children:a.jsxs(fn,{$railTravels:!0,$hoverTitle:f,...f?{tabIndex:0,role:"group","aria-labelledby":x,"data-tiny-panel":""}:{},...L,children:[a.jsx(Ea,{railBandAbove:!0,children:m===void 0||de?ue:a.jsxs(Gf,{side:g,size:v,railBand:!0,children:[ue,a.jsx(Sa,{children:m})]})}),!de&&c!==void 0&&a.jsx(tp,{render:c}),!de&&l!==void 0&&a.jsx(Aa,{children:l}),f&&a.jsxs(sp,{"data-panel-hover-title":"",children:[a.jsx(ap,{as:"h3",id:x,children:e}),ke!==void 0&&a.jsx(up,{children:ke})]}),a.jsx(_n,{visuallyHidden:!0,children:f&&Xe!==void 0?"":ce})]})})}function pp(e){if(!p.isValidElement(e)||e.type!==ws||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=p.Children.toArray(t).filter(r=>!(p.isValidElement(r)&&r.type===Bh));if(n.length!==1)return!1;const[o]=n;if(!p.isValidElement(o))return!1;if(o.type===Lh)return!0;if(o.type!==p.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const Lx=Object.assign(hp,{Context:ya,Delay:fa,Container:fn,Header:$a,Toolbar:_a,Footer:Aa,Title:wa,Glow:Ea,Body:Ma,Section:ws,Sidebar:Sa}),gp={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function Tx({cols:e,minColWidth:t,fit:n=!1,gap:o="related-dense",rowGap:r,align:s="center",squares:i=!1,squareHeadingPx:l=0,squareHeadingMinPx:c,minRowHeight:d,children:h,...f}){if(i){const x=p.Children.toArray(h).length,m=t??"120px",g=a.jsx(yp,{$count:x,$min:m,$headingPx:l,$gap:ut[o],$rowMin:d,children:a.jsx(bp,{$count:x,$min:m,$headingPx:l,$gap:ut[o],$rowMin:d,$headingMin:c,"data-grid-squares":"",children:h})});return a.jsx(xp,{$rowMin:d,...f,children:d===void 0?g:a.jsx(vp,{children:g})})}return a.jsx(mp,{$cols:e,$minColWidth:t,$fit:n,$gap:o,$rowGap:r,$align:s,...f,children:h})}const mp=k.div`
  display: grid;
  align-items: ${({$align:e})=>gp[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${ut[t]} ${ut[e]}`:ut[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:n})=>e||(t?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,xp=k.div`
  container: grid-squares-width / inline-size;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  ${({$rowMin:e})=>e&&`
  flex-basis: 0;
  min-height: ${e};
`}
`,vp=k(ja)`
  & > [data-scroll-area-inner] {
    display: flex;
    flex-direction: column;
  }
`,yp=k.div`
  container: grid-squares / size;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${({$count:e,$min:t,$headingPx:n,$gap:o,$rowMin:r})=>Uh(e,t,n,o,r)}
`,bp=k.div`
  --cols: 1;
  --rows: ${({$count:e})=>e};
  display: grid;
  flex: 1 1 0;
  min-height: 0;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
  gap: ${({$gap:e})=>e};
  ${({$count:e,$min:t,$headingPx:n,$rowMin:o})=>Gh(e,t,n,o)}
  & > * {
    container-type: size;
    min-width: 0;
    min-height: 0;
  }
  ${({$headingPx:e,$headingMin:t})=>Yh(e,t)}
`,Pa=.89,Ho=.45;function Ra({kind:e,x:t,y:n,scale:o=1,ghost:r=!1}){const s=oe[e],i=s.canvasRadius*o,l={fill:s.color,opacity:r?Ho:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const d=i*Pa;return a.jsx("rect",{x:t-d,y:n-d,width:2*d,height:2*d,...l})}const c=`${t},${n-i} ${t+i},${n+i*.8} ${t-i},${n+i*.8}`;return a.jsx("polygon",{points:c,...l})}function Ia(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function Fr(e,t,n,o,r,{ghost:s=!1,scale:i=1}={}){const l=oe[n],c=l.canvasRadius*i;if(t.save(),t.globalAlpha=s?Ho:1,t.fillStyle=Ia(e,l.cssVar,l.fallback),t.beginPath(),n==="held"){const d=c*Pa;t.rect(o-d,r-d,2*d,2*d)}else t.moveTo(o,r-c),t.lineTo(o+c,r+c*.8),t.lineTo(o-c,r+c*.8),t.closePath();t.fill(),t.restore()}function Ox(e,t,{held:n,modelled:o},r={}){n!==void 0&&o!==void 0&&(t.save(),t.globalAlpha=Ho,t.strokeStyle=Ia(e,oe.modelled.cssVar,oe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.stroke(),t.restore()),n!==void 0&&Fr(e,t,"held",n.x,n.y,{...r,ghost:o!==void 0}),o!==void 0&&Fr(e,t,"modelled",o.x,o.y,r)}const gn=14,Ee=4,Se=6,wp=6,zr=12,ge=6,Lt=8,Zt=4.5,lo=4,kp=12,$p=190,_p=80;function Pt(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function Mp(e,t,n,o){const r=o??e,s=r.x1-r.x0,i=e.y1-e.y0,l=s>=$p&&i>=_p,c=l||o!==void 0,d=l||o?n:n.filter(M=>!M.detail),h=s-ge*2-Ee*2-Lt-lo,f=o!==void 0,x=Math.floor(h/Se),m=M=>Pt(M.value??an,x-(M.currency?M.currency.length+2:0)),g=M=>{const R=M.value??an;if(f)return Pt(M.label,x);if(l)return`${M.label} ${R}`;const _=Math.floor((h-R.length*Se)/Se)-1-(M.modelled?2:0),B=Pt(M.label,Math.min(_,kp));if(B!=="")return`${B} ${R}`;const K=Math.floor(h/Se)-(M.modelled?2:0);return Pt(R,K)},v=M=>(l||f)&&M.currency?M.currency:"",$=M=>v(M)?wp+v(M).length*Se+(M.modelled?zr:0):M.modelled?zr:0,S=l?0:Lt+lo,j=Math.floor((s-ge*2-Ee*2)/Se),L=Math.max(...d.map(M=>f?S+Math.max(g(M).length*Se,m(M).length*Se+$(M)):S+g(M).length*Se+$(M)),c?Math.min(t.length,j)*Se:0),E=c?1:0,C=(d.length*(f?2:1)+E)*gn+Ee*2;return{full:l,named:c,headingChars:j,stacked:f,rows:d,text:g,valueText:m,currencyText:v,cardW:f?s:Math.min(L+Ee*2,s-ge*2),cardH:C,headRows:E,fits:C<=i-ge*2}}function jp(e,t,n,o,r){const s=(i,l)=>i>=t&&i<=t+o&&l>=n&&l<=n+r;for(let i=1;i<e.cx.length;i++){const[l,c,d,h]=[e.cx[i-1],e.cy[i-1],e.cx[i],e.cy[i]];if(![l,c,d,h].every(Number.isFinite))continue;const f=Math.max(1,Math.ceil(Math.hypot(d-l,h-c)/gn));for(let x=0;x<=f;x++)if(s(l+(d-l)*x/f,c+(h-c)*x/f))return!0}return!1}function Bo({x:e,plot:t,heading:n,rows:o,column:r,avoid:s=[],traces:i=[]}){const l=Mp(t,n,o,r),{rows:c,cardW:d,cardH:h,fits:f}=l,x=t.y0+ge,m=c.flatMap(_=>_.y===void 0||_.y===null?[]:[_.y]),g=(_,B)=>m.every(K=>e+Zt<_||e-Zt>_+d||K+Zt<B||K-Zt>B+h),v=t.x1-e-ge,$=v>=d||v>=e-t.x0,S=_=>Math.max(t.x0+ge,Math.min(t.x1-ge-d,_)),j=$?[e+ge,e-ge-d]:[e-ge-d,e+ge],L=[x,t.y1-ge-h].flatMap(_=>j.map(B=>({cardX:S(B),cardY:_}))),E=(_,B)=>i.every(K=>!jp(K,_,B,d,h)),C=(_,B)=>s.every(K=>_+d<K.x0||_>K.x1||B+h<K.y0||B>K.y1),M=L.find(_=>g(_.cardX,_.cardY)&&E(_.cardX,_.cardY)&&C(_.cardX,_.cardY))??L.find(_=>g(_.cardX,_.cardY)&&C(_.cardX,_.cardY))??L.find(_=>g(_.cardX,_.cardY)&&E(_.cardX,_.cardY))??L.find(_=>g(_.cardX,_.cardY)),R=f?r?{cardX:r.x0,cardY:r.y0+ge}:M:void 0;return{layout:l,place:R}}function Nx(e){return Bo(e).place!==void 0}function Sp(e){const{layout:t,place:n}=Bo(e);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+t.cardW,y1:n.cardY+t.cardH}}function Ep({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:i}){const{layout:l,place:c}=Bo({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:i}),{full:d,named:h,headingChars:f,stacked:x,rows:m,text:g,valueText:v,currencyText:$,cardW:S,cardH:j,headRows:L}=l,E=c!==void 0,C=c?.cardX??0,M=c?.cardY??0,R=_=>_+Ee+(d?0:Lt+lo);return a.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[a.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),m.map(_=>_.y===void 0||_.y===null?null:a.jsx("circle",{cx:e,cy:_.y,r:3.5,fill:_.color,stroke:"var(--color-text-primary)",strokeWidth:1},_.id)),E&&a.jsxs("g",{"data-plot-crosshair-card":"",children:[a.jsx("rect",{x:C,y:M,width:S,height:j,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),h&&a.jsx("text",{x:C+Ee,y:M+Ee+10,fill:"var(--color-text-muted)",fontSize:10,children:Pt(n,f)}),m.map((_,B)=>{const K=x?2:1,Q=M+Ee+(B*K+L)*gn+10,T=Q+(x?gn:0);return a.jsxs("g",{"data-plot-crosshair-row":_.id,children:[!d&&a.jsx("rect",{x:C+Ee,y:Q-8,width:Lt,height:Lt,fill:_.color,"data-plot-crosshair-swatch":""}),a.jsx("text",{x:R(C),y:Q,fill:_.value===null||x?"var(--color-text-faint)":_.color,fontSize:10,style:{whiteSpace:"pre"},children:g(_)}),x&&a.jsx("text",{x:R(C),y:T,fill:_.value===null?"var(--color-text-faint)":_.color,fontSize:10,style:{whiteSpace:"pre"},children:v(_)}),_.modelled&&a.jsx(Ra,{kind:"modelled",x:C+S-Ee-$(_).length*Se-($(_)?8:4),y:T-3}),$(_)&&a.jsx("text",{x:C+S-Ee,y:T,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:$(_)})]},_.id)})]})]})}const Dr=480,Ap=110,Cp=200,Hr=56,Pp=20,Rp=112,Ip=260,Lp=.4,Tp=300;function Op({width:e,height:t,contentWidth:n,legendHeight:o=0,cardHeight:r=0}){const s=Math.max(Rp,Math.ceil(n));if((t>e||e<Dr)&&t>=Cp)return{placement:"below"};if(e<Dr||t<Ap||s>Math.min(Ip,e*Lp)||e-s<Tp)return{placement:"overlay"};const l=t>=Hr+o+r;return!l&&t<Hr+Pp+r?{placement:"overlay"}:{placement:"beside",columnWidth:s,legendBelow:!l}}const Np={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function Fp(e){return Np[e]}const it=4,Qt=3,co=6;function zp(e,t){return e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0}function Dp(e,t){const n=(o,r)=>o>=t.x0&&o<=t.x1&&r>=t.y0&&r<=t.y1;if(e.cx.length===1)return Number.isFinite(e.cx[0])&&n(e.cx[0],e.cy[0]);for(let o=1;o<e.cx.length;o++){const[r,s,i,l]=[e.cx[o-1],e.cy[o-1],e.cx[o],e.cy[o]];if(![r,s,i,l].every(Number.isFinite))continue;const c=Math.max(1,Math.ceil(Math.hypot(i-r,l-s)/co));for(let d=0;d<=c;d++)if(n(r+(i-r)*d/c,s+(l-s)*d/c))return!0}return!1}function Hp({plot:e,card:t,traces:n,obstacles:o}){if(t.width<=0||t.height<=0||t.width>e.x1-e.x0-it*2||t.height>e.y1-e.y0-it*2)return;const r=e.x0+it,s=e.x1-it-t.width,i=e.y0+it,l=e.y1-it-t.height;return[{x:s,y:i},{x:r,y:l},{x:s,y:l},{x:r,y:i}].find(d=>{const h={x0:d.x-Qt,y0:d.y-Qt,x1:d.x+t.width+Qt,y1:d.y+t.height+Qt};return!n.some(f=>Dp(f,h))&&!o.some(f=>zp(h,f))})}function Bp(e){const t=[],n=[];let o=!0;for(let r=e.y0;r<=e.y1+co;r+=co){const s=Math.min(r,e.y1);t.push(o?e.x0:e.x1,o?e.x1:e.x0),n.push(s,s),o=!o}return{cx:t,cy:n}}function Wp(e,t){return e?.includes(t)??!1}function Br(e,t){const{reckoned:n,spans:o}=e.data;return n?.some(r=>t>=r.from&&t<=r.to)?"modelled":o?.some(r=>t>=r.from&&t<=r.to&&r.status==="recorded")?"recorded":"measured"}function Xp(e){const{x:t,y:n,y2:o}=e.data;let r=!0;for(let i=0;i<t.length;i++)if(!Number.isFinite(t[i])||i>0&&t[i]<t[i-1]){r=!1;break}if(r)return e;const s=t.map((i,l)=>l).filter(i=>Number.isFinite(t[i])).sort((i,l)=>t[i]-t[l]||i-l);return{...e,data:{x:s.map(i=>t[i]),y:s.map(i=>n[i]),...o?{y2:s.map(i=>o[i])}:{}}}}function Up(e,t,n){const o=e.data.x,r=e.data.y,s=Math.min(o.length,r.length);if(s===0||t<o[0]||t>o[s-1])return null;let i=0,l=s-1;for(;i<l;){const g=i+l>>1;o[g]<t?i=g+1:l=g}const c=i,d=Math.max(0,c-1);if(o[c]!==t&&c>0&&Wp(e.data.breaks,c))return null;const h=t-o[d]<=o[c]-t?d:c;if(n!==void 0&&Math.abs(o[h]-t)>n)return null;const f=o[c]-o[d];if(e.readBetween&&f>0&&o[c]!==t){const g=r[d]+(r[c]-r[d])*(t-o[d])/f;return Number.isFinite(g)?{index:h,x:t,y:g,currency:Br(e,h)}:null}const x=r[h];if(!Number.isFinite(x))return null;const m=e.data.y2?.[h];return{index:h,x:o[h],y:x,...m!==void 0&&Number.isFinite(m)?{y2:m}:{},currency:Br(e,h)}}function Gp(e){const t=new Set;for(const n of e)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&t.add(o);return[...t].sort((n,o)=>n-o)}function Wr(e,t,n){if(e.length===0)return null;if(t===null)return e[e.length-1];let o=0,r=e.length-1;for(;o<r;){const i=o+r>>1;e[i]<t?o=i+1:r=i}let s=o+n;return e[o]!==t&&n>0&&(s-=1),e[Math.max(0,Math.min(e.length-1,s))]}function Yp({x:e,y:t,size:n,color:o,text:r}){const s=n/2,i=`M 0 ${-s} L ${s} ${s*.8} L ${-s} ${s*.8} Z`,l=`M -0.9 ${-s*.42} H 0.9 V ${s*.2} H -0.9 Z`,c=`M -0.9 ${s*.4} H 0.9 V ${s*.64} H -0.9 Z`;return a.jsx(Pe,{text:r,focusable:!0,children:a.jsxs("g",{role:"img","aria-label":r,"data-limit-crossing":"",transform:`translate(${e} ${t})`,children:[a.jsx("title",{}),a.jsx("circle",{r:12,fill:"transparent"}),a.jsx("path",{d:`${i} ${l} ${c}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),a.jsx("path",{d:i,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function La(e,t,n){return n==="above"?e>=t:e<=t}function qp({y:e,cx:t,cy:n,limit:o,limitY:r,bad:s,breaks:i=[],step:l=!1,minGapPx:c}){const d=($,S,j)=>{if(!S)return{index:$,x:t[$],y:n[$],entered:!1};if(j===null)return{index:$,x:t[$],y:r,entered:!0};const L=n[$]-n[j],E=L===0?1:(r-n[j])/L;return{index:$,x:t[j]+(t[$]-t[j])*E,y:r,entered:!0}},h=new Set(i),f=[];let x=null,m=!1,g=!1,v=Number.NEGATIVE_INFINITY;for(let $=0;$<e.length;$++){if(!Number.isFinite(e[$])){x=null;continue}const S=La(e[$],o,s);if(S&&!g){const j=d($,m,l||h.has($)?null:x),L=f[f.length-1];L!==void 0&&j.x-v<c?L.spells++:f.push({...j,spells:1}),v=j.x}g=S,m=!0,x=$}return f}const Vp=1;function Kp(e,t,n,o,r){const s=n.to;if(s<1||s>=e.length)return!1;const i=o(e[s-1]),l=o(e[s]),c=r(t[s-1]),d=r(t[s]);return l>i?n.t.some((h,f)=>{const x=o(h),m=c+(d-c)*(x-i)/(l-i);return Math.abs(r(n.v[f])-m)>Vp}):!1}function Xn(e,t,n,o){const r=t-e;if(r===0){const s=(n+o)/2;return()=>s}return s=>n+(s-e)/r*(o-n)}function uo(e,t,n=5){if(e===t)return Array.from({length:n},()=>e);const r=(t-e)/(n-1),s=10**Math.floor(Math.log10(r)),l=([1,2,2.5,5,10].find(x=>x*s>=r)??10)*s,c=Math.ceil(e/l)*l,d=[];for(let x=0;d.length<n;x++){const m=c+x*l;if(m>t+l*.01)break;d.push(m)}if(d.length>=2)return d;const h=Math.floor(e/l)*l,f=Math.ceil(t/l)*l;return f>h?[h,f]:[h,h+l]}function Ta(e,t){const n=Math.floor(e/1e3);if(t>=36e5){const s=Math.floor(n/3600),i=Math.floor(n%3600/60),l=n%60;return`${s}:${String(i).padStart(2,"0")}:${String(l).padStart(2,"0")}`}const o=Math.floor(n/60),r=n%60;return`${o}:${String(r).padStart(2,"0")}`}function Xr(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];for(let i=0;i<e.length;i++){const l=n(e[i]).toFixed(2),c=o(t[i]).toFixed(2),d=i===0||r.includes(i);s.push(`${d?"M":"L"}${l},${c}`),d&&ho(i,e.length,r)&&s.push(`L${l},${c}`)}return s.join(" ")}function ho(e,t,n){return e+1>=t||n.includes(e+1)}function Zp(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let i=o(t[0]).toFixed(2);const l=n(e[0]).toFixed(2);s.push(`M${l},${i}`),ho(0,e.length,r)&&s.push(`L${l},${i}`);for(let c=1;c<e.length;c++){const d=n(e[c]).toFixed(2),h=o(t[c]).toFixed(2);if(r.includes(c)){s.push(`M${d},${h}`),ho(c,e.length,r)&&s.push(`L${d},${h}`),i=h;continue}s.push(`H${d}`),h!==i&&s.push(`V${h}`),i=h}return s.join(" ")}function Qp(e,t,n,o,r,s=[],i=[],l=[]){if(e.length===0)return[];if(i.length===0&&l.length===0)return[{d:r(e,t,n,o,s)}];function c(v,$){const S=new Array(e.length);for(const j of v){const L=Math.min(e.length-1,j.to);for(let E=Math.max(0,j.from);E<=L;E++)S[E]=$(j)}return S}const d=c(i,v=>v.status),h=c(l,v=>v.basis),f=new Set(s),x=[];let m=0;const g=(v,$)=>{const S=v>0&&!f.has(v)?v-1:v,j=C=>C.slice(S,$+1),L=[];for(const C of s)C>S&&C<=$&&L.push(C-S);const E=r(j(e),j(t),n,o,L);E!==""&&x.push({status:d[v],basis:h[v],d:E})};for(let v=1;v<=e.length;v++)(v===e.length||d[v]!==d[m]||h[v]!==h[m])&&(g(m,v-1),m=v);return x}function Oa(e,t,n,o,r){if(e.length===0)return"";const s=Math.min(e.length,t.length,n.length);if(s===0)return"";const i=[];for(let l=0;l<s;l++){const c=o(e[l]).toFixed(2),d=r(n[l]).toFixed(2);i.push(`${l===0?"M":"L"}${c},${d}`)}for(let l=s-1;l>=0;l--){const c=o(e[l]).toFixed(2),d=r(t[l]).toFixed(2);i.push(`L${c},${d}`)}return i.push("Z"),i.join(" ")}function Jp(e,t,n,o){const r=[];for(const s of t){const{bandLo:i,bandHi:l,bandKind:c}=s;if(!i||!l||c===void 0)continue;const d=[];for(let f=s.from;f<=s.to&&f<e.length;f++)d.push(e[f]);const h=Oa(d,i,l,n,o);h!==""&&r.push({d:h,kind:c})}return r}function Ur(e,t,n,o){if(e===t){const d=(n+o)/2;return()=>d}const r=e>0?e:1e-9,s=t>r?t:r*10,i=Math.log10(r),c=Math.log10(s)-i;if(c===0){const d=(n+o)/2;return()=>d}return d=>{const h=d>0?d:r;return n+(Math.log10(h)-i)/c*(o-n)}}function e0(e,t,n=5){if(!(e>0)||!(t>0)||t<=e)return uo(e,t,n);const o=Math.log10(e),r=Math.log10(t);if(r-o<1)return uo(e,t,n);const i=Math.ceil(o),l=Math.floor(r),c=Math.max(1,Math.ceil((l-i+1)/n)),d=[];for(let h=i;h<=l;h+=c)d.push(10**h);return d.length>0?d:[e,t]}const Un=.86,Gr=[[0,-1.15],[1.05,.8],[-1.05,.8]],Yr=.3,be={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:Un,triangle:Gr,outlineWidth:Yr,keylineWidth:.2,reach:Math.max(Math.hypot(Un,Un),...Gr.map(([e,t])=>Math.hypot(e,t)))+Yr/2},t0={"aria-hidden":!0};function Na(e,t,n,o){const r=be.squareHalf;return(e==="modelled"?be.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([i,l])=>[t+i*o,n+l*o])}const Fa=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function za(e,t,n){const o=e==="current"?0:be.outlineWidth;return t*(o+2*n*be.keylineWidth)}function n0({x:e,y:t,r:n,state:o="current",keyline:r=!1}){const s=o==="current"?"":Na(o,0,0,n).map(([i,l])=>`${i},${l}`).join(" ");return a.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...t0,children:[r&&Fa.map(({ring:i,color:l,widths:c})=>{const d={"data-vessel-keyline":i,fill:"none",stroke:l,strokeWidth:za(o,n,c),strokeLinejoin:"round"};return o==="current"?a.jsx("circle",{r:n,...d},i):a.jsx("polygon",{points:s,...d},i)}),o==="current"?a.jsx("circle",{r:n,fill:be.color}):a.jsx("polygon",{points:s,fill:o==="lost"?"none":oe[o].color,stroke:o==="lost"?be.lost.color:be.color,strokeWidth:n*be.outlineWidth,strokeLinejoin:"round"})]})}function on(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function Da(e,t,n,o,r){if(e.beginPath(),t==="current"){e.arc(n,o,r,0,Math.PI*2);return}Na(t,n,o,r).forEach(([s,i],l)=>{l===0?e.moveTo(s,i):e.lineTo(s,i)}),e.closePath()}function o0(e,t,n,o,r){e.save(),e.lineJoin="round";for(const{color:s,widths:i}of Fa)Da(e,t,n,o,r),e.strokeStyle=s,e.lineWidth=za(t,r,i),e.stroke();e.restore()}function r0(e,t,n,o,r,s=4,{keyline:i=!1}={}){i&&o0(t,n,o,r,s);const l=on(e,be.cssVar,be.fallback);if(t.save(),Da(t,n,o,r,s),n==="current")t.fillStyle=l,t.fill();else{if(n!=="lost"){const c=oe[n];t.fillStyle=on(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=n==="lost"?on(e,be.lost.cssVar,be.lost.fallback):l,t.lineWidth=s*be.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function Fx(e,t,n,o=4,r={}){const{held:s,modelled:i}=n;s!==void 0&&i!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=on(e,oe.modelled.cssVar,oe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(i.x,i.y),t.stroke(),t.restore());for(const l of["lost","held","current","modelled"]){const c=n[l];c!==void 0&&r0(e,t,l,c.x,c.y,o,r)}}const ft=56;function Ha(e,t,n,o){const r=Math.max(0,Math.min(t-1,Math.floor(n))),s=Math.max(0,Math.min(t-1,Math.floor(o))),i=Math.min(t-1,r+1),l=Math.min(t-1,s+1),c=Math.max(0,Math.min(1,n-r)),d=Math.max(0,Math.min(1,o-s)),h=e[s*t+r]+(e[s*t+i]-e[s*t+r])*c,f=e[l*t+r]+(e[l*t+i]-e[l*t+r])*c;return h+(f-h)*d}const qr=400,s0=16,a0=8,Vr=.06,i0=3.3,l0=.6,c0=60,d0=40,Kr=[6,12],Zr=[48,96],Jt=2;function Gn(e,t,n){const o=Math.max(0,Math.min(1,(n-e)/(t-e)));return o*o*(3-2*o)}function Qr(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Jr(e,t){const n=t/e,o=e<=t?.07:.09,r=i0**Math.exp(-((e-t)**2)/(2*o**2*t**2));return n**5*Math.exp(-1.25*n**4)*r}function Ba(e,t,n){if(!(e>0)||!(t>0)||!(n>0)||!Number.isFinite(e+t+n))return[];const o=Math.sqrt(n*2*Math.PI/qr),r=Jr(o,o),s=[];for(let i=-Jt;i<=s0*Jt;i++){const l=qr/2**(i/Jt),c=l/e,d=Gn(Kr[0],Kr[1],c)*(1-Gn(Zr[0],Zr[1],c))*(1-Gn(t,2*t,l));if(d<=.001)continue;const h=2*Math.PI/l,f=Math.sqrt(n*h),x=Math.sqrt(Math.min(1,Jr(f,o)/r)),m=(f>=o?Vr:Vr*x)/Math.sqrt(Jt),g=(c0+(Qr(i,1)-.5)*2*d0)*Math.PI/180;s.push({kx:h*Math.sin(g),ky:h*Math.cos(g),k:h,amplitude:m/h,omega:f,phase:Qr(i,2)*2*Math.PI,weight:d})}return s.slice(0,a0)}function u0(e,t,n,o){let r=0;for(const s of e)r+=s.weight*s.amplitude*Math.cos(s.kx*t+s.ky*n-s.omega*o+s.phase);return r}const rn=Wa(-.25,.3,.92),h0=2.6,f0=Wa(rn[0],rn[1],rn[2]+1),p0=.8,g0=3,m0=.95,x0=.35,v0=235,y0=.5,b0=.35;function Wa(e,t,n){const o=Math.hypot(e,t,n);return[e/o,t/o,n/o]}function w0(e,t,n,o){const{east0:r,north0:s,dx:i,dy:l,seconds:c,colour:d,waves:h,isSea:f}=o,[x,m,g]=rn,[v,$,S]=f0,j=h.length,L=new Float64Array(j*t),E=new Float64Array(j*t),C=new Float64Array(j*n),M=new Float64Array(j*n);for(let T=0;T<j;T++){const W=h[T];for(let w=0;w<t;w++){const D=W.kx*(r+(w+.5)*i);L[T*t+w]=Math.cos(D),E[T*t+w]=Math.sin(D)}for(let w=0;w<n;w++){const D=W.ky*(s-(w+.5)*l)-W.omega*c+W.phase;C[T*n+w]=Math.cos(D),M[T*n+w]=Math.sin(D)}}const R=new Float64Array(j),_=new Float64Array(j),B=h.map(T=>T.kx*T.weight*T.amplitude),K=h.map(T=>T.ky*T.weight*T.amplitude),Q=h.map(T=>l0*T.k*T.weight*T.amplitude);for(let T=0;T<n;T++)for(let W=0;W<t;W++){const w=(T*t+W)*4;if(f&&!f(W,T)){e[w+3]=0;continue}let D=0,Z=0,ce=1;for(let J=0;J<j;J++){const te=L[J*t+W],Ue=E[J*t+W],Ge=C[J*n+T],$e=M[J*n+T];R[J]=te*Ge-Ue*$e,_[J]=Ue*Ge+te*$e}for(let J=0;J<j;J++){const te=j>1?1+p0*R[(J+g0)%j]:1;D-=B[J]*R[J]*te,Z-=K[J]*R[J]*te,ce-=Q[J]*_[J]*te}const Je=1/Math.sqrt(D*D+Z*Z+ce*ce),we=(D*x+Z*m+ce*g)*Je-g,Xe=1+h0*we;let ke=0;const de=(D*v+Z*$+ce*S)*Je;if(de>m0){let J=de;for(let te=0;te<7;te++)J*=J;ke=255*x0*J}const Ae=Math.max(0,Xe-1)*b0,pe=Math.min(1,Xe)*y0;e[w]=d.r*pe+(255-d.r*pe)*Ae+ke,e[w+1]=d.g*pe+(255-d.g*pe)*Ae+ke,e[w+2]=d.b*pe+(255-d.b*pe)*Ae+ke,e[w+3]=v0}}function es(e){const t=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function k0(e,t){const n=es(t),o=Math.max(e.r,e.g,e.b,1),r=c=>({r:Math.min(255,e.r*c),g:Math.min(255,e.g*c),b:Math.min(255,e.b*c)});let s=0,i=255/o;for(let c=0;c<32;c++){const d=(s+i)/2;es(r(d))<n?s=d:i=d}const l=r((s+i)/2);return{r:Math.round(l.r),g:Math.round(l.g),b:Math.round(l.b)}}const $0=192,_0=30,M0="--color-info-mark",j0=.42;function S0(e,t){const n=e.view==="plan",o=t.scaleX,r=t.scaleYPrimary,s=1/(o(1)-o(0)),i=1/(r(1)-r(0)),l=S=>(S-o(0))*s,c=S=>(S-r(0))*i,d=Math.min(o(e.bounds.x0),o(e.bounds.x1)),h=Math.max(o(e.bounds.x0),o(e.bounds.x1)),f=Math.min(r(e.bounds.y0),r(e.bounds.y1)),x=Math.max(r(e.bounds.y0),r(e.bounds.y1)),m=n?d:Math.max(t.plotX0,d),g=n?h:Math.min(t.plotX1,h),v=n?f:Math.max(t.plotY0,f),$=n?x:Math.min(t.plotY1,x);return n&&(h<t.plotX0||d>t.plotX1||x<t.plotY0||f>t.plotY1)||!(g-m>=1&&$-v>=1)||!Number.isFinite(s+i)?null:{left:m,top:v,width:g-m,height:$-v,x0:l(m),x1:l(g),y0:c($),y1:c(v)}}function ts(e,t){if(!t)return null;e.fillStyle=t;const n=/^#([0-9a-f]{6})$/i.exec(String(e.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function E0(e,t,n){const o=ts(t,getComputedStyle(e).getPropertyValue(M0).trim());if(!o)return null;const r=n?ts(t,n):null;return r?k0(r,o):o}function A0(e,t,n,o,r,s){const i=ft,l=(n.x1-n.x0)/i,c=(n.y1-n.y0)/i,d=t.sea,h=o.scaleYPrimary(t.bounds.y0)<o.scaleYPrimary(t.bounds.y1),f=d&&d.size>1&&d.heights.length>=d.size*d.size?(m,g)=>{const v=h?g:i-1-g;return Ha(d.heights,d.size,m/(i-1)*(d.size-1),v/(i-1)*(d.size-1))<0}:void 0,x=e.createImageData(i,i);w0(x.data,i,i,{east0:t.origin.east+n.x0,north0:t.origin.north+n.y1,dx:l,dy:c,seconds:r,colour:s,waves:Ba(Math.max(l,c),n.x1-n.x0,t.gravity),isSea:f}),e.putImageData(x,0,0)}function C0(e,t,n,o,r){const{width:s,height:i}=e.canvas,l=P0(t,n,s),c=l.length>1?(l[l.length-1]-l[0])/(l.length-1):n.x1-n.x0,d=Ba(c,n.x1-n.x0,t.gravity),h=(t.bearingDeg??90)*Math.PI/180,f=g=>(g-n.x0)/(n.x1-n.x0)*s,x=g=>(n.y1-g)/(n.y1-n.y0)*i;e.clearRect(0,0,s,i),e.beginPath(),l.forEach((g,v)=>{const $=u0(d,t.origin.east+g*Math.sin(h),t.origin.north+g*Math.cos(h),o);v===0?e.moveTo(f(g),x($)):e.lineTo(f(g),x($))});const m=`${r.r}, ${r.g}, ${r.b}`;e.strokeStyle=`rgba(${m}, 0.9)`,e.lineWidth=1,e.stroke(),e.lineTo(f(l[l.length-1]),i),e.lineTo(f(l[0]),i),e.closePath(),e.fillStyle=`rgba(${m}, ${j0})`,e.fill()}function P0(e,t,n){const o=(e.samples??[]).filter(r=>r>t.x0&&r<t.x1);return e.samples&&e.samples.length>1?[t.x0,...o,t.x1]:Array.from({length:n+1},(r,s)=>t.x0+s/n*(t.x1-t.x0))}function R0({layer:e,frame:t}){const n=S0(e,t),o=p.useRef(null),r=p.useRef(null);r.current=n?{layer:e,at:n,frame:t}:null;const s=n?e.view==="plan"?ft:Math.max(1,Math.min($0,Math.round(n.width))):0,i=n?e.view==="plan"?ft:Math.max(1,Math.round(n.height*s/n.width)):0,l=e.tint;return p.useEffect(()=>{const c=o.current,d=c?.getContext("2d")??null;if(!c||!d||s===0||i===0)return;const h=E0(c,d,l);if(!h)return;const f=()=>{const j=r.current;if(!j)return;const L=Date.now()/1e3;j.layer.view==="plan"?A0(d,j.layer,j.at,j.frame,L,h):C0(d,j.layer,j.at,L,h)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let m=!0;const g=typeof IntersectionObserver=="function"?new IntersectionObserver(j=>{m=j.some(L=>L.isIntersecting)}):null;g?.observe(c);let v=Number.NEGATIVE_INFINITY,$=0;const S=j=>{$=requestAnimationFrame(S),!(!m||document.hidden||j-v<1e3/_0)&&(v=j,f())};return $=requestAnimationFrame(S),()=>{cancelAnimationFrame($),g?.disconnect()}},[s,i,l]),n?a.jsx("g",{"aria-hidden":"true","data-plot-layer":e.id,"data-plot-layer-kind":"water",children:a.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:a.jsx("canvas",{ref:o,width:s,height:i,style:{display:"block",width:"100%",height:"100%",imageRendering:e.view==="plan"?"pixelated":"auto"}})})}):null}const I0={faint:.45,normal:.85,bright:1},L0=1.5,T0=5,O0=.9,jt=7,St=6,Yn=10,pt=9,ze=12,N0=6.2,qn=4,F0=9,z0=13,D0=.1,Tt={paintOrder:"stroke",strokeWidth:3,strokeLinejoin:"round"},Vn=5,H0=.5,B0=.5;function We(e){return se[e.tone??"neutral"]}function Ft(e){return ye[e.tone??"neutral"]}function Re(e){return I0[e.emphasis??"normal"]}function Te(e,t){return t.axis==="secondary"?e.scaleYSecondary:e.scaleYPrimary}function W0(e){const t=e.axis==="secondary"?"secondary":"primary";switch(e.kind){case"series":return{xs:e.points.map(n=>n.x),ys:e.points.map(n=>n.y),axis:t};case"region":return{xs:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.x),ys:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.y),axis:t};case"rule":return e.along==="y"?{xs:[],ys:[e.value],axis:t}:{xs:[e.value],ys:[],axis:t};case"marker":case"annotation":return{xs:[e.at.x],ys:[e.at.y],axis:t};default:return{xs:[],ys:[],axis:t}}}const Wo=5.8,lt=11,ns=4;function X0(e,t){const n=t.text.length*Wo,{frame:o}=t,r=t.anchorX+t.gap,s=r+n<=o.plotX1-4?"start":"end",i=s==="start"?r:t.anchorX-t.gap,l=s==="start"?i:i-n,c=l+n,d=f=>e.some(x=>l<x.x1&&c>x.x0&&f-lt<x.y1&&f+2>x.y0);let h=t.anchorY+3;for(let f=0;f<ns&&d(h);f++)h+=lt;if(d(h)){h=t.anchorY+3;for(let f=0;f<ns&&d(h);f++)h-=lt}return h=Math.min(Math.max(h,o.plotY0+lt),o.plotY1-lt),e.push({x0:l,x1:c,y0:h-lt,y1:h+2}),{x:i,y:h,anchor:s}}function U0(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function G0(e){if(e.length===0)return"";const t=[`M${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`];for(let n=1;n<e.length;n++)t.push(`H${e[n].x.toFixed(2)}`,`V${e[n].y.toFixed(2)}`);return t.join(" ")}function Xa(e,t,n){if(e.length===0)return[];const o=e[0],r=e[e.length-1],s=[...e];if(t==="right"||t==="left"){const i=t==="right"?n.plotX1:n.plotX0;s.push({x:i,y:r.y},{x:i,y:o.y})}else{const i=t==="above"?n.plotY0:n.plotY1;s.push({x:r.x,y:i},{x:o.x,y:i})}return s}function Y0(e,t){const n=[];for(const o of e){if(o.kind==="relief"||o.kind==="water"){const i=Te(t,o),{x0:l,y0:c,x1:d,y1:h}=o.bounds;n.push([{x:t.scaleX(l),y:i(c)},{x:t.scaleX(d),y:i(c)},{x:t.scaleX(d),y:i(h)},{x:t.scaleX(l),y:i(h)}]);continue}if(o.kind!=="region"||o.hatched)continue;const r=Te(t,o),s=o.boundary.map(i=>({x:t.scaleX(i.x),y:r(i.y)}));if(!(s.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...s,...o.boundaryHigh.map(i=>({x:t.scaleX(i.x),y:r(i.y)})).reverse()])}else n.push(Xa(s,o.side,t))}return(o,r)=>n.some(s=>{let i=!1;for(let l=0,c=s.length-1;l<s.length;c=l++){const d=s[l],h=s[c];d.y>r!=h.y>r&&o<(h.x-d.x)*(r-d.y)/(h.y-d.y)+d.x&&(i=!i)}return i})}function q0({layer:e,frame:t}){if(e.stops.length===0)return null;const n=Te(t,e),o=e.along==="y"?t.plotY1-t.plotY0:t.plotX1-t.plotX0;if(o<=0)return null;const r=e.along==="y"?t.plotY0:t.plotX0,s=e.along==="y"?n:t.scaleX,i=e.maxOpacity??B0,l=e.tint??We(e),c=e.blur!==void 0?Math.ceil(e.blur*3):0,d=`plot-field-${e.id}-${t.uid}`,h=`plot-field-blur-${e.id}-${t.uid}`,f=e.along==="y"?t.plotY1:t.plotX1,x=e.stops.map(m=>({offset:(s(m.at)-r)/o*100,intensity:Math.max(0,Math.min(1,m.intensity))})).sort((m,g)=>m.offset-g.offset);return a.jsxs(a.Fragment,{children:[a.jsxs("defs",{children:[a.jsx("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:t.plotX0,y1:t.plotY0,x2:e.along==="x"?f:t.plotX0,y2:e.along==="y"?f:t.plotY0,children:x.map((m,g)=>a.jsx("stop",{offset:`${m.offset.toFixed(2)}%`,stopColor:l,stopOpacity:i*m.intensity},g))}),e.blur!==void 0&&a.jsx("filter",{id:h,children:a.jsx("feGaussianBlur",{stdDeviation:e.blur})})]}),a.jsx("rect",{"data-plot-layer":e.id,"data-plot-layer-kind":"field",x:t.plotX0-c,y:t.plotY0-c,width:t.plotX1-t.plotX0+2*c,height:t.plotY1-t.plotY0+2*c,fill:`url(#${d})`,filter:e.blur!==void 0?`url(#${h})`:void 0})]})}const V0=6,ct=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function K0(e){const t=Math.max(0,Math.min(1,e));for(let n=1;n<ct.length;n++)if(t<=ct[n][0]){const[o,r]=ct[n-1],[s,i]=ct[n],l=s>o?(t-o)/(s-o):0;return[Math.round(r[0]+(i[0]-r[0])*l),Math.round(r[1]+(i[1]-r[1])*l),Math.round(r[2]+(i[2]-r[2])*l)]}return ct[ct.length-1][1]}const Z0=[150,156,160],Q0=[200,80,70];function J0(e,t){if(t===3)return Z0;if(t!==1&&t!==2)return e;const n=.3*e[0]+.59*e[1]+.11*e[2],o=(s,i,l)=>s+(l-s)*i,r=e.map(s=>o(o(s,.5,n),.06,235));return t===1?r:r.map((s,i)=>o(s,.3,Q0[i]))}function eg(e,t){const n=2*(t-1),o=(e%n+n)%n;return o<t?o:n-o}function tg(e,t,n,o,r,s,i){const l=e[s*n+i],c=r?eg(l,o):l,[d,h,f]=J0(K0(c/(o-1)),t[s*n+i]),x=i>0?e[s*n+i-1]:l,m=s>0?e[(s-1)*n+i]:l,g=x!==l||m!==l?.5:1;return`rgb(${Math.round(d*g)}, ${Math.round(h*g)}, ${Math.round(f*g)})`}function ng(e,t){const{bounds:n}=e,o=Te(t,e),r=t.scaleX(n.x0),s=t.scaleX(n.x1),i=o(n.y0),l=o(n.y1),c=Math.abs(s-r)/ft,d=Math.abs(l-i)/ft;return!(c>0)||!(d>0)?null:{left:Math.min(r,s),top:Math.min(i,l),cellW:c,cellH:d,flipRows:i<l}}function og(e,t){const{size:n,values:o}=e;if(!t||n<2||o.length<n*n)return null;const{left:r,top:s,cellW:i,cellH:l,flipRows:c}=t;let d=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY;for(let E=0;E<n*n;E++){const C=o[E];if(!Number.isFinite(C))return null;C<d&&(d=C),C>h&&(h=C)}const f=h-d,x=e.bandMetres!=null&&e.bandMetres>0?e.bandMetres:null,m=e.veil,g=Math.max(2,e.bands??V0),v=ft,$=new Int16Array(v*v),S=new Uint8Array(v*v),j=m!=null&&m.length>=n*n;for(let E=0;E<v;E++)for(let C=0;C<v;C++){const M=C/(v-1)*(n-1),R=E/(v-1)*(n-1);j&&(S[E*v+C]=m[Math.round(R)*n+Math.round(M)]??0);const _=Ha(o,n,M,R);if(x!=null){$[E*v+C]=Math.floor(_/x);continue}const B=f>0?(_-d)/f:.5;$[E*v+C]=Math.max(0,Math.min(g-1,Math.floor(B*g)))}const L=[];for(let E=0;E<v;E++){const C=c?E:v-1-E;let M=0,R="";for(let _=0;_<=v;_++){const B=_<v?tg($,S,v,g,x!=null,E,_):"";if(_===0){R=B;continue}B===R&&_<v||(L.push(a.jsx("rect",{x:r+M*i,y:s+C*l,width:(_-M)*i+.5,height:l+.5,fill:R},`${E}-${M}`)),M=_,R=B)}}return L}function rg({layer:e,frame:t}){const n=ng(e,t),{values:o,size:r,veil:s,bandMetres:i,bands:l}=e,{left:c,top:d,cellW:h,cellH:f,flipRows:x}=n??{},m=p.useMemo(()=>og(e,n),[o,r,s,i,l,c,d,h,f,x]);return m?a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:Re(e),"aria-hidden":"true",children:m}):null}function sg({layer:e,frame:t}){const n=p.useId(),o=Te(t,e),r=d=>({x:t.scaleX(d.x),y:o(d.y)}),s=e.boundary.map(r);if(s.length<2)return null;const i=e.side==="between"?[...s,...(e.boundaryHigh??[]).map(r).reverse()]:Xa(s,e.side,t);if(e.side==="between"&&!e.boundaryHigh)return null;const l=e.side==="right"?t.plotX1-4:e.side==="left"?t.plotX0+11:s[s.length-1].x,c=(t.plotY0+t.plotY1)/2;return a.jsxs(a.Fragment,{children:[e.hatched&&a.jsx("defs",{children:a.jsx("pattern",{id:n,width:Vn,height:Vn,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:a.jsx("line",{x1:0,y1:0,x2:0,y2:Vn,stroke:We(e),strokeWidth:1,strokeOpacity:e.opacity??H0})})}),a.jsx("polygon",{"data-plot-layer":e.id,"data-plot-layer-kind":"region","data-hatched":e.hatched?"":void 0,points:i.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:e.hatched?`url(#${n})`:We(e),fillOpacity:e.hatched?void 0:e.opacity??D0}),t.labels&&e.label&&a.jsx("text",{x:l,y:c,transform:`rotate(-90 ${l} ${c})`,textAnchor:"middle",fontSize:F0,letterSpacing:"0.14em",fill:"var(--color-text-muted)",stroke:"var(--color-surface-raised)",...Tt,children:e.label})]})}function ag({layer:e,frame:t}){const n=Te(t,e),o=e.points.map(s=>({x:t.scaleX(s.x),y:n(s.y)}));if(o.length===0)return null;const r=L0*(e.weight??1);if(e.style==="scatter"){const s=e.radius===void 0?r:Math.abs(t.scaleX(e.radius)-t.scaleX(0));return a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",fill:We(e),opacity:Re(e),children:o.map((i,l)=>a.jsx("circle",{cx:i.x,cy:i.y,r:s},l))})}return a.jsx("path",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",d:e.style==="step"?G0(o):U0(o),fill:"none",stroke:We(e),strokeOpacity:Re(e),strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:e.dashed?"5 3.5":void 0})}function ig({layer:e,frame:t}){const n=Te(t,e),o=e.dashed??!0,r=We(e),s=e.along==="y",i=s?n(e.value):t.scaleX(e.value);return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"rule",x1:s?t.plotX0:i,x2:s?t.plotX1:i,y1:s?i:t.plotY0,y2:s?i:t.plotY1,stroke:r,strokeOpacity:Re(e),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),t.labels&&e.label&&a.jsx("text",{x:s?t.plotX1-4:i+3,y:s?i-3:t.plotY0+10,textAnchor:s?"end":"start",fill:Ft(e),fontSize:pt,children:e.label})]})}function lg({layer:e,frame:t,placed:n}){const o=Te(t,e),r=t.scaleX(e.at.x),s=o(e.at.y),i=e.across??"x",l=We(e),c=t.labels&&e.label?X0(n,{anchorX:r,anchorY:s,gap:jt+3,text:e.label,frame:t}):null;return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"annotation",x1:i==="x"?r-jt:r,x2:i==="x"?r+jt:r,y1:i==="x"?s:s-jt,y2:i==="x"?s:s+jt,stroke:l,strokeOpacity:Re(e),strokeWidth:1.75,strokeLinecap:"round"}),c&&e.label&&a.jsx("text",{x:c.x,y:c.y,textAnchor:c.anchor,fontSize:pt,letterSpacing:"0.05em",fill:Ft(e),fillOpacity:Re(e),children:e.label})]})}function cg({layer:e,frame:t}){const n=Te(t,e),o=t.scaleX(e.at.x),r=n(e.at.y)+(e.offsetPx??0),s=T0*(e.scale??1),i=We(e),l=e.shape??"dot",c={"data-plot-layer":e.id,"data-plot-layer-kind":"marker",opacity:Re(e)},d=l==="none"?null:l==="vessel"?a.jsx("g",{...c,children:a.jsx(n0,{state:e.markState??"current",x:o,y:r,r:s*O0,keyline:!0})}):l==="dot"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:i,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):l==="ring"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:"none",stroke:i,strokeWidth:1.5}):l==="cross"?a.jsx("path",{...c,d:`M${o-s},${r} L${o+s},${r} M${o},${r-s} L${o},${r+s}`,stroke:i,strokeWidth:1.5,strokeLinecap:"round"}):l==="chevron-up"||l==="chevron-down"?a.jsx("polyline",{...c,points:l==="chevron-up"?`${o-s},${r+s*.5} ${o},${r-s*.5} ${o+s},${r+s*.5}`:`${o-s},${r-s*.5} ${o},${r+s*.5} ${o+s},${r-s*.5}`,fill:"none",stroke:i,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null,h=(e.label?.length??0)*Wo/2+3,f=l==="none"?Math.min(Math.max(o,t.plotX0+h),t.plotX1-h):o+s+3,x=l==="none"?Math.min(Math.max(r+3,t.plotY0+pt+3),t.plotY1-4):r+3;return a.jsxs(a.Fragment,{children:[d,t.labels&&e.label&&a.jsx("text",{x:f,y:x,textAnchor:l==="none"?"middle":void 0,fontSize:pt,fill:Ft(e),fillOpacity:Re(e),stroke:"var(--color-surface-raised)",...Tt,children:e.label})]})}function dg({layer:e,frame:t,row:n,edges:o}){const r=e.caption?2:1;if(e.anchor==="left-edge"||e.anchor==="right-edge"){const g=e.anchor==="left-edge"?t.plotX0+St+n*ze:t.plotX1-St-n*ze,v=t.plotY1-34;return a.jsx("text",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",x:g,y:v,transform:`rotate(-90 ${g} ${v})`,fontSize:pt,letterSpacing:"0.14em",fill:Ft(e),fillOpacity:Re(e),stroke:"var(--color-surface-raised)",...Tt,children:e.text})}const s=e.anchor.startsWith("top"),i=e.anchor.endsWith("right"),l=g=>St+(g?z0:0),c=i?t.plotX1-l(o.right):t.plotX0+l(o.left),d=n*(r*ze+2),h=s?t.plotY0+St+Yn+d:t.plotY1-St-d,f=h-ze,x=Math.max(e.text.length*N0,(e.caption?.length??0)*Wo)+2*qn,m=(s?h:h-(e.caption?ze:0))-Yn-1;return a.jsxs("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",textAnchor:i?"end":"start",children:[a.jsx("rect",{x:i?c-x+qn:c-qn,y:m,width:x,height:r*ze+1,rx:3,fill:"var(--color-surface-raised)",fillOpacity:.8}),e.caption&&a.jsx("text",{x:c,y:s?h:f,fontSize:pt,letterSpacing:"0.05em",fill:"var(--color-text-faint)",stroke:"var(--color-surface-raised)",...Tt,children:e.caption}),a.jsx("text",{x:c,y:e.caption&&s?h+ze:h,fontSize:Yn,fontWeight:700,fill:Ft(e),fillOpacity:Re(e),stroke:"var(--color-surface-raised)",...Tt,children:e.text})]})}const os={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},ug={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function Kn({layers:e,frame:t,pass:n}){const o=e.map((l,c)=>({layer:l,index:c})).filter(({layer:l})=>ug[l.kind]===n).sort((l,c)=>os[l.layer.kind]-os[c.layer.kind]||(l.layer.z??0)-(c.layer.z??0)||l.index-c.index),r=new Map,s=[],i={left:e.some(l=>l.kind==="caption"&&l.anchor==="left-edge"||l.kind==="region"&&l.side==="left"&&!!l.label),right:e.some(l=>l.kind==="caption"&&l.anchor==="right-edge"||l.kind==="region"&&l.side==="right"&&!!l.label)};return a.jsx(a.Fragment,{children:o.map(({layer:l,index:c})=>{const d=`${l.id}-${c}`;switch(l.kind){case"relief":return a.jsx(rg,{layer:l,frame:t},d);case"water":return a.jsx(R0,{layer:l,frame:t},d);case"field":return a.jsx(q0,{layer:l,frame:t},d);case"region":return a.jsx(sg,{layer:l,frame:t},d);case"series":return a.jsx(ag,{layer:l,frame:t},d);case"rule":return a.jsx(ig,{layer:l,frame:t},d);case"annotation":return a.jsx(lg,{layer:l,frame:t,placed:s},d);case"marker":return a.jsx(cg,{layer:l,frame:t},d);case"caption":{const h=r.get(l.anchor)??0;return r.set(l.anchor,h+1),a.jsx(dg,{layer:l,frame:t,row:h,edges:i},d)}default:return null}})})}function hg(e){return e.map(t=>t.description).filter(t=>typeof t=="string"&&t.length>0)}const rs=11,en=3,tn=4,ss=(e,t)=>e.x0<t.x1&&t.x0<e.x1&&e.y0<t.y1&&t.y0<e.y1;function fg(e,t,n,o,r){let s=0,i=1;const l=n-e,c=o-t,d=[[-l,e-r.x0],[l,r.x1-e],[-c,t-r.y0],[c,r.y1-t]];for(const[h,f]of d){if(h===0&&f<0)return!1;if(h!==0){const x=f/h;h<0?s=Math.max(s,x):i=Math.min(i,x)}}return s<=i}function pg(e,t){for(let n=1;n<e.cx.length;n++){const o=[e.cx[n-1],e.cy[n-1],e.cx[n],e.cy[n]];if(o.every(Number.isFinite)&&fg(o[0],o[1],o[2],o[3],t))return!0}return!1}function gg({labels:e,plot:t,obstacles:n,traces:o}){const r=[],s=new Map;for(const i of e){const l={y0:i.lineY-en-rs,y1:i.lineY-en},c={y0:i.lineY+en,y1:i.lineY+en+rs},d={x0:t.x1-tn-i.width,x1:t.x1-tn},h={x0:t.x0+tn,x1:t.x0+tn+i.width},f=[{...d,...l,anchor:"end"},{...d,...c,anchor:"end"},{...h,...l,anchor:"start"},{...h,...c,anchor:"start"}];let x=null;for(const m of f){if(!(m.x0>=t.x0&&m.x1<=t.x1&&m.y0>=t.y0&&m.y1<=t.y1)||r.some($=>ss(m,$)))continue;const v=2*n.filter($=>ss(m,$)).length+o.filter($=>pg($,m)).length;(x===null||v<x.cost)&&(x={spot:m,cost:v})}if(x===null){s.set(i.id,null);continue}r.push(x.spot),s.set(i.id,{x:x.spot.anchor==="end"?x.spot.x1:x.spot.x0,y:x.spot.y1-2,anchor:x.spot.anchor})}return s}function zx(e,t,n,o="linear"){const r=n&&mg(t,n)?0:t,s=n?o==="log"?fo(e,r).decimals:xg(e,r,n):0;return Le(He(e,r),{decimals:s})}function mg(e,t){const n=t.length>1?Math.abs(t[1]-t[0]):0;return n>0&&Math.abs(e)<n*1e-6}const Zn=3;function Ua(e){return{figure:Number.parseFloat(e.replace(/[^\d.-]/g,"")),unit:e.replace(/[\d.,\s-]/g,"")}}function fo(e,t){const n=r=>Ua(Le(He(e,t),{decimals:r})),o=n(Zn);for(let r=0;r<Zn;r++)if(n(r).figure===o.figure)return{decimals:r,unit:o.unit};return{decimals:Zn,unit:o.unit}}function xg(e,t,n){const o=fo(e,t);let r=o.decimals;for(const s of n){const i=fo(e,s);i.unit===o.unit&&(r=Math.max(r,i.decimals))}return r}function Dx(e){const t=Ua(Le(e,{decimals:3})),n=Math.abs(t.figure),o=Number.isFinite(n)&&n>0?Math.max(0,2-Math.floor(Math.log10(n))):0;return Le(e,{decimals:o})}function Qn(e,t,n){for(let o=n;o<6;o++){const r=e.map(s=>(s/t).toFixed(o));if(r.every((s,i)=>i===0||s!==r[i-1]))return o}return 6}const vg=4,yg=2.5;function bg(e,t){if(e.length===0)return!1;const n=e[e.length-1]-t;return n===0?!0:e.length===1?!1:Math.sign(e[0]-t)!==Math.sign(n)}function wg(e,t){return e==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:t?e==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const kg=(e,t)=>Ta(e-t[0],t[1]-t[0]),Hx=(e,t)=>Ta((e-t[0])*1e3,(t[1]-t[0])*1e3),Jn={top:10,bottom:28,left:50};function Ga(e,t,n){const o=(s,i,l)=>Math.max(s,Math.min(l,i)),r=o(30,Math.round(e*.18),Jn.left);return{top:Jn.top,right:n?r:o(14,Math.round(e*.07),20),bottom:t<150?20:Jn.bottom,left:r}}const as=e=>e.length*6.5+6,$g=4,_g=.4,Mg=26,Ke=14,je=16,nn=4,jg=6,Et=(e,t)=>Math.min(e.length*6+8,t);function Sg(e,t){const n=[];let o=0,r=0;for(const s of e)r>0&&r+s>t&&(o+=1,r=0),n.push({row:o,x:r}),r+=s+jg;return{rows:e.length===0?0:o+1,positions:n}}const is=4,Eg=.03;function eo(e,t){const n=Math.max(0,Math.floor(t/6));if(e.length<=n)return e;const o=e.lastIndexOf(" (");if(o>0&&e.length-o+4<=n){const r=n-(e.length-o)-3;return`${e.slice(0,r)}...${e.slice(o)}`}return n<4?"":`${e.slice(0,n-3)}...`}function ls(e,t){const n=e.split(/(?=M)/).filter(r=>r.length>0),o=[];for(const r of n){const s=[...r.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)];if(s.length<2)continue;const i=s[0],l=s[s.length-1];o.push(`${r.trim()} L${l[1]},${t} L${i[1]},${t} Z`)}return o.length>0?o.join(" "):null}function Ag(e,t,n,o,r=1){const s=[],i=Mg*Math.max(.5,Math.min(2,r));for(let l=e+i/2;l<t;l+=i)for(let c=n+i/2;c<o;c+=i)s.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return s}const Cg=120,Pg=90,Rg=70,Ig=35,Lg=2,Tg=12,cs=8,Og=2,De=14,mn=6,xn=12,Ng=16,Fg=12,zg=200,ds=10,Dg=.2,us=.6,hs="5 3",Hg=.15,Bg=.45,Wg="the value is inside the shaded region";function Xg(e){return(e.type??"line")==="band"&&e.data.y2?[...e.data.y,...e.data.y2]:e.data.y}function Ug({series:e,thresholds:t,yTickFormat:n}){const o=s=>s*mn,r=[];for(const s of e)r.push(o(s.label.length)+8);for(const s of t){if(s.kind==="marker"&&!s.label)continue;const i=s.label??n(s.value);r.push(o(i.length)+xn+8)}return Math.max(0,...r)+Tg}function Gg({width:e,height:t,hasSecondary:n,series:o,thresholds:r}){const s=r.filter(h=>h.label);if(o.length===0||s.length===0)return!1;const i=Math.max(...o.map(h=>h.label.length*6+8)),l=Math.max(...s.map(h=>(h.label?.length??0)*mn+xn)),c=Ga(e,t,n),d=e-c.left-c.right-Ke-Ng;return i+l+Fg>d}function Bx({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:r=kg,yTickFormat:s=Yg,yScalePrimary:i="linear",yScaleSecondary:l="linear",thresholds:c,legend:d="overlay",hideXAxis:h=!1,density:f="chart",spatial:x=!1,gridScale:m=1,layers:g,"aria-label":v,crosshair:$=!1,xKind:S="time",xReadFormat:j,xAxisLabel:L,yAxisLabel:E,ySecondaryAxisLabel:C,card:M,cardForms:R=1,width:_,height:B}){const K=p.useId(),Q=f==="compact",T=Q?"none":d,W=x,w=W||Q,D=$&&!w&&e.some(u=>u.data.x.length>0),[Z,ce]=p.useState(null),[Je,we]=p.useState(!1),[Xe,ke]=p.useState(""),[de,Ae]=p.useState(null),[pe,J]=p.useState(null),te=pe?.w===_&&pe.h===B?pe.form:0,[Ue,Ge]=p.useState(null),$e=M!=null,ae=Ue?.form===te?Ue:null;p.useLayoutEffect(()=>{if(!de){Ge(null);return}const u=()=>Ge(b=>{const P={w:de.offsetWidth,h:de.offsetHeight,form:te};return b?.w===P.w&&b?.h===P.h&&b?.form===P.form?b:P});u();const y=new ResizeObserver(u);return y.observe(de),()=>y.disconnect()},[de,te]);const ue=_,Y=B,ie=e.filter(u=>u.axis==="primary"&&u.data.x.length>0),_e=e.filter(u=>u.axis==="secondary"&&u.data.x.length>0),Me=_e.length>0,An=T!=="none"&&e.length>0||(c??[]).some(u=>u.label),Xo=Ug({series:e,thresholds:c??[],yTickFormat:s}),Uo=$e&&ae!==null&&ae.w+cs<=Math.max(112,Math.ceil(Xo)),Go=w||!An?{placement:"overlay"}:Op({width:ue,height:Y,contentWidth:Xo,legendHeight:T==="none"?0:e.length*je+6,cardHeight:Uo&&ae!==null?ae.h:0}),xt=Go.placement==="overlay"&&!w&&T!=="none"&&Y>=zg&&Gg({width:ue,height:Y,hasSecondary:Me,series:e,thresholds:c??[]})?{placement:"below"}:Go,Ce=T!=="none"&&(xt.placement==="below"||xt.placement==="beside"&&xt.legendBelow),Cn=Ce?Sg(e.map(u=>Et(u.label,ue-2*nn)),ue-2*nn):{rows:0,positions:[]},Pn=Cn.rows===0?0:Cn.rows*je+4,Yo=!w&&!h&&!!L,qo=!w&&!!E,Vo=!w&&Me&&!!C,Dt=W?0:1,Ko=w?{top:Dt,right:Dt,bottom:Dt,left:Dt}:Ga(ue,Y,Me),et={...Ko,bottom:Ko.bottom+(Yo?Ke:0)+Pn},U=et.top,q=Y-et.bottom,Oe=q-U,Ht=p.useMemo(()=>{const u={primary:[],secondary:[]};for(const y of g??[]){const b=W0(y);u[b.axis].push(...b.ys)}return u},[g]),tt=p.useMemo(()=>fs(ie,n,i,Ht.primary),[ie,n,i,Ht]),nt=p.useMemo(()=>fs(_e,o,l,Ht.secondary),[_e,o,l,Ht]),he=i==="log"?Ur(tt[0],tt[1],q,U):Xn(tt[0],tt[1],q,U),fe=l==="log"?Ur(nt[0],nt[1],q,U):Xn(nt[0],nt[1],q,U),Zo=Math.max(2,Math.min(7,Math.round(Oe/Ig))),Rn=(u,y,b,P)=>{const I=Math.min(u,y),O=Math.max(u,y),A=(O-I)*1e-6||1e-6,z=V=>V>=I-A&&V<=O+A,G=V=>P==="log"?e0(I,O,V):uo(I,O,V);for(let V=b;V<=64;V*=2){const xe=G(V).filter(z);if(xe.length<2)continue;if(xe.length<=b)return xe;const $t=(xe.length-1)/(b-1),Ut=Array.from({length:b},(Kg,ui)=>xe[Math.round(ui*$t)]);return Array.from(new Set(Ut))}return[I,O]},Bt=Rn(tt[0],tt[1],Zo,i==="log"?"log":"linear"),Wt=Me?Rn(nt[0],nt[1],Zo,l==="log"?"log":"linear"):[],Qo=(u,y)=>u.length===0?y:Math.max(y,Math.min(Math.round(ue*_g),Math.max(...u.map(b=>as(s(b,u))))+$g)),In=w?et:{left:Qo(Bt,et.left)+(qo?Ke:0),right:(Me?Qo(Wt,et.right):et.right)+(Vo?Ke:0)},X=In.left,Ln=xt.placement==="beside"?xt.columnWidth:0,re=ue-In.right-Ln,me=re-X,Jo=ue-Ln-Ke/2,Ye=me>=Cg&&Oe>=Pg,ee=Ln>0?{x0:re+(Me?In.right:0)+cs,y0:U,x1:ue-Og,y1:q}:void 0,er=T==="none"||ee||Ce?[]:e.map((u,y)=>({x0:X+3,y0:U+6+y*je,x1:X+3+Et(u.label,me-6),y1:U+6+y*je+13})),ne=Xn(t[0],t[1],X,re),Ya=Math.max(2,Math.min(8,Math.round(me/Rg))),vt=Rn(t[0],t[1],Ya,"linear"),qa=p.useMemo(()=>{const u=[],y=vt.length-1;if(y<0)return u;const b=as,P=6,I=A=>{const z=vt[A],G=r(z,t,vt),V=ne(z),xe=b(G),$t=A===0?"start":A===y?"end":"middle",Ut=$t==="start"?V:$t==="end"?V-xe:V-xe/2;return{x:V,text:G,anchor:$t,leftEdge:Ut,rightEdge:Ut+xe}},O=I(0);if(u.push({x:O.x,text:O.text,anchor:O.anchor}),y>=1){const A=I(y);if(A.leftEdge>=O.rightEdge+P){let z=O.rightEdge;for(let G=1;G<y;G++){const V=I(G);V.leftEdge>=z+P&&V.rightEdge<=A.leftEdge-P&&(u.push({x:V.x,text:V.text,anchor:V.anchor}),z=V.rightEdge)}u.push({x:A.x,text:A.text,anchor:A.anchor})}}return u},[vt,t,ne,r]),tr=(u,y)=>{const b=new Set,P=u.length;if(P===0||(b.add(0),P===1))return b;const I=16,O=y(u[0]),A=y(u[P-1]);if(Math.abs(A-O)>=I){let z=O;for(let G=1;G<P-1;G++){const V=y(u[G]);Math.abs(V-z)>=I&&Math.abs(A-V)>=I&&(b.add(G),z=V)}b.add(P-1)}return b},Va=tr(Bt,he),Ka=tr(Wt,fe),Ne=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>{const y=u.axis==="primary"?he:fe,b=u.type??"line";if(b==="band")return u.data.y2?{id:u.id,kind:"band",color:u.color,opacity:u.fillOpacity??Dg,d:Oa(u.data.x,u.data.y,u.data.y2,ne,y)}:{id:u.id,kind:"noop"};if(b==="scatter"){const A=u.data.x.map((z,G)=>({cx:ne(z),cy:y(u.data.y[G])}));return{id:u.id,kind:"scatter",color:u.color,points:A}}const P=b==="step"?Zp:Xr,I=(u.data.bridges??[]).filter(A=>Kp(u.data.x,u.data.y,A,ne,y)),O=[...new Set([...u.data.breaks??[],...I.map(A=>A.to)])].sort((A,z)=>A-z);return{id:u.id,kind:"stroked",color:u.color,dashed:u.dashed??!1,uncertainty:Jp(u.data.x,u.data.reckoned??[],ne,y),segments:Qp(u.data.x,u.data.y,ne,y,P,O,u.data.spans,u.data.reckoned),modelled:I.map(A=>({basis:A.basis,d:Xr([u.data.x[A.to-1],...A.t,u.data.x[A.to]],[u.data.y[A.to-1],...A.v,u.data.y[A.to]],ne,y)})),tail:u.data.x.length>0&&(u.data.reckoned??[]).some(A=>A.to>=u.data.x.length-1)?{cx:ne(u.data.x[u.data.x.length-1]),cy:y(u.data.y[u.data.y.length-1])}:null,observed:[...new Set(I.flatMap(A=>[A.to-1,A.to]))].map(A=>({cx:ne(u.data.x[A]),cy:y(u.data.y[A])}))}}),[e,ne,he,fe]),qe=p.useMemo(()=>c?c.map(u=>{const y=u.axis??"primary",b=e.filter(I=>I.axis===y&&I.type!=="band"&&!I.dashed),P=u.kind==="limit"?b.some(I=>{const O=I.data.y.filter(A=>Number.isFinite(A));return O.length>0&&La(O[O.length-1],u.value,u.bad)}):u.kind==="target"&&b.some(I=>bg(I.data.y,u.value));return{id:u.id,label:u.label,spokenLabel:u.spokenLabel,value:u.value,kind:u.kind,passed:P,currency:yn(u.reading,{drawsReckoning:!0}),tone:wg(u.kind,P),dashed:u.kind!=="marker",y:y==="primary"?he(u.value):fe(u.value)}}):[],[c,e,he,fe]),yt=p.useMemo(()=>{const u=(y,b,P)=>Math.max(y,Math.min(P,b));return(c??[]).flatMap(y=>{if(y.kind!=="limit"||!Number.isFinite(y.value))return[];const b=y.axis??"primary",P=b==="primary"?he:fe,I=P(y.value),O=y.bad==="above"?-1:1,A=y.label||`the limit at ${s(y.value)}`;return e.filter(z=>z.axis===b&&z.data.x.length>0&&(z.type??"line")!=="band"&&!z.dashed).flatMap(z=>qp({y:z.data.y,cx:z.data.x.map(ne),cy:z.data.y.map(P),limit:y.value,limitY:I,bad:y.bad,breaks:z.data.breaks,step:z.type==="step"||z.type==="scatter",minGapPx:De}).slice(Ye?0:-1).map(G=>{const V=s(z.data.y[G.index]),xe=r(z.data.x[G.index],t);return{key:`${y.id}-${z.id}-${G.index}`,color:z.color,x:u(X+De/2+1,G.x-ds*(G.entered?1:-1),re-De/2-1),y:u(U+De/2+1,G.y+O*ds,q-De/2-1),text:G.entered?G.spells>1?`${z.label} went past ${A} ${G.spells} times from ${xe}, first reading ${V}`:`${z.label} went past ${A} at ${xe}, reading ${V}`:`${z.label} was already past ${A} when this window began at ${xe}, reading ${V}`}}))})},[c,e,ne,he,fe,r,s,t,X,re,U,q,Ye]),le=(()=>{if(!$e||ae===null||w)return;if(ee&&Uo){const I={x0:ee.x0,y0:q-ae.h,x1:ee.x0+ae.w,y1:q},O=U+(T==="none"||Ce?0:e.length*je+6);return I.x1<=ee.x1&&I.y0>=O?I:void 0}const u=De/2,y=[...e.filter(I=>(I.type??"line")!=="band").flatMap(I=>{const O=I.axis==="primary"?he:fe,A=I.data.x.map(ne),z=I.data.y.map(O);return I.type==="scatter"?A.map((G,V)=>({cx:[G],cy:[z[V]]})):[{cx:A,cy:z}]}),...qe.map(I=>({cx:[X,re],cy:[I.y,I.y]}))],b=[...yt.map(I=>({x0:I.x-u,y0:I.y-u,x1:I.x+u,y1:I.y+u})),...T==="none"||ee||Ce?[]:e.map((I,O)=>({x0:X+3,y0:U+6+O*16,x1:X+3+Math.min(I.label.length*6+8,me-6),y1:U+6+O*16+13}))],P=Hp({plot:{x0:X,y0:U,x1:re,y1:q},card:{width:ae.w,height:ae.h},traces:y,obstacles:b});return P?{x0:P.x,y0:P.y,x1:P.x+ae.w,y1:P.y+ae.h}:void 0})(),ot=p.useMemo(()=>{if(!Ye)return new Map;const u=De/2;return gg({labels:qe.filter(y=>y.label).map(y=>({id:y.id,width:(y.label?.length??0)*mn+(y.currency.held?xn:0),lineY:y.y})),plot:ee??{x0:X,y0:U,x1:re,y1:q},obstacles:[...le?[le]:[],...yt.map(y=>({x0:y.x-u,y0:y.y-u,x1:y.x+u,y1:y.y+u})),...T==="none"||Ce?[]:e.map((y,b)=>({x0:ee?ee.x0:X+3,y0:U+6+b*je,x1:(ee?ee.x0:X+3)+Et(y.label,ee?ee.x1-ee.x0:me-6),y1:U+6+b*je+13}))],traces:(ee?[]:e).filter(y=>(y.type??"line")!=="band").map(y=>({cx:y.data.x.map(ne),cy:y.data.y.map(y.axis==="primary"?he:fe)}))})},[Ye,le,ee,qe,yt,T,Ce,e,ne,he,fe,X,re,U,q,me]),Za=(()=>{const u=U+6;if(T==="none"||Ce||e.length===0)return u;const y=ee?ee.x0:X+3,b=y+Math.max(...e.map(O=>Et(O.label,ee?ee.x1-ee.x0:me-6))),P=qe.flatMap(O=>{const A=ot.get(O.id);if(!O.label||!A)return[];const z=O.label.length*mn+(O.currency.held?xn:0),G=A.anchor==="end"?A.x-z:A.x;return[{x0:G,y0:A.y-9,x1:G+z,y1:A.y+2}]});le&&P.push(le);const I=e.length*je-3;for(let O=u;O+I<=q;O+=je){const A={x0:y,y0:O,x1:b,y1:O+I};if(!P.some(z=>A.x0<z.x1&&z.x0<A.x1&&A.y0<z.y1&&z.y0<A.y1))return O}return u})(),Qa=e.flatMap(u=>{const y=Ne.find(A=>A.id===u.id),b=y?.kind==="stroked"?y.modelled.map(A=>A.basis):[],P=u.data.reckoned??[];if(P.length===0&&b.length===0)return[];const O=[...new Set([...P.map(A=>A.basis),...b])].map(A=>`${u.label}: part of this trace is reckoned, ${Fp(A)}, not measured`);return P.some(A=>A.bandLo&&A.bandHi)&&O.push(`${u.label}: ${Wg}`),O}),Ja=qe.flatMap(u=>{const y=u.spokenLabel??u.label??u.id,b=[];return u.passed&&u.kind==="limit"&&b.push(`${y}: limit passed`),u.passed&&u.kind==="target"&&b.push(`${y}: target reached`),u.currency.held&&b.push(Vs(y,u.currency.caption)),u.label&&!ot.get(u.id)&&b.length===0&&b.push(u.spokenLabel??u.label),b}),Tn=[...Qa,...Ja],ei=[v??"Telemetry line chart",...hg(g??[]),...Tn].join("; "),On=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>S==="value"?Xp(u):u),[e,S]),Nn=p.useMemo(()=>D?Gp(On):[],[D,On]),bt=Math.min(t[0],t[1]),wt=Math.max(t[0],t[1]),ti=S==="value"?(wt-bt)*Eg:void 0;function nr(u){const y=On.map(b=>{const P=Up(b,u,ti),I=b.format??s,O=b.axis==="primary"?he:fe,A=(b.type??"line")==="band";return P===null?{id:b.id,label:b.label,color:b.color,value:null}:{id:b.id,label:b.label,color:b.color,value:A&&P.y2!==void 0?`${I(P.y)} to ${I(P.y2)}`:I(P.y),currency:P.currency==="measured"?void 0:P.currency,modelled:P.currency==="modelled",y:A?void 0:O(P.y)}});if(Ye)for(const b of qe)b.kind!=="marker"&&y.push({id:`threshold-${b.id}`,label:b.kind,color:b.tone.label,value:b.label??s(b.value),detail:!0,currency:b.currency.held?b.currency.mark==="modelled"?"modelled":"held":void 0,modelled:b.currency.held&&b.currency.mark==="modelled"});return{heading:(j??r)(u,t),rows:y}}function or(u){const{heading:y,rows:b}=nr(u);return[y,...b.map(P=>`${P.label} ${P.value??"no sample"}${P.currency?`, ${P.currency}`:""}`)].join("; ")}const rr=e.filter(u=>(u.type??"line")!=="band").map(u=>({cx:u.data.x.map(ne),cy:u.data.y.map(u.axis==="primary"?he:fe)})),sr=le?[...rr,Bp(le)]:rr,ar=$e&&!w&&ae!==null&&ae.w>0&&ae.h>0&&!le&&te<R-1;p.useLayoutEffect(()=>{ar&&J({w:_,h:B,form:te+1})},[ar,_,B,te]);const ni=u=>{let y=u,b=Number.POSITIVE_INFINITY;for(const P of Nn)P<bt||P>wt||Math.abs(P-u)<b&&(b=Math.abs(P-u),y=P);return y},Ve=D&&Z!==null&&Z.at>=bt&&Z.at<=wt?ni(Z.at):null,rt=Ve===null?null:nr(Ve),kt=rt!==null&&Ve!==null?Sp({x:ne(Ve),plot:{x0:X,y0:U,x1:re,y1:q},heading:rt.heading,rows:rt.rows,avoid:er,traces:sr}):void 0,oi=le!==void 0&&kt!==void 0&&kt.x0<le.x1&&kt.x1>le.x0&&kt.y0<le.y1&&kt.y1>le.y0;function ri(u){const y=u.currentTarget.getBoundingClientRect(),b=u.clientX-y.left;return b<X||b>re?null:t[0]+(b-X)/(re-X)*(t[1]-t[0])}function si(u){const y=ri(u);if(y===null){ce(b=>b?.source==="pointer"?null:b);return}ce({at:y,source:"pointer"})}function ai(u){const y=Nn.filter(O=>O>=bt&&O<=wt),b={ArrowLeft:u.shiftKey?-10:-1,ArrowRight:u.shiftKey?10:1,Home:-y.length,End:y.length};if(u.key==="Escape"){if(Z===null)return;u.preventDefault(),ce(null),ke("");return}const P=b[u.key];if(P===void 0)return;u.preventDefault();const I=Wr(y,Ve,P);I!==null&&(ce({at:I,source:"keys"}),ke(or(I)))}function ii(u){try{we(u.currentTarget.matches(":focus-visible"))}catch{we(!0)}if(Z!==null)return;const y=Wr(Nn.filter(b=>b>=bt&&b<=wt),null,0);y!==null&&(ce({at:y,source:"keys"}),ke(or(y)))}function li(){we(!1),ce(u=>u?.source==="keys"?null:u),ke("")}const ci=D?{tabIndex:0,onPointerMove:si,onPointerLeave:()=>ce(u=>u?.source==="pointer"?null:u),onKeyDown:ai,onFocus:ii,onBlur:li}:{},Xt={scaleX:ne,scaleYPrimary:he,scaleYSecondary:fe,plotX0:X,plotX1:re,plotY0:U,plotY1:q,uid:K,labels:Ye},di=W&&g?Y0(g,Xt):()=>!1,Fn=`plot-layer-clip-${K}`;if(me<=0||Oe<=0)return a.jsx("svg",{width:Math.max(0,ue),height:Math.max(0,Y),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:a.jsx("title",{children:"Chart too small to render"})});const ir=a.jsxs("svg",{width:ue,height:Y,role:yt.length>0||D?"group":"img","aria-label":ei,"aria-describedby":D?`${K}-crosshair-hint`:void 0,...ci,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...D?{touchAction:"pan-y",outline:Je?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[g&&g.length>0&&a.jsx("defs",{children:a.jsx("clipPath",{id:Fn,children:a.jsx("rect",{x:X,y:U,width:me,height:Oe})})}),Tn.length>0&&a.jsx("title",{children:Tn.join("; ")}),a.jsx("rect",{x:X,y:U,width:me,height:Oe,fill:"var(--color-surface-panel)"}),g&&g.length>0&&a.jsx("g",{clipPath:`url(#${Fn})`,children:a.jsx(Kn,{layers:g,frame:Xt,pass:"background"})}),!w&&Bt.map((u,y)=>{const b=he(u);return a.jsxs(Gt.Fragment,{children:[a.jsx("line",{x1:X,y1:b,x2:re,y2:b,stroke:"var(--color-border-subtle)",strokeWidth:1}),Va.has(y)&&a.jsx("text",{x:X-4,y:b,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,Bt)})]},`py-${y}`)}),!w&&Wt.map((u,y)=>Ka.has(y)?a.jsx("text",{x:re+4,y:fe(u),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,Wt)},`sy-${y}`):null),!h&&!w&&vt.map((u,y)=>a.jsx("line",{x1:ne(u),y1:U,x2:ne(u),y2:q,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${y}`)),!h&&!w&&qa.map((u,y)=>a.jsx("text",{x:u.x,y:q+14,textAnchor:u.anchor,fill:"var(--color-text-faint)",fontSize:11,children:u.text},`xl-${y}`)),Yo&&a.jsx("text",{x:(X+re)/2,y:Y-Pn-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:eo(L,me)}),qo&&a.jsx("text",{x:Ke/2,y:(U+q)/2,transform:`rotate(-90 ${Ke/2} ${(U+q)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:eo(E,Oe)}),Vo&&a.jsx("text",{x:Jo,y:(U+q)/2,transform:`rotate(90 ${Jo} ${(U+q)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:eo(C,Oe)}),W&&Ag(X,re,U,q,m).filter(u=>!di(u.x,u.y)).map(u=>a.jsx("circle",{cx:u.x,cy:u.y,r:1,fill:"var(--color-text-faint)",opacity:.35},u.key)),!w&&a.jsxs(a.Fragment,{children:[a.jsx("line",{x1:X,y1:U,x2:X,y2:q,stroke:"var(--color-border-strong)",strokeWidth:1}),a.jsx("line",{x1:X,y1:q,x2:re,y2:q,stroke:"var(--color-border-strong)",strokeWidth:1}),Me&&a.jsx("line",{x1:re,y1:U,x2:re,y2:q,stroke:"var(--color-border-strong)",strokeWidth:1})]}),Ne.filter(u=>u.kind==="band").map(u=>a.jsx("path",{d:u.d,fill:u.color,fillOpacity:u.opacity,stroke:"none"},u.id)),Ne.filter(u=>u.kind==="stroked").flatMap(u=>u.uncertainty.map((y,b)=>a.jsx("path",{d:y.d,"data-band-kind":y.kind,fill:u.color,fillOpacity:Hg,stroke:y.kind==="bound"?u.color:"none",strokeOpacity:y.kind==="bound"?Bg:void 0,strokeWidth:y.kind==="bound"?1:void 0},`${u.id}-band-${b}`))),Ne.filter(u=>u.kind==="stroked").flatMap(u=>u.segments.map((y,b)=>a.jsxs(Gt.Fragment,{children:[Q&&y.basis===void 0&&ls(y.d,q)&&a.jsx("path",{d:ls(y.d,q)??void 0,fill:u.color,fillOpacity:.12,stroke:"none"}),a.jsx("path",{d:y.d,"data-stream-status":y.status,"data-reckoning-basis":y.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:y.basis!==void 0?us:void 0,strokeDasharray:y.basis!==void 0?hs:u.dashed?"4 3":void 0})]},`${u.id}-${b}`))),Ne.filter(u=>u.kind==="stroked").flatMap(u=>u.modelled.map((y,b)=>a.jsx("path",{d:y.d,"data-reckoning-basis":y.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:us,strokeDasharray:hs},`${u.id}-modelled-${b}`))),Ne.map(u=>u.kind==="stroked"&&u.tail!==null?a.jsx(Ra,{kind:"modelled",x:u.tail.cx,y:u.tail.cy},`${u.id}-tail`):null),Ne.filter(u=>u.kind==="stroked").flatMap(u=>u.observed.map((y,b)=>a.jsx("circle",{cx:y.cx,cy:y.cy,r:yg,fill:u.color,"data-observed-sample":""},`${u.id}-observed-${b}`))),Ne.filter(u=>u.kind==="scatter").flatMap(u=>u.points.map((y,b)=>a.jsx("circle",{cx:y.cx,cy:y.cy,r:Lg,fill:u.color},`${u.id}-${b}`))),e.map(u=>{if(!u.headMark)return null;const y=u.axis==="primary"?he:fe;let b=u.data.x.length-1;for(;b>=0&&!(Number.isFinite(u.data.x[b])&&Number.isFinite(u.data.y[b]));)b-=1;return b<0?null:a.jsx("circle",{cx:ne(u.data.x[b]),cy:y(u.data.y[b]),r:vg,fill:u.headMark==="dot"?u.color:"var(--color-surface-panel)",stroke:u.color,strokeWidth:u.headMark==="dot"?0:1.5,"data-head-mark":u.headMark},`${u.id}-head`)}),g&&g.length>0&&a.jsx("g",{clipPath:`url(#${Fn})`,children:a.jsx(Kn,{layers:g,frame:Xt,pass:"foreground"})}),qe.map(u=>a.jsxs(Gt.Fragment,{children:[a.jsx("line",{x1:X,y1:u.y,x2:Q&&u.kind==="marker"?X+24:re,y2:u.y,stroke:u.tone.line,strokeWidth:1,strokeDasharray:u.dashed?"4 3":void 0,"data-threshold-kind":u.kind,"data-threshold-passed":u.passed||void 0}),Q&&u.kind==="marker"&&u.label&&a.jsx("text",{x:X+28,y:u.y+3.5,fill:u.tone.label,fontSize:10,children:u.label}),!(Q&&u.kind==="marker")&&u.label&&ot.get(u.id)&&a.jsxs("text",{x:ot.get(u.id)?.x,y:ot.get(u.id)?.y,textAnchor:ot.get(u.id)?.anchor,fill:u.tone.label,fontSize:10,children:[u.label,u.currency.held&&a.jsx(io,{size:10,kind:u.currency.mark??"held"})]})]},u.id)),yt.map(u=>a.jsx(Yp,{x:u.x,y:u.y,size:De,color:u.color,text:u.text},u.key)),T!=="none"&&e.map((u,y)=>{const b=Ce?Cn.positions[y]:void 0,P=b?Y-Pn+2+b.row*je:Za+y*je;if(!Ce&&P+13>q)return null;const I=b?nn+b.x:ee?ee.x0:X+3,O=Ce?ue-2*nn:ee?ee.x1-ee.x0:me-6,A=Et(u.label,O),z=Math.max(1,Math.floor((A-8)/6)),G=u.label.length>z?`${u.label.slice(0,Math.max(1,z-1))}...`:u.label;return a.jsxs(Gt.Fragment,{children:[a.jsx("rect",{x:I,y:P,width:A,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),a.jsx("text",{x:I+3,y:P+10,fill:u.color,fontSize:10,children:G})]},u.id)}),g&&g.length>0&&Ye&&a.jsx(Kn,{layers:g,frame:Xt,pass:"caption"}),rt!==null&&Ve!==null&&a.jsx(Ep,{x:ne(Ve),plot:{x0:X,y0:U,x1:re,y1:q},heading:rt.heading,rows:rt.rows,avoid:er,traces:sr})]}),lr=$e?a.jsx("div",{ref:Ae,"data-plot-card":"",style:{position:"absolute",left:le?.x0??0,top:le?.y0??0,visibility:le&&!oi?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof M=="function"?M({width:me-is*2,height:Oe-is*2,form:te}):M}):null;return D?a.jsxs(a.Fragment,{children:[ir,lr,a.jsx(Be,{id:`${K}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),a.jsx(Be,{role:"status","aria-live":"polite",children:Xe})]}):a.jsxs(a.Fragment,{children:[ir,lr]})}function fs(e,t,n,o=[]){if(t)return t;if(e.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let r=[...e.flatMap(Xg),...o];return n==="log"&&(r=r.filter(s=>s>0)),r.length===0?n==="log"?[1,10]:[0,1]:[Math.min(...r),Math.max(...r)]}function Yg(e,t){if(e===0)return"0";const n=Math.abs(e);if(n>=1e6){const o=t?Qn(t,1e6,1):1;return`${(e/1e6).toFixed(o)}M`}if(n>=1e3){const o=t?Qn(t,1e3,1):1;return`${(e/1e3).toFixed(o)}k`}if(Number.isInteger(e))return String(e);if(n<.01){const o=Math.floor(Math.log10(n)),r=e/10**o;return Math.abs(r-1)<1e-9?`1e${o}`:`${r.toFixed(1)}e${o}`}return e.toFixed(t?Qn(t,1,2):2)}const qg=p.createContext(null);function Vg(e,t){const n=p.useContext(qg),o=n?.setFooter,r=n?.setDirty;p.useEffect(()=>(o?.(e),()=>o?.(null)),[o,e]),p.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function Wx(e){const{onSave:t,value:n,saved:o,saveLabel:r="Save",extra:s,disabled:i}=e,l=p.useRef(null);l.current===null&&(l.current={v:n});const c=!dt(n,l.current.v)&&!dt(n,o),d=p.useRef(t);d.current=t;const h=p.useMemo(()=>a.jsxs(a.Fragment,{children:[s,a.jsx(rl,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:i,children:r})]}),[s,i,r]);Vg(h,c)}export{Be as $,Qm as A,cn as B,Bm as C,Nm as D,um as E,ml as F,km as G,lx as H,gl as I,$m as J,Gm as K,Rm as L,Xm as M,Hm as N,Um as O,Lx as P,Dm as Q,nx as R,ox as S,Lm as T,ja as U,xm as V,Im as W,kd as X,Ym as Y,hm as Z,vm as _,ex as a,oa as a$,dt as a0,dm as a1,W0 as a2,bn as a3,Vg as a4,Wx as a5,Hx as a6,_n as a7,Di as a8,qg as a9,tu as aA,jm as aB,io as aC,fx as aD,px as aE,gx as aF,Sm as aG,Ns as aH,Cm as aI,Px as aJ,Ep as aK,oe as aL,vx as aM,Cs as aN,Ra as aO,sx as aP,rx as aQ,ea as aR,Eh as aS,dx as aT,Am as aU,mx as aV,be as aW,n0 as aX,Vu as aY,Mr as aZ,Io as a_,xa as aa,ln as ab,yn as ac,Pe as ad,bo as ae,Qe as af,Is as ag,bu as ah,tx as ai,bx as aj,Km as ak,Pu as al,uh as am,_t as an,Fm as ao,ah as ap,So as aq,kx as ar,$x as as,Ix as at,Ax as au,Bh as av,Tx as aw,ux as ax,hx as ay,Mm as az,Jm as b,Ys as b0,wx as b1,qs as b2,Lo as b3,ra as b4,Nu as b5,bl as b6,bm as b7,_o as b8,ym as b9,Bx as bA,Dx as bB,zx as bC,yx as bD,Mx as bE,Uu as bF,Td as bG,Zi as bH,ol as bI,vn as bJ,xx as bK,_x as bL,fl as bM,$r as bN,aa as bO,jx as bP,Rs as ba,Ox as bb,Fr as bc,r0 as bd,Fx as be,Cx as bf,Op as bg,wm as bh,Sp as bi,Nx as bj,Mn as bk,Fp as bl,Sx as bm,Vs as bn,ro as bo,qd as bp,Hu as bq,To as br,Rx as bs,Ex as bt,ma as bu,df as bv,zt as bw,Ju as bx,Mo as by,wl as bz,Pm as c,Em as d,rl as e,Vm as f,Zm as g,qm as h,wd as i,fm as j,zm as k,gm as l,xl as m,pm as n,Mh as o,mm as p,Lh as q,cx as r,ix as s,Tm as t,Om as u,ax as v,Wm as w,_m as x,vl as y,$d as z};
