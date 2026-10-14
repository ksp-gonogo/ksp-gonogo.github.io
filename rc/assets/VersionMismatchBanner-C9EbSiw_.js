import{q as j,w as z}from"./streamStatusWord-tv2-QViF.js";import{j as o}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import r,{css as g}from"./ext-styled-components-Br73TgY3.js";import{d as y,a0 as C,C as S,a6 as I,X as E}from"./titleText-ykBpW36X.js";import{r as c}from"./ext-react-RRA14VTW.js";import{aO as R}from"./view-clock-formula-DivmsORm.js";import"./ksp-enum-names-BUxIZR14.js";import"./screen-BrSuIKG_.js";import{e as L}from"./registry-bXix04k-.js";import"./lagrange-CqxkjZOD.js";import"./use-transmissions-aR9lgGMG.js";import"./websocket-transport-D9vbSI3y.js";import"./processorPerfBudget-HnJTWeJR.js";import"./index-dq6XYUov.js";function F(e){if(e===void 0||e===""||e==="raw")return"";try{return j({magnitude:0,unit:e},{format:e}).symbol}catch{return""}}function er(e,t){if(!e)return;const a=F(t);return a?`${e} (${a})`:e}function w({accent:e,anchor:t="inline",top:a=12,zIndex:n=999,glow:s,pulse:i=!1,role:l="status",ariaLive:v,onClick:f,interactive:m=!1,children:d}){const p=v??(l==="alert"?"assertive":"polite");return t==="top"?o.jsxs(T,{$accent:e,$top:a,$zIndex:n,$glow:s,role:l,"aria-live":p,children:[o.jsx(b,{$accent:e,$pulse:i}),d]}):o.jsxs(B,{as:f?"button":"div",type:f?"button":void 0,$accent:e,$glow:s,$clickable:!!f,$interactive:m,role:l,"aria-live":p,onClick:f,children:[o.jsx(b,{$accent:e,$pulse:i}),d]})}const T=r.div`
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
  pointer-events: none;
  ${e=>e.$glow?g`box-shadow: ${e.$glow};`:""}
`,B=r.div`
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
  ${e=>e.$glow?g`box-shadow: ${e.$glow};`:""}

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
`,b=r.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${e=>e.$accent};
  flex-shrink: 0;

  ${e=>e.$pulse&&g`
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
`;function rr({children:e}){return o.jsx(O,{children:e})}const O=r.div`
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
`,M=2e3,N={copied:e=>`Copied ${e}`,failed:()=>"Could not copy, select the text instead"};function or({command:e,label:t}){const[a,n]=c.useState("idle"),s=c.useRef(void 0);c.useEffect(()=>()=>clearTimeout(s.current),[]);async function i(){let l="copied";try{await navigator.clipboard.writeText(e)}catch{l="failed"}n(l),clearTimeout(s.current),s.current=setTimeout(()=>n("idle"),M)}return o.jsxs(P,{children:[o.jsx(A,{role:"group","aria-label":t,tabIndex:0,children:o.jsx(D,{children:e})}),o.jsx(y,{variant:"ghost",type:"button",onClick:()=>void i(),"aria-label":`Copy ${t}`,children:a==="copied"?"Copied":"Copy"}),o.jsx(C,{visuallyHidden:!0,children:N[a]?.(t)})]})}const P=r.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,A=r.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,D=r.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function _(e,t){if(!t)return!0;const a=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(a)||e.key.toLowerCase().includes(a)}function tr({keys:e,value:t,onChange:a,placeholder:n="Search...",emptyHint:s="No matches"}){const[i,l]=c.useState(""),v=c.useMemo(()=>e.filter(d=>_(d,i)),[e,i]),f=c.useMemo(()=>{const d=new Map;for(const p of v){const u=p.group??"Other";let x=d.get(u);x||(x=[],d.set(u,x)),x.push(p)}return[...d.entries()].sort(([p],[u])=>p.localeCompare(u))},[v]),m=d=>{const p=new Set(t);p.has(d)?p.delete(d):p.add(d),a(p)};return o.jsxs(X,{children:[o.jsx(H,{type:"text",value:i,placeholder:n,onChange:d=>l(d.target.value)}),o.jsx(V,{children:f.length===0?o.jsx(Z,{children:s}):f.map(([d,p])=>o.jsxs(G,{children:[o.jsx(K,{children:d}),p.map(u=>{const x=t.has(u.key),h=`dkmp-${u.key}`;return o.jsxs(U,{$checked:x,children:[o.jsx(W,{id:h,type:"checkbox",checked:x,onChange:()=>m(u.key)}),o.jsxs(q,{htmlFor:h,children:[o.jsx(Y,{$checked:x,children:x&&o.jsx(S,{size:11,strokeWidth:3})}),o.jsx(Q,{children:u.label??u.key}),u.unit&&o.jsx(J,{children:u.unit})]})]},u.key)})]},d))})]})}const X=r.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,H=r.input`
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
`,V=r.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,G=r.div``,K=r.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,U=r.div`
  background: ${({$checked:e})=>e?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,W=r.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,q=r.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,Y=r.span`
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
`,Q=r.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,J=r.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,Z=r.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function ar({show:e,message:t,hint:a,children:n}){return e?o.jsxs(re,{children:[o.jsx(oe,{...ee,children:n}),o.jsxs(te,{role:"status","aria-live":"polite",children:[o.jsx(ae,{children:t}),a&&o.jsx(ne,{children:a})]})]}):o.jsx(o.Fragment,{children:n})}const ee={inert:""},re=r.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,oe=r.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,te=r.div`
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
`,ae=r.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,ne=r.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,k=c.createContext(null),ie=400,$="(pointer: coarse)";function se(e){if(typeof window.matchMedia!="function")return()=>{};const t=window.matchMedia($);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function le(){return typeof window.matchMedia=="function"&&window.matchMedia($).matches}function nr({children:e}){const[t,a]=c.useState(!1),n=c.useSyncExternalStore(se,le,()=>!1),s=t||n,i=c.useRef(null),l=c.useCallback(()=>{i.current!==null&&(window.clearTimeout(i.current),i.current=null)},[]),v=c.useCallback(()=>{l(),a(!0)},[l]),f=c.useCallback(()=>{l(),i.current=window.setTimeout(()=>{i.current=null,a(!1)},ie)},[l]);c.useEffect(()=>()=>l(),[l]);const m=c.useMemo(()=>({active:s,onMouseEnter:v,onMouseLeave:f,onFocus:v,onBlur:f}),[s,v,f]);return o.jsx(k.Provider,{value:m,children:e})}function ce(){return c.useContext(k)}function ir({bottom:e,children:t,...a}){const n=ce(),s=n?.active??!0,i=a["aria-label"]??a.title;return o.jsxs(de,{$visible:s,$bottom:e,onMouseEnter:n?.onMouseEnter,onMouseLeave:n?.onMouseLeave,onFocus:n?.onFocus,onBlur:n?.onBlur,children:[i?o.jsx(pe,{$visible:s,"aria-hidden":"true",children:i}):null,o.jsx(ue,{$visible:s,tabIndex:s?0:-1,...a,children:t})]})}const de=r.div`
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
`,pe=r.span`
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
`,ue=r.button`
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
`;function sr({bottom:e,label:t,onAccept:a,onDismiss:n,autoDismissMs:s=15e3,acceptLabel:i}){return c.useEffect(()=>{if(s<=0)return;const l=window.setTimeout(n,s);return()=>window.clearTimeout(l)},[s,n]),o.jsxs(fe,{$bottom:e,role:"status","aria-live":"polite",children:[o.jsx(xe,{type:"button",onClick:a,"aria-label":i??t,children:t}),o.jsx(I,{text:"Dismiss",children:o.jsx(ve,{type:"button",onClick:n,"aria-label":"Dismiss",children:"×"})})]})}const fe=r.div`
  ${({$bottom:e})=>e!==void 0?g`
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
`,xe=r.button`
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
`,ve=r.button`
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
`,lr=c.forwardRef(function({id:t,label:a="Choose file",accept:n,multiple:s,fileName:i,emptyText:l="No file chosen",disabled:v,onChange:f},m){const d=c.useId(),p=t??d,u=c.useRef(null);return o.jsxs(me,{children:[o.jsx(he,{id:p,ref:x=>{if(u.current=x,typeof m=="function"){m(x);return}m&&(m.current=x)},type:"file",accept:n,multiple:s,disabled:v,onChange:f}),o.jsx(ge,{htmlFor:p,$disabled:!!v,children:a}),o.jsx(be,{"aria-live":"polite",$hasFile:!!i,children:i??l})]})}),me=r.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,ge=r.label`
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
`,he=r.input`
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
`,be=r.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:e})=>e?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`,cr=r.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function dr({state:e,elapsedMs:t}){if(e==="connected")return null;const a=e==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return o.jsxs(w,{accent:we[e],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[o.jsx(ke,{children:a}),o.jsxs($e,{children:["T+",ye(t)]})]})}function ye(e){const t=Math.max(0,Math.floor(e/1e3)),a=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60,i=l=>String(l).padStart(2,"0");return a>0?`${a}:${i(n)}:${i(s)}`:`${i(n)}:${i(s)}`}const we={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},ke=r.span`
  font-weight: 600;
