import{j as l}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import y,{css as Lt}from"./ext-styled-components-Br73TgY3.js";import{d as _e,Z as cn,C as ln,a2 as Ce,an as dn,ax as un,a4 as pn,a6 as hn,az as fn,ay as xn,aj as gn,ae as mn,ah as bn,V as ce,W as vn}from"./vesselMark-B52yudi1.js";import{r as E,R as Dt}from"./ext-react-RRA14VTW.js";import{T as yn,d as kn,w as Mn}from"./streamStatusWord-CYmxuWLC.js";import{aO as wn}from"./view-clock-formula-ZKacKPC2.js";import"./ksp-enum-names-CpMVNMAI.js";import"./screen-mp_f6rUi.js";import{e as $n}from"./registry-CsaCyQ2s.js";import"./lagrange-B8ztZ552.js";import"./use-transmissions-BA6nr-oi.js";import"./websocket-transport-Bi_vSYVe.js";import"./processorPerfBudget-CXTh85cn.js";import"./index-CnzDwjkh.js";function Te({accent:t,anchor:e="inline",top:n=12,zIndex:a=999,glow:s,pulse:o=!1,role:i="status",ariaLive:c,onClick:u,interactive:d=!1,children:p}){const f=c??(i==="alert"?"assertive":"polite");return e==="top"?l.jsxs(jn,{$accent:t,$top:n,$zIndex:a,$glow:s,role:i,"aria-live":f,children:[l.jsx(le,{$accent:t,$pulse:o}),p]}):l.jsxs(En,{as:u?"button":"div",type:u?"button":void 0,$accent:t,$glow:s,$clickable:!!u,$interactive:d,role:i,"aria-live":f,onClick:u,children:[l.jsx(le,{$accent:t,$pulse:o}),p]})}const jn=y.div`
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
  ${t=>t.$glow?Lt`box-shadow: ${t.$glow};`:""}
`,En=y.div`
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
  ${t=>t.$glow?Lt`box-shadow: ${t.$glow};`:""}

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
`,le=y.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${t=>t.$accent};
  flex-shrink: 0;

  ${t=>t.$pulse&&Lt`
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
`;function Xa({children:t}){return l.jsx(An,{children:t})}const An=y.div`
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
`,In=2e3,Sn={copied:t=>`Copied ${t}`,failed:()=>"Could not copy, select the text instead"};function Ha({command:t,label:e}){const[n,a]=E.useState("idle"),s=E.useRef(void 0);E.useEffect(()=>()=>clearTimeout(s.current),[]);async function o(){let i="copied";try{await navigator.clipboard.writeText(t)}catch{i="failed"}a(i),clearTimeout(s.current),s.current=setTimeout(()=>a("idle"),In)}return l.jsxs(Ln,{children:[l.jsx(_n,{role:"group","aria-label":e,tabIndex:0,children:l.jsx(Cn,{children:t})}),l.jsx(_e,{variant:"ghost",type:"button",onClick:()=>void o(),"aria-label":`Copy ${e}`,children:n==="copied"?"Copied":"Copy"}),l.jsx(cn,{visuallyHidden:!0,children:Sn[n]?.(e)})]})}const Ln=y.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,_n=y.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Cn=y.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function Tn(t,e){if(!e)return!0;const n=e.toLowerCase();return(t.label??t.key).toLowerCase().includes(n)||t.key.toLowerCase().includes(n)}function Ba({keys:t,value:e,onChange:n,placeholder:a="Search...",emptyHint:s="No matches"}){const[o,i]=E.useState(""),c=E.useMemo(()=>t.filter(p=>Tn(p,o)),[t,o]),u=E.useMemo(()=>{const p=new Map;for(const f of c){const g=f.group??"Other";let m=p.get(g);m||(m=[],p.set(g,m)),m.push(f)}return[...p.entries()].sort(([f],[g])=>f.localeCompare(g))},[c]),d=p=>{const f=new Set(e);f.has(p)?f.delete(p):f.add(p),n(f)};return l.jsxs(Rn,{children:[l.jsx(Pn,{type:"text",value:o,placeholder:a,onChange:p=>i(p.target.value)}),l.jsx(On,{children:u.length===0?l.jsx(Gn,{children:s}):u.map(([p,f])=>l.jsxs(Nn,{children:[l.jsx(Fn,{children:p}),f.map(g=>{const m=e.has(g.key),$=`dkmp-${g.key}`;return l.jsxs(zn,{$checked:m,children:[l.jsx(Yn,{id:$,type:"checkbox",checked:m,onChange:()=>d(g.key)}),l.jsxs(Xn,{htmlFor:$,children:[l.jsx(Hn,{$checked:m,children:m&&l.jsx(ln,{size:11,strokeWidth:3})}),l.jsx(Bn,{children:g.label??g.key}),g.unit&&l.jsx(Dn,{children:g.unit})]})]},g.key)})]},p))})]})}const Rn=y.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,Pn=y.input`
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
`,On=y.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,Nn=y.div``,Fn=y.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,zn=y.div`
  background: ${({$checked:t})=>t?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,Yn=y.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,Xn=y.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,Hn=y.span`
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
`,Bn=y.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,Dn=y.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,Gn=y.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function Da({show:t,message:e,hint:n,children:a}){return t?l.jsxs(Kn,{children:[l.jsx(Vn,{...Wn,children:a}),l.jsxs(Un,{role:"status","aria-live":"polite",children:[l.jsx(qn,{children:e}),n&&l.jsx(Zn,{children:n})]})]}):l.jsx(l.Fragment,{children:a})}const Wn={inert:""},Kn=y.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,Vn=y.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,Un=y.div`
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
`,qn=y.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,Zn=y.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,Re=E.createContext(null),Qn=400,Pe="(pointer: coarse)";function Jn(t){if(typeof window.matchMedia!="function")return()=>{};const e=window.matchMedia(Pe);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}function to(){return typeof window.matchMedia=="function"&&window.matchMedia(Pe).matches}function Ga({children:t}){const[e,n]=E.useState(!1),a=E.useSyncExternalStore(Jn,to,()=>!1),s=e||a,o=E.useRef(null),i=E.useCallback(()=>{o.current!==null&&(window.clearTimeout(o.current),o.current=null)},[]),c=E.useCallback(()=>{i(),n(!0)},[i]),u=E.useCallback(()=>{i(),o.current=window.setTimeout(()=>{o.current=null,n(!1)},Qn)},[i]);E.useEffect(()=>()=>i(),[i]);const d=E.useMemo(()=>({active:s,onMouseEnter:c,onMouseLeave:u,onFocus:c,onBlur:u}),[s,c,u]);return l.jsx(Re.Provider,{value:d,children:t})}function eo(){return E.useContext(Re)}function Wa({bottom:t,children:e,...n}){const a=eo(),s=a?.active??!0,o=n["aria-label"]??n.title;return l.jsxs(no,{$visible:s,$bottom:t,onMouseEnter:a?.onMouseEnter,onMouseLeave:a?.onMouseLeave,onFocus:a?.onFocus,onBlur:a?.onBlur,children:[o?l.jsx(oo,{$visible:s,"aria-hidden":"true",children:o}):null,l.jsx(ro,{$visible:s,tabIndex:s?0:-1,...n,children:e})]})}const no=y.div`
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
`,oo=y.span`
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
`,ro=y.button`
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
`;function Ka({bottom:t,label:e,onAccept:n,onDismiss:a,autoDismissMs:s=15e3,acceptLabel:o}){return E.useEffect(()=>{if(s<=0)return;const i=window.setTimeout(a,s);return()=>window.clearTimeout(i)},[s,a]),l.jsxs(ao,{$bottom:t,role:"status","aria-live":"polite",children:[l.jsx(so,{type:"button",onClick:n,"aria-label":o??e,children:e}),l.jsx(Ce,{text:"Dismiss",children:l.jsx(io,{type:"button",onClick:a,"aria-label":"Dismiss",children:"×"})})]})}const ao=y.div`
  ${({$bottom:t})=>t!==void 0?Lt`
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
`,so=y.button`
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
`,io=y.button`
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
`,Va=E.forwardRef(function({id:e,label:n="Choose file",accept:a,multiple:s,fileName:o,emptyText:i="No file chosen",disabled:c,onChange:u},d){const p=E.useId(),f=e??p,g=E.useRef(null);return l.jsxs(co,{children:[l.jsx(uo,{id:f,ref:m=>{if(g.current=m,typeof d=="function"){d(m);return}d&&(d.current=m)},type:"file",accept:a,multiple:s,disabled:c,onChange:u}),l.jsx(lo,{htmlFor:f,$disabled:!!c,children:n}),l.jsx(po,{"aria-live":"polite",$hasFile:!!o,children:o??i})]})}),co=y.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,lo=y.label`
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
`,uo=y.input`
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
`,po=y.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:t})=>t?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`;function ho(t,e){return t?.includes(e)??!1}function fo(t,e){const{reckoned:n,spans:a}=t.data;return n?.some(s=>e>=s.from&&e<=s.to)?"modelled":a?.some(s=>e>=s.from&&e<=s.to&&s.status==="recorded")?"recorded":"measured"}function xo(t,e){const n=t.data.x,a=t.data.y,s=Math.min(n.length,a.length);if(s===0||e<n[0]||e>n[s-1])return null;let o=0,i=s-1;for(;o<i;){const g=o+i>>1;n[g]<e?o=g+1:i=g}const c=o,u=Math.max(0,c-1);if(n[c]!==e&&c>0&&ho(t.data.breaks,c))return null;const d=e-n[u]<=n[c]-e?u:c,p=a[d];if(!Number.isFinite(p))return null;const f=t.data.y2?.[d];return{index:d,x:n[d],y:p,...f!==void 0&&Number.isFinite(f)?{y2:f}:{},currency:fo(t,d)}}function go(t){const e=new Set;for(const n of t)if(!((n.type??"line")==="band"&&!n.data.y2))for(const a of n.data.x)Number.isFinite(a)&&e.add(a);return[...e].sort((n,a)=>n-a)}function de(t,e,n){if(t.length===0)return null;if(e===null)return t[t.length-1];let a=0,s=t.length-1;for(;a<s;){const i=a+s>>1;t[i]<e?a=i+1:s=i}let o=a+n;return t[a]!==e&&n>0&&(o-=1),t[Math.max(0,Math.min(t.length-1,o))]}function mo({x:t,y:e,size:n,color:a,text:s}){const o=n/2,i=`M 0 ${-o} L ${o} ${o*.8} L ${-o} ${o*.8} Z`,c=`M -0.9 ${-o*.42} H 0.9 V ${o*.2} H -0.9 Z`,u=`M -0.9 ${o*.4} H 0.9 V ${o*.64} H -0.9 Z`;return l.jsx(Ce,{text:s,focusable:!0,children:l.jsxs("g",{role:"img","aria-label":s,"data-limit-crossing":"",transform:`translate(${t} ${e})`,children:[l.jsx("title",{}),l.jsx("circle",{r:12,fill:"transparent"}),l.jsx("path",{d:`${i} ${c} ${u}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),l.jsx("path",{d:i,fill:"none",stroke:a,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function Oe(t,e,n){return n==="above"?t>=e:t<=e}function bo({y:t,cx:e,cy:n,limit:a,limitY:s,bad:o,breaks:i=[],step:c=!1,minGapPx:u}){const d=(w,F,b)=>{if(!F)return{index:w,x:e[w],y:n[w],entered:!1};if(b===null)return{index:w,x:e[w],y:s,entered:!0};const L=n[w]-n[b],H=L===0?1:(s-n[b])/L;return{index:w,x:e[b]+(e[w]-e[b])*H,y:s,entered:!0}},p=new Set(i),f=[];let g=null,m=!1,$=!1,M=Number.NEGATIVE_INFINITY;for(let w=0;w<t.length;w++){if(!Number.isFinite(t[w])){g=null;continue}const F=Oe(t[w],a,o);if(F&&!$){const b=d(w,m,c||p.has(w)?null:g),L=f[f.length-1];L!==void 0&&b.x-M<u?L.spells++:f.push({...b,spells:1}),M=b.x}$=F,m=!0,g=w}return f}const vo=1;function yo(t,e,n,a,s){const o=n.to;if(o<1||o>=t.length)return!1;const i=a(t[o-1]),c=a(t[o]),u=s(e[o-1]),d=s(e[o]);return c>i?n.t.some((p,f)=>{const g=a(p),m=u+(d-u)*(g-i)/(c-i);return Math.abs(s(n.v[f])-m)>vo}):!1}function Gt(t,e,n,a){const s=e-t;if(s===0){const o=(n+a)/2;return()=>o}return o=>n+(o-t)/s*(a-n)}function Zt(t,e,n=5){if(t===e)return Array.from({length:n},()=>t);const s=(e-t)/(n-1),o=10**Math.floor(Math.log10(s)),c=([1,2,2.5,5,10].find(g=>g*o>=s)??10)*o,u=Math.ceil(t/c)*c,d=[];for(let g=0;d.length<n;g++){const m=u+g*c;if(m>e+c*.01)break;d.push(m)}if(d.length>=2)return d;const p=Math.floor(t/c)*c,f=Math.ceil(e/c)*c;return f>p?[p,f]:[p,p+c]}function Ne(t,e){const n=Math.floor(t/1e3);if(e>=36e5){const o=Math.floor(n/3600),i=Math.floor(n%3600/60),c=n%60;return`${o}:${String(i).padStart(2,"0")}:${String(c).padStart(2,"0")}`}const a=Math.floor(n/60),s=n%60;return`${a}:${String(s).padStart(2,"0")}`}function ue(t,e,n,a,s=[]){if(t.length===0)return"";const o=[];for(let i=0;i<t.length;i++){const c=n(t[i]).toFixed(2),u=a(e[i]).toFixed(2),d=i===0||s.includes(i);o.push(`${d?"M":"L"}${c},${u}`),d&&Qt(i,t.length,s)&&o.push(`L${c},${u}`)}return o.join(" ")}function Qt(t,e,n){return t+1>=e||n.includes(t+1)}function ko(t,e,n,a,s=[]){if(t.length===0)return"";const o=[];let i=a(e[0]).toFixed(2);const c=n(t[0]).toFixed(2);o.push(`M${c},${i}`),Qt(0,t.length,s)&&o.push(`L${c},${i}`);for(let u=1;u<t.length;u++){const d=n(t[u]).toFixed(2),p=a(e[u]).toFixed(2);if(s.includes(u)){o.push(`M${d},${p}`),Qt(u,t.length,s)&&o.push(`L${d},${p}`),i=p;continue}o.push(`H${d}`),p!==i&&o.push(`V${p}`),i=p}return o.join(" ")}function Mo(t,e,n,a,s,o=[],i=[],c=[]){if(t.length===0)return[];if(i.length===0&&c.length===0)return[{d:s(t,e,n,a,o)}];function u(M,w){const F=new Array(t.length);for(const b of M){const L=Math.min(t.length-1,b.to);for(let H=Math.max(0,b.from);H<=L;H++)F[H]=w(b)}return F}const d=u(i,M=>M.status),p=u(c,M=>M.basis),f=new Set(o),g=[];let m=0;const $=(M,w)=>{const F=M>0&&!f.has(M)?M-1:M,b=W=>W.slice(F,w+1),L=[];for(const W of o)W>F&&W<=w&&L.push(W-F);const H=s(b(t),b(e),n,a,L);H!==""&&g.push({status:d[M],basis:p[M],d:H})};for(let M=1;M<=t.length;M++)(M===t.length||d[M]!==d[m]||p[M]!==p[m])&&($(m,M-1),m=M);return g}function Fe(t,e,n,a,s){if(t.length===0)return"";const o=Math.min(t.length,e.length,n.length);if(o===0)return"";const i=[];for(let c=0;c<o;c++){const u=a(t[c]).toFixed(2),d=s(n[c]).toFixed(2);i.push(`${c===0?"M":"L"}${u},${d}`)}for(let c=o-1;c>=0;c--){const u=a(t[c]).toFixed(2),d=s(e[c]).toFixed(2);i.push(`L${u},${d}`)}return i.push("Z"),i.join(" ")}function wo(t,e,n,a){const s=[];for(const o of e){const{bandLo:i,bandHi:c,bandKind:u}=o;if(!i||!c||u===void 0)continue;const d=[];for(let f=o.from;f<=o.to&&f<t.length;f++)d.push(t[f]);const p=Fe(d,i,c,n,a);p!==""&&s.push({d:p,kind:u})}return s}function pe(t,e,n,a){if(t===e){const d=(n+a)/2;return()=>d}const s=t>0?t:1e-9,o=e>s?e:s*10,i=Math.log10(s),u=Math.log10(o)-i;if(u===0){const d=(n+a)/2;return()=>d}return d=>{const p=d>0?d:s;return n+(Math.log10(p)-i)/u*(a-n)}}function $o(t,e,n=5){if(!(t>0)||!(e>0)||e<=t)return Zt(t,e,n);const a=Math.log10(t),s=Math.log10(e);if(s-a<1)return Zt(t,e,n);const i=Math.ceil(a),c=Math.floor(s),u=Math.max(1,Math.ceil((c-i+1)/n)),d=[];for(let p=i;p<=c;p+=u)d.push(10**p);return d.length>0?d:[t,e]}const Yt=56;function ze(t,e,n,a){const s=Math.max(0,Math.min(e-1,Math.floor(n))),o=Math.max(0,Math.min(e-1,Math.floor(a))),i=Math.min(e-1,s+1),c=Math.min(e-1,o+1),u=Math.max(0,Math.min(1,n-s)),d=Math.max(0,Math.min(1,a-o)),p=t[o*e+s]+(t[o*e+i]-t[o*e+s])*u,f=t[c*e+s]+(t[c*e+i]-t[c*e+s])*u;return p+(f-p)*d}const he=400,jo=16,Eo=8,fe=.06,Ao=3.3,Io=.6,So=60,Lo=40,xe=[6,12],ge=[48,96],Ot=2;function Wt(t,e,n){const a=Math.max(0,Math.min(1,(n-t)/(e-t)));return a*a*(3-2*a)}function me(t,e){const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)}function be(t,e){const n=e/t,a=t<=e?.07:.09,s=Ao**Math.exp(-((t-e)**2)/(2*a**2*e**2));return n**5*Math.exp(-1.25*n**4)*s}function Ye(t,e,n){if(!(t>0)||!(e>0)||!(n>0)||!Number.isFinite(t+e+n))return[];const a=Math.sqrt(n*2*Math.PI/he),s=be(a,a),o=[];for(let i=-Ot;i<=jo*Ot;i++){const c=he/2**(i/Ot),u=c/t,d=Wt(xe[0],xe[1],u)*(1-Wt(ge[0],ge[1],u))*(1-Wt(e,2*e,c));if(d<=.001)continue;const p=2*Math.PI/c,f=Math.sqrt(n*p),g=Math.sqrt(Math.min(1,be(f,a)/s)),m=(f>=a?fe:fe*g)/Math.sqrt(Ot),$=(So+(me(i,1)-.5)*2*Lo)*Math.PI/180;o.push({kx:p*Math.sin($),ky:p*Math.cos($),k:p,amplitude:m/p,omega:f,phase:me(i,2)*2*Math.PI,weight:d})}return o.slice(0,Eo)}function _o(t,e,n,a){let s=0;for(const o of t)s+=o.weight*o.amplitude*Math.cos(o.kx*e+o.ky*n-o.omega*a+o.phase);return s}const zt=Xe(-.25,.3,.92),Co=2.6,To=Xe(zt[0],zt[1],zt[2]+1),Ro=.8,Po=3,Oo=.95,No=.35,Fo=235,zo=.5,Yo=.35;function Xe(t,e,n){const a=Math.hypot(t,e,n);return[t/a,e/a,n/a]}function Xo(t,e,n,a){const{east0:s,north0:o,dx:i,dy:c,seconds:u,colour:d,waves:p,isSea:f}=a,[g,m,$]=zt,[M,w,F]=To,b=p.length,L=new Float64Array(b*e),H=new Float64Array(b*e),W=new Float64Array(b*n),at=new Float64Array(b*n);for(let A=0;A<b;A++){const X=p[A];for(let I=0;I<e;I++){const z=X.kx*(s+(I+.5)*i);L[A*e+I]=Math.cos(z),H[A*e+I]=Math.sin(z)}for(let I=0;I<n;I++){const z=X.ky*(o-(I+.5)*c)-X.omega*u+X.phase;W[A*n+I]=Math.cos(z),at[A*n+I]=Math.sin(z)}}const Q=new Float64Array(b),ft=new Float64Array(b),et=p.map(A=>A.kx*A.weight*A.amplitude),R=p.map(A=>A.ky*A.weight*A.amplitude),B=p.map(A=>Io*A.k*A.weight*A.amplitude);for(let A=0;A<n;A++)for(let X=0;X<e;X++){const I=(A*e+X)*4;if(f&&!f(X,A)){t[I+3]=0;continue}let z=0,T=0,P=1;for(let O=0;O<b;O++){const q=L[O*e+X],dt=H[O*e+X],kt=W[O*n+A],gt=at[O*n+A];Q[O]=q*kt-dt*gt,ft[O]=dt*kt+q*gt}for(let O=0;O<b;O++){const q=b>1?1+Ro*Q[(O+Po)%b]:1;z-=et[O]*Q[O]*q,T-=R[O]*Q[O]*q,P-=B[O]*ft[O]*q}const st=1/Math.sqrt(z*z+T*T+P*P),xt=(z*g+T*m+P*$)*st-$,nt=1+Co*xt;let J=0;const U=(z*M+T*w+P*F)*st;if(U>Oo){let O=U;for(let q=0;q<7;q++)O*=O;J=255*No*O}const V=Math.max(0,nt-1)*Yo,ot=Math.min(1,nt)*zo;t[I]=d.r*ot+(255-d.r*ot)*V+J,t[I+1]=d.g*ot+(255-d.g*ot)*V+J,t[I+2]=d.b*ot+(255-d.b*ot)*V+J,t[I+3]=Fo}}function ve(t){const e=n=>{const a=n/255;return a<=.04045?a/12.92:((a+.055)/1.055)**2.4};return .2126*e(t.r)+.7152*e(t.g)+.0722*e(t.b)}function Ho(t,e){const n=ve(e),a=Math.max(t.r,t.g,t.b,1),s=u=>({r:Math.min(255,t.r*u),g:Math.min(255,t.g*u),b:Math.min(255,t.b*u)});let o=0,i=255/a;for(let u=0;u<32;u++){const d=(o+i)/2;ve(s(d))<n?o=d:i=d}const c=s((o+i)/2);return{r:Math.round(c.r),g:Math.round(c.g),b:Math.round(c.b)}}const Bo=192,Do=30,Go="--color-info-mark",Wo=.42;function Ko(t,e){const n=t.view==="plan",a=e.scaleX,s=e.scaleYPrimary,o=1/(a(1)-a(0)),i=1/(s(1)-s(0)),c=F=>(F-a(0))*o,u=F=>(F-s(0))*i,d=Math.min(a(t.bounds.x0),a(t.bounds.x1)),p=Math.max(a(t.bounds.x0),a(t.bounds.x1)),f=Math.min(s(t.bounds.y0),s(t.bounds.y1)),g=Math.max(s(t.bounds.y0),s(t.bounds.y1)),m=n?d:Math.max(e.plotX0,d),$=n?p:Math.min(e.plotX1,p),M=n?f:Math.max(e.plotY0,f),w=n?g:Math.min(e.plotY1,g);return n&&(p<e.plotX0||d>e.plotX1||g<e.plotY0||f>e.plotY1)||!($-m>=1&&w-M>=1)||!Number.isFinite(o+i)?null:{left:m,top:M,width:$-m,height:w-M,x0:c(m),x1:c($),y0:u(w),y1:u(M)}}function ye(t,e){if(!e)return null;t.fillStyle=e;const n=/^#([0-9a-f]{6})$/i.exec(String(t.fillStyle));if(!n)return null;const a=Number.parseInt(n[1],16);return{r:a>>16&255,g:a>>8&255,b:a&255}}function Vo(t,e,n){const a=ye(e,getComputedStyle(t).getPropertyValue(Go).trim());if(!a)return null;const s=n?ye(e,n):null;return s?Ho(s,a):a}function Uo(t,e,n,a,s,o){const i=Yt,c=(n.x1-n.x0)/i,u=(n.y1-n.y0)/i,d=e.sea,p=a.scaleYPrimary(e.bounds.y0)<a.scaleYPrimary(e.bounds.y1),f=d&&d.size>1&&d.heights.length>=d.size*d.size?(m,$)=>{const M=p?$:i-1-$;return ze(d.heights,d.size,m/(i-1)*(d.size-1),M/(i-1)*(d.size-1))<0}:void 0,g=t.createImageData(i,i);Xo(g.data,i,i,{east0:e.origin.east+n.x0,north0:e.origin.north+n.y1,dx:c,dy:u,seconds:s,colour:o,waves:Ye(Math.max(c,u),n.x1-n.x0,e.gravity),isSea:f}),t.putImageData(g,0,0)}function qo(t,e,n,a,s){const{width:o,height:i}=t.canvas,c=Zo(e,n,o),u=c.length>1?(c[c.length-1]-c[0])/(c.length-1):n.x1-n.x0,d=Ye(u,n.x1-n.x0,e.gravity),p=(e.bearingDeg??90)*Math.PI/180,f=$=>($-n.x0)/(n.x1-n.x0)*o,g=$=>(n.y1-$)/(n.y1-n.y0)*i;t.clearRect(0,0,o,i),t.beginPath(),c.forEach(($,M)=>{const w=_o(d,e.origin.east+$*Math.sin(p),e.origin.north+$*Math.cos(p),a);M===0?t.moveTo(f($),g(w)):t.lineTo(f($),g(w))});const m=`${s.r}, ${s.g}, ${s.b}`;t.strokeStyle=`rgba(${m}, 0.9)`,t.lineWidth=1,t.stroke(),t.lineTo(f(c[c.length-1]),i),t.lineTo(f(c[0]),i),t.closePath(),t.fillStyle=`rgba(${m}, ${Wo})`,t.fill()}function Zo(t,e,n){const a=(t.samples??[]).filter(s=>s>e.x0&&s<e.x1);return t.samples&&t.samples.length>1?[e.x0,...a,e.x1]:Array.from({length:n+1},(s,o)=>e.x0+o/n*(e.x1-e.x0))}function Qo({layer:t,frame:e}){const n=Ko(t,e),a=E.useRef(null),s=E.useRef(null);s.current=n?{layer:t,at:n,frame:e}:null;const o=n?t.view==="plan"?Yt:Math.max(1,Math.min(Bo,Math.round(n.width))):0,i=n?t.view==="plan"?Yt:Math.max(1,Math.round(n.height*o/n.width)):0,c=t.tint;return E.useEffect(()=>{const u=a.current,d=u?.getContext("2d")??null;if(!u||!d||o===0||i===0)return;const p=Vo(u,d,c);if(!p)return;const f=()=>{const b=s.current;if(!b)return;const L=Date.now()/1e3;b.layer.view==="plan"?Uo(d,b.layer,b.at,b.frame,L,p):qo(d,b.layer,b.at,L,p)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let m=!0;const $=typeof IntersectionObserver=="function"?new IntersectionObserver(b=>{m=b.some(L=>L.isIntersecting)}):null;$?.observe(u);let M=Number.NEGATIVE_INFINITY,w=0;const F=b=>{w=requestAnimationFrame(F),!(!m||document.hidden||b-M<1e3/Do)&&(M=b,f())};return w=requestAnimationFrame(F),()=>{cancelAnimationFrame(w),$?.disconnect()}},[o,i,c]),n?l.jsx("g",{"aria-hidden":"true","data-plot-layer":t.id,"data-plot-layer-kind":"water",children:l.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:l.jsx("canvas",{ref:a,width:o,height:i,style:{display:"block",width:"100%",height:"100%",imageRendering:t.view==="plan"?"pixelated":"auto"}})})}):null}const Jo={faint:.45,normal:.85,bright:1},tr=1.5,er=5,nr=.9,Et=7,At=6,ke=10,It=9,bt=12,or=9,rr=13,ar=.1,Kt=5,sr=.5,ir=.5;function lt(t){return kn[t.tone??"neutral"]}function St(t){return yn[t.tone??"neutral"]}function tt(t){return Jo[t.emphasis??"normal"]}function rt(t,e){return e.axis==="secondary"?t.scaleYSecondary:t.scaleYPrimary}function cr(t){const e=t.axis==="secondary"?"secondary":"primary";switch(t.kind){case"series":return{xs:t.points.map(n=>n.x),ys:t.points.map(n=>n.y),axis:e};case"region":return{xs:[...t.boundary,...t.boundaryHigh??[]].map(n=>n.x),ys:[...t.boundary,...t.boundaryHigh??[]].map(n=>n.y),axis:e};case"rule":return t.along==="y"?{xs:[],ys:[t.value],axis:e}:{xs:[t.value],ys:[],axis:e};case"marker":case"annotation":return{xs:[t.at.x],ys:[t.at.y],axis:e};default:return{xs:[],ys:[],axis:e}}}const lr=5.8,vt=11,Me=4;function dr(t,e){const n=e.text.length*lr,{frame:a}=e,s=e.anchorX+e.gap,o=s+n<=a.plotX1-4?"start":"end",i=o==="start"?s:e.anchorX-e.gap,c=o==="start"?i:i-n,u=c+n,d=f=>t.some(g=>c<g.x1&&u>g.x0&&f-vt<g.y1&&f+2>g.y0);let p=e.anchorY+3;for(let f=0;f<Me&&d(p);f++)p+=vt;if(d(p)){p=e.anchorY+3;for(let f=0;f<Me&&d(p);f++)p-=vt}return p=Math.min(Math.max(p,a.plotY0+vt),a.plotY1-vt),t.push({x0:c,x1:u,y0:p-vt,y1:p+2}),{x:i,y:p,anchor:o}}function ur(t){return t.map((e,n)=>`${n===0?"M":"L"}${e.x.toFixed(2)},${e.y.toFixed(2)}`).join(" ")}function pr(t){if(t.length===0)return"";const e=[`M${t[0].x.toFixed(2)},${t[0].y.toFixed(2)}`];for(let n=1;n<t.length;n++)e.push(`H${t[n].x.toFixed(2)}`,`V${t[n].y.toFixed(2)}`);return e.join(" ")}function He(t,e,n){if(t.length===0)return[];const a=t[0],s=t[t.length-1],o=[...t];if(e==="right"||e==="left"){const i=e==="right"?n.plotX1:n.plotX0;o.push({x:i,y:s.y},{x:i,y:a.y})}else{const i=e==="above"?n.plotY0:n.plotY1;o.push({x:s.x,y:i},{x:a.x,y:i})}return o}function hr(t,e){const n=[];for(const a of t){if(a.kind==="relief"||a.kind==="water"){const i=rt(e,a),{x0:c,y0:u,x1:d,y1:p}=a.bounds;n.push([{x:e.scaleX(c),y:i(u)},{x:e.scaleX(d),y:i(u)},{x:e.scaleX(d),y:i(p)},{x:e.scaleX(c),y:i(p)}]);continue}if(a.kind!=="region"||a.hatched)continue;const s=rt(e,a),o=a.boundary.map(i=>({x:e.scaleX(i.x),y:s(i.y)}));if(!(o.length<2))if(a.side==="between"){if(!a.boundaryHigh)continue;n.push([...o,...a.boundaryHigh.map(i=>({x:e.scaleX(i.x),y:s(i.y)})).reverse()])}else n.push(He(o,a.side,e))}return(a,s)=>n.some(o=>{let i=!1;for(let c=0,u=o.length-1;c<o.length;u=c++){const d=o[c],p=o[u];d.y>s!=p.y>s&&a<(p.x-d.x)*(s-d.y)/(p.y-d.y)+d.x&&(i=!i)}return i})}function fr({layer:t,frame:e}){if(t.stops.length===0)return null;const n=rt(e,t),a=t.along==="y"?e.plotY1-e.plotY0:e.plotX1-e.plotX0;if(a<=0)return null;const s=t.along==="y"?e.plotY0:e.plotX0,o=t.along==="y"?n:e.scaleX,i=t.maxOpacity??ir,c=t.tint??lt(t),u=`plot-field-${t.id}-${e.uid}`,d=`plot-field-blur-${t.id}-${e.uid}`,p=t.stops.map(f=>({offset:(o(f.at)-s)/a*100,intensity:Math.max(0,Math.min(1,f.intensity))})).sort((f,g)=>f.offset-g.offset);return l.jsxs(l.Fragment,{children:[l.jsxs("defs",{children:[l.jsx("linearGradient",{id:u,x1:"0%",y1:"0%",x2:t.along==="x"?"100%":"0%",y2:t.along==="y"?"100%":"0%",children:p.map((f,g)=>l.jsx("stop",{offset:`${f.offset.toFixed(2)}%`,stopColor:c,stopOpacity:i*f.intensity},g))}),t.blur!==void 0&&l.jsx("filter",{id:d,children:l.jsx("feGaussianBlur",{stdDeviation:t.blur})})]}),l.jsx("rect",{"data-plot-layer":t.id,"data-plot-layer-kind":"field",x:e.plotX0,y:e.plotY0,width:e.plotX1-e.plotX0,height:e.plotY1-e.plotY0,fill:`url(#${u})`,filter:t.blur!==void 0?`url(#${d})`:void 0})]})}const xr=6,yt=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function gr(t){const e=Math.max(0,Math.min(1,t));for(let n=1;n<yt.length;n++)if(e<=yt[n][0]){const[a,s]=yt[n-1],[o,i]=yt[n],c=o>a?(e-a)/(o-a):0;return[Math.round(s[0]+(i[0]-s[0])*c),Math.round(s[1]+(i[1]-s[1])*c),Math.round(s[2]+(i[2]-s[2])*c)]}return yt[yt.length-1][1]}const mr=[150,156,160],br=[200,80,70];function vr(t,e){if(e===3)return mr;if(e!==1&&e!==2)return t;const n=.3*t[0]+.59*t[1]+.11*t[2],a=(o,i,c)=>o+(c-o)*i,s=t.map(o=>a(a(o,.5,n),.06,235));return e===1?s:s.map((o,i)=>a(o,.3,br[i]))}function yr(t,e){const n=2*(e-1),a=(t%n+n)%n;return a<e?a:n-a}function kr(t,e,n,a,s,o,i){const c=t[o*n+i],u=s?yr(c,a):c,[d,p,f]=vr(gr(u/(a-1)),e[o*n+i]),g=i>0?t[o*n+i-1]:c,m=o>0?t[(o-1)*n+i]:c,$=g!==c||m!==c?.5:1;return`rgb(${Math.round(d*$)}, ${Math.round(p*$)}, ${Math.round(f*$)})`}function Mr({layer:t,frame:e}){const{size:n,values:a,bounds:s}=t;if(n<2||a.length<n*n)return null;let o=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;for(let R=0;R<n*n;R++){const B=a[R];if(!Number.isFinite(B))return null;B<o&&(o=B),B>i&&(i=B)}const c=i-o,u=t.bandMetres!=null&&t.bandMetres>0?t.bandMetres:null,d=t.veil,p=Math.max(2,t.bands??xr),f=rt(e,t),g=e.scaleX(s.x0),m=e.scaleX(s.x1),$=f(s.y0),M=f(s.y1),w=Math.min(g,m),F=Math.min($,M),b=Yt,L=Math.abs(m-g)/b,H=Math.abs(M-$)/b;if(!(L>0)||!(H>0))return null;const W=$<M,at=new Int16Array(b*b),Q=new Uint8Array(b*b),ft=d!=null&&d.length>=n*n;for(let R=0;R<b;R++)for(let B=0;B<b;B++){const A=B/(b-1)*(n-1),X=R/(b-1)*(n-1);ft&&(Q[R*b+B]=d[Math.round(X)*n+Math.round(A)]??0);const I=ze(a,n,A,X);if(u!=null){at[R*b+B]=Math.floor(I/u);continue}const z=c>0?(I-o)/c:.5;at[R*b+B]=Math.max(0,Math.min(p-1,Math.floor(z*p)))}const et=[];for(let R=0;R<b;R++){const B=W?R:b-1-R;let A=0,X="";for(let I=0;I<=b;I++){const z=I<b?kr(at,Q,b,p,u!=null,R,I):"";if(I===0){X=z;continue}z===X&&I<b||(et.push(l.jsx("rect",{x:w+A*L,y:F+B*H,width:(I-A)*L+.5,height:H+.5,fill:X},`${R}-${A}`)),A=I,X=z)}}return l.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"relief",shapeRendering:"crispEdges",opacity:tt(t),"aria-hidden":"true",children:et})}function wr({layer:t,frame:e}){const n=E.useId(),a=rt(e,t),s=d=>({x:e.scaleX(d.x),y:a(d.y)}),o=t.boundary.map(s);if(o.length<2)return null;const i=t.side==="between"?[...o,...(t.boundaryHigh??[]).map(s).reverse()]:He(o,t.side,e);if(t.side==="between"&&!t.boundaryHigh)return null;const c=t.side==="right"?e.plotX1-4:t.side==="left"?e.plotX0+11:o[o.length-1].x,u=e.plotY1-34;return l.jsxs(l.Fragment,{children:[t.hatched&&l.jsx("defs",{children:l.jsx("pattern",{id:n,width:Kt,height:Kt,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:l.jsx("line",{x1:0,y1:0,x2:0,y2:Kt,stroke:lt(t),strokeWidth:1,strokeOpacity:t.opacity??sr})})}),l.jsx("polygon",{"data-plot-layer":t.id,"data-plot-layer-kind":"region","data-hatched":t.hatched?"":void 0,points:i.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:t.hatched?`url(#${n})`:lt(t),fillOpacity:t.hatched?void 0:t.opacity??ar}),e.labels&&t.label&&l.jsx("text",{x:c,y:u,transform:`rotate(-90 ${c} ${u})`,fontSize:or,letterSpacing:"0.14em",fill:"var(--color-text-muted)",children:t.label})]})}function $r({layer:t,frame:e}){const n=rt(e,t),a=t.points.map(o=>({x:e.scaleX(o.x),y:n(o.y)}));if(a.length===0)return null;const s=tr*(t.weight??1);return t.style==="scatter"?l.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",fill:lt(t),opacity:tt(t),children:a.map((o,i)=>l.jsx("circle",{cx:o.x,cy:o.y,r:s},i))}):l.jsx("path",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",d:t.style==="step"?pr(a):ur(a),fill:"none",stroke:lt(t),strokeOpacity:tt(t),strokeWidth:s,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:t.dashed?"5 3.5":void 0})}function jr({layer:t,frame:e}){const n=rt(e,t),a=t.dashed??!0,s=lt(t),o=t.along==="y",i=o?n(t.value):e.scaleX(t.value);return l.jsxs(l.Fragment,{children:[l.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"rule",x1:o?e.plotX0:i,x2:o?e.plotX1:i,y1:o?i:e.plotY0,y2:o?i:e.plotY1,stroke:s,strokeOpacity:tt(t),strokeWidth:1,strokeDasharray:a?"4 3":void 0}),e.labels&&t.label&&l.jsx("text",{x:o?e.plotX1-4:i+3,y:o?i-3:e.plotY0+10,textAnchor:o?"end":"start",fill:St(t),fontSize:It,children:t.label})]})}function Er({layer:t,frame:e,placed:n}){const a=rt(e,t),s=e.scaleX(t.at.x),o=a(t.at.y),i=t.across??"x",c=lt(t),u=e.labels&&t.label?dr(n,{anchorX:s,anchorY:o,gap:Et+3,text:t.label,frame:e}):null;return l.jsxs(l.Fragment,{children:[l.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"annotation",x1:i==="x"?s-Et:s,x2:i==="x"?s+Et:s,y1:i==="x"?o:o-Et,y2:i==="x"?o:o+Et,stroke:c,strokeOpacity:tt(t),strokeWidth:1.75,strokeLinecap:"round"}),u&&t.label&&l.jsx("text",{x:u.x,y:u.y,textAnchor:u.anchor,fontSize:It,letterSpacing:"0.05em",fill:St(t),fillOpacity:tt(t),children:t.label})]})}function Ar({layer:t,frame:e}){const n=rt(e,t),a=e.scaleX(t.at.x),s=n(t.at.y)+(t.offsetPx??0),o=er*(t.scale??1),i=lt(t),c=t.shape??"dot",u={"data-plot-layer":t.id,"data-plot-layer-kind":"marker",opacity:tt(t)},d=c==="none"?null:c==="vessel"?l.jsx("g",{...u,children:l.jsx(dn,{state:t.markState??"current",x:a,y:s,r:o*nr,keyline:!0})}):c==="dot"?l.jsx("circle",{...u,cx:a,cy:s,r:o,fill:i,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):c==="ring"?l.jsx("circle",{...u,cx:a,cy:s,r:o,fill:"none",stroke:i,strokeWidth:1.5}):c==="cross"?l.jsx("path",{...u,d:`M${a-o},${s} L${a+o},${s} M${a},${s-o} L${a},${s+o}`,stroke:i,strokeWidth:1.5,strokeLinecap:"round"}):c==="chevron-up"||c==="chevron-down"?l.jsx("polyline",{...u,points:c==="chevron-up"?`${a-o},${s+o*.5} ${a},${s-o*.5} ${a+o},${s+o*.5}`:`${a-o},${s-o*.5} ${a},${s+o*.5} ${a+o},${s-o*.5}`,fill:"none",stroke:i,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"}):null;return l.jsxs(l.Fragment,{children:[d,e.labels&&t.label&&l.jsx("text",{x:c==="none"?a:a+o+3,y:s+3,textAnchor:c==="none"?"middle":void 0,fontSize:It,fill:St(t),fillOpacity:tt(t),children:t.label})]})}function Ir({layer:t,frame:e,row:n,edges:a}){const s=t.caption?2:1;if(t.anchor==="left-edge"||t.anchor==="right-edge"){const g=t.anchor==="left-edge"?e.plotX0+At+n*bt:e.plotX1-At-n*bt,m=e.plotY1-34;return l.jsx("text",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",x:g,y:m,transform:`rotate(-90 ${g} ${m})`,fontSize:It,letterSpacing:"0.14em",fill:St(t),fillOpacity:tt(t),children:t.text})}const o=t.anchor.startsWith("top"),i=t.anchor.endsWith("right"),c=g=>At+(g?rr:0),u=i?e.plotX1-c(a.right):e.plotX0+c(a.left),d=n*(s*bt+2),p=o?e.plotY0+At+ke+d:e.plotY1-At-d,f=p-bt;return l.jsxs("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",textAnchor:i?"end":"start",children:[t.caption&&l.jsx("text",{x:u,y:o?p:f,fontSize:It,letterSpacing:"0.05em",fill:"var(--color-text-faint)",children:t.caption}),l.jsx("text",{x:u,y:t.caption&&o?p+bt:p,fontSize:ke,fontWeight:700,fill:St(t),fillOpacity:tt(t),children:t.text})]})}const we={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},Sr={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function Vt({layers:t,frame:e,pass:n}){const a=t.map((c,u)=>({layer:c,index:u})).filter(({layer:c})=>Sr[c.kind]===n).sort((c,u)=>we[c.layer.kind]-we[u.layer.kind]||(c.layer.z??0)-(u.layer.z??0)||c.index-u.index),s=new Map,o=[],i={left:t.some(c=>c.kind==="caption"&&c.anchor==="left-edge"||c.kind==="region"&&c.side==="left"&&!!c.label),right:t.some(c=>c.kind==="caption"&&c.anchor==="right-edge"||c.kind==="region"&&c.side==="right"&&!!c.label)};return l.jsx(l.Fragment,{children:a.map(({layer:c,index:u})=>{const d=`${c.id}-${u}`;switch(c.kind){case"relief":return l.jsx(Mr,{layer:c,frame:e},d);case"water":return l.jsx(Qo,{layer:c,frame:e},d);case"field":return l.jsx(fr,{layer:c,frame:e},d);case"region":return l.jsx(wr,{layer:c,frame:e},d);case"series":return l.jsx($r,{layer:c,frame:e},d);case"rule":return l.jsx(jr,{layer:c,frame:e},d);case"annotation":return l.jsx(Er,{layer:c,frame:e,placed:o},d);case"marker":return l.jsx(Ar,{layer:c,frame:e},d);case"caption":{const p=s.get(c.anchor)??0;return s.set(c.anchor,p+1),l.jsx(Ir,{layer:c,frame:e,row:p,edges:i},d)}default:return null}})})}function Lr(t){return t.map(e=>e.description).filter(e=>typeof e=="string"&&e.length>0)}const $e=11,Nt=3,Ft=4,je=(t,e)=>t.x0<e.x1&&e.x0<t.x1&&t.y0<e.y1&&e.y0<t.y1;function _r(t,e,n,a,s){let o=0,i=1;const c=n-t,u=a-e,d=[[-c,t-s.x0],[c,s.x1-t],[-u,e-s.y0],[u,s.y1-e]];for(const[p,f]of d){if(p===0&&f<0)return!1;if(p!==0){const g=f/p;p<0?o=Math.max(o,g):i=Math.min(i,g)}}return o<=i}function Cr(t,e){for(let n=1;n<t.cx.length;n++){const a=[t.cx[n-1],t.cy[n-1],t.cx[n],t.cy[n]];if(a.every(Number.isFinite)&&_r(a[0],a[1],a[2],a[3],e))return!0}return!1}function Tr({labels:t,plot:e,obstacles:n,traces:a}){const s=[],o=new Map;for(const i of t){const c={y0:i.lineY-Nt-$e,y1:i.lineY-Nt},u={y0:i.lineY+Nt,y1:i.lineY+Nt+$e},d={x0:e.x1-Ft-i.width,x1:e.x1-Ft},p={x0:e.x0+Ft,x1:e.x0+Ft+i.width},f=[{...d,...c,anchor:"end"},{...d,...u,anchor:"end"},{...p,...c,anchor:"start"},{...p,...u,anchor:"start"}];let g=null;for(const m of f){if(!(m.x0>=e.x0&&m.x1<=e.x1&&m.y0>=e.y0&&m.y1<=e.y1)||s.some(w=>je(m,w)))continue;const M=2*n.filter(w=>je(m,w)).length+a.filter(w=>Cr(w,m)).length;(g===null||M<g.cost)&&(g={spot:m,cost:M})}if(g===null){o.set(i.id,null);continue}s.push(g.spot),o.set(i.id,{x:g.spot.anchor==="end"?g.spot.x1:g.spot.x0,y:g.spot.y1-2,anchor:g.spot.anchor})}return o}const Rr=2.5;function Pr(t,e){if(t.length===0)return!1;const n=t[t.length-1]-e;return n===0?!0:t.length===1?!1:Math.sign(t[0]-e)!==Math.sign(n)}function Or(t,e){return t==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:e?t==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const Nr=(t,e)=>Ne(t-e[0],e[1]-e[0]),Ua=(t,e)=>Ne((t-e[0])*1e3,(e[1]-e[0])*1e3),Ut={top:10,bottom:28,left:50};function Fr(t,e,n){const a=(o,i,c)=>Math.max(o,Math.min(c,i)),s=a(30,Math.round(t*.18),Ut.left);return{top:Ut.top,right:n?s:a(14,Math.round(t*.07),20),bottom:e<150?20:Ut.bottom,left:s}}const Ee=t=>t.length*6.5+6,zr=4,Yr=.4,Xr=26;function Hr(t,e,n,a,s=1){const o=[],i=Xr*Math.max(.5,Math.min(2,s));for(let c=t+i/2;c<e;c+=i)for(let u=n+i/2;u<a;u+=i)o.push({key:`sg-${Math.round(c)}-${Math.round(u)}`,x:c,y:u});return o}const Br=120,Dr=90,Gr=70,Wr=35,Kr=2,Vr=14,Ur=10,qt=36,qr=12,Zr=8,Qr=2,ht=14,Be=6,De=12,Ae=10,Jr=.2,Ie=.6,Se="5 3",ta=.15,ea=.45,na="the value is inside the shaded region";function oa(t){return(t.type??"line")==="band"&&t.data.y2?[...t.data.y,...t.data.y2]:t.data.y}function ra({series:t,thresholds:e,heading:n,crosshairOn:a,yTickFormat:s}){const o=c=>c*Be,i=[];for(const c of t)i.push(o(c.label.length)+8),a&&i.push(Math.max(o(c.label.length),o(Vr+Ur))+qt);for(const c of e){if(c.kind==="marker")continue;const u=c.label??s(c.value);i.push(o(u.length)+De+8),a&&i.push(Math.max(o(c.kind.length),o(u.length))+qt)}return a&&i.push(Math.max(...n.map(c=>o(c.length)))+qt),Math.max(0,...i)+qr}function qa({series:t,xDomain:e,yDomainPrimary:n,yDomainSecondary:a,xTickFormat:s=Nr,yTickFormat:o=aa,yScalePrimary:i="linear",yScaleSecondary:c="linear",thresholds:u,legend:d="overlay",hideXAxis:p=!1,spatial:f=!1,gridScale:g=1,layers:m,"aria-label":$,crosshair:M=!1,width:w,height:F}){const b=E.useId(),L=M&&!f&&t.some(r=>r.data.x.length>0),[H,W]=E.useState(null),[at,Q]=E.useState(!1),[ft,et]=E.useState(""),R=w,B=F,A=t.filter(r=>r.axis==="primary"&&r.data.x.length>0),X=t.filter(r=>r.axis==="secondary"&&r.data.x.length>0),I=X.length>0,z=f?{top:1,right:1,bottom:1,left:1}:Fr(R,B,I),T=z.top,P=B-z.bottom,st=P-T,xt=E.useMemo(()=>{const r={primary:[],secondary:[]};for(const h of m??[]){const x=cr(h);r[x.axis].push(...x.ys)}return r},[m]),nt=E.useMemo(()=>Le(A,n,i,xt.primary),[A,n,i,xt]),J=E.useMemo(()=>Le(X,a,c,xt.secondary),[X,a,c,xt]),U=i==="log"?pe(nt[0],nt[1],P,T):Gt(nt[0],nt[1],P,T),V=c==="log"?pe(J[0],J[1],P,T):Gt(J[0],J[1],P,T),ot=Math.max(2,Math.min(7,Math.round(st/Wr))),O=(r,h,x,k)=>{const j=Math.min(r,h),_=Math.max(r,h),v=(_-j)*1e-6||1e-6,S=C=>C>=j-v&&C<=_+v,N=C=>k==="log"?$o(j,_,C):Zt(j,_,C);for(let C=x;C<=64;C*=2){const Z=N(C).filter(S);if(Z.length<2)continue;if(Z.length<=x)return Z;const jt=(Z.length-1)/(x-1),Pt=Array.from({length:x},(Ea,sn)=>Z[Math.round(sn*jt)]);return Array.from(new Set(Pt))}return[j,_]},q=O(nt[0],nt[1],ot,i==="log"?"log":"linear"),dt=I?O(J[0],J[1],ot,c==="log"?"log":"linear"):[],kt=(r,h)=>r.length===0?h:Math.max(h,Math.min(Math.round(R*Yr),Math.max(...r.map(x=>Ee(o(x,r))))+zr)),gt=f?z:{left:kt(q,z.left),right:I?kt(dt,z.right):z.right},Y=gt.left,Ge=L||d!=="none"&&t.length>0||(u??[]).some(r=>r.label),Jt=f||!Ge?{placement:"overlay"}:un({width:R,height:B,contentWidth:ra({series:t,thresholds:u??[],heading:[e[0],e[1]].map(r=>s(r,e)),crosshairOn:L,yTickFormat:o})}),te=Jt.placement==="beside"?Jt.columnWidth:0,G=R-gt.right-te,it=G-Y,ut=it>=Br&&st>=Dr,K=te>0?{x0:G+(I?gt.right:0)+Zr,y0:T,x1:R-Qr,y1:P}:void 0,D=Gt(e[0],e[1],Y,G),We=Math.max(2,Math.min(8,Math.round(it/Gr))),Mt=O(e[0],e[1],We,"linear"),Ke=E.useMemo(()=>{const r=[],h=Mt.length-1;if(h<0)return r;const x=Ee,k=6,j=v=>{const S=Mt[v],N=s(S,e,Mt),C=D(S),Z=x(N),jt=v===0?"start":v===h?"end":"middle",Pt=jt==="start"?C:jt==="end"?C-Z:C-Z/2;return{x:C,text:N,anchor:jt,leftEdge:Pt,rightEdge:Pt+Z}},_=j(0);if(r.push({x:_.x,text:_.text,anchor:_.anchor}),h>=1){const v=j(h);if(v.leftEdge>=_.rightEdge+k){let S=_.rightEdge;for(let N=1;N<h;N++){const C=j(N);C.leftEdge>=S+k&&C.rightEdge<=v.leftEdge-k&&(r.push({x:C.x,text:C.text,anchor:C.anchor}),S=C.rightEdge)}r.push({x:v.x,text:v.text,anchor:v.anchor})}}return r},[Mt,e,D,s]),ee=(r,h)=>{const x=new Set,k=r.length;if(k===0||(x.add(0),k===1))return x;const j=16,_=h(r[0]),v=h(r[k-1]);if(Math.abs(v-_)>=j){let S=_;for(let N=1;N<k-1;N++){const C=h(r[N]);Math.abs(C-S)>=j&&Math.abs(v-C)>=j&&(x.add(N),S=C)}x.add(k-1)}return x},Ve=ee(q,U),Ue=ee(dt,V),ct=E.useMemo(()=>t.filter(r=>r.data.x.length>0).map(r=>{const h=r.axis==="primary"?U:V,x=r.type??"line";if(x==="band")return r.data.y2?{id:r.id,kind:"band",color:r.color,opacity:r.fillOpacity??Jr,d:Fe(r.data.x,r.data.y,r.data.y2,D,h)}:{id:r.id,kind:"noop"};if(x==="scatter"){const v=r.data.x.map((S,N)=>({cx:D(S),cy:h(r.data.y[N])}));return{id:r.id,kind:"scatter",color:r.color,points:v}}const k=x==="step"?ko:ue,j=(r.data.bridges??[]).filter(v=>yo(r.data.x,r.data.y,v,D,h)),_=[...new Set([...r.data.breaks??[],...j.map(v=>v.to)])].sort((v,S)=>v-S);return{id:r.id,kind:"stroked",color:r.color,dashed:r.dashed??!1,uncertainty:wo(r.data.x,r.data.reckoned??[],D,h),segments:Mo(r.data.x,r.data.y,D,h,k,_,r.data.spans,r.data.reckoned),modelled:j.map(v=>({basis:v.basis,d:ue([r.data.x[v.to-1],...v.t,r.data.x[v.to]],[r.data.y[v.to-1],...v.v,r.data.y[v.to]],D,h)})),tail:r.data.x.length>0&&(r.data.reckoned??[]).some(v=>v.to>=r.data.x.length-1)?{cx:D(r.data.x[r.data.x.length-1]),cy:h(r.data.y[r.data.y.length-1])}:null,observed:[...new Set(j.flatMap(v=>[v.to-1,v.to]))].map(v=>({cx:D(r.data.x[v]),cy:h(r.data.y[v])}))}}),[t,D,U,V]),wt=E.useMemo(()=>u?u.map(r=>{const h=r.axis??"primary",x=t.filter(j=>j.axis===h&&j.type!=="band"&&!j.dashed),k=r.kind==="limit"?x.some(j=>{const _=j.data.y.filter(v=>Number.isFinite(v));return _.length>0&&Oe(_[_.length-1],r.value,r.bad)}):r.kind==="target"&&x.some(j=>Pr(j.data.y,r.value));return{id:r.id,label:r.label,value:r.value,kind:r.kind,passed:k,currency:pn(r.reading,{drawsReckoning:!0}),tone:Or(r.kind,k),dashed:r.kind!=="marker",y:h==="primary"?U(r.value):V(r.value)}}):[],[u,t,U,V]),_t=E.useMemo(()=>{const r=(h,x,k)=>Math.max(h,Math.min(k,x));return(u??[]).flatMap(h=>{if(h.kind!=="limit"||!Number.isFinite(h.value))return[];const x=h.axis??"primary",k=x==="primary"?U:V,j=k(h.value),_=h.bad==="above"?-1:1,v=h.label||`the limit at ${o(h.value)}`;return t.filter(S=>S.axis===x&&S.data.x.length>0&&(S.type??"line")!=="band"&&!S.dashed).flatMap(S=>bo({y:S.data.y,cx:S.data.x.map(D),cy:S.data.y.map(k),limit:h.value,limitY:j,bad:h.bad,breaks:S.data.breaks,step:S.type==="step"||S.type==="scatter",minGapPx:ht}).slice(ut?0:-1).map(N=>{const C=o(S.data.y[N.index]),Z=s(S.data.x[N.index],e);return{key:`${h.id}-${S.id}-${N.index}`,color:S.color,x:r(Y+ht/2+1,N.x-Ae*(N.entered?1:-1),G-ht/2-1),y:r(T+ht/2+1,N.y+_*Ae,P-ht/2-1),text:N.entered?N.spells>1?`${S.label} went past ${v} ${N.spells} times from ${Z}, first reading ${C}`:`${S.label} went past ${v} at ${Z}, reading ${C}`:`${S.label} was already past ${v} when this window began at ${Z}, reading ${C}`}}))})},[u,t,D,U,V,s,o,e,Y,G,T,P,ut]),$t=E.useMemo(()=>{if(!ut)return new Map;const r=ht/2;return Tr({labels:wt.filter(h=>h.label).map(h=>({id:h.id,width:(h.label?.length??0)*Be+(h.currency.held?De:0),lineY:h.y})),plot:K??{x0:Y,y0:T,x1:G,y1:P},obstacles:[..._t.map(h=>({x0:h.x-r,y0:h.y-r,x1:h.x+r,y1:h.y+r})),...d==="none"?[]:t.map((h,x)=>({x0:K?K.x0:Y+3,y0:T+6+x*16,x1:(K?K.x0:Y+3)+Math.min(h.label.length*6+8,K?K.x1-K.x0:it-6),y1:T+6+x*16+13}))],traces:(K?[]:t).filter(h=>(h.type??"line")!=="band").map(h=>({cx:h.data.x.map(D),cy:h.data.y.map(h.axis==="primary"?U:V)}))})},[ut,K,wt,_t,d,t,D,U,V,Y,G,T,P,it]),qe=t.flatMap(r=>{const h=ct.find(v=>v.id===r.id),x=h?.kind==="stroked"?h.modelled.map(v=>v.basis):[],k=r.data.reckoned??[];if(k.length===0&&x.length===0)return[];const _=[...new Set([...k.map(v=>v.basis),...x])].map(v=>`${r.label}: part of this trace is reckoned, ${hn(v)}, not measured`);return k.some(v=>v.bandLo&&v.bandHi)&&_.push(`${r.label}: ${na}`),_}),Ze=wt.flatMap(r=>{const h=r.label??r.id,x=[];return r.passed&&r.kind==="limit"&&x.push(`${h}: limit passed`),r.passed&&r.kind==="target"&&x.push(`${h}: target reached`),r.currency.held&&x.push(fn(h,r.currency.caption)),r.label&&!$t.get(r.id)&&x.length===0&&x.push(r.label),x}),ne=[$??"Telemetry line chart",...Lr(m??[]),...qe,...Ze].join("; "),Xt=E.useMemo(()=>t.filter(r=>r.data.x.length>0),[t]),Ht=E.useMemo(()=>L?go(Xt):[],[L,Xt]),Ct=Math.min(e[0],e[1]),Tt=Math.max(e[0],e[1]);function oe(r){const h=Xt.map(x=>{const k=xo(x,r),j=x.format??o,_=x.axis==="primary"?U:V,v=(x.type??"line")==="band";return k===null?{id:x.id,label:x.label,color:x.color,value:null}:{id:x.id,label:x.label,color:x.color,value:v&&k.y2!==void 0?`${j(k.y)} to ${j(k.y2)}`:j(k.y),currency:k.currency,modelled:k.currency==="modelled",y:v?void 0:_(k.y)}});if(ut)for(const x of wt)x.kind!=="marker"&&h.push({id:`threshold-${x.id}`,label:x.kind,color:x.tone.label,value:x.label??o(x.value),detail:!0,currency:x.currency.held?x.currency.mark==="modelled"?"modelled":"held":void 0,modelled:x.currency.held&&x.currency.mark==="modelled"});return{heading:s(r,e),rows:h}}function re(r){const{heading:h,rows:x}=oe(r);return[h,...x.map(k=>`${k.label} ${k.value??"no sample"}${k.currency?`, ${k.currency}`:""}`)].join("; ")}const ae=t.filter(r=>(r.type??"line")!=="band").map(r=>({cx:r.data.x.map(D),cy:r.data.y.map(r.axis==="primary"?U:V)})),Qe=r=>{let h=r,x=Number.POSITIVE_INFINITY;for(const k of Ht)k<Ct||k>Tt||Math.abs(k-r)<x&&(x=Math.abs(k-r),h=k);return h},pt=L&&H!==null&&H.at>=Ct&&H.at<=Tt?Qe(H.at):null,mt=pt===null?null:oe(pt),se=mt!==null&&xn({x:pt===null?0:D(pt),plot:{x0:Y,y0:T,x1:G,y1:P},heading:mt.heading,rows:mt.rows,column:K,traces:ae});function Je(r){const h=r.currentTarget.getBoundingClientRect(),x=r.clientX-h.left;return x<Y||x>G?null:e[0]+(x-Y)/(G-Y)*(e[1]-e[0])}function tn(r){const h=Je(r);if(h===null){W(x=>x?.source==="pointer"?null:x);return}W({at:h,source:"pointer"})}function en(r){const h=Ht.filter(_=>_>=Ct&&_<=Tt),x={ArrowLeft:r.shiftKey?-10:-1,ArrowRight:r.shiftKey?10:1,Home:-h.length,End:h.length};if(r.key==="Escape"){if(H===null)return;r.preventDefault(),W(null),et("");return}const k=x[r.key];if(k===void 0)return;r.preventDefault();const j=de(h,pt,k);j!==null&&(W({at:j,source:"keys"}),et(re(j)))}function nn(r){try{Q(r.currentTarget.matches(":focus-visible"))}catch{Q(!0)}if(H!==null)return;const h=de(Ht.filter(x=>x>=Ct&&x<=Tt),null,0);h!==null&&(W({at:h,source:"keys"}),et(re(h)))}function on(){Q(!1),W(r=>r?.source==="keys"?null:r),et("")}const rn=L?{tabIndex:0,onPointerMove:tn,onPointerLeave:()=>W(r=>r?.source==="pointer"?null:r),onKeyDown:en,onFocus:nn,onBlur:on}:{},Rt={scaleX:D,scaleYPrimary:U,scaleYSecondary:V,plotX0:Y,plotX1:G,plotY0:T,plotY1:P,uid:b,labels:ut},an=f&&m?hr(m,Rt):()=>!1,Bt=`plot-layer-clip-${b}`;if(it<=0||st<=0)return l.jsx("svg",{width:Math.max(0,R),height:Math.max(0,B),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:l.jsx("title",{children:"Chart too small to render"})});const ie=l.jsxs("svg",{width:R,height:B,role:_t.length>0||L?"group":"img","aria-label":ne,"aria-describedby":L?`${b}-crosshair-hint`:void 0,...rn,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...L?{touchAction:"pan-y",outline:at?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[l.jsx("title",{children:ne}),m&&m.length>0&&l.jsx("defs",{children:l.jsx("clipPath",{id:Bt,children:l.jsx("rect",{x:Y,y:T,width:it,height:st})})}),l.jsx("rect",{x:Y,y:T,width:it,height:st,fill:"var(--color-surface-panel)"}),m&&m.length>0&&l.jsx("g",{clipPath:`url(#${Bt})`,children:l.jsx(Vt,{layers:m,frame:Rt,pass:"background"})}),!f&&q.map((r,h)=>{const x=U(r);return l.jsxs(Dt.Fragment,{children:[l.jsx("line",{x1:Y,y1:x,x2:G,y2:x,stroke:"var(--color-border-subtle)",strokeWidth:1}),Ve.has(h)&&l.jsx("text",{x:Y-4,y:x,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:o(r,q)})]},`py-${h}`)}),!f&&dt.map((r,h)=>Ue.has(h)?l.jsx("text",{x:G+4,y:V(r),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:o(r,dt)},`sy-${h}`):null),!p&&!f&&Mt.map((r,h)=>l.jsx("line",{x1:D(r),y1:T,x2:D(r),y2:P,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${h}`)),!p&&!f&&Ke.map((r,h)=>l.jsx("text",{x:r.x,y:P+14,textAnchor:r.anchor,fill:"var(--color-text-faint)",fontSize:11,children:r.text},`xl-${h}`)),f&&Hr(Y,G,T,P,g).filter(r=>!an(r.x,r.y)).map(r=>l.jsx("circle",{cx:r.x,cy:r.y,r:1,fill:"var(--color-text-faint)",opacity:.35},r.key)),!f&&l.jsxs(l.Fragment,{children:[l.jsx("line",{x1:Y,y1:T,x2:Y,y2:P,stroke:"var(--color-border-strong)",strokeWidth:1}),l.jsx("line",{x1:Y,y1:P,x2:G,y2:P,stroke:"var(--color-border-strong)",strokeWidth:1}),I&&l.jsx("line",{x1:G,y1:T,x2:G,y2:P,stroke:"var(--color-border-strong)",strokeWidth:1})]}),ct.filter(r=>r.kind==="band").map(r=>l.jsx("path",{d:r.d,fill:r.color,fillOpacity:r.opacity,stroke:"none"},r.id)),ct.filter(r=>r.kind==="stroked").flatMap(r=>r.uncertainty.map((h,x)=>l.jsx("path",{d:h.d,"data-band-kind":h.kind,fill:r.color,fillOpacity:ta,stroke:h.kind==="bound"?r.color:"none",strokeOpacity:h.kind==="bound"?ea:void 0,strokeWidth:h.kind==="bound"?1:void 0},`${r.id}-band-${x}`))),ct.filter(r=>r.kind==="stroked").flatMap(r=>r.segments.map((h,x)=>l.jsx("path",{d:h.d,"data-stream-status":h.status,"data-reckoning-basis":h.basis,stroke:r.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:h.basis!==void 0?Ie:void 0,strokeDasharray:h.basis!==void 0?Se:r.dashed?"4 3":void 0},`${r.id}-${x}`))),ct.filter(r=>r.kind==="stroked").flatMap(r=>r.modelled.map((h,x)=>l.jsx("path",{d:h.d,"data-reckoning-basis":h.basis,stroke:r.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:Ie,strokeDasharray:Se},`${r.id}-modelled-${x}`))),ct.map(r=>r.kind==="stroked"&&r.tail!==null?l.jsx(gn,{kind:"modelled",x:r.tail.cx,y:r.tail.cy},`${r.id}-tail`):null),ct.filter(r=>r.kind==="stroked").flatMap(r=>r.observed.map((h,x)=>l.jsx("circle",{cx:h.cx,cy:h.cy,r:Rr,fill:r.color,"data-observed-sample":""},`${r.id}-observed-${x}`))),ct.filter(r=>r.kind==="scatter").flatMap(r=>r.points.map((h,x)=>l.jsx("circle",{cx:h.cx,cy:h.cy,r:Kr,fill:r.color},`${r.id}-${x}`))),m&&m.length>0&&l.jsx("g",{clipPath:`url(#${Bt})`,children:l.jsx(Vt,{layers:m,frame:Rt,pass:"foreground"})}),wt.map(r=>l.jsxs(Dt.Fragment,{children:[l.jsx("line",{x1:Y,y1:r.y,x2:G,y2:r.y,stroke:r.tone.line,strokeWidth:1,strokeDasharray:r.dashed?"4 3":void 0,"data-threshold-kind":r.kind,"data-threshold-passed":r.passed||void 0}),r.label&&$t.get(r.id)&&!(K!==void 0&&se&&r.kind!=="marker")&&l.jsxs("text",{x:$t.get(r.id)?.x,y:$t.get(r.id)?.y,textAnchor:$t.get(r.id)?.anchor,fill:r.tone.label,fontSize:10,children:[r.label,r.currency.held&&l.jsx(mn,{size:10,kind:r.currency.mark??"held"})]})]},r.id)),_t.map(r=>l.jsx(mo,{x:r.x,y:r.y,size:ht,color:r.color,text:r.text},r.key)),d!=="none"&&!se&&t.map((r,h)=>{const x=T+6+h*16;if(x+13>P)return null;const k=K?K.x0:Y+3,j=K?K.x1-K.x0:it-6,_=Math.min(r.label.length*6+8,j),v=Math.max(1,Math.floor((_-8)/6)),S=r.label.length>v?`${r.label.slice(0,Math.max(1,v-1))}...`:r.label;return l.jsxs(Dt.Fragment,{children:[l.jsx("rect",{x:k,y:x,width:_,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),l.jsx("text",{x:k+3,y:x+10,fill:r.color,fontSize:10,children:S})]},r.id)}),m&&m.length>0&&ut&&l.jsx(Vt,{layers:m,frame:Rt,pass:"caption"}),mt!==null&&pt!==null&&l.jsx(bn,{x:D(pt),plot:{x0:Y,y0:T,x1:G,y1:P},heading:mt.heading,rows:mt.rows,column:K,traces:ae})]});return L?l.jsxs(l.Fragment,{children:[ie,l.jsx(ce,{id:`${b}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),l.jsx(ce,{role:"status","aria-live":"polite",children:ft})]}):ie}function Le(t,e,n,a=[]){if(e)return e;if(t.length===0&&a.length===0)return n==="log"?[1,10]:[0,1];let s=[...t.flatMap(oa),...a];return n==="log"&&(s=s.filter(o=>o>0)),s.length===0?n==="log"?[1,10]:[0,1]:[Math.min(...s),Math.max(...s)]}function aa(t){if(t===0)return"0";if(Math.abs(t)>=1e6)return`${(t/1e6).toFixed(1)}M`;if(Math.abs(t)>=1e3)return`${(t/1e3).toFixed(1)}k`;if(Number.isInteger(t))return String(t);if(Math.abs(t)<.01){const e=Math.floor(Math.log10(Math.abs(t))),n=t/10**e;return Math.abs(n-1)<1e-9?`1e${e}`:`${n.toFixed(1)}e${e}`}return t.toFixed(2)}const Za=y.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function Qa({state:t,elapsedMs:e}){if(t==="connected")return null;const n=t==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return l.jsxs(Te,{accent:ia[t],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[l.jsx(ca,{children:n}),l.jsxs(la,{children:["T+",sa(e)]})]})}function sa(t){const e=Math.max(0,Math.floor(t/1e3)),n=Math.floor(e/3600),a=Math.floor(e%3600/60),s=e%60,o=i=>String(i).padStart(2,"0");return n>0?`${n}:${o(a)}:${o(s)}`:`${o(a)}:${o(s)}`}const ia={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},ca=y.span`
  font-weight: 600;
`,la=y.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function Ja({entries:t}){return t.length===0?null:l.jsxs(ua,{role:"status","aria-live":"polite",children:[l.jsx(pa,{}),l.jsx(ha,{children:"SOURCE OFFLINE"}),l.jsx(fa,{children:t.map(e=>l.jsxs(xa,{children:[l.jsx(ga,{children:e.name}),l.jsx(ma,{children:e.status}),l.jsx(ba,{children:da(e.elapsedMs)}),e.onRetry&&l.jsx(_e,{size:"sm",onClick:e.onRetry,"aria-label":`Retry ${e.name} now`,children:"Retry now"})]},e.id))})]})}function da(t){return Mn(wn("irl:s",t/1e3))}const ua=y.div`
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
`,pa=y.span`
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
`,ha=y.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,fa=y.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,xa=y.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,ga=y.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,ma=y.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,ba=y.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,ts=y.div`
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
`,es=y.div`
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
`,ns=y.div`
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,os=y.input`
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
`,rs=y.button`
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
`,as=y.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,ss=y.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,is=y.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,cs=y.button`
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
`,ls=y.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,ds=y.ul`
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
`,va={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},ya={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function ka(t){return va[t]??ya}function us({label:t}){const e=ka(t);return l.jsx(Ma,{$bg:e.bg,$fg:e.fg,$border:e.border,children:t})}const Ma=y.span`
  display: inline-block;
  padding: var(--inset-chip);
  border-radius: var(--radius-regular);
  font-size: var(--font-size-caption);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${({$bg:t,$fg:e,$border:n})=>Lt`
    background: ${t};
    color: ${e};
    border: 1px solid ${n};
  `}
`;$n({id:"default-dark",name:"Default Dark",theme:vn});function ps({kind:t,local:e,remote:n,remoteLabel:a="Peer"}){const s=t==="major"?"alert":"status",o=t==="major"?"RELOAD REQUIRED":t==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",i=t==="unknown"?`${a} didn't report a version`:`${a} v${n??"?"} ↔ this v${e}`;return l.jsxs(Te,{accent:wa[t],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:s,children:[l.jsx($a,{children:o}),l.jsx(ja,{children:i})]})}const wa={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},$a=y.span`
  font-weight: 600;
`,ja=y.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{Ua as A,Te as B,vo as C,Ba as D,ts as E,Wa as F,es as G,ns as H,os as I,rs as J,as as K,qa as L,is as M,ls as N,cs as O,Za as P,ds as Q,ss as R,Qa as S,us as T,ps as V,Xa as a,Ha as b,Da as c,Ga as d,Ka as e,Va as f,Vt as g,Ja as h,Fe as i,ue as j,Mo as k,ko as l,wo as m,yo as n,He as o,Ne as p,ka as q,pe as r,Gt as s,$o as t,Zt as u,Lr as v,cr as w,hr as x,Nr as y,eo as z};
