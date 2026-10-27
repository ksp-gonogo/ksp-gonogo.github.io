import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import u,{css as J,keyframes as Oe}from"./ext-styled-components-DAuodqsN.js";import{X as et,H as tt,T as he,w as rt,N as ve,G as Z,j as nt,h as ot,d as at,S as it,i as st}from"./contributionsRead-ClHDEX59.js";import{r as f}from"./ext-react-C0MU9AHG.js";import{E as Be,af as De,ac as Le,bt as lt,bl as Pe,be as Ne,bz as ct,aB as dt,bA as we,bk as ye,ag as ut,bq as ft,at as pt,aS as ht,ab as te,bB as ke,bC as mt,ae as xt,bD as gt,a3 as bt,av as vt,$ as wt,bE as yt,e as kt}from"./ModalSaveBar-BdD89CDq.js";import{l as He,cJ as $e,b9 as ne}from"./view-clock-formula-DWdx9uIK.js";import"./ksp-enum-names-BaUJpb7I.js";import"./screen-C-dJXqGO.js";function We(e,t){if(!t)return!0;const n=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(n)||e.key.toLowerCase().includes(n)}function $t(e,t,n=We){return e.filter(o=>n(o,t))}function jt(e,t="Other"){const n=new Map;for(const o of e){const i=o.group??t;let a=n.get(i);a||(a=[],n.set(i,a)),a.push(o)}return[...n.entries()].sort(([o],[i])=>o.localeCompare(i))}function St(e){return e.flatMap(([,t])=>t)}function je(e,t,n){return n===0?-1:Math.max(0,Math.min(e+t,n-1))}function _t({id:e,groups:t,flatOptions:n,activeIndex:o,selectedKey:i,getOptionId:a,onHoverIndex:c,onSelectKey:d,renderItem:l,emptyLabel:p="No matches","aria-label":x,placement:w="below"}){return r.jsx(Mt,{role:"listbox",id:e,"aria-label":x,$placement:w,onMouseDown:h=>h.preventDefault(),children:n.length===0?r.jsx(Be,{layout:"fill",children:p}):t.map(([h,g],v)=>r.jsxs(Tt,{role:"group","aria-labelledby":`${e}-group-${v}`,children:[r.jsx(It,{id:`${e}-group-${v}`,"aria-hidden":"true",children:h}),g.map(y=>{const T=n.indexOf(y),z=T===o;return r.jsx(At,{id:a(y.key),role:"option","aria-selected":z,$active:z,$selected:y.key===i,onPointerDown:C=>{C.preventDefault(),d(y.key)},onMouseEnter:()=>c(T),children:l?l(y):y.label??y.key},y.key)})]},h))})}const Mt=u.div`
  position: absolute;
  ${({$placement:e})=>e==="above"?"bottom: calc(100% + 2px);":"top: calc(100% + 2px);"}
  left: 0;
  right: 0;
  min-width: 16rem;
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  max-height: 280px;
  overflow-y: auto;
  z-index: var(--z-dropdown);
`,Tt=u.div``,It=u.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-raised);
`;function zt(e,t){return e?"background: var(--color-surface-panel);":t?et("go"):"background: transparent;"}const At=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-menu-item);
  cursor: pointer;
  ${({$active:e,$selected:t})=>zt(e,t)}
  /* Focus stays on the input, so the highlighted option carries the focus colour as an inset bar. */
  box-shadow: ${({$active:e})=>e?"inset 3px 0 0 var(--color-focus)":"none"};

  &:hover {
    background: var(--color-surface-panel);
  }

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`;function Cr({tone:e,children:t,live:n=!1,pulse:o,...i}){const a=n?{role:"status","aria-live":"polite"}:{};return r.jsxs(Rt,{"data-tone":e,...a,...i,children:[r.jsx(Et,{"data-tone":e,$pulse:o,"aria-hidden":"true"}),r.jsx(Ct,{children:t})]})}const Rt=u.div`
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

  border-color: ${({"data-tone":e})=>tt(e)};
`,Ft=Oe`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,Et=u.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  flex-shrink: 0;

  background: ${({"data-tone":e})=>he[e]};

  /* A looping pulse needs its own reduced-motion guard; the 1s/2s periods encode connection state. */
  ${({$pulse:e})=>e?J`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${Ft} ${e==="fast"?"1s":"2s"}
              var(--ease-emphasis) infinite;
          }
        `:""}
`,Ct=u.span`
  color: var(--color-text-primary);
  line-height: var(--line-height-body);
`;function Or({checked:e,onChange:t,label:n,disabled:o,id:i,"aria-label":a}){return r.jsxs(Ot,{$disabled:o,children:[r.jsx(Bt,{type:"checkbox",id:i,checked:e,disabled:o,onChange:c=>t(c.target.checked),"aria-label":n?void 0:a}),r.jsx(Ge,{$checked:e,$disabled:o,children:r.jsx(Dt,{$checked:e,$disabled:o})}),n&&r.jsx(Lt,{children:n})]})}const Ot=u.label`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-glyph-control);
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  user-select: none;
  opacity: ${({$disabled:e})=>e?.5:1};

  @media (pointer: coarse) {
    /* Expand tap target to 44px tall without enlarging the visual track. */
    min-height: var(--touch-target);
    padding: var(--inset-switch-touch);
  }
`,Ge=u.div`
  width: 28px;
  height: 14px;
  /* --radius-pill keeps the stadium shape through a height change. */
  border-radius: var(--radius-pill);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-surface-raised)":e?"var(--color-go-mark)":"var(--color-surface-raised)"};
  border: 1px solid ${({$checked:e,$disabled:t})=>t?"var(--color-border-strong)":e?"var(--color-go-mark)":"var(--color-border-strong)"};
  position: relative;
  flex-shrink: 0;
  transition: background var(--duration-base), border-color var(--duration-base);
`,Bt=u.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:focus-visible + ${Ge} {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Dt=u.div`
  position: absolute;
  /* Measured inside the border: the track is border-box, so its 1px border leaves a 26 by 12 box, and 2px on every side centres the 8px thumb at either end. */
  top: 2px;
  left: ${({$checked:e})=>e?"16px":"2px"};
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-text-faint)":e?"var(--color-accent-fg)":"var(--color-text-faint)"};
  transition: left var(--duration-base), background var(--duration-base);
`,Lt=u.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;function Br({size:e=12,thickness:t=2,color:n="var(--color-accent-fg)","aria-label":o="Loading",...i}){return r.jsx(Nt,{...i,role:"status","aria-label":o,$size:e,$thickness:t,$color:n})}const Pt=Oe`
  to { transform: rotate(360deg); }
`,Nt=u.span`
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
    animation: ${Pt} 700ms linear infinite;
  }
`,Ht="is no longer available";function Dr({keys:e,value:t,onChange:n,clearable:o=!1,placeholder:i="Search...",subjectNoun:a="value",id:c,"aria-label":d}){const[l,p]=f.useState(""),[x,w]=f.useState(!1),[h,g]=f.useState(-1),v=f.useRef(null),y=f.useRef(null),T=f.useId(),z=f.useId(),C=f.useId(),A=m=>`${z}-${m}`,j=e.find(m=>m.key===t),_=t!==null&&t!==""&&j===void 0&&e.length>0,R=e.some(m=>m.common),G=f.useMemo(()=>$t(l===""&&R?e.filter(m=>m.common):e,l,(m,s)=>We(m,s)||(m.summary?.toLowerCase().includes(s.toLowerCase())??!1)),[e,l,R]),H=f.useMemo(()=>jt(G),[G]),I=f.useMemo(()=>St(H),[H]),V=f.useCallback(()=>{w(!0),p(""),g(-1)},[]),F=f.useCallback(()=>{w(!1),p(""),g(-1)},[]),q=f.useCallback(m=>{n(m),F()},[n,F]),W=m=>{if(!x){(m.key==="Enter"||m.key==="ArrowDown")&&V();return}switch(m.key){case"Escape":m.stopPropagation(),F();break;case"ArrowDown":m.preventDefault(),g(s=>je(s,1,I.length));break;case"ArrowUp":m.preventDefault(),g(s=>je(s,-1,I.length));break;case"Enter":{const s=l!=="",$=h>=0?I[h]:s?I[0]:void 0;$&&q($.key);break}}};f.useEffect(()=>{if(!x)return;const m=s=>{v.current?.contains(s.target)||F()};return document.addEventListener("pointerdown",m),()=>document.removeEventListener("pointerdown",m)},[x,F]);const Y=x?l:j?.summary??j?.label??t??"",D=x&&h>=0?I[h]:void 0;return r.jsxs(Wt,{ref:v,children:[r.jsx(Gt,{ref:y,id:c,"aria-label":d,value:Y,placeholder:x&&R?`Search all ${e.length} fields...`:t?void 0:i,$hasValue:!!t&&!x,$retired:_&&!x,"aria-invalid":_&&!x?!0:void 0,"aria-describedby":_&&!x?C:void 0,onFocus:V,onBlur:F,onChange:m=>{p(m.target.value),g(-1)},onKeyDown:W,role:"combobox","aria-expanded":x,"aria-controls":T,"aria-autocomplete":"list","aria-activedescendant":D?A(D.key):void 0}),_&&!x&&r.jsx(Kt,{id:C,children:`This ${a} ${Ht}. Pick another.`}),o&&t&&!x&&r.jsx(Ut,{type:"button","aria-label":`Clear ${a}`,onClick:()=>{n(null),F()},children:"×"}),x&&r.jsx(_t,{id:T,groups:H,flatOptions:I,activeIndex:h,selectedKey:t,getOptionId:A,onHoverIndex:g,onSelectKey:q,"aria-label":d??"Data keys",renderItem:m=>r.jsxs(r.Fragment,{children:[r.jsx(Vt,{children:m.label??m.key}),m.unit&&r.jsx(qt,{children:m.unit})]})})]})}const Wt=u.div`
  position: relative;
  flex-grow: 1;
  min-width: 0;
`,Gt=u.input`
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

  ${De}

  &::placeholder {
    color: var(--color-text-faint);
  }

  @media (pointer: coarse) {
    min-height: var(--touch-target);
    padding: var(--inset-field-touch);
    /* Under a coarse pointer the large step is 17px, above the 16px at which iOS Safari zooms on focus. */
    font-size: var(--font-size-lg);
  }
`,Ut=u.button`
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

  ${De}

  @media (pointer: coarse) {
    min-width: var(--touch-target);
    min-height: var(--touch-target);
    right: 0;
  }
`,Kt=u.div`
  color: var(--color-nogo-text);
  font-size: var(--font-size-compact);
  margin-top: var(--gap-caption);
`,Vt=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);

  @media (pointer: coarse) {
    font-size: var(--font-size-prose);
  }
