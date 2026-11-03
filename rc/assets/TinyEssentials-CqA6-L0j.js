import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import u,{css as S,keyframes as He}from"./ext-styled-components-DAuodqsN.js";import{Y as ct,G as dt,k as J,V as We,N as ke,E as te,i as ut,g as ft,T as xe,S as Ge,h as pt}from"./contributionsRead-BFejorZu.js";import{r as f}from"./ext-react-C0MU9AHG.js";import{E as Ue,ad as Ke,ae as ne,bu as ht,bm as qe,bf as Ve,bC as gt,aC as mt,bD as _e,bl as Se,af as vt,br as bt,at as xt,aT as wt,ab as ee,bE as Te,bF as yt,aw as Ye,bG as $t,a3 as jt,av as kt,$ as he,bH as _t,e as St,P as Tt,a7 as Me,ac as Mt}from"./ModalSaveBar-DS9awcVu.js";import{l as Xe,cK as ze,b7 as ae,b2 as zt}from"./view-clock-formula-BYUb7mdN.js";import"./ksp-enum-names-BvxYujrS.js";import"./logger-2_QM1wvD.js";import"./screen-B9UpduLR.js";function Ze(e,t){if(!t)return!0;const n=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(n)||e.key.toLowerCase().includes(n)}function Rt(e,t,n=Ze){return e.filter(o=>n(o,t))}function Ft(e,t="Other"){const n=new Map;for(const o of e){const a=o.group??t;let i=n.get(a);i||(i=[],n.set(a,i)),i.push(o)}return[...n.entries()].sort(([o],[a])=>o.localeCompare(a))}function At(e){return e.flatMap(([,t])=>t)}function Re(e,t,n){return n===0?-1:Math.max(0,Math.min(e+t,n-1))}function Et({id:e,groups:t,flatOptions:n,activeIndex:o,selectedKey:a,getOptionId:i,onHoverIndex:s,onSelectKey:l,renderItem:c,emptyLabel:p="No matches","aria-label":g,placement:h="below"}){return r.jsx(Ct,{role:"listbox",id:e,"aria-label":g,$placement:h,onMouseDown:m=>m.preventDefault(),children:n.length===0?r.jsx(Ue,{layout:"fill",children:p}):t.map(([m,b],w)=>r.jsxs(It,{role:"group","aria-labelledby":`${e}-group-${w}`,children:[r.jsx(Lt,{id:`${e}-group-${w}`,"aria-hidden":"true",children:m}),b.map(y=>{const z=n.indexOf(y),F=z===o;return r.jsx(Bt,{id:i(y.key),role:"option","aria-selected":F,$active:F,$selected:y.key===a,onPointerDown:L=>{L.preventDefault(),l(y.key)},onMouseEnter:()=>s(z),children:c?c(y):y.label??y.key},y.key)})]},m))})}const Ct=u.div`
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
`,It=u.div``,Lt=u.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-raised);
`;function Ot(e,t){return e?"background: var(--color-surface-panel);":t?ct("go"):"background: transparent;"}const Bt=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-menu-item);
  cursor: pointer;
  ${({$active:e,$selected:t})=>Ot(e,t)}
  /* Focus stays on the input, so the highlighted option carries the focus colour as an inset bar. */
  box-shadow: ${({$active:e})=>e?"inset 3px 0 0 var(--color-focus)":"none"};

  &:hover {
    background: var(--color-surface-panel);
  }

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`;function _n({tone:e,children:t,live:n=!1,pulse:o,...a}){const i=n?{role:"status","aria-live":"polite"}:{};return r.jsxs(Nt,{"data-tone":e,...i,...a,children:[r.jsx(Dt,{"data-tone":e,$pulse:o,"aria-hidden":"true"}),r.jsx(Ht,{children:t})]})}const Nt=u.div`
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

  border-color: ${({"data-tone":e})=>dt(e)};
`,Pt=He`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,Dt=u.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  flex-shrink: 0;

  background: ${({"data-tone":e})=>J[e]};

  /* A looping pulse needs its own reduced-motion guard; the 1s/2s periods encode connection state. */
  ${({$pulse:e})=>e?S`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${Pt} ${e==="fast"?"1s":"2s"}
              var(--ease-emphasis) infinite;
          }
        `:""}
`,Ht=u.span`
  color: var(--color-text-primary);
  line-height: var(--line-height-body);
`;function Sn({checked:e,onChange:t,label:n,disabled:o,id:a,"aria-label":i}){return r.jsxs(Wt,{$disabled:o,children:[r.jsx(Gt,{type:"checkbox",id:a,checked:e,disabled:o,onChange:s=>t(s.target.checked),"aria-label":n?void 0:i}),r.jsx(Qe,{$checked:e,$disabled:o,children:r.jsx(Ut,{$checked:e,$disabled:o})}),n&&r.jsx(Kt,{children:n})]})}const Wt=u.label`
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
`,Qe=u.div`
  width: 28px;
  height: 14px;
  /* --radius-pill keeps the stadium shape through a height change. */
  border-radius: var(--radius-pill);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-surface-raised)":e?"var(--color-go-mark)":"var(--color-surface-raised)"};
  border: 1px solid ${({$checked:e,$disabled:t})=>t?"var(--color-border-strong)":e?"var(--color-go-mark)":"var(--color-border-strong)"};
  position: relative;
  flex-shrink: 0;
  transition: background var(--duration-base), border-color var(--duration-base);
`,Gt=u.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:focus-visible + ${Qe} {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Ut=u.div`
  position: absolute;
  /* Measured inside the border: the track is border-box, so its 1px border leaves a 26 by 12 box, and 2px on every side centres the 8px thumb at either end. */
  top: 2px;
  left: ${({$checked:e})=>e?"16px":"2px"};
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-text-faint)":e?"var(--color-accent-fg)":"var(--color-text-faint)"};
  transition: left var(--duration-base), background var(--duration-base);
`,Kt=u.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;function Tn({size:e=12,thickness:t=2,color:n="var(--color-accent-fg)","aria-label":o="Loading",...a}){return r.jsx(Vt,{...a,role:"status","aria-label":o,$size:e,$thickness:t,$color:n})}const qt=He`
  to { transform: rotate(360deg); }
`,Vt=u.span`
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
    animation: ${qt} 700ms linear infinite;
  }
`,Yt="is no longer available";function Mn({keys:e,value:t,onChange:n,clearable:o=!1,placeholder:a="Search...",subjectNoun:i="value",id:s,"aria-label":l}){const[c,p]=f.useState(""),[g,h]=f.useState(!1),[m,b]=f.useState(-1),w=f.useRef(null),y=f.useRef(null),z=f.useId(),F=f.useId(),L=f.useId(),A=v=>`${F}-${v}`,k=e.find(v=>v.key===t),T=t!==null&&t!==""&&k===void 0&&e.length>0,E=e.some(v=>v.common),U=f.useMemo(()=>Rt(c===""&&E?e.filter(v=>v.common):e,c,(v,d)=>Ze(v,d)||(v.summary?.toLowerCase().includes(d.toLowerCase())??!1)),[e,c,E]),W=f.useMemo(()=>Ft(U),[U]),R=f.useMemo(()=>At(W),[W]),V=f.useCallback(()=>{h(!0),p(""),b(-1)},[]),C=f.useCallback(()=>{h(!1),p(""),b(-1)},[]),Y=f.useCallback(v=>{n(v),C()},[n,C]),G=v=>{if(!g){(v.key==="Enter"||v.key==="ArrowDown")&&V();return}switch(v.key){case"Escape":v.stopPropagation(),C();break;case"ArrowDown":v.preventDefault(),b(d=>Re(d,1,R.length));break;case"ArrowUp":v.preventDefault(),b(d=>Re(d,-1,R.length));break;case"Enter":{const d=c!=="",j=m>=0?R[m]:d?R[0]:void 0;j&&Y(j.key);break}}};f.useEffect(()=>{if(!g)return;const v=d=>{w.current?.contains(d.target)||C()};return document.addEventListener("pointerdown",v),()=>document.removeEventListener("pointerdown",v)},[g,C]);const X=g?c:k?.summary??k?.label??t??"",N=g&&m>=0?R[m]:void 0;return r.jsxs(Xt,{ref:w,children:[r.jsx(Zt,{ref:y,id:s,"aria-label":l,value:X,placeholder:g&&E?`Search all ${e.length} fields...`:t?void 0:a,$hasValue:!!t&&!g,$retired:T&&!g,"aria-invalid":T&&!g?!0:void 0,"aria-describedby":T&&!g?L:void 0,onFocus:V,onBlur:C,onChange:v=>{p(v.target.value),b(-1)},onKeyDown:G,role:"combobox","aria-expanded":g,"aria-controls":z,"aria-autocomplete":"list","aria-activedescendant":N?A(N.key):void 0}),T&&!g&&r.jsx(Jt,{id:L,children:`This ${i} ${Yt}. Pick another.`}),o&&t&&!g&&r.jsx(Qt,{type:"button","aria-label":`Clear ${i}`,onClick:()=>{n(null),C()},children:"×"}),g&&r.jsx(Et,{id:z,groups:W,flatOptions:R,activeIndex:m,selectedKey:t,getOptionId:A,onHoverIndex:b,onSelectKey:Y,"aria-label":l??"Data keys",renderItem:v=>r.jsxs(r.Fragment,{children:[r.jsx(er,{children:v.label??v.key}),v.unit&&r.jsx(tr,{children:v.unit})]})})]})}const Xt=u.div`
  position: relative;
  flex-grow: 1;
  min-width: 0;
`,Zt=u.input`
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

  ${Ke}

  &::placeholder {
    color: var(--color-text-faint);
  }

  @media (pointer: coarse) {
    min-height: var(--touch-target);
    padding: var(--inset-field-touch);
    /* Under a coarse pointer the large step is 17px, above the 16px at which iOS Safari zooms on focus. */
    font-size: var(--font-size-lg);
  }
`,Qt=u.button`
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

  ${Ke}

  @media (pointer: coarse) {
    min-width: var(--touch-target);
    min-height: var(--touch-target);
    right: 0;
  }
`,Jt=u.div`
  color: var(--color-nogo-text);
  font-size: var(--font-size-compact);
  margin-top: var(--gap-caption);
`,er=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);

  @media (pointer: coarse) {
    font-size: var(--font-size-prose);
  }
