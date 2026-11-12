import{j as n}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./ext-react-C0MU9AHG.js";import h,{css as V,keyframes as kn}from"./ext-styled-components-DAuodqsN.js";import{t as En,e as Rn,b as tt,g as In,h as Be}from"./TinyEssentials-uwQY2B7H.js";import{E as Wt,c1 as Ye,af as te,aa as oe,c0 as ve,ah as Ut,n as Sn,F as Te,m as be,y as we,b3 as Tn,bW as nt,c2 as Cn,a1 as Ie,ab as q,c3 as An,bG as Ln,aS as rt,b_ as Nn,c4 as Gt,b$ as at,g as Pn,ai as de,e as le,$ as Dn,ae as Ce,aN as Fn,ap as ot,bC as We,bP as zn,bO as On,aD as Ke,ag as Xt,bn as Hn,X as Bn,l as Ve,B as Yt,I as Wn,i as Un,c5 as qe,bm as Gn,ac as Kt,bL as Xn,bu as Yn,bU as st,aJ as Kn,c6 as Vn,bV as it,bB as lt,ad as qn}from"./Modal-nvZKnG3_.js";import{cA as Pe,cU as ct,cy as ye,bo as Zn,e1 as Jn,eE as Qn,cS as Ze,cx as dt,Q as er,ei as he,e0 as Vt}from"./context-fkXU6psv.js";import"./ksp-enum-names-D10uD7DF.js";import"./logger-2_QM1wvD.js";import"./use-command-CafFDBCH.js";import{Z as je,N as ce,_ as qt,$ as tr,y as ut,B as nr,j as Zt,a0 as rr,e as re,k as ae,U as ar,g as or,Y as Jt,E as sr,c as ir,u as pt,x as ft}from"./contributionsRead-CFwQ5Hmf.js";import{a as lr,r as cr,b as dr}from"./Notice-Dp2sMUkd.js";import{r as ur}from"./ext-react-dom-DCF8ZnaJ.js";import{l as pr}from"./capability-lock-BlroRBl_.js";import"./use-transmissions-CJq7aJWM.js";import"./lagrange-C8jk8-H2.js";import{r as fr}from"./control-frame-to-read-frame-Dw5E6ri_.js";import{d as me,a as hr,e as mr}from"./resource-transfer-BqCeXTes.js";function ri({items:e,onSelect:t,onDismiss:r,"aria-label":a,style:o,header:s,footer:i,emptyLabel:l="No actions",otherLabel:c="Other"}){const p=d.useRef(null),f=d.useId(),[x,y]=d.useState(0),v=En(e,c),u=v.flatMap(([,j])=>j),_=u.length;d.useEffect(()=>{const j=p.current;if(!j)return;if(_===0){j.focus();return}j.querySelectorAll('[role="menuitem"]')[x]?.focus()},[x,_]),d.useEffect(()=>{const j=M=>{const b=p.current;b&&M.target instanceof Node&&!b.contains(M.target)&&r()};return document.addEventListener("pointerdown",j),()=>document.removeEventListener("pointerdown",j)},[r]);const I=d.useCallback(j=>{if(j.key==="Escape"){j.stopPropagation(),r();return}if(j.key==="Tab"){r();return}if(u.length!==0)switch(j.key){case"ArrowDown":j.preventDefault(),y(M=>Math.min(M+1,u.length-1));break;case"ArrowUp":j.preventDefault(),y(M=>Math.max(M-1,0));break;case"Home":j.preventDefault(),y(0);break;case"End":j.preventDefault(),y(u.length-1);break}},[u.length,r]);return n.jsxs(yr,{ref:p,role:_>0?"menu":void 0,"aria-label":a,onKeyDown:I,tabIndex:-1,style:o,children:[s,u.length===0?n.jsx(Wt,{layout:"fill",children:l}):v.map(([j,M],b)=>n.jsxs("div",{...v.length>1?{role:"group","aria-labelledby":`${f}-group-${b}`}:{role:"none"},children:[v.length>1?n.jsx(jr,{id:`${f}-group-${b}`,"aria-hidden":"true",children:j}):null,M.map($=>{const m=u.indexOf($);if($.command)return n.jsx(vr,{item:$,command:$.command,tabIndex:m===x?0:-1,onFocus:()=>y(m),onSelect:t},$.key);const R=$.disabled||$.unavailable!==void 0;return n.jsx(xr,{tip:gr($),children:n.jsx(Qt,{type:"button",role:"menuitem","aria-label":$["aria-label"],"data-predicted":$.advise?"at-risk":void 0,"aria-disabled":R||void 0,$disabled:R,tabIndex:m===x?0:-1,onFocus:()=>y(m),onClick:()=>{R||t($.key)},children:$.label})},$.key)})]},j)),i]})}function gr(e){return e.advise?`Likely to be refused: ${e.advise}.`:e.unavailable??e.tip}function xr({tip:e,children:t}){return e?n.jsx(te,{text:e,children:t}):t}function vr({item:e,command:t,tabIndex:r,onFocus:a,onSelect:o}){const s=Ye({command:t,unavailable:e.unavailable,advise:e.advise}),{control:i}=s,l=d.useRef(!1),c=i.command.handle.railed===!0,p=e.confirmLabel!==void 0;d.useEffect(()=>{l.current&&!c&&!i.isSent&&(l.current=!1,o(e.key))},[i.isSent,c,o,e.key]);const f=s.word??(i.isArmed?e.confirmLabel:null);return n.jsxs(n.Fragment,{children:[n.jsx(te,{text:s.tip??e.tip,children:n.jsxs(Qt,{type:"button",role:"menuitem","aria-label":e["aria-label"],"aria-disabled":e.disabled||s.inert||void 0,$disabled:e.disabled||s.inert,tabIndex:r,onFocus:a,"data-command-edge":s.edge["data-command-edge"],"data-command-phase":s.edge["data-command-phase"],"data-stream":s.edge["data-stream"],"data-predicted":s.edge["data-predicted"],onClick:()=>{if(e.disabled||s.inert)return;const x=i.isArmed;i.press(p),!(p&&!x)&&(c?o(e.key):l.current=!0)},children:[n.jsx(br,{children:e.label}),n.jsx(wr,{"aria-hidden":"true",children:f})]})}),n.jsx(oe,{visuallyHidden:!0,children:s.announce})]})}const br=h.span`
  flex: 1;
`,wr=h.span`
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
`,yr=h.div`
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
`,jr=h.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,Qt=h.button`
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

  ${ve}
  /* The background marks the focused row where the ring meets the menu border. */
  &:focus-visible {
    background: var(--color-border-subtle);
  }

  &[aria-disabled="true"] {
    color: var(--color-text-faint);
    cursor: default;
  }

  ${Ut}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`;function ai({settings:e,values:t,onChange:r}){return e.length===0?null:n.jsx(n.Fragment,{children:e.flatMap(a=>a.fields.map(o=>{const i=t?.[a.namespace]?.[o.key]??o.default,l=o.label??o.key,c=`augment-setting-${a.namespace}-${o.key}`;return o.type===Pe.Bool?n.jsx(Sn,{children:n.jsx(Rn,{checked:!!i,onChange:p=>r(a.namespace,o.key,p),label:l})},`${a.namespace}.${o.key}`):n.jsxs(Te,{children:[n.jsx(be,{htmlFor:c,children:l}),n.jsx(we,{id:c,type:o.type===Pe.Number?"number":"text",value:i===void 0?"":String(i),onChange:p=>{const f=p.target.value;if(o.type!==Pe.Number){r(a.namespace,o.key,f);return}if(f===""){r(a.namespace,o.key,void 0);return}const x=Number(f);Number.isFinite(x)&&r(a.namespace,o.key,x)}})]},`${a.namespace}.${o.key}`)}))})}function oi({fallback:e,gap:t="related-dense",children:r,...a}){return n.jsxs(n.Fragment,{children:[n.jsx(en,{$gap:t,...a,children:r}),n.jsx($r,{children:e})]})}const en=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>je[e]};
`,$r=h.div`
  ${en}:not(:empty) + & {
    display: none;
  }
`,ht=12,ke=8;function _r(e,t,r){return{left:mt(e.x,t.w,r.w),top:mt(e.y,t.h,r.h)}}function mt(e,t,r){const a=e+ht;if(a+t<=r-ke)return a;const o=e-ht-t;return o>=ke?o:Math.max(ke,r-ke-t)}const Mr="–";function si({min:e,max:t,wrapsAt:r,className:a,...o}){const s=ct(e),i=ct(t);return e==null||t==null||s===null||i===null?n.jsx(Se,{className:a,children:ce}):r!==void 0&&Math.abs(i-s)>=r/2?n.jsx(Se,{className:a,children:"(precesses)"}):n.jsx(Tn,{of:e.unit,separate:!0,...o,children:n.jsx(kr,{min:e,max:t,className:a})})}function kr({min:e,max:t,className:r}){return nt(e),nt(t),Cn(e)?n.jsx(Se,{className:r,children:n.jsxs(Rr,{children:[n.jsx("span",{"aria-hidden":"true",children:"~"}),n.jsx(Ie,{children:"approximately "}),n.jsx(q,{value:e})]})}):n.jsxs(Se,{className:r,children:[n.jsx(q,{value:e}),n.jsx(Er,{"aria-hidden":"true",children:Mr}),n.jsx(Ie,{children:" to "}),n.jsx(q,{value:t})]})}const Se=h.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,Er=h.span`
  color: var(--color-text-faint);
`,Rr=h.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`,Ir={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function ii({surface:e,pad:t,bordered:r=!1,radius:a,children:o,...s}){return n.jsx(Sr,{$surface:e,$pad:t,$bordered:r,$radius:a,...s,children:o})}const Sr=h.div`
  ${({$surface:e})=>e&&`background: ${Ir[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${qt[e]};`}
  ${({$pad:e})=>e&&`padding: var(${tr[e]});`}
