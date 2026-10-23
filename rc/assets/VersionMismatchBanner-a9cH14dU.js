import{E as F,w as B}from"./contributionsRead-Ce4ChGm6.js";import{j as t}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import r,{css as h}from"./ext-styled-components-DAuodqsN.js";import{e as S,a6 as T,C as M,ad as O,am as P,a0 as N}from"./ModalSaveBar-Dx8t4t75.js";import{r as c}from"./ext-react-C0MU9AHG.js";import{aZ as A,d4 as D}from"./view-clock-formula-CGkCzEOv.js";import"./ksp-enum-names-DhcvEpKL.js";import"./screen-DfId7NXt.js";import"./lagrange-ErO631rd.js";import"./use-transmissions-D2n-EjFE.js";import"./websocket-transport-BJGmoURk.js";import"./processorPerfBudget-CSZniFyA.js";import"./index-BrbVhvxX.js";function _(e){if(e===void 0||e===""||e==="raw")return"";try{return F({magnitude:0,unit:e},{format:e}).symbol}catch{return""}}function st(e,o){if(!e)return;const a=_(o);return a?`${e} (${a})`:e}function w({accent:e,anchor:o="inline",top:a=12,zIndex:n=999,glow:i,pulse:l=!1,role:p="status",ariaLive:x,onClick:v,interactive:g=!1,children:d}){const s=x??(p==="alert"?"assertive":"polite");return o==="top"?t.jsxs(H,{$accent:e,$top:a,$zIndex:n,$glow:i,$interactive:g,role:p,"aria-live":s,children:[t.jsx(z,{$accent:e,$pulse:l}),d]}):t.jsxs(X,{as:v?"button":"div",type:v?"button":void 0,$accent:e,$glow:i,$clickable:!!v,$interactive:g,role:p,"aria-live":s,onClick:v,children:[t.jsx(z,{$accent:e,$pulse:l}),d]})}const H=r.div`
  position: fixed;
  top: ${e=>e.$top}px;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${e=>e.$zIndex};
  display: inline-flex;
  align-items: center;
  /* --inset-pill, not --inset-control: this pill is never pressable, so it must not follow the touch-target token. */
  gap: var(--gap-pill);
  padding: var(--inset-pill);
  background: rgba(0, 0, 0, 0.82);
  border: 1px solid ${e=>e.$accent};
  border-radius: var(--radius-pill);
  color: ${e=>e.$accent};
  font-size: var(--font-size-compact);
  letter-spacing: 0.12em;
  pointer-events: ${e=>e.$interactive?"auto":"none"};
  ${e=>e.$glow?h`box-shadow: ${e.$glow};`:""}
`,X=r.div`
  display: inline-flex;
  align-items: center;
  /* Pressable when given onClick, and a tier above --inset-control so a dismissable banner is a bigger target. */
  gap: var(--gap-pill);
  padding: var(--inset-control-prominent);
  background: rgba(0, 0, 0, 0.88);
  border: 1px solid ${e=>e.$accent};
  border-radius: var(--radius-pill);
  color: ${e=>e.$accent};
  font-size: var(--font-size-compact);
  letter-spacing: 0.08em;
  font-family: inherit;
  white-space: nowrap;
  cursor: ${e=>e.$clickable?"pointer":"default"};
  pointer-events: ${e=>e.$clickable||e.$interactive?"auto":"none"};
  animation: bannerSlideIn var(--duration-entrance) var(--ease-entrance) forwards;
  transform-origin: right center;
  will-change: transform, opacity;
  ${e=>e.$glow?h`box-shadow: ${e.$glow};`:""}

  &:focus-visible {
    outline: 2px solid ${e=>e.$accent};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @keyframes bannerSlideIn {
    from {
      opacity: 0;
      transform: translateX(40px) scaleX(0.6);
    }
    60% {
      opacity: 1;
    }
    to {
      opacity: 1;
      transform: translateX(0) scaleX(1);
    }
  }
`,z=r.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${e=>e.$accent};
  flex-shrink: 0;

  ${e=>e.$pulse&&h`
      @media (prefers-reduced-motion: no-preference) {
        animation: status-pill-pulse 1.2s var(--ease-emphasis) infinite;
      }
      @keyframes status-pill-pulse {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.35;
        }
      }
    `}
