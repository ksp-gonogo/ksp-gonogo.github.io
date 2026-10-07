import{j as o}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-RRA14VTW.js";import{F as M,l as P,G as U,k as C,d as F,ar as H,ak as G,V as I,Z as $,a2 as W,a4 as A}from"./reckoningMarkDraw-YWRXTfQ-.js";import{f as Y,b as V,o as K,k as X,a as Z,S as J}from"./contributionsRead-DX1fDjB4.js";import{f as Q,ak as ee,I as te,U as O,P as ne,i as oe,H as re}from"./ToggleButton-CjwPj32s.js";import u,{css as x}from"./ext-styled-components-Br73TgY3.js";import{X as ie,a0 as se}from"./WidgetScope-uW0WD_fM.js";import{d as E,b as ae,T as D}from"./streamStatusWord-B4jOD6yJ.js";import"./screen-B-SznzLc.js";import{aA as le,ad as ce}from"./view-clock-formula-jZ84F5ld.js";import"./lagrange-Bh47AJBp.js";import"./use-transmissions-Cisu7ffk.js";import{T as ue}from"./tiny-size-BXC1Scz3.js";import"./ksp-enum-names-BonGv7cH.js";function de(){if(!("isSecureContext"in globalThis)||globalThis.isSecureContext!==!0)return{supported:!1,reason:"insecure-origin"};const e=typeof navigator>"u"?void 0:navigator.mediaDevices;return!e||typeof e.getUserMedia!="function"?{supported:!1,reason:"no-media-devices"}:{supported:!0}}function B(e,t){return e.label!==""?e.label:`Input ${t+1}, name withheld`}const fe=new Set(["NotAllowedError","PermissionDeniedError","SecurityError"]),ge=new Set(["NotFoundError","DevicesNotFoundError","OverconstrainedError","ConstraintNotSatisfiedError"]);function he(e){if(e instanceof Error&&e.name!=="")return e.name;if(typeof e=="object"&&e!==null&&"name"in e){const t=e.name;if(typeof t=="string"&&t!=="")return t}return"UnknownError"}function pe(e){return fe.has(e)?"refused":ge.has(e)?"no-device":"failed"}function _(e){for(const t of e.getTracks())t.stop()}function me(e){return e.getAudioTracks()[0]?.getSettings?.()?.deviceId??null}async function R(){const e=navigator.mediaDevices;if(!e||typeof e.enumerateDevices!="function")return[];try{return(await e.enumerateDevices()).filter(n=>n.kind==="audioinput"&&n.deviceId!=="").map(n=>({deviceId:n.deviceId,label:n.label}))}catch{return[]}}function ve(){const e=de();return{status:e.supported?"unasked":e.reason,devices:[],deviceId:null,stream:null,failure:null}}function xe(e={}){const[t,n]=c.useState(ve),r=c.useRef(null),s=c.useRef(null),l=c.useRef(!0),i=c.useRef(e);c.useEffect(()=>{i.current=e});const a=c.useCallback(()=>{const f=r.current;f&&(r.current=null,s.current=null,_(f),i.current.onStream?.(null))},[]),d=c.useCallback(f=>{const m=s.current,v=r.current!==null&&(m===null?f.length===0:!f.some(g=>g.deviceId===m));n(g=>g.status!=="ready"||!v?{...g,devices:f}:{...g,status:f.length===0?"no-device":"unasked",devices:f,deviceId:null,stream:null}),v&&a()},[a]);c.useEffect(()=>{const f=navigator.mediaDevices;if(!f)return;let m=!1;const v=()=>{R().then(g=>{m||d(g)})};return v(),f.addEventListener?.("devicechange",v),()=>{m=!0,f.removeEventListener?.("devicechange",v)}},[d]),c.useEffect(()=>(l.current=!0,()=>{l.current=!1,a()}),[a]);const h=c.useCallback(async f=>{const m=navigator.mediaDevices;if(!m||typeof m.getUserMedia!="function")return;n(g=>({...g,status:g.stream?g.status:"requesting",failure:null}));const v={...i.current.constraints,...f===null?{}:{deviceId:{exact:f}}};try{const g=await m.getUserMedia({audio:v});if(!l.current){_(g);return}const b=r.current;r.current=g,b&&b!==g&&_(b);const y=await R(),S=me(g)??f??y[0]?.deviceId,N=y.length>0?y:be(g,S);s.current=S??null,n({status:"ready",devices:N,deviceId:S??null,stream:g,failure:null}),i.current.onStream?.(g)}catch(g){if(!l.current)return;const b={name:he(g),deviceId:f};n(y=>y.stream?{...y,failure:b}:{status:pe(b.name),devices:y.devices,deviceId:null,stream:null,failure:b})}},[]),p=c.useCallback(()=>h(null),[h]),w=c.useCallback(f=>h(f),[h]),j=c.useCallback(()=>{a(),n(f=>({...f,status:f.status==="ready"?"unasked":f.status,deviceId:null,stream:null}))},[a]);return{...t,request:p,select:w,release:j}}function be(e,t){return t?[{deviceId:t,label:e.getAudioTracks()[0]?.label??""}]:[]}function Et({label:e="Audio input",...t}){const n=xe(t),r=c.useId(),s=ke(n);return o.jsxs(Y,{gap:"related-dense",children:[o.jsx(Q,{tone:je(n.status),live:!0,children:Se(n)}),n.status==="ready"&&n.devices.length>0?o.jsxs(M,{children:[o.jsx(P,{htmlFor:r,children:e}),o.jsx(U,{id:r,value:n.deviceId??"",onChange:l=>{n.select(l.target.value)},children:n.devices.map((l,i)=>o.jsx("option",{value:l.deviceId,children:B(l,i)},l.deviceId))}),n.failure?o.jsx(C,{children:`The requested input did not open. The browser reported ${n.failure.name}, and the previous input is still running.`}):null]}):null,ye(n.status)?o.jsx(F,{type:"button",onClick:()=>{n.request()},disabled:n.status==="requesting","aria-busy":n.status==="requesting",children:"Request microphone access"}):null,s?o.jsx(C,{children:s}):null]})}function ye(e){return e==="unasked"||e==="requesting"||e==="failed"}const we={"insecure-origin":"warn","no-media-devices":"nogo",unasked:"neutral",requesting:"info",refused:"nogo","no-device":"warn",failed:"nogo",ready:"go"};function je(e){return we[e]}function Se(e){switch(e.status){case"insecure-origin":return"This page is not a secure origin. Microphone capture is available on https pages and on localhost.";case"no-media-devices":return"This browser exposes no media device interface, so no input can be opened here.";case"unasked":return q(e)?"Microphone access is granted for this origin. No input is open.":"Microphone access has not been requested for this origin.";case"requesting":return"A capture request is with the browser, which may be prompting for access.";case"refused":return"Microphone access was refused for this origin. The browser holds that answer in its site settings and returns it to any further request without prompting.";case"no-device":return"No audio input device is present.";case"failed":return`The input did not open. The browser reported ${e.failure?.name??"an unnamed error"}.`;case"ready":return`Capturing from ${_e(e)}.`}}function q(e){return e.devices.some(t=>t.label!=="")}function _e(e){const t=e.devices.findIndex(r=>r.deviceId===e.deviceId),n=t===-1?void 0:e.devices[t];return n?B(n,t):"an unnamed input"}function ke(e){if(e.status!=="unasked"||q(e))return null;const t=e.devices.length;return t===0?null:t===1?"One audio input is visible. Its name is withheld by the browser until access is granted.":`${t} audio inputs are visible. Their names are withheld by the browser until access is granted.`}const T=c.createContext(null);function Tt({settings:e,setAugmentSetting:t,children:n}){const r=c.useMemo(()=>({settings:e,setAugmentSetting:t}),[e,t]);return o.jsx(T.Provider,{value:r,children:n})}function Ct(e){const t=c.useContext(T),n=t?.settings,r=t?.setAugmentSetting;return c.useMemo(()=>({values:n?.[e]??Ee,set:(s,l)=>r?.(e,s,l)}),[n,r,e])}function $t(){return c.useContext(T)?.settings}const Ee=Object.freeze({});function Rt({blocked:e=!1,flag:t,prompt:n,onSend:r,sendDisabled:s=!1,sendLabel:l="Send",sendVariant:i="icon",sendTooltip:a,children:d,...h}){const{anchor:p,tip:w}=H(a),j=c.useId();return o.jsxs(Te,{$blocked:e,...h,children:[n!==void 0&&o.jsx(Ce,{"aria-hidden":"true",children:n}),d,r!==void 0&&o.jsxs($e,{...p,children:[o.jsx(Re,{type:"button",disabled:s,onClick:r,$icon:i==="icon",...a?{"aria-describedby":j}:{},...i==="icon"?{"aria-label":l}:{},children:i==="icon"?o.jsx(G,{size:16}):l}),a&&o.jsx(I,{id:j,children:a.replace(`
`,". ")}),w]}),t!==void 0&&o.jsx(ze,{$blocked:e,role:"status",children:t})]})}const Te=u.div`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: var(--gap-composer);
  padding: var(--inset-field);
  background: var(--color-surface-panel);
  border: 1px solid
    ${({$blocked:e})=>e?"var(--color-nogo-text)":"var(--console-tone-fg, var(--color-accent-fg))"};
  border-radius: var(--radius-regular);