`,qt=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  margin-left: var(--gap-trailing-mark);
`,Se={left:!1,right:!1};function Yt(e){const[t,n]=f.useState(Se),o=f.useRef(Se);return f.useEffect(()=>{if(!e)return;const i=()=>{const d=e.scrollLeft>1,l=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===d&&o.current.right===l||(o.current={left:d,right:l},n(o.current))};i(),e.addEventListener("scroll",i,{passive:!0});const a=typeof ResizeObserver>"u"?null:new ResizeObserver(i);a?.observe(e);for(const d of Array.from(e.children))a?.observe(d);const c=new MutationObserver(()=>{for(const d of Array.from(e.children))a?.observe(d);i()});return c.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",i),a?.disconnect(),c.disconnect()}},[e]),t}const _e=u.div`
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
`,Xt=6,Qt=3,le={track:8,hub:4,needle:.92},Jt={regular:{size:16,drop:18},large:{size:24,drop:32}};function K(e,t,n,o){const i=o*Math.PI/180;return{x:e+n*Math.sin(i),y:t-n*Math.cos(i)}}function Me(e,t,n,o,i){const a=K(e,t,n,o),c=K(e,t,n,i),d=i-o,l=Math.abs(d)>180?1:0,p=d>=0?1:0;return`M ${a.x.toFixed(2)} ${a.y.toFixed(2)} A ${n} ${n} 0 ${l} ${p} ${c.x.toFixed(2)} ${c.y.toFixed(2)}`}function Lr({value:e,min:t,max:n,width:o=120,height:i=120,startAngle:a=0,sweep:c=360,wrap:d=!1,zones:l,ticks:p,valueLabel:x,readout:w,format:h,needleColor:g="var(--color-text-primary)",trackColor:v="var(--color-border-subtle)","aria-label":y}){const T=Le(e),{shown:z,held:C,caption:A,band:j}=T,{anchor:_,tip:R}=lt(A),G=z?.magnitude??Number.NaN,H=Number.isFinite(G)?z:null,I=t.magnitude,V=n.magnitude,F=V-I,q=Number.isFinite(G)?G:I,W=F>0?d?I+((q-I)%F+F)%F:Math.max(I,Math.min(V,q)):I,Y=H!=null,D=H==null?null:{magnitude:d?W:G,unit:H.unit},m=x??(D===null?null:rt(D,{format:h})),s=D===null?ve:Z(D,{format:h}),$=H==null||j===null?null:He(j,H.unit)??null,k=w!==void 0&&c<=180,S=k?le.track:Xt,E=k?le.hub:Qt,L=w===void 0?null:Jt[w],P=o/2,M=k&&L!==null?Math.min((o-S)/2,i-S-L.drop):Math.min(o,i)/2-S-2,O=k?M+S/2:i/2,re=b=>{const B=F>0?(b-I)/F:0;return a+B*c},X=b=>b.max(t).min(n),Q=b=>re(b.magnitude),se=b=>c!==0?(b-a)/c:0,me=$!==null&&Pe(se(re(W)),[se(Q(X($.lo))),se(Q(X($.hi)))],Ne({wraps:d}))?$:null,xe=c>=360,ge=K(P,O,M*(k?le.needle:.88),re(W));return r.jsxs(Zt,{...ut(T),..._,...Y?{role:"meter","aria-label":ye(y,A),...we(A),"aria-valuenow":W,"aria-valuemin":I,"aria-valuemax":V,"aria-valuetext":s}:{role:"img","aria-label":ye(`${y}: ${s}`,A),...we(A)},children:[r.jsxs("svg",{width:o,height:i,viewBox:`0 0 ${o} ${i}`,"aria-hidden":"true",style:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto",overflow:k?"visible":void 0},children:[M>0&&(xe?r.jsx("circle",{cx:P,cy:O,r:M,fill:"none",stroke:v,strokeWidth:S}):r.jsx("path",{d:Me(P,O,M,a,a+c),fill:"none",stroke:v,strokeWidth:S,strokeLinecap:"round"})),M>0&&!xe&&l?.flatMap(b=>{const B=X(b.from.min(b.to)),N=X(b.from.max(b.to));return N.greaterThan(B)?[B.greaterThan(t)?null:a,n.greaterThan(N)?null:a+c].flatMap(U=>{if(U===null)return[];const ee=K(P,O,M,U);return[r.jsx("circle",{"data-dial-cap":"",cx:ee.x,cy:ee.y,r:S/2,fill:b.color},`cap-${b.color}-${U}`)]}):[]}),M>0&&l?.map(b=>{const B=X(b.from.min(b.to)),N=X(b.from.max(b.to));return N.greaterThan(B)?r.jsx("path",{d:Me(P,O,M,Q(B),Q(N)),fill:"none",stroke:b.color,strokeWidth:S,strokeLinecap:"butt"},`zone-${b.color}-${Q(B)}-${Q(N)}`):null}),M>0&&p?.map(b=>{const B=b.value.magnitude,N=re(B),U=K(P,O,M,N),ee=K(P,O,M-S,N),be=K(P,O,M-S-8,N);return r.jsxs("g",{children:[r.jsx("line",{x1:ee.x,y1:ee.y,x2:U.x,y2:U.y,stroke:"var(--color-text-faint)",strokeWidth:1}),b.label&&r.jsx("text",{x:be.x,y:be.y,textAnchor:"middle",dominantBaseline:"middle",fontSize:9,fill:"var(--color-text-faint)",children:b.label})]},`tick-${B}-${b.label??""}`)}),M>0&&me!==null&&["lo","hi"].map(b=>{const B=Q(X(me[b])),N=K(P,O,M-S/2,B),U=K(P,O,M+S/2,B);return r.jsx(ct,{end:b,x1:N.x,y1:N.y,x2:U.x,y2:U.y},b)}),M>0&&Y&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:P,y1:O,x2:ge.x,y2:ge.y,stroke:g,strokeWidth:2,strokeLinecap:"round"}),r.jsx("circle",{cx:P,cy:O,r:E,fill:g})]}),r.jsxs("text",{x:P,y:k&&L!==null?O+L.drop:O+M*.55,textAnchor:"middle",fontSize:k&&L!==null?L.size:13,fontWeight:k?void 0:"bold",fill:m===null?"var(--color-text-muted)":"var(--color-text-primary)",children:[m??ve,C&&m!==null&&r.jsx(dt,{size:k?7:6,figureSize:k&&L!==null?L.size:13})]})]}),R]})}const Zt=u.div`
  display: block;
  max-width: 100%;
`;function Pr({rows:e,segment:t="filters",emptyLabel:n="Nothing matches the filter"}){const o=ft({segment:t}),i=e.filter(a=>o.matches(a.searchText));return r.jsx(pt,{filter:o,children:i.length>0?r.jsx(nt,{gap:"related",children:i.map(a=>r.jsx("div",{children:a.node},a.id))}):r.jsx(Be,{children:n})})}const er="8px";function Ue({percent:e,tone:t,fillColor:n,trackHeld:o=!1,fillHeld:i=!1,children:a,...c}){return r.jsxs(tr,{"data-track-held":o?"":void 0,...c,children:[e!==null&&r.jsx(nr,{$tone:t,$fillColor:n,$held:i,"data-fill-held":i?"":void 0,style:{width:`${e}%`}}),o&&r.jsx(rr,{"data-track-hatch":"",style:{left:`${e??0}%`}}),a]})}const tr=u.div`
  width: 100%;
  border-radius: var(--radius-pill);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  overflow: hidden;
  /* Positioned for the fill only: this overflow rounds the fill's ends and would clip any mark drawn over it. */
  position: relative;
  height: ${er};
`,rr=u.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(
    -45deg,
    ${he.warn} 0 1px,
    transparent 1px 4px
  );
  opacity: 0.55;
  pointer-events: none;
`,nr=u.div`
  height: 100%;
  border-radius: var(--radius-pill);
  transition: width var(--duration-slow) var(--ease-standard);
  /* A held reading dims the fill, not the hue and not the whole bar, so a label beside it stays readable. */
  ${({$held:e})=>e?"opacity: 0.55;":""}
  background: ${({$tone:e,$fillColor:t})=>t??he[e]};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function Nr({label:e,value:t,capacity:n,format:o,tone:i="neutral",fillColor:a,valueLabel:c,valueLabelNode:d,layout:l="stacked",hideLabel:p=!1,statement:x=!1,...w}){const h=Te(t),g=Te(n),v=or(h.figure,n===void 0?void 0:g.figure);if(v===null||!Number.isFinite(v))return p?null:r.jsx(Xe,{layout:l,label:e,display:r.jsx(ot,{}),...w,children:r.jsx(Ue,{percent:null,tone:i,"aria-hidden":"true"})});const y=Math.min(1,Math.max(0,v)),T={label:e,layout:l,hideLabel:p,statement:x,pct:Math.round(y*100),tone:i,fillColor:a,trackHeld:g.reading?.state==="held"&&!$e(g.figure),fillHeld:h.reading?.state==="held"&&!$e(h.figure),...w},z=fe(1,ue(g.reading,g.figure,g.figure));if(n!==void 0)return r.jsx(ht,{of:h.figure?.unit,format:o,children:r.jsx(ir,{...T,value:t,capacity:n,shown:h,held:g,endBounds:z,at:y,valueLabel:c,valueLabelNode:d})});const C=fe(y,ue(h.reading,h.figure,null));return r.jsx(Ye,{...T,bounds:C,endBounds:z,display:d??(c===void 0?r.jsx(te,{value:t,format:o}):r.jsx(Ve,{caption:ie(t),children:c})),spoken:qe(c===void 0?Z(h.figure,{format:o}):Ke(c,ie(t)),C,z)})}function ie(e){const{held:t,caption:n}=Le(e??null);return t?n:null}function Ke(e,t){return t===null?e:`${e}, ${t}`}function Ve({caption:e,children:t}){return e===null?r.jsx(r.Fragment,{children:t}):r.jsx(xt,{caption:e,children:t})}function Te(e){return typeof e!="object"||e===null||!("state"in e)?{figure:e??null,reading:null}:{figure:e.value??null,reading:e}}function or(e,t){return e===null||t===null||t!==void 0&&!t.isPositive()?null:(t===void 0?e:e.dividedBy(t)).magnitude}function ue(e,t,n){if(e===null||e.reckoning.status!=="available"||t===null)return null;const o=He(e.reckoning.band,t.unit);if(!o)return null;const i={loSaid:o.lo,hiSaid:o.hi,kind:o.kind};return n===null?{lo:ne(o.lo,0),hi:ne(o.hi,0),...i}:n.isPositive()?{lo:ne(o.lo.dividedBy(n),0),hi:ne(o.hi.dividedBy(n),0),...i}:null}function fe(e,t){return t===null?null:Pe(e,[t.lo,t.hi],Ne())?t:null}function qe(e,t,n,o){const i=(c,d)=>{const l=Z(c.loSaid,o),p=Z(c.hiSaid,o);return`${d}with bands at ${l} and ${p}`},a=[t===null?null:i(t,""),n===null?null:i(n,"capacity ")].filter(c=>c!==null);return a.length===0?e:`${e}, ${a.join(", ")}`}function ar(e){if(!Number.isFinite(e))return 0;const t=Math.min(1,Math.max(0,e));return Math.round(t*1e4)/100}function oe(e){const t=ar(e),n=t<=0?0:t>=100?-2:-1;return{style:{left:`${t}%`,transform:`translateX(${n}px)`}}}function Ye({label:e,layout:t,hideLabel:n,statement:o,pct:i,tone:a,fillColor:c,trackHeld:d,fillHeld:l,display:p,spoken:x,bounds:w,endBounds:h,...g}){return r.jsxs(Xe,{layout:t,label:e,display:p,hideHead:n,statement:o,...g,children:[r.jsx(Ue,{percent:i,tone:a,fillColor:c,trackHeld:d,fillHeld:l,role:"meter","aria-label":e,"aria-valuenow":i,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":x}),(w!==null||h!==null)&&r.jsxs(fr,{"aria-hidden":"true",children:[w!==null&&r.jsxs(r.Fragment,{children:[r.jsx(ae,{"data-bound":"lo",...oe(w.lo)}),r.jsx(ae,{"data-bound":"hi",...oe(w.hi)})]}),h!==null&&r.jsxs(r.Fragment,{children:[r.jsx(ae,{"data-end-bound":"lo",...oe(h.lo)}),r.jsx(ae,{"data-end-bound":"hi",...oe(h.hi)})]})]})]})}function Xe({layout:e,label:t,display:n,hideHead:o=!1,statement:i=!1,children:a,...c}){return o?r.jsxs(ce,{$row:!1,...c,children:[r.jsx(de,{$row:!1,children:a}),i&&r.jsx(ur,{"data-meter-part":"statement",children:n})]}):e==="row"?r.jsxs(ce,{$row:!0,"data-meter-row":"",...c,children:[r.jsx(ze,{"data-meter-part":"label",children:t}),r.jsx(de,{$row:!0,"data-meter-part":"bar",children:a}),r.jsx(Ae,{$row:!0,"data-meter-part":"figure",children:n})]}):r.jsxs(ce,{$row:!1,...c,children:[r.jsxs(dr,{children:[r.jsx(ze,{children:t}),r.jsx(Ae,{$row:!1,children:n})]}),r.jsx(de,{$row:!1,children:a})]})}function ir({value:e,capacity:t,shown:n,held:o,at:i,valueLabel:a,valueLabelNode:c,...d}){const l=a===void 0,p=ke(l?n.figure:void 0),x=ke(l?o.figure:void 0),w=p??x??{},h=ie(e)??ie(t),g=c??(a!==void 0?r.jsx(Ve,{caption:h,children:a}):d.layout==="row"?r.jsxs(pr,{$marked:d.fillHeld||d.trackHeld,children:[r.jsx(te,{value:e,hideUnitInGroup:!0})," / ",r.jsx(te,{value:t}),(d.fillHeld||d.trackHeld)&&r.jsx(mt,{"aria-hidden":"true","data-held-mark":""})]}):r.jsxs(r.Fragment,{children:[r.jsx(te,{value:e})," / ",r.jsx(te,{value:t})]})),v=a===void 0?`${Z(n.figure,w)} of ${Z(o.figure,w)}`:Ke(a,h),y=fe(i,ue(n.reading,n.figure,o.figure));return r.jsx(Ye,{...d,display:g,spoken:qe(v,y,d.endBounds,w),bounds:y})}const pe=48;function Hr({children:e,...t}){const n=f.useRef(null);return f.useLayoutEffect(()=>{const o=n.current;if(!o||typeof ResizeObserver>"u")return;const i=()=>{o.clientWidth!==0&&o.toggleAttribute("data-figures-below",!sr(o))};let a=0;const c=()=>{cancelAnimationFrame(a),a=requestAnimationFrame(i)},d=new ResizeObserver(c),l=()=>{d.disconnect(),d.observe(o);for(const x of Qe(o))d.observe(x)},p=new MutationObserver(l);return p.observe(o,{childList:!0,subtree:!0}),l(),i(),()=>{cancelAnimationFrame(a),d.disconnect(),p.disconnect()}},[]),r.jsx(cr,{ref:n,...t,children:e})}const Wr=u.div.attrs({"data-meter-row-group":""})`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  row-gap: var(--gap-meter-rows);
  min-width: 0;

  & > * {
    grid-column: 1 / -1;
    min-width: 0;
  }
`;function Qe(e){return Array.from(e.querySelectorAll(':scope > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row] > [data-meter-part="figure"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="figure"]'))}function sr(e){const t=Qe(e);if(t.length===0)return!0;let n=0,o=0;for(const l of t)l.dataset.meterPart==="label"?n=Math.max(n,lr(l)):o=Math.max(o,l.scrollWidth);const i=getComputedStyle(e),a=l=>Number.parseFloat(l)||0,c=a(i.columnGap),d=e.clientWidth-a(i.paddingLeft)-a(i.paddingRight);return n+c+pe+c+o<=d}function lr(e){const t=e.style.whiteSpace;e.style.whiteSpace="nowrap";const n=e.scrollWidth;return e.style.whiteSpace=t,n}const cr=u.div`
  display: grid;
  grid-template-columns:
    minmax(min-content, max-content)
    minmax(${pe}px, 1fr)
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
      minmax(${pe}px, 1fr);
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
`,Ie="1px",ce=u.div`
  display: flex;
  width: 100%;
  min-width: 0;
  ${({$row:e})=>e?J`
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          column-gap: var(--gap-meter-columns);
          row-gap: var(--gap-caption);
        `:J`
          flex-direction: column;
          gap: var(--gap-caption);
        `}
`,dr=u.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--gap-label-value);
  min-width: 0;
  /* The value may drop to its own line at narrow widths rather than crushing the label. */
  flex-wrap: wrap;
`,ze=u.span`
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
`,Ae=u.span`
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
`,ur=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,fr=u.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,de=u.div`
  position: relative;
  ${({$row:e})=>e?J`
          flex: 1 1 28px;
          min-width: 28px;
        `:""}
`,pr=u(gt)`
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
`,ae=u.div`
  position: absolute;
  top: ${Ie};
  bottom: ${Ie};
  width: 2px;
  background: var(--color-text-primary);
  /* Inset and outset, so the mark keeps an edge against a light or saturated fill on either side of its end. */
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 0.55),
    inset 0 0 0 0.5px rgb(0 0 0 / 0.35);
  opacity: 0.62;
  pointer-events: none;
`,hr=u.div`
  display: ${({$size:e})=>e==="hero"?"flex":"inline-flex"};
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({$tone:e})=>at[e]};
  ${({$size:e})=>e==="hero"?J`
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
        `:J`
          align-items: baseline;
          gap: var(--gap-value-tag);
          /* Display tier: the type scale stops at lg, so this stays literal. */
          font-size: 22px;
        `}
`;function Gr({size:e="inline",tone:t="neutral",...n}){return r.jsx(hr,{$size:e,$tone:t,...n})}const Ur=u.span`
  font-size: var(--font-size-caption);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-transform: uppercase;
`;function Re(e,t,n,o){const i=t-e;if(i===0){const a=(n+o)/2;return()=>a}return a=>n+(a-e)/i*(o-n)}function mr(e,t,n,o){return e.map((i,a)=>`${a===0?"M":"L"}${n(i).toFixed(2)},${o(t[a]).toFixed(2)}`).join(" ")}function Kr({values:e,width:t,height:n,color:o="var(--color-text-primary)",strokeWidth:i=1.5,yDomain:a,showZeroBaseline:c=!1,background:d=!0,"aria-label":l="Trend sparkline"}){const p=f.useMemo(()=>e.filter(j=>Number.isFinite(j)),[e]),x=`sparkline-fill-${f.useId().replace(/:/g,"")}`,w=f.useMemo(()=>{if(a)return a;if(p.length===0)return[0,1];let j=p[0],_=p[0];for(const R of p)R<j&&(j=R),R>_&&(_=R);if(j===_){const R=Math.abs(j)>0?Math.abs(j)*.01:1;return[j-R,_+R]}return[j,_]},[a,p]);if(t<=0||n<=0||p.length<2)return r.jsx("svg",{width:Math.max(0,t),height:Math.max(0,n),role:"img","aria-label":l,style:{display:"block"},children:r.jsx("title",{children:l})});const h=i/2,g=p.map((j,_)=>_),v=Re(0,p.length-1,0,t),y=Re(w[0],w[1],n-h,h),T=mr(g,p,v,y),z=`${T} L ${t},${n} L 0,${n} Z`,C=c&&w[0]<=0&&w[1]>=0,A=C?y(0):null;return r.jsxs("svg",{width:t,height:n,role:"img","aria-label":l,style:{display:"block"},children:[r.jsx("title",{children:l}),d&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:x,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:o,stopOpacity:"0.25"}),r.jsx("stop",{offset:"100%",stopColor:o,stopOpacity:"0.02"})]})}),C&&A!==null&&r.jsx("line",{x1:0,y1:A,x2:t,y2:A,stroke:"var(--color-border-subtle)",strokeWidth:1}),d&&r.jsx("path",{d:z,fill:`url(#${x})`,stroke:"none"}),r.jsx("path",{d:T,stroke:o,strokeWidth:i,fill:"none",strokeLinejoin:"round",strokeLinecap:"round"})]})}const Je=240,xr=8;function gr(e,t){if(e<=0||t<2)return!1;const n=t*Je+(t-1)*xr;return e>=n}function Vr({tabs:e,activeId:t,onChange:n,expandWhenRoomy:o=!1,"aria-label":i,"aria-labelledby":a,className:c}){const d=f.useId(),l=f.useMemo(()=>e.map((s,$)=>({...s,id:s.id??`tab-${$}`})),[e]),p=t!==void 0,[x,w]=f.useState(()=>t??l[0]?.id??""),h=p?t:x,g=l.find(s=>s.id===h),v=g&&!g.disabled?g:l.find(s=>!s.disabled)??g??l[0],y=f.useCallback(s=>{p||w(s),n?.(s)},[p,n]),T=f.useMemo(()=>l.filter(s=>!s.disabled),[l]),{ref:z,size:C}=bt({w:0,h:0}),A=o&&gr(C.w,T.length),j=f.useRef(new Map),_=f.useRef(null),R=f.useRef(null),[G,H]=f.useState(!1),[I,V]=f.useState(null),F=f.useCallback(s=>{_.current=s,V(s)},[]),q=Yt(I),[W,Y]=f.useState(null);f.useLayoutEffect(()=>{const s=_.current;if(!s)return;const $=()=>{H(S=>{S||(R.current=s.scrollWidth);const E=R.current;return E==null?!1:E>s.clientWidth})};$();const k=new ResizeObserver($);return k.observe(s),()=>k.disconnect()},[A,l.length]),f.useLayoutEffect(()=>{const s=_.current,$=v?j.current.get(v.id):void 0;if(!s||!$){Y(null);return}const k=()=>{const E=j.current.get(v?.id??"");E&&Y(L=>L&&L.left===E.offsetLeft&&L.width===E.offsetWidth?L:{left:E.offsetLeft,width:E.offsetWidth})};k();const S=new ResizeObserver(k);return S.observe(s),S.observe($),()=>S.disconnect()},[v?.id,l.length,A]);const D=f.useCallback((s,$)=>{const k=l.length;for(let S=1;S<=k;S++){const E=l[((s+$*S)%k+k)%k];if(!(!E||E.disabled)){y(E.id),j.current.get(E.id)?.focus();return}}},[l,y]),m=f.useCallback(s=>{const $=l.findIndex(k=>k.id===v?.id);if(!($<0))switch(s.key){case"ArrowRight":case"ArrowDown":s.preventDefault(),D($,1);break;case"ArrowLeft":case"ArrowUp":s.preventDefault(),D($,-1);break;case"Home":s.preventDefault(),D(-1,1);break;case"End":s.preventDefault(),D(l.length,-1);break}},[l,v?.id,D]);return A?r.jsx(Fe,{ref:z,"data-tabs-root":"",className:c,children:r.jsx(vt,{minColWidth:`${Je}px`,align:"start",gap:"related-comfortable",children:T.map(s=>r.jsxs(it,{children:[r.jsxs(st,{as:"h3",$rule:!0,children:[s.label,s.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(Ee,{"aria-hidden":"true"}),r.jsx(wt,{children:", needs attention"})]})]}),s.content]},s.id))})}):r.jsxs(Fe,{ref:z,"data-tabs-root":"",className:c,children:[r.jsxs(br,{children:[r.jsx(vr,{ref:F,children:r.jsxs(wr,{role:"tablist","aria-label":i,"aria-labelledby":a,children:[W&&r.jsx(yr,{"aria-hidden":"true",style:{left:W.left,width:W.width}}),l.map(s=>{const $=s.id===v?.id;return r.jsxs(kr,{ref:k=>{k?j.current.set(s.id,k):j.current.delete(s.id)},role:"tab",type:"button",id:`${d}${s.id}-tab`,"aria-selected":$,"aria-controls":`${d}${s.id}-panel`,"aria-describedby":s.indicator?`${d}${s.id}-attention`:void 0,tabIndex:$?0:-1,disabled:s.disabled,$active:$,onClick:()=>y(s.id),onKeyDown:m,$compact:G,children:[s.label,s.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(Ee,{"aria-hidden":"true"}),r.jsx("span",{id:`${d}${s.id}-attention`,hidden:!0,children:"Needs attention"})]})]},s.id)})]})}),r.jsx(_e,{$position:"left",$visible:q.left}),r.jsx(_e,{$position:"right",$visible:q.right})]}),v&&r.jsx($r,{role:"tabpanel",id:`${d}${v.id}-panel`,"aria-labelledby":`${d}${v.id}-tab`,children:v.content})]})}const Fe=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-tabs-panel);
  /* Fills the panel and constrains children, so a flex:1 tab body can scroll. */
  flex: 1;
  min-height: 0;