`,$e=r.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function pr({entries:e}){return e.length===0?null:o.jsxs(ze,{role:"status","aria-live":"polite",children:[o.jsx(Ce,{}),o.jsx(Se,{children:"SOURCE OFFLINE"}),o.jsx(Ie,{children:e.map(t=>o.jsxs(Ee,{children:[o.jsx(Re,{children:t.name}),o.jsx(Le,{children:t.status}),o.jsx(Fe,{children:je(t.elapsedMs)}),t.onRetry&&o.jsx(y,{size:"sm",onClick:t.onRetry,"aria-label":`Retry ${t.name} now`,children:"Retry now"})]},t.id))})]})}function je(e){return z(R("irl:s",e/1e3))}const ze=r.div`
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
`,Ce=r.span`
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
`,Se=r.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,Ie=r.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,Ee=r.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,Re=r.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,Le=r.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,Fe=r.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,ur=r.div`
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
`,fr=r.div`
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
`,xr=r.div`
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,vr=r.input`
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
`,mr=r.button`
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
`,gr=r.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,hr=r.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,br=r.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,yr=r.button`
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
`,wr=r.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,kr=r.ul`
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
`,Te={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},Be={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function Oe(e){return Te[e]??Be}function $r({label:e}){const t=Oe(e);return o.jsx(Me,{$bg:t.bg,$fg:t.fg,$border:t.border,children:e})}const Me=r.span`
  display: inline-block;
  padding: var(--inset-chip);
  border-radius: var(--radius-regular);
  font-size: var(--font-size-caption);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${({$bg:e,$fg:t,$border:a})=>g`
    background: ${e};
    color: ${t};
    border: 1px solid ${a};
  `}
`;L({id:"default-dark",name:"Default Dark",theme:E});function jr({kind:e,local:t,remote:a,remoteLabel:n="Peer"}){const s=e==="major"?"alert":"status",i=e==="major"?"RELOAD REQUIRED":e==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",l=e==="unknown"?`${n} didn't report a version`:`${n} v${a??"?"} ↔ this v${t}`;return o.jsxs(w,{accent:Ne[e],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:s,children:[o.jsx(Pe,{children:i}),o.jsx(Ae,{children:l})]})}const Ne={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},Pe=r.span`
  font-weight: 600;
`,Ae=r.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{w as B,or as C,tr as D,gr as E,ir as F,vr as H,wr as N,cr as P,hr as R,dr as S,$r as T,jr as V,rr as a,ar as b,nr as c,sr as d,lr as e,pr as f,er as g,Oe as h,ur as i,fr as j,xr as k,mr as l,br as m,yr as n,kr as o,ce as u};