`,Ce=u.span`
  flex: 0 0 auto;
  color: var(--console-tone-fg, var(--color-accent-fg));
  font-weight: bold;
  margin-right: var(--gap-prompt-glyph);
`,$e=u.span`
  display: inline-flex;

  /* A disabled button swallows pointer events, so they go to the anchor instead. */
  > button:disabled {
    pointer-events: none;
  }
`,Re=u(F)`
  flex: 0 0 auto;
  margin-left: auto;
  font-size: var(--font-size-compact);

  ${({$icon:e})=>e&&x`
      /* The glyph centres in the box, and the inset is squared so the button is a square. */
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--inset-icon-button);
      /* The row's own outline tone, so the control reads as belonging to the row. */
      color: var(--console-tone-fg, var(--color-accent-fg));

      @media (pointer: coarse) {
        padding: var(--inset-icon-button-touch);
      }
    `}
`,ze=u.div`
  position: absolute;
  /* Straddles the top border by half its own height, which tracks the font size. */
  top: 0;
  transform: translateY(-50%);
  /* The left end of the border: a console's delay reading takes the right end, and the two can show together. */
  left: var(--inset-console-foot);
  /* Local ordering against its row only, so not on the --z-* ladder. */
  z-index: 1;
  /* Overlaps the prompt glyph, so it must not eat a press aimed at the control under it. */
  pointer-events: none;
  padding: var(--inset-chip);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-caption);
  font-weight: bold;
  letter-spacing: 0.04em;
  border-radius: var(--radius-regular);

  ${({$blocked:e})=>e?x`
          color: var(--color-nogo-on-status);
          background: var(--color-nogo-status);
          border: 1px solid var(--color-nogo-on-status);
        `:x`
          color: var(--color-text-muted);
          background: var(--color-surface-panel);
          border: 1px solid var(--color-border-subtle);
        `}