`,tr=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  margin-left: var(--gap-trailing-mark);
`,Fe={left:!1,right:!1};function rr(e){const[t,n]=f.useState(Fe),o=f.useRef(Fe);return f.useEffect(()=>{if(!e)return;const a=()=>{const l=e.scrollLeft>1,c=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===l&&o.current.right===c||(o.current={left:l,right:c},n(o.current))};a(),e.addEventListener("scroll",a,{passive:!0});const i=typeof ResizeObserver>"u"?null:new ResizeObserver(a);i?.observe(e);for(const l of Array.from(e.children))i?.observe(l);const s=new MutationObserver(()=>{for(const l of Array.from(e.children))i?.observe(l);a()});return s.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",a),i?.disconnect(),s.disconnect()}},[e]),t}const Ae=u.div`
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
`,nr=6,or=3,ue={track:8,hub:4,needle:.92},ar={regular:{size:16,drop:18},large:{size:24,drop:32}};function q(e,t,n,o){const a=o*Math.PI/180;return{x:e+n*Math.sin(a),y:t-n*Math.cos(a)}}function Ee(e,t,n,o,a){const i=q(e,t,n,o),s=q(e,t,n,a),l=a-o,c=Math.abs(l)>180?1:0,p=l>=0?1:0;return`M ${i.x.toFixed(2)} ${i.y.toFixed(2)} A ${n} ${n} 0 ${c} ${p} ${s.x.toFixed(2)} ${s.y.toFixed(2)}`}function ir({value:e,min:t,max:n,width:o=120,height:a=120,startAngle:i=0,sweep:s=360,wrap:l=!1,zones:c,ticks:p,valueLabel:g,readout:h,format:m,needleColor:b="var(--color-text-primary)",trackColor:w="var(--color-border-subtle)","aria-label":y}){const z=ne(e),{shown:F,held:L,caption:A,band:k}=z,{anchor:T,tip:E}=ht(A),U=F?.magnitude??Number.NaN,W=Number.isFinite(U)?F:null,R=t.magnitude,V=n.magnitude,C=V-R,Y=Number.isFinite(U)?U:R,G=C>0?l?R+((Y-R)%C+C)%C:Math.max(R,Math.min(V,Y)):R,X=W!=null,N=W==null?null:{magnitude:l?G:U,unit:W.unit},v=g??(N===null?null:We(N,{format:m})),d=N===null?ke:te(N,{format:m}),j=W==null||k===null?null:Xe(k,W.unit)??null,$=h!==void 0&&s<=180,_=$?ue.track:nr,I=$?ue.hub:or,P=h===void 0?null:ar[h],D=o/2,M=$&&P!==null?Math.min((o-_)/2,a-_-P.drop):Math.min(o,a)/2-_-2,O=$?M+_/2:a/2,oe=x=>{const B=C>0?(x-R)/C:0;return i+B*s},Z=x=>x.max(t).min(n),Q=x=>oe(x.magnitude),de=x=>s!==0?(x-i)/s:0,we=j!==null&&qe(de(oe(G)),[de(Q(Z(j.lo))),de(Q(Z(j.hi)))],Ve({wraps:l}))?j:null,ye=s>=360,$e=q(D,O,M*($?ue.needle:.88),oe(G));return r.jsxs(sr,{...vt(z),...T,...X?{role:"meter","aria-label":Se(y,A),..._e(A),"aria-valuenow":G,"aria-valuemin":R,"aria-valuemax":V,"aria-valuetext":d}:{role:"img","aria-label":Se(`${y}: ${d}`,A),..._e(A)},children:[r.jsxs("svg",{width:o,height:a,viewBox:`0 0 ${o} ${a}`,"aria-hidden":"true",style:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto",overflow:$?"visible":void 0},children:[M>0&&(ye?r.jsx("circle",{cx:D,cy:O,r:M,fill:"none",stroke:w,strokeWidth:_}):r.jsx("path",{d:Ee(D,O,M,i,i+s),fill:"none",stroke:w,strokeWidth:_,strokeLinecap:"round"})),M>0&&!ye&&c?.flatMap(x=>{const B=Z(x.from.min(x.to)),H=Z(x.from.max(x.to));return H.greaterThan(B)?[B.greaterThan(t)?null:i,n.greaterThan(H)?null:i+s].flatMap(K=>{if(K===null)return[];const re=q(D,O,M,K);return[r.jsx("circle",{"data-dial-cap":"",cx:re.x,cy:re.y,r:_/2,fill:x.color},`cap-${x.color}-${K}`)]}):[]}),M>0&&c?.map(x=>{const B=Z(x.from.min(x.to)),H=Z(x.from.max(x.to));return H.greaterThan(B)?r.jsx("path",{d:Ee(D,O,M,Q(B),Q(H)),fill:"none",stroke:x.color,strokeWidth:_,strokeLinecap:"butt"},`zone-${x.color}-${Q(B)}-${Q(H)}`):null}),M>0&&p?.map(x=>{const B=x.value.magnitude,H=oe(B),K=q(D,O,M,H),re=q(D,O,M-_,H),je=q(D,O,M-_-8,H);return r.jsxs("g",{children:[r.jsx("line",{x1:re.x,y1:re.y,x2:K.x,y2:K.y,stroke:"var(--color-text-faint)",strokeWidth:1}),x.label&&r.jsx("text",{x:je.x,y:je.y,textAnchor:"middle",dominantBaseline:"middle",fontSize:9,fill:"var(--color-text-faint)",children:x.label})]},`tick-${B}-${x.label??""}`)}),M>0&&we!==null&&["lo","hi"].map(x=>{const B=Q(Z(we[x])),H=q(D,O,M-_/2,B),K=q(D,O,M+_/2,B);return r.jsx(gt,{end:x,x1:H.x,y1:H.y,x2:K.x,y2:K.y},x)}),M>0&&X&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:D,y1:O,x2:$e.x,y2:$e.y,stroke:b,strokeWidth:2,strokeLinecap:"round"}),r.jsx("circle",{cx:D,cy:O,r:I,fill:b})]}),r.jsxs("text",{x:D,y:$&&P!==null?O+P.drop:O+M*.55,textAnchor:"middle",fontSize:$&&P!==null?P.size:13,fontWeight:$?void 0:"bold",fill:v===null?"var(--color-text-muted)":"var(--color-text-primary)",children:[v??ke,L&&v!==null&&r.jsx(mt,{size:$?7:6,figureSize:$&&P!==null?P.size:13})]})]}),E]})}const sr=u.div`
  display: block;
  max-width: 100%;
`;function zn({rows:e,segment:t="filters",emptyLabel:n="Nothing matches the filter"}){const o=bt({segment:t}),a=e.filter(i=>o.matches(i.searchText));return r.jsx(xt,{filter:o,children:a.length>0?r.jsx(ut,{gap:"related",children:a.map(i=>r.jsx("div",{children:i.node},i.id))}):r.jsx(Ue,{children:n})})}function lr({lit:e,of:t,tone:n="neutral",label:o}){const a=e===null?"unknown":`${e} of ${t}`;return r.jsx(cr,{role:"img","aria-label":o===void 0?a:`${o} ${a}`,"data-level-bars":"",children:Array.from({length:t},(i,s)=>r.jsx(dr,{$fill:e!==null&&s<e?J[n]:null,$height:(s+1)/t},s))})}const cr=u.span`
  display: inline-flex;
  align-items: flex-end;
  gap: var(--gap-signal-bars);
  height: 0.8em;
  flex: none;
`,dr=u.span`
  width: 0.22em;
  height: ${({$height:e})=>`${Math.round(e*100)}%`};
  background: ${({$fill:e})=>e??"transparent"};
  border: 1px solid ${({$fill:e})=>e??"var(--color-border-subtle)"};
`,ur="8px";function Je({percent:e,tone:t,fillColor:n,trackHeld:o=!1,fillHeld:a=!1,children:i,...s}){return r.jsxs(fr,{"data-track-held":o?"":void 0,...s,children:[e!==null&&r.jsx(hr,{$tone:t,$fillColor:n,$held:a,"data-fill-held":a?"":void 0,style:{width:`${e}%`}}),o&&r.jsx(pr,{"data-track-hatch":"",style:{left:`${e??0}%`}}),i]})}const fr=u.div`
  width: 100%;
  border-radius: var(--radius-pill);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  overflow: hidden;
  /* Positioned for the fill only: this overflow rounds the fill's ends and would clip any mark drawn over it. */
  position: relative;
  height: ${ur};
`,pr=u.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(
    -45deg,
    ${J.warn} 0 1px,
    transparent 1px 4px
  );
  opacity: 0.55;
  pointer-events: none;
`,hr=u.div`
  height: 100%;
  border-radius: var(--radius-pill);
  transition: width var(--duration-slow) var(--ease-standard);
  /* A held reading dims the fill, not the hue and not the whole bar, so a label beside it stays readable. */
  ${({$held:e})=>e?"opacity: 0.55;":""}
  background: ${({$tone:e,$fillColor:t})=>t??J[e]};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function Rn({label:e,value:t,capacity:n,format:o,tone:a="neutral",fillColor:i,valueLabel:s,valueLabelNode:l,layout:c="stacked",hideLabel:p=!1,statement:g=!1,...h}){const m=Ce(t),b=Ce(n),w=gr(m.figure,n===void 0?void 0:b.figure);if(w===null||!Number.isFinite(w))return p?null:r.jsx(ot,{layout:c,label:e,display:r.jsx(ft,{}),...h,children:r.jsx(Je,{percent:null,tone:a,"aria-hidden":"true"})});const y=Math.min(1,Math.max(0,w)),z={label:e,layout:c,hideLabel:p,statement:g,pct:Math.round(y*100),tone:a,fillColor:i,trackHeld:b.reading?.state==="held"&&!ze(b.figure),fillHeld:m.reading?.state==="held"&&!ze(m.figure),...h},F=me(1,ge(b.reading,b.figure,b.figure));if(n!==void 0)return r.jsx(wt,{of:m.figure?.unit,format:o,children:r.jsx(vr,{...z,value:t,capacity:n,shown:m,held:b,endBounds:F,at:y,valueLabel:s,valueLabelNode:l})});const L=me(y,ge(m.reading,m.figure,null));return r.jsx(nt,{...z,bounds:L,endBounds:F,display:l??(s===void 0?r.jsx(ee,{value:t,format:o}):r.jsx(tt,{caption:ce(t),children:s})),spoken:rt(s===void 0?te(m.figure,{format:o}):et(s,ce(t)),L,F)})}function ce(e){const{held:t,caption:n}=ne(e??null);return t?n:null}function et(e,t){return t===null?e:`${e}, ${t}`}function tt({caption:e,children:t}){return e===null?r.jsx(r.Fragment,{children:t}):r.jsx(Ye,{caption:e,children:t})}function Ce(e){return typeof e!="object"||e===null||!("state"in e)?{figure:e??null,reading:null}:{figure:e.value??null,reading:e}}function gr(e,t){return e===null||t===null||t!==void 0&&!t.isPositive()?null:(t===void 0?e:e.dividedBy(t)).magnitude}function ge(e,t,n){if(e===null||e.reckoning.status!=="available"||t===null)return null;const o=Xe(e.reckoning.band,t.unit);if(!o)return null;const a={loSaid:o.lo,hiSaid:o.hi,kind:o.kind};return n===null?{lo:ae(o.lo,0),hi:ae(o.hi,0),...a}:n.isPositive()?{lo:ae(o.lo.dividedBy(n),0),hi:ae(o.hi.dividedBy(n),0),...a}:null}function me(e,t){return t===null?null:qe(e,[t.lo,t.hi],Ve())?t:null}function rt(e,t,n,o){const a=(s,l)=>{const c=te(s.loSaid,o),p=te(s.hiSaid,o);return`${l}with bands at ${c} and ${p}`},i=[t===null?null:a(t,""),n===null?null:a(n,"capacity ")].filter(s=>s!==null);return i.length===0?e:`${e}, ${i.join(", ")}`}function mr(e){if(!Number.isFinite(e))return 0;const t=Math.min(1,Math.max(0,e));return Math.round(t*1e4)/100}function ie(e){const t=mr(e),n=t<=0?0:t>=100?-2:-1;return{style:{left:`${t}%`,transform:`translateX(${n}px)`}}}function nt({label:e,layout:t,hideLabel:n,statement:o,pct:a,tone:i,fillColor:s,trackHeld:l,fillHeld:c,display:p,spoken:g,bounds:h,endBounds:m,...b}){return r.jsxs(ot,{layout:t,label:e,display:p,hideHead:n,statement:o,...b,children:[r.jsx(Je,{percent:a,tone:i,fillColor:s,trackHeld:l,fillHeld:c,role:"meter","aria-label":e,"aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":g}),(h!==null||m!==null)&&r.jsxs(jr,{"aria-hidden":"true",children:[h!==null&&r.jsxs(r.Fragment,{children:[r.jsx(se,{"data-bound":"lo",...ie(h.lo)}),r.jsx(se,{"data-bound":"hi",...ie(h.hi)})]}),m!==null&&r.jsxs(r.Fragment,{children:[r.jsx(se,{"data-end-bound":"lo",...ie(m.lo)}),r.jsx(se,{"data-end-bound":"hi",...ie(m.hi)})]})]})]})}function ot({layout:e,label:t,display:n,hideHead:o=!1,statement:a=!1,children:i,...s}){return o?r.jsxs(fe,{$row:!1,...s,children:[r.jsx(pe,{$row:!1,children:i}),a&&r.jsx($r,{"data-meter-part":"statement",children:n})]}):e==="row"?r.jsxs(fe,{$row:!0,"data-meter-row":"",...s,children:[r.jsx(Le,{"data-meter-part":"label",children:t}),r.jsx(pe,{$row:!0,"data-meter-part":"bar",children:i}),r.jsx(Oe,{$row:!0,"data-meter-part":"figure",children:n})]}):r.jsxs(fe,{$row:!1,...s,children:[r.jsxs(yr,{children:[r.jsx(Le,{children:t}),r.jsx(Oe,{$row:!1,children:n})]}),r.jsx(pe,{$row:!1,children:i})]})}function vr({value:e,capacity:t,shown:n,held:o,at:a,valueLabel:i,valueLabelNode:s,...l}){const c=i===void 0,p=Te(c?n.figure:void 0),g=Te(c?o.figure:void 0),h=p??g??{},m=ce(e)??ce(t),b=s??(i!==void 0?r.jsx(tt,{caption:m,children:i}):l.layout==="row"?r.jsxs(kr,{$marked:l.fillHeld||l.trackHeld,children:[r.jsx(ee,{value:e,hideUnitInGroup:!0})," / ",r.jsx(ee,{value:t}),(l.fillHeld||l.trackHeld)&&r.jsx(yt,{"aria-hidden":"true","data-held-mark":""})]}):r.jsxs(r.Fragment,{children:[r.jsx(ee,{value:e})," / ",r.jsx(ee,{value:t})]})),w=i===void 0?`${te(n.figure,h)} of ${te(o.figure,h)}`:et(i,m),y=me(a,ge(n.reading,n.figure,o.figure));return r.jsx(nt,{...l,display:b,spoken:rt(w,y,l.endBounds,h),bounds:y})}const ve=48;function Fn({children:e,...t}){const n=f.useRef(null);return f.useLayoutEffect(()=>{const o=n.current;if(!o||typeof ResizeObserver>"u")return;const a=()=>{o.clientWidth!==0&&o.toggleAttribute("data-figures-below",!br(o))};let i=0;const s=()=>{cancelAnimationFrame(i),i=requestAnimationFrame(a)},l=new ResizeObserver(s),c=()=>{l.disconnect(),l.observe(o);for(const g of at(o))l.observe(g)},p=new MutationObserver(c);return p.observe(o,{childList:!0,subtree:!0}),c(),a(),()=>{cancelAnimationFrame(i),l.disconnect(),p.disconnect()}},[]),r.jsx(wr,{ref:n,...t,children:e})}const An=u.div.attrs({"data-meter-row-group":""})`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  row-gap: var(--gap-meter-rows);
  min-width: 0;

  & > * {
    grid-column: 1 / -1;
    min-width: 0;
  }
`;function at(e){return Array.from(e.querySelectorAll(':scope > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row] > [data-meter-part="figure"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="figure"]'))}function br(e){const t=at(e);if(t.length===0)return!0;let n=0,o=0;for(const c of t)c.dataset.meterPart==="label"?n=Math.max(n,xr(c)):o=Math.max(o,c.scrollWidth);const a=getComputedStyle(e),i=c=>Number.parseFloat(c)||0,s=i(a.columnGap),l=e.clientWidth-i(a.paddingLeft)-i(a.paddingRight);return n+s+ve+s+o<=l}function xr(e){const t=e.style.whiteSpace;e.style.whiteSpace="nowrap";const n=e.scrollWidth;return e.style.whiteSpace=t,n}const wr=u.div`
  display: grid;
  grid-template-columns:
    minmax(min-content, max-content)
    minmax(${ve}px, 1fr)
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
      minmax(${ve}px, 1fr);
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
`,Ie="1px",fe=u.div`
  display: flex;
  width: 100%;
  min-width: 0;
  ${({$row:e})=>e?S`
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          column-gap: var(--gap-meter-columns);
          row-gap: var(--gap-caption);
        `:S`
          flex-direction: column;
          gap: var(--gap-caption);
        `}
`,yr=u.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--gap-label-value);
  min-width: 0;
  /* The value may drop to its own line at narrow widths rather than crushing the label. */
  flex-wrap: wrap;
`,Le=u.span`
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
`,Oe=u.span`
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
`,$r=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,jr=u.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,pe=u.div`
  position: relative;
  ${({$row:e})=>e?S`
          flex: 1 1 28px;
          min-width: 28px;
        `:""}
`,kr=u($t)`
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
`,se=u.div`
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
`,_r=u.div`
  display: ${({$size:e})=>e==="hero"?"flex":"inline-flex"};
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({$tone:e})=>xe[e]};
  ${({$size:e})=>e==="hero"?S`
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
        `:S`
          align-items: baseline;
          gap: var(--gap-value-tag);
          /* Display tier: the type scale stops at lg, so this stays literal. */
          font-size: 22px;
        `}
`;function En({size:e="inline",tone:t="neutral",...n}){return r.jsx(_r,{$size:e,$tone:t,...n})}const Cn=u.span`
  font-size: var(--font-size-caption);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-transform: uppercase;
`;function Be(e,t,n,o){const a=t-e;if(a===0){const i=(n+o)/2;return()=>i}return i=>n+(i-e)/a*(o-n)}function Sr(e,t,n,o){return e.map((a,i)=>`${i===0?"M":"L"}${n(a).toFixed(2)},${o(t[i]).toFixed(2)}`).join(" ")}function Tr({values:e,width:t,height:n,color:o="var(--color-text-primary)",strokeWidth:a=1.5,yDomain:i,showZeroBaseline:s=!1,background:l=!0,"aria-label":c="Trend sparkline"}){const p=f.useMemo(()=>e.filter(k=>Number.isFinite(k)),[e]),g=`sparkline-fill-${f.useId().replace(/:/g,"")}`,h=f.useMemo(()=>{if(i)return i;if(p.length===0)return[0,1];let k=p[0],T=p[0];for(const E of p)E<k&&(k=E),E>T&&(T=E);if(k===T){const E=Math.abs(k)>0?Math.abs(k)*.01:1;return[k-E,T+E]}return[k,T]},[i,p]);if(t<=0||n<=0||p.length<2)return r.jsx("svg",{width:Math.max(0,t),height:Math.max(0,n),role:"img","aria-label":c,style:{display:"block"},children:r.jsx("title",{children:c})});const m=a/2,b=p.map((k,T)=>T),w=Be(0,p.length-1,0,t),y=Be(h[0],h[1],n-m,m),z=Sr(b,p,w,y),F=`${z} L ${t},${n} L 0,${n} Z`,L=s&&h[0]<=0&&h[1]>=0,A=L?y(0):null;return r.jsxs("svg",{width:t,height:n,role:"img","aria-label":c,style:{display:"block"},children:[r.jsx("title",{children:c}),l&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:g,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:o,stopOpacity:"0.25"}),r.jsx("stop",{offset:"100%",stopColor:o,stopOpacity:"0.02"})]})}),L&&A!==null&&r.jsx("line",{x1:0,y1:A,x2:t,y2:A,stroke:"var(--color-border-subtle)",strokeWidth:1}),l&&r.jsx("path",{d:F,fill:`url(#${g})`,stroke:"none"}),r.jsx("path",{d:z,stroke:o,strokeWidth:a,fill:"none",strokeLinejoin:"round",strokeLinecap:"round"})]})}const it=240,Mr=8;function zr(e,t){if(e<=0||t<2)return!1;const n=t*it+(t-1)*Mr;return e>=n}function In({tabs:e,activeId:t,onChange:n,expandWhenRoomy:o=!1,"aria-label":a,"aria-labelledby":i,className:s}){const l=f.useId(),c=f.useMemo(()=>e.map((d,j)=>({...d,id:d.id??`tab-${j}`})),[e]),p=t!==void 0,[g,h]=f.useState(()=>t??c[0]?.id??""),m=p?t:g,b=c.find(d=>d.id===m),w=b&&!b.disabled?b:c.find(d=>!d.disabled)??b??c[0],y=f.useCallback(d=>{p||h(d),n?.(d)},[p,n]),z=f.useMemo(()=>c.filter(d=>!d.disabled),[c]),{ref:F,size:L}=jt({w:0,h:0}),A=o&&zr(L.w,z.length),k=f.useRef(new Map),T=f.useRef(null),E=f.useRef(null),[U,W]=f.useState(!1),[R,V]=f.useState(null),C=f.useCallback(d=>{T.current=d,V(d)},[]),Y=rr(R),[G,X]=f.useState(null);f.useLayoutEffect(()=>{const d=T.current;if(!d)return;const j=()=>{W(_=>{_||(E.current=d.scrollWidth);const I=E.current;return I==null?!1:I>d.clientWidth})};j();const $=new ResizeObserver(j);return $.observe(d),()=>$.disconnect()},[A,c.length]),f.useLayoutEffect(()=>{const d=T.current,j=w?k.current.get(w.id):void 0;if(!d||!j){X(null);return}const $=()=>{const I=k.current.get(w?.id??"");I&&X(P=>P&&P.left===I.offsetLeft&&P.width===I.offsetWidth?P:{left:I.offsetLeft,width:I.offsetWidth})};$();const _=new ResizeObserver($);return _.observe(d),_.observe(j),()=>_.disconnect()},[w?.id,c.length,A]);const N=f.useCallback((d,j)=>{const $=c.length;for(let _=1;_<=$;_++){const I=c[((d+j*_)%$+$)%$];if(!(!I||I.disabled)){y(I.id),k.current.get(I.id)?.focus();return}}},[c,y]),v=f.useCallback(d=>{const j=c.findIndex($=>$.id===w?.id);if(!(j<0))switch(d.key){case"ArrowRight":case"ArrowDown":d.preventDefault(),N(j,1);break;case"ArrowLeft":case"ArrowUp":d.preventDefault(),N(j,-1);break;case"Home":d.preventDefault(),N(-1,1);break;case"End":d.preventDefault(),N(c.length,-1);break}},[c,w?.id,N]);return A?r.jsx(Ne,{ref:F,"data-tabs-root":"",className:s,children:r.jsx(kt,{minColWidth:`${it}px`,align:"start",gap:"related-comfortable",children:z.map(d=>r.jsxs(Ge,{children:[r.jsxs(pt,{as:"h3",$rule:!0,children:[d.label,d.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(Pe,{"aria-hidden":"true"}),r.jsx(he,{children:", needs attention"})]})]}),d.content]},d.id))})}):r.jsxs(Ne,{ref:F,"data-tabs-root":"",className:s,children:[r.jsxs(Rr,{children:[r.jsx(Fr,{ref:C,children:r.jsxs(Ar,{role:"tablist","aria-label":a,"aria-labelledby":i,children:[G&&r.jsx(Er,{"aria-hidden":"true",style:{left:G.left,width:G.width}}),c.map(d=>{const j=d.id===w?.id;return r.jsxs(Cr,{ref:$=>{$?k.current.set(d.id,$):k.current.delete(d.id)},role:"tab",type:"button",id:`${l}${d.id}-tab`,"aria-selected":j,"aria-controls":`${l}${d.id}-panel`,"aria-describedby":d.indicator?`${l}${d.id}-attention`:void 0,tabIndex:j?0:-1,disabled:d.disabled,$active:j,onClick:()=>y(d.id),onKeyDown:v,$compact:U,children:[d.label,d.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(Pe,{"aria-hidden":"true"}),r.jsx("span",{id:`${l}${d.id}-attention`,hidden:!0,children:"Needs attention"})]})]},d.id)})]})}),r.jsx(Ae,{$position:"left",$visible:Y.left}),r.jsx(Ae,{$position:"right",$visible:Y.right})]}),w&&r.jsx(Ir,{role:"tabpanel",id:`${l}${w.id}-panel`,"aria-labelledby":`${l}${w.id}-tab`,children:w.content})]})}const Ne=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-tabs-panel);
  /* Fills the panel and constrains children, so a flex:1 tab body can scroll. */
  flex: 1;
  min-height: 0;
