import{j as l}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import y,{css as Lt}from"./ext-styled-components-Br73TgY3.js";import{d as _e,Z as cn,C as ln,a2 as Ce,an as dn,ax as un,a4 as pn,a6 as hn,az as fn,ay as xn,aj as gn,ae as mn,ah as bn,V as ce,W as vn}from"./vesselMark-BNXCAyQe.js";import{r as j,R as Dt}from"./ext-react-RRA14VTW.js";import{T as yn,d as kn,w as Mn}from"./streamStatusWord-oQfueYZn.js";import{aX as wn}from"./view-clock-formula-V4D43Fqq.js";import"./ksp-enum-names-mMQ85-RD.js";import"./screen-UZmJz89R.js";import"./lagrange-BKHNrtNu.js";import"./use-transmissions-BVXmpKl3.js";import"./websocket-transport-D91LLsu1.js";import{r as $n}from"./registry-C5SOXRW5.js";import"./index-CnzDwjkh.js";function Te({accent:t,anchor:e="inline",top:n=12,zIndex:a=999,glow:s,pulse:o=!1,role:i="status",ariaLive:c,onClick:d,interactive:u=!1,children:p}){const f=c??(i==="alert"?"assertive":"polite");return e==="top"?l.jsxs(jn,{$accent:t,$top:n,$zIndex:a,$glow:s,role:i,"aria-live":f,children:[l.jsx(le,{$accent:t,$pulse:o}),p]}):l.jsxs(En,{as:d?"button":"div",type:d?"button":void 0,$accent:t,$glow:s,$clickable:!!d,$interactive:u,role:i,"aria-live":f,onClick:d,children:[l.jsx(le,{$accent:t,$pulse:o}),p]})}const jn=y.div`
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
`;function Oa({children:t}){return l.jsx(An,{children:t})}const An=y.div`
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
`,In=2e3,Sn={copied:t=>`Copied ${t}`,failed:()=>"Could not copy, select the text instead"};function Na({command:t,label:e}){const[n,a]=j.useState("idle"),s=j.useRef(void 0);j.useEffect(()=>()=>clearTimeout(s.current),[]);async function o(){let i="copied";try{await navigator.clipboard.writeText(t)}catch{i="failed"}a(i),clearTimeout(s.current),s.current=setTimeout(()=>a("idle"),In)}return l.jsxs(Ln,{children:[l.jsx(_n,{role:"group","aria-label":e,tabIndex:0,children:l.jsx(Cn,{children:t})}),l.jsx(_e,{variant:"ghost",type:"button",onClick:()=>void o(),"aria-label":`Copy ${e}`,children:n==="copied"?"Copied":"Copy"}),l.jsx(cn,{visuallyHidden:!0,children:Sn[n]?.(e)})]})}const Ln=y.div`
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
`;function Tn(t,e){if(!e)return!0;const n=e.toLowerCase();return(t.label??t.key).toLowerCase().includes(n)||t.key.toLowerCase().includes(n)}function Fa({keys:t,value:e,onChange:n,placeholder:a="Search...",emptyHint:s="No matches"}){const[o,i]=j.useState(""),c=j.useMemo(()=>t.filter(p=>Tn(p,o)),[t,o]),d=j.useMemo(()=>{const p=new Map;for(const f of c){const g=f.group??"Other";let m=p.get(g);m||(m=[],p.set(g,m)),m.push(f)}return[...p.entries()].sort(([f],[g])=>f.localeCompare(g))},[c]),u=p=>{const f=new Set(e);f.has(p)?f.delete(p):f.add(p),n(f)};return l.jsxs(Rn,{children:[l.jsx(Pn,{type:"text",value:o,placeholder:a,onChange:p=>i(p.target.value)}),l.jsx(On,{children:d.length===0?l.jsx(Gn,{children:s}):d.map(([p,f])=>l.jsxs(Nn,{children:[l.jsx(Fn,{children:p}),f.map(g=>{const m=e.has(g.key),E=`dkmp-${g.key}`;return l.jsxs(zn,{$checked:m,children:[l.jsx(Xn,{id:E,type:"checkbox",checked:m,onChange:()=>u(g.key)}),l.jsxs(Yn,{htmlFor:E,children:[l.jsx(Hn,{$checked:m,children:m&&l.jsx(ln,{size:11,strokeWidth:3})}),l.jsx(Bn,{children:g.label??g.key}),g.unit&&l.jsx(Dn,{children:g.unit})]})]},g.key)})]},p))})]})}const Rn=y.div`
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
`,Xn=y.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,Yn=y.label`
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
`;function za({show:t,message:e,hint:n,children:a}){return t?l.jsxs(Kn,{children:[l.jsx(Vn,{...Wn,children:a}),l.jsxs(Un,{role:"status","aria-live":"polite",children:[l.jsx(qn,{children:e}),n&&l.jsx(Zn,{children:n})]})]}):l.jsx(l.Fragment,{children:a})}const Wn={inert:""},Kn=y.div`
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
`,Re=j.createContext(null),Qn=400,Pe="(pointer: coarse)";function Jn(t){if(typeof window.matchMedia!="function")return()=>{};const e=window.matchMedia(Pe);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}function to(){return typeof window.matchMedia=="function"&&window.matchMedia(Pe).matches}function Xa({children:t}){const[e,n]=j.useState(!1),a=j.useSyncExternalStore(Jn,to,()=>!1),s=e||a,o=j.useRef(null),i=j.useCallback(()=>{o.current!==null&&(window.clearTimeout(o.current),o.current=null)},[]),c=j.useCallback(()=>{i(),n(!0)},[i]),d=j.useCallback(()=>{i(),o.current=window.setTimeout(()=>{o.current=null,n(!1)},Qn)},[i]);j.useEffect(()=>()=>i(),[i]);const u=j.useMemo(()=>({active:s,onMouseEnter:c,onMouseLeave:d,onFocus:c,onBlur:d}),[s,c,d]);return l.jsx(Re.Provider,{value:u,children:t})}function eo(){return j.useContext(Re)}function Ya({bottom:t,children:e,...n}){const a=eo(),s=a?.active??!0,o=n["aria-label"]??n.title;return l.jsxs(no,{$visible:s,$bottom:t,onMouseEnter:a?.onMouseEnter,onMouseLeave:a?.onMouseLeave,onFocus:a?.onFocus,onBlur:a?.onBlur,children:[o?l.jsx(oo,{$visible:s,"aria-hidden":"true",children:o}):null,l.jsx(ro,{$visible:s,tabIndex:s?0:-1,...n,children:e})]})}const no=y.div`
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
`;function Ha({bottom:t,label:e,onAccept:n,onDismiss:a,autoDismissMs:s=15e3,acceptLabel:o}){return j.useEffect(()=>{if(s<=0)return;const i=window.setTimeout(a,s);return()=>window.clearTimeout(i)},[s,a]),l.jsxs(ao,{$bottom:t,role:"status","aria-live":"polite",children:[l.jsx(so,{type:"button",onClick:n,"aria-label":o??e,children:e}),l.jsx(Ce,{text:"Dismiss",children:l.jsx(io,{type:"button",onClick:a,"aria-label":"Dismiss",children:"×"})})]})}const ao=y.div`
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
`,Ba=j.forwardRef(function({id:e,label:n="Choose file",accept:a,multiple:s,fileName:o,emptyText:i="No file chosen",disabled:c,onChange:d},u){const p=j.useId(),f=e??p,g=j.useRef(null);return l.jsxs(co,{children:[l.jsx(uo,{id:f,ref:m=>{if(g.current=m,typeof u=="function"){u(m);return}u&&(u.current=m)},type:"file",accept:a,multiple:s,disabled:c,onChange:d}),l.jsx(lo,{htmlFor:f,$disabled:!!c,children:n}),l.jsx(po,{"aria-live":"polite",$hasFile:!!o,children:o??i})]})}),co=y.div`
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
`;function ho(t,e){return t?.includes(e)??!1}function fo(t,e){const{reckoned:n,spans:a}=t.data;return n?.some(s=>e>=s.from&&e<=s.to)?"modelled":a?.some(s=>e>=s.from&&e<=s.to&&s.status==="recorded")?"recorded":"measured"}function xo(t,e){const n=t.data.x,a=t.data.y,s=Math.min(n.length,a.length);if(s===0||e<n[0]||e>n[s-1])return null;let o=0,i=s-1;for(;o<i;){const g=o+i>>1;n[g]<e?o=g+1:i=g}const c=o,d=Math.max(0,c-1);if(n[c]!==e&&c>0&&ho(t.data.breaks,c))return null;const u=e-n[d]<=n[c]-e?d:c,p=a[u];if(!Number.isFinite(p))return null;const f=t.data.y2?.[u];return{index:u,x:n[u],y:p,...f!==void 0&&Number.isFinite(f)?{y2:f}:{},currency:fo(t,u)}}function go(t){const e=new Set;for(const n of t)if(!((n.type??"line")==="band"&&!n.data.y2))for(const a of n.data.x)Number.isFinite(a)&&e.add(a);return[...e].sort((n,a)=>n-a)}function de(t,e,n){if(t.length===0)return null;if(e===null)return t[t.length-1];let a=0,s=t.length-1;for(;a<s;){const i=a+s>>1;t[i]<e?a=i+1:s=i}let o=a+n;return t[a]!==e&&n>0&&(o-=1),t[Math.max(0,Math.min(t.length-1,o))]}function mo({x:t,y:e,size:n,color:a,text:s}){const o=n/2,i=`M 0 ${-o} L ${o} ${o*.8} L ${-o} ${o*.8} Z`,c=`M -0.9 ${-o*.42} H 0.9 V ${o*.2} H -0.9 Z`,d=`M -0.9 ${o*.4} H 0.9 V ${o*.64} H -0.9 Z`;return l.jsx(Ce,{text:s,focusable:!0,children:l.jsxs("g",{role:"img","aria-label":s,"data-limit-crossing":"",transform:`translate(${t} ${e})`,children:[l.jsx("title",{}),l.jsx("circle",{r:12,fill:"transparent"}),l.jsx("path",{d:`${i} ${c} ${d}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),l.jsx("path",{d:i,fill:"none",stroke:a,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function Oe(t,e,n){return n==="above"?t>=e:t<=e}function bo({y:t,cx:e,cy:n,limit:a,limitY:s,bad:o,breaks:i=[],step:c=!1,minGapPx:d}){const u=(v,R,M)=>{if(!R)return{index:v,x:e[v],y:n[v],entered:!1};if(M===null)return{index:v,x:e[v],y:s,entered:!0};const S=n[v]-n[M],z=S===0?1:(s-n[M])/S;return{index:v,x:e[M]+(e[v]-e[M])*z,y:s,entered:!0}},p=new Set(i),f=[];let g=null,m=!1,E=!1,w=Number.NEGATIVE_INFINITY;for(let v=0;v<t.length;v++){if(!Number.isFinite(t[v])){g=null;continue}const R=Oe(t[v],a,o);if(R&&!E){const M=u(v,m,c||p.has(v)?null:g),S=f[f.length-1];S!==void 0&&M.x-w<d?S.spells++:f.push({...M,spells:1}),w=M.x}E=R,m=!0,g=v}return f}const vo=1;function yo(t,e,n,a,s){const o=n.to;if(o<1||o>=t.length)return!1;const i=a(t[o-1]),c=a(t[o]),d=s(e[o-1]),u=s(e[o]);return c>i?n.t.some((p,f)=>{const g=a(p),m=d+(u-d)*(g-i)/(c-i);return Math.abs(s(n.v[f])-m)>vo}):!1}function Gt(t,e,n,a){const s=e-t;if(s===0){const o=(n+a)/2;return()=>o}return o=>n+(o-t)/s*(a-n)}function Zt(t,e,n=5){if(t===e)return Array.from({length:n},()=>t);const s=(e-t)/(n-1),o=10**Math.floor(Math.log10(s)),c=([1,2,2.5,5,10].find(g=>g*o>=s)??10)*o,d=Math.ceil(t/c)*c,u=[];for(let g=0;u.length<n;g++){const m=d+g*c;if(m>e+c*.01)break;u.push(m)}if(u.length>=2)return u;const p=Math.floor(t/c)*c,f=Math.ceil(e/c)*c;return f>p?[p,f]:[p,p+c]}function Ne(t,e){const n=Math.floor(t/1e3);if(e>=36e5){const o=Math.floor(n/3600),i=Math.floor(n%3600/60),c=n%60;return`${o}:${String(i).padStart(2,"0")}:${String(c).padStart(2,"0")}`}const a=Math.floor(n/60),s=n%60;return`${a}:${String(s).padStart(2,"0")}`}function ue(t,e,n,a,s=[]){if(t.length===0)return"";const o=[];for(let i=0;i<t.length;i++){const c=n(t[i]).toFixed(2),d=a(e[i]).toFixed(2),u=i===0||s.includes(i);o.push(`${u?"M":"L"}${c},${d}`),u&&Qt(i,t.length,s)&&o.push(`L${c},${d}`)}return o.join(" ")}function Qt(t,e,n){return t+1>=e||n.includes(t+1)}function ko(t,e,n,a,s=[]){if(t.length===0)return"";const o=[];let i=a(e[0]).toFixed(2);const c=n(t[0]).toFixed(2);o.push(`M${c},${i}`),Qt(0,t.length,s)&&o.push(`L${c},${i}`);for(let d=1;d<t.length;d++){const u=n(t[d]).toFixed(2),p=a(e[d]).toFixed(2);if(s.includes(d)){o.push(`M${u},${p}`),Qt(d,t.length,s)&&o.push(`L${u},${p}`),i=p;continue}o.push(`H${u}`),p!==i&&o.push(`V${p}`),i=p}return o.join(" ")}function Mo(t,e,n,a,s,o=[],i=[],c=[]){if(t.length===0)return[];if(i.length===0&&c.length===0)return[{d:s(t,e,n,a,o)}];function d(w,v){const R=new Array(t.length);for(const M of w){const S=Math.min(t.length-1,M.to);for(let z=Math.max(0,M.from);z<=S;z++)R[z]=v(M)}return R}const u=d(i,w=>w.status),p=d(c,w=>w.basis),f=new Set(o),g=[];let m=0;const E=(w,v)=>{const R=w>0&&!f.has(w)?w-1:w,M=B=>B.slice(R,v+1),S=[];for(const B of o)B>R&&B<=v&&S.push(B-R);const z=s(M(t),M(e),n,a,S);z!==""&&g.push({status:u[w],basis:p[w],d:z})};for(let w=1;w<=t.length;w++)(w===t.length||u[w]!==u[m]||p[w]!==p[m])&&(E(m,w-1),m=w);return g}function Fe(t,e,n,a,s){if(t.length===0)return"";const o=Math.min(t.length,e.length,n.length);if(o===0)return"";const i=[];for(let c=0;c<o;c++){const d=a(t[c]).toFixed(2),u=s(n[c]).toFixed(2);i.push(`${c===0?"M":"L"}${d},${u}`)}for(let c=o-1;c>=0;c--){const d=a(t[c]).toFixed(2),u=s(e[c]).toFixed(2);i.push(`L${d},${u}`)}return i.push("Z"),i.join(" ")}function wo(t,e,n,a){const s=[];for(const o of e){const{bandLo:i,bandHi:c,bandKind:d}=o;if(!i||!c||d===void 0)continue;const u=[];for(let f=o.from;f<=o.to&&f<t.length;f++)u.push(t[f]);const p=Fe(u,i,c,n,a);p!==""&&s.push({d:p,kind:d})}return s}function pe(t,e,n,a){if(t===e){const u=(n+a)/2;return()=>u}const s=t>0?t:1e-9,o=e>s?e:s*10,i=Math.log10(s),d=Math.log10(o)-i;if(d===0){const u=(n+a)/2;return()=>u}return u=>{const p=u>0?u:s;return n+(Math.log10(p)-i)/d*(a-n)}}function $o(t,e,n=5){if(!(t>0)||!(e>0)||e<=t)return Zt(t,e,n);const a=Math.log10(t),s=Math.log10(e);if(s-a<1)return Zt(t,e,n);const i=Math.ceil(a),c=Math.floor(s),d=Math.max(1,Math.ceil((c-i+1)/n)),u=[];for(let p=i;p<=c;p+=d)u.push(10**p);return u.length>0?u:[t,e]}const Xt=56;function ze(t,e,n,a){const s=Math.max(0,Math.min(e-1,Math.floor(n))),o=Math.max(0,Math.min(e-1,Math.floor(a))),i=Math.min(e-1,s+1),c=Math.min(e-1,o+1),d=Math.max(0,Math.min(1,n-s)),u=Math.max(0,Math.min(1,a-o)),p=t[o*e+s]+(t[o*e+i]-t[o*e+s])*d,f=t[c*e+s]+(t[c*e+i]-t[c*e+s])*d;return p+(f-p)*u}const he=400,jo=16,Eo=8,fe=.06,Ao=3.3,Io=.6,So=60,Lo=40,xe=[6,12],ge=[48,96],Ot=2;function Wt(t,e,n){const a=Math.max(0,Math.min(1,(n-t)/(e-t)));return a*a*(3-2*a)}function me(t,e){const n=Math.sin(t*127.1+e*311.7)*43758.5453;return n-Math.floor(n)}function be(t,e){const n=e/t,a=t<=e?.07:.09,s=Ao**Math.exp(-((t-e)**2)/(2*a**2*e**2));return n**5*Math.exp(-1.25*n**4)*s}function Xe(t,e,n){if(!(t>0)||!(e>0)||!(n>0)||!Number.isFinite(t+e+n))return[];const a=Math.sqrt(n*2*Math.PI/he),s=be(a,a),o=[];for(let i=-Ot;i<=jo*Ot;i++){const c=he/2**(i/Ot),d=c/t,u=Wt(xe[0],xe[1],d)*(1-Wt(ge[0],ge[1],d))*(1-Wt(e,2*e,c));if(u<=.001)continue;const p=2*Math.PI/c,f=Math.sqrt(n*p),g=Math.sqrt(Math.min(1,be(f,a)/s)),m=(f>=a?fe:fe*g)/Math.sqrt(Ot),E=(So+(me(i,1)-.5)*2*Lo)*Math.PI/180;o.push({kx:p*Math.sin(E),ky:p*Math.cos(E),k:p,amplitude:m/p,omega:f,phase:me(i,2)*2*Math.PI,weight:u})}return o.slice(0,Eo)}function _o(t,e,n,a){let s=0;for(const o of t)s+=o.weight*o.amplitude*Math.cos(o.kx*e+o.ky*n-o.omega*a+o.phase);return s}const zt=Ye(-.25,.3,.92),Co=2.6,To=Ye(zt[0],zt[1],zt[2]+1),Ro=.8,Po=3,Oo=.95,No=.35,Fo=235,zo=.5,Xo=.35;function Ye(t,e,n){const a=Math.hypot(t,e,n);return[t/a,e/a,n/a]}function Yo(t,e,n,a){const{east0:s,north0:o,dx:i,dy:c,seconds:d,colour:u,waves:p,isSea:f}=a,[g,m,E]=zt,[w,v,R]=To,M=p.length,S=new Float64Array(M*e),z=new Float64Array(M*e),B=new Float64Array(M*n),H=new Float64Array(M*n);for(let L=0;L<M;L++){const q=p[L];for(let F=0;F<e;F++){const W=q.kx*(s+(F+.5)*i);S[L*e+F]=Math.cos(W),z[L*e+F]=Math.sin(W)}for(let F=0;F<n;F++){const W=q.ky*(o-(F+.5)*c)-q.omega*d+q.phase;B[L*n+F]=Math.cos(W),H[L*n+F]=Math.sin(W)}}const X=new Float64Array(M),tt=new Float64Array(M),Q=p.map(L=>L.kx*L.weight*L.amplitude),G=p.map(L=>L.ky*L.weight*L.amplitude),et=p.map(L=>Io*L.k*L.weight*L.amplitude);for(let L=0;L<n;L++)for(let q=0;q<e;q++){const F=(L*e+q)*4;if(f&&!f(q,L)){t[F+3]=0;continue}let W=0,C=0,T=1;for(let P=0;P<M;P++){const Z=S[P*e+q],ut=z[P*e+q],kt=B[P*n+L],gt=H[P*n+L];X[P]=Z*kt-ut*gt,tt[P]=ut*kt+Z*gt}for(let P=0;P<M;P++){const Z=M>1?1+Ro*X[(P+Po)%M]:1;W-=Q[P]*X[P]*Z,C-=G[P]*X[P]*Z,T-=et[P]*tt[P]*Z}const it=1/Math.sqrt(W*W+C*C+T*T),xt=(W*g+C*m+T*E)*it-E,rt=1+Co*xt;let nt=0;const U=(W*w+C*v+T*R)*it;if(U>Oo){let P=U;for(let Z=0;Z<7;Z++)P*=P;nt=255*No*P}const V=Math.max(0,rt-1)*Xo,at=Math.min(1,rt)*zo;t[F]=u.r*at+(255-u.r*at)*V+nt,t[F+1]=u.g*at+(255-u.g*at)*V+nt,t[F+2]=u.b*at+(255-u.b*at)*V+nt,t[F+3]=Fo}}function ve(t){const e=n=>{const a=n/255;return a<=.04045?a/12.92:((a+.055)/1.055)**2.4};return .2126*e(t.r)+.7152*e(t.g)+.0722*e(t.b)}function Ho(t,e){const n=ve(e),a=Math.max(t.r,t.g,t.b,1),s=d=>({r:Math.min(255,t.r*d),g:Math.min(255,t.g*d),b:Math.min(255,t.b*d)});let o=0,i=255/a;for(let d=0;d<32;d++){const u=(o+i)/2;ve(s(u))<n?o=u:i=u}const c=s((o+i)/2);return{r:Math.round(c.r),g:Math.round(c.g),b:Math.round(c.b)}}const Bo=192,Do=30,Go="--color-info-mark",Wo=.42;function Ko(t,e){const n=t.view==="plan",a=e.scaleX,s=e.scaleYPrimary,o=1/(a(1)-a(0)),i=1/(s(1)-s(0)),c=R=>(R-a(0))*o,d=R=>(R-s(0))*i,u=Math.min(a(t.bounds.x0),a(t.bounds.x1)),p=Math.max(a(t.bounds.x0),a(t.bounds.x1)),f=Math.min(s(t.bounds.y0),s(t.bounds.y1)),g=Math.max(s(t.bounds.y0),s(t.bounds.y1)),m=n?u:Math.max(e.plotX0,u),E=n?p:Math.min(e.plotX1,p),w=n?f:Math.max(e.plotY0,f),v=n?g:Math.min(e.plotY1,g);return n&&(p<e.plotX0||u>e.plotX1||g<e.plotY0||f>e.plotY1)||!(E-m>=1&&v-w>=1)||!Number.isFinite(o+i)?null:{left:m,top:w,width:E-m,height:v-w,x0:c(m),x1:c(E),y0:d(v),y1:d(w)}}function ye(t,e){if(!e)return null;t.fillStyle=e;const n=/^#([0-9a-f]{6})$/i.exec(String(t.fillStyle));if(!n)return null;const a=Number.parseInt(n[1],16);return{r:a>>16&255,g:a>>8&255,b:a&255}}function Vo(t,e,n){const a=ye(e,getComputedStyle(t).getPropertyValue(Go).trim());if(!a)return null;const s=n?ye(e,n):null;return s?Ho(s,a):a}function Uo(t,e,n,a,s,o){const i=Xt,c=(n.x1-n.x0)/i,d=(n.y1-n.y0)/i,u=e.sea,p=a.scaleYPrimary(e.bounds.y0)<a.scaleYPrimary(e.bounds.y1),f=u&&u.size>1&&u.heights.length>=u.size*u.size?(m,E)=>{const w=p?E:i-1-E;return ze(u.heights,u.size,m/(i-1)*(u.size-1),w/(i-1)*(u.size-1))<0}:void 0,g=t.createImageData(i,i);Yo(g.data,i,i,{east0:e.origin.east+n.x0,north0:e.origin.north+n.y1,dx:c,dy:d,seconds:s,colour:o,waves:Xe(Math.max(c,d),n.x1-n.x0,e.gravity),isSea:f}),t.putImageData(g,0,0)}function qo(t,e,n,a,s){const{width:o,height:i}=t.canvas,c=Zo(e,n,o),d=c.length>1?(c[c.length-1]-c[0])/(c.length-1):n.x1-n.x0,u=Xe(d,n.x1-n.x0,e.gravity),p=(e.bearingDeg??90)*Math.PI/180,f=E=>(E-n.x0)/(n.x1-n.x0)*o,g=E=>(n.y1-E)/(n.y1-n.y0)*i;t.clearRect(0,0,o,i),t.beginPath(),c.forEach((E,w)=>{const v=_o(u,e.origin.east+E*Math.sin(p),e.origin.north+E*Math.cos(p),a);w===0?t.moveTo(f(E),g(v)):t.lineTo(f(E),g(v))});const m=`${s.r}, ${s.g}, ${s.b}`;t.strokeStyle=`rgba(${m}, 0.9)`,t.lineWidth=1,t.stroke(),t.lineTo(f(c[c.length-1]),i),t.lineTo(f(c[0]),i),t.closePath(),t.fillStyle=`rgba(${m}, ${Wo})`,t.fill()}function Zo(t,e,n){const a=(t.samples??[]).filter(s=>s>e.x0&&s<e.x1);return t.samples&&t.samples.length>1?[e.x0,...a,e.x1]:Array.from({length:n+1},(s,o)=>e.x0+o/n*(e.x1-e.x0))}function Qo({layer:t,frame:e}){const n=Ko(t,e),a=j.useRef(null),s=j.useRef(null);s.current=n?{layer:t,at:n,frame:e}:null;const o=n?t.view==="plan"?Xt:Math.max(1,Math.min(Bo,Math.round(n.width))):0,i=n?t.view==="plan"?Xt:Math.max(1,Math.round(n.height*o/n.width)):0,c=t.tint;return j.useEffect(()=>{const d=a.current,u=d?.getContext("2d")??null;if(!d||!u||o===0||i===0)return;const p=Vo(d,u,c);if(!p)return;const f=()=>{const M=s.current;if(!M)return;const S=Date.now()/1e3;M.layer.view==="plan"?Uo(u,M.layer,M.at,M.frame,S,p):qo(u,M.layer,M.at,S,p)};if(f(),typeof window.matchMedia!="function"||window.matchMedia("(prefers-reduced-motion: reduce)").matches||typeof requestAnimationFrame!="function")return;let m=!0;const E=typeof IntersectionObserver=="function"?new IntersectionObserver(M=>{m=M.some(S=>S.isIntersecting)}):null;E?.observe(d);let w=Number.NEGATIVE_INFINITY,v=0;const R=M=>{v=requestAnimationFrame(R),!(!m||document.hidden||M-w<1e3/Do)&&(w=M,f())};return v=requestAnimationFrame(R),()=>{cancelAnimationFrame(v),E?.disconnect()}},[o,i,c]),n?l.jsx("g",{"aria-hidden":"true","data-plot-layer":t.id,"data-plot-layer-kind":"water",children:l.jsx("foreignObject",{x:n.left,y:n.top,width:n.width,height:n.height,children:l.jsx("canvas",{ref:a,width:o,height:i,style:{display:"block",width:"100%",height:"100%",imageRendering:t.view==="plan"?"pixelated":"auto"}})})}):null}const Jo={faint:.45,normal:.85,bright:1},tr=1.5,er=5,nr=.9,Et=7,At=6,ke=10,It=9,bt=12,or=9,rr=13,ar=.1,Kt=5,sr=.5,ir=.5;function dt(t){return kn[t.tone??"neutral"]}function St(t){return yn[t.tone??"neutral"]}function ot(t){return Jo[t.emphasis??"normal"]}function st(t,e){return e.axis==="secondary"?t.scaleYSecondary:t.scaleYPrimary}function cr(t){const e=t.axis==="secondary"?"secondary":"primary";switch(t.kind){case"series":return{xs:t.points.map(n=>n.x),ys:t.points.map(n=>n.y),axis:e};case"region":return{xs:[...t.boundary,...t.boundaryHigh??[]].map(n=>n.x),ys:[...t.boundary,...t.boundaryHigh??[]].map(n=>n.y),axis:e};case"rule":return t.along==="y"?{xs:[],ys:[t.value],axis:e}:{xs:[t.value],ys:[],axis:e};case"marker":case"annotation":return{xs:[t.at.x],ys:[t.at.y],axis:e};default:return{xs:[],ys:[],axis:e}}}const lr=5.8,vt=11,Me=4;function dr(t,e){const n=e.text.length*lr,{frame:a}=e,s=e.anchorX+e.gap,o=s+n<=a.plotX1-4?"start":"end",i=o==="start"?s:e.anchorX-e.gap,c=o==="start"?i:i-n,d=c+n,u=f=>t.some(g=>c<g.x1&&d>g.x0&&f-vt<g.y1&&f+2>g.y0);let p=e.anchorY+3;for(let f=0;f<Me&&u(p);f++)p+=vt;if(u(p)){p=e.anchorY+3;for(let f=0;f<Me&&u(p);f++)p-=vt}return p=Math.min(Math.max(p,a.plotY0+vt),a.plotY1-vt),t.push({x0:c,x1:d,y0:p-vt,y1:p+2}),{x:i,y:p,anchor:o}}function ur(t){return t.map((e,n)=>`${n===0?"M":"L"}${e.x.toFixed(2)},${e.y.toFixed(2)}`).join(" ")}function pr(t){if(t.length===0)return"";const e=[`M${t[0].x.toFixed(2)},${t[0].y.toFixed(2)}`];for(let n=1;n<t.length;n++)e.push(`H${t[n].x.toFixed(2)}`,`V${t[n].y.toFixed(2)}`);return e.join(" ")}function He(t,e,n){if(t.length===0)return[];const a=t[0],s=t[t.length-1],o=[...t];if(e==="right"||e==="left"){const i=e==="right"?n.plotX1:n.plotX0;o.push({x:i,y:s.y},{x:i,y:a.y})}else{const i=e==="above"?n.plotY0:n.plotY1;o.push({x:s.x,y:i},{x:a.x,y:i})}return o}function hr(t,e){const n=[];for(const a of t){if(a.kind==="relief"||a.kind==="water"){const i=st(e,a),{x0:c,y0:d,x1:u,y1:p}=a.bounds;n.push([{x:e.scaleX(c),y:i(d)},{x:e.scaleX(u),y:i(d)},{x:e.scaleX(u),y:i(p)},{x:e.scaleX(c),y:i(p)}]);continue}if(a.kind!=="region"||a.hatched)continue;const s=st(e,a),o=a.boundary.map(i=>({x:e.scaleX(i.x),y:s(i.y)}));if(!(o.length<2))if(a.side==="between"){if(!a.boundaryHigh)continue;n.push([...o,...a.boundaryHigh.map(i=>({x:e.scaleX(i.x),y:s(i.y)})).reverse()])}else n.push(He(o,a.side,e))}return(a,s)=>n.some(o=>{let i=!1;for(let c=0,d=o.length-1;c<o.length;d=c++){const u=o[c],p=o[d];u.y>s!=p.y>s&&a<(p.x-u.x)*(s-u.y)/(p.y-u.y)+u.x&&(i=!i)}return i})}function fr({layer:t,frame:e}){if(t.stops.length===0)return null;const n=st(e,t),a=t.along==="y"?e.plotY1-e.plotY0:e.plotX1-e.plotX0;if(a<=0)return null;const s=t.along==="y"?e.plotY0:e.plotX0,o=t.along==="y"?n:e.scaleX,i=t.maxOpacity??ir,c=t.tint??dt(t),d=`plot-field-${t.id}-${e.uid}`,u=`plot-field-blur-${t.id}-${e.uid}`,p=t.stops.map(f=>({offset:(o(f.at)-s)/a*100,intensity:Math.max(0,Math.min(1,f.intensity))})).sort((f,g)=>f.offset-g.offset);return l.jsxs(l.Fragment,{children:[l.jsxs("defs",{children:[l.jsx("linearGradient",{id:d,x1:"0%",y1:"0%",x2:t.along==="x"?"100%":"0%",y2:t.along==="y"?"100%":"0%",children:p.map((f,g)=>l.jsx("stop",{offset:`${f.offset.toFixed(2)}%`,stopColor:c,stopOpacity:i*f.intensity},g))}),t.blur!==void 0&&l.jsx("filter",{id:u,children:l.jsx("feGaussianBlur",{stdDeviation:t.blur})})]}),l.jsx("rect",{"data-plot-layer":t.id,"data-plot-layer-kind":"field",x:e.plotX0,y:e.plotY0,width:e.plotX1-e.plotX0,height:e.plotY1-e.plotY0,fill:`url(#${d})`,filter:t.blur!==void 0?`url(#${u})`:void 0})]})}const xr=6,yt=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function gr(t){const e=Math.max(0,Math.min(1,t));for(let n=1;n<yt.length;n++)if(e<=yt[n][0]){const[a,s]=yt[n-1],[o,i]=yt[n],c=o>a?(e-a)/(o-a):0;return[Math.round(s[0]+(i[0]-s[0])*c),Math.round(s[1]+(i[1]-s[1])*c),Math.round(s[2]+(i[2]-s[2])*c)]}return yt[yt.length-1][1]}function mr(t,e,n,a,s){const o=t[a*e+s],[i,c,d]=gr(o/(n-1)),u=s>0?t[a*e+s-1]:o,p=a>0?t[(a-1)*e+s]:o,f=u!==o||p!==o?.5:1;return`rgb(${Math.round(i*f)}, ${Math.round(c*f)}, ${Math.round(d*f)})`}function br({layer:t,frame:e}){const{size:n,values:a,bounds:s}=t;if(n<2||a.length<n*n)return null;let o=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;for(let H=0;H<n*n;H++){const X=a[H];if(!Number.isFinite(X))return null;X<o&&(o=X),X>i&&(i=X)}const c=i-o,d=Math.max(2,t.bands??xr),u=st(e,t),p=e.scaleX(s.x0),f=e.scaleX(s.x1),g=u(s.y0),m=u(s.y1),E=Math.min(p,f),w=Math.min(g,m),v=Xt,R=Math.abs(f-p)/v,M=Math.abs(m-g)/v;if(!(R>0)||!(M>0))return null;const S=g<m,z=new Int16Array(v*v);for(let H=0;H<v;H++)for(let X=0;X<v;X++){const tt=ze(a,n,X/(v-1)*(n-1),H/(v-1)*(n-1)),Q=c>0?(tt-o)/c:.5;z[H*v+X]=Math.max(0,Math.min(d-1,Math.floor(Q*d)))}const B=[];for(let H=0;H<v;H++){const X=S?H:v-1-H;let tt=0,Q="";for(let G=0;G<=v;G++){const et=G<v?mr(z,v,d,H,G):"";if(G===0){Q=et;continue}et===Q&&G<v||(B.push(l.jsx("rect",{x:E+tt*R,y:w+X*M,width:(G-tt)*R+.5,height:M+.5,fill:Q},`${H}-${tt}`)),tt=G,Q=et)}}return l.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"relief",opacity:ot(t),"aria-hidden":"true",children:B})}function vr({layer:t,frame:e}){const n=j.useId(),a=st(e,t),s=u=>({x:e.scaleX(u.x),y:a(u.y)}),o=t.boundary.map(s);if(o.length<2)return null;const i=t.side==="between"?[...o,...(t.boundaryHigh??[]).map(s).reverse()]:He(o,t.side,e);if(t.side==="between"&&!t.boundaryHigh)return null;const c=t.side==="right"?e.plotX1-4:t.side==="left"?e.plotX0+11:o[o.length-1].x,d=e.plotY1-34;return l.jsxs(l.Fragment,{children:[t.hatched&&l.jsx("defs",{children:l.jsx("pattern",{id:n,width:Kt,height:Kt,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:l.jsx("line",{x1:0,y1:0,x2:0,y2:Kt,stroke:dt(t),strokeWidth:1,strokeOpacity:t.opacity??sr})})}),l.jsx("polygon",{"data-plot-layer":t.id,"data-plot-layer-kind":"region","data-hatched":t.hatched?"":void 0,points:i.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)}`).join(" "),fill:t.hatched?`url(#${n})`:dt(t),fillOpacity:t.hatched?void 0:t.opacity??ar}),e.labels&&t.label&&l.jsx("text",{x:c,y:d,transform:`rotate(-90 ${c} ${d})`,fontSize:or,letterSpacing:"0.14em",fill:"var(--color-text-muted)",children:t.label})]})}function yr({layer:t,frame:e}){const n=st(e,t),a=t.points.map(o=>({x:e.scaleX(o.x),y:n(o.y)}));if(a.length===0)return null;const s=tr*(t.weight??1);return t.style==="scatter"?l.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",fill:dt(t),opacity:ot(t),children:a.map((o,i)=>l.jsx("circle",{cx:o.x,cy:o.y,r:s},i))}):l.jsx("path",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",d:t.style==="step"?pr(a):ur(a),fill:"none",stroke:dt(t),strokeOpacity:ot(t),strokeWidth:s,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:t.dashed?"5 3.5":void 0})}function kr({layer:t,frame:e}){const n=st(e,t),a=t.dashed??!0,s=dt(t),o=t.along==="y",i=o?n(t.value):e.scaleX(t.value);return l.jsxs(l.Fragment,{children:[l.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"rule",x1:o?e.plotX0:i,x2:o?e.plotX1:i,y1:o?i:e.plotY0,y2:o?i:e.plotY1,stroke:s,strokeOpacity:ot(t),strokeWidth:1,strokeDasharray:a?"4 3":void 0}),e.labels&&t.label&&l.jsx("text",{x:o?e.plotX1-4:i+3,y:o?i-3:e.plotY0+10,textAnchor:o?"end":"start",fill:St(t),fontSize:It,children:t.label})]})}function Mr({layer:t,frame:e,placed:n}){const a=st(e,t),s=e.scaleX(t.at.x),o=a(t.at.y),i=t.across??"x",c=dt(t),d=e.labels&&t.label?dr(n,{anchorX:s,anchorY:o,gap:Et+3,text:t.label,frame:e}):null;return l.jsxs(l.Fragment,{children:[l.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"annotation",x1:i==="x"?s-Et:s,x2:i==="x"?s+Et:s,y1:i==="x"?o:o-Et,y2:i==="x"?o:o+Et,stroke:c,strokeOpacity:ot(t),strokeWidth:1.75,strokeLinecap:"round"}),d&&t.label&&l.jsx("text",{x:d.x,y:d.y,textAnchor:d.anchor,fontSize:It,letterSpacing:"0.05em",fill:St(t),fillOpacity:ot(t),children:t.label})]})}function wr({layer:t,frame:e}){const n=st(e,t),a=e.scaleX(t.at.x),s=n(t.at.y)+(t.offsetPx??0),o=er*(t.scale??1),i=dt(t),c=t.shape??"dot",d={"data-plot-layer":t.id,"data-plot-layer-kind":"marker",opacity:ot(t)},u=c==="vessel"?l.jsx("g",{...d,children:l.jsx(dn,{state:t.markState??"current",x:a,y:s,r:o*nr,keyline:!0})}):c==="dot"?l.jsx("circle",{...d,cx:a,cy:s,r:o,fill:i,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):c==="ring"?l.jsx("circle",{...d,cx:a,cy:s,r:o,fill:"none",stroke:i,strokeWidth:1.5}):c==="cross"?l.jsx("path",{...d,d:`M${a-o},${s} L${a+o},${s} M${a},${s-o} L${a},${s+o}`,stroke:i,strokeWidth:1.5,strokeLinecap:"round"}):l.jsx("polyline",{...d,points:c==="chevron-up"?`${a-o},${s+o*.5} ${a},${s-o*.5} ${a+o},${s+o*.5}`:`${a-o},${s-o*.5} ${a},${s+o*.5} ${a+o},${s-o*.5}`,fill:"none",stroke:i,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"});return l.jsxs(l.Fragment,{children:[u,e.labels&&t.label&&l.jsx("text",{x:a+o+3,y:s+3,fontSize:It,fill:St(t),fillOpacity:ot(t),children:t.label})]})}function $r({layer:t,frame:e,row:n,edges:a}){const s=t.caption?2:1;if(t.anchor==="left-edge"||t.anchor==="right-edge"){const g=t.anchor==="left-edge"?e.plotX0+At+n*bt:e.plotX1-At-n*bt,m=e.plotY1-34;return l.jsx("text",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",x:g,y:m,transform:`rotate(-90 ${g} ${m})`,fontSize:It,letterSpacing:"0.14em",fill:St(t),fillOpacity:ot(t),children:t.text})}const o=t.anchor.startsWith("top"),i=t.anchor.endsWith("right"),c=g=>At+(g?rr:0),d=i?e.plotX1-c(a.right):e.plotX0+c(a.left),u=n*(s*bt+2),p=o?e.plotY0+At+ke+u:e.plotY1-At-u,f=p-bt;return l.jsxs("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",textAnchor:i?"end":"start",children:[t.caption&&l.jsx("text",{x:d,y:o?p:f,fontSize:It,letterSpacing:"0.05em",fill:"var(--color-text-faint)",children:t.caption}),l.jsx("text",{x:d,y:t.caption&&o?p+bt:p,fontSize:ke,fontWeight:700,fill:St(t),fillOpacity:ot(t),children:t.text})]})}const we={relief:-1,field:0,region:1,water:1.5,series:2,rule:3,annotation:4,marker:5,caption:6},jr={relief:"background",water:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function Vt({layers:t,frame:e,pass:n}){const a=t.map((c,d)=>({layer:c,index:d})).filter(({layer:c})=>jr[c.kind]===n).sort((c,d)=>we[c.layer.kind]-we[d.layer.kind]||(c.layer.z??0)-(d.layer.z??0)||c.index-d.index),s=new Map,o=[],i={left:t.some(c=>c.kind==="caption"&&c.anchor==="left-edge"||c.kind==="region"&&c.side==="left"&&!!c.label),right:t.some(c=>c.kind==="caption"&&c.anchor==="right-edge"||c.kind==="region"&&c.side==="right"&&!!c.label)};return l.jsx(l.Fragment,{children:a.map(({layer:c,index:d})=>{const u=`${c.id}-${d}`;switch(c.kind){case"relief":return l.jsx(br,{layer:c,frame:e},u);case"water":return l.jsx(Qo,{layer:c,frame:e},u);case"field":return l.jsx(fr,{layer:c,frame:e},u);case"region":return l.jsx(vr,{layer:c,frame:e},u);case"series":return l.jsx(yr,{layer:c,frame:e},u);case"rule":return l.jsx(kr,{layer:c,frame:e},u);case"annotation":return l.jsx(Mr,{layer:c,frame:e,placed:o},u);case"marker":return l.jsx(wr,{layer:c,frame:e},u);case"caption":{const p=s.get(c.anchor)??0;return s.set(c.anchor,p+1),l.jsx($r,{layer:c,frame:e,row:p,edges:i},u)}default:return null}})})}function Er(t){return t.map(e=>e.description).filter(e=>typeof e=="string"&&e.length>0)}const $e=11,Nt=3,Ft=4,je=(t,e)=>t.x0<e.x1&&e.x0<t.x1&&t.y0<e.y1&&e.y0<t.y1;function Ar(t,e,n,a,s){let o=0,i=1;const c=n-t,d=a-e,u=[[-c,t-s.x0],[c,s.x1-t],[-d,e-s.y0],[d,s.y1-e]];for(const[p,f]of u){if(p===0&&f<0)return!1;if(p!==0){const g=f/p;p<0?o=Math.max(o,g):i=Math.min(i,g)}}return o<=i}function Ir(t,e){for(let n=1;n<t.cx.length;n++){const a=[t.cx[n-1],t.cy[n-1],t.cx[n],t.cy[n]];if(a.every(Number.isFinite)&&Ar(a[0],a[1],a[2],a[3],e))return!0}return!1}function Sr({labels:t,plot:e,obstacles:n,traces:a}){const s=[],o=new Map;for(const i of t){const c={y0:i.lineY-Nt-$e,y1:i.lineY-Nt},d={y0:i.lineY+Nt,y1:i.lineY+Nt+$e},u={x0:e.x1-Ft-i.width,x1:e.x1-Ft},p={x0:e.x0+Ft,x1:e.x0+Ft+i.width},f=[{...u,...c,anchor:"end"},{...u,...d,anchor:"end"},{...p,...c,anchor:"start"},{...p,...d,anchor:"start"}];let g=null;for(const m of f){if(!(m.x0>=e.x0&&m.x1<=e.x1&&m.y0>=e.y0&&m.y1<=e.y1)||s.some(v=>je(m,v)))continue;const w=2*n.filter(v=>je(m,v)).length+a.filter(v=>Ir(v,m)).length;(g===null||w<g.cost)&&(g={spot:m,cost:w})}if(g===null){o.set(i.id,null);continue}s.push(g.spot),o.set(i.id,{x:g.spot.anchor==="end"?g.spot.x1:g.spot.x0,y:g.spot.y1-2,anchor:g.spot.anchor})}return o}const Lr=2.5;function _r(t,e){if(t.length===0)return!1;const n=t[t.length-1]-e;return n===0?!0:t.length===1?!1:Math.sign(t[0]-e)!==Math.sign(n)}function Cr(t,e){return t==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:e?t==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const Tr=(t,e)=>Ne(t-e[0],e[1]-e[0]),Da=(t,e)=>Ne((t-e[0])*1e3,(e[1]-e[0])*1e3),Ut={top:10,bottom:28,left:50};function Rr(t,e,n){const a=(o,i,c)=>Math.max(o,Math.min(c,i)),s=a(30,Math.round(t*.18),Ut.left);return{top:Ut.top,right:n?s:a(14,Math.round(t*.07),20),bottom:e<150?20:Ut.bottom,left:s}}const Ee=t=>t.length*6.5+6,Pr=4,Or=.4,Nr=26;function Fr(t,e,n,a,s=1){const o=[],i=Nr*Math.max(.5,Math.min(2,s));for(let c=t+i/2;c<e;c+=i)for(let d=n+i/2;d<a;d+=i)o.push({key:`sg-${Math.round(c)}-${Math.round(d)}`,x:c,y:d});return o}const zr=120,Xr=90,Yr=70,Hr=35,Br=2,Dr=14,Gr=10,qt=36,Wr=12,Kr=8,Vr=2,ft=14,Be=6,De=12,Ae=10,Ur=.2,Ie=.6,Se="5 3",qr=.15,Zr=.45,Qr="the value is inside the shaded region";function Jr(t){return(t.type??"line")==="band"&&t.data.y2?[...t.data.y,...t.data.y2]:t.data.y}function ta({series:t,thresholds:e,heading:n,crosshairOn:a,yTickFormat:s}){const o=c=>c*Be,i=[];for(const c of t)i.push(o(c.label.length)+8),a&&i.push(Math.max(o(c.label.length),o(Dr+Gr))+qt);for(const c of e){if(c.kind==="marker")continue;const d=c.label??s(c.value);i.push(o(d.length)+De+8),a&&i.push(Math.max(o(c.kind.length),o(d.length))+qt)}return a&&i.push(Math.max(...n.map(c=>o(c.length)))+qt),Math.max(0,...i)+Wr}function Ga({series:t,xDomain:e,yDomainPrimary:n,yDomainSecondary:a,xTickFormat:s=Tr,yTickFormat:o=ea,yScalePrimary:i="linear",yScaleSecondary:c="linear",thresholds:d,legend:u="overlay",hideXAxis:p=!1,spatial:f=!1,gridScale:g=1,layers:m,"aria-label":E,crosshair:w=!1,width:v,height:R}){const M=j.useId(),S=w&&!f&&t.some(r=>r.data.x.length>0),[z,B]=j.useState(null),[H,X]=j.useState(!1),[tt,Q]=j.useState(""),G=v,et=R,L=t.filter(r=>r.axis==="primary"&&r.data.x.length>0),q=t.filter(r=>r.axis==="secondary"&&r.data.x.length>0),F=q.length>0,W=f?{top:1,right:1,bottom:1,left:1}:Rr(G,et,F),C=W.top,T=et-W.bottom,it=T-C,xt=j.useMemo(()=>{const r={primary:[],secondary:[]};for(const h of m??[]){const x=cr(h);r[x.axis].push(...x.ys)}return r},[m]),rt=j.useMemo(()=>Le(L,n,i,xt.primary),[L,n,i,xt]),nt=j.useMemo(()=>Le(q,a,c,xt.secondary),[q,a,c,xt]),U=i==="log"?pe(rt[0],rt[1],T,C):Gt(rt[0],rt[1],T,C),V=c==="log"?pe(nt[0],nt[1],T,C):Gt(nt[0],nt[1],T,C),at=Math.max(2,Math.min(7,Math.round(it/Hr))),P=(r,h,x,k)=>{const $=Math.min(r,h),I=Math.max(r,h),b=(I-$)*1e-6||1e-6,A=_=>_>=$-b&&_<=I+b,O=_=>k==="log"?$o($,I,_):Zt($,I,_);for(let _=x;_<=64;_*=2){const J=O(_).filter(A);if(J.length<2)continue;if(J.length<=x)return J;const jt=(J.length-1)/(x-1),Pt=Array.from({length:x},(Ma,sn)=>J[Math.round(sn*jt)]);return Array.from(new Set(Pt))}return[$,I]},Z=P(rt[0],rt[1],at,i==="log"?"log":"linear"),ut=F?P(nt[0],nt[1],at,c==="log"?"log":"linear"):[],kt=(r,h)=>r.length===0?h:Math.max(h,Math.min(Math.round(G*Or),Math.max(...r.map(x=>Ee(o(x,r))))+Pr)),gt=f?W:{left:kt(Z,W.left),right:F?kt(ut,W.right):W.right},N=gt.left,Ge=S||u!=="none"&&t.length>0||(d??[]).some(r=>r.label),Jt=f||!Ge?{placement:"overlay"}:un({width:G,height:et,contentWidth:ta({series:t,thresholds:d??[],heading:[e[0],e[1]].map(r=>s(r,e)),crosshairOn:S,yTickFormat:o})}),te=Jt.placement==="beside"?Jt.columnWidth:0,D=G-gt.right-te,ct=D-N,pt=ct>=zr&&it>=Xr,K=te>0?{x0:D+(F?gt.right:0)+Kr,y0:C,x1:G-Vr,y1:T}:void 0,Y=Gt(e[0],e[1],N,D),We=Math.max(2,Math.min(8,Math.round(ct/Yr))),Mt=P(e[0],e[1],We,"linear"),Ke=j.useMemo(()=>{const r=[],h=Mt.length-1;if(h<0)return r;const x=Ee,k=6,$=b=>{const A=Mt[b],O=s(A,e,Mt),_=Y(A),J=x(O),jt=b===0?"start":b===h?"end":"middle",Pt=jt==="start"?_:jt==="end"?_-J:_-J/2;return{x:_,text:O,anchor:jt,leftEdge:Pt,rightEdge:Pt+J}},I=$(0);if(r.push({x:I.x,text:I.text,anchor:I.anchor}),h>=1){const b=$(h);if(b.leftEdge>=I.rightEdge+k){let A=I.rightEdge;for(let O=1;O<h;O++){const _=$(O);_.leftEdge>=A+k&&_.rightEdge<=b.leftEdge-k&&(r.push({x:_.x,text:_.text,anchor:_.anchor}),A=_.rightEdge)}r.push({x:b.x,text:b.text,anchor:b.anchor})}}return r},[Mt,e,Y,s]),ee=(r,h)=>{const x=new Set,k=r.length;if(k===0||(x.add(0),k===1))return x;const $=16,I=h(r[0]),b=h(r[k-1]);if(Math.abs(b-I)>=$){let A=I;for(let O=1;O<k-1;O++){const _=h(r[O]);Math.abs(_-A)>=$&&Math.abs(b-_)>=$&&(x.add(O),A=_)}x.add(k-1)}return x},Ve=ee(Z,U),Ue=ee(ut,V),lt=j.useMemo(()=>t.filter(r=>r.data.x.length>0).map(r=>{const h=r.axis==="primary"?U:V,x=r.type??"line";if(x==="band")return r.data.y2?{id:r.id,kind:"band",color:r.color,opacity:r.fillOpacity??Ur,d:Fe(r.data.x,r.data.y,r.data.y2,Y,h)}:{id:r.id,kind:"noop"};if(x==="scatter"){const b=r.data.x.map((A,O)=>({cx:Y(A),cy:h(r.data.y[O])}));return{id:r.id,kind:"scatter",color:r.color,points:b}}const k=x==="step"?ko:ue,$=(r.data.bridges??[]).filter(b=>yo(r.data.x,r.data.y,b,Y,h)),I=[...new Set([...r.data.breaks??[],...$.map(b=>b.to)])].sort((b,A)=>b-A);return{id:r.id,kind:"stroked",color:r.color,dashed:r.dashed??!1,uncertainty:wo(r.data.x,r.data.reckoned??[],Y,h),segments:Mo(r.data.x,r.data.y,Y,h,k,I,r.data.spans,r.data.reckoned),modelled:$.map(b=>({basis:b.basis,d:ue([r.data.x[b.to-1],...b.t,r.data.x[b.to]],[r.data.y[b.to-1],...b.v,r.data.y[b.to]],Y,h)})),tail:r.data.x.length>0&&(r.data.reckoned??[]).some(b=>b.to>=r.data.x.length-1)?{cx:Y(r.data.x[r.data.x.length-1]),cy:h(r.data.y[r.data.y.length-1])}:null,observed:[...new Set($.flatMap(b=>[b.to-1,b.to]))].map(b=>({cx:Y(r.data.x[b]),cy:h(r.data.y[b])}))}}),[t,Y,U,V]),wt=j.useMemo(()=>d?d.map(r=>{const h=r.axis??"primary",x=t.filter($=>$.axis===h&&$.type!=="band"&&!$.dashed),k=r.kind==="limit"?x.some($=>{const I=$.data.y.filter(b=>Number.isFinite(b));return I.length>0&&Oe(I[I.length-1],r.value,r.bad)}):r.kind==="target"&&x.some($=>_r($.data.y,r.value));return{id:r.id,label:r.label,value:r.value,kind:r.kind,passed:k,currency:pn(r.reading,{drawsReckoning:!0}),tone:Cr(r.kind,k),dashed:r.kind!=="marker",y:h==="primary"?U(r.value):V(r.value)}}):[],[d,t,U,V]),_t=j.useMemo(()=>{const r=(h,x,k)=>Math.max(h,Math.min(k,x));return(d??[]).flatMap(h=>{if(h.kind!=="limit"||!Number.isFinite(h.value))return[];const x=h.axis??"primary",k=x==="primary"?U:V,$=k(h.value),I=h.bad==="above"?-1:1,b=h.label||`the limit at ${o(h.value)}`;return t.filter(A=>A.axis===x&&A.data.x.length>0&&(A.type??"line")!=="band"&&!A.dashed).flatMap(A=>bo({y:A.data.y,cx:A.data.x.map(Y),cy:A.data.y.map(k),limit:h.value,limitY:$,bad:h.bad,breaks:A.data.breaks,step:A.type==="step"||A.type==="scatter",minGapPx:ft}).slice(pt?0:-1).map(O=>{const _=o(A.data.y[O.index]),J=s(A.data.x[O.index],e);return{key:`${h.id}-${A.id}-${O.index}`,color:A.color,x:r(N+ft/2+1,O.x-Ae*(O.entered?1:-1),D-ft/2-1),y:r(C+ft/2+1,O.y+I*Ae,T-ft/2-1),text:O.entered?O.spells>1?`${A.label} went past ${b} ${O.spells} times from ${J}, first reading ${_}`:`${A.label} went past ${b} at ${J}, reading ${_}`:`${A.label} was already past ${b} when this window began at ${J}, reading ${_}`}}))})},[d,t,Y,U,V,s,o,e,N,D,C,T,pt]),$t=j.useMemo(()=>{if(!pt)return new Map;const r=ft/2;return Sr({labels:wt.filter(h=>h.label).map(h=>({id:h.id,width:(h.label?.length??0)*Be+(h.currency.held?De:0),lineY:h.y})),plot:K??{x0:N,y0:C,x1:D,y1:T},obstacles:[..._t.map(h=>({x0:h.x-r,y0:h.y-r,x1:h.x+r,y1:h.y+r})),...u==="none"?[]:t.map((h,x)=>({x0:K?K.x0:N+3,y0:C+6+x*16,x1:(K?K.x0:N+3)+Math.min(h.label.length*6+8,K?K.x1-K.x0:ct-6),y1:C+6+x*16+13}))],traces:(K?[]:t).filter(h=>(h.type??"line")!=="band").map(h=>({cx:h.data.x.map(Y),cy:h.data.y.map(h.axis==="primary"?U:V)}))})},[pt,K,wt,_t,u,t,Y,U,V,N,D,C,T,ct]),qe=t.flatMap(r=>{const h=lt.find(b=>b.id===r.id),x=h?.kind==="stroked"?h.modelled.map(b=>b.basis):[],k=r.data.reckoned??[];if(k.length===0&&x.length===0)return[];const I=[...new Set([...k.map(b=>b.basis),...x])].map(b=>`${r.label}: part of this trace is reckoned, ${hn(b)}, not measured`);return k.some(b=>b.bandLo&&b.bandHi)&&I.push(`${r.label}: ${Qr}`),I}),Ze=wt.flatMap(r=>{const h=r.label??r.id,x=[];return r.passed&&r.kind==="limit"&&x.push(`${h}: limit passed`),r.passed&&r.kind==="target"&&x.push(`${h}: target reached`),r.currency.held&&x.push(fn(h,r.currency.caption)),r.label&&!$t.get(r.id)&&x.length===0&&x.push(r.label),x}),ne=[E??"Telemetry line chart",...Er(m??[]),...qe,...Ze].join("; "),Yt=j.useMemo(()=>t.filter(r=>r.data.x.length>0),[t]),Ht=j.useMemo(()=>S?go(Yt):[],[S,Yt]),Ct=Math.min(e[0],e[1]),Tt=Math.max(e[0],e[1]);function oe(r){const h=Yt.map(x=>{const k=xo(x,r),$=x.format??o,I=x.axis==="primary"?U:V,b=(x.type??"line")==="band";return k===null?{id:x.id,label:x.label,color:x.color,value:null}:{id:x.id,label:x.label,color:x.color,value:b&&k.y2!==void 0?`${$(k.y)} to ${$(k.y2)}`:$(k.y),currency:k.currency,modelled:k.currency==="modelled",y:b?void 0:I(k.y)}});if(pt)for(const x of wt)x.kind!=="marker"&&h.push({id:`threshold-${x.id}`,label:x.kind,color:x.tone.label,value:x.label??o(x.value),detail:!0,currency:x.currency.held?x.currency.mark==="modelled"?"modelled":"held":void 0,modelled:x.currency.held&&x.currency.mark==="modelled"});return{heading:s(r,e),rows:h}}function re(r){const{heading:h,rows:x}=oe(r);return[h,...x.map(k=>`${k.label} ${k.value??"no sample"}${k.currency?`, ${k.currency}`:""}`)].join("; ")}const ae=t.filter(r=>(r.type??"line")!=="band").map(r=>({cx:r.data.x.map(Y),cy:r.data.y.map(r.axis==="primary"?U:V)})),Qe=r=>{let h=r,x=Number.POSITIVE_INFINITY;for(const k of Ht)k<Ct||k>Tt||Math.abs(k-r)<x&&(x=Math.abs(k-r),h=k);return h},ht=S&&z!==null&&z.at>=Ct&&z.at<=Tt?Qe(z.at):null,mt=ht===null?null:oe(ht),se=mt!==null&&xn({x:ht===null?0:Y(ht),plot:{x0:N,y0:C,x1:D,y1:T},heading:mt.heading,rows:mt.rows,column:K,traces:ae});function Je(r){const h=r.currentTarget.getBoundingClientRect(),x=r.clientX-h.left;return x<N||x>D?null:e[0]+(x-N)/(D-N)*(e[1]-e[0])}function tn(r){const h=Je(r);if(h===null){B(x=>x?.source==="pointer"?null:x);return}B({at:h,source:"pointer"})}function en(r){const h=Ht.filter(I=>I>=Ct&&I<=Tt),x={ArrowLeft:r.shiftKey?-10:-1,ArrowRight:r.shiftKey?10:1,Home:-h.length,End:h.length};if(r.key==="Escape"){if(z===null)return;r.preventDefault(),B(null),Q("");return}const k=x[r.key];if(k===void 0)return;r.preventDefault();const $=de(h,ht,k);$!==null&&(B({at:$,source:"keys"}),Q(re($)))}function nn(r){try{X(r.currentTarget.matches(":focus-visible"))}catch{X(!0)}if(z!==null)return;const h=de(Ht.filter(x=>x>=Ct&&x<=Tt),null,0);h!==null&&(B({at:h,source:"keys"}),Q(re(h)))}function on(){X(!1),B(r=>r?.source==="keys"?null:r),Q("")}const rn=S?{tabIndex:0,onPointerMove:tn,onPointerLeave:()=>B(r=>r?.source==="pointer"?null:r),onKeyDown:en,onFocus:nn,onBlur:on}:{},Rt={scaleX:Y,scaleYPrimary:U,scaleYSecondary:V,plotX0:N,plotX1:D,plotY0:C,plotY1:T,uid:M,labels:pt},an=f&&m?hr(m,Rt):()=>!1,Bt=`plot-layer-clip-${M}`;if(ct<=0||it<=0)return l.jsx("svg",{width:Math.max(0,G),height:Math.max(0,et),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:l.jsx("title",{children:"Chart too small to render"})});const ie=l.jsxs("svg",{width:G,height:et,role:_t.length>0||S?"group":"img","aria-label":ne,"aria-describedby":S?`${M}-crosshair-hint`:void 0,...rn,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block",...S?{touchAction:"pan-y",outline:H?"2px solid var(--color-focus)":"none",outlineOffset:2}:{}},children:[l.jsx("title",{children:ne}),m&&m.length>0&&l.jsx("defs",{children:l.jsx("clipPath",{id:Bt,children:l.jsx("rect",{x:N,y:C,width:ct,height:it})})}),l.jsx("rect",{x:N,y:C,width:ct,height:it,fill:"var(--color-surface-panel)"}),m&&m.length>0&&l.jsx("g",{clipPath:`url(#${Bt})`,children:l.jsx(Vt,{layers:m,frame:Rt,pass:"background"})}),!f&&Z.map((r,h)=>{const x=U(r);return l.jsxs(Dt.Fragment,{children:[l.jsx("line",{x1:N,y1:x,x2:D,y2:x,stroke:"var(--color-border-subtle)",strokeWidth:1}),Ve.has(h)&&l.jsx("text",{x:N-4,y:x,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:o(r,Z)})]},`py-${h}`)}),!f&&ut.map((r,h)=>Ue.has(h)?l.jsx("text",{x:D+4,y:V(r),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:o(r,ut)},`sy-${h}`):null),!p&&!f&&Mt.map((r,h)=>l.jsx("line",{x1:Y(r),y1:C,x2:Y(r),y2:T,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${h}`)),!p&&!f&&Ke.map((r,h)=>l.jsx("text",{x:r.x,y:T+14,textAnchor:r.anchor,fill:"var(--color-text-faint)",fontSize:11,children:r.text},`xl-${h}`)),f&&Fr(N,D,C,T,g).filter(r=>!an(r.x,r.y)).map(r=>l.jsx("circle",{cx:r.x,cy:r.y,r:1,fill:"var(--color-text-faint)",opacity:.35},r.key)),!f&&l.jsxs(l.Fragment,{children:[l.jsx("line",{x1:N,y1:C,x2:N,y2:T,stroke:"var(--color-border-strong)",strokeWidth:1}),l.jsx("line",{x1:N,y1:T,x2:D,y2:T,stroke:"var(--color-border-strong)",strokeWidth:1}),F&&l.jsx("line",{x1:D,y1:C,x2:D,y2:T,stroke:"var(--color-border-strong)",strokeWidth:1})]}),lt.filter(r=>r.kind==="band").map(r=>l.jsx("path",{d:r.d,fill:r.color,fillOpacity:r.opacity,stroke:"none"},r.id)),lt.filter(r=>r.kind==="stroked").flatMap(r=>r.uncertainty.map((h,x)=>l.jsx("path",{d:h.d,"data-band-kind":h.kind,fill:r.color,fillOpacity:qr,stroke:h.kind==="bound"?r.color:"none",strokeOpacity:h.kind==="bound"?Zr:void 0,strokeWidth:h.kind==="bound"?1:void 0},`${r.id}-band-${x}`))),lt.filter(r=>r.kind==="stroked").flatMap(r=>r.segments.map((h,x)=>l.jsx("path",{d:h.d,"data-stream-status":h.status,"data-reckoning-basis":h.basis,stroke:r.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:h.basis!==void 0?Ie:void 0,strokeDasharray:h.basis!==void 0?Se:r.dashed?"4 3":void 0},`${r.id}-${x}`))),lt.filter(r=>r.kind==="stroked").flatMap(r=>r.modelled.map((h,x)=>l.jsx("path",{d:h.d,"data-reckoning-basis":h.basis,stroke:r.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:Ie,strokeDasharray:Se},`${r.id}-modelled-${x}`))),lt.map(r=>r.kind==="stroked"&&r.tail!==null?l.jsx(gn,{kind:"modelled",x:r.tail.cx,y:r.tail.cy},`${r.id}-tail`):null),lt.filter(r=>r.kind==="stroked").flatMap(r=>r.observed.map((h,x)=>l.jsx("circle",{cx:h.cx,cy:h.cy,r:Lr,fill:r.color,"data-observed-sample":""},`${r.id}-observed-${x}`))),lt.filter(r=>r.kind==="scatter").flatMap(r=>r.points.map((h,x)=>l.jsx("circle",{cx:h.cx,cy:h.cy,r:Br,fill:r.color},`${r.id}-${x}`))),m&&m.length>0&&l.jsx("g",{clipPath:`url(#${Bt})`,children:l.jsx(Vt,{layers:m,frame:Rt,pass:"foreground"})}),wt.map(r=>l.jsxs(Dt.Fragment,{children:[l.jsx("line",{x1:N,y1:r.y,x2:D,y2:r.y,stroke:r.tone.line,strokeWidth:1,strokeDasharray:r.dashed?"4 3":void 0,"data-threshold-kind":r.kind,"data-threshold-passed":r.passed||void 0}),r.label&&$t.get(r.id)&&!(K!==void 0&&se&&r.kind!=="marker")&&l.jsxs("text",{x:$t.get(r.id)?.x,y:$t.get(r.id)?.y,textAnchor:$t.get(r.id)?.anchor,fill:r.tone.label,fontSize:10,children:[r.label,r.currency.held&&l.jsx(mn,{size:10,kind:r.currency.mark??"held"})]})]},r.id)),_t.map(r=>l.jsx(mo,{x:r.x,y:r.y,size:ft,color:r.color,text:r.text},r.key)),u!=="none"&&!se&&t.map((r,h)=>{const x=C+6+h*16;if(x+13>T)return null;const k=K?K.x0:N+3,$=K?K.x1-K.x0:ct-6,I=Math.min(r.label.length*6+8,$),b=Math.max(1,Math.floor((I-8)/6)),A=r.label.length>b?`${r.label.slice(0,Math.max(1,b-1))}...`:r.label;return l.jsxs(Dt.Fragment,{children:[l.jsx("rect",{x:k,y:x,width:I,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),l.jsx("text",{x:k+3,y:x+10,fill:r.color,fontSize:10,children:A})]},r.id)}),m&&m.length>0&&pt&&l.jsx(Vt,{layers:m,frame:Rt,pass:"caption"}),mt!==null&&ht!==null&&l.jsx(bn,{x:Y(ht),plot:{x0:N,y0:C,x1:D,y1:T},heading:mt.heading,rows:mt.rows,column:K,traces:ae})]});return S?l.jsxs(l.Fragment,{children:[ie,l.jsx(ce,{id:`${M}-crosshair-hint`,children:"Use the arrow keys to read the values at each sample"}),l.jsx(ce,{role:"status","aria-live":"polite",children:tt})]}):ie}function Le(t,e,n,a=[]){if(e)return e;if(t.length===0&&a.length===0)return n==="log"?[1,10]:[0,1];let s=[...t.flatMap(Jr),...a];return n==="log"&&(s=s.filter(o=>o>0)),s.length===0?n==="log"?[1,10]:[0,1]:[Math.min(...s),Math.max(...s)]}function ea(t){if(t===0)return"0";if(Math.abs(t)>=1e6)return`${(t/1e6).toFixed(1)}M`;if(Math.abs(t)>=1e3)return`${(t/1e3).toFixed(1)}k`;if(Number.isInteger(t))return String(t);if(Math.abs(t)<.01){const e=Math.floor(Math.log10(Math.abs(t))),n=t/10**e;return Math.abs(n-1)<1e-9?`1e${e}`:`${n.toFixed(1)}e${e}`}return t.toFixed(2)}const Wa=y.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function Ka({state:t,elapsedMs:e}){if(t==="connected")return null;const n=t==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return l.jsxs(Te,{accent:oa[t],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[l.jsx(ra,{children:n}),l.jsxs(aa,{children:["T+",na(e)]})]})}function na(t){const e=Math.max(0,Math.floor(t/1e3)),n=Math.floor(e/3600),a=Math.floor(e%3600/60),s=e%60,o=i=>String(i).padStart(2,"0");return n>0?`${n}:${o(a)}:${o(s)}`:`${o(a)}:${o(s)}`}const oa={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},ra=y.span`
  font-weight: 600;
`,aa=y.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function Va({entries:t}){return t.length===0?null:l.jsxs(ia,{role:"status","aria-live":"polite",children:[l.jsx(ca,{}),l.jsx(la,{children:"SOURCE OFFLINE"}),l.jsx(da,{children:t.map(e=>l.jsxs(ua,{children:[l.jsx(pa,{children:e.name}),l.jsx(ha,{children:e.status}),l.jsx(fa,{children:sa(e.elapsedMs)}),e.onRetry&&l.jsx(_e,{size:"sm",onClick:e.onRetry,"aria-label":`Retry ${e.name} now`,children:"Retry now"})]},e.id))})]})}function sa(t){return Mn(wn("irl:s",t/1e3))}const ia=y.div`
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
`,ca=y.span`
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
`,la=y.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,da=y.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,ua=y.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,pa=y.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,ha=y.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,fa=y.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,Ua=y.div`
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
`,qa=y.div`
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
`,Za=y.div`
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Qa=y.input`
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
`,Ja=y.button`
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
`,ts=y.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,es=y.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,ns=y.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,os=y.button`
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
`,rs=y.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,xa={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},ga={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function ma(t){return xa[t]??ga}function as({label:t}){const e=ma(t);return l.jsx(ba,{$bg:e.bg,$fg:e.fg,$border:e.border,children:t})}const ba=y.span`
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
`;$n({id:"default-dark",name:"Default Dark",theme:vn});function ss({kind:t,local:e,remote:n,remoteLabel:a="Peer"}){const s=t==="major"?"alert":"status",o=t==="major"?"RELOAD REQUIRED":t==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",i=t==="unknown"?`${a} didn't report a version`:`${a} v${n??"?"} ↔ this v${e}`;return l.jsxs(Te,{accent:va[t],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:s,children:[l.jsx(ya,{children:o}),l.jsx(ka,{children:i})]})}const va={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},ya=y.span`
  font-weight: 600;
`,ka=y.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{Da as A,Te as B,vo as C,Fa as D,Ua as E,Ya as F,qa as G,Za as H,Qa as I,Ja as J,ts as K,Ga as L,ns as M,rs as N,os as O,Wa as P,es as R,Ka as S,as as T,ss as V,Oa as a,Na as b,za as c,Xa as d,Ha as e,Ba as f,Vt as g,Va as h,Fe as i,ue as j,Mo as k,ko as l,wo as m,yo as n,He as o,Ne as p,ma as q,pe as r,Gt as s,$o as t,Zt as u,Er as v,cr as w,hr as x,Tr as y,eo as z};
