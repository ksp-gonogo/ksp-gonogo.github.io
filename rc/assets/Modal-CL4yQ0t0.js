import{j as t}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as e}from"./ext-react-C0MU9AHG.js";import{r as L}from"./ext-react-dom-DCF8ZnaJ.js";import l from"./ext-styled-components-DAuodqsN.js";import{a7 as z,i as $,a8 as q,e as C,a9 as F,aa as K}from"./ModalSaveBar-Dx8t4t75.js";const R=e.createContext(null);let A=0;function ee({children:o}){const[h,d]=e.useState([]),u=e.useCallback((n,i)=>{const f=`modal-${++A}`;return d(b=>[...b,{id:f,title:i?.title,"aria-label":i?.["aria-label"],width:i?.width,content:n}]),f},[]),c=e.useCallback(n=>{d(i=>i.filter(f=>f.id!==n))},[]),m=e.useMemo(()=>({open:u,close:c}),[u,c]);return t.jsxs(R.Provider,{value:m,children:[o,h.map((n,i)=>t.jsx(H,{entry:n,isTop:i===h.length-1,onClose:()=>c(n.id)},n.id))]})}function te(){const o=e.useContext(R);if(!o)throw new Error("useModal must be used inside <ModalProvider>");return o}const D='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function H({entry:o,isTop:h,onClose:d}){const u=e.useRef(null),c=e.useRef(h);c.current=h,e.useEffect(()=>{const r=document.activeElement instanceof HTMLElement?document.activeElement:null;return()=>{r?.isConnected&&r.focus()}},[]);const m=e.useId(),n=e.useRef(!1),[i,f]=e.useState(null),[b,S]=e.useState(!1),[a,p]=e.useState(!1),g=e.useRef(null),y=e.useRef(b);y.current=b;const w=e.useRef(a);w.current=a;const T=e.useMemo(()=>({setFooter:f,setDirty:S}),[]),[B,P]=e.useState(null),I=z(B),x=e.useCallback(()=>{if(y.current){p(!0);return}d()},[d]);return e.useEffect(()=>{function r(s){if(!(s.key!=="Escape"||!c.current)){if(w.current){s.stopPropagation(),p(!1);return}x()}}return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[x]),e.useEffect(()=>{a&&g.current?.focus()},[a]),e.useEffect(()=>{function r(s){const j=u.current;if(s.key!=="Tab"||!c.current||!j)return;const v=j.querySelectorAll(D),k=v[0],E=v[v.length-1];if(v.length===0){s.preventDefault();return}if(s.shiftKey){document.activeElement===k&&(s.preventDefault(),E?.focus());return}document.activeElement===E&&(s.preventDefault(),k?.focus())}return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[]),e.useEffect(()=>{a||u.current?.querySelector(D)?.focus()},[a]),t.jsx(t.Fragment,{children:L.createPortal(t.jsx(O,{onMouseDown:r=>{n.current=r.target===r.currentTarget},onMouseUp:r=>{n.current&&r.target===r.currentTarget&&x(),n.current=!1},children:t.jsxs(U,{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":o.title?m:void 0,"aria-label":o.title?void 0:o["aria-label"],$width:o.width,children:[t.jsxs(G,{children:[o.title&&t.jsx(J,{id:m,children:o.title}),t.jsx(N,{onClick:x,"aria-label":"Close",children:t.jsx($,{size:16})})]}),t.jsx(Q,{ref:P,tabIndex:I,children:t.jsx(q.Provider,{value:T,children:o.content})}),i&&!a&&t.jsx(M,{children:i}),a&&t.jsxs(M,{role:"alertdialog","aria-label":"Discard unsaved changes?",children:[t.jsx(V,{children:"Discard unsaved changes?"}),t.jsx(C,{variant:"ghost",type:"button",onClick:()=>p(!1),children:"Keep editing"}),t.jsx(C,{variant:"primary",ref:g,type:"button",onClick:()=>{p(!1),d()},children:"Discard"})]})]})}),document.body)})}const O=l.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
`,U=l.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-floating);
  min-width: min(320px, 100vw - 16px);
  max-width: ${({$width:o})=>o??"560px"};
  width: 90vw;
  /* The dvh line is the visible viewport on a phone, where vh is the height with the browser bars away. */
  max-height: 80vh;
  max-height: 80dvh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
`,G=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-modal-bar);
  border-bottom: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
`,J=l.h2`
  margin: 0;
  ${F}
`,N=l.button`
  background: none;
  border: none;
  color: var(--color-text-faint);
  cursor: pointer;
  line-height: var(--line-height-flush);
  padding: var(--inset-glyph-button);

  @media (hover: hover) {
    &:hover {
      color: var(--color-text-primary);
    }
  }
  @media (pointer: coarse) {
    min-width: 44px;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`,Q=l.div`
  padding: var(--inset-modal-body);
  /* A tab strip or table inside reaches the dialog's edges, not just the body's content column. */
  --bleed-inline: var(--inset-modal-body);
  overflow-y: auto;
  ${K}
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,M=l.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-control-row);
  padding: var(--inset-modal-bar);
  border-top: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
`,V=l.span`
  margin-right: auto;
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
`;export{ee as M,te as u};
