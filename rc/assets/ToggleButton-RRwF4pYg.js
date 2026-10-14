import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import h,{css as C,keyframes as nn}from"./ext-styled-components-Br73TgY3.js";import{k as jr,t as kr,d as F,T as K,w as ue,l as et,u as Sr,m as _r,p as Rr,r as rn,n as Er,o as on,j as ee,v as Cr,x as Ar,A as Pr,y as Tr,i as Ir,N as Or,z as Mr,R as Fr,b as zr,c as he,e as Lr,g as Dr,f as wt}from"./streamStatusWord-tv2-QViF.js";import{r as d}from"./ext-react-RRA14VTW.js";import{E as an,a8 as Oe,aG as tt,an as Br,a9 as sn,aH as Nr,a6 as Z,O as Hr,M as Wr,V as Me,av as Ur,ai as yt,aI as Gr,aF as Kr,af as nt,aJ as qr,ax as ln,a7 as pe,a0 as Fe,h as Vr,v as Yr,I as Qr,F as Xr,l as Zr,a5 as Jr,aK as eo,aL as to,a4 as ge,a1 as cn,aM as dn,a3 as un,ae as no,d as ro}from"./titleText-ykBpW36X.js";import{t as rt,s as _e,x as oo,y as ao,m as so,f as ot,n as hn,N as io,S as at,z as fn,v as $t,A as be,B as lo,I as co,E as jt,e as uo}from"./contributionsRead-CJVQiuX3.js";import{b4 as pn,l as gn,c8 as ae,aK as we,cc as mn,aL as ho,a_ as fo,aO as re,cw as kt,b1 as ye}from"./view-clock-formula-DivmsORm.js";import"./ksp-enum-names-BUxIZR14.js";import{F as st,z as po}from"./screen-BrSuIKG_.js";import{I as go}from"./index-CsYYcwjJ.js";import"./lagrange-CqxkjZOD.js";import{R as mo}from"./use-transmissions-aR9lgGMG.js";function vo(e,t){if(!t)return!0;const n=t.toLowerCase();return(e.label??e.key).toLowerCase().includes(n)||e.key.toLowerCase().includes(n)}function xo(e,t,n=vo){return e.filter(o=>n(o,t))}function bo(e,t="Other"){const n=new Map;for(const o of e){const a=o.group??t;let s=n.get(a);s||(s=[],n.set(a,s)),s.push(o)}return[...n.entries()].sort(([o],[a])=>o.localeCompare(a))}function wo(e){return e.flatMap(([,t])=>t)}function St(e,t,n){return n===0?-1:Math.max(0,Math.min(e+t,n-1))}function yo({id:e,groups:t,flatOptions:n,activeIndex:o,selectedKey:a,getOptionId:s,onHoverIndex:i,onSelectKey:c,renderItem:l,emptyLabel:u="No matches","aria-label":f,placement:p="below"}){return r.jsx($o,{role:"listbox",id:e,"aria-label":f,$placement:p,onMouseDown:x=>x.preventDefault(),children:n.length===0?r.jsx(an,{layout:"fill",children:u}):t.map(([x,g],v)=>r.jsxs(jo,{role:"group","aria-labelledby":`${e}-group-${v}`,children:[r.jsx(ko,{id:`${e}-group-${v}`,"aria-hidden":"true",children:x}),g.map(b=>{const j=n.indexOf(b),w=j===o;return r.jsx(_o,{id:s(b.key),role:"option","aria-selected":w,$active:w,$selected:b.key===a,onPointerDown:R=>{R.preventDefault(),c(b.key)},onMouseEnter:()=>i(j),children:l?l(b):b.label??b.key},b.key)})]},x))})}const $o=h.div`
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
`,jo=h.div``,ko=h.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
  position: sticky;
  top: 0;
  background: var(--color-surface-raised);
`;function So(e,t){return e?"background: var(--color-surface-panel);":t?jr("go"):"background: transparent;"}const _o=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--inset-menu-item);
  cursor: pointer;
  ${({$active:e,$selected:t})=>So(e,t)}
  /* Focus stays on the input, so the highlighted option carries the focus colour as an inset bar. */
  box-shadow: ${({$active:e})=>e?"inset 3px 0 0 var(--color-focus)":"none"};

  &:hover {
    background: var(--color-surface-panel);
  }
`;function ac({tone:e,children:t,live:n=!1,pulse:o,...a}){const s=n?{role:"status","aria-live":"polite"}:{};return r.jsxs(Ro,{"data-tone":e,...s,...a,children:[r.jsx(Co,{"data-tone":e,$pulse:o,"aria-hidden":"true"}),r.jsx(Ao,{children:t})]})}const Ro=h.div`
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

  border-color: ${({"data-tone":e})=>kr(e)};
`,Eo=nn`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,Co=h.span`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  flex-shrink: 0;

  background: ${({"data-tone":e})=>F[e]};

  /* A looping pulse needs its own reduced-motion guard; the 1s/2s periods encode connection state. */
  ${({$pulse:e})=>e?C`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${Eo} ${e==="fast"?"1s":"2s"}
              var(--ease-emphasis) infinite;
          }
        `:""}
`,Ao=h.span`
  color: var(--color-text-primary);
  line-height: var(--line-height-body);
`;function sc({checked:e,onChange:t,label:n,disabled:o,id:a,"aria-label":s}){return r.jsxs(Po,{$disabled:o,children:[r.jsx(To,{type:"checkbox",id:a,checked:e,disabled:o,onChange:i=>t(i.target.checked),"aria-label":n?void 0:s}),r.jsx(vn,{$checked:e,$disabled:o,children:r.jsx(Io,{$checked:e,$disabled:o})}),n&&r.jsx(Oo,{children:n})]})}const Po=h.label`
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
`,vn=h.div`
  width: 28px;
  height: 14px;
  /* --radius-pill keeps the stadium shape through a height change. */
  border-radius: var(--radius-pill);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-surface-raised)":e?"var(--color-go-mark)":"var(--color-surface-raised)"};
  border: 1px solid ${({$checked:e,$disabled:t})=>t?"var(--color-border-strong)":e?"var(--color-go-mark)":"var(--color-border-strong)"};
  position: relative;
  flex-shrink: 0;
  transition: background var(--duration-base), border-color var(--duration-base);
