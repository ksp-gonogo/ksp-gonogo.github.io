import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./ext-react-RRA14VTW.js";import{F as N,l as U,G as P,k as $,d as I,ar as H,ak as G,V as z,Z as R,a2 as W,a4 as V}from"./reckoningMarkDraw-Bgi-6Vc4.js";import{f as Y,S as K}from"./contributionsRead-B6hG9dgK.js";import{f as X,ak as J,I as Q,U as O,P as Z,i as ee}from"./ToggleButton-DSVwgSHp.js";import u,{css as x}from"./ext-styled-components-Br73TgY3.js";import{X as te,a0 as A}from"./WidgetScope-D8GQWXlA.js";import{d as k,b as ne,T as B}from"./streamStatusWord-BHc4K3mg.js";function re(){if(!("isSecureContext"in globalThis)||globalThis.isSecureContext!==!0)return{supported:!1,reason:"insecure-origin"};const e=typeof navigator>"u"?void 0:navigator.mediaDevices;return!e||typeof e.getUserMedia!="function"?{supported:!1,reason:"no-media-devices"}:{supported:!0}}function q(e,t){return e.label!==""?e.label:`Input ${t+1}, name withheld`}const oe=new Set(["NotAllowedError","PermissionDeniedError","SecurityError"]),se=new Set(["NotFoundError","DevicesNotFoundError","OverconstrainedError","ConstraintNotSatisfiedError"]);function ie(e){if(e instanceof Error&&e.name!=="")return e.name;if(typeof e=="object"&&e!==null&&"name"in e){const t=e.name;if(typeof t=="string"&&t!=="")return t}return"UnknownError"}function ae(e){return oe.has(e)?"refused":se.has(e)?"no-device":"failed"}function S(e){for(const t of e.getTracks())t.stop()}function le(e){return e.getAudioTracks()[0]?.getSettings?.()?.deviceId??null}async function C(){const e=navigator.mediaDevices;if(!e||typeof e.enumerateDevices!="function")return[];try{return(await e.enumerateDevices()).filter(n=>n.kind==="audioinput"&&n.deviceId!=="").map(n=>({deviceId:n.deviceId,label:n.label}))}catch{return[]}}function ce(){const e=re();return{status:e.supported?"unasked":e.reason,devices:[],deviceId:null,stream:null,failure:null}}function ue(e={}){const[t,n]=c.useState(ce),o=c.useRef(null),i=c.useRef(null),l=c.useRef(!0),a=c.useRef(e);c.useEffect(()=>{a.current=e});const s=c.useCallback(()=>{const f=o.current;f&&(o.current=null,i.current=null,S(f),a.current.onStream?.(null))},[]),d=c.useCallback(f=>{const m=i.current,v=o.current!==null&&(m===null?f.length===0:!f.some(g=>g.deviceId===m));n(g=>g.status!=="ready"||!v?{...g,devices:f}:{...g,status:f.length===0?"no-device":"unasked",devices:f,deviceId:null,stream:null}),v&&s()},[s]);c.useEffect(()=>{const f=navigator.mediaDevices;if(!f)return;let m=!1;const v=()=>{C().then(g=>{m||d(g)})};return v(),f.addEventListener?.("devicechange",v),()=>{m=!0,f.removeEventListener?.("devicechange",v)}},[d]),c.useEffect(()=>(l.current=!0,()=>{l.current=!1,s()}),[s]);const p=c.useCallback(async f=>{const m=navigator.mediaDevices;if(!m||typeof m.getUserMedia!="function")return;n(g=>({...g,status:g.stream?g.status:"requesting",failure:null}));const v={...a.current.constraints,...f===null?{}:{deviceId:{exact:f}}};try{const g=await m.getUserMedia({audio:v});if(!l.current){S(g);return}const y=o.current;o.current=g,y&&y!==g&&S(y);const b=await C(),_=le(g)??f??b[0]?.deviceId,M=b.length>0?b:de(g,_);i.current=_??null,n({status:"ready",devices:M,deviceId:_??null,stream:g,failure:null}),a.current.onStream?.(g)}catch(g){if(!l.current)return;const y={name:ie(g),deviceId:f};n(b=>b.stream?{...b,failure:y}:{status:ae(y.name),devices:b.devices,deviceId:null,stream:null,failure:y})}},[]),h=c.useCallback(()=>p(null),[p]),w=c.useCallback(f=>p(f),[p]),j=c.useCallback(()=>{s(),n(f=>({...f,status:f.status==="ready"?"unasked":f.status,deviceId:null,stream:null}))},[s]);return{...t,request:h,select:w,release:j}}function de(e,t){return t?[{deviceId:t,label:e.getAudioTracks()[0]?.label??""}]:[]}function ut({label:e="Audio input",...t}){const n=ue(t),o=c.useId(),i=ve(n);return r.jsxs(Y,{gap:"related-dense",children:[r.jsx(X,{tone:pe(n.status),live:!0,children:he(n)}),n.status==="ready"&&n.devices.length>0?r.jsxs(N,{children:[r.jsx(U,{htmlFor:o,children:e}),r.jsx(P,{id:o,value:n.deviceId??"",onChange:l=>{n.select(l.target.value)},children:n.devices.map((l,a)=>r.jsx("option",{value:l.deviceId,children:q(l,a)},l.deviceId))}),n.failure?r.jsx($,{children:`The requested input did not open. The browser reported ${n.failure.name}, and the previous input is still running.`}):null]}):null,fe(n.status)?r.jsx(I,{type:"button",onClick:()=>{n.request()},disabled:n.status==="requesting","aria-busy":n.status==="requesting",children:"Request microphone access"}):null,i?r.jsx($,{children:i}):null]})}function fe(e){return e==="unasked"||e==="requesting"||e==="failed"}const ge={"insecure-origin":"warn","no-media-devices":"nogo",unasked:"neutral",requesting:"info",refused:"nogo","no-device":"warn",failed:"nogo",ready:"go"};function pe(e){return ge[e]}function he(e){switch(e.status){case"insecure-origin":return"This page is not a secure origin. Microphone capture is available on https pages and on localhost.";case"no-media-devices":return"This browser exposes no media device interface, so no input can be opened here.";case"unasked":return L(e)?"Microphone access is granted for this origin. No input is open.":"Microphone access has not been requested for this origin.";case"requesting":return"A capture request is with the browser, which may be prompting for access.";case"refused":return"Microphone access was refused for this origin. The browser holds that answer in its site settings and returns it to any further request without prompting.";case"no-device":return"No audio input device is present.";case"failed":return`The input did not open. The browser reported ${e.failure?.name??"an unnamed error"}.`;case"ready":return`Capturing from ${me(e)}.`}}function L(e){return e.devices.some(t=>t.label!=="")}function me(e){const t=e.devices.findIndex(o=>o.deviceId===e.deviceId),n=t===-1?void 0:e.devices[t];return n?q(n,t):"an unnamed input"}function ve(e){if(e.status!=="unasked"||L(e))return null;const t=e.devices.length;return t===0?null:t===1?"One audio input is visible. Its name is withheld by the browser until access is granted.":`${t} audio inputs are visible. Their names are withheld by the browser until access is granted.`}const T=c.createContext(null);function dt({settings:e,setAugmentSetting:t,children:n}){const o=c.useMemo(()=>({settings:e,setAugmentSetting:t}),[e,t]);return r.jsx(T.Provider,{value:o,children:n})}function ft(e){const t=c.useContext(T),n=t?.settings,o=t?.setAugmentSetting;return c.useMemo(()=>({values:n?.[e]??xe,set:(i,l)=>o?.(e,i,l)}),[n,o,e])}function gt(){return c.useContext(T)?.settings}const xe=Object.freeze({});function pt({blocked:e=!1,flag:t,prompt:n,onSend:o,sendDisabled:i=!1,sendLabel:l="Send",sendVariant:a="icon",sendTooltip:s,children:d,...p}){const{anchor:h,tip:w}=H(s),j=c.useId();return r.jsxs(ye,{$blocked:e,...p,children:[n!==void 0&&r.jsx(be,{"aria-hidden":"true",children:n}),d,o!==void 0&&r.jsxs(we,{...h,children:[r.jsx(je,{type:"button",disabled:i,onClick:o,$icon:a==="icon",...s?{"aria-describedby":j}:{},...a==="icon"?{"aria-label":l}:{},children:a==="icon"?r.jsx(G,{size:16}):l}),s&&r.jsx(z,{id:j,children:s.replace(`
`,". ")}),w]}),t!==void 0&&r.jsx(_e,{$blocked:e,role:"status",children:t})]})}const ye=u.div`
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
`,be=u.span`
  flex: 0 0 auto;
  color: var(--console-tone-fg, var(--color-accent-fg));
  font-weight: bold;
  margin-right: var(--gap-prompt-glyph);
