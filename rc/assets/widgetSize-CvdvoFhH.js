import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import u,{css as C,keyframes as Oe}from"./ext-styled-components-DAuodqsN.js";import{X as et,H as tt,T as he,w as rt,N as ve,G as J,j as nt,h as ot,d as at,S as it,i as st}from"./contributionsRead-ByK-2wfU.js";import{r as f}from"./ext-react-C0MU9AHG.js";import{E as Le,af as Be,ac as De,bv as lt,bn as Pe,bg as Ne,bB as ct,aB as dt,bC as we,bm as ye,ag as ut,bs as ft,at as pt,aU as ht,ab as te,bD as $e,bE as mt,ae as gt,bF as bt,a3 as xt,av as vt,$ as wt,bG as yt,e as $t}from"./ModalSaveBar-CefTnyG4.js";import{l as He,cM as ke,ba as ne}from"./view-clock-formula-BsZkGtdW.js";import"./ksp-enum-names-Bkm_lBTj.js";import"./screen-BjBOitw-.js";function We(e,t){if(!t)return!0;const n=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(n)||e.key.toLowerCase().includes(n)}function kt(e,t,n=We){return e.filter(o=>n(o,t))}function jt(e,t="Other"){const n=new Map;for(const o of e){const a=o.group??t;let i=n.get(a);i||(i=[],n.set(a,i)),i.push(o)}return[...n.entries()].sort(([o],[a])=>o.localeCompare(a))}function St(e){return e.flatMap(([,t])=>t)}function je(e,t,n){return n===0?-1:Math.max(0,Math.min(e+t,n-1))}function _t({id:e,groups:t,flatOptions:n,activeIndex:o,selectedKey:a,getOptionId:i,onHoverIndex:c,onSelectKey:d,renderItem:l,emptyLabel:p="No matches","aria-label":g,placement:w="below"}){return r.jsx(Mt,{role:"listbox",id:e,"aria-label":g,$placement:w,onMouseDown:h=>h.preventDefault(),children:n.length===0?r.jsx(Le,{layout:"fill",children:p}):t.map(([h,b],v)=>r.jsxs(Tt,{role:"group","aria-labelledby":`${e}-group-${v}`,children:[r.jsx(zt,{id:`${e}-group-${v}`,"aria-hidden":"true",children:h}),b.map(y=>{const T=n.indexOf(y),A=T===o;return r.jsx(It,{id:i(y.key),role:"option","aria-selected":A,$active:A,$selected:y.key===a,onPointerDown:O=>{O.preventDefault(),d(y.key)},onMouseEnter:()=>c(T),children:l?l(y):y.label??y.key},y.key)})]},h))})}const Mt=u.div`
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
`,Tt=u.div``,zt=u.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-raised);
`;function At(e,t){return e?"background: var(--color-surface-panel);":t?et("go"):"background: transparent;"}const It=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-menu-item);
  cursor: pointer;
  ${({$active:e,$selected:t})=>At(e,t)}
  /* Focus stays on the input, so the highlighted option carries the focus colour as an inset bar. */
  box-shadow: ${({$active:e})=>e?"inset 3px 0 0 var(--color-focus)":"none"};

  &:hover {
    background: var(--color-surface-panel);
  }

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`;function Hr({tone:e,children:t,live:n=!1,pulse:o,...a}){const i=n?{role:"status","aria-live":"polite"}:{};return r.jsxs(Rt,{"data-tone":e,...i,...a,children:[r.jsx(Ct,{"data-tone":e,$pulse:o,"aria-hidden":"true"}),r.jsx(Et,{children:t})]})}const Rt=u.div`
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
`,Ct=u.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  flex-shrink: 0;

  background: ${({"data-tone":e})=>he[e]};

  /* A looping pulse needs its own reduced-motion guard; the 1s/2s periods encode connection state. */
  ${({$pulse:e})=>e?C`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${Ft} ${e==="fast"?"1s":"2s"}
              var(--ease-emphasis) infinite;
          }
        `:""}
`,Et=u.span`
  color: var(--color-text-primary);
  line-height: var(--line-height-body);