`,Rr=u.div`
  position: relative;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Fr=u.div`
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
`,Ar=u.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  gap: var(--gap-tab);
  background: var(--color-surface-sunken);
  border-radius: var(--radius-pill);
  padding: var(--inset-tab-track);
  flex-wrap: nowrap;
`,Er=u.span`
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
`,Pe=u.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-left: var(--gap-trailing-mark);
  vertical-align: middle;
  border-radius: var(--radius-circle);
  background: var(--color-warn-mark);
`,Cr=u.button`
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

  ${_t}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
    /* Compact still applies on touch: a tab scrolled half out of view is a smaller target, not a bigger one. */
    ${({$compact:e})=>e?"padding: var(--inset-tab-compact-touch);":"padding: var(--inset-control-touch);"}
  }
`,Ir=u.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,Lr={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},Or={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function Br(e){return Lr[e]??Or}function Ln({label:e,symbol:t,name:n=!1,...o}){const a=Br(e);return r.jsxs(Nr,{$bg:a.bg,$fg:a.fg,$border:a.border,$symbol:t!==void 0,$name:n,...o,children:[t!==void 0&&r.jsx(Pr,{$name:n,"aria-hidden":"true",children:r.jsx(Dr,{children:t})}),t!==void 0?r.jsx(Hr,{$name:n,children:e}):e]})}const Nr=u.span`
  display: ${({$symbol:e})=>e?"inline-flex":"inline-block"};
  ${({$symbol:e,$name:t})=>e?S`padding: 0;`:t?S`padding: 0 var(--gap-glyph);`:S`padding: var(--inset-chip);`}
  border-radius: var(--radius-regular);
  ${({$symbol:e})=>e&&"overflow: hidden;"}
  ${({$name:e})=>e?S`
          font-size: var(--font-size-compact);
        `:S`
          font-size: var(--font-size-caption);
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        `}

  ${({$bg:e,$fg:t,$border:n})=>S`
    background: ${e};
    color: ${t};
    border: 1px solid ${n};
  `}
`,Pr=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({$name:e})=>e?S`padding: 0 var(--gap-glyph);`:S`padding: var(--inset-chip);`}
  background: currentColor;
