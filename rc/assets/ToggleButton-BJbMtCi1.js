import{j as n}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import c,{css as S,keyframes as rn}from"./ext-styled-components-Br73TgY3.js";import{l as Sr,t as _r,d as O,T as G,w as he,m as tt,u as Rr,n as Cr,p as Er,r as on,o as Ar,v as an,j as ee,x as Pr,y as Tr,A as Ir,z as Or,i as Mr,N as zr,B as Fr,R as Lr,b as Dr,c as Ge,e as Br,g as Nr,f as yt}from"./streamStatusWord-oQfueYZn.js";import{r as u}from"./ext-react-RRA14VTW.js";import{E as sn,aF as nt,ai as q,aA as rt,V as pe,a4 as Ie,a5 as ln,a2 as se,N as Hr,M as Wr,aq as Ur,ae as $t,aD as Gr,az as Kr,aG as qr,as as dn,a3 as ge,Z as Oe,h as Vr,v as Yr,I as Qr,a9 as Xr,F as Zr,l as Jr,a1 as me,_ as cn,aH as un,a0 as hn,ab as eo,d as to}from"./vesselMark-BNXCAyQe.js";import{t as ot,s as Se,y as no,z as ro,m as oo,f as at,n as fn,N as ao,S as st,B as pn,v as jt,A as Ke,E as so,I as io,G as kt,e as lo}from"./contributionsRead-BiwtOfll.js";import{aU as gn,k as mn,bZ as ie,aB as we,c2 as vn,aC as co,aR as uo,aX as oe,cm as St,aT as ye}from"./view-clock-formula-V4D43Fqq.js";import"./ksp-enum-names-mMQ85-RD.js";import{B as ho}from"./screen-UZmJz89R.js";import"./lagrange-BKHNrtNu.js";import{R as fo}from"./use-transmissions-BVXmpKl3.js";function po(e,t){if(!t)return!0;const r=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(r)||e.key.toLowerCase().includes(r)}function go(e,t,r=po){return e.filter(o=>r(o,t))}function mo(e,t="Other"){const r=new Map;for(const o of e){const a=o.group??t;let s=r.get(a);s||(s=[],r.set(a,s)),s.push(o)}return[...r.entries()].sort(([o],[a])=>o.localeCompare(a))}function vo(e){return e.flatMap(([,t])=>t)}function _t(e,t,r){return r===0?-1:Math.max(0,Math.min(e+t,r-1))}function xo({id:e,groups:t,flatOptions:r,activeIndex:o,selectedKey:a,getOptionId:s,onHoverIndex:i,onSelectKey:d,renderItem:l,emptyLabel:h="No matches","aria-label":f,placement:g="below"}){return n.jsx(bo,{role:"listbox",id:e,"aria-label":f,$placement:g,children:r.length===0?n.jsx(sn,{layout:"fill",children:h}):t.map(([x,m],v)=>n.jsxs(wo,{role:"group","aria-labelledby":`${e}-group-${v}`,children:[n.jsx(yo,{id:`${e}-group-${v}`,"aria-hidden":"true",children:x}),m.map(b=>{const w=r.indexOf(b),k=w===o;return n.jsx(jo,{id:s(b.key),role:"option","aria-selected":k,$active:k,$selected:b.key===a,onPointerDown:A=>{A.preventDefault(),d(b.key)},onMouseEnter:()=>i(w),children:l?l(b):b.label??b.key},b.key)})]},x))})}const bo=c.div`
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
`,wo=c.div``,yo=c.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-raised);
`;function $o(e,t){return e?"background: var(--color-surface-panel);":t?Sr("go"):"background: transparent;"}const jo=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-menu-item);
  cursor: pointer;
  ${({$active:e,$selected:t})=>$o(e,t)}
  /* Focus stays on the input, so the highlighted option carries the focus colour as an inset bar. */
  box-shadow: ${({$active:e})=>e?"inset 3px 0 0 var(--color-focus)":"none"};

  &:hover {
    background: var(--color-surface-panel);
  }
`;function ld({tone:e,children:t,live:r=!1,pulse:o,...a}){const s=r?{role:"status","aria-live":"polite"}:{};return n.jsxs(ko,{"data-tone":e,...s,...a,children:[n.jsx(_o,{"data-tone":e,$pulse:o,"aria-hidden":"true"}),n.jsx(Ro,{children:t})]})}const ko=c.div`
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

  border-color: ${({"data-tone":e})=>_r(e)};
`,So=rn`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,_o=c.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  flex-shrink: 0;

  background: ${({"data-tone":e})=>O[e]};

  /* A looping pulse needs its own reduced-motion guard; the 1s/2s periods encode connection state. */
  ${({$pulse:e})=>e?S`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${So} ${e==="fast"?"1s":"2s"}
              var(--ease-emphasis) infinite;
          }
        `:""}
`,Ro=c.span`
  color: var(--color-text-primary);
  line-height: var(--line-height-body);
`;function dd({checked:e,onChange:t,label:r,disabled:o,id:a,"aria-label":s}){return n.jsxs(Co,{$disabled:o,children:[n.jsx(Eo,{type:"checkbox",id:a,checked:e,disabled:o,onChange:i=>t(i.target.checked),"aria-label":r?void 0:s}),n.jsx(xn,{$checked:e,$disabled:o,children:n.jsx(Ao,{$checked:e,$disabled:o})}),r&&n.jsx(Po,{children:r})]})}const Co=c.label`
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
`,xn=c.div`
  width: 28px;
  height: 14px;
  /* --radius-pill keeps the stadium shape through a height change. */
  border-radius: var(--radius-pill);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-surface-raised)":e?"var(--color-go-mark)":"var(--color-surface-raised)"};
  border: 1px solid ${({$checked:e,$disabled:t})=>t?"var(--color-border-strong)":e?"var(--color-go-mark)":"var(--color-border-strong)"};
  position: relative;
  flex-shrink: 0;
  transition: background var(--duration-base), border-color var(--duration-base);
`,Eo=c.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:focus-visible + ${xn} {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Ao=c.div`
  position: absolute;
  /* Measured inside the border: the track is border-box, so its 1px border leaves a 26 by 12 box, and 2px on every side centres the 8px thumb at either end. */
  top: 2px;
  left: ${({$checked:e})=>e?"16px":"2px"};
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-text-faint)":e?"var(--color-accent-fg)":"var(--color-text-faint)"};
  transition: left var(--duration-base), background var(--duration-base);
`,Po=c.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,it=e=>S`
  --fit-box: ${e};
`,To=e=>S`
  --fit-mask: ${e};
`;function _e({tone:e,size:t="md",live:r=!1,report:o,children:a,...s}){const i=e===void 0||e==="neutral"?void 0:e,d=o?.label??(typeof a=="string"?a:"");ot(o?{id:o.id,severity:i??"go",label:d}:null);const l=r?{role:"status","aria-live":"polite"}:{};return n.jsx(zo,{$severity:i,$size:t,...l,...s,children:a})}const Io=S`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,Oo={go:S`
    background: transparent;
    border-color: ${O.go};
    color: ${G.go};
  `,info:S`
    background: transparent;
    border-color: ${O.info};
    color: ${G.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${O.info} 40%, transparent);
  `,caution:S`
    background: transparent;
    border-color: ${O.caution};
    color: ${G.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${O.caution} 45%, transparent);
  `,warn:S`
    background: transparent;
    border-color: ${O.warn};
    color: ${G.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${O.warn} 55%, transparent);
  `,nogo:S`
    background: transparent;
    border-color: ${O.nogo};
    color: ${G.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${O.nogo} 65%, transparent);
  `,offline:S`
    background: transparent;
    border-color: ${O.offline};
    color: ${G.offline};
  `},Mo={sm:S`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:S`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},zo=c.span`
  display: inline-block;
  /* Sized by its own text, never stretched to a taller flex sibling. */
  align-self: center;
  ${it("badge")}
  border: 1px solid;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;

  /* Pill-shaped only for a real severity; a decorative kind chip keeps the rounded rect. */
  border-radius: ${({$severity:e})=>e===void 0?"var(--radius-regular)":"var(--radius-pill)"};

  ${({$size:e})=>Mo[e]}
  ${({$severity:e})=>e===void 0?Io:Oo[e]}
`,qe=q.held.domSize,Ve=q.modelled.domSize,Fo=S`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${qe} + 0.14em);
  }
`,Lo=S`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Ve} + 0.14em);
  }
`;function Do(e){return S`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${q[e].hollowDomSize} + 0.14em);
    }
  `}function bn(e,t=!1){return t?Do(e):e==="current"?null:e==="modelled"?Lo:Fo}const wn=c.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${qe};
  height: ${qe};
  background: ${q.held.color};
`,Bo=c.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Ve};
  height: ${Ve};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${q.modelled.color};
`,lt=e=>S`
  position: absolute;
  right: 0;
  top: 0;
  width: ${q[e].hollowDomSize};
  height: ${q[e].hollowDomSize};
`,No=c.span`
  ${lt("current")}
  border: ${nt} solid ${q.current.color};
  border-radius: var(--radius-circle);
`,Ho=c.span`
  ${lt("held")}
  border: ${nt} solid ${q.held.color};
`,Wo=c.span`
  ${lt("modelled")}
  --stroke: ${nt};
  background: ${q.modelled.color};
  clip-path: polygon(
    50% 0,
    100% 100%,
    0 100%,
    50% 0,
    50% calc(var(--stroke) * 2.4),
    calc(var(--stroke) * 1.9) calc(100% - var(--stroke)),
    calc(100% - var(--stroke) * 1.9) calc(100% - var(--stroke)),
    50% calc(var(--stroke) * 2.4)
  );
