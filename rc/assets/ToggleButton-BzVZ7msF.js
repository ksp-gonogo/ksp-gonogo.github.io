import{j as n}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import u,{css as k,keyframes as tn}from"./ext-styled-components-Br73TgY3.js";import{l as $r,t as jr,d as O,T as G,w as ce,m as tt,u as kr,n as Sr,p as _r,r as nn,o as Cr,v as rn,j as J,x as Rr,y as Er,A as Ar,z as Pr,i as Ir,N as Tr,B as Or,R as Mr,b as zr,c as Ge,e as Fr,g as Lr,f as bt}from"./streamStatusWord-DiCPl-PU.js";import{r as c}from"./ext-react-RRA14VTW.js";import{E as on,ai as Ie,ar as nt,V as he,a4 as Te,a5 as an,a7 as sn,a2 as ae,N as Dr,M as Br,af as wt,au as Nr,aq as Hr,aw as Wr,an as ln,a3 as fe,Z as Oe,h as Ur,v as Gr,I as Kr,aa as qr,F as Vr,l as Yr,a1 as pe,_ as dn,ax as cn,a0 as un,ac as Qr,d as Xr}from"./reckoningMarkDraw-wm1NEMVD.js";import{t as rt,s as ke,y as Zr,z as Jr,m as eo,f as ot,n as hn,N as to,S as at,B as fn,v as yt,A as Ke,E as no,I as ro,G as $t,e as oo}from"./contributionsRead-CZfLZhIL.js";import{aZ as pn,E as gn,bx as se,C as xe,bE as ao,v as re,aY as so,bZ as jt,b2 as be}from"./view-clock-formula-aC7mjXLK.js";import"./ksp-enum-names-VzzNPeFZ.js";import{h as io,l as lo}from"./kepler-DtDJUp9i.js";import{r as co}from"./use-transmissions-CNXIlXpa.js";import"./reference-frame-C3IY91zk.js";function uo(e,t){if(!t)return!0;const r=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(r)||e.key.toLowerCase().includes(r)}function ho(e,t,r=uo){return e.filter(o=>r(o,t))}function fo(e,t="Other"){const r=new Map;for(const o of e){const a=o.group??t;let s=r.get(a);s||(s=[],r.set(a,s)),s.push(o)}return[...r.entries()].sort(([o],[a])=>o.localeCompare(a))}function po(e){return e.flatMap(([,t])=>t)}function kt(e,t,r){return r===0?-1:Math.max(0,Math.min(e+t,r-1))}function go({id:e,groups:t,flatOptions:r,activeIndex:o,selectedKey:a,getOptionId:s,onHoverIndex:i,onSelectKey:d,renderItem:l,emptyLabel:h="No matches",ariaLabel:p,placement:f="below"}){return n.jsx(mo,{role:"listbox",id:e,"aria-label":p,$placement:f,children:r.length===0?n.jsx(on,{layout:"fill",children:h}):t.map(([g,m],x)=>n.jsxs(vo,{role:"group","aria-labelledby":`${e}-group-${x}`,children:[n.jsx(xo,{id:`${e}-group-${x}`,"aria-hidden":"true",children:g}),m.map(b=>{const y=r.indexOf(b),$=y===o;return n.jsx(wo,{id:s(b.key),role:"option","aria-selected":$,$active:$,$selected:b.key===a,onPointerDown:R=>{R.preventDefault(),d(b.key)},onMouseEnter:()=>i(y),children:l?l(b):b.label??b.key},b.key)})]},g))})}const mo=u.div`
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
`,vo=u.div``,xo=u.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-raised);
`;function bo(e,t){return e?"background: var(--color-surface-panel);":t?$r("go"):"background: transparent;"}const wo=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-menu-item);
  cursor: pointer;
  ${({$active:e,$selected:t})=>bo(e,t)}
  /* Focus stays on the input, so the highlighted option carries the focus colour as an inset bar. */
  box-shadow: ${({$active:e})=>e?"inset 3px 0 0 var(--color-focus)":"none"};

  &:hover {
    background: var(--color-surface-panel);
  }
`;function nd({tone:e,children:t,live:r=!1,pulse:o,...a}){const s=r?{role:"status","aria-live":"polite"}:{};return n.jsxs(yo,{"data-tone":e,...s,...a,children:[n.jsx(jo,{"data-tone":e,$pulse:o,"aria-hidden":"true"}),n.jsx(ko,{children:t})]})}const yo=u.div`
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

  border-color: ${({"data-tone":e})=>jr(e)};
`,$o=tn`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,jo=u.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  flex-shrink: 0;

  background: ${({"data-tone":e})=>O[e]};

  /* A looping pulse needs its own reduced-motion guard; the 1s/2s periods encode connection state. */
  ${({$pulse:e})=>e?k`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${$o} ${e==="fast"?"1s":"2s"}
              var(--ease-emphasis) infinite;
          }
        `:""}
`,ko=u.span`
  color: var(--color-text-primary);
  line-height: var(--line-height-body);
`;function rd({checked:e,onChange:t,label:r,disabled:o,id:a,"aria-label":s}){return n.jsxs(So,{$disabled:o,children:[n.jsx(_o,{type:"checkbox",id:a,checked:e,disabled:o,onChange:i=>t(i.target.checked),"aria-label":r?void 0:s}),n.jsx(mn,{$checked:e,$disabled:o,children:n.jsx(Co,{$checked:e,$disabled:o})}),r&&n.jsx(Ro,{children:r})]})}const So=u.label`
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
`,mn=u.div`
  width: 28px;
  height: 14px;
  /* --radius-pill keeps the stadium shape through a height change. */
  border-radius: var(--radius-pill);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-surface-raised)":e?"var(--color-go-mark)":"var(--color-surface-raised)"};
  border: 1px solid ${({$checked:e,$disabled:t})=>t?"var(--color-border-strong)":e?"var(--color-go-mark)":"var(--color-border-strong)"};
  position: relative;
  flex-shrink: 0;
  transition: background var(--duration-base), border-color var(--duration-base);
`,_o=u.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:focus-visible + ${mn} {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Co=u.div`
  position: absolute;
  /* Measured inside the border: the track is border-box, so its 1px border leaves a 26 by 12 box, and 2px on every side centres the 8px thumb at either end. */
  top: 2px;
  left: ${({$checked:e})=>e?"16px":"2px"};
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-text-faint)":e?"var(--color-accent-fg)":"var(--color-text-faint)"};
  transition: left var(--duration-base), background var(--duration-base);
`,Ro=u.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,st=e=>k`
  --fit-box: ${e};
`,Eo=e=>k`
  --fit-mask: ${e};
`;function Se({tone:e,size:t="md",live:r=!1,report:o,children:a,...s}){const i=e===void 0||e==="neutral"?void 0:e,d=o?.label??(typeof a=="string"?a:"");rt(o?{id:o.id,severity:i??"go",label:d}:null);const l=r?{role:"status","aria-live":"polite"}:{};return n.jsx(To,{$severity:i,$size:t,...l,...s,children:a})}const Ao=k`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,Po={go:k`
    background: transparent;
    border-color: ${O.go};
    color: ${G.go};
  `,info:k`
    background: transparent;
    border-color: ${O.info};
    color: ${G.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${O.info} 40%, transparent);
  `,caution:k`
    background: transparent;
    border-color: ${O.caution};
    color: ${G.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${O.caution} 45%, transparent);
  `,warn:k`
    background: transparent;
    border-color: ${O.warn};
    color: ${G.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${O.warn} 55%, transparent);
  `,nogo:k`
    background: transparent;
    border-color: ${O.nogo};
    color: ${G.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${O.nogo} 65%, transparent);
  `,offline:k`
    background: transparent;
    border-color: ${O.offline};
    color: ${G.offline};
  `},Io={sm:k`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:k`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},To=u.span`
  display: inline-block;
  /* Sized by its own text, never stretched to a taller flex sibling. */
  align-self: center;
  ${st("badge")}
  border: 1px solid;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;

  /* Pill-shaped only for a real severity; a decorative kind chip keeps the rounded rect. */
  border-radius: ${({$severity:e})=>e===void 0?"var(--radius-regular)":"var(--radius-pill)"};

  ${({$size:e})=>Io[e]}
  ${({$severity:e})=>e===void 0?Ao:Po[e]}
`,qe=Ie.held.domSize,Ve=Ie.modelled.domSize,Oo=k`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${qe} + 0.14em);
  }
`,Mo=k`
  &::after {
    content: "";
    display: inline-block;
    width: calc(${Ve} + 0.14em);
  }
