import{u as H,U as X}from"./contributionsRead-DsV6K_C2.js";import{j as t}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import o,{css as C}from"./ext-styled-components-DAuodqsN.js";import{aq as V,e as T,a7 as U,C as W,ag as O,M as G,I as K,ao as Y,ac as q,a1 as Q}from"./ModalSaveBar-CP3fcnhB.js";import{r as i}from"./ext-react-C0MU9AHG.js";import{aK as Z,dc as J}from"./view-clock-formula-nrcILacK.js";import"./ksp-enum-names-DnDvHV3m.js";import"./logger-2_QM1wvD.js";import"./screen-C--ukhnW.js";import"./lagrange-Cs2miMYP.js";import"./use-transmissions-C6oNEXS8.js";import"./websocket-transport-ksYRixKG.js";import"./processorPerfBudget-B4_uKuOF.js";import"./index-DqUIH49W.js";function ee(e){if(e===void 0||e===""||e==="raw")return"";try{return H({magnitude:0,unit:e},{format:e}).symbol}catch{return""}}function Ct(e,a){if(!e)return;const r=ee(a);return r?`${e} (${r})`:e}function P({children:e,actions:a}){return t.jsxs(oe,{children:[t.jsx(V,{justify:"start",align:"baseline",wrap:!0,style:te,children:e}),a?t.jsx(re,{children:a}):null]})}const te={flex:"1 1 auto",minWidth:0,whiteSpace:"normal"},oe=o.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  gap: var(--gap-related);
  min-width: 0;
`,re=o.div`
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: var(--gap-related);
  margin-left: auto;
`;function F({accent:e,anchor:a="inline",top:r=12,zIndex:n=999,glow:c,pulse:u=!1,role:x="status",ariaLive:m,onClick:f,interactive:h=!1,actions:l,children:p}){const d=l===void 0?p:t.jsx(P,{actions:l,children:p}),s=m??(x==="alert"?"assertive":"polite");return a==="top"?t.jsxs(ae,{$accent:e,$top:r,$zIndex:n,$glow:c,$interactive:h,role:x,"aria-live":s,children:[t.jsx(B,{$accent:e,$pulse:u}),d]}):t.jsxs(ne,{as:f?"button":"div",type:f?"button":void 0,$accent:e,$glow:c,$clickable:!!f,$interactive:h,role:x,"aria-live":s,onClick:f,children:[t.jsx(B,{$accent:e,$pulse:u}),d]})}const ae=o.div`
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
  ${e=>e.$glow?C`box-shadow: ${e.$glow};`:""}
