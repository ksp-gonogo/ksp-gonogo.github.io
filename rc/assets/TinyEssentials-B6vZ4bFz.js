import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import u,{css as S,keyframes as We}from"./ext-styled-components-DAuodqsN.js";import{Y as ft,y as ht,g as J,U as Ge,N as Se,x as te,e as mt,c as gt,j as we,S as Ue,d as xt}from"./contributionsRead-Cdcp0syN.js";import{E as Ke,ae as vt,af as qe,aa as he,ah as bt,I as wt,ai as yt,ac as ne,bL as $t,bC as Ye,bu as Ve,bU as jt,aJ as kt,bV as Te,bB as Me,ad as _t,bI as St,ay as Tt,b3 as Mt,ab as ee,bW as ze,bX as zt,aD as Xe,bY as Rt,bZ as Ft,e as At,a5 as Et,b_ as Ct,aB as It,a1 as me,b$ as Re,c0 as Bt,P as Lt}from"./Modal-DImruGxU.js";import{r as f}from"./ext-react-C0MU9AHG.js";import{N as Ze,eF as Fe,cU as ae,cP as Ot}from"./context-C6-ms_G4.js";import"./ksp-enum-names-Bh2QnpCH.js";import"./logger-2_QM1wvD.js";import"./use-command-DyBcYpuK.js";function Qe(e,t){if(!t)return!0;const n=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(n)||e.key.toLowerCase().includes(n)}function Pt(e,t,n=Qe){return e.filter(o=>n(o,t))}function Nt(e,t="Other"){const n=new Map;for(const o of e){const a=o.group??t;let i=n.get(a);i||(i=[],n.set(a,i)),i.push(o)}return[...n.entries()].sort(([o],[a])=>o.localeCompare(a))}function Dt(e){return e.flatMap(([,t])=>t)}function Ae(e,t,n){return n===0?-1:Math.max(0,Math.min(e+t,n-1))}function Ht({id:e,groups:t,flatOptions:n,activeIndex:o,selectedKey:a,getOptionId:i,onHoverIndex:s,onSelectKey:l,renderItem:c,emptyLabel:p="No matches","aria-label":m,placement:h="below"}){return r.jsx(Wt,{role:"listbox",id:e,"aria-label":m,$placement:h,onMouseDown:b=>b.preventDefault(),children:n.length===0?r.jsx(Ke,{layout:"fill",children:p}):t.map(([b,x],v)=>r.jsxs(Gt,{role:"group","aria-labelledby":`${e}-group-${v}`,children:[r.jsx(Ut,{id:`${e}-group-${v}`,"aria-hidden":"true",children:b}),x.map(y=>{const M=n.indexOf(y),C=M===o;return r.jsx(qt,{id:i(y.key),role:"option","aria-selected":C,$active:C,$selected:y.key===a,onPointerDown:I=>{I.preventDefault(),l(y.key)},onMouseEnter:()=>s(M),children:c?c(y):y.label??y.key},y.key)})]},b))})}const Wt=u.div`
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
`;function An({tone:e,children:t,live:n=!1,pulse:o,...a}){const i=n?{role:"status","aria-live":"polite"}:{};return r.jsxs(Yt,{"data-tone":e,...i,...a,children:[r.jsx(Xt,{"data-tone":e,$pulse:o,"aria-hidden":"true"}),r.jsx(Zt,{children:t})]})}const Yt=u.div`
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
`,Zt=u.span`
  color: var(--color-text-primary);
  line-height: var(--line-height-body);
`;function En(e){return e.command?r.jsx(Jt,{...e,command:e.command}):r.jsx(Qt,{...e})}function Qt({checked:e,onChange:t,label:n,disabled:o,id:a,"aria-label":i}){return r.jsxs(Je,{$disabled:o,children:[r.jsx(et,{type:"checkbox",id:a,checked:e,disabled:o,onChange:s=>t(s.target.checked),"aria-label":n?void 0:i}),r.jsx(ye,{$checked:e,$disabled:o,children:r.jsx(tt,{$checked:e,$disabled:o})}),n&&r.jsx(rt,{children:n})]})}function Jt({command:e,state:t,unavailable:n,label:o,id:a,"aria-label":i}){const s=vt({command:e,unavailable:n}),l=t===!0,c=typeof t=="boolean";return r.jsx(qe,{text:s.tip,children:r.jsxs(Je,{$disabled:s.inert,children:[r.jsx(et,{type:"checkbox",id:a,checked:l,"aria-disabled":s.inert||void 0,onChange:()=>{c&&s.send(!t)},"aria-label":o?void 0:i}),r.jsx(ye,{$checked:l,$disabled:s.inert,...s.edge,children:r.jsx(tt,{$checked:l,$disabled:s.inert})}),o&&r.jsx(rt,{children:o}),r.jsx(er,{"aria-hidden":"true",children:s.word}),r.jsx(he,{visuallyHidden:!0,children:s.announce})]})})}const Je=u.label`
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
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-surface-raised)":e?"var(--color-go-mark)":"var(--color-surface-raised)"};
  border: 1px solid ${({$checked:e,$disabled:t})=>t?"var(--color-border-strong)":e?"var(--color-go-mark)":"var(--color-border-strong)"};
  position: relative;
  flex-shrink: 0;
  transition: background var(--duration-base), border-color var(--duration-base);
  ${bt}
`,er=u.span`
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
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-text-faint)":e?"var(--color-accent-fg)":"var(--color-text-faint)"};
  transition: left var(--duration-base), background var(--duration-base);
`,rt=u.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,tr="is no longer available";function Cn({keys:e,value:t,onChange:n,clearable:o=!1,placeholder:a="Search...",subjectNoun:i="value",id:s,"aria-label":l}){const[c,p]=f.useState(""),[m,h]=f.useState(!1),[b,x]=f.useState(-1),v=f.useRef(null),y=f.useRef(null),M=f.useId(),C=f.useId(),I=f.useId(),T=g=>`${C}-${g}`,k=e.find(g=>g.key===t),z=t!==null&&t!==""&&k===void 0&&e.length>0,A=e.some(g=>g.common),U=f.useMemo(()=>Pt(c===""&&A?e.filter(g=>g.common):e,c,(g,d)=>Qe(g,d)||(g.summary?.toLowerCase().includes(d.toLowerCase())??!1)),[e,c,A]),W=f.useMemo(()=>Nt(U),[U]),F=f.useMemo(()=>Dt(W),[W]),Y=f.useCallback(()=>{h(!0),p(""),x(-1)},[]),E=f.useCallback(()=>{h(!1),p(""),x(-1)},[]),V=f.useCallback(g=>{n(g),E()},[n,E]),G=g=>{if(!m){(g.key==="Enter"||g.key==="ArrowDown")&&Y();return}switch(g.key){case"Escape":g.stopPropagation(),E();break;case"ArrowDown":g.preventDefault(),x(d=>Ae(d,1,F.length));break;case"ArrowUp":g.preventDefault(),x(d=>Ae(d,-1,F.length));break;case"Enter":{const d=c!=="",j=b>=0?F[b]:d?F[0]:void 0;j&&V(j.key);break}}};f.useEffect(()=>{if(!m)return;const g=d=>{v.current?.contains(d.target)||E()};return document.addEventListener("pointerdown",g),()=>document.removeEventListener("pointerdown",g)},[m,E]);const X=m?c:k?.summary??k?.label??t??"",P=m&&b>=0?F[b]:void 0;return r.jsxs(rr,{ref:v,children:[r.jsx(nr,{ref:y,id:s,"aria-label":l,value:X,placeholder:m&&A?`Search all ${e.length} fields...`:t?void 0:a,$hasValue:!!t&&!m,$retired:z&&!m,"aria-invalid":z&&!m?!0:void 0,"aria-describedby":z&&!m?I:void 0,onFocus:Y,onBlur:E,onChange:g=>{p(g.target.value),x(-1)},onKeyDown:G,role:"combobox","aria-expanded":m,"aria-controls":M,"aria-autocomplete":"list","aria-activedescendant":P?T(P.key):void 0}),z&&!m&&r.jsx(ar,{id:I,children:`This ${i} ${tr}. Pick another.`}),o&&t&&!m&&r.jsx(or,{children:r.jsx(wt,{type:"button","aria-label":`Clear ${i}`,onClick:()=>{n(null),E()},children:"×"})}),m&&r.jsx(Ht,{id:M,groups:W,flatOptions:F,activeIndex:b,selectedKey:t,getOptionId:T,onHoverIndex:x,onSelectKey:V,"aria-label":l??"Data keys",renderItem:g=>r.jsxs(r.Fragment,{children:[r.jsx(ir,{children:g.label??g.key}),g.unit&&r.jsx(sr,{children:g.unit})]})})]})}const rr=u.div`
  position: relative;
  flex-grow: 1;
  min-width: 0;
`,nr=u.input`
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
`,or=u.span`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;

  @media (pointer: coarse) {
    right: 0;
  }
`,ar=u.div`
  color: var(--color-nogo-text);
  font-size: var(--font-size-compact);
  margin-top: var(--gap-caption);
`,ir=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);

  @media (pointer: coarse) {
    font-size: var(--font-size-prose);
  }
