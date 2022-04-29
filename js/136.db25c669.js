"use strict";(self["webpackChunkalert"]=self["webpackChunkalert"]||[]).push([[136],{3735:(e,t,s)=>{s.d(t,{Z:()=>r});var o=s(5777);class r extends o.w3{showNotifyError(e){this.$q.notify({progress:!0,message:e,type:"negative",group:!1,timeout:e&&e.length>50?1e4:7e3})}showNotifySuccess(e){this.$q.notify({progress:!0,message:e,type:"info",color:"green",timeout:e&&e.length>50?1e4:7e3,icon:"check"})}showNotifyErrorCustom(e){this.$q.notify({progress:!0,message:e||"Ocorreu um erro inesperado.. por favor, tente novamente.",type:"info",color:"negative",timeout:e&&e.length>50?1e4:7e3,icon:"warning"})}showLoading(){this.$q.loading.show({spinnerColor:"secondary"})}hideLoading(){this.$q.loading.hide()}}},4136:(e,t,s)=>{s.r(t),s.d(t,{default:()=>B});var o=s(3673),r=s(2323);const l={key:0,class:"col-12 row justify-between items-center q-px-sm"},n={class:"col-auto row justify-end"},a=(0,o.Uk)("Meus dados"),c=(0,o.Uk)("Sair");function i(e,t,s,i,u,m){const p=(0,o.up)("q-img"),d=(0,o.up)("q-btn"),w=(0,o.up)("q-separator"),g=(0,o.up)("q-item-label"),h=(0,o.up)("q-icon"),f=(0,o.up)("q-item-section"),q=(0,o.up)("q-item"),x=(0,o.up)("q-list"),y=(0,o.up)("q-menu"),v=(0,o.up)("q-avatar"),$=(0,o.up)("q-header"),_=(0,o.up)("menu-item-page"),b=(0,o.up)("q-scroll-area"),k=(0,o.up)("q-drawer"),W=(0,o.up)("router-view"),Z=(0,o.up)("q-page-container"),C=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(C,{view:"Lhr LpR LFf",class:"bg-white"},{default:(0,o.w5)((()=>[(0,o.Wm)($,{class:(0,r.C_)(["text-black",e.$q.screen.sm||e.$q.screen.xs?"bg-white":"bg-white q-ma-md q-px-md"])},{default:(0,o.w5)((()=>[e.$q.screen.sm||e.$q.screen.xs?((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",{class:(0,r.C_)((e.$q.platform.is.desktop,"col-auto row items-center")),style:{height:"1px",position:"relative",top:"-74px"}},[(0,o.Wm)(p,{src:"LogoAlertFull.png",style:{cursor:"pointer"},onClick:t[0]||(t[0]=t=>e.redirectRoute("/dashboard")),width:e.$q.screen.xl||e.$q.screen.lt.lg?"150px":e.$q.screen.lt.md?"125px":e.$q.screen.sm?"100px":"90px"},null,8,["width"])],2),(0,o.Wm)(d,{icon:"menu",flat:"",size:"28px",color:"secondary",onClick:t[1]||(t[1]=t=>e.closeMenu()),class:(0,r.C_)(e.$q.screen.sm||e.$q.screen.xs?"q-pa-sm":"")},null,8,["class"])])):(0,o.kq)("",!0),e.$q.screen.sm||e.$q.screen.xs?((0,o.wg)(),(0,o.j4)(w,{key:1,size:"2px"})):(0,o.kq)("",!0),(0,o._)("div",{class:(0,r.C_)(["col-12 row items-center",e.$q.screen.sm?"q-pt-md justify-between":e.$q.screen.sm||e.$q.screen.xs||e.$q.screen.xs?"bg-white q-pt-md justify-between":"justify-between"])},[(0,o.Wm)(g,{class:(0,r.C_)(["text-h4 text-secondary",e.$q.screen.sm||e.$q.screen.xs?"q-pl-sm text-h5":""])},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.namePage),1)])),_:1},8,["class"]),(0,o._)("div",n,[(0,o.Wm)(d,{flat:"","no-caps":""},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{anchor:"bottom start","transition-show":"flip-right","transition-hide":"flip-left",style:{overflow:"hidden"}},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{class:"bg-white",style:{width:"280px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{to:"/my-data",clickable:"",class:"col-grow row text-weight-medium"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"col-2"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{name:"person",size:"30px",color:"black"})])),_:1}),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"text-h6 text-black"},{default:(0,o.w5)((()=>[a])),_:1})])),_:1})])),_:1}),(0,o.Wm)(q,{clickable:"",class:"col-grow row text-weight-medium",onClick:e.logout},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"col-2"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{name:"r_logout",size:"30px",color:"black"})])),_:1}),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"text-h6 text-black"},{default:(0,o.w5)((()=>[c])),_:1})])),_:1})])),_:1},8,["onClick"]),(0,o.Wm)(w,{class:"col-12",size:"2px"}),(0,o.Wm)(q,{class:"col-grow row text-weight-medium"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Versão: "+(0,r.zw)(e.versionApp),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(g,{class:(0,r.C_)(["q-pr-xs",e.$q.screen.sm||e.$q.screen.xs?"text-h6":"text-h5"])},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)("e01437"===e.usuario||"E01437"===e.usuario?"Jonas":"e01384"===e.usuario||"E01384"===e.usuario?"Juliana":""),1)])),_:1},8,["class"]),(0,o.Wm)(h,{name:"keyboard_arrow_down"}),(0,o.Wm)(v,{color:"grey","text-color":"grey-2",class:"q-ml-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{name:"person"})])),_:1})])),_:1})])],2)])),_:1},8,["class"]),(0,o.Wm)(k,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[5]||(t[5]=t=>e.leftDrawerOpen=t),"show-if-above":"",side:"left",elevated:"",onClick:t[6]||(t[6]=t=>e.$q.screen.sm||e.$q.screen.xs?e.closeMenu():""),class:"bg-white",width:(e.$q.screen.sm||e.$q.screen.xs,280)},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{class:"full-height",visible:""},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{onClick:t[4]||(t[4]=t=>e.$q.screen.sm||e.$q.screen.xs?e.closeMenu():""),style:{"max-height":"100%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{class:"col-12 row no-wrap",style:{width:"100%",height:"90px"}},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"col-12 row justify-center",style:(0,r.j5)(e.$q.screen.xl||e.$q.screen.lg||e.$q.screen.md?"position: relative; top: -40px":"position: relative; top: -32px")},[(0,o.Wm)(p,{src:"LogoAlertFull.png",width:e.$q.screen.xl||e.$q.screen.lg||e.$q.screen.md||e.$q.screen.sm?"190px":"150px",style:{cursor:"pointer"},onClick:t[2]||(t[2]=t=>e.redirectRoute("/dashboard"))},null,8,["width"])],4)])),_:1}),(0,o._)("div",{class:(0,r.C_)(e.$q.screen.xl||e.$q.screen.lg||e.$q.screen.md||e.$q.screen.sm?"q-pt-xl":"q-pt-lg")},[(0,o.Wm)(_,{onClick:t[3]||(t[3]=t=>e.closeMenu())})],2)])),_:1})])),_:1})])),_:1},8,["modelValue","width"]),(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W)])),_:1})])),_:1})}var u=s(3735),m=s(5777);function p(e,t,s,l,n,a){const c=(0,o.up)("q-icon"),i=(0,o.up)("q-item-section"),u=(0,o.up)("q-item-label"),m=(0,o.up)("q-item"),p=(0,o.Q2)("ripple");return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.listMenuItems,((t,s)=>((0,o.wg)(),(0,o.iD)("div",{key:s,class:"col-12 row"},[(0,o.wy)(((0,o.wg)(),(0,o.j4)(m,{class:"text-h6 text-weight-medium",style:{width:"100%",height:"64px"},clickable:"",active:"","active-class":"text-black active-item","exact-active-class":"background-color: white",to:t.to,onClick:t=>s===e.listMenuItems.length-1?e.logout():""},{default:(0,o.w5)((()=>[t.icon?((0,o.wg)(),(0,o.j4)(i,{key:0,avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{name:t.icon,color:"black",size:"35px"},null,8,["name"])])),_:2},1024)):(0,o.kq)("",!0),(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(t.title),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to","onClick"])),[[p]])])))),128)}var d=function(e,t,s,o){var r,l=arguments.length,n=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(l<3?r(n):l>3?r(t,s,n):r(t,s))||n);return l>3&&n&&Object.defineProperty(t,s,n),n};let w=class extends u.Z{getMenuItensLoggedUser(){return[{title:"Dashboard",icon:"r_grid_view",to:"/dashboard",ativo:!0},{title:"Agenda",icon:"s_calendar_month",to:"/schedule",ativo:!1},{title:"Sair",icon:"r_logout",to:"/login",ativo:!1}]}};w=d([(0,m.Ei)({name:"menu-items-service"})],w);const g=w;var h=s(589),f=s(7153),q=function(e,t,s,o){var r,l=arguments.length,n=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(l<3?r(n):l>3?r(t,s,n):r(t,s))||n);return l>3&&n&&Object.defineProperty(t,s,n),n};let x=class extends u.Z{constructor(){super(...arguments),this.listMenuItems=[]}created(){this.listMenuItems=g.prototype.getMenuItensLoggedUser()}logout(){super.showLoading();try{h.Z.clear(),f.Z.clear(),this.$router.push("/login")}catch(e){super.showNotifyErrorCustom("Ocorreu um erro inesperado...")}finally{super.hideLoading()}}};x=q([(0,m.Ei)({name:"menu-item-page"})],x);const y=x;var v=s(4260),$=s(3414),_=s(2035),b=s(4554),k=s(2350),W=s(6489),Z=s(7518),C=s.n(Z);const j=(0,v.Z)(y,[["render",p]]),Q=j;C()(y,"components",{QItem:$.Z,QItemSection:_.Z,QIcon:b.Z,QItemLabel:k.Z}),C()(y,"directives",{Ripple:W.Z});var O=s(7691);const I={i8:"0.0.1"};var L=function(e,t,s,o){var r,l=arguments.length,n=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(l<3?r(n):l>3?r(t,s,n):r(t,s))||n);return l>3&&n&&Object.defineProperty(t,s,n),n};let D=class extends u.Z{constructor(){super(...arguments),this.usuario="",this.namePage="",this.leftDrawerOpen=!1,this.versionApp=I.i8}updateName(){this.namePage=this.$route.meta.name}created(){const e=localStorage.getItem("usuario");e&&(this.usuario=e),this.namePage=this.$route.meta.name}closeMenu(){this.leftDrawerOpen=!this.leftDrawerOpen}toggleLeftDrawer(){this.leftDrawerOpen=!this.leftDrawerOpen}logout(){this.$router.push("/login"),h.Z.clear(),f.Z.clear()}};L([(0,O.RL)("$route",{deep:!0})],D.prototype,"updateName",null),D=L([(0,m.Ei)({components:{MenuItemPage:Q}})],D);const M=D;var R=s(9214),P=s(3812),z=s(4027),U=s(8240),E=s(5869),S=s(811),A=s(7011),N=s(5096),V=s(2901),F=s(7704),H=s(2652);const J=(0,v.Z)(M,[["render",i]]),B=J;C()(M,"components",{QLayout:R.Z,QHeader:P.Z,QImg:z.Z,QBtn:U.Z,QSeparator:E.Z,QItemLabel:k.Z,QMenu:S.Z,QList:A.Z,QItem:$.Z,QItemSection:_.Z,QIcon:b.Z,QAvatar:N.Z,QDrawer:V.Z,QScrollArea:F.Z,QPageContainer:H.Z})}}]);