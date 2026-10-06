import{j as i}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import g,{css as it}from"./ext-styled-components-Br73TgY3.js";import{d as Gt,Z as Ut,C as Vt,a2 as Zt,a4 as qt,a6 as Qt,aq as Jt,aj as to,af as oo,a7 as eo,W as no}from"./reckoningMarkDraw-Bgi-6Vc4.js";import{r as $,R as ht}from"./ext-react-RRA14VTW.js";import{T as ro,d as ao,w as io}from"./streamStatusWord-BHc4K3mg.js";import{v as so}from"./view-clock-formula-B8meVmrF.js";import"./ksp-enum-names-CU5zYXQv.js";import"./screen-Dk9j5YrN.js";import"./lagrange-CbN5oJBK.js";import"./use-transmissions-BbGaoDbZ.js";import"./websocket-transport-klDqlAbO.js";import{r as co}from"./registry-CFsgy3cb.js";import"./index-CnzDwjkh.js";function Rt({accent:t,anchor:o="inline",top:r=12,zIndex:s=999,glow:a,pulse:n=!1,role:l="status",ariaLive:c,onClick:d,interactive:p=!1,children:u}){const f=c??(l==="alert"?"assertive":"polite");return o==="top"?i.jsxs(lo,{$accent:t,$top:r,$zIndex:s,$glow:a,role:l,"aria-live":f,children:[i.jsx(Lt,{$accent:t,$pulse:n}),u]}):i.jsxs(po,{as:d?"button":"div",type:d?"button":void 0,$accent:t,$glow:a,$clickable:!!d,$interactive:p,role:l,"aria-live":f,onClick:d,children:[i.jsx(Lt,{$accent:t,$pulse:n}),u]})}const lo=g.div`
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
  ${t=>t.$glow?it`box-shadow: ${t.$glow};`:""}
`,po=g.div`
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
  ${t=>t.$glow?it`box-shadow: ${t.$glow};`:""}

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
`,Lt=g.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${t=>t.$accent};
  flex-shrink: 0;

  ${t=>t.$pulse&&it`
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
`;function En({children:t}){return i.jsx(uo,{children:t})}const uo=g.div`
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
`,ho=2e3,fo={copied:t=>`Copied ${t}`,failed:()=>"Could not copy, select the text instead"};function Sn({command:t,label:o}){const[r,s]=$.useState("idle"),a=$.useRef(void 0);$.useEffect(()=>()=>clearTimeout(a.current),[]);async function n(){let l="copied";try{await navigator.clipboard.writeText(t)}catch{l="failed"}s(l),clearTimeout(a.current),a.current=setTimeout(()=>s("idle"),ho)}return i.jsxs(xo,{children:[i.jsx(go,{role:"group","aria-label":o,tabIndex:0,children:i.jsx(mo,{children:t})}),i.jsx(Gt,{variant:"ghost",type:"button",onClick:()=>void n(),"aria-label":`Copy ${o}`,children:r==="copied"?"Copied":"Copy"}),i.jsx(Ut,{visuallyHidden:!0,children:fo[r]?.(o)})]})}const xo=g.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,go=g.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,mo=g.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function bo(t,o){if(!o)return!0;const r=o.toLowerCase();return(t.label??t.key).toLowerCase().includes(r)||t.key.toLowerCase().includes(r)}function Cn({keys:t,value:o,onChange:r,placeholder:s="Search...",emptyHint:a="No matches"}){const[n,l]=$.useState(""),c=$.useMemo(()=>t.filter(u=>bo(u,n)),[t,n]),d=$.useMemo(()=>{const u=new Map;for(const f of c){const x=f.group??"Other";let v=u.get(x);v||(v=[],u.set(x,v)),v.push(f)}return[...u.entries()].sort(([f],[x])=>f.localeCompare(x))},[c]),p=u=>{const f=new Set(o);f.has(u)?f.delete(u):f.add(u),r(f)};return i.jsxs(vo,{children:[i.jsx(ko,{type:"text",value:n,placeholder:s,onChange:u=>l(u.target.value)}),i.jsx(yo,{children:d.length===0?i.jsx(Co,{children:a}):d.map(([u,f])=>i.jsxs($o,{children:[i.jsx(wo,{children:u}),f.map(x=>{const v=o.has(x.key),D=`dkmp-${x.key}`;return i.jsxs(jo,{$checked:v,children:[i.jsx(Mo,{id:D,type:"checkbox",checked:v,onChange:()=>p(x.key)}),i.jsxs(Io,{htmlFor:D,children:[i.jsx(Lo,{$checked:v,children:v&&i.jsx(Vt,{size:11,strokeWidth:3})}),i.jsx(Eo,{children:x.label??x.key}),x.unit&&i.jsx(So,{children:x.unit})]})]},x.key)})]},u))})]})}const vo=g.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,ko=g.input`
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
`,yo=g.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,$o=g.div``,wo=g.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,jo=g.div`
  background: ${({$checked:t})=>t?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,Mo=g.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,Io=g.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,Lo=g.span`
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
`,Eo=g.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,So=g.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,Co=g.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function Tn({show:t,message:o,hint:r,children:s}){return t?i.jsxs(To,{children:[i.jsx(Fo,{"aria-hidden":"true",children:s}),i.jsxs(Ao,{role:"status","aria-live":"polite",children:[i.jsx(Oo,{children:o}),r&&i.jsx(_o,{children:r})]})]}):i.jsx(i.Fragment,{children:s})}const To=g.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,Fo=g.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,Ao=g.div`
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
`,Oo=g.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,_o=g.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,zt=$.createContext(null),Ro=400;function Fn({children:t}){const[o,r]=$.useState(!1),s=$.useRef(null),a=$.useCallback(()=>{s.current!==null&&(window.clearTimeout(s.current),s.current=null)},[]),n=$.useCallback(()=>{a(),r(!0)},[a]),l=$.useCallback(()=>{a(),s.current=window.setTimeout(()=>{s.current=null,r(!1)},Ro)},[a]);$.useEffect(()=>()=>a(),[a]);const c=$.useMemo(()=>({active:o,onMouseEnter:n,onMouseLeave:l,onFocus:n,onBlur:l}),[o,n,l]);return i.jsx(zt.Provider,{value:c,children:t})}function zo(){return $.useContext(zt)}function An({bottom:t,children:o,...r}){const s=zo(),a=s?.active??!0,n=r["aria-label"]??r.title;return i.jsxs(Po,{$visible:a,$bottom:t,onMouseEnter:s?.onMouseEnter,onMouseLeave:s?.onMouseLeave,onFocus:s?.onFocus,onBlur:s?.onBlur,children:[n?i.jsx(No,{$visible:a,"aria-hidden":"true",children:n}):null,i.jsx(Yo,{$visible:a,tabIndex:a?0:-1,...r,children:o})]})}const Po=g.div`
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
`,No=g.span`
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
`,Yo=g.button`
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
`;function On({bottom:t,label:o,onAccept:r,onDismiss:s,autoDismissMs:a=15e3,acceptLabel:n}){return $.useEffect(()=>{if(a<=0)return;const l=window.setTimeout(s,a);return()=>window.clearTimeout(l)},[a,s]),i.jsxs(Bo,{$bottom:t,role:"status","aria-live":"polite",children:[i.jsx(Xo,{type:"button",onClick:r,"aria-label":n??o,children:o}),i.jsx(Zt,{text:"Dismiss",children:i.jsx(Do,{type:"button",onClick:s,"aria-label":"Dismiss",children:"×"})})]})}const Bo=g.div`
  ${({$bottom:t})=>t!==void 0?it`
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
`,Xo=g.button`
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
`,Do=g.button`
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
`,_n=$.forwardRef(function({id:o,label:r="Choose file",accept:s,multiple:a,fileName:n,emptyText:l="No file chosen",disabled:c,onChange:d},p){const u=$.useId(),f=o??u,x=$.useRef(null);return i.jsxs(Ho,{children:[i.jsx(Ko,{id:f,ref:v=>{if(x.current=v,typeof p=="function"){p(v);return}p&&(p.current=v)},type:"file",accept:s,multiple:a,disabled:c,onChange:d}),i.jsx(Wo,{htmlFor:f,$disabled:!!c,children:r}),i.jsx(Go,{"aria-live":"polite",$hasFile:!!n,children:n??l})]})}),Ho=g.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,Wo=g.label`
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
`,Ko=g.input`
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
`,Go=g.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:t})=>t?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`,Uo=1;function Vo(t,o,r,s,a){const n=r.to;if(n<1||n>=t.length)return!1;const l=s(t[n-1]),c=s(t[n]),d=a(o[n-1]),p=a(o[n]);return c>l?r.t.some((u,f)=>{const x=s(u),v=d+(p-d)*(x-l)/(c-l);return Math.abs(a(r.v[f])-v)>Uo}):!1}function ft(t,o,r,s){const a=o-t;if(a===0){const n=(r+s)/2;return()=>n}return n=>r+(n-t)/a*(s-r)}function bt(t,o,r=5){if(t===o)return Array.from({length:r},()=>t);const a=(o-t)/(r-1),n=10**Math.floor(Math.log10(a)),c=([1,2,2.5,5,10].find(x=>x*n>=a)??10)*n,d=Math.ceil(t/c)*c,p=[];for(let x=0;p.length<r;x++){const v=d+x*c;if(v>o+c*.01)break;p.push(v)}if(p.length>=2)return p;const u=Math.floor(t/c)*c,f=Math.ceil(o/c)*c;return f>u?[u,f]:[u,u+c]}function Pt(t,o){const r=Math.floor(t/1e3);if(o>=36e5){const n=Math.floor(r/3600),l=Math.floor(r%3600/60),c=r%60;return`${n}:${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`}const s=Math.floor(r/60),a=r%60;return`${s}:${String(a).padStart(2,"0")}`}function Et(t,o,r,s,a=[]){if(t.length===0)return"";const n=[];for(let l=0;l<t.length;l++){const c=r(t[l]).toFixed(2),d=s(o[l]).toFixed(2),p=l===0||a.includes(l);n.push(`${p?"M":"L"}${c},${d}`),p&&vt(l,t.length,a)&&n.push(`L${c},${d}`)}return n.join(" ")}function vt(t,o,r){return t+1>=o||r.includes(t+1)}function Zo(t,o,r,s,a=[]){if(t.length===0)return"";const n=[];let l=s(o[0]).toFixed(2);const c=r(t[0]).toFixed(2);n.push(`M${c},${l}`),vt(0,t.length,a)&&n.push(`L${c},${l}`);for(let d=1;d<t.length;d++){const p=r(t[d]).toFixed(2),u=s(o[d]).toFixed(2);if(a.includes(d)){n.push(`M${p},${u}`),vt(d,t.length,a)&&n.push(`L${p},${u}`),l=u;continue}n.push(`H${p}`),u!==l&&n.push(`V${u}`),l=u}return n.join(" ")}function qo(t,o,r,s,a,n=[],l=[],c=[]){if(t.length===0)return[];if(l.length===0&&c.length===0)return[{d:a(t,o,r,s,n)}];function d(M,I){const A=new Array(t.length);for(const O of M){const B=Math.min(t.length-1,O.to);for(let z=Math.max(0,O.from);z<=B;z++)A[z]=I(O)}return A}const p=d(l,M=>M.status),u=d(c,M=>M.basis),f=new Set(n),x=[];let v=0;const D=(M,I)=>{const A=M>0&&!f.has(M)?M-1:M,O=P=>P.slice(A,I+1),B=[];for(const P of n)P>A&&P<=I&&B.push(P-A);const z=a(O(t),O(o),r,s,B);z!==""&&x.push({status:p[M],basis:u[M],d:z})};for(let M=1;M<=t.length;M++)(M===t.length||p[M]!==p[v]||u[M]!==u[v])&&(D(v,M-1),v=M);return x}function Nt(t,o,r,s,a){if(t.length===0)return"";const n=Math.min(t.length,o.length,r.length);if(n===0)return"";const l=[];for(let c=0;c<n;c++){const d=s(t[c]).toFixed(2),p=a(r[c]).toFixed(2);l.push(`${c===0?"M":"L"}${d},${p}`)}for(let c=n-1;c>=0;c--){const d=s(t[c]).toFixed(2),p=a(o[c]).toFixed(2);l.push(`L${d},${p}`)}return l.push("Z"),l.join(" ")}function Qo(t,o,r,s){const a=[];for(const n of o){const{bandLo:l,bandHi:c,bandKind:d}=n;if(!l||!c||d===void 0)continue;const p=[];for(let f=n.from;f<=n.to&&f<t.length;f++)p.push(t[f]);const u=Nt(p,l,c,r,s);u!==""&&a.push({d:u,kind:d})}return a}function St(t,o,r,s){if(t===o){const p=(r+s)/2;return()=>p}const a=t>0?t:1e-9,n=o>a?o:a*10,l=Math.log10(a),d=Math.log10(n)-l;if(d===0){const p=(r+s)/2;return()=>p}return p=>{const u=p>0?p:a;return r+(Math.log10(u)-l)/d*(s-r)}}function Jo(t,o,r=5){if(!(t>0)||!(o>0)||o<=t)return bt(t,o,r);const s=Math.log10(t),a=Math.log10(o);if(a-s<1)return bt(t,o,r);const l=Math.ceil(s),c=Math.floor(a),d=Math.max(1,Math.ceil((c-l+1)/r)),p=[];for(let u=l;u<=c;u+=d)p.push(10**u);return p.length>0?p:[t,o]}const te={faint:.45,normal:.85,bright:1},oe=1.5,ee=5,et=7,nt=6,Ct=10,rt=9,q=12,ne=9,re=13,ae=.1,xt=5,ie=.5,se=.5;function W(t){return ao[t.tone??"neutral"]}function at(t){return ro[t.tone??"neutral"]}function Y(t){return te[t.emphasis??"normal"]}function U(t,o){return o.axis==="secondary"?t.scaleYSecondary:t.scaleYPrimary}function ce(t){const o=t.axis==="secondary"?"secondary":"primary";switch(t.kind){case"series":return{xs:t.points.map(r=>r.x),ys:t.points.map(r=>r.y),axis:o};case"region":return{xs:[...t.boundary,...t.boundaryHigh??[]].map(r=>r.x),ys:[...t.boundary,...t.boundaryHigh??[]].map(r=>r.y),axis:o};case"rule":return t.along==="y"?{xs:[],ys:[t.value],axis:o}:{xs:[t.value],ys:[],axis:o};case"marker":case"annotation":return{xs:[t.at.x],ys:[t.at.y],axis:o};default:return{xs:[],ys:[],axis:o}}}const le=5.8,Q=11,Tt=4;function de(t,o){const r=o.text.length*le,{frame:s}=o,a=o.anchorX+o.gap,n=a+r<=s.plotX1-4?"start":"end",l=n==="start"?a:o.anchorX-o.gap,c=n==="start"?l:l-r,d=c+r,p=f=>t.some(x=>c<x.x1&&d>x.x0&&f-Q<x.y1&&f+2>x.y0);let u=o.anchorY+3;for(let f=0;f<Tt&&p(u);f++)u+=Q;if(p(u)){u=o.anchorY+3;for(let f=0;f<Tt&&p(u);f++)u-=Q}return u=Math.min(Math.max(u,s.plotY0+Q),s.plotY1-Q),t.push({x0:c,x1:d,y0:u-Q,y1:u+2}),{x:l,y:u,anchor:n}}function pe(t){return t.map((o,r)=>`${r===0?"M":"L"}${o.x.toFixed(2)},${o.y.toFixed(2)}`).join(" ")}function ue(t){if(t.length===0)return"";const o=[`M${t[0].x.toFixed(2)},${t[0].y.toFixed(2)}`];for(let r=1;r<t.length;r++)o.push(`H${t[r].x.toFixed(2)}`,`V${t[r].y.toFixed(2)}`);return o.join(" ")}function he(t,o,r){if(t.length===0)return[];const s=t[0],a=t[t.length-1],n=[...t];if(o==="right"||o==="left"){const l=o==="right"?r.plotX1:r.plotX0;n.push({x:l,y:a.y},{x:l,y:s.y})}else{const l=o==="above"?r.plotY0:r.plotY1;n.push({x:a.x,y:l},{x:s.x,y:l})}return n}function fe({layer:t,frame:o}){if(t.stops.length===0)return null;const r=U(o,t),s=t.along==="y"?o.plotY1-o.plotY0:o.plotX1-o.plotX0;if(s<=0)return null;const a=t.along==="y"?o.plotY0:o.plotX0,n=t.along==="y"?r:o.scaleX,l=t.maxOpacity??se,c=t.tint??W(t),d=`plot-field-${t.id}-${o.uid}`,p=`plot-field-blur-${t.id}-${o.uid}`,u=t.stops.map(f=>({offset:(n(f.at)-a)/s*100,intensity:Math.max(0,Math.min(1,f.intensity))})).sort((f,x)=>f.offset-x.offset);return i.jsxs(i.Fragment,{children:[i.jsxs("defs",{children:[i.jsx("linearGradient",{id:d,x1:"0%",y1:"0%",x2:t.along==="x"?"100%":"0%",y2:t.along==="y"?"100%":"0%",children:u.map((f,x)=>i.jsx("stop",{offset:`${f.offset.toFixed(2)}%`,stopColor:c,stopOpacity:l*f.intensity},x))}),t.blur!==void 0&&i.jsx("filter",{id:p,children:i.jsx("feGaussianBlur",{stdDeviation:t.blur})})]}),i.jsx("rect",{"data-plot-layer":t.id,"data-plot-layer-kind":"field",x:o.plotX0,y:o.plotY0,width:o.plotX1-o.plotX0,height:o.plotY1-o.plotY0,fill:`url(#${d})`,filter:t.blur!==void 0?`url(#${p})`:void 0})]})}const xe=6,ge=56;function me(t,o,r,s){const a=Math.max(0,Math.min(o-1,Math.floor(r))),n=Math.max(0,Math.min(o-1,Math.floor(s))),l=Math.min(o-1,a+1),c=Math.min(o-1,n+1),d=Math.max(0,Math.min(1,r-a)),p=Math.max(0,Math.min(1,s-n)),u=t[n*o+a]+(t[n*o+l]-t[n*o+a])*d,f=t[c*o+a]+(t[c*o+l]-t[c*o+a])*d;return u+(f-u)*p}const J=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function be(t){const o=Math.max(0,Math.min(1,t));for(let r=1;r<J.length;r++)if(o<=J[r][0]){const[s,a]=J[r-1],[n,l]=J[r],c=n>s?(o-s)/(n-s):0;return[Math.round(a[0]+(l[0]-a[0])*c),Math.round(a[1]+(l[1]-a[1])*c),Math.round(a[2]+(l[2]-a[2])*c)]}return J[J.length-1][1]}function ve(t,o,r,s,a){const n=t[s*o+a],[l,c,d]=be(n/(r-1)),p=a>0?t[s*o+a-1]:n,u=s>0?t[(s-1)*o+a]:n,f=p!==n||u!==n?.5:1;return`rgb(${Math.round(l*f)}, ${Math.round(c*f)}, ${Math.round(d*f)})`}function ke({layer:t,frame:o}){const{size:r,values:s,bounds:a}=t;if(r<2||s.length<r*r)return null;let n=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;for(let C=0;C<r*r;C++){const y=s[C];if(!Number.isFinite(y))return null;y<n&&(n=y),y>l&&(l=y)}const c=l-n,d=Math.max(2,t.bands??xe),p=U(o,t),u=o.scaleX(a.x0),f=o.scaleX(a.x1),x=p(a.y0),v=p(a.y1),D=Math.min(u,f),M=Math.min(x,v),I=ge,A=Math.abs(f-u)/I,O=Math.abs(v-x)/I;if(!(A>0)||!(O>0))return null;const B=x<v,z=new Int16Array(I*I);for(let C=0;C<I;C++)for(let y=0;y<I;y++){const F=me(s,r,y/(I-1)*(r-1),C/(I-1)*(r-1)),T=c>0?(F-n)/c:.5;z[C*I+y]=Math.max(0,Math.min(d-1,Math.floor(T*d)))}const P=[];for(let C=0;C<I;C++){const y=B?C:I-1-C;let F=0,T="";for(let L=0;L<=I;L++){const N=L<I?ve(z,I,d,C,L):"";if(L===0){T=N;continue}N===T&&L<I||(P.push(i.jsx("rect",{x:D+F*A,y:M+y*O,width:(L-F)*A+.5,height:O+.5,fill:T},`${C}-${F}`)),F=L,T=N)}}return i.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"relief",opacity:Y(t),"aria-hidden":"true",children:P})}function ye({layer:t,frame:o}){const r=$.useId(),s=U(o,t),a=p=>({x:o.scaleX(p.x),y:s(p.y)}),n=t.boundary.map(a);if(n.length<2)return null;const l=t.side==="between"?[...n,...(t.boundaryHigh??[]).map(a).reverse()]:he(n,t.side,o);if(t.side==="between"&&!t.boundaryHigh)return null;const c=t.side==="right"?o.plotX1-4:t.side==="left"?o.plotX0+11:n[n.length-1].x,d=o.plotY1-34;return i.jsxs(i.Fragment,{children:[t.hatched&&i.jsx("defs",{children:i.jsx("pattern",{id:r,width:xt,height:xt,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:i.jsx("line",{x1:0,y1:0,x2:0,y2:xt,stroke:W(t),strokeWidth:1,strokeOpacity:t.opacity??ie})})}),i.jsx("polygon",{"data-plot-layer":t.id,"data-plot-layer-kind":"region","data-hatched":t.hatched?"":void 0,points:l.map(p=>`${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" "),fill:t.hatched?`url(#${r})`:W(t),fillOpacity:t.hatched?void 0:t.opacity??ae}),o.labels&&t.label&&i.jsx("text",{x:c,y:d,transform:`rotate(-90 ${c} ${d})`,fontSize:ne,letterSpacing:"0.14em",fill:"var(--color-text-muted)",children:t.label})]})}function $e({layer:t,frame:o}){const r=U(o,t),s=t.points.map(n=>({x:o.scaleX(n.x),y:r(n.y)}));if(s.length===0)return null;const a=oe*(t.weight??1);return t.style==="scatter"?i.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",fill:W(t),opacity:Y(t),children:s.map((n,l)=>i.jsx("circle",{cx:n.x,cy:n.y,r:a},l))}):i.jsx("path",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",d:t.style==="step"?ue(s):pe(s),fill:"none",stroke:W(t),strokeOpacity:Y(t),strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:t.dashed?"5 3.5":void 0})}function we({layer:t,frame:o}){const r=U(o,t),s=t.dashed??!0,a=W(t),n=t.along==="y",l=n?r(t.value):o.scaleX(t.value);return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"rule",x1:n?o.plotX0:l,x2:n?o.plotX1:l,y1:n?l:o.plotY0,y2:n?l:o.plotY1,stroke:a,strokeOpacity:Y(t),strokeWidth:1,strokeDasharray:s?"4 3":void 0}),o.labels&&t.label&&i.jsx("text",{x:n?o.plotX1-4:l+3,y:n?l-3:o.plotY0+10,textAnchor:n?"end":"start",fill:at(t),fontSize:rt,children:t.label})]})}function je({layer:t,frame:o,placed:r}){const s=U(o,t),a=o.scaleX(t.at.x),n=s(t.at.y),l=t.across??"x",c=W(t),d=o.labels&&t.label?de(r,{anchorX:a,anchorY:n,gap:et+3,text:t.label,frame:o}):null;return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"annotation",x1:l==="x"?a-et:a,x2:l==="x"?a+et:a,y1:l==="x"?n:n-et,y2:l==="x"?n:n+et,stroke:c,strokeOpacity:Y(t),strokeWidth:1.75,strokeLinecap:"round"}),d&&t.label&&i.jsx("text",{x:d.x,y:d.y,textAnchor:d.anchor,fontSize:rt,letterSpacing:"0.05em",fill:at(t),fillOpacity:Y(t),children:t.label})]})}function Me({layer:t,frame:o}){const r=U(o,t),s=o.scaleX(t.at.x),a=r(t.at.y)+(t.offsetPx??0),n=ee*(t.scale??1),l=W(t),c=t.shape??"dot",d={"data-plot-layer":t.id,"data-plot-layer-kind":"marker",opacity:Y(t)},p=c==="dot"?i.jsx("circle",{...d,cx:s,cy:a,r:n,fill:l,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):c==="ring"?i.jsx("circle",{...d,cx:s,cy:a,r:n,fill:"none",stroke:l,strokeWidth:1.5}):c==="cross"?i.jsx("path",{...d,d:`M${s-n},${a} L${s+n},${a} M${s},${a-n} L${s},${a+n}`,stroke:l,strokeWidth:1.5,strokeLinecap:"round"}):i.jsx("polyline",{...d,points:c==="chevron-up"?`${s-n},${a+n*.5} ${s},${a-n*.5} ${s+n},${a+n*.5}`:`${s-n},${a-n*.5} ${s},${a+n*.5} ${s+n},${a-n*.5}`,fill:"none",stroke:l,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"});return i.jsxs(i.Fragment,{children:[p,o.labels&&t.label&&i.jsx("text",{x:s+n+3,y:a+3,fontSize:rt,fill:at(t),fillOpacity:Y(t),children:t.label})]})}function Ie({layer:t,frame:o,row:r,edges:s}){const a=t.caption?2:1;if(t.anchor==="left-edge"||t.anchor==="right-edge"){const x=t.anchor==="left-edge"?o.plotX0+nt+r*q:o.plotX1-nt-r*q,v=o.plotY1-34;return i.jsx("text",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",x,y:v,transform:`rotate(-90 ${x} ${v})`,fontSize:rt,letterSpacing:"0.14em",fill:at(t),fillOpacity:Y(t),children:t.text})}const n=t.anchor.startsWith("top"),l=t.anchor.endsWith("right"),c=x=>nt+(x?re:0),d=l?o.plotX1-c(s.right):o.plotX0+c(s.left),p=r*(a*q+2),u=n?o.plotY0+nt+Ct+p:o.plotY1-nt-p,f=u-q;return i.jsxs("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",textAnchor:l?"end":"start",children:[t.caption&&i.jsx("text",{x:d,y:n?u:f,fontSize:rt,letterSpacing:"0.05em",fill:"var(--color-text-faint)",children:t.caption}),i.jsx("text",{x:d,y:t.caption&&n?u+q:u,fontSize:Ct,fontWeight:700,fill:at(t),fillOpacity:Y(t),children:t.text})]})}const Ft={relief:-1,field:0,region:1,series:2,rule:3,annotation:4,marker:5,caption:6},Le={relief:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function gt({layers:t,frame:o,pass:r}){const s=t.map((c,d)=>({layer:c,index:d})).filter(({layer:c})=>Le[c.kind]===r).sort((c,d)=>Ft[c.layer.kind]-Ft[d.layer.kind]||(c.layer.z??0)-(d.layer.z??0)||c.index-d.index),a=new Map,n=[],l={left:t.some(c=>c.kind==="caption"&&c.anchor==="left-edge"||c.kind==="region"&&c.side==="left"&&!!c.label),right:t.some(c=>c.kind==="caption"&&c.anchor==="right-edge"||c.kind==="region"&&c.side==="right"&&!!c.label)};return i.jsx(i.Fragment,{children:s.map(({layer:c,index:d})=>{const p=`${c.id}-${d}`;switch(c.kind){case"relief":return i.jsx(ke,{layer:c,frame:o},p);case"field":return i.jsx(fe,{layer:c,frame:o},p);case"region":return i.jsx(ye,{layer:c,frame:o},p);case"series":return i.jsx($e,{layer:c,frame:o},p);case"rule":return i.jsx(we,{layer:c,frame:o},p);case"annotation":return i.jsx(je,{layer:c,frame:o,placed:n},p);case"marker":return i.jsx(Me,{layer:c,frame:o},p);case"caption":{const u=a.get(c.anchor)??0;return a.set(c.anchor,u+1),i.jsx(Ie,{layer:c,frame:o,row:u,edges:l},p)}default:return null}})})}function Ee(t){return t.map(o=>o.description).filter(o=>typeof o=="string"&&o.length>0)}const Se=2.5;function Ce(t,o){if(t.length===0)return!1;const r=t[t.length-1]-o;return r===0?!0:t.length===1?!1:Math.sign(t[0]-o)!==Math.sign(r)}function Te(t,o){return t==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:o?t==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const Fe=(t,o)=>Pt(t-o[0],o[1]-o[0]),Rn=(t,o)=>Pt((t-o[0])*1e3,(o[1]-o[0])*1e3),mt={top:10,bottom:28,left:50};function Ae(t,o,r){const s=(n,l,c)=>Math.max(n,Math.min(c,l)),a=s(30,Math.round(t*.18),mt.left);return{top:mt.top,right:r?a:s(14,Math.round(t*.07),20),bottom:o<150?20:mt.bottom,left:a}}const Oe=26;function _e(t,o,r,s){const a=[],n=Oe;for(let l=t+n/2;l<o;l+=n)for(let c=r+n/2;c<s;c+=n)a.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return a}const Re=120,ze=90,Pe=70,Ne=35,Ye=2,Be=.2,At=.6,Ot="5 3",Xe=.15,De=.45;function He(t){return eo(t,"the value is inside the shaded region")}function We(t){return(t.type??"line")==="band"&&t.data.y2?[...t.data.y,...t.data.y2]:t.data.y}function zn({series:t,xDomain:o,yDomainPrimary:r,yDomainSecondary:s,xTickFormat:a=Fe,yTickFormat:n=Ke,yScalePrimary:l="linear",yScaleSecondary:c="linear",thresholds:d,legend:p="overlay",hideXAxis:u=!1,spatial:f=!1,layers:x,ariaLabel:v,width:D,height:M}){const I=$.useId(),A=D,O=M,B=t.filter(e=>e.axis==="primary"&&e.data.x.length>0),z=t.filter(e=>e.axis==="secondary"&&e.data.x.length>0),P=z.length>0,C=f?{top:1,right:1,bottom:1,left:1}:Ae(A,O,P),y=C.left,F=A-C.right,T=C.top,L=O-C.bottom,N=F-y,tt=L-T,kt=N>=Re&&tt>=ze,st=$.useMemo(()=>{const e={primary:[],secondary:[]};for(const h of x??[]){const m=ce(h);e[m.axis].push(...m.ys)}return e},[x]),V=$.useMemo(()=>_t(B,r,l,st.primary),[B,r,l,st]),Z=$.useMemo(()=>_t(z,s,c,st.secondary),[z,s,c,st]),R=ft(o[0],o[1],y,F),K=l==="log"?St(V[0],V[1],L,T):ft(V[0],V[1],L,T),G=c==="log"?St(Z[0],Z[1],L,T):ft(Z[0],Z[1],L,T),Yt=Math.max(2,Math.min(8,Math.round(N/Pe))),yt=Math.max(2,Math.min(7,Math.round(tt/Ne))),dt=(e,h,m,w)=>{const E=Math.min(e,h),S=Math.max(e,h),b=(S-E)*1e-6||1e-6,k=j=>j>=E-b&&j<=S+b,_=j=>w==="log"?Jo(E,S,j):bt(E,S,j);for(let j=m;j<=64;j*=2){const X=_(j).filter(k);if(X.length<2)continue;if(X.length<=m)return X;const ot=(X.length-1)/(m-1),lt=Array.from({length:m},(fn,Kt)=>X[Math.round(Kt*ot)]);return Array.from(new Set(lt))}return[E,S]},ct=dt(o[0],o[1],Yt,"linear"),$t=dt(V[0],V[1],yt,l==="log"?"log":"linear"),wt=P?dt(Z[0],Z[1],yt,c==="log"?"log":"linear"):[],Bt=$.useMemo(()=>{const e=[],h=ct.length-1;if(h<0)return e;const m=b=>b.length*6.5+6,w=6,E=b=>{const k=ct[b],_=a(k,o),j=R(k),X=m(_),ot=b===0?"start":b===h?"end":"middle",lt=ot==="start"?j:ot==="end"?j-X:j-X/2;return{x:j,text:_,anchor:ot,leftEdge:lt,rightEdge:lt+X}},S=E(0);if(e.push({x:S.x,text:S.text,anchor:S.anchor}),h>=1){const b=E(h);if(b.leftEdge>=S.rightEdge+w){let k=S.rightEdge;for(let _=1;_<h;_++){const j=E(_);j.leftEdge>=k+w&&j.rightEdge<=b.leftEdge-w&&(e.push({x:j.x,text:j.text,anchor:j.anchor}),k=j.rightEdge)}e.push({x:b.x,text:b.text,anchor:b.anchor})}}return e},[ct,o,R,a]),jt=(e,h)=>{const m=new Set,w=e.length;if(w===0||(m.add(0),w===1))return m;const E=16,S=h(e[0]),b=h(e[w-1]);if(Math.abs(b-S)>=E){let k=S;for(let _=1;_<w-1;_++){const j=h(e[_]);Math.abs(j-k)>=E&&Math.abs(b-j)>=E&&(m.add(_),k=j)}m.add(w-1)}return m},Xt=jt($t,K),Dt=jt(wt,G),H=$.useMemo(()=>t.filter(e=>e.data.x.length>0).map(e=>{const h=e.axis==="primary"?K:G,m=e.type??"line";if(m==="band")return e.data.y2?{id:e.id,kind:"band",color:e.color,opacity:e.fillOpacity??Be,d:Nt(e.data.x,e.data.y,e.data.y2,R,h)}:{id:e.id,kind:"noop"};if(m==="scatter"){const b=e.data.x.map((k,_)=>({cx:R(k),cy:h(e.data.y[_])}));return{id:e.id,kind:"scatter",color:e.color,points:b}}const w=m==="step"?Zo:Et,E=(e.data.bridges??[]).filter(b=>Vo(e.data.x,e.data.y,b,R,h)),S=[...new Set([...e.data.breaks??[],...E.map(b=>b.to)])].sort((b,k)=>b-k);return{id:e.id,kind:"stroked",color:e.color,dashed:e.dashed??!1,uncertainty:Qo(e.data.x,e.data.reckoned??[],R,h),segments:qo(e.data.x,e.data.y,R,h,w,S,e.data.spans,e.data.reckoned),modelled:E.map(b=>({basis:b.basis,d:Et([e.data.x[b.to-1],...b.t,e.data.x[b.to]],[e.data.y[b.to-1],...b.v,e.data.y[b.to]],R,h)})),tail:e.data.x.length>0&&(e.data.reckoned??[]).some(b=>b.to>=e.data.x.length-1)?{cx:R(e.data.x[e.data.x.length-1]),cy:h(e.data.y[e.data.y.length-1])}:null,observed:[...new Set(E.flatMap(b=>[b.to-1,b.to]))].map(b=>({cx:R(e.data.x[b]),cy:h(e.data.y[b])}))}}),[t,R,K,G]),Mt=$.useMemo(()=>d?d.map(e=>{const h=e.axis??"primary",m=e.kind!=="marker"&&t.some(w=>w.axis===h&&w.type!=="band"&&!w.dashed&&Ce(w.data.y,e.value));return{id:e.id,label:e.label,kind:e.kind,passed:m,currency:qt(e.reading,{drawsReckoning:!0}),tone:Te(e.kind,m),dashed:e.kind!=="marker",y:h==="primary"?K(e.value):G(e.value)}}):[],[d,t,K,G]),Ht=t.flatMap(e=>{const h=H.find(k=>k.id===e.id),m=h?.kind==="stroked"?h.modelled.map(k=>k.basis):[],w=e.data.reckoned??[];if(w.length===0&&m.length===0)return[];const S=[...new Set([...w.map(k=>k.basis),...m])].map(k=>`${e.label}: part of this trace is reckoned, ${Qt(k)}, not measured`),b=new Set(w.map(k=>k.bandLo&&k.bandHi?k.bandKind:void 0).filter(k=>k!==void 0));for(const k of b)S.push(`${e.label}: ${He(k)}`);return S}),Wt=Mt.flatMap(e=>{const h=e.label??e.id,m=[];return e.passed&&e.kind==="limit"&&m.push(`${h}: limit passed`),e.passed&&e.kind==="target"&&m.push(`${h}: target reached`),e.currency.held&&m.push(Jt(h,e.currency.caption)),m}),It=[v??"Telemetry line chart",...Ee(x??[]),...Ht,...Wt].join("; "),pt={scaleX:R,scaleYPrimary:K,scaleYSecondary:G,plotX0:y,plotX1:F,plotY0:T,plotY1:L,uid:I,labels:kt},ut=`plot-layer-clip-${I}`;return N<=0||tt<=0?i.jsx("svg",{width:Math.max(0,A),height:Math.max(0,O),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:i.jsx("title",{children:"Chart too small to render"})}):i.jsxs("svg",{width:A,height:O,role:"img","aria-label":It,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block"},children:[i.jsx("title",{children:It}),x&&x.length>0&&i.jsx("defs",{children:i.jsx("clipPath",{id:ut,children:i.jsx("rect",{x:y,y:T,width:N,height:tt})})}),i.jsx("rect",{x:y,y:T,width:N,height:tt,fill:"var(--color-surface-panel)"}),x&&x.length>0&&i.jsx("g",{clipPath:`url(#${ut})`,children:i.jsx(gt,{layers:x,frame:pt,pass:"background"})}),!f&&$t.map((e,h)=>{const m=K(e);return i.jsxs(ht.Fragment,{children:[i.jsx("line",{x1:y,y1:m,x2:F,y2:m,stroke:"var(--color-border-subtle)",strokeWidth:1}),Xt.has(h)&&i.jsx("text",{x:y-4,y:m,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:n(e)})]},`py-${h}`)}),!f&&wt.map((e,h)=>Dt.has(h)?i.jsx("text",{x:F+4,y:G(e),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:n(e)},`sy-${h}`):null),!u&&!f&&ct.map((e,h)=>i.jsx("line",{x1:R(e),y1:T,x2:R(e),y2:L,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${h}`)),!u&&!f&&Bt.map((e,h)=>i.jsx("text",{x:e.x,y:L+14,textAnchor:e.anchor,fill:"var(--color-text-faint)",fontSize:11,children:e.text},`xl-${h}`)),f&&_e(y,F,T,L).map(e=>i.jsx("circle",{cx:e.x,cy:e.y,r:1,fill:"var(--color-text-faint)",opacity:.35},e.key)),!f&&i.jsxs(i.Fragment,{children:[i.jsx("line",{x1:y,y1:T,x2:y,y2:L,stroke:"var(--color-border-strong)",strokeWidth:1}),i.jsx("line",{x1:y,y1:L,x2:F,y2:L,stroke:"var(--color-border-strong)",strokeWidth:1}),P&&i.jsx("line",{x1:F,y1:T,x2:F,y2:L,stroke:"var(--color-border-strong)",strokeWidth:1})]}),H.filter(e=>e.kind==="band").map(e=>i.jsx("path",{d:e.d,fill:e.color,fillOpacity:e.opacity,stroke:"none"},e.id)),H.filter(e=>e.kind==="stroked").flatMap(e=>e.uncertainty.map((h,m)=>i.jsx("path",{d:h.d,"data-band-kind":h.kind,fill:e.color,fillOpacity:Xe,stroke:h.kind==="bound"?e.color:"none",strokeOpacity:h.kind==="bound"?De:void 0,strokeWidth:h.kind==="bound"?1:void 0},`${e.id}-band-${m}`))),H.filter(e=>e.kind==="stroked").flatMap(e=>e.segments.map((h,m)=>i.jsx("path",{d:h.d,"data-stream-status":h.status,"data-reckoning-basis":h.basis,stroke:e.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:h.basis!==void 0?At:void 0,strokeDasharray:h.basis!==void 0?Ot:e.dashed?"4 3":void 0},`${e.id}-${m}`))),H.filter(e=>e.kind==="stroked").flatMap(e=>e.modelled.map((h,m)=>i.jsx("path",{d:h.d,"data-reckoning-basis":h.basis,stroke:e.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:At,strokeDasharray:Ot},`${e.id}-modelled-${m}`))),H.map(e=>e.kind==="stroked"&&e.tail!==null?i.jsx(to,{kind:"modelled",x:e.tail.cx,y:e.tail.cy},`${e.id}-tail`):null),H.filter(e=>e.kind==="stroked").flatMap(e=>e.observed.map((h,m)=>i.jsx("circle",{cx:h.cx,cy:h.cy,r:Se,fill:e.color,"data-observed-sample":""},`${e.id}-observed-${m}`))),H.filter(e=>e.kind==="scatter").flatMap(e=>e.points.map((h,m)=>i.jsx("circle",{cx:h.cx,cy:h.cy,r:Ye,fill:e.color},`${e.id}-${m}`))),x&&x.length>0&&i.jsx("g",{clipPath:`url(#${ut})`,children:i.jsx(gt,{layers:x,frame:pt,pass:"foreground"})}),Mt.map(e=>i.jsxs(ht.Fragment,{children:[i.jsx("line",{x1:y,y1:e.y,x2:F,y2:e.y,stroke:e.tone.line,strokeWidth:1,strokeDasharray:e.dashed?"4 3":void 0,"data-threshold-kind":e.kind,"data-threshold-passed":e.passed||void 0}),e.label&&i.jsxs("text",{x:F-4,y:e.y-3,textAnchor:"end",fill:e.tone.label,fontSize:10,children:[e.label,e.currency.held&&i.jsx(oo,{size:10,kind:e.currency.mark??"held"})]})]},e.id)),p!=="none"&&t.map((e,h)=>{const m=T+6+h*16;if(m+13>L)return null;const w=Math.min(e.label.length*6+8,N-6),E=Math.max(1,Math.floor((w-8)/6)),S=e.label.length>E?`${e.label.slice(0,Math.max(1,E-1))}...`:e.label;return i.jsxs(ht.Fragment,{children:[i.jsx("rect",{x:y+3,y:m,width:w,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),i.jsx("text",{x:y+6,y:m+10,fill:e.color,fontSize:10,children:S})]},e.id)}),x&&x.length>0&&kt&&i.jsx(gt,{layers:x,frame:pt,pass:"caption"})]})}function _t(t,o,r,s=[]){if(o)return o;if(t.length===0&&s.length===0)return r==="log"?[1,10]:[0,1];let a=[...t.flatMap(We),...s];return r==="log"&&(a=a.filter(n=>n>0)),a.length===0?r==="log"?[1,10]:[0,1]:[Math.min(...a),Math.max(...a)]}function Ke(t){if(t===0)return"0";if(Math.abs(t)>=1e6)return`${(t/1e6).toFixed(1)}M`;if(Math.abs(t)>=1e3)return`${(t/1e3).toFixed(1)}k`;if(Number.isInteger(t))return String(t);if(Math.abs(t)<.01){const o=Math.floor(Math.log10(Math.abs(t))),r=t/10**o;return Math.abs(r-1)<1e-9?`1e${o}`:`${r.toFixed(1)}e${o}`}return t.toFixed(2)}const Pn=g.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function Nn({state:t,elapsedMs:o}){if(t==="connected")return null;const r=t==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return i.jsxs(Rt,{accent:Ue[t],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[i.jsx(Ve,{children:r}),i.jsxs(Ze,{children:["T+",Ge(o)]})]})}function Ge(t){const o=Math.max(0,Math.floor(t/1e3)),r=Math.floor(o/3600),s=Math.floor(o%3600/60),a=o%60,n=l=>String(l).padStart(2,"0");return r>0?`${r}:${n(s)}:${n(a)}`:`${n(s)}:${n(a)}`}const Ue={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},Ve=g.span`
  font-weight: 600;
`,Ze=g.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function Yn({entries:t}){return t.length===0?null:i.jsxs(Qe,{role:"status","aria-live":"polite",children:[i.jsx(Je,{}),i.jsx(tn,{children:"SOURCE OFFLINE"}),i.jsx(on,{children:t.map(o=>i.jsxs(en,{children:[i.jsx(nn,{children:o.name}),i.jsx(rn,{children:o.status}),i.jsx(an,{children:qe(o.elapsedMs)})]},o.id))})]})}function qe(t){return io(so("irl:s",t/1e3))}const Qe=g.div`
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
`,Je=g.span`
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
`,tn=g.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,on=g.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,en=g.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,nn=g.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,rn=g.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,an=g.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,Bn=g.div`
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
`,Xn=g.div`
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
`,Dn=g.div`
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Hn=g.input`
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
`,Wn=g.button`
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
`,Kn=g.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,Gn=g.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,Un=g.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,Vn=g.button`
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
`,Zn=g.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,sn={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},cn={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function ln(t){return sn[t]??cn}function qn({label:t}){const o=ln(t);return i.jsx(dn,{$bg:o.bg,$fg:o.fg,$border:o.border,children:t})}const dn=g.span`
  display: inline-block;
  padding: var(--inset-chip);
  border-radius: var(--radius-regular);
  font-size: var(--font-size-caption);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${({$bg:t,$fg:o,$border:r})=>it`
    background: ${t};
    color: ${o};
    border: 1px solid ${r};
  `}
`;co({id:"default-dark",name:"Default Dark",theme:no});function Qn({kind:t,local:o,remote:r,remoteLabel:s="Peer"}){const a=t==="major"?"alert":"status",n=t==="major"?"RELOAD REQUIRED":t==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",l=t==="unknown"?`${s} didn't report a version`:`${s} v${r??"?"} ↔ this v${o}`;return i.jsxs(Rt,{accent:pn[t],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:a,children:[i.jsx(un,{children:n}),i.jsx(hn,{children:l})]})}const pn={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},un=g.span`
  font-weight: 600;
`,hn=g.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{Bn as A,Rt as B,Uo as C,Cn as D,Xn as E,An as F,Dn as G,Hn as H,Wn as I,Kn as J,Un as K,zn as L,Vn as M,Zn as N,Pn as P,Gn as R,Nn as S,qn as T,Qn as V,En as a,Sn as b,Tn as c,Fn as d,On as e,_n as f,gt as g,Yn as h,Nt as i,Et as j,qo as k,Zo as l,Qo as m,Vo as n,he as o,Pt as p,ln as q,St as r,ft as s,Jo as t,bt as u,Ee as v,ce as w,Fe as x,zo as y,Rn as z};
