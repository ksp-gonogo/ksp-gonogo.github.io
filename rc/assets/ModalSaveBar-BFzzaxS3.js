import{j as a}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import k,{css as H,createGlobalStyle as li}from"./ext-styled-components-DAuodqsN.js";import{r as p,R as Yt}from"./ext-react-C0MU9AHG.js";import{cG as Pt,cL as sn,b9 as us,l as ci,a_ as lt,b0 as hs,ci as pt,aN as Gt,cn as fs,b1 as di}from"./view-clock-formula-DVPsyl3O.js";import"./ksp-enum-names--qouUfWh.js";import{G as uo,z as ui}from"./screen-B9otUi5A.js";import{m as Jn,l as ps,T as se,d as ye,x as gt,a1 as ho,N as an,w as Tt,a2 as fo,a3 as hi,a4 as fi,a5 as pi,a6 as gs,a7 as gi,G as ar,a8 as mi,a9 as xi,aa as vi,ab as yi,ac as bi,n as wi,Q as po,Y as dt,ad as ki,ae as $i,J as _i,j as ms,Z as Mi,k as Ot,K as xs,af as ji,S as vs,ag as ys,U as ir,A as qt,f as lr,ah as cr,s as zn,ai as Si,aj as Ei}from"./contributionsRead-CeBanPYg.js";import{I as Ai}from"./index-ImT5B8WX.js";import"./lagrange-BR544sNK.js";import{R as Ci}from"./use-transmissions-BWg3YY9q.js";import{gridToPixels as Pi}from"./ext-ui-kit-grid-CYQFMmYG.js";import{r as Ri}from"./ext-react-dom-DCF8ZnaJ.js";const em={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function tm({children:e,layout:t="inline",...n}){return a.jsx(Ii,{$layout:t,...n,children:e})}const Li={inline:H``,fill:H`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},Ii=k.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>Li[e]}
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
`,Ti="data-restoring-focus",Oi=120,Ni=48,Fi=120,dr=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function zt(e){return bs(e,"below")}function bs(e,t){const[n,o]=p.useState(null),[r,s]=p.useState(!1),[i,l]=p.useState(!1),[c,d]=p.useState(!1),[h,f]=p.useState(!1),x=p.useRef(null),m=p.useRef(!1),g=p.useRef(!1),v=p.useRef(null),$=e!=null&&e!==""?e:null,S=n!==null&&(r||i||c||h),j=p.useCallback(()=>{v.current!==null&&clearTimeout(v.current),v.current=null},[]),I=p.useCallback(()=>{j(),o(null),s(!1),l(!1),d(!1),f(!1),m.current=!1},[j]);p.useEffect(()=>{if(!h)return;const M=()=>{const _=document.getSelection(),B=_!==null&&!_.isCollapsed&&x.current?.contains(_.anchorNode)===!0;!m.current&&!B&&f(!1)},R=()=>{m.current=!1,M()};return document.addEventListener("pointerup",R),document.addEventListener("selectionchange",M),()=>{document.removeEventListener("pointerup",R),document.removeEventListener("selectionchange",M)}},[h]);const E=p.useCallback(()=>{j(),v.current=setTimeout(()=>{v.current=null,s(!1),d(!1)},Fi)},[j]);if(p.useEffect(()=>j,[j]),p.useEffect(()=>{if(n!==null)return window.addEventListener("scroll",I,!0),window.addEventListener("resize",I),()=>{window.removeEventListener("scroll",I,!0),window.removeEventListener("resize",I)}},[n,I]),p.useEffect(()=>{if(!S)return;const M=R=>{R.key==="Escape"&&(R.stopPropagation(),I())};return document.addEventListener("keydown",M,!0),()=>document.removeEventListener("keydown",M,!0)},[S,I]),$===null)return{anchor:{},tip:null};const C=M=>{const R=M.getBoundingClientRect();o({top:R.bottom,left:R.left,above:t==="above"?R.top>=Ni:window.innerHeight-R.bottom<Oi,anchorTop:R.top})};return{anchor:{"data-tooltip":$,onPointerEnter:M=>{j(),C(M.currentTarget),s(!0)},onPointerLeave:E,onPointerDown:()=>{g.current=!0,I()},onPointerUp:()=>{g.current=!1},onFocus:M=>{g.current||document.documentElement.hasAttribute(Ti)||(C(M.currentTarget),l(!0))},onBlur:()=>{l(!1),!r&&!c&&o(null)}},tip:S?Ri.createPortal(a.jsx(zi,{ref:x,at:n,text:$,onPress:()=>{m.current=!0,f(!0)},onPointerEnter:()=>{j(),d(!0)},onPointerLeave:E}),document.body):null}}const zi=p.forwardRef(function({at:t,text:n,onPress:o,onPointerEnter:r,onPointerLeave:s},i){const l=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return a.jsx(Hi,{ref:i,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),o()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...l,left:t.left,"--tip-left":`${t.left}px`},children:n})});function ot(e,t){return(...n)=>{typeof e=="function"&&e(...n),t?.(...n)}}function Pe({text:e,children:t,focusable:n=!1,announce:o=!0,placement:r="below"}){const{anchor:s,tip:i}=bs(e,r);if(e==null||e==="")return t;const l=t.props,c=l["aria-label"],d=!o||typeof c=="string"&&dr(c).includes(dr(e));return a.jsxs(a.Fragment,{children:[p.cloneElement(t,{"data-tooltip":e,onPointerEnter:ot(l.onPointerEnter,s.onPointerEnter),onPointerLeave:ot(l.onPointerLeave,s.onPointerLeave),onPointerDown:ot(l.onPointerDown,s.onPointerDown),onPointerUp:ot(l.onPointerUp,s.onPointerUp),onFocus:ot(l.onFocus,s.onFocus),onBlur:ot(l.onBlur,s.onBlur),"aria-description":d?l["aria-description"]:e,tabIndex:n?l.tabIndex??0:l.tabIndex}),i,n&&a.jsx(Di,{})]})}const Di=li`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Hi=k.div`
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
`;function ws(e){let t="";return p.Children.forEach(e,n=>{if(typeof n=="string"||typeof n=="number"){t+=String(n);return}p.isValidElement(n)&&(t+=ws(n.props.children))}),t.replace(/\s+/g," ").trim()}function ks({label:e,children:t,disabledReason:n}){return Bi({label:e,children:t,disabledReason:n})}function Bi({label:e,children:t,disabledReason:n}){const o=e!==void 0&&e!==""&&e!==ws(t)?e:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function $s(e,t){return e===!0&&t!==void 0&&t!==""}function _s(e){e.preventDefault(),e.stopPropagation()}function Ms(e,t,n){return t===null||e.props["data-tooltip"]!==void 0?e:a.jsx(Pe,{text:t,announce:n,children:e})}const go="max(0.075em, 1.25px)",oe={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},De=k.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,eo=oe.held.domSize,to=oe.modelled.domSize,Wi=H`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${eo} + 0.14em);
  }
`,Xi=H`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${to} + 0.14em);
  }
`;function Ui(e){return H`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${oe[e].hollowDomSize} + 0.14em);
    }
  `}function js(e,t=!1){return t?Ui(e):e==="current"?null:e==="modelled"?Xi:Wi}const Yi=k.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${eo};
  height: ${eo};
  background: ${oe.held.color};
`,Gi=k.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${to};
  height: ${to};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${oe.modelled.color};
`,mo=e=>H`
  position: absolute;
  right: 0;
  top: 0;
  width: ${oe[e].hollowDomSize};
  height: ${oe[e].hollowDomSize};
`,qi=k.span`
  ${mo("current")}
  border: ${go} solid ${oe.current.color};
  border-radius: var(--radius-circle);
`,Vi=k.span`
  ${mo("held")}
  border: ${go} solid ${oe.held.color};
