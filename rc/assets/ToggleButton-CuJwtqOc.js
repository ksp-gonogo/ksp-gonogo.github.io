import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import u,{css as S,keyframes as cn}from"./ext-styled-components-Br73TgY3.js";import{k as Ar,t as Pr,d as M,T as K,w as fe,l as ot,u as Or,m as Ir,p as Tr,r as dn,n as Mr,o as un,j as ee,v as zr,x as Fr,A as Lr,y as Dr,i as Br,N as Nr,z as Hr,R as Wr,b as Ur,c as qe,e as Gr,g as Kr,f as St}from"./streamStatusWord-BoFViXZM.js";import{r as d}from"./ext-react-RRA14VTW.js";import{E as hn,aB as at,ai as q,aA as st,V as ge,a5 as Te,a6 as fn,a3 as se,N as qr,M as Vr,aq as Yr,ae as _t,aC as Qr,az as Xr,aD as Zr,as as pn,a4 as me,Z as Me,h as Jr,v as eo,I as to,a2 as no,F as ro,l as oo,a1 as ve,_ as gn,aE as mn,a0 as vn,ab as ao,d as so}from"./vesselMark-B2BB4fDy.js";import{t as it,s as _e,x as io,y as lo,m as co,f as lt,n as xn,N as uo,S as ct,z as bn,v as Rt,A as Ve,B as ho,I as fo,E as Ct,e as po}from"./contributionsRead-W_6kokPF.js";import{b4 as wn,l as yn,c7 as ie,aK as ye,cb as $n,aL as go,a_ as mo,aO as oe,cv as Et,b1 as $e}from"./view-clock-formula-DRrEkS6Q.js";import"./ksp-enum-names-BjZ3fgw3.js";import{z as vo}from"./screen-B5Z_APSM.js";import{I as xo}from"./index-CS5c-edb.js";import"./lagrange-DVtSWGiO.js";import{R as bo}from"./use-transmissions-dCTZymMM.js";function wo(e,t){if(!t)return!0;const n=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(n)||e.key.toLowerCase().includes(n)}function yo(e,t,n=wo){return e.filter(o=>n(o,t))}function $o(e,t="Other"){const n=new Map;for(const o of e){const a=o.group??t;let s=n.get(a);s||(s=[],n.set(a,s)),s.push(o)}return[...n.entries()].sort(([o],[a])=>o.localeCompare(a))}function jo(e){return e.flatMap(([,t])=>t)}function At(e,t,n){return n===0?-1:Math.max(0,Math.min(e+t,n-1))}function ko({id:e,groups:t,flatOptions:n,activeIndex:o,selectedKey:a,getOptionId:s,onHoverIndex:i,onSelectKey:c,renderItem:l,emptyLabel:h="No matches","aria-label":f,placement:p="below"}){return r.jsx(So,{role:"listbox",id:e,"aria-label":f,$placement:p,onMouseDown:v=>v.preventDefault(),children:n.length===0?r.jsx(hn,{layout:"fill",children:h}):t.map(([v,g],x)=>r.jsxs(_o,{role:"group","aria-labelledby":`${e}-group-${x}`,children:[r.jsx(Ro,{id:`${e}-group-${x}`,"aria-hidden":"true",children:v}),g.map(b=>{const $=n.indexOf(b),j=$===o;return r.jsx(Eo,{id:s(b.key),role:"option","aria-selected":j,$active:j,$selected:b.key===a,onPointerDown:C=>{C.preventDefault(),c(b.key)},onMouseEnter:()=>i($),children:l?l(b):b.label??b.key},b.key)})]},v))})}const So=u.div`
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
`,_o=u.div``,Ro=u.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-raised);
`;function Co(e,t){return e?"background: var(--color-surface-panel);":t?Ar("go"):"background: transparent;"}const Eo=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-menu-item);
  cursor: pointer;
  ${({$active:e,$selected:t})=>Co(e,t)}
  /* Focus stays on the input, so the highlighted option carries the focus colour as an inset bar. */
  box-shadow: ${({$active:e})=>e?"inset 3px 0 0 var(--color-focus)":"none"};

  &:hover {
    background: var(--color-surface-panel);
  }
`;function vc({tone:e,children:t,live:n=!1,pulse:o,...a}){const s=n?{role:"status","aria-live":"polite"}:{};return r.jsxs(Ao,{"data-tone":e,...s,...a,children:[r.jsx(Oo,{"data-tone":e,$pulse:o,"aria-hidden":"true"}),r.jsx(Io,{children:t})]})}const Ao=u.div`
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

  border-color: ${({"data-tone":e})=>Pr(e)};
`,Po=cn`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,Oo=u.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  flex-shrink: 0;

  background: ${({"data-tone":e})=>M[e]};

  /* A looping pulse needs its own reduced-motion guard; the 1s/2s periods encode connection state. */
  ${({$pulse:e})=>e?S`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${Po} ${e==="fast"?"1s":"2s"}
              var(--ease-emphasis) infinite;
          }
        `:""}
`,Io=u.span`
  color: var(--color-text-primary);
  line-height: var(--line-height-body);
`;function xc({checked:e,onChange:t,label:n,disabled:o,id:a,"aria-label":s}){return r.jsxs(To,{$disabled:o,children:[r.jsx(Mo,{type:"checkbox",id:a,checked:e,disabled:o,onChange:i=>t(i.target.checked),"aria-label":n?void 0:s}),r.jsx(jn,{$checked:e,$disabled:o,children:r.jsx(zo,{$checked:e,$disabled:o})}),n&&r.jsx(Fo,{children:n})]})}const To=u.label`
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
`,jn=u.div`
  width: 28px;
  height: 14px;
  /* --radius-pill keeps the stadium shape through a height change. */
  border-radius: var(--radius-pill);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-surface-raised)":e?"var(--color-go-mark)":"var(--color-surface-raised)"};
  border: 1px solid ${({$checked:e,$disabled:t})=>t?"var(--color-border-strong)":e?"var(--color-go-mark)":"var(--color-border-strong)"};
  position: relative;
  flex-shrink: 0;
  transition: background var(--duration-base), border-color var(--duration-base);
`,Mo=u.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:focus-visible + ${jn} {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,zo=u.div`
  position: absolute;
  /* Measured inside the border: the track is border-box, so its 1px border leaves a 26 by 12 box, and 2px on every side centres the 8px thumb at either end. */
  top: 2px;
  left: ${({$checked:e})=>e?"16px":"2px"};
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-text-faint)":e?"var(--color-accent-fg)":"var(--color-text-faint)"};
  transition: left var(--duration-base), background var(--duration-base);
`,Fo=u.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,dt=e=>S`
  --fit-box: ${e};
`,Lo=e=>S`
  --fit-mask: ${e};
`;function Re({tone:e,size:t="md",live:n=!1,report:o,children:a,...s}){const i=e===void 0||e==="neutral"?void 0:e,c=o?.label??(typeof a=="string"?a:"");it(o?{id:o.id,severity:i??"go",label:c}:null);const l=n?{role:"status","aria-live":"polite"}:{};return r.jsx(Ho,{$severity:i,$size:t,...l,...s,children:a})}const Do=S`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,Bo={go:S`
    background: transparent;
    border-color: ${M.go};
    color: ${K.go};
  `,info:S`
    background: transparent;
    border-color: ${M.info};
    color: ${K.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${M.info} 40%, transparent);
  `,caution:S`
    background: transparent;
    border-color: ${M.caution};
    color: ${K.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${M.caution} 45%, transparent);
  `,warn:S`
    background: transparent;
    border-color: ${M.warn};
    color: ${K.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${M.warn} 55%, transparent);
  `,nogo:S`
    background: transparent;
    border-color: ${M.nogo};
    color: ${K.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${M.nogo} 65%, transparent);
  `,offline:S`
    background: transparent;
    border-color: ${M.offline};
    color: ${K.offline};
  `},No={sm:S`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:S`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},Ho=u.span`
  display: inline-block;
  /* Sized by its own text, never stretched to a taller flex sibling. */
  align-self: center;
  ${dt("badge")}
  border: 1px solid;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;

  /* Pill-shaped only for a real severity; a decorative kind chip keeps the rounded rect. */
  border-radius: ${({$severity:e})=>e===void 0?"var(--radius-regular)":"var(--radius-pill)"};

  ${({$size:e})=>No[e]}
  ${({$severity:e})=>e===void 0?Do:Bo[e]}
`,Ye=q.held.domSize,Qe=q.modelled.domSize,Wo=S`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Ye} + 0.14em);
  }
`,Uo=S`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Qe} + 0.14em);
  }
`;function Go(e){return S`
    &::after {
      content: "";
      display: inline-block;
      width: calc(${q[e].hollowDomSize} + 0.14em);
    }
  `}function kn(e,t=!1){return t?Go(e):e==="current"?null:e==="modelled"?Uo:Wo}const Sn=u.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Ye};
  height: ${Ye};
  background: ${q.held.color};
`,Ko=u.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Qe};
  height: ${Qe};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${q.modelled.color};
`,ut=e=>S`
  position: absolute;
  right: 0;
  top: 0;
  width: ${q[e].hollowDomSize};
  height: ${q[e].hollowDomSize};
`,qo=u.span`
  ${ut("current")}
  border: ${at} solid ${q.current.color};
  border-radius: var(--radius-circle);
`,Vo=u.span`
  ${ut("held")}
  border: ${at} solid ${q.held.color};