`,To=h.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:focus-visible + ${vn} {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
`,Io=h.div`
  position: absolute;
  /* Measured inside the border: the track is border-box, so its 1px border leaves a 26 by 12 box, and 2px on every side centres the 8px thumb at either end. */
  top: 2px;
  left: ${({$checked:e})=>e?"16px":"2px"};
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background: ${({$checked:e,$disabled:t})=>t?"var(--color-text-faint)":e?"var(--color-accent-fg)":"var(--color-text-faint)"};
  transition: left var(--duration-base), background var(--duration-base);
`,Oo=h.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,it=e=>C`
  --fit-box: ${e};
`,Mo=e=>C`
  --fit-mask: ${e};
`;function Re({tone:e,size:t="md",live:n=!1,report:o,children:a,...s}){const i=e===void 0||e==="neutral"?void 0:e,c=o?.label??(typeof a=="string"?a:"");rt(o?{id:o.id,severity:i??"go",label:c}:null);const l=n?{role:"status","aria-live":"polite"}:{};return r.jsx(Do,{$severity:i,$size:t,...l,...s,children:a})}const Fo=C`
  background: var(--color-surface-raised);
  border-color: var(--color-border-subtle);
  color: var(--color-text-muted);
`,zo={go:C`
    background: transparent;
    border-color: ${F.go};
    color: ${K.go};
  `,info:C`
    background: transparent;
    border-color: ${F.info};
    color: ${K.info};
    box-shadow: 0 0 4px 0 color-mix(in srgb, ${F.info} 40%, transparent);
  `,caution:C`
    background: transparent;
    border-color: ${F.caution};
    color: ${K.caution};
    box-shadow: 0 0 5px 0 color-mix(in srgb, ${F.caution} 45%, transparent);
  `,warn:C`
    background: transparent;
    border-color: ${F.warn};
    color: ${K.warn};
    box-shadow: 0 0 6px 1px color-mix(in srgb, ${F.warn} 55%, transparent);
  `,nogo:C`
    background: transparent;
    border-color: ${F.nogo};
    color: ${K.nogo};
    box-shadow: 0 0 8px 2px color-mix(in srgb, ${F.nogo} 65%, transparent);
  `,offline:C`
    background: transparent;
    border-color: ${F.offline};
    color: ${K.offline};
  `},Lo={sm:C`
    font-size: var(--font-size-caption);
    padding: var(--inset-chip);
  `,md:C`
    font-size: var(--font-size-compact);
    padding: var(--inset-chip-roomy);
  `},Do=h.span`
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

  ${({$size:e})=>Lo[e]}
  ${({$severity:e})=>e===void 0?Fo:zo[e]}
`;function lt(e){return{readsAsOne:(t,n)=>e(t)===e(n)}}function Bo(e={}){return lt(t=>ue(t,e))}const No=.01;function Ho({wraps:e=!1}={}){const t=n=>e?n-Math.floor(n):Math.min(1,Math.max(0,n));return{readsAsOne(n,o){const a=Math.abs(t(n)-t(o));return(e?Math.min(a,1-a):a)<=No}}}function Ee(e,t,n){const o=Array.isArray(t)?t:[t];return e==null?o.length>0:o.some(a=>!n.readsAsOne(e,a))}const Wo={},Uo={byKey:new Map,unaddressed:void 0,separate:!1};function _t(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Go(e,t){if(e.separate!==t.separate||!_t(e.unaddressed,t.unaddressed)||e.byKey.size!==t.byKey.size)return!1;for(const[n,o]of e.byKey)if(!_t(o,t.byKey.get(n)))return!1;return!0}function Ko(e,t,n,o){const a=new Map;e!==void 0&&a.set(et(e),n);for(const[s,i]of Object.entries(t??{}))i!==void 0&&a.set(Rr(s),i);return{byKey:a,unaddressed:e===void 0&&t===void 0?n:void 0,separate:o}}function qo(e,t){return e===void 0||t===void 0?e===t:e.format===t.format&&e.as===t.as&&e.decimals===t.decimals}function Vo(e,t){return e!==void 0&&e.reading===t.reading&&e.unit===t.unit&&e.position?.base===t.position?.base&&e.position?.rung===t.position?.rung}function Yo(){const e=new Set,t=new Set;return{family:e,subscribe(n){return t.add(n),()=>{t.delete(n)}},sweep(n){const o=[...e].sort((s,i)=>s.depth-i.depth);let a=!1;for(const s of o)s.resettle(n)&&(a=!0);if(a)for(const s of t)s()}}}function Qo(e){const t=new Map,n=new Map,o=new Set,a=e?.root??Yo();let s=Uo;const i=l=>{let u;for(const f of l){const p=f.position;p!==void 0&&(u===void 0||p.base>u.base)&&(u=p)}return u?.rung},c={root:a,depth:e===void 0?0:e.depth+1,hold(l,u,f){const p=t.get(l);if(f===void 0)p!==void 0&&(p.delete(u),p.size===0&&t.delete(l));else{if(Vo(p?.get(u),f))return;p===void 0?t.set(l,new Map([[u,f]])):p.set(u,f)}e===void 0?a.sweep(l):e.hold(l,u,f)},settled:l=>n.get(l),readsAsOneFigure:l=>o.has(l),setPolicy(l){if(!Go(s,l)){s=l;for(const u of t.keys())a.sweep(u)}},resettle(l){const u=[...t.get(l)?.values()??[]],f=e?.settled(l),p=s.byKey.get(l)??s.unaddressed??Wo,x=p.format??f?.format??i(u),g=p.as??f?.as,v=p.decimals??(s.separate?Er(u,{format:x,as:g}):f?.decimals),b=x===void 0&&g===void 0&&v===void 0?void 0:{...x!==void 0&&{format:x},...g!==void 0&&{as:g},...v!==void 0&&{decimals:v}},j=s.separate&&rn(u,{format:x,as:g,decimals:v}),w=j!==o.has(l);return j?o.add(l):o.delete(l),qo(n.get(l),b)?w:(b===void 0?n.delete(l):n.set(l,b),!0)},attach(){a.family.add(c)},detach(){a.family.delete(c)}};return a.family.add(c),c}const ct={root:{family:new Set,subscribe:()=>()=>{},sweep:()=>{}},depth:0,hold:()=>{},settled:()=>{},readsAsOneFigure:()=>!1,setPolicy:()=>{},resettle:()=>!1,attach:()=>{},detach:()=>{}},fe=d.createContext(ct);function Xo(){return d.useContext(fe)!==ct}function Zo({children:e,of:t,pins:n,format:o,as:a,decimals:s,separate:i=!1}){const c=d.useContext(fe),[l]=d.useState(()=>Qo(c===ct?void 0:c));return d.useLayoutEffect(()=>(l.attach(),()=>l.detach()),[l]),d.useLayoutEffect(()=>{l.setPolicy(Ko(t,n,{format:o,as:a,decimals:s},i))},[l,t,n,o,a,s,i]),r.jsx(fe.Provider,{value:l,children:e})}function Ve(e,t={}){const n=d.useContext(fe),o=d.useId(),a=pn(e),s=e?.unit,c=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||a===null?void 0:et(s),l=c===void 0||a===null||s===void 0||Sr(s)===void 0?void 0:_r(a,s),u=l?.base,f=l?.rung;return d.useLayoutEffect(()=>{if(!(c===void 0||a===null||s===void 0))return n.hold(c,o,{reading:a,unit:s,...u!==void 0&&f!==void 0&&{position:{base:u,rung:f}}}),()=>n.hold(c,o,void 0)},[n,o,c,a,s,u,f]),d.useSyncExternalStore(n.root.subscribe,()=>c===void 0?void 0:n.settled(c),()=>{})}function ic(e,t={}){const n=d.useContext(fe),a=t.format!==void 0||t.as!==void 0||t.scale!==void 0&&t.scale!=="auto"||pn(e)===null||e===null||e===void 0?void 0:et(e.unit);return d.useSyncExternalStore(n.root.subscribe,()=>a===void 0?!1:n.readsAsOneFigure(a),()=>!1)}const Jo=Pr,ea={sci:Wr,rep:Hr},xn=h.span`
  /* Relative to the parent's font size with a floor; attached symbols keep full size, and icons take 0.9em so a thin stroke stays legible. */
  font-size: ${({$attached:e,$icon:t})=>e?"1em":t?"0.9em":"max(0.72em, 10px)"};
  /* No margin: the number-unit gap is a thin space character in the markup, so it survives copying. */
  /* "m/s" and "kg/m³" must never wrap mid-symbol. */
  white-space: nowrap;
  /* A unit must survive an uppercasing parent: m and M are metre and mega. */
  text-transform: none;
  /* A glyph centres on the digits beside it rather than sitting on their baseline; the offset is in em so it holds at every size. */
  ${({$icon:e})=>e?"display: inline-flex; align-items: center; vertical-align: -0.12em;":""}
`,ta=h.span`
  white-space: nowrap;
  ${({$mark:e,$elsewhere:t})=>e!==null?C`
          position: relative;
          ${Nr(e,t)}
        `:""}
`,na=h.span`
  color: var(--color-text-muted);
  white-space: nowrap;
`,ra=h(Me)`
  user-select: none;
`,bn=h(Me)`
  user-select: none;
`,oa=" ";function aa(e,t,n,o){if(t===void 0)return null;const a=x=>on(x.magnitude,x.unit,{...n,format:o}).value,s=(x,g)=>a(g.minus(x)),i=rn([t.lo,t.hi],{...n,format:o});if(!Ee(e,[t.lo,t.hi],lt(a)))return null;const c=s(t.lo,t.value),l=s(t.value,t.hi),u=x=>/^[-+\u2212]?[0.,\s]*$/.test(x);if(!i&&u(c)&&u(l))return null;const f=a(t.value)===a(e),p={...n,format:o};return{oneFigure:i,plusMinus:!i&&f&&c===l?l:null,lo:a(t.lo),hi:a(t.hi),loSaid:ee(t.lo,p),hiSaid:ee(t.hi,p),kind:t.kind}}function sa(e,t){const n=t===null?null:`with bands at ${t.loSaid} and ${t.hiSaid}`;return e===null?n:n===null?e:`${e}, ${n}`}function We({token:e,className:t,spaced:n}){const o=Cr(e,Ar(e));if(o==="")return null;const a=Tr(o),s=ea[o],i=Jo.has(o),c=a!==void 0;return r.jsxs(r.Fragment,{children:[n&&!i?oa:null,r.jsx(Z,{text:a,announce:!1,children:r.jsxs(xn,{$attached:i,$icon:s!==void 0,className:t,"data-unit":e,children:[s?r.jsx(s,{size:"1em"}):c?r.jsx("span",{"aria-hidden":"true",children:o}):o,c&&r.jsxs(bn,{"data-unit-word":"",children:[" ",a]})]})})]})}function Q({value:e,children:t,className:n,hideUnitInGroup:o,reckoned:a,marked:s,elsewhere:i,...c}){const l=Oe(e,{drawsReckoning:a}),u=s!=null&&!l.held&&l.shown!=null?{...l,held:!0,mark:s.kind,caption:s.caption}:l,{shown:f,held:p,mark:x,band:g}=u,v=i!=null&&i!==""&&f!=null,b=x??(v?"current":null),j=v?[u.caption,i].filter(Boolean).join("; "):u.caption,w=Ve(f,c),R=Xo(),I=o===!0&&R,k=w===void 0?c:{...w,...c},_=on(f?.magnitude,f?.unit,k),S=f==null||g===null||!p?null:aa(f,gn(g,f.unit),k,_.rung),{anchor:E,tip:A}=tt(sa(j,S));return e!==void 0||t===void 0?r.jsxs(ta,{className:n,$mark:b,$elsewhere:v,...sn(u),...E,children:[_.value,!I&&r.jsx(We,{token:_.symbol,spaced:!0}),S!==null&&r.jsxs(na,{"data-unit-band":"",children:[S.oneFigure?r.jsxs(r.Fragment,{children:[" (",r.jsx("span",{"aria-hidden":"true",children:"~"}),r.jsx(bn,{"data-unit-word":"",children:"approximately "}),S.lo]}):S.plusMinus===null?` (${S.lo} to ${S.hi}`:` ± ${S.plusMinus}`,!I&&r.jsx(We,{token:_.symbol,spaced:!0}),S.plusMinus===null?")":null]}),b!==null&&r.jsx(Br,{kind:b,elsewhere:v}),j!==null&&r.jsxs(ra,{"data-unit-currency":"",children:[", ",j]}),A]}):typeof t!="string"?r.jsx(xn,{$attached:!1,$icon:!1,className:n,children:t}):r.jsx(We,{token:t,className:n,spaced:!1})}function dt(e){const t=Ur(e.held);if(t===void 0)return{label:e.label,tone:e.tone,title:e.title};const n=Ir(t);return{label:n,tone:_e(t),title:e.title??`${e.label}: ${n}`}}function X(e,t){return ue({magnitude:e,unit:t})}function ia(e,t){const{limit:n,actual:o,unit:a}=t;if(n==null||o==null)return null;switch(e){case we.LimitReached:{const s=la(t.quantity),i=`${X(o,a)} of ${X(n,a)}`;return t.facilityName?`the ${t.facilityName} holds ${i} ${s}`:`it holds ${i} ${s}`}case we.AlreadyAtMaximum:return`it is already at ${t.quantity||"level"} ${X(o,a)} of ${X(n,a)}`;case we.InsufficientFunds:return`it costs ${X(o,a)} and funds are ${X(n,a)}`;case we.InsufficientScience:return`it costs ${X(o,a)} and science is ${X(n,a)}`;default:return null}}function la(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase()}function Rt(e){return e&&mn(e)?.sentence||null}function ca(e){const t=e?.trim().replace(/\.$/,"");return t||null}function ut(e){return wn(e,"refused")}function lc(e){return wn(e,"unavailable")}function wn(e,t){const n=ae(e),o=(e.breach?ia(e.errorCode,e.breach):null)??ca(e.detail)??Rt(e.reason)??Rt(e.errorCode)??e.reason??e.errorCode;return n?`${n} ${t}: ${o}.`:`${t.charAt(0).toUpperCase()}${t.slice(1)}: ${o}.`}function yn(e){const n=ae(e)||e.command||"The command";if(e.outcome==="refused"){const o=e.errorCode===void 0?"":da(ut({errorCode:e.errorCode,reason:e.reason,command:e.command,args:e.args,label:e.label,breach:e.breach,detail:e.detail}));return o?`${n} was refused: ${o}`:`${n} was refused.`}if(e.outcome==="errored"){const o=e.error?.message?.trim().replace(/\.$/,"");return o?`${n} failed: ${o}.`:`${n} failed.`}return`${n} ran.`}function da(e){const t=e.indexOf(": ");return t===-1?e:e.slice(t+2)}function $n(e){return`${ae(e)||e.command||"The command"}: no reply. May have run.`}function ua(){const e=ao();return{register:e.register,update:e.update,subscribe:e.subscribe,getActiveHandles:e.getSnapshot}}const ze=oo(ua),cc=ze.Context;function dc({children:e}){return r.jsx(ze.Provider,{children:r.jsx(ha,{children:e})})}function ha({children:e}){const t=ze.useStore();return r.jsx(mo.Provider,{value:t,children:e})}const ht=ze.useStore,fa=()=>()=>{},pa=[],Et=()=>pa;function ga(){const e=ht();return d.useSyncExternalStore(e?e.subscribe:fa,e?e.getActiveHandles:Et,e?e.getActiveHandles:Et)}const le=new WeakMap,Ye=new WeakMap;function Ct(e){for(const t of Ye.get(e)??[])t()}function ma(e){return le.set(e,(le.get(e)??0)+1),Ct(e),()=>{le.set(e,(le.get(e)??1)-1),Ct(e)}}function uc(){const e=ht();return d.useSyncExternalStore(t=>{if(!e)return()=>{};const n=Ye.get(e)??new Set;return Ye.set(e,n),n.add(t),()=>n.delete(t)},()=>e!==null&&(le.get(e)??0)>0,()=>!1)}function hc({size:e=12,thickness:t=2,color:n="var(--color-accent-fg)","aria-label":o="Loading",...a}){return r.jsx(xa,{...a,role:"status","aria-label":o,$size:e,$thickness:t,$color:n})}const va=nn`
  to { transform: rotate(360deg); }
`,xa=h.span`
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
    animation: ${va} 700ms linear infinite;
  }
`;function At(e,t){return t?.state!=="held"?e:{...t,value:e}}function Ce(e){return e.kind==="continuous"?"ribbon":"dot"}function ba(e){return e.delivery==="acked"}function wa(e){return e.direction==="command"?"outbound":"inbound"}function jn(e){return e.direction==="command"?"--color-accent-fg":"--color-info-mark"}function Le(e){return`${e.direction}/${e.kind}/${e.delivery}`}const ya={"command/event/acked":"in-flight-row","command/discrete/acked":"in-flight-row","command/continuous/acked":"continuous-strip","telemetry/continuous/fire-and-forget":"continuous-strip","telemetry/event/fire-and-forget":"in-flight-row","telemetry/discrete/fire-and-forget":"in-flight-row"};function ft(e){return ya[Le(e)]??null}const Pt=new Set;function kn(e,t){const n=Le(e);if(Pt.has(n))return;Pt.add(n);const o=`Delay rail entry "${t}" is tagged ${n}, and no renderer draws that combination, so it will not appear on the rail. Declare a renderer for it in ui-kit's railTags.ts, or correct the entry's tags.`;ho()?fo.error(o):console.error(o)}const Sn=16,Tt=Sn/2,$a=5.5,ja=2,ka=e=>Number.isFinite(e)?e<0?0:e>1?1:e:0;function _n(e,t,n){return t>0?Math.min(e.length-1,t)/t*n:0}function Sa(e,t,n){const o=Math.min(e.length,t);return Math.min(Math.max(1,Math.ceil(n/ja)),Math.max(2,Math.round(o)))}function _a(e,t,n){if(e.length===0)return"";const o=_n(e,t,n);if(!(o>0))return`M0.00,${Tt.toFixed(2)}`;const a=Sa(e,t,o),s=[];for(let i=0;i<=a;i++){const c=Math.min(i/a*o,o),l=Math.min(Math.round(c/n*t),e.length-1),u=ka(e[e.length-1-l]),f=(i%2===0?-1:1)*u*$a;s.push(`${c.toFixed(2)},${(Tt+f).toFixed(2)}`)}return`M${s.join(" L")}`}const Rn=.05,Ra=.02,Ae=["--color-data-1","--color-data-2","--color-data-3","--color-data-4"],De=100,ce=30,Ea=1.5,W=2,Ca=4,J=ce-W-Ca,Y=(e,t,n)=>n+(t<=0?0:Math.min(1,e/t))*(De-n*2),$e=e=>W+(1-Math.max(0,Math.min(1,e)))*J,En=e=>e==="inline"?Ea:0;function fc(e="inline"){const t=En(e);return(De-t*2)/3}function Cn({tags:e,who:t}){return kn(e,t),r.jsx("g",{"data-rail-unrepresented":Le(e),"data-rail-entry":t})}function ne(e){return e.map((t,n)=>`${n===0?"M":"L"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ")}function It(e,t){if(e.length===0||e[0].age>=t)return e;const n=e.findIndex(l=>l.age>=t);if(n===-1)return[];const o=e[n-1],a=e[n],s=a.age-o.age||1,i=(t-o.age)/s,c=o.value+i*(a.value-o.value);return[{age:t,value:c},...e.slice(n)]}function Ot(e,t){if(e.length===0||e[e.length-1].age<=t)return e;const o=e.findIndex(u=>u.age>t),a=e.slice(0,o),s=e[o],i=a[a.length-1];if(!i)return[{age:t,value:s.value}];const c=s.age-i.age||1,l=(t-i.age)/c;return[...a,{age:t,value:i.value+l*(s.value-i.value)}]}const Aa=.25;function Mt(e,t){if(e.length===0)return null;const n=e[0],o=e[e.length-1];if(t<=n.age)return n.value;if(t>=o.age)return o.value;for(let a=1;a<e.length;a++){const s=e[a];if(t<=s.age){const i=e[a-1],c=(t-i.age)/(s.age-i.age||1);return i.value+c*(s.value-i.value)}}return o.value}function Pa({stream:e,span:t,index:n,padX:o,oneT:a,twoT:s}){const c=`var(${Ae[n%Ae.length]})`,l=d.useId(),u=`cds-ramp-${l}-${n}`,f=`cds-fill-${l}-${n}`,p=`cds-tail-${l}-${n}`,x=ft(e.tags);if(x!=="continuous-strip")return x===null?r.jsx(Cn,{tags:e.tags,who:e.id}):null;const g=ba(e.tags),b=(g?e.inTransit:Ot(e.inTransit,a)).map(P=>({x:Y(P.age,t,o),y:$e(P.value)}));if(b.length===0)return null;const w=(g?[]:Ot(It(e.inTransit,a),a*(1+Aa))).map(P=>({x:Y(P.age,t,o),y:$e(P.value)})),R=w.length>1&&w[w.length-1].x>w[0].x,I=`${ne(b)} L${b[b.length-1].x.toFixed(2)},${(W+J).toFixed(2)} L${b[0].x.toFixed(2)},${(W+J).toFixed(2)} Z`,k=g?It(e.echo,s):[],_=k.map(P=>({x:Y(P.age,t,o),y:$e(P.value)})),S=k.map(P=>({x:Y(P.age,t,o),y:$e(Mt(e.inTransit,P.age)??P.value)})),E=k.findIndex(P=>{const m=Mt(e.inTransit,P.age);return m!==null&&Math.abs(P.value-m)>Ra}),A=E!==-1,H=A?_.slice(0,E+1):_,D=A?_.slice(E):[],L=A?S.slice(E):[],N=!A||E>0;return r.jsxs("g",{"data-stream-group":e.id,"data-return-leg":g,children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:u,x1:"0",y1:"0",x2:"1",y2:"0",children:[r.jsx("stop",{offset:"0",stopColor:c,stopOpacity:"0.10"}),r.jsx("stop",{offset:"1",stopColor:c,stopOpacity:"0.40"})]}),r.jsxs("linearGradient",{id:f,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0",stopColor:c,stopOpacity:"0.22"}),r.jsx("stop",{offset:"1",stopColor:c,stopOpacity:"0"})]}),R&&r.jsxs("linearGradient",{id:p,gradientUnits:"userSpaceOnUse",x1:w[0].x,y1:"0",x2:w[w.length-1].x,y2:"0",children:[r.jsx("stop",{offset:"0",stopColor:c,stopOpacity:"0.40"}),r.jsx("stop",{offset:"1",stopColor:c,stopOpacity:"0"})]})]}),r.jsx("path",{"data-role":"area",d:I,fill:`url(#${f})`,stroke:"none"}),r.jsx("path",{"data-role":"commanded","data-stream":e.id,d:ne(b),fill:"none",stroke:`url(#${u})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),R&&r.jsx("path",{"data-role":"commanded-tail","data-stream":e.id,d:ne(w),fill:"none",stroke:`url(#${p})`,strokeWidth:"0.8",strokeLinejoin:"round",strokeLinecap:"round"}),H.length>0&&N&&r.jsx("path",{"data-role":"echo","data-stream":e.id,d:ne(H),fill:"none",stroke:c,strokeWidth:"0.8",strokeLinecap:"round"}),A&&r.jsx("path",{"data-role":"deviation-actual","data-stream":e.id,"data-deviation":"true",d:ne(D),fill:"none",stroke:"var(--color-warn-mark)",strokeWidth:"1",strokeLinecap:"round"}),A&&r.jsx("path",{"data-role":"deviation-expected","data-stream":e.id,d:ne(L),fill:"none",stroke:c,strokeWidth:"0.8",strokeDasharray:"2 1.5"})]})}function Ta({ribbon:e,padX:t}){const n=`cds-ribbon-fade-${d.useId()}`,o=e.tags,a=ft(o);if(a!=="continuous-strip")return a===null?r.jsx(Cn,{tags:o,who:e.id}):null;const s=(De-t*2)/3,i=e.amplitudes,c=e.spanSamples??i.length,l=_a(i,c,s);if(l==="")return null;const u=Math.max(_n(i,c,s),1),f=`var(${jn(o)})`,p=wa(o)==="outbound";return r.jsxs("g",{"data-ribbon-group":e.id,transform:`translate(${t} ${W}) scale(1 ${J/Sn})`,children:[r.jsx("defs",{children:r.jsxs("linearGradient",{id:n,gradientUnits:"userSpaceOnUse",x1:p?0:u,y1:"0",x2:p?u:0,y2:"0",children:[r.jsx("stop",{offset:"0",stopColor:f,stopOpacity:"0.9"}),r.jsx("stop",{offset:"1",stopColor:f,stopOpacity:"0.1"})]})}),r.jsx("path",{"data-role":"ribbon","data-ribbon":e.id,d:l,fill:"none",stroke:`url(#${n})`,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]})}function Ia({streams:e,ribbons:t=[],"aria-label":n="Controls in flight",variant:o="inline",delayReading:a}){const s=`cds-divfade-${d.useId()}`,i=a?.state==="held",c=i?Oe(a??null).caption:null,{anchor:l,tip:u}=tt(c),f=[...e,...t].find(k=>k.oneWaySeconds!==null),p=f?.oneWaySeconds??null;if(!f||p===null||st(p)!=="shown")return null;const x=p>=Rn;if(!x&&t.length===0)return null;const g=3*p,v=p,b=2*p,j=En(o),w=Y(v,g,j),R=Y(b,g,j),I=e.every(k=>k.inTransit.length===0&&k.echo.length===0)&&t.every(k=>k.amplitudes.length===0);return r.jsxs(Oa,{"data-oneway":p,"data-variant":o,$variant:o,...l,children:[r.jsxs(Ma,{$variant:o,$quiet:I,role:"img","aria-label":Kr(n,c),...Gr(c),viewBox:`0 0 ${De} ${ce}`,preserveAspectRatio:"none",children:[r.jsx("defs",{children:r.jsxs("linearGradient",{id:s,gradientUnits:"userSpaceOnUse",x1:"0",y1:W,x2:"0",y2:W+J,children:[r.jsx("stop",{offset:"0",stopColor:"var(--color-border-subtle)",stopOpacity:"0.9"}),r.jsx("stop",{offset:"1",stopColor:"var(--color-border-subtle)",stopOpacity:"0"})]})}),(x?e:[]).map((k,_)=>r.jsx(Pa,{stream:k,span:g,index:_,padX:j,oneT:v,twoT:b},k.id)),t.map(k=>r.jsx(Ta,{ribbon:k,padX:j},k.id)),r.jsx("line",{"data-divider":"t",x1:w,x2:w,y1:W,y2:W+J,stroke:`url(#${s})`,strokeWidth:"0.4"}),r.jsx("line",{"data-divider":"2t",x1:R,x2:R,y1:W,y2:W+J,stroke:`url(#${s})`,strokeWidth:"0.4"}),o==="inline"&&r.jsxs("g",{"data-role":"hover-labels",children:[r.jsxs("text",{x:w,y:W-.4,textAnchor:"middle",fontSize:"2",children:[ue(re("s",p),{decimals:1}),i&&r.jsx(yt,{size:1.2})]}),r.jsxs("text",{x:R,y:W-.4,textAnchor:"middle",fontSize:"2",children:[ue(re("s",2*p),{decimals:1}),i&&r.jsx(yt,{size:1.2})]}),r.jsx("text",{x:Y(p/2,g,j),y:ce-.6,textAnchor:"middle",fontSize:"2",children:"outgoing"}),r.jsx("text",{x:Y(1.5*p,g,j),y:ce-.6,textAnchor:"middle",fontSize:"2",children:"echo"}),r.jsx("text",{x:Y(2.5*p,g,j),y:ce-.6,textAnchor:"middle",fontSize:"2",children:"confirmed"})]})]}),o==="expanded"&&r.jsxs(r.Fragment,{children:[r.jsxs(Fa,{"aria-hidden":"true",children:[r.jsxs("span",{children:["outgoing ",r.jsx("b",{children:"0"})]}),r.jsxs("span",{children:["echo"," ",r.jsx("b",{children:r.jsx(Q,{value:At(re("s",p),a),decimals:1})})]}),r.jsxs("span",{children:["confirmed"," ",r.jsx("b",{children:r.jsx(Q,{value:At(re("s",2*p),a),decimals:1})})]})]}),r.jsxs(za,{"aria-hidden":"true",children:[(x?e:[]).map((k,_)=>r.jsxs("span",{children:[r.jsx("i",{style:{background:`var(${Ae[_%Ae.length]})`}}),k.label]},k.id)),t.map(k=>r.jsxs("span",{"data-role":"legend-ribbon",children:[r.jsx("i",{style:{background:`var(${jn(k.tags)})`}}),k.label]},k.id)),x&&e.length>0&&r.jsxs("span",{"data-role":"legend-deviation",children:[r.jsx("i",{style:{background:"var(--color-warn-mark)"}}),"off-command"]})]})]}),u]})}const Oa=h.div`
  flex: 0 0 auto;
  width: 100%;
  ${({$variant:e})=>e==="expanded"&&"display: flex; flex-direction: column; gap: var(--gap-delay-stream);"}
`,Ma=h.svg`
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
`,Fa=h.div`
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
`,za=h.div`
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
`,La=h.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function An({observed:e,modelled:t,write:n}){if(t==null)return null;if(n===void 0){const o=t;return Ee(e,o,Bo())?r.jsx(Ft,{children:r.jsx(Q,{value:o})}):null}return Ee(e,t,lt(n))?r.jsx(Ft,{children:n(t)}):null}function Ft({children:e}){return r.jsx(La,{"data-modelled-alongside":"",children:r.jsx(nt,{"data-held":"",kind:"modelled",caption:qr,children:e})})}function pc({value:e}){return r.jsxs(r.Fragment,{children:[r.jsx(Q,{value:e}),r.jsx(An,{observed:e.value,modelled:ln(e)})]})}function Pn({value:e,clock:t=!1,precise:n=!1}){const o=typeof e=="number"?void 0:e,a=b=>Mr(typeof b=="number"?b:b.magnitude,{ms:n,sign:t}),s=o!=null&&"state"in o?o:void 0,i=ln(s);if(s?.value!==void 0&&i!==void 0)return r.jsxs(r.Fragment,{children:[a(s.value),r.jsx(An,{observed:s.value,modelled:i,write:a})]});const c=Oe(o,{drawsReckoning:!0}),{shown:l,held:u,mark:f,caption:p}=c,x=typeof e=="number"?e:l;if(x==null)return Or;const g=a(x),v=sn({...c,shown:x});return u?r.jsx(nt,{...v,kind:f??"held",caption:p,children:g}):r.jsx("span",{"data-figure":v["data-figure"],children:g})}function me(e){const t=d.useRef(null),[n,o]=d.useState(e),[a,s]=d.useState(null);return d.useEffect(()=>{t.current!==a&&s(t.current)}),d.useEffect(()=>{if(!a||typeof ResizeObserver>"u")return;const i=new ResizeObserver(c=>{for(const l of c)l.contentRect.width>0&&l.contentRect.height>0&&o({w:Math.floor(l.contentRect.width),h:Math.floor(l.contentRect.height)})});return i.observe(a),()=>i.disconnect()},[a]),{ref:t,size:n}}const Da='button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';function Tn(e){const t=e.closest("[data-panel-rail-frame], [data-command-list]");if(!t)return;const n=[...t.querySelectorAll("[data-dismiss]")],o=n.indexOf(e),a=n[o+1]??n[o-1];if(a&&a!==e){a.focus();return}const s=t.closest("[data-panel-rail-frame]")?.parentElement?.querySelector("[data-panel-body]");if(!s)return;const i=s.querySelector(Da);if(i){i.focus();return}s.hasAttribute("tabindex")||s.setAttribute("tabindex","-1"),s.focus()}function pt(e){const t=e.trim().split(/\s+/).filter(Boolean);return((t.length>1?t[t.length-1]:t[0]??"").replace(/[^a-zA-Z0-9]/g,"")||e).slice(0,4).toUpperCase()}const gt={"in-transit":.18,"awaiting-reply":.5,due:.62,overdue:.82,lost:.95};function Ba(e){const t=e.reachEtaSeconds,n=Na(e);if(t===null||n===null)return gt[e.predictedPhase];const o=n-t;return Math.max(0,Math.min(1,o/(3*n)))}function Na(e){const t=e.reachEtaSeconds,n=e.replyEtaSeconds;return t!==null&&n!==null&&n>t?n-t:n===null&&e.oneWaySeconds!=null&&e.oneWaySeconds>0?e.oneWaySeconds:null}function Ha(e){return e.map(t=>({id:t.id,label:t.label||t.command,etaSeconds:t.predictedPhase==="in-transit"?t.reachEtaSeconds:t.replyEtaSeconds,phase:t.predictedPhase,progress:Ba(t),glyph:t.glyph??pt(t.label||t.command),...t.direction==="telemetry"?{flow:"inbound"}:{}}))}function gc({oneWaySeconds:e,canQueue:t,alwaysBadge:n=!1}){return e===null||st(e)!=="shown"?"none":n||po({oneWaySeconds:re("s",e)})==="live"?"badge":t?"strip":"none"}const Wa={"in-transit":"↑","awaiting-reply":"↓",due:"↓",overdue:"!",lost:"?"},Qe={"in-transit":"in transit","awaiting-reply":"awaiting reply",due:"due",overdue:"overdue",lost:"unconfirmed"};function Ua(e){return e.flow==="inbound"&&e.phase==="in-transit"?"↓":Wa[e.phase]}const Be=new Set(["overdue","lost"]),Ga=180,Ka=96;function In(e){return ue(re("s",Math.max(0,e)))}function qa(e){let t=null;for(const n of e)n.etaSeconds!==null&&(t===null||n.etaSeconds<t)&&(t=n.etaSeconds);return t}const Va=1;function On(e){const t=go(),n=d.useRef(t);n.current=t;const[o,a]=d.useState(e),s=d.useRef({eta:e,ut:Ue(t)});return d.useEffect(()=>{const i=s.current.eta;(i===null!=(e===null)||i!==null&&e!==null&&Math.abs(e-i)>=Va)&&(s.current={eta:e,ut:Ue(n.current)},a(e))},[e]),d.useEffect(()=>{const i=setInterval(()=>{const{eta:c,ut:l}=s.current;if(c===null)return;const u=Ue(n.current);if(u!==void 0){if(l===void 0){s.current={eta:c,ut:u};return}a(Math.max(0,c-(u-l)))}},1e3);return()=>clearInterval(i)},[]),o}function Ue(e){const t=e?.utNowEstimate();return t!==void 0&&Number.isFinite(t)?t:void 0}function Ya({items:e,mode:t,density:n="auto",orientation:o="column","aria-label":a="In-flight commands",variant:s="inline",onDismiss:i}){const{ref:c,size:l}=me({w:320,h:0});if(s==="rail")return e.length===0?null:r.jsx(Ja,{items:e,"aria-label":a});if(s==="expanded")return e.length===0?null:r.jsx(os,{items:e,"aria-label":a,onDismiss:i});const u=n!=="auto"?n:l.w>=Ga?"full":l.w>=Ka?"compact":"badge";return e.length===0?null:u==="badge"?r.jsx(es,{ref:c,items:e,mode:t,"aria-label":a}):r.jsx(Fn,{ref:c,role:"list","aria-label":a,"data-mode":t,"data-density":u,$row:o==="row",children:e.map(f=>r.jsx(ts,{item:f,$compact:u==="compact"},f.id))})}const Ge=100,zt=16,Qa=-4,Xa=9,Za=.22;function Ja({items:e,"aria-label":t}){const n=d.useId(),o=`${e.length} in flight`;return r.jsxs(ns,{role:"img","aria-label":`${t}: ${o}`,viewBox:`0 0 ${Ge} ${zt}`,preserveAspectRatio:"none",children:[r.jsx("defs",{children:e.map((a,s)=>{const i=Be.has(a.phase)?F.warn:"var(--color-accent-fg)",l=Math.max(0,Math.min(1,a.progress??gt[a.phase]))*Ge;return r.jsxs("radialGradient",{id:`${n}-${s}`,gradientUnits:"userSpaceOnUse",cx:l,cy:Qa,r:Xa,children:[r.jsx("stop",{offset:"0",stopColor:i,stopOpacity:Za}),r.jsx("stop",{offset:"1",stopColor:i,stopOpacity:"0"})]},a.id)})}),e.map((a,s)=>r.jsx("rect",{"data-role":"glow","data-phase":a.phase,x:"0",y:"0",width:Ge,height:zt,fill:`url(#${n}-${s})`},a.id))]})}const es=function({ref:t,items:n,mode:o,"aria-label":a}){const s=On(qa(n)),i=n.some(l=>Be.has(l.phase)),c=s===null?`${n.length} in flight`:`${n.length} in flight, next in ${In(s)}`;return r.jsx(Z,{text:n.map(l=>l.label).join(`
`),focusable:!0,children:r.jsx(Fn,{ref:t,role:"group","aria-label":`${a}: ${c}`,"data-mode":o,"data-density":"badge",$row:!1,children:r.jsxs(zn,{$phase:i?"overdue":"in-transit",children:[r.jsx(Ln,{"aria-hidden":"true",$pulse:!i,children:"↑"}),r.jsxs(Dn,{children:[n.length,s!==null&&r.jsxs(r.Fragment,{children:[" · ",r.jsx(Pn,{value:Math.max(0,s)})]})]})]})})})};function ts({item:e,$compact:t}){const n=On(e.etaSeconds),o=Be.has(e.phase),a=n===null?`${e.label}, ${Qe[e.phase]}`:`${e.label}, ${In(n)}`;return r.jsxs(zn,{$phase:e.phase,role:"listitem",...t?{"aria-label":a,title:a}:{},children:[r.jsx(Ln,{"aria-hidden":"true",$pulse:!o,$inherit:o,children:Ua(e)}),!t&&r.jsx(fs,{children:e.label}),r.jsx(Dn,{children:n===null?Qe[e.phase]:r.jsx(Pn,{value:Math.max(0,n)})})]})}const ns=h.svg`
  display: block;
  width: 100%;
  height: 16px;
`,Mn=54,de=5,mt=3,Ne=Mn-8-de,oe=60,rs={"in-transit":"var(--color-accent-fg)","awaiting-reply":"var(--color-accent-fg)",due:"var(--color-accent-fg)",overdue:F.warn,lost:F.warn};function os({items:e,"aria-label":t,onDismiss:n}){const{ref:o,size:a}=me({w:320,h:Mn}),i=a.w>=oe?a.w:a.h,c=Math.max(1,Math.floor((i-6)/(Ne+mt))),u=e.length>c?e.slice(0,c-1):e,f=e.length-u.length;return r.jsx(ss,{ref:o,"data-command-list":"",children:r.jsxs(is,{role:"list","aria-label":t,children:[u.map(p=>r.jsx(as,{item:p,onDismiss:n},p.id)),f>0&&r.jsxs(us,{role:"listitem","aria-label":`${f} more in flight`,children:["+",f]})]})})}function as({item:e,onDismiss:t}){const n=e.glyph??pt(e.label),o=rs[e.phase],a=Math.max(0,Math.min(1,e.progress??gt[e.phase])),s=Be.has(e.phase)&&!!t,i=`${e.label}, ${Qe[e.phase]}`;return r.jsxs(ls,{role:"listitem","aria-label":i,"data-phase":e.phase,style:{color:o},children:[r.jsx(Z,{text:s?`Dismiss ${e.label}`:i,announce:!1,children:r.jsxs(cs,{as:s?"button":"div",...s?{type:"button","data-dismiss":"",onClick:c=>{Tn(c.currentTarget),t?.(e.id)},"aria-label":`Dismiss ${e.label}`}:{"aria-hidden":!0},children:[r.jsx("span",{className:"glyph","aria-hidden":"true",children:n}),s&&r.jsx("span",{className:"dismiss","aria-hidden":"true",children:"✕"})]})}),r.jsx(ds,{children:r.jsx("span",{className:"fill",style:{"--fill-ratio":a}})})]})}const ss=h.div.attrs({role:"group"})`
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
    ${Ne}px + ${de}px + (var(--queue-tile-inset) * 2)
  );
  border-radius: var(--queue-panel-radius);
  background: color-mix(in srgb, var(--color-surface-raised) 68%, transparent);
  backdrop-filter: blur(6px);
  overflow: hidden;
`,is=h.div`
  display: flex;
  flex-direction: column;
  /* Centred on the cross axis so both margins match; the main axis fills from the start, so a short queue reads as started. */
  align-items: center;
  justify-content: flex-start;
  gap: ${mt}px;
  width: 100%;
  height: 100%;

  @container (min-width: ${oe}px) {
    flex-direction: row;
  }
`,ls=h.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 0;
  min-height: 0;

  @container (min-width: ${oe}px) {
    flex-direction: column;
  }
`,cs=h.div`
  --s: ${Ne}px;
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
`,ds=h.div`
  --s: ${Ne}px;
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
`,us=h.span`
  align-self: center;
  flex: 0 0 auto;
  padding: 0 ${mt}px;
  font-size: var(--font-size-compact);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-muted);
`,Fn=h.div`
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
`,hs={"in-transit":C`
    color: var(--color-text-primary);
  `,"awaiting-reply":C`
    color: var(--color-text-muted);
  `,due:C`
    color: var(--color-text-muted);
  `,overdue:C`
    color: ${K.warn};
  `,lost:C`
    color: ${K.warn};
  `},zn=h.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-command-row);

  ${({$phase:e})=>hs[e]}
`,Ln=h.span`
  flex: 0 0 auto;
  color: ${({$inherit:e})=>e?"inherit":"var(--color-accent-fg)"};

  ${({$pulse:e})=>e&&C`
      @media (prefers-reduced-motion: no-preference) {
        animation: in-flight-list-pulse 1.6s var(--ease-emphasis) infinite;
      }
    `}

  @keyframes in-flight-list-pulse {
    50% {
      opacity: 0.35;
    }
  }
`,fs=h.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Dn=h.span`
  flex: 0 0 auto;
`;function ps({handle:e,handles:t,"aria-label":n,mode:o,density:a,orientation:s,variant:i="inline"}){const c=t??(e?[e]:[]),l=c.length===1?c[0]:null,u=l?ft(l.tags):null;if(l&&u===null)return r.jsx(gs,{tags:l.tags,who:l["aria-label"]});if(l&&u!=="in-flight-row"){const g=l,v=g.effectiveDelaySeconds;return st(v)!=="shown"?null:r.jsx(Ia,{streams:g.streams??[],ribbons:g.ribbons??[],delayReading:g.delayReading,"aria-label":n??g["aria-label"],variant:i})}const f=Ha(c.flatMap(g=>g.inFlight)),x=c.some(g=>g.dismiss)?g=>c.find(v=>v.inFlight.some(b=>b.id===g))?.dismiss?.(g):void 0;return r.jsx(Ya,{items:f,"aria-label":n,mode:o,density:a,orientation:s,variant:i,onDismiss:x})}function gs({tags:e,who:t}){return kn(e,t??"unnamed handle"),r.jsx("span",{hidden:!0,"data-rail-unrepresented":Le(e)})}function Bn(e){const n=ae(e)||e.command||"The command",o=e.code===void 0?void 0:mn(e.code);return o?.kind==="fault"?`${n}: failed, ${o.sentence}.`:`${n}: failed, with no verdict from the game.`}function Nn(e){return`${ae(e)||e.command||"The command"}: never sent. Safe to re-send.`}const ms={refused:"Refused commands",lost:"Commands with no reply",undelivered:"Commands that were never sent",found:"Unconfirmed commands that answered",failed:"Commands that failed"},vs={refused:"refusal",lost:"unconfirmed command",undelivered:"unsent command",found:"found command",failed:"failed command"};function xs(e,t){return e.kind==="refused"?ut(e.entries[t]):e.kind==="found"?yn(e.entries[t]):e.kind==="failed"?Bn(e.entries[t]):e.kind==="undelivered"?Nn(e.entries[t]):$n(e.entries[t])}function bs(e){return e.entries.map((t,n)=>{const o=ae(t);return{id:t.id,subject:o||t.command||"",sentence:xs(e,n),dismissLabel:`Dismiss ${o||vs[e.kind]}`,tags:t.tags}})}function se(e){const{kind:t,onDismiss:n,live:o=!0}=e,a=e["aria-label"]??ms[t],s=t==="found"?"info":"warn";if(!o&&e.entries.length===0)return null;const i=bs(e).map(c=>r.jsxs($s,{role:o?void 0:"listitem",$tone:s,children:[Ce(c.tags)==="ribbon"?r.jsx(ks,{$tone:s,children:c.subject}):r.jsx(js,{"aria-hidden":"true",$tone:s,children:pt(c.subject)}),r.jsx(Ss,{children:c.sentence}),n&&r.jsx(_s,{type:"button","data-dismiss":"",onClick:l=>{Tn(l.currentTarget),n(c.id)},"aria-label":c.dismissLabel,children:"✕"})]},c.id));return o?r.jsx(ys,{forwardedAs:"div","aria-label":a,"data-command-list":"",additionsOnly:!0,children:i}):r.jsx(ws,{role:"list","aria-label":a,"data-command-list":"",children:i})}const Hn=C`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: var(--gap-message-stack);
  /* Matches the queue container's inset, so the boxes line up with the tiles above. */
  margin: var(--outset-command-strip);
`,ws=h.div`
  ${Hn}
`,ys=h(Fe)`
  ${Hn}
  &:empty {
    margin: 0;
  }
`,$s=h.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap-glyph-box);
  padding: var(--inset-surface);
  border: 1px solid ${({$tone:e})=>F[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${F[e]} 18%, var(--color-surface-raised))`};
  color: var(--color-text-primary);
  text-align: left;
`,js=h.span`
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  min-width: 34px;
  padding: var(--inset-glyph);
  align-self: stretch;
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: ${({$tone:e})=>K[e]};
  border: 1px solid ${({$tone:e})=>F[e]};
  border-radius: var(--radius-regular);
  background: ${({$tone:e})=>`color-mix(in srgb, ${F[e]} 14%, var(--color-surface-raised))`};
`,ks=h.span`
  flex: 0 0 auto;
  align-self: center;
  font-size: var(--font-size-compact);
  font-weight: 700;
  color: ${({$tone:e})=>K[e]};
`,Ss=h.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: var(--font-size-compact);
  line-height: var(--line-height-body);
  /* Wraps, never truncates: the numbers are at the end of the sentence. */
  overflow-wrap: anywhere;
`,_s=h.button`
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
  ${pe}
`,Rs="is no longer available";function mc({keys:e,value:t,onChange:n,clearable:o=!1,placeholder:a="Search...",subjectNoun:s="value",id:i,"aria-label":c}){const[l,u]=d.useState(""),[f,p]=d.useState(!1),[x,g]=d.useState(-1),v=d.useRef(null),b=d.useRef(null),j=d.useId(),w=d.useId(),R=d.useId(),I=y=>`${w}-${y}`,k=e.find(y=>y.key===t),_=t!==null&&t!==""&&k===void 0&&e.length>0,S=d.useMemo(()=>xo(e,l),[e,l]),E=d.useMemo(()=>bo(S),[S]),A=d.useMemo(()=>wo(E),[E]),H=d.useCallback(()=>{p(!0),u(""),g(-1)},[]),D=d.useCallback(()=>{p(!1),u(""),g(-1)},[]),L=d.useCallback(y=>{n(y),D()},[n,D]),N=y=>{if(!f){(y.key==="Enter"||y.key==="ArrowDown")&&H();return}switch(y.key){case"Escape":y.stopPropagation(),D();break;case"ArrowDown":y.preventDefault(),g(T=>St(T,1,A.length));break;case"ArrowUp":y.preventDefault(),g(T=>St(T,-1,A.length));break;case"Enter":{const T=l!=="",$=x>=0?A[x]:T?A[0]:void 0;$&&L($.key);break}}};d.useEffect(()=>{if(!f)return;const y=T=>{v.current?.contains(T.target)||D()};return document.addEventListener("pointerdown",y),()=>document.removeEventListener("pointerdown",y)},[f,D]);const P=f?l:k?.label??t??"",m=f&&x>=0?A[x]:void 0;return r.jsxs(Es,{ref:v,children:[r.jsx(Cs,{ref:b,id:i,"aria-label":c,value:P,placeholder:t?void 0:a,$hasValue:!!t&&!f,$retired:_&&!f,"aria-invalid":_&&!f?!0:void 0,"aria-describedby":_&&!f?R:void 0,onFocus:H,onBlur:D,onChange:y=>{u(y.target.value),g(-1)},onKeyDown:N,role:"combobox","aria-expanded":f,"aria-controls":j,"aria-autocomplete":"list","aria-activedescendant":m?I(m.key):void 0}),_&&!f&&r.jsx(Ps,{id:R,children:`This ${s} ${Rs}. Pick another.`}),o&&t&&!f&&r.jsx(As,{type:"button","aria-label":`Clear ${s}`,onClick:()=>{n(null),D()},children:"×"}),f&&r.jsx(yo,{id:j,groups:E,flatOptions:A,activeIndex:x,selectedKey:t,getOptionId:I,onHoverIndex:g,onSelectKey:L,"aria-label":c??"Data keys",renderItem:y=>r.jsxs(r.Fragment,{children:[r.jsx(Ts,{children:y.label??y.key}),y.unit&&r.jsx(Is,{children:y.unit})]})})]})}const Es=h.div`
  position: relative;
`,Cs=h.input`
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

  ${pe}

  &::placeholder {
    color: var(--color-text-faint);
  }
`,As=h.button`
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

  ${pe}
`,Ps=h.div`
  color: var(--color-nogo-text);
  font-size: var(--font-size-compact);
  margin-top: var(--gap-caption);
`,Ts=h.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
`,Is=h.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
  margin-left: var(--gap-trailing-mark);
`,Lt={left:!1,right:!1};function Os(e){const[t,n]=d.useState(Lt),o=d.useRef(Lt);return d.useEffect(()=>{if(!e)return;const a=()=>{const c=e.scrollLeft>1,l=e.scrollLeft+e.clientWidth<e.scrollWidth-1;o.current.left===c&&o.current.right===l||(o.current={left:c,right:l},n(o.current))};a(),e.addEventListener("scroll",a,{passive:!0});const s=typeof ResizeObserver>"u"?null:new ResizeObserver(a);s?.observe(e);for(const c of Array.from(e.children))s?.observe(c);const i=new MutationObserver(()=>{for(const c of Array.from(e.children))s?.observe(c);a()});return i.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",a),s?.disconnect(),i.disconnect()}},[e]),t}const Dt=h.div`
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
`;function Ms({label:e,selected:t,count:n,onToggle:o}){return r.jsxs(Fs,{type:"button",$selected:t,onClick:o,"aria-pressed":t,children:[r.jsx("span",{children:e}),n!==void 0&&r.jsx(zs,{children:n})]})}const Fs=h.button`
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

  ${pe}
`,zs=h.span`
  font-variant-numeric: tabular-nums;
  font-size: var(--font-size-caption);
  opacity: 0.75;
`;function Ls({value:e,onChange:t,clearLabel:n="Clear search",className:o,...a}){const s=d.useRef(null);return r.jsxs(Ds,{className:o,children:[r.jsx(Bs,{...a,ref:s,type:"search",value:e,onChange:i=>t(i.target.value)}),e!==""&&r.jsx(Ns,{type:"button","aria-label":n,onClick:()=>{t(""),s.current?.focus()},children:r.jsx(Vr,{size:"var(--icon-size-control)"})})]})}const Ds=h.div`
  position: relative;
  display: flex;
  align-items: center;
`,Bs=h(Yr)`
  && {
    padding-right: var(--inset-field-clearable-end);
  }
`,Ns=h(Qr)`
  position: absolute;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;function Hs({segment:e="filters",label:t="Search",placeholder:n="Filter..."}={}){const o=so(e),a=[...new Set(o)],[s,i]=d.useState(()=>new Set),[c,l]=d.useState(""),u=d.useId(),f=v=>{i(b=>{const j=new Set(b);return j.has(v)?j.delete(v):j.add(v),j})},p=[...s,c].filter(v=>v.length>0).map(v=>v.toLowerCase()),x=r.jsxs(ot,{gap:"related-packed",children:[r.jsxs(Xr,{children:[r.jsx(Zr,{htmlFor:u,children:t}),r.jsx(Ls,{id:u,value:c,placeholder:n,onChange:l})]}),a.length>0&&r.jsx(Jr,{justify:"start",gap:"related-packed",wrap:!0,role:"group","aria-label":"Filters",children:a.map(v=>r.jsx(Ms,{label:v,selected:s.has(v),onToggle:()=>f(v)},v))})]}),g={matches:v=>{const b=v.toLowerCase();return p.every(j=>b.includes(j))},active:p.length>0};return Wn.set(g,x),g}const Wn=new WeakMap;function Un(e){return Wn.get(e)??null}function Ws({filter:e,children:t,fill:n=!1}){return r.jsxs(ot,{gap:"related-dense",fill:n,children:[Un(e),t]})}function vc({rows:e,segment:t="filters",emptyLabel:n="Nothing matches the filter"}){const o=Hs({segment:t}),a=e.filter(s=>o.matches(s.searchText));return r.jsx(Ws,{filter:o,children:a.length>0?r.jsx(ot,{gap:"related",children:a.map(s=>r.jsx("div",{children:s.node},s.id))}):r.jsx(an,{children:n})})}const Us=24,Gs=96;function Ks({children:e,padded:t,caption:n,footer:o,strip:a,...s}){const i=a!=null&&a!==!1;return r.jsxs(qs,{$padded:t&&!i,$stacked:i,...s,children:[i?r.jsxs(r.Fragment,{children:[r.jsx(Vs,{$padded:t,children:e}),r.jsx(Ys,{"data-framed-display-strip":"",children:a})]}):e,n!=null&&r.jsx(Gn,{children:n}),o!=null&&r.jsx(Qs,{children:o})]})}const qs=h.div`
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
`,Vs=h.div`
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
`,Ys=h.div`
  flex: 3 1 0;
  display: flex;
  min-height: ${Us}px;
  max-height: ${Gs}px;
  min-width: 0;
  overflow: hidden;
`,Gn=h.div`
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
`,Qs=h(Gn)`
  top: auto;
  bottom: var(--offset-frame-footer-bottom);
  left: var(--offset-frame-footer-left);
`,Bt={width:160,height:72},Xs=2.5,Zs=420;function xc({width:e,height:t,plotHasData:n}){return!n&&e>=Bt.width&&t>=Bt.height?"center":e>=Zs&&e>=t*Xs?"beside":"inline"}const Js={overlay:C`
    position: absolute;
    bottom: var(--offset-graph-notice-bottom);
    left: var(--offset-graph-notice-left);
  `,center:C`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    text-align: center;
  `,inline:C`
    flex: 0 0 auto;
    align-self: flex-start;
    max-width: 100%;
    margin-top: var(--gap-sub-readout);
  `,beside:C`
    flex: 0 1 30%;
    align-self: flex-start;
    max-width: 40%;
  `};function ei({placement:e,role:t="status",children:n,...o}){return r.jsx(ti,{$placement:e,role:t,...o,children:n})}const ti=h.div`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
  /* No surface token is translucent, so this scrim stays a raw value. */
  background: rgba(0, 0, 0, 0.7);
  padding: var(--inset-notice-pill);
  border-radius: ${Fr.regular};
  pointer-events: none;

  ${({$placement:e})=>Js[e]}
`,ni=32,ri=25,Nt=8;function oi(e,t){return{pxW:e*ni+(e-1)*Nt,pxH:t*ri+(t-1)*Nt}}const ai="8px";function Kn({percent:e,tone:t,fillColor:n,trackHeld:o=!1,fillHeld:a=!1,children:s,...i}){return r.jsxs(si,{"data-track-held":o?"":void 0,...i,children:[e!==null&&r.jsx(li,{$tone:t,$fillColor:n,$held:a,"data-fill-held":a?"":void 0,style:{width:`${e}%`}}),o&&r.jsx(ii,{"data-track-hatch":"",style:{left:`${e??0}%`}}),s]})}const si=h.div`
  width: 100%;
  border-radius: var(--radius-pill);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  overflow: hidden;
  /* Positioned for the fill only: this overflow rounds the fill's ends and would clip any mark drawn over it. */
  position: relative;
  height: ${ai};
`,ii=h.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(
    -45deg,
    ${F.warn} 0 1px,
    transparent 1px 4px
  );
  opacity: 0.55;
  pointer-events: none;
`,li=h.div`
  height: 100%;
  border-radius: var(--radius-pill);
  transition: width var(--duration-slow) var(--ease-standard);
  /* A held reading dims the fill, not the hue and not the whole bar, so a label beside it stays readable. */
  ${({$held:e})=>e?"opacity: 0.55;":""}
  background: ${({$tone:e,$fillColor:t})=>t??F[e]};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function bc({label:e,value:t,capacity:n,format:o,tone:a="neutral",fillColor:s,valueLabel:i,valueLabelNode:c,layout:l="stacked",hideLabel:u=!1,statement:f=!1,...p}){const x=Ht(t),g=Ht(n),v=ci(x.figure,n===void 0?void 0:g.figure);if(v===null||!Number.isFinite(v))return u?null:r.jsx(Xn,{layout:l,label:e,display:r.jsx(zr,{}),...p,children:r.jsx(Kn,{percent:null,tone:a,"aria-hidden":"true"})});const b=Math.min(1,Math.max(0,v)),j={label:e,layout:l,hideLabel:u,statement:f,pct:Math.round(b*100),tone:a,fillColor:s,trackHeld:g.reading?.state==="held"&&!kt(g.figure),fillHeld:x.reading?.state==="held"&&!kt(x.figure),...p},w=Ze(1,Xe(g.reading,g.figure,g.figure));if(n!==void 0)return r.jsx(Zo,{of:x.figure?.unit,format:o,children:r.jsx(ui,{...j,value:t,capacity:n,shown:x,held:g,endBounds:w,at:b,valueLabel:i,valueLabelNode:c})});const R=Ze(b,Xe(x.reading,x.figure,null));return r.jsx(Qn,{...j,bounds:R,endBounds:w,display:c??(i===void 0?r.jsx(Q,{value:t,format:o}):r.jsx(Vn,{caption:Pe(t),children:i})),spoken:Yn(i===void 0?ee(x.figure,{format:o}):qn(i,Pe(t)),R,w)})}function Pe(e){const{held:t,caption:n}=Oe(e??null);return t?n:null}function qn(e,t){return t===null?e:`${e}, ${t}`}function Vn({caption:e,children:t}){return e===null?r.jsx(r.Fragment,{children:t}):r.jsx(nt,{caption:e,children:t})}function Ht(e){return typeof e!="object"||e===null||!("state"in e)?{figure:e??null,reading:null}:{figure:e.value??null,reading:e}}function ci(e,t){return e===null||t===null||t!==void 0&&!t.isPositive()?null:(t===void 0?e:e.dividedBy(t)).magnitude}function Xe(e,t,n){if(e===null||e.reckoning.status!=="available"||t===null)return null;const o=gn(e.reckoning.band,t.unit);if(!o)return null;const a={loSaid:o.lo,hiSaid:o.hi,kind:o.kind};return n===null?{lo:ye(o.lo,0),hi:ye(o.hi,0),...a}:n.isPositive()?{lo:ye(o.lo.dividedBy(n),0),hi:ye(o.hi.dividedBy(n),0),...a}:null}function Ze(e,t){return t===null?null:Ee(e,[t.lo,t.hi],Ho())?t:null}function Yn(e,t,n,o){const a=(i,c)=>{const l=ee(i.loSaid,o),u=ee(i.hiSaid,o);return`${c}with bands at ${l} and ${u}`},s=[t===null?null:a(t,""),n===null?null:a(n,"capacity ")].filter(i=>i!==null);return s.length===0?e:`${e}, ${s.join(", ")}`}function di(e){if(!Number.isFinite(e))return 0;const t=Math.min(1,Math.max(0,e));return Math.round(t*1e4)/100}function je(e){const t=di(e),n=t<=0?0:t>=100?-2:-1;return{style:{left:`${t}%`,transform:`translateX(${n}px)`}}}function Qn({label:e,layout:t,hideLabel:n,statement:o,pct:a,tone:s,fillColor:i,trackHeld:c,fillHeld:l,display:u,spoken:f,bounds:p,endBounds:x,...g}){return r.jsxs(Xn,{layout:t,label:e,display:u,hideHead:n,statement:o,...g,children:[r.jsx(Kn,{percent:a,tone:s,fillColor:i,trackHeld:c,fillHeld:l,role:"meter","aria-label":e,"aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":f}),(p!==null||x!==null)&&r.jsxs(vi,{"aria-hidden":"true",children:[p!==null&&r.jsxs(r.Fragment,{children:[r.jsx(ke,{"data-bound":"lo",...je(p.lo)}),r.jsx(ke,{"data-bound":"hi",...je(p.hi)})]}),x!==null&&r.jsxs(r.Fragment,{children:[r.jsx(ke,{"data-end-bound":"lo",...je(x.lo)}),r.jsx(ke,{"data-end-bound":"hi",...je(x.hi)})]})]})]})}function Xn({layout:e,label:t,display:n,hideHead:o=!1,statement:a=!1,children:s,...i}){return o?r.jsxs(Ke,{$row:!1,...i,children:[r.jsx(qe,{$row:!1,children:s}),a&&r.jsx(mi,{"data-meter-part":"statement",children:n})]}):e==="row"?r.jsxs(Ke,{$row:!0,"data-meter-row":"",...i,children:[r.jsx(Ut,{"data-meter-part":"label",children:t}),r.jsx(qe,{$row:!0,"data-meter-part":"bar",children:s}),r.jsx(Gt,{$row:!0,"data-meter-part":"figure",children:n})]}):r.jsxs(Ke,{$row:!1,...i,children:[r.jsxs(gi,{children:[r.jsx(Ut,{children:t}),r.jsx(Gt,{$row:!1,children:n})]}),r.jsx(qe,{$row:!1,children:s})]})}function ui({value:e,capacity:t,shown:n,held:o,at:a,valueLabel:s,valueLabelNode:i,...c}){const l=s===void 0,u=Ve(l?n.figure:void 0),f=Ve(l?o.figure:void 0),p=u??f??{},x=Pe(e)??Pe(t),g=i??(s!==void 0?r.jsx(Vn,{caption:x,children:s}):c.layout==="row"?r.jsxs(xi,{$marked:c.fillHeld||c.trackHeld,children:[r.jsx(Q,{value:e,hideUnitInGroup:!0})," / ",r.jsx(Q,{value:t}),(c.fillHeld||c.trackHeld)&&r.jsx(eo,{"aria-hidden":"true","data-held-mark":""})]}):r.jsxs(r.Fragment,{children:[r.jsx(Q,{value:e})," / ",r.jsx(Q,{value:t})]})),v=s===void 0?`${ee(n.figure,p)} of ${ee(o.figure,p)}`:qn(s,x),b=Ze(a,Xe(n.reading,n.figure,o.figure));return r.jsx(Qn,{...c,display:g,spoken:Yn(v,b,c.endBounds,p),bounds:b})}const Je=48;function wc({children:e,...t}){const n=d.useRef(null);return d.useLayoutEffect(()=>{const o=n.current;if(!o||typeof ResizeObserver>"u")return;const a=()=>{o.clientWidth!==0&&o.toggleAttribute("data-figures-below",!hi(o))};let s=0;const i=()=>{cancelAnimationFrame(s),s=requestAnimationFrame(a)},c=new ResizeObserver(i),l=()=>{c.disconnect(),c.observe(o);for(const f of Zn(o))c.observe(f)},u=new MutationObserver(l);return u.observe(o,{childList:!0,subtree:!0}),l(),a(),()=>{cancelAnimationFrame(s),c.disconnect(),u.disconnect()}},[]),r.jsx(pi,{ref:n,...t,children:e})}const yc=h.div.attrs({"data-meter-row-group":""})`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  row-gap: var(--gap-meter-rows);
  min-width: 0;

  & > * {
    grid-column: 1 / -1;
    min-width: 0;
  }
`;function Zn(e){return Array.from(e.querySelectorAll(':scope > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row] > [data-meter-part="figure"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="label"], :scope > [data-meter-row-group] > [data-meter-row] > [data-meter-part="figure"]'))}function hi(e){const t=Zn(e);if(t.length===0)return!0;let n=0,o=0;for(const l of t)l.dataset.meterPart==="label"?n=Math.max(n,fi(l)):o=Math.max(o,l.scrollWidth);const a=getComputedStyle(e),s=l=>Number.parseFloat(l)||0,i=s(a.columnGap),c=e.clientWidth-s(a.paddingLeft)-s(a.paddingRight);return n+i+Je+i+o<=c}function fi(e){const t=e.style.whiteSpace;e.style.whiteSpace="nowrap";const n=e.scrollWidth;return e.style.whiteSpace=t,n}const pi=h.div`
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
`,Wt="1px",Ke=h.div`
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
`,gi=h.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--gap-label-value);
  min-width: 0;
  /* The value may drop to its own line at narrow widths rather than crushing the label. */
  flex-wrap: wrap;
`,Ut=h.span`
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
`,Gt=h.span`
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
`,mi=h.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,vi=h.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,qe=h.div`
  position: relative;
  ${({$row:e})=>e?C`
          flex: 1 1 28px;
          min-width: 28px;
        `:""}
`,xi=h(to)`
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
`,ke=h.div`
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
`;function bi(e){if(Ce(e.tags)==="ribbon"){const t=e.effectiveDelaySeconds,n=e.ribbons?.length??0,o=e.streams?.length??0;return t===null||t<=0?!1:n>0||t>=Rn&&o>0}return e.inFlight.length>0}function Jn({tiny:e}={}){const t=ga(),n=ht();d.useEffect(()=>n?ma(n):void 0,[n]);const o=t.filter(bi),a=t.flatMap(m=>(m.refusals??[]).map(y=>({...y,tags:m.tags}))),s=t.flatMap(m=>(m.losses??[]).map(y=>({...y,tags:m.tags}))),i=t.flatMap(m=>(m.founds??[]).map(y=>({...y,tags:m.tags}))),c=t.flatMap(m=>(m.undelivered??[]).map(y=>({...y,tags:m.tags}))),l=t.flatMap(m=>(m.failures??[]).map(y=>({...y,tags:m.tags}))),u=a.length+c.length+l.length,f=o.length>0||u>0||s.length>0||i.length>0,[p,x]=d.useState(!1),[g,v]=d.useState(!1),[b,j]=d.useState(!1),w=p||g&&!b;d.useEffect(()=>{f||(x(!1),v(!1),j(!1))},[f]);const R=d.useId(),I=[...o.filter(m=>Ce(m.tags)==="ribbon"),...o.filter(m=>Ce(m.tags)!=="ribbon")],_=t.some(m=>m.dismiss&&(m.refusals?.length??0)>0)?m=>t.find(y=>y.refusals?.some(T=>T.id===m))?.dismiss?.(m):void 0,E=t.some(m=>m.dismiss&&(m.losses?.length??0)>0)?m=>t.find(y=>y.losses?.some(T=>T.id===m))?.dismiss?.(m):void 0,H=t.some(m=>m.dismiss&&(m.undelivered?.length??0)>0)?m=>t.find(y=>y.undelivered?.some(T=>T.id===m))?.dismiss?.(m):void 0,L=t.some(m=>m.dismiss&&(m.failures?.length??0)>0)?m=>t.find(y=>y.failures?.some(T=>T.id===m))?.dismiss?.(m):void 0,P=t.some(m=>m.dismiss&&(m.founds?.length??0)>0)?m=>t.find(y=>y.founds?.some(T=>T.id===m))?.dismiss?.(m):void 0;return r.jsxs(wi,{"data-panel-rail-frame":"",$tiny:e,$hasContent:f,children:[t.length>0&&r.jsxs(Fe,{visuallyHidden:!0,additionsOnly:!0,children:[a.map(m=>r.jsx("span",{children:ut(m)},`refusal:${m.id}`)),s.map(m=>r.jsx("span",{children:$n(m)},`loss:${m.id}`)),c.map(m=>r.jsx("span",{children:Nn(m)},`undelivered:${m.id}`)),l.map(m=>r.jsx("span",{children:Bn(m)},`failure:${m.id}`)),i.map(m=>r.jsx("span",{children:yn(m)},`found:${m.id}`))]}),f?r.jsxs($i,{"data-panel-rail":"","data-grown":w,"data-pinned":p,"data-suppress-hover":b,onMouseEnter:()=>{j(!1),v(!0)},onMouseLeave:()=>v(!1),onKeyDown:m=>{m.key==="Escape"&&p&&(m.stopPropagation(),x(!1),j(!0))},children:[r.jsx(ji,{type:"button","aria-expanded":p,"aria-controls":R,"aria-label":"Signal-delay detail",onClick:()=>{x(m=>{const y=!m;return y||j(!0),y})},children:r.jsx(Ri,{"aria-hidden":"true",hidden:!w,children:"▲"})}),r.jsxs(ki,{id:R,"data-panel-rail-detail":"",children:[I.map(m=>r.jsx(ps,{handle:m,variant:w?"expanded":"rail","aria-label":m["aria-label"]??(w?"Delay detail":void 0)},m.id)),!w&&(u>0||s.length>0||i.length>0)&&r.jsxs(Si,{children:[u>0&&r.jsx(Kt,{children:u===1?"1 command failed":`${u} commands failed`}),s.length>0&&r.jsx(Kt,{children:s.length===1?"1 command unconfirmed":`${s.length} commands unconfirmed`}),i.length>0&&r.jsx(_i,{children:i.length===1?"1 unconfirmed command answered":`${i.length} unconfirmed commands answered`})]})]})]}):null,w&&a.length>0&&r.jsx(se,{kind:"refused",entries:a,onDismiss:_,live:!1}),w&&s.length>0&&r.jsx(se,{kind:"lost",entries:s,onDismiss:E,live:!1}),w&&c.length>0&&r.jsx(se,{kind:"undelivered",entries:c,onDismiss:H,live:!1}),w&&l.length>0&&r.jsx(se,{kind:"failed",entries:l,onDismiss:L,live:!1}),w&&i.length>0&&r.jsx(se,{kind:"found",entries:i,onDismiss:P,live:!1})]})}const wi=h.div`
  /* Never shrinks below its content: the grown rail keeps its full height and the body gives up the difference. */
  flex: 0 0 auto;
  /* Fully opaque so content scrolling under the rail never ghosts through: except a tiny panel's empty band, which paints nothing so the panel's own focus ring stays visible behind it. */
  background: ${({$tiny:e,$hasContent:t})=>e&&!t?"transparent":"var(--color-surface-panel)"};
  /* Up into the container's top inset, the band; both read --panel-rail-band, so they cannot drift. */
  margin-top: calc(-1 * var(--panel-rail-band));
  min-height: var(--panel-rail-band);
`,yi=C`
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
`,$i=h.div`
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
    ${yi}
  }
`,ji=h.button`
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

  ${ge}

  &[aria-expanded="true"] {
    pointer-events: none;
  }

`,ki=h.div`
  display: contents;
`,Kt=h.span`
  color: ${K.warn};
`,Si=h.span`
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
`,_i=h.span`
  color: var(--color-info-text);
`,Ri=h.span`
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
`,er=d.createContext(null);function $c({badges:e,children:t}){return r.jsx(er.Provider,{value:e,children:t})}function Ei(){return d.useContext(er)}function tr({severity:e,count:t=1}){const n=t>1;return r.jsx(Ci,{"data-panel-status-dot":"","data-severity":e,role:"img","aria-label":n?`${t} ${he[e]}`:he[e],$mark:F[e],$digits:n?String(t).length:1,children:n&&r.jsx(Ai,{$fill:Dr[e],$ink:Lr[e],children:t})})}const qt="8px",Ci=h.span`
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
`,Ai=h.span`
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
`,Pi=()=>()=>{},Vt=()=>io;function nr(){const e=hn();return d.useSyncExternalStore(e?e.subscribe:Pi,e?e.getBreakdown:Vt,e?e.getBreakdown:Vt)}const Ti=()=>()=>{},Yt=()=>null;function Ii(){const e=hn();return d.useSyncExternalStore(e?e.subscribe:Ti,e?e.getSummary:Yt,e?e.getSummary:Yt)}const Oi=12;function Mi(e,t){if(!e||typeof document>"u")return 0;const n=e.cloneNode(!0);n.textContent=t,n.style.position="fixed",n.style.visibility="hidden",n.style.pointerEvents="none",n.style.left="-99999px",n.style.top="-99999px",n.style.width="max-content",n.style.maxWidth="none",document.body.appendChild(n);const o=n.getBoundingClientRect().width;return document.body.removeChild(n),o}function Fi(e,t,n){if(t<=0||n.length===0||n[0]<=0)return 0;for(let o=0;o<n.length;o++){const a=o<e?t-Oi:t;if(n[o]<=a)return o}return n.length-1}function zi(e,t,n){const[o,a]=d.useState(0),s=d.useRef(o);s.current=o;const i=[t,...n].join(`
`),c=d.useCallback(()=>{const l=e.current,u=i.split(`
`);if(!l||u.length<2){s.current!==0&&(s.current=0,a(0));return}const f=u.map(x=>Mi(l,x)),p=Fi(s.current,l.clientWidth,f);p!==s.current&&(s.current=p,a(p))},[e,i]);return d.useLayoutEffect(()=>{c()},[c]),d.useEffect(()=>{const l=e.current;if(!l||typeof ResizeObserver>"u")return;const u=new ResizeObserver(()=>c());return u.observe(l),()=>u.disconnect()},[e,c]),{index:o,compacted:o>0}}const Li=24;function Di(e,t,n,o,a=!0){if(t<=0||n<=0)return e;const s=o!==void 0&&o>0&&o!==n;return e&&!s&&a?!(t>n+Li):n>t}function Qt(e,t={},n){const o=e?.parentNode;if(!e||!o)return 0;const a=e.cloneNode(!0);n!==void 0&&(a.textContent=n),Object.assign(a.style,{position:"absolute",visibility:"hidden",pointerEvents:"none",top:"0",left:"0",width:"max-content",minWidth:"0",maxWidth:"none",...t}),a.setAttribute("aria-hidden","true"),o.insertBefore(a,e.nextSibling);const s=a.getBoundingClientRect().width;return o.removeChild(a),s}const Bi={flexDirection:"row",flexWrap:"nowrap",padding:"0",border:"0"};function ie(e){return Number.parseFloat(e)||0}function Ni(e,t,n,o){const[a,s]=d.useState(!1),i=d.useRef(a);i.current=a;const c=d.useRef(void 0),l=d.useRef(void 0),u=d.useRef(!1),f=d.useRef(o);f.current=o;const p=d.useCallback(()=>{const g=e.current;if(!g)return;const v=getComputedStyle(g),b=g.getBoundingClientRect().width-ie(v.paddingLeft)-ie(v.paddingRight),j=Qt(t.current,{},f.current),w=Qt(n.current,Bi),R=n.current?.closest("[data-panel-aside-expand]")?.parentElement,I=R?getComputedStyle(R):null,k=j===0||w===0?j+w:j+ie(v.columnGap)+ie(I?.paddingLeft??"")+ie(I?.paddingRight??"")+w,_=i.current,S=b>0&&l.current!==void 0&&b<l.current;_&&S&&(u.current=!0);const E=Di(_,b,k,c.current,u.current);E!==_&&(u.current=E&&S),b>0&&(l.current=b),k>0&&(c.current=k),E!==i.current&&(i.current=E,s(E))},[e,t,n]),x=d.useRef({title:null,aside:null,observer:null});return d.useLayoutEffect(()=>{const g=t.current,v=n.current,b=x.current;if(b.observer===null||b.title!==g||b.aside!==v){b.observer?.disconnect(),b.title=g,b.aside=v,b.observer=typeof MutationObserver>"u"?null:new MutationObserver(()=>p());for(const j of[g,v])j&&b.observer?.observe(j,{subtree:!0,childList:!0,characterData:!0,attributes:!0});p();return}b.observer.takeRecords().length>0&&p()}),d.useEffect(()=>{const g=x.current;return()=>{g.observer?.disconnect(),g.observer=null}},[]),d.useEffect(()=>{const g=e.current;if(!g||typeof ResizeObserver>"u")return;const v=new ResizeObserver(()=>p());return v.observe(g),n.current&&v.observe(n.current),()=>v.disconnect()},[e,n,p]),a}const rr=d.createContext("full"),Hi=rr.Provider;function jc(){return d.useContext(rr)}const vt=d.createContext(null);function or({children:e}){const[t,n]=d.useState(null),o=d.useMemo(()=>({scroller:t,registerScroller:n}),[t]);return r.jsx(vt.Provider,{value:o,children:e})}function Wi({children:e}){return r.jsx(or,{children:e})}const ar=`
  & > [${fn}] {
    flex: 1 1 auto;
    min-height: var(--size-section-fill-floor);
  }
`,Te=h.div`
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
  ${({$hoverTitle:e})=>e?ge:""}
  /* A hand-composed panel can put sections straight in here, so this box owns the leftover height. */
  ${ar}
`,Ui=h.h3`
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
`,sr=d.forwardRef(function({compact:t,children:n,...o},a){const s=d.useRef(null),i=typeof n=="string"?n:"",c=t===void 0||i===""?Gi:typeof t=="string"?[t]:t,{index:l,compacted:u}=zi(s,i,c);return r.jsx(Z,{text:u?i:void 0,children:r.jsx(Ui,{...o,ref:f=>{if(s.current=f,typeof a=="function"){a(f);return}a&&(a.current=f)},"aria-label":u?i:void 0,children:l===0?n:c[l-1]})})}),Gi=[],Ki=h.div`
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
`,qi=h.div`
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
`,Vi=h.span`
  display: flex;
  flex: 0 0 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  & > *::before {
    content: "\\00a0";
  }
`,Yi=h.div`
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  /* Never grows or wraps: an aside that stops fitting collapses to the dots. */
  justify-content: flex-end;
  flex-shrink: 0;
  /* Mirrors PanelTitle's inset so the badges line up with the title. */
  padding: var(--inset-panel-header);
`,Qi=h.details`
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
    ${pe}
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

  ${({$collapsed:e})=>e&&C`
      & > summary {
        display: inline-flex;
      }
      /* Hidden rather than display: none, so useHeaderAsideFit's clone measurement sees it as it sees the inline state. */
      &:not([open]):not([data-hovering]) > [data-panel-aside-full] {
        position: absolute;
        top: 0;
        right: 0;
        visibility: hidden;
        pointer-events: none;
      }
      /* Collapsed and open, or held open by the pointer: floats over the body so its controls do not reflow the panel. */
      &[open] > [data-panel-aside-full],
      &[data-hovering] > [data-panel-aside-full] {
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
`,Xi=120;function ir(e){const t=e.map(n=>n.labels.length===0?`${n.count} ${he[n.severity]}`:`${he[n.severity]}: ${n.labels.join(", ")}`);return t.length===0?null:t.join(`
`)}function lr({title:e,compactTitle:t,aside:n,toolbar:o,...a}){const s=nr(),i=d.useRef(null),c=d.useRef(null),l=d.useRef(null),u=Ni(i,c,l,typeof e=="string"?e:void 0),[f,p]=d.useState(!1),[x,g]=d.useState(!1),v=d.useRef(null),b=d.useRef(null),j=d.useRef(null),w=d.useCallback(()=>{v.current!==null&&clearTimeout(v.current),v.current=null},[]);d.useEffect(()=>{u||(p(!1),g(!1))},[u]),d.useEffect(()=>w,[w]);const R=u&&(f||x);d.useEffect(()=>{if(!R)return;const S=A=>{if(A.key!=="Escape")return;A.stopPropagation();const H=b.current?.contains(document.activeElement);w(),g(!1),p(!1),H&&j.current?.focus()},E=A=>{b.current?.contains(A.target)||(w(),g(!1),p(!1))};return document.addEventListener("keydown",S,!0),document.addEventListener("pointerdown",E,!0),()=>{document.removeEventListener("keydown",S,!0),document.removeEventListener("pointerdown",E,!0)}},[R,w]);const I=u?ir(s):null,{anchor:k,tip:_}=tt(R?null:I);return r.jsxs(Ki,{ref:i,"data-panel-header":"",...a,children:[r.jsxs(qi,{children:[e!==void 0&&r.jsx(sr,{ref:c,compact:t,children:e}),r.jsx(Vi,{"aria-hidden":"true",children:r.jsx(Re,{children:null})})]}),n!==void 0&&r.jsx(Yi,{children:r.jsxs(Qi,{ref:b,"data-panel-aside-expand":"","data-hovering":u&&x?"":void 0,$collapsed:u,open:u?f:!0,onToggle:S=>{u&&(p(S.currentTarget.open),S.currentTarget.open||g(!1))},onPointerEnter:S=>{!u||S.pointerType==="touch"||(w(),g(!0))},onPointerLeave:S=>{S.pointerType!=="touch"&&(w(),v.current=setTimeout(()=>{v.current=null,g(!1)},Xi))},children:[r.jsxs("summary",{ref:j,"data-tooltip":k["data-tooltip"],onPointerDown:k.onPointerDown,onPointerUp:k.onPointerUp,onFocus:k.onFocus,onBlur:k.onBlur,"aria-description":I??void 0,"aria-label":s.length===0?"Panel status and controls":`${s.map(S=>`${S.count} ${he[S.severity]}`).join(", ")}. Panel status and controls`,children:[s.map(S=>r.jsx(tr,{severity:S.severity,count:S.count},S.severity)),r.jsx("span",{"data-panel-aside-chevron":"","aria-hidden":"true"})]}),_,r.jsx(Hi,{value:u?"collapsed":"full",children:r.jsx("div",{"data-panel-aside-full":"",ref:l,children:n})})]})}),o!==void 0&&r.jsx(cr,{children:o})]})}const cr=h.div`
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
`,Zi=h.div`
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
  ${ge}
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
  ${({$loneFrame:e})=>e?`@container (width < ${Ji}) {
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
`,Ji="25rem";function dr({children:e,fitToSize:t,loneFrame:n,hoverTitle:o,...a}){const i=d.useContext(vt)?.registerScroller,[c,l]=d.useState(null),u=d.useCallback(p=>{i?.(p),l(p)},[i]),f=cn(c);return r.jsx(Zi,{ref:u,tabIndex:f,"data-panel-body":"",$fitToSize:t,$loneFrame:n,"data-panel-lone-frame":n?"":void 0,$hoverTitle:o,...a,children:e})}const el="13rem",tl=h.div`
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
  & > [${lo}] {
    grid-column: 1 / -1;
  }
`;function nl({children:e,hoverTitle:t}){const n=d.useRef(null),o=d.useRef(null),a=al(n,o);return r.jsx(rl,{ref:n,$fits:a,"data-panel-fit-body":"",children:r.jsx(ol,{ref:o,$fits:a,$hoverTitle:t,children:e})})}const rl=h.div`
  flex: 1;
  min-height: 0;
  /* Takes back the body's gap above and its bottom inset, so the box is all the room a tiny tile has and centring is measured against it. Reads the body's own custom property rather than the raw token, so a stepped-down bottom inset (loneFrame, hoverTitle) is taken back by exactly as much. */
  margin-top: calc(-1 * var(--gap-related));
  margin-bottom: calc(-1 * var(--panel-body-bottom));
  display: flex;
  flex-direction: column;
  /* Never clips: the body owns the real boundary. */
  ${({$fits:e})=>e?"justify-content: center;":"justify-content: flex-start;"}
`,ol=h.div`
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
`;function al(e,t){const[n,o]=d.useState(!0);return d.useLayoutEffect(()=>{const a=e.current,s=t.current;if(!a||!s)return;const i=()=>{o(il(sl(s),a.clientHeight))};if(i(),typeof ResizeObserver>"u")return;const c=new ResizeObserver(i),l=()=>{c.observe(a),c.observe(s);for(const f of Array.from(s.children))c.observe(f)};l();const u=new MutationObserver(()=>{l(),i()});return u.observe(s,{childList:!0}),()=>{c.disconnect(),u.disconnect()}},[e,t]),n}function sl(e){const t=Array.from(e.children,n=>n.getBoundingClientRect());return t.length===0?e.scrollHeight:Math.max(...t.map(n=>n.bottom))-Math.min(...t.map(n=>n.top))}function il(e,t){return e<=t}const ll=h.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Fills the flex-column parent so the inner scroller engages rather than spilling past the panel edge. */
  flex: 1;
  min-height: 0;
  /* Out to the panel's edges, its content back on the column, so a strip inside that bleeds is not clipped by this scroller. */
  margin-inline: calc(-1 * var(--bleed-inline));
`,cl=h.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding-inline: var(--bleed-inline);
  ${ge}
  /* The glow indicators show scroll state, so the native bar is hidden. */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,Ie=h.div`
  position: absolute;
  /* Flush with the scroller's edges: the body's inset is inside the scroller, so nothing pads this. */
  left: 0;
  right: 0;
  ${({$position:e,$topOffset:t})=>e==="top"?`top: ${t??"0"};`:"bottom: 0;"}
  /* The box both layers fade within; each sets its own reach in its gradient stops. */
  height: 44px;
  /* The audit reads the mask depth from the gradient, so the literal height costs it nothing. */
  ${Mo("panel-scroll-glow")}
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
`,dl=d.forwardRef(function({children:t,...n},o){const a=d.useRef(null),[s,i]=d.useState(null),c=d.useCallback(f=>{a.current=f,i(f)},[]);d.useImperativeHandle(o,()=>a.current);const l=dn(s,fr,pr,hr),u=cn(s);return r.jsxs(ll,{...n,children:[r.jsx(cl,{ref:c,tabIndex:u,"data-scroll-area-inner":"",children:t}),r.jsx(Ie,{$position:"top",$visible:l.top}),r.jsx(Ie,{$position:"bottom",$visible:l.bottom})]})});function ul(e){const t=Number.parseFloat(e);if(Number.isFinite(t)){if(e.endsWith("px"))return t;if(e.endsWith("rem")){const n=typeof document>"u"?16:Number.parseFloat(getComputedStyle(document.documentElement).fontSize||"16");return t*(Number.isFinite(n)?n:16)}}}const Xt="14rem",hl=5,fl="45%",pl=`min(${oi(1,hl).pxH}px, ${fl})`;function Zt(e,t){return e==="start"?`minmax(0, ${t}) minmax(0, 1fr)`:`minmax(0, 1fr) minmax(0, ${t})`}const gl=h.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
  display: grid;
  gap: 0;
  /* Every track is minmax(0, ...), or a sidebar with its own ScrollArea floors at its content and is clipped instead of scrolling. */
  ${({$axis:e,$side:t,$size:n})=>e==="inline"?`grid-template-columns: ${Zt(t,n)};
         grid-template-rows: minmax(0, 1fr);`:`grid-template-columns: minmax(0, 1fr);
         grid-template-rows: ${Zt(t,n)};`}

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
`;function ml({side:e="end",size:t,railBand:n,children:o,...a}){const{ref:s,size:i}=me({w:1,h:1}),c=ul(t??Xt),l=i.w<=1||c===void 0||i.w>=c*2,u=i.w>=i.h&&l?"inline":"block",f=t??(u==="inline"?Xt:pl);return r.jsx(gl,{ref:s,"data-panel-split":u,$axis:u,$side:e,$size:f,$railBand:n,...a,children:o})}const vl=h(dl)`
  /* Longhands, because jsdom drops a shorthand made of var() calls. */
  & > [data-scroll-area-inner] {
    padding-top: var(--inset-panel-top);
    padding-right: var(--gutter-panel);
    padding-bottom: var(--inset-panel-bottom);
    padding-left: var(--gutter-panel);
  }
`,xl=h.div`
  display: flex;
  flex-direction: column;
  /* Grid items floor at min-content, which would let the ScrollArea grow the track instead of scrolling. */
  min-width: 0;
  min-height: 0;
`;function ur({children:e,...t}){return r.jsx(xl,{"data-panel-sidebar":"",...t,children:r.jsx(vl,{children:e})})}const hr={top:!1,bottom:!1};function fr(e){return{top:e.scrollTop>1,bottom:e.scrollTop+e.clientHeight<e.scrollHeight-1}}function pr(e,t){return e.top===t.top&&e.bottom===t.bottom}const bl=h.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;function gr({children:e,railBandAbove:t,...n}){const o=d.useContext(vt),a=o?.scroller??null;d.useEffect(()=>{},[o]);const s=dn(a,fr,pr,hr);return r.jsxs(bl,{...n,children:[e,r.jsx(Ie,{$position:"top",$visible:s.top,$topOffset:t?"var(--panel-rail-band)":void 0}),r.jsx(Ie,{$position:"bottom",$visible:s.bottom})]})}function wl(e,t){if(e===void 0||e.length===0)return t??[];if(t===null||t.length===0)return e;const n=new Set(e.map(o=>o.id));return[...e,...t.filter(o=>!n.has(o.id))]}const kc=["sections","actions"],Se=Object.freeze({});function yl({summary:e}){const t=d.useRef(e.severity),[n,o]=d.useState(0);d.useEffect(()=>{t.current!==e.severity&&(t.current=e.severity,o(s=>s+1))},[e.severity]);const a=ir(nr());return r.jsx($l,{$pulse:n,children:r.jsx(Z,{text:a,focusable:!0,children:r.jsx(Re,{tone:e.severity,size:"sm",children:e.label})})})}const $l=h.span`
  display: inline-flex;
  ${({$pulse:e})=>e>0&&C`
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
`,mr=h.div`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--inset-panel-footer);
  background: var(--color-surface-panel);
`,jl=h.div`
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
`;function kl({render:e}){const{ref:t,size:n}=me({w:0,h:0});return r.jsx(Sl,{ref:t,"data-panel-trend":"",children:n.w>0&&n.h>0&&e(n)})}const Sl=h.div`
  flex: 0 0 var(--size-panel-trend);
  height: var(--size-panel-trend);
  min-width: 0;
  overflow: hidden;
`,_l=h.div`
  flex: 1 1 100%;
  min-width: 0;
`,Rl=h(lr)`
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
`,El=h.div`
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
`,Cl=h(Me)`
  margin: 0;
  ${un}
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  max-width: 100%;
  text-overflow: ellipsis;
  ${Te}:hover &,
  ${Te}:focus & {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-pill);
    padding: var(--inset-chip);
  }
`;function Al(e){let t=null;for(const n of e){const{label:o,tone:a}=dt(n);a===void 0||a==="neutral"||(t===null||jt(a)>jt(t.severity))&&(t={severity:a,label:o})}return t}function Jt({badges:e}){return r.jsx(r.Fragment,{children:e.map(t=>r.jsx(Pl,{entry:t},t.id))})}function Pl({entry:e}){const{label:t,tone:n}=dt(e);return rt(n===void 0||n==="neutral"?null:{id:e.id,severity:n,label:t}),null}function Tl({summary:e,announcement:t}){return r.jsxs(r.Fragment,{children:[r.jsx(Z,{text:e.label,focusable:!0,children:r.jsx(Il,{children:r.jsx(tr,{severity:e.severity})})}),r.jsx(Fe,{visuallyHidden:!0,assertive:!0,children:t})]})}const Il=h.span`
  display: inline-flex;
  align-items: center;
  padding: var(--inset-chip);
`,Ol=h.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--gap-panel-aside);
  pointer-events: auto;
`;function Ml(e){return e.hoverTitle?r.jsx(Fl,{...e}):r.jsx(vr,{...e,hoverTitleId:void 0})}function Fl(e){const t=d.useId();return r.jsx(vr,{...e,hoverTitleId:t})}function vr({panelTitle:e,compactTitle:t,panelAside:n,panelBadges:o,panelStatus:a,panelToolbar:s,panelFilter:i,panelFooter:c,panelTrend:l,inactive:u,fitToSize:f,hoverTitle:p,hoverTitleId:x,panelSidebar:g,sidebarSide:v,sidebarSize:b,sections:j,sectionMinWidth:w=el,children:R,...I}){const k=Ei(),_=$t("actions"),S=$t("sections"),E=wl(o,k),A=E.length===0?null:E.map(M=>{const{label:G,tone:V,title:$r}=dt(M);return r.jsx(Z,{text:$r,focusable:!0,children:r.jsx(Re,{tone:V,report:V===void 0||V==="neutral"?void 0:{id:M.id},children:G})},M.id)}),H=i===void 0?s:r.jsxs(r.Fragment,{children:[s,r.jsx(_l,{children:Un(i)})]}),D=a??null,L=D!==null&&D!=="none"&&D!=="live"?D:null;rt(L?{id:"stream",severity:_e(L),label:wt(L)??""}:null);const N=Ii(),P=N!==null&&E.some(M=>M.id===N.id),m=L===null?null:wt(L),y=P?null:N!==null?r.jsx(yl,{summary:N}):L===null||m===null?null:r.jsx(Z,{text:`Telemetry stream: ${m}`,focusable:!0,children:r.jsx(Re,{tone:_e(L),size:"sm",children:m})}),T=N?.label??m,$=T===null||T===""?"":typeof e=="string"?`${e}: ${T}`:`Status: ${T}`,z=n===void 0&&y===null&&A===null&&!_?void 0:r.jsxs(r.Fragment,{children:[n,_&&r.jsx(be,{segment:"actions",props:Se}),A,y]}),O=N??Al(E)??(L===null||m===null?null:{severity:_e(L),label:m}),U=O?.severity!=="nogo"?void 0:typeof e=="string"?`${e}: ${O.label}`:`Status: ${O.label}`,B=n===void 0&&O===null&&!_?E.length===0?void 0:r.jsx(Jt,{badges:E}):r.jsxs(r.Fragment,{children:[n,_&&r.jsx(be,{segment:"actions",props:Se}),r.jsx(Jt,{badges:E}),O!==null&&r.jsx(Tl,{summary:O,announcement:U})]}),q=u!==void 0,ve=q?[]:d.Children.toArray(j),He=ve.length>0,br=R===void 0&&!S&&!f&&ve.length===1&&zl(ve[0]),te=[];for(const M of ve){const G=!f&&d.isValidElement(M)&&M.props.fill===!0,V=te.at(-1);!G&&V!==void 0&&!V.fill?V.nodes.push(M):te.push({fill:G,nodes:[M]})}He&&!te.some(M=>!M.fill)&&te.push({fill:!1,nodes:[]});const wr=te.reduce((M,G,V)=>G.fill?M:V,-1),yr=M=>Math.max(1,M.filter(G=>!(d.isValidElement(G)&&G.props.full===!0)).length),xe=[];for(const M of te){const G=xe.length;if(M.fill){xe.push(M.nodes[0]);continue}xe.push(r.jsxs(tl,{$min:w,$columns:yr(M.nodes),children:[M.nodes,G===wr&&r.jsx(be,{segment:"sections",props:Se})]},`sections-${G}`))}const xt=q?r.jsx(co,{reason:u}):He?r.jsxs(r.Fragment,{children:[R,xe]}):R,bt=r.jsxs(dr,{fitToSize:f,loneFrame:br,hoverTitle:p,children:[r.jsxs(jl,{"data-panel-sticky-top":"",children:[r.jsx(Jn,{tiny:p}),!p&&r.jsx(Rl,{title:e,compactTitle:t,aside:z,toolbar:H})]}),f?r.jsx(nl,{hoverTitle:p,children:xt}):xt,!He&&!q&&r.jsx(be,{segment:"sections",props:Se})]});return r.jsx(Wi,{children:r.jsxs(Te,{$railTravels:!0,$hoverTitle:p,...p?{tabIndex:0,role:"group","aria-labelledby":x,"data-tiny-panel":""}:{},...I,children:[r.jsx(gr,{railBandAbove:!0,children:g===void 0||q?bt:r.jsxs(ml,{side:v,size:b,railBand:!0,children:[bt,r.jsx(ur,{children:g})]})}),!q&&l!==void 0&&r.jsx(kl,{render:l}),!q&&c!==void 0&&r.jsx(mr,{children:c}),p&&r.jsxs(El,{"data-panel-hover-title":"",children:[r.jsx(Cl,{as:"h3",id:x,children:e}),B!==void 0&&r.jsx(Ol,{children:B})]}),r.jsx(Fe,{visuallyHidden:!0,children:p&&U!==void 0?"":$})]})})}function zl(e){if(!d.isValidElement(e)||e.type!==at||e.props.fill!==!0)return!1;let t=e.props.children;for(;;){const n=d.Children.toArray(t).filter(a=>!(d.isValidElement(a)&&a.type===ei));if(n.length!==1)return!1;const[o]=n;if(!d.isValidElement(o))return!1;if(o.type===Ks)return!0;if(o.type!==d.Fragment&&typeof o.type!="string")return!1;t=o.props.children}}const Sc=Object.assign(Ml,{Context:or,Delay:Jn,Container:Te,Header:lr,Toolbar:cr,Footer:mr,Title:sr,Glow:gr,Body:dr,Section:at,Sidebar:ur}),Ll=h.div`
  display: ${({$size:e})=>e==="hero"?"flex":"inline-flex"};
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({$tone:e})=>K[e]};
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
`;function _c({size:e="inline",tone:t="neutral",...n}){return r.jsx(Ll,{$size:e,$tone:t,...n})}const Rc=h.span`
  font-size: var(--font-size-caption);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-transform: uppercase;
`,xr=240,Dl=8;function Bl(e,t){if(e<=0||t<2)return!1;const n=t*xr+(t-1)*Dl;return e>=n}function Ec({tabs:e,activeId:t,onChange:n,expandWhenRoomy:o=!1,"aria-label":a,"aria-labelledby":s,className:i}){const c=d.useId(),l=d.useMemo(()=>e.map(($,z)=>({...$,id:$.id??`tab-${z}`})),[e]),u=t!==void 0,[f,p]=d.useState(()=>t??l[0]?.id??""),x=u?t:f,g=l.find($=>$.id===x),v=g&&!g.disabled?g:l.find($=>!$.disabled)??g??l[0],b=d.useCallback($=>{u||p($),n?.($)},[u,n]),j=d.useMemo(()=>l.filter($=>!$.disabled),[l]),{ref:w,size:R}=me({w:0,h:0}),I=o&&Bl(R.w,j.length),k=d.useRef(new Map),_=d.useRef(null),S=d.useRef(null),[E,A]=d.useState(!1),[H,D]=d.useState(null),L=d.useCallback($=>{_.current=$,D($)},[]),N=Os(H),[P,m]=d.useState(null);d.useLayoutEffect(()=>{const $=_.current;if(!$)return;const z=()=>{A(U=>{U||(S.current=$.scrollWidth);const B=S.current;return B==null?!1:B>$.clientWidth})};z();const O=new ResizeObserver(z);return O.observe($),()=>O.disconnect()},[I,l.length]),d.useLayoutEffect(()=>{const $=_.current,z=v?k.current.get(v.id):void 0;if(!$||!z){m(null);return}const O=()=>{const B=k.current.get(v?.id??"");B&&m(q=>q&&q.left===B.offsetLeft&&q.width===B.offsetWidth?q:{left:B.offsetLeft,width:B.offsetWidth})};O();const U=new ResizeObserver(O);return U.observe($),U.observe(z),()=>U.disconnect()},[v?.id,l.length,I]);const y=d.useCallback(($,z)=>{const O=l.length;for(let U=1;U<=O;U++){const B=l[(($+z*U)%O+O)%O];if(!(!B||B.disabled)){b(B.id),k.current.get(B.id)?.focus();return}}},[l,b]),T=d.useCallback($=>{const z=l.findIndex(O=>O.id===v?.id);if(!(z<0))switch($.key){case"ArrowRight":case"ArrowDown":$.preventDefault(),y(z,1);break;case"ArrowLeft":case"ArrowUp":$.preventDefault(),y(z,-1);break;case"Home":$.preventDefault(),y(-1,1);break;case"End":$.preventDefault(),y(l.length,-1);break}},[l,v?.id,y]);return I?r.jsx(en,{ref:w,"data-tabs-root":"",className:i,children:r.jsx(no,{minColWidth:`${xr}px`,align:"start",gap:"related-comfortable",children:j.map($=>r.jsxs(at,{children:[r.jsxs(uo,{as:"h3",$rule:!0,children:[$.label,$.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(tn,{"aria-hidden":"true"}),r.jsx(Me,{children:", needs attention"})]})]}),$.content]},$.id))})}):r.jsxs(en,{ref:w,"data-tabs-root":"",className:i,children:[r.jsxs(Nl,{children:[r.jsx(Hl,{ref:L,children:r.jsxs(Wl,{role:"tablist","aria-label":a,"aria-labelledby":s,children:[P&&r.jsx(Ul,{"aria-hidden":"true",style:{left:P.left,width:P.width}}),l.map($=>{const z=$.id===v?.id;return r.jsxs(Gl,{ref:O=>{O?k.current.set($.id,O):k.current.delete($.id)},role:"tab",type:"button",id:`${c}${$.id}-tab`,"aria-selected":z,"aria-controls":`${c}${$.id}-panel`,"aria-describedby":$.indicator?`${c}${$.id}-attention`:void 0,tabIndex:z?0:-1,disabled:$.disabled,$active:z,onClick:()=>b($.id),onKeyDown:T,$compact:E,children:[$.label,$.indicator&&r.jsxs(r.Fragment,{children:[r.jsx(tn,{"aria-hidden":"true"}),r.jsx("span",{id:`${c}${$.id}-attention`,hidden:!0,children:"Needs attention"})]})]},$.id)})]})}),r.jsx(Dt,{$position:"left",$visible:N.left}),r.jsx(Dt,{$position:"right",$visible:N.right})]}),v&&r.jsx(Kl,{role:"tabpanel",id:`${c}${v.id}-panel`,"aria-labelledby":`${c}${v.id}-tab`,children:v.content})]})}const en=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-tabs-panel);
  /* Fills the panel and constrains children, so a flex:1 tab body can scroll. */
  flex: 1;
  min-height: 0;
`,Nl=h.div`
  position: relative;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Hl=h.div`
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
`,Wl=h.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  gap: var(--gap-tab);
  background: var(--color-surface-sunken);
  border-radius: var(--radius-pill);
  padding: var(--inset-tab-track);
  flex-wrap: nowrap;
`,Ul=h.span`
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
`,tn=h.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-left: var(--gap-trailing-mark);
  vertical-align: middle;
  border-radius: var(--radius-circle);
  background: var(--color-warn-mark);
`,Gl=h.button`
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

  ${ge}

  @media (pointer: coarse) {
    min-height: 44px;
    /* Compact still applies on touch: a tab scrolled half out of view is a smaller target, not a bigger one. */
    ${({$compact:e})=>e?"padding: var(--inset-tab-compact-touch);":"padding: var(--inset-control-touch);"}
  }
`,Kl=h.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,Cc=d.forwardRef(function({pressed:t=!1,tone:n="go",size:o="md",type:a="button","aria-pressed":s,...i},c){return r.jsx(ro,{ref:c,type:a,tone:t?n:void 0,size:o,pressed:t,"aria-pressed":s??t,...i})});export{oi as $,Rn as A,Re as B,ni as C,mc as D,Ls as E,Ms as F,Nt as G,Zo as H,Ya as I,Tt as J,dt as K,Bn as L,bc as M,yn as N,lc as O,Sc as P,$n as Q,_c as R,dl as S,xr as T,Q as U,ut as V,$a as W,Nn as X,ua as Y,xo as Z,wo as _,vc as a,bo as a0,St as a1,xc as a2,Ho as a3,Le as a4,fc as a5,Ee as a6,Ha as a7,ga as a8,ht as a9,jc as aa,Hs as ab,nr as ac,Ii as ad,_a as ae,lt as af,Bo as ag,gc as ah,Ve as ai,ic as aj,uc as ak,At as al,Os as am,Dt as an,Ks as b,wc as c,Rc as d,hc as e,ac as f,sc as g,Ec as h,Cc as i,yo as j,ps as k,se as l,Ia as m,Pn as n,cc as o,dc as p,kc as q,Ws as r,Bl as s,ei as t,me as u,yc as v,An as w,$c as x,ri as y,pc as z};
