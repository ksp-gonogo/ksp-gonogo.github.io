import{E as F,w as B}from"./contributionsRead-DXmW8T6H.js";import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import t,{css as h}from"./ext-styled-components-DAuodqsN.js";import{e as E,a6 as T,C as O,ab as M,ak as P,a9 as N,a0 as A}from"./ModalSaveBar-DLI7mfmD.js";import{r as l}from"./ext-react-C0MU9AHG.js";import{aZ as D,d4 as _}from"./view-clock-formula-CMi2uYN-.js";import"./ksp-enum-names-D0Qmqigb.js";import"./screen-B1crio3D.js";import"./lagrange-VERh5BAe.js";import"./use-transmissions-D8P32z8j.js";import"./websocket-transport-BwjKe0SK.js";import"./processorPerfBudget-Db2v-rP6.js";import"./index-DqUIH49W.js";function H(e){if(e===void 0||e===""||e==="raw")return"";try{return F({magnitude:0,unit:e},{format:e}).symbol}catch{return""}}function sr(e,o){if(!e)return;const a=H(o);return a?`${e} (${a})`:e}function w({accent:e,anchor:o="inline",top:a=12,zIndex:i=999,glow:s,pulse:d=!1,role:p="status",ariaLive:x,onClick:v,interactive:g=!1,children:c}){const n=x??(p==="alert"?"assertive":"polite");return o==="top"?r.jsxs(X,{$accent:e,$top:a,$zIndex:i,$glow:s,$interactive:g,role:p,"aria-live":n,children:[r.jsx(z,{$accent:e,$pulse:d}),c]}):r.jsxs(V,{as:v?"button":"div",type:v?"button":void 0,$accent:e,$glow:s,$clickable:!!v,$interactive:g,role:p,"aria-live":n,onClick:v,children:[r.jsx(z,{$accent:e,$pulse:d}),c]})}const X=t.div`
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
`,V=t.div`
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
`,z=t.span`
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
`;function lr({children:e}){return r.jsx(K,{children:e})}const K=t.div`
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
`,U=2e3,G={copied:e=>`Copied ${e}`,failed:()=>"Could not copy, select the text instead"};function cr({command:e,label:o}){const[a,i]=l.useState("idle"),s=l.useRef(void 0);l.useEffect(()=>()=>clearTimeout(s.current),[]);async function d(){let p="copied";try{await navigator.clipboard.writeText(e)}catch{p="failed"}i(p),clearTimeout(s.current),s.current=setTimeout(()=>i("idle"),U)}return r.jsxs(W,{children:[r.jsx(q,{role:"group","aria-label":o,tabIndex:0,children:r.jsx(Y,{children:e})}),r.jsx(E,{variant:"ghost",type:"button",onClick:()=>void d(),"aria-label":`Copy ${o}`,children:a==="copied"?"Copied":"Copy"}),r.jsx(T,{visuallyHidden:!0,children:G[a]?.(o)})]})}const W=t.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,q=t.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Y=t.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function Q(e,o){if(!o)return!0;const a=o.toLowerCase();return(e.label??e.key).toLowerCase().includes(a)||e.key.toLowerCase().includes(a)}function dr({keys:e,value:o,onChange:a,placeholder:i="Search...",emptyHint:s="No matches"}){const[d,p]=l.useState(""),x=l.useMemo(()=>e.filter(c=>Q(c,d)),[e,d]),v=l.useMemo(()=>{const c=new Map;for(const n of x){const u=n.group??"Other";let f=c.get(u);f||(f=[],c.set(u,f)),f.push(n)}return[...c.entries()].sort(([n],[u])=>n.localeCompare(u))},[x]),g=c=>{const n=new Set(o);n.has(c)?n.delete(c):n.add(c),a(n)};return r.jsxs(Z,{children:[r.jsx(J,{type:"text",value:d,placeholder:i,onChange:c=>p(c.target.value)}),r.jsx(ee,{children:v.length===0?r.jsx(ce,{children:s}):v.map(([c,n])=>r.jsxs(re,{children:[r.jsx(te,{children:c}),n.map(u=>{const f=o.has(u.key),m=`dkmp-${u.key}`;return r.jsxs(oe,{$checked:f,children:[r.jsx(ae,{id:m,type:"checkbox",checked:f,onChange:()=>g(u.key)}),r.jsxs(ne,{htmlFor:m,children:[r.jsx(ie,{$checked:f,children:f&&r.jsx(O,{size:11,strokeWidth:3})}),r.jsx(se,{children:u.label??u.key}),u.unit&&r.jsx(le,{children:u.unit})]})]},u.key)})]},c))})]})}const Z=t.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,J=t.input`
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
`,ee=t.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,re=t.div``,te=t.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,oe=t.div`
  background: ${({$checked:e})=>e?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,ae=t.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,ne=t.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,ie=t.span`
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
`,se=t.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,le=t.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,ce=t.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function pr({show:e,message:o,hint:a,children:i}){return e?r.jsxs(pe,{children:[r.jsx(ue,{...de,children:i}),r.jsxs(fe,{role:"status","aria-live":"polite",children:[r.jsx(xe,{children:o}),a&&r.jsx(ve,{children:a})]})]}):r.jsx(r.Fragment,{children:i})}const de={inert:""},pe=t.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,ue=t.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,fe=t.div`
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
`,xe=t.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,ve=t.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,S=l.createContext(null),ge=400,R="(pointer: coarse)";function me(e){if(typeof window.matchMedia!="function")return()=>{};const o=window.matchMedia(R);return o.addEventListener("change",e),()=>o.removeEventListener("change",e)}function he(){return typeof window.matchMedia=="function"&&window.matchMedia(R).matches}function ur({children:e}){const[o,a]=l.useState(!1),i=l.useSyncExternalStore(me,he,()=>!1),[s,d]=l.useState(!1),p=s||o&&!i,x=l.useId(),v=l.useRef(null),g=l.useRef(null),c=l.useRef(null),n=l.useCallback(()=>{c.current!==null&&(window.clearTimeout(c.current),c.current=null)},[]),u=l.useCallback(()=>{n(),i||a(!0)},[n,i]),f=l.useCallback(()=>{n(),c.current=window.setTimeout(()=>{c.current=null,a(!1)},ge)},[n]),m=l.useCallback(()=>{n(),d(b=>!b)},[n]);l.useEffect(()=>()=>n(),[n]);const k=l.useCallback(()=>{n(),d(!1),a(!1)},[n]);l.useEffect(()=>{if(!s&&!o)return;const b=()=>{n(),d(!1),a(!1)},$=y=>{y.key==="Escape"&&(b(),g.current?.focus())},j=y=>{v.current?.contains(y.target)||b()};return document.addEventListener("keydown",$,!0),document.addEventListener("pointerdown",j),()=>{document.removeEventListener("keydown",$,!0),document.removeEventListener("pointerdown",j)}},[s,o,n]);const L=l.useMemo(()=>({active:p,expanded:s,toggle:m,close:k,regionId:x,toggleRef:g,onMouseEnter:u,onMouseLeave:f,onFocus:u,onBlur:f}),[p,s,m,k,x,u,f]);return r.jsx(S.Provider,{value:L,children:r.jsx("div",{id:x,ref:v,children:e})})}function I(){return l.useContext(S)}function fr({bottom:e,children:o,onClick:a,...i}){const s=I(),d=s?.active??!0,p=i["aria-label"]??i.title;return r.jsxs(be,{$visible:d,$bottom:e,onMouseEnter:s?.onMouseEnter,onMouseLeave:s?.onMouseLeave,onFocus:s?.onFocus,onBlur:s?.onBlur,children:[p?r.jsx(ye,{$visible:d,"aria-hidden":"true",children:p}):null,r.jsx(we,{$visible:d,tabIndex:d?0:-1,onClick:x=>{a?.(x),s?.close()},...i,children:o})]})}const be=t.div`
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
`,ye=t.span`
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
`,we=t.button`
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
`;function xr(){const e=I();return e?r.jsx(ke,{type:"button",ref:e.toggleRef,"aria-label":"Dashboard controls","aria-expanded":e.expanded,"aria-controls":e.regionId,onClick:e.toggle,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur,children:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:[r.jsx("circle",{cx:"5",cy:"12",r:"2"}),r.jsx("circle",{cx:"12",cy:"12",r:"2"}),r.jsx("circle",{cx:"19",cy:"12",r:"2"})]})}):null}const ke=t.button`
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
`;function vr({bottom:e,label:o,onAccept:a,onDismiss:i,autoDismissMs:s=15e3,acceptLabel:d}){return l.useEffect(()=>{if(s<=0)return;const p=window.setTimeout(i,s);return()=>window.clearTimeout(p)},[s,i]),r.jsxs($e,{$bottom:e,role:"status","aria-live":"polite",children:[r.jsx(je,{type:"button",onClick:a,"aria-label":d??o,children:o}),r.jsx(M,{text:"Dismiss",children:r.jsx(ze,{type:"button",onClick:i,"aria-label":"Dismiss",children:"×"})})]})}const $e=t.div`
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
`,je=t.button`
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
`,ze=t.button`
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
`,gr=l.forwardRef(function({id:o,label:a="Choose file",accept:i,multiple:s,fileName:d,emptyText:p="No file chosen",disabled:x,onChange:v},g){const c=l.useId(),n=o??c,u=l.useRef(null);return r.jsxs(Ce,{children:[r.jsx(Se,{id:n,ref:f=>{if(u.current=f,typeof g=="function"){g(f);return}g&&(g.current=f)},type:"file",accept:i,multiple:s,disabled:x,onChange:v}),r.jsx(Ee,{htmlFor:n,$disabled:!!x,children:a}),r.jsx(Re,{"aria-live":"polite",$hasFile:!!d,children:d??p})]})}),Ce=t.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,Ee=t.label`
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
`,Se=t.input`
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
`,Re=t.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:e})=>e?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`,mr=t.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function hr({state:e,elapsed:o,expectedIn:a}){if(e==="connected")return null;if(e==="awaiting")return r.jsx(w,{accent:"var(--color-text-muted)",children:r.jsx(C,{children:r.jsx(P,{expectedIn:a})})});const i=e==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return r.jsxs(w,{accent:Ie[e],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[r.jsx(C,{children:i}),r.jsxs(Le,{children:["T+",r.jsx(N,{value:o})]})]})}const Ie={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},C=t.span`
  font-weight: 600;
`,Le=t.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function br({entries:e}){return e.length===0?null:r.jsxs(Be,{role:"status","aria-live":"polite",children:[r.jsx(Te,{}),r.jsx(Oe,{children:"SOURCE OFFLINE"}),r.jsx(Me,{children:e.map(o=>r.jsxs(Pe,{children:[r.jsx(Ne,{children:o.name}),r.jsx(Ae,{children:o.status}),r.jsx(De,{children:Fe(o.elapsedMs)}),o.onRetry&&r.jsx(E,{size:"sm",onClick:o.onRetry,"aria-label":`Retry ${o.name} now`,children:"Retry now"})]},o.id))})]})}function Fe(e){return B(D("irl:s",e/1e3))}const Be=t.div`
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
`,Te=t.span`
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
`,Oe=t.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,Me=t.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,Pe=t.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,Ne=t.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,Ae=t.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,De=t.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,yr=t.div`
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
`,wr=t.div`
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
`,kr=t.div`
  display: flex;
  align-items: stretch;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,$r=t.input`
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
`,jr=t.button`
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
`,zr=t.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,Cr=t.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,Er=t.div`
  margin-top: var(--gap-section-compact);
  min-height: 1.4em;
  color: var(--color-info-text);
  font-size: var(--font-size-sm);
