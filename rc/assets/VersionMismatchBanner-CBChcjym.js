import{q as On,T as zn,d as Xn,w as Yn}from"./streamStatusWord-BoFViXZM.js";import{j as l}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import k,{css as Ht}from"./ext-styled-components-Br73TgY3.js";import{d as sn,Z as Bn,C as Hn,a3 as cn,an as Dn,ax as Wn,a5 as Gn,a7 as Kn,az as Un,ay as Vn,aj as qn,ae as Zn,ah as Qn,V as Ne,W as Jn}from"./vesselMark-B2BB4fDy.js";import{r as E,R as ie}from"./ext-react-RRA14VTW.js";import{aO as to}from"./view-clock-formula-DRrEkS6Q.js";import"./ksp-enum-names-BjZ3fgw3.js";import"./screen-B5Z_APSM.js";import{e as eo}from"./registry-CXCaYwY4.js";import"./lagrange-DVtSWGiO.js";import"./use-transmissions-dCTZymMM.js";import"./websocket-transport-CjdKMFT2.js";import"./processorPerfBudget-C__x6FVx.js";import"./index-dq6XYUov.js";function no(t){if(t===void 0||t===""||t==="raw")return"";try{return On({magnitude:0,unit:t},{format:t}).symbol}catch{return""}}function js(t,e){if(!t)return;const n=no(e);return n?`${t} (${n})`:t}function ln({accent:t,anchor:e="inline",top:n=12,zIndex:r=999,glow:s,pulse:a=!1,role:i="status",ariaLive:c,onClick:u,interactive:d=!1,children:h}){const x=c??(i==="alert"?"assertive":"polite");return e==="top"?l.jsxs(oo,{$accent:t,$top:n,$zIndex:r,$glow:s,role:i,"aria-live":x,children:[l.jsx(Pe,{$accent:t,$pulse:a}),h]}):l.jsxs(ro,{as:u?"button":"div",type:u?"button":void 0,$accent:t,$glow:s,$clickable:!!u,$interactive:d,role:i,"aria-live":x,onClick:u,children:[l.jsx(Pe,{$accent:t,$pulse:a}),h]})}const oo=k.div`
  position: fixed;
  top: ${t=>t.$top}px;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${t=>t.$zIndex};
  display: inline-flex;
  align-items: center;
  /* --inset-pill, not --inset-control: this pill is never pressable, so it must not follow the touch-target token. */
  gap: var(--gap-pill);
  padding: var(--inset-pill);
  background: rgba(0, 0, 0, 0.82);
  border: 1px solid ${t=>t.$accent};
  border-radius: var(--radius-pill);
  color: ${t=>t.$accent};
  font-size: var(--font-size-compact);
  letter-spacing: 0.12em;
  pointer-events: none;
  ${t=>t.$glow?Ht`box-shadow: ${t.$glow};`:""}
`,ro=k.div`
  display: inline-flex;
  align-items: center;
  /* Pressable when given onClick, and a tier above --inset-control so a dismissable banner is a bigger target. */
  gap: var(--gap-pill);
  padding: var(--inset-control-prominent);
  background: rgba(0, 0, 0, 0.88);
  border: 1px solid ${t=>t.$accent};
  border-radius: var(--radius-pill);
  color: ${t=>t.$accent};
  font-size: var(--font-size-compact);
  letter-spacing: 0.08em;
  font-family: inherit;
  white-space: nowrap;
  cursor: ${t=>t.$clickable?"pointer":"default"};
  pointer-events: ${t=>t.$clickable||t.$interactive?"auto":"none"};
  animation: bannerSlideIn var(--duration-entrance) var(--ease-entrance) forwards;
  transform-origin: right center;
  will-change: transform, opacity;
  ${t=>t.$glow?Ht`box-shadow: ${t.$glow};`:""}

  &:focus-visible {
    outline: 2px solid ${t=>t.$accent};
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
`,Pe=k.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${t=>t.$accent};
  flex-shrink: 0;

  ${t=>t.$pulse&&Ht`
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
`;function Es({children:t}){return l.jsx(ao,{children:t})}const ao=k.div`
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
`,so=2e3,io={copied:t=>`Copied ${t}`,failed:()=>"Could not copy, select the text instead"};function As({command:t,label:e}){const[n,r]=E.useState("idle"),s=E.useRef(void 0);E.useEffect(()=>()=>clearTimeout(s.current),[]);async function a(){let i="copied";try{await navigator.clipboard.writeText(t)}catch{i="failed"}r(i),clearTimeout(s.current),s.current=setTimeout(()=>r("idle"),so)}return l.jsxs(co,{children:[l.jsx(lo,{role:"group","aria-label":e,tabIndex:0,children:l.jsx(uo,{children:t})}),l.jsx(sn,{variant:"ghost",type:"button",onClick:()=>void a(),"aria-label":`Copy ${e}`,children:n==="copied"?"Copied":"Copy"}),l.jsx(Bn,{visuallyHidden:!0,children:io[n]?.(e)})]})}const co=k.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,lo=k.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,uo=k.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function ho(t,e){if(!e)return!0;const n=e.toLowerCase();return(t.label??t.key).toLowerCase().includes(n)||t.key.toLowerCase().includes(n)}function Ss({keys:t,value:e,onChange:n,placeholder:r="Search...",emptyHint:s="No matches"}){const[a,i]=E.useState(""),c=E.useMemo(()=>t.filter(h=>ho(h,a)),[t,a]),u=E.useMemo(()=>{const h=new Map;for(const x of c){const g=x.group??"Other";let m=h.get(g);m||(m=[],h.set(g,m)),m.push(x)}return[...h.entries()].sort(([x],[g])=>x.localeCompare(g))},[c]),d=h=>{const x=new Set(e);x.has(h)?x.delete(h):x.add(h),n(x)};return l.jsxs(po,{children:[l.jsx(fo,{type:"text",value:a,placeholder:r,onChange:h=>i(h.target.value)}),l.jsx(xo,{children:u.length===0?l.jsx($o,{children:s}):u.map(([h,x])=>l.jsxs(go,{children:[l.jsx(mo,{children:h}),x.map(g=>{const m=e.has(g.key),w=`dkmp-${g.key}`;return l.jsxs(bo,{$checked:m,children:[l.jsx(vo,{id:w,type:"checkbox",checked:m,onChange:()=>d(g.key)}),l.jsxs(yo,{htmlFor:w,children:[l.jsx(ko,{$checked:m,children:m&&l.jsx(Hn,{size:11,strokeWidth:3})}),l.jsx(Mo,{children:g.label??g.key}),g.unit&&l.jsx(wo,{children:g.unit})]})]},g.key)})]},h))})]})}const po=k.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,fo=k.input`
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
`,xo=k.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,go=k.div``,mo=k.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,bo=k.div`
  background: ${({$checked:t})=>t?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,vo=k.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,yo=k.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,ko=k.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border: 1px solid ${({$checked:t})=>t?"var(--color-go-status)":"var(--color-text-faint)"};
  background: ${({$checked:t})=>t?"var(--color-go-status)":"var(--color-surface-raised)"};
  color: var(--color-go-on-status);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-flush);
  border-radius: var(--radius-regular);
  flex: 0 0 auto;
`,Mo=k.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,wo=k.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,$o=k.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function Is({show:t,message:e,hint:n,children:r}){return t?l.jsxs(Eo,{children:[l.jsx(Ao,{...jo,children:r}),l.jsxs(So,{role:"status","aria-live":"polite",children:[l.jsx(Io,{children:e}),n&&l.jsx(_o,{children:n})]})]}):l.jsx(l.Fragment,{children:r})}const jo={inert:""},Eo=k.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,Ao=k.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,So=k.div`
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
`,Io=k.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,_o=k.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,dn=E.createContext(null),Lo=400,un="(pointer: coarse)";function Co(t){if(typeof window.matchMedia!="function")return()=>{};const e=window.matchMedia(un);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}function Ro(){return typeof window.matchMedia=="function"&&window.matchMedia(un).matches}function _s({children:t}){const[e,n]=E.useState(!1),r=E.useSyncExternalStore(Co,Ro,()=>!1),s=e||r,a=E.useRef(null),i=E.useCallback(()=>{a.current!==null&&(window.clearTimeout(a.current),a.current=null)},[]),c=E.useCallback(()=>{i(),n(!0)},[i]),u=E.useCallback(()=>{i(),a.current=window.setTimeout(()=>{a.current=null,n(!1)},Lo)},[i]);E.useEffect(()=>()=>i(),[i]);const d=E.useMemo(()=>({active:s,onMouseEnter:c,onMouseLeave:u,onFocus:c,onBlur:u}),[s,c,u]);return l.jsx(dn.Provider,{value:d,children:t})}function To(){return E.useContext(dn)}function Ls({bottom:t,children:e,...n}){const r=To(),s=r?.active??!0,a=n["aria-label"]??n.title;return l.jsxs(No,{$visible:s,$bottom:t,onMouseEnter:r?.onMouseEnter,onMouseLeave:r?.onMouseLeave,onFocus:r?.onFocus,onBlur:r?.onBlur,children:[a?l.jsx(Po,{$visible:s,"aria-hidden":"true",children:a}):null,l.jsx(Fo,{$visible:s,tabIndex:s?0:-1,...n,children:e})]})}const No=k.div`
  position: fixed;
  bottom: calc(${({$bottom:t})=>t}px + env(safe-area-inset-bottom, 0px));
  /* Off the spacing ladder: the FAB geometry chain in FabPrompt and BannerStack is arithmetic on this 24px. */
  right: calc(24px + env(safe-area-inset-right, 0px));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-pill);
  z-index: var(--z-fab);
  pointer-events: ${({$visible:t})=>t?"auto":"none"};
`,Po=k.span`
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
  opacity: ${({$visible:t})=>t?1:0};
  transform: translateY(${({$visible:t})=>t?"0":"16px"});
  /* Off the duration scale: tuned against the 16px travel and FabCluster's 400ms leave delay. */
  transition:
    transform 0.18s var(--ease-standard),
    opacity 0.18s var(--ease-standard);
`,Fo=k.button`
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
  opacity: ${({$visible:t})=>t?1:0};
  pointer-events: ${({$visible:t})=>t?"auto":"none"};
  transform: translateY(${({$visible:t})=>t?"0":"16px"});

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
`;function Cs({bottom:t,label:e,onAccept:n,onDismiss:r,autoDismissMs:s=15e3,acceptLabel:a}){return E.useEffect(()=>{if(s<=0)return;const i=window.setTimeout(r,s);return()=>window.clearTimeout(i)},[s,r]),l.jsxs(Oo,{$bottom:t,role:"status","aria-live":"polite",children:[l.jsx(zo,{type:"button",onClick:n,"aria-label":a??e,children:e}),l.jsx(cn,{text:"Dismiss",children:l.jsx(Xo,{type:"button",onClick:r,"aria-label":"Dismiss",children:"×"})})]})}const Oo=k.div`
  ${({$bottom:t})=>t!==void 0?Ht`
          position: fixed;
          bottom: calc(${t}px + env(safe-area-inset-bottom, 0px));
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
`,zo=k.button`
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
`,Xo=k.button`
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
`,Rs=E.forwardRef(function({id:e,label:n="Choose file",accept:r,multiple:s,fileName:a,emptyText:i="No file chosen",disabled:c,onChange:u},d){const h=E.useId(),x=e??h,g=E.useRef(null);return l.jsxs(Yo,{children:[l.jsx(Ho,{id:x,ref:m=>{if(g.current=m,typeof d=="function"){d(m);return}d&&(d.current=m)},type:"file",accept:r,multiple:s,disabled:c,onChange:u}),l.jsx(Bo,{htmlFor:x,$disabled:!!c,children:n}),l.jsx(Do,{"aria-live":"polite",$hasFile:!!a,children:a??i})]})}),Yo=k.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,Bo=k.label`
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
  cursor: ${({$disabled:t})=>t?"not-allowed":"pointer"};
  opacity: ${({$disabled:t})=>t?.5:1};
  user-select: none;

  &:hover {
    border-color: ${({$disabled:t})=>t?"var(--color-border-strong)":"var(--color-accent-fg)"};
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
`,Ho=k.input`
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
`,Do=k.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:t})=>t?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`,At=4,qt=3,xe=6;function Wo(t,e){return t.x0<e.x1&&t.x1>e.x0&&t.y0<e.y1&&t.y1>e.y0}function Go(t,e){const n=(r,s)=>r>=e.x0&&r<=e.x1&&s>=e.y0&&s<=e.y1;if(t.cx.length===1)return Number.isFinite(t.cx[0])&&n(t.cx[0],t.cy[0]);for(let r=1;r<t.cx.length;r++){const[s,a,i,c]=[t.cx[r-1],t.cy[r-1],t.cx[r],t.cy[r]];if(![s,a,i,c].every(Number.isFinite))continue;const u=Math.max(1,Math.ceil(Math.hypot(i-s,c-a)/xe));for(let d=0;d<=u;d++)if(n(s+(i-s)*d/u,a+(c-a)*d/u))return!0}return!1}function Ko({plot:t,card:e,traces:n,obstacles:r}){if(e.width<=0||e.height<=0||e.width>t.x1-t.x0-At*2||e.height>t.y1-t.y0-At*2)return;const s=t.x0+At,a=t.x1-At-e.width,i=t.y0+At,c=t.y1-At-e.height;return[{x:a,y:i},{x:s,y:c},{x:a,y:c},{x:s,y:i}].find(d=>{const h={x0:d.x-qt,y0:d.y-qt,x1:d.x+e.width+qt,y1:d.y+e.height+qt};return!n.some(x=>Go(x,h))&&!r.some(x=>Wo(h,x))})}function Uo(t){const e=[],n=[];let r=!0;for(let s=t.y0;s<=t.y1+xe;s+=xe){const a=Math.min(s,t.y1);e.push(r?t.x0:t.x1,r?t.x1:t.x0),n.push(a,a),r=!r}return{cx:e,cy:n}}function Vo(t,e){return t?.includes(e)??!1}function Fe(t,e){const{reckoned:n,spans:r}=t.data;return n?.some(s=>e>=s.from&&e<=s.to)?"modelled":r?.some(s=>e>=s.from&&e<=s.to&&s.status==="recorded")?"recorded":"measured"}function qo(t){const{x:e,y:n,y2:r}=t.data;let s=!0;for(let i=0;i<e.length;i++)if(!Number.isFinite(e[i])||i>0&&e[i]<e[i-1]){s=!1;break}if(s)return t;const a=e.map((i,c)=>c).filter(i=>Number.isFinite(e[i])).sort((i,c)=>e[i]-e[c]||i-c);return{...t,data:{x:a.map(i=>e[i]),y:a.map(i=>n[i]),...r?{y2:a.map(i=>r[i])}:{}}}}function Zo(t,e,n){const r=t.data.x,s=t.data.y,a=Math.min(r.length,s.length);if(a===0||e<r[0]||e>r[a-1])return null;let i=0,c=a-1;for(;i<c;){const w=i+c>>1;r[w]<e?i=w+1:c=w}const u=i,d=Math.max(0,u-1);if(r[u]!==e&&u>0&&Vo(t.data.breaks,u))return null;const h=e-r[d]<=r[u]-e?d:u;if(n!==void 0&&Math.abs(r[h]-e)>n)return null;const x=r[u]-r[d];if(t.readBetween&&x>0&&r[u]!==e){const w=s[d]+(s[u]-s[d])*(e-r[d])/x;return Number.isFinite(w)?{index:h,x:e,y:w,currency:Fe(t,h)}:null}const g=s[h];if(!Number.isFinite(g))return null;const m=t.data.y2?.[h];return{index:h,x:r[h],y:g,...m!==void 0&&Number.isFinite(m)?{y2:m}:{},currency:Fe(t,h)}}function Qo(t){const e=new Set;for(const n of t)if(!((n.type??"line")==="band"&&!n.data.y2))for(const r of n.data.x)Number.isFinite(r)&&e.add(r);return[...e].sort((n,r)=>n-r)}function Oe(t,e,n){if(t.length===0)return null;if(e===null)return t[t.length-1];let r=0,s=t.length-1;for(;r<s;){const i=r+s>>1;t[i]<e?r=i+1:s=i}let a=r+n;return t[r]!==e&&n>0&&(a-=1),t[Math.max(0,Math.min(t.length-1,a))]}function Jo({x:t,y:e,size:n,color:r,text:s}){const a=n/2,i=`M 0 ${-a} L ${a} ${a*.8} L ${-a} ${a*.8} Z`,c=`M -0.9 ${-a*.42} H 0.9 V ${a*.2} H -0.9 Z`,u=`M -0.9 ${a*.4} H 0.9 V ${a*.64} H -0.9 Z`;return l.jsx(cn,{text:s,focusable:!0,children:l.jsxs("g",{role:"img","aria-label":s,"data-limit-crossing":"",transform:`translate(${t} ${e})`,children:[l.jsx("title",{}),l.jsx("circle",{r:12,fill:"transparent"}),l.jsx("path",{d:`${i} ${c} ${u}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),l.jsx("path",{d:i,fill:"none",stroke:r,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function hn(t,e,n){return n==="above"?t>=e:t<=e}function tr({y:t,cx:e,cy:n,limit:r,limitY:s,bad:a,breaks:i=[],step:c=!1,minGapPx:u}){const d=(j,O,v)=>{if(!O)return{index:j,x:e[j],y:n[j],entered:!1};if(v===null)return{index:j,x:e[j],y:s,entered:!0};const z=n[j]-n[v],W=z===0?1:(s-n[v])/z;return{index:j,x:e[v]+(e[j]-e[v])*W,y:s,entered:!0}},h=new Set(i),x=[];let g=null,m=!1,w=!1,$=Number.NEGATIVE_INFINITY;for(let j=0;j<t.length;j++){if(!Number.isFinite(t[j])){g=null;continue}const O=hn(t[j],r,a);if(O&&!w){const v=d(j,m,c||h.has(j)?null:g),z=x[x.length-1];z!==void 0&&v.x-$<u?z.spells++:x.push({...v,spells:1}),$=v.x}w=O,m=!0,g=j}return x}const er=1;function nr(t,e,n,r,s){const a=n.to;if(a<1||a>=t.length)return!1;const i=r(t[a-1]),c=r(t[a]),u=s(e[a-1]),d=s(e[a]);return c>i?n.t.some((h,x)=>{const g=r(h),m=u+(d-u)*(g-i)/(c-i);return Math.abs(s(n.v[x])-m)>er}):!1}function ce(t,e,n,r){const s=e-t;if(s===0){const a=(n+r)/2;return()=>a}return a=>n+(a-t)/s*(r-n)}function ge(t,e,n=5){if(t===e)return Array.from({length:n},()=>t);const s=(e-t)/(n-1),a=10**Math.floor(Math.log10(s)),c=([1,2,2.5,5,10].find(g=>g*a>=s)??10)*a,u=Math.ceil(t/c)*c,d=[];for(let g=0;d.length<n;g++){const m=u+g*c;if(m>e+c*.01)break;d.push(m)}if(d.length>=2)return d;const h=Math.floor(t/c)*c,x=Math.ceil(e/c)*c;return x>h?[h,x]:[h,h+c]}function pn(t,e){const n=Math.floor(t/1e3);if(e>=36e5){const a=Math.floor(n/3600),i=Math.floor(n%3600/60),c=n%60;return`${a}:${String(i).padStart(2,"0")}:${String(c).padStart(2,"0")}`}const r=Math.floor(n/60),s=n%60;return`${r}:${String(s).padStart(2,"0")}`}function ze(t,e,n,r,s=[]){if(t.length===0)return"";const a=[];for(let i=0;i<t.length;i++){const c=n(t[i]).toFixed(2),u=r(e[i]).toFixed(2),d=i===0||s.includes(i);a.push(`${d?"M":"L"}${c},${u}`),d&&me(i,t.length,s)&&a.push(`L${c},${u}`)}return a.join(" ")}function me(t,e,n){return t+1>=e||n.includes(t+1)}function or(t,e,n,r,s=[]){if(t.length===0)return"";const a=[];let i=r(e[0]).toFixed(2);const c=n(t[0]).toFixed(2);a.push(`M${c},${i}`),me(0,t.length,s)&&a.push(`L${c},${i}`);for(let u=1;u<t.length;u++){const d=n(t[u]).toFixed(2),h=r(e[u]).toFixed(2);if(s.includes(u)){a.push(`M${d},${h}`),me(u,t.length,s)&&a.push(`L${d},${h}`),i=h;continue}a.push(`H${d}`),h!==i&&a.push(`V${h}`),i=h}return a.join(" ")}function rr(t,e,n,r,s,a=[],i=[],c=[]){if(t.length===0)return[];if(i.length===0&&c.length===0)return[{d:s(t,e,n,r,a)}];function u($,j){const O=new Array(t.length);for(const v of $){const z=Math.min(t.length-1,v.to);for(let W=Math.max(0,v.from);W<=z;W++)O[W]=j(v)}return O}const d=u(i,$=>$.status),h=u(c,$=>$.basis),x=new Set(a),g=[];let m=0;const w=($,j)=>{const O=$>0&&!x.has($)?$-1:$,v=Q=>Q.slice(O,j+1),z=[];for(const Q of a)Q>O&&Q<=j&&z.push(Q-O);const W=s(v(t),v(e),n,r,z);W!==""&&g.push({status:d[$],basis:h[$],d:W})};for(let $=1;$<=t.length;$++)($===t.length||d[$]!==d[m]||h[$]!==h[m])&&(w(m,$-1),m=$);return g}function fn(t,e,n,r,s){if(t.length===0)return"";const a=Math.min(t.length,e.length,n.length);if(a===0)return"";const i=[];for(let c=0;c<a;c++){const u=r(t[c]).toFixed(2),d=s(n[c]).toFixed(2);i.push(`${c===0?"M":"L"}${u},${d}`)}for(let c=a-1;c>=0;c--){const u=r(t[c]).toFixed(2),d=s(e[c]).toFixed(2);i.push(`L${u},${d}`)}return i.push("Z"),i.join(" ")}function ar(t,e,n,r){const s=[];for(const a of e){const{bandLo:i,bandHi:c,bandKind:u}=a;if(!i||!c||u===void 0)continue;const d=[];for(let x=a.from;x<=a.to&&x<t.length;x++)d.push(t[x]);const h=fn(d,i,c,n,r);h!==""&&s.push({d:h,kind:u})}return s}function Xe(t,e,n,r){if(t===e){const d=(n+r)/2;return()=>d}const s=t>0?t:1e-9,a=e>s?e:s*10,i=Math.log10(s),u=Math.log10(a)-i;if(u===0){const d=(n+r)/2;return()=>d}return d=>{const h=d>0?d:s;return n+(Math.log10(h)-i)/u*(r-n)}}function sr(t,e,n=5){if(!(t>0)||!(e>0)||e<=t)return ge(t,e,n);const r=Math.log10(t),s=Math.log10(e);if(s-r<1)return ge(t,e,n);const i=Math.ceil(r),c=Math.floor(s),u=Math.max(1,Math.ceil((c-i+1)/n)),d=[];for(let h=i;h<=c;h+=u)d.push(10**h);return d.length>0?d:[t,e]}const ee=56;function xn(t,e,n,r){const s=Math.max(0,Math.min(e-1,Math.floor(n))),a=Math.max(0,Math.min(e-1,Math.floor(r))),i=Math.min(e-1,s+1),c=Math.min(e-1,a+1),u=Math.max(0,Math.min(1,n-s)),d=Math.max(0,Math.min(1,r-a)),h=t[a*e+s]+(t[a*e+i]-t[a*e+s])*u,x=t[c*e+s]+(t[c*e+i]-t[c*e+s])*u;return h+(x-h)*d}const Ye=400,ir=16,cr=8,Be=.06,lr=3.3,dr=.6,ur=60,hr=40,He=[6,12],De=[48,96],Zt=2;function le(t,e,n){const r=Math.max(0,Math.min(1,(n-t)/(e-t)));return r*r*(3-2*r)}function We(t,e){const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)}function Ge(t,e){const n=e/t,r=t<=e?.07:.09,s=lr**Math.exp(-((t-e)**2)/(2*r**2*e**2));return n**5*Math.exp(-1.25*n**4)*s}function gn(t,e,n){if(!(t>0)||!(e>0)||!(n>0)||!Number.isFinite(t+e+n))return[];const r=Math.sqrt(n*2*Math.PI/Ye),s=Ge(r,r),a=[];for(let i=-Zt;i<=ir*Zt;i++){const c=Ye/2**(i/Zt),u=c/t,d=le(He[0],He[1],u)*(1-le(De[0],De[1],u))*(1-le(e,2*e,c));if(d<=.001)continue;const h=2*Math.PI/c,x=Math.sqrt(n*h),g=Math.sqrt(Math.min(1,Ge(x,r)/s)),m=(x>=r?Be:Be*g)/Math.sqrt(Zt),w=(ur+(We(i,1)-.5)*2*hr)*Math.PI/180;a.push({kx:h*Math.sin(w),ky:h*Math.cos(w),k:h,amplitude:m/h,omega:x,phase:We(i,2)*2*Math.PI,weight:d})}return a.slice(0,cr)}function pr(t,e,n,r){let s=0;for(const a of t)s+=a.weight*a.amplitude*Math.cos(a.kx*e+a.ky*n-a.omega*r+a.phase);return s}const te=mn(-.25,.3,.92),fr=2.6,xr=mn(te[0],te[1],te[2]+1),gr=.8,mr=3,br=.95,vr=.35,yr=235,kr=.5,Mr=.35;function mn(t,e,n){const r=Math.hypot(t,e,n);return[t/r,e/r,n/r]}function wr(t,e,n,r){const{east0:s,north0:a,dx:i,dy:c,seconds:u,colour:d,waves:h,isSea:x}=r,[g,m,w]=te,[$,j,O]=xr,v=h.length,z=new Float64Array(v*e),W=new Float64Array(v*e),Q=new Float64Array(v*n),ot=new Float64Array(v*n);for(let I=0;I<v;I++){const Y=h[I];for(let _=0;_<e;_++){const H=Y.kx*(s+(_+.5)*i);z[I*e+_]=Math.cos(H),W[I*e+_]=Math.sin(H)}for(let _=0;_<n;_++){const H=Y.ky*(a-(_+.5)*c)-Y.omega*u+Y.phase;Q[I*n+_]=Math.cos(H),ot[I*n+_]=Math.sin(H)}}const tt=new Float64Array(v),st=new Float64Array(v),U=h.map(I=>I.kx*I.weight*I.amplitude),P=h.map(I=>I.ky*I.weight*I.amplitude),X=h.map(I=>dr*I.k*I.weight*I.amplitude);for(let I=0;I<n;I++)for(let Y=0;Y<e;Y++){const _=(I*e+Y)*4;if(x&&!x(Y,I)){t[_+3]=0;continue}let H=0,et=0,xt=1;for(let C=0;C<v;C++){const J=z[C*e+Y],kt=W[C*e+Y],it=Q[C*n+I],Ct=ot[C*n+I];tt[C]=J*it-kt*Ct,st[C]=kt*it+J*Ct}for(let C=0;C<v;C++){const J=v>1?1+gr*tt[(C+mr)%v]:1;H-=U[C]*tt[C]*J,et-=P[C]*tt[C]*J,xt-=X[C]*st[C]*J}const dt=1/Math.sqrt(H*H+et*et+xt*xt),Dt=(H*g+et*m+xt*w)*dt-w,Lt=1+fr*Dt;let gt=0;const yt=(H*$+et*j+xt*O)*dt;if(yt>br){let C=yt;for(let J=0;J<7;J++)C*=C;gt=255*vr*C}const rt=Math.max(0,Lt-1)*Mr,K=Math.min(1,Lt)*kr;t[_]=d.r*K+(255-d.r*K)*rt+gt,t[_+1]=d.g*K+(255-d.g*K)*rt+gt,t[_+2]=d.b*K+(255-d.b*K)*rt+gt,t[_+3]=yr}}function Ke(t){const e=n=>{const r=n/255;return r<=.04045?r/12.92:((r+.055)/1.055)**2.4};return .2126*e(t.r)+.7152*e(t.g)+.0722*e(t.b)}function $r(t,e){const n=Ke(e),r=Math.max(t.r,t.g,t.b,1),s=u=>({r:Math.min(255,t.r*u),g:Math.min(255,t.g*u),b:Math.min(255,t.b*u)});let a=0,i=255/r;for(let u=0;u<32;u++){const d=(a+i)/2;Ke(s(d))<n?a=d:i=d}const c=s((a+i)/2);return{r:Math.round(c.r),g:Math.round(c.g),b:Math.round(c.b)}}const jr=192,Er=30,Ar="--color-info-mark",Sr=.42;function Ir(t,e){const n=t.view==="plan",r=e.scaleX,s=e.scaleYPrimary,a=1/(r(1)-r(0)),i=1/(s(1)-s(0)),c=O=>(O-r(0))*a,u=O=>(O-s(0))*i,d=Math.min(r(t.bounds.x0),r(t.bounds.x1)),h=Math.max(r(t.bounds.x0),r(t.bounds.x1)),x=Math.min(s(t.bounds.y0),s(t.bounds.y1)),g=Math.max(s(t.bounds.y0),s(t.bounds.y1)),m=n?d:Math.max(e.plotX0,d),w=n?h:Math.min(e.plotX1,h),$=n?x:Math.max(e.plotY0,x),j=n?g:Math.min(e.plotY1,g);return n&&(h<e.plotX0||d>e.plotX1||g<e.plotY0||x>e.plotY1)||!(w-m>=1&&j-$>=1)||!Number.isFinite(a+i)?null:{left:m,top:$,width:w-m,height:j-$,x0:c(m),x1:c(w),y0:u(j),y1:u($)}}function Ue(t,e){if(!e)return null;t.fillStyle=e;const n=/^#([0-9a-f]{6})$/i.exec(String(t.fillStyle));if(!n)return null;const r=Number.parseInt(n[1],16);return{r:r>>16&255,g:r>>8&255,b:r&255}}function _r(t,e,n){const r=Ue(e,getComputedStyle(t).getPropertyValue(Ar).trim());if(!r)return null;const s=n?Ue(e,n):null;return s?$r(s,r):r}function Lr(t,e,n,r,s,a){const i=ee,c=(n.x1-n.x0)/i,u=(n.y1-n.y0)/i,d=e.sea,h=r.scaleYPrimary(e.bounds.y0)<r.scaleYPrimary(e.bounds.y1),x=d&&d.size>1&&d.heights.length>=d.size*d.size?(m,w)=>{const $=h?w:i-1-w;return xn(d.heights,d.size,m/(i-1)*(d.size-1),$/(i-1)*(d.size-1))<0}:void 0,g=t.createImageData(i,i);wr(g.data,i,i,{east0:e.origin.east+n.x0,north0:e.origin.north+n.y1,dx:c,dy:u,seconds:s,colour:a,waves:gn(Math.max(c,u),n.x1-n.x0,e.gravity),isSea:x}),t.putImageData(g,0,0)}function Cr(t,e,n,r,s){const{width:a,height:i}=t.canvas,c=Rr(e,n,a),u=c.length>1?(c[c.length-1]-c[0])/(c.length-1):n.x1-n.x0,d=gn(u,n.x1-n.x0,e.gravity),h=(e.bearingDeg??90)*Math.PI/180,x=w=>(w-n.x0)/(n.x1-n.x0)*a,g=w=>(n.y1-w)/(n.y1-n.y0)*i;t.clearRect(0,0,a,i),t.beginPath(),c.forEach((w,$)=>{const j=pr(d,e.origin.east+w*Math.sin(h),e.origin.north+w*Math.cos(h),r);$===0?t.moveTo(x(w),g(j)):t.lineTo(x(w),g(j))});const m=`${s.r}, ${s.g}, ${s.b}`;t.strokeStyle=`rgba(${m}, 0.9)`,t.lineWidth=1,t.stroke(),t.lineTo(x(c[c.length-1]),i),t.lineTo(x(c[0]),i),t.closePath(),t.fillStyle=`rgba(${m}, ${Sr})`,t.fill()}function Rr(t,e,n){const r=(t.samples??[]).filter(s=>s>e.x0&&s<e.x1);return t.samples&&t.samples.length>1?[e.x0,...r,e.x1]:Array.from({length:n+1},(s,a)=>e.x0+a/n*(e.x1-e.x0))}function Tr({layer:t,frame:e}){const n=Ir(t,e),r=E.useRef(null),s=E.useRef(null);s.current=n?{layer:t,at:n,frame:e}:null;const a=n?t.view==="plan"?ee:Math.max(1,Math.min(jr,Math.round(n.width))):0,i=n?t.view==="plan"?ee:Math.max(1,Math.round(n.height*a/n.width)):0,c=t.tint;return E.useEffect(()=>{const u=r.current,d=u?.getContext("2d")??null;if(!u||!d||a===0||i===0)return;const h=_r(u,d,c);if(!h)return;const x=()=>{const v=s.current;if(!v)return;const z=Date.now()/1e3;v.layer.view==="plan"?Lr(d,v.layer,v.at,v.frame,z,h):Cr(d,v.layer,v.at,z,h)};if(x(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let m=!0;const w=typeof IntersectionObserver=="function"?new IntersectionObserver(v=>{m=v.some(z=>z.isIntersecting)}):null;w?.observe(u);let $=Number.NEGATIVE_INFINITY,j=0;const O=v=>{j=requestAnimationFrame(O),!(!m||document.hidden||v-$<1e3/Er)&&($=v,x())};return j=requestAnimationFrame(O),()=>{cancelAnimationFrame(j),w?.disconnect()}},[a,i,c]),n?l.jsx("g",{"aria-hidden":"true","data-plot-layer":t.id,"data-plot-layer-kind":"water",children:l.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:l.jsx("canvas",{ref:r,width:a,height:i,style:{display:"block",width:"100%",height:"100%",imageRendering:t.view==="plan"?"pixelated":"auto"}})})}):null}const Nr={faint:.45,normal:.85,bright:1},Pr=1.5,Fr=5,Or=.9,zt=7,Xt=6,Ve=10,Yt=9,St=12,zr=9,Xr=13,Yr=.1,de=5,Br=.5,Hr=.5;function ft(t){return Xn[t.tone??"neutral"]}function Bt(t){return zn[t.tone??"neutral"]}function at(t){return Nr[t.emphasis??"normal"]}function lt(t,e){return e.axis==="secondary"?t.scaleYSecondary:t.scaleYPrimary}function Dr(t){const e=t.axis==="secondary"?"secondary":"primary";switch(t.kind){case"series":return{xs:t.points.map(n=>n.x),ys:t.points.map(n=>n.y),axis:e};case"region":return{xs:[...t.boundary,...t.boundaryHigh??[]].map(n=>n.x),ys:[...t.boundary,...t.boundaryHigh??[]].map(n=>n.y),axis:e};case"rule":return t.along==="y"?{xs:[],ys:[t.value],axis:e}:{xs:[t.value],ys:[],axis:e};case"marker":case"annotation":return{xs:[t.at.x],ys:[t.at.y],axis:e};default:return{xs:[],ys:[],axis:e}}}const Wr=5.8,It=11,qe=4;function Gr(t,e){const n=e.text.length*Wr,{frame:r}=e,s=e.anchorX+e.gap,a=s+n<=r.plotX1-4?"start":"end",i=a==="start"?s:e.anchorX-e.gap,c=a==="start"?i:i-n,u=c+n,d=x=>t.some(g=>c<g.x1&&u>g.x0&&x-It<g.y1&&x+2>g.y0);let h=e.anchorY+3;for(let x=0;x<qe&&d(h);x++)h+=It;if(d(h)){h=e.anchorY+3;for(let x=0;x<qe&&d(h);x++)h-=It}return h=Math.min(Math.max(h,r.plotY0+It),r.plotY1-It),t.push({x0:c,x1:u,y0:h-It,y1:h+2}),{x:i,y:h,anchor:a}}function Kr(t){return t.map((e,n)=>`${n===0?"M":"L"}${e.x.toFixed(2)},${e.y.toFixed(2)}`).join(" ")}function Ur(t){if(t.length===0)return"";const e=[`M${t[0].x.toFixed(2)},${t[0].y.toFixed(2)}`];for(let n=1;n<t.length;n++)e.push(`H${t[n].x.toFixed(2)}`,`V${t[n].y.toFixed(2)}`);return e.join(" ")}function bn(t,e,n){if(t.length===0)return[];const r=t[0],s=t[t.length-1],a=[...t];if(e==="right"||e==="left"){const i=e==="right"?n.plotX1:n.plotX0;a.push({x:i,y:s.y},{x:i,y:r.y})}else{const i=e==="above"?n.plotY0:n.plotY1;a.push({x:s.x,y:i},{x:r.x,y:i})}return a}function Vr(t,e){const n=[];for(const r of t){if(r.kind==="relief"||r.kind==="water"){const i=lt(e,r),{x0:c,y0:u,x1:d,y1:h}=r.bounds;n.push([{x:e.scaleX(c),y:i(u)},{x:e.scaleX(d),y:i(u)},{x:e.scaleX(d),y:i(h)},{x:e.scaleX(c),y:i(h)}]);continue}if(r.kind!=="region"||r.hatched)continue;const s=lt(e,r),a=r.boundary.map(i=>({x:e.scaleX(i.x),y:s(i.y)}));if(!(a.length<2))if(r.side==="between"){if(!r.boundaryHigh)continue;n.push([...a,...r.boundaryHigh.map(i=>({x:e.scaleX(i.x),y:s(i.y)})).reverse()])}else n.push(bn(a,r.side,e))}return(r,s)=>n.some(a=>{let i=!1;for(let c=0,u=a.length-1;c<a.length;u=c++){const d=a[c],h=a[u];d.y>s!=h.y>s&&r<(h.x-d.x)*(s-d.y)/(h.y-d.y)+d.x&&(i=!i)}return i})}function qr({layer:t,frame:e}){if(t.stops.length===0)return null;const n=lt(e,t),r=t.along==="y"?e.plotY1-e.plotY0:e.plotX1-e.plotX0;if(r<=0)return null;const s=t.along==="y"?e.plotY0:e.plotX0,a=t.along==="y"?n:e.scaleX,i=t.maxOpacity??Hr,c=t.tint??ft(t),u=`plot-field-${t.id}-${e.uid}`,d=`plot-field-blur-${t.id}-${e.uid}`,h=t.stops.map(x=>({offset:(a(x.at)-s)/r*100,intensity:Math.max(0,Math.min(1,x.intensity))})).sort((x,g)=>x.offset-g.offset);return l.jsxs(l.Fragment,{children:[l.jsxs("defs",{children:[l.jsx("linearGradient",{id:u,x1:"0%",y1:"0%",x2:t.along==="x"?"100%":"0%",y2:t.along==="y"?"100%":"0%",children:h.map((x,g)=>l.jsx("stop",{offset:`${x.offset.toFixed(2)}%`,stopColor:c,stopOpacity:i*x.intensity},g))}),t.blur!==void 0&&l.jsx("filter",{id:d,children:l.jsx("feGaussianBlur",{stdDeviation:t.blur})})]}),l.jsx("rect",{"data-plot-layer":t.id,"data-plot-layer-kind":"field",x:e.plotX0,y:e.plotY0,width:e.plotX1-e.plotX0,height:e.plotY1-e.plotY0,fill:`url(#${u})`,filter:t.blur!==void 0?`url(#${d})`:void 0})]})}const Zr=6,_t=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function Qr(t){const e=Math.max(0,Math.min(1,t));for(let n=1;n<_t.length;n++)if(e<=_t[n][0]){const[r,s]=_t[n-1],[a,i]=_t[n],c=a>r?(e-r)/(a-r):0;return[Math.round(s[0]+(i[0]-s[0])*c),Math.round(s[1]+(i[1]-s[1])*c),Math.round(s[2]+(i[2]-s[2])*c)]}return _t[_t.length-1][1]}const Jr=[150,156,160],ta=[200,80,70];function ea(t,e){if(e===3)return Jr;if(e!==1&&e!==2)return t;const n=.3*t[0]+.59*t[1]+.11*t[2],r=(a,i,c)=>a+(c-a)*i,s=t.map(a=>r(r(a,.5,n),.06,235));return e===1?s:s.map((a,i)=>r(a,.3,ta[i]))}function na(t,e){const n=2*(e-1),r=(t%n+n)%n;return r<e?r:n-r}function oa(t,e,n,r,s,a,i){const c=t[a*n+i],u=s?na(c,r):c,[d,h,x]=ea(Qr(u/(r-1)),e[a*n+i]),g=i>0?t[a*n+i-1]:c,m=a>0?t[(a-1)*n+i]:c,w=g!==c||m!==c?.5:1;return`rgb(${Math.round(d*w)}, ${Math.round(h*w)}, ${Math.round(x*w)})`}function ra({layer:t,frame:e}){const{size:n,values:r,bounds:s}=t;if(n<2||r.length<n*n)return null;let a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;for(let P=0;P<n*n;P++){const X=r[P];if(!Number.isFinite(X))return null;X<a&&(a=X),X>i&&(i=X)}const c=i-a,u=t.bandMetres!=null&&t.bandMetres>0?t.bandMetres:null,d=t.veil,h=Math.max(2,t.bands??Zr),x=lt(e,t),g=e.scaleX(s.x0),m=e.scaleX(s.x1),w=x(s.y0),$=x(s.y1),j=Math.min(g,m),O=Math.min(w,$),v=ee,z=Math.abs(m-g)/v,W=Math.abs($-w)/v;if(!(z>0)||!(W>0))return null;const Q=w<$,ot=new Int16Array(v*v),tt=new Uint8Array(v*v),st=d!=null&&d.length>=n*n;for(let P=0;P<v;P++)for(let X=0;X<v;X++){const I=X/(v-1)*(n-1),Y=P/(v-1)*(n-1);st&&(tt[P*v+X]=d[Math.round(Y)*n+Math.round(I)]??0);const _=xn(r,n,I,Y);if(u!=null){ot[P*v+X]=Math.floor(_/u);continue}const H=c>0?(_-a)/c:.5;ot[P*v+X]=Math.max(0,Math.min(h-1,Math.floor(H*h)))}const U=[];for(let P=0;P<v;P++){const X=Q?P:v-1-P;let I=0,Y="";for(let _=0;_<=v;_++){const H=_<v?oa(ot,tt,v,h,u!=null,P,_):"";if(_===0){Y=H;continue}H===Y&&_<v||(U.push(l.jsx("rect",{x:j+I*z,y:O+X*W,width:(_-I)*z+.5,height:W+.5,fill:Y},`${P}-${I}`)),I=_,Y=H)}}return l.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:at(t),"aria-hidden":"true",children:U})}function aa({layer:t,frame:e}){const n=E.useId(),r=lt(e,t),s=d=>({x:e.scaleX(d.x),y:r(d.y)}),a=t.boundary.map(s);if(a.length<2)return null;const i=t.side==="between"?[...a,...(t.boundaryHigh??[]).map(s).reverse()]:bn(a,t.side,e);if(t.side==="between"&&!t.boundaryHigh)return null;const c=t.side==="right"?e.plotX1-4:t.side==="left"?e.plotX0+11:a[a.length-1].x,u=e.plotY1-34;return l.jsxs(l.Fragment,{children:[t.hatched&&l.jsx("defs",{children:l.jsx("pattern",{id:n,width:de,height:de,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:l.jsx("line",{x1:0,y1:0,x2:0,y2:de,stroke:ft(t),strokeWidth:1,strokeOpacity:t.opacity??Br})})}),l.jsx("polygon",{"data-plot-layer":t.id,"data-plot-layer-kind":"region","data-hatched":t.hatched?"":void 0,points:i.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:t.hatched?`url(#${n})`:ft(t),fillOpacity:t.hatched?void 0:t.opacity??Yr}),e.labels&&t.label&&l.jsx("text",{x:c,y:u,transform:`rotate(-90 ${c} ${u})`,fontSize:zr,letterSpacing:"0.14em",fill:"var(--color-text-muted)",children:t.label})]})}function sa({layer:t,frame:e}){const n=lt(e,t),r=t.points.map(a=>({x:e.scaleX(a.x),y:n(a.y)}));if(r.length===0)return null;const s=Pr*(t.weight??1);return t.style==="scatter"?l.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",fill:ft(t),opacity:at(t),children:r.map((a,i)=>l.jsx("circle",{cx:a.x,cy:a.y,r:s},i))}):l.jsx("path",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",d:t.style==="step"?Ur(r):Kr(r),fill:"none",stroke:ft(t),strokeOpacity:at(t),strokeWidth:s,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:t.dashed?"5 3.5":void 0})}function ia({layer:t,frame:e}){const n=lt(e,t),r=t.dashed??!0,s=ft(t),a=t.along==="y",i=a?n(t.value):e.scaleX(t.value);return l.jsxs(l.Fragment,{children:[l.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"rule",x1:a?e.plotX0:i,x2:a?e.plotX1:i,y1:a?i:e.plotY0,y2:a?i:e.plotY1,stroke:s,strokeOpacity:at(t),strokeWidth:1,strokeDasharray:r?"4 3":void 0}),e.labels&&t.label&&l.jsx("text",{x:a?e.plotX1-4:i+3,y:a?i-3:e.plotY0+10,textAnchor:a?"end":"start",fill:Bt(t),fontSize:Yt,children:t.label})]})}function ca({layer:t,frame:e,placed:n}){const r=lt(e,t),s=e.scaleX(t.at.x),a=r(t.at.y),i=t.across??"x",c=ft(t),u=e.labels&&t.label?Gr(n,{anchorX:s,anchorY:a,gap:zt+3,text:t.label,frame:e}):null;return l.jsxs(l.Fragment,{children:[l.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"annotation",x1:i==="x"?s-zt:s,x2:i==="x"?s+zt:s,y1:i==="x"?a:a-zt,y2:i==="x"?a:a+zt,stroke:c,strokeOpacity:at(t),strokeWidth:1.75,strokeLinecap:"round"}),u&&t.label&&l.jsx("text",{x:u.x,y:u.y,textAnchor:u.anchor,fontSize:Yt,letterSpacing:"0.05em",fill:Bt(t),fillOpacity:at(t),children:t.label})]})}function la({layer:t,frame:e}){const n=lt(e,t),r=e.scaleX(t.at.x),s=n(t.at.y)+(t.offsetPx??0),a=Fr*(t.scale??1),i=ft(t),c=t.shape??"dot",u={"data-plot-layer":t.id,"data-plot-layer-kind":"marker",opacity:at(t)},d=c==="none"?null:c==="vessel"?l.jsx("g",{...u,children:l.jsx(Dn,{state:t.markState??"current",x:r,y:s,r:a*Or,keyline:!0})}):c==="dot"?l.jsx("circle",{...u,cx:r,cy:s,r:a,fill:i,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):c==="ring"?l.jsx("circle",{...u,cx:r,cy:s,r:a,fill:"none",stroke:i,strokeWidth:1.5}):c==="cross"?l.jsx("path",{...u,d:`M${r-a},${s} L${r+a},${s} M${r},${s-a} L${r},${s+a}`,stroke:i,strokeWidth:1.5,strokeLinecap:"round"}):c==="chevron-up"||c==="chevron-down"?l.jsx("polyline",{...u,points:c==="chevron-up"?`${r-a},${s+a*.5} ${r},${s-a*.5} ${r+a},${s+a*.5}`:`${r-a},${s-a*.5} ${r},${s+a*.5} ${r+a},${s-a*.5}`,fill:"none",stroke:i,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null;return l.jsxs(l.Fragment,{children:[d,e.labels&&t.label&&l.jsx("text",{x:c==="none"?r:r+a+3,y:s+3,textAnchor:c==="none"?"middle":void 0,fontSize:Yt,fill:Bt(t),fillOpacity:at(t),children:t.label})]})}function da({layer:t,frame:e,row:n,edges:r}){const s=t.caption?2:1;if(t.anchor==="left-edge"||t.anchor==="right-edge"){const g=t.anchor==="left-edge"?e.plotX0+Xt+n*St:e.plotX1-Xt-n*St,m=e.plotY1-34;return l.jsx("text",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",x:g,y:m,transform:`rotate(-90 ${g} ${m})`,fontSize:Yt,letterSpacing:"0.14em",fill:Bt(t),fillOpacity:at(t),children:t.text})}const a=t.anchor.startsWith("top"),i=t.anchor.endsWith("right"),c=g=>Xt+(g?Xr:0),u=i?e.plotX1-c(r.right):e.plotX0+c(r.left),d=n*(s*St+2),h=a?e.plotY0+Xt+Ve+d:e.plotY1-Xt-d,x=h-St;return l.jsxs("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",textAnchor:i?"end":"start",children:[t.caption&&l.jsx("text",{x:u,y:a?h:x,fontSize:Yt,letterSpacing:"0.05em",fill:"var(--color-text-faint)",children:t.caption}),l.jsx("text",{x:u,y:t.caption&&a?h+St:h,fontSize:Ve,fontWeight:700,fill:Bt(t),fillOpacity:at(t),children:t.text})]})}const Ze={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},ua={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function ue({layers:t,frame:e,pass:n}){const r=t.map((c,u)=>({layer:c,index:u})).filter(({layer:c})=>ua[c.kind]===n).sort((c,u)=>Ze[c.layer.kind]-Ze[u.layer.kind]||(c.layer.z??0)-(u.layer.z??0)||c.index-u.index),s=new Map,a=[],i={left:t.some(c=>c.kind==="caption"&&c.anchor==="left-edge"||c.kind==="region"&&c.side==="left"&&!!c.label),right:t.some(c=>c.kind==="caption"&&c.anchor==="right-edge"||c.kind==="region"&&c.side==="right"&&!!c.label)};return l.jsx(l.Fragment,{children:r.map(({layer:c,index:u})=>{const d=`${c.id}-${u}`;switch(c.kind){case"relief":return l.jsx(ra,{layer:c,frame:e},d);case"water":return l.jsx(Tr,{layer:c,frame:e},d);case"field":return l.jsx(qr,{layer:c,frame:e},d);case"region":return l.jsx(aa,{layer:c,frame:e},d);case"series":return l.jsx(sa,{layer:c,frame:e},d);case"rule":return l.jsx(ia,{layer:c,frame:e},d);case"annotation":return l.jsx(ca,{layer:c,frame:e,placed:a},d);case"marker":return l.jsx(la,{layer:c,frame:e},d);case"caption":{const h=s.get(c.anchor)??0;return s.set(c.anchor,h+1),l.jsx(da,{layer:c,frame:e,row:h,edges:i},d)}default:return null}})})}function ha(t){return t.map(e=>e.description).filter(e=>typeof e=="string"&&e.length>0)}const Qe=11,Qt=3,Jt=4,Je=(t,e)=>t.x0<e.x1&&e.x0<t.x1&&t.y0<e.y1&&e.y0<t.y1;function pa(t,e,n,r,s){let a=0,i=1;const c=n-t,u=r-e,d=[[-c,t-s.x0],[c,s.x1-t],[-u,e-s.y0],[u,s.y1-e]];for(const[h,x]of d){if(h===0&&x<0)return!1;if(h!==0){const g=x/h;h<0?a=Math.max(a,g):i=Math.min(i,g)}}return a<=i}function fa(t,e){for(let n=1;n<t.cx.length;n++){const r=[t.cx[n-1],t.cy[n-1],t.cx[n],t.cy[n]];if(r.every(Number.isFinite)&&pa(r[0],r[1],r[2],r[3],e))return!0}return!1}function xa({labels:t,plot:e,obstacles:n,traces:r}){const s=[],a=new Map;for(const i of t){const c={y0:i.lineY-Qt-Qe,y1:i.lineY-Qt},u={y0:i.lineY+Qt,y1:i.lineY+Qt+Qe},d={x0:e.x1-Jt-i.width,x1:e.x1-Jt},h={x0:e.x0+Jt,x1:e.x0+Jt+i.width},x=[{...d,...c,anchor:"end"},{...d,...u,anchor:"end"},{...h,...c,anchor:"start"},{...h,...u,anchor:"start"}];let g=null;for(const m of x){if(!(m.x0>=e.x0&&m.x1<=e.x1&&m.y0>=e.y0&&m.y1<=e.y1)||s.some(j=>Je(m,j)))continue;const $=2*n.filter(j=>Je(m,j)).length+r.filter(j=>fa(j,m)).length;(g===null||$<g.cost)&&(g={spot:m,cost:$})}if(g===null){a.set(i.id,null);continue}s.push(g.spot),a.set(i.id,{x:g.spot.anchor==="end"?g.spot.x1:g.spot.x0,y:g.spot.y1-2,anchor:g.spot.anchor})}return a}const ga=4,ma=2.5;function ba(t,e){if(t.length===0)return!1;const n=t[t.length-1]-e;return n===0?!0:t.length===1?!1:Math.sign(t[0]-e)!==Math.sign(n)}function va(t,e){return t==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:e?t==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const ya=(t,e)=>pn(t-e[0],e[1]-e[0]),Ts=(t,e)=>pn((t-e[0])*1e3,(e[1]-e[0])*1e3),he={top:10,bottom:28,left:50};function ka(t,e,n){const r=(a,i,c)=>Math.max(a,Math.min(c,i)),s=r(30,Math.round(t*.18),he.left);return{top:he.top,right:n?s:r(14,Math.round(t*.07),20),bottom:e<150?20:he.bottom,left:s}}const tn=t=>t.length*6.5+6,Ma=4,wa=.4,$a=26,vt=14,en=4,ja=.03;function pe(t,e){const n=Math.max(0,Math.floor(e/6));if(t.length<=n)return t;const r=t.lastIndexOf(" (");if(r>0&&t.length-r+4<=n){const s=n-(t.length-r)-3;return`${t.slice(0,s)}...${t.slice(r)}`}return n<4?"":`${t.slice(0,n-3)}...`}function Ea(t,e,n,r,s=1){const a=[],i=$a*Math.max(.5,Math.min(2,s));for(let c=t+i/2;c<e;c+=i)for(let u=n+i/2;u<r;u+=i)a.push({key:`sg-${Math.round(c)}-${Math.round(u)}`,x:c,y:u});return a}const Aa=120,Sa=90,Ia=70,_a=35,La=2,Ca=14,Ra=10,fe=36,Ta=12,Na=8,Pa=2,pt=14,vn=6,yn=12,nn=10,Fa=.2,on=.6,rn="5 3",Oa=.15,za=.45,Xa="the value is inside the shaded region";function Ya(t){return(t.type??"line")==="band"&&t.data.y2?[...t.data.y,...t.data.y2]:t.data.y}function Ba({series:t,thresholds:e,heading:n,crosshairOn:r,yTickFormat:s}){const a=c=>c*vn,i=[];for(const c of t)i.push(a(c.label.length)+8),r&&i.push(Math.max(a(c.label.length),a(Ca+Ra))+fe);for(const c of e){if(c.kind==="marker")continue;const u=c.label??s(c.value);i.push(a(u.length)+yn+8),r&&i.push(Math.max(a(c.kind.length),a(u.length))+fe)}return r&&i.push(Math.max(...n.map(c=>a(c.length)))+fe),Math.max(0,...i)+Ta}function Ns({series:t,xDomain:e,yDomainPrimary:n,yDomainSecondary:r,xTickFormat:s=ya,yTickFormat:a=Ha,yScalePrimary:i="linear",yScaleSecondary:c="linear",thresholds:u,legend:d="overlay",hideXAxis:h=!1,spatial:x=!1,gridScale:g=1,layers:m,"aria-label":w,crosshair:$=!1,xKind:j="time",xAxisLabel:O,yAxisLabel:v,ySecondaryAxisLabel:z,card:W,cardForms:Q=1,width:ot,height:tt}){const st=E.useId(),U=$&&!x&&t.some(o=>o.data.x.length>0),[P,X]=E.useState(null),[I,Y]=E.useState(!1),[_,H]=E.useState(""),[et,xt]=E.useState(null),[dt,Dt]=E.useState(0),[Lt,gt]=E.useState(null),yt=W!=null,rt=Lt?.form===dt?Lt:null;E.useLayoutEffect(()=>{if(!et){gt(null);return}const o=()=>gt(f=>{const y={w:et.offsetWidth,h:et.offsetHeight,form:dt};return f?.w===y.w&&f?.h===y.h&&f?.form===y.form?f:y});o();const p=new ResizeObserver(o);return p.observe(et),()=>p.disconnect()},[et,dt]),E.useLayoutEffect(()=>{ot>=0&&tt>=0&&Dt(0)},[ot,tt]);const K=ot,C=tt,J=t.filter(o=>o.axis==="primary"&&o.data.x.length>0),kt=t.filter(o=>o.axis==="secondary"&&o.data.x.length>0),it=kt.length>0,Ct=!x&&!h&&!!O,be=!x&&!!v,ve=!x&&it&&!!z,ye=x?{top:1,right:1,bottom:1,left:1}:ka(K,C,it),Mt={...ye,bottom:ye.bottom+(Ct?vt:0)},R=Mt.top,F=C-Mt.bottom,ut=F-R,Wt=E.useMemo(()=>{const o={primary:[],secondary:[]};for(const p of m??[]){const f=Dr(p);o[f.axis].push(...f.ys)}return o},[m]),wt=E.useMemo(()=>an(J,n,i,Wt.primary),[J,n,i,Wt]),$t=E.useMemo(()=>an(kt,r,c,Wt.secondary),[kt,r,c,Wt]),V=i==="log"?Xe(wt[0],wt[1],F,R):ce(wt[0],wt[1],F,R),q=c==="log"?Xe($t[0],$t[1],F,R):ce($t[0],$t[1],F,R),ke=Math.max(2,Math.min(7,Math.round(ut/_a))),ne=(o,p,f,y)=>{const M=Math.min(o,p),A=Math.max(o,p),b=(A-M)*1e-6||1e-6,S=L=>L>=M-b&&L<=A+b,N=L=>y==="log"?sr(M,A,L):ge(M,A,L);for(let L=f;L<=64;L*=2){const Z=N(L).filter(S);if(Z.length<2)continue;if(Z.length<=f)return Z;const Ot=(Z.length-1)/(f-1),Vt=Array.from({length:f},(ds,Fn)=>Z[Math.round(Fn*Ot)]);return Array.from(new Set(Vt))}return[M,A]},Gt=ne(wt[0],wt[1],ke,i==="log"?"log":"linear"),Kt=it?ne($t[0],$t[1],ke,c==="log"?"log":"linear"):[],Me=(o,p)=>o.length===0?p:Math.max(p,Math.min(Math.round(K*wa),Math.max(...o.map(f=>tn(a(f,o))))+Ma)),oe=x?Mt:{left:Me(Gt,Mt.left)+(be?vt:0),right:(it?Me(Kt,Mt.right):Mt.right)+(ve?vt:0)},T=oe.left,kn=U||d!=="none"&&t.length>0||(u??[]).some(o=>o.label),we=x||!kn?{placement:"overlay"}:Wn({width:K,height:C,contentWidth:Ba({series:t,thresholds:u??[],heading:[e[0],e[1]].map(o=>s(o,e)),crosshairOn:U,yTickFormat:a})}),$e=we.placement==="beside"?we.columnWidth:0,D=K-oe.right-$e,nt=D-T,mt=nt>=Aa&&ut>=Sa,G=$e>0?{x0:D+(it?oe.right:0)+Na,y0:R,x1:K-Pa,y1:F}:void 0,B=ce(e[0],e[1],T,D),Mn=Math.max(2,Math.min(8,Math.round(nt/Ia))),Rt=ne(e[0],e[1],Mn,"linear"),wn=E.useMemo(()=>{const o=[],p=Rt.length-1;if(p<0)return o;const f=tn,y=6,M=b=>{const S=Rt[b],N=s(S,e,Rt),L=B(S),Z=f(N),Ot=b===0?"start":b===p?"end":"middle",Vt=Ot==="start"?L:Ot==="end"?L-Z:L-Z/2;return{x:L,text:N,anchor:Ot,leftEdge:Vt,rightEdge:Vt+Z}},A=M(0);if(o.push({x:A.x,text:A.text,anchor:A.anchor}),p>=1){const b=M(p);if(b.leftEdge>=A.rightEdge+y){let S=A.rightEdge;for(let N=1;N<p;N++){const L=M(N);L.leftEdge>=S+y&&L.rightEdge<=b.leftEdge-y&&(o.push({x:L.x,text:L.text,anchor:L.anchor}),S=L.rightEdge)}o.push({x:b.x,text:b.text,anchor:b.anchor})}}return o},[Rt,e,B,s]),je=(o,p)=>{const f=new Set,y=o.length;if(y===0||(f.add(0),y===1))return f;const M=16,A=p(o[0]),b=p(o[y-1]);if(Math.abs(b-A)>=M){let S=A;for(let N=1;N<y-1;N++){const L=p(o[N]);Math.abs(L-S)>=M&&Math.abs(b-L)>=M&&(f.add(N),S=L)}f.add(y-1)}return f},$n=je(Gt,V),jn=je(Kt,q),ht=E.useMemo(()=>t.filter(o=>o.data.x.length>0).map(o=>{const p=o.axis==="primary"?V:q,f=o.type??"line";if(f==="band")return o.data.y2?{id:o.id,kind:"band",color:o.color,opacity:o.fillOpacity??Fa,d:fn(o.data.x,o.data.y,o.data.y2,B,p)}:{id:o.id,kind:"noop"};if(f==="scatter"){const b=o.data.x.map((S,N)=>({cx:B(S),cy:p(o.data.y[N])}));return{id:o.id,kind:"scatter",color:o.color,points:b}}const y=f==="step"?or:ze,M=(o.data.bridges??[]).filter(b=>nr(o.data.x,o.data.y,b,B,p)),A=[...new Set([...o.data.breaks??[],...M.map(b=>b.to)])].sort((b,S)=>b-S);return{id:o.id,kind:"stroked",color:o.color,dashed:o.dashed??!1,uncertainty:ar(o.data.x,o.data.reckoned??[],B,p),segments:rr(o.data.x,o.data.y,B,p,y,A,o.data.spans,o.data.reckoned),modelled:M.map(b=>({basis:b.basis,d:ze([o.data.x[b.to-1],...b.t,o.data.x[b.to]],[o.data.y[b.to-1],...b.v,o.data.y[b.to]],B,p)})),tail:o.data.x.length>0&&(o.data.reckoned??[]).some(b=>b.to>=o.data.x.length-1)?{cx:B(o.data.x[o.data.x.length-1]),cy:p(o.data.y[o.data.y.length-1])}:null,observed:[...new Set(M.flatMap(b=>[b.to-1,b.to]))].map(b=>({cx:B(o.data.x[b]),cy:p(o.data.y[b])}))}}),[t,B,V,q]),jt=E.useMemo(()=>u?u.map(o=>{const p=o.axis??"primary",f=t.filter(M=>M.axis===p&&M.type!=="band"&&!M.dashed),y=o.kind==="limit"?f.some(M=>{const A=M.data.y.filter(b=>Number.isFinite(b));return A.length>0&&hn(A[A.length-1],o.value,o.bad)}):o.kind==="target"&&f.some(M=>ba(M.data.y,o.value));return{id:o.id,label:o.label,value:o.value,kind:o.kind,passed:y,currency:Gn(o.reading,{drawsReckoning:!0}),tone:va(o.kind,y),dashed:o.kind!=="marker",y:p==="primary"?V(o.value):q(o.value)}}):[],[u,t,V,q]),Tt=E.useMemo(()=>{const o=(p,f,y)=>Math.max(p,Math.min(y,f));return(u??[]).flatMap(p=>{if(p.kind!=="limit"||!Number.isFinite(p.value))return[];const f=p.axis??"primary",y=f==="primary"?V:q,M=y(p.value),A=p.bad==="above"?-1:1,b=p.label||`the limit at ${a(p.value)}`;return t.filter(S=>S.axis===f&&S.data.x.length>0&&(S.type??"line")!=="band"&&!S.dashed).flatMap(S=>tr({y:S.data.y,cx:S.data.x.map(B),cy:S.data.y.map(y),limit:p.value,limitY:M,bad:p.bad,breaks:S.data.breaks,step:S.type==="step"||S.type==="scatter",minGapPx:pt}).slice(mt?0:-1).map(N=>{const L=a(S.data.y[N.index]),Z=s(S.data.x[N.index],e);return{key:`${p.id}-${S.id}-${N.index}`,color:S.color,x:o(T+pt/2+1,N.x-nn*(N.entered?1:-1),D-pt/2-1),y:o(R+pt/2+1,N.y+A*nn,F-pt/2-1),text:N.entered?N.spells>1?`${S.label} went past ${b} ${N.spells} times from ${Z}, first reading ${L}`:`${S.label} went past ${b} at ${Z}, reading ${L}`:`${S.label} was already past ${b} when this window began at ${Z}, reading ${L}`}}))})},[u,t,B,V,q,s,a,e,T,D,R,F,mt]),ct=(()=>{if(!yt||rt===null||x)return;const o=pt/2,p=[...t.filter(M=>(M.type??"line")!=="band").flatMap(M=>{const A=M.axis==="primary"?V:q,b=M.data.x.map(B),S=M.data.y.map(A);return M.type==="scatter"?b.map((N,L)=>({cx:[N],cy:[S[L]]})):[{cx:b,cy:S}]}),...jt.map(M=>({cx:[T,D],cy:[M.y,M.y]}))],f=[...Tt.map(M=>({x0:M.x-o,y0:M.y-o,x1:M.x+o,y1:M.y+o})),...d==="none"||G?[]:t.map((M,A)=>({x0:T+3,y0:R+6+A*16,x1:T+3+Math.min(M.label.length*6+8,nt-6),y1:R+6+A*16+13}))],y=Ko({plot:{x0:T,y0:R,x1:D,y1:F},card:{width:rt.w,height:rt.h},traces:p,obstacles:f});return y?{x0:y.x,y0:y.y,x1:y.x+rt.w,y1:y.y+rt.h}:void 0})(),Nt=E.useMemo(()=>{if(!mt)return new Map;const o=pt/2;return xa({labels:jt.filter(p=>p.label).map(p=>({id:p.id,width:(p.label?.length??0)*vn+(p.currency.held?yn:0),lineY:p.y})),plot:G??{x0:T,y0:R,x1:D,y1:F},obstacles:[...ct?[ct]:[],...Tt.map(p=>({x0:p.x-o,y0:p.y-o,x1:p.x+o,y1:p.y+o})),...d==="none"?[]:t.map((p,f)=>({x0:G?G.x0:T+3,y0:R+6+f*16,x1:(G?G.x0:T+3)+Math.min(p.label.length*6+8,G?G.x1-G.x0:nt-6),y1:R+6+f*16+13}))],traces:(G?[]:t).filter(p=>(p.type??"line")!=="band").map(p=>({cx:p.data.x.map(B),cy:p.data.y.map(p.axis==="primary"?V:q)}))})},[mt,ct,G,jt,Tt,d,t,B,V,q,T,D,R,F,nt]),En=t.flatMap(o=>{const p=ht.find(b=>b.id===o.id),f=p?.kind==="stroked"?p.modelled.map(b=>b.basis):[],y=o.data.reckoned??[];if(y.length===0&&f.length===0)return[];const A=[...new Set([...y.map(b=>b.basis),...f])].map(b=>`${o.label}: part of this trace is reckoned, ${Kn(b)}, not measured`);return y.some(b=>b.bandLo&&b.bandHi)&&A.push(`${o.label}: ${Xa}`),A}),An=jt.flatMap(o=>{const p=o.label??o.id,f=[];return o.passed&&o.kind==="limit"&&f.push(`${p}: limit passed`),o.passed&&o.kind==="target"&&f.push(`${p}: target reached`),o.currency.held&&f.push(Un(p,o.currency.caption)),o.label&&!Nt.get(o.id)&&f.length===0&&f.push(o.label),f}),Ee=[w??"Telemetry line chart",...ha(m??[]),...En,...An].join("; "),re=E.useMemo(()=>t.filter(o=>o.data.x.length>0).map(o=>j==="value"?qo(o):o),[t,j]),ae=E.useMemo(()=>U?Qo(re):[],[U,re]),Pt=Math.min(e[0],e[1]),Ft=Math.max(e[0],e[1]),Sn=j==="value"?(Ft-Pt)*ja:void 0;function Ae(o){const p=re.map(f=>{const y=Zo(f,o,Sn),M=f.format??a,A=f.axis==="primary"?V:q,b=(f.type??"line")==="band";return y===null?{id:f.id,label:f.label,color:f.color,value:null}:{id:f.id,label:f.label,color:f.color,value:b&&y.y2!==void 0?`${M(y.y)} to ${M(y.y2)}`:M(y.y),currency:y.currency,modelled:y.currency==="modelled",y:b?void 0:A(y.y)}});if(mt)for(const f of jt)f.kind!=="marker"&&p.push({id:`threshold-${f.id}`,label:f.kind,color:f.tone.label,value:f.label??a(f.value),detail:!0,currency:f.currency.held?f.currency.mark==="modelled"?"modelled":"held":void 0,modelled:f.currency.held&&f.currency.mark==="modelled"});return{heading:s(o,e),rows:p}}function Se(o){const{heading:p,rows:f}=Ae(o);return[p,...f.map(y=>`${y.label} ${y.value??"no sample"}${y.currency?`, ${y.currency}`:""}`)].join("; ")}const Ie=t.filter(o=>(o.type??"line")!=="band").map(o=>({cx:o.data.x.map(B),cy:o.data.y.map(o.axis==="primary"?V:q)})),_e=ct?[...Ie,Uo(ct)]:Ie,Le=yt&&!x&&rt!==null&&!ct&&dt<Q-1;E.useLayoutEffect(()=>{Le&&Dt(o=>o+1)},[Le]);const In=o=>{let p=o,f=Number.POSITIVE_INFINITY;for(const y of ae)y<Pt||y>Ft||Math.abs(y-o)<f&&(f=Math.abs(y-o),p=y);return p},bt=U&&P!==null&&P.at>=Pt&&P.at<=Ft?In(P.at):null,Et=bt===null?null:Ae(bt),Ce=Et!==null&&Vn({x:bt===null?0:B(bt),plot:{x0:T,y0:R,x1:D,y1:F},heading:Et.heading,rows:Et.rows,column:G,traces:_e});function _n(o){const p=o.currentTarget.getBoundingClientRect(),f=o.clientX-p.left;return f<T||f>D?null:e[0]+(f-T)/(D-T)*(e[1]-e[0])}function Ln(o){const p=_n(o);if(p===null){X(f=>f?.source==="pointer"?null:f);return}X({at:p,source:"pointer"})}function Cn(o){const p=ae.filter(A=>A>=Pt&&A<=Ft),f={ArrowLeft:o.shiftKey?-10:-1,ArrowRight:o.shiftKey?10:1,Home:-p.length,End:p.length};if(o.key==="Escape"){if(P===null)return;o.preventDefault(),X(null),H("");return}const y=f[o.key];if(y===void 0)return;o.preventDefault();const M=Oe(p,bt,y);M!==null&&(X({at:M,source:"keys"}),H(Se(M)))}function Rn(o){try{Y(o.currentTarget.matches(":focus-visible"))}catch{Y(!0)}if(P!==null)return;const p=Oe(ae.filter(f=>f>=Pt&&f<=Ft),null,0);p!==null&&(X({at:p,source:"keys"}),H(Se(p)))}function Tn(){Y(!1),X(o=>o?.source==="keys"?null:o),H("")}const Nn=U?{tabIndex:0,onPointerMove:Ln,onPointerLeave:()=>X(o=>o?.source==="pointer"?null:o),onKeyDown:Cn,onFocus:Rn,onBlur:Tn}:{},Ut={scaleX:B,scaleYPrimary:V,scaleYSecondary:q,plotX0:T,plotX1:D,plotY0:R,plotY1:F,uid:st,labels:mt},Pn=x&&m?Vr(m,Ut):()=>!1,se=`plot-layer-clip-${st}`;if(nt<=0||ut<=0)return l.jsx("svg",{width:Math.max(0,K),height:Math.max(0,C),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:l.jsx("title",{children:"Chart too small to render"})});const Re=l.jsxs("svg",{width:K,height:C,role:Tt.length>0||U?"group":"img","aria-label":Ee,"aria-describedby":U?`${st}-crosshair-hint`:void 0,...Nn,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...U?{touchAction:"pan-y",outline:I?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[l.jsx("title",{children:Ee}),m&&m.length>0&&l.jsx("defs",{children:l.jsx("clipPath",{id:se,children:l.jsx("rect",{x:T,y:R,width:nt,height:ut})})}),l.jsx("rect",{x:T,y:R,width:nt,height:ut,fill:"var(--color-surface-panel)"}),m&&m.length>0&&l.jsx("g",{clipPath:`url(#${se})`,children:l.jsx(ue,{layers:m,frame:Ut,pass:"background"})}),!x&&Gt.map((o,p)=>{const f=V(o);return l.jsxs(ie.Fragment,{children:[l.jsx("line",{x1:T,y1:f,x2:D,y2:f,stroke:"var(--color-border-subtle)",strokeWidth:1}),$n.has(p)&&l.jsx("text",{x:T-4,y:f,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:a(o,Gt)})]},`py-${p}`)}),!x&&Kt.map((o,p)=>jn.has(p)?l.jsx("text",{x:D+4,y:q(o),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:a(o,Kt)},`sy-${p}`):null),!h&&!x&&Rt.map((o,p)=>l.jsx("line",{x1:B(o),y1:R,x2:B(o),y2:F,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${p}`)),!h&&!x&&wn.map((o,p)=>l.jsx("text",{x:o.x,y:F+14,textAnchor:o.anchor,fill:"var(--color-text-faint)",fontSize:11,children:o.text},`xl-${p}`)),Ct&&l.jsx("text",{x:(T+D)/2,y:C-5,textAnchor:"middle",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"x",children:pe(O,nt)}),be&&l.jsx("text",{x:vt/2,y:(R+F)/2,transform:`rotate(-90 ${vt/2} ${(R+F)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y",children:pe(v,ut)}),ve&&l.jsx("text",{x:K-vt/2,y:(R+F)/2,transform:`rotate(90 ${K-vt/2} ${(R+F)/2})`,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-muted)",fontSize:10,"data-axis-title":"y2",children:pe(z,ut)}),x&&Ea(T,D,R,F,g).filter(o=>!Pn(o.x,o.y)).map(o=>l.jsx("circle",{cx:o.x,cy:o.y,r:1,fill:"var(--color-text-faint)",opacity:.35},o.key)),!x&&l.jsxs(l.Fragment,{children:[l.jsx("line",{x1:T,y1:R,x2:T,y2:F,stroke:"var(--color-border-strong)",strokeWidth:1}),l.jsx("line",{x1:T,y1:F,x2:D,y2:F,stroke:"var(--color-border-strong)",strokeWidth:1}),it&&l.jsx("line",{x1:D,y1:R,x2:D,y2:F,stroke:"var(--color-border-strong)",strokeWidth:1})]}),ht.filter(o=>o.kind==="band").map(o=>l.jsx("path",{d:o.d,fill:o.color,fillOpacity:o.opacity,stroke:"none"},o.id)),ht.filter(o=>o.kind==="stroked").flatMap(o=>o.uncertainty.map((p,f)=>l.jsx("path",{d:p.d,"data-band-kind":p.kind,fill:o.color,fillOpacity:Oa,stroke:p.kind==="bound"?o.color:"none",strokeOpacity:p.kind==="bound"?za:void 0,strokeWidth:p.kind==="bound"?1:void 0},`${o.id}-band-${f}`))),ht.filter(o=>o.kind==="stroked").flatMap(o=>o.segments.map((p,f)=>l.jsx("path",{d:p.d,"data-stream-status":p.status,"data-reckoning-basis":p.basis,stroke:o.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:p.basis!==void 0?on:void 0,strokeDasharray:p.basis!==void 0?rn:o.dashed?"4 3":void 0},`${o.id}-${f}`))),ht.filter(o=>o.kind==="stroked").flatMap(o=>o.modelled.map((p,f)=>l.jsx("path",{d:p.d,"data-reckoning-basis":p.basis,stroke:o.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:on,strokeDasharray:rn},`${o.id}-modelled-${f}`))),ht.map(o=>o.kind==="stroked"&&o.tail!==null?l.jsx(qn,{kind:"modelled",x:o.tail.cx,y:o.tail.cy},`${o.id}-tail`):null),ht.filter(o=>o.kind==="stroked").flatMap(o=>o.observed.map((p,f)=>l.jsx("circle",{cx:p.cx,cy:p.cy,r:ma,fill:o.color,"data-observed-sample":""},`${o.id}-observed-${f}`))),ht.filter(o=>o.kind==="scatter").flatMap(o=>o.points.map((p,f)=>l.jsx("circle",{cx:p.cx,cy:p.cy,r:La,fill:o.color},`${o.id}-${f}`))),t.map(o=>{if(!o.headMark)return null;const p=o.axis==="primary"?V:q;let f=o.data.x.length-1;for(;f>=0&&!(Number.isFinite(o.data.x[f])&&Number.isFinite(o.data.y[f]));)f-=1;return f<0?null:l.jsx("circle",{cx:B(o.data.x[f]),cy:p(o.data.y[f]),r:ga,fill:o.headMark==="dot"?o.color:"var(--color-surface-panel)",stroke:o.color,strokeWidth:o.headMark==="dot"?0:1.5,"data-head-mark":o.headMark},`${o.id}-head`)}),m&&m.length>0&&l.jsx("g",{clipPath:`url(#${se})`,children:l.jsx(ue,{layers:m,frame:Ut,pass:"foreground"})}),jt.map(o=>l.jsxs(ie.Fragment,{children:[l.jsx("line",{x1:T,y1:o.y,x2:D,y2:o.y,stroke:o.tone.line,strokeWidth:1,strokeDasharray:o.dashed?"4 3":void 0,"data-threshold-kind":o.kind,"data-threshold-passed":o.passed||void 0}),o.label&&Nt.get(o.id)&&!(G!==void 0&&Ce&&o.kind!=="marker")&&l.jsxs("text",{x:Nt.get(o.id)?.x,y:Nt.get(o.id)?.y,textAnchor:Nt.get(o.id)?.anchor,fill:o.tone.label,fontSize:10,children:[o.label,o.currency.held&&l.jsx(Zn,{size:10,kind:o.currency.mark??"held"})]})]},o.id)),Tt.map(o=>l.jsx(Jo,{x:o.x,y:o.y,size:pt,color:o.color,text:o.text},o.key)),d!=="none"&&!Ce&&t.map((o,p)=>{const f=R+6+p*16;if(f+13>F)return null;const y=G?G.x0:T+3,M=G?G.x1-G.x0:nt-6,A=Math.min(o.label.length*6+8,M),b=Math.max(1,Math.floor((A-8)/6)),S=o.label.length>b?`${o.label.slice(0,Math.max(1,b-1))}...`:o.label;return l.jsxs(ie.Fragment,{children:[l.jsx("rect",{x:y,y:f,width:A,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),l.jsx("text",{x:y+3,y:f+10,fill:o.color,fontSize:10,children:S})]},o.id)}),m&&m.length>0&&mt&&l.jsx(ue,{layers:m,frame:Ut,pass:"caption"}),Et!==null&&bt!==null&&l.jsx(Qn,{x:B(bt),plot:{x0:T,y0:R,x1:D,y1:F},heading:Et.heading,rows:Et.rows,column:G,traces:_e})]}),Te=yt?l.jsx("div",{ref:xt,"data-plot-card":"",style:{position:"absolute",left:ct?.x0??0,top:ct?.y0??0,visibility:ct?"visible":"hidden",pointerEvents:"none",width:"max-content",padding:"var(--gap-line) var(--gap-related)",background:"var(--color-surface-panel)",border:"1px solid var(--color-border-strong)",borderRadius:3},children:typeof W=="function"?W({width:nt-en*2,height:ut-en*2,form:dt}):W}):null;return U?l.jsxs(l.Fragment,{children:[Re,Te,l.jsx(Ne,{id:`${st}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),l.jsx(Ne,{role:"status","aria-live":"polite",children:_})]}):l.jsxs(l.Fragment,{children:[Re,Te]})}function an(t,e,n,r=[]){if(e)return e;if(t.length===0&&r.length===0)return n==="log"?[1,10]:[0,1];let s=[...t.flatMap(Ya),...r];return n==="log"&&(s=s.filter(a=>a>0)),s.length===0?n==="log"?[1,10]:[0,1]:[Math.min(...s),Math.max(...s)]}function Ha(t){if(t===0)return"0";if(Math.abs(t)>=1e6)return`${(t/1e6).toFixed(1)}M`;if(Math.abs(t)>=1e3)return`${(t/1e3).toFixed(1)}k`;if(Number.isInteger(t))return String(t);if(Math.abs(t)<.01){const e=Math.floor(Math.log10(Math.abs(t))),n=t/10**e;return Math.abs(n-1)<1e-9?`1e${e}`:`${n.toFixed(1)}e${e}`}return t.toFixed(2)}const Ps=k.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function Fs({state:t,elapsedMs:e}){if(t==="connected")return null;const n=t==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return l.jsxs(ln,{accent:Wa[t],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[l.jsx(Ga,{children:n}),l.jsxs(Ka,{children:["T+",Da(e)]})]})}function Da(t){const e=Math.max(0,Math.floor(t/1e3)),n=Math.floor(e/3600),r=Math.floor(e%3600/60),s=e%60,a=i=>String(i).padStart(2,"0");return n>0?`${n}:${a(r)}:${a(s)}`:`${a(r)}:${a(s)}`}const Wa={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},Ga=k.span`
  font-weight: 600;
`,Ka=k.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function Os({entries:t}){return t.length===0?null:l.jsxs(Va,{role:"status","aria-live":"polite",children:[l.jsx(qa,{}),l.jsx(Za,{children:"SOURCE OFFLINE"}),l.jsx(Qa,{children:t.map(e=>l.jsxs(Ja,{children:[l.jsx(ts,{children:e.name}),l.jsx(es,{children:e.status}),l.jsx(ns,{children:Ua(e.elapsedMs)}),e.onRetry&&l.jsx(sn,{size:"sm",onClick:e.onRetry,"aria-label":`Retry ${e.name} now`,children:"Retry now"})]},e.id))})]})}function Ua(t){return Yn(to("irl:s",t/1e3))}const Va=k.div`
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
`,qa=k.span`
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
`,Za=k.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,Qa=k.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,Ja=k.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,ts=k.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,es=k.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,ns=k.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,zs=k.div`
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
`,Xs=k.div`
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
`,Ys=k.div`
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Bs=k.input`
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
`,Hs=k.button`
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
`,Ds=k.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,Ws=k.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,Gs=k.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,Ks=k.button`
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
`,Us=k.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,Vs=k.ul`
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
`,os={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},rs={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function as(t){return os[t]??rs}function qs({label:t}){const e=as(t);return l.jsx(ss,{$bg:e.bg,$fg:e.fg,$border:e.border,children:t})}const ss=k.span`
  display: inline-block;
  padding: var(--inset-chip);
  border-radius: var(--radius-regular);
  font-size: var(--font-size-caption);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${({$bg:t,$fg:e,$border:n})=>Ht`
    background: ${t};
    color: ${e};
    border: 1px solid ${n};
  `}
`;eo({id:"default-dark",name:"Default Dark",theme:Jn});function Zs({kind:t,local:e,remote:n,remoteLabel:r="Peer"}){const s=t==="major"?"alert":"status",a=t==="major"?"RELOAD REQUIRED":t==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",i=t==="unknown"?`${r} didn't report a version`:`${r} v${n??"?"} ↔ this v${e}`;return l.jsxs(ln,{accent:is[t],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:s,children:[l.jsx(cs,{children:a}),l.jsx(ls,{children:i})]})}const is={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},cs=k.span`
  font-weight: 600;
`,ls=k.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{To as A,ln as B,er as C,Ss as D,Ts as E,Ls as F,zs as G,Xs as H,Ys as I,Bs as J,Hs as K,Ns as L,Ds as M,Us as N,Gs as O,Ps as P,Ks as Q,Ws as R,Fs as S,qs as T,Vs as U,Zs as V,Es as a,As as b,Is as c,_s as d,Cs as e,Rs as f,ue as g,Os as h,js as i,fn as j,ze as k,rr as l,or as m,ar as n,nr as o,bn as p,pn as q,as as r,Xe as s,ce as t,sr as u,ge as v,ha as w,Dr as x,Vr as y,ya as z};
