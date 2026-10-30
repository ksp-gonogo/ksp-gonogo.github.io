import{j as o}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./ext-react-C0MU9AHG.js";import{a_ as J,b9 as _e}from"./view-clock-formula-DVPsyl3O.js";import"./ksp-enum-names--qouUfWh.js";import"./screen-B9otUi5A.js";import{ak as Re,be as Te,q as Ae,bz as Be,P as Fe,ac as Me,au as Se,a7 as ze}from"./ModalSaveBar-BFzzaxS3.js";import{w as A,S as Ee,G as Ne,H as Oe}from"./contributionsRead-CeBanPYg.js";import x from"./ext-styled-components-DAuodqsN.js";function He({children:e,status:n,gap:t="related-packed",align:i="center"}){return o.jsxs(Re,{align:i,gap:t,justify:"between",wrap:!0,children:[e,n]})}const V=x.div`
  color: var(--color-text-primary);
  font-weight: 600;
  /* One rung above the body the arrangement sets; both halves are declared here, so a site cannot break the step. */
  font-size: var(--font-size-value);
  line-height: var(--line-height-tight);
  /* A content-sized basis, so a long title wraps instead of running into the badge beside it. */
  flex: 1 1 auto;
  min-width: 0;
`,$e=x.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-record-lead);
  flex: 1 1 auto;
  min-width: 0;
`;function U({left:e,right:n,children:t}){return o.jsx(He,{align:"baseline",status:n,children:e==null?t:o.jsxs($e,{children:[e,t]})})}const Ce=x.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--gap-related);
`,ee=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  flex: 1 1 var(--block-body-floor, 9rem);
  min-width: 0;
`,k=x.div`
  min-width: 0;
  ${({$side:e})=>e?`flex: 0 0 auto;
    --radius-display-frame: var(--radius-display-frame-aside);`:""}
`,te=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-related);
  flex-wrap: wrap;