`;function Wr({checked:e,onChange:t,label:n,disabled:o,id:a,"aria-label":i}){return r.jsxs(Ot,{$disabled:o,children:[r.jsx(Lt,{type:"checkbox",id:a,checked:e,disabled:o,onChange:c=>t(c.target.checked),"aria-label":n?void 0:i}),r.jsx(Ge,{$checked:e,$disabled:o,children:r.jsx(Bt,{$checked:e,$disabled:o})}),n&&r.jsx(Dt,{children:n})]})}const Ot=u.label`
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
`,Lt=u.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:focus-visible + ${Ge} {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Bt=u.div`
  position: absolute;
  /* Measured inside the border: the track is border-box, so its 1px border leaves a 26 by 12 box, and 2px on every side centres the 8px thumb at either end. */
  top: 2px;
  left: ${({$checked:e})=>e?"16px":"2px"};
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-text-faint)":e?"var(--color-accent-fg)":"var(--color-text-faint)"};
  transition: left var(--duration-base), background var(--duration-base);
`,Dt=u.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;function Gr({size:e=12,thickness:t=2,color:n="var(--color-accent-fg)","aria-label":o="Loading",...a}){return r.jsx(Nt,{...a,role:"status","aria-label":o,$size:e,$thickness:t,$color:n})}const Pt=Oe`
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
`,Ht="is no longer available";function Ur({keys:e,value:t,onChange:n,clearable:o=!1,placeholder:a="Search...",subjectNoun:i="value",id:c,"aria-label":d}){const[l,p]=f.useState(""),[g,w]=f.useState(!1),[h,b]=f.useState(-1),v=f.useRef(null),y=f.useRef(null),T=f.useId(),A=f.useId(),O=f.useId(),I=m=>`${A}-${m}`,j=e.find(m=>m.key===t),_=t!==null&&t!==""&&j===void 0&&e.length>0,R=e.some(m=>m.common),U=f.useMemo(()=>kt(l===""&&R?e.filter(m=>m.common):e,l,(m,s)=>We(m,s)||(m.summary?.toLowerCase().includes(s.toLowerCase())??!1)),[e,l,R]),W=f.useMemo(()=>jt(U),[U]),z=f.useMemo(()=>St(W),[W]),q=f.useCallback(()=>{w(!0),p(""),b(-1)},[]),F=f.useCallback(()=>{w(!1),p(""),b(-1)},[]),Y=f.useCallback(m=>{n(m),F()},[n,F]),G=m=>{if(!g){(m.key==="Enter"||m.key==="ArrowDown")&&q();return}switch(m.key){case"Escape":m.stopPropagation(),F();break;case"ArrowDown":m.preventDefault(),b(s=>je(s,1,z.length));break;case"ArrowUp":m.preventDefault(),b(s=>je(s,-1,z.length));break;case"Enter":{const s=l!=="",k=h>=0?z[h]:s?z[0]:void 0;k&&Y(k.key);break}}};f.useEffect(()=>{if(!g)return;const m=s=>{v.current?.contains(s.target)||F()};return document.addEventListener("pointerdown",m),()=>document.removeEventListener("pointerdown",m)},[g,F]);const X=g?l:j?.summary??j?.label??t??"",D=g&&h>=0?z[h]:void 0;return r.jsxs(Wt,{ref:v,children:[r.jsx(Gt,{ref:y,id:c,"aria-label":d,value:X,placeholder:g&&R?`Search all ${e.length} fields...`:t?void 0:a,$hasValue:!!t&&!g,$retired:_&&!g,"aria-invalid":_&&!g?!0:void 0,"aria-describedby":_&&!g?O:void 0,onFocus:q,onBlur:F,onChange:m=>{p(m.target.value),b(-1)},onKeyDown:G,role:"combobox","aria-expanded":g,"aria-controls":T,"aria-autocomplete":"list","aria-activedescendant":D?I(D.key):void 0}),_&&!g&&r.jsx(Kt,{id:O,children:`This ${i} ${Ht}. Pick another.`}),o&&t&&!g&&r.jsx(Ut,{type:"button","aria-label":`Clear ${i}`,onClick:()=>{n(null),F()},children:"×"}),g&&r.jsx(_t,{id:T,groups:W,flatOptions:z,activeIndex:h,selectedKey:t,getOptionId:I,onHoverIndex:b,onSelectKey:Y,"aria-label":d??"Data keys",renderItem:m=>r.jsxs(r.Fragment,{children:[r.jsx(Vt,{children:m.label??m.key}),m.unit&&r.jsx(qt,{children:m.unit})]})})]})}const Wt=u.div`
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

  ${Be}

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

  ${Be}

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
`,Se={left:!1,right:!1};function Yt(e){const[t,n]=f.useState(Se),o=f.useRef(Se);return f.useEffect(()=>{if(!e)return;const a=()=>{const d=e.scrollLeft>1,l=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===d&&o.current.right===l||(o.current={left:d,right:l},n(o.current))};a(),e.addEventListener("scroll",a,{passive:!0});const i=typeof ResizeObserver>"u"?null:new ResizeObserver(a);i?.observe(e);for(const d of Array.from(e.children))i?.observe(d);const c=new MutationObserver(()=>{for(const d of Array.from(e.children))i?.observe(d);a()});return c.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",a),i?.disconnect(),c.disconnect()}},[e]),t}const _e=u.div`
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
`,Xt=6,Qt=3,le={track:8,hub:4,needle:.92},Zt={regular:{size:16,drop:18},large:{size:24,drop:32}};function V(e,t,n,o){const a=o*Math.PI/180;return{x:e+n*Math.sin(a),y:t-n*Math.cos(a)}}function Me(e,t,n,o,a){const i=V(e,t,n,o),c=V(e,t,n,a),d=a-o,l=Math.abs(d)>180?1:0,p=d>=0?1:0;return`M ${i.x.toFixed(2)} ${i.y.toFixed(2)} A ${n} ${n} 0 ${l} ${p} ${c.x.toFixed(2)} ${c.y.toFixed(2)}`}function Kr({value:e,min:t,max:n,width:o=120,height:a=120,startAngle:i=0,sweep:c=360,wrap:d=!1,zones:l,ticks:p,valueLabel:g,readout:w,format:h,needleColor:b="var(--color-text-primary)",trackColor:v="var(--color-border-subtle)","aria-label":y}){const T=De(e),{shown:A,held:O,caption:I,band:j}=T,{anchor:_,tip:R}=lt(I),U=A?.magnitude??Number.NaN,W=Number.isFinite(U)?A:null,z=t.magnitude,q=n.magnitude,F=q-z,Y=Number.isFinite(U)?U:z,G=F>0?d?z+((Y-z)%F+F)%F:Math.max(z,Math.min(q,Y)):z,X=W!=null,D=W==null?null:{magnitude:d?G:U,unit:W.unit},m=g??(D===null?null:rt(D,{format:h})),s=D===null?ve:J(D,{format:h}),k=W==null||j===null?null:He(j,W.unit)??null,$=w!==void 0&&c<=180,S=$?le.track:Xt,E=$?le.hub:Qt,P=w===void 0?null:Zt[w],N=o/2,M=$&&P!==null?Math.min((o-S)/2,a-S-P.drop):Math.min(o,a)/2-S-2,L=$?M+S/2:a/2,re=x=>{const B=F>0?(x-z)/F:0;return i+B*c},Q=x=>x.max(t).min(n),Z=x=>re(x.magnitude),se=x=>c!==0?(x-i)/c:0,me=k!==null&&Pe(se(re(G)),[se(Z(Q(k.lo))),se(Z(Q(k.hi)))],Ne({wraps:d}))?k:null,ge=c>=360,be=V(N,L,M*($?le.needle:.88),re(G));return r.jsxs(Jt,{...ut(T),..._,...X?{role:"meter","aria-label":ye(y,I),...we(I),"aria-valuenow":G,"aria-valuemin":z,"aria-valuemax":q,"aria-valuetext":s}:{role:"img","aria-label":ye(`${y}: ${s}`,I),...we(I)},children:[r.jsxs("svg",{width:o,height:a,viewBox:`0 0 ${o} ${a}`,"aria-hidden":"true",style:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto",overflow:$?"visible":void 0},children:[M>0&&(ge?r.jsx("circle",{cx:N,cy:L,r:M,fill:"none",stroke:v,strokeWidth:S}):r.jsx("path",{d:Me(N,L,M,i,i+c),fill:"none",stroke:v,strokeWidth:S,strokeLinecap:"round"})),M>0&&!ge&&l?.flatMap(x=>{const B=Q(x.from.min(x.to)),H=Q(x.from.max(x.to));return H.greaterThan(B)?[B.greaterThan(t)?null:i,n.greaterThan(H)?null:i+c].flatMap(K=>{if(K===null)return[];const ee=V(N,L,M,K);return[r.jsx("circle",{"data-dial-cap":"",cx:ee.x,cy:ee.y,r:S/2,fill:x.color},`cap-${x.color}-${K}`)]}):[]}),M>0&&l?.map(x=>{const B=Q(x.from.min(x.to)),H=Q(x.from.max(x.to));return H.greaterThan(B)?r.jsx("path",{d:Me(N,L,M,Z(B),Z(H)),fill:"none",stroke:x.color,strokeWidth:S,strokeLinecap:"butt"},`zone-${x.color}-${Z(B)}-${Z(H)}`):null}),M>0&&p?.map(x=>{const B=x.value.magnitude,H=re(B),K=V(N,L,M,H),ee=V(N,L,M-S,H),xe=V(N,L,M-S-8,H);return r.jsxs("g",{children:[r.jsx("line",{x1:ee.x,y1:ee.y,x2:K.x,y2:K.y,stroke:"var(--color-text-faint)",strokeWidth:1}),x.label&&r.jsx("text",{x:xe.x,y:xe.y,textAnchor:"middle",dominantBaseline:"middle",fontSize:9,fill:"var(--color-text-faint)",children:x.label})]},`tick-${B}-${x.label??""}`)}),M>0&&me!==null&&["lo","hi"].map(x=>{const B=Z(Q(me[x])),H=V(N,L,M-S/2,B),K=V(N,L,M+S/2,B);return r.jsx(ct,{end:x,x1:H.x,y1:H.y,x2:K.x,y2:K.y},x)}),M>0&&X&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:N,y1:L,x2:be.x,y2:be.y,stroke:b,strokeWidth:2,strokeLinecap:"round"}),r.jsx("circle",{cx:N,cy:L,r:E,fill:b})]}),r.jsxs("text",{x:N,y:$&&P!==null?L+P.drop:L+M*.55,textAnchor:"middle",fontSize:$&&P!==null?P.size:13,fontWeight:$?void 0:"bold",fill:m===null?"var(--color-text-muted)":"var(--color-text-primary)",children:[m??ve,O&&m!==null&&r.jsx(dt,{size:$?7:6,figureSize:$&&P!==null?P.size:13})]})]}),R]})}const Jt=u.div`
  display: block;
  max-width: 100%;
