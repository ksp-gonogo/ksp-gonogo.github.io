import{j as i}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import k,{css as H,createGlobalStyle as ai}from"./ext-styled-components-DAuodqsN.js";import{r as p,R as Yt}from"./ext-react-C0MU9AHG.js";import{cG as Rt,cL as sn,b9 as ds,l as ii,a_ as lt,b0 as us,ci as pt,aN as Gt,cn as hs,b1 as li}from"./view-clock-formula-DQDiIv0b.js";import"./ksp-enum-names-U5YZiXlo.js";import{G as co,z as ci}from"./screen-BsRnpjWn.js";import{m as Qn,l as fs,T as se,d as ye,x as gt,a1 as uo,N as an,w as Ot,a2 as ho,a3 as di,a4 as ui,a5 as hi,a6 as ps,a7 as fi,G as sr,a8 as pi,a9 as gi,aa as mi,ab as xi,ac as vi,n as yi,Q as fo,Y as dt,ad as bi,ae as wi,J as ki,j as gs,Z as $i,k as Nt,K as ms,af as _i,S as xs,ag as vs,U as ar,A as qt,f as ir,ah as lr,s as Fn,ai as Mi,aj as ji}from"./contributionsRead-BNtFQUx6.js";import{I as Si}from"./index-D-7u2s7c.js";import"./lagrange-BLgYr1A-.js";import{R as Ei}from"./use-transmissions-CxaZRQxv.js";import{gridToPixels as Ai}from"./ext-ui-kit-grid-CYQFMmYG.js";import{r as Ci}from"./ext-react-dom-DCF8ZnaJ.js";const Gg={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function qg({children:e,layout:t="inline",...n}){return i.jsx(Ri,{$layout:t,...n,children:e})}const Pi={inline:H``,fill:H`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},Ri=k.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>Pi[e]}
`,Ke=H`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,vn=H`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,Ii="data-restoring-focus",Li=120,Ti=120,cr=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function mt(e){const[t,n]=p.useState(null),[o,r]=p.useState(!1),[s,a]=p.useState(!1),[l,c]=p.useState(!1),[d,h]=p.useState(!1),f=p.useRef(null),x=p.useRef(!1),m=p.useRef(!1),g=p.useRef(null),v=e!=null&&e!==""?e:null,$=t!==null&&(o||s||l||d),j=p.useCallback(()=>{g.current!==null&&clearTimeout(g.current),g.current=null},[]),S=p.useCallback(()=>{j(),n(null),r(!1),a(!1),c(!1),h(!1),x.current=!1},[j]);p.useEffect(()=>{if(!d)return;const A=()=>{const I=document.getSelection(),_=I!==null&&!I.isCollapsed&&f.current?.contains(I.anchorNode)===!0;!x.current&&!_&&h(!1)},M=()=>{x.current=!1,A()};return document.addEventListener("pointerup",M),document.addEventListener("selectionchange",A),()=>{document.removeEventListener("pointerup",M),document.removeEventListener("selectionchange",A)}},[d]);const L=p.useCallback(()=>{j(),g.current=setTimeout(()=>{g.current=null,r(!1),c(!1)},Ti)},[j]);if(p.useEffect(()=>j,[j]),p.useEffect(()=>{if(t!==null)return window.addEventListener("scroll",S,!0),window.addEventListener("resize",S),()=>{window.removeEventListener("scroll",S,!0),window.removeEventListener("resize",S)}},[t,S]),p.useEffect(()=>{if(!$)return;const A=M=>{M.key==="Escape"&&(M.stopPropagation(),S())};return document.addEventListener("keydown",A,!0),()=>document.removeEventListener("keydown",A,!0)},[$,S]),v===null)return{anchor:{},tip:null};const E=A=>{const M=A.getBoundingClientRect();n({top:M.bottom,left:M.left,above:window.innerHeight-M.bottom<Li,anchorTop:M.top})};return{anchor:{"data-tooltip":v,onPointerEnter:A=>{j(),E(A.currentTarget),r(!0)},onPointerLeave:L,onPointerDown:()=>{m.current=!0,S()},onPointerUp:()=>{m.current=!1},onFocus:A=>{m.current||document.documentElement.hasAttribute(Ii)||(E(A.currentTarget),a(!0))},onBlur:()=>{a(!1),!o&&!l&&n(null)}},tip:$?Ci.createPortal(i.jsx(Oi,{ref:f,at:t,text:v,onPress:()=>{x.current=!0,h(!0)},onPointerEnter:()=>{j(),c(!0)},onPointerLeave:L}),document.body):null}}const Oi=p.forwardRef(function({at:t,text:n,onPress:o,onPointerEnter:r,onPointerLeave:s},a){const l=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return i.jsx(Fi,{ref:a,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),o()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...l,left:t.left,"--tip-left":`${t.left}px`},children:n})});function ot(e,t){return(...n)=>{typeof e=="function"&&e(...n),t?.(...n)}}function Pe({text:e,children:t,focusable:n=!1,announce:o=!0}){const{anchor:r,tip:s}=mt(e);if(e==null||e==="")return t;const a=t.props,l=a["aria-label"],c=!o||typeof l=="string"&&cr(l).includes(cr(e));return i.jsxs(i.Fragment,{children:[p.cloneElement(t,{"data-tooltip":e,onPointerEnter:ot(a.onPointerEnter,r.onPointerEnter),onPointerLeave:ot(a.onPointerLeave,r.onPointerLeave),onPointerDown:ot(a.onPointerDown,r.onPointerDown),onPointerUp:ot(a.onPointerUp,r.onPointerUp),onFocus:ot(a.onFocus,r.onFocus),onBlur:ot(a.onBlur,r.onBlur),"aria-description":c?a["aria-description"]:e,tabIndex:n?a.tabIndex??0:a.tabIndex}),s,n&&i.jsx(Ni,{})]})}const Ni=ai`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Fi=k.div`
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
`;function ys(e){let t="";return p.Children.forEach(e,n=>{if(typeof n=="string"||typeof n=="number"){t+=String(n);return}p.isValidElement(n)&&(t+=ys(n.props.children))}),t.replace(/\s+/g," ").trim()}function bs({label:e,children:t,disabledReason:n}){return zi({label:e,children:t,disabledReason:n})}function zi({label:e,children:t,disabledReason:n}){const o=e!==void 0&&e!==""&&e!==ys(t)?e:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function ws(e,t){return e===!0&&t!==void 0&&t!==""}function ks(e){e.preventDefault(),e.stopPropagation()}function $s(e,t,n){return t===null||e.props["data-tooltip"]!==void 0?e:i.jsx(Pe,{text:t,announce:n,children:e})}const po="max(0.075em, 1.25px)",oe={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},He=k.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Jn=oe.held.domSize,eo=oe.modelled.domSize,Di=H`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Jn} + 0.14em);
  }
`,Hi=H`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${eo} + 0.14em);
  }
`;function Bi(e){return H`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${oe[e].hollowDomSize} + 0.14em);
    }
  `}function _s(e,t=!1){return t?Bi(e):e==="current"?null:e==="modelled"?Hi:Di}const Wi=k.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Jn};
  height: ${Jn};
  background: ${oe.held.color};
`,Xi=k.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${eo};
  height: ${eo};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${oe.modelled.color};
`,go=e=>H`
  position: absolute;
  right: 0;
  top: 0;
  width: ${oe[e].hollowDomSize};
  height: ${oe[e].hollowDomSize};
`,Ui=k.span`
  ${go("current")}
  border: ${po} solid ${oe.current.color};
  border-radius: var(--radius-circle);
`,Yi=k.span`
  ${go("held")}
  border: ${po} solid ${oe.held.color};
`,Gi=k.span`
  ${go("modelled")}
  --stroke: ${po};
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
`,qi={current:Ui,held:Yi,modelled:Gi};function Ms({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?qi[e]:e==="modelled"?Xi:Wi;return i.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const Vi=k.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>_s(e??"held",t)}
`;function mo({caption:e,kind:t="held",elsewhere:n=!1,children:o,...r}){const{anchor:s,tip:a}=mt(e);return i.jsxs(Vi,{$kind:t,$elsewhere:n,...r,...s,children:[o,i.jsx(Ms,{kind:t,elsewhere:n}),e!==null&&i.jsxs(He,{"data-unit-currency":"",children:[", ",e]}),a]})}const Ki=p.forwardRef(function({variant:t="default",tone:n,size:o="md",pressed:r,predictedOutcome:s,disabledReason:a,marked:l,type:c="button",...d},h){const f=ws(d.disabled,a),x=bs({label:d["aria-label"],children:d.children,disabledReason:f?a:void 0}),{disabled:m,onClick:g,children:v,...$}=d;return $s(i.jsx(sl,{ref:h,$variant:t,$tone:n??(t==="primary"?"go":"neutral"),$size:o,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,"data-held-button":l?"":void 0,...$,disabled:f?void 0:m,...f?{"aria-disabled":!0}:{},onClick:f?ks:g,type:c,children:l?i.jsx(Zi,{kind:l.kind,caption:l.caption,children:v}):v}),x,f)}),Zi=k(mo)`
  position: static;

  &::after {
    content: none;
  }

  & > [data-held-mark] {
    top: 3px;
    right: 3px;
  }
`;function Qi(e){return e==="neutral"?"go":e}const xo=e=>H`
  background: ${Qn[e]};
  border-color: ${Qn[e]};
  color: ${fs[e]};
`,Ji=e=>H`
  border-color: ${se[e]};
  color: ${ye[e]};
`,dr={default:H`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:H`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},el=H`
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
`,tl=H`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function nl(e,t){return e==="text"?el:e==="primary"?xo(t):t==="neutral"?dr[e]:H`
    ${dr[e]}
    ${Ji(t)}
  `}const ol=H`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,rl={sm:H`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:H`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},sl=k.button`
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

  ${({$size:e})=>rl[e]}
  ${({$variant:e,$tone:t})=>nl(e,t)}
  ${({$pressed:e,$tone:t})=>e?xo(Qi(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":ol}
  ${Ke}
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

  ${({$variant:e})=>e==="text"?tl:""}
`,Vg=k.button`
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
  ${Ke}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,al=k.button`
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
    ${xo("go")}
  }
  ${Ke}
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
`,il=p.forwardRef(function({pressed:t,disabledReason:n,...o},r){const s=ws(o.disabled,n),a=bs({label:o["aria-label"],children:o.children,disabledReason:s?n:void 0}),{disabled:l,onClick:c,...d}=o;return $s(i.jsx(al,{ref:r,"aria-pressed":t,...d,disabled:s?void 0:l,...s?{"aria-disabled":!0}:{},onClick:s?ks:c}),a,s)}),Kg=k.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,ll=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,Zg=k.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,cl=k.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Qg=k.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,Jg=k.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,vo=H`
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

  ${Ke}

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
`,dl=k.input`
  ${vo}
  width: 100%;
`,em=k.select`
  ${vo}
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
`,tm=k.textarea`
  ${vo}
  width: 100%;
  resize: vertical;