`,Ki=k.span`
  ${mo("modelled")}
  --stroke: ${go};
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
`,Zi={current:qi,held:Vi,modelled:Ki};function Ss({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?Zi[e]:e==="modelled"?Gi:Yi;return a.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const Qi=k.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>js(e??"held",t)}
`;function xo({caption:e,kind:t="held",elsewhere:n=!1,children:o,...r}){const{anchor:s,tip:i}=zt(e);return a.jsxs(Qi,{$kind:t,$elsewhere:n,...r,...s,children:[o,a.jsx(Ss,{kind:t,elsewhere:n}),e!==null&&a.jsxs(De,{"data-unit-currency":"",children:[", ",e]}),i]})}const Ji=p.forwardRef(function({variant:t="default",tone:n,size:o="md",pressed:r,predictedOutcome:s,disabledReason:i,marked:l,type:c="button",...d},h){const f=$s(d.disabled,i),x=ks({label:d["aria-label"],children:d.children,disabledReason:f?i:void 0}),{disabled:m,onClick:g,children:v,...$}=d;return Ms(a.jsx(ll,{ref:h,$variant:t,$tone:n??(t==="primary"?"go":"neutral"),$size:o,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,"data-held-button":l?"":void 0,...$,disabled:f?void 0:m,...f?{"aria-disabled":!0}:{},onClick:f?_s:g,type:c,children:l?a.jsx(el,{kind:l.kind,caption:l.caption,children:v}):v}),x,f)}),el=k(xo)`
  position: static;

  &::after {
    content: none;
  }

  & > [data-held-mark] {
    top: 3px;
    right: 3px;
  }
`;function tl(e){return e==="neutral"?"go":e}const vo=e=>H`
  background: ${Jn[e]};
  border-color: ${Jn[e]};
  color: ${ps[e]};
`,nl=e=>H`
  border-color: ${se[e]};
  color: ${ye[e]};
`,ur={default:H`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:H`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},ol=H`
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
`,rl=H`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function sl(e,t){return e==="text"?ol:e==="primary"?vo(t):t==="neutral"?ur[e]:H`
    ${ur[e]}
    ${nl(t)}
  `}const al=H`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,il={sm:H`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:H`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},ll=k.button`
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

  ${({$size:e})=>il[e]}
  ${({$variant:e,$tone:t})=>sl(e,t)}
  ${({$pressed:e,$tone:t})=>e?vo(tl(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":al}
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

  ${({$variant:e})=>e==="text"?rl:""}
`,nm=k.button`
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
`,cl=k.button`
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
    ${vo("go")}
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
`,dl=p.forwardRef(function({pressed:t,disabledReason:n,...o},r){const s=$s(o.disabled,n),i=ks({label:o["aria-label"],children:o.children,disabledReason:s?n:void 0}),{disabled:l,onClick:c,...d}=o;return Ms(a.jsx(cl,{ref:r,"aria-pressed":t,...d,disabled:s?void 0:l,...s?{"aria-disabled":!0}:{},onClick:s?_s:c}),i,s)}),om=k.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,ul=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,rm=k.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,hl=k.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,sm=k.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,am=k.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,yo=H`
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
`,fl=k.input`
  ${yo}
  width: 100%;
`,im=k.select`
  ${yo}
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
`,lm=k.textarea`
  ${yo}
  width: 100%;
  resize: vertical;
`;function pl(e){if(e===void 0)return null;const{value:t}=ho(e.magnitude,e.unit);return t===an?null:t}function Es(e,t){const n=pl(t);return n===null?e:`${e}, as of ${n}`}const bo="modelled to SCET";function As(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function hr(e){return sn(e.value)||Pt(e.value)?{shown:e.value,held:!1,mark:null,isStatic:sn(e.value),isDeterministic:Pt(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:Es(gt(e.grade),e.asOfUt)}}function yn(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:sn(e),isDeterministic:Pt(e),caption:null,band:null};const n=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!Pt(e.value)){const o=e.reckoning.modelled;if(e.state==="held"){const s=hr(e),i=e.value===void 0,l=s.held||i,c=s.caption??(i?"":null);return{...s,shown:o,held:l,mark:l?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:n}}const r=e.reckoning.beyondReceived;return{shown:o,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?bo:null,band:n}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:sn(e.value),isDeterministic:Pt(e.value),caption:null,band:n}:e.state==="held"?{...hr(e),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Cs(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function gl(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:bo}:null;if(e.state==="held"){const n=Es(gt(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function cm(e){return e===void 0?null:typeof e!="string"?gl(e):{kind:"held",caption:gt(e)}}function wo(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function dm(e,t){const n=wo(t);return n===void 0?e:{state:"held",value:e,grade:n,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}function ko(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function ml(e={}){return ko(t=>Tt(t,e))}const xl=.01;function um({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const r=Math.abs(t(n)-t(o));return(e?Math.min(r,1-r):r)<=xl}}}function no(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(r=>!n.readsAsOne(e,r))}/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=e=>{const t=yl(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},wl=p.createContext({}),kl=()=>p.useContext(wl),$l=p.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:o,className:r="",children:s,iconNode:i,...l},c)=>{const{size:d=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:x="currentColor",className:m=""}=kl()??{},g=o??f?Number(n??h)*24/Number(t??d):n??h;return p.createElement("svg",{ref:c,...Dn,width:t??d??Dn.width,height:t??d??Dn.height,stroke:e??x,strokeWidth:g,className:Ps("lucide",m,r),...!s&&!bl(l)&&{"aria-hidden":"true"},...l},[...i.map(([v,$])=>p.createElement(v,$)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=(e,t)=>{const n=p.forwardRef(({className:o,...r},s)=>p.createElement($l,{ref:s,iconNode:t,className:Ps(`lucide-${vl(fr(e))}`,`lucide-${e}`,o),...r}));return n.displayName=fr(e),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Ml=N("arrow-down",_l);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Sl=N("arrow-left",jl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Al=N("arrow-right",El);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Pl=N("arrow-up-to-line",Cl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Ll=N("arrow-up",Rl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Tl=N("bell",Il);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Nl=N("check",Ol);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],zl=N("chevron-down",Fl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Hl=N("chevron-left",Dl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Wl=N("chevron-right",Bl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ul=N("chevron-up",Xl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],Gl=N("columns-2",Yl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],Vl=N("computer",ql);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],Zl=N("corner-down-left",Kl);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Jl=N("database",Ql);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],tc=N("file-text",ec);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],oc=N("grip",nc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],sc=N("heart",rc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],ic=N("history",ac);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],cc=N("house",lc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],uc=N("info",dc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],fc=N("joystick",hc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],gc=N("layers",pc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],xc=N("lightbulb-off",mc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],yc=N("lightbulb",vc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],wc=N("lock",bc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],$c=N("maximize",kc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Mc=N("menu",_c);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],Sc=N("microscope",jc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],Ac=N("minimize",Ec);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Pc=N("pause",Cc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Lc=N("pencil",Rc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Tc=N("play",Ic);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Nc=N("plus",Oc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],zc=N("radio",Fc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Hc=N("rectangle-horizontal",Dc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],Wc=N("rectangle-vertical",Bc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Uc=N("rotate-ccw",Xc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],Gc=N("rotate-cw",Yc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],Vc=N("rows-2",qc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],Zc=N("satellite",Kc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Jc=N("settings",Qc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],td=N("square",ed);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],od=N("star",nd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],sd=N("undo-2",rd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],id=N("volume-2",ad);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],cd=N("volume-x",ld);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],ud=N("wrench",dd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],fd=N("x",hd),pd="var(--icon-size-control)",gd={strokeWidth:1.8,"aria-hidden":!0};function F(e,t){const n=p.forwardRef(({label:o,size:r=pd,style:s,...i},l)=>{const c=typeof r=="number"?{size:r,style:s}:{style:{width:r,height:r,...s}},d=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return a.jsx(e,{...gd,...t,...d,...i,...c,ref:l})});return n.displayName=e.displayName??e.name,n}const hm=F(oc),fm=F(fc),pm=F(ic),gm=F(cc),mm=F(uc),xm=F(wc),vm=F(zc),ym=F(id),bm=F(cd),wm=F(Tl),km=F(gc),$m=F(Jc),_m=F(Zc),Mm=F($c),jm=F(Ac),Sm=F(Jl),Em=F(Vl),Am=F(tc),Cm=F(Nc,{strokeWidth:2.4}),md=F(fd),Pm=F(Lc),Rm=F(Nl),xd=F(od),Lm=F(sc),Im=F(Mc),vd=F(Sc),Tm=F(Tc),Om=F(Pc),Nm=F(td),Fm=F(Ul),zm=F(zl),Dm=F(Hl),Hm=F(Wl),Bm=F(Sl),Wm=F(Ll),Xm=F(Al),Um=F(Ml),Ym=F(Pl),Gm=F(sd),qm=F(Gc),Vm=F(Uc),Km=F(Gl),Zm=F(Hc),Qm=F(Vc),Jm=F(Wc),ex=F(Zl),yd=N("space-helmet",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M10.5 8h3a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 1 0-7z",key:"visor"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),bd=N("space-helmet-visor-up",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M8 7.5C9.5 5 14.5 5 16 7.5",key:"visor"}],["circle",{cx:"12",cy:"12.5",r:"2",fill:"currentColor",key:"face"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),tx=F(yd),nx=F(bd),ox=F(ud),rx=F(yc),sx=F(xc),wd={},kd={byKey:new Map,unaddressed:void 0,separate:!1};function pr(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function $d(e,t){if(e.separate!==t.separate||!pr(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!pr(o,t.byKey.get(n)))return!1;return!0}function _d(e,t,n,o){const r=new Map;e!==void 0&&r.set(fo(e),n);for(const[s,i]of Object.entries(t??{}))i!==void 0&&r.set(pi(s),i);return{byKey:r,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function Md(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function jd(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function Sd(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,i)=>s.depth-i.depth);let r=!1;for(const s of o)s.resettle(n)&&(r=!0);if(r)for(const s of t)s()}}}function Ed(e){const t=new Map,n=new Map,o=new Set,r=e?.root??Sd();let s=kd;const i=c=>{let d;for(const h of c){const f=h.position;f!==void 0&&(d===void 0||f.base>d.base)&&(d=f)}return d?.rung},l={root:r,depth:e===void 0?0:e.depth+1,hold(c,d,h){const f=t.get(c);if(h===void 0)f!==void 0&&(f.delete(d),f.size===0&&t.delete(c));else{if(jd(f?.get(d),h))return;f===void 0?t.set(c,new Map([[d,h]])):f.set(d,h)}e===void 0?r.sweep(c):e.hold(c,d,h)},settled:c=>n.get(c),readsAsOneFigure:c=>o.has(c),setPolicy(c){if(!$d(s,c)){s=c;for(const d of t.keys())r.sweep(d)}},resettle(c){const d=[...t.get(c)?.values()??[]],h=e?.settled(c),f=s.byKey.get(c)??s.unaddressed??wd,x=f.format??h?.format??i(d),m=f.as??h?.as,g=f.decimals??(s.separate?gi(d,{format:x,as:m}):h?.decimals),v=x===void 0&&m===void 0&&g===void 0?void 0:{...x!==void 0&&{format:x},...m!==void 0&&{as:m},...g!==void 0&&{decimals:g}},$=s.separate&&gs(d,{format:x,as:m,decimals:g}),S=$!==o.has(c);return $?o.add(c):o.delete(c),Md(n.get(c),v)?S:(v===void 0?n.delete(c):n.set(c,v),!0)},attach(){r.family.add(l);for(const c of t.keys())r.sweep(c)},detach(){r.family.delete(l)}};return r.family.add(l),l}const $o={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},Nt=p.createContext($o);function Ad(){return p.useContext(Nt)!==$o}function ax({children:e,of:t,pins:n,format:o,as:r,decimals:s,separate:i=!1}){const l=p.useContext(Nt),[c]=p.useState(()=>Ed(l===$o?void 0:l));return p.useLayoutEffect(()=>(c.attach(),()=>c.detach()),[c]),p.useLayoutEffect(()=>{c.setPolicy(_d(t,n,{format:o,as:r,decimals:s},i))},[c,t,n,o,r,s,i]),a.jsx(Nt.Provider,{value:c,children:e})}function Cd(e,t={}){const n=p.useContext(Nt),o=p.useId(),r=us(e),s=e?.unit,l=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||r===null?void 0:fo(s),c=l===void 0||r===null||s===void 0||hi(s)===void 0?void 0:fi(r,s),d=c?.base,h=c?.rung;return p.useLayoutEffect(()=>{if(!(l===void 0||r===null||s===void 0))return n.hold(l,o,{reading:r,unit:s,...d!==void 0&&h!==void 0&&{position:{base:d,rung:h}}}),()=>n.hold(l,o,void 0)},[n,o,l,r,s,d,h]),p.useSyncExternalStore(n.root.subscribe,()=>l===void 0?void 0:n.settled(l),()=>{})}function ix(e,t={}){const n=p.useContext(Nt),r=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||us(e)===null||e===null||e===void 0?void 0:fo(e.unit);return p.useSyncExternalStore(n.root.subscribe,()=>r===void 0?!1:n.readsAsOneFigure(r),()=>!1)}const Pd=vi,Rd={sci:vd,rep:xd},Rs=k.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,Ld=k.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?H`
          position: relative;
          ${js(e,t)}
        `:""}
`,Id=k.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,Td=k(De)`
  user-select: none;
`,Ls=k(De)`
  user-select: none;
`,Od=" ";function Nd(e,t,n,o){if(t===void 0)return null;const r=x=>ho(x.magnitude,x.unit,{...n,format:o}).value,s=(x,m)=>r(m.minus(x)),i=gs([t.lo,t.hi],{...n,format:o});if(!no(e,[t.lo,t.hi],ko(r)))return null;const l=s(t.lo,t.value),c=s(t.value,t.hi),d=x=>/^[-+\u2212]?[0.,\s]*$/.test(x);if(!i&&d(l)&&d(c))return null;const h=r(t.value)===r(e),f={...n,format:o};return{oneFigure:i,plusMinus:!i&&h&&l===c?c:null,lo:r(t.lo),hi:r(t.hi),loSaid:ar(t.lo,f),hiSaid:ar(t.hi,f),kind:t.kind}}function Fd(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function Hn({token:e,className:t,spaced:n}){const o=mi(e,xi(e));if(o==="")return null;const r=yi(o),s=Rd[o],i=Pd.has(o),l=r!==void 0;return a.jsxs(a.Fragment,{children:[n&&!i?Od:null,a.jsx(Pe,{text:r,announce:!1,children:a.jsxs(Rs,{$attached:i,$icon:s!==void 0,className:t,"data-unit":e,children:[s?a.jsx(s,{size:"1em"}):l?a.jsx("span",{"aria-hidden":"true",children:o}):o,l&&a.jsxs(Ls,{"data-unit-word":"",children:[" ",r]})]})})]})}function ln({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:r,marked:s,elsewhere:i,...l}){const c=yn(e,{drawsReckoning:r}),d=s!=null&&!c.held&&c.shown!=null?{...c,held:!0,mark:s.kind,caption:s.caption}:c,{shown:h,held:f,mark:x,band:m}=d,g=i!=null&&i!==""&&h!=null,v=x??(g?"current":null),$=g?[d.caption,i].filter(Boolean).join("; "):d.caption,S=Cd(h,l),j=Ad(),I=o===!0&&j,E=S===void 0?l:{...S,...l},C=ho(h?.magnitude,h?.unit,E),M=h==null||m===null||!f?null:Nd(h,ci(m,h.unit),E,C.rung),{anchor:R,tip:_}=zt(Fd($,M));return e!==void 0||t===void 0?a.jsxs(Ld,{className:n,$mark:v,$elsewhere:g,...Cs(d),...R,children:[C.value,!I&&a.jsx(Hn,{token:C.symbol,spaced:!0}),M!==null&&a.jsxs(Id,{"data-unit-band":"",children:[M.oneFigure?a.jsxs(a.Fragment,{children:[" (",a.jsx("span",{"aria-hidden":"true",children:"~"}),a.jsx(Ls,{"data-unit-word":"",children:"approximately "}),M.lo]}):M.plusMinus===null?` (${M.lo} to ${M.hi}`:` ± ${M.plusMinus}`,!I&&a.jsx(Hn,{token:C.symbol,spaced:!0}),M.plusMinus===null?")":null]}),v!==null&&a.jsx(Ss,{kind:v,elsewhere:g}),$!==null&&a.jsxs(Td,{"data-unit-currency":"",children:[", ",$]}),_]}):typeof t!="string"?a.jsx(Rs,{$attached:!1,$icon:!1,className:n,children:t}):a.jsx(Hn,{token:t,className:n,spaced:!1})}const zd=k.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function Is({observed:e,modelled:t,write:n}){if(t==null)return null;if(n===void 0){const o=t;return no(e,o,ml())?a.jsx(gr,{children:a.jsx(ln,{value:o})}):null}return no(e,t,ko(n))?a.jsx(gr,{children:n(t)}):null}function gr({children:e}){return a.jsx(zd,{"data-modelled-alongside":"",children:a.jsx(xo,{"data-held":"",kind:"modelled",caption:bo,children:e})})}function lx({value:e}){return a.jsxs(a.Fragment,{children:[a.jsx(ln,{value:e}),a.jsx(Is,{observed:e.value,modelled:As(e)})]})}function _o({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,r=v=>bi(typeof v=="number"?v:v.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,i=As(s);if(s?.value!==void 0&&i!==void 0)return a.jsxs(a.Fragment,{children:[r(s.value),a.jsx(Is,{observed:s.value,modelled:i,write:r})]});const l=yn(o,{drawsReckoning:!0}),{shown:c,held:d,mark:h,caption:f}=l,x=typeof e=="number"?e:c;if(x==null)return an;const m=r(x),g=Cs({...l,shown:x});return d?a.jsx(xo,{...g,kind:h??"held",caption:f,children:m}):a.jsx("span",{"data-figure":g["data-figure"],children:m})}function bn(e){const t=p.useRef(null),[n,o]=p.useState(e),[r,s]=p.useState(null);return p.useEffect(()=>{t.current!==r&&s(t.current)}),p.useEffect(()=>{if(!r||typeof ResizeObserver>"u")return;const i=new ResizeObserver(l=>{for(const c of l)c.contentRect.width>0&&c.contentRect.height>0&&o({w:Math.floor(c.contentRect.width),h:Math.floor(c.contentRect.height)})});return i.observe(r),()=>i.disconnect()},[r]),{ref:t,size:n}}const Dd='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Ts(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),r=n[o+1]??n[o-1];if(r&&r!==e){r.focus();return}const s=t.closest("[data-panel-rail-frame]"),i=s?s.parentElement?.querySelector("[data-panel-body]"):t.closest("[data-panel-body]");if(!i)return;const l=[...i.querySelectorAll(Dd)].find(c=>c!==e);if(l){l.focus();return}i.hasAttribute("tabindex")||i.setAttribute("tabindex","-1"),i.focus()}function Mo(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const jo={"in-transit":.18,"awaiting-reply":.5,due:.62,overdue:.82,lost:.95};function Hd(e){const t=e.reachEtaSeconds,n=Bd(e);if(t===null||n===null)return jo[e.predictedPhase];const o=n-t;return Math.max(0,Math.min(1,o/(3*n)))}function Bd(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function Wd(e){return e.map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:Hd(t),glyph:t.glyph??Mo(t.label||t.command),...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function cx({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||uo(e)!=="shown"?"none":n||ui({oneWaySeconds:lt("s",e)})==="live"?"badge":t?"strip":"none"}const Xd={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},oo={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Ud(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Xd[e.phase]}const wn=new Set(["overdue","lost"]),Yd=180,Gd=96;function Os(e){return Tt(lt("s",Math.max(0,e)))}function qd(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const Vd=1;function So(e){const t=Ai(),n=p.useRef(t);n.current=t;const[o,r]=p.useState(e),s=p.useRef({eta:e,ut:Bn(t)});return p.useEffect(()=>{const i=s.current.eta;(i===null!=(e===null)||i!==null&&e!==null&&Math.abs(e-i)>=Vd)&&(s.current={eta:e,ut:Bn(n.current)},r(e))},[e]),p.useEffect(()=>{const i=setInterval(()=>{const{eta:l,ut:c}=s.current;if(l===null)return;const d=Bn(n.current);if(d!==void 0){if(c===void 0){s.current={eta:l,ut:d};return}r(Math.max(0,l-(d-c)))}},1e3);return()=>clearInterval(i)},[]),o}function Bn(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function Kd({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":r="In-flight commands",variant:s="inline",onDismiss:i}){const{ref:l,size:c}=bn({w:320,h:0});if(s==="rail")return e.length===0?null:a.jsx(eu,{items:e,"aria-label":r});if(s==="expanded")return e.length===0?null:a.jsx(su,{items:e,"aria-label":r,onDismiss:i});const d=n!=="auto"?n:c.w>=Yd?"full":c.w>=Gd?"compact":"badge";return e.length===0?null:d==="badge"?a.jsx(tu,{ref:l,items:e,mode:t,"aria-label":r}):a.jsx(Fs,{ref:l,role:"list","aria-label":r,"data-mode":t,"data-density":d,$row:o==="row",children:e.map(h=>a.jsx(nu,{item:h,$compact:d==="compact"},h.id))})}const Wn=100,mr=16,Zd=-4,Qd=9,Jd=.22;function eu({items:e,"aria-label":t}){const n=p.useId(),o=`${e.length} in flight`;return a.jsxs(ou,{role:"img","aria-label":`${t}: ${o}`,viewBox:`0 0 ${Wn} ${mr}`,preserveAspectRatio:"none",children:[a.jsx("defs",{children:e.map((r,s)=>{const i=wn.has(r.phase)?se.warn:"var(--color-accent-fg)",c=Math.max(0,Math.min(1,r.progress??jo[r.phase]))*Wn;return a.jsxs("radialGradient",{id:`${n}-${s}`,gradientUnits:"userSpaceOnUse",cx:c,cy:Zd,r:Qd,children:[a.jsx("stop",{offset:"0",stopColor:i,stopOpacity:Jd}),a.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0"})]},r.id)})}),e.map((r,s)=>a.jsx("rect",{"data-role":"glow","data-phase":r.phase,x:"0",y:"0",width:Wn,height:mr,fill:`url(#${n}-${s})`},r.id))]})}const tu=function({ref:t,items:n,mode:o,"aria-label":r}){const s=So(qd(n)),i=n.some(c=>wn.has(c.phase)),l=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${Os(s)}`;return a.jsx(Pe,{text:n.map(c=>c.label).join(`
`),focusable:!0,children:a.jsx(Fs,{ref:t,role:"group","aria-label":`${r}: ${l}`,"data-mode":o,"data-density":"badge",$row:!1,children:a.jsxs(zs,{$phase:i?"overdue":"in-transit",children:[a.jsx(Ds,{"aria-hidden":"true",$pulse:!i,children:"↑"}),a.jsxs(Hs,{children:[n.length,s!==null&&a.jsxs(a.Fragment,{children:[" · ",a.jsx(_o,{value:Math.max(0,s)})]})]})]})})})};function nu({item:e,$compact:t}){const n=So(e.etaSeconds),o=wn.has(e.phase),r=n===null?`${e.label}, ${oo[e.phase]}`:`${e.label}, ${Os(n)}`;return a.jsxs(zs,{$phase:e.phase,role:"listitem",...t?{"aria-label":r,title:r}:{},children:[a.jsx(Ds,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Ud(e)}),!t&&a.jsx(pu,{children:e.label}),a.jsx(Hs,{children:n===null?oo[e.phase]:a.jsx(_o,{value:Math.max(0,n)})})]})}const ou=k.svg`
  display: block;
  width: 100%;
  height: 16px;
`,Ns=54,Rt=5,Eo=3,kn=Ns-8-Rt,ut=60,ru={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:se.warn,lost:se.warn};function su({items:e,"aria-label":t,onDismiss:n}){const{ref:o,size:r}=bn({w:320,h:Ns}),i=r.w>=ut?r.w:r.h,l=Math.max(1,Math.floor((i-6)/(kn+Eo))),d=e.length>l?e.slice(0,l-1):e,h=e.length-d.length;return a.jsx(iu,{ref:o,"data-command-list":"",children:a.jsxs(lu,{role:"list","aria-label":t,children:[d.map(f=>a.jsx(au,{item:f,onDismiss:n},f.id)),h>0&&a.jsxs(hu,{role:"listitem","aria-label":`${h} more in flight`,children:["+",h]})]})})}function au({item:e,onDismiss:t}){const n=e.glyph??Mo(e.label),o=ru[e.phase],r=Math.max(0,Math.min(1,e.progress??jo[e.phase])),s=wn.has(e.phase)&&!!t,i=`${e.label}, ${oo[e.phase]}`;return a.jsxs(cu,{role:"listitem","aria-label":i,"data-phase":e.phase,style:{color:o},children:[a.jsx(Pe,{text:s?`Dismiss ${e.label}`:i,announce:!1,children:a.jsxs(du,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:l=>{Ts(l.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[a.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&a.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),a.jsx(uu,{children:a.jsx("span",{className:"fill",style:{"--fill-ratio":r}})})]})}const iu=k.div.attrs({role:"group"})`
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
    ${kn}px + ${Rt}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
`,lu=k.div`
  display: flex;
  flex-direction: column;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${Eo}px;
  width: 100%;
  height: 100%;

  @container (min-width: ${ut}px) {
    flex-direction: row;
  }
`,cu=k.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @container (min-width: ${ut}px) {
    flex-direction: column;
  }
`,du=k.div`
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
`,uu=k.div`
  --s: ${kn}px;
  position: relative;
  flex: 0 0 ${Rt}px;
  width: ${Rt}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${ut}px) {
    width: var(--s);
    height: ${Rt}px;
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
`,hu=k.span`
  align-self: center;
  flex: 0 0 auto;
  padding: 0 ${Eo}px;
  font-size: var(--font-size-compact);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-muted);
`,Fs=k.div`
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
`,fu={"in-transit":H`
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

  ${({$phase:e})=>fu[e]}
`,Ds=k.span`
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
`,pu=k.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Hs=k.span`
  flex: 0 0 auto;
`;function dx({expectedIn:e}){const t=e??0,n=Number.isFinite(t)&&t>0;return a.jsxs(a.Fragment,{children:["Awaiting first signal",n&&hs()&&a.jsx(gu,{total:t})]})}function gu({total:e}){return a.jsx(mu,{seconds:So(e)??0})}function mu({seconds:e}){return e>0?a.jsxs(a.Fragment,{children:[" ",a.jsx(wi,{level:"muted",children:a.jsx(_o,{value:Math.ceil(e)})})]}):null}const Ao=e=>H`
  --fit-box: ${e};
`,xu=e=>H`
  --fit-mask: ${e};
`;function Bs(e){return e==="go"||e==="info"?"caution":e}function cn({tone:e,size:t="md",live:n=!1,report:o,held:r,children:s,...i}){const l=wo(r),c=l===void 0?e:Bs(e),d=c===void 0||c==="neutral"?void 0:c,h=o?.label??(typeof s=="string"?s:"");po(o?{id:o.id,severity:d??"go",label:h}:null);const f=n?{role:"status","aria-live":"polite"}:{},x=l===void 0?null:gt(l),m=Reflect.get(i,"data-tooltip")!==void 0,{anchor:g,tip:v}=zt(m?null:x);return a.jsxs(a.Fragment,{children:[a.jsxs(wu,{$severity:d,$size:t,...f,...g,...i,children:[s,x!==null&&a.jsxs(a.Fragment,{children:[a.jsx(ku,{"aria-hidden":"true","data-held-mark":""}),a.jsxs(De,{"data-unit-currency":"",children:[", ",x]})]})]}),v]})}const vu=H`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,yu={go:H`
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
  `},bu={sm:H`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:H`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},wu=k.span`
  display: inline-block;
  position: relative;
  /* Sized by its own text, never stretched to a taller flex sibling. */
  align-self: center;
  ${Ao("badge")}
  border: 1px solid;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;

  border-radius: var(--radius-pill);

  ${({$size:e})=>bu[e]}
  ${({$severity:e})=>e===void 0?vu:yu[e]}
`,ku=k.span`
  position: absolute;
  top: 0;
  right: 0;
  width: ${oe.held.domSize};
  height: ${oe.held.domSize};
  transform: translate(45%, -45%);
  background: ${oe.held.color};
  box-shadow: 0 0 0 1px var(--color-surface-panel);
  pointer-events: none;
`,$u={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},_u={center:"center",start:"flex-start",baseline:"baseline"},Mu=p.forwardRef(function({justify:t="between",align:n="center",gap:o,wrap:r=!1,children:s,...i},l){return a.jsx(ju,{ref:l,$justify:t,$align:n,$gap:o,$wrap:r,...i,children:s})}),ju=k.div`
  display: flex;
  align-items: ${({$align:e})=>_u[e]};
  justify-content: ${({$justify:e})=>$u[e]};
  gap: ${({$gap:e})=>e?dt[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function Co(e){const t=wo(e.held);return t===void 0?{label:e.label,tone:e.tone,title:e.title}:{label:e.label,tone:Bs(e.tone),title:e.title??`${e.label}: ${gt(t)}`,held:t}}function Ne(e,t){return Tt({magnitude:e,unit:t})}function Su(e,t){const{limit:n,actual:o,unit:r}=t;if(n==null||o==null)return null;switch(e){case Gt.LimitReached:{const s=Eu(t.quantity),i=`${Ne(o,r)} of ${Ne(n,r)}`;return t.facilityName?`the ${t.facilityName} holds ${i} ${s}`:`it holds ${i} ${s}`}case Gt.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${Ne(o,r)} of ${Ne(n,r)}`;case Gt.InsufficientFunds:return`it costs ${Ne(Math.trunc(o),r)} and funds are ${Ne(Math.trunc(n),r)}`;case Gt.InsufficientScience:return`it costs ${Ne(o,r)} and science is ${Ne(n,r)}`;default:return null}}function Eu(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function xr(e){return e&&fs(e)?.sentence||null}function Au(e){const t=e?.trim().replace(/\.$/,"");return t||null}function Po(e){return Ws(e,"refused")}function ux(e){return Ws(e,"unavailable")}function Ws(e,t){const n=pt(e),o=(e.breach?Su(e.errorCode,e.breach):null)??Au(e.detail)??xr(e.reason)??xr(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function Xs(e){const n=pt(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":Cu(Po({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function Cu(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function Us(e){return`${pt(e)||e.command||"The command"}: no reply. May have run.`}function Pu(){const e=$i();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const $n=ki(Pu),hx=$n.Context;function fx({children:e}){return a.jsx($n.Provider,{children:a.jsx(Ru,{children:e})})}function Ru({children:e}){const t=$n.useStore();return a.jsx(Ci.Provider,{value:t,children:e})}const Ro=$n.useStore,Lu=()=>()=>{},Iu=[],vr=()=>Iu;function Tu(){const e=Ro();return p.useSyncExternalStore(e?e.subscribe:Lu,e?e.getActiveHandles:vr,e?e.getActiveHandles:vr)}const Et=new WeakMap,ro=new WeakMap;function yr(e){for(const t of ro.get(e)??[])t()}function Ou(e){return Et.set(e,(Et.get(e)??0)+1),yr(e),()=>{Et.set(e,(Et.get(e)??1)-1),yr(e)}}function px(){const e=Ro();return p.useSyncExternalStore(t=>{if(!e)return()=>{};const n=ro.get(e)??new Set;return ro.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(Et.get(e)??0)>0,()=>!1)}function _n({children:e,"aria-label":t,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:r=!1,as:s="span",className:i}){const c={role:n?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":t,className:i,"data-live-region":""};return n?a.jsx(De,{as:s,...c,children:e}):p.createElement(s,c,e)}const Nu=.72,Fu=.76;function so({size:e,kind:t="held",figureSize:n}){return a.jsx("tspan",{dy:n===void 0?-e*.55:-(n*Nu-e*Fu),fontSize:e,fill:oe[t].color,"data-held-mark":"","data-reckoning-mark":t,children:oe[t].glyph})}function gx({end:e,x1:t,y1:n,x2:o,y2:r}){return a.jsx("line",{"data-bound":e,x1:t,y1:n,x2:o,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function Ys(e,t){return t===null?e:`${e}, ${t}`}function zu(e){return e===null?{}:{"data-currency-in-name":""}}function mx({x:e,y:t,size:n,children:o}){return a.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function br(e,t){return t?.state!=="held"?e:{...t,value:e}}function dn(e){return e.kind==="continuous"?"ribbon":"dot"}function Du(e){return e.delivery==="acked"}function Hu(e){return e.direction==="command"?"outbound":"inbound"}function Gs(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function Mn(e){return`${e.direction}/${e.kind}/${e.delivery}`}const Bu={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function Lo(e){return Bu[Mn(e)]??null}const wr=new Set;function qs(e,t){const n=Mn(e);if(wr.has(n))return;wr.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;hs()?di.error(o):console.error(o)}const Vs=16,kr=Vs/2,Wu=5.5,Xu=2,Uu=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function Ks(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function Yu(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/Xu)),Math.max(2,Math.round(o)))}function Gu(e,t,n){if(e.length===0)return"";const o=Ks(e,t,n);if(!(o>0))return`M0.00,${kr.toFixed(2)}`;const r=Yu(e,t,o),s=[];for(let i=0;i<=r;i++){const l=Math.min(i/r*o,o),c=Math.min(Math.round(l/n*t),e.length-1),d=Uu(e[e.length-1-c]),h=(i%2===0?-1:1)*d*Wu;s.push(`${l.toFixed(2)},${(kr+h).toFixed(2)}`)}return`M${s.join(" L")}`}const Zs=.05,qu=.02,un=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],jn=100,At=30,Vu=1.5,ve=2,Ku=4,Ve=At-ve-Ku,Le=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(jn-n*2),Vt=e=>ve+(1-Math.max(0,Math.min(1,e)))*Ve,Qs=e=>e==="inline"?Vu:0;function xx(e="inline"){const t=Qs(e);return(jn-t*2)/3}function Js({tags:e,who:t}){return qs(e,t),a.jsx("g",{"data-rail-unrepresented":Mn(e),"data-rail-entry":t})}function rt(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function $r(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(c=>c.age>=t);if(n===-1)return[];const o=e[n-1],r=e[n],s=r.age-o.age||1,i=(t-o.age)/s,l=o.value+i*(r.value-o.value);return[{age:t,value:l},...e.slice(n)]}function _r(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(d=>d.age>t),r=e.slice(0,o),s=e[o],i=r[r.length-1];if(!i)return[{age:t,value:s.value}];const l=s.age-i.age||1,c=(t-i.age)/l;return[...r,{age:t,value:i.value+c*(s.value-i.value)}]}const Zu=.25;function Mr(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>=o.age)return o.value;for(let r=1;r<e.length;r++){const s=e[r];if(t<=s.age){const i=e[r-1],l=(t-i.age)/(s.age-i.age||1);return i.value+l*(s.value-i.value)}}return o.value}function Qu({stream:e,span:t,index:n,padX:o,oneT:r,twoT:s}){const l=`var(${un[n%un.length]})`,c=p.useId(),d=`cds-ramp-${c}-${n}`,h=`cds-fill-${c}-${n}`,f=`cds-tail-${c}-${n}`,x=Lo(e.tags);if(x!=="continuous-strip")return x===null?a.jsx(Js,{tags:e.tags,who:e.id}):null;const m=Du(e.tags),v=(m?e.inTransit:_r(e.inTransit,r)).map(W=>({x:Le(W.age,t,o),y:Vt(W.value)}));if(v.length===0)return null;const S=(m?[]:_r($r(e.inTransit,r),r*(1+Zu))).map(W=>({x:Le(W.age,t,o),y:Vt(W.value)})),j=S.length>1&&S[S.length-1].x>S[0].x,I=`${rt(v)} L${v[v.length-1].x.toFixed(2)},${(ve+Ve).toFixed(2)} L${v[0].x.toFixed(2)},${(ve+Ve).toFixed(2)} Z`,E=m?$r(e.echo,s):[],C=E.map(W=>({x:Le(W.age,t,o),y:Vt(W.value)})),M=E.map(W=>({x:Le(W.age,t,o),y:Vt(Mr(e.inTransit,W.age)??W.value)})),R=E.findIndex(W=>{const w=Mr(e.inTransit,W.age);return w!==null&&Math.abs(W.value-w)>qu}),_=R!==-1,B=_?C.slice(0,R+1):C,K=_?C.slice(R):[],Q=_?M.slice(R):[],T=!_||R>0;return a.jsxs("g",{"data-stream-group":e.id,"data-return-leg":m,children:[a.jsxs("defs",{children:[a.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"1",y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.10"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0.40"})]}),a.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.22"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]}),j&&a.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:S[0].x,y1:"0",x2:S[S.length-1].x,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.40"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]})]}),a.jsx("path",{"data-role":"area",d:I,fill:`url(#${h})`,stroke:"none"}),a.jsx("path",{"data-role":"commanded","data-stream":e.id,d:rt(v),fill:"none",stroke:`url(#${d})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),j&&a.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:rt(S),fill:"none",stroke:`url(#${f})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),B.length>0&&T&&a.jsx("path",{"data-role":"echo","data-stream":e.id,d:rt(B),fill:"none",stroke:l,strokeWidth:"0.8",strokeLinecap:"round"}),_&&a.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:rt(K),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),_&&a.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:rt(Q),fill:"none",stroke:l,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]})}function Ju({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${p.useId()}`,o=e.tags,r=Lo(o);if(r!=="continuous-strip")return r===null?a.jsx(Js,{tags:o,who:e.id}):null;const s=(jn-t*2)/3,i=e.amplitudes,l=e.spanSamples??i.length,c=Gu(i,l,s);if(c==="")return null;const d=Math.max(Ks(i,l,s),1),h=`var(${Gs(o)})`,f=Hu(o)==="outbound";return a.jsxs("g",{"data-ribbon-group":e.id,transform:`translate(${t} ${ve}) scale(1 ${Ve/Vs})`,children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:f?0:d,y1:"0",x2:f?d:0,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:h,stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:h,stopOpacity:"0.1"})]})}),a.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:c,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function eh({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:r}){const s=`cds-divfade-${p.useId()}`,i=r?.state==="held",l=i?yn(r??null).caption:null,{anchor:c,tip:d}=zt(l),h=[...e,...t].find(E=>E.oneWaySeconds!==null),f=h?.oneWaySeconds??null;if(!h||f===null||uo(f)!=="shown")return null;const x=f>=Zs;if(!x&&t.length===0)return null;const m=3*f,g=f,v=2*f,$=Qs(o),S=Le(g,m,$),j=Le(v,m,$),I=e.every(E=>E.inTransit.length===0&&E.echo.length===0)&&t.every(E=>E.amplitudes.length===0);return a.jsxs(th,{"data-oneway":f,"data-variant":o,$variant:o,...c,children:[a.jsxs(nh,{$variant:o,$quiet:I,role:"img","aria-label":Ys(n,l),...zu(l),viewBox:`0 0 ${jn} ${At}`,preserveAspectRatio:"none",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:ve,x2:"0",y2:ve+Ve,children:[a.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(x?e:[]).map((E,C)=>a.jsx(Qu,{stream:E,span:m,index:C,padX:$,oneT:g,twoT:v},E.id)),t.map(E=>a.jsx(Ju,{ribbon:E,padX:$},E.id)),a.jsx("line",{"data-divider":"t",x1:S,x2:S,y1:ve,y2:ve+Ve,stroke:`url(#${s})`,strokeWidth:"0.4"}),a.jsx("line",{"data-divider":"2t",x1:j,x2:j,y1:ve,y2:ve+Ve,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&a.jsxs("g",{"data-role":"hover-labels",children:[a.jsxs("text",{x:S,y:ve-.4,textAnchor:"middle",fontSize:"2",children:[Tt(lt("s",f),{decimals:1}),i&&a.jsx(so,{size:1.2})]}),a.jsxs("text",{x:j,y:ve-.4,textAnchor:"middle",fontSize:"2",children:[Tt(lt("s",2*f),{decimals:1}),i&&a.jsx(so,{size:1.2})]}),a.jsx("text",{x:Le(f/2,m,$),y:At-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),a.jsx("text",{x:Le(1.5*f,m,$),y:At-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),a.jsx("text",{x:Le(2.5*f,m,$),y:At-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&a.jsxs(a.Fragment,{children:[a.jsxs(oh,{"aria-hidden":"true",children:[a.jsxs("span",{children:["outgoing ",a.jsx("b",{children:"0"})]}),a.jsxs("span",{children:["echo"," ",a.jsx("b",{children:a.jsx(ln,{value:br(lt("s",f),r),decimals:1})})]}),a.jsxs("span",{children:["confirmed"," ",a.jsx("b",{children:a.jsx(ln,{value:br(lt("s",2*f),r),decimals:1})})]})]}),a.jsxs(rh,{"aria-hidden":"true",children:[(x?e:[]).map((E,C)=>a.jsxs("span",{children:[a.jsx("i",{style:{background:`var(${un[C%un.length]})`}}),E.label]},E.id)),t.map(E=>a.jsxs("span",{"data-role":"legend-ribbon",children:[a.jsx("i",{style:{background:`var(${Gs(E.tags)})`}}),E.label]},E.id)),x&&e.length>0&&a.jsxs("span",{"data-role":"legend-deviation",children:[a.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),d]})}const th=k.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,nh=k.svg`
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
`,oh=k.div`
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
`,rh=k.div`
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
`;function sh({handle:e,handles:t,"aria-label":n,mode:o,density:r,orientation:s,variant:i="inline"}){const l=t??(e?[e]:[]),c=l.length===1?l[0]:null,d=c?Lo(c.tags):null;if(c&&d===null)return a.jsx(ah,{tags:c.tags,who:c["aria-label"]});if(c&&d!=="in-flight-row"){const m=c,g=m.effectiveDelaySeconds;return uo(g)!=="shown"?null:a.jsx(eh,{streams:m.streams??[],ribbons:m.ribbons??[],delayReading:m.delayReading,"aria-label":n??m["aria-label"],variant:i})}const h=Wd(l.flatMap(m=>m.inFlight)),x=l.some(m=>m.dismiss)?m=>l.find(g=>g.inFlight.some(v=>v.id===m))?.dismiss?.(m):void 0;return a.jsx(Kd,{items:h,"aria-label":n,mode:o,density:r,orientation:s,variant:i,onDismiss:x})}function ah({tags:e,who:t}){return qs(e,t??"unnamed handle"),a.jsx("span",{hidden:!0,"data-rail-unrepresented":Mn(e)})}function ea(e){const n=pt(e)||e.command||"The command",o=e.code===void 0?void 0:fs(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function ta(e){return`${pt(e)||e.command||"The command"}: never sent. Safe to re-send.`}const ih={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed"},lh={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command"};function ch(e,t){return e.kind==="refused"?Po(e.entries[t]):e.kind==="found"?Xs(e.entries[t]):e.kind==="failed"?ea(e.entries[t]):e.kind==="undelivered"?ta(e.entries[t]):Us(e.entries[t])}function dh(e){return e.entries.map((t,n)=>{const o=pt(t);return{id:t.id,subject:o||t.command||"",sentence:ch(e,n),dismissLabel:`Dismiss ${o||lh[e.kind]}`,tags:t.tags}})}function $t(e){const{kind:t,onDismiss:n,live:o=!0}=e,r=e["aria-label"]??ih[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const i=dh(e).map(l=>a.jsxs(fh,{role:o?void 0:"listitem",$tone:s,children:[dn(l.tags)==="ribbon"?a.jsx(gh,{$tone:s,children:l.subject}):a.jsx(ph,{"aria-hidden":"true",$tone:s,children:Mo(l.subject)}),a.jsx(mh,{children:l.sentence}),n&&a.jsx(xh,{type:"button","data-dismiss":"",onClick:c=>{Ts(c.currentTarget),n(l.id)},"aria-label":l.dismissLabel,children:"✕"})]},l.id));return o?a.jsx(hh,{forwardedAs:"div","aria-label":r,"data-command-list":"",additionsOnly:!0,children:i}):a.jsx(uh,{role:"list","aria-label":r,"data-command-list":"",children:i})}const na=H`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,uh=k.div`
  ${na}
`,hh=k(_n)`
  ${na}
  &:empty {
    margin: 0;
  }
`,fh=k.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>se[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${se[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,ph=k.span`
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
`,gh=k.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>ye[e]};
`,mh=k.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,xh=k.button`
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
`;function ct(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,o)=>ct(n,t[o]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const n=[...t];return[...e].every(o=>{const r=n.findIndex(s=>ct(o,s));return r===-1?!1:(n.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[n,o]of e)if(!t.has(n)||!ct(o,t.get(n)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const n=e,o=t,r=new Set;for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of r)if(!ct(n[s],o[s]))return!1;return!0}return!1}function Sn(e,t,n,o){const[r,s]=p.useState(o),i=p.useRef(t);i.current=t;const l=p.useRef(n);l.current=n;const c=p.useRef(r);return c.current=r,p.useEffect(()=>{if(!e)return;let d=c.current;const h=()=>{const g=i.current(e);l.current(d,g)||(d=g,s(g))};h(),e.addEventListener("scroll",h,{passive:!0});const f=new ResizeObserver(h);f.observe(e);for(const g of Array.from(e.children))f.observe(g);let x;const m=new MutationObserver(g=>{if(g.some(v=>v.type==="childList")){for(const v of Array.from(e.children))f.observe(v);h();return}x===void 0&&(x=requestAnimationFrame(()=>{x=void 0,h()}))});return m.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style"]}),()=>{e.removeEventListener("scroll",h),f.disconnect(),m.disconnect(),x!==void 0&&cancelAnimationFrame(x)}},[e]),r}function vh(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function oa(e){return Sn(e,vh,Object.is,!1)?0:void 0}function yh({label:e,selected:t,count:n,onToggle:o}){return a.jsxs(bh,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[a.jsx("span",{children:e}),n!==void 0&&a.jsx(wh,{children:n})]})}const bh=k.button`
  ${Ao("chip")}
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
`,wh=k.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function kh({value:e,onChange:t,clearLabel:n="Clear search",className:o,...r}){const s=p.useRef(null);return a.jsxs($h,{className:o,children:[a.jsx(_h,{...r,ref:s,type:"search",value:e,onChange:i=>t(i.target.value)}),e!==""&&a.jsx(Mh,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:a.jsx(md,{size:"var(--icon-size-control)"})})]})}const $h=k.div`
  position: relative;
  display: flex;
  align-items: center;
`,_h=k(fl)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,Mh=k(dl)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function vx({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=_i(e),r=[...new Set(o)],[s,i]=p.useState(()=>new Set),[l,c]=p.useState(""),d=p.useId(),h=g=>{i(v=>{const $=new Set(v);return $.has(g)?$.delete(g):$.add(g),$})},f=[...s,l].filter(g=>g.length>0).map(g=>g.toLowerCase()),x=a.jsxs(ms,{gap:"related-packed",children:[a.jsxs(ul,{children:[a.jsx(hl,{htmlFor:d,children:t}),a.jsx(kh,{id:d,value:l,placeholder:n,onChange:c})]}),r.length>0&&a.jsx(Mu,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:r.map(g=>a.jsx(yh,{label:g,selected:s.has(g),onToggle:()=>h(g)},g))})]}),m={matches:g=>{const v=g.toLowerCase();return f.every($=>v.includes($))},active:f.length>0};return ra.set(m,x),m}const ra=new WeakMap;function sa(e){return ra.get(e)??null}function yx({filter:e,children:t,fill:n=!1}){return a.jsxs(ms,{gap:"related-dense",fill:n,children:[sa(e),t]})}const jh=24,Sh=96;function Eh({children:e,padded:t,caption:n,footer:o,strip:r,...s}){const i=r!=null&&r!==!1;return a.jsxs(Ah,{$padded:t&&!i,$stacked:i,...s,children:[i?a.jsxs(a.Fragment,{children:[a.jsx(Ch,{$padded:t,children:e}),a.jsx(Ph,{"data-framed-display-strip":"",children:r})]}):e,n!=null&&a.jsx(aa,{children:n}),o!=null&&a.jsx(Rh,{children:o})]})}const Ah=k.div`
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
`,Ch=k.div`
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
`,Ph=k.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${jh}px;
  max-height: ${Sh}px;
  min-width: 0;
  overflow: hidden;
`,aa=k.div`
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
`,Rh=k(aa)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,jr={width:160,height:72},Lh=2.5,Ih=420;function bx({width:e,height:t,plotHasData:n}){return!n&&e>=jr.width&&t>=jr.height?"center":e>=Ih&&e>=t*Lh?"beside":"inline"}const Th={overlay:H`
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
  `};function Oh({placement:e,role:t="status",children:n,...o}){return a.jsx(Nh,{$placement:e,role:t,...o,children:n})}const Nh=k.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${Mi.regular};
  pointer-events: none;

  ${({$placement:e})=>Th[e]}
`,hn=8;function ia(e){const t=[{cols:1,rows:e}];for(let n=2;n<=e;n++){const o=Math.ceil(e/n);o<(t.at(-1)?.rows??e)&&t.push({cols:n,rows:o})}return t}function la(e){return e===0?"0px":`(${e}px + var(--gap-related))`}const ca=(e,t)=>`calc(${e} * ${t} + ${(e-1)*hn}px)`,Fh=(e,t,n)=>`calc(${e} * (${t} + ${n+hn}px) + ${(e-1)*hn}px)`;function zh(e,t,n,o,r){const s=la(n),i=ia(e).slice(1).map(({cols:c,rows:d})=>`
  @container grid-squares-width (width >= ${ca(c,t)}) {
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
`}function Dh(e,t,n,o){const r=ia(e),s=o!==void 0;return r.slice(1).map(({cols:i,rows:l},c)=>`
  @container grid-squares (aspect-ratio >= ${(.88*i/r[c].rows).toFixed(2)}) and ((width >= ${ca(i,t)}) or (height < ${Fh(s?l:r[c].rows,o??t,n)})) {
    --cols: ${i};
    --rows: ${l};
  }`).join("")}function Hh(e,t){const n=`
  & > * > * {
    --grid-square-heading: ${e===0?"0px":`calc${la(e)}`};
  }`;return e===0||t===void 0?n:`${n}
  @container (width < ${t}px) or (height < ${t+e+hn}px) {
    & > * > * {
      --grid-square-heading: 0px;
    }
    & > * [data-grid-square-heading] {
      display: none;
    }
  }`}function Bh(e){if(dn(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return t===null||t<=0?!1:n>0||t>=Zs&&o>0}return e.inFlight.length>0}function da({tiny:e}={}){const t=Tu(),n=Ro();p.useEffect(()=>n?Ou(n):void 0,[n]);const o=t.filter(Bh),r=t.flatMap(w=>(w.refusals??[]).map(D=>({...D,tags:w.tags}))),s=t.flatMap(w=>(w.losses??[]).map(D=>({...D,tags:w.tags}))),i=t.flatMap(w=>(w.founds??[]).map(D=>({...D,tags:w.tags}))),l=t.flatMap(w=>(w.undelivered??[]).map(D=>({...D,tags:w.tags}))),c=t.flatMap(w=>(w.failures??[]).map(D=>({...D,tags:w.tags}))),d=r.length+l.length+c.length,h=o.length>0||d>0||s.length>0||i.length>0,[f,x]=p.useState(!1),[m,g]=p.useState(!1),[v,$]=p.useState(!1),S=f||m&&!v;p.useEffect(()=>{h||(x(!1),g(!1),$(!1))},[h]);const j=p.useId(),I=[...o.filter(w=>dn(w.tags)==="ribbon"),...o.filter(w=>dn(w.tags)!=="ribbon")],C=t.some(w=>w.dismiss&&(w.refusals?.length??0)>0)?w=>t.find(D=>D.refusals?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,R=t.some(w=>w.dismiss&&(w.losses?.length??0)>0)?w=>t.find(D=>D.losses?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,B=t.some(w=>w.dismiss&&(w.undelivered?.length??0)>0)?w=>t.find(D=>D.undelivered?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,Q=t.some(w=>w.dismiss&&(w.failures?.length??0)>0)?w=>t.find(D=>D.failures?.some(Z=>Z.id===w))?.dismiss?.(w):void 0,W=t.some(w=>w.dismiss&&(w.founds?.length??0)>0)?w=>t.find(D=>D.founds?.some(Z=>Z.id===w))?.dismiss?.(w):void 0;return a.jsxs(Wh,{"data-panel-rail-frame":"",$tiny:e,$hasContent:h,onMouseEnter:()=>{$(!1),g(!0)},onMouseLeave:()=>g(!1),children:[t.length>0&&a.jsxs(_n,{visuallyHidden:!0,additionsOnly:!0,children:[r.map(w=>a.jsx("span",{children:Po(w)},`refusal:${w.id}`)),s.map(w=>a.jsx("span",{children:Us(w)},`loss:${w.id}`)),l.map(w=>a.jsx("span",{children:ta(w)},`undelivered:${w.id}`)),c.map(w=>a.jsx("span",{children:ea(w)},`failure:${w.id}`)),i.map(w=>a.jsx("span",{children:Xs(w)},`found:${w.id}`))]}),h?a.jsxs(Uh,{"data-panel-rail":"","data-grown":S,"data-pinned":f,"data-suppress-hover":v,onKeyDown:w=>{w.key==="Escape"&&f&&(w.stopPropagation(),x(!1),$(!0))},children:[a.jsx(Yh,{type:"button","aria-expanded":f,"aria-controls":j,"aria-label":"Signal-delay detail",onClick:()=>{x(w=>{const D=!w;return D||$(!0),D})},children:a.jsx(Kh,{"aria-hidden":"true",hidden:!S,children:"▲"})}),a.jsxs(Gh,{id:j,"data-panel-rail-detail":"",children:[I.map(w=>a.jsx(sh,{handle:w,variant:S?"expanded":"rail","aria-label":w["aria-label"]??(S?"Delay detail":void 0)},w.id)),!S&&(d>0||s.length>0||i.length>0)&&a.jsxs(qh,{children:[d>0&&a.jsx(Sr,{children:d===1?"1 command failed":`${d} commands failed`}),s.length>0&&a.jsx(Sr,{children:s.length===1?"1 command unconfirmed":`${s.length} commands unconfirmed`}),i.length>0&&a.jsx(Vh,{children:i.length===1?"1 unconfirmed command answered":`${i.length} unconfirmed commands answered`})]})]})]}):null,S&&r.length>0&&a.jsx($t,{kind:"refused",entries:r,onDismiss:C,live:!1}),S&&s.length>0&&a.jsx($t,{kind:"lost",entries:s,onDismiss:R,live:!1}),S&&l.length>0&&a.jsx($t,{kind:"undelivered",entries:l,onDismiss:B,live:!1}),S&&c.length>0&&a.jsx($t,{kind:"failed",entries:c,onDismiss:Q,live:!1}),S&&i.length>0&&a.jsx($t,{kind:"found",entries:i,onDismiss:W,live:!1})]})}const Wh=k.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,Xh=H`
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
`,Uh=k.div`
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
    ${Xh}
  }
`,Yh=k.button`
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

`,Gh=k.div`
  display: contents;
`,Sr=k.span`
  color: ${ye.warn};
`,qh=k.span`
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
`,Vh=k.span`
  color: var(--color-info-text);
`,Kh=k.span`
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
`,ua=p.createContext(null);function wx({badges:e,children:t}){return a.jsx(ua.Provider,{value:e,children:t})}function Zh(){return p.useContext(ua)}function ha({severity:e,count:t=1}){const n=t>1;return a.jsx(Qh,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${Ot[e]}`:Ot[e],$mark:se[e],$digits:n?String(t).length:1,children:n&&a.jsx(Jh,{$fill:Jn[e],$ink:ps[e],children:t})})}const Er="8px",Qh=k.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${Er};
  /* The count's own size, so the width below can be counted in its digits. */
  font-size: 7px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:Er};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,Jh=k.span`
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
`,ef=()=>()=>{},Ar=()=>ji;function fa(){const e=xs();return p.useSyncExternalStore(e?e.subscribe:ef,e?e.getBreakdown:Ar,e?e.getBreakdown:Ar)}const tf=()=>()=>{},Cr=()=>null;function nf(){const e=xs();return p.useSyncExternalStore(e?e.subscribe:tf,e?e.getSummary:Cr,e?e.getSummary:Cr)}const pa=H`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,of=12;function rf(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function sf(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const r=o<e?t-of:t;if(n[o]<=r)return o}return n.length-1}function af(e,t,n){const[o,r]=p.useState(0),s=p.useRef(o);s.current=o;const i=[t,...n].join(`
`),l=p.useCallback(()=>{const c=e.current,d=i.split(`
`);if(!c||d.length<2){s.current!==0&&(s.current=0,r(0));return}const h=d.map(x=>rf(c,x)),f=sf(s.current,c.clientWidth,h);f!==s.current&&(s.current=f,r(f))},[e,i]);return p.useLayoutEffect(()=>{l()},[l]),p.useEffect(()=>{const c=e.current;if(!c||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>l());return d.observe(c),()=>d.disconnect()},[e,l]),{index:o,compacted:o>0}}const lf=24;function cf(e,t,n,o,r=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&r?!(t>n+lf):n>t}function Pr(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const r=e.cloneNode(!0);n!==void 0&&(r.textContent=n),Object.assign(r.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),r.setAttribute("aria-hidden","true"),o.insertBefore(r,e.nextSibling);const s=r.getBoundingClientRect().width;return o.removeChild(r),s}const df={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function _t(e){return Number.parseFloat(e)||0}function uf(e,t,n,o){const[r,s]=p.useState(!1),i=p.useRef(r);i.current=r;const l=p.useRef(void 0),c=p.useRef(void 0),d=p.useRef(!1),h=p.useRef(o);h.current=o;const f=p.useCallback(()=>{const m=e.current;if(!m)return;const g=getComputedStyle(m),v=m.getBoundingClientRect().width-_t(g.paddingLeft)-_t(g.paddingRight),$=Pr(t.current,{},h.current),S=Pr(n.current,df),j=n.current?.closest("[data-panel-aside-expand]")?.parentElement,I=j?getComputedStyle(j):null,E=$===0||S===0?$+S:$+_t(g.columnGap)+_t(I?.paddingLeft??"")+_t(I?.paddingRight??"")+S,C=i.current,M=v>0&&c.current!==void 0&&v<c.current;C&&M&&(d.current=!0);const R=cf(C,v,E,l.current,d.current);R!==C&&(d.current=R&&M),v>0&&(c.current=v),E>0&&(l.current=E),R!==i.current&&(i.current=R,s(R))},[e,t,n]),x=p.useRef({title:null,aside:null,observer:null});return p.useLayoutEffect(()=>{const m=t.current,g=n.current,v=x.current;if(v.observer===null||v.title!==m||v.aside!==g){v.observer?.disconnect(),v.title=m,v.aside=g,v.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>f());for(const $ of[m,g])$&&v.observer?.observe($,{subtree:!0,childList:!0,characterData:!0,attributes:!0});f();return}v.observer.takeRecords().length>0&&f()}),p.useEffect(()=>{const m=x.current;return()=>{m.observer?.disconnect(),m.observer=null}},[]),p.useEffect(()=>{const m=e.current;if(!m||typeof ResizeObserver>"u")return;const g=new ResizeObserver(()=>f());return g.observe(m),n.current&&g.observe(n.current),()=>g.disconnect()},[e,n,f]),r}const ga=p.createContext("full"),hf=ga.Provider;function kx(){return p.useContext(ga)}const En=p.createContext(null);function ma({children:e}){const[t,n]=p.useState(null),o=p.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return a.jsx(En.Provider,{value:o,children:e})}function ff({children:e}){return a.jsx(ma,{children:e})}const xa=`
  & > [${ys}] {
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
  ${xa}
`,pf=k.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${pa}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,va=p.forwardRef(function({compact:t,children:n,...o},r){const s=p.useRef(null),i=typeof n=="string"?n:"",l=t===void 0||i===""?gf:typeof t=="string"?[t]:t,{index:c,compacted:d}=af(s,i,l);return a.jsx(Pe,{text:d?i:void 0,children:a.jsx(pf,{...o,ref:h=>{if(s.current=h,typeof r=="function"){r(h);return}r&&(r.current=h)},"aria-label":d?i:void 0,children:c===0?n:l[c-1]})})}),gf=[],mf=k.div`
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
`,xf=k.div`
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
`,vf=k.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,yf=k.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,bf=k.details`
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
`,wf=120;function ya(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${Ot[n.severity]}`:`${Ot[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function ba({title:e,compactTitle:t,aside:n,toolbar:o,...r}){const s=fa(),i=p.useRef(null),l=p.useRef(null),c=p.useRef(null),d=uf(i,l,c,typeof e=="string"?e:void 0),[h,f]=p.useState(!1),[x,m]=p.useState(!1),g=p.useRef(null),v=p.useRef(null),$=p.useRef(null),S=p.useCallback(()=>{g.current!==null&&clearTimeout(g.current),g.current=null},[]);p.useEffect(()=>{d||(f(!1),m(!1))},[d]),p.useEffect(()=>S,[S]);const j=d&&(h||x);p.useEffect(()=>{if(!j)return;const M=_=>{_.key==="Escape"&&v.current?.contains(document.activeElement)&&(_.stopPropagation(),S(),m(!1),f(!1),$.current?.focus())},R=_=>{v.current?.contains(_.target)||(S(),m(!1),f(!1))};return document.addEventListener("keydown",M,!0),document.addEventListener("pointerdown",R,!0),()=>{document.removeEventListener("keydown",M,!0),document.removeEventListener("pointerdown",R,!0)}},[j,S]);const I=d?ya(s):null,{anchor:E,tip:C}=zt(j?null:I);return a.jsxs(mf,{ref:i,"data-panel-header":"",...r,children:[a.jsxs(xf,{children:[e!==void 0&&a.jsx(va,{ref:l,compact:t,children:e}),a.jsx(vf,{"aria-hidden":"true",children:a.jsx(cn,{children:null})})]}),n!==void 0&&a.jsx(yf,{children:a.jsxs(bf,{ref:v,"data-panel-aside-expand":"","data-hovering":d&&x?"":void 0,$collapsed:d,open:d?h:!0,onToggle:M=>{d&&(f(M.currentTarget.open),M.currentTarget.open||m(!1))},onPointerEnter:M=>{!d||M.pointerType==="touch"||(S(),m(!0))},onPointerLeave:M=>{M.pointerType!=="touch"&&(S(),g.current=setTimeout(()=>{g.current=null,m(!1)},wf))},children:[a.jsxs("summary",{ref:$,"data-tooltip":E["data-tooltip"],onPointerDown:E.onPointerDown,onPointerUp:E.onPointerUp,onFocus:E.onFocus,onBlur:E.onBlur,"aria-description":I??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(M=>`${M.count} ${Ot[M.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(M=>a.jsx(ha,{severity:M.severity,count:M.count},M.severity)),a.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),C,a.jsx(hf,{value:d?"collapsed":"full",children:a.jsx("div",{"data-panel-aside-full":"",ref:c,children:n})})]})}),o!==void 0&&a.jsx(wa,{children:o})]})}const wa=k.div`
  ${Ao("panel-toolbar")}
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
`,kf=k.div`
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
  ${({$loneFrame:e})=>e?`@container (width < ${$f}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${xa}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${ys}] {
           min-height: 0;
         }`:""}
`,$f="25rem";function ka({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...r}){const i=p.useContext(En)?.registerScroller,[l,c]=p.useState(null),d=p.useCallback(f=>{i?.(f),c(f)},[i]),h=oa(l);return a.jsx(kf,{ref:d,tabIndex:h,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...r,children:e})}const _f="13rem",Mf=k.div`
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
  & > [${Si}] {
    grid-column: 1 / -1;
  }
  /* A grid opened only to carry the augment slot, with nothing bound, takes no gap above it: a filling section reaches the body's bottom inset. */
  &:empty {
    display: none;
  }
`;function jf({children:e,hoverTitle:t}){const n=p.useRef(null),o=p.useRef(null),r=Af(n,o);return a.jsx(Sf,{ref:n,$fits:r,"data-panel-fit-body":"",children:a.jsx(Ef,{ref:o,$fits:r,$hoverTitle:t,"data-panel-fit-shifted":r&&t?"":void 0,children:e})})}const Sf=k.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,Ef=k.div`
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
`;function Af(e,t){const[n,o]=p.useState(!0);return p.useLayoutEffect(()=>{const r=e.current,s=t.current;if(!r||!s)return;const i=()=>{o(Pf(Cf(s),r.clientHeight))};if(i(),typeof ResizeObserver>"u")return;const l=new ResizeObserver(i),c=()=>{l.observe(r),l.observe(s);for(const h of Array.from(s.children))l.observe(h)};c();const d=new MutationObserver(()=>{c(),i()});return d.observe(s,{childList:!0}),()=>{l.disconnect(),d.disconnect()}},[e,t]),n}function Cf(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function Pf(e,t){return e<=t}const Rf=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,Lf=k.div`
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
  ${xu("panel-scroll-glow")}
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
`,$a=p.forwardRef(function({children:t,...n},o){const r=p.useRef(null),[s,i]=p.useState(null),l=p.useCallback(h=>{r.current=h,i(h)},[]);p.useImperativeHandle(o,()=>r.current);const c=Sn(s,To,Oo,Io),d=oa(s);return a.jsxs(Rf,{...n,children:[a.jsx(Lf,{ref:l,tabIndex:d,"data-scroll-area-inner":"",children:t}),a.jsx(pn,{$position:"top",$visible:c.top}),a.jsx(pn,{$position:"bottom",$visible:c.bottom})]})});function If(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const Rr="14rem",Tf=5,Of="45%",Nf=`min(${Pi(1,Tf).pxH}px, ${Of})`;function Lr(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const Ff=k.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${Lr(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${Lr(t,n)};`}

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
`;function zf({side:e="end",size:t,railBand:n,children:o,...r}){const{ref:s,size:i}=bn({w:1,h:1}),l=If(t??Rr),c=i.w<=1||l===void 0||i.w>=l*2,d=i.w>=i.h&&c?"inline":"block",h=t??(d==="inline"?Rr:Nf);return a.jsx(Ff,{ref:s,"data-panel-split":d,$axis:d,$side:e,$size:h,$railBand:n,...r,children:o})}const Df=k($a)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,Hf=k.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function _a({children:e,...t}){return a.jsx(Hf,{"data-panel-sidebar":"",...t,children:a.jsx(Df,{children:e})})}const Io={top:!1,bottom:!1};function To(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function Oo(e,t){return e.top===t.top&&e.bottom===t.bottom}const Bf=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function Ma({children:e,railBandAbove:t,...n}){const o=p.useContext(En),r=o?.scroller??null;p.useEffect(()=>{},[o]);const s=Sn(r,To,Oo,Io);return a.jsxs(Bf,{...n,children:[e,a.jsx(pn,{$position:"top",$visible:s.top&&!t}),a.jsx(pn,{$position:"bottom",$visible:s.bottom})]})}function Wf(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const $x=["sections","actions"],Kt=Object.freeze({});function Xf({summary:e}){const t=p.useRef(e.severity),[n,o]=p.useState(0);p.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const r=ya(fa());return a.jsx(Uf,{$pulse:n,children:a.jsx(Pe,{text:r,focusable:!0,children:a.jsx(cn,{tone:e.severity,size:"sm",children:e.label})})})}const Uf=k.span`
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
`,ja=k.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,Yf=k.div`
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
`;function Gf({children:e}){const t=p.useContext(En),n=Sn(t?.scroller??null,To,Oo,Io);return a.jsx(Yf,{"data-panel-sticky-top":"","data-panel-glow-top":n.top?"":void 0,children:e})}function qf({render:e}){const{ref:t,size:n}=bn({w:0,h:0});return a.jsx(Vf,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const Vf=k.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,Kf=k.div`
  flex: 1 1 100%;
  min-width: 0;
`,Zf=k(ba)`
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
`,Qf=k.div`
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
`,Jf=k(De)`
  margin: 0;
  ${pa}
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
`;function No(e){return e.held===void 0?e.label:`${e.label}: ${gt(e.held)}`}function ep(e){let t=null;for(const n of e){const o=Co(n),{tone:r}=o;r===void 0||r==="neutral"||(t===null||cr(r)>cr(t.severity))&&(t={severity:r,label:No(o)})}return t}function Ir({badges:e}){return a.jsx(a.Fragment,{children:e.map(t=>a.jsx(tp,{entry:t},t.id))})}function tp({entry:e}){const t=Co(e),{tone:n}=t;return po(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:No(t)}),null}function np({summary:e,announcement:t}){return a.jsxs(a.Fragment,{children:[a.jsx(Pe,{text:e.label,focusable:!0,children:a.jsx(op,{children:a.jsx(ha,{severity:e.severity})})}),a.jsx(_n,{visuallyHidden:!0,assertive:!0,children:t})]})}const op=k.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,rp=k.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function sp(e){return e.hoverTitle?a.jsx(ap,{...e}):a.jsx(Sa,{...e,hoverTitleId:void 0})}function ap(e){const t=p.useId();return a.jsx(Sa,{...e,hoverTitleId:t})}function Sa({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:r,panelToolbar:s,panelFilter:i,panelFooter:l,panelTrend:c,inactive:d,fitToSize:h,hoverTitle:f,hoverTitleId:x,panelSidebar:m,sidebarSide:g,sidebarSize:v,sections:$,sectionMinWidth:S=_f,children:j,...I}){const E=Zh(),C=ir("actions"),M=ir("sections"),R=Wf(o,E),_=R.length===0?null:R.map(G=>{const ie=Co(G),{label:_e,tone:Me,title:An}=ie;return a.jsx(Pe,{text:An,focusable:!0,children:a.jsx(cn,{tone:Me,held:ie.held,report:Me===void 0||Me==="neutral"?void 0:{id:G.id,label:No(ie)},children:_e})},G.id)}),B=i===void 0?s:a.jsxs(a.Fragment,{children:[s,a.jsx(Kf,{children:sa(i)})]}),K=r??null,Q=K!==null&&K!=="none"&&K!=="live"?K:null;po(Q?{id:"stream",severity:zn(Q),label:lr(Q)??""}:null);const T=nf(),W=T!==null&&R.some(G=>G.id===T.id),w=Q===null?null:lr(Q),D=W?null:T!==null?a.jsx(Xf,{summary:T}):Q===null||w===null?null:a.jsx(Pe,{text:`Telemetry stream: ${w}`,focusable:!0,children:a.jsx(cn,{tone:zn(Q),size:"sm",children:w})}),Z=T?.label??w,ce=Z===null||Z===""?"":typeof e=="string"?`${e}: ${Z}`:`Status: ${Z}`,Ze=n===void 0&&D===null&&_===null&&!C?void 0:a.jsxs(a.Fragment,{children:[n,C&&a.jsx(qt,{segment:"actions",props:Kt}),_,D]}),we=T??ep(R)??(Q===null||w===null?null:{severity:zn(Q),label:w}),Be=we?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${we.label}`:`Status: ${we.label}`,ke=n===void 0&&we===null&&!C?R.length===0?void 0:a.jsx(Ir,{badges:R}):a.jsxs(a.Fragment,{children:[n,C&&a.jsx(qt,{segment:"actions",props:Kt}),a.jsx(Ir,{badges:R}),we!==null&&a.jsx(np,{summary:we,announcement:Be})]}),de=d!==void 0,Ae=de?[]:p.Children.toArray($),pe=Ae.length>0,J=j===void 0&&!M&&!h&&Ae.length===1&&ip(Ae[0]),te=[];for(const G of Ae){const ie=!h&&p.isValidElement(G)&&G.props.fill===!0,_e=te.at(-1);!ie&&_e!==void 0&&!_e.fill?_e.nodes.push(G):te.push({fill:ie,nodes:[G]})}pe&&!te.some(G=>!G.fill)&&te.push({fill:!1,nodes:[]});const We=te.reduce((G,ie,_e)=>ie.fill?G:_e,-1),Xe=G=>Math.max(1,G.filter(ie=>!(p.isValidElement(ie)&&ie.props.full===!0)).length),$e=[];for(const G of te){const ie=$e.length;if(G.fill){$e.push(G.nodes[0]);continue}$e.push(a.jsxs(Mf,{$min:S,$columns:Xe(G.nodes),children:[G.nodes,ie===We&&a.jsx(qt,{segment:"sections",props:Kt})]},`sections-${ie}`))}const ae=de?a.jsx(Ei,{reason:d}):pe?a.jsxs(a.Fragment,{children:[j,$e]}):j,ue=a.jsxs(ka,{fitToSize:h,loneFrame:J,hoverTitle:f,children:[a.jsxs(Gf,{children:[a.jsx(da,{tiny:f}),!f&&a.jsx(Zf,{title:e,compactTitle:t,aside:Ze,toolbar:B})]}),h?a.jsx(jf,{hoverTitle:f,children:ae}):ae,!pe&&!de&&a.jsx(qt,{segment:"sections",props:Kt})]});return a.jsx(ff,{children:a.jsxs(fn,{$railTravels:!0,$hoverTitle:f,...f?{tabIndex:0,role:"group","aria-labelledby":x,"data-tiny-panel":""}:{},...I,children:[a.jsx(Ma,{railBandAbove:!0,children:m===void 0||de?ue:a.jsxs(zf,{side:g,size:v,railBand:!0,children:[ue,a.jsx(_a,{children:m})]})}),!de&&c!==void 0&&a.jsx(qf,{render:c}),!de&&l!==void 0&&a.jsx(ja,{children:l}),f&&a.jsxs(Qf,{"data-panel-hover-title":"",children:[a.jsx(Jf,{as:"h3",id:x,children:e}),ke!==void 0&&a.jsx(rp,{children:ke})]}),a.jsx(_n,{visuallyHidden:!0,children:f&&Be!==void 0?"":ce})]})})}function ip(e){if(!p.isValidElement(e)||e.type!==vs||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=p.Children.toArray(t).filter(r=>!(p.isValidElement(r)&&r.type===Oh));if(n.length!==1)return!1;const[o]=n;if(!p.isValidElement(o))return!1;if(o.type===Eh)return!0;if(o.type!==p.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const _x=Object.assign(sp,{Context:ma,Delay:da,Container:fn,Header:ba,Toolbar:wa,Footer:ja,Title:va,Glow:Ma,Body:ka,Section:vs,Sidebar:_a}),lp={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function Mx({cols:e,minColWidth:t,fit:n=!1,gap:o="related-dense",rowGap:r,align:s="center",squares:i=!1,squareHeadingPx:l=0,squareHeadingMinPx:c,minRowHeight:d,children:h,...f}){if(i){const x=p.Children.toArray(h).length,m=t??"120px",g=a.jsx(hp,{$count:x,$min:m,$headingPx:l,$gap:dt[o],$rowMin:d,children:a.jsx(fp,{$count:x,$min:m,$headingPx:l,$gap:dt[o],$rowMin:d,$headingMin:c,"data-grid-squares":"",children:h})});return a.jsx(dp,{$rowMin:d,...f,children:d===void 0?g:a.jsx(up,{children:g})})}return a.jsx(cp,{$cols:e,$minColWidth:t,$fit:n,$gap:o,$rowGap:r,$align:s,...f,children:h})}const cp=k.div`
  display: grid;
  align-items: ${({$align:e})=>lp[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${dt[t]} ${dt[e]}`:dt[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:n})=>e||(t?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,dp=k.div`
  container: grid-squares-width / inline-size;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  ${({$rowMin:e})=>e&&`
  flex-basis: 0;
  min-height: ${e};
`}
`,up=k($a)`
  & > [data-scroll-area-inner] {
    display: flex;
    flex-direction: column;
  }
`,hp=k.div`
  container: grid-squares / size;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${({$count:e,$min:t,$headingPx:n,$gap:o,$rowMin:r})=>zh(e,t,n,o,r)}
`,fp=k.div`
  --cols: 1;
  --rows: ${({$count:e})=>e};
  display: grid;
  flex: 1 1 0;
  min-height: 0;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
  gap: ${({$gap:e})=>e};
  ${({$count:e,$min:t,$headingPx:n,$rowMin:o})=>Dh(e,t,n,o)}
  & > * {
    container-type: size;
    min-width: 0;
    min-height: 0;
  }
  ${({$headingPx:e,$headingMin:t})=>Hh(e,t)}
`,Ea=.89,Fo=.45;function Aa({kind:e,x:t,y:n,scale:o=1,ghost:r=!1}){const s=oe[e],i=s.canvasRadius*o,l={fill:s.color,opacity:r?Fo:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const d=i*Ea;return a.jsx("rect",{x:t-d,y:n-d,width:2*d,height:2*d,...l})}const c=`${t},${n-i} ${t+i},${n+i*.8} ${t-i},${n+i*.8}`;return a.jsx("polygon",{points:c,...l})}function Ca(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function Tr(e,t,n,o,r,{ghost:s=!1,scale:i=1}={}){const l=oe[n],c=l.canvasRadius*i;if(t.save(),t.globalAlpha=s?Fo:1,t.fillStyle=Ca(e,l.cssVar,l.fallback),t.beginPath(),n==="held"){const d=c*Ea;t.rect(o-d,r-d,2*d,2*d)}else t.moveTo(o,r-c),t.lineTo(o+c,r+c*.8),t.lineTo(o-c,r+c*.8),t.closePath();t.fill(),t.restore()}function jx(e,t,{held:n,modelled:o},r={}){n!==void 0&&o!==void 0&&(t.save(),t.globalAlpha=Fo,t.strokeStyle=Ca(e,oe.modelled.cssVar,oe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.stroke(),t.restore()),n!==void 0&&Tr(e,t,"held",n.x,n.y,{...r,ghost:o!==void 0}),o!==void 0&&Tr(e,t,"modelled",o.x,o.y,r)}const gn=14,Ee=4,Se=6,pp=6,Or=12,ge=6,Lt=8,Zt=4.5,ao=4,gp=12,mp=190,xp=80;function Ct(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function vp(e,t,n,o){const r=o??e,s=r.x1-r.x0,i=e.y1-e.y0,l=s>=mp&&i>=xp,c=l||o!==void 0,d=l||o?n:n.filter(M=>!M.detail),h=s-ge*2-Ee*2-Lt-ao,f=o!==void 0,x=Math.floor(h/Se),m=M=>Ct(M.value??an,x-(M.currency?M.currency.length+2:0)),g=M=>{const R=M.value??an;if(f)return Ct(M.label,x);if(l)return`${M.label} ${R}`;const _=Math.floor((h-R.length*Se)/Se)-1-(M.modelled?2:0),B=Ct(M.label,Math.min(_,gp));if(B!=="")return`${B} ${R}`;const K=Math.floor(h/Se)-(M.modelled?2:0);return Ct(R,K)},v=M=>(l||f)&&M.currency?M.currency:"",$=M=>v(M)?pp+v(M).length*Se+(M.modelled?Or:0):M.modelled?Or:0,S=l?0:Lt+ao,j=Math.floor((s-ge*2-Ee*2)/Se),I=Math.max(...d.map(M=>f?S+Math.max(g(M).length*Se,m(M).length*Se+$(M)):S+g(M).length*Se+$(M)),c?Math.min(t.length,j)*Se:0),E=c?1:0,C=(d.length*(f?2:1)+E)*gn+Ee*2;return{full:l,named:c,headingChars:j,stacked:f,rows:d,text:g,valueText:m,currencyText:v,cardW:f?s:Math.min(I+Ee*2,s-ge*2),cardH:C,headRows:E,fits:C<=i-ge*2}}function yp(e,t,n,o,r){const s=(i,l)=>i>=t&&i<=t+o&&l>=n&&l<=n+r;for(let i=1;i<e.cx.length;i++){const[l,c,d,h]=[e.cx[i-1],e.cy[i-1],e.cx[i],e.cy[i]];if(![l,c,d,h].every(Number.isFinite))continue;const f=Math.max(1,Math.ceil(Math.hypot(d-l,h-c)/gn));for(let x=0;x<=f;x++)if(s(l+(d-l)*x/f,c+(h-c)*x/f))return!0}return!1}function zo({x:e,plot:t,heading:n,rows:o,column:r,avoid:s=[],traces:i=[]}){const l=vp(t,n,o,r),{rows:c,cardW:d,cardH:h,fits:f}=l,x=t.y0+ge,m=c.flatMap(_=>_.y===void 0||_.y===null?[]:[_.y]),g=(_,B)=>m.every(K=>e+Zt<_||e-Zt>_+d||K+Zt<B||K-Zt>B+h),v=t.x1-e-ge,$=v>=d||v>=e-t.x0,S=_=>Math.max(t.x0+ge,Math.min(t.x1-ge-d,_)),j=$?[e+ge,e-ge-d]:[e-ge-d,e+ge],I=[x,t.y1-ge-h].flatMap(_=>j.map(B=>({cardX:S(B),cardY:_}))),E=(_,B)=>i.every(K=>!yp(K,_,B,d,h)),C=(_,B)=>s.every(K=>_+d<K.x0||_>K.x1||B+h<K.y0||B>K.y1),M=I.find(_=>g(_.cardX,_.cardY)&&E(_.cardX,_.cardY)&&C(_.cardX,_.cardY))??I.find(_=>g(_.cardX,_.cardY)&&C(_.cardX,_.cardY))??I.find(_=>g(_.cardX,_.cardY)&&E(_.cardX,_.cardY))??I.find(_=>g(_.cardX,_.cardY)),R=f?r?{cardX:r.x0,cardY:r.y0+ge}:M:void 0;return{layout:l,place:R}}function Sx(e){return zo(e).place!==void 0}function bp(e){const{layout:t,place:n}=zo(e);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+t.cardW,y1:n.cardY+t.cardH}}function wp({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:i}){const{layout:l,place:c}=zo({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:i}),{full:d,named:h,headingChars:f,stacked:x,rows:m,text:g,valueText:v,currencyText:$,cardW:S,cardH:j,headRows:I}=l,E=c!==void 0,C=c?.cardX??0,M=c?.cardY??0,R=_=>_+Ee+(d?0:Lt+ao);return a.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[a.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),m.map(_=>_.y===void 0||_.y===null?null:a.jsx("circle",{cx:e,cy:_.y,r:3.5,fill:_.color,stroke:"var(--color-text-primary)",strokeWidth:1},_.id)),E&&a.jsxs("g",{"data-plot-crosshair-card":"",children:[a.jsx("rect",{x:C,y:M,width:S,height:j,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),h&&a.jsx("text",{x:C+Ee,y:M+Ee+10,fill:"var(--color-text-muted)",fontSize:10,children:Ct(n,f)}),m.map((_,B)=>{const K=x?2:1,Q=M+Ee+(B*K+I)*gn+10,T=Q+(x?gn:0);return a.jsxs("g",{"data-plot-crosshair-row":_.id,children:[!d&&a.jsx("rect",{x:C+Ee,y:Q-8,width:Lt,height:Lt,fill:_.color,"data-plot-crosshair-swatch":""}),a.jsx("text",{x:R(C),y:Q,fill:_.value===null||x?"var(--color-text-faint)":_.color,fontSize:10,style:{whiteSpace:"pre"},children:g(_)}),x&&a.jsx("text",{x:R(C),y:T,fill:_.value===null?"var(--color-text-faint)":_.color,fontSize:10,style:{whiteSpace:"pre"},children:v(_)}),_.modelled&&a.jsx(Aa,{kind:"modelled",x:C+S-Ee-$(_).length*Se-($(_)?8:4),y:T-3}),$(_)&&a.jsx("text",{x:C+S-Ee,y:T,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:$(_)})]},_.id)})]})]})}const Nr=480,kp=110,$p=200,Fr=56,_p=20,Mp=112,jp=260,Sp=.4,Ep=300;function Ap({width:e,height:t,contentWidth:n,legendHeight:o=0,cardHeight:r=0}){const s=Math.max(Mp,Math.ceil(n));if((t>e||e<Nr)&&t>=$p)return{placement:"below"};if(e<Nr||t<kp||s>Math.min(jp,e*Sp)||e-s<Ep)return{placement:"overlay"};const l=t>=Fr+o+r;return!l&&t<Fr+_p+r?{placement:"overlay"}:{placement:"beside",columnWidth:s,legendBelow:!l}}const Cp={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function Pp(e){return Cp[e]}const st=4,Qt=3,io=6;function Rp(e,t){return e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0}function Lp(e,t){const n=(o,r)=>o>=t.x0&&o<=t.x1&&r>=t.y0&&r<=t.y1;if(e.cx.length===1)return Number.isFinite(e.cx[0])&&n(e.cx[0],e.cy[0]);for(let o=1;o<e.cx.length;o++){const[r,s,i,l]=[e.cx[o-1],e.cy[o-1],e.cx[o],e.cy[o]];if(![r,s,i,l].every(Number.isFinite))continue;const c=Math.max(1,Math.ceil(Math.hypot(i-r,l-s)/io));for(let d=0;d<=c;d++)if(n(r+(i-r)*d/c,s+(l-s)*d/c))return!0}return!1}function Ip({plot:e,card:t,traces:n,obstacles:o}){if(t.width<=0||t.height<=0||t.width>e.x1-e.x0-st*2||t.height>e.y1-e.y0-st*2)return;const r=e.x0+st,s=e.x1-st-t.width,i=e.y0+st,l=e.y1-st-t.height;return[{x:s,y:i},{x:r,y:l},{x:s,y:l},{x:r,y:i}].find(d=>{const h={x0:d.x-Qt,y0:d.y-Qt,x1:d.x+t.width+Qt,y1:d.y+t.height+Qt};return!n.some(f=>Lp(f,h))&&!o.some(f=>Rp(h,f))})}function Tp(e){const t=[],n=[];let o=!0;for(let r=e.y0;r<=e.y1+io;r+=io){const s=Math.min(r,e.y1);t.push(o?e.x0:e.x1,o?e.x1:e.x0),n.push(s,s),o=!o}return{cx:t,cy:n}}function Op(e,t){return e?.includes(t)??!1}function zr(e,t){const{reckoned:n,spans:o}=e.data;return n?.some(r=>t>=r.from&&t<=r.to)?"modelled":o?.some(r=>t>=r.from&&t<=r.to&&r.status==="recorded")?"recorded":"measured"}function Np(e){const{x:t,y:n,y2:o}=e.data;let r=!0;for(let i=0;i<t.length;i++)if(!Number.isFinite(t[i])||i>0&&t[i]<t[i-1]){r=!1;break}if(r)return e;const s=t.map((i,l)=>l).filter(i=>Number.isFinite(t[i])).sort((i,l)=>t[i]-t[l]||i-l);return{...e,data:{x:s.map(i=>t[i]),y:s.map(i=>n[i]),...o?{y2:s.map(i=>o[i])}:{}}}}function Fp(e,t,n){const o=e.data.x,r=e.data.y,s=Math.min(o.length,r.length);if(s===0||t<o[0]||t>o[s-1])return null;let i=0,l=s-1;for(;i<l;){const g=i+l>>1;o[g]<t?i=g+1:l=g}const c=i,d=Math.max(0,c-1);if(o[c]!==t&&c>0&&Op(e.data.breaks,c))return null;const h=t-o[d]<=o[c]-t?d:c;if(n!==void 0&&Math.abs(o[h]-t)>n)return null;const f=o[c]-o[d];if(e.readBetween&&f>0&&o[c]!==t){const g=r[d]+(r[c]-r[d])*(t-o[d])/f;return Number.isFinite(g)?{index:h,x:t,y:g,currency:zr(e,h)}:null}const x=r[h];if(!Number.isFinite(x))return null;const m=e.data.y2?.[h];return{index:h,x:o[h],y:x,...m!==void 0&&Number.isFinite(m)?{y2:m}:{},currency:zr(e,h)}}function zp(e){const t=new Set;for(const n of e)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&t.add(o);return[...t].sort((n,o)=>n-o)}function Dr(e,t,n){if(e.length===0)return null;if(t===null)return e[e.length-1];let o=0,r=e.length-1;for(;o<r;){const i=o+r>>1;e[i]<t?o=i+1:r=i}let s=o+n;return e[o]!==t&&n>0&&(s-=1),e[Math.max(0,Math.min(e.length-1,s))]}function Dp({x:e,y:t,size:n,color:o,text:r}){const s=n/2,i=`M 0 ${-s} L ${s} ${s*.8} L ${-s} ${s*.8} Z`,l=`M -0.9 ${-s*.42} H 0.9 V ${s*.2} H -0.9 Z`,c=`M -0.9 ${s*.4} H 0.9 V ${s*.64} H -0.9 Z`;return a.jsx(Pe,{text:r,focusable:!0,children:a.jsxs("g",{role:"img","aria-label":r,"data-limit-crossing":"",transform:`translate(${e} ${t})`,children:[a.jsx("title",{}),a.jsx("circle",{r:12,fill:"transparent"}),a.jsx("path",{d:`${i} ${l} ${c}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),a.jsx("path",{d:i,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function Pa(e,t,n){return n==="above"?e>=t:e<=t}function Hp({y:e,cx:t,cy:n,limit:o,limitY:r,bad:s,breaks:i=[],step:l=!1,minGapPx:c}){const d=($,S,j)=>{if(!S)return{index:$,x:t[$],y:n[$],entered:!1};if(j===null)return{index:$,x:t[$],y:r,entered:!0};const I=n[$]-n[j],E=I===0?1:(r-n[j])/I;return{index:$,x:t[j]+(t[$]-t[j])*E,y:r,entered:!0}},h=new Set(i),f=[];let x=null,m=!1,g=!1,v=Number.NEGATIVE_INFINITY;for(let $=0;$<e.length;$++){if(!Number.isFinite(e[$])){x=null;continue}const S=Pa(e[$],o,s);if(S&&!g){const j=d($,m,l||h.has($)?null:x),I=f[f.length-1];I!==void 0&&j.x-v<c?I.spells++:f.push({...j,spells:1}),v=j.x}g=S,m=!0,x=$}return f}const Bp=1;function Wp(e,t,n,o,r){const s=n.to;if(s<1||s>=e.length)return!1;const i=o(e[s-1]),l=o(e[s]),c=r(t[s-1]),d=r(t[s]);return l>i?n.t.some((h,f)=>{const x=o(h),m=c+(d-c)*(x-i)/(l-i);return Math.abs(r(n.v[f])-m)>Bp}):!1}function Xn(e,t,n,o){const r=t-e;if(r===0){const s=(n+o)/2;return()=>s}return s=>n+(s-e)/r*(o-n)}function lo(e,t,n=5){if(e===t)return Array.from({length:n},()=>e);const r=(t-e)/(n-1),s=10**Math.floor(Math.log10(r)),l=([1,2,2.5,5,10].find(x=>x*s>=r)??10)*s,c=Math.ceil(e/l)*l,d=[];for(let x=0;d.length<n;x++){const m=c+x*l;if(m>t+l*.01)break;d.push(m)}if(d.length>=2)return d;const h=Math.floor(e/l)*l,f=Math.ceil(t/l)*l;return f>h?[h,f]:[h,h+l]}function Ra(e,t){const n=Math.floor(e/1e3);if(t>=36e5){const s=Math.floor(n/3600),i=Math.floor(n%3600/60),l=n%60;return`${s}:${String(i).padStart(2,"0")}:${String(l).padStart(2,"0")}`}const o=Math.floor(n/60),r=n%60;return`${o}:${String(r).padStart(2,"0")}`}function Hr(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];for(let i=0;i<e.length;i++){const l=n(e[i]).toFixed(2),c=o(t[i]).toFixed(2),d=i===0||r.includes(i);s.push(`${d?"M":"L"}${l},${c}`),d&&co(i,e.length,r)&&s.push(`L${l},${c}`)}return s.join(" ")}function co(e,t,n){return e+1>=t||n.includes(e+1)}function Xp(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let i=o(t[0]).toFixed(2);const l=n(e[0]).toFixed(2);s.push(`M${l},${i}`),co(0,e.length,r)&&s.push(`L${l},${i}`);for(let c=1;c<e.length;c++){const d=n(e[c]).toFixed(2),h=o(t[c]).toFixed(2);if(r.includes(c)){s.push(`M${d},${h}`),co(c,e.length,r)&&s.push(`L${d},${h}`),i=h;continue}s.push(`H${d}`),h!==i&&s.push(`V${h}`),i=h}return s.join(" ")}function Up(e,t,n,o,r,s=[],i=[],l=[]){if(e.length===0)return[];if(i.length===0&&l.length===0)return[{d:r(e,t,n,o,s)}];function c(v,$){const S=new Array(e.length);for(const j of v){const I=Math.min(e.length-1,j.to);for(let E=Math.max(0,j.from);E<=I;E++)S[E]=$(j)}return S}const d=c(i,v=>v.status),h=c(l,v=>v.basis),f=new Set(s),x=[];let m=0;const g=(v,$)=>{const S=v>0&&!f.has(v)?v-1:v,j=C=>C.slice(S,$+1),I=[];for(const C of s)C>S&&C<=$&&I.push(C-S);const E=r(j(e),j(t),n,o,I);E!==""&&x.push({status:d[v],basis:h[v],d:E})};for(let v=1;v<=e.length;v++)(v===e.length||d[v]!==d[m]||h[v]!==h[m])&&(g(m,v-1),m=v);return x}function La(e,t,n,o,r){if(e.length===0)return"";const s=Math.min(e.length,t.length,n.length);if(s===0)return"";const i=[];for(let l=0;l<s;l++){const c=o(e[l]).toFixed(2),d=r(n[l]).toFixed(2);i.push(`${l===0?"M":"L"}${c},${d}`)}for(let l=s-1;l>=0;l--){const c=o(e[l]).toFixed(2),d=r(t[l]).toFixed(2);i.push(`L${c},${d}`)}return i.push("Z"),i.join(" ")}function Yp(e,t,n,o){const r=[];for(const s of t){const{bandLo:i,bandHi:l,bandKind:c}=s;if(!i||!l||c===void 0)continue;const d=[];for(let f=s.from;f<=s.to&&f<e.length;f++)d.push(e[f]);const h=La(d,i,l,n,o);h!==""&&r.push({d:h,kind:c})}return r}function Br(e,t,n,o){if(e===t){const d=(n+o)/2;return()=>d}const r=e>0?e:1e-9,s=t>r?t:r*10,i=Math.log10(r),c=Math.log10(s)-i;if(c===0){const d=(n+o)/2;return()=>d}return d=>{const h=d>0?d:r;return n+(Math.log10(h)-i)/c*(o-n)}}function Gp(e,t,n=5){if(!(e>0)||!(t>0)||t<=e)return lo(e,t,n);const o=Math.log10(e),r=Math.log10(t);if(r-o<1)return lo(e,t,n);const i=Math.ceil(o),l=Math.floor(r),c=Math.max(1,Math.ceil((l-i+1)/n)),d=[];for(let h=i;h<=l;h+=c)d.push(10**h);return d.length>0?d:[e,t]}const Un=.86,Wr=[[0,-1.15],[1.05,.8],[-1.05,.8]],Xr=.3,be={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:Un,triangle:Wr,outlineWidth:Xr,keylineWidth:.2,reach:Math.max(Math.hypot(Un,Un),...Wr.map(([e,t])=>Math.hypot(e,t)))+Xr/2},qp={"aria-hidden":!0};function Ia(e,t,n,o){const r=be.squareHalf;return(e==="modelled"?be.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([i,l])=>[t+i*o,n+l*o])}const Ta=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function Oa(e,t,n){const o=e==="current"?0:be.outlineWidth;return t*(o+2*n*be.keylineWidth)}function Vp({x:e,y:t,r:n,state:o="current",keyline:r=!1}){const s=o==="current"?"":Ia(o,0,0,n).map(([i,l])=>`${i},${l}`).join(" ");return a.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...qp,children:[r&&Ta.map(({ring:i,color:l,widths:c})=>{const d={"data-vessel-keyline":i,fill:"none",stroke:l,strokeWidth:Oa(o,n,c),strokeLinejoin:"round"};return o==="current"?a.jsx("circle",{r:n,...d},i):a.jsx("polygon",{points:s,...d},i)}),o==="current"?a.jsx("circle",{r:n,fill:be.color}):a.jsx("polygon",{points:s,fill:o==="lost"?"none":oe[o].color,stroke:o==="lost"?be.lost.color:be.color,strokeWidth:n*be.outlineWidth,strokeLinejoin:"round"})]})}function on(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function Na(e,t,n,o,r){if(e.beginPath(),t==="current"){e.arc(n,o,r,0,Math.PI*2);return}Ia(t,n,o,r).forEach(([s,i],l)=>{l===0?e.moveTo(s,i):e.lineTo(s,i)}),e.closePath()}function Kp(e,t,n,o,r){e.save(),e.lineJoin="round";for(const{color:s,widths:i}of Ta)Na(e,t,n,o,r),e.strokeStyle=s,e.lineWidth=Oa(t,r,i),e.stroke();e.restore()}function Zp(e,t,n,o,r,s=4,{keyline:i=!1}={}){i&&Kp(t,n,o,r,s);const l=on(e,be.cssVar,be.fallback);if(t.save(),Na(t,n,o,r,s),n==="current")t.fillStyle=l,t.fill();else{if(n!=="lost"){const c=oe[n];t.fillStyle=on(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=n==="lost"?on(e,be.lost.cssVar,be.lost.fallback):l,t.lineWidth=s*be.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function Ex(e,t,n,o=4,r={}){const{held:s,modelled:i}=n;s!==void 0&&i!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=on(e,oe.modelled.cssVar,oe.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(i.x,i.y),t.stroke(),t.restore());for(const l of["lost","held","current","modelled"]){const c=n[l];c!==void 0&&Zp(e,t,l,c.x,c.y,o,r)}}const ht=56;function Fa(e,t,n,o){const r=Math.max(0,Math.min(t-1,Math.floor(n))),s=Math.max(0,Math.min(t-1,Math.floor(o))),i=Math.min(t-1,r+1),l=Math.min(t-1,s+1),c=Math.max(0,Math.min(1,n-r)),d=Math.max(0,Math.min(1,o-s)),h=e[s*t+r]+(e[s*t+i]-e[s*t+r])*c,f=e[l*t+r]+(e[l*t+i]-e[l*t+r])*c;return h+(f-h)*d}const Ur=400,Qp=16,Jp=8,Yr=.06,e0=3.3,t0=.6,n0=60,o0=40,Gr=[6,12],qr=[48,96],Jt=2;function Yn(e,t,n){const o=Math.max(0,Math.min(1,(n-e)/(t-e)));return o*o*(3-2*o)}function Vr(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Kr(e,t){const n=t/e,o=e<=t?.07:.09,r=e0**Math.exp(-((e-t)**2)/(2*o**2*t**2));return n**5*Math.exp(-1.25*n**4)*r}function za(e,t,n){if(!(e>0)||!(t>0)||!(n>0)||!Number.isFinite(e+t+n))return[];const o=Math.sqrt(n*2*Math.PI/Ur),r=Kr(o,o),s=[];for(let i=-Jt;i<=Qp*Jt;i++){const l=Ur/2**(i/Jt),c=l/e,d=Yn(Gr[0],Gr[1],c)*(1-Yn(qr[0],qr[1],c))*(1-Yn(t,2*t,l));if(d<=.001)continue;const h=2*Math.PI/l,f=Math.sqrt(n*h),x=Math.sqrt(Math.min(1,Kr(f,o)/r)),m=(f>=o?Yr:Yr*x)/Math.sqrt(Jt),g=(n0+(Vr(i,1)-.5)*2*o0)*Math.PI/180;s.push({kx:h*Math.sin(g),ky:h*Math.cos(g),k:h,amplitude:m/h,omega:f,phase:Vr(i,2)*2*Math.PI,weight:d})}return s.slice(0,Jp)}function r0(e,t,n,o){let r=0;for(const s of e)r+=s.weight*s.amplitude*Math.cos(s.kx*t+s.ky*n-s.omega*o+s.phase);return r}const rn=Da(-.25,.3,.92),s0=2.6,a0=Da(rn[0],rn[1],rn[2]+1),i0=.8,l0=3,c0=.95,d0=.35,u0=235,h0=.5,f0=.35;function Da(e,t,n){const o=Math.hypot(e,t,n);return[e/o,t/o,n/o]}function p0(e,t,n,o){const{east0:r,north0:s,dx:i,dy:l,seconds:c,colour:d,waves:h,isSea:f}=o,[x,m,g]=rn,[v,$,S]=a0,j=h.length,I=new Float64Array(j*t),E=new Float64Array(j*t),C=new Float64Array(j*n),M=new Float64Array(j*n);for(let T=0;T<j;T++){const W=h[T];for(let w=0;w<t;w++){const D=W.kx*(r+(w+.5)*i);I[T*t+w]=Math.cos(D),E[T*t+w]=Math.sin(D)}for(let w=0;w<n;w++){const D=W.ky*(s-(w+.5)*l)-W.omega*c+W.phase;C[T*n+w]=Math.cos(D),M[T*n+w]=Math.sin(D)}}const R=new Float64Array(j),_=new Float64Array(j),B=h.map(T=>T.kx*T.weight*T.amplitude),K=h.map(T=>T.ky*T.weight*T.amplitude),Q=h.map(T=>t0*T.k*T.weight*T.amplitude);for(let T=0;T<n;T++)for(let W=0;W<t;W++){const w=(T*t+W)*4;if(f&&!f(W,T)){e[w+3]=0;continue}let D=0,Z=0,ce=1;for(let J=0;J<j;J++){const te=I[J*t+W],We=E[J*t+W],Xe=C[J*n+T],$e=M[J*n+T];R[J]=te*Xe-We*$e,_[J]=We*Xe+te*$e}for(let J=0;J<j;J++){const te=j>1?1+i0*R[(J+l0)%j]:1;D-=B[J]*R[J]*te,Z-=K[J]*R[J]*te,ce-=Q[J]*_[J]*te}const Ze=1/Math.sqrt(D*D+Z*Z+ce*ce),we=(D*x+Z*m+ce*g)*Ze-g,Be=1+s0*we;let ke=0;const de=(D*v+Z*$+ce*S)*Ze;if(de>c0){let J=de;for(let te=0;te<7;te++)J*=J;ke=255*d0*J}const Ae=Math.max(0,Be-1)*f0,pe=Math.min(1,Be)*h0;e[w]=d.r*pe+(255-d.r*pe)*Ae+ke,e[w+1]=d.g*pe+(255-d.g*pe)*Ae+ke,e[w+2]=d.b*pe+(255-d.b*pe)*Ae+ke,e[w+3]=u0}}function Zr(e){const t=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function g0(e,t){const n=Zr(t),o=Math.max(e.r,e.g,e.b,1),r=c=>({r:Math.min(255,e.r*c),g:Math.min(255,e.g*c),b:Math.min(255,e.b*c)});let s=0,i=255/o;for(let c=0;c<32;c++){const d=(s+i)/2;Zr(r(d))<n?s=d:i=d}const l=r((s+i)/2);return{r:Math.round(l.r),g:Math.round(l.g),b:Math.round(l.b)}}const m0=192,x0=30,v0="--color-info-mark",y0=.42;function b0(e,t){const n=e.view==="plan",o=t.scaleX,r=t.scaleYPrimary,s=1/(o(1)-o(0)),i=1/(r(1)-r(0)),l=S=>(S-o(0))*s,c=S=>(S-r(0))*i,d=Math.min(o(e.bounds.x0),o(e.bounds.x1)),h=Math.max(o(e.bounds.x0),o(e.bounds.x1)),f=Math.min(r(e.bounds.y0),r(e.bounds.y1)),x=Math.max(r(e.bounds.y0),r(e.bounds.y1)),m=n?d:Math.max(t.plotX0,d),g=n?h:Math.min(t.plotX1,h),v=n?f:Math.max(t.plotY0,f),$=n?x:Math.min(t.plotY1,x);return n&&(h<t.plotX0||d>t.plotX1||x<t.plotY0||f>t.plotY1)||!(g-m>=1&&$-v>=1)||!Number.isFinite(s+i)?null:{left:m,top:v,width:g-m,height:$-v,x0:l(m),x1:l(g),y0:c($),y1:c(v)}}function Qr(e,t){if(!t)return null;e.fillStyle=t;const n=/^#([0-9a-f]{6})$/i.exec(String(e.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function w0(e,t,n){const o=Qr(t,getComputedStyle(e).getPropertyValue(v0).trim());if(!o)return null;const r=n?Qr(t,n):null;return r?g0(r,o):o}function k0(e,t,n,o,r,s){const i=ht,l=(n.x1-n.x0)/i,c=(n.y1-n.y0)/i,d=t.sea,h=o.scaleYPrimary(t.bounds.y0)<o.scaleYPrimary(t.bounds.y1),f=d&&d.size>1&&d.heights.length>=d.size*d.size?(m,g)=>{const v=h?g:i-1-g;return Fa(d.heights,d.size,m/(i-1)*(d.size-1),v/(i-1)*(d.size-1))<0}:void 0,x=e.createImageData(i,i);p0(x.data,i,i,{east0:t.origin.east+n.x0,north0:t.origin.north+n.y1,dx:l,dy:c,seconds:r,colour:s,waves:za(Math.max(l,c),n.x1-n.x0,t.gravity),isSea:f}),e.putImageData(x,0,0)}function $0(e,t,n,o,r){const{width:s,height:i}=e.canvas,l=_0(t,n,s),c=l.length>1?(l[l.length-1]-l[0])/(l.length-1):n.x1-n.x0,d=za(c,n.x1-n.x0,t.gravity),h=(t.bearingDeg??90)*Math.PI/180,f=g=>(g-n.x0)/(n.x1-n.x0)*s,x=g=>(n.y1-g)/(n.y1-n.y0)*i;e.clearRect(0,0,s,i),e.beginPath(),l.forEach((g,v)=>{const $=r0(d,t.origin.east+g*Math.sin(h),t.origin.north+g*Math.cos(h),o);v===0?e.moveTo(f(g),x($)):e.lineTo(f(g),x($))});const m=`${r.r}, ${r.g}, ${r.b}`;e.strokeStyle=`rgba(${m}, 0.9)`,e.lineWidth=1,e.stroke(),e.lineTo(f(l[l.length-1]),i),e.lineTo(f(l[0]),i),e.closePath(),e.fillStyle=`rgba(${m}, ${y0})`,e.fill()}function _0(e,t,n){const o=(e.samples??[]).filter(r=>r>t.x0&&r<t.x1);return e.samples&&e.samples.length>1?[t.x0,...o,t.x1]:Array.from({length:n+1},(r,s)=>t.x0+s/n*(t.x1-t.x0))}function M0({layer:e,frame:t}){const n=b0(e,t),o=p.useRef(null),r=p.useRef(null);r.current=n?{layer:e,at:n,frame:t}:null;const s=n?e.view==="plan"?ht:Math.max(1,Math.min(m0,Math.round(n.width))):0,i=n?e.view==="plan"?ht:Math.max(1,Math.round(n.height*s/n.width)):0,l=e.tint;return p.useEffect(()=>{const c=o.current,d=c?.getContext("2d")??null;if(!c||!d||s===0||i===0)return;const h=w0(c,d,l);if(!h)return;const f=()=>{const j=r.current;if(!j)return;const I=Date.now()/1e3;j.layer.view==="plan"?k0(d,j.layer,j.at,j.frame,I,h):$0(d,j.layer,j.at,I,h)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let m=!0;const g=typeof IntersectionObserver=="function"?new IntersectionObserver(j=>{m=j.some(I=>I.isIntersecting)}):null;g?.observe(c);let v=Number.NEGATIVE_INFINITY,$=0;const S=j=>{$=requestAnimationFrame(S),!(!m||document.hidden||j-v<1e3/x0)&&(v=j,f())};return $=requestAnimationFrame(S),()=>{cancelAnimationFrame($),g?.disconnect()}},[s,i,l]),n?a.jsx("g",{"aria-hidden":"true","data-plot-layer":e.id,"data-plot-layer-kind":"water",children:a.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:a.jsx("canvas",{ref:o,width:s,height:i,style:{display:"block",width:"100%",height:"100%",imageRendering:e.view==="plan"?"pixelated":"auto"}})})}):null}const j0={faint:.45,normal:.85,bright:1},S0=1.5,E0=5,A0=.9,Mt=7,jt=6,Gn=10,ft=9,Fe=12,C0=6.2,qn=4,P0=9,R0=13,L0=.1,It={paintOrder:"stroke",strokeWidth:3,strokeLinejoin:"round"},Vn=5,I0=.5,T0=.5;function He(e){return se[e.tone??"neutral"]}function Ft(e){return ye[e.tone??"neutral"]}function Re(e){return j0[e.emphasis??"normal"]}function Ie(e,t){return t.axis==="secondary"?e.scaleYSecondary:e.scaleYPrimary}function O0(e){const t=e.axis==="secondary"?"secondary":"primary";switch(e.kind){case"series":return{xs:e.points.map(n=>n.x),ys:e.points.map(n=>n.y),axis:t};case"region":return{xs:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.x),ys:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.y),axis:t};case"rule":return e.along==="y"?{xs:[],ys:[e.value],axis:t}:{xs:[e.value],ys:[],axis:t};case"marker":case"annotation":return{xs:[e.at.x],ys:[e.at.y],axis:t};default:return{xs:[],ys:[],axis:t}}}const Do=5.8,at=11,Jr=4;function N0(e,t){const n=t.text.length*Do,{frame:o}=t,r=t.anchorX+t.gap,s=r+n<=o.plotX1-4?"start":"end",i=s==="start"?r:t.anchorX-t.gap,l=s==="start"?i:i-n,c=l+n,d=f=>e.some(x=>l<x.x1&&c>x.x0&&f-at<x.y1&&f+2>x.y0);let h=t.anchorY+3;for(let f=0;f<Jr&&d(h);f++)h+=at;if(d(h)){h=t.anchorY+3;for(let f=0;f<Jr&&d(h);f++)h-=at}return h=Math.min(Math.max(h,o.plotY0+at),o.plotY1-at),e.push({x0:l,x1:c,y0:h-at,y1:h+2}),{x:i,y:h,anchor:s}}function F0(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function z0(e){if(e.length===0)return"";const t=[`M${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`];for(let n=1;n<e.length;n++)t.push(`H${e[n].x.toFixed(2)}`,`V${e[n].y.toFixed(2)}`);return t.join(" ")}function Ha(e,t,n){if(e.length===0)return[];const o=e[0],r=e[e.length-1],s=[...e];if(t==="right"||t==="left"){const i=t==="right"?n.plotX1:n.plotX0;s.push({x:i,y:r.y},{x:i,y:o.y})}else{const i=t==="above"?n.plotY0:n.plotY1;s.push({x:r.x,y:i},{x:o.x,y:i})}return s}function D0(e,t){const n=[];for(const o of e){if(o.kind==="relief"||o.kind==="water"){const i=Ie(t,o),{x0:l,y0:c,x1:d,y1:h}=o.bounds;n.push([{x:t.scaleX(l),y:i(c)},{x:t.scaleX(d),y:i(c)},{x:t.scaleX(d),y:i(h)},{x:t.scaleX(l),y:i(h)}]);continue}if(o.kind!=="region"||o.hatched)continue;const r=Ie(t,o),s=o.boundary.map(i=>({x:t.scaleX(i.x),y:r(i.y)}));if(!(s.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...s,...o.boundaryHigh.map(i=>({x:t.scaleX(i.x),y:r(i.y)})).reverse()])}else n.push(Ha(s,o.side,t))}return(o,r)=>n.some(s=>{let i=!1;for(let l=0,c=s.length-1;l<s.length;c=l++){const d=s[l],h=s[c];d.y>r!=h.y>r&&o<(h.x-d.x)*(r-d.y)/(h.y-d.y)+d.x&&(i=!i)}return i})}function H0({layer:e,frame:t}){if(e.stops.length===0)return null;const n=Ie(t,e),o=e.along==="y"?t.plotY1-t.plotY0:t.plotX1-t.plotX0;if(o<=0)return null;const r=e.along==="y"?t.plotY0:t.plotX0,s=e.along==="y"?n:t.scaleX,i=e.maxOpacity??T0,l=e.tint??He(e),c=e.blur!==void 0?Math.ceil(e.blur*3):0,d=`plot-field-${e.id}-${t.uid}`,h=`plot-field-blur-${e.id}-${t.uid}`,f=e.along==="y"?t.plotY1:t.plotX1,x=e.stops.map(m=>({offset:(s(m.at)-r)/o*100,intensity:Math.max(0,Math.min(1,m.intensity))})).sort((m,g)=>m.offset-g.offset);return a.jsxs(a.Fragment,{children:[a.jsxs("defs",{children:[a.jsx("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:t.plotX0,y1:t.plotY0,x2:e.along==="x"?f:t.plotX0,y2:e.along==="y"?f:t.plotY0,children:x.map((m,g)=>a.jsx("stop",{offset:`${m.offset.toFixed(2)}%`,stopColor:l,stopOpacity:i*m.intensity},g))}),e.blur!==void 0&&a.jsx("filter",{id:h,children:a.jsx("feGaussianBlur",{stdDeviation:e.blur})})]}),a.jsx("rect",{"data-plot-layer":e.id,"data-plot-layer-kind":"field",x:t.plotX0-c,y:t.plotY0-c,width:t.plotX1-t.plotX0+2*c,height:t.plotY1-t.plotY0+2*c,fill:`url(#${d})`,filter:e.blur!==void 0?`url(#${h})`:void 0})]})}const B0=6,it=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function W0(e){const t=Math.max(0,Math.min(1,e));for(let n=1;n<it.length;n++)if(t<=it[n][0]){const[o,r]=it[n-1],[s,i]=it[n],l=s>o?(t-o)/(s-o):0;return[Math.round(r[0]+(i[0]-r[0])*l),Math.round(r[1]+(i[1]-r[1])*l),Math.round(r[2]+(i[2]-r[2])*l)]}return it[it.length-1][1]}const X0=[150,156,160],U0=[200,80,70];function Y0(e,t){if(t===3)return X0;if(t!==1&&t!==2)return e;const n=.3*e[0]+.59*e[1]+.11*e[2],o=(s,i,l)=>s+(l-s)*i,r=e.map(s=>o(o(s,.5,n),.06,235));return t===1?r:r.map((s,i)=>o(s,.3,U0[i]))}function G0(e,t){const n=2*(t-1),o=(e%n+n)%n;return o<t?o:n-o}function q0(e,t,n,o,r,s,i){const l=e[s*n+i],c=r?G0(l,o):l,[d,h,f]=Y0(W0(c/(o-1)),t[s*n+i]),x=i>0?e[s*n+i-1]:l,m=s>0?e[(s-1)*n+i]:l,g=x!==l||m!==l?.5:1;return`rgb(${Math.round(d*g)}, ${Math.round(h*g)}, ${Math.round(f*g)})`}function V0(e,t){const{bounds:n}=e,o=Ie(t,e),r=t.scaleX(n.x0),s=t.scaleX(n.x1),i=o(n.y0),l=o(n.y1),c=Math.abs(s-r)/ht,d=Math.abs(l-i)/ht;return!(c>0)||!(d>0)?null:{left:Math.min(r,s),top:Math.min(i,l),cellW:c,cellH:d,flipRows:i<l}}function K0(e,t){const{size:n,values:o}=e;if(!t||n<2||o.length<n*n)return null;const{left:r,top:s,cellW:i,cellH:l,flipRows:c}=t;let d=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY;for(let E=0;E<n*n;E++){const C=o[E];if(!Number.isFinite(C))return null;C<d&&(d=C),C>h&&(h=C)}const f=h-d,x=e.bandMetres!=null&&e.bandMetres>0?e.bandMetres:null,m=e.veil,g=Math.max(2,e.bands??B0),v=ht,$=new Int16Array(v*v),S=new Uint8Array(v*v),j=m!=null&&m.length>=n*n;for(let E=0;E<v;E++)for(let C=0;C<v;C++){const M=C/(v-1)*(n-1),R=E/(v-1)*(n-1);j&&(S[E*v+C]=m[Math.round(R)*n+Math.round(M)]??0);const _=Fa(o,n,M,R);if(x!=null){$[E*v+C]=Math.floor(_/x);continue}const B=f>0?(_-d)/f:.5;$[E*v+C]=Math.max(0,Math.min(g-1,Math.floor(B*g)))}const I=[];for(let E=0;E<v;E++){const C=c?E:v-1-E;let M=0,R="";for(let _=0;_<=v;_++){const B=_<v?q0($,S,v,g,x!=null,E,_):"";if(_===0){R=B;continue}B===R&&_<v||(I.push(a.jsx("rect",{x:r+M*i,y:s+C*l,width:(_-M)*i+.5,height:l+.5,fill:R},`${E}-${M}`)),M=_,R=B)}}return I}function Z0({layer:e,frame:t}){const n=V0(e,t),{values:o,size:r,veil:s,bandMetres:i,bands:l}=e,{left:c,top:d,cellW:h,cellH:f,flipRows:x}=n??{},m=p.useMemo(()=>K0(e,n),[o,r,s,i,l,c,d,h,f,x]);return m?a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:Re(e),"aria-hidden":"true",children:m}):null}function Q0({layer:e,frame:t}){const n=p.useId(),o=Ie(t,e),r=d=>({x:t.scaleX(d.x),y:o(d.y)}),s=e.boundary.map(r);if(s.length<2)return null;const i=e.side==="between"?[...s,...(e.boundaryHigh??[]).map(r).reverse()]:Ha(s,e.side,t);if(e.side==="between"&&!e.boundaryHigh)return null;const l=e.side==="right"?t.plotX1-4:e.side==="left"?t.plotX0+11:s[s.length-1].x,c=(t.plotY0+t.plotY1)/2;return a.jsxs(a.Fragment,{children:[e.hatched&&a.jsx("defs",{children:a.jsx("pattern",{id:n,width:Vn,height:Vn,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:a.jsx("line",{x1:0,y1:0,x2:0,y2:Vn,stroke:He(e),strokeWidth:1,strokeOpacity:e.opacity??I0})})}),a.jsx("polygon",{"data-plot-layer":e.id,"data-plot-layer-kind":"region","data-hatched":e.hatched?"":void 0,points:i.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:e.hatched?`url(#${n})`:He(e),fillOpacity:e.hatched?void 0:e.opacity??L0}),t.labels&&e.label&&a.jsx("text",{x:l,y:c,transform:`rotate(-90 ${l} ${c})`,textAnchor:"middle",fontSize:P0,letterSpacing:"0.14em",fill:"var(--color-text-muted)",stroke:"var(--color-surface-raised)",...It,children:e.label})]})}function J0({layer:e,frame:t}){const n=Ie(t,e),o=e.points.map(s=>({x:t.scaleX(s.x),y:n(s.y)}));if(o.length===0)return null;const r=S0*(e.weight??1);if(e.style==="scatter"){const s=e.radius===void 0?r:Math.abs(t.scaleX(e.radius)-t.scaleX(0));return a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",fill:He(e),opacity:Re(e),children:o.map((i,l)=>a.jsx("circle",{cx:i.x,cy:i.y,r:s},l))})}return a.jsx("path",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",d:e.style==="step"?z0(o):F0(o),fill:"none",stroke:He(e),strokeOpacity:Re(e),strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:e.dashed?"5 3.5":void 0})}function eg({layer:e,frame:t}){const n=Ie(t,e),o=e.dashed??!0,r=He(e),s=e.along==="y",i=s?n(e.value):t.scaleX(e.value);return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"rule",x1:s?t.plotX0:i,x2:s?t.plotX1:i,y1:s?i:t.plotY0,y2:s?i:t.plotY1,stroke:r,strokeOpacity:Re(e),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),t.labels&&e.label&&a.jsx("text",{x:s?t.plotX1-4:i+3,y:s?i-3:t.plotY0+10,textAnchor:s?"end":"start",fill:Ft(e),fontSize:ft,children:e.label})]})}function tg({layer:e,frame:t,placed:n}){const o=Ie(t,e),r=t.scaleX(e.at.x),s=o(e.at.y),i=e.across??"x",l=He(e),c=t.labels&&e.label?N0(n,{anchorX:r,anchorY:s,gap:Mt+3,text:e.label,frame:t}):null;return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"annotation",x1:i==="x"?r-Mt:r,x2:i==="x"?r+Mt:r,y1:i==="x"?s:s-Mt,y2:i==="x"?s:s+Mt,stroke:l,strokeOpacity:Re(e),strokeWidth:1.75,strokeLinecap:"round"}),c&&e.label&&a.jsx("text",{x:c.x,y:c.y,textAnchor:c.anchor,fontSize:ft,letterSpacing:"0.05em",fill:Ft(e),fillOpacity:Re(e),children:e.label})]})}function ng({layer:e,frame:t}){const n=Ie(t,e),o=t.scaleX(e.at.x),r=n(e.at.y)+(e.offsetPx??0),s=E0*(e.scale??1),i=He(e),l=e.shape??"dot",c={"data-plot-layer":e.id,"data-plot-layer-kind":"marker",opacity:Re(e)},d=l==="none"?null:l==="vessel"?a.jsx("g",{...c,children:a.jsx(Vp,{state:e.markState??"current",x:o,y:r,r:s*A0,keyline:!0})}):l==="dot"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:i,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):l==="ring"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:"none",stroke:i,strokeWidth:1.5}):l==="cross"?a.jsx("path",{...c,d:`M${o-s},${r} L${o+s},${r} M${o},${r-s} L${o},${r+s}`,stroke:i,strokeWidth:1.5,strokeLinecap:"round"}):l==="chevron-up"||l==="chevron-down"?a.jsx("polyline",{...c,points:l==="chevron-up"?`${o-s},${r+s*.5} ${o},${r-s*.5} ${o+s},${r+s*.5}`:`${o-s},${r-s*.5} ${o},${r+s*.5} ${o+s},${r-s*.5}`,fill:"none",stroke:i,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null,h=(e.label?.length??0)*Do/2+3,f=l==="none"?Math.min(Math.max(o,t.plotX0+h),t.plotX1-h):o+s+3,x=l==="none"?Math.min(Math.max(r+3,t.plotY0+ft+3),t.plotY1-4):r+3;return a.jsxs(a.Fragment,{children:[d,t.labels&&e.label&&a.jsx("text",{x:f,y:x,textAnchor:l==="none"?"middle":void 0,fontSize:ft,fill:Ft(e),fillOpacity:Re(e),stroke:"var(--color-surface-raised)",...It,children:e.label})]})}function og({layer:e,frame:t,row:n,edges:o}){const r=e.caption?2:1;if(e.anchor==="left-edge"||e.anchor==="right-edge"){const g=e.anchor==="left-edge"?t.plotX0+jt+n*Fe:t.plotX1-jt-n*Fe,v=t.plotY1-34;return a.jsx("text",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",x:g,y:v,transform:`rotate(-90 ${g} ${v})`,fontSize:ft,letterSpacing:"0.14em",fill:Ft(e),fillOpacity:Re(e),stroke:"var(--color-surface-raised)",...It,children:e.text})}const s=e.anchor.startsWith("top"),i=e.anchor.endsWith("right"),l=g=>jt+(g?R0:0),c=i?t.plotX1-l(o.right):t.plotX0+l(o.left),d=n*(r*Fe+2),h=s?t.plotY0+jt+Gn+d:t.plotY1-jt-d,f=h-Fe,x=Math.max(e.text.length*C0,(e.caption?.length??0)*Do)+2*qn,m=(s?h:h-(e.caption?Fe:0))-Gn-1;return a.jsxs("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",textAnchor:i?"end":"start",children:[a.jsx("rect",{x:i?c-x+qn:c-qn,y:m,width:x,height:r*Fe+1,rx:3,fill:"var(--color-surface-raised)",fillOpacity:.8}),e.caption&&a.jsx("text",{x:c,y:s?h:f,fontSize:ft,letterSpacing:"0.05em",fill:"var(--color-text-faint)",stroke:"var(--color-surface-raised)",...It,children:e.caption}),a.jsx("text",{x:c,y:e.caption&&s?h+Fe:h,fontSize:Gn,fontWeight:700,fill:Ft(e),fillOpacity:Re(e),stroke:"var(--color-surface-raised)",...It,children:e.text})]})}const es={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},rg={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function Kn({layers:e,frame:t,pass:n}){const o=e.map((l,c)=>({layer:l,index:c})).filter(({layer:l})=>rg[l.kind]===n).sort((l,c)=>es[l.layer.kind]-es[c.layer.kind]||(l.layer.z??0)-(c.layer.z??0)||l.index-c.index),r=new Map,s=[],i={left:e.some(l=>l.kind==="caption"&&l.anchor==="left-edge"||l.kind==="region"&&l.side==="left"&&!!l.label),right:e.some(l=>l.kind==="caption"&&l.anchor==="right-edge"||l.kind==="region"&&l.side==="right"&&!!l.label)};return a.jsx(a.Fragment,{children:o.map(({layer:l,index:c})=>{const d=`${l.id}-${c}`;switch(l.kind){case"relief":return a.jsx(Z0,{layer:l,frame:t},d);case"water":return a.jsx(M0,{layer:l,frame:t},d);case"field":return a.jsx(H0,{layer:l,frame:t},d);case"region":return a.jsx(Q0,{layer:l,frame:t},d);case"series":return a.jsx(J0,{layer:l,frame:t},d);case"rule":return a.jsx(eg,{layer:l,frame:t},d);case"annotation":return a.jsx(tg,{layer:l,frame:t,placed:s},d);case"marker":return a.jsx(ng,{layer:l,frame:t},d);case"caption":{const h=r.get(l.anchor)??0;return r.set(l.anchor,h+1),a.jsx(og,{layer:l,frame:t,row:h,edges:i},d)}default:return null}})})}function sg(e){return e.map(t=>t.description).filter(t=>typeof t=="string"&&t.length>0)}const ts=11,en=3,tn=4,ns=(e,t)=>e.x0<t.x1&&t.x0<e.x1&&e.y0<t.y1&&t.y0<e.y1;function ag(e,t,n,o,r){let s=0,i=1;const l=n-e,c=o-t,d=[[-l,e-r.x0],[l,r.x1-e],[-c,t-r.y0],[c,r.y1-t]];for(const[h,f]of d){if(h===0&&f<0)return!1;if(h!==0){const x=f/h;h<0?s=Math.max(s,x):i=Math.min(i,x)}}return s<=i}function ig(e,t){for(let n=1;n<e.cx.length;n++){const o=[e.cx[n-1],e.cy[n-1],e.cx[n],e.cy[n]];if(o.every(Number.isFinite)&&ag(o[0],o[1],o[2],o[3],t))return!0}return!1}function lg({labels:e,plot:t,obstacles:n,traces:o}){const r=[],s=new Map;for(const i of e){const l={y0:i.lineY-en-ts,y1:i.lineY-en},c={y0:i.lineY+en,y1:i.lineY+en+ts},d={x0:t.x1-tn-i.width,x1:t.x1-tn},h={x0:t.x0+tn,x1:t.x0+tn+i.width},f=[{...d,...l,anchor:"end"},{...d,...c,anchor:"end"},{...h,...l,anchor:"start"},{...h,...c,anchor:"start"}];let x=null;for(const m of f){if(!(m.x0>=t.x0&&m.x1<=t.x1&&m.y0>=t.y0&&m.y1<=t.y1)||r.some($=>ns(m,$)))continue;const v=2*n.filter($=>ns(m,$)).length+o.filter($=>ig($,m)).length;(x===null||v<x.cost)&&(x={spot:m,cost:v})}if(x===null){s.set(i.id,null);continue}r.push(x.spot),s.set(i.id,{x:x.spot.anchor==="end"?x.spot.x1:x.spot.x0,y:x.spot.y1-2,anchor:x.spot.anchor})}return s}const cg=4,dg=2.5;function ug(e,t){if(e.length===0)return!1;const n=e[e.length-1]-t;return n===0?!0:e.length===1?!1:Math.sign(e[0]-t)!==Math.sign(n)}function hg(e,t){return e==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:t?e==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const fg=(e,t)=>Ra(e-t[0],t[1]-t[0]),Ax=(e,t)=>Ra((e-t[0])*1e3,(t[1]-t[0])*1e3),Zn={top:10,bottom:28,left:50};function Ba(e,t,n){const o=(s,i,l)=>Math.max(s,Math.min(l,i)),r=o(30,Math.round(e*.18),Zn.left);return{top:Zn.top,right:n?r:o(14,Math.round(e*.07),20),bottom:t<150?20:Zn.bottom,left:r}}const os=e=>e.length*6.5+6,pg=4,gg=.4,mg=26,qe=14,je=16,nn=4,xg=6,St=(e,t)=>Math.min(e.length*6+8,t);function vg(e,t){const n=[];let o=0,r=0;for(const s of e)r>0&&r+s>t&&(o+=1,r=0),n.push({row:o,x:r}),r+=s+xg;return{rows:e.length===0?0:o+1,positions:n}}const rs=4,yg=.03;function Qn(e,t){const n=Math.max(0,Math.floor(t/6));if(e.length<=n)return e;const o=e.lastIndexOf(" (");if(o>0&&e.length-o+4<=n){const r=n-(e.length-o)-3;return`${e.slice(0,r)}...${e.slice(o)}`}return n<4?"":`${e.slice(0,n-3)}...`}function ss(e,t){const n=e.split(/(?=M)/).filter(r=>r.length>0),o=[];for(const r of n){const s=[...r.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)];if(s.length<2)continue;const i=s[0],l=s[s.length-1];o.push(`${r.trim()} L${l[1]},${t} L${i[1]},${t} Z`)}return o.length>0?o.join(" "):null}function bg(e,t,n,o,r=1){const s=[],i=mg*Math.max(.5,Math.min(2,r));for(let l=e+i/2;l<t;l+=i)for(let c=n+i/2;c<o;c+=i)s.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return s}const wg=120,kg=90,$g=70,_g=35,Mg=2,jg=12,as=8,Sg=2,ze=14,mn=6,xn=12,Eg=16,Ag=12,Cg=200,is=10,Pg=.2,ls=.6,cs="5 3",Rg=.15,Lg=.45,Ig="the value is inside the shaded region";function Tg(e){return(e.type??"line")==="band"&&e.data.y2?[...e.data.y,...e.data.y2]:e.data.y}function Og({series:e,thresholds:t,yTickFormat:n}){const o=s=>s*mn,r=[];for(const s of e)r.push(o(s.label.length)+8);for(const s of t){if(s.kind==="marker"&&!s.label)continue;const i=s.label??n(s.value);r.push(o(i.length)+xn+8)}return Math.max(0,...r)+jg}function Ng({width:e,height:t,hasSecondary:n,series:o,thresholds:r}){const s=r.filter(h=>h.label);if(o.length===0||s.length===0)return!1;const i=Math.max(...o.map(h=>h.label.length*6+8)),l=Math.max(...s.map(h=>(h.label?.length??0)*mn+xn)),c=Ba(e,t,n),d=e-c.left-c.right-qe-Eg;return i+l+Ag>d}function Cx({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:r=fg,yTickFormat:s=Fg,yScalePrimary:i="linear",yScaleSecondary:l="linear",thresholds:c,legend:d="overlay",hideXAxis:h=!1,density:f="chart",spatial:x=!1,gridScale:m=1,layers:g,"aria-label":v,crosshair:$=!1,xKind:S="time",xReadFormat:j,xAxisLabel:I,yAxisLabel:E,ySecondaryAxisLabel:C,card:M,cardForms:R=1,width:_,height:B}){const K=p.useId(),Q=f==="compact",T=Q?"none":d,W=x,w=W||Q,D=$&&!w&&e.some(u=>u.data.x.length>0),[Z,ce]=p.useState(null),[Ze,we]=p.useState(!1),[Be,ke]=p.useState(""),[de,Ae]=p.useState(null),[pe,J]=p.useState(null),te=pe?.w===_&&pe.h===B?pe.form:0,[We,Xe]=p.useState(null),$e=M!=null,ae=We?.form===te?We:null;p.useLayoutEffect(()=>{if(!de){Xe(null);return}const u=()=>Xe(b=>{const P={w:de.offsetWidth,h:de.offsetHeight,form:te};return b?.w===P.w&&b?.h===P.h&&b?.form===P.form?b:P});u();const y=new ResizeObserver(u);return y.observe(de),()=>y.disconnect()},[de,te]);const ue=_,G=B,ie=e.filter(u=>u.axis==="primary"&&u.data.x.length>0),_e=e.filter(u=>u.axis==="secondary"&&u.data.x.length>0),Me=_e.length>0,An=T!=="none"&&e.length>0||(c??[]).some(u=>u.label),Ho=Og({series:e,thresholds:c??[],yTickFormat:s}),Bo=$e&&ae!==null&&ae.w+as<=Math.max(112,Math.ceil(Ho)),Wo=w||!An?{placement:"overlay"}:Ap({width:ue,height:G,contentWidth:Ho,legendHeight:T==="none"?0:e.length*je+6,cardHeight:Bo&&ae!==null?ae.h:0}),mt=Wo.placement==="overlay"&&!w&&T!=="none"&&G>=Cg&&Ng({width:ue,height:G,hasSecondary:Me,series:e,thresholds:c??[]})?{placement:"below"}:Wo,Ce=T!=="none"&&(mt.placement==="below"||mt.placement==="beside"&&mt.legendBelow),Cn=Ce?vg(e.map(u=>St(u.label,ue-2*nn)),ue-2*nn):{rows:0,positions:[]},Pn=Cn.rows===0?0:Cn.rows*je+4,Xo=!w&&!h&&!!I,Uo=!w&&!!E,Yo=!w&&Me&&!!C,Dt=W?0:1,Go=w?{top:Dt,right:Dt,bottom:Dt,left:Dt}:Ba(ue,G,Me),Qe={...Go,bottom:Go.bottom+(Xo?qe:0)+Pn},U=Qe.top,q=G-Qe.bottom,Te=q-U,Ht=p.useMemo(()=>{const u={primary:[],secondary:[]};for(const y of g??[]){const b=O0(y);u[b.axis].push(...b.ys)}return u},[g]),Je=p.useMemo(()=>ds(ie,n,i,Ht.primary),[ie,n,i,Ht]),et=p.useMemo(()=>ds(_e,o,l,Ht.secondary),[_e,o,l,Ht]),he=i==="log"?Br(Je[0],Je[1],q,U):Xn(Je[0],Je[1],q,U),fe=l==="log"?Br(et[0],et[1],q,U):Xn(et[0],et[1],q,U),qo=Math.max(2,Math.min(7,Math.round(Te/_g))),Rn=(u,y,b,P)=>{const L=Math.min(u,y),O=Math.max(u,y),A=(O-L)*1e-6||1e-6,z=V=>V>=L-A&&V<=O+A,Y=V=>P==="log"?Gp(L,O,V):lo(L,O,V);for(let V=b;V<=64;V*=2){const xe=Y(V).filter(z);if(xe.length<2)continue;if(xe.length<=b)return xe;const kt=(xe.length-1)/(b-1),Ut=Array.from({length:b},(Hg,ii)=>xe[Math.round(ii*kt)]);return Array.from(new Set(Ut))}return[L,O]},Bt=Rn(Je[0],Je[1],qo,i==="log"?"log":"linear"),Wt=Me?Rn(et[0],et[1],qo,l==="log"?"log":"linear"):[],Vo=(u,y)=>u.length===0?y:Math.max(y,Math.min(Math.round(ue*gg),Math.max(...u.map(b=>os(s(b,u))))+pg)),Ln=w?Qe:{left:Vo(Bt,Qe.left)+(Uo?qe:0),right:(Me?Vo(Wt,Qe.right):Qe.right)+(Yo?qe:0)},X=Ln.left,In=mt.placement==="beside"?mt.columnWidth:0,re=ue-Ln.right-In,me=re-X,Ko=ue-In-qe/2,Ue=me>=wg&&Te>=kg,ee=In>0?{x0:re+(Me?Ln.right:0)+as,y0:U,x1:ue-Sg,y1:q}:void 0,Zo=T==="none"||ee||Ce?[]:e.map((u,y)=>({x0:X+3,y0:U+6+y*je,x1:X+3+St(u.label,me-6),y1:U+6+y*je+13})),ne=Xn(t[0],t[1],X,re),Wa=Math.max(2,Math.min(8,Math.round(me/$g))),xt=Rn(t[0],t[1],Wa,"linear"),Xa=p.useMemo(()=>{const u=[],y=xt.length-1;if(y<0)return u;const b=os,P=6,L=A=>{const z=xt[A],Y=r(z,t,xt),V=ne(z),xe=b(Y),kt=A===0?"start":A===y?"end":"middle",Ut=kt==="start"?V:kt==="end"?V-xe:V-xe/2;return{x:V,text:Y,anchor:kt,leftEdge:Ut,rightEdge:Ut+xe}},O=L(0);if(u.push({x:O.x,text:O.text,anchor:O.anchor}),y>=1){const A=L(y);if(A.leftEdge>=O.rightEdge+P){let z=O.rightEdge;for(let Y=1;Y<y;Y++){const V=L(Y);V.leftEdge>=z+P&&V.rightEdge<=A.leftEdge-P&&(u.push({x:V.x,text:V.text,anchor:V.anchor}),z=V.rightEdge)}u.push({x:A.x,text:A.text,anchor:A.anchor})}}return u},[xt,t,ne,r]),Qo=(u,y)=>{const b=new Set,P=u.length;if(P===0||(b.add(0),P===1))return b;const L=16,O=y(u[0]),A=y(u[P-1]);if(Math.abs(A-O)>=L){let z=O;for(let Y=1;Y<P-1;Y++){const V=y(u[Y]);Math.abs(V-z)>=L&&Math.abs(A-V)>=L&&(b.add(Y),z=V)}b.add(P-1)}return b},Ua=Qo(Bt,he),Ya=Qo(Wt,fe),Oe=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>{const y=u.axis==="primary"?he:fe,b=u.type??"line";if(b==="band")return u.data.y2?{id:u.id,kind:"band",color:u.color,opacity:u.fillOpacity??Pg,d:La(u.data.x,u.data.y,u.data.y2,ne,y)}:{id:u.id,kind:"noop"};if(b==="scatter"){const A=u.data.x.map((z,Y)=>({cx:ne(z),cy:y(u.data.y[Y])}));return{id:u.id,kind:"scatter",color:u.color,points:A}}const P=b==="step"?Xp:Hr,L=(u.data.bridges??[]).filter(A=>Wp(u.data.x,u.data.y,A,ne,y)),O=[...new Set([...u.data.breaks??[],...L.map(A=>A.to)])].sort((A,z)=>A-z);return{id:u.id,kind:"stroked",color:u.color,dashed:u.dashed??!1,uncertainty:Yp(u.data.x,u.data.reckoned??[],ne,y),segments:Up(u.data.x,u.data.y,ne,y,P,O,u.data.spans,u.data.reckoned),modelled:L.map(A=>({basis:A.basis,d:Hr([u.data.x[A.to-1],...A.t,u.data.x[A.to]],[u.data.y[A.to-1],...A.v,u.data.y[A.to]],ne,y)})),tail:u.data.x.length>0&&(u.data.reckoned??[]).some(A=>A.to>=u.data.x.length-1)?{cx:ne(u.data.x[u.data.x.length-1]),cy:y(u.data.y[u.data.y.length-1])}:null,observed:[...new Set(L.flatMap(A=>[A.to-1,A.to]))].map(A=>({cx:ne(u.data.x[A]),cy:y(u.data.y[A])}))}}),[e,ne,he,fe]),Ye=p.useMemo(()=>c?c.map(u=>{const y=u.axis??"primary",b=e.filter(L=>L.axis===y&&L.type!=="band"&&!L.dashed),P=u.kind==="limit"?b.some(L=>{const O=L.data.y.filter(A=>Number.isFinite(A));return O.length>0&&Pa(O[O.length-1],u.value,u.bad)}):u.kind==="target"&&b.some(L=>ug(L.data.y,u.value));return{id:u.id,label:u.label,spokenLabel:u.spokenLabel,value:u.value,kind:u.kind,passed:P,currency:yn(u.reading,{drawsReckoning:!0}),tone:hg(u.kind,P),dashed:u.kind!=="marker",y:y==="primary"?he(u.value):fe(u.value)}}):[],[c,e,he,fe]),vt=p.useMemo(()=>{const u=(y,b,P)=>Math.max(y,Math.min(P,b));return(c??[]).flatMap(y=>{if(y.kind!=="limit"||!Number.isFinite(y.value))return[];const b=y.axis??"primary",P=b==="primary"?he:fe,L=P(y.value),O=y.bad==="above"?-1:1,A=y.label||`the limit at ${s(y.value)}`;return e.filter(z=>z.axis===b&&z.data.x.length>0&&(z.type??"line")!=="band"&&!z.dashed).flatMap(z=>Hp({y:z.data.y,cx:z.data.x.map(ne),cy:z.data.y.map(P),limit:y.value,limitY:L,bad:y.bad,breaks:z.data.breaks,step:z.type==="step"||z.type==="scatter",minGapPx:ze}).slice(Ue?0:-1).map(Y=>{const V=s(z.data.y[Y.index]),xe=r(z.data.x[Y.index],t);return{key:`${y.id}-${z.id}-${Y.index}`,color:z.color,x:u(X+ze/2+1,Y.x-is*(Y.entered?1:-1),re-ze/2-1),y:u(U+ze/2+1,Y.y+O*is,q-ze/2-1),text:Y.entered?Y.spells>1?`${z.label} went past ${A} ${Y.spells} times from ${xe}, first reading ${V}`:`${z.label} went past ${A} at ${xe}, reading ${V}`:`${z.label} was already past ${A} when this window began at ${xe}, reading ${V}`}}))})},[c,e,ne,he,fe,r,s,t,X,re,U,q,Ue]),le=(()=>{if(!$e||ae===null||w)return;if(ee&&Bo){const L={x0:ee.x0,y0:q-ae.h,x1:ee.x0+ae.w,y1:q},O=U+(T==="none"||Ce?0:e.length*je+6);return L.x1<=ee.x1&&L.y0>=O?L:void 0}const u=ze/2,y=[...e.filter(L=>(L.type??"line")!=="band").flatMap(L=>{const O=L.axis==="primary"?he:fe,A=L.data.x.map(ne),z=L.data.y.map(O);return L.type==="scatter"?A.map((Y,V)=>({cx:[Y],cy:[z[V]]})):[{cx:A,cy:z}]}),...Ye.map(L=>({cx:[X,re],cy:[L.y,L.y]}))],b=[...vt.map(L=>({x0:L.x-u,y0:L.y-u,x1:L.x+u,y1:L.y+u})),...T==="none"||ee||Ce?[]:e.map((L,O)=>({x0:X+3,y0:U+6+O*16,x1:X+3+Math.min(L.label.length*6+8,me-6),y1:U+6+O*16+13}))],P=Ip({plot:{x0:X,y0:U,x1:re,y1:q},card:{width:ae.w,height:ae.h},traces:y,obstacles:b});return P?{x0:P.x,y0:P.y,x1:P.x+ae.w,y1:P.y+ae.h}:void 0})(),tt=p.useMemo(()=>{if(!Ue)return new Map;const u=ze/2;return lg({labels:Ye.filter(y=>y.label).map(y=>({id:y.id,width:(y.label?.length??0)*mn+(y.currency.held?xn:0),lineY:y.y})),plot:ee??{x0:X,y0:U,x1:re,y1:q},obstacles:[...le?[le]:[],...vt.map(y=>({x0:y.x-u,y0:y.y-u,x1:y.x+u,y1:y.y+u})),...T==="none"||Ce?[]:e.map((y,b)=>({x0:ee?ee.x0:X+3,y0:U+6+b*je,x1:(ee?ee.x0:X+3)+St(y.label,ee?ee.x1-ee.x0:me-6),y1:U+6+b*je+13}))],traces:(ee?[]:e).filter(y=>(y.type??"line")!=="band").map(y=>({cx:y.data.x.map(ne),cy:y.data.y.map(y.axis==="primary"?he:fe)}))})},[Ue,le,ee,Ye,vt,T,Ce,e,ne,he,fe,X,re,U,q,me]),Ga=(()=>{const u=U+6;if(T==="none"||Ce||e.length===0)return u;const y=ee?ee.x0:X+3,b=y+Math.max(...e.map(O=>St(O.label,ee?ee.x1-ee.x0:me-6))),P=Ye.flatMap(O=>{const A=tt.get(O.id);if(!O.label||!A)return[];const z=O.label.length*mn+(O.currency.held?xn:0),Y=A.anchor==="end"?A.x-z:A.x;return[{x0:Y,y0:A.y-9,x1:Y+z,y1:A.y+2}]});le&&P.push(le);const L=e.length*je-3;for(let O=u;O+L<=q;O+=je){const A={x0:y,y0:O,x1:b,y1:O+L};if(!P.some(z=>A.x0<z.x1&&z.x0<A.x1&&A.y0<z.y1&&z.y0<A.y1))return O}return u})(),qa=e.flatMap(u=>{const y=Oe.find(A=>A.id===u.id),b=y?.kind==="stroked"?y.modelled.map(A=>A.basis):[],P=u.data.reckoned??[];if(P.length===0&&b.length===0)return[];const O=[...new Set([...P.map(A=>A.basis),...b])].map(A=>`${u.label}: part of this trace is reckoned, ${Pp(A)}, not measured`);return P.some(A=>A.bandLo&&A.bandHi)&&O.push(`${u.label}: ${Ig}`),O}),Va=Ye.flatMap(u=>{const y=u.spokenLabel??u.label??u.id,b=[];return u.passed&&u.kind==="limit"&&b.push(`${y}: limit passed`),u.passed&&u.kind==="target"&&b.push(`${y}: target reached`),u.currency.held&&b.push(Ys(y,u.currency.caption)),u.label&&!tt.get(u.id)&&b.length===0&&b.push(u.spokenLabel??u.label),b}),Tn=[...qa,...Va],Ka=[v??"Telemetry line chart",...sg(g??[]),...Tn].join("; "),On=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>S==="value"?Np(u):u),[e,S]),Nn=p.useMemo(()=>D?zp(On):[],[D,On]),yt=Math.min(t[0],t[1]),bt=Math.max(t[0],t[1]),Za=S==="value"?(bt-yt)*yg:void 0;function Jo(u){const y=On.map(b=>{const P=Fp(b,u,Za),L=b.format??s,O=b.axis==="primary"?he:fe,A=(b.type??"line")==="band";return P===null?{id:b.id,label:b.label,color:b.color,value:null}:{id:b.id,label:b.label,color:b.color,value:A&&P.y2!==void 0?`${L(P.y)} to ${L(P.y2)}`:L(P.y),currency:P.currency==="measured"?void 0:P.currency,modelled:P.currency==="modelled",y:A?void 0:O(P.y)}});if(Ue)for(const b of Ye)b.kind!=="marker"&&y.push({id:`threshold-${b.id}`,label:b.kind,color:b.tone.label,value:b.label??s(b.value),detail:!0,currency:b.currency.held?b.currency.mark==="modelled"?"modelled":"held":void 0,modelled:b.currency.held&&b.currency.mark==="modelled"});return{heading:(j??r)(u,t),rows:y}}function er(u){const{heading:y,rows:b}=Jo(u);return[y,...b.map(P=>`${P.label} ${P.value??"no sample"}${P.currency?`, ${P.currency}`:""}`)].join("; ")}const tr=e.filter(u=>(u.type??"line")!=="band").map(u=>({cx:u.data.x.map(ne),cy:u.data.y.map(u.axis==="primary"?he:fe)})),nr=le?[...tr,Tp(le)]:tr,or=$e&&!w&&ae!==null&&ae.w>0&&ae.h>0&&!le&&te<R-1;p.useLayoutEffect(()=>{or&&J({w:_,h:B,form:te+1})},[or,_,B,te]);const Qa=u=>{let y=u,b=Number.POSITIVE_INFINITY;for(const P of Nn)P<yt||P>bt||Math.abs(P-u)<b&&(b=Math.abs(P-u),y=P);return y},Ge=D&&Z!==null&&Z.at>=yt&&Z.at<=bt?Qa(Z.at):null,nt=Ge===null?null:Jo(Ge),wt=nt!==null&&Ge!==null?bp({x:ne(Ge),plot:{x0:X,y0:U,x1:re,y1:q},heading:nt.heading,rows:nt.rows,avoid:Zo,traces:nr}):void 0,Ja=le!==void 0&&wt!==void 0&&wt.x0<le.x1&&wt.x1>le.x0&&wt.y0<le.y1&&wt.y1>le.y0;function ei(u){const y=u.currentTarget.getBoundingClientRect(),b=u.clientX-y.left;return b<X||b>re?null:t[0]+(b-X)/(re-X)*(t[1]-t[0])}function ti(u){const y=ei(u);if(y===null){ce(b=>b?.source==="pointer"?null:b);return}ce({at:y,source:"pointer"})}function ni(u){const y=Nn.filter(O=>O>=yt&&O<=bt),b={ArrowLeft:u.shiftKey?-10:-1,ArrowRight:u.shiftKey?10:1,Home:-y.length,End:y.length};if(u.key==="Escape"){if(Z===null)return;u.preventDefault(),ce(null),ke("");return}const P=b[u.key];if(P===void 0)return;u.preventDefault();const L=Dr(y,Ge,P);L!==null&&(ce({at:L,source:"keys"}),ke(er(L)))}function oi(u){try{we(u.currentTarget.matches(":focus-visible"))}catch{we(!0)}if(Z!==null)return;const y=Dr(Nn.filter(b=>b>=yt&&b<=bt),null,0);y!==null&&(ce({at:y,source:"keys"}),ke(er(y)))}function ri(){we(!1),ce(u=>u?.source==="keys"?null:u),ke("")}const si=D?{tabIndex:0,onPointerMove:ti,onPointerLeave:()=>ce(u=>u?.source==="pointer"?null:u),onKeyDown:ni,onFocus:oi,onBlur:ri}:{},Xt={scaleX:ne,scaleYPrimary:he,scaleYSecondary:fe,plotX0:X,plotX1:re,plotY0:U,plotY1:q,uid:K,labels:Ue},ai=W&&g?D0(g,Xt):()=>!1,Fn=`plot-layer-clip-${K}`;if(me<=0||Te<=0)return a.jsx("svg",{width:Math.max(0,ue),height:Math.max(0,G),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:a.jsx("title",{children:"Chart too small to render"})});const rr=a.jsxs("svg",{width:ue,height:G,role:vt.length>0||D?"group":"img","aria-label":Ka,"aria-describedby":D?`${K}-crosshair-hint`:void 0,...si,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...D?{touchAction:"pan-y",outline:Ze?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[g&&g.length>0&&a.jsx("defs",{children:a.jsx("clipPath",{id:Fn,children:a.jsx("rect",{x:X,y:U,width:me,height:Te})})}),Tn.length>0&&a.jsx("title",{children:Tn.join("; ")}),a.jsx("rect",{x:X,y:U,width:me,height:Te,fill:"var(--color-surface-panel)"}),g&&g.length>0&&a.jsx("g",{clipPath:`url(#${Fn})`,children:a.jsx(Kn,{layers:g,frame:Xt,pass:"background"})}),!w&&Bt.map((u,y)=>{const b=he(u);return a.jsxs(Yt.Fragment,{children:[a.jsx("line",{x1:X,y1:b,x2:re,y2:b,stroke:"var(--color-border-subtle)",strokeWidth:1}),Ua.has(y)&&a.jsx("text",{x:X-4,y:b,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,Bt)})]},`py-${y}`)}),!w&&Wt.map((u,y)=>Ya.has(y)?a.jsx("text",{x:re+4,y:fe(u),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,Wt)},`sy-${y}`):null),!h&&!w&&xt.map((u,y)=>a.jsx("line",{x1:ne(u),y1:U,x2:ne(u),y2:q,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${y}`)),!h&&!w&&Xa.map((u,y)=>a.jsx("text",{x:u.x,y:q+14,textAnchor:u.anchor,fill:"var(--color-text-faint)",fontSize:11,children:u.text},`xl-${y}`)),Xo&&a.jsx("text",{x:(X+re)/2,y:G-Pn-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:Qn(I,me)}),Uo&&a.jsx("text",{x:qe/2,y:(U+q)/2,transform:`rotate(-90 ${qe/2} ${(U+q)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:Qn(E,Te)}),Yo&&a.jsx("text",{x:Ko,y:(U+q)/2,transform:`rotate(90 ${Ko} ${(U+q)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:Qn(C,Te)}),W&&bg(X,re,U,q,m).filter(u=>!ai(u.x,u.y)).map(u=>a.jsx("circle",{cx:u.x,cy:u.y,r:1,fill:"var(--color-text-faint)",opacity:.35},u.key)),!w&&a.jsxs(a.Fragment,{children:[a.jsx("line",{x1:X,y1:U,x2:X,y2:q,stroke:"var(--color-border-strong)",strokeWidth:1}),a.jsx("line",{x1:X,y1:q,x2:re,y2:q,stroke:"var(--color-border-strong)",strokeWidth:1}),Me&&a.jsx("line",{x1:re,y1:U,x2:re,y2:q,stroke:"var(--color-border-strong)",strokeWidth:1})]}),Oe.filter(u=>u.kind==="band").map(u=>a.jsx("path",{d:u.d,fill:u.color,fillOpacity:u.opacity,stroke:"none"},u.id)),Oe.filter(u=>u.kind==="stroked").flatMap(u=>u.uncertainty.map((y,b)=>a.jsx("path",{d:y.d,"data-band-kind":y.kind,fill:u.color,fillOpacity:Rg,stroke:y.kind==="bound"?u.color:"none",strokeOpacity:y.kind==="bound"?Lg:void 0,strokeWidth:y.kind==="bound"?1:void 0},`${u.id}-band-${b}`))),Oe.filter(u=>u.kind==="stroked").flatMap(u=>u.segments.map((y,b)=>a.jsxs(Yt.Fragment,{children:[Q&&y.basis===void 0&&ss(y.d,q)&&a.jsx("path",{d:ss(y.d,q)??void 0,fill:u.color,fillOpacity:.12,stroke:"none"}),a.jsx("path",{d:y.d,"data-stream-status":y.status,"data-reckoning-basis":y.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:y.basis!==void 0?ls:void 0,strokeDasharray:y.basis!==void 0?cs:u.dashed?"4 3":void 0})]},`${u.id}-${b}`))),Oe.filter(u=>u.kind==="stroked").flatMap(u=>u.modelled.map((y,b)=>a.jsx("path",{d:y.d,"data-reckoning-basis":y.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:ls,strokeDasharray:cs},`${u.id}-modelled-${b}`))),Oe.map(u=>u.kind==="stroked"&&u.tail!==null?a.jsx(Aa,{kind:"modelled",x:u.tail.cx,y:u.tail.cy},`${u.id}-tail`):null),Oe.filter(u=>u.kind==="stroked").flatMap(u=>u.observed.map((y,b)=>a.jsx("circle",{cx:y.cx,cy:y.cy,r:dg,fill:u.color,"data-observed-sample":""},`${u.id}-observed-${b}`))),Oe.filter(u=>u.kind==="scatter").flatMap(u=>u.points.map((y,b)=>a.jsx("circle",{cx:y.cx,cy:y.cy,r:Mg,fill:u.color},`${u.id}-${b}`))),e.map(u=>{if(!u.headMark)return null;const y=u.axis==="primary"?he:fe;let b=u.data.x.length-1;for(;b>=0&&!(Number.isFinite(u.data.x[b])&&Number.isFinite(u.data.y[b]));)b-=1;return b<0?null:a.jsx("circle",{cx:ne(u.data.x[b]),cy:y(u.data.y[b]),r:cg,fill:u.headMark==="dot"?u.color:"var(--color-surface-panel)",stroke:u.color,strokeWidth:u.headMark==="dot"?0:1.5,"data-head-mark":u.headMark},`${u.id}-head`)}),g&&g.length>0&&a.jsx("g",{clipPath:`url(#${Fn})`,children:a.jsx(Kn,{layers:g,frame:Xt,pass:"foreground"})}),Ye.map(u=>a.jsxs(Yt.Fragment,{children:[a.jsx("line",{x1:X,y1:u.y,x2:Q&&u.kind==="marker"?X+24:re,y2:u.y,stroke:u.tone.line,strokeWidth:1,strokeDasharray:u.dashed?"4 3":void 0,"data-threshold-kind":u.kind,"data-threshold-passed":u.passed||void 0}),Q&&u.kind==="marker"&&u.label&&a.jsx("text",{x:X+28,y:u.y+3.5,fill:u.tone.label,fontSize:10,children:u.label}),!(Q&&u.kind==="marker")&&u.label&&tt.get(u.id)&&a.jsxs("text",{x:tt.get(u.id)?.x,y:tt.get(u.id)?.y,textAnchor:tt.get(u.id)?.anchor,fill:u.tone.label,fontSize:10,children:[u.label,u.currency.held&&a.jsx(so,{size:10,kind:u.currency.mark??"held"})]})]},u.id)),vt.map(u=>a.jsx(Dp,{x:u.x,y:u.y,size:ze,color:u.color,text:u.text},u.key)),T!=="none"&&e.map((u,y)=>{const b=Ce?Cn.positions[y]:void 0,P=b?G-Pn+2+b.row*je:Ga+y*je;if(!Ce&&P+13>q)return null;const L=b?nn+b.x:ee?ee.x0:X+3,O=Ce?ue-2*nn:ee?ee.x1-ee.x0:me-6,A=St(u.label,O),z=Math.max(1,Math.floor((A-8)/6)),Y=u.label.length>z?`${u.label.slice(0,Math.max(1,z-1))}...`:u.label;return a.jsxs(Yt.Fragment,{children:[a.jsx("rect",{x:L,y:P,width:A,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),a.jsx("text",{x:L+3,y:P+10,fill:u.color,fontSize:10,children:Y})]},u.id)}),g&&g.length>0&&Ue&&a.jsx(Kn,{layers:g,frame:Xt,pass:"caption"}),nt!==null&&Ge!==null&&a.jsx(wp,{x:ne(Ge),plot:{x0:X,y0:U,x1:re,y1:q},heading:nt.heading,rows:nt.rows,avoid:Zo,traces:nr})]}),sr=$e?a.jsx("div",{ref:Ae,"data-plot-card":"",style:{position:"absolute",left:le?.x0??0,top:le?.y0??0,visibility:le&&!Ja?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof M=="function"?M({width:me-rs*2,height:Te-rs*2,form:te}):M}):null;return D?a.jsxs(a.Fragment,{children:[rr,sr,a.jsx(De,{id:`${K}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),a.jsx(De,{role:"status","aria-live":"polite",children:Be})]}):a.jsxs(a.Fragment,{children:[rr,sr]})}function ds(e,t,n,o=[]){if(t)return t;if(e.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let r=[...e.flatMap(Tg),...o];return n==="log"&&(r=r.filter(s=>s>0)),r.length===0?n==="log"?[1,10]:[0,1]:[Math.min(...r),Math.max(...r)]}function Fg(e){if(e===0)return"0";if(Math.abs(e)>=1e6)return`${(e/1e6).toFixed(1)}M`;if(Math.abs(e)>=1e3)return`${(e/1e3).toFixed(1)}k`;if(Number.isInteger(e))return String(e);if(Math.abs(e)<.01){const t=Math.floor(Math.log10(Math.abs(e))),n=e/10**t;return Math.abs(n-1)<1e-9?`1e${t}`:`${n.toFixed(1)}e${t}`}return e.toFixed(2)}const zg=p.createContext(null);function Dg(e,t){const n=p.useContext(zg),o=n?.setFooter,r=n?.setDirty;p.useEffect(()=>(o?.(e),()=>o?.(null)),[o,e]),p.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function Px(e){const{onSave:t,value:n,saved:o,saveLabel:r="Save",extra:s,disabled:i}=e,l=p.useRef(null);l.current===null&&(l.current={v:n});const c=!ct(n,l.current.v)&&!ct(n,o),d=p.useRef(t);d.current=t;const h=p.useMemo(()=>a.jsxs(a.Fragment,{children:[s,a.jsx(Ji,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:i,children:r})]}),[s,i,r]);Dg(h,c)}export{De as $,Bm as A,cn as B,Rm as C,Sm as D,tm as E,ul as F,hm as G,Qm as H,dl as I,fm as J,Om as K,km as L,Im as M,Pm as N,Tm as O,_x as P,Cm as Q,Ym as R,Gm as S,_m as T,$a as U,im as V,$m as W,xd as X,Nm as Y,nm as Z,lm as _,Xm as a,Xs as a$,ct as a0,em as a1,O0 as a2,bn as a3,Dg as a4,Px as a5,Ax as a6,_n as a7,Ti as a8,zg as a9,mm as aA,so as aB,ox as aC,rx as aD,sx as aE,xm as aF,Is as aG,bm as aH,wx as aI,wp as aJ,oe as aK,lx as aL,Ss as aM,Aa as aN,Vm as aO,qm as aP,Zs as aQ,kh as aR,ex as aS,ym as aT,ax as aU,be as aV,Vp as aW,Wu as aX,kr as aY,Co as aZ,ea as a_,pa as aa,ln as ab,yn as ac,Pe as ad,xo as ae,Ke as af,Cs as ag,Um as ah,dx as ai,Dm as aj,Mu as ak,sh as al,$t as am,Em as an,eh as ao,_o as ap,hx as aq,fx as ar,$x as as,yx as at,Oh as au,Mx as av,tx as aw,nx as ax,gm as ay,Kd as az,Wm as b,ux as b0,Us as b1,Po as b2,ta as b3,Pu as b4,gl as b5,dm as b6,wo as b7,cm as b8,As as b9,cx as bA,gx as bB,zu as bC,Cd as bD,Yi as bE,Qi as bF,vn as bG,ix as bH,px as bI,ll as bJ,br as bK,oa as bL,mx as bM,jx as ba,Tr as bb,Zp as bc,Ex as bd,bx as be,Ap as bf,um as bg,bp as bh,Sx as bi,Mn as bj,Pp as bk,xx as bl,Ys as bm,no as bn,Wd as bo,Tu as bp,Ro as bq,kx as br,vx as bs,fa as bt,nf as bu,zt as bv,Gu as bw,ko as bx,ml as by,Cx as bz,wm as c,vm as d,Ji as e,zm as f,Hm as g,Fm as h,md as i,om as j,Am as k,sm as l,hl as m,rm as n,yh as o,am as p,Eh as q,Jm as r,Zm as s,Mm as t,jm as u,Km as v,Lm as w,pm as x,fl as y,vd as z};
