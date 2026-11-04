import{j as a}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import w,{css as F,createGlobalStyle as Ri,keyframes as Ms}from"./ext-styled-components-DAuodqsN.js";import{r as p,R as Zt}from"./ext-react-C0MU9AHG.js";import{h as Ss,l as Ii}from"./logger-2_QM1wvD.js";import{cF as Pt,cK as un,aY as Ue,b6 as js,l as Ti,ch as nt,aM as Qt,cl as Es}from"./view-clock-formula-H3UnNGJv.js";import"./ksp-enum-names-B0kQINNW.js";import{G as vo,z as Ci}from"./screen-BzCjTZ14.js";import{m as ao,l as As,k as ae,T as ke,w as bt,a1 as bo,N as hn,V as Oe,a2 as Pi,n as Li,O as yo,a3 as wo,a4 as Ni,a5 as Oi,a6 as Fi,a7 as Rs,a8 as Di,E as hr,a9 as zi,aa as Hi,ab as Bi,ac as Wi,ad as Xi,Z as mt,ae as Ui,af as Gi,I as Yi,i as Is,_ as qi,j as Ft,J as Ts,ag as Vi,S as Cs,ah as Ps,Q as fr,A as Jt,f as pr,ai as gr,s as Wn,aj as Ki,ak as Zi}from"./contributionsRead-CO2DtfFj.js";import{I as Qi}from"./index-CnQcA3L4.js";import"./lagrange-DUdKWxL7.js";import{R as Ji}from"./use-transmissions-BPmP7LBf.js";import{gridToPixels as el}from"./ext-ui-kit-grid-CYQFMmYG.js";import{r as tl}from"./ext-react-dom-DCF8ZnaJ.js";const Bm={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function Wm({children:e,layout:t="inline",...n}){return a.jsx(ol,{$layout:t,...n,children:e})}const nl={inline:F``,fill:F`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},ol=w.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>nl[e]}
`,ot=F`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Wt=F`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,rl="data-restoring-focus",sl=120,al=48,il=120,mr=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function Xt(e){return Ls(e,"below")}function Ls(e,t){const[n,o]=p.useState(null),[r,s]=p.useState(!1),[i,l]=p.useState(!1),[c,d]=p.useState(!1),[h,f]=p.useState(!1),[m,x]=p.useState(!1),g=p.useRef(null),v=p.useRef(null),k=p.useRef(!1),E=p.useRef(!1),S=p.useRef(null),P=e!=null&&e!==""?e:null,j=n!==null&&(r||i||c||h||m),R=p.useCallback(()=>{S.current!==null&&clearTimeout(S.current),S.current=null},[]),_=p.useCallback(()=>{R(),o(null),s(!1),l(!1),d(!1),f(!1),x(!1),k.current=!1},[R]);p.useEffect(()=>{if(!h)return;const L=()=>{const G=document.getSelection(),N=G!==null&&!G.isCollapsed&&v.current?.contains(G.anchorNode)===!0;!k.current&&!N&&f(!1)},W=()=>{k.current=!1,L()};return document.addEventListener("pointerup",W),document.addEventListener("selectionchange",L),()=>{document.removeEventListener("pointerup",W),document.removeEventListener("selectionchange",L)}},[h]),p.useEffect(()=>{if(!m)return;const L=W=>{const G=W.target;G instanceof Node&&(g.current?.contains(G)||v.current?.contains(G)||_())};return document.addEventListener("pointerdown",L,!0),()=>document.removeEventListener("pointerdown",L,!0)},[m,_]);const C=p.useCallback(()=>{R(),S.current=setTimeout(()=>{S.current=null,s(!1),d(!1)},il)},[R]);if(p.useEffect(()=>R,[R]),p.useEffect(()=>{if(n!==null)return window.addEventListener("scroll",_,!0),window.addEventListener("resize",_),()=>{window.removeEventListener("scroll",_,!0),window.removeEventListener("resize",_)}},[n,_]),p.useEffect(()=>{if(!j||P===null)return;const L=W=>{W.key==="Escape"&&(W.stopPropagation(),_())};return document.addEventListener("keydown",L,!0),()=>document.removeEventListener("keydown",L,!0)},[j,P,_]),P===null)return{anchor:{},tip:null};const $=L=>{const W=L.getBoundingClientRect();o({top:W.bottom,left:W.left,above:t==="above"?W.top>=al:window.innerHeight-W.bottom<sl,anchorTop:W.top})};return{anchor:{"data-tooltip":P,onPointerEnter:L=>{L.pointerType!=="touch"&&(R(),$(L.currentTarget),s(!0))},onPointerLeave:C,onPointerDown:L=>{E.current=!0,L.pointerType!=="touch"&&_()},onPointerUp:L=>{if(E.current=!1,L.pointerType==="touch"){if(m){_();return}g.current=L.currentTarget,$(L.currentTarget),x(!0)}},onFocus:L=>{E.current||document.documentElement.hasAttribute(rl)||($(L.currentTarget),l(!0))},onBlur:()=>{l(!1),!r&&!c&&!m&&o(null)}},tip:j?tl.createPortal(a.jsx(ll,{ref:v,at:n,text:P,onPress:()=>{k.current=!0,f(!0)},onPointerEnter:()=>{R(),d(!0)},onPointerLeave:C}),document.body):null}}const ll=p.forwardRef(function({at:t,text:n,onPress:o,onPointerEnter:r,onPointerLeave:s},i){const l=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return a.jsx(dl,{ref:i,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),o()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...l,left:t.left,"--tip-left":`${t.left}px`},children:n})});function ct(e,t){return(...n)=>{typeof e=="function"&&e(...n),t?.(...n)}}function Se({text:e,children:t,focusable:n=!1,announce:o=!0,placement:r="below"}){const{anchor:s,tip:i}=Ls(e,r);if(e==null||e==="")return a.jsx(a.Fragment,{children:t});const l=t.props,c=l["aria-label"],d=!o||typeof c=="string"&&mr(c).includes(mr(e));return a.jsxs(a.Fragment,{children:[p.cloneElement(t,{"data-tooltip":e,onPointerEnter:ct(l.onPointerEnter,s.onPointerEnter),onPointerLeave:ct(l.onPointerLeave,s.onPointerLeave),onPointerDown:ct(l.onPointerDown,s.onPointerDown),onPointerUp:ct(l.onPointerUp,s.onPointerUp),onFocus:ct(l.onFocus,s.onFocus),onBlur:ct(l.onBlur,s.onBlur),"aria-description":d?l["aria-description"]:e,tabIndex:n?l.tabIndex??0:l.tabIndex}),i,n&&a.jsx(cl,{})]})}const cl=Ri`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,dl=w.div`
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
`;function Ns(e){let t="";return p.Children.forEach(e,n=>{if(typeof n=="string"||typeof n=="number"){t+=String(n);return}p.isValidElement(n)&&(t+=Ns(n.props.children))}),t.replace(/\s+/g," ").trim()}function Os({label:e,children:t,disabledReason:n}){return ul({label:e,children:t,disabledReason:n})}function ul({label:e,children:t,disabledReason:n}){const o=e!==void 0&&e!==""&&e!==Ns(t)?e:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function Fs(e,t){return e===!0&&t!==void 0&&t!==""}function Ds(e){e.preventDefault(),e.stopPropagation()}function zs(e,t,n){return t===null||e.props["data-tooltip"]!==void 0?e:a.jsx(Se,{text:t,announce:n,children:e})}const ko="max(0.075em, 1.25px)",re={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},Ye=w.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,io=re.held.domSize,lo=re.modelled.domSize,hl=F`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${io} + 0.14em);
  }
`,fl=F`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${lo} + 0.14em);
  }
`;function pl(e){return F`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${re[e].hollowDomSize} + 0.14em);
    }
  `}function Hs(e,t=!1){return t?pl(e):e==="current"?null:e==="modelled"?fl:hl}const gl=w.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${io};
  height: ${io};
  background: ${re.held.color};
`,ml=w.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${lo};
  height: ${lo};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${re.modelled.color};
`,$o=e=>F`
  position: absolute;
  right: 0;
  top: 0;
  width: ${re[e].hollowDomSize};
  height: ${re[e].hollowDomSize};
`,xl=w.span`
  ${$o("current")}
  border: ${ko} solid ${re.current.color};
  border-radius: var(--radius-circle);
`,vl=w.span`
  ${$o("held")}
  border: ${ko} solid ${re.held.color};
`,bl=w.span`
  ${$o("modelled")}
  --stroke: ${ko};
  background: ${re.modelled.color};
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
`,yl={current:xl,held:vl,modelled:bl};function Bs({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?yl[e]:e==="modelled"?ml:gl;return a.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const wl=w.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>Hs(e??"held",t)}
`;function co({caption:e,kind:t="held",elsewhere:n=!1,children:o,...r}){const{anchor:s,tip:i}=Xt(e);return a.jsxs(wl,{$kind:t,$elsewhere:n,...r,...s,children:[o,a.jsx(Bs,{kind:t,elsewhere:n}),e!==null&&a.jsxs(Ye,{"data-unit-currency":"",children:[", ",e]}),i]})}const kl=p.forwardRef(function({variant:t="default",tone:n,size:o="md",pressed:r,predictedOutcome:s,disabledReason:i,marked:l,type:c="button",...d},h){const f=Fs(d.disabled,i),m=Os({label:d["aria-label"],children:d.children,disabledReason:f?i:void 0}),{disabled:x,onClick:g,children:v,...k}=d;return zs(a.jsx(Il,{ref:h,$variant:t,$tone:n??(t==="primary"?"go":"neutral"),$size:o,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,"data-held-button":l?"":void 0,...k,disabled:f?void 0:x,...f?{"aria-disabled":!0}:{},onClick:f?Ds:g,type:c,children:l?a.jsx($l,{kind:l.kind,caption:l.caption,children:v}):v}),m,f)}),$l=w(co)`
  position: static;

  &::after {
    content: none;
  }

  & > [data-held-mark] {
    top: 3px;
    right: 3px;
  }
`;function _l(e){return e==="neutral"?"go":e}const _o=e=>F`
  background: ${ao[e]};
  border-color: ${ao[e]};
  color: ${As[e]};
`,Ml=e=>F`
  border-color: ${ae[e]};
  color: ${ke[e]};
`,xr={default:F`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:F`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},Sl=F`
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
`,jl=F`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function El(e,t){return e==="text"?Sl:e==="primary"?_o(t):t==="neutral"?xr[e]:F`
    ${xr[e]}
    ${Ml(t)}
  `}const Al=F`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,Rl={sm:F`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:F`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},Il=w.button`
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

  ${({$size:e})=>Rl[e]}
  ${({$variant:e,$tone:t})=>El(e,t)}
  ${({$pressed:e,$tone:t})=>e?_o(_l(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":Al}
  ${ot}
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

  ${({$variant:e})=>e==="text"?jl:""}
`,Xm=w.button`
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
  ${ot}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Tl=w.button`
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
    ${_o("go")}
  }
  ${ot}
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
`,Cl=p.forwardRef(function({pressed:t,disabledReason:n,...o},r){const s=Fs(o.disabled,n),i=Os({label:o["aria-label"],children:o.children,disabledReason:s?n:void 0}),{disabled:l,onClick:c,...d}=o;return zs(a.jsx(Tl,{ref:r,"aria-pressed":t,...d,disabled:s?void 0:l,...s?{"aria-disabled":!0}:{},onClick:s?Ds:c}),i,s)}),Um=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,Pl=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,Gm=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,Ll=w.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Ym=w.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,qm=w.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,Mo=F`
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

  ${ot}

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
`,Nl=w.input`
  ${Mo}
  width: 100%;
`,Vm=w.select`
  ${Mo}
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
`,Km=w.textarea`
  ${Mo}
  width: 100%;
  resize: vertical;
`;function Ol(e){if(e===void 0)return null;const{value:t}=bo(e.magnitude,e.unit);return t===hn?null:t}function Ws(e,t){const n=Ol(t);return n===null?e:`${e}, as of ${n}`}const So="modelled to SCET";function Fl(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function vr(e){return un(e.value)||Pt(e.value)?{shown:e.value,held:!1,mark:null,isStatic:un(e.value),isDeterministic:Pt(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:Ws(bt(e.grade),e.asOfUt)}}function $n(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:un(e),isDeterministic:Pt(e),caption:null,band:null};const n=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!Pt(e.value)){const o=e.reckoning.modelled;if(e.state==="held"){const s=vr(e),i=e.value===void 0,l=s.held||i,c=s.caption??(i?"":null);return{...s,shown:o,held:l,mark:l?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:n}}const r=e.reckoning.beyondReceived;return{shown:o,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?So:null,band:n}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:un(e.value),isDeterministic:Pt(e.value),caption:null,band:n}:e.state==="held"?{...vr(e),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Xs(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function Dl(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:So}:null;if(e.state==="held"){const n=Ws(bt(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function Zm(e){return e===void 0?null:typeof e!="string"?Dl(e):{kind:"held",caption:bt(e)}}function jo(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function Qm(e,t){const n=jo(t);return n===void 0?e:{state:"held",value:e,grade:n,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}function Eo(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function Jm(e={}){return Eo(t=>Oe(t,e))}const zl=.01;function ex({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const r=Math.abs(t(n)-t(o));return(e?Math.min(r,1-r):r)<=zl}}}function Us(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(r=>!n.readsAsOne(e,r))}function Ao({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,r=v=>Pi(typeof v=="number"?v:v.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,i=Fl(s);if(s?.value!==void 0&&i!==void 0)return Us(s.value,i,Eo(r))?a.jsx(co,{"data-held":"",kind:"modelled",caption:`${So}, last received ${r(s.value)}`,children:r(i)}):a.jsx(a.Fragment,{children:r(s.value)});const l=$n(o,{drawsReckoning:!0}),{shown:c,held:d,mark:h,caption:f}=l,m=typeof e=="number"?e:c;if(m==null)return hn;const x=r(m),g=Xs({...l,shown:m});return d?a.jsx(co,{...g,kind:h??"held",caption:f,children:x}):a.jsx("span",{"data-figure":g["data-figure"],children:x})}const br={left:!1,right:!1};function Hl(e){const[t,n]=p.useState(br),o=p.useRef(br);return p.useEffect(()=>{if(!e)return;const r=()=>{const l=e.scrollLeft>1,c=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===l&&o.current.right===c||(o.current={left:l,right:c},n(o.current))};r(),e.addEventListener("scroll",r,{passive:!0});const s=typeof ResizeObserver>"u"?null:new ResizeObserver(r);s?.observe(e);for(const l of Array.from(e.children))s?.observe(l);const i=new MutationObserver(()=>{for(const l of Array.from(e.children))s?.observe(l);r()});return i.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",r),s?.disconnect(),i.disconnect()}},[e]),t}const yr=w.div`
  position: absolute;
  top: 0;
  bottom: 0;
  ${({$position:e})=>e==="left"?"left: 0;":"right: 0;"}
  width: max(28px, var(--bleed-inline));
  pointer-events: none;
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity var(--duration-base) var(--ease-standard);
  background: linear-gradient(
    to ${({$position:e})=>e==="left"?"right":"left"},
    rgba(255, 255, 255, 0.12),
    rgba(255, 255, 255, 0) 100%
  );

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function _n(e){const t=p.useRef(null),[n,o]=p.useState(e),[r,s]=p.useState(null);return p.useEffect(()=>{t.current!==r&&s(t.current)}),p.useEffect(()=>{if(!r||typeof ResizeObserver>"u")return;const i=new ResizeObserver(l=>{for(const c of l)c.contentRect.width>0&&c.contentRect.height>0&&o({w:Math.floor(c.contentRect.width),h:Math.floor(c.contentRect.height)})});return i.observe(r),()=>i.disconnect()},[r]),{ref:t,size:n}}const Bl='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Gs(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),r=n[o+1]??n[o-1];if(r&&r!==e){r.focus();return}const s=t.closest("[data-panel-rail-frame]"),i=s?s.parentElement?.querySelector("[data-panel-body]"):t.closest("[data-panel-body]");if(!i)return;const l=[...i.querySelectorAll(Bl)].find(c=>c!==e);if(l){l.focus();return}i.hasAttribute("tabindex")||i.setAttribute("tabindex","-1"),i.focus()}const Dt=700;function Ro(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const Mn={"in-transit":1/6,"awaiting-reply":1/2,due:2/3,overdue:2/3,lost:2/3};function Ys(e){const t=e.reachEtaSeconds;if(e.hold&&t!==null&&t>0)return Wl(e.hold);const n=qs(e);if(t===null||n===null)return Mn[e.predictedPhase];const o=n-t,r=e.replyEtaSeconds===null?1/3:2/3;return Math.max(0,Math.min(r,o/(3*n)))}function wr(e){const t=qs(e);return t===null?0:Math.max(0,(1-Ys(e))*3*t)}function Wl(e){return Math.max(0,Math.min(1,e.outbound))/3}function qs(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function Vs(e){return Xl(e).map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:t.settling==="confirmed"?1:Ys(t),glyph:t.glyph??Ro(t.label||t.command),...t.held?{held:!0}:{},...t.settling?{settling:t.settling,settleSeconds:t.settleSeconds??0}:{},...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function Xl(e){return e.some(t=>t.dispatchedAt!==void 0)?e.map((t,n)=>({item:t,index:n})).sort((t,n)=>(t.item.dispatchedAt??Number.NEGATIVE_INFINITY)-(n.item.dispatchedAt??Number.NEGATIVE_INFINITY)||t.index-n.index).map(({item:t})=>t):e}function tx({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||vo(e)!=="shown"?"none":n||Ci({oneWaySeconds:Ue("s",e)})==="live"?"badge":t?"strip":"none"}const Ul={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},zt={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Gl(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Ul[e.phase]}const Sn=new Set(["overdue","lost"]),Yl=180,ql=96;function Ks(e){return Oe(Ue("s",Math.max(0,e)))}function Vl(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const Kl=1;function Io(e){const t=Qi(),n=p.useRef(t);n.current=t;const[o,r]=p.useState(e),s=p.useRef({eta:e,ut:Xn(t)});return p.useEffect(()=>{const i=s.current.eta;(i===null!=(e===null)||i!==null&&e!==null&&Math.abs(e-i)>=Kl)&&(s.current={eta:e,ut:Xn(n.current)},r(e))},[e]),p.useEffect(()=>{const i=setInterval(()=>{const{eta:l,ut:c}=s.current;if(l===null)return;const d=Xn(n.current);if(d!==void 0){if(c===void 0){s.current={eta:l,ut:d};return}r(Math.max(0,l-(d-c)))}},1e3);return()=>clearInterval(i)},[]),o}function Xn(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function Zl({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":r="In-flight commands",variant:s="inline",onDismiss:i}){const{ref:l,size:c}=_n({w:320,h:0}),d=s==="rail"||s==="expanded"?e:e.filter(f=>!f.settling);if(s==="rail")return d.length===0?null:a.jsx(Ql,{items:d,"aria-label":r});if(s==="expanded")return d.length===0?null:a.jsx(cc,{items:d,"aria-label":r,onDismiss:i});const h=n!=="auto"?n:c.w>=Yl?"full":c.w>=ql?"compact":"badge";return d.length===0?null:h==="badge"?a.jsx(Jl,{ref:l,items:d,mode:t,"aria-label":r}):a.jsx(ea,{ref:l,role:"list","aria-label":r,"data-mode":t,"data-density":h,$row:o==="row",children:d.map(f=>a.jsx(ec,{item:f,$compact:h==="compact"},f.id))})}const Ge=8,Zs=1/3;function Ql({items:e,"aria-label":t}){const n=e.filter(o=>!o.settling);return a.jsx(tc,{role:"img","aria-label":`${t}: ${n.length} in flight`,children:e.map(o=>{const r=Math.max(0,Math.min(1,o.progress??Mn[o.phase]));return a.jsx(Js,{...o.settling?{"data-role":"settling","data-settling":o.settling}:{"data-role":"glow","data-phase":o.phase,...o.held?{"data-held":""}:{}},$settling:o.settling,style:{"--dot-colour":Qs(o),"--dot-progress":r,"--settle-seconds":o.settleSeconds??0}},o.id)})})}const Jl=function({ref:t,items:n,mode:o,"aria-label":r}){const s=Io(Vl(n)),i=n.some(c=>Sn.has(c.phase)),l=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${Ks(s)}`;return a.jsx(Se,{text:n.map(c=>c.label).join(`
`),focusable:!0,children:a.jsx(ea,{ref:t,role:"group","aria-label":`${r}: ${l}`,"data-mode":o,"data-density":"badge",$row:!1,children:a.jsxs(ta,{$phase:i?"overdue":"in-transit",children:[a.jsx(na,{"aria-hidden":"true",$pulse:!i,children:"↑"}),a.jsxs(oa,{children:[n.length,s!==null&&a.jsxs(a.Fragment,{children:[" · ",a.jsx(Ao,{value:Math.max(0,s)})]})]})]})})})};function ec({item:e,$compact:t}){const n=Io(e.etaSeconds),o=Sn.has(e.phase),r=n===null?`${e.label}, ${zt[e.phase]}`:`${e.label}, ${Ks(n)}`;return a.jsxs(ta,{$phase:e.phase,role:"listitem",...t?{"aria-label":r,title:r}:{},children:[a.jsx(na,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Gl(e)}),!t&&a.jsx(xc,{children:e.label}),a.jsx(oa,{children:n===null?zt[e.phase]:a.jsx(Ao,{value:Math.max(0,n)})})]})}const fn=Ms`
  from { opacity: 1; }
  to { opacity: 0; }
`,tc=w.div`
  position: relative;
  display: block;
  width: 100%;
  height: 16px;
  /* Clips the part of each dot above the strip, whatever box holds it. */
  overflow: hidden;
`,nc=14;function oc(e,t,n){const o=Math.min(nc,(n-Ge)/Math.max(1,t)),r=Math.ceil(e/2)*(e%2===1?1:-1),s=n/2+r*o;return Math.max(0,Math.min(n-Ge,s-Ge/2))}function kr({items:e,height:t}){return a.jsx(ac,{role:"group","aria-label":"Commands on the rail",style:{height:t},children:e.map((n,o)=>{const r=Math.max(0,Math.min(1,n.progress??Mn[n.phase]));return a.jsx(Se,{text:n.settling?null:`${n.label}, ${zt[n.phase]}`,announce:!1,focusable:!n.settling,children:a.jsx(Js,{...n.settling?{"data-role":"settling","data-settling":n.settling,"aria-hidden":!0}:{role:"img","aria-label":`${n.label}, ${zt[n.phase]}`,"data-role":"glow","data-phase":n.phase,...n.held?{"data-held":""}:{}},"data-lane":o,$settling:n.settling,$lane:!0,style:{"--dot-colour":Qs(n),"--dot-progress":r,"--settle-seconds":n.settleSeconds??0,"--lane-top":`${oc(o,e.length,t)}px`}})},n.id)})})}function Qs(e){return e.settling==="confirmed"?"var(--color-accent-fg)":e.held||e.settling==="failed"||Sn.has(e.phase)?ae.warn:"var(--color-accent-fg)"}const rc=e=>e==="confirmed"?F`
        transition: left var(--settle-time) var(--ease-linear);
        animation: ${fn} ${Dt}ms var(--ease-standard) var(--settle-time) forwards;
      `:e==="failed"?F`
          animation: ${fn} ${Dt}ms var(--ease-standard) forwards;
        `:null,sc=Ms`
  from { top: ${-Ge*(1-Zs)}px; }
  to { top: var(--lane-top); }