`,we=u.span`
  display: inline-flex;

  /* A disabled button swallows pointer events, so they go to the anchor instead. */
  > button:disabled {
    pointer-events: none;
  }
`,je=u(I)`
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
`,_e=u.div`
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
`;function Se({tone:e="accent",queue:t,composer:n,standing:o,children:i,...l}){const a=t!==void 0||n!==void 0||o!==void 0,s=o!==void 0&&!!n;return r.jsxs(Ee,{"data-console-frame":"",$tone:e,...l,children:[r.jsx(ke,{children:i}),a&&r.jsxs($e,{$straddled:s,children:[t,o!==void 0&&r.jsx(Te,{"data-console-standing":"",$straddle:s,children:o}),n]})]})}const Ee=u.div`
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
`,ke=u.div`
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  display: flex;
`,Te=u.div`
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
`,$e=u.div`
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
`,Re="Uplink queue";function ht({tone:e,oneWaySeconds:t=null,delayReading:n,canQueue:o=!0,alwaysBadge:i=!1,inFlight:l,inFlightFrozenAtDispatch:a=!1,composer:s,children:d,...p}){const h=J({oneWaySeconds:t,canQueue:o,alwaysBadge:i}),w=h==="badge"?t:null,j=l!==void 0&&(h==="strip"||a&&h!=="badge");return r.jsx(Se,{...e!==void 0?{tone:e}:{},...w!==null?{standing:r.jsx(te,{oneWaySeconds:w,delayReading:n})}:{},...j?{queue:r.jsx(Q,{items:l,ariaLabel:Re})}:{},...s!==void 0?{composer:s}:{},...p,children:d})}function Ce({lit:e,of:t,tone:n="neutral",label:o}){const i=e===null?"unknown":`${e} of ${t}`;return r.jsx(Fe,{role:"img","aria-label":o===void 0?i:`${o} ${i}`,"data-level-bars":"",children:Array.from({length:t},(l,a)=>r.jsx(Ie,{$fill:e!==null&&a<e?k[n]:null,$height:(a+1)/t},a))})}const Fe=u.span`
  display: inline-flex;
  align-items: flex-end;
  gap: var(--gap-signal-bars);
  height: 0.8em;
  flex: none;