`;function Vr({rows:e,segment:t="filters",emptyLabel:n="Nothing matches the filter"}){const o=ft({segment:t}),a=e.filter(i=>o.matches(i.searchText));return r.jsx(pt,{filter:o,children:a.length>0?r.jsx(nt,{gap:"related",children:a.map(i=>r.jsx("div",{children:i.node},i.id))}):r.jsx(Le,{children:n})})}const er="8px";function Ue({percent:e,tone:t,fillColor:n,trackHeld:o=!1,fillHeld:a=!1,children:i,...c}){return r.jsxs(tr,{"data-track-held":o?"":void 0,...c,children:[e!==null&&r.jsx(nr,{$tone:t,$fillColor:n,$held:a,"data-fill-held":a?"":void 0,style:{width:`${e}%`}}),o&&r.jsx(rr,{"data-track-hatch":"",style:{left:`${e??0}%`}}),i]})}const tr=u.div`
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
`;function qr({label:e,value:t,capacity:n,format:o,tone:a="neutral",fillColor:i,valueLabel:c,valueLabelNode:d,layout:l="stacked",hideLabel:p=!1,statement:g=!1,...w}){const h=Te(t),b=Te(n),v=or(h.figure,n===void 0?void 0:b.figure);if(v===null||!Number.isFinite(v))return p?null:r.jsx(Xe,{layout:l,label:e,display:r.jsx(ot,{}),...w,children:r.jsx(Ue,{percent:null,tone:a,"aria-hidden":"true"})});const y=Math.min(1,Math.max(0,v)),T={label:e,layout:l,hideLabel:p,statement:g,pct:Math.round(y*100),tone:a,fillColor:i,trackHeld:b.reading?.state==="held"&&!ke(b.figure),fillHeld:h.reading?.state==="held"&&!ke(h.figure),...w},A=fe(1,ue(b.reading,b.figure,b.figure));if(n!==void 0)return r.jsx(ht,{of:h.figure?.unit,format:o,children:r.jsx(ir,{...T,value:t,capacity:n,shown:h,held:b,endBounds:A,at:y,valueLabel:c,valueLabelNode:d})});const O=fe(y,ue(h.reading,h.figure,null));return r.jsx(Ye,{...T,bounds:O,endBounds:A,display:d??(c===void 0?r.jsx(te,{value:t,format:o}):r.jsx(Ve,{caption:ie(t),children:c})),spoken:qe(c===void 0?J(h.figure,{format:o}):Ke(c,ie(t)),O,A)})}function ie(e){const{held:t,caption:n}=De(e??null);return t?n:null}function Ke(e,t){return t===null?e:`${e}, ${t}`}function Ve({caption:e,children:t}){return e===null?r.jsx(r.Fragment,{children:t}):r.jsx(gt,{caption:e,children:t})}function Te(e){return typeof e!="object"||e===null||!("state"in e)?{figure:e??null,reading:null}:{figure:e.value??null,reading:e}}function or(e,t){return e===null||t===null||t!==void 0&&!t.isPositive()?null:(t===void 0?e:e.dividedBy(t)).magnitude}function ue(e,t,n){if(e===null||e.reckoning.status!=="available"||t===null)return null;const o=He(e.reckoning.band,t.unit);if(!o)return null;const a={loSaid:o.lo,hiSaid:o.hi,kind:o.kind};return n===null?{lo:ne(o.lo,0),hi:ne(o.hi,0),...a}:n.isPositive()?{lo:ne(o.lo.dividedBy(n),0),hi:ne(o.hi.dividedBy(n),0),...a}:null}function fe(e,t){return t===null?null:Pe(e,[t.lo,t.hi],Ne())?t:null}function qe(e,t,n,o){const a=(c,d)=>{const l=J(c.loSaid,o),p=J(c.hiSaid,o);return`${d}with bands at ${l} and ${p}`},i=[t===null?null:a(t,""),n===null?null:a(n,"capacity ")].filter(c=>c!==null);return i.length===0?e:`${e}, ${i.join(", ")}`}function ar(e){if(!Number.isFinite(e))return 0;const t=Math.min(1,Math.max(0,e));return Math.round(t*1e4)/100}function oe(e){const t=ar(e),n=t<=0?0:t>=100?-2:-1;return{style:{left:`${t}%`,transform:`translateX(${n}px)`}}}function Ye({label:e,layout:t,hideLabel:n,statement:o,pct:a,tone:i,fillColor:c,trackHeld:d,fillHeld:l,display:p,spoken:g,bounds:w,endBounds:h,...b}){return r.jsxs(Xe,{layout:t,label:e,display:p,hideHead:n,statement:o,...b,children:[r.jsx(Ue,{percent:a,tone:i,fillColor:c,trackHeld:d,fillHeld:l,role:"meter","aria-label":e,"aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":g}),(w!==null||h!==null)&&r.jsxs(fr,{"aria-hidden":"true",children:[w!==null&&r.jsxs(r.Fragment,{children:[r.jsx(ae,{"data-bound":"lo",...oe(w.lo)}),r.jsx(ae,{"data-bound":"hi",...oe(w.hi)})]}),h!==null&&r.jsxs(r.Fragment,{children:[r.jsx(ae,{"data-end-bound":"lo",...oe(h.lo)}),r.jsx(ae,{"data-end-bound":"hi",...oe(h.hi)})]})]})]})}function Xe({layout:e,label:t,display:n,hideHead:o=!1,statement:a=!1,children:i,...c}){return o?r.jsxs(ce,{$row:!1,...c,children:[r.jsx(de,{$row:!1,children:i}),a&&r.jsx(ur,{"data-meter-part":"statement",children:n})]}):e==="row"?r.jsxs(ce,{$row:!0,"data-meter-row":"",...c,children:[r.jsx(Ae,{"data-meter-part":"label",children:t}),r.jsx(de,{$row:!0,"data-meter-part":"bar",children:i}),r.jsx(Ie,{$row:!0,"data-meter-part":"figure",children:n})]}):r.jsxs(ce,{$row:!1,...c,children:[r.jsxs(dr,{children:[r.jsx(Ae,{children:t}),r.jsx(Ie,{$row:!1,children:n})]}),r.jsx(de,{$row:!1,children:i})]})}function ir({value:e,capacity:t,shown:n,held:o,at:a,valueLabel:i,valueLabelNode:c,...d}){const l=i===void 0,p=$e(l?n.figure:void 0),g=$e(l?o.figure:void 0),w=p??g??{},h=ie(e)??ie(t),b=c??(i!==void 0?r.jsx(Ve,{caption:h,children:i}):d.layout==="row"?r.jsxs(pr,{$marked:d.fillHeld||d.trackHeld,children:[r.jsx(te,{value:e,hideUnitInGroup:!0})," / ",r.jsx(te,{value:t}),(d.fillHeld||d.trackHeld)&&r.jsx(mt,{"aria-hidden":"true","data-held-mark":""})]}):r.jsxs(r.Fragment,{children:[r.jsx(te,{value:e})," / ",r.jsx(te,{value:t})]})),v=i===void 0?`${J(n.figure,w)} of ${J(o.figure,w)}`:Ke(i,h),y=fe(a,ue(n.reading,n.figure,o.figure));return r.jsx(Ye,{...d,display:b,spoken:qe(v,y,d.endBounds,w),bounds:y})}const pe=48;function Yr({children:e,...t}){const n=f.useRef(null);return f.useLayoutEffect(()=>{const o=n.current;if(!o||typeof ResizeObserver>"u")return;const a=()=>{o.clientWidth!==0&&o.toggleAttribute("data-figures-below",!sr(o))};let i=0;const c=()=>{cancelAnimationFrame(i),i=requestAnimationFrame(a)},d=new ResizeObserver(c),l=()=>{d.disconnect(),d.observe(o);for(const g of Qe(o))d.observe(g)},p=new MutationObserver(l);return p.observe(o,{childList:!0,subtree:!0}),l(),a(),()=>{cancelAnimationFrame(i),d.disconnect(),p.disconnect()}},[]),r.jsx(cr,{ref:n,...t,children:e})}const Xr=u.div.attrs({"data-meter-row-group":""})`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  row-gap: var(--gap-meter-rows);
  min-width: 0;

  & > * {
    grid-column: 1 / -1;
    min-width: 0;
  }
