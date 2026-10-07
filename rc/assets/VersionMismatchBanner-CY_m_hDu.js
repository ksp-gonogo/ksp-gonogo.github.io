import{j as i}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import m,{css as ct}from"./ext-styled-components-Br73TgY3.js";import{d as Ht,Z as re,C as ae,a2 as Wt,a4 as ie,a6 as se,aq as le,aj as ce,af as de,a7 as pe,W as ue}from"./reckoningMarkDraw-YWRXTfQ-.js";import{r as L,R as yt}from"./ext-react-RRA14VTW.js";import{T as he,d as fe,w as xe}from"./streamStatusWord-B4jOD6yJ.js";import{v as ge}from"./view-clock-formula-jZ84F5ld.js";import"./ksp-enum-names-BonGv7cH.js";import"./screen-B-SznzLc.js";import"./lagrange-Bh47AJBp.js";import"./use-transmissions-Cisu7ffk.js";import"./websocket-transport-M2lDEz_i.js";import{r as me}from"./registry-DgT-5phq.js";import"./index-CnzDwjkh.js";function Kt({accent:t,anchor:e="inline",top:r=12,zIndex:s=999,glow:a,pulse:n=!1,role:l="status",ariaLive:c,onClick:p,interactive:h=!1,children:u}){const x=c??(l==="alert"?"assertive":"polite");return e==="top"?i.jsxs(be,{$accent:t,$top:r,$zIndex:s,$glow:a,role:l,"aria-live":x,children:[i.jsx(Tt,{$accent:t,$pulse:n}),u]}):i.jsxs(ve,{as:p?"button":"div",type:p?"button":void 0,$accent:t,$glow:a,$clickable:!!p,$interactive:h,role:l,"aria-live":x,onClick:p,children:[i.jsx(Tt,{$accent:t,$pulse:n}),u]})}const be=m.div`
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
`,ve=m.div`
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
`,Tt=m.span`
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
`;function Hn({children:t}){return i.jsx(ye,{children:t})}const ye=m.div`
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
`,ke=2e3,$e={copied:t=>`Copied ${t}`,failed:()=>"Could not copy, select the text instead"};function Wn({command:t,label:e}){const[r,s]=L.useState("idle"),a=L.useRef(void 0);L.useEffect(()=>()=>clearTimeout(a.current),[]);async function n(){let l="copied";try{await navigator.clipboard.writeText(t)}catch{l="failed"}s(l),clearTimeout(a.current),a.current=setTimeout(()=>s("idle"),ke)}return i.jsxs(we,{children:[i.jsx(je,{role:"group","aria-label":e,tabIndex:0,children:i.jsx(Me,{children:t})}),i.jsx(Ht,{variant:"ghost",type:"button",onClick:()=>void n(),"aria-label":`Copy ${e}`,children:r==="copied"?"Copied":"Copy"}),i.jsx(re,{visuallyHidden:!0,children:$e[r]?.(e)})]})}const we=m.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,je=m.div`
  flex: 1;
  min-width: 0;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Me=m.code`
  display: block;
  width: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  line-height: var(--line-height-prose);
  color: var(--color-text-primary);
  white-space: pre;
  user-select: all;
`;function Le(t,e){if(!e)return!0;const r=e.toLowerCase();return(t.label??t.key).toLowerCase().includes(r)||t.key.toLowerCase().includes(r)}function Kn({keys:t,value:e,onChange:r,placeholder:s="Search...",emptyHint:a="No matches"}){const[n,l]=L.useState(""),c=L.useMemo(()=>t.filter(u=>Le(u,n)),[t,n]),p=L.useMemo(()=>{const u=new Map;for(const x of c){const f=x.group??"Other";let k=u.get(f);k||(k=[],u.set(f,k)),k.push(x)}return[...u.entries()].sort(([x],[f])=>x.localeCompare(f))},[c]),h=u=>{const x=new Set(e);x.has(u)?x.delete(u):x.add(u),r(x)};return i.jsxs(Ie,{children:[i.jsx(Ee,{type:"text",value:n,placeholder:s,onChange:u=>l(u.target.value)}),i.jsx(Se,{children:p.length===0?i.jsx(ze,{children:a}):p.map(([u,x])=>i.jsxs(Ce,{children:[i.jsx(Ae,{children:u}),x.map(f=>{const k=e.has(f.key),Y=`dkmp-${f.key}`;return i.jsxs(Te,{$checked:k,children:[i.jsx(_e,{id:Y,type:"checkbox",checked:k,onChange:()=>h(f.key)}),i.jsxs(Fe,{htmlFor:Y,children:[i.jsx(Oe,{$checked:k,children:k&&i.jsx(ae,{size:11,strokeWidth:3})}),i.jsx(Re,{children:f.label??f.key}),f.unit&&i.jsx(Pe,{children:f.unit})]})]},f.key)})]},u))})]})}const Ie=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
`,Ee=m.input`
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
`,Se=m.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  max-height: 260px;
  overflow-y: auto;
`,Ce=m.div``,Ae=m.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-panel);
`,Te=m.div`
  background: ${({$checked:t})=>t?"var(--color-go-muted)":"transparent"};

  &:hover {
    background: var(--color-surface-raised);
  }
`,_e=m.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,Fe=m.label`
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  padding: var(--inset-surface);
  cursor: pointer;
  user-select: none;
`,Oe=m.span`
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
`,Re=m.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  flex: 1;
`,Pe=m.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  /* Margin rather than gap: the parent is not a flex box. */
  margin-left: var(--gap-trailing-mark);
`,ze=m.div`
  padding: var(--inset-empty-menu);
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  text-align: center;
`;function Gn({show:t,message:e,hint:r,children:s}){return t?i.jsxs(Ne,{children:[i.jsx(Ye,{"aria-hidden":"true",children:s}),i.jsxs(Be,{role:"status","aria-live":"polite",children:[i.jsx(Xe,{children:e}),r&&i.jsx(De,{children:r})]})]}):i.jsx(i.Fragment,{children:s})}const Ne=m.div`
  position: relative;
  width: 100%;
  /* Grows in a flex-column parent without height: 100%, which would push siblings out. */
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,Ye=m.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  opacity: 0.35;
  pointer-events: none;
  filter: saturate(0.5);
  transition: opacity var(--duration-slow) var(--ease-standard);
`,Be=m.div`
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
`,Xe=m.span`
  font-size: var(--font-size-compact);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-primary);
`,De=m.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-faint);
  letter-spacing: 0.04em;
