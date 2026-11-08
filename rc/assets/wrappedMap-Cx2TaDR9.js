import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./ext-react-C0MU9AHG.js";import p,{css as Y}from"./ext-styled-components-DAuodqsN.js";import{t as dn,e as pn}from"./TinyEssentials-DC09WqCq.js";import{E as Tt,c0 as At,ag as de,a7 as Fe,b_ as pe,ak as fn,ai as Oe,n as hn,F as Ct,m as ze,y as Lt,b2 as mn,bV as Ye,c1 as gn,$ as be,ac as Q,c2 as xn,bF as vn,aR as Ve,bY as bn,c3 as Nt,bZ as Ke,g as wn,aj as ae,e as Ae,Z as yn,aN as $n,aq as Ze,bB as Ce,bO as jn,bN as _n,aD as He,ah as Pt,bm as Mn,V as kn,l as En,c4 as Dt,af as Rn,bl as In,ad as Ft,bK as Sn,bt as Tn,bT as qe,aJ as An,c5 as Cn,bU as Je,bA as Qe,ae as Ln}from"./ModalSaveBar-CzxpvWL8.js";import{aH as ke,b0 as et,aW as $e,aj as Nn,c6 as Pn,cH as Dn,a_ as Be,l as Fn,cm as le,c5 as Ot}from"./view-clock-formula-CTXEe_iu.js";import"./ksp-enum-names-C2emOl4S.js";import"./logger-2_QM1wvD.js";import"./screen-xSNIXJyh.js";import{Z as fe,N as re,_ as zt,$ as On,y as tt,B as zn,j as Ht,a0 as Hn,e as we,k as Le,U as Bn,g as Gn,Y as Bt,E as Un,c as Wn,u as nt,x as rt}from"./contributionsRead-CM3j96VZ.js";import{a as Xn,r as Yn,b as Vn}from"./Notice-CRdKa-4Y.js";import{r as Kn}from"./ext-react-dom-DCF8ZnaJ.js";import{l as Zn}from"./capability-lock-n-GFLm13.js";import"./lagrange-ZMxIvHjf.js";import"./use-transmissions-CvR7tw53.js";import{r as qn}from"./control-frame-to-read-frame-tdtua0xe.js";function gs({items:e,onSelect:t,onDismiss:n,"aria-label":a,style:o,header:s,footer:i,emptyLabel:l="No actions",otherLabel:d="Other"}){const f=u.useRef(null),h=u.useId(),[x,_]=u.useState(0),b=dn(e,d),c=b.flatMap(([,v])=>v),$=c.length;u.useEffect(()=>{const v=f.current;if(!v)return;if($===0){v.focus();return}v.querySelectorAll('[role="menuitem"]')[x]?.focus()},[x,$]),u.useEffect(()=>{const v=w=>{const M=f.current;M&&w.target instanceof Node&&!M.contains(w.target)&&n()};return document.addEventListener("pointerdown",v),()=>document.removeEventListener("pointerdown",v)},[n]);const S=u.useCallback(v=>{if(v.key==="Escape"){v.stopPropagation(),n();return}if(v.key==="Tab"){n();return}if(c.length!==0)switch(v.key){case"ArrowDown":v.preventDefault(),_(w=>Math.min(w+1,c.length-1));break;case"ArrowUp":v.preventDefault(),_(w=>Math.max(w-1,0));break;case"Home":v.preventDefault(),_(0);break;case"End":v.preventDefault(),_(c.length-1);break}},[c.length,n]);return r.jsxs(tr,{ref:f,role:$>0?"menu":void 0,"aria-label":a,onKeyDown:S,tabIndex:-1,style:o,children:[s,c.length===0?r.jsx(Tt,{layout:"fill",children:l}):b.map(([v,w],M)=>r.jsxs("div",{...b.length>1?{role:"group","aria-labelledby":`${h}-group-${M}`}:{role:"none"},children:[b.length>1?r.jsx(nr,{id:`${h}-group-${M}`,"aria-hidden":"true",children:v}):null,w.map(j=>{const y=c.indexOf(j);return j.command?r.jsx(Jn,{item:j,command:j.command,tabIndex:y===x?0:-1,onFocus:()=>_(y),onSelect:t},j.key):r.jsx(Gt,{type:"button",role:"menuitem","aria-label":j["aria-label"],"aria-disabled":j.disabled,$disabled:j.disabled,tabIndex:y===x?0:-1,onFocus:()=>_(y),onClick:()=>{j.disabled||t(j.key)},children:j.label},j.key)})]},v)),i]})}function Jn({item:e,command:t,tabIndex:n,onFocus:a,onSelect:o}){const s=At({command:t,unavailable:e.unavailable}),{control:i}=s,l=u.useRef(!1),d=i.command.handle.railed===!0,f=e.confirmLabel!==void 0;u.useEffect(()=>{l.current&&!d&&!i.isSent&&(l.current=!1,o(e.key))},[i.isSent,d,o,e.key]);const h=s.word??(i.isArmed?e.confirmLabel:null);return r.jsxs(r.Fragment,{children:[r.jsx(de,{text:s.tip,children:r.jsxs(Gt,{type:"button",role:"menuitem","aria-label":e["aria-label"],"aria-disabled":e.disabled||s.inert||void 0,$disabled:e.disabled||s.inert,tabIndex:n,onFocus:a,"data-command-edge":s.edge["data-command-edge"],"data-command-phase":s.edge["data-command-phase"],"data-stream":s.edge["data-stream"],"data-predicted":s.edge["data-predicted"],onClick:()=>{if(e.disabled||s.inert)return;const x=i.isArmed;i.press(f),!(f&&!x)&&(d?o(e.key):l.current=!0)},children:[r.jsx(Qn,{children:e.label}),r.jsx(er,{"aria-hidden":"true",children:h})]})}),r.jsx(Fe,{visuallyHidden:!0,children:s.announce})]})}const Qn=p.span`
  flex: 1;
`,er=p.span`
  min-width: ${Oe};
  text-align: end;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
`,tr=p.div`
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
`,nr=p.div`
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--inset-menu-group-label);
`,Gt=p.button`
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

  ${pe}
  /* The background marks the focused row where the ring meets the menu border. */
  &:focus-visible {
    background: var(--color-border-subtle);
  }

  &[aria-disabled="true"] {
    color: var(--color-text-faint);
    cursor: default;
  }

  ${fn}

  @media (pointer: coarse) {
    min-height: var(--touch-target);
  }
`;function xs({settings:e,values:t,onChange:n}){return e.length===0?null:r.jsx(r.Fragment,{children:e.flatMap(a=>a.fields.map(o=>{const i=t?.[a.namespace]?.[o.key]??o.default,l=o.label??o.key,d=`augment-setting-${a.namespace}-${o.key}`;return o.type===ke.Bool?r.jsx(hn,{children:r.jsx(pn,{checked:!!i,onChange:f=>n(a.namespace,o.key,f),label:l})},`${a.namespace}.${o.key}`):r.jsxs(Ct,{children:[r.jsx(ze,{htmlFor:d,children:l}),r.jsx(Lt,{id:d,type:o.type===ke.Number?"number":"text",value:i===void 0?"":String(i),onChange:f=>{const h=f.target.value;if(o.type!==ke.Number){n(a.namespace,o.key,h);return}if(h===""){n(a.namespace,o.key,void 0);return}const x=Number(h);Number.isFinite(x)&&n(a.namespace,o.key,x)}})]},`${a.namespace}.${o.key}`)}))})}function vs({fallback:e,gap:t="related-dense",children:n,...a}){return r.jsxs(r.Fragment,{children:[r.jsx(Ut,{$gap:t,...a,children:n}),r.jsx(rr,{children:e})]})}const Ut=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>fe[e]};
`,rr=p.div`
  ${Ut}:not(:empty) + & {
    display: none;
  }
`,at=12,ge=8;function ar(e,t,n){return{left:ot(e.x,t.w,n.w),top:ot(e.y,t.h,n.h)}}function ot(e,t,n){const a=e+at;if(a+t<=n-ge)return a;const o=e-at-t;return o>=ge?o:Math.max(ge,n-ge-t)}const or="–";function bs({min:e,max:t,wrapsAt:n,className:a,...o}){const s=et(e),i=et(t);return e==null||t==null||s===null||i===null?r.jsx(ye,{className:a,children:re}):n!==void 0&&Math.abs(i-s)>=n/2?r.jsx(ye,{className:a,children:"(precesses)"}):r.jsx(mn,{of:e.unit,separate:!0,...o,children:r.jsx(sr,{min:e,max:t,className:a})})}function sr({min:e,max:t,className:n}){return Ye(e),Ye(t),gn(e)?r.jsx(ye,{className:n,children:r.jsxs(lr,{children:[r.jsx("span",{"aria-hidden":"true",children:"~"}),r.jsx(be,{children:"approximately "}),r.jsx(Q,{value:e})]})}):r.jsxs(ye,{className:n,children:[r.jsx(Q,{value:e}),r.jsx(ir,{"aria-hidden":"true",children:or}),r.jsx(be,{children:" to "}),r.jsx(Q,{value:t})]})}const ye=p.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,ir=p.span`
  color: var(--color-text-faint);
`,lr=p.span`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
`,cr={app:"var(--color-surface-app)",panel:"var(--color-surface-panel)",raised:"var(--color-surface-raised)",sunken:"var(--color-surface-sunken)"};function ws({surface:e,pad:t,bordered:n=!1,radius:a,children:o,...s}){return r.jsx(ur,{$surface:e,$pad:t,$bordered:n,$radius:a,...s,children:o})}const ur=p.div`
  ${({$surface:e})=>e&&`background: ${cr[e]};`}
  ${({$bordered:e})=>e&&"border: 1px solid var(--color-border-subtle);"}
  ${({$radius:e})=>e&&`border-radius: ${zt[e]};`}
  ${({$pad:e})=>e&&`padding: var(${On[e]});`}
`,ys=u.forwardRef(function({equalWidth:t=!0,gap:n,children:a,...o},s){return r.jsx(dr,{ref:s,$equalWidth:t,$gap:n,...o,children:a})}),dr=p.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({$equalWidth:e})=>e?"1fr":"auto"};
  align-items: stretch;
  width: max-content;
  max-width: 100%;
  gap: ${({$gap:e})=>e?fe[e]:"var(--gap-related)"};
