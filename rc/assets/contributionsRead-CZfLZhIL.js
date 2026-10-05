import{j as a}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-RRA14VTW.js";import{h as F,l as G}from"./kepler-DtDJUp9i.js";import"./view-clock-formula-aC7mjXLK.js";import"./ksp-enum-names-VzzNPeFZ.js";import d from"./ext-styled-components-Br73TgY3.js";import{u as D,l as U}from"./capability-lock-Ckm-13bH.js";import"./reference-frame-C3IY91zk.js";import{m as W}from"./use-transmissions-CNXIlXpa.js";import{G as Y,w as q}from"./streamStatusWord-DiCPl-PU.js";function w({gap:e,fill:t=!1,children:n,...r}){return a.jsx(K,{$gap:e,$fill:t,...r,children:n})}const K=d.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>e?Y[e]:"var(--gap-related)"};
  ${({$fill:e})=>e?"flex: 1; min-height: 0;":""}

  /* Rendered as a list it is still a layout box: the browser's own list indent, margin and bullets would shift and squeeze its rows. Zero specificity, so a caller's own rule still wins. */
  &:where(ul, ol) {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`,E="__GONOGO_AUGMENT_REGISTRY__";function l(){const e=globalThis;return e[E]??={augments:new Map,counter:0,listeners:new Set},e[E]}const H={"distance-to-target.camera":"targeting.camera","distance-to-target.overlay":"targeting.overlay","astronaut-complex.training":"astronaut-complex.tab"};function Q(e){const t=H[e.augments];if(!t)return;const n=e.owner?`${e.owner.name} (${e.owner.id})`:"unknown",r=`Augment "${e.id}" binds retired slot "${e.augments}", renamed to "${t}"; it will render nothing until updated. Registered by Uplink: ${n}`;F()?G.error(r):console.error(r)}function C(){for(const e of l().listeners)e()}function I(e){return l().listeners.add(e),()=>{l().listeners.delete(e)}}function Ie(e){Q(e);const t=l();t.augments.set(e.id,{def:e,order:t.counter++}),C()}function N(e){return Array.from(l().augments.values()).filter(t=>t.def.augments===e).sort((t,n)=>{const r=t.def.priority??0,o=n.def.priority??0;return r!==o?r-o:t.order-n.order}).map(t=>t.def)}function Ne(){return Array.from(l().augments.values()).map(e=>e.def)}function Pe(e){return N(e).filter(t=>t.settings&&t.settings.length>0).map(t=>({augmentId:t.id,namespace:t.id,fields:t.settings??[]}))}function Oe(){const e=l();e.augments.clear(),e.counter=0,C()}function v(e){const t=c.createContext(null);function n({children:o}){const i=c.useRef(null);return i.current===null&&(i.current=e()),a.jsx(t.Provider,{value:i.current,children:o})}function r(){return c.useContext(t)}return{Context:t,Provider:n,useStore:r}}function V(){const e=new Map,t=new Set;return{setAvailable(n,r){if(e.get(n)!==r){e.set(n,r);for(const o of t)o()}},isAvailable(n){return e.get(n)??!1},subscribe(n){return t.add(n),()=>{t.delete(n)}}}}const b=v(V),ke=b.Context,Me=b.Provider,h=b.useStore,Z=()=>()=>{};function J(e){const t=h(),n=()=>t&&e?t.isAvailable(e):!1;return c.useSyncExternalStore(t?t.subscribe:Z,n,n)}function y({reason:e}){const{reason:t,hint:n}=typeof e=="string"?{reason:e,hint:void 0}:e;return a.jsxs(X,{role:"status","aria-live":"polite",children:[a.jsx(ee,{children:t}),n!==void 0&&a.jsx(te,{children:n})]})}const X=d.div`
  flex: 0 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-caption);
  text-align: center;
  padding: var(--inset-refusal);
`,ee=d.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`,te=d.div`
  color: var(--color-text-faint);
  font-size: var(--font-size-caption);
  letter-spacing: 0.04em;
`;function ne(e,t){return q(typeof e=="number"?{magnitude:e,unit:t}:e)}function P({children:e,fallback:t}){const{scope:n,locks:r}=D();if(r.length>0){const o={...U(r,ne),locks:r},i=t===void 0?a.jsx(y,{reason:o}):typeof t=="function"?t(o):t;return a.jsx(a.Fragment,{children:i})}return a.jsx(W.Provider,{value:n,children:e})}const re="data-section-full",se="data-section-fill";function oe({children:e,gap:t="rows",title:n,titleAs:r="h4",full:o=!1,fill:i=!1,...s}){const u=n==null?null:a.jsx(ie,{as:r,children:n}),f={gap:t,[re]:o?"":void 0,[se]:i?"":void 0,...s};return a.jsx(P,{fallback:L=>a.jsxs(w,{...f,children:[u,a.jsx(y,{reason:L})]}),children:a.jsxs(w,{...f,children:[u,e]})})}const ie=d.div`
  margin: 0;
  font-size: var(--font-size-value);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  ${({$rule:e})=>e?`
  padding-bottom: var(--gap-title-rule);
  border-bottom: 1px solid var(--color-border-subtle);
