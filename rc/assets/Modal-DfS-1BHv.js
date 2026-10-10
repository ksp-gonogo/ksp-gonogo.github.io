import{j as t}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as e}from"./ext-react-RRA14VTW.js";import{r as L}from"./ext-react-dom-CZVBhjGL.js";import s from"./ext-styled-components-Br73TgY3.js";import{_ as $,h as z,$ as q,d as C,a0 as F,a1 as K}from"./PlotCrosshair-B8FkPL92.js";const R=e.createContext(null);let A=0;function ee({children:r}){const[u,c]=e.useState([]),f=e.useCallback((n,i)=>{const d=`modal-${++A}`;return c(h=>[...h,{id:d,title:i?.title,"aria-label":i?.["aria-label"],width:i?.width,content:n}]),d},[]),l=e.useCallback(n=>{c(i=>i.filter(d=>d.id!==n))},[]),p=e.useMemo(()=>({open:f,close:l}),[f,l]);return t.jsxs(R.Provider,{value:p,children:[r,u.map((n,i)=>t.jsx(H,{entry:n,isTop:i===u.length-1,onClose:()=>l(n.id)},n.id))]})}function te(){const r=e.useContext(R);if(!r)throw new Error("useModal must be used inside <ModalProvider>");return r}const D='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function H({entry:r,isTop:u,onClose:c}){const f=e.useRef(null),l=e.useRef(u);l.current=u,e.useEffect(()=>{const o=document.activeElement instanceof HTMLElement?document.activeElement:null;return()=>{o?.isConnected&&o.focus()}},[]);const p=e.useId(),n=e.useRef(!1),[i,d]=e.useState(null),[h,S]=e.useState(!1),[a,b]=e.useState(!1),y=e.useRef(null),w=e.useRef(h);w.current=h;const j=e.useRef(a);j.current=a;const T=e.useMemo(()=>({setFooter:d,setDirty:S}),[]),[B,P]=e.useState(null),I=$(B),v=e.useCallback(()=>{if(w.current){b(!0);return}c()},[c]);return e.useEffect(()=>{function o(m){if(!(m.key!=="Escape"||!l.current)){if(j.current){m.stopPropagation(),b(!1);return}v()}}return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[v]),e.useEffect(()=>{a&&y.current?.focus()},[a]),e.useEffect(()=>{const o=f.current;if(!o)return;function m(x){if(x.key!=="Tab"||!l.current||!o)return;const g=o.querySelectorAll(D),k=g[0],E=g[g.length-1];if(g.length===0){x.preventDefault();return}if(x.shiftKey){document.activeElement===k&&(x.preventDefault(),E?.focus());return}document.activeElement===E&&(x.preventDefault(),k?.focus())}return document.addEventListener("keydown",m),a||o.querySelector(D)?.focus(),()=>document.removeEventListener("keydown",m)},[a,i]),t.jsx(t.Fragment,{children:L.createPortal(t.jsx(O,{onMouseDown:o=>{n.current=o.target===o.currentTarget},onMouseUp:o=>{n.current&&o.target===o.currentTarget&&v(),n.current=!1},children:t.jsxs(U,{ref:f,role:"dialog","aria-modal":"true","aria-labelledby":r.title?p:void 0,"aria-label":r.title?void 0:r["aria-label"],$width:r.width,children:[t.jsxs(_,{children:[r.title&&t.jsx(G,{id:p,children:r.title}),t.jsx(J,{onClick:v,"aria-label":"Close",children:t.jsx(z,{size:16})})]}),t.jsx(N,{ref:P,tabIndex:I,children:t.jsx(q.Provider,{value:T,children:r.content})}),i&&!a&&t.jsx(M,{children:i}),a&&t.jsxs(M,{role:"alertdialog","aria-label":"Discard unsaved changes?",children:[t.jsx(Q,{children:"Discard unsaved changes?"}),t.jsx(C,{variant:"ghost",type:"button",onClick:()=>b(!1),children:"Keep editing"}),t.jsx(C,{variant:"primary",ref:y,type:"button",onClick:()=>{b(!1),c()},children:"Discard"})]})]})}),document.body)})}const O=s.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
`,U=s.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-floating);
  min-width: min(320px, 100vw - 16px);
  max-width: ${({$width:r})=>r??"560px"};
  width: 90vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
`,_=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-modal-bar);
  border-bottom: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
`,G=s.h2`
  margin: 0;
  ${F}
`,J=s.button`
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
`,N=s.div`
  padding: var(--inset-modal-body);
  overflow-y: auto;
  ${K}
  -webkit-overflow-scrolling: touch;
  flex: 1;
`,M=s.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-control-row);
  padding: var(--inset-modal-bar);
  border-top: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
`,Q=s.span`
  margin-right: auto;
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
`;export{ee as M,te as u};
