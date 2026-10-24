import{E as M,w as P}from"./contributionsRead-Dbqo5wwZ.js";import{j as t}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import o,{css as b}from"./ext-styled-components-DAuodqsN.js";import{e as R,a6 as N,C as A,ac as D,al as _,aa as H,a0 as X}from"./ModalSaveBar-Cj72lp_q.js";import{r as s}from"./ext-react-C0MU9AHG.js";import{aZ as V,d5 as U}from"./view-clock-formula-DAr7sU2b.js";import"./ksp-enum-names-BgJi5FW5.js";import"./screen-BOwIPYm6.js";import"./lagrange-CO7BolvF.js";import"./use-transmissions-BLhvT-0G.js";import"./websocket-transport-F-eLlynV.js";import"./processorPerfBudget-DJq44PTl.js";import"./index-DqUIH49W.js";function G(e){if(e===void 0||e===""||e==="raw")return"";try{return M({magnitude:0,unit:e},{format:e}).symbol}catch{return""}}function bt(e,r){if(!e)return;const a=G(r);return a?`${e} (${a})`:e}function k({accent:e,anchor:r="inline",top:a=12,zIndex:n=999,glow:i,pulse:c=!1,role:d="status",ariaLive:x,onClick:v,interactive:h=!1,children:p}){const f=x??(d==="alert"?"assertive":"polite");return r==="top"?t.jsxs(K,{$accent:e,$top:a,$zIndex:n,$glow:i,$interactive:h,role:d,"aria-live":f,children:[t.jsx(I,{$accent:e,$pulse:c}),p]}):t.jsxs(W,{as:v?"button":"div",type:v?"button":void 0,$accent:e,$glow:i,$clickable:!!v,$interactive:h,role:d,"aria-live":f,onClick:v,children:[t.jsx(I,{$accent:e,$pulse:c}),p]})}const K=o.div`
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
  ${e=>e.$glow?b`box-shadow: ${e.$glow};`:""}
`,W=o.div`
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
  ${e=>e.$glow?b`box-shadow: ${e.$glow};`:""}

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
`,I=o.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${e=>e.$accent};
  flex-shrink: 0;

  ${e=>e.$pulse&&b`
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
`;function wt({children:e}){return t.jsx(Y,{children:e})}const Y=o.div`
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

  /* On a phone the strip beside the FAB is too short for even one pill, so the banners stack in a column above it, newest nearest the FAB, and long text wraps. */
  @media (max-width: 640px) {
    right: calc(16px + env(safe-area-inset-right, 0px));
    bottom: calc(88px + env(safe-area-inset-bottom, 0px));
    flex-direction: column-reverse;
    align-items: flex-end;
    height: auto;
    max-width: calc(100vw - 32px - env(safe-area-inset-right, 0px));
    max-height: 40vh;
    overflow: visible;

    && > * {
      height: auto;
      max-width: 100%;
      white-space: normal;
    }
  }

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &:hover {
    scrollbar-color: var(--color-border-strong) transparent;
  }
`,q=2e3,Q={copied:e=>`Copied ${e}`,failed:()=>"Could not copy, select the text instead"};function yt({command:e,label:r}){const[a,n]=s.useState("idle"),i=s.useRef(void 0);s.useEffect(()=>()=>clearTimeout(i.current),[]);async function c(){let d="copied";try{await navigator.clipboard.writeText(e)}catch{d="failed"}n(d),clearTimeout(i.current),i.current=setTimeout(()=>n("idle"),q)}return t.jsxs(Z,{children:[t.jsx(J,{role:"group","aria-label":r,tabIndex:0,children:t.jsx(ee,{children:e})}),t.jsx(R,{variant:"ghost",type:"button",onClick:()=>void c(),"aria-label":`Copy ${r}`,children:a==="copied"?"Copied":"Copy"}),t.jsx(N,{visuallyHidden:!0,children:Q[a]?.(r)})]})}const Z=o.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,J=o.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,ee=o.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function te(e,r){if(!r)return!0;const a=r.toLowerCase();return(e.label??e.key).toLowerCase().includes(a)||e.key.toLowerCase().includes(a)}function kt({keys:e,value:r,onChange:a,placeholder:n="Search...",emptyHint:i="No matches"}){const[c,d]=s.useState(""),x=s.useMemo(()=>e.filter(p=>te(p,c)),[e,c]),v=s.useMemo(()=>{const p=new Map;for(const f of x){const u=f.group??"Other";let l=p.get(u);l||(l=[],p.set(u,l)),l.push(f)}return[...p.entries()].sort(([f],[u])=>f.localeCompare(u))},[x]),h=p=>{const f=new Set(r);f.has(p)?f.delete(p):f.add(p),a(f)};return t.jsxs(oe,{children:[t.jsx(re,{type:"text",value:c,placeholder:n,onChange:p=>d(p.target.value)}),t.jsx(ae,{children:v.length===0?t.jsx(fe,{children:i}):v.map(([p,f])=>t.jsxs(ne,{children:[t.jsx(ie,{children:p}),f.map(u=>{const l=r.has(u.key),g=`dkmp-${u.key}`;return t.jsxs(se,{$checked:l,children:[t.jsx(le,{id:g,type:"checkbox",checked:l,onChange:()=>h(u.key)}),t.jsxs(ce,{htmlFor:g,children:[t.jsx(de,{$checked:l,children:l&&t.jsx(A,{size:11,strokeWidth:3})}),t.jsx(pe,{children:u.label??u.key}),u.unit&&t.jsx(ue,{children:u.unit})]})]},u.key)})]},p))})]})}const oe=o.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,re=o.input`
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
`,ae=o.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,ne=o.div``,ie=o.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,se=o.div`
  background: ${({$checked:e})=>e?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,le=o.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,ce=o.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,de=o.span`
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
`,pe=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,ue=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,fe=o.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function $t({show:e,message:r,hint:a,children:n}){return e?t.jsxs(ve,{children:[t.jsx(he,{...xe,children:n}),t.jsxs(ge,{role:"status","aria-live":"polite",children:[t.jsx(me,{children:r}),a&&t.jsx(be,{children:a})]})]}):t.jsx(t.Fragment,{children:n})}const xe={inert:""},ve=o.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,he=o.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,ge=o.div`
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
`,me=o.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,be=o.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,$=84,j=60,we=48,ye=72,ke=232;function $e(e){return Math.max(1,Math.floor((e-$-we-ye)/j)+1)}function je(e,r){const a=Math.max(0,Math.round((e-$)/j)),n=$e(r),i=Math.floor(a/n);return i===0?{bottom:e,offset:0}:{bottom:$+(a-i*n)*j,offset:i*ke}}function ze(e){return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}const Ce=()=>window.innerHeight,Ee=()=>Number.POSITIVE_INFINITY,L=s.createContext(null),Se=400,T="(pointer: coarse)";function Ie(e){if(typeof window.matchMedia!="function")return()=>{};const r=window.matchMedia(T);return r.addEventListener("change",e),()=>r.removeEventListener("change",e)}function Fe(){return typeof window.matchMedia=="function"&&window.matchMedia(T).matches}function jt({children:e}){const[r,a]=s.useState(!1),n=s.useSyncExternalStore(Ie,Fe,()=>!1),i=s.useSyncExternalStore(ze,Ce,Ee),c=s.useCallback(m=>je(m,i),[i]),[d,x]=s.useState(!1),v=d||r&&!n,h=s.useId(),p=s.useRef(null),f=s.useRef(null),u=s.useRef(null),l=s.useCallback(()=>{u.current!==null&&(window.clearTimeout(u.current),u.current=null)},[]),g=s.useCallback(()=>{l(),n||a(!0)},[l,n]),w=s.useCallback(()=>{l(),u.current=window.setTimeout(()=>{u.current=null,a(!1)},Se)},[l]),z=s.useCallback(()=>{l(),x(m=>!m)},[l]);s.useEffect(()=>()=>l(),[l]);const C=s.useCallback(()=>{l(),x(!1),a(!1)},[l]);s.useEffect(()=>{if(!d&&!r)return;const m=()=>{l(),x(!1),a(!1)},E=y=>{y.key==="Escape"&&(m(),f.current?.focus())},S=y=>{p.current?.contains(y.target)||m()};return document.addEventListener("keydown",E,!0),document.addEventListener("pointerdown",S),()=>{document.removeEventListener("keydown",E,!0),document.removeEventListener("pointerdown",S)}},[d,r,l]);const O=s.useMemo(()=>({active:v,expanded:d,toggle:z,close:C,regionId:h,toggleRef:f,place:c,onMouseEnter:g,onMouseLeave:w,onFocus:g,onBlur:w}),[v,d,z,C,h,c,g,w]);return t.jsx(L.Provider,{value:O,children:t.jsx("div",{id:h,ref:p,children:e})})}function B(){return s.useContext(L)}function zt({bottom:e,children:r,onClick:a,...n}){const i=B(),c=i?.active??!0,d=i?.place(e)??{bottom:e,offset:0},x=n["aria-label"]??n.title;return t.jsxs(Re,{$visible:c,$bottom:d.bottom,$offset:d.offset,onMouseEnter:i?.onMouseEnter,onMouseLeave:i?.onMouseLeave,onFocus:i?.onFocus,onBlur:i?.onBlur,children:[x?t.jsx(Le,{$visible:c,"aria-hidden":"true",children:x}):null,t.jsx(Te,{$visible:c,tabIndex:c?0:-1,onClick:v=>{a?.(v),i?.close()},...n,children:r})]})}const Re=o.div`
  position: fixed;
  bottom: calc(${({$bottom:e})=>e}px + env(safe-area-inset-bottom, 0px));
  /* Off the spacing ladder: the FAB geometry chain in FabPrompt and BannerStack is arithmetic on this 24px. */
  right: calc(24px + ${({$offset:e})=>e}px + env(safe-area-inset-right, 0px));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-pill);
  z-index: var(--z-fab);
  pointer-events: ${({$visible:e})=>e?"auto":"none"};
