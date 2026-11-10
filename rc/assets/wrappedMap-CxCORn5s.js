import{j as n}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./ext-react-C0MU9AHG.js";import h,{css as Y,keyframes as vn}from"./ext-styled-components-DAuodqsN.js";import{t as bn,e as wn,b as qe,g as yn,h as Pe}from"./TinyEssentials-siyGaSZD.js";import{E as Pt,c0 as Dt,ag as re,a7 as Be,b$ as xe,ai as jn,n as $n,F as Ft,m as He,y as Ue,b2 as Mn,bV as Ze,c1 as _n,$ as _e,ac as K,c2 as kn,bF as En,aR as Je,bZ as Rn,c3 as zt,b_ as Qe,g as In,aj as ce,e as se,Z as Sn,aN as Tn,aq as et,bB as De,bO as An,bN as Cn,aD as We,ah as Ot,bm as Ln,V as Nn,l as Pn,B as Bt,I as Dn,i as Fn,c4 as Ht,af as zn,bl as On,ad as Ut,bK as Bn,bt as Hn,bT as tt,aJ as Un,c5 as Wn,bU as nt,bA as rt,ae as Gn}from"./ModalSaveBar-CP3fcnhB.js";import{aM as Se,b4 as at,aK as ve,al as Xn,cb as Yn,cL as Kn,b2 as Ge,aJ as ot,m as Vn,cr as fe,ca as Wt}from"./view-clock-formula-nrcILacK.js";import"./ksp-enum-names-DnDvHV3m.js";import"./logger-2_QM1wvD.js";import"./screen-C--ukhnW.js";import{Z as be,N as ie,_ as Gt,$ as qn,y as st,B as Zn,j as Xt,a0 as Jn,e as te,k as le,U as Qn,g as er,Y as Yt,E as tr,c as nr,u as it,x as lt}from"./contributionsRead-DsV6K_C2.js";import{a as rr,r as ar,b as or}from"./Notice-Z08baFQt.js";import{r as sr}from"./ext-react-dom-DCF8ZnaJ.js";import{l as ir}from"./capability-lock-h9_jmFqf.js";import"./lagrange-Cs2miMYP.js";import"./use-transmissions-C6oNEXS8.js";import{r as lr}from"./control-frame-to-read-frame-iS99BknH.js";import{d as he,a as cr,e as dr}from"./resource-transfer-Bk-CTvxC.js";function Ws({items:e,onSelect:t,onDismiss:r,"aria-label":a,style:o,header:s,footer:i,emptyLabel:l="No actions",otherLabel:u="Other"}){const p=d.useRef(null),f=d.useId(),[v,M]=d.useState(0),w=bn(e,u),c=w.flatMap(([,x])=>x),j=c.length;d.useEffect(()=>{const x=p.current;if(!x)return;if(j===0){x.focus();return}x.querySelectorAll('[role="menuitem"]')[v]?.focus()},[v,j]),d.useEffect(()=>{const x=y=>{const _=p.current;_&&y.target instanceof Node&&!_.contains(y.target)&&r()};return document.addEventListener("pointerdown",x),()=>document.removeEventListener("pointerdown",x)},[r]);const S=d.useCallback(x=>{if(x.key==="Escape"){x.stopPropagation(),r();return}if(x.key==="Tab"){r();return}if(c.length!==0)switch(x.key){case"ArrowDown":x.preventDefault(),M(y=>Math.min(y+1,c.length-1));break;case"ArrowUp":x.preventDefault(),M(y=>Math.max(y-1,0));break;case"Home":x.preventDefault(),M(0);break;case"End":x.preventDefault(),M(c.length-1);break}},[c.length,r]);return n.jsxs(gr,{ref:p,role:j>0?"menu":void 0,"aria-label":a,onKeyDown:S,tabIndex:-1,style:o,children:[s,c.length===0?n.jsx(Pt,{layout:"fill",children:l}):w.map(([x,y],_)=>n.jsxs("div",{...w.length>1?{role:"group","aria-labelledby":`${f}-group-${_}`}:{role:"none"},children:[w.length>1?n.jsx(xr,{id:`${f}-group-${_}`,"aria-hidden":"true",children:x}):null,y.map($=>{const g=c.indexOf($);if($.command)return n.jsx(fr,{item:$,command:$.command,tabIndex:g===v?0:-1,onFocus:()=>M(g),onSelect:t},$.key);const R=$.disabled||$.unavailable!==void 0;return n.jsx(pr,{tip:ur($),children:n.jsx(Kt,{type:"button",role:"menuitem","aria-label":$["aria-label"],"data-predicted":$.advise?"at-risk":void 0,"aria-disabled":R||void 0,$disabled:R,tabIndex:g===v?0:-1,onFocus:()=>M(g),onClick:()=>{R||t($.key)},children:$.label})},$.key)})]},x)),i]})}function ur(e){return e.advise?`Likely to be refused: ${e.advise}.`:e.unavailable??e.tip}function pr({tip:e,children:t}){return e?n.jsx(re,{text:e,children:t}):t}function fr({item:e,command:t,tabIndex:r,onFocus:a,onSelect:o}){const s=Dt({command:t,unavailable:e.unavailable,advise:e.advise}),{control:i}=s,l=d.useRef(!1),u=i.command.handle.railed===!0,p=e.confirmLabel!==void 0;d.useEffect(()=>{l.current&&!u&&!i.isSent&&(l.current=!1,o(e.key))},[i.isSent,u,o,e.key]);const f=s.word??(i.isArmed?e.confirmLabel:null);return n.jsxs(n.Fragment,{children:[n.jsx(re,{text:s.tip??e.tip,children:n.jsxs(Kt,{type:"button",role:"menuitem","aria-label":e["aria-label"],"aria-disabled":e.disabled||s.inert||void 0,$disabled:e.disabled||s.inert,tabIndex:r,onFocus:a,"data-command-edge":s.edge["data-command-edge"],"data-command-phase":s.edge["data-command-phase"],"data-stream":s.edge["data-stream"],"data-predicted":s.edge["data-predicted"],onClick:()=>{if(e.disabled||s.inert)return;const v=i.isArmed;i.press(p),!(p&&!v)&&(u?o(e.key):l.current=!0)},children:[n.jsx(hr,{children:e.label}),n.jsx(mr,{"aria-hidden":"true",children:f})]})}),n.jsx(Be,{visuallyHidden:!0,children:s.announce})]})}const hr=h.span`
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
`,Kt=h.button`
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

  ${jn}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`;function Gs({settings:e,values:t,onChange:r}){return e.length===0?null:n.jsx(n.Fragment,{children:e.flatMap(a=>a.fields.map(o=>{const i=t?.[a.namespace]?.[o.key]??o.default,l=o.label??o.key,u=`augment-setting-${a.namespace}-${o.key}`;return o.type===Se.Bool?n.jsx($n,{children:n.jsx(wn,{checked:!!i,onChange:p=>r(a.namespace,o.key,p),label:l})},`${a.namespace}.${o.key}`):n.jsxs(Ft,{children:[n.jsx(He,{htmlFor:u,children:l}),n.jsx(Ue,{id:u,type:o.type===Se.Number?"number":"text",value:i===void 0?"":String(i),onChange:p=>{const f=p.target.value;if(o.type!==Se.Number){r(a.namespace,o.key,f);return}if(f===""){r(a.namespace,o.key,void 0);return}const v=Number(f);Number.isFinite(v)&&r(a.namespace,o.key,v)}})]},`${a.namespace}.${o.key}`)}))})}function Xs({fallback:e,gap:t="related-dense",children:r,...a}){return n.jsxs(n.Fragment,{children:[n.jsx(Vt,{$gap:t,...a,children:r}),n.jsx(vr,{children:e})]})}const Vt=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>be[e]};
`,vr=h.div`
  ${Vt}:not(:empty) + & {
    display: none;
  }
`,ct=12,je=8;function br(e,t,r){return{left:dt(e.x,t.w,r.w),top:dt(e.y,t.h,r.h)}}function dt(e,t,r){const a=e+ct;if(a+t<=r-je)return a;const o=e-ct-t;return o>=je?o:Math.max(je,r-je-t)}const wr="–";function Ys({min:e,max:t,wrapsAt:r,className:a,...o}){const s=at(e),i=at(t);return e==null||t==null||s===null||i===null?n.jsx(ke,{className:a,children:ie}):r!==void 0&&Math.abs(i-s)>=r/2?n.jsx(ke,{className:a,children:"(precesses)"}):n.jsx(Mn,{of:e.unit,separate:!0,...o,children:n.jsx(yr,{min:e,max:t,className:a})})}function yr({min:e,max:t,className:r}){return Ze(e),Ze(t),_n(e)?n.jsx(ke,{className:r,children:n.jsxs($r,{children:[n.jsx("span",{"aria-hidden":"true",children:"~"}),n.jsx(_e,{children:"approximately "}),n.jsx(K,{value:e})]})}):n.jsxs(ke,{className:r,children:[n.jsx(K,{value:e}),n.jsx(jr,{"aria-hidden":"true",children:wr}),n.jsx(_e,{children:" to "}),n.jsx(K,{value:t})]})}const ke=h.span`
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
`,Mr={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function Ks({surface:e,pad:t,bordered:r=!1,radius:a,children:o,...s}){return n.jsx(_r,{$surface:e,$pad:t,$bordered:r,$radius:a,...s,children:o})}const _r=h.div`
  ${({$surface:e})=>e&&`background: ${Mr[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${Gt[e]};`}
  ${({$pad:e})=>e&&`padding: var(${qn[e]});`}
`,qt=d.forwardRef(function({equalWidth:t=!0,gap:r,children:a,...o},s){return n.jsx(kr,{ref:s,$equalWidth:t,$gap:r,...o,children:a})}),kr=h.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?be[e]:"var(--gap-related)"};
`,Er="3px",Rr=h(or)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${st(e)};`:""}
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
    ${t?`border-left-color: color-mix(in srgb, ${st(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function Ir({tone:e,dimmed:t,identityColor:r,standalone:a,...o}){return ar(Rr,{...o,$tone:e,$dimmed:t,$identityColor:r,$standalone:a})}const Vs=Object.assign(Ir,rr);function qs(e,t){if(!t)return{disabled:!1,disabledReason:void 0,predictedOutcome:void 0,tip:void 0};const r=`${t.charAt(0).toUpperCase()}${t.slice(1)}`;return e.gateStopsPress===!0?{disabled:!0,disabledReason:r,predictedOutcome:void 0,tip:void 0}:{disabled:!1,disabledReason:void 0,predictedOutcome:"at-risk",tip:`Likely to be refused: ${t}.`}}function Zs({oneWaySeconds:e,delayReading:t,className:r}){const a=ve("s",e);return n.jsxs(Sr,{className:r,role:"group","aria-label":"Signal delay",children:["one-way ~",n.jsx(K,{value:kn(a,t),...a.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const Sr=h.div`
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
`;function Js(e){const t=En(),r=d.useId(),a=e!==null;d.useEffect(()=>{if(!(!t||!e))return t.register({id:r,...e})},[t,r,a]),d.useEffect(()=>{!t||!e||t.update(r,e)},[t,r,e])}function Tr(e,t,r){return Math.abs(e-t)<r/10}function Ar({commanded:e,expected:t,lastSeen:r,step:a}){const o=(l,u)=>l!=null&&u!=null&&Tr(l,u,a),s=r??null;return{expected:t!=null&&!o(t,e)&&!o(t,s)?t:null,lastSeen:s,onCommanded:o(s,e)}}function Zt({kind:e}){return n.jsx("svg",{"aria-hidden":"true",width:pt,height:pt,viewBox:"0 0 16 16",style:{display:"block",overflow:"visible"},children:e==="held"?n.jsx("rect",{x:"2",y:"2",width:"12",height:"12",style:ft.held}):n.jsx("polygon",{points:"8,1.5 14.8,14 1.2,14",style:ft.modelled})})}function ut({kind:e,caption:t,left:r}){return n.jsxs("span",{"data-role":e==="modelled"?"expected":"last-seen","data-reckoning-mark":e,style:{...Pr,left:r},children:[n.jsx(Zt,{kind:e}),n.jsx(_e,{children:t})]})}function Qs({kind:e,caption:t,main:r=!1,children:a}){return n.jsxs("span",{"data-role":e==="modelled"?"expected":"last-seen","data-reckoning-mark":e,"data-held":e==="held"?"":void 0,style:r?Fr:zr,children:[n.jsx(Zt,{kind:e}),a,n.jsxs(_e,{"data-unit-currency":"",children:[", ",t]})]})}const Cr={display:"flex",alignItems:"center",gap:"var(--gap-related)"},Lr={flex:1,position:"relative",display:"flex",alignItems:"center"},Nr={width:"100%"},Pr={position:"absolute",top:"50%",transform:"translate(-50%, -50%)",display:"flex",pointerEvents:"none"},pt=16,ft={held:{fill:Je.held.color,stroke:"var(--color-surface-app)",strokeWidth:3,paintOrder:"stroke"},modelled:{fill:Je.modelled.color,stroke:"var(--color-surface-app)",strokeWidth:3,strokeLinejoin:"round",paintOrder:"stroke"}},Dr={fontSize:"var(--font-size-compact)",color:"var(--color-text-primary)",fontVariantNumeric:"tabular-nums",minWidth:"36px",textAlign:"right"},Fr={display:"inline-flex",alignItems:"center",gap:"var(--gap-figure-parts)"},zr={display:"inline-flex",alignItems:"center",gap:"var(--gap-figure-parts)",fontSize:"var(--font-size-caption)",color:"var(--color-text-faint)"};function ei({at:e,atAspect:t,narrow:r,wide:a,children:o,...s}){return n.jsx(Br,{$query:Or(e,t),$narrow:r,$wide:a,...s,children:o})}function Or(e,t){const r=[e===void 0?void 0:`(min-width: ${e}px)`,t===void 0?void 0:`(aspect-ratio >= ${t})`].filter(a=>a!==void 0);return r.length===0?void 0:r.join(" and ")}const Br=h.div`
  ${({$narrow:e})=>e}
  ${({$query:e,$wide:t})=>e===void 0?"":Y`
          @container ${e} {
            ${t}
          }
        `}
`;function ti({slot:e,component:t,filter:r}){const a=Zn(e),o=r?a.filter(r):a;return o.length===0?null:n.jsx(t,{entries:o})}function ni({label:e,lead:t,children:r,tone:a="neutral",aligned:o=!1,...s}){const i=d.useContext(Jt);return n.jsxs(Ur,{$aligned:o,$grouped:o&&i,...s,children:[n.jsx(Wr,{children:e}),n.jsxs(Gr,{$tone:a,children:[t,r]})]})}const Jt=d.createContext(!1);function ri({children:e,...t}){return n.jsx(Hr,{...t,children:n.jsx(Jt.Provider,{value:!0,children:e})})}const Fe="1.5ch",Hr=h.div`
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  column-gap: ${Fe};
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
        column-gap: ${Fe};
        grid-column: 1 / -1;
        grid-template-columns: subgrid;
      `:Y`
      display: flex;
      flex-wrap: wrap;
      column-gap: ${Fe};
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
  color: ${({$tone:e})=>Xt[e]};
`;function Xr(e,t){return e.value!==void 0?n.jsx(K,{value:e.value(t)??null}):e.render(t)}function ai({columns:e,rows:t,sections:r,rowKey:a,caption:o,empty:s,rowDetail:i,className:l}){const u=r??(t?[{id:"",title:null,rows:[...t]}]:[]),p=u.reduce((c,j)=>c+j.rows.length,0),[f,v]=d.useState(null),M=Rn(f),w=zt(f);return n.jsxs(Yr,{className:l,children:[n.jsx(Kr,{ref:v,tabIndex:w,children:n.jsxs(Vr,{children:[n.jsx(qr,{children:o}),n.jsx("thead",{children:n.jsx("tr",{children:e.map(c=>n.jsx(Zr,{scope:"col",$align:c.align??"start",style:{width:c.width,minWidth:c.minWidth},children:c.header},c.key))})}),p===0&&s!==void 0&&n.jsx("tbody",{children:n.jsx("tr",{children:n.jsx(na,{colSpan:e.length,children:s})})}),u.map(c=>n.jsxs("tbody",{children:[c.title!==null&&c.title!==void 0&&n.jsx("tr",{children:n.jsx(Jr,{scope:"rowgroup",colSpan:e.length,children:c.title})}),c.rows.map(j=>{const S=a(j),x=i?.(j),y=x!=null&&x!==!1&&x!=="";return n.jsxs(d.Fragment,{children:[n.jsx(Qr,{$hasDetail:y,children:e.map(_=>n.jsx(ea,{as:_.rowHeader?"th":void 0,scope:_.rowHeader?"row":void 0,$align:_.align??"start",children:Xr(_,j)},_.key))}),y?n.jsx("tr",{children:n.jsx(ta,{colSpan:e.length,children:x})}):null]},S)})]},c.id))]})}),n.jsx(Qe,{$position:"left",$visible:M.left}),n.jsx(Qe,{$position:"right",$visible:M.right})]})}const Yr=h.div`
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
`;function ra(e){const t=e.reason;switch(t){case"beyond-horizon":return e.resolvesByWaiting?"NOT YET COMPUTED":"CANNOT MODEL";case"under-physics":case"model-inapplicable":case"contested":case"insufficient-history":return"CANNOT MODEL";case"frame-unavailable":return"FRAME UNAVAILABLE";case"input-absent":return null;default:return t}}function oi({declined:e,layout:t="inline"}){return n.jsx(re,{text:e.note,focusable:!0,children:n.jsx(Pt,{role:"status",layout:t,children:ra(e)??"NO DATA"})})}function si({label:e,children:t,"aria-label":r,className:a,variant:o="popover",panelHeight:s="cap",chevron:i=!0,asButton:l=!1,buttonSize:u="md",defaultOpen:p=!1}){const[f,v]=d.useState(p),M=d.useId(),w=d.useRef(null),[c,j]=d.useState(null),S=zt(c),x=o==="inline"&&i,y=typeof e=="function"?e(f):e,_={ref:w,type:"button","aria-expanded":f,"aria-controls":M,"aria-label":r,onClick:()=>v(g=>!g)},$=n.jsxs(n.Fragment,{children:[y,x&&n.jsx(ia,{$open:f,children:n.jsx(In,{size:"var(--icon-size-control)"})})]});return n.jsxs(aa,{className:a,$variant:o,onKeyDown:g=>{g.key==="Escape"&&f&&(v(!1),w.current?.focus())},children:[l?n.jsx(sa,{..._,variant:"ghost",size:u,$inline:o==="inline",children:$}):n.jsx(oa,{..._,$variant:o,$align:o==="inline"&&!i?"end":"between",children:$}),f&&n.jsx(la,{ref:j,id:M,role:"group",tabIndex:S,$variant:o,$panelHeight:s,children:t})]})}const aa=h.div`
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
`,sa=h(se)`
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
`;function ii({space:e,...t}){return n.jsx(ca,{$space:e,...t})}const ca=h.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${be[e]} 0`:"0"};
`,da=160,ua=24,pa="...";function li({children:e,limit:t=da,subject:r,className:a}){const[o,s]=d.useState(!1),i=d.useId(),l=fa(e,t);if(l===void 0)return n.jsx(n.Fragment,{children:e});const u=o?"Show less":"Show more";return n.jsxs(ha,{className:a,children:[n.jsx("span",{id:i,children:o?e:`${l}${pa}`})," ",n.jsx(ma,{type:"button","data-expandable-toggle":"","aria-controls":i,"aria-expanded":o,"aria-label":r===void 0?void 0:`${u} of ${r}`,onClick:()=>s(p=>!p),children:u})]})}function fa(e,t){if(e.length<=t+ua)return;const r=e.lastIndexOf(" ",t);return r<=0?e.slice(0,t):e.slice(0,r)}const ha=h.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,ma=h(Sn)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function ci(e,t){const r=t.map(s=>s==null?null:Xn(e,s.index)),a=r.length>0&&r.every(s=>s?.currency==="exact"),o=r.reduce((s,i)=>i?.currency!=="held"||i.asOfUt===null?s:s===null?i.asOfUt:Math.min(s,i.asOfUt),null);return s=>{const i=a?Yn(s):s;return o===null?i:{state:"held",value:i,asOfUt:ve("ut",o),grade:"held",reckoning:{status:"none"}}}}function ga({anchor:e,style:t,children:r,...a}){const[o,s]=d.useState(null),[i,l]=d.useState(null),u=d.useRef(e);u.current=e;const p=d.useCallback(()=>{if(!o)return;const f=u.current,v=typeof f=="function"?f():f;if(!v)return;const M=o.getBoundingClientRect(),w=br(v,{w:M.width,h:M.height},{w:window.innerWidth,h:window.innerHeight});l(c=>c&&c.left===w.left&&c.top===w.top?c:w)},[o]);return d.useLayoutEffect(()=>{p()}),d.useLayoutEffect(()=>{if(!o)return;const f=typeof ResizeObserver>"u"?null:new ResizeObserver(p);return f?.observe(o),window.addEventListener("resize",p),window.addEventListener("scroll",p,!0),()=>{f?.disconnect(),window.removeEventListener("resize",p),window.removeEventListener("scroll",p,!0)}},[o,p]),typeof document>"u"?null:sr.createPortal(n.jsx(xa,{ref:s,style:{...t,left:i?.left??0,top:i?.top??0,visibility:i===null?"hidden":t?.visibility},...a,children:r}),document.body)}const xa=h.div`
  position: fixed;
  z-index: var(--z-dropdown);
`,va=vn`
  from { transform: translateX(0); }
  to { transform: translateX(var(--flow-stride)); }
`,ba=h.g`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${va} 0.6s linear infinite;
  }
