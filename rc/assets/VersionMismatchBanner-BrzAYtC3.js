import{j as i}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import b,{css as ct}from"./ext-styled-components-Br73TgY3.js";import{d as Ht,Z as ae,C as ie,a2 as Wt,a4 as se,a6 as le,ap as ce,ai as de,ae as pe,W as ue}from"./reckoningMarkDraw-CoCX0fe7.js";import{r as M,R as yt}from"./ext-react-RRA14VTW.js";import{T as he,d as fe,w as xe}from"./streamStatusWord-C3H43Y2G.js";import{aX as ge}from"./view-clock-formula-DcLQJabS.js";import"./ksp-enum-names-BMz6X3__.js";import"./screen-DTFovtBn.js";import"./lagrange-CsOvgNk7.js";import"./use-transmissions-DYay_Icj.js";import"./websocket-transport-qc0HpUCD.js";import{r as me}from"./registry-DnUC3WhM.js";import"./index-CnzDwjkh.js";function Kt({accent:t,anchor:e="inline",top:r=12,zIndex:l=999,glow:a,pulse:n=!1,role:s="status",ariaLive:c,onClick:p,interactive:u=!1,children:h}){const x=c??(s==="alert"?"assertive":"polite");return e==="top"?i.jsxs(be,{$accent:t,$top:r,$zIndex:l,$glow:a,role:s,"aria-live":x,children:[i.jsx(Tt,{$accent:t,$pulse:n}),h]}):i.jsxs(ve,{as:p?"button":"div",type:p?"button":void 0,$accent:t,$glow:a,$clickable:!!p,$interactive:u,role:s,"aria-live":x,onClick:p,children:[i.jsx(Tt,{$accent:t,$pulse:n}),h]})}const be=b.div`
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
  ${t=>t.$glow?ct`box-shadow: ${t.$glow};`:""}
`,ve=b.div`
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
  ${t=>t.$glow?ct`box-shadow: ${t.$glow};`:""}

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
`,Tt=b.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${t=>t.$accent};
  flex-shrink: 0;

  ${t=>t.$pulse&&ct`
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
`;function Gn({children:t}){return i.jsx(ye,{children:t})}const ye=b.div`
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
`,ke=2e3,$e={copied:t=>`Copied ${t}`,failed:()=>"Could not copy, select the text instead"};function Un({command:t,label:e}){const[r,l]=M.useState("idle"),a=M.useRef(void 0);M.useEffect(()=>()=>clearTimeout(a.current),[]);async function n(){let s="copied";try{await navigator.clipboard.writeText(t)}catch{s="failed"}l(s),clearTimeout(a.current),a.current=setTimeout(()=>l("idle"),ke)}return i.jsxs(we,{children:[i.jsx(je,{role:"group","aria-label":e,tabIndex:0,children:i.jsx(Me,{children:t})}),i.jsx(Ht,{variant:"ghost",type:"button",onClick:()=>void n(),"aria-label":`Copy ${e}`,children:r==="copied"?"Copied":"Copy"}),i.jsx(ae,{visuallyHidden:!0,children:$e[r]?.(e)})]})}const we=b.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,je=b.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Me=b.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function Le(t,e){if(!e)return!0;const r=e.toLowerCase();return(t.label??t.key).toLowerCase().includes(r)||t.key.toLowerCase().includes(r)}function Vn({keys:t,value:e,onChange:r,placeholder:l="Search...",emptyHint:a="No matches"}){const[n,s]=M.useState(""),c=M.useMemo(()=>t.filter(h=>Le(h,n)),[t,n]),p=M.useMemo(()=>{const h=new Map;for(const x of c){const f=x.group??"Other";let y=h.get(f);y||(y=[],h.set(f,y)),y.push(x)}return[...h.entries()].sort(([x],[f])=>x.localeCompare(f))},[c]),u=h=>{const x=new Set(e);x.has(h)?x.delete(h):x.add(h),r(x)};return i.jsxs(Ee,{children:[i.jsx(Ie,{type:"text",value:n,placeholder:l,onChange:h=>s(h.target.value)}),i.jsx(Se,{children:p.length===0?i.jsx(ze,{children:a}):p.map(([h,x])=>i.jsxs(Ce,{children:[i.jsx(Ae,{children:h}),x.map(f=>{const y=e.has(f.key),Y=`dkmp-${f.key}`;return i.jsxs(Te,{$checked:y,children:[i.jsx(_e,{id:Y,type:"checkbox",checked:y,onChange:()=>u(f.key)}),i.jsxs(Fe,{htmlFor:Y,children:[i.jsx(Re,{$checked:y,children:y&&i.jsx(ie,{size:11,strokeWidth:3})}),i.jsx(Oe,{children:f.label??f.key}),f.unit&&i.jsx(Pe,{children:f.unit})]})]},f.key)})]},h))})]})}const Ee=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,Ie=b.input`
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
`,Se=b.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,Ce=b.div``,Ae=b.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,Te=b.div`
  background: ${({$checked:t})=>t?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,_e=b.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,Fe=b.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,Re=b.span`
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
`,Oe=b.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,Pe=b.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,ze=b.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function Zn({show:t,message:e,hint:r,children:l}){return t?i.jsxs(Ye,{children:[i.jsx(Be,{...Ne,children:l}),i.jsxs(Xe,{role:"status","aria-live":"polite",children:[i.jsx(De,{children:e}),r&&i.jsx(He,{children:r})]})]}):i.jsx(i.Fragment,{children:l})}const Ne={inert:""},Ye=b.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,Be=b.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,Xe=b.div`
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
`,De=b.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,He=b.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,Gt=M.createContext(null),We=400,Ut="(pointer: coarse)";function Ke(t){if(typeof window.matchMedia!="function")return()=>{};const e=window.matchMedia(Ut);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}function Ge(){return typeof window.matchMedia=="function"&&window.matchMedia(Ut).matches}function qn({children:t}){const[e,r]=M.useState(!1),l=M.useSyncExternalStore(Ke,Ge,()=>!1),a=e||l,n=M.useRef(null),s=M.useCallback(()=>{n.current!==null&&(window.clearTimeout(n.current),n.current=null)},[]),c=M.useCallback(()=>{s(),r(!0)},[s]),p=M.useCallback(()=>{s(),n.current=window.setTimeout(()=>{n.current=null,r(!1)},We)},[s]);M.useEffect(()=>()=>s(),[s]);const u=M.useMemo(()=>({active:a,onMouseEnter:c,onMouseLeave:p,onFocus:c,onBlur:p}),[a,c,p]);return i.jsx(Gt.Provider,{value:u,children:t})}function Ue(){return M.useContext(Gt)}function Qn({bottom:t,children:e,...r}){const l=Ue(),a=l?.active??!0,n=r["aria-label"]??r.title;return i.jsxs(Ve,{$visible:a,$bottom:t,onMouseEnter:l?.onMouseEnter,onMouseLeave:l?.onMouseLeave,onFocus:l?.onFocus,onBlur:l?.onBlur,children:[n?i.jsx(Ze,{$visible:a,"aria-hidden":"true",children:n}):null,i.jsx(qe,{$visible:a,tabIndex:a?0:-1,...r,children:e})]})}const Ve=b.div`
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
`,Ze=b.span`
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
`,qe=b.button`
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
`;function Jn({bottom:t,label:e,onAccept:r,onDismiss:l,autoDismissMs:a=15e3,acceptLabel:n}){return M.useEffect(()=>{if(a<=0)return;const s=window.setTimeout(l,a);return()=>window.clearTimeout(s)},[a,l]),i.jsxs(Qe,{$bottom:t,role:"status","aria-live":"polite",children:[i.jsx(Je,{type:"button",onClick:r,"aria-label":n??e,children:e}),i.jsx(Wt,{text:"Dismiss",children:i.jsx(to,{type:"button",onClick:l,"aria-label":"Dismiss",children:"×"})})]})}const Qe=b.div`
  ${({$bottom:t})=>t!==void 0?ct`
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
`,Je=b.button`
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
`,to=b.button`
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
`,tr=M.forwardRef(function({id:e,label:r="Choose file",accept:l,multiple:a,fileName:n,emptyText:s="No file chosen",disabled:c,onChange:p},u){const h=M.useId(),x=e??h,f=M.useRef(null);return i.jsxs(eo,{children:[i.jsx(no,{id:x,ref:y=>{if(f.current=y,typeof u=="function"){u(y);return}u&&(u.current=y)},type:"file",accept:l,multiple:a,disabled:c,onChange:p}),i.jsx(oo,{htmlFor:x,$disabled:!!c,children:r}),i.jsx(ro,{"aria-live":"polite",$hasFile:!!n,children:n??s})]})}),eo=b.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,oo=b.label`
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
`,no=b.input`
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
`,ro=b.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:t})=>t?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`;function ao({x:t,y:e,size:r,color:l,text:a}){const n=r/2,s=`M 0 ${-n} L ${n} ${n*.8} L ${-n} ${n*.8} Z`,c=`M -0.9 ${-n*.42} H 0.9 V ${n*.2} H -0.9 Z`,p=`M -0.9 ${n*.4} H 0.9 V ${n*.64} H -0.9 Z`;return i.jsx(Wt,{text:a,focusable:!0,children:i.jsxs("g",{role:"img","aria-label":a,"data-limit-crossing":"",transform:`translate(${t} ${e})`,children:[i.jsx("title",{}),i.jsx("circle",{r:12,fill:"transparent"}),i.jsx("path",{d:`${s} ${c} ${p}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),i.jsx("path",{d:s,fill:"none",stroke:l,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function Vt(t,e,r){return r==="above"?t>=e:t<=e}function io({y:t,cx:e,cy:r,limit:l,limitY:a,bad:n,breaks:s=[],step:c=!1,minGapPx:p}){const u=(v,F,A)=>{if(!F)return{index:v,x:e[v],y:r[v],entered:!1};if(A===null)return{index:v,x:e[v],y:a,entered:!0};const P=r[v]-r[A],z=P===0?1:(a-r[A])/P;return{index:v,x:e[A]+(e[v]-e[A])*z,y:a,entered:!0}},h=new Set(s),x=[];let f=null,y=!1,Y=!1,j=Number.NEGATIVE_INFINITY;for(let v=0;v<t.length;v++){if(!Number.isFinite(t[v])){f=null;continue}const F=Vt(t[v],l,n);if(F&&!Y){const A=u(v,y,c||h.has(v)?null:f),P=x[x.length-1];P!==void 0&&A.x-j<p?P.spells++:x.push({...A,spells:1}),j=A.x}Y=F,y=!0,f=v}return x}const so=1;function lo(t,e,r,l,a){const n=r.to;if(n<1||n>=t.length)return!1;const s=l(t[n-1]),c=l(t[n]),p=a(e[n-1]),u=a(e[n]);return c>s?r.t.some((h,x)=>{const f=l(h),y=p+(u-p)*(f-s)/(c-s);return Math.abs(a(r.v[x])-y)>so}):!1}function kt(t,e,r,l){const a=e-t;if(a===0){const n=(r+l)/2;return()=>n}return n=>r+(n-t)/a*(l-r)}function Mt(t,e,r=5){if(t===e)return Array.from({length:r},()=>t);const a=(e-t)/(r-1),n=10**Math.floor(Math.log10(a)),c=([1,2,2.5,5,10].find(f=>f*n>=a)??10)*n,p=Math.ceil(t/c)*c,u=[];for(let f=0;u.length<r;f++){const y=p+f*c;if(y>e+c*.01)break;u.push(y)}if(u.length>=2)return u;const h=Math.floor(t/c)*c,x=Math.ceil(e/c)*c;return x>h?[h,x]:[h,h+c]}function Zt(t,e){const r=Math.floor(t/1e3);if(e>=36e5){const n=Math.floor(r/3600),s=Math.floor(r%3600/60),c=r%60;return`${n}:${String(s).padStart(2,"0")}:${String(c).padStart(2,"0")}`}const l=Math.floor(r/60),a=r%60;return`${l}:${String(a).padStart(2,"0")}`}function _t(t,e,r,l,a=[]){if(t.length===0)return"";const n=[];for(let s=0;s<t.length;s++){const c=r(t[s]).toFixed(2),p=l(e[s]).toFixed(2),u=s===0||a.includes(s);n.push(`${u?"M":"L"}${c},${p}`),u&&Lt(s,t.length,a)&&n.push(`L${c},${p}`)}return n.join(" ")}function Lt(t,e,r){return t+1>=e||r.includes(t+1)}function co(t,e,r,l,a=[]){if(t.length===0)return"";const n=[];let s=l(e[0]).toFixed(2);const c=r(t[0]).toFixed(2);n.push(`M${c},${s}`),Lt(0,t.length,a)&&n.push(`L${c},${s}`);for(let p=1;p<t.length;p++){const u=r(t[p]).toFixed(2),h=l(e[p]).toFixed(2);if(a.includes(p)){n.push(`M${u},${h}`),Lt(p,t.length,a)&&n.push(`L${u},${h}`),s=h;continue}n.push(`H${u}`),h!==s&&n.push(`V${h}`),s=h}return n.join(" ")}function po(t,e,r,l,a,n=[],s=[],c=[]){if(t.length===0)return[];if(s.length===0&&c.length===0)return[{d:a(t,e,r,l,n)}];function p(j,v){const F=new Array(t.length);for(const A of j){const P=Math.min(t.length-1,A.to);for(let z=Math.max(0,A.from);z<=P;z++)F[z]=v(A)}return F}const u=p(s,j=>j.status),h=p(c,j=>j.basis),x=new Set(n),f=[];let y=0;const Y=(j,v)=>{const F=j>0&&!x.has(j)?j-1:j,A=B=>B.slice(F,v+1),P=[];for(const B of n)B>F&&B<=v&&P.push(B-F);const z=a(A(t),A(e),r,l,P);z!==""&&f.push({status:u[j],basis:h[j],d:z})};for(let j=1;j<=t.length;j++)(j===t.length||u[j]!==u[y]||h[j]!==h[y])&&(Y(y,j-1),y=j);return f}function qt(t,e,r,l,a){if(t.length===0)return"";const n=Math.min(t.length,e.length,r.length);if(n===0)return"";const s=[];for(let c=0;c<n;c++){const p=l(t[c]).toFixed(2),u=a(r[c]).toFixed(2);s.push(`${c===0?"M":"L"}${p},${u}`)}for(let c=n-1;c>=0;c--){const p=l(t[c]).toFixed(2),u=a(e[c]).toFixed(2);s.push(`L${p},${u}`)}return s.push("Z"),s.join(" ")}function uo(t,e,r,l){const a=[];for(const n of e){const{bandLo:s,bandHi:c,bandKind:p}=n;if(!s||!c||p===void 0)continue;const u=[];for(let x=n.from;x<=n.to&&x<t.length;x++)u.push(t[x]);const h=qt(u,s,c,r,l);h!==""&&a.push({d:h,kind:p})}return a}function Ft(t,e,r,l){if(t===e){const u=(r+l)/2;return()=>u}const a=t>0?t:1e-9,n=e>a?e:a*10,s=Math.log10(a),p=Math.log10(n)-s;if(p===0){const u=(r+l)/2;return()=>u}return u=>{const h=u>0?u:a;return r+(Math.log10(h)-s)/p*(l-r)}}function ho(t,e,r=5){if(!(t>0)||!(e>0)||e<=t)return Mt(t,e,r);const l=Math.log10(t),a=Math.log10(e);if(a-l<1)return Mt(t,e,r);const s=Math.ceil(l),c=Math.floor(a),p=Math.max(1,Math.ceil((c-s+1)/r)),u=[];for(let h=s;h<=c;h+=p)u.push(10**h);return u.length>0?u:[t,e]}const fo={faint:.45,normal:.85,bright:1},xo=1.5,go=5,at=7,it=6,Rt=10,st=9,J=12,mo=9,bo=13,vo=.1,$t=5,yo=.5,ko=.5;function G(t){return fe[t.tone??"neutral"]}function lt(t){return he[t.tone??"neutral"]}function W(t){return fo[t.emphasis??"normal"]}function V(t,e){return e.axis==="secondary"?t.scaleYSecondary:t.scaleYPrimary}function $o(t){const e=t.axis==="secondary"?"secondary":"primary";switch(t.kind){case"series":return{xs:t.points.map(r=>r.x),ys:t.points.map(r=>r.y),axis:e};case"region":return{xs:[...t.boundary,...t.boundaryHigh??[]].map(r=>r.x),ys:[...t.boundary,...t.boundaryHigh??[]].map(r=>r.y),axis:e};case"rule":return t.along==="y"?{xs:[],ys:[t.value],axis:e}:{xs:[t.value],ys:[],axis:e};case"marker":case"annotation":return{xs:[t.at.x],ys:[t.at.y],axis:e};default:return{xs:[],ys:[],axis:e}}}const wo=5.8,tt=11,Ot=4;function jo(t,e){const r=e.text.length*wo,{frame:l}=e,a=e.anchorX+e.gap,n=a+r<=l.plotX1-4?"start":"end",s=n==="start"?a:e.anchorX-e.gap,c=n==="start"?s:s-r,p=c+r,u=x=>t.some(f=>c<f.x1&&p>f.x0&&x-tt<f.y1&&x+2>f.y0);let h=e.anchorY+3;for(let x=0;x<Ot&&u(h);x++)h+=tt;if(u(h)){h=e.anchorY+3;for(let x=0;x<Ot&&u(h);x++)h-=tt}return h=Math.min(Math.max(h,l.plotY0+tt),l.plotY1-tt),t.push({x0:c,x1:p,y0:h-tt,y1:h+2}),{x:s,y:h,anchor:n}}function Mo(t){return t.map((e,r)=>`${r===0?"M":"L"}${e.x.toFixed(2)},${e.y.toFixed(2)}`).join(" ")}function Lo(t){if(t.length===0)return"";const e=[`M${t[0].x.toFixed(2)},${t[0].y.toFixed(2)}`];for(let r=1;r<t.length;r++)e.push(`H${t[r].x.toFixed(2)}`,`V${t[r].y.toFixed(2)}`);return e.join(" ")}function Eo(t,e,r){if(t.length===0)return[];const l=t[0],a=t[t.length-1],n=[...t];if(e==="right"||e==="left"){const s=e==="right"?r.plotX1:r.plotX0;n.push({x:s,y:a.y},{x:s,y:l.y})}else{const s=e==="above"?r.plotY0:r.plotY1;n.push({x:a.x,y:s},{x:l.x,y:s})}return n}function Io({layer:t,frame:e}){if(t.stops.length===0)return null;const r=V(e,t),l=t.along==="y"?e.plotY1-e.plotY0:e.plotX1-e.plotX0;if(l<=0)return null;const a=t.along==="y"?e.plotY0:e.plotX0,n=t.along==="y"?r:e.scaleX,s=t.maxOpacity??ko,c=t.tint??G(t),p=`plot-field-${t.id}-${e.uid}`,u=`plot-field-blur-${t.id}-${e.uid}`,h=t.stops.map(x=>({offset:(n(x.at)-a)/l*100,intensity:Math.max(0,Math.min(1,x.intensity))})).sort((x,f)=>x.offset-f.offset);return i.jsxs(i.Fragment,{children:[i.jsxs("defs",{children:[i.jsx("linearGradient",{id:p,x1:"0%",y1:"0%",x2:t.along==="x"?"100%":"0%",y2:t.along==="y"?"100%":"0%",children:h.map((x,f)=>i.jsx("stop",{offset:`${x.offset.toFixed(2)}%`,stopColor:c,stopOpacity:s*x.intensity},f))}),t.blur!==void 0&&i.jsx("filter",{id:u,children:i.jsx("feGaussianBlur",{stdDeviation:t.blur})})]}),i.jsx("rect",{"data-plot-layer":t.id,"data-plot-layer-kind":"field",x:e.plotX0,y:e.plotY0,width:e.plotX1-e.plotX0,height:e.plotY1-e.plotY0,fill:`url(#${p})`,filter:t.blur!==void 0?`url(#${u})`:void 0})]})}const So=6,Co=56;function Ao(t,e,r,l){const a=Math.max(0,Math.min(e-1,Math.floor(r))),n=Math.max(0,Math.min(e-1,Math.floor(l))),s=Math.min(e-1,a+1),c=Math.min(e-1,n+1),p=Math.max(0,Math.min(1,r-a)),u=Math.max(0,Math.min(1,l-n)),h=t[n*e+a]+(t[n*e+s]-t[n*e+a])*p,x=t[c*e+a]+(t[c*e+s]-t[c*e+a])*p;return h+(x-h)*u}const et=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function To(t){const e=Math.max(0,Math.min(1,t));for(let r=1;r<et.length;r++)if(e<=et[r][0]){const[l,a]=et[r-1],[n,s]=et[r],c=n>l?(e-l)/(n-l):0;return[Math.round(a[0]+(s[0]-a[0])*c),Math.round(a[1]+(s[1]-a[1])*c),Math.round(a[2]+(s[2]-a[2])*c)]}return et[et.length-1][1]}function _o(t,e,r,l,a){const n=t[l*e+a],[s,c,p]=To(n/(r-1)),u=a>0?t[l*e+a-1]:n,h=l>0?t[(l-1)*e+a]:n,x=u!==n||h!==n?.5:1;return`rgb(${Math.round(s*x)}, ${Math.round(c*x)}, ${Math.round(p*x)})`}function Fo({layer:t,frame:e}){const{size:r,values:l,bounds:a}=t;if(r<2||l.length<r*r)return null;let n=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;for(let R=0;R<r*r;R++){const k=l[R];if(!Number.isFinite(k))return null;k<n&&(n=k),k>s&&(s=k)}const c=s-n,p=Math.max(2,t.bands??So),u=V(e,t),h=e.scaleX(a.x0),x=e.scaleX(a.x1),f=u(a.y0),y=u(a.y1),Y=Math.min(h,x),j=Math.min(f,y),v=Co,F=Math.abs(x-h)/v,A=Math.abs(y-f)/v;if(!(F>0)||!(A>0))return null;const P=f<y,z=new Int16Array(v*v);for(let R=0;R<v;R++)for(let k=0;k<v;k++){const _=Ao(l,r,k/(v-1)*(r-1),R/(v-1)*(r-1)),C=c>0?(_-n)/c:.5;z[R*v+k]=Math.max(0,Math.min(p-1,Math.floor(C*p)))}const B=[];for(let R=0;R<v;R++){const k=P?R:v-1-R;let _=0,C="";for(let I=0;I<=v;I++){const X=I<v?_o(z,v,p,R,I):"";if(I===0){C=X;continue}X===C&&I<v||(B.push(i.jsx("rect",{x:Y+_*F,y:j+k*A,width:(I-_)*F+.5,height:A+.5,fill:C},`${R}-${_}`)),_=I,C=X)}}return i.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"relief",opacity:W(t),"aria-hidden":"true",children:B})}function Ro({layer:t,frame:e}){const r=M.useId(),l=V(e,t),a=u=>({x:e.scaleX(u.x),y:l(u.y)}),n=t.boundary.map(a);if(n.length<2)return null;const s=t.side==="between"?[...n,...(t.boundaryHigh??[]).map(a).reverse()]:Eo(n,t.side,e);if(t.side==="between"&&!t.boundaryHigh)return null;const c=t.side==="right"?e.plotX1-4:t.side==="left"?e.plotX0+11:n[n.length-1].x,p=e.plotY1-34;return i.jsxs(i.Fragment,{children:[t.hatched&&i.jsx("defs",{children:i.jsx("pattern",{id:r,width:$t,height:$t,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:i.jsx("line",{x1:0,y1:0,x2:0,y2:$t,stroke:G(t),strokeWidth:1,strokeOpacity:t.opacity??yo})})}),i.jsx("polygon",{"data-plot-layer":t.id,"data-plot-layer-kind":"region","data-hatched":t.hatched?"":void 0,points:s.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)}`).join(" "),fill:t.hatched?`url(#${r})`:G(t),fillOpacity:t.hatched?void 0:t.opacity??vo}),e.labels&&t.label&&i.jsx("text",{x:c,y:p,transform:`rotate(-90 ${c} ${p})`,fontSize:mo,letterSpacing:"0.14em",fill:"var(--color-text-muted)",children:t.label})]})}function Oo({layer:t,frame:e}){const r=V(e,t),l=t.points.map(n=>({x:e.scaleX(n.x),y:r(n.y)}));if(l.length===0)return null;const a=xo*(t.weight??1);return t.style==="scatter"?i.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",fill:G(t),opacity:W(t),children:l.map((n,s)=>i.jsx("circle",{cx:n.x,cy:n.y,r:a},s))}):i.jsx("path",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",d:t.style==="step"?Lo(l):Mo(l),fill:"none",stroke:G(t),strokeOpacity:W(t),strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:t.dashed?"5 3.5":void 0})}function Po({layer:t,frame:e}){const r=V(e,t),l=t.dashed??!0,a=G(t),n=t.along==="y",s=n?r(t.value):e.scaleX(t.value);return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"rule",x1:n?e.plotX0:s,x2:n?e.plotX1:s,y1:n?s:e.plotY0,y2:n?s:e.plotY1,stroke:a,strokeOpacity:W(t),strokeWidth:1,strokeDasharray:l?"4 3":void 0}),e.labels&&t.label&&i.jsx("text",{x:n?e.plotX1-4:s+3,y:n?s-3:e.plotY0+10,textAnchor:n?"end":"start",fill:lt(t),fontSize:st,children:t.label})]})}function zo({layer:t,frame:e,placed:r}){const l=V(e,t),a=e.scaleX(t.at.x),n=l(t.at.y),s=t.across??"x",c=G(t),p=e.labels&&t.label?jo(r,{anchorX:a,anchorY:n,gap:at+3,text:t.label,frame:e}):null;return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"annotation",x1:s==="x"?a-at:a,x2:s==="x"?a+at:a,y1:s==="x"?n:n-at,y2:s==="x"?n:n+at,stroke:c,strokeOpacity:W(t),strokeWidth:1.75,strokeLinecap:"round"}),p&&t.label&&i.jsx("text",{x:p.x,y:p.y,textAnchor:p.anchor,fontSize:st,letterSpacing:"0.05em",fill:lt(t),fillOpacity:W(t),children:t.label})]})}function No({layer:t,frame:e}){const r=V(e,t),l=e.scaleX(t.at.x),a=r(t.at.y)+(t.offsetPx??0),n=go*(t.scale??1),s=G(t),c=t.shape??"dot",p={"data-plot-layer":t.id,"data-plot-layer-kind":"marker",opacity:W(t)},u=c==="dot"?i.jsx("circle",{...p,cx:l,cy:a,r:n,fill:s,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):c==="ring"?i.jsx("circle",{...p,cx:l,cy:a,r:n,fill:"none",stroke:s,strokeWidth:1.5}):c==="cross"?i.jsx("path",{...p,d:`M${l-n},${a} L${l+n},${a} M${l},${a-n} L${l},${a+n}`,stroke:s,strokeWidth:1.5,strokeLinecap:"round"}):i.jsx("polyline",{...p,points:c==="chevron-up"?`${l-n},${a+n*.5} ${l},${a-n*.5} ${l+n},${a+n*.5}`:`${l-n},${a-n*.5} ${l},${a+n*.5} ${l+n},${a-n*.5}`,fill:"none",stroke:s,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"});return i.jsxs(i.Fragment,{children:[u,e.labels&&t.label&&i.jsx("text",{x:l+n+3,y:a+3,fontSize:st,fill:lt(t),fillOpacity:W(t),children:t.label})]})}function Yo({layer:t,frame:e,row:r,edges:l}){const a=t.caption?2:1;if(t.anchor==="left-edge"||t.anchor==="right-edge"){const f=t.anchor==="left-edge"?e.plotX0+it+r*J:e.plotX1-it-r*J,y=e.plotY1-34;return i.jsx("text",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",x:f,y,transform:`rotate(-90 ${f} ${y})`,fontSize:st,letterSpacing:"0.14em",fill:lt(t),fillOpacity:W(t),children:t.text})}const n=t.anchor.startsWith("top"),s=t.anchor.endsWith("right"),c=f=>it+(f?bo:0),p=s?e.plotX1-c(l.right):e.plotX0+c(l.left),u=r*(a*J+2),h=n?e.plotY0+it+Rt+u:e.plotY1-it-u,x=h-J;return i.jsxs("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",textAnchor:s?"end":"start",children:[t.caption&&i.jsx("text",{x:p,y:n?h:x,fontSize:st,letterSpacing:"0.05em",fill:"var(--color-text-faint)",children:t.caption}),i.jsx("text",{x:p,y:t.caption&&n?h+J:h,fontSize:Rt,fontWeight:700,fill:lt(t),fillOpacity:W(t),children:t.text})]})}const Pt={relief:-1,field:0,region:1,series:2,rule:3,annotation:4,marker:5,caption:6},Bo={relief:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function wt({layers:t,frame:e,pass:r}){const l=t.map((c,p)=>({layer:c,index:p})).filter(({layer:c})=>Bo[c.kind]===r).sort((c,p)=>Pt[c.layer.kind]-Pt[p.layer.kind]||(c.layer.z??0)-(p.layer.z??0)||c.index-p.index),a=new Map,n=[],s={left:t.some(c=>c.kind==="caption"&&c.anchor==="left-edge"||c.kind==="region"&&c.side==="left"&&!!c.label),right:t.some(c=>c.kind==="caption"&&c.anchor==="right-edge"||c.kind==="region"&&c.side==="right"&&!!c.label)};return i.jsx(i.Fragment,{children:l.map(({layer:c,index:p})=>{const u=`${c.id}-${p}`;switch(c.kind){case"relief":return i.jsx(Fo,{layer:c,frame:e},u);case"field":return i.jsx(Io,{layer:c,frame:e},u);case"region":return i.jsx(Ro,{layer:c,frame:e},u);case"series":return i.jsx(Oo,{layer:c,frame:e},u);case"rule":return i.jsx(Po,{layer:c,frame:e},u);case"annotation":return i.jsx(zo,{layer:c,frame:e,placed:n},u);case"marker":return i.jsx(No,{layer:c,frame:e},u);case"caption":{const h=a.get(c.anchor)??0;return a.set(c.anchor,h+1),i.jsx(Yo,{layer:c,frame:e,row:h,edges:s},u)}default:return null}})})}function Xo(t){return t.map(e=>e.description).filter(e=>typeof e=="string"&&e.length>0)}const zt=11,xt=3,gt=4,Nt=(t,e)=>t.x0<e.x1&&e.x0<t.x1&&t.y0<e.y1&&e.y0<t.y1;function Do(t,e,r,l,a){let n=0,s=1;const c=r-t,p=l-e,u=[[-c,t-a.x0],[c,a.x1-t],[-p,e-a.y0],[p,a.y1-e]];for(const[h,x]of u){if(h===0&&x<0)return!1;if(h!==0){const f=x/h;h<0?n=Math.max(n,f):s=Math.min(s,f)}}return n<=s}function Ho(t,e){for(let r=1;r<t.cx.length;r++){const l=[t.cx[r-1],t.cy[r-1],t.cx[r],t.cy[r]];if(l.every(Number.isFinite)&&Do(l[0],l[1],l[2],l[3],e))return!0}return!1}function Wo({labels:t,plot:e,obstacles:r,traces:l}){const a=[],n=new Map;for(const s of t){const c={y0:s.lineY-xt-zt,y1:s.lineY-xt},p={y0:s.lineY+xt,y1:s.lineY+xt+zt},u={x0:e.x1-gt-s.width,x1:e.x1-gt},h={x0:e.x0+gt,x1:e.x0+gt+s.width},x=[{...u,...c,anchor:"end"},{...u,...p,anchor:"end"},{...h,...c,anchor:"start"},{...h,...p,anchor:"start"}];let f=null;for(const y of x){if(!(y.x0>=e.x0&&y.x1<=e.x1&&y.y0>=e.y0&&y.y1<=e.y1)||a.some(v=>Nt(y,v)))continue;const j=2*r.filter(v=>Nt(y,v)).length+l.filter(v=>Ho(v,y)).length;(f===null||j<f.cost)&&(f={spot:y,cost:j})}if(f===null){n.set(s.id,null);continue}a.push(f.spot),n.set(s.id,{x:f.spot.anchor==="end"?f.spot.x1:f.spot.x0,y:f.spot.y1-2,anchor:f.spot.anchor})}return n}const Ko=2.5;function Go(t,e){if(t.length===0)return!1;const r=t[t.length-1]-e;return r===0?!0:t.length===1?!1:Math.sign(t[0]-e)!==Math.sign(r)}function Uo(t,e){return t==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:e?t==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const Vo=(t,e)=>Zt(t-e[0],e[1]-e[0]),er=(t,e)=>Zt((t-e[0])*1e3,(e[1]-e[0])*1e3),jt={top:10,bottom:28,left:50};function Zo(t,e,r){const l=(n,s,c)=>Math.max(n,Math.min(c,s)),a=l(30,Math.round(t*.18),jt.left);return{top:jt.top,right:r?a:l(14,Math.round(t*.07),20),bottom:e<150?20:jt.bottom,left:a}}const qo=26;function Qo(t,e,r,l){const a=[],n=qo;for(let s=t+n/2;s<e;s+=n)for(let c=r+n/2;c<l;c+=n)a.push({key:`sg-${Math.round(s)}-${Math.round(c)}`,x:s,y:c});return a}const Jo=120,tn=90,en=70,on=35,nn=2,U=14,rn=6,an=12,Yt=10,sn=.2,Bt=.6,Xt="5 3",ln=.15,cn=.45,dn="the value is inside the shaded region";function pn(t){return(t.type??"line")==="band"&&t.data.y2?[...t.data.y,...t.data.y2]:t.data.y}function or({series:t,xDomain:e,yDomainPrimary:r,yDomainSecondary:l,xTickFormat:a=Vo,yTickFormat:n=un,yScalePrimary:s="linear",yScaleSecondary:c="linear",thresholds:p,legend:u="overlay",hideXAxis:h=!1,spatial:x=!1,layers:f,"aria-label":y,width:Y,height:j}){const v=M.useId(),F=Y,A=j,P=t.filter(o=>o.axis==="primary"&&o.data.x.length>0),z=t.filter(o=>o.axis==="secondary"&&o.data.x.length>0),B=z.length>0,R=x?{top:1,right:1,bottom:1,left:1}:Zo(F,A,B),k=R.left,_=F-R.right,C=R.top,I=A-R.bottom,X=_-k,ot=I-C,Z=X>=Jo&&ot>=tn,dt=M.useMemo(()=>{const o={primary:[],secondary:[]};for(const d of f??[]){const g=$o(d);o[g.axis].push(...g.ys)}return o},[f]),q=M.useMemo(()=>Dt(P,r,s,dt.primary),[P,r,s,dt]),Q=M.useMemo(()=>Dt(z,l,c,dt.secondary),[z,l,c,dt]),O=kt(e[0],e[1],k,_),D=s==="log"?Ft(q[0],q[1],I,C):kt(q[0],q[1],I,C),H=c==="log"?Ft(Q[0],Q[1],I,C):kt(Q[0],Q[1],I,C),Qt=Math.max(2,Math.min(8,Math.round(X/en))),Et=Math.max(2,Math.min(7,Math.round(ot/on))),mt=(o,d,g,E)=>{const w=Math.min(o,d),S=Math.max(o,d),m=(S-w)*1e-6||1e-6,$=L=>L>=w-m&&L<=S+m,T=L=>E==="log"?ho(w,S,L):Mt(w,S,L);for(let L=g;L<=64;L*=2){const N=T(L).filter($);if(N.length<2)continue;if(N.length<=g)return N;const rt=(N.length-1)/(g-1),ft=Array.from({length:g},(_n,re)=>N[Math.round(re*rt)]);return Array.from(new Set(ft))}return[w,S]},pt=mt(e[0],e[1],Qt,"linear"),It=mt(q[0],q[1],Et,s==="log"?"log":"linear"),St=B?mt(Q[0],Q[1],Et,c==="log"?"log":"linear"):[],Jt=M.useMemo(()=>{const o=[],d=pt.length-1;if(d<0)return o;const g=m=>m.length*6.5+6,E=6,w=m=>{const $=pt[m],T=a($,e),L=O($),N=g(T),rt=m===0?"start":m===d?"end":"middle",ft=rt==="start"?L:rt==="end"?L-N:L-N/2;return{x:L,text:T,anchor:rt,leftEdge:ft,rightEdge:ft+N}},S=w(0);if(o.push({x:S.x,text:S.text,anchor:S.anchor}),d>=1){const m=w(d);if(m.leftEdge>=S.rightEdge+E){let $=S.rightEdge;for(let T=1;T<d;T++){const L=w(T);L.leftEdge>=$+E&&L.rightEdge<=m.leftEdge-E&&(o.push({x:L.x,text:L.text,anchor:L.anchor}),$=L.rightEdge)}o.push({x:m.x,text:m.text,anchor:m.anchor})}}return o},[pt,e,O,a]),Ct=(o,d)=>{const g=new Set,E=o.length;if(E===0||(g.add(0),E===1))return g;const w=16,S=d(o[0]),m=d(o[E-1]);if(Math.abs(m-S)>=w){let $=S;for(let T=1;T<E-1;T++){const L=d(o[T]);Math.abs(L-$)>=w&&Math.abs(m-L)>=w&&(g.add(T),$=L)}g.add(E-1)}return g},te=Ct(It,D),ee=Ct(St,H),K=M.useMemo(()=>t.filter(o=>o.data.x.length>0).map(o=>{const d=o.axis==="primary"?D:H,g=o.type??"line";if(g==="band")return o.data.y2?{id:o.id,kind:"band",color:o.color,opacity:o.fillOpacity??sn,d:qt(o.data.x,o.data.y,o.data.y2,O,d)}:{id:o.id,kind:"noop"};if(g==="scatter"){const m=o.data.x.map(($,T)=>({cx:O($),cy:d(o.data.y[T])}));return{id:o.id,kind:"scatter",color:o.color,points:m}}const E=g==="step"?co:_t,w=(o.data.bridges??[]).filter(m=>lo(o.data.x,o.data.y,m,O,d)),S=[...new Set([...o.data.breaks??[],...w.map(m=>m.to)])].sort((m,$)=>m-$);return{id:o.id,kind:"stroked",color:o.color,dashed:o.dashed??!1,uncertainty:uo(o.data.x,o.data.reckoned??[],O,d),segments:po(o.data.x,o.data.y,O,d,E,S,o.data.spans,o.data.reckoned),modelled:w.map(m=>({basis:m.basis,d:_t([o.data.x[m.to-1],...m.t,o.data.x[m.to]],[o.data.y[m.to-1],...m.v,o.data.y[m.to]],O,d)})),tail:o.data.x.length>0&&(o.data.reckoned??[]).some(m=>m.to>=o.data.x.length-1)?{cx:O(o.data.x[o.data.x.length-1]),cy:d(o.data.y[o.data.y.length-1])}:null,observed:[...new Set(w.flatMap(m=>[m.to-1,m.to]))].map(m=>({cx:O(o.data.x[m]),cy:d(o.data.y[m])}))}}),[t,O,D,H]),ut=M.useMemo(()=>p?p.map(o=>{const d=o.axis??"primary",g=t.filter(w=>w.axis===d&&w.type!=="band"&&!w.dashed),E=o.kind==="limit"?g.some(w=>{const S=w.data.y.filter(m=>Number.isFinite(m));return S.length>0&&Vt(S[S.length-1],o.value,o.bad)}):o.kind==="target"&&g.some(w=>Go(w.data.y,o.value));return{id:o.id,label:o.label,kind:o.kind,passed:E,currency:se(o.reading,{drawsReckoning:!0}),tone:Uo(o.kind,E),dashed:o.kind!=="marker",y:d==="primary"?D(o.value):H(o.value)}}):[],[p,t,D,H]),ht=M.useMemo(()=>{const o=(d,g,E)=>Math.max(d,Math.min(E,g));return(p??[]).flatMap(d=>{if(d.kind!=="limit"||!Number.isFinite(d.value))return[];const g=d.axis??"primary",E=g==="primary"?D:H,w=E(d.value),S=d.bad==="above"?-1:1,m=d.label||`the limit at ${n(d.value)}`;return t.filter($=>$.axis===g&&$.data.x.length>0&&($.type??"line")!=="band"&&!$.dashed).flatMap($=>io({y:$.data.y,cx:$.data.x.map(O),cy:$.data.y.map(E),limit:d.value,limitY:w,bad:d.bad,breaks:$.data.breaks,step:$.type==="step"||$.type==="scatter",minGapPx:U}).slice(Z?0:-1).map(T=>{const L=n($.data.y[T.index]),N=a($.data.x[T.index],e);return{key:`${d.id}-${$.id}-${T.index}`,color:$.color,x:o(k+U/2+1,T.x-Yt*(T.entered?1:-1),_-U/2-1),y:o(C+U/2+1,T.y+S*Yt,I-U/2-1),text:T.entered?T.spells>1?`${$.label} went past ${m} ${T.spells} times from ${N}, first reading ${L}`:`${$.label} went past ${m} at ${N}, reading ${L}`:`${$.label} was already past ${m} when this window began at ${N}, reading ${L}`}}))})},[p,t,O,D,H,a,n,e,k,_,C,I,Z]),nt=M.useMemo(()=>{if(!Z)return new Map;const o=U/2;return Wo({labels:ut.filter(d=>d.label).map(d=>({id:d.id,width:(d.label?.length??0)*rn+(d.currency.held?an:0),lineY:d.y})),plot:{x0:k,y0:C,x1:_,y1:I},obstacles:[...ht.map(d=>({x0:d.x-o,y0:d.y-o,x1:d.x+o,y1:d.y+o})),...u==="none"?[]:t.map((d,g)=>({x0:k+3,y0:C+6+g*16,x1:k+3+Math.min(d.label.length*6+8,X-6),y1:C+6+g*16+13}))],traces:t.filter(d=>(d.type??"line")!=="band").map(d=>({cx:d.data.x.map(O),cy:d.data.y.map(d.axis==="primary"?D:H)}))})},[Z,ut,ht,u,t,O,D,H,k,_,C,I,X]),oe=t.flatMap(o=>{const d=K.find(m=>m.id===o.id),g=d?.kind==="stroked"?d.modelled.map(m=>m.basis):[],E=o.data.reckoned??[];if(E.length===0&&g.length===0)return[];const S=[...new Set([...E.map(m=>m.basis),...g])].map(m=>`${o.label}: part of this trace is reckoned, ${le(m)}, not measured`);return E.some(m=>m.bandLo&&m.bandHi)&&S.push(`${o.label}: ${dn}`),S}),ne=ut.flatMap(o=>{const d=o.label??o.id,g=[];return o.passed&&o.kind==="limit"&&g.push(`${d}: limit passed`),o.passed&&o.kind==="target"&&g.push(`${d}: target reached`),o.currency.held&&g.push(ce(d,o.currency.caption)),o.label&&!nt.get(o.id)&&g.length===0&&g.push(o.label),g}),At=[y??"Telemetry line chart",...Xo(f??[]),...oe,...ne].join("; "),bt={scaleX:O,scaleYPrimary:D,scaleYSecondary:H,plotX0:k,plotX1:_,plotY0:C,plotY1:I,uid:v,labels:Z},vt=`plot-layer-clip-${v}`;return X<=0||ot<=0?i.jsx("svg",{width:Math.max(0,F),height:Math.max(0,A),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:i.jsx("title",{children:"Chart too small to render"})}):i.jsxs("svg",{width:F,height:A,role:ht.length>0?"group":"img","aria-label":At,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block"},children:[i.jsx("title",{children:At}),f&&f.length>0&&i.jsx("defs",{children:i.jsx("clipPath",{id:vt,children:i.jsx("rect",{x:k,y:C,width:X,height:ot})})}),i.jsx("rect",{x:k,y:C,width:X,height:ot,fill:"var(--color-surface-panel)"}),f&&f.length>0&&i.jsx("g",{clipPath:`url(#${vt})`,children:i.jsx(wt,{layers:f,frame:bt,pass:"background"})}),!x&&It.map((o,d)=>{const g=D(o);return i.jsxs(yt.Fragment,{children:[i.jsx("line",{x1:k,y1:g,x2:_,y2:g,stroke:"var(--color-border-subtle)",strokeWidth:1}),te.has(d)&&i.jsx("text",{x:k-4,y:g,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:n(o)})]},`py-${d}`)}),!x&&St.map((o,d)=>ee.has(d)?i.jsx("text",{x:_+4,y:H(o),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:n(o)},`sy-${d}`):null),!h&&!x&&pt.map((o,d)=>i.jsx("line",{x1:O(o),y1:C,x2:O(o),y2:I,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${d}`)),!h&&!x&&Jt.map((o,d)=>i.jsx("text",{x:o.x,y:I+14,textAnchor:o.anchor,fill:"var(--color-text-faint)",fontSize:11,children:o.text},`xl-${d}`)),x&&Qo(k,_,C,I).map(o=>i.jsx("circle",{cx:o.x,cy:o.y,r:1,fill:"var(--color-text-faint)",opacity:.35},o.key)),!x&&i.jsxs(i.Fragment,{children:[i.jsx("line",{x1:k,y1:C,x2:k,y2:I,stroke:"var(--color-border-strong)",strokeWidth:1}),i.jsx("line",{x1:k,y1:I,x2:_,y2:I,stroke:"var(--color-border-strong)",strokeWidth:1}),B&&i.jsx("line",{x1:_,y1:C,x2:_,y2:I,stroke:"var(--color-border-strong)",strokeWidth:1})]}),K.filter(o=>o.kind==="band").map(o=>i.jsx("path",{d:o.d,fill:o.color,fillOpacity:o.opacity,stroke:"none"},o.id)),K.filter(o=>o.kind==="stroked").flatMap(o=>o.uncertainty.map((d,g)=>i.jsx("path",{d:d.d,"data-band-kind":d.kind,fill:o.color,fillOpacity:ln,stroke:d.kind==="bound"?o.color:"none",strokeOpacity:d.kind==="bound"?cn:void 0,strokeWidth:d.kind==="bound"?1:void 0},`${o.id}-band-${g}`))),K.filter(o=>o.kind==="stroked").flatMap(o=>o.segments.map((d,g)=>i.jsx("path",{d:d.d,"data-stream-status":d.status,"data-reckoning-basis":d.basis,stroke:o.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:d.basis!==void 0?Bt:void 0,strokeDasharray:d.basis!==void 0?Xt:o.dashed?"4 3":void 0},`${o.id}-${g}`))),K.filter(o=>o.kind==="stroked").flatMap(o=>o.modelled.map((d,g)=>i.jsx("path",{d:d.d,"data-reckoning-basis":d.basis,stroke:o.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:Bt,strokeDasharray:Xt},`${o.id}-modelled-${g}`))),K.map(o=>o.kind==="stroked"&&o.tail!==null?i.jsx(de,{kind:"modelled",x:o.tail.cx,y:o.tail.cy},`${o.id}-tail`):null),K.filter(o=>o.kind==="stroked").flatMap(o=>o.observed.map((d,g)=>i.jsx("circle",{cx:d.cx,cy:d.cy,r:Ko,fill:o.color,"data-observed-sample":""},`${o.id}-observed-${g}`))),K.filter(o=>o.kind==="scatter").flatMap(o=>o.points.map((d,g)=>i.jsx("circle",{cx:d.cx,cy:d.cy,r:nn,fill:o.color},`${o.id}-${g}`))),f&&f.length>0&&i.jsx("g",{clipPath:`url(#${vt})`,children:i.jsx(wt,{layers:f,frame:bt,pass:"foreground"})}),ut.map(o=>i.jsxs(yt.Fragment,{children:[i.jsx("line",{x1:k,y1:o.y,x2:_,y2:o.y,stroke:o.tone.line,strokeWidth:1,strokeDasharray:o.dashed?"4 3":void 0,"data-threshold-kind":o.kind,"data-threshold-passed":o.passed||void 0}),o.label&&nt.get(o.id)&&i.jsxs("text",{x:nt.get(o.id)?.x,y:nt.get(o.id)?.y,textAnchor:nt.get(o.id)?.anchor,fill:o.tone.label,fontSize:10,children:[o.label,o.currency.held&&i.jsx(pe,{size:10,kind:o.currency.mark??"held"})]})]},o.id)),ht.map(o=>i.jsx(ao,{x:o.x,y:o.y,size:U,color:o.color,text:o.text},o.key)),u!=="none"&&t.map((o,d)=>{const g=C+6+d*16;if(g+13>I)return null;const E=Math.min(o.label.length*6+8,X-6),w=Math.max(1,Math.floor((E-8)/6)),S=o.label.length>w?`${o.label.slice(0,Math.max(1,w-1))}...`:o.label;return i.jsxs(yt.Fragment,{children:[i.jsx("rect",{x:k+3,y:g,width:E,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),i.jsx("text",{x:k+6,y:g+10,fill:o.color,fontSize:10,children:S})]},o.id)}),f&&f.length>0&&Z&&i.jsx(wt,{layers:f,frame:bt,pass:"caption"})]})}function Dt(t,e,r,l=[]){if(e)return e;if(t.length===0&&l.length===0)return r==="log"?[1,10]:[0,1];let a=[...t.flatMap(pn),...l];return r==="log"&&(a=a.filter(n=>n>0)),a.length===0?r==="log"?[1,10]:[0,1]:[Math.min(...a),Math.max(...a)]}function un(t){if(t===0)return"0";if(Math.abs(t)>=1e6)return`${(t/1e6).toFixed(1)}M`;if(Math.abs(t)>=1e3)return`${(t/1e3).toFixed(1)}k`;if(Number.isInteger(t))return String(t);if(Math.abs(t)<.01){const e=Math.floor(Math.log10(Math.abs(t))),r=t/10**e;return Math.abs(r-1)<1e-9?`1e${e}`:`${r.toFixed(1)}e${e}`}return t.toFixed(2)}const nr=b.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function rr({state:t,elapsedMs:e}){if(t==="connected")return null;const r=t==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return i.jsxs(Kt,{accent:fn[t],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[i.jsx(xn,{children:r}),i.jsxs(gn,{children:["T+",hn(e)]})]})}function hn(t){const e=Math.max(0,Math.floor(t/1e3)),r=Math.floor(e/3600),l=Math.floor(e%3600/60),a=e%60,n=s=>String(s).padStart(2,"0");return r>0?`${r}:${n(l)}:${n(a)}`:`${n(l)}:${n(a)}`}const fn={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},xn=b.span`
  font-weight: 600;
`,gn=b.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function ar({entries:t}){return t.length===0?null:i.jsxs(bn,{role:"status","aria-live":"polite",children:[i.jsx(vn,{}),i.jsx(yn,{children:"SOURCE OFFLINE"}),i.jsx(kn,{children:t.map(e=>i.jsxs($n,{children:[i.jsx(wn,{children:e.name}),i.jsx(jn,{children:e.status}),i.jsx(Mn,{children:mn(e.elapsedMs)}),e.onRetry&&i.jsx(Ht,{size:"sm",onClick:e.onRetry,"aria-label":`Retry ${e.name} now`,children:"Retry now"})]},e.id))})]})}function mn(t){return xe(ge("irl:s",t/1e3))}const bn=b.div`
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
`,vn=b.span`
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
`,yn=b.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,kn=b.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,$n=b.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,wn=b.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,jn=b.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,Mn=b.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,ir=b.div`
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
`,sr=b.div`
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
`,lr=b.div`
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,cr=b.input`
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
`,dr=b.button`
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
`,pr=b.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,ur=b.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,hr=b.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,fr=b.button`
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
`,xr=b.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,Ln={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},En={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function In(t){return Ln[t]??En}function gr({label:t}){const e=In(t);return i.jsx(Sn,{$bg:e.bg,$fg:e.fg,$border:e.border,children:t})}const Sn=b.span`
  display: inline-block;
  padding: var(--inset-chip);
  border-radius: var(--radius-regular);
  font-size: var(--font-size-caption);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${({$bg:t,$fg:e,$border:r})=>ct`
    background: ${t};
    color: ${e};
    border: 1px solid ${r};
  `}
`;me({id:"default-dark",name:"Default Dark",theme:ue});function mr({kind:t,local:e,remote:r,remoteLabel:l="Peer"}){const a=t==="major"?"alert":"status",n=t==="major"?"RELOAD REQUIRED":t==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",s=t==="unknown"?`${l} didn't report a version`:`${l} v${r??"?"} ↔ this v${e}`;return i.jsxs(Kt,{accent:Cn[t],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:a,children:[i.jsx(An,{children:n}),i.jsx(Tn,{children:s})]})}const Cn={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},An=b.span`
  font-weight: 600;
`,Tn=b.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{ir as A,Kt as B,so as C,Vn as D,sr as E,Qn as F,lr as G,cr as H,dr as I,pr as J,hr as K,or as L,fr as M,xr as N,nr as P,ur as R,rr as S,gr as T,mr as V,Gn as a,Un as b,Zn as c,qn as d,Jn as e,tr as f,wt as g,ar as h,qt as i,_t as j,po as k,co as l,uo as m,lo as n,Eo as o,Zt as p,In as q,Ft as r,kt as s,ho as t,Mt as u,Xo as v,$o as w,Vo as x,Ue as y,er as z};
