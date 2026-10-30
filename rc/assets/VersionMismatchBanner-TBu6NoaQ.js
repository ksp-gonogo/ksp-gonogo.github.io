import{z as P,w as N}from"./contributionsRead-ByK-2wfU.js";import{j as t}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import o,{css as w}from"./ext-styled-components-DAuodqsN.js";import{e as L,a7 as A,C as D,M as _,ad as H,ai as X,ab as V,a1 as G}from"./ModalSaveBar-O_jCEY6r.js";import{r as s}from"./ext-react-C0MU9AHG.js";import{a_ as U,db as W}from"./view-clock-formula-BsZkGtdW.js";import"./ksp-enum-names-Bkm_lBTj.js";import"./screen-BjBOitw-.js";import"./lagrange-DBwlSE8s.js";import"./use-transmissions-B3gNYSSw.js";import"./websocket-transport-BKef8HsD.js";import"./processorPerfBudget-Bl-tfMtn.js";import"./index-DqUIH49W.js";function K(e){if(e===void 0||e===""||e==="raw")return"";try{return P({magnitude:0,unit:e},{format:e}).symbol}catch{return""}}function mt(e,r){if(!e)return;const a=K(r);return a?`${e} (${a})`:e}function $({accent:e,anchor:r="inline",top:a=12,zIndex:i=999,glow:c,pulse:f=!1,role:u="status",ariaLive:m,onClick:x,interactive:h=!1,children:d}){const p=m??(u==="alert"?"assertive":"polite");return r==="top"?t.jsxs(Y,{$accent:e,$top:a,$zIndex:i,$glow:c,$interactive:h,role:u,"aria-live":p,children:[t.jsx(F,{$accent:e,$pulse:f}),d]}):t.jsxs(q,{as:x?"button":"div",type:x?"button":void 0,$accent:e,$glow:c,$clickable:!!x,$interactive:h,role:u,"aria-live":p,onClick:x,children:[t.jsx(F,{$accent:e,$pulse:f}),d]})}const Y=o.div`
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
`,q=o.div`
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
`;function vt({children:e}){return t.jsx(Q,{children:e})}const Q=o.div`
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
`,Z=2e3,J={copied:e=>`Copied ${e}`,failed:()=>"Could not copy, select the text instead"};function gt({command:e,label:r}){const[a,i]=s.useState("idle"),c=s.useRef(void 0);s.useEffect(()=>()=>clearTimeout(c.current),[]);async function f(){let u="copied";try{await navigator.clipboard.writeText(e)}catch{u="failed"}i(u),clearTimeout(c.current),c.current=setTimeout(()=>i("idle"),Z)}return t.jsxs(ee,{children:[t.jsx(te,{role:"group","aria-label":r,tabIndex:0,children:t.jsx(oe,{children:e})}),t.jsx(L,{variant:"ghost",type:"button",onClick:()=>void f(),"aria-label":`Copy ${r}`,children:a==="copied"?"Copied":"Copy"}),t.jsx(A,{visuallyHidden:!0,children:J[a]?.(r)})]})}const ee=o.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,te=o.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,oe=o.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function re(e,r){if(!r)return!0;const a=r.toLowerCase();return(e.label??e.key).toLowerCase().includes(a)||e.key.toLowerCase().includes(a)}function bt({keys:e,value:r,onChange:a,placeholder:i="Search...",emptyHint:c="No matches"}){const[f,u]=s.useState(""),m=s.useMemo(()=>e.filter(d=>re(d,f)),[e,f]),x=s.useMemo(()=>{const d=new Map;for(const p of m){const n=p.group??"Other";let l=d.get(n);l||(l=[],d.set(n,l)),l.push(p)}return[...d.entries()].sort(([p],[n])=>p.localeCompare(n))},[m]),h=d=>{const p=new Set(r);p.has(d)?p.delete(d):p.add(d),a(p)};return t.jsxs(ae,{children:[t.jsx(ne,{type:"text",value:f,placeholder:i,onChange:d=>u(d.target.value)}),t.jsx(ie,{children:x.length===0?t.jsx(he,{children:c}):x.map(([d,p])=>t.jsxs(se,{children:[t.jsx(le,{children:d}),p.map(n=>{const l=r.has(n.key),v=`dkmp-${n.key}`;return t.jsxs(ce,{$checked:l,children:[t.jsx(de,{id:v,type:"checkbox",checked:l,onChange:()=>h(n.key)}),t.jsxs(pe,{htmlFor:v,children:[t.jsx(ue,{$checked:l,children:l&&t.jsx(D,{size:11,strokeWidth:3})}),t.jsx(fe,{children:n.label??n.key}),n.unit&&t.jsx(xe,{children:n.unit})]})]},n.key)})]},d))})]})}const ae=o.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,ne=o.input`
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
`,ie=o.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,se=o.div``,le=o.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,ce=o.div`
  background: ${({$checked:e})=>e?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,de=o.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,pe=o.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,ue=o.span`
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
`,fe=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,xe=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,he=o.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function wt({show:e,message:r,hint:a,children:i}){return e?t.jsxs(ve,{children:[t.jsx(ge,{...me,children:i}),t.jsxs(be,{role:"status","aria-live":"polite",children:[t.jsx(we,{children:r}),a&&t.jsx(ye,{children:a})]})]}):t.jsx(t.Fragment,{children:i})}const me={inert:""},ve=o.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,ge=o.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,be=o.div`
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
`,we=o.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,ye=o.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,j=84,z=60,ke=48,$e=72,je=232;function ze(e){return Math.max(1,Math.floor((e-j-ke-$e)/z)+1)}function Ce(e,r){const a=Math.max(0,Math.round((e-j)/z)),i=ze(r),c=Math.floor(a/i);return c===0?{bottom:e,offset:0}:{bottom:j+(a-c*i)*z,offset:c*je}}function Ee(e){return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}const Ie=()=>window.innerHeight,Se=()=>Number.POSITIVE_INFINITY,B=s.createContext(null),Fe=400,M="(pointer: coarse)";function Re(e){if(typeof window.matchMedia!="function")return()=>{};const r=window.matchMedia(M);return r.addEventListener("change",e),()=>r.removeEventListener("change",e)}function Le(){return typeof window.matchMedia=="function"&&window.matchMedia(M).matches}function yt({children:e}){const[r,a]=s.useState(!1),i=s.useSyncExternalStore(Re,Le,()=>!1),c=s.useSyncExternalStore(Ee,Ie,Se),f=s.useCallback(g=>Ce(g,c),[c]),[u,m]=s.useState(!1),x=u||r&&!i,h=s.useId(),d=s.useRef(null),p=s.useRef(null),n=s.useRef(null),l=s.useCallback(()=>{n.current!==null&&(window.clearTimeout(n.current),n.current=null)},[]),v=s.useCallback(()=>{l(),i||a(!0)},[l,i]),y=s.useCallback(()=>{l(),n.current=window.setTimeout(()=>{n.current=null,a(!1)},Fe)},[l]),C=s.useCallback(()=>{l(),m(g=>!g)},[l]);s.useEffect(()=>()=>l(),[l]);const E=s.useCallback(()=>{l(),m(!1),a(!1)},[l]);s.useEffect(()=>{if(!u&&!r)return;const g=()=>{l(),m(!1),a(!1)},I=k=>{k.key==="Escape"&&(g(),p.current?.focus())},S=k=>{d.current?.contains(k.target)||g()};return document.addEventListener("keydown",I,!0),document.addEventListener("pointerdown",S),()=>{document.removeEventListener("keydown",I,!0),document.removeEventListener("pointerdown",S)}},[u,r,l]);const O=s.useMemo(()=>({active:x,expanded:u,toggle:C,close:E,regionId:h,toggleRef:p,place:f,onMouseEnter:v,onMouseLeave:y,onFocus:v,onBlur:y}),[x,u,C,E,h,f,v,y]);return t.jsx(B.Provider,{value:O,children:t.jsx("div",{id:h,ref:d,children:e})})}function T(){return s.useContext(B)}function kt({bottom:e,children:r,onClick:a,onMouseEnter:i,onMouseLeave:c,onFocus:f,onBlur:u,...m}){const x=T(),h=x?.active??!0,d=x?.place(e)??{bottom:e,offset:0},p=m["aria-label"]??m.title;return t.jsxs(b,{type:"button",$visible:h,$bottom:d.bottom,$offset:d.offset,tabIndex:h?0:-1,onMouseEnter:n=>{i?.(n),x?.onMouseEnter()},onMouseLeave:n=>{c?.(n),x?.onMouseLeave()},onFocus:n=>{f?.(n),x?.onFocus()},onBlur:n=>{u?.(n),x?.onBlur()},onClick:n=>{a?.(n),x?.close()},...m,children:[p?t.jsx(Be,{$visible:h,"aria-hidden":"true",children:p}):null,t.jsx(Me,{$visible:h,children:r})]})}const b=o.button`
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
`,Be=o.span`
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
`,Me=o.span`
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
`;function $t(){const e=T();return e?t.jsx(Te,{type:"button",ref:e.toggleRef,"aria-label":"Dashboard controls","aria-expanded":e.expanded,"aria-controls":e.regionId,onClick:e.toggle,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur,children:t.jsx(_,{size:22})}):null}const Te=o.button`
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
`;function jt({bottom:e,label:r,onAccept:a,onDismiss:i,autoDismissMs:c=15e3,acceptLabel:f}){return s.useEffect(()=>{if(c<=0)return;const u=window.setTimeout(i,c);return()=>window.clearTimeout(u)},[c,i]),t.jsxs(Oe,{$bottom:e,role:"status","aria-live":"polite",children:[t.jsx(Pe,{type:"button",onClick:a,"aria-label":f??r,children:r}),t.jsx(H,{text:"Dismiss",children:t.jsx(Ne,{type:"button",onClick:i,"aria-label":"Dismiss",children:"×"})})]})}const Oe=o.div`
  ${({$bottom:e})=>e!==void 0?w`
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
`,Pe=o.button`
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
`,Ne=o.button`
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
`,zt=s.forwardRef(function({id:r,label:a="Choose file",accept:i,multiple:c,fileName:f,emptyText:u="No file chosen",disabled:m,onChange:x},h){const d=s.useId(),p=r??d,n=s.useRef(null);return t.jsxs(Ae,{children:[t.jsx(_e,{id:p,ref:l=>{if(n.current=l,typeof h=="function"){h(l);return}h&&(h.current=l)},type:"file",accept:i,multiple:c,disabled:m,onChange:x}),t.jsx(De,{htmlFor:p,$disabled:!!m,children:a}),t.jsx(He,{"aria-live":"polite",$hasFile:!!f,children:f??u})]})}),Ae=o.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,De=o.label`
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
`,_e=o.input`
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
`,He=o.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:e})=>e?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`,Ct=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function Et({state:e,elapsed:r,expectedIn:a}){if(e==="connected")return null;if(e==="awaiting")return t.jsx($,{accent:"var(--color-text-muted)",children:t.jsx(R,{children:t.jsx(X,{expectedIn:a})})});const i=e==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return t.jsxs($,{accent:Xe[e],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[t.jsx(R,{children:i}),t.jsxs(Ve,{children:["T+",t.jsx(V,{value:r})]})]})}const Xe={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},R=o.span`
  font-weight: 600;
