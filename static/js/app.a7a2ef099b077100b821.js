webpackJsonp([1],{"7Otq":function(t,e,o){t.exports=o.p+"static/img/logo.83f5672.png"},"9M+g":function(t,e){},GP5l:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{attrs:{id:"footer",height:"auto",color:"primary lighten-1"}},[o("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[t._l(t.links,function(e){return o("v-btn",{key:e,attrs:{color:"white",flat:"",round:""}},[t._v(t._s(e))])}),t._v(" "),o("v-flex",{attrs:{primary:"","lighten-2":"","py-3":"","text-xs-center":"","white--text":"",xs12:""}},[t._v("©2019 —\n      "),o("strong",[t._v("Short IT")])])],2)],1)},staticRenderFns:[]};var a=o("VU/8")({name:"Footer",data:function(){return{links:["Created by GH"]}}},r,!1,function(t){o("iotF")},null,null).exports,i=o("/ocq"),l=o("kxiW"),s=Object(l.initializeApp)({apiKey:"AIzaSyBLBAXTTkYsV6cimw8bCbfG3s4ZxV-KCZs",authDomain:"node-ea286.firebaseapp.com",databaseURL:"https://node-ea286.firebaseio.com",projectId:"node-ea286",storageBucket:"node-ea286.firebaseio.com",messagingSenderId:"63912031259"}).database().ref("short");var c={data:function(){return{oldUrl:"",code:"xxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}),newUrl:"",linkShow:!1,erro:!1,short:{}}},methods:{addUrl:function(){var t,e=this;try{t=this.oldUrl,new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)?s.push({short:{oldUrl:this.oldUrl,newUrl:this.code}}).then(function(t){e.linkShow=!0,e.erro=!1,e.oldUrl="",window.location.hostname.indexOf("github")>-1?e.newUrl=window.location.hostname+"/u/#/"+e.code:e.newUrl=window.location.hostname+"/#/"+e.code}):(this.erro=!0,this.oldUrl="")}catch(t){alert(t)}},copyUrl:function(){var t=document.querySelector("#copyUrlInput");t.setAttribute("type","text"),t.select();try{document.execCommand("copy")}catch(t){console.log("Oops, unable to copy")}t.setAttribute("type","hidden"),window.getSelection().removeAllRanges()}},components:{Footer:a}};var d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"formUrl"}},[o("b-form",[o("label",{staticClass:"sr-only",attrs:{for:"inlineFormInputUrl"}},[t._v("Url")]),t._v(" "),o("b-input",{directives:[{name:"show",rawName:"v-show",value:!t.linkShow,expression:"!linkShow"}],staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"inlineFormInputUrl",placeholder:"https://nshrt.github.io/short/"},model:{value:t.oldUrl,callback:function(e){t.oldUrl=e},expression:"oldUrl"}}),t._v(" "),o("b-alert",{staticStyle:{margin:"3px",padding:"6px"},attrs:{show:t.erro,variant:"danger"},on:{"dismiss-count-down":function(t){}}},[o("strong",[t._v("Invalid URL.")])]),t._v(" "),o("b-input",{attrs:{hidden:"true"}}),t._v(" "),o("br"),t._v(" "),o("b-button",{directives:[{name:"show",rawName:"v-show",value:!t.linkShow,expression:"!linkShow"}],attrs:{size:"lg",variant:"primary"},on:{click:t.addUrl}},[t._v("Short It !")]),t._v(" "),o("br"),t._v(" "),o("b-alert",{attrs:{dismissible:"",variant:"success"},on:{"dismiss-count-down":function(t){}}},[o("strong",[t._v("Sucess !")]),t._v(" Click on link to copy..\n    ")]),t._v(" "),o("b-alert",{directives:[{name:"show",rawName:"v-show",value:t.linkShow,expression:"linkShow"}],staticStyle:{margin:"15px"},attrs:{variant:"primary",show:""}},[o("a",{staticClass:"alert-link",attrs:{id:"urlText",href:"newUrl"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copyUrl(e)}}},[t._v(t._s(t.newUrl))])]),t._v(" "),o("b-tooltip",{attrs:{show:"",target:"urlText",placement:"top"}},[o("strong",[t._v("Click to copy")])]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newUrl,expression:"newUrl"}],attrs:{type:"hidden",id:"copyUrlInput"},domProps:{value:t.newUrl},on:{input:function(e){e.target.composing||(t.newUrl=e.target.value)}}})],1)],1)},staticRenderFns:[]};var u=o("VU/8")(c,d,!1,function(t){o("GP5l")},null,null).exports;n.default.use(i.a);var h=new i.a({routes:[{path:"*",name:"ShortUrl",component:u}]}),p=o("ZZvs"),v=o.n(p),f=(o("SYh3"),{name:"App",data:function(){return{isLoading:!1,fullPage:!1,loader:"bars",color:"#007bff",bgColor:"#ffffff",height:38,width:38}},components:{Footer:a,Loading:v.a},methods:{},mounted:function(){!function(t,e){var o=new String(e).split("/")[new String(e).split("/").length-1];try{5==new String(o).length?(t.isLoading=!0,function(t){console.log("Search Code: "+t);s.orderByChild("short").on("value",function(e){e.forEach(function(e){e.forEach(function(e){e.val().newUrl==t&&(console.log("FIND! "+e.val().newUrl),console.log("Old >"+e.val().oldUrl),window.location.href=e.val().oldUrl)})})});h.push("/"),console.log("Url not found !")}(o)):0!=new String(o).length&&(console.log("Redirect to index..."),h.push("/"))}catch(t){console.log(t)}}(this,window.location.hash)}});var g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("loading",{attrs:{active:t.isLoading,"is-full-page":t.fullPage,height:t.height,width:t.width,color:t.color,loader:t.loader,"background-color":t.bgColor},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),n("b-navbar",{attrs:{id:"navbar",toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[t._v("Short your url")])],1)],1),t._v(" "),n("img",{attrs:{id:"logo",src:o("7Otq")}}),t._v(" "),n("br"),t._v(" "),n("h4",[n("b-badge",{staticStyle:{margin:"12px"},attrs:{id:"badge-secondary"}},[t._v("Short your URLS for free!")])],1),t._v(" "),n("router-view",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}]}),t._v(" "),n("br"),t._v(" "),n("Footer")],1)},staticRenderFns:[]};var m=o("VU/8")(f,g,!1,function(t){o("Yqfq")},null,null).exports,w=o("e6fC"),b=o.n(w),_=(o("Jmt5"),o("9M+g"),o("3EgV")),U=o.n(_),y=o("1mcD"),x=o.n(y),S=o("C/JF"),k=o("fhbW"),C=o("1e6/");S.c.add(k.a),n.default.component("font-awesome-icon",C.a),n.default.use(x.a),n.default.use(U.a),n.default.use(b.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:h,components:{App:m},template:"<App/>"})},SYh3:function(t,e){},Yqfq:function(t,e){},iotF:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a7a2ef099b077100b821.js.map