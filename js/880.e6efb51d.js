"use strict";(self["webpackChunkalert"]=self["webpackChunkalert"]||[]).push([[880],{2052:(e,t,s)=>{s.d(t,{Z:()=>l});var r=s(5777);function o(e,t){if("text"==t){if(/^[a-zA-Z-À-ú ]+$/.test(e.key))return!0;e.preventDefault()}else if("numeric"==t){if(/^[0-9]+$/.test(e.key))return!0;e.preventDefault()}else if("alphanumeric"==t){if(/^[a-zA-Z0-9À-ú ]+$/.test(e.key))return!0;e.preventDefault()}}class l extends r.w3{showNotifyError(e){this.$q.notify({progress:!0,message:e,type:"negative",group:!1,timeout:e&&e.length>50?1e4:7e3})}showNotifySuccess(e){this.$q.notify({progress:!0,message:e,type:"info",color:"green",timeout:e&&e.length>50?1e4:7e3,icon:"check"})}showNotifyErrorCustom(e){this.$q.notify({progress:!0,message:e||"Ocorreu um erro inesperado.. por favor, tente novamente.",type:"info",color:"negative",timeout:e&&e.length>50?1e4:7e3,icon:"warning"})}showLoading(){this.$q.loading.show({spinnerColor:"secondary"})}hideLoading(){this.$q.loading.hide()}pattern(e,t){return o(e,t)}}},9880:(e,t,s)=>{s.r(t),s.d(t,{default:()=>T});var r=s(3673),o=s(2323);const l={key:0,class:"col-12 row justify-between items-center q-px-sm"},n={class:"col-auto row justify-end"},a=(0,r.Uk)("Meus dados"),i=(0,r.Uk)("Sair"),c={key:0,src:"jonas.jpeg"},u={key:1,src:"juliana.jpeg"};function m(e,t,s,m,p,d){const w=(0,r.up)("q-img"),f=(0,r.up)("q-btn"),g=(0,r.up)("q-separator"),h=(0,r.up)("q-item-label"),q=(0,r.up)("q-icon"),x=(0,r.up)("q-item-section"),y=(0,r.up)("q-item"),v=(0,r.up)("q-list"),$=(0,r.up)("q-menu"),_=(0,r.up)("q-avatar"),b=(0,r.up)("q-header"),k=(0,r.up)("menu-item-page"),W=(0,r.up)("q-scroll-area"),Z=(0,r.up)("q-drawer"),j=(0,r.up)("router-view"),C=(0,r.up)("q-page-container"),D=(0,r.up)("q-layout");return(0,r.wg)(),(0,r.j4)(D,{view:"Lhr LpR LFf",class:"bg-white"},{default:(0,r.w5)((()=>[(0,r.Wm)(b,{class:(0,o.C_)(["text-black",e.$q.screen.sm||e.$q.screen.xs?"bg-white":"bg-white q-ma-md q-px-md"])},{default:(0,r.w5)((()=>[e.$q.screen.sm||e.$q.screen.xs?((0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("div",{class:(0,o.C_)((e.$q.platform.is.desktop,"col-auto row items-center")),style:{height:"1px",position:"relative",top:"-74px"}},[(0,r.Wm)(w,{src:"LogoAlertFull.png",style:{cursor:"pointer"},onClick:t[0]||(t[0]=t=>e.redirectRoute("/dashboard")),width:e.$q.screen.xl||e.$q.screen.lt.lg?"150px":e.$q.screen.lt.md?"125px":e.$q.screen.sm?"100px":"90px"},null,8,["width"])],2),(0,r.Wm)(f,{icon:"menu",flat:"",size:"28px",color:"secondary",onClick:t[1]||(t[1]=t=>e.closeMenu()),class:(0,o.C_)(e.$q.screen.sm||e.$q.screen.xs?"q-pa-sm":"")},null,8,["class"])])):(0,r.kq)("",!0),e.$q.screen.sm||e.$q.screen.xs?((0,r.wg)(),(0,r.j4)(g,{key:1,size:"2px"})):(0,r.kq)("",!0),(0,r._)("div",{class:(0,o.C_)(["col-12 row items-center",e.$q.screen.sm?"q-pt-md justify-between":e.$q.screen.sm||e.$q.screen.xs||e.$q.screen.xs?"bg-white q-pt-md justify-between":"justify-between"])},[(0,r.Wm)(h,{class:(0,o.C_)(["text-h4 text-secondary",e.$q.screen.sm||e.$q.screen.xs?"q-pl-sm text-h5":""])},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(e.namePage),1)])),_:1},8,["class"]),(0,r._)("div",n,[(0,r.Wm)(f,{flat:"","no-caps":""},{default:(0,r.w5)((()=>[(0,r.Wm)($,{anchor:"bottom start","transition-show":"flip-right","transition-hide":"flip-left",style:{overflow:"hidden"}},{default:(0,r.w5)((()=>[(0,r.Wm)(v,{class:"bg-white",style:{width:"280px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{to:"/my-data",clickable:"",class:"col-grow row text-weight-medium"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{class:"col-2"},{default:(0,r.w5)((()=>[(0,r.Wm)(q,{name:"person",size:"30px",color:"black"})])),_:1}),(0,r.Wm)(x,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,{class:"text-h6 text-black"},{default:(0,r.w5)((()=>[a])),_:1})])),_:1})])),_:1}),(0,r.Wm)(y,{clickable:"",class:"col-grow row text-weight-medium",onClick:e.logout},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{class:"col-2"},{default:(0,r.w5)((()=>[(0,r.Wm)(q,{name:"r_logout",size:"30px",color:"black"})])),_:1}),(0,r.Wm)(x,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,{class:"text-h6 text-black"},{default:(0,r.w5)((()=>[i])),_:1})])),_:1})])),_:1},8,["onClick"]),(0,r.Wm)(g,{class:"col-12",size:"2px"}),(0,r.Wm)(y,{class:"col-grow row text-weight-medium"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Versão: "+(0,o.zw)(e.versionApp),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)(h,{class:(0,o.C_)(["q-pr-xs",e.$q.screen.sm||e.$q.screen.xs?"text-h6":"text-h5"])},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)("e01437"===e.usuario||"E01437"===e.usuario?"Jonas":"e01384"===e.usuario||"E01384"===e.usuario?"Juliana":e.usuario),1)])),_:1},8,["class"]),(0,r.Wm)(q,{name:"keyboard_arrow_down"}),(0,r.Wm)(_,{color:"grey","text-color":"grey-2",class:"q-ml-md"},{default:(0,r.w5)((()=>["e01437"===e.usuario||"E01437"===e.usuario?((0,r.wg)(),(0,r.iD)("img",c)):"e01384"===e.usuario||"E01384"===e.usuario?((0,r.wg)(),(0,r.iD)("img",u)):((0,r.wg)(),(0,r.j4)(q,{key:2,name:"person"}))])),_:1})])),_:1})])],2)])),_:1},8,["class"]),(0,r.Wm)(Z,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[5]||(t[5]=t=>e.leftDrawerOpen=t),"show-if-above":"",side:"left",elevated:"",onClick:t[6]||(t[6]=t=>e.$q.screen.sm||e.$q.screen.xs?e.closeMenu():""),class:"bg-white",width:(e.$q.screen.sm||e.$q.screen.xs,280)},{default:(0,r.w5)((()=>[(0,r.Wm)(W,{class:"full-height",visible:""},{default:(0,r.w5)((()=>[(0,r.Wm)(v,{onClick:t[4]||(t[4]=t=>e.$q.screen.sm||e.$q.screen.xs?e.closeMenu():""),style:{"max-height":"100%"}},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{class:"col-12 row no-wrap",style:{width:"100%",height:"90px"}},{default:(0,r.w5)((()=>[(0,r._)("div",{class:"col-12 row justify-center",style:(0,o.j5)(e.$q.screen.xl||e.$q.screen.lg||e.$q.screen.md?"position: relative; top: -40px":"position: relative; top: -32px")},[(0,r.Wm)(w,{src:"LogoAlertFull.png",width:e.$q.screen.xl||e.$q.screen.lg||e.$q.screen.md||e.$q.screen.sm?"190px":"150px",style:{cursor:"pointer"},onClick:t[2]||(t[2]=t=>e.redirectRoute("/dashboard"))},null,8,["width"])],4)])),_:1}),(0,r._)("div",{class:(0,o.C_)(e.$q.screen.xl||e.$q.screen.lg||e.$q.screen.md||e.$q.screen.sm?"q-pt-xl":"q-pt-lg")},[(0,r.Wm)(k,{onClick:t[3]||(t[3]=t=>e.closeMenu())})],2)])),_:1})])),_:1})])),_:1},8,["modelValue","width"]),(0,r.Wm)(C,null,{default:(0,r.w5)((()=>[(0,r.Wm)(j)])),_:1})])),_:1})}var p=s(2052),d=s(5777);const w={class:"col-12 row justify-center absolute-bottom q-pb-md"},f=(0,r.Uk)(" Desenvolvido por Jonas Peres ");function g(e,t,s,l,n,a){const i=(0,r.up)("q-icon"),c=(0,r.up)("q-item-section"),u=(0,r.up)("q-item-label"),m=(0,r.up)("q-item"),p=(0,r.Q2)("ripple");return(0,r.wg)(),(0,r.iD)(r.HY,null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.listMenuItems,((t,s)=>((0,r.wg)(),(0,r.iD)("div",{key:s,class:"col-12 row"},[(0,r.wy)(((0,r.wg)(),(0,r.j4)(m,{class:"text-h6 text-weight-medium",style:{width:"100%",height:"64px"},clickable:"",active:"","active-class":"text-black active-item","exact-active-class":"background-color: white",to:t.to,onClick:t=>s===e.listMenuItems.length-1?e.logout():""},{default:(0,r.w5)((()=>[t.icon?((0,r.wg)(),(0,r.j4)(c,{key:0,avatar:""},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{name:t.icon,color:"black",size:"35px"},null,8,["name"])])),_:2},1024)):(0,r.kq)("",!0),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(t.title),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to","onClick"])),[[p]])])))),128)),(0,r._)("div",w,[(0,r.Wm)(u,{class:"text-bold",style:{"font-size":"10px"}},{default:(0,r.w5)((()=>[f])),_:1})])],64)}var h=function(e,t,s,r){var o,l=arguments.length,n=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(l<3?o(n):l>3?o(t,s,n):o(t,s))||n);return l>3&&n&&Object.defineProperty(t,s,n),n};let q=class extends p.Z{getMenuItensLoggedUser(){return[{title:"Dashboard",icon:"r_grid_view",to:"/dashboard",ativo:!0},{title:"Agenda",icon:"s_calendar_month",to:"/schedule",ativo:!1},{title:"Sair",icon:"r_logout",to:"/login",ativo:!1}]}};q=h([(0,d.Ei)({name:"menu-items-service"})],q);const x=q;var y=s(589),v=s(7153),$=function(e,t,s,r){var o,l=arguments.length,n=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(l<3?o(n):l>3?o(t,s,n):o(t,s))||n);return l>3&&n&&Object.defineProperty(t,s,n),n};let _=class extends p.Z{constructor(){super(...arguments),this.listMenuItems=[]}created(){this.listMenuItems=x.prototype.getMenuItensLoggedUser()}logout(){super.showLoading();try{y.Z.clear(),v.Z.clear(),this.$router.push("/login")}catch(e){super.showNotifyErrorCustom("Ocorreu um erro inesperado...")}finally{super.hideLoading()}}};_=$([(0,d.Ei)({name:"menu-item-page"})],_);const b=_;var k=s(4260),W=s(3414),Z=s(2035),j=s(4554),C=s(2350),D=s(6489),Q=s(7518),O=s.n(Q);const I=(0,k.Z)(b,[["render",g]]),L=I;O()(b,"components",{QItem:W.Z,QItemSection:Z.Z,QIcon:j.Z,QItemLabel:C.Z}),O()(b,"directives",{Ripple:D.Z});var M=s(7691);const R={i8:"0.0.1"};var z=function(e,t,s,r){var o,l=arguments.length,n=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(l<3?o(n):l>3?o(t,s,n):o(t,s))||n);return l>3&&n&&Object.defineProperty(t,s,n),n};let P=class extends p.Z{constructor(){super(...arguments),this.usuario="",this.namePage="",this.leftDrawerOpen=!1,this.versionApp=R.i8}updateName(){this.namePage=this.$route.meta.name}created(){const e=localStorage.getItem("usuario");e&&(this.usuario=e),this.namePage=this.$route.meta.name}closeMenu(){this.leftDrawerOpen=!this.leftDrawerOpen}toggleLeftDrawer(){this.leftDrawerOpen=!this.leftDrawerOpen}logout(){this.$router.push("/login"),y.Z.clear(),v.Z.clear()}};z([(0,M.RL)("$route",{deep:!0})],P.prototype,"updateName",null),P=z([(0,d.Ei)({components:{MenuItemPage:L}})],P);const E=P;var U=s(9214),A=s(3812),S=s(4027),N=s(8240),V=s(5869),F=s(811),H=s(1046),J=s(5096),Y=s(2901),B=s(7704),K=s(2652);const G=(0,k.Z)(E,[["render",m]]),T=G;O()(E,"components",{QLayout:U.Z,QHeader:A.Z,QImg:S.Z,QBtn:N.Z,QSeparator:V.Z,QItemLabel:C.Z,QMenu:F.Z,QList:H.Z,QItem:W.Z,QItemSection:Z.Z,QIcon:j.Z,QAvatar:J.Z,QDrawer:Y.Z,QScrollArea:B.Z,QPageContainer:K.Z})}}]);