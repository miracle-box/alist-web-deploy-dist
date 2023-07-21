!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(O){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof l?r:l,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}e.wrap=f;var p={};function l(){}function d(){}function v(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(j([])));m&&m!==n&&o.call(m,a)&&(y=m);var w=v.prototype=l.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function x(r,e){function n(i,a,c,u){var s=h(r[i],r,a);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"==t(p)&&o.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(p).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function _(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,_(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,p;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=v,s(w,"constructor",v),s(v,"constructor",d),d.displayName=s(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:j(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},e}function e(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}System.register(["./index-legacy.33b020d4.js"],(function(t){"use strict";var e,o;return{setters:[function(t){e=t.b9,o=t.b}],execute:function(){t("f",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.post("/fs/get",{path:t,password:r})})),t("a",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=arguments.length>5?arguments[5]:void 0;return e.post("/fs/list",{path:t,password:r,page:n,per_page:o,refresh:i},{cancelToken:a})})),t("m",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e.post("/fs/dirs",{path:t,password:r,force_root:n})})),t("i",(function(t){return e.post("/fs/mkdir",{path:t})})),t("g",(function(t,r){return e.post("/fs/rename",{path:t,name:r})})),t("l",(function(t,r){return e.post("/fs/batch_rename",{src_dir:t,rename_objects:r})})),t("d",(function(t,r,n){return e.post("/fs/move",{src_dir:t,dst_dir:r,names:n})})),t("j",(function(t,r){return e.post("/fs/recursive_move",{src_dir:t,dst_dir:r})})),t("c",(function(t,r,n){return e.post("/fs/copy",{src_dir:t,dst_dir:r,names:n})})),t("e",(function(t,r){return e.post("/fs/remove",{dir:t,names:r})})),t("k",(function(t){return e.post("/fs/remove_empty_directory",{src_dir:t})})),t("h",(function(t,r){return e.put("/fs/put",void 0,{headers:{"File-Path":encodeURIComponent(t),Password:r}})})),t("o",(function(t,r,n){return e.post("/fs/add_".concat(n),{path:t,urls:r})}));var i=t("b",function(){var t=n(r().mark((function t(e){var n,a,c,u,s=arguments;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!(s.length>1&&void 0!==s[1])||s[1],t.prev=1,t.next=4,o.get(e,{responseType:"blob",params:n?{ts:(new Date).getTime()}:void 0});case 4:return a=t.sent,t.next=7,a.data.text();case 7:return c=t.sent,u=a.headers["content-type"],t.abrupt("return",{content:c,contentType:u});case 12:if(t.prev=12,t.t0=t.catch(1),!n){t.next=20;break}return t.next=17,i(e,!1);case 17:t.t1=t.sent,t.next=21;break;case 20:t.t1={content:"Failed to fetch ".concat(e,": ").concat(t.t0),contentType:""};case 21:return t.abrupt("return",t.t1);case 22:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(r){return t.apply(this,arguments)}}());t("n",function(){var t=n(r().mark((function t(n,o){var i,a,c,u=arguments;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=u.length>2&&void 0!==u[2]?u[2]:"",a=u.length>3&&void 0!==u[3]?u[3]:1,c=u.length>4&&void 0!==u[4]?u[4]:100,t.abrupt("return",e.post("/fs/search",{parent:n,keywords:o,page:a,per_page:c,password:i}));case 4:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}()),t("p",n(r().mark((function t(){var n,o,i=arguments;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:["/"],o=i.length>1&&void 0!==i[1]?i[1]:-1,t.abrupt("return",e.post("/admin/index/build",{paths:n,max_depth:o}));case 3:case"end":return t.stop()}}),t)})))),t("u",n(r().mark((function t(){var n,o,i=arguments;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:[],o=i.length>1&&void 0!==i[1]?i[1]:-1,t.abrupt("return",e.post("/admin/index/update",{paths:n,max_depth:o}));case 3:case"end":return t.stop()}}),t)}))))}}}))}();