`,Ve=o.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function It({entries:e}){return e.length===0?null:t.jsxs(Ue,{role:"status","aria-live":"polite",children:[t.jsx(We,{}),t.jsx(Ke,{children:"SOURCE OFFLINE"}),t.jsx(Ye,{children:e.map(r=>t.jsxs(qe,{children:[t.jsx(Qe,{children:r.name}),t.jsx(Ze,{children:r.status}),t.jsx(Je,{children:Ge(r.elapsedMs)}),r.onRetry&&t.jsx(L,{size:"sm",onClick:r.onRetry,"aria-label":`Retry ${r.name} now`,children:"Retry now"})]},r.id))})]})}function Ge(e){return N(U("irl:s",e/1e3))}const Ue=o.div`
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
`,We=o.span`
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
`,Ye=o.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,qe=o.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,Qe=o.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,Ze=o.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,Je=o.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,St=o.div`
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
`,Ft=o.div`
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
`,Rt=o.div`
  display: flex;
  align-items: stretch;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Lt=o.input`
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
`,Bt=o.button`
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
`,Mt=o.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,Tt=o.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,Ot=o.div`
  min-height: 3.6em;
`,Pt=o.div`
  min-height: 7em;
`,Nt=o.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,At=o.button`
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
`,Dt=o.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,_t=o.ul`
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
`;W({id:"default-dark",name:"Default Dark",theme:G});function Ht({kind:e,local:r,remote:a,remoteLabel:i="Peer"}){const c=e==="major"?"alert":"status",f=e==="major"?"RELOAD REQUIRED":e==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",u=e==="unknown"?`${i} didn't report a version`:`${i} v${a??"?"} ↔ this v${r}`;return t.jsxs($,{accent:et[e],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:c,children:[t.jsx(tt,{children:f}),t.jsx(ot,{children:u})]})}const et={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},tt=o.span`
  font-weight: 600;
`,ot=o.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{$ as B,gt as C,bt as D,Mt as E,kt as F,Lt as H,Dt as N,Ct as P,Tt as R,Et as S,Ht as V,vt as a,wt as b,yt as c,$t as d,jt as e,zt as f,It as g,mt as h,ze as i,St as j,Ft as k,Rt as l,Bt as m,Ot as n,Pt as o,Ce as p,Nt as q,At as r,_t as s,T as u};
