import{j as a}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import w,{css as D,createGlobalStyle as Ti,keyframes as Es}from"./ext-styled-components-DAuodqsN.js";import{r as p,R as en}from"./ext-react-C0MU9AHG.js";import{h as As,l as Pi}from"./logger-2_QM1wvD.js";import{cE as Ot,cJ as pn,aW as Te,b7 as Is,l as Li,cg as rt,aK as tn,ck as Rs}from"./view-clock-formula-Bm6xOQIY.js";import{aU as Ni}from"./ksp-enum-names-DtqyRCA5.js";import{G as yo,z as Oi}from"./screen-CDftIe5d.js";import{l as lo,k as Cs,j as ae,m as $e,w as yt,a1 as wo,N as gn,V as Me,a2 as Fi,n as Di,O as ko,a3 as $o,a4 as zi,a5 as Hi,a6 as Bi,a7 as Ts,a8 as Wi,E as pr,a9 as Xi,aa as Ui,ab as Gi,ac as Yi,ad as qi,Z as xt,ae as Vi,af as Ki,I as Zi,i as Ps,_ as Qi,T as Bt,J as Ls,ag as Ji,S as Ns,ah as Os,Q as gr,A as nn,f as mr,ai as xr,s as Gn,aj as el,ak as tl,y as nl}from"./contributionsRead-BVF33u6e.js";import"./lagrange-CDpvbe-i.js";import{R as ol}from"./use-transmissions-D-55OCga.js";import{gridToPixels as rl}from"./ext-ui-kit-grid-CYQFMmYG.js";import{r as sl}from"./ext-react-dom-DCF8ZnaJ.js";const Km={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function Zm({children:e,layout:t="inline",...n}){return a.jsx(il,{$layout:t,...n,children:e})}const al={inline:D``,fill:D`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},il=w.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>al[e]}
`,st=D`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Yt=D`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,ll="data-restoring-focus",cl=120,dl=48,ul=120,vr=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function qt(e){return Fs(e,"below")}function Fs(e,t){const[n,o]=p.useState(null),[r,s]=p.useState(!1),[i,l]=p.useState(!1),[c,d]=p.useState(!1),[h,f]=p.useState(!1),[x,m]=p.useState(!1),g=p.useRef(null),v=p.useRef(null),k=p.useRef(!1),E=p.useRef(!1),S=p.useRef(null),P=e!=null&&e!==""?e:null,j=n!==null&&(r||i||c||h||x),I=p.useCallback(()=>{S.current!==null&&clearTimeout(S.current),S.current=null},[]),M=p.useCallback(()=>{I(),o(null),s(!1),l(!1),d(!1),f(!1),m(!1),k.current=!1},[I]);p.useEffect(()=>{if(!h)return;const L=()=>{const q=document.getSelection(),O=q!==null&&!q.isCollapsed&&v.current?.contains(q.anchorNode)===!0;!k.current&&!O&&f(!1)},W=()=>{k.current=!1,L()};return document.addEventListener("pointerup",W),document.addEventListener("selectionchange",L),()=>{document.removeEventListener("pointerup",W),document.removeEventListener("selectionchange",L)}},[h]),p.useEffect(()=>{if(!x)return;const L=W=>{const q=W.target;q instanceof Node&&(g.current?.contains(q)||v.current?.contains(q)||M())};return document.addEventListener("pointerdown",L,!0),()=>document.removeEventListener("pointerdown",L,!0)},[x,M]);const N=p.useCallback(()=>{I(),S.current=setTimeout(()=>{S.current=null,s(!1),d(!1)},ul)},[I]);if(p.useEffect(()=>I,[I]),p.useEffect(()=>{if(n!==null)return window.addEventListener("scroll",M,!0),window.addEventListener("resize",M),()=>{window.removeEventListener("scroll",M,!0),window.removeEventListener("resize",M)}},[n,M]),p.useEffect(()=>{if(!j||P===null)return;const L=W=>{W.key==="Escape"&&(W.stopPropagation(),M())};return document.addEventListener("keydown",L,!0),()=>document.removeEventListener("keydown",L,!0)},[j,P,M]),P===null)return{anchor:{},tip:null};const _=L=>{const W=L.getBoundingClientRect();o({top:W.bottom,left:W.left,above:t==="above"?W.top>=dl:window.innerHeight-W.bottom<cl,anchorTop:W.top})};return{anchor:{"data-tooltip":P,onPointerEnter:L=>{L.pointerType!=="touch"&&(I(),_(L.currentTarget),s(!0))},onPointerLeave:N,onPointerDown:L=>{E.current=!0,L.pointerType!=="touch"&&M()},onPointerUp:L=>{if(E.current=!1,L.pointerType==="touch"){if(x){M();return}g.current=L.currentTarget,_(L.currentTarget),m(!0)}},onFocus:L=>{E.current||document.documentElement.hasAttribute(ll)||(_(L.currentTarget),l(!0))},onBlur:()=>{l(!1),!r&&!c&&!x&&o(null)}},tip:j?sl.createPortal(a.jsx(hl,{ref:v,at:n,text:P,onPress:()=>{k.current=!0,f(!0)},onPointerEnter:()=>{I(),d(!0)},onPointerLeave:N}),document.body):null}}const hl=p.forwardRef(function({at:t,text:n,onPress:o,onPointerEnter:r,onPointerLeave:s},i){const l=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return a.jsx(pl,{ref:i,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),o()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...l,left:t.left,"--tip-left":`${t.left}px`},children:n})});function ut(e,t){return(...n)=>{typeof e=="function"&&e(...n),t?.(...n)}}function Se({text:e,children:t,focusable:n=!1,announce:o=!0,placement:r="below"}){const{anchor:s,tip:i}=Fs(e,r);if(e==null||e==="")return a.jsx(a.Fragment,{children:t});const l=t.props,c=l["aria-label"],d=!o||typeof c=="string"&&vr(c).includes(vr(e));return a.jsxs(a.Fragment,{children:[p.cloneElement(t,{"data-tooltip":e,onPointerEnter:ut(l.onPointerEnter,s.onPointerEnter),onPointerLeave:ut(l.onPointerLeave,s.onPointerLeave),onPointerDown:ut(l.onPointerDown,s.onPointerDown),onPointerUp:ut(l.onPointerUp,s.onPointerUp),onFocus:ut(l.onFocus,s.onFocus),onBlur:ut(l.onBlur,s.onBlur),"aria-description":d?l["aria-description"]:e,tabIndex:n?l.tabIndex??0:l.tabIndex}),i,n&&a.jsx(fl,{})]})}const fl=Ti`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,pl=w.div`
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
`;function Ds(e){let t="";return p.Children.forEach(e,n=>{if(typeof n=="string"||typeof n=="number"){t+=String(n);return}p.isValidElement(n)&&(t+=Ds(n.props.children))}),t.replace(/\s+/g," ").trim()}function zs({label:e,children:t,disabledReason:n}){return gl({label:e,children:t,disabledReason:n})}function gl({label:e,children:t,disabledReason:n}){const o=e!==void 0&&e!==""&&e!==Ds(t)?e:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function Hs(e,t){return e===!0&&t!==void 0&&t!==""}function Bs(e){e.preventDefault(),e.stopPropagation()}function Ws(e,t,n){return t===null||e.props["data-tooltip"]!==void 0?e:a.jsx(Se,{text:t,announce:n,children:e})}const _o="max(0.075em, 1.25px)",re={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},Ve=w.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,co=re.held.domSize,uo=re.modelled.domSize,ml=D`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${co} + 0.14em);
  }
`,xl=D`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${uo} + 0.14em);
  }
`;function vl(e){return D`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${re[e].hollowDomSize} + 0.14em);
    }
  `}function Xs(e,t=!1){return t?vl(e):e==="current"?null:e==="modelled"?xl:ml}const bl=w.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${co};
  height: ${co};
  background: ${re.held.color};
`,yl=w.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${uo};
  height: ${uo};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${re.modelled.color};
`,Mo=e=>D`
  position: absolute;
  right: 0;
  top: 0;
  width: ${re[e].hollowDomSize};
  height: ${re[e].hollowDomSize};
`,wl=w.span`
  ${Mo("current")}
  border: ${_o} solid ${re.current.color};
  border-radius: var(--radius-circle);
`,kl=w.span`
  ${Mo("held")}
  border: ${_o} solid ${re.held.color};
`,$l=w.span`
  ${Mo("modelled")}
  --stroke: ${_o};
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
`,_l={current:wl,held:kl,modelled:$l};function Us({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?_l[e]:e==="modelled"?yl:bl;return a.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const Ml=w.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>Xs(e??"held",t)}
`;function ho({caption:e,kind:t="held",elsewhere:n=!1,children:o,...r}){const{anchor:s,tip:i}=qt(e);return a.jsxs(Ml,{$kind:t,$elsewhere:n,...r,...s,children:[o,a.jsx(Us,{kind:t,elsewhere:n}),e!==null&&a.jsxs(Ve,{"data-unit-currency":"",children:[", ",e]}),i]})}const Sl=p.forwardRef(function({variant:t="default",tone:n,size:o="md",pressed:r,predictedOutcome:s,disabledReason:i,marked:l,type:c="button",...d},h){const f=Hs(d.disabled,i),x=zs({label:d["aria-label"],children:d.children,disabledReason:f?i:void 0}),{disabled:m,onClick:g,children:v,...k}=d;return Ws(a.jsx(Ll,{ref:h,$variant:t,$tone:n??(t==="primary"?"go":"neutral"),$size:o,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,"data-held-button":l?"":void 0,...k,disabled:f?void 0:m,...f?{"aria-disabled":!0}:{},onClick:f?Bs:g,type:c,children:l?a.jsx(jl,{kind:l.kind,caption:l.caption,children:v}):v}),x,f)}),jl=w(ho)`
  position: static;

  &::after {
    content: none;
  }

  & > [data-held-mark] {
    top: 3px;
    right: 3px;
  }
`;function El(e){return e==="neutral"?"go":e}const So=e=>D`
  background: ${lo[e]};
  border-color: ${lo[e]};
  color: ${Cs[e]};
`,Al=e=>D`
  border-color: ${ae[e]};
  color: ${$e[e]};
`,br={default:D`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:D`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},Il=D`
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
`,Rl=D`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function Cl(e,t){return e==="text"?Il:e==="primary"?So(t):t==="neutral"?br[e]:D`
    ${br[e]}
    ${Al(t)}
  `}const Tl=D`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,Pl={sm:D`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:D`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},Ll=w.button`
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

  ${({$size:e})=>Pl[e]}
  ${({$variant:e,$tone:t})=>Cl(e,t)}
  ${({$pressed:e,$tone:t})=>e?So(El(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":Tl}
  ${st}
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

  ${({$variant:e})=>e==="text"?Rl:""}
`,Qm=w.button`
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
  ${st}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Nl=w.button`
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
    ${So("go")}
  }
  ${st}
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
`,Ol=p.forwardRef(function({pressed:t,disabledReason:n,...o},r){const s=Hs(o.disabled,n),i=zs({label:o["aria-label"],children:o.children,disabledReason:s?n:void 0}),{disabled:l,onClick:c,...d}=o;return Ws(a.jsx(Nl,{ref:r,"aria-pressed":t,...d,disabled:s?void 0:l,...s?{"aria-disabled":!0}:{},onClick:s?Bs:c}),i,s)}),Jm=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,Fl=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,ex=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,Dl=w.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,tx=w.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,nx=w.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,jo=D`
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

  ${st}

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
`,zl=w.input`
  ${jo}
  width: 100%;
`,ox=w.select`
  ${jo}
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
`,rx=w.textarea`
  ${jo}
  width: 100%;
  resize: vertical;
`;function Hl(e){if(e===void 0)return null;const{value:t}=wo(e.magnitude,e.unit);return t===gn?null:t}function Gs(e,t){const n=Hl(t);return n===null?e:`${e}, as of ${n}`}const Eo="modelled to SCET";function Bl(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function yr(e){return pn(e.value)||Ot(e.value)?{shown:e.value,held:!1,mark:null,isStatic:pn(e.value),isDeterministic:Ot(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:Gs(yt(e.grade),e.asOfUt)}}function Sn(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:pn(e),isDeterministic:Ot(e),caption:null,band:null};const n=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!Ot(e.value)){const o=e.reckoning.modelled;if(e.state==="held"){const s=yr(e),i=e.value===void 0,l=s.held||i,c=s.caption??(i?"":null);return{...s,shown:o,held:l,mark:l?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:n}}const r=e.reckoning.beyondReceived;return{shown:o,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?Eo:null,band:n}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:pn(e.value),isDeterministic:Ot(e.value),caption:null,band:n}:e.state==="held"?{...yr(e),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Ys(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function Wl(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:Eo}:null;if(e.state==="held"){const n=Gs(yt(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function sx(e){return e===void 0?null:typeof e!="string"?Wl(e):{kind:"held",caption:yt(e)}}function Ao(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function ax(e,t){const n=Ao(t);return n===void 0?e:{state:"held",value:e,grade:n,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}function Io(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function ix(e={}){return Io(t=>Me(t,e))}const Xl=.01;function lx({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const r=Math.abs(t(n)-t(o));return(e?Math.min(r,1-r):r)<=Xl}}}function qs(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(r=>!n.readsAsOne(e,r))}function Ro({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,r=v=>Fi(typeof v=="number"?v:v.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,i=Bl(s);if(s?.value!==void 0&&i!==void 0)return qs(s.value,i,Io(r))?a.jsx(ho,{"data-held":"",kind:"modelled",caption:`${Eo}, last received ${r(s.value)}`,children:r(i)}):a.jsx(a.Fragment,{children:r(s.value)});const l=Sn(o,{drawsReckoning:!0}),{shown:c,held:d,mark:h,caption:f}=l,x=typeof e=="number"?e:c;if(x==null)return gn;const m=r(x),g=Ys({...l,shown:x});return d?a.jsx(ho,{...g,kind:h??"held",caption:f,children:m}):a.jsx("span",{"data-figure":g["data-figure"],children:m})}const wr={left:!1,right:!1};function Ul(e){const[t,n]=p.useState(wr),o=p.useRef(wr);return p.useEffect(()=>{if(!e)return;const r=()=>{const l=e.scrollLeft>1,c=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===l&&o.current.right===c||(o.current={left:l,right:c},n(o.current))};r(),e.addEventListener("scroll",r,{passive:!0});const s=typeof ResizeObserver>"u"?null:new ResizeObserver(r);s?.observe(e);for(const l of Array.from(e.children))s?.observe(l);const i=new MutationObserver(()=>{for(const l of Array.from(e.children))s?.observe(l);r()});return i.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",r),s?.disconnect(),i.disconnect()}},[e]),t}const kr=w.div`
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
`;function jn(e){const t=p.useRef(null),[n,o]=p.useState(e),[r,s]=p.useState(null);return p.useEffect(()=>{t.current!==r&&s(t.current)}),p.useEffect(()=>{if(!r||typeof ResizeObserver>"u")return;const i=new ResizeObserver(l=>{for(const c of l)c.contentRect.width>0&&c.contentRect.height>0&&o({w:Math.floor(c.contentRect.width),h:Math.floor(c.contentRect.height)})});return i.observe(r),()=>i.disconnect()},[r]),{ref:t,size:n}}const Gl='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Vs(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),r=n[o+1]??n[o-1];if(r&&r!==e){r.focus();return}const s=t.closest("[data-panel-rail-frame]"),i=s?s.parentElement?.querySelector("[data-panel-body]"):t.closest("[data-panel-body]");if(!i)return;const l=[...i.querySelectorAll(Gl)].find(c=>c!==e);if(l){l.focus();return}i.hasAttribute("tabindex")||i.setAttribute("tabindex","-1"),i.focus()}const Wt=700;function Co(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const En={"in-transit":1/6,"awaiting-reply":1/2,due:2/3,overdue:2/3,lost:2/3};function Ks(e){const t=e.reachEtaSeconds;if(e.hold&&t!==null&&t>0)return Yl(e.hold);const n=Zs(e);if(t===null||n===null)return En[e.predictedPhase];const o=n-t,r=e.replyEtaSeconds===null?1/3:2/3;return Math.max(0,Math.min(r,o/(3*n)))}function $r(e){const t=Zs(e);return t===null?0:Math.max(0,(1-Ks(e))*3*t)}function Yl(e){return Math.max(0,Math.min(1,e.outbound))/3}function Zs(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function Qs(e){return ql(e).map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:t.settling==="confirmed"?1:Ks(t),glyph:t.glyph??Co(t.label||t.command),...t.held?{held:!0}:{},...t.settling?{settling:t.settling,settleSeconds:t.settleSeconds??0}:{},...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function ql(e){return e.some(t=>t.dispatchedAt!==void 0)?e.map((t,n)=>({item:t,index:n})).sort((t,n)=>(t.item.dispatchedAt??Number.NEGATIVE_INFINITY)-(n.item.dispatchedAt??Number.NEGATIVE_INFINITY)||t.index-n.index).map(({item:t})=>t):e}function cx({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||yo(e)!=="shown"?"none":n||Oi({oneWaySeconds:Te("s",e)})==="live"?"badge":t?"strip":"none"}const Vl={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},Xt={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Kl(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Vl[e.phase]}const An=new Set(["overdue","lost"]),Zl=180,Ql=96;function Js(e){return Me(Te("s",Math.max(0,e)))}function Jl(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const ec=1;function To(e){const t=Ni(),n=p.useRef(t);n.current=t;const[o,r]=p.useState(e),s=p.useRef({eta:e,ut:Yn(t)});return p.useEffect(()=>{const i=s.current.eta;(i===null!=(e===null)||i!==null&&e!==null&&Math.abs(e-i)>=ec)&&(s.current={eta:e,ut:Yn(n.current)},r(e))},[e]),p.useEffect(()=>{const i=setInterval(()=>{const{eta:l,ut:c}=s.current;if(l===null)return;const d=Yn(n.current);if(d!==void 0){if(c===void 0){s.current={eta:l,ut:d};return}r(Math.max(0,l-(d-c)))}},1e3);return()=>clearInterval(i)},[]),o}function Yn(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function tc({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":r="In-flight commands",variant:s="inline",onDismiss:i}){const{ref:l,size:c}=jn({w:320,h:0}),d=s==="rail"||s==="expanded"?e:e.filter(f=>!f.settling);if(s==="rail")return d.length===0?null:a.jsx(nc,{items:d,"aria-label":r});if(s==="expanded")return d.length===0?null:a.jsx(fc,{items:d,"aria-label":r,onDismiss:i});const h=n!=="auto"?n:c.w>=Zl?"full":c.w>=Ql?"compact":"badge";return d.length===0?null:h==="badge"?a.jsx(oc,{ref:l,items:d,mode:t,"aria-label":r}):a.jsx(oa,{ref:l,role:"list","aria-label":r,"data-mode":t,"data-density":h,$row:o==="row",children:d.map(f=>a.jsx(rc,{item:f,$compact:h==="compact"},f.id))})}const qe=8,ea=1/3;function nc({items:e,"aria-label":t}){const n=e.filter(o=>!o.settling);return a.jsx(sc,{role:"img","aria-label":`${t}: ${n.length} in flight`,children:e.map(o=>{const r=Math.max(0,Math.min(1,o.progress??En[o.phase]));return a.jsx(na,{...o.settling?{"data-role":"settling","data-settling":o.settling}:{"data-role":"glow","data-phase":o.phase,...o.held?{"data-held":""}:{}},$settling:o.settling,style:{"--dot-colour":ta(o),"--dot-progress":r,"--settle-seconds":o.settleSeconds??0}},o.id)})})}const oc=function({ref:t,items:n,mode:o,"aria-label":r}){const s=To(Jl(n)),i=n.some(c=>An.has(c.phase)),l=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${Js(s)}`;return a.jsx(Se,{text:n.map(c=>c.label).join(`
`),focusable:!0,children:a.jsx(oa,{ref:t,role:"group","aria-label":`${r}: ${l}`,"data-mode":o,"data-density":"badge",$row:!1,children:a.jsxs(ra,{$phase:i?"overdue":"in-transit",children:[a.jsx(sa,{"aria-hidden":"true",$pulse:!i,children:"↑"}),a.jsxs(aa,{children:[n.length,s!==null&&a.jsxs(a.Fragment,{children:[" · ",a.jsx(Ro,{value:Math.max(0,s)})]})]})]})})})};function rc({item:e,$compact:t}){const n=To(e.etaSeconds),o=An.has(e.phase),r=n===null?`${e.label}, ${Xt[e.phase]}`:`${e.label}, ${Js(n)}`;return a.jsxs(ra,{$phase:e.phase,role:"listitem",...t?{"aria-label":r,title:r}:{},children:[a.jsx(sa,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Kl(e)}),!t&&a.jsx(wc,{children:e.label}),a.jsx(aa,{children:n===null?Xt[e.phase]:a.jsx(Ro,{value:Math.max(0,n)})})]})}const mn=Es`
  from { opacity: 1; }
  to { opacity: 0; }
`,sc=w.div`
  position: relative;
  display: block;
  width: 100%;
  height: 16px;
  /* Clips the part of each dot above the strip, whatever box holds it. */
  overflow: hidden;
`,ac=14;function ic(e,t,n){const o=Math.min(ac,(n-qe)/Math.max(1,t)),r=Math.ceil(e/2)*(e%2===1?1:-1),s=n/2+r*o;return Math.max(0,Math.min(n-qe,s-qe/2))}function _r({items:e,height:t}){return a.jsx(dc,{role:"group","aria-label":"Commands on the rail",style:{height:t},children:e.map((n,o)=>{const r=Math.max(0,Math.min(1,n.progress??En[n.phase]));return a.jsx(Se,{text:n.settling?null:`${n.label}, ${Xt[n.phase]}`,announce:!1,focusable:!n.settling,children:a.jsx(na,{...n.settling?{"data-role":"settling","data-settling":n.settling,"aria-hidden":!0}:{role:"img","aria-label":`${n.label}, ${Xt[n.phase]}`,"data-role":"glow","data-phase":n.phase,...n.held?{"data-held":""}:{}},"data-lane":o,$settling:n.settling,$lane:!0,style:{"--dot-colour":ta(n),"--dot-progress":r,"--settle-seconds":n.settleSeconds??0,"--lane-top":`${ic(o,e.length,t)}px`}})},n.id)})})}function ta(e){return e.settling==="confirmed"?"var(--color-accent-fg)":e.held||e.settling==="failed"||An.has(e.phase)?ae.warn:"var(--color-accent-fg)"}const lc=e=>e==="confirmed"?D`
        transition: left var(--settle-time) var(--ease-linear);
        animation: ${mn} ${Wt}ms var(--ease-standard) var(--settle-time) forwards;
      `:e==="failed"?D`
          animation: ${mn} ${Wt}ms var(--ease-standard) forwards;
        `:null,cc=Es`
  from { top: ${-qe*(1-ea)}px; }
  to { top: var(--lane-top); }
`,dc=w.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,na=w.span`
  position: absolute;
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  top: ${-qe*(1-ea)}px;
  /* The dot's own width is kept inside the strip, so it is whole at both ends. */
  left: calc((100% - ${qe}px) * var(--dot-progress));
  width: ${qe}px;
  height: ${qe}px;
  border-radius: var(--radius-circle);
  background: var(--dot-colour);
  box-shadow:
    0 0 6px 2px color-mix(in srgb, var(--dot-colour) 60%, transparent),
    0 0 14px 4px color-mix(in srgb, var(--dot-colour) 25%, transparent);

  ${({$lane:e,$settling:t})=>e&&D`
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
    ${({$settling:e})=>lc(e)}
    ${({$lane:e,$settling:t})=>e&&!t&&D`
        animation: ${cc} var(--duration-base) var(--ease-entrance);
      `}
  }
