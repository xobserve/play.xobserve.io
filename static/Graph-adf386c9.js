import{T as w,a as z,u as q,b as H,$ as J,A as j,f as K,c as ee,d as N,G as I,p as te,S as ae,s as ne,U as le,e as se,g as ie,h as re}from"./index-9076ce45.js";import{r as S,eP as oe,ar as _,d7 as U,bU as O,av as ce,eQ as ue,a$ as de,ax as he,dc as me,e6 as fe,V as f,ay as V,aQ as G,aT as ge,aN as xe,ba as be,ab as ve,aR as pe,ac as X,bk as Ee,d1 as Se,au as R,d2 as ye,bY as we,db as ke,aP as Y,df as $,eR as Me,ad as B,di as Te,_ as Ce,eS as Pe}from"./index-3a76b207.js";import{G as Re}from"./GraphLayout-463a0496.js";import"./useLandscapeMode-e7a72966.js";const De=5,Ie=({onZoom:e,options:u})=>{const[l,h]=S.useState(null);return S.useEffect(()=>{if(l){if(l.bbox.width<De)return;e({from:l.min,to:l.max})}},[l]),S.useLayoutEffect(()=>{u.hooks.setSelect=[a=>{const i=a.posToVal(a.select.left,"x"),n=a.posToVal(a.select.left+a.select.width,"x");h({min:i,max:n,bbox:{left:a.bbox.left/window.devicePixelRatio+a.select.left,top:a.bbox.top/window.devicePixelRatio,height:a.bbox.height/window.devicePixelRatio,width:a.select.width}}),a.setSelect({left:0,width:0},!1)}]},[u]),null};function Ae(e,u){let l=e.scales[u],h=1/0,a=-1/0;return e.series.forEach((i,n)=>{if(i.show&&i.scale===u)if(i.min==null){let r=e.data[n];for(let t=0;t<r.length;t++)r[t]!=null&&(h=Math.min(h,r[t]),a=Math.max(a,r[t]))}else h=Math.min(h,i.min),a=Math.max(a,i.max)}),a===h&&(h=l.min,a=l.max),[h,a]}function Le(e,u,l,h,a,i){let n=l??a??null,r=h??i??null;if(n==null||r==null){let[t,o]=Ae(e,u);n=n??t??0,r=r??o??100}return[n,r]}function Ne(e,u,l,h=!1){let a=e.scales[u],i=null,n=null;for(let c=0;c<l.length;c++){let g=l[c][0];if((g<=a.min||i==null)&&(i=c),n=c,g>=a.max)break}if(i===n)return l[i][1];let r=l[i][0],t=l[n][0];r===-1/0&&(r=a.min),t===1/0&&(t=a.max);let o=Math.round(e.valToPos(r,u,!0)),E=Math.round(e.valToPos(t,u,!0)),p=o-E;if(p===0)return l[n][1];let y,b,s,x;e.scales.x.ori===0?(y=s=0,b=o,x=E):(b=x=0,y=o,s=E);let m=oe().createLinearGradient(y,b,s,x),d;for(let c=i;c<=n;c++){let g=l[c],C=c===i?o:c===n?E:Math.round(e.valToPos(g[0],u,!0)),k=(o-C)/p;h&&c>i&&m.addColorStop(k,d),m.addColorStop(k,d=g[1])}return m}const Q=({thresholdsConfig:e,options:u,display:l})=>{const{colorMode:h}=_(),a="y",i=l===w.DashedLine||l===w.AreaDashedLine?[10,10]:void 0;function n(t,o,E){let p=t.ctx,y=Ne(t,o,E.map(b=>{let s=U(O(b.color,h));return s.getAlpha()===1&&s.setAlpha(.15),[b.value,s.toString()]}),!0);p.fillStyle=y,p.fillRect(t.bbox.left,t.bbox.top,t.bbox.width,t.bbox.height)}function r(t,o,E){let p=t.ctx,y=0;for(let b=0;b<E.length;b++)if(E[b].color==="transparent"){y=b;break}p.lineWidth=2,i&&p.setLineDash(i);for(let b=1;b<E.length;b++){const s=E[b];let x;y>=b&&b>0?x=U(O(E[b-1].color,h)):x=U(O(s.color,h)),x.getAlpha()===1&&x.setAlpha(.7);let v=Math.round(t.bbox.left),m=Math.round(t.valToPos(s.value,o,!0)),d=Math.round(t.bbox.left+t.bbox.width),c=Math.round(t.valToPos(s.value,o,!0));p.beginPath(),p.moveTo(v,m),p.lineTo(d,c),p.strokeStyle=x.toString(),p.stroke()}}return S.useLayoutEffect(()=>{u.hooks.drawClear.push(t=>{const o=t.ctx,{min:E,max:p}=t.scales.x,{min:y,max:b}=t.scales[a];if(E==null||p==null||y==null||b==null)return;let{thresholds:s,mode:x}=e;if(x===z.Percentage){let[m,d]=Le(t,a,void 0,void 0,void 0,void 0),c=d-m;s=s.map(g=>({...g,value:m+c*(g.value/100)}))}o.save();const v=[];for(const m of s)v.unshift(m);switch(l){case w.Area:n(t,a,v);break;case w.Line:case w.DashedLine:r(t,a,v);break;case w.AreaLine:case w.AreaDashedLine:n(t,a,v),r(t,a,v);break}o.restore()})},[u,e]),null};function Z(e,u){let l=[],h=[],a=e[0].length,i=Array(a);for(let n=0;n<a;n++)i[n]=0;for(let n=1;n<e.length;n++)l.push(u(n)?e[n]:e[n].map((r,t)=>i[t]+=+r));for(let n=1;n<e.length;n++)!u(n)&&h.push({series:[e.findIndex((r,t)=>t>n&&!u(t)),n]});return h=h.filter(n=>n.series[1]>-1),{data:[e[0]].concat(l),bands:h}}function Oe(e,u,l){let h=l?l(u):u,a=Z(h,i=>!1);return e.bands=a.bands,e.cursor=e.cursor||{},e.cursor.dataIdx=(i,n,r,t)=>u[n][r]==null?null:r,e.series.forEach(i=>{i.value=(n,r,t,o)=>u[t][o],i.points=i.points||{},i.points.filter=(n,r,t,o)=>{if(t){let E=[];return u[r].forEach((p,y)=>{p!=null&&E.push(y)}),E}}}),e.scales.y={...e.scales.y,range:(i,n,r)=>[0,q.rangeNum(0,r,.1,!0)[1]]},e.hooks.setSeries=[(i,n)=>{let r=Z(u,t=>!i.series[t].show);i.delBand(null),r.bands.forEach(t=>i.addBand(t)),i.setData(r.data)},...e.hooks.setSeries??[]],{opts:e,data:a.data}}const Ve=S.memo(({props:e,options:u,data:l,container:h})=>{var c;const[a,i]=S.useState(null),[n,r]=S.useState(null),t=ce(),o=S.useRef(),E=S.useRef(null),p=S.useRef(null),y=S.useRef(null),b=S.useRef(null),s=S.useRef(null);ue({ref:h,handler:()=>{r(null)}});const[x]=de(ke);S.useLayoutEffect(()=>{var C,k;let g;if(u.hooks.init.push(A=>{o.current=A}),u){u.hooks.syncRect.push((M,T)=>g=T);const A=M=>{if(!M||!g)return;let T=M.cursor;E.current!=T.idx&&(E.current=T.idx);const D=K(M,g,l,e.panel);if(D){const[L,P,F,W]=D;p.current=L,y.current=F,b.current=W}s.current=M.cursor.left};(C=u.hooks.setCursor)==null||C.push(A),(k=u.hooks.ready)==null||k.push(M=>{const T=M.over;let D,L;T.addEventListener("mousedown",P=>{D=P.clientX,L=P.clientY}),T.addEventListener("mouseup",P=>{P.clientX==D&&P.clientY==L?p.current!=null&&E.current!=null&&(r(F=>F?null:{x:y.current,y:b.current}),he(me+e.panel.id)):r(null)})})}return()=>{}},[u,x]);const v=g=>{i({color:"rgba(0, 211, 255, 1)",time:g,duration:"0s",text:"",tags:[],id:0,group:e.panel.id,namespace:e.dashboardId})},m=fe((c=o.current)==null?void 0:c.posToVal(s.current,"x")),d=x?we:V;return f.createElement(f.Fragment,null,f.createElement(d,null,n&&f.createElement(H,{allowPointerEvents:!0,position:{x:n.x,y:n.y},offset:{x:-8,y:2}},f.createElement(V,{className:"bordered",background:"var(--chakra-colors-chakra-body-bg)",p:"2",pb:"0",fontSize:"xs"},f.createElement(G,{fontWeight:"600"},ge(m*1e3)),f.createElement(xe,{mt:"1"},f.createElement(V,{width:"10px",height:"4px",background:p.current.color,mt:"2px"}),f.createElement(G,{maxW:x?e.width/2:null},p.current.name)),f.createElement(be,{mt:"2"}),f.createElement(ve,{alignItems:"left",spacing:0,divider:f.createElement(pe,null)},f.createElement(X,{size:"sm",variant:"ghost",onClick:()=>{J.get().data.annotation.enable?v(m):t({title:"Annotation is disabled",status:"warning",duration:3e3,isClosable:!0})}},"Add annotation"),e.panel.plugins.graph.clickActions.map((g,C)=>!Ee(g.name)&&f.createElement(X,{key:C+g.name,size:"sm",variant:"ghost",bg:g.color,onClick:()=>{const k=Se(g.action);if(R.isFunction(k))return ye(k,{series:p.current,time:m});t({title:"Invalid click action",status:"warning",duration:3e3,isClosable:!0})}},g.name))))),a&&f.createElement(j,{annotation:a,onEditorClose:()=>{i(null)}})))}),Ze=e=>R.isEmpty(e.data)?f.createElement(Y,{height:"100%"},"No data"):$(e.data)?f.createElement(f.Fragment,null,f.createElement(Ye,{...e})):f.createElement(Y,{height:"100%"},"Data format not support!"),Ye=S.memo(e=>{var b;const u=Me+e.dashboardId+"-"+e.panel.id,[l,h]=S.useState(B.get(u)??[]),[a,i]=S.useState(null),{colorMode:n}=_(),r=S.useRef();if(!$(e.data))return f.createElement(Y,{height:"100%"},"Data format not support!");S.useEffect(()=>{l.length>0?B.set(u,l):B.remove(u)},[l]);const t=S.useMemo(()=>{const s=[];return e.data.forEach(x=>{x.forEach(v=>{v.rawName=v.name,s.push(v)})}),s},[e.data]),o=S.useMemo(()=>{let s;const x=Te[e.panel.styles.palette]??Ce;return t.map((v,m)=>{const d=ee(e.panel,v.rawName),c=N(d,I.SeriesName);c?v.name=c:v.name=v.rawName;let g=N(d,I.SeriesColor);g||(g=x[m%x.length]),v.color=O(g,n)}),s=te(e,t,n,l),s},[e.panel,e.data,n]),E=S.useCallback((s,x,v)=>{if(v){if(l.length==0){const m=[];for(const d of t)d.name!=s&&m.push(d.name);h(m),o.series.map((d,c)=>{d.label==s?a.setSeries(c,{show:!0}):a.setSeries(c,{show:!1})});return}if(l.includes(s)){const m=l.filter(d=>d!=s);h(m),o.series.map((d,c)=>{d.label==s&&a.setSeries(c,{show:!0})})}else{const m=[...l];m.push(s),h(m),o.series.map((d,c)=>{d.label==s&&a.setSeries(c,{show:!1})})}}else if(l.length==0){const m=[];o.series.map((d,c)=>{d.label!=s&&m.push(d.label)}),h(m),o.series.map((d,c)=>{d.label==s?a.setSeries(c,{show:!0}):a.setSeries(c,{show:!1})})}else if(l.includes(s)){const m=[];o.series.map((d,c)=>{d.label!=s&&m.push(d.label)}),h(m),o.series.map((d,c)=>{d.label==s?a.setSeries(c,{show:!0}):a.setSeries(c,{show:!1})})}else h([]),o.series.map((m,d)=>{a.setSeries(d,{show:!0})})},[a,o.series,l]),p=S.useCallback(s=>{var x;i(s),(x=e.sync)==null||x.sub(s)},[e.sync]),y=s=>{Pe(s.from,s.to)};return f.createElement(f.Fragment,null,R.isEmpty(e.data)?f.createElement(Y,{height:"100%"},"No data"):f.createElement(V,{h:"100%",className:"panel-graph",ref:r,position:"relative"},!R.isEmpty((b=e==null?void 0:e.panel.plugins.graph.axis)==null?void 0:b.label)&&f.createElement(G,{fontSize:"sm",position:"absolute",ml:"3",mt:"-1",className:"color-text"},e.panel.plugins.graph.axis.label),o&&f.createElement(Re,{width:e.width,height:e.height,legend:e.panel.plugins.graph.legend.mode=="hidden"?null:f.createElement(ae,{placement:e.panel.plugins.graph.legend.placement,width:e.panel.plugins.graph.legend.width,props:e,data:t,mode:ne.Legend,onSelect:E,panelType:e.panel.type,inactiveSeries:l})},(s,x)=>{a&&(e.width!=s||e.height!=x)&&a.setSize({width:s,height:x}),o.width=s,o.height=x;let v=o,m=Fe(t,e.panel);if(e.panel.plugins.graph.styles.enableStack){const g=Oe(v,m,null);m=g.data,v=g.opts}const d=e.panel.overrides.find(g=>N(g,I.SeriesThresholds)),c=N(d,I.SeriesThresholds);return o&&f.createElement(le,{options:v,data:m,onDelete:g=>{},onCreate:p},e.panel.plugins.graph.tooltip.mode!="hidden"&&f.createElement(se,{props:e,options:o,data:t,inactiveSeries:l}),f.createElement(Ve,{props:e,options:o,data:t,container:r}),f.createElement(Ie,{options:o,onZoom:y}),f.createElement(ie,{dashboardId:e.dashboardId,options:o,timeRange:e.timeRange,panel:e.panel}),e.panel.plugins.graph.thresholdsDisplay!=w.None&&f.createElement(Q,{options:o,thresholdsConfig:e.panel.plugins.graph.thresholds,display:e.panel.plugins.graph.thresholdsDisplay}),c&&e.panel.plugins.graph.thresholdsDisplay!=w.None&&f.createElement(Q,{options:o,thresholdsConfig:c,display:e.panel.plugins.graph.thresholdsDisplay}))})))}),Fe=(e,u)=>{const l=[];if(R.isEmpty(e))return[];const h=e[0].fields[0];l.push(h.values);for(const a of e)if(re(u,a.rawName,I.SeriesNegativeY)){const n=R.cloneDeep(a.fields[1].values);for(let r=0;r<n.length;r++)n[r]!=null&&(n[r]*=-1);l.push(n)}else l.push(a.fields[1].values);return l};var Ue=(e=>(e[e.Right=0]="Right",e[e.Up=1]="Up",e[e.Left=2]="Left",e[e.Down=3]="Down",e))(Ue||{});export{Ue as GradientDirection,Ze as default};
