import{j as a}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-RRA14VTW.js";import{f as L,aC as F,aR as G}from"./view-clock-formula-DcLQJabS.js";import"./ksp-enum-names-BMz6X3__.js";import"./screen-DTFovtBn.js";import{h as U}from"./lagrange-CsOvgNk7.js";import"./use-transmissions-DYay_Icj.js";import d from"./ext-styled-components-Br73TgY3.js";import{u as W,l as Y}from"./capability-lock-DpnX90O0.js";import{G as q,w as K}from"./streamStatusWord-C3H43Y2G.js";function w({gap:e,fill:t=!1,children:n,...r}){return a.jsx(H,{$gap:e,$fill:t,...r,children:n})}const H=d.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>e?q[e]:"var(--gap-related)"};
  ${({$fill:e})=>e?"flex: 1; min-height: 0;":""}

  /* Rendered as a list it is still a layout box: the browser's own list indent, margin and bullets would shift and squeeze its rows. Zero specificity, so a caller's own rule still wins. */
  &:where(ul, ol) {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`,E="__GONOGO_AUGMENT_REGISTRY__";function l(){const e=globalThis;return e[E]??={augments:new Map,counter:0,listeners:new Set},e[E]}const Q={"distance-to-target.camera":"targeting.camera","distance-to-target.overlay":"targeting.overlay","astronaut-complex.training":"astronaut-complex.tab"};function V(e){const t=Q[e.augments];if(!t)return;const n=e.owner?`${e.owner.name} (${e.owner.id})`:"unknown",r=`Augment "${e.id}" binds retired slot "${e.augments}", renamed to "${t}"; it will render nothing until updated. Registered by Uplink: ${n}`;F()?G.error(r):console.error(r)}function C(){for(const e of l().listeners)e()}function I(e){return l().listeners.add(e),()=>{l().listeners.delete(e)}}function Ne(e){V(e),L(e.id,e.sizeDelta);const t=l();t.augments.set(e.id,{def:e,order:t.counter++}),C()}function N(e){return Array.from(l().augments.values()).filter(t=>t.def.augments===e).sort((t,n)=>{const r=t.def.priority??0,o=n.def.priority??0;return r!==o?r-o:t.order-n.order}).map(t=>t.def)}function Pe(){return Array.from(l().augments.values()).map(e=>e.def)}function Oe(e){return N(e).filter(t=>t.settings&&t.settings.length>0).map(t=>({augmentId:t.id,namespace:t.id,fields:t.settings??[]}))}function ke(){const e=l();e.augments.clear(),e.counter=0,C()}function v(e){const t=c.createContext(null);function n({children:o}){const i=c.useRef(null);return i.current===null&&(i.current=e()),a.jsx(t.Provider,{value:i.current,children:o})}function r(){return c.useContext(t)}return{Context:t,Provider:n,useStore:r}}function Z(){const e=new Map,t=new Set;return{setAvailable(n,r){if(e.get(n)!==r){e.set(n,r);for(const o of t)o()}},isAvailable(n){return e.get(n)??!1},subscribe(n){return t.add(n),()=>{t.delete(n)}}}}const b=v(Z),Me=b.Context,$e=b.Provider,h=b.useStore,J=()=>()=>{};function X(e){const t=h(),n=()=>t&&e?t.isAvailable(e):!1;return c.useSyncExternalStore(t?t.subscribe:J,n,n)}function y({reason:e}){const{reason:t,hint:n}=typeof e=="string"?{reason:e,hint:void 0}:e;return a.jsxs(ee,{role:"status","aria-live":"polite",children:[a.jsx(te,{children:t}),n!==void 0&&a.jsx(ne,{children:n})]})}const ee=d.div`
  flex: 0 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-caption);
  text-align: center;
  padding: var(--inset-refusal);
`,te=d.div`
  color: var(--color-text-muted);
  font-size: var(--font-size-caption);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`,ne=d.div`
  color: var(--color-text-faint);
  font-size: var(--font-size-caption);
  letter-spacing: 0.04em;
