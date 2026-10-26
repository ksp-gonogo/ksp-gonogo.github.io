import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import u,{css as g}from"./ext-styled-components-DAuodqsN.js";import{r as p}from"./ext-react-C0MU9AHG.js";import{h as _,S as E,i as k,g as R}from"./widgetSize-Bsz-nygI.js";import{P as z,a7 as y,$ as x,ac as b,ad as F,ab as S,ae as C}from"./ModalSaveBar-4DBGWQQt.js";import{T as v,S as L,w as A,d as j}from"./contributionsRead-7xk7JRz7.js";import{b2 as B}from"./view-clock-formula-abdswcZN.js";import"./ksp-enum-names-DZWzv0rT.js";function N({lit:e,of:t,tone:o="neutral",label:n}){const i=e===null?"unknown":`${e} of ${t}`;return r.jsx(H,{role:"img","aria-label":n===void 0?i:`${n} ${i}`,"data-level-bars":"",children:Array.from({length:t},(c,a)=>r.jsx(O,{$fill:e!==null&&a<e?v[o]:null,$height:(a+1)/t},a))})}const H=u.span`
  display: inline-flex;
  align-items: flex-end;
  gap: var(--gap-signal-bars);
  height: 0.8em;
  flex: none;
`,O=u.span`
  width: 0.22em;
  height: ${({$height:e})=>`${Math.round(e*100)}%`};
  background: ${({$fill:e})=>e??"transparent"};
  border: 1px solid ${({$fill:e})=>e??"var(--color-border-subtle)"};
`,M={telemetry:{bg:"var(--color-go-status)",fg:"var(--color-accent-fg)",border:"var(--color-go-status)"},control:{bg:"var(--color-tag-dark-brown-bg)",fg:"var(--color-tag-yellow-fg)",border:"var(--color-tag-dark-brown-border)"},system:{bg:"var(--color-tag-blue-bg)",fg:"var(--color-tag-blue-fg)",border:"var(--color-tag-blue-border)"},kos:{bg:"var(--color-tag-purple-bg)",fg:"var(--color-tag-purple-fg)",border:"var(--color-tag-blue-border)"}},G={bg:"var(--color-surface-panel)",fg:"var(--color-text-dim)",border:"var(--color-border-subtle)"};function I(e){return M[e]??G}function je({label:e,symbol:t,name:o=!1,...n}){const i=I(e);return r.jsxs(P,{$bg:i.bg,$fg:i.fg,$border:i.border,$symbol:t!==void 0,$name:o,...n,children:[t!==void 0&&r.jsx(U,{$name:o,"aria-hidden":"true",children:r.jsx(W,{children:t})}),t!==void 0?r.jsx(q,{$name:o,children:e}):e]})}const P=u.span`
  display: ${({$symbol:e})=>e?"inline-flex":"inline-block"};
  ${({$symbol:e,$name:t})=>e?g`padding: 0;`:t?g`padding: 0 var(--gap-glyph);`:g`padding: var(--inset-chip);`}
  border-radius: var(--radius-regular);
  ${({$symbol:e})=>e&&"overflow: hidden;"}
  ${({$name:e})=>e?g`
          font-size: var(--font-size-compact);
        `:g`
          font-size: var(--font-size-caption);
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        `}

  ${({$bg:e,$fg:t,$border:o})=>g`
    background: ${e};
    color: ${t};
    border: 1px solid ${o};
  `}
`,U=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({$name:e})=>e?g`padding: 0 var(--gap-glyph);`:g`padding: var(--inset-chip);`}
  background: currentColor;