`,pr="3px",fr=p(Vn)`
  --gap-related: var(--gap-related-compact);
  --gap-section: var(--gap-section-compact);
  --bleed-inline: 0px;

  position: relative;
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  ${({$standalone:e})=>e?"padding: var(--inset-surface-standalone);":"padding: var(--inset-surface);"}
  ${({$tone:e})=>e?`border-left: 2px solid ${tt(e)};`:""}
  ${({$identityColor:e})=>e?`
    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: var(--size-mark);
      height: ${pr};
      background: ${e};
      border-radius: var(--radius-regular) var(--radius-regular) 0 0;
    }
  `:""}
  ${({$dimmed:e,$tone:t})=>e?`
    --color-text-primary: var(--color-text-muted);
    color: var(--color-text-muted);
    ${t?`border-left-color: color-mix(in srgb, ${tt(t)} 50%, transparent);`:""}
    &::before {
      opacity: 0.5;
    }
  `:""}
`;function hr({tone:e,dimmed:t,identityColor:n,standalone:a,...o}){return Yn(fr,{...o,$tone:e,$dimmed:t,$identityColor:n,$standalone:a})}const $s=Object.assign(hr,Xn);function js({oneWaySeconds:e,delayReading:t,className:n}){const a=$e("s",e);return r.jsxs(mr,{className:n,role:"group","aria-label":"Signal delay",children:["one-way ~",r.jsx(Q,{value:xn(a,t),...a.lessThan(60)?{scale:"never",decimals:1}:{}})]})}const mr=p.div`
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
`;function _s(e){const t=vn(),n=u.useId(),a=e!==null;u.useEffect(()=>{if(!(!t||!e))return t.register({id:n,...e})},[t,n,a]),u.useEffect(()=>{!t||!e||t.update(n,e)},[t,n,e])}function gr(e,t,n){return Math.abs(e-t)<n/10}function xr({commanded:e,expected:t,lastSeen:n,step:a}){const o=(l,d)=>l!=null&&d!=null&&gr(l,d,a),s=n??null;return{expected:t!=null&&!o(t,e)&&!o(t,s)?t:null,lastSeen:s,onCommanded:o(s,e)}}function Wt({kind:e}){return r.jsx("svg",{"aria-hidden":"true",width:it,height:it,viewBox:"0 0 16 16",style:{display:"block",overflow:"visible"},children:e==="held"?r.jsx("rect",{x:"2",y:"2",width:"12",height:"12",style:lt.held}):r.jsx("polygon",{points:"8,1.5 14.8,14 1.2,14",style:lt.modelled})})}function st({kind:e,caption:t,left:n}){return r.jsxs("span",{"data-role":e==="modelled"?"expected":"last-seen","data-reckoning-mark":e,style:{...yr,left:n},children:[r.jsx(Wt,{kind:e}),r.jsx(be,{children:t})]})}function Ms({kind:e,caption:t,main:n=!1,children:a}){return r.jsxs("span",{"data-role":e==="modelled"?"expected":"last-seen","data-reckoning-mark":e,"data-held":e==="held"?"":void 0,style:n?jr:_r,children:[r.jsx(Wt,{kind:e}),a,r.jsxs(be,{"data-unit-currency":"",children:[", ",t]})]})}const vr={display:"flex",alignItems:"center",gap:"var(--gap-related)"},br={flex:1,position:"relative",display:"flex",alignItems:"center"},wr={width:"100%"},yr={position:"absolute",top:"50%",transform:"translate(-50%, -50%)",display:"flex",pointerEvents:"none"},it=16,lt={held:{fill:Ve.held.color,stroke:"var(--color-surface-app)",strokeWidth:3,paintOrder:"stroke"},modelled:{fill:Ve.modelled.color,stroke:"var(--color-surface-app)",strokeWidth:3,strokeLinejoin:"round",paintOrder:"stroke"}},$r={fontSize:"var(--font-size-compact)",color:"var(--color-text-primary)",fontVariantNumeric:"tabular-nums",minWidth:"36px",textAlign:"right"},jr={display:"inline-flex",alignItems:"center",gap:"var(--gap-figure-parts)"},_r={display:"inline-flex",alignItems:"center",gap:"var(--gap-figure-parts)",fontSize:"var(--font-size-caption)",color:"var(--color-text-faint)"};function ks({at:e,atAspect:t,narrow:n,wide:a,children:o,...s}){return r.jsx(kr,{$query:Mr(e,t),$narrow:n,$wide:a,...s,children:o})}function Mr(e,t){const n=[e===void 0?void 0:`(min-width: ${e}px)`,t===void 0?void 0:`(aspect-ratio >= ${t})`].filter(a=>a!==void 0);return n.length===0?void 0:n.join(" and ")}const kr=p.div`
  ${({$narrow:e})=>e}
  ${({$query:e,$wide:t})=>e===void 0?"":Y`
          @container ${e} {
            ${t}
          }
        `}
`;function Es({slot:e,component:t,filter:n}){const a=zn(e),o=n?a.filter(n):a;return o.length===0?null:r.jsx(t,{entries:o})}function Rs({label:e,lead:t,children:n,tone:a="neutral",aligned:o=!1,...s}){const i=u.useContext(Xt);return r.jsxs(Rr,{$aligned:o,$grouped:o&&i,...s,children:[r.jsx(Ir,{children:e}),r.jsxs(Sr,{$tone:a,children:[t,n]})]})}const Xt=u.createContext(!1);function Is({children:e,...t}){return r.jsx(Er,{...t,children:r.jsx(Xt.Provider,{value:!0,children:e})})}const Ne="1.5ch",Er=p.div`
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  column-gap: ${Ne};
  container-type: inline-size;
  min-width: 0;

  @container (max-width: 15rem) {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 0.5em;
  }
`,Rr=p.div`
  align-items: baseline;
  gap: var(--gap-data-line);
  min-width: 0;
  ${({$aligned:e,$grouped:t})=>e?t?Y`
        display: grid;
        column-gap: ${Ne};
        grid-column: 1 / -1;
        grid-template-columns: subgrid;
      `:Y`
      display: flex;
      flex-wrap: wrap;
      column-gap: ${Ne};
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
`,Ir=p.span`
  font-size: var(--font-size-caption);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,Sr=p.span`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--gap-data-line);
  font-size: var(--font-size-value);
  font-variant-numeric: tabular-nums;
  min-width: 0;
  color: ${({$tone:e})=>Ht[e]};
`;function Tr(e,t){return e.value!==void 0?r.jsx(Q,{value:e.value(t)??null}):e.render(t)}function Ss({columns:e,rows:t,sections:n,rowKey:a,caption:o,empty:s,rowDetail:i,className:l}){const d=n??(t?[{id:"",title:null,rows:[...t]}]:[]),f=d.reduce((c,$)=>c+$.rows.length,0),[h,x]=u.useState(null),_=bn(h),b=Nt(h);return r.jsxs(Ar,{className:l,children:[r.jsx(Cr,{ref:x,tabIndex:b,children:r.jsxs(Lr,{children:[r.jsx(Nr,{children:o}),r.jsx("thead",{children:r.jsx("tr",{children:e.map(c=>r.jsx(Pr,{scope:"col",$align:c.align??"start",style:{width:c.width,minWidth:c.minWidth},children:c.header},c.key))})}),f===0&&s!==void 0&&r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx(Hr,{colSpan:e.length,children:s})})}),d.map(c=>r.jsxs("tbody",{children:[c.title!==null&&c.title!==void 0&&r.jsx("tr",{children:r.jsx(Dr,{scope:"rowgroup",colSpan:e.length,children:c.title})}),c.rows.map($=>{const S=a($),v=i?.($),w=v!=null&&v!==!1&&v!=="";return r.jsxs(u.Fragment,{children:[r.jsx(Fr,{$hasDetail:w,children:e.map(M=>r.jsx(Or,{as:M.rowHeader?"th":void 0,scope:M.rowHeader?"row":void 0,$align:M.align??"start",children:Tr(M,$)},M.key))}),w?r.jsx("tr",{children:r.jsx(zr,{colSpan:e.length,children:v})}):null]},S)})]},c.id))]})}),r.jsx(Ke,{$position:"left",$visible:_.left}),r.jsx(Ke,{$position:"right",$visible:_.right})]})}const Ar=p.div`
  position: relative;
  min-width: 0;
  margin-inline: calc(-1 * var(--bleed-inline));
`,Cr=p.div`
  display: flex;
  padding-inline: var(--bleed-inline);
  overflow-x: auto;
  min-width: 0;
  ${pe}
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Lr=p.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-compact);
`,Nr=p.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,Pr=p.th`
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
`,Dr=p.th`
  text-align: start;
  background: var(--color-surface-raised);
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--inset-table-section);
  border-bottom: 1px solid var(--color-border-subtle);