`,Sr=t.div`
  min-height: 3.6em;
`,Rr=t.div`
  min-height: 7em;
`,Ir=t.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,Lr=t.button`
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
`,Fr=t.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,Br=t.ul`
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
`,_e={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},He={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function Xe(e){return _e[e]??He}function Tr({label:e}){const o=Xe(e);return r.jsx(Ve,{$bg:o.bg,$fg:o.fg,$border:o.border,children:e})}const Ve=t.span`
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
`;_({id:"default-dark",name:"Default Dark",theme:A});function Or({kind:e,local:o,remote:a,remoteLabel:i="Peer"}){const s=e==="major"?"alert":"status",d=e==="major"?"RELOAD REQUIRED":e==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",p=e==="unknown"?`${i} didn't report a version`:`${i} v${a??"?"} ↔ this v${o}`;return r.jsxs(w,{accent:Ke[e],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:s,children:[r.jsx(Ue,{children:d}),r.jsx(Ge,{children:p})]})}const Ke={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},Ue=t.span`
  font-weight: 600;
`,Ge=t.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{w as B,cr as C,dr as D,zr as E,fr as F,$r as H,Fr as N,mr as P,Cr as R,hr as S,Tr as T,Or as V,lr as a,pr as b,ur as c,xr as d,vr as e,gr as f,br as g,sr as h,Xe as i,yr as j,wr as k,kr as l,jr as m,Sr as n,Er as o,Rr as p,Ir as q,Lr as r,Br as s,I as u};
