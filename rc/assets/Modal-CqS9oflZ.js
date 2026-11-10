import{j as t}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as e}from"./ext-react-C0MU9AHG.js";import{r as A}from"./ext-react-dom-DCF8ZnaJ.js";import d from"./ext-styled-components-DAuodqsN.js";import{a8 as C,I as B,i as I,a9 as L,aa as z,e as D,ab as F,U}from"./ModalSaveBar-CP3fcnhB.js";const T=e.createContext(null);let q=0;function Y({children:r}){const[m,c]=e.useState([]),u=e.useCallback((n,a)=>{const f=`modal-${++q}`;return c(b=>[...b,{id:f,title:a?.title,"aria-label":a?.["aria-label"],width:a?.width,content:n}]),f},[]),l=e.useCallback(n=>{c(a=>a.filter(f=>f.id!==n))},[]),h=e.useMemo(()=>({open:u,close:l}),[u,l]);return t.jsxs(T.Provider,{value:h,children:[r,m.map((n,a)=>t.jsx(O,{entry:n,isTop:a===m.length-1,onClose:()=>l(n.id)},n.id))]})}function Z(){const r=e.useContext(T);if(!r)throw new Error("useModal must be used inside <ModalProvider>");return r}const R='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function O({entry:r,isTop:m,onClose:c}){const u=e.useRef(null),l=e.useRef(m);l.current=m,e.useEffect(()=>{const o=document.activeElement instanceof HTMLElement?document.activeElement:null;return()=>{if(o?.isConnected){document.documentElement.setAttribute(C,"");try{o.focus()}finally{document.documentElement.removeAttribute(C)}}}},[]);const h=e.useId(),n=e.useRef(!1),[a,f]=e.useState(null),[b,S]=e.useState(!1),[i,p]=e.useState(!1),g=e.useRef(null),w=e.useRef(b);w.current=b;const y=e.useRef(i);y.current=i;const P=e.useMemo(()=>({setFooter:f,setDirty:S}),[]),x=e.useCallback(()=>{if(w.current){p(!0);return}c()},[c]);return e.useEffect(()=>{function o(s){if(!(s.key!=="Escape"||!l.current)){if(y.current){s.stopPropagation(),p(!1);return}x()}}return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[x]),e.useEffect(()=>{i&&g.current?.focus()},[i]),e.useEffect(()=>{function o(s){const E=u.current;if(s.key!=="Tab"||!l.current||!E)return;const v=E.querySelectorAll(R),j=v[0],k=v[v.length-1];if(v.length===0){s.preventDefault();return}if(s.shiftKey){document.activeElement===j&&(s.preventDefault(),k?.focus());return}document.activeElement===k&&(s.preventDefault(),j?.focus())}return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[]),e.useEffect(()=>{i||u.current?.querySelector(R)?.focus()},[i]),t.jsx(t.Fragment,{children:A.createPortal(t.jsx($,{onMouseDown:o=>{n.current=o.target===o.currentTarget},onMouseUp:o=>{n.current&&o.target===o.currentTarget&&x(),n.current=!1},children:t.jsxs(K,{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":r.title?h:void 0,"aria-label":r.title?void 0:r["aria-label"],$width:r.width,children:[t.jsxs(H,{children:[r.title&&t.jsx(_,{id:h,children:r.title}),t.jsx(B,{onClick:x,"aria-label":"Close","data-tooltip":"",children:t.jsx(I,{size:16})})]}),t.jsx(G,{children:t.jsx(L,{children:t.jsx(z.Provider,{value:P,children:r.content})})}),a&&!i&&t.jsx(M,{children:a}),i&&t.jsxs(M,{role:"alertdialog","aria-label":"Discard unsaved changes?",children:[t.jsx(J,{children:"Discard unsaved changes?"}),t.jsx(D,{variant:"ghost",type:"button",onClick:()=>p(!1),children:"Keep editing"}),t.jsx(D,{variant:"primary",ref:g,type:"button",onClick:()=>{p(!1),c()},children:"Discard"})]})]})}),document.body)})}const $=d.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
`,K=d.div`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-floating);
  min-width: min(320px, 100vw - 16px);
  max-width: ${({$width:r})=>r??"560px"};
  width: 90vw;
  /* The dvh line is the visible viewport on a phone, where vh is the height with the browser bars away. */
  max-height: 80vh;
  max-height: 80dvh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
`,H=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-modal-bar);
  border-bottom: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
`,_=d.h2`
  margin: 0;
  ${F}
`,G=d(U)`
  margin-inline: 0;

  [data-scroll-area-inner] {
    padding: var(--inset-modal-body);
    /* A tab strip or table inside reaches the dialog's edges, not just the body's content column. */
    --bleed-inline: var(--inset-modal-body);
    -webkit-overflow-scrolling: touch;
  }

  /* Content that asks for a minimum width (a form row, a table) must not push the body wider than a phone: it wraps or scrolls inside the dialog instead of scrolling the whole body sideways. */
  [data-scroll-area-inner] > * {
    min-width: 0;
  }
`,M=d.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-control-row);
  padding: var(--inset-modal-bar);
  border-top: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
`,J=d.span`
  margin-right: auto;
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
`;export{Y as M,Z as u};