`;function di({stride:e,children:t}){return n.jsx(ba,{style:{"--flow-stride":`${e}px`},children:t})}const ht=12,wa=8,ya=120;function ui({trigger:e,"aria-label":t,children:r}){const[a,o]=d.useState(!1),s=d.useRef(null),i=d.useRef(null),l=d.useRef(null),u=d.useId(),p=d.useCallback(()=>{i.current!==null&&(clearTimeout(i.current),i.current=null)},[]),f=()=>{p(),o(!0)},v=()=>{p(),i.current=setTimeout(()=>o(!1),ya)},M=d.useCallback(()=>{p(),o(!1)},[p]);d.useEffect(()=>p,[p]),d.useEffect(()=>{if(!a)return;const c=j=>{j.key==="Escape"&&(j.stopPropagation(),M())};return document.addEventListener("keydown",c,!0),()=>document.removeEventListener("keydown",c,!0)},[a,M]);const w=()=>{const c=s.current?.getBoundingClientRect();if(!c)return null;const j=l.current?.offsetHeight??0,S=c.top-j-2*ht;return{x:c.left,y:S+ht>=wa?S:c.bottom}};return n.jsxs(n.Fragment,{children:[n.jsx(ja,{ref:s,type:"button","aria-label":t,"aria-describedby":a?u:void 0,onPointerEnter:f,onPointerLeave:v,onFocus:f,onBlur:M,children:e}),a&&n.jsx(ga,{anchor:w,onPointerEnter:p,onPointerLeave:v,children:n.jsx($a,{ref:l,id:u,role:"tooltip",children:r})})]})}const ja=h.button`
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
`;function J({gap:e,inset:t=!1,wrap:r=!1,children:a,...o}){return n.jsx(Ma,{$gap:e,$inset:t,$wrap:r,...o,children:a})}const Ma=h.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?be[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,_a=4,ka=80,mt=60,Ea=30,ze=24,Ra=32,gt=56,xt=ze;function Te(e,t,r){const{min:a,max:o,step:s}=t,i=e+r*s,l=Math.min(o,Math.max(a,i));if(!Number.isFinite(a))return l;const u=a+Math.round((l-a)/s)*s;return Math.min(o,Math.max(a,u))}function Ia(e){const{value:t,min:r,max:a,step:o,orientation:s="horizontal",onChange:i,format:l,"aria-label":u,label:p=u,disabled:f=!1,width:v,height:M}=e,w=s==="vertical",c=Math.max(ze,v??(w?xt:gt)),j=Math.max(ze,M??(w?gt:xt)),S=e.mode==="rate",x=r??Number.NEGATIVE_INFINITY,y=a??Number.POSITIVE_INFINITY,_={min:x,max:y,step:o},$=d.useRef(null),g=d.useRef(t);g.current=t;const R=d.useRef(i);R.current=i;const U=(e.mode==="rate"?e.stepsPerSecond:void 0)??Ea,[E,D]=d.useState(0),z=l?l(t):String(Math.round(t)),O=y>x&&Number.isFinite(y-x)?(t-x)/(y-x):.5,Z=k=>{f||k!==t&&i(k)};d.useEffect(()=>{if(!S||E===0||f)return;const k=setInterval(()=>{const I=Math.max(x,Math.min(y,g.current+E*U*o*(mt/1e3)));I!==g.current&&R.current(I)},mt);return()=>clearInterval(k)},[S,E,f,o,U,x,y]);const H=k=>{if(f)return;let I=null;switch(k.key){case"ArrowRight":case"ArrowUp":I=Te(t,_,1);break;case"ArrowLeft":case"ArrowDown":I=Te(t,_,-1);break;case"Home":if(!Number.isFinite(x))return;I=x;break;case"End":if(!Number.isFinite(y))return;I=y;break;default:return}k.preventDefault(),Z(I)},m=k=>s==="vertical"?k.clientY:k.clientX,T=k=>{f||($.current={start:m(k),startValue:t},k.currentTarget.setPointerCapture(k.pointerId))},P=k=>{if(f||!$.current)return;const I=s==="vertical"?$.current.start-m(k):m(k)-$.current.start;if(S){const F=I/ka;D(Math.max(-1,Math.min(1,F)));return}const G=I/_a;Z(Te($.current.startValue,_,G))},C=k=>{$.current&&($.current=null,D(0),k.currentTarget.hasPointerCapture(k.pointerId)&&k.currentTarget.releasePointerCapture(k.pointerId))};return n.jsxs(Sa,{children:[p!==!1&&n.jsx(Ta,{"aria-hidden":"true",children:p}),n.jsxs(Aa,{role:"slider","aria-label":u,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":r,"aria-valuemax":a,"aria-valuetext":z,"aria-disabled":f||void 0,tabIndex:f?-1:0,$orientation:s,$disabled:f,$width:c,$height:j,$compact:(w?c:j)<Ra,onKeyDown:H,onPointerDown:T,onPointerMove:P,onPointerUp:C,onPointerCancel:C,children:[n.jsx(Ca,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-O)*100}%)`}:{transform:`translateX(${(.5-O)*100}%)`},"aria-hidden":"true"}),n.jsx(La,{$orientation:s,"aria-hidden":"true"}),n.jsx(Na,{"aria-hidden":"true",children:z})]})]})}const Sa=h.div`
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
`;function pi({lock:e}){const t=Kn(e)?Pa(e):e,r=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return n.jsx(re,{text:r,focusable:!0,children:n.jsxs(Fa,{role:"status","aria-label":r,children:[n.jsx(Tn,{size:"1.2em"}),n.jsx(za,{children:Da(t)})]})})}function Pa(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...ir(t,Jn),locks:t}}function Da(e){const t=[...new Set(e.locks.flatMap(r=>r.missing.map(a=>a.name)))];return t.length>0?t.join(", "):e.reason}const Fa=h.span`
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
`,vt=1.4,bt=1.7,Oa="var(--icon-size-standalone)",Ba=1.8,$e="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",wt="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",yt="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",jt="M7 4.5V19.5M17 4.5V19.5",ae=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,Qt={prograde:{colour:"prograde",paths:[$e,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[$e,ae(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",ae(12,11)]},radialOut:{colour:"radial",paths:[wt,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[wt,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",ae(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",ae(12,12)]},relativePlus:{colour:"target",paths:[$e,yt],dot:[12,12]},relativeMinus:{colour:"target",paths:[$e,yt,ae(12,12)]},parallelPlus:{colour:"target",paths:[jt],dot:[12,12]},parallelMinus:{colour:"target",paths:[jt,ae(12,12)]}},fi=Object.keys(Qt);function $t({shape:e,colour:t,strokeWidth:r,dotRadius:a}){return n.jsxs("g",{fill:"none",stroke:t,strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(o=>n.jsx("path",{d:o},o)),e.dot&&n.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:a,fill:t,stroke:"none"})]})}function V(e,t){const r=Qt[e],a=`var(--color-marker-${r.colour})`,o=d.forwardRef(({size:s=Oa,strokeWidth:i=Ba,label:l,style:u,...p},f)=>{const v={ref:f,xmlns:"http://www.w3.org/2000/svg",...typeof s=="number"?{width:s,height:s,style:u}:{style:{width:s,height:s,...u}},viewBox:"0 0 24 24","data-marker":e},M=n.jsxs(n.Fragment,{children:[n.jsx($t,{shape:r,colour:"currentColor",strokeWidth:i+vt,dotRadius:bt+vt/2}),n.jsx($t,{shape:r,colour:a,strokeWidth:i,dotRadius:bt})]});return l?n.jsx("svg",{...v,role:"img","aria-label":l,...p,children:M}):n.jsx("svg",{...v,"aria-hidden":"true",...p,children:M})});return o.displayName=t,o}const en=V("prograde","ProgradeIcon"),Ha=V("retrograde","RetrogradeIcon"),tn=V("normal","NormalIcon"),Ua=V("antiNormal","AntiNormalIcon"),Wa=V("radialOut","RadialOutIcon"),nn=V("radialIn","RadialInIcon"),Ga=V("maneuver","ManeuverIcon"),Xa=V("target","TargetIcon"),Ya=V("antiTarget","AntiTargetIcon"),Ka=V("relativePlus","RelativePlusIcon"),Va=V("relativeMinus","RelativeMinusIcon"),qa=V("parallelPlus","ParallelPlusIcon"),Za=V("parallelMinus","ParallelMinusIcon"),hi=en,mi=nn,gi=tn,xi={prograde:en,retrograde:Ha,normal:tn,antiNormal:Ua,radialOut:Wa,radialIn:nn,maneuver:Ga,target:Xa,antiTarget:Ya,relativePlus:Ka,relativeMinus:Va,parallelPlus:qa,parallelMinus:Za};function rn(e){const{year:t,day:r,hour:a,minute:o}=Ge(),s=Number.isFinite(e)?Math.max(0,e):0,i=Math.floor(s/t)+1,l=s%t,u=Math.floor(l/r)+1,p=l%r;return{year:i,day:u,hour:Math.floor(p/a),minute:Math.floor(p%a/o),second:Math.floor(p%o)}}const Ja={year:1,day:1,hour:0,minute:0,second:0};function Qa(e){const{year:t,day:r,hour:a,minute:o}=Ge();return(e.year-1)*t+(e.day-1)*r+e.hour*a+e.minute*o+e.second}function Me(e){return Qn(ve("s",e))}function eo({value:e,onChange:t,label:r,disabled:a,steps:o}){const s=d.useId(),i=`${s}-absent`,l=e!==null&&Number.isFinite(e)?e:null,u=l===null?null:rn(l),p=Ge(),f=o??[p.minute,10*p.minute,p.hour,p.day],[v,M]=d.useState(null),w=(c,j,S,x)=>n.jsxs(te,{gap:"caption",children:[n.jsx(He,{htmlFor:`${s}-${c}`,children:j}),n.jsx(Ue,{id:`${s}-${c}`,type:"number",inputMode:"numeric","aria-label":`${r} ${j}`,"aria-describedby":u===null?i:void 0,min:S,step:1,style:{width:x},disabled:a,placeholder:u===null?ie:void 0,value:v?.key===c?v.text:u===null?"":String(u[c]),onBlur:()=>M(null),onChange:y=>{const _=y.target.value;if(M({key:c,text:_}),_.trim()==="")return;const $=Number(_);if(!Number.isFinite($))return;const g=Math.max(S,Math.round($));t(Qa({...u??Ja,[c]:g}))}})]},c);return n.jsxs(te,{gap:"related-dense",role:"group","aria-label":r,children:[n.jsxs(et,{gap:"related-dense",wrap:!0,justify:"start",children:[w("year","YEAR",1,"5rem"),w("day","DAY",1,"5rem"),w("hour","HR",0,"4rem"),w("minute","MIN",0,"4rem"),w("second","SEC",0,"4rem")]}),u===null&&n.jsx(le,{id:i,level:"muted",size:"sm",children:`${ie} no ${r.toLowerCase()} to show. Type one to state it.`}),f.length===0?null:n.jsxs(et,{gap:"related-packed",wrap:!0,justify:"start",children:[n.jsx(le,{level:"faint",size:"sm",children:"NUDGE"}),f.map(c=>n.jsx(se,{variant:"ghost",size:"sm",disabled:a||l===null,"aria-label":`${r} earlier by ${Me(c)}`,onClick:()=>l!==null&&t(l-c),children:`-${Me(c)}`},`minus-${c}`)),f.map(c=>n.jsx(se,{variant:"ghost",size:"sm",disabled:a||l===null,"aria-label":`${r} later by ${Me(c)}`,onClick:()=>l!==null&&t(l+c),children:`+${Me(c)}`},`plus-${c}`))]})]})}const to=h.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function no({observed:e,modelled:t,write:r}){if(t==null)return null;if(r===void 0){const a=t;return De(e,a,An())?n.jsx(Mt,{children:n.jsx(K,{value:a})}):null}return De(e,t,Cn(r))?n.jsx(Mt,{children:r(t)}):null}function Mt({children:e}){return n.jsx(to,{"data-modelled-alongside":"",children:n.jsx(We,{"data-held":"",kind:"modelled",caption:Ot,children:e})})}function vi({value:e}){return n.jsxs(n.Fragment,{children:[n.jsx(K,{value:e}),n.jsx(no,{observed:e.value,modelled:Ln(e)})]})}function bi({panZoom:e,label:t,style:r,onMouseMove:a,children:o}){const{style:s,ref:i,...l}=e.viewportProps;return n.jsxs(ro,{...l,ref:i,onMouseMove:a,"aria-label":t,style:{...s,...r},children:[o,n.jsx(ao,{role:"status",children:e.hint!==null&&n.jsx(oo,{children:e.hint})})]})}const ro=h.div`
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
`;function wi({filled:e,of:t,tone:r="info",label:a}){const o=`${e} of ${t}`;return n.jsx(so,{role:"img","aria-label":a===void 0?o:`${a}: ${o}`,"data-pips":"",children:Array.from({length:t},(s,i)=>n.jsx(io,{$colour:er[r],$filled:i<e},i))})}const so=h.span`
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
`;function yi({id:e,label:t,value:r,options:a,onChange:o,hint:s}){const i=a.findIndex(l=>lr(l.choice,r));return n.jsxs(Ft,{children:[n.jsx(He,{htmlFor:e,children:t}),n.jsxs(Nn,{id:e,value:i===-1?"":String(i),onChange:l=>{const u=a[Number(l.target.value)];u!==void 0&&o(u.choice)},children:[i===-1&&n.jsx("option",{value:"",disabled:!0}),a.map((l,u)=>n.jsx("option",{value:u,children:l.label},`${l.choice.kind}-${l.choice.bodyIndex??"none"}`))]}),s!==void 0&&n.jsx(Pn,{children:s})]})}const lo=h.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`;function ji({job:e,transfer:t}){const r=he(e.fromPartIds,t.titleOf),a=he(e.toPartIds,t.titleOf),o=`${r} → ${a}`;return n.jsxs(te,{children:[n.jsxs(J,{children:[n.jsx(lo,{style:co,children:o}),t.held&&n.jsx(Bt,{tone:"info",children:"held"})]}),n.jsxs(J,{wrap:!0,children:[n.jsxs(J,{wrap:!0,children:[n.jsx(qe,{children:"Moved"}),n.jsxs(le,{size:"sm",children:[n.jsx(K,{value:e.moved,decimals:1}),e.requested!=null?n.jsxs(n.Fragment,{children:[" / ",n.jsx(K,{value:e.requested,decimals:1})]}):" / until full"]})]}),n.jsxs(J,{children:[n.jsx(qe,{children:"Rate"}),n.jsx(le,{size:"sm",children:n.jsx(K,{value:e.rate??ve("units/s",0),decimals:1})})]})]}),n.jsx(J,{children:n.jsx(se,{size:"sm",variant:"ghost",command:t.stop.with({all:!1,transferId:e.id},{label:`Stop ${e.resource} transfer, ${o}`}),children:"Stop"})})]})}const co={fontSize:"var(--font-size-value)",color:"var(--color-text-primary)",flex:1,minWidth:0},uo=[{role:null,label:"Off"},{role:"from",label:"From"},{role:"to",label:"To"}];function po({tank:e,transfer:t,state:r}){const{pick:a,setRole:o}=r,s=a.from.includes(e.partId)?"from":a.to.includes(e.partId)?"to":null,i=e.flowMode===ot.Out?"out only":e.flowMode===ot.In?"in only":null;return n.jsxs("fieldset",{style:an,children:[n.jsx("legend",{style:mo,children:e.title}),n.jsxs(te,{children:[n.jsxs(J,{children:[n.jsxs(le,{size:"sm",children:[n.jsx(K,{value:e.amount,decimals:1})," /"," ",n.jsx(K,{value:e.capacity,decimals:0})]}),i&&n.jsx(yn,{label:i}),e.locked&&n.jsx(Bt,{tone:"warn",children:"Locked"})]}),n.jsx(qt,{equalWidth:!1,children:uo.map(({role:l,label:u})=>{const p=l===null?void 0:t.blockReason(e,l,a);return n.jsx(Pe,{size:"sm",pressed:s===l,disabled:p!==void 0,disabledReason:p,onClick:()=>o(e.partId,l),children:u},u)})})]})]})}function $i({transfer:e,state:t,form:r,onStarted:a,onCancel:o}){const[s,i]=d.useState(!0),[l,u]=d.useState(""),p=d.useId(),{pick:f}=t,v=e.tanks(f.resource),M=s?null:Number(l),w=cr(f,M),c=n.jsx(te,{children:v.map(g=>n.jsx(po,{tank:g,transfer:e,state:t},g.partId))}),j=e.running.some(g=>g.resource===f.resource&&g.fromPartIds.some(R=>f.from.includes(R))&&g.toPartIds.some(R=>f.to.includes(R)));d.useEffect(()=>{j&&a?.()},[j,a]);const S=g=>g.length>0?he(g,e.titleOf):"none",x=`${S(f.from)} → ${S(f.to)}`,y=`Transfer ${f.resource}, ${he(f.from,e.titleOf)} to ${he(f.to,e.titleOf)}`,_=n.jsxs(J,{children:[n.jsxs(qt,{equalWidth:!1,"aria-label":"Amount",children:[n.jsx(Pe,{size:"sm",pressed:s,onClick:()=>i(!0),children:"Until full"}),n.jsx(Pe,{size:"sm",pressed:!s,onClick:()=>i(!1),children:"Units"})]}),!s&&n.jsx(Ue,{"aria-label":"Amount in units",inputMode:"decimal",value:l,onChange:g=>u(g.target.value),style:vo})]}),$=n.jsx(se,{id:p,"aria-label":y,size:"sm",variant:"primary",unavailable:w,command:e.start.with(dr(f,M),{label:y}),children:"Transfer"});return r==="tray"?n.jsxs(J,{wrap:!0,style:fo,children:[n.jsx(re,{text:x,announce:!1,children:n.jsx("label",{htmlFor:p,style:ho,children:x})}),_,n.jsxs(J,{children:[o&&n.jsx(Dn,{type:"button","aria-label":"Cancel",onClick:o,children:n.jsx(Fn,{size:14})}),$]})]}):n.jsxs(te,{children:[c,n.jsxs(J,{wrap:!0,style:xo,children:[n.jsxs("fieldset",{style:an,children:[n.jsx("legend",{style:go,children:"Amount"}),_]}),n.jsxs(J,{children:[o&&n.jsx(se,{size:"sm",variant:"ghost",onClick:o,children:"Cancel"}),$]})]})]})}const fo={flexWrap:"wrap",width:"100%",columnGap:"var(--gap-related-compact)"},ho={flex:"1 1 0",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"var(--font-size-value)",color:"var(--color-text-primary)"},an={border:0,margin:0,padding:0,minWidth:0},mo={padding:0,fontSize:"var(--font-size-value)",color:"var(--color-text-primary)"},go={padding:0,fontSize:"var(--font-size-caption)",color:"var(--color-text-muted)"},xo={justifyContent:"space-between",flexWrap:"wrap"},vo={width:"6em"};function bo(e){if(e.command)return n.jsx(wo,{...e,command:e.command});const{command:t,unavailable:r,...a}=e;return n.jsx(on,{...a})}function wo({command:e,unavailable:t,children:r,onClick:a,...o}){const s=Dt({command:e,unavailable:t});return n.jsxs(n.Fragment,{children:[n.jsx(re,{text:s.tip,children:n.jsxs(on,{...o,...s.edge,as:"button",interactive:!0,onClick:i=>{s.inert||(s.control.press(!1),a?.(i))},children:[r,n.jsx(yo,{"aria-hidden":"true",children:s.word})]})}),n.jsx(Be,{visuallyHidden:!0,children:s.announce})]})}const yo=h.span`
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
`;function on({as:e,interactive:t=!1,selected:r=!1,wrap:a=!1,nested:o=!1,type:s,children:i,...l}){return n.jsx($o,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:r,$wrap:a,$nested:o,...l,children:i})}const sn=h.span`
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

  & > ${sn} {
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
  ${Yt("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}

  ${Ht}
`,Mi=Object.assign(bo,{Name:sn}),Mo=65,ln=38,_o=72,ko=_o-ln,cn=55,Oe=137.508,Eo=10,Ro=1.5,Io=64,So=60,To=241,Ao=Oe-Math.floor(Oe),me=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function dn(e,t){const r=Math.abs(e-t)%360;return r>180?360-r:r}const Co=me.map((e,t)=>{let r=1/0;for(let o=0;o<me.length;o++)o!==t&&(r=Math.min(r,dn(e.hue,me[o].hue)));const a=r/2;return Math.max(0,Math.min(Eo,a-Ro))}),Lo=me.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:Co[t]}));function No(e,t=me){return t.find(r=>r.aliases.some(a=>e.includes(a)))}function un(e){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function _t(e,t){return(e%t+t)%t}function Po(e){const r=un(`light:${e}`)/4294967295;return ln+r*ko}function Do(e){const t=No(e);if(!t)return;const r=t.aliases.length===1?cn:Po(e);return{hue:t.hue,lightness:r}}function Fo(e){return Lo.some(({centre:t,radius:r})=>dn(e,t)<r)}function zo(e){const t=un(e);let r=_t(t*Oe,360);const a=So+(t>>>8)%To+Ao;let o=0;for(;Fo(r)&&o<Io;)r=_t(r+a,360),o++;return r}function _i(e){const t=e.trim().toLowerCase(),r=Do(t),a=r?.hue??zo(t),o=r?.lightness??cn;return`hsl(${Math.round(a)}deg ${Mo}% ${Math.round(o)}%)`}function ki({selected:e,gap:t="caption",layout:r="stack",selectedLook:a="fill",children:o,...s}){return n.jsx(Oo,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:r,$look:a,...s,children:o})}const Oo=h.button`
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
  gap: ${({$gap:e})=>be[e]};
  width: 100%;
  text-align: left;
  padding: var(--inset-selectable-row);
  border-radius: ${Gt.regular};
  border: 1px solid
    ${({$selected:e,$look:t})=>e?t==="outline"?"var(--color-accent-fg)":"transparent":"var(--color-border-subtle)"};
  ${({$selected:e,$look:t})=>e?t==="outline"?"background: var(--color-surface-raised); color: inherit;":Yt("go"):"background: transparent; color: inherit;"}
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
`,Bo=d.forwardRef(function(t,r){return t.command?n.jsx(Ho,{...t,command:t.command,forwardedRef:r}):t.figure!==void 0?n.jsx(pn,{...t,forwardedRef:r}):n.jsx(fn,{ref:r,type:"range",...t})});function Ho({command:e,unavailable:t,forwardedRef:r,...a}){const o=zn({command:e,unavailable:t});return n.jsx(pn,{...a,forwardedRef:r,input:o,disabled:a.disabled})}function pn({forwardedRef:e,input:t,value:r,min:a,max:o,step:s,figure:i,expected:l,expectedCaption:u=Ot,lastSeen:p,lastSeenCaption:f="last reported",disabled:v,onChange:M,"aria-label":w,...c}){const[j,S]=d.useState(null);d.useEffect(()=>{if(j===null)return;const E=()=>S(null);return window.addEventListener("pointerup",E),window.addEventListener("pointercancel",E),()=>{window.removeEventListener("pointerup",E),window.removeEventListener("pointercancel",E)}},[j]);const[x,y]=d.useState(null),_=t?.control.isSent===!0;d.useEffect(()=>{_||y(null)},[_]);const $=j??x??r,g=Ar({commanded:$,expected:l,lastSeen:p,step:s}),R=E=>`calc(8px + ${(E-a)/(o-a||1)} * (100% - 16px))`,U=E=>{t&&!t.inert&&y(E),t?.send(E)};return n.jsxs("div",{style:Cr,children:[n.jsx(re,{text:t?.tip,children:n.jsxs("div",{style:Lr,children:[n.jsx(fn,{...c,...t?.edge,ref:e,type:"range",min:a,max:o,step:s,value:$??a,onPointerDown:()=>S($??a),onChange:E=>{const D=Number(E.target.value);j!==null?S(D):U(D),M?.(E)},onPointerUp:E=>U(Number(E.currentTarget.value)),disabled:v,"aria-label":w,style:Nr}),g.expected!==null&&n.jsx(ut,{kind:"modelled",caption:u,left:R(g.expected)}),g.lastSeen!==null&&n.jsx(ut,{kind:"held",caption:f,left:R(g.lastSeen)})]})}),n.jsxs("span",{style:{...Dr,position:"relative"},children:[$===null?ie:i($),t&&n.jsx(Uo,{"aria-hidden":"true",children:t.word})]}),n.jsx(Be,{visuallyHidden:!0,children:t?.announce??null})]})}const Uo=h.span`
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
`,fn=h.input`
  width: 100%;
  min-width: 0;
  margin: 0;
  background: none;
  accent-color: var(--color-accent-fg);
  cursor: pointer;

  ${ce}
  ${Ht}
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
  color: ${({$tone:e})=>Xt[e]};
`,Ko=h.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function Ei({slot:e}){const t=tr(e);return t.length===0?null:n.jsx(n.Fragment,{children:t.map(r=>n.jsx(Wo,{label:r.label,detail:r.detail,tone:r.tone??"neutral",children:n.jsx(Vo,{entry:r})},r.id))})}function Vo({entry:e}){if(e.value!==void 0)return n.jsx(K,{value:e.value});if(e.text===void 0)return n.jsx(nr,{});const t=On(e.held);return t===null?n.jsx(n.Fragment,{children:e.text}):n.jsx(We,{kind:t.kind,caption:t.caption,children:e.text})}const qo=12,oe=12,Zo=12,kt=52,B=10,Ae=4;function Jo(e,t,r){const a=i=>e.map(l=>Number.parseFloat(i.mark(l).replace(/[^\d.-]/g,""))),o=a(r(Ae)),s=i=>a(i).every((l,u)=>l===o[u]);if(s(t))return t;for(let i=0;i<Ae;i++){const l=r(i);if(s(l))return l}return r(Ae)}function Ri({labelSide:e="left",value:t,min:r,max:a,width:o=92,height:s=220,fillHeight:i=!1,tickStep:l,zones:u,markers:p,groundLine:f,seaLevel:v,format:M,"aria-label":w}){const c=d.useRef(null),[j,S]=d.useState(s);d.useEffect(()=>{if(!i)return;const b=c.current;if(!b)return;const L=()=>{const q=b.clientHeight;q>0&&S(q)};L();const A=new ResizeObserver(L);return A.observe(b),()=>A.disconnect()},[i]);const x=i?j:s,y=Ut(t),{shown:_,held:$,caption:g,band:R}=y,{anchor:U,tip:E}=Bn(g),D=_?.magnitude??Number.NaN,z=Number.isFinite(D)?_:null,O=r.magnitude,Z=a.magnitude,H=Z-O,m=Number.isFinite(D)?D:O,T=H>0?Math.max(O,Math.min(Z,m)):O,P=z!=null,C=it(a,{format:M}),k=z==null?ie:lt({magnitude:m,unit:z.unit},{format:C.rung}),I=b=>lt(b),G=[...(p??[]).flatMap(b=>b.label===void 0?[]:[b.bounds===void 0?`${b.label} ${I(b.value)}`:`${b.label} ${I(b.value)}, between ${I(b.bounds.lo)} and ${I(b.bounds.hi)}`]),...(u??[]).flatMap(b=>b.label===void 0?[]:[`${b.label} zone ${I(b.from.min(b.to))} to ${I(b.from.max(b.to))}`]),...f===void 0?[]:[`ground ${I(f)}`],...v===void 0?[]:[`sea level ${I(v)}`]],F=z==null||R===null?null:Vn(R,z.unit)??null,W=Math.max(0,x-oe-Zo),Q=b=>{if(!(H>0))return oe+W;const L=Math.max(0,Math.min(1,(b-O)/H));return oe+(1-L)*W},X=b=>Q(b.magnitude),ne=oe,Xe=oe+W,ee=e==="right",N=ee?o-kt-B:kt,de=ee?N+B+6:N-6,Ye=ee?"start":"end",Ke=(b,L)=>{const A=X(b),q=b.greaterThan(a)?-1:b.lessThan(r)?1:0,pe=N-4,ye=N+B+4,Ie=N+B/2;return n.jsxs("g",{"data-level":L?"sea":"ground",children:[n.jsx("line",{x1:pe,y1:A,x2:ye,y2:A,stroke:L?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:L?1.5:2,strokeDasharray:L?"3 2":void 0}),q!==0&&n.jsx("polygon",{"data-off-scale":"true",points:`${Ie-4},${A-q*2} ${Ie+4},${A-q*2} ${Ie},${A+q*4}`,fill:L?"var(--color-info-mark)":"var(--color-text-primary)"})]})},Ee=[],we=l?.magnitude??0;if(we>0&&H>0){const b=Math.ceil(O/we),L=Math.floor(Z/we+1e-9);for(let A=b;A<=L;A++)Ee.push(A===0?0:A*we)}const xn=Jo(Ee,C,b=>it(a,{format:M,decimals:b})),ue=Q(T),Re=b=>W>0?(oe+W-b)/W:0,Ve=F!==null&&De(Re(ue),[Re(X(F.lo)),Re(X(F.hi))],Hn())?F:null;return n.jsxs(Qo,{ref:c,...Gn(y),...U,...P?{role:"meter","aria-label":rt(w,g),...nt(g),"aria-valuenow":T,"aria-valuemin":O,"aria-valuemax":Z,"aria-valuetext":G.length===0?k:`${k}; ${G.join("; ")}`}:{role:"img","aria-label":rt(`${w}: ${k}`,g),...nt(g)},style:i?{height:"100%"}:void 0,children:[n.jsxs("svg",{width:o,height:x,viewBox:`0 0 ${o} ${x}`,"aria-hidden":"true",style:i?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[n.jsx("rect",{x:N,y:ne,width:B,height:W,rx:2,fill:"var(--color-surface-raised)"}),u?.map(b=>{const L=X(b.from.max(b.to)),A=X(b.from.min(b.to)),q=Math.max(0,A-L);return n.jsx("g",{children:n.jsx("rect",{x:N,y:L,width:B,height:q,fill:b.color??"var(--color-warn-mark)",opacity:.55})},`zone-${A}-${L}-${b.label??""}`)}),v!==void 0&&H>0&&Ke(v,!0),f!==void 0&&H>0&&Ke(f,!1),Ee.map(b=>{const L=Q(b),A=P&&Math.abs(L-Math.max(ne+4,Math.min(Xe-4,ue)))<qo;return n.jsxs("g",{children:[n.jsx("line",{x1:ee?N+B+4:N-4,y1:L,x2:ee?N+B:N,y2:L,stroke:"var(--color-border-subtle)",strokeWidth:1}),!A&&n.jsx("text",{x:de,y:L,textAnchor:Ye,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:xn.mark(b)})]},`tick-${b}`)}),p?.map(b=>{const{bounds:L}=b,A=X(b.value),q=b.color??"var(--color-accent-fg)";return n.jsxs("g",{"data-marker":b.label,children:[n.jsx("line",{x1:N,y1:A,x2:N+B,y2:A,stroke:q,strokeWidth:2,strokeDasharray:"2 2"}),n.jsx("polygon",{points:ee?`${N},${A} ${N-5},${A-3} ${N-5},${A+3}`:`${N+B},${A} ${N+B+5},${A-3} ${N+B+5},${A+3}`,fill:"none",stroke:q,strokeWidth:1.5}),L!==void 0&&["lo","hi"].map(pe=>{const ye=X(L[pe]);return n.jsx(tt,{end:pe,x1:N,y1:ye,x2:N+B,y2:ye},pe)})]},`marker-${A}-${b.label??""}`)}),Ve!==null&&["lo","hi"].map(b=>{const L=X(Ve[b]);return n.jsx(tt,{end:b,x1:N,y1:L,x2:N+B,y2:L},b)}),P&&n.jsxs(n.Fragment,{children:[n.jsx("line",{x1:N-6,y1:ue,x2:N+B+6,y2:ue,stroke:"var(--color-accent-fg)",strokeWidth:2}),n.jsxs("text",{x:ee?de+2:de-2,y:Math.max(ne+4,Math.min(Xe-4,ue)),textAnchor:Ye,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[C.mark(m),$&&n.jsx(Un,{size:5})]})]}),!P&&n.jsx(Wn,{x:ee?de+8:de-8,y:ne+W/2,size:11,children:ie}),C.symbol!==""&&n.jsx("text",{x:N+B/2,y:ne-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:C.symbol})]}),E]})}const Qo=h.div`
  display: block;
  max-width: 100%;
`,es=112;function ts(e,t){try{return ve(e,1).in(t).magnitude}catch{return Number.NaN}}function ns(e,t){let r=e;return t.map((a,o)=>{if(!Number.isFinite(a)||a===0)return 0;const s=o===t.length-1?r/a:Math.trunc(r/a);return r-=s*a,s})}function Ii({value:e,unit:t,onChange:r,label:a,rungs:o,range:s,rate:i,disabled:l}){const u=d.useId(),{shown:p,held:f,caption:v}=Ut(e),M=f?n.jsx(We,{caption:v,children:a}):a,w=s,c=p?p.magnitude:Number.NaN,[j,S]=d.useState({}),x=g=>j[g]??null,y=(g,R)=>S(U=>({...U,[g]:R})),_=i?n.jsxs(te,{gap:"related-packed",children:[n.jsx(Ia,{mode:"rate","aria-label":`${a} rate`,value:c,step:i.step,stepsPerSecond:i.stepsPerSecond,disabled:l||!Number.isFinite(c),format:Ce(t)?as:void 0,width:Ce(t)?es:void 0,onChange:g=>r(fe(t,g))}),n.jsx(le,{level:"faint",size:"sm",children:`${i.step} ${rs(t)} / notch`})]}):null;if(Ce(t))return n.jsxs(Ne,{children:[n.jsx(Rt,{"aria-hidden":"true",children:M}),n.jsxs(te,{gap:"related-dense",children:[n.jsx(eo,{label:f&&v!==null?`${a}, ${v}`:a,value:Number.isFinite(c)?c:null,disabled:l,steps:i?[]:void 0,onChange:g=>r(fe(t,g))}),_]})]});if(o&&o.length>0){const g=o.map(E=>ts(String(E),t)),R=ns(c,g),U=(E,D)=>{const z=Le(D);if(z===void 0){y(E,{text:D,against:R[E]});return}const O=R.map(H=>Number.isFinite(H)?H:0);O[E]=z;const Z=O.reduce((H,m,T)=>Number.isFinite(g[T])?H+m*g[T]:H,0);y(E,{text:D,against:z}),r(fe(t,Z))};return n.jsxs(Ne,{children:[n.jsx(Rt,{id:`${u}-label`,children:M}),n.jsx(ls,{role:"group","aria-labelledby":`${u}-label`,children:o.map((E,D)=>n.jsxs(cs,{children:[n.jsx(ds,{type:"number",disabled:l,"aria-label":`${a} ${String(E)}`,value:Et(x(D),R[D]),onChange:z=>U(D,z.target.value)}),n.jsx(It,{"aria-hidden":"true",children:String(E)})]},String(E)))}),_]})}const $=g=>{const R=Le(g);y(0,{text:g,against:R??c}),R!==void 0&&r(fe(t,R))};return n.jsxs(Ne,{children:[n.jsx(ss,{htmlFor:u,children:M}),n.jsxs(is,{children:[n.jsx(mn,{id:u,type:"number",disabled:l,min:w?.min,max:w?.max,step:w?.step,value:Et(x(0),c),onChange:g=>$(g.target.value)}),n.jsx(It,{"aria-hidden":"true",children:t})]}),w?n.jsx(Bo,{disabled:l,"aria-label":`${a} slider`,min:w.min,max:w.max,step:w.step??(w.max-w.min)/100,value:Number.isFinite(c)?c:w.min,onChange:g=>r(fe(t,Le(g.target.value)??w.min))}):null,_]})}function Et(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(os(t)):""}function rs(e){return Wt(e)??e}function Ce(e){return Wt(e)==="s"}function as(e){if(!Number.isFinite(e))return"";const{day:t,hour:r,minute:a,second:o}=rn(e),s=i=>String(i).padStart(2,"0");return`D${t} ${s(r)}:${s(a)}:${s(o)}`}function Le(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function os(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const Ne=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,hn=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,ss=h.label`
  ${hn}
`,Rt=h.span`
  ${hn}
`,is=h.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,mn=h.input`
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
`,It=h.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,ls=h.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,cs=h.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,ds=h(mn)`
  width: 4.5em;
`,us=200;function St(e={}){const t=e.quietMs??us;let r=null,a=Number.NEGATIVE_INFINITY,o=!0;return{wheel(s,i){return(r===null||s-a>t)&&(r=i&&o?"diagram":"page"),a=s,r},pageScrolled(){o=!1},pointerMovedInside(){o=!0},yieldToPage(){r="page"},get owner(){return r}}}const ps=16,fs=400,Tt=120,hs=Math.log(1.15)/100,ms=.01;function gs(e,t,r){const a=t===1?e*ps:t===2?e*fs:e,o=Math.max(-Tt,Math.min(Tt,a)),s=r&&Math.abs(a)<40?ms:hs;return Math.exp(-o*s)}function xs(e,t,r={}){const{quietMs:a}=r,o=d.useRef(St({quietMs:a}));d.useEffect(()=>{o.current=St({quietMs:a})},[a]);const[s,i]=d.useState(null);d.useEffect(()=>{e.current!==s&&i(e.current)}),d.useEffect(()=>{if(!s||!t)return;const l=c=>c instanceof Node&&s.contains(c);let u=null;const p=(c,j)=>u!==null&&(Math.abs(c-u.x)>=1||Math.abs(j-u.y)>=1),f=c=>{u={x:c.clientX,y:c.clientY},!(c.ctrlKey||c.metaKey)&&o.current.wheel(performance.now(),l(c.target))},v=c=>{const j=p(c.clientX,c.clientY);u={x:c.clientX,y:c.clientY},j&&l(c.target)&&o.current.pointerMovedInside()},M=c=>{const j=c.target;(j===document||j instanceof Node&&j.contains(s))&&o.current.pageScrolled()},w=c=>{const j=c.ctrlKey||c.metaKey;if(!j&&o.current.owner!=="diagram")return;const S=s.getBoundingClientRect(),x=gs(c.deltaY,c.deltaMode,j);if(t(x,c.clientX-S.left,c.clientY-S.top)===!1&&!j){o.current.yieldToPage();return}c.preventDefault()};return window.addEventListener("wheel",f,{capture:!0,passive:!0}),window.addEventListener("pointermove",v,{capture:!0,passive:!0}),window.addEventListener("scroll",M,{capture:!0,passive:!0}),s.addEventListener("wheel",w,{passive:!1}),()=>{window.removeEventListener("wheel",f,{capture:!0}),window.removeEventListener("pointermove",v,{capture:!0}),window.removeEventListener("scroll",M,{capture:!0}),s.removeEventListener("wheel",w)}},[s,t])}const vs="Arrow keys pan, + and - zoom, 0 resets",bs=.15,At=1.25,ws={zoom:1,panX:0,panY:0};function Si(e={}){const{home:t=ws,zoomAbout:r="pointer",panThreshold:a=3,enabled:o=!0}=e,[s,i]=d.useState(t),l=d.useRef({camera:s,options:e,home:t});l.current={camera:s,options:e,home:t};const u=d.useRef(null),p=e.elementRef??u,f=d.useCallback(()=>{const m=p.current?.getBoundingClientRect();return{w:m?.width??0,h:m?.height??0}},[]),v=d.useCallback(m=>{const{constrain:T}=l.current.options,P=f(),C=T&&P.w>0&&P.h>0?T(m,P):m;return l.current.camera=C,i(C),C},[f]),M=d.useCallback(m=>{v(typeof m=="function"?m(l.current.camera):m)},[v]),w=d.useCallback((m,T,P)=>{const C=l.current.camera,{minZoom:k=.1,maxZoom:I=50}=l.current.options,G=typeof k=="function"?k(C):k,F=Math.max(Math.min(G,C.zoom),Math.min(Math.max(I,C.zoom),C.zoom*m));if(F===C.zoom)return!1;const{w:W,h:Q}=f();if(r==="centre")v({...C,zoom:F});else{const X=(T-W/2)/C.zoom+C.panX,ne=(P-Q/2)/C.zoom+C.panY;v({zoom:F,panX:X-(T-W/2)/F,panY:ne-(P-Q/2)/F})}return l.current.options.onManualMove?.("zoom"),!0},[v,f,r]);xs(p,d.useMemo(()=>o?w:null,[o,w]));const c=d.useCallback(()=>{l.current.options.onManualMove?.("reset"),v(l.current.home)},[v]),j=d.useCallback(m=>{const{w:T,h:P}=f();w(m,T/2,P/2)},[f,w]),[S,x]=d.useState(null),y=d.useRef(new Map),_=d.useRef(null),$=d.useRef(null),g=d.useRef(null),R=d.useRef(!1),[U,E]=d.useState(!1),D=d.useCallback(m=>{if(l.current.options.enabled!==!1&&!(m.pointerType==="mouse"&&m.button!==0)){if(y.current.set(m.pointerId,{x:m.clientX,y:m.clientY}),y.current.size===2){const[T,P]=[...y.current.values()];_.current=null,$.current=Math.hypot(T.x-P.x,T.y-P.y);return}R.current=!1,g.current={x:m.clientX,y:m.clientY},_.current={x:m.clientX,y:m.clientY},$.current=null}},[]),z=d.useCallback(m=>{if(!y.current.has(m.pointerId))return;if(m.pointerType==="mouse"&&m.buttons===0){y.current.delete(m.pointerId),y.current.size===0&&(_.current=null,g.current=null,$.current=null,E(!1));return}if(y.current.set(m.pointerId,{x:m.clientX,y:m.clientY}),y.current.size>=2){const[G,F]=[...y.current.values()],W=Math.hypot(G.x-F.x,G.y-F.y),Q=$.current;if($.current=W,Q===null||Q===0)return;const X=p.current?.getBoundingClientRect();R.current=!0,w(W/Q,(G.x+F.x)/2-(X?.left??0),(G.y+F.y)/2-(X?.top??0));return}const T=g.current,P=_.current;if(!T||!P||!R.current&&Math.hypot(m.clientX-T.x,m.clientY-T.y)<a)return;R.current||(R.current=!0,E(!0),m.currentTarget.setPointerCapture?.(m.pointerId));const C=m.clientX-P.x,k=m.clientY-P.y;_.current={x:m.clientX,y:m.clientY};const I=l.current.camera;l.current.options.onManualMove?.("pan"),v({...I,panX:I.panX-C/I.zoom,panY:I.panY-k/I.zoom})},[v,a,w]),O=d.useCallback(m=>{if(y.current.delete(m.pointerId),m.currentTarget.releasePointerCapture?.(m.pointerId),y.current.size===1){const[T]=[...y.current.values()];_.current={...T},g.current={...T},$.current=null;return}y.current.size===0&&(_.current=null,g.current=null,$.current=null,E(!1))},[]),Z=d.useCallback(m=>{if(l.current.options.enabled===!1||m.target!==m.currentTarget||m.ctrlKey||m.metaKey||m.altKey)return;const T=l.current.camera,{w:P,h:C}=f(),k=(I,G)=>{const F=(I==="panX"?P:C)/T.zoom;l.current.options.onManualMove?.("pan"),v({...T,[I]:T[I]+G*F*bs})};switch(m.key){case"ArrowLeft":k("panX",-1);break;case"ArrowRight":k("panX",1);break;case"ArrowUp":k("panY",-1);break;case"ArrowDown":k("panY",1);break;case"+":case"=":j(At);break;case"-":case"_":j(1/At);break;case"0":c();break;default:return}m.preventDefault()},[v,c,f,j]);return{camera:s,setCamera:M,reset:c,zoomBy:j,viewportProps:{ref:p,tabIndex:0,role:"group",onPointerDown:D,onPointerMove:z,onPointerUp:O,onPointerCancel:O,onFocus:m=>{m.target===m.currentTarget&&m.currentTarget.matches(":focus-visible")&&x(vs)},onBlur:()=>x(null),onKeyDown:Z,style:{touchAction:"none",cursor:U?"grabbing":"grab"}},didPan:()=>R.current,isDragging:U,hint:S}}const Ct="(prefers-reduced-motion: reduce)";function Ti(){const[e,t]=d.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(Ct).matches);return d.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const r=window.matchMedia(Ct),a=()=>t(r.matches);return a(),r.addEventListener("change",a),()=>r.removeEventListener("change",a)},[]),e}const gn=d.createContext(null);function Ai({widget:e,scope:t,children:r}){const a=d.useMemo(()=>({widget:e,scope:t}),[e,t]);return n.jsx(gn.Provider,{value:a,children:r})}function Ci(e){const t=d.useContext(gn);if(!(!t||t.widget!==e))return t.scope}function Li(e){if(e.length===0)return[];const t=[[e[0]]];for(let r=1;r<e.length;r++)$s(e[r-1],e[r])?t.push([e[r]]):t[t.length-1].push(e[r]);return t}function Ni(e,t,r,a){if(e.length===0||!(t>0))return[];const o=[e[0].x];let s=o[0],i=o[0];for(let l=1;l<e.length;l++){const u=o[l-1],p=u+js(e[l].x-u,t);o.push(p),p<s&&(s=p),p>i&&(i=p)}return ys(s,i,r,a,t).map(l=>e.map((u,p)=>({...u,x:o[p]+l})))}function ys(e,t,r,a,o){if(!(o>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((r-t)/o),i=Math.floor((a-e)/o),l=[];for(let u=s;u<=i;u++)l.push(u*o+0);return l}function js(e,t){const r=t/2;return((e+r)%t+t)%t-r}function $s(e,t){const r=Lt(e),a=Lt(t),o=_s(r,a);if(o===0)return!1;const s=Nt(Ms(r,a));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=o)return!1;const l=[0,0,e.lat+t.lat>=0?1:-1],u=Nt(ks(l,s));if(u===null)return!1;const p=ge(r,a);return ge(r,u)>p&&ge(a,u)>p}function Lt({lat:e,lon:t}){const r=e*Math.PI/180,a=t*Math.PI/180,o=Math.cos(r);return[o*Math.cos(a),o*Math.sin(a),Math.sin(r)]}function ge(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Ms(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function _s(e,t){return Math.acos(Math.max(-1,Math.min(1,ge(e,t))))}function ks(e,t){const r=ge(e,t);return[e[0]-r*t[0],e[1]-r*t[1],e[2]-r*t[2]]}function Nt(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{Wo as $,Ws as A,Ys as B,Vs as C,ni as D,li as E,ga as F,Wa as G,ui as H,wr as I,Ia as J,yi as K,pi as L,Qs as M,tn as N,vi as O,bi as P,Va as Q,nn as R,Ka as S,ji as T,$i as U,Ha as V,Mi as W,sn as X,ki as Y,Zs as Z,Bo as _,Ua as a,Ei as a0,hi as a1,Ri as a2,Xa as a3,lo as a4,Ii as a5,Ai as a6,qs as a7,br as a8,Ar as a9,St as aa,ra as ab,ci as ac,ys as ad,_i as ae,Li as af,Si as ag,Ti as ah,Js as ai,xs as aj,Ci as ak,Qa as al,gs as am,Ni as an,Ya as b,Gs as c,Xs as d,gi as e,Ks as f,qt as g,ei as h,ti as i,ri as j,ai as k,oi as l,si as m,ii as n,di as o,mi as p,J as q,xi as r,fi as s,Ga as t,eo as u,no as v,Za as w,qa as x,wi as y,en as z};
