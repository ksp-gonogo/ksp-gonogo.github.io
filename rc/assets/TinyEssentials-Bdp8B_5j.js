import{j as i}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./ext-react-RRA14VTW.js";import d,{css as m}from"./ext-styled-components-Br73TgY3.js";import{h as $,S as E,i as R,g as F}from"./widgetSize-CCkcPGjs.js";import{P as k,a6 as x,_ as b,ac as y,ad as z,ab as S,ae as A}from"./ModalSaveBar-Dsrr6g10.js";import{T as v,S as C,w as L,d as j}from"./contributionsRead-C3g_UQ48.js";import{b1 as N}from"./view-clock-formula-DqG9ZLdd.js";import"./ksp-enum-names-DkJHgb8J.js";function B({lit:e,of:t,tone:o="neutral",label:n}){const r=e===null?"unknown":`${e} of ${t}`;return i.jsx(H,{role:"img","aria-label":n===void 0?r:`${n} ${r}`,"data-level-bars":"",children:Array.from({length:t},(c,a)=>i.jsx(M,{$fill:e!==null&&a<e?v[o]:null,$height:(a+1)/t},a))})}const H=d.span`
  display: inline-flex;
  align-items: flex-end;
  gap: var(--gap-signal-bars);
  height: 0.8em;
  flex: none;
`,M=d.span`
  width: 0.22em;
  height: ${({$height:e})=>`${Math.round(e*100)}%`};
  background: ${({$fill:e})=>e??"transparent"};
  border: 1px solid ${({$fill:e})=>e??"var(--color-border-subtle)"};