`,tn=d.forwardRef(function({equalWidth:t=!0,gap:r,children:a,...o},s){return n.jsx(Tr,{ref:s,$equalWidth:t,$gap:r,...o,children:a})}),Tr=h.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?je[e]:"var(--gap-related)"};
`,Cr="3px",Ar=h(dr)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${ut(e)};`:""}
  ${({$identityColor:e})=>e?`
    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: var(--size-mark);
      height: ${Cr};
      background: ${e};
      border-radius: var(--radius-regular) var(--radius-regular) 0 0;
    }
  `:""}
  ${({$dimmed:e,$tone:t})=>e?`
    --color-text-primary: var(--color-text-muted);
    color: var(--color-text-muted);
    ${t?`border-left-color: color-mix(in srgb, ${ut(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function Lr({tone:e,dimmed:t,identityColor:r,standalone:a,...o}){return cr(Ar,{...o,$tone:e,$dimmed:t,$identityColor:r,$standalone:a})}const li=Object.assign(Lr,lr);function ci(e,t){if(!t)return{disabled:!1,disabledReason:void 0,predictedOutcome:void 0,tip:void 0};const r=`${t.charAt(0).toUpperCase()}${t.slice(1)}`;return e.gateStopsPress===!0?{disabled:!0,disabledReason:r,predictedOutcome:void 0,tip:void 0}:{disabled:!1,disabledReason:void 0,predictedOutcome:"at-risk",tip:`Likely to be refused: ${t}.`}}function di({oneWaySeconds:e,delayReading:t,className:r}){const a=ye("s",e);return n.jsxs(Nr,{className:r,role:"group","aria-label":"Signal delay",children:["one-way ~",n.jsx(q,{value:An(a,t),...a.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const Nr=h.div`
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
`;function ui(e){const t=Ln(),r=d.useId(),a=e!==null;d.useEffect(()=>{if(!(!t||!e))return t.register({id:r,...e})},[t,r,a]),d.useEffect(()=>{!t||!e||t.update(r,e)},[t,r,e])}function Pr(e,t,r){return Math.abs(e-t)<r/10}function Dr({commanded:e,expected:t,lastSeen:r,step:a}){const o=(l,c)=>l!=null&&c!=null&&Pr(l,c,a),s=r??null;return{expected:t!=null&&!o(t,e)&&!o(t,s)?t:null,lastSeen:s,onCommanded:o(s,e)}}function nn({kind:e}){return n.jsx("svg",{"aria-hidden":"true",width:xt,height:xt,viewBox:"0 0 16 16",style:{display:"block",overflow:"visible"},children:e==="held"?n.jsx("rect",{x:"2",y:"2",width:"12",height:"12",style:vt.held}):n.jsx("polygon",{points:"8,1.5 14.8,14 1.2,14",style:vt.modelled})})}function gt({kind:e,caption:t,left:r}){return n.jsxs("span",{"data-role":e==="modelled"?"expected":"last-seen","data-reckoning-mark":e,style:{...Hr,left:r},children:[n.jsx(nn,{kind:e}),n.jsx(Ie,{children:t})]})}function pi({kind:e,caption:t,main:r=!1,children:a}){return n.jsxs("span",{"data-role":e==="modelled"?"expected":"last-seen","data-reckoning-mark":e,"data-held":e==="held"?"":void 0,style:r?Wr:Ur,children:[n.jsx(nn,{kind:e}),a,n.jsxs(Ie,{"data-unit-currency":"",children:[", ",t]})]})}const Fr={display:"flex",alignItems:"center",gap:"var(--gap-related)"},zr={flex:1,position:"relative",display:"flex",alignItems:"center"},Or={width:"100%"},Hr={position:"absolute",top:"50%",transform:"translate(-50%, -50%)",display:"flex",pointerEvents:"none"},xt=16,vt={held:{fill:rt.held.color,stroke:"var(--color-surface-app)",strokeWidth:3,paintOrder:"stroke"},modelled:{fill:rt.modelled.color,stroke:"var(--color-surface-app)",strokeWidth:3,strokeLinejoin:"round",paintOrder:"stroke"}},Br={fontSize:"var(--font-size-compact)",color:"var(--color-text-primary)",fontVariantNumeric:"tabular-nums",minWidth:"36px",textAlign:"right"},Wr={display:"inline-flex",alignItems:"center",gap:"var(--gap-figure-parts)"},Ur={display:"inline-flex",alignItems:"center",gap:"var(--gap-figure-parts)",fontSize:"var(--font-size-caption)",color:"var(--color-text-faint)"};function fi({at:e,atAspect:t,narrow:r,wide:a,children:o,...s}){return n.jsx(Xr,{$query:Gr(e,t),$narrow:r,$wide:a,...s,children:o})}function Gr(e,t){const r=[e===void 0?void 0:`(min-width: ${e}px)`,t===void 0?void 0:`(aspect-ratio >= ${t})`].filter(a=>a!==void 0);return r.length===0?void 0:r.join(" and ")}const Xr=h.div`
  ${({$narrow:e})=>e}
  ${({$query:e,$wide:t})=>e===void 0?"":V`
          @container ${e} {
            ${t}
          }
        `}
`;function hi({slot:e,component:t,filter:r}){const a=nr(e),o=r?a.filter(r):a;return o.length===0?null:n.jsx(t,{entries:o})}function mi({label:e,lead:t,children:r,tone:a="neutral",aligned:o=!1,...s}){const i=d.useContext(rn);return n.jsxs(Kr,{$aligned:o,$grouped:o&&i,...s,children:[n.jsx(Vr,{children:e}),n.jsxs(qr,{$tone:a,children:[t,r]})]})}const rn=d.createContext(!1);function gi({children:e,...t}){return n.jsx(Yr,{...t,children:n.jsx(rn.Provider,{value:!0,children:e})})}const Ue="1.5ch",Yr=h.div`
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  column-gap: ${Ue};
  container-type: inline-size;
  min-width: 0;

  @container (max-width: 15rem) {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 0.5em;
  }
`,Kr=h.div`
  align-items: baseline;
  gap: var(--gap-data-line);
  min-width: 0;
  ${({$aligned:e,$grouped:t})=>e?t?V`
        display: grid;
        column-gap: ${Ue};
        grid-column: 1 / -1;
        grid-template-columns: subgrid;
      `:V`
      display: flex;
      flex-wrap: wrap;
      column-gap: ${Ue};
      & > :first-child {
        flex: 0 0 auto;
        min-width: 7ch;
      }
      & > :last-child {
        flex: 1 1 10ch;
      }
    `:V`
        display: flex;
        flex-wrap: wrap;
      `}
`,Vr=h.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,qr=h.span`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--gap-data-line);
  font-size: var(--font-size-value);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  color: ${({$tone:e})=>Zt[e]};