`,Gt=L.createContext(null),He=400;function Un({children:t}){const[e,r]=L.useState(!1),s=L.useRef(null),a=L.useCallback(()=>{s.current!==null&&(window.clearTimeout(s.current),s.current=null)},[]),n=L.useCallback(()=>{a(),r(!0)},[a]),l=L.useCallback(()=>{a(),s.current=window.setTimeout(()=>{s.current=null,r(!1)},He)},[a]);L.useEffect(()=>()=>a(),[a]);const c=L.useMemo(()=>({active:e,onMouseEnter:n,onMouseLeave:l,onFocus:n,onBlur:l}),[e,n,l]);return i.jsx(Gt.Provider,{value:c,children:t})}function We(){return L.useContext(Gt)}function Vn({bottom:t,children:e,...r}){const s=We(),a=s?.active??!0,n=r["aria-label"]??r.title;return i.jsxs(Ke,{$visible:a,$bottom:t,onMouseEnter:s?.onMouseEnter,onMouseLeave:s?.onMouseLeave,onFocus:s?.onFocus,onBlur:s?.onBlur,children:[n?i.jsx(Ge,{$visible:a,"aria-hidden":"true",children:n}):null,i.jsx(Ue,{$visible:a,tabIndex:a?0:-1,...r,children:e})]})}const Ke=m.div`
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
`,Ge=m.span`
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
`,Ue=m.button`
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
`;function Zn({bottom:t,label:e,onAccept:r,onDismiss:s,autoDismissMs:a=15e3,acceptLabel:n}){return L.useEffect(()=>{if(a<=0)return;const l=window.setTimeout(s,a);return()=>window.clearTimeout(l)},[a,s]),i.jsxs(Ve,{$bottom:t,role:"status","aria-live":"polite",children:[i.jsx(Ze,{type:"button",onClick:r,"aria-label":n??e,children:e}),i.jsx(Wt,{text:"Dismiss",children:i.jsx(qe,{type:"button",onClick:s,"aria-label":"Dismiss",children:"×"})})]})}const Ve=m.div`
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
`,Ze=m.button`
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
`,qe=m.button`
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
`,qn=L.forwardRef(function({id:e,label:r="Choose file",accept:s,multiple:a,fileName:n,emptyText:l="No file chosen",disabled:c,onChange:p},h){const u=L.useId(),x=e??u,f=L.useRef(null);return i.jsxs(Qe,{children:[i.jsx(to,{id:x,ref:k=>{if(f.current=k,typeof h=="function"){h(k);return}h&&(h.current=k)},type:"file",accept:s,multiple:a,disabled:c,onChange:p}),i.jsx(Je,{htmlFor:x,$disabled:!!c,children:r}),i.jsx(eo,{"aria-live":"polite",$hasFile:!!n,children:n??l})]})}),Qe=m.div`
  display: flex;
  align-items: center;
  gap: var(--gap-attachment);
  flex-wrap: wrap;
`,Je=m.label`
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
`,to=m.input`
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
`,eo=m.span`
  font-size: var(--font-size-compact);
  color: ${({$hasFile:t})=>t?"var(--color-text-primary)":"var(--color-text-faint)"};
  word-break: break-all;