`;function vn(e){return e==="modelled"?Mo:Oo}const xn=u.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${qe};
  height: ${qe};
  border-radius: var(--radius-circle);
  background: ${Ie.held.color};
`,zo=u.span`
  position: absolute;
  right: 0;
  top: 0;
  width: ${Ve};
  height: ${Ve};
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: ${Ie.modelled.color};
`;function bn({kind:e}){const t=e==="modelled"?zo:xn;return n.jsx(t,{"aria-hidden":"true","data-held-mark":"","data-reckoning-mark":e})}const wn=u.span`
  position: relative;
  white-space: nowrap;
  ${({$kind:e})=>vn(e??"held")}
`;function it({caption:e,kind:t="held",children:r,...o}){const{anchor:a,tip:s}=nt(e);return n.jsxs(wn,{$kind:t,...o,...a,children:[r,n.jsx(bn,{kind:t}),e!==null&&n.jsxs(he,{"data-unit-currency":"",children:[", ",e]}),s]})}function lt(e){return{readsAsOne:(t,r)=>e(t)===e(r)}}function Fo(e={}){return lt(t=>ce(t,e))}const Lo=.01;function Do({wraps:e=!1}={}){const t=r=>e?r-Math.floor(r):Math.min(1,Math.max(0,r));return{readsAsOne(r,o){const a=Math.abs(t(r)-t(o));return(e?Math.min(a,1-a):a)<=Lo}}}function _e(e,t,r){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(a=>!r.readsAsOne(e,a))}const Bo={},No={byKey:new Map,unaddressed:void 0,separate:!1};function St(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Ho(e,t){if(e.separate!==t.separate||!St(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[r,o]of e.byKey)if(!St(o,t.byKey.get(r)))return!1;return!0}function Wo(e,t,r,o){const a=new Map;e!==void 0&&a.set(tt(e),r);for(const[s,i]of Object.entries(t??{}))i!==void 0&&a.set(_r(s),i);return{byKey:a,unaddressed:e===void 0&&t===void 0?r:void 0,separate:o}}function Uo(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Go(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function Ko(){const e=new Set,t=new Set;return{family:e,subscribe(r){return t.add(r),()=>{t.delete(r)}},sweep(r){const o=[...e].sort((s,i)=>s.depth-i.depth);let a=!1;for(const s of o)s.resettle(r)&&(a=!0);if(a)for(const s of t)s()}}}function qo(e){const t=new Map,r=new Map,o=new Set,a=e?.root??Ko();let s=No;const i=l=>{let h;for(const p of l){const f=p.position;f!==void 0&&(h===void 0||f.base>h.base)&&(h=f)}return h?.rung},d={root:a,depth:e===void 0?0:e.depth+1,hold(l,h,p){const f=t.get(l);if(p===void 0)f!==void 0&&(f.delete(h),f.size===0&&t.delete(l));else{if(Go(f?.get(h),p))return;f===void 0?t.set(l,new Map([[h,p]])):f.set(h,p)}e===void 0?a.sweep(l):e.hold(l,h,p)},settled:l=>r.get(l),readsAsOneFigure:l=>o.has(l),setPolicy(l){if(!Ho(s,l)){s=l;for(const h of t.keys())a.sweep(h)}},resettle(l){const h=[...t.get(l)?.values()??[]],p=e?.settled(l),f=s.byKey.get(l)??s.unaddressed??Bo,g=f.format??p?.format??i(h),m=f.as??p?.as,x=f.decimals??(s.separate?Cr(h,{format:g,as:m}):p?.decimals),b=g===void 0&&m===void 0&&x===void 0?void 0:{...g!==void 0&&{format:g},...m!==void 0&&{as:m},...x!==void 0&&{decimals:x}},y=s.separate&&nn(h,{format:g,as:m,decimals:x}),$=y!==o.has(l);return y?o.add(l):o.delete(l),Uo(r.get(l),b)?$:(b===void 0?r.delete(l):r.set(l,b),!0)},attach(){a.family.add(d)},detach(){a.family.delete(d)}};return a.family.add(d),d}const dt={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},ue=c.createContext(dt);function Vo(){return c.useContext(ue)!==dt}function Yo({children:e,of:t,pins:r,format:o,as:a,decimals:s,separate:i=!1}){const d=c.useContext(ue),[l]=c.useState(()=>qo(d===dt?void 0:d));return c.useLayoutEffect(()=>(l.attach(),()=>l.detach()),[l]),c.useLayoutEffect(()=>{l.setPolicy(Wo(t,r,{format:o,as:a,decimals:s},i))},[l,t,r,o,a,s,i]),n.jsx(ue.Provider,{value:l,children:e})}function Ye(e,t={}){const r=c.useContext(ue),o=c.useId(),a=pn(e),s=e?.unit,d=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||a===null?void 0:tt(s),l=d===void 0||a===null||s===void 0||kr(s)===void 0?void 0:Sr(a,s),h=l?.base,p=l?.rung;return c.useLayoutEffect(()=>{if(!(d===void 0||a===null||s===void 0))return r.hold(d,o,{reading:a,unit:s,...h!==void 0&&p!==void 0&&{position:{base:h,rung:p}}}),()=>r.hold(d,o,void 0)},[r,o,d,a,s,h,p]),c.useSyncExternalStore(r.root.subscribe,()=>d===void 0?void 0:r.settled(d),()=>{})}function od(e,t={}){const r=c.useContext(ue),a=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||pn(e)===null||e===null||e===void 0?void 0:tt(e.unit);return c.useSyncExternalStore(r.root.subscribe,()=>a===void 0?!1:r.readsAsOneFigure(a),()=>!1)}const Qo=Ar,Xo={sci:Br,rep:Dr},yn=u.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,Zo=u.span`
  white-space: nowrap;
  ${({$mark:e})=>e!==null?k`
          position: relative;
          ${vn(e)}
        `:""}
`,Jo=u.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,ea=u(he)`
  user-select: none;
`,$n=u(he)`
  user-select: none;
`,ta=" ";function na(e,t,r,o){if(t===void 0)return null;const a=g=>rn(g.magnitude,g.unit,{...r,format:o}).value,s=(g,m)=>a(m.minus(g)),i=nn([t.lo,t.hi],{...r,format:o});if(!_e(e,[t.lo,t.hi],lt(a)))return null;const d=s(t.lo,t.value),l=s(t.value,t.hi),h=g=>/^[-+\u2212]?[0.,\s]*$/.test(g);if(!i&&h(d)&&h(l))return null;const p=a(t.value)===a(e),f={...r,format:o};return{oneFigure:i,plusMinus:!i&&p&&d===l?l:null,lo:a(t.lo),hi:a(t.hi),loSaid:J(t.lo,f),hiSaid:J(t.hi,f),kind:t.kind}}function ra(e,t){const r=t===null?null:sn(t.kind,`with bands at ${t.loSaid} and ${t.hiSaid}`);return e===null?r:r===null?e:`${e}, ${r}`}function Ne({token:e,className:t,spaced:r}){const o=Rr(e,Er(e));if(o==="")return null;const a=Pr(o),s=Xo[o],i=Qo.has(o),d=a!==void 0;return n.jsxs(n.Fragment,{children:[r&&!i?ta:null,n.jsx(ae,{text:a,announce:!1,children:n.jsxs(yn,{$attached:i,$icon:s!==void 0,className:t,"data-unit":e,children:[s?n.jsx(s,{size:"1em"}):d?n.jsx("span",{"aria-hidden":"true",children:o}):o,d&&n.jsxs($n,{"data-unit-word":"",children:[" ",a]})]})})]})}function Y({value:e,children:t,className:r,hideUnitInGroup:o,reckoned:a,marked:s,...i}){const d=Te(e,{drawsReckoning:a}),l=s!=null&&!d.held?{...d,held:!0,mark:s.kind,caption:s.caption}:d,{shown:h,held:p,mark:f,caption:g,band:m}=l,x=Ye(h,i),b=Vo(),y=o===!0&&b,$=x===void 0?i:{...x,...i},R=rn(h?.magnitude,h?.unit,$),_=h==null||m===null||!p?null:na(h,gn(m,h.unit),$,R.rung),{anchor:j,tip:I}=nt(ra(g,_));return e!==void 0||t===void 0?n.jsxs(Zo,{className:r,$mark:f,...an(l),...j,children:[R.value,!y&&n.jsx(Ne,{token:R.symbol,spaced:!0}),_!==null&&n.jsxs(Jo,{"data-unit-band":"",children:[_.oneFigure?n.jsxs(n.Fragment,{children:[" (",n.jsx("span",{"aria-hidden":"true",children:"~"}),n.jsx($n,{"data-unit-word":"",children:"approximately "}),_.lo]}):_.plusMinus===null?` (${_.lo} to ${_.hi}`:` ± ${_.plusMinus}`,!y&&n.jsx(Ne,{token:R.symbol,spaced:!0}),_.plusMinus===null?")":null]}),f!==null&&n.jsx(bn,{kind:f}),g!==null&&n.jsxs(ea,{"data-unit-currency":"",children:[", ",g]}),I]}):typeof t!="string"?n.jsx(yn,{$attached:!1,$icon:!1,className:r,children:t}):n.jsx(Ne,{token:t,className:r,spaced:!1})}function ct(e){const t=oa(e);if(t===void 0)return{label:e.label,tone:e.tone,title:e.title};const r=Ir(t);return{label:r,tone:ke(t),title:e.title??`${e.label}: ${r}`}}function oa(e){const t=e.held;if(t!==void 0)return typeof t=="string"?t:t.grade}function Q(e,t){return ce({magnitude:e,unit:t})}function aa(e,t){const{limit:r,actual:o,unit:a}=t;if(r==null||o==null)return null;switch(e){case xe.LimitReached:{const s=sa(t.quantity),i=`${Q(o,a)} of ${Q(r,a)}`;return t.facilityName?`the ${t.facilityName} holds ${i} ${s}`:`it holds ${i} ${s}`}case xe.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${Q(o,a)} of ${Q(r,a)}`;case xe.InsufficientFunds:return`it costs ${Q(o,a)} and funds are ${Q(r,a)}`;case xe.InsufficientScience:return`it costs ${Q(o,a)} and science is ${Q(r,a)}`;default:return null}}function sa(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function _t(e){return e&&ao(e)?.sentence||null}function ia(e){const t=e?.trim().replace(/\.$/,"");return t||null}function ut(e){return jn(e,"refused")}function ad(e){return jn(e,"unavailable")}function jn(e,t){const r=se(e),o=(e.breach?aa(e.errorCode,e.breach):null)??ia(e.detail)??_t(e.reason)??_t(e.errorCode)??e.reason??e.errorCode;return r?`${r} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function kn(e){const r=se(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":la(ut({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${r} was refused: ${o}`:`${r} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${r} failed: ${o}.`:`${r} failed.`}return`${r} ran.`}function la(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function Sn(e){return`${se(e)||e.command||"The command"}: no reply. May have run.`}function sd({size:e=12,thickness:t=2,color:r="var(--color-accent-fg)",ariaLabel:o="Loading",...a}){return n.jsx(ca,{...a,role:"status","aria-label":o,$size:e,$thickness:t,$color:r})}const da=tn`
  to { transform: rotate(360deg); }
`,ca=u.span`
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
    animation: ${da} 700ms linear infinite;
  }
`;function Ct(e,t){return t?.state!=="held"?e:{...t,value:e}}function Ce(e){return e.continuity==="continuous"?"ribbon":"dot"}function ua(e){return e.delivery==="acked"}function ha(e){return e.direction==="command"?"outbound":"inbound"}function _n(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function Me(e){return`${e.direction}/${e.continuity}/${e.delivery}`}const fa={"command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/discrete/fire-and-forget":"in-flight-row"};function ht(e){return fa[Me(e)]??null}const Rt=new Set;function Cn(e,t){const r=Me(e);if(Rt.has(r))return;Rt.add(r);const o=`Delay rail entry "${t}" is tagged ${r}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;io()?lo.error(o):console.error(o)}const Rn=16,Et=Rn/2,pa=5.5,ga=2,ma=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function En(e,t,r){return t>0?Math.min(e.length-1,t)/t*r:0}function va(e,t,r){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(r/ga)),Math.max(2,Math.round(o)))}function xa(e,t,r){if(e.length===0)return"";const o=En(e,t,r);if(!(o>0))return`M0.00,${Et.toFixed(2)}`;const a=va(e,t,o),s=[];for(let i=0;i<=a;i++){const d=Math.min(i/a*o,o),l=Math.min(Math.round(d/r*t),e.length-1),h=ma(e[e.length-1-l]),p=(i%2===0?-1:1)*h*pa;s.push(`${d.toFixed(2)},${(Et+p).toFixed(2)}`)}return`M${s.join(" L")}`}const An=.05,ba=.02,Re=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],ze=100,le=30,wa=1.5,H=2,ya=4,Z=le-H-ya,V=(e,t,r)=>r+(t<=0?0:Math.min(1,e/t))*(ze-r*2),we=e=>H+(1-Math.max(0,Math.min(1,e)))*Z,Pn=e=>e==="inline"?wa:0;function id(e="inline"){const t=Pn(e);return(ze-t*2)/3}function In({tags:e,who:t}){return Cn(e,t),n.jsx("g",{"data-rail-unrepresented":Me(e),"data-rail-entry":t})}function ne(e){return e.map((t,r)=>`${r===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function At(e,t){if(e.length===0||e[0].age>=t)return e;const r=e.findIndex(l=>l.age>=t);if(r===-1)return[];const o=e[r-1],a=e[r],s=a.age-o.age||1,i=(t-o.age)/s,d=o.value+i*(a.value-o.value);return[{age:t,value:d},...e.slice(r)]}function Pt(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(h=>h.age>t),a=e.slice(0,o),s=e[o],i=a[a.length-1];if(!i)return[{age:t,value:s.value}];const d=s.age-i.age||1,l=(t-i.age)/d;return[...a,{age:t,value:i.value+l*(s.value-i.value)}]}const $a=.25;function It(e,t){if(e.length===0)return null;const r=e[0],o=e[e.length-1];if(t<=r.age)return r.value;if(t>=o.age)return o.value;for(let a=1;a<e.length;a++){const s=e[a];if(t<=s.age){const i=e[a-1],d=(t-i.age)/(s.age-i.age||1);return i.value+d*(s.value-i.value)}}return o.value}function ja({stream:e,span:t,index:r,padX:o,oneT:a,twoT:s}){const d=`var(${Re[r%Re.length]})`,l=c.useId(),h=`cds-ramp-${l}-${r}`,p=`cds-fill-${l}-${r}`,f=`cds-tail-${l}-${r}`,g=ht(e.tags);if(g!=="continuous-strip")return g===null?n.jsx(In,{tags:e.tags,who:e.id}):null;const m=ua(e.tags),b=(m?e.inTransit:Pt(e.inTransit,a)).map(E=>({x:V(E.age,t,o),y:we(E.value)}));if(b.length===0)return null;const $=(m?[]:Pt(At(e.inTransit,a),a*(1+$a))).map(E=>({x:V(E.age,t,o),y:we(E.value)})),R=$.length>1&&$[$.length-1].x>$[0].x,_=`${ne(b)} L${b[b.length-1].x.toFixed(2)},${(H+Z).toFixed(2)} L${b[0].x.toFixed(2)},${(H+Z).toFixed(2)} Z`,j=m?At(e.echo,s):[],I=j.map(E=>({x:V(E.age,t,o),y:we(E.value)})),B=j.map(E=>({x:V(E.age,t,o),y:we(It(e.inTransit,E.age)??E.value)})),D=j.findIndex(E=>{const K=It(e.inTransit,E.age);return K!==null&&Math.abs(E.value-K)>ba}),A=D!==-1,W=A?I.slice(0,D+1):I,v=A?I.slice(D):[],C=A?B.slice(D):[],P=!A||D>0;return n.jsxs("g",{"data-stream-group":e.id,"data-return-leg":m,children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"1",y2:"0",children:[n.jsx("stop",{offset:"0",stopColor:d,stopOpacity:"0.10"}),n.jsx("stop",{offset:"1",stopColor:d,stopOpacity:"0.40"})]}),n.jsxs("linearGradient",{id:p,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0",stopColor:d,stopOpacity:"0.22"}),n.jsx("stop",{offset:"1",stopColor:d,stopOpacity:"0"})]}),R&&n.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:$[0].x,y1:"0",x2:$[$.length-1].x,y2:"0",children:[n.jsx("stop",{offset:"0",stopColor:d,stopOpacity:"0.40"}),n.jsx("stop",{offset:"1",stopColor:d,stopOpacity:"0"})]})]}),n.jsx("path",{"data-role":"area",d:_,fill:`url(#${p})`,stroke:"none"}),n.jsx("path",{"data-role":"commanded","data-stream":e.id,d:ne(b),fill:"none",stroke:`url(#${h})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),R&&n.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:ne($),fill:"none",stroke:`url(#${f})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),W.length>0&&P&&n.jsx("path",{"data-role":"echo","data-stream":e.id,d:ne(W),fill:"none",stroke:d,strokeWidth:"0.8",strokeLinecap:"round"}),A&&n.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:ne(v),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),A&&n.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:ne(C),fill:"none",stroke:d,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]})}function ka({ribbon:e,padX:t}){const r=`cds-ribbon-fade-${c.useId()}`,o=e.tags,a=ht(o);if(a!=="continuous-strip")return a===null?n.jsx(In,{tags:o,who:e.id}):null;const s=(ze-t*2)/3,i=e.amplitudes,d=e.spanSamples??i.length,l=xa(i,d,s);if(l==="")return null;const h=Math.max(En(i,d,s),1),p=`var(${_n(o)})`,f=ha(o)==="outbound";return n.jsxs("g",{"data-ribbon-group":e.id,transform:`translate(${t} ${H}) scale(1 ${Z/Rn})`,children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:r,gradientUnits:"userSpaceOnUse",x1:f?0:h,y1:"0",x2:f?h:0,y2:"0",children:[n.jsx("stop",{offset:"0",stopColor:p,stopOpacity:"0.9"}),n.jsx("stop",{offset:"1",stopColor:p,stopOpacity:"0.1"})]})}),n.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:l,fill:"none",stroke:`url(#${r})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function Sa({streams:e,ribbons:t=[],ariaLabel:r="Controls in flight",variant:o="inline",delayReading:a}){const s=`cds-divfade-${c.useId()}`,i=a?.state==="held",d=i?Te(a??null).caption:null,{anchor:l,tip:h}=nt(d),p=e[0]??t[0],f=p?.oneWaySeconds??null;if(!p||f===null||f<=0)return null;const g=f>=An;if(!g&&t.length===0)return null;const m=3*f,x=f,b=2*f,y=Pn(o),$=V(x,m,y),R=V(b,m,y),_=e.every(j=>j.inTransit.length===0&&j.echo.length===0)&&t.every(j=>j.amplitudes.length===0);return n.jsxs(_a,{"data-oneway":f,"data-variant":o,$variant:o,...l,children:[n.jsxs(Ca,{$variant:o,$quiet:_,role:"img","aria-label":Hr(r,d),...Nr(d),viewBox:`0 0 ${ze} ${le}`,preserveAspectRatio:"none",children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:H,x2:"0",y2:H+Z,children:[n.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),n.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(g?e:[]).map((j,I)=>n.jsx(ja,{stream:j,span:m,index:I,padX:y,oneT:x,twoT:b},j.id)),t.map(j=>n.jsx(ka,{ribbon:j,padX:y},j.id)),n.jsx("line",{"data-divider":"t",x1:$,x2:$,y1:H,y2:H+Z,stroke:`url(#${s})`,strokeWidth:"0.4"}),n.jsx("line",{"data-divider":"2t",x1:R,x2:R,y1:H,y2:H+Z,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&n.jsxs("g",{"data-role":"hover-labels",children:[n.jsxs("text",{x:$,y:H-.4,textAnchor:"middle",fontSize:"2",children:[ce(re("s",f),{decimals:1}),i&&n.jsx(wt,{size:1.2})]}),n.jsxs("text",{x:R,y:H-.4,textAnchor:"middle",fontSize:"2",children:[ce(re("s",2*f),{decimals:1}),i&&n.jsx(wt,{size:1.2})]}),n.jsx("text",{x:V(f/2,m,y),y:le-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),n.jsx("text",{x:V(1.5*f,m,y),y:le-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),n.jsx("text",{x:V(2.5*f,m,y),y:le-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&n.jsxs(n.Fragment,{children:[n.jsxs(Ra,{"aria-hidden":"true",children:[n.jsxs("span",{children:["outgoing ",n.jsx("b",{children:"0"})]}),n.jsxs("span",{children:["echo"," ",n.jsx("b",{children:n.jsx(Y,{value:Ct(re("s",f),a),decimals:1})})]}),n.jsxs("span",{children:["confirmed"," ",n.jsx("b",{children:n.jsx(Y,{value:Ct(re("s",2*f),a),decimals:1})})]})]}),n.jsxs(Ea,{"aria-hidden":"true",children:[e.map((j,I)=>n.jsxs("span",{children:[n.jsx("i",{style:{background:`var(${Re[I%Re.length]})`}}),j.label]},j.id)),t.map(j=>n.jsxs("span",{"data-role":"legend-ribbon",children:[n.jsx("i",{style:{background:`var(${_n(j.tags)})`}}),j.label]},j.id)),e.length>0&&n.jsxs("span",{"data-role":"legend-deviation",children:[n.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),h]})}const _a=u.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,Ca=u.svg`
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
`,Ra=u.div`
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
`,Ea=u.div`
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
`,Aa=u.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function Tn({observed:e,modelled:t,write:r}){if(t==null)return null;if(r===void 0){const o=t;return _e(e,o,Fo())?n.jsx(Tt,{children:n.jsx(Y,{value:o})}):null}return _e(e,t,lt(r))?n.jsx(Tt,{children:r(t)}):null}function Tt({children:e}){return n.jsx(Aa,{"data-modelled-alongside":"",children:n.jsx(it,{"data-held":"",kind:"modelled",caption:Wr,children:e})})}function ld({value:e}){return n.jsxs(n.Fragment,{children:[n.jsx(Y,{value:e}),n.jsx(Tn,{observed:e.value,modelled:ln(e)})]})}function On({value:e,clock:t=!1,precise:r=!1}){const o=typeof e=="number"?void 0:e,a=b=>Or(typeof b=="number"?b:b.magnitude,{ms:r,sign:t}),s=o!=null&&"state"in o?o:void 0,i=ln(s);if(s?.value!==void 0&&i!==void 0)return n.jsxs(n.Fragment,{children:[a(s.value),n.jsx(Tn,{observed:s.value,modelled:i,write:a})]});const d=Te(o,{drawsReckoning:!0}),{shown:l,held:h,mark:p,caption:f}=d,g=typeof e=="number"?e:l;if(g==null)return Tr;const m=a(g),x=an({...d,shown:g});return h?n.jsx(it,{...x,kind:p??"held",caption:f,children:m}):n.jsx("span",{"data-figure":x["data-figure"],children:m})}function ge(e){const t=c.useRef(null),[r,o]=c.useState(e),[a,s]=c.useState(null);return c.useEffect(()=>{t.current!==a&&s(t.current)}),c.useEffect(()=>{if(!a||typeof ResizeObserver>"u")return;const i=new ResizeObserver(d=>{for(const l of d)l.contentRect.width>0&&l.contentRect.height>0&&o({w:Math.floor(l.contentRect.width),h:Math.floor(l.contentRect.height)})});return i.observe(a),()=>i.disconnect()},[a]),{ref:t,size:r}}function ft(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const pt={"in-transit":.18,"awaiting-reply":.5,due:.62,overdue:.82,lost:.95};function Pa(e){const t=e.reachEtaSeconds,r=Ia(e);if(t===null||r===null)return pt[e.predictedPhase];const o=r-t;return Math.max(0,Math.min(1,o/(3*r)))}function Ia(e){const t=e.reachEtaSeconds,r=e.replyEtaSeconds;return t!==null&&r!==null&&r>t?r-t:r===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function Ta(e){return e.map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:Pa(t),glyph:t.glyph??ft(t.label||t.command),...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function dd({oneWaySeconds:e,canQueue:t,alwaysBadge:r=!1}){return e===null||e<=0?"none":r||so({oneWaySeconds:re("s",e)})==="live"?"badge":t?"strip":"none"}const Oa={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},Qe={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Ma(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Oa[e.phase]}const Fe=new Set(["overdue","lost"]),za=180,Fa=96;function Mn(e){return ce(re("s",Math.max(0,e)))}function La(e){let t=null;for(const r of e)r.etaSeconds!==null&&(t===null||r.etaSeconds<t)&&(t=r.etaSeconds);return t}const Da=1;function zn(e){const[t,r]=c.useState(e),o=c.useRef(e);return c.useEffect(()=>{const a=o.current;(a===null!=(e===null)||a!==null&&e!==null&&Math.abs(e-a)>=Da)&&(o.current=e,r(e))},[e]),c.useEffect(()=>{const a=setInterval(()=>{r(s=>s===null?null:Math.max(0,s-1))},1e3);return()=>clearInterval(a)},[]),t}function Ba({items:e,mode:t,density:r="auto",orientation:o="column",ariaLabel:a="In-flight commands",variant:s="inline",onDismiss:i}){const{ref:d,size:l}=ge({w:320,h:0});if(s==="rail")return e.length===0?null:n.jsx(Ua,{items:e,ariaLabel:a});if(s==="expanded")return e.length===0?null:n.jsx(Ya,{items:e,ariaLabel:a,onDismiss:i});const h=r!=="auto"?r:l.w>=za?"full":l.w>=Fa?"compact":"badge";return e.length===0?null:h==="badge"?n.jsx(Ga,{ref:d,items:e,mode:t,ariaLabel:a}):n.jsx(Ln,{ref:d,role:"list","aria-label":a,"data-mode":t,"data-density":h,$row:o==="row",children:e.map(p=>n.jsx(Ka,{item:p,$compact:h==="compact"},p.id))})}const He=100,Ot=16,Na=-4,Ha=9,Wa=.22;function Ua({items:e,ariaLabel:t}){const r=c.useId(),o=`${e.length} in flight`;return n.jsxs(qa,{role:"img","aria-label":`${t}: ${o}`,viewBox:`0 0 ${He} ${Ot}`,preserveAspectRatio:"none",children:[n.jsx("defs",{children:e.map((a,s)=>{const i=Fe.has(a.phase)?O.warn:"var(--color-accent-fg)",l=Math.max(0,Math.min(1,a.progress??pt[a.phase]))*He;return n.jsxs("radialGradient",{id:`${r}-${s}`,gradientUnits:"userSpaceOnUse",cx:l,cy:Na,r:Ha,children:[n.jsx("stop",{offset:"0",stopColor:i,stopOpacity:Wa}),n.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0"})]},a.id)})}),e.map((a,s)=>n.jsx("rect",{"data-role":"glow","data-phase":a.phase,x:"0",y:"0",width:He,height:Ot,fill:`url(#${r}-${s})`},a.id))]})}const Ga=function({ref:t,items:r,mode:o,ariaLabel:a}){const s=zn(La(r)),i=r.some(l=>Fe.has(l.phase)),d=s===null?`${r.length} in flight`:`${r.length} in flight, next in ${Mn(s)}`;return n.jsx(ae,{text:r.map(l=>l.label).join(`
`),focusable:!0,children:n.jsx(Ln,{ref:t,role:"group","aria-label":`${a}: ${d}`,"data-mode":o,"data-density":"badge",$row:!1,children:n.jsxs(Dn,{$phase:i?"overdue":"in-transit",children:[n.jsx(Bn,{"aria-hidden":"true",$pulse:!i,children:"↑"}),n.jsxs(Nn,{children:[r.length,s!==null&&n.jsxs(n.Fragment,{children:[" · ",n.jsx(On,{value:Math.max(0,s)})]})]})]})})})};function Ka({item:e,$compact:t}){const r=zn(e.etaSeconds),o=Fe.has(e.phase),a=r===null?`${e.label}, ${Qe[e.phase]}`:`${e.label}, ${Mn(r)}`;return n.jsxs(Dn,{$phase:e.phase,role:"listitem",...t?{"aria-label":a,title:a}:{},children:[n.jsx(Bn,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Ma(e)}),!t&&n.jsx(os,{children:e.label}),n.jsx(Nn,{children:r===null?Qe[e.phase]:n.jsx(On,{value:Math.max(0,r)})})]})}const qa=u.svg`
  display: block;
  width: 100%;
  height: 16px;
`,Fn=54,de=5,gt=3,Le=Fn-8-de,oe=60,Va={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:O.warn,lost:O.warn};function Ya({items:e,ariaLabel:t,onDismiss:r}){const{ref:o,size:a}=ge({w:320,h:Fn}),i=a.w>=oe?a.w:a.h,d=Math.max(1,Math.floor((i-6)/(Le+gt))),h=e.length>d?e.slice(0,d-1):e,p=e.length-h.length;return n.jsx(Xa,{ref:o,children:n.jsxs(Za,{role:"list","aria-label":t,children:[h.map(f=>n.jsx(Qa,{item:f,onDismiss:r},f.id)),p>0&&n.jsxs(ns,{role:"listitem","aria-label":`${p} more in flight`,children:["+",p]})]})})}function Qa({item:e,onDismiss:t}){const r=e.glyph??ft(e.label),o=Va[e.phase],a=Math.max(0,Math.min(1,e.progress??pt[e.phase])),s=Fe.has(e.phase)&&!!t,i=`${e.label}, ${Qe[e.phase]}`;return n.jsxs(Ja,{role:"listitem","aria-label":i,"data-phase":e.phase,style:{color:o},children:[n.jsx(ae,{text:s?`Dismiss ${e.label}`:i,announce:!1,children:n.jsxs(es,{as:s?"button":"div",...s?{type:"button",onClick:()=>t?.(e.id),"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[n.jsx("span",{className:"glyph","aria-hidden":"true",children:r}),s&&n.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),n.jsx(ts,{children:n.jsx("span",{className:"fill",style:{"--fill-ratio":a}})})]})}const Xa=u.div.attrs({role:"group"})`
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
    ${Le}px + ${de}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
`,Za=u.div`
  display: flex;
  flex-direction: column;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${gt}px;
  width: 100%;
  height: 100%;

  @container (min-width: ${oe}px) {
    flex-direction: row;
  }
`,Ja=u.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @container (min-width: ${oe}px) {
    flex-direction: column;
  }
`,es=u.div`
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

  @container (min-width: ${oe}px) {
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
`,ts=u.div`
  --s: ${Le}px;
  position: relative;
  flex: 0 0 ${de}px;
  width: ${de}px;
  height: var(--s);
  overflow: hidden;
  background: var(--color-surface-panel);
  border: 1px solid currentColor;
  border-radius: 0 var(--radius-regular) var(--radius-regular) 0;

  @container (min-width: ${oe}px) {
    width: var(--s);
    height: ${de}px;
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
  @container (min-width: ${oe}px) {
    .fill {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: calc(var(--fill-ratio, 0) * 100%);
      height: auto;
    }
  }
`,ns=u.span`
  align-self: center;
  flex: 0 0 auto;
  padding: 0 ${gt}px;
  font-size: var(--font-size-compact);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-muted);
`,Ln=u.div`
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
`,rs={"in-transit":k`
    color: var(--color-text-primary);
  `,"awaiting-reply":k`
    color: var(--color-text-muted);
  `,due:k`
    color: var(--color-text-muted);
  `,overdue:k`
    color: ${G.warn};
  `,lost:k`
    color: ${G.warn};
  `},Dn=u.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>rs[e]}
`,Bn=u.span`
  flex: 0 0 auto;
  color: ${({$inherit:e})=>e?"inherit":"var(--color-accent-fg)"};

  ${({$pulse:e})=>e&&k`
      @media (prefers-reduced-motion: no-preference) {
        animation: in-flight-list-pulse 1.6s var(--ease-emphasis) infinite;
      }
    `}

  @keyframes in-flight-list-pulse {
    50% {
      opacity: 0.35;
    }
  }
`,os=u.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Nn=u.span`
  flex: 0 0 auto;
`;function as({handle:e,handles:t,ariaLabel:r,mode:o,density:a,orientation:s,variant:i="inline"}){const d=t??(e?[e]:[]),l=d.length===1?d[0]:null,h=l?ht(l.tags):null;if(l&&h===null)return n.jsx(ss,{tags:l.tags,who:l.ariaLabel});if(l&&h!=="in-flight-row"){const m=l,x=m.effectiveDelaySeconds;return x===null||x<=0?null:n.jsx(Sa,{streams:m.streams??[],ribbons:m.ribbons??[],delayReading:m.delayReading,ariaLabel:r??m.ariaLabel,variant:i})}const p=Ta(d.flatMap(m=>m.inFlight)),g=d.some(m=>m.dismiss)?m=>d.find(x=>x.inFlight.some(b=>b.id===m))?.dismiss?.(m):void 0;return n.jsx(Ba,{items:p,ariaLabel:r,mode:o,density:a,orientation:s,variant:i,onDismiss:g})}function ss({tags:e,who:t}){return Cn(e,t??"unnamed handle"),n.jsx("span",{hidden:!0,"data-rail-unrepresented":Me(e)})}function is(e){return`${se(e)||e.command||"The command"}: failed, with no verdict from the game.`}function Hn(e){return`${se(e)||e.command||"The command"}: never sent. Safe to re-send.`}const ls={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed"},ds={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command"};function cs(e,t){return e.kind==="refused"?ut(e.entries[t]):e.kind==="found"?kn(e.entries[t]):e.kind==="failed"?is(e.entries[t]):e.kind==="undelivered"?Hn(e.entries[t]):Sn(e.entries[t])}function us(e){return e.entries.map((t,r)=>{const o=se(t);return{id:t.id,subject:o||t.command||"",sentence:cs(e,r),dismissLabel:`Dismiss ${o||ds[e.kind]}`,tags:t.tags}})}function ye(e){const{kind:t,onDismiss:r,live:o=!0}=e,a=e.ariaLabel??ls[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const i=us(e).map(d=>n.jsxs(ps,{role:o?void 0:"listitem",$tone:s,children:[Ce(d.tags)==="ribbon"?n.jsx(ms,{$tone:s,children:d.subject}):n.jsx(gs,{"aria-hidden":"true",$tone:s,children:ft(d.subject)}),n.jsx(vs,{children:d.sentence}),r&&n.jsx(xs,{type:"button",onClick:()=>r(d.id),"aria-label":d.dismissLabel,children:"✕"})]},d.id));return o?n.jsx(fs,{forwardedAs:"div","aria-label":a,additionsOnly:!0,children:i}):n.jsx(hs,{role:"list","aria-label":a,children:i})}const Wn=k`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,hs=u.div`
  ${Wn}
`,fs=u(Oe)`
  ${Wn}
  &:empty {
    margin: 0;
  }
`,ps=u.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>O[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${O[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,gs=u.span`
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
`,ms=u.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>G[e]};
`,vs=u.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,xs=u.button`
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
  ${fe}
`;function bs(){const e=Jr();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const De=Zr(bs),cd=De.Context;function ud({children:e}){return n.jsx(De.Provider,{children:n.jsx(ws,{children:e})})}function ws({children:e}){const t=De.useStore();return n.jsx(co.Provider,{value:t,children:e})}const ys=De.useStore,$s=()=>()=>{},js=[],Mt=()=>js;function ks(){const e=ys();return c.useSyncExternalStore(e?e.subscribe:$s,e?e.getActiveHandles:Mt,e?e.getActiveHandles:Mt)}const Ss="is no longer available";function hd({keys:e,value:t,onChange:r,clearable:o=!1,placeholder:a="Search...",subjectNoun:s="value",id:i,"aria-label":d}){const[l,h]=c.useState(""),[p,f]=c.useState(!1),[g,m]=c.useState(-1),x=c.useRef(null),b=c.useRef(null),y=c.useId(),$=c.useId(),R=c.useId(),_=S=>`${$}-${S}`,j=e.find(S=>S.key===t),I=t!==null&&t!==""&&j===void 0&&e.length>0,B=c.useMemo(()=>ho(e,l),[e,l]),D=c.useMemo(()=>fo(B),[B]),A=c.useMemo(()=>po(D),[D]),W=c.useCallback(()=>{f(!0),h(""),m(-1)},[]),v=c.useCallback(()=>{f(!1),h(""),m(-1)},[]),C=c.useCallback(S=>{r(S),v()},[r,v]),P=S=>{if(!p){(S.key==="Enter"||S.key==="ArrowDown")&&W();return}switch(S.key){case"Escape":v();break;case"ArrowDown":S.preventDefault(),m(N=>kt(N,1,A.length));break;case"ArrowUp":S.preventDefault(),m(N=>kt(N,-1,A.length));break;case"Enter":{const N=g>=0?A[g]:A[0];N&&C(N.key);break}}};c.useEffect(()=>{if(!p)return;const S=N=>{x.current?.contains(N.target)||v()};return document.addEventListener("pointerdown",S),()=>document.removeEventListener("pointerdown",S)},[p,v]);const E=p?l:j?.label??t??"",K=p&&g>=0?A[g]:void 0;return n.jsxs(_s,{ref:x,children:[n.jsx(Cs,{ref:b,id:i,"aria-label":d,value:E,placeholder:t?void 0:a,$hasValue:!!t&&!p,$retired:I&&!p,"aria-invalid":I&&!p?!0:void 0,"aria-describedby":I&&!p?R:void 0,onFocus:W,onBlur:v,onChange:S=>{h(S.target.value),m(-1)},onKeyDown:P,role:"combobox","aria-expanded":p,"aria-controls":y,"aria-autocomplete":"list","aria-activedescendant":K?_(K.key):void 0}),I&&!p&&n.jsx(Es,{id:R,children:`This ${s} ${Ss}. Pick another.`}),o&&t&&!p&&n.jsx(Rs,{type:"button","aria-label":`Clear ${s}`,onClick:()=>{r(null),v()},children:"×"}),p&&n.jsx(go,{id:y,groups:D,flatOptions:A,activeIndex:g,selectedKey:t,getOptionId:_,onHoverIndex:m,onSelectKey:C,ariaLabel:d??"Data keys",renderItem:S=>n.jsxs(n.Fragment,{children:[n.jsx(As,{children:S.label??S.key}),S.unit&&n.jsx(Ps,{children:S.unit})]})})]})}const _s=u.div`
  position: relative;
`,Cs=u.input`
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

  ${fe}

  &::placeholder {
    color: var(--color-text-faint);
  }
`,Rs=u.button`
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

  ${fe}
`,Es=u.div`
  color: var(--color-nogo-text);
  font-size: var(--font-size-compact);
  margin-top: var(--gap-caption);
`,As=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
`,Ps=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  margin-left: var(--gap-trailing-mark);
`,zt={left:!1,right:!1};function Is(e){const[t,r]=c.useState(zt),o=c.useRef(zt);return c.useEffect(()=>{if(!e)return;const a=()=>{const d=e.scrollLeft>1,l=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===d&&o.current.right===l||(o.current={left:d,right:l},r(o.current))};a(),e.addEventListener("scroll",a,{passive:!0});const s=typeof ResizeObserver>"u"?null:new ResizeObserver(a);s?.observe(e);for(const d of Array.from(e.children))s?.observe(d);const i=new MutationObserver(()=>{for(const d of Array.from(e.children))s?.observe(d);a()});return i.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",a),s?.disconnect(),i.disconnect()}},[e]),t}const Ft=u.div`
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
`;function Ts({label:e,selected:t,count:r,onToggle:o}){return n.jsxs(Os,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[n.jsx("span",{children:e}),r!==void 0&&n.jsx(Ms,{children:r})]})}const Os=u.button`
  ${st("chip")}
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

  ${fe}
`,Ms=u.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function zs({value:e,onChange:t,clearLabel:r="Clear search",className:o,...a}){const s=c.useRef(null);return n.jsxs(Fs,{className:o,children:[n.jsx(Ls,{...a,ref:s,type:"search",value:e,onChange:i=>t(i.target.value)}),e!==""&&n.jsx(Ds,{type:"button","aria-label":r,onClick:()=>{t(""),s.current?.focus()},children:n.jsx(Ur,{size:"var(--icon-size-control)"})})]})}const Fs=u.div`
  position: relative;
  display: flex;
  align-items: center;
`,Ls=u(Gr)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,Ds=u(Kr)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function Bs({segment:e="filters",label:t="Search",placeholder:r="Filter..."}={}){const o=eo(e),a=[...new Set(o)],[s,i]=c.useState(()=>new Set),[d,l]=c.useState(""),h=c.useId(),p=x=>{i(b=>{const y=new Set(b);return y.has(x)?y.delete(x):y.add(x),y})},f=[...s,d].filter(x=>x.length>0).map(x=>x.toLowerCase()),g=n.jsxs(ot,{gap:"related-packed",children:[a.length>0&&n.jsx(qr,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:a.map(x=>n.jsx(Ts,{label:x,selected:s.has(x),onToggle:()=>p(x)},x))}),n.jsxs(Vr,{children:[n.jsx(Yr,{htmlFor:h,children:t}),n.jsx(zs,{id:h,value:d,placeholder:r,onChange:l})]})]}),m={matches:x=>{const b=x.toLowerCase();return f.every(y=>b.includes(y))},active:f.length>0};return Un.set(m,g),m}const Un=new WeakMap;function Gn(e){return Un.get(e)??null}function Ns({filter:e,children:t,fill:r=!1}){return n.jsxs(ot,{gap:"related-dense",fill:r,children:[Gn(e),t]})}function fd({rows:e,segment:t="filters",emptyLabel:r="Nothing matches the filter"}){const o=Bs({segment:t}),a=e.filter(s=>o.matches(s.searchText));return n.jsx(Ns,{filter:o,children:a.length>0?n.jsx(ot,{gap:"related",children:a.map(s=>n.jsx("div",{children:s.node},s.id))}):n.jsx(on,{children:r})})}const Hs=24,Ws=96;function Us({children:e,padded:t,caption:r,footer:o,strip:a,...s}){const i=a!=null&&a!==!1;return n.jsxs(Gs,{$padded:t&&!i,$stacked:i,...s,children:[i?n.jsxs(n.Fragment,{children:[n.jsx(Ks,{$padded:t,children:e}),n.jsx(qs,{"data-framed-display-strip":"",children:a})]}):e,r!=null&&n.jsx(Kn,{children:r}),o!=null&&n.jsx(Vs,{children:o})]})}const Gs=u.div`
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
`,Ks=u.div`
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
`,qs=u.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${Hs}px;
  max-height: ${Ws}px;
  min-width: 0;
  overflow: hidden;
`,Kn=u.div`
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
`,Vs=u(Kn)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,Lt={width:160,height:72},Ys=2.5,Qs=420;function pd({width:e,height:t,plotHasData:r}){return!r&&e>=Lt.width&&t>=Lt.height?"center":e>=Qs&&e>=t*Ys?"beside":"inline"}const Xs={overlay:k`
    position: absolute;
    bottom: var(--offset-graph-notice-bottom);
    left: var(--offset-graph-notice-left);
  `,center:k`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    text-align: center;
  `,inline:k`
    flex: 0 0 auto;
    align-self: flex-start;
    max-width: 100%;
    margin-top: var(--gap-sub-readout);
  `,beside:k`
    flex: 0 1 30%;
    align-self: flex-start;
    max-width: 40%;
  `};function Zs({placement:e,role:t="status",children:r,...o}){return n.jsx(Js,{$placement:e,role:t,...o,children:r})}const Js=u.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${Mr.regular};
  pointer-events: none;

  ${({$placement:e})=>Xs[e]}
`,ei=32,ti=25,Dt=8;function ni(e,t){return{pxW:e*ei+(e-1)*Dt,pxH:t*ti+(t-1)*Dt}}const ri="8px";function qn({percent:e,tone:t,fillColor:r,trackHeld:o=!1,fillHeld:a=!1,children:s,...i}){return n.jsxs(oi,{"data-track-held":o?"":void 0,...i,children:[e!==null&&n.jsx(si,{$tone:t,$fillColor:r,$held:a,"data-fill-held":a?"":void 0,style:{width:`${e}%`}}),o&&n.jsx(ai,{"data-track-hatch":"",style:{left:`${e??0}%`}}),s]})}const oi=u.div`
  width: 100%;
  border-radius: var(--radius-pill);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  overflow: hidden;
  /* Positioned for the fill only: this overflow rounds the fill's ends and would clip any mark drawn over it. */
  position: relative;
  height: ${ri};
`,ai=u.div`
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
`,si=u.div`
  height: 100%;
  border-radius: var(--radius-pill);
  transition: width var(--duration-slow) var(--ease-standard);
  /* A held reading dims the fill, not the hue and not the whole bar, so a label beside it stays readable. */
  ${({$held:e})=>e?"opacity: 0.55;":""}
  background: ${({$tone:e,$fillColor:t})=>t??O[e]};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function gd({label:e,value:t,capacity:r,format:o,tone:a="neutral",fillColor:s,valueLabel:i,valueLabelNode:d,layout:l="stacked",hideLabel:h=!1,statement:p=!1,...f}){const g=Bt(t),m=Bt(r),x=ii(g.figure,r===void 0?void 0:m.figure);if(x===null||!Number.isFinite(x))return h?null:n.jsx(Zn,{layout:l,label:e,display:n.jsx(zr,{}),...f,children:n.jsx(qn,{percent:null,tone:a,"aria-hidden":"true"})});const b=Math.min(1,Math.max(0,x)),y={label:e,layout:l,hideLabel:h,statement:p,pct:Math.round(b*100),tone:a,fillColor:s,trackHeld:m.reading?.state==="held"&&!jt(m.figure),fillHeld:g.reading?.state==="held"&&!jt(g.figure),...f},$=Ze(1,Xe(m.reading,m.figure,m.figure));if(r!==void 0)return n.jsx(Yo,{of:g.figure?.unit,format:o,children:n.jsx(di,{...y,value:t,capacity:r,shown:g,held:m,endBounds:$,at:b,valueLabel:i,valueLabelNode:d})});const R=Ze(b,Xe(g.reading,g.figure,null));return n.jsx(Xn,{...y,bounds:R,endBounds:$,display:d??(i===void 0?n.jsx(Y,{value:t,format:o}):n.jsx(Yn,{caption:Ee(t),children:i})),spoken:Qn(i===void 0?J(g.figure,{format:o}):Vn(i,Ee(t)),R,$)})}function Ee(e){const{held:t,caption:r}=Te(e??null);return t?r:null}function Vn(e,t){return t===null?e:`${e}, ${t}`}function Yn({caption:e,children:t}){return e===null?n.jsx(n.Fragment,{children:t}):n.jsx(it,{caption:e,children:t})}function Bt(e){return typeof e!="object"||e===null||!("state"in e)?{figure:e??null,reading:null}:{figure:e.value??null,reading:e}}function ii(e,t){return e===null||t===null||t!==void 0&&!t.isPositive()?null:(t===void 0?e:e.dividedBy(t)).magnitude}function Xe(e,t,r){if(e===null||e.reckoning.status!=="available"||t===null)return null;const o=gn(e.reckoning.band,t.unit);if(!o)return null;const a={loSaid:o.lo,hiSaid:o.hi,kind:o.kind};return r===null?{lo:be(o.lo,0),hi:be(o.hi,0),...a}:r.isPositive()?{lo:be(o.lo.dividedBy(r),0),hi:be(o.hi.dividedBy(r),0),...a}:null}function Ze(e,t){return t===null?null:_e(e,[t.lo,t.hi],Do())?t:null}function Qn(e,t,r,o){const a=(i,d)=>{const l=J(i.loSaid,o),h=J(i.hiSaid,o);return sn(i.kind,`${d}with bands at ${l} and ${h}`)},s=[t===null?null:a(t,""),r===null?null:a(r,"capacity ")].filter(i=>i!==null);return s.length===0?e:`${e}, ${s.join(", ")}`}function li(e){if(!Number.isFinite(e))return 0;const t=Math.min(1,Math.max(0,e));return Math.round(t*1e4)/100}function $e(e){const t=li(e),r=t<=0?0:t>=100?-2:-1;return{style:{left:`${t}%`,transform:`translateX(${r}px)`}}}function Xn({label:e,layout:t,hideLabel:r,statement:o,pct:a,tone:s,fillColor:i,trackHeld:d,fillHeld:l,display:h,spoken:p,bounds:f,endBounds:g,...m}){return n.jsxs(Zn,{layout:t,label:e,display:h,hideHead:r,statement:o,...m,children:[n.jsx(qn,{percent:a,tone:s,fillColor:i,trackHeld:d,fillHeld:l,role:"meter","aria-label":e,"aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":p}),(f!==null||g!==null)&&n.jsxs(gi,{"aria-hidden":"true",children:[f!==null&&n.jsxs(n.Fragment,{children:[n.jsx(je,{"data-bound":"lo",...$e(f.lo)}),n.jsx(je,{"data-bound":"hi",...$e(f.hi)})]}),g!==null&&n.jsxs(n.Fragment,{children:[n.jsx(je,{"data-end-bound":"lo",...$e(g.lo)}),n.jsx(je,{"data-end-bound":"hi",...$e(g.hi)})]})]})]})}function Zn({layout:e,label:t,display:r,hideHead:o=!1,statement:a=!1,children:s,...i}){return o?n.jsxs(We,{$row:!1,...i,children:[n.jsx(Ue,{$row:!1,children:s}),a&&n.jsx(pi,{"data-meter-part":"statement",children:r})]}):e==="row"?n.jsxs(We,{$row:!0,"data-meter-row":"",...i,children:[n.jsx(Ht,{"data-meter-part":"label",children:t}),n.jsx(Ue,{$row:!0,"data-meter-part":"bar",children:s}),n.jsx(Wt,{$row:!0,"data-meter-part":"figure",children:r})]}):n.jsxs(We,{$row:!1,...i,children:[n.jsxs(fi,{children:[n.jsx(Ht,{children:t}),n.jsx(Wt,{$row:!1,children:r})]}),n.jsx(Ue,{$row:!1,children:s})]})}function di({value:e,capacity:t,shown:r,held:o,at:a,valueLabel:s,valueLabelNode:i,...d}){const l=s===void 0,h=Ye(l?r.figure:void 0),p=Ye(l?o.figure:void 0),f=h??p??{},g=Ee(e)??Ee(t),m=d.statement?" of ":" / ",x=i??(s!==void 0?n.jsx(Yn,{caption:g,children:s}):d.layout==="row"?n.jsxs(mi,{$marked:d.fillHeld||d.trackHeld,children:[n.jsx(Y,{value:e,hideUnitInGroup:!0}),m,n.jsx(Y,{value:t}),(d.fillHeld||d.trackHeld)&&n.jsx(xn,{"aria-hidden":"true","data-held-mark":""})]}):n.jsxs(n.Fragment,{children:[n.jsx(Y,{value:e}),m,n.jsx(Y,{value:t})]})),b=s===void 0?`${J(r.figure,f)} of ${J(o.figure,f)}`:Vn(s,g),y=Ze(a,Xe(r.reading,r.figure,o.figure));return n.jsx(Xn,{...d,display:x,spoken:Qn(b,y,d.endBounds,f),bounds:y})}const Je=48;function md({children:e,...t}){const r=c.useRef(null);return c.useLayoutEffect(()=>{const o=r.current;if(!o||typeof ResizeObserver>"u")return;const a=()=>{o.clientWidth!==0&&o.toggleAttribute("data-figures-below",!ci(o))},s=new ResizeObserver(a),i=()=>{s.disconnect(),s.observe(o);for(const l of Jn(o))s.observe(l)},d=new MutationObserver(i);return d.observe(o,{childList:!0,subtree:!0}),i(),a(),()=>{s.disconnect(),d.disconnect()}},[]),n.jsx(hi,{ref:r,...t,children:e})}const vd=u.div.attrs({"data-meter-row-group":""})`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  row-gap: var(--gap-meter-rows);
  min-width: 0;

  & > * {
    grid-column: 1 / -1;
    min-width: 0;
  }
`;function Jn(e){return Array.from(e.querySelectorAll(':scope > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row] > [data-meter-part="figure"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="figure"]'))}function ci(e){const t=Jn(e);if(t.length===0)return!0;let r=0,o=0;for(const l of t)l.dataset.meterPart==="label"?r=Math.max(r,ui(l)):o=Math.max(o,l.scrollWidth);const a=getComputedStyle(e),s=l=>Number.parseFloat(l)||0,i=s(a.columnGap),d=e.clientWidth-s(a.paddingLeft)-s(a.paddingRight);return r+i+Je+i+o<=d}function ui(e){const t=e.style.whiteSpace;e.style.whiteSpace="nowrap";const r=e.scrollWidth;return e.style.whiteSpace=t,r}const hi=u.div`
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
`,Nt="1px",We=u.div`
  display: flex;
  width: 100%;
  min-width: 0;
  ${({$row:e})=>e?k`
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          column-gap: var(--gap-meter-columns);
          row-gap: var(--gap-caption);
        `:k`
          flex-direction: column;
          gap: var(--gap-caption);
        `}
`,fi=u.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--gap-label-value);
  min-width: 0;
  /* The value may drop to its own line at narrow widths rather than crushing the label. */
  flex-wrap: wrap;
`,Ht=u.span`
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
`,Wt=u.span`
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
`,pi=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,gi=u.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,Ue=u.div`
  position: relative;
  ${({$row:e})=>e?k`
          flex: 1 1 28px;
          min-width: 28px;
        `:""}
`,mi=u(wn)`
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
`,je=u.div`
  position: absolute;
  top: ${Nt};
  bottom: ${Nt};
  width: 2px;
  background: var(--color-text-primary);
  /* Inset and outset, so the mark keeps an edge against a light or saturated fill on either side of its end. */
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 0.55),
    inset 0 0 0 0.5px rgb(0 0 0 / 0.35);
  opacity: 0.62;
  pointer-events: none;
`;function vi(e){if(Ce(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,r=e.ribbons?.length??0,o=e.streams?.length??0;return t===null||t<=0?!1:r>0||t>=An&&o>0}return e.inFlight.length>0}function er({tiny:e}={}){const t=ks(),r=t.filter(vi),o=t.flatMap(v=>(v.refusals??[]).map(C=>({...C,tags:v.tags}))),a=t.flatMap(v=>(v.losses??[]).map(C=>({...C,tags:v.tags}))),s=t.flatMap(v=>(v.founds??[]).map(C=>({...C,tags:v.tags}))),i=t.flatMap(v=>(v.undelivered??[]).map(C=>({...C,tags:v.tags}))),d=o.length+i.length,l=r.length>0||d>0||a.length>0||s.length>0,[h,p]=c.useState(!1),[f,g]=c.useState(!1),[m,x]=c.useState(!1),b=h||f&&!m,y=c.useId(),$=[...r.filter(v=>Ce(v.tags)==="ribbon"),...r.filter(v=>Ce(v.tags)!=="ribbon")],_=t.some(v=>v.dismiss&&(v.refusals?.length??0)>0)?v=>t.find(C=>C.refusals?.some(P=>P.id===v))?.dismiss?.(v):void 0,I=t.some(v=>v.dismiss&&(v.losses?.length??0)>0)?v=>t.find(C=>C.losses?.some(P=>P.id===v))?.dismiss?.(v):void 0,D=t.some(v=>v.dismiss&&(v.undelivered?.length??0)>0)?v=>t.find(C=>C.undelivered?.some(P=>P.id===v))?.dismiss?.(v):void 0,W=t.some(v=>v.dismiss&&(v.founds?.length??0)>0)?v=>t.find(C=>C.founds?.some(P=>P.id===v))?.dismiss?.(v):void 0;return n.jsxs(xi,{"data-panel-rail-frame":"",$tiny:e,$hasContent:l,children:[t.length>0&&n.jsxs(Oe,{visuallyHidden:!0,additionsOnly:!0,children:[o.map(v=>n.jsx("span",{children:ut(v)},`refusal:${v.id}`)),a.map(v=>n.jsx("span",{children:Sn(v)},`loss:${v.id}`)),i.map(v=>n.jsx("span",{children:Hn(v)},`undelivered:${v.id}`)),s.map(v=>n.jsx("span",{children:kn(v)},`found:${v.id}`))]}),l?n.jsxs(wi,{"data-panel-rail":"","data-grown":b,"data-pinned":h,"data-suppress-hover":m,onMouseEnter:()=>{x(!1),g(!0)},onMouseLeave:()=>g(!1),onKeyDown:v=>{v.key==="Escape"&&h&&(v.stopPropagation(),p(!1),x(!0))},children:[n.jsx(yi,{type:"button","aria-expanded":h,"aria-controls":y,"aria-label":"Signal-delay detail",onClick:()=>{p(v=>{const C=!v;return C||x(!0),C})},children:n.jsx(Si,{"aria-hidden":"true",hidden:!b,children:"▲"})}),n.jsxs($i,{id:y,"data-panel-rail-detail":"",children:[$.map(v=>n.jsx(as,{handle:v,variant:b?"expanded":"rail",ariaLabel:v.ariaLabel??(b?"Delay detail":void 0)},v.id)),!b&&(d>0||a.length>0||s.length>0)&&n.jsxs(ji,{children:[d>0&&n.jsx(Ut,{children:d===1?"1 command failed":`${d} commands failed`}),a.length>0&&n.jsx(Ut,{children:a.length===1?"1 command unconfirmed":`${a.length} commands unconfirmed`}),s.length>0&&n.jsx(ki,{children:s.length===1?"1 unconfirmed command answered":`${s.length} unconfirmed commands answered`})]})]})]}):null,b&&o.length>0&&n.jsx(ye,{kind:"refused",entries:o,onDismiss:_,live:!1}),b&&a.length>0&&n.jsx(ye,{kind:"lost",entries:a,onDismiss:I,live:!1}),b&&i.length>0&&n.jsx(ye,{kind:"undelivered",entries:i,onDismiss:D,live:!1}),b&&s.length>0&&n.jsx(ye,{kind:"found",entries:s,onDismiss:W,live:!1})]})}const xi=u.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,bi=k`
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
`,wi=u.div`
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
    ${bi}
  }
`,yi=u.button`
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

  ${pe}

  &[aria-expanded="true"] {
    pointer-events: none;
  }

`,$i=u.div`
  display: contents;
`,Ut=u.span`
  color: ${G.warn};
`,ji=u.span`
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
`,ki=u.span`
  color: var(--color-info-text);
`,Si=u.span`
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
`,tr=c.createContext(null);function xd({badges:e,children:t}){return n.jsx(tr.Provider,{value:e,children:t})}function _i(){return c.useContext(tr)}function nr({severity:e,count:t=1}){const r=t>1;return n.jsx(Ci,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":r?`${t} ${Ge[e]}`:Ge[e],$mark:O[e],$digits:r?String(t).length:1,children:r&&n.jsx(Ri,{$fill:Lr[e],$ink:Fr[e],children:t})})}const Gt="8px",Ci=u.span`
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* One fixed diameter whether or not a count is shown; the count is out of flow, so it cannot affect this box's size. */
  height: ${Gt};
  /* The count's own size, so the width below can be counted in its digits. */
  font-size: 7px;
  /* More than one digit grows the dot sideways into a pill, keeping its height and its place on the title's line. */
  width: ${({$digits:e})=>e>1?`calc(${e}ch + 4px)`:Gt};
  border-radius: ${({$digits:e})=>e>1?"var(--radius-pill)":"var(--radius-circle)"};
  background: ${({$mark:e})=>e};
  /* A rim in a lighter tint of the dot's own fill plus a glow bloom, so the dot reads as a lit indicator. */
  box-shadow:
    0 0 0 1px color-mix(in srgb, ${({$mark:e})=>e} 78%, white),
    0 0 4px 1px ${({$mark:e})=>e};
`,Ri=u.span`
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
`,Ei=()=>()=>{},Kt=()=>to;function Ai(){const e=hn();return c.useSyncExternalStore(e?e.subscribe:Ei,e?e.getBreakdown:Kt,e?e.getBreakdown:Kt)}const Pi=()=>()=>{},qt=()=>null;function Ii(){const e=hn();return c.useSyncExternalStore(e?e.subscribe:Pi,e?e.getSummary:qt,e?e.getSummary:qt)}const Ti=12;function Oi(e,t){if(!e||typeof document>"u")return 0;const r=e.cloneNode(!0);r.textContent=t,r.style.position="fixed",r.style.visibility="hidden",r.style.pointerEvents="none",r.style.left="-99999px",r.style.top="-99999px",r.style.width="max-content",r.style.maxWidth="none",document.body.appendChild(r);const o=r.getBoundingClientRect().width;return document.body.removeChild(r),o}function Mi(e,t,r){if(t<=0||r.length===0||r[0]<=0)return 0;for(let o=0;o<r.length;o++){const a=o<e?t-Ti:t;if(r[o]<=a)return o}return r.length-1}function zi(e,t,r){const[o,a]=c.useState(0),s=c.useRef(o);s.current=o;const i=[t,...r].join(`
`),d=c.useCallback(()=>{const l=e.current,h=i.split(`
`);if(!l||h.length<2){s.current!==0&&(s.current=0,a(0));return}const p=h.map(g=>Oi(l,g)),f=Mi(s.current,l.clientWidth,p);f!==s.current&&(s.current=f,a(f))},[e,i]);return c.useLayoutEffect(()=>{d()},[d]),c.useEffect(()=>{const l=e.current;if(!l||typeof ResizeObserver>"u")return;const h=new ResizeObserver(()=>d());return h.observe(l),()=>h.disconnect()},[e,d]),{index:o,compacted:o>0}}const Fi=24;function Li(e,t,r,o){if(t<=0||r<=0)return e;const a=o!==void 0&&o>0&&o!==r;return e&&!a?!(t>r+Fi):r>t}function Vt(e,t={},r){const o=e?.parentNode;if(!e||!o)return 0;const a=e.cloneNode(!0);r!==void 0&&(a.textContent=r),Object.assign(a.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),a.setAttribute("aria-hidden","true"),o.insertBefore(a,e.nextSibling);const s=a.getBoundingClientRect().width;return o.removeChild(a),s}const Di={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function ie(e){return Number.parseFloat(e)||0}function Bi(e,t,r,o){const[a,s]=c.useState(!1),i=c.useRef(a);i.current=a;const d=c.useRef(void 0),l=c.useRef(o);l.current=o;const h=c.useCallback(()=>{const f=e.current;if(!f)return;const g=getComputedStyle(f),m=f.getBoundingClientRect().width-ie(g.paddingLeft)-ie(g.paddingRight),x=Vt(t.current,{},l.current),b=Vt(r.current,Di),y=r.current?.closest("[data-panel-aside-expand]")?.parentElement,$=y?getComputedStyle(y):null,R=x===0||b===0?x+b:x+ie(g.columnGap)+ie($?.paddingLeft??"")+ie($?.paddingRight??"")+b,_=Li(i.current,m,R,d.current);R>0&&(d.current=R),_!==i.current&&(i.current=_,s(_))},[e,t,r]),p=c.useRef({title:null,aside:null,observer:null});return c.useLayoutEffect(()=>{const f=t.current,g=r.current,m=p.current;if(m.observer===null||m.title!==f||m.aside!==g){m.observer?.disconnect(),m.title=f,m.aside=g,m.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>h());for(const x of[f,g])x&&m.observer?.observe(x,{subtree:!0,childList:!0,characterData:!0,attributes:!0});h();return}m.observer.takeRecords().length>0&&h()}),c.useEffect(()=>{const f=p.current;return()=>{f.observer?.disconnect(),f.observer=null}},[]),c.useEffect(()=>{const f=e.current;if(!f||typeof ResizeObserver>"u")return;const g=new ResizeObserver(()=>h());return g.observe(f),r.current&&g.observe(r.current),()=>g.disconnect()},[e,r,h]),a}const rr=c.createContext("full"),Ni=rr.Provider;function bd(){return c.useContext(rr)}const mt=c.createContext(null);function or({children:e}){const[t,r]=c.useState(null),o=c.useMemo(()=>({scroller:t,registerScroller:r}),[t]);return n.jsx(mt.Provider,{value:o,children:e})}function Hi({children:e}){return n.jsx(or,{children:e})}const ar=`
  & > [${fn}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,Ae=u.div`
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
  ${({$hoverTitle:e})=>e?pe:""}
  /* A hand-composed panel can put sections straight in here, so this box owns the leftover height. */
  ${ar}
`,Wi=u.h3`
  margin: 0;
  /* No top inset: PanelHeader__Row carries it, so the header pays for it once. */
  padding: var(--inset-panel-header);
  ${un}
  /* Flush, so the all-caps glyphs centre on the box the row aligns the aside against. */
  line-height: var(--line-height-flush);
  /* One line always: a wrapped title would push the aside down. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,sr=c.forwardRef(function({compact:t,children:r,...o},a){const s=c.useRef(null),i=typeof r=="string"?r:"",d=t===void 0||i===""?Ui:typeof t=="string"?[t]:t,{index:l,compacted:h}=zi(s,i,d);return n.jsx(ae,{text:h?i:void 0,children:n.jsx(Wi,{...o,ref:p=>{if(s.current=p,typeof a=="function"){a(p);return}a&&(a.current=p)},"aria-label":h?i:void 0,children:l===0?r:d[l-1]})})}),Ui=[],Gi=u.div`
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
`,Ki=u.div`
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
`,qi=u.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,Vi=u.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,Yi=u.details`
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
    ${fe}
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

  ${({$collapsed:e})=>e&&k`
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
`;function ir({title:e,compactTitle:t,aside:r,toolbar:o,...a}){const s=Ai(),i=c.useRef(null),d=c.useRef(null),l=c.useRef(null),h=Bi(i,d,l,typeof e=="string"?e:void 0),[p,f]=c.useState(!1);return c.useEffect(()=>{h||f(!1)},[h]),n.jsxs(Gi,{ref:i,"data-panel-header":"",...a,children:[n.jsxs(Ki,{children:[e!==void 0&&n.jsx(sr,{ref:d,compact:t,children:e}),n.jsx(qi,{"aria-hidden":"true",children:n.jsx(Se,{children:null})})]}),r!==void 0&&n.jsx(Vi,{children:n.jsxs(Yi,{"data-panel-aside-expand":"",$collapsed:h,open:h?p:!0,onToggle:g=>{h&&f(g.currentTarget.open)},children:[n.jsxs("summary",{"aria-label":s.length===0?"Panel status and controls":`${s.map(g=>`${g.count} ${Ge[g.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(g=>n.jsx(nr,{severity:g.severity,count:g.count},g.severity)),n.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),n.jsx(Ni,{value:h?"collapsed":"full",children:n.jsx("div",{"data-panel-aside-full":"",ref:l,children:r})})]})}),o!==void 0&&n.jsx(lr,{children:o})]})}const lr=u.div`
  ${st("panel-toolbar")}
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
`,Qi=u.div`
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
  ${pe}
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
  ${({$loneFrame:e})=>e?`@container (width < ${Xi}) {
           --panel-body-gutter: var(--inset-tiny);
           --panel-body-bottom: var(--inset-tiny);
         }`:""}
  /* The title row is out of flow entirely (see PanelHoverTop), so the body
     takes the same thin inset a lone framed drawing gets under a narrow
     container, unconditionally: a hoverTitle panel is always that narrow. */
  ${({$hoverTitle:e})=>e?`--panel-body-gutter: var(--inset-tiny);
         --panel-body-bottom: var(--inset-tiny);`:""}
  ${ar}
  /* A lone drawing is the whole body, so nothing squeezes it and it keeps giving room back. */
  ${({$loneFrame:e})=>e?`& > [${fn}] {
           min-height: 0;
         }`:""}
`,Xi="25rem";function dr({children:e,fitToSize:t,loneFrame:r,hoverTitle:o,...a}){const i=c.useContext(mt)?.registerScroller,[d,l]=c.useState(null),h=c.useCallback(f=>{i?.(f),l(f)},[i]),p=dn(d);return n.jsx(Qi,{ref:h,tabIndex:p,"data-panel-body":"",$fitToSize:t,$loneFrame:r,"data-panel-lone-frame":r?"":void 0,$hoverTitle:o,...a,children:e})}const Zi="13rem",Ji=u.div`
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
  & > [${no}] {
    grid-column: 1 / -1;
  }
`;function el({children:e,hoverTitle:t}){const r=c.useRef(null),o=c.useRef(null),a=rl(r,o);return n.jsx(tl,{ref:r,$fits:a,"data-panel-fit-body":"",children:n.jsx(nl,{ref:o,$fits:a,$hoverTitle:t,children:e})})}const tl=u.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,nl=u.div`
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
`;function rl(e,t){const[r,o]=c.useState(!0);return c.useLayoutEffect(()=>{const a=e.current,s=t.current;if(!a||!s)return;const i=()=>{o(al(ol(s),a.clientHeight))};if(i(),typeof ResizeObserver>"u")return;const d=new ResizeObserver(i),l=()=>{d.observe(a),d.observe(s);for(const p of Array.from(s.children))d.observe(p)};l();const h=new MutationObserver(()=>{l(),i()});return h.observe(s,{childList:!0}),()=>{d.disconnect(),h.disconnect()}},[e,t]),r}function ol(e){const t=Array.from(e.children,r=>r.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(r=>r.bottom))-Math.min(...t.map(r=>r.top))}function al(e,t){return e<=t}const sl=u.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,il=u.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${pe}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,Pe=u.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e,$topOffset:t})=>e==="top"?`top: ${t??"0"};`:"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: 44px;
  /* The audit reads the mask depth from the gradient, so the literal height costs it nothing. */
  ${Eo("panel-scroll-glow")}
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
`,ll=c.forwardRef(function({children:t,...r},o){const a=c.useRef(null),[s,i]=c.useState(null),d=c.useCallback(p=>{a.current=p,i(p)},[]);c.useImperativeHandle(o,()=>a.current);const l=cn(s,hr,fr,ur),h=dn(s);return n.jsxs(sl,{...r,children:[n.jsx(il,{ref:d,tabIndex:h,"data-scroll-area-inner":"",children:t}),n.jsx(Pe,{$position:"top",$visible:l.top}),n.jsx(Pe,{$position:"bottom",$visible:l.bottom})]})});function dl(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const r=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(r)?r:16)}}}const Yt="14rem",cl=5,ul="45%",hl=`min(${ni(1,cl).pxH}px, ${ul})`;function Qt(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const fl=u.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:r})=>e==="inline"?`grid-template-columns: ${Qt(t,r)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${Qt(t,r)};`}

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
`;function pl({side:e="end",size:t,railBand:r,children:o,...a}){const{ref:s,size:i}=ge({w:1,h:1}),d=dl(t??Yt),l=i.w<=1||d===void 0||i.w>=d*2,h=i.w>=i.h&&l?"inline":"block",p=t??(h==="inline"?Yt:hl);return n.jsx(fl,{ref:s,"data-panel-split":h,$axis:h,$side:e,$size:p,$railBand:r,...a,children:o})}const gl=u(ll)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,ml=u.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function cr({children:e,...t}){return n.jsx(ml,{"data-panel-sidebar":"",...t,children:n.jsx(gl,{children:e})})}const ur={top:!1,bottom:!1};function hr(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function fr(e,t){return e.top===t.top&&e.bottom===t.bottom}const vl=u.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function pr({children:e,railBandAbove:t,...r}){const o=c.useContext(mt),a=o?.scroller??null;c.useEffect(()=>{},[o]);const s=cn(a,hr,fr,ur);return n.jsxs(vl,{...r,children:[e,n.jsx(Pe,{$position:"top",$visible:s.top,$topOffset:t?"var(--panel-rail-band)":void 0}),n.jsx(Pe,{$position:"bottom",$visible:s.bottom})]})}function xl(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const r=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!r.has(o.id))]}const wd=["sections","actions"],et=Object.freeze({});function Xt(){return n.jsx(Ke,{segment:"sections",props:et})}function bl({summary:e}){const t=c.useRef(e.severity),[r,o]=c.useState(0);return c.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(a=>a+1))},[e.severity]),n.jsx(wl,{$pulse:r,children:n.jsx(Se,{tone:e.severity,size:"sm",children:e.label})})}const wl=u.span`
  display: inline-flex;
  ${({$pulse:e})=>e>0&&k`
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
`,gr=u.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,yl=u.div`
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
`;function $l({render:e}){const{ref:t,size:r}=ge({w:0,h:0});return n.jsx(jl,{ref:t,"data-panel-trend":"",children:r.w>0&&r.h>0&&e(r)})}const jl=u.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,kl=u.div`
  flex: 1 1 100%;
  min-width: 0;
`,Sl=u(ir)`
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
`,_l=u.div`
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
`,Cl=u(he)`
  margin: 0;
  ${un}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${Ae}:hover &,
  ${Ae}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function Rl(e){let t=null;for(const r of e){const{label:o,tone:a}=ct(r);a===void 0||a==="neutral"||(t===null||$t(a)>$t(t.severity))&&(t={severity:a,label:o})}return t}function Zt({badges:e}){return n.jsx(n.Fragment,{children:e.map(t=>n.jsx(El,{entry:t},t.id))})}function El({entry:e}){const{label:t,tone:r}=ct(e);return rt(r===void 0||r==="neutral"?null:{id:e.id,severity:r,label:t}),null}function Al({summary:e,announcement:t}){return n.jsxs(n.Fragment,{children:[n.jsx(ae,{text:e.label,focusable:!0,children:n.jsx(Pl,{children:n.jsx(nr,{severity:e.severity})})}),n.jsx(Oe,{visuallyHidden:!0,assertive:!0,children:t})]})}const Pl=u.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,Il=u.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function Tl(e){return e.hoverTitle?n.jsx(Ol,{...e}):n.jsx(mr,{...e,hoverTitleId:void 0})}function Ol(e){const t=c.useId();return n.jsx(mr,{...e,hoverTitleId:t})}function mr({panelTitle:e,compactTitle:t,panelAside:r,panelBadges:o,panelStatus:a,panelToolbar:s,panelFilter:i,panelFooter:d,panelTrend:l,inactive:h,fitToSize:p,hoverTitle:f,hoverTitleId:g,panelSidebar:m,sidebarSide:x,sidebarSize:b,panelSections:y=!0,sections:$,sectionMinWidth:R=Zi,children:_,...j}){const I=_i(),B=yt("actions"),D=yt("sections"),A=xl(o,I),W=A.length===0?null:A.map(T=>{const{label:U,tone:q,title:yr}=ct(T);return n.jsx(ae,{text:yr,focusable:!0,children:n.jsx(Se,{tone:q,report:q===void 0||q==="neutral"?void 0:{id:T.id},children:U})},T.id)}),v=i===void 0?s:n.jsxs(n.Fragment,{children:[s,n.jsx(kl,{children:Gn(i)})]}),C=a??null,P=C!==null&&C!=="none"&&C!=="live"?C:null;rt(P?{id:"stream",severity:ke(P),label:bt(P)??""}:null);const E=Ii(),K=E!==null&&A.some(T=>T.id===E.id),S=P===null?null:bt(P),N=K?null:E!==null?n.jsx(bl,{summary:E}):P===null||S===null?null:n.jsx(Se,{tone:ke(P),size:"sm",children:S}),w=E?.label??S,M=w===null||w===""?"":typeof e=="string"?`${e}: ${w}`:`Status: ${w}`,z=r===void 0&&N===null&&W===null&&!B?void 0:n.jsxs(n.Fragment,{children:[r,B&&n.jsx(Ke,{segment:"actions",props:et}),W,N]}),F=E??Rl(A)??(P===null||S===null?null:{severity:ke(P),label:S}),L=F?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${F.label}`:`Status: ${F.label}`,X=r===void 0&&F===null&&!B?A.length===0?void 0:n.jsx(Zt,{badges:A}):n.jsxs(n.Fragment,{children:[r,B&&n.jsx(Ke,{segment:"actions",props:et}),n.jsx(Zt,{badges:A}),F!==null&&n.jsx(Al,{summary:F,announcement:L})]}),ee=h!==void 0,me=ee?[]:c.Children.toArray($),Be=me.length>0,xr=_===void 0&&!(y&&D)&&!p&&me.length===1&&Ml(me[0]),te=[];for(const T of me){const U=!p&&c.isValidElement(T)&&T.props.fill===!0,q=te.at(-1);!U&&q!==void 0&&!q.fill?q.nodes.push(T):te.push({fill:U,nodes:[T]})}y&&Be&&!te.some(T=>!T.fill)&&te.push({fill:!1,nodes:[]});const br=y?te.reduce((T,U,q)=>U.fill?T:q,-1):-1,wr=T=>Math.max(1,T.filter(U=>!(c.isValidElement(U)&&U.props.full===!0)).length),ve=[];for(const T of te){const U=ve.length;if(T.fill){ve.push(T.nodes[0]);continue}ve.push(n.jsxs(Ji,{$min:R,$columns:wr(T.nodes),children:[T.nodes,U===br&&n.jsx(Xt,{})]},`sections-${U}`))}const vt=ee?n.jsx(ro,{reason:h}):Be?n.jsxs(n.Fragment,{children:[_,ve]}):_,xt=n.jsxs(dr,{fitToSize:p,loneFrame:xr,hoverTitle:f,children:[n.jsxs(yl,{"data-panel-sticky-top":"",children:[n.jsx(er,{tiny:f}),!f&&n.jsx(Sl,{title:e,compactTitle:t,aside:z,toolbar:v})]}),p?n.jsx(el,{hoverTitle:f,children:vt}):vt,y&&!Be&&!ee&&n.jsx(Xt,{})]});return n.jsx(Hi,{children:n.jsxs(Ae,{$railTravels:!0,$hoverTitle:f,...f?{tabIndex:0,role:"group","aria-labelledby":g,"data-tiny-panel":""}:{},...j,children:[n.jsx(pr,{railBandAbove:!0,children:m===void 0||ee?xt:n.jsxs(pl,{side:x,size:b,railBand:!0,children:[xt,n.jsx(cr,{children:m})]})}),!ee&&l!==void 0&&n.jsx($l,{render:l}),!ee&&d!==void 0&&n.jsx(gr,{children:d}),f&&n.jsxs(_l,{"data-panel-hover-title":"",children:[n.jsx(Cl,{as:"h3",id:g,children:e}),X!==void 0&&n.jsx(Il,{children:X})]}),n.jsx(Oe,{visuallyHidden:!0,children:f&&L!==void 0?"":M})]})})}function Ml(e){if(!c.isValidElement(e)||e.type!==at||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const r=c.Children.toArray(t).filter(a=>!(c.isValidElement(a)&&a.type===Zs));if(r.length!==1)return!1;const[o]=r;if(!c.isValidElement(o))return!1;if(o.type===Us)return!0;if(o.type!==c.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const yd=Object.assign(Tl,{Context:or,Delay:er,Container:Ae,Header:ir,Toolbar:lr,Footer:gr,Title:sr,Glow:pr,Body:dr,Section:at,Sidebar:cr}),zl=u.div`
  display: ${({$size:e})=>e==="hero"?"flex":"inline-flex"};
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({$tone:e})=>G[e]};
  ${({$size:e})=>e==="hero"?k`
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
        `:k`
          align-items: baseline;
          gap: var(--gap-value-tag);
          /* Display tier: the type scale stops at lg, so this stays literal. */
          font-size: 22px;
        `}
`;function $d({size:e="inline",tone:t="neutral",...r}){return n.jsx(zl,{$size:e,$tone:t,...r})}const jd=u.span`
  font-size: var(--font-size-caption);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-transform: uppercase;
`,vr=240,Fl=8;function Ll(e,t){if(e<=0||t<2)return!1;const r=t*vr+(t-1)*Fl;return e>=r}function kd({tabs:e,activeId:t,onChange:r,expandWhenRoomy:o=!1,"aria-label":a,"aria-labelledby":s,className:i}){const d=c.useId(),l=c.useMemo(()=>e.map((w,M)=>({...w,id:w.id??`tab-${M}`})),[e]),h=t!==void 0,[p,f]=c.useState(()=>t??l[0]?.id??""),g=h?t:p,m=l.find(w=>w.id===g),x=m&&!m.disabled?m:l.find(w=>!w.disabled)??m??l[0],b=c.useCallback(w=>{h||f(w),r?.(w)},[h,r]),y=c.useMemo(()=>l.filter(w=>!w.disabled),[l]),{ref:$,size:R}=ge({w:0,h:0}),_=o&&Ll(R.w,y.length),j=c.useRef(new Map),I=c.useRef(null),B=c.useRef(null),[D,A]=c.useState(!1),[W,v]=c.useState(null),C=c.useCallback(w=>{I.current=w,v(w)},[]),P=Is(W),[E,K]=c.useState(null);c.useLayoutEffect(()=>{const w=I.current;if(!w)return;const M=()=>{A(F=>{F||(B.current=w.scrollWidth);const L=B.current;return L==null?!1:L>w.clientWidth})};M();const z=new ResizeObserver(M);return z.observe(w),()=>z.disconnect()},[_,l.length]),c.useLayoutEffect(()=>{const w=I.current,M=x?j.current.get(x.id):void 0;if(!w||!M){K(null);return}const z=()=>{const L=j.current.get(x?.id??"");L&&K(X=>X&&X.left===L.offsetLeft&&X.width===L.offsetWidth?X:{left:L.offsetLeft,width:L.offsetWidth})};z();const F=new ResizeObserver(z);return F.observe(w),F.observe(M),()=>F.disconnect()},[x?.id,l.length,_]);const S=c.useCallback((w,M)=>{const z=l.length;for(let F=1;F<=z;F++){const L=l[((w+M*F)%z+z)%z];if(!(!L||L.disabled)){b(L.id),j.current.get(L.id)?.focus();return}}},[l,b]),N=c.useCallback(w=>{const M=l.findIndex(z=>z.id===x?.id);if(!(M<0))switch(w.key){case"ArrowRight":case"ArrowDown":w.preventDefault(),S(M,1);break;case"ArrowLeft":case"ArrowUp":w.preventDefault(),S(M,-1);break;case"Home":w.preventDefault(),S(-1,1);break;case"End":w.preventDefault(),S(l.length,-1);break}},[l,x?.id,S]);return _?n.jsx(Jt,{ref:$,"data-tabs-root":"",className:i,children:n.jsx(Qr,{minColWidth:`${vr}px`,align:"start",gap:"related-comfortable",children:y.map(w=>n.jsxs(at,{children:[n.jsxs(oo,{as:"h3",$rule:!0,children:[w.label,w.indicator&&n.jsxs(n.Fragment,{children:[n.jsx(en,{"aria-hidden":"true"}),n.jsx(he,{children:", needs attention"})]})]}),w.content]},w.id))})}):n.jsxs(Jt,{ref:$,"data-tabs-root":"",className:i,children:[n.jsxs(Dl,{children:[n.jsx(Bl,{ref:C,children:n.jsxs(Nl,{role:"tablist","aria-label":a,"aria-labelledby":s,children:[E&&n.jsx(Hl,{"aria-hidden":"true",style:{left:E.left,width:E.width}}),l.map(w=>{const M=w.id===x?.id;return n.jsxs(Wl,{ref:z=>{z?j.current.set(w.id,z):j.current.delete(w.id)},role:"tab",type:"button",id:`${d}${w.id}-tab`,"aria-selected":M,"aria-controls":`${d}${w.id}-panel`,"aria-describedby":w.indicator?`${d}${w.id}-attention`:void 0,tabIndex:M?0:-1,disabled:w.disabled,$active:M,onClick:()=>b(w.id),onKeyDown:N,$compact:D,children:[w.label,w.indicator&&n.jsxs(n.Fragment,{children:[n.jsx(en,{"aria-hidden":"true"}),n.jsx("span",{id:`${d}${w.id}-attention`,hidden:!0,children:"Needs attention"})]})]},w.id)})]})}),n.jsx(Ft,{$position:"left",$visible:P.left}),n.jsx(Ft,{$position:"right",$visible:P.right})]}),x&&n.jsx(Ul,{role:"tabpanel",id:`${d}${x.id}-panel`,"aria-labelledby":`${d}${x.id}-tab`,children:x.content})]})}const Jt=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-tabs-panel);
  /* Fills the panel and constrains children, so a flex:1 tab body can scroll. */
  flex: 1;
  min-height: 0;
`,Dl=u.div`
  position: relative;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Bl=u.div`
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
`,Nl=u.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  gap: var(--gap-tab);
  background: var(--color-surface-sunken);
  border-radius: var(--radius-pill);
  padding: var(--inset-tab-track);
  flex-wrap: nowrap;
`,Hl=u.span`
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
`,en=u.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-left: var(--gap-trailing-mark);
  vertical-align: middle;
  border-radius: var(--radius-circle);
  background: var(--color-warn-mark);
`,Wl=u.button`
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

  ${pe}

  @media (pointer: coarse) {
    min-height: 44px;
    /* Compact still applies on touch: a tab scrolled half out of view is a smaller target, not a bigger one. */
    ${({$compact:e})=>e?"padding: var(--inset-tab-compact-touch);":"padding: var(--inset-control-touch);"}
  }
`,Ul=u.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,Sd=c.forwardRef(function({active:t=!1,tone:r="go",size:o="md",type:a="button","aria-pressed":s,...i},d){return n.jsx(Xr,{ref:d,type:a,tone:t?r:void 0,size:o,pressed:t,"aria-pressed":s??t,...i})});export{bs as $,bn as A,Se as B,ei as C,hd as D,An as E,Ts as F,Dt as G,it as H,Ba as I,zs as J,Yo as K,Et as L,gd as M,Xt as N,ct as O,yd as P,is as Q,$d as R,ll as S,vr as T,Y as U,kn as V,pa as W,ad as X,Sn as Y,ut as Z,Hn as _,fd as a,ho as a0,po as a1,ni as a2,fo as a3,kt as a4,pd as a5,Do as a6,Me as a7,id as a8,_e as a9,Ta as aa,ks as ab,ys as ac,bd as ad,Bs as ae,Ai as af,Ii as ag,xa as ah,lt as ai,Fo as aj,dd as ak,Ye as al,od as am,Ct as an,Is as ao,Ft as ap,Us as b,md as c,jd as d,sd as e,nd as f,rd as g,kd as h,Sd as i,go as j,as as k,ye as l,Sa as m,On as n,cd as o,ud as p,wd as q,Ns as r,Ll as s,Zs as t,ge as u,vd as v,Tn as w,xd as x,ti as y,ld as z};