`;function Zr(e,t){return e.value!==void 0?n.jsx(q,{value:e.value(t)??null}):e.render(t)}function xi({columns:e,rows:t,sections:r,rowKey:a,caption:o,empty:s,rowDetail:i,className:l}){const c=r??(t?[{id:"",title:null,rows:[...t]}]:[]),p=c.reduce((u,_)=>u+_.rows.length,0),[f,x]=d.useState(null),y=Nn(f),v=Gt(f);return n.jsxs(Jr,{className:l,children:[n.jsx(Qr,{ref:x,tabIndex:v,children:n.jsxs(ea,{children:[n.jsx(ta,{children:o}),n.jsx("thead",{children:n.jsx("tr",{children:e.map(u=>n.jsx(na,{scope:"col",$align:u.align??"start",style:{width:u.width,minWidth:u.minWidth},children:u.header},u.key))})}),p===0&&s!==void 0&&n.jsx("tbody",{children:n.jsx("tr",{children:n.jsx(ia,{colSpan:e.length,children:s})})}),c.map(u=>n.jsxs("tbody",{children:[u.title!==null&&u.title!==void 0&&n.jsx("tr",{children:n.jsx(ra,{scope:"rowgroup",colSpan:e.length,children:u.title})}),u.rows.map(_=>{const I=a(_),j=i?.(_),M=j!=null&&j!==!1&&j!=="";return n.jsxs(d.Fragment,{children:[n.jsx(aa,{$hasDetail:M,children:e.map(b=>n.jsx(oa,{as:b.rowHeader?"th":void 0,scope:b.rowHeader?"row":void 0,$align:b.align??"start",children:Zr(b,_)},b.key))}),M?n.jsx("tr",{children:n.jsx(sa,{colSpan:e.length,children:j})}):null]},I)})]},u.id))]})}),n.jsx(at,{$position:"left",$visible:y.left}),n.jsx(at,{$position:"right",$visible:y.right})]})}const Jr=h.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Qr=h.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${ve}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,ea=h.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,ta=h.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,na=h.th`
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
`,ra=h.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,aa=h.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,oa=h.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,sa=h.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,ia=h.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`;function la(e){const t=e.reason;switch(t){case"beyond-horizon":return e.resolvesByWaiting?"NOT YET COMPUTED":"CANNOT MODEL";case"under-physics":case"model-inapplicable":case"contested":case"insufficient-history":return"CANNOT MODEL";case"frame-unavailable":return"FRAME UNAVAILABLE";case"input-absent":return null;default:return t}}function vi({declined:e,layout:t="inline"}){return n.jsx(te,{text:e.note,focusable:!0,children:n.jsx(Wt,{role:"status",layout:t,children:la(e)??"NO DATA"})})}function bi({label:e,children:t,"aria-label":r,className:a,variant:o="popover",panelHeight:s="cap",chevron:i=!0,asButton:l=!1,buttonSize:c="md",defaultOpen:p=!1}){const[f,x]=d.useState(p),y=d.useId(),v=d.useRef(null),[u,_]=d.useState(null),I=Gt(u),j=o==="inline"&&i,M=typeof e=="function"?e(f):e,b={ref:v,type:"button","aria-expanded":f,"aria-controls":y,"aria-label":r,onClick:()=>x(m=>!m)},$=n.jsxs(n.Fragment,{children:[M,j&&n.jsx(pa,{$open:f,children:n.jsx(Pn,{size:"var(--icon-size-control)"})})]});return n.jsxs(ca,{className:a,$variant:o,onKeyDown:m=>{m.key==="Escape"&&f&&(x(!1),v.current?.focus())},children:[l?n.jsx(ua,{...b,variant:"ghost",size:c,$inline:o==="inline",children:$}):n.jsx(da,{...b,$variant:o,$align:o==="inline"&&!i?"end":"between",children:$}),f&&n.jsx(fa,{ref:_,id:y,role:"group",tabIndex:I,$variant:o,$panelHeight:s,children:t})]})}const ca=h.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,da=h.button`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-glyph);
  padding: var(--inset-glyph-button);
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  ${({$variant:e,$align:t})=>e==="inline"&&V`
      justify-content: ${t==="end"?"flex-end":"space-between"};
      width: 100%;
      text-align: start;
      border-radius: var(--radius-regular);
      &:hover {
        background: var(--color-surface-sunken);
      }
    `}
  ${de}
`,ua=h(le)`
  ${({$inline:e})=>e&&V`
      align-self: flex-end;
    `}
`,pa=h.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,fa=h.div`
  ${({$variant:e})=>e==="popover"?V`
          position: absolute;
          top: 100%;
          right: 0;
          /* Local sibling ordering: lifts the popped panel above following rows, off the app z ladder. */
          z-index: 1;
          margin-top: var(--gap-disclosure);
        `:V`
          position: static;
          width: 100%;
          margin-top: var(--gap-disclosure);
        `}
  /* An accordion body grows in flow up to a cap, then scrolls, never spilling past the row below. */
  ${({$variant:e,$panelHeight:t})=>e==="inline"&&t==="cap"?V`
          max-height: 16rem;
          overflow-y: auto;
          ${ve}
        `:""}
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function wi({space:e,...t}){return n.jsx(ha,{$space:e,...t})}const ha=h.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${je[e]} 0`:"0"};
`,ma=160,ga=24,xa="...";function yi({children:e,limit:t=ma,subject:r,className:a}){const[o,s]=d.useState(!1),i=d.useId(),l=va(e,t);if(l===void 0)return n.jsx(n.Fragment,{children:e});const c=o?"Show less":"Show more";return n.jsxs(ba,{className:a,children:[n.jsx("span",{id:i,children:o?e:`${l}${xa}`})," ",n.jsx(wa,{type:"button","data-expandable-toggle":"","aria-controls":i,"aria-expanded":o,"aria-label":r===void 0?void 0:`${c} of ${r}`,onClick:()=>s(p=>!p),children:c})]})}function va(e,t){if(e.length<=t+ga)return;const r=e.lastIndexOf(" ",t);return r<=0?e.slice(0,t):e.slice(0,r)}const ba=h.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,wa=h(Dn)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function ji(e,t){const r=t.map(s=>s==null?null:Zn(e,s.index)),a=r.length>0&&r.every(s=>s?.currency==="exact"),o=r.reduce((s,i)=>i?.currency!=="held"||i.asOfUt===null?s:s===null?i.asOfUt:Math.min(s,i.asOfUt),null);return s=>{const i=a?Jn(s):s;return o===null?i:{state:"held",value:i,asOfUt:ye("ut",o),grade:"held",reckoning:{status:"none"}}}}function ya({anchor:e,style:t,children:r,...a}){const[o,s]=d.useState(null),[i,l]=d.useState(null),c=d.useRef(e);c.current=e;const p=d.useCallback(()=>{if(!o)return;const f=c.current,x=typeof f=="function"?f():f;if(!x)return;const y=o.getBoundingClientRect(),v=_r(x,{w:y.width,h:y.height},{w:window.innerWidth,h:window.innerHeight});l(u=>u&&u.left===v.left&&u.top===v.top?u:v)},[o]);return d.useLayoutEffect(()=>{p()}),d.useLayoutEffect(()=>{if(!o)return;const f=typeof ResizeObserver>"u"?null:new ResizeObserver(p);return f?.observe(o),window.addEventListener("resize",p),window.addEventListener("scroll",p,!0),()=>{f?.disconnect(),window.removeEventListener("resize",p),window.removeEventListener("scroll",p,!0)}},[o,p]),typeof document>"u"?null:ur.createPortal(n.jsx(ja,{ref:s,style:{...t,left:i?.left??0,top:i?.top??0,visibility:i===null?"hidden":t?.visibility},...a,children:r}),document.body)}const ja=h.div`
  position: fixed;
  z-index: var(--z-dropdown);
`,$a=kn`
  from { transform: translateX(0); }
  to { transform: translateX(var(--flow-stride)); }
`,_a=h.g`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${$a} 0.6s linear infinite;
  }
`;function $i({stride:e,children:t}){return n.jsx(_a,{style:{"--flow-stride":`${e}px`},children:t})}const bt=12,Ma=8,ka=120;function _i({trigger:e,"aria-label":t,children:r}){const[a,o]=d.useState(!1),s=d.useRef(null),i=d.useRef(null),l=d.useRef(null),c=d.useId(),p=d.useCallback(()=>{i.current!==null&&(clearTimeout(i.current),i.current=null)},[]),f=()=>{p(),o(!0)},x=()=>{p(),i.current=setTimeout(()=>o(!1),ka)},y=d.useCallback(()=>{p(),o(!1)},[p]);d.useEffect(()=>p,[p]),d.useEffect(()=>{if(!a)return;const u=_=>{_.key==="Escape"&&(_.stopPropagation(),y())};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[a,y]);const v=()=>{const u=s.current?.getBoundingClientRect();if(!u)return null;const _=l.current?.offsetHeight??0,I=u.top-_-2*bt;return{x:u.left,y:I+bt>=Ma?I:u.bottom}};return n.jsxs(n.Fragment,{children:[n.jsx(Ea,{ref:s,type:"button","aria-label":t,"aria-describedby":a?c:void 0,onPointerEnter:f,onPointerLeave:x,onFocus:f,onBlur:y,children:e}),a&&n.jsx(ya,{anchor:v,onPointerEnter:p,onPointerLeave:x,children:n.jsx(Ra,{ref:l,id:c,role:"tooltip",children:r})})]})}const Ea=h.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${de}
`,Ra=h.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  max-width: min(22rem, calc(100vw - 2 * var(--inset-popover)));
  overflow-wrap: anywhere;