`,Uo={current:No,held:Ho,modelled:Wo};function yn({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const r=t?Uo[e]:e==="modelled"?Bo:wn;return n.jsx(r,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const $n=c.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>bn(e??"held",t)}
`;function dt({caption:e,kind:t="held",elsewhere:r=!1,children:o,...a}){const{anchor:s,tip:i}=rt(e);return n.jsxs($n,{$kind:t,$elsewhere:r,...a,...s,children:[o,n.jsx(yn,{kind:t,elsewhere:r}),e!==null&&n.jsxs(pe,{"data-unit-currency":"",children:[", ",e]}),i]})}function ct(e){return{readsAsOne:(t,r)=>e(t)===e(r)}}function Go(e={}){return ct(t=>he(t,e))}const Ko=.01;function qo({wraps:e=!1}={}){const t=r=>e?r-Math.floor(r):Math.min(1,Math.max(0,r));return{readsAsOne(r,o){const a=Math.abs(t(r)-t(o));return(e?Math.min(a,1-a):a)<=Ko}}}function Re(e,t,r){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(a=>!r.readsAsOne(e,a))}const Vo={},Yo={byKey:new Map,unaddressed:void 0,separate:!1};function Rt(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Qo(e,t){if(e.separate!==t.separate||!Rt(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[r,o]of e.byKey)if(!Rt(o,t.byKey.get(r)))return!1;return!0}function Xo(e,t,r,o){const a=new Map;e!==void 0&&a.set(tt(e),r);for(const[s,i]of Object.entries(t??{}))i!==void 0&&a.set(Er(s),i);return{byKey:a,unaddressed:e===void 0&&t===void 0?r:void 0,separate:o}}function Zo(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Jo(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function ea(){const e=new Set,t=new Set;return{family:e,subscribe(r){return t.add(r),()=>{t.delete(r)}},sweep(r){const o=[...e].sort((s,i)=>s.depth-i.depth);let a=!1;for(const s of o)s.resettle(r)&&(a=!0);if(a)for(const s of t)s()}}}function ta(e){const t=new Map,r=new Map,o=new Set,a=e?.root??ea();let s=Yo;const i=l=>{let h;for(const f of l){const g=f.position;g!==void 0&&(h===void 0||g.base>h.base)&&(h=g)}return h?.rung},d={root:a,depth:e===void 0?0:e.depth+1,hold(l,h,f){const g=t.get(l);if(f===void 0)g!==void 0&&(g.delete(h),g.size===0&&t.delete(l));else{if(Jo(g?.get(h),f))return;g===void 0?t.set(l,new Map([[h,f]])):g.set(h,f)}e===void 0?a.sweep(l):e.hold(l,h,f)},settled:l=>r.get(l),readsAsOneFigure:l=>o.has(l),setPolicy(l){if(!Qo(s,l)){s=l;for(const h of t.keys())a.sweep(h)}},resettle(l){const h=[...t.get(l)?.values()??[]],f=e?.settled(l),g=s.byKey.get(l)??s.unaddressed??Vo,x=g.format??f?.format??i(h),m=g.as??f?.as,v=g.decimals??(s.separate?Ar(h,{format:x,as:m}):f?.decimals),b=x===void 0&&m===void 0&&v===void 0?void 0:{...x!==void 0&&{format:x},...m!==void 0&&{as:m},...v!==void 0&&{decimals:v}},w=s.separate&&on(h,{format:x,as:m,decimals:v}),k=w!==o.has(l);return w?o.add(l):o.delete(l),Zo(r.get(l),b)?k:(b===void 0?r.delete(l):r.set(l,b),!0)},attach(){a.family.add(d)},detach(){a.family.delete(d)}};return a.family.add(d),d}const ut={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},fe=u.createContext(ut);function na(){return u.useContext(fe)!==ut}function ra({children:e,of:t,pins:r,format:o,as:a,decimals:s,separate:i=!1}){const d=u.useContext(fe),[l]=u.useState(()=>ta(d===ut?void 0:d));return u.useLayoutEffect(()=>(l.attach(),()=>l.detach()),[l]),u.useLayoutEffect(()=>{l.setPolicy(Xo(t,r,{format:o,as:a,decimals:s},i))},[l,t,r,o,a,s,i]),n.jsx(fe.Provider,{value:l,children:e})}function Ye(e,t={}){const r=u.useContext(fe),o=u.useId(),a=gn(e),s=e?.unit,d=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||a===null?void 0:tt(s),l=d===void 0||a===null||s===void 0||Rr(s)===void 0?void 0:Cr(a,s),h=l?.base,f=l?.rung;return u.useLayoutEffect(()=>{if(!(d===void 0||a===null||s===void 0))return r.hold(d,o,{reading:a,unit:s,...h!==void 0&&f!==void 0&&{position:{base:h,rung:f}}}),()=>r.hold(d,o,void 0)},[r,o,d,a,s,h,f]),u.useSyncExternalStore(r.root.subscribe,()=>d===void 0?void 0:r.settled(d),()=>{})}function cd(e,t={}){const r=u.useContext(fe),a=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||gn(e)===null||e===null||e===void 0?void 0:tt(e.unit);return u.useSyncExternalStore(r.root.subscribe,()=>a===void 0?!1:r.readsAsOneFigure(a),()=>!1)}const oa=Ir,aa={sci:Wr,rep:Hr},jn=c.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,sa=c.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?S`
          position: relative;
          ${bn(e,t)}
        `:""}
`,ia=c.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,la=c(pe)`
  user-select: none;
`,kn=c(pe)`
  user-select: none;
`,da=" ";function ca(e,t,r,o){if(t===void 0)return null;const a=x=>an(x.magnitude,x.unit,{...r,format:o}).value,s=(x,m)=>a(m.minus(x)),i=on([t.lo,t.hi],{...r,format:o});if(!Re(e,[t.lo,t.hi],ct(a)))return null;const d=s(t.lo,t.value),l=s(t.value,t.hi),h=x=>/^[-+\u2212]?[0.,\s]*$/.test(x);if(!i&&h(d)&&h(l))return null;const f=a(t.value)===a(e),g={...r,format:o};return{oneFigure:i,plusMinus:!i&&f&&d===l?l:null,lo:a(t.lo),hi:a(t.hi),loSaid:ee(t.lo,g),hiSaid:ee(t.hi,g),kind:t.kind}}function ua(e,t){const r=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?r:r===null?e:`${e}, ${r}`}function Ne({token:e,className:t,spaced:r}){const o=Pr(e,Tr(e));if(o==="")return null;const a=Or(o),s=aa[o],i=oa.has(o),d=a!==void 0;return n.jsxs(n.Fragment,{children:[r&&!i?da:null,n.jsx(se,{text:a,announce:!1,children:n.jsxs(jn,{$attached:i,$icon:s!==void 0,className:t,"data-unit":e,children:[s?n.jsx(s,{size:"1em"}):d?n.jsx("span",{"aria-hidden":"true",children:o}):o,d&&n.jsxs(kn,{"data-unit-word":"",children:[" ",a]})]})})]})}function Q({value:e,children:t,className:r,hideUnitInGroup:o,reckoned:a,marked:s,elsewhere:i,...d}){const l=Ie(e,{drawsReckoning:a}),h=s!=null&&!l.held?{...l,held:!0,mark:s.kind,caption:s.caption}:l,{shown:f,held:g,mark:x,band:m}=h,v=i!=null&&i!==""&&f!=null,b=x??(v?"current":null),w=v?[h.caption,i].filter(Boolean).join("; "):h.caption,k=Ye(f,d),A=na(),T=o===!0&&A,j=k===void 0?d:{...k,...d},R=an(f?.magnitude,f?.unit,j),C=f==null||m===null||!g?null:ca(f,mn(m,f.unit),j,R.rung),{anchor:P,tip:E}=rt(ua(w,C));return e!==void 0||t===void 0?n.jsxs(sa,{className:r,$mark:b,$elsewhere:v,...ln(h),...P,children:[R.value,!T&&n.jsx(Ne,{token:R.symbol,spaced:!0}),C!==null&&n.jsxs(ia,{"data-unit-band":"",children:[C.oneFigure?n.jsxs(n.Fragment,{children:[" (",n.jsx("span",{"aria-hidden":"true",children:"~"}),n.jsx(kn,{"data-unit-word":"",children:"approximately "}),C.lo]}):C.plusMinus===null?` (${C.lo} to ${C.hi}`:` ± ${C.plusMinus}`,!T&&n.jsx(Ne,{token:R.symbol,spaced:!0}),C.plusMinus===null?")":null]}),b!==null&&n.jsx(yn,{kind:b,elsewhere:v}),w!==null&&n.jsxs(la,{"data-unit-currency":"",children:[", ",w]}),E]}):typeof t!="string"?n.jsx(jn,{$attached:!1,$icon:!1,className:r,children:t}):n.jsx(Ne,{token:t,className:r,spaced:!1})}function ht(e){const t=Ur(e.held);if(t===void 0)return{label:e.label,tone:e.tone,title:e.title};const r=Mr(t);return{label:r,tone:Se(t),title:e.title??`${e.label}: ${r}`}}function X(e,t){return he({magnitude:e,unit:t})}function ha(e,t){const{limit:r,actual:o,unit:a}=t;if(r==null||o==null)return null;switch(e){case we.LimitReached:{const s=fa(t.quantity),i=`${X(o,a)} of ${X(r,a)}`;return t.facilityName?`the ${t.facilityName} holds ${i} ${s}`:`it holds ${i} ${s}`}case we.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${X(o,a)} of ${X(r,a)}`;case we.InsufficientFunds:return`it costs ${X(o,a)} and funds are ${X(r,a)}`;case we.InsufficientScience:return`it costs ${X(o,a)} and science is ${X(r,a)}`;default:return null}}function fa(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function Ct(e){return e&&vn(e)?.sentence||null}function pa(e){const t=e?.trim().replace(/\.$/,"");return t||null}function ft(e){return Sn(e,"refused")}function ud(e){return Sn(e,"unavailable")}function Sn(e,t){const r=ie(e),o=(e.breach?ha(e.errorCode,e.breach):null)??pa(e.detail)??Ct(e.reason)??Ct(e.errorCode)??e.reason??e.errorCode;return r?`${r} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function _n(e){const r=ie(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":ga(ft({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${r} was refused: ${o}`:`${r} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${r} failed: ${o}.`:`${r} failed.`}return`${r} ran.`}function ga(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function Rn(e){return`${ie(e)||e.command||"The command"}: no reply. May have run.`}function hd({size:e=12,thickness:t=2,color:r="var(--color-accent-fg)","aria-label":o="Loading",...a}){return n.jsx(va,{...a,role:"status","aria-label":o,$size:e,$thickness:t,$color:r})}const ma=rn`
  to { transform: rotate(360deg); }
`,va=c.span`
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
    animation: ${ma} 700ms linear infinite;
  }
`;function Et(e,t){return t?.state!=="held"?e:{...t,value:e}}function Ce(e){return e.continuity==="continuous"?"ribbon":"dot"}function xa(e){return e.delivery==="acked"}function ba(e){return e.direction==="command"?"outbound":"inbound"}function Cn(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function Me(e){return`${e.direction}/${e.continuity}/${e.delivery}`}const wa={"command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/discrete/fire-and-forget":"in-flight-row"};function pt(e){return wa[Me(e)]??null}const At=new Set;function En(e,t){const r=Me(e);if(At.has(r))return;At.add(r);const o=`Delay rail entry "${t}" is tagged ${r}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;co()?uo.error(o):console.error(o)}const An=16,Pt=An/2,ya=5.5,$a=2,ja=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function Pn(e,t,r){return t>0?Math.min(e.length-1,t)/t*r:0}function ka(e,t,r){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(r/$a)),Math.max(2,Math.round(o)))}function Sa(e,t,r){if(e.length===0)return"";const o=Pn(e,t,r);if(!(o>0))return`M0.00,${Pt.toFixed(2)}`;const a=ka(e,t,o),s=[];for(let i=0;i<=a;i++){const d=Math.min(i/a*o,o),l=Math.min(Math.round(d/r*t),e.length-1),h=ja(e[e.length-1-l]),f=(i%2===0?-1:1)*h*ya;s.push(`${d.toFixed(2)},${(Pt+f).toFixed(2)}`)}return`M${s.join(" L")}`}const Tn=.05,_a=.02,Ee=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],ze=100,ce=30,Ra=1.5,H=2,Ca=4,J=ce-H-Ca,Y=(e,t,r)=>r+(t<=0?0:Math.min(1,e/t))*(ze-r*2),$e=e=>H+(1-Math.max(0,Math.min(1,e)))*J,In=e=>e==="inline"?Ra:0;function fd(e="inline"){const t=In(e);return(ze-t*2)/3}function On({tags:e,who:t}){return En(e,t),n.jsx("g",{"data-rail-unrepresented":Me(e),"data-rail-entry":t})}function re(e){return e.map((t,r)=>`${r===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function Tt(e,t){if(e.length===0||e[0].age>=t)return e;const r=e.findIndex(l=>l.age>=t);if(r===-1)return[];const o=e[r-1],a=e[r],s=a.age-o.age||1,i=(t-o.age)/s,d=o.value+i*(a.value-o.value);return[{age:t,value:d},...e.slice(r)]}function It(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(h=>h.age>t),a=e.slice(0,o),s=e[o],i=a[a.length-1];if(!i)return[{age:t,value:s.value}];const d=s.age-i.age||1,l=(t-i.age)/d;return[...a,{age:t,value:i.value+l*(s.value-i.value)}]}const Ea=.25;function Ot(e,t){if(e.length===0)return null;const r=e[0],o=e[e.length-1];if(t<=r.age)return r.value;if(t>=o.age)return o.value;for(let a=1;a<e.length;a++){const s=e[a];if(t<=s.age){const i=e[a-1],d=(t-i.age)/(s.age-i.age||1);return i.value+d*(s.value-i.value)}}return o.value}function Aa({stream:e,span:t,index:r,padX:o,oneT:a,twoT:s}){const d=`var(${Ee[r%Ee.length]})`,l=u.useId(),h=`cds-ramp-${l}-${r}`,f=`cds-fill-${l}-${r}`,g=`cds-tail-${l}-${r}`,x=pt(e.tags);if(x!=="continuous-strip")return x===null?n.jsx(On,{tags:e.tags,who:e.id}):null;const m=xa(e.tags),b=(m?e.inTransit:It(e.inTransit,a)).map(p=>({x:Y(p.age,t,o),y:$e(p.value)}));if(b.length===0)return null;const k=(m?[]:It(Tt(e.inTransit,a),a*(1+Ea))).map(p=>({x:Y(p.age,t,o),y:$e(p.value)})),A=k.length>1&&k[k.length-1].x>k[0].x,T=`${re(b)} L${b[b.length-1].x.toFixed(2)},${(H+J).toFixed(2)} L${b[0].x.toFixed(2)},${(H+J).toFixed(2)} Z`,j=m?Tt(e.echo,s):[],R=j.map(p=>({x:Y(p.age,t,o),y:$e(p.value)})),C=j.map(p=>({x:Y(p.age,t,o),y:$e(Ot(e.inTransit,p.age)??p.value)})),P=j.findIndex(p=>{const _=Ot(e.inTransit,p.age);return _!==null&&Math.abs(p.value-_)>_a}),E=P!==-1,K=E?R.slice(0,P+1):R,B=E?R.slice(P):[],W=E?C.slice(P):[],z=!E||P>0;return n.jsxs("g",{"data-stream-group":e.id,"data-return-leg":m,children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"1",y2:"0",children:[n.jsx("stop",{offset:"0",stopColor:d,stopOpacity:"0.10"}),n.jsx("stop",{offset:"1",stopColor:d,stopOpacity:"0.40"})]}),n.jsxs("linearGradient",{id:f,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0",stopColor:d,stopOpacity:"0.22"}),n.jsx("stop",{offset:"1",stopColor:d,stopOpacity:"0"})]}),A&&n.jsxs("linearGradient",{id:g,gradientUnits:"userSpaceOnUse",x1:k[0].x,y1:"0",x2:k[k.length-1].x,y2:"0",children:[n.jsx("stop",{offset:"0",stopColor:d,stopOpacity:"0.40"}),n.jsx("stop",{offset:"1",stopColor:d,stopOpacity:"0"})]})]}),n.jsx("path",{"data-role":"area",d:T,fill:`url(#${f})`,stroke:"none"}),n.jsx("path",{"data-role":"commanded","data-stream":e.id,d:re(b),fill:"none",stroke:`url(#${h})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),A&&n.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:re(k),fill:"none",stroke:`url(#${g})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),K.length>0&&z&&n.jsx("path",{"data-role":"echo","data-stream":e.id,d:re(K),fill:"none",stroke:d,strokeWidth:"0.8",strokeLinecap:"round"}),E&&n.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:re(B),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),E&&n.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:re(W),fill:"none",stroke:d,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]})}function Pa({ribbon:e,padX:t}){const r=`cds-ribbon-fade-${u.useId()}`,o=e.tags,a=pt(o);if(a!=="continuous-strip")return a===null?n.jsx(On,{tags:o,who:e.id}):null;const s=(ze-t*2)/3,i=e.amplitudes,d=e.spanSamples??i.length,l=Sa(i,d,s);if(l==="")return null;const h=Math.max(Pn(i,d,s),1),f=`var(${Cn(o)})`,g=ba(o)==="outbound";return n.jsxs("g",{"data-ribbon-group":e.id,transform:`translate(${t} ${H}) scale(1 ${J/An})`,children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:r,gradientUnits:"userSpaceOnUse",x1:g?0:h,y1:"0",x2:g?h:0,y2:"0",children:[n.jsx("stop",{offset:"0",stopColor:f,stopOpacity:"0.9"}),n.jsx("stop",{offset:"1",stopColor:f,stopOpacity:"0.1"})]})}),n.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:l,fill:"none",stroke:`url(#${r})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function Ta({streams:e,ribbons:t=[],"aria-label":r="Controls in flight",variant:o="inline",delayReading:a}){const s=`cds-divfade-${u.useId()}`,i=a?.state==="held",d=i?Ie(a??null).caption:null,{anchor:l,tip:h}=rt(d),f=e[0]??t[0],g=f?.oneWaySeconds??null;if(!f||g===null||g<=0)return null;const x=g>=Tn;if(!x&&t.length===0)return null;const m=3*g,v=g,b=2*g,w=In(o),k=Y(v,m,w),A=Y(b,m,w),T=e.every(j=>j.inTransit.length===0&&j.echo.length===0)&&t.every(j=>j.amplitudes.length===0);return n.jsxs(Ia,{"data-oneway":g,"data-variant":o,$variant:o,...l,children:[n.jsxs(Oa,{$variant:o,$quiet:T,role:"img","aria-label":Kr(r,d),...Gr(d),viewBox:`0 0 ${ze} ${ce}`,preserveAspectRatio:"none",children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:H,x2:"0",y2:H+J,children:[n.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),n.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(x?e:[]).map((j,R)=>n.jsx(Aa,{stream:j,span:m,index:R,padX:w,oneT:v,twoT:b},j.id)),t.map(j=>n.jsx(Pa,{ribbon:j,padX:w},j.id)),n.jsx("line",{"data-divider":"t",x1:k,x2:k,y1:H,y2:H+J,stroke:`url(#${s})`,strokeWidth:"0.4"}),n.jsx("line",{"data-divider":"2t",x1:A,x2:A,y1:H,y2:H+J,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&n.jsxs("g",{"data-role":"hover-labels",children:[n.jsxs("text",{x:k,y:H-.4,textAnchor:"middle",fontSize:"2",children:[he(oe("s",g),{decimals:1}),i&&n.jsx($t,{size:1.2})]}),n.jsxs("text",{x:A,y:H-.4,textAnchor:"middle",fontSize:"2",children:[he(oe("s",2*g),{decimals:1}),i&&n.jsx($t,{size:1.2})]}),n.jsx("text",{x:Y(g/2,m,w),y:ce-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),n.jsx("text",{x:Y(1.5*g,m,w),y:ce-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),n.jsx("text",{x:Y(2.5*g,m,w),y:ce-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&n.jsxs(n.Fragment,{children:[n.jsxs(Ma,{"aria-hidden":"true",children:[n.jsxs("span",{children:["outgoing ",n.jsx("b",{children:"0"})]}),n.jsxs("span",{children:["echo"," ",n.jsx("b",{children:n.jsx(Q,{value:Et(oe("s",g),a),decimals:1})})]}),n.jsxs("span",{children:["confirmed"," ",n.jsx("b",{children:n.jsx(Q,{value:Et(oe("s",2*g),a),decimals:1})})]})]}),n.jsxs(za,{"aria-hidden":"true",children:[e.map((j,R)=>n.jsxs("span",{children:[n.jsx("i",{style:{background:`var(${Ee[R%Ee.length]})`}}),j.label]},j.id)),t.map(j=>n.jsxs("span",{"data-role":"legend-ribbon",children:[n.jsx("i",{style:{background:`var(${Cn(j.tags)})`}}),j.label]},j.id)),e.length>0&&n.jsxs("span",{"data-role":"legend-deviation",children:[n.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),h]})}const Ia=c.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,Oa=c.svg`
  display: block;
  width: 100%;
  /* The rail height is the band the Panel reserves, not a size the graph chose. */
  height: ${({$variant:e})=>e==="rail"?"var(--panel-rail-band)":e==="expanded"?"86px":"40px"};

  /* Strokes are scaled by 30/16 against the stretched 30-unit viewBox, so the trace is a real pixel wide in the band. */
  ${({$variant:e})=>e==="rail"?`[data-role="commanded"],
         [data-role="echo"],
         [data-role="deviation-expected"] { stroke-width: 1.5; }
         [data-role="deviation-actual"] { stroke-width: 1.88; }`:""}


  [data-role="hover-labels"] {
    opacity: ${({$quiet:e})=>e?1:0};
    fill: var(--color-text-muted);
    font-family: var(--font-family-mono);
  }
  &:hover [data-role="hover-labels"] {
    opacity: 1;
  }
`,Ma=c.div`
  display: flex;
  justify-content: space-between;
  /* The graph stays full-bleed; the zone labels inset to the standard content margin. */
  margin: 0 var(--gutter-panel);
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;

  b {
    color: var(--color-text-dim);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
`,za=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-legend);
  /* The legend sits at the standard content margin, with bottom room since the pinned rail has no padding. */
  margin: var(--outset-delay-legend);
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;

  span {
    display: inline-flex;
    align-items: center;
    gap: var(--gap-glyph);
  }
  i {
    display: inline-block;
    width: 10px;
    height: 2px;
  }
`,Fa=c.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function Mn({observed:e,modelled:t,write:r}){if(t==null)return null;if(r===void 0){const o=t;return Re(e,o,Go())?n.jsx(Mt,{children:n.jsx(Q,{value:o})}):null}return Re(e,t,ct(r))?n.jsx(Mt,{children:r(t)}):null}function Mt({children:e}){return n.jsx(Fa,{"data-modelled-alongside":"",children:n.jsx(dt,{"data-held":"",kind:"modelled",caption:qr,children:e})})}function pd({value:e}){return n.jsxs(n.Fragment,{children:[n.jsx(Q,{value:e}),n.jsx(Mn,{observed:e.value,modelled:dn(e)})]})}function zn({value:e,clock:t=!1,precise:r=!1}){const o=typeof e=="number"?void 0:e,a=b=>Fr(typeof b=="number"?b:b.magnitude,{ms:r,sign:t}),s=o!=null&&"state"in o?o:void 0,i=dn(s);if(s?.value!==void 0&&i!==void 0)return n.jsxs(n.Fragment,{children:[a(s.value),n.jsx(Mn,{observed:s.value,modelled:i,write:a})]});const d=Ie(o,{drawsReckoning:!0}),{shown:l,held:h,mark:f,caption:g}=d,x=typeof e=="number"?e:l;if(x==null)return zr;const m=a(x),v=ln({...d,shown:x});return h?n.jsx(dt,{...v,kind:f??"held",caption:g,children:m}):n.jsx("span",{"data-figure":v["data-figure"],children:m})}function ve(e){const t=u.useRef(null),[r,o]=u.useState(e),[a,s]=u.useState(null);return u.useEffect(()=>{t.current!==a&&s(t.current)}),u.useEffect(()=>{if(!a||typeof ResizeObserver>"u")return;const i=new ResizeObserver(d=>{for(const l of d)l.contentRect.width>0&&l.contentRect.height>0&&o({w:Math.floor(l.contentRect.width),h:Math.floor(l.contentRect.height)})});return i.observe(a),()=>i.disconnect()},[a]),{ref:t,size:r}}function gt(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const mt={"in-transit":.18,"awaiting-reply":.5,due:.62,overdue:.82,lost:.95};function La(e){const t=e.reachEtaSeconds,r=Da(e);if(t===null||r===null)return mt[e.predictedPhase];const o=r-t;return Math.max(0,Math.min(1,o/(3*r)))}function Da(e){const t=e.reachEtaSeconds,r=e.replyEtaSeconds;return t!==null&&r!==null&&r>t?r-t:r===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function Ba(e){return e.map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:La(t),glyph:t.glyph??gt(t.label||t.command),...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function gd({oneWaySeconds:e,canQueue:t,alwaysBadge:r=!1}){return e===null||e<=0?"none":r||ho({oneWaySeconds:oe("s",e)})==="live"?"badge":t?"strip":"none"}const Na={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},Qe={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Ha(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Na[e.phase]}const Fe=new Set(["overdue","lost"]),Wa=180,Ua=96;function Fn(e){return he(oe("s",Math.max(0,e)))}function Ga(e){let t=null;for(const r of e)r.etaSeconds!==null&&(t===null||r.etaSeconds<t)&&(t=r.etaSeconds);return t}const Ka=1;function Ln(e){const[t,r]=u.useState(e),o=u.useRef(e);return u.useEffect(()=>{const a=o.current;(a===null!=(e===null)||a!==null&&e!==null&&Math.abs(e-a)>=Ka)&&(o.current=e,r(e))},[e]),u.useEffect(()=>{const a=setInterval(()=>{r(s=>s===null?null:Math.max(0,s-1))},1e3);return()=>clearInterval(a)},[]),t}function qa({items:e,mode:t,density:r="auto",orientation:o="column","aria-label":a="In-flight commands",variant:s="inline",onDismiss:i}){const{ref:d,size:l}=ve({w:320,h:0});if(s==="rail")return e.length===0?null:n.jsx(Xa,{items:e,"aria-label":a});if(s==="expanded")return e.length===0?null:n.jsx(ns,{items:e,"aria-label":a,onDismiss:i});const h=r!=="auto"?r:l.w>=Wa?"full":l.w>=Ua?"compact":"badge";return e.length===0?null:h==="badge"?n.jsx(Za,{ref:d,items:e,mode:t,"aria-label":a}):n.jsx(Bn,{ref:d,role:"list","aria-label":a,"data-mode":t,"data-density":h,$row:o==="row",children:e.map(f=>n.jsx(Ja,{item:f,$compact:h==="compact"},f.id))})}const He=100,zt=16,Va=-4,Ya=9,Qa=.22;function Xa({items:e,"aria-label":t}){const r=u.useId(),o=`${e.length} in flight`;return n.jsxs(es,{role:"img","aria-label":`${t}: ${o}`,viewBox:`0 0 ${He} ${zt}`,preserveAspectRatio:"none",children:[n.jsx("defs",{children:e.map((a,s)=>{const i=Fe.has(a.phase)?O.warn:"var(--color-accent-fg)",l=Math.max(0,Math.min(1,a.progress??mt[a.phase]))*He;return n.jsxs("radialGradient",{id:`${r}-${s}`,gradientUnits:"userSpaceOnUse",cx:l,cy:Va,r:Ya,children:[n.jsx("stop",{offset:"0",stopColor:i,stopOpacity:Qa}),n.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0"})]},a.id)})}),e.map((a,s)=>n.jsx("rect",{"data-role":"glow","data-phase":a.phase,x:"0",y:"0",width:He,height:zt,fill:`url(#${r}-${s})`},a.id))]})}const Za=function({ref:t,items:r,mode:o,"aria-label":a}){const s=Ln(Ga(r)),i=r.some(l=>Fe.has(l.phase)),d=s===null?`${r.length} in flight`:`${r.length} in flight, next in ${Fn(s)}`;return n.jsx(se,{text:r.map(l=>l.label).join(`
`),focusable:!0,children:n.jsx(Bn,{ref:t,role:"group","aria-label":`${a}: ${d}`,"data-mode":o,"data-density":"badge",$row:!1,children:n.jsxs(Nn,{$phase:i?"overdue":"in-transit",children:[n.jsx(Hn,{"aria-hidden":"true",$pulse:!i,children:"↑"}),n.jsxs(Wn,{children:[r.length,s!==null&&n.jsxs(n.Fragment,{children:[" · ",n.jsx(zn,{value:Math.max(0,s)})]})]})]})})})};function Ja({item:e,$compact:t}){const r=Ln(e.etaSeconds),o=Fe.has(e.phase),a=r===null?`${e.label}, ${Qe[e.phase]}`:`${e.label}, ${Fn(r)}`;return n.jsxs(Nn,{$phase:e.phase,role:"listitem",...t?{"aria-label":a,title:a}:{},children:[n.jsx(Hn,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Ha(e)}),!t&&n.jsx(us,{children:e.label}),n.jsx(Wn,{children:r===null?Qe[e.phase]:n.jsx(zn,{value:Math.max(0,r)})})]})}const es=c.svg`
  display: block;
  width: 100%;
  height: 16px;
`,Dn=54,ue=5,vt=3,Le=Dn-8-ue,ae=60,ts={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:O.warn,lost:O.warn};function ns({items:e,"aria-label":t,onDismiss:r}){const{ref:o,size:a}=ve({w:320,h:Dn}),i=a.w>=ae?a.w:a.h,d=Math.max(1,Math.floor((i-6)/(Le+vt))),h=e.length>d?e.slice(0,d-1):e,f=e.length-h.length;return n.jsx(os,{ref:o,children:n.jsxs(as,{role:"list","aria-label":t,children:[h.map(g=>n.jsx(rs,{item:g,onDismiss:r},g.id)),f>0&&n.jsxs(ds,{role:"listitem","aria-label":`${f} more in flight`,children:["+",f]})]})})}function rs({item:e,onDismiss:t}){const r=e.glyph??gt(e.label),o=ts[e.phase],a=Math.max(0,Math.min(1,e.progress??mt[e.phase])),s=Fe.has(e.phase)&&!!t,i=`${e.label}, ${Qe[e.phase]}`;return n.jsxs(ss,{role:"listitem","aria-label":i,"data-phase":e.phase,style:{color:o},children:[n.jsx(se,{text:s?`Dismiss ${e.label}`:i,announce:!1,children:n.jsxs(is,{as:s?"button":"div",...s?{type:"button",onClick:()=>t?.(e.id),"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[n.jsx("span",{className:"glyph","aria-hidden":"true",children:r}),s&&n.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),n.jsx(ls,{children:n.jsx("span",{className:"fill",style:{"--fill-ratio":a}})})]})}const os=c.div.attrs({role:"group"})`
  container-type: inline-size;
  /* Never shrinks in the rail's flex column, so a combined pinned rail shows the whole tile row. */
  flex: 0 0 auto;
  /* The row container the tiles sit in; its horizontal inset matches the standard content margin. */
  margin: var(--outset-command-strip);
  /* The inset equals (panel radius - tile radius), so the first tile's corner nests concentrically in the panel's. */
  --queue-panel-radius: calc(var(--radius-floating) * 2);
  --queue-tile-inset: calc(var(--queue-panel-radius) - var(--radius-regular));
  padding: var(--queue-tile-inset);
  height: calc(
    ${Le}px + ${ue}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
`,as=c.div`
  display: flex;
  flex-direction: column;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${vt}px;
  width: 100%;
  height: 100%;

  @container (min-width: ${ae}px) {
    flex-direction: row;
  }
`,ss=c.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @container (min-width: ${ae}px) {
    flex-direction: column;
  }
`,is=c.div`
  --s: ${Le}px;
  flex: 0 0 var(--s);
  width: var(--s);
  height: var(--s);
  align-self: center;
  position: relative;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  appearance: none;
  font: inherit;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: currentColor;
  background: color-mix(in srgb, currentColor 10%, var(--color-surface-raised));
  border: 1px solid currentColor;
  border-right: 0;
  border-radius: var(--radius-regular) 0 0 var(--radius-regular);
  overflow: hidden;

  @container (min-width: ${ae}px) {
    border-right: 1px solid currentColor;
    border-bottom: 0;
    border-radius: var(--radius-regular) var(--radius-regular) 0 0;
  }

  .glyph {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: var(--color-text-primary);
  }
  .dismiss {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    opacity: 0;
    background: color-mix(in srgb, currentColor 22%, var(--color-surface-sunken));
  }

  &:is(button) {
    cursor: pointer;
  }
  &:is(button):hover .dismiss,
  &:is(button):focus-visible .dismiss {
    opacity: 1;
  }
  &:is(button):hover .glyph,
  &:is(button):focus-visible .glyph {
    opacity: 0;
  }
  /* Not the kit's shared ring: every other part of the tile follows the phase colour through currentColor. */
  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 1px;
  }
`,ls=c.div`
  --s: ${Le}px;
  position: relative;
  flex: 0 0 ${ue}px;
  width: ${ue}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${ae}px) {
    width: var(--s);
    height: ${ue}px;
    border-radius: 0 0 var(--radius-regular) var(--radius-regular);
  }

  .fill {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(var(--fill-ratio, 0) * 100%);
    background: currentColor;
  }
  @container (min-width: ${ae}px) {
    .fill {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: calc(var(--fill-ratio, 0) * 100%);
      height: auto;
    }
  }
`,ds=c.span`
  align-self: center;
  flex: 0 0 auto;
  padding: 0 ${vt}px;
  font-size: var(--font-size-compact);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-muted);
`,Bn=c.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: ${({$row:e})=>e?"row":"column"};
  flex-wrap: ${({$row:e})=>e?"wrap":"nowrap"};
  column-gap: var(--gap-command-list-column);
  gap: var(--gap-command-list-row);
  padding: var(--inset-command-list);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,cs={"in-transit":S`
    color: var(--color-text-primary);
  `,"awaiting-reply":S`
    color: var(--color-text-muted);
  `,due:S`
    color: var(--color-text-muted);
  `,overdue:S`
    color: ${G.warn};
  `,lost:S`
    color: ${G.warn};
  `},Nn=c.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>cs[e]}
`,Hn=c.span`
  flex: 0 0 auto;
  color: ${({$inherit:e})=>e?"inherit":"var(--color-accent-fg)"};

  ${({$pulse:e})=>e&&S`
      @media (prefers-reduced-motion: no-preference) {
        animation: in-flight-list-pulse 1.6s var(--ease-emphasis) infinite;
      }
    `}

  @keyframes in-flight-list-pulse {
    50% {
      opacity: 0.35;
    }
  }
`,us=c.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Wn=c.span`
  flex: 0 0 auto;
`;function hs({handle:e,handles:t,"aria-label":r,mode:o,density:a,orientation:s,variant:i="inline"}){const d=t??(e?[e]:[]),l=d.length===1?d[0]:null,h=l?pt(l.tags):null;if(l&&h===null)return n.jsx(fs,{tags:l.tags,who:l["aria-label"]});if(l&&h!=="in-flight-row"){const m=l,v=m.effectiveDelaySeconds;return v===null||v<=0?null:n.jsx(Ta,{streams:m.streams??[],ribbons:m.ribbons??[],delayReading:m.delayReading,"aria-label":r??m["aria-label"],variant:i})}const f=Ba(d.flatMap(m=>m.inFlight)),x=d.some(m=>m.dismiss)?m=>d.find(v=>v.inFlight.some(b=>b.id===m))?.dismiss?.(m):void 0;return n.jsx(qa,{items:f,"aria-label":r,mode:o,density:a,orientation:s,variant:i,onDismiss:x})}function fs({tags:e,who:t}){return En(e,t??"unnamed handle"),n.jsx("span",{hidden:!0,"data-rail-unrepresented":Me(e)})}function Un(e){const r=ie(e)||e.command||"The command",o=e.code===void 0?void 0:vn(e.code);return o?.kind==="fault"?`${r}: failed, ${o.sentence}.`:`${r}: failed, with no verdict from the game.`}function Gn(e){return`${ie(e)||e.command||"The command"}: never sent. Safe to re-send.`}const ps={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed"},gs={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command"};function ms(e,t){return e.kind==="refused"?ft(e.entries[t]):e.kind==="found"?_n(e.entries[t]):e.kind==="failed"?Un(e.entries[t]):e.kind==="undelivered"?Gn(e.entries[t]):Rn(e.entries[t])}function vs(e){return e.entries.map((t,r)=>{const o=ie(t);return{id:t.id,subject:o||t.command||"",sentence:ms(e,r),dismissLabel:`Dismiss ${o||gs[e.kind]}`,tags:t.tags}})}function le(e){const{kind:t,onDismiss:r,live:o=!0}=e,a=e["aria-label"]??ps[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const i=vs(e).map(d=>n.jsxs(ws,{role:o?void 0:"listitem",$tone:s,children:[Ce(d.tags)==="ribbon"?n.jsx($s,{$tone:s,children:d.subject}):n.jsx(ys,{"aria-hidden":"true",$tone:s,children:gt(d.subject)}),n.jsx(js,{children:d.sentence}),r&&n.jsx(ks,{type:"button",onClick:()=>r(d.id),"aria-label":d.dismissLabel,children:"✕"})]},d.id));return o?n.jsx(bs,{forwardedAs:"div","aria-label":a,additionsOnly:!0,children:i}):n.jsx(xs,{role:"list","aria-label":a,children:i})}const Kn=S`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,xs=c.div`
  ${Kn}
`,bs=c(Oe)`
  ${Kn}
  &:empty {
    margin: 0;
  }
`,ws=c.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>O[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${O[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,ys=c.span`
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  min-width: 34px;
  padding: var(--inset-glyph);
  align-self: stretch;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: ${({$tone:e})=>G[e]};
  border: 1px solid ${({$tone:e})=>O[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${O[e]} 14%, var(--color-surface-raised))`};
`,$s=c.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>G[e]};
`,js=c.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,ks=c.button`
  flex: 0 0 auto;
  appearance: none;
  padding: var(--inset-glyph);
  border: 0;
  background: transparent;
  color: var(--color-text-muted);
  font: inherit;
  font-size: var(--font-size-xs);
  cursor: pointer;

  &:hover,
  &:focus-visible {
    color: var(--color-text-primary);
  }
  ${ge}
`;function Ss(){const e=ro();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const De=no(Ss),md=De.Context;function vd({children:e}){return n.jsx(De.Provider,{children:n.jsx(_s,{children:e})})}function _s({children:e}){const t=De.useStore();return n.jsx(fo.Provider,{value:t,children:e})}const Rs=De.useStore,Cs=()=>()=>{},Es=[],Ft=()=>Es;function As(){const e=Rs();return u.useSyncExternalStore(e?e.subscribe:Cs,e?e.getActiveHandles:Ft,e?e.getActiveHandles:Ft)}const Ps="is no longer available";function xd({keys:e,value:t,onChange:r,clearable:o=!1,placeholder:a="Search...",subjectNoun:s="value",id:i,"aria-label":d}){const[l,h]=u.useState(""),[f,g]=u.useState(!1),[x,m]=u.useState(-1),v=u.useRef(null),b=u.useRef(null),w=u.useId(),k=u.useId(),A=u.useId(),T=$=>`${k}-${$}`,j=e.find($=>$.key===t),R=t!==null&&t!==""&&j===void 0&&e.length>0,C=u.useMemo(()=>go(e,l),[e,l]),P=u.useMemo(()=>mo(C),[C]),E=u.useMemo(()=>vo(P),[P]),K=u.useCallback(()=>{g(!0),h(""),m(-1)},[]),B=u.useCallback(()=>{g(!1),h(""),m(-1)},[]),W=u.useCallback($=>{r($),B()},[r,B]),z=$=>{if(!f){($.key==="Enter"||$.key==="ArrowDown")&&K();return}switch($.key){case"Escape":B();break;case"ArrowDown":$.preventDefault(),m(N=>_t(N,1,E.length));break;case"ArrowUp":$.preventDefault(),m(N=>_t(N,-1,E.length));break;case"Enter":{const N=x>=0?E[x]:E[0];N&&W(N.key);break}}};u.useEffect(()=>{if(!f)return;const $=N=>{v.current?.contains(N.target)||B()};return document.addEventListener("pointerdown",$),()=>document.removeEventListener("pointerdown",$)},[f,B]);const p=f?l:j?.label??t??"",_=f&&x>=0?E[x]:void 0;return n.jsxs(Ts,{ref:v,children:[n.jsx(Is,{ref:b,id:i,"aria-label":d,value:p,placeholder:t?void 0:a,$hasValue:!!t&&!f,$retired:R&&!f,"aria-invalid":R&&!f?!0:void 0,"aria-describedby":R&&!f?A:void 0,onFocus:K,onBlur:B,onChange:$=>{h($.target.value),m(-1)},onKeyDown:z,role:"combobox","aria-expanded":f,"aria-controls":w,"aria-autocomplete":"list","aria-activedescendant":_?T(_.key):void 0}),R&&!f&&n.jsx(Ms,{id:A,children:`This ${s} ${Ps}. Pick another.`}),o&&t&&!f&&n.jsx(Os,{type:"button","aria-label":`Clear ${s}`,onClick:()=>{r(null),B()},children:"×"}),f&&n.jsx(xo,{id:w,groups:P,flatOptions:E,activeIndex:x,selectedKey:t,getOptionId:T,onHoverIndex:m,onSelectKey:W,"aria-label":d??"Data keys",renderItem:$=>n.jsxs(n.Fragment,{children:[n.jsx(zs,{children:$.label??$.key}),$.unit&&n.jsx(Fs,{children:$.unit})]})})]})}const Ts=c.div`
  position: relative;
`,Is=c.input`
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

  ${ge}

  &::placeholder {
    color: var(--color-text-faint);
  }
`,Os=c.button`
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

  ${ge}
`,Ms=c.div`
  color: var(--color-nogo-text);
  font-size: var(--font-size-compact);
  margin-top: var(--gap-caption);
`,zs=c.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
`,Fs=c.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  margin-left: var(--gap-trailing-mark);
`,Lt={left:!1,right:!1};function Ls(e){const[t,r]=u.useState(Lt),o=u.useRef(Lt);return u.useEffect(()=>{if(!e)return;const a=()=>{const d=e.scrollLeft>1,l=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===d&&o.current.right===l||(o.current={left:d,right:l},r(o.current))};a(),e.addEventListener("scroll",a,{passive:!0});const s=typeof ResizeObserver>"u"?null:new ResizeObserver(a);s?.observe(e);for(const d of Array.from(e.children))s?.observe(d);const i=new MutationObserver(()=>{for(const d of Array.from(e.children))s?.observe(d);a()});return i.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",a),s?.disconnect(),i.disconnect()}},[e]),t}const Dt=c.div`
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
`;function Ds({label:e,selected:t,count:r,onToggle:o}){return n.jsxs(Bs,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[n.jsx("span",{children:e}),r!==void 0&&n.jsx(Ns,{children:r})]})}const Bs=c.button`
  ${it("chip")}
  display: inline-flex;
  align-items: center;
  gap: var(--gap-glyph-control);
  padding: var(--inset-control-small);
  /* --radius-pill keeps the stadium shape through a padding change. */
  border-radius: var(--radius-pill);
  font-size: var(--font-size-compact);
  font-weight: 600;
  /* Sentence case: a real toggle button rather than a Badge, and its label is not the kit's to shout. */
  cursor: pointer;
  transition:
    background var(--duration-fast),
    border-color var(--duration-fast),
    color var(--duration-fast);

  background: ${({$selected:e})=>e?"var(--color-accent-fg)":"transparent"};
  color: ${({$selected:e})=>e?"var(--color-text-inverse)":"var(--color-text-dim)"};
  border: 1px solid
    ${({$selected:e})=>e?"var(--color-accent-fg)":"var(--color-border-subtle)"};

  &:hover {
    border-color: var(--color-accent-fg);
    color: ${({$selected:e})=>e?"var(--color-text-inverse)":"var(--color-text-primary)"};
  }

  ${ge}
`,Ns=c.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function Hs({value:e,onChange:t,clearLabel:r="Clear search",className:o,...a}){const s=u.useRef(null);return n.jsxs(Ws,{className:o,children:[n.jsx(Us,{...a,ref:s,type:"search",value:e,onChange:i=>t(i.target.value)}),e!==""&&n.jsx(Gs,{type:"button","aria-label":r,onClick:()=>{t(""),s.current?.focus()},children:n.jsx(Vr,{size:"var(--icon-size-control)"})})]})}const Ws=c.div`
  position: relative;
  display: flex;
  align-items: center;
`,Us=c(Yr)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,Gs=c(Qr)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function Ks({segment:e="filters",label:t="Search",placeholder:r="Filter..."}={}){const o=oo(e),a=[...new Set(o)],[s,i]=u.useState(()=>new Set),[d,l]=u.useState(""),h=u.useId(),f=v=>{i(b=>{const w=new Set(b);return w.has(v)?w.delete(v):w.add(v),w})},g=[...s,d].filter(v=>v.length>0).map(v=>v.toLowerCase()),x=n.jsxs(at,{gap:"related-packed",children:[a.length>0&&n.jsx(Xr,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:a.map(v=>n.jsx(Ds,{label:v,selected:s.has(v),onToggle:()=>f(v)},v))}),n.jsxs(Zr,{children:[n.jsx(Jr,{htmlFor:h,children:t}),n.jsx(Hs,{id:h,value:d,placeholder:r,onChange:l})]})]}),m={matches:v=>{const b=v.toLowerCase();return g.every(w=>b.includes(w))},active:g.length>0};return qn.set(m,x),m}const qn=new WeakMap;function Vn(e){return qn.get(e)??null}function qs({filter:e,children:t,fill:r=!1}){return n.jsxs(at,{gap:"related-dense",fill:r,children:[Vn(e),t]})}function bd({rows:e,segment:t="filters",emptyLabel:r="Nothing matches the filter"}){const o=Ks({segment:t}),a=e.filter(s=>o.matches(s.searchText));return n.jsx(qs,{filter:o,children:a.length>0?n.jsx(at,{gap:"related",children:a.map(s=>n.jsx("div",{children:s.node},s.id))}):n.jsx(sn,{children:r})})}const Vs=24,Ys=96;function Qs({children:e,padded:t,caption:r,footer:o,strip:a,...s}){const i=a!=null&&a!==!1;return n.jsxs(Xs,{$padded:t&&!i,$stacked:i,...s,children:[i?n.jsxs(n.Fragment,{children:[n.jsx(Zs,{$padded:t,children:e}),n.jsx(Js,{"data-framed-display-strip":"",children:a})]}):e,r!=null&&n.jsx(Yn,{children:r}),o!=null&&n.jsx(ei,{children:o})]})}const Xs=c.div`
  position: relative;
  display: flex;
  flex-direction: ${({$stacked:e})=>e?"column":"row"};
  min-height: 0;
  min-width: 0;
  /* Sunken: the visual sits inside the panel surface rather than floating on it. */
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  /* The container answers with a corner proportioned to the box, so a frame never needs to know its own size. */
  border-radius: var(--radius-display-frame);
  overflow: hidden;
  padding: ${({$padded:e})=>e?"var(--inset-framed-display)":"0"};

  /* A child SVG or canvas fills the frame instead of its intrinsic 300x150. */
  & > svg,
  & > canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`,Zs=c.div`
  flex: 7 1 0;
  display: flex;
  min-height: 0;
  min-width: 0;
  padding: ${({$padded:e})=>e?"var(--inset-framed-display)":"0"};

  & > svg,
  & > canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`,Js=c.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${Vs}px;
  max-height: ${Ys}px;
  min-width: 0;
  overflow: hidden;
`,Yn=c.div`
  position: absolute;
  top: var(--offset-frame-caption-top);
  left: var(--offset-frame-caption-left);
  z-index: 1;
  padding: var(--inset-notice-pill);
  border-radius: var(--radius-regular);
  /* The smallest rung, flush, so the label covers as little of the drawing as it can. */
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  color: var(--color-text-muted);
  background: var(--color-surface-sunken);
  pointer-events: none;
`,ei=c(Yn)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,Bt={width:160,height:72},ti=2.5,ni=420;function wd({width:e,height:t,plotHasData:r}){return!r&&e>=Bt.width&&t>=Bt.height?"center":e>=ni&&e>=t*ti?"beside":"inline"}const ri={overlay:S`
    position: absolute;
    bottom: var(--offset-graph-notice-bottom);
    left: var(--offset-graph-notice-left);
  `,center:S`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    text-align: center;
  `,inline:S`
    flex: 0 0 auto;
    align-self: flex-start;
    max-width: 100%;
    margin-top: var(--gap-sub-readout);
  `,beside:S`
    flex: 0 1 30%;
    align-self: flex-start;
    max-width: 40%;
  `};function oi({placement:e,role:t="status",children:r,...o}){return n.jsx(ai,{$placement:e,role:t,...o,children:r})}const ai=c.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${Lr.regular};
  pointer-events: none;

  ${({$placement:e})=>ri[e]}
`,si=32,ii=25,Nt=8;function li(e,t){return{pxW:e*si+(e-1)*Nt,pxH:t*ii+(t-1)*Nt}}const di="8px";function Qn({percent:e,tone:t,fillColor:r,trackHeld:o=!1,fillHeld:a=!1,children:s,...i}){return n.jsxs(ci,{"data-track-held":o?"":void 0,...i,children:[e!==null&&n.jsx(hi,{$tone:t,$fillColor:r,$held:a,"data-fill-held":a?"":void 0,style:{width:`${e}%`}}),o&&n.jsx(ui,{"data-track-hatch":"",style:{left:`${e??0}%`}}),s]})}const ci=c.div`
  width: 100%;
  border-radius: var(--radius-pill);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  overflow: hidden;
  /* Positioned for the fill only: this overflow rounds the fill's ends and would clip any mark drawn over it. */
  position: relative;
  height: ${di};
`,ui=c.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(
    -45deg,
    ${O.warn} 0 1px,
    transparent 1px 4px
  );
  opacity: 0.55;
  pointer-events: none;
`,hi=c.div`
  height: 100%;
  border-radius: var(--radius-pill);
  transition: width var(--duration-slow) var(--ease-standard);
  /* A held reading dims the fill, not the hue and not the whole bar, so a label beside it stays readable. */
  ${({$held:e})=>e?"opacity: 0.55;":""}
  background: ${({$tone:e,$fillColor:t})=>t??O[e]};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function yd({label:e,value:t,capacity:r,format:o,tone:a="neutral",fillColor:s,valueLabel:i,valueLabelNode:d,layout:l="stacked",hideLabel:h=!1,statement:f=!1,...g}){const x=Ht(t),m=Ht(r),v=fi(x.figure,r===void 0?void 0:m.figure);if(v===null||!Number.isFinite(v))return h?null:n.jsx(tr,{layout:l,label:e,display:n.jsx(Dr,{}),...g,children:n.jsx(Qn,{percent:null,tone:a,"aria-hidden":"true"})});const b=Math.min(1,Math.max(0,v)),w={label:e,layout:l,hideLabel:h,statement:f,pct:Math.round(b*100),tone:a,fillColor:s,trackHeld:m.reading?.state==="held"&&!St(m.figure),fillHeld:x.reading?.state==="held"&&!St(x.figure),...g},k=Ze(1,Xe(m.reading,m.figure,m.figure));if(r!==void 0)return n.jsx(ra,{of:x.figure?.unit,format:o,children:n.jsx(gi,{...w,value:t,capacity:r,shown:x,held:m,endBounds:k,at:b,valueLabel:i,valueLabelNode:d})});const A=Ze(b,Xe(x.reading,x.figure,null));return n.jsx(er,{...w,bounds:A,endBounds:k,display:d??(i===void 0?n.jsx(Q,{value:t,format:o}):n.jsx(Zn,{caption:Ae(t),children:i})),spoken:Jn(i===void 0?ee(x.figure,{format:o}):Xn(i,Ae(t)),A,k)})}function Ae(e){const{held:t,caption:r}=Ie(e??null);return t?r:null}function Xn(e,t){return t===null?e:`${e}, ${t}`}function Zn({caption:e,children:t}){return e===null?n.jsx(n.Fragment,{children:t}):n.jsx(dt,{caption:e,children:t})}function Ht(e){return typeof e!="object"||e===null||!("state"in e)?{figure:e??null,reading:null}:{figure:e.value??null,reading:e}}function fi(e,t){return e===null||t===null||t!==void 0&&!t.isPositive()?null:(t===void 0?e:e.dividedBy(t)).magnitude}function Xe(e,t,r){if(e===null||e.reckoning.status!=="available"||t===null)return null;const o=mn(e.reckoning.band,t.unit);if(!o)return null;const a={loSaid:o.lo,hiSaid:o.hi,kind:o.kind};return r===null?{lo:ye(o.lo,0),hi:ye(o.hi,0),...a}:r.isPositive()?{lo:ye(o.lo.dividedBy(r),0),hi:ye(o.hi.dividedBy(r),0),...a}:null}function Ze(e,t){return t===null?null:Re(e,[t.lo,t.hi],qo())?t:null}function Jn(e,t,r,o){const a=(i,d)=>{const l=ee(i.loSaid,o),h=ee(i.hiSaid,o);return`${d}with bands at ${l} and ${h}`},s=[t===null?null:a(t,""),r===null?null:a(r,"capacity ")].filter(i=>i!==null);return s.length===0?e:`${e}, ${s.join(", ")}`}function pi(e){if(!Number.isFinite(e))return 0;const t=Math.min(1,Math.max(0,e));return Math.round(t*1e4)/100}function je(e){const t=pi(e),r=t<=0?0:t>=100?-2:-1;return{style:{left:`${t}%`,transform:`translateX(${r}px)`}}}function er({label:e,layout:t,hideLabel:r,statement:o,pct:a,tone:s,fillColor:i,trackHeld:d,fillHeld:l,display:h,spoken:f,bounds:g,endBounds:x,...m}){return n.jsxs(tr,{layout:t,label:e,display:h,hideHead:r,statement:o,...m,children:[n.jsx(Qn,{percent:a,tone:s,fillColor:i,trackHeld:d,fillHeld:l,role:"meter","aria-label":e,"aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":f}),(g!==null||x!==null)&&n.jsxs(yi,{"aria-hidden":"true",children:[g!==null&&n.jsxs(n.Fragment,{children:[n.jsx(ke,{"data-bound":"lo",...je(g.lo)}),n.jsx(ke,{"data-bound":"hi",...je(g.hi)})]}),x!==null&&n.jsxs(n.Fragment,{children:[n.jsx(ke,{"data-end-bound":"lo",...je(x.lo)}),n.jsx(ke,{"data-end-bound":"hi",...je(x.hi)})]})]})]})}function tr({layout:e,label:t,display:r,hideHead:o=!1,statement:a=!1,children:s,...i}){return o?n.jsxs(We,{$row:!1,...i,children:[n.jsx(Ue,{$row:!1,children:s}),a&&n.jsx(wi,{"data-meter-part":"statement",children:r})]}):e==="row"?n.jsxs(We,{$row:!0,"data-meter-row":"",...i,children:[n.jsx(Ut,{"data-meter-part":"label",children:t}),n.jsx(Ue,{$row:!0,"data-meter-part":"bar",children:s}),n.jsx(Gt,{$row:!0,"data-meter-part":"figure",children:r})]}):n.jsxs(We,{$row:!1,...i,children:[n.jsxs(bi,{children:[n.jsx(Ut,{children:t}),n.jsx(Gt,{$row:!1,children:r})]}),n.jsx(Ue,{$row:!1,children:s})]})}function gi({value:e,capacity:t,shown:r,held:o,at:a,valueLabel:s,valueLabelNode:i,...d}){const l=s===void 0,h=Ye(l?r.figure:void 0),f=Ye(l?o.figure:void 0),g=h??f??{},x=Ae(e)??Ae(t),m=i??(s!==void 0?n.jsx(Zn,{caption:x,children:s}):d.layout==="row"?n.jsxs($i,{$marked:d.fillHeld||d.trackHeld,children:[n.jsx(Q,{value:e,hideUnitInGroup:!0})," / ",n.jsx(Q,{value:t}),(d.fillHeld||d.trackHeld)&&n.jsx(wn,{"aria-hidden":"true","data-held-mark":""})]}):n.jsxs(n.Fragment,{children:[n.jsx(Q,{value:e})," / ",n.jsx(Q,{value:t})]})),v=s===void 0?`${ee(r.figure,g)} of ${ee(o.figure,g)}`:Xn(s,x),b=Ze(a,Xe(r.reading,r.figure,o.figure));return n.jsx(er,{...d,display:m,spoken:Jn(v,b,d.endBounds,g),bounds:b})}const Je=48;function $d({children:e,...t}){const r=u.useRef(null);return u.useLayoutEffect(()=>{const o=r.current;if(!o||typeof ResizeObserver>"u")return;const a=()=>{o.clientWidth!==0&&o.toggleAttribute("data-figures-below",!mi(o))};let s=0;const i=()=>{cancelAnimationFrame(s),s=requestAnimationFrame(a)},d=new ResizeObserver(i),l=()=>{d.disconnect(),d.observe(o);for(const f of nr(o))d.observe(f)},h=new MutationObserver(l);return h.observe(o,{childList:!0,subtree:!0}),l(),a(),()=>{cancelAnimationFrame(s),d.disconnect(),h.disconnect()}},[]),n.jsx(xi,{ref:r,...t,children:e})}const jd=c.div.attrs({"data-meter-row-group":""})`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  row-gap: var(--gap-meter-rows);
  min-width: 0;

  & > * {
    grid-column: 1 / -1;
    min-width: 0;
  }
`;function nr(e){return Array.from(e.querySelectorAll(':scope > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row] > [data-meter-part="figure"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="figure"]'))}function mi(e){const t=nr(e);if(t.length===0)return!0;let r=0,o=0;for(const l of t)l.dataset.meterPart==="label"?r=Math.max(r,vi(l)):o=Math.max(o,l.scrollWidth);const a=getComputedStyle(e),s=l=>Number.parseFloat(l)||0,i=s(a.columnGap),d=e.clientWidth-s(a.paddingLeft)-s(a.paddingRight);return r+i+Je+i+o<=d}function vi(e){const t=e.style.whiteSpace;e.style.whiteSpace="nowrap";const r=e.scrollWidth;return e.style.whiteSpace=t,r}const xi=c.div`
  display: grid;
  grid-template-columns:
    minmax(min-content, max-content)
    minmax(${Je}px, 1fr)
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
      minmax(${Je}px, 1fr);
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
`,Wt="1px",We=c.div`
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
`,bi=c.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--gap-label-value);
  min-width: 0;
  /* The value may drop to its own line at narrow widths rather than crushing the label. */
  flex-wrap: wrap;
`,Ut=c.span`
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
`,Gt=c.span`
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
`,wi=c.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,yi=c.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,Ue=c.div`
  position: relative;
  ${({$row:e})=>e?S`
          flex: 1 1 28px;
          min-width: 28px;
        `:""}
`,$i=c($n)`
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
`,ke=c.div`
  position: absolute;
  top: ${Wt};
  bottom: ${Wt};
  width: 2px;
  background: var(--color-text-primary);
  /* Inset and outset, so the mark keeps an edge against a light or saturated fill on either side of its end. */
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 0.55),
    inset 0 0 0 0.5px rgb(0 0 0 / 0.35);
  opacity: 0.62;
  pointer-events: none;
`;function ji(e){if(Ce(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,r=e.ribbons?.length??0,o=e.streams?.length??0;return t===null||t<=0?!1:r>0||t>=Tn&&o>0}return e.inFlight.length>0}function rr({tiny:e}={}){const t=As(),r=t.filter(ji),o=t.flatMap(p=>(p.refusals??[]).map(_=>({..._,tags:p.tags}))),a=t.flatMap(p=>(p.losses??[]).map(_=>({..._,tags:p.tags}))),s=t.flatMap(p=>(p.founds??[]).map(_=>({..._,tags:p.tags}))),i=t.flatMap(p=>(p.undelivered??[]).map(_=>({..._,tags:p.tags}))),d=t.flatMap(p=>(p.failures??[]).map(_=>({..._,tags:p.tags}))),l=o.length+i.length+d.length,h=r.length>0||l>0||a.length>0||s.length>0,[f,g]=u.useState(!1),[x,m]=u.useState(!1),[v,b]=u.useState(!1),w=f||x&&!v,k=u.useId(),A=[...r.filter(p=>Ce(p.tags)==="ribbon"),...r.filter(p=>Ce(p.tags)!=="ribbon")],j=t.some(p=>p.dismiss&&(p.refusals?.length??0)>0)?p=>t.find(_=>_.refusals?.some($=>$.id===p))?.dismiss?.(p):void 0,C=t.some(p=>p.dismiss&&(p.losses?.length??0)>0)?p=>t.find(_=>_.losses?.some($=>$.id===p))?.dismiss?.(p):void 0,E=t.some(p=>p.dismiss&&(p.undelivered?.length??0)>0)?p=>t.find(_=>_.undelivered?.some($=>$.id===p))?.dismiss?.(p):void 0,B=t.some(p=>p.dismiss&&(p.failures?.length??0)>0)?p=>t.find(_=>_.failures?.some($=>$.id===p))?.dismiss?.(p):void 0,z=t.some(p=>p.dismiss&&(p.founds?.length??0)>0)?p=>t.find(_=>_.founds?.some($=>$.id===p))?.dismiss?.(p):void 0;return n.jsxs(ki,{"data-panel-rail-frame":"",$tiny:e,$hasContent:h,children:[t.length>0&&n.jsxs(Oe,{visuallyHidden:!0,additionsOnly:!0,children:[o.map(p=>n.jsx("span",{children:ft(p)},`refusal:${p.id}`)),a.map(p=>n.jsx("span",{children:Rn(p)},`loss:${p.id}`)),i.map(p=>n.jsx("span",{children:Gn(p)},`undelivered:${p.id}`)),d.map(p=>n.jsx("span",{children:Un(p)},`failure:${p.id}`)),s.map(p=>n.jsx("span",{children:_n(p)},`found:${p.id}`))]}),h?n.jsxs(_i,{"data-panel-rail":"","data-grown":w,"data-pinned":f,"data-suppress-hover":v,onMouseEnter:()=>{b(!1),m(!0)},onMouseLeave:()=>m(!1),onKeyDown:p=>{p.key==="Escape"&&f&&(p.stopPropagation(),g(!1),b(!0))},children:[n.jsx(Ri,{type:"button","aria-expanded":f,"aria-controls":k,"aria-label":"Signal-delay detail",onClick:()=>{g(p=>{const _=!p;return _||b(!0),_})},children:n.jsx(Pi,{"aria-hidden":"true",hidden:!w,children:"▲"})}),n.jsxs(Ci,{id:k,"data-panel-rail-detail":"",children:[A.map(p=>n.jsx(hs,{handle:p,variant:w?"expanded":"rail","aria-label":p["aria-label"]??(w?"Delay detail":void 0)},p.id)),!w&&(l>0||a.length>0||s.length>0)&&n.jsxs(Ei,{children:[l>0&&n.jsx(Kt,{children:l===1?"1 command failed":`${l} commands failed`}),a.length>0&&n.jsx(Kt,{children:a.length===1?"1 command unconfirmed":`${a.length} commands unconfirmed`}),s.length>0&&n.jsx(Ai,{children:s.length===1?"1 unconfirmed command answered":`${s.length} unconfirmed commands answered`})]})]})]}):null,w&&o.length>0&&n.jsx(le,{kind:"refused",entries:o,onDismiss:j,live:!1}),w&&a.length>0&&n.jsx(le,{kind:"lost",entries:a,onDismiss:C,live:!1}),w&&i.length>0&&n.jsx(le,{kind:"undelivered",entries:i,onDismiss:E,live:!1}),w&&d.length>0&&n.jsx(le,{kind:"failed",entries:d,onDismiss:B,live:!1}),w&&s.length>0&&n.jsx(le,{kind:"found",entries:s,onDismiss:z,live:!1})]})}const ki=c.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,Si=S`
  display: flex;
  flex-direction: column;
  gap: var(--gap-delay-rail);
  /* A generous cap the grown content fits inside; the visible height settles at the content height. */
  max-height: 800px;
  /* Full-bleed, so the stream graph spans the widget edge to edge; each child owns its own inset. */
  padding: 0;

  & > *,
  & > [data-panel-rail-detail] > * {
    grid-area: auto;
  }
`,_i=c.div`
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;

  /* Height follows min(content, max-height), so animating max-height opens and collapses the rail (auto is not animatable). */
  display: grid;
  height: auto;
  /* The band, and nothing over it: the strip a widget reserves is the strip the rail fills. */
  max-height: var(--panel-rail-band);
  overflow: hidden;
  transition: max-height var(--duration-slow) var(--ease-standard);

  & > *,
  & > [data-panel-rail-detail] > * {
    grid-area: 1 / 1;
  }

  &:not([data-pinned="true"]) > [data-panel-rail-detail] > * {
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  /* Open (pinned or hover preview) grows past the band, driven by React state because the published height must be the grown one only. */
  &[data-grown="true"] {
    ${Si}
  }
`,Ri=c.button`
  appearance: none;
  position: absolute;
  inset: 0;
  border: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;

  ${me}

  &[aria-expanded="true"] {
    pointer-events: none;
  }

`,Ci=c.div`
  display: contents;
`,Kt=c.span`
  color: ${G.warn};
`,Ei=c.span`
  align-self: center;
  justify-self: end;
  display: flex;
  gap: var(--gap-rail-summaries);
  padding: 0 var(--gutter-panel);
  font-size: var(--font-size-compact);
  /* Flush, so single-line chrome text fits the reserved band on a coarse pointer too. */
  line-height: var(--line-height-flush);
  font-weight: 700;
  letter-spacing: 0.04em;
  white-space: nowrap;
  pointer-events: none;
`,Ai=c.span`
  color: var(--color-info-text);
`,Pi=c.span`
  position: absolute;
  top: var(--offset-rail-hint);
  right: var(--gutter-panel);
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  pointer-events: auto;
  cursor: pointer;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: calc(-1 * var(--outset-rail-hint-target));
  }
`,or=u.createContext(null);function kd({badges:e,children:t}){return n.jsx(or.Provider,{value:e,children:t})}function Ti(){return u.useContext(or)}function ar({severity:e,count:t=1}){const r=t>1;return n.jsx(Ii,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":r?`${t} ${Ge[e]}`:Ge[e],$mark:O[e],$digits:r?String(t).length:1,children:r&&n.jsx(Oi,{$fill:Nr[e],$ink:Br[e],children:t})})}const qt="8px",Ii=c.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${qt};
  /* The count's own size, so the width below can be counted in its digits. */
  font-size: 7px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:qt};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,Oi=c.span`
  /* Out of flow, centred over the fixed parent box with no say over its size. */
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: ${({$fill:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${({$ink:e})=>e};
  /* Below the --font-size-2xs floor, which would not fit the 8px dot. */
  font-size: inherit;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  line-height: var(--line-height-flush);
`,Mi=()=>()=>{},Vt=()=>ao;function zi(){const e=fn();return u.useSyncExternalStore(e?e.subscribe:Mi,e?e.getBreakdown:Vt,e?e.getBreakdown:Vt)}const Fi=()=>()=>{},Yt=()=>null;function Li(){const e=fn();return u.useSyncExternalStore(e?e.subscribe:Fi,e?e.getSummary:Yt,e?e.getSummary:Yt)}const Di=12;function Bi(e,t){if(!e||typeof document>"u")return 0;const r=e.cloneNode(!0);r.textContent=t,r.style.position="fixed",r.style.visibility="hidden",r.style.pointerEvents="none",r.style.left="-99999px",r.style.top="-99999px",r.style.width="max-content",r.style.maxWidth="none",document.body.appendChild(r);const o=r.getBoundingClientRect().width;return document.body.removeChild(r),o}function Ni(e,t,r){if(t<=0||r.length===0||r[0]<=0)return 0;for(let o=0;o<r.length;o++){const a=o<e?t-Di:t;if(r[o]<=a)return o}return r.length-1}function Hi(e,t,r){const[o,a]=u.useState(0),s=u.useRef(o);s.current=o;const i=[t,...r].join(`
`),d=u.useCallback(()=>{const l=e.current,h=i.split(`
`);if(!l||h.length<2){s.current!==0&&(s.current=0,a(0));return}const f=h.map(x=>Bi(l,x)),g=Ni(s.current,l.clientWidth,f);g!==s.current&&(s.current=g,a(g))},[e,i]);return u.useLayoutEffect(()=>{d()},[d]),u.useEffect(()=>{const l=e.current;if(!l||typeof ResizeObserver>"u")return;const h=new ResizeObserver(()=>d());return h.observe(l),()=>h.disconnect()},[e,d]),{index:o,compacted:o>0}}const Wi=24;function Ui(e,t,r,o,a=!0){if(t<=0||r<=0)return e;const s=o!==void 0&&o>0&&o!==r;return e&&!s&&a?!(t>r+Wi):r>t}function Qt(e,t={},r){const o=e?.parentNode;if(!e||!o)return 0;const a=e.cloneNode(!0);r!==void 0&&(a.textContent=r),Object.assign(a.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),a.setAttribute("aria-hidden","true"),o.insertBefore(a,e.nextSibling);const s=a.getBoundingClientRect().width;return o.removeChild(a),s}const Gi={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function de(e){return Number.parseFloat(e)||0}function Ki(e,t,r,o){const[a,s]=u.useState(!1),i=u.useRef(a);i.current=a;const d=u.useRef(void 0),l=u.useRef(void 0),h=u.useRef(!1),f=u.useRef(o);f.current=o;const g=u.useCallback(()=>{const m=e.current;if(!m)return;const v=getComputedStyle(m),b=m.getBoundingClientRect().width-de(v.paddingLeft)-de(v.paddingRight),w=Qt(t.current,{},f.current),k=Qt(r.current,Gi),A=r.current?.closest("[data-panel-aside-expand]")?.parentElement,T=A?getComputedStyle(A):null,j=w===0||k===0?w+k:w+de(v.columnGap)+de(T?.paddingLeft??"")+de(T?.paddingRight??"")+k,R=i.current,C=b>0&&l.current!==void 0&&b<l.current;R&&C&&(h.current=!0);const P=Ui(R,b,j,d.current,h.current);P!==R&&(h.current=P&&C),b>0&&(l.current=b),j>0&&(d.current=j),P!==i.current&&(i.current=P,s(P))},[e,t,r]),x=u.useRef({title:null,aside:null,observer:null});return u.useLayoutEffect(()=>{const m=t.current,v=r.current,b=x.current;if(b.observer===null||b.title!==m||b.aside!==v){b.observer?.disconnect(),b.title=m,b.aside=v,b.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>g());for(const w of[m,v])w&&b.observer?.observe(w,{subtree:!0,childList:!0,characterData:!0,attributes:!0});g();return}b.observer.takeRecords().length>0&&g()}),u.useEffect(()=>{const m=x.current;return()=>{m.observer?.disconnect(),m.observer=null}},[]),u.useEffect(()=>{const m=e.current;if(!m||typeof ResizeObserver>"u")return;const v=new ResizeObserver(()=>g());return v.observe(m),r.current&&v.observe(r.current),()=>v.disconnect()},[e,r,g]),a}const sr=u.createContext("full"),qi=sr.Provider;function Sd(){return u.useContext(sr)}const xt=u.createContext(null);function ir({children:e}){const[t,r]=u.useState(null),o=u.useMemo(()=>({scroller:t,registerScroller:r}),[t]);return n.jsx(xt.Provider,{value:o,children:e})}function Vi({children:e}){return n.jsx(ir,{children:e})}const lr=`
  & > [${pn}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,Pe=c.div`
  /* Chrome only: border, surface and clip. The inset is Panel.Body's and the glow is Panel.Glow's. */
  background: var(--color-surface-panel);
  /* A size container, so the popped-open aside sizes itself in cqw against the panel's width. */
  container-type: inline-size;
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  /* Top only: the delay rail's band, reserved on every widget so a command in flight never pushes the title down. Sides and bottom stay zero so visual content can reach the chrome. */
  padding: var(--panel-rail-band) 0 0;
  /* When the rail travels with the header, the band is the sticky unit's first row instead. */
  ${({$railTravels:e})=>e?"padding-top: 0;":""}
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow: hidden;
  /* A hoverTitle panel is itself the tab stop, and the grid cell clips an outset ring, so the ring is drawn inside the edge. */
  ${({$hoverTitle:e})=>e?"position: relative;":""}
  ${({$hoverTitle:e})=>e?me:""}
  /* A hand-composed panel can put sections straight in here, so this box owns the leftover height. */
  ${lr}
`,Yi=c.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${hn}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,dr=u.forwardRef(function({compact:t,children:r,...o},a){const s=u.useRef(null),i=typeof r=="string"?r:"",d=t===void 0||i===""?Qi:typeof t=="string"?[t]:t,{index:l,compacted:h}=Hi(s,i,d);return n.jsx(se,{text:h?i:void 0,children:n.jsx(Yi,{...o,ref:f=>{if(s.current=f,typeof a=="function"){a(f);return}a&&(a.current=f)},"aria-label":h?i:void 0,children:l===0?r:d[l-1]})})}),Qi=[],Xi=c.div`
  padding-top: var(--inset-panel-header-top);
  display: flex;
  /* Centred, which levels the collapsed dots and chevron on the single-line title. */
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-panel-header);
  min-width: 0;
  /* Wraps so PanelToolbar's full basis starts its own line; the aside never wraps, because the title column absorbs the pressure first. */
  flex-wrap: wrap;
  /* Never shrink, or a short tile's body would overprint the title. */
  flex-shrink: 0;
`,Zi=c.div`
  min-width: 0;
  /* A zero basis, so a long title shrinks beside the aside instead of wrapping it onto a second line; useFittedTitle measures the room this leaves. */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  display: flex;
  align-items: center;
  & > h3 {
    flex: 1 1 auto;
    min-width: 0;
  }
`,Ji=c.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,el=c.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,tl=c.details`
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
  /* Drops the ::details-content box, which otherwise breaks this element's shrink-to-fit sizing. */
  &::details-content {
    display: contents;
  }
  /* Exactly its content wide: the inline aside, or the dots summary once collapsed. */
  flex: 0 0 auto;

  & > summary {
    /* Wide default: no collapsed affordance, the aside just shows inline. */
    display: none;
    align-items: center;
    gap: var(--gap-panel-aside);
    list-style: none;
    cursor: pointer;
    /* Lands the dots on the title's cap band rather than its line box centre. */
    transform: translateY(-1px);
    /* Panel sets no foreground, so the currentColor chevron needs one. */
    color: var(--color-text-dim);
  }
  & > summary {
    ${ge}
  }
  & > summary::-webkit-details-marker {
    display: none;
  }
  & > summary [data-panel-aside-chevron] {
    /* A CSS caret, not an icon, so the header stays out of every widget's SVG queries. Points down closed. */
    flex: 0 0 auto;
    width: 6px;
    height: 6px;
    /* Extra space before the chevron only: the rotated box's corner eats into the gap. */
    margin-left: var(--gap-panel-aside);
    border-right: 1.5px solid currentColor;
    border-bottom: 1.5px solid currentColor;
    /* The rotation leaves the ink centroid 1.4px low; the lift centres it on the dots. */
    transform: translateY(-1.4px) rotate(45deg);
    transition: transform var(--duration-base) var(--ease-standard);
  }
  &[open] > summary [data-panel-aside-chevron] {
    /* Points up when open; the centroid moves above centre, so the lift flips sign. */
    transform: translateY(1.4px) rotate(225deg);
  }

  & > [data-panel-aside-full] {
    /* Wide default: the full aside shows inline whatever the [open] state. */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--gap-panel-aside);
    flex-wrap: wrap;
    min-width: 0;
  }

  ${({$collapsed:e})=>e&&S`
      & > summary {
        display: inline-flex;
      }
      /* Hidden rather than display: none, so useHeaderAsideFit's clone measurement sees it as it sees the inline state. */
      &:not([open]) > [data-panel-aside-full] {
        position: absolute;
        top: 0;
        right: 0;
        visibility: hidden;
        pointer-events: none;
      }
      /* Collapsed and open: floats over the body so its controls do not reflow the panel. */
      &[open] > [data-panel-aside-full] {
        position: absolute;
        top: calc(100% + var(--offset-popover));
        right: 0;
        /* Widget-internal stacking above the header, off the app-global z ladder. */
        z-index: 3;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        flex-wrap: nowrap;
        /* A real floor so a control has room, capped at the panel width. */
        min-width: min(14rem, 90cqw);
        max-width: 90cqw;
        padding: var(--inset-popover);
        background: var(--color-surface-panel);
        border: 1px solid var(--color-border-subtle);
        border-radius: var(--radius-regular);
        box-shadow: var(--shadow-popover-drop)
          rgba(0, 0, 0, 0.35);
      }
    `}
`;function cr({title:e,compactTitle:t,aside:r,toolbar:o,...a}){const s=zi(),i=u.useRef(null),d=u.useRef(null),l=u.useRef(null),h=Ki(i,d,l,typeof e=="string"?e:void 0),[f,g]=u.useState(!1);return u.useEffect(()=>{h||g(!1)},[h]),n.jsxs(Xi,{ref:i,"data-panel-header":"",...a,children:[n.jsxs(Zi,{children:[e!==void 0&&n.jsx(dr,{ref:d,compact:t,children:e}),n.jsx(Ji,{"aria-hidden":"true",children:n.jsx(_e,{children:null})})]}),r!==void 0&&n.jsx(el,{children:n.jsxs(tl,{"data-panel-aside-expand":"",$collapsed:h,open:h?f:!0,onToggle:x=>{h&&g(x.currentTarget.open)},children:[n.jsxs("summary",{"aria-label":s.length===0?"Panel status and controls":`${s.map(x=>`${x.count} ${Ge[x.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(x=>n.jsx(ar,{severity:x.severity,count:x.count},x.severity)),n.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),n.jsx(qi,{value:h?"collapsed":"full",children:n.jsx("div",{"data-panel-aside-full":"",ref:l,children:r})})]})}),o!==void 0&&n.jsx(ur,{children:o})]})}const ur=c.div`
  ${it("panel-toolbar")}
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--gap-control-row);
  padding: var(--inset-panel-toolbar);
  min-width: 0;
  /* Never shrink, or a short tile squeezes the controls away. */
  flex-shrink: 0;
  /* A full basis, so the toolbar always takes its own line in the wrapping header row. */
  flex-basis: 100%;
  width: 100%;
  /* Opaque: the sticky header's scroll glow only masks its top strip, so a tall toolbar would let scrolled rows draw through it. */
  background: var(--color-surface-panel);
`,nl=c.div`
  --gap-related: var(--gap-related-comfortable);
  --gap-section: var(--gap-section-comfortable);
  --bleed-inline: var(--gutter-panel);
  /* The body's side and bottom inset; a lone framed drawing steps this down under a narrow container. */
  --panel-body-gutter: var(--gutter-panel);
  --panel-body-bottom: var(--inset-panel-bottom);

  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  padding-top: var(--inset-panel-top);
  padding-right: var(--panel-body-gutter);
  padding-bottom: var(--panel-body-bottom);
  padding-left: var(--panel-body-gutter);
  /* Body is the scroller, so the inset sits inside the scrolling box and never clips overflow. */
  overflow: auto;
  ${me}
  /* The glow shows scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
  /* Fit-to-size never scrolls, and centres only once measurement says the content fits: Firefox clips safe center while reporting support for it. */
  ${({$fitToSize:e})=>e?"flex: 1; overflow: hidden;":""}
  ${({$loneFrame:e})=>e?`@container (width < ${rl}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${lr}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${pn}] {
           min-height: 0;
         }`:""}
`,rl="25rem";function hr({children:e,fitToSize:t,loneFrame:r,hoverTitle:o,...a}){const i=u.useContext(xt)?.registerScroller,[d,l]=u.useState(null),h=u.useCallback(g=>{i?.(g),l(g)},[i]),f=cn(d);return n.jsx(nl,{ref:h,tabIndex:f,"data-panel-body":"",$fitToSize:t,$loneFrame:r,"data-panel-lone-frame":r?"":void 0,$hoverTitle:o,...a,children:e})}const ol="13rem",al=c.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      max(
        min(${({$min:e})=>e}, 100%),
        ${({$columns:e})=>`calc((100% - ${e-1} * var(--gap-panel-columns)) / ${e})`}
      ),
      1fr
    )
  );
  /* Wider between columns than rows: a column gap has no section title doing the separating. */
  gap: var(--gap-panel-sections) var(--gap-panel-columns);
  /* Natural heights, so a short section beside a tall one does not read as an empty box. */
  align-items: start;
  & > [${so}] {
    grid-column: 1 / -1;
  }
`;function sl({children:e,hoverTitle:t}){const r=u.useRef(null),o=u.useRef(null),a=dl(r,o);return n.jsx(il,{ref:r,$fits:a,"data-panel-fit-body":"",children:n.jsx(ll,{ref:o,$fits:a,$hoverTitle:t,children:e})})}const il=c.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,ll=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Aligned like its box: centring here would push overflowing content up under the header. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
  /* The delay rail band above still reserves its own strip on a hoverTitle
     panel (see PanelProps.hoverTitle), so the box this centres within is
     shorter at the top than the panel actually is, by the band's own height.
     Centred content would read as sitting low by half of it, the same way it
     would if the box below a real header were centred on the whole panel
     instead of the room under that header. The band has no visible header to
     read as the reason, so the shift here is what keeps the figure reading as
     centred on the panel while the box itself stays exactly what fitToSize's
     own docs promise: never clipped, and unaffected while the content does
     not fit.

     The flex centring above absorbs half of any margin change into its own
     free-space split (a flex item's centred position moves by m/2 for a
     margin-top of m, not m), so the full band's height is what actually
     buys the half-band visual shift this needs. */
  ${({$fits:e,$hoverTitle:t})=>e&&t?"margin-top: calc(-1 * var(--panel-rail-band));":""}
  gap: var(--gap-tiny-content);
  min-height: 0;
  /* A query container, so a tiny presentation sizes its headline in cqw against the tile rather than the viewport. */
  container-type: inline-size;
`;function dl(e,t){const[r,o]=u.useState(!0);return u.useLayoutEffect(()=>{const a=e.current,s=t.current;if(!a||!s)return;const i=()=>{o(ul(cl(s),a.clientHeight))};if(i(),typeof ResizeObserver>"u")return;const d=new ResizeObserver(i),l=()=>{d.observe(a),d.observe(s);for(const f of Array.from(s.children))d.observe(f)};l();const h=new MutationObserver(()=>{l(),i()});return h.observe(s,{childList:!0}),()=>{d.disconnect(),h.disconnect()}},[e,t]),r}function cl(e){const t=Array.from(e.children,r=>r.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(r=>r.bottom))-Math.min(...t.map(r=>r.top))}function ul(e,t){return e<=t}const hl=c.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,fl=c.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${me}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,Te=c.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e,$topOffset:t})=>e==="top"?`top: ${t??"0"};`:"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: 44px;
  /* The audit reads the mask depth from the gradient, so the literal height costs it nothing. */
  ${To("panel-scroll-glow")}
  pointer-events: none;
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity var(--duration-base) var(--ease-standard);
  /* A light affordance tint over a fully opaque panel-colour mask; only an opaque mask keeps scrolled content from ghosting through the sticky title. */
  background:
    linear-gradient(
      ${({$position:e})=>e==="top"?"to bottom":"to top"},
      color-mix(
        in srgb,
        color-mix(in srgb, var(--color-surface-panel), white 20%) 55%,
        transparent
      ),
      transparent 40%
    ),
    linear-gradient(
      ${({$position:e})=>e==="top"?"to bottom":"to top"},
      var(--color-surface-panel) 0%,
      var(--color-surface-panel) 27%,
      transparent 50%
    );
  /* Widget-internal stacking, off the app-global z ladder so it never lifts over dashboard chrome. */
  z-index: 1;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,pl=u.forwardRef(function({children:t,...r},o){const a=u.useRef(null),[s,i]=u.useState(null),d=u.useCallback(f=>{a.current=f,i(f)},[]);u.useImperativeHandle(o,()=>a.current);const l=un(s,gr,mr,pr),h=cn(s);return n.jsxs(hl,{...r,children:[n.jsx(fl,{ref:d,tabIndex:h,"data-scroll-area-inner":"",children:t}),n.jsx(Te,{$position:"top",$visible:l.top}),n.jsx(Te,{$position:"bottom",$visible:l.bottom})]})});function gl(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const r=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(r)?r:16)}}}const Xt="14rem",ml=5,vl="45%",xl=`min(${li(1,ml).pxH}px, ${vl})`;function Zt(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const bl=c.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:r})=>e==="inline"?`grid-template-columns: ${Zt(t,r)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${Zt(t,r)};`}

  /* Visual placement only: the sidebar always follows the body in the DOM, so reading and tab order never depend on its side. */
  ${({$side:e})=>e==="start"?"& > [data-panel-sidebar] { order: -1; }":""}

  /* The sidebar gets the rail band when the rail travels with the header, since only the body's scroller holds it. Under the body it is nowhere near the header, so it takes none. */
  ${({$railBand:e,$axis:t,$side:r})=>e&&!(t==="block"&&r==="end")?`& > [data-panel-sidebar] {
           padding-block-start: var(--panel-rail-band);
         }`:""}

  /* Under the body the sidebar follows the body's own bottom inset, so it takes a small top inset rather than the panel's. */
  ${({$axis:e,$side:t})=>e==="block"&&t==="end"?`& > [data-panel-sidebar] > * > [data-scroll-area-inner] {
           padding-top: var(--inset-panel-sidebar-under);
         }`:""}

  /* On the inline axis the sidebar gives back its inset on the edge facing the body, which already pays one. */
  ${({$axis:e,$side:t})=>e==="inline"?`& > [data-panel-sidebar] > * > [data-scroll-area-inner] {
           padding-inline-${t==="start"?"end":"start"}: 0;
         }`:""}
`;function wl({side:e="end",size:t,railBand:r,children:o,...a}){const{ref:s,size:i}=ve({w:1,h:1}),d=gl(t??Xt),l=i.w<=1||d===void 0||i.w>=d*2,h=i.w>=i.h&&l?"inline":"block",f=t??(h==="inline"?Xt:xl);return n.jsx(bl,{ref:s,"data-panel-split":h,$axis:h,$side:e,$size:f,$railBand:r,...a,children:o})}const yl=c(pl)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,$l=c.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function fr({children:e,...t}){return n.jsx($l,{"data-panel-sidebar":"",...t,children:n.jsx(yl,{children:e})})}const pr={top:!1,bottom:!1};function gr(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function mr(e,t){return e.top===t.top&&e.bottom===t.bottom}const jl=c.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function vr({children:e,railBandAbove:t,...r}){const o=u.useContext(xt),a=o?.scroller??null;u.useEffect(()=>{},[o]);const s=un(a,gr,mr,pr);return n.jsxs(jl,{...r,children:[e,n.jsx(Te,{$position:"top",$visible:s.top,$topOffset:t?"var(--panel-rail-band)":void 0}),n.jsx(Te,{$position:"bottom",$visible:s.bottom})]})}function kl(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const r=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!r.has(o.id))]}const _d=["sections","actions"],et=Object.freeze({});function Jt(){return n.jsx(Ke,{segment:"sections",props:et})}function Sl({summary:e}){const t=u.useRef(e.severity),[r,o]=u.useState(0);return u.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(a=>a+1))},[e.severity]),n.jsx(_l,{$pulse:r,children:n.jsx(_e,{tone:e.severity,size:"sm",children:e.label})})}const _l=c.span`
  display: inline-flex;
  ${({$pulse:e})=>e>0&&S`
      @media (prefers-reduced-motion: no-preference) {
        animation: ${e%2===0?"panel-status-pulse":"panel-status-pulse-b"}
          var(--duration-slow) var(--ease-emphasis);
      }
    `}
  @keyframes panel-status-pulse-b {
    0% {
      transform: scale(1);
    }
    35% {
      transform: scale(1.14);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes panel-status-pulse {
    0% {
      transform: scale(1);
    }
    35% {
      transform: scale(1.14);
    }
    100% {
      transform: scale(1);
    }
  }
`,xr=c.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,Rl=c.div`
  position: sticky;
  /* Reach the scroller's true top edge, cancelling the body's own top inset. */
  top: calc(-1 * var(--inset-panel-top));
  z-index: 2;
  /* Cancel the body's inset so the unit spans the full panel width. */
  margin: calc(-1 * var(--inset-panel-top)) calc(-1 * var(--panel-body-gutter))
    0;
  display: flex;
  flex-direction: column;
  /* Never shrink, or a short tile crushes the band and the title. */
  flex-shrink: 0;

  /* The band is this unit's own first row, so the rail frame does not pull up into container padding. */
  & > [data-panel-rail-frame] {
    margin-top: 0;
  }
`;function Cl({render:e}){const{ref:t,size:r}=ve({w:0,h:0});return n.jsx(El,{ref:t,"data-panel-trend":"",children:r.w>0&&r.h>0&&e(r)})}const El=c.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,Al=c.div`
  flex: 1 1 100%;
  min-width: 0;
`,Pl=c(cr)`
  /* Transparent: the panel glow under it is its backing. */
  /* The rail band above is this header's top inset. */
  padding-top: 0;
  /* The one header that reads over scrolled content gets a title a notch brighter than the dim chrome token. */
  & h3 {
    color: color-mix(
      in srgb,
      var(--color-text-dim),
      var(--color-text-primary) 45%
    );
  }
`,Tl=c.div`
  position: absolute;
  top: var(--inset-tiny);
  left: var(--inset-tiny);
  right: var(--inset-tiny);
  /* Above the panel's own content (PanelGlow, trend, footer), local sibling ordering inside this panel's own stacking context. Not app-global chrome, so no named z rung. */
  z-index: 3;
  display: flex;
  align-items: flex-start;
  gap: var(--gap-panel-aside);
  pointer-events: none;
`,Il=c(pe)`
  margin: 0;
  ${hn}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${Pe}:hover &,
  ${Pe}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function Ol(e){let t=null;for(const r of e){const{label:o,tone:a}=ht(r);a===void 0||a==="neutral"||(t===null||kt(a)>kt(t.severity))&&(t={severity:a,label:o})}return t}function en({badges:e}){return n.jsx(n.Fragment,{children:e.map(t=>n.jsx(Ml,{entry:t},t.id))})}function Ml({entry:e}){const{label:t,tone:r}=ht(e);return ot(r===void 0||r==="neutral"?null:{id:e.id,severity:r,label:t}),null}function zl({summary:e,announcement:t}){return n.jsxs(n.Fragment,{children:[n.jsx(se,{text:e.label,focusable:!0,children:n.jsx(Fl,{children:n.jsx(ar,{severity:e.severity})})}),n.jsx(Oe,{visuallyHidden:!0,assertive:!0,children:t})]})}const Fl=c.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,Ll=c.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function Dl(e){return e.hoverTitle?n.jsx(Bl,{...e}):n.jsx(br,{...e,hoverTitleId:void 0})}function Bl(e){const t=u.useId();return n.jsx(br,{...e,hoverTitleId:t})}function br({panelTitle:e,compactTitle:t,panelAside:r,panelBadges:o,panelStatus:a,panelToolbar:s,panelFilter:i,panelFooter:d,panelTrend:l,inactive:h,fitToSize:f,hoverTitle:g,hoverTitleId:x,panelSidebar:m,sidebarSide:v,sidebarSize:b,panelSections:w=!0,sections:k,sectionMinWidth:A=ol,children:T,...j}){const R=Ti(),C=jt("actions"),P=jt("sections"),E=kl(o,R),K=E.length===0?null:E.map(I=>{const{label:U,tone:V,title:kr}=ht(I);return n.jsx(se,{text:kr,focusable:!0,children:n.jsx(_e,{tone:V,report:V===void 0||V==="neutral"?void 0:{id:I.id},children:U})},I.id)}),B=i===void 0?s:n.jsxs(n.Fragment,{children:[s,n.jsx(Al,{children:Vn(i)})]}),W=a??null,z=W!==null&&W!=="none"&&W!=="live"?W:null;ot(z?{id:"stream",severity:Se(z),label:yt(z)??""}:null);const p=Li(),_=p!==null&&E.some(I=>I.id===p.id),$=z===null?null:yt(z),N=_?null:p!==null?n.jsx(Sl,{summary:p}):z===null||$===null?null:n.jsx(_e,{tone:Se(z),size:"sm",children:$}),y=p?.label??$,M=y===null||y===""?"":typeof e=="string"?`${e}: ${y}`:`Status: ${y}`,F=r===void 0&&N===null&&K===null&&!C?void 0:n.jsxs(n.Fragment,{children:[r,C&&n.jsx(Ke,{segment:"actions",props:et}),K,N]}),L=p??Ol(E)??(z===null||$===null?null:{severity:Se(z),label:$}),D=L?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${L.label}`:`Status: ${L.label}`,Z=r===void 0&&L===null&&!C?E.length===0?void 0:n.jsx(en,{badges:E}):n.jsxs(n.Fragment,{children:[r,C&&n.jsx(Ke,{segment:"actions",props:et}),n.jsx(en,{badges:E}),L!==null&&n.jsx(zl,{summary:L,announcement:D})]}),te=h!==void 0,xe=te?[]:u.Children.toArray(k),Be=xe.length>0,yr=T===void 0&&!(w&&P)&&!f&&xe.length===1&&Nl(xe[0]),ne=[];for(const I of xe){const U=!f&&u.isValidElement(I)&&I.props.fill===!0,V=ne.at(-1);!U&&V!==void 0&&!V.fill?V.nodes.push(I):ne.push({fill:U,nodes:[I]})}w&&Be&&!ne.some(I=>!I.fill)&&ne.push({fill:!1,nodes:[]});const $r=w?ne.reduce((I,U,V)=>U.fill?I:V,-1):-1,jr=I=>Math.max(1,I.filter(U=>!(u.isValidElement(U)&&U.props.full===!0)).length),be=[];for(const I of ne){const U=be.length;if(I.fill){be.push(I.nodes[0]);continue}be.push(n.jsxs(al,{$min:A,$columns:jr(I.nodes),children:[I.nodes,U===$r&&n.jsx(Jt,{})]},`sections-${U}`))}const bt=te?n.jsx(io,{reason:h}):Be?n.jsxs(n.Fragment,{children:[T,be]}):T,wt=n.jsxs(hr,{fitToSize:f,loneFrame:yr,hoverTitle:g,children:[n.jsxs(Rl,{"data-panel-sticky-top":"",children:[n.jsx(rr,{tiny:g}),!g&&n.jsx(Pl,{title:e,compactTitle:t,aside:F,toolbar:B})]}),f?n.jsx(sl,{hoverTitle:g,children:bt}):bt,w&&!Be&&!te&&n.jsx(Jt,{})]});return n.jsx(Vi,{children:n.jsxs(Pe,{$railTravels:!0,$hoverTitle:g,...g?{tabIndex:0,role:"group","aria-labelledby":x,"data-tiny-panel":""}:{},...j,children:[n.jsx(vr,{railBandAbove:!0,children:m===void 0||te?wt:n.jsxs(wl,{side:v,size:b,railBand:!0,children:[wt,n.jsx(fr,{children:m})]})}),!te&&l!==void 0&&n.jsx(Cl,{render:l}),!te&&d!==void 0&&n.jsx(xr,{children:d}),g&&n.jsxs(Tl,{"data-panel-hover-title":"",children:[n.jsx(Il,{as:"h3",id:x,children:e}),Z!==void 0&&n.jsx(Ll,{children:Z})]}),n.jsx(Oe,{visuallyHidden:!0,children:g&&D!==void 0?"":M})]})})}function Nl(e){if(!u.isValidElement(e)||e.type!==st||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const r=u.Children.toArray(t).filter(a=>!(u.isValidElement(a)&&a.type===oi));if(r.length!==1)return!1;const[o]=r;if(!u.isValidElement(o))return!1;if(o.type===Qs)return!0;if(o.type!==u.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const Rd=Object.assign(Dl,{Context:ir,Delay:rr,Container:Pe,Header:cr,Toolbar:ur,Footer:xr,Title:dr,Glow:vr,Body:hr,Section:st,Sidebar:fr}),Hl=c.div`
  display: ${({$size:e})=>e==="hero"?"flex":"inline-flex"};
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({$tone:e})=>G[e]};
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
`;function Cd({size:e="inline",tone:t="neutral",...r}){return n.jsx(Hl,{$size:e,$tone:t,...r})}const Ed=c.span`
  font-size: var(--font-size-caption);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-transform: uppercase;
`,wr=240,Wl=8;function Ul(e,t){if(e<=0||t<2)return!1;const r=t*wr+(t-1)*Wl;return e>=r}function Ad({tabs:e,activeId:t,onChange:r,expandWhenRoomy:o=!1,"aria-label":a,"aria-labelledby":s,className:i}){const d=u.useId(),l=u.useMemo(()=>e.map((y,M)=>({...y,id:y.id??`tab-${M}`})),[e]),h=t!==void 0,[f,g]=u.useState(()=>t??l[0]?.id??""),x=h?t:f,m=l.find(y=>y.id===x),v=m&&!m.disabled?m:l.find(y=>!y.disabled)??m??l[0],b=u.useCallback(y=>{h||g(y),r?.(y)},[h,r]),w=u.useMemo(()=>l.filter(y=>!y.disabled),[l]),{ref:k,size:A}=ve({w:0,h:0}),T=o&&Ul(A.w,w.length),j=u.useRef(new Map),R=u.useRef(null),C=u.useRef(null),[P,E]=u.useState(!1),[K,B]=u.useState(null),W=u.useCallback(y=>{R.current=y,B(y)},[]),z=Ls(K),[p,_]=u.useState(null);u.useLayoutEffect(()=>{const y=R.current;if(!y)return;const M=()=>{E(L=>{L||(C.current=y.scrollWidth);const D=C.current;return D==null?!1:D>y.clientWidth})};M();const F=new ResizeObserver(M);return F.observe(y),()=>F.disconnect()},[T,l.length]),u.useLayoutEffect(()=>{const y=R.current,M=v?j.current.get(v.id):void 0;if(!y||!M){_(null);return}const F=()=>{const D=j.current.get(v?.id??"");D&&_(Z=>Z&&Z.left===D.offsetLeft&&Z.width===D.offsetWidth?Z:{left:D.offsetLeft,width:D.offsetWidth})};F();const L=new ResizeObserver(F);return L.observe(y),L.observe(M),()=>L.disconnect()},[v?.id,l.length,T]);const $=u.useCallback((y,M)=>{const F=l.length;for(let L=1;L<=F;L++){const D=l[((y+M*L)%F+F)%F];if(!(!D||D.disabled)){b(D.id),j.current.get(D.id)?.focus();return}}},[l,b]),N=u.useCallback(y=>{const M=l.findIndex(F=>F.id===v?.id);if(!(M<0))switch(y.key){case"ArrowRight":case"ArrowDown":y.preventDefault(),$(M,1);break;case"ArrowLeft":case"ArrowUp":y.preventDefault(),$(M,-1);break;case"Home":y.preventDefault(),$(-1,1);break;case"End":y.preventDefault(),$(l.length,-1);break}},[l,v?.id,$]);return T?n.jsx(tn,{ref:k,"data-tabs-root":"",className:i,children:n.jsx(eo,{minColWidth:`${wr}px`,align:"start",gap:"related-comfortable",children:w.map(y=>n.jsxs(st,{children:[n.jsxs(lo,{as:"h3",$rule:!0,children:[y.label,y.indicator&&n.jsxs(n.Fragment,{children:[n.jsx(nn,{"aria-hidden":"true"}),n.jsx(pe,{children:", needs attention"})]})]}),y.content]},y.id))})}):n.jsxs(tn,{ref:k,"data-tabs-root":"",className:i,children:[n.jsxs(Gl,{children:[n.jsx(Kl,{ref:W,children:n.jsxs(ql,{role:"tablist","aria-label":a,"aria-labelledby":s,children:[p&&n.jsx(Vl,{"aria-hidden":"true",style:{left:p.left,width:p.width}}),l.map(y=>{const M=y.id===v?.id;return n.jsxs(Yl,{ref:F=>{F?j.current.set(y.id,F):j.current.delete(y.id)},role:"tab",type:"button",id:`${d}${y.id}-tab`,"aria-selected":M,"aria-controls":`${d}${y.id}-panel`,"aria-describedby":y.indicator?`${d}${y.id}-attention`:void 0,tabIndex:M?0:-1,disabled:y.disabled,$active:M,onClick:()=>b(y.id),onKeyDown:N,$compact:P,children:[y.label,y.indicator&&n.jsxs(n.Fragment,{children:[n.jsx(nn,{"aria-hidden":"true"}),n.jsx("span",{id:`${d}${y.id}-attention`,hidden:!0,children:"Needs attention"})]})]},y.id)})]})}),n.jsx(Dt,{$position:"left",$visible:z.left}),n.jsx(Dt,{$position:"right",$visible:z.right})]}),v&&n.jsx(Ql,{role:"tabpanel",id:`${d}${v.id}-panel`,"aria-labelledby":`${d}${v.id}-tab`,children:v.content})]})}const tn=c.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-tabs-panel);
  /* Fills the panel and constrains children, so a flex:1 tab body can scroll. */
  flex: 1;
  min-height: 0;
`,Gl=c.div`
  position: relative;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Kl=c.div`
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
`,ql=c.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  gap: var(--gap-tab);
  background: var(--color-surface-sunken);
  border-radius: var(--radius-pill);
  padding: var(--inset-tab-track);
  flex-wrap: nowrap;
`,Vl=c.span`
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
`,nn=c.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-left: var(--gap-trailing-mark);
  vertical-align: middle;
  border-radius: var(--radius-circle);
  background: var(--color-warn-mark);
`,Yl=c.button`
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

  @media (hover: hover) {
    &:hover:not(:disabled) {
      color: var(--color-text-primary);
    }
  }

  /* Present but inert: legible enough to say what is missing, and the cursor says it will not respond. */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  ${me}

  @media (pointer: coarse) {
    min-height: 44px;
    /* Compact still applies on touch: a tab scrolled half out of view is a smaller target, not a bigger one. */
    ${({$compact:e})=>e?"padding: var(--inset-tab-compact-touch);":"padding: var(--inset-control-touch);"}
  }
`,Ql=c.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,Pd=u.forwardRef(function({pressed:t=!1,tone:r="go",size:o="md",type:a="button","aria-pressed":s,...i},d){return n.jsx(to,{ref:d,type:a,tone:t?r:void 0,size:o,pressed:t,"aria-pressed":s??t,...i})});export{Ss as $,yn as A,_e as B,si as C,xd as D,Tn as E,Ds as F,Nt as G,dt as H,qa as I,Hs as J,ra as K,Pt as L,yd as M,Jt as N,ht as O,Rd as P,Un as Q,Cd as R,pl as S,wr as T,Q as U,_n as V,ya as W,ud as X,Rn as Y,ft as Z,Gn as _,bd as a,go as a0,vo as a1,li as a2,mo as a3,_t as a4,wd as a5,qo as a6,Me as a7,fd as a8,Re as a9,Ba as aa,As as ab,Rs as ac,Sd as ad,Ks as ae,zi as af,Li as ag,Sa as ah,ct as ai,Go as aj,gd as ak,Ye as al,cd as am,Et as an,Ls as ao,Dt as ap,Qs as b,$d as c,Ed as d,hd as e,ld as f,dd as g,Ad as h,Pd as i,xo as j,hs as k,le as l,Ta as m,zn as n,md as o,vd as p,_d as q,qs as r,Ul as s,oi as t,ve as u,jd as v,Mn as w,kd as x,ii as y,pd as z};