`,uc=54,Ft=5,hc=3,Po=uc-8-Ft,xn=60,Mr={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:ae.warn,lost:ae.warn};function fc({items:e,"aria-label":t,onDismiss:n}){const[o,r]=p.useState(null),s=Ul(o),i=s.left||s.right;return a.jsxs(gc,{"data-command-list":"",children:[a.jsx(mc,{ref:r,role:"list","aria-label":t,...i?{tabIndex:0,"data-scrolls":""}:{},children:e.map(l=>a.jsx(pc,{item:l,onDismiss:n},l.id))}),a.jsx(kr,{$position:"left",$visible:s.left}),a.jsx(kr,{$position:"right",$visible:s.right})]})}function pc({item:e,onDismiss:t}){const n=e.glyph??Co(e.label),o=e.settling==="confirmed"?Mr["awaiting-reply"]:e.held||e.settling==="failed"?ae.warn:Mr[e.phase],r=Math.max(0,Math.min(1,(e.progress??En[e.phase])*1.5)),s=An.has(e.phase)&&!!t&&!e.settling,i=`${e.label}, ${Xt[e.phase]}`;return a.jsxs(xc,{role:"listitem","aria-label":i,...e.settling?{"data-settling":e.settling,"aria-hidden":!0}:{"data-phase":e.phase,...e.held?{"data-held":""}:{}},$settling:e.settling,style:{color:o,"--settle-seconds":e.settleSeconds??0},children:[a.jsx(Se,{text:s?`Dismiss ${e.label}`:i,announce:!1,children:a.jsxs(vc,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:l=>{Vs(l.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[a.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&a.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),a.jsx(bc,{children:a.jsx("span",{className:"fill",style:{"--fill-ratio":r}})})]})}const gc=w.div.attrs({role:"group"})`
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
    ${Po}px + ${Ft}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
  /* Holds the overflow glows over the row's edges. */
  position: relative;
`,mc=w.div`
  display: flex;
  flex-direction: row;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${hc}px;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  /* Native scrollbar hidden: the edge glows show scroll state. */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${Yt}
`,xc=w.div`
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @media (prefers-reduced-motion: no-preference) {
    ${({$settling:e})=>e==="confirmed"?D`
            animation: ${mn} ${Wt}ms var(--ease-standard)
              var(--settle-time) forwards;
            .fill {
              transition:
                height var(--settle-time) var(--ease-linear),
                width var(--settle-time) var(--ease-linear);
            }
          `:e==="failed"?D`
              animation: ${mn} ${Wt}ms var(--ease-standard) forwards;
            `:null}
  }

  @container (min-width: ${xn}px) {
    flex-direction: column;
  }