`;function ee({gap:e,inset:t=!1,wrap:r=!1,children:a,...o}){return n.jsx(Ia,{$gap:e,$inset:t,$wrap:r,...o,children:a})}const Ia=h.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?je[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,Sa=4,Ta=80,wt=60,Ca=30,Ge=24,Aa=32,yt=56,jt=Ge;function De(e,t,r){const{min:a,max:o,step:s}=t,i=e+r*s,l=Math.min(o,Math.max(a,i));if(!Number.isFinite(a))return l;const c=a+Math.round((l-a)/s)*s;return Math.min(o,Math.max(a,c))}function La(e){if(e.command)return n.jsx(Na,{...e,command:e.command});const{command:t,unavailable:r,...a}=e;return n.jsx(an,{...a,onChange:a.onChange})}function Na(e){const{command:t,unavailable:r,...a}=e,o=Ce({command:t,unavailable:r}),[s,i]=d.useState(null);return n.jsx(an,{...a,value:s??a.value,disabled:o.inert,onChange:i,onCommit:l=>{i(null),o.send(l)},input:o,status:n.jsx(oe,{visuallyHidden:!0,children:o.announce})})}function an(e){const{value:t,min:r,max:a,step:o,orientation:s="horizontal",onChange:i,onCommit:l,input:c,status:p,format:f,"aria-label":x,label:y=x,disabled:v=!1,width:u,height:_}=e,I=s==="vertical",j=Math.max(Ge,u??(I?jt:yt)),M=Math.max(Ge,_??(I?yt:jt)),b=e.mode==="rate",$=r??Number.NEGATIVE_INFINITY,m=a??Number.POSITIVE_INFINITY,R={min:$,max:m,step:o},A=d.useRef(null),E=d.useRef(t);E.current=t;const z=d.useRef(i);z.current=i;const H=(e.mode==="rate"?e.stepsPerSecond:void 0)??Ca,[B,Q]=d.useState(0),U=f?f(t):String(Math.round(t)),g=m>$&&Number.isFinite(m-$)?(t-$)/(m-$):.5,S=d.useRef(null),P=k=>{v||k!==t&&(S.current=k,i(k))},L=k=>{if(!l){P(k);return}v||k===t||l(k)};d.useEffect(()=>{if(!b||B===0||v)return;const k=setInterval(()=>{const F=Math.max($,Math.min(m,E.current+B*H*o*(wt/1e3)));F!==E.current&&(S.current=F,z.current(F))},wt);return()=>clearInterval(k)},[b,B,v,o,H,$,m]);const G=k=>{if(v)return;let F=null;switch(k.key){case"ArrowRight":case"ArrowUp":F=De(t,R,1);break;case"ArrowLeft":case"ArrowDown":F=De(t,R,-1);break;case"Home":if(!Number.isFinite($))return;F=$;break;case"End":if(!Number.isFinite(m))return;F=m;break;default:return}k.preventDefault(),L(F)},D=k=>s==="vertical"?k.clientY:k.clientX,Y=k=>{v||(A.current={start:D(k),startValue:t},k.currentTarget.setPointerCapture(k.pointerId))},O=k=>{if(v||!A.current)return;const F=s==="vertical"?A.current.start-D(k):D(k)-A.current.start;if(b){const ne=F/Ta;Q(Math.max(-1,Math.min(1,ne)));return}const $e=F/Sa;P(De(A.current.startValue,R,$e))},W=k=>{if(!A.current)return;A.current=null,Q(0);const F=S.current;S.current=null,l&&F!==null&&l(F),k.currentTarget.hasPointerCapture(k.pointerId)&&k.currentTarget.releasePointerCapture(k.pointerId)},K=n.jsxs(Fa,{...c?.edge,role:"slider","aria-label":x,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":r,"aria-valuemax":a,"aria-valuetext":U,"aria-disabled":v||void 0,tabIndex:v?-1:0,$orientation:s,$disabled:v,$width:j,$height:M,$compact:(I?j:M)<Aa,onKeyDown:G,onPointerDown:Y,onPointerMove:O,onPointerUp:W,onPointerCancel:W,children:[n.jsx(za,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-g)*100}%)`}:{transform:`translateX(${(.5-g)*100}%)`},"aria-hidden":"true"}),n.jsx(Oa,{$orientation:s,"aria-hidden":"true"}),n.jsx(Ha,{"aria-hidden":"true",children:c?.word??U})]});return n.jsxs(Pa,{children:[y!==!1&&n.jsx(Da,{"aria-hidden":"true",children:y}),c?n.jsx(te,{text:c.tip,children:K}):K,p]})}const Pa=h.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,Da=h.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,Fa=h.div`
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

  ${de}

  ${Ut}
`,za=h.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,Oa=h.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,Ha=h.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function Mi({lock:e}){const t=Qn(e)?Ba(e):e,r=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return n.jsx(te,{text:r,focusable:!0,children:n.jsxs(Ua,{role:"status","aria-label":r,children:[n.jsx(Fn,{size:"1.2em"}),n.jsx(Ga,{children:Wa(t)})]})})}function Ba(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...pr(t,rr),locks:t}}function Wa(e){const t=[...new Set(e.locks.flatMap(r=>r.missing.map(a=>a.name)))];return t.length>0?t.join(", "):e.reason}const Ua=h.span`
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
`,Ga=h.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,$t=1.4,_t=1.7,Xa="var(--icon-size-standalone)",Ya=1.8,Ee="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",Mt="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",kt="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",Et="M7 4.5V19.5M17 4.5V19.5",se=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,on={prograde:{colour:"prograde",paths:[Ee,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[Ee,se(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",se(12,11)]},radialOut:{colour:"radial",paths:[Mt,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[Mt,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",se(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",se(12,12)]},relativePlus:{colour:"target",paths:[Ee,kt],dot:[12,12]},relativeMinus:{colour:"target",paths:[Ee,kt,se(12,12)]},parallelPlus:{colour:"target",paths:[Et],dot:[12,12]},parallelMinus:{colour:"target",paths:[Et,se(12,12)]}},ki=Object.keys(on);function Rt({shape:e,colour:t,strokeWidth:r,dotRadius:a}){return n.jsxs("g",{fill:"none",stroke:t,strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(o=>n.jsx("path",{d:o},o)),e.dot&&n.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:a,fill:t,stroke:"none"})]})}function Z(e,t){const r=on[e],a=`var(--color-marker-${r.colour})`,o=d.forwardRef(({size:s=Xa,strokeWidth:i=Ya,label:l,style:c,...p},f)=>{const x={ref:f,xmlns:"http://www.w3.org/2000/svg",...typeof s=="number"?{width:s,height:s,style:c}:{style:{width:s,height:s,...c}},viewBox:"0 0 24 24","data-marker":e},y=n.jsxs(n.Fragment,{children:[n.jsx(Rt,{shape:r,colour:"currentColor",strokeWidth:i+$t,dotRadius:_t+$t/2}),n.jsx(Rt,{shape:r,colour:a,strokeWidth:i,dotRadius:_t})]});return l?n.jsx("svg",{...x,role:"img","aria-label":l,...p,children:y}):n.jsx("svg",{...x,"aria-hidden":"true",...p,children:y})});return o.displayName=t,o}const sn=Z("prograde","ProgradeIcon"),Ka=Z("retrograde","RetrogradeIcon"),ln=Z("normal","NormalIcon"),Va=Z("antiNormal","AntiNormalIcon"),qa=Z("radialOut","RadialOutIcon"),cn=Z("radialIn","RadialInIcon"),Za=Z("maneuver","ManeuverIcon"),Ja=Z("target","TargetIcon"),Qa=Z("antiTarget","AntiTargetIcon"),eo=Z("relativePlus","RelativePlusIcon"),to=Z("relativeMinus","RelativeMinusIcon"),no=Z("parallelPlus","ParallelPlusIcon"),ro=Z("parallelMinus","ParallelMinusIcon"),Ei=sn,Ri=cn,Ii=ln,Si={prograde:sn,retrograde:Ka,normal:ln,antiNormal:Va,radialOut:qa,radialIn:cn,maneuver:Za,target:Ja,antiTarget:Qa,relativePlus:eo,relativeMinus:to,parallelPlus:no,parallelMinus:ro};function dn(e){const{year:t,day:r,hour:a,minute:o}=Ze(),s=Number.isFinite(e)?Math.max(0,e):0,i=Math.floor(s/t)+1,l=s%t,c=Math.floor(l/r)+1,p=l%r;return{year:i,day:c,hour:Math.floor(p/a),minute:Math.floor(p%a/o),second:Math.floor(p%o)}}const It={year:1,day:1,hour:0,minute:0,second:0};function St(e){const{year:t,day:r,hour:a,minute:o}=Ze();return(e.year-1)*t+(e.day-1)*r+e.hour*a+e.minute*o+e.second}function Re(e){return ar(ye("s",e))}function ao(e){return e.command?n.jsx(oo,{...e,command:e.command}):n.jsx(un,{value:e.value,label:e.label,steps:e.steps,onChange:e.onChange,disabled:e.disabled})}function oo({command:e,unavailable:t,...r}){const a=Ce({command:e,unavailable:t});return n.jsx(un,{value:r.value,label:r.label,steps:r.steps,onChange:a.send,disabled:a.inert,input:a})}const so=h.span`
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;
  padding-inline: var(--gap-related-dense);
  background: var(--color-surface-sunken);
  color: var(--color-text-muted);
  pointer-events: none;
  &:empty {
    display: none;
  }
  font-size: var(--font-size-caption);
  letter-spacing: 0.08em;
`,io=h.div`
  position: relative;
`;function un({value:e,onChange:t,label:r,disabled:a,steps:o,input:s}){const i=d.useId(),l=`${i}-absent`,c=e!==null&&Number.isFinite(e)?e:null,p=c===null?null:dn(c),f=Ze(),x=o??[f.minute,10*f.minute,f.hour,f.day],[y,v]=d.useState(null),u=()=>{if(!s||y===null)return;const b=y.text.trim(),$=Number(b);if(v(null),b===""||!Number.isFinite($))return;const m=y.key==="year"||y.key==="day"?1:0,R=Math.max(m,Math.round($)),A=St({...p??It,[y.key]:R});A!==c&&t(A)},{"data-command-phase":_,...I}=s?.edge??{"data-command-phase":""},j=(b,$,m,R)=>n.jsxs(re,{gap:"caption",children:[n.jsx(be,{htmlFor:`${i}-${b}`,children:$}),n.jsx(we,{...I,id:`${i}-${b}`,type:"number",inputMode:"numeric","aria-label":`${r} ${$}`,"aria-describedby":p===null?l:void 0,min:m,step:1,style:{width:R},disabled:a,placeholder:p===null?ce:void 0,value:y?.key===b?y.text:p===null?"":String(p[b]),onBlur:()=>s?u():v(null),onKeyDown:A=>{s&&A.key==="Enter"&&u()},onChange:A=>{const E=A.target.value;if(v({key:b,text:E}),s||E.trim()==="")return;const z=Number(E);if(!Number.isFinite(z))return;const H=Math.max(m,Math.round(z));t(St({...p??It,[b]:H}))}})]},b),M=n.jsxs(re,{gap:"related-dense",role:"group","aria-label":r,children:[n.jsxs(ot,{gap:"related-dense",wrap:!0,justify:"start",children:[j("year","YEAR",1,"5rem"),j("day","DAY",1,"5rem"),j("hour","HR",0,"4rem"),j("minute","MIN",0,"4rem"),j("second","SEC",0,"4rem")]}),p===null&&n.jsx(ae,{id:l,level:"muted",size:"sm",children:`${ce} no ${r.toLowerCase()} to show. Type one to state it.`}),x.length===0?null:n.jsxs(ot,{gap:"related-packed",wrap:!0,justify:"start",children:[n.jsx(ae,{level:"faint",size:"sm",children:"NUDGE"}),x.map(b=>n.jsx(le,{variant:"ghost",size:"sm",disabled:a||c===null,"aria-label":`${r} earlier by ${Re(b)}`,onClick:()=>c!==null&&t(c-b),children:`-${Re(b)}`},`minus-${b}`)),x.map(b=>n.jsx(le,{variant:"ghost",size:"sm",disabled:a||c===null,"aria-label":`${r} later by ${Re(b)}`,onClick:()=>c!==null&&t(c+b),children:`+${Re(b)}`},`plus-${b}`))]})]});return s?n.jsx(te,{text:s.tip,children:n.jsxs(io,{children:[M,n.jsx(so,{"aria-hidden":"true",children:s.word}),n.jsx(oe,{visuallyHidden:!0,children:s.announce})]})}):M}const lo=h.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function co({observed:e,modelled:t,write:r}){if(t==null)return null;if(r===void 0){const a=t;return We(e,a,zn())?n.jsx(Tt,{children:n.jsx(q,{value:a})}):null}return We(e,t,On(r))?n.jsx(Tt,{children:r(t)}):null}function Tt({children:e}){return n.jsx(lo,{"data-modelled-alongside":"",children:n.jsx(Ke,{"data-held":"",kind:"modelled",caption:Xt,children:e})})}function Ti({value:e}){return n.jsxs(n.Fragment,{children:[n.jsx(q,{value:e}),n.jsx(co,{observed:e.value,modelled:Hn(e)})]})}function Ci({panZoom:e,label:t,style:r,onMouseMove:a,children:o}){const{style:s,ref:i,...l}=e.viewportProps;return n.jsxs(uo,{...l,ref:i,onMouseMove:a,"aria-label":t,style:{...s,...r},children:[o,n.jsx(po,{role:"status",children:e.hint!==null&&n.jsx(fo,{children:e.hint})})]})}const uo=h.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  ${ve}
`,po=h.div`
  position: absolute;
  bottom: var(--gap-related);
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-base);
  max-width: calc(100% - 16px);
  pointer-events: none;
`,fo=h.div`
  padding: var(--inset-control);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function Ai({filled:e,of:t,tone:r="info",label:a}){const o=`${e} of ${t}`;return n.jsx(ho,{role:"img","aria-label":a===void 0?o:`${a}: ${o}`,"data-pips":"",children:Array.from({length:t},(s,i)=>n.jsx(mo,{$colour:or[r],$filled:i<e},i))})}const ho=h.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  flex: none;
`,mo=h.span`
  width: 1em;
  height: 1em;
  border-radius: var(--radius-circle);
  border: 2px solid ${({$colour:e})=>e};
  background: ${({$colour:e,$filled:t})=>t?e:"transparent"};
`;function Li({id:e,label:t,value:r,options:a,onChange:o,hint:s}){const i=a.findIndex(l=>fr(l.choice,r));return n.jsxs(Te,{children:[n.jsx(be,{htmlFor:e,children:t}),n.jsxs(Bn,{id:e,value:i===-1?"":String(i),onChange:l=>{const c=a[Number(l.target.value)];c!==void 0&&o(c.choice)},children:[i===-1&&n.jsx("option",{value:"",disabled:!0}),a.map((l,c)=>n.jsx("option",{value:c,children:l.label},`${l.choice.kind}-${l.choice.bodyIndex??"none"}`))]}),s!==void 0&&n.jsx(Ve,{children:s})]})}const go=h.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`;function Ni({job:e,transfer:t}){const r=me(e.fromPartIds,t.titleOf),a=me(e.toPartIds,t.titleOf),o=`${r} → ${a}`;return n.jsxs(re,{children:[n.jsxs(ee,{children:[n.jsx(go,{style:xo,children:o}),t.held&&n.jsx(Yt,{tone:"info",children:"held"})]}),n.jsxs(ee,{wrap:!0,children:[n.jsxs(ee,{wrap:!0,children:[n.jsx(tt,{children:"Moved"}),n.jsxs(ae,{size:"sm",children:[n.jsx(q,{value:e.moved,decimals:1}),e.requested!=null?n.jsxs(n.Fragment,{children:[" / ",n.jsx(q,{value:e.requested,decimals:1})]}):" / until full"]})]}),n.jsxs(ee,{children:[n.jsx(tt,{children:"Rate"}),n.jsx(ae,{size:"sm",children:n.jsx(q,{value:e.rate??ye("units/s",0),decimals:1})})]})]}),n.jsx(ee,{children:n.jsx(le,{size:"sm",variant:"ghost",command:t.stop.with({all:!1,transferId:e.id},{label:`Stop ${e.resource} transfer, ${o}`}),children:"Stop"})})]})}const xo={fontSize:"var(--font-size-value)",color:"var(--color-text-primary)",flex:1,minWidth:0},vo=[{role:null,label:"Off"},{role:"from",label:"From"},{role:"to",label:"To"}];function bo({tank:e,transfer:t,state:r}){const{pick:a,setRole:o}=r,s=a.from.includes(e.partId)?"from":a.to.includes(e.partId)?"to":null,i=e.flowMode===dt.Out?"out only":e.flowMode===dt.In?"in only":null;return n.jsxs("fieldset",{style:pn,children:[n.jsx("legend",{style:jo,children:e.title}),n.jsxs(re,{children:[n.jsxs(ee,{children:[n.jsxs(ae,{size:"sm",children:[n.jsx(q,{value:e.amount,decimals:1})," /"," ",n.jsx(q,{value:e.capacity,decimals:0})]}),i&&n.jsx(In,{label:i}),e.locked&&n.jsx(Yt,{tone:"warn",children:"Locked"})]}),n.jsx(tn,{equalWidth:!1,children:vo.map(({role:l,label:c})=>{const p=l===null?void 0:t.blockReason(e,l,a);return n.jsx(Be,{size:"sm",pressed:s===l,disabled:p!==void 0,disabledReason:p,onClick:()=>o(e.partId,l),children:c},c)})})]})]})}function Pi({transfer:e,state:t,form:r,onStarted:a,onCancel:o}){const[s,i]=d.useState(!0),[l,c]=d.useState(""),p=d.useId(),{pick:f}=t,x=e.tanks(f.resource),y=s?null:Number(l),v=hr(f,y),u=n.jsx(re,{children:x.map(m=>n.jsx(bo,{tank:m,transfer:e,state:t},m.partId))}),_=e.running.some(m=>m.resource===f.resource&&m.fromPartIds.some(R=>f.from.includes(R))&&m.toPartIds.some(R=>f.to.includes(R)));d.useEffect(()=>{_&&a?.()},[_,a]);const I=m=>m.length>0?me(m,e.titleOf):"none",j=`${I(f.from)} → ${I(f.to)}`,M=`Transfer ${f.resource}, ${me(f.from,e.titleOf)} to ${me(f.to,e.titleOf)}`,b=n.jsxs(ee,{children:[n.jsxs(tn,{equalWidth:!1,"aria-label":"Amount",children:[n.jsx(Be,{size:"sm",pressed:s,onClick:()=>i(!0),children:"Until full"}),n.jsx(Be,{size:"sm",pressed:!s,onClick:()=>i(!1),children:"Units"})]}),!s&&n.jsx(we,{"aria-label":"Amount in units",inputMode:"decimal",value:l,onChange:m=>c(m.target.value),style:Mo})]}),$=n.jsx(le,{id:p,"aria-label":M,size:"sm",variant:"primary",unavailable:v,command:e.start.with(mr(f,y),{label:M}),children:"Transfer"});return r==="tray"?n.jsxs(ee,{wrap:!0,style:wo,children:[n.jsx(te,{text:j,announce:!1,children:n.jsx("label",{htmlFor:p,style:yo,children:j})}),b,n.jsxs(ee,{children:[o&&n.jsx(Wn,{type:"button","aria-label":"Cancel",onClick:o,children:n.jsx(Un,{size:14})}),$]})]}):n.jsxs(re,{children:[u,n.jsxs(ee,{wrap:!0,style:_o,children:[n.jsxs("fieldset",{style:pn,children:[n.jsx("legend",{style:$o,children:"Amount"}),b]}),n.jsxs(ee,{children:[o&&n.jsx(le,{size:"sm",variant:"ghost",onClick:o,children:"Cancel"}),$]})]})]})}const wo={flexWrap:"wrap",width:"100%",columnGap:"var(--gap-related-compact)"},yo={flex:"1 1 0",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"var(--font-size-value)",color:"var(--color-text-primary)"},pn={border:0,margin:0,padding:0,minWidth:0},jo={padding:0,fontSize:"var(--font-size-value)",color:"var(--color-text-primary)"},$o={padding:0,fontSize:"var(--font-size-caption)",color:"var(--color-text-muted)"},_o={justifyContent:"space-between",flexWrap:"wrap"},Mo={width:"6em"};function ko(e){if(e.command)return n.jsx(Eo,{...e,command:e.command});const{command:t,unavailable:r,...a}=e;return n.jsx(fn,{...a})}function Eo({command:e,unavailable:t,children:r,onClick:a,...o}){const s=Ye({command:e,unavailable:t});return n.jsxs(n.Fragment,{children:[n.jsx(te,{text:s.tip,children:n.jsxs(fn,{...o,...s.edge,as:"button",interactive:!0,onClick:i=>{s.inert||(s.control.press(!1),a?.(i))},children:[r,n.jsx(Ro,{"aria-hidden":"true",children:s.word})]})}),n.jsx(oe,{visuallyHidden:!0,children:s.announce})]})}const Ro=h.span`
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
`;function fn({as:e,interactive:t=!1,selected:r=!1,wrap:a=!1,nested:o=!1,type:s,children:i,...l}){return n.jsx(So,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:r,$wrap:a,$nested:o,...l,children:i})}const hn=h.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,Io="min(12ch, 100%)",So=h.li`
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

  & > ${hn} {
    min-width: ${Io};
  }
`:""}
  ${({$interactive:e})=>e?V`
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

  ${ve}
`:""}
  ${({$interactive:e,$selected:t})=>e&&t?`
  ${Jt("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}

  ${qe}
`,Di=Object.assign(ko,{Name:hn}),To=65,mn=38,Co=72,Ao=Co-mn,gn=55,Xe=137.508,Lo=10,No=1.5,Po=64,Do=60,Fo=241,zo=Xe-Math.floor(Xe),ge=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function xn(e,t){const r=Math.abs(e-t)%360;return r>180?360-r:r}const Oo=ge.map((e,t)=>{let r=1/0;for(let o=0;o<ge.length;o++)o!==t&&(r=Math.min(r,xn(e.hue,ge[o].hue)));const a=r/2;return Math.max(0,Math.min(Lo,a-No))}),Ho=ge.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:Oo[t]}));function Bo(e,t=ge){return t.find(r=>r.aliases.some(a=>e.includes(a)))}function vn(e){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function Ct(e,t){return(e%t+t)%t}function Wo(e){const r=vn(`light:${e}`)/4294967295;return mn+r*Ao}function Uo(e){const t=Bo(e);if(!t)return;const r=t.aliases.length===1?gn:Wo(e);return{hue:t.hue,lightness:r}}function Go(e){return Ho.some(({centre:t,radius:r})=>xn(e,t)<r)}function Xo(e){const t=vn(e);let r=Ct(t*Xe,360);const a=Do+(t>>>8)%Fo+zo;let o=0;for(;Go(r)&&o<Po;)r=Ct(r+a,360),o++;return r}function Fi(e){const t=e.trim().toLowerCase(),r=Uo(t),a=r?.hue??Xo(t),o=r?.lightness??gn;return`hsl(${Math.round(a)}deg ${To}% ${Math.round(o)}%)`}function zi(e){if(e.command)return n.jsx(Yo,{...e,command:e.command});const{command:t,unavailable:r,...a}=e;return n.jsx(bn,{...a})}function Yo({command:e,unavailable:t,children:r,onClick:a,...o}){const s=Ye({command:e,unavailable:t});return n.jsxs(n.Fragment,{children:[n.jsx(te,{text:s.tip,children:n.jsxs(bn,{...o,...s.edge,onClick:i=>{s.inert||(s.send(),a?.(i))},children:[r,n.jsx(Ko,{"aria-hidden":"true",children:s.word})]})}),n.jsx(oe,{visuallyHidden:!0,children:s.announce})]})}function bn({selected:e,gap:t="caption",layout:r="stack",selectedLook:a="fill",children:o,...s}){return n.jsx(Vo,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:r,$look:a,...s,children:o})}const Ko=h.span`
  position: absolute;
  inset-inline-end: var(--gap-related);
  top: 50%;
  transform: translateY(-50%);
  padding-inline: var(--gap-related-dense);
  background: var(--color-surface-sunken);
  color: var(--color-text-muted);
  pointer-events: none;
  &:empty {
    display: none;
  }
  font-size: var(--font-size-caption);
  letter-spacing: 0.08em;
`,Vo=h.button`
  display: flex;
  ${({$layout:e})=>e==="split"?V`
          justify-content: space-between;
          align-items: baseline;
          > :first-child {
            flex: 1;
            min-width: 0;
          }
        `:V`
          flex-direction: column;
        `}
  gap: ${({$gap:e})=>je[e]};
  width: 100%;
  text-align: left;
  padding: var(--inset-selectable-row);
  border-radius: ${qt.regular};
  border: 1px solid
    ${({$selected:e,$look:t})=>e?t==="outline"?"var(--color-accent-fg)":"transparent":"var(--color-border-subtle)"};
  ${({$selected:e,$look:t})=>e?t==="outline"?"background: var(--color-surface-raised); color: inherit;":Jt("go"):"background: transparent; color: inherit;"}
  cursor: pointer;
  font-family: inherit;

  ${({$selected:e})=>e?"":V`
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

  ${de}

  &[data-command-phase] {
    position: relative;
  }

  ${qe}
`,qo=d.forwardRef(function(t,r){return t.command?n.jsx(Zo,{...t,command:t.command,forwardedRef:r}):t.figure!==void 0?n.jsx(wn,{...t,forwardedRef:r}):n.jsx(yn,{ref:r,type:"range",...t})});function Zo({command:e,unavailable:t,forwardedRef:r,...a}){const o=Ce({command:e,unavailable:t});return n.jsx(wn,{...a,forwardedRef:r,input:o,disabled:a.disabled})}function wn({forwardedRef:e,input:t,value:r,min:a,max:o,step:s,figure:i,expected:l,expectedCaption:c=Xt,lastSeen:p,lastSeenCaption:f="last reported",disabled:x,onChange:y,"aria-label":v,...u}){const[_,I]=d.useState(null);d.useEffect(()=>{if(_===null)return;const E=()=>I(null);return window.addEventListener("pointerup",E),window.addEventListener("pointercancel",E),()=>{window.removeEventListener("pointerup",E),window.removeEventListener("pointercancel",E)}},[_]);const[j,M]=d.useState(null),b=t?.control.isSent===!0;d.useEffect(()=>{b||M(null)},[b]);const $=_??j??r,m=Dr({commanded:$,expected:l,lastSeen:p,step:s}),R=E=>`calc(8px + ${(E-a)/(o-a||1)} * (100% - 16px))`,A=E=>{t&&!t.inert&&M(E),t?.send(E)};return n.jsxs("div",{style:Fr,children:[n.jsx(te,{text:t?.tip,children:n.jsxs("div",{style:zr,children:[n.jsx(yn,{...u,...t?.edge,ref:e,type:"range",min:a,max:o,step:s,value:$??a,onPointerDown:()=>I($??a),onChange:E=>{const z=Number(E.target.value);_!==null?I(z):A(z),y?.(E)},onPointerUp:E=>A(Number(E.currentTarget.value)),disabled:x,"aria-label":v,style:Or}),m.expected!==null&&n.jsx(gt,{kind:"modelled",caption:c,left:R(m.expected)}),m.lastSeen!==null&&n.jsx(gt,{kind:"held",caption:f,left:R(m.lastSeen)})]})}),n.jsxs("span",{style:{...Br,position:"relative"},children:[$===null?ce:i($),t&&n.jsx(Jo,{"aria-hidden":"true",children:t.word})]}),n.jsx(oe,{visuallyHidden:!0,children:t?.announce??null})]})}const Jo=h.span`
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
`,yn=h.input`
  width: 100%;
  min-width: 0;
  margin: 0;
  background: none;
  accent-color: var(--color-accent-fg);
  cursor: pointer;

  ${de}
  ${qe}
  border-radius: var(--radius-pill);

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function Qo({label:e,children:t,detail:r,tone:a="neutral",...o}){return n.jsxs(es,{...o,children:[n.jsx(ts,{children:e}),n.jsx(ns,{$tone:a,children:t}),r!=null&&n.jsx(rs,{children:r})]})}const es=h.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,ts=h.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,ns=h.dd`
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
  color: ${({$tone:e})=>Zt[e]};
`,rs=h.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function Oi({slot:e}){const t=sr(e);return t.length===0?null:n.jsx(n.Fragment,{children:t.map(r=>n.jsx(Qo,{label:r.label,detail:r.detail,tone:r.tone??"neutral",children:n.jsx(as,{entry:r})},r.id))})}function as({entry:e}){if(e.value!==void 0)return n.jsx(q,{value:e.value});if(e.text===void 0)return n.jsx(ir,{});const t=Gn(e.held);return t===null?n.jsx(n.Fragment,{children:e.text}):n.jsx(Ke,{kind:t.kind,caption:t.caption,children:e.text})}const os=12,ie=12,ss=12,At=52,X=10,Fe=4;function is(e,t,r){const a=i=>e.map(l=>Number.parseFloat(i.mark(l).replace(/[^\d.-]/g,""))),o=a(r(Fe)),s=i=>a(i).every((l,c)=>l===o[c]);if(s(t))return t;for(let i=0;i<Fe;i++){const l=r(i);if(s(l))return l}return r(Fe)}function Hi({labelSide:e="left",value:t,min:r,max:a,width:o=92,height:s=220,fillHeight:i=!1,tickStep:l,zones:c,markers:p,groundLine:f,seaLevel:x,format:y,"aria-label":v}){const u=d.useRef(null),[_,I]=d.useState(s);d.useEffect(()=>{if(!i)return;const w=u.current;if(!w)return;const C=()=>{const J=w.clientHeight;J>0&&I(J)};C();const T=new ResizeObserver(C);return T.observe(w),()=>T.disconnect()},[i]);const j=i?_:s,M=Kt(t),{shown:b,held:$,caption:m,band:R}=M,{anchor:A,tip:E}=Xn(m),z=b?.magnitude??Number.NaN,H=Number.isFinite(z)?b:null,B=r.magnitude,Q=a.magnitude,U=Q-B,g=Number.isFinite(z)?z:B,S=U>0?Math.max(B,Math.min(Q,g)):B,P=H!=null,L=pt(a,{format:y}),G=H==null?ce:ft({magnitude:g,unit:H.unit},{format:L.rung}),D=w=>ft(w),Y=[...(p??[]).flatMap(w=>w.label===void 0?[]:[w.bounds===void 0?`${w.label} ${D(w.value)}`:`${w.label} ${D(w.value)}, between ${D(w.bounds.lo)} and ${D(w.bounds.hi)}`]),...(c??[]).flatMap(w=>w.label===void 0?[]:[`${w.label} zone ${D(w.from.min(w.to))} to ${D(w.from.max(w.to))}`]),...f===void 0?[]:[`ground ${D(f)}`],...x===void 0?[]:[`sea level ${D(x)}`]],O=H==null||R===null?null:er(R,H.unit)??null,W=Math.max(0,j-ie-ss),K=w=>{if(!(U>0))return ie+W;const C=Math.max(0,Math.min(1,(w-B)/U));return ie+(1-C)*W},k=w=>K(w.magnitude),F=ie,$e=ie+W,ne=e==="right",N=ne?o-At-X:At,ue=ne?N+X+6:N-6,Je=ne?"start":"end",Qe=(w,C)=>{const T=k(w),J=w.greaterThan(a)?-1:w.lessThan(r)?1:0,fe=N-4,Me=N+X+4,Ne=N+X/2;return n.jsxs("g",{"data-level":C?"sea":"ground",children:[n.jsx("line",{x1:fe,y1:T,x2:Me,y2:T,stroke:C?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:C?1.5:2,strokeDasharray:C?"3 2":void 0}),J!==0&&n.jsx("polygon",{"data-off-scale":"true",points:`${Ne-4},${T-J*2} ${Ne+4},${T-J*2} ${Ne},${T+J*4}`,fill:C?"var(--color-info-mark)":"var(--color-text-primary)"})]})},Ae=[],_e=l?.magnitude??0;if(_e>0&&U>0){const w=Math.ceil(B/_e),C=Math.floor(Q/_e+1e-9);for(let T=w;T<=C;T++)Ae.push(T===0?0:T*_e)}const Mn=is(Ae,L,w=>pt(a,{format:y,decimals:w})),pe=K(S),Le=w=>W>0?(ie+W-w)/W:0,et=O!==null&&We(Le(pe),[Le(k(O.lo)),Le(k(O.hi))],Yn())?O:null;return n.jsxs(ls,{ref:u,...qn(M),...A,...P?{role:"meter","aria-label":lt(v,m),...it(m),"aria-valuenow":S,"aria-valuemin":B,"aria-valuemax":Q,"aria-valuetext":Y.length===0?G:`${G}; ${Y.join("; ")}`}:{role:"img","aria-label":lt(`${v}: ${G}`,m),...it(m)},style:i?{height:"100%"}:void 0,children:[n.jsxs("svg",{width:o,height:j,viewBox:`0 0 ${o} ${j}`,"aria-hidden":"true",style:i?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[n.jsx("rect",{x:N,y:F,width:X,height:W,rx:2,fill:"var(--color-surface-raised)"}),c?.map(w=>{const C=k(w.from.max(w.to)),T=k(w.from.min(w.to)),J=Math.max(0,T-C);return n.jsx("g",{children:n.jsx("rect",{x:N,y:C,width:X,height:J,fill:w.color??"var(--color-warn-mark)",opacity:.55})},`zone-${T}-${C}-${w.label??""}`)}),x!==void 0&&U>0&&Qe(x,!0),f!==void 0&&U>0&&Qe(f,!1),Ae.map(w=>{const C=K(w),T=P&&Math.abs(C-Math.max(F+4,Math.min($e-4,pe)))<os;return n.jsxs("g",{children:[n.jsx("line",{x1:ne?N+X+4:N-4,y1:C,x2:ne?N+X:N,y2:C,stroke:"var(--color-border-subtle)",strokeWidth:1}),!T&&n.jsx("text",{x:ue,y:C,textAnchor:Je,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:Mn.mark(w)})]},`tick-${w}`)}),p?.map(w=>{const{bounds:C}=w,T=k(w.value),J=w.color??"var(--color-accent-fg)";return n.jsxs("g",{"data-marker":w.label,children:[n.jsx("line",{x1:N,y1:T,x2:N+X,y2:T,stroke:J,strokeWidth:2,strokeDasharray:"2 2"}),n.jsx("polygon",{points:ne?`${N},${T} ${N-5},${T-3} ${N-5},${T+3}`:`${N+X},${T} ${N+X+5},${T-3} ${N+X+5},${T+3}`,fill:"none",stroke:J,strokeWidth:1.5}),C!==void 0&&["lo","hi"].map(fe=>{const Me=k(C[fe]);return n.jsx(st,{end:fe,x1:N,y1:Me,x2:N+X,y2:Me},fe)})]},`marker-${T}-${w.label??""}`)}),et!==null&&["lo","hi"].map(w=>{const C=k(et[w]);return n.jsx(st,{end:w,x1:N,y1:C,x2:N+X,y2:C},w)}),P&&n.jsxs(n.Fragment,{children:[n.jsx("line",{x1:N-6,y1:pe,x2:N+X+6,y2:pe,stroke:"var(--color-accent-fg)",strokeWidth:2}),n.jsxs("text",{x:ne?ue+2:ue-2,y:Math.max(F+4,Math.min($e-4,pe)),textAnchor:Je,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[L.mark(g),$&&n.jsx(Kn,{size:5})]})]}),!P&&n.jsx(Vn,{x:ne?ue+8:ue-8,y:F+W/2,size:11,children:ce}),L.symbol!==""&&n.jsx("text",{x:N+X/2,y:F-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:L.symbol})]}),E]})}const ls=h.div`
  display: block;
  max-width: 100%;
`;function Bi(e){return e.command?n.jsx(us,{...e,command:e.command}):n.jsx(ps,{...e})}const cs=h.div`
  position: relative;
  width: 100%;

`,ds=h.span`
  position: absolute;
  inset-block: 0;
  inset-inline-end: var(--gap-related);
  display: flex;
  align-items: center;
  pointer-events: none;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
`;function us({label:e,value:t,command:r,unavailable:a,invalid:o,placeholder:s,maxLength:i,"data-testid":l}){const c=d.useId(),p=`${c}-invalid`,f=Ce({command:r,unavailable:a}),[x,y]=d.useState(null),v=!f.control.isSent,u=f.control.isRefused||f.control.isLost;d.useEffect(()=>{u&&y(null)},[u]),d.useEffect(()=>{v&&!u&&y(I=>I===t?null:I)},[v,u,t]);const _=()=>{x===null||x===t||f.inert||f.send(x)};return n.jsxs(Te,{children:[n.jsx(be,{htmlFor:c,children:e}),n.jsx(te,{text:f.tip,children:n.jsxs(cs,{children:[n.jsx(we,{...f.edge,"aria-describedby":o==null?void 0:p,"aria-invalid":o==null?void 0:!0,"data-testid":l,id:c,maxLength:i,onBlur:_,onChange:I=>y(I.target.value),onKeyDown:I=>{I.key==="Enter"&&_()},placeholder:s,type:"text",value:x??t}),n.jsx(ds,{"aria-hidden":"true",children:f.word}),n.jsx(oe,{visuallyHidden:!0,children:f.announce})]})}),o!=null&&n.jsx(Ve,{id:p,children:n.jsx(ae,{size:"xs",tone:"warn",children:o})})]})}function ps({label:e,value:t,onChange:r,invalid:a,placeholder:o,maxLength:s,disabled:i,"data-testid":l}){const c=d.useId(),p=`${c}-invalid`;return n.jsxs(Te,{children:[n.jsx(be,{htmlFor:c,children:e}),n.jsx(we,{"aria-describedby":a==null?void 0:p,"aria-invalid":a==null?void 0:!0,"data-testid":l,disabled:i,id:c,maxLength:s,onChange:f=>r(f.target.value),placeholder:o,type:"text",value:t}),a!=null&&n.jsx(Ve,{id:p,children:n.jsx(ae,{size:"xs",tone:"warn",children:a})})]})}const fs=112;function hs(e,t){try{return ye(e,1).in(t).magnitude}catch{return Number.NaN}}function ms(e,t){let r=e;return t.map((a,o)=>{if(!Number.isFinite(a)||a===0)return 0;const s=o===t.length-1?r/a:Math.trunc(r/a);return r-=s*a,s})}function Wi({value:e,unit:t,onChange:r,label:a,rungs:o,range:s,rate:i,disabled:l}){const c=d.useId(),{shown:p,held:f,caption:x}=Kt(e),y=f?n.jsx(Ke,{caption:x,children:a}):a,v=s,u=p?p.magnitude:Number.NaN,[_,I]=d.useState({}),j=m=>_[m]??null,M=(m,R)=>I(A=>({...A,[m]:R})),b=i?n.jsxs(re,{gap:"related-packed",children:[n.jsx(La,{mode:"rate","aria-label":`${a} rate`,value:u,step:i.step,stepsPerSecond:i.stepsPerSecond,disabled:l||!Number.isFinite(u),format:ze(t)?xs:void 0,width:ze(t)?fs:void 0,onChange:m=>r(he(t,m))}),n.jsx(ae,{level:"faint",size:"sm",children:`${i.step} ${gs(t)} / notch`})]}):null;if(ze(t))return n.jsxs(He,{children:[n.jsx(Nt,{"aria-hidden":"true",children:y}),n.jsxs(re,{gap:"related-dense",children:[n.jsx(ao,{label:f&&x!==null?`${a}, ${x}`:a,value:Number.isFinite(u)?u:null,disabled:l,steps:i?[]:void 0,onChange:m=>r(he(t,m))}),b]})]});if(o&&o.length>0){const m=o.map(E=>hs(String(E),t)),R=ms(u,m),A=(E,z)=>{const H=Oe(z);if(H===void 0){M(E,{text:z,against:R[E]});return}const B=R.map(U=>Number.isFinite(U)?U:0);B[E]=H;const Q=B.reduce((U,g,S)=>Number.isFinite(m[S])?U+g*m[S]:U,0);M(E,{text:z,against:H}),r(he(t,Q))};return n.jsxs(He,{children:[n.jsx(Nt,{id:`${c}-label`,children:y}),n.jsx(ys,{role:"group","aria-labelledby":`${c}-label`,children:o.map((E,z)=>n.jsxs(js,{children:[n.jsx($s,{type:"number",disabled:l,"aria-label":`${a} ${String(E)}`,value:Lt(j(z),R[z]),onChange:H=>A(z,H.target.value)}),n.jsx(Pt,{"aria-hidden":"true",children:String(E)})]},String(E)))}),b]})}const $=m=>{const R=Oe(m);M(0,{text:m,against:R??u}),R!==void 0&&r(he(t,R))};return n.jsxs(He,{children:[n.jsx(bs,{htmlFor:c,children:y}),n.jsxs(ws,{children:[n.jsx($n,{id:c,type:"number",disabled:l,min:v?.min,max:v?.max,step:v?.step,value:Lt(j(0),u),onChange:m=>$(m.target.value)}),n.jsx(Pt,{"aria-hidden":"true",children:t})]}),v?n.jsx(qo,{disabled:l,"aria-label":`${a} slider`,min:v.min,max:v.max,step:v.step??(v.max-v.min)/100,value:Number.isFinite(u)?u:v.min,onChange:m=>r(he(t,Oe(m.target.value)??v.min))}):null,b]})}function Lt(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(vs(t)):""}function gs(e){return Vt(e)??e}function ze(e){return Vt(e)==="s"}function xs(e){if(!Number.isFinite(e))return"";const{day:t,hour:r,minute:a,second:o}=dn(e),s=i=>String(i).padStart(2,"0");return`D${t} ${s(r)}:${s(a)}:${s(o)}`}function Oe(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function vs(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const He=h.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,jn=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,bs=h.label`
  ${jn}
`,Nt=h.span`
  ${jn}
`,ws=h.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,$n=h.input`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-field-compact);
  border-radius: var(--radius-regular);
  text-align: right;
  font-variant-numeric: tabular-nums;
  min-width: 0;

  ${de}
`,Pt=h.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,ys=h.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,js=h.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,$s=h($n)`
  width: 4.5em;
`,_s=200;function Dt(e={}){const t=e.quietMs??_s;let r=null,a=Number.NEGATIVE_INFINITY,o=!0;return{wheel(s,i){return(r===null||s-a>t)&&(r=i&&o?"diagram":"page"),a=s,r},pageScrolled(){o=!1},pointerMovedInside(){o=!0},yieldToPage(){r="page"},get owner(){return r}}}const Ms=16,ks=400,Ft=120,Es=Math.log(1.15)/100,Rs=.01;function Is(e,t,r){const a=t===1?e*Ms:t===2?e*ks:e,o=Math.max(-Ft,Math.min(Ft,a)),s=r&&Math.abs(a)<40?Rs:Es;return Math.exp(-o*s)}function Ss(e,t,r={}){const{quietMs:a}=r,o=d.useRef(Dt({quietMs:a}));d.useEffect(()=>{o.current=Dt({quietMs:a})},[a]);const[s,i]=d.useState(null);d.useEffect(()=>{e.current!==s&&i(e.current)}),d.useEffect(()=>{if(!s||!t)return;const l=u=>u instanceof Node&&s.contains(u);let c=null;const p=(u,_)=>c!==null&&(Math.abs(u-c.x)>=1||Math.abs(_-c.y)>=1),f=u=>{c={x:u.clientX,y:u.clientY},!(u.ctrlKey||u.metaKey)&&o.current.wheel(performance.now(),l(u.target))},x=u=>{const _=p(u.clientX,u.clientY);c={x:u.clientX,y:u.clientY},_&&l(u.target)&&o.current.pointerMovedInside()},y=u=>{const _=u.target;(_===document||_ instanceof Node&&_.contains(s))&&o.current.pageScrolled()},v=u=>{const _=u.ctrlKey||u.metaKey;if(!_&&o.current.owner!=="diagram")return;const I=s.getBoundingClientRect(),j=Is(u.deltaY,u.deltaMode,_);if(t(j,u.clientX-I.left,u.clientY-I.top)===!1&&!_){o.current.yieldToPage();return}u.preventDefault()};return window.addEventListener("wheel",f,{capture:!0,passive:!0}),window.addEventListener("pointermove",x,{capture:!0,passive:!0}),window.addEventListener("scroll",y,{capture:!0,passive:!0}),s.addEventListener("wheel",v,{passive:!1}),()=>{window.removeEventListener("wheel",f,{capture:!0}),window.removeEventListener("pointermove",x,{capture:!0}),window.removeEventListener("scroll",y,{capture:!0}),s.removeEventListener("wheel",v)}},[s,t])}const Ts="Arrow keys pan, + and - zoom, 0 resets",Cs=.15,zt=1.25,As={zoom:1,panX:0,panY:0};function Ui(e={}){const{home:t=As,zoomAbout:r="pointer",panThreshold:a=3,enabled:o=!0}=e,[s,i]=d.useState(t),l=d.useRef({camera:s,options:e,home:t});l.current={camera:s,options:e,home:t};const c=d.useRef(null),p=e.elementRef??c,f=d.useCallback(()=>{const g=p.current?.getBoundingClientRect();return{w:g?.width??0,h:g?.height??0}},[]),x=d.useCallback(g=>{const{constrain:S}=l.current.options,P=f(),L=S&&P.w>0&&P.h>0?S(g,P):g;return l.current.camera=L,i(L),L},[f]),y=d.useCallback(g=>{x(typeof g=="function"?g(l.current.camera):g)},[x]),v=d.useCallback((g,S,P)=>{const L=l.current.camera,{minZoom:G=.1,maxZoom:D=50}=l.current.options,Y=typeof G=="function"?G(L):G,O=Math.max(Math.min(Y,L.zoom),Math.min(Math.max(D,L.zoom),L.zoom*g));if(O===L.zoom)return!1;const{w:W,h:K}=f();if(r==="centre")x({...L,zoom:O});else{const k=(S-W/2)/L.zoom+L.panX,F=(P-K/2)/L.zoom+L.panY;x({zoom:O,panX:k-(S-W/2)/O,panY:F-(P-K/2)/O})}return l.current.options.onManualMove?.("zoom"),!0},[x,f,r]);Ss(p,d.useMemo(()=>o?v:null,[o,v]));const u=d.useCallback(()=>{l.current.options.onManualMove?.("reset"),x(l.current.home)},[x]),_=d.useCallback(g=>{const{w:S,h:P}=f();v(g,S/2,P/2)},[f,v]),[I,j]=d.useState(null),M=d.useRef(new Map),b=d.useRef(null),$=d.useRef(null),m=d.useRef(null),R=d.useRef(!1),[A,E]=d.useState(!1),z=d.useCallback(g=>{if(l.current.options.enabled!==!1&&!(g.pointerType==="mouse"&&g.button!==0)){if(M.current.set(g.pointerId,{x:g.clientX,y:g.clientY}),M.current.size===2){const[S,P]=[...M.current.values()];b.current=null,$.current=Math.hypot(S.x-P.x,S.y-P.y);return}R.current=!1,m.current={x:g.clientX,y:g.clientY},b.current={x:g.clientX,y:g.clientY},$.current=null}},[]),H=d.useCallback(g=>{if(!M.current.has(g.pointerId))return;if(g.pointerType==="mouse"&&g.buttons===0){M.current.delete(g.pointerId),M.current.size===0&&(b.current=null,m.current=null,$.current=null,E(!1));return}if(M.current.set(g.pointerId,{x:g.clientX,y:g.clientY}),M.current.size>=2){const[Y,O]=[...M.current.values()],W=Math.hypot(Y.x-O.x,Y.y-O.y),K=$.current;if($.current=W,K===null||K===0)return;const k=p.current?.getBoundingClientRect();R.current=!0,v(W/K,(Y.x+O.x)/2-(k?.left??0),(Y.y+O.y)/2-(k?.top??0));return}const S=m.current,P=b.current;if(!S||!P||!R.current&&Math.hypot(g.clientX-S.x,g.clientY-S.y)<a)return;R.current||(R.current=!0,E(!0),g.currentTarget.setPointerCapture?.(g.pointerId));const L=g.clientX-P.x,G=g.clientY-P.y;b.current={x:g.clientX,y:g.clientY};const D=l.current.camera;l.current.options.onManualMove?.("pan"),x({...D,panX:D.panX-L/D.zoom,panY:D.panY-G/D.zoom})},[x,a,v]),B=d.useCallback(g=>{if(M.current.delete(g.pointerId),g.currentTarget.releasePointerCapture?.(g.pointerId),M.current.size===1){const[S]=[...M.current.values()];b.current={...S},m.current={...S},$.current=null;return}M.current.size===0&&(b.current=null,m.current=null,$.current=null,E(!1))},[]),Q=d.useCallback(g=>{if(l.current.options.enabled===!1||g.target!==g.currentTarget||g.ctrlKey||g.metaKey||g.altKey)return;const S=l.current.camera,{w:P,h:L}=f(),G=(D,Y)=>{const O=(D==="panX"?P:L)/S.zoom;l.current.options.onManualMove?.("pan"),x({...S,[D]:S[D]+Y*O*Cs})};switch(g.key){case"ArrowLeft":G("panX",-1);break;case"ArrowRight":G("panX",1);break;case"ArrowUp":G("panY",-1);break;case"ArrowDown":G("panY",1);break;case"+":case"=":_(zt);break;case"-":case"_":_(1/zt);break;case"0":u();break;default:return}g.preventDefault()},[x,u,f,_]);return{camera:s,setCamera:y,reset:u,zoomBy:_,viewportProps:{ref:p,tabIndex:0,role:"group",onPointerDown:z,onPointerMove:H,onPointerUp:B,onPointerCancel:B,onFocus:g=>{g.target===g.currentTarget&&g.currentTarget.matches(":focus-visible")&&j(Ts)},onBlur:()=>j(null),onKeyDown:Q,style:{touchAction:"none",cursor:A?"grabbing":"grab"}},didPan:()=>R.current,isDragging:A,hint:I}}const Ot="(prefers-reduced-motion: reduce)";function Gi(){const[e,t]=d.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(Ot).matches);return d.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const r=window.matchMedia(Ot),a=()=>t(r.matches);return a(),r.addEventListener("change",a),()=>r.removeEventListener("change",a)},[]),e}const _n=d.createContext(null);function Xi({widget:e,scope:t,children:r}){const a=d.useMemo(()=>({widget:e,scope:t}),[e,t]);return n.jsx(_n.Provider,{value:a,children:r})}function Yi(e){const t=d.useContext(_n);if(!(!t||t.widget!==e))return t.scope}function Ki(e){if(e.length===0)return[];const t=[[e[0]]];for(let r=1;r<e.length;r++)Ps(e[r-1],e[r])?t.push([e[r]]):t[t.length-1].push(e[r]);return t}function Vi(e,t,r,a){if(e.length===0||!(t>0))return[];const o=[e[0].x];let s=o[0],i=o[0];for(let l=1;l<e.length;l++){const c=o[l-1],p=c+Ns(e[l].x-c,t);o.push(p),p<s&&(s=p),p>i&&(i=p)}return Ls(s,i,r,a,t).map(l=>e.map((c,p)=>({...c,x:o[p]+l})))}function Ls(e,t,r,a,o){if(!(o>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((r-t)/o),i=Math.floor((a-e)/o),l=[];for(let c=s;c<=i;c++)l.push(c*o+0);return l}function Ns(e,t){const r=t/2;return((e+r)%t+t)%t-r}function Ps(e,t){const r=Ht(e),a=Ht(t),o=Fs(r,a);if(o===0)return!1;const s=Bt(Ds(r,a));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=o)return!1;const l=[0,0,e.lat+t.lat>=0?1:-1],c=Bt(zs(l,s));if(c===null)return!1;const p=xe(r,a);return xe(r,c)>p&&xe(a,c)>p}function Ht({lat:e,lon:t}){const r=e*Math.PI/180,a=t*Math.PI/180,o=Math.cos(r);return[o*Math.cos(a),o*Math.sin(a),Math.sin(r)]}function xe(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Ds(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Fs(e,t){return Math.acos(Math.max(-1,Math.min(1,xe(e,t))))}function zs(e,t){const r=xe(e,t);return[e[0]-r*t[0],e[1]-r*t[1],e[2]-r*t[2]]}function Bt(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{Qo as $,ri as A,si as B,li as C,mi as D,yi as E,ya as F,qa as G,_i as H,Mr as I,La as J,Li as K,Mi as L,pi as M,ln as N,Ti as O,Ci as P,to as Q,cn as R,eo as S,Ni as T,Pi as U,Ka as V,Di as W,hn as X,zi as Y,di as Z,qo as _,Va as a,Oi as a0,Ei as a1,Hi as a2,Ja as a3,Bi as a4,go as a5,Wi as a6,Xi as a7,ci as a8,_r as a9,Dr as aa,Dt as ab,la as ac,ji as ad,Ls as ae,Fi as af,Ki as ag,Ui as ah,Gi as ai,ui as aj,Ss as ak,Yi as al,St as am,Is as an,Vi as ao,Qa as b,ai as c,oi as d,Ii as e,ii as f,tn as g,fi as h,hi as i,gi as j,xi as k,vi as l,bi as m,wi as n,$i as o,Ri as p,ee as q,Si as r,ki as s,Za as t,ao as u,co as v,ro as w,no as x,Ai as y,sn as z};
