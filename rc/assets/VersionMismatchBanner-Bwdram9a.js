import{j as i}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import g,{css as it}from"./ext-styled-components-Br73TgY3.js";import{d as Kt,Z as Gt,C as Ut,a2 as Vt,a4 as Zt,a6 as qt,aq as Qt,aj as Jt,af as to,a7 as oo,W as eo}from"./reckoningMarkDraw-wm1NEMVD.js";import{r as $,R as ht}from"./ext-react-RRA14VTW.js";import{T as no,d as ro,w as ao}from"./streamStatusWord-DiCPl-PU.js";import{v as io}from"./view-clock-formula-aC7mjXLK.js";import"./ksp-enum-names-VzzNPeFZ.js";import"./kepler-DtDJUp9i.js";import"./use-transmissions-CNXIlXpa.js";import"./reference-frame-C3IY91zk.js";import"./websocket-transport-DDS_WZAn.js";import{r as so}from"./registry-1t2HDf75.js";import"./index-CnzDwjkh.js";function Rt({accent:t,anchor:o="inline",top:r=12,zIndex:s=999,glow:a,pulse:n=!1,role:l="status",ariaLive:c,onClick:d,interactive:u=!1,children:p}){const h=c??(l==="alert"?"assertive":"polite");return o==="top"?i.jsxs(co,{$accent:t,$top:r,$zIndex:s,$glow:a,role:l,"aria-live":h,children:[i.jsx(Lt,{$accent:t,$pulse:n}),p]}):i.jsxs(lo,{as:d?"button":"div",type:d?"button":void 0,$accent:t,$glow:a,$clickable:!!d,$interactive:u,role:l,"aria-live":h,onClick:d,children:[i.jsx(Lt,{$accent:t,$pulse:n}),p]})}const co=g.div`
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
`,lo=g.div`
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
`;function wn({children:t}){return i.jsx(po,{children:t})}const po=g.div`
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
`,uo=2e3,ho={copied:t=>`Copied ${t}`,failed:()=>"Could not copy, select the text instead"};function jn({command:t,label:o}){const[r,s]=$.useState("idle"),a=$.useRef(void 0);$.useEffect(()=>()=>clearTimeout(a.current),[]);async function n(){let l="copied";try{await navigator.clipboard.writeText(t)}catch{l="failed"}s(l),clearTimeout(a.current),a.current=setTimeout(()=>s("idle"),uo)}return i.jsxs(fo,{children:[i.jsx(xo,{children:t}),i.jsx(Kt,{variant:"ghost",type:"button",onClick:()=>void n(),"aria-label":`Copy ${o}`,children:r==="copied"?"Copied":"Copy"}),i.jsx(Gt,{visuallyHidden:!0,children:ho[r]?.(o)})]})}const fo=g.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,xo=g.code`
  flex: 1;
  min-width: 0;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  user-select: all;
`;function go(t,o){if(!o)return!0;const r=o.toLowerCase();return(t.label??t.key).toLowerCase().includes(r)||t.key.toLowerCase().includes(r)}function Mn({keys:t,value:o,onChange:r,placeholder:s="Search...",emptyHint:a="No matches"}){const[n,l]=$.useState(""),c=$.useMemo(()=>t.filter(p=>go(p,n)),[t,n]),d=$.useMemo(()=>{const p=new Map;for(const h of c){const x=h.group??"Other";let v=p.get(x);v||(v=[],p.set(x,v)),v.push(h)}return[...p.entries()].sort(([h],[x])=>h.localeCompare(x))},[c]),u=p=>{const h=new Set(o);h.has(p)?h.delete(p):h.add(p),r(h)};return i.jsxs(mo,{children:[i.jsx(bo,{type:"text",value:n,placeholder:s,onChange:p=>l(p.target.value)}),i.jsx(vo,{children:d.length===0?i.jsx(Io,{children:a}):d.map(([p,h])=>i.jsxs(yo,{children:[i.jsx(ko,{children:p}),h.map(x=>{const v=o.has(x.key),D=`dkmp-${x.key}`;return i.jsxs($o,{$checked:v,children:[i.jsx(wo,{id:D,type:"checkbox",checked:v,onChange:()=>u(x.key)}),i.jsxs(jo,{htmlFor:D,children:[i.jsx(Mo,{$checked:v,children:v&&i.jsx(Ut,{size:11,strokeWidth:3})}),i.jsx(Lo,{children:x.label??x.key}),x.unit&&i.jsx(Eo,{children:x.unit})]})]},x.key)})]},p))})]})}const mo=g.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,bo=g.input`
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
`,vo=g.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,yo=g.div``,ko=g.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,$o=g.div`
  background: ${({$checked:t})=>t?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,wo=g.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,jo=g.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,Mo=g.span`
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
`,Lo=g.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,Eo=g.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,Io=g.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function Ln({show:t,message:o,hint:r,children:s}){return t?i.jsxs(So,{children:[i.jsx(Co,{"aria-hidden":"true",children:s}),i.jsxs(Fo,{role:"status","aria-live":"polite",children:[i.jsx(To,{children:o}),r&&i.jsx(Ao,{children:r})]})]}):i.jsx(i.Fragment,{children:s})}const So=g.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,Co=g.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,Fo=g.div`
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
`,To=g.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,Ao=g.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,_t=$.createContext(null),Oo=400;function En({children:t}){const[o,r]=$.useState(!1),s=$.useRef(null),a=$.useCallback(()=>{s.current!==null&&(window.clearTimeout(s.current),s.current=null)},[]),n=$.useCallback(()=>{a(),r(!0)},[a]),l=$.useCallback(()=>{a(),s.current=window.setTimeout(()=>{s.current=null,r(!1)},Oo)},[a]);$.useEffect(()=>()=>a(),[a]);const c=$.useMemo(()=>({active:o,onMouseEnter:n,onMouseLeave:l,onFocus:n,onBlur:l}),[o,n,l]);return i.jsx(_t.Provider,{value:c,children:t})}function Ro(){return $.useContext(_t)}function In({bottom:t,children:o,...r}){const s=Ro(),a=s?.active??!0,n=r["aria-label"]??r.title;return i.jsxs(_o,{$visible:a,$bottom:t,onMouseEnter:s?.onMouseEnter,onMouseLeave:s?.onMouseLeave,onFocus:s?.onFocus,onBlur:s?.onBlur,children:[n?i.jsx(zo,{$visible:a,"aria-hidden":"true",children:n}):null,i.jsx(Po,{$visible:a,tabIndex:a?0:-1,...r,children:o})]})}const _o=g.div`
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
`,zo=g.span`
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
`,Po=g.button`
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
`;function Sn({bottom:t,label:o,onAccept:r,onDismiss:s,autoDismissMs:a=15e3,acceptLabel:n}){return $.useEffect(()=>{if(a<=0)return;const l=window.setTimeout(s,a);return()=>window.clearTimeout(l)},[a,s]),i.jsxs(No,{$bottom:t,role:"status","aria-live":"polite",children:[i.jsx(Yo,{type:"button",onClick:r,"aria-label":n??o,children:o}),i.jsx(Vt,{text:"Dismiss",children:i.jsx(Xo,{type:"button",onClick:s,"aria-label":"Dismiss",children:"×"})})]})}const No=g.div`
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
`,Yo=g.button`
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
`,Xo=g.button`
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
`,Cn=$.forwardRef(function({id:o,label:r="Choose file",accept:s,multiple:a,fileName:n,emptyText:l="No file chosen",disabled:c,onChange:d},u){const p=$.useId(),h=o??p,x=$.useRef(null);return i.jsxs(Bo,{children:[i.jsx(Wo,{id:h,ref:v=>{if(x.current=v,typeof u=="function"){u(v);return}u&&(u.current=v)},type:"file",accept:s,multiple:a,disabled:c,onChange:d}),i.jsx(Do,{htmlFor:h,$disabled:!!c,children:r}),i.jsx(Ho,{"aria-live":"polite",$hasFile:!!n,children:n??l})]})}),Bo=g.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,Do=g.label`
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
`,Wo=g.input`
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
`,Ho=g.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:t})=>t?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`,Ko=1;function Go(t,o,r,s,a){const n=r.to;if(n<1||n>=t.length)return!1;const l=s(t[n-1]),c=s(t[n]),d=a(o[n-1]),u=a(o[n]);return c>l?r.t.some((p,h)=>{const x=s(p),v=d+(u-d)*(x-l)/(c-l);return Math.abs(a(r.v[h])-v)>Ko}):!1}function ft(t,o,r,s){const a=o-t;if(a===0){const n=(r+s)/2;return()=>n}return n=>r+(n-t)/a*(s-r)}function mt(t,o,r=5){if(t===o)return Array.from({length:r},()=>t);const a=(o-t)/(r-1),n=10**Math.floor(Math.log10(a)),c=([1,2,2.5,5,10].find(x=>x*n>=a)??10)*n,d=Math.ceil(t/c)*c,u=[];for(let x=0;u.length<r;x++){const v=d+x*c;if(v>o+c*.01)break;u.push(v)}if(u.length>=2)return u;const p=Math.floor(t/c)*c,h=Math.ceil(o/c)*c;return h>p?[p,h]:[p,p+c]}function zt(t,o){const r=Math.floor(t/1e3);if(o>=36e5){const n=Math.floor(r/3600),l=Math.floor(r%3600/60),c=r%60;return`${n}:${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`}const s=Math.floor(r/60),a=r%60;return`${s}:${String(a).padStart(2,"0")}`}function Et(t,o,r,s,a=[]){if(t.length===0)return"";const n=[];for(let l=0;l<t.length;l++){const c=r(t[l]).toFixed(2),d=s(o[l]).toFixed(2),u=l===0||a.includes(l);n.push(`${u?"M":"L"}${c},${d}`),u&&bt(l,t.length,a)&&n.push(`L${c},${d}`)}return n.join(" ")}function bt(t,o,r){return t+1>=o||r.includes(t+1)}function Uo(t,o,r,s,a=[]){if(t.length===0)return"";const n=[];let l=s(o[0]).toFixed(2);const c=r(t[0]).toFixed(2);n.push(`M${c},${l}`),bt(0,t.length,a)&&n.push(`L${c},${l}`);for(let d=1;d<t.length;d++){const u=r(t[d]).toFixed(2),p=s(o[d]).toFixed(2);if(a.includes(d)){n.push(`M${u},${p}`),bt(d,t.length,a)&&n.push(`L${u},${p}`),l=p;continue}n.push(`H${u}`),p!==l&&n.push(`V${p}`),l=p}return n.join(" ")}function Vo(t,o,r,s,a,n=[],l=[],c=[]){if(t.length===0)return[];if(l.length===0&&c.length===0)return[{d:a(t,o,r,s,n)}];function d(j,M){const A=new Array(t.length);for(const O of j){const X=Math.min(t.length-1,O.to);for(let z=Math.max(0,O.from);z<=X;z++)A[z]=M(O)}return A}const u=d(l,j=>j.status),p=d(c,j=>j.basis),h=new Set(n),x=[];let v=0;const D=(j,M)=>{const A=j>0&&!h.has(j)?j-1:j,O=P=>P.slice(A,M+1),X=[];for(const P of n)P>A&&P<=M&&X.push(P-A);const z=a(O(t),O(o),r,s,X);z!==""&&x.push({status:u[j],basis:p[j],d:z})};for(let j=1;j<=t.length;j++)(j===t.length||u[j]!==u[v]||p[j]!==p[v])&&(D(v,j-1),v=j);return x}function Pt(t,o,r,s,a){if(t.length===0)return"";const n=Math.min(t.length,o.length,r.length);if(n===0)return"";const l=[];for(let c=0;c<n;c++){const d=s(t[c]).toFixed(2),u=a(r[c]).toFixed(2);l.push(`${c===0?"M":"L"}${d},${u}`)}for(let c=n-1;c>=0;c--){const d=s(t[c]).toFixed(2),u=a(o[c]).toFixed(2);l.push(`L${d},${u}`)}return l.push("Z"),l.join(" ")}function Zo(t,o,r,s){const a=[];for(const n of o){const{bandLo:l,bandHi:c,bandKind:d}=n;if(!l||!c||d===void 0)continue;const u=[];for(let h=n.from;h<=n.to&&h<t.length;h++)u.push(t[h]);const p=Pt(u,l,c,r,s);p!==""&&a.push({d:p,kind:d})}return a}function It(t,o,r,s){if(t===o){const u=(r+s)/2;return()=>u}const a=t>0?t:1e-9,n=o>a?o:a*10,l=Math.log10(a),d=Math.log10(n)-l;if(d===0){const u=(r+s)/2;return()=>u}return u=>{const p=u>0?u:a;return r+(Math.log10(p)-l)/d*(s-r)}}function qo(t,o,r=5){if(!(t>0)||!(o>0)||o<=t)return mt(t,o,r);const s=Math.log10(t),a=Math.log10(o);if(a-s<1)return mt(t,o,r);const l=Math.ceil(s),c=Math.floor(a),d=Math.max(1,Math.ceil((c-l+1)/r)),u=[];for(let p=l;p<=c;p+=d)u.push(10**p);return u.length>0?u:[t,o]}const Qo={faint:.45,normal:.85,bright:1},Jo=1.5,te=5,et=7,nt=6,St=10,rt=9,q=12,oe=9,ee=13,ne=.1,re=.5;function G(t){return ro[t.tone??"neutral"]}function at(t){return no[t.tone??"neutral"]}function Y(t){return Qo[t.emphasis??"normal"]}function U(t,o){return o.axis==="secondary"?t.scaleYSecondary:t.scaleYPrimary}function ae(t){const o=t.axis==="secondary"?"secondary":"primary";switch(t.kind){case"series":return{xs:t.points.map(r=>r.x),ys:t.points.map(r=>r.y),axis:o};case"region":return{xs:[...t.boundary,...t.boundaryHigh??[]].map(r=>r.x),ys:[...t.boundary,...t.boundaryHigh??[]].map(r=>r.y),axis:o};case"rule":return t.along==="y"?{xs:[],ys:[t.value],axis:o}:{xs:[t.value],ys:[],axis:o};case"marker":case"annotation":return{xs:[t.at.x],ys:[t.at.y],axis:o};default:return{xs:[],ys:[],axis:o}}}const ie=5.8,Q=11,Ct=4;function se(t,o){const r=o.text.length*ie,{frame:s}=o,a=o.anchorX+o.gap,n=a+r<=s.plotX1-4?"start":"end",l=n==="start"?a:o.anchorX-o.gap,c=n==="start"?l:l-r,d=c+r,u=h=>t.some(x=>c<x.x1&&d>x.x0&&h-Q<x.y1&&h+2>x.y0);let p=o.anchorY+3;for(let h=0;h<Ct&&u(p);h++)p+=Q;if(u(p)){p=o.anchorY+3;for(let h=0;h<Ct&&u(p);h++)p-=Q}return p=Math.min(Math.max(p,s.plotY0+Q),s.plotY1-Q),t.push({x0:c,x1:d,y0:p-Q,y1:p+2}),{x:l,y:p,anchor:n}}function ce(t){return t.map((o,r)=>`${r===0?"M":"L"}${o.x.toFixed(2)},${o.y.toFixed(2)}`).join(" ")}function le(t){if(t.length===0)return"";const o=[`M${t[0].x.toFixed(2)},${t[0].y.toFixed(2)}`];for(let r=1;r<t.length;r++)o.push(`H${t[r].x.toFixed(2)}`,`V${t[r].y.toFixed(2)}`);return o.join(" ")}function de(t,o,r){if(t.length===0)return[];const s=t[0],a=t[t.length-1],n=[...t];if(o==="right"||o==="left"){const l=o==="right"?r.plotX1:r.plotX0;n.push({x:l,y:a.y},{x:l,y:s.y})}else{const l=o==="above"?r.plotY0:r.plotY1;n.push({x:a.x,y:l},{x:s.x,y:l})}return n}function pe({layer:t,frame:o}){if(t.stops.length===0)return null;const r=U(o,t),s=t.along==="y"?o.plotY1-o.plotY0:o.plotX1-o.plotX0;if(s<=0)return null;const a=t.along==="y"?o.plotY0:o.plotX0,n=t.along==="y"?r:o.scaleX,l=t.maxOpacity??re,c=t.tint??G(t),d=`plot-field-${t.id}-${o.uid}`,u=`plot-field-blur-${t.id}-${o.uid}`,p=t.stops.map(h=>({offset:(n(h.at)-a)/s*100,intensity:Math.max(0,Math.min(1,h.intensity))})).sort((h,x)=>h.offset-x.offset);return i.jsxs(i.Fragment,{children:[i.jsxs("defs",{children:[i.jsx("linearGradient",{id:d,x1:"0%",y1:"0%",x2:t.along==="x"?"100%":"0%",y2:t.along==="y"?"100%":"0%",children:p.map((h,x)=>i.jsx("stop",{offset:`${h.offset.toFixed(2)}%`,stopColor:c,stopOpacity:l*h.intensity},x))}),t.blur!==void 0&&i.jsx("filter",{id:u,children:i.jsx("feGaussianBlur",{stdDeviation:t.blur})})]}),i.jsx("rect",{"data-plot-layer":t.id,"data-plot-layer-kind":"field",x:o.plotX0,y:o.plotY0,width:o.plotX1-o.plotX0,height:o.plotY1-o.plotY0,fill:`url(#${d})`,filter:t.blur!==void 0?`url(#${u})`:void 0})]})}const ue=6,he=56;function fe(t,o,r,s){const a=Math.max(0,Math.min(o-1,Math.floor(r))),n=Math.max(0,Math.min(o-1,Math.floor(s))),l=Math.min(o-1,a+1),c=Math.min(o-1,n+1),d=Math.max(0,Math.min(1,r-a)),u=Math.max(0,Math.min(1,s-n)),p=t[n*o+a]+(t[n*o+l]-t[n*o+a])*d,h=t[c*o+a]+(t[c*o+l]-t[c*o+a])*d;return p+(h-p)*u}const J=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function xe(t){const o=Math.max(0,Math.min(1,t));for(let r=1;r<J.length;r++)if(o<=J[r][0]){const[s,a]=J[r-1],[n,l]=J[r],c=n>s?(o-s)/(n-s):0;return[Math.round(a[0]+(l[0]-a[0])*c),Math.round(a[1]+(l[1]-a[1])*c),Math.round(a[2]+(l[2]-a[2])*c)]}return J[J.length-1][1]}function ge(t,o,r,s,a){const n=t[s*o+a],[l,c,d]=xe(n/(r-1)),u=a>0?t[s*o+a-1]:n,p=s>0?t[(s-1)*o+a]:n,h=u!==n||p!==n?.5:1;return`rgb(${Math.round(l*h)}, ${Math.round(c*h)}, ${Math.round(d*h)})`}function me({layer:t,frame:o}){const{size:r,values:s,bounds:a}=t;if(r<2||s.length<r*r)return null;let n=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;for(let S=0;S<r*r;S++){const k=s[S];if(!Number.isFinite(k))return null;k<n&&(n=k),k>l&&(l=k)}const c=l-n,d=Math.max(2,t.bands??ue),u=U(o,t),p=o.scaleX(a.x0),h=o.scaleX(a.x1),x=u(a.y0),v=u(a.y1),D=Math.min(p,h),j=Math.min(x,v),M=he,A=Math.abs(h-p)/M,O=Math.abs(v-x)/M;if(!(A>0)||!(O>0))return null;const X=x<v,z=new Int16Array(M*M);for(let S=0;S<M;S++)for(let k=0;k<M;k++){const T=fe(s,r,k/(M-1)*(r-1),S/(M-1)*(r-1)),C=c>0?(T-n)/c:.5;z[S*M+k]=Math.max(0,Math.min(d-1,Math.floor(C*d)))}const P=[];for(let S=0;S<M;S++){const k=X?S:M-1-S;let T=0,C="";for(let L=0;L<=M;L++){const N=L<M?ge(z,M,d,S,L):"";if(L===0){C=N;continue}N===C&&L<M||(P.push(i.jsx("rect",{x:D+T*A,y:j+k*O,width:(L-T)*A+.5,height:O+.5,fill:C},`${S}-${T}`)),T=L,C=N)}}return i.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"relief",opacity:Y(t),"aria-hidden":"true",children:P})}function be({layer:t,frame:o}){const r=U(o,t),s=d=>({x:o.scaleX(d.x),y:r(d.y)}),a=t.boundary.map(s);if(a.length<2)return null;const n=t.side==="between"?[...a,...(t.boundaryHigh??[]).map(s).reverse()]:de(a,t.side,o);if(t.side==="between"&&!t.boundaryHigh)return null;const l=t.side==="right"?o.plotX1-4:t.side==="left"?o.plotX0+11:a[a.length-1].x,c=o.plotY1-34;return i.jsxs(i.Fragment,{children:[i.jsx("polygon",{"data-plot-layer":t.id,"data-plot-layer-kind":"region",points:n.map(d=>`${d.x.toFixed(2)},${d.y.toFixed(2)}`).join(" "),fill:G(t),fillOpacity:t.opacity??ne}),o.labels&&t.label&&i.jsx("text",{x:l,y:c,transform:`rotate(-90 ${l} ${c})`,fontSize:oe,letterSpacing:"0.14em",fill:"var(--color-text-muted)",children:t.label})]})}function ve({layer:t,frame:o}){const r=U(o,t),s=t.points.map(n=>({x:o.scaleX(n.x),y:r(n.y)}));if(s.length===0)return null;const a=Jo*(t.weight??1);return t.style==="scatter"?i.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",fill:G(t),opacity:Y(t),children:s.map((n,l)=>i.jsx("circle",{cx:n.x,cy:n.y,r:a},l))}):i.jsx("path",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",d:t.style==="step"?le(s):ce(s),fill:"none",stroke:G(t),strokeOpacity:Y(t),strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:t.dashed?"5 3.5":void 0})}function ye({layer:t,frame:o}){const r=U(o,t),s=t.dashed??!0,a=G(t),n=t.along==="y",l=n?r(t.value):o.scaleX(t.value);return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"rule",x1:n?o.plotX0:l,x2:n?o.plotX1:l,y1:n?l:o.plotY0,y2:n?l:o.plotY1,stroke:a,strokeOpacity:Y(t),strokeWidth:1,strokeDasharray:s?"4 3":void 0}),o.labels&&t.label&&i.jsx("text",{x:n?o.plotX1-4:l+3,y:n?l-3:o.plotY0+10,textAnchor:n?"end":"start",fill:at(t),fontSize:rt,children:t.label})]})}function ke({layer:t,frame:o,placed:r}){const s=U(o,t),a=o.scaleX(t.at.x),n=s(t.at.y),l=t.across??"x",c=G(t),d=o.labels&&t.label?se(r,{anchorX:a,anchorY:n,gap:et+3,text:t.label,frame:o}):null;return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"annotation",x1:l==="x"?a-et:a,x2:l==="x"?a+et:a,y1:l==="x"?n:n-et,y2:l==="x"?n:n+et,stroke:c,strokeOpacity:Y(t),strokeWidth:1.75,strokeLinecap:"round"}),d&&t.label&&i.jsx("text",{x:d.x,y:d.y,textAnchor:d.anchor,fontSize:rt,letterSpacing:"0.05em",fill:at(t),fillOpacity:Y(t),children:t.label})]})}function $e({layer:t,frame:o}){const r=U(o,t),s=o.scaleX(t.at.x),a=r(t.at.y)+(t.offsetPx??0),n=te*(t.scale??1),l=G(t),c=t.shape??"dot",d={"data-plot-layer":t.id,"data-plot-layer-kind":"marker",opacity:Y(t)},u=c==="dot"?i.jsx("circle",{...d,cx:s,cy:a,r:n,fill:l,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):c==="ring"?i.jsx("circle",{...d,cx:s,cy:a,r:n,fill:"none",stroke:l,strokeWidth:1.5}):c==="cross"?i.jsx("path",{...d,d:`M${s-n},${a} L${s+n},${a} M${s},${a-n} L${s},${a+n}`,stroke:l,strokeWidth:1.5,strokeLinecap:"round"}):i.jsx("polyline",{...d,points:c==="chevron-up"?`${s-n},${a+n*.5} ${s},${a-n*.5} ${s+n},${a+n*.5}`:`${s-n},${a-n*.5} ${s},${a+n*.5} ${s+n},${a-n*.5}`,fill:"none",stroke:l,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"});return i.jsxs(i.Fragment,{children:[u,o.labels&&t.label&&i.jsx("text",{x:s+n+3,y:a+3,fontSize:rt,fill:at(t),fillOpacity:Y(t),children:t.label})]})}function we({layer:t,frame:o,row:r,edges:s}){const a=t.caption?2:1;if(t.anchor==="left-edge"||t.anchor==="right-edge"){const x=t.anchor==="left-edge"?o.plotX0+nt+r*q:o.plotX1-nt-r*q,v=o.plotY1-34;return i.jsx("text",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",x,y:v,transform:`rotate(-90 ${x} ${v})`,fontSize:rt,letterSpacing:"0.14em",fill:at(t),fillOpacity:Y(t),children:t.text})}const n=t.anchor.startsWith("top"),l=t.anchor.endsWith("right"),c=x=>nt+(x?ee:0),d=l?o.plotX1-c(s.right):o.plotX0+c(s.left),u=r*(a*q+2),p=n?o.plotY0+nt+St+u:o.plotY1-nt-u,h=p-q;return i.jsxs("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",textAnchor:l?"end":"start",children:[t.caption&&i.jsx("text",{x:d,y:n?p:h,fontSize:rt,letterSpacing:"0.05em",fill:"var(--color-text-faint)",children:t.caption}),i.jsx("text",{x:d,y:t.caption&&n?p+q:p,fontSize:St,fontWeight:700,fill:at(t),fillOpacity:Y(t),children:t.text})]})}const Ft={relief:-1,field:0,region:1,series:2,rule:3,annotation:4,marker:5,caption:6},je={relief:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function xt({layers:t,frame:o,pass:r}){const s=t.map((c,d)=>({layer:c,index:d})).filter(({layer:c})=>je[c.kind]===r).sort((c,d)=>Ft[c.layer.kind]-Ft[d.layer.kind]||(c.layer.z??0)-(d.layer.z??0)||c.index-d.index),a=new Map,n=[],l={left:t.some(c=>c.kind==="caption"&&c.anchor==="left-edge"||c.kind==="region"&&c.side==="left"&&!!c.label),right:t.some(c=>c.kind==="caption"&&c.anchor==="right-edge"||c.kind==="region"&&c.side==="right"&&!!c.label)};return i.jsx(i.Fragment,{children:s.map(({layer:c,index:d})=>{const u=`${c.id}-${d}`;switch(c.kind){case"relief":return i.jsx(me,{layer:c,frame:o},u);case"field":return i.jsx(pe,{layer:c,frame:o},u);case"region":return i.jsx(be,{layer:c,frame:o},u);case"series":return i.jsx(ve,{layer:c,frame:o},u);case"rule":return i.jsx(ye,{layer:c,frame:o},u);case"annotation":return i.jsx(ke,{layer:c,frame:o,placed:n},u);case"marker":return i.jsx($e,{layer:c,frame:o},u);case"caption":{const p=a.get(c.anchor)??0;return a.set(c.anchor,p+1),i.jsx(we,{layer:c,frame:o,row:p,edges:l},u)}default:return null}})})}function Me(t){return t.map(o=>o.description).filter(o=>typeof o=="string"&&o.length>0)}const Le=2.5,Ee=(t,o)=>zt(t-o[0],o[1]-o[0]),Fn=(t,o)=>zt((t-o[0])*1e3,(o[1]-o[0])*1e3),gt={top:10,bottom:28,left:50};function Ie(t,o,r){const s=(n,l,c)=>Math.max(n,Math.min(c,l)),a=s(30,Math.round(t*.18),gt.left);return{top:gt.top,right:r?a:s(14,Math.round(t*.07),20),bottom:o<150?20:gt.bottom,left:a}}const Se=26;function Ce(t,o,r,s){const a=[],n=Se;for(let l=t+n/2;l<o;l+=n)for(let c=r+n/2;c<s;c+=n)a.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return a}const Fe=120,Te=90,Ae=70,Oe=35,Re=2,_e=.2,Tt=.6,At="5 3",ze=.15,Pe=.45;function Ne(t){return oo(t,"the value is inside the shaded region")}function Ye(t){return(t.type??"line")==="band"&&t.data.y2?[...t.data.y,...t.data.y2]:t.data.y}function Tn({series:t,xDomain:o,yDomainPrimary:r,yDomainSecondary:s,xTickFormat:a=Ee,yTickFormat:n=Xe,yScalePrimary:l="linear",yScaleSecondary:c="linear",thresholds:d,legend:u="overlay",hideXAxis:p=!1,spatial:h=!1,layers:x,ariaLabel:v,width:D,height:j}){const M=$.useId(),A=D,O=j,X=t.filter(e=>e.axis==="primary"&&e.data.x.length>0),z=t.filter(e=>e.axis==="secondary"&&e.data.x.length>0),P=z.length>0,S=h?{top:1,right:1,bottom:1,left:1}:Ie(A,O,P),k=S.left,T=A-S.right,C=S.top,L=O-S.bottom,N=T-k,tt=L-C,vt=N>=Fe&&tt>=Te,st=$.useMemo(()=>{const e={primary:[],secondary:[]};for(const f of x??[]){const b=ae(f);e[b.axis].push(...b.ys)}return e},[x]),V=$.useMemo(()=>Ot(X,r,l,st.primary),[X,r,l,st]),Z=$.useMemo(()=>Ot(z,s,c,st.secondary),[z,s,c,st]),_=ft(o[0],o[1],k,T),H=l==="log"?It(V[0],V[1],L,C):ft(V[0],V[1],L,C),K=c==="log"?It(Z[0],Z[1],L,C):ft(Z[0],Z[1],L,C),Nt=Math.max(2,Math.min(8,Math.round(N/Ae))),yt=Math.max(2,Math.min(7,Math.round(tt/Oe))),dt=(e,f,b,F)=>{const E=Math.min(e,f),I=Math.max(e,f),m=(I-E)*1e-6||1e-6,y=w=>w>=E-m&&w<=I+m,R=w=>F==="log"?qo(E,I,w):mt(E,I,w);for(let w=b;w<=64;w*=2){const B=R(w).filter(y);if(B.length<2)continue;if(B.length<=b)return B;const ot=(B.length-1)/(b-1),lt=Array.from({length:b},(ln,Ht)=>B[Math.round(Ht*ot)]);return Array.from(new Set(lt))}return[E,I]},ct=dt(o[0],o[1],Nt,"linear"),kt=dt(V[0],V[1],yt,l==="log"?"log":"linear"),$t=P?dt(Z[0],Z[1],yt,c==="log"?"log":"linear"):[],Yt=$.useMemo(()=>{const e=[],f=ct.length-1;if(f<0)return e;const b=m=>m.length*6.5+6,F=6,E=m=>{const y=ct[m],R=a(y,o),w=_(y),B=b(R),ot=m===0?"start":m===f?"end":"middle",lt=ot==="start"?w:ot==="end"?w-B:w-B/2;return{x:w,text:R,anchor:ot,leftEdge:lt,rightEdge:lt+B}},I=E(0);if(e.push({x:I.x,text:I.text,anchor:I.anchor}),f>=1){const m=E(f);if(m.leftEdge>=I.rightEdge+F){let y=I.rightEdge;for(let R=1;R<f;R++){const w=E(R);w.leftEdge>=y+F&&w.rightEdge<=m.leftEdge-F&&(e.push({x:w.x,text:w.text,anchor:w.anchor}),y=w.rightEdge)}e.push({x:m.x,text:m.text,anchor:m.anchor})}}return e},[ct,o,_,a]),wt=(e,f)=>{const b=new Set,F=e.length;if(F===0||(b.add(0),F===1))return b;const E=16,I=f(e[0]),m=f(e[F-1]);if(Math.abs(m-I)>=E){let y=I;for(let R=1;R<F-1;R++){const w=f(e[R]);Math.abs(w-y)>=E&&Math.abs(m-w)>=E&&(b.add(R),y=w)}b.add(F-1)}return b},Xt=wt(kt,H),Bt=wt($t,K),W=$.useMemo(()=>t.filter(e=>e.data.x.length>0).map(e=>{const f=e.axis==="primary"?H:K,b=e.type??"line";if(b==="band")return e.data.y2?{id:e.id,kind:"band",color:e.color,opacity:e.fillOpacity??_e,d:Pt(e.data.x,e.data.y,e.data.y2,_,f)}:{id:e.id,kind:"noop"};if(b==="scatter"){const m=e.data.x.map((y,R)=>({cx:_(y),cy:f(e.data.y[R])}));return{id:e.id,kind:"scatter",color:e.color,points:m}}const F=b==="step"?Uo:Et,E=(e.data.bridges??[]).filter(m=>Go(e.data.x,e.data.y,m,_,f)),I=[...new Set([...e.data.breaks??[],...E.map(m=>m.to)])].sort((m,y)=>m-y);return{id:e.id,kind:"stroked",color:e.color,dashed:e.dashed??!1,uncertainty:Zo(e.data.x,e.data.reckoned??[],_,f),segments:Vo(e.data.x,e.data.y,_,f,F,I,e.data.spans,e.data.reckoned),modelled:E.map(m=>({basis:m.basis,d:Et([e.data.x[m.to-1],...m.t,e.data.x[m.to]],[e.data.y[m.to-1],...m.v,e.data.y[m.to]],_,f)})),tail:e.data.x.length>0&&(e.data.reckoned??[]).some(m=>m.to>=e.data.x.length-1)?{cx:_(e.data.x[e.data.x.length-1]),cy:f(e.data.y[e.data.y.length-1])}:null,observed:[...new Set(E.flatMap(m=>[m.to-1,m.to]))].map(m=>({cx:_(e.data.x[m]),cy:f(e.data.y[m])}))}}),[t,_,H,K]),jt=$.useMemo(()=>d?d.map(e=>({id:e.id,label:e.label,currency:Zt(e.reading,{drawsReckoning:e.drawsReckoning}),color:e.color??"var(--color-text-faint)",dashed:e.dashed??!0,y:e.axis==="primary"?H(e.value):K(e.value)})):[],[d,H,K]),Dt=t.flatMap(e=>{const f=W.find(y=>y.id===e.id),b=f?.kind==="stroked"?f.modelled.map(y=>y.basis):[],F=e.data.reckoned??[];if(F.length===0&&b.length===0)return[];const I=[...new Set([...F.map(y=>y.basis),...b])].map(y=>`${e.label}: part of this trace is reckoned, ${qt(y)}, not measured`),m=new Set(F.map(y=>y.bandLo&&y.bandHi?y.bandKind:void 0).filter(y=>y!==void 0));for(const y of m)I.push(`${e.label}: ${Ne(y)}`);return I}),Wt=jt.filter(e=>e.currency.held).map(e=>Qt(e.label??e.id,e.currency.caption)),Mt=[v??"Telemetry line chart",...Me(x??[]),...Dt,...Wt].join("; "),pt={scaleX:_,scaleYPrimary:H,scaleYSecondary:K,plotX0:k,plotX1:T,plotY0:C,plotY1:L,uid:M,labels:vt},ut=`plot-layer-clip-${M}`;return N<=0||tt<=0?i.jsx("svg",{width:Math.max(0,A),height:Math.max(0,O),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:i.jsx("title",{children:"Chart too small to render"})}):i.jsxs("svg",{width:A,height:O,role:"img","aria-label":Mt,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block"},children:[i.jsx("title",{children:Mt}),x&&x.length>0&&i.jsx("defs",{children:i.jsx("clipPath",{id:ut,children:i.jsx("rect",{x:k,y:C,width:N,height:tt})})}),i.jsx("rect",{x:k,y:C,width:N,height:tt,fill:"var(--color-surface-panel)"}),x&&x.length>0&&i.jsx("g",{clipPath:`url(#${ut})`,children:i.jsx(xt,{layers:x,frame:pt,pass:"background"})}),!h&&kt.map((e,f)=>{const b=H(e);return i.jsxs(ht.Fragment,{children:[i.jsx("line",{x1:k,y1:b,x2:T,y2:b,stroke:"var(--color-border-subtle)",strokeWidth:1}),Xt.has(f)&&i.jsx("text",{x:k-4,y:b,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:n(e)})]},`py-${f}`)}),!h&&$t.map((e,f)=>Bt.has(f)?i.jsx("text",{x:T+4,y:K(e),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:n(e)},`sy-${f}`):null),!p&&!h&&ct.map((e,f)=>i.jsx("line",{x1:_(e),y1:C,x2:_(e),y2:L,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${f}`)),!p&&!h&&Yt.map((e,f)=>i.jsx("text",{x:e.x,y:L+14,textAnchor:e.anchor,fill:"var(--color-text-faint)",fontSize:11,children:e.text},`xl-${f}`)),h&&Ce(k,T,C,L).map(e=>i.jsx("circle",{cx:e.x,cy:e.y,r:1,fill:"var(--color-text-faint)",opacity:.35},e.key)),!h&&i.jsxs(i.Fragment,{children:[i.jsx("line",{x1:k,y1:C,x2:k,y2:L,stroke:"var(--color-border-strong)",strokeWidth:1}),i.jsx("line",{x1:k,y1:L,x2:T,y2:L,stroke:"var(--color-border-strong)",strokeWidth:1}),P&&i.jsx("line",{x1:T,y1:C,x2:T,y2:L,stroke:"var(--color-border-strong)",strokeWidth:1})]}),W.filter(e=>e.kind==="band").map(e=>i.jsx("path",{d:e.d,fill:e.color,fillOpacity:e.opacity,stroke:"none"},e.id)),W.filter(e=>e.kind==="stroked").flatMap(e=>e.uncertainty.map((f,b)=>i.jsx("path",{d:f.d,"data-band-kind":f.kind,fill:e.color,fillOpacity:ze,stroke:f.kind==="bound"?e.color:"none",strokeOpacity:f.kind==="bound"?Pe:void 0,strokeWidth:f.kind==="bound"?1:void 0},`${e.id}-band-${b}`))),W.filter(e=>e.kind==="stroked").flatMap(e=>e.segments.map((f,b)=>i.jsx("path",{d:f.d,"data-stream-status":f.status,"data-reckoning-basis":f.basis,stroke:e.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:f.basis!==void 0?Tt:void 0,strokeDasharray:f.basis!==void 0?At:e.dashed?"4 3":void 0},`${e.id}-${b}`))),W.filter(e=>e.kind==="stroked").flatMap(e=>e.modelled.map((f,b)=>i.jsx("path",{d:f.d,"data-reckoning-basis":f.basis,stroke:e.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:Tt,strokeDasharray:At},`${e.id}-modelled-${b}`))),W.map(e=>e.kind==="stroked"&&e.tail!==null?i.jsx(Jt,{kind:"modelled",x:e.tail.cx,y:e.tail.cy},`${e.id}-tail`):null),W.filter(e=>e.kind==="stroked").flatMap(e=>e.observed.map((f,b)=>i.jsx("circle",{cx:f.cx,cy:f.cy,r:Le,fill:e.color,"data-observed-sample":""},`${e.id}-observed-${b}`))),W.filter(e=>e.kind==="scatter").flatMap(e=>e.points.map((f,b)=>i.jsx("circle",{cx:f.cx,cy:f.cy,r:Re,fill:e.color},`${e.id}-${b}`))),x&&x.length>0&&i.jsx("g",{clipPath:`url(#${ut})`,children:i.jsx(xt,{layers:x,frame:pt,pass:"foreground"})}),jt.map(e=>i.jsxs(ht.Fragment,{children:[i.jsx("line",{x1:k,y1:e.y,x2:T,y2:e.y,stroke:e.color,strokeWidth:1,strokeDasharray:e.dashed?"4 3":void 0}),e.label&&i.jsxs("text",{x:T-4,y:e.y-3,textAnchor:"end",fill:e.color,fontSize:10,children:[e.label,e.currency.held&&i.jsx(to,{size:10,kind:e.currency.mark??"held"})]})]},e.id)),u!=="none"&&t.map((e,f)=>{const b=C+6+f*16;if(b+13>L)return null;const F=Math.min(e.label.length*6+8,N-6),E=Math.max(1,Math.floor((F-8)/6)),I=e.label.length>E?`${e.label.slice(0,Math.max(1,E-1))}...`:e.label;return i.jsxs(ht.Fragment,{children:[i.jsx("rect",{x:k+3,y:b,width:F,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),i.jsx("text",{x:k+6,y:b+10,fill:e.color,fontSize:10,children:I})]},e.id)}),x&&x.length>0&&vt&&i.jsx(xt,{layers:x,frame:pt,pass:"caption"})]})}function Ot(t,o,r,s=[]){if(o)return o;if(t.length===0&&s.length===0)return r==="log"?[1,10]:[0,1];let a=[...t.flatMap(Ye),...s];return r==="log"&&(a=a.filter(n=>n>0)),a.length===0?r==="log"?[1,10]:[0,1]:[Math.min(...a),Math.max(...a)]}function Xe(t){if(t===0)return"0";if(Math.abs(t)>=1e6)return`${(t/1e6).toFixed(1)}M`;if(Math.abs(t)>=1e3)return`${(t/1e3).toFixed(1)}k`;if(Number.isInteger(t))return String(t);if(Math.abs(t)<.01){const o=Math.floor(Math.log10(Math.abs(t))),r=t/10**o;return Math.abs(r-1)<1e-9?`1e${o}`:`${r.toFixed(1)}e${o}`}return t.toFixed(2)}const An=g.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function On({state:t,elapsedMs:o}){if(t==="connected")return null;const r=t==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return i.jsxs(Rt,{accent:De[t],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[i.jsx(We,{children:r}),i.jsxs(He,{children:["T+",Be(o)]})]})}function Be(t){const o=Math.max(0,Math.floor(t/1e3)),r=Math.floor(o/3600),s=Math.floor(o%3600/60),a=o%60,n=l=>String(l).padStart(2,"0");return r>0?`${r}:${n(s)}:${n(a)}`:`${n(s)}:${n(a)}`}const De={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},We=g.span`
  font-weight: 600;
`,He=g.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function Rn({entries:t}){return t.length===0?null:i.jsxs(Ge,{role:"status","aria-live":"polite",children:[i.jsx(Ue,{}),i.jsx(Ve,{children:"SOURCE OFFLINE"}),i.jsx(Ze,{children:t.map(o=>i.jsxs(qe,{children:[i.jsx(Qe,{children:o.name}),i.jsx(Je,{children:o.status}),i.jsx(tn,{children:Ke(o.elapsedMs)})]},o.id))})]})}function Ke(t){return ao(io("irl:s",t/1e3))}const Ge=g.div`
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
`,Ue=g.span`
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
`,Ve=g.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,Ze=g.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,qe=g.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,Qe=g.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,Je=g.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,tn=g.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,_n=g.div`
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
`,zn=g.div`
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
`,Pn=g.div`
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Nn=g.input`
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
`,Yn=g.button`
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
`,Xn=g.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,Bn=g.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,Dn=g.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,Wn=g.button`
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
`,Hn=g.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,on={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},en={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function nn(t){return on[t]??en}function Kn({label:t}){const o=nn(t);return i.jsx(rn,{$bg:o.bg,$fg:o.fg,$border:o.border,children:t})}const rn=g.span`
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
`;so({id:"default-dark",name:"Default Dark",theme:eo});function Gn({kind:t,local:o,remote:r,remoteLabel:s="Peer"}){const a=t==="major"?"alert":"status",n=t==="major"?"RELOAD REQUIRED":t==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",l=t==="unknown"?`${s} didn't report a version`:`${s} v${r??"?"} ↔ this v${o}`;return i.jsxs(Rt,{accent:an[t],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:a,children:[i.jsx(sn,{children:n}),i.jsx(cn,{children:l})]})}const an={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},sn=g.span`
  font-weight: 600;
`,cn=g.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{_n as A,Rt as B,Ko as C,Mn as D,zn as E,In as F,Pn as G,Nn as H,Yn as I,Xn as J,Dn as K,Tn as L,Wn as M,Hn as N,An as P,Bn as R,On as S,Kn as T,Gn as V,wn as a,jn as b,Ln as c,En as d,Sn as e,Cn as f,xt as g,Rn as h,Pt as i,Et as j,Vo as k,Uo as l,Zo as m,Go as n,de as o,zt as p,nn as q,It as r,ft as s,qo as t,mt as u,Me as v,ae as w,Ee as x,Ro as y,Fn as z};
