import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import d,{css as O,keyframes as pe}from"./ext-styled-components-Br73TgY3.js";import{X as je,t as _e,m as ee,k as Se,i as Me,d as H,T as ze,S as Re,j as Ie}from"./contributionsRead-Qt5ZQ4qn.js";import{r as p}from"./ext-react-RRA14VTW.js";import{E as fe,ai as he,bl as Te,av as Ae,aP as Ee,ab as P,bg as Oe,ba as Ce,bs as te,bt as Fe,af as De,ax as Be,bu as Pe,a2 as He,aw as Le,_ as Ne,aa as We,e as Ge}from"./ModalSaveBar-CZ4CBFYh.js";import{cw as re,l as Ke,b2 as K}from"./view-clock-formula-Cg-VOQfI.js";import"./ksp-enum-names-BDCIW13p.js";import"./screen-DjT1Ov-x.js";function Ue(e,t){if(!t)return!0;const n=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(n)||e.key.toLowerCase().includes(n)}function Ve(e,t,n=Ue){return e.filter(o=>n(o,t))}function qe(e,t="Other"){const n=new Map;for(const o of e){const i=o.group??t;let a=n.get(i);a||(a=[],n.set(i,a)),a.push(o)}return[...n.entries()].sort(([o],[i])=>o.localeCompare(i))}function Xe(e){return e.flatMap(([,t])=>t)}function ne(e,t,n){return n===0?-1:Math.max(0,Math.min(e+t,n-1))}function Qe({id:e,groups:t,flatOptions:n,activeIndex:o,selectedKey:i,getOptionId:a,onHoverIndex:u,onSelectKey:c,renderItem:l,emptyLabel:v="No matches","aria-label":m,placement:w="below"}){return r.jsx(Ye,{role:"listbox",id:e,"aria-label":m,$placement:w,onMouseDown:f=>f.preventDefault(),children:n.length===0?r.jsx(fe,{layout:"fill",children:v}):t.map(([f,g],b)=>r.jsxs(Je,{role:"group","aria-labelledby":`${e}-group-${b}`,children:[r.jsx(Ze,{id:`${e}-group-${b}`,"aria-hidden":"true",children:f}),g.map(x=>{const j=n.indexOf(x),_=j===o;return r.jsx(tt,{id:a(x.key),role:"option","aria-selected":_,$active:_,$selected:x.key===i,onPointerDown:S=>{S.preventDefault(),c(x.key)},onMouseEnter:()=>u(j),children:l?l(x):x.label??x.key},x.key)})]},f))})}const Ye=d.div`
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
`,Je=d.div``,Ze=d.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-raised);
`;function et(e,t){return e?"background: var(--color-surface-panel);":t?je("go"):"background: transparent;"}const tt=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-menu-item);
  cursor: pointer;
  ${({$active:e,$selected:t})=>et(e,t)}
  /* Focus stays on the input, so the highlighted option carries the focus colour as an inset bar. */
  box-shadow: ${({$active:e})=>e?"inset 3px 0 0 var(--color-focus)":"none"};

  &:hover {
    background: var(--color-surface-panel);
  }
`;function Yt({tone:e,children:t,live:n=!1,pulse:o,...i}){const a=n?{role:"status","aria-live":"polite"}:{};return r.jsxs(rt,{"data-tone":e,...a,...i,children:[r.jsx(ot,{"data-tone":e,$pulse:o,"aria-hidden":"true"}),r.jsx(at,{children:t})]})}const rt=d.div`
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

  border-color: ${({"data-tone":e})=>_e(e)};
`,nt=pe`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,ot=d.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  flex-shrink: 0;

  background: ${({"data-tone":e})=>ee[e]};

  /* A looping pulse needs its own reduced-motion guard; the 1s/2s periods encode connection state. */
  ${({$pulse:e})=>e?O`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${nt} ${e==="fast"?"1s":"2s"}
              var(--ease-emphasis) infinite;
          }
        `:""}
`,at=d.span`
  color: var(--color-text-primary);
  line-height: var(--line-height-body);
`;function Jt({checked:e,onChange:t,label:n,disabled:o,id:i,"aria-label":a}){return r.jsxs(it,{$disabled:o,children:[r.jsx(st,{type:"checkbox",id:i,checked:e,disabled:o,onChange:u=>t(u.target.checked),"aria-label":n?void 0:a}),r.jsx(me,{$checked:e,$disabled:o,children:r.jsx(lt,{$checked:e,$disabled:o})}),n&&r.jsx(dt,{children:n})]})}const it=d.label`
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
`,me=d.div`
  width: 28px;
  height: 14px;
  /* --radius-pill keeps the stadium shape through a height change. */
  border-radius: var(--radius-pill);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-surface-raised)":e?"var(--color-go-mark)":"var(--color-surface-raised)"};
  border: 1px solid ${({$checked:e,$disabled:t})=>t?"var(--color-border-strong)":e?"var(--color-go-mark)":"var(--color-border-strong)"};
  position: relative;
  flex-shrink: 0;
  transition: background var(--duration-base), border-color var(--duration-base);
`,st=d.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:focus-visible + ${me} {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,lt=d.div`
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
`;function Zt({size:e=12,thickness:t=2,color:n="var(--color-accent-fg)","aria-label":o="Loading",...i}){return r.jsx(ut,{...i,role:"status","aria-label":o,$size:e,$thickness:t,$color:n})}const ct=pe`
  to { transform: rotate(360deg); }
`,ut=d.span`
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
    animation: ${ct} 700ms linear infinite;
  }
`,pt="is no longer available";function er({keys:e,value:t,onChange:n,clearable:o=!1,placeholder:i="Search...",subjectNoun:a="value",id:u,"aria-label":c}){const[l,v]=p.useState(""),[m,w]=p.useState(!1),[f,g]=p.useState(-1),b=p.useRef(null),x=p.useRef(null),j=p.useId(),_=p.useId(),S=p.useId(),E=h=>`${_}-${h}`,I=e.find(h=>h.key===t),T=t!==null&&t!==""&&I===void 0&&e.length>0,C=p.useMemo(()=>Ve(e,l),[e,l]),F=p.useMemo(()=>qe(C),[C]),A=p.useMemo(()=>Xe(F),[F]),L=p.useCallback(()=>{w(!0),v(""),g(-1)},[]),M=p.useCallback(()=>{w(!1),v(""),g(-1)},[]),N=p.useCallback(h=>{n(h),M()},[n,M]),W=h=>{if(!m){(h.key==="Enter"||h.key==="ArrowDown")&&L();return}switch(h.key){case"Escape":h.stopPropagation(),M();break;case"ArrowDown":h.preventDefault(),g(z=>ne(z,1,A.length));break;case"ArrowUp":h.preventDefault(),g(z=>ne(z,-1,A.length));break;case"Enter":{const z=l!=="",s=f>=0?A[f]:z?A[0]:void 0;s&&N(s.key);break}}};p.useEffect(()=>{if(!m)return;const h=z=>{b.current?.contains(z.target)||M()};return document.addEventListener("pointerdown",h),()=>document.removeEventListener("pointerdown",h)},[m,M]);const D=m?l:I?.label??t??"",B=m&&f>=0?A[f]:void 0;return r.jsxs(ft,{ref:b,children:[r.jsx(ht,{ref:x,id:u,"aria-label":c,value:D,placeholder:t?void 0:i,$hasValue:!!t&&!m,$retired:T&&!m,"aria-invalid":T&&!m?!0:void 0,"aria-describedby":T&&!m?S:void 0,onFocus:L,onBlur:M,onChange:h=>{v(h.target.value),g(-1)},onKeyDown:W,role:"combobox","aria-expanded":m,"aria-controls":j,"aria-autocomplete":"list","aria-activedescendant":B?E(B.key):void 0}),T&&!m&&r.jsx(gt,{id:S,children:`This ${a} ${pt}. Pick another.`}),o&&t&&!m&&r.jsx(mt,{type:"button","aria-label":`Clear ${a}`,onClick:()=>{n(null),M()},children:"×"}),m&&r.jsx(Qe,{id:j,groups:F,flatOptions:A,activeIndex:f,selectedKey:t,getOptionId:E,onHoverIndex:g,onSelectKey:N,"aria-label":c??"Data keys",renderItem:h=>r.jsxs(r.Fragment,{children:[r.jsx(bt,{children:h.label??h.key}),h.unit&&r.jsx(vt,{children:h.unit})]})})]})}const ft=d.div`
  position: relative;
`,ht=d.input`
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

  ${he}

  &::placeholder {
    color: var(--color-text-faint);
  }
`,mt=d.button`
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

  ${he}
`,gt=d.div`
  color: var(--color-nogo-text);
  font-size: var(--font-size-compact);
  margin-top: var(--gap-caption);
`,bt=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
`,vt=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  margin-left: var(--gap-trailing-mark);
`,oe={left:!1,right:!1};function xt(e){const[t,n]=p.useState(oe),o=p.useRef(oe);return p.useEffect(()=>{if(!e)return;const i=()=>{const c=e.scrollLeft>1,l=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===c&&o.current.right===l||(o.current={left:c,right:l},n(o.current))};i(),e.addEventListener("scroll",i,{passive:!0});const a=typeof ResizeObserver>"u"?null:new ResizeObserver(i);a?.observe(e);for(const c of Array.from(e.children))a?.observe(c);const u=new MutationObserver(()=>{for(const c of Array.from(e.children))a?.observe(c);i()});return u.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",i),a?.disconnect(),u.disconnect()}},[e]),t}const ae=d.div`
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
`;function tr({rows:e,segment:t="filters",emptyLabel:n="Nothing matches the filter"}){const o=Te({segment:t}),i=e.filter(a=>o.matches(a.searchText));return r.jsx(Ae,{filter:o,children:i.length>0?r.jsx(Se,{gap:"related",children:i.map(a=>r.jsx("div",{children:a.node},a.id))}):r.jsx(fe,{children:n})})}const wt="8px";function ge({percent:e,tone:t,fillColor:n,trackHeld:o=!1,fillHeld:i=!1,children:a,...u}){return r.jsxs(kt,{"data-track-held":o?"":void 0,...u,children:[e!==null&&r.jsx($t,{$tone:t,$fillColor:n,$held:i,"data-fill-held":i?"":void 0,style:{width:`${e}%`}}),o&&r.jsx(yt,{"data-track-hatch":"",style:{left:`${e??0}%`}}),a]})}const kt=d.div`
  width: 100%;
  border-radius: var(--radius-pill);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  overflow: hidden;
  /* Positioned for the fill only: this overflow rounds the fill's ends and would clip any mark drawn over it. */
  position: relative;
  height: ${wt};
`,yt=d.div`
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
`,$t=d.div`
  height: 100%;
  border-radius: var(--radius-pill);
  transition: width var(--duration-slow) var(--ease-standard);
  /* A held reading dims the fill, not the hue and not the whole bar, so a label beside it stays readable. */
  ${({$held:e})=>e?"opacity: 0.55;":""}
  background: ${({$tone:e,$fillColor:t})=>t??ee[e]};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function rr({label:e,value:t,capacity:n,format:o,tone:i="neutral",fillColor:a,valueLabel:u,valueLabelNode:c,layout:l="stacked",hideLabel:v=!1,statement:m=!1,...w}){const f=ie(t),g=ie(n),b=jt(f.figure,n===void 0?void 0:g.figure);if(b===null||!Number.isFinite(b))return v?null:r.jsx(ke,{layout:l,label:e,display:r.jsx(Me,{}),...w,children:r.jsx(ge,{percent:null,tone:i,"aria-hidden":"true"})});const x=Math.min(1,Math.max(0,b)),j={label:e,layout:l,hideLabel:v,statement:m,pct:Math.round(x*100),tone:i,fillColor:a,trackHeld:g.reading?.state==="held"&&!re(g.figure),fillHeld:f.reading?.state==="held"&&!re(f.figure),...w},_=J(1,Y(g.reading,g.figure,g.figure));if(n!==void 0)return r.jsx(Ee,{of:f.figure?.unit,format:o,children:r.jsx(St,{...j,value:t,capacity:n,shown:f,held:g,endBounds:_,at:x,valueLabel:u,valueLabelNode:c})});const S=J(x,Y(f.reading,f.figure,null));return r.jsx(we,{...j,bounds:S,endBounds:_,display:c??(u===void 0?r.jsx(P,{value:t,format:o}):r.jsx(ve,{caption:q(t),children:u})),spoken:xe(u===void 0?H(f.figure,{format:o}):be(u,q(t)),S,_)})}function q(e){const{held:t,caption:n}=De(e??null);return t?n:null}function be(e,t){return t===null?e:`${e}, ${t}`}function ve({caption:e,children:t}){return e===null?r.jsx(r.Fragment,{children:t}):r.jsx(Be,{caption:e,children:t})}function ie(e){return typeof e!="object"||e===null||!("state"in e)?{figure:e??null,reading:null}:{figure:e.value??null,reading:e}}function jt(e,t){return e===null||t===null||t!==void 0&&!t.isPositive()?null:(t===void 0?e:e.dividedBy(t)).magnitude}function Y(e,t,n){if(e===null||e.reckoning.status!=="available"||t===null)return null;const o=Ke(e.reckoning.band,t.unit);if(!o)return null;const i={loSaid:o.lo,hiSaid:o.hi,kind:o.kind};return n===null?{lo:K(o.lo,0),hi:K(o.hi,0),...i}:n.isPositive()?{lo:K(o.lo.dividedBy(n),0),hi:K(o.hi.dividedBy(n),0),...i}:null}function J(e,t){return t===null?null:Oe(e,[t.lo,t.hi],Ce())?t:null}function xe(e,t,n,o){const i=(u,c)=>{const l=H(u.loSaid,o),v=H(u.hiSaid,o);return`${c}with bands at ${l} and ${v}`},a=[t===null?null:i(t,""),n===null?null:i(n,"capacity ")].filter(u=>u!==null);return a.length===0?e:`${e}, ${a.join(", ")}`}function _t(e){if(!Number.isFinite(e))return 0;const t=Math.min(1,Math.max(0,e));return Math.round(t*1e4)/100}function U(e){const t=_t(e),n=t<=0?0:t>=100?-2:-1;return{style:{left:`${t}%`,transform:`translateX(${n}px)`}}}function we({label:e,layout:t,hideLabel:n,statement:o,pct:i,tone:a,fillColor:u,trackHeld:c,fillHeld:l,display:v,spoken:m,bounds:w,endBounds:f,...g}){return r.jsxs(ke,{layout:t,label:e,display:v,hideHead:n,statement:o,...g,children:[r.jsx(ge,{percent:i,tone:a,fillColor:u,trackHeld:c,fillHeld:l,role:"meter","aria-label":e,"aria-valuenow":i,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":m}),(w!==null||f!==null)&&r.jsxs(At,{"aria-hidden":"true",children:[w!==null&&r.jsxs(r.Fragment,{children:[r.jsx(V,{"data-bound":"lo",...U(w.lo)}),r.jsx(V,{"data-bound":"hi",...U(w.hi)})]}),f!==null&&r.jsxs(r.Fragment,{children:[r.jsx(V,{"data-end-bound":"lo",...U(f.lo)}),r.jsx(V,{"data-end-bound":"hi",...U(f.hi)})]})]})]})}function ke({layout:e,label:t,display:n,hideHead:o=!1,statement:i=!1,children:a,...u}){return o?r.jsxs(X,{$row:!1,...u,children:[r.jsx(Q,{$row:!1,children:a}),i&&r.jsx(Tt,{"data-meter-part":"statement",children:n})]}):e==="row"?r.jsxs(X,{$row:!0,"data-meter-row":"",...u,children:[r.jsx(le,{"data-meter-part":"label",children:t}),r.jsx(Q,{$row:!0,"data-meter-part":"bar",children:a}),r.jsx(de,{$row:!0,"data-meter-part":"figure",children:n})]}):r.jsxs(X,{$row:!1,...u,children:[r.jsxs(It,{children:[r.jsx(le,{children:t}),r.jsx(de,{$row:!1,children:n})]}),r.jsx(Q,{$row:!1,children:a})]})}function St({value:e,capacity:t,shown:n,held:o,at:i,valueLabel:a,valueLabelNode:u,...c}){const l=a===void 0,v=te(l?n.figure:void 0),m=te(l?o.figure:void 0),w=v??m??{},f=q(e)??q(t),g=u??(a!==void 0?r.jsx(ve,{caption:f,children:a}):c.layout==="row"?r.jsxs(Et,{$marked:c.fillHeld||c.trackHeld,children:[r.jsx(P,{value:e,hideUnitInGroup:!0})," / ",r.jsx(P,{value:t}),(c.fillHeld||c.trackHeld)&&r.jsx(Fe,{"aria-hidden":"true","data-held-mark":""})]}):r.jsxs(r.Fragment,{children:[r.jsx(P,{value:e})," / ",r.jsx(P,{value:t})]})),b=a===void 0?`${H(n.figure,w)} of ${H(o.figure,w)}`:be(a,f),x=J(i,Y(n.reading,n.figure,o.figure));return r.jsx(we,{...c,display:g,spoken:xe(b,x,c.endBounds,w),bounds:x})}const Z=48;function nr({children:e,...t}){const n=p.useRef(null);return p.useLayoutEffect(()=>{const o=n.current;if(!o||typeof ResizeObserver>"u")return;const i=()=>{o.clientWidth!==0&&o.toggleAttribute("data-figures-below",!Mt(o))};let a=0;const u=()=>{cancelAnimationFrame(a),a=requestAnimationFrame(i)},c=new ResizeObserver(u),l=()=>{c.disconnect(),c.observe(o);for(const m of ye(o))c.observe(m)},v=new MutationObserver(l);return v.observe(o,{childList:!0,subtree:!0}),l(),i(),()=>{cancelAnimationFrame(a),c.disconnect(),v.disconnect()}},[]),r.jsx(Rt,{ref:n,...t,children:e})}const or=d.div.attrs({"data-meter-row-group":""})`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  row-gap: var(--gap-meter-rows);
  min-width: 0;

  & > * {
    grid-column: 1 / -1;
    min-width: 0;
  }
`;function ye(e){return Array.from(e.querySelectorAll(':scope > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row] > [data-meter-part="figure"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="figure"]'))}function Mt(e){const t=ye(e);if(t.length===0)return!0;let n=0,o=0;for(const l of t)l.dataset.meterPart==="label"?n=Math.max(n,zt(l)):o=Math.max(o,l.scrollWidth);const i=getComputedStyle(e),a=l=>Number.parseFloat(l)||0,u=a(i.columnGap),c=e.clientWidth-a(i.paddingLeft)-a(i.paddingRight);return n+u+Z+u+o<=c}function zt(e){const t=e.style.whiteSpace;e.style.whiteSpace="nowrap";const n=e.scrollWidth;return e.style.whiteSpace=t,n}const Rt=d.div`
  display: grid;
  grid-template-columns:
    minmax(min-content, max-content)
    minmax(${Z}px, 1fr)
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
      minmax(${Z}px, 1fr);
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
`,se="1px",X=d.div`
  display: flex;
  width: 100%;
  min-width: 0;
  ${({$row:e})=>e?O`
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          column-gap: var(--gap-meter-columns);
          row-gap: var(--gap-caption);
        `:O`
          flex-direction: column;
          gap: var(--gap-caption);
        `}
`,It=d.div`
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
`,de=d.span`
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
`,Tt=d.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,At=d.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,Q=d.div`
  position: relative;
  ${({$row:e})=>e?O`
          flex: 1 1 28px;
          min-width: 28px;
        `:""}
`,Et=d(Pe)`
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
`,Ot=d.div`
  display: ${({$size:e})=>e==="hero"?"flex":"inline-flex"};
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({$tone:e})=>ze[e]};
  ${({$size:e})=>e==="hero"?O`
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
        `:O`
          align-items: baseline;
          gap: var(--gap-value-tag);
          /* Display tier: the type scale stops at lg, so this stays literal. */
          font-size: 22px;
        `}
`;function ar({size:e="inline",tone:t="neutral",...n}){return r.jsx(Ot,{$size:e,$tone:t,...n})}const ir=d.span`
  font-size: var(--font-size-caption);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-transform: uppercase;
`,$e=240,Ct=8;function Ft(e,t){if(e<=0||t<2)return!1;const n=t*$e+(t-1)*Ct;return e>=n}function sr({tabs:e,activeId:t,onChange:n,expandWhenRoomy:o=!1,"aria-label":i,"aria-labelledby":a,className:u}){const c=p.useId(),l=p.useMemo(()=>e.map((s,k)=>({...s,id:s.id??`tab-${k}`})),[e]),v=t!==void 0,[m,w]=p.useState(()=>t??l[0]?.id??""),f=v?t:m,g=l.find(s=>s.id===f),b=g&&!g.disabled?g:l.find(s=>!s.disabled)??g??l[0],x=p.useCallback(s=>{v||w(s),n?.(s)},[v,n]),j=p.useMemo(()=>l.filter(s=>!s.disabled),[l]),{ref:_,size:S}=He({w:0,h:0}),E=o&&Ft(S.w,j.length),I=p.useRef(new Map),T=p.useRef(null),C=p.useRef(null),[F,A]=p.useState(!1),[L,M]=p.useState(null),N=p.useCallback(s=>{T.current=s,M(s)},[]),W=xt(L),[D,B]=p.useState(null);p.useLayoutEffect(()=>{const s=T.current;if(!s)return;const k=()=>{A(R=>{R||(C.current=s.scrollWidth);const $=C.current;return $==null?!1:$>s.clientWidth})};k();const y=new ResizeObserver(k);return y.observe(s),()=>y.disconnect()},[E,l.length]),p.useLayoutEffect(()=>{const s=T.current,k=b?I.current.get(b.id):void 0;if(!s||!k){B(null);return}const y=()=>{const $=I.current.get(b?.id??"");$&&B(G=>G&&G.left===$.offsetLeft&&G.width===$.offsetWidth?G:{left:$.offsetLeft,width:$.offsetWidth})};y();const R=new ResizeObserver(y);return R.observe(s),R.observe(k),()=>R.disconnect()},[b?.id,l.length,E]);const h=p.useCallback((s,k)=>{const y=l.length;for(let R=1;R<=y;R++){const $=l[((s+k*R)%y+y)%y];if(!(!$||$.disabled)){x($.id),I.current.get($.id)?.focus();return}}},[l,x]),z=p.useCallback(s=>{const k=l.findIndex(y=>y.id===b?.id);if(!(k<0))switch(s.key){case"ArrowRight":case"ArrowDown":s.preventDefault(),h(k,1);break;case"ArrowLeft":case"ArrowUp":s.preventDefault(),h(k,-1);break;case"Home":s.preventDefault(),h(-1,1);break;case"End":s.preventDefault(),h(l.length,-1);break}},[l,b?.id,h]);return E?r.jsx(ce,{ref:_,"data-tabs-root":"",className:u,children:r.jsx(Le,{minColWidth:`${$e}px`,align:"start",gap:"related-comfortable",children:j.map(s=>r.jsxs(Re,{children:[r.jsxs(Ie,{as:"h3",$rule:!0,children:[s.label,s.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(ue,{"aria-hidden":"true"}),r.jsx(Ne,{children:", needs attention"})]})]}),s.content]},s.id))})}):r.jsxs(ce,{ref:_,"data-tabs-root":"",className:u,children:[r.jsxs(Dt,{children:[r.jsx(Bt,{ref:N,children:r.jsxs(Pt,{role:"tablist","aria-label":i,"aria-labelledby":a,children:[D&&r.jsx(Ht,{"aria-hidden":"true",style:{left:D.left,width:D.width}}),l.map(s=>{const k=s.id===b?.id;return r.jsxs(Lt,{ref:y=>{y?I.current.set(s.id,y):I.current.delete(s.id)},role:"tab",type:"button",id:`${c}${s.id}-tab`,"aria-selected":k,"aria-controls":`${c}${s.id}-panel`,"aria-describedby":s.indicator?`${c}${s.id}-attention`:void 0,tabIndex:k?0:-1,disabled:s.disabled,$active:k,onClick:()=>x(s.id),onKeyDown:z,$compact:F,children:[s.label,s.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(ue,{"aria-hidden":"true"}),r.jsx("span",{id:`${c}${s.id}-attention`,hidden:!0,children:"Needs attention"})]})]},s.id)})]})}),r.jsx(ae,{$position:"left",$visible:W.left}),r.jsx(ae,{$position:"right",$visible:W.right})]}),b&&r.jsx(Nt,{role:"tabpanel",id:`${c}${b.id}-panel`,"aria-labelledby":`${c}${b.id}-tab`,children:b.content})]})}const ce=d.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-tabs-panel);
  /* Fills the panel and constrains children, so a flex:1 tab body can scroll. */
  flex: 1;
  min-height: 0;
`,Dt=d.div`
  position: relative;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Bt=d.div`
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
`,Pt=d.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  gap: var(--gap-tab);
  background: var(--color-surface-sunken);
  border-radius: var(--radius-pill);
  padding: var(--inset-tab-track);
  flex-wrap: nowrap;
`,Ht=d.span`
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
`,ue=d.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-left: var(--gap-trailing-mark);
  vertical-align: middle;
  border-radius: var(--radius-circle);
  background: var(--color-warn-mark);
`,Lt=d.button`
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

  ${We}

  @media (pointer: coarse) {
    min-height: 44px;
    /* Compact still applies on touch: a tab scrolled half out of view is a smaller target, not a bigger one. */
    ${({$compact:e})=>e?"padding: var(--inset-tab-compact-touch);":"padding: var(--inset-control-touch);"}
  }
`,Nt=d.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,lr=p.forwardRef(function({pressed:t=!1,tone:n="go",size:o="md",type:i="button","aria-pressed":a,...u},c){return r.jsx(Ge,{ref:c,type:i,tone:t?n:void 0,size:o,pressed:t,"aria-pressed":a??t,...u})});export{Qe as C,er as D,tr as F,ae as I,rr as M,ar as R,Zt as S,$e as T,nr as a,ir as b,Yt as c,Jt as d,sr as e,lr as f,or as g,Ve as h,Xe as i,qe as j,ne as m,Ft as s,xt as u};