`,vc=w.div`
  --s: ${Po}px;
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

  @container (min-width: ${xn}px) {
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
`,bc=w.div`
  --s: ${Po}px;
  position: relative;
  flex: 0 0 ${Ft}px;
  width: ${Ft}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${xn}px) {
    width: var(--s);
    height: ${Ft}px;
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
  @container (min-width: ${xn}px) {
    .fill {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: calc(var(--fill-ratio, 0) * 100%);
      height: auto;
    }
  }
`,oa=w.div`
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
`,yc={"in-transit":D`
    color: var(--color-text-primary);
  `,"awaiting-reply":D`
    color: var(--color-text-muted);
  `,due:D`
    color: var(--color-text-muted);
  `,overdue:D`
    color: ${$e.warn};
  `,lost:D`
    color: ${$e.warn};
  `},ra=w.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>yc[e]}
`,sa=w.span`
  flex: 0 0 auto;
  color: ${({$inherit:e})=>e?"inherit":"var(--color-accent-fg)"};

  ${({$pulse:e})=>e&&D`
      @media (prefers-reduced-motion: no-preference) {
        animation: in-flight-list-pulse 1.6s var(--ease-emphasis) infinite;
      }
    `}

  @keyframes in-flight-list-pulse {
    50% {
      opacity: 0.35;
    }
  }
`,wc=w.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,aa=w.span`
  flex: 0 0 auto;
`,kc="Awaiting first signal";function dx({expectedIn:e}){const t=e??0,n=Number.isFinite(t)&&t>0;return a.jsxs(a.Fragment,{children:[kc,n&&As()&&a.jsx($c,{total:t})]})}function $c({total:e}){return a.jsx(_c,{seconds:To(e)??0})}function _c({seconds:e}){return e>0?a.jsxs(a.Fragment,{children:[" ",a.jsx(Di,{level:"muted",children:a.jsx(Ro,{value:Math.ceil(e)})})]}):null}const Lo=e=>D`
  --fit-box: ${e};
`,Mc=e=>D`
  --fit-mask: ${e};
`;function ia(e){return e==="go"||e==="info"?"caution":e}function vn({tone:e,size:t="md",live:n=!1,report:o,held:r,children:s,...i}){const l=Ao(r),c=l===void 0?e:ia(e),d=c===void 0||c==="neutral"?void 0:c,h=o?.label??(typeof s=="string"?s:"");ko(o?{id:o.id,severity:d??"go",label:h}:null);const f=n?{role:"status","aria-live":"polite"}:{},x=l===void 0?null:yt(l),m=Reflect.get(i,"data-tooltip")!==void 0,{anchor:g,tip:v}=qt(m?null:x);return a.jsxs(a.Fragment,{children:[a.jsxs(Ac,{$severity:d,$size:t,...f,...g,...i,children:[s,x!==null&&a.jsxs(a.Fragment,{children:[a.jsx(Ic,{"aria-hidden":"true","data-held-mark":""}),a.jsxs(Ve,{"data-unit-currency":"",children:[", ",x]})]})]}),v]})}const Sc=D`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,jc={go:D`
    background: transparent;
    border-color: ${ae.go};
    color: ${$e.go};
  `,info:D`
    background: transparent;
    border-color: ${ae.info};
    color: ${$e.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${ae.info} 40%, transparent);
  `,caution:D`
    background: transparent;
    border-color: ${ae.caution};
    color: ${$e.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${ae.caution} 45%, transparent);
  `,warn:D`
    background: transparent;
    border-color: ${ae.warn};
    color: ${$e.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${ae.warn} 55%, transparent);
  `,nogo:D`
    background: transparent;
    border-color: ${ae.nogo};
    color: ${$e.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${ae.nogo} 65%, transparent);
  `,offline:D`
    background: transparent;
    border-color: ${ae.offline};
    color: ${$e.offline};
  `},Ec={sm:D`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:D`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},Ac=w.span`
  display: inline-block;
  position: relative;
  /* Sized by its own text, never stretched to a taller flex sibling. */
  align-self: center;
  ${Lo("badge")}
  border: 1px solid;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;

  border-radius: var(--radius-pill);

  ${({$size:e})=>Ec[e]}
  ${({$severity:e})=>e===void 0?Sc:jc[e]}
`,Ic=w.span`
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
 */const la=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=e=>{const t=Cc(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Pc=p.createContext({}),Lc=()=>p.useContext(Pc),Nc=p.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:o,className:r="",children:s,iconNode:i,...l},c)=>{const{size:d=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:x="currentColor",className:m=""}=Lc()??{},g=o??f?Number(n??h)*24/Number(t??d):n??h;return p.createElement("svg",{ref:c,...qn,width:t??d??qn.width,height:t??d??qn.height,stroke:e??x,strokeWidth:g,className:la("lucide",m,r),...!s&&!Tc(l)&&{"aria-hidden":"true"},...l},[...i.map(([v,k])=>p.createElement(v,k)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=(e,t)=>{const n=p.forwardRef(({className:o,...r},s)=>p.createElement(Nc,{ref:s,iconNode:t,className:la(`lucide-${Rc(Sr(e))}`,`lucide-${e}`,o),...r}));return n.displayName=Sr(e),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Fc=z("arrow-down",Oc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],zc=z("arrow-left",Dc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Bc=z("arrow-right",Hc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Xc=z("arrow-up-to-line",Wc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Gc=z("arrow-up",Uc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],qc=z("bell",Yc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Kc=z("check",Vc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Qc=z("chevron-down",Zc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ed=z("chevron-left",Jc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],nd=z("chevron-right",td);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],rd=z("chevron-up",od);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],ad=z("columns-2",sd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],ld=z("computer",id);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],dd=z("corner-down-left",cd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],hd=z("database",ud);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],pd=z("file-text",fd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],md=z("grip",gd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],vd=z("heart",xd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],yd=z("history",bd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],kd=z("house",wd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],_d=z("info",$d);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],Sd=z("joystick",Md);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ed=z("layers",jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Id=z("lightbulb-off",Ad);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Cd=z("lightbulb",Rd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Pd=z("lock",Td);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Nd=z("maximize",Ld);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Fd=z("menu",Od);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],zd=z("microscope",Dd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],Bd=z("minimize",Hd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Xd=z("pause",Wd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Gd=z("pencil",Ud);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],qd=z("play",Yd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Kd=z("plus",Vd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Qd=z("radio",Zd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],eu=z("rectangle-horizontal",Jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],nu=z("rectangle-vertical",tu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],ru=z("rotate-ccw",ou);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],au=z("rotate-cw",su);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],lu=z("rows-2",iu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],du=z("satellite",cu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],hu=z("settings",uu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],pu=z("square",fu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],mu=z("star",gu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],vu=z("undo-2",xu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],yu=z("volume-2",bu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],ku=z("volume-x",wu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],_u=z("wrench",$u);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Su=z("x",Mu),ju="var(--icon-size-control)",Eu={strokeWidth:1.8,"aria-hidden":!0};function H(e,t){const n=p.forwardRef(({label:o,size:r=ju,style:s,...i},l)=>{const c=typeof r=="number"?{size:r,style:s}:{style:{width:r,height:r,...s}},d=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return a.jsx(e,{...Eu,...t,...d,...i,...c,ref:l})});return n.displayName=e.displayName??e.name,n}const ux=H(md),hx=H(Sd),fx=H(yd),px=H(kd),gx=H(_d),mx=H(Pd),xx=H(Qd),vx=H(yu),bx=H(ku),yx=H(qc),wx=H(Ed),kx=H(hu),$x=H(du),_x=H(Nd),Mx=H(Bd),Sx=H(hd),jx=H(ld),Ex=H(pd),Ax=H(Kd,{strokeWidth:2.4}),Au=H(Su),Ix=H(Gd),Rx=H(Kc),Iu=H(mu),Cx=H(vd),Tx=H(Fd),Ru=H(zd),Px=H(qd),Lx=H(Xd),Nx=H(pu),Ox=H(rd),Fx=H(Qc),Dx=H(ed),zx=H(nd),Hx=H(zc),Bx=H(Gc),Wx=H(Bc),Xx=H(Fc),Ux=H(Xc),Gx=H(vu),Yx=H(au),qx=H(ru),Vx=H(ad),Kx=H(eu),Zx=H(lu),Qx=H(nu),Jx=H(dd),Cu=z("space-helmet",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M10.5 8h3a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 1 0-7z",key:"visor"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),Tu=z("space-helmet-visor-up",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M8 7.5C9.5 5 14.5 5 16 7.5",key:"visor"}],["circle",{cx:"12",cy:"12.5",r:"2",fill:"currentColor",key:"face"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),e1=H(Cu),t1=H(Tu),n1=H(_u),o1=H(Cd),r1=H(Id),Pu={},Lu={byKey:new Map,unaddressed:void 0,separate:!1};function jr(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Nu(e,t){if(e.separate!==t.separate||!jr(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!jr(o,t.byKey.get(n)))return!1;return!0}function Ou(e,t,n,o){const r=new Map;e!==void 0&&r.set($o(e),n);for(const[s,i]of Object.entries(t??{}))i!==void 0&&r.set(Bi(s),i);return{byKey:r,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function Fu(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Du(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function zu(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,i)=>s.depth-i.depth);let r=!1;for(const s of o)s.resettle(n)&&(r=!0);if(r)for(const s of t)s()}}}function Hu(e){const t=new Map,n=new Map,o=new Set,r=e?.root??zu();let s=Lu;const i=c=>{let d;for(const h of c){const f=h.position;f!==void 0&&(d===void 0||f.base>d.base)&&(d=f)}return d?.rung},l={root:r,depth:e===void 0?0:e.depth+1,hold(c,d,h){const f=t.get(c);if(h===void 0)f!==void 0&&(f.delete(d),f.size===0&&t.delete(c));else{if(Du(f?.get(d),h))return;f===void 0?t.set(c,new Map([[d,h]])):f.set(d,h)}e===void 0?r.sweep(c):e.hold(c,d,h)},settled:c=>n.get(c),readsAsOneFigure:c=>o.has(c),setPolicy(c){if(!Nu(s,c)){s=c;for(const d of t.keys())r.sweep(d)}},resettle(c){const d=[...t.get(c)?.values()??[]],h=e?.settled(c),f=s.byKey.get(c)??s.unaddressed??Pu,x=f.format??h?.format??i(d),m=f.as??h?.as,g=f.decimals??(s.separate?Wi(d,{format:x,as:m}):h?.decimals),v=x===void 0&&m===void 0&&g===void 0?void 0:{...x!==void 0&&{format:x},...m!==void 0&&{as:m},...g!==void 0&&{decimals:g}},k=s.separate&&Ts(d,{format:x,as:m,decimals:g}),E=k!==o.has(c);return k?o.add(c):o.delete(c),Fu(n.get(c),v)?E:(v===void 0?n.delete(c):n.set(c,v),!0)},attach(){r.family.add(l);for(const c of t.keys())r.sweep(c)},detach(){r.family.delete(l)}};return r.family.add(l),l}const No={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},Ut=p.createContext(No);function Bu(){return p.useContext(Ut)!==No}function s1({children:e,of:t,pins:n,format:o,as:r,decimals:s,separate:i=!1}){const l=p.useContext(Ut),[c]=p.useState(()=>Hu(l===No?void 0:l));return p.useLayoutEffect(()=>(c.attach(),()=>c.detach()),[c]),p.useLayoutEffect(()=>{c.setPolicy(Ou(t,n,{format:o,as:r,decimals:s},i))},[c,t,n,o,r,s,i]),a.jsx(Ut.Provider,{value:c,children:e})}function Wu(e,t={}){const n=p.useContext(Ut),o=p.useId(),r=Is(e),s=e?.unit,l=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||r===null?void 0:$o(s),c=l===void 0||r===null||s===void 0||zi(s)===void 0?void 0:Hi(r,s),d=c?.base,h=c?.rung;return p.useLayoutEffect(()=>{if(!(l===void 0||r===null||s===void 0))return n.hold(l,o,{reading:r,unit:s,...d!==void 0&&h!==void 0&&{position:{base:d,rung:h}}}),()=>n.hold(l,o,void 0)},[n,o,l,r,s,d,h]),p.useSyncExternalStore(n.root.subscribe,()=>l===void 0?void 0:n.settled(l),()=>{})}function a1(e,t={}){const n=p.useContext(Ut),r=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||Is(e)===null||e===null||e===void 0?void 0:$o(e.unit);return p.useSyncExternalStore(n.root.subscribe,()=>r===void 0?!1:n.readsAsOneFigure(r),()=>!1)}const Xu=qi,Uu={sci:Ru,rep:Iu},ca=w.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,Gu=w.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?D`
          position: relative;
          ${Xs(e,t)}
        `:""}
`,Yu=w.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,qu=w(Ve)`
  user-select: none;
`,da=w(Ve)`
  user-select: none;
`,Vu=" ";function Ku(e,t,n,o){if(t===void 0)return null;const r=x=>wo(x.magnitude,x.unit,{...n,format:o}).value,s=(x,m)=>r(m.minus(x)),i=Ts([t.lo,t.hi],{...n,format:o});if(!qs(e,[t.lo,t.hi],Io(r)))return null;const l=s(t.lo,t.value),c=s(t.value,t.hi),d=x=>/^[-+\u2212]?[0.,\s]*$/.test(x);if(!i&&d(l)&&d(c))return null;const h=r(t.value)===r(e),f={...n,format:o};return{oneFigure:i,plusMinus:!i&&h&&l===c?c:null,lo:r(t.lo),hi:r(t.hi),loSaid:pr(t.lo,f),hiSaid:pr(t.hi,f),kind:t.kind}}function Zu(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function Vn({token:e,className:t,spaced:n}){const o=Xi(e,Ui(e));if(o==="")return null;const r=Gi(o),s=Yi(o),i=Uu[s?.head??o],l=Xu.has(o),c=r!==void 0;return a.jsxs(a.Fragment,{children:[n&&!l?Vu:null,a.jsx(Se,{text:r,announce:!1,children:a.jsxs(ca,{$attached:l,$icon:i!==void 0,className:t,"data-unit":e,children:[i?a.jsxs(a.Fragment,{children:[a.jsx(i,{size:"1em"}),s&&a.jsxs("span",{"aria-hidden":"true",children:["/",s.rest]})]}):c?a.jsx("span",{"aria-hidden":"true",children:o}):o,c&&a.jsxs(da,{"data-unit-word":"",children:[" ",r]})]})})]})}function Er({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:r,marked:s,elsewhere:i,...l}){const c=Sn(e,{drawsReckoning:r}),d=s!=null&&!c.held&&c.shown!=null?{...c,held:!0,mark:s.kind,caption:s.caption}:c,{shown:h,held:f,mark:x,band:m}=d,g=i!=null&&i!==""&&h!=null,v=x??(g?"current":null),k=g?[d.caption,i].filter(Boolean).join("; "):d.caption,E=Wu(h,l),S=Bu(),P=o===!0&&S,j=E===void 0?l:{...E,...l},I=wo(h?.magnitude,h?.unit,j),M=h==null||m===null||!f?null:Ku(h,Li(m,h.unit),j,I.rung),{anchor:N,tip:_}=qt(Zu(k,M));return e!==void 0||t===void 0?a.jsxs(Gu,{className:n,$mark:v,$elsewhere:g,...Ys(d),...N,children:[I.value,!P&&a.jsx(Vn,{token:I.symbol,spaced:!0}),M!==null&&a.jsxs(Yu,{"data-unit-band":"",children:[M.oneFigure?a.jsxs(a.Fragment,{children:[" (",a.jsx("span",{"aria-hidden":"true",children:"~"}),a.jsx(da,{"data-unit-word":"",children:"approximately "}),M.lo]}):M.plusMinus===null?` (${M.lo} to ${M.hi}`:` ± ${M.plusMinus}`,!P&&a.jsx(Vn,{token:I.symbol,spaced:!0}),M.plusMinus===null?")":null]}),v!==null&&a.jsx(Us,{kind:v,elsewhere:g}),k!==null&&a.jsxs(qu,{"data-unit-currency":"",children:[", ",k]}),_]}):typeof t!="string"?a.jsx(ca,{$attached:!1,$icon:!1,className:n,children:t}):a.jsx(Vn,{token:t,className:n,spaced:!1})}const Qu={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},Ju={center:"center",start:"flex-start",baseline:"baseline"},eh=p.forwardRef(function({justify:t="between",align:n="center",gap:o,wrap:r=!1,children:s,...i},l){return a.jsx(th,{ref:l,$justify:t,$align:n,$gap:o,$wrap:r,...i,children:s})}),th=w.div`
  display: flex;
  align-items: ${({$align:e})=>Ju[e]};
  justify-content: ${({$justify:e})=>Qu[e]};
  gap: ${({$gap:e})=>e?xt[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function Oo(e){const t=Ao(e.held);return t===void 0?{label:e.label,tone:e.tone,title:e.title}:{label:e.label,tone:ia(e.tone),title:e.title??`${e.label}: ${yt(t)}`,held:t}}function Xe(e,t){return Me({magnitude:e,unit:t})}function nh(e,t){const{limit:n,actual:o,unit:r}=t;if(n==null||o==null)return null;switch(e){case tn.LimitReached:{const s=oh(t.quantity),i=`${Xe(o,r)} of ${Xe(n,r)}`;return t.facilityName?`the ${t.facilityName} holds ${i} ${s}`:`it holds ${i} ${s}`}case tn.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${Xe(o,r)} of ${Xe(n,r)}`;case tn.InsufficientFunds:return`it costs ${Xe(Math.trunc(o),r)} and funds are ${Xe(Math.trunc(n),r)}`;case tn.InsufficientScience:return`it costs ${Xe(o,r)} and science is ${Xe(n,r)}`;default:return null}}function oh(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function Ar(e){return e&&Rs(e)?.sentence||null}function rh(e){const t=e?.trim().replace(/\.$/,"");return t||null}function Fo(e){return ua(e,"refused")}function i1(e){return ua(e,"unavailable")}function ua(e,t){const n=rt(e),o=(e.breach?nh(e.errorCode,e.breach):null)??rh(e.detail)??Ar(e.reason)??Ar(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function ha(e){const n=rt(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":sh(Fo({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function sh(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function fa(e){return`${rt(e)||e.command||"The command"}: no reply. May have run.`}function ah(){const e=Ki();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const In=Vi(ah),l1=In.Context;function c1({children:e}){return a.jsx(In.Provider,{children:a.jsx(ih,{children:e})})}function ih({children:e}){const t=In.useStore();return a.jsx(ol.Provider,{value:t,children:e})}const Do=In.useStore,lh=()=>()=>{},ch=[],Ir=()=>ch;function dh(){const e=Do();return p.useSyncExternalStore(e?e.subscribe:lh,e?e.getActiveHandles:Ir,e?e.getActiveHandles:Ir)}const Pt=new WeakMap,fo=new WeakMap;function Rr(e){for(const t of fo.get(e)??[])t()}function uh(e){return Pt.set(e,(Pt.get(e)??0)+1),Rr(e),()=>{Pt.set(e,(Pt.get(e)??1)-1),Rr(e)}}function d1(){const e=Do();return p.useSyncExternalStore(t=>{if(!e)return()=>{};const n=fo.get(e)??new Set;return fo.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(Pt.get(e)??0)>0,()=>!1)}function Rn({children:e,"aria-label":t,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:r=!1,as:s="span",className:i}){const c={role:n?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":t,className:i,"data-live-region":""};return n?a.jsx(Ve,{as:s,...c,children:e}):p.createElement(s,c,e)}const hh=.72,fh=.76;function po({size:e,kind:t="held",figureSize:n}){return a.jsx("tspan",{dy:n===void 0?-e*.55:-(n*hh-e*fh),fontSize:e,fill:re[t].color,"data-held-mark":"","data-reckoning-mark":t,children:re[t].glyph})}function u1({end:e,x1:t,y1:n,x2:o,y2:r}){return a.jsx("line",{"data-bound":e,x1:t,y1:n,x2:o,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function pa(e,t){return t===null?e:`${e}, ${t}`}function ph(e){return e===null?{}:{"data-currency-in-name":""}}function h1({x:e,y:t,size:n,children:o}){return a.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function Cr(e,t){return t?.state!=="held"?e:{...t,value:e}}function Ye(e){return e.kind==="continuous"?"ribbon":"dot"}function gh(e){return e.delivery==="acked"}function mh(e){return e.direction==="command"?"outbound":"inbound"}function ga(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function Cn(e){return`${e.direction}/${e.kind}/${e.delivery}`}const xh={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function zo(e){return xh[Cn(e)]??null}const Tr=new Set;function ma(e,t){const n=Cn(e);if(Tr.has(n))return;Tr.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;As()?Pi.error(o):console.error(o)}const xa=16,Pr=xa/2,vh=5.5,bh=2,yh=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function va(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function wh(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/bh)),Math.max(2,Math.round(o)))}function kh(e,t,n){if(e.length===0)return"";const o=va(e,t,n);if(!(o>0))return`M0.00,${Pr.toFixed(2)}`;const r=wh(e,t,o),s=[];for(let i=0;i<=r;i++){const l=Math.min(i/r*o,o),c=Math.min(Math.round(l/n*t),e.length-1),d=yh(e[e.length-1-c]),h=(i%2===0?-1:1)*d*vh;s.push(`${l.toFixed(2)},${(Pr+h).toFixed(2)}`)}return`M${s.join(" L")}`}const ba=.05,Lr=.02,Nr=1.5,$h=.25,bn=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],Tn=100,Lt=30,_h=1.5,xe=2,Mh=4,ze=Lt-xe-Mh,Ne=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(Tn-n*2),At=e=>xe+(1-Math.max(0,Math.min(1,e)))*ze,ya=e=>e==="inline"?_h:0;function f1(e="inline"){const t=ya(e);return(Tn-t*2)/3}function wa({tags:e,who:t}){return ma(e,t),a.jsx("g",{"data-rail-unrepresented":Cn(e),"data-rail-entry":t})}function nt(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function Or(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(c=>c.age>=t);if(n===-1)return[];const o=e[n-1],r=e[n],s=r.age-o.age||1,i=(t-o.age)/s,l=o.value+i*(r.value-o.value);return[{age:t,value:l},...e.slice(n)]}function Fr(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(d=>d.age>t),r=e.slice(0,o),s=e[o],i=r[r.length-1];if(!i)return[{age:t,value:s.value}];const l=s.age-i.age||1,c=(t-i.age)/l;return[...r,{age:t,value:i.value+c*(s.value-i.value)}]}const Sh=.25;function Dt(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>o.age)return null;if(t===o.age)return o.value;for(let r=1;r<e.length;r++){const s=e[r];if(t<=s.age){const i=e[r-1],l=(t-i.age)/(s.age-i.age||1);return i.value+l*(s.value-i.value)}}return o.value}function jh(e,t,n){const o=t.length>0&&t[t.length-1].age>=n-$h,r=e.map(l=>{if(Dt(t,l.age)===null)return!1;let c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;const h=g=>{g!==null&&(c=Math.min(c,g),d=Math.max(d,g))},f=l.age-Nr,x=l.age+Nr;let m=Dt(t,x);if(m===null){if(!o)return!1;m=t[t.length-1].value}h(Dt(t,f)),h(m);for(const g of t)g.age>f&&g.age<x&&h(g.value);return l.value<c-Lr||l.value>d+Lr}),s=[];let i=0;for(let l=1;l<=r.length;l++)l<r.length&&r[l]===r[i]||(s.push({from:i,to:Math.min(l,r.length-1),off:r[i]}),i=l);return s}function Eh({stream:e,span:t,index:n,padX:o,oneT:r,twoT:s}){const l=`var(${bn[n%bn.length]})`,c=p.useId(),d=`cds-ramp-${c}-${n}`,h=`cds-fill-${c}-${n}`,f=`cds-tail-${c}-${n}`,x=zo(e.tags);if(x!=="continuous-strip")return x===null?a.jsx(wa,{tags:e.tags,who:e.id}):null;const m=gh(e.tags),g=m?e.inTransit:Fr(e.inTransit,r),v=g.map(T=>({x:Ne(T.age,t,o),y:At(T.value)}));if(v.length===0)return null;const E=(m?[]:Fr(Or(e.inTransit,r),r*(1+Sh))).map(T=>({x:Ne(T.age,t,o),y:At(T.value)})),S=E.length>1&&E[E.length-1].x>E[0].x,P=`${nt(v)} L${v[v.length-1].x.toFixed(2)},${(xe+ze).toFixed(2)} L${v[0].x.toFixed(2)},${(xe+ze).toFixed(2)} Z`,j=m?Or(e.echo,s):[],I=j.map(T=>({x:Ne(T.age,t,o),y:At(T.value)})),M=j.map(T=>({x:Ne(T.age,t,o),y:At(Dt(e.inTransit,T.age)??T.value)})),N=jh(j,e.inTransit,t),_=g[g.length-1].age,L=Dt(j,_),W=j.filter(T=>T.age>_),q=(L===null||W.length===0?W:[{age:_,value:L},...W]).map(T=>({x:Ne(T.age,t,o),y:At(T.value)})),O=q.length>1?`${nt(q)} L${q[q.length-1].x.toFixed(2)},${(xe+ze).toFixed(2)} L${q[0].x.toFixed(2)},${(xe+ze).toFixed(2)} Z`:null;return a.jsxs("g",{"data-stream-group":e.id,"data-return-leg":m,children:[a.jsxs("defs",{children:[a.jsxs("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:v[0].x,y1:"0",x2:Math.max(v[v.length-1].x,v[0].x+1),y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.10"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0.40"})]}),a.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.22"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]}),S&&a.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:E[0].x,y1:"0",x2:E[E.length-1].x,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.40"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]})]}),a.jsx("path",{"data-role":"area",d:P,fill:`url(#${h})`,stroke:"none"}),O&&a.jsx("path",{"data-role":"echo-area",d:O,fill:`url(#${h})`,stroke:"none"}),a.jsx("path",{"data-role":"commanded","data-stream":e.id,d:nt(v),fill:"none",stroke:`url(#${d})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),S&&a.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:nt(E),fill:"none",stroke:`url(#${f})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),N.map(T=>T.off?a.jsxs(p.Fragment,{children:[a.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:nt(I.slice(T.from,T.to+1)),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),a.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:nt(M.slice(T.from,T.to+1)),fill:"none",stroke:l,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]},T.from):T.to>T.from&&a.jsx("path",{"data-role":"echo","data-stream":e.id,d:nt(I.slice(T.from,T.to+1)),fill:"none",stroke:l,strokeWidth:"0.8",strokeLinecap:"round"},T.from))]})}function Ah({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${p.useId()}`,o=e.tags,r=zo(o);if(r!=="continuous-strip")return r===null?a.jsx(wa,{tags:o,who:e.id}):null;const s=(Tn-t*2)/3,i=e.amplitudes,l=e.spanSamples??i.length,c=kh(i,l,s);if(c==="")return null;const d=Math.max(va(i,l,s),1),h=`var(${ga(o)})`,f=mh(o)==="outbound";return a.jsxs("g",{"data-ribbon-group":e.id,transform:`translate(${t} ${xe}) scale(1 ${ze/xa})`,children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:f?0:d,y1:"0",x2:f?d:0,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:h,stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:h,stopOpacity:"0.1"})]})}),a.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:c,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function Ih({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:r}){const s=`cds-divfade-${p.useId()}`,i=r?.state==="held",l=i?Sn(r??null).caption:null,{anchor:c,tip:d}=qt(l),h=[...e,...t].find(j=>j.oneWaySeconds!==null),f=h?.oneWaySeconds??null;if(!h||f===null||yo(f)!=="shown")return null;const x=f>=ba;if(!x&&t.length===0)return null;const m=3*f,g=f,v=2*f,k=ya(o),E=Ne(g,m,k),S=Ne(v,m,k),P=e.every(j=>j.inTransit.length===0&&j.echo.length===0)&&t.every(j=>j.amplitudes.length===0);return a.jsxs(Rh,{"data-oneway":f,"data-variant":o,$variant:o,...c,children:[a.jsxs(Ch,{$variant:o,$quiet:P,role:"img","aria-label":pa(n,l),...ph(l),viewBox:`0 0 ${Tn} ${Lt}`,preserveAspectRatio:"none",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:xe,x2:"0",y2:xe+ze,children:[a.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(x?e:[]).map((j,I)=>a.jsx(Eh,{stream:j,span:m,index:I,padX:k,oneT:g,twoT:v},j.id)),t.map(j=>a.jsx(Ah,{ribbon:j,padX:k},j.id)),a.jsx("line",{"data-divider":"t",x1:E,x2:E,y1:xe,y2:xe+ze,stroke:`url(#${s})`,strokeWidth:"0.4"}),a.jsx("line",{"data-divider":"2t",x1:S,x2:S,y1:xe,y2:xe+ze,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&a.jsxs("g",{"data-role":"hover-labels",children:[a.jsxs("text",{x:E,y:xe-.4,textAnchor:"middle",fontSize:"2",children:[Me(Te("s",f),{decimals:1}),i&&a.jsx(po,{size:1.2})]}),a.jsxs("text",{x:S,y:xe-.4,textAnchor:"middle",fontSize:"2",children:[Me(Te("s",2*f),{decimals:1}),i&&a.jsx(po,{size:1.2})]}),a.jsx("text",{x:Ne(f/2,m,k),y:Lt-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),a.jsx("text",{x:Ne(1.5*f,m,k),y:Lt-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),a.jsx("text",{x:Ne(2.5*f,m,k),y:Lt-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&a.jsxs(a.Fragment,{children:[a.jsxs(Th,{"aria-hidden":"true",children:[a.jsxs("span",{children:["outgoing ",a.jsx("b",{children:"0"})]}),a.jsxs("span",{children:["echo"," ",a.jsx("b",{children:a.jsx(Er,{value:Cr(Te("s",f),r),decimals:1})})]}),a.jsxs("span",{children:["confirmed"," ",a.jsx("b",{children:a.jsx(Er,{value:Cr(Te("s",2*f),r),decimals:1})})]})]}),a.jsxs(Ph,{"aria-hidden":"true",children:[(x?e:[]).map((j,I)=>a.jsxs("span",{children:[a.jsx("i",{style:{background:`var(${bn[I%bn.length]})`}}),j.label]},j.id)),t.map(j=>a.jsxs("span",{"data-role":"legend-ribbon",children:[a.jsx("i",{style:{background:`var(${ga(j.tags)})`}}),j.label]},j.id)),x&&e.length>0&&a.jsxs("span",{"data-role":"legend-deviation",children:[a.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),d]})}const Rh=w.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,Ch=w.svg`
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
`,Th=w.div`
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
`,Ph=w.div`
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
`;function Dr({handle:e,handles:t,"aria-label":n,mode:o,density:r,orientation:s,variant:i="inline"}){const l=t??(e?[e]:[]),c=l.length===1?l[0]:null,d=c?zo(c.tags):null;if(c&&d===null)return a.jsx(Lh,{tags:c.tags,who:c["aria-label"]});if(c&&d!=="in-flight-row"){const m=c,g=m.effectiveDelaySeconds;return yo(g)!=="shown"?null:a.jsx(Ih,{streams:m.streams??[],ribbons:m.ribbons??[],delayReading:m.delayReading,"aria-label":n??m["aria-label"],variant:i})}const h=Qs(l.flatMap(m=>m.inFlight)),x=l.some(m=>m.dismiss)?m=>l.find(g=>g.inFlight.some(v=>v.id===m))?.dismiss?.(m):void 0;return a.jsx(tc,{items:h,"aria-label":n,mode:o,density:r,orientation:s,variant:i,onDismiss:x})}function Lh({tags:e,who:t}){return ma(e,t??"unnamed handle"),a.jsx("span",{hidden:!0,"data-rail-unrepresented":Cn(e)})}function ka(e){const n=rt(e)||e.command||"The command",o=e.code===void 0?void 0:Rs(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function $a(e){return`${rt(e)||e.command||"The command"}: never sent. Safe to re-send.`}function _a(e){return`${rt(e)||e.command||"The command"}: ${e.warning}`}const Nh={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed",warned:"Commands likely to be lost"},Oh={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command",warned:"warned command"};function Fh(e,t){return e.kind==="refused"?Fo(e.entries[t]):e.kind==="found"?ha(e.entries[t]):e.kind==="failed"?ka(e.entries[t]):e.kind==="warned"?_a(e.entries[t]):e.kind==="undelivered"?$a(e.entries[t]):fa(e.entries[t])}function Dh(e){return e.entries.map((t,n)=>{const o=rt(t);return{id:t.id,subject:o||t.command||"",sentence:Fh(e,n),dismissLabel:`Dismiss ${o||Oh[e.kind]}`,tags:t.tags}})}function ht(e){const{kind:t,onDismiss:n,live:o=!0}=e,r=e["aria-label"]??Nh[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const i=Dh(e).map(l=>a.jsxs(Bh,{role:o?void 0:"listitem",$tone:s,children:[Ye(l.tags)==="ribbon"?a.jsx(Xh,{$tone:s,children:l.subject}):a.jsx(Wh,{"aria-hidden":"true",$tone:s,children:Co(l.subject)}),a.jsx(Uh,{children:l.sentence}),n&&a.jsx(Gh,{type:"button","data-dismiss":"",onClick:c=>{Vs(c.currentTarget),n(l.id)},"aria-label":l.dismissLabel,children:"✕"})]},l.id));return o?a.jsx(Hh,{forwardedAs:"div","aria-label":r,"data-command-list":"",additionsOnly:!0,children:i}):a.jsx(zh,{role:"list","aria-label":r,"data-command-list":"",children:i})}const Ma=D`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,zh=w.div`
  ${Ma}
`,Hh=w(Rn)`
  ${Ma}
  &:empty {
    margin: 0;
  }
`,Bh=w.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>ae[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${ae[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,Wh=w.span`
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  min-width: 34px;
  padding: var(--inset-glyph);
  align-self: stretch;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: ${({$tone:e})=>$e[e]};
  border: 1px solid ${({$tone:e})=>ae[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${ae[e]} 14%, var(--color-surface-raised))`};
`,Xh=w.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>$e[e]};
`,Uh=w.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,Gh=w.button`
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
  ${st}
`;function mt(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,o)=>mt(n,t[o]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const n=[...t];return[...e].every(o=>{const r=n.findIndex(s=>mt(o,s));return r===-1?!1:(n.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[n,o]of e)if(!t.has(n)||!mt(o,t.get(n)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const n=e,o=t,r=new Set;for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of r)if(!mt(n[s],o[s]))return!1;return!0}return!1}function Pn(e,t,n,o){const[r,s]=p.useState(o),i=p.useRef(t);i.current=t;const l=p.useRef(n);l.current=n;const c=p.useRef(r);return c.current=r,p.useEffect(()=>{if(!e)return;let d=c.current;const h=()=>{const g=i.current(e);l.current(d,g)||(d=g,s(g))};h(),e.addEventListener("scroll",h,{passive:!0});const f=new ResizeObserver(h);f.observe(e);for(const g of Array.from(e.children))f.observe(g);let x;const m=new MutationObserver(g=>{if(g.some(v=>v.type==="childList")){for(const v of Array.from(e.children))f.observe(v);h();return}x===void 0&&(x=requestAnimationFrame(()=>{x=void 0,h()}))});return m.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style"]}),()=>{e.removeEventListener("scroll",h),f.disconnect(),m.disconnect(),x!==void 0&&cancelAnimationFrame(x)}},[e]),r}function Yh(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function Sa(e){return Pn(e,Yh,Object.is,!1)?0:void 0}function qh({label:e,selected:t,count:n,onToggle:o}){return a.jsxs(Vh,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[a.jsx("span",{children:e}),n!==void 0&&a.jsx(Kh,{children:n})]})}const Vh=w.button`
  ${Lo("chip")}
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

  ${st}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`,Kh=w.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function Zh({value:e,onChange:t,clearLabel:n="Clear search",className:o,...r}){const s=p.useRef(null);return a.jsxs(Qh,{className:o,children:[a.jsx(Jh,{...r,ref:s,type:"search",value:e,onChange:i=>t(i.target.value)}),e!==""&&a.jsx(ef,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:a.jsx(Au,{size:"var(--icon-size-control)"})})]})}const Qh=w.div`
  position: relative;
  display: flex;
  align-items: center;
`,Jh=w(zl)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,ef=w(Ol)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function p1({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=Zi(e),r=[...new Set(o)],[s,i]=p.useState(()=>new Set),[l,c]=p.useState(""),d=p.useId(),h=g=>{i(v=>{const k=new Set(v);return k.has(g)?k.delete(g):k.add(g),k})},f=[...s,l].filter(g=>g.length>0).map(g=>g.toLowerCase()),x=a.jsxs(Ps,{gap:"related-packed",children:[a.jsxs(Fl,{children:[a.jsx(Dl,{htmlFor:d,children:t}),a.jsx(Zh,{id:d,value:l,placeholder:n,onChange:c})]}),r.length>0&&a.jsx(eh,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:r.map(g=>a.jsx(qh,{label:g,selected:s.has(g),onToggle:()=>h(g)},g))})]}),m={matches:g=>{const v=g.toLowerCase();return f.every(k=>v.includes(k))},active:f.length>0};return ja.set(m,x),m}const ja=new WeakMap;function Ea(e){return ja.get(e)??null}function g1({filter:e,children:t,fill:n=!1}){return a.jsxs(Ps,{gap:"related-dense",fill:n,children:[Ea(e),t]})}const tf={accent:"var(--color-accent-fg)",warn:"var(--color-warn-mark)"},nf=24,of=96;function rf({children:e,padded:t,caption:n,footer:o,strip:r,shape:s="rounded",edgeCue:i,...l}){const c=s==="circle",d=!c||i===void 0?[]:[i].flat(),h=!c&&r!==void 0&&r!==null&&r!==!1;return a.jsxs(sf,{$padded:t&&!h,$stacked:h,$circle:c,$cued:d.length>0,"data-shape":c?"circle":void 0,...l,children:[h?a.jsxs(a.Fragment,{children:[a.jsx(hf,{$padded:t,children:e}),a.jsx(ff,{"data-framed-display-strip":"",children:r})]}):c&&i!==void 0?a.jsx(af,{children:e}):e,d.length>0&&a.jsx(uf,{cues:d}),n!=null&&a.jsx(Ia,{children:n}),o!=null&&a.jsx(pf,{children:o})]})}const sf=w.div`
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
`,af=w.div`
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
`,Ae=12,zr=1,lf=3,Aa=1,cf=100*Aa/200,Hr=e=>e*Math.PI/180;function df(e,t=cf){const n=Math.min(Math.max(e.span??90,1),359),o=Math.min(Math.max(Number.isFinite(e.grow)?e.grow:0,0),1),r=50,i=50+(zr+(lf-zr)*o)*t,l=Hr(e.angle-n/2),c=Hr(e.angle+n/2),d=(f,x)=>`${(50+f*Math.cos(x)).toFixed(3)} ${(50-f*Math.sin(x)).toFixed(3)}`,h=n>180?1:0;return`M${d(r,l)}A${r} ${r} 0 ${h} 0 ${d(r,c)}L${d(i,c)}A${i} ${i} 0 ${h} 1 ${d(i,l)}Z`}function uf({cues:e}){const{ref:t,size:n}=jn({w:100+2*Ae,h:100+2*Ae}),o=(100+2*Ae)/Math.max(n.w,1),r=Aa*o;return a.jsx("div",{ref:t,"aria-hidden":"true",style:{position:"absolute",left:`${-Ae}%`,top:`${-Ae}%`,width:`${100+2*Ae}%`,height:`${100+2*Ae}%`,pointerEvents:"none"},children:a.jsx("svg",{"aria-hidden":"true","data-edge-cues":"",viewBox:`${-Ae} ${-Ae} ${100+2*Ae} ${100+2*Ae}`,style:{display:"block",width:"100%",height:"100%",overflow:"visible"},children:e.map(s=>a.jsx("path",{"data-edge-cue":"",d:df(s,r),fill:tf[s.tone]},`${s.angle}-${s.tone}`))})})}const hf=w.div`
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
`,ff=w.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${nf}px;
  max-height: ${of}px;
  min-width: 0;
  overflow: hidden;
`,Ia=w.div`
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
`,pf=w(Ia)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,Br={width:160,height:72},gf=2.5,mf=420;function m1({width:e,height:t,plotHasData:n}){return!n&&e>=Br.width&&t>=Br.height?"center":e>=mf&&e>=t*gf?"beside":"inline"}const xf={overlay:D`
    position: absolute;
    bottom: var(--offset-graph-notice-bottom);
    left: var(--offset-graph-notice-left);
  `,center:D`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    text-align: center;
  `,inline:D`
    flex: 0 0 auto;
    align-self: flex-start;
    max-width: 100%;
    margin-top: var(--gap-sub-readout);
  `,beside:D`
    flex: 0 1 30%;
    align-self: flex-start;
    max-width: 40%;
  `};function vf({placement:e,role:t="status",children:n,...o}){return a.jsx(bf,{$placement:e,role:t,...o,children:n})}const bf=w.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${Qi.regular};
  pointer-events: none;

  ${({$placement:e})=>xf[e]}
`,yn=8;function Ra(e){const t=[{cols:1,rows:e}];for(let n=2;n<=e;n++){const o=Math.ceil(e/n);o<(t.at(-1)?.rows??e)&&t.push({cols:n,rows:o})}return t}function Ca(e){return e===0?"0px":`(${e}px + var(--gap-related))`}const Ta=(e,t)=>`calc(${e} * ${t} + ${(e-1)*yn}px)`,yf=(e,t,n)=>`calc(${e} * (${t} + ${n+yn}px) + ${(e-1)*yn}px)`;function wf(e,t,n,o,r){const s=Ca(n),i=Ra(e).slice(1).map(({cols:c,rows:d})=>`
  @container grid-squares-width (width >= ${Ta(c,t)}) {
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
`}function kf(e,t,n,o){const r=Ra(e),s=o!==void 0;return r.slice(1).map(({cols:i,rows:l},c)=>`
  @container grid-squares (aspect-ratio >= ${(.88*i/r[c].rows).toFixed(2)}) and ((width >= ${Ta(i,t)}) or (height < ${yf(s?l:r[c].rows,o??t,n)})) {
    --cols: ${i};
    --rows: ${l};
  }`).join("")}function $f(e,t){const n=`
  & > * > * {
    --grid-square-heading: ${e===0?"0px":`calc${Ca(e)}`};
  }`;return e===0||t===void 0?n:`${n}
  @container (width < ${t}px) or (height < ${t+e+yn}px) {
    & > * > * {
      --grid-square-heading: 0px;
    }
    & > * [data-grid-square-heading] {
      display: none;
    }
  }`}function _f(e){const t=new Set;return e.map(n=>{const o=n.inFlight.filter(r=>t.has(r.id)?!1:(t.add(r.id),!0));return o.length===n.inFlight.length?n:{...n,inFlight:o}})}function Kn(e){const t=new Set;return e.filter(n=>t.has(n.id)?!1:(t.add(n.id),!0))}function Mf(e){const t=new Map;for(const n of e)for(const o of n.warnings??[]){const r=`${o.command}\0${o.label}\0${o.warning}`;t.has(r)||t.set(r,{...o,id:r,tags:n.tags})}return[...t.values()]}const Wr=new Map,Sf=new Set(["overdue","lost"]);function jf(e){const t=new Set,n=new Set;for(const o of e){for(const r of o.refusals??[])t.add(r.id);for(const r of o.failures??[])t.add(r.id);for(const r of o.undelivered??[])t.add(r.id);for(const r of o.founds??[])(r.outcome==="ran"?n:t).add(r.id)}return{failed:t,ran:n}}function Ef(e){const t=new Map;for(const d of e)for(const h of d.inFlight)h.settling||t.set(h.id,{handleId:d.id,row:h});const{failed:n,ran:o}=jf(e),[r,s]=p.useState({last:Wr,settling:Wr}),i=[...r.last].filter(([d])=>!t.has(d));if(i.length>0||t.size!==r.last.size||[...t].some(([d,h])=>r.last.get(d)?.row!==h.row)){const d=i.map(([h,f])=>{const x=n.has(h)||Sf.has(f.row.predictedPhase)&&!o.has(h)?"failed":"confirmed",m=x==="confirmed"?$r(f.row):0;return[h,{...f,row:{...f.row,settling:x,settleSeconds:m}}]});s({last:t,settling:d.length===0?r.settling:new Map([...r.settling,...d])})}const c=p.useRef(new Map);return p.useEffect(()=>{const d=c.current;for(const[h,f]of r.settling){if(d.has(h))continue;const x=setTimeout(()=>{d.delete(h),s(m=>{const g=new Map(m.settling);return g.delete(h),{...m,settling:g}})},(f.row.settleSeconds??0)*1e3+Wt);d.set(h,x)}},[r.settling]),p.useEffect(()=>{const d=c.current;return()=>{for(const h of d.values())clearTimeout(h)}},[]),r.settling.size===0?e:e.map(d=>{const h=[...r.settling.values()].filter(f=>f.handleId===d.id&&!t.has(f.row.id)).map(f=>f.row.settling==="confirmed"&&n.has(f.row.id)?{...f.row,settling:"failed",settleSeconds:0}:f.row.settling==="failed"&&o.has(f.row.id)?{...f.row,settling:"confirmed",settleSeconds:$r(f.row)}:f.row);return h.length===0?d:{...d,inFlight:[...d.inFlight,...h]}})}function Af(e){if(Ye(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return t===null||t<=0?!1:n>0||t>=ba&&o>0}return e.inFlight.length>0}function Pa({tiny:e}={}){const t=dh(),n=Do();p.useEffect(()=>n?uh(n):void 0,[n]);const o=_f(Ef(t)).filter(Af),r=Mf(t),s=Kn(t.flatMap($=>($.refusals??[]).map(V=>({...V,tags:$.tags})))),i=t.flatMap($=>($.losses??[]).map(V=>({...V,tags:$.tags}))),l=Kn(t.flatMap($=>($.founds??[]).map(V=>({...V,tags:$.tags})))),c=t.flatMap($=>($.undelivered??[]).map(V=>({...V,tags:$.tags}))),d=Kn(t.flatMap($=>($.failures??[]).map(V=>({...V,tags:$.tags})))),h=s.length+c.length+d.length,f=o.length>0||h>0||i.length>0||l.length>0||r.length>0,[x,m]=p.useState(!1),[g,v]=p.useState(!1),[k,E]=p.useState(!1),S=x||g&&!k;p.useEffect(()=>{f||(m(!1),v(!1),E(!1))},[f]);const P=p.useId(),j=[...o.filter($=>Ye($.tags)==="ribbon"),...o.filter($=>Ye($.tags)!=="ribbon")],I=o.some($=>Ye($.tags)==="ribbon"),M=j.filter($=>Ye($.tags)!=="ribbon"),N=Qs(o.filter($=>Ye($.tags)!=="ribbon").flatMap($=>$.inFlight)),L=t.some($=>$.dismiss&&($.refusals?.length??0)>0)?$=>{for(const V of t)V.refusals?.some(ne=>ne.id===$)&&V.dismiss?.($)}:void 0,q=t.some($=>$.dismiss&&($.losses?.length??0)>0)?$=>t.find(V=>V.losses?.some(ne=>ne.id===$))?.dismiss?.($):void 0,T=t.some($=>$.dismiss&&($.undelivered?.length??0)>0)?$=>t.find(V=>V.undelivered?.some(ne=>ne.id===$))?.dismiss?.($):void 0,X=t.some($=>$.dismiss&&($.failures?.length??0)>0)?$=>{for(const V of t)V.failures?.some(ne=>ne.id===$)&&V.dismiss?.($)}:void 0,ie=t.some($=>$.dismiss&&($.founds?.length??0)>0)?$=>{for(const V of t)V.founds?.some(ne=>ne.id===$)&&V.dismiss?.($)}:void 0;return a.jsxs(If,{"data-panel-rail-frame":"",$tiny:e,$hasContent:f,onMouseEnter:()=>{E(!1),v(!0)},onMouseLeave:()=>v(!1),children:[t.length>0&&a.jsxs(Rn,{visuallyHidden:!0,additionsOnly:!0,children:[s.map($=>a.jsxs("span",{children:[Fo($)," "]},`refusal:${$.id}`)),i.map($=>a.jsxs("span",{children:[fa($)," "]},`loss:${$.id}`)),c.map($=>a.jsxs("span",{children:[$a($)," "]},`undelivered:${$.id}`)),d.map($=>a.jsxs("span",{children:[ka($)," "]},`failure:${$.id}`)),l.map($=>a.jsxs("span",{children:[ha($)," "]},`found:${$.id}`)),r.map($=>a.jsx("span",{children:_a($)},`warning:${$.id}`))]}),f?a.jsxs(Cf,{"data-panel-rail":"","data-grown":S,"data-pinned":x,"data-suppress-hover":k,onKeyDown:$=>{$.key==="Escape"&&x&&($.stopPropagation(),m(!1),E(!0))},children:[S&&N.length>0&&!I&&a.jsx(Xr,{children:a.jsx(_r,{items:N,height:Lf})}),a.jsx(Se,{text:!S&&N.length>0?`In flight: ${N.filter($=>!$.settling).map($=>$.label).join(", ")}`:null,children:a.jsx(Tf,{type:"button","aria-expanded":x,"aria-controls":P,"aria-label":"Signal-delay detail",onClick:()=>{m($=>{const V=!$;return V||E(!0),V})},children:a.jsx(Df,{"aria-hidden":"true",hidden:!S,children:"▲"})})}),a.jsxs(Nf,{id:P,"data-panel-rail-detail":"",children:[j.filter($=>!S||Ye($.tags)==="ribbon").map($=>a.jsx(Dr,{handle:$,variant:S?"expanded":"rail","aria-label":$["aria-label"]??(S?"Delay detail":void 0)},$.id)),S&&M.length>0&&a.jsx(Dr,{handles:M,variant:"expanded","aria-label":"Commands in flight"},"queue"),!S&&(h>0||i.length>0||l.length>0||r.length>0)&&a.jsxs(Of,{children:[h>0&&a.jsx(Zn,{children:h===1?"1 command failed":`${h} commands failed`}),i.length>0&&a.jsx(Zn,{children:i.length===1?"1 command unconfirmed":`${i.length} commands unconfirmed`}),r.length>0&&a.jsx(Zn,{children:r.length===1?"1 warning":`${r.length} warnings`}),l.length>0&&a.jsx(Ff,{children:l.length===1?"1 unconfirmed command answered":`${l.length} unconfirmed commands answered`})]})]}),S&&N.length>0&&I&&a.jsx(Xr,{"data-over-graph":"true",children:a.jsx(_r,{items:N,height:Pf})})]}):null,S&&r.length>0&&a.jsx(ht,{kind:"warned",entries:r,live:!1}),S&&s.length>0&&a.jsx(ht,{kind:"refused",entries:s,onDismiss:L,live:!1}),S&&i.length>0&&a.jsx(ht,{kind:"lost",entries:i,onDismiss:q,live:!1}),S&&c.length>0&&a.jsx(ht,{kind:"undelivered",entries:c,onDismiss:T,live:!1}),S&&d.length>0&&a.jsx(ht,{kind:"failed",entries:d,onDismiss:X,live:!1}),S&&l.length>0&&a.jsx(ht,{kind:"found",entries:l,onDismiss:ie,live:!1})]})}const If=w.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,Rf=D`
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
`,Cf=w.div`
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
    ${Rf}
  }
`,Tf=w.button`
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

  ${Yt}

  &[aria-expanded="true"] {
    pointer-events: none;
  }

`,Pf=86,Lf=40,Xr=w.div`
  pointer-events: none;

  &[data-over-graph="true"] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`,Nf=w.div`
  display: contents;
`,Zn=w.span`
  color: ${$e.warn};
`,Of=w.span`
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
`,Ff=w.span`
  color: var(--color-info-text);
`,Df=w.span`
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
`,La=p.createContext(null);function x1({badges:e,children:t}){return a.jsx(La.Provider,{value:e,children:t})}function zf(){return p.useContext(La)}function Na({severity:e,count:t=1}){const n=t>1;return a.jsx(Hf,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${Bt[e]}`:Bt[e],$mark:ae[e],$digits:n?String(t).length:1,children:n&&a.jsx(Bf,{$fill:lo[e],$ink:Cs[e],children:a.jsx(Wf,{"aria-hidden":"true",children:a.jsx("text",{x:"50%",y:"50%",dy:"0.365em",textAnchor:"middle",children:t})})})})}const Ur="8px",Hf=w.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${Ur};
  /* The count's own size, so the width below can be counted in its digits. Digits this size are six pixels tall, which centre in the eight-pixel dot on whole pixels; at seven they are five, and one engine places the baseline half a pixel above or below the middle. */
  font-size: 8px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:Ur};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,Bf=w.span`
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
`,Wf=w.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: currentColor;
`,Xf=()=>()=>{},Gr=()=>Ji;function Oa(){const e=Ls();return p.useSyncExternalStore(e?e.subscribe:Xf,e?e.getBreakdown:Gr,e?e.getBreakdown:Gr)}const Uf=()=>()=>{},Yr=()=>null;function Gf(){const e=Ls();return p.useSyncExternalStore(e?e.subscribe:Uf,e?e.getSummary:Yr,e?e.getSummary:Yr)}const Fa=D`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Yf=12;function qf(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function Vf(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const r=o<e?t-Yf:t;if(n[o]<=r)return o}return n.length-1}function Kf(e,t,n){const[o,r]=p.useState(0),s=p.useRef(o);s.current=o;const i=[t,...n].join(`
`),l=p.useCallback(()=>{const c=e.current,d=i.split(`
`);if(!c||d.length<2){s.current!==0&&(s.current=0,r(0));return}const h=d.map(x=>qf(c,x)),f=Vf(s.current,c.clientWidth,h);f!==s.current&&(s.current=f,r(f))},[e,i]);return p.useLayoutEffect(()=>{l()},[l]),p.useEffect(()=>{const c=e.current;if(!c||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>l());return d.observe(c),()=>d.disconnect()},[e,l]),{index:o,compacted:o>0}}const Zf=24;function Qf(e,t,n,o,r=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&r?!(t>n+Zf):n>t}function qr(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const r=e.cloneNode(!0);n!==void 0&&(r.textContent=n),Object.assign(r.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),r.setAttribute("aria-hidden","true"),o.insertBefore(r,e.nextSibling);const s=r.getBoundingClientRect().width;return o.removeChild(r),s}const Jf={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function It(e){return Number.parseFloat(e)||0}function ep(e,t,n,o){const[r,s]=p.useState(!1),i=p.useRef(r);i.current=r;const l=p.useRef(void 0),c=p.useRef(void 0),d=p.useRef(!1),h=p.useRef(o);h.current=o;const f=p.useCallback(()=>{const m=e.current;if(!m)return;const g=getComputedStyle(m),v=m.getBoundingClientRect().width-It(g.paddingLeft)-It(g.paddingRight),k=qr(t.current,{},h.current),E=qr(n.current,Jf),S=n.current?.closest("[data-panel-aside-expand]")?.parentElement,P=S?getComputedStyle(S):null,j=k===0||E===0?k+E:k+It(g.columnGap)+It(P?.paddingLeft??"")+It(P?.paddingRight??"")+E,I=i.current,M=v>0&&c.current!==void 0&&v<c.current;I&&M&&(d.current=!0);const N=Qf(I,v,j,l.current,d.current);N!==I&&(d.current=N&&M),v>0&&(c.current=v),j>0&&(l.current=j),N!==i.current&&(i.current=N,s(N))},[e,t,n]),x=p.useRef({title:null,aside:null,observer:null});return p.useLayoutEffect(()=>{const m=t.current,g=n.current,v=x.current;if(v.observer===null||v.title!==m||v.aside!==g){v.observer?.disconnect(),v.title=m,v.aside=g,v.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>f());for(const k of[m,g])k&&v.observer?.observe(k,{subtree:!0,childList:!0,characterData:!0,attributes:!0});f();return}v.observer.takeRecords().length>0&&f()}),p.useEffect(()=>{const m=x.current;return()=>{m.observer?.disconnect(),m.observer=null}},[]),p.useEffect(()=>{const m=e.current;if(!m||typeof ResizeObserver>"u")return;const g=new ResizeObserver(()=>f());return g.observe(m),n.current&&g.observe(n.current),()=>g.disconnect()},[e,n,f]),r}const Da=p.createContext("full"),tp=Da.Provider;function v1(){return p.useContext(Da)}const Ln=p.createContext(null);function za({children:e}){const[t,n]=p.useState(null),o=p.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return a.jsx(Ln.Provider,{value:o,children:e})}function np({children:e}){return a.jsx(za,{children:e})}const Ha=`
  & > [${Os}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,wn=w.div`
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
  ${({$hoverTitle:e})=>e?Yt:""}
  /* A hand-composed panel can put sections straight in here, so this box owns the leftover height. */
  ${Ha}
`,op=w.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${Fa}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ba=p.forwardRef(function({compact:t,children:n,...o},r){const s=p.useRef(null),i=typeof n=="string"?n:"",l=t===void 0||i===""?rp:typeof t=="string"?[t]:t,{index:c,compacted:d}=Kf(s,i,l);return a.jsx(Se,{text:d?i:void 0,children:a.jsx(op,{...o,ref:h=>{if(s.current=h,typeof r=="function"){r(h);return}r&&(r.current=h)},"aria-label":d?i:void 0,children:c===0?n:l[c-1]})})}),rp=[],sp=w.div`
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
`,ap=w.div`
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
`,ip=w.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,lp=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,cp=w.details`
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
    ${st}
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

  ${({$collapsed:e})=>e&&D`
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
`,dp=120;function Wa(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${Bt[n.severity]}`:`${Bt[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function Xa({title:e,compactTitle:t,aside:n,toolbar:o,...r}){const s=Oa(),i=p.useRef(null),l=p.useRef(null),c=p.useRef(null),d=ep(i,l,c,typeof e=="string"?e:void 0),[h,f]=p.useState(!1),[x,m]=p.useState(!1),g=p.useRef(null),v=p.useRef(null),k=p.useRef(null),E=p.useCallback(()=>{g.current!==null&&clearTimeout(g.current),g.current=null},[]);p.useEffect(()=>{d||(f(!1),m(!1))},[d]),p.useEffect(()=>E,[E]);const S=d&&(h||x);p.useEffect(()=>{if(!S)return;const M=_=>{_.key==="Escape"&&v.current?.contains(document.activeElement)&&(_.stopPropagation(),E(),m(!1),f(!1),k.current?.focus())},N=_=>{v.current?.contains(_.target)||(E(),m(!1),f(!1))};return document.addEventListener("keydown",M,!0),document.addEventListener("pointerdown",N,!0),()=>{document.removeEventListener("keydown",M,!0),document.removeEventListener("pointerdown",N,!0)}},[S,E]);const P=d?Wa(s):null,{anchor:j,tip:I}=qt(S?null:P);return a.jsxs(sp,{ref:i,"data-panel-header":"",...r,children:[a.jsxs(ap,{children:[e!==void 0&&a.jsx(Ba,{ref:l,compact:t,children:e}),a.jsx(ip,{"aria-hidden":"true",children:a.jsx(vn,{children:null})})]}),n!==void 0&&a.jsx(lp,{children:a.jsxs(cp,{ref:v,"data-panel-aside-expand":"","data-hovering":d&&x?"":void 0,$collapsed:d,open:d?h:!0,onToggle:M=>{d&&(f(M.currentTarget.open),M.currentTarget.open||m(!1))},onPointerEnter:M=>{!d||M.pointerType==="touch"||(E(),m(!0))},onPointerLeave:M=>{M.pointerType!=="touch"&&(E(),g.current=setTimeout(()=>{g.current=null,m(!1)},dp))},children:[a.jsxs("summary",{ref:k,"data-tooltip":j["data-tooltip"],onPointerDown:j.onPointerDown,onPointerUp:j.onPointerUp,onFocus:j.onFocus,onBlur:j.onBlur,"aria-description":P??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(M=>`${M.count} ${Bt[M.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(M=>a.jsx(Na,{severity:M.severity,count:M.count},M.severity)),a.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),I,a.jsx(tp,{value:d?"collapsed":"full",children:a.jsx("div",{"data-panel-aside-full":"",ref:c,children:n})})]})}),o!==void 0&&a.jsx(Ua,{children:o})]})}const Ua=w.div`
  ${Lo("panel-toolbar")}
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
`,up=w.div`
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
  ${Yt}
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
  ${({$loneFrame:e})=>e?`@container (width < ${hp}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${Ha}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${Os}] {
           min-height: 0;
         }`:""}
`,hp="25rem";function Ga({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...r}){const i=p.useContext(Ln)?.registerScroller,[l,c]=p.useState(null),d=p.useCallback(f=>{i?.(f),c(f)},[i]),h=Sa(l);return a.jsx(up,{ref:d,tabIndex:h,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...r,children:e})}const fp="13rem",pp=w.div`
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
  & > [${el}] {
    grid-column: 1 / -1;
  }
  /* A grid opened only to carry the augment slot, with nothing bound, takes no gap above it: a filling section reaches the body's bottom inset. */
  &:empty {
    display: none;
  }
`;function gp({children:e,hoverTitle:t}){const n=p.useRef(null),o=p.useRef(null),r=vp(n,o);return a.jsx(mp,{ref:n,$fits:r,"data-panel-fit-body":"",children:a.jsx(xp,{ref:o,$fits:r,$hoverTitle:t,"data-panel-fit-shifted":r&&t?"":void 0,children:e})})}const mp=w.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,xp=w.div`
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
`;function vp(e,t){const[n,o]=p.useState(!0);return p.useLayoutEffect(()=>{const r=e.current,s=t.current;if(!r||!s)return;const i=()=>{o(yp(bp(s),r.clientHeight))};if(i(),typeof ResizeObserver>"u")return;const l=new ResizeObserver(i),c=()=>{l.observe(r),l.observe(s);for(const h of Array.from(s.children))l.observe(h)};c();const d=new MutationObserver(()=>{c(),i()});return d.observe(s,{childList:!0}),()=>{l.disconnect(),d.disconnect()}},[e,t]),n}function bp(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function yp(e,t){return e<=t}const wp=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,kp=w.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${Yt}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,kn=w.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e})=>e==="top"?"top: 0;":"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: 44px;
  /* The audit reads the mask depth from the gradient, so the literal height costs it nothing. */
  ${Mc("panel-scroll-glow")}
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
`,Ya=p.forwardRef(function({children:t,...n},o){const r=p.useRef(null),[s,i]=p.useState(null),l=p.useCallback(h=>{r.current=h,i(h)},[]);p.useImperativeHandle(o,()=>r.current);const c=Pn(s,Bo,Wo,Ho),d=Sa(s);return a.jsxs(wp,{...n,children:[a.jsx(kp,{ref:l,tabIndex:d,"data-scroll-area-inner":"",children:t}),a.jsx(kn,{$position:"top",$visible:c.top}),a.jsx(kn,{$position:"bottom",$visible:c.bottom})]})});function $p(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const Vr="14rem",_p=5,Mp="45%",Sp=`min(${rl(1,_p).pxH}px, ${Mp})`;function Kr(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const jp=w.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${Kr(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${Kr(t,n)};`}

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
`;function Ep({side:e="end",size:t,placement:n="auto",railBand:o,children:r,...s}){const{ref:i,size:l}=jn({w:1,h:1}),c=$p(t??Vr),d=l.w<=1||c===void 0||l.w>=c*2,h=n==="below"?"block":(n==="beside"||l.w>=l.h)&&d?"inline":"block",f=t??(h==="inline"?Vr:Sp);return a.jsx(jp,{ref:i,"data-panel-split":h,$axis:h,$side:e,$size:f,$railBand:o,...s,children:r})}const Ap=w(Ya)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,Ip=w.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function qa({children:e,...t}){return a.jsx(Ip,{"data-panel-sidebar":"",...t,children:a.jsx(Ap,{children:e})})}const Ho={top:!1,bottom:!1};function Bo(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function Wo(e,t){return e.top===t.top&&e.bottom===t.bottom}const Rp=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function Va({children:e,railBandAbove:t,...n}){const o=p.useContext(Ln),r=o?.scroller??null;p.useEffect(()=>{},[o]);const s=Pn(r,Bo,Wo,Ho);return a.jsxs(Rp,{...n,children:[e,a.jsx(kn,{$position:"top",$visible:s.top&&!t}),a.jsx(kn,{$position:"bottom",$visible:s.bottom})]})}function Cp(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const b1=["sections","actions"],on=Object.freeze({});function Tp({summary:e}){const t=p.useRef(e.severity),[n,o]=p.useState(0);p.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const r=Wa(Oa());return a.jsx(Pp,{$pulse:n,children:a.jsx(Se,{text:r,focusable:!0,children:a.jsx(vn,{tone:e.severity,size:"sm",children:e.label})})})}const Pp=w.span`
  display: inline-flex;
  ${({$pulse:e})=>e>0&&D`
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
`,Ka=w.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,Lp=w.div`
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
`;function Np({children:e}){const t=p.useContext(Ln),n=Pn(t?.scroller??null,Bo,Wo,Ho);return a.jsx(Lp,{"data-panel-sticky-top":"","data-panel-glow-top":n.top?"":void 0,children:e})}function Op({render:e}){const{ref:t,size:n}=jn({w:0,h:0});return a.jsx(Fp,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const Fp=w.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,Dp=w.div`
  flex: 1 1 100%;
  min-width: 0;
`,zp=w(Xa)`
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
`,Hp=w.div`
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
`,Bp=w(Ve)`
  margin: 0;
  ${Fa}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${wn}:hover &,
  ${wn}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function Xo(e){return e.held===void 0?e.label:`${e.label}: ${yt(e.held)}`}function Wp(e){let t=null;for(const n of e){const o=Oo(n),{tone:r}=o;r===void 0||r==="neutral"||(t===null||xr(r)>xr(t.severity))&&(t={severity:r,label:Xo(o)})}return t}function Zr({badges:e}){return a.jsx(a.Fragment,{children:e.map(t=>a.jsx(Xp,{entry:t},t.id))})}function Xp({entry:e}){const t=Oo(e),{tone:n}=t;return ko(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:Xo(t)}),null}function Up({summary:e,announcement:t}){return a.jsxs(a.Fragment,{children:[a.jsx(Se,{text:e.label,focusable:!0,children:a.jsx(Gp,{children:a.jsx(Na,{severity:e.severity})})}),a.jsx(Rn,{visuallyHidden:!0,assertive:!0,children:t})]})}const Gp=w.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,Yp=w.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function qp(e){return e.hoverTitle?a.jsx(Vp,{...e}):a.jsx(Za,{...e,hoverTitleId:void 0})}function Vp(e){const t=p.useId();return a.jsx(Za,{...e,hoverTitleId:t})}function Za({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:r,panelToolbar:s,panelFilter:i,panelFooter:l,panelTrend:c,inactive:d,fitToSize:h,hoverTitle:f,hoverTitleId:x,panelSidebar:m,sidebarSide:g,sidebarSize:v,sidebarPlacement:k,sections:E,sectionMinWidth:S=fp,children:P,...j}){const I=zf(),M=gr("actions"),N=gr("sections"),_=Cp(o,I),L=_.length===0?null:_.map(K=>{const ue=Oo(K),{label:je,tone:Ee,title:Nn}=ue;return a.jsx(Se,{text:Nn,focusable:!0,children:a.jsx(vn,{tone:Ee,held:ue.held,report:Ee===void 0||Ee==="neutral"?void 0:{id:K.id,label:Xo(ue)},children:je})},K.id)}),W=i===void 0?s:a.jsxs(a.Fragment,{children:[s,a.jsx(Dp,{children:Ea(i)})]}),q=r??null,O=q!==null&&q!=="none"&&q!=="live"?q:null;ko(O?{id:"stream",severity:Gn(O),label:mr(O)??""}:null);const T=Gf(),te=T!==null&&_.some(K=>K.id===T.id),X=O===null?null:mr(O),le=te?null:T!==null?a.jsx(Tp,{summary:T}):O===null||X===null?null:a.jsx(Se,{text:`Telemetry stream: ${X}`,focusable:!0,children:a.jsx(vn,{tone:Gn(O),size:"sm",children:X})}),ie=T?.label??X,$=ie===null||ie===""?"":typeof e=="string"?`${e}: ${ie}`:`Status: ${ie}`,V=n===void 0&&le===null&&L===null&&!M?void 0:a.jsxs(a.Fragment,{children:[n,M&&a.jsx(nn,{segment:"actions",props:on}),L,le]}),ne=T??Wp(_)??(O===null||X===null?null:{severity:Gn(O),label:X}),Fe=ne?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${ne.label}`:`Status: ${ne.label}`,Pe=n===void 0&&ne===null&&!M?_.length===0?void 0:a.jsx(Zr,{badges:_}):a.jsxs(a.Fragment,{children:[n,M&&a.jsx(nn,{segment:"actions",props:on}),a.jsx(Zr,{badges:_}),ne!==null&&a.jsx(Up,{summary:ne,announcement:Fe})]}),he=d!==void 0,be=he?[]:p.Children.toArray(E),J=be.length>0,ye=P===void 0&&!N&&!h&&be.length===1&&Kp(be[0]),ce=[];for(const K of be){const ue=!h&&p.isValidElement(K)&&K.props.fill===!0,je=ce.at(-1);!ue&&je!==void 0&&!je.fill?je.nodes.push(K):ce.push({fill:ue,nodes:[K]})}J&&!ce.some(K=>!K.fill)&&ce.push({fill:!1,nodes:[]});const Ze=ce.reduce((K,ue,je)=>ue.fill?K:je,-1),Qe=K=>Math.max(1,K.filter(ue=>!(p.isValidElement(ue)&&ue.props.full===!0)).length),De=[];for(const K of ce){const ue=De.length;if(K.fill){De.push(K.nodes[0]);continue}De.push(a.jsxs(pp,{$min:S,$columns:Qe(K.nodes),children:[K.nodes,ue===Ze&&a.jsx(nn,{segment:"sections",props:on})]},`sections-${ue}`))}const de=he?a.jsx(tl,{reason:d}):J?a.jsxs(a.Fragment,{children:[P,De]}):P,fe=a.jsxs(Ga,{fitToSize:h,loneFrame:ye,hoverTitle:f,children:[a.jsxs(Np,{children:[a.jsx(Pa,{tiny:f}),!f&&a.jsx(zp,{title:e,compactTitle:t,aside:V,toolbar:W})]}),h?a.jsx(gp,{hoverTitle:f,children:de}):de,!J&&!he&&a.jsx(nn,{segment:"sections",props:on})]});return a.jsx(np,{children:a.jsxs(wn,{$railTravels:!0,$hoverTitle:f,...f?{tabIndex:0,role:"group","aria-labelledby":x,"data-tiny-panel":""}:{},...j,children:[a.jsx(Va,{railBandAbove:!0,children:m===void 0||he?fe:a.jsxs(Ep,{side:g,size:v,placement:k,railBand:!0,children:[fe,a.jsx(qa,{children:m})]})}),!he&&c!==void 0&&a.jsx(Op,{render:c}),!he&&l!==void 0&&a.jsx(Ka,{children:l}),f&&a.jsxs(Hp,{"data-panel-hover-title":"",children:[a.jsx(Bp,{as:"h3",id:x,children:e}),Pe!==void 0&&a.jsx(Yp,{children:Pe})]}),a.jsx(Rn,{visuallyHidden:!0,children:f&&Fe!==void 0?"":$})]})})}function Kp(e){if(!p.isValidElement(e)||e.type!==Ns||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=p.Children.toArray(t).filter(r=>!(p.isValidElement(r)&&r.type===vf));if(n.length!==1)return!1;const[o]=n;if(!p.isValidElement(o))return!1;if(o.type===rf)return!0;if(o.type!==p.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const y1=Object.assign(qp,{Context:za,Delay:Pa,Container:wn,Header:Xa,Toolbar:Ua,Footer:Ka,Title:Ba,Glow:Va,Body:Ga,Section:Ns,Sidebar:qa}),Zp={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function w1({cols:e,minColWidth:t,fit:n=!1,gap:o="related-dense",rowGap:r,align:s="center",squares:i=!1,squareHeadingPx:l=0,squareHeadingMinPx:c,minRowHeight:d,children:h,...f}){if(i){const x=p.Children.toArray(h).length,m=t??"120px",g=a.jsx(t0,{$count:x,$min:m,$headingPx:l,$gap:xt[o],$rowMin:d,children:a.jsx(n0,{$count:x,$min:m,$headingPx:l,$gap:xt[o],$rowMin:d,$headingMin:c,"data-grid-squares":"",children:h})});return a.jsx(Jp,{$rowMin:d,...f,children:d===void 0?g:a.jsx(e0,{children:g})})}return a.jsx(Qp,{$cols:e,$minColWidth:t,$fit:n,$gap:o,$rowGap:r,$align:s,...f,children:h})}const Qp=w.div`
  display: grid;
  align-items: ${({$align:e})=>Zp[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${xt[t]} ${xt[e]}`:xt[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:n})=>e||(t?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,Jp=w.div`
  container: grid-squares-width / inline-size;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  ${({$rowMin:e})=>e&&`
  flex-basis: 0;
  min-height: ${e};
`}
`,e0=w(Ya)`
  & > [data-scroll-area-inner] {
    display: flex;
    flex-direction: column;
  }
`,t0=w.div`
  container: grid-squares / size;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${({$count:e,$min:t,$headingPx:n,$gap:o,$rowMin:r})=>wf(e,t,n,o,r)}
`,n0=w.div`
  --cols: 1;
  --rows: ${({$count:e})=>e};
  display: grid;
  flex: 1 1 0;
  min-height: 0;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
  gap: ${({$gap:e})=>e};
  ${({$count:e,$min:t,$headingPx:n,$rowMin:o})=>kf(e,t,n,o)}
  & > * {
    container-type: size;
    min-width: 0;
    min-height: 0;
  }
  ${({$headingPx:e,$headingMin:t})=>$f(e,t)}
`,Qa=.89,Uo=.45;function Ja({kind:e,x:t,y:n,scale:o=1,ghost:r=!1}){const s=re[e],i=s.canvasRadius*o,l={fill:s.color,opacity:r?Uo:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const d=i*Qa;return a.jsx("rect",{x:t-d,y:n-d,width:2*d,height:2*d,...l})}const c=`${t},${n-i} ${t+i},${n+i*.8} ${t-i},${n+i*.8}`;return a.jsx("polygon",{points:c,...l})}function ei(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function Qr(e,t,n,o,r,{ghost:s=!1,scale:i=1}={}){const l=re[n],c=l.canvasRadius*i;if(t.save(),t.globalAlpha=s?Uo:1,t.fillStyle=ei(e,l.cssVar,l.fallback),t.beginPath(),n==="held"){const d=c*Qa;t.rect(o-d,r-d,2*d,2*d)}else t.moveTo(o,r-c),t.lineTo(o+c,r+c*.8),t.lineTo(o-c,r+c*.8),t.closePath();t.fill(),t.restore()}function k1(e,t,{held:n,modelled:o},r={}){n!==void 0&&o!==void 0&&(t.save(),t.globalAlpha=Uo,t.strokeStyle=ei(e,re.modelled.cssVar,re.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.stroke(),t.restore()),n!==void 0&&Qr(e,t,"held",n.x,n.y,{...r,ghost:o!==void 0}),o!==void 0&&Qr(e,t,"modelled",o.x,o.y,r)}const $n=14,Ce=4,Re=6,o0=6,Jr=12,ve=6,zt=8,rn=4.5,go=4,r0=12,s0=190,a0=80;function Nt(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function i0(e,t,n,o){const r=o??e,s=r.x1-r.x0,i=e.y1-e.y0,l=s>=s0&&i>=a0,c=l||o!==void 0,d=l||o?n:n.filter(M=>!M.detail),h=s-ve*2-Ce*2-zt-go,f=o!==void 0,x=Math.floor(h/Re),m=M=>Nt(M.value??gn,x-(M.currency?M.currency.length+2:0)),g=M=>{const N=M.value??gn;if(f)return Nt(M.label,x);if(l)return`${M.label} ${N}`;const _=Math.floor((h-N.length*Re)/Re)-1-(M.modelled?2:0),L=Nt(M.label,Math.min(_,r0));if(L!=="")return`${L} ${N}`;const W=Math.floor(h/Re)-(M.modelled?2:0);return Nt(N,W)},v=M=>(l||f)&&M.currency?M.currency:"",k=M=>v(M)?o0+v(M).length*Re+(M.modelled?Jr:0):M.modelled?Jr:0,E=l?0:zt+go,S=Math.floor((s-ve*2-Ce*2)/Re),P=Math.max(...d.map(M=>f?E+Math.max(g(M).length*Re,m(M).length*Re+k(M)):E+g(M).length*Re+k(M)),c?Math.min(t.length,S)*Re:0),j=c?1:0,I=(d.length*(f?2:1)+j)*$n+Ce*2;return{full:l,named:c,headingChars:S,stacked:f,rows:d,text:g,valueText:m,currencyText:v,cardW:f?s:Math.min(P+Ce*2,s-ve*2),cardH:I,headRows:j,fits:I<=i-ve*2}}function l0(e,t,n,o,r){const s=(i,l)=>i>=t&&i<=t+o&&l>=n&&l<=n+r;for(let i=1;i<e.cx.length;i++){const[l,c,d,h]=[e.cx[i-1],e.cy[i-1],e.cx[i],e.cy[i]];if(![l,c,d,h].every(Number.isFinite))continue;const f=Math.max(1,Math.ceil(Math.hypot(d-l,h-c)/$n));for(let x=0;x<=f;x++)if(s(l+(d-l)*x/f,c+(h-c)*x/f))return!0}return!1}function Go({x:e,plot:t,heading:n,rows:o,column:r,avoid:s=[],traces:i=[]}){const l=i0(t,n,o,r),{rows:c,cardW:d,cardH:h,fits:f}=l,x=t.y0+ve,m=c.flatMap(_=>_.y===void 0||_.y===null?[]:[_.y]),g=(_,L)=>m.every(W=>e+rn<_||e-rn>_+d||W+rn<L||W-rn>L+h),v=t.x1-e-ve,k=v>=d||v>=e-t.x0,E=_=>Math.max(t.x0+ve,Math.min(t.x1-ve-d,_)),S=k?[e+ve,e-ve-d]:[e-ve-d,e+ve],P=[x,t.y1-ve-h].flatMap(_=>S.map(L=>({cardX:E(L),cardY:_}))),j=(_,L)=>i.every(W=>!l0(W,_,L,d,h)),I=(_,L)=>s.every(W=>_+d<W.x0||_>W.x1||L+h<W.y0||L>W.y1),M=P.find(_=>g(_.cardX,_.cardY)&&j(_.cardX,_.cardY)&&I(_.cardX,_.cardY))??P.find(_=>g(_.cardX,_.cardY)&&I(_.cardX,_.cardY))??P.find(_=>g(_.cardX,_.cardY)&&j(_.cardX,_.cardY))??P.find(_=>g(_.cardX,_.cardY)),N=f?r?{cardX:r.x0,cardY:r.y0+ve}:M:void 0;return{layout:l,place:N}}function $1(e){return Go(e).place!==void 0}function c0(e){const{layout:t,place:n}=Go(e);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+t.cardW,y1:n.cardY+t.cardH}}function d0({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:i}){const{layout:l,place:c}=Go({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:i}),{full:d,named:h,headingChars:f,stacked:x,rows:m,text:g,valueText:v,currencyText:k,cardW:E,cardH:S,headRows:P}=l,j=c!==void 0,I=c?.cardX??0,M=c?.cardY??0,N=_=>_+Ce+(d?0:zt+go);return a.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[a.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),m.map(_=>_.y===void 0||_.y===null?null:a.jsx("circle",{cx:e,cy:_.y,r:3.5,fill:_.color,stroke:"var(--color-text-primary)",strokeWidth:1},_.id)),j&&a.jsxs("g",{"data-plot-crosshair-card":"",children:[a.jsx("rect",{x:I,y:M,width:E,height:S,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),h&&a.jsx("text",{x:I+Ce,y:M+Ce+10,fill:"var(--color-text-muted)",fontSize:10,children:Nt(n,f)}),m.map((_,L)=>{const W=x?2:1,q=M+Ce+(L*W+P)*$n+10,O=q+(x?$n:0);return a.jsxs("g",{"data-plot-crosshair-row":_.id,children:[!d&&a.jsx("rect",{x:I+Ce,y:q-8,width:zt,height:zt,fill:_.color,"data-plot-crosshair-swatch":""}),a.jsx("text",{x:N(I),y:q,fill:_.value===null||x?"var(--color-text-faint)":_.color,fontSize:10,style:{whiteSpace:"pre"},children:g(_)}),x&&a.jsx("text",{x:N(I),y:O,fill:_.value===null?"var(--color-text-faint)":_.color,fontSize:10,style:{whiteSpace:"pre"},children:v(_)}),_.modelled&&a.jsx(Ja,{kind:"modelled",x:I+E-Ce-k(_).length*Re-(k(_)?8:4),y:O-3}),k(_)&&a.jsx("text",{x:I+E-Ce,y:O,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:k(_)})]},_.id)})]})]})}const es=720,u0=110,h0=200,ts=56,f0=20,p0=112,g0=260,m0=.4,x0=300;function v0({width:e,height:t,contentWidth:n,legendHeight:o=0,cardHeight:r=0}){const s=Math.max(p0,Math.ceil(n));if((t>e||e<es)&&t>=h0)return{placement:"below"};if(e<es||t<u0||s>Math.min(g0,e*m0)||e-s<x0)return{placement:"overlay"};const l=t>=ts+o+r;return!l&&t<ts+f0+r?{placement:"overlay"}:{placement:"beside",columnWidth:s,legendBelow:!l}}const b0={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function y0(e){return b0[e]}const ft=4,sn=3,mo=6;function w0(e,t){return e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0}function k0(e,t){const n=(o,r)=>o>=t.x0&&o<=t.x1&&r>=t.y0&&r<=t.y1;if(e.cx.length===1)return Number.isFinite(e.cx[0])&&n(e.cx[0],e.cy[0]);for(let o=1;o<e.cx.length;o++){const[r,s,i,l]=[e.cx[o-1],e.cy[o-1],e.cx[o],e.cy[o]];if(![r,s,i,l].every(Number.isFinite))continue;const c=Math.max(1,Math.ceil(Math.hypot(i-r,l-s)/mo));for(let d=0;d<=c;d++)if(n(r+(i-r)*d/c,s+(l-s)*d/c))return!0}return!1}function $0({plot:e,card:t,traces:n,obstacles:o}){if(t.width<=0||t.height<=0||t.width>e.x1-e.x0-ft*2||t.height>e.y1-e.y0-ft*2)return;const r=e.x0+ft,s=e.x1-ft-t.width,i=e.y0+ft,l=e.y1-ft-t.height;return[{x:s,y:i},{x:r,y:l},{x:s,y:l},{x:r,y:i}].find(d=>{const h={x0:d.x-sn,y0:d.y-sn,x1:d.x+t.width+sn,y1:d.y+t.height+sn};return!n.some(f=>k0(f,h))&&!o.some(f=>w0(h,f))})}function _0(e){const t=[],n=[];let o=!0;for(let r=e.y0;r<=e.y1+mo;r+=mo){const s=Math.min(r,e.y1);t.push(o?e.x0:e.x1,o?e.x1:e.x0),n.push(s,s),o=!o}return{cx:t,cy:n}}function M0(e,t){return e?.includes(t)??!1}function ns(e,t){const{reckoned:n,spans:o}=e.data;return n?.some(r=>t>=r.from&&t<=r.to)?"modelled":o?.some(r=>t>=r.from&&t<=r.to&&r.status==="recorded")?"recorded":"measured"}function S0(e){const{x:t,y:n,y2:o}=e.data;let r=!0;for(let i=0;i<t.length;i++)if(!Number.isFinite(t[i])||i>0&&t[i]<t[i-1]){r=!1;break}if(r)return e;const s=t.map((i,l)=>l).filter(i=>Number.isFinite(t[i])).sort((i,l)=>t[i]-t[l]||i-l);return{...e,data:{x:s.map(i=>t[i]),y:s.map(i=>n[i]),...o?{y2:s.map(i=>o[i])}:{}}}}function j0(e,t,n){const o=e.data.x,r=e.data.y,s=Math.min(o.length,r.length);if(s===0||t<o[0]||t>o[s-1])return null;let i=0,l=s-1;for(;i<l;){const g=i+l>>1;o[g]<t?i=g+1:l=g}const c=i,d=Math.max(0,c-1);if(o[c]!==t&&c>0&&M0(e.data.breaks,c))return null;const h=t-o[d]<=o[c]-t?d:c;if(n!==void 0&&Math.abs(o[h]-t)>n)return null;const f=o[c]-o[d];if(e.readBetween&&f>0&&o[c]!==t){const g=r[d]+(r[c]-r[d])*(t-o[d])/f;return Number.isFinite(g)?{index:h,x:t,y:g,currency:ns(e,h)}:null}const x=r[h];if(!Number.isFinite(x))return null;const m=e.data.y2?.[h];return{index:h,x:o[h],y:x,...m!==void 0&&Number.isFinite(m)?{y2:m}:{},currency:ns(e,h)}}function E0(e){const t=new Set;for(const n of e)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&t.add(o);return[...t].sort((n,o)=>n-o)}function os(e,t,n){if(e.length===0)return null;if(t===null)return e[e.length-1];let o=0,r=e.length-1;for(;o<r;){const i=o+r>>1;e[i]<t?o=i+1:r=i}let s=o+n;return e[o]!==t&&n>0&&(s-=1),e[Math.max(0,Math.min(e.length-1,s))]}function A0({x:e,y:t,size:n,color:o,text:r}){const s=n/2,i=`M 0 ${-s} L ${s} ${s*.8} L ${-s} ${s*.8} Z`,l=`M -0.9 ${-s*.42} H 0.9 V ${s*.2} H -0.9 Z`,c=`M -0.9 ${s*.4} H 0.9 V ${s*.64} H -0.9 Z`;return a.jsx(Se,{text:r,focusable:!0,children:a.jsxs("g",{role:"img","aria-label":r,"data-limit-crossing":"",transform:`translate(${e} ${t})`,children:[a.jsx("title",{}),a.jsx("circle",{r:12,fill:"transparent"}),a.jsx("path",{d:`${i} ${l} ${c}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),a.jsx("path",{d:i,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function ti(e,t,n){return n==="above"?e>=t:e<=t}function I0({y:e,cx:t,cy:n,limit:o,limitY:r,bad:s,breaks:i=[],step:l=!1,minGapPx:c}){const d=(k,E,S)=>{if(!E)return{index:k,x:t[k],y:n[k],entered:!1};if(S===null)return{index:k,x:t[k],y:r,entered:!0};const P=n[k]-n[S],j=P===0?1:(r-n[S])/P;return{index:k,x:t[S]+(t[k]-t[S])*j,y:r,entered:!0}},h=new Set(i),f=[];let x=null,m=!1,g=!1,v=Number.NEGATIVE_INFINITY;for(let k=0;k<e.length;k++){if(!Number.isFinite(e[k])){x=null;continue}const E=ti(e[k],o,s);if(E&&!g){const S=d(k,m,l||h.has(k)?null:x),P=f[f.length-1];P!==void 0&&S.x-v<c?P.spells++:f.push({...S,spells:1}),v=S.x}g=E,m=!0,x=k}return f}const R0=1;function C0(e,t,n,o,r){const s=n.to;if(s<1||s>=e.length)return!1;const i=o(e[s-1]),l=o(e[s]),c=r(t[s-1]),d=r(t[s]);return l>i?n.t.some((h,f)=>{const x=o(h),m=c+(d-c)*(x-i)/(l-i);return Math.abs(r(n.v[f])-m)>R0}):!1}function Qn(e,t,n,o){const r=t-e;if(r===0){const s=(n+o)/2;return()=>s}return s=>n+(s-e)/r*(o-n)}function xo(e,t,n=5){if(e===t)return Array.from({length:n},()=>e);const r=(t-e)/(n-1),s=10**Math.floor(Math.log10(r)),l=([1,2,2.5,5,10].find(x=>x*s>=r)??10)*s,c=Math.ceil(e/l)*l,d=[];for(let x=0;d.length<n;x++){const m=c+x*l;if(m>t+l*.01)break;d.push(m)}if(d.length>=2)return d;const h=Math.floor(e/l)*l,f=Math.ceil(t/l)*l;return f>h?[h,f]:[h,h+l]}function ni(e,t){const n=Math.floor(e/1e3);if(t>=36e5){const s=Math.floor(n/3600),i=Math.floor(n%3600/60),l=n%60;return`${s}:${String(i).padStart(2,"0")}:${String(l).padStart(2,"0")}`}const o=Math.floor(n/60),r=n%60;return`${o}:${String(r).padStart(2,"0")}`}function rs(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];for(let i=0;i<e.length;i++){const l=n(e[i]).toFixed(2),c=o(t[i]).toFixed(2),d=i===0||r.includes(i);s.push(`${d?"M":"L"}${l},${c}`),d&&vo(i,e.length,r)&&s.push(`L${l},${c}`)}return s.join(" ")}function vo(e,t,n){return e+1>=t||n.includes(e+1)}function T0(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let i=o(t[0]).toFixed(2);const l=n(e[0]).toFixed(2);s.push(`M${l},${i}`),vo(0,e.length,r)&&s.push(`L${l},${i}`);for(let c=1;c<e.length;c++){const d=n(e[c]).toFixed(2),h=o(t[c]).toFixed(2);if(r.includes(c)){s.push(`M${d},${h}`),vo(c,e.length,r)&&s.push(`L${d},${h}`),i=h;continue}s.push(`H${d}`),h!==i&&s.push(`V${h}`),i=h}return s.join(" ")}function P0(e,t,n,o,r,s=[],i=[],l=[]){if(e.length===0)return[];if(i.length===0&&l.length===0)return[{d:r(e,t,n,o,s)}];function c(v,k){const E=new Array(e.length);for(const S of v){const P=Math.min(e.length-1,S.to);for(let j=Math.max(0,S.from);j<=P;j++)E[j]=k(S)}return E}const d=c(i,v=>v.status),h=c(l,v=>v.basis),f=new Set(s),x=[];let m=0;const g=(v,k)=>{const E=v>0&&!f.has(v)?v-1:v,S=I=>I.slice(E,k+1),P=[];for(const I of s)I>E&&I<=k&&P.push(I-E);const j=r(S(e),S(t),n,o,P);j!==""&&x.push({status:d[v],basis:h[v],d:j})};for(let v=1;v<=e.length;v++)(v===e.length||d[v]!==d[m]||h[v]!==h[m])&&(g(m,v-1),m=v);return x}function oi(e,t,n,o,r){if(e.length===0)return"";const s=Math.min(e.length,t.length,n.length);if(s===0)return"";const i=[];for(let l=0;l<s;l++){const c=o(e[l]).toFixed(2),d=r(n[l]).toFixed(2);i.push(`${l===0?"M":"L"}${c},${d}`)}for(let l=s-1;l>=0;l--){const c=o(e[l]).toFixed(2),d=r(t[l]).toFixed(2);i.push(`L${c},${d}`)}return i.push("Z"),i.join(" ")}function L0(e,t,n,o){const r=[];for(const s of t){const{bandLo:i,bandHi:l,bandKind:c}=s;if(!i||!l||c===void 0)continue;const d=[];for(let f=s.from;f<=s.to&&f<e.length;f++)d.push(e[f]);const h=oi(d,i,l,n,o);h!==""&&r.push({d:h,kind:c})}return r}function ss(e,t,n,o){if(e===t){const d=(n+o)/2;return()=>d}const r=e>0?e:1e-9,s=t>r?t:r*10,i=Math.log10(r),c=Math.log10(s)-i;if(c===0){const d=(n+o)/2;return()=>d}return d=>{const h=d>0?d:r;return n+(Math.log10(h)-i)/c*(o-n)}}function N0(e,t,n=5){if(!(e>0)||!(t>0)||t<=e)return xo(e,t,n);const o=Math.log10(e),r=Math.log10(t);if(r-o<1)return xo(e,t,n);const i=Math.ceil(o),l=Math.floor(r),c=Math.max(1,Math.ceil((l-i+1)/n)),d=[];for(let h=i;h<=l;h+=c)d.push(10**h);return d.length>0?d:[e,t]}const Jn=.86,as=[[0,-1.15],[1.05,.8],[-1.05,.8]],is=.3,_e={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:Jn,triangle:as,outlineWidth:is,keylineWidth:.2,reach:Math.max(Math.hypot(Jn,Jn),...as.map(([e,t])=>Math.hypot(e,t)))+is/2},O0={"aria-hidden":!0};function ri(e,t,n,o){const r=_e.squareHalf;return(e==="modelled"?_e.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([i,l])=>[t+i*o,n+l*o])}const si=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function ai(e,t,n){const o=e==="current"?0:_e.outlineWidth;return t*(o+2*n*_e.keylineWidth)}function F0({x:e,y:t,r:n,state:o="current",keyline:r=!1}){const s=o==="current"?"":ri(o,0,0,n).map(([i,l])=>`${i},${l}`).join(" ");return a.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...O0,children:[r&&si.map(({ring:i,color:l,widths:c})=>{const d={"data-vessel-keyline":i,fill:"none",stroke:l,strokeWidth:ai(o,n,c),strokeLinejoin:"round"};return o==="current"?a.jsx("circle",{r:n,...d},i):a.jsx("polygon",{points:s,...d},i)}),o==="current"?a.jsx("circle",{r:n,fill:_e.color}):a.jsx("polygon",{points:s,fill:o==="lost"?"none":re[o].color,stroke:o==="lost"?_e.lost.color:_e.color,strokeWidth:n*_e.outlineWidth,strokeLinejoin:"round"})]})}function un(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function ii(e,t,n,o,r){if(e.beginPath(),t==="current"){e.arc(n,o,r,0,Math.PI*2);return}ri(t,n,o,r).forEach(([s,i],l)=>{l===0?e.moveTo(s,i):e.lineTo(s,i)}),e.closePath()}function D0(e,t,n,o,r){e.save(),e.lineJoin="round";for(const{color:s,widths:i}of si)ii(e,t,n,o,r),e.strokeStyle=s,e.lineWidth=ai(t,r,i),e.stroke();e.restore()}function z0(e,t,n,o,r,s=4,{keyline:i=!1}={}){i&&D0(t,n,o,r,s);const l=un(e,_e.cssVar,_e.fallback);if(t.save(),ii(t,n,o,r,s),n==="current")t.fillStyle=l,t.fill();else{if(n!=="lost"){const c=re[n];t.fillStyle=un(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=n==="lost"?un(e,_e.lost.cssVar,_e.lost.fallback):l,t.lineWidth=s*_e.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function _1(e,t,n,o=4,r={}){const{held:s,modelled:i}=n;s!==void 0&&i!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=un(e,re.modelled.cssVar,re.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(i.x,i.y),t.stroke(),t.restore());for(const l of["lost","held","current","modelled"]){const c=n[l];c!==void 0&&z0(e,t,l,c.x,c.y,o,r)}}const vt=56;function li(e,t,n,o){const r=Math.max(0,Math.min(t-1,Math.floor(n))),s=Math.max(0,Math.min(t-1,Math.floor(o))),i=Math.min(t-1,r+1),l=Math.min(t-1,s+1),c=Math.max(0,Math.min(1,n-r)),d=Math.max(0,Math.min(1,o-s)),h=e[s*t+r]+(e[s*t+i]-e[s*t+r])*c,f=e[l*t+r]+(e[l*t+i]-e[l*t+r])*c;return h+(f-h)*d}const ls=400,H0=16,B0=8,cs=.06,W0=3.3,X0=.6,U0=60,G0=40,ds=[6,12],us=[48,96],an=2;function eo(e,t,n){const o=Math.max(0,Math.min(1,(n-e)/(t-e)));return o*o*(3-2*o)}function hs(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function fs(e,t){const n=t/e,o=e<=t?.07:.09,r=W0**Math.exp(-((e-t)**2)/(2*o**2*t**2));return n**5*Math.exp(-1.25*n**4)*r}function ci(e,t,n){if(!(e>0)||!(t>0)||!(n>0)||!Number.isFinite(e+t+n))return[];const o=Math.sqrt(n*2*Math.PI/ls),r=fs(o,o),s=[];for(let i=-an;i<=H0*an;i++){const l=ls/2**(i/an),c=l/e,d=eo(ds[0],ds[1],c)*(1-eo(us[0],us[1],c))*(1-eo(t,2*t,l));if(d<=.001)continue;const h=2*Math.PI/l,f=Math.sqrt(n*h),x=Math.sqrt(Math.min(1,fs(f,o)/r)),m=(f>=o?cs:cs*x)/Math.sqrt(an),g=(U0+(hs(i,1)-.5)*2*G0)*Math.PI/180;s.push({kx:h*Math.sin(g),ky:h*Math.cos(g),k:h,amplitude:m/h,omega:f,phase:hs(i,2)*2*Math.PI,weight:d})}return s.slice(0,B0)}function Y0(e,t,n,o){let r=0;for(const s of e)r+=s.weight*s.amplitude*Math.cos(s.kx*t+s.ky*n-s.omega*o+s.phase);return r}const hn=di(-.25,.3,.92),q0=2.6,V0=di(hn[0],hn[1],hn[2]+1),K0=.8,Z0=3,Q0=.95,J0=.35,eg=235,tg=.5,ng=.35;function di(e,t,n){const o=Math.hypot(e,t,n);return[e/o,t/o,n/o]}function og(e,t,n,o){const{east0:r,north0:s,dx:i,dy:l,seconds:c,colour:d,waves:h,isSea:f}=o,[x,m,g]=hn,[v,k,E]=V0,S=h.length,P=new Float64Array(S*t),j=new Float64Array(S*t),I=new Float64Array(S*n),M=new Float64Array(S*n);for(let O=0;O<S;O++){const T=h[O];for(let te=0;te<t;te++){const X=T.kx*(r+(te+.5)*i);P[O*t+te]=Math.cos(X),j[O*t+te]=Math.sin(X)}for(let te=0;te<n;te++){const X=T.ky*(s-(te+.5)*l)-T.omega*c+T.phase;I[O*n+te]=Math.cos(X),M[O*n+te]=Math.sin(X)}}const N=new Float64Array(S),_=new Float64Array(S),L=h.map(O=>O.kx*O.weight*O.amplitude),W=h.map(O=>O.ky*O.weight*O.amplitude),q=h.map(O=>X0*O.k*O.weight*O.amplitude);for(let O=0;O<n;O++)for(let T=0;T<t;T++){const te=(O*t+T)*4;if(f&&!f(T,O)){e[te+3]=0;continue}let X=0,le=0,ie=1;for(let J=0;J<S;J++){const ye=P[J*t+T],ce=j[J*t+T],Ze=I[J*n+O],Qe=M[J*n+O];N[J]=ye*Ze-ce*Qe,_[J]=ce*Ze+ye*Qe}for(let J=0;J<S;J++){const ye=S>1?1+K0*N[(J+Z0)%S]:1;X-=L[J]*N[J]*ye,le-=W[J]*N[J]*ye,ie-=q[J]*_[J]*ye}const $=1/Math.sqrt(X*X+le*le+ie*ie),V=(X*x+le*m+ie*g)*$-g,ne=1+q0*V;let Fe=0;const Pe=(X*v+le*k+ie*E)*$;if(Pe>Q0){let J=Pe;for(let ye=0;ye<7;ye++)J*=J;Fe=255*J0*J}const he=Math.max(0,ne-1)*ng,be=Math.min(1,ne)*tg;e[te]=d.r*be+(255-d.r*be)*he+Fe,e[te+1]=d.g*be+(255-d.g*be)*he+Fe,e[te+2]=d.b*be+(255-d.b*be)*he+Fe,e[te+3]=eg}}function ps(e){const t=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function rg(e,t){const n=ps(t),o=Math.max(e.r,e.g,e.b,1),r=c=>({r:Math.min(255,e.r*c),g:Math.min(255,e.g*c),b:Math.min(255,e.b*c)});let s=0,i=255/o;for(let c=0;c<32;c++){const d=(s+i)/2;ps(r(d))<n?s=d:i=d}const l=r((s+i)/2);return{r:Math.round(l.r),g:Math.round(l.g),b:Math.round(l.b)}}const sg=192,ag=30,ig="--color-info-mark",lg=.42;function cg(e,t){const n=e.view==="plan",o=t.scaleX,r=t.scaleYPrimary,s=1/(o(1)-o(0)),i=1/(r(1)-r(0)),l=E=>(E-o(0))*s,c=E=>(E-r(0))*i,d=Math.min(o(e.bounds.x0),o(e.bounds.x1)),h=Math.max(o(e.bounds.x0),o(e.bounds.x1)),f=Math.min(r(e.bounds.y0),r(e.bounds.y1)),x=Math.max(r(e.bounds.y0),r(e.bounds.y1)),m=n?d:Math.max(t.plotX0,d),g=n?h:Math.min(t.plotX1,h),v=n?f:Math.max(t.plotY0,f),k=n?x:Math.min(t.plotY1,x);return n&&(h<t.plotX0||d>t.plotX1||x<t.plotY0||f>t.plotY1)||!(g-m>=1&&k-v>=1)||!Number.isFinite(s+i)?null:{left:m,top:v,width:g-m,height:k-v,x0:l(m),x1:l(g),y0:c(k),y1:c(v)}}function gs(e,t){if(!t)return null;e.fillStyle=t;const n=/^#([0-9a-f]{6})$/i.exec(String(e.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function dg(e,t,n){const o=gs(t,getComputedStyle(e).getPropertyValue(ig).trim());if(!o)return null;const r=n?gs(t,n):null;return r?rg(r,o):o}function ug(e,t,n,o,r,s){const i=vt,l=(n.x1-n.x0)/i,c=(n.y1-n.y0)/i,d=t.sea,h=o.scaleYPrimary(t.bounds.y0)<o.scaleYPrimary(t.bounds.y1),f=d&&d.size>1&&d.heights.length>=d.size*d.size?(m,g)=>{const v=h?g:i-1-g;return li(d.heights,d.size,m/(i-1)*(d.size-1),v/(i-1)*(d.size-1))<0}:void 0,x=e.createImageData(i,i);og(x.data,i,i,{east0:t.origin.east+n.x0,north0:t.origin.north+n.y1,dx:l,dy:c,seconds:r,colour:s,waves:ci(Math.max(l,c),n.x1-n.x0,t.gravity),isSea:f}),e.putImageData(x,0,0)}function hg(e,t,n,o,r){const{width:s,height:i}=e.canvas,l=fg(t,n,s),c=l.length>1?(l[l.length-1]-l[0])/(l.length-1):n.x1-n.x0,d=ci(c,n.x1-n.x0,t.gravity),h=(t.bearingDeg??90)*Math.PI/180,f=g=>(g-n.x0)/(n.x1-n.x0)*s,x=g=>(n.y1-g)/(n.y1-n.y0)*i;e.clearRect(0,0,s,i),e.beginPath(),l.forEach((g,v)=>{const k=Y0(d,t.origin.east+g*Math.sin(h),t.origin.north+g*Math.cos(h),o);v===0?e.moveTo(f(g),x(k)):e.lineTo(f(g),x(k))});const m=`${r.r}, ${r.g}, ${r.b}`;e.strokeStyle=`rgba(${m}, 0.9)`,e.lineWidth=1,e.stroke(),e.lineTo(f(l[l.length-1]),i),e.lineTo(f(l[0]),i),e.closePath(),e.fillStyle=`rgba(${m}, ${lg})`,e.fill()}function fg(e,t,n){const o=(e.samples??[]).filter(r=>r>t.x0&&r<t.x1);return e.samples&&e.samples.length>1?[t.x0,...o,t.x1]:Array.from({length:n+1},(r,s)=>t.x0+s/n*(t.x1-t.x0))}function pg({layer:e,frame:t}){const n=cg(e,t),o=p.useRef(null),r=p.useRef(null);r.current=n?{layer:e,at:n,frame:t}:null;const s=n?e.view==="plan"?vt:Math.max(1,Math.min(sg,Math.round(n.width))):0,i=n?e.view==="plan"?vt:Math.max(1,Math.round(n.height*s/n.width)):0,l=e.tint;return p.useEffect(()=>{const c=o.current,d=c?.getContext("2d")??null;if(!c||!d||s===0||i===0)return;const h=dg(c,d,l);if(!h)return;const f=()=>{const S=r.current;if(!S)return;const P=Date.now()/1e3;S.layer.view==="plan"?ug(d,S.layer,S.at,S.frame,P,h):hg(d,S.layer,S.at,P,h)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let m=!0;const g=typeof IntersectionObserver=="function"?new IntersectionObserver(S=>{m=S.some(P=>P.isIntersecting)}):null;g?.observe(c);let v=Number.NEGATIVE_INFINITY,k=0;const E=S=>{k=requestAnimationFrame(E),!(!m||document.hidden||S-v<1e3/ag)&&(v=S,f())};return k=requestAnimationFrame(E),()=>{cancelAnimationFrame(k),g?.disconnect()}},[s,i,l]),n?a.jsx("g",{"aria-hidden":"true","data-plot-layer":e.id,"data-plot-layer-kind":"water",children:a.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:a.jsx("canvas",{ref:o,width:s,height:i,style:{display:"block",width:"100%",height:"100%",imageRendering:e.view==="plan"?"pixelated":"auto"}})})}):null}const gg={faint:.45,normal:.85,bright:1},mg=1.5,xg=5,vg=.9,Rt=7,Ct=6,to=10,bt=9,Ue=12,bg=6.2,no=4,yg=9,wg=13,kg=.1,Ht={paintOrder:"stroke",strokeWidth:3,strokeLinejoin:"round"},oo=5,$g=.5,_g=.5;function Ke(e){return ae[e.tone??"neutral"]}function Gt(e){return $e[e.tone??"neutral"]}function Oe(e){return gg[e.emphasis??"normal"]}function He(e,t){return t.axis==="secondary"?e.scaleYSecondary:e.scaleYPrimary}function Mg(e){const t=e.axis==="secondary"?"secondary":"primary";switch(e.kind){case"series":return{xs:e.points.map(n=>n.x),ys:e.points.map(n=>n.y),axis:t};case"region":return{xs:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.x),ys:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.y),axis:t};case"rule":return e.along==="y"?{xs:[],ys:[e.value],axis:t}:{xs:[e.value],ys:[],axis:t};case"marker":case"annotation":return{xs:[e.at.x],ys:[e.at.y],axis:t};default:return{xs:[],ys:[],axis:t}}}const Yo=5.8,pt=11,ms=4;function Sg(e,t){const n=t.text.length*Yo,{frame:o}=t,r=t.anchorX+t.gap,s=r+n<=o.plotX1-4?"start":"end",i=s==="start"?r:t.anchorX-t.gap,l=s==="start"?i:i-n,c=l+n,d=f=>e.some(x=>l<x.x1&&c>x.x0&&f-pt<x.y1&&f+2>x.y0);let h=t.anchorY+3;for(let f=0;f<ms&&d(h);f++)h+=pt;if(d(h)){h=t.anchorY+3;for(let f=0;f<ms&&d(h);f++)h-=pt}return h=Math.min(Math.max(h,o.plotY0+pt),o.plotY1-pt),e.push({x0:l,x1:c,y0:h-pt,y1:h+2}),{x:i,y:h,anchor:s}}function jg(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function Eg(e){if(e.length===0)return"";const t=[`M${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`];for(let n=1;n<e.length;n++)t.push(`H${e[n].x.toFixed(2)}`,`V${e[n].y.toFixed(2)}`);return t.join(" ")}function ui(e,t,n){if(e.length===0)return[];const o=e[0],r=e[e.length-1],s=[...e];if(t==="right"||t==="left"){const i=t==="right"?n.plotX1:n.plotX0;s.push({x:i,y:r.y},{x:i,y:o.y})}else{const i=t==="above"?n.plotY0:n.plotY1;s.push({x:r.x,y:i},{x:o.x,y:i})}return s}function Ag(e,t){const n=[];for(const o of e){if(o.kind==="relief"||o.kind==="water"){const i=He(t,o),{x0:l,y0:c,x1:d,y1:h}=o.bounds;n.push([{x:t.scaleX(l),y:i(c)},{x:t.scaleX(d),y:i(c)},{x:t.scaleX(d),y:i(h)},{x:t.scaleX(l),y:i(h)}]);continue}if(o.kind!=="region"||o.hatched)continue;const r=He(t,o),s=o.boundary.map(i=>({x:t.scaleX(i.x),y:r(i.y)}));if(!(s.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...s,...o.boundaryHigh.map(i=>({x:t.scaleX(i.x),y:r(i.y)})).reverse()])}else n.push(ui(s,o.side,t))}return(o,r)=>n.some(s=>{let i=!1;for(let l=0,c=s.length-1;l<s.length;c=l++){const d=s[l],h=s[c];d.y>r!=h.y>r&&o<(h.x-d.x)*(r-d.y)/(h.y-d.y)+d.x&&(i=!i)}return i})}function Ig({layer:e,frame:t}){if(e.stops.length===0)return null;const n=He(t,e),o=e.along==="y"?t.plotY1-t.plotY0:t.plotX1-t.plotX0;if(o<=0)return null;const r=e.along==="y"?t.plotY0:t.plotX0,s=e.along==="y"?n:t.scaleX,i=e.maxOpacity??_g,l=e.tint??Ke(e),c=e.blur!==void 0?Math.ceil(e.blur*3):0,d=`plot-field-${e.id}-${t.uid}`,h=`plot-field-blur-${e.id}-${t.uid}`,f=e.along==="y"?t.plotY1:t.plotX1,x=e.stops.map(m=>({offset:(s(m.at)-r)/o*100,intensity:Math.max(0,Math.min(1,m.intensity))})).sort((m,g)=>m.offset-g.offset);return a.jsxs(a.Fragment,{children:[a.jsxs("defs",{children:[a.jsx("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:t.plotX0,y1:t.plotY0,x2:e.along==="x"?f:t.plotX0,y2:e.along==="y"?f:t.plotY0,children:x.map((m,g)=>a.jsx("stop",{offset:`${m.offset.toFixed(2)}%`,stopColor:l,stopOpacity:i*m.intensity},g))}),e.blur!==void 0&&a.jsx("filter",{id:h,children:a.jsx("feGaussianBlur",{stdDeviation:e.blur})})]}),a.jsx("rect",{"data-plot-layer":e.id,"data-plot-layer-kind":"field",x:t.plotX0-c,y:t.plotY0-c,width:t.plotX1-t.plotX0+2*c,height:t.plotY1-t.plotY0+2*c,fill:`url(#${d})`,filter:e.blur!==void 0?`url(#${h})`:void 0})]})}const Rg=6,gt=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function Cg(e){const t=Math.max(0,Math.min(1,e));for(let n=1;n<gt.length;n++)if(t<=gt[n][0]){const[o,r]=gt[n-1],[s,i]=gt[n],l=s>o?(t-o)/(s-o):0;return[Math.round(r[0]+(i[0]-r[0])*l),Math.round(r[1]+(i[1]-r[1])*l),Math.round(r[2]+(i[2]-r[2])*l)]}return gt[gt.length-1][1]}const Tg=[150,156,160],Pg=[200,80,70];function Lg(e,t){if(t===3)return Tg;if(t!==1&&t!==2)return e;const n=.3*e[0]+.59*e[1]+.11*e[2],o=(s,i,l)=>s+(l-s)*i,r=e.map(s=>o(o(s,.5,n),.06,235));return t===1?r:r.map((s,i)=>o(s,.3,Pg[i]))}function Ng(e,t){const n=2*(t-1),o=(e%n+n)%n;return o<t?o:n-o}function Og(e,t,n,o,r,s,i){const l=e[s*n+i],c=r?Ng(l,o):l,[d,h,f]=Lg(Cg(c/(o-1)),t[s*n+i]),x=i>0?e[s*n+i-1]:l,m=s>0?e[(s-1)*n+i]:l,g=x!==l||m!==l?.5:1;return`rgb(${Math.round(d*g)}, ${Math.round(h*g)}, ${Math.round(f*g)})`}function Fg(e,t){const{bounds:n}=e,o=He(t,e),r=t.scaleX(n.x0),s=t.scaleX(n.x1),i=o(n.y0),l=o(n.y1),c=Math.abs(s-r)/vt,d=Math.abs(l-i)/vt;return!(c>0)||!(d>0)?null:{left:Math.min(r,s),top:Math.min(i,l),cellW:c,cellH:d,flipRows:i<l}}function Dg(e,t){const{size:n,values:o}=e;if(!t||n<2||o.length<n*n)return null;const{left:r,top:s,cellW:i,cellH:l,flipRows:c}=t;let d=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY;for(let j=0;j<n*n;j++){const I=o[j];if(!Number.isFinite(I))return null;I<d&&(d=I),I>h&&(h=I)}const f=h-d,x=e.bandMetres!=null&&e.bandMetres>0?e.bandMetres:null,m=e.veil,g=Math.max(2,e.bands??Rg),v=vt,k=new Int16Array(v*v),E=new Uint8Array(v*v),S=m!=null&&m.length>=n*n;for(let j=0;j<v;j++)for(let I=0;I<v;I++){const M=I/(v-1)*(n-1),N=j/(v-1)*(n-1);S&&(E[j*v+I]=m[Math.round(N)*n+Math.round(M)]??0);const _=li(o,n,M,N);if(x!=null){k[j*v+I]=Math.floor(_/x);continue}const L=f>0?(_-d)/f:.5;k[j*v+I]=Math.max(0,Math.min(g-1,Math.floor(L*g)))}const P=[];for(let j=0;j<v;j++){const I=c?j:v-1-j;let M=0,N="";for(let _=0;_<=v;_++){const L=_<v?Og(k,E,v,g,x!=null,j,_):"";if(_===0){N=L;continue}L===N&&_<v||(P.push(a.jsx("rect",{x:r+M*i,y:s+I*l,width:(_-M)*i+.5,height:l+.5,fill:N},`${j}-${M}`)),M=_,N=L)}}return P}function zg({layer:e,frame:t}){const n=Fg(e,t),{values:o,size:r,veil:s,bandMetres:i,bands:l}=e,{left:c,top:d,cellW:h,cellH:f,flipRows:x}=n??{},m=p.useMemo(()=>Dg(e,n),[o,r,s,i,l,c,d,h,f,x]);return m?a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:Oe(e),"aria-hidden":"true",children:m}):null}function Hg({layer:e,frame:t}){const n=p.useId(),o=He(t,e),r=d=>({x:t.scaleX(d.x),y:o(d.y)}),s=e.boundary.map(r);if(s.length<2)return null;const i=e.side==="between"?[...s,...(e.boundaryHigh??[]).map(r).reverse()]:ui(s,e.side,t);if(e.side==="between"&&!e.boundaryHigh)return null;const l=e.side==="right"?t.plotX1-4:e.side==="left"?t.plotX0+11:s[s.length-1].x,c=(t.plotY0+t.plotY1)/2;return a.jsxs(a.Fragment,{children:[e.hatched&&a.jsx("defs",{children:a.jsx("pattern",{id:n,width:oo,height:oo,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:a.jsx("line",{x1:0,y1:0,x2:0,y2:oo,stroke:Ke(e),strokeWidth:1,strokeOpacity:e.opacity??$g})})}),a.jsx("polygon",{"data-plot-layer":e.id,"data-plot-layer-kind":"region","data-hatched":e.hatched?"":void 0,points:i.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:e.hatched?`url(#${n})`:Ke(e),fillOpacity:e.hatched?void 0:e.opacity??kg}),t.labels&&e.label&&a.jsx("text",{x:l,y:c,transform:`rotate(-90 ${l} ${c})`,textAnchor:"middle",fontSize:yg,letterSpacing:"0.14em",fill:"var(--color-text-muted)",stroke:"var(--color-surface-raised)",...Ht,children:e.label})]})}function Bg({layer:e,frame:t}){const n=He(t,e),o=e.points.map(s=>({x:t.scaleX(s.x),y:n(s.y)}));if(o.length===0)return null;const r=mg*(e.weight??1);if(e.style==="scatter"){const s=e.radius===void 0?r:Math.abs(t.scaleX(e.radius)-t.scaleX(0));return a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",fill:Ke(e),opacity:Oe(e),children:o.map((i,l)=>a.jsx("circle",{cx:i.x,cy:i.y,r:s},l))})}return a.jsx("path",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",d:e.style==="step"?Eg(o):jg(o),fill:"none",stroke:Ke(e),strokeOpacity:Oe(e),strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:e.dashed?"5 3.5":void 0})}function Wg({layer:e,frame:t}){const n=He(t,e),o=e.dashed??!0,r=Ke(e),s=e.along==="y",i=s?n(e.value):t.scaleX(e.value);return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"rule",x1:s?t.plotX0:i,x2:s?t.plotX1:i,y1:s?i:t.plotY0,y2:s?i:t.plotY1,stroke:r,strokeOpacity:Oe(e),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),t.labels&&e.label&&a.jsx("text",{x:s?t.plotX1-4:i+3,y:s?i-3:t.plotY0+10,textAnchor:s?"end":"start",fill:Gt(e),fontSize:bt,children:e.label})]})}function Xg({layer:e,frame:t,placed:n}){const o=He(t,e),r=t.scaleX(e.at.x),s=o(e.at.y),i=e.across??"x",l=Ke(e),c=t.labels&&e.label?Sg(n,{anchorX:r,anchorY:s,gap:Rt+3,text:e.label,frame:t}):null;return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"annotation",x1:i==="x"?r-Rt:r,x2:i==="x"?r+Rt:r,y1:i==="x"?s:s-Rt,y2:i==="x"?s:s+Rt,stroke:l,strokeOpacity:Oe(e),strokeWidth:1.75,strokeLinecap:"round"}),c&&e.label&&a.jsx("text",{x:c.x,y:c.y,textAnchor:c.anchor,fontSize:bt,letterSpacing:"0.05em",fill:Gt(e),fillOpacity:Oe(e),children:e.label})]})}function Ug({layer:e,frame:t}){const n=He(t,e),o=t.scaleX(e.at.x),r=n(e.at.y)+(e.offsetPx??0),s=xg*(e.scale??1),i=Ke(e),l=e.shape??"dot",c={"data-plot-layer":e.id,"data-plot-layer-kind":"marker",opacity:Oe(e)},d=l==="none"?null:l==="vessel"?a.jsx("g",{...c,children:a.jsx(F0,{state:e.markState??"current",x:o,y:r,r:s*vg,keyline:!0})}):l==="dot"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:i,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):l==="ring"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:"none",stroke:i,strokeWidth:1.5}):l==="cross"?a.jsx("path",{...c,d:`M${o-s},${r} L${o+s},${r} M${o},${r-s} L${o},${r+s}`,stroke:i,strokeWidth:1.5,strokeLinecap:"round"}):l==="chevron-up"||l==="chevron-down"?a.jsx("polyline",{...c,points:l==="chevron-up"?`${o-s},${r+s*.5} ${o},${r-s*.5} ${o+s},${r+s*.5}`:`${o-s},${r-s*.5} ${o},${r+s*.5} ${o+s},${r-s*.5}`,fill:"none",stroke:i,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null,h=(e.label?.length??0)*Yo/2+3,f=l==="none"?Math.min(Math.max(o,t.plotX0+h),t.plotX1-h):o+s+3,x=l==="none"?Math.min(Math.max(r+3,t.plotY0+bt+3),t.plotY1-4):r+3;return a.jsxs(a.Fragment,{children:[d,t.labels&&e.label&&a.jsx("text",{x:f,y:x,textAnchor:l==="none"?"middle":void 0,fontSize:bt,fill:Gt(e),fillOpacity:Oe(e),stroke:"var(--color-surface-raised)",...Ht,children:e.label})]})}function Gg({layer:e,frame:t,row:n,edges:o}){const r=e.caption?2:1;if(e.anchor==="left-edge"||e.anchor==="right-edge"){const g=e.anchor==="left-edge"?t.plotX0+Ct+n*Ue:t.plotX1-Ct-n*Ue,v=t.plotY1-34;return a.jsx("text",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",x:g,y:v,transform:`rotate(-90 ${g} ${v})`,fontSize:bt,letterSpacing:"0.14em",fill:Gt(e),fillOpacity:Oe(e),stroke:"var(--color-surface-raised)",...Ht,children:e.text})}const s=e.anchor.startsWith("top"),i=e.anchor.endsWith("right"),l=g=>Ct+(g?wg:0),c=i?t.plotX1-l(o.right):t.plotX0+l(o.left),d=n*(r*Ue+2),h=s?t.plotY0+Ct+to+d:t.plotY1-Ct-d,f=h-Ue,x=Math.max(e.text.length*bg,(e.caption?.length??0)*Yo)+2*no,m=(s?h:h-(e.caption?Ue:0))-to-1;return a.jsxs("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",textAnchor:i?"end":"start",children:[a.jsx("rect",{x:i?c-x+no:c-no,y:m,width:x,height:r*Ue+1,rx:3,fill:"var(--color-surface-raised)",fillOpacity:.8}),e.caption&&a.jsx("text",{x:c,y:s?h:f,fontSize:bt,letterSpacing:"0.05em",fill:"var(--color-text-faint)",stroke:"var(--color-surface-raised)",...Ht,children:e.caption}),a.jsx("text",{x:c,y:e.caption&&s?h+Ue:h,fontSize:to,fontWeight:700,fill:Gt(e),fillOpacity:Oe(e),stroke:"var(--color-surface-raised)",...Ht,children:e.text})]})}const xs={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},Yg={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function ro({layers:e,frame:t,pass:n}){const o=e.map((l,c)=>({layer:l,index:c})).filter(({layer:l})=>Yg[l.kind]===n).sort((l,c)=>xs[l.layer.kind]-xs[c.layer.kind]||(l.layer.z??0)-(c.layer.z??0)||l.index-c.index),r=new Map,s=[],i={left:e.some(l=>l.kind==="caption"&&l.anchor==="left-edge"||l.kind==="region"&&l.side==="left"&&!!l.label),right:e.some(l=>l.kind==="caption"&&l.anchor==="right-edge"||l.kind==="region"&&l.side==="right"&&!!l.label)};return a.jsx(a.Fragment,{children:o.map(({layer:l,index:c})=>{const d=`${l.id}-${c}`;switch(l.kind){case"relief":return a.jsx(zg,{layer:l,frame:t},d);case"water":return a.jsx(pg,{layer:l,frame:t},d);case"field":return a.jsx(Ig,{layer:l,frame:t},d);case"region":return a.jsx(Hg,{layer:l,frame:t},d);case"series":return a.jsx(Bg,{layer:l,frame:t},d);case"rule":return a.jsx(Wg,{layer:l,frame:t},d);case"annotation":return a.jsx(Xg,{layer:l,frame:t,placed:s},d);case"marker":return a.jsx(Ug,{layer:l,frame:t},d);case"caption":{const h=r.get(l.anchor)??0;return r.set(l.anchor,h+1),a.jsx(Gg,{layer:l,frame:t,row:h,edges:i},d)}default:return null}})})}function qg(e){return e.map(t=>t.description).filter(t=>typeof t=="string"&&t.length>0)}const vs=11,ln=3,cn=4,bs=(e,t)=>e.x0<t.x1&&t.x0<e.x1&&e.y0<t.y1&&t.y0<e.y1;function Vg(e,t,n,o,r){let s=0,i=1;const l=n-e,c=o-t,d=[[-l,e-r.x0],[l,r.x1-e],[-c,t-r.y0],[c,r.y1-t]];for(const[h,f]of d){if(h===0&&f<0)return!1;if(h!==0){const x=f/h;h<0?s=Math.max(s,x):i=Math.min(i,x)}}return s<=i}function Kg(e,t){for(let n=1;n<e.cx.length;n++){const o=[e.cx[n-1],e.cy[n-1],e.cx[n],e.cy[n]];if(o.every(Number.isFinite)&&Vg(o[0],o[1],o[2],o[3],t))return!0}return!1}function Zg({labels:e,plot:t,obstacles:n,traces:o}){const r=[],s=new Map;for(const i of e){const l={y0:i.lineY-ln-vs,y1:i.lineY-ln},c={y0:i.lineY+ln,y1:i.lineY+ln+vs},d={x0:t.x1-cn-i.width,x1:t.x1-cn},h={x0:t.x0+cn,x1:t.x0+cn+i.width},f=[{...d,...l,anchor:"end"},{...d,...c,anchor:"end"},{...h,...l,anchor:"start"},{...h,...c,anchor:"start"}];let x=null;for(const m of f){if(!(m.x0>=t.x0&&m.x1<=t.x1&&m.y0>=t.y0&&m.y1<=t.y1)||r.some(k=>bs(m,k)))continue;const v=2*n.filter(k=>bs(m,k)).length+o.filter(k=>Kg(k,m)).length;(x===null||v<x.cost)&&(x={spot:m,cost:v})}if(x===null){s.set(i.id,null);continue}r.push(x.spot),s.set(i.id,{x:x.spot.anchor==="end"?x.spot.x1:x.spot.x0,y:x.spot.y1-2,anchor:x.spot.anchor})}return s}function Qg(e,t,n,o="linear"){const r=n&&nm(t,n)?0:t;if(n&&o==="log")return Me(Te(e,r),{decimals:bo(e,r).decimals});if(!n)return Me(Te(e,r),{decimals:0});const s=Jg(e,n)?e:void 0;return Me(Te(e,r),{decimals:om(e,r,n,s),...s?{format:s}:{}})}function Jg(e,t){const n=t.map(o=>Me(Te(e,o),{decimals:fn}));return n.some((o,r)=>r>0&&o===n[r-1])}function em(e,t){const n=new Set(t.map(o=>Qg(e,o,t).replace(/^[\d.,\s-]+/,"")));return n.size===1?[...n][0]:void 0}function tm(e,t,n){const o=em(t,n);if(o===void 0)return e;const r=nl({magnitude:0,unit:t},{format:t}).symbol,s=` (${r})`;return r!==""&&e.endsWith(s)?`${e.slice(0,-s.length)} (${o})`:e}function nm(e,t){const n=t.length>1?Math.abs(t[1]-t[0]):0;return n>0&&Math.abs(e)<n*1e-6}const fn=3;function hi(e){return{figure:Number.parseFloat(e.replace(/[^\d.-]/g,"")),unit:e.replace(/[\d.,\s-]/g,"")}}function bo(e,t,n){const o=s=>hi(Me(Te(e,t),{decimals:s,...n?{format:n}:{}})),r=o(fn);for(let s=0;s<fn;s++)if(o(s).figure===r.figure)return{decimals:s,unit:r.unit};return{decimals:fn,unit:r.unit}}function om(e,t,n,o){const r=bo(e,t,o);let s=r.decimals;for(const i of n){const l=bo(e,i,o);l.unit===r.unit&&(s=Math.max(s,l.decimals))}return s}function M1(e){const t=hi(Me(e,{decimals:3})),n=Math.abs(t.figure),o=Number.isFinite(n)&&n>0?Math.max(0,2-Math.floor(Math.log10(n))):0;return Me(e,{decimals:o})}function so(e,t,n){for(let o=n;o<6;o++){const r=e.map(s=>(s/t).toFixed(o));if(r.every((s,i)=>i===0||s!==r[i-1]))return o}return 6}const rm=4,sm=2.5;function am(e,t){if(e.length===0)return!1;const n=e[e.length-1]-t;return n===0?!0:e.length===1?!1:Math.sign(e[0]-t)!==Math.sign(n)}function im(e,t){return e==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:t?e==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const lm=(e,t)=>ni(e-t[0],t[1]-t[0]),S1=(e,t)=>ni((e-t[0])*1e3,(t[1]-t[0])*1e3),ao={top:10,bottom:28,left:50};function fi(e,t,n){const o=(s,i,l)=>Math.max(s,Math.min(l,i)),r=o(30,Math.round(e*.18),ao.left);return{top:ao.top,right:n?r:o(14,Math.round(e*.07),20),bottom:t<150?20:ao.bottom,left:r}}const ys=e=>e.length*6.5+6,cm=4,dm=.4,um=26,ot=14,hm=160,Ie=16,dn=4,fm=6,Tt=(e,t)=>Math.min(e.length*6+8,t);function pm(e,t){const n=[];let o=0,r=0;for(const s of e)r>0&&r+s>t&&(o+=1,r=0),n.push({row:o,x:r}),r+=s+fm;return{rows:e.length===0?0:o+1,positions:n}}const ws=4,gm=.03;function io(e,t){const n=Math.max(0,Math.floor(t/6));if(e.length<=n)return e;const o=e.lastIndexOf(" (");if(o>0&&e.length-o+4<=n){const r=n-(e.length-o)-3;return`${e.slice(0,r)}...${e.slice(o)}`}return n<4?"":`${e.slice(0,n-3)}...`}function ks(e,t){const n=e.split(/(?=M)/).filter(r=>r.length>0),o=[];for(const r of n){const s=[...r.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)];if(s.length<2)continue;const i=s[0],l=s[s.length-1];o.push(`${r.trim()} L${l[1]},${t} L${i[1]},${t} Z`)}return o.length>0?o.join(" "):null}function mm(e,t,n,o,r=1){const s=[],i=um*Math.max(.5,Math.min(2,r));for(let l=e+i/2;l<t;l+=i)for(let c=n+i/2;c<o;c+=i)s.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return s}const xm=120,vm=90,bm=70,ym=35,wm=2,km=12,$s=8,$m=2,Ge=14,_n=6,Mn=12,_m=16,Mm=12,Sm=200,_s=10,jm=.2,Ms=.6,Ss="5 3",Em=.15,Am=.45,Im="the value is inside the shaded region";function Rm(e){return(e.type??"line")==="band"&&e.data.y2?[...e.data.y,...e.data.y2]:e.data.y}function Cm({series:e,thresholds:t,yTickFormat:n}){const o=s=>s*_n,r=[];for(const s of e)r.push(o(s.label.length)+8);for(const s of t){if(s.kind==="marker"&&!s.label)continue;const i=s.label??n(s.value);r.push(o(i.length)+Mn+8)}return Math.max(0,...r)+km}function Tm({width:e,height:t,hasSecondary:n,series:o,thresholds:r}){const s=r.filter(h=>h.label);if(o.length===0||s.length===0)return!1;const i=Math.max(...o.map(h=>h.label.length*6+8)),l=Math.max(...s.map(h=>(h.label?.length??0)*_n+Mn)),c=fi(e,t,n),d=e-c.left-c.right-ot-_m;return i+l+Mm>d}function j1({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:r=lm,yTickFormat:s=Pm,yScalePrimary:i="linear",yScaleSecondary:l="linear",thresholds:c,legend:d="overlay",hideXAxis:h=!1,density:f="chart",spatial:x=!1,gridScale:m=1,layers:g,"aria-label":v,crosshair:k=!1,xKind:E="time",xReadFormat:S,xAxisLabel:P,yAxisLabel:j,ySecondaryAxisLabel:I,yTickUnit:M,card:N,cardForms:_=1,width:L,height:W}){const q=p.useId(),O=f==="compact",T=O?"none":d,te=x,X=te||O,le=k&&!X&&e.some(u=>u.data.x.length>0),[ie,$]=p.useState(null),[V,ne]=p.useState(!1),[Fe,Pe]=p.useState(""),[he,be]=p.useState(null),[J,ye]=p.useState(null),ce=J?.w===L&&J.h===W?J.form:0,[Ze,Qe]=p.useState(null),De=N!=null,de=Ze?.form===ce?Ze:null;p.useLayoutEffect(()=>{if(!he){Qe(null);return}const u=()=>Qe(y=>{const R={w:he.offsetWidth,h:he.offsetHeight,form:ce};return y?.w===R.w&&y?.h===R.h&&y?.form===R.form?y:R});u();const b=new ResizeObserver(u);return b.observe(he),()=>b.disconnect()},[he,ce]);const fe=L,K=W,ue=e.filter(u=>u.axis==="primary"&&u.data.x.length>0),je=e.filter(u=>u.axis==="secondary"&&u.data.x.length>0),Ee=je.length>0,Nn=T!=="none"&&e.length>0||(c??[]).some(u=>u.label),qo=Cm({series:e,thresholds:c??[],yTickFormat:s}),Vo=De&&de!==null&&de.w+$s<=Math.max(112,Math.ceil(qo)),Ko=X||!Nn?{placement:"overlay"}:v0({width:fe,height:K,contentWidth:qo,legendHeight:T==="none"?0:e.length*Ie+6,cardHeight:Vo&&de!==null?de.h:0}),wt=Ko.placement==="overlay"&&!X&&T!=="none"&&K>=Sm&&Tm({width:fe,height:K,hasSecondary:Ee,series:e,thresholds:c??[]})?{placement:"below"}:Ko,Le=T!=="none"&&(wt.placement==="below"||wt.placement==="beside"&&wt.legendBelow),On=Le?pm(e.map(u=>Tt(u.label,fe-2*dn)),fe-2*dn):{rows:0,positions:[]},Fn=On.rows===0?0:On.rows*Ie+4,Zo=fe>=hm,Qo=!X&&!h&&!!P,Jo=!X&&Zo&&!!j,er=!X&&Zo&&Ee&&!!I,Vt=te?0:1,tr=X?{top:Vt,right:Vt,bottom:Vt,left:Vt}:fi(fe,K,Ee),at={...tr,bottom:tr.bottom+(Qo?ot:0)+Fn},G=at.top,Z=K-at.bottom,Be=Z-G,Kt=p.useMemo(()=>{const u={primary:[],secondary:[]};for(const b of g??[]){const y=Mg(b);u[y.axis].push(...y.ys)}return u},[g]),it=p.useMemo(()=>js(ue,n,i,Kt.primary),[ue,n,i,Kt]),lt=p.useMemo(()=>js(je,o,l,Kt.secondary),[je,o,l,Kt]),ge=i==="log"?ss(it[0],it[1],Z,G):Qn(it[0],it[1],Z,G),me=l==="log"?ss(lt[0],lt[1],Z,G):Qn(lt[0],lt[1],Z,G),nr=Math.max(2,Math.min(7,Math.round(Be/ym))),Dn=(u,b,y,R)=>{const C=Math.min(u,b),F=Math.max(u,b),A=(F-C)*1e-6||1e-6,B=Q=>Q>=C-A&&Q<=F+A,Y=Q=>R==="log"?N0(C,F,Q):xo(C,F,Q);for(let Q=y;Q<=64;Q*=2){const ke=Y(Q).filter(B);if(ke.length<2)continue;if(ke.length<=y)return ke;const Et=(ke.length-1)/(y-1),Jt=Array.from({length:y},(Om,Ci)=>ke[Math.round(Ci*Et)]);return Array.from(new Set(Jt))}return[C,F]},kt=Dn(it[0],it[1],nr,i==="log"?"log":"linear"),Zt=Ee?Dn(lt[0],lt[1],nr,l==="log"?"log":"linear"):[],or=(u,b)=>u.length===0?b:Math.max(b,Math.min(Math.round(fe*dm),Math.max(...u.map(y=>ys(s(y,u))))+cm)),zn=X?at:{left:or(kt,at.left)+(Jo?ot:0),right:(Ee?or(Zt,at.right):at.right)+(er?ot:0)},U=zn.left,Hn=wt.placement==="beside"?wt.columnWidth:0,se=fe-zn.right-Hn,we=se-U,rr=fe-Hn-ot/2,Je=we>=xm&&Be>=vm,ee=Hn>0?{x0:se+(Ee?zn.right:0)+$s,y0:G,x1:fe-$m,y1:Z}:void 0,sr=T==="none"||ee||Le?[]:e.map((u,b)=>({x0:U+3,y0:G+6+b*Ie,x1:U+3+Tt(u.label,we-6),y1:G+6+b*Ie+13})),oe=Qn(t[0],t[1],U,se),pi=Math.max(2,Math.min(8,Math.round(we/bm))),$t=Dn(t[0],t[1],pi,"linear"),gi=p.useMemo(()=>{const u=[],b=$t.length-1;if(b<0)return u;const y=ys,R=6,C=A=>{const B=$t[A],Y=r(B,t,$t),Q=oe(B),ke=y(Y),Et=A===0?"start":A===b?"end":"middle",Jt=Et==="start"?Q:Et==="end"?Q-ke:Q-ke/2;return{x:Q,text:Y,anchor:Et,leftEdge:Jt,rightEdge:Jt+ke}},F=C(0);if(u.push({x:F.x,text:F.text,anchor:F.anchor}),b>=1){const A=C(b);if(A.leftEdge>=F.rightEdge+R){let B=F.rightEdge;for(let Y=1;Y<b;Y++){const Q=C(Y);Q.leftEdge>=B+R&&Q.rightEdge<=A.leftEdge-R&&(u.push({x:Q.x,text:Q.text,anchor:Q.anchor}),B=Q.rightEdge)}u.push({x:A.x,text:A.text,anchor:A.anchor})}}return u},[$t,t,oe,r]),ar=(u,b)=>{const y=new Set,R=u.length;if(R===0||(y.add(0),R===1))return y;const C=16,F=b(u[0]),A=b(u[R-1]);if(Math.abs(A-F)>=C){let B=F;for(let Y=1;Y<R-1;Y++){const Q=b(u[Y]);Math.abs(Q-B)>=C&&Math.abs(A-Q)>=C&&(y.add(Y),B=Q)}y.add(R-1)}return y},mi=ar(kt,ge),xi=ar(Zt,me),We=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>{const b=u.axis==="primary"?ge:me,y=u.type??"line";if(y==="band")return u.data.y2?{id:u.id,kind:"band",color:u.color,opacity:u.fillOpacity??jm,d:oi(u.data.x,u.data.y,u.data.y2,oe,b)}:{id:u.id,kind:"noop"};if(y==="scatter"){const A=u.data.x.map((B,Y)=>({cx:oe(B),cy:b(u.data.y[Y])}));return{id:u.id,kind:"scatter",color:u.color,points:A}}const R=y==="step"?T0:rs,C=(u.data.bridges??[]).filter(A=>C0(u.data.x,u.data.y,A,oe,b)),F=[...new Set([...u.data.breaks??[],...C.map(A=>A.to)])].sort((A,B)=>A-B);return{id:u.id,kind:"stroked",color:u.color,dashed:u.dashed??!1,uncertainty:L0(u.data.x,u.data.reckoned??[],oe,b),segments:P0(u.data.x,u.data.y,oe,b,R,F,u.data.spans,u.data.reckoned),modelled:C.map(A=>({basis:A.basis,d:rs([u.data.x[A.to-1],...A.t,u.data.x[A.to]],[u.data.y[A.to-1],...A.v,u.data.y[A.to]],oe,b)})),tail:u.data.x.length>0&&(u.data.reckoned??[]).some(A=>A.to>=u.data.x.length-1)?{cx:oe(u.data.x[u.data.x.length-1]),cy:b(u.data.y[u.data.y.length-1])}:null,observed:[...new Set(C.flatMap(A=>[A.to-1,A.to]))].map(A=>({cx:oe(u.data.x[A]),cy:b(u.data.y[A])}))}}),[e,oe,ge,me]),et=p.useMemo(()=>c?c.map(u=>{const b=u.axis??"primary",y=e.filter(C=>C.axis===b&&C.type!=="band"&&!C.dashed),R=u.kind==="limit"?y.some(C=>{const F=C.data.y.filter(A=>Number.isFinite(A));return F.length>0&&ti(F[F.length-1],u.value,u.bad)}):u.kind==="target"&&y.some(C=>am(C.data.y,u.value));return{id:u.id,label:u.label,spokenLabel:u.spokenLabel,value:u.value,kind:u.kind,passed:R,currency:Sn(u.reading,{drawsReckoning:!0}),tone:im(u.kind,R),dashed:u.kind!=="marker",y:b==="primary"?ge(u.value):me(u.value)}}):[],[c,e,ge,me]),_t=p.useMemo(()=>{const u=(b,y,R)=>Math.max(b,Math.min(R,y));return(c??[]).flatMap(b=>{if(b.kind!=="limit"||!Number.isFinite(b.value))return[];const y=b.axis??"primary",R=y==="primary"?ge:me,C=R(b.value),F=b.bad==="above"?-1:1,A=b.label||`the limit at ${s(b.value)}`;return e.filter(B=>B.axis===y&&B.data.x.length>0&&(B.type??"line")!=="band"&&!B.dashed).flatMap(B=>I0({y:B.data.y,cx:B.data.x.map(oe),cy:B.data.y.map(R),limit:b.value,limitY:C,bad:b.bad,breaks:B.data.breaks,step:B.type==="step"||B.type==="scatter",minGapPx:Ge}).slice(Je?0:-1).map(Y=>{const Q=s(B.data.y[Y.index]),ke=r(B.data.x[Y.index],t);return{key:`${b.id}-${B.id}-${Y.index}`,color:B.color,x:u(U+Ge/2+1,Y.x-_s*(Y.entered?1:-1),se-Ge/2-1),y:u(G+Ge/2+1,Y.y+F*_s,Z-Ge/2-1),text:Y.entered?Y.spells>1?`${B.label} went past ${A} ${Y.spells} times from ${ke}, first reading ${Q}`:`${B.label} went past ${A} at ${ke}, reading ${Q}`:`${B.label} was already past ${A} when this window began at ${ke}, reading ${Q}`}}))})},[c,e,oe,ge,me,r,s,t,U,se,G,Z,Je]),pe=(()=>{if(!De||de===null||X)return;if(ee&&Vo){const C={x0:ee.x0,y0:Z-de.h,x1:ee.x0+de.w,y1:Z},F=G+(T==="none"||Le?0:e.length*Ie+6);return C.x1<=ee.x1&&C.y0>=F?C:void 0}const u=Ge/2,b=[...e.filter(C=>(C.type??"line")!=="band").flatMap(C=>{const F=C.axis==="primary"?ge:me,A=C.data.x.map(oe),B=C.data.y.map(F);return C.type==="scatter"?A.map((Y,Q)=>({cx:[Y],cy:[B[Q]]})):[{cx:A,cy:B}]}),...et.map(C=>({cx:[U,se],cy:[C.y,C.y]}))],y=[..._t.map(C=>({x0:C.x-u,y0:C.y-u,x1:C.x+u,y1:C.y+u})),...T==="none"||ee||Le?[]:e.map((C,F)=>({x0:U+3,y0:G+6+F*16,x1:U+3+Math.min(C.label.length*6+8,we-6),y1:G+6+F*16+13}))],R=$0({plot:{x0:U,y0:G,x1:se,y1:Z},card:{width:de.w,height:de.h},traces:b,obstacles:y});return R?{x0:R.x,y0:R.y,x1:R.x+de.w,y1:R.y+de.h}:void 0})(),ct=p.useMemo(()=>{if(!Je)return new Map;const u=Ge/2;return Zg({labels:et.filter(b=>b.label).map(b=>({id:b.id,width:(b.label?.length??0)*_n+(b.currency.held?Mn:0),lineY:b.y})),plot:ee??{x0:U,y0:G,x1:se,y1:Z},obstacles:[...pe?[pe]:[],..._t.map(b=>({x0:b.x-u,y0:b.y-u,x1:b.x+u,y1:b.y+u})),...T==="none"||Le?[]:e.map((b,y)=>({x0:ee?ee.x0:U+3,y0:G+6+y*Ie,x1:(ee?ee.x0:U+3)+Tt(b.label,ee?ee.x1-ee.x0:we-6),y1:G+6+y*Ie+13}))],traces:(ee?[]:e).filter(b=>(b.type??"line")!=="band").map(b=>({cx:b.data.x.map(oe),cy:b.data.y.map(b.axis==="primary"?ge:me)}))})},[Je,pe,ee,et,_t,T,Le,e,oe,ge,me,U,se,G,Z,we]),vi=(()=>{const u=G+6;if(T==="none"||Le||e.length===0)return u;const b=ee?ee.x0:U+3,y=b+Math.max(...e.map(F=>Tt(F.label,ee?ee.x1-ee.x0:we-6))),R=et.flatMap(F=>{const A=ct.get(F.id);if(!F.label||!A)return[];const B=F.label.length*_n+(F.currency.held?Mn:0),Y=A.anchor==="end"?A.x-B:A.x;return[{x0:Y,y0:A.y-9,x1:Y+B,y1:A.y+2}]});pe&&R.push(pe);const C=e.length*Ie-3;for(let F=u;F+C<=Z;F+=Ie){const A={x0:b,y0:F,x1:y,y1:F+C};if(!R.some(B=>A.x0<B.x1&&B.x0<A.x1&&A.y0<B.y1&&B.y0<A.y1))return F}return u})(),bi=e.flatMap(u=>{const b=We.find(A=>A.id===u.id),y=b?.kind==="stroked"?b.modelled.map(A=>A.basis):[],R=u.data.reckoned??[];if(R.length===0&&y.length===0)return[];const F=[...new Set([...R.map(A=>A.basis),...y])].map(A=>`${u.label}: part of this trace is reckoned, ${y0(A)}, not measured`);return R.some(A=>A.bandLo&&A.bandHi)&&F.push(`${u.label}: ${Im}`),F}),yi=et.flatMap(u=>{const b=u.spokenLabel??u.label??u.id,y=[];return u.passed&&u.kind==="limit"&&y.push(`${b}: limit passed`),u.passed&&u.kind==="target"&&y.push(`${b}: target reached`),u.currency.held&&y.push(pa(b,u.currency.caption)),u.label&&!ct.get(u.id)&&y.length===0&&y.push(u.spokenLabel??u.label),y}),Bn=[...bi,...yi],wi=[v??"Telemetry line chart",...qg(g??[]),...Bn].join("; "),Wn=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>E==="value"?S0(u):u),[e,E]),Xn=p.useMemo(()=>le?E0(Wn):[],[le,Wn]),Mt=Math.min(t[0],t[1]),St=Math.max(t[0],t[1]),ki=E==="value"?(St-Mt)*gm:void 0;function ir(u){const b=Wn.map(y=>{const R=j0(y,u,ki),C=y.format??s,F=y.axis==="primary"?ge:me,A=(y.type??"line")==="band";return R===null?{id:y.id,label:y.label,color:y.color,value:null}:{id:y.id,label:y.label,color:y.color,value:A&&R.y2!==void 0?`${C(R.y)} to ${C(R.y2)}`:C(R.y),currency:R.currency==="measured"?void 0:R.currency,modelled:R.currency==="modelled",y:A?void 0:F(R.y)}});if(Je)for(const y of et)y.kind!=="marker"&&b.push({id:`threshold-${y.id}`,label:y.kind,color:y.tone.label,value:y.label??s(y.value),detail:!0,currency:y.currency.held?y.currency.mark==="modelled"?"modelled":"held":void 0,modelled:y.currency.held&&y.currency.mark==="modelled"});return{heading:(S??r)(u,t),rows:b}}function lr(u){const{heading:b,rows:y}=ir(u);return[b,...y.map(R=>`${R.label} ${R.value??"no sample"}${R.currency?`, ${R.currency}`:""}`)].join("; ")}const cr=e.filter(u=>(u.type??"line")!=="band").map(u=>({cx:u.data.x.map(oe),cy:u.data.y.map(u.axis==="primary"?ge:me)})),dr=pe?[...cr,_0(pe)]:cr,ur=De&&!X&&de!==null&&de.w>0&&de.h>0&&!pe&&ce<_-1;p.useLayoutEffect(()=>{ur&&ye({w:L,h:W,form:ce+1})},[ur,L,W,ce]);const $i=u=>{let b=u,y=Number.POSITIVE_INFINITY;for(const R of Xn)R<Mt||R>St||Math.abs(R-u)<y&&(y=Math.abs(R-u),b=R);return b},tt=le&&ie!==null&&ie.at>=Mt&&ie.at<=St?$i(ie.at):null,dt=tt===null?null:ir(tt),jt=dt!==null&&tt!==null?c0({x:oe(tt),plot:{x0:U,y0:G,x1:se,y1:Z},heading:dt.heading,rows:dt.rows,avoid:sr,traces:dr}):void 0,_i=pe!==void 0&&jt!==void 0&&jt.x0<pe.x1&&jt.x1>pe.x0&&jt.y0<pe.y1&&jt.y1>pe.y0;function Mi(u){const b=u.currentTarget.getBoundingClientRect(),y=u.clientX-b.left;return y<U||y>se?null:t[0]+(y-U)/(se-U)*(t[1]-t[0])}function Si(u){const b=Mi(u);if(b===null){$(y=>y?.source==="pointer"?null:y);return}$({at:b,source:"pointer"})}function ji(u){const b=Xn.filter(F=>F>=Mt&&F<=St),y={ArrowLeft:u.shiftKey?-10:-1,ArrowRight:u.shiftKey?10:1,Home:-b.length,End:b.length};if(u.key==="Escape"){if(ie===null)return;u.preventDefault(),$(null),Pe("");return}const R=y[u.key];if(R===void 0)return;u.preventDefault();const C=os(b,tt,R);C!==null&&($({at:C,source:"keys"}),Pe(lr(C)))}function Ei(u){try{ne(u.currentTarget.matches(":focus-visible"))}catch{ne(!0)}if(ie!==null)return;const b=os(Xn.filter(y=>y>=Mt&&y<=St),null,0);b!==null&&($({at:b,source:"keys"}),Pe(lr(b)))}function Ai(){ne(!1),$(u=>u?.source==="keys"?null:u),Pe("")}const Ii=le?{tabIndex:0,onPointerMove:Si,onPointerLeave:()=>$(u=>u?.source==="pointer"?null:u),onKeyDown:ji,onFocus:Ei,onBlur:Ai}:{},Qt={scaleX:oe,scaleYPrimary:ge,scaleYSecondary:me,plotX0:U,plotX1:se,plotY0:G,plotY1:Z,uid:q,labels:Je},Ri=te&&g?Ag(g,Qt):()=>!1,Un=`plot-layer-clip-${q}`;if(we<=0||Be<=0)return a.jsx("svg",{width:Math.max(0,fe),height:Math.max(0,K),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:a.jsx("title",{children:"Chart too small to render"})});const hr=a.jsxs("svg",{width:fe,height:K,role:_t.length>0||le?"group":"img","aria-label":wi,"aria-describedby":le?`${q}-crosshair-hint`:void 0,...Ii,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...le?{touchAction:"pan-y",outline:V?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[g&&g.length>0&&a.jsx("defs",{children:a.jsx("clipPath",{id:Un,children:a.jsx("rect",{x:U,y:G,width:we,height:Be})})}),Bn.length>0&&a.jsx("title",{children:Bn.join("; ")}),a.jsx("rect",{x:U,y:G,width:we,height:Be,fill:"var(--color-surface-panel)"}),g&&g.length>0&&a.jsx("g",{clipPath:`url(#${Un})`,children:a.jsx(ro,{layers:g,frame:Qt,pass:"background"})}),!X&&kt.map((u,b)=>{const y=ge(u);return a.jsxs(en.Fragment,{children:[a.jsx("line",{x1:U,y1:y,x2:se,y2:y,stroke:"var(--color-border-subtle)",strokeWidth:1}),mi.has(b)&&a.jsx("text",{x:U-4,y,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,kt)})]},`py-${b}`)}),!X&&Zt.map((u,b)=>xi.has(b)?a.jsx("text",{x:se+4,y:me(u),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,Zt)},`sy-${b}`):null),!h&&!X&&$t.map((u,b)=>a.jsx("line",{x1:oe(u),y1:G,x2:oe(u),y2:Z,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${b}`)),!h&&!X&&gi.map((u,b)=>a.jsx("text",{x:u.x,y:Z+14,textAnchor:u.anchor,fill:"var(--color-text-faint)",fontSize:11,children:u.text},`xl-${b}`)),Qo&&a.jsx("text",{x:(U+se)/2,y:K-Fn-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:io(P,we)}),Jo&&a.jsx("text",{x:ot/2,y:(G+Z)/2,transform:`rotate(-90 ${ot/2} ${(G+Z)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:io(M&&i!=="log"?tm(j,M,kt):j,Be)}),er&&a.jsx("text",{x:rr,y:(G+Z)/2,transform:`rotate(90 ${rr} ${(G+Z)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:io(I,Be)}),te&&mm(U,se,G,Z,m).filter(u=>!Ri(u.x,u.y)).map(u=>a.jsx("circle",{cx:u.x,cy:u.y,r:1,fill:"var(--color-text-faint)",opacity:.35},u.key)),!X&&a.jsxs(a.Fragment,{children:[a.jsx("line",{x1:U,y1:G,x2:U,y2:Z,stroke:"var(--color-border-strong)",strokeWidth:1}),a.jsx("line",{x1:U,y1:Z,x2:se,y2:Z,stroke:"var(--color-border-strong)",strokeWidth:1}),Ee&&a.jsx("line",{x1:se,y1:G,x2:se,y2:Z,stroke:"var(--color-border-strong)",strokeWidth:1})]}),We.filter(u=>u.kind==="band").map(u=>a.jsx("path",{d:u.d,fill:u.color,fillOpacity:u.opacity,stroke:"none"},u.id)),We.filter(u=>u.kind==="stroked").flatMap(u=>u.uncertainty.map((b,y)=>a.jsx("path",{d:b.d,"data-band-kind":b.kind,fill:u.color,fillOpacity:Em,stroke:b.kind==="bound"?u.color:"none",strokeOpacity:b.kind==="bound"?Am:void 0,strokeWidth:b.kind==="bound"?1:void 0},`${u.id}-band-${y}`))),We.filter(u=>u.kind==="stroked").flatMap(u=>u.segments.map((b,y)=>a.jsxs(en.Fragment,{children:[O&&b.basis===void 0&&ks(b.d,Z)&&a.jsx("path",{d:ks(b.d,Z)??void 0,fill:u.color,fillOpacity:.12,stroke:"none"}),a.jsx("path",{d:b.d,"data-stream-status":b.status,"data-reckoning-basis":b.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:b.basis!==void 0?Ms:void 0,strokeDasharray:b.basis!==void 0?Ss:u.dashed?"4 3":void 0})]},`${u.id}-${y}`))),We.filter(u=>u.kind==="stroked").flatMap(u=>u.modelled.map((b,y)=>a.jsx("path",{d:b.d,"data-reckoning-basis":b.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:Ms,strokeDasharray:Ss},`${u.id}-modelled-${y}`))),We.map(u=>u.kind==="stroked"&&u.tail!==null?a.jsx(Ja,{kind:"modelled",x:u.tail.cx,y:u.tail.cy},`${u.id}-tail`):null),We.filter(u=>u.kind==="stroked").flatMap(u=>u.observed.map((b,y)=>a.jsx("circle",{cx:b.cx,cy:b.cy,r:sm,fill:u.color,"data-observed-sample":""},`${u.id}-observed-${y}`))),We.filter(u=>u.kind==="scatter").flatMap(u=>u.points.map((b,y)=>a.jsx("circle",{cx:b.cx,cy:b.cy,r:wm,fill:u.color},`${u.id}-${y}`))),e.map(u=>{if(!u.headMark)return null;const b=u.axis==="primary"?ge:me;let y=u.data.x.length-1;for(;y>=0&&!(Number.isFinite(u.data.x[y])&&Number.isFinite(u.data.y[y]));)y-=1;return y<0?null:a.jsx("circle",{cx:oe(u.data.x[y]),cy:b(u.data.y[y]),r:rm,fill:u.headMark==="dot"?u.color:"var(--color-surface-panel)",stroke:u.color,strokeWidth:u.headMark==="dot"?0:1.5,"data-head-mark":u.headMark},`${u.id}-head`)}),g&&g.length>0&&a.jsx("g",{clipPath:`url(#${Un})`,children:a.jsx(ro,{layers:g,frame:Qt,pass:"foreground"})}),et.map(u=>a.jsxs(en.Fragment,{children:[a.jsx("line",{x1:U,y1:u.y,x2:O&&u.kind==="marker"?U+24:se,y2:u.y,stroke:u.tone.line,strokeWidth:1,strokeDasharray:u.dashed?"4 3":void 0,"data-threshold-kind":u.kind,"data-threshold-passed":u.passed||void 0}),O&&u.kind==="marker"&&u.label&&a.jsx("text",{x:U+28,y:u.y+3.5,fill:u.tone.label,fontSize:10,children:u.label}),!(O&&u.kind==="marker")&&u.label&&ct.get(u.id)&&a.jsxs("text",{x:ct.get(u.id)?.x,y:ct.get(u.id)?.y,textAnchor:ct.get(u.id)?.anchor,fill:u.tone.label,fontSize:10,children:[u.label,u.currency.held&&a.jsx(po,{size:10,kind:u.currency.mark??"held"})]})]},u.id)),_t.map(u=>a.jsx(A0,{x:u.x,y:u.y,size:Ge,color:u.color,text:u.text},u.key)),T!=="none"&&e.map((u,b)=>{const y=Le?On.positions[b]:void 0,R=y?K-Fn+2+y.row*Ie:vi+b*Ie;if(!Le&&R+13>Z)return null;const C=y?dn+y.x:ee?ee.x0:U+3,F=Le?fe-2*dn:ee?ee.x1-ee.x0:we-6,A=Tt(u.label,F),B=Math.max(1,Math.floor((A-8)/6)),Y=u.label.length>B?`${u.label.slice(0,Math.max(1,B-1))}...`:u.label;return a.jsxs(en.Fragment,{children:[a.jsx("rect",{x:C,y:R,width:A,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),a.jsx("text",{x:C+3,y:R+10,fill:u.color,fontSize:10,children:Y})]},u.id)}),g&&g.length>0&&Je&&a.jsx(ro,{layers:g,frame:Qt,pass:"caption"}),dt!==null&&tt!==null&&a.jsx(d0,{x:oe(tt),plot:{x0:U,y0:G,x1:se,y1:Z},heading:dt.heading,rows:dt.rows,avoid:sr,traces:dr})]}),fr=De?a.jsx("div",{ref:be,"data-plot-card":"",style:{position:"absolute",left:pe?.x0??0,top:pe?.y0??0,visibility:pe&&!_i?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof N=="function"?N({width:we-ws*2,height:Be-ws*2,form:ce}):N}):null;return le?a.jsxs(a.Fragment,{children:[hr,fr,a.jsx(Ve,{id:`${q}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),a.jsx(Ve,{role:"status","aria-live":"polite",children:Fe})]}):a.jsxs(a.Fragment,{children:[hr,fr]})}function js(e,t,n,o=[]){if(t)return t;if(e.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let r=[...e.flatMap(Rm),...o];return n==="log"&&(r=r.filter(s=>s>0)),r.length===0?n==="log"?[1,10]:[0,1]:[Math.min(...r),Math.max(...r)]}function Pm(e,t){if(e===0)return"0";const n=Math.abs(e);if(n>=1e6){const o=t?so(t,1e6,1):1;return`${(e/1e6).toFixed(o)}M`}if(n>=1e3){const o=t?so(t,1e3,1):1;return`${(e/1e3).toFixed(o)}k`}if(Number.isInteger(e))return String(e);if(n<.01){const o=Math.floor(Math.log10(n)),r=e/10**o;return Math.abs(r-1)<1e-9?`1e${o}`:`${r.toFixed(1)}e${o}`}return e.toFixed(t?so(t,1,2):2)}const Lm=p.createContext(null);function Nm(e,t){const n=p.useContext(Lm),o=n?.setFooter,r=n?.setDirty;p.useEffect(()=>(o?.(e),()=>o?.(null)),[o,e]),p.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function E1(e){const{onSave:t,value:n,saved:o,saveLabel:r="Save",extra:s,disabled:i}=e,l=p.useRef(null);l.current===null&&(l.current={v:n});const c=!mt(n,l.current.v)&&!mt(n,o),d=p.useRef(t);d.current=t;const h=p.useMemo(()=>a.jsxs(a.Fragment,{children:[s,a.jsx(Sl,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:i,children:r})]}),[s,i,r]);Nm(h,c)}export{Ve as $,Hx as A,vn as B,Rx as C,Sx as D,Zm as E,Fl as F,ux as G,Zx as H,Ol as I,hx as J,Lx as K,wx as L,Tx as M,Ix as N,Px as O,y1 as P,Ax as Q,Ux as R,Gx as S,$x as T,Ya as U,ox as V,kx as W,Iu as X,Nx as Y,Qm as Z,rx as _,Wx as a,i1 as a$,mt as a0,Km as a1,Mg as a2,jn as a3,Nm as a4,E1 as a5,S1 as a6,Rn as a7,ll as a8,c1 as a9,tc as aA,gx as aB,po as aC,n1 as aD,o1 as aE,r1 as aF,mx as aG,bx as aH,x1 as aI,d0 as aJ,re as aK,Us as aL,Ja as aM,qx as aN,Yx as aO,ba as aP,Zh as aQ,Jx as aR,vx as aS,s1 as aT,_e as aU,F0 as aV,vh as aW,Pr as aX,Oo as aY,ka as aZ,ha as a_,Lm as aa,Fa as ab,Er as ac,Se as ad,st as ae,Sn as af,Ys as ag,kc as ah,Xx as ai,dx as aj,Dx as ak,eh as al,Dr as am,ht as an,jx as ao,Ih as ap,Ro as aq,l1 as ar,b1 as as,g1 as at,vf as au,w1 as av,ho as aw,e1 as ax,t1 as ay,px as az,Bx as b,fa as b0,Fo as b1,$a as b2,_a as b3,ah as b4,Wl as b5,ax as b6,Ao as b7,sx as b8,Bl as b9,M1 as bA,Qg as bB,cx as bC,u1 as bD,ph as bE,Wu as bF,bl as bG,Ml as bH,Ul as bI,kr as bJ,Yt as bK,a1 as bL,d1 as bM,Ll as bN,Cr as bO,Eo as bP,Sa as bQ,h1 as bR,k1 as ba,Qr as bb,z0 as bc,_1 as bd,m1 as be,v0 as bf,lx as bg,c0 as bh,$1 as bi,Cn as bj,y0 as bk,f1 as bl,pa as bm,qs as bn,Qs as bo,dh as bp,Do as bq,v1 as br,p1 as bs,Oa as bt,Gf as bu,qt as bv,kh as bw,Io as bx,ix as by,j1 as bz,yx as c,xx as d,Sl as e,Fx as f,zx as g,Ox as h,Au as i,Jm as j,Ex as k,tx as l,Dl as m,ex as n,qh as o,nx as p,rf as q,Qx as r,Kx as s,_x as t,Mx as u,Vx as v,Cx as w,fx as x,zl as y,Ru as z};
