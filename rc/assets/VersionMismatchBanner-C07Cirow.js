import{u as N,U as A}from"./contributionsRead-ChJURHK-.js";import{j as t}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import o,{css as w}from"./ext-styled-components-DAuodqsN.js";import{aq as D,e as L,a7 as _,C as H,M as X,ag as V,ao as W,ac as U,a1 as G}from"./ModalSaveBar-Wk_Pmz60.js";import{r as l}from"./ext-react-C0MU9AHG.js";import{aW as K,d8 as Y}from"./view-clock-formula-BskYJ4Bb.js";import"./ksp-enum-names-ClbTRfl5.js";import"./logger-2_QM1wvD.js";import"./screen-CAKDCRrz.js";import"./lagrange-D5tt68Y_.js";import"./use-transmissions-CIgMR6j_.js";import"./websocket-transport-iYbOorFT.js";import"./processorPerfBudget-egMC3TYT.js";import"./index-DqUIH49W.js";function q(e){if(e===void 0||e===""||e==="raw")return"";try{return N({magnitude:0,unit:e},{format:e}).symbol}catch{return""}}function kt(e,a){if(!e)return;const r=q(a);return r?`${e} (${r})`:e}function B({children:e,actions:a}){return t.jsxs(Z,{children:[t.jsx(D,{justify:"start",align:"baseline",wrap:!0,style:Q,children:e}),a?t.jsx(J,{children:a}):null]})}const Q={flex:"1 1 auto",minWidth:0,whiteSpace:"normal"},Z=o.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,J=o.div`
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: var(--gap-related);
  margin-left: auto;
`;function $({accent:e,anchor:a="inline",top:r=12,zIndex:i=999,glow:c,pulse:f=!1,role:u="status",ariaLive:m,onClick:x,interactive:h=!1,actions:d,children:p}){const n=d===void 0?p:t.jsx(B,{actions:d,children:p}),s=m??(u==="alert"?"assertive":"polite");return a==="top"?t.jsxs(ee,{$accent:e,$top:r,$zIndex:i,$glow:c,$interactive:h,role:u,"aria-live":s,children:[t.jsx(F,{$accent:e,$pulse:f}),n]}):t.jsxs(te,{as:x?"button":"div",type:x?"button":void 0,$accent:e,$glow:c,$clickable:!!x,$interactive:h,role:u,"aria-live":s,onClick:x,children:[t.jsx(F,{$accent:e,$pulse:f}),n]})}const ee=o.div`
  position: fixed;
  top: ${e=>e.$top}px;
  left: 50%;
  transform: translateX(-50%);
  /* Without these a pill at left: 50% can grow to half the viewport only, so on a phone its text wraps into a tall narrow capsule. */
  width: max-content;
  max-width: calc(100vw - 24px);
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
  ${e=>e.$glow?w`box-shadow: ${e.$glow};`:""}
`,te=o.div`
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
  max-width: 100%;
  cursor: ${e=>e.$clickable?"pointer":"default"};
  pointer-events: ${e=>e.$clickable||e.$interactive?"auto":"none"};
  animation: bannerSlideIn var(--duration-entrance) var(--ease-entrance) forwards;
  transform-origin: right center;
  will-change: transform, opacity;
  ${e=>e.$glow?w`box-shadow: ${e.$glow};`:""}

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
`,F=o.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${e=>e.$accent};
  flex-shrink: 0;

  ${e=>e.$pulse&&w`
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
`;function $t({children:e}){return t.jsx(oe,{children:e})}const oe=o.div`
  position: fixed;
  /* Off the spacing ladder: these are arithmetic on the FAB geometry (88 = 24 + 48 + 16, 112 = 88 + 24) and move only with it. */
  right: calc(88px + env(safe-area-inset-right, 0px));
  bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  /* Below the modal layer: an interactive pill above a dialog would sit outside its focus trap. */
  z-index: 90;
  display: flex;
  flex-direction: row-reverse;
  /* Banners that do not fit on one line start another line above it, so none is pushed off the left edge. */
  flex-wrap: wrap-reverse;
  align-content: flex-end;
  align-items: flex-end;
  gap: var(--gap-related);
  min-height: 48px;
  max-width: calc(100vw - 112px - env(safe-area-inset-right, 0px));
  pointer-events: none;

  /* The strip passes clicks through; each banner is at least the strip's height, grows with its own wrapped text, and does not shrink. */
  > * {
    pointer-events: auto;
    flex-shrink: 0;
    max-width: 100%;
    min-height: 48px;
    display: inline-flex;
    align-items: center;
  }

  /* On a phone the strip beside the FAB is too short for even one pill, so the banners stack in a column above it, newest nearest the FAB, and long text wraps. */
  @media (max-width: 640px) {
    right: calc(16px + env(safe-area-inset-right, 0px));
    bottom: calc(88px + env(safe-area-inset-bottom, 0px));
    flex-direction: column-reverse;
    flex-wrap: nowrap;
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
`,re=2e3,ae={copied:e=>`Copied ${e}`,failed:()=>"Could not copy, select the text instead"};function jt({command:e,label:a}){const[r,i]=l.useState("idle"),c=l.useRef(void 0);l.useEffect(()=>()=>clearTimeout(c.current),[]);async function f(){let u="copied";try{await navigator.clipboard.writeText(e)}catch{u="failed"}i(u),clearTimeout(c.current),c.current=setTimeout(()=>i("idle"),re)}return t.jsxs(ne,{children:[t.jsx(ie,{role:"group","aria-label":a,tabIndex:0,children:t.jsx(se,{children:e})}),t.jsx(L,{variant:"ghost",type:"button",onClick:()=>void f(),"aria-label":`Copy ${a}`,children:r==="copied"?"Copied":"Copy"}),t.jsx(_,{visuallyHidden:!0,children:ae[r]?.(a)})]})}const ne=o.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,ie=o.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,se=o.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function le(e,a){if(!a)return!0;const r=a.toLowerCase();return(e.label??e.key).toLowerCase().includes(r)||e.key.toLowerCase().includes(r)}function zt({keys:e,value:a,onChange:r,placeholder:i="Search...",emptyHint:c="No matches"}){const[f,u]=l.useState(""),m=l.useMemo(()=>e.filter(d=>le(d,f)),[e,f]),x=l.useMemo(()=>{const d=new Map;for(const p of m){const n=p.group??"Other";let s=d.get(n);s||(s=[],d.set(n,s)),s.push(p)}return[...d.entries()].sort(([p],[n])=>p.localeCompare(n))},[m]),h=d=>{const p=new Set(a);p.has(d)?p.delete(d):p.add(d),r(p)};return t.jsxs(ce,{children:[t.jsx(de,{type:"text",value:f,placeholder:i,onChange:d=>u(d.target.value)}),t.jsx(pe,{children:x.length===0?t.jsx(we,{children:c}):x.map(([d,p])=>t.jsxs(ue,{children:[t.jsx(fe,{children:d}),p.map(n=>{const s=a.has(n.key),v=`dkmp-${n.key}`;return t.jsxs(xe,{$checked:s,children:[t.jsx(he,{id:v,type:"checkbox",checked:s,onChange:()=>h(n.key)}),t.jsxs(me,{htmlFor:v,children:[t.jsx(ve,{$checked:s,children:s&&t.jsx(H,{size:11,strokeWidth:3})}),t.jsx(ge,{children:n.label??n.key}),n.unit&&t.jsx(be,{children:n.unit})]})]},n.key)})]},d))})]})}const ce=o.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,de=o.input`
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
`,pe=o.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,ue=o.div``,fe=o.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,xe=o.div`
  background: ${({$checked:e})=>e?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,he=o.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,me=o.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,ve=o.span`
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
`,ge=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,be=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,we=o.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function Ct({show:e,message:a,hint:r,children:i}){return e?t.jsxs(ke,{children:[t.jsx($e,{...ye,children:i}),t.jsxs(je,{role:"status","aria-live":"polite",children:[t.jsx(ze,{children:a}),r&&t.jsx(Ce,{children:r})]})]}):t.jsx(t.Fragment,{children:i})}const ye={inert:""},ke=o.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,$e=o.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,je=o.div`
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
`,ze=o.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,Ce=o.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,j=84,z=60,Ee=48,Se=72,Ie=232;function Fe(e){return Math.max(1,Math.floor((e-j-Ee-Se)/z)+1)}function Re(e,a){const r=Math.max(0,Math.round((e-j)/z)),i=Fe(a),c=Math.floor(r/i);return c===0?{bottom:e,offset:0}:{bottom:j+(r-c*i)*z,offset:c*Ie}}function Le(e){return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}const Be=()=>window.innerHeight,Te=()=>Number.POSITIVE_INFINITY,T=l.createContext(null),Me=400,M="(pointer: coarse)";function Oe(e){if(typeof window.matchMedia!="function")return()=>{};const a=window.matchMedia(M);return a.addEventListener("change",e),()=>a.removeEventListener("change",e)}function Pe(){return typeof window.matchMedia=="function"&&window.matchMedia(M).matches}function Et({children:e}){const[a,r]=l.useState(!1),i=l.useSyncExternalStore(Oe,Pe,()=>!1),c=l.useSyncExternalStore(Le,Be,Te),f=l.useCallback(g=>Re(g,c),[c]),[u,m]=l.useState(!1),x=u||a&&!i,h=l.useId(),d=l.useRef(null),p=l.useRef(null),n=l.useRef(null),s=l.useCallback(()=>{n.current!==null&&(window.clearTimeout(n.current),n.current=null)},[]),v=l.useCallback(()=>{s(),i||r(!0)},[s,i]),y=l.useCallback(()=>{s(),n.current=window.setTimeout(()=>{n.current=null,r(!1)},Me)},[s]),C=l.useCallback(()=>{s(),m(g=>!g)},[s]);l.useEffect(()=>()=>s(),[s]);const E=l.useCallback(()=>{s(),m(!1),r(!1)},[s]);l.useEffect(()=>{if(!u&&!a)return;const g=()=>{s(),m(!1),r(!1)},S=k=>{k.key==="Escape"&&(g(),p.current?.focus())},I=k=>{d.current?.contains(k.target)||g()};return document.addEventListener("keydown",S,!0),document.addEventListener("pointerdown",I),()=>{document.removeEventListener("keydown",S,!0),document.removeEventListener("pointerdown",I)}},[u,a,s]);const P=l.useMemo(()=>({active:x,expanded:u,toggle:C,close:E,regionId:h,toggleRef:p,place:f,onMouseEnter:v,onMouseLeave:y,onFocus:v,onBlur:y}),[x,u,C,E,h,f,v,y]);return t.jsx(T.Provider,{value:P,children:t.jsx("div",{id:h,ref:d,children:e})})}function O(){return l.useContext(T)}function St({bottom:e,children:a,onClick:r,onMouseEnter:i,onMouseLeave:c,onFocus:f,onBlur:u,...m}){const x=O(),h=x?.active??!0,d=x?.place(e)??{bottom:e,offset:0},p=m["aria-label"]??m.title;return t.jsxs(b,{type:"button",$visible:h,$bottom:d.bottom,$offset:d.offset,tabIndex:h?0:-1,onMouseEnter:n=>{i?.(n),x?.onMouseEnter()},onMouseLeave:n=>{c?.(n),x?.onMouseLeave()},onFocus:n=>{f?.(n),x?.onFocus()},onBlur:n=>{u?.(n),x?.onBlur()},onClick:n=>{r?.(n),x?.close()},...m,children:[p?t.jsx(Ne,{$visible:h,"aria-hidden":"true",children:p}):null,t.jsx(Ae,{$visible:h,children:a})]})}const b=o.button`
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
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  cursor: pointer;
`,Ne=o.span`
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
`,Ae=o.span`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-circle);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-strong);
  color: var(--color-info-text);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  flex: none;
  opacity: ${({$visible:e})=>e?1:0};
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
    ${b}:hover & {
      background: var(--color-border-subtle);
      border-color: var(--color-info-mark);
      transform: scale(1.05);
    }
  }

  ${b}:active & {
    transform: scale(0.97);
  }

  ${b}:focus-visible & {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }

  @media (pointer: coarse) {
    width: 48px;
    height: 48px;
  }
