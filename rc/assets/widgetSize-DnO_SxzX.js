import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import u,{css as Z,keyframes as Ce}from"./ext-styled-components-DAuodqsN.js";import{X as Je,t as et,T as he,w as tt,N as ve,e as J,l as rt,j as nt,d as ot,S as at,k as it}from"./contributionsRead-DXmW8T6H.js";import{r as p}from"./ext-react-C0MU9AHG.js";import{E as De,ah as Pe,aa as Be,bn as st,bf as Le,b8 as Ne,bs as lt,az as ct,bt as we,be as ye,ai as dt,bk as ut,au as pt,aN as ft,a9 as te,bu as ke,bv as ht,ac as mt,bw as xt,a2 as bt,av as gt,_ as vt,bx as wt,e as yt}from"./ModalSaveBar-DLI7mfmD.js";import{l as We,cG as $e,b5 as ne}from"./view-clock-formula-CMi2uYN-.js";import"./ksp-enum-names-D0Qmqigb.js";import"./screen-B1crio3D.js";function kt(e,t){if(!t)return!0;const n=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(n)||e.key.toLowerCase().includes(n)}function $t(e,t,n=kt){return e.filter(o=>n(o,t))}function jt(e,t="Other"){const n=new Map;for(const o of e){const i=o.group??t;let a=n.get(i);a||(a=[],n.set(i,a)),a.push(o)}return[...n.entries()].sort(([o],[i])=>o.localeCompare(i))}function _t(e){return e.flatMap(([,t])=>t)}function je(e,t,n){return n===0?-1:Math.max(0,Math.min(e+t,n-1))}function St({id:e,groups:t,flatOptions:n,activeIndex:o,selectedKey:i,getOptionId:a,onHoverIndex:c,onSelectKey:d,renderItem:s,emptyLabel:f="No matches","aria-label":x,placement:w="below"}){return r.jsx(Mt,{role:"listbox",id:e,"aria-label":x,$placement:w,onMouseDown:h=>h.preventDefault(),children:n.length===0?r.jsx(De,{layout:"fill",children:f}):t.map(([h,b],v)=>r.jsxs(Tt,{role:"group","aria-labelledby":`${e}-group-${v}`,children:[r.jsx(It,{id:`${e}-group-${v}`,"aria-hidden":"true",children:h}),b.map(y=>{const T=n.indexOf(y),I=T===o;return r.jsx(Rt,{id:a(y.key),role:"option","aria-selected":I,$active:I,$selected:y.key===i,onPointerDown:F=>{F.preventDefault(),d(y.key)},onMouseEnter:()=>c(T),children:s?s(y):y.label??y.key},y.key)})]},h))})}const Mt=u.div`
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
`;function zt(e,t){return e?"background: var(--color-surface-panel);":t?Je("go"):"background: transparent;"}const Rt=u.div`
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
    min-height: 44px;
  }
`;function Or({tone:e,children:t,live:n=!1,pulse:o,...i}){const a=n?{role:"status","aria-live":"polite"}:{};return r.jsxs(At,{"data-tone":e,...a,...i,children:[r.jsx(Et,{"data-tone":e,$pulse:o,"aria-hidden":"true"}),r.jsx(Ot,{children:t})]})}const At=u.div`
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

  border-color: ${({"data-tone":e})=>et(e)};
`,Ft=Ce`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,Et=u.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  flex-shrink: 0;

  background: ${({"data-tone":e})=>he[e]};

  /* A looping pulse needs its own reduced-motion guard; the 1s/2s periods encode connection state. */
  ${({$pulse:e})=>e?Z`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${Ft} ${e==="fast"?"1s":"2s"}
              var(--ease-emphasis) infinite;
          }
        `:""}
`,Ot=u.span`
  color: var(--color-text-primary);
  line-height: var(--line-height-body);
`;function Cr({checked:e,onChange:t,label:n,disabled:o,id:i,"aria-label":a}){return r.jsxs(Ct,{$disabled:o,children:[r.jsx(Dt,{type:"checkbox",id:i,checked:e,disabled:o,onChange:c=>t(c.target.checked),"aria-label":n?void 0:a}),r.jsx(He,{$checked:e,$disabled:o,children:r.jsx(Pt,{$checked:e,$disabled:o})}),n&&r.jsx(Bt,{children:n})]})}const Ct=u.label`
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
`,He=u.div`
  width: 28px;
  height: 14px;
  /* --radius-pill keeps the stadium shape through a height change. */
  border-radius: var(--radius-pill);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-surface-raised)":e?"var(--color-go-mark)":"var(--color-surface-raised)"};
  border: 1px solid ${({$checked:e,$disabled:t})=>t?"var(--color-border-strong)":e?"var(--color-go-mark)":"var(--color-border-strong)"};
  position: relative;
  flex-shrink: 0;
  transition: background var(--duration-base), border-color var(--duration-base);
`,Dt=u.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:focus-visible + ${He} {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Pt=u.div`
  position: absolute;
  /* Measured inside the border: the track is border-box, so its 1px border leaves a 26 by 12 box, and 2px on every side centres the 8px thumb at either end. */
  top: 2px;
  left: ${({$checked:e})=>e?"16px":"2px"};
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-text-faint)":e?"var(--color-accent-fg)":"var(--color-text-faint)"};
  transition: left var(--duration-base), background var(--duration-base);
`,Bt=u.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;function Dr({size:e=12,thickness:t=2,color:n="var(--color-accent-fg)","aria-label":o="Loading",...i}){return r.jsx(Nt,{...i,role:"status","aria-label":o,$size:e,$thickness:t,$color:n})}const Lt=Ce`
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
    animation: ${Lt} 700ms linear infinite;
  }
`,Wt="is no longer available";function Pr({keys:e,value:t,onChange:n,clearable:o=!1,placeholder:i="Search...",subjectNoun:a="value",id:c,"aria-label":d}){const[s,f]=p.useState(""),[x,w]=p.useState(!1),[h,b]=p.useState(-1),v=p.useRef(null),y=p.useRef(null),T=p.useId(),I=p.useId(),F=p.useId(),z=m=>`${I}-${m}`,$=e.find(m=>m.key===t),S=t!==null&&t!==""&&$===void 0&&e.length>0,R=p.useMemo(()=>$t(e,s),[e,s]),G=p.useMemo(()=>jt(R),[R]),E=p.useMemo(()=>_t(G),[G]),D=p.useCallback(()=>{w(!0),f(""),b(-1)},[]),P=p.useCallback(()=>{w(!1),f(""),b(-1)},[]),H=p.useCallback(m=>{n(m),P()},[n,P]),Y=m=>{if(!x){(m.key==="Enter"||m.key==="ArrowDown")&&D();return}switch(m.key){case"Escape":m.stopPropagation(),P();break;case"ArrowDown":m.preventDefault(),b(B=>je(B,1,E.length));break;case"ArrowUp":m.preventDefault(),b(B=>je(B,-1,E.length));break;case"Enter":{const B=s!=="",l=h>=0?E[h]:B?E[0]:void 0;l&&H(l.key);break}}};p.useEffect(()=>{if(!x)return;const m=B=>{v.current?.contains(B.target)||P()};return document.addEventListener("pointerdown",m),()=>document.removeEventListener("pointerdown",m)},[x,P]);const U=x?s:$?.label??t??"",q=x&&h>=0?E[h]:void 0;return r.jsxs(Ht,{ref:v,children:[r.jsx(Gt,{ref:y,id:c,"aria-label":d,value:U,placeholder:t?void 0:i,$hasValue:!!t&&!x,$retired:S&&!x,"aria-invalid":S&&!x?!0:void 0,"aria-describedby":S&&!x?F:void 0,onFocus:D,onBlur:P,onChange:m=>{f(m.target.value),b(-1)},onKeyDown:Y,role:"combobox","aria-expanded":x,"aria-controls":T,"aria-autocomplete":"list","aria-activedescendant":q?z(q.key):void 0}),S&&!x&&r.jsx(Kt,{id:F,children:`This ${a} ${Wt}. Pick another.`}),o&&t&&!x&&r.jsx(Ut,{type:"button","aria-label":`Clear ${a}`,onClick:()=>{n(null),P()},children:"×"}),x&&r.jsx(St,{id:T,groups:G,flatOptions:E,activeIndex:h,selectedKey:t,getOptionId:z,onHoverIndex:b,onSelectKey:H,"aria-label":d??"Data keys",renderItem:m=>r.jsxs(r.Fragment,{children:[r.jsx(Vt,{children:m.label??m.key}),m.unit&&r.jsx(qt,{children:m.unit})]})})]})}const Ht=u.div`
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

  ${Pe}

  &::placeholder {
    color: var(--color-text-faint);
  }

  @media (pointer: coarse) {
    min-height: 44px;
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

  ${Pe}

  @media (pointer: coarse) {
    min-width: 44px;
    min-height: 44px;
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
`,_e={left:!1,right:!1};function Yt(e){const[t,n]=p.useState(_e),o=p.useRef(_e);return p.useEffect(()=>{if(!e)return;const i=()=>{const d=e.scrollLeft>1,s=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===d&&o.current.right===s||(o.current={left:d,right:s},n(o.current))};i(),e.addEventListener("scroll",i,{passive:!0});const a=typeof ResizeObserver>"u"?null:new ResizeObserver(i);a?.observe(e);for(const d of Array.from(e.children))a?.observe(d);const c=new MutationObserver(()=>{for(const d of Array.from(e.children))a?.observe(d);i()});return c.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",i),a?.disconnect(),c.disconnect()}},[e]),t}const Se=u.div`
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
`,Xt=6,Qt=3,le={track:8,hub:4,needle:.92},Zt={regular:{size:16,drop:18},large:{size:24,drop:32}};function V(e,t,n,o){const i=o*Math.PI/180;return{x:e+n*Math.sin(i),y:t-n*Math.cos(i)}}function Me(e,t,n,o,i){const a=V(e,t,n,o),c=V(e,t,n,i),d=i-o,s=Math.abs(d)>180?1:0,f=d>=0?1:0;return`M ${a.x.toFixed(2)} ${a.y.toFixed(2)} A ${n} ${n} 0 ${s} ${f} ${c.x.toFixed(2)} ${c.y.toFixed(2)}`}function Br({value:e,min:t,max:n,width:o=120,height:i=120,startAngle:a=0,sweep:c=360,wrap:d=!1,zones:s,ticks:f,valueLabel:x,readout:w,format:h,needleColor:b="var(--color-text-primary)",trackColor:v="var(--color-border-subtle)","aria-label":y}){const T=Be(e),{shown:I,held:F,caption:z,band:$}=T,{anchor:S,tip:R}=st(z),G=I?.magnitude??Number.NaN,E=Number.isFinite(G)?I:null,D=t.magnitude,P=n.magnitude,H=P-D,Y=Number.isFinite(G)?G:D,U=H>0?d?D+((Y-D)%H+H)%H:Math.max(D,Math.min(P,Y)):D,q=E!=null,m=E==null?null:{magnitude:d?U:G,unit:E.unit},B=x??(m===null?null:tt(m,{format:h})),l=m===null?ve:J(m,{format:h}),j=E==null||$===null?null:We($,E.unit)??null,k=w!==void 0&&c<=180,_=k?le.track:Xt,A=k?le.hub:Qt,L=w===void 0?null:Zt[w],N=o/2,M=k&&L!==null?Math.min((o-_)/2,i-_-L.drop):Math.min(o,i)/2-_-2,O=k?M+_/2:i/2,re=g=>{const C=H>0?(g-D)/H:0;return a+C*c},X=g=>g.max(t).min(n),Q=g=>re(g.magnitude),se=g=>c!==0?(g-a)/c:0,me=j!==null&&Le(se(re(U)),[se(Q(X(j.lo))),se(Q(X(j.hi)))],Ne({wraps:d}))?j:null,xe=c>=360,be=V(N,O,M*(k?le.needle:.88),re(U));return r.jsxs(Jt,{...dt(T),...S,...q?{role:"meter","aria-label":ye(y,z),...we(z),"aria-valuenow":U,"aria-valuemin":D,"aria-valuemax":P,"aria-valuetext":l}:{role:"img","aria-label":ye(`${y}: ${l}`,z),...we(z)},children:[r.jsxs("svg",{width:o,height:i,viewBox:`0 0 ${o} ${i}`,"aria-hidden":"true",style:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto",overflow:k?"visible":void 0},children:[M>0&&(xe?r.jsx("circle",{cx:N,cy:O,r:M,fill:"none",stroke:v,strokeWidth:_}):r.jsx("path",{d:Me(N,O,M,a,a+c),fill:"none",stroke:v,strokeWidth:_,strokeLinecap:"round"})),M>0&&!xe&&s?.flatMap(g=>{const C=X(g.from.min(g.to)),W=X(g.from.max(g.to));return W.greaterThan(C)?[C.greaterThan(t)?null:a,n.greaterThan(W)?null:a+c].flatMap(K=>{if(K===null)return[];const ee=V(N,O,M,K);return[r.jsx("circle",{"data-dial-cap":"",cx:ee.x,cy:ee.y,r:_/2,fill:g.color},`cap-${g.color}-${K}`)]}):[]}),M>0&&s?.map(g=>{const C=X(g.from.min(g.to)),W=X(g.from.max(g.to));return W.greaterThan(C)?r.jsx("path",{d:Me(N,O,M,Q(C),Q(W)),fill:"none",stroke:g.color,strokeWidth:_,strokeLinecap:"butt"},`zone-${g.color}-${Q(C)}-${Q(W)}`):null}),M>0&&f?.map(g=>{const C=g.value.magnitude,W=re(C),K=V(N,O,M,W),ee=V(N,O,M-_,W),ge=V(N,O,M-_-8,W);return r.jsxs("g",{children:[r.jsx("line",{x1:ee.x,y1:ee.y,x2:K.x,y2:K.y,stroke:"var(--color-text-faint)",strokeWidth:1}),g.label&&r.jsx("text",{x:ge.x,y:ge.y,textAnchor:"middle",dominantBaseline:"middle",fontSize:9,fill:"var(--color-text-faint)",children:g.label})]},`tick-${C}-${g.label??""}`)}),M>0&&me!==null&&["lo","hi"].map(g=>{const C=Q(X(me[g])),W=V(N,O,M-_/2,C),K=V(N,O,M+_/2,C);return r.jsx(lt,{end:g,x1:W.x,y1:W.y,x2:K.x,y2:K.y},g)}),M>0&&q&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:N,y1:O,x2:be.x,y2:be.y,stroke:b,strokeWidth:2,strokeLinecap:"round"}),r.jsx("circle",{cx:N,cy:O,r:A,fill:b})]}),r.jsxs("text",{x:N,y:k&&L!==null?O+L.drop:O+M*.55,textAnchor:"middle",fontSize:k&&L!==null?L.size:13,fontWeight:k?void 0:"bold",fill:B===null?"var(--color-text-muted)":"var(--color-text-primary)",children:[B??ve,F&&B!==null&&r.jsx(ct,{size:k?7:6,figureSize:k&&L!==null?L.size:13})]})]}),R]})}const Jt=u.div`
  display: block;
  max-width: 100%;
`;function Lr({rows:e,segment:t="filters",emptyLabel:n="Nothing matches the filter"}){const o=ut({segment:t}),i=e.filter(a=>o.matches(a.searchText));return r.jsx(pt,{filter:o,children:i.length>0?r.jsx(rt,{gap:"related",children:i.map(a=>r.jsx("div",{children:a.node},a.id))}):r.jsx(De,{children:n})})}const er="8px";function Ge({percent:e,tone:t,fillColor:n,trackHeld:o=!1,fillHeld:i=!1,children:a,...c}){return r.jsxs(tr,{"data-track-held":o?"":void 0,...c,children:[e!==null&&r.jsx(nr,{$tone:t,$fillColor:n,$held:i,"data-fill-held":i?"":void 0,style:{width:`${e}%`}}),o&&r.jsx(rr,{"data-track-hatch":"",style:{left:`${e??0}%`}}),a]})}const tr=u.div`
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
`;function Nr({label:e,value:t,capacity:n,format:o,tone:i="neutral",fillColor:a,valueLabel:c,valueLabelNode:d,layout:s="stacked",hideLabel:f=!1,statement:x=!1,...w}){const h=Te(t),b=Te(n),v=or(h.figure,n===void 0?void 0:b.figure);if(v===null||!Number.isFinite(v))return f?null:r.jsx(Ye,{layout:s,label:e,display:r.jsx(nt,{}),...w,children:r.jsx(Ge,{percent:null,tone:i,"aria-hidden":"true"})});const y=Math.min(1,Math.max(0,v)),T={label:e,layout:s,hideLabel:f,statement:x,pct:Math.round(y*100),tone:i,fillColor:a,trackHeld:b.reading?.state==="held"&&!$e(b.figure),fillHeld:h.reading?.state==="held"&&!$e(h.figure),...w},I=pe(1,ue(b.reading,b.figure,b.figure));if(n!==void 0)return r.jsx(ft,{of:h.figure?.unit,format:o,children:r.jsx(ir,{...T,value:t,capacity:n,shown:h,held:b,endBounds:I,at:y,valueLabel:c,valueLabelNode:d})});const F=pe(y,ue(h.reading,h.figure,null));return r.jsx(qe,{...T,bounds:F,endBounds:I,display:d??(c===void 0?r.jsx(te,{value:t,format:o}):r.jsx(Ke,{caption:ie(t),children:c})),spoken:Ve(c===void 0?J(h.figure,{format:o}):Ue(c,ie(t)),F,I)})}function ie(e){const{held:t,caption:n}=Be(e??null);return t?n:null}function Ue(e,t){return t===null?e:`${e}, ${t}`}function Ke({caption:e,children:t}){return e===null?r.jsx(r.Fragment,{children:t}):r.jsx(mt,{caption:e,children:t})}function Te(e){return typeof e!="object"||e===null||!("state"in e)?{figure:e??null,reading:null}:{figure:e.value??null,reading:e}}function or(e,t){return e===null||t===null||t!==void 0&&!t.isPositive()?null:(t===void 0?e:e.dividedBy(t)).magnitude}function ue(e,t,n){if(e===null||e.reckoning.status!=="available"||t===null)return null;const o=We(e.reckoning.band,t.unit);if(!o)return null;const i={loSaid:o.lo,hiSaid:o.hi,kind:o.kind};return n===null?{lo:ne(o.lo,0),hi:ne(o.hi,0),...i}:n.isPositive()?{lo:ne(o.lo.dividedBy(n),0),hi:ne(o.hi.dividedBy(n),0),...i}:null}function pe(e,t){return t===null?null:Le(e,[t.lo,t.hi],Ne())?t:null}function Ve(e,t,n,o){const i=(c,d)=>{const s=J(c.loSaid,o),f=J(c.hiSaid,o);return`${d}with bands at ${s} and ${f}`},a=[t===null?null:i(t,""),n===null?null:i(n,"capacity ")].filter(c=>c!==null);return a.length===0?e:`${e}, ${a.join(", ")}`}function ar(e){if(!Number.isFinite(e))return 0;const t=Math.min(1,Math.max(0,e));return Math.round(t*1e4)/100}function oe(e){const t=ar(e),n=t<=0?0:t>=100?-2:-1;return{style:{left:`${t}%`,transform:`translateX(${n}px)`}}}function qe({label:e,layout:t,hideLabel:n,statement:o,pct:i,tone:a,fillColor:c,trackHeld:d,fillHeld:s,display:f,spoken:x,bounds:w,endBounds:h,...b}){return r.jsxs(Ye,{layout:t,label:e,display:f,hideHead:n,statement:o,...b,children:[r.jsx(Ge,{percent:i,tone:a,fillColor:c,trackHeld:d,fillHeld:s,role:"meter","aria-label":e,"aria-valuenow":i,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":x}),(w!==null||h!==null)&&r.jsxs(pr,{"aria-hidden":"true",children:[w!==null&&r.jsxs(r.Fragment,{children:[r.jsx(ae,{"data-bound":"lo",...oe(w.lo)}),r.jsx(ae,{"data-bound":"hi",...oe(w.hi)})]}),h!==null&&r.jsxs(r.Fragment,{children:[r.jsx(ae,{"data-end-bound":"lo",...oe(h.lo)}),r.jsx(ae,{"data-end-bound":"hi",...oe(h.hi)})]})]})]})}function Ye({layout:e,label:t,display:n,hideHead:o=!1,statement:i=!1,children:a,...c}){return o?r.jsxs(ce,{$row:!1,...c,children:[r.jsx(de,{$row:!1,children:a}),i&&r.jsx(ur,{"data-meter-part":"statement",children:n})]}):e==="row"?r.jsxs(ce,{$row:!0,"data-meter-row":"",...c,children:[r.jsx(ze,{"data-meter-part":"label",children:t}),r.jsx(de,{$row:!0,"data-meter-part":"bar",children:a}),r.jsx(Re,{$row:!0,"data-meter-part":"figure",children:n})]}):r.jsxs(ce,{$row:!1,...c,children:[r.jsxs(dr,{children:[r.jsx(ze,{children:t}),r.jsx(Re,{$row:!1,children:n})]}),r.jsx(de,{$row:!1,children:a})]})}function ir({value:e,capacity:t,shown:n,held:o,at:i,valueLabel:a,valueLabelNode:c,...d}){const s=a===void 0,f=ke(s?n.figure:void 0),x=ke(s?o.figure:void 0),w=f??x??{},h=ie(e)??ie(t),b=c??(a!==void 0?r.jsx(Ke,{caption:h,children:a}):d.layout==="row"?r.jsxs(fr,{$marked:d.fillHeld||d.trackHeld,children:[r.jsx(te,{value:e,hideUnitInGroup:!0})," / ",r.jsx(te,{value:t}),(d.fillHeld||d.trackHeld)&&r.jsx(ht,{"aria-hidden":"true","data-held-mark":""})]}):r.jsxs(r.Fragment,{children:[r.jsx(te,{value:e})," / ",r.jsx(te,{value:t})]})),v=a===void 0?`${J(n.figure,w)} of ${J(o.figure,w)}`:Ue(a,h),y=pe(i,ue(n.reading,n.figure,o.figure));return r.jsx(qe,{...d,display:b,spoken:Ve(v,y,d.endBounds,w),bounds:y})}const fe=48;function Wr({children:e,...t}){const n=p.useRef(null);return p.useLayoutEffect(()=>{const o=n.current;if(!o||typeof ResizeObserver>"u")return;const i=()=>{o.clientWidth!==0&&o.toggleAttribute("data-figures-below",!sr(o))};let a=0;const c=()=>{cancelAnimationFrame(a),a=requestAnimationFrame(i)},d=new ResizeObserver(c),s=()=>{d.disconnect(),d.observe(o);for(const x of Xe(o))d.observe(x)},f=new MutationObserver(s);return f.observe(o,{childList:!0,subtree:!0}),s(),i(),()=>{cancelAnimationFrame(a),d.disconnect(),f.disconnect()}},[]),r.jsx(cr,{ref:n,...t,children:e})}const Hr=u.div.attrs({"data-meter-row-group":""})`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  row-gap: var(--gap-meter-rows);
  min-width: 0;

  & > * {
    grid-column: 1 / -1;
    min-width: 0;
  }
`;function Xe(e){return Array.from(e.querySelectorAll(':scope > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row] > [data-meter-part="figure"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="figure"]'))}function sr(e){const t=Xe(e);if(t.length===0)return!0;let n=0,o=0;for(const s of t)s.dataset.meterPart==="label"?n=Math.max(n,lr(s)):o=Math.max(o,s.scrollWidth);const i=getComputedStyle(e),a=s=>Number.parseFloat(s)||0,c=a(i.columnGap),d=e.clientWidth-a(i.paddingLeft)-a(i.paddingRight);return n+c+fe+c+o<=d}function lr(e){const t=e.style.whiteSpace;e.style.whiteSpace="nowrap";const n=e.scrollWidth;return e.style.whiteSpace=t,n}const cr=u.div`
  display: grid;
  grid-template-columns:
    minmax(min-content, max-content)
    minmax(${fe}px, 1fr)
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
      minmax(${fe}px, 1fr);
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
  ${({$row:e})=>e?Z`
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          column-gap: var(--gap-meter-columns);
          row-gap: var(--gap-caption);
        `:Z`
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
`,Re=u.span`
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
`,pr=u.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,de=u.div`
  position: relative;
  ${({$row:e})=>e?Z`
          flex: 1 1 28px;
          min-width: 28px;
        `:""}
`,fr=u(xt)`
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
  color: ${({$tone:e})=>ot[e]};
  ${({$size:e})=>e==="hero"?Z`
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
        `:Z`
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
`;function Ae(e,t,n,o){const i=t-e;if(i===0){const a=(n+o)/2;return()=>a}return a=>n+(a-e)/i*(o-n)}function mr(e,t,n,o){return e.map((i,a)=>`${a===0?"M":"L"}${n(i).toFixed(2)},${o(t[a]).toFixed(2)}`).join(" ")}function Kr({values:e,width:t,height:n,color:o="var(--color-text-primary)",strokeWidth:i=1.5,yDomain:a,showZeroBaseline:c=!1,background:d=!0,"aria-label":s="Trend sparkline"}){const f=p.useMemo(()=>e.filter($=>Number.isFinite($)),[e]),x=`sparkline-fill-${p.useId().replace(/:/g,"")}`,w=p.useMemo(()=>{if(a)return a;if(f.length===0)return[0,1];let $=f[0],S=f[0];for(const R of f)R<$&&($=R),R>S&&(S=R);if($===S){const R=Math.abs($)>0?Math.abs($)*.01:1;return[$-R,S+R]}return[$,S]},[a,f]);if(t<=0||n<=0||f.length<2)return r.jsx("svg",{width:Math.max(0,t),height:Math.max(0,n),role:"img","aria-label":s,style:{display:"block"},children:r.jsx("title",{children:s})});const h=i/2,b=f.map(($,S)=>S),v=Ae(0,f.length-1,0,t),y=Ae(w[0],w[1],n-h,h),T=mr(b,f,v,y),I=`${T} L ${t},${n} L 0,${n} Z`,F=c&&w[0]<=0&&w[1]>=0,z=F?y(0):null;return r.jsxs("svg",{width:t,height:n,role:"img","aria-label":s,style:{display:"block"},children:[r.jsx("title",{children:s}),d&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:x,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:o,stopOpacity:"0.25"}),r.jsx("stop",{offset:"100%",stopColor:o,stopOpacity:"0.02"})]})}),F&&z!==null&&r.jsx("line",{x1:0,y1:z,x2:t,y2:z,stroke:"var(--color-border-subtle)",strokeWidth:1}),d&&r.jsx("path",{d:I,fill:`url(#${x})`,stroke:"none"}),r.jsx("path",{d:T,stroke:o,strokeWidth:i,fill:"none",strokeLinejoin:"round",strokeLinecap:"round"})]})}const Qe=240,xr=8;function br(e,t){if(e<=0||t<2)return!1;const n=t*Qe+(t-1)*xr;return e>=n}function Vr({tabs:e,activeId:t,onChange:n,expandWhenRoomy:o=!1,"aria-label":i,"aria-labelledby":a,className:c}){const d=p.useId(),s=p.useMemo(()=>e.map((l,j)=>({...l,id:l.id??`tab-${j}`})),[e]),f=t!==void 0,[x,w]=p.useState(()=>t??s[0]?.id??""),h=f?t:x,b=s.find(l=>l.id===h),v=b&&!b.disabled?b:s.find(l=>!l.disabled)??b??s[0],y=p.useCallback(l=>{f||w(l),n?.(l)},[f,n]),T=p.useMemo(()=>s.filter(l=>!l.disabled),[s]),{ref:I,size:F}=bt({w:0,h:0}),z=o&&br(F.w,T.length),$=p.useRef(new Map),S=p.useRef(null),R=p.useRef(null),[G,E]=p.useState(!1),[D,P]=p.useState(null),H=p.useCallback(l=>{S.current=l,P(l)},[]),Y=Yt(D),[U,q]=p.useState(null);p.useLayoutEffect(()=>{const l=S.current;if(!l)return;const j=()=>{E(_=>{_||(R.current=l.scrollWidth);const A=R.current;return A==null?!1:A>l.clientWidth})};j();const k=new ResizeObserver(j);return k.observe(l),()=>k.disconnect()},[z,s.length]),p.useLayoutEffect(()=>{const l=S.current,j=v?$.current.get(v.id):void 0;if(!l||!j){q(null);return}const k=()=>{const A=$.current.get(v?.id??"");A&&q(L=>L&&L.left===A.offsetLeft&&L.width===A.offsetWidth?L:{left:A.offsetLeft,width:A.offsetWidth})};k();const _=new ResizeObserver(k);return _.observe(l),_.observe(j),()=>_.disconnect()},[v?.id,s.length,z]);const m=p.useCallback((l,j)=>{const k=s.length;for(let _=1;_<=k;_++){const A=s[((l+j*_)%k+k)%k];if(!(!A||A.disabled)){y(A.id),$.current.get(A.id)?.focus();return}}},[s,y]),B=p.useCallback(l=>{const j=s.findIndex(k=>k.id===v?.id);if(!(j<0))switch(l.key){case"ArrowRight":case"ArrowDown":l.preventDefault(),m(j,1);break;case"ArrowLeft":case"ArrowUp":l.preventDefault(),m(j,-1);break;case"Home":l.preventDefault(),m(-1,1);break;case"End":l.preventDefault(),m(s.length,-1);break}},[s,v?.id,m]);return z?r.jsx(Fe,{ref:I,"data-tabs-root":"",className:c,children:r.jsx(gt,{minColWidth:`${Qe}px`,align:"start",gap:"related-comfortable",children:T.map(l=>r.jsxs(at,{children:[r.jsxs(it,{as:"h3",$rule:!0,children:[l.label,l.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(Ee,{"aria-hidden":"true"}),r.jsx(vt,{children:", needs attention"})]})]}),l.content]},l.id))})}):r.jsxs(Fe,{ref:I,"data-tabs-root":"",className:c,children:[r.jsxs(gr,{children:[r.jsx(vr,{ref:H,children:r.jsxs(wr,{role:"tablist","aria-label":i,"aria-labelledby":a,children:[U&&r.jsx(yr,{"aria-hidden":"true",style:{left:U.left,width:U.width}}),s.map(l=>{const j=l.id===v?.id;return r.jsxs(kr,{ref:k=>{k?$.current.set(l.id,k):$.current.delete(l.id)},role:"tab",type:"button",id:`${d}${l.id}-tab`,"aria-selected":j,"aria-controls":`${d}${l.id}-panel`,"aria-describedby":l.indicator?`${d}${l.id}-attention`:void 0,tabIndex:j?0:-1,disabled:l.disabled,$active:j,onClick:()=>y(l.id),onKeyDown:B,$compact:G,children:[l.label,l.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(Ee,{"aria-hidden":"true"}),r.jsx("span",{id:`${d}${l.id}-attention`,hidden:!0,children:"Needs attention"})]})]},l.id)})]})}),r.jsx(Se,{$position:"left",$visible:Y.left}),r.jsx(Se,{$position:"right",$visible:Y.right})]}),v&&r.jsx($r,{role:"tabpanel",id:`${d}${v.id}-panel`,"aria-labelledby":`${d}${v.id}-tab`,children:v.content})]})}const Fe=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-tabs-panel);
  /* Fills the panel and constrains children, so a flex:1 tab body can scroll. */
  flex: 1;
  min-height: 0;
`,gr=u.div`
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

  ${wt}

  @media (pointer: coarse) {
    min-height: 44px;
    /* Compact still applies on touch: a tab scrolled half out of view is a smaller target, not a bigger one. */
    ${({$compact:e})=>e?"padding: var(--inset-tab-compact-touch);":"padding: var(--inset-control-touch);"}
  }
`,$r=u.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,qr=p.forwardRef(function({pressed:t=!1,tone:n="go",size:o="md",type:i="button","aria-pressed":a,...c},d){return r.jsx(yt,{ref:d,type:i,tone:t?n:void 0,size:o,pressed:t,"aria-pressed":a??t,...c})}),Oe={w:5,h:4},jr=8,_r=7;function Yr(e,t){return e===void 0||t===void 0?"normal":e<Oe.w||t<Oe.h?"tiny":e<jr||t<_r?"small":"normal"}const Ze=1.6,Sr=1/Ze;function Xr(e,t){if(e===void 0||t===void 0||t===0)return{shape:"square",aspect:1};const n=e/t;return n>=Ze?{shape:"landscape",aspect:n}:n<=Sr?{shape:"portrait",aspect:n}:{shape:"square",aspect:n}}export{St as C,Pr as D,Lr as F,Se as I,Nr as M,Gr as R,Kr as S,Qe as T,Wr as a,Ur as b,Dr as c,Or as d,Cr as e,Vr as f,qr as g,Oe as h,Br as i,Hr as j,$t as k,_t as l,Yr as m,Xr as n,jt as o,je as p,br as s,Yt as u};
