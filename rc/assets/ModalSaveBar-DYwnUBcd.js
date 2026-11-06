import{j as a}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import w,{css as F,createGlobalStyle as Li,keyframes as As}from"./ext-styled-components-DAuodqsN.js";import{r as p,R as tn}from"./ext-react-C0MU9AHG.js";import{h as Is,l as Ni}from"./logger-2_QM1wvD.js";import{cE as Ft,cJ as gn,aW as Ce,b7 as Rs,l as Oi,cg as st,aK as nn,ck as Cs}from"./view-clock-formula-Bm6xOQIY.js";import{aU as Fi}from"./ksp-enum-names-DtqyRCA5.js";import{G as yo,z as Di}from"./screen-CDftIe5d.js";import{l as lo,k as Ts,j as ce,m as we,w as wt,a1 as wo,N as mn,V as _e,a2 as zi,n as Hi,O as ko,a3 as $o,a4 as Bi,a5 as Wi,a6 as Xi,a7 as Ps,a8 as Ui,E as gr,a9 as Gi,aa as Yi,ab as qi,ac as Vi,ad as Ki,Z as vt,ae as Zi,af as Qi,I as Ji,i as Ls,_ as el,T as Wt,J as Ns,ag as tl,S as Os,ah as Fs,Q as mr,A as on,f as xr,ai as vr,s as Gn,aj as nl,ak as ol,y as rl}from"./contributionsRead-Dk9N3tft.js";import"./lagrange-BRiikEhv.js";import{R as sl}from"./use-transmissions-Dd_enbRs.js";import{gridToPixels as al}from"./ext-ui-kit-grid-CYQFMmYG.js";import{r as il}from"./ext-react-dom-DCF8ZnaJ.js";const Qm={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function Jm({children:e,layout:t="inline",...n}){return a.jsx(cl,{$layout:t,...n,children:e})}const ll={inline:F``,fill:F`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},cl=w.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>ll[e]}
`,at=F`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,qt=F`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,dl="data-restoring-focus",ul=120,hl=48,fl=120,br=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function Vt(e){return Ds(e,"below")}function Ds(e,t){const[n,o]=p.useState(null),[r,s]=p.useState(!1),[i,l]=p.useState(!1),[c,d]=p.useState(!1),[h,f]=p.useState(!1),[x,m]=p.useState(!1),g=p.useRef(null),v=p.useRef(null),k=p.useRef(!1),E=p.useRef(!1),S=p.useRef(null),T=e!=null&&e!==""?e:null,j=n!==null&&(r||i||c||h||x),I=p.useCallback(()=>{S.current!==null&&clearTimeout(S.current),S.current=null},[]),M=p.useCallback(()=>{I(),o(null),s(!1),l(!1),d(!1),f(!1),m(!1),k.current=!1},[I]);p.useEffect(()=>{if(!h)return;const L=()=>{const K=document.getSelection(),D=K!==null&&!K.isCollapsed&&v.current?.contains(K.anchorNode)===!0;!k.current&&!D&&f(!1)},W=()=>{k.current=!1,L()};return document.addEventListener("pointerup",W),document.addEventListener("selectionchange",L),()=>{document.removeEventListener("pointerup",W),document.removeEventListener("selectionchange",L)}},[h]),p.useEffect(()=>{if(!x)return;const L=W=>{const K=W.target;K instanceof Node&&(g.current?.contains(K)||v.current?.contains(K)||M())};return document.addEventListener("pointerdown",L,!0),()=>document.removeEventListener("pointerdown",L,!0)},[x,M]);const N=p.useCallback(()=>{I(),S.current=setTimeout(()=>{S.current=null,s(!1),d(!1)},fl)},[I]);if(p.useEffect(()=>I,[I]),p.useEffect(()=>{if(n!==null)return window.addEventListener("scroll",M,!0),window.addEventListener("resize",M),()=>{window.removeEventListener("scroll",M,!0),window.removeEventListener("resize",M)}},[n,M]),p.useEffect(()=>{if(!j||T===null)return;const L=W=>{W.key==="Escape"&&(W.stopPropagation(),M())};return document.addEventListener("keydown",L,!0),()=>document.removeEventListener("keydown",L,!0)},[j,T,M]),T===null)return{anchor:{},tip:null};const $=L=>{const W=L.getBoundingClientRect();o({top:W.bottom,left:W.left,above:t==="above"?W.top>=hl:window.innerHeight-W.bottom<ul,anchorTop:W.top})};return{anchor:{"data-tooltip":T,onPointerEnter:L=>{L.pointerType!=="touch"&&(I(),$(L.currentTarget),s(!0))},onPointerLeave:N,onPointerDown:L=>{E.current=!0,L.pointerType!=="touch"&&M()},onPointerUp:L=>{if(E.current=!1,L.pointerType==="touch"){if(x){M();return}g.current=L.currentTarget,$(L.currentTarget),m(!0)}},onFocus:L=>{E.current||document.documentElement.hasAttribute(dl)||($(L.currentTarget),l(!0))},onBlur:()=>{l(!1),!r&&!c&&!x&&o(null)}},tip:j?il.createPortal(a.jsx(pl,{ref:v,at:n,text:T,onPress:()=>{k.current=!0,f(!0)},onPointerEnter:()=>{I(),d(!0)},onPointerLeave:N}),document.body):null}}const pl=p.forwardRef(function({at:t,text:n,onPress:o,onPointerEnter:r,onPointerLeave:s},i){const l=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return a.jsx(ml,{ref:i,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),o()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...l,left:t.left,"--tip-left":`${t.left}px`},children:n})});function ht(e,t){return(...n)=>{typeof e=="function"&&e(...n),t?.(...n)}}function Me({text:e,children:t,focusable:n=!1,announce:o=!0,placement:r="below"}){const{anchor:s,tip:i}=Ds(e,r);if(e==null||e==="")return a.jsx(a.Fragment,{children:t});const l=t.props,c=l["aria-label"],d=!o||typeof c=="string"&&br(c).includes(br(e));return a.jsxs(a.Fragment,{children:[p.cloneElement(t,{"data-tooltip":e,onPointerEnter:ht(l.onPointerEnter,s.onPointerEnter),onPointerLeave:ht(l.onPointerLeave,s.onPointerLeave),onPointerDown:ht(l.onPointerDown,s.onPointerDown),onPointerUp:ht(l.onPointerUp,s.onPointerUp),onFocus:ht(l.onFocus,s.onFocus),onBlur:ht(l.onBlur,s.onBlur),"aria-description":d?l["aria-description"]:e,tabIndex:n?l.tabIndex??0:l.tabIndex}),i,n&&a.jsx(gl,{})]})}const gl=Li`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,ml=w.div`
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
`;function zs(e){let t="";return p.Children.forEach(e,n=>{if(typeof n=="string"||typeof n=="number"){t+=String(n);return}p.isValidElement(n)&&(t+=zs(n.props.children))}),t.replace(/\s+/g," ").trim()}function Hs({label:e,children:t,disabledReason:n}){return xl({label:e,children:t,disabledReason:n})}function xl({label:e,children:t,disabledReason:n}){const o=e!==void 0&&e!==""&&e!==zs(t)?e:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function Bs(e,t){return e===!0&&t!==void 0&&t!==""}function Ws(e){e.preventDefault(),e.stopPropagation()}function Xs(e,t,n){return t===null||e.props["data-tooltip"]!==void 0?e:a.jsx(Me,{text:t,announce:n,children:e})}const _o="max(0.075em, 1.25px)",se={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},Ye=w.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,co=se.held.domSize,uo=se.modelled.domSize,vl=F`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${co} + 0.14em);
  }
`,bl=F`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${uo} + 0.14em);
  }
`;function yl(e){return F`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${se[e].hollowDomSize} + 0.14em);
    }
  `}function Us(e,t=!1){return t?yl(e):e==="current"?null:e==="modelled"?bl:vl}const wl=w.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${co};
  height: ${co};
  background: ${se.held.color};
`,kl=w.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${uo};
  height: ${uo};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${se.modelled.color};
`,Mo=e=>F`
  position: absolute;
  right: 0;
  top: 0;
  width: ${se[e].hollowDomSize};
  height: ${se[e].hollowDomSize};
`,$l=w.span`
  ${Mo("current")}
  border: ${_o} solid ${se.current.color};
  border-radius: var(--radius-circle);
`,_l=w.span`
  ${Mo("held")}
  border: ${_o} solid ${se.held.color};
`,Ml=w.span`
  ${Mo("modelled")}
  --stroke: ${_o};
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
`,Sl={current:$l,held:_l,modelled:Ml};function Gs({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?Sl[e]:e==="modelled"?kl:wl;return a.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const jl=w.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>Us(e??"held",t)}
`;function ho({caption:e,kind:t="held",elsewhere:n=!1,children:o,...r}){const{anchor:s,tip:i}=Vt(e);return a.jsxs(jl,{$kind:t,$elsewhere:n,...r,...s,children:[o,a.jsx(Gs,{kind:t,elsewhere:n}),e!==null&&a.jsxs(Ye,{"data-unit-currency":"",children:[", ",e]}),i]})}const El=p.forwardRef(function({variant:t="default",tone:n,size:o="md",pressed:r,predictedOutcome:s,disabledReason:i,marked:l,type:c="button",...d},h){const f=Bs(d.disabled,i),x=Hs({label:d["aria-label"],children:d.children,disabledReason:f?i:void 0}),{disabled:m,onClick:g,children:v,...k}=d;return Xs(a.jsx(Ol,{ref:h,$variant:t,$tone:n??(t==="primary"?"go":"neutral"),$size:o,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,"data-held-button":l?"":void 0,...k,disabled:f?void 0:m,...f?{"aria-disabled":!0}:{},onClick:f?Ws:g,type:c,children:l?a.jsx(Al,{kind:l.kind,caption:l.caption,children:v}):v}),x,f)}),Al=w(ho)`
  position: static;

  &::after {
    content: none;
  }

  & > [data-held-mark] {
    top: 3px;
    right: 3px;
  }
`;function Il(e){return e==="neutral"?"go":e}const So=e=>F`
  background: ${lo[e]};
  border-color: ${lo[e]};
  color: ${Ts[e]};
`,Rl=e=>F`
  border-color: ${ce[e]};
  color: ${we[e]};
`,yr={default:F`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:F`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},Cl=F`
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
`,Tl=F`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function Pl(e,t){return e==="text"?Cl:e==="primary"?So(t):t==="neutral"?yr[e]:F`
    ${yr[e]}
    ${Rl(t)}
  `}const Ll=F`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,Nl={sm:F`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:F`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},Ol=w.button`
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

  ${({$size:e})=>Nl[e]}
  ${({$variant:e,$tone:t})=>Pl(e,t)}
  ${({$pressed:e,$tone:t})=>e?So(Il(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":Ll}
  ${at}
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

  ${({$variant:e})=>e==="text"?Tl:""}
`,ex=w.button`
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
  ${at}
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Fl=w.button`
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
  ${at}
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
`,Dl=p.forwardRef(function({pressed:t,disabledReason:n,...o},r){const s=Bs(o.disabled,n),i=Hs({label:o["aria-label"],children:o.children,disabledReason:s?n:void 0}),{disabled:l,onClick:c,...d}=o;return Xs(a.jsx(Fl,{ref:r,"aria-pressed":t,...d,disabled:s?void 0:l,...s?{"aria-disabled":!0}:{},onClick:s?Ws:c}),i,s)}),tx=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,zl=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,nx=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,Hl=w.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,ox=w.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,rx=w.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,jo=F`
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

  ${at}

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
`,Bl=w.input`
  ${jo}
  width: 100%;
`,sx=w.select`
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
`,ax=w.textarea`
  ${jo}
  width: 100%;
  resize: vertical;
