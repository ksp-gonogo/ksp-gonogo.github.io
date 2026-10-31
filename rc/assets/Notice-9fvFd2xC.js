import{j as r}from"./ext-react-jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./ext-react-C0MU9AHG.js";import{a_ as Z,b9 as Te}from"./view-clock-formula-C1-fzzb3.js";import"./ksp-enum-names-C21IqV_T.js";import"./screen-DbS07m38.js";import{ak as Re,be as Ae,q as Fe,bz as Me,P as Be,ac as J,au as Ee,ag as Se,ae as Ne,ad as ze,$ as $e,a7 as Ce}from"./ModalSaveBar-FrEUBEjm.js";import{w as A,S as He,G as Oe,X as De,H as Le}from"./contributionsRead-BJXcYd-i.js";import x from"./ext-styled-components-DAuodqsN.js";function We({children:e,status:t,gap:n="related-packed",align:i="center"}){return r.jsxs(Re,{align:i,gap:n,justify:"between",wrap:!0,children:[e,t]})}const U=x.div`
  color: var(--color-text-primary);
  font-weight: 600;
  /* One rung above the body the arrangement sets; both halves are declared here, so a site cannot break the step. */
  font-size: var(--font-size-value);
  line-height: var(--line-height-tight);
  /* A content-sized basis, so a long title wraps instead of running into the badge beside it. */
  flex: 1 1 auto;
  min-width: 0;
`,Ge=x.div`
  display: flex;
  align-items: baseline;
  gap: var(--gap-record-lead);
  flex: 1 1 auto;
  min-width: 0;
`;function ee({left:e,right:t,children:n}){return r.jsx(We,{align:"baseline",status:t,children:e==null?n:r.jsxs(Ge,{children:[e,n]})})}const Ie=x.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--gap-related);
`,te=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  flex: 1 1 var(--block-body-floor, 9rem);
  min-width: 0;
`,k=x.div`
  min-width: 0;
  ${({$side:e})=>e?`flex: 0 0 auto;
    --radius-display-frame: var(--radius-display-frame-aside);`:""}
`,ne=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-related);
  flex-wrap: wrap;
