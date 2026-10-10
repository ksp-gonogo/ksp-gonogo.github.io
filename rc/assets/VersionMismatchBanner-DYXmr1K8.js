import{j as i}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import b,{css as mt}from"./ext-styled-components-Br73TgY3.js";import{d as ce,Z as Ce,C as Te,a2 as de,a4 as Re,a6 as _e,au as Fe,at as Oe,aj as Pe,ae as Ne,ah as ze,V as Ut,W as Ye}from"./PlotCrosshair-B8FkPL92.js";import{r as w,R as Rt}from"./ext-react-RRA14VTW.js";import{T as Be,d as Xe,w as He}from"./streamStatusWord-Dpl2hf1A.js";import{aX as De}from"./view-clock-formula-DUo1RDOJ.js";import"./ksp-enum-names-CzwsFr5h.js";import"./screen-C58fnbVE.js";import"./lagrange-xmA8H4kr.js";import"./use-transmissions-B613PBVJ.js";import"./websocket-transport-DtBmzVaz.js";import{r as We}from"./registry-1EwMkbe1.js";import"./index-CnzDwjkh.js";function ue({accent:t,anchor:e="inline",top:r=12,zIndex:s=999,glow:a,pulse:n=!1,role:l="status",ariaLive:c,onClick:u,interactive:p=!1,children:f}){const x=c??(l==="alert"?"assertive":"polite");return e==="top"?i.jsxs(Ke,{$accent:t,$top:r,$zIndex:s,$glow:a,role:l,"aria-live":x,children:[i.jsx(Zt,{$accent:t,$pulse:n}),f]}):i.jsxs(Ge,{as:u?"button":"div",type:u?"button":void 0,$accent:t,$glow:a,$clickable:!!u,$interactive:p,role:l,"aria-live":x,onClick:u,children:[i.jsx(Zt,{$accent:t,$pulse:n}),f]})}const Ke=b.div`
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
  ${t=>t.$glow?mt`box-shadow: ${t.$glow};`:""}
`,Ge=b.div`
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
  ${t=>t.$glow?mt`box-shadow: ${t.$glow};`:""}

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
`,Zt=b.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${t=>t.$accent};
  flex-shrink: 0;

  ${t=>t.$pulse&&mt`
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
`;function jr({children:t}){return i.jsx(Ve,{children:t})}const Ve=b.div`
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
`,Ue=2e3,Ze={copied:t=>`Copied ${t}`,failed:()=>"Could not copy, select the text instead"};function Lr({command:t,label:e}){const[r,s]=w.useState("idle"),a=w.useRef(void 0);w.useEffect(()=>()=>clearTimeout(a.current),[]);async function n(){let l="copied";try{await navigator.clipboard.writeText(t)}catch{l="failed"}s(l),clearTimeout(a.current),a.current=setTimeout(()=>s("idle"),Ue)}return i.jsxs(qe,{children:[i.jsx(Qe,{role:"group","aria-label":e,tabIndex:0,children:i.jsx(Je,{children:t})}),i.jsx(ce,{variant:"ghost",type:"button",onClick:()=>void n(),"aria-label":`Copy ${e}`,children:r==="copied"?"Copied":"Copy"}),i.jsx(Ce,{visuallyHidden:!0,children:Ze[r]?.(e)})]})}const qe=b.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,Qe=b.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Je=b.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function to(t,e){if(!e)return!0;const r=e.toLowerCase();return(t.label??t.key).toLowerCase().includes(r)||t.key.toLowerCase().includes(r)}function Er({keys:t,value:e,onChange:r,placeholder:s="Search...",emptyHint:a="No matches"}){const[n,l]=w.useState(""),c=w.useMemo(()=>t.filter(f=>to(f,n)),[t,n]),u=w.useMemo(()=>{const f=new Map;for(const x of c){const g=x.group??"Other";let k=f.get(g);k||(k=[],f.set(g,k)),k.push(x)}return[...f.entries()].sort(([x],[g])=>x.localeCompare(g))},[c]),p=f=>{const x=new Set(e);x.has(f)?x.delete(f):x.add(f),r(x)};return i.jsxs(eo,{children:[i.jsx(oo,{type:"text",value:n,placeholder:s,onChange:f=>l(f.target.value)}),i.jsx(no,{children:u.length===0?i.jsx(ho,{children:a}):u.map(([f,x])=>i.jsxs(ro,{children:[i.jsx(ao,{children:f}),x.map(g=>{const k=e.has(g.key),X=`dkmp-${g.key}`;return i.jsxs(io,{$checked:k,children:[i.jsx(so,{id:X,type:"checkbox",checked:k,onChange:()=>p(g.key)}),i.jsxs(lo,{htmlFor:X,children:[i.jsx(co,{$checked:k,children:k&&i.jsx(Te,{size:11,strokeWidth:3})}),i.jsx(uo,{children:g.label??g.key}),g.unit&&i.jsx(po,{children:g.unit})]})]},g.key)})]},f))})]})}const eo=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,oo=b.input`
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
`,no=b.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,ro=b.div``,ao=b.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,io=b.div`
  background: ${({$checked:t})=>t?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,so=b.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,lo=b.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,co=b.span`
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
`,uo=b.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,po=b.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,ho=b.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function Ir({show:t,message:e,hint:r,children:s}){return t?i.jsxs(xo,{children:[i.jsx(go,{...fo,children:s}),i.jsxs(mo,{role:"status","aria-live":"polite",children:[i.jsx(bo,{children:e}),r&&i.jsx(vo,{children:r})]})]}):i.jsx(i.Fragment,{children:s})}const fo={inert:""},xo=b.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,go=b.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,mo=b.div`
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
`,bo=b.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,vo=b.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,pe=w.createContext(null),yo=400,he="(pointer: coarse)";function ko(t){if(typeof window.matchMedia!="function")return()=>{};const e=window.matchMedia(he);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}function $o(){return typeof window.matchMedia=="function"&&window.matchMedia(he).matches}function Sr({children:t}){const[e,r]=w.useState(!1),s=w.useSyncExternalStore(ko,$o,()=>!1),a=e||s,n=w.useRef(null),l=w.useCallback(()=>{n.current!==null&&(window.clearTimeout(n.current),n.current=null)},[]),c=w.useCallback(()=>{l(),r(!0)},[l]),u=w.useCallback(()=>{l(),n.current=window.setTimeout(()=>{n.current=null,r(!1)},yo)},[l]);w.useEffect(()=>()=>l(),[l]);const p=w.useMemo(()=>({active:a,onMouseEnter:c,onMouseLeave:u,onFocus:c,onBlur:u}),[a,c,u]);return i.jsx(pe.Provider,{value:p,children:t})}function wo(){return w.useContext(pe)}function Ar({bottom:t,children:e,...r}){const s=wo(),a=s?.active??!0,n=r["aria-label"]??r.title;return i.jsxs(Mo,{$visible:a,$bottom:t,onMouseEnter:s?.onMouseEnter,onMouseLeave:s?.onMouseLeave,onFocus:s?.onFocus,onBlur:s?.onBlur,children:[n?i.jsx(jo,{$visible:a,"aria-hidden":"true",children:n}):null,i.jsx(Lo,{$visible:a,tabIndex:a?0:-1,...r,children:e})]})}const Mo=b.div`
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
`,jo=b.span`
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
`,Lo=b.button`
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
`;function Cr({bottom:t,label:e,onAccept:r,onDismiss:s,autoDismissMs:a=15e3,acceptLabel:n}){return w.useEffect(()=>{if(a<=0)return;const l=window.setTimeout(s,a);return()=>window.clearTimeout(l)},[a,s]),i.jsxs(Eo,{$bottom:t,role:"status","aria-live":"polite",children:[i.jsx(Io,{type:"button",onClick:r,"aria-label":n??e,children:e}),i.jsx(de,{text:"Dismiss",children:i.jsx(So,{type:"button",onClick:s,"aria-label":"Dismiss",children:"×"})})]})}const Eo=b.div`
  ${({$bottom:t})=>t!==void 0?mt`
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
`,Io=b.button`
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
`,So=b.button`
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
`,Tr=w.forwardRef(function({id:e,label:r="Choose file",accept:s,multiple:a,fileName:n,emptyText:l="No file chosen",disabled:c,onChange:u},p){const f=w.useId(),x=e??f,g=w.useRef(null);return i.jsxs(Ao,{children:[i.jsx(To,{id:x,ref:k=>{if(g.current=k,typeof p=="function"){p(k);return}p&&(p.current=k)},type:"file",accept:s,multiple:a,disabled:c,onChange:u}),i.jsx(Co,{htmlFor:x,$disabled:!!c,children:r}),i.jsx(Ro,{"aria-live":"polite",$hasFile:!!n,children:n??l})]})}),Ao=b.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,Co=b.label`
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
`,To=b.input`
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
`,Ro=b.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:t})=>t?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`;function _o(t,e){return t?.includes(e)??!1}function Fo(t,e){const{reckoned:r,spans:s}=t.data;return r?.some(a=>e>=a.from&&e<=a.to)?"modelled":s?.some(a=>e>=a.from&&e<=a.to&&a.status==="recorded")?"recorded":"measured"}function Oo(t,e){const r=t.data.x,s=t.data.y,a=Math.min(r.length,s.length);if(a===0||e<r[0]||e>r[a-1])return null;let n=0,l=a-1;for(;n<l;){const g=n+l>>1;r[g]<e?n=g+1:l=g}const c=n,u=Math.max(0,c-1);if(r[c]!==e&&c>0&&_o(t.data.breaks,c))return null;const p=e-r[u]<=r[c]-e?u:c,f=s[p];if(!Number.isFinite(f))return null;const x=t.data.y2?.[p];return{index:p,x:r[p],y:f,...x!==void 0&&Number.isFinite(x)?{y2:x}:{},currency:Fo(t,p)}}function Po(t){const e=new Set;for(const r of t)if(!((r.type??"line")==="band"&&!r.data.y2))for(const s of r.data.x)Number.isFinite(s)&&e.add(s);return[...e].sort((r,s)=>r-s)}function qt(t,e,r){if(t.length===0)return null;if(e===null)return t[t.length-1];let s=0,a=t.length-1;for(;s<a;){const l=s+a>>1;t[l]<e?s=l+1:a=l}let n=s+r;return t[s]!==e&&r>0&&(n-=1),t[Math.max(0,Math.min(t.length-1,n))]}function No({x:t,y:e,size:r,color:s,text:a}){const n=r/2,l=`M 0 ${-n} L ${n} ${n*.8} L ${-n} ${n*.8} Z`,c=`M -0.9 ${-n*.42} H 0.9 V ${n*.2} H -0.9 Z`,u=`M -0.9 ${n*.4} H 0.9 V ${n*.64} H -0.9 Z`;return i.jsx(de,{text:a,focusable:!0,children:i.jsxs("g",{role:"img","aria-label":a,"data-limit-crossing":"",transform:`translate(${t} ${e})`,children:[i.jsx("title",{}),i.jsx("circle",{r:12,fill:"transparent"}),i.jsx("path",{d:`${l} ${c} ${u}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),i.jsx("path",{d:l,fill:"none",stroke:s,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function fe(t,e,r){return r==="above"?t>=e:t<=e}function zo({y:t,cx:e,cy:r,limit:s,limitY:a,bad:n,breaks:l=[],step:c=!1,minGapPx:u}){const p=(v,T,E)=>{if(!T)return{index:v,x:e[v],y:r[v],entered:!1};if(E===null)return{index:v,x:e[v],y:a,entered:!0};const _=r[v]-r[E],F=_===0?1:(a-r[E])/_;return{index:v,x:e[E]+(e[v]-e[E])*F,y:a,entered:!0}},f=new Set(l),x=[];let g=null,k=!1,X=!1,L=Number.NEGATIVE_INFINITY;for(let v=0;v<t.length;v++){if(!Number.isFinite(t[v])){g=null;continue}const T=fe(t[v],s,n);if(T&&!X){const E=p(v,k,c||f.has(v)?null:g),_=x[x.length-1];_!==void 0&&E.x-L<u?_.spells++:x.push({...E,spells:1}),L=E.x}X=T,k=!0,g=v}return x}const Yo=1;function Bo(t,e,r,s,a){const n=r.to;if(n<1||n>=t.length)return!1;const l=s(t[n-1]),c=s(t[n]),u=a(e[n-1]),p=a(e[n]);return c>l?r.t.some((f,x)=>{const g=s(f),k=u+(p-u)*(g-l)/(c-l);return Math.abs(a(r.v[x])-k)>Yo}):!1}function _t(t,e,r,s){const a=e-t;if(a===0){const n=(r+s)/2;return()=>n}return n=>r+(n-t)/a*(s-r)}function Nt(t,e,r=5){if(t===e)return Array.from({length:r},()=>t);const a=(e-t)/(r-1),n=10**Math.floor(Math.log10(a)),c=([1,2,2.5,5,10].find(g=>g*n>=a)??10)*n,u=Math.ceil(t/c)*c,p=[];for(let g=0;p.length<r;g++){const k=u+g*c;if(k>e+c*.01)break;p.push(k)}if(p.length>=2)return p;const f=Math.floor(t/c)*c,x=Math.ceil(e/c)*c;return x>f?[f,x]:[f,f+c]}function xe(t,e){const r=Math.floor(t/1e3);if(e>=36e5){const n=Math.floor(r/3600),l=Math.floor(r%3600/60),c=r%60;return`${n}:${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`}const s=Math.floor(r/60),a=r%60;return`${s}:${String(a).padStart(2,"0")}`}function Qt(t,e,r,s,a=[]){if(t.length===0)return"";const n=[];for(let l=0;l<t.length;l++){const c=r(t[l]).toFixed(2),u=s(e[l]).toFixed(2),p=l===0||a.includes(l);n.push(`${p?"M":"L"}${c},${u}`),p&&zt(l,t.length,a)&&n.push(`L${c},${u}`)}return n.join(" ")}function zt(t,e,r){return t+1>=e||r.includes(t+1)}function Xo(t,e,r,s,a=[]){if(t.length===0)return"";const n=[];let l=s(e[0]).toFixed(2);const c=r(t[0]).toFixed(2);n.push(`M${c},${l}`),zt(0,t.length,a)&&n.push(`L${c},${l}`);for(let u=1;u<t.length;u++){const p=r(t[u]).toFixed(2),f=s(e[u]).toFixed(2);if(a.includes(u)){n.push(`M${p},${f}`),zt(u,t.length,a)&&n.push(`L${p},${f}`),l=f;continue}n.push(`H${p}`),f!==l&&n.push(`V${f}`),l=f}return n.join(" ")}function Ho(t,e,r,s,a,n=[],l=[],c=[]){if(t.length===0)return[];if(l.length===0&&c.length===0)return[{d:a(t,e,r,s,n)}];function u(L,v){const T=new Array(t.length);for(const E of L){const _=Math.min(t.length-1,E.to);for(let F=Math.max(0,E.from);F<=_;F++)T[F]=v(E)}return T}const p=u(l,L=>L.status),f=u(c,L=>L.basis),x=new Set(n),g=[];let k=0;const X=(L,v)=>{const T=L>0&&!x.has(L)?L-1:L,E=G=>G.slice(T,v+1),_=[];for(const G of n)G>T&&G<=v&&_.push(G-T);const F=a(E(t),E(e),r,s,_);F!==""&&g.push({status:p[L],basis:f[L],d:F})};for(let L=1;L<=t.length;L++)(L===t.length||p[L]!==p[k]||f[L]!==f[k])&&(X(k,L-1),k=L);return g}function ge(t,e,r,s,a){if(t.length===0)return"";const n=Math.min(t.length,e.length,r.length);if(n===0)return"";const l=[];for(let c=0;c<n;c++){const u=s(t[c]).toFixed(2),p=a(r[c]).toFixed(2);l.push(`${c===0?"M":"L"}${u},${p}`)}for(let c=n-1;c>=0;c--){const u=s(t[c]).toFixed(2),p=a(e[c]).toFixed(2);l.push(`L${u},${p}`)}return l.push("Z"),l.join(" ")}function Do(t,e,r,s){const a=[];for(const n of e){const{bandLo:l,bandHi:c,bandKind:u}=n;if(!l||!c||u===void 0)continue;const p=[];for(let x=n.from;x<=n.to&&x<t.length;x++)p.push(t[x]);const f=ge(p,l,c,r,s);f!==""&&a.push({d:f,kind:u})}return a}function Jt(t,e,r,s){if(t===e){const p=(r+s)/2;return()=>p}const a=t>0?t:1e-9,n=e>a?e:a*10,l=Math.log10(a),u=Math.log10(n)-l;if(u===0){const p=(r+s)/2;return()=>p}return p=>{const f=p>0?p:a;return r+(Math.log10(f)-l)/u*(s-r)}}function Wo(t,e,r=5){if(!(t>0)||!(e>0)||e<=t)return Nt(t,e,r);const s=Math.log10(t),a=Math.log10(e);if(a-s<1)return Nt(t,e,r);const l=Math.ceil(s),c=Math.floor(a),u=Math.max(1,Math.ceil((c-l+1)/r)),p=[];for(let f=l;f<=c;f+=u)p.push(10**f);return p.length>0?p:[t,e]}const Ko={faint:.45,normal:.85,bright:1},Go=1.5,Vo=5,ht=7,ft=6,te=10,xt=9,rt=12,Uo=9,Zo=13,qo=.1,Ft=5,Qo=.5,Jo=.5;function q(t){return Xe[t.tone??"neutral"]}function gt(t){return Be[t.tone??"neutral"]}function V(t){return Ko[t.emphasis??"normal"]}function tt(t,e){return e.axis==="secondary"?t.scaleYSecondary:t.scaleYPrimary}function tn(t){const e=t.axis==="secondary"?"secondary":"primary";switch(t.kind){case"series":return{xs:t.points.map(r=>r.x),ys:t.points.map(r=>r.y),axis:e};case"region":return{xs:[...t.boundary,...t.boundaryHigh??[]].map(r=>r.x),ys:[...t.boundary,...t.boundaryHigh??[]].map(r=>r.y),axis:e};case"rule":return t.along==="y"?{xs:[],ys:[t.value],axis:e}:{xs:[t.value],ys:[],axis:e};case"marker":case"annotation":return{xs:[t.at.x],ys:[t.at.y],axis:e};default:return{xs:[],ys:[],axis:e}}}const en=5.8,at=11,ee=4;function on(t,e){const r=e.text.length*en,{frame:s}=e,a=e.anchorX+e.gap,n=a+r<=s.plotX1-4?"start":"end",l=n==="start"?a:e.anchorX-e.gap,c=n==="start"?l:l-r,u=c+r,p=x=>t.some(g=>c<g.x1&&u>g.x0&&x-at<g.y1&&x+2>g.y0);let f=e.anchorY+3;for(let x=0;x<ee&&p(f);x++)f+=at;if(p(f)){f=e.anchorY+3;for(let x=0;x<ee&&p(f);x++)f-=at}return f=Math.min(Math.max(f,s.plotY0+at),s.plotY1-at),t.push({x0:c,x1:u,y0:f-at,y1:f+2}),{x:l,y:f,anchor:n}}function nn(t){return t.map((e,r)=>`${r===0?"M":"L"}${e.x.toFixed(2)},${e.y.toFixed(2)}`).join(" ")}function rn(t){if(t.length===0)return"";const e=[`M${t[0].x.toFixed(2)},${t[0].y.toFixed(2)}`];for(let r=1;r<t.length;r++)e.push(`H${t[r].x.toFixed(2)}`,`V${t[r].y.toFixed(2)}`);return e.join(" ")}function an(t,e,r){if(t.length===0)return[];const s=t[0],a=t[t.length-1],n=[...t];if(e==="right"||e==="left"){const l=e==="right"?r.plotX1:r.plotX0;n.push({x:l,y:a.y},{x:l,y:s.y})}else{const l=e==="above"?r.plotY0:r.plotY1;n.push({x:a.x,y:l},{x:s.x,y:l})}return n}function sn({layer:t,frame:e}){if(t.stops.length===0)return null;const r=tt(e,t),s=t.along==="y"?e.plotY1-e.plotY0:e.plotX1-e.plotX0;if(s<=0)return null;const a=t.along==="y"?e.plotY0:e.plotX0,n=t.along==="y"?r:e.scaleX,l=t.maxOpacity??Jo,c=t.tint??q(t),u=`plot-field-${t.id}-${e.uid}`,p=`plot-field-blur-${t.id}-${e.uid}`,f=t.stops.map(x=>({offset:(n(x.at)-a)/s*100,intensity:Math.max(0,Math.min(1,x.intensity))})).sort((x,g)=>x.offset-g.offset);return i.jsxs(i.Fragment,{children:[i.jsxs("defs",{children:[i.jsx("linearGradient",{id:u,x1:"0%",y1:"0%",x2:t.along==="x"?"100%":"0%",y2:t.along==="y"?"100%":"0%",children:f.map((x,g)=>i.jsx("stop",{offset:`${x.offset.toFixed(2)}%`,stopColor:c,stopOpacity:l*x.intensity},g))}),t.blur!==void 0&&i.jsx("filter",{id:p,children:i.jsx("feGaussianBlur",{stdDeviation:t.blur})})]}),i.jsx("rect",{"data-plot-layer":t.id,"data-plot-layer-kind":"field",x:e.plotX0,y:e.plotY0,width:e.plotX1-e.plotX0,height:e.plotY1-e.plotY0,fill:`url(#${u})`,filter:t.blur!==void 0?`url(#${p})`:void 0})]})}const ln=6,cn=56;function dn(t,e,r,s){const a=Math.max(0,Math.min(e-1,Math.floor(r))),n=Math.max(0,Math.min(e-1,Math.floor(s))),l=Math.min(e-1,a+1),c=Math.min(e-1,n+1),u=Math.max(0,Math.min(1,r-a)),p=Math.max(0,Math.min(1,s-n)),f=t[n*e+a]+(t[n*e+l]-t[n*e+a])*u,x=t[c*e+a]+(t[c*e+l]-t[c*e+a])*u;return f+(x-f)*p}const it=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function un(t){const e=Math.max(0,Math.min(1,t));for(let r=1;r<it.length;r++)if(e<=it[r][0]){const[s,a]=it[r-1],[n,l]=it[r],c=n>s?(e-s)/(n-s):0;return[Math.round(a[0]+(l[0]-a[0])*c),Math.round(a[1]+(l[1]-a[1])*c),Math.round(a[2]+(l[2]-a[2])*c)]}return it[it.length-1][1]}function pn(t,e,r,s,a){const n=t[s*e+a],[l,c,u]=un(n/(r-1)),p=a>0?t[s*e+a-1]:n,f=s>0?t[(s-1)*e+a]:n,x=p!==n||f!==n?.5:1;return`rgb(${Math.round(l*x)}, ${Math.round(c*x)}, ${Math.round(u*x)})`}function hn({layer:t,frame:e}){const{size:r,values:s,bounds:a}=t;if(r<2||s.length<r*r)return null;let n=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;for(let O=0;O<r*r;O++){const z=s[O];if(!Number.isFinite(z))return null;z<n&&(n=z),z>l&&(l=z)}const c=l-n,u=Math.max(2,t.bands??ln),p=tt(e,t),f=e.scaleX(a.x0),x=e.scaleX(a.x1),g=p(a.y0),k=p(a.y1),X=Math.min(f,x),L=Math.min(g,k),v=cn,T=Math.abs(x-f)/v,E=Math.abs(k-g)/v;if(!(T>0)||!(E>0))return null;const _=g<k,F=new Int16Array(v*v);for(let O=0;O<v;O++)for(let z=0;z<v;z++){const W=dn(s,r,z/(v-1)*(r-1),O/(v-1)*(r-1)),K=c>0?(W-n)/c:.5;F[O*v+z]=Math.max(0,Math.min(u-1,Math.floor(K*u)))}const G=[];for(let O=0;O<v;O++){const z=_?O:v-1-O;let W=0,K="";for(let Y=0;Y<=v;Y++){const et=Y<v?pn(F,v,u,O,Y):"";if(Y===0){K=et;continue}et===K&&Y<v||(G.push(i.jsx("rect",{x:X+W*T,y:L+z*E,width:(Y-W)*T+.5,height:E+.5,fill:K},`${O}-${W}`)),W=Y,K=et)}}return i.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"relief",opacity:V(t),"aria-hidden":"true",children:G})}function fn({layer:t,frame:e}){const r=w.useId(),s=tt(e,t),a=p=>({x:e.scaleX(p.x),y:s(p.y)}),n=t.boundary.map(a);if(n.length<2)return null;const l=t.side==="between"?[...n,...(t.boundaryHigh??[]).map(a).reverse()]:an(n,t.side,e);if(t.side==="between"&&!t.boundaryHigh)return null;const c=t.side==="right"?e.plotX1-4:t.side==="left"?e.plotX0+11:n[n.length-1].x,u=e.plotY1-34;return i.jsxs(i.Fragment,{children:[t.hatched&&i.jsx("defs",{children:i.jsx("pattern",{id:r,width:Ft,height:Ft,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:i.jsx("line",{x1:0,y1:0,x2:0,y2:Ft,stroke:q(t),strokeWidth:1,strokeOpacity:t.opacity??Qo})})}),i.jsx("polygon",{"data-plot-layer":t.id,"data-plot-layer-kind":"region","data-hatched":t.hatched?"":void 0,points:l.map(p=>`${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" "),fill:t.hatched?`url(#${r})`:q(t),fillOpacity:t.hatched?void 0:t.opacity??qo}),e.labels&&t.label&&i.jsx("text",{x:c,y:u,transform:`rotate(-90 ${c} ${u})`,fontSize:Uo,letterSpacing:"0.14em",fill:"var(--color-text-muted)",children:t.label})]})}function xn({layer:t,frame:e}){const r=tt(e,t),s=t.points.map(n=>({x:e.scaleX(n.x),y:r(n.y)}));if(s.length===0)return null;const a=Go*(t.weight??1);return t.style==="scatter"?i.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",fill:q(t),opacity:V(t),children:s.map((n,l)=>i.jsx("circle",{cx:n.x,cy:n.y,r:a},l))}):i.jsx("path",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",d:t.style==="step"?rn(s):nn(s),fill:"none",stroke:q(t),strokeOpacity:V(t),strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:t.dashed?"5 3.5":void 0})}function gn({layer:t,frame:e}){const r=tt(e,t),s=t.dashed??!0,a=q(t),n=t.along==="y",l=n?r(t.value):e.scaleX(t.value);return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"rule",x1:n?e.plotX0:l,x2:n?e.plotX1:l,y1:n?l:e.plotY0,y2:n?l:e.plotY1,stroke:a,strokeOpacity:V(t),strokeWidth:1,strokeDasharray:s?"4 3":void 0}),e.labels&&t.label&&i.jsx("text",{x:n?e.plotX1-4:l+3,y:n?l-3:e.plotY0+10,textAnchor:n?"end":"start",fill:gt(t),fontSize:xt,children:t.label})]})}function mn({layer:t,frame:e,placed:r}){const s=tt(e,t),a=e.scaleX(t.at.x),n=s(t.at.y),l=t.across??"x",c=q(t),u=e.labels&&t.label?on(r,{anchorX:a,anchorY:n,gap:ht+3,text:t.label,frame:e}):null;return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"annotation",x1:l==="x"?a-ht:a,x2:l==="x"?a+ht:a,y1:l==="x"?n:n-ht,y2:l==="x"?n:n+ht,stroke:c,strokeOpacity:V(t),strokeWidth:1.75,strokeLinecap:"round"}),u&&t.label&&i.jsx("text",{x:u.x,y:u.y,textAnchor:u.anchor,fontSize:xt,letterSpacing:"0.05em",fill:gt(t),fillOpacity:V(t),children:t.label})]})}function bn({layer:t,frame:e}){const r=tt(e,t),s=e.scaleX(t.at.x),a=r(t.at.y)+(t.offsetPx??0),n=Vo*(t.scale??1),l=q(t),c=t.shape??"dot",u={"data-plot-layer":t.id,"data-plot-layer-kind":"marker",opacity:V(t)},p=c==="dot"?i.jsx("circle",{...u,cx:s,cy:a,r:n,fill:l,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):c==="ring"?i.jsx("circle",{...u,cx:s,cy:a,r:n,fill:"none",stroke:l,strokeWidth:1.5}):c==="cross"?i.jsx("path",{...u,d:`M${s-n},${a} L${s+n},${a} M${s},${a-n} L${s},${a+n}`,stroke:l,strokeWidth:1.5,strokeLinecap:"round"}):i.jsx("polyline",{...u,points:c==="chevron-up"?`${s-n},${a+n*.5} ${s},${a-n*.5} ${s+n},${a+n*.5}`:`${s-n},${a-n*.5} ${s},${a+n*.5} ${s+n},${a-n*.5}`,fill:"none",stroke:l,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"});return i.jsxs(i.Fragment,{children:[p,e.labels&&t.label&&i.jsx("text",{x:s+n+3,y:a+3,fontSize:xt,fill:gt(t),fillOpacity:V(t),children:t.label})]})}function vn({layer:t,frame:e,row:r,edges:s}){const a=t.caption?2:1;if(t.anchor==="left-edge"||t.anchor==="right-edge"){const g=t.anchor==="left-edge"?e.plotX0+ft+r*rt:e.plotX1-ft-r*rt,k=e.plotY1-34;return i.jsx("text",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",x:g,y:k,transform:`rotate(-90 ${g} ${k})`,fontSize:xt,letterSpacing:"0.14em",fill:gt(t),fillOpacity:V(t),children:t.text})}const n=t.anchor.startsWith("top"),l=t.anchor.endsWith("right"),c=g=>ft+(g?Zo:0),u=l?e.plotX1-c(s.right):e.plotX0+c(s.left),p=r*(a*rt+2),f=n?e.plotY0+ft+te+p:e.plotY1-ft-p,x=f-rt;return i.jsxs("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",textAnchor:l?"end":"start",children:[t.caption&&i.jsx("text",{x:u,y:n?f:x,fontSize:xt,letterSpacing:"0.05em",fill:"var(--color-text-faint)",children:t.caption}),i.jsx("text",{x:u,y:t.caption&&n?f+rt:f,fontSize:te,fontWeight:700,fill:gt(t),fillOpacity:V(t),children:t.text})]})}const oe={relief:-1,field:0,region:1,series:2,rule:3,annotation:4,marker:5,caption:6},yn={relief:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function Ot({layers:t,frame:e,pass:r}){const s=t.map((c,u)=>({layer:c,index:u})).filter(({layer:c})=>yn[c.kind]===r).sort((c,u)=>oe[c.layer.kind]-oe[u.layer.kind]||(c.layer.z??0)-(u.layer.z??0)||c.index-u.index),a=new Map,n=[],l={left:t.some(c=>c.kind==="caption"&&c.anchor==="left-edge"||c.kind==="region"&&c.side==="left"&&!!c.label),right:t.some(c=>c.kind==="caption"&&c.anchor==="right-edge"||c.kind==="region"&&c.side==="right"&&!!c.label)};return i.jsx(i.Fragment,{children:s.map(({layer:c,index:u})=>{const p=`${c.id}-${u}`;switch(c.kind){case"relief":return i.jsx(hn,{layer:c,frame:e},p);case"field":return i.jsx(sn,{layer:c,frame:e},p);case"region":return i.jsx(fn,{layer:c,frame:e},p);case"series":return i.jsx(xn,{layer:c,frame:e},p);case"rule":return i.jsx(gn,{layer:c,frame:e},p);case"annotation":return i.jsx(mn,{layer:c,frame:e,placed:n},p);case"marker":return i.jsx(bn,{layer:c,frame:e},p);case"caption":{const f=a.get(c.anchor)??0;return a.set(c.anchor,f+1),i.jsx(vn,{layer:c,frame:e,row:f,edges:l},p)}default:return null}})})}function kn(t){return t.map(e=>e.description).filter(e=>typeof e=="string"&&e.length>0)}const ne=11,wt=3,Mt=4,re=(t,e)=>t.x0<e.x1&&e.x0<t.x1&&t.y0<e.y1&&e.y0<t.y1;function $n(t,e,r,s,a){let n=0,l=1;const c=r-t,u=s-e,p=[[-c,t-a.x0],[c,a.x1-t],[-u,e-a.y0],[u,a.y1-e]];for(const[f,x]of p){if(f===0&&x<0)return!1;if(f!==0){const g=x/f;f<0?n=Math.max(n,g):l=Math.min(l,g)}}return n<=l}function wn(t,e){for(let r=1;r<t.cx.length;r++){const s=[t.cx[r-1],t.cy[r-1],t.cx[r],t.cy[r]];if(s.every(Number.isFinite)&&$n(s[0],s[1],s[2],s[3],e))return!0}return!1}function Mn({labels:t,plot:e,obstacles:r,traces:s}){const a=[],n=new Map;for(const l of t){const c={y0:l.lineY-wt-ne,y1:l.lineY-wt},u={y0:l.lineY+wt,y1:l.lineY+wt+ne},p={x0:e.x1-Mt-l.width,x1:e.x1-Mt},f={x0:e.x0+Mt,x1:e.x0+Mt+l.width},x=[{...p,...c,anchor:"end"},{...p,...u,anchor:"end"},{...f,...c,anchor:"start"},{...f,...u,anchor:"start"}];let g=null;for(const k of x){if(!(k.x0>=e.x0&&k.x1<=e.x1&&k.y0>=e.y0&&k.y1<=e.y1)||a.some(v=>re(k,v)))continue;const L=2*r.filter(v=>re(k,v)).length+s.filter(v=>wn(v,k)).length;(g===null||L<g.cost)&&(g={spot:k,cost:L})}if(g===null){n.set(l.id,null);continue}a.push(g.spot),n.set(l.id,{x:g.spot.anchor==="end"?g.spot.x1:g.spot.x0,y:g.spot.y1-2,anchor:g.spot.anchor})}return n}const jn=2.5;function Ln(t,e){if(t.length===0)return!1;const r=t[t.length-1]-e;return r===0?!0:t.length===1?!1:Math.sign(t[0]-e)!==Math.sign(r)}function En(t,e){return t==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:e?t==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const In=(t,e)=>xe(t-e[0],e[1]-e[0]),Rr=(t,e)=>xe((t-e[0])*1e3,(e[1]-e[0])*1e3),Pt={top:10,bottom:28,left:50};function Sn(t,e,r){const s=(n,l,c)=>Math.max(n,Math.min(c,l)),a=s(30,Math.round(t*.18),Pt.left);return{top:Pt.top,right:r?a:s(14,Math.round(t*.07),20),bottom:e<150?20:Pt.bottom,left:a}}const An=26;function Cn(t,e,r,s){const a=[],n=An;for(let l=t+n/2;l<e;l+=n)for(let c=r+n/2;c<s;c+=n)a.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return a}const Tn=120,Rn=90,_n=70,Fn=35,On=2,J=14,Pn=6,Nn=12,ae=10,zn=.2,ie=.6,se="5 3",Yn=.15,Bn=.45,Xn="the value is inside the shaded region";function Hn(t){return(t.type??"line")==="band"&&t.data.y2?[...t.data.y,...t.data.y2]:t.data.y}function _r({series:t,xDomain:e,yDomainPrimary:r,yDomainSecondary:s,xTickFormat:a=In,yTickFormat:n=Dn,yScalePrimary:l="linear",yScaleSecondary:c="linear",thresholds:u,legend:p="overlay",hideXAxis:f=!1,spatial:x=!1,layers:g,"aria-label":k,crosshair:X=!1,width:L,height:v}){const T=w.useId(),E=X&&!x&&t.some(o=>o.data.x.length>0),[_,F]=w.useState(null),[G,O]=w.useState(!1),[z,W]=w.useState(""),K=L,Y=v,et=t.filter(o=>o.axis==="primary"&&o.data.x.length>0),jt=t.filter(o=>o.axis==="secondary"&&o.data.x.length>0),Lt=jt.length>0,bt=x?{top:1,right:1,bottom:1,left:1}:Sn(K,Y,Lt),S=bt.left,N=K-bt.right,C=bt.top,R=Y-bt.bottom,U=N-S,st=R-C,Q=U>=Tn&&st>=Rn,vt=w.useMemo(()=>{const o={primary:[],secondary:[]};for(const d of g??[]){const h=tn(d);o[h.axis].push(...h.ys)}return o},[g]),ot=w.useMemo(()=>le(et,r,l,vt.primary),[et,r,l,vt]),nt=w.useMemo(()=>le(jt,s,c,vt.secondary),[jt,s,c,vt]),P=_t(e[0],e[1],S,N),H=l==="log"?Jt(ot[0],ot[1],R,C):_t(ot[0],ot[1],R,C),D=c==="log"?Jt(nt[0],nt[1],R,C):_t(nt[0],nt[1],R,C),me=Math.max(2,Math.min(8,Math.round(U/_n))),Yt=Math.max(2,Math.min(7,Math.round(st/Fn))),Et=(o,d,h,y)=>{const $=Math.min(o,d),j=Math.max(o,d),m=(j-$)*1e-6||1e-6,M=I=>I>=$-m&&I<=j+m,A=I=>y==="log"?Wo($,j,I):Nt($,j,I);for(let I=h;I<=64;I*=2){const B=A(I).filter(M);if(B.length<2)continue;if(B.length<=h)return B;const pt=(B.length-1)/(h-1),$t=Array.from({length:h},(ur,Ae)=>B[Math.round(Ae*pt)]);return Array.from(new Set($t))}return[$,j]},yt=Et(e[0],e[1],me,"linear"),Bt=Et(ot[0],ot[1],Yt,l==="log"?"log":"linear"),Xt=Lt?Et(nt[0],nt[1],Yt,c==="log"?"log":"linear"):[],be=w.useMemo(()=>{const o=[],d=yt.length-1;if(d<0)return o;const h=m=>m.length*6.5+6,y=6,$=m=>{const M=yt[m],A=a(M,e),I=P(M),B=h(A),pt=m===0?"start":m===d?"end":"middle",$t=pt==="start"?I:pt==="end"?I-B:I-B/2;return{x:I,text:A,anchor:pt,leftEdge:$t,rightEdge:$t+B}},j=$(0);if(o.push({x:j.x,text:j.text,anchor:j.anchor}),d>=1){const m=$(d);if(m.leftEdge>=j.rightEdge+y){let M=j.rightEdge;for(let A=1;A<d;A++){const I=$(A);I.leftEdge>=M+y&&I.rightEdge<=m.leftEdge-y&&(o.push({x:I.x,text:I.text,anchor:I.anchor}),M=I.rightEdge)}o.push({x:m.x,text:m.text,anchor:m.anchor})}}return o},[yt,e,P,a]),Ht=(o,d)=>{const h=new Set,y=o.length;if(y===0||(h.add(0),y===1))return h;const $=16,j=d(o[0]),m=d(o[y-1]);if(Math.abs(m-j)>=$){let M=j;for(let A=1;A<y-1;A++){const I=d(o[A]);Math.abs(I-M)>=$&&Math.abs(m-I)>=$&&(h.add(A),M=I)}h.add(y-1)}return h},ve=Ht(Bt,H),ye=Ht(Xt,D),Z=w.useMemo(()=>t.filter(o=>o.data.x.length>0).map(o=>{const d=o.axis==="primary"?H:D,h=o.type??"line";if(h==="band")return o.data.y2?{id:o.id,kind:"band",color:o.color,opacity:o.fillOpacity??zn,d:ge(o.data.x,o.data.y,o.data.y2,P,d)}:{id:o.id,kind:"noop"};if(h==="scatter"){const m=o.data.x.map((M,A)=>({cx:P(M),cy:d(o.data.y[A])}));return{id:o.id,kind:"scatter",color:o.color,points:m}}const y=h==="step"?Xo:Qt,$=(o.data.bridges??[]).filter(m=>Bo(o.data.x,o.data.y,m,P,d)),j=[...new Set([...o.data.breaks??[],...$.map(m=>m.to)])].sort((m,M)=>m-M);return{id:o.id,kind:"stroked",color:o.color,dashed:o.dashed??!1,uncertainty:Do(o.data.x,o.data.reckoned??[],P,d),segments:Ho(o.data.x,o.data.y,P,d,y,j,o.data.spans,o.data.reckoned),modelled:$.map(m=>({basis:m.basis,d:Qt([o.data.x[m.to-1],...m.t,o.data.x[m.to]],[o.data.y[m.to-1],...m.v,o.data.y[m.to]],P,d)})),tail:o.data.x.length>0&&(o.data.reckoned??[]).some(m=>m.to>=o.data.x.length-1)?{cx:P(o.data.x[o.data.x.length-1]),cy:d(o.data.y[o.data.y.length-1])}:null,observed:[...new Set($.flatMap(m=>[m.to-1,m.to]))].map(m=>({cx:P(o.data.x[m]),cy:d(o.data.y[m])}))}}),[t,P,H,D]),lt=w.useMemo(()=>u?u.map(o=>{const d=o.axis??"primary",h=t.filter($=>$.axis===d&&$.type!=="band"&&!$.dashed),y=o.kind==="limit"?h.some($=>{const j=$.data.y.filter(m=>Number.isFinite(m));return j.length>0&&fe(j[j.length-1],o.value,o.bad)}):o.kind==="target"&&h.some($=>Ln($.data.y,o.value));return{id:o.id,label:o.label,value:o.value,kind:o.kind,passed:y,currency:Re(o.reading,{drawsReckoning:!0}),tone:En(o.kind,y),dashed:o.kind!=="marker",y:d==="primary"?H(o.value):D(o.value)}}):[],[u,t,H,D]),kt=w.useMemo(()=>{const o=(d,h,y)=>Math.max(d,Math.min(y,h));return(u??[]).flatMap(d=>{if(d.kind!=="limit"||!Number.isFinite(d.value))return[];const h=d.axis??"primary",y=h==="primary"?H:D,$=y(d.value),j=d.bad==="above"?-1:1,m=d.label||`the limit at ${n(d.value)}`;return t.filter(M=>M.axis===h&&M.data.x.length>0&&(M.type??"line")!=="band"&&!M.dashed).flatMap(M=>zo({y:M.data.y,cx:M.data.x.map(P),cy:M.data.y.map(y),limit:d.value,limitY:$,bad:d.bad,breaks:M.data.breaks,step:M.type==="step"||M.type==="scatter",minGapPx:J}).slice(Q?0:-1).map(A=>{const I=n(M.data.y[A.index]),B=a(M.data.x[A.index],e);return{key:`${d.id}-${M.id}-${A.index}`,color:M.color,x:o(S+J/2+1,A.x-ae*(A.entered?1:-1),N-J/2-1),y:o(C+J/2+1,A.y+j*ae,R-J/2-1),text:A.entered?A.spells>1?`${M.label} went past ${m} ${A.spells} times from ${B}, first reading ${I}`:`${M.label} went past ${m} at ${B}, reading ${I}`:`${M.label} was already past ${m} when this window began at ${B}, reading ${I}`}}))})},[u,t,P,H,D,a,n,e,S,N,C,R,Q]),ct=w.useMemo(()=>{if(!Q)return new Map;const o=J/2;return Mn({labels:lt.filter(d=>d.label).map(d=>({id:d.id,width:(d.label?.length??0)*Pn+(d.currency.held?Nn:0),lineY:d.y})),plot:{x0:S,y0:C,x1:N,y1:R},obstacles:[...kt.map(d=>({x0:d.x-o,y0:d.y-o,x1:d.x+o,y1:d.y+o})),...p==="none"?[]:t.map((d,h)=>({x0:S+3,y0:C+6+h*16,x1:S+3+Math.min(d.label.length*6+8,U-6),y1:C+6+h*16+13}))],traces:t.filter(d=>(d.type??"line")!=="band").map(d=>({cx:d.data.x.map(P),cy:d.data.y.map(d.axis==="primary"?H:D)}))})},[Q,lt,kt,p,t,P,H,D,S,N,C,R,U]),ke=t.flatMap(o=>{const d=Z.find(m=>m.id===o.id),h=d?.kind==="stroked"?d.modelled.map(m=>m.basis):[],y=o.data.reckoned??[];if(y.length===0&&h.length===0)return[];const j=[...new Set([...y.map(m=>m.basis),...h])].map(m=>`${o.label}: part of this trace is reckoned, ${_e(m)}, not measured`);return y.some(m=>m.bandLo&&m.bandHi)&&j.push(`${o.label}: ${Xn}`),j}),$e=lt.flatMap(o=>{const d=o.label??o.id,h=[];return o.passed&&o.kind==="limit"&&h.push(`${d}: limit passed`),o.passed&&o.kind==="target"&&h.push(`${d}: target reached`),o.currency.held&&h.push(Fe(d,o.currency.caption)),o.label&&!ct.get(o.id)&&h.length===0&&h.push(o.label),h}),Dt=[k??"Telemetry line chart",...kn(g??[]),...ke,...$e].join("; "),It=w.useMemo(()=>t.filter(o=>o.data.x.length>0),[t]),Wt=w.useMemo(()=>E?Po(It):[],[E,It]),St=Math.min(e[0],e[1]),At=Math.max(e[0],e[1]);function Kt(o){const d=It.map(h=>{const y=Oo(h,o),$=h.format??n,j=h.axis==="primary"?H:D,m=(h.type??"line")==="band";return y===null?{id:h.id,label:h.label,color:h.color,value:null}:{id:h.id,label:h.label,color:h.color,value:m&&y.y2!==void 0?`${$(y.y)} to ${$(y.y2)}`:$(y.y),currency:y.currency,modelled:y.currency==="modelled",y:m?void 0:j(y.y)}});if(Q)for(const h of lt)h.kind!=="marker"&&d.push({id:`threshold-${h.id}`,label:h.kind,color:h.tone.label,value:h.label??n(h.value),detail:!0,currency:h.currency.held?h.currency.mark==="modelled"?"modelled":"held":void 0,modelled:h.currency.held&&h.currency.mark==="modelled"});return{heading:a(o,e),rows:d}}function Gt(o){const{heading:d,rows:h}=Kt(o);return[d,...h.map(y=>`${y.label} ${y.value??"no sample"}${y.currency?`, ${y.currency}`:""}`)].join("; ")}const dt=E&&_!==null&&_.at>=St&&_.at<=At?_.at:null,ut=dt===null?null:Kt(dt),we=ut!==null&&Oe({x0:S,y0:C,x1:N,y1:R},ut.rows);function Me(o){const d=o.currentTarget.getBoundingClientRect(),h=o.clientX-d.left;return h<S||h>N?null:e[0]+(h-S)/(N-S)*(e[1]-e[0])}function je(o){const d=Me(o);if(d===null){F(h=>h?.source==="pointer"?null:h);return}F({at:d,source:"pointer"})}function Le(o){const d=Wt.filter(j=>j>=St&&j<=At),h={ArrowLeft:o.shiftKey?-10:-1,ArrowRight:o.shiftKey?10:1,Home:-d.length,End:d.length};if(o.key==="Escape"){if(_===null)return;o.preventDefault(),F(null),W("");return}const y=h[o.key];if(y===void 0)return;o.preventDefault();const $=qt(d,dt,y);$!==null&&(F({at:$,source:"keys"}),W(Gt($)))}function Ee(o){try{O(o.currentTarget.matches(":focus-visible"))}catch{O(!0)}if(_!==null)return;const d=qt(Wt.filter(h=>h>=St&&h<=At),null,0);d!==null&&(F({at:d,source:"keys"}),W(Gt(d)))}function Ie(){O(!1),F(o=>o?.source==="keys"?null:o),W("")}const Se=E?{tabIndex:0,onPointerMove:je,onPointerLeave:()=>F(o=>o?.source==="pointer"?null:o),onKeyDown:Le,onFocus:Ee,onBlur:Ie}:{},Ct={scaleX:P,scaleYPrimary:H,scaleYSecondary:D,plotX0:S,plotX1:N,plotY0:C,plotY1:R,uid:T,labels:Q},Tt=`plot-layer-clip-${T}`;if(U<=0||st<=0)return i.jsx("svg",{width:Math.max(0,K),height:Math.max(0,Y),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:i.jsx("title",{children:"Chart too small to render"})});const Vt=i.jsxs("svg",{width:K,height:Y,role:kt.length>0||E?"group":"img","aria-label":Dt,"aria-describedby":E?`${T}-crosshair-hint`:void 0,...Se,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...E?{touchAction:"pan-y",outline:G?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[i.jsx("title",{children:Dt}),g&&g.length>0&&i.jsx("defs",{children:i.jsx("clipPath",{id:Tt,children:i.jsx("rect",{x:S,y:C,width:U,height:st})})}),i.jsx("rect",{x:S,y:C,width:U,height:st,fill:"var(--color-surface-panel)"}),g&&g.length>0&&i.jsx("g",{clipPath:`url(#${Tt})`,children:i.jsx(Ot,{layers:g,frame:Ct,pass:"background"})}),!x&&Bt.map((o,d)=>{const h=H(o);return i.jsxs(Rt.Fragment,{children:[i.jsx("line",{x1:S,y1:h,x2:N,y2:h,stroke:"var(--color-border-subtle)",strokeWidth:1}),ve.has(d)&&i.jsx("text",{x:S-4,y:h,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:n(o)})]},`py-${d}`)}),!x&&Xt.map((o,d)=>ye.has(d)?i.jsx("text",{x:N+4,y:D(o),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:n(o)},`sy-${d}`):null),!f&&!x&&yt.map((o,d)=>i.jsx("line",{x1:P(o),y1:C,x2:P(o),y2:R,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${d}`)),!f&&!x&&be.map((o,d)=>i.jsx("text",{x:o.x,y:R+14,textAnchor:o.anchor,fill:"var(--color-text-faint)",fontSize:11,children:o.text},`xl-${d}`)),x&&Cn(S,N,C,R).map(o=>i.jsx("circle",{cx:o.x,cy:o.y,r:1,fill:"var(--color-text-faint)",opacity:.35},o.key)),!x&&i.jsxs(i.Fragment,{children:[i.jsx("line",{x1:S,y1:C,x2:S,y2:R,stroke:"var(--color-border-strong)",strokeWidth:1}),i.jsx("line",{x1:S,y1:R,x2:N,y2:R,stroke:"var(--color-border-strong)",strokeWidth:1}),Lt&&i.jsx("line",{x1:N,y1:C,x2:N,y2:R,stroke:"var(--color-border-strong)",strokeWidth:1})]}),Z.filter(o=>o.kind==="band").map(o=>i.jsx("path",{d:o.d,fill:o.color,fillOpacity:o.opacity,stroke:"none"},o.id)),Z.filter(o=>o.kind==="stroked").flatMap(o=>o.uncertainty.map((d,h)=>i.jsx("path",{d:d.d,"data-band-kind":d.kind,fill:o.color,fillOpacity:Yn,stroke:d.kind==="bound"?o.color:"none",strokeOpacity:d.kind==="bound"?Bn:void 0,strokeWidth:d.kind==="bound"?1:void 0},`${o.id}-band-${h}`))),Z.filter(o=>o.kind==="stroked").flatMap(o=>o.segments.map((d,h)=>i.jsx("path",{d:d.d,"data-stream-status":d.status,"data-reckoning-basis":d.basis,stroke:o.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:d.basis!==void 0?ie:void 0,strokeDasharray:d.basis!==void 0?se:o.dashed?"4 3":void 0},`${o.id}-${h}`))),Z.filter(o=>o.kind==="stroked").flatMap(o=>o.modelled.map((d,h)=>i.jsx("path",{d:d.d,"data-reckoning-basis":d.basis,stroke:o.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:ie,strokeDasharray:se},`${o.id}-modelled-${h}`))),Z.map(o=>o.kind==="stroked"&&o.tail!==null?i.jsx(Pe,{kind:"modelled",x:o.tail.cx,y:o.tail.cy},`${o.id}-tail`):null),Z.filter(o=>o.kind==="stroked").flatMap(o=>o.observed.map((d,h)=>i.jsx("circle",{cx:d.cx,cy:d.cy,r:jn,fill:o.color,"data-observed-sample":""},`${o.id}-observed-${h}`))),Z.filter(o=>o.kind==="scatter").flatMap(o=>o.points.map((d,h)=>i.jsx("circle",{cx:d.cx,cy:d.cy,r:On,fill:o.color},`${o.id}-${h}`))),g&&g.length>0&&i.jsx("g",{clipPath:`url(#${Tt})`,children:i.jsx(Ot,{layers:g,frame:Ct,pass:"foreground"})}),lt.map(o=>i.jsxs(Rt.Fragment,{children:[i.jsx("line",{x1:S,y1:o.y,x2:N,y2:o.y,stroke:o.tone.line,strokeWidth:1,strokeDasharray:o.dashed?"4 3":void 0,"data-threshold-kind":o.kind,"data-threshold-passed":o.passed||void 0}),o.label&&ct.get(o.id)&&i.jsxs("text",{x:ct.get(o.id)?.x,y:ct.get(o.id)?.y,textAnchor:ct.get(o.id)?.anchor,fill:o.tone.label,fontSize:10,children:[o.label,o.currency.held&&i.jsx(Ne,{size:10,kind:o.currency.mark??"held"})]})]},o.id)),kt.map(o=>i.jsx(No,{x:o.x,y:o.y,size:J,color:o.color,text:o.text},o.key)),p!=="none"&&!we&&t.map((o,d)=>{const h=C+6+d*16;if(h+13>R)return null;const y=Math.min(o.label.length*6+8,U-6),$=Math.max(1,Math.floor((y-8)/6)),j=o.label.length>$?`${o.label.slice(0,Math.max(1,$-1))}...`:o.label;return i.jsxs(Rt.Fragment,{children:[i.jsx("rect",{x:S+3,y:h,width:y,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),i.jsx("text",{x:S+6,y:h+10,fill:o.color,fontSize:10,children:j})]},o.id)}),g&&g.length>0&&Q&&i.jsx(Ot,{layers:g,frame:Ct,pass:"caption"}),ut!==null&&dt!==null&&i.jsx(ze,{x:P(dt),plot:{x0:S,y0:C,x1:N,y1:R},heading:ut.heading,rows:ut.rows})]});return E?i.jsxs(i.Fragment,{children:[Vt,i.jsx(Ut,{id:`${T}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),i.jsx(Ut,{role:"status","aria-live":"polite",children:z})]}):Vt}function le(t,e,r,s=[]){if(e)return e;if(t.length===0&&s.length===0)return r==="log"?[1,10]:[0,1];let a=[...t.flatMap(Hn),...s];return r==="log"&&(a=a.filter(n=>n>0)),a.length===0?r==="log"?[1,10]:[0,1]:[Math.min(...a),Math.max(...a)]}function Dn(t){if(t===0)return"0";if(Math.abs(t)>=1e6)return`${(t/1e6).toFixed(1)}M`;if(Math.abs(t)>=1e3)return`${(t/1e3).toFixed(1)}k`;if(Number.isInteger(t))return String(t);if(Math.abs(t)<.01){const e=Math.floor(Math.log10(Math.abs(t))),r=t/10**e;return Math.abs(r-1)<1e-9?`1e${e}`:`${r.toFixed(1)}e${e}`}return t.toFixed(2)}const Fr=b.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function Or({state:t,elapsedMs:e}){if(t==="connected")return null;const r=t==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return i.jsxs(ue,{accent:Kn[t],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[i.jsx(Gn,{children:r}),i.jsxs(Vn,{children:["T+",Wn(e)]})]})}function Wn(t){const e=Math.max(0,Math.floor(t/1e3)),r=Math.floor(e/3600),s=Math.floor(e%3600/60),a=e%60,n=l=>String(l).padStart(2,"0");return r>0?`${r}:${n(s)}:${n(a)}`:`${n(s)}:${n(a)}`}const Kn={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},Gn=b.span`
  font-weight: 600;
`,Vn=b.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function Pr({entries:t}){return t.length===0?null:i.jsxs(Zn,{role:"status","aria-live":"polite",children:[i.jsx(qn,{}),i.jsx(Qn,{children:"SOURCE OFFLINE"}),i.jsx(Jn,{children:t.map(e=>i.jsxs(tr,{children:[i.jsx(er,{children:e.name}),i.jsx(or,{children:e.status}),i.jsx(nr,{children:Un(e.elapsedMs)}),e.onRetry&&i.jsx(ce,{size:"sm",onClick:e.onRetry,"aria-label":`Retry ${e.name} now`,children:"Retry now"})]},e.id))})]})}function Un(t){return He(De("irl:s",t/1e3))}const Zn=b.div`
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
`,qn=b.span`
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
`,Qn=b.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,Jn=b.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,tr=b.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,er=b.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,or=b.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,nr=b.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,Nr=b.div`
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
`,zr=b.div`
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
`,Yr=b.div`
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Br=b.input`
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
`,Xr=b.button`
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
`,Hr=b.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,Dr=b.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,Wr=b.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,Kr=b.button`
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
`,Gr=b.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,rr={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},ar={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function ir(t){return rr[t]??ar}function Vr({label:t}){const e=ir(t);return i.jsx(sr,{$bg:e.bg,$fg:e.fg,$border:e.border,children:t})}const sr=b.span`
  display: inline-block;
  padding: var(--inset-chip);
  border-radius: var(--radius-regular);
  font-size: var(--font-size-caption);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${({$bg:t,$fg:e,$border:r})=>mt`
    background: ${t};
    color: ${e};
    border: 1px solid ${r};
  `}
`;We({id:"default-dark",name:"Default Dark",theme:Ye});function Ur({kind:t,local:e,remote:r,remoteLabel:s="Peer"}){const a=t==="major"?"alert":"status",n=t==="major"?"RELOAD REQUIRED":t==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",l=t==="unknown"?`${s} didn't report a version`:`${s} v${r??"?"} ↔ this v${e}`;return i.jsxs(ue,{accent:lr[t],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:a,children:[i.jsx(cr,{children:n}),i.jsx(dr,{children:l})]})}const lr={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},cr=b.span`
  font-weight: 600;
`,dr=b.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{Nr as A,ue as B,Yo as C,Er as D,zr as E,Ar as F,Yr as G,Br as H,Xr as I,Hr as J,Wr as K,_r as L,Kr as M,Gr as N,Fr as P,Dr as R,Or as S,Vr as T,Ur as V,jr as a,Lr as b,Ir as c,Sr as d,Cr as e,Tr as f,Ot as g,Pr as h,ge as i,Qt as j,Ho as k,Xo as l,Do as m,Bo as n,an as o,xe as p,ir as q,Jt as r,_t as s,Wo as t,Nt as u,kn as v,tn as w,In as x,wo as y,Rr as z};