`;function lt({children:e}){return t.jsx(V,{children:e})}const V=r.div`
  position: fixed;
  /* Off the spacing ladder: these are arithmetic on the FAB geometry (88 = 24 + 48 + 16, 112 = 88 + 24) and move only with it. */
  right: calc(88px + env(safe-area-inset-right, 0px));
  bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  /* Below the modal layer: an interactive pill above a dialog would sit outside its focus trap. */
  z-index: 90;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: var(--gap-related);
  height: 48px;
  max-width: calc(100vw - 112px - env(safe-area-inset-right, 0px));
  overflow-x: auto;
  overflow-y: hidden;
  pointer-events: none;

  /* The strip passes clicks through; each banner fills its height and does not shrink. */
  > * {
    pointer-events: auto;
    flex-shrink: 0;
    height: 100%;
    display: inline-flex;
    align-items: center;
  }

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &:hover {
    scrollbar-color: var(--color-border-strong) transparent;
  }
`,K=2e3,G={copied:e=>`Copied ${e}`,failed:()=>"Could not copy, select the text instead"};function ct({command:e,label:o}){const[a,n]=c.useState("idle"),i=c.useRef(void 0);c.useEffect(()=>()=>clearTimeout(i.current),[]);async function l(){let p="copied";try{await navigator.clipboard.writeText(e)}catch{p="failed"}n(p),clearTimeout(i.current),i.current=setTimeout(()=>n("idle"),K)}return t.jsxs(U,{children:[t.jsx(W,{role:"group","aria-label":o,tabIndex:0,children:t.jsx(q,{children:e})}),t.jsx(S,{variant:"ghost",type:"button",onClick:()=>void l(),"aria-label":`Copy ${o}`,children:a==="copied"?"Copied":"Copy"}),t.jsx(T,{visuallyHidden:!0,children:G[a]?.(o)})]})}const U=r.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,W=r.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,q=r.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function Y(e,o){if(!o)return!0;const a=o.toLowerCase();return(e.label??e.key).toLowerCase().includes(a)||e.key.toLowerCase().includes(a)}function dt({keys:e,value:o,onChange:a,placeholder:n="Search...",emptyHint:i="No matches"}){const[l,p]=c.useState(""),x=c.useMemo(()=>e.filter(d=>Y(d,l)),[e,l]),v=c.useMemo(()=>{const d=new Map;for(const s of x){const u=s.group??"Other";let f=d.get(u);f||(f=[],d.set(u,f)),f.push(s)}return[...d.entries()].sort(([s],[u])=>s.localeCompare(u))},[x]),g=d=>{const s=new Set(o);s.has(d)?s.delete(d):s.add(d),a(s)};return t.jsxs(Q,{children:[t.jsx(Z,{type:"text",value:l,placeholder:n,onChange:d=>p(d.target.value)}),t.jsx(J,{children:v.length===0?t.jsx(le,{children:i}):v.map(([d,s])=>t.jsxs(ee,{children:[t.jsx(te,{children:d}),s.map(u=>{const f=o.has(u.key),m=`dkmp-${u.key}`;return t.jsxs(re,{$checked:f,children:[t.jsx(oe,{id:m,type:"checkbox",checked:f,onChange:()=>g(u.key)}),t.jsxs(ae,{htmlFor:m,children:[t.jsx(ne,{$checked:f,children:f&&t.jsx(M,{size:11,strokeWidth:3})}),t.jsx(ie,{children:u.label??u.key}),u.unit&&t.jsx(se,{children:u.unit})]})]},u.key)})]},d))})]})}const Q=r.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,Z=r.input`
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-control);
  width: 100%;

  &:focus {
    border-color: var(--color-text-faint);
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: 2px;
  }

  &::placeholder {
    color: var(--color-text-faint);
  }
`,J=r.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,ee=r.div``,te=r.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,re=r.div`
  background: ${({$checked:e})=>e?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,oe=r.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,ae=r.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,ne=r.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border: 1px solid ${({$checked:e})=>e?"var(--color-go-status)":"var(--color-text-faint)"};
  background: ${({$checked:e})=>e?"var(--color-go-status)":"var(--color-surface-raised)"};
  color: var(--color-go-on-status);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-flush);
  border-radius: var(--radius-regular);
  flex: 0 0 auto;