`,Fr=p.tr`
  &:not(:last-child) > td,
  &:not(:last-child) > th {
    border-bottom: ${({$hasDetail:e})=>e?"none":"1px solid var(--color-border-subtle)"};
  }
`,Or=p.td`
  text-align: ${({$align:e})=>e};
  font-weight: inherit;
  color: var(--color-text-primary);
  padding: var(--inset-table-cell);
  font-variant-numeric: tabular-nums;
  vertical-align: baseline;
`,zr=p.td`
  padding: var(--inset-table-detail);
  border-bottom: 1px solid var(--color-border-subtle);
`,Hr=p.td`
  color: var(--color-text-faint);
  font-style: italic;
  padding: var(--inset-table-empty);
`;function Br(e){const t=e.reason;switch(t){case"beyond-horizon":return e.resolvesByWaiting?"NOT YET COMPUTED":"CANNOT MODEL";case"under-physics":case"model-inapplicable":case"contested":case"insufficient-history":return"CANNOT MODEL";case"frame-unavailable":return"FRAME UNAVAILABLE";case"input-absent":return null;default:return t}}function Ts({declined:e,layout:t="inline"}){return r.jsx(de,{text:e.note,focusable:!0,children:r.jsx(Tt,{role:"status",layout:t,children:Br(e)??"NO DATA"})})}function As({label:e,children:t,"aria-label":n,className:a,variant:o="popover",panelHeight:s="cap",chevron:i=!0,asButton:l=!1,buttonSize:d="md",defaultOpen:f=!1}){const[h,x]=u.useState(f),_=u.useId(),b=u.useRef(null),[c,$]=u.useState(null),S=Nt(c),v=o==="inline"&&i,w=typeof e=="function"?e(h):e,M={ref:b,type:"button","aria-expanded":h,"aria-controls":_,"aria-label":n,onClick:()=>x(y=>!y)},j=r.jsxs(r.Fragment,{children:[w,v&&r.jsx(Xr,{$open:h,children:r.jsx(wn,{size:"var(--icon-size-control)"})})]});return r.jsxs(Gr,{className:a,$variant:o,onKeyDown:y=>{y.key==="Escape"&&h&&(x(!1),b.current?.focus())},children:[l?r.jsx(Wr,{...M,variant:"ghost",size:d,$inline:o==="inline",children:j}):r.jsx(Ur,{...M,$variant:o,$align:o==="inline"&&!i?"end":"between",children:j}),h&&r.jsx(Yr,{ref:$,id:_,role:"group",tabIndex:S,$variant:o,$panelHeight:s,children:t})]})}const Gr=p.div`
  position: relative;
  display: ${({$variant:e})=>e==="inline"?"flex":"inline-flex"};
  flex-direction: column;
  width: ${({$variant:e})=>e==="inline"?"100%":"auto"};
`,Ur=p.button`
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
  ${ae}
`,Wr=p(Ae)`
  ${({$inline:e})=>e&&Y`
      align-self: flex-end;
    `}
`,Xr=p.span`
  display: inline-flex;
  flex-shrink: 0;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform var(--duration-base) var(--ease-standard);
  }
  transform: rotate(${({$open:e})=>e?90:0}deg);
`,Yr=p.div`
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
          ${pe}
        `:""}
  padding: var(--inset-surface);
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`;function Cs({space:e,...t}){return r.jsx(Vr,{$space:e,...t})}const Vr=p.hr`
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
  width: 100%;
  margin: ${({$space:e})=>e?`${fe[e]} 0`:"0"};
`,Kr=160,Zr=24,qr="...";function Ls({children:e,limit:t=Kr,subject:n,className:a}){const[o,s]=u.useState(!1),i=u.useId(),l=Jr(e,t);if(l===void 0)return r.jsx(r.Fragment,{children:e});const d=o?"Show less":"Show more";return r.jsxs(Qr,{className:a,children:[r.jsx("span",{id:i,children:o?e:`${l}${qr}`})," ",r.jsx(ea,{type:"button","data-expandable-toggle":"","aria-controls":i,"aria-expanded":o,"aria-label":n===void 0?void 0:`${d} of ${n}`,onClick:()=>s(f=>!f),children:d})]})}function Jr(e,t){if(e.length<=t+Zr)return;const n=e.lastIndexOf(" ",t);return n<=0?e.slice(0,t):e.slice(0,n)}const Qr=p.span`
  /* Long prose may carry a word wider than its column, and a broken word beats a sideways scroll. */
  overflow-wrap: break-word;
`,ea=p(yn)`
  /* Sits on the text's baseline as the paragraph's last word, so the cut and its undo read as one. */
  white-space: nowrap;
`;function Ns(e,t){const n=t.map(s=>s==null?null:Nn(e,s.index)),a=n.length>0&&n.every(s=>s?.currency==="exact"),o=n.reduce((s,i)=>i?.currency!=="held"||i.asOfUt===null?s:s===null?i.asOfUt:Math.min(s,i.asOfUt),null);return s=>{const i=a?Pn(s):s;return o===null?i:{state:"held",value:i,asOfUt:$e("ut",o),grade:"held",reckoning:{status:"none"}}}}function ta({anchor:e,style:t,children:n,...a}){const[o,s]=u.useState(null),[i,l]=u.useState(null),d=u.useRef(e);d.current=e;const f=u.useCallback(()=>{if(!o)return;const h=d.current,x=typeof h=="function"?h():h;if(!x)return;const _=o.getBoundingClientRect(),b=ar(x,{w:_.width,h:_.height},{w:window.innerWidth,h:window.innerHeight});l(c=>c&&c.left===b.left&&c.top===b.top?c:b)},[o]);return u.useLayoutEffect(()=>{f()}),u.useLayoutEffect(()=>{if(!o)return;const h=typeof ResizeObserver>"u"?null:new ResizeObserver(f);return h?.observe(o),window.addEventListener("resize",f),window.addEventListener("scroll",f,!0),()=>{h?.disconnect(),window.removeEventListener("resize",f),window.removeEventListener("scroll",f,!0)}},[o,f]),typeof document>"u"?null:Kn.createPortal(r.jsx(na,{ref:s,style:{...t,left:i?.left??0,top:i?.top??0,visibility:i===null?"hidden":t?.visibility},...a,children:n}),document.body)}const na=p.div`
  position: fixed;
  z-index: var(--z-dropdown);
`,ct=12,ra=8,aa=120;function Ps({trigger:e,"aria-label":t,children:n}){const[a,o]=u.useState(!1),s=u.useRef(null),i=u.useRef(null),l=u.useRef(null),d=u.useId(),f=u.useCallback(()=>{i.current!==null&&(clearTimeout(i.current),i.current=null)},[]),h=()=>{f(),o(!0)},x=()=>{f(),i.current=setTimeout(()=>o(!1),aa)},_=u.useCallback(()=>{f(),o(!1)},[f]);u.useEffect(()=>f,[f]),u.useEffect(()=>{if(!a)return;const c=$=>{$.key==="Escape"&&($.stopPropagation(),_())};return document.addEventListener("keydown",c,!0),()=>document.removeEventListener("keydown",c,!0)},[a,_]);const b=()=>{const c=s.current?.getBoundingClientRect();if(!c)return null;const $=l.current?.offsetHeight??0,S=c.top-$-2*ct;return{x:c.left,y:S+ct>=ra?S:c.bottom}};return r.jsxs(r.Fragment,{children:[r.jsx(oa,{ref:s,type:"button","aria-label":t,"aria-describedby":a?d:void 0,onPointerEnter:h,onPointerLeave:x,onFocus:h,onBlur:_,children:e}),a&&r.jsx(ta,{anchor:b,onPointerEnter:f,onPointerLeave:x,children:r.jsx(sa,{ref:l,id:d,role:"tooltip",children:n})})]})}const oa=p.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  cursor: default;

  ${ae}
`,sa=p.div`
  padding: var(--inset-popover);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
`;function Ds({gap:e,inset:t=!1,wrap:n=!1,children:a,...o}){return r.jsx(ia,{$gap:e,$inset:t,$wrap:n,...o,children:a})}const ia=p.span`
  display: inline-flex;
  gap: ${({$gap:e})=>e?fe[e]:"var(--gap-related)"};
  flex-shrink: ${({$wrap:e})=>e?1:0};
  ${({$wrap:e})=>e&&"flex-wrap: wrap; min-width: 0;"}
  ${({$inset:e})=>e&&"margin-left: var(--gap-inline-cluster);"}