`,Ie=u.span`
  width: 0.22em;
  height: ${({$height:e})=>`${Math.round(e*100)}%`};
  background: ${({$fill:e})=>e??"transparent"};
  border: 1px solid ${({$fill:e})=>e??"var(--color-border-subtle)"};
`;function mt({label:e,description:t,value:n,className:o}){return r.jsxs(Oe,{className:o,children:[r.jsxs(Ae,{children:[r.jsx(Be,{children:e}),t!=null&&r.jsx(qe,{children:t})]}),r.jsx(Le,{$prose:typeof n=="string",children:r.jsx(ze,{value:n})})]})}function ze({value:e}){return e==null?r.jsx(ne,{}):typeof e=="object"?r.jsx(O,{value:e}):typeof e=="boolean"?e?"On":"Off":e}const Oe=u.dl`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--gap-field-term);
  margin: 0;
`,Ae=u.dt`
  display: flex;
  flex-direction: column;
  gap: var(--gap-caption);
  min-width: 0;
  /* Grows into the space a short value leaves and yields to a long one. */
  flex: 1 1 auto;
`,Be=u.span`
  font-size: var(--font-size-value);
  color: var(--color-text-primary);
`,qe=u.span`
  font-size: var(--font-size-compact);
  color: var(--color-text-dim);
  max-width: 32em;