`;function Qe(e){return Array.from(e.querySelectorAll(':scope > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row] > [data-meter-part="figure"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="figure"]'))}function sr(e){const t=Qe(e);if(t.length===0)return!0;let n=0,o=0;for(const l of t)l.dataset.meterPart==="label"?n=Math.max(n,lr(l)):o=Math.max(o,l.scrollWidth);const a=getComputedStyle(e),i=l=>Number.parseFloat(l)||0,c=i(a.columnGap),d=e.clientWidth-i(a.paddingLeft)-i(a.paddingRight);return n+c+pe+c+o<=d}function lr(e){const t=e.style.whiteSpace;e.style.whiteSpace="nowrap";const n=e.scrollWidth;return e.style.whiteSpace=t,n}const cr=u.div`
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
`,ze="1px",ce=u.div`
  display: flex;
  width: 100%;
  min-width: 0;
  ${({$row:e})=>e?C`
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          column-gap: var(--gap-meter-columns);
          row-gap: var(--gap-caption);
        `:C`
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
`,Ae=u.span`
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
`,Ie=u.span`
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
  ${({$row:e})=>e?C`
          flex: 1 1 28px;
          min-width: 28px;
        `:""}
`,pr=u(bt)`
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
  top: ${ze};
  bottom: ${ze};
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
  ${({$size:e})=>e==="hero"?C`
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
        `:C`
          align-items: baseline;
          gap: var(--gap-value-tag);
          /* Display tier: the type scale stops at lg, so this stays literal. */
          font-size: 22px;
        `}
`;function Qr({size:e="inline",tone:t="neutral",...n}){return r.jsx(hr,{$size:e,$tone:t,...n})}const Zr=u.span`
  font-size: var(--font-size-caption);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-transform: uppercase;
`;function Re(e,t,n,o){const a=t-e;if(a===0){const i=(n+o)/2;return()=>i}return i=>n+(i-e)/a*(o-n)}function mr(e,t,n,o){return e.map((a,i)=>`${i===0?"M":"L"}${n(a).toFixed(2)},${o(t[i]).toFixed(2)}`).join(" ")}function Jr({values:e,width:t,height:n,color:o="var(--color-text-primary)",strokeWidth:a=1.5,yDomain:i,showZeroBaseline:c=!1,background:d=!0,"aria-label":l="Trend sparkline"}){const p=f.useMemo(()=>e.filter(j=>Number.isFinite(j)),[e]),g=`sparkline-fill-${f.useId().replace(/:/g,"")}`,w=f.useMemo(()=>{if(i)return i;if(p.length===0)return[0,1];let j=p[0],_=p[0];for(const R of p)R<j&&(j=R),R>_&&(_=R);if(j===_){const R=Math.abs(j)>0?Math.abs(j)*.01:1;return[j-R,_+R]}return[j,_]},[i,p]);if(t<=0||n<=0||p.length<2)return r.jsx("svg",{width:Math.max(0,t),height:Math.max(0,n),role:"img","aria-label":l,style:{display:"block"},children:r.jsx("title",{children:l})});const h=a/2,b=p.map((j,_)=>_),v=Re(0,p.length-1,0,t),y=Re(w[0],w[1],n-h,h),T=mr(b,p,v,y),A=`${T} L ${t},${n} L 0,${n} Z`,O=c&&w[0]<=0&&w[1]>=0,I=O?y(0):null;return r.jsxs("svg",{width:t,height:n,role:"img","aria-label":l,style:{display:"block"},children:[r.jsx("title",{children:l}),d&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:g,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:o,stopOpacity:"0.25"}),r.jsx("stop",{offset:"100%",stopColor:o,stopOpacity:"0.02"})]})}),O&&I!==null&&r.jsx("line",{x1:0,y1:I,x2:t,y2:I,stroke:"var(--color-border-subtle)",strokeWidth:1}),d&&r.jsx("path",{d:A,fill:`url(#${g})`,stroke:"none"}),r.jsx("path",{d:T,stroke:o,strokeWidth:a,fill:"none",strokeLinejoin:"round",strokeLinecap:"round"})]})}const Ze=240,gr=8;function br(e,t){if(e<=0||t<2)return!1;const n=t*Ze+(t-1)*gr;return e>=n}function en({tabs:e,activeId:t,onChange:n,expandWhenRoomy:o=!1,"aria-label":a,"aria-labelledby":i,className:c}){const d=f.useId(),l=f.useMemo(()=>e.map((s,k)=>({...s,id:s.id??`tab-${k}`})),[e]),p=t!==void 0,[g,w]=f.useState(()=>t??l[0]?.id??""),h=p?t:g,b=l.find(s=>s.id===h),v=b&&!b.disabled?b:l.find(s=>!s.disabled)??b??l[0],y=f.useCallback(s=>{p||w(s),n?.(s)},[p,n]),T=f.useMemo(()=>l.filter(s=>!s.disabled),[l]),{ref:A,size:O}=xt({w:0,h:0}),I=o&&br(O.w,T.length),j=f.useRef(new Map),_=f.useRef(null),R=f.useRef(null),[U,W]=f.useState(!1),[z,q]=f.useState(null),F=f.useCallback(s=>{_.current=s,q(s)},[]),Y=Yt(z),[G,X]=f.useState(null);f.useLayoutEffect(()=>{const s=_.current;if(!s)return;const k=()=>{W(S=>{S||(R.current=s.scrollWidth);const E=R.current;return E==null?!1:E>s.clientWidth})};k();const $=new ResizeObserver(k);return $.observe(s),()=>$.disconnect()},[I,l.length]),f.useLayoutEffect(()=>{const s=_.current,k=v?j.current.get(v.id):void 0;if(!s||!k){X(null);return}const $=()=>{const E=j.current.get(v?.id??"");E&&X(P=>P&&P.left===E.offsetLeft&&P.width===E.offsetWidth?P:{left:E.offsetLeft,width:E.offsetWidth})};$();const S=new ResizeObserver($);return S.observe(s),S.observe(k),()=>S.disconnect()},[v?.id,l.length,I]);const D=f.useCallback((s,k)=>{const $=l.length;for(let S=1;S<=$;S++){const E=l[((s+k*S)%$+$)%$];if(!(!E||E.disabled)){y(E.id),j.current.get(E.id)?.focus();return}}},[l,y]),m=f.useCallback(s=>{const k=l.findIndex($=>$.id===v?.id);if(!(k<0))switch(s.key){case"ArrowRight":case"ArrowDown":s.preventDefault(),D(k,1);break;case"ArrowLeft":case"ArrowUp":s.preventDefault(),D(k,-1);break;case"Home":s.preventDefault(),D(-1,1);break;case"End":s.preventDefault(),D(l.length,-1);break}},[l,v?.id,D]);return I?r.jsx(Fe,{ref:A,"data-tabs-root":"",className:c,children:r.jsx(vt,{minColWidth:`${Ze}px`,align:"start",gap:"related-comfortable",children:T.map(s=>r.jsxs(it,{children:[r.jsxs(st,{as:"h3",$rule:!0,children:[s.label,s.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(Ce,{"aria-hidden":"true"}),r.jsx(wt,{children:", needs attention"})]})]}),s.content]},s.id))})}):r.jsxs(Fe,{ref:A,"data-tabs-root":"",className:c,children:[r.jsxs(xr,{children:[r.jsx(vr,{ref:F,children:r.jsxs(wr,{role:"tablist","aria-label":a,"aria-labelledby":i,children:[G&&r.jsx(yr,{"aria-hidden":"true",style:{left:G.left,width:G.width}}),l.map(s=>{const k=s.id===v?.id;return r.jsxs($r,{ref:$=>{$?j.current.set(s.id,$):j.current.delete(s.id)},role:"tab",type:"button",id:`${d}${s.id}-tab`,"aria-selected":k,"aria-controls":`${d}${s.id}-panel`,"aria-describedby":s.indicator?`${d}${s.id}-attention`:void 0,tabIndex:k?0:-1,disabled:s.disabled,$active:k,onClick:()=>y(s.id),onKeyDown:m,$compact:U,children:[s.label,s.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(Ce,{"aria-hidden":"true"}),r.jsx("span",{id:`${d}${s.id}-attention`,hidden:!0,children:"Needs attention"})]})]},s.id)})]})}),r.jsx(_e,{$position:"left",$visible:Y.left}),r.jsx(_e,{$position:"right",$visible:Y.right})]}),v&&r.jsx(kr,{role:"tabpanel",id:`${d}${v.id}-panel`,"aria-labelledby":`${d}${v.id}-tab`,children:v.content})]})}const Fe=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-tabs-panel);
  /* Fills the panel and constrains children, so a flex:1 tab body can scroll. */
  flex: 1;
  min-height: 0;