`;function ul(e){if(e===void 0)return null;const{value:t}=uo(e.magnitude,e.unit);return t===an?null:t}function js(e,t){const n=ul(t);return n===null?e:`${e}, as of ${n}`}const yo="modelled to SCET";function Ss(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function ur(e){return sn(e.value)||Rt(e.value)?{shown:e.value,held:!1,mark:null,isStatic:sn(e.value),isDeterministic:Rt(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:js(gt(e.grade),e.asOfUt)}}function yn(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:sn(e),isDeterministic:Rt(e),caption:null,band:null};const n=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!Rt(e.value)){const o=e.reckoning.modelled;if(e.state==="held"){const s=ur(e),a=e.value===void 0,l=s.held||a,c=s.caption??(a?"":null);return{...s,shown:o,held:l,mark:l?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:n}}const r=e.reckoning.beyondReceived;return{shown:o,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?yo:null,band:n}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:sn(e.value),isDeterministic:Rt(e.value),caption:null,band:n}:e.state==="held"?{...ur(e),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Es(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function hl(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:yo}:null;if(e.state==="held"){const n=js(gt(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function nm(e){return e===void 0?null:typeof e!="string"?hl(e):{kind:"held",caption:gt(e)}}function bo(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function om(e,t){const n=bo(t);return n===void 0?e:{state:"held",value:e,grade:n,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}function wo(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function fl(e={}){return wo(t=>Ot(t,e))}const pl=.01;function rm({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const r=Math.abs(t(n)-t(o));return(e?Math.min(r,1-r):r)<=pl}}}function to(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(r=>!n.readsAsOne(e,r))}/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=e=>{const t=ml(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},vl=p.createContext({}),yl=()=>p.useContext(vl),bl=p.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:o,className:r="",children:s,iconNode:a,...l},c)=>{const{size:d=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:x="currentColor",className:m=""}=yl()??{},g=o??f?Number(n??h)*24/Number(t??d):n??h;return p.createElement("svg",{ref:c,...zn,width:t??d??zn.width,height:t??d??zn.height,stroke:e??x,strokeWidth:g,className:As("lucide",m,r),...!s&&!xl(l)&&{"aria-hidden":"true"},...l},[...a.map(([v,$])=>p.createElement(v,$)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=(e,t)=>{const n=p.forwardRef(({className:o,...r},s)=>p.createElement(bl,{ref:s,iconNode:t,className:As(`lucide-${gl(hr(e))}`,`lucide-${e}`,o),...r}));return n.displayName=hr(e),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],kl=N("arrow-down",wl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],_l=N("arrow-left",$l);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],jl=N("arrow-right",Ml);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],El=N("arrow-up-to-line",Sl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Cl=N("arrow-up",Al);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Rl=N("bell",Pl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ll=N("check",Il);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ol=N("chevron-down",Tl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Fl=N("chevron-left",Nl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Dl=N("chevron-right",zl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Bl=N("chevron-up",Hl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],Xl=N("columns-2",Wl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],Yl=N("computer",Ul);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],ql=N("corner-down-left",Gl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Kl=N("database",Vl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ql=N("file-text",Zl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],ec=N("grip",Jl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],nc=N("heart",tc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],rc=N("history",oc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],ac=N("house",sc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],lc=N("info",ic);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],dc=N("joystick",cc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],hc=N("layers",uc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],pc=N("lightbulb-off",fc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],mc=N("lightbulb",gc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],vc=N("lock",xc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],bc=N("maximize",yc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],kc=N("menu",wc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],_c=N("microscope",$c);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],jc=N("minimize",Mc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Ec=N("pause",Sc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Cc=N("pencil",Ac);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Rc=N("play",Pc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Lc=N("plus",Ic);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Oc=N("radio",Tc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Fc=N("rectangle-horizontal",Nc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],Dc=N("rectangle-vertical",zc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],Bc=N("rows-2",Hc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],Xc=N("satellite",Wc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Yc=N("settings",Uc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],qc=N("square",Gc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Kc=N("star",Vc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Qc=N("undo-2",Zc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],ed=N("volume-2",Jc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],nd=N("volume-x",td);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],rd=N("wrench",od);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ad=N("x",sd),id="var(--icon-size-control)",ld={strokeWidth:1.8,"aria-hidden":!0};function F(e,t){const n=p.forwardRef(({label:o,size:r=id,style:s,...a},l)=>{const c=typeof r=="number"?{size:r,style:s}:{style:{width:r,height:r,...s}},d=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return i.jsx(e,{...ld,...t,...d,...a,...c,ref:l})});return n.displayName=e.displayName??e.name,n}const sm=F(ec),am=F(dc),im=F(rc),lm=F(ac),cm=F(lc),dm=F(vc),um=F(Oc),hm=F(ed),fm=F(nd),pm=F(Rl),gm=F(hc),mm=F(Yc),xm=F(Xc),vm=F(bc),ym=F(jc),bm=F(Kl),wm=F(Yl),km=F(Ql),$m=F(Lc,{strokeWidth:2.4}),cd=F(ad),_m=F(Cc),Mm=F(Ll),dd=F(Kc),jm=F(nc),Sm=F(kc),ud=F(_c),Em=F(Rc),Am=F(Ec),Cm=F(qc),Pm=F(Bl),Rm=F(Ol),Im=F(Fl),Lm=F(Dl),Tm=F(_l),Om=F(Cl),Nm=F(jl),Fm=F(kl),zm=F(El),Dm=F(Qc),Hm=F(Xl),Bm=F(Fc),Wm=F(Bc),Xm=F(Dc),Um=F(ql),hd=N("space-helmet",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M10.5 8h3a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 1 0-7z",key:"visor"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),fd=N("space-helmet-visor-up",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M8 7.5C9.5 5 14.5 5 16 7.5",key:"visor"}],["circle",{cx:"12",cy:"12.5",r:"2",fill:"currentColor",key:"face"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),Ym=F(hd),Gm=F(fd),qm=F(rd),Vm=F(mc),Km=F(pc),pd={},gd={byKey:new Map,unaddressed:void 0,separate:!1};function fr(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function md(e,t){if(e.separate!==t.separate||!fr(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!fr(o,t.byKey.get(n)))return!1;return!0}function xd(e,t,n,o){const r=new Map;e!==void 0&&r.set(ho(e),n);for(const[s,a]of Object.entries(t??{}))a!==void 0&&r.set(hi(s),a);return{byKey:r,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function vd(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function yd(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function bd(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,a)=>s.depth-a.depth);let r=!1;for(const s of o)s.resettle(n)&&(r=!0);if(r)for(const s of t)s()}}}function wd(e){const t=new Map,n=new Map,o=new Set,r=e?.root??bd();let s=gd;const a=c=>{let d;for(const h of c){const f=h.position;f!==void 0&&(d===void 0||f.base>d.base)&&(d=f)}return d?.rung},l={root:r,depth:e===void 0?0:e.depth+1,hold(c,d,h){const f=t.get(c);if(h===void 0)f!==void 0&&(f.delete(d),f.size===0&&t.delete(c));else{if(yd(f?.get(d),h))return;f===void 0?t.set(c,new Map([[d,h]])):f.set(d,h)}e===void 0?r.sweep(c):e.hold(c,d,h)},settled:c=>n.get(c),readsAsOneFigure:c=>o.has(c),setPolicy(c){if(!md(s,c)){s=c;for(const d of t.keys())r.sweep(d)}},resettle(c){const d=[...t.get(c)?.values()??[]],h=e?.settled(c),f=s.byKey.get(c)??s.unaddressed??pd,x=f.format??h?.format??a(d),m=f.as??h?.as,g=f.decimals??(s.separate?fi(d,{format:x,as:m}):h?.decimals),v=x===void 0&&m===void 0&&g===void 0?void 0:{...x!==void 0&&{format:x},...m!==void 0&&{as:m},...g!==void 0&&{decimals:g}},$=s.separate&&ps(d,{format:x,as:m,decimals:g}),j=$!==o.has(c);return $?o.add(c):o.delete(c),vd(n.get(c),v)?j:(v===void 0?n.delete(c):n.set(c,v),!0)},attach(){r.family.add(l);for(const c of t.keys())r.sweep(c)},detach(){r.family.delete(l)}};return r.family.add(l),l}const ko={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},Ft=p.createContext(ko);function kd(){return p.useContext(Ft)!==ko}function Zm({children:e,of:t,pins:n,format:o,as:r,decimals:s,separate:a=!1}){const l=p.useContext(Ft),[c]=p.useState(()=>wd(l===ko?void 0:l));return p.useLayoutEffect(()=>(c.attach(),()=>c.detach()),[c]),p.useLayoutEffect(()=>{c.setPolicy(xd(t,n,{format:o,as:r,decimals:s},a))},[c,t,n,o,r,s,a]),i.jsx(Ft.Provider,{value:c,children:e})}function $d(e,t={}){const n=p.useContext(Ft),o=p.useId(),r=ds(e),s=e?.unit,l=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||r===null?void 0:ho(s),c=l===void 0||r===null||s===void 0||di(s)===void 0?void 0:ui(r,s),d=c?.base,h=c?.rung;return p.useLayoutEffect(()=>{if(!(l===void 0||r===null||s===void 0))return n.hold(l,o,{reading:r,unit:s,...d!==void 0&&h!==void 0&&{position:{base:d,rung:h}}}),()=>n.hold(l,o,void 0)},[n,o,l,r,s,d,h]),p.useSyncExternalStore(n.root.subscribe,()=>l===void 0?void 0:n.settled(l),()=>{})}function Qm(e,t={}){const n=p.useContext(Ft),r=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||ds(e)===null||e===null||e===void 0?void 0:ho(e.unit);return p.useSyncExternalStore(n.root.subscribe,()=>r===void 0?!1:n.readsAsOneFigure(r),()=>!1)}const _d=mi,Md={sci:ud,rep:dd},Cs=k.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,jd=k.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?H`
          position: relative;
          ${_s(e,t)}
        `:""}
`,Sd=k.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,Ed=k(He)`
  user-select: none;
`,Ps=k(He)`
  user-select: none;
`,Ad=" ";function Cd(e,t,n,o){if(t===void 0)return null;const r=x=>uo(x.magnitude,x.unit,{...n,format:o}).value,s=(x,m)=>r(m.minus(x)),a=ps([t.lo,t.hi],{...n,format:o});if(!to(e,[t.lo,t.hi],wo(r)))return null;const l=s(t.lo,t.value),c=s(t.value,t.hi),d=x=>/^[-+\u2212]?[0.,\s]*$/.test(x);if(!a&&d(l)&&d(c))return null;const h=r(t.value)===r(e),f={...n,format:o};return{oneFigure:a,plusMinus:!a&&h&&l===c?c:null,lo:r(t.lo),hi:r(t.hi),loSaid:sr(t.lo,f),hiSaid:sr(t.hi,f),kind:t.kind}}function Pd(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function Dn({token:e,className:t,spaced:n}){const o=pi(e,gi(e));if(o==="")return null;const r=xi(o),s=Md[o],a=_d.has(o),l=r!==void 0;return i.jsxs(i.Fragment,{children:[n&&!a?Ad:null,i.jsx(Pe,{text:r,announce:!1,children:i.jsxs(Cs,{$attached:a,$icon:s!==void 0,className:t,"data-unit":e,children:[s?i.jsx(s,{size:"1em"}):l?i.jsx("span",{"aria-hidden":"true",children:o}):o,l&&i.jsxs(Ps,{"data-unit-word":"",children:[" ",r]})]})})]})}function ln({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:r,marked:s,elsewhere:a,...l}){const c=yn(e,{drawsReckoning:r}),d=s!=null&&!c.held&&c.shown!=null?{...c,held:!0,mark:s.kind,caption:s.caption}:c,{shown:h,held:f,mark:x,band:m}=d,g=a!=null&&a!==""&&h!=null,v=x??(g?"current":null),$=g?[d.caption,a].filter(Boolean).join("; "):d.caption,j=$d(h,l),S=kd(),L=o===!0&&S,E=j===void 0?l:{...j,...l},A=uo(h?.magnitude,h?.unit,E),M=h==null||m===null||!f?null:Cd(h,ii(m,h.unit),E,A.rung),{anchor:I,tip:_}=mt(Pd($,M));return e!==void 0||t===void 0?i.jsxs(jd,{className:n,$mark:v,$elsewhere:g,...Es(d),...I,children:[A.value,!L&&i.jsx(Dn,{token:A.symbol,spaced:!0}),M!==null&&i.jsxs(Sd,{"data-unit-band":"",children:[M.oneFigure?i.jsxs(i.Fragment,{children:[" (",i.jsx("span",{"aria-hidden":"true",children:"~"}),i.jsx(Ps,{"data-unit-word":"",children:"approximately "}),M.lo]}):M.plusMinus===null?` (${M.lo} to ${M.hi}`:` ± ${M.plusMinus}`,!L&&i.jsx(Dn,{token:A.symbol,spaced:!0}),M.plusMinus===null?")":null]}),v!==null&&i.jsx(Ms,{kind:v,elsewhere:g}),$!==null&&i.jsxs(Ed,{"data-unit-currency":"",children:[", ",$]}),_]}):typeof t!="string"?i.jsx(Cs,{$attached:!1,$icon:!1,className:n,children:t}):i.jsx(Dn,{token:t,className:n,spaced:!1})}const Rd=k.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function Rs({observed:e,modelled:t,write:n}){if(t==null)return null;if(n===void 0){const o=t;return to(e,o,fl())?i.jsx(pr,{children:i.jsx(ln,{value:o})}):null}return to(e,t,wo(n))?i.jsx(pr,{children:n(t)}):null}function pr({children:e}){return i.jsx(Rd,{"data-modelled-alongside":"",children:i.jsx(mo,{"data-held":"",kind:"modelled",caption:yo,children:e})})}function Jm({value:e}){return i.jsxs(i.Fragment,{children:[i.jsx(ln,{value:e}),i.jsx(Rs,{observed:e.value,modelled:Ss(e)})]})}function $o({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,r=v=>vi(typeof v=="number"?v:v.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,a=Ss(s);if(s?.value!==void 0&&a!==void 0)return i.jsxs(i.Fragment,{children:[r(s.value),i.jsx(Rs,{observed:s.value,modelled:a,write:r})]});const l=yn(o,{drawsReckoning:!0}),{shown:c,held:d,mark:h,caption:f}=l,x=typeof e=="number"?e:c;if(x==null)return an;const m=r(x),g=Es({...l,shown:x});return d?i.jsx(mo,{...g,kind:h??"held",caption:f,children:m}):i.jsx("span",{"data-figure":g["data-figure"],children:m})}function bn(e){const t=p.useRef(null),[n,o]=p.useState(e),[r,s]=p.useState(null);return p.useEffect(()=>{t.current!==r&&s(t.current)}),p.useEffect(()=>{if(!r||typeof ResizeObserver>"u")return;const a=new ResizeObserver(l=>{for(const c of l)c.contentRect.width>0&&c.contentRect.height>0&&o({w:Math.floor(c.contentRect.width),h:Math.floor(c.contentRect.height)})});return a.observe(r),()=>a.disconnect()},[r]),{ref:t,size:n}}const Id='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Is(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),r=n[o+1]??n[o-1];if(r&&r!==e){r.focus();return}const s=t.closest("[data-panel-rail-frame]"),a=s?s.parentElement?.querySelector("[data-panel-body]"):t.closest("[data-panel-body]");if(!a)return;const l=[...a.querySelectorAll(Id)].find(c=>c!==e);if(l){l.focus();return}a.hasAttribute("tabindex")||a.setAttribute("tabindex","-1"),a.focus()}function _o(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const Mo={"in-transit":.18,"awaiting-reply":.5,due:.62,overdue:.82,lost:.95};function Ld(e){const t=e.reachEtaSeconds,n=Td(e);if(t===null||n===null)return Mo[e.predictedPhase];const o=n-t;return Math.max(0,Math.min(1,o/(3*n)))}function Td(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function Od(e){return e.map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:Ld(t),glyph:t.glyph??_o(t.label||t.command),...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function ex({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||co(e)!=="shown"?"none":n||ci({oneWaySeconds:lt("s",e)})==="live"?"badge":t?"strip":"none"}const Nd={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},no={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Fd(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Nd[e.phase]}const wn=new Set(["overdue","lost"]),zd=180,Dd=96;function Ls(e){return Ot(lt("s",Math.max(0,e)))}function Hd(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const Bd=1;function jo(e){const t=Si(),n=p.useRef(t);n.current=t;const[o,r]=p.useState(e),s=p.useRef({eta:e,ut:Hn(t)});return p.useEffect(()=>{const a=s.current.eta;(a===null!=(e===null)||a!==null&&e!==null&&Math.abs(e-a)>=Bd)&&(s.current={eta:e,ut:Hn(n.current)},r(e))},[e]),p.useEffect(()=>{const a=setInterval(()=>{const{eta:l,ut:c}=s.current;if(l===null)return;const d=Hn(n.current);if(d!==void 0){if(c===void 0){s.current={eta:l,ut:d};return}r(Math.max(0,l-(d-c)))}},1e3);return()=>clearInterval(a)},[]),o}function Hn(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function Wd({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":r="In-flight commands",variant:s="inline",onDismiss:a}){const{ref:l,size:c}=bn({w:320,h:0});if(s==="rail")return e.length===0?null:i.jsx(Gd,{items:e,"aria-label":r});if(s==="expanded")return e.length===0?null:i.jsx(Qd,{items:e,"aria-label":r,onDismiss:a});const d=n!=="auto"?n:c.w>=zd?"full":c.w>=Dd?"compact":"badge";return e.length===0?null:d==="badge"?i.jsx(qd,{ref:l,items:e,mode:t,"aria-label":r}):i.jsx(Os,{ref:l,role:"list","aria-label":r,"data-mode":t,"data-density":d,$row:o==="row",children:e.map(h=>i.jsx(Vd,{item:h,$compact:d==="compact"},h.id))})}const Bn=100,gr=16,Xd=-4,Ud=9,Yd=.22;function Gd({items:e,"aria-label":t}){const n=p.useId(),o=`${e.length} in flight`;return i.jsxs(Kd,{role:"img","aria-label":`${t}: ${o}`,viewBox:`0 0 ${Bn} ${gr}`,preserveAspectRatio:"none",children:[i.jsx("defs",{children:e.map((r,s)=>{const a=wn.has(r.phase)?se.warn:"var(--color-accent-fg)",c=Math.max(0,Math.min(1,r.progress??Mo[r.phase]))*Bn;return i.jsxs("radialGradient",{id:`${n}-${s}`,gradientUnits:"userSpaceOnUse",cx:c,cy:Xd,r:Ud,children:[i.jsx("stop",{offset:"0",stopColor:a,stopOpacity:Yd}),i.jsx("stop",{offset:"1",stopColor:a,stopOpacity:"0"})]},r.id)})}),e.map((r,s)=>i.jsx("rect",{"data-role":"glow","data-phase":r.phase,x:"0",y:"0",width:Bn,height:gr,fill:`url(#${n}-${s})`},r.id))]})}const qd=function({ref:t,items:n,mode:o,"aria-label":r}){const s=jo(Hd(n)),a=n.some(c=>wn.has(c.phase)),l=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${Ls(s)}`;return i.jsx(Pe,{text:n.map(c=>c.label).join(`
`),focusable:!0,children:i.jsx(Os,{ref:t,role:"group","aria-label":`${r}: ${l}`,"data-mode":o,"data-density":"badge",$row:!1,children:i.jsxs(Ns,{$phase:a?"overdue":"in-transit",children:[i.jsx(Fs,{"aria-hidden":"true",$pulse:!a,children:"↑"}),i.jsxs(zs,{children:[n.length,s!==null&&i.jsxs(i.Fragment,{children:[" · ",i.jsx($o,{value:Math.max(0,s)})]})]})]})})})};function Vd({item:e,$compact:t}){const n=jo(e.etaSeconds),o=wn.has(e.phase),r=n===null?`${e.label}, ${no[e.phase]}`:`${e.label}, ${Ls(n)}`;return i.jsxs(Ns,{$phase:e.phase,role:"listitem",...t?{"aria-label":r,title:r}:{},children:[i.jsx(Fs,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Fd(e)}),!t&&i.jsx(iu,{children:e.label}),i.jsx(zs,{children:n===null?no[e.phase]:i.jsx($o,{value:Math.max(0,n)})})]})}const Kd=k.svg`
  display: block;
  width: 100%;
  height: 16px;
`,Ts=54,It=5,So=3,kn=Ts-8-It,ut=60,Zd={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:se.warn,lost:se.warn};function Qd({items:e,"aria-label":t,onDismiss:n}){const{ref:o,size:r}=bn({w:320,h:Ts}),a=r.w>=ut?r.w:r.h,l=Math.max(1,Math.floor((a-6)/(kn+So))),d=e.length>l?e.slice(0,l-1):e,h=e.length-d.length;return i.jsx(eu,{ref:o,"data-command-list":"",children:i.jsxs(tu,{role:"list","aria-label":t,children:[d.map(f=>i.jsx(Jd,{item:f,onDismiss:n},f.id)),h>0&&i.jsxs(su,{role:"listitem","aria-label":`${h} more in flight`,children:["+",h]})]})})}function Jd({item:e,onDismiss:t}){const n=e.glyph??_o(e.label),o=Zd[e.phase],r=Math.max(0,Math.min(1,e.progress??Mo[e.phase])),s=wn.has(e.phase)&&!!t,a=`${e.label}, ${no[e.phase]}`;return i.jsxs(nu,{role:"listitem","aria-label":a,"data-phase":e.phase,style:{color:o},children:[i.jsx(Pe,{text:s?`Dismiss ${e.label}`:a,announce:!1,children:i.jsxs(ou,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:l=>{Is(l.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[i.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&i.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),i.jsx(ru,{children:i.jsx("span",{className:"fill",style:{"--fill-ratio":r}})})]})}const eu=k.div.attrs({role:"group"})`
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
`,tu=k.div`
  display: flex;
  flex-direction: column;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${So}px;
  width: 100%;
  height: 100%;

  @container (min-width: ${ut}px) {
    flex-direction: row;
  }
`,nu=k.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @container (min-width: ${ut}px) {
    flex-direction: column;
  }
`,ou=k.div`
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

  @container (min-width: ${ut}px) {
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
`,ru=k.div`
  --s: ${kn}px;
  position: relative;
  flex: 0 0 ${It}px;
  width: ${It}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${ut}px) {
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
  @container (min-width: ${ut}px) {
    .fill {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: calc(var(--fill-ratio, 0) * 100%);
      height: auto;
    }
  }
`,su=k.span`
  align-self: center;
  flex: 0 0 auto;
  padding: 0 ${So}px;
  font-size: var(--font-size-compact);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-muted);
`,Os=k.div`
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
`,au={"in-transit":H`
    color: var(--color-text-primary);
  `,"awaiting-reply":H`
    color: var(--color-text-muted);
  `,due:H`
    color: var(--color-text-muted);
  `,overdue:H`
    color: ${ye.warn};
  `,lost:H`
    color: ${ye.warn};
  `},Ns=k.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>au[e]}
`,Fs=k.span`
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
`,iu=k.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,zs=k.span`
  flex: 0 0 auto;
`;function tx({expectedIn:e}){const t=e??0,n=Number.isFinite(t)&&t>0;return i.jsxs(i.Fragment,{children:["Awaiting first signal",n&&us()&&i.jsx(lu,{total:t})]})}function lu({total:e}){return i.jsx(cu,{seconds:jo(e)??0})}function cu({seconds:e}){return e>0?i.jsxs(i.Fragment,{children:[" ",i.jsx(yi,{level:"muted",children:i.jsx($o,{value:Math.ceil(e)})})]}):null}const Eo=e=>H`
  --fit-box: ${e};
`,du=e=>H`
  --fit-mask: ${e};
`;function Ds(e){return e==="go"||e==="info"?"caution":e}function cn({tone:e,size:t="md",live:n=!1,report:o,held:r,children:s,...a}){const l=bo(r),c=l===void 0?e:Ds(e),d=c===void 0||c==="neutral"?void 0:c,h=o?.label??(typeof s=="string"?s:"");fo(o?{id:o.id,severity:d??"go",label:h}:null);const f=n?{role:"status","aria-live":"polite"}:{},x=l===void 0?null:gt(l),m=Reflect.get(a,"data-tooltip")!==void 0,{anchor:g,tip:v}=mt(m?null:x);return i.jsxs(i.Fragment,{children:[i.jsxs(pu,{$severity:d,$size:t,...f,...g,...a,children:[s,x!==null&&i.jsxs(i.Fragment,{children:[i.jsx(gu,{"aria-hidden":"true","data-held-mark":""}),i.jsxs(He,{"data-unit-currency":"",children:[", ",x]})]})]}),v]})}const uu=H`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,hu={go:H`
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
  `},fu={sm:H`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:H`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},pu=k.span`
  display: inline-block;
  position: relative;
  /* Sized by its own text, never stretched to a taller flex sibling. */
  align-self: center;
  ${Eo("badge")}
  border: 1px solid;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;

  border-radius: var(--radius-pill);

  ${({$size:e})=>fu[e]}
  ${({$severity:e})=>e===void 0?uu:hu[e]}
`,gu=k.span`
  position: absolute;
  top: 0;
  right: 0;
  width: ${oe.held.domSize};
  height: ${oe.held.domSize};
  transform: translate(45%, -45%);
  background: ${oe.held.color};
  box-shadow: 0 0 0 1px var(--color-surface-panel);
  pointer-events: none;
`,mu={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},xu={center:"center",start:"flex-start",baseline:"baseline"},vu=p.forwardRef(function({justify:t="between",align:n="center",gap:o,wrap:r=!1,children:s,...a},l){return i.jsx(yu,{ref:l,$justify:t,$align:n,$gap:o,$wrap:r,...a,children:s})}),yu=k.div`
  display: flex;
  align-items: ${({$align:e})=>xu[e]};
  justify-content: ${({$justify:e})=>mu[e]};
  gap: ${({$gap:e})=>e?dt[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function Ao(e){const t=bo(e.held);return t===void 0?{label:e.label,tone:e.tone,title:e.title}:{label:e.label,tone:Ds(e.tone),title:e.title??`${e.label}: ${gt(t)}`,held:t}}function Ne(e,t){return Ot({magnitude:e,unit:t})}function bu(e,t){const{limit:n,actual:o,unit:r}=t;if(n==null||o==null)return null;switch(e){case Gt.LimitReached:{const s=wu(t.quantity),a=`${Ne(o,r)} of ${Ne(n,r)}`;return t.facilityName?`the ${t.facilityName} holds ${a} ${s}`:`it holds ${a} ${s}`}case Gt.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${Ne(o,r)} of ${Ne(n,r)}`;case Gt.InsufficientFunds:return`it costs ${Ne(Math.trunc(o),r)} and funds are ${Ne(Math.trunc(n),r)}`;case Gt.InsufficientScience:return`it costs ${Ne(o,r)} and science is ${Ne(n,r)}`;default:return null}}function wu(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function mr(e){return e&&hs(e)?.sentence||null}function ku(e){const t=e?.trim().replace(/\.$/,"");return t||null}function Co(e){return Hs(e,"refused")}function nx(e){return Hs(e,"unavailable")}function Hs(e,t){const n=pt(e),o=(e.breach?bu(e.errorCode,e.breach):null)??ku(e.detail)??mr(e.reason)??mr(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function Bs(e){const n=pt(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":$u(Co({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function $u(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function Ws(e){return`${pt(e)||e.command||"The command"}: no reply. May have run.`}function _u(){const e=wi();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const $n=bi(_u),ox=$n.Context;function rx({children:e}){return i.jsx($n.Provider,{children:i.jsx(Mu,{children:e})})}function Mu({children:e}){const t=$n.useStore();return i.jsx(Ei.Provider,{value:t,children:e})}const Po=$n.useStore,ju=()=>()=>{},Su=[],xr=()=>Su;function Eu(){const e=Po();return p.useSyncExternalStore(e?e.subscribe:ju,e?e.getActiveHandles:xr,e?e.getActiveHandles:xr)}const At=new WeakMap,oo=new WeakMap;function vr(e){for(const t of oo.get(e)??[])t()}function Au(e){return At.set(e,(At.get(e)??0)+1),vr(e),()=>{At.set(e,(At.get(e)??1)-1),vr(e)}}function sx(){const e=Po();return p.useSyncExternalStore(t=>{if(!e)return()=>{};const n=oo.get(e)??new Set;return oo.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(At.get(e)??0)>0,()=>!1)}function _n({children:e,"aria-label":t,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:r=!1,as:s="span",className:a}){const c={role:n?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":t,className:a,"data-live-region":""};return n?i.jsx(He,{as:s,...c,children:e}):p.createElement(s,c,e)}const Cu=.72,Pu=.76;function ro({size:e,kind:t="held",figureSize:n}){return i.jsx("tspan",{dy:n===void 0?-e*.55:-(n*Cu-e*Pu),fontSize:e,fill:oe[t].color,"data-held-mark":"","data-reckoning-mark":t,children:oe[t].glyph})}function ax({end:e,x1:t,y1:n,x2:o,y2:r}){return i.jsx("line",{"data-bound":e,x1:t,y1:n,x2:o,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function Xs(e,t){return t===null?e:`${e}, ${t}`}function Ru(e){return e===null?{}:{"data-currency-in-name":""}}function ix({x:e,y:t,size:n,children:o}){return i.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function yr(e,t){return t?.state!=="held"?e:{...t,value:e}}function dn(e){return e.kind==="continuous"?"ribbon":"dot"}function Iu(e){return e.delivery==="acked"}function Lu(e){return e.direction==="command"?"outbound":"inbound"}function Us(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function Mn(e){return`${e.direction}/${e.kind}/${e.delivery}`}const Tu={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function Ro(e){return Tu[Mn(e)]??null}const br=new Set;function Ys(e,t){const n=Mn(e);if(br.has(n))return;br.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;us()?li.error(o):console.error(o)}const Gs=16,wr=Gs/2,Ou=5.5,Nu=2,Fu=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function qs(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function zu(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/Nu)),Math.max(2,Math.round(o)))}function Du(e,t,n){if(e.length===0)return"";const o=qs(e,t,n);if(!(o>0))return`M0.00,${wr.toFixed(2)}`;const r=zu(e,t,o),s=[];for(let a=0;a<=r;a++){const l=Math.min(a/r*o,o),c=Math.min(Math.round(l/n*t),e.length-1),d=Fu(e[e.length-1-c]),h=(a%2===0?-1:1)*d*Ou;s.push(`${l.toFixed(2)},${(wr+h).toFixed(2)}`)}return`M${s.join(" L")}`}const Vs=.05,Hu=.02,un=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],jn=100,Ct=30,Bu=1.5,ve=2,Wu=4,Ve=Ct-ve-Wu,Ie=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(jn-n*2),Vt=e=>ve+(1-Math.max(0,Math.min(1,e)))*Ve,Ks=e=>e==="inline"?Bu:0;function lx(e="inline"){const t=Ks(e);return(jn-t*2)/3}function Zs({tags:e,who:t}){return Ys(e,t),i.jsx("g",{"data-rail-unrepresented":Mn(e),"data-rail-entry":t})}function rt(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function kr(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(c=>c.age>=t);if(n===-1)return[];const o=e[n-1],r=e[n],s=r.age-o.age||1,a=(t-o.age)/s,l=o.value+a*(r.value-o.value);return[{age:t,value:l},...e.slice(n)]}function $r(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(d=>d.age>t),r=e.slice(0,o),s=e[o],a=r[r.length-1];if(!a)return[{age:t,value:s.value}];const l=s.age-a.age||1,c=(t-a.age)/l;return[...r,{age:t,value:a.value+c*(s.value-a.value)}]}const Xu=.25;function _r(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>=o.age)return o.value;for(let r=1;r<e.length;r++){const s=e[r];if(t<=s.age){const a=e[r-1],l=(t-a.age)/(s.age-a.age||1);return a.value+l*(s.value-a.value)}}return o.value}function Uu({stream:e,span:t,index:n,padX:o,oneT:r,twoT:s}){const l=`var(${un[n%un.length]})`,c=p.useId(),d=`cds-ramp-${c}-${n}`,h=`cds-fill-${c}-${n}`,f=`cds-tail-${c}-${n}`,x=Ro(e.tags);if(x!=="continuous-strip")return x===null?i.jsx(Zs,{tags:e.tags,who:e.id}):null;const m=Iu(e.tags),v=(m?e.inTransit:$r(e.inTransit,r)).map(B=>({x:Ie(B.age,t,o),y:Vt(B.value)}));if(v.length===0)return null;const j=(m?[]:$r(kr(e.inTransit,r),r*(1+Xu))).map(B=>({x:Ie(B.age,t,o),y:Vt(B.value)})),S=j.length>1&&j[j.length-1].x>j[0].x,L=`${rt(v)} L${v[v.length-1].x.toFixed(2)},${(ve+Ve).toFixed(2)} L${v[0].x.toFixed(2)},${(ve+Ve).toFixed(2)} Z`,E=m?kr(e.echo,s):[],A=E.map(B=>({x:Ie(B.age,t,o),y:Vt(B.value)})),M=E.map(B=>({x:Ie(B.age,t,o),y:Vt(_r(e.inTransit,B.age)??B.value)})),I=E.findIndex(B=>{const w=_r(e.inTransit,B.age);return w!==null&&Math.abs(B.value-w)>Hu}),_=I!==-1,W=_?A.slice(0,I+1):A,K=_?A.slice(I):[],Q=_?M.slice(I):[],T=!_||I>0;return i.jsxs("g",{"data-stream-group":e.id,"data-return-leg":m,children:[i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"1",y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.10"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0.40"})]}),i.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.22"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]}),S&&i.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:j[0].x,y1:"0",x2:j[j.length-1].x,y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.40"}),i.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]})]}),i.jsx("path",{"data-role":"area",d:L,fill:`url(#${h})`,stroke:"none"}),i.jsx("path",{"data-role":"commanded","data-stream":e.id,d:rt(v),fill:"none",stroke:`url(#${d})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),S&&i.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:rt(j),fill:"none",stroke:`url(#${f})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),W.length>0&&T&&i.jsx("path",{"data-role":"echo","data-stream":e.id,d:rt(W),fill:"none",stroke:l,strokeWidth:"0.8",strokeLinecap:"round"}),_&&i.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:rt(K),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),_&&i.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:rt(Q),fill:"none",stroke:l,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]})}function Yu({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${p.useId()}`,o=e.tags,r=Ro(o);if(r!=="continuous-strip")return r===null?i.jsx(Zs,{tags:o,who:e.id}):null;const s=(jn-t*2)/3,a=e.amplitudes,l=e.spanSamples??a.length,c=Du(a,l,s);if(c==="")return null;const d=Math.max(qs(a,l,s),1),h=`var(${Us(o)})`,f=Lu(o)==="outbound";return i.jsxs("g",{"data-ribbon-group":e.id,transform:`translate(${t} ${ve}) scale(1 ${Ve/Gs})`,children:[i.jsx("defs",{children:i.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:f?0:d,y1:"0",x2:f?d:0,y2:"0",children:[i.jsx("stop",{offset:"0",stopColor:h,stopOpacity:"0.9"}),i.jsx("stop",{offset:"1",stopColor:h,stopOpacity:"0.1"})]})}),i.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:c,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function Gu({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:r}){const s=`cds-divfade-${p.useId()}`,a=r?.state==="held",l=a?yn(r??null).caption:null,{anchor:c,tip:d}=mt(l),h=[...e,...t].find(E=>E.oneWaySeconds!==null),f=h?.oneWaySeconds??null;if(!h||f===null||co(f)!=="shown")return null;const x=f>=Vs;if(!x&&t.length===0)return null;const m=3*f,g=f,v=2*f,$=Ks(o),j=Ie(g,m,$),S=Ie(v,m,$),L=e.every(E=>E.inTransit.length===0&&E.echo.length===0)&&t.every(E=>E.amplitudes.length===0);return i.jsxs(qu,{"data-oneway":f,"data-variant":o,$variant:o,...c,children:[i.jsxs(Vu,{$variant:o,$quiet:L,role:"img","aria-label":Xs(n,l),...Ru(l),viewBox:`0 0 ${jn} ${Ct}`,preserveAspectRatio:"none",children:[i.jsx("defs",{children:i.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:ve,x2:"0",y2:ve+Ve,children:[i.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),i.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(x?e:[]).map((E,A)=>i.jsx(Uu,{stream:E,span:m,index:A,padX:$,oneT:g,twoT:v},E.id)),t.map(E=>i.jsx(Yu,{ribbon:E,padX:$},E.id)),i.jsx("line",{"data-divider":"t",x1:j,x2:j,y1:ve,y2:ve+Ve,stroke:`url(#${s})`,strokeWidth:"0.4"}),i.jsx("line",{"data-divider":"2t",x1:S,x2:S,y1:ve,y2:ve+Ve,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&i.jsxs("g",{"data-role":"hover-labels",children:[i.jsxs("text",{x:j,y:ve-.4,textAnchor:"middle",fontSize:"2",children:[Ot(lt("s",f),{decimals:1}),a&&i.jsx(ro,{size:1.2})]}),i.jsxs("text",{x:S,y:ve-.4,textAnchor:"middle",fontSize:"2",children:[Ot(lt("s",2*f),{decimals:1}),a&&i.jsx(ro,{size:1.2})]}),i.jsx("text",{x:Ie(f/2,m,$),y:Ct-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),i.jsx("text",{x:Ie(1.5*f,m,$),y:Ct-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),i.jsx("text",{x:Ie(2.5*f,m,$),y:Ct-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&i.jsxs(i.Fragment,{children:[i.jsxs(Ku,{"aria-hidden":"true",children:[i.jsxs("span",{children:["outgoing ",i.jsx("b",{children:"0"})]}),i.jsxs("span",{children:["echo"," ",i.jsx("b",{children:i.jsx(ln,{value:yr(lt("s",f),r),decimals:1})})]}),i.jsxs("span",{children:["confirmed"," ",i.jsx("b",{children:i.jsx(ln,{value:yr(lt("s",2*f),r),decimals:1})})]})]}),i.jsxs(Zu,{"aria-hidden":"true",children:[(x?e:[]).map((E,A)=>i.jsxs("span",{children:[i.jsx("i",{style:{background:`var(${un[A%un.length]})`}}),E.label]},E.id)),t.map(E=>i.jsxs("span",{"data-role":"legend-ribbon",children:[i.jsx("i",{style:{background:`var(${Us(E.tags)})`}}),E.label]},E.id)),x&&e.length>0&&i.jsxs("span",{"data-role":"legend-deviation",children:[i.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),d]})}const qu=k.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,Vu=k.svg`
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
`,Ku=k.div`
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
`,Zu=k.div`
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
`;function Qu({handle:e,handles:t,"aria-label":n,mode:o,density:r,orientation:s,variant:a="inline"}){const l=t??(e?[e]:[]),c=l.length===1?l[0]:null,d=c?Ro(c.tags):null;if(c&&d===null)return i.jsx(Ju,{tags:c.tags,who:c["aria-label"]});if(c&&d!=="in-flight-row"){const m=c,g=m.effectiveDelaySeconds;return co(g)!=="shown"?null:i.jsx(Gu,{streams:m.streams??[],ribbons:m.ribbons??[],delayReading:m.delayReading,"aria-label":n??m["aria-label"],variant:a})}const h=Od(l.flatMap(m=>m.inFlight)),x=l.some(m=>m.dismiss)?m=>l.find(g=>g.inFlight.some(v=>v.id===m))?.dismiss?.(m):void 0;return i.jsx(Wd,{items:h,"aria-label":n,mode:o,density:r,orientation:s,variant:a,onDismiss:x})}function Ju({tags:e,who:t}){return Ys(e,t??"unnamed handle"),i.jsx("span",{hidden:!0,"data-rail-unrepresented":Mn(e)})}function Qs(e){const n=pt(e)||e.command||"The command",o=e.code===void 0?void 0:hs(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function Js(e){return`${pt(e)||e.command||"The command"}: never sent. Safe to re-send.`}const eh={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed"},th={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command"};function nh(e,t){return e.kind==="refused"?Co(e.entries[t]):e.kind==="found"?Bs(e.entries[t]):e.kind==="failed"?Qs(e.entries[t]):e.kind==="undelivered"?Js(e.entries[t]):Ws(e.entries[t])}function oh(e){return e.entries.map((t,n)=>{const o=pt(t);return{id:t.id,subject:o||t.command||"",sentence:nh(e,n),dismissLabel:`Dismiss ${o||th[e.kind]}`,tags:t.tags}})}function _t(e){const{kind:t,onDismiss:n,live:o=!0}=e,r=e["aria-label"]??eh[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const a=oh(e).map(l=>i.jsxs(ah,{role:o?void 0:"listitem",$tone:s,children:[dn(l.tags)==="ribbon"?i.jsx(lh,{$tone:s,children:l.subject}):i.jsx(ih,{"aria-hidden":"true",$tone:s,children:_o(l.subject)}),i.jsx(ch,{children:l.sentence}),n&&i.jsx(dh,{type:"button","data-dismiss":"",onClick:c=>{Is(c.currentTarget),n(l.id)},"aria-label":l.dismissLabel,children:"✕"})]},l.id));return o?i.jsx(sh,{forwardedAs:"div","aria-label":r,"data-command-list":"",additionsOnly:!0,children:a}):i.jsx(rh,{role:"list","aria-label":r,"data-command-list":"",children:a})}const ea=H`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,rh=k.div`
  ${ea}
`,sh=k(_n)`
  ${ea}
  &:empty {
    margin: 0;
  }
`,ah=k.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>se[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${se[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,ih=k.span`
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
`,lh=k.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>ye[e]};
`,ch=k.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,dh=k.button`
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
  ${Ke}
`;function ct(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,o)=>ct(n,t[o]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const n=[...t];return[...e].every(o=>{const r=n.findIndex(s=>ct(o,s));return r===-1?!1:(n.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[n,o]of e)if(!t.has(n)||!ct(o,t.get(n)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const n=e,o=t,r=new Set;for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of r)if(!ct(n[s],o[s]))return!1;return!0}return!1}function Sn(e,t,n,o){const[r,s]=p.useState(o),a=p.useRef(t);a.current=t;const l=p.useRef(n);l.current=n;const c=p.useRef(r);return c.current=r,p.useEffect(()=>{if(!e)return;let d=c.current;const h=()=>{const g=a.current(e);l.current(d,g)||(d=g,s(g))};h(),e.addEventListener("scroll",h,{passive:!0});const f=new ResizeObserver(h);f.observe(e);for(const g of Array.from(e.children))f.observe(g);let x;const m=new MutationObserver(g=>{if(g.some(v=>v.type==="childList")){for(const v of Array.from(e.children))f.observe(v);h();return}x===void 0&&(x=requestAnimationFrame(()=>{x=void 0,h()}))});return m.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style"]}),()=>{e.removeEventListener("scroll",h),f.disconnect(),m.disconnect(),x!==void 0&&cancelAnimationFrame(x)}},[e]),r}function uh(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function ta(e){return Sn(e,uh,Object.is,!1)?0:void 0}function hh({label:e,selected:t,count:n,onToggle:o}){return i.jsxs(fh,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[i.jsx("span",{children:e}),n!==void 0&&i.jsx(ph,{children:n})]})}const fh=k.button`
  ${Eo("chip")}
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

  ${Ke}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`,ph=k.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function gh({value:e,onChange:t,clearLabel:n="Clear search",className:o,...r}){const s=p.useRef(null);return i.jsxs(mh,{className:o,children:[i.jsx(xh,{...r,ref:s,type:"search",value:e,onChange:a=>t(a.target.value)}),e!==""&&i.jsx(vh,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:i.jsx(cd,{size:"var(--icon-size-control)"})})]})}const mh=k.div`
  position: relative;
  display: flex;
  align-items: center;
`,xh=k(dl)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,vh=k(il)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function cx({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=ki(e),r=[...new Set(o)],[s,a]=p.useState(()=>new Set),[l,c]=p.useState(""),d=p.useId(),h=g=>{a(v=>{const $=new Set(v);return $.has(g)?$.delete(g):$.add(g),$})},f=[...s,l].filter(g=>g.length>0).map(g=>g.toLowerCase()),x=i.jsxs(gs,{gap:"related-packed",children:[i.jsxs(ll,{children:[i.jsx(cl,{htmlFor:d,children:t}),i.jsx(gh,{id:d,value:l,placeholder:n,onChange:c})]}),r.length>0&&i.jsx(vu,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:r.map(g=>i.jsx(hh,{label:g,selected:s.has(g),onToggle:()=>h(g)},g))})]}),m={matches:g=>{const v=g.toLowerCase();return f.every($=>v.includes($))},active:f.length>0};return na.set(m,x),m}const na=new WeakMap;function oa(e){return na.get(e)??null}function dx({filter:e,children:t,fill:n=!1}){return i.jsxs(gs,{gap:"related-dense",fill:n,children:[oa(e),t]})}const yh=24,bh=96;function wh({children:e,padded:t,caption:n,footer:o,strip:r,...s}){const a=r!=null&&r!==!1;return i.jsxs(kh,{$padded:t&&!a,$stacked:a,...s,children:[a?i.jsxs(i.Fragment,{children:[i.jsx($h,{$padded:t,children:e}),i.jsx(_h,{"data-framed-display-strip":"",children:r})]}):e,n!=null&&i.jsx(ra,{children:n}),o!=null&&i.jsx(Mh,{children:o})]})}const kh=k.div`
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
`,$h=k.div`
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
`,_h=k.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${yh}px;
  max-height: ${bh}px;
  min-width: 0;
  overflow: hidden;
`,ra=k.div`
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
`,Mh=k(ra)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,Mr={width:160,height:72},jh=2.5,Sh=420;function ux({width:e,height:t,plotHasData:n}){return!n&&e>=Mr.width&&t>=Mr.height?"center":e>=Sh&&e>=t*jh?"beside":"inline"}const Eh={overlay:H`
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
  `};function Ah({placement:e,role:t="status",children:n,...o}){return i.jsx(Ch,{$placement:e,role:t,...o,children:n})}const Ch=k.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${$i.regular};
  pointer-events: none;

  ${({$placement:e})=>Eh[e]}
`,hn=8;function sa(e){const t=[{cols:1,rows:e}];for(let n=2;n<=e;n++){const o=Math.ceil(e/n);o<(t.at(-1)?.rows??e)&&t.push({cols:n,rows:o})}return t}function aa(e){return e===0?"0px":`(${e}px + var(--gap-related))`}const ia=(e,t)=>`calc(${e} * ${t} + ${(e-1)*hn}px)`,Ph=(e,t,n)=>`calc(${e} * (${t} + ${n+hn}px) + ${(e-1)*hn}px)`;function Rh(e,t,n,o,r){const s=aa(n),a=sa(e).slice(1).map(({cols:c,rows:d})=>`
  @container grid-squares-width (width >= ${ia(c,t)}) {
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
`}function Ih(e,t,n,o){const r=sa(e),s=o!==void 0;return r.slice(1).map(({cols:a,rows:l},c)=>`
  @container grid-squares (aspect-ratio >= ${(.88*a/r[c].rows).toFixed(2)}) and ((width >= ${ia(a,t)}) or (height < ${Ph(s?l:r[c].rows,o??t,n)})) {
    --cols: ${a};
    --rows: ${l};
  }`).join("")}function Lh(e,t){const n=`
  & > * > * {
    --grid-square-heading: ${e===0?"0px":`calc${aa(e)}`};
  }`;return e===0||t===void 0?n:`${n}
  @container (width < ${t}px) or (height < ${t+e+hn}px) {
    & > * > * {
      --grid-square-heading: 0px;
    }
    & > * [data-grid-square-heading] {
      display: none;
    }
  }`}function Th(e){if(dn(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return t===null||t<=0?!1:n>0||t>=Vs&&o>0}return e.inFlight.length>0}function la({tiny:e}={}){const t=Eu(),n=Po();p.useEffect(()=>n?Au(n):void 0,[n]);const o=t.filter(Th),r=t.flatMap(w=>(w.refusals??[]).map(D=>({...D,tags:w.tags}))),s=t.flatMap(w=>(w.losses??[]).map(D=>({...D,tags:w.tags}))),a=t.flatMap(w=>(w.founds??[]).map(D=>({...D,tags:w.tags}))),l=t.flatMap(w=>(w.undelivered??[]).map(D=>({...D,tags:w.tags}))),c=t.flatMap(w=>(w.failures??[]).map(D=>({...D,tags:w.tags}))),d=r.length+l.length+c.length,h=o.length>0||d>0||s.length>0||a.length>0,[f,x]=p.useState(!1),[m,g]=p.useState(!1),[v,$]=p.useState(!1),j=f||m&&!v;p.useEffect(()=>{h||(x(!1),g(!1),$(!1))},[h]);const S=p.useId(),L=[...o.filter(w=>dn(w.tags)==="ribbon"),...o.filter(w=>dn(w.tags)!=="ribbon")],A=t.some(w=>w.dismiss&&(w.refusals?.length??0)>0)?w=>t.find(D=>D.refusals?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,I=t.some(w=>w.dismiss&&(w.losses?.length??0)>0)?w=>t.find(D=>D.losses?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,W=t.some(w=>w.dismiss&&(w.undelivered?.length??0)>0)?w=>t.find(D=>D.undelivered?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,Q=t.some(w=>w.dismiss&&(w.failures?.length??0)>0)?w=>t.find(D=>D.failures?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,B=t.some(w=>w.dismiss&&(w.founds?.length??0)>0)?w=>t.find(D=>D.founds?.some(Z=>Z.id===w))?.dismiss?.(w):void 0;return i.jsxs(Oh,{"data-panel-rail-frame":"",$tiny:e,$hasContent:h,onMouseEnter:()=>{$(!1),g(!0)},onMouseLeave:()=>g(!1),children:[t.length>0&&i.jsxs(_n,{visuallyHidden:!0,additionsOnly:!0,children:[r.map(w=>i.jsx("span",{children:Co(w)},`refusal:${w.id}`)),s.map(w=>i.jsx("span",{children:Ws(w)},`loss:${w.id}`)),l.map(w=>i.jsx("span",{children:Js(w)},`undelivered:${w.id}`)),c.map(w=>i.jsx("span",{children:Qs(w)},`failure:${w.id}`)),a.map(w=>i.jsx("span",{children:Bs(w)},`found:${w.id}`))]}),h?i.jsxs(Fh,{"data-panel-rail":"","data-grown":j,"data-pinned":f,"data-suppress-hover":v,onKeyDown:w=>{w.key==="Escape"&&f&&(w.stopPropagation(),x(!1),$(!0))},children:[i.jsx(zh,{type:"button","aria-expanded":f,"aria-controls":S,"aria-label":"Signal-delay detail",onClick:()=>{x(w=>{const D=!w;return D||$(!0),D})},children:i.jsx(Wh,{"aria-hidden":"true",hidden:!j,children:"▲"})}),i.jsxs(Dh,{id:S,"data-panel-rail-detail":"",children:[L.map(w=>i.jsx(Qu,{handle:w,variant:j?"expanded":"rail","aria-label":w["aria-label"]??(j?"Delay detail":void 0)},w.id)),!j&&(d>0||s.length>0||a.length>0)&&i.jsxs(Hh,{children:[d>0&&i.jsx(jr,{children:d===1?"1 command failed":`${d} commands failed`}),s.length>0&&i.jsx(jr,{children:s.length===1?"1 command unconfirmed":`${s.length} commands unconfirmed`}),a.length>0&&i.jsx(Bh,{children:a.length===1?"1 unconfirmed command answered":`${a.length} unconfirmed commands answered`})]})]})]}):null,j&&r.length>0&&i.jsx(_t,{kind:"refused",entries:r,onDismiss:A,live:!1}),j&&s.length>0&&i.jsx(_t,{kind:"lost",entries:s,onDismiss:I,live:!1}),j&&l.length>0&&i.jsx(_t,{kind:"undelivered",entries:l,onDismiss:W,live:!1}),j&&c.length>0&&i.jsx(_t,{kind:"failed",entries:c,onDismiss:Q,live:!1}),j&&a.length>0&&i.jsx(_t,{kind:"found",entries:a,onDismiss:B,live:!1})]})}const Oh=k.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,Nh=H`
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
`,Fh=k.div`
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
    ${Nh}
  }
`,zh=k.button`
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

`,Dh=k.div`
  display: contents;
`,jr=k.span`
  color: ${ye.warn};
`,Hh=k.span`
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
`,Bh=k.span`
  color: var(--color-info-text);
`,Wh=k.span`
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
`,ca=p.createContext(null);function hx({badges:e,children:t}){return i.jsx(ca.Provider,{value:e,children:t})}function Xh(){return p.useContext(ca)}function da({severity:e,count:t=1}){const n=t>1;return i.jsx(Uh,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${Nt[e]}`:Nt[e],$mark:se[e],$digits:n?String(t).length:1,children:n&&i.jsx(Yh,{$fill:Qn[e],$ink:fs[e],children:t})})}const Sr="8px",Uh=k.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${Sr};
  /* The count's own size, so the width below can be counted in its digits. */
  font-size: 7px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:Sr};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,Yh=k.span`
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
`,Gh=()=>()=>{},Er=()=>_i;function ua(){const e=ms();return p.useSyncExternalStore(e?e.subscribe:Gh,e?e.getBreakdown:Er,e?e.getBreakdown:Er)}const qh=()=>()=>{},Ar=()=>null;function Vh(){const e=ms();return p.useSyncExternalStore(e?e.subscribe:qh,e?e.getSummary:Ar,e?e.getSummary:Ar)}const ha=H`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Kh=12;function Zh(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function Qh(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const r=o<e?t-Kh:t;if(n[o]<=r)return o}return n.length-1}function Jh(e,t,n){const[o,r]=p.useState(0),s=p.useRef(o);s.current=o;const a=[t,...n].join(`
`),l=p.useCallback(()=>{const c=e.current,d=a.split(`
`);if(!c||d.length<2){s.current!==0&&(s.current=0,r(0));return}const h=d.map(x=>Zh(c,x)),f=Qh(s.current,c.clientWidth,h);f!==s.current&&(s.current=f,r(f))},[e,a]);return p.useLayoutEffect(()=>{l()},[l]),p.useEffect(()=>{const c=e.current;if(!c||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>l());return d.observe(c),()=>d.disconnect()},[e,l]),{index:o,compacted:o>0}}const ef=24;function tf(e,t,n,o,r=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&r?!(t>n+ef):n>t}function Cr(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const r=e.cloneNode(!0);n!==void 0&&(r.textContent=n),Object.assign(r.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),r.setAttribute("aria-hidden","true"),o.insertBefore(r,e.nextSibling);const s=r.getBoundingClientRect().width;return o.removeChild(r),s}const nf={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function Mt(e){return Number.parseFloat(e)||0}function of(e,t,n,o){const[r,s]=p.useState(!1),a=p.useRef(r);a.current=r;const l=p.useRef(void 0),c=p.useRef(void 0),d=p.useRef(!1),h=p.useRef(o);h.current=o;const f=p.useCallback(()=>{const m=e.current;if(!m)return;const g=getComputedStyle(m),v=m.getBoundingClientRect().width-Mt(g.paddingLeft)-Mt(g.paddingRight),$=Cr(t.current,{},h.current),j=Cr(n.current,nf),S=n.current?.closest("[data-panel-aside-expand]")?.parentElement,L=S?getComputedStyle(S):null,E=$===0||j===0?$+j:$+Mt(g.columnGap)+Mt(L?.paddingLeft??"")+Mt(L?.paddingRight??"")+j,A=a.current,M=v>0&&c.current!==void 0&&v<c.current;A&&M&&(d.current=!0);const I=tf(A,v,E,l.current,d.current);I!==A&&(d.current=I&&M),v>0&&(c.current=v),E>0&&(l.current=E),I!==a.current&&(a.current=I,s(I))},[e,t,n]),x=p.useRef({title:null,aside:null,observer:null});return p.useLayoutEffect(()=>{const m=t.current,g=n.current,v=x.current;if(v.observer===null||v.title!==m||v.aside!==g){v.observer?.disconnect(),v.title=m,v.aside=g,v.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>f());for(const $ of[m,g])$&&v.observer?.observe($,{subtree:!0,childList:!0,characterData:!0,attributes:!0});f();return}v.observer.takeRecords().length>0&&f()}),p.useEffect(()=>{const m=x.current;return()=>{m.observer?.disconnect(),m.observer=null}},[]),p.useEffect(()=>{const m=e.current;if(!m||typeof ResizeObserver>"u")return;const g=new ResizeObserver(()=>f());return g.observe(m),n.current&&g.observe(n.current),()=>g.disconnect()},[e,n,f]),r}const fa=p.createContext("full"),rf=fa.Provider;function fx(){return p.useContext(fa)}const En=p.createContext(null);function pa({children:e}){const[t,n]=p.useState(null),o=p.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return i.jsx(En.Provider,{value:o,children:e})}function sf({children:e}){return i.jsx(pa,{children:e})}const ga=`
  & > [${vs}] {
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
  ${ga}
`,af=k.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${ha}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ma=p.forwardRef(function({compact:t,children:n,...o},r){const s=p.useRef(null),a=typeof n=="string"?n:"",l=t===void 0||a===""?lf:typeof t=="string"?[t]:t,{index:c,compacted:d}=Jh(s,a,l);return i.jsx(Pe,{text:d?a:void 0,children:i.jsx(af,{...o,ref:h=>{if(s.current=h,typeof r=="function"){r(h);return}r&&(r.current=h)},"aria-label":d?a:void 0,children:c===0?n:l[c-1]})})}),lf=[],cf=k.div`
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
`,df=k.div`
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
`,uf=k.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,hf=k.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,ff=k.details`
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
    ${Ke}
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
`,pf=120;function xa(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${Nt[n.severity]}`:`${Nt[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function va({title:e,compactTitle:t,aside:n,toolbar:o,...r}){const s=ua(),a=p.useRef(null),l=p.useRef(null),c=p.useRef(null),d=of(a,l,c,typeof e=="string"?e:void 0),[h,f]=p.useState(!1),[x,m]=p.useState(!1),g=p.useRef(null),v=p.useRef(null),$=p.useRef(null),j=p.useCallback(()=>{g.current!==null&&clearTimeout(g.current),g.current=null},[]);p.useEffect(()=>{d||(f(!1),m(!1))},[d]),p.useEffect(()=>j,[j]);const S=d&&(h||x);p.useEffect(()=>{if(!S)return;const M=_=>{_.key==="Escape"&&v.current?.contains(document.activeElement)&&(_.stopPropagation(),j(),m(!1),f(!1),$.current?.focus())},I=_=>{v.current?.contains(_.target)||(j(),m(!1),f(!1))};return document.addEventListener("keydown",M,!0),document.addEventListener("pointerdown",I,!0),()=>{document.removeEventListener("keydown",M,!0),document.removeEventListener("pointerdown",I,!0)}},[S,j]);const L=d?xa(s):null,{anchor:E,tip:A}=mt(S?null:L);return i.jsxs(cf,{ref:a,"data-panel-header":"",...r,children:[i.jsxs(df,{children:[e!==void 0&&i.jsx(ma,{ref:l,compact:t,children:e}),i.jsx(uf,{"aria-hidden":"true",children:i.jsx(cn,{children:null})})]}),n!==void 0&&i.jsx(hf,{children:i.jsxs(ff,{ref:v,"data-panel-aside-expand":"","data-hovering":d&&x?"":void 0,$collapsed:d,open:d?h:!0,onToggle:M=>{d&&(f(M.currentTarget.open),M.currentTarget.open||m(!1))},onPointerEnter:M=>{!d||M.pointerType==="touch"||(j(),m(!0))},onPointerLeave:M=>{M.pointerType!=="touch"&&(j(),g.current=setTimeout(()=>{g.current=null,m(!1)},pf))},children:[i.jsxs("summary",{ref:$,"data-tooltip":E["data-tooltip"],onPointerDown:E.onPointerDown,onPointerUp:E.onPointerUp,onFocus:E.onFocus,onBlur:E.onBlur,"aria-description":L??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(M=>`${M.count} ${Nt[M.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(M=>i.jsx(da,{severity:M.severity,count:M.count},M.severity)),i.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),A,i.jsx(rf,{value:d?"collapsed":"full",children:i.jsx("div",{"data-panel-aside-full":"",ref:c,children:n})})]})}),o!==void 0&&i.jsx(ya,{children:o})]})}const ya=k.div`
  ${Eo("panel-toolbar")}
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
`,gf=k.div`
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
  ${({$loneFrame:e})=>e?`@container (width < ${mf}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${ga}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${vs}] {
           min-height: 0;
         }`:""}
`,mf="25rem";function ba({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...r}){const a=p.useContext(En)?.registerScroller,[l,c]=p.useState(null),d=p.useCallback(f=>{a?.(f),c(f)},[a]),h=ta(l);return i.jsx(gf,{ref:d,tabIndex:h,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...r,children:e})}const xf="13rem",vf=k.div`
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
  & > [${Mi}] {
    grid-column: 1 / -1;
  }
  /* A grid opened only to carry the augment slot, with nothing bound, takes no gap above it: a filling section reaches the body's bottom inset. */
  &:empty {
    display: none;
  }
`;function yf({children:e,hoverTitle:t}){const n=p.useRef(null),o=p.useRef(null),r=kf(n,o);return i.jsx(bf,{ref:n,$fits:r,"data-panel-fit-body":"",children:i.jsx(wf,{ref:o,$fits:r,$hoverTitle:t,"data-panel-fit-shifted":r&&t?"":void 0,children:e})})}const bf=k.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,wf=k.div`
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
`;function kf(e,t){const[n,o]=p.useState(!0);return p.useLayoutEffect(()=>{const r=e.current,s=t.current;if(!r||!s)return;const a=()=>{o(_f($f(s),r.clientHeight))};if(a(),typeof ResizeObserver>"u")return;const l=new ResizeObserver(a),c=()=>{l.observe(r),l.observe(s);for(const h of Array.from(s.children))l.observe(h)};c();const d=new MutationObserver(()=>{c(),a()});return d.observe(s,{childList:!0}),()=>{l.disconnect(),d.disconnect()}},[e,t]),n}function $f(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function _f(e,t){return e<=t}const Mf=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,jf=k.div`
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
  ${du("panel-scroll-glow")}
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
`,wa=p.forwardRef(function({children:t,...n},o){const r=p.useRef(null),[s,a]=p.useState(null),l=p.useCallback(h=>{r.current=h,a(h)},[]);p.useImperativeHandle(o,()=>r.current);const c=Sn(s,Lo,To,Io),d=ta(s);return i.jsxs(Mf,{...n,children:[i.jsx(jf,{ref:l,tabIndex:d,"data-scroll-area-inner":"",children:t}),i.jsx(pn,{$position:"top",$visible:c.top}),i.jsx(pn,{$position:"bottom",$visible:c.bottom})]})});function Sf(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const Pr="14rem",Ef=5,Af="45%",Cf=`min(${Ai(1,Ef).pxH}px, ${Af})`;function Rr(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const Pf=k.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${Rr(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${Rr(t,n)};`}

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
`;function Rf({side:e="end",size:t,railBand:n,children:o,...r}){const{ref:s,size:a}=bn({w:1,h:1}),l=Sf(t??Pr),c=a.w<=1||l===void 0||a.w>=l*2,d=a.w>=a.h&&c?"inline":"block",h=t??(d==="inline"?Pr:Cf);return i.jsx(Pf,{ref:s,"data-panel-split":d,$axis:d,$side:e,$size:h,$railBand:n,...r,children:o})}const If=k(wa)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,Lf=k.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function ka({children:e,...t}){return i.jsx(Lf,{"data-panel-sidebar":"",...t,children:i.jsx(If,{children:e})})}const Io={top:!1,bottom:!1};function Lo(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function To(e,t){return e.top===t.top&&e.bottom===t.bottom}const Tf=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function $a({children:e,railBandAbove:t,...n}){const o=p.useContext(En),r=o?.scroller??null;p.useEffect(()=>{},[o]);const s=Sn(r,Lo,To,Io);return i.jsxs(Tf,{...n,children:[e,i.jsx(pn,{$position:"top",$visible:s.top&&!t}),i.jsx(pn,{$position:"bottom",$visible:s.bottom})]})}function Of(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const px=["sections","actions"],Kt=Object.freeze({});function Nf({summary:e}){const t=p.useRef(e.severity),[n,o]=p.useState(0);p.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const r=xa(ua());return i.jsx(Ff,{$pulse:n,children:i.jsx(Pe,{text:r,focusable:!0,children:i.jsx(cn,{tone:e.severity,size:"sm",children:e.label})})})}const Ff=k.span`
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
`,_a=k.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,zf=k.div`
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
`;function Df({children:e}){const t=p.useContext(En),n=Sn(t?.scroller??null,Lo,To,Io);return i.jsx(zf,{"data-panel-sticky-top":"","data-panel-glow-top":n.top?"":void 0,children:e})}function Hf({render:e}){const{ref:t,size:n}=bn({w:0,h:0});return i.jsx(Bf,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const Bf=k.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,Wf=k.div`
  flex: 1 1 100%;
  min-width: 0;
`,Xf=k(va)`
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
`,Uf=k.div`
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
`,Yf=k(He)`
  margin: 0;
  ${ha}
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
`;function Oo(e){return e.held===void 0?e.label:`${e.label}: ${gt(e.held)}`}function Gf(e){let t=null;for(const n of e){const o=Ao(n),{tone:r}=o;r===void 0||r==="neutral"||(t===null||lr(r)>lr(t.severity))&&(t={severity:r,label:Oo(o)})}return t}function Ir({badges:e}){return i.jsx(i.Fragment,{children:e.map(t=>i.jsx(qf,{entry:t},t.id))})}function qf({entry:e}){const t=Ao(e),{tone:n}=t;return fo(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:Oo(t)}),null}function Vf({summary:e,announcement:t}){return i.jsxs(i.Fragment,{children:[i.jsx(Pe,{text:e.label,focusable:!0,children:i.jsx(Kf,{children:i.jsx(da,{severity:e.severity})})}),i.jsx(_n,{visuallyHidden:!0,assertive:!0,children:t})]})}const Kf=k.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,Zf=k.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function Qf(e){return e.hoverTitle?i.jsx(Jf,{...e}):i.jsx(Ma,{...e,hoverTitleId:void 0})}function Jf(e){const t=p.useId();return i.jsx(Ma,{...e,hoverTitleId:t})}function Ma({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:r,panelToolbar:s,panelFilter:a,panelFooter:l,panelTrend:c,inactive:d,fitToSize:h,hoverTitle:f,hoverTitleId:x,panelSidebar:m,sidebarSide:g,sidebarSize:v,sections:$,sectionMinWidth:j=xf,children:S,...L}){const E=Xh(),A=ar("actions"),M=ar("sections"),I=Of(o,E),_=I.length===0?null:I.map(G=>{const ie=Ao(G),{label:_e,tone:Me,title:An}=ie;return i.jsx(Pe,{text:An,focusable:!0,children:i.jsx(cn,{tone:Me,held:ie.held,report:Me===void 0||Me==="neutral"?void 0:{id:G.id,label:Oo(ie)},children:_e})},G.id)}),W=a===void 0?s:i.jsxs(i.Fragment,{children:[s,i.jsx(Wf,{children:oa(a)})]}),K=r??null,Q=K!==null&&K!=="none"&&K!=="live"?K:null;fo(Q?{id:"stream",severity:Fn(Q),label:ir(Q)??""}:null);const T=Vh(),B=T!==null&&I.some(G=>G.id===T.id),w=Q===null?null:ir(Q),D=B?null:T!==null?i.jsx(Nf,{summary:T}):Q===null||w===null?null:i.jsx(Pe,{text:`Telemetry stream: ${w}`,focusable:!0,children:i.jsx(cn,{tone:Fn(Q),size:"sm",children:w})}),Z=T?.label??w,de=Z===null||Z===""?"":typeof e=="string"?`${e}: ${Z}`:`Status: ${Z}`,Ze=n===void 0&&D===null&&_===null&&!A?void 0:i.jsxs(i.Fragment,{children:[n,A&&i.jsx(qt,{segment:"actions",props:Kt}),_,D]}),we=T??Gf(I)??(Q===null||w===null?null:{severity:Fn(Q),label:w}),We=we?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${we.label}`:`Status: ${we.label}`,ke=n===void 0&&we===null&&!A?I.length===0?void 0:i.jsx(Ir,{badges:I}):i.jsxs(i.Fragment,{children:[n,A&&i.jsx(qt,{segment:"actions",props:Kt}),i.jsx(Ir,{badges:I}),we!==null&&i.jsx(Vf,{summary:we,announcement:We})]}),ue=d!==void 0,Ae=ue?[]:p.Children.toArray($),pe=Ae.length>0,J=S===void 0&&!M&&!h&&Ae.length===1&&ep(Ae[0]),te=[];for(const G of Ae){const ie=!h&&p.isValidElement(G)&&G.props.fill===!0,_e=te.at(-1);!ie&&_e!==void 0&&!_e.fill?_e.nodes.push(G):te.push({fill:ie,nodes:[G]})}pe&&!te.some(G=>!G.fill)&&te.push({fill:!1,nodes:[]});const Xe=te.reduce((G,ie,_e)=>ie.fill?G:_e,-1),Ue=G=>Math.max(1,G.filter(ie=>!(p.isValidElement(ie)&&ie.props.full===!0)).length),$e=[];for(const G of te){const ie=$e.length;if(G.fill){$e.push(G.nodes[0]);continue}$e.push(i.jsxs(vf,{$min:j,$columns:Ue(G.nodes),children:[G.nodes,ie===Xe&&i.jsx(qt,{segment:"sections",props:Kt})]},`sections-${ie}`))}const ae=ue?i.jsx(ji,{reason:d}):pe?i.jsxs(i.Fragment,{children:[S,$e]}):S,le=i.jsxs(ba,{fitToSize:h,loneFrame:J,hoverTitle:f,children:[i.jsxs(Df,{children:[i.jsx(la,{tiny:f}),!f&&i.jsx(Xf,{title:e,compactTitle:t,aside:Ze,toolbar:W})]}),h?i.jsx(yf,{hoverTitle:f,children:ae}):ae,!pe&&!ue&&i.jsx(qt,{segment:"sections",props:Kt})]});return i.jsx(sf,{children:i.jsxs(fn,{$railTravels:!0,$hoverTitle:f,...f?{tabIndex:0,role:"group","aria-labelledby":x,"data-tiny-panel":""}:{},...L,children:[i.jsx($a,{railBandAbove:!0,children:m===void 0||ue?le:i.jsxs(Rf,{side:g,size:v,railBand:!0,children:[le,i.jsx(ka,{children:m})]})}),!ue&&c!==void 0&&i.jsx(Hf,{render:c}),!ue&&l!==void 0&&i.jsx(_a,{children:l}),f&&i.jsxs(Uf,{"data-panel-hover-title":"",children:[i.jsx(Yf,{as:"h3",id:x,children:e}),ke!==void 0&&i.jsx(Zf,{children:ke})]}),i.jsx(_n,{visuallyHidden:!0,children:f&&We!==void 0?"":de})]})})}function ep(e){if(!p.isValidElement(e)||e.type!==xs||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=p.Children.toArray(t).filter(r=>!(p.isValidElement(r)&&r.type===Ah));if(n.length!==1)return!1;const[o]=n;if(!p.isValidElement(o))return!1;if(o.type===wh)return!0;if(o.type!==p.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const gx=Object.assign(Qf,{Context:pa,Delay:la,Container:fn,Header:va,Toolbar:ya,Footer:_a,Title:ma,Glow:$a,Body:ba,Section:xs,Sidebar:ka}),tp={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function mx({cols:e,minColWidth:t,fit:n=!1,gap:o="related-dense",rowGap:r,align:s="center",squares:a=!1,squareHeadingPx:l=0,squareHeadingMinPx:c,minRowHeight:d,children:h,...f}){if(a){const x=p.Children.toArray(h).length,m=t??"120px",g=i.jsx(sp,{$count:x,$min:m,$headingPx:l,$gap:dt[o],$rowMin:d,children:i.jsx(ap,{$count:x,$min:m,$headingPx:l,$gap:dt[o],$rowMin:d,$headingMin:c,"data-grid-squares":"",children:h})});return i.jsx(op,{$rowMin:d,...f,children:d===void 0?g:i.jsx(rp,{children:g})})}return i.jsx(np,{$cols:e,$minColWidth:t,$fit:n,$gap:o,$rowGap:r,$align:s,...f,children:h})}const np=k.div`
  display: grid;
  align-items: ${({$align:e})=>tp[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${dt[t]} ${dt[e]}`:dt[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:n})=>e||(t?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,op=k.div`
  container: grid-squares-width / inline-size;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  ${({$rowMin:e})=>e&&`
  flex-basis: 0;
  min-height: ${e};
`}
`,rp=k(wa)`
  & > [data-scroll-area-inner] {
    display: flex;
    flex-direction: column;
  }
`,sp=k.div`
  container: grid-squares / size;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${({$count:e,$min:t,$headingPx:n,$gap:o,$rowMin:r})=>Rh(e,t,n,o,r)}
`,ap=k.div`
  --cols: 1;
  --rows: ${({$count:e})=>e};
  display: grid;
  flex: 1 1 0;
  min-height: 0;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
  gap: ${({$gap:e})=>e};
  ${({$count:e,$min:t,$headingPx:n,$rowMin:o})=>Ih(e,t,n,o)}
  & > * {
    container-type: size;
    min-width: 0;
    min-height: 0;
  }
  ${({$headingPx:e,$headingMin:t})=>Lh(e,t)}
`,ja=.89,No=.45;function Sa({kind:e,x:t,y:n,scale:o=1,ghost:r=!1}){const s=oe[e],a=s.canvasRadius*o,l={fill:s.color,opacity:r?No:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const d=a*ja;return i.jsx("rect",{x:t-d,y:n-d,width:2*d,height:2*d,...l})}const c=`${t},${n-a} ${t+a},${n+a*.8} ${t-a},${n+a*.8}`;return i.jsx("polygon",{points:c,...l})}function Ea(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function Lr(e,t,n,o,r,{ghost:s=!1,scale:a=1}={}){const l=oe[n],c=l.canvasRadius*a;if(t.save(),t.globalAlpha=s?No:1,t.fillStyle=Ea(e,l.cssVar,l.fallback),t.beginPath(),n==="held"){const d=c*ja;t.rect(o-d,r-d,2*d,2*d)}else t.moveTo(o,r-c),t.lineTo(o+c,r+c*.8),t.lineTo(o-c,r+c*.8),t.closePath();t.fill(),t.restore()}function xx(e,t,{held:n,modelled:o},r={}){n!==void 0&&o!==void 0&&(t.save(),t.globalAlpha=No,t.strokeStyle=Ea(e,oe.modelled.cssVar,oe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.stroke(),t.restore()),n!==void 0&&Lr(e,t,"held",n.x,n.y,{...r,ghost:o!==void 0}),o!==void 0&&Lr(e,t,"modelled",o.x,o.y,r)}const gn=14,Ee=4,Se=6,ip=6,Tr=12,ge=6,Lt=8,Zt=4.5,so=4,lp=12,cp=190,dp=80;function Pt(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function up(e,t,n,o){const r=o??e,s=r.x1-r.x0,a=e.y1-e.y0,l=s>=cp&&a>=dp,c=l||o!==void 0,d=l||o?n:n.filter(M=>!M.detail),h=s-ge*2-Ee*2-Lt-so,f=o!==void 0,x=Math.floor(h/Se),m=M=>Pt(M.value??an,x-(M.currency?M.currency.length+2:0)),g=M=>{const I=M.value??an;if(f)return Pt(M.label,x);if(l)return`${M.label} ${I}`;const _=Math.floor((h-I.length*Se)/Se)-1-(M.modelled?2:0),W=Pt(M.label,Math.min(_,lp));if(W!=="")return`${W} ${I}`;const K=Math.floor(h/Se)-(M.modelled?2:0);return Pt(I,K)},v=M=>(l||f)&&M.currency?M.currency:"",$=M=>v(M)?ip+v(M).length*Se+(M.modelled?Tr:0):M.modelled?Tr:0,j=l?0:Lt+so,S=Math.floor((s-ge*2-Ee*2)/Se),L=Math.max(...d.map(M=>f?j+Math.max(g(M).length*Se,m(M).length*Se+$(M)):j+g(M).length*Se+$(M)),c?Math.min(t.length,S)*Se:0),E=c?1:0,A=(d.length*(f?2:1)+E)*gn+Ee*2;return{full:l,named:c,headingChars:S,stacked:f,rows:d,text:g,valueText:m,currencyText:v,cardW:f?s:Math.min(L+Ee*2,s-ge*2),cardH:A,headRows:E,fits:A<=a-ge*2}}function hp(e,t,n,o,r){const s=(a,l)=>a>=t&&a<=t+o&&l>=n&&l<=n+r;for(let a=1;a<e.cx.length;a++){const[l,c,d,h]=[e.cx[a-1],e.cy[a-1],e.cx[a],e.cy[a]];if(![l,c,d,h].every(Number.isFinite))continue;const f=Math.max(1,Math.ceil(Math.hypot(d-l,h-c)/gn));for(let x=0;x<=f;x++)if(s(l+(d-l)*x/f,c+(h-c)*x/f))return!0}return!1}function Fo({x:e,plot:t,heading:n,rows:o,column:r,avoid:s=[],traces:a=[]}){const l=up(t,n,o,r),{rows:c,cardW:d,cardH:h,fits:f}=l,x=t.y0+ge,m=c.flatMap(_=>_.y===void 0||_.y===null?[]:[_.y]),g=(_,W)=>m.every(K=>e+Zt<_||e-Zt>_+d||K+Zt<W||K-Zt>W+h),v=t.x1-e-ge,$=v>=d||v>=e-t.x0,j=_=>Math.max(t.x0+ge,Math.min(t.x1-ge-d,_)),S=$?[e+ge,e-ge-d]:[e-ge-d,e+ge],L=[x,t.y1-ge-h].flatMap(_=>S.map(W=>({cardX:j(W),cardY:_}))),E=(_,W)=>a.every(K=>!hp(K,_,W,d,h)),A=(_,W)=>s.every(K=>_+d<K.x0||_>K.x1||W+h<K.y0||W>K.y1),M=L.find(_=>g(_.cardX,_.cardY)&&E(_.cardX,_.cardY)&&A(_.cardX,_.cardY))??L.find(_=>g(_.cardX,_.cardY)&&A(_.cardX,_.cardY))??L.find(_=>g(_.cardX,_.cardY)&&E(_.cardX,_.cardY))??L.find(_=>g(_.cardX,_.cardY)),I=f?r?{cardX:r.x0,cardY:r.y0+ge}:M:void 0;return{layout:l,place:I}}function vx(e){return Fo(e).place!==void 0}function fp(e){const{layout:t,place:n}=Fo(e);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+t.cardW,y1:n.cardY+t.cardH}}function pp({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:a}){const{layout:l,place:c}=Fo({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:a}),{full:d,named:h,headingChars:f,stacked:x,rows:m,text:g,valueText:v,currencyText:$,cardW:j,cardH:S,headRows:L}=l,E=c!==void 0,A=c?.cardX??0,M=c?.cardY??0,I=_=>_+Ee+(d?0:Lt+so);return i.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[i.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),m.map(_=>_.y===void 0||_.y===null?null:i.jsx("circle",{cx:e,cy:_.y,r:3.5,fill:_.color,stroke:"var(--color-text-primary)",strokeWidth:1},_.id)),E&&i.jsxs("g",{"data-plot-crosshair-card":"",children:[i.jsx("rect",{x:A,y:M,width:j,height:S,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),h&&i.jsx("text",{x:A+Ee,y:M+Ee+10,fill:"var(--color-text-muted)",fontSize:10,children:Pt(n,f)}),m.map((_,W)=>{const K=x?2:1,Q=M+Ee+(W*K+L)*gn+10,T=Q+(x?gn:0);return i.jsxs("g",{"data-plot-crosshair-row":_.id,children:[!d&&i.jsx("rect",{x:A+Ee,y:Q-8,width:Lt,height:Lt,fill:_.color,"data-plot-crosshair-swatch":""}),i.jsx("text",{x:I(A),y:Q,fill:_.value===null||x?"var(--color-text-faint)":_.color,fontSize:10,style:{whiteSpace:"pre"},children:g(_)}),x&&i.jsx("text",{x:I(A),y:T,fill:_.value===null?"var(--color-text-faint)":_.color,fontSize:10,style:{whiteSpace:"pre"},children:v(_)}),_.modelled&&i.jsx(Sa,{kind:"modelled",x:A+j-Ee-$(_).length*Se-($(_)?8:4),y:T-3}),$(_)&&i.jsx("text",{x:A+j-Ee,y:T,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:$(_)})]},_.id)})]})]})}const Or=480,gp=110,mp=200,Nr=56,xp=20,vp=112,yp=260,bp=.4,wp=300;function kp({width:e,height:t,contentWidth:n,legendHeight:o=0,cardHeight:r=0}){const s=Math.max(vp,Math.ceil(n));if((t>e||e<Or)&&t>=mp)return{placement:"below"};if(e<Or||t<gp||s>Math.min(yp,e*bp)||e-s<wp)return{placement:"overlay"};const l=t>=Nr+o+r;return!l&&t<Nr+xp+r?{placement:"overlay"}:{placement:"beside",columnWidth:s,legendBelow:!l}}const $p={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function _p(e){return $p[e]}const st=4,Qt=3,ao=6;function Mp(e,t){return e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0}function jp(e,t){const n=(o,r)=>o>=t.x0&&o<=t.x1&&r>=t.y0&&r<=t.y1;if(e.cx.length===1)return Number.isFinite(e.cx[0])&&n(e.cx[0],e.cy[0]);for(let o=1;o<e.cx.length;o++){const[r,s,a,l]=[e.cx[o-1],e.cy[o-1],e.cx[o],e.cy[o]];if(![r,s,a,l].every(Number.isFinite))continue;const c=Math.max(1,Math.ceil(Math.hypot(a-r,l-s)/ao));for(let d=0;d<=c;d++)if(n(r+(a-r)*d/c,s+(l-s)*d/c))return!0}return!1}function Sp({plot:e,card:t,traces:n,obstacles:o}){if(t.width<=0||t.height<=0||t.width>e.x1-e.x0-st*2||t.height>e.y1-e.y0-st*2)return;const r=e.x0+st,s=e.x1-st-t.width,a=e.y0+st,l=e.y1-st-t.height;return[{x:s,y:a},{x:r,y:l},{x:s,y:l},{x:r,y:a}].find(d=>{const h={x0:d.x-Qt,y0:d.y-Qt,x1:d.x+t.width+Qt,y1:d.y+t.height+Qt};return!n.some(f=>jp(f,h))&&!o.some(f=>Mp(h,f))})}function Ep(e){const t=[],n=[];let o=!0;for(let r=e.y0;r<=e.y1+ao;r+=ao){const s=Math.min(r,e.y1);t.push(o?e.x0:e.x1,o?e.x1:e.x0),n.push(s,s),o=!o}return{cx:t,cy:n}}function Ap(e,t){return e?.includes(t)??!1}function Fr(e,t){const{reckoned:n,spans:o}=e.data;return n?.some(r=>t>=r.from&&t<=r.to)?"modelled":o?.some(r=>t>=r.from&&t<=r.to&&r.status==="recorded")?"recorded":"measured"}function Cp(e){const{x:t,y:n,y2:o}=e.data;let r=!0;for(let a=0;a<t.length;a++)if(!Number.isFinite(t[a])||a>0&&t[a]<t[a-1]){r=!1;break}if(r)return e;const s=t.map((a,l)=>l).filter(a=>Number.isFinite(t[a])).sort((a,l)=>t[a]-t[l]||a-l);return{...e,data:{x:s.map(a=>t[a]),y:s.map(a=>n[a]),...o?{y2:s.map(a=>o[a])}:{}}}}function Pp(e,t,n){const o=e.data.x,r=e.data.y,s=Math.min(o.length,r.length);if(s===0||t<o[0]||t>o[s-1])return null;let a=0,l=s-1;for(;a<l;){const g=a+l>>1;o[g]<t?a=g+1:l=g}const c=a,d=Math.max(0,c-1);if(o[c]!==t&&c>0&&Ap(e.data.breaks,c))return null;const h=t-o[d]<=o[c]-t?d:c;if(n!==void 0&&Math.abs(o[h]-t)>n)return null;const f=o[c]-o[d];if(e.readBetween&&f>0&&o[c]!==t){const g=r[d]+(r[c]-r[d])*(t-o[d])/f;return Number.isFinite(g)?{index:h,x:t,y:g,currency:Fr(e,h)}:null}const x=r[h];if(!Number.isFinite(x))return null;const m=e.data.y2?.[h];return{index:h,x:o[h],y:x,...m!==void 0&&Number.isFinite(m)?{y2:m}:{},currency:Fr(e,h)}}function Rp(e){const t=new Set;for(const n of e)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&t.add(o);return[...t].sort((n,o)=>n-o)}function zr(e,t,n){if(e.length===0)return null;if(t===null)return e[e.length-1];let o=0,r=e.length-1;for(;o<r;){const a=o+r>>1;e[a]<t?o=a+1:r=a}let s=o+n;return e[o]!==t&&n>0&&(s-=1),e[Math.max(0,Math.min(e.length-1,s))]}function Ip({x:e,y:t,size:n,color:o,text:r}){const s=n/2,a=`M 0 ${-s} L ${s} ${s*.8} L ${-s} ${s*.8} Z`,l=`M -0.9 ${-s*.42} H 0.9 V ${s*.2} H -0.9 Z`,c=`M -0.9 ${s*.4} H 0.9 V ${s*.64} H -0.9 Z`;return i.jsx(Pe,{text:r,focusable:!0,children:i.jsxs("g",{role:"img","aria-label":r,"data-limit-crossing":"",transform:`translate(${e} ${t})`,children:[i.jsx("title",{}),i.jsx("circle",{r:12,fill:"transparent"}),i.jsx("path",{d:`${a} ${l} ${c}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),i.jsx("path",{d:a,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function Aa(e,t,n){return n==="above"?e>=t:e<=t}function Lp({y:e,cx:t,cy:n,limit:o,limitY:r,bad:s,breaks:a=[],step:l=!1,minGapPx:c}){const d=($,j,S)=>{if(!j)return{index:$,x:t[$],y:n[$],entered:!1};if(S===null)return{index:$,x:t[$],y:r,entered:!0};const L=n[$]-n[S],E=L===0?1:(r-n[S])/L;return{index:$,x:t[S]+(t[$]-t[S])*E,y:r,entered:!0}},h=new Set(a),f=[];let x=null,m=!1,g=!1,v=Number.NEGATIVE_INFINITY;for(let $=0;$<e.length;$++){if(!Number.isFinite(e[$])){x=null;continue}const j=Aa(e[$],o,s);if(j&&!g){const S=d($,m,l||h.has($)?null:x),L=f[f.length-1];L!==void 0&&S.x-v<c?L.spells++:f.push({...S,spells:1}),v=S.x}g=j,m=!0,x=$}return f}const Tp=1;function Op(e,t,n,o,r){const s=n.to;if(s<1||s>=e.length)return!1;const a=o(e[s-1]),l=o(e[s]),c=r(t[s-1]),d=r(t[s]);return l>a?n.t.some((h,f)=>{const x=o(h),m=c+(d-c)*(x-a)/(l-a);return Math.abs(r(n.v[f])-m)>Tp}):!1}function Wn(e,t,n,o){const r=t-e;if(r===0){const s=(n+o)/2;return()=>s}return s=>n+(s-e)/r*(o-n)}function io(e,t,n=5){if(e===t)return Array.from({length:n},()=>e);const r=(t-e)/(n-1),s=10**Math.floor(Math.log10(r)),l=([1,2,2.5,5,10].find(x=>x*s>=r)??10)*s,c=Math.ceil(e/l)*l,d=[];for(let x=0;d.length<n;x++){const m=c+x*l;if(m>t+l*.01)break;d.push(m)}if(d.length>=2)return d;const h=Math.floor(e/l)*l,f=Math.ceil(t/l)*l;return f>h?[h,f]:[h,h+l]}function Ca(e,t){const n=Math.floor(e/1e3);if(t>=36e5){const s=Math.floor(n/3600),a=Math.floor(n%3600/60),l=n%60;return`${s}:${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")}`}const o=Math.floor(n/60),r=n%60;return`${o}:${String(r).padStart(2,"0")}`}function Dr(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];for(let a=0;a<e.length;a++){const l=n(e[a]).toFixed(2),c=o(t[a]).toFixed(2),d=a===0||r.includes(a);s.push(`${d?"M":"L"}${l},${c}`),d&&lo(a,e.length,r)&&s.push(`L${l},${c}`)}return s.join(" ")}function lo(e,t,n){return e+1>=t||n.includes(e+1)}function Np(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let a=o(t[0]).toFixed(2);const l=n(e[0]).toFixed(2);s.push(`M${l},${a}`),lo(0,e.length,r)&&s.push(`L${l},${a}`);for(let c=1;c<e.length;c++){const d=n(e[c]).toFixed(2),h=o(t[c]).toFixed(2);if(r.includes(c)){s.push(`M${d},${h}`),lo(c,e.length,r)&&s.push(`L${d},${h}`),a=h;continue}s.push(`H${d}`),h!==a&&s.push(`V${h}`),a=h}return s.join(" ")}function Fp(e,t,n,o,r,s=[],a=[],l=[]){if(e.length===0)return[];if(a.length===0&&l.length===0)return[{d:r(e,t,n,o,s)}];function c(v,$){const j=new Array(e.length);for(const S of v){const L=Math.min(e.length-1,S.to);for(let E=Math.max(0,S.from);E<=L;E++)j[E]=$(S)}return j}const d=c(a,v=>v.status),h=c(l,v=>v.basis),f=new Set(s),x=[];let m=0;const g=(v,$)=>{const j=v>0&&!f.has(v)?v-1:v,S=A=>A.slice(j,$+1),L=[];for(const A of s)A>j&&A<=$&&L.push(A-j);const E=r(S(e),S(t),n,o,L);E!==""&&x.push({status:d[v],basis:h[v],d:E})};for(let v=1;v<=e.length;v++)(v===e.length||d[v]!==d[m]||h[v]!==h[m])&&(g(m,v-1),m=v);return x}function Pa(e,t,n,o,r){if(e.length===0)return"";const s=Math.min(e.length,t.length,n.length);if(s===0)return"";const a=[];for(let l=0;l<s;l++){const c=o(e[l]).toFixed(2),d=r(n[l]).toFixed(2);a.push(`${l===0?"M":"L"}${c},${d}`)}for(let l=s-1;l>=0;l--){const c=o(e[l]).toFixed(2),d=r(t[l]).toFixed(2);a.push(`L${c},${d}`)}return a.push("Z"),a.join(" ")}function zp(e,t,n,o){const r=[];for(const s of t){const{bandLo:a,bandHi:l,bandKind:c}=s;if(!a||!l||c===void 0)continue;const d=[];for(let f=s.from;f<=s.to&&f<e.length;f++)d.push(e[f]);const h=Pa(d,a,l,n,o);h!==""&&r.push({d:h,kind:c})}return r}function Hr(e,t,n,o){if(e===t){const d=(n+o)/2;return()=>d}const r=e>0?e:1e-9,s=t>r?t:r*10,a=Math.log10(r),c=Math.log10(s)-a;if(c===0){const d=(n+o)/2;return()=>d}return d=>{const h=d>0?d:r;return n+(Math.log10(h)-a)/c*(o-n)}}function Dp(e,t,n=5){if(!(e>0)||!(t>0)||t<=e)return io(e,t,n);const o=Math.log10(e),r=Math.log10(t);if(r-o<1)return io(e,t,n);const a=Math.ceil(o),l=Math.floor(r),c=Math.max(1,Math.ceil((l-a+1)/n)),d=[];for(let h=a;h<=l;h+=c)d.push(10**h);return d.length>0?d:[e,t]}const Xn=.86,Br=[[0,-1.15],[1.05,.8],[-1.05,.8]],Wr=.3,be={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:Xn,triangle:Br,outlineWidth:Wr,keylineWidth:.2,reach:Math.max(Math.hypot(Xn,Xn),...Br.map(([e,t])=>Math.hypot(e,t)))+Wr/2},Hp={"aria-hidden":!0};function Ra(e,t,n,o){const r=be.squareHalf;return(e==="modelled"?be.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([a,l])=>[t+a*o,n+l*o])}const Ia=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function La(e,t,n){const o=e==="current"?0:be.outlineWidth;return t*(o+2*n*be.keylineWidth)}function Bp({x:e,y:t,r:n,state:o="current",keyline:r=!1}){const s=o==="current"?"":Ra(o,0,0,n).map(([a,l])=>`${a},${l}`).join(" ");return i.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...Hp,children:[r&&Ia.map(({ring:a,color:l,widths:c})=>{const d={"data-vessel-keyline":a,fill:"none",stroke:l,strokeWidth:La(o,n,c),strokeLinejoin:"round"};return o==="current"?i.jsx("circle",{r:n,...d},a):i.jsx("polygon",{points:s,...d},a)}),o==="current"?i.jsx("circle",{r:n,fill:be.color}):i.jsx("polygon",{points:s,fill:o==="lost"?"none":oe[o].color,stroke:o==="lost"?be.lost.color:be.color,strokeWidth:n*be.outlineWidth,strokeLinejoin:"round"})]})}function on(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function Ta(e,t,n,o,r){if(e.beginPath(),t==="current"){e.arc(n,o,r,0,Math.PI*2);return}Ra(t,n,o,r).forEach(([s,a],l)=>{l===0?e.moveTo(s,a):e.lineTo(s,a)}),e.closePath()}function Wp(e,t,n,o,r){e.save(),e.lineJoin="round";for(const{color:s,widths:a}of Ia)Ta(e,t,n,o,r),e.strokeStyle=s,e.lineWidth=La(t,r,a),e.stroke();e.restore()}function Xp(e,t,n,o,r,s=4,{keyline:a=!1}={}){a&&Wp(t,n,o,r,s);const l=on(e,be.cssVar,be.fallback);if(t.save(),Ta(t,n,o,r,s),n==="current")t.fillStyle=l,t.fill();else{if(n!=="lost"){const c=oe[n];t.fillStyle=on(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=n==="lost"?on(e,be.lost.cssVar,be.lost.fallback):l,t.lineWidth=s*be.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function yx(e,t,n,o=4,r={}){const{held:s,modelled:a}=n;s!==void 0&&a!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=on(e,oe.modelled.cssVar,oe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(a.x,a.y),t.stroke(),t.restore());for(const l of["lost","held","current","modelled"]){const c=n[l];c!==void 0&&Xp(e,t,l,c.x,c.y,o,r)}}const ht=56;function Oa(e,t,n,o){const r=Math.max(0,Math.min(t-1,Math.floor(n))),s=Math.max(0,Math.min(t-1,Math.floor(o))),a=Math.min(t-1,r+1),l=Math.min(t-1,s+1),c=Math.max(0,Math.min(1,n-r)),d=Math.max(0,Math.min(1,o-s)),h=e[s*t+r]+(e[s*t+a]-e[s*t+r])*c,f=e[l*t+r]+(e[l*t+a]-e[l*t+r])*c;return h+(f-h)*d}const Xr=400,Up=16,Yp=8,Ur=.06,Gp=3.3,qp=.6,Vp=60,Kp=40,Yr=[6,12],Gr=[48,96],Jt=2;function Un(e,t,n){const o=Math.max(0,Math.min(1,(n-e)/(t-e)));return o*o*(3-2*o)}function qr(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Vr(e,t){const n=t/e,o=e<=t?.07:.09,r=Gp**Math.exp(-((e-t)**2)/(2*o**2*t**2));return n**5*Math.exp(-1.25*n**4)*r}function Na(e,t,n){if(!(e>0)||!(t>0)||!(n>0)||!Number.isFinite(e+t+n))return[];const o=Math.sqrt(n*2*Math.PI/Xr),r=Vr(o,o),s=[];for(let a=-Jt;a<=Up*Jt;a++){const l=Xr/2**(a/Jt),c=l/e,d=Un(Yr[0],Yr[1],c)*(1-Un(Gr[0],Gr[1],c))*(1-Un(t,2*t,l));if(d<=.001)continue;const h=2*Math.PI/l,f=Math.sqrt(n*h),x=Math.sqrt(Math.min(1,Vr(f,o)/r)),m=(f>=o?Ur:Ur*x)/Math.sqrt(Jt),g=(Vp+(qr(a,1)-.5)*2*Kp)*Math.PI/180;s.push({kx:h*Math.sin(g),ky:h*Math.cos(g),k:h,amplitude:m/h,omega:f,phase:qr(a,2)*2*Math.PI,weight:d})}return s.slice(0,Yp)}function Zp(e,t,n,o){let r=0;for(const s of e)r+=s.weight*s.amplitude*Math.cos(s.kx*t+s.ky*n-s.omega*o+s.phase);return r}const rn=Fa(-.25,.3,.92),Qp=2.6,Jp=Fa(rn[0],rn[1],rn[2]+1),e0=.8,t0=3,n0=.95,o0=.35,r0=235,s0=.5,a0=.35;function Fa(e,t,n){const o=Math.hypot(e,t,n);return[e/o,t/o,n/o]}function i0(e,t,n,o){const{east0:r,north0:s,dx:a,dy:l,seconds:c,colour:d,waves:h,isSea:f}=o,[x,m,g]=rn,[v,$,j]=Jp,S=h.length,L=new Float64Array(S*t),E=new Float64Array(S*t),A=new Float64Array(S*n),M=new Float64Array(S*n);for(let T=0;T<S;T++){const B=h[T];for(let w=0;w<t;w++){const D=B.kx*(r+(w+.5)*a);L[T*t+w]=Math.cos(D),E[T*t+w]=Math.sin(D)}for(let w=0;w<n;w++){const D=B.ky*(s-(w+.5)*l)-B.omega*c+B.phase;A[T*n+w]=Math.cos(D),M[T*n+w]=Math.sin(D)}}const I=new Float64Array(S),_=new Float64Array(S),W=h.map(T=>T.kx*T.weight*T.amplitude),K=h.map(T=>T.ky*T.weight*T.amplitude),Q=h.map(T=>qp*T.k*T.weight*T.amplitude);for(let T=0;T<n;T++)for(let B=0;B<t;B++){const w=(T*t+B)*4;if(f&&!f(B,T)){e[w+3]=0;continue}let D=0,Z=0,de=1;for(let J=0;J<S;J++){const te=L[J*t+B],Xe=E[J*t+B],Ue=A[J*n+T],$e=M[J*n+T];I[J]=te*Ue-Xe*$e,_[J]=Xe*Ue+te*$e}for(let J=0;J<S;J++){const te=S>1?1+e0*I[(J+t0)%S]:1;D-=W[J]*I[J]*te,Z-=K[J]*I[J]*te,de-=Q[J]*_[J]*te}const Ze=1/Math.sqrt(D*D+Z*Z+de*de),we=(D*x+Z*m+de*g)*Ze-g,We=1+Qp*we;let ke=0;const ue=(D*v+Z*$+de*j)*Ze;if(ue>n0){let J=ue;for(let te=0;te<7;te++)J*=J;ke=255*o0*J}const Ae=Math.max(0,We-1)*a0,pe=Math.min(1,We)*s0;e[w]=d.r*pe+(255-d.r*pe)*Ae+ke,e[w+1]=d.g*pe+(255-d.g*pe)*Ae+ke,e[w+2]=d.b*pe+(255-d.b*pe)*Ae+ke,e[w+3]=r0}}function Kr(e){const t=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function l0(e,t){const n=Kr(t),o=Math.max(e.r,e.g,e.b,1),r=c=>({r:Math.min(255,e.r*c),g:Math.min(255,e.g*c),b:Math.min(255,e.b*c)});let s=0,a=255/o;for(let c=0;c<32;c++){const d=(s+a)/2;Kr(r(d))<n?s=d:a=d}const l=r((s+a)/2);return{r:Math.round(l.r),g:Math.round(l.g),b:Math.round(l.b)}}const c0=192,d0=30,u0="--color-info-mark",h0=.42;function f0(e,t){const n=e.view==="plan",o=t.scaleX,r=t.scaleYPrimary,s=1/(o(1)-o(0)),a=1/(r(1)-r(0)),l=j=>(j-o(0))*s,c=j=>(j-r(0))*a,d=Math.min(o(e.bounds.x0),o(e.bounds.x1)),h=Math.max(o(e.bounds.x0),o(e.bounds.x1)),f=Math.min(r(e.bounds.y0),r(e.bounds.y1)),x=Math.max(r(e.bounds.y0),r(e.bounds.y1)),m=n?d:Math.max(t.plotX0,d),g=n?h:Math.min(t.plotX1,h),v=n?f:Math.max(t.plotY0,f),$=n?x:Math.min(t.plotY1,x);return n&&(h<t.plotX0||d>t.plotX1||x<t.plotY0||f>t.plotY1)||!(g-m>=1&&$-v>=1)||!Number.isFinite(s+a)?null:{left:m,top:v,width:g-m,height:$-v,x0:l(m),x1:l(g),y0:c($),y1:c(v)}}function Zr(e,t){if(!t)return null;e.fillStyle=t;const n=/^#([0-9a-f]{6})$/i.exec(String(e.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function p0(e,t,n){const o=Zr(t,getComputedStyle(e).getPropertyValue(u0).trim());if(!o)return null;const r=n?Zr(t,n):null;return r?l0(r,o):o}function g0(e,t,n,o,r,s){const a=ht,l=(n.x1-n.x0)/a,c=(n.y1-n.y0)/a,d=t.sea,h=o.scaleYPrimary(t.bounds.y0)<o.scaleYPrimary(t.bounds.y1),f=d&&d.size>1&&d.heights.length>=d.size*d.size?(m,g)=>{const v=h?g:a-1-g;return Oa(d.heights,d.size,m/(a-1)*(d.size-1),v/(a-1)*(d.size-1))<0}:void 0,x=e.createImageData(a,a);i0(x.data,a,a,{east0:t.origin.east+n.x0,north0:t.origin.north+n.y1,dx:l,dy:c,seconds:r,colour:s,waves:Na(Math.max(l,c),n.x1-n.x0,t.gravity),isSea:f}),e.putImageData(x,0,0)}function m0(e,t,n,o,r){const{width:s,height:a}=e.canvas,l=x0(t,n,s),c=l.length>1?(l[l.length-1]-l[0])/(l.length-1):n.x1-n.x0,d=Na(c,n.x1-n.x0,t.gravity),h=(t.bearingDeg??90)*Math.PI/180,f=g=>(g-n.x0)/(n.x1-n.x0)*s,x=g=>(n.y1-g)/(n.y1-n.y0)*a;e.clearRect(0,0,s,a),e.beginPath(),l.forEach((g,v)=>{const $=Zp(d,t.origin.east+g*Math.sin(h),t.origin.north+g*Math.cos(h),o);v===0?e.moveTo(f(g),x($)):e.lineTo(f(g),x($))});const m=`${r.r}, ${r.g}, ${r.b}`;e.strokeStyle=`rgba(${m}, 0.9)`,e.lineWidth=1,e.stroke(),e.lineTo(f(l[l.length-1]),a),e.lineTo(f(l[0]),a),e.closePath(),e.fillStyle=`rgba(${m}, ${h0})`,e.fill()}function x0(e,t,n){const o=(e.samples??[]).filter(r=>r>t.x0&&r<t.x1);return e.samples&&e.samples.length>1?[t.x0,...o,t.x1]:Array.from({length:n+1},(r,s)=>t.x0+s/n*(t.x1-t.x0))}function v0({layer:e,frame:t}){const n=f0(e,t),o=p.useRef(null),r=p.useRef(null);r.current=n?{layer:e,at:n,frame:t}:null;const s=n?e.view==="plan"?ht:Math.max(1,Math.min(c0,Math.round(n.width))):0,a=n?e.view==="plan"?ht:Math.max(1,Math.round(n.height*s/n.width)):0,l=e.tint;return p.useEffect(()=>{const c=o.current,d=c?.getContext("2d")??null;if(!c||!d||s===0||a===0)return;const h=p0(c,d,l);if(!h)return;const f=()=>{const S=r.current;if(!S)return;const L=Date.now()/1e3;S.layer.view==="plan"?g0(d,S.layer,S.at,S.frame,L,h):m0(d,S.layer,S.at,L,h)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let m=!0;const g=typeof IntersectionObserver=="function"?new IntersectionObserver(S=>{m=S.some(L=>L.isIntersecting)}):null;g?.observe(c);let v=Number.NEGATIVE_INFINITY,$=0;const j=S=>{$=requestAnimationFrame(j),!(!m||document.hidden||S-v<1e3/d0)&&(v=S,f())};return $=requestAnimationFrame(j),()=>{cancelAnimationFrame($),g?.disconnect()}},[s,a,l]),n?i.jsx("g",{"aria-hidden":"true","data-plot-layer":e.id,"data-plot-layer-kind":"water",children:i.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:i.jsx("canvas",{ref:o,width:s,height:a,style:{display:"block",width:"100%",height:"100%",imageRendering:e.view==="plan"?"pixelated":"auto"}})})}):null}const y0={faint:.45,normal:.85,bright:1},b0=1.5,w0=5,k0=.9,jt=7,St=6,Yn=10,ft=9,Fe=12,$0=6.2,Gn=4,_0=9,M0=13,j0=.1,Tt={paintOrder:"stroke",strokeWidth:3,strokeLinejoin:"round"},qn=5,S0=.5,E0=.5;function Be(e){return se[e.tone??"neutral"]}function zt(e){return ye[e.tone??"neutral"]}function Re(e){return y0[e.emphasis??"normal"]}function Le(e,t){return t.axis==="secondary"?e.scaleYSecondary:e.scaleYPrimary}function A0(e){const t=e.axis==="secondary"?"secondary":"primary";switch(e.kind){case"series":return{xs:e.points.map(n=>n.x),ys:e.points.map(n=>n.y),axis:t};case"region":return{xs:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.x),ys:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.y),axis:t};case"rule":return e.along==="y"?{xs:[],ys:[e.value],axis:t}:{xs:[e.value],ys:[],axis:t};case"marker":case"annotation":return{xs:[e.at.x],ys:[e.at.y],axis:t};default:return{xs:[],ys:[],axis:t}}}const zo=5.8,at=11,Qr=4;function C0(e,t){const n=t.text.length*zo,{frame:o}=t,r=t.anchorX+t.gap,s=r+n<=o.plotX1-4?"start":"end",a=s==="start"?r:t.anchorX-t.gap,l=s==="start"?a:a-n,c=l+n,d=f=>e.some(x=>l<x.x1&&c>x.x0&&f-at<x.y1&&f+2>x.y0);let h=t.anchorY+3;for(let f=0;f<Qr&&d(h);f++)h+=at;if(d(h)){h=t.anchorY+3;for(let f=0;f<Qr&&d(h);f++)h-=at}return h=Math.min(Math.max(h,o.plotY0+at),o.plotY1-at),e.push({x0:l,x1:c,y0:h-at,y1:h+2}),{x:a,y:h,anchor:s}}function P0(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function R0(e){if(e.length===0)return"";const t=[`M${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`];for(let n=1;n<e.length;n++)t.push(`H${e[n].x.toFixed(2)}`,`V${e[n].y.toFixed(2)}`);return t.join(" ")}function za(e,t,n){if(e.length===0)return[];const o=e[0],r=e[e.length-1],s=[...e];if(t==="right"||t==="left"){const a=t==="right"?n.plotX1:n.plotX0;s.push({x:a,y:r.y},{x:a,y:o.y})}else{const a=t==="above"?n.plotY0:n.plotY1;s.push({x:r.x,y:a},{x:o.x,y:a})}return s}function I0(e,t){const n=[];for(const o of e){if(o.kind==="relief"||o.kind==="water"){const a=Le(t,o),{x0:l,y0:c,x1:d,y1:h}=o.bounds;n.push([{x:t.scaleX(l),y:a(c)},{x:t.scaleX(d),y:a(c)},{x:t.scaleX(d),y:a(h)},{x:t.scaleX(l),y:a(h)}]);continue}if(o.kind!=="region"||o.hatched)continue;const r=Le(t,o),s=o.boundary.map(a=>({x:t.scaleX(a.x),y:r(a.y)}));if(!(s.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...s,...o.boundaryHigh.map(a=>({x:t.scaleX(a.x),y:r(a.y)})).reverse()])}else n.push(za(s,o.side,t))}return(o,r)=>n.some(s=>{let a=!1;for(let l=0,c=s.length-1;l<s.length;c=l++){const d=s[l],h=s[c];d.y>r!=h.y>r&&o<(h.x-d.x)*(r-d.y)/(h.y-d.y)+d.x&&(a=!a)}return a})}function L0({layer:e,frame:t}){if(e.stops.length===0)return null;const n=Le(t,e),o=e.along==="y"?t.plotY1-t.plotY0:t.plotX1-t.plotX0;if(o<=0)return null;const r=e.along==="y"?t.plotY0:t.plotX0,s=e.along==="y"?n:t.scaleX,a=e.maxOpacity??E0,l=e.tint??Be(e),c=e.blur!==void 0?Math.ceil(e.blur*3):0,d=`plot-field-${e.id}-${t.uid}`,h=`plot-field-blur-${e.id}-${t.uid}`,f=e.along==="y"?t.plotY1:t.plotX1,x=e.stops.map(m=>({offset:(s(m.at)-r)/o*100,intensity:Math.max(0,Math.min(1,m.intensity))})).sort((m,g)=>m.offset-g.offset);return i.jsxs(i.Fragment,{children:[i.jsxs("defs",{children:[i.jsx("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:t.plotX0,y1:t.plotY0,x2:e.along==="x"?f:t.plotX0,y2:e.along==="y"?f:t.plotY0,children:x.map((m,g)=>i.jsx("stop",{offset:`${m.offset.toFixed(2)}%`,stopColor:l,stopOpacity:a*m.intensity},g))}),e.blur!==void 0&&i.jsx("filter",{id:h,children:i.jsx("feGaussianBlur",{stdDeviation:e.blur})})]}),i.jsx("rect",{"data-plot-layer":e.id,"data-plot-layer-kind":"field",x:t.plotX0-c,y:t.plotY0-c,width:t.plotX1-t.plotX0+2*c,height:t.plotY1-t.plotY0+2*c,fill:`url(#${d})`,filter:e.blur!==void 0?`url(#${h})`:void 0})]})}const T0=6,it=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function O0(e){const t=Math.max(0,Math.min(1,e));for(let n=1;n<it.length;n++)if(t<=it[n][0]){const[o,r]=it[n-1],[s,a]=it[n],l=s>o?(t-o)/(s-o):0;return[Math.round(r[0]+(a[0]-r[0])*l),Math.round(r[1]+(a[1]-r[1])*l),Math.round(r[2]+(a[2]-r[2])*l)]}return it[it.length-1][1]}const N0=[150,156,160],F0=[200,80,70];function z0(e,t){if(t===3)return N0;if(t!==1&&t!==2)return e;const n=.3*e[0]+.59*e[1]+.11*e[2],o=(s,a,l)=>s+(l-s)*a,r=e.map(s=>o(o(s,.5,n),.06,235));return t===1?r:r.map((s,a)=>o(s,.3,F0[a]))}function D0(e,t){const n=2*(t-1),o=(e%n+n)%n;return o<t?o:n-o}function H0(e,t,n,o,r,s,a){const l=e[s*n+a],c=r?D0(l,o):l,[d,h,f]=z0(O0(c/(o-1)),t[s*n+a]),x=a>0?e[s*n+a-1]:l,m=s>0?e[(s-1)*n+a]:l,g=x!==l||m!==l?.5:1;return`rgb(${Math.round(d*g)}, ${Math.round(h*g)}, ${Math.round(f*g)})`}function B0(e,t){const{bounds:n}=e,o=Le(t,e),r=t.scaleX(n.x0),s=t.scaleX(n.x1),a=o(n.y0),l=o(n.y1),c=Math.abs(s-r)/ht,d=Math.abs(l-a)/ht;return!(c>0)||!(d>0)?null:{left:Math.min(r,s),top:Math.min(a,l),cellW:c,cellH:d,flipRows:a<l}}function W0(e,t){const{size:n,values:o}=e;if(!t||n<2||o.length<n*n)return null;const{left:r,top:s,cellW:a,cellH:l,flipRows:c}=t;let d=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY;for(let E=0;E<n*n;E++){const A=o[E];if(!Number.isFinite(A))return null;A<d&&(d=A),A>h&&(h=A)}const f=h-d,x=e.bandMetres!=null&&e.bandMetres>0?e.bandMetres:null,m=e.veil,g=Math.max(2,e.bands??T0),v=ht,$=new Int16Array(v*v),j=new Uint8Array(v*v),S=m!=null&&m.length>=n*n;for(let E=0;E<v;E++)for(let A=0;A<v;A++){const M=A/(v-1)*(n-1),I=E/(v-1)*(n-1);S&&(j[E*v+A]=m[Math.round(I)*n+Math.round(M)]??0);const _=Oa(o,n,M,I);if(x!=null){$[E*v+A]=Math.floor(_/x);continue}const W=f>0?(_-d)/f:.5;$[E*v+A]=Math.max(0,Math.min(g-1,Math.floor(W*g)))}const L=[];for(let E=0;E<v;E++){const A=c?E:v-1-E;let M=0,I="";for(let _=0;_<=v;_++){const W=_<v?H0($,j,v,g,x!=null,E,_):"";if(_===0){I=W;continue}W===I&&_<v||(L.push(i.jsx("rect",{x:r+M*a,y:s+A*l,width:(_-M)*a+.5,height:l+.5,fill:I},`${E}-${M}`)),M=_,I=W)}}return L}function X0({layer:e,frame:t}){const n=B0(e,t),{values:o,size:r,veil:s,bandMetres:a,bands:l}=e,{left:c,top:d,cellW:h,cellH:f,flipRows:x}=n??{},m=p.useMemo(()=>W0(e,n),[o,r,s,a,l,c,d,h,f,x]);return m?i.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:Re(e),"aria-hidden":"true",children:m}):null}function U0({layer:e,frame:t}){const n=p.useId(),o=Le(t,e),r=d=>({x:t.scaleX(d.x),y:o(d.y)}),s=e.boundary.map(r);if(s.length<2)return null;const a=e.side==="between"?[...s,...(e.boundaryHigh??[]).map(r).reverse()]:za(s,e.side,t);if(e.side==="between"&&!e.boundaryHigh)return null;const l=e.side==="right"?t.plotX1-4:e.side==="left"?t.plotX0+11:s[s.length-1].x,c=(t.plotY0+t.plotY1)/2;return i.jsxs(i.Fragment,{children:[e.hatched&&i.jsx("defs",{children:i.jsx("pattern",{id:n,width:qn,height:qn,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:i.jsx("line",{x1:0,y1:0,x2:0,y2:qn,stroke:Be(e),strokeWidth:1,strokeOpacity:e.opacity??S0})})}),i.jsx("polygon",{"data-plot-layer":e.id,"data-plot-layer-kind":"region","data-hatched":e.hatched?"":void 0,points:a.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:e.hatched?`url(#${n})`:Be(e),fillOpacity:e.hatched?void 0:e.opacity??j0}),t.labels&&e.label&&i.jsx("text",{x:l,y:c,transform:`rotate(-90 ${l} ${c})`,textAnchor:"middle",fontSize:_0,letterSpacing:"0.14em",fill:"var(--color-text-muted)",stroke:"var(--color-surface-raised)",...Tt,children:e.label})]})}function Y0({layer:e,frame:t}){const n=Le(t,e),o=e.points.map(s=>({x:t.scaleX(s.x),y:n(s.y)}));if(o.length===0)return null;const r=b0*(e.weight??1);if(e.style==="scatter"){const s=e.radius===void 0?r:Math.abs(t.scaleX(e.radius)-t.scaleX(0));return i.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",fill:Be(e),opacity:Re(e),children:o.map((a,l)=>i.jsx("circle",{cx:a.x,cy:a.y,r:s},l))})}return i.jsx("path",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",d:e.style==="step"?R0(o):P0(o),fill:"none",stroke:Be(e),strokeOpacity:Re(e),strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:e.dashed?"5 3.5":void 0})}function G0({layer:e,frame:t}){const n=Le(t,e),o=e.dashed??!0,r=Be(e),s=e.along==="y",a=s?n(e.value):t.scaleX(e.value);return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"rule",x1:s?t.plotX0:a,x2:s?t.plotX1:a,y1:s?a:t.plotY0,y2:s?a:t.plotY1,stroke:r,strokeOpacity:Re(e),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),t.labels&&e.label&&i.jsx("text",{x:s?t.plotX1-4:a+3,y:s?a-3:t.plotY0+10,textAnchor:s?"end":"start",fill:zt(e),fontSize:ft,children:e.label})]})}function q0({layer:e,frame:t,placed:n}){const o=Le(t,e),r=t.scaleX(e.at.x),s=o(e.at.y),a=e.across??"x",l=Be(e),c=t.labels&&e.label?C0(n,{anchorX:r,anchorY:s,gap:jt+3,text:e.label,frame:t}):null;return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"annotation",x1:a==="x"?r-jt:r,x2:a==="x"?r+jt:r,y1:a==="x"?s:s-jt,y2:a==="x"?s:s+jt,stroke:l,strokeOpacity:Re(e),strokeWidth:1.75,strokeLinecap:"round"}),c&&e.label&&i.jsx("text",{x:c.x,y:c.y,textAnchor:c.anchor,fontSize:ft,letterSpacing:"0.05em",fill:zt(e),fillOpacity:Re(e),children:e.label})]})}function V0({layer:e,frame:t}){const n=Le(t,e),o=t.scaleX(e.at.x),r=n(e.at.y)+(e.offsetPx??0),s=w0*(e.scale??1),a=Be(e),l=e.shape??"dot",c={"data-plot-layer":e.id,"data-plot-layer-kind":"marker",opacity:Re(e)},d=l==="none"?null:l==="vessel"?i.jsx("g",{...c,children:i.jsx(Bp,{state:e.markState??"current",x:o,y:r,r:s*k0,keyline:!0})}):l==="dot"?i.jsx("circle",{...c,cx:o,cy:r,r:s,fill:a,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):l==="ring"?i.jsx("circle",{...c,cx:o,cy:r,r:s,fill:"none",stroke:a,strokeWidth:1.5}):l==="cross"?i.jsx("path",{...c,d:`M${o-s},${r} L${o+s},${r} M${o},${r-s} L${o},${r+s}`,stroke:a,strokeWidth:1.5,strokeLinecap:"round"}):l==="chevron-up"||l==="chevron-down"?i.jsx("polyline",{...c,points:l==="chevron-up"?`${o-s},${r+s*.5} ${o},${r-s*.5} ${o+s},${r+s*.5}`:`${o-s},${r-s*.5} ${o},${r+s*.5} ${o+s},${r-s*.5}`,fill:"none",stroke:a,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null,h=(e.label?.length??0)*zo/2+3,f=l==="none"?Math.min(Math.max(o,t.plotX0+h),t.plotX1-h):o+s+3,x=l==="none"?Math.min(Math.max(r+3,t.plotY0+ft+3),t.plotY1-4):r+3;return i.jsxs(i.Fragment,{children:[d,t.labels&&e.label&&i.jsx("text",{x:f,y:x,textAnchor:l==="none"?"middle":void 0,fontSize:ft,fill:zt(e),fillOpacity:Re(e),stroke:"var(--color-surface-raised)",...Tt,children:e.label})]})}function K0({layer:e,frame:t,row:n,edges:o}){const r=e.caption?2:1;if(e.anchor==="left-edge"||e.anchor==="right-edge"){const g=e.anchor==="left-edge"?t.plotX0+St+n*Fe:t.plotX1-St-n*Fe,v=t.plotY1-34;return i.jsx("text",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",x:g,y:v,transform:`rotate(-90 ${g} ${v})`,fontSize:ft,letterSpacing:"0.14em",fill:zt(e),fillOpacity:Re(e),stroke:"var(--color-surface-raised)",...Tt,children:e.text})}const s=e.anchor.startsWith("top"),a=e.anchor.endsWith("right"),l=g=>St+(g?M0:0),c=a?t.plotX1-l(o.right):t.plotX0+l(o.left),d=n*(r*Fe+2),h=s?t.plotY0+St+Yn+d:t.plotY1-St-d,f=h-Fe,x=Math.max(e.text.length*$0,(e.caption?.length??0)*zo)+2*Gn,m=(s?h:h-(e.caption?Fe:0))-Yn-1;return i.jsxs("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",textAnchor:a?"end":"start",children:[i.jsx("rect",{x:a?c-x+Gn:c-Gn,y:m,width:x,height:r*Fe+1,rx:3,fill:"var(--color-surface-raised)",fillOpacity:.8}),e.caption&&i.jsx("text",{x:c,y:s?h:f,fontSize:ft,letterSpacing:"0.05em",fill:"var(--color-text-faint)",stroke:"var(--color-surface-raised)",...Tt,children:e.caption}),i.jsx("text",{x:c,y:e.caption&&s?h+Fe:h,fontSize:Yn,fontWeight:700,fill:zt(e),fillOpacity:Re(e),stroke:"var(--color-surface-raised)",...Tt,children:e.text})]})}const Jr={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},Z0={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function Vn({layers:e,frame:t,pass:n}){const o=e.map((l,c)=>({layer:l,index:c})).filter(({layer:l})=>Z0[l.kind]===n).sort((l,c)=>Jr[l.layer.kind]-Jr[c.layer.kind]||(l.layer.z??0)-(c.layer.z??0)||l.index-c.index),r=new Map,s=[],a={left:e.some(l=>l.kind==="caption"&&l.anchor==="left-edge"||l.kind==="region"&&l.side==="left"&&!!l.label),right:e.some(l=>l.kind==="caption"&&l.anchor==="right-edge"||l.kind==="region"&&l.side==="right"&&!!l.label)};return i.jsx(i.Fragment,{children:o.map(({layer:l,index:c})=>{const d=`${l.id}-${c}`;switch(l.kind){case"relief":return i.jsx(X0,{layer:l,frame:t},d);case"water":return i.jsx(v0,{layer:l,frame:t},d);case"field":return i.jsx(L0,{layer:l,frame:t},d);case"region":return i.jsx(U0,{layer:l,frame:t},d);case"series":return i.jsx(Y0,{layer:l,frame:t},d);case"rule":return i.jsx(G0,{layer:l,frame:t},d);case"annotation":return i.jsx(q0,{layer:l,frame:t,placed:s},d);case"marker":return i.jsx(V0,{layer:l,frame:t},d);case"caption":{const h=r.get(l.anchor)??0;return r.set(l.anchor,h+1),i.jsx(K0,{layer:l,frame:t,row:h,edges:a},d)}default:return null}})})}function Q0(e){return e.map(t=>t.description).filter(t=>typeof t=="string"&&t.length>0)}const es=11,en=3,tn=4,ts=(e,t)=>e.x0<t.x1&&t.x0<e.x1&&e.y0<t.y1&&t.y0<e.y1;function J0(e,t,n,o,r){let s=0,a=1;const l=n-e,c=o-t,d=[[-l,e-r.x0],[l,r.x1-e],[-c,t-r.y0],[c,r.y1-t]];for(const[h,f]of d){if(h===0&&f<0)return!1;if(h!==0){const x=f/h;h<0?s=Math.max(s,x):a=Math.min(a,x)}}return s<=a}function eg(e,t){for(let n=1;n<e.cx.length;n++){const o=[e.cx[n-1],e.cy[n-1],e.cx[n],e.cy[n]];if(o.every(Number.isFinite)&&J0(o[0],o[1],o[2],o[3],t))return!0}return!1}function tg({labels:e,plot:t,obstacles:n,traces:o}){const r=[],s=new Map;for(const a of e){const l={y0:a.lineY-en-es,y1:a.lineY-en},c={y0:a.lineY+en,y1:a.lineY+en+es},d={x0:t.x1-tn-a.width,x1:t.x1-tn},h={x0:t.x0+tn,x1:t.x0+tn+a.width},f=[{...d,...l,anchor:"end"},{...d,...c,anchor:"end"},{...h,...l,anchor:"start"},{...h,...c,anchor:"start"}];let x=null;for(const m of f){if(!(m.x0>=t.x0&&m.x1<=t.x1&&m.y0>=t.y0&&m.y1<=t.y1)||r.some($=>ts(m,$)))continue;const v=2*n.filter($=>ts(m,$)).length+o.filter($=>eg($,m)).length;(x===null||v<x.cost)&&(x={spot:m,cost:v})}if(x===null){s.set(a.id,null);continue}r.push(x.spot),s.set(a.id,{x:x.spot.anchor==="end"?x.spot.x1:x.spot.x0,y:x.spot.y1-2,anchor:x.spot.anchor})}return s}const ng=4,og=2.5;function rg(e,t){if(e.length===0)return!1;const n=e[e.length-1]-t;return n===0?!0:e.length===1?!1:Math.sign(e[0]-t)!==Math.sign(n)}function sg(e,t){return e==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:t?e==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const ag=(e,t)=>Ca(e-t[0],t[1]-t[0]),bx=(e,t)=>Ca((e-t[0])*1e3,(t[1]-t[0])*1e3),Kn={top:10,bottom:28,left:50};function Da(e,t,n){const o=(s,a,l)=>Math.max(s,Math.min(l,a)),r=o(30,Math.round(e*.18),Kn.left);return{top:Kn.top,right:n?r:o(14,Math.round(e*.07),20),bottom:t<150?20:Kn.bottom,left:r}}const ns=e=>e.length*6.5+6,ig=4,lg=.4,cg=26,De=14,je=16,nn=4,dg=6,Et=(e,t)=>Math.min(e.length*6+8,t);function ug(e,t){const n=[];let o=0,r=0;for(const s of e)r>0&&r+s>t&&(o+=1,r=0),n.push({row:o,x:r}),r+=s+dg;return{rows:e.length===0?0:o+1,positions:n}}const os=4,hg=.03;function Zn(e,t){const n=Math.max(0,Math.floor(t/6));if(e.length<=n)return e;const o=e.lastIndexOf(" (");if(o>0&&e.length-o+4<=n){const r=n-(e.length-o)-3;return`${e.slice(0,r)}...${e.slice(o)}`}return n<4?"":`${e.slice(0,n-3)}...`}function rs(e,t){const n=e.split(/(?=M)/).filter(r=>r.length>0),o=[];for(const r of n){const s=[...r.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)];if(s.length<2)continue;const a=s[0],l=s[s.length-1];o.push(`${r.trim()} L${l[1]},${t} L${a[1]},${t} Z`)}return o.length>0?o.join(" "):null}function fg(e,t,n,o,r=1){const s=[],a=cg*Math.max(.5,Math.min(2,r));for(let l=e+a/2;l<t;l+=a)for(let c=n+a/2;c<o;c+=a)s.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return s}const pg=120,gg=90,mg=70,xg=35,vg=2,yg=12,ss=8,bg=2,ze=14,mn=6,xn=12,wg=16,kg=12,$g=200,as=10,_g=.2,is=.6,ls="5 3",Mg=.15,jg=.45,Sg="the value is inside the shaded region";function Eg(e){return(e.type??"line")==="band"&&e.data.y2?[...e.data.y,...e.data.y2]:e.data.y}function Ag({series:e,thresholds:t,yTickFormat:n}){const o=s=>s*mn,r=[];for(const s of e)r.push(o(s.label.length)+8);for(const s of t){if(s.kind==="marker"&&!s.label)continue;const a=s.label??n(s.value);r.push(o(a.length)+xn+8)}return Math.max(0,...r)+yg}function Cg({width:e,height:t,hasSecondary:n,series:o,thresholds:r}){const s=r.filter(h=>h.label);if(o.length===0||s.length===0)return!1;const a=Math.max(...o.map(h=>h.label.length*6+8)),l=Math.max(...s.map(h=>(h.label?.length??0)*mn+xn)),c=Da(e,t,n),d=e-c.left-c.right-De-wg;return a+l+kg>d}function wx({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:r=ag,yTickFormat:s=Pg,yScalePrimary:a="linear",yScaleSecondary:l="linear",thresholds:c,legend:d="overlay",hideXAxis:h=!1,density:f="chart",spatial:x=!1,gridScale:m=1,layers:g,"aria-label":v,crosshair:$=!1,xKind:j="time",xReadFormat:S,xAxisLabel:L,yAxisLabel:E,ySecondaryAxisLabel:A,card:M,cardForms:I=1,width:_,height:W}){const K=p.useId(),Q=f==="compact",T=Q?"none":d,B=x,w=B||Q,D=$&&!w&&e.some(u=>u.data.x.length>0),[Z,de]=p.useState(null),[Ze,we]=p.useState(!1),[We,ke]=p.useState(""),[ue,Ae]=p.useState(null),[pe,J]=p.useState(null),te=pe?.w===_&&pe.h===W?pe.form:0,[Xe,Ue]=p.useState(null),$e=M!=null,ae=Xe?.form===te?Xe:null;p.useLayoutEffect(()=>{if(!ue){Ue(null);return}const u=()=>Ue(b=>{const P={w:ue.offsetWidth,h:ue.offsetHeight,form:te};return b?.w===P.w&&b?.h===P.h&&b?.form===P.form?b:P});u();const y=new ResizeObserver(u);return y.observe(ue),()=>y.disconnect()},[ue,te]);const le=_,G=W,ie=e.filter(u=>u.axis==="primary"&&u.data.x.length>0),_e=e.filter(u=>u.axis==="secondary"&&u.data.x.length>0),Me=_e.length>0,An=T!=="none"&&e.length>0||(c??[]).some(u=>u.label),Do=Ag({series:e,thresholds:c??[],yTickFormat:s}),Ho=$e&&ae!==null&&ae.w+ss<=Math.max(112,Math.ceil(Do)),Bo=w||!An?{placement:"overlay"}:kp({width:le,height:G,contentWidth:Do,legendHeight:T==="none"?0:e.length*je+6,cardHeight:Ho&&ae!==null?ae.h:0}),xt=Bo.placement==="overlay"&&!w&&T!=="none"&&G>=$g&&Cg({width:le,height:G,hasSecondary:Me,series:e,thresholds:c??[]})?{placement:"below"}:Bo,Ce=T!=="none"&&(xt.placement==="below"||xt.placement==="beside"&&xt.legendBelow),Cn=Ce?ug(e.map(u=>Et(u.label,le-2*nn)),le-2*nn):{rows:0,positions:[]},Pn=Cn.rows===0?0:Cn.rows*je+4,Wo=!w&&!h&&!!L,Xo=!w&&!!E,Uo=!w&&Me&&!!A,Dt=B?0:1,Yo=w?{top:Dt,right:Dt,bottom:Dt,left:Dt}:Da(le,G,Me),Qe={...Yo,bottom:Yo.bottom+(Wo?De:0)+Pn},U=Qe.top,q=G-Qe.bottom,Te=q-U,Ht=p.useMemo(()=>{const u={primary:[],secondary:[]};for(const y of g??[]){const b=A0(y);u[b.axis].push(...b.ys)}return u},[g]),Je=p.useMemo(()=>cs(ie,n,a,Ht.primary),[ie,n,a,Ht]),et=p.useMemo(()=>cs(_e,o,l,Ht.secondary),[_e,o,l,Ht]),he=a==="log"?Hr(Je[0],Je[1],q,U):Wn(Je[0],Je[1],q,U),fe=l==="log"?Hr(et[0],et[1],q,U):Wn(et[0],et[1],q,U),Go=Math.max(2,Math.min(7,Math.round(Te/xg))),Rn=(u,y,b,P)=>{const R=Math.min(u,y),O=Math.max(u,y),C=(O-R)*1e-6||1e-6,z=V=>V>=R-C&&V<=O+C,Y=V=>P==="log"?Dp(R,O,V):io(R,O,V);for(let V=b;V<=64;V*=2){const xe=Y(V).filter(z);if(xe.length<2)continue;if(xe.length<=b)return xe;const $t=(xe.length-1)/(b-1),Ut=Array.from({length:b},(Lg,si)=>xe[Math.round(si*$t)]);return Array.from(new Set(Ut))}return[R,O]},Bt=Rn(Je[0],Je[1],Go,a==="log"?"log":"linear"),Wt=Me?Rn(et[0],et[1],Go,l==="log"?"log":"linear"):[],qo=(u,y)=>u.length===0?y:Math.max(y,Math.min(Math.round(le*lg),Math.max(...u.map(b=>ns(s(b,u))))+ig)),In=w?Qe:{left:qo(Bt,Qe.left)+(Xo?De:0),right:(Me?qo(Wt,Qe.right):Qe.right)+(Uo?De:0)},X=In.left,Vo=xt.placement==="beside"?xt.columnWidth:0,re=le-In.right-Vo,me=re-X,Ye=me>=pg&&Te>=gg,ee=Vo>0?{x0:re+(Me?In.right:0)+ss,y0:U,x1:le-bg,y1:q}:void 0,Ko=T==="none"||ee||Ce?[]:e.map((u,y)=>({x0:X+3,y0:U+6+y*je,x1:X+3+Et(u.label,me-6),y1:U+6+y*je+13})),ne=Wn(t[0],t[1],X,re),Ha=Math.max(2,Math.min(8,Math.round(me/mg))),vt=Rn(t[0],t[1],Ha,"linear"),Ba=p.useMemo(()=>{const u=[],y=vt.length-1;if(y<0)return u;const b=ns,P=6,R=C=>{const z=vt[C],Y=r(z,t,vt),V=ne(z),xe=b(Y),$t=C===0?"start":C===y?"end":"middle",Ut=$t==="start"?V:$t==="end"?V-xe:V-xe/2;return{x:V,text:Y,anchor:$t,leftEdge:Ut,rightEdge:Ut+xe}},O=R(0);if(u.push({x:O.x,text:O.text,anchor:O.anchor}),y>=1){const C=R(y);if(C.leftEdge>=O.rightEdge+P){let z=O.rightEdge;for(let Y=1;Y<y;Y++){const V=R(Y);V.leftEdge>=z+P&&V.rightEdge<=C.leftEdge-P&&(u.push({x:V.x,text:V.text,anchor:V.anchor}),z=V.rightEdge)}u.push({x:C.x,text:C.text,anchor:C.anchor})}}return u},[vt,t,ne,r]),Zo=(u,y)=>{const b=new Set,P=u.length;if(P===0||(b.add(0),P===1))return b;const R=16,O=y(u[0]),C=y(u[P-1]);if(Math.abs(C-O)>=R){let z=O;for(let Y=1;Y<P-1;Y++){const V=y(u[Y]);Math.abs(V-z)>=R&&Math.abs(C-V)>=R&&(b.add(Y),z=V)}b.add(P-1)}return b},Wa=Zo(Bt,he),Xa=Zo(Wt,fe),Oe=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>{const y=u.axis==="primary"?he:fe,b=u.type??"line";if(b==="band")return u.data.y2?{id:u.id,kind:"band",color:u.color,opacity:u.fillOpacity??_g,d:Pa(u.data.x,u.data.y,u.data.y2,ne,y)}:{id:u.id,kind:"noop"};if(b==="scatter"){const C=u.data.x.map((z,Y)=>({cx:ne(z),cy:y(u.data.y[Y])}));return{id:u.id,kind:"scatter",color:u.color,points:C}}const P=b==="step"?Np:Dr,R=(u.data.bridges??[]).filter(C=>Op(u.data.x,u.data.y,C,ne,y)),O=[...new Set([...u.data.breaks??[],...R.map(C=>C.to)])].sort((C,z)=>C-z);return{id:u.id,kind:"stroked",color:u.color,dashed:u.dashed??!1,uncertainty:zp(u.data.x,u.data.reckoned??[],ne,y),segments:Fp(u.data.x,u.data.y,ne,y,P,O,u.data.spans,u.data.reckoned),modelled:R.map(C=>({basis:C.basis,d:Dr([u.data.x[C.to-1],...C.t,u.data.x[C.to]],[u.data.y[C.to-1],...C.v,u.data.y[C.to]],ne,y)})),tail:u.data.x.length>0&&(u.data.reckoned??[]).some(C=>C.to>=u.data.x.length-1)?{cx:ne(u.data.x[u.data.x.length-1]),cy:y(u.data.y[u.data.y.length-1])}:null,observed:[...new Set(R.flatMap(C=>[C.to-1,C.to]))].map(C=>({cx:ne(u.data.x[C]),cy:y(u.data.y[C])}))}}),[e,ne,he,fe]),Ge=p.useMemo(()=>c?c.map(u=>{const y=u.axis??"primary",b=e.filter(R=>R.axis===y&&R.type!=="band"&&!R.dashed),P=u.kind==="limit"?b.some(R=>{const O=R.data.y.filter(C=>Number.isFinite(C));return O.length>0&&Aa(O[O.length-1],u.value,u.bad)}):u.kind==="target"&&b.some(R=>rg(R.data.y,u.value));return{id:u.id,label:u.label,spokenLabel:u.spokenLabel,value:u.value,kind:u.kind,passed:P,currency:yn(u.reading,{drawsReckoning:!0}),tone:sg(u.kind,P),dashed:u.kind!=="marker",y:y==="primary"?he(u.value):fe(u.value)}}):[],[c,e,he,fe]),yt=p.useMemo(()=>{const u=(y,b,P)=>Math.max(y,Math.min(P,b));return(c??[]).flatMap(y=>{if(y.kind!=="limit"||!Number.isFinite(y.value))return[];const b=y.axis??"primary",P=b==="primary"?he:fe,R=P(y.value),O=y.bad==="above"?-1:1,C=y.label||`the limit at ${s(y.value)}`;return e.filter(z=>z.axis===b&&z.data.x.length>0&&(z.type??"line")!=="band"&&!z.dashed).flatMap(z=>Lp({y:z.data.y,cx:z.data.x.map(ne),cy:z.data.y.map(P),limit:y.value,limitY:R,bad:y.bad,breaks:z.data.breaks,step:z.type==="step"||z.type==="scatter",minGapPx:ze}).slice(Ye?0:-1).map(Y=>{const V=s(z.data.y[Y.index]),xe=r(z.data.x[Y.index],t);return{key:`${y.id}-${z.id}-${Y.index}`,color:z.color,x:u(X+ze/2+1,Y.x-as*(Y.entered?1:-1),re-ze/2-1),y:u(U+ze/2+1,Y.y+O*as,q-ze/2-1),text:Y.entered?Y.spells>1?`${z.label} went past ${C} ${Y.spells} times from ${xe}, first reading ${V}`:`${z.label} went past ${C} at ${xe}, reading ${V}`:`${z.label} was already past ${C} when this window began at ${xe}, reading ${V}`}}))})},[c,e,ne,he,fe,r,s,t,X,re,U,q,Ye]),ce=(()=>{if(!$e||ae===null||w)return;if(ee&&Ho){const R={x0:ee.x0,y0:q-ae.h,x1:ee.x0+ae.w,y1:q},O=U+(T==="none"||Ce?0:e.length*je+6);return R.x1<=ee.x1&&R.y0>=O?R:void 0}const u=ze/2,y=[...e.filter(R=>(R.type??"line")!=="band").flatMap(R=>{const O=R.axis==="primary"?he:fe,C=R.data.x.map(ne),z=R.data.y.map(O);return R.type==="scatter"?C.map((Y,V)=>({cx:[Y],cy:[z[V]]})):[{cx:C,cy:z}]}),...Ge.map(R=>({cx:[X,re],cy:[R.y,R.y]}))],b=[...yt.map(R=>({x0:R.x-u,y0:R.y-u,x1:R.x+u,y1:R.y+u})),...T==="none"||ee||Ce?[]:e.map((R,O)=>({x0:X+3,y0:U+6+O*16,x1:X+3+Math.min(R.label.length*6+8,me-6),y1:U+6+O*16+13}))],P=Sp({plot:{x0:X,y0:U,x1:re,y1:q},card:{width:ae.w,height:ae.h},traces:y,obstacles:b});return P?{x0:P.x,y0:P.y,x1:P.x+ae.w,y1:P.y+ae.h}:void 0})(),tt=p.useMemo(()=>{if(!Ye)return new Map;const u=ze/2;return tg({labels:Ge.filter(y=>y.label).map(y=>({id:y.id,width:(y.label?.length??0)*mn+(y.currency.held?xn:0),lineY:y.y})),plot:ee??{x0:X,y0:U,x1:re,y1:q},obstacles:[...ce?[ce]:[],...yt.map(y=>({x0:y.x-u,y0:y.y-u,x1:y.x+u,y1:y.y+u})),...T==="none"||Ce?[]:e.map((y,b)=>({x0:ee?ee.x0:X+3,y0:U+6+b*je,x1:(ee?ee.x0:X+3)+Et(y.label,ee?ee.x1-ee.x0:me-6),y1:U+6+b*je+13}))],traces:(ee?[]:e).filter(y=>(y.type??"line")!=="band").map(y=>({cx:y.data.x.map(ne),cy:y.data.y.map(y.axis==="primary"?he:fe)}))})},[Ye,ce,ee,Ge,yt,T,Ce,e,ne,he,fe,X,re,U,q,me]),Ua=(()=>{const u=U+6;if(T==="none"||Ce||e.length===0)return u;const y=ee?ee.x0:X+3,b=y+Math.max(...e.map(O=>Et(O.label,ee?ee.x1-ee.x0:me-6))),P=Ge.flatMap(O=>{const C=tt.get(O.id);if(!O.label||!C)return[];const z=O.label.length*mn+(O.currency.held?xn:0),Y=C.anchor==="end"?C.x-z:C.x;return[{x0:Y,y0:C.y-9,x1:Y+z,y1:C.y+2}]});ce&&P.push(ce);const R=e.length*je-3;for(let O=u;O+R<=q;O+=je){const C={x0:y,y0:O,x1:b,y1:O+R};if(!P.some(z=>C.x0<z.x1&&z.x0<C.x1&&C.y0<z.y1&&z.y0<C.y1))return O}return u})(),Ya=e.flatMap(u=>{const y=Oe.find(C=>C.id===u.id),b=y?.kind==="stroked"?y.modelled.map(C=>C.basis):[],P=u.data.reckoned??[];if(P.length===0&&b.length===0)return[];const O=[...new Set([...P.map(C=>C.basis),...b])].map(C=>`${u.label}: part of this trace is reckoned, ${_p(C)}, not measured`);return P.some(C=>C.bandLo&&C.bandHi)&&O.push(`${u.label}: ${Sg}`),O}),Ga=Ge.flatMap(u=>{const y=u.spokenLabel??u.label??u.id,b=[];return u.passed&&u.kind==="limit"&&b.push(`${y}: limit passed`),u.passed&&u.kind==="target"&&b.push(`${y}: target reached`),u.currency.held&&b.push(Xs(y,u.currency.caption)),u.label&&!tt.get(u.id)&&b.length===0&&b.push(u.spokenLabel??u.label),b}),Ln=[...Ya,...Ga],qa=[v??"Telemetry line chart",...Q0(g??[]),...Ln].join("; "),Tn=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>j==="value"?Cp(u):u),[e,j]),On=p.useMemo(()=>D?Rp(Tn):[],[D,Tn]),bt=Math.min(t[0],t[1]),wt=Math.max(t[0],t[1]),Va=j==="value"?(wt-bt)*hg:void 0;function Qo(u){const y=Tn.map(b=>{const P=Pp(b,u,Va),R=b.format??s,O=b.axis==="primary"?he:fe,C=(b.type??"line")==="band";return P===null?{id:b.id,label:b.label,color:b.color,value:null}:{id:b.id,label:b.label,color:b.color,value:C&&P.y2!==void 0?`${R(P.y)} to ${R(P.y2)}`:R(P.y),currency:P.currency==="measured"?void 0:P.currency,modelled:P.currency==="modelled",y:C?void 0:O(P.y)}});if(Ye)for(const b of Ge)b.kind!=="marker"&&y.push({id:`threshold-${b.id}`,label:b.kind,color:b.tone.label,value:b.label??s(b.value),detail:!0,currency:b.currency.held?b.currency.mark==="modelled"?"modelled":"held":void 0,modelled:b.currency.held&&b.currency.mark==="modelled"});return{heading:(S??r)(u,t),rows:y}}function Jo(u){const{heading:y,rows:b}=Qo(u);return[y,...b.map(P=>`${P.label} ${P.value??"no sample"}${P.currency?`, ${P.currency}`:""}`)].join("; ")}const er=e.filter(u=>(u.type??"line")!=="band").map(u=>({cx:u.data.x.map(ne),cy:u.data.y.map(u.axis==="primary"?he:fe)})),tr=ce?[...er,Ep(ce)]:er,nr=$e&&!w&&ae!==null&&ae.w>0&&ae.h>0&&!ce&&te<I-1;p.useLayoutEffect(()=>{nr&&J({w:_,h:W,form:te+1})},[nr,_,W,te]);const Ka=u=>{let y=u,b=Number.POSITIVE_INFINITY;for(const P of On)P<bt||P>wt||Math.abs(P-u)<b&&(b=Math.abs(P-u),y=P);return y},qe=D&&Z!==null&&Z.at>=bt&&Z.at<=wt?Ka(Z.at):null,nt=qe===null?null:Qo(qe),kt=nt!==null&&qe!==null?fp({x:ne(qe),plot:{x0:X,y0:U,x1:re,y1:q},heading:nt.heading,rows:nt.rows,avoid:Ko,traces:tr}):void 0,Za=ce!==void 0&&kt!==void 0&&kt.x0<ce.x1&&kt.x1>ce.x0&&kt.y0<ce.y1&&kt.y1>ce.y0;function Qa(u){const y=u.currentTarget.getBoundingClientRect(),b=u.clientX-y.left;return b<X||b>re?null:t[0]+(b-X)/(re-X)*(t[1]-t[0])}function Ja(u){const y=Qa(u);if(y===null){de(b=>b?.source==="pointer"?null:b);return}de({at:y,source:"pointer"})}function ei(u){const y=On.filter(O=>O>=bt&&O<=wt),b={ArrowLeft:u.shiftKey?-10:-1,ArrowRight:u.shiftKey?10:1,Home:-y.length,End:y.length};if(u.key==="Escape"){if(Z===null)return;u.preventDefault(),de(null),ke("");return}const P=b[u.key];if(P===void 0)return;u.preventDefault();const R=zr(y,qe,P);R!==null&&(de({at:R,source:"keys"}),ke(Jo(R)))}function ti(u){try{we(u.currentTarget.matches(":focus-visible"))}catch{we(!0)}if(Z!==null)return;const y=zr(On.filter(b=>b>=bt&&b<=wt),null,0);y!==null&&(de({at:y,source:"keys"}),ke(Jo(y)))}function ni(){we(!1),de(u=>u?.source==="keys"?null:u),ke("")}const oi=D?{tabIndex:0,onPointerMove:Ja,onPointerLeave:()=>de(u=>u?.source==="pointer"?null:u),onKeyDown:ei,onFocus:ti,onBlur:ni}:{},Xt={scaleX:ne,scaleYPrimary:he,scaleYSecondary:fe,plotX0:X,plotX1:re,plotY0:U,plotY1:q,uid:K,labels:Ye},ri=B&&g?I0(g,Xt):()=>!1,Nn=`plot-layer-clip-${K}`;if(me<=0||Te<=0)return i.jsx("svg",{width:Math.max(0,le),height:Math.max(0,G),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:i.jsx("title",{children:"Chart too small to render"})});const or=i.jsxs("svg",{width:le,height:G,role:yt.length>0||D?"group":"img","aria-label":qa,"aria-describedby":D?`${K}-crosshair-hint`:void 0,...oi,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...D?{touchAction:"pan-y",outline:Ze?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[g&&g.length>0&&i.jsx("defs",{children:i.jsx("clipPath",{id:Nn,children:i.jsx("rect",{x:X,y:U,width:me,height:Te})})}),Ln.length>0&&i.jsx("title",{children:Ln.join("; ")}),i.jsx("rect",{x:X,y:U,width:me,height:Te,fill:"var(--color-surface-panel)"}),g&&g.length>0&&i.jsx("g",{clipPath:`url(#${Nn})`,children:i.jsx(Vn,{layers:g,frame:Xt,pass:"background"})}),!w&&Bt.map((u,y)=>{const b=he(u);return i.jsxs(Yt.Fragment,{children:[i.jsx("line",{x1:X,y1:b,x2:re,y2:b,stroke:"var(--color-border-subtle)",strokeWidth:1}),Wa.has(y)&&i.jsx("text",{x:X-4,y:b,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,Bt)})]},`py-${y}`)}),!w&&Wt.map((u,y)=>Xa.has(y)?i.jsx("text",{x:re+4,y:fe(u),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,Wt)},`sy-${y}`):null),!h&&!w&&vt.map((u,y)=>i.jsx("line",{x1:ne(u),y1:U,x2:ne(u),y2:q,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${y}`)),!h&&!w&&Ba.map((u,y)=>i.jsx("text",{x:u.x,y:q+14,textAnchor:u.anchor,fill:"var(--color-text-faint)",fontSize:11,children:u.text},`xl-${y}`)),Wo&&i.jsx("text",{x:(X+re)/2,y:G-Pn-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:Zn(L,me)}),Xo&&i.jsx("text",{x:De/2,y:(U+q)/2,transform:`rotate(-90 ${De/2} ${(U+q)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:Zn(E,Te)}),Uo&&i.jsx("text",{x:le-De/2,y:(U+q)/2,transform:`rotate(90 ${le-De/2} ${(U+q)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:Zn(A,Te)}),B&&fg(X,re,U,q,m).filter(u=>!ri(u.x,u.y)).map(u=>i.jsx("circle",{cx:u.x,cy:u.y,r:1,fill:"var(--color-text-faint)",opacity:.35},u.key)),!w&&i.jsxs(i.Fragment,{children:[i.jsx("line",{x1:X,y1:U,x2:X,y2:q,stroke:"var(--color-border-strong)",strokeWidth:1}),i.jsx("line",{x1:X,y1:q,x2:re,y2:q,stroke:"var(--color-border-strong)",strokeWidth:1}),Me&&i.jsx("line",{x1:re,y1:U,x2:re,y2:q,stroke:"var(--color-border-strong)",strokeWidth:1})]}),Oe.filter(u=>u.kind==="band").map(u=>i.jsx("path",{d:u.d,fill:u.color,fillOpacity:u.opacity,stroke:"none"},u.id)),Oe.filter(u=>u.kind==="stroked").flatMap(u=>u.uncertainty.map((y,b)=>i.jsx("path",{d:y.d,"data-band-kind":y.kind,fill:u.color,fillOpacity:Mg,stroke:y.kind==="bound"?u.color:"none",strokeOpacity:y.kind==="bound"?jg:void 0,strokeWidth:y.kind==="bound"?1:void 0},`${u.id}-band-${b}`))),Oe.filter(u=>u.kind==="stroked").flatMap(u=>u.segments.map((y,b)=>i.jsxs(Yt.Fragment,{children:[Q&&y.basis===void 0&&rs(y.d,q)&&i.jsx("path",{d:rs(y.d,q)??void 0,fill:u.color,fillOpacity:.12,stroke:"none"}),i.jsx("path",{d:y.d,"data-stream-status":y.status,"data-reckoning-basis":y.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:y.basis!==void 0?is:void 0,strokeDasharray:y.basis!==void 0?ls:u.dashed?"4 3":void 0})]},`${u.id}-${b}`))),Oe.filter(u=>u.kind==="stroked").flatMap(u=>u.modelled.map((y,b)=>i.jsx("path",{d:y.d,"data-reckoning-basis":y.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:is,strokeDasharray:ls},`${u.id}-modelled-${b}`))),Oe.map(u=>u.kind==="stroked"&&u.tail!==null?i.jsx(Sa,{kind:"modelled",x:u.tail.cx,y:u.tail.cy},`${u.id}-tail`):null),Oe.filter(u=>u.kind==="stroked").flatMap(u=>u.observed.map((y,b)=>i.jsx("circle",{cx:y.cx,cy:y.cy,r:og,fill:u.color,"data-observed-sample":""},`${u.id}-observed-${b}`))),Oe.filter(u=>u.kind==="scatter").flatMap(u=>u.points.map((y,b)=>i.jsx("circle",{cx:y.cx,cy:y.cy,r:vg,fill:u.color},`${u.id}-${b}`))),e.map(u=>{if(!u.headMark)return null;const y=u.axis==="primary"?he:fe;let b=u.data.x.length-1;for(;b>=0&&!(Number.isFinite(u.data.x[b])&&Number.isFinite(u.data.y[b]));)b-=1;return b<0?null:i.jsx("circle",{cx:ne(u.data.x[b]),cy:y(u.data.y[b]),r:ng,fill:u.headMark==="dot"?u.color:"var(--color-surface-panel)",stroke:u.color,strokeWidth:u.headMark==="dot"?0:1.5,"data-head-mark":u.headMark},`${u.id}-head`)}),g&&g.length>0&&i.jsx("g",{clipPath:`url(#${Nn})`,children:i.jsx(Vn,{layers:g,frame:Xt,pass:"foreground"})}),Ge.map(u=>i.jsxs(Yt.Fragment,{children:[i.jsx("line",{x1:X,y1:u.y,x2:Q&&u.kind==="marker"?X+24:re,y2:u.y,stroke:u.tone.line,strokeWidth:1,strokeDasharray:u.dashed?"4 3":void 0,"data-threshold-kind":u.kind,"data-threshold-passed":u.passed||void 0}),Q&&u.kind==="marker"&&u.label&&i.jsx("text",{x:X+28,y:u.y+3.5,fill:u.tone.label,fontSize:10,children:u.label}),!(Q&&u.kind==="marker")&&u.label&&tt.get(u.id)&&i.jsxs("text",{x:tt.get(u.id)?.x,y:tt.get(u.id)?.y,textAnchor:tt.get(u.id)?.anchor,fill:u.tone.label,fontSize:10,children:[u.label,u.currency.held&&i.jsx(ro,{size:10,kind:u.currency.mark??"held"})]})]},u.id)),yt.map(u=>i.jsx(Ip,{x:u.x,y:u.y,size:ze,color:u.color,text:u.text},u.key)),T!=="none"&&e.map((u,y)=>{const b=Ce?Cn.positions[y]:void 0,P=b?G-Pn+2+b.row*je:Ua+y*je;if(!Ce&&P+13>q)return null;const R=b?nn+b.x:ee?ee.x0:X+3,O=Ce?le-2*nn:ee?ee.x1-ee.x0:me-6,C=Et(u.label,O),z=Math.max(1,Math.floor((C-8)/6)),Y=u.label.length>z?`${u.label.slice(0,Math.max(1,z-1))}...`:u.label;return i.jsxs(Yt.Fragment,{children:[i.jsx("rect",{x:R,y:P,width:C,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),i.jsx("text",{x:R+3,y:P+10,fill:u.color,fontSize:10,children:Y})]},u.id)}),g&&g.length>0&&Ye&&i.jsx(Vn,{layers:g,frame:Xt,pass:"caption"}),nt!==null&&qe!==null&&i.jsx(pp,{x:ne(qe),plot:{x0:X,y0:U,x1:re,y1:q},heading:nt.heading,rows:nt.rows,avoid:Ko,traces:tr})]}),rr=$e?i.jsx("div",{ref:Ae,"data-plot-card":"",style:{position:"absolute",left:ce?.x0??0,top:ce?.y0??0,visibility:ce&&!Za?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof M=="function"?M({width:me-os*2,height:Te-os*2,form:te}):M}):null;return D?i.jsxs(i.Fragment,{children:[or,rr,i.jsx(He,{id:`${K}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),i.jsx(He,{role:"status","aria-live":"polite",children:We})]}):i.jsxs(i.Fragment,{children:[or,rr]})}function cs(e,t,n,o=[]){if(t)return t;if(e.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let r=[...e.flatMap(Eg),...o];return n==="log"&&(r=r.filter(s=>s>0)),r.length===0?n==="log"?[1,10]:[0,1]:[Math.min(...r),Math.max(...r)]}function Pg(e){if(e===0)return"0";if(Math.abs(e)>=1e6)return`${(e/1e6).toFixed(1)}M`;if(Math.abs(e)>=1e3)return`${(e/1e3).toFixed(1)}k`;if(Number.isInteger(e))return String(e);if(Math.abs(e)<.01){const t=Math.floor(Math.log10(Math.abs(e))),n=e/10**t;return Math.abs(n-1)<1e-9?`1e${t}`:`${n.toFixed(1)}e${t}`}return e.toFixed(2)}const Rg=p.createContext(null);function Ig(e,t){const n=p.useContext(Rg),o=n?.setFooter,r=n?.setDirty;p.useEffect(()=>(o?.(e),()=>o?.(null)),[o,e]),p.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function kx(e){const{onSave:t,value:n,saved:o,saveLabel:r="Save",extra:s,disabled:a}=e,l=p.useRef(null);l.current===null&&(l.current={v:n});const c=!ct(n,l.current.v)&&!ct(n,o),d=p.useRef(t);d.current=t;const h=p.useMemo(()=>i.jsxs(i.Fragment,{children:[s,i.jsx(Ki,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:a,children:r})]}),[s,a,r]);Ig(h,c)}export{He as $,Tm as A,cn as B,Mm as C,bm as D,qg as E,ll as F,sm as G,Wm as H,il as I,am as J,Am as K,gm as L,Sm as M,_m as N,Em as O,gx as P,$m as Q,zm as R,Dm as S,xm as T,wa as U,em as V,mm as W,dd as X,Cm as Y,Vg as Z,tm as _,Nm as a,Ws as a$,ct as a0,Gg as a1,A0 as a2,bn as a3,Ig as a4,kx as a5,bx as a6,_n as a7,Ii as a8,Rg as a9,cm as aA,ro as aB,qm as aC,Vm as aD,Km as aE,dm as aF,Rs as aG,fm as aH,hx as aI,pp as aJ,oe as aK,Jm as aL,Ms as aM,Sa as aN,Vs as aO,gh as aP,Um as aQ,hm as aR,Zm as aS,be as aT,Bp as aU,Ou as aV,wr as aW,Ao as aX,Qs as aY,Bs as aZ,nx as a_,ha as aa,ln as ab,yn as ac,Pe as ad,mo as ae,Ke as af,Es as ag,Fm as ah,tx as ai,Im as aj,vu as ak,Qu as al,_t as am,wm as an,Gu as ao,$o as ap,ox as aq,rx as ar,px as as,dx as at,Ah as au,mx as av,Ym as aw,Gm as ax,lm as ay,Wd as az,Om as b,Co as b0,Js as b1,_u as b2,hl as b3,om as b4,bo as b5,nm as b6,Ss as b7,xx as b8,Lr as b9,Ru as bA,$d as bB,Wi as bC,Vi as bD,vn as bE,Qm as bF,sx as bG,sl as bH,yr as bI,ta as bJ,ix as bK,Xp as ba,yx as bb,ux as bc,kp as bd,rm as be,fp as bf,vx as bg,Mn as bh,_p as bi,lx as bj,Xs as bk,to as bl,Od as bm,Eu as bn,Po as bo,fx as bp,cx as bq,ua as br,Vh as bs,mt as bt,Du as bu,wo as bv,fl as bw,wx as bx,ex as by,ax as bz,pm as c,um as d,Ki as e,Rm as f,Lm as g,Pm as h,cd as i,Kg as j,km as k,Qg as l,cl as m,Zg as n,hh as o,Jg as p,wh as q,Xm as r,Bm as s,vm as t,ym as u,Hm as v,jm as w,im as x,dl as y,ud as z};