`,br=u.div`
  position: relative;
  margin-inline: calc(-1 * var(--bleed-inline));
`,vr=u.div`
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
`,wr=u.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  gap: var(--gap-tab);
  background: var(--color-surface-sunken);
  border-radius: var(--radius-pill);
  padding: var(--inset-tab-track);
  flex-wrap: nowrap;
`,yr=u.span`
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
`,Ee=u.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-left: var(--gap-trailing-mark);
  vertical-align: middle;
  border-radius: var(--radius-circle);
  background: var(--color-warn-mark);
`,kr=u.button`
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

  ${yt}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
    /* Compact still applies on touch: a tab scrolled half out of view is a smaller target, not a bigger one. */
    ${({$compact:e})=>e?"padding: var(--inset-tab-compact-touch);":"padding: var(--inset-control-touch);"}
  }
`,$r=u.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,qr=f.forwardRef(function({pressed:t=!1,tone:n="go",size:o="md",type:i="button","aria-pressed":a,...c},d){return r.jsx(kt,{ref:d,type:i,tone:t?n:void 0,size:o,pressed:t,"aria-pressed":a??t,...c})}),Ce={w:5,h:4},jr=8,Sr=7;function Yr(e,t){return e===void 0||t===void 0?"normal":e<Ce.w||t<Ce.h?"tiny":e<jr||t<Sr?"small":"normal"}const Ze=1.6,_r=1/Ze;function Xr(e,t){if(e===void 0||t===void 0||t===0)return{shape:"square",aspect:1};const n=e/t;return n>=Ze?{shape:"landscape",aspect:n}:n<=_r?{shape:"portrait",aspect:n}:{shape:"square",aspect:n}}export{_t as C,Dr as D,Pr as F,_e as I,Nr as M,Gr as R,Kr as S,Je as T,Hr as a,Ur as b,Br as c,Cr as d,Or as e,Vr as f,qr as g,Ce as h,Lr as i,Wr as j,$t as k,St as l,Yr as m,Xr as n,jt as o,je as p,gr as s,Yt as u};