`,Le=o.span`
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
`,Te=o.button`
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
`;function Ct(){const e=B();return e?t.jsx(Be,{type:"button",ref:e.toggleRef,"aria-label":"Dashboard controls","aria-expanded":e.expanded,"aria-controls":e.regionId,onClick:e.toggle,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur,children:t.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[t.jsx("circle",{cx:"5",cy:"12",r:"2"}),t.jsx("circle",{cx:"12",cy:"12",r:"2"}),t.jsx("circle",{cx:"19",cy:"12",r:"2"})]})}):null}const Be=o.button`
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
`;function Et({bottom:e,label:r,onAccept:a,onDismiss:n,autoDismissMs:i=15e3,acceptLabel:c}){return s.useEffect(()=>{if(i<=0)return;const d=window.setTimeout(n,i);return()=>window.clearTimeout(d)},[i,n]),t.jsxs(Oe,{$bottom:e,role:"status","aria-live":"polite",children:[t.jsx(Me,{type:"button",onClick:a,"aria-label":c??r,children:r}),t.jsx(D,{text:"Dismiss",children:t.jsx(Pe,{type:"button",onClick:n,"aria-label":"Dismiss",children:"×"})})]})}const Oe=o.div`
  ${({$bottom:e})=>e!==void 0?b`
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
`,Me=o.button`
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
`,Pe=o.button`
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
`,St=s.forwardRef(function({id:r,label:a="Choose file",accept:n,multiple:i,fileName:c,emptyText:d="No file chosen",disabled:x,onChange:v},h){const p=s.useId(),f=r??p,u=s.useRef(null);return t.jsxs(Ne,{children:[t.jsx(De,{id:f,ref:l=>{if(u.current=l,typeof h=="function"){h(l);return}h&&(h.current=l)},type:"file",accept:n,multiple:i,disabled:x,onChange:v}),t.jsx(Ae,{htmlFor:f,$disabled:!!x,children:a}),t.jsx(_e,{"aria-live":"polite",$hasFile:!!c,children:c??d})]})}),Ne=o.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,Ae=o.label`
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
`,De=o.input`
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
`,_e=o.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:e})=>e?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`,It=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function Ft({state:e,elapsed:r,expectedIn:a}){if(e==="connected")return null;if(e==="awaiting")return t.jsx(k,{accent:"var(--color-text-muted)",children:t.jsx(F,{children:t.jsx(_,{expectedIn:a})})});const n=e==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return t.jsxs(k,{accent:He[e],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[t.jsx(F,{children:n}),t.jsxs(Xe,{children:["T+",t.jsx(H,{value:r})]})]})}const He={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},F=o.span`
  font-weight: 600;