`,ie=r.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,se=r.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,le=r.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function pt({show:e,message:o,hint:a,children:n}){return e?t.jsxs(de,{children:[t.jsx(pe,{...ce,children:n}),t.jsxs(ue,{role:"status","aria-live":"polite",children:[t.jsx(fe,{children:o}),a&&t.jsx(xe,{children:a})]})]}):t.jsx(t.Fragment,{children:n})}const ce={inert:""},de=r.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,pe=r.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,ue=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  /* Shares --inset-pill with BannerPill: a message you read, not a control you press. */
  padding: var(--inset-pill);
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  align-items: center;
  text-align: center;
  max-width: 80%;
  pointer-events: auto;
  /* Above the dimmed children, below modals. */
  z-index: 1;
`,fe=r.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,xe=r.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,E=c.createContext(null),ve=400,R="(pointer: coarse)";function ge(e){if(typeof window.matchMedia!="function")return()=>{};const o=window.matchMedia(R);return o.addEventListener("change",e),()=>o.removeEventListener("change",e)}function me(){return typeof window.matchMedia=="function"&&window.matchMedia(R).matches}function ut({children:e}){const[o,a]=c.useState(!1),n=c.useSyncExternalStore(ge,me,()=>!1),[i,l]=c.useState(!1),p=i||o&&!n,x=c.useId(),v=c.useRef(null),g=c.useRef(null),d=c.useRef(null),s=c.useCallback(()=>{d.current!==null&&(window.clearTimeout(d.current),d.current=null)},[]),u=c.useCallback(()=>{s(),n||a(!0)},[s,n]),f=c.useCallback(()=>{s(),d.current=window.setTimeout(()=>{d.current=null,a(!1)},ve)},[s]),m=c.useCallback(()=>{s(),l(b=>!b)},[s]);c.useEffect(()=>()=>s(),[s]);const k=c.useCallback(()=>{s(),l(!1),a(!1)},[s]);c.useEffect(()=>{if(!i&&!o)return;const b=()=>{s(),l(!1),a(!1)},$=y=>{y.key==="Escape"&&(b(),g.current?.focus())},j=y=>{v.current?.contains(y.target)||b()};return document.addEventListener("keydown",$,!0),document.addEventListener("pointerdown",j),()=>{document.removeEventListener("keydown",$,!0),document.removeEventListener("pointerdown",j)}},[i,o,s]);const L=c.useMemo(()=>({active:p,expanded:i,toggle:m,close:k,regionId:x,toggleRef:g,onMouseEnter:u,onMouseLeave:f,onFocus:u,onBlur:f}),[p,i,m,k,x,u,f]);return t.jsx(E.Provider,{value:L,children:t.jsx("div",{id:x,ref:v,children:e})})}function I(){return c.useContext(E)}function ft({bottom:e,children:o,onClick:a,...n}){const i=I(),l=i?.active??!0,p=n["aria-label"]??n.title;return t.jsxs(he,{$visible:l,$bottom:e,onMouseEnter:i?.onMouseEnter,onMouseLeave:i?.onMouseLeave,onFocus:i?.onFocus,onBlur:i?.onBlur,children:[p?t.jsx(be,{$visible:l,"aria-hidden":"true",children:p}):null,t.jsx(ye,{$visible:l,tabIndex:l?0:-1,onClick:x=>{a?.(x),i?.close()},...n,children:o})]})}const he=r.div`
  position: fixed;
  bottom: calc(${({$bottom:e})=>e}px + env(safe-area-inset-bottom, 0px));
  /* Off the spacing ladder: the FAB geometry chain in FabPrompt and BannerStack is arithmetic on this 24px. */
  right: calc(24px + env(safe-area-inset-right, 0px));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-pill);
  z-index: var(--z-fab);
  pointer-events: ${({$visible:e})=>e?"auto":"none"};
`,be=r.span`
  pointer-events: none;
  white-space: nowrap;
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-floating);
  padding: var(--inset-surface);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-tight);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  opacity: ${({$visible:e})=>e?1:0};
  transform: translateY(${({$visible:e})=>e?"0":"16px"});
  /* Off the duration scale: tuned against the 16px travel and FabCluster's 400ms leave delay. */
  transition:
    transform 0.18s var(--ease-standard),
    opacity 0.18s var(--ease-standard);
`,ye=r.button`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-circle);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-strong);
  color: var(--color-info-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  flex: none;
  opacity: ${({$visible:e})=>e?1:0};
  pointer-events: ${({$visible:e})=>e?"auto":"none"};
  transform: translateY(${({$visible:e})=>e?"0":"16px"});

  /* The glyph is the whole control, so it takes the standalone size; the CSS width and height beat the icon's own attributes. */
  & > svg {
    width: var(--icon-size-standalone);
    height: var(--icon-size-standalone);
  }

  /* The same 0.18s as FabLabel. */
  transition:
    background var(--duration-base),
    transform 0.18s var(--ease-standard),
    opacity 0.18s var(--ease-standard),
    border-color var(--duration-base);

  @media (hover: hover) {
    &:hover {
      background: var(--color-border-subtle);
      border-color: var(--color-info-mark);
      transform: scale(1.05);
    }
  }

  &:active {
    transform: scale(0.97);
  }

  @media (pointer: coarse) {
    width: 48px;
    height: 48px;
  }
`;function xt(){const e=I();return e?t.jsx(we,{type:"button",ref:e.toggleRef,"aria-label":"Dashboard controls","aria-expanded":e.expanded,"aria-controls":e.regionId,onClick:e.toggle,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur,children:t.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[t.jsx("circle",{cx:"5",cy:"12",r:"2"}),t.jsx("circle",{cx:"12",cy:"12",r:"2"}),t.jsx("circle",{cx:"19",cy:"12",r:"2"})]})}):null}const we=r.button`
  position: fixed;
  /* Held literal with the rest of the FAB-geometry chain: BannerStack's
     right: 88px (24 + 48 + 16), FabPrompt's 72px and Fab's own right: 24px are
     all arithmetic on this 48px button at 24px from the corner. */
  bottom: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-circle);
  background: var(--color-accent-fg);
  border: none;
  color: var(--color-text-inverse);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 204, 102, 0.3);
  z-index: var(--z-fab);
  transition:
    background var(--duration-base),
    transform var(--duration-fast);

  &:hover {
    background: var(--color-accent-bg);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.97);
  }
  &:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: 2px;
  }
`;function vt({bottom:e,label:o,onAccept:a,onDismiss:n,autoDismissMs:i=15e3,acceptLabel:l}){return c.useEffect(()=>{if(i<=0)return;const p=window.setTimeout(n,i);return()=>window.clearTimeout(p)},[i,n]),t.jsxs(ke,{$bottom:e,role:"status","aria-live":"polite",children:[t.jsx($e,{type:"button",onClick:a,"aria-label":l??o,children:o}),t.jsx(O,{text:"Dismiss",children:t.jsx(je,{type:"button",onClick:n,"aria-label":"Dismiss",children:"×"})})]})}const ke=r.div`
  ${({$bottom:e})=>e!==void 0?h`
          position: fixed;
          bottom: calc(${e}px + env(safe-area-inset-bottom, 0px));
          /* 72 = 24 (the Fab inset) + 40 (its width) + 8, part of the FAB geometry chain. */
          right: calc(72px + env(safe-area-inset-right, 0px));
          z-index: var(--z-fab);
        `:""}
  height: 40px;
  display: inline-flex;
  align-items: stretch;
  background: var(--color-surface-raised);
  border: 1px solid var(--color-info-mark);
  /* --radius-pill holds at both the 40px height and the coarse-pointer 48px. */
  border-radius: var(--radius-pill);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  font-family: inherit;
  /* Not the entrance recipe: that pairing is tuned to the 40px banner slide. */
  animation: fabPromptIn var(--duration-slow) var(--ease-standard) both;

  @keyframes fabPromptIn {
    from {
      opacity: 0;
      transform: translateX(8px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (pointer: coarse) {
    height: 48px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,$e=r.button`
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--color-info-text);
  font-family: inherit;
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: var(--inset-prompt-button);
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  &:hover {
    background: var(--color-border-subtle);
  }

  &:focus-visible {
    outline: 2px solid var(--color-info-mark);
    outline-offset: -2px;
  }