`;function re(e,t){return K(typeof e=="number"?{magnitude:e,unit:t}:e)}function P({children:e,fallback:t}){const{scope:n,locks:r}=W();if(r.length>0){const o={...Y(r,re),locks:r},i=t===void 0?a.jsx(y,{reason:o}):typeof t=="function"?t(o):t;return a.jsx(a.Fragment,{children:i})}return a.jsx(U.Provider,{value:n,children:e})}const se="data-section-full",oe="data-section-fill";function ie({children:e,gap:t="rows",title:n,titleAs:r="h4",full:o=!1,fill:i=!1,...s}){const u=n==null?null:a.jsx(ae,{as:r,children:n}),f={gap:t,[se]:o?"":void 0,[oe]:i?"":void 0,...s};return a.jsx(P,{fallback:D=>a.jsxs(w,{...f,children:[u,a.jsx(y,{reason:D})]}),children:a.jsxs(w,{...f,children:[u,e]})})}const ae=d.div`
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
`,ce=c.createContext(null);function x(){return c.useContext(ce)}function ze(e){const t=x(),n=e.name??(t?`${t.componentId}.${e.segment}`:void 0),r=m(n);return a.jsx(a.Fragment,{children:r.map(o=>a.jsx(le,{augment:o,slotProps:e.props,asSection:n?.endsWith(".sections")===!0},o.id))})}const _=[];function m(e){return c.useSyncExternalStore(I,()=>e?T(e):_,()=>e?T(e):_)}function Be(e){const t=x(),n=t?`${t.componentId}.${e}`:void 0;return k(m(n))}function De(e){return k(m(e))}const O=()=>()=>{};function k(e){const t=h(),n=()=>e.some(r=>!r.requires||t?.isAvailable(r.requires)===!0);return c.useSyncExternalStore(t?t.subscribe:O,n,n)}function Le(e){const t=m(e),n=h(),r=()=>t.find(o=>!o.requires||n?.isAvailable(o.requires)===!0)?.label;return c.useSyncExternalStore(n?n.subscribe:O,r,r)}const g=new Map;let p=!1;I(()=>{p=!1,g.clear()});function T(e){p||(g.clear(),p=!0);let t=g.get(e);return t===void 0&&(t=N(e),g.set(e,t)),t}function ue(e){const t=X(e.requires);return!e.requires||t}function le({augment:e,slotProps:t,asSection:n}){if(!ue(e))return null;const r=e.component;return a.jsx(P,{fallback:n?o=>a.jsx(ie,{title:e.label,children:a.jsx(y,{reason:o})}):null,children:a.jsx(r,{...t})})}const R=Object.freeze([]);function fe(e,t){for(const n in t)if(e[n]!==t[n])return!1;return!0}function M(){const e=new Map,t=new Set;let n=R,r=!0;function o(){r=!0;for(const s of t)s()}const i=new Map;return{register(s){const u={};return e.set(s.id,s),i.set(s.id,u),o(),()=>{i.get(s.id)===u&&(i.delete(s.id),e.delete(s.id)&&o())}},update(s,u){const f=e.get(s);!f||fe(f,u)||(e.set(s,{id:s,...u}),o())},subscribe(s){return t.add(s),()=>{t.delete(s)}},getSnapshot(){return r&&(n=e.size===0?R:Array.from(e.values()),r=!1),n}}}const S={go:0,info:1,caution:2,warn:3,nogo:4,offline:5};function j(e){return S[e]}function de(e){let t="go";for(const n of e)S[n]>S[t]&&(t=n);return t}function Fe(e){switch(e){case"live":return"go";case"resyncing":return"caution";case"recorded":return"info";case"held":case"last-before-blackout":case"loading":case"no-game":return"warn";case"disconnected":case"absent":return"offline"}}function ge(e){if(e.length===0)return null;const t=de(e.map(n=>n.severity));for(const n of e)if(n.severity===t)return{id:n.id,severity:n.severity,label:n.label};return null}const A=Object.freeze([]);function me(e){if(e.length===0)return A;const t=new Map;for(const n of e)t.set(n.severity,(t.get(n.severity)??0)+1);return Array.from(t,([n,r])=>({severity:n,count:r})).sort((n,r)=>j(r.severity)-j(n.severity))}function pe(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n].severity!==t[n].severity||e[n].count!==t[n].count)return!1;return!0}function Se(){const e=M();let t=null,n=null,r=A,o=null;return{register:e.register,update:e.update,subscribe:e.subscribe,getSummary(){const i=e.getSnapshot();if(i===n)return t;const s=ge(i);return n=i,t!==null&&s!==null&&t.id===s.id&&t.severity===s.severity&&t.label===s.label||(t=s),t},getBreakdown(){const i=e.getSnapshot();if(i===o)return r;const s=me(i);return o=i,pe(r,s)||(r=s),r}}}const Ge=A,$=v(Se),Ue=$.Provider,ve=$.useStore;function We(e){const t=ve(),n=e?.id,r=e?.severity,o=e?.label;c.useEffect(()=>!t||n===void 0||r===void 0?void 0:t.register({id:n,severity:r,label:o??""}),[t,n]),c.useEffect(()=>{!t||n===void 0||r===void 0||t.update(n,{severity:r,label:o??""})},[t,n,r,o])}const z=Object.freeze([]),be=["badges","filters","meters"],Ye=["badges"],he=Object.freeze([]),ye=v(()=>M());function B(){const e=ye.useStore(),t=c.useCallback(r=>e?e.subscribe(r):()=>{},[e]),n=c.useCallback(()=>e?e.getSnapshot():he,[e]);return c.useSyncExternalStore(t,n)}function qe(e){return B().find(n=>n.id===e)?.entries??z}function Ke(e){const t=x(),n=B(),r=s=>be.includes(s),o=s=>t&&r(s)?`${t.componentId}.${s}`:s,i=s=>n.find(u=>u.id===o(s))?.entries??z;return typeof e=="string"?i(e):Object.fromEntries(e.map(s=>[s,i(s)]))}export{ze as A,oe as B,ye as C,Me as D,se as E,Ye as F,j as G,y as I,P as L,Ge as N,Ue as P,Q as R,ie as S,ce as W,be as a,h as b,qe as c,$e as d,ae as e,w as f,ke as g,Z as h,Oe as i,Pe as j,N as k,ue as l,Ke as m,ve as n,I as o,De as p,Le as q,Ne as r,Fe as s,We as t,x as u,Be as v,de as w,re as x,v as y,M as z};
