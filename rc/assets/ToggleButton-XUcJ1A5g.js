import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import d,{css as F,keyframes as fe}from"./ext-styled-components-Br73TgY3.js";import{X as _e,t as Se,m as ee,k as Me,i as ze,d as L,T as Re,S as Ie,j as Te}from"./contributionsRead-DSQ8W60c.js";import{r as p}from"./ext-react-RRA14VTW.js";import{E as he,ai as me,bl as Ae,au as Oe,aO as Ee,ab as P,bg as Fe,b9 as Ce,bs as te,bt as Be,af as De,aw as Pe,bu as Le,a2 as He,av as Ne,_ as We,aa as Ge,e as Ke}from"./ModalSaveBar-BS1ba4Jh.js";import{cx as re,l as Ue,b2 as K}from"./view-clock-formula-CVZBU1aa.js";import"./ksp-enum-names-C2UhZdgT.js";import"./screen-W8lTyEHK.js";function Ve(e,t){if(!t)return!0;const n=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(n)||e.key.toLowerCase().includes(n)}function Xe(e,t,n=Ve){return e.filter(o=>n(o,t))}function qe(e,t="Other"){const n=new Map;for(const o of e){const i=o.group??t;let a=n.get(i);a||(a=[],n.set(i,a)),a.push(o)}return[...n.entries()].sort(([o],[i])=>o.localeCompare(i))}function Ye(e){return e.flatMap(([,t])=>t)}function ne(e,t,n){return n===0?-1:Math.max(0,Math.min(e+t,n-1))}function Qe({id:e,groups:t,flatOptions:n,activeIndex:o,selectedKey:i,getOptionId:a,onHoverIndex:u,onSelectKey:c,renderItem:l,emptyLabel:h="No matches","aria-label":m,placement:w="below"}){return r.jsx(Ze,{role:"listbox",id:e,"aria-label":m,$placement:w,onMouseDown:f=>f.preventDefault(),children:n.length===0?r.jsx(he,{layout:"fill",children:h}):t.map(([f,b],x)=>r.jsxs(Je,{role:"group","aria-labelledby":`${e}-group-${x}`,children:[r.jsx(et,{id:`${e}-group-${x}`,"aria-hidden":"true",children:f}),b.map(v=>{const _=n.indexOf(v),S=_===o;return r.jsx(rt,{id:a(v.key),role:"option","aria-selected":S,$active:S,$selected:v.key===i,onPointerDown:R=>{R.preventDefault(),c(v.key)},onMouseEnter:()=>u(_),children:l?l(v):v.label??v.key},v.key)})]},f))})}const Ze=d.div`
  position: absolute;
  ${({$placement:e})=>e==="above"?"bottom: calc(100% + 2px);":"top: calc(100% + 2px);"}
  left: 0;
  right: 0;
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  max-height: 280px;
  overflow-y: auto;
  z-index: var(--z-dropdown);
`,Je=d.div``,et=d.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-raised);
`;function tt(e,t){return e?"background: var(--color-surface-panel);":t?_e("go"):"background: transparent;"}const rt=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-menu-item);
  cursor: pointer;
  ${({$active:e,$selected:t})=>tt(e,t)}
  /* Focus stays on the input, so the highlighted option carries the focus colour as an inset bar. */
  box-shadow: ${({$active:e})=>e?"inset 3px 0 0 var(--color-focus)":"none"};

  &:hover {
    background: var(--color-surface-panel);
  }
`;function Jt({tone:e,children:t,live:n=!1,pulse:o,...i}){const a=n?{role:"status","aria-live":"polite"}:{};return r.jsxs(nt,{"data-tone":e,...a,...i,children:[r.jsx(at,{"data-tone":e,$pulse:o,"aria-hidden":"true"}),r.jsx(it,{children:t})]})}const nt=d.div`
  display: flex;
  align-items: center;
  gap: var(--gap-glyph-box);
  font-size: var(--font-size-compact);
  /* Small, so a wrapped sentence clears the border without pushing a single line past the control height. */
  padding: var(--inset-status-box);
  /* A boxed readout that sits in bars beside controls, so it takes the kit's one control height. */
  min-height: var(--control-height);
  background: var(--color-surface-raised);
  border: 1px solid;
  border-radius: var(--radius-regular);

  border-color: ${({"data-tone":e})=>Se(e)};
`,ot=fe`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,at=d.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  flex-shrink: 0;

  background: ${({"data-tone":e})=>ee[e]};

  /* A looping pulse needs its own reduced-motion guard; the 1s/2s periods encode connection state. */
  ${({$pulse:e})=>e?F`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${ot} ${e==="fast"?"1s":"2s"}
              var(--ease-emphasis) infinite;
          }
        `:""}
`,it=d.span`
  color: var(--color-text-primary);
  line-height: var(--line-height-body);
`;function er({checked:e,onChange:t,label:n,disabled:o,id:i,"aria-label":a}){return r.jsxs(st,{$disabled:o,children:[r.jsx(lt,{type:"checkbox",id:i,checked:e,disabled:o,onChange:u=>t(u.target.checked),"aria-label":n?void 0:a}),r.jsx(ge,{$checked:e,$disabled:o,children:r.jsx(ct,{$checked:e,$disabled:o})}),n&&r.jsx(dt,{children:n})]})}const st=d.label`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-glyph-control);
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  user-select: none;
  opacity: ${({$disabled:e})=>e?.5:1};

  @media (pointer: coarse) {
    /* Expand tap target to 44px tall without enlarging the visual track. */
    min-height: 44px;
    padding: var(--inset-switch-touch);
  }
`,ge=d.div`
  width: 28px;
  height: 14px;
  /* --radius-pill keeps the stadium shape through a height change. */
  border-radius: var(--radius-pill);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-surface-raised)":e?"var(--color-go-mark)":"var(--color-surface-raised)"};
  border: 1px solid ${({$checked:e,$disabled:t})=>t?"var(--color-border-strong)":e?"var(--color-go-mark)":"var(--color-border-strong)"};
  position: relative;
  flex-shrink: 0;
  transition: background var(--duration-base), border-color var(--duration-base);
`,lt=d.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:focus-visible + ${ge} {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,ct=d.div`
  position: absolute;
  /* Measured inside the border: the track is border-box, so its 1px border leaves a 26 by 12 box, and 2px on every side centres the 8px thumb at either end. */
  top: 2px;
  left: ${({$checked:e})=>e?"16px":"2px"};
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-text-faint)":e?"var(--color-accent-fg)":"var(--color-text-faint)"};
  transition: left var(--duration-base), background var(--duration-base);
`,dt=d.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;function tr({size:e=12,thickness:t=2,color:n="var(--color-accent-fg)","aria-label":o="Loading",...i}){return r.jsx(pt,{...i,role:"status","aria-label":o,$size:e,$thickness:t,$color:n})}const ut=fe`
  to { transform: rotate(360deg); }
`,pt=d.span`
  display: inline-block;
  width: ${({$size:e})=>`${e}px`};
  height: ${({$size:e})=>`${e}px`};
  border-radius: var(--radius-circle);
  border: ${({$thickness:e})=>`${e}px`} solid
    var(--color-border-subtle);
  border-top-color: ${({$color:e})=>e};
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    /* Off the motion scale: continuous rotation, not a UI transition. */
    animation: ${ut} 700ms linear infinite;
  }
`,ft="is no longer available";function rr({keys:e,value:t,onChange:n,clearable:o=!1,placeholder:i="Search...",subjectNoun:a="value",id:u,"aria-label":c}){const[l,h]=p.useState(""),[m,w]=p.useState(!1),[f,b]=p.useState(-1),x=p.useRef(null),v=p.useRef(null),_=p.useId(),S=p.useId(),R=p.useId(),I=g=>`${S}-${g}`,k=e.find(g=>g.key===t),$=t!==null&&t!==""&&k===void 0&&e.length>0,M=p.useMemo(()=>Xe(e,l),[e,l]),C=p.useMemo(()=>qe(M),[M]),E=p.useMemo(()=>Ye(C),[C]),H=p.useCallback(()=>{w(!0),h(""),b(-1)},[]),T=p.useCallback(()=>{w(!1),h(""),b(-1)},[]),N=p.useCallback(g=>{n(g),T()},[n,T]),W=g=>{if(!m){(g.key==="Enter"||g.key==="ArrowDown")&&H();return}switch(g.key){case"Escape":g.stopPropagation(),T();break;case"ArrowDown":g.preventDefault(),b(A=>ne(A,1,E.length));break;case"ArrowUp":g.preventDefault(),b(A=>ne(A,-1,E.length));break;case"Enter":{const A=l!=="",s=f>=0?E[f]:A?E[0]:void 0;s&&N(s.key);break}}};p.useEffect(()=>{if(!m)return;const g=A=>{x.current?.contains(A.target)||T()};return document.addEventListener("pointerdown",g),()=>document.removeEventListener("pointerdown",g)},[m,T]);const B=m?l:k?.label??t??"",D=m&&f>=0?E[f]:void 0;return r.jsxs(ht,{ref:x,children:[r.jsx(mt,{ref:v,id:u,"aria-label":c,value:B,placeholder:t?void 0:i,$hasValue:!!t&&!m,$retired:$&&!m,"aria-invalid":$&&!m?!0:void 0,"aria-describedby":$&&!m?R:void 0,onFocus:H,onBlur:T,onChange:g=>{h(g.target.value),b(-1)},onKeyDown:W,role:"combobox","aria-expanded":m,"aria-controls":_,"aria-autocomplete":"list","aria-activedescendant":D?I(D.key):void 0}),$&&!m&&r.jsx(bt,{id:R,children:`This ${a} ${ft}. Pick another.`}),o&&t&&!m&&r.jsx(gt,{type:"button","aria-label":`Clear ${a}`,onClick:()=>{n(null),T()},children:"×"}),m&&r.jsx(Qe,{id:_,groups:C,flatOptions:E,activeIndex:f,selectedKey:t,getOptionId:I,onHoverIndex:b,onSelectKey:N,"aria-label":c??"Data keys",renderItem:g=>r.jsxs(r.Fragment,{children:[r.jsx(xt,{children:g.label??g.key}),g.unit&&r.jsx(vt,{children:g.unit})]})})]})}const ht=d.div`
  position: relative;
`,mt=d.input`
  background: var(--color-surface-raised);
  border: 1px solid ${({$retired:e})=>e?"var(--color-nogo-text)":"var(--color-border-strong)"};
  border-radius: var(--radius-regular);
  color: ${({$hasValue:e,$retired:t})=>t?"var(--color-nogo-text)":e?"var(--color-text-primary)":"var(--color-text-muted)"};
  font-size: var(--font-size-value);
  padding: var(--inset-field);
  width: 100%;

  &:focus {
    border-color: var(--color-text-faint);
    outline: none;
  }

  ${me}

  &::placeholder {
    color: var(--color-text-faint);
  }
`,gt=d.button`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-text-dim);
  cursor: pointer;
  font-size: var(--font-size-lg);
  line-height: var(--line-height-flush);
  padding: var(--inset-glyph-tight);

  &:hover {
    color: var(--color-text-primary);
  }

  ${me}
`,bt=d.div`
  color: var(--color-nogo-text);
  font-size: var(--font-size-compact);
  margin-top: var(--gap-caption);
`,xt=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
`,vt=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  margin-left: var(--gap-trailing-mark);
`,oe={left:!1,right:!1};function wt(e){const[t,n]=p.useState(oe),o=p.useRef(oe);return p.useEffect(()=>{if(!e)return;const i=()=>{const c=e.scrollLeft>1,l=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===c&&o.current.right===l||(o.current={left:c,right:l},n(o.current))};i(),e.addEventListener("scroll",i,{passive:!0});const a=typeof ResizeObserver>"u"?null:new ResizeObserver(i);a?.observe(e);for(const c of Array.from(e.children))a?.observe(c);const u=new MutationObserver(()=>{for(const c of Array.from(e.children))a?.observe(c);i()});return u.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",i),a?.disconnect(),u.disconnect()}},[e]),t}const ae=d.div`
  position: absolute;
  top: 0;
  bottom: 0;
  ${({$position:e})=>e==="left"?"left: 0;":"right: 0;"}
  width: max(28px, var(--bleed-inline));
  pointer-events: none;
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity var(--duration-base) var(--ease-standard);
  background: linear-gradient(
    to ${({$position:e})=>e==="left"?"right":"left"},
    rgba(255, 255, 255, 0.12),
    rgba(255, 255, 255, 0) 100%
  );

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function nr({rows:e,segment:t="filters",emptyLabel:n="Nothing matches the filter"}){const o=Ae({segment:t}),i=e.filter(a=>o.matches(a.searchText));return r.jsx(Oe,{filter:o,children:i.length>0?r.jsx(Me,{gap:"related",children:i.map(a=>r.jsx("div",{children:a.node},a.id))}):r.jsx(he,{children:n})})}const kt="8px";function be({percent:e,tone:t,fillColor:n,trackHeld:o=!1,fillHeld:i=!1,children:a,...u}){return r.jsxs(yt,{"data-track-held":o?"":void 0,...u,children:[e!==null&&r.jsx(jt,{$tone:t,$fillColor:n,$held:i,"data-fill-held":i?"":void 0,style:{width:`${e}%`}}),o&&r.jsx($t,{"data-track-hatch":"",style:{left:`${e??0}%`}}),a]})}const yt=d.div`
  width: 100%;
  border-radius: var(--radius-pill);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  overflow: hidden;
  /* Positioned for the fill only: this overflow rounds the fill's ends and would clip any mark drawn over it. */
  position: relative;
  height: ${kt};
`,$t=d.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(
    -45deg,
    ${ee.warn} 0 1px,
    transparent 1px 4px
  );
  opacity: 0.55;
  pointer-events: none;
`,jt=d.div`
  height: 100%;
  border-radius: var(--radius-pill);
  transition: width var(--duration-slow) var(--ease-standard);
  /* A held reading dims the fill, not the hue and not the whole bar, so a label beside it stays readable. */
  ${({$held:e})=>e?"opacity: 0.55;":""}
  background: ${({$tone:e,$fillColor:t})=>t??ee[e]};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function or({label:e,value:t,capacity:n,format:o,tone:i="neutral",fillColor:a,valueLabel:u,valueLabelNode:c,layout:l="stacked",hideLabel:h=!1,statement:m=!1,...w}){const f=ie(t),b=ie(n),x=_t(f.figure,n===void 0?void 0:b.figure);if(x===null||!Number.isFinite(x))return h?null:r.jsx(ye,{layout:l,label:e,display:r.jsx(ze,{}),...w,children:r.jsx(be,{percent:null,tone:i,"aria-hidden":"true"})});const v=Math.min(1,Math.max(0,x)),_={label:e,layout:l,hideLabel:h,statement:m,pct:Math.round(v*100),tone:i,fillColor:a,trackHeld:b.reading?.state==="held"&&!re(b.figure),fillHeld:f.reading?.state==="held"&&!re(f.figure),...w},S=Z(1,Q(b.reading,b.figure,b.figure));if(n!==void 0)return r.jsx(Ee,{of:f.figure?.unit,format:o,children:r.jsx(Mt,{..._,value:t,capacity:n,shown:f,held:b,endBounds:S,at:v,valueLabel:u,valueLabelNode:c})});const R=Z(v,Q(f.reading,f.figure,null));return r.jsx(ke,{..._,bounds:R,endBounds:S,display:c??(u===void 0?r.jsx(P,{value:t,format:o}):r.jsx(ve,{caption:X(t),children:u})),spoken:we(u===void 0?L(f.figure,{format:o}):xe(u,X(t)),R,S)})}function X(e){const{held:t,caption:n}=De(e??null);return t?n:null}function xe(e,t){return t===null?e:`${e}, ${t}`}function ve({caption:e,children:t}){return e===null?r.jsx(r.Fragment,{children:t}):r.jsx(Pe,{caption:e,children:t})}function ie(e){return typeof e!="object"||e===null||!("state"in e)?{figure:e??null,reading:null}:{figure:e.value??null,reading:e}}function _t(e,t){return e===null||t===null||t!==void 0&&!t.isPositive()?null:(t===void 0?e:e.dividedBy(t)).magnitude}function Q(e,t,n){if(e===null||e.reckoning.status!=="available"||t===null)return null;const o=Ue(e.reckoning.band,t.unit);if(!o)return null;const i={loSaid:o.lo,hiSaid:o.hi,kind:o.kind};return n===null?{lo:K(o.lo,0),hi:K(o.hi,0),...i}:n.isPositive()?{lo:K(o.lo.dividedBy(n),0),hi:K(o.hi.dividedBy(n),0),...i}:null}function Z(e,t){return t===null?null:Fe(e,[t.lo,t.hi],Ce())?t:null}function we(e,t,n,o){const i=(u,c)=>{const l=L(u.loSaid,o),h=L(u.hiSaid,o);return`${c}with bands at ${l} and ${h}`},a=[t===null?null:i(t,""),n===null?null:i(n,"capacity ")].filter(u=>u!==null);return a.length===0?e:`${e}, ${a.join(", ")}`}function St(e){if(!Number.isFinite(e))return 0;const t=Math.min(1,Math.max(0,e));return Math.round(t*1e4)/100}function U(e){const t=St(e),n=t<=0?0:t>=100?-2:-1;return{style:{left:`${t}%`,transform:`translateX(${n}px)`}}}function ke({label:e,layout:t,hideLabel:n,statement:o,pct:i,tone:a,fillColor:u,trackHeld:c,fillHeld:l,display:h,spoken:m,bounds:w,endBounds:f,...b}){return r.jsxs(ye,{layout:t,label:e,display:h,hideHead:n,statement:o,...b,children:[r.jsx(be,{percent:i,tone:a,fillColor:u,trackHeld:c,fillHeld:l,role:"meter","aria-label":e,"aria-valuenow":i,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":m}),(w!==null||f!==null)&&r.jsxs(Ot,{"aria-hidden":"true",children:[w!==null&&r.jsxs(r.Fragment,{children:[r.jsx(V,{"data-bound":"lo",...U(w.lo)}),r.jsx(V,{"data-bound":"hi",...U(w.hi)})]}),f!==null&&r.jsxs(r.Fragment,{children:[r.jsx(V,{"data-end-bound":"lo",...U(f.lo)}),r.jsx(V,{"data-end-bound":"hi",...U(f.hi)})]})]})]})}function ye({layout:e,label:t,display:n,hideHead:o=!1,statement:i=!1,children:a,...u}){return o?r.jsxs(q,{$row:!1,...u,children:[r.jsx(Y,{$row:!1,children:a}),i&&r.jsx(At,{"data-meter-part":"statement",children:n})]}):e==="row"?r.jsxs(q,{$row:!0,"data-meter-row":"",...u,children:[r.jsx(le,{"data-meter-part":"label",children:t}),r.jsx(Y,{$row:!0,"data-meter-part":"bar",children:a}),r.jsx(ce,{$row:!0,"data-meter-part":"figure",children:n})]}):r.jsxs(q,{$row:!1,...u,children:[r.jsxs(Tt,{children:[r.jsx(le,{children:t}),r.jsx(ce,{$row:!1,children:n})]}),r.jsx(Y,{$row:!1,children:a})]})}function Mt({value:e,capacity:t,shown:n,held:o,at:i,valueLabel:a,valueLabelNode:u,...c}){const l=a===void 0,h=te(l?n.figure:void 0),m=te(l?o.figure:void 0),w=h??m??{},f=X(e)??X(t),b=u??(a!==void 0?r.jsx(ve,{caption:f,children:a}):c.layout==="row"?r.jsxs(Et,{$marked:c.fillHeld||c.trackHeld,children:[r.jsx(P,{value:e,hideUnitInGroup:!0})," / ",r.jsx(P,{value:t}),(c.fillHeld||c.trackHeld)&&r.jsx(Be,{"aria-hidden":"true","data-held-mark":""})]}):r.jsxs(r.Fragment,{children:[r.jsx(P,{value:e})," / ",r.jsx(P,{value:t})]})),x=a===void 0?`${L(n.figure,w)} of ${L(o.figure,w)}`:xe(a,f),v=Z(i,Q(n.reading,n.figure,o.figure));return r.jsx(ke,{...c,display:b,spoken:we(x,v,c.endBounds,w),bounds:v})}const J=48;function ar({children:e,...t}){const n=p.useRef(null);return p.useLayoutEffect(()=>{const o=n.current;if(!o||typeof ResizeObserver>"u")return;const i=()=>{o.clientWidth!==0&&o.toggleAttribute("data-figures-below",!zt(o))};let a=0;const u=()=>{cancelAnimationFrame(a),a=requestAnimationFrame(i)},c=new ResizeObserver(u),l=()=>{c.disconnect(),c.observe(o);for(const m of $e(o))c.observe(m)},h=new MutationObserver(l);return h.observe(o,{childList:!0,subtree:!0}),l(),i(),()=>{cancelAnimationFrame(a),c.disconnect(),h.disconnect()}},[]),r.jsx(It,{ref:n,...t,children:e})}const ir=d.div.attrs({"data-meter-row-group":""})`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  row-gap: var(--gap-meter-rows);
  min-width: 0;

  & > * {
    grid-column: 1 / -1;
    min-width: 0;
  }
`;function $e(e){return Array.from(e.querySelectorAll(':scope > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row] > [data-meter-part="figure"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="figure"]'))}function zt(e){const t=$e(e);if(t.length===0)return!0;let n=0,o=0;for(const l of t)l.dataset.meterPart==="label"?n=Math.max(n,Rt(l)):o=Math.max(o,l.scrollWidth);const i=getComputedStyle(e),a=l=>Number.parseFloat(l)||0,u=a(i.columnGap),c=e.clientWidth-a(i.paddingLeft)-a(i.paddingRight);return n+u+J+u+o<=c}function Rt(e){const t=e.style.whiteSpace;e.style.whiteSpace="nowrap";const n=e.scrollWidth;return e.style.whiteSpace=t,n}const It=d.div`
  display: grid;
  grid-template-columns:
    minmax(min-content, max-content)
    minmax(${J}px, 1fr)
    max-content;
  gap: var(--gap-meter-columns);
  width: 100%;

  & > * {
    grid-column: 1 / -1;
    min-width: 0;
  }

  & > [data-meter-row],
  & > [data-meter-row-group] > [data-meter-row] {
    display: grid;
    grid-template-columns: subgrid;
    column-gap: normal;
  }

  & > [data-meter-row] > [data-meter-part="label"],
  & > [data-meter-row-group] > [data-meter-row] > [data-meter-part="label"] {
    white-space: normal;
  }

  &[data-figures-below] {
    grid-template-columns:
      minmax(min-content, max-content)
      minmax(${J}px, 1fr);
  }

  &[data-figures-below] > [data-meter-row] > [data-meter-part="bar"],
  &[data-figures-below]
    > [data-meter-row-group]
    > [data-meter-row]
    > [data-meter-part="bar"] {
    grid-column: 2 / -1;
  }

  &[data-figures-below] > [data-meter-row] > [data-meter-part="figure"],
  &[data-figures-below]
    > [data-meter-row-group]
    > [data-meter-row]
    > [data-meter-part="figure"] {
    grid-column: 1 / -1;
  }
`,se="1px",q=d.div`
  display: flex;
  width: 100%;
  min-width: 0;
  ${({$row:e})=>e?F`
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          column-gap: var(--gap-meter-columns);
          row-gap: var(--gap-caption);
        `:F`
          flex-direction: column;
          gap: var(--gap-caption);
        `}
`,Tt=d.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--gap-label-value);
  min-width: 0;
  /* The value may drop to its own line at narrow widths rather than crushing the label. */
  flex-wrap: wrap;
`,le=d.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Never shrinks below the name: overflow hidden zeroes a flex item's automatic minimum size. */
  flex: 0 0 auto;
  max-width: 100%;
`,ce=d.span`
  font-size: ${({$row:e})=>e?"var(--font-size-compact)":"var(--font-size-value)"};
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  flex: 0 0 auto;
  /* Pins the value to the trailing edge on the shared line and when it wraps to its own. */
  margin-left: auto;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Room for the held mark Unit draws outside this box, reserved unconditionally so a quiet channel causes no reflow. */
  padding-right: max(0.44em, var(--inset-meter-mark));
`,At=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ot=d.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,Y=d.div`
  position: relative;
  ${({$row:e})=>e?F`
          flex: 1 1 28px;
          min-width: 28px;
        `:""}
`,Et=d(Le)`
  /* The pair's own mark reserves the room; the figures inside it carry none. */
  &::after {
    content: ${({$marked:e})=>e?'""':"none"};
  }
  & > span > [data-held-mark] {
    display: none;
  }
  & > span::after {
    content: none;
  }
`,V=d.div`
  position: absolute;
  top: ${se};
  bottom: ${se};
  width: 2px;
  background: var(--color-text-primary);
  /* Inset and outset, so the mark keeps an edge against a light or saturated fill on either side of its end. */
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 0.55),
    inset 0 0 0 0.5px rgb(0 0 0 / 0.35);
  opacity: 0.62;
  pointer-events: none;
`,Ft=d.div`
  display: ${({$size:e})=>e==="hero"?"flex":"inline-flex"};
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({$tone:e})=>Re[e]};
  ${({$size:e})=>e==="hero"?F`
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--gap-tiny-content);
          text-align: center;
          /* A fluid size off the type scale, with a line height tuned to it so descenders do not clip. */
          font-size: clamp(20px, 6vw, 38px);
          line-height: 1.05;
          min-width: 0;
        `:F`
          align-items: baseline;
          gap: var(--gap-value-tag);
          /* Display tier: the type scale stops at lg, so this stays literal. */
          font-size: 22px;
        `}
`;function sr({size:e="inline",tone:t="neutral",...n}){return r.jsx(Ft,{$size:e,$tone:t,...n})}const lr=d.span`
  font-size: var(--font-size-caption);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-transform: uppercase;
`;function de(e,t,n,o){const i=t-e;if(i===0){const a=(n+o)/2;return()=>a}return a=>n+(a-e)/i*(o-n)}function Ct(e,t,n,o){return e.map((i,a)=>`${a===0?"M":"L"}${n(i).toFixed(2)},${o(t[a]).toFixed(2)}`).join(" ")}function cr({values:e,width:t,height:n,color:o="var(--color-text-primary)",strokeWidth:i=1.5,yDomain:a,showZeroBaseline:u=!1,background:c=!0,"aria-label":l="Trend sparkline"}){const h=p.useMemo(()=>e.filter(k=>Number.isFinite(k)),[e]),m=`sparkline-fill-${p.useId().replace(/:/g,"")}`,w=p.useMemo(()=>{if(a)return a;if(h.length===0)return[0,1];let k=h[0],$=h[0];for(const M of h)M<k&&(k=M),M>$&&($=M);if(k===$){const M=Math.abs(k)>0?Math.abs(k)*.01:1;return[k-M,$+M]}return[k,$]},[a,h]);if(t<=0||n<=0||h.length<2)return r.jsx("svg",{width:Math.max(0,t),height:Math.max(0,n),role:"img","aria-label":l,style:{display:"block"},children:r.jsx("title",{children:l})});const f=i/2,b=h.map((k,$)=>$),x=de(0,h.length-1,0,t),v=de(w[0],w[1],n-f,f),_=Ct(b,h,x,v),S=`${_} L ${t},${n} L 0,${n} Z`,R=u&&w[0]<=0&&w[1]>=0,I=R?v(0):null;return r.jsxs("svg",{width:t,height:n,role:"img","aria-label":l,style:{display:"block"},children:[r.jsx("title",{children:l}),c&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:m,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:o,stopOpacity:"0.25"}),r.jsx("stop",{offset:"100%",stopColor:o,stopOpacity:"0.02"})]})}),R&&I!==null&&r.jsx("line",{x1:0,y1:I,x2:t,y2:I,stroke:"var(--color-border-subtle)",strokeWidth:1}),c&&r.jsx("path",{d:S,fill:`url(#${m})`,stroke:"none"}),r.jsx("path",{d:_,stroke:o,strokeWidth:i,fill:"none",strokeLinejoin:"round",strokeLinecap:"round"})]})}const je=240,Bt=8;function Dt(e,t){if(e<=0||t<2)return!1;const n=t*je+(t-1)*Bt;return e>=n}function dr({tabs:e,activeId:t,onChange:n,expandWhenRoomy:o=!1,"aria-label":i,"aria-labelledby":a,className:u}){const c=p.useId(),l=p.useMemo(()=>e.map((s,y)=>({...s,id:s.id??`tab-${y}`})),[e]),h=t!==void 0,[m,w]=p.useState(()=>t??l[0]?.id??""),f=h?t:m,b=l.find(s=>s.id===f),x=b&&!b.disabled?b:l.find(s=>!s.disabled)??b??l[0],v=p.useCallback(s=>{h||w(s),n?.(s)},[h,n]),_=p.useMemo(()=>l.filter(s=>!s.disabled),[l]),{ref:S,size:R}=He({w:0,h:0}),I=o&&Dt(R.w,_.length),k=p.useRef(new Map),$=p.useRef(null),M=p.useRef(null),[C,E]=p.useState(!1),[H,T]=p.useState(null),N=p.useCallback(s=>{$.current=s,T(s)},[]),W=wt(H),[B,D]=p.useState(null);p.useLayoutEffect(()=>{const s=$.current;if(!s)return;const y=()=>{E(O=>{O||(M.current=s.scrollWidth);const z=M.current;return z==null?!1:z>s.clientWidth})};y();const j=new ResizeObserver(y);return j.observe(s),()=>j.disconnect()},[I,l.length]),p.useLayoutEffect(()=>{const s=$.current,y=x?k.current.get(x.id):void 0;if(!s||!y){D(null);return}const j=()=>{const z=k.current.get(x?.id??"");z&&D(G=>G&&G.left===z.offsetLeft&&G.width===z.offsetWidth?G:{left:z.offsetLeft,width:z.offsetWidth})};j();const O=new ResizeObserver(j);return O.observe(s),O.observe(y),()=>O.disconnect()},[x?.id,l.length,I]);const g=p.useCallback((s,y)=>{const j=l.length;for(let O=1;O<=j;O++){const z=l[((s+y*O)%j+j)%j];if(!(!z||z.disabled)){v(z.id),k.current.get(z.id)?.focus();return}}},[l,v]),A=p.useCallback(s=>{const y=l.findIndex(j=>j.id===x?.id);if(!(y<0))switch(s.key){case"ArrowRight":case"ArrowDown":s.preventDefault(),g(y,1);break;case"ArrowLeft":case"ArrowUp":s.preventDefault(),g(y,-1);break;case"Home":s.preventDefault(),g(-1,1);break;case"End":s.preventDefault(),g(l.length,-1);break}},[l,x?.id,g]);return I?r.jsx(ue,{ref:S,"data-tabs-root":"",className:u,children:r.jsx(Ne,{minColWidth:`${je}px`,align:"start",gap:"related-comfortable",children:_.map(s=>r.jsxs(Ie,{children:[r.jsxs(Te,{as:"h3",$rule:!0,children:[s.label,s.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(pe,{"aria-hidden":"true"}),r.jsx(We,{children:", needs attention"})]})]}),s.content]},s.id))})}):r.jsxs(ue,{ref:S,"data-tabs-root":"",className:u,children:[r.jsxs(Pt,{children:[r.jsx(Lt,{ref:N,children:r.jsxs(Ht,{role:"tablist","aria-label":i,"aria-labelledby":a,children:[B&&r.jsx(Nt,{"aria-hidden":"true",style:{left:B.left,width:B.width}}),l.map(s=>{const y=s.id===x?.id;return r.jsxs(Wt,{ref:j=>{j?k.current.set(s.id,j):k.current.delete(s.id)},role:"tab",type:"button",id:`${c}${s.id}-tab`,"aria-selected":y,"aria-controls":`${c}${s.id}-panel`,"aria-describedby":s.indicator?`${c}${s.id}-attention`:void 0,tabIndex:y?0:-1,disabled:s.disabled,$active:y,onClick:()=>v(s.id),onKeyDown:A,$compact:C,children:[s.label,s.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(pe,{"aria-hidden":"true"}),r.jsx("span",{id:`${c}${s.id}-attention`,hidden:!0,children:"Needs attention"})]})]},s.id)})]})}),r.jsx(ae,{$position:"left",$visible:W.left}),r.jsx(ae,{$position:"right",$visible:W.right})]}),x&&r.jsx(Gt,{role:"tabpanel",id:`${c}${x.id}-panel`,"aria-labelledby":`${c}${x.id}-tab`,children:x.content})]})}const ue=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-tabs-panel);
  /* Fills the panel and constrains children, so a flex:1 tab body can scroll. */
  flex: 1;
  min-height: 0;
`,Pt=d.div`
  position: relative;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Lt=d.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  overflow-y: hidden;
  /* Native scrollbar hidden: the edge glows show scroll state. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,Ht=d.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  gap: var(--gap-tab);
  background: var(--color-surface-sunken);
  border-radius: var(--radius-pill);
  padding: var(--inset-tab-track);
  flex-wrap: nowrap;
`,Nt=d.span`
  position: absolute;
  top: var(--inset-tab-track);
  bottom: var(--inset-tab-track);
  border-radius: var(--radius-pill);
  background: var(--color-accent-bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  transition:
    left var(--duration-base) var(--ease-standard),
    width var(--duration-base) var(--ease-standard);

  /* With motion damped the blob simply appears on the new tab. */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,pe=d.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-left: var(--gap-trailing-mark);
  vertical-align: middle;
  border-radius: var(--radius-circle);
  background: var(--color-warn-mark);
`,Wt=d.button`
  /* Transparent: the blob behind it is the selected background. */
  background: transparent;
  border: none;
  /* Lifts the label over the blob by DOM order, no z-index involved. */
  position: relative;
  /* Tabs never shrink: a short label losing its word is worse than a long one continuing offscreen behind the overflow glow. */
  flex: 0 0 auto;
  white-space: nowrap;
  /* Inverts on the accent blob, where primary text fails contrast. */
  color: ${({$active:e})=>e?"var(--color-text-inverse)":"var(--color-text-faint)"};
  cursor: pointer;
  font-size: var(--font-size-compact);
  font-weight: 700;
  text-transform: uppercase;
  border-radius: var(--radius-pill);
  /* Compact gives back the inset and tracking, never the label. Plain concatenation: a nested template literal breaks the parse. */
  ${({$compact:e})=>e?"padding: var(--inset-tab-compact);letter-spacing: 0.04em;":"padding: var(--inset-control);letter-spacing: 0.12em;"}
  /* The label gives under the press, the only feedback a tab gets on touch. */
  transition: transform var(--duration-fast) var(--ease-standard);

  &:active:not(:disabled) {
    transform: scale(0.96);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:active:not(:disabled) {
      transform: none;
    }
  }

  /* Only an unselected tab takes the primary text colour under hover: on the accent blob that colour measures 1.2:1, so the selected tab keeps its inverse label. */
  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-selected="true"]) {
      color: var(--color-text-primary);
    }
  }

  /* Present but inert: legible enough to say what is missing, and the cursor says it will not respond. */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  ${Ge}

  @media (pointer: coarse) {
    min-height: 44px;
    /* Compact still applies on touch: a tab scrolled half out of view is a smaller target, not a bigger one. */
    ${({$compact:e})=>e?"padding: var(--inset-tab-compact-touch);":"padding: var(--inset-control-touch);"}
  }
`,Gt=d.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,ur=p.forwardRef(function({pressed:t=!1,tone:n="go",size:o="md",type:i="button","aria-pressed":a,...u},c){return r.jsx(Ke,{ref:c,type:i,tone:t?n:void 0,size:o,pressed:t,"aria-pressed":a??t,...u})});export{Qe as C,rr as D,nr as F,ae as I,or as M,sr as R,cr as S,je as T,ar as a,lr as b,tr as c,Jt as d,er as e,dr as f,ur as g,ir as h,Xe as i,Ye as j,qe as k,ne as m,Dt as s,wt as u};