`;function O(e){return e===null||!e.capacity.isPositive()?null:e.amount.dividedBy(e.capacity).magnitude}function pe({title:e,essentials:t,equalRows:o=!1}){const n=o?void 0:t[0],r=o?t:t.slice(1),{rowsRef:c,drawn:a}=G(r),s=t.some(l=>l.urgent!==void 0),u=n!==void 0&&r.length===0&&n.label.toUpperCase()===e.toUpperCase(),h=n?.value!=null&&n.gauge?.style==="arc"?n.gauge:void 0,g=h!==void 0;return i.jsx(k,{panelTitle:e,fitToSize:!0,hoverTitle:!0,panelTrend:n?.trend===void 0?void 0:({w:l,h:T})=>i.jsx(E,{values:n.trend??[],width:l,height:T,"aria-label":`${n.label} trend`}),sections:i.jsxs(C,{full:!0,children:[i.jsx(x,{visuallyHidden:!0,children:J(t.filter(l=>l.urgent!==!0))}),s&&i.jsx(x,{visuallyHidden:!0,assertive:!0,additionsOnly:!0,children:Q(t).map(l=>i.jsx(f.Fragment,{children:`${l}. `},l))}),n!==void 0&&i.jsxs(V,{"data-tiny-essential":"",children:[u||g?i.jsx(b,{as:"dt",children:n.label}):i.jsx(w,{children:n.label}),n.value!=null&&h!==void 0?i.jsx(D,{essential:n,gauge:h}):n.gauge===void 0?i.jsx(_,{$tone:n.tone??"neutral",children:i.jsx(p,{essential:n})}):i.jsxs(ee,{$tone:n.tone??"neutral",children:[i.jsx(te,{children:i.jsx(p,{essential:n})}),i.jsx(U,{essential:n,gauge:n.gauge})]})]}),r.length>0&&i.jsxs(re,{ref:c,$equal:o,children:[r.slice(0,a).map(l=>i.jsxs(oe,{"data-tiny-essential":"",$equal:o,children:[i.jsx(w,{children:l.label}),i.jsx(ae,{$tone:l.tone??"neutral",children:i.jsx(p,{essential:l})})]},l.label)),r.slice(a).map(l=>i.jsxs(b,{as:"div",children:[i.jsx("dt",{children:l.label}),i.jsx("dd",{children:l.control===void 0?i.jsx(p,{essential:l}):l.control.label})]},l.label))]})]})})}function G(e){const t=f.useRef(null),[o,n]=f.useState(e.length),[r,c]=f.useState(0),a=e.map(s=>`${s.label}\0${s.word??I(s.value)}`).join("");return f.useLayoutEffect(()=>{n(e.length)},[a,r,e.length]),f.useLayoutEffect(()=>{const s=t.current?.closest("[data-panel-fit-body]"),u=s?.firstElementChild;!s||!u||o===0||P(u)>s.clientHeight&&n(o-1)}),f.useLayoutEffect(()=>{const s=t.current?.closest("[data-panel-fit-body]");if(!s||typeof ResizeObserver>"u")return;let u=s.clientHeight;const h=new ResizeObserver(()=>{s.clientHeight!==u&&(u=s.clientHeight,c(g=>g+1))});return h.observe(s),()=>h.disconnect()},[]),{rowsRef:t,drawn:o}}function I(e){try{return JSON.stringify(e)??""}catch{return String(e)}}function P(e){const t=[],o=[];for(const n of Array.from(e.querySelectorAll("[data-tiny-essential]"))){const r=n.getBoundingClientRect();t.push(r.top),o.push(r.bottom)}return t.length===0?0:Math.max(...o)-Math.min(...t)}function p({essential:e}){const{control:t}=e;return t!==void 0?i.jsx(z,{text:t.hint??t.title,children:i.jsx(F,{size:"sm",pressed:t.active,disabled:t.disabled,onClick:t.onPress,"aria-label":t.title,children:t.label})}):i.jsxs(i.Fragment,{children:[e.level!==void 0&&i.jsx(B,{lit:e.level.lit,of:e.level.of,tone:e.tone,label:e.label}),e.word!==void 0?e.word:i.jsx(q,{essential:e})]})}function W(e,t){return typeof e=="object"&&e!==null&&"state"in e?{...e,value:t.abs()}:t.abs()}function q({essential:e}){const{mark:t,value:o,decimals:n}=e,{held:r,shown:c}=y(o),a=e.signed===!0&&c?.isFinite()===!0,s=a&&n!==void 0&&Math.abs(c.valueOf())<.5*10**-n,u=a&&(s||!c.isNegative())?"+":"",h=s?W(o,c):o,g=i.jsxs(i.Fragment,{children:[u,i.jsx(S,{value:h,decimals:n,scale:"compact",elsewhere:t?.elsewhere===!0&&(r||t.kind===void 0)?t.caption:void 0})]});return t===void 0||r||t.kind===void 0?g:i.jsx(A,{kind:t.kind,elsewhere:t.elsewhere,caption:t.caption,children:g})}function U({essential:e,gauge:t}){const{shown:o,held:n}=y(e.value),r=a=>O({amount:a.max(t.min).min(t.max).minus(t.min),capacity:t.max.minus(t.min)})??0,c=o==null?null:r(o);return i.jsxs(ie,{"aria-hidden":"true","data-tiny-gauge":"","data-held":n?"":void 0,viewBox:"0 0 100 1",preserveAspectRatio:"none",children:[(t.bands??[]).map(a=>i.jsx("rect",{x:r(a.from)*100,y:0,width:(r(a.to)-r(a.from))*100,height:1,fill:v[a.tone],opacity:.35},`${r(a.from)}-${r(a.to)}`)),c!==null&&i.jsx("rect",{"data-tiny-gauge-fill":"",x:0,y:0,width:c*100,height:1,fill:v[e.tone??"neutral"],opacity:n?.55:1})]})}function D({essential:e,gauge:t}){const{ref:o,room:n}=Z(),r=Math.min(n.w,K),c=Math.min(n.h-X,Math.round(r/2)+Y),a=e.value;if(a==null)return null;const s=y(a).shown;return i.jsx(ne,{ref:o,children:i.jsx(R,{startAngle:-90,sweep:180,value:a,min:t.min,max:t.max,zones:(t.bands??[]).map(u=>({from:u.from,to:u.to,color:v[u.tone]})),width:r,height:c,readout:"large","aria-label":s==null?e.label:`${e.label} ${L(s)}`})})}function Z(){const e=f.useRef(null),[t,o]=f.useState({w:200,h:110});return f.useLayoutEffect(()=>{const n=e.current?.closest("[data-panel-fit-body]"),r=n?.closest("[data-panel-body]");if(!n||!r||typeof ResizeObserver>"u")return;const c=()=>{const s=getComputedStyle(r),u=getComputedStyle(n),h=r.clientWidth-Number.parseFloat(s.paddingLeft)-Number.parseFloat(s.paddingRight),g=r.clientHeight-Number.parseFloat(s.paddingTop)-Number.parseFloat(s.paddingBottom)-Number.parseFloat(u.marginTop)-Number.parseFloat(u.marginBottom);h>0&&g>0&&o({w:Math.floor(h),h:Math.floor(g)})};c();const a=new ResizeObserver(c);return a.observe(r),()=>a.disconnect()},[]),{ref:e,room:t}}const K=280,X=16,Y=40;function J(e){return e.filter(t=>t.word!==void 0).map(t=>`${t.label} ${t.word}`).join(", ")}function Q(e){return e.filter(t=>t.urgent===!0&&t.word!==void 0).map(t=>`${t.label} ${t.word}`)}function me(e,t,o){if(e.tiny===void 0||t===void 0||o===void 0)return!1;const n=e.minSize??$;return t<n.w||o<n.h}function ve(e){return e.tiny!==void 0?N:e.minSize}const V=d.dl`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: var(--gap-tiny-content);
  margin: 0;
  min-width: 0;
`,_=d.dd`
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
`,ee=d(_)`
  flex-direction: column;
  align-items: stretch;
  gap: var(--gap-caption);
  line-height: var(--line-height-flush);
`,te=d.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--gap-figure-parts);
`,ne=d.dd`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`,ie=d.svg`
  display: block;
  width: 100%;
  height: var(--size-tiny-gauge);
`,w=d.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
`,re=d.dl`
  ${({$equal:e})=>e?m`
          display: grid;
          grid-template-columns: auto auto;
          justify-content: space-between;
          /* The section around the rows shrinks to its content, so the rows take the tile's width from the fit body, which is the query container. */
          min-width: 100cqw;
          align-items: baseline;
          column-gap: var(--gap-label-value-tight);
          row-gap: var(--gap-related-packed);
        `:m`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--gap-row-wrap);
        `}
  margin: 0;
  max-width: 100%;
`,oe=d.div`
  ${({$equal:e})=>e?m`
          display: grid;
          grid-template-columns: subgrid;
          grid-column: 1 / -1;
          align-items: baseline;
          white-space: nowrap;
        `:m`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: baseline;
          column-gap: var(--gap-label-value-tight);
        `}
  max-width: 100%;
`,ae=d.dd`
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
`;export{B as L,pe as T,ve as g,me as s};