`,la=4,ca=80,ut=60,ua=30,Pe=24,da=32,dt=56,pt=Pe;function Ee(e,t,n){const{min:a,max:o,step:s}=t,i=e+n*s,l=Math.min(o,Math.max(a,i));if(!Number.isFinite(a))return l;const d=a+Math.round((l-a)/s)*s;return Math.min(o,Math.max(a,d))}function pa(e){const{value:t,min:n,max:a,step:o,orientation:s="horizontal",onChange:i,format:l,"aria-label":d,label:f=d,disabled:h=!1,width:x,height:_}=e,b=s==="vertical",c=Math.max(Pe,x??(b?pt:dt)),$=Math.max(Pe,_??(b?dt:pt)),S=e.mode==="rate",v=n??Number.NEGATIVE_INFINITY,w=a??Number.POSITIVE_INFINITY,M={min:v,max:w,step:o},j=u.useRef(null),y=u.useRef(t);y.current=t;const N=u.useRef(i);N.current=i;const G=(e.mode==="rate"?e.stepsPerSecond:void 0)??ua,[E,D]=u.useState(0),O=l?l(t):String(Math.round(t)),z=w>v&&Number.isFinite(w-v)?(t-v)/(w-v):.5,Z=k=>{h||k!==t&&i(k)};u.useEffect(()=>{if(!S||E===0||h)return;const k=setInterval(()=>{const R=Math.max(v,Math.min(w,y.current+E*G*o*(ut/1e3)));R!==y.current&&N.current(R)},ut);return()=>clearInterval(k)},[S,E,h,o,G,v,w]);const B=k=>{if(h)return;let R=null;switch(k.key){case"ArrowRight":case"ArrowUp":R=Ee(t,M,1);break;case"ArrowLeft":case"ArrowDown":R=Ee(t,M,-1);break;case"Home":if(!Number.isFinite(v))return;R=v;break;case"End":if(!Number.isFinite(w))return;R=w;break;default:return}k.preventDefault(),Z(R)},m=k=>s==="vertical"?k.clientY:k.clientX,I=k=>{h||(j.current={start:m(k),startValue:t},k.currentTarget.setPointerCapture(k.pointerId))},P=k=>{if(h||!j.current)return;const R=s==="vertical"?j.current.start-m(k):m(k)-j.current.start;if(S){const F=R/ca;D(Math.max(-1,Math.min(1,F)));return}const W=R/la;Z(Ee(j.current.startValue,M,W))},A=k=>{j.current&&(j.current=null,D(0),k.currentTarget.hasPointerCapture(k.pointerId)&&k.currentTarget.releasePointerCapture(k.pointerId))};return r.jsxs(fa,{children:[f!==!1&&r.jsx(ha,{"aria-hidden":"true",children:f}),r.jsxs(ma,{role:"slider","aria-label":d,"aria-orientation":s,"aria-valuenow":Number.isFinite(t)?t:void 0,"aria-valuemin":n,"aria-valuemax":a,"aria-valuetext":O,"aria-disabled":h||void 0,tabIndex:h?-1:0,$orientation:s,$disabled:h,$width:c,$height:$,$compact:(b?c:$)<da,onKeyDown:B,onPointerDown:I,onPointerMove:P,onPointerUp:A,onPointerCancel:A,children:[r.jsx(ga,{$orientation:s,style:s==="vertical"?{transform:`translateY(${(.5-z)*100}%)`}:{transform:`translateX(${(.5-z)*100}%)`},"aria-hidden":"true"}),r.jsx(xa,{$orientation:s,"aria-hidden":"true"}),r.jsx(va,{"aria-hidden":"true",children:O})]})]})}const fa=p.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-related-packed);
`,ha=p.span`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  white-space: nowrap;
`,ma=p.div`
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

  ${ae}
`,ga=p.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${e=>e.$orientation==="vertical"?"0deg":"90deg"},
    var(--color-border-subtle) 0 1px,
    transparent 1px ${e=>e.$orientation==="vertical"?"8px":"10px"}
  );
  opacity: 0.6;
  pointer-events: none;
`,xa=p.div`
  position: absolute;
  background: var(--color-accent-fg);
  pointer-events: none;
  ${e=>e.$orientation==="vertical"?"left: 0; right: 0; height: 2px; top: 50%;":"top: 0; bottom: 0; width: 2px; left: 50%;"}
`,va=p.span`
  /* Last DOM sibling, so it paints over the absolute tape and caret without a z-index. */
  position: relative;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-compact);
  color: var(--color-text-primary);
  background: var(--color-surface-raised);
  padding: var(--inset-jog-wheel-label);
  pointer-events: none;
`;function Fs({lock:e}){const t=Dn(e)?ba(e):e,n=t.hint===void 0?t.reason:`${t.reason}. ${t.hint}`;return r.jsx(de,{text:n,focusable:!0,children:r.jsxs(ya,{role:"status","aria-label":n,children:[r.jsx($n,{size:"1.2em"}),r.jsx($a,{children:wa(t)})]})})}function ba(e){const t=[{capability:{kind:"topic",id:""},missing:e.locked}];return{...Zn(t,Hn),locks:t}}function wa(e){const t=[...new Set(e.locks.flatMap(n=>n.missing.map(a=>a.name)))];return t.length>0?t.join(", "):e.reason}const ya=p.span`
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
`,$a=p.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ft=1.4,ht=1.7,ja="var(--icon-size-standalone)",_a=1.8,xe="M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12",mt="M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",gt="M7.76 7.76L4.2 4.2M16.24 7.76L19.8 4.2M16.24 16.24L19.8 19.8M7.76 16.24L4.2 19.8",xt="M7 4.5V19.5M17 4.5V19.5",te=(e,t)=>`M${e-2.5} ${t-2.5}l5 5M${e+2.5} ${t-2.5}l-5 5`,Yt={prograde:{colour:"prograde",paths:[xe,"M12 6V2.5M6 12H2.5M18 12H21.5"],dot:[12,12]},retrograde:{colour:"prograde",paths:[xe,te(12,12),"M7.76 7.76L5.3 5.3M16.24 7.76L18.7 5.3M12 18V21.5"]},normal:{colour:"normal",paths:["M12 4.5L19 17H5Z"],dot:[12,13]},antiNormal:{colour:"normal",paths:["M12 19.5L5 7H19Z",te(12,11)]},radialOut:{colour:"radial",paths:[mt,"M10 4.5L12 2.5L14 4.5M19.5 10L21.5 12L19.5 14M10 19.5L12 21.5L14 19.5M4.5 10L2.5 12L4.5 14"],dot:[12,12]},radialIn:{colour:"radial",paths:[mt,"M10 2.5L12 4.5L14 2.5M21.5 10L19.5 12L21.5 14M10 21.5L12 19.5L14 21.5M2.5 10L4.5 12L2.5 14",te(12,12)]},maneuver:{colour:"maneuver",paths:["M12 5L19 12L12 19L5 12Z","M12 5V2"],dot:[12,12]},target:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5"],dot:[12,12]},antiTarget:{colour:"target",paths:["M6 6H18V18H6Z","M6 6L3.5 3.5M18 6L20.5 3.5M18 18L20.5 20.5M6 18L3.5 20.5",te(12,12)]},relativePlus:{colour:"target",paths:[xe,gt],dot:[12,12]},relativeMinus:{colour:"target",paths:[xe,gt,te(12,12)]},parallelPlus:{colour:"target",paths:[xt],dot:[12,12]},parallelMinus:{colour:"target",paths:[xt,te(12,12)]}},Os=Object.keys(Yt);function vt({shape:e,colour:t,strokeWidth:n,dotRadius:a}){return r.jsxs("g",{fill:"none",stroke:t,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:[e.paths.map(o=>r.jsx("path",{d:o},o)),e.dot&&r.jsx("circle",{cx:e.dot[0],cy:e.dot[1],r:a,fill:t,stroke:"none"})]})}function V(e,t){const n=Yt[e],a=`var(--color-marker-${n.colour})`,o=u.forwardRef(({size:s=ja,strokeWidth:i=_a,label:l,style:d,...f},h)=>{const x={ref:h,xmlns:"http://www.w3.org/2000/svg",...typeof s=="number"?{width:s,height:s,style:d}:{style:{width:s,height:s,...d}},viewBox:"0 0 24 24","data-marker":e},_=r.jsxs(r.Fragment,{children:[r.jsx(vt,{shape:n,colour:"currentColor",strokeWidth:i+ft,dotRadius:ht+ft/2}),r.jsx(vt,{shape:n,colour:a,strokeWidth:i,dotRadius:ht})]});return l?r.jsx("svg",{...x,role:"img","aria-label":l,...f,children:_}):r.jsx("svg",{...x,"aria-hidden":"true",...f,children:_})});return o.displayName=t,o}const Vt=V("prograde","ProgradeIcon"),Ma=V("retrograde","RetrogradeIcon"),Kt=V("normal","NormalIcon"),ka=V("antiNormal","AntiNormalIcon"),Ea=V("radialOut","RadialOutIcon"),Zt=V("radialIn","RadialInIcon"),Ra=V("maneuver","ManeuverIcon"),Ia=V("target","TargetIcon"),Sa=V("antiTarget","AntiTargetIcon"),Ta=V("relativePlus","RelativePlusIcon"),Aa=V("relativeMinus","RelativeMinusIcon"),Ca=V("parallelPlus","ParallelPlusIcon"),La=V("parallelMinus","ParallelMinusIcon"),zs=Vt,Hs=Zt,Bs=Kt,Gs={prograde:Vt,retrograde:Ma,normal:Kt,antiNormal:ka,radialOut:Ea,radialIn:Zt,maneuver:Ra,target:Ia,antiTarget:Sa,relativePlus:Ta,relativeMinus:Aa,parallelPlus:Ca,parallelMinus:La};function qt(e){const{year:t,day:n,hour:a,minute:o}=Be(),s=Number.isFinite(e)?Math.max(0,e):0,i=Math.floor(s/t)+1,l=s%t,d=Math.floor(l/n)+1,f=l%n;return{year:i,day:d,hour:Math.floor(f/a),minute:Math.floor(f%a/o),second:Math.floor(f%o)}}const Na={year:1,day:1,hour:0,minute:0,second:0};function Pa(e){const{year:t,day:n,hour:a,minute:o}=Be();return(e.year-1)*t+(e.day-1)*n+e.hour*a+e.minute*o+e.second}function ve(e){return Bn($e("s",e))}function Da({value:e,onChange:t,label:n,disabled:a,steps:o}){const s=u.useId(),i=`${s}-absent`,l=e!==null&&Number.isFinite(e)?e:null,d=l===null?null:qt(l),f=Be(),h=o??[f.minute,10*f.minute,f.hour,f.day],[x,_]=u.useState(null),b=(c,$,S,v)=>r.jsxs(we,{gap:"caption",children:[r.jsx(ze,{htmlFor:`${s}-${c}`,children:$}),r.jsx(Lt,{id:`${s}-${c}`,type:"number",inputMode:"numeric","aria-label":`${n} ${$}`,"aria-describedby":d===null?i:void 0,min:S,step:1,style:{width:v},disabled:a,placeholder:d===null?re:void 0,value:x?.key===c?x.text:d===null?"":String(d[c]),onBlur:()=>_(null),onChange:w=>{const M=w.target.value;if(_({key:c,text:M}),M.trim()==="")return;const j=Number(M);if(!Number.isFinite(j))return;const y=Math.max(S,Math.round(j));t(Pa({...d??Na,[c]:y}))}})]},c);return r.jsxs(we,{gap:"related-dense",role:"group","aria-label":n,children:[r.jsxs(Ze,{gap:"related-dense",wrap:!0,justify:"start",children:[b("year","YEAR",1,"5rem"),b("day","DAY",1,"5rem"),b("hour","HR",0,"4rem"),b("minute","MIN",0,"4rem"),b("second","SEC",0,"4rem")]}),d===null&&r.jsx(Le,{id:i,level:"muted",size:"sm",children:`${re} no ${n.toLowerCase()} to show. Type one to state it.`}),h.length===0?null:r.jsxs(Ze,{gap:"related-packed",wrap:!0,justify:"start",children:[r.jsx(Le,{level:"faint",size:"sm",children:"NUDGE"}),h.map(c=>r.jsx(Ae,{variant:"ghost",size:"sm",disabled:a||l===null,"aria-label":`${n} earlier by ${ve(c)}`,onClick:()=>l!==null&&t(l-c),children:`-${ve(c)}`},`minus-${c}`)),h.map(c=>r.jsx(Ae,{variant:"ghost",size:"sm",disabled:a||l===null,"aria-label":`${n} later by ${ve(c)}`,onClick:()=>l!==null&&t(l+c),children:`+${ve(c)}`},`plus-${c}`))]})]})}const Fa=p.span`
  margin-left: 0.6em;
  color: var(--color-text-muted);