`,sr=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  margin-left: var(--gap-trailing-mark);
`,lr=6,cr=3,ue={track:8,hub:4,needle:.92},dr={regular:{size:16,drop:18},large:{size:24,drop:32}};function q(e,t,n,o){const a=o*Math.PI/180;return{x:e+n*Math.sin(a),y:t-n*Math.cos(a)}}function Ee(e,t,n,o,a){const i=q(e,t,n,o),s=q(e,t,n,a),l=a-o,c=Math.abs(l)>180?1:0,p=l>=0?1:0;return`M ${i.x.toFixed(2)} ${i.y.toFixed(2)} A ${n} ${n} 0 ${c} ${p} ${s.x.toFixed(2)} ${s.y.toFixed(2)}`}function ur({value:e,min:t,max:n,width:o=120,height:a=120,startAngle:i=0,sweep:s=360,wrap:l=!1,zones:c,ticks:p,valueLabel:m,readout:h,format:b,needleColor:x="var(--color-text-primary)",trackColor:v="var(--color-border-subtle)","aria-label":y}){const M=ne(e),{shown:C,held:I,caption:T,band:k}=M,{anchor:z,tip:A}=$t(T),U=C?.magnitude??Number.NaN,W=Number.isFinite(U)?C:null,F=t.magnitude,Y=n.magnitude,E=Y-F,V=Number.isFinite(U)?U:F,G=E>0?l?F+((V-F)%E+E)%E:Math.max(F,Math.min(Y,V)):F,X=W!=null,P=W==null?null:{magnitude:l?G:U,unit:W.unit},g=m??(P===null?null:Ge(P,{format:b})),d=P===null?Se:te(P,{format:b}),j=W==null||k===null?null:Ze(k,W.unit)??null,$=h!==void 0&&s<=180,_=$?ue.track:lr,B=$?ue.hub:cr,N=h===void 0?null:dr[h],D=o/2,R=$&&N!==null?Math.min((o-_)/2,a-_-N.drop):Math.min(o,a)/2-_-2,L=$?R+_/2:a/2,oe=w=>{const O=E>0?(w-F)/E:0;return i+O*s},Z=w=>w.max(t).min(n),Q=w=>oe(w.magnitude),de=w=>s!==0?(w-i)/s:0,$e=j!==null&&Ye(de(oe(G)),[de(Q(Z(j.lo))),de(Q(Z(j.hi)))],Ve({wraps:l}))?j:null,je=s>=360,ke=q(D,L,R*($?ue.needle:.88),oe(G));return r.jsxs(pr,{..._t(M),...z,...X?{role:"meter","aria-label":Me(y,T),...Te(T),"aria-valuenow":G,"aria-valuemin":F,"aria-valuemax":Y,"aria-valuetext":d}:{role:"img","aria-label":Me(`${y}: ${d}`,T),...Te(T)},children:[r.jsxs("svg",{width:o,height:a,viewBox:`0 0 ${o} ${a}`,"aria-hidden":"true",style:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto",overflow:$?"visible":void 0},children:[R>0&&(je?r.jsx("circle",{cx:D,cy:L,r:R,fill:"none",stroke:v,strokeWidth:_}):r.jsx("path",{d:Ee(D,L,R,i,i+s),fill:"none",stroke:v,strokeWidth:_,strokeLinecap:"round"})),R>0&&!je&&c?.flatMap(w=>{const O=Z(w.from.min(w.to)),H=Z(w.from.max(w.to));return H.greaterThan(O)?[O.greaterThan(t)?null:i,n.greaterThan(H)?null:i+s].flatMap(K=>{if(K===null)return[];const re=q(D,L,R,K);return[r.jsx("circle",{"data-dial-cap":"",cx:re.x,cy:re.y,r:_/2,fill:w.color},`cap-${w.color}-${K}`)]}):[]}),R>0&&c?.map(w=>{const O=Z(w.from.min(w.to)),H=Z(w.from.max(w.to));return H.greaterThan(O)?r.jsx("path",{d:Ee(D,L,R,Q(O),Q(H)),fill:"none",stroke:w.color,strokeWidth:_,strokeLinecap:"butt"},`zone-${w.color}-${Q(O)}-${Q(H)}`):null}),R>0&&p?.map(w=>{const O=w.value.magnitude,H=oe(O),K=q(D,L,R,H),re=q(D,L,R-_,H),_e=q(D,L,R-_-8,H);return r.jsxs("g",{children:[r.jsx("line",{x1:re.x,y1:re.y,x2:K.x,y2:K.y,stroke:"var(--color-text-faint)",strokeWidth:1}),w.label&&r.jsx("text",{x:_e.x,y:_e.y,textAnchor:"middle",dominantBaseline:"middle",fontSize:9,fill:"var(--color-text-faint)",children:w.label})]},`tick-${O}-${w.label??""}`)}),R>0&&$e!==null&&["lo","hi"].map(w=>{const O=Q(Z($e[w])),H=q(D,L,R-_/2,O),K=q(D,L,R+_/2,O);return r.jsx(jt,{end:w,x1:H.x,y1:H.y,x2:K.x,y2:K.y},w)}),R>0&&X&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:D,y1:L,x2:ke.x,y2:ke.y,stroke:x,strokeWidth:2,strokeLinecap:"round"}),r.jsx("circle",{cx:D,cy:L,r:B,fill:x})]}),r.jsxs("text",{x:D,y:$&&N!==null?L+N.drop:L+R*.55,textAnchor:"middle",fontSize:$&&N!==null?N.size:13,fontWeight:$?void 0:"bold",fill:g===null?"var(--color-text-muted)":"var(--color-text-primary)",children:[g??Se,I&&g!==null&&r.jsx(kt,{size:$?7:6,figureSize:$&&N!==null?N.size:13})]})]}),A]})}const pr=u.div`
  display: block;
  max-width: 100%;
`;function In({rows:e,segment:t="filters",emptyLabel:n="Nothing matches the filter"}){const o=St({segment:t}),a=e.filter(i=>o.matches(i.searchText));return r.jsx(Tt,{filter:o,children:a.length>0?r.jsx(mt,{gap:"related",children:a.map(i=>r.jsx("div",{children:i.node},i.id))}):r.jsx(Ke,{children:n})})}function fr({lit:e,of:t,tone:n="neutral",label:o}){const a=e===null?"unknown":`${e} of ${t}`;return r.jsx(hr,{role:"img","aria-label":o===void 0?a:`${o} ${a}`,"data-level-bars":"",children:Array.from({length:t},(i,s)=>r.jsx(mr,{$fill:e!==null&&s<e?J[n]:null,$height:(s+1)/t},s))})}const hr=u.span`
  display: inline-flex;
  align-items: flex-end;
  gap: var(--gap-signal-bars);
  height: 0.8em;
  flex: none;
`,mr=u.span`
  width: 0.22em;
  height: ${({$height:e})=>`${Math.round(e*100)}%`};
  background: ${({$fill:e})=>e??"transparent"};
  border: 1px solid ${({$fill:e})=>e??"var(--color-border-subtle)"};
`,gr="8px";function nt({percent:e,tone:t,fillColor:n,trackHeld:o=!1,fillHeld:a=!1,children:i,...s}){return r.jsxs(xr,{"data-track-held":o?"":void 0,...s,children:[e!==null&&r.jsx(br,{$tone:t,$fillColor:n,$held:a,"data-fill-held":a?"":void 0,style:{width:`${e}%`}}),o&&r.jsx(vr,{"data-track-hatch":"",style:{left:`${e??0}%`}}),i]})}const xr=u.div`
  width: 100%;
  border-radius: var(--radius-pill);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  overflow: hidden;
  /* Positioned for the fill only: this overflow rounds the fill's ends and would clip any mark drawn over it. */
  position: relative;
  height: ${gr};
`,vr=u.div`
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
`,br=u.div`
  height: 100%;
  border-radius: var(--radius-pill);
  transition: width var(--duration-slow) var(--ease-standard);
  /* A held reading dims the fill, not the hue and not the whole bar, so a label beside it stays readable. */
  ${({$held:e})=>e?"opacity: 0.55;":""}
  background: ${({$tone:e,$fillColor:t})=>t??J[e]};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function Bn({label:e,value:t,capacity:n,format:o,tone:a="neutral",fillColor:i,valueLabel:s,valueLabelNode:l,layout:c="stacked",hideLabel:p=!1,wrapLabel:m=!1,statement:h=!1,...b}){const x=Ce(t),v=Ce(n),y=wr(x.figure,n===void 0?void 0:v.figure);if(y===null||!Number.isFinite(y))return p?null:r.jsx(lt,{layout:c,label:e,wrapLabel:m,display:r.jsx(gt,{}),...b,children:r.jsx(nt,{percent:null,tone:a,"aria-hidden":"true"})});const M=Math.min(1,Math.max(0,y)),C={label:e,layout:c,hideLabel:p,wrapLabel:m,statement:h,pct:Math.round(M*100),tone:a,fillColor:i,trackHeld:v.reading?.state==="held"&&!Fe(v.figure),fillHeld:x.reading?.state==="held"&&!Fe(x.figure),...b},I=xe(1,ge(v.reading,v.figure,v.figure));if(n!==void 0)return r.jsx(Mt,{of:x.figure?.unit,format:o,children:r.jsx($r,{...C,value:t,capacity:n,shown:x,held:v,endBounds:I,at:M,valueLabel:s,valueLabelNode:l})});const T=xe(M,ge(x.reading,x.figure,null));return r.jsx(st,{...C,bounds:T,endBounds:I,display:l??(s===void 0?r.jsx(ee,{value:t,format:o}):r.jsx(at,{caption:ce(t),children:s})),spoken:it(s===void 0?te(x.figure,{format:o}):ot(s,ce(t)),T,I)})}function ce(e){const{held:t,caption:n}=ne(e??null);return t?n:null}function ot(e,t){return t===null?e:`${e}, ${t}`}function at({caption:e,children:t}){return e===null?r.jsx(r.Fragment,{children:t}):r.jsx(Xe,{caption:e,children:t})}function Ce(e){return typeof e!="object"||e===null||!("state"in e)?{figure:e??null,reading:null}:{figure:e.value??null,reading:e}}function wr(e,t){return e===null||t===null||t!==void 0&&!t.isPositive()?null:(t===void 0?e:e.dividedBy(t)).magnitude}function ge(e,t,n){if(e===null||e.reckoning.status!=="available"||t===null)return null;const o=Ze(e.reckoning.band,t.unit);if(!o)return null;const a={loSaid:o.lo,hiSaid:o.hi,kind:o.kind};return n===null?{lo:ae(o.lo,0),hi:ae(o.hi,0),...a}:n.isPositive()?{lo:ae(o.lo.dividedBy(n),0),hi:ae(o.hi.dividedBy(n),0),...a}:null}function xe(e,t){return t===null?null:Ye(e,[t.lo,t.hi],Ve())?t:null}function it(e,t,n,o){const a=(s,l)=>{const c=te(s.loSaid,o),p=te(s.hiSaid,o);return`${l}with bands at ${c} and ${p}`},i=[t===null?null:a(t,""),n===null?null:a(n,"capacity ")].filter(s=>s!==null);return i.length===0?e:`${e}, ${i.join(", ")}`}function yr(e){if(!Number.isFinite(e))return 0;const t=Math.min(1,Math.max(0,e));return Math.round(t*1e4)/100}function ie(e){const t=yr(e),n=t<=0?0:t>=100?-2:-1;return{style:{left:`${t}%`,transform:`translateX(${n}px)`}}}function st({label:e,layout:t,hideLabel:n,wrapLabel:o,statement:a,pct:i,tone:s,fillColor:l,trackHeld:c,fillHeld:p,display:m,spoken:h,bounds:b,endBounds:x,...v}){return r.jsxs(lt,{layout:t,label:e,display:m,hideHead:n,wrapLabel:o,statement:a,...v,children:[r.jsx(nt,{percent:i,tone:s,fillColor:l,trackHeld:c,fillHeld:p,role:"meter","aria-label":e,"aria-valuenow":i,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":h}),(b!==null||x!==null)&&r.jsxs(zr,{"aria-hidden":"true",children:[b!==null&&r.jsxs(r.Fragment,{children:[r.jsx(se,{"data-bound":"lo",...ie(b.lo)}),r.jsx(se,{"data-bound":"hi",...ie(b.hi)})]}),x!==null&&r.jsxs(r.Fragment,{children:[r.jsx(se,{"data-end-bound":"lo",...ie(x.lo)}),r.jsx(se,{"data-end-bound":"hi",...ie(x.hi)})]})]})]})}function lt({rowAction:e,layout:t,label:n,display:o,hideHead:a=!1,wrapLabel:i=!1,statement:s=!1,children:l,...c}){return a?r.jsxs(pe,{$row:!1,...c,children:[r.jsx(fe,{$row:!1,children:l}),s&&r.jsx(Mr,{"data-meter-part":"statement",children:o})]}):t==="row"?r.jsxs(pe,{$row:!0,"data-meter-row":"",...c,children:[r.jsx(Be,{"data-meter-part":"label",children:n}),r.jsx(fe,{$row:!0,"data-meter-part":"bar",children:l}),r.jsxs(Le,{$row:!0,$hasAction:e!=null,"data-meter-part":"figure",children:[o,e&&r.jsx(Tr,{children:e})]})]}):r.jsxs(pe,{$row:!1,...c,children:[r.jsxs(Sr,{children:[r.jsx(Be,{$wrap:i,children:n}),r.jsx(Le,{$row:!1,children:o})]}),r.jsx(fe,{$row:!1,children:l})]})}function $r({value:e,capacity:t,shown:n,held:o,at:a,valueLabel:i,valueLabelNode:s,...l}){const c=i===void 0,p=ze(c?n.figure:void 0),m=ze(c?o.figure:void 0),h=p??m??{},b=ce(e)??ce(t),x=s??(i!==void 0?r.jsx(at,{caption:b,children:i}):l.layout==="row"?r.jsxs(Rr,{$marked:l.fillHeld||l.trackHeld,children:[r.jsx(ee,{value:e,hideUnitInGroup:!0})," / ",r.jsx(ee,{value:t}),(l.fillHeld||l.trackHeld)&&r.jsx(zt,{"aria-hidden":"true","data-held-mark":""})]}):r.jsxs(r.Fragment,{children:[r.jsx(ee,{value:e})," / ",r.jsx(ee,{value:t})]})),v=i===void 0?`${te(n.figure,h)} of ${te(o.figure,h)}`:ot(i,b),y=xe(a,ge(n.reading,n.figure,o.figure));return r.jsx(st,{...l,display:x,spoken:it(v,y,l.endBounds,h),bounds:y})}const ve=48;function Ln({children:e,...t}){const n=f.useRef(null);return f.useLayoutEffect(()=>{const o=n.current;if(!o||typeof ResizeObserver>"u")return;const a=()=>{o.clientWidth!==0&&o.toggleAttribute("data-figures-below",!jr(o))};let i=0;const s=()=>{cancelAnimationFrame(i),i=requestAnimationFrame(a)},l=new ResizeObserver(s),c=()=>{l.disconnect(),l.observe(o);for(const m of ct(o))l.observe(m)},p=new MutationObserver(c);return p.observe(o,{childList:!0,subtree:!0}),c(),a(),()=>{cancelAnimationFrame(i),l.disconnect(),p.disconnect()}},[]),r.jsx(_r,{ref:n,...t,children:e})}const On=u.div.attrs({"data-meter-row-group":""})`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  row-gap: var(--gap-meter-rows);
  min-width: 0;

  & > * {
    grid-column: 1 / -1;
    min-width: 0;
  }
`;function ct(e){return Array.from(e.querySelectorAll(':scope > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row] > [data-meter-part="figure"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="figure"]'))}function jr(e){const t=ct(e);if(t.length===0)return!0;let n=0,o=0;for(const c of t)c.dataset.meterPart==="label"?n=Math.max(n,kr(c)):o=Math.max(o,c.scrollWidth);const a=getComputedStyle(e),i=c=>Number.parseFloat(c)||0,s=i(a.columnGap),l=e.clientWidth-i(a.paddingLeft)-i(a.paddingRight);return n+s+ve+s+o<=l}function kr(e){const t=e.style.whiteSpace;e.style.whiteSpace="nowrap";const n=e.scrollWidth;return e.style.whiteSpace=t,n}const _r=u.div`
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
`,Sr=u.div`
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
`,Tr=u.span`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
`,Mr=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,zr=u.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,fe=u.div`
  position: relative;
  ${({$row:e})=>e?S`
          flex: 1 1 28px;
          min-width: 28px;
        `:""}
`,Rr=u(Rt)`
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
`,Fr=u.div`
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
`;function Pn({size:e="inline",tone:t="neutral",...n}){return r.jsx(Fr,{$size:e,$tone:t,...n})}const Nn=u.span`
  font-size: var(--font-size-caption);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-transform: uppercase;
`,Ar={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},Er={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function Cr(e){return Ar[e]??Er}function Dn({label:e,symbol:t,name:n=!1,...o}){const a=Cr(e);return r.jsxs(Ir,{$bg:a.bg,$fg:a.fg,$border:a.border,$symbol:t!==void 0,$name:n,...o,children:[t!==void 0&&r.jsx(Br,{$name:n,"aria-hidden":"true",children:r.jsx(Lr,{children:t})}),t!==void 0?r.jsx(Or,{$name:n,children:e}):e]})}const Ir=u.span`
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
`,Br=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({$name:e})=>e?S`padding: 0 var(--gap-glyph);`:S`padding: var(--inset-chip);`}
  background: currentColor;
`,Lr=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  font-weight: 800;
  line-height: var(--line-height-flush);
  color: var(--color-surface-panel);
`,Or=u.span`
  ${({$name:e})=>e?S`padding: 0 var(--gap-glyph) 0 var(--gap-glyph-tray);`:S`padding: var(--inset-chip);`}
`,Oe=f.forwardRef(function(t,n){if(t.command!==void 0)return r.jsx(Ft,{...t});const{pressed:o=!1,tone:a="go",size:i="md",type:s="button","aria-pressed":l,command:c,...p}=t;return r.jsx(At,{ref:n,type:s,tone:o?a:void 0,size:i,pressed:o,"aria-pressed":l??o,...p})});function Pe(e,t,n,o){const a=t-e;if(a===0){const i=(n+o)/2;return()=>i}return i=>n+(i-e)/a*(o-n)}function Pr(e,t,n,o){return e.map((a,i)=>`${i===0?"M":"L"}${n(a).toFixed(2)},${o(t[i]).toFixed(2)}`).join(" ")}function Nr({values:e,width:t,height:n,color:o="var(--color-text-primary)",strokeWidth:a=1.5,yDomain:i,showZeroBaseline:s=!1,background:l=!0,"aria-label":c="Trend sparkline"}){const p=f.useMemo(()=>e.filter(k=>Number.isFinite(k)),[e]),m=`sparkline-fill-${f.useId().replace(/:/g,"")}`,h=f.useMemo(()=>{if(i)return i;if(p.length===0)return[0,1];let k=p[0],z=p[0];for(const A of p)A<k&&(k=A),A>z&&(z=A);if(k===z){const A=Math.abs(k)>0?Math.abs(k)*.01:1;return[k-A,z+A]}return[k,z]},[i,p]);if(t<=0||n<=0||p.length<2)return r.jsx("svg",{width:Math.max(0,t),height:Math.max(0,n),role:"img","aria-label":c,style:{display:"block"},children:r.jsx("title",{children:c})});const b=a/2,x=p.map((k,z)=>z),v=Pe(0,p.length-1,0,t),y=Pe(h[0],h[1],n-b,b),M=Pr(x,p,v,y),C=`${M} L ${t},${n} L 0,${n} Z`,I=s&&h[0]<=0&&h[1]>=0,T=I?y(0):null;return r.jsxs("svg",{width:t,height:n,role:"img","aria-label":c,style:{display:"block"},children:[r.jsx("title",{children:c}),l&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:m,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:o,stopOpacity:"0.25"}),r.jsx("stop",{offset:"100%",stopColor:o,stopOpacity:"0.02"})]})}),I&&T!==null&&r.jsx("line",{x1:0,y1:T,x2:t,y2:T,stroke:"var(--color-border-subtle)",strokeWidth:1}),l&&r.jsx("path",{d:C,fill:`url(#${m})`,stroke:"none"}),r.jsx("path",{d:M,stroke:o,strokeWidth:a,fill:"none",strokeLinejoin:"round",strokeLinecap:"round"})]})}function Hn({size:e=12,thickness:t=2,color:n="var(--color-accent-fg)","aria-label":o="Loading",...a}){return r.jsx(Hr,{...a,role:"status","aria-label":o,$size:e,$thickness:t,$color:n})}const Dr=We`
  to { transform: rotate(360deg); }
`,Hr=u.span`
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
    animation: ${Dr} 700ms linear infinite;
  }
`,dt=240,Wr=8;function Gr(e,t){if(e<=0||t<2)return!1;const n=t*dt+(t-1)*Wr;return e>=n}function Wn({tabs:e,activeId:t,onChange:n,expandWhenRoomy:o=!1,"aria-label":a,"aria-labelledby":i,className:s}){const l=f.useId(),c=f.useMemo(()=>e.map((d,j)=>({...d,id:d.id??`tab-${j}`})),[e]),p=t!==void 0,[m,h]=f.useState(()=>t??c[0]?.id??""),b=p?t:m,x=c.find(d=>d.id===b),v=x&&!x.disabled?x:c.find(d=>!d.disabled)??x??c[0],y=f.useCallback(d=>{p||h(d),n?.(d)},[p,n]),M=f.useMemo(()=>c.filter(d=>!d.disabled),[c]),{ref:C,size:I}=Et({w:0,h:0}),T=o&&Gr(I.w,M.length),k=f.useRef(new Map),z=f.useRef(null),A=f.useRef(null),[U,W]=f.useState(!1),[F,Y]=f.useState(null),E=f.useCallback(d=>{z.current=d,Y(d)},[]),V=Ct(F),[G,X]=f.useState(null);f.useLayoutEffect(()=>{const d=z.current;if(!d)return;const j=()=>{W(_=>{_||(A.current=d.scrollWidth);const B=A.current;return B==null?!1:B>d.clientWidth})};j();const $=new ResizeObserver(j);return $.observe(d),()=>$.disconnect()},[T,c.length]),f.useLayoutEffect(()=>{const d=z.current,j=v?k.current.get(v.id):void 0;if(!d||!j){X(null);return}const $=()=>{const B=k.current.get(v?.id??"");B&&X(N=>N&&N.left===B.offsetLeft&&N.width===B.offsetWidth?N:{left:B.offsetLeft,width:B.offsetWidth})};$();const _=new ResizeObserver($);return _.observe(d),_.observe(j),()=>_.disconnect()},[v?.id,c.length,T]);const P=f.useCallback((d,j)=>{const $=c.length;for(let _=1;_<=$;_++){const B=c[((d+j*_)%$+$)%$];if(!(!B||B.disabled)){y(B.id),k.current.get(B.id)?.focus();return}}},[c,y]),g=f.useCallback(d=>{const j=c.findIndex($=>$.id===v?.id);if(!(j<0))switch(d.key){case"ArrowRight":case"ArrowDown":d.preventDefault(),P(j,1);break;case"ArrowLeft":case"ArrowUp":d.preventDefault(),P(j,-1);break;case"Home":d.preventDefault(),P(-1,1);break;case"End":d.preventDefault(),P(c.length,-1);break}},[c,v?.id,P]);return T?r.jsx(Ne,{ref:C,"data-tabs-root":"",className:s,children:r.jsx(It,{minColWidth:`${dt}px`,align:"start",gap:"related-comfortable",children:M.map(d=>r.jsxs(Ue,{children:[r.jsxs(xt,{as:"h3",$rule:!0,children:[d.label,d.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(De,{"aria-hidden":"true"}),r.jsx(me,{children:", needs attention"})]})]}),d.content]},d.id))})}):r.jsxs(Ne,{ref:C,"data-tabs-root":"",className:s,children:[r.jsxs(Ur,{children:[r.jsx(Kr,{ref:E,children:r.jsxs(qr,{role:"tablist","aria-label":a,"aria-labelledby":i,children:[G&&r.jsx(Yr,{"aria-hidden":"true",style:{left:G.left,width:G.width}}),c.map(d=>{const j=d.id===v?.id;return r.jsxs(Vr,{ref:$=>{$?k.current.set(d.id,$):k.current.delete(d.id)},role:"tab",type:"button",id:`${l}${d.id}-tab`,"aria-selected":j,"aria-controls":`${l}${d.id}-panel`,"aria-describedby":d.indicator?`${l}${d.id}-attention`:void 0,tabIndex:j?0:-1,disabled:d.disabled,$active:j,onClick:()=>y(d.id),onKeyDown:g,$compact:U,children:[d.label,d.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(De,{"aria-hidden":"true"}),r.jsx("span",{id:`${l}${d.id}-attention`,hidden:!0,children:"Needs attention"})]})]},d.id)})]})}),r.jsx(Re,{$position:"left",$visible:V.left}),r.jsx(Re,{$position:"right",$visible:V.right})]}),v&&r.jsx(Xr,{role:"tabpanel",id:`${l}${v.id}-panel`,"aria-labelledby":`${l}${v.id}-tab`,children:v.content})]})}const Ne=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-tabs-panel);
  /* Fills the panel and constrains children, so a flex:1 tab body can scroll. */
  flex: 1;
  min-height: 0;
`,Ur=u.div`
  position: relative;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Kr=u.div`
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
`,qr=u.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  gap: var(--gap-tab);
  background: var(--color-surface-sunken);
  border-radius: var(--radius-pill);
  padding: var(--inset-tab-track);
  flex-wrap: nowrap;
`,Yr=u.span`
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
`,De=u.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-left: var(--gap-trailing-mark);
  vertical-align: middle;
  border-radius: var(--radius-circle);
  background: var(--color-warn-mark);
`,Vr=u.button`
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
`,Xr=u.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function Zr(e){return e===null||!e.capacity.isPositive()?null:e.amount.dividedBy(e.capacity).magnitude}const be={w:5,h:4},Qr=8,Jr=7;function Gn(e,t){return e===void 0||t===void 0?"normal":e<be.w||t<be.h?"tiny":e<Qr||t<Jr?"small":"normal"}const ut=1.6,en=1/ut;function Un(e,t){if(e===void 0||t===void 0||t===0)return{shape:"square",aspect:1};const n=e/t;return n>=ut?{shape:"landscape",aspect:n}:n<=en?{shape:"portrait",aspect:n}:{shape:"square",aspect:n}}function Kn({title:e,essentials:t,equalRows:n=!1}){const o=n?void 0:t[0],a=n?t:t.slice(1),{rowsRef:i,drawn:s}=tn(a),l=t.some(h=>h.urgent!==void 0),c=o!==void 0&&a.length===0&&o.label.toUpperCase()===e.toUpperCase(),p=o?.value!=null&&o.gauge?.style==="arc"?o.gauge:void 0,m=p!==void 0;return r.jsx(Lt,{panelTitle:e,fitToSize:!0,hoverTitle:!0,panelTrend:o?.trend===void 0?void 0:({w:h,h:b})=>r.jsx(Nr,{values:o.trend??[],width:h,height:b,"aria-label":`${o.label} trend`}),sections:r.jsxs(Ue,{full:!0,children:[r.jsx(he,{visuallyHidden:!0,children:fn(t.filter(h=>h.urgent!==!0))}),l&&r.jsx(he,{visuallyHidden:!0,assertive:!0,additionsOnly:!0,children:hn(t).map(h=>r.jsx(f.Fragment,{children:`${h}. `},h))}),o!==void 0&&r.jsxs(mn,{"data-tiny-essential":"",children:[c||m?r.jsx(me,{as:"dt",children:o.label}):r.jsx(He,{children:o.label}),o.value!=null&&p!==void 0?r.jsx(ln,{essential:o,gauge:p}):o.gauge===void 0?r.jsx(pt,{$tone:o.tone??"neutral",children:r.jsx(le,{essential:o})}):r.jsxs(gn,{$tone:o.tone??"neutral",children:[r.jsx(xn,{children:r.jsx(le,{essential:o})}),r.jsx(sn,{essential:o,gauge:o.gauge})]})]}),a.length>0&&r.jsxs(wn,{ref:i,$equal:n,children:[a.slice(0,s).map(h=>r.jsxs(yn,{"data-tiny-essential":"",$equal:n,children:[r.jsx(He,{children:h.label}),r.jsx($n,{$tone:h.tone??"neutral",children:r.jsx(le,{essential:h})})]},h.label)),a.slice(s).map(h=>r.jsxs(me,{as:"div",children:[r.jsx("dt",{children:h.label}),r.jsx("dd",{children:h.control===void 0?r.jsx(le,{essential:h}):h.control.label})]},h.label))]})]})})}function tn(e){const t=f.useRef(null),[n,o]=f.useState(e.length),[a,i]=f.useState(0),s=e.map(l=>`${l.label}\0${l.word??rn(l.value)}`).join("");return f.useLayoutEffect(()=>{o(e.length)},[s,a,e.length]),f.useLayoutEffect(()=>{const l=t.current?.closest("[data-panel-fit-body]"),c=l?.firstElementChild;!l||!c||n===0||nn(c)>l.clientHeight&&o(n-1)}),f.useLayoutEffect(()=>{const l=t.current?.closest("[data-panel-fit-body]");if(!l||typeof ResizeObserver>"u")return;let c=l.clientHeight;const p=new ResizeObserver(()=>{l.clientHeight!==c&&(c=l.clientHeight,i(m=>m+1))});return p.observe(l),()=>p.disconnect()},[]),{rowsRef:t,drawn:n}}function rn(e){try{return JSON.stringify(e)??""}catch{return String(e)}}function nn(e){const t=[],n=[];for(const o of Array.from(e.querySelectorAll("[data-tiny-essential]"))){const a=o.getBoundingClientRect();t.push(a.top),n.push(a.bottom)}return t.length===0?0:Math.max(...n)-Math.min(...t)}function le({essential:e}){const{control:t}=e;return t?.command!==void 0?r.jsx(Oe,{size:"sm",command:t.command,state:t.active,name:t.title,unavailable:t.disabled?t.hint??t.title:null,tip:t.hint??t.title,"aria-label":t.title,children:()=>t.label}):t!==void 0?r.jsx(qe,{text:t.hint??t.title,children:r.jsx(Oe,{size:"sm",pressed:t.active,disabled:t.disabled,onClick:t.onPress,marked:t.held===void 0?null:{kind:"held",caption:t.held},"aria-label":t.title,children:t.label})}):r.jsxs(r.Fragment,{children:[e.level!==void 0&&r.jsx(fr,{lit:e.level.lit,of:e.level.of,tone:e.tone,label:e.label}),e.word!==void 0?e.word:r.jsx(an,{essential:e})]})}function on(e,t){return typeof e=="object"&&e!==null&&"state"in e?{...e,value:t.abs()}:t.abs()}function an({essential:e}){const{mark:t,value:n,decimals:o}=e,{held:a,shown:i}=ne(n),s=e.signed===!0&&i?.isFinite()===!0,l=s&&o!==void 0&&Math.abs(i.valueOf())<.5*10**-o,c=s&&(l||!i.isNegative())?"+":"",p=l?on(n,i):n,m=r.jsxs(r.Fragment,{children:[c,r.jsx(ee,{value:p,decimals:o,scale:"compact",elsewhere:t?.elsewhere===!0&&(a||t.kind===void 0)?t.caption:void 0})]});return t===void 0||a||t.kind===void 0?m:r.jsx(Xe,{kind:t.kind,elsewhere:t.elsewhere,caption:t.caption,children:m})}function sn({essential:e,gauge:t}){const{shown:n,held:o}=ne(e.value),a=s=>Zr({amount:s.max(t.min).min(t.max).minus(t.min),capacity:t.max.minus(t.min)})??0,i=n==null?null:a(n);return r.jsxs(bn,{"aria-hidden":"true","data-tiny-gauge":"","data-held":o?"":void 0,viewBox:"0 0 100 1",preserveAspectRatio:"none",children:[(t.bands??[]).map(s=>r.jsx("rect",{x:a(s.from)*100,y:0,width:(a(s.to)-a(s.from))*100,height:1,fill:J[s.tone],opacity:.35},`${a(s.from)}-${a(s.to)}`)),i!==null&&r.jsx("rect",{"data-tiny-gauge-fill":"",x:0,y:0,width:i*100,height:1,fill:J[e.tone??"neutral"],opacity:o?.55:1})]})}function ln({essential:e,gauge:t}){const{ref:n,room:o}=cn(),a=Math.min(o.w,dn),i=Math.min(o.h-un,Math.round(a/2)+pn),s=e.value;if(s==null)return null;const l=ne(s).shown;return r.jsx(vn,{ref:n,children:r.jsx(ur,{startAngle:-90,sweep:180,value:s,min:t.min,max:t.max,zones:(t.bands??[]).map(c=>({from:c.from,to:c.to,color:J[c.tone]})),width:a,height:i,readout:"large","aria-label":l==null?e.label:`${e.label} ${Ge(l)}`})})}function cn(){const e=f.useRef(null),[t,n]=f.useState({w:200,h:110});return f.useLayoutEffect(()=>{const o=e.current?.closest("[data-panel-fit-body]"),a=o?.closest("[data-panel-body]");if(!o||!a||typeof ResizeObserver>"u")return;const i=()=>{const l=getComputedStyle(a),c=getComputedStyle(o),p=a.clientWidth-Number.parseFloat(l.paddingLeft)-Number.parseFloat(l.paddingRight),m=a.clientHeight-Number.parseFloat(l.paddingTop)-Number.parseFloat(l.paddingBottom)-Number.parseFloat(c.marginTop)-Number.parseFloat(c.marginBottom);p>0&&m>0&&n({w:Math.floor(p),h:Math.floor(m)})};i();const s=new ResizeObserver(i);return s.observe(a),()=>s.disconnect()},[]),{ref:e,room:t}}const dn=280,un=16,pn=40;function fn(e){return e.filter(t=>t.word!==void 0).map(t=>`${t.label} ${t.word}`).join(", ")}function hn(e){return e.filter(t=>t.urgent===!0&&t.word!==void 0).map(t=>`${t.label} ${t.word}`)}function qn(e,t,n){if(e.tiny===void 0||t===void 0||n===void 0)return!1;const o=e.minSize??be;return t<o.w||n<o.h}function Yn(e){return e.tiny!==void 0?Ot:e.minSize}const mn=u.dl`
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
`,gn=u(pt)`
  flex-direction: column;
  align-items: stretch;
  gap: var(--gap-caption);
  line-height: var(--line-height-flush);
`,xn=u.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--gap-figure-parts);
`,vn=u.dd`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`,bn=u.svg`
  display: block;
  width: 100%;
  height: var(--size-tiny-gauge);
`,He=u.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
`,wn=u.dl`
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
`,yn=u.div`
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
`,$n=u.dd`
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
`;export{Ht as C,Cn as D,In as F,fr as L,Bn as M,Pn as R,Nr as S,dt as T,Ln as a,Nn as b,Hn as c,An as d,En as e,Wn as f,Dn as g,Oe as h,qn as i,Kn as j,ur as k,On as l,be as m,Pt as n,Dt as o,Gn as p,Un as q,Yn as r,Gr as s,Nt as t,Ae as u};