`,je=r.button`
  appearance: none;
  border: 0;
  border-left: 1px solid var(--color-border-subtle);
  background: transparent;
  color: var(--color-text-muted);
  font-family: inherit;
  /* Off the type scale: a glyph size for the close mark, above --font-size-lg. */
  font-size: 18px;
  line-height: var(--line-height-flush);
  padding: var(--inset-prompt-button);
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  &:hover {
    background: var(--color-border-subtle);
    color: var(--color-text-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-info-mark);
    outline-offset: -2px;
  }
`,gt=c.forwardRef(function({id:o,label:a="Choose file",accept:n,multiple:i,fileName:l,emptyText:p="No file chosen",disabled:x,onChange:v},g){const d=c.useId(),s=o??d,u=c.useRef(null);return t.jsxs(ze,{children:[t.jsx(Se,{id:s,ref:f=>{if(u.current=f,typeof g=="function"){g(f);return}g&&(g.current=f)},type:"file",accept:n,multiple:i,disabled:x,onChange:v}),t.jsx(Ce,{htmlFor:s,$disabled:!!x,children:a}),t.jsx(Ee,{"aria-live":"polite",$hasFile:!!l,children:l??p})]})}),ze=r.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,Ce=r.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  letter-spacing: 0.04em;
  padding: var(--inset-control);
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.5:1};
  user-select: none;

  &:hover {
    border-color: ${({$disabled:e})=>e?"var(--color-border-strong)":"var(--color-accent-fg)"};
  }

  /* The hidden input owns focus; mirror its focus ring onto the button label. */
  input:focus-visible + & {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: 2px;
  }

  @media (pointer: coarse) {
    min-height: 44px;
    /* Wider than --inset-control on both axes, the same as the ui-kit Button. */
    padding: var(--inset-file-button-touch);
  }
`,Se=r.input`
  /* Visually hidden but still keyboard-focusable. */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Ee=r.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:e})=>e?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`,mt=r.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function ht({state:e,elapsedMs:o,expectedIn:a}){if(e==="connected")return null;if(e==="awaiting")return t.jsx(w,{accent:"var(--color-text-muted)",children:t.jsx(C,{children:t.jsx(P,{expectedIn:a})})});const n=e==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return t.jsxs(w,{accent:Ie[e],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[t.jsx(C,{children:n}),t.jsxs(Le,{children:["T+",Re(o)]})]})}function Re(e){const o=Math.max(0,Math.floor(e/1e3)),a=Math.floor(o/3600),n=Math.floor(o%3600/60),i=o%60,l=p=>String(p).padStart(2,"0");return a>0?`${a}:${l(n)}:${l(i)}`:`${l(n)}:${l(i)}`}const Ie={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},C=r.span`
  font-weight: 600;
`,Le=r.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function bt({entries:e}){return e.length===0?null:t.jsxs(Be,{role:"status","aria-live":"polite",children:[t.jsx(Te,{}),t.jsx(Me,{children:"SOURCE OFFLINE"}),t.jsx(Oe,{children:e.map(o=>t.jsxs(Pe,{children:[t.jsx(Ne,{children:o.name}),t.jsx(Ae,{children:o.status}),t.jsx(De,{children:Fe(o.elapsedMs)}),o.onRetry&&t.jsx(S,{size:"sm",onClick:o.onRetry,"aria-label":`Retry ${o.name} now`,children:"Retry now"})]},o.id))})]})}function Fe(e){return B(A("irl:s",e/1e3))}const Be=r.div`
  display: flex;
  align-items: center;
  gap: var(--gap-section);
  padding: var(--inset-alert-band);
  background: rgba(120, 30, 30, 0.92);
  border: 1px solid var(--color-nogo-mark);
  border-radius: var(--radius-pill);
  color: var(--color-nogo-text);
  font-size: var(--font-size-compact);
  letter-spacing: 0.08em;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  animation: bannerSlideIn var(--duration-entrance) var(--ease-entrance) forwards;
  transform-origin: right center;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @keyframes bannerSlideIn {
    from {
      opacity: 0;
      transform: translateX(40px) scaleX(0.6);
    }
    60% {
      opacity: 1;
    }
    to {
      opacity: 1;
      transform: translateX(0) scaleX(1);
    }
  }
`,Te=r.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: var(--color-nogo-mark);
  flex-shrink: 0;
  /* Known fault: this animation sits outside the reduced-motion guard that holds its keyframes. */
  animation: pulse 1.4s ease-in-out infinite;

  @media (prefers-reduced-motion: no-preference) {
    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.4;
      }
    }
  }
