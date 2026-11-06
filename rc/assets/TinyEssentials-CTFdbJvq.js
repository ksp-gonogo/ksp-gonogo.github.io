import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import u,{css as S,keyframes as Ne}from"./ext-styled-components-DAuodqsN.js";import{Y as lt,G as ct,j as Q,V as He,N as ke,E as te,i as dt,g as ut,m as be,S as We,h as pt}from"./contributionsRead-Dk9N3tft.js";import{r as h}from"./ext-react-C0MU9AHG.js";import{E as Ge,e as ft,ae as Ue,af as ne,bv as ht,bn as Ke,bg as qe,bD as gt,aC as mt,bE as _e,bm as Se,ag as xt,bs as vt,at as bt,aT as wt,ac as ee,bF as Te,bG as yt,aw as Ve,bH as $t,a3 as jt,bI as kt,av as _t,$ as he,bJ as Me,bK as St,P as Tt,a7 as ze,ad as Mt}from"./ModalSaveBar-DYwnUBcd.js";import{l as Ye,cJ as Re,b8 as ae,b3 as zt}from"./view-clock-formula-Bm6xOQIY.js";import"./ksp-enum-names-DtqyRCA5.js";import"./logger-2_QM1wvD.js";import"./screen-CDftIe5d.js";function Xe(e,t){if(!t)return!0;const n=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(n)||e.key.toLowerCase().includes(n)}function Rt(e,t,n=Xe){return e.filter(o=>n(o,t))}function Ft(e,t="Other"){const n=new Map;for(const o of e){const a=o.group??t;let i=n.get(a);i||(i=[],n.set(a,i)),i.push(o)}return[...n.entries()].sort(([o],[a])=>o.localeCompare(a))}function At(e){return e.flatMap(([,t])=>t)}function Fe(e,t,n){return n===0?-1:Math.max(0,Math.min(e+t,n-1))}function Et({id:e,groups:t,flatOptions:n,activeIndex:o,selectedKey:a,getOptionId:i,onHoverIndex:s,onSelectKey:l,renderItem:c,emptyLabel:p="No matches","aria-label":g,placement:f="below"}){return r.jsx(Ct,{role:"listbox",id:e,"aria-label":g,$placement:f,onMouseDown:m=>m.preventDefault(),children:n.length===0?r.jsx(Ge,{layout:"fill",children:p}):t.map(([m,v],w)=>r.jsxs(It,{role:"group","aria-labelledby":`${e}-group-${w}`,children:[r.jsx(Bt,{id:`${e}-group-${w}`,"aria-hidden":"true",children:m}),v.map(y=>{const z=n.indexOf(y),F=z===o;return r.jsx(Ot,{id:i(y.key),role:"option","aria-selected":F,$active:F,$selected:y.key===a,onPointerDown:B=>{B.preventDefault(),l(y.key)},onMouseEnter:()=>s(z),children:c?c(y):y.label??y.key},y.key)})]},m))})}const Ct=u.div`
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
`,It=u.div``,Bt=u.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-raised);
`;function Lt(e,t){return e?"background: var(--color-surface-panel);":t?lt("go"):"background: transparent;"}const Ot=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-menu-item);
  cursor: pointer;
  ${({$active:e,$selected:t})=>Lt(e,t)}
  /* Focus stays on the input, so the highlighted option carries the focus colour as an inset bar. */
  box-shadow: ${({$active:e})=>e?"inset 3px 0 0 var(--color-focus)":"none"};

  &:hover {
    background: var(--color-surface-panel);
  }

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`;function kn({tone:e,children:t,live:n=!1,pulse:o,...a}){const i=n?{role:"status","aria-live":"polite"}:{};return r.jsxs(Pt,{"data-tone":e,...i,...a,children:[r.jsx(Nt,{"data-tone":e,$pulse:o,"aria-hidden":"true"}),r.jsx(Ht,{children:t})]})}const Pt=u.div`
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

  border-color: ${({"data-tone":e})=>ct(e)};
`,Dt=Ne`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,Nt=u.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  flex-shrink: 0;

  background: ${({"data-tone":e})=>Q[e]};

  /* A looping pulse needs its own reduced-motion guard; the 1s/2s periods encode connection state. */
  ${({$pulse:e})=>e?S`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${Dt} ${e==="fast"?"1s":"2s"}
              var(--ease-emphasis) infinite;
          }
        `:""}
`,Ht=u.span`
  color: var(--color-text-primary);
  line-height: var(--line-height-body);
`;function _n({checked:e,onChange:t,label:n,disabled:o,id:a,"aria-label":i}){return r.jsxs(Wt,{$disabled:o,children:[r.jsx(Gt,{type:"checkbox",id:a,checked:e,disabled:o,onChange:s=>t(s.target.checked),"aria-label":n?void 0:i}),r.jsx(Ze,{$checked:e,$disabled:o,children:r.jsx(Ut,{$checked:e,$disabled:o})}),n&&r.jsx(Kt,{children:n})]})}const Wt=u.label`
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
`,Ze=u.div`
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

  &:focus-visible + ${Ze} {
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
`,qt=h.forwardRef(function({pressed:t=!1,tone:n="go",size:o="md",type:a="button","aria-pressed":i,...s},l){return r.jsx(ft,{ref:l,type:a,tone:t?n:void 0,size:o,pressed:t,"aria-pressed":i??t,...s})}),Vt="is no longer available";function Sn({keys:e,value:t,onChange:n,clearable:o=!1,placeholder:a="Search...",subjectNoun:i="value",id:s,"aria-label":l}){const[c,p]=h.useState(""),[g,f]=h.useState(!1),[m,v]=h.useState(-1),w=h.useRef(null),y=h.useRef(null),z=h.useId(),F=h.useId(),B=h.useId(),A=x=>`${F}-${x}`,k=e.find(x=>x.key===t),T=t!==null&&t!==""&&k===void 0&&e.length>0,E=e.some(x=>x.common),U=h.useMemo(()=>Rt(c===""&&E?e.filter(x=>x.common):e,c,(x,d)=>Xe(x,d)||(x.summary?.toLowerCase().includes(d.toLowerCase())??!1)),[e,c,E]),W=h.useMemo(()=>Ft(U),[U]),R=h.useMemo(()=>At(W),[W]),V=h.useCallback(()=>{f(!0),p(""),v(-1)},[]),C=h.useCallback(()=>{f(!1),p(""),v(-1)},[]),Y=h.useCallback(x=>{n(x),C()},[n,C]),G=x=>{if(!g){(x.key==="Enter"||x.key==="ArrowDown")&&V();return}switch(x.key){case"Escape":x.stopPropagation(),C();break;case"ArrowDown":x.preventDefault(),v(d=>Fe(d,1,R.length));break;case"ArrowUp":x.preventDefault(),v(d=>Fe(d,-1,R.length));break;case"Enter":{const d=c!=="",j=m>=0?R[m]:d?R[0]:void 0;j&&Y(j.key);break}}};h.useEffect(()=>{if(!g)return;const x=d=>{w.current?.contains(d.target)||C()};return document.addEventListener("pointerdown",x),()=>document.removeEventListener("pointerdown",x)},[g,C]);const X=g?c:k?.summary??k?.label??t??"",P=g&&m>=0?R[m]:void 0;return r.jsxs(Yt,{ref:w,children:[r.jsx(Xt,{ref:y,id:s,"aria-label":l,value:X,placeholder:g&&E?`Search all ${e.length} fields...`:t?void 0:a,$hasValue:!!t&&!g,$retired:T&&!g,"aria-invalid":T&&!g?!0:void 0,"aria-describedby":T&&!g?B:void 0,onFocus:V,onBlur:C,onChange:x=>{p(x.target.value),v(-1)},onKeyDown:G,role:"combobox","aria-expanded":g,"aria-controls":z,"aria-autocomplete":"list","aria-activedescendant":P?A(P.key):void 0}),T&&!g&&r.jsx(Jt,{id:B,children:`This ${i} ${Vt}. Pick another.`}),o&&t&&!g&&r.jsx(Zt,{type:"button","aria-label":`Clear ${i}`,onClick:()=>{n(null),C()},children:"×"}),g&&r.jsx(Et,{id:z,groups:W,flatOptions:R,activeIndex:m,selectedKey:t,getOptionId:A,onHoverIndex:v,onSelectKey:Y,"aria-label":l??"Data keys",renderItem:x=>r.jsxs(r.Fragment,{children:[r.jsx(Qt,{children:x.label??x.key}),x.unit&&r.jsx(er,{children:x.unit})]})})]})}const Yt=u.div`
  position: relative;
  flex-grow: 1;
  min-width: 0;
`,Xt=u.input`
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

  ${Ue}

  &::placeholder {
    color: var(--color-text-faint);
  }

  @media (pointer: coarse) {
    min-height: var(--touch-target);
    padding: var(--inset-field-touch);
    /* Under a coarse pointer the large step is 17px, above the 16px at which iOS Safari zooms on focus. */
    font-size: var(--font-size-lg);
  }
`,Zt=u.button`
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

  ${Ue}

  @media (pointer: coarse) {
    min-width: var(--touch-target);
    min-height: var(--touch-target);
    right: 0;
  }
`,Jt=u.div`
  color: var(--color-nogo-text);
  font-size: var(--font-size-compact);
  margin-top: var(--gap-caption);
`,Qt=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);

  @media (pointer: coarse) {
    font-size: var(--font-size-prose);
  }
