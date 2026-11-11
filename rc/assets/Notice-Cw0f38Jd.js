import{j as t}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./ext-react-C0MU9AHG.js";import{cT as ye}from"./context-C6-ms_G4.js";import"./ksp-enum-names-Bh2QnpCH.js";import"./logger-2_QM1wvD.js";import"./use-command-DyBcYpuK.js";import{ap as we,bs as je,q as ke,bQ as _e,P as Re,ac as X,bR as Te,aA as Ae,bS as Q,ad as Be,aD as Fe,af as Se,a1 as Ee,aa as Ne}from"./Modal-DImruGxU.js";import{S as ze,x as $e,X as He,y as Me}from"./contributionsRead-Cdcp0syN.js";import m from"./ext-styled-components-DAuodqsN.js";function Oe({children:e,status:i,gap:s="related-packed",align:r="center"}){return t.jsxs(we,{align:r,gap:s,justify:"between",wrap:!0,children:[e,i]})}const K=m.div`
  color: var(--color-text-primary);
  font-weight: 600;
  /* One rung above the body the arrangement sets; both halves are declared here, so a site cannot break the step. */
  font-size: var(--font-size-value);
  line-height: var(--line-height-tight);
  /* A content-sized basis, so a long title wraps instead of running into the badge beside it. */
  flex: 1 1 auto;
  min-width: 0;
`,Ce=m.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-record-lead);
  flex: 1 1 auto;
  min-width: 0;
`;function J({left:e,right:i,gap:s,children:r}){return t.jsx(Oe,{align:"baseline",status:i,gap:s,children:e==null?r:t.jsxs(Ce,{children:[e,r]})})}const De=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--gap-related);
`,Z=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  flex: 1 1 var(--block-body-floor, 9rem);
  min-width: 0;
`,k=m.div`
  min-width: 0;
  ${({$side:e})=>e?`flex: 0 0 auto;
    --radius-display-frame: var(--radius-display-frame-aside);`:""}
`,U=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-related);
  flex-wrap: wrap;