`,ac=w.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,Js=w.span`
  position: absolute;
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  top: ${-Ge*(1-Zs)}px;
  /* The dot's own width is kept inside the strip, so it is whole at both ends. */
  left: calc((100% - ${Ge}px) * var(--dot-progress));
  width: ${Ge}px;
  height: ${Ge}px;
  border-radius: var(--radius-circle);
  background: var(--dot-colour);
  box-shadow:
    0 0 6px 2px color-mix(in srgb, var(--dot-colour) 60%, transparent),
    0 0 14px 4px color-mix(in srgb, var(--dot-colour) 25%, transparent);

  ${({$lane:e,$settling:t})=>e&&F`
      top: var(--lane-top);
      /* A hover target a little larger than the dot, so its name is easy to find. */
      pointer-events: ${t?"none":"auto"};
      &::before {
        content: "";
        position: absolute;
        inset: -4px;
      }
    `}

  @media (prefers-reduced-motion: no-preference) {
    transition: left var(--duration-slow) var(--ease-linear);
    ${({$settling:e})=>rc(e)}
    ${({$lane:e,$settling:t})=>e&&!t&&F`
        animation: ${sc} var(--duration-base) var(--ease-entrance);
      `}
  }
`,ic=54,Lt=5,lc=3,To=ic-8-Lt,pn=60,$r={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:ae.warn,lost:ae.warn};function cc({items:e,"aria-label":t,onDismiss:n}){const[o,r]=p.useState(null),s=Hl(o),i=s.left||s.right;return a.jsxs(uc,{"data-command-list":"",children:[a.jsx(hc,{ref:r,role:"list","aria-label":t,...i?{tabIndex:0,"data-scrolls":""}:{},children:e.map(l=>a.jsx(dc,{item:l,onDismiss:n},l.id))}),a.jsx(yr,{$position:"left",$visible:s.left}),a.jsx(yr,{$position:"right",$visible:s.right})]})}function dc({item:e,onDismiss:t}){const n=e.glyph??Ro(e.label),o=e.settling==="confirmed"?$r["awaiting-reply"]:e.held||e.settling==="failed"?ae.warn:$r[e.phase],r=Math.max(0,Math.min(1,(e.progress??Mn[e.phase])*1.5)),s=Sn.has(e.phase)&&!!t&&!e.settling,i=`${e.label}, ${zt[e.phase]}`;return a.jsxs(fc,{role:"listitem","aria-label":i,...e.settling?{"data-settling":e.settling,"aria-hidden":!0}:{"data-phase":e.phase,...e.held?{"data-held":""}:{}},$settling:e.settling,style:{color:o,"--settle-seconds":e.settleSeconds??0},children:[a.jsx(Se,{text:s?`Dismiss ${e.label}`:i,announce:!1,children:a.jsxs(pc,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:l=>{Gs(l.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[a.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&a.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),a.jsx(gc,{children:a.jsx("span",{className:"fill",style:{"--fill-ratio":r}})})]})}const uc=w.div.attrs({role:"group"})`
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
    ${To}px + ${Lt}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
  /* Holds the overflow glows over the row's edges. */
  position: relative;
`,hc=w.div`
  display: flex;
  flex-direction: row;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${lc}px;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  /* Native scrollbar hidden: the edge glows show scroll state. */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${Wt}
`,fc=w.div`
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @media (prefers-reduced-motion: no-preference) {
    ${({$settling:e})=>e==="confirmed"?F`
            animation: ${fn} ${Dt}ms var(--ease-standard)
              var(--settle-time) forwards;
            .fill {
              transition:
                height var(--settle-time) var(--ease-linear),
                width var(--settle-time) var(--ease-linear);
            }
          `:e==="failed"?F`
              animation: ${fn} ${Dt}ms var(--ease-standard) forwards;
            `:null}
  }

  @container (min-width: ${pn}px) {
    flex-direction: column;
  }