`;function Oa({observed:e,modelled:t,write:n}){if(t==null)return null;if(n===void 0){const a=t;return Ce(e,a,jn())?r.jsx(bt,{children:r.jsx(Q,{value:a})}):null}return Ce(e,t,_n(n))?r.jsx(bt,{children:n(t)}):null}function bt({children:e}){return r.jsx(Fa,{"data-modelled-alongside":"",children:r.jsx(He,{"data-held":"",kind:"modelled",caption:Pt,children:e})})}function Us({value:e}){return r.jsxs(r.Fragment,{children:[r.jsx(Q,{value:e}),r.jsx(Oa,{observed:e.value,modelled:Mn(e)})]})}function Ws({panZoom:e,label:t,style:n,onMouseMove:a,children:o}){const{style:s,ref:i,...l}=e.viewportProps;return r.jsxs(za,{...l,ref:i,onMouseMove:a,"aria-label":t,style:{...s,...n},children:[o,r.jsx(Ha,{role:"status",children:e.hint!==null&&r.jsx(Ba,{children:e.hint})})]})}const za=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
  ${pe}
`,Ha=p.div`
  position: absolute;
  bottom: var(--gap-related);
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-base);
  max-width: calc(100% - 16px);
  pointer-events: none;
`,Ba=p.div`
  padding: var(--inset-control);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-regular);
  background: var(--color-surface-raised);
  color: var(--color-text-primary);
  font-size: var(--font-size-compact);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function Xs({filled:e,of:t,tone:n="info",label:a}){const o=`${e} of ${t}`;return r.jsx(Ga,{role:"img","aria-label":a===void 0?o:`${a}: ${o}`,"data-pips":"",children:Array.from({length:t},(s,i)=>r.jsx(Ua,{$colour:Gn[n],$filled:i<e},i))})}const Ga=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-related);
  flex: none;
`,Ua=p.span`
  width: 1em;
  height: 1em;
  border-radius: var(--radius-circle);
  border: 2px solid ${({$colour:e})=>e};
  background: ${({$colour:e,$filled:t})=>t?e:"transparent"};
`;function Ys({id:e,label:t,value:n,options:a,onChange:o,hint:s}){const i=a.findIndex(l=>qn(l.choice,n));return r.jsxs(Ct,{children:[r.jsx(ze,{htmlFor:e,children:t}),r.jsxs(kn,{id:e,value:i===-1?"":String(i),onChange:l=>{const d=a[Number(l.target.value)];d!==void 0&&o(d.choice)},children:[i===-1&&r.jsx("option",{value:"",disabled:!0}),a.map((l,d)=>r.jsx("option",{value:d,children:l.label},`${l.choice.kind}-${l.choice.bodyIndex??"none"}`))]}),s!==void 0&&r.jsx(En,{children:s})]})}function Wa(e){if(e.command)return r.jsx(Xa,{...e,command:e.command});const{command:t,unavailable:n,...a}=e;return r.jsx(Jt,{...a})}function Xa({command:e,unavailable:t,children:n,onClick:a,...o}){const s=At({command:e,unavailable:t});return r.jsxs(r.Fragment,{children:[r.jsx(de,{text:s.tip,children:r.jsxs(Jt,{...o,...s.edge,as:"button",interactive:!0,onClick:i=>{s.inert||(s.control.press(!1),a?.(i))},children:[n,r.jsx(Ya,{"aria-hidden":"true",children:s.word})]})}),r.jsx(Fe,{visuallyHidden:!0,children:s.announce})]})}const Ya=p.span`
  min-width: ${Oe};
  text-align: end;
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
`;function Jt({as:e,interactive:t=!1,selected:n=!1,wrap:a=!1,nested:o=!1,type:s,children:i,...l}){return r.jsx(Ka,{as:e??"li",type:s??(e==="button"?"button":void 0),$interactive:t,$selected:n,$wrap:a,$nested:o,...l,children:i})}const Qt=p.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  color: var(--color-text-primary);
`,Va="min(12ch, 100%)",Ka=p.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-row);
  font-size: var(--font-size-compact);
  padding: var(--inset-row);
  ${({$wrap:e})=>e?`
  flex-wrap: wrap;
  row-gap: var(--gap-row-wrap);

  & > ${Qt} {
    min-width: ${Va};
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

  ${pe}
`:""}
  ${({$interactive:e,$selected:t})=>e&&t?`
  ${Bt("go")}

  &:hover {
    background: var(--color-go-status);
  }
`:""}
  /* After the interactive block, whose padding shorthand would reset it. */
  ${({$nested:e})=>e?"padding-left: var(--indent-row);":""}

  ${Dt}
`,Vs=Object.assign(Wa,{Name:Qt}),Za=65,en=38,qa=72,Ja=qa-en,tn=55,De=137.508,Qa=10,eo=1.5,to=64,no=60,ro=241,ao=De-Math.floor(De),ce=[{aliases:["liquidfuel"],hue:40},{aliases:["lqdhydrogen","hydrogen"],hue:205},{aliases:["electriccharge","ec"],hue:50},{aliases:["carbondioxide","co2","waste"],hue:65},{aliases:["monopropellant","monoprop"],hue:95},{aliases:["oxidizer"],hue:15},{aliases:["oxygen","air"],hue:190},{aliases:["water"],hue:215},{aliases:["ore"],hue:28},{aliases:["food"],hue:130},{aliases:["xenon"],hue:275},{aliases:["ablator"],hue:5},{aliases:["nitrogen","ammonia"],hue:175}];function nn(e,t){const n=Math.abs(e-t)%360;return n>180?360-n:n}const oo=ce.map((e,t)=>{let n=1/0;for(let o=0;o<ce.length;o++)o!==t&&(n=Math.min(n,nn(e.hue,ce[o].hue)));const a=n/2;return Math.max(0,Math.min(Qa,a-eo))}),so=ce.map((e,t)=>({aliases:e.aliases,centre:e.hue,radius:oo[t]}));function io(e,t=ce){return t.find(n=>n.aliases.some(a=>e.includes(a)))}function rn(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function wt(e,t){return(e%t+t)%t}function lo(e){const n=rn(`light:${e}`)/4294967295;return en+n*Ja}function co(e){const t=io(e);if(!t)return;const n=t.aliases.length===1?tn:lo(e);return{hue:t.hue,lightness:n}}function uo(e){return so.some(({centre:t,radius:n})=>nn(e,t)<n)}function po(e){const t=rn(e);let n=wt(t*De,360);const a=no+(t>>>8)%ro+ao;let o=0;for(;uo(n)&&o<to;)n=wt(n+a,360),o++;return n}function Ks(e){const t=e.trim().toLowerCase(),n=co(t),a=n?.hue??po(t),o=n?.lightness??tn;return`hsl(${Math.round(a)}deg ${Za}% ${Math.round(o)}%)`}function Zs({selected:e,gap:t="caption",layout:n="stack",selectedLook:a="fill",children:o,...s}){return r.jsx(fo,{type:"button","aria-pressed":s["aria-expanded"]===void 0?e:void 0,$selected:e,$gap:t,$layout:n,$look:a,...s,children:o})}const fo=p.button`
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
  gap: ${({$gap:e})=>fe[e]};
  width: 100%;
  text-align: left;
  padding: var(--inset-selectable-row);
  border-radius: ${zt.regular};
  border: 1px solid
    ${({$selected:e,$look:t})=>e?t==="outline"?"var(--color-accent-fg)":"transparent":"var(--color-border-subtle)"};
  ${({$selected:e,$look:t})=>e?t==="outline"?"background: var(--color-surface-raised); color: inherit;":Bt("go"):"background: transparent; color: inherit;"}
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

  ${ae}
`,ho=u.forwardRef(function(t,n){return t.command?r.jsx(mo,{...t,command:t.command,forwardedRef:n}):t.figure!==void 0?r.jsx(an,{...t,forwardedRef:n}):r.jsx(on,{ref:n,type:"range",...t})});function mo({command:e,unavailable:t,forwardedRef:n,...a}){const o=Rn({command:e,unavailable:t});return r.jsx(an,{...a,forwardedRef:n,input:o,disabled:a.disabled})}function an({forwardedRef:e,input:t,value:n,min:a,max:o,step:s,figure:i,expected:l,expectedCaption:d=Pt,lastSeen:f,lastSeenCaption:h="last reported",disabled:x,onChange:_,"aria-label":b,...c}){const[$,S]=u.useState(null);u.useEffect(()=>{if($===null)return;const E=()=>S(null);return window.addEventListener("pointerup",E),window.addEventListener("pointercancel",E),()=>{window.removeEventListener("pointerup",E),window.removeEventListener("pointercancel",E)}},[$]);const[v,w]=u.useState(null),M=t?.control.isSent===!0;u.useEffect(()=>{M||w(null)},[M]);const j=$??v??n,y=xr({commanded:j,expected:l,lastSeen:f,step:s}),N=E=>`calc(8px + ${(E-a)/(o-a||1)} * (100% - 16px))`,G=E=>{t&&!t.inert&&w(E),t?.send(E)};return r.jsxs("div",{style:vr,children:[r.jsx(de,{text:t?.tip,children:r.jsxs("div",{style:br,children:[r.jsx(on,{...c,...t?.edge,ref:e,type:"range",min:a,max:o,step:s,value:j??a,onPointerDown:()=>S(j??a),onChange:E=>{const D=Number(E.target.value);$!==null?S(D):G(D),_?.(E)},onPointerUp:E=>G(Number(E.currentTarget.value)),disabled:x,"aria-label":b,style:wr}),y.expected!==null&&r.jsx(st,{kind:"modelled",caption:d,left:N(y.expected)}),y.lastSeen!==null&&r.jsx(st,{kind:"held",caption:h,left:N(y.lastSeen)})]})}),r.jsxs("span",{style:$r,children:[j===null?re:i(j),t&&r.jsx(go,{"aria-hidden":"true",children:t.word})]}),r.jsx(Fe,{visuallyHidden:!0,children:t?.announce??null})]})}const go=p.span`
  display: inline-block;
  min-width: ${Oe};
  margin-inline-start: var(--gap-related);
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
`,on=p.input`
  width: 100%;
  min-width: 0;
  margin: 0;
  background: none;
  accent-color: var(--color-accent-fg);
  cursor: pointer;

  ${ae}
  ${Dt}
  border-radius: var(--radius-pill);

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function xo({label:e,children:t,detail:n,tone:a="neutral",...o}){return r.jsxs(vo,{...o,children:[r.jsx(bo,{children:e}),r.jsx(wo,{$tone:a,children:t}),n!=null&&r.jsx(yo,{children:n})]})}const vo=p.dl`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  margin: 0;
  min-width: 0;
  padding: var(--inset-surface);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
`,bo=p.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
`,wo=p.dd`
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
  color: ${({$tone:e})=>Ht[e]};
`,yo=p.dd`
  margin: 0;
  min-width: 0;
  font-size: var(--font-size-compact);
  color: var(--color-text-muted);
`;function qs({slot:e}){const t=Un(e);return t.length===0?null:r.jsx(r.Fragment,{children:t.map(n=>r.jsx(xo,{label:n.label,detail:n.detail,tone:n.tone??"neutral",children:r.jsx($o,{entry:n})},n.id))})}function $o({entry:e}){if(e.value!==void 0)return r.jsx(Q,{value:e.value});if(e.text===void 0)return r.jsx(Wn,{});const t=In(e.held);return t===null?r.jsx(r.Fragment,{children:e.text}):r.jsx(He,{kind:t.kind,caption:t.caption,children:e.text})}const jo=12,ne=12,_o=12,yt=52,H=10,Re=4;function Mo(e,t,n){const a=i=>e.map(l=>Number.parseFloat(i.mark(l).replace(/[^\d.-]/g,""))),o=a(n(Re)),s=i=>a(i).every((l,d)=>l===o[d]);if(s(t))return t;for(let i=0;i<Re;i++){const l=n(i);if(s(l))return l}return n(Re)}function Js({labelSide:e="left",value:t,min:n,max:a,width:o=92,height:s=220,fillHeight:i=!1,tickStep:l,zones:d,markers:f,groundLine:h,seaLevel:x,format:_,"aria-label":b}){const c=u.useRef(null),[$,S]=u.useState(s);u.useEffect(()=>{if(!i)return;const g=c.current;if(!g)return;const C=()=>{const K=g.clientHeight;K>0&&S(K)};C();const T=new ResizeObserver(C);return T.observe(g),()=>T.disconnect()},[i]);const v=i?$:s,w=Ft(t),{shown:M,held:j,caption:y,band:N}=w,{anchor:G,tip:E}=Sn(y),D=M?.magnitude??Number.NaN,O=Number.isFinite(D)?M:null,z=n.magnitude,Z=a.magnitude,B=Z-z,m=Number.isFinite(D)?D:z,I=B>0?Math.max(z,Math.min(Z,m)):z,P=O!=null,A=nt(a,{format:_}),k=O==null?re:rt({magnitude:m,unit:O.unit},{format:A.rung}),R=g=>rt(g),W=[...(f??[]).flatMap(g=>g.label===void 0?[]:[g.bounds===void 0?`${g.label} ${R(g.value)}`:`${g.label} ${R(g.value)}, between ${R(g.bounds.lo)} and ${R(g.bounds.hi)}`]),...(d??[]).flatMap(g=>g.label===void 0?[]:[`${g.label} zone ${R(g.from.min(g.to))} to ${R(g.from.max(g.to))}`]),...h===void 0?[]:[`ground ${R(h)}`],...x===void 0?[]:[`sea level ${R(x)}`]],F=O==null||N===null?null:Fn(N,O.unit)??null,U=Math.max(0,v-ne-_o),q=g=>{if(!(B>0))return ne+U;const C=Math.max(0,Math.min(1,(g-z)/B));return ne+(1-C)*U},X=g=>q(g.magnitude),ee=ne,Ge=ne+U,J=e==="right",L=J?o-yt-H:yt,oe=J?L+H+6:L-6,Ue=J?"start":"end",We=(g,C)=>{const T=X(g),K=g.greaterThan(a)?-1:g.lessThan(n)?1:0,ie=L-4,me=L+H+4,Me=L+H/2;return r.jsxs("g",{"data-level":C?"sea":"ground",children:[r.jsx("line",{x1:ie,y1:T,x2:me,y2:T,stroke:C?"var(--color-info-mark)":"var(--color-text-primary)",strokeWidth:C?1.5:2,strokeDasharray:C?"3 2":void 0}),K!==0&&r.jsx("polygon",{"data-off-scale":"true",points:`${Me-4},${T-K*2} ${Me+4},${T-K*2} ${Me},${T+K*4}`,fill:C?"var(--color-info-mark)":"var(--color-text-primary)"})]})},je=[],he=l?.magnitude??0;if(he>0&&B>0){const g=Math.ceil(z/he),C=Math.floor(Z/he+1e-9);for(let T=g;T<=C;T++)je.push(T===0?0:T*he)}const un=Mo(je,A,g=>nt(a,{format:_,decimals:g})),se=q(I),_e=g=>U>0?(ne+U-g)/U:0,Xe=F!==null&&Ce(_e(se),[_e(X(F.lo)),_e(X(F.hi))],Tn())?F:null;return r.jsxs(ko,{ref:c,...Ln(w),...G,...P?{role:"meter","aria-label":Qe(b,y),...Je(y),"aria-valuenow":I,"aria-valuemin":z,"aria-valuemax":Z,"aria-valuetext":W.length===0?k:`${k}; ${W.join("; ")}`}:{role:"img","aria-label":Qe(`${b}: ${k}`,y),...Je(y)},style:i?{height:"100%"}:void 0,children:[r.jsxs("svg",{width:o,height:v,viewBox:`0 0 ${o} ${v}`,"aria-hidden":"true",style:i?{display:"block",fontFamily:"var(--font-family-mono)"}:{display:"block",fontFamily:"var(--font-family-mono)",maxWidth:"100%",height:"auto"},children:[r.jsx("rect",{x:L,y:ee,width:H,height:U,rx:2,fill:"var(--color-surface-raised)"}),d?.map(g=>{const C=X(g.from.max(g.to)),T=X(g.from.min(g.to)),K=Math.max(0,T-C);return r.jsx("g",{children:r.jsx("rect",{x:L,y:C,width:H,height:K,fill:g.color??"var(--color-warn-mark)",opacity:.55})},`zone-${T}-${C}-${g.label??""}`)}),x!==void 0&&B>0&&We(x,!0),h!==void 0&&B>0&&We(h,!1),je.map(g=>{const C=q(g),T=P&&Math.abs(C-Math.max(ee+4,Math.min(Ge-4,se)))<jo;return r.jsxs("g",{children:[r.jsx("line",{x1:J?L+H+4:L-4,y1:C,x2:J?L+H:L,y2:C,stroke:"var(--color-border-subtle)",strokeWidth:1}),!T&&r.jsx("text",{x:oe,y:C,textAnchor:Ue,dominantBaseline:"middle",fontSize:8,fill:"var(--color-text-faint)",children:un.mark(g)})]},`tick-${g}`)}),f?.map(g=>{const{bounds:C}=g,T=X(g.value),K=g.color??"var(--color-accent-fg)";return r.jsxs("g",{"data-marker":g.label,children:[r.jsx("line",{x1:L,y1:T,x2:L+H,y2:T,stroke:K,strokeWidth:2,strokeDasharray:"2 2"}),r.jsx("polygon",{points:J?`${L},${T} ${L-5},${T-3} ${L-5},${T+3}`:`${L+H},${T} ${L+H+5},${T-3} ${L+H+5},${T+3}`,fill:"none",stroke:K,strokeWidth:1.5}),C!==void 0&&["lo","hi"].map(ie=>{const me=X(C[ie]);return r.jsx(qe,{end:ie,x1:L,y1:me,x2:L+H,y2:me},ie)})]},`marker-${T}-${g.label??""}`)}),Xe!==null&&["lo","hi"].map(g=>{const C=X(Xe[g]);return r.jsx(qe,{end:g,x1:L,y1:C,x2:L+H,y2:C},g)}),P&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:L-6,y1:se,x2:L+H+6,y2:se,stroke:"var(--color-accent-fg)",strokeWidth:2}),r.jsxs("text",{x:J?oe+2:oe-2,y:Math.max(ee+4,Math.min(Ge-4,se)),textAnchor:Ue,dominantBaseline:"middle",fontSize:11,fontWeight:"bold",fill:"var(--color-accent-fg)",children:[A.mark(m),j&&r.jsx(An,{size:5})]})]}),!P&&r.jsx(Cn,{x:J?oe+8:oe-8,y:ee+U/2,size:11,children:re}),A.symbol!==""&&r.jsx("text",{x:L+H/2,y:ee-3,textAnchor:"middle",fontSize:8,fill:"var(--color-text-faint)",children:A.symbol})]}),E]})}const ko=p.div`
  display: block;
  max-width: 100%;
`,Qs=p.span`
  /* Its own theme colour rather than whatever the nearest element gives it, so no ancestor's default can reach the words. */
  color: var(--color-neutral-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,Eo=112;function Ro(e,t){try{return $e(e,1).in(t).magnitude}catch{return Number.NaN}}function Io(e,t){let n=e;return t.map((a,o)=>{if(!Number.isFinite(a)||a===0)return 0;const s=o===t.length-1?n/a:Math.trunc(n/a);return n-=s*a,s})}function ei({value:e,unit:t,onChange:n,label:a,rungs:o,range:s,rate:i,disabled:l}){const d=u.useId(),{shown:f,held:h,caption:x}=Ft(e),_=h?r.jsx(He,{caption:x,children:a}):a,b=s,c=f?f.magnitude:Number.NaN,[$,S]=u.useState({}),v=y=>$[y]??null,w=(y,N)=>S(G=>({...G,[y]:N})),M=i?r.jsxs(we,{gap:"related-packed",children:[r.jsx(pa,{mode:"rate","aria-label":`${a} rate`,value:c,step:i.step,stepsPerSecond:i.stepsPerSecond,disabled:l||!Number.isFinite(c),format:Ie(t)?To:void 0,width:Ie(t)?Eo:void 0,onChange:y=>n(le(t,y))}),r.jsx(Le,{level:"faint",size:"sm",children:`${i.step} ${So(t)} / notch`})]}):null;if(Ie(t))return r.jsxs(Te,{children:[r.jsx(jt,{"aria-hidden":"true",children:_}),r.jsxs(we,{gap:"related-dense",children:[r.jsx(Da,{label:h&&x!==null?`${a}, ${x}`:a,value:Number.isFinite(c)?c:null,disabled:l,steps:i?[]:void 0,onChange:y=>n(le(t,y))}),M]})]});if(o&&o.length>0){const y=o.map(E=>Ro(String(E),t)),N=Io(c,y),G=(E,D)=>{const O=Se(D);if(O===void 0){w(E,{text:D,against:N[E]});return}const z=N.map(B=>Number.isFinite(B)?B:0);z[E]=O;const Z=z.reduce((B,m,I)=>Number.isFinite(y[I])?B+m*y[I]:B,0);w(E,{text:D,against:O}),n(le(t,Z))};return r.jsxs(Te,{children:[r.jsx(jt,{id:`${d}-label`,children:_}),r.jsx(No,{role:"group","aria-labelledby":`${d}-label`,children:o.map((E,D)=>r.jsxs(Po,{children:[r.jsx(Do,{type:"number",disabled:l,"aria-label":`${a} ${String(E)}`,value:$t(v(D),N[D]),onChange:O=>G(D,O.target.value)}),r.jsx(_t,{"aria-hidden":"true",children:String(E)})]},String(E)))}),M]})}const j=y=>{const N=Se(y);w(0,{text:y,against:N??c}),N!==void 0&&n(le(t,N))};return r.jsxs(Te,{children:[r.jsx(Co,{htmlFor:d,children:_}),r.jsxs(Lo,{children:[r.jsx(ln,{id:d,type:"number",disabled:l,min:b?.min,max:b?.max,step:b?.step,value:$t(v(0),c),onChange:y=>j(y.target.value)}),r.jsx(_t,{"aria-hidden":"true",children:t})]}),b?r.jsx(ho,{disabled:l,"aria-label":`${a} slider`,min:b.min,max:b.max,step:b.step??(b.max-b.min)/100,value:Number.isFinite(c)?c:b.min,onChange:y=>n(le(t,Se(y.target.value)??b.min))}):null,M]})}function $t(e,t){return e!==null&&Object.is(e.against,t)?e.text:Number.isFinite(t)?String(Ao(t)):""}function So(e){return Ot(e)??e}function Ie(e){return Ot(e)==="s"}function To(e){if(!Number.isFinite(e))return"";const{day:t,hour:n,minute:a,second:o}=qt(e),s=i=>String(i).padStart(2,"0");return`D${t} ${s(n)}:${s(a)}:${s(o)}`}function Se(e){const t=Number.parseFloat(e);return Number.isFinite(t)&&/\d/.test(e)?t:void 0}function Ao(e){return Number.isFinite(e)?Math.round(e*1e6)/1e6:0}const Te=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-field-label-compact);
`,sn=`
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,Co=p.label`
  ${sn}
