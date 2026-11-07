import{j as l}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import w,{css as D,createGlobalStyle as Di,keyframes as Ts}from"./ext-styled-components-DAuodqsN.js";import{r as p,R as nn}from"./ext-react-C0MU9AHG.js";import{h as Ps,l as zi}from"./logger-2_QM1wvD.js";import{cE as Dt,cJ as xn,aW as Ce,b7 as Ls,l as Hi,cg as st,aK as on,ck as Ns}from"./view-clock-formula-B6QDXNgQ.js";import{aV as Bi}from"./ksp-enum-names-CLIdEP3-.js";import{G as Wi,z as Xi}from"./screen-DvTSSJy0.js";import{l as ho,k as Os,j as ce,m as we,w as kt,a1 as $o,N as vn,V as _e,a2 as Ui,n as Gi,O as _o,a3 as Mo,a4 as Yi,a5 as Vi,a6 as qi,a7 as Fs,a8 as Ki,E as yr,a9 as Zi,aa as Qi,ab as Ji,ac as el,ad as tl,Z as vt,ae as nl,af as ol,I as rl,i as Ds,_ as sl,T as Xt,J as zs,ag as al,S as Hs,ah as Bs,Q as wr,A as rn,f as kr,ai as $r,s as qn,aj as il,ak as ll,y as cl}from"./contributionsRead-CFmNsxj7.js";import"./lagrange-CXiIhW1V.js";import{R as dl}from"./use-transmissions-BQhOjJ_B.js";import{gridToPixels as ul}from"./ext-ui-kit-grid-CYQFMmYG.js";import{r as hl}from"./ext-react-dom-DCF8ZnaJ.js";const lx={colors:{text:{primary:"var(--color-text-primary)",muted:"var(--color-text-muted)",dim:"var(--color-text-dim)",faint:"var(--color-text-faint)",inverse:"var(--color-text-inverse)"},surface:{app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"},border:{subtle:"var(--color-border-subtle)",strong:"var(--color-border-strong)"},accent:{fg:"var(--color-accent-fg)",bg:"var(--color-accent-bg)"},focus:"var(--color-focus)"},typography:{family:{mono:"var(--font-family-mono)"},size:{xs:"var(--font-size-xs)",sm:"var(--font-size-sm)",base:"var(--font-size-base)",lg:"var(--font-size-lg)"}}};function cx({children:e,layout:t="inline",...n}){return l.jsx(pl,{$layout:t,...n,children:e})}const fl={inline:D``,fill:D`
    width: 100%;
    height: 100%;
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--inset-empty-state);
  `},pl=w.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;

  ${({$layout:e})=>fl[e]}
`,at=D`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,qt=D`
  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: -2px;
  }
`,gl="data-restoring-focus",ml=120,xl=48,vl=120,_r=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();function Kt(e){return Ws(e,"below")}function Ws(e,t){const[n,o]=p.useState(null),[r,s]=p.useState(!1),[a,i]=p.useState(!1),[c,d]=p.useState(!1),[h,f]=p.useState(!1),[m,x]=p.useState(!1),g=p.useRef(null),v=p.useRef(null),k=p.useRef(!1),E=p.useRef(!1),S=p.useRef(null),C=e!=null&&e!==""?e:null,j=n!==null&&(r||a||c||h||m),I=p.useCallback(()=>{S.current!==null&&clearTimeout(S.current),S.current=null},[]),M=p.useCallback(()=>{I(),o(null),s(!1),i(!1),d(!1),f(!1),x(!1),k.current=!1},[I]);p.useEffect(()=>{if(!h)return;const L=()=>{const K=document.getSelection(),O=K!==null&&!K.isCollapsed&&v.current?.contains(K.anchorNode)===!0;!k.current&&!O&&f(!1)},W=()=>{k.current=!1,L()};return document.addEventListener("pointerup",W),document.addEventListener("selectionchange",L),()=>{document.removeEventListener("pointerup",W),document.removeEventListener("selectionchange",L)}},[h]),p.useEffect(()=>{if(!m)return;const L=W=>{const K=W.target;K instanceof Node&&(g.current?.contains(K)||v.current?.contains(K)||M())};return document.addEventListener("pointerdown",L,!0),()=>document.removeEventListener("pointerdown",L,!0)},[m,M]);const N=p.useCallback(()=>{I(),S.current=setTimeout(()=>{S.current=null,s(!1),d(!1)},vl)},[I]);if(p.useEffect(()=>I,[I]),p.useEffect(()=>{if(n!==null)return window.addEventListener("scroll",M,!0),window.addEventListener("resize",M),()=>{window.removeEventListener("scroll",M,!0),window.removeEventListener("resize",M)}},[n,M]),p.useEffect(()=>{if(!j||C===null)return;const L=W=>{W.key==="Escape"&&(W.stopPropagation(),M())};return document.addEventListener("keydown",L,!0),()=>document.removeEventListener("keydown",L,!0)},[j,C,M]),C===null)return{anchor:{},tip:null};const $=L=>{const W=L.getBoundingClientRect();o({top:W.bottom,left:W.left,above:t==="above"?W.top>=xl:window.innerHeight-W.bottom<ml,anchorTop:W.top})};return{anchor:{"data-tooltip":C,onPointerEnter:L=>{L.pointerType!=="touch"&&(I(),$(L.currentTarget),s(!0))},onPointerLeave:N,onPointerDown:L=>{E.current=!0,L.pointerType!=="touch"&&M()},onPointerUp:L=>{if(E.current=!1,L.pointerType==="touch"){if(m){M();return}g.current=L.currentTarget,$(L.currentTarget),x(!0)}},onFocus:L=>{E.current||document.documentElement.hasAttribute(gl)||($(L.currentTarget),i(!0))},onBlur:()=>{i(!1),!r&&!c&&!m&&o(null)}},tip:j?hl.createPortal(l.jsx(bl,{ref:v,at:n,text:C,onPress:()=>{k.current=!0,f(!0)},onPointerEnter:()=>{I(),d(!0)},onPointerLeave:N}),document.body):null}}const bl=p.forwardRef(function({at:t,text:n,onPress:o,onPointerEnter:r,onPointerLeave:s},a){const i=t.above?{bottom:window.innerHeight-t.anchorTop}:{top:t.top};return l.jsx(wl,{ref:a,"aria-hidden":"true","data-tooltip-tip":"","data-above":t.above?"":void 0,onPointerEnter:r,onPointerLeave:s,onPointerDown:c=>{c.stopPropagation(),o()},onPointerUp:c=>c.stopPropagation(),onClick:c=>c.stopPropagation(),style:{...i,left:t.left,"--tip-left":`${t.left}px`},children:n})});function ht(e,t){return(...n)=>{typeof e=="function"&&e(...n),t?.(...n)}}function Me({text:e,children:t,focusable:n=!1,announce:o=!0,placement:r="below"}){const{anchor:s,tip:a}=Ws(e,r);if(e==null||e==="")return l.jsx(l.Fragment,{children:t});const i=t.props,c=i["aria-label"],d=!o||typeof c=="string"&&_r(c).includes(_r(e));return l.jsxs(l.Fragment,{children:[p.cloneElement(t,{"data-tooltip":e,onPointerEnter:ht(i.onPointerEnter,s.onPointerEnter),onPointerLeave:ht(i.onPointerLeave,s.onPointerLeave),onPointerDown:ht(i.onPointerDown,s.onPointerDown),onPointerUp:ht(i.onPointerUp,s.onPointerUp),onFocus:ht(i.onFocus,s.onFocus),onBlur:ht(i.onBlur,s.onBlur),"aria-description":d?i["aria-description"]:e,tabIndex:n?i.tabIndex??0:i.tabIndex}),a,n&&l.jsx(yl,{})]})}const yl=Di`
  [data-tooltip][tabindex]:not(button, a, input, select, textarea, summary):focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,wl=w.div`
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
`;function Xs(e){let t="";return p.Children.forEach(e,n=>{if(typeof n=="string"||typeof n=="number"){t+=String(n);return}p.isValidElement(n)&&(t+=Xs(n.props.children))}),t.replace(/\s+/g," ").trim()}function Us({label:e,children:t,disabledReason:n}){return kl({label:e,children:t,disabledReason:n})}function kl({label:e,children:t,disabledReason:n}){const o=e!==void 0&&e!==""&&e!==Xs(t)?e:null;return n!==void 0&&n!==""?o===null?n:`${o}: ${n}`:o}function Gs(e,t){return e===!0&&t!==void 0&&t!==""}function Ys(e){e.preventDefault(),e.stopPropagation()}function Vs(e,t,n){return t===null||e.props["data-tooltip"]!==void 0?e:l.jsx(Me,{text:t,announce:n,children:e})}const So="max(0.075em, 1.25px)",se={current:{shape:"ring",glyph:"○",color:"var(--color-elsewhere-mark)",cssVar:"--color-elsewhere-mark",fallback:"rgb(170 156 255)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:5},held:{shape:"square",glyph:"■",color:"var(--color-warn-mark)",cssVar:"--color-warn-mark",fallback:"rgb(217 161 59)",domSize:"max(0.3em, 4px)",hollowDomSize:"max(calc(0.3em + 2px), 6px)",canvasRadius:4},modelled:{shape:"triangle",glyph:"▲",color:"var(--color-modelled-mark)",cssVar:"--color-modelled-mark",fallback:"rgb(138 180 248)",domSize:"max(calc(0.3em + 1px), 5px)",hollowDomSize:"max(calc(0.3em + 3px), 7px)",canvasRadius:5}},Ye=w.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,fo=se.held.domSize,po=se.modelled.domSize,$l=D`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${fo} + 0.14em);
  }
`,_l=D`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${po} + 0.14em);
  }
`;function Ml(e){return D`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${se[e].hollowDomSize} + 0.14em);
    }
  `}function qs(e,t=!1){return t?Ml(e):e==="current"?null:e==="modelled"?_l:$l}const Sl=w.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${fo};
  height: ${fo};
  background: ${se.held.color};
`,jl=w.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${po};
  height: ${po};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${se.modelled.color};
`,jo=e=>D`
  position: absolute;
  right: 0;
  top: 0;
  width: ${se[e].hollowDomSize};
  height: ${se[e].hollowDomSize};
`,El=w.span`
  ${jo("current")}
  border: ${So} solid ${se.current.color};
  border-radius: var(--radius-circle);
`,Al=w.span`
  ${jo("held")}
  border: ${So} solid ${se.held.color};