`,Yo=u.span`
  ${ut("modelled")}
  --stroke: ${at};
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
`,Qo={current:qo,held:Vo,modelled:Yo};function _n({kind:e,elsewhere:t=!1}){if(e==="current"&&!t)return null;const n=t?Qo[e]:e==="modelled"?Ko:Sn;return r.jsx(n,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e,"data-elsewhere":t?"":void 0})}const Rn=u.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e,$elsewhere:t})=>kn(e??"held",t)}
`;function ht({caption:e,kind:t="held",elsewhere:n=!1,children:o,...a}){const{anchor:s,tip:i}=st(e);return r.jsxs(Rn,{$kind:t,$elsewhere:n,...a,...s,children:[o,r.jsx(_n,{kind:t,elsewhere:n}),e!==null&&r.jsxs(ge,{"data-unit-currency":"",children:[", ",e]}),i]})}function ft(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function Xo(e={}){return ft(t=>fe(t,e))}const Zo=.01;function Jo({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const a=Math.abs(t(n)-t(o));return(e?Math.min(a,1-a):a)<=Zo}}}function Ce(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(a=>!n.readsAsOne(e,a))}const ea={},ta={byKey:new Map,unaddressed:void 0,separate:!1};function Pt(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function na(e,t){if(e.separate!==t.separate||!Pt(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!Pt(o,t.byKey.get(n)))return!1;return!0}function ra(e,t,n,o){const a=new Map;e!==void 0&&a.set(ot(e),n);for(const[s,i]of Object.entries(t??{}))i!==void 0&&a.set(Tr(s),i);return{byKey:a,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function oa(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function aa(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function sa(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,i)=>s.depth-i.depth);let a=!1;for(const s of o)s.resettle(n)&&(a=!0);if(a)for(const s of t)s()}}}function ia(e){const t=new Map,n=new Map,o=new Set,a=e?.root??sa();let s=ta;const i=l=>{let h;for(const f of l){const p=f.position;p!==void 0&&(h===void 0||p.base>h.base)&&(h=p)}return h?.rung},c={root:a,depth:e===void 0?0:e.depth+1,hold(l,h,f){const p=t.get(l);if(f===void 0)p!==void 0&&(p.delete(h),p.size===0&&t.delete(l));else{if(aa(p?.get(h),f))return;p===void 0?t.set(l,new Map([[h,f]])):p.set(h,f)}e===void 0?a.sweep(l):e.hold(l,h,f)},settled:l=>n.get(l),readsAsOneFigure:l=>o.has(l),setPolicy(l){if(!na(s,l)){s=l;for(const h of t.keys())a.sweep(h)}},resettle(l){const h=[...t.get(l)?.values()??[]],f=e?.settled(l),p=s.byKey.get(l)??s.unaddressed??ea,v=p.format??f?.format??i(h),g=p.as??f?.as,x=p.decimals??(s.separate?Mr(h,{format:v,as:g}):f?.decimals),b=v===void 0&&g===void 0&&x===void 0?void 0:{...v!==void 0&&{format:v},...g!==void 0&&{as:g},...x!==void 0&&{decimals:x}},$=s.separate&&dn(h,{format:v,as:g,decimals:x}),j=$!==o.has(l);return $?o.add(l):o.delete(l),oa(n.get(l),b)?j:(b===void 0?n.delete(l):n.set(l,b),!0)},attach(){a.family.add(c)},detach(){a.family.delete(c)}};return a.family.add(c),c}const pt={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},pe=d.createContext(pt);function la(){return d.useContext(pe)!==pt}function ca({children:e,of:t,pins:n,format:o,as:a,decimals:s,separate:i=!1}){const c=d.useContext(pe),[l]=d.useState(()=>ia(c===pt?void 0:c));return d.useLayoutEffect(()=>(l.attach(),()=>l.detach()),[l]),d.useLayoutEffect(()=>{l.setPolicy(ra(t,n,{format:o,as:a,decimals:s},i))},[l,t,n,o,a,s,i]),r.jsx(pe.Provider,{value:l,children:e})}function Xe(e,t={}){const n=d.useContext(pe),o=d.useId(),a=wn(e),s=e?.unit,c=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||a===null?void 0:ot(s),l=c===void 0||a===null||s===void 0||Or(s)===void 0?void 0:Ir(a,s),h=l?.base,f=l?.rung;return d.useLayoutEffect(()=>{if(!(c===void 0||a===null||s===void 0))return n.hold(c,o,{reading:a,unit:s,...h!==void 0&&f!==void 0&&{position:{base:h,rung:f}}}),()=>n.hold(c,o,void 0)},[n,o,c,a,s,h,f]),d.useSyncExternalStore(n.root.subscribe,()=>c===void 0?void 0:n.settled(c),()=>{})}function bc(e,t={}){const n=d.useContext(pe),a=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||wn(e)===null||e===null||e===void 0?void 0:ot(e.unit);return d.useSyncExternalStore(n.root.subscribe,()=>a===void 0?!1:n.readsAsOneFigure(a),()=>!1)}const da=Lr,ua={sci:Vr,rep:qr},Cn=u.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,ha=u.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?S`
          position: relative;
          ${kn(e,t)}
        `:""}
`,fa=u.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,pa=u(ge)`
  user-select: none;
`,En=u(ge)`
  user-select: none;
`,ga=" ";function ma(e,t,n,o){if(t===void 0)return null;const a=v=>un(v.magnitude,v.unit,{...n,format:o}).value,s=(v,g)=>a(g.minus(v)),i=dn([t.lo,t.hi],{...n,format:o});if(!Ce(e,[t.lo,t.hi],ft(a)))return null;const c=s(t.lo,t.value),l=s(t.value,t.hi),h=v=>/^[-+\u2212]?[0.,\s]*$/.test(v);if(!i&&h(c)&&h(l))return null;const f=a(t.value)===a(e),p={...n,format:o};return{oneFigure:i,plusMinus:!i&&f&&c===l?l:null,lo:a(t.lo),hi:a(t.hi),loSaid:ee(t.lo,p),hiSaid:ee(t.hi,p),kind:t.kind}}function va(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function He({token:e,className:t,spaced:n}){const o=zr(e,Fr(e));if(o==="")return null;const a=Dr(o),s=ua[o],i=da.has(o),c=a!==void 0;return r.jsxs(r.Fragment,{children:[n&&!i?ga:null,r.jsx(se,{text:a,announce:!1,children:r.jsxs(Cn,{$attached:i,$icon:s!==void 0,className:t,"data-unit":e,children:[s?r.jsx(s,{size:"1em"}):c?r.jsx("span",{"aria-hidden":"true",children:o}):o,c&&r.jsxs(En,{"data-unit-word":"",children:[" ",a]})]})})]})}function Q({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:a,marked:s,elsewhere:i,...c}){const l=Te(e,{drawsReckoning:a}),h=s!=null&&!l.held&&l.shown!=null?{...l,held:!0,mark:s.kind,caption:s.caption}:l,{shown:f,held:p,mark:v,band:g}=h,x=i!=null&&i!==""&&f!=null,b=v??(x?"current":null),$=x?[h.caption,i].filter(Boolean).join("; "):h.caption,j=Xe(f,c),C=la(),O=o===!0&&C,k=j===void 0?c:{...j,...c},R=un(f?.magnitude,f?.unit,k),E=f==null||g===null||!p?null:ma(f,yn(g,f.unit),k,R.rung),{anchor:P,tip:A}=st(va($,E));return e!==void 0||t===void 0?r.jsxs(ha,{className:n,$mark:b,$elsewhere:x,...fn(h),...P,children:[R.value,!O&&r.jsx(He,{token:R.symbol,spaced:!0}),E!==null&&r.jsxs(fa,{"data-unit-band":"",children:[E.oneFigure?r.jsxs(r.Fragment,{children:[" (",r.jsx("span",{"aria-hidden":"true",children:"~"}),r.jsx(En,{"data-unit-word":"",children:"approximately "}),E.lo]}):E.plusMinus===null?` (${E.lo} to ${E.hi}`:` ± ${E.plusMinus}`,!O&&r.jsx(He,{token:R.symbol,spaced:!0}),E.plusMinus===null?")":null]}),b!==null&&r.jsx(_n,{kind:b,elsewhere:x}),$!==null&&r.jsxs(pa,{"data-unit-currency":"",children:[", ",$]}),A]}):typeof t!="string"?r.jsx(Cn,{$attached:!1,$icon:!1,className:n,children:t}):r.jsx(He,{token:t,className:n,spaced:!1})}function gt(e){const t=Yr(e.held);if(t===void 0)return{label:e.label,tone:e.tone,title:e.title};const n=Br(t);return{label:n,tone:_e(t),title:e.title??`${e.label}: ${n}`}}function X(e,t){return fe({magnitude:e,unit:t})}function xa(e,t){const{limit:n,actual:o,unit:a}=t;if(n==null||o==null)return null;switch(e){case ye.LimitReached:{const s=ba(t.quantity),i=`${X(o,a)} of ${X(n,a)}`;return t.facilityName?`the ${t.facilityName} holds ${i} ${s}`:`it holds ${i} ${s}`}case ye.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${X(o,a)} of ${X(n,a)}`;case ye.InsufficientFunds:return`it costs ${X(o,a)} and funds are ${X(n,a)}`;case ye.InsufficientScience:return`it costs ${X(o,a)} and science is ${X(n,a)}`;default:return null}}function ba(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function Ot(e){return e&&$n(e)?.sentence||null}function wa(e){const t=e?.trim().replace(/\.$/,"");return t||null}function mt(e){return An(e,"refused")}function wc(e){return An(e,"unavailable")}function An(e,t){const n=ie(e),o=(e.breach?xa(e.errorCode,e.breach):null)??wa(e.detail)??Ot(e.reason)??Ot(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function Pn(e){const n=ie(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":ya(mt({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function ya(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function On(e){return`${ie(e)||e.command||"The command"}: no reply. May have run.`}function $a(){const e=lo();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const ze=io($a),yc=ze.Context;function $c({children:e}){return r.jsx(ze.Provider,{children:r.jsx(ja,{children:e})})}function ja({children:e}){const t=ze.useStore();return r.jsx(bo.Provider,{value:t,children:e})}const vt=ze.useStore,ka=()=>()=>{},Sa=[],It=()=>Sa;function _a(){const e=vt();return d.useSyncExternalStore(e?e.subscribe:ka,e?e.getActiveHandles:It,e?e.getActiveHandles:It)}const de=new WeakMap,Ze=new WeakMap;function Tt(e){for(const t of Ze.get(e)??[])t()}function Ra(e){return de.set(e,(de.get(e)??0)+1),Tt(e),()=>{de.set(e,(de.get(e)??1)-1),Tt(e)}}function jc(){const e=vt();return d.useSyncExternalStore(t=>{if(!e)return()=>{};const n=Ze.get(e)??new Set;return Ze.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(de.get(e)??0)>0,()=>!1)}function kc({size:e=12,thickness:t=2,color:n="var(--color-accent-fg)","aria-label":o="Loading",...a}){return r.jsx(Ea,{...a,role:"status","aria-label":o,$size:e,$thickness:t,$color:n})}const Ca=cn`
  to { transform: rotate(360deg); }
`,Ea=u.span`
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
    animation: ${Ca} 700ms linear infinite;
  }
`;function Mt(e,t){return t?.state!=="held"?e:{...t,value:e}}function Ee(e){return e.kind==="continuous"?"ribbon":"dot"}function Aa(e){return e.delivery==="acked"}function Pa(e){return e.direction==="command"?"outbound":"inbound"}function In(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function Fe(e){return`${e.direction}/${e.kind}/${e.delivery}`}const Oa={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function xt(e){return Oa[Fe(e)]??null}const zt=new Set;function Tn(e,t){const n=Fe(e);if(zt.has(n))return;zt.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;go()?mo.error(o):console.error(o)}const Mn=16,Ft=Mn/2,Ia=5.5,Ta=2,Ma=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function zn(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function za(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/Ta)),Math.max(2,Math.round(o)))}function Fa(e,t,n){if(e.length===0)return"";const o=zn(e,t,n);if(!(o>0))return`M0.00,${Ft.toFixed(2)}`;const a=za(e,t,o),s=[];for(let i=0;i<=a;i++){const c=Math.min(i/a*o,o),l=Math.min(Math.round(c/n*t),e.length-1),h=Ma(e[e.length-1-l]),f=(i%2===0?-1:1)*h*Ia;s.push(`${c.toFixed(2)},${(Ft+f).toFixed(2)}`)}return`M${s.join(" L")}`}const Fn=.05,La=.02,Ae=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],Le=100,ue=30,Da=1.5,W=2,Ba=4,J=ue-W-Ba,Y=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(Le-n*2),je=e=>W+(1-Math.max(0,Math.min(1,e)))*J,Ln=e=>e==="inline"?Da:0;function Sc(e="inline"){const t=Ln(e);return(Le-t*2)/3}function Dn({tags:e,who:t}){return Tn(e,t),r.jsx("g",{"data-rail-unrepresented":Fe(e),"data-rail-entry":t})}function re(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function Lt(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(l=>l.age>=t);if(n===-1)return[];const o=e[n-1],a=e[n],s=a.age-o.age||1,i=(t-o.age)/s,c=o.value+i*(a.value-o.value);return[{age:t,value:c},...e.slice(n)]}function Dt(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(h=>h.age>t),a=e.slice(0,o),s=e[o],i=a[a.length-1];if(!i)return[{age:t,value:s.value}];const c=s.age-i.age||1,l=(t-i.age)/c;return[...a,{age:t,value:i.value+l*(s.value-i.value)}]}const Na=.25;function Bt(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>=o.age)return o.value;for(let a=1;a<e.length;a++){const s=e[a];if(t<=s.age){const i=e[a-1],c=(t-i.age)/(s.age-i.age||1);return i.value+c*(s.value-i.value)}}return o.value}function Ha({stream:e,span:t,index:n,padX:o,oneT:a,twoT:s}){const c=`var(${Ae[n%Ae.length]})`,l=d.useId(),h=`cds-ramp-${l}-${n}`,f=`cds-fill-${l}-${n}`,p=`cds-tail-${l}-${n}`,v=xt(e.tags);if(v!=="continuous-strip")return v===null?r.jsx(Dn,{tags:e.tags,who:e.id}):null;const g=Aa(e.tags),b=(g?e.inTransit:Dt(e.inTransit,a)).map(_=>({x:Y(_.age,t,o),y:je(_.value)}));if(b.length===0)return null;const j=(g?[]:Dt(Lt(e.inTransit,a),a*(1+Na))).map(_=>({x:Y(_.age,t,o),y:je(_.value)})),C=j.length>1&&j[j.length-1].x>j[0].x,O=`${re(b)} L${b[b.length-1].x.toFixed(2)},${(W+J).toFixed(2)} L${b[0].x.toFixed(2)},${(W+J).toFixed(2)} Z`,k=g?Lt(e.echo,s):[],R=k.map(_=>({x:Y(_.age,t,o),y:je(_.value)})),E=k.map(_=>({x:Y(_.age,t,o),y:je(Bt(e.inTransit,_.age)??_.value)})),P=k.findIndex(_=>{const m=Bt(e.inTransit,_.age);return m!==null&&Math.abs(_.value-m)>La}),A=P!==-1,U=A?R.slice(0,P+1):R,N=A?R.slice(P):[],H=A?E.slice(P):[],F=!A||P>0;return r.jsxs("g",{"data-stream-group":e.id,"data-return-leg":g,children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"1",y2:"0",children:[r.jsx("stop",{offset:"0",stopColor:c,stopOpacity:"0.10"}),r.jsx("stop",{offset:"1",stopColor:c,stopOpacity:"0.40"})]}),r.jsxs("linearGradient",{id:f,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0",stopColor:c,stopOpacity:"0.22"}),r.jsx("stop",{offset:"1",stopColor:c,stopOpacity:"0"})]}),C&&r.jsxs("linearGradient",{id:p,gradientUnits:"userSpaceOnUse",x1:j[0].x,y1:"0",x2:j[j.length-1].x,y2:"0",children:[r.jsx("stop",{offset:"0",stopColor:c,stopOpacity:"0.40"}),r.jsx("stop",{offset:"1",stopColor:c,stopOpacity:"0"})]})]}),r.jsx("path",{"data-role":"area",d:O,fill:`url(#${f})`,stroke:"none"}),r.jsx("path",{"data-role":"commanded","data-stream":e.id,d:re(b),fill:"none",stroke:`url(#${h})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),C&&r.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:re(j),fill:"none",stroke:`url(#${p})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),U.length>0&&F&&r.jsx("path",{"data-role":"echo","data-stream":e.id,d:re(U),fill:"none",stroke:c,strokeWidth:"0.8",strokeLinecap:"round"}),A&&r.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:re(N),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),A&&r.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:re(H),fill:"none",stroke:c,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]})}function Wa({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${d.useId()}`,o=e.tags,a=xt(o);if(a!=="continuous-strip")return a===null?r.jsx(Dn,{tags:o,who:e.id}):null;const s=(Le-t*2)/3,i=e.amplitudes,c=e.spanSamples??i.length,l=Fa(i,c,s);if(l==="")return null;const h=Math.max(zn(i,c,s),1),f=`var(${In(o)})`,p=Pa(o)==="outbound";return r.jsxs("g",{"data-ribbon-group":e.id,transform:`translate(${t} ${W}) scale(1 ${J/Mn})`,children:[r.jsx("defs",{children:r.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:p?0:h,y1:"0",x2:p?h:0,y2:"0",children:[r.jsx("stop",{offset:"0",stopColor:f,stopOpacity:"0.9"}),r.jsx("stop",{offset:"1",stopColor:f,stopOpacity:"0.1"})]})}),r.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:l,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function Ua({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:a}){const s=`cds-divfade-${d.useId()}`,i=a?.state==="held",c=i?Te(a??null).caption:null,{anchor:l,tip:h}=st(c),f=[...e,...t].find(k=>k.oneWaySeconds!==null),p=f?.oneWaySeconds??null;if(!f||p===null||p<=0)return null;const v=p>=Fn;if(!v&&t.length===0)return null;const g=3*p,x=p,b=2*p,$=Ln(o),j=Y(x,g,$),C=Y(b,g,$),O=e.every(k=>k.inTransit.length===0&&k.echo.length===0)&&t.every(k=>k.amplitudes.length===0);return r.jsxs(Ga,{"data-oneway":p,"data-variant":o,$variant:o,...l,children:[r.jsxs(Ka,{$variant:o,$quiet:O,role:"img","aria-label":Xr(n,c),...Qr(c),viewBox:`0 0 ${Le} ${ue}`,preserveAspectRatio:"none",children:[r.jsx("defs",{children:r.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:W,x2:"0",y2:W+J,children:[r.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),r.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(v?e:[]).map((k,R)=>r.jsx(Ha,{stream:k,span:g,index:R,padX:$,oneT:x,twoT:b},k.id)),t.map(k=>r.jsx(Wa,{ribbon:k,padX:$},k.id)),r.jsx("line",{"data-divider":"t",x1:j,x2:j,y1:W,y2:W+J,stroke:`url(#${s})`,strokeWidth:"0.4"}),r.jsx("line",{"data-divider":"2t",x1:C,x2:C,y1:W,y2:W+J,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&r.jsxs("g",{"data-role":"hover-labels",children:[r.jsxs("text",{x:j,y:W-.4,textAnchor:"middle",fontSize:"2",children:[fe(oe("s",p),{decimals:1}),i&&r.jsx(_t,{size:1.2})]}),r.jsxs("text",{x:C,y:W-.4,textAnchor:"middle",fontSize:"2",children:[fe(oe("s",2*p),{decimals:1}),i&&r.jsx(_t,{size:1.2})]}),r.jsx("text",{x:Y(p/2,g,$),y:ue-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),r.jsx("text",{x:Y(1.5*p,g,$),y:ue-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),r.jsx("text",{x:Y(2.5*p,g,$),y:ue-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&r.jsxs(r.Fragment,{children:[r.jsxs(qa,{"aria-hidden":"true",children:[r.jsxs("span",{children:["outgoing ",r.jsx("b",{children:"0"})]}),r.jsxs("span",{children:["echo"," ",r.jsx("b",{children:r.jsx(Q,{value:Mt(oe("s",p),a),decimals:1})})]}),r.jsxs("span",{children:["confirmed"," ",r.jsx("b",{children:r.jsx(Q,{value:Mt(oe("s",2*p),a),decimals:1})})]})]}),r.jsxs(Va,{"aria-hidden":"true",children:[(v?e:[]).map((k,R)=>r.jsxs("span",{children:[r.jsx("i",{style:{background:`var(${Ae[R%Ae.length]})`}}),k.label]},k.id)),t.map(k=>r.jsxs("span",{"data-role":"legend-ribbon",children:[r.jsx("i",{style:{background:`var(${In(k.tags)})`}}),k.label]},k.id)),v&&e.length>0&&r.jsxs("span",{"data-role":"legend-deviation",children:[r.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),h]})}const Ga=u.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,Ka=u.svg`
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
`,qa=u.div`
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
`,Va=u.div`
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
`,Ya=u.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function Bn({observed:e,modelled:t,write:n}){if(t==null)return null;if(n===void 0){const o=t;return Ce(e,o,Xo())?r.jsx(Nt,{children:r.jsx(Q,{value:o})}):null}return Ce(e,t,ft(n))?r.jsx(Nt,{children:n(t)}):null}function Nt({children:e}){return r.jsx(Ya,{"data-modelled-alongside":"",children:r.jsx(ht,{"data-held":"",kind:"modelled",caption:Zr,children:e})})}function _c({value:e}){return r.jsxs(r.Fragment,{children:[r.jsx(Q,{value:e}),r.jsx(Bn,{observed:e.value,modelled:pn(e)})]})}function Nn({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,a=b=>Hr(typeof b=="number"?b:b.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,i=pn(s);if(s?.value!==void 0&&i!==void 0)return r.jsxs(r.Fragment,{children:[a(s.value),r.jsx(Bn,{observed:s.value,modelled:i,write:a})]});const c=Te(o,{drawsReckoning:!0}),{shown:l,held:h,mark:f,caption:p}=c,v=typeof e=="number"?e:l;if(v==null)return Nr;const g=a(v),x=fn({...c,shown:v});return h?r.jsx(ht,{...x,kind:f??"held",caption:p,children:g}):r.jsx("span",{"data-figure":x["data-figure"],children:g})}function xe(e){const t=d.useRef(null),[n,o]=d.useState(e),[a,s]=d.useState(null);return d.useEffect(()=>{t.current!==a&&s(t.current)}),d.useEffect(()=>{if(!a||typeof ResizeObserver>"u")return;const i=new ResizeObserver(c=>{for(const l of c)l.contentRect.width>0&&l.contentRect.height>0&&o({w:Math.floor(l.contentRect.width),h:Math.floor(l.contentRect.height)})});return i.observe(a),()=>i.disconnect()},[a]),{ref:t,size:n}}function bt(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const wt={"in-transit":.18,"awaiting-reply":.5,due:.62,overdue:.82,lost:.95};function Qa(e){const t=e.reachEtaSeconds,n=Xa(e);if(t===null||n===null)return wt[e.predictedPhase];const o=n-t;return Math.max(0,Math.min(1,o/(3*n)))}function Xa(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function Za(e){return e.map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:Qa(t),glyph:t.glyph??bt(t.label||t.command),...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function Rc({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||e<=0?"none":n||vo({oneWaySeconds:oe("s",e)})==="live"?"badge":t?"strip":"none"}const Ja={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},Je={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function es(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Ja[e.phase]}const De=new Set(["overdue","lost"]),ts=180,ns=96;function Hn(e){return fe(oe("s",Math.max(0,e)))}function rs(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const os=1;function Wn(e){const t=xo(),n=d.useRef(t);n.current=t;const[o,a]=d.useState(e),s=d.useRef({eta:e,ut:We(t)});return d.useEffect(()=>{const i=s.current.eta;(i===null!=(e===null)||i!==null&&e!==null&&Math.abs(e-i)>=os)&&(s.current={eta:e,ut:We(n.current)},a(e))},[e]),d.useEffect(()=>{const i=setInterval(()=>{const{eta:c,ut:l}=s.current;if(c===null)return;const h=We(n.current);l===void 0||h===void 0||a(Math.max(0,c-(h-l)))},1e3);return()=>clearInterval(i)},[]),o}function We(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function as({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":a="In-flight commands",variant:s="inline",onDismiss:i}){const{ref:c,size:l}=xe({w:320,h:0});if(s==="rail")return e.length===0?null:r.jsx(cs,{items:e,"aria-label":a});if(s==="expanded")return e.length===0?null:r.jsx(ps,{items:e,"aria-label":a,onDismiss:i});const h=n!=="auto"?n:l.w>=ts?"full":l.w>=ns?"compact":"badge";return e.length===0?null:h==="badge"?r.jsx(ds,{ref:c,items:e,mode:t,"aria-label":a}):r.jsx(Gn,{ref:c,role:"list","aria-label":a,"data-mode":t,"data-density":h,$row:o==="row",children:e.map(f=>r.jsx(us,{item:f,$compact:h==="compact"},f.id))})}const Ue=100,Ht=16,ss=-4,is=9,ls=.22;function cs({items:e,"aria-label":t}){const n=d.useId(),o=`${e.length} in flight`;return r.jsxs(hs,{role:"img","aria-label":`${t}: ${o}`,viewBox:`0 0 ${Ue} ${Ht}`,preserveAspectRatio:"none",children:[r.jsx("defs",{children:e.map((a,s)=>{const i=De.has(a.phase)?M.warn:"var(--color-accent-fg)",l=Math.max(0,Math.min(1,a.progress??wt[a.phase]))*Ue;return r.jsxs("radialGradient",{id:`${n}-${s}`,gradientUnits:"userSpaceOnUse",cx:l,cy:ss,r:is,children:[r.jsx("stop",{offset:"0",stopColor:i,stopOpacity:ls}),r.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0"})]},a.id)})}),e.map((a,s)=>r.jsx("rect",{"data-role":"glow","data-phase":a.phase,x:"0",y:"0",width:Ue,height:Ht,fill:`url(#${n}-${s})`},a.id))]})}const ds=function({ref:t,items:n,mode:o,"aria-label":a}){const s=Wn(rs(n)),i=n.some(l=>De.has(l.phase)),c=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${Hn(s)}`;return r.jsx(se,{text:n.map(l=>l.label).join(`
`),focusable:!0,children:r.jsx(Gn,{ref:t,role:"group","aria-label":`${a}: ${c}`,"data-mode":o,"data-density":"badge",$row:!1,children:r.jsxs(Kn,{$phase:i?"overdue":"in-transit",children:[r.jsx(qn,{"aria-hidden":"true",$pulse:!i,children:"↑"}),r.jsxs(Vn,{children:[n.length,s!==null&&r.jsxs(r.Fragment,{children:[" · ",r.jsx(Nn,{value:Math.max(0,s)})]})]})]})})})};function us({item:e,$compact:t}){const n=Wn(e.etaSeconds),o=De.has(e.phase),a=n===null?`${e.label}, ${Je[e.phase]}`:`${e.label}, ${Hn(n)}`;return r.jsxs(Kn,{$phase:e.phase,role:"listitem",...t?{"aria-label":a,title:a}:{},children:[r.jsx(qn,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:es(e)}),!t&&r.jsx(js,{children:e.label}),r.jsx(Vn,{children:n===null?Je[e.phase]:r.jsx(Nn,{value:Math.max(0,n)})})]})}const hs=u.svg`
  display: block;
  width: 100%;
  height: 16px;
`,Un=54,he=5,yt=3,Be=Un-8-he,ae=60,fs={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:M.warn,lost:M.warn};function ps({items:e,"aria-label":t,onDismiss:n}){const{ref:o,size:a}=xe({w:320,h:Un}),i=a.w>=ae?a.w:a.h,c=Math.max(1,Math.floor((i-6)/(Be+yt))),h=e.length>c?e.slice(0,c-1):e,f=e.length-h.length;return r.jsx(ms,{ref:o,children:r.jsxs(vs,{role:"list","aria-label":t,children:[h.map(p=>r.jsx(gs,{item:p,onDismiss:n},p.id)),f>0&&r.jsxs(ys,{role:"listitem","aria-label":`${f} more in flight`,children:["+",f]})]})})}function gs({item:e,onDismiss:t}){const n=e.glyph??bt(e.label),o=fs[e.phase],a=Math.max(0,Math.min(1,e.progress??wt[e.phase])),s=De.has(e.phase)&&!!t,i=`${e.label}, ${Je[e.phase]}`;return r.jsxs(xs,{role:"listitem","aria-label":i,"data-phase":e.phase,style:{color:o},children:[r.jsx(se,{text:s?`Dismiss ${e.label}`:i,announce:!1,children:r.jsxs(bs,{as:s?"button":"div",...s?{type:"button",onClick:()=>t?.(e.id),"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[r.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&r.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),r.jsx(ws,{children:r.jsx("span",{className:"fill",style:{"--fill-ratio":a}})})]})}const ms=u.div.attrs({role:"group"})`
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
    ${Be}px + ${he}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
`,vs=u.div`
  display: flex;
  flex-direction: column;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${yt}px;
  width: 100%;
  height: 100%;

  @container (min-width: ${ae}px) {
    flex-direction: row;
  }
`,xs=u.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @container (min-width: ${ae}px) {
    flex-direction: column;
  }
`,bs=u.div`
  --s: ${Be}px;
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
`,ws=u.div`
  --s: ${Be}px;
  position: relative;
  flex: 0 0 ${he}px;
  width: ${he}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${ae}px) {
    width: var(--s);
    height: ${he}px;
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
`,ys=u.span`
  align-self: center;
  flex: 0 0 auto;
  padding: 0 ${yt}px;
  font-size: var(--font-size-compact);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-muted);
`,Gn=u.div`
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
`,$s={"in-transit":S`
    color: var(--color-text-primary);
  `,"awaiting-reply":S`
    color: var(--color-text-muted);
  `,due:S`
    color: var(--color-text-muted);
  `,overdue:S`
    color: ${K.warn};
  `,lost:S`
    color: ${K.warn};
  `},Kn=u.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>$s[e]}
`,qn=u.span`
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
`,js=u.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Vn=u.span`
  flex: 0 0 auto;
`;function ks({handle:e,handles:t,"aria-label":n,mode:o,density:a,orientation:s,variant:i="inline"}){const c=t??(e?[e]:[]),l=c.length===1?c[0]:null,h=l?xt(l.tags):null;if(l&&h===null)return r.jsx(Ss,{tags:l.tags,who:l["aria-label"]});if(l&&h!=="in-flight-row"){const g=l,x=g.effectiveDelaySeconds;return x===null||x<=0?null:r.jsx(Ua,{streams:g.streams??[],ribbons:g.ribbons??[],delayReading:g.delayReading,"aria-label":n??g["aria-label"],variant:i})}const f=Za(c.flatMap(g=>g.inFlight)),v=c.some(g=>g.dismiss)?g=>c.find(x=>x.inFlight.some(b=>b.id===g))?.dismiss?.(g):void 0;return r.jsx(as,{items:f,"aria-label":n,mode:o,density:a,orientation:s,variant:i,onDismiss:v})}function Ss({tags:e,who:t}){return Tn(e,t??"unnamed handle"),r.jsx("span",{hidden:!0,"data-rail-unrepresented":Fe(e)})}function Yn(e){const n=ie(e)||e.command||"The command",o=e.code===void 0?void 0:$n(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function Qn(e){return`${ie(e)||e.command||"The command"}: never sent. Safe to re-send.`}const _s='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Rs(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),a=n[o+1]??n[o-1];if(a&&a!==e){a.focus();return}const s=t.closest("[data-panel-rail-frame]")?.parentElement?.querySelector("[data-panel-body]");if(!s)return;const i=s.querySelector(_s);if(i){i.focus();return}s.hasAttribute("tabindex")||s.setAttribute("tabindex","-1"),s.focus()}const Cs={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed"},Es={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command"};function As(e,t){return e.kind==="refused"?mt(e.entries[t]):e.kind==="found"?Pn(e.entries[t]):e.kind==="failed"?Yn(e.entries[t]):e.kind==="undelivered"?Qn(e.entries[t]):On(e.entries[t])}function Ps(e){return e.entries.map((t,n)=>{const o=ie(t);return{id:t.id,subject:o||t.command||"",sentence:As(e,n),dismissLabel:`Dismiss ${o||Es[e.kind]}`,tags:t.tags}})}function le(e){const{kind:t,onDismiss:n,live:o=!0}=e,a=e["aria-label"]??Cs[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const i=Ps(e).map(c=>r.jsxs(Ts,{role:o?void 0:"listitem",$tone:s,children:[Ee(c.tags)==="ribbon"?r.jsx(zs,{$tone:s,children:c.subject}):r.jsx(Ms,{"aria-hidden":"true",$tone:s,children:bt(c.subject)}),r.jsx(Fs,{children:c.sentence}),n&&r.jsx(Ls,{type:"button","data-dismiss":"",onClick:l=>{Rs(l.currentTarget),n(c.id)},"aria-label":c.dismissLabel,children:"✕"})]},c.id));return o?r.jsx(Is,{forwardedAs:"div","aria-label":a,"data-command-list":"",additionsOnly:!0,children:i}):r.jsx(Os,{role:"list","aria-label":a,"data-command-list":"",children:i})}const Xn=S`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,Os=u.div`
  ${Xn}
`,Is=u(Me)`
  ${Xn}
  &:empty {
    margin: 0;
  }
`,Ts=u.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>M[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${M[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,Ms=u.span`
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  min-width: 34px;
  padding: var(--inset-glyph);
  align-self: stretch;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: ${({$tone:e})=>K[e]};
  border: 1px solid ${({$tone:e})=>M[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${M[e]} 14%, var(--color-surface-raised))`};
`,zs=u.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>K[e]};
`,Fs=u.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,Ls=u.button`
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
  ${me}
`,Ds="is no longer available";function Cc({keys:e,value:t,onChange:n,clearable:o=!1,placeholder:a="Search...",subjectNoun:s="value",id:i,"aria-label":c}){const[l,h]=d.useState(""),[f,p]=d.useState(!1),[v,g]=d.useState(-1),x=d.useRef(null),b=d.useRef(null),$=d.useId(),j=d.useId(),C=d.useId(),O=w=>`${j}-${w}`,k=e.find(w=>w.key===t),R=t!==null&&t!==""&&k===void 0&&e.length>0,E=d.useMemo(()=>yo(e,l),[e,l]),P=d.useMemo(()=>$o(E),[E]),A=d.useMemo(()=>jo(P),[P]),U=d.useCallback(()=>{p(!0),h(""),g(-1)},[]),N=d.useCallback(()=>{p(!1),h(""),g(-1)},[]),H=d.useCallback(w=>{n(w),N()},[n,N]),F=w=>{if(!f){(w.key==="Enter"||w.key==="ArrowDown")&&U();return}switch(w.key){case"Escape":w.stopPropagation(),N();break;case"ArrowDown":w.preventDefault(),g(I=>At(I,1,A.length));break;case"ArrowUp":w.preventDefault(),g(I=>At(I,-1,A.length));break;case"Enter":{const I=l!=="",y=v>=0?A[v]:I?A[0]:void 0;y&&H(y.key);break}}};d.useEffect(()=>{if(!f)return;const w=I=>{x.current?.contains(I.target)||N()};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[f,N]);const _=f?l:k?.label??t??"",m=f&&v>=0?A[v]:void 0;return r.jsxs(Bs,{ref:x,children:[r.jsx(Ns,{ref:b,id:i,"aria-label":c,value:_,placeholder:t?void 0:a,$hasValue:!!t&&!f,$retired:R&&!f,"aria-invalid":R&&!f?!0:void 0,"aria-describedby":R&&!f?C:void 0,onFocus:U,onBlur:N,onChange:w=>{h(w.target.value),g(-1)},onKeyDown:F,role:"combobox","aria-expanded":f,"aria-controls":$,"aria-autocomplete":"list","aria-activedescendant":m?O(m.key):void 0}),R&&!f&&r.jsx(Ws,{id:C,children:`This ${s} ${Ds}. Pick another.`}),o&&t&&!f&&r.jsx(Hs,{type:"button","aria-label":`Clear ${s}`,onClick:()=>{n(null),N()},children:"×"}),f&&r.jsx(ko,{id:$,groups:P,flatOptions:A,activeIndex:v,selectedKey:t,getOptionId:O,onHoverIndex:g,onSelectKey:H,"aria-label":c??"Data keys",renderItem:w=>r.jsxs(r.Fragment,{children:[r.jsx(Us,{children:w.label??w.key}),w.unit&&r.jsx(Gs,{children:w.unit})]})})]})}const Bs=u.div`
  position: relative;
`,Ns=u.input`
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
`,Hs=u.button`
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
`,Ws=u.div`
  color: var(--color-nogo-text);
  font-size: var(--font-size-compact);
  margin-top: var(--gap-caption);
`,Us=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
`,Gs=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  margin-left: var(--gap-trailing-mark);
`,Wt={left:!1,right:!1};function Ks(e){const[t,n]=d.useState(Wt),o=d.useRef(Wt);return d.useEffect(()=>{if(!e)return;const a=()=>{const c=e.scrollLeft>1,l=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===c&&o.current.right===l||(o.current={left:c,right:l},n(o.current))};a(),e.addEventListener("scroll",a,{passive:!0});const s=typeof ResizeObserver>"u"?null:new ResizeObserver(a);s?.observe(e);for(const c of Array.from(e.children))s?.observe(c);const i=new MutationObserver(()=>{for(const c of Array.from(e.children))s?.observe(c);a()});return i.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",a),s?.disconnect(),i.disconnect()}},[e]),t}const Ut=u.div`
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
`;function qs({label:e,selected:t,count:n,onToggle:o}){return r.jsxs(Vs,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[r.jsx("span",{children:e}),n!==void 0&&r.jsx(Ys,{children:n})]})}const Vs=u.button`
  ${dt("chip")}
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

  ${me}
`,Ys=u.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function Qs({value:e,onChange:t,clearLabel:n="Clear search",className:o,...a}){const s=d.useRef(null);return r.jsxs(Xs,{className:o,children:[r.jsx(Zs,{...a,ref:s,type:"search",value:e,onChange:i=>t(i.target.value)}),e!==""&&r.jsx(Js,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:r.jsx(Jr,{size:"var(--icon-size-control)"})})]})}const Xs=u.div`
  position: relative;
  display: flex;
  align-items: center;
`,Zs=u(eo)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,Js=u(to)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function ei({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=co(e),a=[...new Set(o)],[s,i]=d.useState(()=>new Set),[c,l]=d.useState(""),h=d.useId(),f=x=>{i(b=>{const $=new Set(b);return $.has(x)?$.delete(x):$.add(x),$})},p=[...s,c].filter(x=>x.length>0).map(x=>x.toLowerCase()),v=r.jsxs(lt,{gap:"related-packed",children:[a.length>0&&r.jsx(no,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:a.map(x=>r.jsx(qs,{label:x,selected:s.has(x),onToggle:()=>f(x)},x))}),r.jsxs(ro,{children:[r.jsx(oo,{htmlFor:h,children:t}),r.jsx(Qs,{id:h,value:c,placeholder:n,onChange:l})]})]}),g={matches:x=>{const b=x.toLowerCase();return p.every($=>b.includes($))},active:p.length>0};return Zn.set(g,v),g}const Zn=new WeakMap;function Jn(e){return Zn.get(e)??null}function ti({filter:e,children:t,fill:n=!1}){return r.jsxs(lt,{gap:"related-dense",fill:n,children:[Jn(e),t]})}function Ec({rows:e,segment:t="filters",emptyLabel:n="Nothing matches the filter"}){const o=ei({segment:t}),a=e.filter(s=>o.matches(s.searchText));return r.jsx(ti,{filter:o,children:a.length>0?r.jsx(lt,{gap:"related",children:a.map(s=>r.jsx("div",{children:s.node},s.id))}):r.jsx(hn,{children:n})})}const ni=24,ri=96;function oi({children:e,padded:t,caption:n,footer:o,strip:a,...s}){const i=a!=null&&a!==!1;return r.jsxs(ai,{$padded:t&&!i,$stacked:i,...s,children:[i?r.jsxs(r.Fragment,{children:[r.jsx(si,{$padded:t,children:e}),r.jsx(ii,{"data-framed-display-strip":"",children:a})]}):e,n!=null&&r.jsx(er,{children:n}),o!=null&&r.jsx(li,{children:o})]})}const ai=u.div`
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
`,si=u.div`
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
`,ii=u.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${ni}px;
  max-height: ${ri}px;
  min-width: 0;
  overflow: hidden;
`,er=u.div`
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
`,li=u(er)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,Gt={width:160,height:72},ci=2.5,di=420;function Ac({width:e,height:t,plotHasData:n}){return!n&&e>=Gt.width&&t>=Gt.height?"center":e>=di&&e>=t*ci?"beside":"inline"}const ui={overlay:S`
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
  `};function hi({placement:e,role:t="status",children:n,...o}){return r.jsx(fi,{$placement:e,role:t,...o,children:n})}const fi=u.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${Wr.regular};
  pointer-events: none;

  ${({$placement:e})=>ui[e]}
`,pi=32,gi=25,Kt=8;function mi(e,t){return{pxW:e*pi+(e-1)*Kt,pxH:t*gi+(t-1)*Kt}}const vi="8px";function tr({percent:e,tone:t,fillColor:n,trackHeld:o=!1,fillHeld:a=!1,children:s,...i}){return r.jsxs(xi,{"data-track-held":o?"":void 0,...i,children:[e!==null&&r.jsx(wi,{$tone:t,$fillColor:n,$held:a,"data-fill-held":a?"":void 0,style:{width:`${e}%`}}),o&&r.jsx(bi,{"data-track-hatch":"",style:{left:`${e??0}%`}}),s]})}const xi=u.div`
  width: 100%;
  border-radius: var(--radius-pill);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  overflow: hidden;
  /* Positioned for the fill only: this overflow rounds the fill's ends and would clip any mark drawn over it. */
  position: relative;
  height: ${vi};
`,bi=u.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(
    -45deg,
    ${M.warn} 0 1px,
    transparent 1px 4px
  );
  opacity: 0.55;
  pointer-events: none;
`,wi=u.div`
  height: 100%;
  border-radius: var(--radius-pill);
  transition: width var(--duration-slow) var(--ease-standard);
  /* A held reading dims the fill, not the hue and not the whole bar, so a label beside it stays readable. */
  ${({$held:e})=>e?"opacity: 0.55;":""}
  background: ${({$tone:e,$fillColor:t})=>t??M[e]};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function Pc({label:e,value:t,capacity:n,format:o,tone:a="neutral",fillColor:s,valueLabel:i,valueLabelNode:c,layout:l="stacked",hideLabel:h=!1,statement:f=!1,...p}){const v=qt(t),g=qt(n),x=yi(v.figure,n===void 0?void 0:g.figure);if(x===null||!Number.isFinite(x))return h?null:r.jsx(sr,{layout:l,label:e,display:r.jsx(Ur,{}),...p,children:r.jsx(tr,{percent:null,tone:a,"aria-hidden":"true"})});const b=Math.min(1,Math.max(0,x)),$={label:e,layout:l,hideLabel:h,statement:f,pct:Math.round(b*100),tone:a,fillColor:s,trackHeld:g.reading?.state==="held"&&!Et(g.figure),fillHeld:v.reading?.state==="held"&&!Et(v.figure),...p},j=tt(1,et(g.reading,g.figure,g.figure));if(n!==void 0)return r.jsx(ca,{of:v.figure?.unit,format:o,children:r.jsx(ji,{...$,value:t,capacity:n,shown:v,held:g,endBounds:j,at:b,valueLabel:i,valueLabelNode:c})});const C=tt(b,et(v.reading,v.figure,null));return r.jsx(ar,{...$,bounds:C,endBounds:j,display:c??(i===void 0?r.jsx(Q,{value:t,format:o}):r.jsx(rr,{caption:Pe(t),children:i})),spoken:or(i===void 0?ee(v.figure,{format:o}):nr(i,Pe(t)),C,j)})}function Pe(e){const{held:t,caption:n}=Te(e??null);return t?n:null}function nr(e,t){return t===null?e:`${e}, ${t}`}function rr({caption:e,children:t}){return e===null?r.jsx(r.Fragment,{children:t}):r.jsx(ht,{caption:e,children:t})}function qt(e){return typeof e!="object"||e===null||!("state"in e)?{figure:e??null,reading:null}:{figure:e.value??null,reading:e}}function yi(e,t){return e===null||t===null||t!==void 0&&!t.isPositive()?null:(t===void 0?e:e.dividedBy(t)).magnitude}function et(e,t,n){if(e===null||e.reckoning.status!=="available"||t===null)return null;const o=yn(e.reckoning.band,t.unit);if(!o)return null;const a={loSaid:o.lo,hiSaid:o.hi,kind:o.kind};return n===null?{lo:$e(o.lo,0),hi:$e(o.hi,0),...a}:n.isPositive()?{lo:$e(o.lo.dividedBy(n),0),hi:$e(o.hi.dividedBy(n),0),...a}:null}function tt(e,t){return t===null?null:Ce(e,[t.lo,t.hi],Jo())?t:null}function or(e,t,n,o){const a=(i,c)=>{const l=ee(i.loSaid,o),h=ee(i.hiSaid,o);return`${c}with bands at ${l} and ${h}`},s=[t===null?null:a(t,""),n===null?null:a(n,"capacity ")].filter(i=>i!==null);return s.length===0?e:`${e}, ${s.join(", ")}`}function $i(e){if(!Number.isFinite(e))return 0;const t=Math.min(1,Math.max(0,e));return Math.round(t*1e4)/100}function ke(e){const t=$i(e),n=t<=0?0:t>=100?-2:-1;return{style:{left:`${t}%`,transform:`translateX(${n}px)`}}}function ar({label:e,layout:t,hideLabel:n,statement:o,pct:a,tone:s,fillColor:i,trackHeld:c,fillHeld:l,display:h,spoken:f,bounds:p,endBounds:v,...g}){return r.jsxs(sr,{layout:t,label:e,display:h,hideHead:n,statement:o,...g,children:[r.jsx(tr,{percent:a,tone:s,fillColor:i,trackHeld:c,fillHeld:l,role:"meter","aria-label":e,"aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":f}),(p!==null||v!==null)&&r.jsxs(Ei,{"aria-hidden":"true",children:[p!==null&&r.jsxs(r.Fragment,{children:[r.jsx(Se,{"data-bound":"lo",...ke(p.lo)}),r.jsx(Se,{"data-bound":"hi",...ke(p.hi)})]}),v!==null&&r.jsxs(r.Fragment,{children:[r.jsx(Se,{"data-end-bound":"lo",...ke(v.lo)}),r.jsx(Se,{"data-end-bound":"hi",...ke(v.hi)})]})]})]})}function sr({layout:e,label:t,display:n,hideHead:o=!1,statement:a=!1,children:s,...i}){return o?r.jsxs(Ge,{$row:!1,...i,children:[r.jsx(Ke,{$row:!1,children:s}),a&&r.jsx(Ci,{"data-meter-part":"statement",children:n})]}):e==="row"?r.jsxs(Ge,{$row:!0,"data-meter-row":"",...i,children:[r.jsx(Yt,{"data-meter-part":"label",children:t}),r.jsx(Ke,{$row:!0,"data-meter-part":"bar",children:s}),r.jsx(Qt,{$row:!0,"data-meter-part":"figure",children:n})]}):r.jsxs(Ge,{$row:!1,...i,children:[r.jsxs(Ri,{children:[r.jsx(Yt,{children:t}),r.jsx(Qt,{$row:!1,children:n})]}),r.jsx(Ke,{$row:!1,children:s})]})}function ji({value:e,capacity:t,shown:n,held:o,at:a,valueLabel:s,valueLabelNode:i,...c}){const l=s===void 0,h=Xe(l?n.figure:void 0),f=Xe(l?o.figure:void 0),p=h??f??{},v=Pe(e)??Pe(t),g=i??(s!==void 0?r.jsx(rr,{caption:v,children:s}):c.layout==="row"?r.jsxs(Ai,{$marked:c.fillHeld||c.trackHeld,children:[r.jsx(Q,{value:e,hideUnitInGroup:!0})," / ",r.jsx(Q,{value:t}),(c.fillHeld||c.trackHeld)&&r.jsx(Sn,{"aria-hidden":"true","data-held-mark":""})]}):r.jsxs(r.Fragment,{children:[r.jsx(Q,{value:e})," / ",r.jsx(Q,{value:t})]})),x=s===void 0?`${ee(n.figure,p)} of ${ee(o.figure,p)}`:nr(s,v),b=tt(a,et(n.reading,n.figure,o.figure));return r.jsx(ar,{...c,display:g,spoken:or(x,b,c.endBounds,p),bounds:b})}const nt=48;function Oc({children:e,...t}){const n=d.useRef(null);return d.useLayoutEffect(()=>{const o=n.current;if(!o||typeof ResizeObserver>"u")return;const a=()=>{o.clientWidth!==0&&o.toggleAttribute("data-figures-below",!ki(o))};let s=0;const i=()=>{cancelAnimationFrame(s),s=requestAnimationFrame(a)},c=new ResizeObserver(i),l=()=>{c.disconnect(),c.observe(o);for(const f of ir(o))c.observe(f)},h=new MutationObserver(l);return h.observe(o,{childList:!0,subtree:!0}),l(),a(),()=>{cancelAnimationFrame(s),c.disconnect(),h.disconnect()}},[]),r.jsx(_i,{ref:n,...t,children:e})}const Ic=u.div.attrs({"data-meter-row-group":""})`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  row-gap: var(--gap-meter-rows);
  min-width: 0;

  & > * {
    grid-column: 1 / -1;
    min-width: 0;
  }
`;function ir(e){return Array.from(e.querySelectorAll(':scope > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row] > [data-meter-part="figure"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="figure"]'))}function ki(e){const t=ir(e);if(t.length===0)return!0;let n=0,o=0;for(const l of t)l.dataset.meterPart==="label"?n=Math.max(n,Si(l)):o=Math.max(o,l.scrollWidth);const a=getComputedStyle(e),s=l=>Number.parseFloat(l)||0,i=s(a.columnGap),c=e.clientWidth-s(a.paddingLeft)-s(a.paddingRight);return n+i+nt+i+o<=c}function Si(e){const t=e.style.whiteSpace;e.style.whiteSpace="nowrap";const n=e.scrollWidth;return e.style.whiteSpace=t,n}const _i=u.div`
  display: grid;
  grid-template-columns:
    minmax(min-content, max-content)
    minmax(${nt}px, 1fr)
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
      minmax(${nt}px, 1fr);
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
`,Vt="1px",Ge=u.div`
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
`,Ri=u.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--gap-label-value);
  min-width: 0;
  /* The value may drop to its own line at narrow widths rather than crushing the label. */
  flex-wrap: wrap;
`,Yt=u.span`
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
`,Qt=u.span`
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
`,Ci=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ei=u.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,Ke=u.div`
  position: relative;
  ${({$row:e})=>e?S`
          flex: 1 1 28px;
          min-width: 28px;
        `:""}
`,Ai=u(Rn)`
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
`,Se=u.div`
  position: absolute;
  top: ${Vt};
  bottom: ${Vt};
  width: 2px;
  background: var(--color-text-primary);
  /* Inset and outset, so the mark keeps an edge against a light or saturated fill on either side of its end. */
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 0.55),
    inset 0 0 0 0.5px rgb(0 0 0 / 0.35);
  opacity: 0.62;
  pointer-events: none;
`;function Pi(e){if(Ee(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return t===null||t<=0?!1:n>0||t>=Fn&&o>0}return e.inFlight.length>0}function lr({tiny:e}={}){const t=_a(),n=vt();d.useEffect(()=>n?Ra(n):void 0,[n]);const o=t.filter(Pi),a=t.flatMap(m=>(m.refusals??[]).map(w=>({...w,tags:m.tags}))),s=t.flatMap(m=>(m.losses??[]).map(w=>({...w,tags:m.tags}))),i=t.flatMap(m=>(m.founds??[]).map(w=>({...w,tags:m.tags}))),c=t.flatMap(m=>(m.undelivered??[]).map(w=>({...w,tags:m.tags}))),l=t.flatMap(m=>(m.failures??[]).map(w=>({...w,tags:m.tags}))),h=a.length+c.length+l.length,f=o.length>0||h>0||s.length>0||i.length>0,[p,v]=d.useState(!1),[g,x]=d.useState(!1),[b,$]=d.useState(!1),j=p||g&&!b;d.useEffect(()=>{f||(v(!1),x(!1),$(!1))},[f]);const C=d.useId(),O=[...o.filter(m=>Ee(m.tags)==="ribbon"),...o.filter(m=>Ee(m.tags)!=="ribbon")],R=t.some(m=>m.dismiss&&(m.refusals?.length??0)>0)?m=>t.find(w=>w.refusals?.some(I=>I.id===m))?.dismiss?.(m):void 0,P=t.some(m=>m.dismiss&&(m.losses?.length??0)>0)?m=>t.find(w=>w.losses?.some(I=>I.id===m))?.dismiss?.(m):void 0,U=t.some(m=>m.dismiss&&(m.undelivered?.length??0)>0)?m=>t.find(w=>w.undelivered?.some(I=>I.id===m))?.dismiss?.(m):void 0,H=t.some(m=>m.dismiss&&(m.failures?.length??0)>0)?m=>t.find(w=>w.failures?.some(I=>I.id===m))?.dismiss?.(m):void 0,_=t.some(m=>m.dismiss&&(m.founds?.length??0)>0)?m=>t.find(w=>w.founds?.some(I=>I.id===m))?.dismiss?.(m):void 0;return r.jsxs(Oi,{"data-panel-rail-frame":"",$tiny:e,$hasContent:f,children:[t.length>0&&r.jsxs(Me,{visuallyHidden:!0,additionsOnly:!0,children:[a.map(m=>r.jsx("span",{children:mt(m)},`refusal:${m.id}`)),s.map(m=>r.jsx("span",{children:On(m)},`loss:${m.id}`)),c.map(m=>r.jsx("span",{children:Qn(m)},`undelivered:${m.id}`)),l.map(m=>r.jsx("span",{children:Yn(m)},`failure:${m.id}`)),i.map(m=>r.jsx("span",{children:Pn(m)},`found:${m.id}`))]}),f?r.jsxs(Ti,{"data-panel-rail":"","data-grown":j,"data-pinned":p,"data-suppress-hover":b,onMouseEnter:()=>{$(!1),x(!0)},onMouseLeave:()=>x(!1),onKeyDown:m=>{m.key==="Escape"&&p&&(m.stopPropagation(),v(!1),$(!0))},children:[r.jsx(Mi,{type:"button","aria-expanded":p,"aria-controls":C,"aria-label":"Signal-delay detail",onClick:()=>{v(m=>{const w=!m;return w||$(!0),w})},children:r.jsx(Di,{"aria-hidden":"true",hidden:!j,children:"▲"})}),r.jsxs(zi,{id:C,"data-panel-rail-detail":"",children:[O.map(m=>r.jsx(ks,{handle:m,variant:j?"expanded":"rail","aria-label":m["aria-label"]??(j?"Delay detail":void 0)},m.id)),!j&&(h>0||s.length>0||i.length>0)&&r.jsxs(Fi,{children:[h>0&&r.jsx(Xt,{children:h===1?"1 command failed":`${h} commands failed`}),s.length>0&&r.jsx(Xt,{children:s.length===1?"1 command unconfirmed":`${s.length} commands unconfirmed`}),i.length>0&&r.jsx(Li,{children:i.length===1?"1 unconfirmed command answered":`${i.length} unconfirmed commands answered`})]})]})]}):null,j&&a.length>0&&r.jsx(le,{kind:"refused",entries:a,onDismiss:R,live:!1}),j&&s.length>0&&r.jsx(le,{kind:"lost",entries:s,onDismiss:P,live:!1}),j&&c.length>0&&r.jsx(le,{kind:"undelivered",entries:c,onDismiss:U,live:!1}),j&&l.length>0&&r.jsx(le,{kind:"failed",entries:l,onDismiss:H,live:!1}),j&&i.length>0&&r.jsx(le,{kind:"found",entries:i,onDismiss:_,live:!1})]})}const Oi=u.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,Ii=S`
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
`,Ti=u.div`
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
    ${Ii}
  }
`,Mi=u.button`
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

  ${ve}

  &[aria-expanded="true"] {
    pointer-events: none;
  }

`,zi=u.div`
  display: contents;
`,Xt=u.span`
  color: ${K.warn};
`,Fi=u.span`
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
`,Li=u.span`
  color: var(--color-info-text);
`,Di=u.span`
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
`,cr=d.createContext(null);function Tc({badges:e,children:t}){return r.jsx(cr.Provider,{value:e,children:t})}function Bi(){return d.useContext(cr)}function dr({severity:e,count:t=1}){const n=t>1;return r.jsx(Ni,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${qe[e]}`:qe[e],$mark:M[e],$digits:n?String(t).length:1,children:n&&r.jsx(Hi,{$fill:Kr[e],$ink:Gr[e],children:t})})}const Zt="8px",Ni=u.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${Zt};
  /* The count's own size, so the width below can be counted in its digits. */
  font-size: 7px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:Zt};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,Hi=u.span`
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
`,Wi=()=>()=>{},Jt=()=>uo;function Ui(){const e=xn();return d.useSyncExternalStore(e?e.subscribe:Wi,e?e.getBreakdown:Jt,e?e.getBreakdown:Jt)}const Gi=()=>()=>{},en=()=>null;function Ki(){const e=xn();return d.useSyncExternalStore(e?e.subscribe:Gi,e?e.getSummary:en,e?e.getSummary:en)}const qi=12;function Vi(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function Yi(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const a=o<e?t-qi:t;if(n[o]<=a)return o}return n.length-1}function Qi(e,t,n){const[o,a]=d.useState(0),s=d.useRef(o);s.current=o;const i=[t,...n].join(`
`),c=d.useCallback(()=>{const l=e.current,h=i.split(`
`);if(!l||h.length<2){s.current!==0&&(s.current=0,a(0));return}const f=h.map(v=>Vi(l,v)),p=Yi(s.current,l.clientWidth,f);p!==s.current&&(s.current=p,a(p))},[e,i]);return d.useLayoutEffect(()=>{c()},[c]),d.useEffect(()=>{const l=e.current;if(!l||typeof ResizeObserver>"u")return;const h=new ResizeObserver(()=>c());return h.observe(l),()=>h.disconnect()},[e,c]),{index:o,compacted:o>0}}const Xi=24;function Zi(e,t,n,o,a=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&a?!(t>n+Xi):n>t}function tn(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const a=e.cloneNode(!0);n!==void 0&&(a.textContent=n),Object.assign(a.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),a.setAttribute("aria-hidden","true"),o.insertBefore(a,e.nextSibling);const s=a.getBoundingClientRect().width;return o.removeChild(a),s}const Ji={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function ce(e){return Number.parseFloat(e)||0}function el(e,t,n,o){const[a,s]=d.useState(!1),i=d.useRef(a);i.current=a;const c=d.useRef(void 0),l=d.useRef(void 0),h=d.useRef(!1),f=d.useRef(o);f.current=o;const p=d.useCallback(()=>{const g=e.current;if(!g)return;const x=getComputedStyle(g),b=g.getBoundingClientRect().width-ce(x.paddingLeft)-ce(x.paddingRight),$=tn(t.current,{},f.current),j=tn(n.current,Ji),C=n.current?.closest("[data-panel-aside-expand]")?.parentElement,O=C?getComputedStyle(C):null,k=$===0||j===0?$+j:$+ce(x.columnGap)+ce(O?.paddingLeft??"")+ce(O?.paddingRight??"")+j,R=i.current,E=b>0&&l.current!==void 0&&b<l.current;R&&E&&(h.current=!0);const P=Zi(R,b,k,c.current,h.current);P!==R&&(h.current=P&&E),b>0&&(l.current=b),k>0&&(c.current=k),P!==i.current&&(i.current=P,s(P))},[e,t,n]),v=d.useRef({title:null,aside:null,observer:null});return d.useLayoutEffect(()=>{const g=t.current,x=n.current,b=v.current;if(b.observer===null||b.title!==g||b.aside!==x){b.observer?.disconnect(),b.title=g,b.aside=x,b.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>p());for(const $ of[g,x])$&&b.observer?.observe($,{subtree:!0,childList:!0,characterData:!0,attributes:!0});p();return}b.observer.takeRecords().length>0&&p()}),d.useEffect(()=>{const g=v.current;return()=>{g.observer?.disconnect(),g.observer=null}},[]),d.useEffect(()=>{const g=e.current;if(!g||typeof ResizeObserver>"u")return;const x=new ResizeObserver(()=>p());return x.observe(g),n.current&&x.observe(n.current),()=>x.disconnect()},[e,n,p]),a}const ur=d.createContext("full"),tl=ur.Provider;function Mc(){return d.useContext(ur)}const $t=d.createContext(null);function hr({children:e}){const[t,n]=d.useState(null),o=d.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return r.jsx($t.Provider,{value:o,children:e})}function nl({children:e}){return r.jsx(hr,{children:e})}const fr=`
  & > [${bn}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,Oe=u.div`
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
  ${({$hoverTitle:e})=>e?ve:""}
  /* A hand-composed panel can put sections straight in here, so this box owns the leftover height. */
  ${fr}
`,rl=u.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${vn}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,pr=d.forwardRef(function({compact:t,children:n,...o},a){const s=d.useRef(null),i=typeof n=="string"?n:"",c=t===void 0||i===""?ol:typeof t=="string"?[t]:t,{index:l,compacted:h}=Qi(s,i,c);return r.jsx(se,{text:h?i:void 0,children:r.jsx(rl,{...o,ref:f=>{if(s.current=f,typeof a=="function"){a(f);return}a&&(a.current=f)},"aria-label":h?i:void 0,children:l===0?n:c[l-1]})})}),ol=[],al=u.div`
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
`,sl=u.div`
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
`,il=u.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,ll=u.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,cl=u.details`
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
    ${me}
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
`;function gr({title:e,compactTitle:t,aside:n,toolbar:o,...a}){const s=Ui(),i=d.useRef(null),c=d.useRef(null),l=d.useRef(null),h=el(i,c,l,typeof e=="string"?e:void 0),[f,p]=d.useState(!1);return d.useEffect(()=>{h||p(!1)},[h]),r.jsxs(al,{ref:i,"data-panel-header":"",...a,children:[r.jsxs(sl,{children:[e!==void 0&&r.jsx(pr,{ref:c,compact:t,children:e}),r.jsx(il,{"aria-hidden":"true",children:r.jsx(Re,{children:null})})]}),n!==void 0&&r.jsx(ll,{children:r.jsxs(cl,{"data-panel-aside-expand":"",$collapsed:h,open:h?f:!0,onToggle:v=>{h&&p(v.currentTarget.open)},children:[r.jsxs("summary",{"aria-label":s.length===0?"Panel status and controls":`${s.map(v=>`${v.count} ${qe[v.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(v=>r.jsx(dr,{severity:v.severity,count:v.count},v.severity)),r.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),r.jsx(tl,{value:h?"collapsed":"full",children:r.jsx("div",{"data-panel-aside-full":"",ref:l,children:n})})]})}),o!==void 0&&r.jsx(mr,{children:o})]})}const mr=u.div`
  ${dt("panel-toolbar")}
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
`,dl=u.div`
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
  ${ve}
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
  ${({$loneFrame:e})=>e?`@container (width < ${ul}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${fr}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${bn}] {
           min-height: 0;
         }`:""}
`,ul="25rem";function vr({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...a}){const i=d.useContext($t)?.registerScroller,[c,l]=d.useState(null),h=d.useCallback(p=>{i?.(p),l(p)},[i]),f=gn(c);return r.jsx(dl,{ref:h,tabIndex:f,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...a,children:e})}const hl="13rem",fl=u.div`
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
  & > [${ho}] {
    grid-column: 1 / -1;
  }
`;function pl({children:e,hoverTitle:t}){const n=d.useRef(null),o=d.useRef(null),a=vl(n,o);return r.jsx(gl,{ref:n,$fits:a,"data-panel-fit-body":"",children:r.jsx(ml,{ref:o,$fits:a,$hoverTitle:t,children:e})})}const gl=u.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,ml=u.div`
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
`;function vl(e,t){const[n,o]=d.useState(!0);return d.useLayoutEffect(()=>{const a=e.current,s=t.current;if(!a||!s)return;const i=()=>{o(bl(xl(s),a.clientHeight))};if(i(),typeof ResizeObserver>"u")return;const c=new ResizeObserver(i),l=()=>{c.observe(a),c.observe(s);for(const f of Array.from(s.children))c.observe(f)};l();const h=new MutationObserver(()=>{l(),i()});return h.observe(s,{childList:!0}),()=>{c.disconnect(),h.disconnect()}},[e,t]),n}function xl(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function bl(e,t){return e<=t}const wl=u.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,yl=u.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${ve}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,Ie=u.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e,$topOffset:t})=>e==="top"?`top: ${t??"0"};`:"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: 44px;
  /* The audit reads the mask depth from the gradient, so the literal height costs it nothing. */
  ${Lo("panel-scroll-glow")}
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
`,$l=d.forwardRef(function({children:t,...n},o){const a=d.useRef(null),[s,i]=d.useState(null),c=d.useCallback(f=>{a.current=f,i(f)},[]);d.useImperativeHandle(o,()=>a.current);const l=mn(s,wr,yr,br),h=gn(s);return r.jsxs(wl,{...n,children:[r.jsx(yl,{ref:c,tabIndex:h,"data-scroll-area-inner":"",children:t}),r.jsx(Ie,{$position:"top",$visible:l.top}),r.jsx(Ie,{$position:"bottom",$visible:l.bottom})]})});function jl(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const nn="14rem",kl=5,Sl="45%",_l=`min(${mi(1,kl).pxH}px, ${Sl})`;function rn(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const Rl=u.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${rn(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${rn(t,n)};`}

  /* Visual placement only: the sidebar always follows the body in the DOM, so reading and tab order never depend on its side. */
  ${({$side:e})=>e==="start"?"& > [data-panel-sidebar] { order: -1; }":""}

  /* The sidebar gets the rail band when the rail travels with the header, since only the body's scroller holds it. Under the body it is nowhere near the header, so it takes none. */
  ${({$railBand:e,$axis:t,$side:n})=>e&&!(t==="block"&&n==="end")?`& > [data-panel-sidebar] {
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
`;function Cl({side:e="end",size:t,railBand:n,children:o,...a}){const{ref:s,size:i}=xe({w:1,h:1}),c=jl(t??nn),l=i.w<=1||c===void 0||i.w>=c*2,h=i.w>=i.h&&l?"inline":"block",f=t??(h==="inline"?nn:_l);return r.jsx(Rl,{ref:s,"data-panel-split":h,$axis:h,$side:e,$size:f,$railBand:n,...a,children:o})}const El=u($l)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,Al=u.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function xr({children:e,...t}){return r.jsx(Al,{"data-panel-sidebar":"",...t,children:r.jsx(El,{children:e})})}const br={top:!1,bottom:!1};function wr(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function yr(e,t){return e.top===t.top&&e.bottom===t.bottom}const Pl=u.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function $r({children:e,railBandAbove:t,...n}){const o=d.useContext($t),a=o?.scroller??null;d.useEffect(()=>{},[o]);const s=mn(a,wr,yr,br);return r.jsxs(Pl,{...n,children:[e,r.jsx(Ie,{$position:"top",$visible:s.top,$topOffset:t?"var(--panel-rail-band)":void 0}),r.jsx(Ie,{$position:"bottom",$visible:s.bottom})]})}function Ol(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const zc=["sections","actions"],rt=Object.freeze({});function on(){return r.jsx(Ve,{segment:"sections",props:rt})}function Il({summary:e}){const t=d.useRef(e.severity),[n,o]=d.useState(0);return d.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(a=>a+1))},[e.severity]),r.jsx(Tl,{$pulse:n,children:r.jsx(Re,{tone:e.severity,size:"sm",children:e.label})})}const Tl=u.span`
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
`,jr=u.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,Ml=u.div`
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
`;function zl({render:e}){const{ref:t,size:n}=xe({w:0,h:0});return r.jsx(Fl,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const Fl=u.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,Ll=u.div`
  flex: 1 1 100%;
  min-width: 0;
`,Dl=u(gr)`
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
`,Bl=u.div`
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
`,Nl=u(ge)`
  margin: 0;
  ${vn}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${Oe}:hover &,
  ${Oe}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function Hl(e){let t=null;for(const n of e){const{label:o,tone:a}=gt(n);a===void 0||a==="neutral"||(t===null||Ct(a)>Ct(t.severity))&&(t={severity:a,label:o})}return t}function an({badges:e}){return r.jsx(r.Fragment,{children:e.map(t=>r.jsx(Wl,{entry:t},t.id))})}function Wl({entry:e}){const{label:t,tone:n}=gt(e);return it(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:t}),null}function Ul({summary:e,announcement:t}){return r.jsxs(r.Fragment,{children:[r.jsx(se,{text:e.label,focusable:!0,children:r.jsx(Gl,{children:r.jsx(dr,{severity:e.severity})})}),r.jsx(Me,{visuallyHidden:!0,assertive:!0,children:t})]})}const Gl=u.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,Kl=u.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function ql(e){return e.hoverTitle?r.jsx(Vl,{...e}):r.jsx(kr,{...e,hoverTitleId:void 0})}function Vl(e){const t=d.useId();return r.jsx(kr,{...e,hoverTitleId:t})}function kr({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:a,panelToolbar:s,panelFilter:i,panelFooter:c,panelTrend:l,inactive:h,fitToSize:f,hoverTitle:p,hoverTitleId:v,panelSidebar:g,sidebarSide:x,sidebarSize:b,panelSections:$=!0,sections:j,sectionMinWidth:C=hl,children:O,...k}){const R=Bi(),E=Rt("actions"),P=Rt("sections"),A=Ol(o,R),U=A.length===0?null:A.map(T=>{const{label:G,tone:V,title:Er}=gt(T);return r.jsx(se,{text:Er,focusable:!0,children:r.jsx(Re,{tone:V,report:V===void 0||V==="neutral"?void 0:{id:T.id},children:G})},T.id)}),N=i===void 0?s:r.jsxs(r.Fragment,{children:[s,r.jsx(Ll,{children:Jn(i)})]}),H=a??null,F=H!==null&&H!=="none"&&H!=="live"?H:null;it(F?{id:"stream",severity:_e(F),label:St(F)??""}:null);const _=Ki(),m=_!==null&&A.some(T=>T.id===_.id),w=F===null?null:St(F),I=m?null:_!==null?r.jsx(Il,{summary:_}):F===null||w===null?null:r.jsx(Re,{tone:_e(F),size:"sm",children:w}),y=_?.label??w,z=y===null||y===""?"":typeof e=="string"?`${e}: ${y}`:`Status: ${y}`,L=n===void 0&&I===null&&U===null&&!E?void 0:r.jsxs(r.Fragment,{children:[n,E&&r.jsx(Ve,{segment:"actions",props:rt}),U,I]}),D=_??Hl(A)??(F===null||w===null?null:{severity:_e(F),label:w}),B=D?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${D.label}`:`Status: ${D.label}`,Z=n===void 0&&D===null&&!E?A.length===0?void 0:r.jsx(an,{badges:A}):r.jsxs(r.Fragment,{children:[n,E&&r.jsx(Ve,{segment:"actions",props:rt}),r.jsx(an,{badges:A}),D!==null&&r.jsx(Ul,{summary:D,announcement:B})]}),te=h!==void 0,be=te?[]:d.Children.toArray(j),Ne=be.length>0,_r=O===void 0&&!($&&P)&&!f&&be.length===1&&Yl(be[0]),ne=[];for(const T of be){const G=!f&&d.isValidElement(T)&&T.props.fill===!0,V=ne.at(-1);!G&&V!==void 0&&!V.fill?V.nodes.push(T):ne.push({fill:G,nodes:[T]})}$&&Ne&&!ne.some(T=>!T.fill)&&ne.push({fill:!1,nodes:[]});const Rr=$?ne.reduce((T,G,V)=>G.fill?T:V,-1):-1,Cr=T=>Math.max(1,T.filter(G=>!(d.isValidElement(G)&&G.props.full===!0)).length),we=[];for(const T of ne){const G=we.length;if(T.fill){we.push(T.nodes[0]);continue}we.push(r.jsxs(fl,{$min:C,$columns:Cr(T.nodes),children:[T.nodes,G===Rr&&r.jsx(on,{})]},`sections-${G}`))}const jt=te?r.jsx(fo,{reason:h}):Ne?r.jsxs(r.Fragment,{children:[O,we]}):O,kt=r.jsxs(vr,{fitToSize:f,loneFrame:_r,hoverTitle:p,children:[r.jsxs(Ml,{"data-panel-sticky-top":"",children:[r.jsx(lr,{tiny:p}),!p&&r.jsx(Dl,{title:e,compactTitle:t,aside:L,toolbar:N})]}),f?r.jsx(pl,{hoverTitle:p,children:jt}):jt,$&&!Ne&&!te&&r.jsx(on,{})]});return r.jsx(nl,{children:r.jsxs(Oe,{$railTravels:!0,$hoverTitle:p,...p?{tabIndex:0,role:"group","aria-labelledby":v,"data-tiny-panel":""}:{},...k,children:[r.jsx($r,{railBandAbove:!0,children:g===void 0||te?kt:r.jsxs(Cl,{side:x,size:b,railBand:!0,children:[kt,r.jsx(xr,{children:g})]})}),!te&&l!==void 0&&r.jsx(zl,{render:l}),!te&&c!==void 0&&r.jsx(jr,{children:c}),p&&r.jsxs(Bl,{"data-panel-hover-title":"",children:[r.jsx(Nl,{as:"h3",id:v,children:e}),Z!==void 0&&r.jsx(Kl,{children:Z})]}),r.jsx(Me,{visuallyHidden:!0,children:p&&B!==void 0?"":z})]})})}function Yl(e){if(!d.isValidElement(e)||e.type!==ct||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=d.Children.toArray(t).filter(a=>!(d.isValidElement(a)&&a.type===hi));if(n.length!==1)return!1;const[o]=n;if(!d.isValidElement(o))return!1;if(o.type===oi)return!0;if(o.type!==d.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const Fc=Object.assign(ql,{Context:hr,Delay:lr,Container:Oe,Header:gr,Toolbar:mr,Footer:jr,Title:pr,Glow:$r,Body:vr,Section:ct,Sidebar:xr}),Ql=u.div`
  display: ${({$size:e})=>e==="hero"?"flex":"inline-flex"};
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({$tone:e})=>K[e]};
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
`;function Lc({size:e="inline",tone:t="neutral",...n}){return r.jsx(Ql,{$size:e,$tone:t,...n})}const Dc=u.span`
  font-size: var(--font-size-caption);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-transform: uppercase;
`,Sr=240,Xl=8;function Zl(e,t){if(e<=0||t<2)return!1;const n=t*Sr+(t-1)*Xl;return e>=n}function Bc({tabs:e,activeId:t,onChange:n,expandWhenRoomy:o=!1,"aria-label":a,"aria-labelledby":s,className:i}){const c=d.useId(),l=d.useMemo(()=>e.map((y,z)=>({...y,id:y.id??`tab-${z}`})),[e]),h=t!==void 0,[f,p]=d.useState(()=>t??l[0]?.id??""),v=h?t:f,g=l.find(y=>y.id===v),x=g&&!g.disabled?g:l.find(y=>!y.disabled)??g??l[0],b=d.useCallback(y=>{h||p(y),n?.(y)},[h,n]),$=d.useMemo(()=>l.filter(y=>!y.disabled),[l]),{ref:j,size:C}=xe({w:0,h:0}),O=o&&Zl(C.w,$.length),k=d.useRef(new Map),R=d.useRef(null),E=d.useRef(null),[P,A]=d.useState(!1),[U,N]=d.useState(null),H=d.useCallback(y=>{R.current=y,N(y)},[]),F=Ks(U),[_,m]=d.useState(null);d.useLayoutEffect(()=>{const y=R.current;if(!y)return;const z=()=>{A(D=>{D||(E.current=y.scrollWidth);const B=E.current;return B==null?!1:B>y.clientWidth})};z();const L=new ResizeObserver(z);return L.observe(y),()=>L.disconnect()},[O,l.length]),d.useLayoutEffect(()=>{const y=R.current,z=x?k.current.get(x.id):void 0;if(!y||!z){m(null);return}const L=()=>{const B=k.current.get(x?.id??"");B&&m(Z=>Z&&Z.left===B.offsetLeft&&Z.width===B.offsetWidth?Z:{left:B.offsetLeft,width:B.offsetWidth})};L();const D=new ResizeObserver(L);return D.observe(y),D.observe(z),()=>D.disconnect()},[x?.id,l.length,O]);const w=d.useCallback((y,z)=>{const L=l.length;for(let D=1;D<=L;D++){const B=l[((y+z*D)%L+L)%L];if(!(!B||B.disabled)){b(B.id),k.current.get(B.id)?.focus();return}}},[l,b]),I=d.useCallback(y=>{const z=l.findIndex(L=>L.id===x?.id);if(!(z<0))switch(y.key){case"ArrowRight":case"ArrowDown":y.preventDefault(),w(z,1);break;case"ArrowLeft":case"ArrowUp":y.preventDefault(),w(z,-1);break;case"Home":y.preventDefault(),w(-1,1);break;case"End":y.preventDefault(),w(l.length,-1);break}},[l,x?.id,w]);return O?r.jsx(sn,{ref:j,"data-tabs-root":"",className:i,children:r.jsx(ao,{minColWidth:`${Sr}px`,align:"start",gap:"related-comfortable",children:$.map(y=>r.jsxs(ct,{children:[r.jsxs(po,{as:"h3",$rule:!0,children:[y.label,y.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(ln,{"aria-hidden":"true"}),r.jsx(ge,{children:", needs attention"})]})]}),y.content]},y.id))})}):r.jsxs(sn,{ref:j,"data-tabs-root":"",className:i,children:[r.jsxs(Jl,{children:[r.jsx(ec,{ref:H,children:r.jsxs(tc,{role:"tablist","aria-label":a,"aria-labelledby":s,children:[_&&r.jsx(nc,{"aria-hidden":"true",style:{left:_.left,width:_.width}}),l.map(y=>{const z=y.id===x?.id;return r.jsxs(rc,{ref:L=>{L?k.current.set(y.id,L):k.current.delete(y.id)},role:"tab",type:"button",id:`${c}${y.id}-tab`,"aria-selected":z,"aria-controls":`${c}${y.id}-panel`,"aria-describedby":y.indicator?`${c}${y.id}-attention`:void 0,tabIndex:z?0:-1,disabled:y.disabled,$active:z,onClick:()=>b(y.id),onKeyDown:I,$compact:P,children:[y.label,y.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(ln,{"aria-hidden":"true"}),r.jsx("span",{id:`${c}${y.id}-attention`,hidden:!0,children:"Needs attention"})]})]},y.id)})]})}),r.jsx(Ut,{$position:"left",$visible:F.left}),r.jsx(Ut,{$position:"right",$visible:F.right})]}),x&&r.jsx(oc,{role:"tabpanel",id:`${c}${x.id}-panel`,"aria-labelledby":`${c}${x.id}-tab`,children:x.content})]})}const sn=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-tabs-panel);
  /* Fills the panel and constrains children, so a flex:1 tab body can scroll. */
  flex: 1;
  min-height: 0;
`,Jl=u.div`
  position: relative;
  margin-inline: calc(-1 * var(--bleed-inline));
`,ec=u.div`
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
`,tc=u.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  gap: var(--gap-tab);
  background: var(--color-surface-sunken);
  border-radius: var(--radius-pill);
  padding: var(--inset-tab-track);
  flex-wrap: nowrap;
`,nc=u.span`
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
`,ln=u.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-left: var(--gap-trailing-mark);
  vertical-align: middle;
  border-radius: var(--radius-circle);
  background: var(--color-warn-mark);
`,rc=u.button`
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

  ${ve}

  @media (pointer: coarse) {
    min-height: 44px;
    /* Compact still applies on touch: a tab scrolled half out of view is a smaller target, not a bigger one. */
    ${({$compact:e})=>e?"padding: var(--inset-tab-compact-touch);":"padding: var(--inset-control-touch);"}
  }
`,oc=u.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,Nc=d.forwardRef(function({pressed:t=!1,tone:n="go",size:o="md",type:a="button","aria-pressed":s,...i},c){return r.jsx(so,{ref:c,type:a,tone:t?n:void 0,size:o,pressed:t,"aria-pressed":s??t,...i})});export{$a as $,_n as A,Re as B,pi as C,Cc as D,Fn as E,qs as F,Kt as G,ht as H,as as I,Qs as J,ca as K,Ft as L,Pc as M,on as N,gt as O,Fc as P,Yn as Q,Lc as R,$l as S,Sr as T,Q as U,Pn as V,Ia as W,wc as X,On as Y,mt as Z,Qn as _,Ec as a,yo as a0,jo as a1,mi as a2,$o as a3,At as a4,Ac as a5,Jo as a6,Fe as a7,Sc as a8,Ce as a9,Za as aa,_a as ab,vt as ac,Mc as ad,ei as ae,Ui as af,Ki as ag,Fa as ah,ft as ai,Xo as aj,Rc as ak,Xe as al,bc as am,jc as an,Mt as ao,Ks as ap,Ut as aq,oi as b,Oc as c,Dc as d,kc as e,vc as f,xc as g,Bc as h,Nc as i,ko as j,ks as k,le as l,Ua as m,Nn as n,yc as o,$c as p,zc as q,ti as r,Zl as s,hi as t,xe as u,Ic as v,Bn as w,Tc as x,gi as y,_c as z};