`;function Fe({tone:e="accent",queue:t,composer:n,standing:r,children:s,...l}){const i=t!==void 0||n!==void 0||r!==void 0,a=r!==void 0&&!!n;return o.jsxs(Ie,{"data-console-frame":"",$tone:e,...l,children:[o.jsx(Ae,{children:s}),i&&o.jsxs(De,{$straddled:a,children:[t,r!==void 0&&o.jsx(Oe,{"data-console-standing":"",$straddle:a,children:r}),n]})]})}const Ie=u.div`
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: var(--color-surface-panel);
  /* Subtle, not the tone: the accent belongs to the input's own border. */
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-regular);
  overflow: hidden;

  ${({$tone:e})=>e==="info"?x`
          --console-tone-fg: var(--color-info-text);
        `:x`
          --console-tone-fg: var(--color-accent-fg);
        `}
`,Ae=u.div`
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  display: flex;
`,Oe=u.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: var(--gap-console-readings);
  /* Overlaps the composer's corner with nothing to click, so it must not take a press. */
  pointer-events: none;

  ${({$straddle:e})=>e?x`
          position: absolute;
          right: var(--inset-console-foot);
          top: var(--inset-console-foot-straddled);
          transform: translateY(-50%);
          z-index: 1;
        `:x`
          align-self: flex-end;
        `}
`,De=u.div`
  position: relative;
  flex: 0 0 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--gap-console-foot);
  padding: var(--inset-console-foot);

  ${({$straddled:e})=>e&&x`
      padding-top: var(--inset-console-foot-straddled);
    `}
`,Be="Uplink queue";function zt({tone:e,oneWaySeconds:t=null,delayReading:n,canQueue:r=!0,alwaysBadge:s=!1,inFlight:l,inFlightFrozenAtDispatch:i=!1,composer:a,children:d,...h}){const p=ee({oneWaySeconds:t,canQueue:r,alwaysBadge:s}),w=p==="badge"?t:null,j=l!==void 0&&(p==="strip"||i&&p!=="badge");return o.jsx(Fe,{...e!==void 0?{tone:e}:{},...w!==null?{standing:o.jsx(ie,{oneWaySeconds:w,delayReading:n})}:{},...j?{queue:o.jsx(te,{items:l,ariaLabel:Be})}:{},...a!==void 0?{composer:a}:{},...h,children:d})}function qe({lit:e,of:t,tone:n="neutral",label:r}){const s=e===null?"unknown":`${e} of ${t}`;return o.jsx(Le,{role:"img","aria-label":r===void 0?s:`${r} ${s}`,"data-level-bars":"",children:Array.from({length:t},(l,i)=>o.jsx(Ne,{$fill:e!==null&&i<e?E[n]:null,$height:(i+1)/t},i))})}const Le=u.span`
  display: inline-flex;
  align-items: flex-end;
  gap: var(--gap-signal-bars);
  height: 0.8em;
  flex: none;
`,Ne=u.span`
  width: 0.22em;
  height: ${({$height:e})=>`${Math.round(e*100)}%`};
  background: ${({$fill:e})=>e??"transparent"};
  border: 1px solid ${({$fill:e})=>e??"var(--color-border-subtle)"};
`;function Ft({label:e,description:t,value:n,className:r}){return o.jsxs(Pe,{className:r,children:[o.jsxs(Ue,{children:[o.jsx(He,{children:e}),t!=null&&o.jsx(Ge,{children:t})]}),o.jsx(We,{$prose:typeof n=="string",children:o.jsx(Me,{value:n})})]})}function Me({value:e}){return e==null?o.jsx(ae,{}):typeof e=="object"?o.jsx(O,{value:e}):typeof e=="boolean"?e?"On":"Off":e}const Pe=u.dl`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--gap-field-term);
  margin: 0;
`,Ue=u.dt`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  min-width: 0;
  /* Grows into the space a short value leaves and yields to a long one. */
  flex: 1 1 auto;
`,He=u.span`
  font-size: var(--font-size-value);
  color: var(--color-text-primary);
`,Ge=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-dim);
  max-width: 32em;
