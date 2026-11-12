import{j as n}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import u,{css as S,keyframes as We}from"./ext-styled-components-DAuodqsN.js";import{Y as ft,y as ht,g as J,U as Ge,N as Se,x as te,e as mt,c as gt,j as we,S as Ue,d as xt}from"./contributionsRead-CFwQ5Hmf.js";import{E as Ke,ae as vt,af as qe,aa as he,ah as bt,I as wt,ai as yt,ac as re,bL as $t,bC as Ye,bu as Ve,bU as jt,aJ as kt,bV as Te,bB as Me,ad as _t,bI as St,ay as Tt,b3 as Mt,ab as ee,bW as ze,bX as zt,aD as Xe,bY as Rt,bZ as Ft,e as At,a5 as Et,b_ as Ct,aB as It,a1 as me,b$ as Re,c0 as Bt,P as Lt}from"./Modal-nvZKnG3_.js";import{r as f}from"./ext-react-C0MU9AHG.js";import{Q as Qe,eG as Fe,cV as ae,cQ as Ot}from"./context-fkXU6psv.js";import"./ksp-enum-names-D10uD7DF.js";import"./logger-2_QM1wvD.js";import"./use-command-CafFDBCH.js";function Ze(e,t){if(!t)return!0;const r=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(r)||e.key.toLowerCase().includes(r)}function Pt(e,t,r=Ze){return e.filter(o=>r(o,t))}function Dt(e,t="Other"){const r=new Map;for(const o of e){const a=o.group??t;let i=r.get(a);i||(i=[],r.set(a,i)),i.push(o)}return[...r.entries()].sort(([o],[a])=>o.localeCompare(a))}function Nt(e){return e.flatMap(([,t])=>t)}function Ae(e,t,r){return r===0?-1:Math.max(0,Math.min(e+t,r-1))}function Ht({id:e,groups:t,flatOptions:r,activeIndex:o,selectedKey:a,getOptionId:i,onHoverIndex:s,onSelectKey:l,renderItem:c,emptyLabel:p="No matches","aria-label":m,placement:h="below"}){return n.jsx(Wt,{role:"listbox",id:e,"aria-label":m,$placement:h,onMouseDown:b=>b.preventDefault(),children:r.length===0?n.jsx(Ke,{layout:"fill",children:p}):t.map(([b,x],v)=>n.jsxs(Gt,{role:"group","aria-labelledby":`${e}-group-${v}`,children:[n.jsx(Ut,{id:`${e}-group-${v}`,"aria-hidden":"true",children:b}),x.map(y=>{const M=r.indexOf(y),C=M===o;return n.jsx(qt,{id:i(y.key),role:"option","aria-selected":C,$active:C,$selected:y.key===a,onPointerDown:I=>{I.preventDefault(),l(y.key)},onMouseEnter:()=>s(M),children:c?c(y):y.label??y.key},y.key)})]},b))})}const Wt=u.div`
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
`,Gt=u.div``,Ut=u.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-raised);
`;function Kt(e,t){return e?"background: var(--color-surface-panel);":t?ft("go"):"background: transparent;"}const qt=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-menu-item);
  cursor: pointer;
  ${({$active:e,$selected:t})=>Kt(e,t)}
  /* Focus stays on the input, so the highlighted option carries the focus colour as an inset bar. */
  box-shadow: ${({$active:e})=>e?"inset 3px 0 0 var(--color-focus)":"none"};

  &:hover {
    background: var(--color-surface-panel);
  }

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`;function Ar({tone:e,children:t,live:r=!1,pulse:o,...a}){const i=r?{role:"status","aria-live":"polite"}:{};return n.jsxs(Yt,{"data-tone":e,...i,...a,children:[n.jsx(Xt,{"data-tone":e,$pulse:o,"aria-hidden":"true"}),n.jsx(Qt,{children:t})]})}const Yt=u.div`
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

  border-color: ${({"data-tone":e})=>ht(e)};
`,Vt=We`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,Xt=u.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  flex-shrink: 0;

  background: ${({"data-tone":e})=>J[e]};

  /* A looping pulse needs its own reduced-motion guard; the 1s/2s periods encode connection state. */
  ${({$pulse:e})=>e?S`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${Vt} ${e==="fast"?"1s":"2s"}
              var(--ease-emphasis) infinite;
          }
        `:""}
`,Qt=u.span`
  color: var(--color-text-primary);
  line-height: var(--line-height-body);
`;function Er(e){return e.command?n.jsx(Jt,{...e,command:e.command}):n.jsx(Zt,{...e})}function Zt({checked:e,onChange:t,label:r,disabled:o,id:a,"aria-label":i}){return n.jsxs(Je,{$disabled:o,children:[n.jsx(et,{type:"checkbox",id:a,checked:e,disabled:o,onChange:s=>t(s.target.checked),"aria-label":r?void 0:i}),n.jsx(ye,{$checked:e,$disabled:o,children:n.jsx(tt,{$checked:e,$disabled:o})}),r&&n.jsx(nt,{children:r})]})}function Jt({command:e,state:t,unavailable:r,label:o,id:a,"aria-label":i}){const s=vt({command:e,unavailable:r}),l=t===!0,c=typeof t=="boolean";return n.jsx(qe,{text:s.tip,children:n.jsxs(Je,{$disabled:s.inert,children:[n.jsx(et,{type:"checkbox",id:a,checked:l,"aria-disabled":s.inert||void 0,onChange:()=>{c&&s.send(!t)},"aria-label":o?void 0:i}),n.jsx(ye,{$checked:l,$disabled:s.inert,...s.edge,children:n.jsx(tt,{$checked:l,$disabled:s.inert})}),o&&n.jsx(nt,{children:o}),n.jsx(en,{"aria-hidden":"true",children:s.word}),n.jsx(he,{visuallyHidden:!0,children:s.announce})]})})}const Je=u.label`
  position: relative;
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
`,ye=u.div`
  width: 28px;
  height: 14px;
  /* --radius-pill keeps the stadium shape through a height change. */
  border-radius: var(--radius-pill);
  background: ${({$checked:e})=>e?"var(--color-go-mark)":"var(--color-surface-raised)"};
  border: 1px solid ${({$checked:e})=>e?"var(--color-go-mark)":"var(--color-border-strong)"};
  position: relative;
  flex-shrink: 0;
  transition: background var(--duration-base), border-color var(--duration-base);
  ${bt}
`,en=u.span`
  position: absolute;
  inset-inline-end: 0;
  top: 50%;
  transform: translateY(-50%);
  padding-inline: var(--gap-related-dense);
  background: var(--color-surface-sunken);
  pointer-events: none;
  &:empty {
    display: none;
  }
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
`,et=u.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:focus-visible + ${ye} {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,tt=u.div`
  position: absolute;
  /* Measured inside the border: the track is border-box, so its 1px border leaves a 26 by 12 box, and 2px on every side centres the 8px thumb at either end. */
  top: 2px;
  left: ${({$checked:e})=>e?"16px":"2px"};
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${({$checked:e})=>e?"var(--color-accent-fg)":"var(--color-text-faint)"};
  transition: left var(--duration-base), background var(--duration-base);
`,nt=u.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,tn="is no longer available";function Cr({keys:e,value:t,onChange:r,clearable:o=!1,placeholder:a="Search...",subjectNoun:i="value",id:s,"aria-label":l}){const[c,p]=f.useState(""),[m,h]=f.useState(!1),[b,x]=f.useState(-1),v=f.useRef(null),y=f.useRef(null),M=f.useId(),C=f.useId(),I=f.useId(),T=g=>`${C}-${g}`,k=e.find(g=>g.key===t),z=t!==null&&t!==""&&k===void 0&&e.length>0,A=e.some(g=>g.common),U=f.useMemo(()=>Pt(c===""&&A?e.filter(g=>g.common):e,c,(g,d)=>Ze(g,d)||(g.summary?.toLowerCase().includes(d.toLowerCase())??!1)),[e,c,A]),W=f.useMemo(()=>Dt(U),[U]),F=f.useMemo(()=>Nt(W),[W]),Y=f.useCallback(()=>{h(!0),p(""),x(-1)},[]),E=f.useCallback(()=>{h(!1),p(""),x(-1)},[]),V=f.useCallback(g=>{r(g),E()},[r,E]),G=g=>{if(!m){(g.key==="Enter"||g.key==="ArrowDown")&&Y();return}switch(g.key){case"Escape":g.stopPropagation(),E();break;case"ArrowDown":g.preventDefault(),x(d=>Ae(d,1,F.length));break;case"ArrowUp":g.preventDefault(),x(d=>Ae(d,-1,F.length));break;case"Enter":{const d=c!=="",j=b>=0?F[b]:d?F[0]:void 0;j&&V(j.key);break}}};f.useEffect(()=>{if(!m)return;const g=d=>{v.current?.contains(d.target)||E()};return document.addEventListener("pointerdown",g),()=>document.removeEventListener("pointerdown",g)},[m,E]);const X=m?c:k?.summary??k?.label??t??"",P=m&&b>=0?F[b]:void 0;return n.jsxs(nn,{ref:v,children:[n.jsx(rn,{ref:y,id:s,"aria-label":l,value:X,placeholder:m&&A?`Search all ${e.length} fields...`:t?void 0:a,$hasValue:!!t&&!m,$retired:z&&!m,"aria-invalid":z&&!m?!0:void 0,"aria-describedby":z&&!m?I:void 0,onFocus:Y,onBlur:E,onChange:g=>{p(g.target.value),x(-1)},onKeyDown:G,role:"combobox","aria-expanded":m,"aria-controls":M,"aria-autocomplete":"list","aria-activedescendant":P?T(P.key):void 0}),z&&!m&&n.jsx(an,{id:I,children:`This ${i} ${tn}. Pick another.`}),o&&t&&!m&&n.jsx(on,{children:n.jsx(wt,{type:"button","aria-label":`Clear ${i}`,onClick:()=>{r(null),E()},children:"×"})}),m&&n.jsx(Ht,{id:M,groups:W,flatOptions:F,activeIndex:b,selectedKey:t,getOptionId:T,onHoverIndex:x,onSelectKey:V,"aria-label":l??"Data keys",renderItem:g=>n.jsxs(n.Fragment,{children:[n.jsx(sn,{children:g.label??g.key}),g.unit&&n.jsx(ln,{children:g.unit})]})})]})}const nn=u.div`
  position: relative;
  flex-grow: 1;
  min-width: 0;
`,rn=u.input`
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

  ${yt}

  &::placeholder {
    color: var(--color-text-faint);
  }

  @media (pointer: coarse) {
    min-height: var(--touch-target);
    padding: var(--inset-field-touch);
    /* Under a coarse pointer the large step is 17px, above the 16px at which iOS Safari zooms on focus. */
    font-size: var(--font-size-lg);
  }
`,on=u.span`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;

  @media (pointer: coarse) {
    right: 0;
  }
`,an=u.div`
  color: var(--color-nogo-text);
  font-size: var(--font-size-compact);
  margin-top: var(--gap-caption);
`,sn=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);

  @media (pointer: coarse) {
    font-size: var(--font-size-prose);
  }
