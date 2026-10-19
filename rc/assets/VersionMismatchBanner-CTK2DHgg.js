import{E as L,w as F}from"./contributionsRead-DQvS4gtg.js";import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import o,{css as m}from"./ext-styled-components-DAuodqsN.js";import{e as z,a6 as B,C as T,ad as M,a0 as O}from"./ModalSaveBar-DIIgNet0.js";import{r as c}from"./ext-react-C0MU9AHG.js";import{aZ as P,d2 as N}from"./view-clock-formula-B2QsEMyH.js";import"./ksp-enum-names-D6NrIyJT.js";import"./screen-_OTxeo81.js";import"./lagrange-B0VKbmew.js";import"./use-transmissions-BQRtEn6E.js";import"./websocket-transport-DiFNCkR4.js";import"./processorPerfBudget-FfymOf-V.js";import"./index-BrbVhvxX.js";function A(e){if(e===void 0||e===""||e==="raw")return"";try{return L({magnitude:0,unit:e},{format:e}).symbol}catch{return""}}function ir(e,t){if(!e)return;const a=A(t);return a?`${e} (${a})`:e}function C({accent:e,anchor:t="inline",top:a=12,zIndex:i=999,glow:n,pulse:l=!1,role:p="status",ariaLive:x,onClick:v,interactive:g=!1,children:d}){const s=x??(p==="alert"?"assertive":"polite");return t==="top"?r.jsxs(D,{$accent:e,$top:a,$zIndex:i,$glow:n,$interactive:g,role:p,"aria-live":s,children:[r.jsx(j,{$accent:e,$pulse:l}),d]}):r.jsxs(_,{as:v?"button":"div",type:v?"button":void 0,$accent:e,$glow:n,$clickable:!!v,$interactive:g,role:p,"aria-live":s,onClick:v,children:[r.jsx(j,{$accent:e,$pulse:l}),d]})}const D=o.div`
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
  ${e=>e.$glow?m`box-shadow: ${e.$glow};`:""}
`,_=o.div`
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
  ${e=>e.$glow?m`box-shadow: ${e.$glow};`:""}

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
`,j=o.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${e=>e.$accent};
  flex-shrink: 0;

  ${e=>e.$pulse&&m`
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
`;function sr({children:e}){return r.jsx(H,{children:e})}const H=o.div`
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
`,X=2e3,V={copied:e=>`Copied ${e}`,failed:()=>"Could not copy, select the text instead"};function lr({command:e,label:t}){const[a,i]=c.useState("idle"),n=c.useRef(void 0);c.useEffect(()=>()=>clearTimeout(n.current),[]);async function l(){let p="copied";try{await navigator.clipboard.writeText(e)}catch{p="failed"}i(p),clearTimeout(n.current),n.current=setTimeout(()=>i("idle"),X)}return r.jsxs(K,{children:[r.jsx(G,{role:"group","aria-label":t,tabIndex:0,children:r.jsx(U,{children:e})}),r.jsx(z,{variant:"ghost",type:"button",onClick:()=>void l(),"aria-label":`Copy ${t}`,children:a==="copied"?"Copied":"Copy"}),r.jsx(B,{visuallyHidden:!0,children:V[a]?.(t)})]})}const K=o.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,G=o.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,U=o.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function W(e,t){if(!t)return!0;const a=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(a)||e.key.toLowerCase().includes(a)}function cr({keys:e,value:t,onChange:a,placeholder:i="Search...",emptyHint:n="No matches"}){const[l,p]=c.useState(""),x=c.useMemo(()=>e.filter(d=>W(d,l)),[e,l]),v=c.useMemo(()=>{const d=new Map;for(const s of x){const u=s.group??"Other";let f=d.get(u);f||(f=[],d.set(u,f)),f.push(s)}return[...d.entries()].sort(([s],[u])=>s.localeCompare(u))},[x]),g=d=>{const s=new Set(t);s.has(d)?s.delete(d):s.add(d),a(s)};return r.jsxs(Y,{children:[r.jsx(q,{type:"text",value:l,placeholder:i,onChange:d=>p(d.target.value)}),r.jsx(Q,{children:v.length===0?r.jsx(ie,{children:n}):v.map(([d,s])=>r.jsxs(Z,{children:[r.jsx(J,{children:d}),s.map(u=>{const f=t.has(u.key),h=`dkmp-${u.key}`;return r.jsxs(ee,{$checked:f,children:[r.jsx(re,{id:h,type:"checkbox",checked:f,onChange:()=>g(u.key)}),r.jsxs(oe,{htmlFor:h,children:[r.jsx(te,{$checked:f,children:f&&r.jsx(T,{size:11,strokeWidth:3})}),r.jsx(ae,{children:u.label??u.key}),u.unit&&r.jsx(ne,{children:u.unit})]})]},u.key)})]},d))})]})}const Y=o.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,q=o.input`
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
`,Q=o.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,Z=o.div``,J=o.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,ee=o.div`
  background: ${({$checked:e})=>e?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,re=o.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,oe=o.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,te=o.span`
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
`,ae=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,ne=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,ie=o.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function dr({show:e,message:t,hint:a,children:i}){return e?r.jsxs(le,{children:[r.jsx(ce,{...se,children:i}),r.jsxs(de,{role:"status","aria-live":"polite",children:[r.jsx(pe,{children:t}),a&&r.jsx(ue,{children:a})]})]}):r.jsx(r.Fragment,{children:i})}const se={inert:""},le=o.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,ce=o.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,de=o.div`
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
`,pe=o.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,ue=o.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,E=c.createContext(null),fe=400,R="(pointer: coarse)";function xe(e){if(typeof window.matchMedia!="function")return()=>{};const t=window.matchMedia(R);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function ve(){return typeof window.matchMedia=="function"&&window.matchMedia(R).matches}function pr({children:e}){const[t,a]=c.useState(!1),i=c.useSyncExternalStore(xe,ve,()=>!1),[n,l]=c.useState(!1),p=n||t&&!i,x=c.useId(),v=c.useRef(null),g=c.useRef(null),d=c.useRef(null),s=c.useCallback(()=>{d.current!==null&&(window.clearTimeout(d.current),d.current=null)},[]),u=c.useCallback(()=>{s(),i||a(!0)},[s,i]),f=c.useCallback(()=>{s(),d.current=window.setTimeout(()=>{d.current=null,a(!1)},fe)},[s]),h=c.useCallback(()=>{s(),l(b=>!b)},[s]);c.useEffect(()=>()=>s(),[s]);const w=c.useCallback(()=>{s(),l(!1),a(!1)},[s]);c.useEffect(()=>{if(!n&&!t)return;const b=()=>{s(),l(!1),a(!1)},k=y=>{y.key==="Escape"&&(b(),g.current?.focus())},$=y=>{v.current?.contains(y.target)||b()};return document.addEventListener("keydown",k,!0),document.addEventListener("pointerdown",$),()=>{document.removeEventListener("keydown",k,!0),document.removeEventListener("pointerdown",$)}},[n,t,s]);const I=c.useMemo(()=>({active:p,expanded:n,toggle:h,close:w,regionId:x,toggleRef:g,onMouseEnter:u,onMouseLeave:f,onFocus:u,onBlur:f}),[p,n,h,w,x,u,f]);return r.jsx(E.Provider,{value:I,children:r.jsx("div",{id:x,ref:v,children:e})})}function S(){return c.useContext(E)}function ur({bottom:e,children:t,onClick:a,...i}){const n=S(),l=n?.active??!0,p=i["aria-label"]??i.title;return r.jsxs(ge,{$visible:l,$bottom:e,onMouseEnter:n?.onMouseEnter,onMouseLeave:n?.onMouseLeave,onFocus:n?.onFocus,onBlur:n?.onBlur,children:[p?r.jsx(he,{$visible:l,"aria-hidden":"true",children:p}):null,r.jsx(me,{$visible:l,tabIndex:l?0:-1,onClick:x=>{a?.(x),n?.close()},...i,children:t})]})}const ge=o.div`
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
`,he=o.span`
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
`;function fr(){const e=S();return e?r.jsx(be,{type:"button",ref:e.toggleRef,"aria-label":"Dashboard controls","aria-expanded":e.expanded,"aria-controls":e.regionId,onClick:e.toggle,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur,children:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[r.jsx("circle",{cx:"5",cy:"12",r:"2"}),r.jsx("circle",{cx:"12",cy:"12",r:"2"}),r.jsx("circle",{cx:"19",cy:"12",r:"2"})]})}):null}const be=o.button`
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
`;function xr({bottom:e,label:t,onAccept:a,onDismiss:i,autoDismissMs:n=15e3,acceptLabel:l}){return c.useEffect(()=>{if(n<=0)return;const p=window.setTimeout(i,n);return()=>window.clearTimeout(p)},[n,i]),r.jsxs(ye,{$bottom:e,role:"status","aria-live":"polite",children:[r.jsx(we,{type:"button",onClick:a,"aria-label":l??t,children:t}),r.jsx(M,{text:"Dismiss",children:r.jsx(ke,{type:"button",onClick:i,"aria-label":"Dismiss",children:"×"})})]})}const ye=o.div`
  ${({$bottom:e})=>e!==void 0?m`
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
`,we=o.button`
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
`,ke=o.button`
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
`,vr=c.forwardRef(function({id:t,label:a="Choose file",accept:i,multiple:n,fileName:l,emptyText:p="No file chosen",disabled:x,onChange:v},g){const d=c.useId(),s=t??d,u=c.useRef(null);return r.jsxs($e,{children:[r.jsx(ze,{id:s,ref:f=>{if(u.current=f,typeof g=="function"){g(f);return}g&&(g.current=f)},type:"file",accept:i,multiple:n,disabled:x,onChange:v}),r.jsx(je,{htmlFor:s,$disabled:!!x,children:a}),r.jsx(Ce,{"aria-live":"polite",$hasFile:!!l,children:l??p})]})}),$e=o.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,je=o.label`
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
`,ze=o.input`
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
`,Ce=o.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:e})=>e?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`,gr=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function hr({state:e,elapsedMs:t}){if(e==="connected")return null;const a=e==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return r.jsxs(C,{accent:Re[e],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[r.jsx(Se,{children:a}),r.jsxs(Ie,{children:["T+",Ee(t)]})]})}function Ee(e){const t=Math.max(0,Math.floor(e/1e3)),a=Math.floor(t/3600),i=Math.floor(t%3600/60),n=t%60,l=p=>String(p).padStart(2,"0");return a>0?`${a}:${l(i)}:${l(n)}`:`${l(i)}:${l(n)}`}const Re={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},Se=o.span`
  font-weight: 600;