`,jt=p.span`
  ${sn}
`,Lo=p.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-value-tag);
`,ln=p.input`
  background: var(--color-surface-panel);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text-primary);
  font-size: var(--font-size-value);
  padding: var(--inset-field-compact);
  border-radius: var(--radius-regular);
  text-align: right;
  font-variant-numeric: tabular-nums;
  min-width: 0;

  ${ae}
`,_t=p.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-faint);
`,No=p.div`
  display: flex;
  gap: var(--gap-unit-parts);
`,Po=p.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: var(--gap-unit-suffix);
`,Do=p(ln)`
  width: 4.5em;
`,Fo=200;function Mt(e={}){const t=e.quietMs??Fo;let n=null,a=Number.NEGATIVE_INFINITY,o=!0;return{wheel(s,i){return(n===null||s-a>t)&&(n=i&&o?"diagram":"page"),a=s,n},pageScrolled(){o=!1},pointerMovedInside(){o=!0},yieldToPage(){n="page"},get owner(){return n}}}const Oo=16,zo=400,kt=120,Ho=Math.log(1.15)/100,Bo=.01;function Go(e,t,n){const a=t===1?e*Oo:t===2?e*zo:e,o=Math.max(-kt,Math.min(kt,a)),s=n&&Math.abs(a)<40?Bo:Ho;return Math.exp(-o*s)}function Uo(e,t,n={}){const{quietMs:a}=n,o=u.useRef(Mt({quietMs:a}));u.useEffect(()=>{o.current=Mt({quietMs:a})},[a]);const[s,i]=u.useState(null);u.useEffect(()=>{e.current!==s&&i(e.current)}),u.useEffect(()=>{if(!s||!t)return;const l=c=>c instanceof Node&&s.contains(c);let d=null;const f=(c,$)=>d!==null&&(Math.abs(c-d.x)>=1||Math.abs($-d.y)>=1),h=c=>{d={x:c.clientX,y:c.clientY},!(c.ctrlKey||c.metaKey)&&o.current.wheel(performance.now(),l(c.target))},x=c=>{const $=f(c.clientX,c.clientY);d={x:c.clientX,y:c.clientY},$&&l(c.target)&&o.current.pointerMovedInside()},_=c=>{const $=c.target;($===document||$ instanceof Node&&$.contains(s))&&o.current.pageScrolled()},b=c=>{const $=c.ctrlKey||c.metaKey;if(!$&&o.current.owner!=="diagram")return;const S=s.getBoundingClientRect(),v=Go(c.deltaY,c.deltaMode,$);if(t(v,c.clientX-S.left,c.clientY-S.top)===!1&&!$){o.current.yieldToPage();return}c.preventDefault()};return window.addEventListener("wheel",h,{capture:!0,passive:!0}),window.addEventListener("pointermove",x,{capture:!0,passive:!0}),window.addEventListener("scroll",_,{capture:!0,passive:!0}),s.addEventListener("wheel",b,{passive:!1}),()=>{window.removeEventListener("wheel",h,{capture:!0}),window.removeEventListener("pointermove",x,{capture:!0}),window.removeEventListener("scroll",_,{capture:!0}),s.removeEventListener("wheel",b)}},[s,t])}const Wo="Arrow keys pan, + and - zoom, 0 resets",Xo=.15,Et=1.25,Yo={zoom:1,panX:0,panY:0};function ti(e={}){const{home:t=Yo,zoomAbout:n="pointer",panThreshold:a=3,enabled:o=!0}=e,[s,i]=u.useState(t),l=u.useRef({camera:s,options:e,home:t});l.current={camera:s,options:e,home:t};const d=u.useRef(null),f=e.elementRef??d,h=u.useCallback(()=>{const m=f.current?.getBoundingClientRect();return{w:m?.width??0,h:m?.height??0}},[]),x=u.useCallback(m=>{const{constrain:I}=l.current.options,P=h(),A=I&&P.w>0&&P.h>0?I(m,P):m;return l.current.camera=A,i(A),A},[h]),_=u.useCallback(m=>{x(typeof m=="function"?m(l.current.camera):m)},[x]),b=u.useCallback((m,I,P)=>{const A=l.current.camera,{minZoom:k=.1,maxZoom:R=50}=l.current.options,W=typeof k=="function"?k(A):k,F=Math.max(Math.min(W,A.zoom),Math.min(Math.max(R,A.zoom),A.zoom*m));if(F===A.zoom)return!1;const{w:U,h:q}=h();if(n==="centre")x({...A,zoom:F});else{const X=(I-U/2)/A.zoom+A.panX,ee=(P-q/2)/A.zoom+A.panY;x({zoom:F,panX:X-(I-U/2)/F,panY:ee-(P-q/2)/F})}return l.current.options.onManualMove?.("zoom"),!0},[x,h,n]);Uo(f,u.useMemo(()=>o?b:null,[o,b]));const c=u.useCallback(()=>{l.current.options.onManualMove?.("reset"),x(l.current.home)},[x]),$=u.useCallback(m=>{const{w:I,h:P}=h();b(m,I/2,P/2)},[h,b]),[S,v]=u.useState(null),w=u.useRef(new Map),M=u.useRef(null),j=u.useRef(null),y=u.useRef(null),N=u.useRef(!1),[G,E]=u.useState(!1),D=u.useCallback(m=>{if(l.current.options.enabled!==!1&&!(m.pointerType==="mouse"&&m.button!==0)){if(w.current.set(m.pointerId,{x:m.clientX,y:m.clientY}),w.current.size===2){const[I,P]=[...w.current.values()];M.current=null,j.current=Math.hypot(I.x-P.x,I.y-P.y);return}N.current=!1,y.current={x:m.clientX,y:m.clientY},M.current={x:m.clientX,y:m.clientY},j.current=null}},[]),O=u.useCallback(m=>{if(!w.current.has(m.pointerId))return;if(m.pointerType==="mouse"&&m.buttons===0){w.current.delete(m.pointerId),w.current.size===0&&(M.current=null,y.current=null,j.current=null,E(!1));return}if(w.current.set(m.pointerId,{x:m.clientX,y:m.clientY}),w.current.size>=2){const[W,F]=[...w.current.values()],U=Math.hypot(W.x-F.x,W.y-F.y),q=j.current;if(j.current=U,q===null||q===0)return;const X=f.current?.getBoundingClientRect();N.current=!0,b(U/q,(W.x+F.x)/2-(X?.left??0),(W.y+F.y)/2-(X?.top??0));return}const I=y.current,P=M.current;if(!I||!P||!N.current&&Math.hypot(m.clientX-I.x,m.clientY-I.y)<a)return;N.current||(N.current=!0,E(!0),m.currentTarget.setPointerCapture?.(m.pointerId));const A=m.clientX-P.x,k=m.clientY-P.y;M.current={x:m.clientX,y:m.clientY};const R=l.current.camera;l.current.options.onManualMove?.("pan"),x({...R,panX:R.panX-A/R.zoom,panY:R.panY-k/R.zoom})},[x,a,b]),z=u.useCallback(m=>{if(w.current.delete(m.pointerId),m.currentTarget.releasePointerCapture?.(m.pointerId),w.current.size===1){const[I]=[...w.current.values()];M.current={...I},y.current={...I},j.current=null;return}w.current.size===0&&(M.current=null,y.current=null,j.current=null,E(!1))},[]),Z=u.useCallback(m=>{if(l.current.options.enabled===!1||m.target!==m.currentTarget||m.ctrlKey||m.metaKey||m.altKey)return;const I=l.current.camera,{w:P,h:A}=h(),k=(R,W)=>{const F=(R==="panX"?P:A)/I.zoom;l.current.options.onManualMove?.("pan"),x({...I,[R]:I[R]+W*F*Xo})};switch(m.key){case"ArrowLeft":k("panX",-1);break;case"ArrowRight":k("panX",1);break;case"ArrowUp":k("panY",-1);break;case"ArrowDown":k("panY",1);break;case"+":case"=":$(Et);break;case"-":case"_":$(1/Et);break;case"0":c();break;default:return}m.preventDefault()},[x,c,h,$]);return{camera:s,setCamera:_,reset:c,zoomBy:$,viewportProps:{ref:f,tabIndex:0,role:"group",onPointerDown:D,onPointerMove:O,onPointerUp:z,onPointerCancel:z,onFocus:m=>{m.target===m.currentTarget&&m.currentTarget.matches(":focus-visible")&&v(Wo)},onBlur:()=>v(null),onKeyDown:Z,style:{touchAction:"none",cursor:G?"grabbing":"grab"}},didPan:()=>N.current,isDragging:G,hint:S}}const Rt="(prefers-reduced-motion: reduce)";function ni(){const[e,t]=u.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia(Rt).matches);return u.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const n=window.matchMedia(Rt),a=()=>t(n.matches);return a(),n.addEventListener("change",a),()=>n.removeEventListener("change",a)},[]),e}const cn=u.createContext(null);function ri({widget:e,scope:t,children:n}){const a=u.useMemo(()=>({widget:e,scope:t}),[e,t]);return r.jsx(cn.Provider,{value:a,children:n})}function ai(e){const t=u.useContext(cn);if(!(!t||t.widget!==e))return t.scope}function oi(e){if(e.length===0)return[];const t=[[e[0]]];for(let n=1;n<e.length;n++)Zo(e[n-1],e[n])?t.push([e[n]]):t[t.length-1].push(e[n]);return t}function si(e,t,n,a){if(e.length===0||!(t>0))return[];const o=[e[0].x];let s=o[0],i=o[0];for(let l=1;l<e.length;l++){const d=o[l-1],f=d+Ko(e[l].x-d,t);o.push(f),f<s&&(s=f),f>i&&(i=f)}return Vo(s,i,n,a,t).map(l=>e.map((d,f)=>({...d,x:o[f]+l})))}function Vo(e,t,n,a,o){if(!(o>0)||!Number.isFinite(e)||!Number.isFinite(t))return[];const s=Math.ceil((n-t)/o),i=Math.floor((a-e)/o),l=[];for(let d=s;d<=i;d++)l.push(d*o+0);return l}function Ko(e,t){const n=t/2;return((e+n)%t+t)%t-n}function Zo(e,t){const n=It(e),a=It(t),o=Jo(n,a);if(o===0)return!1;const s=St(qo(n,a));if(s===null||Math.asin(Math.min(1,Math.abs(s[2])))>=o)return!1;const l=[0,0,e.lat+t.lat>=0?1:-1],d=St(Qo(l,s));if(d===null)return!1;const f=ue(n,a);return ue(n,d)>f&&ue(a,d)>f}function It({lat:e,lon:t}){const n=e*Math.PI/180,a=t*Math.PI/180,o=Math.cos(n);return[o*Math.cos(a),o*Math.sin(a),Math.sin(n)]}function ue(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function qo(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Jo(e,t){return Math.acos(Math.max(-1,Math.min(1,ue(e,t))))}function Qo(e,t){const n=ue(e,t);return[e[0]-n*t[0],e[1]-n*t[1],e[2]-n*t[2]]}function St(e){const t=Math.hypot(e[0],e[1],e[2]);return t<1e-12?null:[e[0]/t,e[1]/t,e[2]/t]}export{Js as $,gs as A,bs as B,$s as C,Rs as D,Ls as E,ta as F,Ys as G,Ps as H,or as I,pa as J,Us as K,Fs as L,Ms as M,Kt as N,Aa as O,Ws as P,Ta as Q,Zt as R,Ma as S,Vs as T,Qt as U,Zs as V,js as W,ho as X,xo as Y,qs as Z,zs as _,ka as a,Ia as a0,Qs as a1,ei as a2,ri as a3,ar as a4,xr as a5,Mt as a6,Br as a7,Ns as a8,Vo as a9,Ks as aa,oi as ab,ti as ac,ni as ad,_s as ae,Uo as af,ai as ag,Pa as ah,Go as ai,si as aj,Sa as b,xs as c,vs as d,Bs as e,ws as f,ys as g,ks as h,Es as i,Is as j,Ss as k,Ts as l,As as m,Cs as n,Hs as o,Ds as p,Gs as q,Os as r,Ra as s,Da as t,Oa as u,La as v,Ca as w,Xs as x,Vt as y,Ea as z};