`:""}
`,ae=c.createContext(null);function x(){return c.useContext(ae)}function $e(e){const t=x(),n=e.name??(t?`${t.componentId}.${e.segment}`:void 0),r=g(n);return a.jsx(a.Fragment,{children:r.map(o=>a.jsx(ue,{augment:o,slotProps:e.props,asSection:n?.endsWith(".sections")===!0},o.id))})}const _=[];function g(e){return c.useSyncExternalStore(I,()=>e?T(e):_,()=>e?T(e):_)}function Be(e){const t=x(),n=t?`${t.componentId}.${e}`:void 0;return k(g(n))}function ze(e){return k(g(e))}const O=()=>()=>{};function k(e){const t=h(),n=()=>e.some(r=>!r.requires||t?.isAvailable(r.requires)===!0);return c.useSyncExternalStore(t?t.subscribe:O,n,n)}function Le(e){const t=g(e),n=h(),r=()=>t.find(o=>!o.requires||n?.isAvailable(o.requires)===!0)?.label;return c.useSyncExternalStore(n?n.subscribe:O,r,r)}const m=new Map;let p=!1;I(()=>{p=!1,m.clear()});function T(e){p||(m.clear(),p=!0);let t=m.get(e);return t===void 0&&(t=N(e),m.set(e,t)),t}function ce(e){const t=J(e.requires);return!e.requires||t}function ue({augment:e,slotProps:t,asSection:n}){if(!ce(e))return null;const r=e.component;return a.jsx(P,{fallback:n?o=>a.jsx(oe,{title:e.label,children:a.jsx(y,{reason:o})}):null,children:a.jsx(r,{...t})})}const R=Object.freeze([]);function le(e,t){for(const n in t)if(e[n]!==t[n])return!1;return!0}function M(){const e=new Map,t=new Set;let n=R,r=!0;function o(){r=!0;for(const s of t)s()}const i=new Map;return{register(s){const u={};return e.set(s.id,s),i.set(s.id,u),o(),()=>{i.get(s.id)===u&&(i.delete(s.id),e.delete(s.id)&&o())}},update(s,u){const f=e.get(s);!f||le(f,u)||(e.set(s,{id:s,...u}),o())},subscribe(s){return t.add(s),()=>{t.delete(s)}},getSnapshot(){return r&&(n=e.size===0?R:Array.from(e.values()),r=!1),n}}}const S={go:0,info:1,caution:2,warn:3,nogo:4,offline:5};function j(e){return S[e]}function fe(e){let t="go";for(const n of e)S[n]>S[t]&&(t=n);return t}function Fe(e){switch(e){case"live":return"go";case"resyncing":return"caution";case"recorded":return"info";case"held":case"last-before-blackout":return"warn";case"disconnected":case"absent":return"offline"}}function de(e){if(e.length===0)return null;const t=fe(e.map(n=>n.severity));for(const n of e)if(n.severity===t)return{id:n.id,severity:n.severity,label:n.label};return null}const A=Object.freeze([]);function me(e){if(e.length===0)return A;const t=new Map;for(const n of e)t.set(n.severity,(t.get(n.severity)??0)+1);return Array.from(t,([n,r])=>({severity:n,count:r})).sort((n,r)=>j(r.severity)-j(n.severity))}function ge(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n].severity!==t[n].severity||e[n].count!==t[n].count)return!1;return!0}function pe(){const e=M();let t=null,n=null,r=A,o=null;return{register:e.register,update:e.update,subscribe:e.subscribe,getSummary(){const i=e.getSnapshot();if(i===n)return t;const s=de(i);return n=i,t!==null&&s!==null&&t.id===s.id&&t.severity===s.severity&&t.label===s.label||(t=s),t},getBreakdown(){const i=e.getSnapshot();if(i===o)return r;const s=me(i);return o=i,ge(r,s)||(r=s),r}}}const Ge=A,$=v(pe),De=$.Provider,Se=$.useStore;function Ue(e){const t=Se(),n=e?.id,r=e?.severity,o=e?.label;c.useEffect(()=>!t||n===void 0||r===void 0?void 0:t.register({id:n,severity:r,label:o??""}),[t,n]),c.useEffect(()=>{!t||n===void 0||r===void 0||t.update(n,{severity:r,label:o??""})},[t,n,r,o])}const B=Object.freeze([]),ve=["badges","filters","meters"],We=["badges"],be=Object.freeze([]),he=v(()=>M());function z(){const e=he.useStore(),t=c.useCallback(r=>e?e.subscribe(r):()=>{},[e]),n=c.useCallback(()=>e?e.getSnapshot():be,[e]);return c.useSyncExternalStore(t,n)}function Ye(e){return z().find(n=>n.id===e)?.entries??B}function qe(e){const t=x(),n=z(),r=s=>ve.includes(s),o=s=>t&&r(s)?`${t.componentId}.${s}`:s,i=s=>n.find(u=>u.id===o(s))?.entries??B;return typeof e=="string"?i(e):Object.fromEntries(e.map(s=>[s,i(s)]))}export{$e as A,se as B,he as C,ke as D,re as E,We as F,j as G,y as I,P as L,Ge as N,De as P,H as R,oe as S,ae as W,ve as a,h as b,Ye as c,Me as d,ie as e,w as f,Oe as g,V as h,Pe as i,Ne as j,N as k,ce as l,qe as m,Se as n,I as o,ze as p,Le as q,Ie as r,Fe as s,Ue as t,x as u,Be as v,fe as w,ne as x,v as y,M as z};
