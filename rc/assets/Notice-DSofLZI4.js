import{j as a}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./ext-react-RRA14VTW.js";import{aO as J,b0 as _e}from"./view-clock-formula-CVZBU1aa.js";import"./ksp-enum-names-C2UhZdgT.js";import"./screen-W8lTyEHK.js";import{ac as Re,ad as Te,q as Ae,ae as Be,P as Fe,af as Me,ag as Se,a6 as Oe}from"./ModalSaveBar-BS1ba4Jh.js";import{w as A,S as ze,d as Ee,t as Ne}from"./contributionsRead-DSQ8W60c.js";import x from"./ext-styled-components-Br73TgY3.js";function He({children:e,status:n,gap:t="related-packed",align:i="center"}){return a.jsxs(Re,{align:i,gap:t,justify:"between",wrap:!0,children:[e,n]})}const V=x.div`
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
`;function U({left:e,right:n,children:t}){return a.jsx(He,{align:"baseline",status:n,children:e==null?t:a.jsxs($e,{children:[e,t]})})}const Ce=x.div`
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
`;function z(e,{title:n,titleAs:t,titleLeft:i,titleRight:o,left:l,right:c,top:g,bottom:p,footer:f,children:h,...v}){const y=n!=null||i!=null||o!=null,B=l!=null||c!=null,w=y&&a.jsx(U,{left:i,right:o,children:n!=null&&a.jsx(V,{as:t,children:n})});return a.jsxs(e,{...v,children:[g!=null&&a.jsx(k,{$side:!1,children:g}),B?a.jsxs(Ce,{children:[l!=null&&a.jsx(k,{$side:!0,children:l}),a.jsxs(ee,{children:[w,h]}),c!=null&&a.jsx(k,{$side:!0,children:c})]}):a.jsxs(a.Fragment,{children:[w,h]}),f!=null&&a.jsx(te,{children:f}),p!=null&&a.jsx(k,{$side:!1,children:p})]})}const Le={Title:V,TitleRow:U,Body:ee,Aside:k,Footer:te};function De({...e}){return z(ne,e)}const ot=Object.assign(De,Le);function K(e,n,t){const i=t&&Pe(n,t)?0:n;return A(J(e,i),{decimals:t?We(e,i,t):0})}function Pe(e,n){const t=n.length>1?Math.abs(n[1]-n[0]):0;return t>0&&Math.abs(e)<t*1e-6}const O=3;function ie(e){return{figure:Number.parseFloat(e.replace(/[^\d.-]/g,"")),unit:e.replace(/[\d.,\s-]/g,"")}}function Z(e,n){const t=o=>ie(A(J(e,n),{decimals:o})),i=t(O);for(let o=0;o<O;o++)if(t(o).figure===i.figure)return{decimals:o,unit:i.unit};return{decimals:O,unit:i.unit}}function We(e,n,t){const i=Z(e,n);let o=i.decimals;for(const l of t){const c=Z(e,l);c.unit===i.unit&&(o=Math.max(o,c.decimals))}return o}function Ge(e){const n=ie(A(e,{decimals:3})),t=Math.abs(n.figure),i=Number.isFinite(t)&&t>0?Math.max(0,2-Math.floor(Math.log10(t))):0;return A(e,{decimals:i})}function Ie(e,n,t){for(let i=1;i<e.length;i++){const[o,l]=[e[i-1],e[i]];if(t>=Math.min(o,l)&&t<=Math.max(o,l)&&l!==o)return n[i-1]+(n[i]-n[i-1])*(t-o)/(l-o)}}function Ye(e,n){const{shown:t}=Me(e.value,{drawsReckoning:!0}),i=_e(t);return i===null?null:{id:e.id??`threshold-${n}`,value:i,...e.kind==="limit"?{kind:e.kind,bad:e.bad}:{kind:e.kind},axis:e.axis,label:[e.label,t?Ge(t):void 0].filter(Boolean).join(": "),spokenLabel:[e.label,Ee(t)].filter(Boolean).join(": "),reading:"state"in e.value?e.value:void 0}}const Qe=Object.freeze([]),Xe={flex:1,display:"flex",position:"relative",minHeight:0,minWidth:0},Ke={flex:1,minHeight:0,minWidth:0},Ze={flex:1,position:"relative",minHeight:0,minWidth:0};function qe({style:e,children:n}){return a.jsx("div",{style:{...e,display:"flex",flexDirection:"column"},children:n})}function st({series:e,xDomain:n,yDomainPrimary:t,yDomainSecondary:i,yScalePrimary:o,yScaleSecondary:l,xTickFormat:c,xReadFormat:g,yTickFormat:p,xUnit:f,yUnit:h,thresholds:v,referenceCurves:y,layers:B,xKind:w="time",xAxisLabel:re,yAxisLabel:ae,ySecondaryAxisLabel:oe,"aria-label":se,hideXAxis:E,spatial:_,gridScale:le,crosshair:ce,legend:de,density:N="chart",notice:H,emptyState:$,footer:ue,plotReadout:R,chrome:fe="panel",title:he,headerActions:me,height:C,children:xe}){const F=B??Qe,L=w==="time",D=u.useRef(null),[M,pe]=u.useState(null),P=u.useRef(null),[S,ge]=u.useState(null);u.useEffect(()=>{const r=D.current;if(!r||typeof ResizeObserver>"u")return;const s=new ResizeObserver(m=>{const{width:b,height:d}=m[0].contentRect;pe({w:Math.floor(b),h:Math.floor(d)})});return s.observe(r),()=>s.disconnect()},[]),u.useEffect(()=>{const r=P.current;if(!r||typeof ResizeObserver>"u")return;const s=new ResizeObserver(m=>{const{width:b,height:d}=m[0].contentRect;ge({w:Math.floor(b),h:Math.floor(d)})});return s.observe(r),()=>s.disconnect()},[]);const ve=(v??[]).map(Ye).filter(r=>r!==null),W=!L&&y?y.map(r=>({id:`__ref_${r.id}`,label:r.label,axis:r.axis??"primary",color:r.color??"var(--color-text-faint)",type:"line",dashed:!0,readBetween:!0,data:{x:r.xs,y:r.ys}})):[],G=[...e,...W],be=c??(f?(r,s,m)=>K(f,r,m):void 0),ye=p??(h?(r,s)=>K(h,r,s):void 0),we=e.length===0&&W.length===0&&F.length===0,I=F.length>0||G.some(r=>(r.data.x?.length??0)>0),j=[];we&&$!==void 0&&j.push($),H&&j.push(H);const T=S?Te({width:S.w,height:S.h,plotHasData:I}):I?"inline":"center",Y=a.jsx(Se,{placement:T,children:j.map((r,s)=>a.jsx("div",{children:r},s))}),je=(()=>{if(L)return;const r=e.find(d=>d.type!=="band"&&d.data.x.length>0);if(!r)return;let s=r.data.x.length-1;for(;s>=0&&!(Number.isFinite(r.data.x[s])&&Number.isFinite(r.data.y[s]));)s-=1;if(s<0)return;const m=r.data.x[s],b={};for(const d of y??[]){const X=Ie(d.xs,d.ys,m);X!==void 0&&(b[d.id]=X)}return{x:m,y:r.data.y[s],references:b}})(),ke=N==="compact"?qe:Ae,Q=a.jsxs("div",{ref:P,style:{...Xe,...C===void 0?{}:{flex:"0 0 auto",height:C},flexDirection:T==="beside"?"row":"column"},children:[a.jsxs(ke,{style:Ke,footer:ue,children:[a.jsxs("div",{ref:D,style:Ze,children:[M&&a.jsx(Be,{series:G,xDomain:n,xTickFormat:be,xReadFormat:g,yDomainPrimary:t,yDomainSecondary:i,yScalePrimary:o,yScaleSecondary:l,yTickFormat:ye,thresholds:ve,layers:F,hideXAxis:E,spatial:_,gridScale:le,"aria-label":se,legend:de,density:N,crosshair:ce??!E,xKind:w,xAxisLabel:_?void 0:re,yAxisLabel:_?void 0:ae,ySecondaryAxisLabel:_?void 0:oe,card:typeof R=="function"?r=>R({width:r.width,height:r.height,present:je,compact:r.form>0,tight:r.form>1}):R,cardForms:typeof R=="function"?3:1,width:M.w,height:M.h}),j.length>0&&T==="center"&&Y]}),xe]}),j.length>0&&T!=="center"&&Y]});return fe==="bare"?Q:a.jsx(Fe,{panelTitle:he,panelAside:me,sections:a.jsx(ze,{fill:!0,children:Q})})}const q=x(ne)`
  --gap-related: var(--gap-related-comfortable);
  --bleed-inline: 0px;

  background: var(--color-surface-sunken);
  border: 1px solid ${({$tone:e})=>Ne(e)};
  border-radius: var(--radius-regular);
  /* A banner is its own strip of the screen, so it takes the roomier inset. */
  padding: var(--inset-surface-standalone);
`;function lt({tone:e="warn",assertive:n=!1,role:t,children:i,...o}){const l=u.useRef(null),[c,g]=u.useState("");if(u.useEffect(()=>{const f=l.current;if(n||t!==void 0||f===null)return;const h=Je(f);g(v=>v===h?v:h)}),n)return z(q,{...o,children:i,role:t??"alert","aria-live":t===void 0?"assertive":void 0,$tone:e});const p=z(q,{...o,children:i,ref:l,role:t??"note",$tone:e});return t!==void 0?p:a.jsxs(a.Fragment,{children:[p,a.jsx(Oe,{visuallyHidden:!0,children:c})]})}function Je(e){const n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let i=t.nextNode();i!==null;i=t.nextNode())n.push(i.textContent??"");return n.join(" ").replace(/\s+/g," ").trim()}export{ot as B,st as G,lt as N,He as S,Le as a,ne as b,z as r};