`,ie=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-related);
  min-width: 0;
  /* The compact body size, declared here so the title stays one rung above it. */
  font-size: var(--font-size-compact);
`;function N(e,{title:t,titleAs:n,titleLeft:i,titleRight:a,left:o,right:d,top:m,bottom:h,footer:c,children:u,...v}){const y=t!=null||i!=null||a!=null,F=o!=null||d!=null,w=y&&r.jsx(ee,{left:i,right:a,children:t!=null&&r.jsx(U,{as:n,children:t})});return r.jsxs(e,{...v,children:[m!=null&&r.jsx(k,{$side:!1,children:m}),F?r.jsxs(Ie,{children:[o!=null&&r.jsx(k,{$side:!0,children:o}),r.jsxs(te,{children:[w,u]}),d!=null&&r.jsx(k,{$side:!0,children:d})]}):r.jsxs(r.Fragment,{children:[w,u]}),c!=null&&r.jsx(ne,{children:c}),h!=null&&r.jsx(k,{$side:!1,children:h})]})}const Pe={Title:U,TitleRow:ee,Body:te,Aside:k,Footer:ne};function Ye({...e}){return N(ie,e)}const ft=Object.assign(Ye,Pe);function V(e,t,n,i="linear"){const a=n&&Xe(t,n)?0:t,o=n?i==="log"?z(e,a).decimals:Ke(e,a,n):0;return A(Z(e,a),{decimals:o})}function Xe(e,t){const n=t.length>1?Math.abs(t[1]-t[0]):0;return n>0&&Math.abs(e)<n*1e-6}const S=3;function re(e){return{figure:Number.parseFloat(e.replace(/[^\d.-]/g,"")),unit:e.replace(/[\d.,\s-]/g,"")}}function z(e,t){const n=a=>re(A(Z(e,t),{decimals:a})),i=n(S);for(let a=0;a<S;a++)if(n(a).figure===i.figure)return{decimals:a,unit:i.unit};return{decimals:S,unit:i.unit}}function Ke(e,t,n){const i=z(e,t);let a=i.decimals;for(const o of n){const d=z(e,o);d.unit===i.unit&&(a=Math.max(a,d.decimals))}return a}function Qe(e){const t=re(A(e,{decimals:3})),n=Math.abs(t.figure),i=Number.isFinite(n)&&n>0?Math.max(0,2-Math.floor(Math.log10(n))):0;return A(e,{decimals:i})}function Ve(e,t,n){for(let i=1;i<e.length;i++){const[a,o]=[e[i-1],e[i]];if(n>=Math.min(a,o)&&n<=Math.max(a,o)&&o!==a)return t[i-1]+(t[i]-t[i-1])*(n-a)/(o-a)}}function qe(e,t){const{shown:n}=J(e.value,{drawsReckoning:!0}),i=Te(n);return i===null?null:{id:e.id??`threshold-${t}`,value:i,...e.kind==="limit"?{kind:e.kind,bad:e.bad}:{kind:e.kind},axis:e.axis,label:[e.label,n?Qe(n):void 0].filter(Boolean).join(": "),spokenLabel:[e.label,Oe(n)].filter(Boolean).join(": "),reading:"state"in e.value?e.value:void 0}}const Ze=Object.freeze([]),Je={flex:1,display:"flex",position:"relative",minHeight:0,minWidth:0},Ue={flex:1,minHeight:0,minWidth:0},et={flex:1,position:"relative",minHeight:0,minWidth:0};function tt({style:e,children:t}){return r.jsx("div",{style:{...e,display:"flex",flexDirection:"column"},children:t})}function mt({series:e,xDomain:t,yDomainPrimary:n,yDomainSecondary:i,yScalePrimary:a,yScaleSecondary:o,xTickFormat:d,xReadFormat:m,yTickFormat:h,xUnit:c,yUnit:u,thresholds:v,referenceCurves:y,layers:F,xKind:w="time",xAxisLabel:se,yAxisLabel:ae,ySecondaryAxisLabel:oe,"aria-label":le,hideXAxis:$,spatial:_,gridScale:ce,crosshair:de,legend:ue,density:C="chart",notice:H,emptyState:O,footer:he,plotReadout:T,chrome:fe="panel",title:me,headerActions:pe,height:D,children:xe}){const M=F??Ze,L=w==="time",W=p.useRef(null),[B,ge]=p.useState(null),G=p.useRef(null),[E,ve]=p.useState(null);p.useEffect(()=>{const s=W.current;if(!s||typeof ResizeObserver>"u")return;const l=new ResizeObserver(g=>{const{width:b,height:f}=g[0].contentRect;ge({w:Math.floor(b),h:Math.floor(f)})});return l.observe(s),()=>l.disconnect()},[]),p.useEffect(()=>{const s=G.current;if(!s||typeof ResizeObserver>"u")return;const l=new ResizeObserver(g=>{const{width:b,height:f}=g[0].contentRect;ve({w:Math.floor(b),h:Math.floor(f)})});return l.observe(s),()=>l.disconnect()},[]);const be=(v??[]).map(qe).filter(s=>s!==null),I=!L&&y?y.map(s=>({id:`__ref_${s.id}`,label:s.label,axis:s.axis??"primary",color:s.color??"var(--color-text-faint)",type:"line",dashed:!0,readBetween:!0,data:{x:s.xs,y:s.ys}})):[],P=[...e,...I],ye=d??(c?(s,l,g)=>V(c,s,g):void 0),we=h??(u?(s,l)=>V(u,s,l,a):void 0),je=e.length===0&&I.length===0&&M.length===0,Y=M.length>0||P.some(s=>(s.data.x?.length??0)>0),j=[];je&&O!==void 0&&j.push(O),H&&j.push(H);const R=E?Ae({width:E.w,height:E.h,plotHasData:Y}):Y?"inline":"center",X=r.jsx(Ee,{placement:R,children:j.map((s,l)=>r.jsx("div",{children:s},l))}),ke=(()=>{if(L)return;const s=e.find(f=>f.type!=="band"&&f.data.x.length>0);if(!s)return;let l=s.data.x.length-1;for(;l>=0&&!(Number.isFinite(s.data.x[l])&&Number.isFinite(s.data.y[l]));)l-=1;if(l<0)return;const g=s.data.x[l],b={};for(const f of y??[]){const Q=Ve(f.xs,f.ys,g);Q!==void 0&&(b[f.id]=Q)}return{x:g,y:s.data.y[l],references:b}})(),_e=C==="compact"?tt:Fe,K=r.jsxs("div",{ref:G,style:{...Je,...D===void 0?{}:{flex:"0 0 auto",height:D},flexDirection:R==="beside"?"row":"column"},children:[r.jsxs(_e,{style:Ue,footer:he,children:[r.jsxs("div",{ref:W,style:et,children:[B&&r.jsx(Me,{series:P,xDomain:t,xTickFormat:ye,xReadFormat:m,yDomainPrimary:n,yDomainSecondary:i,yScalePrimary:a,yScaleSecondary:o,yTickFormat:we,thresholds:be,layers:M,hideXAxis:$,spatial:_,gridScale:ce,"aria-label":le,legend:ue,density:C,crosshair:de??!$,xKind:w,xAxisLabel:_?void 0:se,yAxisLabel:_?void 0:ae,ySecondaryAxisLabel:_?void 0:oe,card:typeof T=="function"?s=>T({width:s.width,height:s.height,present:ke,compact:s.form>0,tight:s.form>1}):T,cardForms:typeof T=="function"?3:1,width:B.w,height:B.h}),j.length>0&&R==="center"&&X]}),xe]}),j.length>0&&R!=="center"&&X]});return fe==="bare"?K:r.jsx(Be,{panelTitle:me,panelAside:pe,sections:r.jsx(He,{fill:!0,children:K})})}function nt(e){if(e.frame==="scet")return{token:"SCET",spoken:"spacecraft event time",title:"Spacecraft event time: when this happens at the craft"};const{vantage:t}=e;return t===void 0?{token:"RECEIVED",spoken:"received",title:"When the telemetry showing this arrives"}:{token:`AT ${t}`,spoken:`received at ${t}`,title:`When the telemetry showing this arrives at ${t}`}}const it=x.span`
  font-size: max(0.72em, 10px);
  opacity: 0.72;
  white-space: nowrap;
  text-transform: none;
`;function pt({value:e,context:t}){const i=J(typeof e=="number"?void 0:e),{shown:a,held:o,caption:d}=i,m=typeof e=="number"?e:a?.magnitude,h=Se({...i,shown:m}),c=t&&nt(t),u=De(m??Number.NaN);return r.jsxs(r.Fragment,{children:[o?r.jsx(Ne,{...h,caption:d,children:u}):r.jsx("span",{"data-figure":h["data-figure"],children:u}),c&&r.jsxs(r.Fragment,{children:[" ",r.jsx(ze,{text:c.title,focusable:!0,children:r.jsxs(it,{children:[r.jsx("span",{"aria-hidden":"true",children:c.token}),r.jsx($e,{children:c.spoken})]})})]})]})}const q=x(ie)`
  --gap-related: var(--gap-related-comfortable);
  --bleed-inline: 0px;

  background: var(--color-surface-sunken);
  border: 1px solid ${({$tone:e})=>Le(e)};
  border-radius: var(--radius-regular);
  /* A banner is its own strip of the screen, so it takes the roomier inset. */
  padding: var(--inset-surface-standalone);
`;function xt({tone:e="warn",assertive:t=!1,role:n,children:i,...a}){const o=p.useRef(null),[d,m]=p.useState("");if(p.useEffect(()=>{const c=o.current;if(t||n!==void 0||c===null)return;const u=rt(c);m(v=>v===u?v:u)}),t)return N(q,{...a,children:i,role:n??"alert","aria-live":n===void 0?"assertive":void 0,$tone:e});const h=N(q,{...a,children:i,ref:o,role:n??"note",$tone:e});return n!==void 0?h:r.jsxs(r.Fragment,{children:[h,r.jsx(Ce,{visuallyHidden:!0,children:d})]})}function rt(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let i=n.nextNode();i!==null;i=n.nextNode())t.push(i.textContent??"");return t.join(" ").replace(/\s+/g," ").trim()}export{ft as B,mt as G,pt as M,xt as N,We as S,Pe as a,ie as b,N as r};