`,er=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  margin-left: var(--gap-trailing-mark);
`,tr=6,rr=3,ue={track:8,hub:4,needle:.92},nr={regular:{size:16,drop:18},large:{size:24,drop:32}};function q(e,t,n,o){const a=o*Math.PI/180;return{x:e+n*Math.sin(a),y:t-n*Math.cos(a)}}function Ae(e,t,n,o,a){const i=q(e,t,n,o),s=q(e,t,n,a),l=a-o,c=Math.abs(l)>180?1:0,p=l>=0?1:0;return`M ${i.x.toFixed(2)} ${i.y.toFixed(2)} A ${n} ${n} 0 ${c} ${p} ${s.x.toFixed(2)} ${s.y.toFixed(2)}`}function or({value:e,min:t,max:n,width:o=120,height:a=120,startAngle:i=0,sweep:s=360,wrap:l=!1,zones:c,ticks:p,valueLabel:g,readout:f,format:m,needleColor:v="var(--color-text-primary)",trackColor:w="var(--color-border-subtle)","aria-label":y}){const z=ne(e),{shown:F,held:B,caption:A,band:k}=z,{anchor:T,tip:E}=ht(A),U=F?.magnitude??Number.NaN,W=Number.isFinite(U)?F:null,R=t.magnitude,V=n.magnitude,C=V-R,Y=Number.isFinite(U)?U:R,G=C>0?l?R+((Y-R)%C+C)%C:Math.max(R,Math.min(V,Y)):R,X=W!=null,P=W==null?null:{magnitude:l?G:U,unit:W.unit},x=g??(P===null?null:He(P,{format:m})),d=P===null?ke:te(P,{format:m}),j=W==null||k===null?null:Ye(k,W.unit)??null,$=f!==void 0&&s<=180,_=$?ue.track:tr,I=$?ue.hub:rr,D=f===void 0?null:nr[f],N=o/2,M=$&&D!==null?Math.min((o-_)/2,a-_-D.drop):Math.min(o,a)/2-_-2,L=$?M+_/2:a/2,oe=b=>{const O=C>0?(b-R)/C:0;return i+O*s},Z=b=>b.max(t).min(n),J=b=>oe(b.magnitude),de=b=>s!==0?(b-i)/s:0,we=j!==null&&Ke(de(oe(G)),[de(J(Z(j.lo))),de(J(Z(j.hi)))],qe({wraps:l}))?j:null,ye=s>=360,$e=q(N,L,M*($?ue.needle:.88),oe(G));return r.jsxs(ar,{...xt(z),...T,...X?{role:"meter","aria-label":Se(y,A),..._e(A),"aria-valuenow":G,"aria-valuemin":R,"aria-valuemax":V,"aria-valuetext":d}:{role:"img","aria-label":Se(`${y}: ${d}`,A),..._e(A)},children:[r.jsxs("svg",{width:o,height:a,viewBox:`0 0 ${o} ${a}`,"aria-hidden":"true",style:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto",overflow:$?"visible":void 0},children:[M>0&&(ye?r.jsx("circle",{cx:N,cy:L,r:M,fill:"none",stroke:w,strokeWidth:_}):r.jsx("path",{d:Ae(N,L,M,i,i+s),fill:"none",stroke:w,strokeWidth:_,strokeLinecap:"round"})),M>0&&!ye&&c?.flatMap(b=>{const O=Z(b.from.min(b.to)),H=Z(b.from.max(b.to));return H.greaterThan(O)?[O.greaterThan(t)?null:i,n.greaterThan(H)?null:i+s].flatMap(K=>{if(K===null)return[];const re=q(N,L,M,K);return[r.jsx("circle",{"data-dial-cap":"",cx:re.x,cy:re.y,r:_/2,fill:b.color},`cap-${b.color}-${K}`)]}):[]}),M>0&&c?.map(b=>{const O=Z(b.from.min(b.to)),H=Z(b.from.max(b.to));return H.greaterThan(O)?r.jsx("path",{d:Ae(N,L,M,J(O),J(H)),fill:"none",stroke:b.color,strokeWidth:_,strokeLinecap:"butt"},`zone-${b.color}-${J(O)}-${J(H)}`):null}),M>0&&p?.map(b=>{const O=b.value.magnitude,H=oe(O),K=q(N,L,M,H),re=q(N,L,M-_,H),je=q(N,L,M-_-8,H);return r.jsxs("g",{children:[r.jsx("line",{x1:re.x,y1:re.y,x2:K.x,y2:K.y,stroke:"var(--color-text-faint)",strokeWidth:1}),b.label&&r.jsx("text",{x:je.x,y:je.y,textAnchor:"middle",dominantBaseline:"middle",fontSize:9,fill:"var(--color-text-faint)",children:b.label})]},`tick-${O}-${b.label??""}`)}),M>0&&we!==null&&["lo","hi"].map(b=>{const O=J(Z(we[b])),H=q(N,L,M-_/2,O),K=q(N,L,M+_/2,O);return r.jsx(gt,{end:b,x1:H.x,y1:H.y,x2:K.x,y2:K.y},b)}),M>0&&X&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:N,y1:L,x2:$e.x,y2:$e.y,stroke:v,strokeWidth:2,strokeLinecap:"round"}),r.jsx("circle",{cx:N,cy:L,r:I,fill:v})]}),r.jsxs("text",{x:N,y:$&&D!==null?L+D.drop:L+M*.55,textAnchor:"middle",fontSize:$&&D!==null?D.size:13,fontWeight:$?void 0:"bold",fill:x===null?"var(--color-text-muted)":"var(--color-text-primary)",children:[x??ke,B&&x!==null&&r.jsx(mt,{size:$?7:6,figureSize:$&&D!==null?D.size:13})]})]}),E]})}const ar=u.div`
  display: block;
  max-width: 100%;
`;function Tn({rows:e,segment:t="filters",emptyLabel:n="Nothing matches the filter"}){const o=vt({segment:t}),a=e.filter(i=>o.matches(i.searchText));return r.jsx(bt,{filter:o,children:a.length>0?r.jsx(dt,{gap:"related",children:a.map(i=>r.jsx("div",{children:i.node},i.id))}):r.jsx(Ge,{children:n})})}function ir({lit:e,of:t,tone:n="neutral",label:o}){const a=e===null?"unknown":`${e} of ${t}`;return r.jsx(sr,{role:"img","aria-label":o===void 0?a:`${o} ${a}`,"data-level-bars":"",children:Array.from({length:t},(i,s)=>r.jsx(lr,{$fill:e!==null&&s<e?Q[n]:null,$height:(s+1)/t},s))})}const sr=u.span`
  display: inline-flex;
  align-items: flex-end;
  gap: var(--gap-signal-bars);
  height: 0.8em;
  flex: none;
`,lr=u.span`
  width: 0.22em;
  height: ${({$height:e})=>`${Math.round(e*100)}%`};
  background: ${({$fill:e})=>e??"transparent"};
  border: 1px solid ${({$fill:e})=>e??"var(--color-border-subtle)"};
`,cr="8px";function Je({percent:e,tone:t,fillColor:n,trackHeld:o=!1,fillHeld:a=!1,children:i,...s}){return r.jsxs(dr,{"data-track-held":o?"":void 0,...s,children:[e!==null&&r.jsx(pr,{$tone:t,$fillColor:n,$held:a,"data-fill-held":a?"":void 0,style:{width:`${e}%`}}),o&&r.jsx(ur,{"data-track-hatch":"",style:{left:`${e??0}%`}}),i]})}const dr=u.div`
  width: 100%;
  border-radius: var(--radius-pill);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  overflow: hidden;
  /* Positioned for the fill only: this overflow rounds the fill's ends and would clip any mark drawn over it. */
  position: relative;
  height: ${cr};
`,ur=u.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(
    -45deg,
    ${Q.warn} 0 1px,
    transparent 1px 4px
  );
  opacity: 0.55;
  pointer-events: none;
`,pr=u.div`
  height: 100%;
  border-radius: var(--radius-pill);
  transition: width var(--duration-slow) var(--ease-standard);
  /* A held reading dims the fill, not the hue and not the whole bar, so a label beside it stays readable. */
  ${({$held:e})=>e?"opacity: 0.55;":""}
  background: ${({$tone:e,$fillColor:t})=>t??Q[e]};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function Mn({label:e,value:t,capacity:n,format:o,tone:a="neutral",fillColor:i,valueLabel:s,valueLabelNode:l,layout:c="stacked",hideLabel:p=!1,statement:g=!1,...f}){const m=Ee(t),v=Ee(n),w=fr(m.figure,n===void 0?void 0:v.figure);if(w===null||!Number.isFinite(w))return p?null:r.jsx(nt,{layout:c,label:e,display:r.jsx(ut,{}),...f,children:r.jsx(Je,{percent:null,tone:a,"aria-hidden":"true"})});const y=Math.min(1,Math.max(0,w)),z={label:e,layout:c,hideLabel:p,statement:g,pct:Math.round(y*100),tone:a,fillColor:i,trackHeld:v.reading?.state==="held"&&!Re(v.figure),fillHeld:m.reading?.state==="held"&&!Re(m.figure),...f},F=me(1,ge(v.reading,v.figure,v.figure));if(n!==void 0)return r.jsx(wt,{of:m.figure?.unit,format:o,children:r.jsx(gr,{...z,value:t,capacity:n,shown:m,held:v,endBounds:F,at:y,valueLabel:s,valueLabelNode:l})});const B=me(y,ge(m.reading,m.figure,null));return r.jsx(rt,{...z,bounds:B,endBounds:F,display:l??(s===void 0?r.jsx(ee,{value:t,format:o}):r.jsx(et,{caption:ce(t),children:s})),spoken:tt(s===void 0?te(m.figure,{format:o}):Qe(s,ce(t)),B,F)})}function ce(e){const{held:t,caption:n}=ne(e??null);return t?n:null}function Qe(e,t){return t===null?e:`${e}, ${t}`}function et({caption:e,children:t}){return e===null?r.jsx(r.Fragment,{children:t}):r.jsx(Ve,{caption:e,children:t})}function Ee(e){return typeof e!="object"||e===null||!("state"in e)?{figure:e??null,reading:null}:{figure:e.value??null,reading:e}}function fr(e,t){return e===null||t===null||t!==void 0&&!t.isPositive()?null:(t===void 0?e:e.dividedBy(t)).magnitude}function ge(e,t,n){if(e===null||e.reckoning.status!=="available"||t===null)return null;const o=Ye(e.reckoning.band,t.unit);if(!o)return null;const a={loSaid:o.lo,hiSaid:o.hi,kind:o.kind};return n===null?{lo:ae(o.lo,0),hi:ae(o.hi,0),...a}:n.isPositive()?{lo:ae(o.lo.dividedBy(n),0),hi:ae(o.hi.dividedBy(n),0),...a}:null}function me(e,t){return t===null?null:Ke(e,[t.lo,t.hi],qe())?t:null}function tt(e,t,n,o){const a=(s,l)=>{const c=te(s.loSaid,o),p=te(s.hiSaid,o);return`${l}with bands at ${c} and ${p}`},i=[t===null?null:a(t,""),n===null?null:a(n,"capacity ")].filter(s=>s!==null);return i.length===0?e:`${e}, ${i.join(", ")}`}function hr(e){if(!Number.isFinite(e))return 0;const t=Math.min(1,Math.max(0,e));return Math.round(t*1e4)/100}function ie(e){const t=hr(e),n=t<=0?0:t>=100?-2:-1;return{style:{left:`${t}%`,transform:`translateX(${n}px)`}}}function rt({label:e,layout:t,hideLabel:n,statement:o,pct:a,tone:i,fillColor:s,trackHeld:l,fillHeld:c,display:p,spoken:g,bounds:f,endBounds:m,...v}){return r.jsxs(nt,{layout:t,label:e,display:p,hideHead:n,statement:o,...v,children:[r.jsx(Je,{percent:a,tone:i,fillColor:s,trackHeld:l,fillHeld:c,role:"meter","aria-label":e,"aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":g}),(f!==null||m!==null)&&r.jsxs(yr,{"aria-hidden":"true",children:[f!==null&&r.jsxs(r.Fragment,{children:[r.jsx(se,{"data-bound":"lo",...ie(f.lo)}),r.jsx(se,{"data-bound":"hi",...ie(f.hi)})]}),m!==null&&r.jsxs(r.Fragment,{children:[r.jsx(se,{"data-end-bound":"lo",...ie(m.lo)}),r.jsx(se,{"data-end-bound":"hi",...ie(m.hi)})]})]})]})}function nt({layout:e,label:t,display:n,hideHead:o=!1,statement:a=!1,children:i,...s}){return o?r.jsxs(pe,{$row:!1,...s,children:[r.jsx(fe,{$row:!1,children:i}),a&&r.jsx(wr,{"data-meter-part":"statement",children:n})]}):e==="row"?r.jsxs(pe,{$row:!0,"data-meter-row":"",...s,children:[r.jsx(Ie,{"data-meter-part":"label",children:t}),r.jsx(fe,{$row:!0,"data-meter-part":"bar",children:i}),r.jsx(Be,{$row:!0,"data-meter-part":"figure",children:n})]}):r.jsxs(pe,{$row:!1,...s,children:[r.jsxs(br,{children:[r.jsx(Ie,{children:t}),r.jsx(Be,{$row:!1,children:n})]}),r.jsx(fe,{$row:!1,children:i})]})}function gr({value:e,capacity:t,shown:n,held:o,at:a,valueLabel:i,valueLabelNode:s,...l}){const c=i===void 0,p=Te(c?n.figure:void 0),g=Te(c?o.figure:void 0),f=p??g??{},m=ce(e)??ce(t),v=s??(i!==void 0?r.jsx(et,{caption:m,children:i}):l.layout==="row"?r.jsxs($r,{$marked:l.fillHeld||l.trackHeld,children:[r.jsx(ee,{value:e,hideUnitInGroup:!0})," / ",r.jsx(ee,{value:t}),(l.fillHeld||l.trackHeld)&&r.jsx(yt,{"aria-hidden":"true","data-held-mark":""})]}):r.jsxs(r.Fragment,{children:[r.jsx(ee,{value:e})," / ",r.jsx(ee,{value:t})]})),w=i===void 0?`${te(n.figure,f)} of ${te(o.figure,f)}`:Qe(i,m),y=me(a,ge(n.reading,n.figure,o.figure));return r.jsx(rt,{...l,display:v,spoken:tt(w,y,l.endBounds,f),bounds:y})}const xe=48;function zn({children:e,...t}){const n=h.useRef(null);return h.useLayoutEffect(()=>{const o=n.current;if(!o||typeof ResizeObserver>"u")return;const a=()=>{o.clientWidth!==0&&o.toggleAttribute("data-figures-below",!mr(o))};let i=0;const s=()=>{cancelAnimationFrame(i),i=requestAnimationFrame(a)},l=new ResizeObserver(s),c=()=>{l.disconnect(),l.observe(o);for(const g of ot(o))l.observe(g)},p=new MutationObserver(c);return p.observe(o,{childList:!0,subtree:!0}),c(),a(),()=>{cancelAnimationFrame(i),l.disconnect(),p.disconnect()}},[]),r.jsx(vr,{ref:n,...t,children:e})}const Rn=u.div.attrs({"data-meter-row-group":""})`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  row-gap: var(--gap-meter-rows);
  min-width: 0;

  & > * {
    grid-column: 1 / -1;
    min-width: 0;
  }
`;function ot(e){return Array.from(e.querySelectorAll(':scope > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row] > [data-meter-part="figure"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="figure"]'))}function mr(e){const t=ot(e);if(t.length===0)return!0;let n=0,o=0;for(const c of t)c.dataset.meterPart==="label"?n=Math.max(n,xr(c)):o=Math.max(o,c.scrollWidth);const a=getComputedStyle(e),i=c=>Number.parseFloat(c)||0,s=i(a.columnGap),l=e.clientWidth-i(a.paddingLeft)-i(a.paddingRight);return n+s+xe+s+o<=l}function xr(e){const t=e.style.whiteSpace;e.style.whiteSpace="nowrap";const n=e.scrollWidth;return e.style.whiteSpace=t,n}const vr=u.div`
  display: grid;
  grid-template-columns:
    minmax(min-content, max-content)
    minmax(${xe}px, 1fr)
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
      minmax(${xe}px, 1fr);
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
`,Ce="1px",pe=u.div`
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
`,br=u.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--gap-label-value);
  min-width: 0;
  /* The value may drop to its own line at narrow widths rather than crushing the label. */
  flex-wrap: wrap;
`,Ie=u.span`
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
`,Be=u.span`
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
`,wr=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,yr=u.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,fe=u.div`
  position: relative;
  ${({$row:e})=>e?S`
          flex: 1 1 28px;
          min-width: 28px;
        `:""}
`,$r=u($t)`
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
  top: ${Ce};
  bottom: ${Ce};
  width: 2px;
  background: var(--color-text-primary);
  /* Inset and outset, so the mark keeps an edge against a light or saturated fill on either side of its end. */
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 0.55),
    inset 0 0 0 0.5px rgb(0 0 0 / 0.35);
  opacity: 0.62;
  pointer-events: none;
`,jr=u.div`
  display: ${({$size:e})=>e==="hero"?"flex":"inline-flex"};
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({$tone:e})=>be[e]};
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
`;function Fn({size:e="inline",tone:t="neutral",...n}){return r.jsx(jr,{$size:e,$tone:t,...n})}const An=u.span`
  font-size: var(--font-size-caption);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-transform: uppercase;
`;function Le(e,t,n,o){const a=t-e;if(a===0){const i=(n+o)/2;return()=>i}return i=>n+(i-e)/a*(o-n)}function kr(e,t,n,o){return e.map((a,i)=>`${i===0?"M":"L"}${n(a).toFixed(2)},${o(t[i]).toFixed(2)}`).join(" ")}function _r({values:e,width:t,height:n,color:o="var(--color-text-primary)",strokeWidth:a=1.5,yDomain:i,showZeroBaseline:s=!1,background:l=!0,"aria-label":c="Trend sparkline"}){const p=h.useMemo(()=>e.filter(k=>Number.isFinite(k)),[e]),g=`sparkline-fill-${h.useId().replace(/:/g,"")}`,f=h.useMemo(()=>{if(i)return i;if(p.length===0)return[0,1];let k=p[0],T=p[0];for(const E of p)E<k&&(k=E),E>T&&(T=E);if(k===T){const E=Math.abs(k)>0?Math.abs(k)*.01:1;return[k-E,T+E]}return[k,T]},[i,p]);if(t<=0||n<=0||p.length<2)return r.jsx("svg",{width:Math.max(0,t),height:Math.max(0,n),role:"img","aria-label":c,style:{display:"block"},children:r.jsx("title",{children:c})});const m=a/2,v=p.map((k,T)=>T),w=Le(0,p.length-1,0,t),y=Le(f[0],f[1],n-m,m),z=kr(v,p,w,y),F=`${z} L ${t},${n} L 0,${n} Z`,B=s&&f[0]<=0&&f[1]>=0,A=B?y(0):null;return r.jsxs("svg",{width:t,height:n,role:"img","aria-label":c,style:{display:"block"},children:[r.jsx("title",{children:c}),l&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:g,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:o,stopOpacity:"0.25"}),r.jsx("stop",{offset:"100%",stopColor:o,stopOpacity:"0.02"})]})}),B&&A!==null&&r.jsx("line",{x1:0,y1:A,x2:t,y2:A,stroke:"var(--color-border-subtle)",strokeWidth:1}),l&&r.jsx("path",{d:F,fill:`url(#${g})`,stroke:"none"}),r.jsx("path",{d:z,stroke:o,strokeWidth:a,fill:"none",strokeLinejoin:"round",strokeLinecap:"round"})]})}function En({size:e=12,thickness:t=2,color:n="var(--color-accent-fg)","aria-label":o="Loading",...a}){return r.jsx(Tr,{...a,role:"status","aria-label":o,$size:e,$thickness:t,$color:n})}const Sr=Ne`
  to { transform: rotate(360deg); }
`,Tr=u.span`
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
    animation: ${Sr} 700ms linear infinite;
  }
`,at=240,Mr=8;function zr(e,t){if(e<=0||t<2)return!1;const n=t*at+(t-1)*Mr;return e>=n}function Cn({tabs:e,activeId:t,onChange:n,expandWhenRoomy:o=!1,"aria-label":a,"aria-labelledby":i,className:s}){const l=h.useId(),c=h.useMemo(()=>e.map((d,j)=>({...d,id:d.id??`tab-${j}`})),[e]),p=t!==void 0,[g,f]=h.useState(()=>t??c[0]?.id??""),m=p?t:g,v=c.find(d=>d.id===m),w=v&&!v.disabled?v:c.find(d=>!d.disabled)??v??c[0],y=h.useCallback(d=>{p||f(d),n?.(d)},[p,n]),z=h.useMemo(()=>c.filter(d=>!d.disabled),[c]),{ref:F,size:B}=jt({w:0,h:0}),A=o&&zr(B.w,z.length),k=h.useRef(new Map),T=h.useRef(null),E=h.useRef(null),[U,W]=h.useState(!1),[R,V]=h.useState(null),C=h.useCallback(d=>{T.current=d,V(d)},[]),Y=kt(R),[G,X]=h.useState(null);h.useLayoutEffect(()=>{const d=T.current;if(!d)return;const j=()=>{W(_=>{_||(E.current=d.scrollWidth);const I=E.current;return I==null?!1:I>d.clientWidth})};j();const $=new ResizeObserver(j);return $.observe(d),()=>$.disconnect()},[A,c.length]),h.useLayoutEffect(()=>{const d=T.current,j=w?k.current.get(w.id):void 0;if(!d||!j){X(null);return}const $=()=>{const I=k.current.get(w?.id??"");I&&X(D=>D&&D.left===I.offsetLeft&&D.width===I.offsetWidth?D:{left:I.offsetLeft,width:I.offsetWidth})};$();const _=new ResizeObserver($);return _.observe(d),_.observe(j),()=>_.disconnect()},[w?.id,c.length,A]);const P=h.useCallback((d,j)=>{const $=c.length;for(let _=1;_<=$;_++){const I=c[((d+j*_)%$+$)%$];if(!(!I||I.disabled)){y(I.id),k.current.get(I.id)?.focus();return}}},[c,y]),x=h.useCallback(d=>{const j=c.findIndex($=>$.id===w?.id);if(!(j<0))switch(d.key){case"ArrowRight":case"ArrowDown":d.preventDefault(),P(j,1);break;case"ArrowLeft":case"ArrowUp":d.preventDefault(),P(j,-1);break;case"Home":d.preventDefault(),P(-1,1);break;case"End":d.preventDefault(),P(c.length,-1);break}},[c,w?.id,P]);return A?r.jsx(Oe,{ref:F,"data-tabs-root":"",className:s,children:r.jsx(_t,{minColWidth:`${at}px`,align:"start",gap:"related-comfortable",children:z.map(d=>r.jsxs(We,{children:[r.jsxs(pt,{as:"h3",$rule:!0,children:[d.label,d.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(Pe,{"aria-hidden":"true"}),r.jsx(he,{children:", needs attention"})]})]}),d.content]},d.id))})}):r.jsxs(Oe,{ref:F,"data-tabs-root":"",className:s,children:[r.jsxs(Rr,{children:[r.jsx(Fr,{ref:C,children:r.jsxs(Ar,{role:"tablist","aria-label":a,"aria-labelledby":i,children:[G&&r.jsx(Er,{"aria-hidden":"true",style:{left:G.left,width:G.width}}),c.map(d=>{const j=d.id===w?.id;return r.jsxs(Cr,{ref:$=>{$?k.current.set(d.id,$):k.current.delete(d.id)},role:"tab",type:"button",id:`${l}${d.id}-tab`,"aria-selected":j,"aria-controls":`${l}${d.id}-panel`,"aria-describedby":d.indicator?`${l}${d.id}-attention`:void 0,tabIndex:j?0:-1,disabled:d.disabled,$active:j,onClick:()=>y(d.id),onKeyDown:x,$compact:U,children:[d.label,d.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(Pe,{"aria-hidden":"true"}),r.jsx("span",{id:`${l}${d.id}-attention`,hidden:!0,children:"Needs attention"})]})]},d.id)})]})}),r.jsx(Me,{$position:"left",$visible:Y.left}),r.jsx(Me,{$position:"right",$visible:Y.right})]}),w&&r.jsx(Ir,{role:"tabpanel",id:`${l}${w.id}-panel`,"aria-labelledby":`${l}${w.id}-tab`,children:w.content})]})}const Oe=u.div`
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

  ${St}

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
`,Br={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},Lr={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function Or(e){return Br[e]??Lr}function In({label:e,symbol:t,name:n=!1,...o}){const a=Or(e);return r.jsxs(Pr,{$bg:a.bg,$fg:a.fg,$border:a.border,$symbol:t!==void 0,$name:n,...o,children:[t!==void 0&&r.jsx(Dr,{$name:n,"aria-hidden":"true",children:r.jsx(Nr,{children:t})}),t!==void 0?r.jsx(Hr,{$name:n,children:e}):e]})}const Pr=u.span`
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
`,Dr=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({$name:e})=>e?S`padding: 0 var(--gap-glyph);`:S`padding: var(--inset-chip);`}
  background: currentColor;