`,Ie=o.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function mr({entries:e}){return e.length===0?null:r.jsxs(Fe,{role:"status","aria-live":"polite",children:[r.jsx(Be,{}),r.jsx(Te,{children:"SOURCE OFFLINE"}),r.jsx(Me,{children:e.map(t=>r.jsxs(Oe,{children:[r.jsx(Pe,{children:t.name}),r.jsx(Ne,{children:t.status}),r.jsx(Ae,{children:Le(t.elapsedMs)}),t.onRetry&&r.jsx(z,{size:"sm",onClick:t.onRetry,"aria-label":`Retry ${t.name} now`,children:"Retry now"})]},t.id))})]})}function Le(e){return F(P("irl:s",e/1e3))}const Fe=o.div`
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
`,Be=o.span`
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
`,Te=o.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,Me=o.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,Oe=o.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,Pe=o.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,Ne=o.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,Ae=o.span`
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
`,De={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},_e={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function He(e){return De[e]??_e}function Ir({label:e}){const t=He(e);return r.jsx(Xe,{$bg:t.bg,$fg:t.fg,$border:t.border,children:e})}const Xe=o.span`
  display: inline-block;
  padding: var(--inset-chip);
  border-radius: var(--radius-regular);
  font-size: var(--font-size-caption);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${({$bg:e,$fg:t,$border:a})=>m`
    background: ${e};
    color: ${t};
    border: 1px solid ${a};
  `}
`;N({id:"default-dark",name:"Default Dark",theme:O});function Lr({kind:e,local:t,remote:a,remoteLabel:i="Peer"}){const n=e==="major"?"alert":"status",l=e==="major"?"RELOAD REQUIRED":e==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",p=e==="unknown"?`${i} didn't report a version`:`${i} v${a??"?"} ↔ this v${t}`;return r.jsxs(C,{accent:Ve[e],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:n,children:[r.jsx(Ke,{children:l}),r.jsx(Ge,{children:p})]})}const Ve={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},Ke=o.span`
  font-weight: 600;
`,Ge=o.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{C as B,lr as C,cr as D,jr as E,ur as F,kr as H,Rr as N,gr as P,zr as R,hr as S,Ir as T,Lr as V,sr as a,dr as b,pr as c,fr as d,xr as e,vr as f,mr as g,ir as h,He as i,br as j,yr as k,wr as l,$r as m,Cr as n,Er as o,Sr as p,S as u};
