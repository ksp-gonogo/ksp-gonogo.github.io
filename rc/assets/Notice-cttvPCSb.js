import{j as t}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./ext-react-C0MU9AHG.js";import{b6 as ye}from"./view-clock-formula-4WTGODXm.js";import"./ksp-enum-names-nIH28rrj.js";import"./logger-2_QM1wvD.js";import"./screen-kDJ54wAz.js";import{ak as we,be as je,q as ke,bz as _e,P as Re,ae as X,bA as Te,au as Ae,bB as q,af as Be,aw as Fe,ac as Ee,$ as Se,a7 as ze}from"./ModalSaveBar-DpfR7wY-.js";import{S as Ne,E as $e,X as He,G as Me}from"./contributionsRead-BQvnqw2m.js";import x from"./ext-styled-components-DAuodqsN.js";function Oe({children:e,status:i,gap:r="related-packed",align:s="center"}){return t.jsxs(we,{align:s,gap:r,justify:"between",wrap:!0,children:[e,i]})}const K=x.div`
  color: var(--color-text-primary);
  font-weight: 600;
  /* One rung above the body the arrangement sets; both halves are declared here, so a site cannot break the step. */
  font-size: var(--font-size-value);
  line-height: var(--line-height-tight);
  /* A content-sized basis, so a long title wraps instead of running into the badge beside it. */
  flex: 1 1 auto;
  min-width: 0;
`,Ce=x.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-record-lead);
  flex: 1 1 auto;
  min-width: 0;
`;function Q({left:e,right:i,children:r}){return t.jsx(Oe,{align:"baseline",status:i,children:e==null?r:t.jsxs(Ce,{children:[e,r]})})}const De=x.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--gap-related);
`,J=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  flex: 1 1 var(--block-body-floor, 9rem);
  min-width: 0;
`,k=x.div`
  min-width: 0;
  ${({$side:e})=>e?`flex: 0 0 auto;
    --radius-display-frame: var(--radius-display-frame-aside);`:""}
`,Z=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-related);
  flex-wrap: wrap;