`;function Wl(e){if(e===void 0)return null;const{value:t}=wo(e.magnitude,e.unit);return t===mn?null:t}function Ys(e,t){const n=Wl(t);return n===null?e:`${e}, as of ${n}`}const Eo="modelled to SCET";function Xl(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function wr(e){return gn(e.value)||Ft(e.value)?{shown:e.value,held:!1,mark:null,isStatic:gn(e.value),isDeterministic:Ft(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:Ys(wt(e.grade),e.asOfUt)}}function jn(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:gn(e),isDeterministic:Ft(e),caption:null,band:null};const n=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!Ft(e.value)){const o=e.reckoning.modelled;if(e.state==="held"){const s=wr(e),i=e.value===void 0,l=s.held||i,c=s.caption??(i?"":null);return{...s,shown:o,held:l,mark:l?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:n}}const r=e.reckoning.beyondReceived;return{shown:o,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?Eo:null,band:n}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:gn(e.value),isDeterministic:Ft(e.value),caption:null,band:n}:e.state==="held"?{...wr(e),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function qs(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function Ul(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:Eo}:null;if(e.state==="held"){const n=Ys(wt(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function ix(e){return e===void 0?null:typeof e!="string"?Ul(e):{kind:"held",caption:wt(e)}}function Ao(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function lx(e,t){const n=Ao(t);return n===void 0?e:{state:"held",value:e,grade:n,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}function Io(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function cx(e={}){return Io(t=>_e(t,e))}const Gl=.01;function dx({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const r=Math.abs(t(n)-t(o));return(e?Math.min(r,1-r):r)<=Gl}}}function Vs(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(r=>!n.readsAsOne(e,r))}function Ro({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,r=v=>zi(typeof v=="number"?v:v.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,i=Xl(s);if(s?.value!==void 0&&i!==void 0)return Vs(s.value,i,Io(r))?a.jsx(ho,{"data-held":"",kind:"modelled",caption:`${Eo}, last received ${r(s.value)}`,children:r(i)}):a.jsx(a.Fragment,{children:r(s.value)});const l=jn(o,{drawsReckoning:!0}),{shown:c,held:d,mark:h,caption:f}=l,x=typeof e=="number"?e:c;if(x==null)return mn;const m=r(x),g=qs({...l,shown:x});return d?a.jsx(ho,{...g,kind:h??"held",caption:f,children:m}):a.jsx("span",{"data-figure":g["data-figure"],children:m})}const kr={left:!1,right:!1};function Yl(e){const[t,n]=p.useState(kr),o=p.useRef(kr);return p.useEffect(()=>{if(!e)return;const r=()=>{const l=e.scrollLeft>1,c=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===l&&o.current.right===c||(o.current={left:l,right:c},n(o.current))};r(),e.addEventListener("scroll",r,{passive:!0});const s=typeof ResizeObserver>"u"?null:new ResizeObserver(r);s?.observe(e);for(const l of Array.from(e.children))s?.observe(l);const i=new MutationObserver(()=>{for(const l of Array.from(e.children))s?.observe(l);r()});return i.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",r),s?.disconnect(),i.disconnect()}},[e]),t}const $r=w.div`
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
`;function En(e){const t=p.useRef(null),[n,o]=p.useState(e),[r,s]=p.useState(null);return p.useEffect(()=>{t.current!==r&&s(t.current)}),p.useEffect(()=>{if(!r||typeof ResizeObserver>"u")return;const i=new ResizeObserver(l=>{for(const c of l)c.contentRect.width>0&&c.contentRect.height>0&&o({w:Math.floor(c.contentRect.width),h:Math.floor(c.contentRect.height)})});return i.observe(r),()=>i.disconnect()},[r]),{ref:t,size:n}}const ql='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Ks(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),r=n[o+1]??n[o-1];if(r&&r!==e){r.focus();return}const s=t.closest("[data-panel-rail-frame]"),i=s?s.parentElement?.querySelector("[data-panel-body]"):t.closest("[data-panel-body]");if(!i)return;const l=[...i.querySelectorAll(ql)].find(c=>c!==e);if(l){l.focus();return}i.hasAttribute("tabindex")||i.setAttribute("tabindex","-1"),i.focus()}const Xt=700;function Co(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const An={"in-transit":1/6,"awaiting-reply":1/2,due:2/3,overdue:2/3,lost:2/3};function Zs(e){const t=e.reachEtaSeconds;if(e.hold&&t!==null&&t>0)return Vl(e.hold);const n=Qs(e);if(t===null||n===null)return An[e.predictedPhase];const o=n-t,r=e.replyEtaSeconds===null?1/3:2/3;return Math.max(0,Math.min(r,o/(3*n)))}function _r(e){const t=Qs(e);return t===null?0:Math.max(0,(1-Zs(e))*3*t)}function Vl(e){return Math.max(0,Math.min(1,e.outbound))/3}function Qs(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function Js(e){return Kl(e).map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:t.settling==="confirmed"?1:Zs(t),glyph:t.glyph??Co(t.label||t.command),...t.held?{held:!0}:{},...t.settling?{settling:t.settling,settleSeconds:t.settleSeconds??0}:{},...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function Kl(e){return e.some(t=>t.dispatchedAt!==void 0)?e.map((t,n)=>({item:t,index:n})).sort((t,n)=>(t.item.dispatchedAt??Number.NEGATIVE_INFINITY)-(n.item.dispatchedAt??Number.NEGATIVE_INFINITY)||t.index-n.index).map(({item:t})=>t):e}function ux({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||yo(e)!=="shown"?"none":n||Di({oneWaySeconds:Ce("s",e)})==="live"?"badge":t?"strip":"none"}const Zl={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},Ut={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Ql(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Zl[e.phase]}const In=new Set(["overdue","lost"]),Jl=180,ec=96;function ea(e){return _e(Ce("s",Math.max(0,e)))}function tc(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const nc=1;function To(e){const t=Fi(),n=p.useRef(t);n.current=t;const[o,r]=p.useState(e),s=p.useRef({eta:e,ut:Yn(t)});return p.useEffect(()=>{const i=s.current.eta;(i===null!=(e===null)||i!==null&&e!==null&&Math.abs(e-i)>=nc)&&(s.current={eta:e,ut:Yn(n.current)},r(e))},[e]),p.useEffect(()=>{const i=setInterval(()=>{const{eta:l,ut:c}=s.current;if(l===null)return;const d=Yn(n.current);if(d!==void 0){if(c===void 0){s.current={eta:l,ut:d};return}r(Math.max(0,l-(d-c)))}},1e3);return()=>clearInterval(i)},[]),o}function Yn(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function oc({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":r="In-flight commands",variant:s="inline",onDismiss:i}){const{ref:l,size:c}=En({w:320,h:0}),d=s==="rail"||s==="expanded"?e:e.filter(f=>!f.settling);if(s==="rail")return d.length===0?null:a.jsx(rc,{items:d,"aria-label":r});if(s==="expanded")return d.length===0?null:a.jsx(gc,{items:d,"aria-label":r,onDismiss:i});const h=n!=="auto"?n:c.w>=Jl?"full":c.w>=ec?"compact":"badge";return d.length===0?null:h==="badge"?a.jsx(sc,{ref:l,items:d,mode:t,"aria-label":r}):a.jsx(ra,{ref:l,role:"list","aria-label":r,"data-mode":t,"data-density":h,$row:o==="row",children:d.map(f=>a.jsx(ac,{item:f,$compact:h==="compact"},f.id))})}const Ge=8,ta=1/3;function rc({items:e,"aria-label":t}){const n=e.filter(o=>!o.settling);return a.jsx(ic,{role:"img","aria-label":`${t}: ${n.length} in flight`,children:e.map(o=>{const r=Math.max(0,Math.min(1,o.progress??An[o.phase]));return a.jsx(oa,{...o.settling?{"data-role":"settling","data-settling":o.settling}:{"data-role":"glow","data-phase":o.phase,...o.held?{"data-held":""}:{}},$settling:o.settling,style:{"--dot-colour":na(o),"--dot-progress":r,"--settle-seconds":o.settleSeconds??0}},o.id)})})}const sc=function({ref:t,items:n,mode:o,"aria-label":r}){const s=To(tc(n)),i=n.some(c=>In.has(c.phase)),l=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${ea(s)}`;return a.jsx(Me,{text:n.map(c=>c.label).join(`
`),focusable:!0,children:a.jsx(ra,{ref:t,role:"group","aria-label":`${r}: ${l}`,"data-mode":o,"data-density":"badge",$row:!1,children:a.jsxs(sa,{$phase:i?"overdue":"in-transit",children:[a.jsx(aa,{"aria-hidden":"true",$pulse:!i,children:"↑"}),a.jsxs(ia,{children:[n.length,s!==null&&a.jsxs(a.Fragment,{children:[" · ",a.jsx(Ro,{value:Math.max(0,s)})]})]})]})})})};function ac({item:e,$compact:t}){const n=To(e.etaSeconds),o=In.has(e.phase),r=n===null?`${e.label}, ${Ut[e.phase]}`:`${e.label}, ${ea(n)}`;return a.jsxs(sa,{$phase:e.phase,role:"listitem",...t?{"aria-label":r,title:r}:{},children:[a.jsx(aa,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Ql(e)}),!t&&a.jsx($c,{children:e.label}),a.jsx(ia,{children:n===null?Ut[e.phase]:a.jsx(Ro,{value:Math.max(0,n)})})]})}const xn=As`
  from { opacity: 1; }
  to { opacity: 0; }
`,ic=w.div`
  position: relative;
  display: block;
  width: 100%;
  height: 16px;
  /* Clips the part of each dot above the strip, whatever box holds it. */
  overflow: hidden;
`,lc=14;function cc(e,t,n){const o=Math.min(lc,(n-Ge)/Math.max(1,t)),r=Math.ceil(e/2)*(e%2===1?1:-1),s=n/2+r*o;return Math.max(0,Math.min(n-Ge,s-Ge/2))}function Mr({items:e,height:t}){return a.jsx(hc,{role:"group","aria-label":"Commands on the rail",style:{height:t},children:e.map((n,o)=>{const r=Math.max(0,Math.min(1,n.progress??An[n.phase]));return a.jsx(Me,{text:n.settling?null:`${n.label}, ${Ut[n.phase]}`,announce:!1,focusable:!n.settling,children:a.jsx(oa,{...n.settling?{"data-role":"settling","data-settling":n.settling,"aria-hidden":!0}:{role:"img","aria-label":`${n.label}, ${Ut[n.phase]}`,"data-role":"glow","data-phase":n.phase,...n.held?{"data-held":""}:{}},"data-lane":o,$settling:n.settling,$lane:!0,style:{"--dot-colour":na(n),"--dot-progress":r,"--settle-seconds":n.settleSeconds??0,"--lane-top":`${cc(o,e.length,t)}px`}})},n.id)})})}function na(e){return e.settling==="confirmed"?"var(--color-accent-fg)":e.held||e.settling==="failed"||In.has(e.phase)?ce.warn:"var(--color-accent-fg)"}const dc=e=>e==="confirmed"?F`
        transition: left var(--settle-time) var(--ease-linear);
        animation: ${xn} ${Xt}ms var(--ease-standard) var(--settle-time) forwards;
      `:e==="failed"?F`
          animation: ${xn} ${Xt}ms var(--ease-standard) forwards;
        `:null,uc=As`
  from { top: ${-Ge*(1-ta)}px; }
  to { top: var(--lane-top); }
`,hc=w.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,oa=w.span`
  position: absolute;
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  top: ${-Ge*(1-ta)}px;
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
    ${({$settling:e})=>dc(e)}
    ${({$lane:e,$settling:t})=>e&&!t&&F`
        animation: ${uc} var(--duration-base) var(--ease-entrance);
      `}
  }
`,fc=54,Dt=5,pc=3,Po=fc-8-Dt,vn=60,Sr={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:ce.warn,lost:ce.warn};function gc({items:e,"aria-label":t,onDismiss:n}){const[o,r]=p.useState(null),s=Yl(o),i=s.left||s.right;return a.jsxs(xc,{"data-command-list":"",children:[a.jsx(vc,{ref:r,role:"list","aria-label":t,...i?{tabIndex:0,"data-scrolls":""}:{},children:e.map(l=>a.jsx(mc,{item:l,onDismiss:n},l.id))}),a.jsx($r,{$position:"left",$visible:s.left}),a.jsx($r,{$position:"right",$visible:s.right})]})}function mc({item:e,onDismiss:t}){const n=e.glyph??Co(e.label),o=e.settling==="confirmed"?Sr["awaiting-reply"]:e.held||e.settling==="failed"?ce.warn:Sr[e.phase],r=Math.max(0,Math.min(1,(e.progress??An[e.phase])*1.5)),s=In.has(e.phase)&&!!t&&!e.settling,i=`${e.label}, ${Ut[e.phase]}`;return a.jsxs(bc,{role:"listitem","aria-label":i,...e.settling?{"data-settling":e.settling,"aria-hidden":!0}:{"data-phase":e.phase,...e.held?{"data-held":""}:{}},$settling:e.settling,style:{color:o,"--settle-seconds":e.settleSeconds??0},children:[a.jsx(Me,{text:s?`Dismiss ${e.label}`:i,announce:!1,children:a.jsxs(yc,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:l=>{Ks(l.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[a.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&a.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),a.jsx(wc,{children:a.jsx("span",{className:"fill",style:{"--fill-ratio":r}})})]})}const xc=w.div.attrs({role:"group"})`
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
    ${Po}px + ${Dt}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
  /* Holds the overflow glows over the row's edges. */
  position: relative;
`,vc=w.div`
  display: flex;
  flex-direction: row;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${pc}px;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  /* Native scrollbar hidden: the edge glows show scroll state. */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${qt}
`,bc=w.div`
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @media (prefers-reduced-motion: no-preference) {
    ${({$settling:e})=>e==="confirmed"?F`
            animation: ${xn} ${Xt}ms var(--ease-standard)
              var(--settle-time) forwards;
            .fill {
              transition:
                height var(--settle-time) var(--ease-linear),
                width var(--settle-time) var(--ease-linear);
            }
          `:e==="failed"?F`
              animation: ${xn} ${Xt}ms var(--ease-standard) forwards;
            `:null}
  }

  @container (min-width: ${vn}px) {
    flex-direction: column;
  }
`,yc=w.div`
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

  @container (min-width: ${vn}px) {
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
`,wc=w.div`
  --s: ${Po}px;
  position: relative;
  flex: 0 0 ${Dt}px;
  width: ${Dt}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${vn}px) {
    width: var(--s);
    height: ${Dt}px;
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
  @container (min-width: ${vn}px) {
    .fill {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: calc(var(--fill-ratio, 0) * 100%);
      height: auto;
    }
  }
`,ra=w.div`
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
`,kc={"in-transit":F`
    color: var(--color-text-primary);
  `,"awaiting-reply":F`
    color: var(--color-text-muted);
  `,due:F`
    color: var(--color-text-muted);
  `,overdue:F`
    color: ${we.warn};
  `,lost:F`
    color: ${we.warn};
  `},sa=w.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>kc[e]}
`,aa=w.span`
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
`,$c=w.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ia=w.span`
  flex: 0 0 auto;
`,_c="Awaiting first signal";function hx({expectedIn:e}){const t=e??0,n=Number.isFinite(t)&&t>0;return a.jsxs(a.Fragment,{children:[_c,n&&Is()&&a.jsx(Mc,{total:t})]})}function Mc({total:e}){return a.jsx(Sc,{seconds:To(e)??0})}function Sc({seconds:e}){return e>0?a.jsxs(a.Fragment,{children:[" ",a.jsx(Hi,{level:"muted",children:a.jsx(Ro,{value:Math.ceil(e)})})]}):null}const Lo=e=>F`
  --fit-box: ${e};
`,jc=e=>F`
  --fit-mask: ${e};
`;function la(e){return e==="go"||e==="info"?"caution":e}function bn({tone:e,size:t="md",live:n=!1,report:o,held:r,children:s,...i}){const l=Ao(r),c=l===void 0?e:la(e),d=c===void 0||c==="neutral"?void 0:c,h=o?.label??(typeof s=="string"?s:"");ko(o?{id:o.id,severity:d??"go",label:h}:null);const f=n?{role:"status","aria-live":"polite"}:{},x=l===void 0?null:wt(l),m=Reflect.get(i,"data-tooltip")!==void 0,{anchor:g,tip:v}=Vt(m?null:x);return a.jsxs(a.Fragment,{children:[a.jsxs(Rc,{$severity:d,$size:t,...f,...g,...i,children:[s,x!==null&&a.jsxs(a.Fragment,{children:[a.jsx(Cc,{"aria-hidden":"true","data-held-mark":""}),a.jsxs(Ye,{"data-unit-currency":"",children:[", ",x]})]})]}),v]})}const Ec=F`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,Ac={go:F`
    background: transparent;
    border-color: ${ce.go};
    color: ${we.go};
  `,info:F`
    background: transparent;
    border-color: ${ce.info};
    color: ${we.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${ce.info} 40%, transparent);
  `,caution:F`
    background: transparent;
    border-color: ${ce.caution};
    color: ${we.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${ce.caution} 45%, transparent);
  `,warn:F`
    background: transparent;
    border-color: ${ce.warn};
    color: ${we.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${ce.warn} 55%, transparent);
  `,nogo:F`
    background: transparent;
    border-color: ${ce.nogo};
    color: ${we.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${ce.nogo} 65%, transparent);
  `,offline:F`
    background: transparent;
    border-color: ${ce.offline};
    color: ${we.offline};
  `},Ic={sm:F`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:F`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},Rc=w.span`
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

  ${({$size:e})=>Ic[e]}
  ${({$severity:e})=>e===void 0?Ec:Ac[e]}
`,Cc=w.span`
  position: absolute;
  top: 0;
  right: 0;
  width: ${se.held.domSize};
  height: ${se.held.domSize};
  transform: translate(45%, -45%);
  background: ${se.held.color};
  box-shadow: 0 0 0 1px var(--color-surface-panel);
  pointer-events: none;
`;/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=e=>{const t=Pc(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Nc=p.createContext({}),Oc=()=>p.useContext(Nc),Fc=p.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:o,className:r="",children:s,iconNode:i,...l},c)=>{const{size:d=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:x="currentColor",className:m=""}=Oc()??{},g=o??f?Number(n??h)*24/Number(t??d):n??h;return p.createElement("svg",{ref:c,...qn,width:t??d??qn.width,height:t??d??qn.height,stroke:e??x,strokeWidth:g,className:ca("lucide",m,r),...!s&&!Lc(l)&&{"aria-hidden":"true"},...l},[...i.map(([v,k])=>p.createElement(v,k)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=(e,t)=>{const n=p.forwardRef(({className:o,...r},s)=>p.createElement(Fc,{ref:s,iconNode:t,className:ca(`lucide-${Tc(jr(e))}`,`lucide-${e}`,o),...r}));return n.displayName=jr(e),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],zc=z("arrow-down",Dc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Bc=z("arrow-left",Hc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Xc=z("arrow-right",Wc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Gc=z("arrow-up-to-line",Uc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],qc=z("arrow-up",Yc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Kc=z("bell",Vc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Qc=z("check",Zc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ed=z("chevron-down",Jc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],nd=z("chevron-left",td);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],rd=z("chevron-right",od);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ad=z("chevron-up",sd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],ld=z("columns-2",id);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],dd=z("computer",cd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],hd=z("corner-down-left",ud);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],pd=z("database",fd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],md=z("file-text",gd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],vd=z("grip",xd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],yd=z("heart",bd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],kd=z("history",wd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],_d=z("house",$d);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Sd=z("info",Md);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],Ed=z("joystick",jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Id=z("layers",Ad);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Cd=z("lightbulb-off",Rd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Pd=z("lightbulb",Td);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Nd=z("lock",Ld);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Fd=z("maximize",Od);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],zd=z("menu",Dd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],Bd=z("microscope",Hd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],Xd=z("minimize",Wd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Gd=z("pause",Ud);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],qd=z("pencil",Yd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Kd=z("play",Vd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Qd=z("plus",Zd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],eu=z("radio",Jd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],nu=z("rectangle-horizontal",tu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],ru=z("rectangle-vertical",ou);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],au=z("rotate-ccw",su);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],lu=z("rotate-cw",iu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],du=z("rows-2",cu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],hu=z("satellite",uu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],pu=z("settings",fu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],mu=z("square",gu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],vu=z("star",xu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],yu=z("undo-2",bu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],ku=z("volume-2",wu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],_u=z("volume-x",$u);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Su=z("wrench",Mu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Eu=z("x",ju),Au="var(--icon-size-control)",Iu={strokeWidth:1.8,"aria-hidden":!0};function H(e,t){const n=p.forwardRef(({label:o,size:r=Au,style:s,...i},l)=>{const c=typeof r=="number"?{size:r,style:s}:{style:{width:r,height:r,...s}},d=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return a.jsx(e,{...Iu,...t,...d,...i,...c,ref:l})});return n.displayName=e.displayName??e.name,n}const fx=H(vd),px=H(Ed),gx=H(kd),mx=H(_d),xx=H(Sd),vx=H(Nd),bx=H(eu),yx=H(ku),wx=H(_u),kx=H(Kc),$x=H(Id),_x=H(pu),Mx=H(hu),Sx=H(Fd),jx=H(Xd),Ex=H(pd),Ax=H(dd),Ix=H(md),Rx=H(Qd,{strokeWidth:2.4}),Ru=H(Eu),Cx=H(qd),Tx=H(Qc),Cu=H(vu),Px=H(yd),Lx=H(zd),Tu=H(Bd),Nx=H(Kd),Ox=H(Gd),Fx=H(mu),Dx=H(ad),zx=H(ed),Hx=H(nd),Bx=H(rd),Wx=H(Bc),Xx=H(qc),Ux=H(Xc),Gx=H(zc),Yx=H(Gc),qx=H(yu),Vx=H(lu),Kx=H(au),Zx=H(ld),Qx=H(nu),Jx=H(du),e1=H(ru),t1=H(hd),Pu=z("space-helmet",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M10.5 8h3a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 1 0-7z",key:"visor"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),Lu=z("space-helmet-visor-up",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M8 7.5C9.5 5 14.5 5 16 7.5",key:"visor"}],["circle",{cx:"12",cy:"12.5",r:"2",fill:"currentColor",key:"face"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),n1=H(Pu),o1=H(Lu),r1=H(Su),s1=H(Pd),a1=H(Cd),Nu={},Ou={byKey:new Map,unaddressed:void 0,separate:!1};function Er(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Fu(e,t){if(e.separate!==t.separate||!Er(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!Er(o,t.byKey.get(n)))return!1;return!0}function Du(e,t,n,o){const r=new Map;e!==void 0&&r.set($o(e),n);for(const[s,i]of Object.entries(t??{}))i!==void 0&&r.set(Xi(s),i);return{byKey:r,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function zu(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Hu(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function Bu(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,i)=>s.depth-i.depth);let r=!1;for(const s of o)s.resettle(n)&&(r=!0);if(r)for(const s of t)s()}}}function Wu(e){const t=new Map,n=new Map,o=new Set,r=e?.root??Bu();let s=Ou;const i=c=>{let d;for(const h of c){const f=h.position;f!==void 0&&(d===void 0||f.base>d.base)&&(d=f)}return d?.rung},l={root:r,depth:e===void 0?0:e.depth+1,hold(c,d,h){const f=t.get(c);if(h===void 0)f!==void 0&&(f.delete(d),f.size===0&&t.delete(c));else{if(Hu(f?.get(d),h))return;f===void 0?t.set(c,new Map([[d,h]])):f.set(d,h)}e===void 0?r.sweep(c):e.hold(c,d,h)},settled:c=>n.get(c),readsAsOneFigure:c=>o.has(c),setPolicy(c){if(!Fu(s,c)){s=c;for(const d of t.keys())r.sweep(d)}},resettle(c){const d=[...t.get(c)?.values()??[]],h=e?.settled(c),f=s.byKey.get(c)??s.unaddressed??Nu,x=f.format??h?.format??i(d),m=f.as??h?.as,g=f.decimals??(s.separate?Ui(d,{format:x,as:m}):h?.decimals),v=x===void 0&&m===void 0&&g===void 0?void 0:{...x!==void 0&&{format:x},...m!==void 0&&{as:m},...g!==void 0&&{decimals:g}},k=s.separate&&Ps(d,{format:x,as:m,decimals:g}),E=k!==o.has(c);return k?o.add(c):o.delete(c),zu(n.get(c),v)?E:(v===void 0?n.delete(c):n.set(c,v),!0)},attach(){r.family.add(l);for(const c of t.keys())r.sweep(c)},detach(){r.family.delete(l)}};return r.family.add(l),l}const No={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},Gt=p.createContext(No);function Xu(){return p.useContext(Gt)!==No}function i1({children:e,of:t,pins:n,format:o,as:r,decimals:s,separate:i=!1}){const l=p.useContext(Gt),[c]=p.useState(()=>Wu(l===No?void 0:l));return p.useLayoutEffect(()=>(c.attach(),()=>c.detach()),[c]),p.useLayoutEffect(()=>{c.setPolicy(Du(t,n,{format:o,as:r,decimals:s},i))},[c,t,n,o,r,s,i]),a.jsx(Gt.Provider,{value:c,children:e})}function Uu(e,t={}){const n=p.useContext(Gt),o=p.useId(),r=Rs(e),s=e?.unit,l=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||r===null?void 0:$o(s),c=l===void 0||r===null||s===void 0||Bi(s)===void 0?void 0:Wi(r,s),d=c?.base,h=c?.rung;return p.useLayoutEffect(()=>{if(!(l===void 0||r===null||s===void 0))return n.hold(l,o,{reading:r,unit:s,...d!==void 0&&h!==void 0&&{position:{base:d,rung:h}}}),()=>n.hold(l,o,void 0)},[n,o,l,r,s,d,h]),p.useSyncExternalStore(n.root.subscribe,()=>l===void 0?void 0:n.settled(l),()=>{})}function l1(e,t={}){const n=p.useContext(Gt),r=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||Rs(e)===null||e===null||e===void 0?void 0:$o(e.unit);return p.useSyncExternalStore(n.root.subscribe,()=>r===void 0?!1:n.readsAsOneFigure(r),()=>!1)}const Gu=Ki,Yu={sci:Tu,rep:Cu},da=w.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,qu=w.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?F`
          position: relative;
          ${Us(e,t)}
        `:""}
`,Vu=w.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,Ku=w(Ye)`
  user-select: none;
`,ua=w(Ye)`
  user-select: none;
`,Zu=" ";function Qu(e,t,n,o){if(t===void 0)return null;const r=x=>wo(x.magnitude,x.unit,{...n,format:o}).value,s=(x,m)=>r(m.minus(x)),i=Ps([t.lo,t.hi],{...n,format:o});if(!Vs(e,[t.lo,t.hi],Io(r)))return null;const l=s(t.lo,t.value),c=s(t.value,t.hi),d=x=>/^[-+\u2212]?[0.,\s]*$/.test(x);if(!i&&d(l)&&d(c))return null;const h=r(t.value)===r(e),f={...n,format:o};return{oneFigure:i,plusMinus:!i&&h&&l===c?c:null,lo:r(t.lo),hi:r(t.hi),loSaid:gr(t.lo,f),hiSaid:gr(t.hi,f),kind:t.kind}}function Ju(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function Vn({token:e,className:t,spaced:n}){const o=Gi(e,Yi(e));if(o==="")return null;const r=qi(o),s=Vi(o),i=Yu[s?.head??o],l=Gu.has(o),c=r!==void 0;return a.jsxs(a.Fragment,{children:[n&&!l?Zu:null,a.jsx(Me,{text:r,announce:!1,children:a.jsxs(da,{$attached:l,$icon:i!==void 0,className:t,"data-unit":e,children:[i?a.jsxs(a.Fragment,{children:[a.jsx(i,{size:"1em"}),s&&a.jsxs("span",{"aria-hidden":"true",children:["/",s.rest]})]}):c?a.jsx("span",{"aria-hidden":"true",children:o}):o,c&&a.jsxs(ua,{"data-unit-word":"",children:[" ",r]})]})})]})}function Ar({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:r,marked:s,elsewhere:i,...l}){const c=jn(e,{drawsReckoning:r}),d=s!=null&&!c.held&&c.shown!=null?{...c,held:!0,mark:s.kind,caption:s.caption}:c,{shown:h,held:f,mark:x,band:m}=d,g=i!=null&&i!==""&&h!=null,v=x??(g?"current":null),k=g?[d.caption,i].filter(Boolean).join("; "):d.caption,E=Uu(h,l),S=Xu(),T=o===!0&&S,j=E===void 0?l:{...E,...l},I=wo(h?.magnitude,h?.unit,j),M=h==null||m===null||!f?null:Qu(h,Oi(m,h.unit),j,I.rung),{anchor:N,tip:$}=Vt(Ju(k,M));return e!==void 0||t===void 0?a.jsxs(qu,{className:n,$mark:v,$elsewhere:g,...qs(d),...N,children:[I.value,!T&&a.jsx(Vn,{token:I.symbol,spaced:!0}),M!==null&&a.jsxs(Vu,{"data-unit-band":"",children:[M.oneFigure?a.jsxs(a.Fragment,{children:[" (",a.jsx("span",{"aria-hidden":"true",children:"~"}),a.jsx(ua,{"data-unit-word":"",children:"approximately "}),M.lo]}):M.plusMinus===null?` (${M.lo} to ${M.hi}`:` ± ${M.plusMinus}`,!T&&a.jsx(Vn,{token:I.symbol,spaced:!0}),M.plusMinus===null?")":null]}),v!==null&&a.jsx(Gs,{kind:v,elsewhere:g}),k!==null&&a.jsxs(Ku,{"data-unit-currency":"",children:[", ",k]}),$]}):typeof t!="string"?a.jsx(da,{$attached:!1,$icon:!1,className:n,children:t}):a.jsx(Vn,{token:t,className:n,spaced:!1})}const eh={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},th={center:"center",start:"flex-start",baseline:"baseline"},nh=p.forwardRef(function({justify:t="between",align:n="center",gap:o,wrap:r=!1,children:s,...i},l){return a.jsx(oh,{ref:l,$justify:t,$align:n,$gap:o,$wrap:r,...i,children:s})}),oh=w.div`
  display: flex;
  align-items: ${({$align:e})=>th[e]};
  justify-content: ${({$justify:e})=>eh[e]};
  gap: ${({$gap:e})=>e?vt[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function Oo(e){const t=Ao(e.held);return t===void 0?{label:e.label,tone:e.tone,title:e.title}:{label:e.label,tone:la(e.tone),title:e.title??`${e.label}: ${wt(t)}`,held:t}}function Be(e,t){return _e({magnitude:e,unit:t})}function rh(e,t){const{limit:n,actual:o,unit:r}=t;if(n==null||o==null)return null;switch(e){case nn.LimitReached:{const s=sh(t.quantity),i=`${Be(o,r)} of ${Be(n,r)}`;return t.facilityName?`the ${t.facilityName} holds ${i} ${s}`:`it holds ${i} ${s}`}case nn.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${Be(o,r)} of ${Be(n,r)}`;case nn.InsufficientFunds:return`it costs ${Be(Math.trunc(o),r)} and funds are ${Be(Math.trunc(n),r)}`;case nn.InsufficientScience:return`it costs ${Be(o,r)} and science is ${Be(n,r)}`;default:return null}}function sh(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function Ir(e){return e&&Cs(e)?.sentence||null}function ah(e){const t=e?.trim().replace(/\.$/,"");return t||null}function Fo(e){return ha(e,"refused")}function c1(e){return ha(e,"unavailable")}function ha(e,t){const n=st(e),o=(e.breach?rh(e.errorCode,e.breach):null)??ah(e.detail)??Ir(e.reason)??Ir(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function fa(e){const n=st(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":ih(Fo({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function ih(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function pa(e){return`${st(e)||e.command||"The command"}: no reply. May have run.`}function lh(){const e=Qi();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const Rn=Zi(lh),d1=Rn.Context;function u1({children:e}){return a.jsx(Rn.Provider,{children:a.jsx(ch,{children:e})})}function ch({children:e}){const t=Rn.useStore();return a.jsx(sl.Provider,{value:t,children:e})}const Do=Rn.useStore,dh=()=>()=>{},uh=[],Rr=()=>uh;function hh(){const e=Do();return p.useSyncExternalStore(e?e.subscribe:dh,e?e.getActiveHandles:Rr,e?e.getActiveHandles:Rr)}const Lt=new WeakMap,fo=new WeakMap;function Cr(e){for(const t of fo.get(e)??[])t()}function fh(e){return Lt.set(e,(Lt.get(e)??0)+1),Cr(e),()=>{Lt.set(e,(Lt.get(e)??1)-1),Cr(e)}}function h1(){const e=Do();return p.useSyncExternalStore(t=>{if(!e)return()=>{};const n=fo.get(e)??new Set;return fo.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(Lt.get(e)??0)>0,()=>!1)}function Cn({children:e,"aria-label":t,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:r=!1,as:s="span",className:i}){const c={role:n?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":t,className:i,"data-live-region":""};return n?a.jsx(Ye,{as:s,...c,children:e}):p.createElement(s,c,e)}const ph=.72,gh=.76;function po({size:e,kind:t="held",figureSize:n}){return a.jsx("tspan",{dy:n===void 0?-e*.55:-(n*ph-e*gh),fontSize:e,fill:se[t].color,"data-held-mark":"","data-reckoning-mark":t,children:se[t].glyph})}function f1({end:e,x1:t,y1:n,x2:o,y2:r}){return a.jsx("line",{"data-bound":e,x1:t,y1:n,x2:o,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function ga(e,t){return t===null?e:`${e}, ${t}`}function mh(e){return e===null?{}:{"data-currency-in-name":""}}function p1({x:e,y:t,size:n,children:o}){return a.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function Tr(e,t){return t?.state!=="held"?e:{...t,value:e}}function Ue(e){return e.kind==="continuous"?"ribbon":"dot"}function xh(e){return e.delivery==="acked"}function vh(e){return e.direction==="command"?"outbound":"inbound"}function ma(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function Tn(e){return`${e.direction}/${e.kind}/${e.delivery}`}const bh={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function zo(e){return bh[Tn(e)]??null}const Pr=new Set;function xa(e,t){const n=Tn(e);if(Pr.has(n))return;Pr.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;Is()?Ni.error(o):console.error(o)}const va=16,Lr=va/2,yh=5.5,wh=2,kh=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function ba(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function $h(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/wh)),Math.max(2,Math.round(o)))}function _h(e,t,n){if(e.length===0)return"";const o=ba(e,t,n);if(!(o>0))return`M0.00,${Lr.toFixed(2)}`;const r=$h(e,t,o),s=[];for(let i=0;i<=r;i++){const l=Math.min(i/r*o,o),c=Math.min(Math.round(l/n*t),e.length-1),d=kh(e[e.length-1-c]),h=(i%2===0?-1:1)*d*yh;s.push(`${l.toFixed(2)},${(Lr+h).toFixed(2)}`)}return`M${s.join(" L")}`}const ya=.05,Nr=.02,Or=1.5,Mh=.25,yn=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],Pn=100,Nt=30,Sh=1.5,xe=2,jh=4,De=Nt-xe-jh,Le=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(Pn-n*2),It=e=>xe+(1-Math.max(0,Math.min(1,e)))*De,wa=e=>e==="inline"?Sh:0;function g1(e="inline"){const t=wa(e);return(Pn-t*2)/3}function ka({tags:e,who:t}){return xa(e,t),a.jsx("g",{"data-rail-unrepresented":Tn(e),"data-rail-entry":t})}function ot(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function Fr(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(c=>c.age>=t);if(n===-1)return[];const o=e[n-1],r=e[n],s=r.age-o.age||1,i=(t-o.age)/s,l=o.value+i*(r.value-o.value);return[{age:t,value:l},...e.slice(n)]}function Dr(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(d=>d.age>t),r=e.slice(0,o),s=e[o],i=r[r.length-1];if(!i)return[{age:t,value:s.value}];const l=s.age-i.age||1,c=(t-i.age)/l;return[...r,{age:t,value:i.value+c*(s.value-i.value)}]}const Eh=.25;function zt(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>o.age)return null;if(t===o.age)return o.value;for(let r=1;r<e.length;r++){const s=e[r];if(t<=s.age){const i=e[r-1],l=(t-i.age)/(s.age-i.age||1);return i.value+l*(s.value-i.value)}}return o.value}function Ah(e,t,n){const o=t.length>0&&t[t.length-1].age>=n-Mh,r=e.map(l=>{if(zt(t,l.age)===null)return!1;let c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;const h=g=>{g!==null&&(c=Math.min(c,g),d=Math.max(d,g))},f=l.age-Or,x=l.age+Or;let m=zt(t,x);if(m===null){if(!o)return!1;m=t[t.length-1].value}h(zt(t,f)),h(m);for(const g of t)g.age>f&&g.age<x&&h(g.value);return l.value<c-Nr||l.value>d+Nr}),s=[];let i=0;for(let l=1;l<=r.length;l++)l<r.length&&r[l]===r[i]||(s.push({from:i,to:Math.min(l,r.length-1),off:r[i]}),i=l);return s}function Ih({stream:e,span:t,index:n,padX:o,oneT:r,twoT:s}){const l=`var(${yn[n%yn.length]})`,c=p.useId(),d=`cds-ramp-${c}-${n}`,h=`cds-fill-${c}-${n}`,f=`cds-tail-${c}-${n}`,x=zo(e.tags);if(x!=="continuous-strip")return x===null?a.jsx(ka,{tags:e.tags,who:e.id}):null;const m=xh(e.tags),g=m?e.inTransit:Dr(e.inTransit,r),v=g.map(P=>({x:Le(P.age,t,o),y:It(P.value)}));if(v.length===0)return null;const E=(m?[]:Dr(Fr(e.inTransit,r),r*(1+Eh))).map(P=>({x:Le(P.age,t,o),y:It(P.value)})),S=E.length>1&&E[E.length-1].x>E[0].x,T=`${ot(v)} L${v[v.length-1].x.toFixed(2)},${(xe+De).toFixed(2)} L${v[0].x.toFixed(2)},${(xe+De).toFixed(2)} Z`,j=m?Fr(e.echo,s):[],I=j.map(P=>({x:Le(P.age,t,o),y:It(P.value)})),M=j.map(P=>({x:Le(P.age,t,o),y:It(zt(e.inTransit,P.age)??P.value)})),N=Ah(j,e.inTransit,t),$=g[g.length-1].age,L=zt(j,$),W=j.filter(P=>P.age>$),K=(L===null||W.length===0?W:[{age:$,value:L},...W]).map(P=>({x:Le(P.age,t,o),y:It(P.value)})),D=K.length>1?`${ot(K)} L${K[K.length-1].x.toFixed(2)},${(xe+De).toFixed(2)} L${K[0].x.toFixed(2)},${(xe+De).toFixed(2)} Z`:null;return a.jsxs("g",{"data-stream-group":e.id,"data-return-leg":m,children:[a.jsxs("defs",{children:[a.jsxs("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:v[0].x,y1:"0",x2:Math.max(v[v.length-1].x,v[0].x+1),y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.10"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0.40"})]}),a.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.22"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]}),S&&a.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:E[0].x,y1:"0",x2:E[E.length-1].x,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:l,stopOpacity:"0.40"}),a.jsx("stop",{offset:"1",stopColor:l,stopOpacity:"0"})]})]}),a.jsx("path",{"data-role":"area",d:T,fill:`url(#${h})`,stroke:"none"}),D&&a.jsx("path",{"data-role":"echo-area",d:D,fill:`url(#${h})`,stroke:"none"}),a.jsx("path",{"data-role":"commanded","data-stream":e.id,d:ot(v),fill:"none",stroke:`url(#${d})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),S&&a.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:ot(E),fill:"none",stroke:`url(#${f})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),N.map(P=>P.off?a.jsxs(p.Fragment,{children:[a.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:ot(I.slice(P.from,P.to+1)),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),a.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:ot(M.slice(P.from,P.to+1)),fill:"none",stroke:l,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]},P.from):P.to>P.from&&a.jsx("path",{"data-role":"echo","data-stream":e.id,d:ot(I.slice(P.from,P.to+1)),fill:"none",stroke:l,strokeWidth:"0.8",strokeLinecap:"round"},P.from))]})}function Rh({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${p.useId()}`,o=e.tags,r=zo(o);if(r!=="continuous-strip")return r===null?a.jsx(ka,{tags:o,who:e.id}):null;const s=(Pn-t*2)/3,i=e.amplitudes,l=e.spanSamples??i.length,c=_h(i,l,s);if(c==="")return null;const d=Math.max(ba(i,l,s),1),h=`var(${ma(o)})`,f=vh(o)==="outbound";return a.jsxs("g",{"data-ribbon-group":e.id,transform:`translate(${t} ${xe}) scale(1 ${De/va})`,children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:f?0:d,y1:"0",x2:f?d:0,y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:h,stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:h,stopOpacity:"0.1"})]})}),a.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:c,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function Ch({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:r}){const s=`cds-divfade-${p.useId()}`,i=r?.state==="held",l=i?jn(r??null).caption:null,{anchor:c,tip:d}=Vt(l),h=[...e,...t].find(j=>j.oneWaySeconds!==null),f=h?.oneWaySeconds??null;if(!h||f===null||yo(f)!=="shown")return null;const x=f>=ya;if(!x&&t.length===0)return null;const m=3*f,g=f,v=2*f,k=wa(o),E=Le(g,m,k),S=Le(v,m,k),T=e.every(j=>j.inTransit.length===0&&j.echo.length===0)&&t.every(j=>j.amplitudes.length===0);return a.jsxs(Th,{"data-oneway":f,"data-variant":o,$variant:o,...c,children:[a.jsxs(Ph,{$variant:o,$quiet:T,role:"img","aria-label":ga(n,l),...mh(l),viewBox:`0 0 ${Pn} ${Nt}`,preserveAspectRatio:"none",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:xe,x2:"0",y2:xe+De,children:[a.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),a.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(x?e:[]).map((j,I)=>a.jsx(Ih,{stream:j,span:m,index:I,padX:k,oneT:g,twoT:v},j.id)),t.map(j=>a.jsx(Rh,{ribbon:j,padX:k},j.id)),a.jsx("line",{"data-divider":"t",x1:E,x2:E,y1:xe,y2:xe+De,stroke:`url(#${s})`,strokeWidth:"0.4"}),a.jsx("line",{"data-divider":"2t",x1:S,x2:S,y1:xe,y2:xe+De,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&a.jsxs("g",{"data-role":"hover-labels",children:[a.jsxs("text",{x:E,y:xe-.4,textAnchor:"middle",fontSize:"2",children:[_e(Ce("s",f),{decimals:1}),i&&a.jsx(po,{size:1.2})]}),a.jsxs("text",{x:S,y:xe-.4,textAnchor:"middle",fontSize:"2",children:[_e(Ce("s",2*f),{decimals:1}),i&&a.jsx(po,{size:1.2})]}),a.jsx("text",{x:Le(f/2,m,k),y:Nt-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),a.jsx("text",{x:Le(1.5*f,m,k),y:Nt-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),a.jsx("text",{x:Le(2.5*f,m,k),y:Nt-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&a.jsxs(a.Fragment,{children:[a.jsxs(Lh,{"aria-hidden":"true",children:[a.jsxs("span",{children:["outgoing ",a.jsx("b",{children:"0"})]}),a.jsxs("span",{children:["echo"," ",a.jsx("b",{children:a.jsx(Ar,{value:Tr(Ce("s",f),r),decimals:1})})]}),a.jsxs("span",{children:["confirmed"," ",a.jsx("b",{children:a.jsx(Ar,{value:Tr(Ce("s",2*f),r),decimals:1})})]})]}),a.jsxs(Nh,{"aria-hidden":"true",children:[(x?e:[]).map((j,I)=>a.jsxs("span",{children:[a.jsx("i",{style:{background:`var(${yn[I%yn.length]})`}}),j.label]},j.id)),t.map(j=>a.jsxs("span",{"data-role":"legend-ribbon",children:[a.jsx("i",{style:{background:`var(${ma(j.tags)})`}}),j.label]},j.id)),x&&e.length>0&&a.jsxs("span",{"data-role":"legend-deviation",children:[a.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),d]})}const Th=w.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,Ph=w.svg`
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
`,Lh=w.div`
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
`,Nh=w.div`
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
`;function zr({handle:e,handles:t,"aria-label":n,mode:o,density:r,orientation:s,variant:i="inline"}){const l=t??(e?[e]:[]),c=l.length===1?l[0]:null,d=c?zo(c.tags):null;if(c&&d===null)return a.jsx(Oh,{tags:c.tags,who:c["aria-label"]});if(c&&d!=="in-flight-row"){const m=c,g=m.effectiveDelaySeconds;return yo(g)!=="shown"?null:a.jsx(Ch,{streams:m.streams??[],ribbons:m.ribbons??[],delayReading:m.delayReading,"aria-label":n??m["aria-label"],variant:i})}const h=Js(l.flatMap(m=>m.inFlight)),x=l.some(m=>m.dismiss)?m=>l.find(g=>g.inFlight.some(v=>v.id===m))?.dismiss?.(m):void 0;return a.jsx(oc,{items:h,"aria-label":n,mode:o,density:r,orientation:s,variant:i,onDismiss:x})}function Oh({tags:e,who:t}){return xa(e,t??"unnamed handle"),a.jsx("span",{hidden:!0,"data-rail-unrepresented":Tn(e)})}function $a(e){const n=st(e)||e.command||"The command",o=e.code===void 0?void 0:Cs(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function _a(e){return`${st(e)||e.command||"The command"}: never sent. Safe to re-send.`}function Ma(e){return`${st(e)||e.command||"The command"}: ${e.warning}`}const Fh={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed",warned:"Commands likely to be lost"},Dh={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command",warned:"warned command"};function zh(e,t){return e.kind==="refused"?Fo(e.entries[t]):e.kind==="found"?fa(e.entries[t]):e.kind==="failed"?$a(e.entries[t]):e.kind==="warned"?Ma(e.entries[t]):e.kind==="undelivered"?_a(e.entries[t]):pa(e.entries[t])}function Hh(e){return e.entries.map((t,n)=>{const o=st(t);return{id:t.id,subject:o||t.command||"",sentence:zh(e,n),dismissLabel:`Dismiss ${o||Dh[e.kind]}`,tags:t.tags}})}function ft(e){const{kind:t,onDismiss:n,live:o=!0}=e,r=e["aria-label"]??Fh[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const i=Hh(e).map(l=>a.jsxs(Xh,{role:o?void 0:"listitem",$tone:s,children:[Ue(l.tags)==="ribbon"?a.jsx(Gh,{$tone:s,children:l.subject}):a.jsx(Uh,{"aria-hidden":"true",$tone:s,children:Co(l.subject)}),a.jsx(Yh,{children:l.sentence}),n&&a.jsx(qh,{type:"button","data-dismiss":"",onClick:c=>{Ks(c.currentTarget),n(l.id)},"aria-label":l.dismissLabel,children:"✕"})]},l.id));return o?a.jsx(Wh,{forwardedAs:"div","aria-label":r,"data-command-list":"",additionsOnly:!0,children:i}):a.jsx(Bh,{role:"list","aria-label":r,"data-command-list":"",children:i})}const Sa=F`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,Bh=w.div`
  ${Sa}
`,Wh=w(Cn)`
  ${Sa}
  &:empty {
    margin: 0;
  }
`,Xh=w.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>ce[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${ce[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,Uh=w.span`
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  min-width: 34px;
  padding: var(--inset-glyph);
  align-self: stretch;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: ${({$tone:e})=>we[e]};
  border: 1px solid ${({$tone:e})=>ce[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${ce[e]} 14%, var(--color-surface-raised))`};
`,Gh=w.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>we[e]};
`,Yh=w.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,qh=w.button`
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
  ${at}
`;function xt(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,o)=>xt(n,t[o]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const n=[...t];return[...e].every(o=>{const r=n.findIndex(s=>xt(o,s));return r===-1?!1:(n.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[n,o]of e)if(!t.has(n)||!xt(o,t.get(n)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const n=e,o=t,r=new Set;for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of r)if(!xt(n[s],o[s]))return!1;return!0}return!1}function Ln(e,t,n,o){const[r,s]=p.useState(o),i=p.useRef(t);i.current=t;const l=p.useRef(n);l.current=n;const c=p.useRef(r);return c.current=r,p.useEffect(()=>{if(!e)return;let d=c.current;const h=()=>{const g=i.current(e);l.current(d,g)||(d=g,s(g))};h(),e.addEventListener("scroll",h,{passive:!0});const f=new ResizeObserver(h);f.observe(e);for(const g of Array.from(e.children))f.observe(g);let x;const m=new MutationObserver(g=>{if(g.some(v=>v.type==="childList")){for(const v of Array.from(e.children))f.observe(v);h();return}x===void 0&&(x=requestAnimationFrame(()=>{x=void 0,h()}))});return m.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style"]}),()=>{e.removeEventListener("scroll",h),f.disconnect(),m.disconnect(),x!==void 0&&cancelAnimationFrame(x)}},[e]),r}function Vh(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function ja(e){return Ln(e,Vh,Object.is,!1)?0:void 0}function Kh({label:e,selected:t,count:n,onToggle:o}){return a.jsxs(Zh,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[a.jsx("span",{children:e}),n!==void 0&&a.jsx(Qh,{children:n})]})}const Zh=w.button`
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

  ${at}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`,Qh=w.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function Jh({value:e,onChange:t,clearLabel:n="Clear search",className:o,...r}){const s=p.useRef(null);return a.jsxs(ef,{className:o,children:[a.jsx(tf,{...r,ref:s,type:"search",value:e,onChange:i=>t(i.target.value)}),e!==""&&a.jsx(nf,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:a.jsx(Ru,{size:"var(--icon-size-control)"})})]})}const ef=w.div`
  position: relative;
  display: flex;
  align-items: center;
`,tf=w(Bl)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,nf=w(Dl)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function m1({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=Ji(e),r=[...new Set(o)],[s,i]=p.useState(()=>new Set),[l,c]=p.useState(""),d=p.useId(),h=g=>{i(v=>{const k=new Set(v);return k.has(g)?k.delete(g):k.add(g),k})},f=[...s,l].filter(g=>g.length>0).map(g=>g.toLowerCase()),x=a.jsxs(Ls,{gap:"related-packed",children:[a.jsxs(zl,{children:[a.jsx(Hl,{htmlFor:d,children:t}),a.jsx(Jh,{id:d,value:l,placeholder:n,onChange:c})]}),r.length>0&&a.jsx(nh,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:r.map(g=>a.jsx(Kh,{label:g,selected:s.has(g),onToggle:()=>h(g)},g))})]}),m={matches:g=>{const v=g.toLowerCase();return f.every(k=>v.includes(k))},active:f.length>0};return Ea.set(m,x),m}const Ea=new WeakMap;function Aa(e){return Ea.get(e)??null}function x1({filter:e,children:t,fill:n=!1}){return a.jsxs(Ls,{gap:"related-dense",fill:n,children:[Aa(e),t]})}const of={accent:"var(--color-accent-fg)",warn:"var(--color-warn-mark)"},rf=24,sf=96;function af({children:e,padded:t,caption:n,footer:o,strip:r,shape:s="rounded",edgeCue:i,...l}){const c=s==="circle",d=!c||i===void 0?[]:[i].flat(),h=!c&&r!==void 0&&r!==null&&r!==!1;return a.jsxs(lf,{$padded:t&&!h,$stacked:h,$circle:c,$cued:d.length>0,"data-shape":c?"circle":void 0,...l,children:[h?a.jsxs(a.Fragment,{children:[a.jsx(pf,{$padded:t,children:e}),a.jsx(gf,{"data-framed-display-strip":"",children:r})]}):c&&i!==void 0?a.jsx(cf,{children:e}):e,d.length>0&&a.jsx(ff,{cues:d}),n!=null&&a.jsx(Ra,{children:n}),o!=null&&a.jsx(mf,{children:o})]})}const lf=w.div`
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
`,cf=w.div`
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
`,Ee=12,Hr=1,df=3,Ia=1,uf=100*Ia/200,Br=e=>e*Math.PI/180;function hf(e,t=uf){const n=Math.min(Math.max(e.span??90,1),359),o=Math.min(Math.max(Number.isFinite(e.grow)?e.grow:0,0),1),r=50,i=50+(Hr+(df-Hr)*o)*t,l=Br(e.angle-n/2),c=Br(e.angle+n/2),d=(f,x)=>`${(50+f*Math.cos(x)).toFixed(3)} ${(50-f*Math.sin(x)).toFixed(3)}`,h=n>180?1:0;return`M${d(r,l)}A${r} ${r} 0 ${h} 0 ${d(r,c)}L${d(i,c)}A${i} ${i} 0 ${h} 1 ${d(i,l)}Z`}function ff({cues:e}){const{ref:t,size:n}=En({w:100+2*Ee,h:100+2*Ee}),o=(100+2*Ee)/Math.max(n.w,1),r=Ia*o;return a.jsx("div",{ref:t,"aria-hidden":"true",style:{position:"absolute",left:`${-Ee}%`,top:`${-Ee}%`,width:`${100+2*Ee}%`,height:`${100+2*Ee}%`,pointerEvents:"none"},children:a.jsx("svg",{"aria-hidden":"true","data-edge-cues":"",viewBox:`${-Ee} ${-Ee} ${100+2*Ee} ${100+2*Ee}`,style:{display:"block",width:"100%",height:"100%",overflow:"visible"},children:e.map(s=>a.jsx("path",{"data-edge-cue":"",d:hf(s,r),fill:of[s.tone]},`${s.angle}-${s.tone}`))})})}const pf=w.div`
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
`,gf=w.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${rf}px;
  max-height: ${sf}px;
  min-width: 0;
  overflow: hidden;
`,Ra=w.div`
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
`,mf=w(Ra)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,Wr={width:160,height:72},xf=2.5,vf=420;function v1({width:e,height:t,plotHasData:n}){return!n&&e>=Wr.width&&t>=Wr.height?"center":e>=vf&&e>=t*xf?"beside":"inline"}const bf={overlay:F`
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
  `};function yf({placement:e,role:t="status",children:n,...o}){return a.jsx(wf,{$placement:e,role:t,...o,children:n})}const wf=w.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${el.regular};
  pointer-events: none;

  ${({$placement:e})=>bf[e]}
`,wn=8;function Ca(e){const t=[{cols:1,rows:e}];for(let n=2;n<=e;n++){const o=Math.ceil(e/n);o<(t.at(-1)?.rows??e)&&t.push({cols:n,rows:o})}return t}function Ta(e){return e===0?"0px":`(${e}px + var(--gap-related))`}const Pa=(e,t)=>`calc(${e} * ${t} + ${(e-1)*wn}px)`,kf=(e,t,n)=>`calc(${e} * (${t} + ${n+wn}px) + ${(e-1)*wn}px)`;function $f(e,t,n,o,r){const s=Ta(n),i=Ca(e).slice(1).map(({cols:c,rows:d})=>`
  @container grid-squares-width (width >= ${Pa(c,t)}) {
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
`}function _f(e,t,n,o){const r=Ca(e),s=o!==void 0;return r.slice(1).map(({cols:i,rows:l},c)=>`
  @container grid-squares (aspect-ratio >= ${(.88*i/r[c].rows).toFixed(2)}) and ((width >= ${Pa(i,t)}) or (height < ${kf(s?l:r[c].rows,o??t,n)})) {
    --cols: ${i};
    --rows: ${l};
  }`).join("")}function Mf(e,t){const n=`
  & > * > * {
    --grid-square-heading: ${e===0?"0px":`calc${Ta(e)}`};
  }`;return e===0||t===void 0?n:`${n}
  @container (width < ${t}px) or (height < ${t+e+wn}px) {
    & > * > * {
      --grid-square-heading: 0px;
    }
    & > * [data-grid-square-heading] {
      display: none;
    }
  }`}function Sf(e){const t=new Set;return e.map(n=>{const o=n.inFlight.filter(r=>t.has(r.id)?!1:(t.add(r.id),!0));return o.length===n.inFlight.length?n:{...n,inFlight:o}})}function Kn(e){const t=new Set;return e.filter(n=>t.has(n.id)?!1:(t.add(n.id),!0))}function jf(e){const t=new Map;for(const n of e)for(const o of n.warnings??[]){const r=`${o.command}\0${o.label}\0${o.warning}`;t.has(r)||t.set(r,{...o,id:r,tags:n.tags})}return[...t.values()]}const Xr=new Map,Ef=new Set(["overdue","lost"]);function Af(e){const t=new Set,n=new Set;for(const o of e){for(const r of o.refusals??[])t.add(r.id);for(const r of o.failures??[])t.add(r.id);for(const r of o.undelivered??[])t.add(r.id);for(const r of o.founds??[])(r.outcome==="ran"?n:t).add(r.id)}return{failed:t,ran:n}}function If(e){const t=new Map;for(const d of e)for(const h of d.inFlight)h.settling||t.set(h.id,{handleId:d.id,row:h});const{failed:n,ran:o}=Af(e),[r,s]=p.useState({last:Xr,settling:Xr}),i=[...r.last].filter(([d])=>!t.has(d));if(i.length>0||t.size!==r.last.size||[...t].some(([d,h])=>r.last.get(d)?.row!==h.row)){const d=i.map(([h,f])=>{const x=n.has(h)||Ef.has(f.row.predictedPhase)&&!o.has(h)?"failed":"confirmed",m=x==="confirmed"?_r(f.row):0;return[h,{...f,row:{...f.row,settling:x,settleSeconds:m}}]});s({last:t,settling:d.length===0?r.settling:new Map([...r.settling,...d])})}const c=p.useRef(new Map);return p.useEffect(()=>{const d=c.current;for(const[h,f]of r.settling){if(d.has(h))continue;const x=setTimeout(()=>{d.delete(h),s(m=>{const g=new Map(m.settling);return g.delete(h),{...m,settling:g}})},(f.row.settleSeconds??0)*1e3+Xt);d.set(h,x)}},[r.settling]),p.useEffect(()=>{const d=c.current;return()=>{for(const h of d.values())clearTimeout(h)}},[]),r.settling.size===0?e:e.map(d=>{const h=[...r.settling.values()].filter(f=>f.handleId===d.id&&!t.has(f.row.id)).map(f=>f.row.settling==="confirmed"&&n.has(f.row.id)?{...f.row,settling:"failed",settleSeconds:0}:f.row.settling==="failed"&&o.has(f.row.id)?{...f.row,settling:"confirmed",settleSeconds:_r(f.row)}:f.row);return h.length===0?d:{...d,inFlight:[...d.inFlight,...h]}})}function Rf(e){if(Ue(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return t===null||t<=0?!1:n>0||t>=ya&&o>0}return e.inFlight.length>0}function La({tiny:e}={}){const t=hh(),n=Do();p.useEffect(()=>n?fh(n):void 0,[n]);const o=Sf(If(t)).filter(Rf),r=jf(t),s=Kn(t.flatMap(_=>(_.refusals??[]).map(X=>({...X,tags:_.tags})))),i=t.flatMap(_=>(_.losses??[]).map(X=>({...X,tags:_.tags}))),l=Kn(t.flatMap(_=>(_.founds??[]).map(X=>({...X,tags:_.tags})))),c=t.flatMap(_=>(_.undelivered??[]).map(X=>({...X,tags:_.tags}))),d=Kn(t.flatMap(_=>(_.failures??[]).map(X=>({...X,tags:_.tags})))),h=s.length+c.length+d.length,f=o.length>0||h>0||i.length>0||l.length>0||r.length>0,[x,m]=p.useState(!1),[g,v]=p.useState(!1),[k,E]=p.useState(!1),S=x||g&&!k;p.useEffect(()=>{f||(m(!1),v(!1),E(!1))},[f]);const T=p.useId(),j=[...o.filter(_=>Ue(_.tags)==="ribbon"),...o.filter(_=>Ue(_.tags)!=="ribbon")],I=o.some(_=>Ue(_.tags)==="ribbon"),M=j.filter(_=>Ue(_.tags)!=="ribbon"),N=Js(o.filter(_=>Ue(_.tags)!=="ribbon").flatMap(_=>_.inFlight)),L=t.some(_=>_.dismiss&&(_.refusals?.length??0)>0)?_=>{for(const X of t)X.refusals?.some(le=>le.id===_)&&X.dismiss?.(_)}:void 0,K=t.some(_=>_.dismiss&&(_.losses?.length??0)>0)?_=>t.find(X=>X.losses?.some(le=>le.id===_))?.dismiss?.(_):void 0,P=t.some(_=>_.dismiss&&(_.undelivered?.length??0)>0)?_=>t.find(X=>X.undelivered?.some(le=>le.id===_))?.dismiss?.(_):void 0,te=t.some(_=>_.dismiss&&(_.failures?.length??0)>0)?_=>{for(const X of t)X.failures?.some(le=>le.id===_)&&X.dismiss?.(_)}:void 0,ie=t.some(_=>_.dismiss&&(_.founds?.length??0)>0)?_=>{for(const X of t)X.founds?.some(le=>le.id===_)&&X.dismiss?.(_)}:void 0;return a.jsxs(Cf,{"data-panel-rail-frame":"",$tiny:e,$hasContent:f,onMouseEnter:()=>{E(!1),v(!0)},onMouseLeave:()=>v(!1),children:[t.length>0&&a.jsxs(Cn,{visuallyHidden:!0,additionsOnly:!0,children:[s.map(_=>a.jsxs("span",{children:[Fo(_)," "]},`refusal:${_.id}`)),i.map(_=>a.jsxs("span",{children:[pa(_)," "]},`loss:${_.id}`)),c.map(_=>a.jsxs("span",{children:[_a(_)," "]},`undelivered:${_.id}`)),d.map(_=>a.jsxs("span",{children:[$a(_)," "]},`failure:${_.id}`)),l.map(_=>a.jsxs("span",{children:[fa(_)," "]},`found:${_.id}`)),r.map(_=>a.jsx("span",{children:Ma(_)},`warning:${_.id}`))]}),f?a.jsxs(Pf,{"data-panel-rail":"","data-grown":S,"data-pinned":x,"data-suppress-hover":k,onKeyDown:_=>{_.key==="Escape"&&x&&(_.stopPropagation(),m(!1),E(!0))},children:[S&&N.length>0&&!I&&a.jsx(Ur,{children:a.jsx(Mr,{items:N,height:Of})}),a.jsx(Me,{text:!S&&N.length>0?`In flight: ${N.filter(_=>!_.settling).map(_=>_.label).join(", ")}`:null,children:a.jsx(Lf,{type:"button","aria-expanded":x,"aria-controls":T,"aria-label":"Signal-delay detail",onClick:()=>{m(_=>{const X=!_;return X||E(!0),X})},children:a.jsx(Hf,{"aria-hidden":"true",hidden:!S,children:"▲"})})}),a.jsxs(Ff,{id:T,"data-panel-rail-detail":"",children:[j.filter(_=>!S||Ue(_.tags)==="ribbon").map(_=>a.jsx(zr,{handle:_,variant:S?"expanded":"rail","aria-label":_["aria-label"]??(S?"Delay detail":void 0)},_.id)),S&&M.length>0&&a.jsx(zr,{handles:M,variant:"expanded","aria-label":"Commands in flight"},"queue"),!S&&(h>0||i.length>0||l.length>0||r.length>0)&&a.jsxs(Df,{children:[h>0&&a.jsx(Zn,{children:h===1?"1 command failed":`${h} commands failed`}),i.length>0&&a.jsx(Zn,{children:i.length===1?"1 command unconfirmed":`${i.length} commands unconfirmed`}),r.length>0&&a.jsx(Zn,{children:r.length===1?"1 warning":`${r.length} warnings`}),l.length>0&&a.jsx(zf,{children:l.length===1?"1 unconfirmed command answered":`${l.length} unconfirmed commands answered`})]})]}),S&&N.length>0&&I&&a.jsx(Ur,{"data-over-graph":"true",children:a.jsx(Mr,{items:N,height:Nf})})]}):null,S&&r.length>0&&a.jsx(ft,{kind:"warned",entries:r,live:!1}),S&&s.length>0&&a.jsx(ft,{kind:"refused",entries:s,onDismiss:L,live:!1}),S&&i.length>0&&a.jsx(ft,{kind:"lost",entries:i,onDismiss:K,live:!1}),S&&c.length>0&&a.jsx(ft,{kind:"undelivered",entries:c,onDismiss:P,live:!1}),S&&d.length>0&&a.jsx(ft,{kind:"failed",entries:d,onDismiss:te,live:!1}),S&&l.length>0&&a.jsx(ft,{kind:"found",entries:l,onDismiss:ie,live:!1})]})}const Cf=w.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,Tf=F`
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
`,Pf=w.div`
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
    ${Tf}
  }
`,Lf=w.button`
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

  ${qt}

  &[aria-expanded="true"] {
    pointer-events: none;
  }

`,Nf=86,Of=40,Ur=w.div`
  pointer-events: none;

  &[data-over-graph="true"] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`,Ff=w.div`
  display: contents;
`,Zn=w.span`
  color: ${we.warn};
`,Df=w.span`
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
`,zf=w.span`
  color: var(--color-info-text);
`,Hf=w.span`
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
`,Na=p.createContext(null);function b1({badges:e,children:t}){return a.jsx(Na.Provider,{value:e,children:t})}function Bf(){return p.useContext(Na)}function Oa({severity:e,count:t=1}){const n=t>1;return a.jsx(Wf,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${Wt[e]}`:Wt[e],$mark:ce[e],$digits:n?String(t).length:1,children:n&&a.jsx(Xf,{$fill:lo[e],$ink:Ts[e],children:a.jsx(Uf,{"aria-hidden":"true",children:a.jsx("text",{x:"50%",y:"50%",dy:"0.365em",textAnchor:"middle",children:t})})})})}const Gr="8px",Wf=w.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${Gr};
  /* The count's own size, so the width below can be counted in its digits. Digits this size are six pixels tall, which centre in the eight-pixel dot on whole pixels; at seven they are five, and one engine places the baseline half a pixel above or below the middle. */
  font-size: 8px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:Gr};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,Xf=w.span`
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
`,Uf=w.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: currentColor;
`,Gf=()=>()=>{},Yr=()=>tl;function Fa(){const e=Ns();return p.useSyncExternalStore(e?e.subscribe:Gf,e?e.getBreakdown:Yr,e?e.getBreakdown:Yr)}const Yf=()=>()=>{},qr=()=>null;function qf(){const e=Ns();return p.useSyncExternalStore(e?e.subscribe:Yf,e?e.getSummary:qr,e?e.getSummary:qr)}const Da=F`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,Vf=12;function Kf(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function Zf(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const r=o<e?t-Vf:t;if(n[o]<=r)return o}return n.length-1}function Qf(e,t,n){const[o,r]=p.useState(0),s=p.useRef(o);s.current=o;const i=[t,...n].join(`
`),l=p.useCallback(()=>{const c=e.current,d=i.split(`
`);if(!c||d.length<2){s.current!==0&&(s.current=0,r(0));return}const h=d.map(x=>Kf(c,x)),f=Zf(s.current,c.clientWidth,h);f!==s.current&&(s.current=f,r(f))},[e,i]);return p.useLayoutEffect(()=>{l()},[l]),p.useEffect(()=>{const c=e.current;if(!c||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>l());return d.observe(c),()=>d.disconnect()},[e,l]),{index:o,compacted:o>0}}const Jf=24;function ep(e,t,n,o,r=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&r?!(t>n+Jf):n>t}function Vr(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const r=e.cloneNode(!0);n!==void 0&&(r.textContent=n),Object.assign(r.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),r.setAttribute("aria-hidden","true"),o.insertBefore(r,e.nextSibling);const s=r.getBoundingClientRect().width;return o.removeChild(r),s}const tp={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function Rt(e){return Number.parseFloat(e)||0}function np(e,t,n,o){const[r,s]=p.useState(!1),i=p.useRef(r);i.current=r;const l=p.useRef(void 0),c=p.useRef(void 0),d=p.useRef(!1),h=p.useRef(o);h.current=o;const f=p.useCallback(()=>{const m=e.current;if(!m)return;const g=getComputedStyle(m),v=m.getBoundingClientRect().width-Rt(g.paddingLeft)-Rt(g.paddingRight),k=Vr(t.current,{},h.current),E=Vr(n.current,tp),S=n.current?.closest("[data-panel-aside-expand]")?.parentElement,T=S?getComputedStyle(S):null,j=k===0||E===0?k+E:k+Rt(g.columnGap)+Rt(T?.paddingLeft??"")+Rt(T?.paddingRight??"")+E,I=i.current,M=v>0&&c.current!==void 0&&v<c.current;I&&M&&(d.current=!0);const N=ep(I,v,j,l.current,d.current);N!==I&&(d.current=N&&M),v>0&&(c.current=v),j>0&&(l.current=j),N!==i.current&&(i.current=N,s(N))},[e,t,n]),x=p.useRef({title:null,aside:null,observer:null});return p.useLayoutEffect(()=>{const m=t.current,g=n.current,v=x.current;if(v.observer===null||v.title!==m||v.aside!==g){v.observer?.disconnect(),v.title=m,v.aside=g,v.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>f());for(const k of[m,g])k&&v.observer?.observe(k,{subtree:!0,childList:!0,characterData:!0,attributes:!0});f();return}v.observer.takeRecords().length>0&&f()}),p.useEffect(()=>{const m=x.current;return()=>{m.observer?.disconnect(),m.observer=null}},[]),p.useEffect(()=>{const m=e.current;if(!m||typeof ResizeObserver>"u")return;const g=new ResizeObserver(()=>f());return g.observe(m),n.current&&g.observe(n.current),()=>g.disconnect()},[e,n,f]),r}const za=p.createContext("full"),op=za.Provider;function y1(){return p.useContext(za)}const Nn=p.createContext(null);function Ha({children:e}){const[t,n]=p.useState(null),o=p.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return a.jsx(Nn.Provider,{value:o,children:e})}function rp({children:e}){return a.jsx(Ha,{children:e})}const Ba=`
  & > [${Fs}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,kn=w.div`
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
  ${({$hoverTitle:e})=>e?qt:""}
  /* A hand-composed panel can put sections straight in here, so this box owns the leftover height. */
  ${Ba}
`,sp=w.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${Da}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Wa=p.forwardRef(function({compact:t,children:n,...o},r){const s=p.useRef(null),i=typeof n=="string"?n:"",l=t===void 0||i===""?ap:typeof t=="string"?[t]:t,{index:c,compacted:d}=Qf(s,i,l);return a.jsx(Me,{text:d?i:void 0,children:a.jsx(sp,{...o,ref:h=>{if(s.current=h,typeof r=="function"){r(h);return}r&&(r.current=h)},"aria-label":d?i:void 0,children:c===0?n:l[c-1]})})}),ap=[],ip=w.div`
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
`,lp=w.div`
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
`,cp=w.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,dp=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,up=w.details`
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
    ${at}
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
`,hp=120;function Xa(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${Wt[n.severity]}`:`${Wt[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function Ua({title:e,compactTitle:t,aside:n,toolbar:o,...r}){const s=Fa(),i=p.useRef(null),l=p.useRef(null),c=p.useRef(null),d=np(i,l,c,typeof e=="string"?e:void 0),[h,f]=p.useState(!1),[x,m]=p.useState(!1),g=p.useRef(null),v=p.useRef(null),k=p.useRef(null),E=p.useCallback(()=>{g.current!==null&&clearTimeout(g.current),g.current=null},[]);p.useEffect(()=>{d||(f(!1),m(!1))},[d]),p.useEffect(()=>E,[E]);const S=d&&(h||x);p.useEffect(()=>{if(!S)return;const M=$=>{$.key==="Escape"&&v.current?.contains(document.activeElement)&&($.stopPropagation(),E(),m(!1),f(!1),k.current?.focus())},N=$=>{v.current?.contains($.target)||(E(),m(!1),f(!1))};return document.addEventListener("keydown",M,!0),document.addEventListener("pointerdown",N,!0),()=>{document.removeEventListener("keydown",M,!0),document.removeEventListener("pointerdown",N,!0)}},[S,E]);const T=d?Xa(s):null,{anchor:j,tip:I}=Vt(S?null:T);return a.jsxs(ip,{ref:i,"data-panel-header":"",...r,children:[a.jsxs(lp,{children:[e!==void 0&&a.jsx(Wa,{ref:l,compact:t,children:e}),a.jsx(cp,{"aria-hidden":"true",children:a.jsx(bn,{children:null})})]}),n!==void 0&&a.jsx(dp,{children:a.jsxs(up,{ref:v,"data-panel-aside-expand":"","data-hovering":d&&x?"":void 0,$collapsed:d,open:d?h:!0,onToggle:M=>{d&&(f(M.currentTarget.open),M.currentTarget.open||m(!1))},onPointerEnter:M=>{!d||M.pointerType==="touch"||(E(),m(!0))},onPointerLeave:M=>{M.pointerType!=="touch"&&(E(),g.current=setTimeout(()=>{g.current=null,m(!1)},hp))},children:[a.jsxs("summary",{ref:k,"data-tooltip":j["data-tooltip"],onPointerDown:j.onPointerDown,onPointerUp:j.onPointerUp,onFocus:j.onFocus,onBlur:j.onBlur,"aria-description":T??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(M=>`${M.count} ${Wt[M.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(M=>a.jsx(Oa,{severity:M.severity,count:M.count},M.severity)),a.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),I,a.jsx(op,{value:d?"collapsed":"full",children:a.jsx("div",{"data-panel-aside-full":"",ref:c,children:n})})]})}),o!==void 0&&a.jsx(Ga,{children:o})]})}const Ga=w.div`
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
`,fp=w.div`
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
  ${qt}
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
  ${({$loneFrame:e})=>e?`@container (width < ${pp}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${Ba}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${Fs}] {
           min-height: 0;
         }`:""}
`,pp="25rem";function Ya({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...r}){const i=p.useContext(Nn)?.registerScroller,[l,c]=p.useState(null),d=p.useCallback(f=>{i?.(f),c(f)},[i]),h=ja(l);return a.jsx(fp,{ref:d,tabIndex:h,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...r,children:e})}const gp="13rem",mp=w.div`
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
  & > [${nl}] {
    grid-column: 1 / -1;
  }
  /* A grid opened only to carry the augment slot, with nothing bound, takes no gap above it: a filling section reaches the body's bottom inset. */
  &:empty {
    display: none;
  }
`;function xp({children:e,hoverTitle:t}){const n=p.useRef(null),o=p.useRef(null),r=yp(n,o);return a.jsx(vp,{ref:n,$fits:r,"data-panel-fit-body":"",children:a.jsx(bp,{ref:o,$fits:r,$hoverTitle:t,"data-panel-fit-shifted":r&&t?"":void 0,children:e})})}const vp=w.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,bp=w.div`
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
`;function yp(e,t){const[n,o]=p.useState(!0);return p.useLayoutEffect(()=>{const r=e.current,s=t.current;if(!r||!s)return;const i=()=>{o(kp(wp(s),r.clientHeight))};if(i(),typeof ResizeObserver>"u")return;const l=new ResizeObserver(i),c=()=>{l.observe(r),l.observe(s);for(const h of Array.from(s.children))l.observe(h)};c();const d=new MutationObserver(()=>{c(),i()});return d.observe(s,{childList:!0}),()=>{l.disconnect(),d.disconnect()}},[e,t]),n}function wp(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function kp(e,t){return e<=t}const $p=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,_p=w.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${qt}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,$n=w.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e})=>e==="top"?"top: 0;":"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: 44px;
  /* The audit reads the mask depth from the gradient, so the literal height costs it nothing. */
  ${jc("panel-scroll-glow")}
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
`,qa=p.forwardRef(function({children:t,...n},o){const r=p.useRef(null),[s,i]=p.useState(null),l=p.useCallback(h=>{r.current=h,i(h)},[]);p.useImperativeHandle(o,()=>r.current);const c=Ln(s,Bo,Wo,Ho),d=ja(s);return a.jsxs($p,{...n,children:[a.jsx(_p,{ref:l,tabIndex:d,"data-scroll-area-inner":"",children:t}),a.jsx($n,{$position:"top",$visible:c.top}),a.jsx($n,{$position:"bottom",$visible:c.bottom})]})});function Mp(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const Kr="14rem",Sp=5,jp="45%",Ep=`min(${al(1,Sp).pxH}px, ${jp})`;function Zr(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const Ap=w.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${Zr(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${Zr(t,n)};`}

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
`;function Ip({side:e="end",size:t,placement:n="auto",railBand:o,children:r,...s}){const{ref:i,size:l}=En({w:1,h:1}),c=Mp(t??Kr),d=l.w<=1||c===void 0||l.w>=c*2,h=n==="below"?"block":(n==="beside"||l.w>=l.h)&&d?"inline":"block",f=t??(h==="inline"?Kr:Ep);return a.jsx(Ap,{ref:i,"data-panel-split":h,$axis:h,$side:e,$size:f,$railBand:o,...s,children:r})}const Rp=w(qa)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,Cp=w.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function Va({children:e,...t}){return a.jsx(Cp,{"data-panel-sidebar":"",...t,children:a.jsx(Rp,{children:e})})}const Ho={top:!1,bottom:!1};function Bo(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function Wo(e,t){return e.top===t.top&&e.bottom===t.bottom}const Tp=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function Ka({children:e,railBandAbove:t,...n}){const o=p.useContext(Nn),r=o?.scroller??null;p.useEffect(()=>{},[o]);const s=Ln(r,Bo,Wo,Ho);return a.jsxs(Tp,{...n,children:[e,a.jsx($n,{$position:"top",$visible:s.top&&!t}),a.jsx($n,{$position:"bottom",$visible:s.bottom})]})}function Pp(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const w1=["sections","actions"],rn=Object.freeze({});function Lp({summary:e}){const t=p.useRef(e.severity),[n,o]=p.useState(0);p.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const r=Xa(Fa());return a.jsx(Np,{$pulse:n,children:a.jsx(Me,{text:r,focusable:!0,children:a.jsx(bn,{tone:e.severity,size:"sm",children:e.label})})})}const Np=w.span`
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
`,Za=w.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,Op=w.div`
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
`;function Fp({children:e}){const t=p.useContext(Nn),n=Ln(t?.scroller??null,Bo,Wo,Ho);return a.jsx(Op,{"data-panel-sticky-top":"","data-panel-glow-top":n.top?"":void 0,children:e})}function Dp({render:e}){const{ref:t,size:n}=En({w:0,h:0});return a.jsx(zp,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const zp=w.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,Hp=w.div`
  flex: 1 1 100%;
  min-width: 0;
`,Bp=w(Ua)`
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
`,Wp=w.div`
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
`,Xp=w(Ye)`
  margin: 0;
  ${Da}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${kn}:hover &,
  ${kn}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function Xo(e){return e.held===void 0?e.label:`${e.label}: ${wt(e.held)}`}function Up(e){let t=null;for(const n of e){const o=Oo(n),{tone:r}=o;r===void 0||r==="neutral"||(t===null||vr(r)>vr(t.severity))&&(t={severity:r,label:Xo(o)})}return t}function Qr({badges:e}){return a.jsx(a.Fragment,{children:e.map(t=>a.jsx(Gp,{entry:t},t.id))})}function Gp({entry:e}){const t=Oo(e),{tone:n}=t;return ko(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:Xo(t)}),null}function Yp({summary:e,announcement:t}){return a.jsxs(a.Fragment,{children:[a.jsx(Me,{text:e.label,focusable:!0,children:a.jsx(qp,{children:a.jsx(Oa,{severity:e.severity})})}),a.jsx(Cn,{visuallyHidden:!0,assertive:!0,children:t})]})}const qp=w.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,Vp=w.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function Kp(e){return e.hoverTitle?a.jsx(Zp,{...e}):a.jsx(Qa,{...e,hoverTitleId:void 0})}function Zp(e){const t=p.useId();return a.jsx(Qa,{...e,hoverTitleId:t})}function Qa({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:r,panelToolbar:s,panelFilter:i,panelFooter:l,panelTrend:c,inactive:d,fitToSize:h,hoverTitle:f,hoverTitleId:x,panelSidebar:m,sidebarSide:g,sidebarSize:v,sidebarPlacement:k,sections:E,sectionMinWidth:S=gp,children:T,...j}){const I=Bf(),M=mr("actions"),N=mr("sections"),$=Pp(o,I),L=$.length===0?null:$.map(U=>{const oe=Oo(U),{label:Te,tone:Je,title:Oe}=oe;return a.jsx(Me,{text:Oe,focusable:!0,children:a.jsx(bn,{tone:Je,held:oe.held,report:Je===void 0||Je==="neutral"?void 0:{id:U.id,label:Xo(oe)},children:Te})},U.id)}),W=i===void 0?s:a.jsxs(a.Fragment,{children:[s,a.jsx(Hp,{children:Aa(i)})]}),K=r??null,D=K!==null&&K!=="none"&&K!=="live"?K:null;ko(D?{id:"stream",severity:Gn(D),label:xr(D)??""}:null);const P=qf(),q=P!==null&&$.some(U=>U.id===P.id),te=D===null?null:xr(D),ne=q?null:P!==null?a.jsx(Lp,{summary:P}):D===null||te===null?null:a.jsx(Me,{text:`Telemetry stream: ${te}`,focusable:!0,children:a.jsx(bn,{tone:Gn(D),size:"sm",children:te})}),ie=P?.label??te,_=ie===null||ie===""?"":typeof e=="string"?`${e}: ${ie}`:`Status: ${ie}`,X=n===void 0&&ne===null&&L===null&&!M?void 0:a.jsxs(a.Fragment,{children:[n,M&&a.jsx(on,{segment:"actions",props:rn}),L,ne]}),le=P??Up($)??(D===null||te===null?null:{severity:Gn(D),label:te}),Se=le?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${le.label}`:`Status: ${le.label}`,Ve=n===void 0&&le===null&&!M?$.length===0?void 0:a.jsx(Qr,{badges:$}):a.jsxs(a.Fragment,{children:[n,M&&a.jsx(on,{segment:"actions",props:rn}),a.jsx(Qr,{badges:$}),le!==null&&a.jsx(Yp,{summary:le,announcement:Se})]}),fe=d!==void 0,de=fe?[]:p.Children.toArray(E),J=de.length>0,pe=T===void 0&&!N&&!h&&de.length===1&&Qp(de[0]),je=[];for(const U of de){const oe=!h&&p.isValidElement(U)&&U.props.fill===!0,Te=je.at(-1);!oe&&Te!==void 0&&!Te.fill?Te.nodes.push(U):je.push({fill:oe,nodes:[U]})}J&&!je.some(U=>!U.fill)&&je.push({fill:!1,nodes:[]});const $e=je.reduce((U,oe,Te)=>oe.fill?U:Te,-1),Ke=U=>Math.max(1,U.filter(oe=>!(p.isValidElement(oe)&&oe.props.full===!0)).length),Ze=[];for(const U of je){const oe=Ze.length;if(U.fill){Ze.push(U.nodes[0]);continue}Ze.push(a.jsxs(mp,{$min:S,$columns:Ke(U.nodes),children:[U.nodes,oe===$e&&a.jsx(on,{segment:"sections",props:rn})]},`sections-${oe}`))}const Qe=fe?a.jsx(ol,{reason:d}):J?a.jsxs(a.Fragment,{children:[T,Ze]}):T,ue=a.jsxs(Ya,{fitToSize:h,loneFrame:pe,hoverTitle:f,children:[a.jsxs(Fp,{children:[a.jsx(La,{tiny:f}),!f&&a.jsx(Bp,{title:e,compactTitle:t,aside:X,toolbar:W})]}),h?a.jsx(xp,{hoverTitle:f,children:Qe}):Qe,!J&&!fe&&a.jsx(on,{segment:"sections",props:rn})]});return a.jsx(rp,{children:a.jsxs(kn,{$railTravels:!0,$hoverTitle:f,...f?{tabIndex:0,role:"group","aria-labelledby":x,"data-tiny-panel":""}:{},...j,children:[a.jsx(Ka,{railBandAbove:!0,children:m===void 0||fe?ue:a.jsxs(Ip,{side:g,size:v,placement:k,railBand:!0,children:[ue,a.jsx(Va,{children:m})]})}),!fe&&c!==void 0&&a.jsx(Dp,{render:c}),!fe&&l!==void 0&&a.jsx(Za,{children:l}),f&&a.jsxs(Wp,{"data-panel-hover-title":"",children:[a.jsx(Xp,{as:"h3",id:x,children:e}),Ve!==void 0&&a.jsx(Vp,{children:Ve})]}),a.jsx(Cn,{visuallyHidden:!0,children:f&&Se!==void 0?"":_})]})})}function Qp(e){if(!p.isValidElement(e)||e.type!==Os||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=p.Children.toArray(t).filter(r=>!(p.isValidElement(r)&&r.type===yf));if(n.length!==1)return!1;const[o]=n;if(!p.isValidElement(o))return!1;if(o.type===af)return!0;if(o.type!==p.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const k1=Object.assign(Kp,{Context:Ha,Delay:La,Container:kn,Header:Ua,Toolbar:Ga,Footer:Za,Title:Wa,Glow:Ka,Body:Ya,Section:Os,Sidebar:Va}),Jp={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function $1({cols:e,minColWidth:t,fit:n=!1,gap:o="related-dense",rowGap:r,align:s="center",squares:i=!1,squareHeadingPx:l=0,squareHeadingMinPx:c,minRowHeight:d,children:h,...f}){if(i){const x=p.Children.toArray(h).length,m=t??"120px",g=a.jsx(o0,{$count:x,$min:m,$headingPx:l,$gap:vt[o],$rowMin:d,children:a.jsx(r0,{$count:x,$min:m,$headingPx:l,$gap:vt[o],$rowMin:d,$headingMin:c,"data-grid-squares":"",children:h})});return a.jsx(t0,{$rowMin:d,...f,children:d===void 0?g:a.jsx(n0,{children:g})})}return a.jsx(e0,{$cols:e,$minColWidth:t,$fit:n,$gap:o,$rowGap:r,$align:s,...f,children:h})}const e0=w.div`
  display: grid;
  align-items: ${({$align:e})=>Jp[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${vt[t]} ${vt[e]}`:vt[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:n})=>e||(t?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,t0=w.div`
  container: grid-squares-width / inline-size;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  ${({$rowMin:e})=>e&&`
  flex-basis: 0;
  min-height: ${e};
`}
`,n0=w(qa)`
  & > [data-scroll-area-inner] {
    display: flex;
    flex-direction: column;
  }
`,o0=w.div`
  container: grid-squares / size;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${({$count:e,$min:t,$headingPx:n,$gap:o,$rowMin:r})=>$f(e,t,n,o,r)}
`,r0=w.div`
  --cols: 1;
  --rows: ${({$count:e})=>e};
  display: grid;
  flex: 1 1 0;
  min-height: 0;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
  gap: ${({$gap:e})=>e};
  ${({$count:e,$min:t,$headingPx:n,$rowMin:o})=>_f(e,t,n,o)}
  & > * {
    container-type: size;
    min-width: 0;
    min-height: 0;
  }
  ${({$headingPx:e,$headingMin:t})=>Mf(e,t)}
`,Ja=.89,Uo=.45;function ei({kind:e,x:t,y:n,scale:o=1,ghost:r=!1}){const s=se[e],i=s.canvasRadius*o,l={fill:s.color,opacity:r?Uo:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const d=i*Ja;return a.jsx("rect",{x:t-d,y:n-d,width:2*d,height:2*d,...l})}const c=`${t},${n-i} ${t+i},${n+i*.8} ${t-i},${n+i*.8}`;return a.jsx("polygon",{points:c,...l})}function ti(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function Jr(e,t,n,o,r,{ghost:s=!1,scale:i=1}={}){const l=se[n],c=l.canvasRadius*i;if(t.save(),t.globalAlpha=s?Uo:1,t.fillStyle=ti(e,l.cssVar,l.fallback),t.beginPath(),n==="held"){const d=c*Ja;t.rect(o-d,r-d,2*d,2*d)}else t.moveTo(o,r-c),t.lineTo(o+c,r+c*.8),t.lineTo(o-c,r+c*.8),t.closePath();t.fill(),t.restore()}function _1(e,t,{held:n,modelled:o},r={}){n!==void 0&&o!==void 0&&(t.save(),t.globalAlpha=Uo,t.strokeStyle=ti(e,se.modelled.cssVar,se.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.stroke(),t.restore()),n!==void 0&&Jr(e,t,"held",n.x,n.y,{...r,ghost:o!==void 0}),o!==void 0&&Jr(e,t,"modelled",o.x,o.y,r)}const _n=14,Re=4,Ie=6,s0=6,es=12,be=6,Ht=8,sn=4.5,go=4,a0=12,i0=190,l0=80;function Ot(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function c0(e,t,n,o){const r=o??e,s=r.x1-r.x0,i=e.y1-e.y0,l=s>=i0&&i>=l0,c=l||o!==void 0,d=l||o?n:n.filter(M=>!M.detail),h=s-be*2-Re*2-Ht-go,f=o!==void 0,x=Math.floor(h/Ie),m=M=>Ot(M.value??mn,x-(M.currency?M.currency.length+2:0)),g=M=>{const N=M.value??mn;if(f)return Ot(M.label,x);if(l)return`${M.label} ${N}`;const $=Math.floor((h-N.length*Ie)/Ie)-1-(M.modelled?2:0),L=Ot(M.label,Math.min($,a0));if(L!=="")return`${L} ${N}`;const W=Math.floor(h/Ie)-(M.modelled?2:0);return Ot(N,W)},v=M=>(l||f)&&M.currency?M.currency:"",k=M=>v(M)?s0+v(M).length*Ie+(M.modelled?es:0):M.modelled?es:0,E=l?0:Ht+go,S=Math.floor((s-be*2-Re*2)/Ie),T=Math.max(...d.map(M=>f?E+Math.max(g(M).length*Ie,m(M).length*Ie+k(M)):E+g(M).length*Ie+k(M)),c?Math.min(t.length,S)*Ie:0),j=c?1:0,I=(d.length*(f?2:1)+j)*_n+Re*2;return{full:l,named:c,headingChars:S,stacked:f,rows:d,text:g,valueText:m,currencyText:v,cardW:f?s:Math.min(T+Re*2,s-be*2),cardH:I,headRows:j,fits:I<=i-be*2}}function d0(e,t,n,o,r){const s=(i,l)=>i>=t&&i<=t+o&&l>=n&&l<=n+r;for(let i=1;i<e.cx.length;i++){const[l,c,d,h]=[e.cx[i-1],e.cy[i-1],e.cx[i],e.cy[i]];if(![l,c,d,h].every(Number.isFinite))continue;const f=Math.max(1,Math.ceil(Math.hypot(d-l,h-c)/_n));for(let x=0;x<=f;x++)if(s(l+(d-l)*x/f,c+(h-c)*x/f))return!0}return!1}function Go({x:e,plot:t,heading:n,rows:o,column:r,avoid:s=[],traces:i=[]}){const l=c0(t,n,o,r),{rows:c,cardW:d,cardH:h,fits:f}=l,x=t.y0+be,m=c.flatMap($=>$.y===void 0||$.y===null?[]:[$.y]),g=($,L)=>m.every(W=>e+sn<$||e-sn>$+d||W+sn<L||W-sn>L+h),v=t.x1-e-be,k=v>=d||v>=e-t.x0,E=$=>Math.max(t.x0+be,Math.min(t.x1-be-d,$)),S=k?[e+be,e-be-d]:[e-be-d,e+be],T=[x,t.y1-be-h].flatMap($=>S.map(L=>({cardX:E(L),cardY:$}))),j=($,L)=>i.every(W=>!d0(W,$,L,d,h)),I=($,L)=>s.every(W=>$+d<W.x0||$>W.x1||L+h<W.y0||L>W.y1),M=T.find($=>g($.cardX,$.cardY)&&j($.cardX,$.cardY)&&I($.cardX,$.cardY))??T.find($=>g($.cardX,$.cardY)&&I($.cardX,$.cardY))??T.find($=>g($.cardX,$.cardY)&&j($.cardX,$.cardY))??T.find($=>g($.cardX,$.cardY)),N=f?r?{cardX:r.x0,cardY:r.y0+be}:M:void 0;return{layout:l,place:N}}function M1(e){return Go(e).place!==void 0}function u0(e){const{layout:t,place:n}=Go(e);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+t.cardW,y1:n.cardY+t.cardH}}function h0({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:i}){const{layout:l,place:c}=Go({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:i}),{full:d,named:h,headingChars:f,stacked:x,rows:m,text:g,valueText:v,currencyText:k,cardW:E,cardH:S,headRows:T}=l,j=c!==void 0,I=c?.cardX??0,M=c?.cardY??0,N=$=>$+Re+(d?0:Ht+go);return a.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[a.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),m.map($=>$.y===void 0||$.y===null?null:a.jsx("circle",{cx:e,cy:$.y,r:3.5,fill:$.color,stroke:"var(--color-text-primary)",strokeWidth:1},$.id)),j&&a.jsxs("g",{"data-plot-crosshair-card":"",children:[a.jsx("rect",{x:I,y:M,width:E,height:S,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),h&&a.jsx("text",{x:I+Re,y:M+Re+10,fill:"var(--color-text-muted)",fontSize:10,children:Ot(n,f)}),m.map(($,L)=>{const W=x?2:1,K=M+Re+(L*W+T)*_n+10,D=K+(x?_n:0);return a.jsxs("g",{"data-plot-crosshair-row":$.id,children:[!d&&a.jsx("rect",{x:I+Re,y:K-8,width:Ht,height:Ht,fill:$.color,"data-plot-crosshair-swatch":""}),a.jsx("text",{x:N(I),y:K,fill:$.value===null||x?"var(--color-text-faint)":$.color,fontSize:10,style:{whiteSpace:"pre"},children:g($)}),x&&a.jsx("text",{x:N(I),y:D,fill:$.value===null?"var(--color-text-faint)":$.color,fontSize:10,style:{whiteSpace:"pre"},children:v($)}),$.modelled&&a.jsx(ei,{kind:"modelled",x:I+E-Re-k($).length*Ie-(k($)?8:4),y:D-3}),k($)&&a.jsx("text",{x:I+E-Re,y:D,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:k($)})]},$.id)})]})]})}const ts=720,f0=110,p0=200,ns=56,g0=20,m0=112,x0=260,v0=.4,b0=300;function y0({width:e,height:t,contentWidth:n,legendHeight:o=0,cardHeight:r=0}){const s=Math.max(m0,Math.ceil(n));if((t>e||e<ts)&&t>=p0)return{placement:"below"};if(e<ts||t<f0||s>Math.min(x0,e*v0)||e-s<b0)return{placement:"overlay"};const l=t>=ns+o+r;return!l&&t<ns+g0+r?{placement:"overlay"}:{placement:"beside",columnWidth:s,legendBelow:!l}}const w0={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function k0(e){return w0[e]}const pt=4,an=3,mo=6;function $0(e,t){return e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0}function _0(e,t){const n=(o,r)=>o>=t.x0&&o<=t.x1&&r>=t.y0&&r<=t.y1;if(e.cx.length===1)return Number.isFinite(e.cx[0])&&n(e.cx[0],e.cy[0]);for(let o=1;o<e.cx.length;o++){const[r,s,i,l]=[e.cx[o-1],e.cy[o-1],e.cx[o],e.cy[o]];if(![r,s,i,l].every(Number.isFinite))continue;const c=Math.max(1,Math.ceil(Math.hypot(i-r,l-s)/mo));for(let d=0;d<=c;d++)if(n(r+(i-r)*d/c,s+(l-s)*d/c))return!0}return!1}function M0({plot:e,card:t,traces:n,obstacles:o}){if(t.width<=0||t.height<=0||t.width>e.x1-e.x0-pt*2||t.height>e.y1-e.y0-pt*2)return;const r=e.x0+pt,s=e.x1-pt-t.width,i=e.y0+pt,l=e.y1-pt-t.height;return[{x:s,y:i},{x:r,y:l},{x:s,y:l},{x:r,y:i}].find(d=>{const h={x0:d.x-an,y0:d.y-an,x1:d.x+t.width+an,y1:d.y+t.height+an};return!n.some(f=>_0(f,h))&&!o.some(f=>$0(h,f))})}function S0(e){const t=[],n=[];let o=!0;for(let r=e.y0;r<=e.y1+mo;r+=mo){const s=Math.min(r,e.y1);t.push(o?e.x0:e.x1,o?e.x1:e.x0),n.push(s,s),o=!o}return{cx:t,cy:n}}function j0(e,t){return e?.includes(t)??!1}function os(e,t){const{reckoned:n,spans:o}=e.data;return n?.some(r=>t>=r.from&&t<=r.to)?"modelled":o?.some(r=>t>=r.from&&t<=r.to&&r.status==="recorded")?"recorded":"measured"}function E0(e){const{x:t,y:n,y2:o}=e.data;let r=!0;for(let i=0;i<t.length;i++)if(!Number.isFinite(t[i])||i>0&&t[i]<t[i-1]){r=!1;break}if(r)return e;const s=t.map((i,l)=>l).filter(i=>Number.isFinite(t[i])).sort((i,l)=>t[i]-t[l]||i-l);return{...e,data:{x:s.map(i=>t[i]),y:s.map(i=>n[i]),...o?{y2:s.map(i=>o[i])}:{}}}}function A0(e,t,n){const o=e.data.x,r=e.data.y,s=Math.min(o.length,r.length);if(s===0||t<o[0]||t>o[s-1])return null;let i=0,l=s-1;for(;i<l;){const g=i+l>>1;o[g]<t?i=g+1:l=g}const c=i,d=Math.max(0,c-1);if(o[c]!==t&&c>0&&j0(e.data.breaks,c))return null;const h=t-o[d]<=o[c]-t?d:c;if(n!==void 0&&Math.abs(o[h]-t)>n)return null;const f=o[c]-o[d];if(e.readBetween&&f>0&&o[c]!==t){const g=r[d]+(r[c]-r[d])*(t-o[d])/f;return Number.isFinite(g)?{index:h,x:t,y:g,currency:os(e,h)}:null}const x=r[h];if(!Number.isFinite(x))return null;const m=e.data.y2?.[h];return{index:h,x:o[h],y:x,...m!==void 0&&Number.isFinite(m)?{y2:m}:{},currency:os(e,h)}}function I0(e){const t=new Set;for(const n of e)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&t.add(o);return[...t].sort((n,o)=>n-o)}function rs(e,t,n){if(e.length===0)return null;if(t===null)return e[e.length-1];let o=0,r=e.length-1;for(;o<r;){const i=o+r>>1;e[i]<t?o=i+1:r=i}let s=o+n;return e[o]!==t&&n>0&&(s-=1),e[Math.max(0,Math.min(e.length-1,s))]}function R0({x:e,y:t,size:n,color:o,text:r}){const s=n/2,i=`M 0 ${-s} L ${s} ${s*.8} L ${-s} ${s*.8} Z`,l=`M -0.9 ${-s*.42} H 0.9 V ${s*.2} H -0.9 Z`,c=`M -0.9 ${s*.4} H 0.9 V ${s*.64} H -0.9 Z`;return a.jsx(Me,{text:r,focusable:!0,children:a.jsxs("g",{role:"img","aria-label":r,"data-limit-crossing":"",transform:`translate(${e} ${t})`,children:[a.jsx("title",{}),a.jsx("circle",{r:12,fill:"transparent"}),a.jsx("path",{d:`${i} ${l} ${c}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),a.jsx("path",{d:i,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function ni(e,t,n){return n==="above"?e>=t:e<=t}function C0({y:e,cx:t,cy:n,limit:o,limitY:r,bad:s,breaks:i=[],step:l=!1,minGapPx:c}){const d=(k,E,S)=>{if(!E)return{index:k,x:t[k],y:n[k],entered:!1};if(S===null)return{index:k,x:t[k],y:r,entered:!0};const T=n[k]-n[S],j=T===0?1:(r-n[S])/T;return{index:k,x:t[S]+(t[k]-t[S])*j,y:r,entered:!0}},h=new Set(i),f=[];let x=null,m=!1,g=!1,v=Number.NEGATIVE_INFINITY;for(let k=0;k<e.length;k++){if(!Number.isFinite(e[k])){x=null;continue}const E=ni(e[k],o,s);if(E&&!g){const S=d(k,m,l||h.has(k)?null:x),T=f[f.length-1];T!==void 0&&S.x-v<c?T.spells++:f.push({...S,spells:1}),v=S.x}g=E,m=!0,x=k}return f}const T0=1;function P0(e,t,n,o,r){const s=n.to;if(s<1||s>=e.length)return!1;const i=o(e[s-1]),l=o(e[s]),c=r(t[s-1]),d=r(t[s]);return l>i?n.t.some((h,f)=>{const x=o(h),m=c+(d-c)*(x-i)/(l-i);return Math.abs(r(n.v[f])-m)>T0}):!1}function Qn(e,t,n,o){const r=t-e;if(r===0){const s=(n+o)/2;return()=>s}return s=>n+(s-e)/r*(o-n)}function xo(e,t,n=5){if(e===t)return Array.from({length:n},()=>e);const r=(t-e)/(n-1),s=10**Math.floor(Math.log10(r)),l=([1,2,2.5,5,10].find(x=>x*s>=r)??10)*s,c=Math.ceil(e/l)*l,d=[];for(let x=0;d.length<n;x++){const m=c+x*l;if(m>t+l*.01)break;d.push(m)}if(d.length>=2)return d;const h=Math.floor(e/l)*l,f=Math.ceil(t/l)*l;return f>h?[h,f]:[h,h+l]}function oi(e,t){const n=Math.floor(e/1e3);if(t>=36e5){const s=Math.floor(n/3600),i=Math.floor(n%3600/60),l=n%60;return`${s}:${String(i).padStart(2,"0")}:${String(l).padStart(2,"0")}`}const o=Math.floor(n/60),r=n%60;return`${o}:${String(r).padStart(2,"0")}`}function ss(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];for(let i=0;i<e.length;i++){const l=n(e[i]).toFixed(2),c=o(t[i]).toFixed(2),d=i===0||r.includes(i);s.push(`${d?"M":"L"}${l},${c}`),d&&vo(i,e.length,r)&&s.push(`L${l},${c}`)}return s.join(" ")}function vo(e,t,n){return e+1>=t||n.includes(e+1)}function L0(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let i=o(t[0]).toFixed(2);const l=n(e[0]).toFixed(2);s.push(`M${l},${i}`),vo(0,e.length,r)&&s.push(`L${l},${i}`);for(let c=1;c<e.length;c++){const d=n(e[c]).toFixed(2),h=o(t[c]).toFixed(2);if(r.includes(c)){s.push(`M${d},${h}`),vo(c,e.length,r)&&s.push(`L${d},${h}`),i=h;continue}s.push(`H${d}`),h!==i&&s.push(`V${h}`),i=h}return s.join(" ")}function N0(e,t,n,o,r,s=[],i=[],l=[]){if(e.length===0)return[];if(i.length===0&&l.length===0)return[{d:r(e,t,n,o,s)}];function c(v,k){const E=new Array(e.length);for(const S of v){const T=Math.min(e.length-1,S.to);for(let j=Math.max(0,S.from);j<=T;j++)E[j]=k(S)}return E}const d=c(i,v=>v.status),h=c(l,v=>v.basis),f=new Set(s),x=[];let m=0;const g=(v,k)=>{const E=v>0&&!f.has(v)?v-1:v,S=I=>I.slice(E,k+1),T=[];for(const I of s)I>E&&I<=k&&T.push(I-E);const j=r(S(e),S(t),n,o,T);j!==""&&x.push({status:d[v],basis:h[v],d:j})};for(let v=1;v<=e.length;v++)(v===e.length||d[v]!==d[m]||h[v]!==h[m])&&(g(m,v-1),m=v);return x}function ri(e,t,n,o,r){if(e.length===0)return"";const s=Math.min(e.length,t.length,n.length);if(s===0)return"";const i=[];for(let l=0;l<s;l++){const c=o(e[l]).toFixed(2),d=r(n[l]).toFixed(2);i.push(`${l===0?"M":"L"}${c},${d}`)}for(let l=s-1;l>=0;l--){const c=o(e[l]).toFixed(2),d=r(t[l]).toFixed(2);i.push(`L${c},${d}`)}return i.push("Z"),i.join(" ")}function O0(e,t,n,o){const r=[];for(const s of t){const{bandLo:i,bandHi:l,bandKind:c}=s;if(!i||!l||c===void 0)continue;const d=[];for(let f=s.from;f<=s.to&&f<e.length;f++)d.push(e[f]);const h=ri(d,i,l,n,o);h!==""&&r.push({d:h,kind:c})}return r}function as(e,t,n,o){if(e===t){const d=(n+o)/2;return()=>d}const r=e>0?e:1e-9,s=t>r?t:r*10,i=Math.log10(r),c=Math.log10(s)-i;if(c===0){const d=(n+o)/2;return()=>d}return d=>{const h=d>0?d:r;return n+(Math.log10(h)-i)/c*(o-n)}}function F0(e,t,n=5){if(!(e>0)||!(t>0)||t<=e)return xo(e,t,n);const o=Math.log10(e),r=Math.log10(t);if(r-o<1)return xo(e,t,n);const i=Math.ceil(o),l=Math.floor(r),c=Math.max(1,Math.ceil((l-i+1)/n)),d=[];for(let h=i;h<=l;h+=c)d.push(10**h);return d.length>0?d:[e,t]}const Jn=.86,is=[[0,-1.15],[1.05,.8],[-1.05,.8]],ls=.3,ke={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:Jn,triangle:is,outlineWidth:ls,keylineWidth:.2,reach:Math.max(Math.hypot(Jn,Jn),...is.map(([e,t])=>Math.hypot(e,t)))+ls/2},D0={"aria-hidden":!0};function si(e,t,n,o){const r=ke.squareHalf;return(e==="modelled"?ke.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([i,l])=>[t+i*o,n+l*o])}const ai=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function ii(e,t,n){const o=e==="current"?0:ke.outlineWidth;return t*(o+2*n*ke.keylineWidth)}function z0({x:e,y:t,r:n,state:o="current",keyline:r=!1}){const s=o==="current"?"":si(o,0,0,n).map(([i,l])=>`${i},${l}`).join(" ");return a.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...D0,children:[r&&ai.map(({ring:i,color:l,widths:c})=>{const d={"data-vessel-keyline":i,fill:"none",stroke:l,strokeWidth:ii(o,n,c),strokeLinejoin:"round"};return o==="current"?a.jsx("circle",{r:n,...d},i):a.jsx("polygon",{points:s,...d},i)}),o==="current"?a.jsx("circle",{r:n,fill:ke.color}):a.jsx("polygon",{points:s,fill:o==="lost"?"none":se[o].color,stroke:o==="lost"?ke.lost.color:ke.color,strokeWidth:n*ke.outlineWidth,strokeLinejoin:"round"})]})}function hn(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function li(e,t,n,o,r){if(e.beginPath(),t==="current"){e.arc(n,o,r,0,Math.PI*2);return}si(t,n,o,r).forEach(([s,i],l)=>{l===0?e.moveTo(s,i):e.lineTo(s,i)}),e.closePath()}function H0(e,t,n,o,r){e.save(),e.lineJoin="round";for(const{color:s,widths:i}of ai)li(e,t,n,o,r),e.strokeStyle=s,e.lineWidth=ii(t,r,i),e.stroke();e.restore()}function B0(e,t,n,o,r,s=4,{keyline:i=!1}={}){i&&H0(t,n,o,r,s);const l=hn(e,ke.cssVar,ke.fallback);if(t.save(),li(t,n,o,r,s),n==="current")t.fillStyle=l,t.fill();else{if(n!=="lost"){const c=se[n];t.fillStyle=hn(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=n==="lost"?hn(e,ke.lost.cssVar,ke.lost.fallback):l,t.lineWidth=s*ke.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function S1(e,t,n,o=4,r={}){const{held:s,modelled:i}=n;s!==void 0&&i!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=hn(e,se.modelled.cssVar,se.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(i.x,i.y),t.stroke(),t.restore());for(const l of["lost","held","current","modelled"]){const c=n[l];c!==void 0&&B0(e,t,l,c.x,c.y,o,r)}}const bt=56;function ci(e,t,n,o){const r=Math.max(0,Math.min(t-1,Math.floor(n))),s=Math.max(0,Math.min(t-1,Math.floor(o))),i=Math.min(t-1,r+1),l=Math.min(t-1,s+1),c=Math.max(0,Math.min(1,n-r)),d=Math.max(0,Math.min(1,o-s)),h=e[s*t+r]+(e[s*t+i]-e[s*t+r])*c,f=e[l*t+r]+(e[l*t+i]-e[l*t+r])*c;return h+(f-h)*d}const cs=400,W0=16,X0=8,ds=.06,U0=3.3,G0=.6,Y0=60,q0=40,us=[6,12],hs=[48,96],ln=2;function eo(e,t,n){const o=Math.max(0,Math.min(1,(n-e)/(t-e)));return o*o*(3-2*o)}function fs(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function ps(e,t){const n=t/e,o=e<=t?.07:.09,r=U0**Math.exp(-((e-t)**2)/(2*o**2*t**2));return n**5*Math.exp(-1.25*n**4)*r}function di(e,t,n){if(!(e>0)||!(t>0)||!(n>0)||!Number.isFinite(e+t+n))return[];const o=Math.sqrt(n*2*Math.PI/cs),r=ps(o,o),s=[];for(let i=-ln;i<=W0*ln;i++){const l=cs/2**(i/ln),c=l/e,d=eo(us[0],us[1],c)*(1-eo(hs[0],hs[1],c))*(1-eo(t,2*t,l));if(d<=.001)continue;const h=2*Math.PI/l,f=Math.sqrt(n*h),x=Math.sqrt(Math.min(1,ps(f,o)/r)),m=(f>=o?ds:ds*x)/Math.sqrt(ln),g=(Y0+(fs(i,1)-.5)*2*q0)*Math.PI/180;s.push({kx:h*Math.sin(g),ky:h*Math.cos(g),k:h,amplitude:m/h,omega:f,phase:fs(i,2)*2*Math.PI,weight:d})}return s.slice(0,X0)}function V0(e,t,n,o){let r=0;for(const s of e)r+=s.weight*s.amplitude*Math.cos(s.kx*t+s.ky*n-s.omega*o+s.phase);return r}const fn=ui(-.25,.3,.92),K0=2.6,Z0=ui(fn[0],fn[1],fn[2]+1),Q0=.8,J0=3,eg=.95,tg=.35,ng=235,og=.5,rg=.35;function ui(e,t,n){const o=Math.hypot(e,t,n);return[e/o,t/o,n/o]}function sg(e,t,n,o){const{east0:r,north0:s,dx:i,dy:l,seconds:c,colour:d,waves:h,isSea:f}=o,[x,m,g]=fn,[v,k,E]=Z0,S=h.length,T=new Float64Array(S*t),j=new Float64Array(S*t),I=new Float64Array(S*n),M=new Float64Array(S*n);for(let D=0;D<S;D++){const P=h[D];for(let q=0;q<t;q++){const te=P.kx*(r+(q+.5)*i);T[D*t+q]=Math.cos(te),j[D*t+q]=Math.sin(te)}for(let q=0;q<n;q++){const te=P.ky*(s-(q+.5)*l)-P.omega*c+P.phase;I[D*n+q]=Math.cos(te),M[D*n+q]=Math.sin(te)}}const N=new Float64Array(S),$=new Float64Array(S),L=h.map(D=>D.kx*D.weight*D.amplitude),W=h.map(D=>D.ky*D.weight*D.amplitude),K=h.map(D=>G0*D.k*D.weight*D.amplitude);for(let D=0;D<n;D++)for(let P=0;P<t;P++){const q=(D*t+P)*4;if(f&&!f(P,D)){e[q+3]=0;continue}let te=0,ne=0,ie=1;for(let J=0;J<S;J++){const pe=T[J*t+P],je=j[J*t+P],$e=I[J*n+D],Ke=M[J*n+D];N[J]=pe*$e-je*Ke,$[J]=je*$e+pe*Ke}for(let J=0;J<S;J++){const pe=S>1?1+Q0*N[(J+J0)%S]:1;te-=L[J]*N[J]*pe,ne-=W[J]*N[J]*pe,ie-=K[J]*$[J]*pe}const _=1/Math.sqrt(te*te+ne*ne+ie*ie),X=(te*x+ne*m+ie*g)*_-g,le=1+K0*X;let Se=0;const Ve=(te*v+ne*k+ie*E)*_;if(Ve>eg){let J=Ve;for(let pe=0;pe<7;pe++)J*=J;Se=255*tg*J}const fe=Math.max(0,le-1)*rg,de=Math.min(1,le)*og;e[q]=d.r*de+(255-d.r*de)*fe+Se,e[q+1]=d.g*de+(255-d.g*de)*fe+Se,e[q+2]=d.b*de+(255-d.b*de)*fe+Se,e[q+3]=ng}}function gs(e){const t=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function ag(e,t){const n=gs(t),o=Math.max(e.r,e.g,e.b,1),r=c=>({r:Math.min(255,e.r*c),g:Math.min(255,e.g*c),b:Math.min(255,e.b*c)});let s=0,i=255/o;for(let c=0;c<32;c++){const d=(s+i)/2;gs(r(d))<n?s=d:i=d}const l=r((s+i)/2);return{r:Math.round(l.r),g:Math.round(l.g),b:Math.round(l.b)}}const ig=192,lg=30,cg="--color-info-mark",dg=.42;function ug(e,t){const n=e.view==="plan",o=t.scaleX,r=t.scaleYPrimary,s=1/(o(1)-o(0)),i=1/(r(1)-r(0)),l=E=>(E-o(0))*s,c=E=>(E-r(0))*i,d=Math.min(o(e.bounds.x0),o(e.bounds.x1)),h=Math.max(o(e.bounds.x0),o(e.bounds.x1)),f=Math.min(r(e.bounds.y0),r(e.bounds.y1)),x=Math.max(r(e.bounds.y0),r(e.bounds.y1)),m=n?d:Math.max(t.plotX0,d),g=n?h:Math.min(t.plotX1,h),v=n?f:Math.max(t.plotY0,f),k=n?x:Math.min(t.plotY1,x);return n&&(h<t.plotX0||d>t.plotX1||x<t.plotY0||f>t.plotY1)||!(g-m>=1&&k-v>=1)||!Number.isFinite(s+i)?null:{left:m,top:v,width:g-m,height:k-v,x0:l(m),x1:l(g),y0:c(k),y1:c(v)}}function ms(e,t){if(!t)return null;e.fillStyle=t;const n=/^#([0-9a-f]{6})$/i.exec(String(e.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function hg(e,t,n){const o=ms(t,getComputedStyle(e).getPropertyValue(cg).trim());if(!o)return null;const r=n?ms(t,n):null;return r?ag(r,o):o}function fg(e,t,n,o,r,s){const i=bt,l=(n.x1-n.x0)/i,c=(n.y1-n.y0)/i,d=t.sea,h=o.scaleYPrimary(t.bounds.y0)<o.scaleYPrimary(t.bounds.y1),f=d&&d.size>1&&d.heights.length>=d.size*d.size?(m,g)=>{const v=h?g:i-1-g;return ci(d.heights,d.size,m/(i-1)*(d.size-1),v/(i-1)*(d.size-1))<0}:void 0,x=e.createImageData(i,i);sg(x.data,i,i,{east0:t.origin.east+n.x0,north0:t.origin.north+n.y1,dx:l,dy:c,seconds:r,colour:s,waves:di(Math.max(l,c),n.x1-n.x0,t.gravity),isSea:f}),e.putImageData(x,0,0)}function pg(e,t,n,o,r){const{width:s,height:i}=e.canvas,l=gg(t,n,s),c=l.length>1?(l[l.length-1]-l[0])/(l.length-1):n.x1-n.x0,d=di(c,n.x1-n.x0,t.gravity),h=(t.bearingDeg??90)*Math.PI/180,f=g=>(g-n.x0)/(n.x1-n.x0)*s,x=g=>(n.y1-g)/(n.y1-n.y0)*i;e.clearRect(0,0,s,i),e.beginPath(),l.forEach((g,v)=>{const k=V0(d,t.origin.east+g*Math.sin(h),t.origin.north+g*Math.cos(h),o);v===0?e.moveTo(f(g),x(k)):e.lineTo(f(g),x(k))});const m=`${r.r}, ${r.g}, ${r.b}`;e.strokeStyle=`rgba(${m}, 0.9)`,e.lineWidth=1,e.stroke(),e.lineTo(f(l[l.length-1]),i),e.lineTo(f(l[0]),i),e.closePath(),e.fillStyle=`rgba(${m}, ${dg})`,e.fill()}function gg(e,t,n){const o=(e.samples??[]).filter(r=>r>t.x0&&r<t.x1);return e.samples&&e.samples.length>1?[t.x0,...o,t.x1]:Array.from({length:n+1},(r,s)=>t.x0+s/n*(t.x1-t.x0))}function mg({layer:e,frame:t}){const n=ug(e,t),o=p.useRef(null),r=p.useRef(null);r.current=n?{layer:e,at:n,frame:t}:null;const s=n?e.view==="plan"?bt:Math.max(1,Math.min(ig,Math.round(n.width))):0,i=n?e.view==="plan"?bt:Math.max(1,Math.round(n.height*s/n.width)):0,l=e.tint;return p.useEffect(()=>{const c=o.current,d=c?.getContext("2d")??null;if(!c||!d||s===0||i===0)return;const h=hg(c,d,l);if(!h)return;const f=()=>{const S=r.current;if(!S)return;const T=Date.now()/1e3;S.layer.view==="plan"?fg(d,S.layer,S.at,S.frame,T,h):pg(d,S.layer,S.at,T,h)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let m=!0;const g=typeof IntersectionObserver=="function"?new IntersectionObserver(S=>{m=S.some(T=>T.isIntersecting)}):null;g?.observe(c);let v=Number.NEGATIVE_INFINITY,k=0;const E=S=>{k=requestAnimationFrame(E),!(!m||document.hidden||S-v<1e3/lg)&&(v=S,f())};return k=requestAnimationFrame(E),()=>{cancelAnimationFrame(k),g?.disconnect()}},[s,i,l]),n?a.jsx("g",{"aria-hidden":"true","data-plot-layer":e.id,"data-plot-layer-kind":"water",children:a.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:a.jsx("canvas",{ref:o,width:s,height:i,style:{display:"block",width:"100%",height:"100%",imageRendering:e.view==="plan"?"pixelated":"auto"}})})}):null}const xg={faint:.45,normal:.85,bright:1},vg=1.5,bg=5,yg=.9,Ct=7,Tt=6,to=10,yt=9,We=12,wg=6.2,no=4,kg=9,$g=13,_g=.1,Bt={paintOrder:"stroke",strokeWidth:3,strokeLinejoin:"round"},oo=5,Mg=.5,Sg=.5;function qe(e){return ce[e.tone??"neutral"]}function Yt(e){return we[e.tone??"neutral"]}function Ne(e){return xg[e.emphasis??"normal"]}function ze(e,t){return t.axis==="secondary"?e.scaleYSecondary:e.scaleYPrimary}function jg(e){const t=e.axis==="secondary"?"secondary":"primary";switch(e.kind){case"series":return{xs:e.points.map(n=>n.x),ys:e.points.map(n=>n.y),axis:t};case"region":return{xs:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.x),ys:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.y),axis:t};case"rule":return e.along==="y"?{xs:[],ys:[e.value],axis:t}:{xs:[e.value],ys:[],axis:t};case"marker":case"annotation":return{xs:[e.at.x],ys:[e.at.y],axis:t};default:return{xs:[],ys:[],axis:t}}}const Yo=5.8,gt=11,xs=4;function Eg(e,t){const n=t.text.length*Yo,{frame:o}=t,r=t.anchorX+t.gap,s=r+n<=o.plotX1-4?"start":"end",i=s==="start"?r:t.anchorX-t.gap,l=s==="start"?i:i-n,c=l+n,d=f=>e.some(x=>l<x.x1&&c>x.x0&&f-gt<x.y1&&f+2>x.y0);let h=t.anchorY+3;for(let f=0;f<xs&&d(h);f++)h+=gt;if(d(h)){h=t.anchorY+3;for(let f=0;f<xs&&d(h);f++)h-=gt}return h=Math.min(Math.max(h,o.plotY0+gt),o.plotY1-gt),e.push({x0:l,x1:c,y0:h-gt,y1:h+2}),{x:i,y:h,anchor:s}}function Ag(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function Ig(e){if(e.length===0)return"";const t=[`M${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`];for(let n=1;n<e.length;n++)t.push(`H${e[n].x.toFixed(2)}`,`V${e[n].y.toFixed(2)}`);return t.join(" ")}function hi(e,t,n){if(e.length===0)return[];const o=e[0],r=e[e.length-1],s=[...e];if(t==="right"||t==="left"){const i=t==="right"?n.plotX1:n.plotX0;s.push({x:i,y:r.y},{x:i,y:o.y})}else{const i=t==="above"?n.plotY0:n.plotY1;s.push({x:r.x,y:i},{x:o.x,y:i})}return s}function Rg(e,t){const n=[];for(const o of e){if(o.kind==="relief"||o.kind==="water"){const i=ze(t,o),{x0:l,y0:c,x1:d,y1:h}=o.bounds;n.push([{x:t.scaleX(l),y:i(c)},{x:t.scaleX(d),y:i(c)},{x:t.scaleX(d),y:i(h)},{x:t.scaleX(l),y:i(h)}]);continue}if(o.kind!=="region"||o.hatched)continue;const r=ze(t,o),s=o.boundary.map(i=>({x:t.scaleX(i.x),y:r(i.y)}));if(!(s.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...s,...o.boundaryHigh.map(i=>({x:t.scaleX(i.x),y:r(i.y)})).reverse()])}else n.push(hi(s,o.side,t))}return(o,r)=>n.some(s=>{let i=!1;for(let l=0,c=s.length-1;l<s.length;c=l++){const d=s[l],h=s[c];d.y>r!=h.y>r&&o<(h.x-d.x)*(r-d.y)/(h.y-d.y)+d.x&&(i=!i)}return i})}function Cg({layer:e,frame:t}){if(e.stops.length===0)return null;const n=ze(t,e),o=e.along==="y"?t.plotY1-t.plotY0:t.plotX1-t.plotX0;if(o<=0)return null;const r=e.along==="y"?t.plotY0:t.plotX0,s=e.along==="y"?n:t.scaleX,i=e.maxOpacity??Sg,l=e.tint??qe(e),c=e.blur!==void 0?Math.ceil(e.blur*3):0,d=`plot-field-${e.id}-${t.uid}`,h=`plot-field-blur-${e.id}-${t.uid}`,f=e.along==="y"?t.plotY1:t.plotX1,x=e.stops.map(m=>({offset:(s(m.at)-r)/o*100,intensity:Math.max(0,Math.min(1,m.intensity))})).sort((m,g)=>m.offset-g.offset);return a.jsxs(a.Fragment,{children:[a.jsxs("defs",{children:[a.jsx("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:t.plotX0,y1:t.plotY0,x2:e.along==="x"?f:t.plotX0,y2:e.along==="y"?f:t.plotY0,children:x.map((m,g)=>a.jsx("stop",{offset:`${m.offset.toFixed(2)}%`,stopColor:l,stopOpacity:i*m.intensity},g))}),e.blur!==void 0&&a.jsx("filter",{id:h,children:a.jsx("feGaussianBlur",{stdDeviation:e.blur})})]}),a.jsx("rect",{"data-plot-layer":e.id,"data-plot-layer-kind":"field",x:t.plotX0-c,y:t.plotY0-c,width:t.plotX1-t.plotX0+2*c,height:t.plotY1-t.plotY0+2*c,fill:`url(#${d})`,filter:e.blur!==void 0?`url(#${h})`:void 0})]})}const Tg=6,mt=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function Pg(e){const t=Math.max(0,Math.min(1,e));for(let n=1;n<mt.length;n++)if(t<=mt[n][0]){const[o,r]=mt[n-1],[s,i]=mt[n],l=s>o?(t-o)/(s-o):0;return[Math.round(r[0]+(i[0]-r[0])*l),Math.round(r[1]+(i[1]-r[1])*l),Math.round(r[2]+(i[2]-r[2])*l)]}return mt[mt.length-1][1]}const Lg=[150,156,160],Ng=[200,80,70];function Og(e,t){if(t===3)return Lg;if(t!==1&&t!==2)return e;const n=.3*e[0]+.59*e[1]+.11*e[2],o=(s,i,l)=>s+(l-s)*i,r=e.map(s=>o(o(s,.5,n),.06,235));return t===1?r:r.map((s,i)=>o(s,.3,Ng[i]))}function Fg(e,t){const n=2*(t-1),o=(e%n+n)%n;return o<t?o:n-o}function Dg(e,t,n,o,r,s,i){const l=e[s*n+i],c=r?Fg(l,o):l,[d,h,f]=Og(Pg(c/(o-1)),t[s*n+i]),x=i>0?e[s*n+i-1]:l,m=s>0?e[(s-1)*n+i]:l,g=x!==l||m!==l?.5:1;return`rgb(${Math.round(d*g)}, ${Math.round(h*g)}, ${Math.round(f*g)})`}function zg(e,t){const{bounds:n}=e,o=ze(t,e),r=t.scaleX(n.x0),s=t.scaleX(n.x1),i=o(n.y0),l=o(n.y1),c=Math.abs(s-r)/bt,d=Math.abs(l-i)/bt;return!(c>0)||!(d>0)?null:{left:Math.min(r,s),top:Math.min(i,l),cellW:c,cellH:d,flipRows:i<l}}function Hg(e,t){const{size:n,values:o}=e;if(!t||n<2||o.length<n*n)return null;const{left:r,top:s,cellW:i,cellH:l,flipRows:c}=t;let d=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY;for(let j=0;j<n*n;j++){const I=o[j];if(!Number.isFinite(I))return null;I<d&&(d=I),I>h&&(h=I)}const f=h-d,x=e.bandMetres!=null&&e.bandMetres>0?e.bandMetres:null,m=e.veil,g=Math.max(2,e.bands??Tg),v=bt,k=new Int16Array(v*v),E=new Uint8Array(v*v),S=m!=null&&m.length>=n*n;for(let j=0;j<v;j++)for(let I=0;I<v;I++){const M=I/(v-1)*(n-1),N=j/(v-1)*(n-1);S&&(E[j*v+I]=m[Math.round(N)*n+Math.round(M)]??0);const $=ci(o,n,M,N);if(x!=null){k[j*v+I]=Math.floor($/x);continue}const L=f>0?($-d)/f:.5;k[j*v+I]=Math.max(0,Math.min(g-1,Math.floor(L*g)))}const T=[];for(let j=0;j<v;j++){const I=c?j:v-1-j;let M=0,N="";for(let $=0;$<=v;$++){const L=$<v?Dg(k,E,v,g,x!=null,j,$):"";if($===0){N=L;continue}L===N&&$<v||(T.push(a.jsx("rect",{x:r+M*i,y:s+I*l,width:($-M)*i+.5,height:l+.5,fill:N},`${j}-${M}`)),M=$,N=L)}}return T}function Bg({layer:e,frame:t}){const n=zg(e,t),{values:o,size:r,veil:s,bandMetres:i,bands:l}=e,{left:c,top:d,cellW:h,cellH:f,flipRows:x}=n??{},m=p.useMemo(()=>Hg(e,n),[o,r,s,i,l,c,d,h,f,x]);return m?a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:Ne(e),"aria-hidden":"true",children:m}):null}function Wg({layer:e,frame:t}){const n=p.useId(),o=ze(t,e),r=d=>({x:t.scaleX(d.x),y:o(d.y)}),s=e.boundary.map(r);if(s.length<2)return null;const i=e.side==="between"?[...s,...(e.boundaryHigh??[]).map(r).reverse()]:hi(s,e.side,t);if(e.side==="between"&&!e.boundaryHigh)return null;const l=e.side==="right"?t.plotX1-4:e.side==="left"?t.plotX0+11:s[s.length-1].x,c=(t.plotY0+t.plotY1)/2;return a.jsxs(a.Fragment,{children:[e.hatched&&a.jsx("defs",{children:a.jsx("pattern",{id:n,width:oo,height:oo,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:a.jsx("line",{x1:0,y1:0,x2:0,y2:oo,stroke:qe(e),strokeWidth:1,strokeOpacity:e.opacity??Mg})})}),a.jsx("polygon",{"data-plot-layer":e.id,"data-plot-layer-kind":"region","data-hatched":e.hatched?"":void 0,points:i.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:e.hatched?`url(#${n})`:qe(e),fillOpacity:e.hatched?void 0:e.opacity??_g}),t.labels&&e.label&&a.jsx("text",{x:l,y:c,transform:`rotate(-90 ${l} ${c})`,textAnchor:"middle",fontSize:kg,letterSpacing:"0.14em",fill:"var(--color-text-muted)",stroke:"var(--color-surface-raised)",...Bt,children:e.label})]})}function Xg({layer:e,frame:t}){const n=ze(t,e),o=e.points.map(s=>({x:t.scaleX(s.x),y:n(s.y)}));if(o.length===0)return null;const r=vg*(e.weight??1);if(e.style==="scatter"){const s=e.radius===void 0?r:Math.abs(t.scaleX(e.radius)-t.scaleX(0));return a.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",fill:qe(e),opacity:Ne(e),children:o.map((i,l)=>a.jsx("circle",{cx:i.x,cy:i.y,r:s},l))})}return a.jsx("path",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",d:e.style==="step"?Ig(o):Ag(o),fill:"none",stroke:qe(e),strokeOpacity:Ne(e),strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:e.dashed?"5 3.5":void 0})}function Ug({layer:e,frame:t}){const n=ze(t,e),o=e.dashed??!0,r=qe(e),s=e.along==="y",i=s?n(e.value):t.scaleX(e.value);return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"rule",x1:s?t.plotX0:i,x2:s?t.plotX1:i,y1:s?i:t.plotY0,y2:s?i:t.plotY1,stroke:r,strokeOpacity:Ne(e),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),t.labels&&e.label&&a.jsx("text",{x:s?t.plotX1-4:i+3,y:s?i-3:t.plotY0+10,textAnchor:s?"end":"start",fill:Yt(e),fontSize:yt,children:e.label})]})}function Gg({layer:e,frame:t,placed:n}){const o=ze(t,e),r=t.scaleX(e.at.x),s=o(e.at.y),i=e.across??"x",l=qe(e),c=t.labels&&e.label?Eg(n,{anchorX:r,anchorY:s,gap:Ct+3,text:e.label,frame:t}):null;return a.jsxs(a.Fragment,{children:[a.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"annotation",x1:i==="x"?r-Ct:r,x2:i==="x"?r+Ct:r,y1:i==="x"?s:s-Ct,y2:i==="x"?s:s+Ct,stroke:l,strokeOpacity:Ne(e),strokeWidth:1.75,strokeLinecap:"round"}),c&&e.label&&a.jsx("text",{x:c.x,y:c.y,textAnchor:c.anchor,fontSize:yt,letterSpacing:"0.05em",fill:Yt(e),fillOpacity:Ne(e),children:e.label})]})}function Yg({layer:e,frame:t}){const n=ze(t,e),o=t.scaleX(e.at.x),r=n(e.at.y)+(e.offsetPx??0),s=bg*(e.scale??1),i=qe(e),l=e.shape??"dot",c={"data-plot-layer":e.id,"data-plot-layer-kind":"marker",opacity:Ne(e)},d=l==="none"?null:l==="vessel"?a.jsx("g",{...c,children:a.jsx(z0,{state:e.markState??"current",x:o,y:r,r:s*yg,keyline:!0})}):l==="dot"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:i,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):l==="ring"?a.jsx("circle",{...c,cx:o,cy:r,r:s,fill:"none",stroke:i,strokeWidth:1.5}):l==="cross"?a.jsx("path",{...c,d:`M${o-s},${r} L${o+s},${r} M${o},${r-s} L${o},${r+s}`,stroke:i,strokeWidth:1.5,strokeLinecap:"round"}):l==="chevron-up"||l==="chevron-down"?a.jsx("polyline",{...c,points:l==="chevron-up"?`${o-s},${r+s*.5} ${o},${r-s*.5} ${o+s},${r+s*.5}`:`${o-s},${r-s*.5} ${o},${r+s*.5} ${o+s},${r-s*.5}`,fill:"none",stroke:i,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null,h=(e.label?.length??0)*Yo/2+3,f=l==="none"?Math.min(Math.max(o,t.plotX0+h),t.plotX1-h):o+s+3,x=l==="none"?Math.min(Math.max(r+3,t.plotY0+yt+3),t.plotY1-4):r+3;return a.jsxs(a.Fragment,{children:[d,t.labels&&e.label&&a.jsx("text",{x:f,y:x,textAnchor:l==="none"?"middle":void 0,fontSize:yt,fill:Yt(e),fillOpacity:Ne(e),stroke:"var(--color-surface-raised)",...Bt,children:e.label})]})}function qg({layer:e,frame:t,row:n,edges:o}){const r=e.caption?2:1;if(e.anchor==="left-edge"||e.anchor==="right-edge"){const g=e.anchor==="left-edge"?t.plotX0+Tt+n*We:t.plotX1-Tt-n*We,v=t.plotY1-34;return a.jsx("text",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",x:g,y:v,transform:`rotate(-90 ${g} ${v})`,fontSize:yt,letterSpacing:"0.14em",fill:Yt(e),fillOpacity:Ne(e),stroke:"var(--color-surface-raised)",...Bt,children:e.text})}const s=e.anchor.startsWith("top"),i=e.anchor.endsWith("right"),l=g=>Tt+(g?$g:0),c=i?t.plotX1-l(o.right):t.plotX0+l(o.left),d=n*(r*We+2),h=s?t.plotY0+Tt+to+d:t.plotY1-Tt-d,f=h-We,x=Math.max(e.text.length*wg,(e.caption?.length??0)*Yo)+2*no,m=(s?h:h-(e.caption?We:0))-to-1;return a.jsxs("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",textAnchor:i?"end":"start",children:[a.jsx("rect",{x:i?c-x+no:c-no,y:m,width:x,height:r*We+1,rx:3,fill:"var(--color-surface-raised)",fillOpacity:.8}),e.caption&&a.jsx("text",{x:c,y:s?h:f,fontSize:yt,letterSpacing:"0.05em",fill:"var(--color-text-faint)",stroke:"var(--color-surface-raised)",...Bt,children:e.caption}),a.jsx("text",{x:c,y:e.caption&&s?h+We:h,fontSize:to,fontWeight:700,fill:Yt(e),fillOpacity:Ne(e),stroke:"var(--color-surface-raised)",...Bt,children:e.text})]})}const vs={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},Vg={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function ro({layers:e,frame:t,pass:n}){const o=e.map((l,c)=>({layer:l,index:c})).filter(({layer:l})=>Vg[l.kind]===n).sort((l,c)=>vs[l.layer.kind]-vs[c.layer.kind]||(l.layer.z??0)-(c.layer.z??0)||l.index-c.index),r=new Map,s=[],i={left:e.some(l=>l.kind==="caption"&&l.anchor==="left-edge"||l.kind==="region"&&l.side==="left"&&!!l.label),right:e.some(l=>l.kind==="caption"&&l.anchor==="right-edge"||l.kind==="region"&&l.side==="right"&&!!l.label)};return a.jsx(a.Fragment,{children:o.map(({layer:l,index:c})=>{const d=`${l.id}-${c}`;switch(l.kind){case"relief":return a.jsx(Bg,{layer:l,frame:t},d);case"water":return a.jsx(mg,{layer:l,frame:t},d);case"field":return a.jsx(Cg,{layer:l,frame:t},d);case"region":return a.jsx(Wg,{layer:l,frame:t},d);case"series":return a.jsx(Xg,{layer:l,frame:t},d);case"rule":return a.jsx(Ug,{layer:l,frame:t},d);case"annotation":return a.jsx(Gg,{layer:l,frame:t,placed:s},d);case"marker":return a.jsx(Yg,{layer:l,frame:t},d);case"caption":{const h=r.get(l.anchor)??0;return r.set(l.anchor,h+1),a.jsx(qg,{layer:l,frame:t,row:h,edges:i},d)}default:return null}})})}function Kg(e){return e.map(t=>t.description).filter(t=>typeof t=="string"&&t.length>0)}const bs=11,cn=3,dn=4,ys=(e,t)=>e.x0<t.x1&&t.x0<e.x1&&e.y0<t.y1&&t.y0<e.y1;function Zg(e,t,n,o,r){let s=0,i=1;const l=n-e,c=o-t,d=[[-l,e-r.x0],[l,r.x1-e],[-c,t-r.y0],[c,r.y1-t]];for(const[h,f]of d){if(h===0&&f<0)return!1;if(h!==0){const x=f/h;h<0?s=Math.max(s,x):i=Math.min(i,x)}}return s<=i}function Qg(e,t){for(let n=1;n<e.cx.length;n++){const o=[e.cx[n-1],e.cy[n-1],e.cx[n],e.cy[n]];if(o.every(Number.isFinite)&&Zg(o[0],o[1],o[2],o[3],t))return!0}return!1}function Jg({labels:e,plot:t,obstacles:n,traces:o}){const r=[],s=new Map;for(const i of e){const l={y0:i.lineY-cn-bs,y1:i.lineY-cn},c={y0:i.lineY+cn,y1:i.lineY+cn+bs},d={x0:t.x1-dn-i.width,x1:t.x1-dn},h={x0:t.x0+dn,x1:t.x0+dn+i.width},f=[{...d,...l,anchor:"end"},{...d,...c,anchor:"end"},{...h,...l,anchor:"start"},{...h,...c,anchor:"start"}];let x=null;for(const m of f){if(!(m.x0>=t.x0&&m.x1<=t.x1&&m.y0>=t.y0&&m.y1<=t.y1)||r.some(k=>ys(m,k)))continue;const v=2*n.filter(k=>ys(m,k)).length+o.filter(k=>Qg(k,m)).length;(x===null||v<x.cost)&&(x={spot:m,cost:v})}if(x===null){s.set(i.id,null);continue}r.push(x.spot),s.set(i.id,{x:x.spot.anchor==="end"?x.spot.x1:x.spot.x0,y:x.spot.y1-2,anchor:x.spot.anchor})}return s}function em(e,t,n,o="linear"){const r=n&&rm(t,n)?0:t;if(n&&o==="log")return _e(Ce(e,r),{decimals:bo(e,r).decimals});if(!n)return _e(Ce(e,r),{decimals:0});const s=tm(e,n)?e:void 0;return _e(Ce(e,r),{decimals:sm(e,r,n,s),...s?{format:s}:{}})}function tm(e,t){const n=t.map(o=>_e(Ce(e,o),{decimals:pn}));return n.some((o,r)=>r>0&&o===n[r-1])}function nm(e,t){const n=new Set(t.map(o=>em(e,o,t).replace(/^[\d.,\s-]+/,"")));return n.size===1?[...n][0]:void 0}function om(e,t,n){const o=nm(t,n);if(o===void 0)return e;const r=rl({magnitude:0,unit:t},{format:t}).symbol,s=` (${r})`;return r!==""&&e.endsWith(s)?`${e.slice(0,-s.length)} (${o})`:e}function rm(e,t){const n=t.length>1?Math.abs(t[1]-t[0]):0;return n>0&&Math.abs(e)<n*1e-6}const pn=3;function fi(e){return{figure:Number.parseFloat(e.replace(/[^\d.-]/g,"")),unit:e.replace(/[\d.,\s-]/g,"")}}function bo(e,t,n){const o=s=>fi(_e(Ce(e,t),{decimals:s,...n?{format:n}:{}})),r=o(pn);for(let s=0;s<pn;s++)if(o(s).figure===r.figure)return{decimals:s,unit:r.unit};return{decimals:pn,unit:r.unit}}function sm(e,t,n,o){const r=bo(e,t,o);let s=r.decimals;for(const i of n){const l=bo(e,i,o);l.unit===r.unit&&(s=Math.max(s,l.decimals))}return s}function j1(e){const t=fi(_e(e,{decimals:3})),n=Math.abs(t.figure),o=Number.isFinite(n)&&n>0?Math.max(0,2-Math.floor(Math.log10(n))):0;return _e(e,{decimals:o})}function so(e,t,n){for(let o=n;o<6;o++){const r=e.map(s=>(s/t).toFixed(o));if(r.every((s,i)=>i===0||s!==r[i-1]))return o}return 6}const am=4,im=2.5;function lm(e,t){if(e.length===0)return!1;const n=e[e.length-1]-t;return n===0?!0:e.length===1?!1:Math.sign(e[0]-t)!==Math.sign(n)}function cm(e,t){return e==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:t?e==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const dm=(e,t)=>oi(e-t[0],t[1]-t[0]),E1=(e,t)=>oi((e-t[0])*1e3,(t[1]-t[0])*1e3),ao={top:10,bottom:28,left:50};function pi(e,t,n){const o=(s,i,l)=>Math.max(s,Math.min(l,i)),r=o(30,Math.round(e*.18),ao.left);return{top:ao.top,right:n?r:o(14,Math.round(e*.07),20),bottom:t<150?20:ao.bottom,left:r}}const ws=e=>e.length*6.5+6,um=4,hm=.4,fm=26,rt=14,pm=160,Ae=16,un=4,gm=6,Pt=(e,t)=>Math.min(e.length*6+8,t);function mm(e,t){const n=[];let o=0,r=0;for(const s of e)r>0&&r+s>t&&(o+=1,r=0),n.push({row:o,x:r}),r+=s+gm;return{rows:e.length===0?0:o+1,positions:n}}const ks=4,xm=.03;function io(e,t){const n=Math.max(0,Math.floor(t/6));if(e.length<=n)return e;const o=e.lastIndexOf(" (");if(o>0&&e.length-o+4<=n){const r=n-(e.length-o)-3;return`${e.slice(0,r)}...${e.slice(o)}`}return n<4?"":`${e.slice(0,n-3)}...`}function $s(e,t){const n=e.split(/(?=M)/).filter(r=>r.length>0),o=[];for(const r of n){const s=[...r.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)];if(s.length<2)continue;const i=s[0],l=s[s.length-1];o.push(`${r.trim()} L${l[1]},${t} L${i[1]},${t} Z`)}return o.length>0?o.join(" "):null}function vm(e,t,n,o,r=1){const s=[],i=fm*Math.max(.5,Math.min(2,r));for(let l=e+i/2;l<t;l+=i)for(let c=n+i/2;c<o;c+=i)s.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return s}const bm=120,ym=90,wm=70,km=35,$m=2,_m=12,_s=8,Mm=2,Xe=14,Mn=6,Sn=12,Sm=16,jm=12,Em=200,Ms=10,Am=.2,Ss=.6,js="5 3",Im=.15,Rm=.45,Cm="the value is inside the shaded region";function Tm(e){return(e.type??"line")==="band"&&e.data.y2?[...e.data.y,...e.data.y2]:e.data.y}function Pm({series:e,thresholds:t,yTickFormat:n}){const o=s=>s*Mn,r=[];for(const s of e)r.push(o(s.label.length)+8);for(const s of t){if(s.kind==="marker"&&!s.label)continue;const i=s.label??n(s.value);r.push(o(i.length)+Sn+8)}return Math.max(0,...r)+_m}function Lm({width:e,height:t,hasSecondary:n,series:o,thresholds:r}){const s=r.filter(h=>h.label);if(o.length===0||s.length===0)return!1;const i=Math.max(...o.map(h=>h.label.length*6+8)),l=Math.max(...s.map(h=>(h.label?.length??0)*Mn+Sn)),c=pi(e,t,n),d=e-c.left-c.right-rt-Sm;return i+l+jm>d}function A1({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:r=dm,yTickFormat:s=Nm,yScalePrimary:i="linear",yScaleSecondary:l="linear",thresholds:c,legend:d="overlay",hideXAxis:h=!1,density:f="chart",spatial:x=!1,gridScale:m=1,layers:g,"aria-label":v,crosshair:k=!1,xKind:E="time",xReadFormat:S,xAxisLabel:T,yAxisLabel:j,ySecondaryAxisLabel:I,yTickUnit:M,card:N,cardForms:$=1,plotNotice:L,width:W,height:K}){const D=p.useId(),P=f==="compact",q=P?"none":d,te=x,ne=te||P,ie=k&&!ne&&e.some(u=>u.data.x.length>0),[_,X]=p.useState(null),[le,Se]=p.useState(!1),[Ve,fe]=p.useState(""),[de,J]=p.useState(null),[pe,je]=p.useState(null),$e=pe?.w===W&&pe.h===K?pe.form:0,[Ke,Ze]=p.useState(null),Qe=N!=null,ue=Ke?.form===$e?Ke:null;p.useLayoutEffect(()=>{if(!de){Ze(null);return}const u=()=>Ze(y=>{const R={w:de.offsetWidth,h:de.offsetHeight,form:$e};return y?.w===R.w&&y?.h===R.h&&y?.form===R.form?y:R});u();const b=new ResizeObserver(u);return b.observe(de),()=>b.disconnect()},[de,$e]);const U=W,oe=K,Te=e.filter(u=>u.axis==="primary"&&u.data.x.length>0),Je=e.filter(u=>u.axis==="secondary"&&u.data.x.length>0),Oe=Je.length>0,gi=q!=="none"&&e.length>0||(c??[]).some(u=>u.label),qo=Pm({series:e,thresholds:c??[],yTickFormat:s}),Vo=Qe&&ue!==null&&ue.w+_s<=Math.max(112,Math.ceil(qo)),Ko=ne||!gi?{placement:"overlay"}:y0({width:U,height:oe,contentWidth:qo,legendHeight:q==="none"?0:e.length*Ae+6,cardHeight:Vo&&ue!==null?ue.h:0}),kt=Ko.placement==="overlay"&&!ne&&q!=="none"&&oe>=Em&&Lm({width:U,height:oe,hasSecondary:Oe,series:e,thresholds:c??[]})?{placement:"below"}:Ko,Pe=q!=="none"&&(kt.placement==="below"||kt.placement==="beside"&&kt.legendBelow),On=Pe?mm(e.map(u=>Pt(u.label,U-2*un)),U-2*un):{rows:0,positions:[]},Fn=On.rows===0?0:On.rows*Ae+4,Zo=U>=pm,Qo=!ne&&!h&&!!T,Jo=!ne&&Zo&&!!j,er=!ne&&Zo&&Oe&&!!I,Kt=te?0:1,tr=ne?{top:Kt,right:Kt,bottom:Kt,left:Kt}:pi(U,oe,Oe),it={...tr,bottom:tr.bottom+(Qo?rt:0)+Fn},Y=it.top,Z=oe-it.bottom,Fe=Z-Y,Zt=p.useMemo(()=>{const u={primary:[],secondary:[]};for(const b of g??[]){const y=jg(b);u[y.axis].push(...y.ys)}return u},[g]),lt=p.useMemo(()=>Es(Te,n,i,Zt.primary),[Te,n,i,Zt]),ct=p.useMemo(()=>Es(Je,o,l,Zt.secondary),[Je,o,l,Zt]),ge=i==="log"?as(lt[0],lt[1],Z,Y):Qn(lt[0],lt[1],Z,Y),me=l==="log"?as(ct[0],ct[1],Z,Y):Qn(ct[0],ct[1],Z,Y),nr=Math.max(2,Math.min(7,Math.round(Fe/km))),Dn=(u,b,y,R)=>{const C=Math.min(u,b),O=Math.max(u,b),A=(O-C)*1e-6||1e-6,B=Q=>Q>=C-A&&Q<=O+A,V=Q=>R==="log"?F0(C,O,Q):xo(C,O,Q);for(let Q=y;Q<=64;Q*=2){const ye=V(Q).filter(B);if(ye.length<2)continue;if(ye.length<=y)return ye;const At=(ye.length-1)/(y-1),en=Array.from({length:y},(Dm,Pi)=>ye[Math.round(Pi*At)]);return Array.from(new Set(en))}return[C,O]},$t=Dn(lt[0],lt[1],nr,i==="log"?"log":"linear"),Qt=Oe?Dn(ct[0],ct[1],nr,l==="log"?"log":"linear"):[],or=(u,b)=>u.length===0?b:Math.max(b,Math.min(Math.round(U*hm),Math.max(...u.map(y=>ws(s(y,u))))+um)),zn=ne?it:{left:or($t,it.left)+(Jo?rt:0),right:(Oe?or(Qt,it.right):it.right)+(er?rt:0)},G=zn.left,Hn=kt.placement==="beside"?kt.columnWidth:0,ae=U-zn.right-Hn,ve=ae-G,rr=U-Hn-rt/2,et=ve>=bm&&Fe>=ym,ee=Hn>0?{x0:ae+(Oe?zn.right:0)+_s,y0:Y,x1:U-Mm,y1:Z}:void 0,sr=q==="none"||ee||Pe?[]:e.map((u,b)=>({x0:G+3,y0:Y+6+b*Ae,x1:G+3+Pt(u.label,ve-6),y1:Y+6+b*Ae+13})),re=Qn(t[0],t[1],G,ae),mi=Math.max(2,Math.min(8,Math.round(ve/wm))),_t=Dn(t[0],t[1],mi,"linear"),xi=p.useMemo(()=>{const u=[],b=_t.length-1;if(b<0)return u;const y=ws,R=6,C=A=>{const B=_t[A],V=r(B,t,_t),Q=re(B),ye=y(V),At=A===0?"start":A===b?"end":"middle",en=At==="start"?Q:At==="end"?Q-ye:Q-ye/2;return{x:Q,text:V,anchor:At,leftEdge:en,rightEdge:en+ye}},O=C(0);if(u.push({x:O.x,text:O.text,anchor:O.anchor}),b>=1){const A=C(b);if(A.leftEdge>=O.rightEdge+R){let B=O.rightEdge;for(let V=1;V<b;V++){const Q=C(V);Q.leftEdge>=B+R&&Q.rightEdge<=A.leftEdge-R&&(u.push({x:Q.x,text:Q.text,anchor:Q.anchor}),B=Q.rightEdge)}u.push({x:A.x,text:A.text,anchor:A.anchor})}}return u},[_t,t,re,r]),ar=(u,b)=>{const y=new Set,R=u.length;if(R===0||(y.add(0),R===1))return y;const C=16,O=b(u[0]),A=b(u[R-1]);if(Math.abs(A-O)>=C){let B=O;for(let V=1;V<R-1;V++){const Q=b(u[V]);Math.abs(Q-B)>=C&&Math.abs(A-Q)>=C&&(y.add(V),B=Q)}y.add(R-1)}return y},vi=ar($t,ge),bi=ar(Qt,me),He=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>{const b=u.axis==="primary"?ge:me,y=u.type??"line";if(y==="band")return u.data.y2?{id:u.id,kind:"band",color:u.color,opacity:u.fillOpacity??Am,d:ri(u.data.x,u.data.y,u.data.y2,re,b)}:{id:u.id,kind:"noop"};if(y==="scatter"){const A=u.data.x.map((B,V)=>({cx:re(B),cy:b(u.data.y[V])}));return{id:u.id,kind:"scatter",color:u.color,points:A}}const R=y==="step"?L0:ss,C=(u.data.bridges??[]).filter(A=>P0(u.data.x,u.data.y,A,re,b)),O=[...new Set([...u.data.breaks??[],...C.map(A=>A.to)])].sort((A,B)=>A-B);return{id:u.id,kind:"stroked",color:u.color,dashed:u.dashed??!1,uncertainty:O0(u.data.x,u.data.reckoned??[],re,b),segments:N0(u.data.x,u.data.y,re,b,R,O,u.data.spans,u.data.reckoned),modelled:C.map(A=>({basis:A.basis,d:ss([u.data.x[A.to-1],...A.t,u.data.x[A.to]],[u.data.y[A.to-1],...A.v,u.data.y[A.to]],re,b)})),tail:u.data.x.length>0&&(u.data.reckoned??[]).some(A=>A.to>=u.data.x.length-1)?{cx:re(u.data.x[u.data.x.length-1]),cy:b(u.data.y[u.data.y.length-1])}:null,observed:[...new Set(C.flatMap(A=>[A.to-1,A.to]))].map(A=>({cx:re(u.data.x[A]),cy:b(u.data.y[A])}))}}),[e,re,ge,me]),tt=p.useMemo(()=>c?c.map(u=>{const b=u.axis??"primary",y=e.filter(C=>C.axis===b&&C.type!=="band"&&!C.dashed),R=u.kind==="limit"?y.some(C=>{const O=C.data.y.filter(A=>Number.isFinite(A));return O.length>0&&ni(O[O.length-1],u.value,u.bad)}):u.kind==="target"&&y.some(C=>lm(C.data.y,u.value));return{id:u.id,label:u.label,spokenLabel:u.spokenLabel,value:u.value,kind:u.kind,passed:R,currency:jn(u.reading,{drawsReckoning:!0}),tone:cm(u.kind,R),dashed:u.kind!=="marker",y:b==="primary"?ge(u.value):me(u.value)}}):[],[c,e,ge,me]),Mt=p.useMemo(()=>{const u=(b,y,R)=>Math.max(b,Math.min(R,y));return(c??[]).flatMap(b=>{if(b.kind!=="limit"||!Number.isFinite(b.value))return[];const y=b.axis??"primary",R=y==="primary"?ge:me,C=R(b.value),O=b.bad==="above"?-1:1,A=b.label||`the limit at ${s(b.value)}`;return e.filter(B=>B.axis===y&&B.data.x.length>0&&(B.type??"line")!=="band"&&!B.dashed).flatMap(B=>C0({y:B.data.y,cx:B.data.x.map(re),cy:B.data.y.map(R),limit:b.value,limitY:C,bad:b.bad,breaks:B.data.breaks,step:B.type==="step"||B.type==="scatter",minGapPx:Xe}).slice(et?0:-1).map(V=>{const Q=s(B.data.y[V.index]),ye=r(B.data.x[V.index],t);return{key:`${b.id}-${B.id}-${V.index}`,color:B.color,x:u(G+Xe/2+1,V.x-Ms*(V.entered?1:-1),ae-Xe/2-1),y:u(Y+Xe/2+1,V.y+O*Ms,Z-Xe/2-1),text:V.entered?V.spells>1?`${B.label} went past ${A} ${V.spells} times from ${ye}, first reading ${Q}`:`${B.label} went past ${A} at ${ye}, reading ${Q}`:`${B.label} was already past ${A} when this window began at ${ye}, reading ${Q}`}}))})},[c,e,re,ge,me,r,s,t,G,ae,Y,Z,et]),he=(()=>{if(!Qe||ue===null||ne)return;if(ee&&Vo){const C={x0:ee.x0,y0:Z-ue.h,x1:ee.x0+ue.w,y1:Z},O=Y+(q==="none"||Pe?0:e.length*Ae+6);return C.x1<=ee.x1&&C.y0>=O?C:void 0}const u=Xe/2,b=[...e.filter(C=>(C.type??"line")!=="band").flatMap(C=>{const O=C.axis==="primary"?ge:me,A=C.data.x.map(re),B=C.data.y.map(O);return C.type==="scatter"?A.map((V,Q)=>({cx:[V],cy:[B[Q]]})):[{cx:A,cy:B}]}),...tt.map(C=>({cx:[G,ae],cy:[C.y,C.y]}))],y=[...Mt.map(C=>({x0:C.x-u,y0:C.y-u,x1:C.x+u,y1:C.y+u})),...q==="none"||ee||Pe?[]:e.map((C,O)=>({x0:G+3,y0:Y+6+O*16,x1:G+3+Math.min(C.label.length*6+8,ve-6),y1:Y+6+O*16+13}))],R=M0({plot:{x0:G,y0:Y,x1:ae,y1:Z},card:{width:ue.w,height:ue.h},traces:b,obstacles:y});return R?{x0:R.x,y0:R.y,x1:R.x+ue.w,y1:R.y+ue.h}:void 0})(),dt=p.useMemo(()=>{if(!et)return new Map;const u=Xe/2;return Jg({labels:tt.filter(b=>b.label).map(b=>({id:b.id,width:(b.label?.length??0)*Mn+(b.currency.held?Sn:0),lineY:b.y})),plot:ee??{x0:G,y0:Y,x1:ae,y1:Z},obstacles:[...he?[he]:[],...Mt.map(b=>({x0:b.x-u,y0:b.y-u,x1:b.x+u,y1:b.y+u})),...q==="none"||Pe?[]:e.map((b,y)=>({x0:ee?ee.x0:G+3,y0:Y+6+y*Ae,x1:(ee?ee.x0:G+3)+Pt(b.label,ee?ee.x1-ee.x0:ve-6),y1:Y+6+y*Ae+13}))],traces:(ee?[]:e).filter(b=>(b.type??"line")!=="band").map(b=>({cx:b.data.x.map(re),cy:b.data.y.map(b.axis==="primary"?ge:me)}))})},[et,he,ee,tt,Mt,q,Pe,e,re,ge,me,G,ae,Y,Z,ve]),yi=(()=>{const u=Y+6;if(q==="none"||Pe||e.length===0)return u;const b=ee?ee.x0:G+3,y=b+Math.max(...e.map(O=>Pt(O.label,ee?ee.x1-ee.x0:ve-6))),R=tt.flatMap(O=>{const A=dt.get(O.id);if(!O.label||!A)return[];const B=O.label.length*Mn+(O.currency.held?Sn:0),V=A.anchor==="end"?A.x-B:A.x;return[{x0:V,y0:A.y-9,x1:V+B,y1:A.y+2}]});he&&R.push(he);const C=e.length*Ae-3;for(let O=u;O+C<=Z;O+=Ae){const A={x0:b,y0:O,x1:y,y1:O+C};if(!R.some(B=>A.x0<B.x1&&B.x0<A.x1&&A.y0<B.y1&&B.y0<A.y1))return O}return u})(),wi=e.flatMap(u=>{const b=He.find(A=>A.id===u.id),y=b?.kind==="stroked"?b.modelled.map(A=>A.basis):[],R=u.data.reckoned??[];if(R.length===0&&y.length===0)return[];const O=[...new Set([...R.map(A=>A.basis),...y])].map(A=>`${u.label}: part of this trace is reckoned, ${k0(A)}, not measured`);return R.some(A=>A.bandLo&&A.bandHi)&&O.push(`${u.label}: ${Cm}`),O}),ki=tt.flatMap(u=>{const b=u.spokenLabel??u.label??u.id,y=[];return u.passed&&u.kind==="limit"&&y.push(`${b}: limit passed`),u.passed&&u.kind==="target"&&y.push(`${b}: target reached`),u.currency.held&&y.push(ga(b,u.currency.caption)),u.label&&!dt.get(u.id)&&y.length===0&&y.push(u.spokenLabel??u.label),y}),Bn=[...wi,...ki],$i=[v??"Telemetry line chart",...Kg(g??[]),...Bn].join("; "),Wn=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>E==="value"?E0(u):u),[e,E]),Xn=p.useMemo(()=>ie?I0(Wn):[],[ie,Wn]),St=Math.min(t[0],t[1]),jt=Math.max(t[0],t[1]),_i=E==="value"?(jt-St)*xm:void 0;function ir(u){const b=Wn.map(y=>{const R=A0(y,u,_i),C=y.format??s,O=y.axis==="primary"?ge:me,A=(y.type??"line")==="band";return R===null?{id:y.id,label:y.label,color:y.color,value:null}:{id:y.id,label:y.label,color:y.color,value:A&&R.y2!==void 0?`${C(R.y)} to ${C(R.y2)}`:C(R.y),currency:R.currency==="measured"?void 0:R.currency,modelled:R.currency==="modelled",y:A?void 0:O(R.y)}});if(et)for(const y of tt)y.kind!=="marker"&&b.push({id:`threshold-${y.id}`,label:y.kind,color:y.tone.label,value:y.label??s(y.value),detail:!0,currency:y.currency.held?y.currency.mark==="modelled"?"modelled":"held":void 0,modelled:y.currency.held&&y.currency.mark==="modelled"});return{heading:(S??r)(u,t),rows:b}}function lr(u){const{heading:b,rows:y}=ir(u);return[b,...y.map(R=>`${R.label} ${R.value??"no sample"}${R.currency?`, ${R.currency}`:""}`)].join("; ")}const cr=e.filter(u=>(u.type??"line")!=="band").map(u=>({cx:u.data.x.map(re),cy:u.data.y.map(u.axis==="primary"?ge:me)})),dr=he?[...cr,S0(he)]:cr,ur=Qe&&!ne&&ue!==null&&ue.w>0&&ue.h>0&&!he&&$e<$-1;p.useLayoutEffect(()=>{ur&&je({w:W,h:K,form:$e+1})},[ur,W,K,$e]);const Mi=u=>{let b=u,y=Number.POSITIVE_INFINITY;for(const R of Xn)R<St||R>jt||Math.abs(R-u)<y&&(y=Math.abs(R-u),b=R);return b},nt=ie&&_!==null&&_.at>=St&&_.at<=jt?Mi(_.at):null,ut=nt===null?null:ir(nt),Et=ut!==null&&nt!==null?u0({x:re(nt),plot:{x0:G,y0:Y,x1:ae,y1:Z},heading:ut.heading,rows:ut.rows,avoid:sr,traces:dr}):void 0,Si=he!==void 0&&Et!==void 0&&Et.x0<he.x1&&Et.x1>he.x0&&Et.y0<he.y1&&Et.y1>he.y0;function ji(u){const b=u.currentTarget.getBoundingClientRect(),y=u.clientX-b.left;return y<G||y>ae?null:t[0]+(y-G)/(ae-G)*(t[1]-t[0])}function Ei(u){const b=ji(u);if(b===null){X(y=>y?.source==="pointer"?null:y);return}X({at:b,source:"pointer"})}function Ai(u){const b=Xn.filter(O=>O>=St&&O<=jt),y={ArrowLeft:u.shiftKey?-10:-1,ArrowRight:u.shiftKey?10:1,Home:-b.length,End:b.length};if(u.key==="Escape"){if(_===null)return;u.preventDefault(),X(null),fe("");return}const R=y[u.key];if(R===void 0)return;u.preventDefault();const C=rs(b,nt,R);C!==null&&(X({at:C,source:"keys"}),fe(lr(C)))}function Ii(u){try{Se(u.currentTarget.matches(":focus-visible"))}catch{Se(!0)}if(_!==null)return;const b=rs(Xn.filter(y=>y>=St&&y<=jt),null,0);b!==null&&(X({at:b,source:"keys"}),fe(lr(b)))}function Ri(){Se(!1),X(u=>u?.source==="keys"?null:u),fe("")}const Ci=ie?{tabIndex:0,onPointerMove:Ei,onPointerLeave:()=>X(u=>u?.source==="pointer"?null:u),onKeyDown:Ai,onFocus:Ii,onBlur:Ri}:{},Jt={scaleX:re,scaleYPrimary:ge,scaleYSecondary:me,plotX0:G,plotX1:ae,plotY0:Y,plotY1:Z,uid:D,labels:et},Ti=te&&g?Rg(g,Jt):()=>!1,Un=`plot-layer-clip-${D}`;if(ve<=0||Fe<=0)return a.jsx("svg",{width:Math.max(0,U),height:Math.max(0,oe),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:a.jsx("title",{children:"Chart too small to render"})});const hr=a.jsxs("svg",{width:U,height:oe,role:Mt.length>0||ie?"group":"img","aria-label":$i,"aria-describedby":ie?`${D}-crosshair-hint`:void 0,...Ci,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...ie?{touchAction:"pan-y",outline:le?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[g&&g.length>0&&a.jsx("defs",{children:a.jsx("clipPath",{id:Un,children:a.jsx("rect",{x:G,y:Y,width:ve,height:Fe})})}),Bn.length>0&&a.jsx("title",{children:Bn.join("; ")}),a.jsx("rect",{x:G,y:Y,width:ve,height:Fe,fill:"var(--color-surface-panel)"}),g&&g.length>0&&a.jsx("g",{clipPath:`url(#${Un})`,children:a.jsx(ro,{layers:g,frame:Jt,pass:"background"})}),!ne&&$t.map((u,b)=>{const y=ge(u);return a.jsxs(tn.Fragment,{children:[a.jsx("line",{x1:G,y1:y,x2:ae,y2:y,stroke:"var(--color-border-subtle)",strokeWidth:1}),vi.has(b)&&a.jsx("text",{x:G-4,y,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,$t)})]},`py-${b}`)}),!ne&&Qt.map((u,b)=>bi.has(b)?a.jsx("text",{x:ae+4,y:me(u),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,Qt)},`sy-${b}`):null),!h&&!ne&&_t.map((u,b)=>a.jsx("line",{x1:re(u),y1:Y,x2:re(u),y2:Z,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${b}`)),!h&&!ne&&xi.map((u,b)=>a.jsx("text",{x:u.x,y:Z+14,textAnchor:u.anchor,fill:"var(--color-text-faint)",fontSize:11,children:u.text},`xl-${b}`)),Qo&&a.jsx("text",{x:(G+ae)/2,y:oe-Fn-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:io(T,ve)}),Jo&&a.jsx("text",{x:rt/2,y:(Y+Z)/2,transform:`rotate(-90 ${rt/2} ${(Y+Z)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:io(M&&i!=="log"?om(j,M,$t):j,Fe)}),er&&a.jsx("text",{x:rr,y:(Y+Z)/2,transform:`rotate(90 ${rr} ${(Y+Z)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:io(I,Fe)}),te&&vm(G,ae,Y,Z,m).filter(u=>!Ti(u.x,u.y)).map(u=>a.jsx("circle",{cx:u.x,cy:u.y,r:1,fill:"var(--color-text-faint)",opacity:.35},u.key)),!ne&&a.jsxs(a.Fragment,{children:[a.jsx("line",{x1:G,y1:Y,x2:G,y2:Z,stroke:"var(--color-border-strong)",strokeWidth:1}),a.jsx("line",{x1:G,y1:Z,x2:ae,y2:Z,stroke:"var(--color-border-strong)",strokeWidth:1}),Oe&&a.jsx("line",{x1:ae,y1:Y,x2:ae,y2:Z,stroke:"var(--color-border-strong)",strokeWidth:1})]}),He.filter(u=>u.kind==="band").map(u=>a.jsx("path",{d:u.d,fill:u.color,fillOpacity:u.opacity,stroke:"none"},u.id)),He.filter(u=>u.kind==="stroked").flatMap(u=>u.uncertainty.map((b,y)=>a.jsx("path",{d:b.d,"data-band-kind":b.kind,fill:u.color,fillOpacity:Im,stroke:b.kind==="bound"?u.color:"none",strokeOpacity:b.kind==="bound"?Rm:void 0,strokeWidth:b.kind==="bound"?1:void 0},`${u.id}-band-${y}`))),He.filter(u=>u.kind==="stroked").flatMap(u=>u.segments.map((b,y)=>a.jsxs(tn.Fragment,{children:[P&&b.basis===void 0&&$s(b.d,Z)&&a.jsx("path",{d:$s(b.d,Z)??void 0,fill:u.color,fillOpacity:.12,stroke:"none"}),a.jsx("path",{d:b.d,"data-stream-status":b.status,"data-reckoning-basis":b.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:b.basis!==void 0?Ss:void 0,strokeDasharray:b.basis!==void 0?js:u.dashed?"4 3":void 0})]},`${u.id}-${y}`))),He.filter(u=>u.kind==="stroked").flatMap(u=>u.modelled.map((b,y)=>a.jsx("path",{d:b.d,"data-reckoning-basis":b.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:Ss,strokeDasharray:js},`${u.id}-modelled-${y}`))),He.map(u=>u.kind==="stroked"&&u.tail!==null?a.jsx(ei,{kind:"modelled",x:u.tail.cx,y:u.tail.cy},`${u.id}-tail`):null),He.filter(u=>u.kind==="stroked").flatMap(u=>u.observed.map((b,y)=>a.jsx("circle",{cx:b.cx,cy:b.cy,r:im,fill:u.color,"data-observed-sample":""},`${u.id}-observed-${y}`))),He.filter(u=>u.kind==="scatter").flatMap(u=>u.points.map((b,y)=>a.jsx("circle",{cx:b.cx,cy:b.cy,r:$m,fill:u.color},`${u.id}-${y}`))),e.map(u=>{if(!u.headMark)return null;const b=u.axis==="primary"?ge:me;let y=u.data.x.length-1;for(;y>=0&&!(Number.isFinite(u.data.x[y])&&Number.isFinite(u.data.y[y]));)y-=1;return y<0?null:a.jsx("circle",{cx:re(u.data.x[y]),cy:b(u.data.y[y]),r:am,fill:u.headMark==="dot"?u.color:"var(--color-surface-panel)",stroke:u.color,strokeWidth:u.headMark==="dot"?0:1.5,"data-head-mark":u.headMark},`${u.id}-head`)}),g&&g.length>0&&a.jsx("g",{clipPath:`url(#${Un})`,children:a.jsx(ro,{layers:g,frame:Jt,pass:"foreground"})}),tt.map(u=>a.jsxs(tn.Fragment,{children:[a.jsx("line",{x1:G,y1:u.y,x2:P&&u.kind==="marker"?G+24:ae,y2:u.y,stroke:u.tone.line,strokeWidth:1,strokeDasharray:u.dashed?"4 3":void 0,"data-threshold-kind":u.kind,"data-threshold-passed":u.passed||void 0}),P&&u.kind==="marker"&&u.label&&a.jsx("text",{x:G+28,y:u.y+3.5,fill:u.tone.label,fontSize:10,children:u.label}),!(P&&u.kind==="marker")&&u.label&&dt.get(u.id)&&a.jsxs("text",{x:dt.get(u.id)?.x,y:dt.get(u.id)?.y,textAnchor:dt.get(u.id)?.anchor,fill:u.tone.label,fontSize:10,children:[u.label,u.currency.held&&a.jsx(po,{size:10,kind:u.currency.mark??"held"})]})]},u.id)),Mt.map(u=>a.jsx(R0,{x:u.x,y:u.y,size:Xe,color:u.color,text:u.text},u.key)),q!=="none"&&e.map((u,b)=>{const y=Pe?On.positions[b]:void 0,R=y?oe-Fn+2+y.row*Ae:yi+b*Ae;if(!Pe&&R+13>Z)return null;const C=y?un+y.x:ee?ee.x0:G+3,O=Pe?U-2*un:ee?ee.x1-ee.x0:ve-6,A=Pt(u.label,O),B=Math.max(1,Math.floor((A-8)/6)),V=u.label.length>B?`${u.label.slice(0,Math.max(1,B-1))}...`:u.label;return a.jsxs(tn.Fragment,{children:[a.jsx("rect",{x:C,y:R,width:A,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),a.jsx("text",{x:C+3,y:R+10,fill:u.color,fontSize:10,children:V})]},u.id)}),g&&g.length>0&&et&&a.jsx(ro,{layers:g,frame:Jt,pass:"caption"}),ut!==null&&nt!==null&&a.jsx(h0,{x:re(nt),plot:{x0:G,y0:Y,x1:ae,y1:Z},heading:ut.heading,rows:ut.rows,avoid:sr,traces:dr})]}),fr=Qe?a.jsx("div",{ref:J,"data-plot-card":"",style:{position:"absolute",left:he?.x0??0,top:he?.y0??0,visibility:he&&!Si?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof N=="function"?N({width:ve-ks*2,height:Fe-ks*2,form:$e}):N}):null,pr=L?a.jsx("div",{"data-plot-notice":"",style:{position:"absolute",left:G,top:Y,width:ve,height:Fe,pointerEvents:"none"},children:L}):null;return ie?a.jsxs(a.Fragment,{children:[hr,fr,pr,a.jsx(Ye,{id:`${D}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),a.jsx(Ye,{role:"status","aria-live":"polite",children:Ve})]}):a.jsxs(a.Fragment,{children:[hr,fr,pr]})}function Es(e,t,n,o=[]){if(t)return t;if(e.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let r=[...e.flatMap(Tm),...o];return n==="log"&&(r=r.filter(s=>s>0)),r.length===0?n==="log"?[1,10]:[0,1]:[Math.min(...r),Math.max(...r)]}function Nm(e,t){if(e===0)return"0";const n=Math.abs(e);if(n>=1e6){const o=t?so(t,1e6,1):1;return`${(e/1e6).toFixed(o)}M`}if(n>=1e3){const o=t?so(t,1e3,1):1;return`${(e/1e3).toFixed(o)}k`}if(Number.isInteger(e))return String(e);if(n<.01){const o=Math.floor(Math.log10(n)),r=e/10**o;return Math.abs(r-1)<1e-9?`1e${o}`:`${r.toFixed(1)}e${o}`}return e.toFixed(t?so(t,1,2):2)}const Om=p.createContext(null);function Fm(e,t){const n=p.useContext(Om),o=n?.setFooter,r=n?.setDirty;p.useEffect(()=>(o?.(e),()=>o?.(null)),[o,e]),p.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function I1(e){const{onSave:t,value:n,saved:o,saveLabel:r="Save",extra:s,disabled:i}=e,l=p.useRef(null);l.current===null&&(l.current={v:n});const c=!xt(n,l.current.v)&&!xt(n,o),d=p.useRef(t);d.current=t;const h=p.useMemo(()=>a.jsxs(a.Fragment,{children:[s,a.jsx(El,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:i,children:r})]}),[s,i,r]);Fm(h,c)}export{Ye as $,Wx as A,bn as B,Tx as C,Ex as D,Jm as E,zl as F,fx as G,Jx as H,Dl as I,px as J,Ox as K,$x as L,Lx as M,Cx as N,Nx as O,k1 as P,Rx as Q,Yx as R,qx as S,Mx as T,qa as U,sx as V,_x as W,Cu as X,Fx as Y,ex as Z,ax as _,Ux as a,c1 as a$,xt as a0,Qm as a1,jg as a2,En as a3,Fm as a4,I1 as a5,E1 as a6,Cn as a7,dl as a8,u1 as a9,oc as aA,xx as aB,po as aC,r1 as aD,s1 as aE,a1 as aF,vx as aG,wx as aH,b1 as aI,h0 as aJ,se as aK,Gs as aL,ei as aM,Kx as aN,Vx as aO,ya as aP,Jh as aQ,t1 as aR,yx as aS,i1 as aT,ke as aU,z0 as aV,yh as aW,Lr as aX,Oo as aY,$a as aZ,fa as a_,Om as aa,Da as ab,Ar as ac,Me as ad,at as ae,jn as af,qs as ag,_c as ah,Gx as ai,hx as aj,Hx as ak,nh as al,zr as am,ft as an,Ax as ao,Ch as ap,Ro as aq,d1 as ar,w1 as as,x1 as at,yf as au,$1 as av,ho as aw,n1 as ax,o1 as ay,mx as az,Xx as b,pa as b0,Fo as b1,_a as b2,Ma as b3,lh as b4,Ul as b5,lx as b6,Ao as b7,ix as b8,Xl as b9,j1 as bA,em as bB,ux as bC,f1 as bD,mh as bE,Uu as bF,wl as bG,jl as bH,Yl as bI,$r as bJ,qt as bK,l1 as bL,h1 as bM,Ol as bN,Tr as bO,Eo as bP,ja as bQ,p1 as bR,_1 as ba,Jr as bb,B0 as bc,S1 as bd,v1 as be,y0 as bf,dx as bg,u0 as bh,M1 as bi,Tn as bj,k0 as bk,g1 as bl,ga as bm,Vs as bn,Js as bo,hh as bp,Do as bq,y1 as br,m1 as bs,Fa as bt,qf as bu,Vt as bv,_h as bw,Io as bx,cx as by,A1 as bz,kx as c,bx as d,El as e,zx as f,Bx as g,Dx as h,Ru as i,tx as j,Ix as k,ox as l,Hl as m,nx as n,Kh as o,rx as p,af as q,e1 as r,Qx as s,Sx as t,jx as u,Zx as v,Px as w,gx as x,Bl as y,Tu as z};
