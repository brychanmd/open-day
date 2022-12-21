(function(){"use strict";var e={19:function(e,t,o){var n=o(963),s=o(252);function a(e,t,o,n,a,r){const i=(0,s.up)("Header"),c=(0,s.up)("ExpandedTopic"),p=(0,s.up)("Content");return(0,s.wg)(),(0,s.iD)(s.HY,null,[a.openDay&&0!==Object.keys(a.openDay).length?((0,s.wg)(),(0,s.j4)(i,{key:0,openDay:a.openDay,activeTopic:a.activeTopic,onFilterChange:t[0]||(t[0]=e=>r.changeTopic(e))},null,8,["openDay","activeTopic"])):(0,s.kq)("",!0),(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[a.expandedTopic&&a.expandedTopic.id?((0,s.wg)(),(0,s.j4)(c,{key:0,topic:a.expandedTopic},null,8,["topic"])):(0,s.kq)("",!0)])),_:1})],64)}var r=o(577),i=o.p+"img/logo.8f970536.png";const c={class:"w-full bg-brand-red"},p={class:"container mx-auto sm:px-6 lg:px-8"},m={class:"md:flex md:items-center md:justify-between md:space-x-5 py-6 px-4 md:px-0"},l={class:"flex items-start space-x-5"},d=(0,s._)("div",{class:"flex-shrink-0"},[(0,s._)("div",{class:"relative"},[(0,s._)("img",{class:"h-16",src:i,alt:""}),(0,s._)("span",{class:"absolute inset-0 rounded-full shadow-inner","aria-hidden":"true"})])],-1),u={class:"pt-1.5"},g={class:"text-3xl font-bold text-white"},f={class:"text-sm font-medium text-white"},y={class:"justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3"};function v(e,t,o,n,a,i){const v=(0,s.up)("Select");return(0,s.wg)(),(0,s.iD)("section",c,[(0,s._)("div",p,[(0,s._)("div",m,[(0,s._)("div",l,[d,(0,s._)("div",u,[(0,s._)("h1",g,(0,r.zw)(o.openDay.description),1),(0,s._)("p",f,(0,r.zw)(i.formatDate(o.openDay.start_time)),1)])]),(0,s._)("div",y,[o.openDay.topics?((0,s.wg)(),(0,s.j4)(v,{key:0,topics:o.openDay.topics,onFilterChange:t[0]||(t[0]=e=>i.emit(e)),activeTopic:o.activeTopic},null,8,["topics","activeTopic"])):(0,s.kq)("",!0)])])])])}const h=(0,s._)("label",{for:"Topic",class:"block text-sm font-medium text-white"},"Choose topic",-1),x=(0,s._)("option",{value:"",selected:"",disabled:""},"Choose",-1),w=["value","selected"];function b(e,t,o,a,i,c){return(0,s.wg)(),(0,s.iD)("div",null,[h,(0,s.wy)((0,s._)("select",{id:"Topic",name:"Topic",onChange:t[0]||(t[0]=e=>c.onFilterChange(e)),"onUpdate:modelValue":t[1]||(t[1]=e=>i.key=e),class:"mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-brand-black focus:border-blue-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"},[x,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.topics,(e=>((0,s.wg)(),(0,s.iD)("option",{value:e.id,key:e.id,selected:o.activeTopic===e.id},(0,r.zw)(e.name),9,w)))),128))],544),[[n.bM,i.key]])])}var _={name:"Select",props:{topics:Array,activeTopic:Number},data(){return{key:this.activeTopic}},methods:{onFilterChange(e){this.$emit("filter-change",e.target.value),console.log(e.target.value)}}},T=o(744);const D=(0,T.Z)(_,[["render",b]]);var k=D,j={name:"Heading",props:{openDay:Object,activeTopic:Number},components:{Select:k},methods:{emit(e){console.log(e),this.$emit("filter-change",e)},formatDate(e){return new Date(e).toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}};const O=(0,T.Z)(j,[["render",v]]);var z=O;const C={class:"container mx-auto sm:px-6 lg:px-8"};function H(e,t,o,n,a,r){return(0,s.wg)(),(0,s.iD)("div",C,[(0,s.WI)(e.$slots,"default")])}var q={name:"Content",props:{},data(){return{test:38}}};const Z=(0,T.Z)(q,[["render",H]]);var F=Z;const P={class:"overflow-hidden bg-white shadow sm:rounded-lg sm:my-5 mh-32"},S={class:"bg-brand-red sm:w-2/5 p-5 sm:rounded-lg text-white"},$={class:"text-4xl font-bold sm:my-2"},B={key:0,class:""};function E(e,t,o,n,a,i){const c=(0,s.up)("Programme");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",P,[(0,s._)("div",{class:"px-4 py-5 sm:p-6 bg-no-repeat bg-cover bg-center h-full",style:(0,r.j5)({"background-image":"url("+o.topic.cover_image+")"})},[(0,s._)("div",S,[(0,s._)("h2",$,(0,r.zw)(o.topic.name),1),0!==o.topic.description.length?((0,s.wg)(),(0,s.iD)("p",B,(0,r.zw)(o.topic.description),1)):(0,s.kq)("",!0)])],4)]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.topic.programs,(e=>((0,s.wg)(),(0,s.j4)(c,{key:e.id,programme:e},null,8,["programme"])))),128))],64)}const I={class:"overflow-hidden bg-white shadow sm:rounded-lg my-2"},Y={class:"px-4 py-5 sm:px-6"},L={class:"text-lg font-medium leading-6 text-gray-900"},M={class:"mt-1 max-w-2xl text-sm text-gray-500"},U={class:"border-t border-gray-200 px-4 py-5 sm:p-0"},A={class:"sm:divide-y sm:divide-gray-200"},G={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},K=(0,s._)("dt",{class:"text-sm font-medium text-gray-500"},"Type",-1),N={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},W={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},V=(0,s._)("dt",{class:"text-sm font-medium text-gray-500"},"Time",-1),J={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},Q={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},R=(0,s._)("dt",{class:"text-sm font-medium text-gray-500"},"Description",-1),X={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},ee={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},te=(0,s._)("dt",{class:"text-sm font-medium text-gray-500"},"Location",-1),oe={class:"mt-1 font-bold text-sm text-brand-red sm:col-span-2 sm:mt-0"},ne=["href"];function se(e,t,o,n,a,i){return(0,s.wg)(),(0,s.iD)("div",I,[(0,s._)("div",Y,[(0,s._)("h3",L,(0,r.zw)(o.programme.title),1),(0,s._)("p",M,(0,r.zw)(o.programme.description_short),1)]),(0,s._)("div",U,[(0,s._)("dl",A,[(0,s._)("div",G,[K,(0,s._)("dd",N,(0,r.zw)(o.programme.programType.type),1)]),(0,s._)("div",W,[V,(0,s._)("dd",J,(0,r.zw)(i.formatTime(o.programme.start_time))+" - "+(0,r.zw)(i.formatTime(o.programme.end_time)),1)]),(0,s._)("div",Q,[R,(0,s._)("dd",X,(0,r.zw)(o.programme.description),1)]),(0,s._)("div",ee,[te,(0,s._)("dd",oe,[(0,s._)("a",{href:i.createMapUrl(o.programme.location.latitude,o.programme.location.longitude),target:"_blank"},(0,r.zw)(o.programme.location.address),9,ne)])])])])])}var ae={name:"Programme",props:{programme:Object},methods:{formatTime(e){return new Date(e).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})},createMapUrl(e,t){return`https://maps.google.com/?q=${e},${t}`}}};const re=(0,T.Z)(ae,[["render",se]]);var ie=re,ce={name:"ExpandedTopic",components:{Programme:ie},props:{topic:{type:Object,required:!0}}};const pe=(0,T.Z)(ce,[["render",E]]);var me=pe,le={name:"App",components:{Header:z,Content:F,ExpandedTopic:me},data(){return{openDay:{},activeTopic:null,expandedTopic:{}}},methods:{async fetchData(){const e=await fetch("OpenDay.json"),t=await e.json();return t},changeTopic(e){this.activeTopic=parseInt(e),this.expandedTopic=this.getTopicByID(this.activeTopic),console.log(e)},getTopicByID(e){let t=this.openDay.topics.find((t=>t.id===e));return t}},async created(){if(this.openDay=await this.fetchData(),this.openDay.topics.length>0){let e=this.openDay.topics[0].id;this.changeTopic(e)}}};const de=(0,T.Z)(le,[["render",a]]);var ue=de;(0,n.ri)(ue).mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,a){if(!n){var r=1/0;for(m=0;m<e.length;m++){n=e[m][0],s=e[m][1],a=e[m][2];for(var i=!0,c=0;c<n.length;c++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(i=!1,a<r&&(r=a));if(i){e.splice(m--,1);var p=s();void 0!==p&&(t=p)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[n,s,a]}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/open-day/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,r=n[0],i=n[1],c=n[2],p=0;if(r.some((function(t){return 0!==e[t]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(c)var m=c(o)}for(t&&t(n);p<r.length;p++)a=r[p],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(m)},n=self["webpackChunkopen_day"]=self["webpackChunkopen_day"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(19)}));n=o.O(n)})();
//# sourceMappingURL=app.3b5b3805.js.map