`,U=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  min-width: 0;
  /* The compact body size, declared here so the title stays one rung above it. */
  font-size: var(--font-size-compact);
`;function S(e,{title:i,titleAs:r,titleLeft:s,titleRight:o,left:l,right:f,top:p,bottom:h,footer:c,children:d,...v}){const y=i!=null||s!=null||o!=null,A=l!=null||f!=null,w=y&&t.jsx(Q,{left:s,right:o,children:i!=null&&t.jsx(K,{as:r,children:i})});return t.jsxs(e,{...v,children:[p!=null&&t.jsx(k,{$side:!1,children:p}),A?t.jsxs(De,{children:[l!=null&&t.jsx(k,{$side:!0,children:l}),t.jsxs(J,{children:[w,d]}),f!=null&&t.jsx(k,{$side:!0,children:f})]}):t.jsxs(t.Fragment,{children:[w,d]}),c!=null&&t.jsx(Z,{children:c}),h!=null&&t.jsx(k,{$side:!1,children:h})]})}const Le={Title:K,TitleRow:Q,Body:J,Aside:k,Footer:Z};function We({...e}){return S(U,e)}const ot=Object.assign(We,Le);function Ge(e,i,r){for(let s=1;s<e.length;s++){const[o,l]=[e[s-1],e[s]];if(r>=Math.min(o,l)&&r<=Math.max(o,l)&&l!==o)return i[s-1]+(i[s]-i[s-1])*(r-o)/(l-o)}}function Pe(e,i){const{shown:r}=X(e.value,{drawsReckoning:!0}),s=ye(r);return s===null?null:{id:e.id??`threshold-${i}`,value:s,...e.kind==="limit"?{kind:e.kind,bad:e.bad}:{kind:e.kind},axis:e.axis,label:[e.label,r?Te(r):void 0].filter(Boolean).join(": "),spokenLabel:[e.label,$e(r)].filter(Boolean).join(": "),reading:"state"in e.value?e.value:void 0}}const Ye=Object.freeze([]),Ie={flex:1,display:"flex",position:"relative",minHeight:0,minWidth:0},qe={flex:1,minHeight:0,minWidth:0},Ve={flex:1,position:"relative",minHeight:0,minWidth:0};function Xe({style:e,children:i}){return t.jsx("div",{style:{...e,display:"flex",flexDirection:"column"},children:i})}function lt({series:e,xDomain:i,yDomainPrimary:r,yDomainSecondary:s,yScalePrimary:o,yScaleSecondary:l,xTickFormat:f,xReadFormat:p,yTickFormat:h,xUnit:c,yUnit:d,thresholds:v,referenceCurves:y,layers:A,xKind:w="time",xAxisLabel:ee,yAxisLabel:te,ySecondaryAxisLabel:ne,"aria-label":ie,hideXAxis:z,spatial:_,gridScale:re,crosshair:se,legend:ae,density:N="chart",notice:$,emptyState:H,footer:oe,plotReadout:R,chrome:le="panel",title:ce,headerActions:de,height:M,children:he}){const B=A??Ye,O=w==="time",C=m.useRef(null),[F,ue]=m.useState(null),D=m.useRef(null),[E,fe]=m.useState(null);m.useEffect(()=>{const n=C.current;if(!n||typeof ResizeObserver>"u")return;const a=new ResizeObserver(g=>{const{width:b,height:u}=g[0].contentRect;ue({w:Math.floor(b),h:Math.floor(u)})});return a.observe(n),()=>a.disconnect()},[]),m.useEffect(()=>{const n=D.current;if(!n||typeof ResizeObserver>"u")return;const a=new ResizeObserver(g=>{const{width:b,height:u}=g[0].contentRect;fe({w:Math.floor(b),h:Math.floor(u)})});return a.observe(n),()=>a.disconnect()},[]);const pe=(v??[]).map(Pe).filter(n=>n!==null),L=!O&&y?y.map(n=>({id:`__ref_${n.id}`,label:n.label,axis:n.axis??"primary",color:n.color??"var(--color-text-faint)",type:"line",dashed:!0,readBetween:!0,data:{x:n.xs,y:n.ys}})):[],W=[...e,...L],me=f??(c?(n,a,g)=>q(c,n,g):void 0),xe=h??(d?(n,a)=>q(d,n,a,o):void 0),ge=e.length===0&&L.length===0&&B.length===0,G=B.length>0||W.some(n=>(n.data.x?.length??0)>0),j=[];ge&&H!==void 0&&j.push(H),$&&j.push($);const T=E?je({width:E.w,height:E.h,plotHasData:G}):G?"inline":"center",P=t.jsx(Ae,{placement:T,children:j.map((n,a)=>t.jsx("div",{children:n},a))}),ve=(()=>{if(O)return;const n=e.find(u=>u.type!=="band"&&u.data.x.length>0);if(!n)return;let a=n.data.x.length-1;for(;a>=0&&!(Number.isFinite(n.data.x[a])&&Number.isFinite(n.data.y[a]));)a-=1;if(a<0)return;const g=n.data.x[a],b={};for(const u of y??[]){const I=Ge(u.xs,u.ys,g);I!==void 0&&(b[u.id]=I)}return{x:g,y:n.data.y[a],references:b}})(),be=N==="compact"?Xe:ke,Y=t.jsxs("div",{ref:D,style:{...Ie,...M===void 0?{}:{flex:"0 0 auto",height:M},flexDirection:T==="beside"?"row":"column"},children:[t.jsxs(be,{style:qe,footer:oe,children:[t.jsxs("div",{ref:C,style:Ve,children:[F&&t.jsx(_e,{series:W,xDomain:i,xTickFormat:me,xReadFormat:p,yDomainPrimary:r,yDomainSecondary:s,yScalePrimary:o,yScaleSecondary:l,yTickFormat:xe,thresholds:pe,layers:B,hideXAxis:z,spatial:_,gridScale:re,"aria-label":ie,legend:ae,density:N,crosshair:se??!z,xKind:w,xAxisLabel:_?void 0:ee,yAxisLabel:_?void 0:te,ySecondaryAxisLabel:_?void 0:ne,card:typeof R=="function"?n=>R({width:n.width,height:n.height,present:ve,compact:n.form>0,tight:n.form>1}):R,cardForms:typeof R=="function"?3:1,width:F.w,height:F.h}),j.length>0&&T==="center"&&P]}),he]}),j.length>0&&T!=="center"&&P]});return le==="bare"?Y:t.jsx(Re,{panelTitle:ce,panelAside:de,sections:t.jsx(Ne,{fill:!0,children:Y})})}function Ke(e){if(e.frame==="scet")return{token:"SCET",spoken:"spacecraft event time",title:"Spacecraft event time: when this happens at the craft"};const{vantage:i}=e;return i===void 0?{token:"RECEIVED",spoken:"received",title:"When the telemetry showing this arrives"}:{token:`AT ${i}`,spoken:`received at ${i}`,title:`When the telemetry showing this arrives at ${i}`}}const Qe=x.span`
  font-size: max(0.72em, 10px);
  opacity: 0.72;
  white-space: nowrap;
  text-transform: none;
`;function ct({value:e,context:i}){const s=X(typeof e=="number"?void 0:e),{shown:o,held:l,caption:f}=s,p=typeof e=="number"?e:o?.magnitude,h=Be({...s,shown:p}),c=i&&Ke(i),d=He(p??Number.NaN);return t.jsxs(t.Fragment,{children:[l?t.jsx(Fe,{...h,caption:f,children:d}):t.jsx("span",{"data-figure":h["data-figure"],children:d}),c&&t.jsxs(t.Fragment,{children:[" ",t.jsx(Ee,{text:c.title,focusable:!0,children:t.jsxs(Qe,{children:[t.jsx("span",{"aria-hidden":"true",children:c.token}),t.jsx(Se,{children:c.spoken})]})})]})]})}const V=x(U)`
  --gap-related: var(--gap-related-comfortable);
  --bleed-inline: 0px;

  background: var(--color-surface-sunken);
  border: 1px solid ${({$tone:e})=>Me(e)};
  border-radius: var(--radius-regular);
  /* A banner is its own strip of the screen, so it takes the roomier inset. */
  padding: var(--inset-surface-standalone);
`;function dt({tone:e="warn",assertive:i=!1,role:r,children:s,...o}){const l=m.useRef(null),[f,p]=m.useState("");if(m.useEffect(()=>{const c=l.current;if(i||r!==void 0||c===null)return;const d=Je(c);p(v=>v===d?v:d)}),i)return S(V,{...o,children:s,role:r??"alert","aria-live":r===void 0?"assertive":void 0,$tone:e});const h=S(V,{...o,children:s,ref:l,role:r??"note",$tone:e});return r!==void 0?h:t.jsxs(t.Fragment,{children:[h,t.jsx(ze,{visuallyHidden:!0,children:f})]})}function Je(e){const i=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let s=r.nextNode();s!==null;s=r.nextNode())i.push(s.textContent??"");return i.join(" ").replace(/\s+/g," ").trim()}export{ot as B,lt as G,ct as M,dt as N,Oe as S,Le as a,U as b,S as r};