`,ee=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  min-width: 0;
  /* The compact body size, declared here so the title stays one rung above it. */
  font-size: var(--font-size-compact);
`;function z(e,{title:i,titleAs:s,titleLeft:r,titleRight:o,titleGap:l,left:p,right:u,top:h,bottom:c,footer:d,children:v,...w}){const F=i!=null||r!=null||o!=null,_=p!=null||u!=null,R=F&&t.jsx(J,{left:r,right:o,gap:l,children:i!=null&&t.jsx(K,{as:s,children:i})});return t.jsxs(e,{...w,children:[h!=null&&t.jsx(k,{$side:!1,children:h}),_?t.jsxs(De,{children:[p!=null&&t.jsx(k,{$side:!0,children:p}),t.jsxs(Z,{children:[R,v]}),u!=null&&t.jsx(k,{$side:!0,children:u})]}):t.jsxs(t.Fragment,{children:[R,v]}),d!=null&&t.jsx(U,{children:d}),c!=null&&t.jsx(k,{$side:!1,children:c})]})}const Le={Title:K,TitleRow:J,Body:Z,Aside:k,Footer:U};function We({...e}){return z(ee,e)}const ot=Object.assign(We,Le);function Pe(e,i,s){for(let r=1;r<e.length;r++){const[o,l]=[e[r-1],e[r]];if(s>=Math.min(o,l)&&s<=Math.max(o,l)&&l!==o)return i[r-1]+(i[r]-i[r-1])*(s-o)/(l-o)}}function Ge(e,i){const{shown:s}=X(e.value,{drawsReckoning:!0}),r=ye(s);return r===null?null:{id:e.id??`threshold-${i}`,value:r,...e.kind==="limit"?{kind:e.kind,bad:e.bad}:{kind:e.kind},axis:e.axis,label:[e.label,s?Te(s):void 0].filter(Boolean).join(": "),spokenLabel:[e.label,$e(s)].filter(Boolean).join(": "),reading:"state"in e.value?e.value:void 0}}const Ye=Object.freeze([]),Ie={flex:1,display:"flex",position:"relative",minHeight:0,minWidth:0},qe={flex:1,minHeight:0,minWidth:0},Qe={flex:1,position:"relative",minHeight:0,minWidth:0};function Ve({style:e,children:i}){return t.jsx("div",{style:{...e,display:"flex",flexDirection:"column"},children:i})}function lt({series:e,xDomain:i,yDomainPrimary:s,yDomainSecondary:r,yScalePrimary:o,yScaleSecondary:l,xTickFormat:p,xReadFormat:u,yTickFormat:h,xUnit:c,yUnit:d,thresholds:v,referenceCurves:w,layers:F,xKind:_="time",xAxisLabel:R,yAxisLabel:te,ySecondaryAxisLabel:ne,"aria-label":ie,hideXAxis:$,spatial:T,gridScale:re,crosshair:se,legend:ae,density:H="chart",notice:M,emptyState:O,footer:oe,plotReadout:A,chrome:le="panel",title:ce,headerActions:de,height:C,children:he}){const S=F??Ye,D=_==="time",L=x.useRef(null),[B,ue]=x.useState(null),W=x.useRef(null),[E,fe]=x.useState(null);x.useEffect(()=>{const n=L.current;if(!n||typeof ResizeObserver>"u")return;const a=new ResizeObserver(g=>{const{width:y,height:f}=g[0].contentRect;ue({w:Math.floor(y),h:Math.floor(f)})});return a.observe(n),()=>a.disconnect()},[]),x.useEffect(()=>{const n=W.current;if(!n||typeof ResizeObserver>"u")return;const a=new ResizeObserver(g=>{const{width:y,height:f}=g[0].contentRect;fe({w:Math.floor(y),h:Math.floor(f)})});return a.observe(n),()=>a.disconnect()},[]);const pe=(v??[]).map(Ge).filter(n=>n!==null),P=!D&&w?w.map(n=>({id:`__ref_${n.id}`,label:n.label,axis:n.axis??"primary",color:n.color??"var(--color-text-faint)",type:"line",dashed:!0,readBetween:!0,data:{x:n.xs,y:n.ys}})):[],G=[...e,...P],xe=p??(c?(n,a,g)=>Q(c,n,g):void 0),me=h??(d?(n,a)=>Q(d,n,a,o):void 0),ge=e.length===0&&P.length===0&&S.length===0,Y=S.length>0||G.some(n=>(n.data.x?.length??0)>0),b=[];ge&&O!==void 0&&b.push(O),M&&b.push(M);const j=E?je({width:E.w,height:E.h,plotHasData:Y}):Y?"inline":"center",N=t.jsx(Ae,{placement:j,children:b.map((n,a)=>t.jsx("div",{children:n},a))}),ve=(()=>{if(D)return;const n=e.find(f=>f.type!=="band"&&f.data.x.length>0);if(!n)return;let a=n.data.x.length-1;for(;a>=0&&!(Number.isFinite(n.data.x[a])&&Number.isFinite(n.data.y[a]));)a-=1;if(a<0)return;const g=n.data.x[a],y={};for(const f of w??[]){const q=Pe(f.xs,f.ys,g);q!==void 0&&(y[f.id]=q)}return{x:g,y:n.data.y[a],references:y}})(),be=H==="compact"?Ve:ke,I=t.jsxs("div",{ref:W,style:{...Ie,...C===void 0?{}:{flex:"0 0 auto",height:C},flexDirection:j==="beside"?"row":"column"},children:[t.jsxs(be,{style:qe,footer:oe,children:[t.jsxs("div",{ref:L,style:Qe,children:[B&&t.jsx(_e,{series:G,xDomain:i,xTickFormat:xe,xReadFormat:u,yDomainPrimary:s,yDomainSecondary:r,yScalePrimary:o,yScaleSecondary:l,yTickFormat:me,thresholds:pe,layers:S,hideXAxis:$,spatial:T,gridScale:re,"aria-label":ie,legend:ae,density:H,crosshair:se??!$,xKind:_,xAxisLabel:T?void 0:R,yAxisLabel:T?void 0:te,yTickUnit:h?void 0:d,ySecondaryAxisLabel:T?void 0:ne,card:typeof A=="function"?n=>A({width:n.width,height:n.height,present:ve,compact:n.form>0,tight:n.form>1}):A,cardForms:typeof A=="function"?3:1,plotNotice:b.length>0&&j==="center"?N:void 0,width:B.w,height:B.h}),!B&&b.length>0&&j==="center"&&N]}),he]}),b.length>0&&j!=="center"&&N]});return le==="bare"?I:t.jsx(Re,{panelTitle:ce,panelAside:de,sections:t.jsx(ze,{fill:!0,children:I})})}function Xe(e){if(e.frame==="scet")return{token:"SCET",spoken:"spacecraft event time",title:"Spacecraft event time: when this happens at the craft"};const{vantage:i}=e;return i===void 0?{token:"RECEIVED",spoken:"received",title:"When the telemetry showing this arrives"}:{token:`AT ${i}`,spoken:`received at ${i}`,title:`When the telemetry showing this arrives at ${i}`}}const Ke=m.span`
  font-size: max(0.72em, 10px);
  opacity: 0.72;
  white-space: nowrap;
  text-transform: none;
`;function ct({value:e,context:i}){const r=X(typeof e=="number"?void 0:e),{shown:o,held:l,caption:p}=r,u=typeof e=="number"?e:o?.magnitude,h=Be({...r,shown:u}),c=i&&Xe(i),d=He(u??Number.NaN);return t.jsxs(t.Fragment,{children:[l?t.jsx(Fe,{...h,caption:p,children:d}):t.jsx("span",{"data-figure":h["data-figure"],children:d}),c&&t.jsxs(t.Fragment,{children:[" ",t.jsx(Se,{text:c.title,focusable:!0,children:t.jsxs(Ke,{children:[t.jsx("span",{"aria-hidden":"true",children:c.token}),t.jsx(Ee,{children:c.spoken})]})})]})]})}const V=m(ee)`
  --gap-related: var(--gap-related-comfortable);
  --bleed-inline: 0px;

  background: var(--color-surface-sunken);
  border: 1px solid ${({$tone:e})=>Me(e)};
  border-radius: var(--radius-regular);
  /* A banner is its own strip of the screen, so it takes the roomier inset. */
  padding: var(--inset-surface-standalone);
`;function dt({tone:e="warn",assertive:i=!1,role:s,children:r,...o}){const l=x.useRef(null),[p,u]=x.useState("");if(x.useEffect(()=>{const c=l.current;if(i||s!==void 0||c===null)return;const d=Je(c);u(v=>v===d?v:d)}),i)return z(V,{...o,children:r,role:s??"alert","aria-live":s===void 0?"assertive":void 0,$tone:e});const h=z(V,{...o,children:r,ref:l,role:s??"note",$tone:e});return s!==void 0?h:t.jsxs(t.Fragment,{children:[h,t.jsx(Ne,{visuallyHidden:!0,children:p})]})}function Je(e){const i=[],s=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let r=s.nextNode();r!==null;r=s.nextNode())i.push(r.textContent??"");return i.join(" ").replace(/\s+/g," ").trim()}export{ot as B,lt as G,ct as M,dt as N,Oe as S,Le as a,ee as b,z as r};
