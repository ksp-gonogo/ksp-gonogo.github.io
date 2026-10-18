import{j as t}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as e}from"./ext-react-RRA14VTW.js";import{r as L}from"./ext-react-dom-CZVBhjGL.js";import l from"./ext-styled-components-Br73TgY3.js";import{a7 as z,i as $,a8 as q,e as C,a9 as F,aa as K}from"./ModalSaveBar-BGQiJ_re.js";const R=e.createContext(null);let A=0;function ee({children:o}){const[m,d]=e.useState([]),u=e.useCallback((n,a)=>{const f=`modal-${++A}`;return d(x=>[...x,{id:f,title:a?.title,"aria-label":a?.["aria-label"],width:a?.width,content:n}]),f},[]),c=e.useCallback(n=>{d(a=>a.filter(f=>f.id!==n))},[]),b=e.useMemo(()=>({open:u,close:c}),[u,c]);return t.jsxs(R.Provider,{value:b,children:[o,m.map((n,a)=>t.jsx(H,{entry:n,isTop:a===m.length-1,onClose:()=>c(n.id)},n.id))]})}function te(){const o=e.useContext(R);if(!o)throw new Error("useModal must be used inside <ModalProvider>");return o}const D='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function H({entry:o,isTop:m,onClose:d}){const u=e.useRef(null),c=e.useRef(m);c.current=m,e.useEffect(()=>{const r=document.activeElement instanceof HTMLElement?document.activeElement:null;return()=>{r?.isConnected&&r.focus()}},[]);const b=e.useId(),n=e.useRef(!1),[a,f]=e.useState(null),[x,S]=e.useState(!1),[i,p]=e.useState(!1),v=e.useRef(null),y=e.useRef(x);y.current=x;const w=e.useRef(i);w.current=i;const T=e.useMemo(()=>({setFooter:f,setDirty:S}),[]),[B,P]=e.useState(null),I=z(B),h=e.useCallback(()=>{if(y.current){p(!0);return}d()},[d]);return e.useEffect(()=>{function r(s){if(!(s.key!=="Escape"||!c.current)){if(w.current){s.stopPropagation(),p(!1);return}h()}}return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[h]),e.useEffect(()=>{i&&v.current?.focus()},[i]),e.useEffect(()=>{function r(s){const j=u.current;if(s.key!=="Tab"||!c.current||!j)return;const g=j.querySelectorAll(D),k=g[0],E=g[g.length-1];if(g.length===0){s.preventDefault();return}if(s.shiftKey){document.activeElement===k&&(s.preventDefault(),E?.focus());return}document.activeElement===E&&(s.preventDefault(),k?.focus())}return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[]),e.useEffect(()=>{i||u.current?.querySelector(D)?.focus()},[i]),t.jsx(t.Fragment,{children:L.createPortal(t.jsx(O,{onMouseDown:r=>{n.current=r.target===r.currentTarget},onMouseUp:r=>{n.current&&r.target===r.currentTarget&&h(),n.current=!1},children:t.jsxs(U,{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":o.title?b:void 0,"aria-label":o.title?void 0:o["aria-label"],$width:o.width,children:[t.jsxs(G,{children:[o.title&&t.jsx(J,{id:b,children:o.title}),t.jsx(N,{onClick:h,"aria-label":"Close",children:t.jsx($,{size:16})})]}),t.jsx(Q,{ref:P,tabIndex:I,children:t.jsx(q.Provider,{value:T,children:o.content})}),a&&!i&&t.jsx(M,{children:a}),i&&t.jsxs(M,{role:"alertdialog","aria-label":"Discard unsaved changes?",children:[t.jsx(V,{children:"Discard unsaved changes?"}),t.jsx(C,{variant:"ghost",type:"button",onClick:()=>p(!1),children:"Keep editing"}),t.jsx(C,{variant:"primary",ref:v,type:"button",onClick:()=>{p(!1),d()},children:"Discard"})]})]})}),document.body)})}const O=l.div`
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
  max-height: 80vh;
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