`,Le=u.dd`
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
`;function De(e){return e===null||!e.capacity.isPositive()?null:e.amount.dividedBy(e.capacity).magnitude}function Me({title:e,essentials:t}){const[n,...o]=t,{rowsRef:i,drawn:l}=Ne(o),a=t.some(d=>d.urgent!==void 0),s=n!==void 0&&o.length===0&&n.label.toUpperCase()===e.toUpperCase();return r.jsx(Z,{panelTitle:e,fitToSize:!0,hoverTitle:!0,sections:r.jsxs(K,{full:!0,children:[r.jsx(R,{visuallyHidden:!0,children:Ge(t.filter(d=>d.urgent!==!0))}),a&&r.jsx(R,{visuallyHidden:!0,assertive:!0,additionsOnly:!0,children:We(t).map(d=>r.jsx(c.Fragment,{children:`${d}. `},d))}),n!==void 0&&r.jsxs(Ke,{"data-tiny-essential":"",children:[s?r.jsx(z,{as:"dt",children:n.label}):r.jsx(F,{children:n.label}),n.gauge===void 0?r.jsx(D,{$tone:n.tone??"neutral",children:r.jsx(E,{essential:n})}):r.jsxs(Xe,{$tone:n.tone??"neutral",children:[r.jsx(Je,{children:r.jsx(E,{essential:n})}),r.jsx(He,{essential:n,gauge:n.gauge})]})]}),o.length>0&&r.jsx(Ze,{ref:i,children:o.slice(0,l).map(d=>r.jsxs(et,{"data-tiny-essential":"",children:[r.jsx(F,{children:d.label}),r.jsx(tt,{$tone:d.tone??"neutral",children:r.jsx(E,{essential:d})})]},d.label))})]})})}function Ne(e){const t=c.useRef(null),[n,o]=c.useState(e.length),[i,l]=c.useState(0),a=e.map(s=>`${s.label}\0${s.word??Ue(s.value)}`).join("");return c.useLayoutEffect(()=>{o(e.length)},[a,i,e.length]),c.useLayoutEffect(()=>{const s=t.current?.closest("[data-panel-fit-body]"),d=s?.firstElementChild;!s||!d||n===0||Pe(d)>s.clientHeight&&o(n-1)}),c.useLayoutEffect(()=>{const s=t.current?.closest("[data-panel-fit-body]");if(!s||typeof ResizeObserver>"u")return;let d=s.clientHeight;const p=new ResizeObserver(()=>{s.clientHeight!==d&&(d=s.clientHeight,l(h=>h+1))});return p.observe(s),()=>p.disconnect()},[]),{rowsRef:t,drawn:n}}function Ue(e){try{return JSON.stringify(e)??""}catch{return String(e)}}function Pe(e){const t=[],n=[];for(const o of Array.from(e.querySelectorAll("[data-tiny-essential]"))){const i=o.getBoundingClientRect();t.push(i.top),n.push(i.bottom)}return t.length===0?0:Math.max(...n)-Math.min(...t)}function E({essential:e}){const{control:t}=e;return t!==void 0?r.jsx(W,{text:t.hint??t.title,children:r.jsx(ee,{size:"sm",active:t.active,disabled:t.disabled,onClick:t.onPress,"aria-label":t.title,children:t.label})}):r.jsxs(r.Fragment,{children:[e.level!==void 0&&r.jsx(Ce,{lit:e.level.lit,of:e.level.of,tone:e.tone,label:e.label}),e.word!==void 0?e.word:r.jsx(O,{value:e.value,decimals:e.decimals,scale:"compact"})]})}function He({essential:e,gauge:t}){const{shown:n,held:o}=V(e.value),i=a=>De({amount:a.max(t.min).min(t.max).minus(t.min),capacity:t.max.minus(t.min)})??0,l=n==null?null:i(n);return r.jsxs(Qe,{"aria-hidden":"true","data-tiny-gauge":"","data-held":o?"":void 0,viewBox:"0 0 100 1",preserveAspectRatio:"none",children:[(t.bands??[]).map(a=>r.jsx("rect",{x:i(a.from)*100,y:0,width:(i(a.to)-i(a.from))*100,height:1,fill:k[a.tone],opacity:.35},`${i(a.from)}-${i(a.to)}`)),l!==null&&r.jsx("rect",{"data-tiny-gauge-fill":"",x:0,y:0,width:l*100,height:1,fill:k[e.tone??"neutral"],opacity:o?.55:1})]})}function Ge(e){return e.filter(t=>t.word!==void 0).map(t=>`${t.label} ${t.word}`).join(", ")}function We(e){return e.filter(t=>t.urgent===!0&&t.word!==void 0).map(t=>`${t.label} ${t.word}`)}function vt({def:e,...t}){if(e.tiny!==void 0&&Ve(e.tiny,t.w,t.h))return r.jsx(Ye,{tiny:e.tiny,props:t});const n=e.component;return r.jsx(n,{...t})}function Ve(e,t,n){if(t===void 0||n===void 0)return!1;const o=e.bodyMinSize??A;return t<o.w||n<o.h}function xt(e,t){const n=e.bodyMinSize??A;return{w:Math.max(n.w,t?.w??1),h:Math.max(n.h,t?.h??1)}}function Ye({tiny:e,props:t}){const n=e.useEssentials(t);return r.jsx(Me,{title:e.title,essentials:n})}const Ke=u.dl`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: var(--gap-tiny-content);
  margin: 0;
  min-width: 0;
`,D=u.dd`
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
  color: ${({$tone:e})=>B[e]};
`,Xe=u(D)`
  flex-direction: column;
  align-items: stretch;
  gap: var(--gap-caption);
  line-height: var(--line-height-flush);
`,Je=u.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--gap-figure-parts);
`,Qe=u.svg`
  display: block;
  width: 100%;
  height: var(--size-tiny-gauge);
`,F=u.dt`
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
`,Ze=u.dl`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-row-wrap);
  margin: 0;
  max-width: 100%;
`,et=u.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  column-gap: var(--gap-label-value-tight);
  max-width: 100%;
`,tt=u.dd`
  display: inline-flex;
  align-items: baseline;
  gap: var(--gap-figure-parts);
  margin: 0;
  font-size: var(--font-size-value);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({$tone:e})=>B[e]};
`,yt="0.1.0";export{ut as A,pt as C,Ce as L,mt as R,Me as T,yt as U,vt as W,dt as a,ht as b,re as c,q as d,xt as e,ue as f,ft as g,Ve as s,gt as u};