`,Me=r.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,Oe=r.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,Pe=r.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,Ne=r.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,Ae=r.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,De=r.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,yt=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px)
    env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px);
  background: var(--color-surface-app);

  /* On a small phone the box hugs the viewport edges instead of floating as a centred card. */
  @media (max-width: 480px) {
    align-items: stretch;
    padding: calc(16px + env(safe-area-inset-top, 0px))
      calc(12px + env(safe-area-inset-right, 0px))
      calc(16px + env(safe-area-inset-bottom, 0px))
      calc(12px + env(safe-area-inset-left, 0px));
  }
`,wt=r.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-strong);
  border-radius: 8px;
  padding: 40px 48px;
  max-width: 420px;
  width: 100%;
  color: var(--color-text-primary);

  h1 {
    margin: 0 0 8px;
    font-size: 20px;
    color: var(--color-text-primary);
  }

  p {
    margin: 0 0 20px;
    font-size: 13px;
    color: var(--color-text-muted);
  }

  @media (max-width: 480px) {
    padding: 20px 24px;
  }
`,kt=r.div`
  display: flex;
  align-items: stretch;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,$t=r.input`
  flex: 1 1 0;
  min-width: 0;
  background: var(--color-surface-raised);
  border: 1px solid var(--color-text-faint);
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 20px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-info-text);

  &::placeholder {
    color: var(--color-text-faint);
    text-transform: none;
  }

  &:focus {
    outline: none;
    border-color: var(--color-info-mark);
  }

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }

  @media (pointer: coarse) {
    min-height: 44px;
  }
`,jt=r.button`
  flex: none;
  min-width: 8.5em;
  white-space: nowrap;
  text-align: center;
  background: var(--color-info-muted);
  border: 1px solid var(--color-info-mark);
  border-radius: 4px;
  padding: 8px 20px;
  color: var(--color-info-text);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: var(--color-info-muted);
    border-color: var(--color-info-mark);
    filter: brightness(1.15);
  }

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /* Height only: on a wide coarse-pointer device the row stays horizontal, and a full-width button would crush the input. */
  @media (pointer: coarse) {
    min-height: 44px;
  }
`,zt=r.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,Ct=r.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,St=r.div`
  margin-top: var(--gap-section-compact);
  min-height: 1.4em;
  color: var(--color-info-text);
  font-size: var(--font-size-sm);
`,Et=r.div`
  min-height: 3.6em;
`,Rt=r.div`
  min-height: 7em;
`,It=r.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,Lt=r.button`
  background: transparent;
  border: 1px solid var(--color-text-faint);
  border-radius: 4px;
  padding: 4px 10px;
  color: var(--color-text-muted);
  font-size: 11px;
  cursor: pointer;

  &:hover {
    color: var(--color-text-primary);
    border-color: var(--color-text-muted);
  }

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }

  @media (pointer: coarse) {
    min-height: 44px;
  }
`,Ft=r.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,Bt=r.ul`
  list-style: none;
  margin: var(--gap-section-compact) 0 0;
  padding: 0;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);

  li {
    display: flex;
    justify-content: space-between;
    gap: var(--gap-section-compact);
    padding: var(--gap-rows) 0;
  }

  li[data-state="done"] span:last-child {
    color: var(--color-go-text);
  }

  li[data-state="active"] span:last-child {
    color: var(--color-info-text);
  }
`,_e={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},He={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function Xe(e){return _e[e]??He}function Tt({label:e}){const o=Xe(e);return t.jsx(Ve,{$bg:o.bg,$fg:o.fg,$border:o.border,children:e})}const Ve=r.span`
  display: inline-block;
  padding: var(--inset-chip);
  border-radius: var(--radius-regular);
  font-size: var(--font-size-caption);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${({$bg:e,$fg:o,$border:a})=>h`
    background: ${e};
    color: ${o};
    border: 1px solid ${a};
  `}
`;D({id:"default-dark",name:"Default Dark",theme:N});function Mt({kind:e,local:o,remote:a,remoteLabel:n="Peer"}){const i=e==="major"?"alert":"status",l=e==="major"?"RELOAD REQUIRED":e==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",p=e==="unknown"?`${n} didn't report a version`:`${n} v${a??"?"} ↔ this v${o}`;return t.jsxs(w,{accent:Ke[e],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:i,children:[t.jsx(Ge,{children:l}),t.jsx(Ue,{children:p})]})}const Ke={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},Ge=r.span`
  font-weight: 600;
`,Ue=r.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{w as B,ct as C,dt as D,zt as E,ft as F,$t as H,Ft as N,mt as P,Ct as R,ht as S,Tt as T,Mt as V,lt as a,pt as b,ut as c,xt as d,vt as e,gt as f,bt as g,st as h,Xe as i,yt as j,wt as k,kt as l,jt as m,Et as n,St as o,Rt as p,It as q,Lt as r,Bt as s,I as u};