`,Nr=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  font-weight: 800;
  line-height: var(--line-height-flush);
  color: var(--color-surface-panel);
`,Hr=u.span`
  ${({$name:e})=>e?S`padding: 0 var(--gap-glyph) 0 var(--gap-glyph-tray);`:S`padding: var(--inset-chip);`}
`;function Wr(e){return e===null||!e.capacity.isPositive()?null:e.amount.dividedBy(e.capacity).magnitude}const ve={w:5,h:4},Gr=8,Ur=7;function Bn(e,t){return e===void 0||t===void 0?"normal":e<ve.w||t<ve.h?"tiny":e<Gr||t<Ur?"small":"normal"}const it=1.6,Kr=1/it;function Ln(e,t){if(e===void 0||t===void 0||t===0)return{shape:"square",aspect:1};const n=e/t;return n>=it?{shape:"landscape",aspect:n}:n<=Kr?{shape:"portrait",aspect:n}:{shape:"square",aspect:n}}function On({title:e,essentials:t,equalRows:n=!1}){const o=n?void 0:t[0],a=n?t:t.slice(1),{rowsRef:i,drawn:s}=qr(a),l=t.some(f=>f.urgent!==void 0),c=o!==void 0&&a.length===0&&o.label.toUpperCase()===e.toUpperCase(),p=o?.value!=null&&o.gauge?.style==="arc"?o.gauge:void 0,g=p!==void 0;return r.jsx(Tt,{panelTitle:e,fitToSize:!0,hoverTitle:!0,panelTrend:o?.trend===void 0?void 0:({w:f,h:m})=>r.jsx(_r,{values:o.trend??[],width:f,height:m,"aria-label":`${o.label} trend`}),sections:r.jsxs(We,{full:!0,children:[r.jsx(ze,{visuallyHidden:!0,children:on(t.filter(f=>f.urgent!==!0))}),l&&r.jsx(ze,{visuallyHidden:!0,assertive:!0,additionsOnly:!0,children:an(t).map(f=>r.jsx(h.Fragment,{children:`${f}. `},f))}),o!==void 0&&r.jsxs(sn,{"data-tiny-essential":"",children:[c||g?r.jsx(he,{as:"dt",children:o.label}):r.jsx(De,{children:o.label}),o.value!=null&&p!==void 0?r.jsx(Qr,{essential:o,gauge:p}):o.gauge===void 0?r.jsx(st,{$tone:o.tone??"neutral",children:r.jsx(le,{essential:o})}):r.jsxs(ln,{$tone:o.tone??"neutral",children:[r.jsx(cn,{children:r.jsx(le,{essential:o})}),r.jsx(Jr,{essential:o,gauge:o.gauge})]})]}),a.length>0&&r.jsxs(pn,{ref:i,$equal:n,children:[a.slice(0,s).map(f=>r.jsxs(fn,{"data-tiny-essential":"",$equal:n,children:[r.jsx(De,{children:f.label}),r.jsx(hn,{$tone:f.tone??"neutral",children:r.jsx(le,{essential:f})})]},f.label)),a.slice(s).map(f=>r.jsxs(he,{as:"div",children:[r.jsx("dt",{children:f.label}),r.jsx("dd",{children:f.control===void 0?r.jsx(le,{essential:f}):f.control.label})]},f.label))]})]})})}function qr(e){const t=h.useRef(null),[n,o]=h.useState(e.length),[a,i]=h.useState(0),s=e.map(l=>`${l.label}\0${l.word??Vr(l.value)}`).join("");return h.useLayoutEffect(()=>{o(e.length)},[s,a,e.length]),h.useLayoutEffect(()=>{const l=t.current?.closest("[data-panel-fit-body]"),c=l?.firstElementChild;!l||!c||n===0||Yr(c)>l.clientHeight&&o(n-1)}),h.useLayoutEffect(()=>{const l=t.current?.closest("[data-panel-fit-body]");if(!l||typeof ResizeObserver>"u")return;let c=l.clientHeight;const p=new ResizeObserver(()=>{l.clientHeight!==c&&(c=l.clientHeight,i(g=>g+1))});return p.observe(l),()=>p.disconnect()},[]),{rowsRef:t,drawn:n}}function Vr(e){try{return JSON.stringify(e)??""}catch{return String(e)}}function Yr(e){const t=[],n=[];for(const o of Array.from(e.querySelectorAll("[data-tiny-essential]"))){const a=o.getBoundingClientRect();t.push(a.top),n.push(a.bottom)}return t.length===0?0:Math.max(...n)-Math.min(...t)}function le({essential:e}){const{control:t}=e;return t!==void 0?r.jsx(Mt,{text:t.hint??t.title,children:r.jsx(qt,{size:"sm",pressed:t.active,disabled:t.disabled,onClick:t.onPress,marked:t.held===void 0?null:{kind:"held",caption:t.held},"aria-label":t.title,children:t.label})}):r.jsxs(r.Fragment,{children:[e.level!==void 0&&r.jsx(ir,{lit:e.level.lit,of:e.level.of,tone:e.tone,label:e.label}),e.word!==void 0?e.word:r.jsx(Zr,{essential:e})]})}function Xr(e,t){return typeof e=="object"&&e!==null&&"state"in e?{...e,value:t.abs()}:t.abs()}function Zr({essential:e}){const{mark:t,value:n,decimals:o}=e,{held:a,shown:i}=ne(n),s=e.signed===!0&&i?.isFinite()===!0,l=s&&o!==void 0&&Math.abs(i.valueOf())<.5*10**-o,c=s&&(l||!i.isNegative())?"+":"",p=l?Xr(n,i):n,g=r.jsxs(r.Fragment,{children:[c,r.jsx(ee,{value:p,decimals:o,scale:"compact",elsewhere:t?.elsewhere===!0&&(a||t.kind===void 0)?t.caption:void 0})]});return t===void 0||a||t.kind===void 0?g:r.jsx(Ve,{kind:t.kind,elsewhere:t.elsewhere,caption:t.caption,children:g})}function Jr({essential:e,gauge:t}){const{shown:n,held:o}=ne(e.value),a=s=>Wr({amount:s.max(t.min).min(t.max).minus(t.min),capacity:t.max.minus(t.min)})??0,i=n==null?null:a(n);return r.jsxs(un,{"aria-hidden":"true","data-tiny-gauge":"","data-held":o?"":void 0,viewBox:"0 0 100 1",preserveAspectRatio:"none",children:[(t.bands??[]).map(s=>r.jsx("rect",{x:a(s.from)*100,y:0,width:(a(s.to)-a(s.from))*100,height:1,fill:Q[s.tone],opacity:.35},`${a(s.from)}-${a(s.to)}`)),i!==null&&r.jsx("rect",{"data-tiny-gauge-fill":"",x:0,y:0,width:i*100,height:1,fill:Q[e.tone??"neutral"],opacity:o?.55:1})]})}function Qr({essential:e,gauge:t}){const{ref:n,room:o}=en(),a=Math.min(o.w,tn),i=Math.min(o.h-rn,Math.round(a/2)+nn),s=e.value;if(s==null)return null;const l=ne(s).shown;return r.jsx(dn,{ref:n,children:r.jsx(or,{startAngle:-90,sweep:180,value:s,min:t.min,max:t.max,zones:(t.bands??[]).map(c=>({from:c.from,to:c.to,color:Q[c.tone]})),width:a,height:i,readout:"large","aria-label":l==null?e.label:`${e.label} ${He(l)}`})})}function en(){const e=h.useRef(null),[t,n]=h.useState({w:200,h:110});return h.useLayoutEffect(()=>{const o=e.current?.closest("[data-panel-fit-body]"),a=o?.closest("[data-panel-body]");if(!o||!a||typeof ResizeObserver>"u")return;const i=()=>{const l=getComputedStyle(a),c=getComputedStyle(o),p=a.clientWidth-Number.parseFloat(l.paddingLeft)-Number.parseFloat(l.paddingRight),g=a.clientHeight-Number.parseFloat(l.paddingTop)-Number.parseFloat(l.paddingBottom)-Number.parseFloat(c.marginTop)-Number.parseFloat(c.marginBottom);p>0&&g>0&&n({w:Math.floor(p),h:Math.floor(g)})};i();const s=new ResizeObserver(i);return s.observe(a),()=>s.disconnect()},[]),{ref:e,room:t}}const tn=280,rn=16,nn=40;function on(e){return e.filter(t=>t.word!==void 0).map(t=>`${t.label} ${t.word}`).join(", ")}function an(e){return e.filter(t=>t.urgent===!0&&t.word!==void 0).map(t=>`${t.label} ${t.word}`)}function Pn(e,t,n){if(e.tiny===void 0||t===void 0||n===void 0)return!1;const o=e.minSize??ve;return t<o.w||n<o.h}function Dn(e){return e.tiny!==void 0?zt:e.minSize}const sn=u.dl`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: var(--gap-tiny-content);
  margin: 0;
  min-width: 0;
`,st=u.dd`
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
  color: ${({$tone:e})=>be[e]};
`,ln=u(st)`
  flex-direction: column;
  align-items: stretch;
  gap: var(--gap-caption);
  line-height: var(--line-height-flush);
`,cn=u.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--gap-figure-parts);
`,dn=u.dd`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`,un=u.svg`
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
`,fn=u.div`
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
`,hn=u.dd`
  display: inline-flex;
  justify-content: flex-end;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  margin: 0;
  font-size: var(--font-size-value);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({$tone:e})=>be[e]};
`;export{Et as C,Sn as D,Tn as F,ir as L,Mn as M,Fn as R,_r as S,at as T,zn as a,An as b,En as c,kn as d,_n as e,Cn as f,In as g,qt as h,Pn as i,On as j,or as k,Rn as l,ve as m,Rt as n,At as o,Bn as p,Ln as q,Dn as r,zr as s,Ft as t,Fe as u};
