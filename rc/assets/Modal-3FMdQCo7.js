import{j as t}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as e}from"./ext-react-C0MU9AHG.js";import{r as P}from"./ext-react-dom-DCF8ZnaJ.js";import l from"./ext-styled-components-DAuodqsN.js";import{i as B,a7 as L,e as C,a8 as z,T as q}from"./ModalSaveBar-DLI7mfmD.js";const R=e.createContext(null);let A=0;function X({children:r}){const[h,d]=e.useState([]),u=e.useCallback((o,i)=>{const f=`modal-${++A}`;return d(p=>[...p,{id:f,title:i?.title,"aria-label":i?.["aria-label"],width:i?.width,content:o}]),f},[]),c=e.useCallback(o=>{d(i=>i.filter(f=>f.id!==o))},[]),m=e.useMemo(()=>({open:u,close:c}),[u,c]);return t.jsxs(R.Provider,{value:m,children:[r,h.map((o,i)=>t.jsx(F,{entry:o,isTop:i===h.length-1,onClose:()=>c(o.id)},o.id))]})}function Y(){const r=e.useContext(R);if(!r)throw new Error("useModal must be used inside <ModalProvider>");return r}const D='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function F({entry:r,isTop:h,onClose:d}){const u=e.useRef(null),c=e.useRef(h);c.current=h,e.useEffect(()=>{const n=document.activeElement instanceof HTMLElement?document.activeElement:null;return()=>{n?.isConnected&&n.focus()}},[]);const m=e.useId(),o=e.useRef(!1),[i,f]=e.useState(null),[p,T]=e.useState(!1),[a,v]=e.useState(!1),g=e.useRef(null),y=e.useRef(p);y.current=p;const w=e.useRef(a);w.current=a;const S=e.useMemo(()=>({setFooter:f,setDirty:T}),[]),x=e.useCallback(()=>{if(y.current){v(!0);return}d()},[d]);return e.useEffect(()=>{function n(s){if(!(s.key!=="Escape"||!c.current)){if(w.current){s.stopPropagation(),v(!1);return}x()}}return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[x]),e.useEffect(()=>{a&&g.current?.focus()},[a]),e.useEffect(()=>{function n(s){const j=u.current;if(s.key!=="Tab"||!c.current||!j)return;const b=j.querySelectorAll(D),k=b[0],E=b[b.length-1];if(b.length===0){s.preventDefault();return}if(s.shiftKey){document.activeElement===k&&(s.preventDefault(),E?.focus());return}document.activeElement===E&&(s.preventDefault(),k?.focus())}return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[]),e.useEffect(()=>{a||u.current?.querySelector(D)?.focus()},[a]),t.jsx(t.Fragment,{children:P.createPortal(t.jsx($,{onMouseDown:n=>{o.current=n.target===n.currentTarget},onMouseUp:n=>{o.current&&n.target===n.currentTarget&&x(),o.current=!1},children:t.jsxs(I,{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":r.title?m:void 0,"aria-label":r.title?void 0:r["aria-label"],$width:r.width,children:[t.jsxs(K,{children:[r.title&&t.jsx(H,{id:m,children:r.title}),t.jsx(O,{onClick:x,"aria-label":"Close",children:t.jsx(B,{size:16})})]}),t.jsx(U,{children:t.jsx(L.Provider,{value:S,children:r.content})}),i&&!a&&t.jsx(M,{children:i}),a&&t.jsxs(M,{role:"alertdialog","aria-label":"Discard unsaved changes?",children:[t.jsx(G,{children:"Discard unsaved changes?"}),t.jsx(C,{variant:"ghost",type:"button",onClick:()=>v(!1),children:"Keep editing"}),t.jsx(C,{variant:"primary",ref:g,type:"button",onClick:()=>{v(!1),d()},children:"Discard"})]})]})}),document.body)})}const $=l.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
`,I=l.div`
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
  ${z}
`,O=l.button`
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
`,U=l(q)`
  margin-inline: 0;

  [data-scroll-area-inner] {
    padding: var(--inset-modal-body);
    /* A tab strip or table inside reaches the dialog's edges, not just the body's content column. */
    --bleed-inline: var(--inset-modal-body);
    -webkit-overflow-scrolling: touch;
  }
`,M=l.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-control-row);
  padding: var(--inset-modal-bar);
  border-top: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
`,G=l.span`
  margin-right: auto;
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
`;export{X as M,Y as u};