`,xr=u.div`
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
`,Ce=u.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-left: var(--gap-trailing-mark);
  vertical-align: middle;
  border-radius: var(--radius-circle);
  background: var(--color-warn-mark);
`,$r=u.button`
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
`,kr=u.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,jr={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},Sr={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function _r(e){return jr[e]??Sr}function tn({label:e,symbol:t,name:n=!1,...o}){const a=_r(e);return r.jsxs(Mr,{$bg:a.bg,$fg:a.fg,$border:a.border,$symbol:t!==void 0,$name:n,...o,children:[t!==void 0&&r.jsx(Tr,{$name:n,"aria-hidden":"true",children:r.jsx(zr,{children:t})}),t!==void 0?r.jsx(Ar,{$name:n,children:e}):e]})}const Mr=u.span`
  display: ${({$symbol:e})=>e?"inline-flex":"inline-block"};
  ${({$symbol:e,$name:t})=>e?C`padding: 0;`:t?C`padding: 0 var(--gap-glyph);`:C`padding: var(--inset-chip);`}
  border-radius: var(--radius-regular);
  ${({$symbol:e})=>e&&"overflow: hidden;"}
  ${({$name:e})=>e?C`
          font-size: var(--font-size-compact);
        `:C`
          font-size: var(--font-size-caption);
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        `}

  ${({$bg:e,$fg:t,$border:n})=>C`
    background: ${e};
    color: ${t};
    border: 1px solid ${n};
  `}
`,Tr=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({$name:e})=>e?C`padding: 0 var(--gap-glyph);`:C`padding: var(--inset-chip);`}
  background: currentColor;
