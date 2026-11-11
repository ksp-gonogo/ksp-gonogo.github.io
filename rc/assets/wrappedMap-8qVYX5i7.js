import{j as n}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./ext-react-C0MU9AHG.js";import h,{css as Y,keyframes as wn}from"./ext-styled-components-DAuodqsN.js";import{t as yn,e as jn,b as Je,g as $n,h as Oe}from"./TinyEssentials-CTKx5QLr.js";import{E as Ft,c1 as zt,af as re,aa as Ie,c0 as xe,ah as Mn,n as _n,F as Se,m as ve,y as be,b3 as kn,bW as Qe,c2 as En,a1 as Ee,ab as K,c3 as Rn,bG as In,aS as et,b_ as Sn,c4 as Ot,b$ as tt,g as Tn,ai as ce,e as ie,$ as An,aN as Cn,ap as nt,bC as Be,bP as Ln,bO as Nn,aD as Ge,ag as Bt,bn as Pn,X as Dn,l as Xe,B as Ht,I as Fn,i as zn,c5 as Ut,ae as Wt,bm as On,ac as Gt,bL as Bn,bu as Hn,bU as rt,aJ as Un,c6 as Wn,bV as at,bB as ot,ad as Gn}from"./Modal-DH2ZJ8Vf.js";import{cz as Le,cT as st,cx as we,bn as Xn,e0 as Yn,eD as Kn,cR as Ye,cw as it,N as Vn,eh as fe,d$ as Xt}from"./context-C6-ms_G4.js";import"./ksp-enum-names-Bh2QnpCH.js";import"./logger-2_QM1wvD.js";import"./use-command-DyBcYpuK.js";import{Z as ye,N as le,_ as Yt,$ as qn,y as lt,B as Zn,j as Kt,a0 as Jn,e as te,k as ne,U as Qn,g as er,Y as Vt,E as tr,c as nr,u as ct,x as dt}from"./contributionsRead-Cdcp0syN.js";import{a as rr,r as ar,b as or}from"./Notice-DWnlMtI-.js";import{r as sr}from"./ext-react-dom-DCF8ZnaJ.js";import{l as ir}from"./capability-lock-CvVl5Fws.js";import"./use-transmissions-hs_ToGK2.js";import"./lagrange-Dy9NtQNG.js";import{r as lr}from"./control-frame-to-read-frame-Bg0wz8BN.js";import{d as he,a as cr,e as dr}from"./resource-transfer-tyxmRdeA.js";function Ks({items:e,onSelect:t,onDismiss:r,"aria-label":a,style:o,header:s,footer:i,emptyLabel:l="No actions",otherLabel:u="Other"}){const f=d.useRef(null),p=d.useId(),[x,$]=d.useState(0),v=yn(e,u),c=v.flatMap(([,b])=>b),y=c.length;d.useEffect(()=>{const b=f.current;if(!b)return;if(y===0){b.focus();return}b.querySelectorAll('[role="menuitem"]')[x]?.focus()},[x,y]),d.useEffect(()=>{const b=j=>{const _=f.current;_&&j.target instanceof Node&&!_.contains(j.target)&&r()};return document.addEventListener("pointerdown",b),()=>document.removeEventListener("pointerdown",b)},[r]);const k=d.useCallback(b=>{if(b.key==="Escape"){b.stopPropagation(),r();return}if(b.key==="Tab"){r();return}if(c.length!==0)switch(b.key){case"ArrowDown":b.preventDefault(),$(j=>Math.min(j+1,c.length-1));break;case"ArrowUp":b.preventDefault(),$(j=>Math.max(j-1,0));break;case"Home":b.preventDefault(),$(0);break;case"End":b.preventDefault(),$(c.length-1);break}},[c.length,r]);return n.jsxs(gr,{ref:f,role:y>0?"menu":void 0,"aria-label":a,onKeyDown:k,tabIndex:-1,style:o,children:[s,c.length===0?n.jsx(Ft,{layout:"fill",children:l}):v.map(([b,j],_)=>n.jsxs("div",{...v.length>1?{role:"group","aria-labelledby":`${p}-group-${_}`}:{role:"none"},children:[v.length>1?n.jsx(xr,{id:`${p}-group-${_}`,"aria-hidden":"true",children:b}):null,j.map(M=>{const g=c.indexOf(M);if(M.command)return n.jsx(fr,{item:M,command:M.command,tabIndex:g===x?0:-1,onFocus:()=>$(g),onSelect:t},M.key);const I=M.disabled||M.unavailable!==void 0;return n.jsx(pr,{tip:ur(M),children:n.jsx(qt,{type:"button",role:"menuitem","aria-label":M["aria-label"],"data-predicted":M.advise?"at-risk":void 0,"aria-disabled":I||void 0,$disabled:I,tabIndex:g===x?0:-1,onFocus:()=>$(g),onClick:()=>{I||t(M.key)},children:M.label})},M.key)})]},b)),i]})}function ur(e){return e.advise?`Likely to be refused: ${e.advise}.`:e.unavailable??e.tip}function pr({tip:e,children:t}){return e?n.jsx(re,{text:e,children:t}):t}function fr({item:e,command:t,tabIndex:r,onFocus:a,onSelect:o}){const s=zt({command:t,unavailable:e.unavailable,advise:e.advise}),{control:i}=s,l=d.useRef(!1),u=i.command.handle.railed===!0,f=e.confirmLabel!==void 0;d.useEffect(()=>{l.current&&!u&&!i.isSent&&(l.current=!1,o(e.key))},[i.isSent,u,o,e.key]);const p=s.word??(i.isArmed?e.confirmLabel:null);return n.jsxs(n.Fragment,{children:[n.jsx(re,{text:s.tip??e.tip,children:n.jsxs(qt,{type:"button",role:"menuitem","aria-label":e["aria-label"],"aria-disabled":e.disabled||s.inert||void 0,$disabled:e.disabled||s.inert,tabIndex:r,onFocus:a,"data-command-edge":s.edge["data-command-edge"],"data-command-phase":s.edge["data-command-phase"],"data-stream":s.edge["data-stream"],"data-predicted":s.edge["data-predicted"],onClick:()=>{if(e.disabled||s.inert)return;const x=i.isArmed;i.press(f),!(f&&!x)&&(u?o(e.key):l.current=!0)},children:[n.jsx(hr,{children:e.label}),n.jsx(mr,{"aria-hidden":"true",children:p})]})}),n.jsx(Ie,{visuallyHidden:!0,children:s.announce})]})}const hr=h.span`
  flex: 1;
`,mr=h.span`
  position: absolute;
  inset-inline-end: var(--gap-related);
  top: 50%;
  transform: translateY(-50%);
  padding-inline: var(--gap-related-dense);
  background: var(--color-surface-raised);
  pointer-events: none;
  &:empty {
    display: none;
  }
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
`,gr=h.div`
  position: absolute;
  min-width: 180px;
  max-width: 280px;
  max-height: 280px;
  overflow-y: auto;
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  padding: var(--inset-menu-list);
  z-index: var(--z-dropdown);
`,xr=h.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,qt=h.button`
  position: relative;
  /* A border of its own, clear at rest, so the state edges of a command are drawn on the item's box as on every other input. */
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  gap: var(--gap-related);
  width: 100%;
  text-align: left;
  background: transparent;
  color: var(--color-text-primary);
  font: inherit;
  font-size: var(--font-size-compact);
  padding: var(--inset-menu-item);
  cursor: pointer;

  &:hover[aria-disabled="false"],
  &:hover:not([aria-disabled]) {
    background: var(--color-border-subtle);
  }

  ${xe}
  /* The background marks the focused row where the ring meets the menu border. */
  &:focus-visible {
    background: var(--color-border-subtle);
  }

  &[aria-disabled="true"] {
    color: var(--color-text-faint);
    cursor: default;
  }

  ${Mn}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`;function Vs({settings:e,values:t,onChange:r}){return e.length===0?null:n.jsx(n.Fragment,{children:e.flatMap(a=>a.fields.map(o=>{const i=t?.[a.namespace]?.[o.key]??o.default,l=o.label??o.key,u=`augment-setting-${a.namespace}-${o.key}`;return o.type===Le.Bool?n.jsx(_n,{children:n.jsx(jn,{checked:!!i,onChange:f=>r(a.namespace,o.key,f),label:l})},`${a.namespace}.${o.key}`):n.jsxs(Se,{children:[n.jsx(ve,{htmlFor:u,children:l}),n.jsx(be,{id:u,type:o.type===Le.Number?"number":"text",value:i===void 0?"":String(i),onChange:f=>{const p=f.target.value;if(o.type!==Le.Number){r(a.namespace,o.key,p);return}if(p===""){r(a.namespace,o.key,void 0);return}const x=Number(p);Number.isFinite(x)&&r(a.namespace,o.key,x)}})]},`${a.namespace}.${o.key}`)}))})}function qs({fallback:e,gap:t="related-dense",children:r,...a}){return n.jsxs(n.Fragment,{children:[n.jsx(Zt,{$gap:t,...a,children:r}),n.jsx(vr,{children:e})]})}const Zt=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>ye[e]};
`,vr=h.div`
  ${Zt}:not(:empty) + & {
    display: none;
  }
`,ut=12,Me=8;function br(e,t,r){return{left:pt(e.x,t.w,r.w),top:pt(e.y,t.h,r.h)}}function pt(e,t,r){const a=e+ut;if(a+t<=r-Me)return a;const o=e-ut-t;return o>=Me?o:Math.max(Me,r-Me-t)}const wr="–";function Zs({min:e,max:t,wrapsAt:r,className:a,...o}){const s=st(e),i=st(t);return e==null||t==null||s===null||i===null?n.jsx(Re,{className:a,children:le}):r!==void 0&&Math.abs(i-s)>=r/2?n.jsx(Re,{className:a,children:"(precesses)"}):n.jsx(kn,{of:e.unit,separate:!0,...o,children:n.jsx(yr,{min:e,max:t,className:a})})}function yr({min:e,max:t,className:r}){return Qe(e),Qe(t),En(e)?n.jsx(Re,{className:r,children:n.jsxs($r,{children:[n.jsx("span",{"aria-hidden":"true",children:"~"}),n.jsx(Ee,{children:"approximately "}),n.jsx(K,{value:e})]})}):n.jsxs(Re,{className:r,children:[n.jsx(K,{value:e}),n.jsx(jr,{"aria-hidden":"true",children:wr}),n.jsx(Ee,{children:" to "}),n.jsx(K,{value:t})]})}const Re=h.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,jr=h.span`
  color: var(--color-text-faint);
`,$r=h.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`,Mr={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function Js({surface:e,pad:t,bordered:r=!1,radius:a,children:o,...s}){return n.jsx(_r,{$surface:e,$pad:t,$bordered:r,$radius:a,...s,children:o})}const _r=h.div`
  ${({$surface:e})=>e&&`background: ${Mr[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${Yt[e]};`}
  ${({$pad:e})=>e&&`padding: var(${qn[e]});`}
