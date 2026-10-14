import{j as e}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./ext-react-RRA14VTW.js";import s from"./ext-styled-components-Br73TgY3.js";import{a5 as T,a0 as R}from"./titleText-ykBpW36X.js";import{t as $}from"./streamStatusWord-tv2-QViF.js";function A({children:t,status:r,gap:n="related-packed",align:a="center"}){return e.jsxs(T,{align:a,gap:n,justify:"between",wrap:!0,children:[t,r]})}const b=s.div`
  color: var(--color-text-primary);
  font-weight: 600;
  /* One rung above the body the arrangement sets; both halves are declared here, so a site cannot break the step. */
  font-size: var(--font-size-value);
  line-height: var(--line-height-tight);
  /* A content-sized basis, so a long title wraps instead of running into the badge beside it. */
  flex: 1 1 auto;
  min-width: 0;
`,S=s.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-record-lead);
  flex: 1 1 auto;
  min-width: 0;
`;function j({left:t,right:r,children:n}){return e.jsx(A,{align:"baseline",status:r,children:t==null?n:e.jsxs(S,{children:[t,n]})})}const z=s.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--gap-related);
`,k=s.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  flex: 1 1 var(--block-body-floor, 9rem);
  min-width: 0;
`,f=s.div`
  min-width: 0;
  ${({$side:t})=>t?`flex: 0 0 auto;
    --radius-display-frame: var(--radius-display-frame-aside);`:""}
`,w=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-related);
  flex-wrap: wrap;
`,_=s.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  min-width: 0;
  /* The compact body size, declared here so the title stays one rung above it. */
  font-size: var(--font-size-compact);
`;function g(t,{title:r,titleAs:n,titleLeft:a,titleRight:o,left:i,right:l,top:p,bottom:d,footer:c,children:u,...x}){const y=r!=null||a!=null||o!=null,B=i!=null||l!=null,m=y&&e.jsx(j,{left:a,right:o,children:r!=null&&e.jsx(b,{as:n,children:r})});return e.jsxs(t,{...x,children:[p!=null&&e.jsx(f,{$side:!1,children:p}),B?e.jsxs(z,{children:[i!=null&&e.jsx(f,{$side:!0,children:i}),e.jsxs(k,{children:[m,u]}),l!=null&&e.jsx(f,{$side:!0,children:l})]}):e.jsxs(e.Fragment,{children:[m,u]}),c!=null&&e.jsx(w,{children:c}),d!=null&&e.jsx(f,{$side:!1,children:d})]})}const N={Title:b,TitleRow:j,Body:k,Aside:f,Footer:w};function E({...t}){return g(_,t)}const K=Object.assign(E,N),v=s(_)`
  --gap-related: var(--gap-related-comfortable);
  --bleed-inline: 0px;

  background: var(--color-surface-sunken);
  border: 1px solid ${({$tone:t})=>$(t)};
  border-radius: var(--radius-regular);
  /* A banner is its own strip of the screen, so it takes the roomier inset. */
  padding: var(--inset-surface-standalone);
`;function M({tone:t="warn",assertive:r=!1,role:n,children:a,...o}){const i=h.useRef(null),[l,p]=h.useState("");if(h.useEffect(()=>{const c=i.current;if(r||n!==void 0||c===null)return;const u=F(c);p(x=>x===u?x:u)}),r)return g(v,{...o,children:a,role:n??"alert","aria-live":n===void 0?"assertive":void 0,$tone:t});const d=g(v,{...o,children:a,ref:i,role:n??"note",$tone:t});return n!==void 0?d:e.jsxs(e.Fragment,{children:[d,e.jsx(R,{visuallyHidden:!0,children:l})]})}function F(t){const r=[],n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT);for(let a=n.nextNode();a!==null;a=n.nextNode())r.push(a.textContent??"");return r.join(" ").replace(/\s+/g," ").trim()}export{K as B,M as N,A as S,N as a,_ as b,g as r};
