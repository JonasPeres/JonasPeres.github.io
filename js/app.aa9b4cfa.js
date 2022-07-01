(()=>{"use strict";var e={2812:(e,t,r)=>{r(5363),r(71);var n=r(8880),o=r(9592),a=r(3673);function i(e,t,r,n,o,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l=(0,a.aZ)({name:"App"});var s=r(4260);const d=(0,s.Z)(l,[["render",i]]),c=d;var u=r(556),p=r(3340),h=r(9582),f=r(589);const m=[{path:"/",component:()=>Promise.all([r.e(736),r.e(695)]).then(r.bind(r,4695)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(11)]).then(r.bind(r,7011))}]},{path:"/login",name:"login",component:()=>Promise.all([r.e(736),r.e(695)]).then(r.bind(r,4695)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(11)]).then(r.bind(r,7011))}]},{path:"/register",name:"register",meta:{name:"Cadastro"},component:()=>Promise.all([r.e(736),r.e(948)]).then(r.bind(r,7948))},{path:"/my-data",name:"my-data",meta:{name:"Meus Dados"},component:()=>Promise.all([r.e(736),r.e(880)]).then(r.bind(r,9880)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(825)]).then(r.bind(r,8825))}],beforeEnter:(e,t,r)=>{const n=f.Z.getItem("login");n?r():r({path:"/login"})}},{path:"/dashboard",name:"dashboard",meta:{name:"Dashboard"},component:()=>Promise.all([r.e(736),r.e(880)]).then(r.bind(r,9880)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(173)]).then(r.bind(r,8173))}],beforeEnter:(e,t,r)=>{const n=f.Z.getItem("login");n?r():r({path:"/login"})}},{path:"/schedule",name:"schedule",meta:{name:"Agenda"},component:()=>Promise.all([r.e(736),r.e(880)]).then(r.bind(r,9880)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(764)]).then(r.bind(r,9388))}],beforeEnter:(e,t,r)=>{const n=f.Z.getItem("login");n?r():r({path:"/login"})}},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(653)]).then(r.bind(r,3653))}],g=m;var b=r(7153);const v=(0,p.BC)((function(){const e=h.r5,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,history:e("")});return t.beforeEach(((e,t,r)=>{const n=f.Z.getItem("login");let o=!1;if(n&&""!==n&&(o=!0),"login"!==e.name||!n)return o&&!n&&"login"!==e.name?(f.Z.clear(),b.Z.clear(),void r({name:"login",path:"/login"})):void r();r({name:"dashboard",path:"/dashboard"})})),t}));async function y(e,t){const n="function"===typeof u["default"]?await(0,u["default"])({}):u["default"],{storeKey:a}=await Promise.resolve().then(r.bind(r,556)),i="function"===typeof v?await v({store:n}):v;n.$router=i;const l=e(c);return l.use(o.Z,t),{app:l,store:n,storeKey:a,router:i}}var w=r(9719),P=r(49),k=r(6249),C=r(4434);const O={config:{},lang:w.Z,plugins:{Dialog:P.Z,Loading:k.Z,Notify:C.Z,LocalStorage:f.Z,SessionStorage:b.Z}},E="";async function Z({app:e,router:t,store:r,storeKey:n},o){let a=!1;const i=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},l=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<o.length;c++)try{await o[c]({app:e,router:t,store:r,ssrContext:null,redirect:l,urlPath:s,publicPath:E})}catch(d){return d&&d.url?void l(d.url):void console.error("[Quasar] boot error:",d)}!0!==a&&(e.use(t),e.use(r,n),e.mount("#q-app"))}y(n.ri,O).then((e=>Promise.all([Promise.resolve().then(r.bind(r,1768))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));Z(e,r)}))))},1768:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>l});var n=r(3340),o=r(52),a=r.n(o);const i=a().create({baseURL:"https://api.example.com"}),l=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},556:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i,storeKey:()=>a,useStore:()=>l});var n=r(3340),o=r(741);const a=Symbol("vuex-key"),i=(0,n.h)((function(){const e=(0,o.MT)({modules:{},strict:!1});return e}));function l(){return(0,o.oR)(a)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,o,a]=e[c],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{11:"3d9ac898",173:"57be22a0",653:"9807fbf9",695:"64cd3144",764:"54d22fe6",825:"352f5312",880:"e6efb51d",948:"690472bc"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{11:"3208a3e5",143:"31d6cfe0",173:"b385df9e",695:"f29877c3",736:"6b76b2c8",880:"486fcc77"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="alert:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==a)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),n(s)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return o();e(n,l,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={11:1,173:1,695:1,880:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error,s=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,s]=n,d=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var c=s(r)}for(t&&t(n);d<i.length;d++)a=i[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},n=self["webpackChunkalert"]=self["webpackChunkalert"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(2812)));n=r.O(n)})();