`,W=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  font-weight: 800;
  line-height: var(--line-height-flush);
  color: var(--color-surface-panel);
`,q=u.span`
  ${({$name:e})=>e?g`padding: 0 var(--gap-glyph) 0 var(--gap-glyph-tray);`:g`padding: var(--inset-chip);`}
`;function D(e){return e===null||!e.capacity.isPositive()?null:e.amount.dividedBy(e.capacity).magnitude}function $e({title:e,essentials:t,equalRows:o=!1}){const n=o?void 0:t[0],i=o?t:t.slice(1),{rowsRef:c,drawn:a}=K(i),s=t.some(l=>l.urgent!==void 0),d=n!==void 0&&i.length===0&&n.label.toUpperCase()===e.toUpperCase(),f=n?.value!=null&&n.gauge?.style==="arc"?n.gauge:void 0,h=f!==void 0;return r.jsx(z,{panelTitle:e,fitToSize:!0,hoverTitle:!0,panelTrend:n?.trend===void 0?void 0:({w:l,h:T})=>r.jsx(E,{values:n.trend??[],width:l,height:T,"aria-label":`${n.label} trend`}),sections:r.jsxs(L,{full:!0,children:[r.jsx(y,{visuallyHidden:!0,children:ie(t.filter(l=>l.urgent!==!0))}),s&&r.jsx(y,{visuallyHidden:!0,assertive:!0,additionsOnly:!0,children:oe(t).map(l=>r.jsx(p.Fragment,{children:`${l}. `},l))}),n!==void 0&&r.jsxs(ae,{"data-tiny-essential":"",children:[d||h?r.jsx(x,{as:"dt",children:n.label}):r.jsx(w,{children:n.label}),n.value!=null&&f!==void 0?r.jsx(V,{essential:n,gauge:f}):n.gauge===void 0?r.jsx($,{$tone:n.tone??"neutral",children:r.jsx(m,{essential:n})}):r.jsxs(se,{$tone:n.tone??"neutral",children:[r.jsx(le,{children:r.jsx(m,{essential:n})}),r.jsx(Q,{essential:n,gauge:n.gauge})]})]}),i.length>0&&r.jsxs(ue,{ref:c,$equal:o,children:[i.slice(0,a).map(l=>r.jsxs(ge,{"data-tiny-essential":"",$equal:o,children:[r.jsx(w,{children:l.label}),r.jsx(fe,{$tone:l.tone??"neutral",children:r.jsx(m,{essential:l})})]},l.label)),i.slice(a).map(l=>r.jsxs(x,{as:"div",children:[r.jsx("dt",{children:l.label}),r.jsx("dd",{children:l.control===void 0?r.jsx(m,{essential:l}):l.control.label})]},l.label))]})]})})}function K(e){const t=p.useRef(null),[o,n]=p.useState(e.length),[i,c]=p.useState(0),a=e.map(s=>`${s.label}\0${s.word??Z(s.value)}`).join("");return p.useLayoutEffect(()=>{n(e.length)},[a,i,e.length]),p.useLayoutEffect(()=>{const s=t.current?.closest("[data-panel-fit-body]"),d=s?.firstElementChild;!s||!d||o===0||X(d)>s.clientHeight&&n(o-1)}),p.useLayoutEffect(()=>{const s=t.current?.closest("[data-panel-fit-body]");if(!s||typeof ResizeObserver>"u")return;let d=s.clientHeight;const f=new ResizeObserver(()=>{s.clientHeight!==d&&(d=s.clientHeight,c(h=>h+1))});return f.observe(s),()=>f.disconnect()},[]),{rowsRef:t,drawn:o}}function Z(e){try{return JSON.stringify(e)??""}catch{return String(e)}}function X(e){const t=[],o=[];for(const n of Array.from(e.querySelectorAll("[data-tiny-essential]"))){const i=n.getBoundingClientRect();t.push(i.top),o.push(i.bottom)}return t.length===0?0:Math.max(...o)-Math.min(...t)}function m({essential:e}){const{control:t}=e;return t!==void 0?r.jsx(F,{text:t.hint??t.title,children:r.jsx(R,{size:"sm",pressed:t.active,disabled:t.disabled,onClick:t.onPress,"aria-label":t.title,children:t.label})}):r.jsxs(r.Fragment,{children:[e.level!==void 0&&r.jsx(N,{lit:e.level.lit,of:e.level.of,tone:e.tone,label:e.label}),e.word!==void 0?e.word:r.jsx(J,{essential:e})]})}function Y(e,t){return typeof e=="object"&&e!==null&&"state"in e?{...e,value:t.abs()}:t.abs()}function J({essential:e}){const{mark:t,value:o,decimals:n}=e,{held:i,shown:c}=b(o),a=e.signed===!0&&c?.isFinite()===!0,s=a&&n!==void 0&&Math.abs(c.valueOf())<.5*10**-n,d=a&&(s||!c.isNegative())?"+":"",f=s?Y(o,c):o,h=r.jsxs(r.Fragment,{children:[d,r.jsx(S,{value:f,decimals:n,scale:"compact",elsewhere:t?.elsewhere===!0&&(i||t.kind===void 0)?t.caption:void 0})]});return t===void 0||i||t.kind===void 0?h:r.jsx(C,{kind:t.kind,elsewhere:t.elsewhere,caption:t.caption,children:h})}function Q({essential:e,gauge:t}){const{shown:o,held:n}=b(e.value),i=a=>D({amount:a.max(t.min).min(t.max).minus(t.min),capacity:t.max.minus(t.min)})??0,c=o==null?null:i(o);return r.jsxs(de,{"aria-hidden":"true","data-tiny-gauge":"","data-held":n?"":void 0,viewBox:"0 0 100 1",preserveAspectRatio:"none",children:[(t.bands??[]).map(a=>r.jsx("rect",{x:i(a.from)*100,y:0,width:(i(a.to)-i(a.from))*100,height:1,fill:v[a.tone],opacity:.35},`${i(a.from)}-${i(a.to)}`)),c!==null&&r.jsx("rect",{"data-tiny-gauge-fill":"",x:0,y:0,width:c*100,height:1,fill:v[e.tone??"neutral"],opacity:n?.55:1})]})}function V({essential:e,gauge:t}){const{ref:o,room:n}=ee(),i=Math.min(n.w,te),c=Math.min(n.h-ne,Math.round(i/2)+re),a=e.value;if(a==null)return null;const s=b(a).shown;return r.jsx(ce,{ref:o,children:r.jsx(k,{startAngle:-90,sweep:180,value:a,min:t.min,max:t.max,zones:(t.bands??[]).map(d=>({from:d.from,to:d.to,color:v[d.tone]})),width:i,height:c,readout:"large","aria-label":s==null?e.label:`${e.label} ${A(s)}`})})}function ee(){const e=p.useRef(null),[t,o]=p.useState({w:200,h:110});return p.useLayoutEffect(()=>{const n=e.current?.closest("[data-panel-fit-body]"),i=n?.closest("[data-panel-body]");if(!n||!i||typeof ResizeObserver>"u")return;const c=()=>{const s=getComputedStyle(i),d=getComputedStyle(n),f=i.clientWidth-Number.parseFloat(s.paddingLeft)-Number.parseFloat(s.paddingRight),h=i.clientHeight-Number.parseFloat(s.paddingTop)-Number.parseFloat(s.paddingBottom)-Number.parseFloat(d.marginTop)-Number.parseFloat(d.marginBottom);f>0&&h>0&&o({w:Math.floor(f),h:Math.floor(h)})};c();const a=new ResizeObserver(c);return a.observe(i),()=>a.disconnect()},[]),{ref:e,room:t}}const te=280,ne=16,re=40;function ie(e){return e.filter(t=>t.word!==void 0).map(t=>`${t.label} ${t.word}`).join(", ")}function oe(e){return e.filter(t=>t.urgent===!0&&t.word!==void 0).map(t=>`${t.label} ${t.word}`)}function Te(e,t,o){if(e.tiny===void 0||t===void 0||o===void 0)return!1;const n=e.minSize??_;return t<n.w||o<n.h}function _e(e){return e.tiny!==void 0?B:e.minSize}const ae=u.dl`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: var(--gap-tiny-content);
  margin: 0;
  min-width: 0;
`,$=u.dd`
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
  color: ${({$tone:e})=>j[e]};
`,se=u($)`
  flex-direction: column;
  align-items: stretch;
  gap: var(--gap-caption);
  line-height: var(--line-height-flush);
`,le=u.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--gap-figure-parts);
`,ce=u.dd`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`,de=u.svg`
  display: block;
  width: 100%;
  height: var(--size-tiny-gauge);
`,w=u.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
`,ue=u.dl`
  ${({$equal:e})=>e?g`
          display: grid;
          grid-template-columns: auto auto;
          justify-content: space-between;
          /* The section around the rows shrinks to its content, so the rows take the tile's width from the fit body, which is the query container. */
          min-width: 100cqw;
          align-items: baseline;
          column-gap: var(--gap-label-value-tight);
          row-gap: var(--gap-related-packed);
        `:g`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--gap-row-wrap);
        `}
  margin: 0;
  max-width: 100%;
`,ge=u.div`
  ${({$equal:e})=>e?g`
          display: grid;
          grid-template-columns: subgrid;
          grid-column: 1 / -1;
          align-items: baseline;
          white-space: nowrap;
        `:g`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: baseline;
          column-gap: var(--gap-label-value-tight);
        `}
  max-width: 100%;
`,fe=u.dd`
  display: inline-flex;
  justify-content: flex-end;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  margin: 0;
  font-size: var(--font-size-value);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({$tone:e})=>j[e]};
`;export{N as L,je as T,$e as a,_e as g,Te as s};