`,pc=w.div`
  --s: ${To}px;
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

  @container (min-width: ${pn}px) {
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
`,gc=w.div`
  --s: ${To}px;
  position: relative;
  flex: 0 0 ${Lt}px;
  width: ${Lt}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${pn}px) {
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
  @container (min-width: ${pn}px) {
    .fill {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: calc(var(--fill-ratio, 0) * 100%);
      height: auto;
    }
  }
`,ea=w.div`
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
`,mc={"in-transit":F`
    color: var(--color-text-primary);
  `,"awaiting-reply":F`
    color: var(--color-text-muted);
  `,due:F`
    color: var(--color-text-muted);
  `,overdue:F`
    color: ${ke.warn};
  `,lost:F`
    color: ${ke.warn};
  `},ta=w.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>mc[e]}
`,na=w.span`
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
`,xc=w.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,oa=w.span`
  flex: 0 0 auto;
`,vc="Awaiting first signal";function nx({expectedIn:e}){const t=e??0,n=Number.isFinite(t)&&t>0;return a.jsxs(a.Fragment,{children:[vc,n&&Ss()&&a.jsx(bc,{total:t})]})}function bc({total:e}){return a.jsx(yc,{seconds:Io(e)??0})}function yc({seconds:e}){return e>0?a.jsxs(a.Fragment,{children:[" ",a.jsx(Li,{level:"muted",children:a.jsx(Ao,{value:Math.ceil(e)})})]}):null}const Co=e=>F`
  --fit-box: ${e};
`,wc=e=>F`
  --fit-mask: ${e};
`;function ra(e){return e==="go"||e==="info"?"caution":e}function gn({tone:e,size:t="md",live:n=!1,report:o,held:r,children:s,...i}){const l=jo(r),c=l===void 0?e:ra(e),d=c===void 0||c==="neutral"?void 0:c,h=o?.label??(typeof s=="string"?s:"");yo(o?{id:o.id,severity:d??"go",label:h}:null);const f=n?{role:"status","aria-live":"polite"}:{},m=l===void 0?null:bt(l),x=Reflect.get(i,"data-tooltip")!==void 0,{anchor:g,tip:v}=Xt(x?null:m);return a.jsxs(a.Fragment,{children:[a.jsxs(Mc,{$severity:d,$size:t,...f,...g,...i,children:[s,m!==null&&a.jsxs(a.Fragment,{children:[a.jsx(Sc,{"aria-hidden":"true","data-held-mark":""}),a.jsxs(Ye,{"data-unit-currency":"",children:[", ",m]})]})]}),v]})}const kc=F`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,$c={go:F`
    background: transparent;
    border-color: ${ae.go};
    color: ${ke.go};
  `,info:F`
    background: transparent;
    border-color: ${ae.info};
    color: ${ke.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${ae.info} 40%, transparent);
  `,caution:F`
    background: transparent;
    border-color: ${ae.caution};
    color: ${ke.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${ae.caution} 45%, transparent);
  `,warn:F`
    background: transparent;
    border-color: ${ae.warn};
    color: ${ke.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${ae.warn} 55%, transparent);
  `,nogo:F`
    background: transparent;
    border-color: ${ae.nogo};
    color: ${ke.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${ae.nogo} 65%, transparent);
  `,offline:F`
    background: transparent;
    border-color: ${ae.offline};
    color: ${ke.offline};
  `},_c={sm:F`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:F`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},Mc=w.span`
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

  ${({$size:e})=>_c[e]}
  ${({$severity:e})=>e===void 0?kc:$c[e]}
`,Sc=w.span`
  position: absolute;
  top: 0;
  right: 0;
  width: ${re.held.domSize};
  height: ${re.held.domSize};
  transform: translate(45%, -45%);
  background: ${re.held.color};
  box-shadow: 0 0 0 1px var(--color-surface-panel);
  pointer-events: none;
`;/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=e=>{const t=Ec(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Un={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Rc=p.createContext({}),Ic=()=>p.useContext(Rc),Tc=p.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:o,className:r="",children:s,iconNode:i,...l},c)=>{const{size:d=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:m="currentColor",className:x=""}=Ic()??{},g=o??f?Number(n??h)*24/Number(t??d):n??h;return p.createElement("svg",{ref:c,...Un,width:t??d??Un.width,height:t??d??Un.height,stroke:e??m,strokeWidth:g,className:sa("lucide",x,r),...!s&&!Ac(l)&&{"aria-hidden":"true"},...l},[...i.map(([v,k])=>p.createElement(v,k)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=(e,t)=>{const n=p.forwardRef(({className:o,...r},s)=>p.createElement(Tc,{ref:s,iconNode:t,className:sa(`lucide-${jc(_r(e))}`,`lucide-${e}`,o),...r}));return n.displayName=_r(e),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Pc=D("arrow-down",Cc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Nc=D("arrow-left",Lc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Fc=D("arrow-right",Oc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],zc=D("arrow-up-to-line",Dc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Bc=D("arrow-up",Hc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Xc=D("bell",Wc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Gc=D("check",Uc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],qc=D("chevron-down",Yc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Kc=D("chevron-left",Vc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Qc=D("chevron-right",Zc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ed=D("chevron-up",Jc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],nd=D("columns-2",td);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],rd=D("computer",od);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],ad=D("corner-down-left",sd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ld=D("database",id);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],dd=D("file-text",cd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],hd=D("grip",ud);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],pd=D("heart",fd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],md=D("history",gd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],vd=D("house",xd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],yd=D("info",bd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],kd=D("joystick",wd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],_d=D("layers",$d);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Sd=D("lightbulb-off",Md);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Ed=D("lightbulb",jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Rd=D("lock",Ad);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Td=D("maximize",Id);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Pd=D("menu",Cd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],Nd=D("microscope",Ld);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],Fd=D("minimize",Od);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],zd=D("pause",Dd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Bd=D("pencil",Hd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Xd=D("play",Wd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Gd=D("plus",Ud);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],qd=D("radio",Yd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Kd=D("rectangle-horizontal",Vd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],Qd=D("rectangle-vertical",Zd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],eu=D("rotate-ccw",Jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],nu=D("rotate-cw",tu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],ru=D("rows-2",ou);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],au=D("satellite",su);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],lu=D("settings",iu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],du=D("square",cu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],hu=D("star",uu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],pu=D("undo-2",fu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],mu=D("volume-2",gu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],vu=D("volume-x",xu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],yu=D("wrench",bu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ku=D("x",wu),$u="var(--icon-size-control)",_u={strokeWidth:1.8,"aria-hidden":!0};function z(e,t){const n=p.forwardRef(({label:o,size:r=$u,style:s,...i},l)=>{const c=typeof r=="number"?{size:r,style:s}:{style:{width:r,height:r,...s}},d=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return a.jsx(e,{..._u,...t,...d,...i,...c,ref:l})});return n.displayName=e.displayName??e.name,n}const ox=z(hd),rx=z(kd),sx=z(md),ax=z(vd),ix=z(yd),lx=z(Rd),cx=z(qd),dx=z(mu),ux=z(vu),hx=z(Xc),fx=z(_d),px=z(lu),gx=z(au),mx=z(Td),xx=z(Fd),vx=z(ld),bx=z(rd),yx=z(dd),wx=z(Gd,{strokeWidth:2.4}),Mu=z(ku),kx=z(Bd),$x=z(Gc),Su=z(hu),_x=z(pd),Mx=z(Pd),ju=z(Nd),Sx=z(Xd),jx=z(zd),Ex=z(du),Ax=z(ed),Rx=z(qc),Ix=z(Kc),Tx=z(Qc),Cx=z(Nc),Px=z(Bc),Lx=z(Fc),Nx=z(Pc),Ox=z(zc),Fx=z(pu),Dx=z(nu),zx=z(eu),Hx=z(nd),Bx=z(Kd),Wx=z(ru),Xx=z(Qd),Ux=z(ad),Eu=D("space-helmet",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M10.5 8h3a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 1 0-7z",key:"visor"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),Au=D("space-helmet-visor-up",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M8 7.5C9.5 5 14.5 5 16 7.5",key:"visor"}],["circle",{cx:"12",cy:"12.5",r:"2",fill:"currentColor",key:"face"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),Gx=z(Eu),Yx=z(Au),qx=z(yu),Vx=z(Ed),Kx=z(Sd),Ru={},Iu={byKey:new Map,unaddressed:void 0,separate:!1};function Mr(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Tu(e,t){if(e.separate!==t.separate||!Mr(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!Mr(o,t.byKey.get(n)))return!1;return!0}function Cu(e,t,n,o){const r=new Map;e!==void 0&&r.set(wo(e),n);for(const[s,i]of Object.entries(t??{}))i!==void 0&&r.set(Fi(s),i);return{byKey:r,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function Pu(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Lu(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function Nu(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,i)=>s.depth-i.depth);let r=!1;for(const s of o)s.resettle(n)&&(r=!0);if(r)for(const s of t)s()}}}function Ou(e){const t=new Map,n=new Map,o=new Set,r=e?.root??Nu();let s=Iu;const i=c=>{let d;for(const h of c){const f=h.position;f!==void 0&&(d===void 0||f.base>d.base)&&(d=f)}return d?.rung},l={root:r,depth:e===void 0?0:e.depth+1,hold(c,d,h){const f=t.get(c);if(h===void 0)f!==void 0&&(f.delete(d),f.size===0&&t.delete(c));else{if(Lu(f?.get(d),h))return;f===void 0?t.set(c,new Map([[d,h]])):f.set(d,h)}e===void 0?r.sweep(c):e.hold(c,d,h)},settled:c=>n.get(c),readsAsOneFigure:c=>o.has(c),setPolicy(c){if(!Tu(s,c)){s=c;for(const d of t.keys())r.sweep(d)}},resettle(c){const d=[...t.get(c)?.values()??[]],h=e?.settled(c),f=s.byKey.get(c)??s.unaddressed??Ru,m=f.format??h?.format??i(d),x=f.as??h?.as,g=f.decimals??(s.separate?Di(d,{format:m,as:x}):h?.decimals),v=m===void 0&&x===void 0&&g===void 0?void 0:{...m!==void 0&&{format:m},...x!==void 0&&{as:x},...g!==void 0&&{decimals:g}},k=s.separate&&Rs(d,{format:m,as:x,decimals:g}),E=k!==o.has(c);return k?o.add(c):o.delete(c),Pu(n.get(c),v)?E:(v===void 0?n.delete(c):n.set(c,v),!0)},attach(){r.family.add(l);for(const c of t.keys())r.sweep(c)},detach(){r.family.delete(l)}};return r.family.add(l),l}const Po={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},Ht=p.createContext(Po);function Fu(){return p.useContext(Ht)!==Po}function Zx({children:e,of:t,pins:n,format:o,as:r,decimals:s,separate:i=!1}){const l=p.useContext(Ht),[c]=p.useState(()=>Ou(l===Po?void 0:l));return p.useLayoutEffect(()=>(c.attach(),()=>c.detach()),[c]),p.useLayoutEffect(()=>{c.setPolicy(Cu(t,n,{format:o,as:r,decimals:s},i))},[c,t,n,o,r,s,i]),a.jsx(Ht.Provider,{value:c,children:e})}function Du(e,t={}){const n=p.useContext(Ht),o=p.useId(),r=js(e),s=e?.unit,l=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||r===null?void 0:wo(s),c=l===void 0||r===null||s===void 0||Ni(s)===void 0?void 0:Oi(r,s),d=c?.base,h=c?.rung;return p.useLayoutEffect(()=>{if(!(l===void 0||r===null||s===void 0))return n.hold(l,o,{reading:r,unit:s,...d!==void 0&&h!==void 0&&{position:{base:d,rung:h}}}),()=>n.hold(l,o,void 0)},[n,o,l,r,s,d,h]),p.useSyncExternalStore(n.root.subscribe,()=>l===void 0?void 0:n.settled(l),()=>{})}function Qx(e,t={}){const n=p.useContext(Ht),r=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||js(e)===null||e===null||e===void 0?void 0:wo(e.unit);return p.useSyncExternalStore(n.root.subscribe,()=>r===void 0?!1:n.readsAsOneFigure(r),()=>!1)}const zu=Xi,Hu={sci:ju,rep:Su},aa=w.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,Bu=w.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?F`
          position: relative;
          ${Hs(e,t)}
        `:""}
`,Wu=w.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,Xu=w(Ye)`
  user-select: none;
`,ia=w(Ye)`
  user-select: none;
`,Uu=" ";function Gu(e,t,n,o){if(t===void 0)return null;const r=m=>bo(m.magnitude,m.unit,{...n,format:o}).value,s=(m,x)=>r(x.minus(m)),i=Rs([t.lo,t.hi],{...n,format:o});if(!Us(e,[t.lo,t.hi],Eo(r)))return null;const l=s(t.lo,t.value),c=s(t.value,t.hi),d=m=>/^[-+\u2212]?[0.,\s]*$/.test(m);if(!i&&d(l)&&d(c))return null;const h=r(t.value)===r(e),f={...n,format:o};return{oneFigure:i,plusMinus:!i&&h&&l===c?c:null,lo:r(t.lo),hi:r(t.hi),loSaid:hr(t.lo,f),hiSaid:hr(t.hi,f),kind:t.kind}}function Yu(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function Gn({token:e,className:t,spaced:n}){const o=zi(e,Hi(e));if(o==="")return null;const r=Bi(o),s=Wi(o),i=Hu[s?.head??o],l=zu.has(o),c=r!==void 0;return a.jsxs(a.Fragment,{children:[n&&!l?Uu:null,a.jsx(Se,{text:r,announce:!1,children:a.jsxs(aa,{$attached:l,$icon:i!==void 0,className:t,"data-unit":e,children:[i?a.jsxs(a.Fragment,{children:[a.jsx(i,{size:"1em"}),s&&a.jsxs("span",{"aria-hidden":"true",children:["/",s.rest]})]}):c?a.jsx("span",{"aria-hidden":"true",children:o}):o,c&&a.jsxs(ia,{"data-unit-word":"",children:[" ",r]})]})})]})}function Sr({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:r,marked:s,elsewhere:i,...l}){const c=$n(e,{drawsReckoning:r}),d=s!=null&&!c.held&&c.shown!=null?{...c,held:!0,mark:s.kind,caption:s.caption}:c,{shown:h,held:f,mark:m,band:x}=d,g=i!=null&&i!==""&&h!=null,v=m??(g?"current":null),k=g?[d.caption,i].filter(Boolean).join("; "):d.caption,E=Du(h,l),S=Fu(),P=o===!0&&S,j=E===void 0?l:{...E,...l},R=bo(h?.magnitude,h?.unit,j),_=h==null||x===null||!f?null:Gu(h,Ti(x,h.unit),j,R.rung),{anchor:C,tip:$}=Xt(Yu(k,_));return e!==void 0||t===void 0?a.jsxs(Bu,{className:n,$mark:v,$elsewhere:g,...Xs(d),...C,children:[R.value,!P&&a.jsx(Gn,{token:R.symbol,spaced:!0}),_!==null&&a.jsxs(Wu,{"data-unit-band":"",children:[_.oneFigure?a.jsxs(a.Fragment,{children:[" (",a.jsx("span",{"aria-hidden":"true",children:"~"}),a.jsx(ia,{"data-unit-word":"",children:"approximately "}),_.lo]}):_.plusMinus===null?` (${_.lo} to ${_.hi}`:` ± ${_.plusMinus}`,!P&&a.jsx(Gn,{token:R.symbol,spaced:!0}),_.plusMinus===null?")":null]}),v!==null&&a.jsx(Bs,{kind:v,elsewhere:g}),k!==null&&a.jsxs(Xu,{"data-unit-currency":"",children:[", ",k]}),$]}):typeof t!="string"?a.jsx(aa,{$attached:!1,$icon:!1,className:n,children:t}):a.jsx(Gn,{token:t,className:n,spaced:!1})}const qu={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},Vu={center:"center",start:"flex-start",baseline:"baseline"},Ku=p.forwardRef(function({justify:t="between",align:n="center",gap:o,wrap:r=!1,children:s,...i},l){return a.jsx(Zu,{ref:l,$justify:t,$align:n,$gap:o,$wrap:r,...i,children:s})}),Zu=w.div`
  display: flex;
  align-items: ${({$align:e})=>Vu[e]};
  justify-content: ${({$justify:e})=>qu[e]};
  gap: ${({$gap:e})=>e?mt[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function Lo(e){const t=jo(e.held);return t===void 0?{label:e.label,tone:e.tone,title:e.title}:{label:e.label,tone:ra(e.tone),title:e.title??`${e.label}: ${bt(t)}`,held:t}}function He(e,t){return Oe({magnitude:e,unit:t})}function Qu(e,t){const{limit:n,actual:o,unit:r}=t;if(n==null||o==null)return null;switch(e){case Qt.LimitReached:{const s=Ju(t.quantity),i=`${He(o,r)} of ${He(n,r)}`;return t.facilityName?`the ${t.facilityName} holds ${i} ${s}`:`it holds ${i} ${s}`}case Qt.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${He(o,r)} of ${He(n,r)}`;case Qt.InsufficientFunds:return`it costs ${He(Math.trunc(o),r)} and funds are ${He(Math.trunc(n),r)}`;case Qt.InsufficientScience:return`it costs ${He(o,r)} and science is ${He(n,r)}`;default:return null}}function Ju(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function jr(e){return e&&Es(e)?.sentence||null}function eh(e){const t=e?.trim().replace(/\.$/,"");return t||null}function No(e){return la(e,"refused")}function Jx(e){return la(e,"unavailable")}function la(e,t){const n=nt(e),o=(e.breach?Qu(e.errorCode,e.breach):null)??eh(e.detail)??jr(e.reason)??jr(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function ca(e){const n=nt(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":th(No({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function th(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function da(e){return`${nt(e)||e.command||"The command"}: no reply. May have run.`}function nh(){const e=Gi();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const jn=Ui(nh),ev=jn.Context;function tv({children:e}){return a.jsx(jn.Provider,{children:a.jsx(oh,{children:e})})}function oh({children:e}){const t=jn.useStore();return a.jsx(Ji.Provider,{value:t,children:e})}const Oo=jn.useStore,rh=()=>()=>{},sh=[],Er=()=>sh;function ah(){const e=Oo();return p.useSyncExternalStore(e?e.subscribe:rh,e?e.getActiveHandles:Er,e?e.getActiveHandles:Er)}const It=new WeakMap,uo=new WeakMap;function Ar(e){for(const t of uo.get(e)??[])t()}function ih(e){return It.set(e,(It.get(e)??0)+1),Ar(e),()=>{It.set(e,(It.get(e)??1)-1),Ar(e)}}function nv(){const e=Oo();return p.useSyncExternalStore(t=>{if(!e)return()=>{};const n=uo.get(e)??new Set;return uo.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(It.get(e)??0)>0,()=>!1)}function En({children:e,"aria-label":t,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:r=!1,as:s="span",className:i}){const c={role:n?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":t,className:i,"data-live-region":""};return n?a.jsx(Ye,{as:s,...c,children:e}):p.createElement(s,c,e)}const lh=.72,ch=.76;function ho({size:e,kind:t="held",figureSize:n}){return a.jsx("tspan",{dy:n===void 0?-e*.55:-(n*lh-e*ch),fontSize:e,fill:re[t].color,"data-held-mark":"","data-reckoning-mark":t,children:re[t].glyph})}function ov({end:e,x1:t,y1:n,x2:o,y2:r}){return a.jsx("line",{"data-bound":e,x1:t,y1:n,x2:o,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function ua(e,t){return t===null?e:`${e}, ${t}`}function dh(e){return e===null?{}:{"data-currency-in-name":""}}function rv({x:e,y:t,size:n,children:o}){return a.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function Rr(e,t){return t?.state!=="held"?e:{...t,value:e}}function Xe(e){return e.kind==="continuous"?"ribbon":"dot"}function uh(e){return e.delivery==="acked"}function hh(e){return e.direction==="command"?"outbound":"inbound"}function ha(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function An(e){return`${e.direction}/${e.kind}/${e.delivery}`}const fh={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function Fo(e){return fh[An(e)]??null}const Ir=new Set;function fa(e,t){const n=An(e);if(Ir.has(n))return;Ir.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;Ss()?Ii.error(o):console.error(o)}const pa=16,Tr=pa/2,ph=5.5,gh=2,mh=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function ga(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function xh(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/gh)),Math.max(2,Math.round(o)))}function vh(e,t,n){if(e.length===0)return"";const o=ga(e,t,n);if(!(o>0))return`M0.00,${Tr.toFixed(2)}`;const r=xh(e,t,o),s=[];for(let i=0;i<=r;i++){const l=Math.min(i/r*o,o),c=Math.min(Math.round(l/n*t),e.length-1),d=mh(e[e.length-1-c]),h=(i%2===0?-1:1)*d*ph;s.push(`${l.toFixed(2)},${(Tr+h).toFixed(2)}`)}return`M${s.join(" L")}`}const ma=.05,bh=.02,mn=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],Rn=100,Tt=30,yh=1.5,we=2,wh=4,tt=Tt-we-wh,Ne=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(Rn-n*2),en=e=>we+(1-Math.max(0,Math.min(1,e)))*tt,xa=e=>e==="inline"?yh:0;function sv(e="inline"){const t=xa(e);return(Rn-t*2)/3}function va({tags:e,who:t}){return fa(e,t),a.jsx("g",{"data-rail-unrepresented":An(e),"data-rail-entry":t})}function dt(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function Cr(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(c=>c.age>=t);if(n===-1)return[];const o=e[n-1],r=e[n],s=r.age-o.age||1,i=(t-o.age)/s,l=o.value+i*(r.value-o.value);return[{age:t,value:l},...e.slice(n)]}function Pr(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(d=>d.age>t),r=e.slice(0,o),s=e[o],i=r[r.length-1];if(!i)return[{age:t,value:s.value}];const l=s.age-i.age||1,c=(t-i.age)/l;return[...r,{age:t,value:i.value+c*(s.value-i.value)}]}const kh=.25;function Lr(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>o.age)return null;if(t===o.age)return o.value;for(let r=1;r<e.length;r++){const s=e[r];if(t<=s.age){const i=e[r-1],l=(t-i.age)/(s.age-i.age||1);return i.value+l*(s.value-i.value)}}return o.value}function $h({stream:e,span:t,index:n,padX:o,oneT:r,twoT:s}){const l=`var(${mn[n%mn.length]})`,c=p.useId(),d=`cds-ramp-${c}-${n}`,h=`cds-fill-${c}-${n}`,f=`cds-tail-${c}-${n}`,m=Fo(e.tags);if(m!=="continuous-strip")return m===null?a.jsx(va,{tags:e.tags,who:e.id}):null;const x=uh(e.tags),v=(x?e.inTransit:Pr(e.inTransit,r)).map(U=>({x:Ne(U.age,t,o),y:en(U.value)}));if(v.length===0)return null;const E=(x?[]:Pr(Cr(e.inTransit,r),r*(1+kh))).map(U=>({x:Ne(U.age,t,o),y:en(U.value)})),S=E.length>1&&E[E.length-1].x>E[0].x,P=`${dt(v)} L${v[v.length-1].x.toFixed(2)},${(we+tt).toFixed(2)} L${v[0].x.toFixed(2)},${(we+tt).toFixed(2)} Z`,j=x?Cr(e.echo,s):[],R=j.map(U=>({x:Ne(U.age,t,o),y:en(U.value)})),_=j.map(U=>({x:Ne(U.age,t,o),y:en(Lr(e.inTransit,U.age)??U.value)})),C=j.findIndex(U=>{const B=Lr(e.inTransit,U.age);return B!==null&&Math.abs(U.value-B)>bh}),$=C!==-1,L=$?R.slice(0,C+1):R,W=$?R.slice(C):[],G=$?_.slice(C):[],N=!$||C>0;return a.jsxs("g",{"data-stream-group":e.id,"data-return-leg":x,children:[a.jsxs("defs",{children:[a.jsxs("linearGradient",{id:d,x1:"0",y1:"0",x2:"1",y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.10"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0.40"})]}),a.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.22"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]}),S&&a.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:E[0].x,y1:"0",x2:E[E.length-1].x,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.40"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]})]}),a.jsx("path",{"data-role":"area",d:P,fill:`url(#${h})`,stroke:"none"}),a.jsx("path",{"data-role":"commanded","data-stream":e.id,d:dt(v),fill:"none",stroke:`url(#${d})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),S&&a.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:dt(E),fill:"none",stroke:`url(#${f})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),L.length>0&&N&&a.jsx("path",{"data-role":"echo","data-stream":e.id,d:dt(L),fill:"none",stroke:l,strokeWidth:"0.8",strokeLinecap:"round"}),$&&a.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:dt(W),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),$&&a.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:dt(G),fill:"none",stroke:l,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]})}function _h({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${p.useId()}`,o=e.tags,r=Fo(o);if(r!=="continuous-strip")return r===null?a.jsx(va,{tags:o,who:e.id}):null;const s=(Rn-t*2)/3,i=e.amplitudes,l=e.spanSamples??i.length,c=vh(i,l,s);if(c==="")return null;const d=Math.max(ga(i,l,s),1),h=`var(${ha(o)})`,f=hh(o)==="outbound";return a.jsxs("g",{"data-ribbon-group":e.id,transform:`translate(${t} ${we}) scale(1 ${tt/pa})`,children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:f?0:d,y1:"0",x2:f?d:0,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:h,stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:h,stopOpacity:"0.1"})]})}),a.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:c,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function Mh({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:r}){const s=`cds-divfade-${p.useId()}`,i=r?.state==="held",l=i?$n(r??null).caption:null,{anchor:c,tip:d}=Xt(l),h=[...e,...t].find(j=>j.oneWaySeconds!==null),f=h?.oneWaySeconds??null;if(!h||f===null||vo(f)!=="shown")return null;const m=f>=ma;if(!m&&t.length===0)return null;const x=3*f,g=f,v=2*f,k=xa(o),E=Ne(g,x,k),S=Ne(v,x,k),P=e.every(j=>j.inTransit.length===0&&j.echo.length===0)&&t.every(j=>j.amplitudes.length===0);return a.jsxs(Sh,{"data-oneway":f,"data-variant":o,$variant:o,...c,children:[a.jsxs(jh,{$variant:o,$quiet:P,role:"img","aria-label":ua(n,l),...dh(l),viewBox:`0 0 ${Rn} ${Tt}`,preserveAspectRatio:"none",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:we,x2:"0",y2:we+tt,children:[a.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(m?e:[]).map((j,R)=>a.jsx($h,{stream:j,span:x,index:R,padX:k,oneT:g,twoT:v},j.id)),t.map(j=>a.jsx(_h,{ribbon:j,padX:k},j.id)),a.jsx("line",{"data-divider":"t",x1:E,x2:E,y1:we,y2:we+tt,stroke:`url(#${s})`,strokeWidth:"0.4"}),a.jsx("line",{"data-divider":"2t",x1:S,x2:S,y1:we,y2:we+tt,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&a.jsxs("g",{"data-role":"hover-labels",children:[a.jsxs("text",{x:E,y:we-.4,textAnchor:"middle",fontSize:"2",children:[Oe(Ue("s",f),{decimals:1}),i&&a.jsx(ho,{size:1.2})]}),a.jsxs("text",{x:S,y:we-.4,textAnchor:"middle",fontSize:"2",children:[Oe(Ue("s",2*f),{decimals:1}),i&&a.jsx(ho,{size:1.2})]}),a.jsx("text",{x:Ne(f/2,x,k),y:Tt-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),a.jsx("text",{x:Ne(1.5*f,x,k),y:Tt-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),a.jsx("text",{x:Ne(2.5*f,x,k),y:Tt-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&a.jsxs(a.Fragment,{children:[a.jsxs(Eh,{"aria-hidden":"true",children:[a.jsxs("span",{children:["outgoing ",a.jsx("b",{children:"0"})]}),a.jsxs("span",{children:["echo"," ",a.jsx("b",{children:a.jsx(Sr,{value:Rr(Ue("s",f),r),decimals:1})})]}),a.jsxs("span",{children:["confirmed"," ",a.jsx("b",{children:a.jsx(Sr,{value:Rr(Ue("s",2*f),r),decimals:1})})]})]}),a.jsxs(Ah,{"aria-hidden":"true",children:[(m?e:[]).map((j,R)=>a.jsxs("span",{children:[a.jsx("i",{style:{background:`var(${mn[R%mn.length]})`}}),j.label]},j.id)),t.map(j=>a.jsxs("span",{"data-role":"legend-ribbon",children:[a.jsx("i",{style:{background:`var(${ha(j.tags)})`}}),j.label]},j.id)),m&&e.length>0&&a.jsxs("span",{"data-role":"legend-deviation",children:[a.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),d]})}const Sh=w.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,jh=w.svg`
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
`,Eh=w.div`
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
`,Ah=w.div`
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
`;function Nr({handle:e,handles:t,"aria-label":n,mode:o,density:r,orientation:s,variant:i="inline"}){const l=t??(e?[e]:[]),c=l.length===1?l[0]:null,d=c?Fo(c.tags):null;if(c&&d===null)return a.jsx(Rh,{tags:c.tags,who:c["aria-label"]});if(c&&d!=="in-flight-row"){const x=c,g=x.effectiveDelaySeconds;return vo(g)!=="shown"?null:a.jsx(Mh,{streams:x.streams??[],ribbons:x.ribbons??[],delayReading:x.delayReading,"aria-label":n??x["aria-label"],variant:i})}const h=Vs(l.flatMap(x=>x.inFlight)),m=l.some(x=>x.dismiss)?x=>l.find(g=>g.inFlight.some(v=>v.id===x))?.dismiss?.(x):void 0;return a.jsx(Zl,{items:h,"aria-label":n,mode:o,density:r,orientation:s,variant:i,onDismiss:m})}function Rh({tags:e,who:t}){return fa(e,t??"unnamed handle"),a.jsx("span",{hidden:!0,"data-rail-unrepresented":An(e)})}function ba(e){const n=nt(e)||e.command||"The command",o=e.code===void 0?void 0:Es(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function ya(e){return`${nt(e)||e.command||"The command"}: never sent. Safe to re-send.`}function wa(e){return`${nt(e)||e.command||"The command"}: ${e.warning}`}const Ih={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed",warned:"Commands likely to be lost"},Th={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command",warned:"warned command"};function Ch(e,t){return e.kind==="refused"?No(e.entries[t]):e.kind==="found"?ca(e.entries[t]):e.kind==="failed"?ba(e.entries[t]):e.kind==="warned"?wa(e.entries[t]):e.kind==="undelivered"?ya(e.entries[t]):da(e.entries[t])}function Ph(e){return e.entries.map((t,n)=>{const o=nt(t);return{id:t.id,subject:o||t.command||"",sentence:Ch(e,n),dismissLabel:`Dismiss ${o||Th[e.kind]}`,tags:t.tags}})}function ut(e){const{kind:t,onDismiss:n,live:o=!0}=e,r=e["aria-label"]??Ih[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const i=Ph(e).map(l=>a.jsxs(Oh,{role:o?void 0:"listitem",$tone:s,children:[Xe(l.tags)==="ribbon"?a.jsx(Dh,{$tone:s,children:l.subject}):a.jsx(Fh,{"aria-hidden":"true",$tone:s,children:Ro(l.subject)}),a.jsx(zh,{children:l.sentence}),n&&a.jsx(Hh,{type:"button","data-dismiss":"",onClick:c=>{Gs(c.currentTarget),n(l.id)},"aria-label":l.dismissLabel,children:"✕"})]},l.id));return o?a.jsx(Nh,{forwardedAs:"div","aria-label":r,"data-command-list":"",additionsOnly:!0,children:i}):a.jsx(Lh,{role:"list","aria-label":r,"data-command-list":"",children:i})}const ka=F`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,Lh=w.div`
  ${ka}
`,Nh=w(En)`
  ${ka}
  &:empty {
    margin: 0;
  }
`,Oh=w.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>ae[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${ae[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,Fh=w.span`
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  min-width: 34px;
  padding: var(--inset-glyph);
  align-self: stretch;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: ${({$tone:e})=>ke[e]};
  border: 1px solid ${({$tone:e})=>ae[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${ae[e]} 14%, var(--color-surface-raised))`};
`,Dh=w.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>ke[e]};
`,zh=w.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,Hh=w.button`
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
  ${ot}
`;function gt(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,o)=>gt(n,t[o]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const n=[...t];return[...e].every(o=>{const r=n.findIndex(s=>gt(o,s));return r===-1?!1:(n.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[n,o]of e)if(!t.has(n)||!gt(o,t.get(n)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const n=e,o=t,r=new Set;for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of r)if(!gt(n[s],o[s]))return!1;return!0}return!1}function In(e,t,n,o){const[r,s]=p.useState(o),i=p.useRef(t);i.current=t;const l=p.useRef(n);l.current=n;const c=p.useRef(r);return c.current=r,p.useEffect(()=>{if(!e)return;let d=c.current;const h=()=>{const g=i.current(e);l.current(d,g)||(d=g,s(g))};h(),e.addEventListener("scroll",h,{passive:!0});const f=new ResizeObserver(h);f.observe(e);for(const g of Array.from(e.children))f.observe(g);let m;const x=new MutationObserver(g=>{if(g.some(v=>v.type==="childList")){for(const v of Array.from(e.children))f.observe(v);h();return}m===void 0&&(m=requestAnimationFrame(()=>{m=void 0,h()}))});return x.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style"]}),()=>{e.removeEventListener("scroll",h),f.disconnect(),x.disconnect(),m!==void 0&&cancelAnimationFrame(m)}},[e]),r}function Bh(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function $a(e){return In(e,Bh,Object.is,!1)?0:void 0}function Wh({label:e,selected:t,count:n,onToggle:o}){return a.jsxs(Xh,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[a.jsx("span",{children:e}),n!==void 0&&a.jsx(Uh,{children:n})]})}const Xh=w.button`
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

  ${ot}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`,Uh=w.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function Gh({value:e,onChange:t,clearLabel:n="Clear search",className:o,...r}){const s=p.useRef(null);return a.jsxs(Yh,{className:o,children:[a.jsx(qh,{...r,ref:s,type:"search",value:e,onChange:i=>t(i.target.value)}),e!==""&&a.jsx(Vh,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:a.jsx(Mu,{size:"var(--icon-size-control)"})})]})}const Yh=w.div`
  position: relative;
  display: flex;
  align-items: center;
`,qh=w(Nl)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,Vh=w(Cl)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function av({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=Yi(e),r=[...new Set(o)],[s,i]=p.useState(()=>new Set),[l,c]=p.useState(""),d=p.useId(),h=g=>{i(v=>{const k=new Set(v);return k.has(g)?k.delete(g):k.add(g),k})},f=[...s,l].filter(g=>g.length>0).map(g=>g.toLowerCase()),m=a.jsxs(Is,{gap:"related-packed",children:[a.jsxs(Pl,{children:[a.jsx(Ll,{htmlFor:d,children:t}),a.jsx(Gh,{id:d,value:l,placeholder:n,onChange:c})]}),r.length>0&&a.jsx(Ku,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:r.map(g=>a.jsx(Wh,{label:g,selected:s.has(g),onToggle:()=>h(g)},g))})]}),x={matches:g=>{const v=g.toLowerCase();return f.every(k=>v.includes(k))},active:f.length>0};return _a.set(x,m),x}const _a=new WeakMap;function Ma(e){return _a.get(e)??null}function iv({filter:e,children:t,fill:n=!1}){return a.jsxs(Is,{gap:"related-dense",fill:n,children:[Ma(e),t]})}const Kh={accent:"var(--color-accent-fg)",warn:"var(--color-warn-mark)"},Zh=24,Qh=96;function Jh({children:e,padded:t,caption:n,footer:o,strip:r,shape:s="rounded",edgeCue:i,...l}){const c=s==="circle",d=!c||i===void 0?[]:[i].flat(),h=!c&&r!==void 0&&r!==null&&r!==!1;return a.jsxs(ef,{$padded:t&&!h,$stacked:h,$circle:c,$cued:d.length>0,"data-shape":c?"circle":void 0,...l,children:[h?a.jsxs(a.Fragment,{children:[a.jsx(af,{$padded:t,children:e}),a.jsx(lf,{"data-framed-display-strip":"",children:r})]}):c&&i!==void 0?a.jsx(tf,{children:e}):e,d.length>0&&a.jsx(sf,{cues:d}),n!=null&&a.jsx(ja,{children:n}),o!=null&&a.jsx(cf,{children:o})]})}const ef=w.div`
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
`,tf=w.div`
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
`,Ae=12,Or=1,nf=3,Sa=1,of=100*Sa/200,Fr=e=>e*Math.PI/180;function rf(e,t=of){const n=Math.min(Math.max(e.span??90,1),359),o=Math.min(Math.max(Number.isFinite(e.grow)?e.grow:0,0),1),r=50,i=50+(Or+(nf-Or)*o)*t,l=Fr(e.angle-n/2),c=Fr(e.angle+n/2),d=(f,m)=>`${(50+f*Math.cos(m)).toFixed(3)} ${(50-f*Math.sin(m)).toFixed(3)}`,h=n>180?1:0;return`M${d(r,l)}A${r} ${r} 0 ${h} 0 ${d(r,c)}L${d(i,c)}A${i} ${i} 0 ${h} 1 ${d(i,l)}Z`}function sf({cues:e}){const{ref:t,size:n}=_n({w:100+2*Ae,h:100+2*Ae}),o=(100+2*Ae)/Math.max(n.w,1),r=Sa*o;return a.jsx("div",{ref:t,"aria-hidden":"true",style:{position:"absolute",left:`${-Ae}%`,top:`${-Ae}%`,width:`${100+2*Ae}%`,height:`${100+2*Ae}%`,pointerEvents:"none"},children:a.jsx("svg",{"aria-hidden":"true","data-edge-cues":"",viewBox:`${-Ae} ${-Ae} ${100+2*Ae} ${100+2*Ae}`,style:{display:"block",width:"100%",height:"100%",overflow:"visible"},children:e.map(s=>a.jsx("path",{"data-edge-cue":"",d:rf(s,r),fill:Kh[s.tone]},`${s.angle}-${s.tone}`))})})}const af=w.div`
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
`,lf=w.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${Zh}px;
  max-height: ${Qh}px;
  min-width: 0;
  overflow: hidden;
`,ja=w.div`
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
`,cf=w(ja)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,Dr={width:160,height:72},df=2.5,uf=420;function lv({width:e,height:t,plotHasData:n}){return!n&&e>=Dr.width&&t>=Dr.height?"center":e>=uf&&e>=t*df?"beside":"inline"}const hf={overlay:F`
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
  `};function ff({placement:e,role:t="status",children:n,...o}){return a.jsx(pf,{$placement:e,role:t,...o,children:n})}const pf=w.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${qi.regular};
  pointer-events: none;

  ${({$placement:e})=>hf[e]}
`,xn=8;function Ea(e){const t=[{cols:1,rows:e}];for(let n=2;n<=e;n++){const o=Math.ceil(e/n);o<(t.at(-1)?.rows??e)&&t.push({cols:n,rows:o})}return t}function Aa(e){return e===0?"0px":`(${e}px + var(--gap-related))`}const Ra=(e,t)=>`calc(${e} * ${t} + ${(e-1)*xn}px)`,gf=(e,t,n)=>`calc(${e} * (${t} + ${n+xn}px) + ${(e-1)*xn}px)`;function mf(e,t,n,o,r){const s=Aa(n),i=Ea(e).slice(1).map(({cols:c,rows:d})=>`
  @container grid-squares-width (width >= ${Ra(c,t)}) {
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
`}function xf(e,t,n,o){const r=Ea(e),s=o!==void 0;return r.slice(1).map(({cols:i,rows:l},c)=>`
  @container grid-squares (aspect-ratio >= ${(.88*i/r[c].rows).toFixed(2)}) and ((width >= ${Ra(i,t)}) or (height < ${gf(s?l:r[c].rows,o??t,n)})) {
    --cols: ${i};
    --rows: ${l};
  }`).join("")}function vf(e,t){const n=`
  & > * > * {
    --grid-square-heading: ${e===0?"0px":`calc${Aa(e)}`};
  }`;return e===0||t===void 0?n:`${n}
  @container (width < ${t}px) or (height < ${t+e+xn}px) {
    & > * > * {
      --grid-square-heading: 0px;
    }
    & > * [data-grid-square-heading] {
      display: none;
    }
  }`}function bf(e){const t=new Set;return e.map(n=>{const o=n.inFlight.filter(r=>t.has(r.id)?!1:(t.add(r.id),!0));return o.length===n.inFlight.length?n:{...n,inFlight:o}})}function Yn(e){const t=new Set;return e.filter(n=>t.has(n.id)?!1:(t.add(n.id),!0))}function yf(e){const t=new Map;for(const n of e)for(const o of n.warnings??[]){const r=`${o.command}\0${o.label}\0${o.warning}`;t.has(r)||t.set(r,{...o,id:r,tags:n.tags})}return[...t.values()]}const zr=new Map,wf=new Set(["overdue","lost"]);function kf(e){const t=new Set,n=new Set;for(const o of e){for(const r of o.refusals??[])t.add(r.id);for(const r of o.failures??[])t.add(r.id);for(const r of o.undelivered??[])t.add(r.id);for(const r of o.founds??[])(r.outcome==="ran"?n:t).add(r.id)}return{failed:t,ran:n}}function $f(e){const t=new Map;for(const d of e)for(const h of d.inFlight)h.settling||t.set(h.id,{handleId:d.id,row:h});const{failed:n,ran:o}=kf(e),[r,s]=p.useState({last:zr,settling:zr}),i=[...r.last].filter(([d])=>!t.has(d));if(i.length>0||t.size!==r.last.size||[...t].some(([d,h])=>r.last.get(d)?.row!==h.row)){const d=i.map(([h,f])=>{const m=n.has(h)||wf.has(f.row.predictedPhase)&&!o.has(h)?"failed":"confirmed",x=m==="confirmed"?wr(f.row):0;return[h,{...f,row:{...f.row,settling:m,settleSeconds:x}}]});s({last:t,settling:d.length===0?r.settling:new Map([...r.settling,...d])})}const c=p.useRef(new Map);return p.useEffect(()=>{const d=c.current;for(const[h,f]of r.settling){if(d.has(h))continue;const m=setTimeout(()=>{d.delete(h),s(x=>{const g=new Map(x.settling);return g.delete(h),{...x,settling:g}})},(f.row.settleSeconds??0)*1e3+Dt);d.set(h,m)}},[r.settling]),p.useEffect(()=>{const d=c.current;return()=>{for(const h of d.values())clearTimeout(h)}},[]),r.settling.size===0?e:e.map(d=>{const h=[...r.settling.values()].filter(f=>f.handleId===d.id&&!t.has(f.row.id)).map(f=>f.row.settling==="confirmed"&&n.has(f.row.id)?{...f.row,settling:"failed",settleSeconds:0}:f.row.settling==="failed"&&o.has(f.row.id)?{...f.row,settling:"confirmed",settleSeconds:wr(f.row)}:f.row);return h.length===0?d:{...d,inFlight:[...d.inFlight,...h]}})}function _f(e){if(Xe(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return t===null||t<=0?!1:n>0||t>=ma&&o>0}return e.inFlight.length>0}function Ia({tiny:e}={}){const t=ah(),n=Oo();p.useEffect(()=>n?ih(n):void 0,[n]);const o=bf($f(t)).filter(_f),r=yf(t),s=Yn(t.flatMap(M=>(M.refusals??[]).map(X=>({...X,tags:M.tags})))),i=t.flatMap(M=>(M.losses??[]).map(X=>({...X,tags:M.tags}))),l=Yn(t.flatMap(M=>(M.founds??[]).map(X=>({...X,tags:M.tags})))),c=t.flatMap(M=>(M.undelivered??[]).map(X=>({...X,tags:M.tags}))),d=Yn(t.flatMap(M=>(M.failures??[]).map(X=>({...X,tags:M.tags})))),h=s.length+c.length+d.length,f=o.length>0||h>0||i.length>0||l.length>0||r.length>0,[m,x]=p.useState(!1),[g,v]=p.useState(!1),[k,E]=p.useState(!1),S=m||g&&!k;p.useEffect(()=>{f||(x(!1),v(!1),E(!1))},[f]);const P=p.useId(),j=[...o.filter(M=>Xe(M.tags)==="ribbon"),...o.filter(M=>Xe(M.tags)!=="ribbon")],R=o.some(M=>Xe(M.tags)==="ribbon"),_=j.filter(M=>Xe(M.tags)!=="ribbon"),C=Vs(o.filter(M=>Xe(M.tags)!=="ribbon").flatMap(M=>M.inFlight)),L=t.some(M=>M.dismiss&&(M.refusals?.length??0)>0)?M=>{for(const X of t)X.refusals?.some(ce=>ce.id===M)&&X.dismiss?.(M)}:void 0,G=t.some(M=>M.dismiss&&(M.losses?.length??0)>0)?M=>t.find(X=>X.losses?.some(ce=>ce.id===M))?.dismiss?.(M):void 0,U=t.some(M=>M.dismiss&&(M.undelivered?.length??0)>0)?M=>t.find(X=>X.undelivered?.some(ce=>ce.id===M))?.dismiss?.(M):void 0,te=t.some(M=>M.dismiss&&(M.failures?.length??0)>0)?M=>{for(const X of t)X.failures?.some(ce=>ce.id===M)&&X.dismiss?.(M)}:void 0,le=t.some(M=>M.dismiss&&(M.founds?.length??0)>0)?M=>{for(const X of t)X.founds?.some(ce=>ce.id===M)&&X.dismiss?.(M)}:void 0;return a.jsxs(Mf,{"data-panel-rail-frame":"",$tiny:e,$hasContent:f,onMouseEnter:()=>{E(!1),v(!0)},onMouseLeave:()=>v(!1),children:[t.length>0&&a.jsxs(En,{visuallyHidden:!0,additionsOnly:!0,children:[s.map(M=>a.jsxs("span",{children:[No(M)," "]},`refusal:${M.id}`)),i.map(M=>a.jsxs("span",{children:[da(M)," "]},`loss:${M.id}`)),c.map(M=>a.jsxs("span",{children:[ya(M)," "]},`undelivered:${M.id}`)),d.map(M=>a.jsxs("span",{children:[ba(M)," "]},`failure:${M.id}`)),l.map(M=>a.jsxs("span",{children:[ca(M)," "]},`found:${M.id}`)),r.map(M=>a.jsx("span",{children:wa(M)},`warning:${M.id}`))]}),f?a.jsxs(jf,{"data-panel-rail":"","data-grown":S,"data-pinned":m,"data-suppress-hover":k,onKeyDown:M=>{M.key==="Escape"&&m&&(M.stopPropagation(),x(!1),E(!0))},children:[S&&C.length>0&&!R&&a.jsx(Hr,{children:a.jsx(kr,{items:C,height:Rf})}),a.jsx(Se,{text:!S&&C.length>0?`In flight: ${C.filter(M=>!M.settling).map(M=>M.label).join(", ")}`:null,children:a.jsx(Ef,{type:"button","aria-expanded":m,"aria-controls":P,"aria-label":"Signal-delay detail",onClick:()=>{x(M=>{const X=!M;return X||E(!0),X})},children:a.jsx(Pf,{"aria-hidden":"true",hidden:!S,children:"▲"})})}),a.jsxs(If,{id:P,"data-panel-rail-detail":"",children:[j.filter(M=>!S||Xe(M.tags)==="ribbon").map(M=>a.jsx(Nr,{handle:M,variant:S?"expanded":"rail","aria-label":M["aria-label"]??(S?"Delay detail":void 0)},M.id)),S&&_.length>0&&a.jsx(Nr,{handles:_,variant:"expanded","aria-label":"Commands in flight"},"queue"),!S&&(h>0||i.length>0||l.length>0||r.length>0)&&a.jsxs(Tf,{children:[h>0&&a.jsx(qn,{children:h===1?"1 command failed":`${h} commands failed`}),i.length>0&&a.jsx(qn,{children:i.length===1?"1 command unconfirmed":`${i.length} commands unconfirmed`}),r.length>0&&a.jsx(qn,{children:r.length===1?"1 warning":`${r.length} warnings`}),l.length>0&&a.jsx(Cf,{children:l.length===1?"1 unconfirmed command answered":`${l.length} unconfirmed commands answered`})]})]}),S&&C.length>0&&R&&a.jsx(Hr,{"data-over-graph":"true",children:a.jsx(kr,{items:C,height:Af})})]}):null,S&&r.length>0&&a.jsx(ut,{kind:"warned",entries:r,live:!1}),S&&s.length>0&&a.jsx(ut,{kind:"refused",entries:s,onDismiss:L,live:!1}),S&&i.length>0&&a.jsx(ut,{kind:"lost",entries:i,onDismiss:G,live:!1}),S&&c.length>0&&a.jsx(ut,{kind:"undelivered",entries:c,onDismiss:U,live:!1}),S&&d.length>0&&a.jsx(ut,{kind:"failed",entries:d,onDismiss:te,live:!1}),S&&l.length>0&&a.jsx(ut,{kind:"found",entries:l,onDismiss:le,live:!1})]})}const Mf=w.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,Sf=F`
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
`,jf=w.div`
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
    ${Sf}
  }
`,Ef=w.button`
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

  ${Wt}

  &[aria-expanded="true"] {
    pointer-events: none;
  }

`,Af=86,Rf=40,Hr=w.div`
  pointer-events: none;

  &[data-over-graph="true"] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`,If=w.div`
  display: contents;
`,qn=w.span`
  color: ${ke.warn};
`,Tf=w.span`
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
`,Cf=w.span`
  color: var(--color-info-text);
`,Pf=w.span`
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
`,Ta=p.createContext(null);function cv({badges:e,children:t}){return a.jsx(Ta.Provider,{value:e,children:t})}function Lf(){return p.useContext(Ta)}function Ca({severity:e,count:t=1}){const n=t>1;return a.jsx(Nf,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${Ft[e]}`:Ft[e],$mark:ae[e],$digits:n?String(t).length:1,children:n&&a.jsx(Of,{$fill:ao[e],$ink:As[e],children:a.jsx(Ff,{"aria-hidden":"true",children:a.jsx("text",{x:"50%",y:"50%",dy:"0.365em",textAnchor:"middle",children:t})})})})}const Br="8px",Nf=w.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${Br};
  /* The count's own size, so the width below can be counted in its digits. Digits this size are six pixels tall, which centre in the eight-pixel dot on whole pixels; at seven they are five, and one engine places the baseline half a pixel above or below the middle. */
  font-size: 8px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:Br};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,Of=w.span`
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
`,Ff=w.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: currentColor;
`,Df=()=>()=>{},Wr=()=>Vi;function Pa(){const e=Ts();return p.useSyncExternalStore(e?e.subscribe:Df,e?e.getBreakdown:Wr,e?e.getBreakdown:Wr)}const zf=()=>()=>{},Xr=()=>null;function Hf(){const e=Ts();return p.useSyncExternalStore(e?e.subscribe:zf,e?e.getSummary:Xr,e?e.getSummary:Xr)}const La=F`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Bf=12;function Wf(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function Xf(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const r=o<e?t-Bf:t;if(n[o]<=r)return o}return n.length-1}function Uf(e,t,n){const[o,r]=p.useState(0),s=p.useRef(o);s.current=o;const i=[t,...n].join(`
`),l=p.useCallback(()=>{const c=e.current,d=i.split(`
`);if(!c||d.length<2){s.current!==0&&(s.current=0,r(0));return}const h=d.map(m=>Wf(c,m)),f=Xf(s.current,c.clientWidth,h);f!==s.current&&(s.current=f,r(f))},[e,i]);return p.useLayoutEffect(()=>{l()},[l]),p.useEffect(()=>{const c=e.current;if(!c||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>l());return d.observe(c),()=>d.disconnect()},[e,l]),{index:o,compacted:o>0}}const Gf=24;function Yf(e,t,n,o,r=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&r?!(t>n+Gf):n>t}function Ur(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const r=e.cloneNode(!0);n!==void 0&&(r.textContent=n),Object.assign(r.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),r.setAttribute("aria-hidden","true"),o.insertBefore(r,e.nextSibling);const s=r.getBoundingClientRect().width;return o.removeChild(r),s}const qf={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function jt(e){return Number.parseFloat(e)||0}function Vf(e,t,n,o){const[r,s]=p.useState(!1),i=p.useRef(r);i.current=r;const l=p.useRef(void 0),c=p.useRef(void 0),d=p.useRef(!1),h=p.useRef(o);h.current=o;const f=p.useCallback(()=>{const x=e.current;if(!x)return;const g=getComputedStyle(x),v=x.getBoundingClientRect().width-jt(g.paddingLeft)-jt(g.paddingRight),k=Ur(t.current,{},h.current),E=Ur(n.current,qf),S=n.current?.closest("[data-panel-aside-expand]")?.parentElement,P=S?getComputedStyle(S):null,j=k===0||E===0?k+E:k+jt(g.columnGap)+jt(P?.paddingLeft??"")+jt(P?.paddingRight??"")+E,R=i.current,_=v>0&&c.current!==void 0&&v<c.current;R&&_&&(d.current=!0);const C=Yf(R,v,j,l.current,d.current);C!==R&&(d.current=C&&_),v>0&&(c.current=v),j>0&&(l.current=j),C!==i.current&&(i.current=C,s(C))},[e,t,n]),m=p.useRef({title:null,aside:null,observer:null});return p.useLayoutEffect(()=>{const x=t.current,g=n.current,v=m.current;if(v.observer===null||v.title!==x||v.aside!==g){v.observer?.disconnect(),v.title=x,v.aside=g,v.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>f());for(const k of[x,g])k&&v.observer?.observe(k,{subtree:!0,childList:!0,characterData:!0,attributes:!0});f();return}v.observer.takeRecords().length>0&&f()}),p.useEffect(()=>{const x=m.current;return()=>{x.observer?.disconnect(),x.observer=null}},[]),p.useEffect(()=>{const x=e.current;if(!x||typeof ResizeObserver>"u")return;const g=new ResizeObserver(()=>f());return g.observe(x),n.current&&g.observe(n.current),()=>g.disconnect()},[e,n,f]),r}const Na=p.createContext("full"),Kf=Na.Provider;function dv(){return p.useContext(Na)}const Tn=p.createContext(null);function Oa({children:e}){const[t,n]=p.useState(null),o=p.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return a.jsx(Tn.Provider,{value:o,children:e})}function Zf({children:e}){return a.jsx(Oa,{children:e})}const Fa=`
  & > [${Ps}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,vn=w.div`
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
  ${({$hoverTitle:e})=>e?Wt:""}
  /* A hand-composed panel can put sections straight in here, so this box owns the leftover height. */
  ${Fa}
`,Qf=w.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${La}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Da=p.forwardRef(function({compact:t,children:n,...o},r){const s=p.useRef(null),i=typeof n=="string"?n:"",l=t===void 0||i===""?Jf:typeof t=="string"?[t]:t,{index:c,compacted:d}=Uf(s,i,l);return a.jsx(Se,{text:d?i:void 0,children:a.jsx(Qf,{...o,ref:h=>{if(s.current=h,typeof r=="function"){r(h);return}r&&(r.current=h)},"aria-label":d?i:void 0,children:c===0?n:l[c-1]})})}),Jf=[],ep=w.div`
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
`,tp=w.div`
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
`,np=w.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,op=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,rp=w.details`
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
    ${ot}
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
`,sp=120;function za(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${Ft[n.severity]}`:`${Ft[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function Ha({title:e,compactTitle:t,aside:n,toolbar:o,...r}){const s=Pa(),i=p.useRef(null),l=p.useRef(null),c=p.useRef(null),d=Vf(i,l,c,typeof e=="string"?e:void 0),[h,f]=p.useState(!1),[m,x]=p.useState(!1),g=p.useRef(null),v=p.useRef(null),k=p.useRef(null),E=p.useCallback(()=>{g.current!==null&&clearTimeout(g.current),g.current=null},[]);p.useEffect(()=>{d||(f(!1),x(!1))},[d]),p.useEffect(()=>E,[E]);const S=d&&(h||m);p.useEffect(()=>{if(!S)return;const _=$=>{$.key==="Escape"&&v.current?.contains(document.activeElement)&&($.stopPropagation(),E(),x(!1),f(!1),k.current?.focus())},C=$=>{v.current?.contains($.target)||(E(),x(!1),f(!1))};return document.addEventListener("keydown",_,!0),document.addEventListener("pointerdown",C,!0),()=>{document.removeEventListener("keydown",_,!0),document.removeEventListener("pointerdown",C,!0)}},[S,E]);const P=d?za(s):null,{anchor:j,tip:R}=Xt(S?null:P);return a.jsxs(ep,{ref:i,"data-panel-header":"",...r,children:[a.jsxs(tp,{children:[e!==void 0&&a.jsx(Da,{ref:l,compact:t,children:e}),a.jsx(np,{"aria-hidden":"true",children:a.jsx(gn,{children:null})})]}),n!==void 0&&a.jsx(op,{children:a.jsxs(rp,{ref:v,"data-panel-aside-expand":"","data-hovering":d&&m?"":void 0,$collapsed:d,open:d?h:!0,onToggle:_=>{d&&(f(_.currentTarget.open),_.currentTarget.open||x(!1))},onPointerEnter:_=>{!d||_.pointerType==="touch"||(E(),x(!0))},onPointerLeave:_=>{_.pointerType!=="touch"&&(E(),g.current=setTimeout(()=>{g.current=null,x(!1)},sp))},children:[a.jsxs("summary",{ref:k,"data-tooltip":j["data-tooltip"],onPointerDown:j.onPointerDown,onPointerUp:j.onPointerUp,onFocus:j.onFocus,onBlur:j.onBlur,"aria-description":P??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(_=>`${_.count} ${Ft[_.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(_=>a.jsx(Ca,{severity:_.severity,count:_.count},_.severity)),a.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),R,a.jsx(Kf,{value:d?"collapsed":"full",children:a.jsx("div",{"data-panel-aside-full":"",ref:c,children:n})})]})}),o!==void 0&&a.jsx(Ba,{children:o})]})}const Ba=w.div`
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
`,ap=w.div`
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
  ${Wt}
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
  ${({$loneFrame:e})=>e?`@container (width < ${ip}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${Fa}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${Ps}] {
           min-height: 0;
         }`:""}
`,ip="25rem";function Wa({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...r}){const i=p.useContext(Tn)?.registerScroller,[l,c]=p.useState(null),d=p.useCallback(f=>{i?.(f),c(f)},[i]),h=$a(l);return a.jsx(ap,{ref:d,tabIndex:h,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...r,children:e})}const lp="13rem",cp=w.div`
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
  & > [${Ki}] {
    grid-column: 1 / -1;
  }
  /* A grid opened only to carry the augment slot, with nothing bound, takes no gap above it: a filling section reaches the body's bottom inset. */
  &:empty {
    display: none;
  }
`;function dp({children:e,hoverTitle:t}){const n=p.useRef(null),o=p.useRef(null),r=fp(n,o);return a.jsx(up,{ref:n,$fits:r,"data-panel-fit-body":"",children:a.jsx(hp,{ref:o,$fits:r,$hoverTitle:t,"data-panel-fit-shifted":r&&t?"":void 0,children:e})})}const up=w.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,hp=w.div`
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
`;function fp(e,t){const[n,o]=p.useState(!0);return p.useLayoutEffect(()=>{const r=e.current,s=t.current;if(!r||!s)return;const i=()=>{o(gp(pp(s),r.clientHeight))};if(i(),typeof ResizeObserver>"u")return;const l=new ResizeObserver(i),c=()=>{l.observe(r),l.observe(s);for(const h of Array.from(s.children))l.observe(h)};c();const d=new MutationObserver(()=>{c(),i()});return d.observe(s,{childList:!0}),()=>{l.disconnect(),d.disconnect()}},[e,t]),n}function pp(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function gp(e,t){return e<=t}const mp=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,xp=w.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${Wt}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,bn=w.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e})=>e==="top"?"top: 0;":"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: 44px;
  /* The audit reads the mask depth from the gradient, so the literal height costs it nothing. */
  ${wc("panel-scroll-glow")}
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
`,Xa=p.forwardRef(function({children:t,...n},o){const r=p.useRef(null),[s,i]=p.useState(null),l=p.useCallback(h=>{r.current=h,i(h)},[]);p.useImperativeHandle(o,()=>r.current);const c=In(s,zo,Ho,Do),d=$a(s);return a.jsxs(mp,{...n,children:[a.jsx(xp,{ref:l,tabIndex:d,"data-scroll-area-inner":"",children:t}),a.jsx(bn,{$position:"top",$visible:c.top}),a.jsx(bn,{$position:"bottom",$visible:c.bottom})]})});function vp(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const Gr="14rem",bp=5,yp="45%",wp=`min(${el(1,bp).pxH}px, ${yp})`;function Yr(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const kp=w.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${Yr(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${Yr(t,n)};`}

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
`;function $p({side:e="end",size:t,railBand:n,children:o,...r}){const{ref:s,size:i}=_n({w:1,h:1}),l=vp(t??Gr),c=i.w<=1||l===void 0||i.w>=l*2,d=i.w>=i.h&&c?"inline":"block",h=t??(d==="inline"?Gr:wp);return a.jsx(kp,{ref:s,"data-panel-split":d,$axis:d,$side:e,$size:h,$railBand:n,...r,children:o})}const _p=w(Xa)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,Mp=w.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function Ua({children:e,...t}){return a.jsx(Mp,{"data-panel-sidebar":"",...t,children:a.jsx(_p,{children:e})})}const Do={top:!1,bottom:!1};function zo(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function Ho(e,t){return e.top===t.top&&e.bottom===t.bottom}const Sp=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function Ga({children:e,railBandAbove:t,...n}){const o=p.useContext(Tn),r=o?.scroller??null;p.useEffect(()=>{},[o]);const s=In(r,zo,Ho,Do);return a.jsxs(Sp,{...n,children:[e,a.jsx(bn,{$position:"top",$visible:s.top&&!t}),a.jsx(bn,{$position:"bottom",$visible:s.bottom})]})}function jp(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const uv=["sections","actions"],tn=Object.freeze({});function Ep({summary:e}){const t=p.useRef(e.severity),[n,o]=p.useState(0);p.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const r=za(Pa());return a.jsx(Ap,{$pulse:n,children:a.jsx(Se,{text:r,focusable:!0,children:a.jsx(gn,{tone:e.severity,size:"sm",children:e.label})})})}const Ap=w.span`
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
`,Ya=w.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,Rp=w.div`
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
`;function Ip({children:e}){const t=p.useContext(Tn),n=In(t?.scroller??null,zo,Ho,Do);return a.jsx(Rp,{"data-panel-sticky-top":"","data-panel-glow-top":n.top?"":void 0,children:e})}function Tp({render:e}){const{ref:t,size:n}=_n({w:0,h:0});return a.jsx(Cp,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const Cp=w.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,Pp=w.div`
  flex: 1 1 100%;
  min-width: 0;
