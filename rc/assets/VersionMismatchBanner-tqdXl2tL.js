import{E as I,w as L}from"./contributionsRead-rHOkhv7C.js";import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import o,{css as h}from"./ext-styled-components-Br73TgY3.js";import{e as j,a6 as F,C as B,ah as T,a0 as M}from"./ModalSaveBar-D4LobfAw.js";import{r as c}from"./ext-react-RRA14VTW.js";import{aO as O}from"./view-clock-formula-BxHT4C0f.js";import"./ksp-enum-names-Ct5ias81.js";import"./screen-BXZWTbYS.js";import{e as P}from"./registry-KND7l2V_.js";import"./lagrange-Bbg-NuQH.js";import"./use-transmissions-DB_m3j_g.js";import"./websocket-transport-jB3QmLj1.js";import"./processorPerfBudget-22LBnEZn.js";import"./index-dq6XYUov.js";function N(e){if(e===void 0||e===""||e==="raw")return"";try{return I({magnitude:0,unit:e},{format:e}).symbol}catch{return""}}function ir(e,t){if(!e)return;const a=N(t);return a?`${e} (${a})`:e}function z({accent:e,anchor:t="inline",top:a=12,zIndex:n=999,glow:i,pulse:l=!1,role:p="status",ariaLive:g,onClick:x,interactive:v=!1,children:d}){const s=g??(p==="alert"?"assertive":"polite");return t==="top"?r.jsxs(A,{$accent:e,$top:a,$zIndex:n,$glow:i,$interactive:v,role:p,"aria-live":s,children:[r.jsx($,{$accent:e,$pulse:l}),d]}):r.jsxs(D,{as:x?"button":"div",type:x?"button":void 0,$accent:e,$glow:i,$clickable:!!x,$interactive:v,role:p,"aria-live":s,onClick:x,children:[r.jsx($,{$accent:e,$pulse:l}),d]})}const A=o.div`
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
`,D=o.div`
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
`,$=o.span`
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
`;function sr({children:e}){return r.jsx(_,{children:e})}const _=o.div`
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
`,H=2e3,X={copied:e=>`Copied ${e}`,failed:()=>"Could not copy, select the text instead"};function lr({command:e,label:t}){const[a,n]=c.useState("idle"),i=c.useRef(void 0);c.useEffect(()=>()=>clearTimeout(i.current),[]);async function l(){let p="copied";try{await navigator.clipboard.writeText(e)}catch{p="failed"}n(p),clearTimeout(i.current),i.current=setTimeout(()=>n("idle"),H)}return r.jsxs(V,{children:[r.jsx(K,{role:"group","aria-label":t,tabIndex:0,children:r.jsx(G,{children:e})}),r.jsx(j,{variant:"ghost",type:"button",onClick:()=>void l(),"aria-label":`Copy ${t}`,children:a==="copied"?"Copied":"Copy"}),r.jsx(F,{visuallyHidden:!0,children:X[a]?.(t)})]})}const V=o.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,K=o.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,G=o.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function U(e,t){if(!t)return!0;const a=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(a)||e.key.toLowerCase().includes(a)}function cr({keys:e,value:t,onChange:a,placeholder:n="Search...",emptyHint:i="No matches"}){const[l,p]=c.useState(""),g=c.useMemo(()=>e.filter(d=>U(d,l)),[e,l]),x=c.useMemo(()=>{const d=new Map;for(const s of g){const u=s.group??"Other";let f=d.get(u);f||(f=[],d.set(u,f)),f.push(s)}return[...d.entries()].sort(([s],[u])=>s.localeCompare(u))},[g]),v=d=>{const s=new Set(t);s.has(d)?s.delete(d):s.add(d),a(s)};return r.jsxs(W,{children:[r.jsx(Y,{type:"text",value:l,placeholder:n,onChange:d=>p(d.target.value)}),r.jsx(q,{children:x.length===0?r.jsx(ne,{children:i}):x.map(([d,s])=>r.jsxs(Q,{children:[r.jsx(J,{children:d}),s.map(u=>{const f=t.has(u.key),m=`dkmp-${u.key}`;return r.jsxs(Z,{$checked:f,children:[r.jsx(ee,{id:m,type:"checkbox",checked:f,onChange:()=>v(u.key)}),r.jsxs(re,{htmlFor:m,children:[r.jsx(oe,{$checked:f,children:f&&r.jsx(B,{size:11,strokeWidth:3})}),r.jsx(te,{children:u.label??u.key}),u.unit&&r.jsx(ae,{children:u.unit})]})]},u.key)})]},d))})]})}const W=o.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,Y=o.input`
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
`,q=o.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,Q=o.div``,J=o.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,Z=o.div`
  background: ${({$checked:e})=>e?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,ee=o.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,re=o.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,oe=o.span`
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
`,te=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,ae=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,ne=o.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function dr({show:e,message:t,hint:a,children:n}){return e?r.jsxs(se,{children:[r.jsx(le,{...ie,children:n}),r.jsxs(ce,{role:"status","aria-live":"polite",children:[r.jsx(de,{children:t}),a&&r.jsx(pe,{children:a})]})]}):r.jsx(r.Fragment,{children:n})}const ie={inert:""},se=o.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,le=o.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,ce=o.div`
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
`,de=o.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,pe=o.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,C=c.createContext(null),ue=400,E="(pointer: coarse)";function fe(e){if(typeof window.matchMedia!="function")return()=>{};const t=window.matchMedia(E);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function xe(){return typeof window.matchMedia=="function"&&window.matchMedia(E).matches}function pr({children:e}){const[t,a]=c.useState(!1),n=c.useSyncExternalStore(fe,xe,()=>!1),[i,l]=c.useState(!1),p=t||i||n,g=c.useId(),x=c.useRef(null),v=c.useRef(null),d=c.useRef(null),s=c.useCallback(()=>{d.current!==null&&(window.clearTimeout(d.current),d.current=null)},[]),u=c.useCallback(()=>{s(),a(!0)},[s]),f=c.useCallback(()=>{s(),d.current=window.setTimeout(()=>{d.current=null,a(!1)},ue)},[s]),m=c.useCallback(()=>{s(),l(b=>!b)},[s]);c.useEffect(()=>()=>s(),[s]),c.useEffect(()=>{if(!i&&!t)return;const b=()=>{s(),l(!1),a(!1)},w=y=>{y.key==="Escape"&&(b(),v.current?.focus())},k=y=>{x.current?.contains(y.target)||b()};return document.addEventListener("keydown",w,!0),document.addEventListener("pointerdown",k),()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("pointerdown",k)}},[i,t,s]);const S=c.useMemo(()=>({active:p,expanded:i,toggle:m,regionId:g,toggleRef:v,onMouseEnter:u,onMouseLeave:f,onFocus:u,onBlur:f}),[p,i,m,g,u,f]);return r.jsx(C.Provider,{value:S,children:r.jsx("div",{id:g,ref:x,children:e})})}function R(){return c.useContext(C)}function ur({bottom:e,children:t,...a}){const n=R(),i=n?.active??!0,l=a["aria-label"]??a.title;return r.jsxs(ve,{$visible:i,$bottom:e,onMouseEnter:n?.onMouseEnter,onMouseLeave:n?.onMouseLeave,onFocus:n?.onFocus,onBlur:n?.onBlur,children:[l?r.jsx(ge,{$visible:i,"aria-hidden":"true",children:l}):null,r.jsx(me,{$visible:i,tabIndex:i?0:-1,...a,children:t})]})}const ve=o.div`
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
`,ge=o.span`
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
`,me=o.button`
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
`;function fr(){const e=R();return e?r.jsx(he,{type:"button",ref:e.toggleRef,"aria-label":"Dashboard controls","aria-expanded":e.expanded,"aria-controls":e.regionId,onClick:e.toggle,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur,children:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[r.jsx("circle",{cx:"5",cy:"12",r:"2"}),r.jsx("circle",{cx:"12",cy:"12",r:"2"}),r.jsx("circle",{cx:"19",cy:"12",r:"2"})]})}):null}const he=o.button`
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
`;function xr({bottom:e,label:t,onAccept:a,onDismiss:n,autoDismissMs:i=15e3,acceptLabel:l}){return c.useEffect(()=>{if(i<=0)return;const p=window.setTimeout(n,i);return()=>window.clearTimeout(p)},[i,n]),r.jsxs(be,{$bottom:e,role:"status","aria-live":"polite",children:[r.jsx(ye,{type:"button",onClick:a,"aria-label":l??t,children:t}),r.jsx(T,{text:"Dismiss",children:r.jsx(we,{type:"button",onClick:n,"aria-label":"Dismiss",children:"×"})})]})}const be=o.div`
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
`,ye=o.button`
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
`,we=o.button`
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
`,vr=c.forwardRef(function({id:t,label:a="Choose file",accept:n,multiple:i,fileName:l,emptyText:p="No file chosen",disabled:g,onChange:x},v){const d=c.useId(),s=t??d,u=c.useRef(null);return r.jsxs(ke,{children:[r.jsx(je,{id:s,ref:f=>{if(u.current=f,typeof v=="function"){v(f);return}v&&(v.current=f)},type:"file",accept:n,multiple:i,disabled:g,onChange:x}),r.jsx($e,{htmlFor:s,$disabled:!!g,children:a}),r.jsx(ze,{"aria-live":"polite",$hasFile:!!l,children:l??p})]})}),ke=o.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,$e=o.label`
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
`,je=o.input`
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
`,ze=o.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:e})=>e?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`,gr=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function mr({state:e,elapsedMs:t}){if(e==="connected")return null;const a=e==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return r.jsxs(z,{accent:Ee[e],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[r.jsx(Re,{children:a}),r.jsxs(Se,{children:["T+",Ce(t)]})]})}function Ce(e){const t=Math.max(0,Math.floor(e/1e3)),a=Math.floor(t/3600),n=Math.floor(t%3600/60),i=t%60,l=p=>String(p).padStart(2,"0");return a>0?`${a}:${l(n)}:${l(i)}`:`${l(n)}:${l(i)}`}const Ee={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},Re=o.span`
  font-weight: 600;
`,Se=o.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function hr({entries:e}){return e.length===0?null:r.jsxs(Le,{role:"status","aria-live":"polite",children:[r.jsx(Fe,{}),r.jsx(Be,{children:"SOURCE OFFLINE"}),r.jsx(Te,{children:e.map(t=>r.jsxs(Me,{children:[r.jsx(Oe,{children:t.name}),r.jsx(Pe,{children:t.status}),r.jsx(Ne,{children:Ie(t.elapsedMs)}),t.onRetry&&r.jsx(j,{size:"sm",onClick:t.onRetry,"aria-label":`Retry ${t.name} now`,children:"Retry now"})]},t.id))})]})}function Ie(e){return L(O("irl:s",e/1e3))}const Le=o.div`
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
`,Fe=o.span`
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
`,Be=o.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,Te=o.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,Me=o.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,Oe=o.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,Pe=o.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,Ne=o.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,br=o.div`
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
`,yr=o.div`
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
`,wr=o.div`
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,kr=o.input`
  flex: 1;
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
`,$r=o.button`
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
`,jr=o.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,zr=o.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,Cr=o.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,Er=o.button`
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
`,Rr=o.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,Sr=o.ul`
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
`,Ae={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},De={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function _e(e){return Ae[e]??De}function Ir({label:e}){const t=_e(e);return r.jsx(He,{$bg:t.bg,$fg:t.fg,$border:t.border,children:e})}const He=o.span`
  display: inline-block;
  padding: var(--inset-chip);
  border-radius: var(--radius-regular);
  font-size: var(--font-size-caption);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${({$bg:e,$fg:t,$border:a})=>h`
    background: ${e};
    color: ${t};
    border: 1px solid ${a};
  `}
`;P({id:"default-dark",name:"Default Dark",theme:M});function Lr({kind:e,local:t,remote:a,remoteLabel:n="Peer"}){const i=e==="major"?"alert":"status",l=e==="major"?"RELOAD REQUIRED":e==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",p=e==="unknown"?`${n} didn't report a version`:`${n} v${a??"?"} ↔ this v${t}`;return r.jsxs(z,{accent:Xe[e],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:i,children:[r.jsx(Ve,{children:l}),r.jsx(Ke,{children:p})]})}const Xe={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},Ve=o.span`
  font-weight: 600;
`,Ke=o.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{z as B,lr as C,cr as D,jr as E,ur as F,kr as H,Rr as N,gr as P,zr as R,mr as S,Ir as T,Lr as V,sr as a,dr as b,pr as c,fr as d,xr as e,vr as f,hr as g,ir as h,_e as i,br as j,yr as k,wr as l,$r as m,Cr as n,Er as o,Sr as p,R as u};