`,ln=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  margin-left: var(--gap-trailing-mark);
`,cn=6,dn=3,ue={track:8,hub:4,needle:.92},un={regular:{size:16,drop:18},large:{size:24,drop:32}};function q(e,t,r,o){const a=o*Math.PI/180;return{x:e+r*Math.sin(a),y:t-r*Math.cos(a)}}function Ee(e,t,r,o,a){const i=q(e,t,r,o),s=q(e,t,r,a),l=a-o,c=Math.abs(l)>180?1:0,p=l>=0?1:0;return`M ${i.x.toFixed(2)} ${i.y.toFixed(2)} A ${r} ${r} 0 ${c} ${p} ${s.x.toFixed(2)} ${s.y.toFixed(2)}`}function pn({value:e,min:t,max:r,width:o=120,height:a=120,startAngle:i=0,sweep:s=360,wrap:l=!1,zones:c,ticks:p,valueLabel:m,readout:h,format:b,needleColor:x="var(--color-text-primary)",trackColor:v="var(--color-border-subtle)","aria-label":y}){const M=re(e),{shown:C,held:I,caption:T,band:k}=M,{anchor:z,tip:A}=$t(T),U=C?.magnitude??Number.NaN,W=Number.isFinite(U)?C:null,F=t.magnitude,Y=r.magnitude,E=Y-F,V=Number.isFinite(U)?U:F,G=E>0?l?F+((V-F)%E+E)%E:Math.max(F,Math.min(Y,V)):F,X=W!=null,P=W==null?null:{magnitude:l?G:U,unit:W.unit},g=m??(P===null?null:Ge(P,{format:b})),d=P===null?Se:te(P,{format:b}),j=W==null||k===null?null:Qe(k,W.unit)??null,$=h!==void 0&&s<=180,_=$?ue.track:cn,B=$?ue.hub:dn,D=h===void 0?null:un[h],N=o/2,R=$&&D!==null?Math.min((o-_)/2,a-_-D.drop):Math.min(o,a)/2-_-2,L=$?R+_/2:a/2,oe=w=>{const O=E>0?(w-F)/E:0;return i+O*s},Q=w=>w.max(t).min(r),Z=w=>oe(w.magnitude),de=w=>s!==0?(w-i)/s:0,$e=j!==null&&Ye(de(oe(G)),[de(Z(Q(j.lo))),de(Z(Q(j.hi)))],Ve({wraps:l}))?j:null,je=s>=360,ke=q(N,L,R*($?ue.needle:.88),oe(G));return n.jsxs(fn,{..._t(M),...z,...X?{role:"meter","aria-label":Me(y,T),...Te(T),"aria-valuenow":G,"aria-valuemin":F,"aria-valuemax":Y,"aria-valuetext":d}:{role:"img","aria-label":Me(`${y}: ${d}`,T),...Te(T)},children:[n.jsxs("svg",{width:o,height:a,viewBox:`0 0 ${o} ${a}`,"aria-hidden":"true",style:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto",overflow:$?"visible":void 0},children:[R>0&&(je?n.jsx("circle",{cx:N,cy:L,r:R,fill:"none",stroke:v,strokeWidth:_}):n.jsx("path",{d:Ee(N,L,R,i,i+s),fill:"none",stroke:v,strokeWidth:_,strokeLinecap:"round"})),R>0&&!je&&c?.flatMap(w=>{const O=Q(w.from.min(w.to)),H=Q(w.from.max(w.to));return H.greaterThan(O)?[O.greaterThan(t)?null:i,r.greaterThan(H)?null:i+s].flatMap(K=>{if(K===null)return[];const ne=q(N,L,R,K);return[n.jsx("circle",{"data-dial-cap":"",cx:ne.x,cy:ne.y,r:_/2,fill:w.color},`cap-${w.color}-${K}`)]}):[]}),R>0&&c?.map(w=>{const O=Q(w.from.min(w.to)),H=Q(w.from.max(w.to));return H.greaterThan(O)?n.jsx("path",{d:Ee(N,L,R,Z(O),Z(H)),fill:"none",stroke:w.color,strokeWidth:_,strokeLinecap:"butt"},`zone-${w.color}-${Z(O)}-${Z(H)}`):null}),R>0&&p?.map(w=>{const O=w.value.magnitude,H=oe(O),K=q(N,L,R,H),ne=q(N,L,R-_,H),_e=q(N,L,R-_-8,H);return n.jsxs("g",{children:[n.jsx("line",{x1:ne.x,y1:ne.y,x2:K.x,y2:K.y,stroke:"var(--color-text-faint)",strokeWidth:1}),w.label&&n.jsx("text",{x:_e.x,y:_e.y,textAnchor:"middle",dominantBaseline:"middle",fontSize:9,fill:"var(--color-text-faint)",children:w.label})]},`tick-${O}-${w.label??""}`)}),R>0&&$e!==null&&["lo","hi"].map(w=>{const O=Z(Q($e[w])),H=q(N,L,R-_/2,O),K=q(N,L,R+_/2,O);return n.jsx(jt,{end:w,x1:H.x,y1:H.y,x2:K.x,y2:K.y},w)}),R>0&&X&&n.jsxs(n.Fragment,{children:[n.jsx("line",{x1:N,y1:L,x2:ke.x,y2:ke.y,stroke:x,strokeWidth:2,strokeLinecap:"round"}),n.jsx("circle",{cx:N,cy:L,r:B,fill:x})]}),n.jsxs("text",{x:N,y:$&&D!==null?L+D.drop:L+R*.55,textAnchor:"middle",fontSize:$&&D!==null?D.size:13,fontWeight:$?void 0:"bold",fill:g===null?"var(--color-text-muted)":"var(--color-text-primary)",children:[g??Se,I&&g!==null&&n.jsx(kt,{size:$?7:6,figureSize:$&&D!==null?D.size:13})]})]}),A]})}const fn=u.div`
  display: block;
  max-width: 100%;
`;function Ir({rows:e,segment:t="filters",emptyLabel:r="Nothing matches the filter"}){const o=St({segment:t}),a=e.filter(i=>o.matches(i.searchText));return n.jsx(Tt,{filter:o,children:a.length>0?n.jsx(mt,{gap:"related",children:a.map(i=>n.jsx("div",{children:i.node},i.id))}):n.jsx(Ke,{children:r})})}function hn({lit:e,of:t,tone:r="neutral",label:o}){const a=e===null?"unknown":`${e} of ${t}`;return n.jsx(mn,{role:"img","aria-label":o===void 0?a:`${o} ${a}`,"data-level-bars":"",children:Array.from({length:t},(i,s)=>n.jsx(gn,{$fill:e!==null&&s<e?J[r]:null,$height:(s+1)/t},s))})}const mn=u.span`
  display: inline-flex;
  align-items: flex-end;
  gap: var(--gap-signal-bars);
  height: 0.8em;
  flex: none;
`,gn=u.span`
  width: 0.22em;
  height: ${({$height:e})=>`${Math.round(e*100)}%`};
  background: ${({$fill:e})=>e??"transparent"};
  border: 1px solid ${({$fill:e})=>e??"var(--color-border-subtle)"};
`,xn="8px";function rt({percent:e,tone:t,fillColor:r,trackHeld:o=!1,fillHeld:a=!1,children:i,...s}){return n.jsxs(vn,{"data-track-held":o?"":void 0,...s,children:[e!==null&&n.jsx(wn,{$tone:t,$fillColor:r,$held:a,"data-fill-held":a?"":void 0,style:{width:`${e}%`}}),o&&n.jsx(bn,{"data-track-hatch":"",style:{left:`${e??0}%`}}),i]})}const vn=u.div`
  width: 100%;
  border-radius: var(--radius-pill);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  overflow: hidden;
  /* Positioned for the fill only: this overflow rounds the fill's ends and would clip any mark drawn over it. */
  position: relative;
  height: ${xn};
`,bn=u.div`
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
`,wn=u.div`
  height: 100%;
  border-radius: var(--radius-pill);
  transition: width var(--duration-slow) var(--ease-standard);
  /* A held reading dims the fill, not the hue and not the whole bar, so a label beside it stays readable. */
  ${({$held:e})=>e?"opacity: 0.55;":""}
  background: ${({$tone:e,$fillColor:t})=>t??J[e]};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function Br({label:e,value:t,capacity:r,format:o,tone:a="neutral",fillColor:i,valueLabel:s,valueLabelNode:l,layout:c="stacked",hideLabel:p=!1,wrapLabel:m=!1,statement:h=!1,...b}){const x=Ce(t),v=Ce(r),y=yn(x.figure,r===void 0?void 0:v.figure);if(y===null||!Number.isFinite(y))return p?null:n.jsx(lt,{layout:c,label:e,wrapLabel:m,display:n.jsx(gt,{}),...b,children:n.jsx(rt,{percent:null,tone:a,"aria-hidden":"true"})});const M=Math.min(1,Math.max(0,y)),C={label:e,layout:c,hideLabel:p,wrapLabel:m,statement:h,pct:Math.round(M*100),tone:a,fillColor:i,trackHeld:v.reading?.state==="held"&&!Fe(v.figure),fillHeld:x.reading?.state==="held"&&!Fe(x.figure),...b},I=xe(1,ge(v.reading,v.figure,v.figure));if(r!==void 0)return n.jsx(Mt,{of:x.figure?.unit,format:o,children:n.jsx(jn,{...C,value:t,capacity:r,shown:x,held:v,endBounds:I,at:M,valueLabel:s,valueLabelNode:l})});const T=xe(M,ge(x.reading,x.figure,null));return n.jsx(st,{...C,bounds:T,endBounds:I,display:l??(s===void 0?n.jsx(ee,{value:t,format:o}):n.jsx(at,{caption:ce(t),children:s})),spoken:it(s===void 0?te(x.figure,{format:o}):ot(s,ce(t)),T,I)})}function ce(e){const{held:t,caption:r}=re(e??null);return t?r:null}function ot(e,t){return t===null?e:`${e}, ${t}`}function at({caption:e,children:t}){return e===null?n.jsx(n.Fragment,{children:t}):n.jsx(Xe,{caption:e,children:t})}function Ce(e){return typeof e!="object"||e===null||!("state"in e)?{figure:e??null,reading:null}:{figure:e.value??null,reading:e}}function yn(e,t){return e===null||t===null||t!==void 0&&!t.isPositive()?null:(t===void 0?e:e.dividedBy(t)).magnitude}function ge(e,t,r){if(e===null||e.reckoning.status!=="available"||t===null)return null;const o=Qe(e.reckoning.band,t.unit);if(!o)return null;const a={loSaid:o.lo,hiSaid:o.hi,kind:o.kind};return r===null?{lo:ae(o.lo,0),hi:ae(o.hi,0),...a}:r.isPositive()?{lo:ae(o.lo.dividedBy(r),0),hi:ae(o.hi.dividedBy(r),0),...a}:null}function xe(e,t){return t===null?null:Ye(e,[t.lo,t.hi],Ve())?t:null}function it(e,t,r,o){const a=(s,l)=>{const c=te(s.loSaid,o),p=te(s.hiSaid,o);return`${l}with bands at ${c} and ${p}`},i=[t===null?null:a(t,""),r===null?null:a(r,"capacity ")].filter(s=>s!==null);return i.length===0?e:`${e}, ${i.join(", ")}`}function $n(e){if(!Number.isFinite(e))return 0;const t=Math.min(1,Math.max(0,e));return Math.round(t*1e4)/100}function ie(e){const t=$n(e),r=t<=0?0:t>=100?-2:-1;return{style:{left:`${t}%`,transform:`translateX(${r}px)`}}}function st({label:e,layout:t,hideLabel:r,wrapLabel:o,statement:a,pct:i,tone:s,fillColor:l,trackHeld:c,fillHeld:p,display:m,spoken:h,bounds:b,endBounds:x,...v}){return n.jsxs(lt,{layout:t,label:e,display:m,hideHead:r,wrapLabel:o,statement:a,...v,children:[n.jsx(rt,{percent:i,tone:s,fillColor:l,trackHeld:c,fillHeld:p,role:"meter","aria-label":e,"aria-valuenow":i,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":h}),(b!==null||x!==null)&&n.jsxs(Rn,{"aria-hidden":"true",children:[b!==null&&n.jsxs(n.Fragment,{children:[n.jsx(se,{"data-bound":"lo",...ie(b.lo)}),n.jsx(se,{"data-bound":"hi",...ie(b.hi)})]}),x!==null&&n.jsxs(n.Fragment,{children:[n.jsx(se,{"data-end-bound":"lo",...ie(x.lo)}),n.jsx(se,{"data-end-bound":"hi",...ie(x.hi)})]})]})]})}function lt({rowAction:e,layout:t,label:r,display:o,hideHead:a=!1,wrapLabel:i=!1,statement:s=!1,children:l,...c}){return a?n.jsxs(pe,{$row:!1,...c,children:[n.jsx(fe,{$row:!1,children:l}),s&&n.jsx(zn,{"data-meter-part":"statement",children:o})]}):t==="row"?n.jsxs(pe,{$row:!0,"data-meter-row":"",...c,children:[n.jsx(Be,{"data-meter-part":"label",children:r}),n.jsx(fe,{$row:!0,"data-meter-part":"bar",children:l}),n.jsxs(Le,{$row:!0,$hasAction:e!=null,"data-meter-part":"figure",children:[o,e&&n.jsx(Mn,{children:e})]})]}):n.jsxs(pe,{$row:!1,...c,children:[n.jsxs(Tn,{children:[n.jsx(Be,{$wrap:i,children:r}),n.jsx(Le,{$row:!1,children:o})]}),n.jsx(fe,{$row:!1,children:l})]})}function jn({value:e,capacity:t,shown:r,held:o,at:a,valueLabel:i,valueLabelNode:s,...l}){const c=i===void 0,p=ze(c?r.figure:void 0),m=ze(c?o.figure:void 0),h=p??m??{},b=ce(e)??ce(t),x=s??(i!==void 0?n.jsx(at,{caption:b,children:i}):l.layout==="row"?n.jsxs(Fn,{$marked:l.fillHeld||l.trackHeld,children:[n.jsx(ee,{value:e,hideUnitInGroup:!0})," / ",n.jsx(ee,{value:t}),(l.fillHeld||l.trackHeld)&&n.jsx(zt,{"aria-hidden":"true","data-held-mark":""})]}):n.jsxs(n.Fragment,{children:[n.jsx(ee,{value:e})," / ",n.jsx(ee,{value:t})]})),v=i===void 0?`${te(r.figure,h)} of ${te(o.figure,h)}`:ot(i,b),y=xe(a,ge(r.reading,r.figure,o.figure));return n.jsx(st,{...l,display:x,spoken:it(v,y,l.endBounds,h),bounds:y})}const ve=48;function Lr({children:e,...t}){const r=f.useRef(null);return f.useLayoutEffect(()=>{const o=r.current;if(!o||typeof ResizeObserver>"u")return;const a=()=>{o.clientWidth!==0&&o.toggleAttribute("data-figures-below",!kn(o))};let i=0;const s=()=>{cancelAnimationFrame(i),i=requestAnimationFrame(a)},l=new ResizeObserver(s),c=()=>{l.disconnect(),l.observe(o);for(const m of ct(o))l.observe(m)},p=new MutationObserver(c);return p.observe(o,{childList:!0,subtree:!0}),c(),a(),()=>{cancelAnimationFrame(i),l.disconnect(),p.disconnect()}},[]),n.jsx(Sn,{ref:r,...t,children:e})}const Or=u.div.attrs({"data-meter-row-group":""})`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  row-gap: var(--gap-meter-rows);
  min-width: 0;

  & > * {
    grid-column: 1 / -1;
    min-width: 0;
  }
`;function ct(e){return Array.from(e.querySelectorAll(':scope > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row] > [data-meter-part="figure"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="figure"]'))}function kn(e){const t=ct(e);if(t.length===0)return!0;let r=0,o=0;for(const c of t)c.dataset.meterPart==="label"?r=Math.max(r,_n(c)):o=Math.max(o,c.scrollWidth);const a=getComputedStyle(e),i=c=>Number.parseFloat(c)||0,s=i(a.columnGap),l=e.clientWidth-i(a.paddingLeft)-i(a.paddingRight);return r+s+ve+s+o<=l}function _n(e){const t=e.style.whiteSpace;e.style.whiteSpace="nowrap";const r=e.scrollWidth;return e.style.whiteSpace=t,r}const Sn=u.div`
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
`,Ie="1px",pe=u.div`
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
`,Tn=u.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--gap-label-value);
  min-width: 0;
  /* The value may drop to its own line at narrow widths rather than crushing the label. */
  flex-wrap: wrap;
`,Be=u.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  ${({$wrap:e})=>e?"overflow-wrap: anywhere;":"white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"}
  /* Never shrinks below the name: overflow hidden zeroes a flex item's automatic minimum size. */
  flex: 0 0 auto;
  max-width: 100%;
`,Le=u.span`
  font-size: ${({$row:e})=>e?"var(--font-size-compact)":"var(--font-size-value)"};
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  flex: 0 0 auto;
  /* Pins the value to the trailing edge on the shared line and when it wraps to its own. */
  margin-left: auto;
  max-width: 100%;
  overflow: ${({$hasAction:e})=>e?"visible":"hidden"};
  text-overflow: ellipsis;
  /* Room for the held mark Unit draws outside this box, reserved unconditionally so a quiet channel causes no reflow. */
  padding-right: max(0.44em, var(--inset-meter-mark));
`,Mn=u.span`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
`,zn=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Rn=u.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,fe=u.div`
  position: relative;
  ${({$row:e})=>e?S`
          flex: 1 1 28px;
          min-width: 28px;
        `:""}
`,Fn=u(Rt)`
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
`,An=u.div`
  display: ${({$size:e})=>e==="hero"?"flex":"inline-flex"};
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({$tone:e})=>we[e]};
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
`;function Pr({size:e="inline",tone:t="neutral",...r}){return n.jsx(An,{$size:e,$tone:t,...r})}const Dr=u.span`
  font-size: var(--font-size-caption);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-transform: uppercase;
`,En={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},Cn={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function In(e){return En[e]??Cn}function Nr({label:e,symbol:t,name:r=!1,...o}){const a=In(e);return n.jsxs(Bn,{$bg:a.bg,$fg:a.fg,$border:a.border,$symbol:t!==void 0,$name:r,...o,children:[t!==void 0&&n.jsx(Ln,{$name:r,"aria-hidden":"true",children:n.jsx(On,{children:t})}),t!==void 0?n.jsx(Pn,{$name:r,children:e}):e]})}const Bn=u.span`
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

  ${({$bg:e,$fg:t,$border:r})=>S`
    background: ${e};
    color: ${t};
    border: 1px solid ${r};
  `}
`,Ln=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({$name:e})=>e?S`padding: 0 var(--gap-glyph);`:S`padding: var(--inset-chip);`}
  background: currentColor;
`,On=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  font-weight: 800;
  line-height: var(--line-height-flush);
  color: var(--color-surface-panel);
`,Pn=u.span`
  ${({$name:e})=>e?S`padding: 0 var(--gap-glyph) 0 var(--gap-glyph-tray);`:S`padding: var(--inset-chip);`}
`,Oe=f.forwardRef(function(t,r){if(t.command!==void 0)return n.jsx(Ft,{...t});const{pressed:o=!1,tone:a="go",size:i="md",type:s="button","aria-pressed":l,command:c,...p}=t;return n.jsx(At,{ref:r,type:s,tone:o?a:void 0,size:i,pressed:o,"aria-pressed":l??o,...p})});function Pe(e,t,r,o){const a=t-e;if(a===0){const i=(r+o)/2;return()=>i}return i=>r+(i-e)/a*(o-r)}function Dn(e,t,r,o){return e.map((a,i)=>`${i===0?"M":"L"}${r(a).toFixed(2)},${o(t[i]).toFixed(2)}`).join(" ")}function Nn({values:e,width:t,height:r,color:o="var(--color-text-primary)",strokeWidth:a=1.5,yDomain:i,showZeroBaseline:s=!1,background:l=!0,"aria-label":c="Trend sparkline"}){const p=f.useMemo(()=>e.filter(k=>Number.isFinite(k)),[e]),m=`sparkline-fill-${f.useId().replace(/:/g,"")}`,h=f.useMemo(()=>{if(i)return i;if(p.length===0)return[0,1];let k=p[0],z=p[0];for(const A of p)A<k&&(k=A),A>z&&(z=A);if(k===z){const A=Math.abs(k)>0?Math.abs(k)*.01:1;return[k-A,z+A]}return[k,z]},[i,p]);if(t<=0||r<=0||p.length<2)return n.jsx("svg",{width:Math.max(0,t),height:Math.max(0,r),role:"img","aria-label":c,style:{display:"block"},children:n.jsx("title",{children:c})});const b=a/2,x=p.map((k,z)=>z),v=Pe(0,p.length-1,0,t),y=Pe(h[0],h[1],r-b,b),M=Dn(x,p,v,y),C=`${M} L ${t},${r} L 0,${r} Z`,I=s&&h[0]<=0&&h[1]>=0,T=I?y(0):null;return n.jsxs("svg",{width:t,height:r,role:"img","aria-label":c,style:{display:"block"},children:[n.jsx("title",{children:c}),l&&n.jsx("defs",{children:n.jsxs("linearGradient",{id:m,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:o,stopOpacity:"0.25"}),n.jsx("stop",{offset:"100%",stopColor:o,stopOpacity:"0.02"})]})}),I&&T!==null&&n.jsx("line",{x1:0,y1:T,x2:t,y2:T,stroke:"var(--color-border-subtle)",strokeWidth:1}),l&&n.jsx("path",{d:C,fill:`url(#${m})`,stroke:"none"}),n.jsx("path",{d:M,stroke:o,strokeWidth:a,fill:"none",strokeLinejoin:"round",strokeLinecap:"round"})]})}function Hr({size:e=12,thickness:t=2,color:r="var(--color-accent-fg)","aria-label":o="Loading",...a}){return n.jsx(Wn,{...a,role:"status","aria-label":o,$size:e,$thickness:t,$color:r})}const Hn=We`
  to { transform: rotate(360deg); }
`,Wn=u.span`
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
    animation: ${Hn} 700ms linear infinite;
  }
`,dt=240,Gn=8;function Un(e,t){if(e<=0||t<2)return!1;const r=t*dt+(t-1)*Gn;return e>=r}function Wr({tabs:e,activeId:t,onChange:r,expandWhenRoomy:o=!1,"aria-label":a,"aria-labelledby":i,className:s}){const l=f.useId(),c=f.useMemo(()=>e.map((d,j)=>({...d,id:d.id??`tab-${j}`})),[e]),p=t!==void 0,[m,h]=f.useState(()=>t??c[0]?.id??""),b=p?t:m,x=c.find(d=>d.id===b),v=x&&!x.disabled?x:c.find(d=>!d.disabled)??x??c[0],y=f.useCallback(d=>{p||h(d),r?.(d)},[p,r]),M=f.useMemo(()=>c.filter(d=>!d.disabled),[c]),{ref:C,size:I}=Et({w:0,h:0}),T=o&&Un(I.w,M.length),k=f.useRef(new Map),z=f.useRef(null),A=f.useRef(null),[U,W]=f.useState(!1),[F,Y]=f.useState(null),E=f.useCallback(d=>{z.current=d,Y(d)},[]),V=Ct(F),[G,X]=f.useState(null);f.useLayoutEffect(()=>{const d=z.current;if(!d)return;const j=()=>{W(_=>{_||(A.current=d.scrollWidth);const B=A.current;return B==null?!1:B>d.clientWidth})};j();const $=new ResizeObserver(j);return $.observe(d),()=>$.disconnect()},[T,c.length]),f.useLayoutEffect(()=>{const d=z.current,j=v?k.current.get(v.id):void 0;if(!d||!j){X(null);return}const $=()=>{const B=k.current.get(v?.id??"");B&&X(D=>D&&D.left===B.offsetLeft&&D.width===B.offsetWidth?D:{left:B.offsetLeft,width:B.offsetWidth})};$();const _=new ResizeObserver($);return _.observe(d),_.observe(j),()=>_.disconnect()},[v?.id,c.length,T]);const P=f.useCallback((d,j)=>{const $=c.length;for(let _=1;_<=$;_++){const B=c[((d+j*_)%$+$)%$];if(!(!B||B.disabled)){y(B.id),k.current.get(B.id)?.focus();return}}},[c,y]),g=f.useCallback(d=>{const j=c.findIndex($=>$.id===v?.id);if(!(j<0))switch(d.key){case"ArrowRight":case"ArrowDown":d.preventDefault(),P(j,1);break;case"ArrowLeft":case"ArrowUp":d.preventDefault(),P(j,-1);break;case"Home":d.preventDefault(),P(-1,1);break;case"End":d.preventDefault(),P(c.length,-1);break}},[c,v?.id,P]);return T?n.jsx(De,{ref:C,"data-tabs-root":"",className:s,children:n.jsx(It,{minColWidth:`${dt}px`,align:"start",gap:"related-comfortable",children:M.map(d=>n.jsxs(Ue,{children:[n.jsxs(xt,{as:"h3",$rule:!0,children:[d.label,d.indicator&&n.jsxs(n.Fragment,{children:[n.jsx(Ne,{"aria-hidden":"true"}),n.jsx(me,{children:", needs attention"})]})]}),d.content]},d.id))})}):n.jsxs(De,{ref:C,"data-tabs-root":"",className:s,children:[n.jsxs(Kn,{children:[n.jsx(qn,{ref:E,children:n.jsxs(Yn,{role:"tablist","aria-label":a,"aria-labelledby":i,children:[G&&n.jsx(Vn,{"aria-hidden":"true",style:{left:G.left,width:G.width}}),c.map(d=>{const j=d.id===v?.id;return n.jsxs(Xn,{ref:$=>{$?k.current.set(d.id,$):k.current.delete(d.id)},role:"tab",type:"button",id:`${l}${d.id}-tab`,"aria-selected":j,"aria-controls":`${l}${d.id}-panel`,"aria-describedby":d.indicator?`${l}${d.id}-attention`:void 0,tabIndex:j?0:-1,disabled:d.disabled,$active:j,onClick:()=>y(d.id),onKeyDown:g,$compact:U,children:[d.label,d.indicator&&n.jsxs(n.Fragment,{children:[n.jsx(Ne,{"aria-hidden":"true"}),n.jsx("span",{id:`${l}${d.id}-attention`,hidden:!0,children:"Needs attention"})]})]},d.id)})]})}),n.jsx(Re,{$position:"left",$visible:V.left}),n.jsx(Re,{$position:"right",$visible:V.right})]}),v&&n.jsx(Qn,{role:"tabpanel",id:`${l}${v.id}-panel`,"aria-labelledby":`${l}${v.id}-tab`,children:v.content})]})}const De=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-tabs-panel);
  /* Fills the panel and constrains children, so a flex:1 tab body can scroll. */
  flex: 1;
  min-height: 0;
`,Kn=u.div`
  position: relative;
  margin-inline: calc(-1 * var(--bleed-inline));
`,qn=u.div`
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
`,Yn=u.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  gap: var(--gap-tab);
  background: var(--color-surface-sunken);
  border-radius: var(--radius-pill);
  padding: var(--inset-tab-track);
  flex-wrap: nowrap;
`,Vn=u.span`
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
`,Ne=u.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-left: var(--gap-trailing-mark);
  vertical-align: middle;
  border-radius: var(--radius-circle);
  background: var(--color-warn-mark);
`,Xn=u.button`
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

  ${Bt}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
    /* Compact still applies on touch: a tab scrolled half out of view is a smaller target, not a bigger one. */
    ${({$compact:e})=>e?"padding: var(--inset-tab-compact-touch);":"padding: var(--inset-control-touch);"}
  }
`,Qn=u.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function Zn(e){return e===null||!e.capacity.isPositive()?null:e.amount.dividedBy(e.capacity).magnitude}const be={w:5,h:4},Jn=8,er=7;function Gr(e,t){return e===void 0||t===void 0?"normal":e<be.w||t<be.h?"tiny":e<Jn||t<er?"small":"normal"}const ut=1.6,tr=1/ut;function Ur(e,t){if(e===void 0||t===void 0||t===0)return{shape:"square",aspect:1};const r=e/t;return r>=ut?{shape:"landscape",aspect:r}:r<=tr?{shape:"portrait",aspect:r}:{shape:"square",aspect:r}}function Kr({title:e,essentials:t,equalRows:r=!1}){const o=r?void 0:t[0],a=r?t:t.slice(1),{rowsRef:i,drawn:s}=nr(a),l=t.some(h=>h.urgent!==void 0),c=o!==void 0&&a.length===0&&o.label.toUpperCase()===e.toUpperCase(),p=o?.value!=null&&o.gauge?.style==="arc"?o.gauge:void 0,m=p!==void 0;return n.jsx(Lt,{panelTitle:e,fitToSize:!0,hoverTitle:!0,panelTrend:o?.trend===void 0?void 0:({w:h,h:b})=>n.jsx(Nn,{values:o.trend??[],width:h,height:b,"aria-label":`${o.label} trend`}),sections:n.jsxs(Ue,{full:!0,children:[n.jsx(he,{visuallyHidden:!0,children:fr(t.filter(h=>h.urgent!==!0))}),l&&n.jsx(he,{visuallyHidden:!0,assertive:!0,additionsOnly:!0,children:hr(t).map(h=>n.jsx(f.Fragment,{children:`${h}. `},h))}),o!==void 0&&n.jsxs(mr,{"data-tiny-essential":"",children:[c||m?n.jsx(me,{as:"dt",children:o.label}):n.jsx(He,{children:o.label}),o.value!=null&&p!==void 0?n.jsx(lr,{essential:o,gauge:p}):o.gauge===void 0?n.jsx(pt,{$tone:o.tone??"neutral",children:n.jsx(le,{essential:o})}):n.jsxs(gr,{$tone:o.tone??"neutral",children:[n.jsx(xr,{children:n.jsx(le,{essential:o})}),n.jsx(sr,{essential:o,gauge:o.gauge})]})]}),a.length>0&&n.jsxs(wr,{ref:i,$equal:r,children:[a.slice(0,s).map(h=>n.jsxs(yr,{"data-tiny-essential":"",$equal:r,children:[n.jsx(He,{children:h.label}),n.jsx($r,{$tone:h.tone??"neutral",children:n.jsx(le,{essential:h})})]},h.label)),a.slice(s).map(h=>n.jsxs(me,{as:"div",children:[n.jsx("dt",{children:h.label}),n.jsx("dd",{children:h.control===void 0?n.jsx(le,{essential:h}):h.control.label})]},h.label))]})]})})}function nr(e){const t=f.useRef(null),[r,o]=f.useState(e.length),[a,i]=f.useState(0),s=e.map(l=>`${l.label}\0${l.word??rr(l.value)}`).join("");return f.useLayoutEffect(()=>{o(e.length)},[s,a,e.length]),f.useLayoutEffect(()=>{const l=t.current?.closest("[data-panel-fit-body]"),c=l?.firstElementChild;!l||!c||r===0||or(c)>l.clientHeight&&o(r-1)}),f.useLayoutEffect(()=>{const l=t.current?.closest("[data-panel-fit-body]");if(!l||typeof ResizeObserver>"u")return;let c=l.clientHeight;const p=new ResizeObserver(()=>{l.clientHeight!==c&&(c=l.clientHeight,i(m=>m+1))});return p.observe(l),()=>p.disconnect()},[]),{rowsRef:t,drawn:r}}function rr(e){try{return JSON.stringify(e)??""}catch{return String(e)}}function or(e){const t=[],r=[];for(const o of Array.from(e.querySelectorAll("[data-tiny-essential]"))){const a=o.getBoundingClientRect();t.push(a.top),r.push(a.bottom)}return t.length===0?0:Math.max(...r)-Math.min(...t)}function le({essential:e}){const{control:t}=e;return t?.command!==void 0?n.jsx(Oe,{size:"sm",command:t.command,state:t.active,name:t.title,unavailable:t.disabled?t.hint??t.title:null,tip:t.hint??t.title,"aria-label":t.title,children:()=>t.label}):t!==void 0?n.jsx(qe,{text:t.hint??t.title,children:n.jsx(Oe,{size:"sm",pressed:t.active,disabled:t.disabled,onClick:t.onPress,marked:t.held===void 0?null:{kind:"held",caption:t.held},"aria-label":t.title,children:t.label})}):n.jsxs(n.Fragment,{children:[e.level!==void 0&&n.jsx(hn,{lit:e.level.lit,of:e.level.of,tone:e.tone,label:e.label}),e.word!==void 0?e.word:n.jsx(ir,{essential:e})]})}function ar(e,t){return typeof e=="object"&&e!==null&&"state"in e?{...e,value:t.abs()}:t.abs()}function ir({essential:e}){const{mark:t,value:r,decimals:o}=e,{held:a,shown:i}=re(r),s=e.signed===!0&&i?.isFinite()===!0,l=s&&o!==void 0&&Math.abs(i.valueOf())<.5*10**-o,c=s&&(l||!i.isNegative())?"+":"",p=l?ar(r,i):r,m=n.jsxs(n.Fragment,{children:[c,n.jsx(ee,{value:p,decimals:o,scale:"compact",elsewhere:t?.elsewhere===!0&&(a||t.kind===void 0)?t.caption:void 0})]});return t===void 0||a||t.kind===void 0?m:n.jsx(Xe,{kind:t.kind,elsewhere:t.elsewhere,caption:t.caption,children:m})}function sr({essential:e,gauge:t}){const{shown:r,held:o}=re(e.value),a=s=>Zn({amount:s.max(t.min).min(t.max).minus(t.min),capacity:t.max.minus(t.min)})??0,i=r==null?null:a(r);return n.jsxs(br,{"aria-hidden":"true","data-tiny-gauge":"","data-held":o?"":void 0,viewBox:"0 0 100 1",preserveAspectRatio:"none",children:[(t.bands??[]).map(s=>n.jsx("rect",{x:a(s.from)*100,y:0,width:(a(s.to)-a(s.from))*100,height:1,fill:J[s.tone],opacity:.35},`${a(s.from)}-${a(s.to)}`)),i!==null&&n.jsx("rect",{"data-tiny-gauge-fill":"",x:0,y:0,width:i*100,height:1,fill:J[e.tone??"neutral"],opacity:o?.55:1})]})}function lr({essential:e,gauge:t}){const{ref:r,room:o}=cr(),a=Math.min(o.w,dr),i=Math.min(o.h-ur,Math.round(a/2)+pr),s=e.value;if(s==null)return null;const l=re(s).shown;return n.jsx(vr,{ref:r,children:n.jsx(pn,{startAngle:-90,sweep:180,value:s,min:t.min,max:t.max,zones:(t.bands??[]).map(c=>({from:c.from,to:c.to,color:J[c.tone]})),width:a,height:i,readout:"large","aria-label":l==null?e.label:`${e.label} ${Ge(l)}`})})}function cr(){const e=f.useRef(null),[t,r]=f.useState({w:200,h:110});return f.useLayoutEffect(()=>{const o=e.current?.closest("[data-panel-fit-body]"),a=o?.closest("[data-panel-body]");if(!o||!a||typeof ResizeObserver>"u")return;const i=()=>{const l=getComputedStyle(a),c=getComputedStyle(o),p=a.clientWidth-Number.parseFloat(l.paddingLeft)-Number.parseFloat(l.paddingRight),m=a.clientHeight-Number.parseFloat(l.paddingTop)-Number.parseFloat(l.paddingBottom)-Number.parseFloat(c.marginTop)-Number.parseFloat(c.marginBottom);p>0&&m>0&&r({w:Math.floor(p),h:Math.floor(m)})};i();const s=new ResizeObserver(i);return s.observe(a),()=>s.disconnect()},[]),{ref:e,room:t}}const dr=280,ur=16,pr=40;function fr(e){return e.filter(t=>t.word!==void 0).map(t=>`${t.label} ${t.word}`).join(", ")}function hr(e){return e.filter(t=>t.urgent===!0&&t.word!==void 0).map(t=>`${t.label} ${t.word}`)}function qr(e,t,r){if(e.tiny===void 0||t===void 0||r===void 0)return!1;const o=e.minSize??be;return t<o.w||r<o.h}function Yr(e){return e.tiny!==void 0?Ot:e.minSize}const mr=u.dl`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: var(--gap-tiny-content);
  margin: 0;
  min-width: 0;
`,pt=u.dd`
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
  color: ${({$tone:e})=>we[e]};
`,gr=u(pt)`
  flex-direction: column;
  align-items: stretch;
  gap: var(--gap-caption);
  line-height: var(--line-height-flush);
`,xr=u.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--gap-figure-parts);
`,vr=u.dd`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`,br=u.svg`
  display: block;
  width: 100%;
  height: var(--size-tiny-gauge);
`,He=u.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
`,wr=u.dl`
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
`,yr=u.div`
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
`,$r=u.dd`
  display: inline-flex;
  justify-content: flex-end;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  margin: 0;
  font-size: var(--font-size-value);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({$tone:e})=>we[e]};
`;export{Ht as C,Cr as D,Ir as F,hn as L,Br as M,Pr as R,Nn as S,dt as T,Lr as a,Dr as b,Hr as c,Ar as d,Er as e,Wr as f,Nr as g,Oe as h,qr as i,Kr as j,pn as k,Or as l,be as m,Pt as n,Nt as o,Gr as p,Ur as q,Yr as r,Un as s,Dt as t,Ae as u};