`,Jt=d.forwardRef(function({equalWidth:t=!0,gap:r,children:a,...o},s){return n.jsx(kr,{ref:s,$equalWidth:t,$gap:r,...o,children:a})}),kr=h.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?ye[e]:"var(--gap-related)"};
`,Er="3px",Rr=h(or)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${lt(e)};`:""}
  ${({$identityColor:e})=>e?`
    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: var(--size-mark);
      height: ${Er};
      background: ${e};
      border-radius: var(--radius-regular) var(--radius-regular) 0 0;
    }
  `:""}
  ${({$dimmed:e,$tone:t})=>e?`
    --color-text-primary: var(--color-text-muted);
    color: var(--color-text-muted);
    ${t?`border-left-color: color-mix(in srgb, ${lt(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function Ir({tone:e,dimmed:t,identityColor:r,standalone:a,...o}){return ar(Rr,{...o,$tone:e,$dimmed:t,$identityColor:r,$standalone:a})}const Qs=Object.assign(Ir,rr);function ei(e,t){if(!t)return{disabled:!1,disabledReason:void 0,predictedOutcome:void 0,tip:void 0};const r=`${t.charAt(0).toUpperCase()}${t.slice(1)}`;return e.gateStopsPress===!0?{disabled:!0,disabledReason:r,predictedOutcome:void 0,tip:void 0}:{disabled:!1,disabledReason:void 0,predictedOutcome:"at-risk",tip:`Likely to be refused: ${t}.`}}function ti({oneWaySeconds:e,delayReading:t,className:r}){const a=we("s",e);return n.jsxs(Sr,{className:r,role:"group","aria-label":"Signal delay",children:["one-way ~",n.jsx(K,{value:Rn(a,t),...a.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const Sr=h.div`
  /* Non-growing: it shares the console's corner row, and its text is short by construction. */
  flex: 0 0 auto;
  padding: var(--inset-chip-readout);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  white-space: nowrap;
  color: var(--color-text-muted);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function ni(e){const t=In(),r=d.useId(),a=e!==null;d.useEffect(()=>{if(!(!t||!e))return t.register({id:r,...e})},[t,r,a]),d.useEffect(()=>{!t||!e||t.update(r,e)},[t,r,e])}function Tr(e,t,r){return Math.abs(e-t)<r/10}function Ar({commanded:e,expected:t,lastSeen:r,step:a}){const o=(l,u)=>l!=null&&u!=null&&Tr(l,u,a),s=r??null;return{expected:t!=null&&!o(t,e)&&!o(t,s)?t:null,lastSeen:s,onCommanded:o(s,e)}}function Qt({kind:e}){return n.jsx("svg",{"aria-hidden":"true",width:ht,height:ht,viewBox:"0 0 16 16",style:{display:"block",overflow:"visible"},children:e==="held"?n.jsx("rect",{x:"2",y:"2",width:"12",height:"12",style:mt.held}):n.jsx("polygon",{points:"8,1.5 14.8,14 1.2,14",style:mt.modelled})})}function ft({kind:e,caption:t,left:r}){return n.jsxs("span",{"data-role":e==="modelled"?"expected":"last-seen","data-reckoning-mark":e,style:{...Pr,left:r},children:[n.jsx(Qt,{kind:e}),n.jsx(Ee,{children:t})]})}function ri({kind:e,caption:t,main:r=!1,children:a}){return n.jsxs("span",{"data-role":e==="modelled"?"expected":"last-seen","data-reckoning-mark":e,"data-held":e==="held"?"":void 0,style:r?Fr:zr,children:[n.jsx(Qt,{kind:e}),a,n.jsxs(Ee,{"data-unit-currency":"",children:[", ",t]})]})}const Cr={display:"flex",alignItems:"center",gap:"var(--gap-related)"},Lr={flex:1,position:"relative",display:"flex",alignItems:"center"},Nr={width:"100%"},Pr={position:"absolute",top:"50%",transform:"translate(-50%, -50%)",display:"flex",pointerEvents:"none"},ht=16,mt={held:{fill:et.held.color,stroke:"var(--color-surface-app)",strokeWidth:3,paintOrder:"stroke"},modelled:{fill:et.modelled.color,stroke:"var(--color-surface-app)",strokeWidth:3,strokeLinejoin:"round",paintOrder:"stroke"}},Dr={fontSize:"var(--font-size-compact)",color:"var(--color-text-primary)",fontVariantNumeric:"tabular-nums",minWidth:"36px",textAlign:"right"},Fr={display:"inline-flex",alignItems:"center",gap:"var(--gap-figure-parts)"},zr={display:"inline-flex",alignItems:"center",gap:"var(--gap-figure-parts)",fontSize:"var(--font-size-caption)",color:"var(--color-text-faint)"};function ai({at:e,atAspect:t,narrow:r,wide:a,children:o,...s}){return n.jsx(Br,{$query:Or(e,t),$narrow:r,$wide:a,...s,children:o})}function Or(e,t){const r=[e===void 0?void 0:`(min-width: ${e}px)`,t===void 0?void 0:`(aspect-ratio >= ${t})`].filter(a=>a!==void 0);return r.length===0?void 0:r.join(" and ")}const Br=h.div`
  ${({$narrow:e})=>e}
  ${({$query:e,$wide:t})=>e===void 0?"":Y`
          @container ${e} {
            ${t}
          }
        `}
`;function oi({slot:e,component:t,filter:r}){const a=Zn(e),o=r?a.filter(r):a;return o.length===0?null:n.jsx(t,{entries:o})}function si({label:e,lead:t,children:r,tone:a="neutral",aligned:o=!1,...s}){const i=d.useContext(en);return n.jsxs(Ur,{$aligned:o,$grouped:o&&i,...s,children:[n.jsx(Wr,{children:e}),n.jsxs(Gr,{$tone:a,children:[t,r]})]})}const en=d.createContext(!1);function ii({children:e,...t}){return n.jsx(Hr,{...t,children:n.jsx(en.Provider,{value:!0,children:e})})}const He="1.5ch",Hr=h.div`
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  column-gap: ${He};
  container-type: inline-size;
  min-width: 0;

  @container (max-width: 15rem) {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 0.5em;
  }
`,Ur=h.div`
  align-items: baseline;
  gap: var(--gap-data-line);
  min-width: 0;
  ${({$aligned:e,$grouped:t})=>e?t?Y`
        display: grid;
        column-gap: ${He};
        grid-column: 1 / -1;
        grid-template-columns: subgrid;
      `:Y`
      display: flex;
      flex-wrap: wrap;
      column-gap: ${He};
      & > :first-child {
        flex: 0 0 auto;
        min-width: 7ch;
      }
      & > :last-child {
        flex: 1 1 10ch;
      }
    `:Y`
        display: flex;
        flex-wrap: wrap;
      `}
`,Wr=h.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,Gr=h.span`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--gap-data-line);
  font-size: var(--font-size-value);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  color: ${({$tone:e})=>Kt[e]};
`;function Xr(e,t){return e.value!==void 0?n.jsx(K,{value:e.value(t)??null}):e.render(t)}function li({columns:e,rows:t,sections:r,rowKey:a,caption:o,empty:s,rowDetail:i,className:l}){const u=r??(t?[{id:"",title:null,rows:[...t]}]:[]),f=u.reduce((c,y)=>c+y.rows.length,0),[p,x]=d.useState(null),$=Sn(p),v=Ot(p);return n.jsxs(Yr,{className:l,children:[n.jsx(Kr,{ref:x,tabIndex:v,children:n.jsxs(Vr,{children:[n.jsx(qr,{children:o}),n.jsx("thead",{children:n.jsx("tr",{children:e.map(c=>n.jsx(Zr,{scope:"col",$align:c.align??"start",style:{width:c.width,minWidth:c.minWidth},children:c.header},c.key))})}),f===0&&s!==void 0&&n.jsx("tbody",{children:n.jsx("tr",{children:n.jsx(na,{colSpan:e.length,children:s})})}),u.map(c=>n.jsxs("tbody",{children:[c.title!==null&&c.title!==void 0&&n.jsx("tr",{children:n.jsx(Jr,{scope:"rowgroup",colSpan:e.length,children:c.title})}),c.rows.map(y=>{const k=a(y),b=i?.(y),j=b!=null&&b!==!1&&b!=="";return n.jsxs(d.Fragment,{children:[n.jsx(Qr,{$hasDetail:j,children:e.map(_=>n.jsx(ea,{as:_.rowHeader?"th":void 0,scope:_.rowHeader?"row":void 0,$align:_.align??"start",children:Xr(_,y)},_.key))}),j?n.jsx("tr",{children:n.jsx(ta,{colSpan:e.length,children:b})}):null]},k)})]},c.id))]})}),n.jsx(tt,{$position:"left",$visible:$.left}),n.jsx(tt,{$position:"right",$visible:$.right})]})}const Yr=h.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Kr=h.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${xe}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Vr=h.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,qr=h.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,Zr=h.th`
  text-align: ${({$align:e})=>e};
  position: sticky;
  top: 0;
  /* Local sibling ordering over its own rows, not a rung on the app ladder. */
  z-index: 1;
  background: var(--color-surface-panel);
  color: var(--color-text-faint);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
  padding: var(--inset-table-cell);
  border-bottom: 1px solid var(--color-border-subtle);
`,Jr=h.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,Qr=h.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,ea=h.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,ta=h.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,na=h.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`;function ra(e){const t=e.reason;switch(t){case"beyond-horizon":return e.resolvesByWaiting?"NOT YET COMPUTED":"CANNOT MODEL";case"under-physics":case"model-inapplicable":case"contested":case"insufficient-history":return"CANNOT MODEL";case"frame-unavailable":return"FRAME UNAVAILABLE";case"input-absent":return null;default:return t}}function ci({declined:e,layout:t="inline"}){return n.jsx(re,{text:e.note,focusable:!0,children:n.jsx(Ft,{role:"status",layout:t,children:ra(e)??"NO DATA"})})}function di({label:e,children:t,"aria-label":r,className:a,variant:o="popover",panelHeight:s="cap",chevron:i=!0,asButton:l=!1,buttonSize:u="md",defaultOpen:f=!1}){const[p,x]=d.useState(f),$=d.useId(),v=d.useRef(null),[c,y]=d.useState(null),k=Ot(c),b=o==="inline"&&i,j=typeof e=="function"?e(p):e,_={ref:v,type:"button","aria-expanded":p,"aria-controls":$,"aria-label":r,onClick:()=>x(g=>!g)},M=n.jsxs(n.Fragment,{children:[j,b&&n.jsx(ia,{$open:p,children:n.jsx(Tn,{size:"var(--icon-size-control)"})})]});return n.jsxs(aa,{className:a,$variant:o,onKeyDown:g=>{g.key==="Escape"&&p&&(x(!1),v.current?.focus())},children:[l?n.jsx(sa,{..._,variant:"ghost",size:u,$inline:o==="inline",children:M}):n.jsx(oa,{..._,$variant:o,$align:o==="inline"&&!i?"end":"between",children:M}),p&&n.jsx(la,{ref:y,id:$,role:"group",tabIndex:k,$variant:o,$panelHeight:s,children:t})]})}const aa=h.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,oa=h.button`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-glyph);
  padding: var(--inset-glyph-button);
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  ${({$variant:e,$align:t})=>e==="inline"&&Y`
      justify-content: ${t==="end"?"flex-end":"space-between"};
      width: 100%;
      text-align: start;
      border-radius: var(--radius-regular);
      &:hover {
        background: var(--color-surface-sunken);
      }
    `}
  ${ce}