`,Dr=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  font-weight: 800;
  line-height: var(--line-height-flush);
  color: var(--color-surface-panel);
`,Hr=u.span`
  ${({$name:e})=>e?S`padding: 0 var(--gap-glyph) 0 var(--gap-glyph-tray);`:S`padding: var(--inset-chip);`}
`;function Wr(e){return e===null||!e.capacity.isPositive()?null:e.amount.dividedBy(e.capacity).magnitude}const Gr=f.forwardRef(function({pressed:t=!1,tone:n="go",size:o="md",type:a="button","aria-pressed":i,...s},l){return r.jsx(St,{ref:l,type:a,tone:t?n:void 0,size:o,pressed:t,"aria-pressed":i??t,...s})}),be={w:5,h:4},Ur=8,Kr=7;function On(e,t){return e===void 0||t===void 0?"normal":e<be.w||t<be.h?"tiny":e<Ur||t<Kr?"small":"normal"}const st=1.6,qr=1/st;function Bn(e,t){if(e===void 0||t===void 0||t===0)return{shape:"square",aspect:1};const n=e/t;return n>=st?{shape:"landscape",aspect:n}:n<=qr?{shape:"portrait",aspect:n}:{shape:"square",aspect:n}}function Nn({title:e,essentials:t,equalRows:n=!1}){const o=n?void 0:t[0],a=n?t:t.slice(1),{rowsRef:i,drawn:s}=Vr(a),l=t.some(h=>h.urgent!==void 0),c=o!==void 0&&a.length===0&&o.label.toUpperCase()===e.toUpperCase(),p=o?.value!=null&&o.gauge?.style==="arc"?o.gauge:void 0,g=p!==void 0;return r.jsx(Tt,{panelTitle:e,fitToSize:!0,hoverTitle:!0,panelTrend:o?.trend===void 0?void 0:({w:h,h:m})=>r.jsx(Tr,{values:o.trend??[],width:h,height:m,"aria-label":`${o.label} trend`}),sections:r.jsxs(Ge,{full:!0,children:[r.jsx(Me,{visuallyHidden:!0,children:an(t.filter(h=>h.urgent!==!0))}),l&&r.jsx(Me,{visuallyHidden:!0,assertive:!0,additionsOnly:!0,children:sn(t).map(h=>r.jsx(f.Fragment,{children:`${h}. `},h))}),o!==void 0&&r.jsxs(ln,{"data-tiny-essential":"",children:[c||g?r.jsx(he,{as:"dt",children:o.label}):r.jsx(De,{children:o.label}),o.value!=null&&p!==void 0?r.jsx(en,{essential:o,gauge:p}):o.gauge===void 0?r.jsx(lt,{$tone:o.tone??"neutral",children:r.jsx(le,{essential:o})}):r.jsxs(cn,{$tone:o.tone??"neutral",children:[r.jsx(dn,{children:r.jsx(le,{essential:o})}),r.jsx(Jr,{essential:o,gauge:o.gauge})]})]}),a.length>0&&r.jsxs(pn,{ref:i,$equal:n,children:[a.slice(0,s).map(h=>r.jsxs(hn,{"data-tiny-essential":"",$equal:n,children:[r.jsx(De,{children:h.label}),r.jsx(gn,{$tone:h.tone??"neutral",children:r.jsx(le,{essential:h})})]},h.label)),a.slice(s).map(h=>r.jsxs(he,{as:"div",children:[r.jsx("dt",{children:h.label}),r.jsx("dd",{children:h.control===void 0?r.jsx(le,{essential:h}):h.control.label})]},h.label))]})]})})}function Vr(e){const t=f.useRef(null),[n,o]=f.useState(e.length),[a,i]=f.useState(0),s=e.map(l=>`${l.label}\0${l.word??Yr(l.value)}`).join("");return f.useLayoutEffect(()=>{o(e.length)},[s,a,e.length]),f.useLayoutEffect(()=>{const l=t.current?.closest("[data-panel-fit-body]"),c=l?.firstElementChild;!l||!c||n===0||Xr(c)>l.clientHeight&&o(n-1)}),f.useLayoutEffect(()=>{const l=t.current?.closest("[data-panel-fit-body]");if(!l||typeof ResizeObserver>"u")return;let c=l.clientHeight;const p=new ResizeObserver(()=>{l.clientHeight!==c&&(c=l.clientHeight,i(g=>g+1))});return p.observe(l),()=>p.disconnect()},[]),{rowsRef:t,drawn:n}}function Yr(e){try{return JSON.stringify(e)??""}catch{return String(e)}}function Xr(e){const t=[],n=[];for(const o of Array.from(e.querySelectorAll("[data-tiny-essential]"))){const a=o.getBoundingClientRect();t.push(a.top),n.push(a.bottom)}return t.length===0?0:Math.max(...n)-Math.min(...t)}function le({essential:e}){const{control:t}=e;return t!==void 0?r.jsx(Mt,{text:t.hint??t.title,children:r.jsx(Gr,{size:"sm",pressed:t.active,disabled:t.disabled,onClick:t.onPress,marked:t.held===void 0?null:{kind:"held",caption:t.held},"aria-label":t.title,children:t.label})}):r.jsxs(r.Fragment,{children:[e.level!==void 0&&r.jsx(lr,{lit:e.level.lit,of:e.level.of,tone:e.tone,label:e.label}),e.word!==void 0?e.word:r.jsx(Qr,{essential:e})]})}function Zr(e,t){return typeof e=="object"&&e!==null&&"state"in e?{...e,value:t.abs()}:t.abs()}function Qr({essential:e}){const{mark:t,value:n,decimals:o}=e,{held:a,shown:i}=ne(n),s=e.signed===!0&&i?.isFinite()===!0,l=s&&o!==void 0&&Math.abs(i.valueOf())<.5*10**-o,c=s&&(l||!i.isNegative())?"+":"",p=l?Zr(n,i):n,g=r.jsxs(r.Fragment,{children:[c,r.jsx(ee,{value:p,decimals:o,scale:"compact",elsewhere:t?.elsewhere===!0&&(a||t.kind===void 0)?t.caption:void 0})]});return t===void 0||a||t.kind===void 0?g:r.jsx(Ye,{kind:t.kind,elsewhere:t.elsewhere,caption:t.caption,children:g})}function Jr({essential:e,gauge:t}){const{shown:n,held:o}=ne(e.value),a=s=>Wr({amount:s.max(t.min).min(t.max).minus(t.min),capacity:t.max.minus(t.min)})??0,i=n==null?null:a(n);return r.jsxs(fn,{"aria-hidden":"true","data-tiny-gauge":"","data-held":o?"":void 0,viewBox:"0 0 100 1",preserveAspectRatio:"none",children:[(t.bands??[]).map(s=>r.jsx("rect",{x:a(s.from)*100,y:0,width:(a(s.to)-a(s.from))*100,height:1,fill:J[s.tone],opacity:.35},`${a(s.from)}-${a(s.to)}`)),i!==null&&r.jsx("rect",{"data-tiny-gauge-fill":"",x:0,y:0,width:i*100,height:1,fill:J[e.tone??"neutral"],opacity:o?.55:1})]})}function en({essential:e,gauge:t}){const{ref:n,room:o}=tn(),a=Math.min(o.w,rn),i=Math.min(o.h-nn,Math.round(a/2)+on),s=e.value;if(s==null)return null;const l=ne(s).shown;return r.jsx(un,{ref:n,children:r.jsx(ir,{startAngle:-90,sweep:180,value:s,min:t.min,max:t.max,zones:(t.bands??[]).map(c=>({from:c.from,to:c.to,color:J[c.tone]})),width:a,height:i,readout:"large","aria-label":l==null?e.label:`${e.label} ${We(l)}`})})}function tn(){const e=f.useRef(null),[t,n]=f.useState({w:200,h:110});return f.useLayoutEffect(()=>{const o=e.current?.closest("[data-panel-fit-body]"),a=o?.closest("[data-panel-body]");if(!o||!a||typeof ResizeObserver>"u")return;const i=()=>{const l=getComputedStyle(a),c=getComputedStyle(o),p=a.clientWidth-Number.parseFloat(l.paddingLeft)-Number.parseFloat(l.paddingRight),g=a.clientHeight-Number.parseFloat(l.paddingTop)-Number.parseFloat(l.paddingBottom)-Number.parseFloat(c.marginTop)-Number.parseFloat(c.marginBottom);p>0&&g>0&&n({w:Math.floor(p),h:Math.floor(g)})};i();const s=new ResizeObserver(i);return s.observe(a),()=>s.disconnect()},[]),{ref:e,room:t}}const rn=280,nn=16,on=40;function an(e){return e.filter(t=>t.word!==void 0).map(t=>`${t.label} ${t.word}`).join(", ")}function sn(e){return e.filter(t=>t.urgent===!0&&t.word!==void 0).map(t=>`${t.label} ${t.word}`)}function Pn(e,t,n){if(e.tiny===void 0||t===void 0||n===void 0)return!1;const o=e.minSize??be;return t<o.w||n<o.h}function Dn(e){return e.tiny!==void 0?zt:e.minSize}const ln=u.dl`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: var(--gap-tiny-content);
  margin: 0;
  min-width: 0;
`,lt=u.dd`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  margin: 0;
  /* Sized against the tile, which the fit body makes a query container. */
  font-size: clamp(
    var(--font-size-lg),
    20cqw,
    calc(var(--font-size-lg) * 2)
  );
  font-weight: 700;
  line-height: var(--line-height-tight);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({$tone:e})=>xe[e]};
`,cn=u(lt)`
  flex-direction: column;
  align-items: stretch;
  gap: var(--gap-caption);
  line-height: var(--line-height-flush);
`,dn=u.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--gap-figure-parts);
`,un=u.dd`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`,fn=u.svg`
  display: block;
  width: 100%;
  height: var(--size-tiny-gauge);
