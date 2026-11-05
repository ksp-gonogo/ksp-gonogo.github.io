import{j as t}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as e}from"./ext-react-C0MU9AHG.js";import{r as A}from"./ext-react-dom-DCF8ZnaJ.js";import l from"./ext-styled-components-DAuodqsN.js";import{a8 as C,i as B,a9 as L,aa as z,e as D,ab as F,U}from"./ModalSaveBar-Dvpw_Ezv.js";const T=e.createContext(null);let q=0;function Y({children:r}){const[h,d]=e.useState([]),u=e.useCallback((n,i)=>{const f=`modal-${++q}`;return d(b=>[...b,{id:f,title:i?.title,"aria-label":i?.["aria-label"],width:i?.width,content:n}]),f},[]),c=e.useCallback(n=>{d(i=>i.filter(f=>f.id!==n))},[]),m=e.useMemo(()=>({open:u,close:c}),[u,c]);return t.jsxs(T.Provider,{value:m,children:[r,h.map((n,i)=>t.jsx(I,{entry:n,isTop:i===h.length-1,onClose:()=>c(n.id)},n.id))]})}function Z(){const r=e.useContext(T);if(!r)throw new Error("useModal must be used inside <ModalProvider>");return r}const R='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function I({entry:r,isTop:h,onClose:d}){const u=e.useRef(null),c=e.useRef(h);c.current=h,e.useEffect(()=>{const o=document.activeElement instanceof HTMLElement?document.activeElement:null;return()=>{if(o?.isConnected){document.documentElement.setAttribute(C,"");try{o.focus()}finally{document.documentElement.removeAttribute(C)}}}},[]);const m=e.useId(),n=e.useRef(!1),[i,f]=e.useState(null),[b,S]=e.useState(!1),[a,p]=e.useState(!1),x=e.useRef(null),w=e.useRef(b);w.current=b;const y=e.useRef(a);y.current=a;const P=e.useMemo(()=>({setFooter:f,setDirty:S}),[]),v=e.useCallback(()=>{if(w.current){p(!0);return}d()},[d]);return e.useEffect(()=>{function o(s){if(!(s.key!=="Escape"||!c.current)){if(y.current){s.stopPropagation(),p(!1);return}v()}}return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[v]),e.useEffect(()=>{a&&x.current?.focus()},[a]),e.useEffect(()=>{function o(s){const E=u.current;if(s.key!=="Tab"||!c.current||!E)return;const g=E.querySelectorAll(R),j=g[0],k=g[g.length-1];if(g.length===0){s.preventDefault();return}if(s.shiftKey){document.activeElement===j&&(s.preventDefault(),k?.focus());return}document.activeElement===k&&(s.preventDefault(),j?.focus())}return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[]),e.useEffect(()=>{a||u.current?.querySelector(R)?.focus()},[a]),t.jsx(t.Fragment,{children:A.createPortal(t.jsx(O,{onMouseDown:o=>{n.current=o.target===o.currentTarget},onMouseUp:o=>{n.current&&o.target===o.currentTarget&&v(),n.current=!1},children:t.jsxs($,{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":r.title?m:void 0,"aria-label":r.title?void 0:r["aria-label"],$width:r.width,children:[t.jsxs(K,{children:[r.title&&t.jsx(H,{id:m,children:r.title}),t.jsx(_,{onClick:v,"aria-label":"Close",children:t.jsx(B,{size:16})})]}),t.jsx(G,{children:t.jsx(L,{children:t.jsx(z.Provider,{value:P,children:r.content})})}),i&&!a&&t.jsx(M,{children:i}),a&&t.jsxs(M,{role:"alertdialog","aria-label":"Discard unsaved changes?",children:[t.jsx(J,{children:"Discard unsaved changes?"}),t.jsx(D,{variant:"ghost",type:"button",onClick:()=>p(!1),children:"Keep editing"}),t.jsx(D,{variant:"primary",ref:x,type:"button",onClick:()=>{p(!1),d()},children:"Discard"})]})]})}),document.body)})}const O=l.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
`,$=l.div`
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
`,K=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-modal-bar);
  border-bottom: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
`,H=l.h2`
  margin: 0;
  ${F}
`,_=l.button`
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
    min-width: var(--touch-target);
    min-height: var(--touch-target);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`,G=l(U)`
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
`,M=l.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-control-row);
  padding: var(--inset-modal-bar);
  border-top: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
`,J=l.span`
  margin-right: auto;
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
`;export{Y as M,Z as u};
