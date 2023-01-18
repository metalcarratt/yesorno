(function(){"use strict";var e={9248:function(e,o,n){var t=n(9242),i=n(4870),a=n(3396),r=n(7139);const s={class:"playArea"};var u={__name:"PlayArea",props:{theme:String},setup(e){const o=e;return(e,n)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)(["bg",o.theme])},[(0,a._)("div",s,[(0,a.WI)(e.$slots,"default")])],2))}},c=n(89);const d=(0,c.Z)(u,[["__scopeId","data-v-7a3d0b78"]]);var p,l=d;(function(e){e["Title"]="title",e["Question"]="question",e["Answer"]="answer",e["Result"]="result"})(p||(p={}));const m=(0,i.iH)(p.Title);var w,f={goto(e){m.value=e},at(e){return m.value===e}};(function(e){e["Gross"]="gross",e["Normal"]="normal"})(w||(w={}));const y=[{question:{text:"Do you like poo?",audio:new Audio(n(8338)),chara:"boy"},answer:{type:w.Gross,yes:"으, 똥 좋아해?",yesAudio:new Audio(n(487)),no:"똥 안좋해서 다행이네.",noAudio:new Audio(n(3424))}},{question:{text:"Do you like eating dirt?",audio:new Audio(n(9049)),chara:"boy"},answer:{type:w.Gross,yes:"으, 너 흙 좋아해?",yesAudio:new Audio(n(9514)),no:"어, 다행이다, 흙 않 좋아해서.",noAudio:new Audio(n(6855))}},{question:{text:"Do you like pizza?",audio:new Audio(n(9890)),chara:"boy"},answer:{type:w.Normal,yes:"그치, 나도 피자 좋아해.",yesAudio:new Audio(n(2698)),no:"피자 안좋아네? 오, 안됐네.",noAudio:new Audio(n(6449))}},{question:{text:"Do you like eating rice?",audio:new Audio(n(7867)),chara:"boy"},answer:{type:w.Normal,yes:"그치, 나도 밥 엄청 좋아해.",yesAudio:new Audio(n(6568)),no:"어, 너 밥을 안 좋아해? 이상하네.",noAudio:new Audio(n(5232))}},{question:{text:"Do you like noodles?",audio:new Audio(n(8149)),chara:"girl"},answer:{type:w.Normal,yes:"오, 국수를 좋하한다고, 맛있다!",yesAudio:new Audio(n(7684)),no:"오, 왜 국수 안좋하해?",noAudio:new Audio(n(5946))}},{question:{text:"Do you like speaking English?",audio:new Audio(n(9703)),chara:"girl"},answer:{type:w.Normal,yes:"어, 너 영어 말하는 좋아한다고, 나도 좋아해.",yesAudio:new Audio(n(6966)),no:"왜 영어 말하는 안좋다고? 왜그래?",noAudio:new Audio(n(1223))}},{question:{text:"Do you like living in Korea?",audio:new Audio(n(2525)),chara:"girl"},answer:{type:w.Normal,yes:"와, 좋다. 나도 한국에 살아하는 좋다.",yesAudio:new Audio(n(9222)),no:"어, 너 한국에 살아하는 안 좋아해, 이상하네.",noAudio:new Audio(n(5709))}},{question:{text:"Do you like wee?",audio:new Audio(n(1676)),chara:"girl"},answer:{type:w.Gross,yes:"하하하, 오줌 좋아한대요! 하하하!",yesAudio:new Audio(n(2980)),no:"어 그래, 냄새하는 오줌은 안좋아다고, 나도 안좋아해.",noAudio:new Audio(n(6174))}},{question:{text:"Do you like farts?",audio:new Audio(n(7430)),chara:"girl"},answer:{type:w.Gross,yes:"빵귀 좋아한다고, 빵귀 좋아한다고. 냄새 나다요, 빵귀 좋아한다고.",yesAudio:new Audio(n(7582)),no:"어 다행이다, 빵귀 안좋아니가.",noAudio:new Audio(n(857))}},{question:{text:"Do you like bottoms?",audio:new Audio(n(466)),chara:"girl"},answer:{type:w.Gross,yes:"와, 너 언똥이 좋아네! 으 진짜 더럽네! ",yesAudio:new Audio(n(4434)),no:"좋겠다, 언똥이 안좋아니가.",noAudio:new Audio(n(1605))}}],g=(0,i.iH)(0),v=(0,i.iH)(0);let h;var A={init(){h=y.map((e=>({value:e,sort:Math.random()}))).sort(((e,o)=>e.sort-o.sort)).map((({value:e})=>e)),g.value=0,v.value=0},nextQuestion(){g.value++},getQuestion(){return h[g.value]},hasMore(){return g.value<h.length-1},pointUp(){v.value++},score(){return v.value}};const _=e=>((0,a.dD)("data-v-34066c5e"),e=e(),(0,a.Cn)(),e),x=_((()=>(0,a._)("h1",null,"😀 Yes or No 🤮",-1)));var k={__name:"TitlePage",setup(e){const o=()=>{A.init(),f.goto(p.Question)};return(e,n)=>((0,a.wg)(),(0,a.j4)(l,{theme:"grey"},{default:(0,a.w5)((()=>[x,(0,a._)("div",{class:"list",onClick:n[0]||(n[0]=e=>o())},"Would you like?")])),_:1}))}};const b=(0,c.Z)(k,[["__scopeId","data-v-34066c5e"]]);var q=b;const U={class:"play"};var S={__name:"SpeechBox",props:{theme:String},emits:["playSound"],setup(e,{emit:o}){const n=e;return(e,i)=>((0,a.wg)(),(0,a.iD)("h1",{class:(0,r.C_)(n.theme)},[(0,a.WI)(e.$slots,"default"),(0,a._)("span",U,[(0,a.Uk)(" ( "),(0,a._)("a",{onClick:i[0]||(i[0]=(0,t.iM)((e=>o("playSound")),["prevent"])),href:"#"},"다시 듣기"),(0,a.Uk)(" ) ")])],2))}};const D=(0,c.Z)(S,[["__scopeId","data-v-438bfca8"]]);var W=D,j={__name:"ButtonBox",emits:["click"],setup(e,{emit:o}){return(e,n)=>((0,a.wg)(),(0,a.iD)("button",{onClick:n[0]||(n[0]=e=>o("click"))},[(0,a.WI)(e.$slots,"default")]))}};const C=(0,c.Z)(j,[["__scopeId","data-v-a1fc8a6e"]]);var I=C,N=n.p+"img/girl-laughing.8a8d15d7.png",Q=n.p+"img/girl-agree.5fa27e0d.png",z=n.p+"img/girl-sad.f193e331.png",O=n.p+"img/man-delivery.cb3d7d3b.png",P=n.p+"img/girl-asking.6ea150b4.png";const G={key:0,src:N},T={key:1,src:Q},Z={key:2,src:z},M={key:3,src:O},$={key:4,src:P};var F={__name:"CharacterImage",props:{character:String},setup(e){const o=e;return(e,n)=>"girl-laugh"===o.character?((0,a.wg)(),(0,a.iD)("img",G)):"girl-agree"===o.character?((0,a.wg)(),(0,a.iD)("img",T)):"girl-sad"===o.character?((0,a.wg)(),(0,a.iD)("img",Z)):"boy-question"===o.character?((0,a.wg)(),(0,a.iD)("img",M)):"girl-question"===o.character?((0,a.wg)(),(0,a.iD)("img",$)):(0,a.kq)("",!0)}};const H=(0,c.Z)(F,[["__scopeId","data-v-489bafbe"]]);var R=H;const Y={class:"btns"};function B(e,o){return(0,a.wg)(),(0,a.iD)("div",Y,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}const E={},K=(0,c.Z)(E,[["render",B],["__scopeId","data-v-28204906"]]);var J=K,L={__name:"QuestionPage",emits:["yes","no"],setup(e,{emit:o}){const n=(0,a.Fl)((()=>A.getQuestion().question)),t=()=>{n.value.audio.play()},s=()=>"boy"===n.value.chara?"boy-question":"girl-question";return t(),(e,u)=>((0,a.wg)(),(0,a.j4)(l,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,{onPlaySound:t,theme:"purple"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)((0,i.SU)(n).text),1)])),_:1}),(0,a.Wm)(R,{character:s()},null,8,["character"]),(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[(0,a.Wm)(I,{onClick:u[0]||(u[0]=e=>o("yes"))},{default:(0,a.w5)((()=>[(0,a.Uk)("Yes / 예")])),_:1}),(0,a.Wm)(I,{onClick:u[1]||(u[1]=e=>o("no"))},{default:(0,a.w5)((()=>[(0,a.Uk)("No / 아니요")])),_:1})])),_:1})])),_:1}))}};const V=L;var X=V,ee={__name:"AnswerPage",props:{choice:String},emits:["next"],setup(e,{emit:o}){const n=e,t=(0,a.Fl)((()=>A.getQuestion().answer)),s="yes"===n.choice?t.value.yes:t.value.no,u=()=>"gross"===t.value.type?"yes"===n.choice?"red":"yellow":"yes"===n.choice?"green":"blue",c=()=>{"yes"===n.choice?t.value.yesAudio.play():t.value.noAudio.play()},d=()=>"red"===u()?"girl-laugh":"yellow"===u()||"green"===u()?"girl-agree":"girl-sad";return c(),(e,n)=>((0,a.wg)(),(0,a.j4)(l,{theme:u()},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{onPlaySound:c,theme:u()},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)((0,i.SU)(s)),1)])),_:1},8,["theme"]),(0,a.Wm)(R,{character:d()},null,8,["character"]),(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[(0,a.Wm)(I,{onClick:n[0]||(n[0]=e=>o("next"))},{default:(0,a.w5)((()=>[(0,a.Uk)("Next / 다음")])),_:1})])),_:1})])),_:1},8,["theme"]))}};const oe=ee;var ne=oe;function te(e,o){return(0,a.wg)(),(0,a.iD)("h1",null,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}const ie={},ae=(0,c.Z)(ie,[["render",te],["__scopeId","data-v-9d174e18"]]);var re=ae,se={__name:"ResultPage",setup(e){return(e,o)=>((0,a.wg)(),(0,a.j4)(l,{theme:"grey"},{default:(0,a.w5)((()=>[(0,a.Wm)(re,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Your score is "+(0,r.zw)((0,i.SU)(A).score())+" !!",1)])),_:1}),(0,a.Wm)(I,{onClick:o[0]||(o[0]=e=>(0,i.SU)(f).goto((0,i.SU)(p).Title))},{default:(0,a.w5)((()=>[(0,a.Uk)("Finish")])),_:1})])),_:1}))}};const ue=se;var ce=ue,de={__name:"App",setup(e){const o=(0,i.iH)(""),n=()=>{o.value="yes",A.getQuestion().answer.type===w.Normal&&A.pointUp(),f.goto(p.Answer)},t=()=>{o.value="no",A.getQuestion().answer.type===w.Gross&&A.pointUp(),f.goto(p.Answer)},r=()=>{o.value="",A.hasMore()?(A.nextQuestion(),f.goto(p.Question)):f.goto(p.Result)};return(e,s)=>(0,i.SU)(f).at((0,i.SU)(p).Title)?((0,a.wg)(),(0,a.j4)(q,{key:0})):(0,i.SU)(f).at((0,i.SU)(p).Question)?((0,a.wg)(),(0,a.j4)(X,{key:1,onYes:n,onNo:t})):(0,i.SU)(f).at((0,i.SU)(p).Answer)?((0,a.wg)(),(0,a.j4)(ne,{key:2,choice:o.value,onNext:r},null,8,["choice"])):(0,i.SU)(f).at((0,i.SU)(p).Result)?((0,a.wg)(),(0,a.j4)(ce,{key:3})):(0,a.kq)("",!0)}};const pe=de;var le=pe;(0,t.ri)(le).mount("#app")},1605:function(e,o,n){e.exports=n.p+"media/bottoms-no-answer.0afb3af1.mp3"},466:function(e,o,n){e.exports=n.p+"media/bottoms-question.7dd6c54c.mp3"},4434:function(e,o,n){e.exports=n.p+"media/bottoms-yes-answer.774797a3.mp3"},6855:function(e,o,n){e.exports=n.p+"media/dirt-no-answer.2e642bfb.mp3"},9049:function(e,o,n){e.exports=n.p+"media/dirt-question.4f408dbd.mp3"},9514:function(e,o,n){e.exports=n.p+"media/dirt-yes-answer.188be8f0.mp3"},1223:function(e,o,n){e.exports=n.p+"media/english-no-answer.850c150f.mp3"},9703:function(e,o,n){e.exports=n.p+"media/english-question.fe9b3a05.mp3"},6966:function(e,o,n){e.exports=n.p+"media/english-yes-answer.b0c29ecc.mp3"},857:function(e,o,n){e.exports=n.p+"media/farts-no-answer.dd40233a.mp3"},7430:function(e,o,n){e.exports=n.p+"media/farts-question.8e0e4540.mp3"},7582:function(e,o,n){e.exports=n.p+"media/farts-yes-answer.689cbfdb.mp3"},5709:function(e,o,n){e.exports=n.p+"media/korea-no-answer.9111a637.mp3"},2525:function(e,o,n){e.exports=n.p+"media/korea-question.033e28e3.mp3"},9222:function(e,o,n){e.exports=n.p+"media/korea-yes-answer.27372e46.mp3"},5946:function(e,o,n){e.exports=n.p+"media/noodles-no-answer.17c99cc5.mp3"},8149:function(e,o,n){e.exports=n.p+"media/noodles-question.853cf02c.mp3"},7684:function(e,o,n){e.exports=n.p+"media/noodles-yes-answer.e7ed9ca0.mp3"},6449:function(e,o,n){e.exports=n.p+"media/pizza-no-answer.d5bacc04.mp3"},9890:function(e,o,n){e.exports=n.p+"media/pizza-question.7145bba9.mp3"},2698:function(e,o,n){e.exports=n.p+"media/pizza-yes-answer.0de63a27.mp3"},3424:function(e,o,n){e.exports=n.p+"media/poo-no-answer.7dc815d4.mp3"},8338:function(e,o,n){e.exports=n.p+"media/poo-question.c62fc59e.mp3"},487:function(e,o,n){e.exports=n.p+"media/poo-yes-answer.fe479107.mp3"},5232:function(e,o,n){e.exports=n.p+"media/rice-no-answer.70ec402c.mp3"},7867:function(e,o,n){e.exports=n.p+"media/rice-question.0e4221d5.mp3"},6568:function(e,o,n){e.exports=n.p+"media/rice-yes-answer.3207fcc3.mp3"},6174:function(e,o,n){e.exports=n.p+"media/wee-no-answer.30400aaa.mp3"},1676:function(e,o,n){e.exports=n.p+"media/wee-question.5e15e3dc.mp3"},2980:function(e,o,n){e.exports=n.p+"media/wee-yes-answer.263e4481.mp3"}},o={};function n(t){var i=o[t];if(void 0!==i)return i.exports;var a=o[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(o,t,i,a){if(!t){var r=1/0;for(d=0;d<e.length;d++){t=e[d][0],i=e[d][1],a=e[d][2];for(var s=!0,u=0;u<t.length;u++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](t[u])}))?t.splice(u--,1):(s=!1,a<r&&(r=a));if(s){e.splice(d--,1);var c=i();void 0!==c&&(o=c)}}return o}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[t,i,a]}}(),function(){n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,{a:o}),o}}(),function(){n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){n.p="/yesorno/"}(),function(){var e={143:0};n.O.j=function(o){return 0===e[o]};var o=function(o,t){var i,a,r=t[0],s=t[1],u=t[2],c=0;if(r.some((function(o){return 0!==e[o]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(u)var d=u(n)}for(o&&o(t);c<r.length;c++)a=r[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},t=self["webpackChunkyes_or_no"]=self["webpackChunkyes_or_no"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(9248)}));t=n.O(t)})();
//# sourceMappingURL=app.57e30ba5.js.map