`,sa=h(ie)`
  ${({$inline:e})=>e&&Y`
      align-self: flex-end;
    `}
`,ia=h.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,la=h.div`
  ${({$variant:e})=>e==="popover"?Y`
          position: absolute;
          top: 100%;
          right: 0;
          /* Local sibling ordering: lifts the popped panel above following rows, off the app z ladder. */
          z-index: 1;
          margin-top: var(--gap-disclosure);
        `:Y`
          position: static;
          width: 100%;
          margin-top: var(--gap-disclosure);
        `}
  /* An accordion body grows in flow up to a cap, then scrolls, never spilling past the row below. */
  ${({$variant:e,$panelHeight:t})=>e==="inline"&&t==="cap"?Y`
          max-height: 16rem;
          overflow-y: auto;
          ${xe}
        `:""}
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function ui({space:e,...t}){return n.jsx(ca,{$space:e,...t})}const ca=h.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${ye[e]} 0`:"0"};
`,da=160,ua=24,pa="...";function pi({children:e,limit:t=da,subject:r,className:a}){const[o,s]=d.useState(!1),i=d.useId(),l=fa(e,t);if(l===void 0)return n.jsx(n.Fragment,{children:e});const u=o?"Show less":"Show more";return n.jsxs(ha,{className:a,children:[n.jsx("span",{id:i,children:o?e:`${l}${pa}`})," ",n.jsx(ma,{type:"button","data-expandable-toggle":"","aria-controls":i,"aria-expanded":o,"aria-label":r===void 0?void 0:`${u} of ${r}`,onClick:()=>s(f=>!f),children:u})]})}function fa(e,t){if(e.length<=t+ua)return;const r=e.lastIndexOf(" ",t);return r<=0?e.slice(0,t):e.slice(0,r)}const ha=h.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,ma=h(An)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function fi(e,t){const r=t.map(s=>s==null?null:Xn(e,s.index)),a=r.length>0&&r.every(s=>s?.currency==="exact"),o=r.reduce((s,i)=>i?.currency!=="held"||i.asOfUt===null?s:s===null?i.asOfUt:Math.min(s,i.asOfUt),null);return s=>{const i=a?Yn(s):s;return o===null?i:{state:"held",value:i,asOfUt:we("ut",o),grade:"held",reckoning:{status:"none"}}}}function ga({anchor:e,style:t,children:r,...a}){const[o,s]=d.useState(null),[i,l]=d.useState(null),u=d.useRef(e);u.current=e;const f=d.useCallback(()=>{if(!o)return;const p=u.current,x=typeof p=="function"?p():p;if(!x)return;const $=o.getBoundingClientRect(),v=br(x,{w:$.width,h:$.height},{w:window.innerWidth,h:window.innerHeight});l(c=>c&&c.left===v.left&&c.top===v.top?c:v)},[o]);return d.useLayoutEffect(()=>{f()}),d.useLayoutEffect(()=>{if(!o)return;const p=typeof ResizeObserver>"u"?null:new ResizeObserver(f);return p?.observe(o),window.addEventListener("resize",f),window.addEventListener("scroll",f,!0),()=>{p?.disconnect(),window.removeEventListener("resize",f),window.removeEventListener("scroll",f,!0)}},[o,f]),typeof document>"u"?null:sr.createPortal(n.jsx(xa,{ref:s,style:{...t,left:i?.left??0,top:i?.top??0,visibility:i===null?"hidden":t?.visibility},...a,children:r}),document.body)}const xa=h.div`
  position: fixed;
  z-index: var(--z-dropdown);
`,va=wn`
  from { transform: translateX(0); }
  to { transform: translateX(var(--flow-stride)); }
`,ba=h.g`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${va} 0.6s linear infinite;
  }
`;function hi({stride:e,children:t}){return n.jsx(ba,{style:{"--flow-stride":`${e}px`},children:t})}const gt=12,wa=8,ya=120;function mi({trigger:e,"aria-label":t,children:r}){const[a,o]=d.useState(!1),s=d.useRef(null),i=d.useRef(null),l=d.useRef(null),u=d.useId(),f=d.useCallback(()=>{i.current!==null&&(clearTimeout(i.current),i.current=null)},[]),p=()=>{f(),o(!0)},x=()=>{f(),i.current=setTimeout(()=>o(!1),ya)},$=d.useCallback(()=>{f(),o(!1)},[f]);d.useEffect(()=>f,[f]),d.useEffect(()=>{if(!a)return;const c=y=>{y.key==="Escape"&&(y.stopPropagation(),$())};return document.addEventListener("keydown",c,!0),()=>document.removeEventListener("keydown",c,!0)},[a,$]);const v=()=>{const c=s.current?.getBoundingClientRect();if(!c)return null;const y=l.current?.offsetHeight??0,k=c.top-y-2*gt;return{x:c.left,y:k+gt>=wa?k:c.bottom}};return n.jsxs(n.Fragment,{children:[n.jsx(ja,{ref:s,type:"button","aria-label":t,"aria-describedby":a?u:void 0,onPointerEnter:p,onPointerLeave:x,onFocus:p,onBlur:$,children:e}),a&&n.jsx(ga,{anchor:v,onPointerEnter:f,onPointerLeave:x,children:n.jsx($a,{ref:l,id:u,role:"tooltip",children:r})})]})}const ja=h.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${ce}
`,$a=h.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  max-width: min(22rem, calc(100vw - 2 * var(--inset-popover)));
  overflow-wrap: anywhere;
`;function J({gap:e,inset:t=!1,wrap:r=!1,children:a,...o}){return n.jsx(Ma,{$gap:e,$inset:t,$wrap:r,...o,children:a})}const Ma=h.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?ye[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,_a=4,ka=80,xt=60,Ea=30,Ue=24,Ra=32,vt=56,bt=Ue;function Ne(e,t,r){const{min:a,max:o,step:s}=t,i=e+r*s,l=Math.min(o,Math.max(a,i));if(!Number.isFinite(a))return l;const u=a+Math.round((l-a)/s)*s;return Math.min(o,Math.max(a,u))}function Ia(e){const{value:t,min:r,max:a,step:o,orientation:s="horizontal",onChange:i,format:l,"aria-label":u,label:f=u,disabled:p=!1,width:x,height:$}=e,v=s==="vertical",c=Math.max(Ue,x??(v?bt:vt)),y=Math.max(Ue,$??(v?vt:bt)),k=e.mode==="rate",b=r??Number.NEGATIVE_INFINITY,j=a??Number.POSITIVE_INFINITY,_={min:b,max:j,step:o},M=d.useRef(null),g=d.useRef(t);g.current=t;const I=d.useRef(i);I.current=i;const U=(e.mode==="rate"?e.stepsPerSecond:void 0)??Ea,[R,D]=d.useState(0),z=l?l(t):String(Math.round(t)),O=j>b&&Number.isFinite(j-b)?(t-b)/(j-b):.5,Z=E=>{p||E!==t&&i(E)};d.useEffect(()=>{if(!k||R===0||p)return;const E=setInterval(()=>{const S=Math.max(b,Math.min(j,g.current+R*U*o*(xt/1e3)));S!==g.current&&I.current(S)},xt);return()=>clearInterval(E)},[k,R,p,o,U,b,j]);const H=E=>{if(p)return;let S=null;switch(E.key){case"ArrowRight":case"ArrowUp":S=Ne(t,_,1);break;case"ArrowLeft":case"ArrowDown":S=Ne(t,_,-1);break;case"Home":if(!Number.isFinite(b))return;S=b;break;case"End":if(!Number.isFinite(j))return;S=j;break;default:return}E.preventDefault(),Z(S)},m=E=>s==="vertical"?E.clientY:E.clientX,T=E=>{p||(M.current={start:m(E),startValue:t},E.currentTarget.setPointerCapture(E.pointerId))},P=E=>{if(p||!M.current)return;const S=s==="vertical"?M.current.start-m(E):m(E)-M.current.start;if(k){const F=S/ka;D(Math.max(-1,Math.min(1,F)));return}const G=S/_a;Z(Ne(M.current.startValue,_,G))},C=E=>{M.current&&(M.current=null,D(0),E.currentTarget.hasPointerCapture(E.pointerId)&&E.currentTarget.releasePointerCapture(E.pointerId))};return n.jsxs(Sa,{children:[f!==!1&&n.jsx(Ta,{"aria-hidden":"true",children:f}),n.jsxs(Aa,{role:"slider","aria-label":u,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":r,"aria-valuemax":a,"aria-valuetext":z,"aria-disabled":p||void 0,tabIndex:p?-1:0,$orientation:s,$disabled:p,$width:c,$height:y,$compact:(v?c:y)<Ra,onKeyDown:H,onPointerDown:T,onPointerMove:P,onPointerUp:C,onPointerCancel:C,children:[n.jsx(Ca,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-O)*100}%)`}:{transform:`translateX(${(.5-O)*100}%)`},"aria-hidden":"true"}),n.jsx(La,{$orientation:s,"aria-hidden":"true"}),n.jsx(Na,{"aria-hidden":"true",children:z})]})]})}const Sa=h.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,Ta=h.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Aa=h.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>e.$width}px;
  height: ${e=>e.$height}px;
  padding: ${e=>e.$compact?"var(--inset-jog-wheel-compact)":"var(--inset-jog-wheel)"};
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  cursor: ${e=>e.$disabled?"not-allowed":e.$orientation==="vertical"?"ns-resize":"ew-resize"};
  touch-action: none;
  user-select: none;
  opacity: ${e=>e.$disabled?.5:1};

  ${ce}
`,Ca=h.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,La=h.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,Na=h.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function gi({lock:e}){const t=Kn(e)?Pa(e):e,r=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return n.jsx(re,{text:r,focusable:!0,children:n.jsxs(Fa,{role:"status","aria-label":r,children:[n.jsx(Cn,{size:"1.2em"}),n.jsx(za,{children:Da(t)})]})})}function Pa(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...ir(t,Jn),locks:t}}function Da(e){const t=[...new Set(e.locks.flatMap(r=>r.missing.map(a=>a.name)))];return t.length>0?t.join(", "):e.reason}const Fa=h.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-figure-parts);
  max-width: 100%;
  min-width: 0;
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  line-height: var(--line-height-flush);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,za=h.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,wt=1.4,yt=1.7,Oa="var(--icon-size-standalone)",Ba=1.8,_e="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",jt="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",$t="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",Mt="M7 4.5V19.5M17 4.5V19.5",oe=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,tn={prograde:{colour:"prograde",paths:[_e,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[_e,oe(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",oe(12,11)]},radialOut:{colour:"radial",paths:[jt,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[jt,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",oe(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",oe(12,12)]},relativePlus:{colour:"target",paths:[_e,$t],dot:[12,12]},relativeMinus:{colour:"target",paths:[_e,$t,oe(12,12)]},parallelPlus:{colour:"target",paths:[Mt],dot:[12,12]},parallelMinus:{colour:"target",paths:[Mt,oe(12,12)]}},xi=Object.keys(tn);function _t({shape:e,colour:t,strokeWidth:r,dotRadius:a}){return n.jsxs("g",{fill:"none",stroke:t,strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(o=>n.jsx("path",{d:o},o)),e.dot&&n.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:a,fill:t,stroke:"none"})]})}function V(e,t){const r=tn[e],a=`var(--color-marker-${r.colour})`,o=d.forwardRef(({size:s=Oa,strokeWidth:i=Ba,label:l,style:u,...f},p)=>{const x={ref:p,xmlns:"http://www.w3.org/2000/svg",...typeof s=="number"?{width:s,height:s,style:u}:{style:{width:s,height:s,...u}},viewBox:"0 0 24 24","data-marker":e},$=n.jsxs(n.Fragment,{children:[n.jsx(_t,{shape:r,colour:"currentColor",strokeWidth:i+wt,dotRadius:yt+wt/2}),n.jsx(_t,{shape:r,colour:a,strokeWidth:i,dotRadius:yt})]});return l?n.jsx("svg",{...x,role:"img","aria-label":l,...f,children:$}):n.jsx("svg",{...x,"aria-hidden":"true",...f,children:$})});return o.displayName=t,o}const nn=V("prograde","ProgradeIcon"),Ha=V("retrograde","RetrogradeIcon"),rn=V("normal","NormalIcon"),Ua=V("antiNormal","AntiNormalIcon"),Wa=V("radialOut","RadialOutIcon"),an=V("radialIn","RadialInIcon"),Ga=V("maneuver","ManeuverIcon"),Xa=V("target","TargetIcon"),Ya=V("antiTarget","AntiTargetIcon"),Ka=V("relativePlus","RelativePlusIcon"),Va=V("relativeMinus","RelativeMinusIcon"),qa=V("parallelPlus","ParallelPlusIcon"),Za=V("parallelMinus","ParallelMinusIcon"),vi=nn,bi=an,wi=rn,yi={prograde:nn,retrograde:Ha,normal:rn,antiNormal:Ua,radialOut:Wa,radialIn:an,maneuver:Ga,target:Xa,antiTarget:Ya,relativePlus:Ka,relativeMinus:Va,parallelPlus:qa,parallelMinus:Za};function on(e){const{year:t,day:r,hour:a,minute:o}=Ye(),s=Number.isFinite(e)?Math.max(0,e):0,i=Math.floor(s/t)+1,l=s%t,u=Math.floor(l/r)+1,f=l%r;return{year:i,day:u,hour:Math.floor(f/a),minute:Math.floor(f%a/o),second:Math.floor(f%o)}}const Ja={year:1,day:1,hour:0,minute:0,second:0};function Qa(e){const{year:t,day:r,hour:a,minute:o}=Ye();return(e.year-1)*t+(e.day-1)*r+e.hour*a+e.minute*o+e.second}function ke(e){return Qn(we("s",e))}function eo({value:e,onChange:t,label:r,disabled:a,steps:o}){const s=d.useId(),i=`${s}-absent`,l=e!==null&&Number.isFinite(e)?e:null,u=l===null?null:on(l),f=Ye(),p=o??[f.minute,10*f.minute,f.hour,f.day],[x,$]=d.useState(null),v=(c,y,k,b)=>n.jsxs(te,{gap:"caption",children:[n.jsx(ve,{htmlFor:`${s}-${c}`,children:y}),n.jsx(be,{id:`${s}-${c}`,type:"number",inputMode:"numeric","aria-label":`${r} ${y}`,"aria-describedby":u===null?i:void 0,min:k,step:1,style:{width:b},disabled:a,placeholder:u===null?le:void 0,value:x?.key===c?x.text:u===null?"":String(u[c]),onBlur:()=>$(null),onChange:j=>{const _=j.target.value;if($({key:c,text:_}),_.trim()==="")return;const M=Number(_);if(!Number.isFinite(M))return;const g=Math.max(k,Math.round(M));t(Qa({...u??Ja,[c]:g}))}})]},c);return n.jsxs(te,{gap:"related-dense",role:"group","aria-label":r,children:[n.jsxs(nt,{gap:"related-dense",wrap:!0,justify:"start",children:[v("year","YEAR",1,"5rem"),v("day","DAY",1,"5rem"),v("hour","HR",0,"4rem"),v("minute","MIN",0,"4rem"),v("second","SEC",0,"4rem")]}),u===null&&n.jsx(ne,{id:i,level:"muted",size:"sm",children:`${le} no ${r.toLowerCase()} to show. Type one to state it.`}),p.length===0?null:n.jsxs(nt,{gap:"related-packed",wrap:!0,justify:"start",children:[n.jsx(ne,{level:"faint",size:"sm",children:"NUDGE"}),p.map(c=>n.jsx(ie,{variant:"ghost",size:"sm",disabled:a||l===null,"aria-label":`${r} earlier by ${ke(c)}`,onClick:()=>l!==null&&t(l-c),children:`-${ke(c)}`},`minus-${c}`)),p.map(c=>n.jsx(ie,{variant:"ghost",size:"sm",disabled:a||l===null,"aria-label":`${r} later by ${ke(c)}`,onClick:()=>l!==null&&t(l+c),children:`+${ke(c)}`},`plus-${c}`))]})]})}const to=h.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function no({observed:e,modelled:t,write:r}){if(t==null)return null;if(r===void 0){const a=t;return Be(e,a,Ln())?n.jsx(kt,{children:n.jsx(K,{value:a})}):null}return Be(e,t,Nn(r))?n.jsx(kt,{children:r(t)}):null}function kt({children:e}){return n.jsx(to,{"data-modelled-alongside":"",children:n.jsx(Ge,{"data-held":"",kind:"modelled",caption:Bt,children:e})})}function ji({value:e}){return n.jsxs(n.Fragment,{children:[n.jsx(K,{value:e}),n.jsx(no,{observed:e.value,modelled:Pn(e)})]})}function $i({panZoom:e,label:t,style:r,onMouseMove:a,children:o}){const{style:s,ref:i,...l}=e.viewportProps;return n.jsxs(ro,{...l,ref:i,onMouseMove:a,"aria-label":t,style:{...s,...r},children:[o,n.jsx(ao,{role:"status",children:e.hint!==null&&n.jsx(oo,{children:e.hint})})]})}const ro=h.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  ${xe}
`,ao=h.div`
  position: absolute;
  bottom: var(--gap-related);
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-base);
  max-width: calc(100% - 16px);
  pointer-events: none;
`,oo=h.div`
  padding: var(--inset-control);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function Mi({filled:e,of:t,tone:r="info",label:a}){const o=`${e} of ${t}`;return n.jsx(so,{role:"img","aria-label":a===void 0?o:`${a}: ${o}`,"data-pips":"",children:Array.from({length:t},(s,i)=>n.jsx(io,{$colour:er[r],$filled:i<e},i))})}const so=h.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  flex: none;
`,io=h.span`
  width: 1em;
  height: 1em;
  border-radius: var(--radius-circle);
  border: 2px solid ${({$colour:e})=>e};
  background: ${({$colour:e,$filled:t})=>t?e:"transparent"};
`;function _i({id:e,label:t,value:r,options:a,onChange:o,hint:s}){const i=a.findIndex(l=>lr(l.choice,r));return n.jsxs(Se,{children:[n.jsx(ve,{htmlFor:e,children:t}),n.jsxs(Dn,{id:e,value:i===-1?"":String(i),onChange:l=>{const u=a[Number(l.target.value)];u!==void 0&&o(u.choice)},children:[i===-1&&n.jsx("option",{value:"",disabled:!0}),a.map((l,u)=>n.jsx("option",{value:u,children:l.label},`${l.choice.kind}-${l.choice.bodyIndex??"none"}`))]}),s!==void 0&&n.jsx(Xe,{children:s})]})}const lo=h.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`;function ki({job:e,transfer:t}){const r=he(e.fromPartIds,t.titleOf),a=he(e.toPartIds,t.titleOf),o=`${r} → ${a}`;return n.jsxs(te,{children:[n.jsxs(J,{children:[n.jsx(lo,{style:co,children:o}),t.held&&n.jsx(Ht,{tone:"info",children:"held"})]}),n.jsxs(J,{wrap:!0,children:[n.jsxs(J,{wrap:!0,children:[n.jsx(Je,{children:"Moved"}),n.jsxs(ne,{size:"sm",children:[n.jsx(K,{value:e.moved,decimals:1}),e.requested!=null?n.jsxs(n.Fragment,{children:[" / ",n.jsx(K,{value:e.requested,decimals:1})]}):" / until full"]})]}),n.jsxs(J,{children:[n.jsx(Je,{children:"Rate"}),n.jsx(ne,{size:"sm",children:n.jsx(K,{value:e.rate??we("units/s",0),decimals:1})})]})]}),n.jsx(J,{children:n.jsx(ie,{size:"sm",variant:"ghost",command:t.stop.with({all:!1,transferId:e.id},{label:`Stop ${e.resource} transfer, ${o}`}),children:"Stop"})})]})}const co={fontSize:"var(--font-size-value)",color:"var(--color-text-primary)",flex:1,minWidth:0},uo=[{role:null,label:"Off"},{role:"from",label:"From"},{role:"to",label:"To"}];function po({tank:e,transfer:t,state:r}){const{pick:a,setRole:o}=r,s=a.from.includes(e.partId)?"from":a.to.includes(e.partId)?"to":null,i=e.flowMode===it.Out?"out only":e.flowMode===it.In?"in only":null;return n.jsxs("fieldset",{style:sn,children:[n.jsx("legend",{style:mo,children:e.title}),n.jsxs(te,{children:[n.jsxs(J,{children:[n.jsxs(ne,{size:"sm",children:[n.jsx(K,{value:e.amount,decimals:1})," /"," ",n.jsx(K,{value:e.capacity,decimals:0})]}),i&&n.jsx($n,{label:i}),e.locked&&n.jsx(Ht,{tone:"warn",children:"Locked"})]}),n.jsx(Jt,{equalWidth:!1,children:uo.map(({role:l,label:u})=>{const f=l===null?void 0:t.blockReason(e,l,a);return n.jsx(Oe,{size:"sm",pressed:s===l,disabled:f!==void 0,disabledReason:f,onClick:()=>o(e.partId,l),children:u},u)})})]})]})}function Ei({transfer:e,state:t,form:r,onStarted:a,onCancel:o}){const[s,i]=d.useState(!0),[l,u]=d.useState(""),f=d.useId(),{pick:p}=t,x=e.tanks(p.resource),$=s?null:Number(l),v=cr(p,$),c=n.jsx(te,{children:x.map(g=>n.jsx(po,{tank:g,transfer:e,state:t},g.partId))}),y=e.running.some(g=>g.resource===p.resource&&g.fromPartIds.some(I=>p.from.includes(I))&&g.toPartIds.some(I=>p.to.includes(I)));d.useEffect(()=>{y&&a?.()},[y,a]);const k=g=>g.length>0?he(g,e.titleOf):"none",b=`${k(p.from)} → ${k(p.to)}`,j=`Transfer ${p.resource}, ${he(p.from,e.titleOf)} to ${he(p.to,e.titleOf)}`,_=n.jsxs(J,{children:[n.jsxs(Jt,{equalWidth:!1,"aria-label":"Amount",children:[n.jsx(Oe,{size:"sm",pressed:s,onClick:()=>i(!0),children:"Until full"}),n.jsx(Oe,{size:"sm",pressed:!s,onClick:()=>i(!1),children:"Units"})]}),!s&&n.jsx(be,{"aria-label":"Amount in units",inputMode:"decimal",value:l,onChange:g=>u(g.target.value),style:vo})]}),M=n.jsx(ie,{id:f,"aria-label":j,size:"sm",variant:"primary",unavailable:v,command:e.start.with(dr(p,$),{label:j}),children:"Transfer"});return r==="tray"?n.jsxs(J,{wrap:!0,style:fo,children:[n.jsx(re,{text:b,announce:!1,children:n.jsx("label",{htmlFor:f,style:ho,children:b})}),_,n.jsxs(J,{children:[o&&n.jsx(Fn,{type:"button","aria-label":"Cancel",onClick:o,children:n.jsx(zn,{size:14})}),M]})]}):n.jsxs(te,{children:[c,n.jsxs(J,{wrap:!0,style:xo,children:[n.jsxs("fieldset",{style:sn,children:[n.jsx("legend",{style:go,children:"Amount"}),_]}),n.jsxs(J,{children:[o&&n.jsx(ie,{size:"sm",variant:"ghost",onClick:o,children:"Cancel"}),M]})]})]})}const fo={flexWrap:"wrap",width:"100%",columnGap:"var(--gap-related-compact)"},ho={flex:"1 1 0",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"var(--font-size-value)",color:"var(--color-text-primary)"},sn={border:0,margin:0,padding:0,minWidth:0},mo={padding:0,fontSize:"var(--font-size-value)",color:"var(--color-text-primary)"},go={padding:0,fontSize:"var(--font-size-caption)",color:"var(--color-text-muted)"},xo={justifyContent:"space-between",flexWrap:"wrap"},vo={width:"6em"};function bo(e){if(e.command)return n.jsx(wo,{...e,command:e.command});const{command:t,unavailable:r,...a}=e;return n.jsx(ln,{...a})}function wo({command:e,unavailable:t,children:r,onClick:a,...o}){const s=zt({command:e,unavailable:t});return n.jsxs(n.Fragment,{children:[n.jsx(re,{text:s.tip,children:n.jsxs(ln,{...o,...s.edge,as:"button",interactive:!0,onClick:i=>{s.inert||(s.control.press(!1),a?.(i))},children:[r,n.jsx(yo,{"aria-hidden":"true",children:s.word})]})}),n.jsx(Ie,{visuallyHidden:!0,children:s.announce})]})}const yo=h.span`
  position: absolute;
  inset-inline-end: var(--gap-related);
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
`;function ln({as:e,interactive:t=!1,selected:r=!1,wrap:a=!1,nested:o=!1,type:s,children:i,...l}){return n.jsx($o,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:r,$wrap:a,$nested:o,...l,children:i})}const cn=h.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,jo="min(12ch, 100%)",$o=h.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-row);
  font-size: var(--font-size-compact);
  padding: var(--inset-row);
  ${({$wrap:e})=>e?`
  flex-wrap: wrap;
  row-gap: var(--gap-row-wrap);

  & > ${cn} {
    min-width: ${jo};
  }
`:""}
  ${({$interactive:e})=>e?Y`
  width: 100%;
  border: none;
  background: transparent;
  color: var(--color-text-primary);
  padding: var(--inset-row-pressable);
  border-radius: var(--radius-regular);
  cursor: pointer;
  text-align: left;
  font-family: inherit;

  &:hover {
    background: var(--color-surface-panel);
  }

  ${xe}
`:""}
  ${({$interactive:e,$selected:t})=>e&&t?`
  ${Vt("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}

  ${Ut}
`,Ri=Object.assign(bo,{Name:cn}),Mo=65,dn=38,_o=72,ko=_o-dn,un=55,We=137.508,Eo=10,Ro=1.5,Io=64,So=60,To=241,Ao=We-Math.floor(We),me=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function pn(e,t){const r=Math.abs(e-t)%360;return r>180?360-r:r}const Co=me.map((e,t)=>{let r=1/0;for(let o=0;o<me.length;o++)o!==t&&(r=Math.min(r,pn(e.hue,me[o].hue)));const a=r/2;return Math.max(0,Math.min(Eo,a-Ro))}),Lo=me.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:Co[t]}));function No(e,t=me){return t.find(r=>r.aliases.some(a=>e.includes(a)))}function fn(e){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function Et(e,t){return(e%t+t)%t}function Po(e){const r=fn(`light:${e}`)/4294967295;return dn+r*ko}function Do(e){const t=No(e);if(!t)return;const r=t.aliases.length===1?un:Po(e);return{hue:t.hue,lightness:r}}function Fo(e){return Lo.some(({centre:t,radius:r})=>pn(e,t)<r)}function zo(e){const t=fn(e);let r=Et(t*We,360);const a=So+(t>>>8)%To+Ao;let o=0;for(;Fo(r)&&o<Io;)r=Et(r+a,360),o++;return r}function Ii(e){const t=e.trim().toLowerCase(),r=Do(t),a=r?.hue??zo(t),o=r?.lightness??un;return`hsl(${Math.round(a)}deg ${Mo}% ${Math.round(o)}%)`}function Si({selected:e,gap:t="caption",layout:r="stack",selectedLook:a="fill",children:o,...s}){return n.jsx(Oo,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:r,$look:a,...s,children:o})}const Oo=h.button`
  display: flex;
  ${({$layout:e})=>e==="split"?Y`
          justify-content: space-between;
          align-items: baseline;
          > :first-child {
            flex: 1;
            min-width: 0;
          }
        `:Y`
          flex-direction: column;
        `}
  gap: ${({$gap:e})=>ye[e]};
  width: 100%;
  text-align: left;
  padding: var(--inset-selectable-row);
  border-radius: ${Yt.regular};
  border: 1px solid
    ${({$selected:e,$look:t})=>e?t==="outline"?"var(--color-accent-fg)":"transparent":"var(--color-border-subtle)"};
  ${({$selected:e,$look:t})=>e?t==="outline"?"background: var(--color-surface-raised); color: inherit;":Vt("go"):"background: transparent; color: inherit;"}
  cursor: pointer;
  font-family: inherit;

  ${({$selected:e})=>e?"":Y`
          @media (hover: hover) {
            &:hover:not(:disabled):not([aria-disabled="true"]) {
              border-color: var(--color-border-strong);
            }
          }
        `}

  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${ce}
`,Bo=d.forwardRef(function(t,r){return t.command?n.jsx(Ho,{...t,command:t.command,forwardedRef:r}):t.figure!==void 0?n.jsx(hn,{...t,forwardedRef:r}):n.jsx(mn,{ref:r,type:"range",...t})});function Ho({command:e,unavailable:t,forwardedRef:r,...a}){const o=Wt({command:e,unavailable:t});return n.jsx(hn,{...a,forwardedRef:r,input:o,disabled:a.disabled})}function hn({forwardedRef:e,input:t,value:r,min:a,max:o,step:s,figure:i,expected:l,expectedCaption:u=Bt,lastSeen:f,lastSeenCaption:p="last reported",disabled:x,onChange:$,"aria-label":v,...c}){const[y,k]=d.useState(null);d.useEffect(()=>{if(y===null)return;const R=()=>k(null);return window.addEventListener("pointerup",R),window.addEventListener("pointercancel",R),()=>{window.removeEventListener("pointerup",R),window.removeEventListener("pointercancel",R)}},[y]);const[b,j]=d.useState(null),_=t?.control.isSent===!0;d.useEffect(()=>{_||j(null)},[_]);const M=y??b??r,g=Ar({commanded:M,expected:l,lastSeen:f,step:s}),I=R=>`calc(8px + ${(R-a)/(o-a||1)} * (100% - 16px))`,U=R=>{t&&!t.inert&&j(R),t?.send(R)};return n.jsxs("div",{style:Cr,children:[n.jsx(re,{text:t?.tip,children:n.jsxs("div",{style:Lr,children:[n.jsx(mn,{...c,...t?.edge,ref:e,type:"range",min:a,max:o,step:s,value:M??a,onPointerDown:()=>k(M??a),onChange:R=>{const D=Number(R.target.value);y!==null?k(D):U(D),$?.(R)},onPointerUp:R=>U(Number(R.currentTarget.value)),disabled:x,"aria-label":v,style:Nr}),g.expected!==null&&n.jsx(ft,{kind:"modelled",caption:u,left:I(g.expected)}),g.lastSeen!==null&&n.jsx(ft,{kind:"held",caption:p,left:I(g.lastSeen)})]})}),n.jsxs("span",{style:{...Dr,position:"relative"},children:[M===null?le:i(M),t&&n.jsx(Uo,{"aria-hidden":"true",children:t.word})]}),n.jsx(Ie,{visuallyHidden:!0,children:t?.announce??null})]})}const Uo=h.span`
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
`,mn=h.input`
  width: 100%;
  min-width: 0;
  margin: 0;
  background: none;
  accent-color: var(--color-accent-fg);
  cursor: pointer;

  ${ce}
  ${Ut}
  border-radius: var(--radius-pill);

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function Wo({label:e,children:t,detail:r,tone:a="neutral",...o}){return n.jsxs(Go,{...o,children:[n.jsx(Xo,{children:e}),n.jsx(Yo,{$tone:a,children:t}),r!=null&&n.jsx(Ko,{children:r})]})}const Go=h.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,Xo=h.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,Yo=h.dd`
  margin: 0;
  min-width: 0;
  /* Bottom-aligned, so figures line up across the strip even where one label wraps. */
  margin-top: auto;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--gap-figure-parts);
  font-size: var(--font-size-figure);
  font-weight: 700;
  line-height: var(--line-height-tight);
  font-variant-numeric: tabular-nums;
  color: ${({$tone:e})=>Kt[e]};
`,Ko=h.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function Ti({slot:e}){const t=tr(e);return t.length===0?null:n.jsx(n.Fragment,{children:t.map(r=>n.jsx(Wo,{label:r.label,detail:r.detail,tone:r.tone??"neutral",children:n.jsx(Vo,{entry:r})},r.id))})}function Vo({entry:e}){if(e.value!==void 0)return n.jsx(K,{value:e.value});if(e.text===void 0)return n.jsx(nr,{});const t=On(e.held);return t===null?n.jsx(n.Fragment,{children:e.text}):n.jsx(Ge,{kind:t.kind,caption:t.caption,children:e.text})}const qo=12,se=12,Zo=12,Rt=52,B=10,Pe=4;function Jo(e,t,r){const a=i=>e.map(l=>Number.parseFloat(i.mark(l).replace(/[^\d.-]/g,""))),o=a(r(Pe)),s=i=>a(i).every((l,u)=>l===o[u]);if(s(t))return t;for(let i=0;i<Pe;i++){const l=r(i);if(s(l))return l}return r(Pe)}function Ai({labelSide:e="left",value:t,min:r,max:a,width:o=92,height:s=220,fillHeight:i=!1,tickStep:l,zones:u,markers:f,groundLine:p,seaLevel:x,format:$,"aria-label":v}){const c=d.useRef(null),[y,k]=d.useState(s);d.useEffect(()=>{if(!i)return;const w=c.current;if(!w)return;const L=()=>{const q=w.clientHeight;q>0&&k(q)};L();const A=new ResizeObserver(L);return A.observe(w),()=>A.disconnect()},[i]);const b=i?y:s,j=Gt(t),{shown:_,held:M,caption:g,band:I}=j,{anchor:U,tip:R}=Bn(g),D=_?.magnitude??Number.NaN,z=Number.isFinite(D)?_:null,O=r.magnitude,Z=a.magnitude,H=Z-O,m=Number.isFinite(D)?D:O,T=H>0?Math.max(O,Math.min(Z,m)):O,P=z!=null,C=ct(a,{format:$}),E=z==null?le:dt({magnitude:m,unit:z.unit},{format:C.rung}),S=w=>dt(w),G=[...(f??[]).flatMap(w=>w.label===void 0?[]:[w.bounds===void 0?`${w.label} ${S(w.value)}`:`${w.label} ${S(w.value)}, between ${S(w.bounds.lo)} and ${S(w.bounds.hi)}`]),...(u??[]).flatMap(w=>w.label===void 0?[]:[`${w.label} zone ${S(w.from.min(w.to))} to ${S(w.from.max(w.to))}`]),...p===void 0?[]:[`ground ${S(p)}`],...x===void 0?[]:[`sea level ${S(x)}`]],F=z==null||I===null?null:Vn(I,z.unit)??null,W=Math.max(0,b-se-Zo),Q=w=>{if(!(H>0))return se+W;const L=Math.max(0,Math.min(1,(w-O)/H));return se+(1-L)*W},X=w=>Q(w.magnitude),ae=se,Ke=se+W,ee=e==="right",N=ee?o-Rt-B:Rt,de=ee?N+B+6:N-6,Ve=ee?"start":"end",qe=(w,L)=>{const A=X(w),q=w.greaterThan(a)?-1:w.lessThan(r)?1:0,pe=N-4,$e=N+B+4,Ce=N+B/2;return n.jsxs("g",{"data-level":L?"sea":"ground",children:[n.jsx("line",{x1:pe,y1:A,x2:$e,y2:A,stroke:L?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:L?1.5:2,strokeDasharray:L?"3 2":void 0}),q!==0&&n.jsx("polygon",{"data-off-scale":"true",points:`${Ce-4},${A-q*2} ${Ce+4},${A-q*2} ${Ce},${A+q*4}`,fill:L?"var(--color-info-mark)":"var(--color-text-primary)"})]})},Te=[],je=l?.magnitude??0;if(je>0&&H>0){const w=Math.ceil(O/je),L=Math.floor(Z/je+1e-9);for(let A=w;A<=L;A++)Te.push(A===0?0:A*je)}const bn=Jo(Te,C,w=>ct(a,{format:$,decimals:w})),ue=Q(T),Ae=w=>W>0?(se+W-w)/W:0,Ze=F!==null&&Be(Ae(ue),[Ae(X(F.lo)),Ae(X(F.hi))],Hn())?F:null;return n.jsxs(Qo,{ref:c,...Gn(j),...U,...P?{role:"meter","aria-label":ot(v,g),...at(g),"aria-valuenow":T,"aria-valuemin":O,"aria-valuemax":Z,"aria-valuetext":G.length===0?E:`${E}; ${G.join("; ")}`}:{role:"img","aria-label":ot(`${v}: ${E}`,g),...at(g)},style:i?{height:"100%"}:void 0,children:[n.jsxs("svg",{width:o,height:b,viewBox:`0 0 ${o} ${b}`,"aria-hidden":"true",style:i?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[n.jsx("rect",{x:N,y:ae,width:B,height:W,rx:2,fill:"var(--color-surface-raised)"}),u?.map(w=>{const L=X(w.from.max(w.to)),A=X(w.from.min(w.to)),q=Math.max(0,A-L);return n.jsx("g",{children:n.jsx("rect",{x:N,y:L,width:B,height:q,fill:w.color??"var(--color-warn-mark)",opacity:.55})},`zone-${A}-${L}-${w.label??""}`)}),x!==void 0&&H>0&&qe(x,!0),p!==void 0&&H>0&&qe(p,!1),Te.map(w=>{const L=Q(w),A=P&&Math.abs(L-Math.max(ae+4,Math.min(Ke-4,ue)))<qo;return n.jsxs("g",{children:[n.jsx("line",{x1:ee?N+B+4:N-4,y1:L,x2:ee?N+B:N,y2:L,stroke:"var(--color-border-subtle)",strokeWidth:1}),!A&&n.jsx("text",{x:de,y:L,textAnchor:Ve,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:bn.mark(w)})]},`tick-${w}`)}),f?.map(w=>{const{bounds:L}=w,A=X(w.value),q=w.color??"var(--color-accent-fg)";return n.jsxs("g",{"data-marker":w.label,children:[n.jsx("line",{x1:N,y1:A,x2:N+B,y2:A,stroke:q,strokeWidth:2,strokeDasharray:"2 2"}),n.jsx("polygon",{points:ee?`${N},${A} ${N-5},${A-3} ${N-5},${A+3}`:`${N+B},${A} ${N+B+5},${A-3} ${N+B+5},${A+3}`,fill:"none",stroke:q,strokeWidth:1.5}),L!==void 0&&["lo","hi"].map(pe=>{const $e=X(L[pe]);return n.jsx(rt,{end:pe,x1:N,y1:$e,x2:N+B,y2:$e},pe)})]},`marker-${A}-${w.label??""}`)}),Ze!==null&&["lo","hi"].map(w=>{const L=X(Ze[w]);return n.jsx(rt,{end:w,x1:N,y1:L,x2:N+B,y2:L},w)}),P&&n.jsxs(n.Fragment,{children:[n.jsx("line",{x1:N-6,y1:ue,x2:N+B+6,y2:ue,stroke:"var(--color-accent-fg)",strokeWidth:2}),n.jsxs("text",{x:ee?de+2:de-2,y:Math.max(ae+4,Math.min(Ke-4,ue)),textAnchor:Ve,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[C.mark(m),M&&n.jsx(Un,{size:5})]})]}),!P&&n.jsx(Wn,{x:ee?de+8:de-8,y:ae+W/2,size:11,children:le}),C.symbol!==""&&n.jsx("text",{x:N+B/2,y:ae-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:C.symbol})]}),R]})}const Qo=h.div`
  display: block;
  max-width: 100%;
`;function Ci(e){return e.command?n.jsx(ns,{...e,command:e.command}):n.jsx(rs,{...e})}const es=h.div`
  position: relative;
  width: 100%;

`,ts=h.span`
  position: absolute;
  inset-block: 0;
  inset-inline-end: var(--gap-related);
  display: flex;
  align-items: center;
  pointer-events: none;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
`;function ns({label:e,value:t,command:r,unavailable:a,invalid:o,placeholder:s,maxLength:i,"data-testid":l}){const u=d.useId(),f=`${u}-invalid`,p=Wt({command:r,unavailable:a}),[x,$]=d.useState(null),v=!p.control.isSent,c=p.control.isRefused||p.control.isLost;d.useEffect(()=>{c&&$(null)},[c]),d.useEffect(()=>{v&&!c&&$(k=>k===t?null:k)},[v,c,t]);const y=()=>{x===null||x===t||p.inert||p.send(x)};return n.jsxs(Se,{children:[n.jsx(ve,{htmlFor:u,children:e}),n.jsx(re,{text:p.tip,children:n.jsxs(es,{children:[n.jsx(be,{...p.edge,"aria-describedby":o==null?void 0:f,"aria-invalid":o==null?void 0:!0,"data-testid":l,id:u,maxLength:i,onBlur:y,onChange:k=>$(k.target.value),onKeyDown:k=>{k.key==="Enter"&&y()},placeholder:s,type:"text",value:x??t}),n.jsx(ts,{"aria-hidden":"true",children:p.word}),n.jsx(Ie,{visuallyHidden:!0,children:p.announce})]})}),o!=null&&n.jsx(Xe,{id:f,children:n.jsx(ne,{size:"xs",tone:"warn",children:o})})]})}function rs({label:e,value:t,onChange:r,invalid:a,placeholder:o,maxLength:s,disabled:i,"data-testid":l}){const u=d.useId(),f=`${u}-invalid`;return n.jsxs(Se,{children:[n.jsx(ve,{htmlFor:u,children:e}),n.jsx(be,{"aria-describedby":a==null?void 0:f,"aria-invalid":a==null?void 0:!0,"data-testid":l,disabled:i,id:u,maxLength:s,onChange:p=>r(p.target.value),placeholder:o,type:"text",value:t}),a!=null&&n.jsx(Xe,{id:f,children:n.jsx(ne,{size:"xs",tone:"warn",children:a})})]})}const as=112;function os(e,t){try{return we(e,1).in(t).magnitude}catch{return Number.NaN}}function ss(e,t){let r=e;return t.map((a,o)=>{if(!Number.isFinite(a)||a===0)return 0;const s=o===t.length-1?r/a:Math.trunc(r/a);return r-=s*a,s})}function Li({value:e,unit:t,onChange:r,label:a,rungs:o,range:s,rate:i,disabled:l}){const u=d.useId(),{shown:f,held:p,caption:x}=Gt(e),$=p?n.jsx(Ge,{caption:x,children:a}):a,v=s,c=f?f.magnitude:Number.NaN,[y,k]=d.useState({}),b=g=>y[g]??null,j=(g,I)=>k(U=>({...U,[g]:I})),_=i?n.jsxs(te,{gap:"related-packed",children:[n.jsx(Ia,{mode:"rate","aria-label":`${a} rate`,value:c,step:i.step,stepsPerSecond:i.stepsPerSecond,disabled:l||!Number.isFinite(c),format:De(t)?ls:void 0,width:De(t)?as:void 0,onChange:g=>r(fe(t,g))}),n.jsx(ne,{level:"faint",size:"sm",children:`${i.step} ${is(t)} / notch`})]}):null;if(De(t))return n.jsxs(ze,{children:[n.jsx(St,{"aria-hidden":"true",children:$}),n.jsxs(te,{gap:"related-dense",children:[n.jsx(eo,{label:p&&x!==null?`${a}, ${x}`:a,value:Number.isFinite(c)?c:null,disabled:l,steps:i?[]:void 0,onChange:g=>r(fe(t,g))}),_]})]});if(o&&o.length>0){const g=o.map(R=>os(String(R),t)),I=ss(c,g),U=(R,D)=>{const z=Fe(D);if(z===void 0){j(R,{text:D,against:I[R]});return}const O=I.map(H=>Number.isFinite(H)?H:0);O[R]=z;const Z=O.reduce((H,m,T)=>Number.isFinite(g[T])?H+m*g[T]:H,0);j(R,{text:D,against:z}),r(fe(t,Z))};return n.jsxs(ze,{children:[n.jsx(St,{id:`${u}-label`,children:$}),n.jsx(ps,{role:"group","aria-labelledby":`${u}-label`,children:o.map((R,D)=>n.jsxs(fs,{children:[n.jsx(hs,{type:"number",disabled:l,"aria-label":`${a} ${String(R)}`,value:It(b(D),I[D]),onChange:z=>U(D,z.target.value)}),n.jsx(Tt,{"aria-hidden":"true",children:String(R)})]},String(R)))}),_]})}const M=g=>{const I=Fe(g);j(0,{text:g,against:I??c}),I!==void 0&&r(fe(t,I))};return n.jsxs(ze,{children:[n.jsx(ds,{htmlFor:u,children:$}),n.jsxs(us,{children:[n.jsx(xn,{id:u,type:"number",disabled:l,min:v?.min,max:v?.max,step:v?.step,value:It(b(0),c),onChange:g=>M(g.target.value)}),n.jsx(Tt,{"aria-hidden":"true",children:t})]}),v?n.jsx(Bo,{disabled:l,"aria-label":`${a} slider`,min:v.min,max:v.max,step:v.step??(v.max-v.min)/100,value:Number.isFinite(c)?c:v.min,onChange:g=>r(fe(t,Fe(g.target.value)??v.min))}):null,_]})}function It(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(cs(t)):""}function is(e){return Xt(e)??e}function De(e){return Xt(e)==="s"}function ls(e){if(!Number.isFinite(e))return"";const{day:t,hour:r,minute:a,second:o}=on(e),s=i=>String(i).padStart(2,"0");return`D${t} ${s(r)}:${s(a)}:${s(o)}`}function Fe(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function cs(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const ze=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,gn=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,ds=h.label`
  ${gn}
`,St=h.span`
  ${gn}
`,us=h.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,xn=h.input`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-field-compact);
  border-radius: var(--radius-regular);
  text-align: right;
  font-variant-numeric: tabular-nums;
  min-width: 0;

  ${ce}
`,Tt=h.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,ps=h.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,fs=h.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,hs=h(xn)`
  width: 4.5em;
`,ms=200;function At(e={}){const t=e.quietMs??ms;let r=null,a=Number.NEGATIVE_INFINITY,o=!0;return{wheel(s,i){return(r===null||s-a>t)&&(r=i&&o?"diagram":"page"),a=s,r},pageScrolled(){o=!1},pointerMovedInside(){o=!0},yieldToPage(){r="page"},get owner(){return r}}}const gs=16,xs=400,Ct=120,vs=Math.log(1.15)/100,bs=.01;function ws(e,t,r){const a=t===1?e*gs:t===2?e*xs:e,o=Math.max(-Ct,Math.min(Ct,a)),s=r&&Math.abs(a)<40?bs:vs;return Math.exp(-o*s)}function ys(e,t,r={}){const{quietMs:a}=r,o=d.useRef(At({quietMs:a}));d.useEffect(()=>{o.current=At({quietMs:a})},[a]);const[s,i]=d.useState(null);d.useEffect(()=>{e.current!==s&&i(e.current)}),d.useEffect(()=>{if(!s||!t)return;const l=c=>c instanceof Node&&s.contains(c);let u=null;const f=(c,y)=>u!==null&&(Math.abs(c-u.x)>=1||Math.abs(y-u.y)>=1),p=c=>{u={x:c.clientX,y:c.clientY},!(c.ctrlKey||c.metaKey)&&o.current.wheel(performance.now(),l(c.target))},x=c=>{const y=f(c.clientX,c.clientY);u={x:c.clientX,y:c.clientY},y&&l(c.target)&&o.current.pointerMovedInside()},$=c=>{const y=c.target;(y===document||y instanceof Node&&y.contains(s))&&o.current.pageScrolled()},v=c=>{const y=c.ctrlKey||c.metaKey;if(!y&&o.current.owner!=="diagram")return;const k=s.getBoundingClientRect(),b=ws(c.deltaY,c.deltaMode,y);if(t(b,c.clientX-k.left,c.clientY-k.top)===!1&&!y){o.current.yieldToPage();return}c.preventDefault()};return window.addEventListener("wheel",p,{capture:!0,passive:!0}),window.addEventListener("pointermove",x,{capture:!0,passive:!0}),window.addEventListener("scroll",$,{capture:!0,passive:!0}),s.addEventListener("wheel",v,{passive:!1}),()=>{window.removeEventListener("wheel",p,{capture:!0}),window.removeEventListener("pointermove",x,{capture:!0}),window.removeEventListener("scroll",$,{capture:!0}),s.removeEventListener("wheel",v)}},[s,t])}const js="Arrow keys pan, + and - zoom, 0 resets",$s=.15,Lt=1.25,Ms={zoom:1,panX:0,panY:0};function Ni(e={}){const{home:t=Ms,zoomAbout:r="pointer",panThreshold:a=3,enabled:o=!0}=e,[s,i]=d.useState(t),l=d.useRef({camera:s,options:e,home:t});l.current={camera:s,options:e,home:t};const u=d.useRef(null),f=e.elementRef??u,p=d.useCallback(()=>{const m=f.current?.getBoundingClientRect();return{w:m?.width??0,h:m?.height??0}},[]),x=d.useCallback(m=>{const{constrain:T}=l.current.options,P=p(),C=T&&P.w>0&&P.h>0?T(m,P):m;return l.current.camera=C,i(C),C},[p]),$=d.useCallback(m=>{x(typeof m=="function"?m(l.current.camera):m)},[x]),v=d.useCallback((m,T,P)=>{const C=l.current.camera,{minZoom:E=.1,maxZoom:S=50}=l.current.options,G=typeof E=="function"?E(C):E,F=Math.max(Math.min(G,C.zoom),Math.min(Math.max(S,C.zoom),C.zoom*m));if(F===C.zoom)return!1;const{w:W,h:Q}=p();if(r==="centre")x({...C,zoom:F});else{const X=(T-W/2)/C.zoom+C.panX,ae=(P-Q/2)/C.zoom+C.panY;x({zoom:F,panX:X-(T-W/2)/F,panY:ae-(P-Q/2)/F})}return l.current.options.onManualMove?.("zoom"),!0},[x,p,r]);ys(f,d.useMemo(()=>o?v:null,[o,v]));const c=d.useCallback(()=>{l.current.options.onManualMove?.("reset"),x(l.current.home)},[x]),y=d.useCallback(m=>{const{w:T,h:P}=p();v(m,T/2,P/2)},[p,v]),[k,b]=d.useState(null),j=d.useRef(new Map),_=d.useRef(null),M=d.useRef(null),g=d.useRef(null),I=d.useRef(!1),[U,R]=d.useState(!1),D=d.useCallback(m=>{if(l.current.options.enabled!==!1&&!(m.pointerType==="mouse"&&m.button!==0)){if(j.current.set(m.pointerId,{x:m.clientX,y:m.clientY}),j.current.size===2){const[T,P]=[...j.current.values()];_.current=null,M.current=Math.hypot(T.x-P.x,T.y-P.y);return}I.current=!1,g.current={x:m.clientX,y:m.clientY},_.current={x:m.clientX,y:m.clientY},M.current=null}},[]),z=d.useCallback(m=>{if(!j.current.has(m.pointerId))return;if(m.pointerType==="mouse"&&m.buttons===0){j.current.delete(m.pointerId),j.current.size===0&&(_.current=null,g.current=null,M.current=null,R(!1));return}if(j.current.set(m.pointerId,{x:m.clientX,y:m.clientY}),j.current.size>=2){const[G,F]=[...j.current.values()],W=Math.hypot(G.x-F.x,G.y-F.y),Q=M.current;if(M.current=W,Q===null||Q===0)return;const X=f.current?.getBoundingClientRect();I.current=!0,v(W/Q,(G.x+F.x)/2-(X?.left??0),(G.y+F.y)/2-(X?.top??0));return}const T=g.current,P=_.current;if(!T||!P||!I.current&&Math.hypot(m.clientX-T.x,m.clientY-T.y)<a)return;I.current||(I.current=!0,R(!0),m.currentTarget.setPointerCapture?.(m.pointerId));const C=m.clientX-P.x,E=m.clientY-P.y;_.current={x:m.clientX,y:m.clientY};const S=l.current.camera;l.current.options.onManualMove?.("pan"),x({...S,panX:S.panX-C/S.zoom,panY:S.panY-E/S.zoom})},[x,a,v]),O=d.useCallback(m=>{if(j.current.delete(m.pointerId),m.currentTarget.releasePointerCapture?.(m.pointerId),j.current.size===1){const[T]=[...j.current.values()];_.current={...T},g.current={...T},M.current=null;return}j.current.size===0&&(_.current=null,g.current=null,M.current=null,R(!1))},[]),Z=d.useCallback(m=>{if(l.current.options.enabled===!1||m.target!==m.currentTarget||m.ctrlKey||m.metaKey||m.altKey)return;const T=l.current.camera,{w:P,h:C}=p(),E=(S,G)=>{const F=(S==="panX"?P:C)/T.zoom;l.current.options.onManualMove?.("pan"),x({...T,[S]:T[S]+G*F*$s})};switch(m.key){case"ArrowLeft":E("panX",-1);break;case"ArrowRight":E("panX",1);break;case"ArrowUp":E("panY",-1);break;case"ArrowDown":E("panY",1);break;case"+":case"=":y(Lt);break;case"-":case"_":y(1/Lt);break;case"0":c();break;default:return}m.preventDefault()},[x,c,p,y]);return{camera:s,setCamera:$,reset:c,zoomBy:y,viewportProps:{ref:f,tabIndex:0,role:"group",onPointerDown:D,onPointerMove:z,onPointerUp:O,onPointerCancel:O,onFocus:m=>{m.target===m.currentTarget&&m.currentTarget.matches(":focus-visible")&&b(js)},onBlur:()=>b(null),onKeyDown:Z,style:{touchAction:"none",cursor:U?"grabbing":"grab"}},didPan:()=>I.current,isDragging:U,hint:k}}const Nt="(prefers-reduced-motion: reduce)";function Pi(){const[e,t]=d.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(Nt).matches);return d.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const r=window.matchMedia(Nt),a=()=>t(r.matches);return a(),r.addEventListener("change",a),()=>r.removeEventListener("change",a)},[]),e}const vn=d.createContext(null);function Di({widget:e,scope:t,children:r}){const a=d.useMemo(()=>({widget:e,scope:t}),[e,t]);return n.jsx(vn.Provider,{value:a,children:r})}function Fi(e){const t=d.useContext(vn);if(!(!t||t.widget!==e))return t.scope}function zi(e){if(e.length===0)return[];const t=[[e[0]]];for(let r=1;r<e.length;r++)Es(e[r-1],e[r])?t.push([e[r]]):t[t.length-1].push(e[r]);return t}function Oi(e,t,r,a){if(e.length===0||!(t>0))return[];const o=[e[0].x];let s=o[0],i=o[0];for(let l=1;l<e.length;l++){const u=o[l-1],f=u+ks(e[l].x-u,t);o.push(f),f<s&&(s=f),f>i&&(i=f)}return _s(s,i,r,a,t).map(l=>e.map((u,f)=>({...u,x:o[f]+l})))}function _s(e,t,r,a,o){if(!(o>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((r-t)/o),i=Math.floor((a-e)/o),l=[];for(let u=s;u<=i;u++)l.push(u*o+0);return l}function ks(e,t){const r=t/2;return((e+r)%t+t)%t-r}function Es(e,t){const r=Pt(e),a=Pt(t),o=Is(r,a);if(o===0)return!1;const s=Dt(Rs(r,a));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=o)return!1;const l=[0,0,e.lat+t.lat>=0?1:-1],u=Dt(Ss(l,s));if(u===null)return!1;const f=ge(r,a);return ge(r,u)>f&&ge(a,u)>f}function Pt({lat:e,lon:t}){const r=e*Math.PI/180,a=t*Math.PI/180,o=Math.cos(r);return[o*Math.cos(a),o*Math.sin(a),Math.sin(r)]}function ge(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Rs(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Is(e,t){return Math.acos(Math.max(-1,Math.min(1,ge(e,t))))}function Ss(e,t){const r=ge(e,t);return[e[0]-r*t[0],e[1]-r*t[1],e[2]-r*t[2]]}function Dt(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{Wo as $,Ks as A,Zs as B,Qs as C,si as D,pi as E,ga as F,Wa as G,mi as H,wr as I,Ia as J,_i as K,gi as L,ri as M,rn as N,ji as O,$i as P,Va as Q,an as R,Ka as S,ki as T,Ei as U,Ha as V,Ri as W,cn as X,Si as Y,ti as Z,Bo as _,Ua as a,Ti as a0,vi as a1,Ai as a2,Xa as a3,Ci as a4,lo as a5,Li as a6,Di as a7,ei as a8,br as a9,Ar as aa,At as ab,ra as ac,fi as ad,_s as ae,Ii as af,zi as ag,Ni as ah,Pi as ai,ni as aj,ys as ak,Fi as al,Qa as am,ws as an,Oi as ao,Ya as b,Vs as c,qs as d,wi as e,Js as f,Jt as g,ai as h,oi as i,ii as j,li as k,ci as l,di as m,ui as n,hi as o,bi as p,J as q,yi as r,xi as s,Ga as t,eo as u,no as v,Za as w,qa as x,Mi as y,nn as z};