`;function It(){const e=O();return e?t.jsx(De,{type:"button",ref:e.toggleRef,"aria-label":"Dashboard controls","aria-expanded":e.expanded,"aria-controls":e.regionId,onClick:e.toggle,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur,children:t.jsx(X,{size:22})}):null}const De=o.button`
  position: fixed;
  /* BannerStack's 88px, FabPrompt's 72px and Fab's own right: 24px are still
     literal arithmetic on this size and edge, and the dashboard screens reserve
     room beneath their tiles from the same two tokens. */
  bottom: calc(var(--fab-edge) + env(safe-area-inset-bottom, 0px));
  right: calc(var(--fab-edge) + env(safe-area-inset-right, 0px));
  width: var(--fab-size);
  height: var(--fab-size);
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
`;function Ft({bottom:e,label:a,onAccept:r,onDismiss:i,autoDismissMs:c=15e3,acceptLabel:f}){return l.useEffect(()=>{if(c<=0)return;const u=window.setTimeout(i,c);return()=>window.clearTimeout(u)},[c,i]),t.jsxs(_e,{$bottom:e,role:"status","aria-live":"polite",children:[t.jsx(He,{type:"button",onClick:r,"aria-label":f??a,children:a}),t.jsx(V,{text:"Dismiss",children:t.jsx(Xe,{type:"button",onClick:i,"aria-label":"Dismiss",children:"×"})})]})}const _e=o.div`
  ${({$bottom:e})=>e!==void 0?w`
          position: fixed;
          bottom: calc(${e}px + env(safe-area-inset-bottom, 0px));
          /* 72 = 24 (the Fab inset) + 40 (its width) + 8, part of the FAB geometry chain. */
          right: calc(72px + env(safe-area-inset-right, 0px));
          z-index: var(--z-fab);
        `:""}
  min-height: 40px;
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
    min-height: 48px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,He=o.button`
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
  text-align: start;

  &:hover {
    background: var(--color-border-subtle);
  }

  &:focus-visible {
    outline: 2px solid var(--color-info-mark);
    outline-offset: -2px;
  }
`,Xe=o.button`
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
`,Rt=l.forwardRef(function({id:a,label:r="Choose file",accept:i,multiple:c,fileName:f,emptyText:u="No file chosen",disabled:m,onChange:x},h){const d=l.useId(),p=a??d,n=l.useRef(null);return t.jsxs(Ve,{children:[t.jsx(Ue,{id:p,ref:s=>{if(n.current=s,typeof h=="function"){h(s);return}h&&(h.current=s)},type:"file",accept:i,multiple:c,disabled:m,onChange:x}),t.jsx(We,{htmlFor:p,$disabled:!!m,children:r}),t.jsx(Ge,{"aria-live":"polite",$hasFile:!!f,children:f??u})]})}),Ve=o.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,We=o.label`
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
`,Ue=o.input`
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
`,Ge=o.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:e})=>e?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`,Lt=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function Bt({state:e,elapsed:a,expectedIn:r}){if(e==="connected")return null;if(e==="awaiting")return t.jsx($,{accent:"var(--color-text-muted)",children:t.jsx(R,{children:t.jsx(W,{expectedIn:r})})});const i=e==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return t.jsxs($,{accent:Ke[e],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[t.jsx(R,{children:i}),t.jsxs(Ye,{children:["T+",t.jsx(U,{value:a})]})]})}const Ke={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},R=o.span`
  font-weight: 600;