`,We=u.dd`
  margin: 0;
  min-width: 0;
  text-align: right;
  font-size: var(--font-size-value);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-primary);

  /* A quantity never breaks from its symbol; a sentence wraps and takes at most half the row. */
  ${({$prose:e})=>e?`
          white-space: normal;
          max-width: 50%;
          text-align: left;
        `:"white-space: nowrap;"}
`;function Ye(e,t){const n={w:0,h:0},r=i=>{n.w+=i?.w??0,n.h+=i?.h??0},s=i=>i.requires===void 0||t(i.requires);for(const i of new Set(e.augmentSlots??[]))for(const a of X(i))s(a)&&r(a.sizeDelta);const l=new Set([...e.contributionSlots??[],...Z.map(i=>`${e.id}.${i}`)]);for(const i of l)for(const a of ce(i))s(a)&&r(a.sizeDelta);return n}function It(e,t){if(t.w===0&&t.h===0)return e;const n=r=>({w:r.w+t.w,h:r.h+t.h});return{...e,minSize:n(e.minSize??{w:1,h:1}),defaultSize:n(e.defaultSize??{w:3,h:3})}}function At(){const e=V(),[t,n]=c.useReducer(r=>r+1,0);return c.useEffect(()=>{const r=[K(n),le(n),e?.subscribe(n)];return()=>{for(const s of r)s?.()}},[e]),c.useCallback(r=>Ye(r,s=>e?.isAvailable(s)??!1),[e,t])}function Ve(e){return e===null||!e.capacity.isPositive()?null:e.amount.dividedBy(e.capacity).magnitude}function Ke({title:e,essentials:t}){const[n,...r]=t,{rowsRef:s,drawn:l}=Xe(r),i=t.some(d=>d.urgent!==void 0),a=n!==void 0&&r.length===0&&n.label.toUpperCase()===e.toUpperCase();return o.jsx(ne,{panelTitle:e,fitToSize:!0,hoverTitle:!0,sections:o.jsxs(J,{full:!0,children:[o.jsx($,{visuallyHidden:!0,children:tt(t.filter(d=>d.urgent!==!0))}),i&&o.jsx($,{visuallyHidden:!0,assertive:!0,additionsOnly:!0,children:nt(t).map(d=>o.jsx(c.Fragment,{children:`${d}. `},d))}),n!==void 0&&o.jsxs(it,{"data-tiny-essential":"",children:[a?o.jsx(I,{as:"dt",children:n.label}):o.jsx(z,{children:n.label}),n.gauge===void 0?o.jsx(L,{$tone:n.tone??"neutral",children:o.jsx(k,{essential:n})}):o.jsxs(st,{$tone:n.tone??"neutral",children:[o.jsx(at,{children:o.jsx(k,{essential:n})}),o.jsx(et,{essential:n,gauge:n.gauge})]})]}),r.length>0&&o.jsx(ct,{ref:s,children:r.slice(0,l).map(d=>o.jsxs(ut,{"data-tiny-essential":"",children:[o.jsx(z,{children:d.label}),o.jsx(dt,{$tone:d.tone??"neutral",children:o.jsx(k,{essential:d})})]},d.label))})]})})}function Xe(e){const t=c.useRef(null),[n,r]=c.useState(e.length),[s,l]=c.useState(0),i=e.map(a=>`${a.label}\0${a.word??Ze(a.value)}`).join("");return c.useLayoutEffect(()=>{r(e.length)},[i,s,e.length]),c.useLayoutEffect(()=>{const a=t.current?.closest("[data-panel-fit-body]"),d=a?.firstElementChild;!a||!d||n===0||Je(d)>a.clientHeight&&r(n-1)}),c.useLayoutEffect(()=>{const a=t.current?.closest("[data-panel-fit-body]");if(!a||typeof ResizeObserver>"u")return;let d=a.clientHeight;const h=new ResizeObserver(()=>{a.clientHeight!==d&&(d=a.clientHeight,l(p=>p+1))});return h.observe(a),()=>h.disconnect()},[]),{rowsRef:t,drawn:n}}function Ze(e){try{return JSON.stringify(e)??""}catch{return String(e)}}function Je(e){const t=[],n=[];for(const r of Array.from(e.querySelectorAll("[data-tiny-essential]"))){const s=r.getBoundingClientRect();t.push(s.top),n.push(s.bottom)}return t.length===0?0:Math.max(...n)-Math.min(...t)}function k({essential:e}){const{control:t}=e;return t!==void 0?o.jsx(W,{text:t.hint??t.title,children:o.jsx(oe,{size:"sm",active:t.active,disabled:t.disabled,onClick:t.onPress,"aria-label":t.title,children:t.label})}):o.jsxs(o.Fragment,{children:[e.level!==void 0&&o.jsx(qe,{lit:e.level.lit,of:e.level.of,tone:e.tone,label:e.label}),e.word!==void 0?e.word:o.jsx(Qe,{essential:e})]})}function Qe({essential:e}){const{mark:t,value:n,decimals:r}=e,{held:s}=A(n),l=o.jsx(O,{value:n,decimals:r,scale:"compact",elsewhere:t?.elsewhere===!0&&(s||t.kind===void 0)?t.caption:void 0});return t===void 0||s||t.kind===void 0?l:o.jsx(re,{kind:t.kind,elsewhere:t.elsewhere,caption:t.caption,children:l})}function et({essential:e,gauge:t}){const{shown:n,held:r}=A(e.value),s=i=>Ve({amount:i.max(t.min).min(t.max).minus(t.min),capacity:t.max.minus(t.min)})??0,l=n==null?null:s(n);return o.jsxs(lt,{"aria-hidden":"true","data-tiny-gauge":"","data-held":r?"":void 0,viewBox:"0 0 100 1",preserveAspectRatio:"none",children:[(t.bands??[]).map(i=>o.jsx("rect",{x:s(i.from)*100,y:0,width:(s(i.to)-s(i.from))*100,height:1,fill:E[i.tone],opacity:.35},`${s(i.from)}-${s(i.to)}`)),l!==null&&o.jsx("rect",{"data-tiny-gauge-fill":"",x:0,y:0,width:l*100,height:1,fill:E[e.tone??"neutral"],opacity:r?.55:1})]})}function tt(e){return e.filter(t=>t.word!==void 0).map(t=>`${t.label} ${t.word}`).join(", ")}function nt(e){return e.filter(t=>t.urgent===!0&&t.word!==void 0).map(t=>`${t.label} ${t.word}`)}function Ot({def:e,...t}){if(e.tiny!==void 0&&ot(e,t.w,t.h))return o.jsx(rt,{tiny:e.tiny,props:t});const n=e.component;return o.jsx(n,{...t})}function ot(e,t,n){if(e.tiny===void 0||t===void 0||n===void 0)return!1;const r=e.minSize??se;return t<r.w||n<r.h}function Dt(e){return e.tiny!==void 0?ue:e.minSize}function rt({tiny:e,props:t}){const n=e.useEssentials(t);return o.jsx(Ke,{title:e.title,essentials:n})}const it=u.dl`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: var(--gap-tiny-content);
  margin: 0;
  min-width: 0;
`,L=u.dd`
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
  color: ${({$tone:e})=>D[e]};
`,st=u(L)`
  flex-direction: column;
  align-items: stretch;
  gap: var(--gap-caption);
  line-height: var(--line-height-flush);
`,at=u.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--gap-figure-parts);
`,lt=u.svg`
  display: block;
  width: 100%;
  height: var(--size-tiny-gauge);
`,z=u.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
`,ct=u.dl`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-row-wrap);
  margin: 0;
  max-width: 100%;
`,ut=u.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  column-gap: var(--gap-label-value-tight);
  max-width: 100%;
`,dt=u.dd`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  margin: 0;
  font-size: var(--font-size-value);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({$tone:e})=>D[e]};
`;export{Et as A,Rt as C,qe as L,Ft as R,Ke as T,Ot as W,Tt as a,zt as b,de as c,B as d,Ye as e,xe as f,Dt as g,Ct as h,At as i,ot as s,$t as u,It as w};
