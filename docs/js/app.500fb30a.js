(function(){"use strict";var e={543:function(e,n,o){var t={};o.r(t),o.d(t,{N:function(){return h}});var r=o(9242),i=o(3396),u=o(7139);const s={class:"bg"},a={class:"playArea"},c={class:"btns"};var l={__name:"QuestionPage",props:{question:String},emits:["yes","no"],setup(e,{emit:n}){const o=e;return(e,t)=>((0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",a,[(0,i._)("h1",null,(0,u.zw)(o.question),1),(0,i._)("div",c,[(0,i._)("button",{onClick:t[0]||(t[0]=e=>n("yes"))},"Yes"),(0,i._)("button",{onClick:t[1]||(t[1]=e=>n("no"))},"No")])])]))}},f=o(89);const p=(0,f.Z)(l,[["__scopeId","data-v-0af7ae46"]]);var v,y=p,d=(o(7658),o(4870));(function(e){e["Gross"]="gross",e["Normal"]="normal"})(v||(v={}));const w=[{question:"Do you like poo?",answer:{type:v.Gross,yes:"Eww, you like poo?",no:"Phew, you don't like poo."}},{question:"Do you like eating mud?",answer:{type:v.Gross,yes:"Eww, you like eating mud?",no:"Phew, you don't like eating mud."}},{question:"Do you like pizza?",answer:{type:v.Normal,yes:"Nice, I like pizza too.",no:"You don't like pizza? Too bad."}},{question:"Do you like eating rice?",answer:{type:v.Normal,yes:"Nice, I like eating rice too.",no:"You don't like eating rice? Too bad."}}],h=()=>{const e=Math.floor(Math.random()*w.length);return w[e]},g={class:"playArea"};var _={__name:"AnswerPage",props:{answer:t["default"],choice:String},emits:["next"],setup(e,{emit:n}){const o=e,t="yes"===o.choice?o.answer.yes:o.answer.no,r=()=>{const e=["bg"];return"gross"===o.answer.type?"yes"===o.choice?e.push("eww"):e.push("lucky"):"yes"===o.choice?e.push("like"):e.push("dislike"),e};return(e,o)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,u.C_)(r())},[(0,i._)("div",g,[(0,i._)("h1",null,(0,u.zw)((0,d.SU)(t)),1),(0,i._)("button",{onClick:o[0]||(o[0]=e=>n("next"))},"Next")])],2))}};const b=(0,f.Z)(_,[["__scopeId","data-v-43f6668c"]]);var k=b,m={__name:"App",setup(e){const n=(0,d.iH)(h()),o=(0,d.iH)(!0),t=(0,d.iH)(""),r=()=>{t.value="yes",o.value=!1},u=()=>{t.value="no",o.value=!1},s=()=>{t.value="",o.value=!0,n.value=h()};return(e,a)=>o.value?((0,i.wg)(),(0,i.j4)(y,{key:0,question:n.value.question,onYes:r,onNo:u},null,8,["question"])):((0,i.wg)(),(0,i.j4)(k,{key:1,answer:n.value.answer,choice:t.value,onNext:s},null,8,["answer","choice"]))}};const O=m;var j=O;(0,r.ri)(j).mount("#app")}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(n,t,r,i){if(!t){var u=1/0;for(l=0;l<e.length;l++){t=e[l][0],r=e[l][1],i=e[l][2];for(var s=!0,a=0;a<t.length;a++)(!1&i||u>=i)&&Object.keys(o.O).every((function(e){return o.O[e](t[a])}))?t.splice(a--,1):(s=!1,i<u&&(u=i));if(s){e.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[t,r,i]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,i,u=t[0],s=t[1],a=t[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(a)var l=a(o)}for(n&&n(t);c<u.length;c++)i=u[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(l)},t=self["webpackChunkyes_or_no"]=self["webpackChunkyes_or_no"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(543)}));t=o.O(t)})();
//# sourceMappingURL=app.500fb30a.js.map