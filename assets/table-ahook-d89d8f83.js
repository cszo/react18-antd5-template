import{r as v,bq as ye,br as be,at as $,l as S,k as B,q as oe,s as re,aS as q,v as k,bs as le}from"./index-071b2135.js";import{c as w,f as b,b as p,g as Pe,h as Re,d as J}from"./tslib.es6-59680bf8.js";import{T as Se}from"./Table-ee188979.js";var we=function(e){return function(n,r){var t=v.useRef(!1);e(function(){return function(){t.current=!1}},[]),e(function(){if(!t.current)t.current=!0;else return n()},r)}},Q=function(e){return typeof e=="function"},Fe=!1;const X=Fe;function A(e){X&&(Q(e)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e)));var n=v.useRef(e);n.current=v.useMemo(function(){return e},[e]);var r=v.useRef();return r.current||(r.current=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return n.current.apply(this,t)}),r.current}const L=we(v.useEffect);var ce=function(e,n){var r=n.manual,t=n.ready,a=t===void 0?!0:t,o=n.defaultParams,u=o===void 0?[]:o,c=n.refreshDeps,s=c===void 0?[]:c,i=n.refreshDepsAction,m=v.useRef(!1);return m.current=!1,L(function(){!r&&a&&(m.current=!0,e.run.apply(e,w([],b(u),!1)))},[a]),L(function(){m.current||r||(m.current=!0,i?i():e.refresh())},w([],b(s),!1)),{onBefore:function(){if(!a)return{stopNow:!0}}}};ce.onInit=function(e){var n=e.ready,r=n===void 0?!0:n,t=e.manual;return{loading:!t&&r}};const Ce=ce;function Te(e,n){if(e===n)return!0;for(var r=0;r<e.length;r++)if(!Object.is(e[r],n[r]))return!1;return!0}function fe(e,n){var r=v.useRef({deps:n,obj:void 0,initialized:!1}).current;return(r.initialized===!1||!Te(r.deps,n))&&(r.deps=n,r.obj=e(),r.initialized=!0),r.obj}function de(e){var n=v.useRef(e);return n.current=e,n}var Ae=function(e){X&&(Q(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e)));var n=de(e);v.useEffect(function(){return function(){n.current()}},[])};const ie=Ae;var G=new Map,ze=function(e,n,r){var t=G.get(e);t!=null&&t.timer&&clearTimeout(t.timer);var a=void 0;n>-1&&(a=setTimeout(function(){G.delete(e)},n)),G.set(e,p(p({},r),{timer:a}))},De=function(e){return G.get(e)},K=new Map,_e=function(e){return K.get(e)},xe=function(e,n){K.set(e,n),n.then(function(r){return K.delete(e),r}).catch(function(){K.delete(e)})},j={},Ee=function(e,n){j[e]&&j[e].forEach(function(r){return r(n)})},te=function(e,n){return j[e]||(j[e]=[]),j[e].push(n),function(){var t=j[e].indexOf(n);j[e].splice(t,1)}},$e=function(e,n){var r=n.cacheKey,t=n.cacheTime,a=t===void 0?5*60*1e3:t,o=n.staleTime,u=o===void 0?0:o,c=n.setCache,s=n.getCache,i=v.useRef(),m=v.useRef(),d=function(f,l){c?c(l):ze(f,a,l),Ee(f,l.data)},g=function(f,l){return l===void 0&&(l=[]),s?s(l):De(f)};return fe(function(){if(r){var f=g(r);f&&Object.hasOwnProperty.call(f,"data")&&(e.state.data=f.data,e.state.params=f.params,(u===-1||new Date().getTime()-f.time<=u)&&(e.state.loading=!1)),i.current=te(r,function(l){e.setState({data:l})})}},[]),ie(function(){var f;(f=i.current)===null||f===void 0||f.call(i)}),r?{onBefore:function(f){var l=g(r,f);return!l||!Object.hasOwnProperty.call(l,"data")?{}:u===-1||new Date().getTime()-l.time<=u?{loading:!1,data:l==null?void 0:l.data,error:void 0,returnNow:!0}:{data:l==null?void 0:l.data,error:void 0}},onRequest:function(f,l){var P=_e(r);return P&&P!==m.current?{servicePromise:P}:(P=f.apply(void 0,w([],b(l),!1)),m.current=P,xe(r,P),{servicePromise:P})},onSuccess:function(f,l){var P;r&&((P=i.current)===null||P===void 0||P.call(i),d(r,{data:f,params:l,time:new Date().getTime()}),i.current=te(r,function(F){e.setState({data:F})}))},onMutate:function(f){var l;r&&((l=i.current)===null||l===void 0||l.call(i),d(r,{data:f,params:e.state.params,time:new Date().getTime()}),i.current=te(r,function(P){e.setState({data:P})}))}}:{}};const Oe=$e;var je=function(e,n){var r=n.debounceWait,t=n.debounceLeading,a=n.debounceTrailing,o=n.debounceMaxWait,u=v.useRef(),c=v.useMemo(function(){var s={};return t!==void 0&&(s.leading=t),a!==void 0&&(s.trailing=a),o!==void 0&&(s.maxWait=o),s},[t,a,o]);return v.useEffect(function(){if(r){var s=e.runAsync.bind(e);return u.current=ye(function(i){i()},r,c),e.runAsync=function(){for(var i=[],m=0;m<arguments.length;m++)i[m]=arguments[m];return new Promise(function(d,g){var f;(f=u.current)===null||f===void 0||f.call(u,function(){s.apply(void 0,w([],b(i),!1)).then(d).catch(g)})})},function(){var i;(i=u.current)===null||i===void 0||i.cancel(),e.runAsync=s}}},[r,c]),r?{onCancel:function(){var s;(s=u.current)===null||s===void 0||s.cancel()}}:{}};const Me=je;var Be=function(e,n){var r=n.loadingDelay,t=n.ready,a=v.useRef();if(!r)return{};var o=function(){a.current&&clearTimeout(a.current)};return{onBefore:function(){return o(),t!==!1&&(a.current=setTimeout(function(){e.setState({loading:!0})},r)),{loading:!1}},onFinally:function(){o()},onCancel:function(){o()}}};const Le=Be;var Ve=!!(typeof window<"u"&&window.document&&window.document.createElement);const Y=Ve;function ue(){return Y?document.visibilityState!=="hidden":!0}var H=[];function We(e){return H.push(e),function(){var r=H.indexOf(e);H.splice(r,1)}}if(Y){var He=function(){if(ue())for(var e=0;e<H.length;e++){var n=H[e];n()}};window.addEventListener("visibilitychange",He,!1)}var Ie=function(e,n){var r=n.pollingInterval,t=n.pollingWhenHidden,a=t===void 0?!0:t,o=n.pollingErrorRetryCount,u=o===void 0?-1:o,c=v.useRef(),s=v.useRef(),i=v.useRef(0),m=function(){var d;c.current&&clearTimeout(c.current),(d=s.current)===null||d===void 0||d.call(s)};return L(function(){r||m()},[r]),r?{onBefore:function(){m()},onError:function(){i.current+=1},onSuccess:function(){i.current=0},onFinally:function(){u===-1||u!==-1&&i.current<=u?c.current=setTimeout(function(){!a&&!ue()?s.current=We(function(){e.refresh()}):e.refresh()},r):i.current=0},onCancel:function(){m()}}:{}};const Ne=Ie;function Ue(e,n){var r=!1;return function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];r||(r=!0,e.apply(void 0,w([],b(t),!1)),setTimeout(function(){r=!1},n))}}function qe(){return Y&&typeof navigator.onLine<"u"?navigator.onLine:!0}var I=[];function ke(e){return I.push(e),function(){var r=I.indexOf(e);r>-1&&I.splice(r,1)}}if(Y){var se=function(){if(!(!ue()||!qe()))for(var e=0;e<I.length;e++){var n=I[e];n()}};window.addEventListener("visibilitychange",se,!1),window.addEventListener("focus",se,!1)}var Ge=function(e,n){var r=n.refreshOnWindowFocus,t=n.focusTimespan,a=t===void 0?5e3:t,o=v.useRef(),u=function(){var c;(c=o.current)===null||c===void 0||c.call(o)};return v.useEffect(function(){if(r){var c=Ue(e.refresh.bind(e),a);o.current=ke(function(){c()})}return function(){u()}},[r,a]),ie(function(){u()}),{}};const Ke=Ge;var Je=function(e,n){var r=n.retryInterval,t=n.retryCount,a=v.useRef(),o=v.useRef(0),u=v.useRef(!1);return t?{onBefore:function(){u.current||(o.current=0),u.current=!1,a.current&&clearTimeout(a.current)},onSuccess:function(){o.current=0},onError:function(){if(o.current+=1,t===-1||o.current<=t){var c=r??Math.min(1e3*Math.pow(2,o.current),3e4);a.current=setTimeout(function(){u.current=!0,e.refresh()},c)}else o.current=0},onCancel:function(){o.current=0,a.current&&clearTimeout(a.current)}}:{}};const Qe=Je;var Xe=function(e,n){var r=n.throttleWait,t=n.throttleLeading,a=n.throttleTrailing,o=v.useRef(),u={};return t!==void 0&&(u.leading=t),a!==void 0&&(u.trailing=a),v.useEffect(function(){if(r){var c=e.runAsync.bind(e);return o.current=be(function(s){s()},r,u),e.runAsync=function(){for(var s=[],i=0;i<arguments.length;i++)s[i]=arguments[i];return new Promise(function(m,d){var g;(g=o.current)===null||g===void 0||g.call(o,function(){c.apply(void 0,w([],b(s),!1)).then(m).catch(d)})})},function(){var s;e.runAsync=c,(s=o.current)===null||s===void 0||s.cancel()}}},[r,t,a]),r?{onCancel:function(){var c;(c=o.current)===null||c===void 0||c.cancel()}}:{}};const Ye=Xe;var Ze=function(e){X&&(Q(e)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof e,'".'))),v.useEffect(function(){e==null||e()},[])};const en=Ze;var nn=function(){var e=b(v.useState({}),2),n=e[1];return v.useCallback(function(){return n({})},[])};const rn=nn;var tn=function(){function e(n,r,t,a){a===void 0&&(a={}),this.serviceRef=n,this.options=r,this.subscribe=t,this.initState=a,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=p(p(p({},this.state),{loading:!r.manual}),a)}return e.prototype.setState=function(n){n===void 0&&(n={}),this.state=p(p({},this.state),n),this.subscribe()},e.prototype.runPluginHandler=function(n){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];var a=this.pluginImpls.map(function(o){var u;return(u=o[n])===null||u===void 0?void 0:u.call.apply(u,w([o],b(r),!1))}).filter(Boolean);return Object.assign.apply(Object,w([{}],b(a),!1))},e.prototype.runAsync=function(){for(var n,r,t,a,o,u,c,s,i,m,d=[],g=0;g<arguments.length;g++)d[g]=arguments[g];return Pe(this,void 0,void 0,function(){var f,l,P,F,D,_,C,x,T,R,O;return Re(this,function(z){switch(z.label){case 0:if(this.count+=1,f=this.count,l=this.runPluginHandler("onBefore",d),P=l.stopNow,F=P===void 0?!1:P,D=l.returnNow,_=D===void 0?!1:D,C=J(l,["stopNow","returnNow"]),F)return[2,new Promise(function(){})];if(this.setState(p({loading:!0,params:d},C)),_)return[2,Promise.resolve(C.data)];(r=(n=this.options).onBefore)===null||r===void 0||r.call(n,d),z.label=1;case 1:return z.trys.push([1,3,,4]),x=this.runPluginHandler("onRequest",this.serviceRef.current,d).servicePromise,x||(x=(O=this.serviceRef).current.apply(O,w([],b(d),!1))),[4,x];case 2:return T=z.sent(),f!==this.count?[2,new Promise(function(){})]:(this.setState({data:T,error:void 0,loading:!1}),(a=(t=this.options).onSuccess)===null||a===void 0||a.call(t,T,d),this.runPluginHandler("onSuccess",T,d),(u=(o=this.options).onFinally)===null||u===void 0||u.call(o,d,T,void 0),f===this.count&&this.runPluginHandler("onFinally",d,T,void 0),[2,T]);case 3:if(R=z.sent(),f!==this.count)return[2,new Promise(function(){})];throw this.setState({error:R,loading:!1}),(s=(c=this.options).onError)===null||s===void 0||s.call(c,R,d),this.runPluginHandler("onError",R,d),(m=(i=this.options).onFinally)===null||m===void 0||m.call(i,d,void 0,R),f===this.count&&this.runPluginHandler("onFinally",d,void 0,R),R;case 4:return[2]}})})},e.prototype.run=function(){for(var n=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this.runAsync.apply(this,w([],b(r),!1)).catch(function(a){n.options.onError||console.error(a)})},e.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},e.prototype.refresh=function(){this.run.apply(this,w([],b(this.state.params||[]),!1))},e.prototype.refreshAsync=function(){return this.runAsync.apply(this,w([],b(this.state.params||[]),!1))},e.prototype.mutate=function(n){var r=Q(n)?n(this.state.data):n;this.runPluginHandler("onMutate",r),this.setState({data:r})},e}();const an=tn;function un(e,n,r){n===void 0&&(n={}),r===void 0&&(r=[]);var t=n.manual,a=t===void 0?!1:t,o=J(n,["manual"]);X&&n.defaultParams&&!Array.isArray(n.defaultParams)&&console.warn("expected defaultParams is array, got ".concat(typeof n.defaultParams));var u=p({manual:a},o),c=de(e),s=rn(),i=fe(function(){var m=r.map(function(d){var g;return(g=d==null?void 0:d.onInit)===null||g===void 0?void 0:g.call(d,u)}).filter(Boolean);return new an(c,u,s,Object.assign.apply(Object,w([{}],b(m),!1)))},[]);return i.options=u,i.pluginImpls=r.map(function(m){return m(i,u)}),en(function(){if(!a){var m=i.state.params||n.defaultParams||[];i.run.apply(i,w([],b(m),!1))}}),ie(function(){i.cancel()}),{loading:i.state.loading,data:i.state.data,error:i.state.error,params:i.state.params||[],cancel:A(i.cancel.bind(i)),refresh:A(i.refresh.bind(i)),refreshAsync:A(i.refreshAsync.bind(i)),run:A(i.run.bind(i)),runAsync:A(i.runAsync.bind(i)),mutate:A(i.mutate.bind(i))}}function on(e,n,r){return un(e,n,w(w([],b(r||[]),!1),[Me,Le,Ne,Ke,Ye,Ce,Oe,Qe],!1))}var sn=function(e,n){var r;n===void 0&&(n={});var t=n.defaultPageSize,a=t===void 0?10:t,o=n.defaultCurrent,u=o===void 0?1:o,c=J(n,["defaultPageSize","defaultCurrent"]),s=on(e,p({defaultParams:[{current:u,pageSize:a}],refreshDepsAction:function(){D(1)}},c)),i=s.params[0]||{},m=i.current,d=m===void 0?1:m,g=i.pageSize,f=g===void 0?a:g,l=((r=s.data)===null||r===void 0?void 0:r.total)||0,P=v.useMemo(function(){return Math.ceil(l/f)},[f,l]),F=function(C,x){var T=C<=0?1:C,R=x<=0?1:x,O=Math.ceil(l/R);T>O&&(T=Math.max(1,O));var z=b(s.params||[]),V=z[0],Z=V===void 0?{}:V,M=z.slice(1);s.run.apply(s,w([p(p({},Z),{current:T,pageSize:R})],b(M),!1))},D=function(C){F(C,f)},_=function(C){F(d,C)};return p(p({},s),{pagination:{current:d,pageSize:f,total:l,totalPage:P,onChange:A(F),changeCurrent:A(D),changePageSize:A(_)}})};const ln=sn;var cn=function(e,n){var r;n===void 0&&(n={});var t=n.form,a=n.defaultType,o=a===void 0?"simple":a,u=n.defaultParams,c=n.manual,s=c===void 0?!1:c,i=n.refreshDeps,m=i===void 0?[]:i,d=n.ready,g=d===void 0?!0:d,f=J(n,["form","defaultType","defaultParams","manual","refreshDeps","ready"]),l=ln(e,p({manual:!0},f)),P=l.params,F=P===void 0?[]:P,D=l.run,_=F[2]||{},C=b(v.useState((_==null?void 0:_.type)||o),2),x=C[0],T=C[1],R=v.useRef({}),O=v.useRef([]),z=!!(t!=null&&t.getInternalHooks),V=function(){if(!t)return{};if(z)return t.getFieldsValue(null,function(){return!0});var y=t.getFieldsValue(),h={};return Object.keys(y).forEach(function(E){(!t.getFieldInstance||t.getFieldInstance(E))&&(h[E]=y[E])}),h},Z=function(){if(!t)return Promise.resolve({});var y=V(),h=Object.keys(y);return z?t.validateFields(h):new Promise(function(E,ee){t.validateFields(h,function(W,ne){W?ee(W):E(ne)})})},M=function(){if(t){if(z)return t.setFieldsValue(R.current);var y={};Object.keys(R.current).forEach(function(h){(!t.getFieldInstance||t.getFieldInstance(h))&&(y[h]=R.current[h])}),t.setFieldsValue(y)}},ve=function(){var y=V();R.current=p(p({},R.current),y),T(function(h){return h==="simple"?"advance":"simple"})},N=function(y){g&&setTimeout(function(){Z().then(function(h){h===void 0&&(h={});var E=y||p(p({pageSize:n.defaultPageSize||10},(F==null?void 0:F[0])||{}),{current:1});if(!t){D(E);return}R.current=p(p({},R.current),h),D(E,h,{allFormData:R.current,type:x})}).catch(function(h){return h})})},me=function(){var y,h;t&&t.resetFields(),N(p(p({},(u==null?void 0:u[0])||{}),{pageSize:n.defaultPageSize||((h=(y=n.defaultParams)===null||y===void 0?void 0:y[0])===null||h===void 0?void 0:h.pageSize)||10,current:1}))},he=function(y){var h;(h=y==null?void 0:y.preventDefault)===null||h===void 0||h.call(y),N()},ge=function(y,h,E,ee){var W=b(F||[]),ne=W[0],pe=W.slice(1);D.apply(void 0,w([p(p({},ne),{current:y.current,pageSize:y.pageSize,filters:h,sorter:E,extra:ee})],b(pe),!1))};v.useEffect(function(){if(F.length>0){R.current=(_==null?void 0:_.allFormData)||{},M(),D.apply(void 0,w([],b(F),!1));return}!s&&g&&(R.current=(u==null?void 0:u[1])||{},M(),N(u==null?void 0:u[0]))},[]),L(function(){g&&M()},[x]);var U=v.useRef(!1);return U.current=!1,L(function(){!s&&g&&(U.current=!0,t&&t.resetFields(),R.current=(u==null?void 0:u[1])||{},M(),N(u==null?void 0:u[0]))},[g]),L(function(){U.current||g&&(s||(U.current=!0,l.pagination.changeCurrent(1)))},w([],b(m),!1)),p(p({},l),{tableProps:{dataSource:((r=l.data)===null||r===void 0?void 0:r.list)||O.current,loading:l.loading,onChange:A(ge),pagination:{current:l.pagination.current,pageSize:l.pagination.pageSize,total:l.pagination.total}},search:{submit:A(he),type:x,changeType:A(ve),reset:A(me)}})};const fn=cn,{Option:ae}=le,dn=({current:e,pageSize:n},r)=>{let t=`page=${e}&size=${n}`;return Object.entries(r).forEach(([a,o])=>{o&&(t+=`&${a}=${o}`)}),fetch(`https://randomuser.me/api?results=55&${t}`).then(a=>a.json()).then(a=>({total:a.info.results,list:a.results}))};function gn(){const[e]=$.useForm(),{tableProps:n,search:r}=fn(dn,{defaultPageSize:5,form:e}),{type:t,changeType:a,submit:o,reset:u}=r,c=[{title:"name",dataIndex:["name","last"]},{title:"email",dataIndex:"email"},{title:"phone",dataIndex:"phone"},{title:"gender",dataIndex:"gender"}],s=S("div",{children:B($,{form:e,children:[B(oe,{gutter:24,children:[S(re,{span:8,children:S($.Item,{label:"name",name:"name",children:S(q,{placeholder:"name"})})}),S(re,{span:8,children:S($.Item,{label:"email",name:"email",children:S(q,{placeholder:"email"})})}),S(re,{span:8,children:S($.Item,{label:"phone",name:"phone",children:S(q,{placeholder:"phone"})})})]}),B(oe,{gutter:24,justify:"end",style:{marginBottom:24},children:[S(k,{type:"primary",onClick:o,children:"Search"}),S(k,{onClick:u,style:{marginLeft:16},children:"Reset"}),S(k,{type:"link",onClick:a,children:"Simple Search"})]})]})}),i=S("div",{style:{marginBottom:16},children:B($,{form:e,style:{display:"flex",justifyContent:"flex-end"},children:[S($.Item,{name:"gender",initialValue:"male",children:B(le,{style:{width:120,marginRight:16},onChange:o,children:[S(ae,{value:"",children:"all"}),S(ae,{value:"male",children:"male"}),S(ae,{value:"female",children:"female"})]})}),S($.Item,{name:"name",children:S(q.Search,{placeholder:"enter name",style:{width:240},onSearch:o})}),S(k,{type:"link",onClick:a,children:"Advanced Search"})]})});return B("div",{children:[t==="simple"?i:s,S(Se,{columns:c,rowKey:"email",...n})]})}export{gn as default};