`,Il=w.span`
  ${jo("modelled")}
  --stroke: ${So};
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
`,Rl={current:El,held:Al,modelled:Il};function Ks({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?Rl[e]:e==="modelled"?jl:Sl;return l.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const Cl=w.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>qs(e??"held",t)}
`;function go({caption:e,kind:t="held",elsewhere:n=!1,children:o,...r}){const{anchor:s,tip:a}=Kt(e);return l.jsxs(Cl,{$kind:t,$elsewhere:n,...r,...s,children:[o,l.jsx(Ks,{kind:t,elsewhere:n}),e!==null&&l.jsxs(Ye,{"data-unit-currency":"",children:[", ",e]}),a]})}const Tl=p.forwardRef(function({variant:t="default",tone:n,size:o="md",pressed:r,predictedOutcome:s,disabledReason:a,marked:i,type:c="button",...d},h){const f=Gs(d.disabled,a),m=Us({label:d["aria-label"],children:d.children,disabledReason:f?a:void 0}),{disabled:x,onClick:g,children:v,...k}=d;return Vs(l.jsx(Bl,{ref:h,$variant:t,$tone:n??(t==="primary"?"go":"neutral"),$size:o,$pressed:r===!0,"aria-pressed":r,"data-predicted":s,"data-held-button":i?"":void 0,...k,disabled:f?void 0:x,...f?{"aria-disabled":!0}:{},onClick:f?Ys:g,type:c,children:i?l.jsx(Pl,{kind:i.kind,caption:i.caption,children:v}):v}),m,f)}),Pl=w(go)`
  position: static;

  &::after {
    content: none;
  }

  & > [data-held-mark] {
    top: 3px;
    right: 3px;
  }
`;function Ll(e){return e==="neutral"?"go":e}const Eo=e=>D`
  background: ${ho[e]};
  border-color: ${ho[e]};
  color: ${Os[e]};
`,Nl=e=>D`
  border-color: ${ce[e]};
  color: ${we[e]};
`,Mr={default:D`
    background: var(--color-surface-raised);
    border-color: var(--color-border-strong);
    color: var(--color-text-primary);
  `,ghost:D`
    background: none;
    border-color: var(--color-border-strong);
    /* Clears 4.5:1 on the app background. */
    color: var(--color-text-muted);
  `},Ol=D`
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
`,Fl=D`
  @media (pointer: coarse) {
    padding: 0;
  }
`;function Dl(e,t){return e==="text"?Ol:e==="primary"?Eo(t):t==="neutral"?Mr[e]:D`
    ${Mr[e]}
    ${Nl(t)}
  `}const zl=D`
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-disabled="true"]) {
      border-color: var(--color-text-faint);
      color: var(--color-text-primary);
    }
  }
`,Hl={sm:D`
    font-size: var(--font-size-caption);
    padding: var(--inset-control-small);
  `,md:D`
    font-size: var(--font-size-compact);
    padding: var(--inset-control);
  `},Bl=w.button`
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

  ${({$size:e})=>Hl[e]}
  ${({$variant:e,$tone:t})=>Dl(e,t)}
  ${({$pressed:e,$tone:t})=>e?Eo(Ll(t)):""}

  ${({$variant:e,$pressed:t})=>e==="primary"||e==="text"||t?"":zl}
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

  ${({$variant:e})=>e==="text"?Fl:""}
`,dx=w.button`
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
`,Wl=w.button`
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
    ${Eo("go")}
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
`,Xl=p.forwardRef(function({pressed:t,disabledReason:n,...o},r){const s=Gs(o.disabled,n),a=Us({label:o["aria-label"],children:o.children,disabledReason:s?n:void 0}),{disabled:i,onClick:c,...d}=o;return Vs(l.jsx(Wl,{ref:r,"aria-pressed":t,...d,disabled:s?void 0:i,...s?{"aria-disabled":!0}:{},onClick:s?Ys:c}),a,s)}),ux=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({$boxed:e})=>e?"var(--gap-form-field-boxed)":"var(--gap-form-field)"};
  ${({$boxed:e})=>e?`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  padding: var(--inset-form-box);
`:""}
`,Ul=w.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label);
`,hx=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-field-label-inline);
`,Gl=w.label`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,fx=w.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,px=w.div`
  display: flex;
  gap: var(--gap-control-row);
  align-items: center;
`,Ao=D`
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
`,Yl=w.input`
  ${Ao}
  width: 100%;
`,gx=w.select`
  ${Ao}
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
`,mx=w.textarea`
  ${Ao}
  width: 100%;
  resize: vertical;
`;function Vl(e){if(e===void 0)return null;const{value:t}=$o(e.magnitude,e.unit);return t===vn?null:t}function Zs(e,t){const n=Vl(t);return n===null?e:`${e}, as of ${n}`}const Io="modelled to SCET";function ql(e){if(!(e==null||e.state!=="observed")&&e.value!==void 0&&e.reckoning.status==="available"&&e.reckoning.beyondReceived)return e.reckoning.modelled}function Sr(e){return xn(e.value)||Dt(e.value)?{shown:e.value,held:!1,mark:null,isStatic:xn(e.value),isDeterministic:Dt(e.value),caption:null}:{shown:e.value,held:e.value!==void 0,mark:e.value!==void 0?"held":null,isStatic:!1,isDeterministic:!1,caption:e.value===void 0?null:Zs(kt(e.grade),e.asOfUt)}}function An(e,t={}){if(typeof e!="object"||e===null||!("state"in e))return{shown:e,held:!1,mark:null,isStatic:xn(e),isDeterministic:Dt(e),caption:null,band:null};const n=e.reckoning.status==="available"?e.reckoning.band??null:null;if(t.drawsReckoning&&e.reckoning.status==="available"&&(e.state==="observed"||e.state==="held")&&!Dt(e.value)){const o=e.reckoning.modelled;if(e.state==="held"){const s=Sr(e),a=e.value===void 0,i=s.held||a,c=s.caption??(a?"":null);return{...s,shown:o,held:i,mark:i?"modelled":null,caption:c===null?null:c===""?"modelled":`${c}, modelled`,band:n}}const r=e.reckoning.beyondReceived;return{shown:o,held:r,mark:r?"modelled":null,isStatic:!1,isDeterministic:!1,caption:r?Io:null,band:n}}return e.state==="observed"?{shown:e.value,held:!1,mark:null,isStatic:xn(e.value),isDeterministic:Dt(e.value),caption:null,band:n}:e.state==="held"?{...Sr(e),band:n}:{shown:null,held:!1,mark:null,isStatic:!1,isDeterministic:!1,caption:null,band:null}}function Qs(e){return{"data-figure":e.shown==null?void 0:e.isStatic?"static":e.isDeterministic?"deterministic":"","data-held":e.held?"":void 0,"data-reckoned":e.held?e.mark??"held":void 0}}function Kl(e,t=!1){if(e==null)return null;if(e.state==="observed")return t||e.reckoning.status==="available"&&e.reckoning.beyondReceived?{kind:"modelled",caption:Io}:null;if(e.state==="held"){const n=Zs(kt(e.grade),e.asOfUt);return t||e.reckoning.status==="available"?{kind:"modelled",caption:`${n}, modelled`}:{kind:"held",caption:n}}return null}function xx(e){return e===void 0?null:typeof e!="string"?Kl(e):{kind:"held",caption:kt(e)}}function Ro(e){if(e!==void 0)return typeof e=="string"?e:e.state==="held"?e.grade??"held":void 0}function vx(e,t){const n=Ro(t);return n===void 0?e:{state:"held",value:e,grade:n,asOfUt:typeof t=="object"?t.asOfUt:void 0,reckoning:{status:"none"}}}function Co(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function bx(e={}){return Co(t=>_e(t,e))}const Zl=.01;function yx({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const r=Math.abs(t(n)-t(o));return(e?Math.min(r,1-r):r)<=Zl}}}function Js(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(r=>!n.readsAsOne(e,r))}function To({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,r=v=>Ui(typeof v=="number"?v:v.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,a=ql(s);if(s?.value!==void 0&&a!==void 0)return Js(s.value,a,Co(r))?l.jsx(go,{"data-held":"",kind:"modelled",caption:`${Io}, last received ${r(s.value)}`,children:r(a)}):l.jsx(l.Fragment,{children:r(s.value)});const i=An(o,{drawsReckoning:!0}),{shown:c,held:d,mark:h,caption:f}=i,m=typeof e=="number"?e:c;if(m==null)return vn;const x=r(m),g=Qs({...i,shown:m});return d?l.jsx(go,{...g,kind:h??"held",caption:f,children:x}):l.jsx("span",{"data-figure":g["data-figure"],children:x})}const jr={left:!1,right:!1};function Ql(e){const[t,n]=p.useState(jr),o=p.useRef(jr);return p.useEffect(()=>{if(!e)return;const r=()=>{const i=e.scrollLeft>1,c=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===i&&o.current.right===c||(o.current={left:i,right:c},n(o.current))};r(),e.addEventListener("scroll",r,{passive:!0});const s=typeof ResizeObserver>"u"?null:new ResizeObserver(r);s?.observe(e);for(const i of Array.from(e.children))s?.observe(i);const a=new MutationObserver(()=>{for(const i of Array.from(e.children))s?.observe(i);r()});return a.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",r),s?.disconnect(),a.disconnect()}},[e]),t}const Er=w.div`
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
`;function In(e){const t=p.useRef(null),[n,o]=p.useState(e),[r,s]=p.useState(null);return p.useEffect(()=>{t.current!==r&&s(t.current)}),p.useEffect(()=>{if(!r||typeof ResizeObserver>"u")return;const a=new ResizeObserver(i=>{for(const c of i)c.contentRect.width>0&&c.contentRect.height>0&&o({w:Math.floor(c.contentRect.width),h:Math.floor(c.contentRect.height)})});return a.observe(r),()=>a.disconnect()},[r]),{ref:t,size:n}}const Jl='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function ea(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),r=n[o+1]??n[o-1];if(r&&r!==e){r.focus();return}const s=t.closest("[data-panel-rail-frame]"),a=s?s.parentElement?.querySelector("[data-panel-body]"):t.closest("[data-panel-body]");if(!a)return;const i=[...a.querySelectorAll(Jl)].find(c=>c!==e);if(i){i.focus();return}a.hasAttribute("tabindex")||a.setAttribute("tabindex","-1"),a.focus()}const Ut=700;function Po(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const Rn={"in-transit":1/6,"awaiting-reply":1/2,due:2/3,overdue:2/3,lost:2/3};function ta(e){const t=e.reachEtaSeconds;if(e.hold&&t!==null&&t>0)return ec(e.hold);const n=na(e);if(t===null||n===null)return Rn[e.predictedPhase];const o=n-t,r=e.replyEtaSeconds===null?1/3:2/3;return Math.max(0,Math.min(r,o/(3*n)))}function Ar(e){const t=na(e);return t===null?0:Math.max(0,(1-ta(e))*3*t)}function ec(e){return Math.max(0,Math.min(1,e.outbound))/3}function na(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function oa(e){return tc(e).map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:t.settling==="confirmed"?1:ta(t),glyph:t.glyph??Po(t.label||t.command),...t.held?{held:!0}:{},...t.settling?{settling:t.settling,settleSeconds:t.settleSeconds??0}:{},...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function tc(e){return e.some(t=>t.dispatchedAt!==void 0)?e.map((t,n)=>({item:t,index:n})).sort((t,n)=>(t.item.dispatchedAt??Number.NEGATIVE_INFINITY)-(n.item.dispatchedAt??Number.NEGATIVE_INFINITY)||t.index-n.index).map(({item:t})=>t):e}function wx({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||Wi(e)!=="shown"?"none":n||Xi({oneWaySeconds:Ce("s",e)})==="live"?"badge":t?"strip":"none"}const nc={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},Gt={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function oc(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":nc[e.phase]}const Cn=new Set(["overdue","lost"]),rc=180,sc=96;function ra(e){return _e(Ce("s",Math.max(0,e)))}function ac(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const ic=1;function Lo(e){const t=Bi(),n=p.useRef(t);n.current=t;const[o,r]=p.useState(e),s=p.useRef({eta:e,ut:Kn(t)});return p.useEffect(()=>{const a=s.current.eta;(a===null!=(e===null)||a!==null&&e!==null&&Math.abs(e-a)>=ic)&&(s.current={eta:e,ut:Kn(n.current)},r(e))},[e]),p.useEffect(()=>{const a=setInterval(()=>{const{eta:i,ut:c}=s.current;if(i===null)return;const d=Kn(n.current);if(d!==void 0){if(c===void 0){s.current={eta:i,ut:d};return}r(Math.max(0,i-(d-c)))}},1e3);return()=>clearInterval(a)},[]),o}function Kn(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function lc({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":r="In-flight commands",variant:s="inline",onDismiss:a}){const{ref:i,size:c}=In({w:320,h:0}),d=s==="rail"||s==="expanded"?e:e.filter(f=>!f.settling);if(s==="rail")return d.length===0?null:l.jsx(cc,{items:d,"aria-label":r});if(s==="expanded")return d.length===0?null:l.jsx(yc,{items:d,"aria-label":r,onDismiss:a});const h=n!=="auto"?n:c.w>=rc?"full":c.w>=sc?"compact":"badge";return d.length===0?null:h==="badge"?l.jsx(dc,{ref:i,items:d,mode:t,"aria-label":r}):l.jsx(la,{ref:i,role:"list","aria-label":r,"data-mode":t,"data-density":h,$row:o==="row",children:d.map(f=>l.jsx(uc,{item:f,$compact:h==="compact"},f.id))})}const Ge=8,sa=1/3;function cc({items:e,"aria-label":t}){const n=e.filter(o=>!o.settling);return l.jsx(hc,{role:"img","aria-label":`${t}: ${n.length} in flight`,children:e.map(o=>{const r=Math.max(0,Math.min(1,o.progress??Rn[o.phase]));return l.jsx(ia,{...o.settling?{"data-role":"settling","data-settling":o.settling}:{"data-role":"glow","data-phase":o.phase,...o.held?{"data-held":""}:{}},$settling:o.settling,style:{"--dot-colour":aa(o),"--dot-progress":r,"--settle-seconds":o.settleSeconds??0}},o.id)})})}const dc=function({ref:t,items:n,mode:o,"aria-label":r}){const s=Lo(ac(n)),a=n.some(c=>Cn.has(c.phase)),i=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${ra(s)}`;return l.jsx(Me,{text:n.map(c=>c.label).join(`
`),focusable:!0,children:l.jsx(la,{ref:t,role:"group","aria-label":`${r}: ${i}`,"data-mode":o,"data-density":"badge",$row:!1,children:l.jsxs(ca,{$phase:a?"overdue":"in-transit",children:[l.jsx(da,{"aria-hidden":"true",$pulse:!a,children:"↑"}),l.jsxs(ua,{children:[n.length,s!==null&&l.jsxs(l.Fragment,{children:[" · ",l.jsx(To,{value:Math.max(0,s)})]})]})]})})})};function uc({item:e,$compact:t}){const n=Lo(e.etaSeconds),o=Cn.has(e.phase),r=n===null?`${e.label}, ${Gt[e.phase]}`:`${e.label}, ${ra(n)}`;return l.jsxs(ca,{$phase:e.phase,role:"listitem",...t?{"aria-label":r,title:r}:{},children:[l.jsx(da,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:oc(e)}),!t&&l.jsx(Ec,{children:e.label}),l.jsx(ua,{children:n===null?Gt[e.phase]:l.jsx(To,{value:Math.max(0,n)})})]})}const bn=Ts`
  from { opacity: 1; }
  to { opacity: 0; }
`,hc=w.div`
  position: relative;
  display: block;
  width: 100%;
  height: 16px;
  /* Clips the part of each dot above the strip, whatever box holds it. */
  overflow: hidden;
`,fc=14;function pc(e,t,n){const o=Math.min(fc,(n-Ge)/Math.max(1,t)),r=Math.ceil(e/2)*(e%2===1?1:-1),s=n/2+r*o;return Math.max(0,Math.min(n-Ge,s-Ge/2))}function Ir({items:e,height:t}){return l.jsx(xc,{role:"group","aria-label":"Commands on the rail",style:{height:t},children:e.map((n,o)=>{const r=Math.max(0,Math.min(1,n.progress??Rn[n.phase]));return l.jsx(Me,{text:n.settling?null:`${n.label}, ${Gt[n.phase]}`,announce:!1,focusable:!n.settling,children:l.jsx(ia,{...n.settling?{"data-role":"settling","data-settling":n.settling,"aria-hidden":!0}:{role:"img","aria-label":`${n.label}, ${Gt[n.phase]}`,"data-role":"glow","data-phase":n.phase,...n.held?{"data-held":""}:{}},"data-lane":o,$settling:n.settling,$lane:!0,style:{"--dot-colour":aa(n),"--dot-progress":r,"--settle-seconds":n.settleSeconds??0,"--lane-top":`${pc(o,e.length,t)}px`}})},n.id)})})}function aa(e){return e.settling==="confirmed"?"var(--color-accent-fg)":e.held||e.settling==="failed"||Cn.has(e.phase)?ce.warn:"var(--color-accent-fg)"}const gc=e=>e==="confirmed"?D`
        transition: left var(--settle-time) var(--ease-linear);
        animation: ${bn} ${Ut}ms var(--ease-standard) var(--settle-time) forwards;
      `:e==="failed"?D`
          animation: ${bn} ${Ut}ms var(--ease-standard) forwards;
        `:null,mc=Ts`
  from { top: ${-Ge*(1-sa)}px; }
  to { top: var(--lane-top); }
`,xc=w.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,ia=w.span`
  position: absolute;
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  top: ${-Ge*(1-sa)}px;
  /* The dot's own width is kept inside the strip, so it is whole at both ends. */
  left: calc((100% - ${Ge}px) * var(--dot-progress));
  width: ${Ge}px;
  height: ${Ge}px;
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
    ${({$settling:e})=>gc(e)}
    ${({$lane:e,$settling:t})=>e&&!t&&D`
        animation: ${mc} var(--duration-base) var(--ease-entrance);
      `}
  }
`,vc=54,zt=5,bc=3,No=vc-8-zt,yn=60,Rr={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:ce.warn,lost:ce.warn};function yc({items:e,"aria-label":t,onDismiss:n}){const[o,r]=p.useState(null),s=Ql(o),a=s.left||s.right;return l.jsxs(kc,{"data-command-list":"",children:[l.jsx($c,{ref:r,role:"list","aria-label":t,...a?{tabIndex:0,"data-scrolls":""}:{},children:e.map(i=>l.jsx(wc,{item:i,onDismiss:n},i.id))}),l.jsx(Er,{$position:"left",$visible:s.left}),l.jsx(Er,{$position:"right",$visible:s.right})]})}function wc({item:e,onDismiss:t}){const n=e.glyph??Po(e.label),o=e.settling==="confirmed"?Rr["awaiting-reply"]:e.held||e.settling==="failed"?ce.warn:Rr[e.phase],r=Math.max(0,Math.min(1,(e.progress??Rn[e.phase])*1.5)),s=Cn.has(e.phase)&&!!t&&!e.settling,a=`${e.label}, ${Gt[e.phase]}`;return l.jsxs(_c,{role:"listitem","aria-label":a,...e.settling?{"data-settling":e.settling,"aria-hidden":!0}:{"data-phase":e.phase,...e.held?{"data-held":""}:{}},$settling:e.settling,style:{color:o,"--settle-seconds":e.settleSeconds??0},children:[l.jsx(Me,{text:s?`Dismiss ${e.label}`:a,announce:!1,children:l.jsxs(Mc,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:i=>{ea(i.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[l.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&l.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),l.jsx(Sc,{children:l.jsx("span",{className:"fill",style:{"--fill-ratio":r}})})]})}const kc=w.div.attrs({role:"group"})`
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
    ${No}px + ${zt}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
  /* Holds the overflow glows over the row's edges. */
  position: relative;
`,$c=w.div`
  display: flex;
  flex-direction: row;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${bc}px;
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
`,_c=w.div`
  /* The settle time arrives as a bare count of seconds. */
  --settle-time: calc(var(--settle-seconds, 0) * 1000ms);
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @media (prefers-reduced-motion: no-preference) {
    ${({$settling:e})=>e==="confirmed"?D`
            animation: ${bn} ${Ut}ms var(--ease-standard)
              var(--settle-time) forwards;
            .fill {
              transition:
                height var(--settle-time) var(--ease-linear),
                width var(--settle-time) var(--ease-linear);
            }
          `:e==="failed"?D`
              animation: ${bn} ${Ut}ms var(--ease-standard) forwards;
            `:null}
  }

  @container (min-width: ${yn}px) {
    flex-direction: column;
  }
`,Mc=w.div`
  --s: ${No}px;
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

  @container (min-width: ${yn}px) {
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
`,Sc=w.div`
  --s: ${No}px;
  position: relative;
  flex: 0 0 ${zt}px;
  width: ${zt}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${yn}px) {
    width: var(--s);
    height: ${zt}px;
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
  @container (min-width: ${yn}px) {
    .fill {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: calc(var(--fill-ratio, 0) * 100%);
      height: auto;
    }
  }
`,la=w.div`
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
`,jc={"in-transit":D`
    color: var(--color-text-primary);
  `,"awaiting-reply":D`
    color: var(--color-text-muted);
  `,due:D`
    color: var(--color-text-muted);
  `,overdue:D`
    color: ${we.warn};
  `,lost:D`
    color: ${we.warn};
  `},ca=w.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>jc[e]}
`,da=w.span`
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
`,Ec=w.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ua=w.span`
  flex: 0 0 auto;
`,Ac="Awaiting first signal";function kx({expectedIn:e}){const t=e??0,n=Number.isFinite(t)&&t>0;return l.jsxs(l.Fragment,{children:[Ac,n&&Ps()&&l.jsx(Ic,{total:t})]})}function Ic({total:e}){return l.jsx(Rc,{seconds:Lo(e)??0})}function Rc({seconds:e}){return e>0?l.jsxs(l.Fragment,{children:[" ",l.jsx(Gi,{level:"muted",children:l.jsx(To,{value:Math.ceil(e)})})]}):null}const Oo=e=>D`
  --fit-box: ${e};
`,Cc=e=>D`
  --fit-mask: ${e};
`;function ha(e){return e==="go"||e==="info"?"caution":e}function wn({tone:e,size:t="md",live:n=!1,report:o,held:r,children:s,...a}){const i=Ro(r),c=i===void 0?e:ha(e),d=c===void 0||c==="neutral"?void 0:c,h=o?.label??(typeof s=="string"?s:"");_o(o?{id:o.id,severity:d??"go",label:h}:null);const f=n?{role:"status","aria-live":"polite"}:{},m=i===void 0?null:kt(i),x=Reflect.get(a,"data-tooltip")!==void 0,{anchor:g,tip:v}=Kt(x?null:m);return l.jsxs(l.Fragment,{children:[l.jsxs(Nc,{$severity:d,$size:t,...f,...g,...a,children:[s,m!==null&&l.jsxs(l.Fragment,{children:[l.jsx(Oc,{"aria-hidden":"true","data-held-mark":""}),l.jsxs(Ye,{"data-unit-currency":"",children:[", ",m]})]})]}),v]})}const Tc=D`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,Pc={go:D`
    background: transparent;
    border-color: ${ce.go};
    color: ${we.go};
  `,info:D`
    background: transparent;
    border-color: ${ce.info};
    color: ${we.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${ce.info} 40%, transparent);
  `,caution:D`
    background: transparent;
    border-color: ${ce.caution};
    color: ${we.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${ce.caution} 45%, transparent);
  `,warn:D`
    background: transparent;
    border-color: ${ce.warn};
    color: ${we.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${ce.warn} 55%, transparent);
  `,nogo:D`
    background: transparent;
    border-color: ${ce.nogo};
    color: ${we.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${ce.nogo} 65%, transparent);
  `,offline:D`
    background: transparent;
    border-color: ${ce.offline};
    color: ${we.offline};
  `},Lc={sm:D`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:D`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},Nc=w.span`
  display: inline-block;
  position: relative;
  /* Sized by its own text, never stretched to a taller flex sibling. */
  align-self: center;
  ${Oo("badge")}
  border: 1px solid;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;

  border-radius: var(--radius-pill);

  ${({$size:e})=>Lc[e]}
  ${({$severity:e})=>e===void 0?Tc:Pc[e]}
`,Oc=w.span`
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
 */const fa=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=e=>{const t=Dc(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Hc=p.createContext({}),Bc=()=>p.useContext(Hc),Wc=p.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:o,className:r="",children:s,iconNode:a,...i},c)=>{const{size:d=24,strokeWidth:h=2,absoluteStrokeWidth:f=!1,color:m="currentColor",className:x=""}=Bc()??{},g=o??f?Number(n??h)*24/Number(t??d):n??h;return p.createElement("svg",{ref:c,...Zn,width:t??d??Zn.width,height:t??d??Zn.height,stroke:e??m,strokeWidth:g,className:fa("lucide",x,r),...!s&&!zc(i)&&{"aria-hidden":"true"},...i},[...a.map(([v,k])=>p.createElement(v,k)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=(e,t)=>{const n=p.forwardRef(({className:o,...r},s)=>p.createElement(Wc,{ref:s,iconNode:t,className:fa(`lucide-${Fc(Cr(e))}`,`lucide-${e}`,o),...r}));return n.displayName=Cr(e),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Uc=z("arrow-down",Xc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Yc=z("arrow-left",Gc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],qc=z("arrow-right",Vc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Zc=z("arrow-up-to-line",Kc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Jc=z("arrow-up",Qc);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],td=z("bell",ed);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],od=z("check",nd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],sd=z("chevron-down",rd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],id=z("chevron-left",ad);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],cd=z("chevron-right",ld);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ud=z("chevron-up",dd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],fd=z("columns-2",hd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],gd=z("computer",pd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],xd=z("corner-down-left",md);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],bd=z("database",vd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],wd=z("file-text",yd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],$d=z("grip",kd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Md=z("heart",_d);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],jd=z("history",Sd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Ad=z("house",Ed);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Rd=z("info",Id);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],Td=z("joystick",Cd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ld=z("layers",Pd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Od=z("lightbulb-off",Nd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Dd=z("lightbulb",Fd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Hd=z("lock",zd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Wd=z("maximize",Bd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ud=z("menu",Xd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],Yd=z("microscope",Gd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],qd=z("minimize",Vd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Zd=z("pause",Kd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Jd=z("pencil",Qd);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],tu=z("play",eu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ou=z("plus",nu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],su=z("radio",ru);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],iu=z("rectangle-horizontal",au);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],cu=z("rectangle-vertical",lu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],uu=z("rotate-ccw",du);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],fu=z("rotate-cw",hu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],gu=z("rows-2",pu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]],xu=z("satellite-dish",mu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],bu=z("satellite",vu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],wu=z("settings",yu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],$u=z("square",ku);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Mu=z("star",_u);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],ju=z("undo-2",Su);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Au=z("volume-2",Eu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Ru=z("volume-x",Iu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Tu=z("wrench",Cu);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Lu=z("x",Pu),Nu="var(--icon-size-control)",Ou={strokeWidth:1.8,"aria-hidden":!0};function H(e,t){const n=p.forwardRef(({label:o,size:r=Nu,style:s,...a},i)=>{const c=typeof r=="number"?{size:r,style:s}:{style:{width:r,height:r,...s}},d=o?{role:"img","aria-label":o,"aria-hidden":!1}:{};return l.jsx(e,{...Ou,...t,...d,...a,...c,ref:i})});return n.displayName=e.displayName??e.name,n}const $x=H($d),_x=H(Td),Mx=H(jd),Sx=H(Ad),jx=H(Rd),Ex=H(Hd),Ax=H(su),Ix=H(Au),Rx=H(Ru),Cx=H(td),Tx=H(Ld),Px=H(wu),Lx=H(bu),Nx=H(xu),Ox=H(Wd),Fx=H(qd),Dx=H(bd),zx=H(gd),Hx=H(wd),Bx=H(ou,{strokeWidth:2.4}),Fu=H(Lu),Wx=H(Jd),Xx=H(od),Du=H(Mu),Ux=H(Md),Gx=H(Ud),zu=H(Yd),Yx=H(tu),Vx=H(Zd),qx=H($u),Kx=H(ud),Zx=H(sd),Qx=H(id),Jx=H(cd),e1=H(Yc),t1=H(Jc),n1=H(qc),o1=H(Uc),r1=H(Zc),s1=H(ju),a1=H(fu),i1=H(uu),l1=H(fd),c1=H(iu),d1=H(gu),u1=H(cu),h1=H(xd),Hu=z("space-helmet",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M10.5 8h3a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 1 0-7z",key:"visor"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),Bu=z("space-helmet-visor-up",[["path",{d:"M4 11a8 8 0 0 1 16 0v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",key:"shell"}],["path",{d:"M8 7.5C9.5 5 14.5 5 16 7.5",key:"visor"}],["circle",{cx:"12",cy:"12.5",r:"2",fill:"currentColor",key:"face"}],["path",{d:"M8 19v2h8v-2",key:"neck"}]]),f1=H(Hu),p1=H(Bu),g1=H(Tu),m1=H(Dd),x1=H(Od),Wu={},Xu={byKey:new Map,unaddressed:void 0,separate:!1};function Tr(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Uu(e,t){if(e.separate!==t.separate||!Tr(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!Tr(o,t.byKey.get(n)))return!1;return!0}function Gu(e,t,n,o){const r=new Map;e!==void 0&&r.set(Mo(e),n);for(const[s,a]of Object.entries(t??{}))a!==void 0&&r.set(qi(s),a);return{byKey:r,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function Yu(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Vu(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function qu(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,a)=>s.depth-a.depth);let r=!1;for(const s of o)s.resettle(n)&&(r=!0);if(r)for(const s of t)s()}}}function Ku(e){const t=new Map,n=new Map,o=new Set,r=e?.root??qu();let s=Xu;const a=c=>{let d;for(const h of c){const f=h.position;f!==void 0&&(d===void 0||f.base>d.base)&&(d=f)}return d?.rung},i={root:r,depth:e===void 0?0:e.depth+1,hold(c,d,h){const f=t.get(c);if(h===void 0)f!==void 0&&(f.delete(d),f.size===0&&t.delete(c));else{if(Vu(f?.get(d),h))return;f===void 0?t.set(c,new Map([[d,h]])):f.set(d,h)}e===void 0?r.sweep(c):e.hold(c,d,h)},settled:c=>n.get(c),readsAsOneFigure:c=>o.has(c),setPolicy(c){if(!Uu(s,c)){s=c;for(const d of t.keys())r.sweep(d)}},resettle(c){const d=[...t.get(c)?.values()??[]],h=e?.settled(c),f=s.byKey.get(c)??s.unaddressed??Wu,m=f.format??h?.format??a(d),x=f.as??h?.as,g=f.decimals??(s.separate?Ki(d,{format:m,as:x}):h?.decimals),v=m===void 0&&x===void 0&&g===void 0?void 0:{...m!==void 0&&{format:m},...x!==void 0&&{as:x},...g!==void 0&&{decimals:g}},k=s.separate&&Fs(d,{format:m,as:x,decimals:g}),E=k!==o.has(c);return k?o.add(c):o.delete(c),Yu(n.get(c),v)?E:(v===void 0?n.delete(c):n.set(c,v),!0)},attach(){r.family.add(i);for(const c of t.keys())r.sweep(c)},detach(){r.family.delete(i)}};return r.family.add(i),i}const Fo={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},Yt=p.createContext(Fo);function Zu(){return p.useContext(Yt)!==Fo}function v1({children:e,of:t,pins:n,format:o,as:r,decimals:s,separate:a=!1}){const i=p.useContext(Yt),[c]=p.useState(()=>Ku(i===Fo?void 0:i));return p.useLayoutEffect(()=>(c.attach(),()=>c.detach()),[c]),p.useLayoutEffect(()=>{c.setPolicy(Gu(t,n,{format:o,as:r,decimals:s},a))},[c,t,n,o,r,s,a]),l.jsx(Yt.Provider,{value:c,children:e})}function Qu(e,t={}){const n=p.useContext(Yt),o=p.useId(),r=Ls(e),s=e?.unit,i=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||r===null?void 0:Mo(s),c=i===void 0||r===null||s===void 0||Yi(s)===void 0?void 0:Vi(r,s),d=c?.base,h=c?.rung;return p.useLayoutEffect(()=>{if(!(i===void 0||r===null||s===void 0))return n.hold(i,o,{reading:r,unit:s,...d!==void 0&&h!==void 0&&{position:{base:d,rung:h}}}),()=>n.hold(i,o,void 0)},[n,o,i,r,s,d,h]),p.useSyncExternalStore(n.root.subscribe,()=>i===void 0?void 0:n.settled(i),()=>{})}function b1(e,t={}){const n=p.useContext(Yt),r=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||Ls(e)===null||e===null||e===void 0?void 0:Mo(e.unit);return p.useSyncExternalStore(n.root.subscribe,()=>r===void 0?!1:n.readsAsOneFigure(r),()=>!1)}const Ju=tl,eh={sci:zu,rep:Du},pa=w.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,th=w.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?D`
          position: relative;
          ${qs(e,t)}
        `:""}
`,nh=w.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,oh=w(Ye)`
  user-select: none;
`,ga=w(Ye)`
  user-select: none;
`,rh=" ";function sh(e,t,n,o){if(t===void 0)return null;const r=m=>$o(m.magnitude,m.unit,{...n,format:o}).value,s=(m,x)=>r(x.minus(m)),a=Fs([t.lo,t.hi],{...n,format:o});if(!Js(e,[t.lo,t.hi],Co(r)))return null;const i=s(t.lo,t.value),c=s(t.value,t.hi),d=m=>/^[-+\u2212]?[0.,\s]*$/.test(m);if(!a&&d(i)&&d(c))return null;const h=r(t.value)===r(e),f={...n,format:o};return{oneFigure:a,plusMinus:!a&&h&&i===c?c:null,lo:r(t.lo),hi:r(t.hi),loSaid:yr(t.lo,f),hiSaid:yr(t.hi,f),kind:t.kind}}function ah(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function Qn({token:e,className:t,spaced:n}){const o=Zi(e,Qi(e));if(o==="")return null;const r=Ji(o),s=el(o),a=eh[s?.head??o],i=Ju.has(o),c=r!==void 0;return l.jsxs(l.Fragment,{children:[n&&!i?rh:null,l.jsx(Me,{text:r,announce:!1,children:l.jsxs(pa,{$attached:i,$icon:a!==void 0,className:t,"data-unit":e,children:[a?l.jsxs(l.Fragment,{children:[l.jsx(a,{size:"1em"}),s&&l.jsxs("span",{"aria-hidden":"true",children:["/",s.rest]})]}):c?l.jsx("span",{"aria-hidden":"true",children:o}):o,c&&l.jsxs(ga,{"data-unit-word":"",children:[" ",r]})]})})]})}function Pr({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:r,marked:s,elsewhere:a,...i}){const c=An(e,{drawsReckoning:r}),d=s!=null&&!c.held&&c.shown!=null?{...c,held:!0,mark:s.kind,caption:s.caption}:c,{shown:h,held:f,mark:m,band:x}=d,g=a!=null&&a!==""&&h!=null,v=m??(g?"current":null),k=g?[d.caption,a].filter(Boolean).join("; "):d.caption,E=Qu(h,i),S=Zu(),C=o===!0&&S,j=E===void 0?i:{...E,...i},I=$o(h?.magnitude,h?.unit,j),M=h==null||x===null||!f?null:sh(h,Hi(x,h.unit),j,I.rung),{anchor:N,tip:$}=Kt(ah(k,M));return e!==void 0||t===void 0?l.jsxs(th,{className:n,$mark:v,$elsewhere:g,...Qs(d),...N,children:[I.value,!C&&l.jsx(Qn,{token:I.symbol,spaced:!0}),M!==null&&l.jsxs(nh,{"data-unit-band":"",children:[M.oneFigure?l.jsxs(l.Fragment,{children:[" (",l.jsx("span",{"aria-hidden":"true",children:"~"}),l.jsx(ga,{"data-unit-word":"",children:"approximately "}),M.lo]}):M.plusMinus===null?` (${M.lo} to ${M.hi}`:` ± ${M.plusMinus}`,!C&&l.jsx(Qn,{token:I.symbol,spaced:!0}),M.plusMinus===null?")":null]}),v!==null&&l.jsx(Ks,{kind:v,elsewhere:g}),k!==null&&l.jsxs(oh,{"data-unit-currency":"",children:[", ",k]}),$]}):typeof t!="string"?l.jsx(pa,{$attached:!1,$icon:!1,className:n,children:t}):l.jsx(Qn,{token:t,className:n,spaced:!1})}const ih={between:"space-between",start:"flex-start",center:"center",end:"flex-end"},lh={center:"center",start:"flex-start",baseline:"baseline"},ch=p.forwardRef(function({justify:t="between",align:n="center",gap:o,wrap:r=!1,children:s,...a},i){return l.jsx(dh,{ref:i,$justify:t,$align:n,$gap:o,$wrap:r,...a,children:s})}),dh=w.div`
  display: flex;
  align-items: ${({$align:e})=>lh[e]};
  justify-content: ${({$justify:e})=>ih[e]};
  gap: ${({$gap:e})=>e?vt[e]:"var(--gap-related)"};
  ${({$wrap:e})=>e?"flex-wrap: wrap;":""}
  min-width: 0;
`;function Do(e){const t=Ro(e.held);return t===void 0?{label:e.label,tone:e.tone,title:e.title}:{label:e.label,tone:ha(e.tone),title:e.title??`${e.label}: ${kt(t)}`,held:t}}function Be(e,t){return _e({magnitude:e,unit:t})}function uh(e,t){const{limit:n,actual:o,unit:r}=t;if(n==null||o==null)return null;switch(e){case on.LimitReached:{const s=hh(t.quantity),a=`${Be(o,r)} of ${Be(n,r)}`;return t.facilityName?`the ${t.facilityName} holds ${a} ${s}`:`it holds ${a} ${s}`}case on.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${Be(o,r)} of ${Be(n,r)}`;case on.InsufficientFunds:return`it costs ${Be(Math.trunc(o),r)} and funds are ${Be(Math.trunc(n),r)}`;case on.InsufficientScience:return`it costs ${Be(o,r)} and science is ${Be(n,r)}`;default:return null}}function hh(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function Lr(e){return e&&Ns(e)?.sentence||null}function fh(e){const t=e?.trim().replace(/\.$/,"");return t||null}function zo(e){return ma(e,"refused")}function y1(e){return ma(e,"unavailable")}function ma(e,t){const n=st(e),o=(e.breach?uh(e.errorCode,e.breach):null)??fh(e.detail)??Lr(e.reason)??Lr(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function xa(e){const n=st(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":ph(zo({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function ph(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function va(e){return`${st(e)||e.command||"The command"}: no reply. May have run.`}function gh(){const e=ol();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const Tn=nl(gh),w1=Tn.Context;function k1({children:e}){return l.jsx(Tn.Provider,{children:l.jsx(mh,{children:e})})}function mh({children:e}){const t=Tn.useStore();return l.jsx(dl.Provider,{value:t,children:e})}const Ho=Tn.useStore,xh=()=>()=>{},vh=[],Nr=()=>vh;function bh(){const e=Ho();return p.useSyncExternalStore(e?e.subscribe:xh,e?e.getActiveHandles:Nr,e?e.getActiveHandles:Nr)}const Nt=new WeakMap,mo=new WeakMap;function Or(e){for(const t of mo.get(e)??[])t()}function yh(e){return Nt.set(e,(Nt.get(e)??0)+1),Or(e),()=>{Nt.set(e,(Nt.get(e)??1)-1),Or(e)}}function $1(){const e=Ho();return p.useSyncExternalStore(t=>{if(!e)return()=>{};const n=mo.get(e)??new Set;return mo.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(Nt.get(e)??0)>0,()=>!1)}function Pn({children:e,"aria-label":t,visuallyHidden:n=!1,additionsOnly:o=!1,assertive:r=!1,as:s="span",className:a}){const c={role:n?void 0:r?"alert":"status","aria-live":r?"assertive":"polite","aria-atomic":o?"false":"true","aria-label":t,className:a,"data-live-region":""};return n?l.jsx(Ye,{as:s,...c,children:e}):p.createElement(s,c,e)}const wh=.72,kh=.76;function xo({size:e,kind:t="held",figureSize:n}){return l.jsx("tspan",{dy:n===void 0?-e*.55:-(n*wh-e*kh),fontSize:e,fill:se[t].color,"data-held-mark":"","data-reckoning-mark":t,children:se[t].glyph})}function _1({end:e,x1:t,y1:n,x2:o,y2:r}){return l.jsx("line",{"data-bound":e,x1:t,y1:n,x2:o,y2:r,stroke:"var(--color-text-primary)",strokeWidth:2,opacity:.62,pointerEvents:"none"})}function ba(e,t){return t===null?e:`${e}, ${t}`}function $h(e){return e===null?{}:{"data-currency-in-name":""}}function M1({x:e,y:t,size:n,children:o}){return l.jsx("text",{x:e,y:t,textAnchor:"middle",fontSize:n,fill:"var(--color-text-muted)",children:o})}function Fr(e,t){return t?.state!=="held"?e:{...t,value:e}}function Ue(e){return e.kind==="continuous"?"ribbon":"dot"}function _h(e){return e.delivery==="acked"}function Mh(e){return e.direction==="command"?"outbound":"inbound"}function ya(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function Ln(e){return`${e.direction}/${e.kind}/${e.delivery}`}const Sh={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function Bo(e){return Sh[Ln(e)]??null}const Dr=new Set;function wa(e,t){const n=Ln(e);if(Dr.has(n))return;Dr.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;Ps()?zi.error(o):console.error(o)}const ka=16,bt=ka/2,vo=5.5,jh=2,Eh=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function Wo(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function Ah(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/jh)),Math.max(2,Math.round(o)))}function Ih(e,t,n){if(e.length===0)return"";const o=Wo(e,t,n);if(!(o>0))return`M0.00,${bt.toFixed(2)}`;const r=Ah(e,t,o),s=o/n*(t/r),a=e.length-1,i=[];for(let c=0;c<=r;c++){const d=Math.min(c/r*o,o),h=Math.max(0,Math.round((c-.5)*s)),f=Math.min(a,Math.round((c+.5)*s));let m=0;for(let g=h;g<=Math.max(h,f);g++)m=Math.max(m,Eh(e[a-Math.min(g,a)]));const x=(c%2===0?-1:1)*m*vo;i.push(`${d.toFixed(2)},${(bt+x).toFixed(2)}`)}return`M${i.join(" L")}`}const Rh=.25;function Ch(e,t,n){const o=Wo(e,t,n);if(!(o>0))return"";const r=e.length-1,s=Math.max(1,Math.min(Math.round(Math.min(e.length,t)),Math.ceil(o/Rh))),a=o/n*(t/s),i=[],c=[];for(let d=0;d<s;d++){const h=Math.max(0,Math.round(d*a)),f=Math.min(r,Math.max(h,Math.round((d+1)*a)-1));let m=0,x=0;for(let S=h;S<=f;S++){const C=e[r-S];C&&(Number.isFinite(C.lo)&&(m=Math.min(m,Math.max(-1,C.lo))),Number.isFinite(C.hi)&&(x=Math.max(x,Math.min(1,C.hi))))}const g=d/s*o,v=(d+1)/s*o,k=(bt-x*vo).toFixed(2),E=(bt-m*vo).toFixed(2);i.push(`${g.toFixed(2)},${k}`,`${v.toFixed(2)},${k}`),c.unshift(`${v.toFixed(2)},${E}`,`${g.toFixed(2)},${E}`)}return`M${i.join(" L")} L${c.join(" L")} Z`}const $a=.05;function Xo(e){return typeof e=="number"&&Number.isFinite(e)&&e>0}const zr=.02,Hr=1.5,Th=.25,kn=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],Nn=100,Ot=30,Ph=1.5,ve=2,Lh=4,De=Ot-ve-Lh,Ne=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(Nn-n*2),Rt=e=>ve+(1-Math.max(0,Math.min(1,e)))*De,_a=e=>e==="inline"?Ph:0;function S1(e="inline"){const t=_a(e);return(Nn-t*2)/3}function Ma({tags:e,who:t}){return wa(e,t),l.jsx("g",{"data-rail-unrepresented":Ln(e),"data-rail-entry":t})}function ot(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function Br(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(c=>c.age>=t);if(n===-1)return[];const o=e[n-1],r=e[n],s=r.age-o.age||1,a=(t-o.age)/s,i=o.value+a*(r.value-o.value);return[{age:t,value:i},...e.slice(n)]}function Wr(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(d=>d.age>t),r=e.slice(0,o),s=e[o],a=r[r.length-1];if(!a)return[{age:t,value:s.value}];const i=s.age-a.age||1,c=(t-a.age)/i;return[...r,{age:t,value:a.value+c*(s.value-a.value)}]}const Nh=.25;function Ht(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>o.age)return null;if(t===o.age)return o.value;for(let r=1;r<e.length;r++){const s=e[r];if(t<=s.age){const a=e[r-1],i=(t-a.age)/(s.age-a.age||1);return a.value+i*(s.value-a.value)}}return o.value}function Oh(e,t,n){const o=t.length>0&&t[t.length-1].age>=n-Th,r=e.map(i=>{if(Ht(t,i.age)===null)return!1;let c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;const h=g=>{g!==null&&(c=Math.min(c,g),d=Math.max(d,g))},f=i.age-Hr,m=i.age+Hr;let x=Ht(t,m);if(x===null){if(!o)return!1;x=t[t.length-1].value}h(Ht(t,f)),h(x);for(const g of t)g.age>f&&g.age<m&&h(g.value);return i.value<c-zr||i.value>d+zr}),s=[];let a=0;for(let i=1;i<=r.length;i++)i<r.length&&r[i]===r[a]||(s.push({from:a,to:Math.min(i,r.length-1),off:r[a]}),a=i);return s}function Fh({stream:e,span:t,index:n,padX:o,oneT:r,twoT:s}){const i=`var(${kn[n%kn.length]})`,c=p.useId(),d=`cds-ramp-${c}-${n}`,h=`cds-fill-${c}-${n}`,f=`cds-tail-${c}-${n}`,m=Bo(e.tags);if(m!=="continuous-strip")return m===null?l.jsx(Ma,{tags:e.tags,who:e.id}):null;const x=_h(e.tags),g=x?e.inTransit:Wr(e.inTransit,r),v=g.map(P=>({x:Ne(P.age,t,o),y:Rt(P.value)}));if(v.length===0)return null;const E=(x?[]:Wr(Br(e.inTransit,r),r*(1+Nh))).map(P=>({x:Ne(P.age,t,o),y:Rt(P.value)})),S=E.length>1&&E[E.length-1].x>E[0].x,C=`${ot(v)} L${v[v.length-1].x.toFixed(2)},${(ve+De).toFixed(2)} L${v[0].x.toFixed(2)},${(ve+De).toFixed(2)} Z`,j=x?Br(e.echo,s):[],I=j.map(P=>({x:Ne(P.age,t,o),y:Rt(P.value)})),M=j.map(P=>({x:Ne(P.age,t,o),y:Rt(Ht(e.inTransit,P.age)??P.value)})),N=Oh(j,e.inTransit,t),$=g[g.length-1].age,L=Ht(j,$),W=j.filter(P=>P.age>$),K=(L===null||W.length===0?W:[{age:$,value:L},...W]).map(P=>({x:Ne(P.age,t,o),y:Rt(P.value)})),O=K.length>1?`${ot(K)} L${K[K.length-1].x.toFixed(2)},${(ve+De).toFixed(2)} L${K[0].x.toFixed(2)},${(ve+De).toFixed(2)} Z`:null;return l.jsxs("g",{"data-stream-group":e.id,"data-return-leg":x,children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:v[0].x,y1:"0",x2:Math.max(v[v.length-1].x,v[0].x+1),y2:"0",children:[l.jsx("stop",{offset:"0",stopColor:i,stopOpacity:"0.10"}),l.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0.40"})]}),l.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0",stopColor:i,stopOpacity:"0.22"}),l.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0"})]}),S&&l.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:E[0].x,y1:"0",x2:E[E.length-1].x,y2:"0",children:[l.jsx("stop",{offset:"0",stopColor:i,stopOpacity:"0.40"}),l.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0"})]})]}),l.jsx("path",{"data-role":"area",d:C,fill:`url(#${h})`,stroke:"none"}),O&&l.jsx("path",{"data-role":"echo-area",d:O,fill:`url(#${h})`,stroke:"none"}),l.jsx("path",{"data-role":"commanded","data-stream":e.id,d:ot(v),fill:"none",stroke:`url(#${d})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),S&&l.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:ot(E),fill:"none",stroke:`url(#${f})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),N.map(P=>P.off?l.jsxs(p.Fragment,{children:[l.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:ot(I.slice(P.from,P.to+1)),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),l.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:ot(M.slice(P.from,P.to+1)),fill:"none",stroke:i,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]},P.from):P.to>P.from&&l.jsx("path",{"data-role":"echo","data-stream":e.id,d:ot(I.slice(P.from,P.to+1)),fill:"none",stroke:i,strokeWidth:"0.8",strokeLinecap:"round"},P.from))]})}function Dh({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${p.useId()}`,o=e.tags,r=Bo(o);if(r!=="continuous-strip")return r===null?l.jsx(Ma,{tags:o,who:e.id}):null;const s=(Nn-t*2)/3,a=e.wave,i=a??e.amplitudes,c=e.spanSamples??i.length,d=a!==void 0?Ch(a,c,s):"",h=a!==void 0?d:Ih(e.amplitudes,c,s);if(h===""&&!(a!==void 0&&a.length>0))return null;const f=Math.max(Wo(a??e.amplitudes,c,s),1),m=`var(${ya(o)})`,x=Mh(o)==="outbound",g=x?0:2*s;return l.jsxs("g",{"data-ribbon-group":e.id,"data-ribbon-zone":g===0?"outgoing":"confirmed",transform:`translate(${t+g} ${ve}) scale(1 ${De/ka})`,children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:x?0:f,y1:"0",x2:x?f:0,y2:"0",children:[l.jsx("stop",{offset:"0",stopColor:m,stopOpacity:"0.9"}),l.jsx("stop",{offset:"1",stopColor:m,stopOpacity:"0.1"})]})}),a!==void 0?l.jsxs(l.Fragment,{children:[l.jsx("line",{"data-role":"ribbon-axis",x1:"0",x2:f,y1:bt,y2:bt,stroke:`url(#${n})`,strokeWidth:"1",vectorEffect:"non-scaling-stroke"}),d!==""&&l.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d,fill:`url(#${n})`,stroke:"none"})]}):l.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:h,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function zh({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:r}){const s=`cds-divfade-${p.useId()}`,a=r?.state==="held",i=a?An(r??null).caption:null,{anchor:c,tip:d}=Kt(i),h=[...e,...t].find(j=>j.oneWaySeconds!==null),f=h?.oneWaySeconds??null;if(!h||!Xo(f))return null;const m=f>=$a;if(!m&&t.length===0)return null;const x=3*f,g=f,v=2*f,k=_a(o),E=Ne(g,x,k),S=Ne(v,x,k),C=e.every(j=>j.inTransit.length===0&&j.echo.length===0)&&t.every(j=>j.amplitudes.length===0);return l.jsxs(Hh,{"data-oneway":f,"data-variant":o,$variant:o,...c,children:[l.jsxs(Bh,{$variant:o,$quiet:C,role:"img","aria-label":ba(n,i),...$h(i),viewBox:`0 0 ${Nn} ${Ot}`,preserveAspectRatio:"none",children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:ve,x2:"0",y2:ve+De,children:[l.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),l.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(m?e:[]).map((j,I)=>l.jsx(Fh,{stream:j,span:x,index:I,padX:k,oneT:g,twoT:v},j.id)),t.map(j=>l.jsx(Dh,{ribbon:j,padX:k},j.id)),l.jsx("line",{"data-divider":"t",x1:E,x2:E,y1:ve,y2:ve+De,stroke:`url(#${s})`,strokeWidth:"0.4"}),l.jsx("line",{"data-divider":"2t",x1:S,x2:S,y1:ve,y2:ve+De,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&l.jsxs("g",{"data-role":"hover-labels",children:[l.jsxs("text",{x:E,y:ve-.4,textAnchor:"middle",fontSize:"2",children:[_e(Ce("s",f),{decimals:1}),a&&l.jsx(xo,{size:1.2})]}),l.jsxs("text",{x:S,y:ve-.4,textAnchor:"middle",fontSize:"2",children:[_e(Ce("s",2*f),{decimals:1}),a&&l.jsx(xo,{size:1.2})]}),l.jsx("text",{x:Ne(f/2,x,k),y:Ot-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),l.jsx("text",{x:Ne(1.5*f,x,k),y:Ot-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),l.jsx("text",{x:Ne(2.5*f,x,k),y:Ot-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&l.jsxs(l.Fragment,{children:[l.jsxs(Wh,{"aria-hidden":"true",children:[l.jsxs("span",{children:["outgoing ",l.jsx("b",{children:"0"})]}),l.jsxs("span",{children:["echo"," ",l.jsx("b",{children:l.jsx(Pr,{value:Fr(Ce("s",f),r),decimals:1})})]}),l.jsxs("span",{children:["confirmed"," ",l.jsx("b",{children:l.jsx(Pr,{value:Fr(Ce("s",2*f),r),decimals:1})})]})]}),l.jsxs(Xh,{"aria-hidden":"true",children:[(m?e:[]).map((j,I)=>l.jsxs("span",{children:[l.jsx("i",{style:{background:`var(${kn[I%kn.length]})`}}),j.label]},j.id)),t.map(j=>l.jsxs("span",{"data-role":"legend-ribbon",children:[l.jsx("i",{style:{background:`var(${ya(j.tags)})`}}),j.label]},j.id)),m&&e.length>0&&l.jsxs("span",{"data-role":"legend-deviation",children:[l.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),d]})}const Hh=w.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,Bh=w.svg`
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
`,Wh=w.div`
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
`,Xh=w.div`
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
`;function Xr({handle:e,handles:t,"aria-label":n,mode:o,density:r,orientation:s,variant:a="inline"}){const i=t??(e?[e]:[]),c=i.length===1?i[0]:null,d=c?Bo(c.tags):null;if(c&&d===null)return l.jsx(Uh,{tags:c.tags,who:c["aria-label"]});if(c&&d!=="in-flight-row"){const x=c,g=x.effectiveDelaySeconds;return Xo(g)?l.jsx(zh,{streams:x.streams??[],ribbons:x.ribbons??[],delayReading:x.delayReading,"aria-label":n??x["aria-label"],variant:a}):null}const h=oa(i.flatMap(x=>x.inFlight)),m=i.some(x=>x.dismiss)?x=>i.find(g=>g.inFlight.some(v=>v.id===x))?.dismiss?.(x):void 0;return l.jsx(lc,{items:h,"aria-label":n,mode:o,density:r,orientation:s,variant:a,onDismiss:m})}function Uh({tags:e,who:t}){return wa(e,t??"unnamed handle"),l.jsx("span",{hidden:!0,"data-rail-unrepresented":Ln(e)})}function Sa(e){const n=st(e)||e.command||"The command",o=e.code===void 0?void 0:Ns(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function ja(e){return`${st(e)||e.command||"The command"}: never sent. Safe to re-send.`}function Ea(e){return`${st(e)||e.command||"The command"}: ${e.warning}`}const Gh={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed",warned:"Commands likely to be lost"},Yh={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command",warned:"warned command"};function Vh(e,t){return e.kind==="refused"?zo(e.entries[t]):e.kind==="found"?xa(e.entries[t]):e.kind==="failed"?Sa(e.entries[t]):e.kind==="warned"?Ea(e.entries[t]):e.kind==="undelivered"?ja(e.entries[t]):va(e.entries[t])}function qh(e){return e.entries.map((t,n)=>{const o=st(t);return{id:t.id,subject:o||t.command||"",sentence:Vh(e,n),dismissLabel:`Dismiss ${o||Yh[e.kind]}`,tags:t.tags}})}function ft(e){const{kind:t,onDismiss:n,live:o=!0}=e,r=e["aria-label"]??Gh[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const a=qh(e).map(i=>l.jsxs(Qh,{role:o?void 0:"listitem",$tone:s,children:[Ue(i.tags)==="ribbon"?l.jsx(ef,{$tone:s,children:i.subject}):l.jsx(Jh,{"aria-hidden":"true",$tone:s,children:Po(i.subject)}),l.jsx(tf,{children:i.sentence}),n&&l.jsx(nf,{type:"button","data-dismiss":"",onClick:c=>{ea(c.currentTarget),n(i.id)},"aria-label":i.dismissLabel,children:"✕"})]},i.id));return o?l.jsx(Zh,{forwardedAs:"div","aria-label":r,"data-command-list":"",additionsOnly:!0,children:a}):l.jsx(Kh,{role:"list","aria-label":r,"data-command-list":"",children:a})}const Aa=D`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,Kh=w.div`
  ${Aa}
`,Zh=w(Pn)`
  ${Aa}
  &:empty {
    margin: 0;
  }
`,Qh=w.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>ce[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${ce[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,Jh=w.span`
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
`,ef=w.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>we[e]};
`,tf=w.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,nf=w.button`
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
`;function xt(e,t){if(e===t)return!0;if(e===null||t===null)return e===t;if(Array.isArray(e)||Array.isArray(t))return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,o)=>xt(n,t[o]));if(e instanceof Date||t instanceof Date)return e instanceof Date&&t instanceof Date&&Object.is(e.getTime(),t.getTime());if(e instanceof Set||t instanceof Set){if(!(e instanceof Set)||!(t instanceof Set)||e.size!==t.size)return!1;const n=[...t];return[...e].every(o=>{const r=n.findIndex(s=>xt(o,s));return r===-1?!1:(n.splice(r,1),!0)})}if(e instanceof Map||t instanceof Map){if(!(e instanceof Map)||!(t instanceof Map)||e.size!==t.size)return!1;for(const[n,o]of e)if(!t.has(n)||!xt(o,t.get(n)))return!1;return!0}if(typeof e=="object"&&typeof t=="object"){const n=e,o=t,r=new Set;for(const s of Object.keys(n))n[s]!==void 0&&r.add(s);for(const s of Object.keys(o))o[s]!==void 0&&r.add(s);for(const s of r)if(!xt(n[s],o[s]))return!1;return!0}return!1}function On(e,t,n,o){const[r,s]=p.useState(o),a=p.useRef(t);a.current=t;const i=p.useRef(n);i.current=n;const c=p.useRef(r);return c.current=r,p.useEffect(()=>{if(!e)return;let d=c.current;const h=()=>{const g=a.current(e);i.current(d,g)||(d=g,s(g))};h(),e.addEventListener("scroll",h,{passive:!0});const f=new ResizeObserver(h);f.observe(e);for(const g of Array.from(e.children))f.observe(g);let m;const x=new MutationObserver(g=>{if(g.some(v=>v.type==="childList")){for(const v of Array.from(e.children))f.observe(v);h();return}m===void 0&&(m=requestAnimationFrame(()=>{m=void 0,h()}))});return x.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style"]}),()=>{e.removeEventListener("scroll",h),f.disconnect(),x.disconnect(),m!==void 0&&cancelAnimationFrame(m)}},[e]),r}function of(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}function Ia(e){return On(e,of,Object.is,!1)?0:void 0}function rf({label:e,selected:t,count:n,onToggle:o}){return l.jsxs(sf,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[l.jsx("span",{children:e}),n!==void 0&&l.jsx(af,{children:n})]})}const sf=w.button`
  ${Oo("chip")}
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
`,af=w.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function lf({value:e,onChange:t,clearLabel:n="Clear search",className:o,...r}){const s=p.useRef(null);return l.jsxs(cf,{className:o,children:[l.jsx(df,{...r,ref:s,type:"search",value:e,onChange:a=>t(a.target.value)}),e!==""&&l.jsx(uf,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:l.jsx(Fu,{size:"var(--icon-size-control)"})})]})}const cf=w.div`
  position: relative;
  display: flex;
  align-items: center;
`,df=w(Yl)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,uf=w(Xl)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function j1({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=rl(e),r=[...new Set(o)],[s,a]=p.useState(()=>new Set),[i,c]=p.useState(""),d=p.useId(),h=g=>{a(v=>{const k=new Set(v);return k.has(g)?k.delete(g):k.add(g),k})},f=[...s,i].filter(g=>g.length>0).map(g=>g.toLowerCase()),m=l.jsxs(Ds,{gap:"related-packed",children:[l.jsxs(Ul,{children:[l.jsx(Gl,{htmlFor:d,children:t}),l.jsx(lf,{id:d,value:i,placeholder:n,onChange:c})]}),r.length>0&&l.jsx(ch,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:r.map(g=>l.jsx(rf,{label:g,selected:s.has(g),onToggle:()=>h(g)},g))})]}),x={matches:g=>{const v=g.toLowerCase();return f.every(k=>v.includes(k))},active:f.length>0};return Ra.set(x,m),x}const Ra=new WeakMap;function Ca(e){return Ra.get(e)??null}function E1({filter:e,children:t,fill:n=!1}){return l.jsxs(Ds,{gap:"related-dense",fill:n,children:[Ca(e),t]})}const hf={accent:"var(--color-accent-fg)",warn:"var(--color-warn-mark)"},ff=24,pf=96;function gf({children:e,padded:t,caption:n,footer:o,strip:r,shape:s="rounded",edgeCue:a,...i}){const c=s==="circle",d=!c||a===void 0?[]:[a].flat(),h=!c&&r!==void 0&&r!==null&&r!==!1;return l.jsxs(mf,{$padded:t&&!h,$stacked:h,$circle:c,$cued:d.length>0,"data-shape":c?"circle":void 0,...i,children:[h?l.jsxs(l.Fragment,{children:[l.jsx(kf,{$padded:t,children:e}),l.jsx($f,{"data-framed-display-strip":"",children:r})]}):c&&a!==void 0?l.jsx(xf,{children:e}):e,d.length>0&&l.jsx(wf,{cues:d}),n!=null&&l.jsx(Pa,{children:n}),o!=null&&l.jsx(_f,{children:o})]})}const mf=w.div`
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
`,xf=w.div`
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
`,Ee=12,Ur=1,vf=3,Ta=1,bf=100*Ta/200,Gr=e=>e*Math.PI/180;function yf(e,t=bf){const n=Math.min(Math.max(e.span??90,1),359),o=Math.min(Math.max(Number.isFinite(e.grow)?e.grow:0,0),1),r=50,a=50+(Ur+(vf-Ur)*o)*t,i=Gr(e.angle-n/2),c=Gr(e.angle+n/2),d=(f,m)=>`${(50+f*Math.cos(m)).toFixed(3)} ${(50-f*Math.sin(m)).toFixed(3)}`,h=n>180?1:0;return`M${d(r,i)}A${r} ${r} 0 ${h} 0 ${d(r,c)}L${d(a,c)}A${a} ${a} 0 ${h} 1 ${d(a,i)}Z`}function wf({cues:e}){const{ref:t,size:n}=In({w:100+2*Ee,h:100+2*Ee}),o=(100+2*Ee)/Math.max(n.w,1),r=Ta*o;return l.jsx("div",{ref:t,"aria-hidden":"true",style:{position:"absolute",left:`${-Ee}%`,top:`${-Ee}%`,width:`${100+2*Ee}%`,height:`${100+2*Ee}%`,pointerEvents:"none"},children:l.jsx("svg",{"aria-hidden":"true","data-edge-cues":"",viewBox:`${-Ee} ${-Ee} ${100+2*Ee} ${100+2*Ee}`,style:{display:"block",width:"100%",height:"100%",overflow:"visible"},children:e.map(s=>l.jsx("path",{"data-edge-cue":"",d:yf(s,r),fill:hf[s.tone]},`${s.angle}-${s.tone}`))})})}const kf=w.div`
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
`,$f=w.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${ff}px;
  max-height: ${pf}px;
  min-width: 0;
  overflow: hidden;
`,Pa=w.div`
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
`,_f=w(Pa)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,Yr={width:160,height:72},Mf=2.5,Sf=420;function A1({width:e,height:t,plotHasData:n}){return!n&&e>=Yr.width&&t>=Yr.height?"center":e>=Sf&&e>=t*Mf?"beside":"inline"}const jf={overlay:D`
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
  `};function Ef({placement:e,role:t="status",children:n,...o}){return l.jsx(Af,{$placement:e,role:t,...o,children:n})}const Af=w.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${sl.regular};
  pointer-events: none;

  ${({$placement:e})=>jf[e]}
`,$n=8;function La(e){const t=[{cols:1,rows:e}];for(let n=2;n<=e;n++){const o=Math.ceil(e/n);o<(t.at(-1)?.rows??e)&&t.push({cols:n,rows:o})}return t}function Na(e){return e===0?"0px":`(${e}px + var(--gap-related))`}const Oa=(e,t)=>`calc(${e} * ${t} + ${(e-1)*$n}px)`,If=(e,t,n)=>`calc(${e} * (${t} + ${n+$n}px) + ${(e-1)*$n}px)`;function Rf(e,t,n,o,r){const s=Na(n),a=La(e).slice(1).map(({cols:c,rows:d})=>`
  @container grid-squares-width (width >= ${Oa(c,t)}) {
    --cell: calc((100cqw - ${c-1} * ${o}) / ${c});
    --rows: ${d};
  }`).join(""),i=c=>`calc(var(--rows) * (${c} + ${s}) + (var(--rows) - 1) * ${o})`;return r!==void 0?`
  --cell: 100cqw;
  --rows: ${e};
  ${a}
  min-height: var(--grid-squares-height, ${i(r)});
`:`
  --cell: 100cqw;
  --rows: ${e};
  ${a}
  min-height: var(--grid-squares-height, clamp(${i(`min(var(--cell), ${t}, 100cqh - ${s})`)}, 100cqh, ${i("var(--cell)")}));
`}function Cf(e,t,n,o){const r=La(e),s=o!==void 0;return r.slice(1).map(({cols:a,rows:i},c)=>`
  @container grid-squares (aspect-ratio >= ${(.88*a/r[c].rows).toFixed(2)}) and ((width >= ${Oa(a,t)}) or (height < ${If(s?i:r[c].rows,o??t,n)})) {
    --cols: ${a};
    --rows: ${i};
  }`).join("")}function Tf(e,t){const n=`
  & > * > * {
    --grid-square-heading: ${e===0?"0px":`calc${Na(e)}`};
  }`;return e===0||t===void 0?n:`${n}
  @container (width < ${t}px) or (height < ${t+e+$n}px) {
    & > * > * {
      --grid-square-heading: 0px;
    }
    & > * [data-grid-square-heading] {
      display: none;
    }
  }`}function Pf(e){const t=new Set;return e.map(n=>{const o=n.inFlight.filter(r=>t.has(r.id)?!1:(t.add(r.id),!0));return o.length===n.inFlight.length?n:{...n,inFlight:o}})}function Jn(e){const t=new Set;return e.filter(n=>t.has(n.id)?!1:(t.add(n.id),!0))}function Lf(e){const t=new Map;for(const n of e)for(const o of n.warnings??[]){const r=`${o.command}\0${o.label}\0${o.warning}`;t.has(r)||t.set(r,{...o,id:r,tags:n.tags})}return[...t.values()]}const Vr=new Map,Nf=new Set(["overdue","lost"]);function Of(e){const t=new Set,n=new Set;for(const o of e){for(const r of o.refusals??[])t.add(r.id);for(const r of o.failures??[])t.add(r.id);for(const r of o.undelivered??[])t.add(r.id);for(const r of o.founds??[])(r.outcome==="ran"?n:t).add(r.id)}return{failed:t,ran:n}}function Ff(e){const t=new Map;for(const d of e)for(const h of d.inFlight)h.settling||t.set(h.id,{handleId:d.id,row:h});const{failed:n,ran:o}=Of(e),[r,s]=p.useState({last:Vr,settling:Vr}),a=[...r.last].filter(([d])=>!t.has(d));if(a.length>0||t.size!==r.last.size||[...t].some(([d,h])=>r.last.get(d)?.row!==h.row)){const d=a.map(([h,f])=>{const m=n.has(h)||Nf.has(f.row.predictedPhase)&&!o.has(h)?"failed":"confirmed",x=m==="confirmed"?Ar(f.row):0;return[h,{...f,row:{...f.row,settling:m,settleSeconds:x}}]});s({last:t,settling:d.length===0?r.settling:new Map([...r.settling,...d])})}const c=p.useRef(new Map);return p.useEffect(()=>{const d=c.current;for(const[h,f]of r.settling){if(d.has(h))continue;const m=setTimeout(()=>{d.delete(h),s(x=>{const g=new Map(x.settling);return g.delete(h),{...x,settling:g}})},(f.row.settleSeconds??0)*1e3+Ut);d.set(h,m)}},[r.settling]),p.useEffect(()=>{const d=c.current;return()=>{for(const h of d.values())clearTimeout(h)}},[]),r.settling.size===0?e:e.map(d=>{const h=[...r.settling.values()].filter(f=>f.handleId===d.id&&!t.has(f.row.id)).map(f=>f.row.settling==="confirmed"&&n.has(f.row.id)?{...f.row,settling:"failed",settleSeconds:0}:f.row.settling==="failed"&&o.has(f.row.id)?{...f.row,settling:"confirmed",settleSeconds:Ar(f.row)}:f.row);return h.length===0?d:{...d,inFlight:[...d.inFlight,...h]}})}function Df(e){if(Ue(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return Xo(t)?n>0||(t??0)>=$a&&o>0:!1}return e.inFlight.length>0}function Fa({tiny:e}={}){const t=bh(),n=Ho();p.useEffect(()=>n?yh(n):void 0,[n]);const o=Pf(Ff(t)).filter(Df),r=Lf(t),s=Jn(t.flatMap(_=>(_.refusals??[]).map(X=>({...X,tags:_.tags})))),a=t.flatMap(_=>(_.losses??[]).map(X=>({...X,tags:_.tags}))),i=Jn(t.flatMap(_=>(_.founds??[]).map(X=>({...X,tags:_.tags})))),c=t.flatMap(_=>(_.undelivered??[]).map(X=>({...X,tags:_.tags}))),d=Jn(t.flatMap(_=>(_.failures??[]).map(X=>({...X,tags:_.tags})))),h=s.length+c.length+d.length,f=o.length>0||h>0||a.length>0||i.length>0||r.length>0,[m,x]=p.useState(!1),[g,v]=p.useState(!1),[k,E]=p.useState(!1),S=m||g&&!k;p.useEffect(()=>{f||(x(!1),v(!1),E(!1))},[f]);const C=p.useId(),j=[...o.filter(_=>Ue(_.tags)==="ribbon"),...o.filter(_=>Ue(_.tags)!=="ribbon")],I=o.some(_=>Ue(_.tags)==="ribbon"),M=j.filter(_=>Ue(_.tags)!=="ribbon"),N=oa(o.filter(_=>Ue(_.tags)!=="ribbon").flatMap(_=>_.inFlight)),L=t.some(_=>_.dismiss&&(_.refusals?.length??0)>0)?_=>{for(const X of t)X.refusals?.some(le=>le.id===_)&&X.dismiss?.(_)}:void 0,K=t.some(_=>_.dismiss&&(_.losses?.length??0)>0)?_=>t.find(X=>X.losses?.some(le=>le.id===_))?.dismiss?.(_):void 0,P=t.some(_=>_.dismiss&&(_.undelivered?.length??0)>0)?_=>t.find(X=>X.undelivered?.some(le=>le.id===_))?.dismiss?.(_):void 0,te=t.some(_=>_.dismiss&&(_.failures?.length??0)>0)?_=>{for(const X of t)X.failures?.some(le=>le.id===_)&&X.dismiss?.(_)}:void 0,ie=t.some(_=>_.dismiss&&(_.founds?.length??0)>0)?_=>{for(const X of t)X.founds?.some(le=>le.id===_)&&X.dismiss?.(_)}:void 0;return l.jsxs(zf,{"data-panel-rail-frame":"",$tiny:e,$hasContent:f,onMouseEnter:()=>{E(!1),v(!0)},onMouseLeave:()=>v(!1),children:[t.length>0&&l.jsxs(Pn,{visuallyHidden:!0,additionsOnly:!0,children:[s.map(_=>l.jsxs("span",{children:[zo(_)," "]},`refusal:${_.id}`)),a.map(_=>l.jsxs("span",{children:[va(_)," "]},`loss:${_.id}`)),c.map(_=>l.jsxs("span",{children:[ja(_)," "]},`undelivered:${_.id}`)),d.map(_=>l.jsxs("span",{children:[Sa(_)," "]},`failure:${_.id}`)),i.map(_=>l.jsxs("span",{children:[xa(_)," "]},`found:${_.id}`)),r.map(_=>l.jsx("span",{children:Ea(_)},`warning:${_.id}`))]}),f?l.jsxs(Bf,{"data-panel-rail":"","data-grown":S,"data-pinned":m,"data-suppress-hover":k,onKeyDown:_=>{_.key==="Escape"&&m&&(_.stopPropagation(),x(!1),E(!0))},children:[S&&N.length>0&&!I&&l.jsx(qr,{children:l.jsx(Ir,{items:N,height:Uf})}),l.jsx(Me,{text:!S&&N.length>0?`In flight: ${N.filter(_=>!_.settling).map(_=>_.label).join(", ")}`:null,children:l.jsx(Wf,{type:"button","aria-expanded":m,"aria-controls":C,"aria-label":"Signal-delay detail",onClick:()=>{x(_=>{const X=!_;return X||E(!0),X})},children:l.jsx(qf,{"aria-hidden":"true",hidden:!S,children:"▲"})})}),l.jsxs(Gf,{id:C,"data-panel-rail-detail":"",children:[j.filter(_=>!S||Ue(_.tags)==="ribbon").map(_=>l.jsx(Xr,{handle:_,variant:S?"expanded":"rail","aria-label":_["aria-label"]??(S?"Delay detail":void 0)},_.id)),S&&M.length>0&&l.jsx(Xr,{handles:M,variant:"expanded","aria-label":"Commands in flight"},"queue"),!S&&(h>0||a.length>0||i.length>0||r.length>0)&&l.jsxs(Yf,{children:[h>0&&l.jsx(eo,{children:h===1?"1 command failed":`${h} commands failed`}),a.length>0&&l.jsx(eo,{children:a.length===1?"1 command unconfirmed":`${a.length} commands unconfirmed`}),r.length>0&&l.jsx(eo,{children:r.length===1?"1 warning":`${r.length} warnings`}),i.length>0&&l.jsx(Vf,{children:i.length===1?"1 unconfirmed command answered":`${i.length} unconfirmed commands answered`})]})]}),S&&N.length>0&&I&&l.jsx(qr,{"data-over-graph":"true",children:l.jsx(Ir,{items:N,height:Xf})})]}):null,S&&r.length>0&&l.jsx(ft,{kind:"warned",entries:r,live:!1}),S&&s.length>0&&l.jsx(ft,{kind:"refused",entries:s,onDismiss:L,live:!1}),S&&a.length>0&&l.jsx(ft,{kind:"lost",entries:a,onDismiss:K,live:!1}),S&&c.length>0&&l.jsx(ft,{kind:"undelivered",entries:c,onDismiss:P,live:!1}),S&&d.length>0&&l.jsx(ft,{kind:"failed",entries:d,onDismiss:te,live:!1}),S&&i.length>0&&l.jsx(ft,{kind:"found",entries:i,onDismiss:ie,live:!1})]})}const zf=w.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,Hf=D`
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
`,Bf=w.div`
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
    ${Hf}
  }
`,Wf=w.button`
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

`,Xf=86,Uf=40,qr=w.div`
  pointer-events: none;

  &[data-over-graph="true"] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`,Gf=w.div`
  display: contents;
`,eo=w.span`
  color: ${we.warn};
`,Yf=w.span`
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
`,Vf=w.span`
  color: var(--color-info-text);
`,qf=w.span`
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
`,Da=p.createContext(null);function I1({badges:e,children:t}){return l.jsx(Da.Provider,{value:e,children:t})}function Kf(){return p.useContext(Da)}function za({severity:e,count:t=1}){const n=t>1;return l.jsx(Zf,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${Xt[e]}`:Xt[e],$mark:ce[e],$digits:n?String(t).length:1,children:n&&l.jsx(Qf,{$fill:ho[e],$ink:Os[e],children:l.jsx(Jf,{"aria-hidden":"true",children:l.jsx("text",{x:"50%",y:"50%",dy:"0.365em",textAnchor:"middle",children:t})})})})}const Kr="8px",Zf=w.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${Kr};
  /* The count's own size, so the width below can be counted in its digits. Digits this size are six pixels tall, which centre in the eight-pixel dot on whole pixels; at seven they are five, and one engine places the baseline half a pixel above or below the middle. */
  font-size: 8px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:Kr};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,Qf=w.span`
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
`,Jf=w.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  fill: currentColor;
`,ep=()=>()=>{},Zr=()=>al;function Ha(){const e=zs();return p.useSyncExternalStore(e?e.subscribe:ep,e?e.getBreakdown:Zr,e?e.getBreakdown:Zr)}const tp=()=>()=>{},Qr=()=>null;function np(){const e=zs();return p.useSyncExternalStore(e?e.subscribe:tp,e?e.getSummary:Qr,e?e.getSummary:Qr)}const Ba=D`
  font-size: var(--font-size-value);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-dim);
`,op=12;function rp(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function sp(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const r=o<e?t-op:t;if(n[o]<=r)return o}return n.length-1}function ap(e,t,n){const[o,r]=p.useState(0),s=p.useRef(o);s.current=o;const a=[t,...n].join(`
`),i=p.useCallback(()=>{const c=e.current,d=a.split(`
`);if(!c||d.length<2){s.current!==0&&(s.current=0,r(0));return}const h=d.map(m=>rp(c,m)),f=sp(s.current,c.clientWidth,h);f!==s.current&&(s.current=f,r(f))},[e,a]);return p.useLayoutEffect(()=>{i()},[i]),p.useEffect(()=>{const c=e.current;if(!c||typeof ResizeObserver>"u")return;const d=new ResizeObserver(()=>i());return d.observe(c),()=>d.disconnect()},[e,i]),{index:o,compacted:o>0}}const ip=24;function lp(e,t,n,o,r=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&r?!(t>n+ip):n>t}function Jr(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const r=e.cloneNode(!0);n!==void 0&&(r.textContent=n),Object.assign(r.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),r.setAttribute("aria-hidden","true"),o.insertBefore(r,e.nextSibling);const s=r.getBoundingClientRect().width;return o.removeChild(r),s}const cp={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function Ct(e){return Number.parseFloat(e)||0}function dp(e,t,n,o){const[r,s]=p.useState(!1),a=p.useRef(r);a.current=r;const i=p.useRef(void 0),c=p.useRef(void 0),d=p.useRef(!1),h=p.useRef(o);h.current=o;const f=p.useCallback(()=>{const x=e.current;if(!x)return;const g=getComputedStyle(x),v=x.getBoundingClientRect().width-Ct(g.paddingLeft)-Ct(g.paddingRight),k=Jr(t.current,{},h.current),E=Jr(n.current,cp),S=n.current?.closest("[data-panel-aside-expand]")?.parentElement,C=S?getComputedStyle(S):null,j=k===0||E===0?k+E:k+Ct(g.columnGap)+Ct(C?.paddingLeft??"")+Ct(C?.paddingRight??"")+E,I=a.current,M=v>0&&c.current!==void 0&&v<c.current;I&&M&&(d.current=!0);const N=lp(I,v,j,i.current,d.current);N!==I&&(d.current=N&&M),v>0&&(c.current=v),j>0&&(i.current=j),N!==a.current&&(a.current=N,s(N))},[e,t,n]),m=p.useRef({title:null,aside:null,observer:null});return p.useLayoutEffect(()=>{const x=t.current,g=n.current,v=m.current;if(v.observer===null||v.title!==x||v.aside!==g){v.observer?.disconnect(),v.title=x,v.aside=g,v.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>f());for(const k of[x,g])k&&v.observer?.observe(k,{subtree:!0,childList:!0,characterData:!0,attributes:!0});f();return}v.observer.takeRecords().length>0&&f()}),p.useEffect(()=>{const x=m.current;return()=>{x.observer?.disconnect(),x.observer=null}},[]),p.useEffect(()=>{const x=e.current;if(!x||typeof ResizeObserver>"u")return;const g=new ResizeObserver(()=>f());return g.observe(x),n.current&&g.observe(n.current),()=>g.disconnect()},[e,n,f]),r}const Wa=p.createContext("full"),up=Wa.Provider;function R1(){return p.useContext(Wa)}const Fn=p.createContext(null);function Xa({children:e}){const[t,n]=p.useState(null),o=p.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return l.jsx(Fn.Provider,{value:o,children:e})}function hp({children:e}){return l.jsx(Xa,{children:e})}const Ua=`
  & > [${Bs}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,_n=w.div`
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
  ${Ua}
`,fp=w.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${Ba}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ga=p.forwardRef(function({compact:t,children:n,...o},r){const s=p.useRef(null),a=typeof n=="string"?n:"",i=t===void 0||a===""?pp:typeof t=="string"?[t]:t,{index:c,compacted:d}=ap(s,a,i);return l.jsx(Me,{text:d?a:void 0,children:l.jsx(fp,{...o,ref:h=>{if(s.current=h,typeof r=="function"){r(h);return}r&&(r.current=h)},"aria-label":d?a:void 0,children:c===0?n:i[c-1]})})}),pp=[],gp=w.div`
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
`,mp=w.div`
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
`,xp=w.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,vp=w.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,bp=w.details`
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
`,yp=120;function Ya(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${Xt[n.severity]}`:`${Xt[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function Va({title:e,compactTitle:t,aside:n,toolbar:o,...r}){const s=Ha(),a=p.useRef(null),i=p.useRef(null),c=p.useRef(null),d=dp(a,i,c,typeof e=="string"?e:void 0),[h,f]=p.useState(!1),[m,x]=p.useState(!1),g=p.useRef(null),v=p.useRef(null),k=p.useRef(null),E=p.useCallback(()=>{g.current!==null&&clearTimeout(g.current),g.current=null},[]);p.useEffect(()=>{d||(f(!1),x(!1))},[d]),p.useEffect(()=>E,[E]);const S=d&&(h||m);p.useEffect(()=>{if(!S)return;const M=$=>{$.key==="Escape"&&v.current?.contains(document.activeElement)&&($.stopPropagation(),E(),x(!1),f(!1),k.current?.focus())},N=$=>{v.current?.contains($.target)||(E(),x(!1),f(!1))};return document.addEventListener("keydown",M,!0),document.addEventListener("pointerdown",N,!0),()=>{document.removeEventListener("keydown",M,!0),document.removeEventListener("pointerdown",N,!0)}},[S,E]);const C=d?Ya(s):null,{anchor:j,tip:I}=Kt(S?null:C);return l.jsxs(gp,{ref:a,"data-panel-header":"",...r,children:[l.jsxs(mp,{children:[e!==void 0&&l.jsx(Ga,{ref:i,compact:t,children:e}),l.jsx(xp,{"aria-hidden":"true",children:l.jsx(wn,{children:null})})]}),n!==void 0&&l.jsx(vp,{children:l.jsxs(bp,{ref:v,"data-panel-aside-expand":"","data-hovering":d&&m?"":void 0,$collapsed:d,open:d?h:!0,onToggle:M=>{d&&(f(M.currentTarget.open),M.currentTarget.open||x(!1))},onPointerEnter:M=>{!d||M.pointerType==="touch"||(E(),x(!0))},onPointerLeave:M=>{M.pointerType!=="touch"&&(E(),g.current=setTimeout(()=>{g.current=null,x(!1)},yp))},children:[l.jsxs("summary",{ref:k,"data-tooltip":j["data-tooltip"],onPointerDown:j.onPointerDown,onPointerUp:j.onPointerUp,onFocus:j.onFocus,onBlur:j.onBlur,"aria-description":C??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(M=>`${M.count} ${Xt[M.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(M=>l.jsx(za,{severity:M.severity,count:M.count},M.severity)),l.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),I,l.jsx(up,{value:d?"collapsed":"full",children:l.jsx("div",{"data-panel-aside-full":"",ref:c,children:n})})]})}),o!==void 0&&l.jsx(qa,{children:o})]})}const qa=w.div`
  ${Oo("panel-toolbar")}
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
`,wp=w.div`
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
  ${({$loneFrame:e})=>e?`@container (width < ${kp}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${Ua}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${Bs}] {
           min-height: 0;
         }`:""}
`,kp="25rem";function Ka({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...r}){const a=p.useContext(Fn)?.registerScroller,[i,c]=p.useState(null),d=p.useCallback(f=>{a?.(f),c(f)},[a]),h=Ia(i);return l.jsx(wp,{ref:d,tabIndex:h,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...r,children:e})}const $p="13rem",_p=w.div`
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
  & > [${il}] {
    grid-column: 1 / -1;
  }
  /* A grid opened only to carry the augment slot, with nothing bound, takes no gap above it: a filling section reaches the body's bottom inset. */
  &:empty {
    display: none;
  }
`;function Mp({children:e,hoverTitle:t}){const n=p.useRef(null),o=p.useRef(null),r=Ep(n,o);return l.jsx(Sp,{ref:n,$fits:r,"data-panel-fit-body":"",children:l.jsx(jp,{ref:o,$fits:r,$hoverTitle:t,"data-panel-fit-shifted":r&&t?"":void 0,children:e})})}const Sp=w.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,jp=w.div`
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
`;function Ep(e,t){const[n,o]=p.useState(!0);return p.useLayoutEffect(()=>{const r=e.current,s=t.current;if(!r||!s)return;const a=()=>{o(Ip(Ap(s),r.clientHeight))};if(a(),typeof ResizeObserver>"u")return;const i=new ResizeObserver(a),c=()=>{i.observe(r),i.observe(s);for(const h of Array.from(s.children))i.observe(h)};c();const d=new MutationObserver(()=>{c(),a()});return d.observe(s,{childList:!0}),()=>{i.disconnect(),d.disconnect()}},[e,t]),n}function Ap(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function Ip(e,t){return e<=t}const Rp=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,Cp=w.div`
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
`,Mn=w.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e})=>e==="top"?"top: 0;":"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: 44px;
  /* The audit reads the mask depth from the gradient, so the literal height costs it nothing. */
  ${Cc("panel-scroll-glow")}
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
`,Za=p.forwardRef(function({children:t,...n},o){const r=p.useRef(null),[s,a]=p.useState(null),i=p.useCallback(h=>{r.current=h,a(h)},[]);p.useImperativeHandle(o,()=>r.current);const c=On(s,Go,Yo,Uo),d=Ia(s);return l.jsxs(Rp,{...n,children:[l.jsx(Cp,{ref:i,tabIndex:d,"data-scroll-area-inner":"",children:t}),l.jsx(Mn,{$position:"top",$visible:c.top}),l.jsx(Mn,{$position:"bottom",$visible:c.bottom})]})});function Tp(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const es="14rem",Pp=5,Lp="45%",Np=`min(${ul(1,Pp).pxH}px, ${Lp})`;function ts(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const Op=w.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${ts(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${ts(t,n)};`}

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
`;function Fp({side:e="end",size:t,placement:n="auto",railBand:o,children:r,...s}){const{ref:a,size:i}=In({w:1,h:1}),c=Tp(t??es),d=i.w<=1||c===void 0||i.w>=c*2,h=n==="below"?"block":(n==="beside"||i.w>=i.h)&&d?"inline":"block",f=t??(h==="inline"?es:Np);return l.jsx(Op,{ref:a,"data-panel-split":h,$axis:h,$side:e,$size:f,$railBand:o,...s,children:r})}const Dp=w(Za)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,zp=w.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function Qa({children:e,...t}){return l.jsx(zp,{"data-panel-sidebar":"",...t,children:l.jsx(Dp,{children:e})})}const Uo={top:!1,bottom:!1};function Go(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function Yo(e,t){return e.top===t.top&&e.bottom===t.bottom}const Hp=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function Ja({children:e,railBandAbove:t,...n}){const o=p.useContext(Fn),r=o?.scroller??null;p.useEffect(()=>{},[o]);const s=On(r,Go,Yo,Uo);return l.jsxs(Hp,{...n,children:[e,l.jsx(Mn,{$position:"top",$visible:s.top&&!t}),l.jsx(Mn,{$position:"bottom",$visible:s.bottom})]})}function Bp(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const C1=["sections","actions"],sn=Object.freeze({});function Wp({summary:e}){const t=p.useRef(e.severity),[n,o]=p.useState(0);p.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const r=Ya(Ha());return l.jsx(Xp,{$pulse:n,children:l.jsx(Me,{text:r,focusable:!0,children:l.jsx(wn,{tone:e.severity,size:"sm",children:e.label})})})}const Xp=w.span`
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
`,ei=w.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,Up=w.div`
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
`;function Gp({children:e}){const t=p.useContext(Fn),n=On(t?.scroller??null,Go,Yo,Uo);return l.jsx(Up,{"data-panel-sticky-top":"","data-panel-glow-top":n.top?"":void 0,children:e})}function Yp({render:e}){const{ref:t,size:n}=In({w:0,h:0});return l.jsx(Vp,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const Vp=w.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,qp=w.div`
  flex: 1 1 100%;
  min-width: 0;
`,Kp=w(Va)`
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
`,Zp=w.div`
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
`,Qp=w(Ye)`
  margin: 0;
  ${Ba}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${_n}:hover &,
  ${_n}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function Vo(e){return e.held===void 0?e.label:`${e.label}: ${kt(e.held)}`}function Jp(e){let t=null;for(const n of e){const o=Do(n),{tone:r}=o;r===void 0||r==="neutral"||(t===null||$r(r)>$r(t.severity))&&(t={severity:r,label:Vo(o)})}return t}function ns({badges:e}){return l.jsx(l.Fragment,{children:e.map(t=>l.jsx(e0,{entry:t},t.id))})}function e0({entry:e}){const t=Do(e),{tone:n}=t;return _o(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:Vo(t)}),null}function t0({summary:e,announcement:t}){return l.jsxs(l.Fragment,{children:[l.jsx(Me,{text:e.label,focusable:!0,children:l.jsx(n0,{children:l.jsx(za,{severity:e.severity})})}),l.jsx(Pn,{visuallyHidden:!0,assertive:!0,children:t})]})}const n0=w.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,o0=w.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function r0(e){return e.hoverTitle?l.jsx(s0,{...e}):l.jsx(ti,{...e,hoverTitleId:void 0})}function s0(e){const t=p.useId();return l.jsx(ti,{...e,hoverTitleId:t})}function ti({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:r,panelToolbar:s,panelFilter:a,panelFooter:i,panelTrend:c,inactive:d,fitToSize:h,hoverTitle:f,hoverTitleId:m,panelSidebar:x,sidebarSide:g,sidebarSize:v,sidebarPlacement:k,sections:E,sectionMinWidth:S=$p,children:C,...j}){const I=Kf(),M=wr("actions"),N=wr("sections"),$=Bp(o,I),L=$.length===0?null:$.map(G=>{const oe=Do(G),{label:Te,tone:Je,title:Fe}=oe;return l.jsx(Me,{text:Fe,focusable:!0,children:l.jsx(wn,{tone:Je,held:oe.held,report:Je===void 0||Je==="neutral"?void 0:{id:G.id,label:Vo(oe)},children:Te})},G.id)}),W=a===void 0?s:l.jsxs(l.Fragment,{children:[s,l.jsx(qp,{children:Ca(a)})]}),K=r??null,O=K!==null&&K!=="none"&&K!=="live"?K:null;_o(O?{id:"stream",severity:qn(O),label:kr(O)??""}:null);const P=np(),V=P!==null&&$.some(G=>G.id===P.id),te=O===null?null:kr(O),ne=V?null:P!==null?l.jsx(Wp,{summary:P}):O===null||te===null?null:l.jsx(Me,{text:`Telemetry stream: ${te}`,focusable:!0,children:l.jsx(wn,{tone:qn(O),size:"sm",children:te})}),ie=P?.label??te,_=ie===null||ie===""?"":typeof e=="string"?`${e}: ${ie}`:`Status: ${ie}`,X=n===void 0&&ne===null&&L===null&&!M?void 0:l.jsxs(l.Fragment,{children:[n,M&&l.jsx(rn,{segment:"actions",props:sn}),L,ne]}),le=P??Jp($)??(O===null||te===null?null:{severity:qn(O),label:te}),Se=le?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${le.label}`:`Status: ${le.label}`,qe=n===void 0&&le===null&&!M?$.length===0?void 0:l.jsx(ns,{badges:$}):l.jsxs(l.Fragment,{children:[n,M&&l.jsx(rn,{segment:"actions",props:sn}),l.jsx(ns,{badges:$}),le!==null&&l.jsx(t0,{summary:le,announcement:Se})]}),fe=d!==void 0,de=fe?[]:p.Children.toArray(E),J=de.length>0,pe=C===void 0&&!N&&!h&&de.length===1&&a0(de[0]),je=[];for(const G of de){const oe=!h&&p.isValidElement(G)&&G.props.fill===!0,Te=je.at(-1);!oe&&Te!==void 0&&!Te.fill?Te.nodes.push(G):je.push({fill:oe,nodes:[G]})}J&&!je.some(G=>!G.fill)&&je.push({fill:!1,nodes:[]});const $e=je.reduce((G,oe,Te)=>oe.fill?G:Te,-1),Ke=G=>Math.max(1,G.filter(oe=>!(p.isValidElement(oe)&&oe.props.full===!0)).length),Ze=[];for(const G of je){const oe=Ze.length;if(G.fill){Ze.push(G.nodes[0]);continue}Ze.push(l.jsxs(_p,{$min:S,$columns:Ke(G.nodes),children:[G.nodes,oe===$e&&l.jsx(rn,{segment:"sections",props:sn})]},`sections-${oe}`))}const Qe=fe?l.jsx(ll,{reason:d}):J?l.jsxs(l.Fragment,{children:[C,Ze]}):C,ue=l.jsxs(Ka,{fitToSize:h,loneFrame:pe,hoverTitle:f,children:[l.jsxs(Gp,{children:[l.jsx(Fa,{tiny:f}),!f&&l.jsx(Kp,{title:e,compactTitle:t,aside:X,toolbar:W})]}),h?l.jsx(Mp,{hoverTitle:f,children:Qe}):Qe,!J&&!fe&&l.jsx(rn,{segment:"sections",props:sn})]});return l.jsx(hp,{children:l.jsxs(_n,{$railTravels:!0,$hoverTitle:f,...f?{tabIndex:0,role:"group","aria-labelledby":m,"data-tiny-panel":""}:{},...j,children:[l.jsx(Ja,{railBandAbove:!0,children:x===void 0||fe?ue:l.jsxs(Fp,{side:g,size:v,placement:k,railBand:!0,children:[ue,l.jsx(Qa,{children:x})]})}),!fe&&c!==void 0&&l.jsx(Yp,{render:c}),!fe&&i!==void 0&&l.jsx(ei,{children:i}),f&&l.jsxs(Zp,{"data-panel-hover-title":"",children:[l.jsx(Qp,{as:"h3",id:m,children:e}),qe!==void 0&&l.jsx(o0,{children:qe})]}),l.jsx(Pn,{visuallyHidden:!0,children:f&&Se!==void 0?"":_})]})})}function a0(e){if(!p.isValidElement(e)||e.type!==Hs||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=p.Children.toArray(t).filter(r=>!(p.isValidElement(r)&&r.type===Ef));if(n.length!==1)return!1;const[o]=n;if(!p.isValidElement(o))return!1;if(o.type===gf)return!0;if(o.type!==p.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const T1=Object.assign(r0,{Context:Xa,Delay:Fa,Container:_n,Header:Va,Toolbar:qa,Footer:ei,Title:Ga,Glow:Ja,Body:Ka,Section:Hs,Sidebar:Qa}),i0={center:"center",start:"start",baseline:"baseline",stretch:"stretch"};function P1({cols:e,minColWidth:t,fit:n=!1,gap:o="related-dense",rowGap:r,align:s="center",squares:a=!1,squareHeadingPx:i=0,squareHeadingMinPx:c,minRowHeight:d,children:h,...f}){if(a){const m=p.Children.toArray(h).length,x=t??"120px",g=l.jsx(u0,{$count:m,$min:x,$headingPx:i,$gap:vt[o],$rowMin:d,children:l.jsx(h0,{$count:m,$min:x,$headingPx:i,$gap:vt[o],$rowMin:d,$headingMin:c,"data-grid-squares":"",children:h})});return l.jsx(c0,{$rowMin:d,...f,children:d===void 0?g:l.jsx(d0,{children:g})})}return l.jsx(l0,{$cols:e,$minColWidth:t,$fit:n,$gap:o,$rowGap:r,$align:s,...f,children:h})}const l0=w.div`
  display: grid;
  align-items: ${({$align:e})=>i0[e]};
  gap: ${({$gap:e,$rowGap:t})=>t?`${vt[t]} ${vt[e]}`:vt[e]};
  grid-template-columns: ${({$cols:e,$minColWidth:t,$fit:n})=>e||(t?`repeat(${n?"auto-fit":"auto-fill"}, minmax(min(${t}, 100%), 1fr))`:"1fr")};
`,c0=w.div`
  container: grid-squares-width / inline-size;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  ${({$rowMin:e})=>e&&`
  flex-basis: 0;
  min-height: ${e};
`}
`,d0=w(Za)`
  & > [data-scroll-area-inner] {
    display: flex;
    flex-direction: column;
  }
`,u0=w.div`
  container: grid-squares / size;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  ${({$count:e,$min:t,$headingPx:n,$gap:o,$rowMin:r})=>Rf(e,t,n,o,r)}
`,h0=w.div`
  --cols: 1;
  --rows: ${({$count:e})=>e};
  display: grid;
  flex: 1 1 0;
  min-height: 0;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
  gap: ${({$gap:e})=>e};
  ${({$count:e,$min:t,$headingPx:n,$rowMin:o})=>Cf(e,t,n,o)}
  & > * {
    container-type: size;
    min-width: 0;
    min-height: 0;
  }
  ${({$headingPx:e,$headingMin:t})=>Tf(e,t)}
`,ni=.89,qo=.45;function oi({kind:e,x:t,y:n,scale:o=1,ghost:r=!1}){const s=se[e],a=s.canvasRadius*o,i={fill:s.color,opacity:r?qo:void 0,"data-reckoning-mark":e,"aria-hidden":!0};if(e==="held"){const d=a*ni;return l.jsx("rect",{x:t-d,y:n-d,width:2*d,height:2*d,...i})}const c=`${t},${n-a} ${t+a},${n+a*.8} ${t-a},${n+a*.8}`;return l.jsx("polygon",{points:c,...i})}function ri(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function os(e,t,n,o,r,{ghost:s=!1,scale:a=1}={}){const i=se[n],c=i.canvasRadius*a;if(t.save(),t.globalAlpha=s?qo:1,t.fillStyle=ri(e,i.cssVar,i.fallback),t.beginPath(),n==="held"){const d=c*ni;t.rect(o-d,r-d,2*d,2*d)}else t.moveTo(o,r-c),t.lineTo(o+c,r+c*.8),t.lineTo(o-c,r+c*.8),t.closePath();t.fill(),t.restore()}function L1(e,t,{held:n,modelled:o},r={}){n!==void 0&&o!==void 0&&(t.save(),t.globalAlpha=qo,t.strokeStyle=ri(e,se.modelled.cssVar,se.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(o.x,o.y),t.stroke(),t.restore()),n!==void 0&&os(e,t,"held",n.x,n.y,{...r,ghost:o!==void 0}),o!==void 0&&os(e,t,"modelled",o.x,o.y,r)}const Sn=14,Re=4,Ie=6,f0=6,rs=12,be=6,Bt=8,an=4.5,bo=4,p0=12,g0=190,m0=80;function Ft(e,t){return t<1?"":e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}function x0(e,t,n,o){const r=o??e,s=r.x1-r.x0,a=e.y1-e.y0,i=s>=g0&&a>=m0,c=i||o!==void 0,d=i||o?n:n.filter(M=>!M.detail),h=s-be*2-Re*2-Bt-bo,f=o!==void 0,m=Math.floor(h/Ie),x=M=>Ft(M.value??vn,m-(M.currency?M.currency.length+2:0)),g=M=>{const N=M.value??vn;if(f)return Ft(M.label,m);if(i)return`${M.label} ${N}`;const $=Math.floor((h-N.length*Ie)/Ie)-1-(M.modelled?2:0),L=Ft(M.label,Math.min($,p0));if(L!=="")return`${L} ${N}`;const W=Math.floor(h/Ie)-(M.modelled?2:0);return Ft(N,W)},v=M=>(i||f)&&M.currency?M.currency:"",k=M=>v(M)?f0+v(M).length*Ie+(M.modelled?rs:0):M.modelled?rs:0,E=i?0:Bt+bo,S=Math.floor((s-be*2-Re*2)/Ie),C=Math.max(...d.map(M=>f?E+Math.max(g(M).length*Ie,x(M).length*Ie+k(M)):E+g(M).length*Ie+k(M)),c?Math.min(t.length,S)*Ie:0),j=c?1:0,I=(d.length*(f?2:1)+j)*Sn+Re*2;return{full:i,named:c,headingChars:S,stacked:f,rows:d,text:g,valueText:x,currencyText:v,cardW:f?s:Math.min(C+Re*2,s-be*2),cardH:I,headRows:j,fits:I<=a-be*2}}function v0(e,t,n,o,r){const s=(a,i)=>a>=t&&a<=t+o&&i>=n&&i<=n+r;for(let a=1;a<e.cx.length;a++){const[i,c,d,h]=[e.cx[a-1],e.cy[a-1],e.cx[a],e.cy[a]];if(![i,c,d,h].every(Number.isFinite))continue;const f=Math.max(1,Math.ceil(Math.hypot(d-i,h-c)/Sn));for(let m=0;m<=f;m++)if(s(i+(d-i)*m/f,c+(h-c)*m/f))return!0}return!1}function Ko({x:e,plot:t,heading:n,rows:o,column:r,avoid:s=[],traces:a=[]}){const i=x0(t,n,o,r),{rows:c,cardW:d,cardH:h,fits:f}=i,m=t.y0+be,x=c.flatMap($=>$.y===void 0||$.y===null?[]:[$.y]),g=($,L)=>x.every(W=>e+an<$||e-an>$+d||W+an<L||W-an>L+h),v=t.x1-e-be,k=v>=d||v>=e-t.x0,E=$=>Math.max(t.x0+be,Math.min(t.x1-be-d,$)),S=k?[e+be,e-be-d]:[e-be-d,e+be],C=[m,t.y1-be-h].flatMap($=>S.map(L=>({cardX:E(L),cardY:$}))),j=($,L)=>a.every(W=>!v0(W,$,L,d,h)),I=($,L)=>s.every(W=>$+d<W.x0||$>W.x1||L+h<W.y0||L>W.y1),M=C.find($=>g($.cardX,$.cardY)&&j($.cardX,$.cardY)&&I($.cardX,$.cardY))??C.find($=>g($.cardX,$.cardY)&&I($.cardX,$.cardY))??C.find($=>g($.cardX,$.cardY)&&j($.cardX,$.cardY))??C.find($=>g($.cardX,$.cardY)),N=f?r?{cardX:r.x0,cardY:r.y0+be}:M:void 0;return{layout:i,place:N}}function N1(e){return Ko(e).place!==void 0}function b0(e){const{layout:t,place:n}=Ko(e);if(n!==void 0)return{x0:n.cardX,y0:n.cardY,x1:n.cardX+t.cardW,y1:n.cardY+t.cardH}}function y0({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:a}){const{layout:i,place:c}=Ko({x:e,plot:t,heading:n,rows:o,column:r,avoid:s,traces:a}),{full:d,named:h,headingChars:f,stacked:m,rows:x,text:g,valueText:v,currencyText:k,cardW:E,cardH:S,headRows:C}=i,j=c!==void 0,I=c?.cardX??0,M=c?.cardY??0,N=$=>$+Re+(d?0:Bt+bo);return l.jsxs("g",{pointerEvents:"none","data-plot-crosshair":"",children:[l.jsx("line",{x1:e,y1:t.y0,x2:e,y2:t.y1,stroke:"var(--color-text-primary)",strokeWidth:1,opacity:.7}),x.map($=>$.y===void 0||$.y===null?null:l.jsx("circle",{cx:e,cy:$.y,r:3.5,fill:$.color,stroke:"var(--color-text-primary)",strokeWidth:1},$.id)),j&&l.jsxs("g",{"data-plot-crosshair-card":"",children:[l.jsx("rect",{x:I,y:M,width:E,height:S,rx:3,fill:"var(--color-surface-panel)",stroke:"var(--color-border-strong)"}),h&&l.jsx("text",{x:I+Re,y:M+Re+10,fill:"var(--color-text-muted)",fontSize:10,children:Ft(n,f)}),x.map(($,L)=>{const W=m?2:1,K=M+Re+(L*W+C)*Sn+10,O=K+(m?Sn:0);return l.jsxs("g",{"data-plot-crosshair-row":$.id,children:[!d&&l.jsx("rect",{x:I+Re,y:K-8,width:Bt,height:Bt,fill:$.color,"data-plot-crosshair-swatch":""}),l.jsx("text",{x:N(I),y:K,fill:$.value===null||m?"var(--color-text-faint)":$.color,fontSize:10,style:{whiteSpace:"pre"},children:g($)}),m&&l.jsx("text",{x:N(I),y:O,fill:$.value===null?"var(--color-text-faint)":$.color,fontSize:10,style:{whiteSpace:"pre"},children:v($)}),$.modelled&&l.jsx(oi,{kind:"modelled",x:I+E-Re-k($).length*Ie-(k($)?8:4),y:O-3}),k($)&&l.jsx("text",{x:I+E-Re,y:O,textAnchor:"end",fill:"var(--color-text-faint)",fontSize:10,children:k($)})]},$.id)})]})]})}const ss=720,w0=110,k0=200,as=56,$0=20,_0=112,M0=260,S0=.4,j0=300;function E0({width:e,height:t,contentWidth:n,legendHeight:o=0,cardHeight:r=0}){const s=Math.max(_0,Math.ceil(n));if((t>e||e<ss)&&t>=k0)return{placement:"below"};if(e<ss||t<w0||s>Math.min(M0,e*S0)||e-s<j0)return{placement:"overlay"};const i=t>=as+o+r;return!i&&t<as+$0+r?{placement:"overlay"}:{placement:"beside",columnWidth:s,legendBelow:!i}}const A0={combination:"computed from several readings of the same moment","kepler-propagation":"propagated forward on two-body motion","linear-dead-reckoning":"carried forward at the last observed velocity","powered-integration":"integrated forward through the burn","rate-integration":"integrated forward at the last observed rate"};function I0(e){return A0[e]}const pt=4,ln=3,yo=6;function R0(e,t){return e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0}function C0(e,t){const n=(o,r)=>o>=t.x0&&o<=t.x1&&r>=t.y0&&r<=t.y1;if(e.cx.length===1)return Number.isFinite(e.cx[0])&&n(e.cx[0],e.cy[0]);for(let o=1;o<e.cx.length;o++){const[r,s,a,i]=[e.cx[o-1],e.cy[o-1],e.cx[o],e.cy[o]];if(![r,s,a,i].every(Number.isFinite))continue;const c=Math.max(1,Math.ceil(Math.hypot(a-r,i-s)/yo));for(let d=0;d<=c;d++)if(n(r+(a-r)*d/c,s+(i-s)*d/c))return!0}return!1}function T0({plot:e,card:t,traces:n,obstacles:o}){if(t.width<=0||t.height<=0||t.width>e.x1-e.x0-pt*2||t.height>e.y1-e.y0-pt*2)return;const r=e.x0+pt,s=e.x1-pt-t.width,a=e.y0+pt,i=e.y1-pt-t.height;return[{x:s,y:a},{x:r,y:i},{x:s,y:i},{x:r,y:a}].find(d=>{const h={x0:d.x-ln,y0:d.y-ln,x1:d.x+t.width+ln,y1:d.y+t.height+ln};return!n.some(f=>C0(f,h))&&!o.some(f=>R0(h,f))})}function P0(e){const t=[],n=[];let o=!0;for(let r=e.y0;r<=e.y1+yo;r+=yo){const s=Math.min(r,e.y1);t.push(o?e.x0:e.x1,o?e.x1:e.x0),n.push(s,s),o=!o}return{cx:t,cy:n}}function L0(e,t){return e?.includes(t)??!1}function is(e,t){const{reckoned:n,spans:o}=e.data;return n?.some(r=>t>=r.from&&t<=r.to)?"modelled":o?.some(r=>t>=r.from&&t<=r.to&&r.status==="recorded")?"recorded":"measured"}function N0(e){const{x:t,y:n,y2:o}=e.data;let r=!0;for(let a=0;a<t.length;a++)if(!Number.isFinite(t[a])||a>0&&t[a]<t[a-1]){r=!1;break}if(r)return e;const s=t.map((a,i)=>i).filter(a=>Number.isFinite(t[a])).sort((a,i)=>t[a]-t[i]||a-i);return{...e,data:{x:s.map(a=>t[a]),y:s.map(a=>n[a]),...o?{y2:s.map(a=>o[a])}:{}}}}function O0(e,t,n){const o=e.data.x,r=e.data.y,s=Math.min(o.length,r.length);if(s===0||t<o[0]||t>o[s-1])return null;let a=0,i=s-1;for(;a<i;){const g=a+i>>1;o[g]<t?a=g+1:i=g}const c=a,d=Math.max(0,c-1);if(o[c]!==t&&c>0&&L0(e.data.breaks,c))return null;const h=t-o[d]<=o[c]-t?d:c;if(n!==void 0&&Math.abs(o[h]-t)>n)return null;const f=o[c]-o[d];if(e.readBetween&&f>0&&o[c]!==t){const g=r[d]+(r[c]-r[d])*(t-o[d])/f;return Number.isFinite(g)?{index:h,x:t,y:g,currency:is(e,h)}:null}const m=r[h];if(!Number.isFinite(m))return null;const x=e.data.y2?.[h];return{index:h,x:o[h],y:m,...x!==void 0&&Number.isFinite(x)?{y2:x}:{},currency:is(e,h)}}function F0(e){const t=new Set;for(const n of e)if(!((n.type??"line")==="band"&&!n.data.y2))for(const o of n.data.x)Number.isFinite(o)&&t.add(o);return[...t].sort((n,o)=>n-o)}function ls(e,t,n){if(e.length===0)return null;if(t===null)return e[e.length-1];let o=0,r=e.length-1;for(;o<r;){const a=o+r>>1;e[a]<t?o=a+1:r=a}let s=o+n;return e[o]!==t&&n>0&&(s-=1),e[Math.max(0,Math.min(e.length-1,s))]}function D0({x:e,y:t,size:n,color:o,text:r}){const s=n/2,a=`M 0 ${-s} L ${s} ${s*.8} L ${-s} ${s*.8} Z`,i=`M -0.9 ${-s*.42} H 0.9 V ${s*.2} H -0.9 Z`,c=`M -0.9 ${s*.4} H 0.9 V ${s*.64} H -0.9 Z`;return l.jsx(Me,{text:r,focusable:!0,children:l.jsxs("g",{role:"img","aria-label":r,"data-limit-crossing":"",transform:`translate(${e} ${t})`,children:[l.jsx("title",{}),l.jsx("circle",{r:12,fill:"transparent"}),l.jsx("path",{d:`${a} ${i} ${c}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),l.jsx("path",{d:a,fill:"none",stroke:o,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function si(e,t,n){return n==="above"?e>=t:e<=t}function z0({y:e,cx:t,cy:n,limit:o,limitY:r,bad:s,breaks:a=[],step:i=!1,minGapPx:c}){const d=(k,E,S)=>{if(!E)return{index:k,x:t[k],y:n[k],entered:!1};if(S===null)return{index:k,x:t[k],y:r,entered:!0};const C=n[k]-n[S],j=C===0?1:(r-n[S])/C;return{index:k,x:t[S]+(t[k]-t[S])*j,y:r,entered:!0}},h=new Set(a),f=[];let m=null,x=!1,g=!1,v=Number.NEGATIVE_INFINITY;for(let k=0;k<e.length;k++){if(!Number.isFinite(e[k])){m=null;continue}const E=si(e[k],o,s);if(E&&!g){const S=d(k,x,i||h.has(k)?null:m),C=f[f.length-1];C!==void 0&&S.x-v<c?C.spells++:f.push({...S,spells:1}),v=S.x}g=E,x=!0,m=k}return f}const H0=1;function B0(e,t,n,o,r){const s=n.to;if(s<1||s>=e.length)return!1;const a=o(e[s-1]),i=o(e[s]),c=r(t[s-1]),d=r(t[s]);return i>a?n.t.some((h,f)=>{const m=o(h),x=c+(d-c)*(m-a)/(i-a);return Math.abs(r(n.v[f])-x)>H0}):!1}function to(e,t,n,o){const r=t-e;if(r===0){const s=(n+o)/2;return()=>s}return s=>n+(s-e)/r*(o-n)}function wo(e,t,n=5){if(e===t)return Array.from({length:n},()=>e);const r=(t-e)/(n-1),s=10**Math.floor(Math.log10(r)),i=([1,2,2.5,5,10].find(m=>m*s>=r)??10)*s,c=Math.ceil(e/i)*i,d=[];for(let m=0;d.length<n;m++){const x=c+m*i;if(x>t+i*.01)break;d.push(x)}if(d.length>=2)return d;const h=Math.floor(e/i)*i,f=Math.ceil(t/i)*i;return f>h?[h,f]:[h,h+i]}function ai(e,t){const n=Math.floor(e/1e3);if(t>=36e5){const s=Math.floor(n/3600),a=Math.floor(n%3600/60),i=n%60;return`${s}:${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}const o=Math.floor(n/60),r=n%60;return`${o}:${String(r).padStart(2,"0")}`}function cs(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let a=!1;for(let i=0;i<e.length;i++){if(!Dn(e[i],t[i])){a=!1;continue}const c=n(e[i]).toFixed(2),d=o(t[i]).toFixed(2),h=!a||r.includes(i);s.push(`${h?"M":"L"}${c},${d}`),a=!0,h&&ii(e,t,i,r)&&s.push(`L${c},${d}`)}return s.join(" ")}function Dn(e,t){return Number.isFinite(e)&&Number.isFinite(t)}function ii(e,t,n,o){return n+1>=e.length||o.includes(n+1)||!Dn(e[n+1],t[n+1])}function W0(e,t,n,o,r=[]){if(e.length===0)return"";const s=[];let a=null;for(let i=0;i<e.length;i++){if(!Dn(e[i],t[i])){a=null;continue}const c=n(e[i]).toFixed(2),d=o(t[i]).toFixed(2);if(a===null||r.includes(i)){s.push(`M${c},${d}`),ii(e,t,i,r)&&s.push(`L${c},${d}`),a=d;continue}s.push(`H${c}`),d!==a&&s.push(`V${d}`),a=d}return s.join(" ")}function X0(e,t,n,o,r,s=[],a=[],i=[]){if(e.length===0)return[];if(a.length===0&&i.length===0)return[{d:r(e,t,n,o,s)}];function c(v,k){const E=new Array(e.length);for(const S of v){const C=Math.min(e.length-1,S.to);for(let j=Math.max(0,S.from);j<=C;j++)E[j]=k(S)}return E}const d=c(a,v=>v.status),h=c(i,v=>v.basis),f=new Set(s),m=[];let x=0;const g=(v,k)=>{const E=v>0&&!f.has(v)?v-1:v,S=I=>I.slice(E,k+1),C=[];for(const I of s)I>E&&I<=k&&C.push(I-E);const j=r(S(e),S(t),n,o,C);j!==""&&m.push({status:d[v],basis:h[v],d:j})};for(let v=1;v<=e.length;v++)(v===e.length||d[v]!==d[x]||h[v]!==h[x])&&(g(x,v-1),x=v);return m}function li(e,t,n,o,r){if(e.length===0)return"";const s=Math.min(e.length,t.length,n.length),a=[];for(let c=0;c<s;c++)Dn(e[c],t[c])&&Number.isFinite(n[c])&&a.push(c);if(a.length===0)return"";const i=[];a.forEach((c,d)=>{const h=o(e[c]).toFixed(2),f=r(n[c]).toFixed(2);i.push(`${d===0?"M":"L"}${h},${f}`)});for(let c=a.length-1;c>=0;c--){const d=a[c],h=o(e[d]).toFixed(2),f=r(t[d]).toFixed(2);i.push(`L${h},${f}`)}return i.push("Z"),i.join(" ")}function U0(e,t,n,o){const r=[];for(const s of t){const{bandLo:a,bandHi:i,bandKind:c}=s;if(!a||!i||c===void 0)continue;const d=[];for(let f=s.from;f<=s.to&&f<e.length;f++)d.push(e[f]);const h=li(d,a,i,n,o);h!==""&&r.push({d:h,kind:c})}return r}function ds(e,t,n,o){if(e===t){const d=(n+o)/2;return()=>d}const r=e>0?e:1e-9,s=t>r?t:r*10,a=Math.log10(r),c=Math.log10(s)-a;if(c===0){const d=(n+o)/2;return()=>d}return d=>{const h=d>0?d:r;return n+(Math.log10(h)-a)/c*(o-n)}}function G0(e,t,n=5){if(!(e>0)||!(t>0)||t<=e)return wo(e,t,n);const o=Math.log10(e),r=Math.log10(t);if(r-o<1)return wo(e,t,n);const a=Math.ceil(o),i=Math.floor(r),c=Math.max(1,Math.ceil((i-a+1)/n)),d=[];for(let h=a;h<=i;h+=c)d.push(10**h);return d.length>0?d:[e,t]}const no=.86,us=[[0,-1.15],[1.05,.8],[-1.05,.8]],hs=.3,ke={cssVar:"--color-accent-fg",color:"var(--color-accent-fg)",fallback:"rgb(0 255 136)",lost:{cssVar:"--color-nogo-mark",color:"var(--color-nogo-mark)",fallback:"rgb(255 77 77)"},squareHalf:no,triangle:us,outlineWidth:hs,keylineWidth:.2,reach:Math.max(Math.hypot(no,no),...us.map(([e,t])=>Math.hypot(e,t)))+hs/2},Y0={"aria-hidden":!0};function ci(e,t,n,o){const r=ke.squareHalf;return(e==="modelled"?ke.triangle:[[-r,-r],[r,-r],[r,r],[-r,r]]).map(([a,i])=>[t+a*o,n+i*o])}const di=[{ring:"light",color:"rgb(250 250 250)",widths:2},{ring:"dark",color:"rgb(5 5 5)",widths:1}];function ui(e,t,n){const o=e==="current"?0:ke.outlineWidth;return t*(o+2*n*ke.keylineWidth)}function V0({x:e,y:t,r:n,state:o="current",keyline:r=!1}){const s=o==="current"?"":ci(o,0,0,n).map(([a,i])=>`${a},${i}`).join(" ");return l.jsxs("g",{"data-vessel-mark":o,transform:`translate(${e} ${t})`,...Y0,children:[r&&di.map(({ring:a,color:i,widths:c})=>{const d={"data-vessel-keyline":a,fill:"none",stroke:i,strokeWidth:ui(o,n,c),strokeLinejoin:"round"};return o==="current"?l.jsx("circle",{r:n,...d},a):l.jsx("polygon",{points:s,...d},a)}),o==="current"?l.jsx("circle",{r:n,fill:ke.color}):l.jsx("polygon",{points:s,fill:o==="lost"?"none":se[o].color,stroke:o==="lost"?ke.lost.color:ke.color,strokeWidth:n*ke.outlineWidth,strokeLinejoin:"round"})]})}function pn(e,t,n){return getComputedStyle(e).getPropertyValue(t).trim()||n}function hi(e,t,n,o,r){if(e.beginPath(),t==="current"){e.arc(n,o,r,0,Math.PI*2);return}ci(t,n,o,r).forEach(([s,a],i)=>{i===0?e.moveTo(s,a):e.lineTo(s,a)}),e.closePath()}function q0(e,t,n,o,r){e.save(),e.lineJoin="round";for(const{color:s,widths:a}of di)hi(e,t,n,o,r),e.strokeStyle=s,e.lineWidth=ui(t,r,a),e.stroke();e.restore()}function K0(e,t,n,o,r,s=4,{keyline:a=!1}={}){a&&q0(t,n,o,r,s);const i=pn(e,ke.cssVar,ke.fallback);if(t.save(),hi(t,n,o,r,s),n==="current")t.fillStyle=i,t.fill();else{if(n!=="lost"){const c=se[n];t.fillStyle=pn(e,c.cssVar,c.fallback),t.fill()}t.strokeStyle=n==="lost"?pn(e,ke.lost.cssVar,ke.lost.fallback):i,t.lineWidth=s*ke.outlineWidth,t.lineJoin="round",t.stroke()}t.restore()}function O1(e,t,n,o=4,r={}){const{held:s,modelled:a}=n;s!==void 0&&a!==void 0&&(t.save(),t.globalAlpha=.45,t.strokeStyle=pn(e,se.modelled.cssVar,se.modelled.fallback),t.lineWidth=1,t.setLineDash([2,3]),t.beginPath(),t.moveTo(s.x,s.y),t.lineTo(a.x,a.y),t.stroke(),t.restore());for(const i of["lost","held","current","modelled"]){const c=n[i];c!==void 0&&K0(e,t,i,c.x,c.y,o,r)}}const yt=56;function fi(e,t,n,o){const r=Math.max(0,Math.min(t-1,Math.floor(n))),s=Math.max(0,Math.min(t-1,Math.floor(o))),a=Math.min(t-1,r+1),i=Math.min(t-1,s+1),c=Math.max(0,Math.min(1,n-r)),d=Math.max(0,Math.min(1,o-s)),h=e[s*t+r]+(e[s*t+a]-e[s*t+r])*c,f=e[i*t+r]+(e[i*t+a]-e[i*t+r])*c;return h+(f-h)*d}const fs=400,Z0=16,Q0=8,ps=.06,J0=3.3,eg=.6,tg=60,ng=40,gs=[6,12],ms=[48,96],cn=2;function oo(e,t,n){const o=Math.max(0,Math.min(1,(n-e)/(t-e)));return o*o*(3-2*o)}function xs(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function vs(e,t){const n=t/e,o=e<=t?.07:.09,r=J0**Math.exp(-((e-t)**2)/(2*o**2*t**2));return n**5*Math.exp(-1.25*n**4)*r}function pi(e,t,n){if(!(e>0)||!(t>0)||!(n>0)||!Number.isFinite(e+t+n))return[];const o=Math.sqrt(n*2*Math.PI/fs),r=vs(o,o),s=[];for(let a=-cn;a<=Z0*cn;a++){const i=fs/2**(a/cn),c=i/e,d=oo(gs[0],gs[1],c)*(1-oo(ms[0],ms[1],c))*(1-oo(t,2*t,i));if(d<=.001)continue;const h=2*Math.PI/i,f=Math.sqrt(n*h),m=Math.sqrt(Math.min(1,vs(f,o)/r)),x=(f>=o?ps:ps*m)/Math.sqrt(cn),g=(tg+(xs(a,1)-.5)*2*ng)*Math.PI/180;s.push({kx:h*Math.sin(g),ky:h*Math.cos(g),k:h,amplitude:x/h,omega:f,phase:xs(a,2)*2*Math.PI,weight:d})}return s.slice(0,Q0)}function og(e,t,n,o){let r=0;for(const s of e)r+=s.weight*s.amplitude*Math.cos(s.kx*t+s.ky*n-s.omega*o+s.phase);return r}const gn=gi(-.25,.3,.92),rg=2.6,sg=gi(gn[0],gn[1],gn[2]+1),ag=.8,ig=3,lg=.95,cg=.35,dg=235,ug=.5,hg=.35;function gi(e,t,n){const o=Math.hypot(e,t,n);return[e/o,t/o,n/o]}function fg(e,t,n,o){const{east0:r,north0:s,dx:a,dy:i,seconds:c,colour:d,waves:h,isSea:f}=o,[m,x,g]=gn,[v,k,E]=sg,S=h.length,C=new Float64Array(S*t),j=new Float64Array(S*t),I=new Float64Array(S*n),M=new Float64Array(S*n);for(let O=0;O<S;O++){const P=h[O];for(let V=0;V<t;V++){const te=P.kx*(r+(V+.5)*a);C[O*t+V]=Math.cos(te),j[O*t+V]=Math.sin(te)}for(let V=0;V<n;V++){const te=P.ky*(s-(V+.5)*i)-P.omega*c+P.phase;I[O*n+V]=Math.cos(te),M[O*n+V]=Math.sin(te)}}const N=new Float64Array(S),$=new Float64Array(S),L=h.map(O=>O.kx*O.weight*O.amplitude),W=h.map(O=>O.ky*O.weight*O.amplitude),K=h.map(O=>eg*O.k*O.weight*O.amplitude);for(let O=0;O<n;O++)for(let P=0;P<t;P++){const V=(O*t+P)*4;if(f&&!f(P,O)){e[V+3]=0;continue}let te=0,ne=0,ie=1;for(let J=0;J<S;J++){const pe=C[J*t+P],je=j[J*t+P],$e=I[J*n+O],Ke=M[J*n+O];N[J]=pe*$e-je*Ke,$[J]=je*$e+pe*Ke}for(let J=0;J<S;J++){const pe=S>1?1+ag*N[(J+ig)%S]:1;te-=L[J]*N[J]*pe,ne-=W[J]*N[J]*pe,ie-=K[J]*$[J]*pe}const _=1/Math.sqrt(te*te+ne*ne+ie*ie),X=(te*m+ne*x+ie*g)*_-g,le=1+rg*X;let Se=0;const qe=(te*v+ne*k+ie*E)*_;if(qe>lg){let J=qe;for(let pe=0;pe<7;pe++)J*=J;Se=255*cg*J}const fe=Math.max(0,le-1)*hg,de=Math.min(1,le)*ug;e[V]=d.r*de+(255-d.r*de)*fe+Se,e[V+1]=d.g*de+(255-d.g*de)*fe+Se,e[V+2]=d.b*de+(255-d.b*de)*fe+Se,e[V+3]=dg}}function bs(e){const t=n=>{const o=n/255;return o<=.04045?o/12.92:((o+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function pg(e,t){const n=bs(t),o=Math.max(e.r,e.g,e.b,1),r=c=>({r:Math.min(255,e.r*c),g:Math.min(255,e.g*c),b:Math.min(255,e.b*c)});let s=0,a=255/o;for(let c=0;c<32;c++){const d=(s+a)/2;bs(r(d))<n?s=d:a=d}const i=r((s+a)/2);return{r:Math.round(i.r),g:Math.round(i.g),b:Math.round(i.b)}}const gg=192,mg=30,xg="--color-info-mark",vg=.42;function bg(e,t){const n=e.view==="plan",o=t.scaleX,r=t.scaleYPrimary,s=1/(o(1)-o(0)),a=1/(r(1)-r(0)),i=E=>(E-o(0))*s,c=E=>(E-r(0))*a,d=Math.min(o(e.bounds.x0),o(e.bounds.x1)),h=Math.max(o(e.bounds.x0),o(e.bounds.x1)),f=Math.min(r(e.bounds.y0),r(e.bounds.y1)),m=Math.max(r(e.bounds.y0),r(e.bounds.y1)),x=n?d:Math.max(t.plotX0,d),g=n?h:Math.min(t.plotX1,h),v=n?f:Math.max(t.plotY0,f),k=n?m:Math.min(t.plotY1,m);return n&&(h<t.plotX0||d>t.plotX1||m<t.plotY0||f>t.plotY1)||!(g-x>=1&&k-v>=1)||!Number.isFinite(s+a)?null:{left:x,top:v,width:g-x,height:k-v,x0:i(x),x1:i(g),y0:c(k),y1:c(v)}}function ys(e,t){if(!t)return null;e.fillStyle=t;const n=/^#([0-9a-f]{6})$/i.exec(String(e.fillStyle));if(!n)return null;const o=Number.parseInt(n[1],16);return{r:o>>16&255,g:o>>8&255,b:o&255}}function yg(e,t,n){const o=ys(t,getComputedStyle(e).getPropertyValue(xg).trim());if(!o)return null;const r=n?ys(t,n):null;return r?pg(r,o):o}function wg(e,t,n,o,r,s){const a=yt,i=(n.x1-n.x0)/a,c=(n.y1-n.y0)/a,d=t.sea,h=o.scaleYPrimary(t.bounds.y0)<o.scaleYPrimary(t.bounds.y1),f=d&&d.size>1&&d.heights.length>=d.size*d.size?(x,g)=>{const v=h?g:a-1-g;return fi(d.heights,d.size,x/(a-1)*(d.size-1),v/(a-1)*(d.size-1))<0}:void 0,m=e.createImageData(a,a);fg(m.data,a,a,{east0:t.origin.east+n.x0,north0:t.origin.north+n.y1,dx:i,dy:c,seconds:r,colour:s,waves:pi(Math.max(i,c),n.x1-n.x0,t.gravity),isSea:f}),e.putImageData(m,0,0)}function kg(e,t,n,o,r){const{width:s,height:a}=e.canvas,i=$g(t,n,s),c=i.length>1?(i[i.length-1]-i[0])/(i.length-1):n.x1-n.x0,d=pi(c,n.x1-n.x0,t.gravity),h=(t.bearingDeg??90)*Math.PI/180,f=g=>(g-n.x0)/(n.x1-n.x0)*s,m=g=>(n.y1-g)/(n.y1-n.y0)*a;e.clearRect(0,0,s,a),e.beginPath(),i.forEach((g,v)=>{const k=og(d,t.origin.east+g*Math.sin(h),t.origin.north+g*Math.cos(h),o);v===0?e.moveTo(f(g),m(k)):e.lineTo(f(g),m(k))});const x=`${r.r}, ${r.g}, ${r.b}`;e.strokeStyle=`rgba(${x}, 0.9)`,e.lineWidth=1,e.stroke(),e.lineTo(f(i[i.length-1]),a),e.lineTo(f(i[0]),a),e.closePath(),e.fillStyle=`rgba(${x}, ${vg})`,e.fill()}function $g(e,t,n){const o=(e.samples??[]).filter(r=>r>t.x0&&r<t.x1);return e.samples&&e.samples.length>1?[t.x0,...o,t.x1]:Array.from({length:n+1},(r,s)=>t.x0+s/n*(t.x1-t.x0))}function _g({layer:e,frame:t}){const n=bg(e,t),o=p.useRef(null),r=p.useRef(null);r.current=n?{layer:e,at:n,frame:t}:null;const s=n?e.view==="plan"?yt:Math.max(1,Math.min(gg,Math.round(n.width))):0,a=n?e.view==="plan"?yt:Math.max(1,Math.round(n.height*s/n.width)):0,i=e.tint;return p.useEffect(()=>{const c=o.current,d=c?.getContext("2d")??null;if(!c||!d||s===0||a===0)return;const h=yg(c,d,i);if(!h)return;const f=()=>{const S=r.current;if(!S)return;const C=Date.now()/1e3;S.layer.view==="plan"?wg(d,S.layer,S.at,S.frame,C,h):kg(d,S.layer,S.at,C,h)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let x=!0;const g=typeof IntersectionObserver=="function"?new IntersectionObserver(S=>{x=S.some(C=>C.isIntersecting)}):null;g?.observe(c);let v=Number.NEGATIVE_INFINITY,k=0;const E=S=>{k=requestAnimationFrame(E),!(!x||document.hidden||S-v<1e3/mg)&&(v=S,f())};return k=requestAnimationFrame(E),()=>{cancelAnimationFrame(k),g?.disconnect()}},[s,a,i]),n?l.jsx("g",{"aria-hidden":"true","data-plot-layer":e.id,"data-plot-layer-kind":"water",children:l.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:l.jsx("canvas",{ref:o,width:s,height:a,style:{display:"block",width:"100%",height:"100%",imageRendering:e.view==="plan"?"pixelated":"auto"}})})}):null}const Mg={faint:.45,normal:.85,bright:1},Sg=1.5,jg=5,Eg=.9,Tt=7,Pt=6,ro=10,wt=9,We=12,Ag=6.2,so=4,Ig=9,Rg=13,Cg=.1,Wt={paintOrder:"stroke",strokeWidth:3,strokeLinejoin:"round"},ao=5,Tg=.5,Pg=.5;function Ve(e){return ce[e.tone??"neutral"]}function Vt(e){return we[e.tone??"neutral"]}function Oe(e){return Mg[e.emphasis??"normal"]}function ze(e,t){return t.axis==="secondary"?e.scaleYSecondary:e.scaleYPrimary}function Lg(e){const t=e.axis==="secondary"?"secondary":"primary";switch(e.kind){case"series":return{xs:e.points.map(n=>n.x),ys:e.points.map(n=>n.y),axis:t};case"region":return{xs:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.x),ys:[...e.boundary,...e.boundaryHigh??[]].map(n=>n.y),axis:t};case"rule":return e.along==="y"?{xs:[],ys:[e.value],axis:t}:{xs:[e.value],ys:[],axis:t};case"marker":case"annotation":return{xs:[e.at.x],ys:[e.at.y],axis:t};default:return{xs:[],ys:[],axis:t}}}const Zo=5.8,gt=11,ws=4;function Ng(e,t){const n=t.text.length*Zo,{frame:o}=t,r=t.anchorX+t.gap,s=r+n<=o.plotX1-4?"start":"end",a=s==="start"?r:t.anchorX-t.gap,i=s==="start"?a:a-n,c=i+n,d=f=>e.some(m=>i<m.x1&&c>m.x0&&f-gt<m.y1&&f+2>m.y0);let h=t.anchorY+3;for(let f=0;f<ws&&d(h);f++)h+=gt;if(d(h)){h=t.anchorY+3;for(let f=0;f<ws&&d(h);f++)h-=gt}return h=Math.min(Math.max(h,o.plotY0+gt),o.plotY1-gt),e.push({x0:i,x1:c,y0:h-gt,y1:h+2}),{x:a,y:h,anchor:s}}function Og(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function Fg(e){if(e.length===0)return"";const t=[`M${e[0].x.toFixed(2)},${e[0].y.toFixed(2)}`];for(let n=1;n<e.length;n++)t.push(`H${e[n].x.toFixed(2)}`,`V${e[n].y.toFixed(2)}`);return t.join(" ")}function mi(e,t,n){if(e.length===0)return[];const o=e[0],r=e[e.length-1],s=[...e];if(t==="right"||t==="left"){const a=t==="right"?n.plotX1:n.plotX0;s.push({x:a,y:r.y},{x:a,y:o.y})}else{const a=t==="above"?n.plotY0:n.plotY1;s.push({x:r.x,y:a},{x:o.x,y:a})}return s}function Dg(e,t){const n=[];for(const o of e){if(o.kind==="relief"||o.kind==="water"){const a=ze(t,o),{x0:i,y0:c,x1:d,y1:h}=o.bounds;n.push([{x:t.scaleX(i),y:a(c)},{x:t.scaleX(d),y:a(c)},{x:t.scaleX(d),y:a(h)},{x:t.scaleX(i),y:a(h)}]);continue}if(o.kind!=="region"||o.hatched)continue;const r=ze(t,o),s=o.boundary.map(a=>({x:t.scaleX(a.x),y:r(a.y)}));if(!(s.length<2))if(o.side==="between"){if(!o.boundaryHigh)continue;n.push([...s,...o.boundaryHigh.map(a=>({x:t.scaleX(a.x),y:r(a.y)})).reverse()])}else n.push(mi(s,o.side,t))}return(o,r)=>n.some(s=>{let a=!1;for(let i=0,c=s.length-1;i<s.length;c=i++){const d=s[i],h=s[c];d.y>r!=h.y>r&&o<(h.x-d.x)*(r-d.y)/(h.y-d.y)+d.x&&(a=!a)}return a})}function zg({layer:e,frame:t}){if(e.stops.length===0)return null;const n=ze(t,e),o=e.along==="y"?t.plotY1-t.plotY0:t.plotX1-t.plotX0;if(o<=0)return null;const r=e.along==="y"?t.plotY0:t.plotX0,s=e.along==="y"?n:t.scaleX,a=e.maxOpacity??Pg,i=e.tint??Ve(e),c=e.blur!==void 0?Math.ceil(e.blur*3):0,d=`plot-field-${e.id}-${t.uid}`,h=`plot-field-blur-${e.id}-${t.uid}`,f=e.along==="y"?t.plotY1:t.plotX1,m=e.stops.map(x=>({offset:(s(x.at)-r)/o*100,intensity:Math.max(0,Math.min(1,x.intensity))})).sort((x,g)=>x.offset-g.offset);return l.jsxs(l.Fragment,{children:[l.jsxs("defs",{children:[l.jsx("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:t.plotX0,y1:t.plotY0,x2:e.along==="x"?f:t.plotX0,y2:e.along==="y"?f:t.plotY0,children:m.map((x,g)=>l.jsx("stop",{offset:`${x.offset.toFixed(2)}%`,stopColor:i,stopOpacity:a*x.intensity},g))}),e.blur!==void 0&&l.jsx("filter",{id:h,children:l.jsx("feGaussianBlur",{stdDeviation:e.blur})})]}),l.jsx("rect",{"data-plot-layer":e.id,"data-plot-layer-kind":"field",x:t.plotX0-c,y:t.plotY0-c,width:t.plotX1-t.plotX0+2*c,height:t.plotY1-t.plotY0+2*c,fill:`url(#${d})`,filter:e.blur!==void 0?`url(#${h})`:void 0})]})}const Hg=6,mt=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function Bg(e){const t=Math.max(0,Math.min(1,e));for(let n=1;n<mt.length;n++)if(t<=mt[n][0]){const[o,r]=mt[n-1],[s,a]=mt[n],i=s>o?(t-o)/(s-o):0;return[Math.round(r[0]+(a[0]-r[0])*i),Math.round(r[1]+(a[1]-r[1])*i),Math.round(r[2]+(a[2]-r[2])*i)]}return mt[mt.length-1][1]}const Wg=[150,156,160],Xg=[200,80,70];function Ug(e,t){if(t===3)return Wg;if(t!==1&&t!==2)return e;const n=.3*e[0]+.59*e[1]+.11*e[2],o=(s,a,i)=>s+(i-s)*a,r=e.map(s=>o(o(s,.5,n),.06,235));return t===1?r:r.map((s,a)=>o(s,.3,Xg[a]))}function Gg(e,t){const n=2*(t-1),o=(e%n+n)%n;return o<t?o:n-o}function Yg(e,t,n,o,r,s,a){const i=e[s*n+a],c=r?Gg(i,o):i,[d,h,f]=Ug(Bg(c/(o-1)),t[s*n+a]),m=a>0?e[s*n+a-1]:i,x=s>0?e[(s-1)*n+a]:i,g=m!==i||x!==i?.5:1;return`rgb(${Math.round(d*g)}, ${Math.round(h*g)}, ${Math.round(f*g)})`}function Vg(e,t){const{bounds:n}=e,o=ze(t,e),r=t.scaleX(n.x0),s=t.scaleX(n.x1),a=o(n.y0),i=o(n.y1),c=Math.abs(s-r)/yt,d=Math.abs(i-a)/yt;return!(c>0)||!(d>0)?null:{left:Math.min(r,s),top:Math.min(a,i),cellW:c,cellH:d,flipRows:a<i}}function qg(e,t){const{size:n,values:o}=e;if(!t||n<2||o.length<n*n)return null;const{left:r,top:s,cellW:a,cellH:i,flipRows:c}=t;let d=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY;for(let j=0;j<n*n;j++){const I=o[j];if(!Number.isFinite(I))return null;I<d&&(d=I),I>h&&(h=I)}const f=h-d,m=e.bandMetres!=null&&e.bandMetres>0?e.bandMetres:null,x=e.veil,g=Math.max(2,e.bands??Hg),v=yt,k=new Int16Array(v*v),E=new Uint8Array(v*v),S=x!=null&&x.length>=n*n;for(let j=0;j<v;j++)for(let I=0;I<v;I++){const M=I/(v-1)*(n-1),N=j/(v-1)*(n-1);S&&(E[j*v+I]=x[Math.round(N)*n+Math.round(M)]??0);const $=fi(o,n,M,N);if(m!=null){k[j*v+I]=Math.floor($/m);continue}const L=f>0?($-d)/f:.5;k[j*v+I]=Math.max(0,Math.min(g-1,Math.floor(L*g)))}const C=[];for(let j=0;j<v;j++){const I=c?j:v-1-j;let M=0,N="";for(let $=0;$<=v;$++){const L=$<v?Yg(k,E,v,g,m!=null,j,$):"";if($===0){N=L;continue}L===N&&$<v||(C.push(l.jsx("rect",{x:r+M*a,y:s+I*i,width:($-M)*a+.5,height:i+.5,fill:N},`${j}-${M}`)),M=$,N=L)}}return C}function Kg({layer:e,frame:t}){const n=Vg(e,t),{values:o,size:r,veil:s,bandMetres:a,bands:i}=e,{left:c,top:d,cellW:h,cellH:f,flipRows:m}=n??{},x=p.useMemo(()=>qg(e,n),[o,r,s,a,i,c,d,h,f,m]);return x?l.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:Oe(e),"aria-hidden":"true",children:x}):null}function Zg({layer:e,frame:t}){const n=p.useId(),o=ze(t,e),r=d=>({x:t.scaleX(d.x),y:o(d.y)}),s=e.boundary.map(r);if(s.length<2)return null;const a=e.side==="between"?[...s,...(e.boundaryHigh??[]).map(r).reverse()]:mi(s,e.side,t);if(e.side==="between"&&!e.boundaryHigh)return null;const i=e.side==="right"?t.plotX1-4:e.side==="left"?t.plotX0+11:s[s.length-1].x,c=(t.plotY0+t.plotY1)/2;return l.jsxs(l.Fragment,{children:[e.hatched&&l.jsx("defs",{children:l.jsx("pattern",{id:n,width:ao,height:ao,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:l.jsx("line",{x1:0,y1:0,x2:0,y2:ao,stroke:Ve(e),strokeWidth:1,strokeOpacity:e.opacity??Tg})})}),l.jsx("polygon",{"data-plot-layer":e.id,"data-plot-layer-kind":"region","data-hatched":e.hatched?"":void 0,points:a.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:e.hatched?`url(#${n})`:Ve(e),fillOpacity:e.hatched?void 0:e.opacity??Cg}),t.labels&&e.label&&l.jsx("text",{x:i,y:c,transform:`rotate(-90 ${i} ${c})`,textAnchor:"middle",fontSize:Ig,letterSpacing:"0.14em",fill:"var(--color-text-muted)",stroke:"var(--color-surface-raised)",...Wt,children:e.label})]})}function Qg({layer:e,frame:t}){const n=ze(t,e),o=e.points.map(s=>({x:t.scaleX(s.x),y:n(s.y)}));if(o.length===0)return null;const r=Sg*(e.weight??1);if(e.style==="scatter"){const s=e.radius===void 0?r:Math.abs(t.scaleX(e.radius)-t.scaleX(0));return l.jsx("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",fill:Ve(e),opacity:Oe(e),children:o.map((a,i)=>l.jsx("circle",{cx:a.x,cy:a.y,r:s},i))})}return l.jsx("path",{"data-plot-layer":e.id,"data-plot-layer-kind":"series",d:e.style==="step"?Fg(o):Og(o),fill:"none",stroke:Ve(e),strokeOpacity:Oe(e),strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:e.dashed?"5 3.5":void 0})}function Jg({layer:e,frame:t}){const n=ze(t,e),o=e.dashed??!0,r=Ve(e),s=e.along==="y",a=s?n(e.value):t.scaleX(e.value);return l.jsxs(l.Fragment,{children:[l.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"rule",x1:s?t.plotX0:a,x2:s?t.plotX1:a,y1:s?a:t.plotY0,y2:s?a:t.plotY1,stroke:r,strokeOpacity:Oe(e),strokeWidth:1,strokeDasharray:o?"4 3":void 0}),t.labels&&e.label&&l.jsx("text",{x:s?t.plotX1-4:a+3,y:s?a-3:t.plotY0+10,textAnchor:s?"end":"start",fill:Vt(e),fontSize:wt,children:e.label})]})}function em({layer:e,frame:t,placed:n}){const o=ze(t,e),r=t.scaleX(e.at.x),s=o(e.at.y),a=e.across??"x",i=Ve(e),c=t.labels&&e.label?Ng(n,{anchorX:r,anchorY:s,gap:Tt+3,text:e.label,frame:t}):null;return l.jsxs(l.Fragment,{children:[l.jsx("line",{"data-plot-layer":e.id,"data-plot-layer-kind":"annotation",x1:a==="x"?r-Tt:r,x2:a==="x"?r+Tt:r,y1:a==="x"?s:s-Tt,y2:a==="x"?s:s+Tt,stroke:i,strokeOpacity:Oe(e),strokeWidth:1.75,strokeLinecap:"round"}),c&&e.label&&l.jsx("text",{x:c.x,y:c.y,textAnchor:c.anchor,fontSize:wt,letterSpacing:"0.05em",fill:Vt(e),fillOpacity:Oe(e),children:e.label})]})}function tm({layer:e,frame:t}){const n=ze(t,e),o=t.scaleX(e.at.x),r=n(e.at.y)+(e.offsetPx??0),s=jg*(e.scale??1),a=Ve(e),i=e.shape??"dot",c={"data-plot-layer":e.id,"data-plot-layer-kind":"marker",opacity:Oe(e)},d=i==="none"?null:i==="vessel"?l.jsx("g",{...c,children:l.jsx(V0,{state:e.markState??"current",x:o,y:r,r:s*Eg,keyline:!0})}):i==="dot"?l.jsx("circle",{...c,cx:o,cy:r,r:s,fill:a,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):i==="ring"?l.jsx("circle",{...c,cx:o,cy:r,r:s,fill:"none",stroke:a,strokeWidth:1.5}):i==="cross"?l.jsx("path",{...c,d:`M${o-s},${r} L${o+s},${r} M${o},${r-s} L${o},${r+s}`,stroke:a,strokeWidth:1.5,strokeLinecap:"round"}):i==="chevron-up"||i==="chevron-down"?l.jsx("polyline",{...c,points:i==="chevron-up"?`${o-s},${r+s*.5} ${o},${r-s*.5} ${o+s},${r+s*.5}`:`${o-s},${r-s*.5} ${o},${r+s*.5} ${o+s},${r-s*.5}`,fill:"none",stroke:a,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null,h=(e.label?.length??0)*Zo/2+3,f=i==="none"?Math.min(Math.max(o,t.plotX0+h),t.plotX1-h):o+s+3,m=i==="none"?Math.min(Math.max(r+3,t.plotY0+wt+3),t.plotY1-4):r+3;return l.jsxs(l.Fragment,{children:[d,t.labels&&e.label&&l.jsx("text",{x:f,y:m,textAnchor:i==="none"?"middle":void 0,fontSize:wt,fill:Vt(e),fillOpacity:Oe(e),stroke:"var(--color-surface-raised)",...Wt,children:e.label})]})}function nm({layer:e,frame:t,row:n,edges:o}){const r=e.caption?2:1;if(e.anchor==="left-edge"||e.anchor==="right-edge"){const g=e.anchor==="left-edge"?t.plotX0+Pt+n*We:t.plotX1-Pt-n*We,v=t.plotY1-34;return l.jsx("text",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",x:g,y:v,transform:`rotate(-90 ${g} ${v})`,fontSize:wt,letterSpacing:"0.14em",fill:Vt(e),fillOpacity:Oe(e),stroke:"var(--color-surface-raised)",...Wt,children:e.text})}const s=e.anchor.startsWith("top"),a=e.anchor.endsWith("right"),i=g=>Pt+(g?Rg:0),c=a?t.plotX1-i(o.right):t.plotX0+i(o.left),d=n*(r*We+2),h=s?t.plotY0+Pt+ro+d:t.plotY1-Pt-d,f=h-We,m=Math.max(e.text.length*Ag,(e.caption?.length??0)*Zo)+2*so,x=(s?h:h-(e.caption?We:0))-ro-1;return l.jsxs("g",{"data-plot-layer":e.id,"data-plot-layer-kind":"caption",textAnchor:a?"end":"start",children:[l.jsx("rect",{x:a?c-m+so:c-so,y:x,width:m,height:r*We+1,rx:3,fill:"var(--color-surface-raised)",fillOpacity:.8}),e.caption&&l.jsx("text",{x:c,y:s?h:f,fontSize:wt,letterSpacing:"0.05em",fill:"var(--color-text-faint)",stroke:"var(--color-surface-raised)",...Wt,children:e.caption}),l.jsx("text",{x:c,y:e.caption&&s?h+We:h,fontSize:ro,fontWeight:700,fill:Vt(e),fillOpacity:Oe(e),stroke:"var(--color-surface-raised)",...Wt,children:e.text})]})}const ks={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},om={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function io({layers:e,frame:t,pass:n}){const o=e.map((i,c)=>({layer:i,index:c})).filter(({layer:i})=>om[i.kind]===n).sort((i,c)=>ks[i.layer.kind]-ks[c.layer.kind]||(i.layer.z??0)-(c.layer.z??0)||i.index-c.index),r=new Map,s=[],a={left:e.some(i=>i.kind==="caption"&&i.anchor==="left-edge"||i.kind==="region"&&i.side==="left"&&!!i.label),right:e.some(i=>i.kind==="caption"&&i.anchor==="right-edge"||i.kind==="region"&&i.side==="right"&&!!i.label)};return l.jsx(l.Fragment,{children:o.map(({layer:i,index:c})=>{const d=`${i.id}-${c}`;switch(i.kind){case"relief":return l.jsx(Kg,{layer:i,frame:t},d);case"water":return l.jsx(_g,{layer:i,frame:t},d);case"field":return l.jsx(zg,{layer:i,frame:t},d);case"region":return l.jsx(Zg,{layer:i,frame:t},d);case"series":return l.jsx(Qg,{layer:i,frame:t},d);case"rule":return l.jsx(Jg,{layer:i,frame:t},d);case"annotation":return l.jsx(em,{layer:i,frame:t,placed:s},d);case"marker":return l.jsx(tm,{layer:i,frame:t},d);case"caption":{const h=r.get(i.anchor)??0;return r.set(i.anchor,h+1),l.jsx(nm,{layer:i,frame:t,row:h,edges:a},d)}default:return null}})})}function rm(e){return e.map(t=>t.description).filter(t=>typeof t=="string"&&t.length>0)}const $s=11,dn=3,un=4,_s=(e,t)=>e.x0<t.x1&&t.x0<e.x1&&e.y0<t.y1&&t.y0<e.y1;function sm(e,t,n,o,r){let s=0,a=1;const i=n-e,c=o-t,d=[[-i,e-r.x0],[i,r.x1-e],[-c,t-r.y0],[c,r.y1-t]];for(const[h,f]of d){if(h===0&&f<0)return!1;if(h!==0){const m=f/h;h<0?s=Math.max(s,m):a=Math.min(a,m)}}return s<=a}function am(e,t){for(let n=1;n<e.cx.length;n++){const o=[e.cx[n-1],e.cy[n-1],e.cx[n],e.cy[n]];if(o.every(Number.isFinite)&&sm(o[0],o[1],o[2],o[3],t))return!0}return!1}function im({labels:e,plot:t,obstacles:n,traces:o}){const r=[],s=new Map;for(const a of e){const i={y0:a.lineY-dn-$s,y1:a.lineY-dn},c={y0:a.lineY+dn,y1:a.lineY+dn+$s},d={x0:t.x1-un-a.width,x1:t.x1-un},h={x0:t.x0+un,x1:t.x0+un+a.width},f=[{...d,...i,anchor:"end"},{...d,...c,anchor:"end"},{...h,...i,anchor:"start"},{...h,...c,anchor:"start"}];let m=null;for(const x of f){if(!(x.x0>=t.x0&&x.x1<=t.x1&&x.y0>=t.y0&&x.y1<=t.y1)||r.some(k=>_s(x,k)))continue;const v=2*n.filter(k=>_s(x,k)).length+o.filter(k=>am(k,x)).length;(m===null||v<m.cost)&&(m={spot:x,cost:v})}if(m===null){s.set(a.id,null);continue}r.push(m.spot),s.set(a.id,{x:m.spot.anchor==="end"?m.spot.x1:m.spot.x0,y:m.spot.y1-2,anchor:m.spot.anchor})}return s}function lm(e,t,n,o="linear"){const r=n&&hm(t,n)?0:t;if(n&&o==="log")return _e(Ce(e,r),{decimals:ko(e,r).decimals});if(!n)return _e(Ce(e,r),{decimals:0});const s=cm(e,n)?e:void 0;return _e(Ce(e,r),{decimals:fm(e,r,n,s),...s?{format:s}:{}})}function cm(e,t){const n=t.map(o=>_e(Ce(e,o),{decimals:mn}));return n.some((o,r)=>r>0&&o===n[r-1])}function dm(e,t){const n=new Set(t.map(o=>lm(e,o,t).replace(/^[\d.,\s-]+/,"")));return n.size===1?[...n][0]:void 0}function um(e,t,n){const o=dm(t,n);if(o===void 0)return e;const r=cl({magnitude:0,unit:t},{format:t}).symbol,s=` (${r})`;return r!==""&&e.endsWith(s)?`${e.slice(0,-s.length)} (${o})`:e}function hm(e,t){const n=t.length>1?Math.abs(t[1]-t[0]):0;return n>0&&Math.abs(e)<n*1e-6}const mn=3;function xi(e){return{figure:Number.parseFloat(e.replace(/[^\d.-]/g,"")),unit:e.replace(/[\d.,\s-]/g,"")}}function ko(e,t,n){const o=s=>xi(_e(Ce(e,t),{decimals:s,...n?{format:n}:{}})),r=o(mn);for(let s=0;s<mn;s++)if(o(s).figure===r.figure)return{decimals:s,unit:r.unit};return{decimals:mn,unit:r.unit}}function fm(e,t,n,o){const r=ko(e,t,o);let s=r.decimals;for(const a of n){const i=ko(e,a,o);i.unit===r.unit&&(s=Math.max(s,i.decimals))}return s}function F1(e){const t=xi(_e(e,{decimals:3})),n=Math.abs(t.figure),o=Number.isFinite(n)&&n>0?Math.max(0,2-Math.floor(Math.log10(n))):0;return _e(e,{decimals:o})}function lo(e,t,n){for(let o=n;o<6;o++){const r=e.map(s=>(s/t).toFixed(o));if(r.every((s,a)=>a===0||s!==r[a-1]))return o}return 6}const pm=4,hn=2,gm=2.5;function mm(e,t){if(e.length===0)return!1;const n=e[e.length-1]-t;return n===0?!0:e.length===1?!1:Math.sign(e[0]-t)!==Math.sign(n)}function xm(e,t){return e==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:t?e==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const vm=(e,t)=>ai(e-t[0],t[1]-t[0]),D1=(e,t)=>ai((e-t[0])*1e3,(t[1]-t[0])*1e3),co={top:10,bottom:28,left:50};function vi(e,t,n){const o=(s,a,i)=>Math.max(s,Math.min(i,a)),r=o(30,Math.round(e*.18),co.left);return{top:co.top,right:n?r:o(14,Math.round(e*.07),20),bottom:t<150?20:co.bottom,left:r}}const Ms=e=>e.length*6.5+6,bm=4,ym=.4,wm=26,rt=14,km=160,Ae=16,fn=4,$m=6,Lt=(e,t)=>Math.min(e.length*6+8,t);function _m(e,t){const n=[];let o=0,r=0;for(const s of e)r>0&&r+s>t&&(o+=1,r=0),n.push({row:o,x:r}),r+=s+$m;return{rows:e.length===0?0:o+1,positions:n}}const Ss=4,Mm=.03;function uo(e,t){const n=Math.max(0,Math.floor(t/6));if(e.length<=n)return e;const o=e.lastIndexOf(" (");if(o>0&&e.length-o+4<=n){const r=n-(e.length-o)-3;return`${e.slice(0,r)}...${e.slice(o)}`}return n<4?"":`${e.slice(0,n-3)}...`}function js(e,t){const n=e.split(/(?=M)/).filter(r=>r.length>0),o=[];for(const r of n){const s=[...r.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)];if(s.length<2)continue;const a=s[0],i=s[s.length-1];o.push(`${r.trim()} L${i[1]},${t} L${a[1]},${t} Z`)}return o.length>0?o.join(" "):null}function Sm(e,t,n,o,r=1){const s=[],a=wm*Math.max(.5,Math.min(2,r));for(let i=e+a/2;i<t;i+=a)for(let c=n+a/2;c<o;c+=a)s.push({key:`sg-${Math.round(i)}-${Math.round(c)}`,x:i,y:c});return s}const jm=120,Em=90,Am=70,Im=35,Rm=2,Cm=12,Es=8,Tm=2,Xe=14,jn=6,En=12,Pm=16,Lm=12,Nm=200,As=10,Om=.2,Is=.6,Rs="5 3",Fm=.15,Dm=.45,zm="the value is inside the shaded region";function Hm(e){const t=[...e.data.y];(e.type??"line")==="band"&&e.data.y2&&t.push(...e.data.y2);for(const n of e.data.reckoned??[])n.bandLo&&n.bandHi&&t.push(...n.bandLo,...n.bandHi);for(const n of e.data.bridges??[])t.push(...n.v);return t.filter(Number.isFinite)}const Bm=1e-5,Wm=1e-9;function Xm({series:e,thresholds:t,yTickFormat:n}){const o=s=>s*jn,r=[];for(const s of e)r.push(o(s.label.length)+8);for(const s of t){if(s.kind==="marker"&&!s.label)continue;const a=s.label??n(s.value);r.push(o(a.length)+En+8)}return Math.max(0,...r)+Cm}function Um({width:e,height:t,hasSecondary:n,series:o,thresholds:r}){const s=r.filter(h=>h.label);if(o.length===0||s.length===0)return!1;const a=Math.max(...o.map(h=>h.label.length*6+8)),i=Math.max(...s.map(h=>(h.label?.length??0)*jn+En)),c=vi(e,t,n),d=e-c.left-c.right-rt-Pm;return a+i+Lm>d}function z1({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:o,xTickFormat:r=vm,yTickFormat:s=Gm,yScalePrimary:a="linear",yScaleSecondary:i="linear",thresholds:c,legend:d="overlay",hideXAxis:h=!1,density:f="chart",spatial:m=!1,gridScale:x=1,layers:g,"aria-label":v,crosshair:k=!1,xKind:E="time",xReadFormat:S,xAxisLabel:C,yAxisLabel:j,ySecondaryAxisLabel:I,yTickUnit:M,card:N,cardForms:$=1,plotNotice:L,width:W,height:K}){const O=p.useId(),P=f==="compact",V=P?"none":d,te=m,ne=te||P,ie=k&&!ne&&e.some(u=>u.data.x.length>0),[_,X]=p.useState(null),[le,Se]=p.useState(!1),[qe,fe]=p.useState(""),[de,J]=p.useState(null),[pe,je]=p.useState(null),$e=pe?.w===W&&pe.h===K?pe.form:0,[Ke,Ze]=p.useState(null),Qe=N!=null,ue=Ke?.form===$e?Ke:null;p.useLayoutEffect(()=>{if(!de){Ze(null);return}const u=()=>Ze(y=>{const R={w:de.offsetWidth,h:de.offsetHeight,form:$e};return y?.w===R.w&&y?.h===R.h&&y?.form===R.form?y:R});u();const b=new ResizeObserver(u);return b.observe(de),()=>b.disconnect()},[de,$e]);const G=W,oe=K,Te=e.filter(u=>u.axis==="primary"&&u.data.x.length>0),Je=e.filter(u=>u.axis==="secondary"&&u.data.x.length>0),Fe=Je.length>0,bi=V!=="none"&&e.length>0||(c??[]).some(u=>u.label),Qo=Xm({series:e,thresholds:c??[],yTickFormat:s}),Jo=Qe&&ue!==null&&ue.w+Es<=Math.max(112,Math.ceil(Qo)),er=ne||!bi?{placement:"overlay"}:E0({width:G,height:oe,contentWidth:Qo,legendHeight:V==="none"?0:e.length*Ae+6,cardHeight:Jo&&ue!==null?ue.h:0}),$t=er.placement==="overlay"&&!ne&&V!=="none"&&oe>=Nm&&Um({width:G,height:oe,hasSecondary:Fe,series:e,thresholds:c??[]})?{placement:"below"}:er,Pe=V!=="none"&&($t.placement==="below"||$t.placement==="beside"&&$t.legendBelow),zn=Pe?_m(e.map(u=>Lt(u.label,G-2*fn)),G-2*fn):{rows:0,positions:[]},Hn=zn.rows===0?0:zn.rows*Ae+4,tr=G>=km,nr=!ne&&!h&&!!C,or=!ne&&tr&&!!j,rr=!ne&&tr&&Fe&&!!I,Zt=te?0:1,sr=ne?{top:Zt,right:Zt,bottom:Zt,left:Zt}:vi(G,oe,Fe),it={...sr,bottom:sr.bottom+(nr?rt:0)+Hn},Y=it.top,Z=oe-it.bottom,Le=Z-Y,Qt=p.useMemo(()=>{const u={primary:[],secondary:[]};for(const b of g??[]){const y=Lg(b);u[y.axis].push(...y.ys)}return u},[g]),lt=p.useMemo(()=>Cs(Te,n,a,Qt.primary),[Te,n,a,Qt]),ct=p.useMemo(()=>Cs(Je,o,i,Qt.secondary),[Je,o,i,Qt]),ge=a==="log"?ds(lt[0],lt[1],Z,Y):to(lt[0],lt[1],Z,Y),me=i==="log"?ds(ct[0],ct[1],Z,Y):to(ct[0],ct[1],Z,Y),ar=Math.max(2,Math.min(7,Math.round(Le/Im))),Bn=(u,b,y,R)=>{const T=Math.min(u,b),F=Math.max(u,b),A=(F-T)*1e-6||1e-6,B=Q=>Q>=T-A&&Q<=F+A,q=Q=>R==="log"?G0(T,F,Q):wo(T,F,Q);for(let Q=y;Q<=64;Q*=2){const ye=q(Q).filter(B);if(ye.length<2)continue;if(ye.length<=y)return ye;const It=(ye.length-1)/(y-1),tn=Array.from({length:y},(qm,Fi)=>ye[Math.round(Fi*It)]);return Array.from(new Set(tn))}return[T,F]},_t=Bn(lt[0],lt[1],ar,a==="log"?"log":"linear"),Jt=Fe?Bn(ct[0],ct[1],ar,i==="log"?"log":"linear"):[],ir=(u,b)=>u.length===0?b:Math.max(b,Math.min(Math.round(G*ym),Math.max(...u.map(y=>Ms(s(y,u))))+bm)),Wn=ne?it:{left:ir(_t,it.left)+(or?rt:0),right:(Fe?ir(Jt,it.right):it.right)+(rr?rt:0)},U=Wn.left,Xn=$t.placement==="beside"?$t.columnWidth:0,ae=G-Wn.right-Xn,xe=ae-U,lr=G-Xn-rt/2,et=xe>=jm&&Le>=Em,ee=Xn>0?{x0:ae+(Fe?Wn.right:0)+Es,y0:Y,x1:G-Tm,y1:Z}:void 0,cr=V==="none"||ee||Pe?[]:e.map((u,b)=>({x0:U+3,y0:Y+6+b*Ae,x1:U+3+Lt(u.label,xe-6),y1:Y+6+b*Ae+13})),re=to(t[0],t[1],U,ae),yi=Math.max(2,Math.min(8,Math.round(xe/Am))),Mt=Bn(t[0],t[1],yi,"linear"),wi=p.useMemo(()=>{const u=[],b=Mt.length-1;if(b<0)return u;const y=Ms,R=6,T=A=>{const B=Mt[A],q=r(B,t,Mt),Q=re(B),ye=y(q),It=A===0?"start":A===b?"end":"middle",tn=It==="start"?Q:It==="end"?Q-ye:Q-ye/2;return{x:Q,text:q,anchor:It,leftEdge:tn,rightEdge:tn+ye}},F=T(0);if(u.push({x:F.x,text:F.text,anchor:F.anchor}),b>=1){const A=T(b);if(A.leftEdge>=F.rightEdge+R){let B=F.rightEdge;for(let q=1;q<b;q++){const Q=T(q);Q.leftEdge>=B+R&&Q.rightEdge<=A.leftEdge-R&&(u.push({x:Q.x,text:Q.text,anchor:Q.anchor}),B=Q.rightEdge)}u.push({x:A.x,text:A.text,anchor:A.anchor})}}return u},[Mt,t,re,r]),dr=(u,b)=>{const y=new Set,R=u.length;if(R===0||(y.add(0),R===1))return y;const T=16,F=b(u[0]),A=b(u[R-1]);if(Math.abs(A-F)>=T){let B=F;for(let q=1;q<R-1;q++){const Q=b(u[q]);Math.abs(Q-B)>=T&&Math.abs(A-Q)>=T&&(y.add(q),B=Q)}y.add(R-1)}return y},ki=dr(_t,ge),$i=dr(Jt,me),He=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>{const b=u.axis==="primary"?ge:me,y=u.type??"line";if(y==="band")return u.data.y2?{id:u.id,kind:"band",color:u.color,opacity:u.fillOpacity??Om,d:li(u.data.x,u.data.y,u.data.y2,re,b)}:{id:u.id,kind:"noop"};if(y==="scatter"){const A=u.data.x.map((B,q)=>({cx:re(B),cy:b(u.data.y[q])}));return{id:u.id,kind:"scatter",color:u.color,points:A}}const R=y==="step"?W0:cs,T=(u.data.bridges??[]).filter(A=>B0(u.data.x,u.data.y,A,re,b)),F=[...new Set([...u.data.breaks??[],...T.map(A=>A.to)])].sort((A,B)=>A-B);return{id:u.id,kind:"stroked",color:u.color,dashed:u.dashed??!1,uncertainty:U0(u.data.x,u.data.reckoned??[],re,b),segments:X0(u.data.x,u.data.y,re,b,R,F,u.data.spans,u.data.reckoned),modelled:T.map(A=>({basis:A.basis,d:cs([u.data.x[A.to-1],...A.t,u.data.x[A.to]],[u.data.y[A.to-1],...A.v,u.data.y[A.to]],re,b)})),tail:u.data.x.length>0&&(u.data.reckoned??[]).some(A=>A.to>=u.data.x.length-1)?{cx:re(u.data.x[u.data.x.length-1]),cy:b(u.data.y[u.data.y.length-1])}:null,observed:[...new Set(T.flatMap(A=>[A.to-1,A.to]))].map(A=>({cx:re(u.data.x[A]),cy:b(u.data.y[A])}))}}),[e,re,ge,me]),tt=p.useMemo(()=>c?c.map(u=>{const b=u.axis??"primary",y=e.filter(T=>T.axis===b&&T.type!=="band"&&!T.dashed),R=u.kind==="limit"?y.some(T=>{const F=T.data.y.filter(A=>Number.isFinite(A));return F.length>0&&si(F[F.length-1],u.value,u.bad)}):u.kind==="target"&&y.some(T=>mm(T.data.y,u.value));return{id:u.id,label:u.label,spokenLabel:u.spokenLabel,value:u.value,kind:u.kind,passed:R,currency:An(u.reading,{drawsReckoning:!0}),tone:xm(u.kind,R),dashed:u.kind!=="marker",y:b==="primary"?ge(u.value):me(u.value)}}):[],[c,e,ge,me]),St=p.useMemo(()=>{const u=(b,y,R)=>Math.max(b,Math.min(R,y));return(c??[]).flatMap(b=>{if(b.kind!=="limit"||!Number.isFinite(b.value))return[];const y=b.axis??"primary",R=y==="primary"?ge:me,T=R(b.value),F=b.bad==="above"?-1:1,A=b.label||`the limit at ${s(b.value)}`;return e.filter(B=>B.axis===y&&B.data.x.length>0&&(B.type??"line")!=="band"&&!B.dashed).flatMap(B=>z0({y:B.data.y,cx:B.data.x.map(re),cy:B.data.y.map(R),limit:b.value,limitY:T,bad:b.bad,breaks:B.data.breaks,step:B.type==="step"||B.type==="scatter",minGapPx:Xe}).slice(et?0:-1).map(q=>{const Q=s(B.data.y[q.index]),ye=r(B.data.x[q.index],t);return{key:`${b.id}-${B.id}-${q.index}`,color:B.color,x:u(U+Xe/2+1,q.x-As*(q.entered?1:-1),ae-Xe/2-1),y:u(Y+Xe/2+1,q.y+F*As,Z-Xe/2-1),text:q.entered?q.spells>1?`${B.label} went past ${A} ${q.spells} times from ${ye}, first reading ${Q}`:`${B.label} went past ${A} at ${ye}, reading ${Q}`:`${B.label} was already past ${A} when this window began at ${ye}, reading ${Q}`}}))})},[c,e,re,ge,me,r,s,t,U,ae,Y,Z,et]),he=(()=>{if(!Qe||ue===null||ne)return;if(ee&&Jo){const T={x0:ee.x0,y0:Z-ue.h,x1:ee.x0+ue.w,y1:Z},F=Y+(V==="none"||Pe?0:e.length*Ae+6);return T.x1<=ee.x1&&T.y0>=F?T:void 0}const u=Xe/2,b=[...e.filter(T=>(T.type??"line")!=="band").flatMap(T=>{const F=T.axis==="primary"?ge:me,A=T.data.x.map(re),B=T.data.y.map(F);return T.type==="scatter"?A.map((q,Q)=>({cx:[q],cy:[B[Q]]})):[{cx:A,cy:B}]}),...tt.map(T=>({cx:[U,ae],cy:[T.y,T.y]}))],y=[...St.map(T=>({x0:T.x-u,y0:T.y-u,x1:T.x+u,y1:T.y+u})),...V==="none"||ee||Pe?[]:e.map((T,F)=>({x0:U+3,y0:Y+6+F*16,x1:U+3+Math.min(T.label.length*6+8,xe-6),y1:Y+6+F*16+13}))],R=T0({plot:{x0:U,y0:Y,x1:ae,y1:Z},card:{width:ue.w,height:ue.h},traces:b,obstacles:y});return R?{x0:R.x,y0:R.y,x1:R.x+ue.w,y1:R.y+ue.h}:void 0})(),dt=p.useMemo(()=>{if(!et)return new Map;const u=Xe/2;return im({labels:tt.filter(b=>b.label).map(b=>({id:b.id,width:(b.label?.length??0)*jn+(b.currency.held?En:0),lineY:b.y})),plot:ee??{x0:U,y0:Y,x1:ae,y1:Z},obstacles:[...he?[he]:[],...St.map(b=>({x0:b.x-u,y0:b.y-u,x1:b.x+u,y1:b.y+u})),...V==="none"||Pe?[]:e.map((b,y)=>({x0:ee?ee.x0:U+3,y0:Y+6+y*Ae,x1:(ee?ee.x0:U+3)+Lt(b.label,ee?ee.x1-ee.x0:xe-6),y1:Y+6+y*Ae+13}))],traces:(ee?[]:e).filter(b=>(b.type??"line")!=="band").map(b=>({cx:b.data.x.map(re),cy:b.data.y.map(b.axis==="primary"?ge:me)}))})},[et,he,ee,tt,St,V,Pe,e,re,ge,me,U,ae,Y,Z,xe]),_i=(()=>{const u=Y+6;if(V==="none"||Pe||e.length===0)return u;const b=ee?ee.x0:U+3,y=b+Math.max(...e.map(F=>Lt(F.label,ee?ee.x1-ee.x0:xe-6))),R=tt.flatMap(F=>{const A=dt.get(F.id);if(!F.label||!A)return[];const B=F.label.length*jn+(F.currency.held?En:0),q=A.anchor==="end"?A.x-B:A.x;return[{x0:q,y0:A.y-9,x1:q+B,y1:A.y+2}]});he&&R.push(he);const T=e.length*Ae-3;for(let F=u;F+T<=Z;F+=Ae){const A={x0:b,y0:F,x1:y,y1:F+T};if(!R.some(B=>A.x0<B.x1&&B.x0<A.x1&&A.y0<B.y1&&B.y0<A.y1))return F}return u})(),Mi=e.flatMap(u=>{const b=He.find(A=>A.id===u.id),y=b?.kind==="stroked"?b.modelled.map(A=>A.basis):[],R=u.data.reckoned??[];if(R.length===0&&y.length===0)return[];const F=[...new Set([...R.map(A=>A.basis),...y])].map(A=>`${u.label}: part of this trace is reckoned, ${I0(A)}, not measured`);return R.some(A=>A.bandLo&&A.bandHi)&&F.push(`${u.label}: ${zm}`),F}),Si=tt.flatMap(u=>{const b=u.spokenLabel??u.label??u.id,y=[];return u.passed&&u.kind==="limit"&&y.push(`${b}: limit passed`),u.passed&&u.kind==="target"&&y.push(`${b}: target reached`),u.currency.held&&y.push(ba(b,u.currency.caption)),u.label&&!dt.get(u.id)&&y.length===0&&y.push(u.spokenLabel??u.label),y}),Un=[...Mi,...Si],ji=[v??"Telemetry line chart",...rm(g??[]),...Un].join("; "),Gn=p.useMemo(()=>e.filter(u=>u.data.x.length>0).map(u=>E==="value"?N0(u):u),[e,E]),Yn=p.useMemo(()=>ie?F0(Gn):[],[ie,Gn]),jt=Math.min(t[0],t[1]),Et=Math.max(t[0],t[1]),Ei=E==="value"?(Et-jt)*Mm:void 0;function ur(u){const b=Gn.map(y=>{const R=O0(y,u,Ei),T=y.format??s,F=y.axis==="primary"?ge:me,A=(y.type??"line")==="band";return R===null?{id:y.id,label:y.label,color:y.color,value:null}:{id:y.id,label:y.label,color:y.color,value:A&&R.y2!==void 0?`${T(R.y)} to ${T(R.y2)}`:T(R.y),currency:R.currency==="measured"?void 0:R.currency,modelled:R.currency==="modelled",y:A?void 0:F(R.y)}});if(et)for(const y of tt)y.kind!=="marker"&&b.push({id:`threshold-${y.id}`,label:y.kind,color:y.tone.label,value:y.label??s(y.value),detail:!0,currency:y.currency.held?y.currency.mark==="modelled"?"modelled":"held":void 0,modelled:y.currency.held&&y.currency.mark==="modelled"});return{heading:(S??r)(u,t),rows:b}}function hr(u){const{heading:b,rows:y}=ur(u);return[b,...y.map(R=>`${R.label} ${R.value??"no sample"}${R.currency?`, ${R.currency}`:""}`)].join("; ")}const fr=e.filter(u=>(u.type??"line")!=="band").map(u=>({cx:u.data.x.map(re),cy:u.data.y.map(u.axis==="primary"?ge:me)})),pr=he?[...fr,P0(he)]:fr,gr=Qe&&!ne&&ue!==null&&ue.w>0&&ue.h>0&&!he&&$e<$-1;p.useLayoutEffect(()=>{gr&&je({w:W,h:K,form:$e+1})},[gr,W,K,$e]);const Ai=u=>{let b=u,y=Number.POSITIVE_INFINITY;for(const R of Yn)R<jt||R>Et||Math.abs(R-u)<y&&(y=Math.abs(R-u),b=R);return b},nt=ie&&_!==null&&_.at>=jt&&_.at<=Et?Ai(_.at):null,ut=nt===null?null:ur(nt),At=ut!==null&&nt!==null?b0({x:re(nt),plot:{x0:U,y0:Y,x1:ae,y1:Z},heading:ut.heading,rows:ut.rows,avoid:cr,traces:pr}):void 0,Ii=he!==void 0&&At!==void 0&&At.x0<he.x1&&At.x1>he.x0&&At.y0<he.y1&&At.y1>he.y0;function Ri(u){const b=u.currentTarget.getBoundingClientRect(),y=u.clientX-b.left;return y<U||y>ae?null:t[0]+(y-U)/(ae-U)*(t[1]-t[0])}function Ci(u){const b=Ri(u);if(b===null){X(y=>y?.source==="pointer"?null:y);return}X({at:b,source:"pointer"})}function Ti(u){const b=Yn.filter(F=>F>=jt&&F<=Et),y={ArrowLeft:u.shiftKey?-10:-1,ArrowRight:u.shiftKey?10:1,Home:-b.length,End:b.length};if(u.key==="Escape"){if(_===null)return;u.preventDefault(),X(null),fe("");return}const R=y[u.key];if(R===void 0)return;u.preventDefault();const T=ls(b,nt,R);T!==null&&(X({at:T,source:"keys"}),fe(hr(T)))}function Pi(u){try{Se(u.currentTarget.matches(":focus-visible"))}catch{Se(!0)}if(_!==null)return;const b=ls(Yn.filter(y=>y>=jt&&y<=Et),null,0);b!==null&&(X({at:b,source:"keys"}),fe(hr(b)))}function Li(){Se(!1),X(u=>u?.source==="keys"?null:u),fe("")}const Ni=ie?{tabIndex:0,onPointerMove:Ci,onPointerLeave:()=>X(u=>u?.source==="pointer"?null:u),onKeyDown:Ti,onFocus:Pi,onBlur:Li}:{},en={scaleX:re,scaleYPrimary:ge,scaleYSecondary:me,plotX0:U,plotX1:ae,plotY0:Y,plotY1:Z,uid:O,labels:et},Oi=te&&g?Dg(g,en):()=>!1,Vn=`plot-layer-clip-${O}`,mr=`plot-trace-clip-${O}`;if(xe<=0||Le<=0)return l.jsx("svg",{width:Math.max(0,G),height:Math.max(0,oe),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:l.jsx("title",{children:"Chart too small to render"})});const xr=l.jsxs("svg",{width:G,height:oe,role:St.length>0||ie?"group":"img","aria-label":ji,"aria-describedby":ie?`${O}-crosshair-hint`:void 0,...Ni,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...ie?{touchAction:"pan-y",outline:le?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[l.jsxs("defs",{children:[l.jsx("clipPath",{id:Vn,children:l.jsx("rect",{x:U,y:Y,width:xe,height:Le})}),l.jsx("clipPath",{id:mr,children:l.jsx("rect",{x:U-hn,y:Y-hn,width:xe+2*hn,height:Le+2*hn})})]}),Un.length>0&&l.jsx("title",{children:Un.join("; ")}),l.jsx("rect",{x:U,y:Y,width:xe,height:Le,fill:"var(--color-surface-panel)"}),g&&g.length>0&&l.jsx("g",{clipPath:`url(#${Vn})`,children:l.jsx(io,{layers:g,frame:en,pass:"background"})}),!ne&&_t.map((u,b)=>{const y=ge(u);return l.jsxs(nn.Fragment,{children:[l.jsx("line",{x1:U,y1:y,x2:ae,y2:y,stroke:"var(--color-border-subtle)",strokeWidth:1}),ki.has(b)&&l.jsx("text",{x:U-4,y,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,_t)})]},`py-${b}`)}),!ne&&Jt.map((u,b)=>$i.has(b)?l.jsx("text",{x:ae+4,y:me(u),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:s(u,Jt)},`sy-${b}`):null),!h&&!ne&&Mt.map((u,b)=>l.jsx("line",{x1:re(u),y1:Y,x2:re(u),y2:Z,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${b}`)),!h&&!ne&&wi.map((u,b)=>l.jsx("text",{x:u.x,y:Z+14,textAnchor:u.anchor,fill:"var(--color-text-faint)",fontSize:11,children:u.text},`xl-${b}`)),nr&&l.jsx("text",{x:(U+ae)/2,y:oe-Hn-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:uo(C,xe)}),or&&l.jsx("text",{x:rt/2,y:(Y+Z)/2,transform:`rotate(-90 ${rt/2} ${(Y+Z)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:uo(M&&a!=="log"?um(j,M,_t):j,Le)}),rr&&l.jsx("text",{x:lr,y:(Y+Z)/2,transform:`rotate(90 ${lr} ${(Y+Z)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:uo(I,Le)}),te&&Sm(U,ae,Y,Z,x).filter(u=>!Oi(u.x,u.y)).map(u=>l.jsx("circle",{cx:u.x,cy:u.y,r:1,fill:"var(--color-text-faint)",opacity:.35},u.key)),!ne&&l.jsxs(l.Fragment,{children:[l.jsx("line",{x1:U,y1:Y,x2:U,y2:Z,stroke:"var(--color-border-strong)",strokeWidth:1}),l.jsx("line",{x1:U,y1:Z,x2:ae,y2:Z,stroke:"var(--color-border-strong)",strokeWidth:1}),Fe&&l.jsx("line",{x1:ae,y1:Y,x2:ae,y2:Z,stroke:"var(--color-border-strong)",strokeWidth:1})]}),l.jsxs("g",{clipPath:`url(#${mr})`,children:[He.filter(u=>u.kind==="band").map(u=>l.jsx("path",{d:u.d,fill:u.color,fillOpacity:u.opacity,stroke:"none"},u.id)),He.filter(u=>u.kind==="stroked").flatMap(u=>u.uncertainty.map((b,y)=>l.jsx("path",{d:b.d,"data-band-kind":b.kind,fill:u.color,fillOpacity:Fm,stroke:b.kind==="bound"?u.color:"none",strokeOpacity:b.kind==="bound"?Dm:void 0,strokeWidth:b.kind==="bound"?1:void 0},`${u.id}-band-${y}`))),He.filter(u=>u.kind==="stroked").flatMap(u=>u.segments.map((b,y)=>l.jsxs(nn.Fragment,{children:[P&&b.basis===void 0&&js(b.d,Z)&&l.jsx("path",{d:js(b.d,Z)??void 0,fill:u.color,fillOpacity:.12,stroke:"none"}),l.jsx("path",{d:b.d,"data-stream-status":b.status,"data-reckoning-basis":b.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:b.basis!==void 0?Is:void 0,strokeDasharray:b.basis!==void 0?Rs:u.dashed?"4 3":void 0})]},`${u.id}-${y}`))),He.filter(u=>u.kind==="stroked").flatMap(u=>u.modelled.map((b,y)=>l.jsx("path",{d:b.d,"data-reckoning-basis":b.basis,stroke:u.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:Is,strokeDasharray:Rs},`${u.id}-modelled-${y}`))),He.map(u=>u.kind==="stroked"&&u.tail!==null?l.jsx(oi,{kind:"modelled",x:u.tail.cx,y:u.tail.cy},`${u.id}-tail`):null),He.filter(u=>u.kind==="stroked").flatMap(u=>u.observed.map((b,y)=>l.jsx("circle",{cx:b.cx,cy:b.cy,r:gm,fill:u.color,"data-observed-sample":""},`${u.id}-observed-${y}`))),He.filter(u=>u.kind==="scatter").flatMap(u=>u.points.map((b,y)=>l.jsx("circle",{cx:b.cx,cy:b.cy,r:Rm,fill:u.color},`${u.id}-${y}`)))]}),e.map(u=>{if(!u.headMark)return null;const b=u.axis==="primary"?ge:me;let y=u.data.x.length-1;for(;y>=0&&!(Number.isFinite(u.data.x[y])&&Number.isFinite(u.data.y[y]));)y-=1;return y<0?null:l.jsx("circle",{cx:re(u.data.x[y]),cy:b(u.data.y[y]),r:pm,fill:u.headMark==="dot"?u.color:"var(--color-surface-panel)",stroke:u.color,strokeWidth:u.headMark==="dot"?0:1.5,"data-head-mark":u.headMark},`${u.id}-head`)}),g&&g.length>0&&l.jsx("g",{clipPath:`url(#${Vn})`,children:l.jsx(io,{layers:g,frame:en,pass:"foreground"})}),tt.map(u=>l.jsxs(nn.Fragment,{children:[l.jsx("line",{x1:U,y1:u.y,x2:P&&u.kind==="marker"?U+24:ae,y2:u.y,stroke:u.tone.line,strokeWidth:1,strokeDasharray:u.dashed?"4 3":void 0,"data-threshold-kind":u.kind,"data-threshold-passed":u.passed||void 0}),P&&u.kind==="marker"&&u.label&&l.jsx("text",{x:U+28,y:u.y+3.5,fill:u.tone.label,fontSize:10,children:u.label}),!(P&&u.kind==="marker")&&u.label&&dt.get(u.id)&&l.jsxs("text",{x:dt.get(u.id)?.x,y:dt.get(u.id)?.y,textAnchor:dt.get(u.id)?.anchor,fill:u.tone.label,fontSize:10,children:[u.label,u.currency.held&&l.jsx(xo,{size:10,kind:u.currency.mark??"held"})]})]},u.id)),St.map(u=>l.jsx(D0,{x:u.x,y:u.y,size:Xe,color:u.color,text:u.text},u.key)),V!=="none"&&e.map((u,b)=>{const y=Pe?zn.positions[b]:void 0,R=y?oe-Hn+2+y.row*Ae:_i+b*Ae;if(!Pe&&R+13>Z)return null;const T=y?fn+y.x:ee?ee.x0:U+3,F=Pe?G-2*fn:ee?ee.x1-ee.x0:xe-6,A=Lt(u.label,F),B=Math.max(1,Math.floor((A-8)/6)),q=u.label.length>B?`${u.label.slice(0,Math.max(1,B-1))}...`:u.label;return l.jsxs(nn.Fragment,{children:[l.jsx("rect",{x:T,y:R,width:A,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),l.jsx("text",{x:T+3,y:R+10,fill:u.color,fontSize:10,children:q})]},u.id)}),g&&g.length>0&&et&&l.jsx(io,{layers:g,frame:en,pass:"caption"}),ut!==null&&nt!==null&&l.jsx(y0,{x:re(nt),plot:{x0:U,y0:Y,x1:ae,y1:Z},heading:ut.heading,rows:ut.rows,avoid:cr,traces:pr})]}),vr=Qe?l.jsx("div",{ref:J,"data-plot-card":"",style:{position:"absolute",left:he?.x0??0,top:he?.y0??0,visibility:he&&!Ii?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof N=="function"?N({width:xe-Ss*2,height:Le-Ss*2,form:$e}):N}):null,br=L?l.jsx("div",{"data-plot-notice":"",style:{position:"absolute",left:U,top:Y,width:xe,height:Le,pointerEvents:"none"},children:L}):null;return ie?l.jsxs(l.Fragment,{children:[xr,vr,br,l.jsx(Ye,{id:`${O}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),l.jsx(Ye,{role:"status","aria-live":"polite",children:qe})]}):l.jsxs(l.Fragment,{children:[xr,vr,br]})}function Cs(e,t,n,o=[]){if(t)return t;if(e.length===0&&o.length===0)return n==="log"?[1,10]:[0,1];let r=[...e.flatMap(Hm),...o.filter(Number.isFinite)];if(n==="log"&&(r=r.filter(c=>c>0)),r.length===0)return n==="log"?[1,10]:[0,1];let s=r[0],a=r[0];for(const c of r)c<s&&(s=c),c>a&&(a=c);const i=Math.max(Math.max(Math.abs(s),Math.abs(a))*Bm,Wm);if((n==="linear"||n===void 0)&&a>s&&a-s<i){const c=(s+a)/2;return[c-i,c+i]}return[s,a]}function Gm(e,t){if(e===0)return"0";const n=Math.abs(e);if(n>=1e6){const o=t?lo(t,1e6,1):1;return`${(e/1e6).toFixed(o)}M`}if(n>=1e3){const o=t?lo(t,1e3,1):1;return`${(e/1e3).toFixed(o)}k`}if(Number.isInteger(e))return String(e);if(n<.01){const o=Math.floor(Math.log10(n)),r=e/10**o;return Math.abs(r-1)<1e-9?`1e${o}`:`${r.toFixed(1)}e${o}`}return e.toFixed(t?lo(t,1,2):2)}const Ym=p.createContext(null);function Vm(e,t){const n=p.useContext(Ym),o=n?.setFooter,r=n?.setDirty;p.useEffect(()=>(o?.(e),()=>o?.(null)),[o,e]),p.useEffect(()=>(r?.(t),()=>r?.(!1)),[r,t])}function H1(e){const{onSave:t,value:n,saved:o,saveLabel:r="Save",extra:s,disabled:a}=e,i=p.useRef(null);i.current===null&&(i.current={v:n});const c=!xt(n,i.current.v)&&!xt(n,o),d=p.useRef(t);d.current=t;const h=p.useMemo(()=>l.jsxs(l.Fragment,{children:[s,l.jsx(Tl,{variant:"primary",type:"button",onClick:()=>d.current(),disabled:a,children:r})]}),[s,a,r]);Vm(h,c)}export{Ye as $,e1 as A,wn as B,Xx as C,Dx as D,cx as E,Ul as F,$x as G,d1 as H,Xl as I,_x as J,Vx as K,Tx as L,Gx as M,Wx as N,Yx as O,T1 as P,Bx as Q,r1 as R,s1 as S,Lx as T,Za as U,gx as V,Px as W,Du as X,qx as Y,dx as Z,mx as _,n1 as a,xa as a$,xt as a0,lx as a1,Lg as a2,In as a3,Vm as a4,H1 as a5,D1 as a6,Pn as a7,gl as a8,k1 as a9,Sx as aA,lc as aB,jx as aC,xo as aD,g1 as aE,m1 as aF,x1 as aG,Ex as aH,Rx as aI,I1 as aJ,y0 as aK,se as aL,Ks as aM,oi as aN,i1 as aO,a1 as aP,$a as aQ,lf as aR,h1 as aS,Ix as aT,v1 as aU,ke as aV,V0 as aW,vo as aX,bt as aY,Do as aZ,Sa as a_,Ym as aa,Ba as ab,Pr as ac,Me as ad,at as ae,An as af,Qs as ag,Ac as ah,o1 as ai,kx as aj,Qx as ak,ch as al,Xr as am,ft as an,zx as ao,zh as ap,To as aq,w1 as ar,C1 as as,E1 as at,Ef as au,P1 as av,Nx as aw,go as ax,f1 as ay,p1 as az,t1 as b,y1 as b0,va as b1,zo as b2,ja as b3,Ea as b4,gh as b5,Kl as b6,vx as b7,Ro as b8,xx as b9,bx as bA,z1 as bB,F1 as bC,lm as bD,wx as bE,_1 as bF,$h as bG,Qu as bH,Sl as bI,Cl as bJ,Ql as bK,Er as bL,qt as bM,b1 as bN,$1 as bO,Bl as bP,Fr as bQ,Io as bR,Ia as bS,M1 as bT,ql as ba,L1 as bb,os as bc,K0 as bd,O1 as be,A1 as bf,E0 as bg,yx as bh,b0 as bi,N1 as bj,Ln as bk,I0 as bl,S1 as bm,ba as bn,Js as bo,oa as bp,bh as bq,Ho as br,R1 as bs,j1 as bt,Ha as bu,np as bv,Kt as bw,Ch as bx,Ih as by,Co as bz,Cx as c,Ax as d,Tl as e,Zx as f,Jx as g,Kx as h,Fu as i,ux as j,Hx as k,fx as l,Gl as m,hx as n,rf as o,px as p,gf as q,u1 as r,c1 as s,Ox as t,Fx as u,l1 as v,Ux as w,Mx as x,Yl as y,zu as z};