`,Ye=o.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function Tt({entries:e}){if(e.length===0)return null;const a=e.filter(r=>r.onRetry);return t.jsxs(Qe,{role:"status","aria-live":"polite",children:[t.jsx(Ze,{}),t.jsxs(B,{actions:a.length>0?a.map(r=>t.jsx(L,{size:"sm",onClick:r.onRetry,"aria-label":`Retry ${r.name} now`,children:"Retry now"},r.id)):void 0,children:[t.jsx(Je,{children:"SOURCE OFFLINE"}),t.jsx(et,{children:e.map(r=>t.jsxs(tt,{children:[t.jsx(ot,{children:r.name}),t.jsx(rt,{children:r.status}),t.jsx(at,{children:qe(r.elapsedMs)})]},r.id))})]})]})}function qe(e){return A(K("irl:s",e/1e3))}const Qe=o.div`
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
  max-width: 100%;
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
`,Ze=o.span`
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
`,Je=o.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,et=o.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: wrap;
`,tt=o.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,ot=o.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,rt=o.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,at=o.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,Mt=o.div`
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
`,Ot=o.div`
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
`,Pt=o.div`
  display: flex;
  align-items: stretch;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Nt=o.input`
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
`,At=o.button`
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
`,Dt=o.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,_t=o.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,Ht=o.div`
  min-height: 3.6em;
`,Xt=o.div`
  min-height: 7em;
`,Vt=o.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,Wt=o.button`
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
`,Ut=o.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,Gt=o.ul`
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
`;Y({id:"default-dark",name:"Default Dark",theme:G});function Kt({kind:e,local:a,remote:r,remoteLabel:i="Peer"}){const c=e==="major"?"alert":"status",f=e==="major"?"RELOAD REQUIRED":e==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",u=e==="unknown"?`${i} didn't report a version`:`${i} v${r??"?"} ↔ this v${a}`;return t.jsxs($,{accent:nt[e],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:c,children:[t.jsx(it,{children:f}),t.jsx(st,{children:u})]})}const nt={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},it=o.span`
  font-weight: 600;
`,st=o.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{$ as B,jt as C,zt as D,Dt as E,St as F,Nt as H,Ut as N,Lt as P,_t as R,Bt as S,Kt as V,B as a,$t as b,Ct as c,Et as d,It as e,Ft as f,Rt as g,Tt as h,kt as i,Fe as j,Mt as k,Ot as l,Pt as m,At as n,Ht as o,Re as p,Xt as q,Vt as r,Wt as s,Gt as t,O as u};