`,Lp=w(Ha)`
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
`,Np=w.div`
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
`,Op=w(Ye)`
  margin: 0;
  ${La}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${vn}:hover &,
  ${vn}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function Bo(e){return e.held===void 0?e.label:`${e.label}: ${bt(e.held)}`}function Fp(e){let t=null;for(const n of e){const o=Lo(n),{tone:r}=o;r===void 0||r==="neutral"||(t===null||gr(r)>gr(t.severity))&&(t={severity:r,label:Bo(o)})}return t}function qr({badges:e}){return a.jsx(a.Fragment,{children:e.map(t=>a.jsx(Dp,{entry:t},t.id))})}function Dp({entry:e}){const t=Lo(e),{tone:n}=t;return yo(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:Bo(t)}),null}function zp({summary:e,announcement:t}){return a.jsxs(a.Fragment,{children:[a.jsx(Se,{text:e.label,focusable:!0,children:a.jsx(Hp,{children:a.jsx(Ca,{severity:e.severity})})}),a.jsx(En,{visuallyHidden:!0,assertive:!0,children:t})]})}const Hp=w.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,Bp=w.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function Wp(e){return e.hoverTitle?a.jsx(Xp,{...e}):a.jsx(qa,{...e,hoverTitleId:void 0})}function Xp(e){const t=p.useId();return a.jsx(qa,{...e,hoverTitleId:t})}function qa({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:r,panelToolbar:s,panelFilter:i,panelFooter:l,panelTrend:c,inactive:d,fitToSize:h,hoverTitle:f,hoverTitleId:m,panelSidebar:x,sidebarSide:g,sidebarSize:v,sections:k,sectionMinWidth:E=lp,children:S,...P}){const j=Lf(),R=fr("actions"),_=fr("sections"),C=jp(o,j),$=C.length===0?null:C.map(K=>{const ue=Lo(K),{label:je,tone:Ee,title:Cn}=ue;return a.jsx(Se,{text:Cn,focusable:!0,children:a.jsx(gn,{tone:Ee,held:ue.held,report:Ee===void 0||Ee==="neutral"?void 0:{id:K.id,label:Bo(ue)},children:je})},K.id)}),L=i===void 0?s:a.jsxs(a.Fragment,{children:[s,a.jsx(Pp,{children:Ma(i)})]}),W=r??null,G=W!==null&&W!=="none"&&W!=="live"?W:null;yo(G?{id:"stream",severity:Wn(G),label:pr(G)??""}:null);const N=Hf(),U=N!==null&&C.some(K=>K.id===N.id),B=G===null?null:pr(G),te=U?null:N!==null?a.jsx(Ep,{summary:N}):G===null||B===null?null:a.jsx(Se,{text:`Telemetry stream: ${B}`,focusable:!0,children:a.jsx(gn,{tone:Wn(G),size:"sm",children:B})}),ie=N?.label??B,le=ie===null||ie===""?"":typeof e=="string"?`${e}: ${ie}`:`Status: ${ie}`,M=n===void 0&&te===null&&$===null&&!R?void 0:a.jsxs(a.Fragment,{children:[n,R&&a.jsx(Jt,{segment:"actions",props:tn}),$,te]}),X=N??Fp(C)??(G===null||B===null?null:{severity:Wn(G),label:B}),ce=X?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${X.label}`:`Status: ${X.label}`,_e=n===void 0&&X===null&&!R?C.length===0?void 0:a.jsx(qr,{badges:C}):a.jsxs(a.Fragment,{children:[n,R&&a.jsx(Jt,{segment:"actions",props:tn}),a.jsx(qr,{badges:C}),X!==null&&a.jsx(zp,{summary:X,announcement:ce})]}),pe=d!==void 0,Ce=pe?[]:p.Children.toArray(k),xe=Ce.length>0,J=S===void 0&&!_&&!h&&Ce.length===1&&Up(Ce[0]),ne=[];for(const K of Ce){const ue=!h&&p.isValidElement(K)&&K.props.fill===!0,je=ne.at(-1);!ue&&je!==void 0&&!je.fill?je.nodes.push(K):ne.push({fill:ue,nodes:[K]})}xe&&!ne.some(K=>!K.fill)&&ne.push({fill:!1,nodes:[]});const Ve=ne.reduce((K,ue,je)=>ue.fill?K:je,-1),Ke=K=>Math.max(1,K.filter(ue=>!(p.isValidElement(ue)&&ue.props.full===!0)).length),Me=[];for(const K of ne){const ue=Me.length;if(K.fill){Me.push(K.nodes[0]);continue}Me.push(a.jsxs(cp,{$min:E,$columns:Ke(K.nodes),children:[K.nodes,ue===Ve&&a.jsx(Jt,{segment:"sections",props:tn})]},`sections-${ue}`))}const de=pe?a.jsx(Zi,{reason:d}):xe?a.jsxs(a.Fragment,{children:[S,Me]}):S,he=a.jsxs(Wa,{fitToSize:h,loneFrame:J,hoverTitle:f,children:[a.jsxs(Ip,{children:[a.jsx(Ia,{tiny:f}),!f&&a.jsx(Lp,{title:e,compactTitle:t,aside:M,toolbar:L})]}),h?a.jsx(dp,{hoverTitle:f,children:de}):de,!xe&&!pe&&a.jsx(Jt,{segment:"sections",props:tn})]});return a.jsx(Zf,{children:a.jsxs(vn,{$railTravels:!0,$hoverTitle:f,...f?{tabIndex:0,role:"group","aria-labelledby":m,"data-tiny-panel":""}:{},...P,children:[a.jsx(Ga,{railBandAbove:!0,children:x===void 0||pe?he:a.jsxs($p,{side:g,size:v,railBand:!0,children:[he,a.jsx(Ua,{children:x})]})}),!pe&&c!==void 0&&a.jsx(Tp,{render:c}),!pe&&l!==void 0&&a.jsx(Ya,{children:l}),f&&a.jsxs(Np,{"data-panel-hover-title":"",children:[a.jsx(Op,{as:"h3",id:m,children:e}),_e!==void 0&&a.jsx(Bp,{children:_e})]}),a.jsx(En,{visuallyHidden:!0,children:f&&ce!==void 0?"":le})]})})}function Up(e){if(!p.isValidElement(e)||e.type!==Cs||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=p.Children.toArray(t).filter(r=>!(p.isValidElement(r)&&r.type===ff));if(n.length!==1)return!1;const[o]=n;if(!p.isValidElement(o))return!1;if(o.type===Jh)return!0;if(o.type!==p.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const hv=Object.assign(Wp,{Context:Oa,Delay:Ia,Container:vn,Header:Ha,Toolbar:Ba,Footer:Ya,Title:Da,Glow:Ga,Body:Wa,Section:Cs,Sidebar:Ua}),Gp={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function fv({cols:e,minColWidth:t,fit:n=!1,gap:o="related-dense",rowGap:r,align:s="center",squares:i=!1,squareHeadingPx:l=0,squareHeadingMinPx:c,minRowHeight:d,children:h,...f}){if(i){const m=p.Children.toArray(h).length,x=t??"120px",g=a.jsx(Kp,{$count:m,$min:x,$headingPx:l,$gap:mt[o],$rowMin:d,children:a.jsx(Zp,{$count:m,$min:x,$headingPx:l,$gap:mt[o],$rowMin:d,$headingMin:c,"data-grid-squares":"",children:h})});return a.jsx(qp,{$rowMin:d,...f,children:d===void 0?g:a.jsx(Vp,{children:g})})}return a.jsx(Yp,{$cols:e,$minColWidth:t,$fit:n,$gap:o,$rowGap:r,$align:s,...f,children:h})}const Yp=w.div`
  display: grid;
  align-items: ${({$align:e})=>Gp[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${mt[t]} ${mt[e]}`:mt[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:n})=>e||(t?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,qp=w.div`
  container: grid-squares-width / inline-size;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  ${({$rowMin:e})=>e&&`
  flex-basis: 0;
  min-height: ${e};
`}
`,Vp=w(Xa)`
  & > [data-scroll-area-inner] {
    display: flex;
    flex-direction: column;
  }
`,Kp=w.div`
  container: grid-squares / size;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${({$count:e,$min:t,$headingPx:n,$gap:o,$rowMin:r})=>mf(e,t,n,o,r)}
`,Zp=w.div`
  --cols: 1;
  --rows: ${({$count:e})=>e};
  display: grid;
  flex: 1 1 0;
  min-height: 0;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
  gap: ${({$gap:e})=>e};
  ${({$count:e,$min:t,$headingPx:n,$rowMin:o})=>xf(e,t,n,o)}
  & > * {
    container-type: size;
    min-width: 0;
    min-height: 0;
  }
  ${({$headingPx:e,$headingMin:t})=>vf(e,t)}
`,Va=.89,Wo=.45;function Ka({kind:e,x:t,y:n,scale:o=1,ghost:r=!1}){const s=re[e],i=s.canvasRadius*o,l={fill:s.color,opacity:r?Wo:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const d=i*Va;return a.jsx("rect",{x:t-d,y:n-d,width:2*d,height:2*d,...l})}const c=`${t},${n-i} ${t+i},${n+i*.8} ${t-i},${n+i*.8}`;return a.jsx("polygon",{points:c,...l})}function Za(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function Vr(e,t,n,o,r,{ghost:s=!1,scale:i=1}={}){const l=re[n],c=l.canvasRadius*i;if(t.save(),t.globalAlpha=s?Wo:1,t.fillStyle=Za(e,l.cssVar,l.fallback),t.beginPath(),n==="held"){const d=c*Va;t.rect(o-d,r-d,2*d,2*d)}else t.moveTo(o,r-c),t.lineTo(o+c,r+c*.8),t.lineTo(o-c,r+c*.8),t.closePath();t.fill(),t.restore()}function pv(e,t,{held:n,modelled:o},r={}){n!==void 0&&o!==void 0&&(t.save(),t.globalAlpha=Wo,t.strokeStyle=Za(e,re.modelled.cssVar,re.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.stroke(),t.restore()),n!==void 0&&Vr(e,t,"held",n.x,n.y,{...r,ghost:o!==void 0}),o!==void 0&&Vr(e,t,"modelled",o.x,o.y,r)}const yn=14,Te=4,Ie=6,Qp=6,Kr=12,ve=6,Nt=8,nn=4.5,fo=4,Jp=12,e0=190,t0=80;function Ct(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function n0(e,t,n,o){const r=o??e,s=r.x1-r.x0,i=e.y1-e.y0,l=s>=e0&&i>=t0,c=l||o!==void 0,d=l||o?n:n.filter(_=>!_.detail),h=s-ve*2-Te*2-Nt-fo,f=o!==void 0,m=Math.floor(h/Ie),x=_=>Ct(_.value??hn,m-(_.currency?_.currency.length+2:0)),g=_=>{const C=_.value??hn;if(f)return Ct(_.label,m);if(l)return`${_.label} ${C}`;const $=Math.floor((h-C.length*Ie)/Ie)-1-(_.modelled?2:0),L=Ct(_.label,Math.min($,Jp));if(L!=="")return`${L} ${C}`;const W=Math.floor(h/Ie)-(_.modelled?2:0);return Ct(C,W)},v=_=>(l||f)&&_.currency?_.currency:"",k=_=>v(_)?Qp+v(_).length*Ie+(_.modelled?Kr:0):_.modelled?Kr:0,E=l?0:Nt+fo,S=Math.floor((s-ve*2-Te*2)/Ie),P=Math.max(...d.map(_=>f?E+Math.max(g(_).length*Ie,x(_).length*Ie+k(_)):E+g(_).length*Ie+k(_)),c?Math.min(t.length,S)*Ie:0),j=c?1:0,R=(d.length*(f?2:1)+j)*yn+Te*2;return{full:l,named:c,headingChars:S,stacked:f,rows:d,text:g,valueText:x,currencyText:v,cardW:f?s:Math.min(P+Te*2,s-ve*2),cardH:R,headRows:j,fits:R<=i-ve*2}}function o0(e,t,n,o,r){const s=(i,l)=>i>=t&&i<=t+o&&l>=n&&l<=n+r;for(let i=1;i<e.cx.length;i++){const[l,c,d,h]=[e.cx[i-1],e.cy[i-1],e.cx[i],e.cy[i]];if(![l,c,d,h].every(Number.isFinite))continue;const f=Math.max(1,Math.ceil(Math.hypot(d-l,h-c)/yn));for(let m=0;m<=f;m++)if(s(l+(d-l)*m/f,c+(h-c)*m/f))return!0}return!1}function Xo({x:e,plot:t,heading:n,rows:o,column:r,avoid:s=[],traces:i=[]}){const l=n0(t,n,o,r),{rows:c,cardW:d,cardH:h,fits:f}=l,m=t.y0+ve,x=c.flatMap($=>$.y===void 0||$.y===null?[]:[$.y]),g=($,L)=>x.every(W=>e+nn<$||e-nn>$+d||W+nn<L||W-nn>L+h),v=t.x1-e-ve,k=v>=d||v>=e-t.x0,E=$=>Math.max(t.x0+ve,Math.min(t.x1-ve-d,$)),S=k?[e+ve,e-ve-d]:[e-ve-d,e+ve],P=[m,t.y1-ve-h].flatMap($=>S.map(L=>({cardX:E(L),cardY:$}))),j=($,L)=>i.every(W=>!o0(W,$,L,d,h)),R=($,L)=>s.every(W=>$+d<W.x0||$>W.x1||L+h<W.y0||L>W.y1),_=P.find($=>g($.cardX,$.cardY)&&j($.cardX,$.cardY)&&R($.cardX,$.cardY))??P.find($=>g($.cardX,$.cardY)&&R($.cardX,$.cardY))??P.find($=>g($.cardX,$.cardY)&&j($.cardX,$.cardY))??P.find($=>g($.cardX,$.cardY)),C=f?r?{cardX:r.x0,cardY:r.y0+ve}:_:void 0;return{layout:l,place:C}}function gv(e){return Xo(e).place!==void 0}function r0(e){const{layout:t,place:n}=Xo(e);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+t.cardW,y1:n.cardY+t.cardH}}function s0({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:i}){const{layout:l,place:c}=Xo({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:i}),{full:d,named:h,headingChars:f,stacked:m,rows:x,text:g,valueText:v,currencyText:k,cardW:E,cardH:S,headRows:P}=l,j=c!==void 0,R=c?.cardX??0,_=c?.cardY??0,C=$=>$+Te+(d?0:Nt+fo);return a.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[a.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),x.map($=>$.y===void 0||$.y===null?null:a.jsx("circle",{cx:e,cy:$.y,r:3.5,fill:$.color,stroke:"var(--color-text-primary)",strokeWidth:1},$.id)),j&&a.jsxs("g",{"data-plot-crosshair-card":"",children:[a.jsx("rect",{x:R,y:_,width:E,height:S,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),h&&a.jsx("text",{x:R+Te,y:_+Te+10,fill:"var(--color-text-muted)",fontSize:10,children:Ct(n,f)}),x.map(($,L)=>{const W=m?2:1,G=_+Te+(L*W+P)*yn+10,N=G+(m?yn:0);return a.jsxs("g",{"data-plot-crosshair-row":$.id,children:[!d&&a.jsx("rect",{x:R+Te,y:G-8,width:Nt,height:Nt,fill:$.color,"data-plot-crosshair-swatch":""}),a.jsx("text",{x:C(R),y:G,fill:$.value===null||m?"var(--color-text-faint)":$.color,fontSize:10,style:{whiteSpace:"pre"},children:g($)}),m&&a.jsx("text",{x:C(R),y:N,fill:$.value===null?"var(--color-text-faint)":$.color,fontSize:10,style:{whiteSpace:"pre"},children:v($)}),$.modelled&&a.jsx(Ka,{kind:"modelled",x:R+E-Te-k($).length*Ie-(k($)?8:4),y:N-3}),k($)&&a.jsx("text",{x:R+E-Te,y:N,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:k($)})]},$.id)})]})]})}const Zr=480,a0=110,i0=200,Qr=56,l0=20,c0=112,d0=260,u0=.4,h0=300;function f0({width:e,height:t,contentWidth:n,legendHeight:o=0,cardHeight:r=0}){const s=Math.max(c0,Math.ceil(n));if((t>e||e<Zr)&&t>=i0)return{placement:"below"};if(e<Zr||t<a0||s>Math.min(d0,e*u0)||e-s<h0)return{placement:"overlay"};const l=t>=Qr+o+r;return!l&&t<Qr+l0+r?{placement:"overlay"}:{placement:"beside",columnWidth:s,legendBelow:!l}}const p0={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function g0(e){return p0[e]}const ht=4,on=3,po=6;function m0(e,t){return e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0}function x0(e,t){const n=(o,r)=>o>=t.x0&&o<=t.x1&&r>=t.y0&&r<=t.y1;if(e.cx.length===1)return Number.isFinite(e.cx[0])&&n(e.cx[0],e.cy[0]);for(let o=1;o<e.cx.length;o++){const[r,s,i,l]=[e.cx[o-1],e.cy[o-1],e.cx[o],e.cy[o]];if(![r,s,i,l].every(Number.isFinite))continue;const c=Math.max(1,Math.ceil(Math.hypot(i-r,l-s)/po));for(let d=0;d<=c;d++)if(n(r+(i-r)*d/c,s+(l-s)*d/c))return!0}return!1}function v0({plot:e,card:t,traces:n,obstacles:o}){if(t.width<=0||t.height<=0||t.width>e.x1-e.x0-ht*2||t.height>e.y1-e.y0-ht*2)return;const r=e.x0+ht,s=e.x1-ht-t.width,i=e.y0+ht,l=e.y1-ht-t.height;return[{x:s,y:i},{x:r,y:l},{x:s,y:l},{x:r,y:i}].find(d=>{const h={x0:d.x-on,y0:d.y-on,x1:d.x+t.width+on,y1:d.y+t.height+on};return!n.some(f=>x0(f,h))&&!o.some(f=>m0(h,f))})}function b0(e){const t=[],n=[];let o=!0;for(let r=e.y0;r<=e.y1+po;r+=po){const s=Math.min(r,e.y1);t.push(o?e.x0:e.x1,o?e.x1:e.x0),n.push(s,s),o=!o}return{cx:t,cy:n}}function y0(e,t){return e?.includes(t)??!1}function Jr(e,t){const{reckoned:n,spans:o}=e.data;return n?.some(r=>t>=r.from&&t<=r.to)?"modelled":o?.some(r=>t>=r.from&&t<=r.to&&r.status==="recorded")?"recorded":"measured"}function w0(e){const{x:t,y:n,y2:o}=e.data;let r=!0;for(let i=0;i<t.length;i++)if(!Number.isFinite(t[i])||i>0&&t[i]<t[i-1]){r=!1;break}if(r)return e;const s=t.map((i,l)=>l).filter(i=>Number.isFinite(t[i])).sort((i,l)=>t[i]-t[l]||i-l);return{...e,data:{x:s.map(i=>t[i]),y:s.map(i=>n[i]),...o?{y2:s.map(i=>o[i])}:{}}}}function k0(e,t,n){const o=e.data.x,r=e.data.y,s=Math.min(o.length,r.length);if(s===0||t<o[0]||t>o[s-1])return null;let i=0,l=s-1;for(;i<l;){const g=i+l>>1;o[g]<t?i=g+1:l=g}const c=i,d=Math.max(0,c-1);if(o[c]!==t&&c>0&&y0(e.data.breaks,c))return null;const h=t-o[d]<=o[c]-t?d:c;if(n!==void 0&&Math.abs(o[h]-t)>n)return null;const f=o[c]-o[d];if(e.readBetween&&f>0&&o[c]!==t){const g=r[d]+(r[c]-r[d])*(t-o[d])/f;return Number.isFinite(g)?{index:h,x:t,y:g,currency:Jr(e,h)}:null}const m=r[h];if(!Number.isFinite(m))return null;const x=e.data.y2?.[h];return{index:h,x:o[h],y:m,...x!==void 0&&Number.isFinite(x)?{y2:x}:{},currency:Jr(e,h)}}function $0(e){const t=new Set;for(const n of e)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&t.add(o);return[...t].sort((n,o)=>n-o)}function es(e,t,n){if(e.length===0)return null;if(t===null)return e[e.length-1];let o=0,r=e.length-1;for(;o<r;){const i=o+r>>1;e[i]<t?o=i+1:r=i}let s=o+n;return e[o]!==t&&n>0&&(s-=1),e[Math.max(0,Math.min(e.length-1,s))]}function _0({x:e,y:t,size:n,color:o,text:r}){const s=n/2,i=`M 0 ${-s} L ${s} ${s*.8} L ${-s} ${s*.8} Z`,l=`M -0.9 ${-s*.42} H 0.9 V ${s*.2} H -0.9 Z`,c=`M -0.9 ${s*.4} H 0.9 V ${s*.64} H -0.9 Z`;return a.jsx(Se,{text:r,focusable:!0,children:a.jsxs("g",{role:"img","aria-label":r,"data-limit-crossing":"",transform:`translate(${e} ${t})`,children:[a.jsx("title",{}),a.jsx("circle",{r:12,fill:"transparent"}),a.jsx("path",{d:`${i} ${l} ${c}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),a.jsx("path",{d:i,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function Qa(e,t,n){return n==="above"?e>=t:e<=t}function M0({y:e,cx:t,cy:n,limit:o,limitY:r,bad:s,breaks:i=[],step:l=!1,minGapPx:c}){const d=(k,E,S)=>{if(!E)return{index:k,x:t[k],y:n[k],entered:!1};if(S===null)return{index:k,x:t[k],y:r,entered:!0};const P=n[k]-n[S],j=P===0?1:(r-n[S])/P;return{index:k,x:t[S]+(t[k]-t[S])*j,y:r,entered:!0}},h=new Set(i),f=[];let m=null,x=!1,g=!1,v=Number.NEGATIVE_INFINITY;for(let k=0;k<e.length;k++){if(!Number.isFinite(e[k])){m=null;continue}const E=Qa(e[k],o,s);if(E&&!g){const S=d(k,x,l||h.has(k)?null:m),P=f[f.length-1];P!==void 0&&S.x-v<c?P.spells++:f.push({...S,spells:1}),v=S.x}g=E,x=!0,m=k}return f}const S0=1;function j0(e,t,n,o,r){const s=n.to;if(s<1||s>=e.length)return!1;const i=o(e[s-1]),l=o(e[s]),c=r(t[s-1]),d=r(t[s]);return l>i?n.t.some((h,f)=>{const m=o(h),x=c+(d-c)*(m-i)/(l-i);return Math.abs(r(n.v[f])-x)>S0}):!1}function Vn(e,t,n,o){const r=t-e;if(r===0){const s=(n+o)/2;return()=>s}return s=>n+(s-e)/r*(o-n)}function go(e,t,n=5){if(e===t)return Array.from({length:n},()=>e);const r=(t-e)/(n-1),s=10**Math.floor(Math.log10(r)),l=([1,2,2.5,5,10].find(m=>m*s>=r)??10)*s,c=Math.ceil(e/l)*l,d=[];for(let m=0;d.length<n;m++){const x=c+m*l;if(x>t+l*.01)break;d.push(x)}if(d.length>=2)return d;const h=Math.floor(e/l)*l,f=Math.ceil(t/l)*l;return f>h?[h,f]:[h,h+l]}function Ja(e,t){const n=Math.floor(e/1e3);if(t>=36e5){const s=Math.floor(n/3600),i=Math.floor(n%3600/60),l=n%60;return`${s}:${String(i).padStart(2,"0")}:${String(l).padStart(2,"0")}`}const o=Math.floor(n/60),r=n%60;return`${o}:${String(r).padStart(2,"0")}`}function ts(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];for(let i=0;i<e.length;i++){const l=n(e[i]).toFixed(2),c=o(t[i]).toFixed(2),d=i===0||r.includes(i);s.push(`${d?"M":"L"}${l},${c}`),d&&mo(i,e.length,r)&&s.push(`L${l},${c}`)}return s.join(" ")}function mo(e,t,n){return e+1>=t||n.includes(e+1)}function E0(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let i=o(t[0]).toFixed(2);const l=n(e[0]).toFixed(2);s.push(`M${l},${i}`),mo(0,e.length,r)&&s.push(`L${l},${i}`);for(let c=1;c<e.length;c++){const d=n(e[c]).toFixed(2),h=o(t[c]).toFixed(2);if(r.includes(c)){s.push(`M${d},${h}`),mo(c,e.length,r)&&s.push(`L${d},${h}`),i=h;continue}s.push(`H${d}`),h!==i&&s.push(`V${h}`),i=h}return s.join(" ")}function A0(e,t,n,o,r,s=[],i=[],l=[]){if(e.length===0)return[];if(i.length===0&&l.length===0)return[{d:r(e,t,n,o,s)}];function c(v,k){const E=new Array(e.length);for(const S of v){const P=Math.min(e.length-1,S.to);for(let j=Math.max(0,S.from);j<=P;j++)E[j]=k(S)}return E}const d=c(i,v=>v.status),h=c(l,v=>v.basis),f=new Set(s),m=[];let x=0;const g=(v,k)=>{const E=v>0&&!f.has(v)?v-1:v,S=R=>R.slice(E,k+1),P=[];for(const R of s)R>E&&R<=k&&P.push(R-E);const j=r(S(e),S(t),n,o,P);j!==""&&m.push({status:d[v],basis:h[v],d:j})};for(let v=1;v<=e.length;v++)(v===e.length||d[v]!==d[x]||h[v]!==h[x])&&(g(x,v-1),x=v);return m}function ei(e,t,n,o,r){if(e.length===0)return"";const s=Math.min(e.length,t.length,n.length);if(s===0)return"";const i=[];for(let l=0;l<s;l++){const c=o(e[l]).toFixed(2),d=r(n[l]).toFixed(2);i.push(`${l===0?"M":"L"}${c},${d}`)}for(let l=s-1;l>=0;l--){const c=o(e[l]).toFixed(2),d=r(t[l]).toFixed(2);i.push(`L${c},${d}`)}return i.push("Z"),i.join(" ")}function R0(e,t,n,o){const r=[];for(const s of t){const{bandLo:i,bandHi:l,bandKind:c}=s;if(!i||!l||c===void 0)continue;const d=[];for(let f=s.from;f<=s.to&&f<e.length;f++)d.push(e[f]);const h=ei(d,i,l,n,o);h!==""&&r.push({d:h,kind:c})}return r}function ns(e,t,n,o){if(e===t){const d=(n+o)/2;return()=>d}const r=e>0?e:1e-9,s=t>r?t:r*10,i=Math.log10(r),c=Math.log10(s)-i;if(c===0){const d=(n+o)/2;return()=>d}return d=>{const h=d>0?d:r;return n+(Math.log10(h)-i)/c*(o-n)}}function I0(e,t,n=5){if(!(e>0)||!(t>0)||t<=e)return go(e,t,n);const o=Math.log10(e),r=Math.log10(t);if(r-o<1)return go(e,t,n);const i=Math.ceil(o),l=Math.floor(r),c=Math.max(1,Math.ceil((l-i+1)/n)),d=[];for(let h=i;h<=l;h+=c)d.push(10**h);return d.length>0?d:[e,t]}const Kn=.86,os=[[0,-1.15],[1.05,.8],[-1.05,.8]],rs=.3,$e={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:Kn,triangle:os,outlineWidth:rs,keylineWidth:.2,reach:Math.max(Math.hypot(Kn,Kn),...os.map(([e,t])=>Math.hypot(e,t)))+rs/2},T0={"aria-hidden":!0};function ti(e,t,n,o){const r=$e.squareHalf;return(e==="modelled"?$e.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([i,l])=>[t+i*o,n+l*o])}const ni=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function oi(e,t,n){const o=e==="current"?0:$e.outlineWidth;return t*(o+2*n*$e.keylineWidth)}function C0({x:e,y:t,r:n,state:o="current",keyline:r=!1}){const s=o==="current"?"":ti(o,0,0,n).map(([i,l])=>`${i},${l}`).join(" ");return a.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...T0,children:[r&&ni.map(({ring:i,color:l,widths:c})=>{const d={"data-vessel-keyline":i,fill:"none",stroke:l,strokeWidth:oi(o,n,c),strokeLinejoin:"round"};return o==="current"?a.jsx("circle",{r:n,...d},i):a.jsx("polygon",{points:s,...d},i)}),o==="current"?a.jsx("circle",{r:n,fill:$e.color}):a.jsx("polygon",{points:s,fill:o==="lost"?"none":re[o].color,stroke:o==="lost"?$e.lost.color:$e.color,strokeWidth:n*$e.outlineWidth,strokeLinejoin:"round"})]})}function cn(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function ri(e,t,n,o,r){if(e.beginPath(),t==="current"){e.arc(n,o,r,0,Math.PI*2);return}ti(t,n,o,r).forEach(([s,i],l)=>{l===0?e.moveTo(s,i):e.lineTo(s,i)}),e.closePath()}function P0(e,t,n,o,r){e.save(),e.lineJoin="round";for(const{color:s,widths:i}of ni)ri(e,t,n,o,r),e.strokeStyle=s,e.lineWidth=oi(t,r,i),e.stroke();e.restore()}function L0(e,t,n,o,r,s=4,{keyline:i=!1}={}){i&&P0(t,n,o,r,s);const l=cn(e,$e.cssVar,$e.fallback);if(t.save(),ri(t,n,o,r,s),n==="current")t.fillStyle=l,t.fill();else{if(n!=="lost"){const c=re[n];t.fillStyle=cn(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=n==="lost"?cn(e,$e.lost.cssVar,$e.lost.fallback):l,t.lineWidth=s*$e.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function mv(e,t,n,o=4,r={}){const{held:s,modelled:i}=n;s!==void 0&&i!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=cn(e,re.modelled.cssVar,re.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(i.x,i.y),t.stroke(),t.restore());for(const l of["lost","held","current","modelled"]){const c=n[l];c!==void 0&&L0(e,t,l,c.x,c.y,o,r)}}const xt=56;function si(e,t,n,o){const r=Math.max(0,Math.min(t-1,Math.floor(n))),s=Math.max(0,Math.min(t-1,Math.floor(o))),i=Math.min(t-1,r+1),l=Math.min(t-1,s+1),c=Math.max(0,Math.min(1,n-r)),d=Math.max(0,Math.min(1,o-s)),h=e[s*t+r]+(e[s*t+i]-e[s*t+r])*c,f=e[l*t+r]+(e[l*t+i]-e[l*t+r])*c;return h+(f-h)*d}const ss=400,N0=16,O0=8,as=.06,F0=3.3,D0=.6,z0=60,H0=40,is=[6,12],ls=[48,96],rn=2;function Zn(e,t,n){const o=Math.max(0,Math.min(1,(n-e)/(t-e)));return o*o*(3-2*o)}function cs(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function ds(e,t){const n=t/e,o=e<=t?.07:.09,r=F0**Math.exp(-((e-t)**2)/(2*o**2*t**2));return n**5*Math.exp(-1.25*n**4)*r}function ai(e,t,n){if(!(e>0)||!(t>0)||!(n>0)||!Number.isFinite(e+t+n))return[];const o=Math.sqrt(n*2*Math.PI/ss),r=ds(o,o),s=[];for(let i=-rn;i<=N0*rn;i++){const l=ss/2**(i/rn),c=l/e,d=Zn(is[0],is[1],c)*(1-Zn(ls[0],ls[1],c))*(1-Zn(t,2*t,l));if(d<=.001)continue;const h=2*Math.PI/l,f=Math.sqrt(n*h),m=Math.sqrt(Math.min(1,ds(f,o)/r)),x=(f>=o?as:as*m)/Math.sqrt(rn),g=(z0+(cs(i,1)-.5)*2*H0)*Math.PI/180;s.push({kx:h*Math.sin(g),ky:h*Math.cos(g),k:h,amplitude:x/h,omega:f,phase:cs(i,2)*2*Math.PI,weight:d})}return s.slice(0,O0)}function B0(e,t,n,o){let r=0;for(const s of e)r+=s.weight*s.amplitude*Math.cos(s.kx*t+s.ky*n-s.omega*o+s.phase);return r}const dn=ii(-.25,.3,.92),W0=2.6,X0=ii(dn[0],dn[1],dn[2]+1),U0=.8,G0=3,Y0=.95,q0=.35,V0=235,K0=.5,Z0=.35;function ii(e,t,n){const o=Math.hypot(e,t,n);return[e/o,t/o,n/o]}function Q0(e,t,n,o){const{east0:r,north0:s,dx:i,dy:l,seconds:c,colour:d,waves:h,isSea:f}=o,[m,x,g]=dn,[v,k,E]=X0,S=h.length,P=new Float64Array(S*t),j=new Float64Array(S*t),R=new Float64Array(S*n),_=new Float64Array(S*n);for(let N=0;N<S;N++){const U=h[N];for(let B=0;B<t;B++){const te=U.kx*(r+(B+.5)*i);P[N*t+B]=Math.cos(te),j[N*t+B]=Math.sin(te)}for(let B=0;B<n;B++){const te=U.ky*(s-(B+.5)*l)-U.omega*c+U.phase;R[N*n+B]=Math.cos(te),_[N*n+B]=Math.sin(te)}}const C=new Float64Array(S),$=new Float64Array(S),L=h.map(N=>N.kx*N.weight*N.amplitude),W=h.map(N=>N.ky*N.weight*N.amplitude),G=h.map(N=>D0*N.k*N.weight*N.amplitude);for(let N=0;N<n;N++)for(let U=0;U<t;U++){const B=(N*t+U)*4;if(f&&!f(U,N)){e[B+3]=0;continue}let te=0,ie=0,le=1;for(let J=0;J<S;J++){const ne=P[J*t+U],Ve=j[J*t+U],Ke=R[J*n+N],Me=_[J*n+N];C[J]=ne*Ke-Ve*Me,$[J]=Ve*Ke+ne*Me}for(let J=0;J<S;J++){const ne=S>1?1+U0*C[(J+G0)%S]:1;te-=L[J]*C[J]*ne,ie-=W[J]*C[J]*ne,le-=G[J]*$[J]*ne}const M=1/Math.sqrt(te*te+ie*ie+le*le),X=(te*m+ie*x+le*g)*M-g,ce=1+W0*X;let _e=0;const pe=(te*v+ie*k+le*E)*M;if(pe>Y0){let J=pe;for(let ne=0;ne<7;ne++)J*=J;_e=255*q0*J}const Ce=Math.max(0,ce-1)*Z0,xe=Math.min(1,ce)*K0;e[B]=d.r*xe+(255-d.r*xe)*Ce+_e,e[B+1]=d.g*xe+(255-d.g*xe)*Ce+_e,e[B+2]=d.b*xe+(255-d.b*xe)*Ce+_e,e[B+3]=V0}}function us(e){const t=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function J0(e,t){const n=us(t),o=Math.max(e.r,e.g,e.b,1),r=c=>({r:Math.min(255,e.r*c),g:Math.min(255,e.g*c),b:Math.min(255,e.b*c)});let s=0,i=255/o;for(let c=0;c<32;c++){const d=(s+i)/2;us(r(d))<n?s=d:i=d}const l=r((s+i)/2);return{r:Math.round(l.r),g:Math.round(l.g),b:Math.round(l.b)}}const eg=192,tg=30,ng="--color-info-mark",og=.42;function rg(e,t){const n=e.view==="plan",o=t.scaleX,r=t.scaleYPrimary,s=1/(o(1)-o(0)),i=1/(r(1)-r(0)),l=E=>(E-o(0))*s,c=E=>(E-r(0))*i,d=Math.min(o(e.bounds.x0),o(e.bounds.x1)),h=Math.max(o(e.bounds.x0),o(e.bounds.x1)),f=Math.min(r(e.bounds.y0),r(e.bounds.y1)),m=Math.max(r(e.bounds.y0),r(e.bounds.y1)),x=n?d:Math.max(t.plotX0,d),g=n?h:Math.min(t.plotX1,h),v=n?f:Math.max(t.plotY0,f),k=n?m:Math.min(t.plotY1,m);return n&&(h<t.plotX0||d>t.plotX1||m<t.plotY0||f>t.plotY1)||!(g-x>=1&&k-v>=1)||!Number.isFinite(s+i)?null:{left:x,top:v,width:g-x,height:k-v,x0:l(x),x1:l(g),y0:c(k),y1:c(v)}}function hs(e,t){if(!t)return null;e.fillStyle=t;const n=/^#([0-9a-f]{6})$/i.exec(String(e.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function sg(e,t,n){const o=hs(t,getComputedStyle(e).getPropertyValue(ng).trim());if(!o)return null;const r=n?hs(t,n):null;return r?J0(r,o):o}function ag(e,t,n,o,r,s){const i=xt,l=(n.x1-n.x0)/i,c=(n.y1-n.y0)/i,d=t.sea,h=o.scaleYPrimary(t.bounds.y0)<o.scaleYPrimary(t.bounds.y1),f=d&&d.size>1&&d.heights.length>=d.size*d.size?(x,g)=>{const v=h?g:i-1-g;return si(d.heights,d.size,x/(i-1)*(d.size-1),v/(i-1)*(d.size-1))<0}:void 0,m=e.createImageData(i,i);Q0(m.data,i,i,{east0:t.origin.east+n.x0,north0:t.origin.north+n.y1,dx:l,dy:c,seconds:r,colour:s,waves:ai(Math.max(l,c),n.x1-n.x0,t.gravity),isSea:f}),e.putImageData(m,0,0)}function ig(e,t,n,o,r){const{width:s,height:i}=e.canvas,l=lg(t,n,s),c=l.length>1?(l[l.length-1]-l[0])/(l.length-1):n.x1-n.x0,d=ai(c,n.x1-n.x0,t.gravity),h=(t.bearingDeg??90)*Math.PI/180,f=g=>(g-n.x0)/(n.x1-n.x0)*s,m=g=>(n.y1-g)/(n.y1-n.y0)*i;e.clearRect(0,0,s,i),e.beginPath(),l.forEach((g,v)=>{const k=B0(d,t.origin.east+g*Math.sin(h),t.origin.north+g*Math.cos(h),o);v===0?e.moveTo(f(g),m(k)):e.lineTo(f(g),m(k))});const x=`${r.r}, ${r.g}, ${r.b}`;e.strokeStyle=`rgba(${x}, 0.9)`,e.lineWidth=1,e.stroke(),e.lineTo(f(l[l.length-1]),i),e.lineTo(f(l[0]),i),e.closePath(),e.fillStyle=`rgba(${x}, ${og})`,e.fill()}function lg(e,t,n){const o=(e.samples??[]).filter(r=>r>t.x0&&r<t.x1);return e.samples&&e.samples.length>1?[t.x0,...o,t.x1]:Array.from({length:n+1},(r,s)=>t.x0+s/n*(t.x1-t.x0))}function cg({layer:e,frame:t}){const n=rg(e,t),o=p.useRef(null),r=p.useRef(null);r.current=n?{layer:e,at:n,frame:t}:null;const s=n?e.view==="plan"?xt:Math.max(1,Math.min(eg,Math.round(n.width))):0,i=n?e.view==="plan"?xt:Math.max(1,Math.round(n.height*s/n.width)):0,l=e.tint;return p.useEffect(()=>{const c=o.current,d=c?.getContext("2d")??null;if(!c||!d||s===0||i===0)return;const h=sg(c,d,l);if(!h)return;const f=()=>{const S=r.current;if(!S)return;const P=Date.now()/1e3;S.layer.view==="plan"?ag(d,S.layer,S.at,S.frame,P,h):ig(d,S.layer,S.at,P,h)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let x=!0;const g=typeof IntersectionObserver=="function"?new IntersectionObserver(S=>{x=S.some(P=>P.isIntersecting)}):null;g?.observe(c);let v=Number.NEGATIVE_INFINITY,k=0;const E=S=>{k=requestAnimationFrame(E),!(!x||document.hidden||S-v<1e3/tg)&&(v=S,f())};return k=requestAnimationFrame(E),()=>{cancelAnimationFrame(k),g?.disconnect()}},[s,i,l]),n?a.jsx("g",{"aria-hidden":"true","data-plot-layer":e.id,"data-plot-layer-kind":"water",children:a.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:a.jsx("canvas",{ref:o,width:s,height:i,style:{display:"block",width:"100%",height:"100%",imageRendering:e.view==="plan"?"pixelated":"auto"}})})}):null}const dg={faint:.45,normal:.85,bright:1},ug=1.5,hg=5,fg=.9,Et=7,At=6,Qn=10,vt=9,Be=12,pg=6.2,Jn=4,gg=9,mg=13,xg=.1,Ot={paintOrder:"stroke",strokeWidth:3,strokeLinejoin:"round"},eo=5,vg=.5,bg=.5;function qe(e){return ae[e.tone??"neutral"]}function Bt(e){return ke[e.tone??"neutral"]}function Le(e){return dg[e.emphasis??"normal"]}function Fe(e,t){return t.axis==="secondary"?e.scaleYSecondary:e.scaleYPrimary}function yg(e){const t=e.axis==="secondary"?"secondary":"primary";switch(e.kind){case"series":return{xs:e.points.map(n=>n.x),ys:e.points.map(n=>n.y),axis:t};case"region":return{xs:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.x),ys:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.y),axis:t};case"rule":return e.along==="y"?{xs:[],ys:[e.value],axis:t}:{xs:[e.value],ys:[],axis:t};case"marker":case"annotation":return{xs:[e.at.x],ys:[e.at.y],axis:t};default:return{xs:[],ys:[],axis:t}}}const Uo=5.8,ft=11,fs=4;function wg(e,t){const n=t.text.length*Uo,{frame:o}=t,r=t.anchorX+t.gap,s=r+n<=o.plotX1-4?"start":"end",i=s==="start"?r:t.anchorX-t.gap,l=s==="start"?i:i-n,c=l+n,d=f=>e.some(m=>l<m.x1&&c>m.x0&&f-ft<m.y1&&f+2>m.y0);let h=t.anchorY+3;for(let f=0;f<fs&&d(h);f++)h+=ft;if(d(h)){h=t.anchorY+3;for(let f=0;f<fs&&d(h);f++)h-=ft}return h=Math.min(Math.max(h,o.plotY0+ft),o.plotY1-ft),e.push({x0:l,x1:c,y0:h-ft,y1:h+2}),{x:i,y:h,anchor:s}}function kg(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function $g(e){if(e.length===0)return"";const t=[`M${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`];for(let n=1;n<e.length;n++)t.push(`H${e[n].x.toFixed(2)}`,`V${e[n].y.toFixed(2)}`);return t.join(" ")}function li(e,t,n){if(e.length===0)return[];const o=e[0],r=e[e.length-1],s=[...e];if(t==="right"||t==="left"){const i=t==="right"?n.plotX1:n.plotX0;s.push({x:i,y:r.y},{x:i,y:o.y})}else{const i=t==="above"?n.plotY0:n.plotY1;s.push({x:r.x,y:i},{x:o.x,y:i})}return s}function _g(e,t){const n=[];for(const o of e){if(o.kind==="relief"||o.kind==="water"){const i=Fe(t,o),{x0:l,y0:c,x1:d,y1:h}=o.bounds;n.push([{x:t.scaleX(l),y:i(c)},{x:t.scaleX(d),y:i(c)},{x:t.scaleX(d),y:i(h)},{x:t.scaleX(l),y:i(h)}]);continue}if(o.kind!=="region"||o.hatched)continue;const r=Fe(t,o),s=o.boundary.map(i=>({x:t.scaleX(i.x),y:r(i.y)}));if(!(s.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...s,...o.boundaryHigh.map(i=>({x:t.scaleX(i.x),y:r(i.y)})).reverse()])}else n.push(li(s,o.side,t))}return(o,r)=>n.some(s=>{let i=!1;for(let l=0,c=s.length-1;l<s.length;c=l++){const d=s[l],h=s[c];d.y>r!=h.y>r&&o<(h.x-d.x)*(r-d.y)/(h.y-d.y)+d.x&&(i=!i)}return i})}function Mg({layer:e,frame:t}){if(e.stops.length===0)return null;const n=Fe(t,e),o=e.along==="y"?t.plotY1-t.plotY0:t.plotX1-t.plotX0;if(o<=0)return null;const r=e.along==="y"?t.plotY0:t.plotX0,s=e.along==="y"?n:t.scaleX,i=e.maxOpacity??bg,l=e.tint??qe(e),c=e.blur!==void 0?Math.ceil(e.blur*3):0,d=`plot-field-${e.id}-${t.uid}`,h=`plot-field-blur-${e.id}-${t.uid}`,f=e.along==="y"?t.plotY1:t.plotX1,m=e.stops.map(x=>({offset:(s(x.at)-r)/o*100,intensity:Math.max(0,Math.min(1,x.intensity))})).sort((x,g)=>x.offset-g.offset);return a.jsxs(a.Fragment,{children:[a.jsxs("defs",{children:[a.jsx("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:t.plotX0,y1:t.plotY0,x2:e.along==="x"?f:t.plotX0,y2:e.along==="y"?f:t.plotY0,children:m.map((x,g)=>a.jsx("stop",{offset:`${x.offset.toFixed(2)}%`,stopColor:l,stopOpacity:i*x.intensity},g))}),e.blur!==void 0&&a.jsx("filter",{id:h,children:a.jsx("feGaussianBlur",{stdDeviation:e.blur})})]}),a.jsx("rect",{"data-plot-layer":e.id,"data-plot-layer-kind":"field",x:t.plotX0-c,y:t.plotY0-c,width:t.plotX1-t.plotX0+2*c,height:t.plotY1-t.plotY0+2*c,fill:`url(#${d})`,filter:e.blur!==void 0?`url(#${h})`:void 0})]})}const Sg=6,pt=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function jg(e){const t=Math.max(0,Math.min(1,e));for(let n=1;n<pt.length;n++)if(t<=pt[n][0]){const[o,r]=pt[n-1],[s,i]=pt[n],l=s>o?(t-o)/(s-o):0;return[Math.round(r[0]+(i[0]-r[0])*l),Math.round(r[1]+(i[1]-r[1])*l),Math.round(r[2]+(i[2]-r[2])*l)]}return pt[pt.length-1][1]}const Eg=[150,156,160],Ag=[200,80,70];function Rg(e,t){if(t===3)return Eg;if(t!==1&&t!==2)return e;const n=.3*e[0]+.59*e[1]+.11*e[2],o=(s,i,l)=>s+(l-s)*i,r=e.map(s=>o(o(s,.5,n),.06,235));return t===1?r:r.map((s,i)=>o(s,.3,Ag[i]))}function Ig(e,t){const n=2*(t-1),o=(e%n+n)%n;return o<t?o:n-o}function Tg(e,t,n,o,r,s,i){const l=e[s*n+i],c=r?Ig(l,o):l,[d,h,f]=Rg(jg(c/(o-1)),t[s*n+i]),m=i>0?e[s*n+i-1]:l,x=s>0?e[(s-1)*n+i]:l,g=m!==l||x!==l?.5:1;return`rgb(${Math.round(d*g)}, ${Math.round(h*g)}, ${Math.round(f*g)})`}function Cg(e,t){const{bounds:n}=e,o=Fe(t,e),r=t.scaleX(n.x0),s=t.scaleX(n.x1),i=o(n.y0),l=o(n.y1),c=Math.abs(s-r)/xt,d=Math.abs(l-i)/xt;return!(c>0)||!(d>0)?null:{left:Math.min(r,s),top:Math.min(i,l),cellW:c,cellH:d,flipRows:i<l}}function Pg(e,t){const{size:n,values:o}=e;if(!t||n<2||o.length<n*n)return null;const{left:r,top:s,cellW:i,cellH:l,flipRows:c}=t;let d=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY;for(let j=0;j<n*n;j++){const R=o[j];if(!Number.isFinite(R))return null;R<d&&(d=R),R>h&&(h=R)}const f=h-d,m=e.bandMetres!=null&&e.bandMetres>0?e.bandMetres:null,x=e.veil,g=Math.max(2,e.bands??Sg),v=xt,k=new Int16Array(v*v),E=new Uint8Array(v*v),S=x!=null&&x.length>=n*n;for(let j=0;j<v;j++)for(let R=0;R<v;R++){const _=R/(v-1)*(n-1),C=j/(v-1)*(n-1);S&&(E[j*v+R]=x[Math.round(C)*n+Math.round(_)]??0);const $=si(o,n,_,C);if(m!=null){k[j*v+R]=Math.floor($/m);continue}const L=f>0?($-d)/f:.5;k[j*v+R]=Math.max(0,Math.min(g-1,Math.floor(L*g)))}const P=[];for(let j=0;j<v;j++){const R=c?j:v-1-j;let _=0,C="";for(let $=0;$<=v;$++){const L=$<v?Tg(k,E,v,g,m!=null,j,$):"";if($===0){C=L;continue}L===C&&$<v||(P.push(a.jsx("rect",{x:r+_*i,y:s+R*l,width:($-_)*i+.5,height:l+.5,fill:C},`${j}-${_}`)),_=$,C=L)}}return P}function Lg({layer:e,frame:t}){const n=Cg(e,t),{values:o,size:r,veil:s,bandMetres:i,bands:l}=e,{left:c,top:d,cellW:h,cellH:f,flipRows:m}=n??{},x=p.useMemo(()=>Pg(e,n),[o,r,s,i,l,c,d,h,f,m]);return x?a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:Le(e),"aria-hidden":"true",children:x}):null}function Ng({layer:e,frame:t}){const n=p.useId(),o=Fe(t,e),r=d=>({x:t.scaleX(d.x),y:o(d.y)}),s=e.boundary.map(r);if(s.length<2)return null;const i=e.side==="between"?[...s,...(e.boundaryHigh??[]).map(r).reverse()]:li(s,e.side,t);if(e.side==="between"&&!e.boundaryHigh)return null;const l=e.side==="right"?t.plotX1-4:e.side==="left"?t.plotX0+11:s[s.length-1].x,c=(t.plotY0+t.plotY1)/2;return a.jsxs(a.Fragment,{children:[e.hatched&&a.jsx("defs",{children:a.jsx("pattern",{id:n,width:eo,height:eo,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:a.jsx("line",{x1:0,y1:0,x2:0,y2:eo,stroke:qe(e),strokeWidth:1,strokeOpacity:e.opacity??vg})})}),a.jsx("polygon",{"data-plot-layer":e.id,"data-plot-layer-kind":"region","data-hatched":e.hatched?"":void 0,points:i.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:e.hatched?`url(#${n})`:qe(e),fillOpacity:e.hatched?void 0:e.opacity??xg}),t.labels&&e.label&&a.jsx("text",{x:l,y:c,transform:`rotate(-90 ${l} ${c})`,textAnchor:"middle",fontSize:gg,letterSpacing:"0.14em",fill:"var(--color-text-muted)",stroke:"var(--color-surface-raised)",...Ot,children:e.label})]})}function Og({layer:e,frame:t}){const n=Fe(t,e),o=e.points.map(s=>({x:t.scaleX(s.x),y:n(s.y)}));if(o.length===0)return null;const r=ug*(e.weight??1);if(e.style==="scatter"){const s=e.radius===void 0?r:Math.abs(t.scaleX(e.radius)-t.scaleX(0));return a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",fill:qe(e),opacity:Le(e),children:o.map((i,l)=>a.jsx("circle",{cx:i.x,cy:i.y,r:s},l))})}return a.jsx("path",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",d:e.style==="step"?$g(o):kg(o),fill:"none",stroke:qe(e),strokeOpacity:Le(e),strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:e.dashed?"5 3.5":void 0})}function Fg({layer:e,frame:t}){const n=Fe(t,e),o=e.dashed??!0,r=qe(e),s=e.along==="y",i=s?n(e.value):t.scaleX(e.value);return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"rule",x1:s?t.plotX0:i,x2:s?t.plotX1:i,y1:s?i:t.plotY0,y2:s?i:t.plotY1,stroke:r,strokeOpacity:Le(e),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),t.labels&&e.label&&a.jsx("text",{x:s?t.plotX1-4:i+3,y:s?i-3:t.plotY0+10,textAnchor:s?"end":"start",fill:Bt(e),fontSize:vt,children:e.label})]})}function Dg({layer:e,frame:t,placed:n}){const o=Fe(t,e),r=t.scaleX(e.at.x),s=o(e.at.y),i=e.across??"x",l=qe(e),c=t.labels&&e.label?wg(n,{anchorX:r,anchorY:s,gap:Et+3,text:e.label,frame:t}):null;return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"annotation",x1:i==="x"?r-Et:r,x2:i==="x"?r+Et:r,y1:i==="x"?s:s-Et,y2:i==="x"?s:s+Et,stroke:l,strokeOpacity:Le(e),strokeWidth:1.75,strokeLinecap:"round"}),c&&e.label&&a.jsx("text",{x:c.x,y:c.y,textAnchor:c.anchor,fontSize:vt,letterSpacing:"0.05em",fill:Bt(e),fillOpacity:Le(e),children:e.label})]})}function zg({layer:e,frame:t}){const n=Fe(t,e),o=t.scaleX(e.at.x),r=n(e.at.y)+(e.offsetPx??0),s=hg*(e.scale??1),i=qe(e),l=e.shape??"dot",c={"data-plot-layer":e.id,"data-plot-layer-kind":"marker",opacity:Le(e)},d=l==="none"?null:l==="vessel"?a.jsx("g",{...c,children:a.jsx(C0,{state:e.markState??"current",x:o,y:r,r:s*fg,keyline:!0})}):l==="dot"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:i,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):l==="ring"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:"none",stroke:i,strokeWidth:1.5}):l==="cross"?a.jsx("path",{...c,d:`M${o-s},${r} L${o+s},${r} M${o},${r-s} L${o},${r+s}`,stroke:i,strokeWidth:1.5,strokeLinecap:"round"}):l==="chevron-up"||l==="chevron-down"?a.jsx("polyline",{...c,points:l==="chevron-up"?`${o-s},${r+s*.5} ${o},${r-s*.5} ${o+s},${r+s*.5}`:`${o-s},${r-s*.5} ${o},${r+s*.5} ${o+s},${r-s*.5}`,fill:"none",stroke:i,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null,h=(e.label?.length??0)*Uo/2+3,f=l==="none"?Math.min(Math.max(o,t.plotX0+h),t.plotX1-h):o+s+3,m=l==="none"?Math.min(Math.max(r+3,t.plotY0+vt+3),t.plotY1-4):r+3;return a.jsxs(a.Fragment,{children:[d,t.labels&&e.label&&a.jsx("text",{x:f,y:m,textAnchor:l==="none"?"middle":void 0,fontSize:vt,fill:Bt(e),fillOpacity:Le(e),stroke:"var(--color-surface-raised)",...Ot,children:e.label})]})}function Hg({layer:e,frame:t,row:n,edges:o}){const r=e.caption?2:1;if(e.anchor==="left-edge"||e.anchor==="right-edge"){const g=e.anchor==="left-edge"?t.plotX0+At+n*Be:t.plotX1-At-n*Be,v=t.plotY1-34;return a.jsx("text",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",x:g,y:v,transform:`rotate(-90 ${g} ${v})`,fontSize:vt,letterSpacing:"0.14em",fill:Bt(e),fillOpacity:Le(e),stroke:"var(--color-surface-raised)",...Ot,children:e.text})}const s=e.anchor.startsWith("top"),i=e.anchor.endsWith("right"),l=g=>At+(g?mg:0),c=i?t.plotX1-l(o.right):t.plotX0+l(o.left),d=n*(r*Be+2),h=s?t.plotY0+At+Qn+d:t.plotY1-At-d,f=h-Be,m=Math.max(e.text.length*pg,(e.caption?.length??0)*Uo)+2*Jn,x=(s?h:h-(e.caption?Be:0))-Qn-1;return a.jsxs("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",textAnchor:i?"end":"start",children:[a.jsx("rect",{x:i?c-m+Jn:c-Jn,y:x,width:m,height:r*Be+1,rx:3,fill:"var(--color-surface-raised)",fillOpacity:.8}),e.caption&&a.jsx("text",{x:c,y:s?h:f,fontSize:vt,letterSpacing:"0.05em",fill:"var(--color-text-faint)",stroke:"var(--color-surface-raised)",...Ot,children:e.caption}),a.jsx("text",{x:c,y:e.caption&&s?h+Be:h,fontSize:Qn,fontWeight:700,fill:Bt(e),fillOpacity:Le(e),stroke:"var(--color-surface-raised)",...Ot,children:e.text})]})}const ps={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},Bg={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function to({layers:e,frame:t,pass:n}){const o=e.map((l,c)=>({layer:l,index:c})).filter(({layer:l})=>Bg[l.kind]===n).sort((l,c)=>ps[l.layer.kind]-ps[c.layer.kind]||(l.layer.z??0)-(c.layer.z??0)||l.index-c.index),r=new Map,s=[],i={left:e.some(l=>l.kind==="caption"&&l.anchor==="left-edge"||l.kind==="region"&&l.side==="left"&&!!l.label),right:e.some(l=>l.kind==="caption"&&l.anchor==="right-edge"||l.kind==="region"&&l.side==="right"&&!!l.label)};return a.jsx(a.Fragment,{children:o.map(({layer:l,index:c})=>{const d=`${l.id}-${c}`;switch(l.kind){case"relief":return a.jsx(Lg,{layer:l,frame:t},d);case"water":return a.jsx(cg,{layer:l,frame:t},d);case"field":return a.jsx(Mg,{layer:l,frame:t},d);case"region":return a.jsx(Ng,{layer:l,frame:t},d);case"series":return a.jsx(Og,{layer:l,frame:t},d);case"rule":return a.jsx(Fg,{layer:l,frame:t},d);case"annotation":return a.jsx(Dg,{layer:l,frame:t,placed:s},d);case"marker":return a.jsx(zg,{layer:l,frame:t},d);case"caption":{const h=r.get(l.anchor)??0;return r.set(l.anchor,h+1),a.jsx(Hg,{layer:l,frame:t,row:h,edges:i},d)}default:return null}})})}function Wg(e){return e.map(t=>t.description).filter(t=>typeof t=="string"&&t.length>0)}const gs=11,sn=3,an=4,ms=(e,t)=>e.x0<t.x1&&t.x0<e.x1&&e.y0<t.y1&&t.y0<e.y1;function Xg(e,t,n,o,r){let s=0,i=1;const l=n-e,c=o-t,d=[[-l,e-r.x0],[l,r.x1-e],[-c,t-r.y0],[c,r.y1-t]];for(const[h,f]of d){if(h===0&&f<0)return!1;if(h!==0){const m=f/h;h<0?s=Math.max(s,m):i=Math.min(i,m)}}return s<=i}function Ug(e,t){for(let n=1;n<e.cx.length;n++){const o=[e.cx[n-1],e.cy[n-1],e.cx[n],e.cy[n]];if(o.every(Number.isFinite)&&Xg(o[0],o[1],o[2],o[3],t))return!0}return!1}function Gg({labels:e,plot:t,obstacles:n,traces:o}){const r=[],s=new Map;for(const i of e){const l={y0:i.lineY-sn-gs,y1:i.lineY-sn},c={y0:i.lineY+sn,y1:i.lineY+sn+gs},d={x0:t.x1-an-i.width,x1:t.x1-an},h={x0:t.x0+an,x1:t.x0+an+i.width},f=[{...d,...l,anchor:"end"},{...d,...c,anchor:"end"},{...h,...l,anchor:"start"},{...h,...c,anchor:"start"}];let m=null;for(const x of f){if(!(x.x0>=t.x0&&x.x1<=t.x1&&x.y0>=t.y0&&x.y1<=t.y1)||r.some(k=>ms(x,k)))continue;const v=2*n.filter(k=>ms(x,k)).length+o.filter(k=>Ug(k,x)).length;(m===null||v<m.cost)&&(m={spot:x,cost:v})}if(m===null){s.set(i.id,null);continue}r.push(m.spot),s.set(i.id,{x:m.spot.anchor==="end"?m.spot.x1:m.spot.x0,y:m.spot.y1-2,anchor:m.spot.anchor})}return s}function xv(e,t,n,o="linear"){const r=n&&Yg(t,n)?0:t,s=n?o==="log"?xo(e,r).decimals:qg(e,r,n):0;return Oe(Ue(e,r),{decimals:s})}function Yg(e,t){const n=t.length>1?Math.abs(t[1]-t[0]):0;return n>0&&Math.abs(e)<n*1e-6}const no=3;function ci(e){return{figure:Number.parseFloat(e.replace(/[^\d.-]/g,"")),unit:e.replace(/[\d.,\s-]/g,"")}}function xo(e,t){const n=r=>ci(Oe(Ue(e,t),{decimals:r})),o=n(no);for(let r=0;r<no;r++)if(n(r).figure===o.figure)return{decimals:r,unit:o.unit};return{decimals:no,unit:o.unit}}function qg(e,t,n){const o=xo(e,t);let r=o.decimals;for(const s of n){const i=xo(e,s);i.unit===o.unit&&(r=Math.max(r,i.decimals))}return r}function vv(e){const t=ci(Oe(e,{decimals:3})),n=Math.abs(t.figure),o=Number.isFinite(n)&&n>0?Math.max(0,2-Math.floor(Math.log10(n))):0;return Oe(e,{decimals:o})}function oo(e,t,n){for(let o=n;o<6;o++){const r=e.map(s=>(s/t).toFixed(o));if(r.every((s,i)=>i===0||s!==r[i-1]))return o}return 6}const Vg=4,Kg=2.5;function Zg(e,t){if(e.length===0)return!1;const n=e[e.length-1]-t;return n===0?!0:e.length===1?!1:Math.sign(e[0]-t)!==Math.sign(n)}function Qg(e,t){return e==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:t?e==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const Jg=(e,t)=>Ja(e-t[0],t[1]-t[0]),bv=(e,t)=>Ja((e-t[0])*1e3,(t[1]-t[0])*1e3),ro={top:10,bottom:28,left:50};function di(e,t,n){const o=(s,i,l)=>Math.max(s,Math.min(l,i)),r=o(30,Math.round(e*.18),ro.left);return{top:ro.top,right:n?r:o(14,Math.round(e*.07),20),bottom:t<150?20:ro.bottom,left:r}}const xs=e=>e.length*6.5+6,em=4,tm=.4,nm=26,et=14,om=160,Re=16,ln=4,rm=6,Rt=(e,t)=>Math.min(e.length*6+8,t);function sm(e,t){const n=[];let o=0,r=0;for(const s of e)r>0&&r+s>t&&(o+=1,r=0),n.push({row:o,x:r}),r+=s+rm;return{rows:e.length===0?0:o+1,positions:n}}const vs=4,am=.03;function so(e,t){const n=Math.max(0,Math.floor(t/6));if(e.length<=n)return e;const o=e.lastIndexOf(" (");if(o>0&&e.length-o+4<=n){const r=n-(e.length-o)-3;return`${e.slice(0,r)}...${e.slice(o)}`}return n<4?"":`${e.slice(0,n-3)}...`}function bs(e,t){const n=e.split(/(?=M)/).filter(r=>r.length>0),o=[];for(const r of n){const s=[...r.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)];if(s.length<2)continue;const i=s[0],l=s[s.length-1];o.push(`${r.trim()} L${l[1]},${t} L${i[1]},${t} Z`)}return o.length>0?o.join(" "):null}function im(e,t,n,o,r=1){const s=[],i=nm*Math.max(.5,Math.min(2,r));for(let l=e+i/2;l<t;l+=i)for(let c=n+i/2;c<o;c+=i)s.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return s}const lm=120,cm=90,dm=70,um=35,hm=2,fm=12,ys=8,pm=2,We=14,wn=6,kn=12,gm=16,mm=12,xm=200,ws=10,vm=.2,ks=.6,$s="5 3",bm=.15,ym=.45,wm="the value is inside the shaded region";function km(e){return(e.type??"line")==="band"&&e.data.y2?[...e.data.y,...e.data.y2]:e.data.y}function $m({series:e,thresholds:t,yTickFormat:n}){const o=s=>s*wn,r=[];for(const s of e)r.push(o(s.label.length)+8);for(const s of t){if(s.kind==="marker"&&!s.label)continue;const i=s.label??n(s.value);r.push(o(i.length)+kn+8)}return Math.max(0,...r)+fm}function _m({width:e,height:t,hasSecondary:n,series:o,thresholds:r}){const s=r.filter(h=>h.label);if(o.length===0||s.length===0)return!1;const i=Math.max(...o.map(h=>h.label.length*6+8)),l=Math.max(...s.map(h=>(h.label?.length??0)*wn+kn)),c=di(e,t,n),d=e-c.left-c.right-et-gm;return i+l+mm>d}function yv({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:r=Jg,yTickFormat:s=Mm,yScalePrimary:i="linear",yScaleSecondary:l="linear",thresholds:c,legend:d="overlay",hideXAxis:h=!1,density:f="chart",spatial:m=!1,gridScale:x=1,layers:g,"aria-label":v,crosshair:k=!1,xKind:E="time",xReadFormat:S,xAxisLabel:P,yAxisLabel:j,ySecondaryAxisLabel:R,card:_,cardForms:C=1,width:$,height:L}){const W=p.useId(),G=f==="compact",N=G?"none":d,U=m,B=U||G,te=k&&!B&&e.some(u=>u.data.x.length>0),[ie,le]=p.useState(null),[M,X]=p.useState(!1),[ce,_e]=p.useState(""),[pe,Ce]=p.useState(null),[xe,J]=p.useState(null),ne=xe?.w===$&&xe.h===L?xe.form:0,[Ve,Ke]=p.useState(null),Me=_!=null,de=Ve?.form===ne?Ve:null;p.useLayoutEffect(()=>{if(!pe){Ke(null);return}const u=()=>Ke(y=>{const I={w:pe.offsetWidth,h:pe.offsetHeight,form:ne};return y?.w===I.w&&y?.h===I.h&&y?.form===I.form?y:I});u();const b=new ResizeObserver(u);return b.observe(pe),()=>b.disconnect()},[pe,ne]);const he=$,K=L,ue=e.filter(u=>u.axis==="primary"&&u.data.x.length>0),je=e.filter(u=>u.axis==="secondary"&&u.data.x.length>0),Ee=je.length>0,Cn=N!=="none"&&e.length>0||(c??[]).some(u=>u.label),Go=$m({series:e,thresholds:c??[],yTickFormat:s}),Yo=Me&&de!==null&&de.w+ys<=Math.max(112,Math.ceil(Go)),qo=B||!Cn?{placement:"overlay"}:f0({width:he,height:K,contentWidth:Go,legendHeight:N==="none"?0:e.length*Re+6,cardHeight:Yo&&de!==null?de.h:0}),yt=qo.placement==="overlay"&&!B&&N!=="none"&&K>=xm&&_m({width:he,height:K,hasSecondary:Ee,series:e,thresholds:c??[]})?{placement:"below"}:qo,Pe=N!=="none"&&(yt.placement==="below"||yt.placement==="beside"&&yt.legendBelow),Pn=Pe?sm(e.map(u=>Rt(u.label,he-2*ln)),he-2*ln):{rows:0,positions:[]},Ln=Pn.rows===0?0:Pn.rows*Re+4,Vo=he>=om,Ko=!B&&!h&&!!P,Zo=!B&&Vo&&!!j,Qo=!B&&Vo&&Ee&&!!R,Ut=U?0:1,Jo=B?{top:Ut,right:Ut,bottom:Ut,left:Ut}:di(he,K,Ee),rt={...Jo,bottom:Jo.bottom+(Ko?et:0)+Ln},q=rt.top,Z=K-rt.bottom,De=Z-q,Gt=p.useMemo(()=>{const u={primary:[],secondary:[]};for(const b of g??[]){const y=yg(b);u[y.axis].push(...y.ys)}return u},[g]),st=p.useMemo(()=>_s(ue,n,i,Gt.primary),[ue,n,i,Gt]),at=p.useMemo(()=>_s(je,o,l,Gt.secondary),[je,o,l,Gt]),ge=i==="log"?ns(st[0],st[1],Z,q):Vn(st[0],st[1],Z,q),me=l==="log"?ns(at[0],at[1],Z,q):Vn(at[0],at[1],Z,q),er=Math.max(2,Math.min(7,Math.round(De/um))),Nn=(u,b,y,I)=>{const T=Math.min(u,b),O=Math.max(u,b),A=(O-T)*1e-6||1e-6,H=Q=>Q>=T-A&&Q<=O+A,V=Q=>I==="log"?I0(T,O,Q):go(T,O,Q);for(let Q=y;Q<=64;Q*=2){const ye=V(Q).filter(H);if(ye.length<2)continue;if(ye.length<=y)return ye;const St=(ye.length-1)/(y-1),Kt=Array.from({length:y},(Em,Ai)=>ye[Math.round(Ai*St)]);return Array.from(new Set(Kt))}return[T,O]},Yt=Nn(st[0],st[1],er,i==="log"?"log":"linear"),qt=Ee?Nn(at[0],at[1],er,l==="log"?"log":"linear"):[],tr=(u,b)=>u.length===0?b:Math.max(b,Math.min(Math.round(he*tm),Math.max(...u.map(y=>xs(s(y,u))))+em)),On=B?rt:{left:tr(Yt,rt.left)+(Zo?et:0),right:(Ee?tr(qt,rt.right):rt.right)+(Qo?et:0)},Y=On.left,Fn=yt.placement==="beside"?yt.columnWidth:0,se=he-On.right-Fn,be=se-Y,nr=he-Fn-et/2,Ze=be>=lm&&De>=cm,ee=Fn>0?{x0:se+(Ee?On.right:0)+ys,y0:q,x1:he-pm,y1:Z}:void 0,or=N==="none"||ee||Pe?[]:e.map((u,b)=>({x0:Y+3,y0:q+6+b*Re,x1:Y+3+Rt(u.label,be-6),y1:q+6+b*Re+13})),oe=Vn(t[0],t[1],Y,se),ui=Math.max(2,Math.min(8,Math.round(be/dm))),wt=Nn(t[0],t[1],ui,"linear"),hi=p.useMemo(()=>{const u=[],b=wt.length-1;if(b<0)return u;const y=xs,I=6,T=A=>{const H=wt[A],V=r(H,t,wt),Q=oe(H),ye=y(V),St=A===0?"start":A===b?"end":"middle",Kt=St==="start"?Q:St==="end"?Q-ye:Q-ye/2;return{x:Q,text:V,anchor:St,leftEdge:Kt,rightEdge:Kt+ye}},O=T(0);if(u.push({x:O.x,text:O.text,anchor:O.anchor}),b>=1){const A=T(b);if(A.leftEdge>=O.rightEdge+I){let H=O.rightEdge;for(let V=1;V<b;V++){const Q=T(V);Q.leftEdge>=H+I&&Q.rightEdge<=A.leftEdge-I&&(u.push({x:Q.x,text:Q.text,anchor:Q.anchor}),H=Q.rightEdge)}u.push({x:A.x,text:A.text,anchor:A.anchor})}}return u},[wt,t,oe,r]),rr=(u,b)=>{const y=new Set,I=u.length;if(I===0||(y.add(0),I===1))return y;const T=16,O=b(u[0]),A=b(u[I-1]);if(Math.abs(A-O)>=T){let H=O;for(let V=1;V<I-1;V++){const Q=b(u[V]);Math.abs(Q-H)>=T&&Math.abs(A-Q)>=T&&(y.add(V),H=Q)}y.add(I-1)}return y},fi=rr(Yt,ge),pi=rr(qt,me),ze=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>{const b=u.axis==="primary"?ge:me,y=u.type??"line";if(y==="band")return u.data.y2?{id:u.id,kind:"band",color:u.color,opacity:u.fillOpacity??vm,d:ei(u.data.x,u.data.y,u.data.y2,oe,b)}:{id:u.id,kind:"noop"};if(y==="scatter"){const A=u.data.x.map((H,V)=>({cx:oe(H),cy:b(u.data.y[V])}));return{id:u.id,kind:"scatter",color:u.color,points:A}}const I=y==="step"?E0:ts,T=(u.data.bridges??[]).filter(A=>j0(u.data.x,u.data.y,A,oe,b)),O=[...new Set([...u.data.breaks??[],...T.map(A=>A.to)])].sort((A,H)=>A-H);return{id:u.id,kind:"stroked",color:u.color,dashed:u.dashed??!1,uncertainty:R0(u.data.x,u.data.reckoned??[],oe,b),segments:A0(u.data.x,u.data.y,oe,b,I,O,u.data.spans,u.data.reckoned),modelled:T.map(A=>({basis:A.basis,d:ts([u.data.x[A.to-1],...A.t,u.data.x[A.to]],[u.data.y[A.to-1],...A.v,u.data.y[A.to]],oe,b)})),tail:u.data.x.length>0&&(u.data.reckoned??[]).some(A=>A.to>=u.data.x.length-1)?{cx:oe(u.data.x[u.data.x.length-1]),cy:b(u.data.y[u.data.y.length-1])}:null,observed:[...new Set(T.flatMap(A=>[A.to-1,A.to]))].map(A=>({cx:oe(u.data.x[A]),cy:b(u.data.y[A])}))}}),[e,oe,ge,me]),Qe=p.useMemo(()=>c?c.map(u=>{const b=u.axis??"primary",y=e.filter(T=>T.axis===b&&T.type!=="band"&&!T.dashed),I=u.kind==="limit"?y.some(T=>{const O=T.data.y.filter(A=>Number.isFinite(A));return O.length>0&&Qa(O[O.length-1],u.value,u.bad)}):u.kind==="target"&&y.some(T=>Zg(T.data.y,u.value));return{id:u.id,label:u.label,spokenLabel:u.spokenLabel,value:u.value,kind:u.kind,passed:I,currency:$n(u.reading,{drawsReckoning:!0}),tone:Qg(u.kind,I),dashed:u.kind!=="marker",y:b==="primary"?ge(u.value):me(u.value)}}):[],[c,e,ge,me]),kt=p.useMemo(()=>{const u=(b,y,I)=>Math.max(b,Math.min(I,y));return(c??[]).flatMap(b=>{if(b.kind!=="limit"||!Number.isFinite(b.value))return[];const y=b.axis??"primary",I=y==="primary"?ge:me,T=I(b.value),O=b.bad==="above"?-1:1,A=b.label||`the limit at ${s(b.value)}`;return e.filter(H=>H.axis===y&&H.data.x.length>0&&(H.type??"line")!=="band"&&!H.dashed).flatMap(H=>M0({y:H.data.y,cx:H.data.x.map(oe),cy:H.data.y.map(I),limit:b.value,limitY:T,bad:b.bad,breaks:H.data.breaks,step:H.type==="step"||H.type==="scatter",minGapPx:We}).slice(Ze?0:-1).map(V=>{const Q=s(H.data.y[V.index]),ye=r(H.data.x[V.index],t);return{key:`${b.id}-${H.id}-${V.index}`,color:H.color,x:u(Y+We/2+1,V.x-ws*(V.entered?1:-1),se-We/2-1),y:u(q+We/2+1,V.y+O*ws,Z-We/2-1),text:V.entered?V.spells>1?`${H.label} went past ${A} ${V.spells} times from ${ye}, first reading ${Q}`:`${H.label} went past ${A} at ${ye}, reading ${Q}`:`${H.label} was already past ${A} when this window began at ${ye}, reading ${Q}`}}))})},[c,e,oe,ge,me,r,s,t,Y,se,q,Z,Ze]),fe=(()=>{if(!Me||de===null||B)return;if(ee&&Yo){const T={x0:ee.x0,y0:Z-de.h,x1:ee.x0+de.w,y1:Z},O=q+(N==="none"||Pe?0:e.length*Re+6);return T.x1<=ee.x1&&T.y0>=O?T:void 0}const u=We/2,b=[...e.filter(T=>(T.type??"line")!=="band").flatMap(T=>{const O=T.axis==="primary"?ge:me,A=T.data.x.map(oe),H=T.data.y.map(O);return T.type==="scatter"?A.map((V,Q)=>({cx:[V],cy:[H[Q]]})):[{cx:A,cy:H}]}),...Qe.map(T=>({cx:[Y,se],cy:[T.y,T.y]}))],y=[...kt.map(T=>({x0:T.x-u,y0:T.y-u,x1:T.x+u,y1:T.y+u})),...N==="none"||ee||Pe?[]:e.map((T,O)=>({x0:Y+3,y0:q+6+O*16,x1:Y+3+Math.min(T.label.length*6+8,be-6),y1:q+6+O*16+13}))],I=v0({plot:{x0:Y,y0:q,x1:se,y1:Z},card:{width:de.w,height:de.h},traces:b,obstacles:y});return I?{x0:I.x,y0:I.y,x1:I.x+de.w,y1:I.y+de.h}:void 0})(),it=p.useMemo(()=>{if(!Ze)return new Map;const u=We/2;return Gg({labels:Qe.filter(b=>b.label).map(b=>({id:b.id,width:(b.label?.length??0)*wn+(b.currency.held?kn:0),lineY:b.y})),plot:ee??{x0:Y,y0:q,x1:se,y1:Z},obstacles:[...fe?[fe]:[],...kt.map(b=>({x0:b.x-u,y0:b.y-u,x1:b.x+u,y1:b.y+u})),...N==="none"||Pe?[]:e.map((b,y)=>({x0:ee?ee.x0:Y+3,y0:q+6+y*Re,x1:(ee?ee.x0:Y+3)+Rt(b.label,ee?ee.x1-ee.x0:be-6),y1:q+6+y*Re+13}))],traces:(ee?[]:e).filter(b=>(b.type??"line")!=="band").map(b=>({cx:b.data.x.map(oe),cy:b.data.y.map(b.axis==="primary"?ge:me)}))})},[Ze,fe,ee,Qe,kt,N,Pe,e,oe,ge,me,Y,se,q,Z,be]),gi=(()=>{const u=q+6;if(N==="none"||Pe||e.length===0)return u;const b=ee?ee.x0:Y+3,y=b+Math.max(...e.map(O=>Rt(O.label,ee?ee.x1-ee.x0:be-6))),I=Qe.flatMap(O=>{const A=it.get(O.id);if(!O.label||!A)return[];const H=O.label.length*wn+(O.currency.held?kn:0),V=A.anchor==="end"?A.x-H:A.x;return[{x0:V,y0:A.y-9,x1:V+H,y1:A.y+2}]});fe&&I.push(fe);const T=e.length*Re-3;for(let O=u;O+T<=Z;O+=Re){const A={x0:b,y0:O,x1:y,y1:O+T};if(!I.some(H=>A.x0<H.x1&&H.x0<A.x1&&A.y0<H.y1&&H.y0<A.y1))return O}return u})(),mi=e.flatMap(u=>{const b=ze.find(A=>A.id===u.id),y=b?.kind==="stroked"?b.modelled.map(A=>A.basis):[],I=u.data.reckoned??[];if(I.length===0&&y.length===0)return[];const O=[...new Set([...I.map(A=>A.basis),...y])].map(A=>`${u.label}: part of this trace is reckoned, ${g0(A)}, not measured`);return I.some(A=>A.bandLo&&A.bandHi)&&O.push(`${u.label}: ${wm}`),O}),xi=Qe.flatMap(u=>{const b=u.spokenLabel??u.label??u.id,y=[];return u.passed&&u.kind==="limit"&&y.push(`${b}: limit passed`),u.passed&&u.kind==="target"&&y.push(`${b}: target reached`),u.currency.held&&y.push(ua(b,u.currency.caption)),u.label&&!it.get(u.id)&&y.length===0&&y.push(u.spokenLabel??u.label),y}),Dn=[...mi,...xi],vi=[v??"Telemetry line chart",...Wg(g??[]),...Dn].join("; "),zn=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>E==="value"?w0(u):u),[e,E]),Hn=p.useMemo(()=>te?$0(zn):[],[te,zn]),$t=Math.min(t[0],t[1]),_t=Math.max(t[0],t[1]),bi=E==="value"?(_t-$t)*am:void 0;function sr(u){const b=zn.map(y=>{const I=k0(y,u,bi),T=y.format??s,O=y.axis==="primary"?ge:me,A=(y.type??"line")==="band";return I===null?{id:y.id,label:y.label,color:y.color,value:null}:{id:y.id,label:y.label,color:y.color,value:A&&I.y2!==void 0?`${T(I.y)} to ${T(I.y2)}`:T(I.y),currency:I.currency==="measured"?void 0:I.currency,modelled:I.currency==="modelled",y:A?void 0:O(I.y)}});if(Ze)for(const y of Qe)y.kind!=="marker"&&b.push({id:`threshold-${y.id}`,label:y.kind,color:y.tone.label,value:y.label??s(y.value),detail:!0,currency:y.currency.held?y.currency.mark==="modelled"?"modelled":"held":void 0,modelled:y.currency.held&&y.currency.mark==="modelled"});return{heading:(S??r)(u,t),rows:b}}function ar(u){const{heading:b,rows:y}=sr(u);return[b,...y.map(I=>`${I.label} ${I.value??"no sample"}${I.currency?`, ${I.currency}`:""}`)].join("; ")}const ir=e.filter(u=>(u.type??"line")!=="band").map(u=>({cx:u.data.x.map(oe),cy:u.data.y.map(u.axis==="primary"?ge:me)})),lr=fe?[...ir,b0(fe)]:ir,cr=Me&&!B&&de!==null&&de.w>0&&de.h>0&&!fe&&ne<C-1;p.useLayoutEffect(()=>{cr&&J({w:$,h:L,form:ne+1})},[cr,$,L,ne]);const yi=u=>{let b=u,y=Number.POSITIVE_INFINITY;for(const I of Hn)I<$t||I>_t||Math.abs(I-u)<y&&(y=Math.abs(I-u),b=I);return b},Je=te&&ie!==null&&ie.at>=$t&&ie.at<=_t?yi(ie.at):null,lt=Je===null?null:sr(Je),Mt=lt!==null&&Je!==null?r0({x:oe(Je),plot:{x0:Y,y0:q,x1:se,y1:Z},heading:lt.heading,rows:lt.rows,avoid:or,traces:lr}):void 0,wi=fe!==void 0&&Mt!==void 0&&Mt.x0<fe.x1&&Mt.x1>fe.x0&&Mt.y0<fe.y1&&Mt.y1>fe.y0;function ki(u){const b=u.currentTarget.getBoundingClientRect(),y=u.clientX-b.left;return y<Y||y>se?null:t[0]+(y-Y)/(se-Y)*(t[1]-t[0])}function $i(u){const b=ki(u);if(b===null){le(y=>y?.source==="pointer"?null:y);return}le({at:b,source:"pointer"})}function _i(u){const b=Hn.filter(O=>O>=$t&&O<=_t),y={ArrowLeft:u.shiftKey?-10:-1,ArrowRight:u.shiftKey?10:1,Home:-b.length,End:b.length};if(u.key==="Escape"){if(ie===null)return;u.preventDefault(),le(null),_e("");return}const I=y[u.key];if(I===void 0)return;u.preventDefault();const T=es(b,Je,I);T!==null&&(le({at:T,source:"keys"}),_e(ar(T)))}function Mi(u){try{X(u.currentTarget.matches(":focus-visible"))}catch{X(!0)}if(ie!==null)return;const b=es(Hn.filter(y=>y>=$t&&y<=_t),null,0);b!==null&&(le({at:b,source:"keys"}),_e(ar(b)))}function Si(){X(!1),le(u=>u?.source==="keys"?null:u),_e("")}const ji=te?{tabIndex:0,onPointerMove:$i,onPointerLeave:()=>le(u=>u?.source==="pointer"?null:u),onKeyDown:_i,onFocus:Mi,onBlur:Si}:{},Vt={scaleX:oe,scaleYPrimary:ge,scaleYSecondary:me,plotX0:Y,plotX1:se,plotY0:q,plotY1:Z,uid:W,labels:Ze},Ei=U&&g?_g(g,Vt):()=>!1,Bn=`plot-layer-clip-${W}`;if(be<=0||De<=0)return a.jsx("svg",{width:Math.max(0,he),height:Math.max(0,K),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:a.jsx("title",{children:"Chart too small to render"})});const dr=a.jsxs("svg",{width:he,height:K,role:kt.length>0||te?"group":"img","aria-label":vi,"aria-describedby":te?`${W}-crosshair-hint`:void 0,...ji,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...te?{touchAction:"pan-y",outline:M?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[g&&g.length>0&&a.jsx("defs",{children:a.jsx("clipPath",{id:Bn,children:a.jsx("rect",{x:Y,y:q,width:be,height:De})})}),Dn.length>0&&a.jsx("title",{children:Dn.join("; ")}),a.jsx("rect",{x:Y,y:q,width:be,height:De,fill:"var(--color-surface-panel)"}),g&&g.length>0&&a.jsx("g",{clipPath:`url(#${Bn})`,children:a.jsx(to,{layers:g,frame:Vt,pass:"background"})}),!B&&Yt.map((u,b)=>{const y=ge(u);return a.jsxs(Zt.Fragment,{children:[a.jsx("line",{x1:Y,y1:y,x2:se,y2:y,stroke:"var(--color-border-subtle)",strokeWidth:1}),fi.has(b)&&a.jsx("text",{x:Y-4,y,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,Yt)})]},`py-${b}`)}),!B&&qt.map((u,b)=>pi.has(b)?a.jsx("text",{x:se+4,y:me(u),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,qt)},`sy-${b}`):null),!h&&!B&&wt.map((u,b)=>a.jsx("line",{x1:oe(u),y1:q,x2:oe(u),y2:Z,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${b}`)),!h&&!B&&hi.map((u,b)=>a.jsx("text",{x:u.x,y:Z+14,textAnchor:u.anchor,fill:"var(--color-text-faint)",fontSize:11,children:u.text},`xl-${b}`)),Ko&&a.jsx("text",{x:(Y+se)/2,y:K-Ln-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:so(P,be)}),Zo&&a.jsx("text",{x:et/2,y:(q+Z)/2,transform:`rotate(-90 ${et/2} ${(q+Z)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:so(j,De)}),Qo&&a.jsx("text",{x:nr,y:(q+Z)/2,transform:`rotate(90 ${nr} ${(q+Z)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:so(R,De)}),U&&im(Y,se,q,Z,x).filter(u=>!Ei(u.x,u.y)).map(u=>a.jsx("circle",{cx:u.x,cy:u.y,r:1,fill:"var(--color-text-faint)",opacity:.35},u.key)),!B&&a.jsxs(a.Fragment,{children:[a.jsx("line",{x1:Y,y1:q,x2:Y,y2:Z,stroke:"var(--color-border-strong)",strokeWidth:1}),a.jsx("line",{x1:Y,y1:Z,x2:se,y2:Z,stroke:"var(--color-border-strong)",strokeWidth:1}),Ee&&a.jsx("line",{x1:se,y1:q,x2:se,y2:Z,stroke:"var(--color-border-strong)",strokeWidth:1})]}),ze.filter(u=>u.kind==="band").map(u=>a.jsx("path",{d:u.d,fill:u.color,fillOpacity:u.opacity,stroke:"none"},u.id)),ze.filter(u=>u.kind==="stroked").flatMap(u=>u.uncertainty.map((b,y)=>a.jsx("path",{d:b.d,"data-band-kind":b.kind,fill:u.color,fillOpacity:bm,stroke:b.kind==="bound"?u.color:"none",strokeOpacity:b.kind==="bound"?ym:void 0,strokeWidth:b.kind==="bound"?1:void 0},`${u.id}-band-${y}`))),ze.filter(u=>u.kind==="stroked").flatMap(u=>u.segments.map((b,y)=>a.jsxs(Zt.Fragment,{children:[G&&b.basis===void 0&&bs(b.d,Z)&&a.jsx("path",{d:bs(b.d,Z)??void 0,fill:u.color,fillOpacity:.12,stroke:"none"}),a.jsx("path",{d:b.d,"data-stream-status":b.status,"data-reckoning-basis":b.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:b.basis!==void 0?ks:void 0,strokeDasharray:b.basis!==void 0?$s:u.dashed?"4 3":void 0})]},`${u.id}-${y}`))),ze.filter(u=>u.kind==="stroked").flatMap(u=>u.modelled.map((b,y)=>a.jsx("path",{d:b.d,"data-reckoning-basis":b.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:ks,strokeDasharray:$s},`${u.id}-modelled-${y}`))),ze.map(u=>u.kind==="stroked"&&u.tail!==null?a.jsx(Ka,{kind:"modelled",x:u.tail.cx,y:u.tail.cy},`${u.id}-tail`):null),ze.filter(u=>u.kind==="stroked").flatMap(u=>u.observed.map((b,y)=>a.jsx("circle",{cx:b.cx,cy:b.cy,r:Kg,fill:u.color,"data-observed-sample":""},`${u.id}-observed-${y}`))),ze.filter(u=>u.kind==="scatter").flatMap(u=>u.points.map((b,y)=>a.jsx("circle",{cx:b.cx,cy:b.cy,r:hm,fill:u.color},`${u.id}-${y}`))),e.map(u=>{if(!u.headMark)return null;const b=u.axis==="primary"?ge:me;let y=u.data.x.length-1;for(;y>=0&&!(Number.isFinite(u.data.x[y])&&Number.isFinite(u.data.y[y]));)y-=1;return y<0?null:a.jsx("circle",{cx:oe(u.data.x[y]),cy:b(u.data.y[y]),r:Vg,fill:u.headMark==="dot"?u.color:"var(--color-surface-panel)",stroke:u.color,strokeWidth:u.headMark==="dot"?0:1.5,"data-head-mark":u.headMark},`${u.id}-head`)}),g&&g.length>0&&a.jsx("g",{clipPath:`url(#${Bn})`,children:a.jsx(to,{layers:g,frame:Vt,pass:"foreground"})}),Qe.map(u=>a.jsxs(Zt.Fragment,{children:[a.jsx("line",{x1:Y,y1:u.y,x2:G&&u.kind==="marker"?Y+24:se,y2:u.y,stroke:u.tone.line,strokeWidth:1,strokeDasharray:u.dashed?"4 3":void 0,"data-threshold-kind":u.kind,"data-threshold-passed":u.passed||void 0}),G&&u.kind==="marker"&&u.label&&a.jsx("text",{x:Y+28,y:u.y+3.5,fill:u.tone.label,fontSize:10,children:u.label}),!(G&&u.kind==="marker")&&u.label&&it.get(u.id)&&a.jsxs("text",{x:it.get(u.id)?.x,y:it.get(u.id)?.y,textAnchor:it.get(u.id)?.anchor,fill:u.tone.label,fontSize:10,children:[u.label,u.currency.held&&a.jsx(ho,{size:10,kind:u.currency.mark??"held"})]})]},u.id)),kt.map(u=>a.jsx(_0,{x:u.x,y:u.y,size:We,color:u.color,text:u.text},u.key)),N!=="none"&&e.map((u,b)=>{const y=Pe?Pn.positions[b]:void 0,I=y?K-Ln+2+y.row*Re:gi+b*Re;if(!Pe&&I+13>Z)return null;const T=y?ln+y.x:ee?ee.x0:Y+3,O=Pe?he-2*ln:ee?ee.x1-ee.x0:be-6,A=Rt(u.label,O),H=Math.max(1,Math.floor((A-8)/6)),V=u.label.length>H?`${u.label.slice(0,Math.max(1,H-1))}...`:u.label;return a.jsxs(Zt.Fragment,{children:[a.jsx("rect",{x:T,y:I,width:A,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),a.jsx("text",{x:T+3,y:I+10,fill:u.color,fontSize:10,children:V})]},u.id)}),g&&g.length>0&&Ze&&a.jsx(to,{layers:g,frame:Vt,pass:"caption"}),lt!==null&&Je!==null&&a.jsx(s0,{x:oe(Je),plot:{x0:Y,y0:q,x1:se,y1:Z},heading:lt.heading,rows:lt.rows,avoid:or,traces:lr})]}),ur=Me?a.jsx("div",{ref:Ce,"data-plot-card":"",style:{position:"absolute",left:fe?.x0??0,top:fe?.y0??0,visibility:fe&&!wi?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof _=="function"?_({width:be-vs*2,height:De-vs*2,form:ne}):_}):null;return te?a.jsxs(a.Fragment,{children:[dr,ur,a.jsx(Ye,{id:`${W}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),a.jsx(Ye,{role:"status","aria-live":"polite",children:ce})]}):a.jsxs(a.Fragment,{children:[dr,ur]})}function _s(e,t,n,o=[]){if(t)return t;if(e.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let r=[...e.flatMap(km),...o];return n==="log"&&(r=r.filter(s=>s>0)),r.length===0?n==="log"?[1,10]:[0,1]:[Math.min(...r),Math.max(...r)]}function Mm(e,t){if(e===0)return"0";const n=Math.abs(e);if(n>=1e6){const o=t?oo(t,1e6,1):1;return`${(e/1e6).toFixed(o)}M`}if(n>=1e3){const o=t?oo(t,1e3,1):1;return`${(e/1e3).toFixed(o)}k`}if(Number.isInteger(e))return String(e);if(n<.01){const o=Math.floor(Math.log10(n)),r=e/10**o;return Math.abs(r-1)<1e-9?`1e${o}`:`${r.toFixed(1)}e${o}`}return e.toFixed(t?oo(t,1,2):2)}const Sm=p.createContext(null);function jm(e,t){const n=p.useContext(Sm),o=n?.setFooter,r=n?.setDirty;p.useEffect(()=>(o?.(e),()=>o?.(null)),[o,e]),p.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function wv(e){const{onSave:t,value:n,saved:o,saveLabel:r="Save",extra:s,disabled:i}=e,l=p.useRef(null);l.current===null&&(l.current={v:n});const c=!gt(n,l.current.v)&&!gt(n,o),d=p.useRef(t);d.current=t;const h=p.useMemo(()=>a.jsxs(a.Fragment,{children:[s,a.jsx(kl,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:i,children:r})]}),[s,i,r]);jm(h,c)}export{Ye as $,Cx as A,gn as B,$x as C,vx as D,Wm as E,Pl as F,ox as G,Wx as H,Cl as I,rx as J,jx as K,fx as L,Mx as M,kx as N,Sx as O,hv as P,wx as Q,Ox as R,Fx as S,gx as T,Xa as U,Vm as V,px as W,Su as X,Ex as Y,Xm as Z,Km as _,Lx as a,Jx as a$,gt as a0,Bm as a1,yg as a2,_n as a3,jm as a4,wv as a5,bv as a6,En as a7,rl as a8,Sm as a9,Zl as aA,ix as aB,ho as aC,qx as aD,Vx as aE,Kx as aF,lx as aG,ux as aH,cv as aI,s0 as aJ,re as aK,Bs as aL,Ka as aM,zx as aN,Dx as aO,ma as aP,Gh as aQ,Ux as aR,dx as aS,Zx as aT,$e as aU,C0 as aV,ph as aW,Tr as aX,Lo as aY,ba as aZ,ca as a_,La as aa,Sr as ab,Se as ac,ot as ad,$n as ae,Xs as af,vc as ag,Nx as ah,nx as ai,Ix as aj,Ku as ak,Nr as al,ut as am,bx as an,Mh as ao,Ao as ap,ev as aq,tv as ar,uv as as,iv as at,ff as au,fv as av,co as aw,Gx as ax,Yx as ay,ax as az,Px as b,da as b0,No as b1,ya as b2,wa as b3,nh as b4,Dl as b5,Qm as b6,jo as b7,Zm as b8,Fl as b9,vv as bA,xv as bB,tx as bC,ov as bD,dh as bE,Du as bF,gl as bG,wl as bH,Hl as bI,yr as bJ,Wt as bK,Qx as bL,nv as bM,Il as bN,Rr as bO,$a as bP,So as bQ,rv as bR,pv as ba,Vr as bb,L0 as bc,mv as bd,lv as be,f0 as bf,ex as bg,r0 as bh,gv as bi,An as bj,g0 as bk,sv as bl,ua as bm,Us as bn,Vs as bo,ah as bp,Oo as bq,dv as br,av as bs,Pa as bt,Hf as bu,Xt as bv,vh as bw,Eo as bx,Jm as by,yv as bz,hx as c,cx as d,kl as e,Rx as f,Tx as g,Ax as h,Mu as i,Um as j,yx as k,Ym as l,Ll as m,Gm as n,Wh as o,qm as p,Jh as q,Xx as r,Bx as s,mx as t,xx as u,Hx as v,_x as w,sx as x,Nl as y,ju as z};