`,zr=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  font-weight: 800;
  line-height: var(--line-height-flush);
  color: var(--color-surface-panel);
`,Ar=u.span`
  ${({$name:e})=>e?C`padding: 0 var(--gap-glyph) 0 var(--gap-glyph-tray);`:C`padding: var(--inset-chip);`}
`,rn=f.forwardRef(function({pressed:t=!1,tone:n="go",size:o="md",type:a="button","aria-pressed":i,...c},d){return r.jsx($t,{ref:d,type:a,tone:t?n:void 0,size:o,pressed:t,"aria-pressed":i??t,...c})}),Ee={w:5,h:4},Ir=8,Rr=7;function nn(e,t){return e===void 0||t===void 0?"normal":e<Ee.w||t<Ee.h?"tiny":e<Ir||t<Rr?"small":"normal"}const Je=1.6,Fr=1/Je;function on(e,t){if(e===void 0||t===void 0||t===0)return{shape:"square",aspect:1};const n=e/t;return n>=Je?{shape:"landscape",aspect:n}:n<=Fr?{shape:"portrait",aspect:n}:{shape:"square",aspect:n}}export{_t as C,Ur as D,Vr as F,_e as I,qr as M,Qr as R,Jr as S,Ze as T,Yr as a,Zr as b,Gr as c,Hr as d,Wr as e,en as f,tn as g,rn as h,Ee as i,Kr as j,Xr as k,kt as l,St as m,nn as n,on as o,jt as p,je as q,br as s,Yt as u};