`;function oo({x:t,y:e,size:r,color:s,text:a}){const n=r/2,l=`M 0 ${-n} L ${n} ${n*.8} L ${-n} ${n*.8} Z`,c=`M -0.9 ${-n*.42} H 0.9 V ${n*.2} H -0.9 Z`,p=`M -0.9 ${n*.4} H 0.9 V ${n*.64} H -0.9 Z`;return i.jsx(Wt,{text:a,focusable:!0,children:i.jsxs("g",{role:"img","aria-label":a,"data-limit-crossing":"",transform:`translate(${t} ${e})`,children:[i.jsx("title",{}),i.jsx("circle",{r:12,fill:"transparent"}),i.jsx("path",{d:`${l} ${c} ${p}`,fillRule:"evenodd",fill:"var(--color-warn-mark)"}),i.jsx("path",{d:l,fill:"none",stroke:s,strokeWidth:1.5,strokeLinejoin:"round"})]})})}function Ut(t,e,r){return r==="above"?t>=e:t<=e}function no({y:t,cx:e,cy:r,limit:s,limitY:a,bad:n,breaks:l=[],step:c=!1,minGapPx:p}){const h=(y,F,A)=>{if(!F)return{index:y,x:e[y],y:r[y],entered:!1};if(A===null)return{index:y,x:e[y],y:a,entered:!0};const P=r[y]-r[A],z=P===0?1:(a-r[A])/P;return{index:y,x:e[A]+(e[y]-e[A])*z,y:a,entered:!0}},u=new Set(l),x=[];let f=null,k=!1,Y=!1,j=Number.NEGATIVE_INFINITY;for(let y=0;y<t.length;y++){if(!Number.isFinite(t[y])){f=null;continue}const F=Ut(t[y],s,n);if(F&&!Y){const A=h(y,k,c||u.has(y)?null:f),P=x[x.length-1];P!==void 0&&A.x-j<p?P.spells++:x.push({...A,spells:1}),j=A.x}Y=F,k=!0,f=y}return x}const ro=1;function ao(t,e,r,s,a){const n=r.to;if(n<1||n>=t.length)return!1;const l=s(t[n-1]),c=s(t[n]),p=a(e[n-1]),h=a(e[n]);return c>l?r.t.some((u,x)=>{const f=s(u),k=p+(h-p)*(f-l)/(c-l);return Math.abs(a(r.v[x])-k)>ro}):!1}function kt(t,e,r,s){const a=e-t;if(a===0){const n=(r+s)/2;return()=>n}return n=>r+(n-t)/a*(s-r)}function Mt(t,e,r=5){if(t===e)return Array.from({length:r},()=>t);const a=(e-t)/(r-1),n=10**Math.floor(Math.log10(a)),c=([1,2,2.5,5,10].find(f=>f*n>=a)??10)*n,p=Math.ceil(t/c)*c,h=[];for(let f=0;h.length<r;f++){const k=p+f*c;if(k>e+c*.01)break;h.push(k)}if(h.length>=2)return h;const u=Math.floor(t/c)*c,x=Math.ceil(e/c)*c;return x>u?[u,x]:[u,u+c]}function Vt(t,e){const r=Math.floor(t/1e3);if(e>=36e5){const n=Math.floor(r/3600),l=Math.floor(r%3600/60),c=r%60;return`${n}:${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`}const s=Math.floor(r/60),a=r%60;return`${s}:${String(a).padStart(2,"0")}`}function _t(t,e,r,s,a=[]){if(t.length===0)return"";const n=[];for(let l=0;l<t.length;l++){const c=r(t[l]).toFixed(2),p=s(e[l]).toFixed(2),h=l===0||a.includes(l);n.push(`${h?"M":"L"}${c},${p}`),h&&Lt(l,t.length,a)&&n.push(`L${c},${p}`)}return n.join(" ")}function Lt(t,e,r){return t+1>=e||r.includes(t+1)}function io(t,e,r,s,a=[]){if(t.length===0)return"";const n=[];let l=s(e[0]).toFixed(2);const c=r(t[0]).toFixed(2);n.push(`M${c},${l}`),Lt(0,t.length,a)&&n.push(`L${c},${l}`);for(let p=1;p<t.length;p++){const h=r(t[p]).toFixed(2),u=s(e[p]).toFixed(2);if(a.includes(p)){n.push(`M${h},${u}`),Lt(p,t.length,a)&&n.push(`L${h},${u}`),l=u;continue}n.push(`H${h}`),u!==l&&n.push(`V${u}`),l=u}return n.join(" ")}function so(t,e,r,s,a,n=[],l=[],c=[]){if(t.length===0)return[];if(l.length===0&&c.length===0)return[{d:a(t,e,r,s,n)}];function p(j,y){const F=new Array(t.length);for(const A of j){const P=Math.min(t.length-1,A.to);for(let z=Math.max(0,A.from);z<=P;z++)F[z]=y(A)}return F}const h=p(l,j=>j.status),u=p(c,j=>j.basis),x=new Set(n),f=[];let k=0;const Y=(j,y)=>{const F=j>0&&!x.has(j)?j-1:j,A=B=>B.slice(F,y+1),P=[];for(const B of n)B>F&&B<=y&&P.push(B-F);const z=a(A(t),A(e),r,s,P);z!==""&&f.push({status:h[j],basis:u[j],d:z})};for(let j=1;j<=t.length;j++)(j===t.length||h[j]!==h[k]||u[j]!==u[k])&&(Y(k,j-1),k=j);return f}function Zt(t,e,r,s,a){if(t.length===0)return"";const n=Math.min(t.length,e.length,r.length);if(n===0)return"";const l=[];for(let c=0;c<n;c++){const p=s(t[c]).toFixed(2),h=a(r[c]).toFixed(2);l.push(`${c===0?"M":"L"}${p},${h}`)}for(let c=n-1;c>=0;c--){const p=s(t[c]).toFixed(2),h=a(e[c]).toFixed(2);l.push(`L${p},${h}`)}return l.push("Z"),l.join(" ")}function lo(t,e,r,s){const a=[];for(const n of e){const{bandLo:l,bandHi:c,bandKind:p}=n;if(!l||!c||p===void 0)continue;const h=[];for(let x=n.from;x<=n.to&&x<t.length;x++)h.push(t[x]);const u=Zt(h,l,c,r,s);u!==""&&a.push({d:u,kind:p})}return a}function Ft(t,e,r,s){if(t===e){const h=(r+s)/2;return()=>h}const a=t>0?t:1e-9,n=e>a?e:a*10,l=Math.log10(a),p=Math.log10(n)-l;if(p===0){const h=(r+s)/2;return()=>h}return h=>{const u=h>0?h:a;return r+(Math.log10(u)-l)/p*(s-r)}}function co(t,e,r=5){if(!(t>0)||!(e>0)||e<=t)return Mt(t,e,r);const s=Math.log10(t),a=Math.log10(e);if(a-s<1)return Mt(t,e,r);const l=Math.ceil(s),c=Math.floor(a),p=Math.max(1,Math.ceil((c-l+1)/r)),h=[];for(let u=l;u<=c;u+=p)h.push(10**u);return h.length>0?h:[t,e]}const po={faint:.45,normal:.85,bright:1},uo=1.5,ho=5,at=7,it=6,Ot=10,st=9,J=12,fo=9,xo=13,go=.1,$t=5,mo=.5,bo=.5;function G(t){return fe[t.tone??"neutral"]}function lt(t){return he[t.tone??"neutral"]}function W(t){return po[t.emphasis??"normal"]}function V(t,e){return e.axis==="secondary"?t.scaleYSecondary:t.scaleYPrimary}function vo(t){const e=t.axis==="secondary"?"secondary":"primary";switch(t.kind){case"series":return{xs:t.points.map(r=>r.x),ys:t.points.map(r=>r.y),axis:e};case"region":return{xs:[...t.boundary,...t.boundaryHigh??[]].map(r=>r.x),ys:[...t.boundary,...t.boundaryHigh??[]].map(r=>r.y),axis:e};case"rule":return t.along==="y"?{xs:[],ys:[t.value],axis:e}:{xs:[t.value],ys:[],axis:e};case"marker":case"annotation":return{xs:[t.at.x],ys:[t.at.y],axis:e};default:return{xs:[],ys:[],axis:e}}}const yo=5.8,tt=11,Rt=4;function ko(t,e){const r=e.text.length*yo,{frame:s}=e,a=e.anchorX+e.gap,n=a+r<=s.plotX1-4?"start":"end",l=n==="start"?a:e.anchorX-e.gap,c=n==="start"?l:l-r,p=c+r,h=x=>t.some(f=>c<f.x1&&p>f.x0&&x-tt<f.y1&&x+2>f.y0);let u=e.anchorY+3;for(let x=0;x<Rt&&h(u);x++)u+=tt;if(h(u)){u=e.anchorY+3;for(let x=0;x<Rt&&h(u);x++)u-=tt}return u=Math.min(Math.max(u,s.plotY0+tt),s.plotY1-tt),t.push({x0:c,x1:p,y0:u-tt,y1:u+2}),{x:l,y:u,anchor:n}}function $o(t){return t.map((e,r)=>`${r===0?"M":"L"}${e.x.toFixed(2)},${e.y.toFixed(2)}`).join(" ")}function wo(t){if(t.length===0)return"";const e=[`M${t[0].x.toFixed(2)},${t[0].y.toFixed(2)}`];for(let r=1;r<t.length;r++)e.push(`H${t[r].x.toFixed(2)}`,`V${t[r].y.toFixed(2)}`);return e.join(" ")}function jo(t,e,r){if(t.length===0)return[];const s=t[0],a=t[t.length-1],n=[...t];if(e==="right"||e==="left"){const l=e==="right"?r.plotX1:r.plotX0;n.push({x:l,y:a.y},{x:l,y:s.y})}else{const l=e==="above"?r.plotY0:r.plotY1;n.push({x:a.x,y:l},{x:s.x,y:l})}return n}function Mo({layer:t,frame:e}){if(t.stops.length===0)return null;const r=V(e,t),s=t.along==="y"?e.plotY1-e.plotY0:e.plotX1-e.plotX0;if(s<=0)return null;const a=t.along==="y"?e.plotY0:e.plotX0,n=t.along==="y"?r:e.scaleX,l=t.maxOpacity??bo,c=t.tint??G(t),p=`plot-field-${t.id}-${e.uid}`,h=`plot-field-blur-${t.id}-${e.uid}`,u=t.stops.map(x=>({offset:(n(x.at)-a)/s*100,intensity:Math.max(0,Math.min(1,x.intensity))})).sort((x,f)=>x.offset-f.offset);return i.jsxs(i.Fragment,{children:[i.jsxs("defs",{children:[i.jsx("linearGradient",{id:p,x1:"0%",y1:"0%",x2:t.along==="x"?"100%":"0%",y2:t.along==="y"?"100%":"0%",children:u.map((x,f)=>i.jsx("stop",{offset:`${x.offset.toFixed(2)}%`,stopColor:c,stopOpacity:l*x.intensity},f))}),t.blur!==void 0&&i.jsx("filter",{id:h,children:i.jsx("feGaussianBlur",{stdDeviation:t.blur})})]}),i.jsx("rect",{"data-plot-layer":t.id,"data-plot-layer-kind":"field",x:e.plotX0,y:e.plotY0,width:e.plotX1-e.plotX0,height:e.plotY1-e.plotY0,fill:`url(#${p})`,filter:t.blur!==void 0?`url(#${h})`:void 0})]})}const Lo=6,Io=56;function Eo(t,e,r,s){const a=Math.max(0,Math.min(e-1,Math.floor(r))),n=Math.max(0,Math.min(e-1,Math.floor(s))),l=Math.min(e-1,a+1),c=Math.min(e-1,n+1),p=Math.max(0,Math.min(1,r-a)),h=Math.max(0,Math.min(1,s-n)),u=t[n*e+a]+(t[n*e+l]-t[n*e+a])*p,x=t[c*e+a]+(t[c*e+l]-t[c*e+a])*p;return u+(x-u)*h}const et=[[0,[26,32,40]],[.35,[36,52,56]],[.6,[58,70,66]],[.8,[90,90,74]],[1,[132,130,116]]];function So(t){const e=Math.max(0,Math.min(1,t));for(let r=1;r<et.length;r++)if(e<=et[r][0]){const[s,a]=et[r-1],[n,l]=et[r],c=n>s?(e-s)/(n-s):0;return[Math.round(a[0]+(l[0]-a[0])*c),Math.round(a[1]+(l[1]-a[1])*c),Math.round(a[2]+(l[2]-a[2])*c)]}return et[et.length-1][1]}function Co(t,e,r,s,a){const n=t[s*e+a],[l,c,p]=So(n/(r-1)),h=a>0?t[s*e+a-1]:n,u=s>0?t[(s-1)*e+a]:n,x=h!==n||u!==n?.5:1;return`rgb(${Math.round(l*x)}, ${Math.round(c*x)}, ${Math.round(p*x)})`}function Ao({layer:t,frame:e}){const{size:r,values:s,bounds:a}=t;if(r<2||s.length<r*r)return null;let n=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;for(let O=0;O<r*r;O++){const $=s[O];if(!Number.isFinite($))return null;$<n&&(n=$),$>l&&(l=$)}const c=l-n,p=Math.max(2,t.bands??Lo),h=V(e,t),u=e.scaleX(a.x0),x=e.scaleX(a.x1),f=h(a.y0),k=h(a.y1),Y=Math.min(u,x),j=Math.min(f,k),y=Io,F=Math.abs(x-u)/y,A=Math.abs(k-f)/y;if(!(F>0)||!(A>0))return null;const P=f<k,z=new Int16Array(y*y);for(let O=0;O<y;O++)for(let $=0;$<y;$++){const _=Eo(s,r,$/(y-1)*(r-1),O/(y-1)*(r-1)),C=c>0?(_-n)/c:.5;z[O*y+$]=Math.max(0,Math.min(p-1,Math.floor(C*p)))}const B=[];for(let O=0;O<y;O++){const $=P?O:y-1-O;let _=0,C="";for(let E=0;E<=y;E++){const X=E<y?Co(z,y,p,O,E):"";if(E===0){C=X;continue}X===C&&E<y||(B.push(i.jsx("rect",{x:Y+_*F,y:j+$*A,width:(E-_)*F+.5,height:A+.5,fill:C},`${O}-${_}`)),_=E,C=X)}}return i.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"relief",opacity:W(t),"aria-hidden":"true",children:B})}function To({layer:t,frame:e}){const r=L.useId(),s=V(e,t),a=h=>({x:e.scaleX(h.x),y:s(h.y)}),n=t.boundary.map(a);if(n.length<2)return null;const l=t.side==="between"?[...n,...(t.boundaryHigh??[]).map(a).reverse()]:jo(n,t.side,e);if(t.side==="between"&&!t.boundaryHigh)return null;const c=t.side==="right"?e.plotX1-4:t.side==="left"?e.plotX0+11:n[n.length-1].x,p=e.plotY1-34;return i.jsxs(i.Fragment,{children:[t.hatched&&i.jsx("defs",{children:i.jsx("pattern",{id:r,width:$t,height:$t,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:i.jsx("line",{x1:0,y1:0,x2:0,y2:$t,stroke:G(t),strokeWidth:1,strokeOpacity:t.opacity??mo})})}),i.jsx("polygon",{"data-plot-layer":t.id,"data-plot-layer-kind":"region","data-hatched":t.hatched?"":void 0,points:l.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)}`).join(" "),fill:t.hatched?`url(#${r})`:G(t),fillOpacity:t.hatched?void 0:t.opacity??go}),e.labels&&t.label&&i.jsx("text",{x:c,y:p,transform:`rotate(-90 ${c} ${p})`,fontSize:fo,letterSpacing:"0.14em",fill:"var(--color-text-muted)",children:t.label})]})}function _o({layer:t,frame:e}){const r=V(e,t),s=t.points.map(n=>({x:e.scaleX(n.x),y:r(n.y)}));if(s.length===0)return null;const a=uo*(t.weight??1);return t.style==="scatter"?i.jsx("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",fill:G(t),opacity:W(t),children:s.map((n,l)=>i.jsx("circle",{cx:n.x,cy:n.y,r:a},l))}):i.jsx("path",{"data-plot-layer":t.id,"data-plot-layer-kind":"series",d:t.style==="step"?wo(s):$o(s),fill:"none",stroke:G(t),strokeOpacity:W(t),strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:t.dashed?"5 3.5":void 0})}function Fo({layer:t,frame:e}){const r=V(e,t),s=t.dashed??!0,a=G(t),n=t.along==="y",l=n?r(t.value):e.scaleX(t.value);return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"rule",x1:n?e.plotX0:l,x2:n?e.plotX1:l,y1:n?l:e.plotY0,y2:n?l:e.plotY1,stroke:a,strokeOpacity:W(t),strokeWidth:1,strokeDasharray:s?"4 3":void 0}),e.labels&&t.label&&i.jsx("text",{x:n?e.plotX1-4:l+3,y:n?l-3:e.plotY0+10,textAnchor:n?"end":"start",fill:lt(t),fontSize:st,children:t.label})]})}function Oo({layer:t,frame:e,placed:r}){const s=V(e,t),a=e.scaleX(t.at.x),n=s(t.at.y),l=t.across??"x",c=G(t),p=e.labels&&t.label?ko(r,{anchorX:a,anchorY:n,gap:at+3,text:t.label,frame:e}):null;return i.jsxs(i.Fragment,{children:[i.jsx("line",{"data-plot-layer":t.id,"data-plot-layer-kind":"annotation",x1:l==="x"?a-at:a,x2:l==="x"?a+at:a,y1:l==="x"?n:n-at,y2:l==="x"?n:n+at,stroke:c,strokeOpacity:W(t),strokeWidth:1.75,strokeLinecap:"round"}),p&&t.label&&i.jsx("text",{x:p.x,y:p.y,textAnchor:p.anchor,fontSize:st,letterSpacing:"0.05em",fill:lt(t),fillOpacity:W(t),children:t.label})]})}function Ro({layer:t,frame:e}){const r=V(e,t),s=e.scaleX(t.at.x),a=r(t.at.y)+(t.offsetPx??0),n=ho*(t.scale??1),l=G(t),c=t.shape??"dot",p={"data-plot-layer":t.id,"data-plot-layer-kind":"marker",opacity:W(t)},h=c==="dot"?i.jsx("circle",{...p,cx:s,cy:a,r:n,fill:l,stroke:"var(--color-surface-raised)",strokeWidth:1.5}):c==="ring"?i.jsx("circle",{...p,cx:s,cy:a,r:n,fill:"none",stroke:l,strokeWidth:1.5}):c==="cross"?i.jsx("path",{...p,d:`M${s-n},${a} L${s+n},${a} M${s},${a-n} L${s},${a+n}`,stroke:l,strokeWidth:1.5,strokeLinecap:"round"}):i.jsx("polyline",{...p,points:c==="chevron-up"?`${s-n},${a+n*.5} ${s},${a-n*.5} ${s+n},${a+n*.5}`:`${s-n},${a-n*.5} ${s},${a+n*.5} ${s+n},${a-n*.5}`,fill:"none",stroke:l,strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"});return i.jsxs(i.Fragment,{children:[h,e.labels&&t.label&&i.jsx("text",{x:s+n+3,y:a+3,fontSize:st,fill:lt(t),fillOpacity:W(t),children:t.label})]})}function Po({layer:t,frame:e,row:r,edges:s}){const a=t.caption?2:1;if(t.anchor==="left-edge"||t.anchor==="right-edge"){const f=t.anchor==="left-edge"?e.plotX0+it+r*J:e.plotX1-it-r*J,k=e.plotY1-34;return i.jsx("text",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",x:f,y:k,transform:`rotate(-90 ${f} ${k})`,fontSize:st,letterSpacing:"0.14em",fill:lt(t),fillOpacity:W(t),children:t.text})}const n=t.anchor.startsWith("top"),l=t.anchor.endsWith("right"),c=f=>it+(f?xo:0),p=l?e.plotX1-c(s.right):e.plotX0+c(s.left),h=r*(a*J+2),u=n?e.plotY0+it+Ot+h:e.plotY1-it-h,x=u-J;return i.jsxs("g",{"data-plot-layer":t.id,"data-plot-layer-kind":"caption",textAnchor:l?"end":"start",children:[t.caption&&i.jsx("text",{x:p,y:n?u:x,fontSize:st,letterSpacing:"0.05em",fill:"var(--color-text-faint)",children:t.caption}),i.jsx("text",{x:p,y:t.caption&&n?u+J:u,fontSize:Ot,fontWeight:700,fill:lt(t),fillOpacity:W(t),children:t.text})]})}const Pt={relief:-1,field:0,region:1,series:2,rule:3,annotation:4,marker:5,caption:6},zo={relief:"background",field:"background",region:"background",series:"foreground",rule:"foreground",annotation:"foreground",marker:"foreground",caption:"caption"};function wt({layers:t,frame:e,pass:r}){const s=t.map((c,p)=>({layer:c,index:p})).filter(({layer:c})=>zo[c.kind]===r).sort((c,p)=>Pt[c.layer.kind]-Pt[p.layer.kind]||(c.layer.z??0)-(p.layer.z??0)||c.index-p.index),a=new Map,n=[],l={left:t.some(c=>c.kind==="caption"&&c.anchor==="left-edge"||c.kind==="region"&&c.side==="left"&&!!c.label),right:t.some(c=>c.kind==="caption"&&c.anchor==="right-edge"||c.kind==="region"&&c.side==="right"&&!!c.label)};return i.jsx(i.Fragment,{children:s.map(({layer:c,index:p})=>{const h=`${c.id}-${p}`;switch(c.kind){case"relief":return i.jsx(Ao,{layer:c,frame:e},h);case"field":return i.jsx(Mo,{layer:c,frame:e},h);case"region":return i.jsx(To,{layer:c,frame:e},h);case"series":return i.jsx(_o,{layer:c,frame:e},h);case"rule":return i.jsx(Fo,{layer:c,frame:e},h);case"annotation":return i.jsx(Oo,{layer:c,frame:e,placed:n},h);case"marker":return i.jsx(Ro,{layer:c,frame:e},h);case"caption":{const u=a.get(c.anchor)??0;return a.set(c.anchor,u+1),i.jsx(Po,{layer:c,frame:e,row:u,edges:l},h)}default:return null}})})}function No(t){return t.map(e=>e.description).filter(e=>typeof e=="string"&&e.length>0)}const zt=11,xt=3,gt=4,Nt=(t,e)=>t.x0<e.x1&&e.x0<t.x1&&t.y0<e.y1&&e.y0<t.y1;function Yo(t,e,r,s,a){let n=0,l=1;const c=r-t,p=s-e,h=[[-c,t-a.x0],[c,a.x1-t],[-p,e-a.y0],[p,a.y1-e]];for(const[u,x]of h){if(u===0&&x<0)return!1;if(u!==0){const f=x/u;u<0?n=Math.max(n,f):l=Math.min(l,f)}}return n<=l}function Bo(t,e){for(let r=1;r<t.cx.length;r++){const s=[t.cx[r-1],t.cy[r-1],t.cx[r],t.cy[r]];if(s.every(Number.isFinite)&&Yo(s[0],s[1],s[2],s[3],e))return!0}return!1}function Xo({labels:t,plot:e,obstacles:r,traces:s}){const a=[],n=new Map;for(const l of t){const c={y0:l.lineY-xt-zt,y1:l.lineY-xt},p={y0:l.lineY+xt,y1:l.lineY+xt+zt},h={x0:e.x1-gt-l.width,x1:e.x1-gt},u={x0:e.x0+gt,x1:e.x0+gt+l.width},x=[{...h,...c,anchor:"end"},{...h,...p,anchor:"end"},{...u,...c,anchor:"start"},{...u,...p,anchor:"start"}];let f=null;for(const k of x){if(!(k.x0>=e.x0&&k.x1<=e.x1&&k.y0>=e.y0&&k.y1<=e.y1)||a.some(y=>Nt(k,y)))continue;const j=2*r.filter(y=>Nt(k,y)).length+s.filter(y=>Bo(y,k)).length;(f===null||j<f.cost)&&(f={spot:k,cost:j})}if(f===null){n.set(l.id,null);continue}a.push(f.spot),n.set(l.id,{x:f.spot.anchor==="end"?f.spot.x1:f.spot.x0,y:f.spot.y1-2,anchor:f.spot.anchor})}return n}const Do=2.5;function Ho(t,e){if(t.length===0)return!1;const r=t[t.length-1]-e;return r===0?!0:t.length===1?!1:Math.sign(t[0]-e)!==Math.sign(r)}function Wo(t,e){return t==="marker"?{line:"var(--color-text-primary)",label:"var(--color-text-primary)"}:e?t==="limit"?{line:"var(--color-warn-mark)",label:"var(--color-warn-text)"}:{line:"var(--color-go-mark)",label:"var(--color-go-text)"}:{line:"var(--color-text-faint)",label:"var(--color-text-faint)"}}const Ko=(t,e)=>Vt(t-e[0],e[1]-e[0]),Qn=(t,e)=>Vt((t-e[0])*1e3,(e[1]-e[0])*1e3),jt={top:10,bottom:28,left:50};function Go(t,e,r){const s=(n,l,c)=>Math.max(n,Math.min(c,l)),a=s(30,Math.round(t*.18),jt.left);return{top:jt.top,right:r?a:s(14,Math.round(t*.07),20),bottom:e<150?20:jt.bottom,left:a}}const Uo=26;function Vo(t,e,r,s){const a=[],n=Uo;for(let l=t+n/2;l<e;l+=n)for(let c=r+n/2;c<s;c+=n)a.push({key:`sg-${Math.round(l)}-${Math.round(c)}`,x:l,y:c});return a}const Zo=120,qo=90,Qo=70,Jo=35,tn=2,U=14,en=6,on=12,Yt=10,nn=.2,Bt=.6,Xt="5 3",rn=.15,an=.45;function sn(t){return pe(t,"the value is inside the shaded region")}function ln(t){return(t.type??"line")==="band"&&t.data.y2?[...t.data.y,...t.data.y2]:t.data.y}function Jn({series:t,xDomain:e,yDomainPrimary:r,yDomainSecondary:s,xTickFormat:a=Ko,yTickFormat:n=cn,yScalePrimary:l="linear",yScaleSecondary:c="linear",thresholds:p,legend:h="overlay",hideXAxis:u=!1,spatial:x=!1,layers:f,ariaLabel:k,width:Y,height:j}){const y=L.useId(),F=Y,A=j,P=t.filter(o=>o.axis==="primary"&&o.data.x.length>0),z=t.filter(o=>o.axis==="secondary"&&o.data.x.length>0),B=z.length>0,O=x?{top:1,right:1,bottom:1,left:1}:Go(F,A,B),$=O.left,_=F-O.right,C=O.top,E=A-O.bottom,X=_-$,ot=E-C,Z=X>=Zo&&ot>=qo,dt=L.useMemo(()=>{const o={primary:[],secondary:[]};for(const d of f??[]){const g=vo(d);o[g.axis].push(...g.ys)}return o},[f]),q=L.useMemo(()=>Dt(P,r,l,dt.primary),[P,r,l,dt]),Q=L.useMemo(()=>Dt(z,s,c,dt.secondary),[z,s,c,dt]),R=kt(e[0],e[1],$,_),D=l==="log"?Ft(q[0],q[1],E,C):kt(q[0],q[1],E,C),H=c==="log"?Ft(Q[0],Q[1],E,C):kt(Q[0],Q[1],E,C),qt=Math.max(2,Math.min(8,Math.round(X/Qo))),It=Math.max(2,Math.min(7,Math.round(ot/Jo))),mt=(o,d,g,I)=>{const w=Math.min(o,d),S=Math.max(o,d),b=(S-w)*1e-6||1e-6,v=M=>M>=w-b&&M<=S+b,T=M=>I==="log"?co(w,S,M):Mt(w,S,M);for(let M=g;M<=64;M*=2){const N=T(M).filter(v);if(N.length<2)continue;if(N.length<=g)return N;const rt=(N.length-1)/(g-1),ft=Array.from({length:g},(Cn,ne)=>N[Math.round(ne*rt)]);return Array.from(new Set(ft))}return[w,S]},pt=mt(e[0],e[1],qt,"linear"),Et=mt(q[0],q[1],It,l==="log"?"log":"linear"),St=B?mt(Q[0],Q[1],It,c==="log"?"log":"linear"):[],Qt=L.useMemo(()=>{const o=[],d=pt.length-1;if(d<0)return o;const g=b=>b.length*6.5+6,I=6,w=b=>{const v=pt[b],T=a(v,e),M=R(v),N=g(T),rt=b===0?"start":b===d?"end":"middle",ft=rt==="start"?M:rt==="end"?M-N:M-N/2;return{x:M,text:T,anchor:rt,leftEdge:ft,rightEdge:ft+N}},S=w(0);if(o.push({x:S.x,text:S.text,anchor:S.anchor}),d>=1){const b=w(d);if(b.leftEdge>=S.rightEdge+I){let v=S.rightEdge;for(let T=1;T<d;T++){const M=w(T);M.leftEdge>=v+I&&M.rightEdge<=b.leftEdge-I&&(o.push({x:M.x,text:M.text,anchor:M.anchor}),v=M.rightEdge)}o.push({x:b.x,text:b.text,anchor:b.anchor})}}return o},[pt,e,R,a]),Ct=(o,d)=>{const g=new Set,I=o.length;if(I===0||(g.add(0),I===1))return g;const w=16,S=d(o[0]),b=d(o[I-1]);if(Math.abs(b-S)>=w){let v=S;for(let T=1;T<I-1;T++){const M=d(o[T]);Math.abs(M-v)>=w&&Math.abs(b-M)>=w&&(g.add(T),v=M)}g.add(I-1)}return g},Jt=Ct(Et,D),te=Ct(St,H),K=L.useMemo(()=>t.filter(o=>o.data.x.length>0).map(o=>{const d=o.axis==="primary"?D:H,g=o.type??"line";if(g==="band")return o.data.y2?{id:o.id,kind:"band",color:o.color,opacity:o.fillOpacity??nn,d:Zt(o.data.x,o.data.y,o.data.y2,R,d)}:{id:o.id,kind:"noop"};if(g==="scatter"){const b=o.data.x.map((v,T)=>({cx:R(v),cy:d(o.data.y[T])}));return{id:o.id,kind:"scatter",color:o.color,points:b}}const I=g==="step"?io:_t,w=(o.data.bridges??[]).filter(b=>ao(o.data.x,o.data.y,b,R,d)),S=[...new Set([...o.data.breaks??[],...w.map(b=>b.to)])].sort((b,v)=>b-v);return{id:o.id,kind:"stroked",color:o.color,dashed:o.dashed??!1,uncertainty:lo(o.data.x,o.data.reckoned??[],R,d),segments:so(o.data.x,o.data.y,R,d,I,S,o.data.spans,o.data.reckoned),modelled:w.map(b=>({basis:b.basis,d:_t([o.data.x[b.to-1],...b.t,o.data.x[b.to]],[o.data.y[b.to-1],...b.v,o.data.y[b.to]],R,d)})),tail:o.data.x.length>0&&(o.data.reckoned??[]).some(b=>b.to>=o.data.x.length-1)?{cx:R(o.data.x[o.data.x.length-1]),cy:d(o.data.y[o.data.y.length-1])}:null,observed:[...new Set(w.flatMap(b=>[b.to-1,b.to]))].map(b=>({cx:R(o.data.x[b]),cy:d(o.data.y[b])}))}}),[t,R,D,H]),ut=L.useMemo(()=>p?p.map(o=>{const d=o.axis??"primary",g=t.filter(w=>w.axis===d&&w.type!=="band"&&!w.dashed),I=o.kind==="limit"?g.some(w=>{const S=w.data.y.filter(b=>Number.isFinite(b));return S.length>0&&Ut(S[S.length-1],o.value,o.bad)}):o.kind==="target"&&g.some(w=>Ho(w.data.y,o.value));return{id:o.id,label:o.label,kind:o.kind,passed:I,currency:ie(o.reading,{drawsReckoning:!0}),tone:Wo(o.kind,I),dashed:o.kind!=="marker",y:d==="primary"?D(o.value):H(o.value)}}):[],[p,t,D,H]),ht=L.useMemo(()=>{const o=(d,g,I)=>Math.max(d,Math.min(I,g));return(p??[]).flatMap(d=>{if(d.kind!=="limit"||!Number.isFinite(d.value))return[];const g=d.axis??"primary",I=g==="primary"?D:H,w=I(d.value),S=d.bad==="above"?-1:1,b=d.label||`the limit at ${n(d.value)}`;return t.filter(v=>v.axis===g&&v.data.x.length>0&&(v.type??"line")!=="band"&&!v.dashed).flatMap(v=>no({y:v.data.y,cx:v.data.x.map(R),cy:v.data.y.map(I),limit:d.value,limitY:w,bad:d.bad,breaks:v.data.breaks,step:v.type==="step"||v.type==="scatter",minGapPx:U}).slice(Z?0:-1).map(T=>{const M=n(v.data.y[T.index]),N=a(v.data.x[T.index],e);return{key:`${d.id}-${v.id}-${T.index}`,color:v.color,x:o($+U/2+1,T.x-Yt*(T.entered?1:-1),_-U/2-1),y:o(C+U/2+1,T.y+S*Yt,E-U/2-1),text:T.entered?T.spells>1?`${v.label} went past ${b} ${T.spells} times from ${N}, first reading ${M}`:`${v.label} went past ${b} at ${N}, reading ${M}`:`${v.label} was already past ${b} when this window began at ${N}, reading ${M}`}}))})},[p,t,R,D,H,a,n,e,$,_,C,E,Z]),nt=L.useMemo(()=>{if(!Z)return new Map;const o=U/2;return Xo({labels:ut.filter(d=>d.label).map(d=>({id:d.id,width:(d.label?.length??0)*en+(d.currency.held?on:0),lineY:d.y})),plot:{x0:$,y0:C,x1:_,y1:E},obstacles:[...ht.map(d=>({x0:d.x-o,y0:d.y-o,x1:d.x+o,y1:d.y+o})),...h==="none"?[]:t.map((d,g)=>({x0:$+3,y0:C+6+g*16,x1:$+3+Math.min(d.label.length*6+8,X-6),y1:C+6+g*16+13}))],traces:t.filter(d=>(d.type??"line")!=="band").map(d=>({cx:d.data.x.map(R),cy:d.data.y.map(d.axis==="primary"?D:H)}))})},[Z,ut,ht,h,t,R,D,H,$,_,C,E,X]),ee=t.flatMap(o=>{const d=K.find(v=>v.id===o.id),g=d?.kind==="stroked"?d.modelled.map(v=>v.basis):[],I=o.data.reckoned??[];if(I.length===0&&g.length===0)return[];const S=[...new Set([...I.map(v=>v.basis),...g])].map(v=>`${o.label}: part of this trace is reckoned, ${se(v)}, not measured`),b=new Set(I.map(v=>v.bandLo&&v.bandHi?v.bandKind:void 0).filter(v=>v!==void 0));for(const v of b)S.push(`${o.label}: ${sn(v)}`);return S}),oe=ut.flatMap(o=>{const d=o.label??o.id,g=[];return o.passed&&o.kind==="limit"&&g.push(`${d}: limit passed`),o.passed&&o.kind==="target"&&g.push(`${d}: target reached`),o.currency.held&&g.push(le(d,o.currency.caption)),o.label&&!nt.get(o.id)&&g.length===0&&g.push(o.label),g}),At=[k??"Telemetry line chart",...No(f??[]),...ee,...oe].join("; "),bt={scaleX:R,scaleYPrimary:D,scaleYSecondary:H,plotX0:$,plotX1:_,plotY0:C,plotY1:E,uid:y,labels:Z},vt=`plot-layer-clip-${y}`;return X<=0||ot<=0?i.jsx("svg",{width:Math.max(0,F),height:Math.max(0,A),role:"img","aria-label":"Chart too small to render",style:{display:"block"},children:i.jsx("title",{children:"Chart too small to render"})}):i.jsxs("svg",{width:F,height:A,role:ht.length>0?"group":"img","aria-label":At,style:{fontFamily:"var(--font-family-mono)",overflow:"visible",display:"block"},children:[i.jsx("title",{children:At}),f&&f.length>0&&i.jsx("defs",{children:i.jsx("clipPath",{id:vt,children:i.jsx("rect",{x:$,y:C,width:X,height:ot})})}),i.jsx("rect",{x:$,y:C,width:X,height:ot,fill:"var(--color-surface-panel)"}),f&&f.length>0&&i.jsx("g",{clipPath:`url(#${vt})`,children:i.jsx(wt,{layers:f,frame:bt,pass:"background"})}),!x&&Et.map((o,d)=>{const g=D(o);return i.jsxs(yt.Fragment,{children:[i.jsx("line",{x1:$,y1:g,x2:_,y2:g,stroke:"var(--color-border-subtle)",strokeWidth:1}),Jt.has(d)&&i.jsx("text",{x:$-4,y:g,textAnchor:"end",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:n(o)})]},`py-${d}`)}),!x&&St.map((o,d)=>te.has(d)?i.jsx("text",{x:_+4,y:H(o),textAnchor:"start",dominantBaseline:"middle",fill:"var(--color-text-faint)",fontSize:11,children:n(o)},`sy-${d}`):null),!u&&!x&&pt.map((o,d)=>i.jsx("line",{x1:R(o),y1:C,x2:R(o),y2:E,stroke:"var(--color-border-subtle)",strokeWidth:1},`xg-${d}`)),!u&&!x&&Qt.map((o,d)=>i.jsx("text",{x:o.x,y:E+14,textAnchor:o.anchor,fill:"var(--color-text-faint)",fontSize:11,children:o.text},`xl-${d}`)),x&&Vo($,_,C,E).map(o=>i.jsx("circle",{cx:o.x,cy:o.y,r:1,fill:"var(--color-text-faint)",opacity:.35},o.key)),!x&&i.jsxs(i.Fragment,{children:[i.jsx("line",{x1:$,y1:C,x2:$,y2:E,stroke:"var(--color-border-strong)",strokeWidth:1}),i.jsx("line",{x1:$,y1:E,x2:_,y2:E,stroke:"var(--color-border-strong)",strokeWidth:1}),B&&i.jsx("line",{x1:_,y1:C,x2:_,y2:E,stroke:"var(--color-border-strong)",strokeWidth:1})]}),K.filter(o=>o.kind==="band").map(o=>i.jsx("path",{d:o.d,fill:o.color,fillOpacity:o.opacity,stroke:"none"},o.id)),K.filter(o=>o.kind==="stroked").flatMap(o=>o.uncertainty.map((d,g)=>i.jsx("path",{d:d.d,"data-band-kind":d.kind,fill:o.color,fillOpacity:rn,stroke:d.kind==="bound"?o.color:"none",strokeOpacity:d.kind==="bound"?an:void 0,strokeWidth:d.kind==="bound"?1:void 0},`${o.id}-band-${g}`))),K.filter(o=>o.kind==="stroked").flatMap(o=>o.segments.map((d,g)=>i.jsx("path",{d:d.d,"data-stream-status":d.status,"data-reckoning-basis":d.basis,stroke:o.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:d.basis!==void 0?Bt:void 0,strokeDasharray:d.basis!==void 0?Xt:o.dashed?"4 3":void 0},`${o.id}-${g}`))),K.filter(o=>o.kind==="stroked").flatMap(o=>o.modelled.map((d,g)=>i.jsx("path",{d:d.d,"data-reckoning-basis":d.basis,stroke:o.color,strokeWidth:1.5,fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeOpacity:Bt,strokeDasharray:Xt},`${o.id}-modelled-${g}`))),K.map(o=>o.kind==="stroked"&&o.tail!==null?i.jsx(ce,{kind:"modelled",x:o.tail.cx,y:o.tail.cy},`${o.id}-tail`):null),K.filter(o=>o.kind==="stroked").flatMap(o=>o.observed.map((d,g)=>i.jsx("circle",{cx:d.cx,cy:d.cy,r:Do,fill:o.color,"data-observed-sample":""},`${o.id}-observed-${g}`))),K.filter(o=>o.kind==="scatter").flatMap(o=>o.points.map((d,g)=>i.jsx("circle",{cx:d.cx,cy:d.cy,r:tn,fill:o.color},`${o.id}-${g}`))),f&&f.length>0&&i.jsx("g",{clipPath:`url(#${vt})`,children:i.jsx(wt,{layers:f,frame:bt,pass:"foreground"})}),ut.map(o=>i.jsxs(yt.Fragment,{children:[i.jsx("line",{x1:$,y1:o.y,x2:_,y2:o.y,stroke:o.tone.line,strokeWidth:1,strokeDasharray:o.dashed?"4 3":void 0,"data-threshold-kind":o.kind,"data-threshold-passed":o.passed||void 0}),o.label&&nt.get(o.id)&&i.jsxs("text",{x:nt.get(o.id)?.x,y:nt.get(o.id)?.y,textAnchor:nt.get(o.id)?.anchor,fill:o.tone.label,fontSize:10,children:[o.label,o.currency.held&&i.jsx(de,{size:10,kind:o.currency.mark??"held"})]})]},o.id)),ht.map(o=>i.jsx(oo,{x:o.x,y:o.y,size:U,color:o.color,text:o.text},o.key)),h!=="none"&&t.map((o,d)=>{const g=C+6+d*16;if(g+13>E)return null;const I=Math.min(o.label.length*6+8,X-6),w=Math.max(1,Math.floor((I-8)/6)),S=o.label.length>w?`${o.label.slice(0,Math.max(1,w-1))}...`:o.label;return i.jsxs(yt.Fragment,{children:[i.jsx("rect",{x:$+3,y:g,width:I,height:13,rx:2,fill:"rgba(0, 0, 0, 0.55)"}),i.jsx("text",{x:$+6,y:g+10,fill:o.color,fontSize:10,children:S})]},o.id)}),f&&f.length>0&&Z&&i.jsx(wt,{layers:f,frame:bt,pass:"caption"})]})}function Dt(t,e,r,s=[]){if(e)return e;if(t.length===0&&s.length===0)return r==="log"?[1,10]:[0,1];let a=[...t.flatMap(ln),...s];return r==="log"&&(a=a.filter(n=>n>0)),a.length===0?r==="log"?[1,10]:[0,1]:[Math.min(...a),Math.max(...a)]}function cn(t){if(t===0)return"0";if(Math.abs(t)>=1e6)return`${(t/1e6).toFixed(1)}M`;if(Math.abs(t)>=1e3)return`${(t/1e3).toFixed(1)}k`;if(Number.isInteger(t))return String(t);if(Math.abs(t)<.01){const e=Math.floor(Math.log10(Math.abs(t))),r=t/10**e;return Math.abs(r-1)<1e-9?`1e${e}`:`${r.toFixed(1)}e${e}`}return t.toFixed(2)}const tr=m.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`;function er({state:t,elapsedMs:e}){if(t==="connected")return null;const r=t==="lost"?"SIGNAL LOSS":"PARTIAL CONTROL";return i.jsxs(Kt,{accent:pn[t],glow:"0 0 12px rgba(255, 59, 48, 0.35)",pulse:!0,children:[i.jsx(un,{children:r}),i.jsxs(hn,{children:["T+",dn(e)]})]})}function dn(t){const e=Math.max(0,Math.floor(t/1e3)),r=Math.floor(e/3600),s=Math.floor(e%3600/60),a=e%60,n=l=>String(l).padStart(2,"0");return r>0?`${r}:${n(s)}:${n(a)}`:`${n(s)}:${n(a)}`}const pn={lost:"var(--color-nogo-mark)",partial:"var(--color-warn-mark)"},un=m.span`
  font-weight: 600;
`,hn=m.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
`;function or({entries:t}){return t.length===0?null:i.jsxs(xn,{role:"status","aria-live":"polite",children:[i.jsx(gn,{}),i.jsx(mn,{children:"SOURCE OFFLINE"}),i.jsx(bn,{children:t.map(e=>i.jsxs(vn,{children:[i.jsx(yn,{children:e.name}),i.jsx(kn,{children:e.status}),i.jsx($n,{children:fn(e.elapsedMs)}),e.onRetry&&i.jsx(Ht,{size:"sm",onClick:e.onRetry,"aria-label":`Retry ${e.name} now`,children:"Retry now"})]},e.id))})]})}function fn(t){return xe(ge("irl:s",t/1e3))}const xn=m.div`
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
`,gn=m.span`
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
`,mn=m.span`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.14em;
`,bn=m.div`
  display: flex;
  gap: var(--gap-related);
  flex-wrap: nowrap;
`,vn=m.div`
  display: flex;
  gap: var(--gap-related);
  align-items: baseline;
`,yn=m.span`
  color: var(--color-text-primary);
  font-weight: 600;
`,kn=m.span`
  color: var(--color-nogo-text);
  text-transform: uppercase;
  font-size: var(--font-size-caption);
`,$n=m.span`
  color: var(--color-text-faint);
  font-variant-numeric: tabular-nums;
`,nr=m.div`
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
`,rr=m.div`
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
`,ar=m.div`
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,ir=m.input`
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
`,sr=m.button`
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
`,lr=m.p`
  margin-top: 12px !important;
  color: var(--color-nogo-text) !important;
  font-size: 12px !important;
`,cr=m.p`
  margin-top: 12px !important;
  color: var(--color-info-text) !important;
  font-size: 12px !important;
`,dr=m.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`,pr=m.button`
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
`,ur=m.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--color-border-subtle);
`,wn={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},jn={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function Mn(t){return wn[t]??jn}function hr({label:t}){const e=Mn(t);return i.jsx(Ln,{$bg:e.bg,$fg:e.fg,$border:e.border,children:t})}const Ln=m.span`
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
`;me({id:"default-dark",name:"Default Dark",theme:ue});function fr({kind:t,local:e,remote:r,remoteLabel:s="Peer"}){const a=t==="major"?"alert":"status",n=t==="major"?"RELOAD REQUIRED":t==="minor"?"VERSION MISMATCH":"VERSION UNKNOWN",l=t==="unknown"?`${s} didn't report a version`:`${s} v${r??"?"} ↔ this v${e}`;return i.jsxs(Kt,{accent:In[t],glow:"0 0 12px rgba(0, 0, 0, 0.5)",role:a,children:[i.jsx(En,{children:n}),i.jsx(Sn,{children:l})]})}const In={major:"var(--color-nogo-mark)",minor:"var(--color-warn-mark)",unknown:"var(--color-text-muted)"},En=m.span`
  font-weight: 600;
`,Sn=m.span`
  color: var(--color-text-primary);
  letter-spacing: 0.06em;
  text-transform: none;
`;export{nr as A,Kt as B,ro as C,Kn as D,rr as E,Vn as F,ar as G,ir as H,sr as I,lr as J,dr as K,Jn as L,pr as M,ur as N,tr as P,cr as R,er as S,hr as T,fr as V,Hn as a,Wn as b,Gn as c,Un as d,Zn as e,qn as f,wt as g,or as h,Zt as i,_t as j,so as k,io as l,lo as m,ao as n,jo as o,Vt as p,Mn as q,Ft as r,kt as s,co as t,Mt as u,No as v,vo as w,Ko as x,We as y,Qn as z};