`,ne=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  min-width: 0;
  /* The compact body size, declared here so the title stays one rung above it. */
  font-size: var(--font-size-compact);
`;function E(e,{title:n,titleAs:t,titleLeft:i,titleRight:a,left:l,right:c,top:g,bottom:p,footer:f,children:h,...v}){const y=n!=null||i!=null||a!=null,B=l!=null||c!=null,w=y&&o.jsx(U,{left:i,right:a,children:n!=null&&o.jsx(V,{as:t,children:n})});return o.jsxs(e,{...v,children:[g!=null&&o.jsx(k,{$side:!1,children:g}),B?o.jsxs(Ce,{children:[l!=null&&o.jsx(k,{$side:!0,children:l}),o.jsxs(ee,{children:[w,h]}),c!=null&&o.jsx(k,{$side:!0,children:c})]}):o.jsxs(o.Fragment,{children:[w,h]}),f!=null&&o.jsx(te,{children:f}),p!=null&&o.jsx(k,{$side:!1,children:p})]})}const Le={Title:V,TitleRow:U,Body:ee,Aside:k,Footer:te};function De({...e}){return E(ne,e)}const ot=Object.assign(De,Le);function Z(e,n,t,i="linear"){const a=t&&Ge(n,t)?0:n,l=t?i==="log"?N(e,a).decimals:Pe(e,a,t):0;return A(J(e,a),{decimals:l})}function Ge(e,n){const t=n.length>1?Math.abs(n[1]-n[0]):0;return t>0&&Math.abs(e)<t*1e-6}const z=3;function ie(e){return{figure:Number.parseFloat(e.replace(/[^\d.-]/g,"")),unit:e.replace(/[\d.,\s-]/g,"")}}function N(e,n){const t=a=>ie(A(J(e,n),{decimals:a})),i=t(z);for(let a=0;a<z;a++)if(t(a).figure===i.figure)return{decimals:a,unit:i.unit};return{decimals:z,unit:i.unit}}function Pe(e,n,t){const i=N(e,n);let a=i.decimals;for(const l of t){const c=N(e,l);c.unit===i.unit&&(a=Math.max(a,c.decimals))}return a}function We(e){const n=ie(A(e,{decimals:3})),t=Math.abs(n.figure),i=Number.isFinite(t)&&t>0?Math.max(0,2-Math.floor(Math.log10(t))):0;return A(e,{decimals:i})}function Ie(e,n,t){for(let i=1;i<e.length;i++){const[a,l]=[e[i-1],e[i]];if(t>=Math.min(a,l)&&t<=Math.max(a,l)&&l!==a)return n[i-1]+(n[i]-n[i-1])*(t-a)/(l-a)}}function Ye(e,n){const{shown:t}=Me(e.value,{drawsReckoning:!0}),i=_e(t);return i===null?null:{id:e.id??`threshold-${n}`,value:i,...e.kind==="limit"?{kind:e.kind,bad:e.bad}:{kind:e.kind},axis:e.axis,label:[e.label,t?We(t):void 0].filter(Boolean).join(": "),spokenLabel:[e.label,Ne(t)].filter(Boolean).join(": "),reading:"state"in e.value?e.value:void 0}}const Qe=Object.freeze([]),Xe={flex:1,display:"flex",position:"relative",minHeight:0,minWidth:0},Ke={flex:1,minHeight:0,minWidth:0},Ze={flex:1,position:"relative",minHeight:0,minWidth:0};function qe({style:e,children:n}){return o.jsx("div",{style:{...e,display:"flex",flexDirection:"column"},children:n})}function st({series:e,xDomain:n,yDomainPrimary:t,yDomainSecondary:i,yScalePrimary:a,yScaleSecondary:l,xTickFormat:c,xReadFormat:g,yTickFormat:p,xUnit:f,yUnit:h,thresholds:v,referenceCurves:y,layers:B,xKind:w="time",xAxisLabel:re,yAxisLabel:ae,ySecondaryAxisLabel:oe,"aria-label":se,hideXAxis:O,spatial:_,gridScale:le,crosshair:ce,legend:de,density:H="chart",notice:$,emptyState:C,footer:ue,plotReadout:R,chrome:fe="panel",title:he,headerActions:me,height:L,children:xe}){const F=B??Qe,D=w==="time",G=u.useRef(null),[M,pe]=u.useState(null),P=u.useRef(null),[S,ge]=u.useState(null);u.useEffect(()=>{const r=G.current;if(!r||typeof ResizeObserver>"u")return;const s=new ResizeObserver(m=>{const{width:b,height:d}=m[0].contentRect;pe({w:Math.floor(b),h:Math.floor(d)})});return s.observe(r),()=>s.disconnect()},[]),u.useEffect(()=>{const r=P.current;if(!r||typeof ResizeObserver>"u")return;const s=new ResizeObserver(m=>{const{width:b,height:d}=m[0].contentRect;ge({w:Math.floor(b),h:Math.floor(d)})});return s.observe(r),()=>s.disconnect()},[]);const ve=(v??[]).map(Ye).filter(r=>r!==null),W=!D&&y?y.map(r=>({id:`__ref_${r.id}`,label:r.label,axis:r.axis??"primary",color:r.color??"var(--color-text-faint)",type:"line",dashed:!0,readBetween:!0,data:{x:r.xs,y:r.ys}})):[],I=[...e,...W],be=c??(f?(r,s,m)=>Z(f,r,m):void 0),ye=p??(h?(r,s)=>Z(h,r,s,a):void 0),we=e.length===0&&W.length===0&&F.length===0,Y=F.length>0||I.some(r=>(r.data.x?.length??0)>0),j=[];we&&C!==void 0&&j.push(C),$&&j.push($);const T=S?Te({width:S.w,height:S.h,plotHasData:Y}):Y?"inline":"center",Q=o.jsx(Se,{placement:T,children:j.map((r,s)=>o.jsx("div",{children:r},s))}),je=(()=>{if(D)return;const r=e.find(d=>d.type!=="band"&&d.data.x.length>0);if(!r)return;let s=r.data.x.length-1;for(;s>=0&&!(Number.isFinite(r.data.x[s])&&Number.isFinite(r.data.y[s]));)s-=1;if(s<0)return;const m=r.data.x[s],b={};for(const d of y??[]){const K=Ie(d.xs,d.ys,m);K!==void 0&&(b[d.id]=K)}return{x:m,y:r.data.y[s],references:b}})(),ke=H==="compact"?qe:Ae,X=o.jsxs("div",{ref:P,style:{...Xe,...L===void 0?{}:{flex:"0 0 auto",height:L},flexDirection:T==="beside"?"row":"column"},children:[o.jsxs(ke,{style:Ke,footer:ue,children:[o.jsxs("div",{ref:G,style:Ze,children:[M&&o.jsx(Be,{series:I,xDomain:n,xTickFormat:be,xReadFormat:g,yDomainPrimary:t,yDomainSecondary:i,yScalePrimary:a,yScaleSecondary:l,yTickFormat:ye,thresholds:ve,layers:F,hideXAxis:O,spatial:_,gridScale:le,"aria-label":se,legend:de,density:H,crosshair:ce??!O,xKind:w,xAxisLabel:_?void 0:re,yAxisLabel:_?void 0:ae,ySecondaryAxisLabel:_?void 0:oe,card:typeof R=="function"?r=>R({width:r.width,height:r.height,present:je,compact:r.form>0,tight:r.form>1}):R,cardForms:typeof R=="function"?3:1,width:M.w,height:M.h}),j.length>0&&T==="center"&&Q]}),xe]}),j.length>0&&T!=="center"&&Q]});return fe==="bare"?X:o.jsx(Fe,{panelTitle:he,panelAside:me,sections:o.jsx(Ee,{fill:!0,children:X})})}const q=x(ne)`
  --gap-related: var(--gap-related-comfortable);
  --bleed-inline: 0px;

  background: var(--color-surface-sunken);
  border: 1px solid ${({$tone:e})=>Oe(e)};
  border-radius: var(--radius-regular);
  /* A banner is its own strip of the screen, so it takes the roomier inset. */
  padding: var(--inset-surface-standalone);
`;function lt({tone:e="warn",assertive:n=!1,role:t,children:i,...a}){const l=u.useRef(null),[c,g]=u.useState("");if(u.useEffect(()=>{const f=l.current;if(n||t!==void 0||f===null)return;const h=Je(f);g(v=>v===h?v:h)}),n)return E(q,{...a,children:i,role:t??"alert","aria-live":t===void 0?"assertive":void 0,$tone:e});const p=E(q,{...a,children:i,ref:l,role:t??"note",$tone:e});return t!==void 0?p:o.jsxs(o.Fragment,{children:[p,o.jsx(ze,{visuallyHidden:!0,children:c})]})}function Je(e){const n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let i=t.nextNode();i!==null;i=t.nextNode())n.push(i.textContent??"");return n.join(" ").replace(/\s+/g," ").trim()}export{ot as B,st as G,lt as N,He as S,Le as a,ne as b,E as r};