`,Xe=o.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function Rt({entries:e}){return e.length===0?null:t.jsxs(Ue,{role:"status","aria-live":"polite",children:[t.jsx(Ge,{}),t.jsx(Ke,{children:"SOURCE OFFLINE"}),t.jsx(We,{children:e.map(r=>t.jsxs(Ye,{children:[t.jsx(qe,{children:r.name}),t.jsx(Qe,{children:r.status}),t.jsx(Ze,{children:Ve(r.elapsedMs)}),r.onRetry&&t.jsx(R,{size:"sm",onClick:r.onRetry,"aria-label":`Retry ${r.name} now`,children:"Retry now"})]},r.id))})]})}function Ve(e){return P(V("irl:s",e/1e3))}const Ue=o.div`
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
`,Ge=o.span`
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
`,Ke=o.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,We=o.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,Ye=o.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,qe=o.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,Qe=o.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,Ze=o.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,Lt=o.div`
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
`,Tt=o.div`
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
`,Bt=o.div`
  display: flex;
  align-items: stretch;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Ot=o.input`
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
`,Mt=o.button`
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
`,Pt=o.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,Nt=o.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,At=o.div`
  margin-top: var(--gap-section-compact);
  min-height: 1.4em;
  color: var(--color-info-text);
  font-size: var(--font-size-sm);
`,Dt=o.div`
  min-height: 3.6em;
`,_t=o.div`
  min-height: 7em;
`,Ht=o.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,Xt=o.button`
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
`,Vt=o.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,Ut=o.ul`
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
`,Je={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},et={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function tt(e){return Je[e]??et}function Gt({label:e}){const r=tt(e);return t.jsx(ot,{$bg:r.bg,$fg:r.fg,$border:r.border,children:e})}const ot=o.span`
  display: inline-block;
  padding: var(--inset-chip);
  border-radius: var(--radius-regular);
  font-size: var(--font-size-caption);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${({$bg:e,$fg:r,$border:a})=>b`
    background: ${e};
    color: ${r};
    border: 1px solid ${a};
  `}
`;U({id:"default-dark",name:"Default Dark",theme:X});function Kt({kind:e,local:r,remote:a,remoteLabel:n="Peer"}){const i=e==="major"?"alert":"status",c=e==="major"?"RELOAD REQUIRED":e==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",d=e==="unknown"?`${n} didn't report a version`:`${n} v${a??"?"} ↔ this v${r}`;return t.jsxs(k,{accent:rt[e],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:i,children:[t.jsx(at,{children:c}),t.jsx(nt,{children:d})]})}const rt={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},at=o.span`
  font-weight: 600;
`,nt=o.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{k as B,yt as C,kt as D,Pt as E,zt as F,Ot as H,Vt as N,It as P,Nt as R,Ft as S,Gt as T,Kt as V,wt as a,$t as b,jt as c,Ct as d,Et as e,St as f,Rt as g,bt as h,$e as i,tt as j,Lt as k,Tt as l,Bt as m,Mt as n,Dt as o,je as p,At as q,_t as r,Ht as s,Xt as t,B as u,Ut as v};
