(function(t){function e(e){for(var r,a,o=e[0],c=e[1],u=e[2],p=0,h=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&h.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],r=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=s[0]))}return t}var r={},n={app:0},i=[];function a(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=r,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(s,r,function(e){return t[e]}.bind(null,r));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-tour/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0f89":function(t,e,s){},"133a":function(t,e,s){"use strict";var r=s("0f89"),n=s.n(r);n.a},"22ef":function(t,e,s){},"387d":function(t,e,s){"use strict";var r=s("df52"),n=s.n(r);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"section section-hero bg-gray"},[r("div",{staticClass:"grid-hero container grid-lg text-center",attrs:{id:"overview"}},[r("div",{staticClass:"docs-brand"},[r("a",{staticClass:"docs-logo",attrs:{href:"#",id:"v-step-0"},on:{click:function(e){return t.$tours["myTour"].start()}}},[r("img",{attrs:{src:s("cf05"),alt:"Vue Tour"}}),r("h2",[t._v("VUE TOUR")])])]),t._m(0),r("h1",[t._v("vue-tour")]),t._m(1),t._m(2),t._m(3),r("p",{staticClass:"text-gray"},[t._v("Latest version: "),r("span",{staticClass:"version"},[t._v(t._s(t.version))])]),t._m(4)])]),r("div",{staticClass:"section section-features bg-primary text-light text-center"},[r("div",{staticClass:"container grid-lg"},[r("h2",[t._v("Introduction")]),r("div",{staticClass:"columns"},[t._m(5),r("div",{staticClass:"column col-10 col-sm-12 col-mx-auto"},[r("my-tour")],1),t._m(6)])])]),t._m(7),r("footer",{staticClass:"section section-footer"},[r("div",{staticClass:"grid-footer container grid-lg",attrs:{id:"copyright"}},[r("p",[r("a",{attrs:{href:"https://github.com/pulsardev/vue-tour/wiki",target:"_blank"}},[t._v("Documents")]),t._v(" | "),r("a",{attrs:{href:"https://github.com/pulsardev/vue-tour",target:"_blank"}},[t._v("GitHub")]),t._v(" | "),r("a",{attrs:{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CLK49A83DXCQ8",target:"_blank"}},[t._v("PayPal Donate")]),t._v(" | Version "),r("span",{staticClass:"version"},[t._v(t._s(t.version))])]),t._m(8)])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"docs-brand docs-brand--pulsar"},[s("a",{staticClass:"docs-logo bg-dark",attrs:{href:"https://pulsar.surge.sh/",target:"_blank",id:"v-step-0-1"}},[s("h2",{staticClass:"text-light"},[t._v("PULSAR")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",[t._v("a "),s("u",[t._v("Lightweight")]),t._v(", "),s("u",[t._v("Simple")]),t._v(" and "),s("u",[t._v("Customizable")]),t._v(" tour plugin for use with Vue.js")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("a",{staticClass:"btn btn-primary btn-lg mr-2",attrs:{href:"https://github.com/pulsardev/vue-tour/wiki"}},[t._v("Docs")]),s("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:"https://github.com/pulsardev/vue-tour",target:"_blank",rel:"noopener"}},[t._v("GitHub")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("a",{staticClass:"github-button",attrs:{href:"https://github.com/pulsardev/vue-tour","data-size":"large","data-show-count":"true","aria-label":"Star pulsardev/vue-tour on GitHub"}},[t._v("Star")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column col-4 col-xs-12"},[s("div",{staticClass:"card text-center"},[s("div",{staticClass:"card-header"},[s("span",{staticClass:"card-title"},[t._v("Lightweight")])]),s("div",{staticClass:"card-body"},[t._v(" Vue Tour is composed of just two Vue components and a very small JavaScript file. ")])])]),s("div",{staticClass:"column col-4 col-xs-12"},[s("div",{staticClass:"card text-center",attrs:{id:"v-step-1"}},[s("div",{staticClass:"card-header"},[s("span",{staticClass:"card-title"},[t._v("Simple")])]),s("div",{staticClass:"card-body"},[t._v(" Add an array of steps in your component and a 'v-tour' component in your template and you're good to go! ")])])]),s("div",{staticClass:"column col-4 col-xs-12"},[s("div",{staticClass:"card text-center"},[s("div",{staticClass:"card-header"},[s("span",{staticClass:"card-title"},[t._v("Customizable")])]),s("div",{staticClass:"card-body"},[t._v(" You can change the DOM of every steps independently, use your own classes and even add custom animations. ")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column col-10 col-sm-12 col-mx-auto text-left"},[s("p",{staticClass:"text-secondary"},[t._v(" Vue Tour provides a quick and easy way to guide your users through your application. You can control the tour on this page by clicking the following buttons. ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column col-10 col-sm-12 col-mx-auto"},[s("a",{staticClass:"btn btn-lg",attrs:{href:"https://github.com/pulsardev/vue-tour",id:"v-step-2"}},[t._v("Install Vue Tour")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section section-updates bg-gray"},[s("div",{staticClass:"container grid-lg"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column col-6 col-xs-12"},[s("div",{staticClass:"card",attrs:{id:"v-step-3"}},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"card-title h6"},[t._v("PayPal Donate")])]),s("div",{staticClass:"card-body"},[t._v(" Vue Tour is completely free to use. If you enjoy it, please consider donating for the further development. ♥ ")]),s("div",{staticClass:"card-footer"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CLK49A83DXCQ8",target:"_blank"}},[t._v("Donate")])])])]),s("div",{staticClass:"column col-6 col-xs-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"card-title h6"},[t._v("Vue Tour Docs")])]),s("div",{staticClass:"card-body"},[t._v(" Go to our documentation if you want to use Vue Tour in a more advanced way. ")]),s("div",{staticClass:"card-footer"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"https://github.com/pulsardev/vue-tour/wiki"}},[t._v("Explore")])])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" Built with "),s("span",{staticClass:"text-error"},[t._v("♥")]),t._v(" by "),s("a",{attrs:{href:"https://pulsar.surge.sh",target:"_blank"}},[t._v("Pulsar")]),t._v(". Licensed under the "),s("a",{attrs:{href:"https://github.com/pulsardev/vue-tour/blob/master/LICENSE",target:"_blank"}},[t._v("MIT License")]),t._v(". ")])}],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"btn btn-lg mr-2",on:{click:function(e){return t.$tours["myTour"].start()}}},[t._v("Start the tour")]),s("button",{staticClass:"btn btn-lg mr-2",on:{click:t.nextStep}},[t._v("Next step")]),s("button",{staticClass:"btn btn-lg",on:{click:t.showLastStep}},[t._v("Show last step")]),s("v-tour",{attrs:{name:"myTour",steps:t.steps,callbacks:t.callbacks,options:{highlight:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[s("transition",{attrs:{name:"fade"}},t._l(e.steps,(function(r,n){return e.currentStep===n?s("v-step",{key:n,attrs:{step:r,"previous-step":e.previousStep,"next-step":e.nextStep,stop:e.stop,"is-first":e.isFirst,"is-last":e.isLast,labels:e.labels,highlight:e.highlight}},[2===e.currentStep?[s("div",{attrs:{slot:"actions"},slot:"actions"},[s("button",{staticClass:"btn btn-primary mr-2",on:{click:e.previousStep}},[t._v("Previous step")]),s("button",{staticClass:"btn btn-primary",on:{click:e.nextStep}},[t._v("Next step")])])]:t._e()],2):t._e()})),1)]}}])})],1)},o=[],c={name:"my-tour",data:function(){return{steps:[{target:"#v-step-0",content:"Discover <strong>Vue Tour</strong>!",params:{highlight:!1}},{target:"#v-step-0-1",content:'Created by <a href="https://github.com/pulsardev" target="_blank" rel="noopener">Pulsar</a> and its <a href="https://github.com/pulsardev/vue-tour/graphs/contributors" target="_blank" rel="noopener">contributors</a>.'},{target:"#v-step-1",header:{title:"Vue Tour"},content:"An awesome plugin made with Vue.js!"},{target:"#v-step-2",content:"Try it, you'll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.",params:{placement:"top"}},{target:"#v-step-3",params:{placement:"left"}}],callbacks:{onPreviousStep:this.myCustomPreviousStepCallback,onNextStep:this.myCustomNextStepCallback}}},mounted:function(){this.$tours["myTour"].start(),this.callbacks.onStop=function(){document.querySelector("#v-step-0").scrollIntoView({behavior:"smooth"})}},methods:{nextStep:function(){this.$tours["myTour"].nextStep()},showLastStep:function(){this.$tours["myTour"].currentStep=this.steps.length-1},myCustomPreviousStepCallback:function(t){console.log("[Vue Tour] A custom previousStep callback has been called on step "+(t+1))},myCustomNextStepCallback:function(t){console.log("[Vue Tour] A custom nextStep callback has been called on step "+(t+1)),1===t&&console.log("[Vue Tour] A custom nextStep callback has been called from step 2 to step 3")}}},u=c,l=(s("133a"),s("2877")),p=Object(l["a"])(u,a,o,!1,null,null,null),h=p.exports,d=s("d76e"),v=d.version,b={name:"app",components:{MyTour:h},data:function(){return{version:v}}},f=b,m=(s("5c0b"),Object(l["a"])(f,n,i,!1,null,null,null)),g=m.exports,_=(s("3d77"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-tour"},[t._t("default",[t.steps[t.currentStep]?s("v-step",{key:t.currentStep,attrs:{step:t.steps[t.currentStep],"previous-step":t.previousStep,"next-step":t.nextStep,stop:t.stop,"is-first":t.isFirst,"is-last":t.isLast,labels:t.customOptions.labels,highlight:t.customOptions.highlight}}):t._e()],{currentStep:t.currentStep,steps:t.steps,previousStep:t.previousStep,nextStep:t.nextStep,stop:t.stop,isFirst:t.isFirst,isLast:t.isLast,labels:t.customOptions.labels,highlight:t.customOptions.highlight})],2)}),y=[],S=(s("58bc"),s("83bc"),s("544d"),s("c134"),s("3eea"),s("2aaf"),s("2a72"),s("ade3")),C={onStart:function(){},onPreviousStep:function(t){},onNextStep:function(t){},onStop:function(){}},O={highlight:!1,labels:{buttonSkip:"Skip tour",buttonPrevious:"Previous",buttonNext:"Next",buttonStop:"Finish"},startTimeout:0,useKeyboardNavigation:!0},w={CLASSES:{ACTIVE:"v-tour--active",TARGET_HIGHLIGHTED:"v-tour__target--highlighted",TARGET_RELATIVE:"v-tour__target--relative"},TRANSITION:"box-shadow 0s ease-in-out 0s"},T={enableScrolling:!0,highlight:O.highlight,modifiers:{arrow:{element:".v-step__arrow"}},placement:"bottom"},E={ARROW_RIGHT:39,ARROW_LEFT:37,ESCAPE:27};function k(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function x(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?k(Object(s),!0).forEach((function(e){Object(S["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):k(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var j={name:"v-tour",props:{steps:{type:Array,default:function(){return[]}},name:{type:String},options:{type:Object,default:function(){return O}},callbacks:{type:Object,default:function(){return C}}},data:function(){return{currentStep:-1}},mounted:function(){this.$tours[this.name]=this,this.customOptions.useKeyboardNavigation&&window.addEventListener("keyup",this.handleKeyup)},beforeDestroy:function(){this.customOptions.useKeyboardNavigation&&window.removeEventListener("keyup",this.handleKeyup)},computed:{customOptions:function(){return x({},O,{},this.options)},customCallbacks:function(){return x({},C,{},this.callbacks)},isRunning:function(){return this.currentStep>-1&&this.currentStep<this.numberOfSteps},isFirst:function(){return 0===this.currentStep},isLast:function(){return this.currentStep===this.steps.length-1},numberOfSteps:function(){return this.steps.length}},methods:{start:function(t){var e=this;setTimeout((function(){e.customCallbacks.onStart(),e.currentStep="undefined"!==typeof t?parseInt(t,10):0}),this.customOptions.startTimeout)},previousStep:function(){this.currentStep>0&&(this.customCallbacks.onPreviousStep(this.currentStep),this.currentStep--)},nextStep:function(){this.currentStep<this.numberOfSteps-1&&-1!==this.currentStep&&(this.customCallbacks.onNextStep(this.currentStep),this.currentStep++)},stop:function(){this.customCallbacks.onStop(),document.body.classList.remove("v-tour--active"),this.currentStep=-1},handleKeyup:function(t){switch(t.keyCode){case E.ARROW_RIGHT:this.nextStep();break;case E.ARROW_LEFT:this.previousStep();break;case E.ESCAPE:this.stop();break}}}},L=j,P=(s("f14b"),Object(l["a"])(L,_,y,!1,null,null,null)),A=P.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"v-step-"+t.hash,staticClass:"v-step",attrs:{id:"v-step-"+t.hash}},[t._t("header",[t.step.header?s("div",{staticClass:"v-step__header"},[t.step.header.title?s("div",{domProps:{innerHTML:t._s(t.step.header.title)}}):t._e()]):t._e()]),t._t("content",[s("div",{staticClass:"v-step__content"},[t.step.content?s("div",{domProps:{innerHTML:t._s(t.step.content)}}):s("div",[t._v("This is a demo step! The id of this step is "+t._s(t.hash)+" and it targets "+t._s(t.step.target)+".")])])]),t._t("actions",[s("div",{staticClass:"v-step__buttons"},[t.isLast?t._e():s("button",{staticClass:"v-step__button",on:{click:function(e){return e.preventDefault(),t.stop(e)}}},[t._v(t._s(t.labels.buttonSkip))]),t.isFirst?t._e():s("button",{staticClass:"v-step__button",on:{click:function(e){return e.preventDefault(),t.previousStep(e)}}},[t._v(t._s(t.labels.buttonPrevious))]),t.isLast?t._e():s("button",{staticClass:"v-step__button",on:{click:function(e){return e.preventDefault(),t.nextStep(e)}}},[t._v(t._s(t.labels.buttonNext))]),t.isLast?s("button",{staticClass:"v-step__button",on:{click:function(e){return e.preventDefault(),t.stop(e)}}},[t._v(t._s(t.labels.buttonStop))]):t._e()])]),s("div",{staticClass:"v-step__arrow",class:{"v-step__arrow--dark":t.step.header&&t.step.header.title}})],2)},V=[],D=(s("3a9a"),s("c69d"),s("8ba3"),s("4ce8"),s("45c4"),s("b5d0")),R=s("75ed"),H=s("91da"),N=s.n(H);function $(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function G(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?$(Object(s),!0).forEach((function(e){Object(S["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):$(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var F={name:"v-step",props:{step:{type:Object},previousStep:{type:Function},nextStep:{type:Function},stop:{type:Function},isFirst:{type:Boolean},isLast:{type:Boolean},labels:{type:Object},highlight:{type:Boolean}},data:function(){return{hash:N()(this.step.target),targetElement:document.querySelector(this.step.target)}},computed:{params:function(){return G({},T,{},{highlight:this.highlight},{},this.step.params)}},methods:{createStep:function(){this.targetElement?(this.enableScrolling(),this.createHighlight(),new D["a"](this.targetElement,this.$refs["v-step-"+this.hash],this.params)):(console.error("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] does not exist!'),this.$emit("targetNotFound",this.step))},enableScrolling:function(){if(this.params.enableScrolling)if(this.step.duration||this.step.offset){var t={duration:this.step.duration||1e3,offset:this.step.offset||0,callback:void 0,a11y:!1};Object(R["a"])(this.targetElement,t)}else this.targetElement.scrollIntoView({behavior:"smooth"})},isHighlightEnabled:function(){return console.log("[Vue Tour] Highlight is ".concat(this.params.highlight?"enabled":"disabled",' for .v-step[id="').concat(this.hash,'"]')),this.params.highlight},createHighlight:function(){if(this.isHighlightEnabled()){document.body.classList.add(w.CLASSES.ACTIVE);var t=window.getComputedStyle(this.targetElement).getPropertyValue("transition");"all 0s ease 0s"!==t&&(this.targetElement.style.transition="".concat(t,", ").concat(w.TRANSITION)),this.targetElement.classList.add(w.CLASSES.TARGET_HIGHLIGHTED),this.targetElement.style.position||this.targetElement.classList.add(w.CLASSES.TARGET_RELATIVE)}else document.body.classList.remove(w.CLASSES.ACTIVE)},removeHighlight:function(){if(this.isHighlightEnabled()){var t=this.targetElement,e=this.targetElement.style.transition;this.targetElement.classList.remove(w.CLASSES.TARGET_HIGHLIGHTED),this.targetElement.classList.remove(w.CLASSES.TARGET_RELATIVE),e.includes(w.TRANSITION)&&setTimeout((function(){t.style.transition=e.replace(", ".concat(w.TRANSITION),"")}),0)}}},mounted:function(){this.createStep()},destroyed:function(){this.removeHighlight()}},M=F,K=(s("387d"),Object(l["a"])(M,I,V,!1,null,"70d1a02b",null)),z=K.exports,q={install:function(t,e){t.component(A.name,A),t.component(z.name,z),t.prototype.$tours={}}},B=q;"undefined"!==typeof window&&window.Vue&&window.Vue.use(q),r["a"].use(B),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var r=s("9c0c"),n=s.n(r);n.a},"9c0c":function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},d76e:function(t){t.exports=JSON.parse('{"name":"vue-tour","version":"1.1.0","description":"Vue Tour is a lightweight, simple and customizable tour plugin for use with Vue.js. It provides a quick and easy way to guide your users through your application.","author":"Pulsar <pulsar.dev.team@gmail.com>","license":"MIT","main":"dist/vue-tour.common.js","module":"dist/vue-tour.umd.js","repository":{"type":"git","url":"https://github.com/pulsardev/vue-tour.git"},"keywords":["vue","tour"],"homepage":"https://pulsardev.github.io/vue-tour","scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build --target lib src/main.js","test:unit":"vue-cli-service test:unit","lint":"vue-cli-service lint"},"dependencies":{"hash-sum":"^2.0.0","jump.js":"^1.0.2","popper.js":"^1.16.0","vue":"^2.6.10"},"devDependencies":{"@vue/cli-plugin-babel":"^4.1.0","@vue/cli-plugin-eslint":"^4.1.0","@vue/cli-plugin-unit-jest":"^4.1.0","@vue/cli-service":"^4.1.0","@vue/eslint-config-standard":"^4.0.0","@vue/test-utils":"1.0.0-beta.29","babel-eslint":"^10.0.3","core-js":"^3.4.3","eslint":"^5.16.0","eslint-plugin-vue":"^5.0.0","sass":"^1.23.7","sass-loader":"^8.0.0","vue-template-compiler":"^2.6.10"}}')},df52:function(t,e,s){},f14b:function(t,e,s){"use strict";var r=s("22ef"),n=s.n(r);n.a}});
//# sourceMappingURL=app.889f7258.js.map