`,De=u.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
`,pn=u.dl`
  ${({$equal:e})=>e?S`
          display: grid;
          grid-template-columns: auto auto;
          justify-content: space-between;
          /* The section around the rows shrinks to its content, so the rows take the tile's width from the fit body, which is the query container. */
          min-width: 100cqw;
          align-items: baseline;
          column-gap: var(--gap-label-value-tight);
          row-gap: var(--gap-related-packed);
        `:S`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--gap-row-wrap);
        `}
  margin: 0;
  max-width: 100%;
`,hn=u.div`
  ${({$equal:e})=>e?S`
          display: grid;
          grid-template-columns: subgrid;
          grid-column: 1 / -1;
          align-items: baseline;
          white-space: nowrap;
        `:S`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: baseline;
          column-gap: var(--gap-label-value-tight);
        `}
  max-width: 100%;
`,gn=u.dd`
  display: inline-flex;
  justify-content: flex-end;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  margin: 0;
  font-size: var(--font-size-value);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({$tone:e})=>xe[e]};
`;export{Et as C,Mn as D,zn as F,Ae as I,lr as L,Rn as M,En as R,Tr as S,it as T,Fn as a,Cn as b,Tn as c,_n as d,Sn as e,In as f,Ln as g,Gr as h,Pn as i,Nn as j,ir as k,An as l,be as m,Rt as n,At as o,On as p,Bn as q,Dn as r,zr as s,Ft as t,Re as u,rr as v};