`,ne=o.div`
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
  ${e=>e.$glow?C`box-shadow: ${e.$glow};`:""}

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
`,B=o.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${e=>e.$accent};
  flex-shrink: 0;

  ${e=>e.$pulse&&C`
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
`;function St({children:e}){return t.jsx(ie,{children:e})}const ie=o.div`
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
`,se=2e3,le={copied:e=>`Copied ${e}`,failed:()=>"Could not copy, select the text instead"};function Et({command:e,label:a}){const[r,n]=i.useState("idle"),c=i.useRef(void 0);i.useEffect(()=>()=>clearTimeout(c.current),[]);async function u(){let x="copied";try{await navigator.clipboard.writeText(e)}catch{x="failed"}n(x),clearTimeout(c.current),c.current=setTimeout(()=>n("idle"),se)}return t.jsxs(ce,{children:[t.jsx(de,{role:"group","aria-label":a,tabIndex:0,children:t.jsx(pe,{children:e})}),t.jsx(T,{variant:"ghost",type:"button",onClick:()=>void u(),"aria-label":`Copy ${a}`,children:r==="copied"?"Copied":"Copy"}),t.jsx(U,{visuallyHidden:!0,children:le[r]?.(a)})]})}const ce=o.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,de=o.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,pe=o.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function ue(e,a){if(!a)return!0;const r=a.toLowerCase();return(e.label??e.key).toLowerCase().includes(r)||e.key.toLowerCase().includes(r)}function It({keys:e,value:a,onChange:r,placeholder:n="Search...",emptyHint:c="No matches"}){const[u,x]=i.useState(""),m=i.useMemo(()=>e.filter(l=>ue(l,u)),[e,u]),f=i.useMemo(()=>{const l=new Map;for(const p of m){const d=p.group??"Other";let s=l.get(d);s||(s=[],l.set(d,s)),s.push(p)}return[...l.entries()].sort(([p],[d])=>p.localeCompare(d))},[m]),h=l=>{const p=new Set(a);p.has(l)?p.delete(l):p.add(l),r(p)};return t.jsxs(fe,{children:[t.jsx(xe,{type:"text",value:u,placeholder:n,onChange:l=>x(l.target.value)}),t.jsx(he,{children:f.length===0?t.jsx(je,{children:c}):f.map(([l,p])=>t.jsxs(me,{children:[t.jsx(ve,{children:l}),p.map(d=>{const s=a.has(d.key),y=`dkmp-${d.key}`;return t.jsxs(ge,{$checked:s,children:[t.jsx(be,{id:y,type:"checkbox",checked:s,onChange:()=>h(d.key)}),t.jsxs(we,{htmlFor:y,children:[t.jsx(ye,{$checked:s,children:s&&t.jsx(W,{size:11,strokeWidth:3})}),t.jsx(ke,{children:d.label??d.key}),d.unit&&t.jsx($e,{children:d.unit})]})]},d.key)})]},l))})]})}const fe=o.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,xe=o.input`
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
`,he=o.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,me=o.div``,ve=o.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,ge=o.div`
  background: ${({$checked:e})=>e?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,be=o.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,we=o.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,ye=o.span`
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
`,ke=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,$e=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,je=o.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function Ft({show:e,message:a,hint:r,children:n}){return e?t.jsxs(Ce,{children:[t.jsx(Se,{...ze,children:n}),t.jsxs(Ee,{role:"status","aria-live":"polite",children:[t.jsx(Ie,{children:a}),r&&t.jsx(Fe,{children:r})]})]}):t.jsx(t.Fragment,{children:n})}const ze={inert:""},Ce=o.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,Se=o.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,Ee=o.div`
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
`,Ie=o.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,Fe=o.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,j=84,z=60,Re=48,Le=72,Be=232;function Me(e){return Math.max(1,Math.floor((e-j-Re-Le)/z)+1)}function Te(e,a){const n=[...new Set(a)].sort((c,u)=>c-u).indexOf(e);return n<0?e:j+n*z}function Oe(e,a){const r=Math.max(0,Math.round((e-j)/z)),n=Me(a),c=Math.floor(r/n);return c===0?{bottom:e,offset:0}:{bottom:j+(r-c*n)*z,offset:c*Be}}function Pe(e){return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}const Ne=()=>window.innerHeight,Ae=()=>Number.POSITIVE_INFINITY,N=i.createContext(null),_e=400,A="(pointer: coarse)";function De(e){if(typeof window.matchMedia!="function")return()=>{};const a=window.matchMedia(A);return a.addEventListener("change",e),()=>a.removeEventListener("change",e)}function He(){return typeof window.matchMedia=="function"&&window.matchMedia(A).matches}function Rt({children:e}){const[a,r]=i.useState(!1),n=i.useSyncExternalStore(De,He,()=>!1),c=i.useSyncExternalStore(Pe,Ne,Ae),[u,x]=i.useState([]),m=i.useCallback(g=>(x(b=>[...b,g]),()=>x(b=>{const w=b.indexOf(g);return w<0?b:[...b.slice(0,w),...b.slice(w+1)]})),[]),f=i.useCallback(g=>Oe(Te(g,u),c),[c,u]),[h,l]=i.useState(!1),p=h||a&&!n,d=i.useId(),s=i.useRef(null),y=i.useRef(null),k=i.useRef(null),v=i.useCallback(()=>{k.current!==null&&(window.clearTimeout(k.current),k.current=null)},[]),S=i.useCallback(()=>{v(),n||r(!0)},[v,n]),E=i.useCallback(()=>{v(),k.current=window.setTimeout(()=>{k.current=null,r(!1)},_e)},[v]),R=i.useCallback(()=>{v(),l(g=>!g)},[v]);i.useEffect(()=>()=>v(),[v]);const L=i.useCallback(()=>{v(),l(!1),r(!1)},[v]);i.useEffect(()=>{if(!h&&!a)return;const g=()=>{v(),l(!1),r(!1)},b=I=>{I.key==="Escape"&&(g(),y.current?.focus())},w=I=>{s.current?.contains(I.target)||g()};return document.addEventListener("keydown",b,!0),document.addEventListener("pointerdown",w),()=>{document.removeEventListener("keydown",b,!0),document.removeEventListener("pointerdown",w)}},[h,a,v]);const D=i.useMemo(()=>({active:p,expanded:h,toggle:R,close:L,regionId:d,toggleRef:y,place:f,register:m,onMouseEnter:S,onMouseLeave:E,onFocus:S,onBlur:E}),[p,h,R,L,d,f,m,S,E]);return t.jsx(N.Provider,{value:D,children:t.jsx("div",{id:d,ref:s,children:e})})}function _(){return i.useContext(N)}function Lt({bottom:e,children:a,onClick:r,onMouseEnter:n,onMouseLeave:c,onFocus:u,onBlur:x,...m}){const f=_(),h=f?.register;i.useEffect(()=>h?.(e),[h,e]);const l=f?.active??!0,p=f?.place(e)??{bottom:e,offset:0},d=m["aria-label"]??m.title;return t.jsxs($,{type:"button",$visible:l,$bottom:p.bottom,$offset:p.offset,tabIndex:l?0:-1,onMouseEnter:s=>{n?.(s),f?.onMouseEnter()},onMouseLeave:s=>{c?.(s),f?.onMouseLeave()},onFocus:s=>{u?.(s),f?.onFocus()},onBlur:s=>{x?.(s),f?.onBlur()},onClick:s=>{r?.(s),f?.close()},...m,children:[d?t.jsx(Xe,{$visible:l,"aria-hidden":"true",children:d}):null,t.jsx(Ve,{$visible:l,children:a})]})}const $=o.button`
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
`,Xe=o.span`
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
`,Ve=o.span`
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
    ${$}:hover & {
      background: var(--color-border-subtle);
      border-color: var(--color-info-mark);
      transform: scale(1.05);
    }
  }

  ${$}:active & {
    transform: scale(0.97);
  }

  ${$}:focus-visible & {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }

  @media (pointer: coarse) {
    width: 48px;
    height: 48px;
  }
`;function Bt(){const e=_();return e?t.jsx(O,{text:"Menu",children:t.jsx(Ue,{type:"button",ref:e.toggleRef,"aria-label":"Menu","aria-expanded":e.expanded,"aria-controls":e.regionId,onClick:e.toggle,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur,children:t.jsx(G,{size:22})})}):null}const Ue=o.button`
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
`;function Mt({bottom:e,label:a,onAccept:r,onDismiss:n,autoDismissMs:c=15e3,acceptLabel:u}){return i.useEffect(()=>{if(c<=0)return;const x=window.setTimeout(n,c);return()=>window.clearTimeout(x)},[c,n]),t.jsxs(We,{$bottom:e,role:"status","aria-live":"polite",children:[t.jsx(Ge,{type:"button",onClick:r,"aria-label":u??a,children:a}),t.jsx(O,{text:"Dismiss",children:t.jsx(K,{type:"button",onClick:n,"aria-label":"Dismiss",children:"×"})})]})}const We=o.div`
  ${({$bottom:e})=>e!==void 0?C`
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
`,Ge=o.button`
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
`,Tt=i.forwardRef(function({id:a,label:r="Choose file",accept:n,multiple:c,fileName:u,emptyText:x="No file chosen",disabled:m,onChange:f},h){const l=i.useId(),p=a??l,d=i.useRef(null);return t.jsxs(Ke,{children:[t.jsx(qe,{id:p,ref:s=>{if(d.current=s,typeof h=="function"){h(s);return}h&&(h.current=s)},type:"file",accept:n,multiple:c,disabled:m,onChange:f}),t.jsx(Ye,{htmlFor:p,$disabled:!!m,children:r}),t.jsx(Qe,{"aria-live":"polite",$hasFile:!!u,children:u??x})]})}),Ke=o.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,Ye=o.label`
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
`,qe=o.input`
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
`,Qe=o.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:e})=>e?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`,Ot=o.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function Pt({state:e,elapsed:a,expectedIn:r}){if(e==="connected")return null;if(e==="awaiting")return t.jsx(F,{accent:"var(--color-text-muted)",children:t.jsx(M,{children:t.jsx(Y,{expectedIn:r})})});const n=e==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return t.jsxs(F,{accent:Ze[e],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[t.jsx(M,{children:n}),t.jsxs(Je,{children:["T+",t.jsx(q,{value:a})]})]})}const Ze={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},M=o.span`
  font-weight: 600;
`,Je=o.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function Nt({entries:e}){if(e.length===0)return null;const a=e.filter(r=>r.onRetry);return t.jsxs(tt,{role:"status","aria-live":"polite",children:[t.jsx(ot,{}),t.jsxs(P,{actions:a.length>0?a.map(r=>t.jsx(T,{size:"sm",onClick:r.onRetry,"aria-label":`Retry ${r.name} now`,children:"Retry now"},r.id)):void 0,children:[t.jsx(rt,{children:"SOURCE OFFLINE"}),t.jsx(at,{children:e.map(r=>t.jsxs(nt,{children:[t.jsx(it,{children:r.name}),t.jsx(st,{children:r.status}),t.jsx(lt,{children:et(r.elapsedMs)})]},r.id))})]})]})}function et(e){return X(Z("irl:s",e/1e3))}const tt=o.div`
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
`,ot=o.span`
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
`,rt=o.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,at=o.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: wrap;
`,nt=o.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,it=o.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,st=o.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,lt=o.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,At=o.div`
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
`,_t=o.div`
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
`,Dt=o.div`
  display: flex;
  align-items: stretch;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Ht=o.input`
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
`,Xt=o.button`
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
`,Vt=o.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,Ut=o.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,Wt=o.div`
  min-height: 3.6em;
`,Gt=o.div`
  min-height: 7em;
`,Kt=o.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,Yt=o.button`
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
`,qt=o.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,Qt=o.ul`
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
`;J({id:"default-dark",name:"Default Dark",theme:Q});function Zt({kind:e,local:a,remote:r,remoteLabel:n="Peer"}){const c=e==="major"?"alert":"status",u=e==="major"?"RELOAD REQUIRED":e==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",x=e==="unknown"?`${n} didn't report a version`:`${n} v${r??"?"} ↔ this v${a}`;return t.jsxs(F,{accent:ct[e],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:c,children:[t.jsx(dt,{children:u}),t.jsx(pt,{children:x})]})}const ct={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},dt=o.span`
  font-weight: 600;
`,pt=o.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{F as B,Et as C,It as D,Vt as E,Lt as F,Ht as H,qt as N,Ot as P,Ut as R,Pt as S,Zt as V,P as a,St as b,Ft as c,Rt as d,Bt as e,Mt as f,Tt as g,Nt as h,Ct as i,Me as j,Oe as k,At as l,_t as m,Dt as n,Xt as o,Te as p,Wt as q,Gt as r,Kt as s,Yt as t,_ as u,Qt as v};
